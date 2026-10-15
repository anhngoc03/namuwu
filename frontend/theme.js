// Theme before first paint (no flash): saved ☼/☾ choice, else follow the system.
// A separate file (not inline) so the Content-Security-Policy can forbid inline scripts.
try { var t = localStorage.getItem('henlo_theme'); if (t === 'dark' || t === 'light') document.documentElement.setAttribute('data-theme', t); } catch (e) {}
