/**
 * lib/drive.js — Google Drive for the Love album (OAuth, no library).
 * Needs GOOGLE_CLIENT_ID + GOOGLE_CLIENT_SECRET (Cloudflare → Variables and Secrets).
 * The refresh token is kept by api.js in Supabase (encrypted), never in the code.
 */
const TOKEN_URL = 'https://oauth2.googleapis.com/token';
export const DRIVE_SCOPE = 'https://www.googleapis.com/auth/drive';

export function authUrl(env, redirectUri, state) {
  const q = new URLSearchParams({
    client_id: env.GOOGLE_CLIENT_ID, redirect_uri: redirectUri, response_type: 'code',
    scope: DRIVE_SCOPE, access_type: 'offline', prompt: 'consent', include_granted_scopes: 'true', state
  });
  return 'https://accounts.google.com/o/oauth2/v2/auth?' + q.toString();
}

async function tokenCall(body) {
  const res = await fetch(TOKEN_URL, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(body).toString() });
  const j = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error('Google: ' + (j.error_description || j.error || res.status));
  return j;
}
export function exchangeCode(env, code, redirectUri) {
  return tokenCall({ code, client_id: env.GOOGLE_CLIENT_ID, client_secret: env.GOOGLE_CLIENT_SECRET, redirect_uri: redirectUri, grant_type: 'authorization_code' });
}

// access tokens live ~1 h; keep one per worker instance
let cached = { token: '', exp: 0, for: '' };
export async function accessToken(env, refreshToken) {
  if (cached.token && cached.for === refreshToken && Date.now() < cached.exp - 60000) return cached.token;
  const j = await tokenCall({ client_id: env.GOOGLE_CLIENT_ID, client_secret: env.GOOGLE_CLIENT_SECRET, refresh_token: refreshToken, grant_type: 'refresh_token' });
  cached = { token: j.access_token, exp: Date.now() + (j.expires_in || 3600) * 1000, for: refreshToken };
  return cached.token;
}

async function api(token, url, init) {
  const res = await fetch(url, Object.assign({}, init, { headers: Object.assign({ Authorization: 'Bearer ' + token }, (init && init.headers) || {}) }));
  if (!res.ok) {
    const t = await res.text().catch(() => '');
    throw new Error('Drive ' + res.status + ': ' + t.slice(0, 200));
  }
  return res;
}

// bytes: Uint8Array. Returns { id, name }.
export async function uploadFile(token, folderId, name, mimeType, bytes) {
  const boundary = 'namuwu' + Math.random().toString(36).slice(2);
  const meta = JSON.stringify({ name, parents: [folderId], mimeType });
  const enc = new TextEncoder();
  const head = enc.encode('--' + boundary + '\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n' + meta +
    '\r\n--' + boundary + '\r\nContent-Type: ' + mimeType + '\r\n\r\n');
  const tail = enc.encode('\r\n--' + boundary + '--');
  const body = new Uint8Array(head.length + bytes.length + tail.length);
  body.set(head, 0); body.set(bytes, head.length); body.set(tail, head.length + bytes.length);
  const res = await api(token, 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name&supportsAllDrives=true', {
    method: 'POST', headers: { 'Content-Type': 'multipart/related; boundary=' + boundary }, body
  });
  return res.json();
}

export async function trashFile(token, id) {
  await api(token, 'https://www.googleapis.com/drive/v3/files/' + encodeURIComponent(id) + '?supportsAllDrives=true', {
    method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ trashed: true })
  });
}

export async function folderInfo(token, id) {
  const res = await api(token, 'https://www.googleapis.com/drive/v3/files/' + encodeURIComponent(id) + '?fields=id,name,mimeType&supportsAllDrives=true');
  return res.json();
}

// A small version for the album grid (size px), or the full photo.
export async function fetchImage(token, id, size) {
  if (size) {
    const meta = await (await api(token, 'https://www.googleapis.com/drive/v3/files/' + encodeURIComponent(id) + '?fields=thumbnailLink&supportsAllDrives=true')).json();
    if (meta.thumbnailLink) {
      const res = await fetch(meta.thumbnailLink.replace(/=s\d+$/, '=s' + size), { headers: { Authorization: 'Bearer ' + token } });
      if (res.ok) return res;
    }
  }
  return api(token, 'https://www.googleapis.com/drive/v3/files/' + encodeURIComponent(id) + '?alt=media&supportsAllDrives=true');
}
