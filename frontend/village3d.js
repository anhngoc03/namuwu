(()=>{var Vl="170",es={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zd=0,bh=1,Bd=2;var Hu=1,fo=2,ri=3,Ai=0,un=1,gn=2,wi=0,Ls=1,Sh=2,wh=3,Th=4,Hd=5,Wi=100,kd=101,Vd=102,Gd=103,Wd=104,Xd=200,Yd=201,qd=202,Zd=203,xc=204,_c=205,Jd=206,$d=207,Kd=208,jd=209,Qd=210,tf=211,ef=212,nf=213,sf=214,yc=0,vc=1,Mc=2,Fs=3,Ec=4,bc=5,Sc=6,wc=7,Gl=0,rf=1,af=2,Ti=0,of=1,cf=2,lf=3,hf=4,uf=5,df=6,ff=7;var ku=300,zs=301,Bs=302,Tc=303,Ac=304,po=306,Rr=1e3,Yi=1001,Rc=1002,sn=1003,pf=1004;var oa=1005;var Zn=1006,Fo=1007;var qi=1008;var ci=1009,Vu=1010,Gu=1011,Cr=1012,Wl=1013,Zi=1014,Jn=1015,Qr=1016,Xl=1017,Yl=1018,Hs=1020,Wu=35902,Xu=1021,Yu=1022,Bn=1023,qu=1024,Zu=1025,Us=1026,ks=1027,ql=1028,Zl=1029,Ju=1030,Jl=1031;var $l=1033,za=33776,Ba=33777,Ha=33778,ka=33779,Cc=35840,Pc=35841,Ic=35842,Dc=35843,Lc=36196,Uc=37492,Nc=37496,Oc=37808,Fc=37809,zc=37810,Bc=37811,Hc=37812,kc=37813,Vc=37814,Gc=37815,Wc=37816,Xc=37817,Yc=37818,qc=37819,Zc=37820,Jc=37821,Va=36492,$c=36494,Kc=36495,$u=36283,jc=36284,Qc=36285,tl=36286;var Ga=2300,el=2301,zo=2302,Ah=2400,Rh=2401,Ch=2402;var mf=3200,gf=3201;var Ku=0,xf=1,bi="",Ge="srgb",qs="srgb-linear",mo="linear",Ae="srgb";var ds=7680;var Ph=519,_f=512,yf=513,vf=514,ju=515,Mf=516,Ef=517,bf=518,Sf=519,nl=35044;var Ih="300 es",ai=2e3,Wa=2001,li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dh=1234567,Er=Math.PI/180,Pr=180/Math.PI;function $n(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[t&255]+ln[t>>8&255]+"-"+ln[t>>16&15|64]+ln[t>>24&255]+"-"+ln[e&63|128]+ln[e>>8&255]+"-"+ln[e>>16&255]+ln[e>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function $e(i,t,e){return Math.max(t,Math.min(e,i))}function Kl(i,t){return(i%t+t)%t}function wf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Tf(i,t,e){return i!==t?(e-i)/(t-i):0}function br(i,t,e){return(1-e)*i+e*t}function Af(i,t,e,n){return br(i,t,1-Math.exp(-e*n))}function Rf(i,t=1){return t-Math.abs(Kl(i,t*2)-t)}function Cf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Pf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function If(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Df(i,t){return i+Math.random()*(t-i)}function Lf(i){return i*(.5-Math.random())}function Uf(i){i!==void 0&&(Dh=i);let t=Dh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nf(i){return i*Er}function Of(i){return i*Pr}function Ff(i){return(i&i-1)===0&&i!==0}function zf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hf(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Qu={DEG2RAD:Er,RAD2DEG:Pr,generateUUID:$n,clamp:$e,euclideanModulo:Kl,mapLinear:wf,inverseLerp:Tf,lerp:br,damp:Af,pingpong:Rf,smoothstep:Cf,smootherstep:Pf,randInt:If,randFloat:Df,randFloatSpread:Lf,seededRandom:Uf,degToRad:Nf,radToDeg:Of,isPowerOfTwo:Ff,ceilPowerOfTwo:zf,floorPowerOfTwo:Bf,setQuaternionFromProperEuler:Hf,normalize:Me,denormalize:zn},dt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ae=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],E=s[1],y=s[4],v=s[7],O=s[2],I=s[5],L=s[8];return r[0]=a*_+o*E+c*O,r[3]=a*m+o*y+c*I,r[6]=a*p+o*v+c*L,r[1]=l*_+h*E+u*O,r[4]=l*m+h*y+u*I,r[7]=l*p+h*v+u*L,r[2]=d*_+f*E+g*O,r[5]=d*m+f*y+g*I,r[8]=d*p+f*v+g*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Bo.makeScale(t,e)),this}rotate(t){return this.premultiply(Bo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Bo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Bo=new ae;function td(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kf(){let i=Ir("canvas");return i.style.display="block",i}var Lh={};function vr(i){i in Lh||(Lh[i]=!0,console.warn(i))}function Vf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Gf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Wf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ge={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ae&&(i.r=oi(i.r),i.g=oi(i.g),i.b=oi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ae&&(i.r=Ns(i.r),i.g=Ns(i.g),i.b=Ns(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===bi?mo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Uh=[.64,.33,.3,.6,.15,.06],Nh=[.2126,.7152,.0722],Oh=[.3127,.329],Fh=new ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zh=new ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ge.define({[qs]:{primaries:Uh,whitePoint:Oh,transfer:mo,toXYZ:Fh,fromXYZ:zh,luminanceCoefficients:Nh,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:Uh,whitePoint:Oh,transfer:Ae,toXYZ:Fh,fromXYZ:zh,luminanceCoefficients:Nh,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}});var fs,il=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fs===void 0&&(fs=Ir("canvas")),fs.width=t.width,fs.height=t.height;let n=fs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=fs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Ir("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=oi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(oi(e[n]/255)*255):e[n]=oi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Xf=0,Xa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=$n(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ho(s[a].image)):r.push(Ho(s[a]))}else r=Ho(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ho(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?il.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Yf=0,xn=class i extends li{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Yi,s=Yi,r=Zn,a=qi,o=Bn,c=ci,l=i.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=$n(),this.name="",this.source=new Xa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ku)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rr:t.x=t.x-Math.floor(t.x);break;case Yi:t.x=t.x<0?0:1;break;case Rc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rr:t.y=t.y-Math.floor(t.y);break;case Yi:t.y=t.y<0?0:1;break;case Rc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=ku;xn.DEFAULT_ANISOTROPY=1;var Re=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,v=(f+1)/2,O=(p+1)/2,I=(h+d)/4,L=(u+_)/4,U=(g+m)/4;return y>v&&y>O?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=I/n,r=L/n):v>O?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=I/s,r=U/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=L/r,s=U/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(d-h)/E,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sl=class extends li{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new xn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Xa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hi=class extends sl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ya=class extends xn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var rl=class extends xn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-o,p=c*d+l*f+h*g+u*_,E=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let O=Math.sqrt(y),I=Math.atan2(O,p*E);m=Math.sin(m*I)/O,o=Math.sin(o*I)/O}let v=o*E;if(c=c*m+d*v,l=l*m+f*v,h=h*m+g*v,u=u*m+_*v,m===1-o){let O=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=O,l*=O,h*=O,u*=O}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-o*f,t[e+2]=l*g+h*f+o*d-c*u,t[e+3]=h*g-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($e(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ko.copy(this).projectOnVector(t),this.sub(ko)}reflect(t){return this.sub(ko.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ko=new D,Bh=new Hn,ui=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Un):Un.fromBufferAttribute(r,a),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ca.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ca.copy(n.boundingBox)),ca.applyMatrix4(t.matrixWorld),this.union(ca)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hr),la.subVectors(this.max,hr),ps.subVectors(t.a,hr),ms.subVectors(t.b,hr),gs.subVectors(t.c,hr),xi.subVectors(ms,ps),_i.subVectors(gs,ms),Fi.subVectors(ps,gs);let e=[0,-xi.z,xi.y,0,-_i.z,_i.y,0,-Fi.z,Fi.y,xi.z,0,-xi.x,_i.z,0,-_i.x,Fi.z,0,-Fi.x,-xi.y,xi.x,0,-_i.y,_i.x,0,-Fi.y,Fi.x,0];return!Vo(e,ps,ms,gs,la)||(e=[1,0,0,0,1,0,0,0,1],!Vo(e,ps,ms,gs,la))?!1:(ha.crossVectors(xi,_i),e=[ha.x,ha.y,ha.z],Vo(e,ps,ms,gs,la))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ti=[new D,new D,new D,new D,new D,new D,new D,new D],Un=new D,ca=new ui,ps=new D,ms=new D,gs=new D,xi=new D,_i=new D,Fi=new D,hr=new D,la=new D,ha=new D,zi=new D;function Vo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){zi.fromArray(i,r);let o=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),c=t.dot(zi),l=e.dot(zi),h=n.dot(zi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var qf=new ui,ur=new D,Go=new D,Ri=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):qf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ur.subVectors(t,this.center);let e=ur.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ur,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Go.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ur.copy(t.center).add(Go)),this.expandByPoint(ur.copy(t.center).sub(Go))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ei=new D,Wo=new D,ua=new D,yi=new D,Xo=new D,da=new D,Yo=new D,Ji=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Wo.copy(t).add(e).multiplyScalar(.5),ua.copy(e).sub(t).normalize(),yi.copy(this.origin).sub(Wo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ua),o=yi.dot(this.direction),c=-yi.dot(ua),l=yi.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Wo).addScaledVector(ua,d),f}intersectSphere(t,e){ei.subVectors(t.center,this.origin);let n=ei.dot(this.direction),s=ei.dot(ei)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,n,s,r){Xo.subVectors(e,t),da.subVectors(n,t),Yo.crossVectors(Xo,da);let a=this.direction.dot(Yo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;yi.subVectors(this.origin,t);let c=o*this.direction.dot(da.crossVectors(yi,da));if(c<0)return null;let l=o*this.direction.dot(Xo.cross(yi));if(l<0||c+l>a)return null;let h=-o*yi.dot(Yo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ee=class i{constructor(t,e,n,s,r,a,o,c,l,h,u,d,f,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,f,g,_,m)}set(t,e,n,s,r,a,o,c,l,h,u,d,f,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/xs.setFromMatrixColumn(t,0).length(),r=1/xs.setFromMatrixColumn(t,1).length(),a=1/xs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-o*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zf,t,Jf)}lookAt(t,e,n){let s=this.elements;return bn.subVectors(t,e),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),vi.crossVectors(n,bn),vi.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),vi.crossVectors(n,bn)),vi.normalize(),fa.crossVectors(bn,vi),s[0]=vi.x,s[4]=fa.x,s[8]=bn.x,s[1]=vi.y,s[5]=fa.y,s[9]=bn.y,s[2]=vi.z,s[6]=fa.z,s[10]=bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],E=n[3],y=n[7],v=n[11],O=n[15],I=s[0],L=s[4],U=s[8],A=s[12],S=s[1],N=s[5],q=s[9],G=s[13],Y=s[2],V=s[6],j=s[10],mt=s[14],Q=s[3],vt=s[7],ut=s[11],Ft=s[15];return r[0]=a*I+o*S+c*Y+l*Q,r[4]=a*L+o*N+c*V+l*vt,r[8]=a*U+o*q+c*j+l*ut,r[12]=a*A+o*G+c*mt+l*Ft,r[1]=h*I+u*S+d*Y+f*Q,r[5]=h*L+u*N+d*V+f*vt,r[9]=h*U+u*q+d*j+f*ut,r[13]=h*A+u*G+d*mt+f*Ft,r[2]=g*I+_*S+m*Y+p*Q,r[6]=g*L+_*N+m*V+p*vt,r[10]=g*U+_*q+m*j+p*ut,r[14]=g*A+_*G+m*mt+p*Ft,r[3]=E*I+y*S+v*Y+O*Q,r[7]=E*L+y*N+v*V+O*vt,r[11]=E*U+y*q+v*j+O*ut,r[15]=E*A+y*G+v*mt+O*Ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*f-n*c*f)+_*(+e*c*f-e*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+m*(+e*l*u-e*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-s*o*h-e*c*u+e*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],E=u*m*l-_*d*l+_*c*f-o*m*f-u*c*p+o*d*p,y=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,v=h*_*l-g*u*l+g*o*f-a*_*f-h*o*p+a*u*p,O=g*u*c-h*_*c-g*o*d+a*_*d+h*o*m-a*u*m,I=e*E+n*y+s*v+r*O;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/I;return t[0]=E*L,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*L,t[2]=(o*m*r-_*c*r+_*s*l-n*m*l-o*s*p+n*c*p)*L,t[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*f-n*c*f)*L,t[4]=y*L,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*L,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*p-e*c*p)*L,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*f+e*c*f)*L,t[8]=v*L,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*L,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*p+e*o*p)*L,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*f-e*o*f)*L,t[12]=O*L,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*L,t[14]=(g*o*s-a*_*s-g*n*c+e*_*c+a*n*m-e*o*m)*L,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*d+e*o*d)*L,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,E=c*l,y=c*h,v=c*u,O=n.x,I=n.y,L=n.z;return s[0]=(1-(_+p))*O,s[1]=(f+v)*O,s[2]=(g-y)*O,s[3]=0,s[4]=(f-v)*I,s[5]=(1-(d+p))*I,s[6]=(m+E)*I,s[7]=0,s[8]=(g+y)*L,s[9]=(m-E)*L,s[10]=(1-(d+_))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=xs.set(s[0],s[1],s[2]).length(),a=xs.set(s[4],s[5],s[6]).length(),o=xs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Nn.copy(this);let l=1/r,h=1/a,u=1/o;return Nn.elements[0]*=l,Nn.elements[1]*=l,Nn.elements[2]*=l,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=u,Nn.elements[9]*=u,Nn.elements[10]*=u,e.setFromRotationMatrix(Nn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=ai){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,g;if(o===ai)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Wa)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ai){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*l,f=(n+s)*h,g,_;if(o===ai)g=(a+r)*u,_=-2*u;else if(o===Wa)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},xs=new D,Nn=new Ee,Zf=new D(0,0,0),Jf=new D(1,1,1),vi=new D,fa=new D,bn=new D,Hh=new Ee,kh=new Hn,Kn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kh.setFromEuler(this),this.setFromQuaternion(kh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kn.DEFAULT_ORDER="XYZ";var Dr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},$f=0,Vh=new D,_s=new Hn,ni=new Ee,pa=new D,dr=new D,Kf=new D,jf=new Hn,Gh=new D(1,0,0),Wh=new D(0,1,0),Xh=new D(0,0,1),Yh={type:"added"},Qf={type:"removed"},ys={type:"childadded",child:null},qo={type:"childremoved",child:null},We=class i extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new Kn,n=new Hn,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ee},normalMatrix:{value:new ae}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.multiply(_s),this}rotateOnWorldAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.premultiply(_s),this}rotateX(t){return this.rotateOnAxis(Gh,t)}rotateY(t){return this.rotateOnAxis(Wh,t)}rotateZ(t){return this.rotateOnAxis(Xh,t)}translateOnAxis(t,e){return Vh.copy(t).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gh,t)}translateY(t){return this.translateOnAxis(Wh,t)}translateZ(t){return this.translateOnAxis(Xh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?pa.copy(t):pa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(dr,pa,this.up):ni.lookAt(pa,dr,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(ni),this.quaternion.premultiply(_s.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yh),ys.child=t,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qf),qo.child=t,this.dispatchEvent(qo),qo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yh),ys.child=t,this.dispatchEvent(ys),ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,t,Kf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,jf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};We.DEFAULT_UP=new D(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var On=new D,ii=new D,Zo=new D,si=new D,vs=new D,Ms=new D,qh=new D,Jo=new D,$o=new D,Ko=new D,jo=new Re,Qo=new Re,tc=new Re,Si=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),On.subVectors(t,e),s.cross(On);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){On.subVectors(s,e),ii.subVectors(n,e),Zo.subVectors(t,e);let a=On.dot(On),o=On.dot(ii),c=On.dot(Zo),l=ii.dot(ii),h=ii.dot(Zo),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,si.x),c.addScaledVector(a,si.y),c.addScaledVector(o,si.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return jo.setScalar(0),Qo.setScalar(0),tc.setScalar(0),jo.fromBufferAttribute(t,e),Qo.fromBufferAttribute(t,n),tc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(jo,r.x),a.addScaledVector(Qo,r.y),a.addScaledVector(tc,r.z),a}static isFrontFacing(t,e,n,s){return On.subVectors(n,e),ii.subVectors(t,e),On.cross(ii).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),On.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;vs.subVectors(s,n),Ms.subVectors(r,n),Jo.subVectors(t,n);let c=vs.dot(Jo),l=Ms.dot(Jo);if(c<=0&&l<=0)return e.copy(n);$o.subVectors(t,s);let h=vs.dot($o),u=Ms.dot($o);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(vs,a);Ko.subVectors(t,r);let f=vs.dot(Ko),g=Ms.dot(Ko);if(g>=0&&f<=g)return e.copy(r);let _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Ms,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return qh.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(qh,o);let p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(vs,a).addScaledVector(Ms,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},ma={h:0,s:0,l:0};function ec(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ge.workingColorSpace){if(t=Kl(t,1),e=$e(e,0,1),n=$e(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ec(a,r,t+1/3),this.g=ec(a,r,t),this.b=ec(a,r,t-1/3)}return ge.toWorkingColorSpace(this,s),this}setStyle(t,e=Ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){let n=ed[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oi(t.r),this.g=oi(t.g),this.b=oi(t.b),this}copyLinearToSRGB(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return ge.fromWorkingColorSpace(hn.copy(this),t),Math.round($e(hn.r*255,0,255))*65536+Math.round($e(hn.g*255,0,255))*256+Math.round($e(hn.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.fromWorkingColorSpace(hn.copy(this),e);let n=hn.r,s=hn.g,r=hn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ge.workingColorSpace){return ge.fromWorkingColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=Ge){ge.fromWorkingColorSpace(hn.copy(this),t);let e=hn.r,n=hn.g,s=hn.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Mi),this.setHSL(Mi.h+t,Mi.s+e,Mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mi),t.getHSL(ma);let n=br(Mi.h,ma.h,e),s=br(Mi.s,ma.s,e),r=br(Mi.l,ma.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new Qt;Qt.NAMES=ed;var tp=0,di=class extends li{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=$n(),this.name="",this.blending=Ls,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xc,this.blendDst=_c,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xc&&(n.blendSrc=this.blendSrc),this.blendDst!==_c&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ph&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},He=class extends di{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Be=new D,ga=new dt,je=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=nl,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ga.fromBufferAttribute(this,e),ga.applyMatrix3(t),this.setXY(e,ga.x,ga.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=zn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==nl&&(t.usage=this.usage),t}};var qa=class extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Za=class extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var le=class extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}},ep=0,Rn=new Ee,nc=new We,Es=new D,Sn=new ui,fr=new ui,Je=new D,Le=class i extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(td(t)?Za:qa)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ae().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return nc.lookAt(t),nc.updateMatrix(),this.applyMatrix4(nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new le(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];fr.setFromBufferAttribute(o),this.morphTargetsRelative?(Je.addVectors(Sn.min,fr.min),Sn.expandByPoint(Je),Je.addVectors(Sn.max,fr.max),Sn.expandByPoint(Je)):(Sn.expandByPoint(fr.min),Sn.expandByPoint(fr.max))}Sn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Je));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Je.fromBufferAttribute(o,l),c&&(Es.fromBufferAttribute(t,l),Je.add(Es)),s=Math.max(s,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<n.count;U++)o[U]=new D,c[U]=new D;let l=new D,h=new D,u=new D,d=new dt,f=new dt,g=new dt,_=new D,m=new D;function p(U,A,S){l.fromBufferAttribute(n,U),h.fromBufferAttribute(n,A),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,U),f.fromBufferAttribute(r,A),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let N=1/(f.x*g.y-g.x*f.y);isFinite(N)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(N),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(N),o[U].add(_),o[A].add(_),o[S].add(_),c[U].add(m),c[A].add(m),c[S].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let U=0,A=E.length;U<A;++U){let S=E[U],N=S.start,q=S.count;for(let G=N,Y=N+q;G<Y;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let y=new D,v=new D,O=new D,I=new D;function L(U){O.fromBufferAttribute(s,U),I.copy(O);let A=o[U];y.copy(A),y.sub(O.multiplyScalar(O.dot(A))).normalize(),v.crossVectors(I,A);let N=v.dot(c[U])<0?-1:1;a.setXYZW(U,y.x,y.y,y.z,N)}for(let U=0,A=E.length;U<A;++U){let S=E[U],N=S.start,q=S.count;for(let G=N,Y=N+q;G<Y;G+=3)L(t.getX(G+0)),L(t.getX(G+1)),L(t.getX(G+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new D,r=new D,a=new D,o=new D,c=new D,l=new D,h=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new je(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zh=new Ee,Bi=new Ji,xa=new Ri,Jh=new D,_a=new D,ya=new D,va=new D,ic=new D,Ma=new D,$h=new D,Ea=new D,pt=class extends We{constructor(t=new Le,e=new He){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ma.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(ic.fromBufferAttribute(u,t),a?Ma.addScaledVector(ic,h):Ma.addScaledVector(ic.sub(e),h))}e.add(Ma)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(r),Bi.copy(t.ray).recast(t.near),!(xa.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(xa,Jh)===null||Bi.origin.distanceToSquared(Jh)>(t.far-t.near)**2))&&(Zh.copy(r).invert(),Bi.copy(t.ray).applyMatrix4(Zh),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,O=y;v<O;v+=3){let I=o.getX(v),L=o.getX(v+1),U=o.getX(v+2);s=ba(this,p,t,n,l,h,u,I,L,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let E=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);s=ba(this,a,t,n,l,h,u,E,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,O=y;v<O;v+=3){let I=v,L=v+1,U=v+2;s=ba(this,p,t,n,l,h,u,I,L,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let E=m,y=m+1,v=m+2;s=ba(this,a,t,n,l,h,u,E,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function np(i,t,e,n,s,r,a,o){let c;if(t.side===un?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Ai,o),c===null)return null;Ea.copy(o),Ea.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ea);return l<e.near||l>e.far?null:{distance:l,point:Ea.clone(),object:i}}function ba(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,_a),i.getVertexPosition(c,ya),i.getVertexPosition(l,va);let h=np(i,t,e,n,_a,ya,va,$h);if(h){let u=new D;Si.getBarycoord($h,_a,ya,va,u),s&&(h.uv=Si.getInterpolatedAttribute(s,o,c,l,u,new dt)),r&&(h.uv1=Si.getInterpolatedAttribute(r,o,c,l,u,new dt)),a&&(h.normal=Si.getInterpolatedAttribute(a,o,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new D,materialIndex:0};Si.getNormal(_a,ya,va,d.normal),h.face=d,h.barycoord=u}return h}var Fe=class i extends Le{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(u,2));function g(_,m,p,E,y,v,O,I,L,U,A){let S=v/L,N=O/U,q=v/2,G=O/2,Y=I/2,V=L+1,j=U+1,mt=0,Q=0,vt=new D;for(let ut=0;ut<j;ut++){let Ft=ut*N-G;for(let ne=0;ne<V;ne++){let Yt=ne*S-q;vt[_]=Yt*E,vt[m]=Ft*y,vt[p]=Y,l.push(vt.x,vt.y,vt.z),vt[_]=0,vt[m]=0,vt[p]=I>0?1:-1,h.push(vt.x,vt.y,vt.z),u.push(ne/L),u.push(1-ut/U),mt+=1}}for(let ut=0;ut<U;ut++)for(let Ft=0;Ft<L;Ft++){let ne=d+Ft+V*ut,Yt=d+Ft+V*(ut+1),it=d+(Ft+1)+V*(ut+1),xt=d+(Ft+1)+V*ut;c.push(ne,Yt,xt),c.push(Yt,it,xt),Q+=6}o.addGroup(f,Q,A),f+=Q,d+=mt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Vs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function mn(i){let t={};for(let e=0;e<i.length;e++){let n=Vs(i[e]);for(let s in n)t[s]=n[s]}return t}function ip(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function nd(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}var sp={clone:Vs,merge:mn},rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ap=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Cn=class extends di{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rp,this.fragmentShader=ap,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vs(t.uniforms),this.uniformsGroups=ip(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ja=class extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=ai}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ei=new D,Kh=new dt,jh=new dt,Ke=class extends Ja{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Pr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z)}getViewSize(t,e){return this.getViewBounds(t,Kh,jh),e.subVectors(jh,Kh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Er*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},bs=-90,Ss=1,al=class extends We{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ke(bs,Ss,t,e);s.layers=this.layers,this.add(s);let r=new Ke(bs,Ss,t,e);r.layers=this.layers,this.add(r);let a=new Ke(bs,Ss,t,e);a.layers=this.layers,this.add(a);let o=new Ke(bs,Ss,t,e);o.layers=this.layers,this.add(o);let c=new Ke(bs,Ss,t,e);c.layers=this.layers,this.add(c);let l=new Ke(bs,Ss,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===ai)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Wa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},$a=class extends xn{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:zs,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ol=class extends hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new $a(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Zn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Fe(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:Vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:wi});r.uniforms.tEquirect.value=e;let a=new pt(s,r),o=e.minFilter;return e.minFilter===qi&&(e.minFilter=Zn),new al(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},sc=new D,op=new D,cp=new ae,Fn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=sc.subVectors(n,e).cross(op.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(sc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||cp.getNormalMatrix(t),s=this.coplanarPoint(sc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hi=new Ri,Sa=new D,Lr=class{constructor(t=new Fn,e=new Fn,n=new Fn,s=new Fn,r=new Fn,a=new Fn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ai){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],E=s[13],y=s[14],v=s[15];if(n[0].setComponents(c-r,d-l,m-f,v-p).normalize(),n[1].setComponents(c+r,d+l,m+f,v+p).normalize(),n[2].setComponents(c+a,d+h,m+g,v+E).normalize(),n[3].setComponents(c-a,d-h,m-g,v-E).normalize(),n[4].setComponents(c-o,d-u,m-_,v-y).normalize(),e===ai)n[5].setComponents(c+o,d+u,m+_,v+y).normalize();else if(e===Wa)n[5].setComponents(o,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(t){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Sa.x=s.normal.x>0?t.max.x:t.min.x,Sa.y=s.normal.y>0?t.max.y:t.min.y,Sa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function id(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function lp(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var fi=class i extends Le{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let E=p*d-a;for(let y=0;y<l;y++){let v=y*u-r;g.push(v,-E,0),_.push(0,0,1),m.push(y/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<o;E++){let y=E+l*p,v=E+l*(p+1),O=E+1+l*(p+1),I=E+1+l*p;f.push(y,v,I),f.push(v,O,I)}this.setIndex(f),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},hp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,up=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_p=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ep=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Lp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Up=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Np=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Op=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hp="gl_FragColor = linearToOutputTexel( gl_FragColor );",kp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$p=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,em=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,im=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,am=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,om=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,um=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ym=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Em=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Tm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Am=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Rm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Im=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Um=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Om=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,km=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ym=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$m=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Km=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,i0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,s0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,a0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,c0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,l0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,g0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,x0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,E0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,S0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,R0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,P0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,I0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,U0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,z0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,k0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,V0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:hp,alphahash_pars_fragment:up,alphamap_fragment:dp,alphamap_pars_fragment:fp,alphatest_fragment:pp,alphatest_pars_fragment:mp,aomap_fragment:gp,aomap_pars_fragment:xp,batching_pars_vertex:_p,batching_vertex:yp,begin_vertex:vp,beginnormal_vertex:Mp,bsdfs:Ep,iridescence_fragment:bp,bumpmap_pars_fragment:Sp,clipping_planes_fragment:wp,clipping_planes_pars_fragment:Tp,clipping_planes_pars_vertex:Ap,clipping_planes_vertex:Rp,color_fragment:Cp,color_pars_fragment:Pp,color_pars_vertex:Ip,color_vertex:Dp,common:Lp,cube_uv_reflection_fragment:Up,defaultnormal_vertex:Np,displacementmap_pars_vertex:Op,displacementmap_vertex:Fp,emissivemap_fragment:zp,emissivemap_pars_fragment:Bp,colorspace_fragment:Hp,colorspace_pars_fragment:kp,envmap_fragment:Vp,envmap_common_pars_fragment:Gp,envmap_pars_fragment:Wp,envmap_pars_vertex:Xp,envmap_physical_pars_fragment:nm,envmap_vertex:Yp,fog_vertex:qp,fog_pars_vertex:Zp,fog_fragment:Jp,fog_pars_fragment:$p,gradientmap_pars_fragment:Kp,lightmap_pars_fragment:jp,lights_lambert_fragment:Qp,lights_lambert_pars_fragment:tm,lights_pars_begin:em,lights_toon_fragment:im,lights_toon_pars_fragment:sm,lights_phong_fragment:rm,lights_phong_pars_fragment:am,lights_physical_fragment:om,lights_physical_pars_fragment:cm,lights_fragment_begin:lm,lights_fragment_maps:hm,lights_fragment_end:um,logdepthbuf_fragment:dm,logdepthbuf_pars_fragment:fm,logdepthbuf_pars_vertex:pm,logdepthbuf_vertex:mm,map_fragment:gm,map_pars_fragment:xm,map_particle_fragment:_m,map_particle_pars_fragment:ym,metalnessmap_fragment:vm,metalnessmap_pars_fragment:Mm,morphinstance_vertex:Em,morphcolor_vertex:bm,morphnormal_vertex:Sm,morphtarget_pars_vertex:wm,morphtarget_vertex:Tm,normal_fragment_begin:Am,normal_fragment_maps:Rm,normal_pars_fragment:Cm,normal_pars_vertex:Pm,normal_vertex:Im,normalmap_pars_fragment:Dm,clearcoat_normal_fragment_begin:Lm,clearcoat_normal_fragment_maps:Um,clearcoat_pars_fragment:Nm,iridescence_pars_fragment:Om,opaque_fragment:Fm,packing:zm,premultiplied_alpha_fragment:Bm,project_vertex:Hm,dithering_fragment:km,dithering_pars_fragment:Vm,roughnessmap_fragment:Gm,roughnessmap_pars_fragment:Wm,shadowmap_pars_fragment:Xm,shadowmap_pars_vertex:Ym,shadowmap_vertex:qm,shadowmask_pars_fragment:Zm,skinbase_vertex:Jm,skinning_pars_vertex:$m,skinning_vertex:Km,skinnormal_vertex:jm,specularmap_fragment:Qm,specularmap_pars_fragment:t0,tonemapping_fragment:e0,tonemapping_pars_fragment:n0,transmission_fragment:i0,transmission_pars_fragment:s0,uv_pars_fragment:r0,uv_pars_vertex:a0,uv_vertex:o0,worldpos_vertex:c0,background_vert:l0,background_frag:h0,backgroundCube_vert:u0,backgroundCube_frag:d0,cube_vert:f0,cube_frag:p0,depth_vert:m0,depth_frag:g0,distanceRGBA_vert:x0,distanceRGBA_frag:_0,equirect_vert:y0,equirect_frag:v0,linedashed_vert:M0,linedashed_frag:E0,meshbasic_vert:b0,meshbasic_frag:S0,meshlambert_vert:w0,meshlambert_frag:T0,meshmatcap_vert:A0,meshmatcap_frag:R0,meshnormal_vert:C0,meshnormal_frag:P0,meshphong_vert:I0,meshphong_frag:D0,meshphysical_vert:L0,meshphysical_frag:U0,meshtoon_vert:N0,meshtoon_frag:O0,points_vert:F0,points_frag:z0,shadow_vert:B0,shadow_frag:H0,sprite_vert:k0,sprite_frag:V0},Pt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},qn={basic:{uniforms:mn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:mn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:mn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:mn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:mn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:mn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:mn([Pt.points,Pt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:mn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:mn([Pt.common,Pt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:mn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:mn([Pt.sprite,Pt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:mn([Pt.common,Pt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:mn([Pt.lights,Pt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};qn.physical={uniforms:mn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var wa={r:0,b:0,g:0},ki=new Kn,G0=new Ee;function W0(i,t,e,n,s,r,a){let o=new Qt(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?e:t).get(y)),y}function _(E){let y=!1,v=g(E);v===null?p(o,c):v&&v.isColor&&(p(v,1),y=!0);let O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,y){let v=g(y);v&&(v.isCubeTexture||v.mapping===po)?(h===void 0&&(h=new pt(new Fe(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Vs(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ki.copy(y.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(G0.makeRotationFromEuler(ki)),h.material.toneMapped=ge.getTransfer(v.colorSpace)!==Ae,(u!==v||d!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new pt(new fi(2,2),new Cn({name:"BackgroundMaterial",uniforms:Vs(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ge.getTransfer(v.colorSpace)!==Ae,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,y){E.getRGB(wa,nd(i)),n.buffers.color.setClear(wa.r,wa.g,wa.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(E,y=1){o.set(E),c=y,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,p(o,c)},render:_,addToRenderList:m}}function X0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(S,N,q,G,Y){let V=!1,j=u(G,q,N);r!==j&&(r=j,l(r.object)),V=f(S,G,q,Y),V&&g(S,G,q,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,v(S,N,q,G),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,N,q){let G=q.wireframe===!0,Y=n[S.id];Y===void 0&&(Y={},n[S.id]=Y);let V=Y[N.id];V===void 0&&(V={},Y[N.id]=V);let j=V[G];return j===void 0&&(j=d(c()),V[G]=j),j}function d(S){let N=[],q=[],G=[];for(let Y=0;Y<e;Y++)N[Y]=0,q[Y]=0,G[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:q,attributeDivisors:G,object:S,attributes:{},index:null}}function f(S,N,q,G){let Y=r.attributes,V=N.attributes,j=0,mt=q.getAttributes();for(let Q in mt)if(mt[Q].location>=0){let ut=Y[Q],Ft=V[Q];if(Ft===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(Ft=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(Ft=S.instanceColor)),ut===void 0||ut.attribute!==Ft||Ft&&ut.data!==Ft.data)return!0;j++}return r.attributesNum!==j||r.index!==G}function g(S,N,q,G){let Y={},V=N.attributes,j=0,mt=q.getAttributes();for(let Q in mt)if(mt[Q].location>=0){let ut=V[Q];ut===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(ut=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(ut=S.instanceColor));let Ft={};Ft.attribute=ut,ut&&ut.data&&(Ft.data=ut.data),Y[Q]=Ft,j++}r.attributes=Y,r.attributesNum=j,r.index=G}function _(){let S=r.newAttributes;for(let N=0,q=S.length;N<q;N++)S[N]=0}function m(S){p(S,0)}function p(S,N){let q=r.newAttributes,G=r.enabledAttributes,Y=r.attributeDivisors;q[S]=1,G[S]===0&&(i.enableVertexAttribArray(S),G[S]=1),Y[S]!==N&&(i.vertexAttribDivisor(S,N),Y[S]=N)}function E(){let S=r.newAttributes,N=r.enabledAttributes;for(let q=0,G=N.length;q<G;q++)N[q]!==S[q]&&(i.disableVertexAttribArray(q),N[q]=0)}function y(S,N,q,G,Y,V,j){j===!0?i.vertexAttribIPointer(S,N,q,Y,V):i.vertexAttribPointer(S,N,q,G,Y,V)}function v(S,N,q,G){_();let Y=G.attributes,V=q.getAttributes(),j=N.defaultAttributeValues;for(let mt in V){let Q=V[mt];if(Q.location>=0){let vt=Y[mt];if(vt===void 0&&(mt==="instanceMatrix"&&S.instanceMatrix&&(vt=S.instanceMatrix),mt==="instanceColor"&&S.instanceColor&&(vt=S.instanceColor)),vt!==void 0){let ut=vt.normalized,Ft=vt.itemSize,ne=t.get(vt);if(ne===void 0)continue;let Yt=ne.buffer,it=ne.type,xt=ne.bytesPerElement,Bt=it===i.INT||it===i.UNSIGNED_INT||vt.gpuType===Wl;if(vt.isInterleavedBufferAttribute){let _t=vt.data,Zt=_t.stride,lt=vt.offset;if(_t.isInstancedInterleavedBuffer){for(let ft=0;ft<Q.locationSize;ft++)p(Q.location+ft,_t.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let ft=0;ft<Q.locationSize;ft++)m(Q.location+ft);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let ft=0;ft<Q.locationSize;ft++)y(Q.location+ft,Ft/Q.locationSize,it,ut,Zt*xt,(lt+Ft/Q.locationSize*ft)*xt,Bt)}else{if(vt.isInstancedBufferAttribute){for(let _t=0;_t<Q.locationSize;_t++)p(Q.location+_t,vt.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let _t=0;_t<Q.locationSize;_t++)m(Q.location+_t);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let _t=0;_t<Q.locationSize;_t++)y(Q.location+_t,Ft/Q.locationSize,it,ut,Ft*xt,Ft/Q.locationSize*_t*xt,Bt)}}else if(j!==void 0){let ut=j[mt];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(Q.location,ut);break;case 3:i.vertexAttrib3fv(Q.location,ut);break;case 4:i.vertexAttrib4fv(Q.location,ut);break;default:i.vertexAttrib1fv(Q.location,ut)}}}}E()}function O(){U();for(let S in n){let N=n[S];for(let q in N){let G=N[q];for(let Y in G)h(G[Y].object),delete G[Y];delete N[q]}delete n[S]}}function I(S){if(n[S.id]===void 0)return;let N=n[S.id];for(let q in N){let G=N[q];for(let Y in G)h(G[Y].object),delete G[Y];delete N[q]}delete n[S.id]}function L(S){for(let N in n){let q=n[N];if(q[S.id]===void 0)continue;let G=q[S.id];for(let Y in G)h(G[Y].object),delete G[Y];delete q[S.id]}}function U(){A(),a=!0,r!==s&&(r=s,l(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:A,dispose:O,releaseStatesOfGeometry:I,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function Y0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function q0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==Bn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let U=L===Qr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==ci&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Jn&&!U)}function c(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:O,maxSamples:I}}function Z0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Fn,o=new ae,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let E=r?0:n,y=E*4,v=p.clippingState||null;c.value=v,v=h(g,d,y,f);for(let O=0;O!==y;++O)v[O]=e[O];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=f+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=f;y!==_;++y,v+=4)a.copy(u[y]).applyMatrix4(E,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function J0(i){let t=new WeakMap;function e(a,o){return o===Tc?a.mapping=zs:o===Ac&&(a.mapping=Bs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Tc||o===Ac)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new ol(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ka=class extends Ja{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Is=4,Qh=[.125,.215,.35,.446,.526,.582],Xi=20,rc=new Ka,tu=new Qt,ac=null,oc=0,cc=0,lc=!1,Gi=(1+Math.sqrt(5))/2,ws=1/Gi,eu=[new D(-Gi,ws,0),new D(Gi,ws,0),new D(-ws,0,Gi),new D(ws,0,Gi),new D(0,Gi,-ws),new D(0,Gi,ws),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],ja=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ac=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ac,oc,cc),this._renderer.xr.enabled=lc,t.scissorTest=!1,Ta(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zs||t.mapping===Bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ac=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:Qr,format:Bn,colorSpace:qs,depthBuffer:!1},s=nu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$0(r)),this._blurMaterial=K0(r,t,e)}return s}_compileMaterial(t){let e=new pt(this._lodPlanes[0],t);this._renderer.compile(e,rc)}_sceneToCubeUV(t,e,n,s){let o=new Ke(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(tu),h.toneMapping=Ti,h.autoClear=!1;let f=new He({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new pt(new Fe,f),_=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(tu),_=!0);for(let p=0;p<6;p++){let E=p%3;E===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):E===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let y=this._cubeSize;Ta(s,E*y,p>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===zs||t.mapping===Bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=su()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new pt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Ta(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,rc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=eu[(s-r-1)%eu.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new pt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Xi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Xi;m>Xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xi}`);let p=[],E=0;for(let L=0;L<Xi;++L){let U=L/_,A=Math.exp(-U*U/2);p.push(A),L===0?E+=A:L<m&&(E+=2*A)}for(let L=0;L<p.length;L++)p[L]=p[L]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let v=this._sizeLods[s],O=3*v*(s>y-Is?s-y+Is:0),I=4*(this._cubeSize-v);Ta(e,O,I,3*v,2*v),c.setRenderTarget(e),c.render(u,rc)}};function $0(i){let t=[],e=[],n=[],s=i,r=i-Is+1+Qh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Is?c=Qh[a-i+Is-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*f),y=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let I=0;I<f;I++){let L=I%3*2/3-1,U=I>2?0:-1,A=[L,U,0,L+2/3,U,0,L+2/3,U+1,0,L,U,0,L+2/3,U+1,0,L,U+1,0];E.set(A,_*g*I),y.set(d,m*g*I);let S=[I,I,I,I,I,I];v.set(S,p*g*I)}let O=new Le;O.setAttribute("position",new je(E,_)),O.setAttribute("uv",new je(y,m)),O.setAttribute("faceIndex",new je(v,p)),t.push(O),s>Is&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function nu(i,t,e){let n=new hi(i,t,e);return n.texture.mapping=po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ta(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function K0(i,t,e){let n=new Float32Array(Xi),s=new D(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function iu(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function su(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function jl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function j0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Tc||c===Ac,h=c===zs||c===Bs;if(l||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new ja(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new ja(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Q0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&vr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function tg(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let E=f.array;_=f.version;for(let y=0,v=E.length;y<v;y+=3){let O=E[y+0],I=E[y+1],L=E[y+2];d.push(O,I,I,L,L,O)}}else if(g!==void 0){let E=g.array;_=g.version;for(let y=0,v=E.length/3-1;y<v;y+=3){let O=y+0,I=y+1,L=y+2;d.push(O,I,I,L,L,O)}}else return;let m=new(td(d)?Za:qa)(d,1);m.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function eg(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=f[E]*_[E];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ng(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ig(i,t,e){let n=new WeakMap,s=new Re;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let A=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],y=0;f===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let v=o.attributes.position.count*y,O=1;v>t.maxTextureSize&&(O=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let I=new Float32Array(v*O*4*u),L=new Ya(I,v,O,u);L.type=Jn,L.needsUpdate=!0;let U=y*4;for(let S=0;S<u;S++){let N=m[S],q=p[S],G=E[S],Y=v*O*4*S;for(let V=0;V<N.count;V++){let j=V*U;f===!0&&(s.fromBufferAttribute(N,V),I[Y+j+0]=s.x,I[Y+j+1]=s.y,I[Y+j+2]=s.z,I[Y+j+3]=0),g===!0&&(s.fromBufferAttribute(q,V),I[Y+j+4]=s.x,I[Y+j+5]=s.y,I[Y+j+6]=s.z,I[Y+j+7]=0),_===!0&&(s.fromBufferAttribute(G,V),I[Y+j+8]=s.x,I[Y+j+9]=s.y,I[Y+j+10]=s.z,I[Y+j+11]=G.itemSize===4?s.w:1)}}d={count:u,texture:L,size:new dt(v,O)},n.set(o,d),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function sg(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var Qa=class extends xn{constructor(t,e,n,s,r,a,o,c,l,h=Us){if(h!==Us&&h!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Us&&(n=Zi),n===void 0&&h===ks&&(n=Hs),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:sn,this.minFilter=c!==void 0?c:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},sd=new xn,ru=new Qa(1,1),rd=new Ya,ad=new rl,od=new $a,au=[],ou=[],cu=new Float32Array(16),lu=new Float32Array(9),hu=new Float32Array(4);function Zs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=au[s];if(r===void 0&&(r=new Float32Array(s),au[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function go(i,t){let e=ou[t];e===void 0&&(e=new Int32Array(t),ou[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function rg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2fv(this.addr,t),Ye(e,t)}}function og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;i.uniform3fv(this.addr,t),Ye(e,t)}}function cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4fv(this.addr,t),Ye(e,t)}}function lg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(Xe(e,n))return;hu.set(n),i.uniformMatrix2fv(this.addr,!1,hu),Ye(e,n)}}function hg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(Xe(e,n))return;lu.set(n),i.uniformMatrix3fv(this.addr,!1,lu),Ye(e,n)}}function ug(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(Xe(e,n))return;cu.set(n),i.uniformMatrix4fv(this.addr,!1,cu),Ye(e,n)}}function dg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2iv(this.addr,t),Ye(e,t)}}function pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3iv(this.addr,t),Ye(e,t)}}function mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4iv(this.addr,t),Ye(e,t)}}function gg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2uiv(this.addr,t),Ye(e,t)}}function _g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3uiv(this.addr,t),Ye(e,t)}}function yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4uiv(this.addr,t),Ye(e,t)}}function vg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ru.compareFunction=ju,r=ru):r=sd,e.setTexture2D(t||r,s)}function Mg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ad,s)}function Eg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||od,s)}function bg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||rd,s)}function Sg(i){switch(i){case 5126:return rg;case 35664:return ag;case 35665:return og;case 35666:return cg;case 35674:return lg;case 35675:return hg;case 35676:return ug;case 5124:case 35670:return dg;case 35667:case 35671:return fg;case 35668:case 35672:return pg;case 35669:case 35673:return mg;case 5125:return gg;case 36294:return xg;case 36295:return _g;case 36296:return yg;case 35678:case 36198:case 36298:case 36306:case 35682:return vg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return bg}}function wg(i,t){i.uniform1fv(this.addr,t)}function Tg(i,t){let e=Zs(t,this.size,2);i.uniform2fv(this.addr,e)}function Ag(i,t){let e=Zs(t,this.size,3);i.uniform3fv(this.addr,e)}function Rg(i,t){let e=Zs(t,this.size,4);i.uniform4fv(this.addr,e)}function Cg(i,t){let e=Zs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Pg(i,t){let e=Zs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ig(i,t){let e=Zs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Dg(i,t){i.uniform1iv(this.addr,t)}function Lg(i,t){i.uniform2iv(this.addr,t)}function Ug(i,t){i.uniform3iv(this.addr,t)}function Ng(i,t){i.uniform4iv(this.addr,t)}function Og(i,t){i.uniform1uiv(this.addr,t)}function Fg(i,t){i.uniform2uiv(this.addr,t)}function zg(i,t){i.uniform3uiv(this.addr,t)}function Bg(i,t){i.uniform4uiv(this.addr,t)}function Hg(i,t,e){let n=this.cache,s=t.length,r=go(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||sd,r[a])}function kg(i,t,e){let n=this.cache,s=t.length,r=go(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ad,r[a])}function Vg(i,t,e){let n=this.cache,s=t.length,r=go(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||od,r[a])}function Gg(i,t,e){let n=this.cache,s=t.length,r=go(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||rd,r[a])}function Wg(i){switch(i){case 5126:return wg;case 35664:return Tg;case 35665:return Ag;case 35666:return Rg;case 35674:return Cg;case 35675:return Pg;case 35676:return Ig;case 5124:case 35670:return Dg;case 35667:case 35671:return Lg;case 35668:case 35672:return Ug;case 35669:case 35673:return Ng;case 5125:return Og;case 36294:return Fg;case 36295:return zg;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Vg;case 36289:case 36303:case 36311:case 36292:return Gg}}var cl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Sg(e.type)}},ll=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Wg(e.type)}},hl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},hc=/(\w+)(\])?(\[|\.)?/g;function uu(i,t){i.seq.push(t),i.map[t.id]=t}function Xg(i,t,e){let n=i.name,s=n.length;for(hc.lastIndex=0;;){let r=hc.exec(n),a=hc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){uu(e,l===void 0?new cl(o,i,t):new ll(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new hl(o),uu(e,u)),e=u}}}var Os=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Xg(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function du(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Yg=37297,qg=0;function Zg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var fu=new ae;function Jg(i){ge._getMatrix(fu,ge.workingColorSpace,i);let t=`mat3( ${fu.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(i)){case mo:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function pu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Zg(i.getShaderSource(t),a)}else return s}function $g(i,t){let e=Jg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Kg(i,t){let e;switch(t){case of:e="Linear";break;case cf:e="Reinhard";break;case lf:e="Cineon";break;case hf:e="ACESFilmic";break;case df:e="AgX";break;case ff:e="Neutral";break;case uf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Aa=new D;function jg(){ge.getLuminanceCoefficients(Aa);let i=Aa.x.toFixed(4),t=Aa.y.toFixed(4),e=Aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mr).join(`
`)}function tx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ex(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Mr(i){return i!==""}function mu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var nx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ul(i){return i.replace(nx,sx)}var ix=new Map;function sx(i,t){let e=oe[t];if(e===void 0){let n=ix.get(t);if(n!==void 0)e=oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ul(e)}var rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xu(i){return i.replace(rx,ax)}function ax(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _u(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ox(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Hu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===fo?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ri&&(t="SHADOWMAP_TYPE_VSM"),t}function cx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zs:case Bs:t="ENVMAP_TYPE_CUBE";break;case po:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bs:t="ENVMAP_MODE_REFRACTION";break}return t}function hx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Gl:t="ENVMAP_BLENDING_MULTIPLY";break;case rf:t="ENVMAP_BLENDING_MIX";break;case af:t="ENVMAP_BLENDING_ADD";break}return t}function ux(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function dx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=ox(e),l=cx(e),h=lx(e),u=hx(e),d=ux(e),f=Qg(e),g=tx(r),_=s.createProgram(),m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Mr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Mr).join(`
`),p.length>0&&(p+=`
`)):(m=[_u(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),p=[_u(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ti?"#define TONE_MAPPING":"",e.toneMapping!==Ti?oe.tonemapping_pars_fragment:"",e.toneMapping!==Ti?Kg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,$g("linearToOutputTexel",e.outputColorSpace),jg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mr).join(`
`)),a=ul(a),a=mu(a,e),a=gu(a,e),o=ul(o),o=mu(o,e),o=gu(o,e),a=xu(a),o=xu(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=E+m+a,v=E+p+o,O=du(s,s.VERTEX_SHADER,y),I=du(s,s.FRAGMENT_SHADER,v);s.attachShader(_,O),s.attachShader(_,I),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function L(N){if(i.debug.checkShaderErrors){let q=s.getProgramInfoLog(_).trim(),G=s.getShaderInfoLog(O).trim(),Y=s.getShaderInfoLog(I).trim(),V=!0,j=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,O,I);else{let mt=pu(s,O,"vertex"),Q=pu(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+q+`
`+mt+`
`+Q)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(G===""||Y==="")&&(j=!1);j&&(N.diagnostics={runnable:V,programLog:q,vertexShader:{log:G,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(O),s.deleteShader(I),U=new Os(s,_),A=ex(s,_)}let U;this.getUniforms=function(){return U===void 0&&L(this),U};let A;this.getAttributes=function(){return A===void 0&&L(this),A};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,Yg)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=O,this.fragmentShader=I,this}var fx=0,dl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new fl(t),e.set(t,n)),n}},fl=class{constructor(t){this.id=fx++,this.code=t,this.usedTimes=0}};function px(i,t,e,n,s,r,a){let o=new Dr,c=new dl,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(A){return l.add(A),A===0?"uv":`uv${A}`}function m(A,S,N,q,G){let Y=q.fog,V=G.geometry,j=A.isMeshStandardMaterial?q.environment:null,mt=(A.isMeshStandardMaterial?e:t).get(A.envMap||j),Q=mt&&mt.mapping===po?mt.image.height:null,vt=g[A.type];A.precision!==null&&(f=s.getMaxPrecision(A.precision),f!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",f,"instead."));let ut=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ft=ut!==void 0?ut.length:0,ne=0;V.morphAttributes.position!==void 0&&(ne=1),V.morphAttributes.normal!==void 0&&(ne=2),V.morphAttributes.color!==void 0&&(ne=3);let Yt,it,xt,Bt;if(vt){let xe=qn[vt];Yt=xe.vertexShader,it=xe.fragmentShader}else Yt=A.vertexShader,it=A.fragmentShader,c.update(A),xt=c.getVertexShaderID(A),Bt=c.getFragmentShaderID(A);let _t=i.getRenderTarget(),Zt=i.state.buffers.depth.getReversed(),lt=G.isInstancedMesh===!0,ft=G.isBatchedMesh===!0,bt=!!A.map,tt=!!A.matcap,ct=!!mt,P=!!A.aoMap,Mt=!!A.lightMap,ot=!!A.bumpMap,Tt=!!A.normalMap,Et=!!A.displacementMap,ee=!!A.emissiveMap,At=!!A.metalnessMap,R=!!A.roughnessMap,w=A.anisotropy>0,X=A.clearcoat>0,nt=A.dispersion>0,st=A.iridescence>0,rt=A.sheen>0,Ct=A.transmission>0,at=w&&!!A.anisotropyMap,Dt=X&&!!A.clearcoatMap,ce=X&&!!A.clearcoatNormalMap,gt=X&&!!A.clearcoatRoughnessMap,Ot=st&&!!A.iridescenceMap,Jt=st&&!!A.iridescenceThicknessMap,jt=rt&&!!A.sheenColorMap,Ht=rt&&!!A.sheenRoughnessMap,ue=!!A.specularMap,ie=!!A.specularColorMap,pe=!!A.specularIntensityMap,B=Ct&&!!A.transmissionMap,St=Ct&&!!A.thicknessMap,et=!!A.gradientMap,ht=!!A.alphaMap,It=A.alphaTest>0,Lt=!!A.alphaHash,$t=!!A.extensions,Ie=Ti;A.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(Ie=i.toneMapping);let Ve={shaderID:vt,shaderType:A.type,shaderName:A.name,vertexShader:Yt,fragmentShader:it,defines:A.defines,customVertexShaderID:xt,customFragmentShaderID:Bt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:f,batching:ft,batchingColor:ft&&G._colorsTexture!==null,instancing:lt,instancingColor:lt&&G.instanceColor!==null,instancingMorph:lt&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:qs,alphaToCoverage:!!A.alphaToCoverage,map:bt,matcap:tt,envMap:ct,envMapMode:ct&&mt.mapping,envMapCubeUVHeight:Q,aoMap:P,lightMap:Mt,bumpMap:ot,normalMap:Tt,displacementMap:d&&Et,emissiveMap:ee,normalMapObjectSpace:Tt&&A.normalMapType===xf,normalMapTangentSpace:Tt&&A.normalMapType===Ku,metalnessMap:At,roughnessMap:R,anisotropy:w,anisotropyMap:at,clearcoat:X,clearcoatMap:Dt,clearcoatNormalMap:ce,clearcoatRoughnessMap:gt,dispersion:nt,iridescence:st,iridescenceMap:Ot,iridescenceThicknessMap:Jt,sheen:rt,sheenColorMap:jt,sheenRoughnessMap:Ht,specularMap:ue,specularColorMap:ie,specularIntensityMap:pe,transmission:Ct,transmissionMap:B,thicknessMap:St,gradientMap:et,opaque:A.transparent===!1&&A.blending===Ls&&A.alphaToCoverage===!1,alphaMap:ht,alphaTest:It,alphaHash:Lt,combine:A.combine,mapUv:bt&&_(A.map.channel),aoMapUv:P&&_(A.aoMap.channel),lightMapUv:Mt&&_(A.lightMap.channel),bumpMapUv:ot&&_(A.bumpMap.channel),normalMapUv:Tt&&_(A.normalMap.channel),displacementMapUv:Et&&_(A.displacementMap.channel),emissiveMapUv:ee&&_(A.emissiveMap.channel),metalnessMapUv:At&&_(A.metalnessMap.channel),roughnessMapUv:R&&_(A.roughnessMap.channel),anisotropyMapUv:at&&_(A.anisotropyMap.channel),clearcoatMapUv:Dt&&_(A.clearcoatMap.channel),clearcoatNormalMapUv:ce&&_(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&_(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ot&&_(A.iridescenceMap.channel),iridescenceThicknessMapUv:Jt&&_(A.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&_(A.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&_(A.sheenRoughnessMap.channel),specularMapUv:ue&&_(A.specularMap.channel),specularColorMapUv:ie&&_(A.specularColorMap.channel),specularIntensityMapUv:pe&&_(A.specularIntensityMap.channel),transmissionMapUv:B&&_(A.transmissionMap.channel),thicknessMapUv:St&&_(A.thicknessMap.channel),alphaMapUv:ht&&_(A.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Tt||w),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!V.attributes.uv&&(bt||ht),fog:!!Y,useFog:A.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Zt,skinning:G.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Ft,morphTextureStride:ne,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:bt&&A.map.isVideoTexture===!0&&ge.getTransfer(A.map.colorSpace)===Ae,decodeVideoTextureEmissive:ee&&A.emissiveMap.isVideoTexture===!0&&ge.getTransfer(A.emissiveMap.colorSpace)===Ae,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===gn,flipSided:A.side===un,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:$t&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&A.extensions.multiDraw===!0||ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ve.vertexUv1s=l.has(1),Ve.vertexUv2s=l.has(2),Ve.vertexUv3s=l.has(3),l.clear(),Ve}function p(A){let S=[];if(A.shaderID?S.push(A.shaderID):(S.push(A.customVertexShaderID),S.push(A.customFragmentShaderID)),A.defines!==void 0)for(let N in A.defines)S.push(N),S.push(A.defines[N]);return A.isRawShaderMaterial===!1&&(E(S,A),y(S,A),S.push(i.outputColorSpace)),S.push(A.customProgramCacheKey),S.join()}function E(A,S){A.push(S.precision),A.push(S.outputColorSpace),A.push(S.envMapMode),A.push(S.envMapCubeUVHeight),A.push(S.mapUv),A.push(S.alphaMapUv),A.push(S.lightMapUv),A.push(S.aoMapUv),A.push(S.bumpMapUv),A.push(S.normalMapUv),A.push(S.displacementMapUv),A.push(S.emissiveMapUv),A.push(S.metalnessMapUv),A.push(S.roughnessMapUv),A.push(S.anisotropyMapUv),A.push(S.clearcoatMapUv),A.push(S.clearcoatNormalMapUv),A.push(S.clearcoatRoughnessMapUv),A.push(S.iridescenceMapUv),A.push(S.iridescenceThicknessMapUv),A.push(S.sheenColorMapUv),A.push(S.sheenRoughnessMapUv),A.push(S.specularMapUv),A.push(S.specularColorMapUv),A.push(S.specularIntensityMapUv),A.push(S.transmissionMapUv),A.push(S.thicknessMapUv),A.push(S.combine),A.push(S.fogExp2),A.push(S.sizeAttenuation),A.push(S.morphTargetsCount),A.push(S.morphAttributeCount),A.push(S.numDirLights),A.push(S.numPointLights),A.push(S.numSpotLights),A.push(S.numSpotLightMaps),A.push(S.numHemiLights),A.push(S.numRectAreaLights),A.push(S.numDirLightShadows),A.push(S.numPointLightShadows),A.push(S.numSpotLightShadows),A.push(S.numSpotLightShadowsWithMaps),A.push(S.numLightProbes),A.push(S.shadowMapType),A.push(S.toneMapping),A.push(S.numClippingPlanes),A.push(S.numClipIntersection),A.push(S.depthPacking)}function y(A,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),A.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),A.push(o.mask)}function v(A){let S=g[A.type],N;if(S){let q=qn[S];N=sp.clone(q.uniforms)}else N=A.uniforms;return N}function O(A,S){let N;for(let q=0,G=h.length;q<G;q++){let Y=h[q];if(Y.cacheKey===S){N=Y,++N.usedTimes;break}}return N===void 0&&(N=new dx(i,S,A,r),h.push(N)),N}function I(A){if(--A.usedTimes===0){let S=h.indexOf(A);h[S]=h[h.length-1],h.pop(),A.destroy()}}function L(A){c.remove(A)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:O,releaseProgram:I,releaseShaderCache:L,programs:h,dispose:U}}function mx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function gx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function yu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function vu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,d,f,g,_,m){let p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,_,m){let p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||gx),n.length>1&&n.sort(d||yu),s.length>1&&s.sort(d||yu)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function xx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new vu,i.set(n,[a])):s>=r.length?(a=new vu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function _x(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Qt};break;case"SpotLight":e={position:new D,direction:new D,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function yx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var vx=0;function Mx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ex(i){let t=new _x,e=yx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let s=new D,r=new Ee,a=new Ee;function o(l){let h=0,u=0,d=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,E=0,y=0,v=0,O=0,I=0,L=0;l.sort(Mx);for(let A=0,S=l.length;A<S;A++){let N=l[A],q=N.color,G=N.intensity,Y=N.distance,V=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=q.r*G,u+=q.g*G,d+=q.b*G;else if(N.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(N.sh.coefficients[j],G);L++}else if(N.isDirectionalLight){let j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let mt=N.shadow,Q=e.get(N);Q.shadowIntensity=mt.intensity,Q.shadowBias=mt.bias,Q.shadowNormalBias=mt.normalBias,Q.shadowRadius=mt.radius,Q.shadowMapSize=mt.mapSize,n.directionalShadow[f]=Q,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=N.shadow.matrix,E++}n.directional[f]=j,f++}else if(N.isSpotLight){let j=t.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy(q).multiplyScalar(G),j.distance=Y,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,n.spot[_]=j;let mt=N.shadow;if(N.map&&(n.spotLightMap[O]=N.map,O++,mt.updateMatrices(N),N.castShadow&&I++),n.spotLightMatrix[_]=mt.matrix,N.castShadow){let Q=e.get(N);Q.shadowIntensity=mt.intensity,Q.shadowBias=mt.bias,Q.shadowNormalBias=mt.normalBias,Q.shadowRadius=mt.radius,Q.shadowMapSize=mt.mapSize,n.spotShadow[_]=Q,n.spotShadowMap[_]=V,v++}_++}else if(N.isRectAreaLight){let j=t.get(N);j.color.copy(q).multiplyScalar(G),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=j,m++}else if(N.isPointLight){let j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),j.distance=N.distance,j.decay=N.decay,N.castShadow){let mt=N.shadow,Q=e.get(N);Q.shadowIntensity=mt.intensity,Q.shadowBias=mt.bias,Q.shadowNormalBias=mt.normalBias,Q.shadowRadius=mt.radius,Q.shadowMapSize=mt.mapSize,Q.shadowCameraNear=mt.camera.near,Q.shadowCameraFar=mt.camera.far,n.pointShadow[g]=Q,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=N.shadow.matrix,y++}n.point[g]=j,g++}else if(N.isHemisphereLight){let j=t.get(N);j.skyColor.copy(N.color).multiplyScalar(G),j.groundColor.copy(N.groundColor).multiplyScalar(G),n.hemi[p]=j,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let U=n.hash;(U.directionalLength!==f||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==E||U.numPointShadows!==y||U.numSpotShadows!==v||U.numSpotMaps!==O||U.numLightProbes!==L)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+O-I,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=L,U.directionalLength=f,U.pointLength=g,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=E,U.numPointShadows=y,U.numSpotShadows=v,U.numSpotMaps=O,U.numLightProbes=L,n.version=vx++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){let y=l[p];if(y.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(y.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function Mu(i){let t=new Ex(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function bx(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Mu(i),t.set(s,[o])):r>=a.length?(o=new Mu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var pl=class extends di{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ml=class extends di{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Sx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Tx(i,t,e){let n=new Lr,s=new dt,r=new dt,a=new Re,o=new pl({depthPacking:gf}),c=new ml,l={},h=e.maxTextureSize,u={[Ai]:un,[un]:Ai,[gn]:gn},d=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:Sx,fragmentShader:wx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Le;g.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new pt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hu;let p=this.type;this.render=function(I,L,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;let A=i.getRenderTarget(),S=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),q=i.state;q.setBlending(wi),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let G=p!==ri&&this.type===ri,Y=p===ri&&this.type!==ri;for(let V=0,j=I.length;V<j;V++){let mt=I[V],Q=mt.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",mt,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);let vt=Q.getFrameExtents();if(s.multiply(vt),r.copy(Q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/vt.x),s.x=r.x*vt.x,Q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/vt.y),s.y=r.y*vt.y,Q.mapSize.y=r.y)),Q.map===null||G===!0||Y===!0){let Ft=this.type!==ri?{minFilter:sn,magFilter:sn}:{};Q.map!==null&&Q.map.dispose(),Q.map=new hi(s.x,s.y,Ft),Q.map.texture.name=mt.name+".shadowMap",Q.camera.updateProjectionMatrix()}i.setRenderTarget(Q.map),i.clear();let ut=Q.getViewportCount();for(let Ft=0;Ft<ut;Ft++){let ne=Q.getViewport(Ft);a.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),q.viewport(a),Q.updateMatrices(mt,Ft),n=Q.getFrustum(),v(L,U,Q.camera,mt,this.type)}Q.isPointLightShadow!==!0&&this.type===ri&&E(Q,U),Q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(A,S,N)};function E(I,L){let U=t.update(_);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,f.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new hi(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(L,null,U,d,_,null),f.uniforms.shadow_pass.value=I.mapPass.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(L,null,U,f,_,null)}function y(I,L,U,A){let S=null,N=U.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(N!==void 0)S=N;else if(S=U.isPointLight===!0?c:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let q=S.uuid,G=L.uuid,Y=l[q];Y===void 0&&(Y={},l[q]=Y);let V=Y[G];V===void 0&&(V=S.clone(),Y[G]=V,L.addEventListener("dispose",O)),S=V}if(S.visible=L.visible,S.wireframe=L.wireframe,A===ri?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:u[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let q=i.properties.get(S);q.light=U}return S}function v(I,L,U,A,S){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&S===ri)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,I.matrixWorld);let G=t.update(I),Y=I.material;if(Array.isArray(Y)){let V=G.groups;for(let j=0,mt=V.length;j<mt;j++){let Q=V[j],vt=Y[Q.materialIndex];if(vt&&vt.visible){let ut=y(I,vt,A,S);I.onBeforeShadow(i,I,L,U,G,ut,Q),i.renderBufferDirect(U,null,G,ut,I,Q),I.onAfterShadow(i,I,L,U,G,ut,Q)}}}else if(Y.visible){let V=y(I,Y,A,S);I.onBeforeShadow(i,I,L,U,G,V,null),i.renderBufferDirect(U,null,G,V,I,null),I.onAfterShadow(i,I,L,U,G,V,null)}}let q=I.children;for(let G=0,Y=q.length;G<Y;G++)v(q[G],L,U,A,S)}function O(I){I.target.removeEventListener("dispose",O);for(let U in l){let A=l[U],S=I.target.uuid;S in A&&(A[S].dispose(),delete A[S])}}}var Ax={[yc]:vc,[Mc]:Sc,[Ec]:wc,[Fs]:bc,[vc]:yc,[Sc]:Mc,[wc]:Ec,[bc]:Fs};function Rx(i,t){function e(){let B=!1,St=new Re,et=null,ht=new Re(0,0,0,0);return{setMask:function(It){et!==It&&!B&&(i.colorMask(It,It,It,It),et=It)},setLocked:function(It){B=It},setClear:function(It,Lt,$t,Ie,Ve){Ve===!0&&(It*=Ie,Lt*=Ie,$t*=Ie),St.set(It,Lt,$t,Ie),ht.equals(St)===!1&&(i.clearColor(It,Lt,$t,Ie),ht.copy(St))},reset:function(){B=!1,et=null,ht.set(-1,0,0,0)}}}function n(){let B=!1,St=!1,et=null,ht=null,It=null;return{setReversed:function(Lt){if(St!==Lt){let $t=t.get("EXT_clip_control");St?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);let Ie=It;It=null,this.setClear(Ie)}St=Lt},getReversed:function(){return St},setTest:function(Lt){Lt?_t(i.DEPTH_TEST):Zt(i.DEPTH_TEST)},setMask:function(Lt){et!==Lt&&!B&&(i.depthMask(Lt),et=Lt)},setFunc:function(Lt){if(St&&(Lt=Ax[Lt]),ht!==Lt){switch(Lt){case yc:i.depthFunc(i.NEVER);break;case vc:i.depthFunc(i.ALWAYS);break;case Mc:i.depthFunc(i.LESS);break;case Fs:i.depthFunc(i.LEQUAL);break;case Ec:i.depthFunc(i.EQUAL);break;case bc:i.depthFunc(i.GEQUAL);break;case Sc:i.depthFunc(i.GREATER);break;case wc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ht=Lt}},setLocked:function(Lt){B=Lt},setClear:function(Lt){It!==Lt&&(St&&(Lt=1-Lt),i.clearDepth(Lt),It=Lt)},reset:function(){B=!1,et=null,ht=null,It=null,St=!1}}}function s(){let B=!1,St=null,et=null,ht=null,It=null,Lt=null,$t=null,Ie=null,Ve=null;return{setTest:function(xe){B||(xe?_t(i.STENCIL_TEST):Zt(i.STENCIL_TEST))},setMask:function(xe){St!==xe&&!B&&(i.stencilMask(xe),St=xe)},setFunc:function(xe,fn,en){(et!==xe||ht!==fn||It!==en)&&(i.stencilFunc(xe,fn,en),et=xe,ht=fn,It=en)},setOp:function(xe,fn,en){(Lt!==xe||$t!==fn||Ie!==en)&&(i.stencilOp(xe,fn,en),Lt=xe,$t=fn,Ie=en)},setLocked:function(xe){B=xe},setClear:function(xe){Ve!==xe&&(i.clearStencil(xe),Ve=xe)},reset:function(){B=!1,St=null,et=null,ht=null,It=null,Lt=null,$t=null,Ie=null,Ve=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,y=null,v=null,O=null,I=null,L=new Qt(0,0,0),U=0,A=!1,S=null,N=null,q=null,G=null,Y=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,mt=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(mt=parseFloat(/^WebGL (\d)/.exec(Q)[1]),j=mt>=1):Q.indexOf("OpenGL ES")!==-1&&(mt=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),j=mt>=2);let vt=null,ut={},Ft=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),Yt=new Re().fromArray(Ft),it=new Re().fromArray(ne);function xt(B,St,et,ht){let It=new Uint8Array(4),Lt=i.createTexture();i.bindTexture(B,Lt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<et;$t++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,ht,0,i.RGBA,i.UNSIGNED_BYTE,It):i.texImage2D(St+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,It);return Lt}let Bt={};Bt[i.TEXTURE_2D]=xt(i.TEXTURE_2D,i.TEXTURE_2D,1),Bt[i.TEXTURE_CUBE_MAP]=xt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Bt[i.TEXTURE_2D_ARRAY]=xt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Bt[i.TEXTURE_3D]=xt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_t(i.DEPTH_TEST),a.setFunc(Fs),ot(!1),Tt(bh),_t(i.CULL_FACE),P(wi);function _t(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function Zt(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function lt(B,St){return u[B]!==St?(i.bindFramebuffer(B,St),u[B]=St,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=St),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=St),!0):!1}function ft(B,St){let et=f,ht=!1;if(B){et=d.get(St),et===void 0&&(et=[],d.set(St,et));let It=B.textures;if(et.length!==It.length||et[0]!==i.COLOR_ATTACHMENT0){for(let Lt=0,$t=It.length;Lt<$t;Lt++)et[Lt]=i.COLOR_ATTACHMENT0+Lt;et.length=It.length,ht=!0}}else et[0]!==i.BACK&&(et[0]=i.BACK,ht=!0);ht&&i.drawBuffers(et)}function bt(B){return g!==B?(i.useProgram(B),g=B,!0):!1}let tt={[Wi]:i.FUNC_ADD,[kd]:i.FUNC_SUBTRACT,[Vd]:i.FUNC_REVERSE_SUBTRACT};tt[Gd]=i.MIN,tt[Wd]=i.MAX;let ct={[Xd]:i.ZERO,[Yd]:i.ONE,[qd]:i.SRC_COLOR,[xc]:i.SRC_ALPHA,[Qd]:i.SRC_ALPHA_SATURATE,[Kd]:i.DST_COLOR,[Jd]:i.DST_ALPHA,[Zd]:i.ONE_MINUS_SRC_COLOR,[_c]:i.ONE_MINUS_SRC_ALPHA,[jd]:i.ONE_MINUS_DST_COLOR,[$d]:i.ONE_MINUS_DST_ALPHA,[tf]:i.CONSTANT_COLOR,[ef]:i.ONE_MINUS_CONSTANT_COLOR,[nf]:i.CONSTANT_ALPHA,[sf]:i.ONE_MINUS_CONSTANT_ALPHA};function P(B,St,et,ht,It,Lt,$t,Ie,Ve,xe){if(B===wi){_===!0&&(Zt(i.BLEND),_=!1);return}if(_===!1&&(_t(i.BLEND),_=!0),B!==Hd){if(B!==m||xe!==A){if((p!==Wi||v!==Wi)&&(i.blendEquation(i.FUNC_ADD),p=Wi,v=Wi),xe)switch(B){case Ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sh:i.blendFunc(i.ONE,i.ONE);break;case wh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Th:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case wh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Th:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}E=null,y=null,O=null,I=null,L.set(0,0,0),U=0,m=B,A=xe}return}It=It||St,Lt=Lt||et,$t=$t||ht,(St!==p||It!==v)&&(i.blendEquationSeparate(tt[St],tt[It]),p=St,v=It),(et!==E||ht!==y||Lt!==O||$t!==I)&&(i.blendFuncSeparate(ct[et],ct[ht],ct[Lt],ct[$t]),E=et,y=ht,O=Lt,I=$t),(Ie.equals(L)===!1||Ve!==U)&&(i.blendColor(Ie.r,Ie.g,Ie.b,Ve),L.copy(Ie),U=Ve),m=B,A=!1}function Mt(B,St){B.side===gn?Zt(i.CULL_FACE):_t(i.CULL_FACE);let et=B.side===un;St&&(et=!et),ot(et),B.blending===Ls&&B.transparent===!1?P(wi):P(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let ht=B.stencilWrite;o.setTest(ht),ht&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ee(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):Zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(B){S!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),S=B)}function Tt(B){B!==zd?(_t(i.CULL_FACE),B!==N&&(B===bh?i.cullFace(i.BACK):B===Bd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Zt(i.CULL_FACE),N=B}function Et(B){B!==q&&(j&&i.lineWidth(B),q=B)}function ee(B,St,et){B?(_t(i.POLYGON_OFFSET_FILL),(G!==St||Y!==et)&&(i.polygonOffset(St,et),G=St,Y=et)):Zt(i.POLYGON_OFFSET_FILL)}function At(B){B?_t(i.SCISSOR_TEST):Zt(i.SCISSOR_TEST)}function R(B){B===void 0&&(B=i.TEXTURE0+V-1),vt!==B&&(i.activeTexture(B),vt=B)}function w(B,St,et){et===void 0&&(vt===null?et=i.TEXTURE0+V-1:et=vt);let ht=ut[et];ht===void 0&&(ht={type:void 0,texture:void 0},ut[et]=ht),(ht.type!==B||ht.texture!==St)&&(vt!==et&&(i.activeTexture(et),vt=et),i.bindTexture(B,St||Bt[B]),ht.type=B,ht.texture=St)}function X(){let B=ut[vt];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function nt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function st(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function rt(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ct(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ce(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function gt(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ot(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Jt(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function jt(B){Yt.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Yt.copy(B))}function Ht(B){it.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),it.copy(B))}function ue(B,St){let et=l.get(St);et===void 0&&(et=new WeakMap,l.set(St,et));let ht=et.get(B);ht===void 0&&(ht=i.getUniformBlockIndex(St,B.name),et.set(B,ht))}function ie(B,St){let ht=l.get(St).get(B);c.get(St)!==ht&&(i.uniformBlockBinding(St,ht,B.__bindingPointIndex),c.set(St,ht))}function pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},vt=null,ut={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,y=null,v=null,O=null,I=null,L=new Qt(0,0,0),U=0,A=!1,S=null,N=null,q=null,G=null,Y=null,Yt.set(0,0,i.canvas.width,i.canvas.height),it.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_t,disable:Zt,bindFramebuffer:lt,drawBuffers:ft,useProgram:bt,setBlending:P,setMaterial:Mt,setFlipSided:ot,setCullFace:Tt,setLineWidth:Et,setPolygonOffset:ee,setScissorTest:At,activeTexture:R,bindTexture:w,unbindTexture:X,compressedTexImage2D:nt,compressedTexImage3D:st,texImage2D:Ot,texImage3D:Jt,updateUBOMapping:ue,uniformBlockBinding:ie,texStorage2D:ce,texStorage3D:gt,texSubImage2D:rt,texSubImage3D:Ct,compressedTexSubImage2D:at,compressedTexSubImage3D:Dt,scissor:jt,viewport:Ht,reset:pe}}function Eu(i,t,e,n){let s=Cx(n);switch(e){case Xu:return i*t;case qu:return i*t;case Zu:return i*t*2;case ql:return i*t/s.components*s.byteLength;case Zl:return i*t/s.components*s.byteLength;case Ju:return i*t*2/s.components*s.byteLength;case Jl:return i*t*2/s.components*s.byteLength;case Yu:return i*t*3/s.components*s.byteLength;case Bn:return i*t*4/s.components*s.byteLength;case $l:return i*t*4/s.components*s.byteLength;case za:case Ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ha:case ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pc:case Dc:return Math.max(i,16)*Math.max(t,8)/4;case Cc:case Ic:return Math.max(i,8)*Math.max(t,8)/2;case Lc:case Uc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Nc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case zc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Bc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Hc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case kc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Vc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Gc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Wc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Xc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Yc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case qc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Zc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Jc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Va:case $c:case Kc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $u:case jc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Qc:case tl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Cx(i){switch(i){case ci:case Vu:return{byteLength:1,components:1};case Cr:case Gu:case Qr:return{byteLength:2,components:1};case Xl:case Yl:return{byteLength:2,components:4};case Zi:case Wl:case Jn:return{byteLength:4,components:1};case Wu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Px(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new dt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return f?new OffscreenCanvas(R,w):Ir("canvas")}function _(R,w,X){let nt=1,st=At(R);if((st.width>X||st.height>X)&&(nt=X/Math.max(st.width,st.height)),nt<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){let rt=Math.floor(nt*st.width),Ct=Math.floor(nt*st.height);u===void 0&&(u=g(rt,Ct));let at=w?g(rt,Ct):u;return at.width=rt,at.height=Ct,at.getContext("2d").drawImage(R,0,0,rt,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+rt+"x"+Ct+")."),at}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,w,X,nt,st=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let rt=w;if(w===i.RED&&(X===i.FLOAT&&(rt=i.R32F),X===i.HALF_FLOAT&&(rt=i.R16F),X===i.UNSIGNED_BYTE&&(rt=i.R8)),w===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(rt=i.R8UI),X===i.UNSIGNED_SHORT&&(rt=i.R16UI),X===i.UNSIGNED_INT&&(rt=i.R32UI),X===i.BYTE&&(rt=i.R8I),X===i.SHORT&&(rt=i.R16I),X===i.INT&&(rt=i.R32I)),w===i.RG&&(X===i.FLOAT&&(rt=i.RG32F),X===i.HALF_FLOAT&&(rt=i.RG16F),X===i.UNSIGNED_BYTE&&(rt=i.RG8)),w===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(rt=i.RG8UI),X===i.UNSIGNED_SHORT&&(rt=i.RG16UI),X===i.UNSIGNED_INT&&(rt=i.RG32UI),X===i.BYTE&&(rt=i.RG8I),X===i.SHORT&&(rt=i.RG16I),X===i.INT&&(rt=i.RG32I)),w===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),X===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),X===i.UNSIGNED_INT&&(rt=i.RGB32UI),X===i.BYTE&&(rt=i.RGB8I),X===i.SHORT&&(rt=i.RGB16I),X===i.INT&&(rt=i.RGB32I)),w===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),X===i.UNSIGNED_INT&&(rt=i.RGBA32UI),X===i.BYTE&&(rt=i.RGBA8I),X===i.SHORT&&(rt=i.RGBA16I),X===i.INT&&(rt=i.RGBA32I)),w===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),w===i.RGBA){let Ct=st?mo:ge.getTransfer(nt);X===i.FLOAT&&(rt=i.RGBA32F),X===i.HALF_FLOAT&&(rt=i.RGBA16F),X===i.UNSIGNED_BYTE&&(rt=Ct===Ae?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function v(R,w){let X;return R?w===null||w===Zi||w===Hs?X=i.DEPTH24_STENCIL8:w===Jn?X=i.DEPTH32F_STENCIL8:w===Cr&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Zi||w===Hs?X=i.DEPTH_COMPONENT24:w===Jn?X=i.DEPTH_COMPONENT32F:w===Cr&&(X=i.DEPTH_COMPONENT16),X}function O(R,w){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==sn&&R.minFilter!==Zn?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function I(R){let w=R.target;w.removeEventListener("dispose",I),U(w),w.isVideoTexture&&h.delete(w)}function L(R){let w=R.target;w.removeEventListener("dispose",L),S(w)}function U(R){let w=n.get(R);if(w.__webglInit===void 0)return;let X=R.source,nt=d.get(X);if(nt){let st=nt[w.__cacheKey];st.usedTimes--,st.usedTimes===0&&A(R),Object.keys(nt).length===0&&d.delete(X)}n.remove(R)}function A(R){let w=n.get(R);i.deleteTexture(w.__webglTexture);let X=R.source,nt=d.get(X);delete nt[w.__cacheKey],a.memory.textures--}function S(R){let w=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(w.__webglFramebuffer[nt]))for(let st=0;st<w.__webglFramebuffer[nt].length;st++)i.deleteFramebuffer(w.__webglFramebuffer[nt][st]);else i.deleteFramebuffer(w.__webglFramebuffer[nt]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[nt])}else{if(Array.isArray(w.__webglFramebuffer))for(let nt=0;nt<w.__webglFramebuffer.length;nt++)i.deleteFramebuffer(w.__webglFramebuffer[nt]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let nt=0;nt<w.__webglColorRenderbuffer.length;nt++)w.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[nt]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let X=R.textures;for(let nt=0,st=X.length;nt<st;nt++){let rt=n.get(X[nt]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),a.memory.textures--),n.remove(X[nt])}n.remove(R)}let N=0;function q(){N=0}function G(){let R=N;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),N+=1,R}function Y(R){let w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function V(R,w){let X=n.get(R);if(R.isVideoTexture&&Et(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){let nt=R.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(X,R,w);return}}e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+w)}function j(R,w){let X=n.get(R);if(R.version>0&&X.__version!==R.version){it(X,R,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+w)}function mt(R,w){let X=n.get(R);if(R.version>0&&X.__version!==R.version){it(X,R,w);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+w)}function Q(R,w){let X=n.get(R);if(R.version>0&&X.__version!==R.version){xt(X,R,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+w)}let vt={[Rr]:i.REPEAT,[Yi]:i.CLAMP_TO_EDGE,[Rc]:i.MIRRORED_REPEAT},ut={[sn]:i.NEAREST,[pf]:i.NEAREST_MIPMAP_NEAREST,[oa]:i.NEAREST_MIPMAP_LINEAR,[Zn]:i.LINEAR,[Fo]:i.LINEAR_MIPMAP_NEAREST,[qi]:i.LINEAR_MIPMAP_LINEAR},Ft={[_f]:i.NEVER,[Sf]:i.ALWAYS,[yf]:i.LESS,[ju]:i.LEQUAL,[vf]:i.EQUAL,[bf]:i.GEQUAL,[Mf]:i.GREATER,[Ef]:i.NOTEQUAL};function ne(R,w){if(w.type===Jn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Zn||w.magFilter===Fo||w.magFilter===oa||w.magFilter===qi||w.minFilter===Zn||w.minFilter===Fo||w.minFilter===oa||w.minFilter===qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,vt[w.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,vt[w.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,vt[w.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ut[w.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ut[w.minFilter]),w.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ft[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===sn||w.minFilter!==oa&&w.minFilter!==qi||w.type===Jn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Yt(R,w){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",I));let nt=w.source,st=d.get(nt);st===void 0&&(st={},d.set(nt,st));let rt=Y(w);if(rt!==R.__cacheKey){st[rt]===void 0&&(st[rt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),st[rt].usedTimes++;let Ct=st[R.__cacheKey];Ct!==void 0&&(st[R.__cacheKey].usedTimes--,Ct.usedTimes===0&&A(w)),R.__cacheKey=rt,R.__webglTexture=st[rt].texture}return X}function it(R,w,X){let nt=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(nt=i.TEXTURE_3D);let st=Yt(R,w),rt=w.source;e.bindTexture(nt,R.__webglTexture,i.TEXTURE0+X);let Ct=n.get(rt);if(rt.version!==Ct.__version||st===!0){e.activeTexture(i.TEXTURE0+X);let at=ge.getPrimaries(ge.workingColorSpace),Dt=w.colorSpace===bi?null:ge.getPrimaries(w.colorSpace),ce=w.colorSpace===bi||at===Dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let gt=_(w.image,!1,s.maxTextureSize);gt=ee(w,gt);let Ot=r.convert(w.format,w.colorSpace),Jt=r.convert(w.type),jt=y(w.internalFormat,Ot,Jt,w.colorSpace,w.isVideoTexture);ne(nt,w);let Ht,ue=w.mipmaps,ie=w.isVideoTexture!==!0,pe=Ct.__version===void 0||st===!0,B=rt.dataReady,St=O(w,gt);if(w.isDepthTexture)jt=v(w.format===ks,w.type),pe&&(ie?e.texStorage2D(i.TEXTURE_2D,1,jt,gt.width,gt.height):e.texImage2D(i.TEXTURE_2D,0,jt,gt.width,gt.height,0,Ot,Jt,null));else if(w.isDataTexture)if(ue.length>0){ie&&pe&&e.texStorage2D(i.TEXTURE_2D,St,jt,ue[0].width,ue[0].height);for(let et=0,ht=ue.length;et<ht;et++)Ht=ue[et],ie?B&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,Ht.width,Ht.height,Ot,Jt,Ht.data):e.texImage2D(i.TEXTURE_2D,et,jt,Ht.width,Ht.height,0,Ot,Jt,Ht.data);w.generateMipmaps=!1}else ie?(pe&&e.texStorage2D(i.TEXTURE_2D,St,jt,gt.width,gt.height),B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt.width,gt.height,Ot,Jt,gt.data)):e.texImage2D(i.TEXTURE_2D,0,jt,gt.width,gt.height,0,Ot,Jt,gt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ie&&pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,jt,ue[0].width,ue[0].height,gt.depth);for(let et=0,ht=ue.length;et<ht;et++)if(Ht=ue[et],w.format!==Bn)if(Ot!==null)if(ie){if(B)if(w.layerUpdates.size>0){let It=Eu(Ht.width,Ht.height,w.format,w.type);for(let Lt of w.layerUpdates){let $t=Ht.data.subarray(Lt*It/Ht.data.BYTES_PER_ELEMENT,(Lt+1)*It/Ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,Lt,Ht.width,Ht.height,1,Ot,$t)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,Ht.width,Ht.height,gt.depth,Ot,Ht.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,jt,Ht.width,Ht.height,gt.depth,0,Ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,Ht.width,Ht.height,gt.depth,Ot,Jt,Ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,jt,Ht.width,Ht.height,gt.depth,0,Ot,Jt,Ht.data)}else{ie&&pe&&e.texStorage2D(i.TEXTURE_2D,St,jt,ue[0].width,ue[0].height);for(let et=0,ht=ue.length;et<ht;et++)Ht=ue[et],w.format!==Bn?Ot!==null?ie?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,Ht.width,Ht.height,Ot,Ht.data):e.compressedTexImage2D(i.TEXTURE_2D,et,jt,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?B&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,Ht.width,Ht.height,Ot,Jt,Ht.data):e.texImage2D(i.TEXTURE_2D,et,jt,Ht.width,Ht.height,0,Ot,Jt,Ht.data)}else if(w.isDataArrayTexture)if(ie){if(pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,jt,gt.width,gt.height,gt.depth),B)if(w.layerUpdates.size>0){let et=Eu(gt.width,gt.height,w.format,w.type);for(let ht of w.layerUpdates){let It=gt.data.subarray(ht*et/gt.data.BYTES_PER_ELEMENT,(ht+1)*et/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,gt.width,gt.height,1,Ot,Jt,It)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,Ot,Jt,gt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,jt,gt.width,gt.height,gt.depth,0,Ot,Jt,gt.data);else if(w.isData3DTexture)ie?(pe&&e.texStorage3D(i.TEXTURE_3D,St,jt,gt.width,gt.height,gt.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,Ot,Jt,gt.data)):e.texImage3D(i.TEXTURE_3D,0,jt,gt.width,gt.height,gt.depth,0,Ot,Jt,gt.data);else if(w.isFramebufferTexture){if(pe)if(ie)e.texStorage2D(i.TEXTURE_2D,St,jt,gt.width,gt.height);else{let et=gt.width,ht=gt.height;for(let It=0;It<St;It++)e.texImage2D(i.TEXTURE_2D,It,jt,et,ht,0,Ot,Jt,null),et>>=1,ht>>=1}}else if(ue.length>0){if(ie&&pe){let et=At(ue[0]);e.texStorage2D(i.TEXTURE_2D,St,jt,et.width,et.height)}for(let et=0,ht=ue.length;et<ht;et++)Ht=ue[et],ie?B&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,Ot,Jt,Ht):e.texImage2D(i.TEXTURE_2D,et,jt,Ot,Jt,Ht);w.generateMipmaps=!1}else if(ie){if(pe){let et=At(gt);e.texStorage2D(i.TEXTURE_2D,St,jt,et.width,et.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ot,Jt,gt)}else e.texImage2D(i.TEXTURE_2D,0,jt,Ot,Jt,gt);m(w)&&p(nt),Ct.__version=rt.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function xt(R,w,X){if(w.image.length!==6)return;let nt=Yt(R,w),st=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+X);let rt=n.get(st);if(st.version!==rt.__version||nt===!0){e.activeTexture(i.TEXTURE0+X);let Ct=ge.getPrimaries(ge.workingColorSpace),at=w.colorSpace===bi?null:ge.getPrimaries(w.colorSpace),Dt=w.colorSpace===bi||Ct===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let ce=w.isCompressedTexture||w.image[0].isCompressedTexture,gt=w.image[0]&&w.image[0].isDataTexture,Ot=[];for(let ht=0;ht<6;ht++)!ce&&!gt?Ot[ht]=_(w.image[ht],!0,s.maxCubemapSize):Ot[ht]=gt?w.image[ht].image:w.image[ht],Ot[ht]=ee(w,Ot[ht]);let Jt=Ot[0],jt=r.convert(w.format,w.colorSpace),Ht=r.convert(w.type),ue=y(w.internalFormat,jt,Ht,w.colorSpace),ie=w.isVideoTexture!==!0,pe=rt.__version===void 0||nt===!0,B=st.dataReady,St=O(w,Jt);ne(i.TEXTURE_CUBE_MAP,w);let et;if(ce){ie&&pe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,ue,Jt.width,Jt.height);for(let ht=0;ht<6;ht++){et=Ot[ht].mipmaps;for(let It=0;It<et.length;It++){let Lt=et[It];w.format!==Bn?jt!==null?ie?B&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,It,0,0,Lt.width,Lt.height,jt,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,It,ue,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,It,0,0,Lt.width,Lt.height,jt,Ht,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,It,ue,Lt.width,Lt.height,0,jt,Ht,Lt.data)}}}else{if(et=w.mipmaps,ie&&pe){et.length>0&&St++;let ht=At(Ot[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,ue,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(gt){ie?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Ot[ht].width,Ot[ht].height,jt,Ht,Ot[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,ue,Ot[ht].width,Ot[ht].height,0,jt,Ht,Ot[ht].data);for(let It=0;It<et.length;It++){let $t=et[It].image[ht].image;ie?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,It+1,0,0,$t.width,$t.height,jt,Ht,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,It+1,ue,$t.width,$t.height,0,jt,Ht,$t.data)}}else{ie?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,jt,Ht,Ot[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,ue,jt,Ht,Ot[ht]);for(let It=0;It<et.length;It++){let Lt=et[It];ie?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,It+1,0,0,jt,Ht,Lt.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,It+1,ue,jt,Ht,Lt.image[ht])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),rt.__version=st.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Bt(R,w,X,nt,st,rt){let Ct=r.convert(X.format,X.colorSpace),at=r.convert(X.type),Dt=y(X.internalFormat,Ct,at,X.colorSpace),ce=n.get(w),gt=n.get(X);if(gt.__renderTarget=w,!ce.__hasExternalTextures){let Ot=Math.max(1,w.width>>rt),Jt=Math.max(1,w.height>>rt);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,rt,Dt,Ot,Jt,w.depth,0,Ct,at,null):e.texImage2D(st,rt,Dt,Ot,Jt,0,Ct,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Tt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,st,gt.__webglTexture,0,ot(w)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,st,gt.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(R,w,X){if(i.bindRenderbuffer(i.RENDERBUFFER,R),w.depthBuffer){let nt=w.depthTexture,st=nt&&nt.isDepthTexture?nt.type:null,rt=v(w.stencilBuffer,st),Ct=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=ot(w);Tt(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,rt,w.width,w.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,rt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,rt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,R)}else{let nt=w.textures;for(let st=0;st<nt.length;st++){let rt=nt[st],Ct=r.convert(rt.format,rt.colorSpace),at=r.convert(rt.type),Dt=y(rt.internalFormat,Ct,at,rt.colorSpace),ce=ot(w);X&&Tt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,Dt,w.width,w.height):Tt(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,Dt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Dt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Zt(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let nt=n.get(w.depthTexture);nt.__renderTarget=w,(!nt.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),V(w.depthTexture,0);let st=nt.__webglTexture,rt=ot(w);if(w.depthTexture.format===Us)Tt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(w.depthTexture.format===ks)Tt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function lt(R){let w=n.get(R),X=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){let nt=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),nt){let st=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,nt.removeEventListener("dispose",st)};nt.addEventListener("dispose",st),w.__depthDisposeCallback=st}w.__boundDepthTexture=nt}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Zt(w.__webglFramebuffer,R)}else if(X){w.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[nt]),w.__webglDepthbuffer[nt]===void 0)w.__webglDepthbuffer[nt]=i.createRenderbuffer(),_t(w.__webglDepthbuffer[nt],R,!1);else{let st=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=w.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,rt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),_t(w.__webglDepthbuffer,R,!1);else{let nt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,st)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(R,w,X){let nt=n.get(R);w!==void 0&&Bt(nt.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&lt(R)}function bt(R){let w=R.texture,X=n.get(R),nt=n.get(w);R.addEventListener("dispose",L);let st=R.textures,rt=R.isWebGLCubeRenderTarget===!0,Ct=st.length>1;if(Ct||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=w.version,a.memory.textures++),rt){X.__webglFramebuffer=[];for(let at=0;at<6;at++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[at]=[];for(let Dt=0;Dt<w.mipmaps.length;Dt++)X.__webglFramebuffer[at][Dt]=i.createFramebuffer()}else X.__webglFramebuffer[at]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let at=0;at<w.mipmaps.length;at++)X.__webglFramebuffer[at]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let at=0,Dt=st.length;at<Dt;at++){let ce=n.get(st[at]);ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Tt(R)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let at=0;at<st.length;at++){let Dt=st[at];X.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[at]);let ce=r.convert(Dt.format,Dt.colorSpace),gt=r.convert(Dt.type),Ot=y(Dt.internalFormat,ce,gt,Dt.colorSpace,R.isXRRenderTarget===!0),Jt=ot(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,Ot,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,X.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),_t(X.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),ne(i.TEXTURE_CUBE_MAP,w);for(let at=0;at<6;at++)if(w.mipmaps&&w.mipmaps.length>0)for(let Dt=0;Dt<w.mipmaps.length;Dt++)Bt(X.__webglFramebuffer[at][Dt],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Dt);else Bt(X.__webglFramebuffer[at],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(w)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let at=0,Dt=st.length;at<Dt;at++){let ce=st[at],gt=n.get(ce);e.bindTexture(i.TEXTURE_2D,gt.__webglTexture),ne(i.TEXTURE_2D,ce),Bt(X.__webglFramebuffer,R,ce,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),m(ce)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(at=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,nt.__webglTexture),ne(at,w),w.mipmaps&&w.mipmaps.length>0)for(let Dt=0;Dt<w.mipmaps.length;Dt++)Bt(X.__webglFramebuffer[Dt],R,w,i.COLOR_ATTACHMENT0,at,Dt);else Bt(X.__webglFramebuffer,R,w,i.COLOR_ATTACHMENT0,at,0);m(w)&&p(at),e.unbindTexture()}R.depthBuffer&&lt(R)}function tt(R){let w=R.textures;for(let X=0,nt=w.length;X<nt;X++){let st=w[X];if(m(st)){let rt=E(R),Ct=n.get(st).__webglTexture;e.bindTexture(rt,Ct),p(rt),e.unbindTexture()}}}let ct=[],P=[];function Mt(R){if(R.samples>0){if(Tt(R)===!1){let w=R.textures,X=R.width,nt=R.height,st=i.COLOR_BUFFER_BIT,rt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(R),at=w.length>1;if(at)for(let Dt=0;Dt<w.length;Dt++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Dt=0;Dt<w.length;Dt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Dt]);let ce=n.get(w[Dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,X,nt,0,0,X,nt,st,i.NEAREST),c===!0&&(ct.length=0,P.length=0,ct.push(i.COLOR_ATTACHMENT0+Dt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ct.push(rt),P.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let Dt=0;Dt<w.length;Dt++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Dt]);let ce=n.get(w[Dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,ce,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let w=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ot(R){return Math.min(s.maxSamples,R.samples)}function Tt(R){let w=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Et(R){let w=a.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function ee(R,w){let X=R.colorSpace,nt=R.format,st=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==qs&&X!==bi&&(ge.getTransfer(X)===Ae?(nt!==Bn||st!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),w}function At(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=q,this.setTexture2D=V,this.setTexture2DArray=j,this.setTexture3D=mt,this.setTextureCube=Q,this.rebindTextures=ft,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=Bt,this.useMultisampledRTT=Tt}function Ix(i,t){function e(n,s=bi){let r,a=ge.getTransfer(s);if(n===ci)return i.UNSIGNED_BYTE;if(n===Xl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vu)return i.BYTE;if(n===Gu)return i.SHORT;if(n===Cr)return i.UNSIGNED_SHORT;if(n===Wl)return i.INT;if(n===Zi)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===Qr)return i.HALF_FLOAT;if(n===Xu)return i.ALPHA;if(n===Yu)return i.RGB;if(n===Bn)return i.RGBA;if(n===qu)return i.LUMINANCE;if(n===Zu)return i.LUMINANCE_ALPHA;if(n===Us)return i.DEPTH_COMPONENT;if(n===ks)return i.DEPTH_STENCIL;if(n===ql)return i.RED;if(n===Zl)return i.RED_INTEGER;if(n===Ju)return i.RG;if(n===Jl)return i.RG_INTEGER;if(n===$l)return i.RGBA_INTEGER;if(n===za||n===Ba||n===Ha||n===ka)if(a===Ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===za)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===za)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ka)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cc||n===Pc||n===Ic||n===Dc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Cc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ic)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Dc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lc||n===Uc||n===Nc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Lc||n===Uc)return a===Ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Nc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Oc||n===Fc||n===zc||n===Bc||n===Hc||n===kc||n===Vc||n===Gc||n===Wc||n===Xc||n===Yc||n===qc||n===Zc||n===Jc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Oc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Va||n===$c||n===Kc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Va)return a===Ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$c)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Kc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$u||n===jc||n===Qc||n===tl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Va)return r.COMPRESSED_RED_RGTC1_EXT;if(n===jc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var gl=class extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},te=class extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dx={type:"move"},Sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dx)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Lx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ux=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,xl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new xn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Cn({vertexShader:Lx,fragmentShader:Ux,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pt(new fi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_l=class extends li{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,_=new xl,m=e.getContextAttributes(),p=null,E=null,y=[],v=[],O=new dt,I=null,L=new Ke;L.viewport=new Re;let U=new Ke;U.viewport=new Re;let A=[L,U],S=new gl,N=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let xt=y[it];return xt===void 0&&(xt=new Sr,y[it]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(it){let xt=y[it];return xt===void 0&&(xt=new Sr,y[it]=xt),xt.getGripSpace()},this.getHand=function(it){let xt=y[it];return xt===void 0&&(xt=new Sr,y[it]=xt),xt.getHandSpace()};function G(it){let xt=v.indexOf(it.inputSource);if(xt===-1)return;let Bt=y[xt];Bt!==void 0&&(Bt.update(it.inputSource,it.frame,l||a),Bt.dispatchEvent({type:it.type,data:it.inputSource}))}function Y(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",V);for(let it=0;it<y.length;it++){let xt=v[it];xt!==null&&(v[it]=null,y[it].disconnect(xt))}N=null,q=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,E=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){o=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(it){l=it},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){let xt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new hi(f.framebufferWidth,f.framebufferHeight,{format:Bn,type:ci,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let xt=null,Bt=null,_t=null;m.depth&&(_t=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=m.stencil?ks:Us,Bt=m.stencil?Hs:Zi);let Zt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Zt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new hi(d.textureWidth,d.textureHeight,{format:Bn,type:ci,depthTexture:new Qa(d.textureWidth,d.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Yt.setContext(s),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(it){for(let xt=0;xt<it.removed.length;xt++){let Bt=it.removed[xt],_t=v.indexOf(Bt);_t>=0&&(v[_t]=null,y[_t].disconnect(Bt))}for(let xt=0;xt<it.added.length;xt++){let Bt=it.added[xt],_t=v.indexOf(Bt);if(_t===-1){for(let lt=0;lt<y.length;lt++)if(lt>=v.length){v.push(Bt),_t=lt;break}else if(v[lt]===null){v[lt]=Bt,_t=lt;break}if(_t===-1)break}let Zt=y[_t];Zt&&Zt.connect(Bt)}}let j=new D,mt=new D;function Q(it,xt,Bt){j.setFromMatrixPosition(xt.matrixWorld),mt.setFromMatrixPosition(Bt.matrixWorld);let _t=j.distanceTo(mt),Zt=xt.projectionMatrix.elements,lt=Bt.projectionMatrix.elements,ft=Zt[14]/(Zt[10]-1),bt=Zt[14]/(Zt[10]+1),tt=(Zt[9]+1)/Zt[5],ct=(Zt[9]-1)/Zt[5],P=(Zt[8]-1)/Zt[0],Mt=(lt[8]+1)/lt[0],ot=ft*P,Tt=ft*Mt,Et=_t/(-P+Mt),ee=Et*-P;if(xt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(ee),it.translateZ(Et),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Zt[10]===-1)it.projectionMatrix.copy(xt.projectionMatrix),it.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{let At=ft+Et,R=bt+Et,w=ot-ee,X=Tt+(_t-ee),nt=tt*bt/R*At,st=ct*bt/R*At;it.projectionMatrix.makePerspective(w,X,nt,st,At,R),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function vt(it,xt){xt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(xt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let xt=it.near,Bt=it.far;_.texture!==null&&(_.depthNear>0&&(xt=_.depthNear),_.depthFar>0&&(Bt=_.depthFar)),S.near=U.near=L.near=xt,S.far=U.far=L.far=Bt,(N!==S.near||q!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),N=S.near,q=S.far),L.layers.mask=it.layers.mask|2,U.layers.mask=it.layers.mask|4,S.layers.mask=L.layers.mask|U.layers.mask;let _t=it.parent,Zt=S.cameras;vt(S,_t);for(let lt=0;lt<Zt.length;lt++)vt(Zt[lt],_t);Zt.length===2?Q(S,L,U):S.projectionMatrix.copy(L.projectionMatrix),ut(it,S,_t)};function ut(it,xt,Bt){Bt===null?it.matrix.copy(xt.matrixWorld):(it.matrix.copy(Bt.matrixWorld),it.matrix.invert(),it.matrix.multiply(xt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(xt.projectionMatrix),it.projectionMatrixInverse.copy(xt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Pr*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(it){c=it,d!==null&&(d.fixedFoveation=it),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=it)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let Ft=null;function ne(it,xt){if(h=xt.getViewerPose(l||a),g=xt,h!==null){let Bt=h.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let _t=!1;Bt.length!==S.cameras.length&&(S.cameras.length=0,_t=!0);for(let lt=0;lt<Bt.length;lt++){let ft=Bt[lt],bt=null;if(f!==null)bt=f.getViewport(ft);else{let ct=u.getViewSubImage(d,ft);bt=ct.viewport,lt===0&&(t.setRenderTargetTextures(E,ct.colorTexture,d.ignoreDepthValues?void 0:ct.depthStencilTexture),t.setRenderTarget(E))}let tt=A[lt];tt===void 0&&(tt=new Ke,tt.layers.enable(lt),tt.viewport=new Re,A[lt]=tt),tt.matrix.fromArray(ft.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(ft.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(bt.x,bt.y,bt.width,bt.height),lt===0&&(S.matrix.copy(tt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),_t===!0&&S.cameras.push(tt)}let Zt=s.enabledFeatures;if(Zt&&Zt.includes("depth-sensing")){let lt=u.getDepthInformation(Bt[0]);lt&&lt.isValid&&lt.texture&&_.init(t,lt,s.renderState)}}for(let Bt=0;Bt<y.length;Bt++){let _t=v[Bt],Zt=y[Bt];_t!==null&&Zt!==void 0&&Zt.update(_t,xt,l||a)}Ft&&Ft(it,xt),xt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xt}),g=null}let Yt=new id;Yt.setAnimationLoop(ne),this.setAnimationLoop=function(it){Ft=it},this.dispose=function(){}}},Vi=new Kn,Nx=new Ee;function Ox(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,nd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,E,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E=t.get(p),y=E.envMap,v=E.envMapRotation;y&&(m.envMap.value=y,Vi.copy(v),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),m.envMapRotation.value.setFromMatrix4(Nx.makeRotationFromEuler(Vi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fx(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,y){let v=y.program;n.uniformBlockBinding(E,v)}function l(E,y){let v=s[E.id];v===void 0&&(g(E),v=h(E),s[E.id]=v,E.addEventListener("dispose",m));let O=y.program;n.updateUBOMapping(E,O);let I=t.render.frame;r[E.id]!==I&&(d(E),r[E.id]=I)}function h(E){let y=u();E.__bindingPointIndex=y;let v=i.createBuffer(),O=E.__size,I=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,O,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let y=s[E.id],v=E.uniforms,O=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let I=0,L=v.length;I<L;I++){let U=Array.isArray(v[I])?v[I]:[v[I]];for(let A=0,S=U.length;A<S;A++){let N=U[A];if(f(N,I,A,O)===!0){let q=N.__offset,G=Array.isArray(N.value)?N.value:[N.value],Y=0;for(let V=0;V<G.length;V++){let j=G[V],mt=_(j);typeof j=="number"||typeof j=="boolean"?(N.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,q+Y,N.__data)):j.isMatrix3?(N.__data[0]=j.elements[0],N.__data[1]=j.elements[1],N.__data[2]=j.elements[2],N.__data[3]=0,N.__data[4]=j.elements[3],N.__data[5]=j.elements[4],N.__data[6]=j.elements[5],N.__data[7]=0,N.__data[8]=j.elements[6],N.__data[9]=j.elements[7],N.__data[10]=j.elements[8],N.__data[11]=0):(j.toArray(N.__data,Y),Y+=mt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,y,v,O){let I=E.value,L=y+"_"+v;if(O[L]===void 0)return typeof I=="number"||typeof I=="boolean"?O[L]=I:O[L]=I.clone(),!0;{let U=O[L];if(typeof I=="number"||typeof I=="boolean"){if(U!==I)return O[L]=I,!0}else if(U.equals(I)===!1)return U.copy(I),!0}return!1}function g(E){let y=E.uniforms,v=0,O=16;for(let L=0,U=y.length;L<U;L++){let A=Array.isArray(y[L])?y[L]:[y[L]];for(let S=0,N=A.length;S<N;S++){let q=A[S],G=Array.isArray(q.value)?q.value:[q.value];for(let Y=0,V=G.length;Y<V;Y++){let j=G[Y],mt=_(j),Q=v%O,vt=Q%mt.boundary,ut=Q+vt;v+=vt,ut!==0&&O-ut<mt.storage&&(v+=O-ut),q.__data=new Float32Array(mt.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=v,v+=mt.storage}}}let I=v%O;return I>0&&(v+=O-I),E.__size=v,E.__cache={},this}function _(E){let y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){let y=E.target;y.removeEventListener("dispose",m);let v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Ur=class{constructor(t={}){let{canvas:e=kf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,E=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ge,this.toneMapping=Ti,this.toneMappingExposure=1;let v=this,O=!1,I=0,L=0,U=null,A=-1,S=null,N=new Re,q=new Re,G=null,Y=new Qt(0),V=0,j=e.width,mt=e.height,Q=1,vt=null,ut=null,Ft=new Re(0,0,j,mt),ne=new Re(0,0,j,mt),Yt=!1,it=new Lr,xt=!1,Bt=!1,_t=new Ee,Zt=new Ee,lt=new D,ft=new Re,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},tt=!1;function ct(){return U===null?Q:1}let P=n;function Mt(T,H){return e.getContext(T,H)}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vl}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",It,!1),e.addEventListener("webglcontextcreationerror",Lt,!1),P===null){let H="webgl2";if(P=Mt(H,T),P===null)throw Mt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ot,Tt,Et,ee,At,R,w,X,nt,st,rt,Ct,at,Dt,ce,gt,Ot,Jt,jt,Ht,ue,ie,pe,B;function St(){ot=new Q0(P),ot.init(),ie=new Ix(P,ot),Tt=new q0(P,ot,t,ie),Et=new Rx(P,ot),Tt.reverseDepthBuffer&&d&&Et.buffers.depth.setReversed(!0),ee=new ng(P),At=new mx,R=new Px(P,ot,Et,At,Tt,ie,ee),w=new J0(v),X=new j0(v),nt=new lp(P),pe=new X0(P,nt),st=new tg(P,nt,ee,pe),rt=new sg(P,st,nt,ee),jt=new ig(P,Tt,R),gt=new Z0(At),Ct=new px(v,w,X,ot,Tt,pe,gt),at=new Ox(v,At),Dt=new xx,ce=new bx(ot),Jt=new W0(v,w,X,Et,rt,f,c),Ot=new Tx(v,rt,Tt),B=new Fx(P,ee,Tt,Et),Ht=new Y0(P,ot,ee),ue=new eg(P,ot,ee),ee.programs=Ct.programs,v.capabilities=Tt,v.extensions=ot,v.properties=At,v.renderLists=Dt,v.shadowMap=Ot,v.state=Et,v.info=ee}St();let et=new _l(v,P);this.xr=et,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let T=ot.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ot.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(T){T!==void 0&&(Q=T,this.setSize(j,mt,!1))},this.getSize=function(T){return T.set(j,mt)},this.setSize=function(T,H,Z=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=T,mt=H,e.width=Math.floor(T*Q),e.height=Math.floor(H*Q),Z===!0&&(e.style.width=T+"px",e.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(j*Q,mt*Q).floor()},this.setDrawingBufferSize=function(T,H,Z){j=T,mt=H,Q=Z,e.width=Math.floor(T*Z),e.height=Math.floor(H*Z),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(N)},this.getViewport=function(T){return T.copy(Ft)},this.setViewport=function(T,H,Z,J){T.isVector4?Ft.set(T.x,T.y,T.z,T.w):Ft.set(T,H,Z,J),Et.viewport(N.copy(Ft).multiplyScalar(Q).round())},this.getScissor=function(T){return T.copy(ne)},this.setScissor=function(T,H,Z,J){T.isVector4?ne.set(T.x,T.y,T.z,T.w):ne.set(T,H,Z,J),Et.scissor(q.copy(ne).multiplyScalar(Q).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(T){Et.setScissorTest(Yt=T)},this.setOpaqueSort=function(T){vt=T},this.setTransparentSort=function(T){ut=T},this.getClearColor=function(T){return T.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor.apply(Jt,arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha.apply(Jt,arguments)},this.clear=function(T=!0,H=!0,Z=!0){let J=0;if(T){let k=!1;if(U!==null){let yt=U.texture.format;k=yt===$l||yt===Jl||yt===Zl}if(k){let yt=U.texture.type,Rt=yt===ci||yt===Zi||yt===Cr||yt===Hs||yt===Xl||yt===Yl,kt=Jt.getClearColor(),Vt=Jt.getClearAlpha(),se=kt.r,Gt=kt.g,Wt=kt.b;Rt?(g[0]=se,g[1]=Gt,g[2]=Wt,g[3]=Vt,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=se,_[1]=Gt,_[2]=Wt,_[3]=Vt,P.clearBufferiv(P.COLOR,0,_))}else J|=P.COLOR_BUFFER_BIT}H&&(J|=P.DEPTH_BUFFER_BIT),Z&&(J|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",Lt,!1),Dt.dispose(),ce.dispose(),At.dispose(),w.dispose(),X.dispose(),rt.dispose(),pe.dispose(),B.dispose(),Ct.dispose(),et.dispose(),et.removeEventListener("sessionstart",mi),et.removeEventListener("sessionend",Ui),Dn.stop()};function ht(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;let T=ee.autoReset,H=Ot.enabled,Z=Ot.autoUpdate,J=Ot.needsUpdate,k=Ot.type;St(),ee.autoReset=T,Ot.enabled=H,Ot.autoUpdate=Z,Ot.needsUpdate=J,Ot.type=k}function Lt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function $t(T){let H=T.target;H.removeEventListener("dispose",$t),Ie(H)}function Ie(T){Ve(T),At.remove(T)}function Ve(T){let H=At.get(T).programs;H!==void 0&&(H.forEach(function(Z){Ct.releaseProgram(Z)}),T.isShaderMaterial&&Ct.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,Z,J,k,yt){H===null&&(H=bt);let Rt=k.isMesh&&k.matrixWorld.determinant()<0,kt=sa(T,H,Z,J,k);Et.setMaterial(J,Rt);let Vt=Z.index,se=1;if(J.wireframe===!0){if(Vt=st.getWireframeAttribute(Z),Vt===void 0)return;se=2}let Gt=Z.drawRange,Wt=Z.attributes.position,fe=Gt.start*se,we=(Gt.start+Gt.count)*se;yt!==null&&(fe=Math.max(fe,yt.start*se),we=Math.min(we,(yt.start+yt.count)*se)),Vt!==null?(fe=Math.max(fe,0),we=Math.min(we,Vt.count)):Wt!=null&&(fe=Math.max(fe,0),we=Math.min(we,Wt.count));let Te=we-fe;if(Te<0||Te===1/0)return;pe.setup(k,J,kt,Z,Vt);let nn,me=Ht;if(Vt!==null&&(nn=nt.get(Vt),me=ue,me.setIndex(nn)),k.isMesh)J.wireframe===!0?(Et.setLineWidth(J.wireframeLinewidth*ct()),me.setMode(P.LINES)):me.setMode(P.TRIANGLES);else if(k.isLine){let qt=J.linewidth;qt===void 0&&(qt=1),Et.setLineWidth(qt*ct()),k.isLineSegments?me.setMode(P.LINES):k.isLineLoop?me.setMode(P.LINE_LOOP):me.setMode(P.LINE_STRIP)}else k.isPoints?me.setMode(P.POINTS):k.isSprite&&me.setMode(P.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)me.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))me.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let qt=k._multiDrawStarts,wn=k._multiDrawCounts,_e=k._multiDrawCount,on=Vt?nt.get(Vt).bytesPerElement:1,Tn=At.get(J).currentProgram.getUniforms();for(let Ze=0;Ze<_e;Ze++)Tn.setValue(P,"_gl_DrawID",Ze),me.render(qt[Ze]/on,wn[Ze])}else if(k.isInstancedMesh)me.renderInstances(fe,Te,k.count);else if(Z.isInstancedBufferGeometry){let qt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,wn=Math.min(Z.instanceCount,qt);me.renderInstances(fe,Te,wn)}else me.render(fe,Te)};function xe(T,H,Z){T.transparent===!0&&T.side===gn&&T.forceSinglePass===!1?(T.side=un,T.needsUpdate=!0,gi(T,H,Z),T.side=Ai,T.needsUpdate=!0,gi(T,H,Z),T.side=gn):gi(T,H,Z)}this.compile=function(T,H,Z=null){Z===null&&(Z=T),p=ce.get(Z),p.init(H),y.push(p),Z.traverseVisible(function(k){k.isLight&&k.layers.test(H.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),T!==Z&&T.traverseVisible(function(k){k.isLight&&k.layers.test(H.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();let J=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let yt=k.material;if(yt)if(Array.isArray(yt))for(let Rt=0;Rt<yt.length;Rt++){let kt=yt[Rt];xe(kt,Z,k),J.add(kt)}else xe(yt,Z,k),J.add(yt)}),y.pop(),p=null,J},this.compileAsync=function(T,H,Z=null){let J=this.compile(T,H,Z);return new Promise(k=>{function yt(){if(J.forEach(function(Rt){At.get(Rt).currentProgram.isReady()&&J.delete(Rt)}),J.size===0){k(T);return}setTimeout(yt,10)}ot.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let fn=null;function en(T){fn&&fn(T)}function mi(){Dn.stop()}function Ui(){Dn.start()}let Dn=new id;Dn.setAnimationLoop(en),typeof self!="undefined"&&Dn.setContext(self),this.setAnimationLoop=function(T){fn=T,et.setAnimationLoop(T),T===null?Dn.stop():Dn.start()},et.addEventListener("sessionstart",mi),et.addEventListener("sessionend",Ui),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(H),H=et.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,H,U),p=ce.get(T,y.length),p.init(H),y.push(p),Zt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),it.setFromProjectionMatrix(Zt),Bt=this.localClippingEnabled,xt=gt.init(this.clippingPlanes,Bt),m=Dt.get(T,E.length),m.init(),E.push(m),et.enabled===!0&&et.isPresenting===!0){let yt=v.xr.getDepthSensingMesh();yt!==null&&Mn(yt,H,-1/0,v.sortObjects)}Mn(T,H,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(vt,ut),tt=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,tt&&Jt.addToRenderList(m,T),this.info.render.frame++,xt===!0&&gt.beginShadows();let Z=p.state.shadowsArray;Ot.render(Z,T,H),xt===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=m.opaque,k=m.transmissive;if(p.setupLights(),H.isArrayCamera){let yt=H.cameras;if(k.length>0)for(let Rt=0,kt=yt.length;Rt<kt;Rt++){let Vt=yt[Rt];Wn(J,k,T,Vt)}tt&&Jt.render(T);for(let Rt=0,kt=yt.length;Rt<kt;Rt++){let Vt=yt[Rt];ls(m,T,Vt,Vt.viewport)}}else k.length>0&&Wn(J,k,T,H),tt&&Jt.render(T),ls(m,T,H);U!==null&&(R.updateMultisampleRenderTarget(U),R.updateRenderTargetMipmap(U)),T.isScene===!0&&T.onAfterRender(v,T,H),pe.resetDefaultState(),A=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],xt===!0&&gt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Mn(T,H,Z,J){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||it.intersectsSprite(T)){J&&ft.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Zt);let Rt=rt.update(T),kt=T.material;kt.visible&&m.push(T,Rt,kt,Z,ft.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||it.intersectsObject(T))){let Rt=rt.update(T),kt=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ft.copy(T.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),ft.copy(Rt.boundingSphere.center)),ft.applyMatrix4(T.matrixWorld).applyMatrix4(Zt)),Array.isArray(kt)){let Vt=Rt.groups;for(let se=0,Gt=Vt.length;se<Gt;se++){let Wt=Vt[se],fe=kt[Wt.materialIndex];fe&&fe.visible&&m.push(T,Rt,fe,Z,ft.z,Wt)}}else kt.visible&&m.push(T,Rt,kt,Z,ft.z,null)}}let yt=T.children;for(let Rt=0,kt=yt.length;Rt<kt;Rt++)Mn(yt[Rt],H,Z,J)}function ls(T,H,Z,J){let k=T.opaque,yt=T.transmissive,Rt=T.transparent;p.setupLightsView(Z),xt===!0&&gt.setGlobalState(v.clippingPlanes,Z),J&&Et.viewport(N.copy(J)),k.length>0&&Qn(k,H,Z),yt.length>0&&Qn(yt,H,Z),Rt.length>0&&Qn(Rt,H,Z),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Wn(T,H,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new hi(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?Qr:ci,minFilter:qi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ge.workingColorSpace}));let yt=p.state.transmissionRenderTarget[J.id],Rt=J.viewport||N;yt.setSize(Rt.z,Rt.w);let kt=v.getRenderTarget();v.setRenderTarget(yt),v.getClearColor(Y),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),tt&&Jt.render(Z);let Vt=v.toneMapping;v.toneMapping=Ti;let se=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),xt===!0&&gt.setGlobalState(v.clippingPlanes,J),Qn(T,Z,J),R.updateMultisampleRenderTarget(yt),R.updateRenderTargetMipmap(yt),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Wt=0,fe=H.length;Wt<fe;Wt++){let we=H[Wt],Te=we.object,nn=we.geometry,me=we.material,qt=we.group;if(me.side===gn&&Te.layers.test(J.layers)){let wn=me.side;me.side=un,me.needsUpdate=!0,tr(Te,Z,J,nn,me,qt),me.side=wn,me.needsUpdate=!0,Gt=!0}}Gt===!0&&(R.updateMultisampleRenderTarget(yt),R.updateRenderTargetMipmap(yt))}v.setRenderTarget(kt),v.setClearColor(Y,V),se!==void 0&&(J.viewport=se),v.toneMapping=Vt}function Qn(T,H,Z){let J=H.isScene===!0?H.overrideMaterial:null;for(let k=0,yt=T.length;k<yt;k++){let Rt=T[k],kt=Rt.object,Vt=Rt.geometry,se=J===null?Rt.material:J,Gt=Rt.group;kt.layers.test(Z.layers)&&tr(kt,H,Z,Vt,se,Gt)}}function tr(T,H,Z,J,k,yt){T.onBeforeRender(v,H,Z,J,k,yt),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(v,H,Z,J,T,yt),k.transparent===!0&&k.side===gn&&k.forceSinglePass===!1?(k.side=un,k.needsUpdate=!0,v.renderBufferDirect(Z,H,J,k,T,yt),k.side=Ai,k.needsUpdate=!0,v.renderBufferDirect(Z,H,J,k,T,yt),k.side=gn):v.renderBufferDirect(Z,H,J,k,T,yt),T.onAfterRender(v,H,Z,J,k,yt)}function gi(T,H,Z){H.isScene!==!0&&(H=bt);let J=At.get(T),k=p.state.lights,yt=p.state.shadowsArray,Rt=k.state.version,kt=Ct.getParameters(T,k.state,yt,H,Z),Vt=Ct.getProgramCacheKey(kt),se=J.programs;J.environment=T.isMeshStandardMaterial?H.environment:null,J.fog=H.fog,J.envMap=(T.isMeshStandardMaterial?X:w).get(T.envMap||J.environment),J.envMapRotation=J.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,se===void 0&&(T.addEventListener("dispose",$t),se=new Map,J.programs=se);let Gt=se.get(Vt);if(Gt!==void 0){if(J.currentProgram===Gt&&J.lightsStateVersion===Rt)return er(T,kt),Gt}else kt.uniforms=Ct.getUniforms(T),T.onBeforeCompile(kt,v),Gt=Ct.acquireProgram(kt,Vt),se.set(Vt,Gt),J.uniforms=kt.uniforms;let Wt=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Wt.clippingPlanes=gt.uniform),er(T,kt),J.needsLights=ir(T),J.lightsStateVersion=Rt,J.needsLights&&(Wt.ambientLightColor.value=k.state.ambient,Wt.lightProbe.value=k.state.probe,Wt.directionalLights.value=k.state.directional,Wt.directionalLightShadows.value=k.state.directionalShadow,Wt.spotLights.value=k.state.spot,Wt.spotLightShadows.value=k.state.spotShadow,Wt.rectAreaLights.value=k.state.rectArea,Wt.ltc_1.value=k.state.rectAreaLTC1,Wt.ltc_2.value=k.state.rectAreaLTC2,Wt.pointLights.value=k.state.point,Wt.pointLightShadows.value=k.state.pointShadow,Wt.hemisphereLights.value=k.state.hemi,Wt.directionalShadowMap.value=k.state.directionalShadowMap,Wt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Wt.spotShadowMap.value=k.state.spotShadowMap,Wt.spotLightMatrix.value=k.state.spotLightMatrix,Wt.spotLightMap.value=k.state.spotLightMap,Wt.pointShadowMap.value=k.state.pointShadowMap,Wt.pointShadowMatrix.value=k.state.pointShadowMatrix),J.currentProgram=Gt,J.uniformsList=null,Gt}function Ni(T){if(T.uniformsList===null){let H=T.currentProgram.getUniforms();T.uniformsList=Os.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function er(T,H){let Z=At.get(T);Z.outputColorSpace=H.outputColorSpace,Z.batching=H.batching,Z.batchingColor=H.batchingColor,Z.instancing=H.instancing,Z.instancingColor=H.instancingColor,Z.instancingMorph=H.instancingMorph,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function sa(T,H,Z,J,k){H.isScene!==!0&&(H=bt),R.resetTextureUnits();let yt=H.fog,Rt=J.isMeshStandardMaterial?H.environment:null,kt=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:qs,Vt=(J.isMeshStandardMaterial?X:w).get(J.envMap||Rt),se=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Gt=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Wt=!!Z.morphAttributes.position,fe=!!Z.morphAttributes.normal,we=!!Z.morphAttributes.color,Te=Ti;J.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Te=v.toneMapping);let nn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,me=nn!==void 0?nn.length:0,qt=At.get(J),wn=p.state.lights;if(xt===!0&&(Bt===!0||T!==S)){let cn=T===S&&J.id===A;gt.setState(J,T,cn)}let _e=!1;J.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==wn.state.version||qt.outputColorSpace!==kt||k.isBatchedMesh&&qt.batching===!1||!k.isBatchedMesh&&qt.batching===!0||k.isBatchedMesh&&qt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&qt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&qt.instancing===!1||!k.isInstancedMesh&&qt.instancing===!0||k.isSkinnedMesh&&qt.skinning===!1||!k.isSkinnedMesh&&qt.skinning===!0||k.isInstancedMesh&&qt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&qt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&qt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&qt.instancingMorph===!1&&k.morphTexture!==null||qt.envMap!==Vt||J.fog===!0&&qt.fog!==yt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==gt.numPlanes||qt.numIntersection!==gt.numIntersection)||qt.vertexAlphas!==se||qt.vertexTangents!==Gt||qt.morphTargets!==Wt||qt.morphNormals!==fe||qt.morphColors!==we||qt.toneMapping!==Te||qt.morphTargetsCount!==me)&&(_e=!0):(_e=!0,qt.__version=J.version);let on=qt.currentProgram;_e===!0&&(on=gi(J,H,k));let Tn=!1,Ze=!1,Xn=!1,ve=on.getUniforms(),ze=qt.uniforms;if(Et.useProgram(on.program)&&(Tn=!0,Ze=!0,Xn=!0),J.id!==A&&(A=J.id,Ze=!0),Tn||S!==T){Et.buffers.depth.getReversed()?(_t.copy(T.projectionMatrix),Gf(_t),Wf(_t),ve.setValue(P,"projectionMatrix",_t)):ve.setValue(P,"projectionMatrix",T.projectionMatrix),ve.setValue(P,"viewMatrix",T.matrixWorldInverse);let Ln=ve.map.cameraPosition;Ln!==void 0&&Ln.setValue(P,lt.setFromMatrixPosition(T.matrixWorld)),Tt.logarithmicDepthBuffer&&ve.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&ve.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,Ze=!0,Xn=!0)}if(k.isSkinnedMesh){ve.setOptional(P,k,"bindMatrix"),ve.setOptional(P,k,"bindMatrixInverse");let cn=k.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),ve.setValue(P,"boneTexture",cn.boneTexture,R))}k.isBatchedMesh&&(ve.setOptional(P,k,"batchingTexture"),ve.setValue(P,"batchingTexture",k._matricesTexture,R),ve.setOptional(P,k,"batchingIdTexture"),ve.setValue(P,"batchingIdTexture",k._indirectTexture,R),ve.setOptional(P,k,"batchingColorTexture"),k._colorsTexture!==null&&ve.setValue(P,"batchingColorTexture",k._colorsTexture,R));let Oi=Z.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&jt.update(k,Z,on),(Ze||qt.receiveShadow!==k.receiveShadow)&&(qt.receiveShadow=k.receiveShadow,ve.setValue(P,"receiveShadow",k.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(ze.envMap.value=Vt,ze.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&H.environment!==null&&(ze.envMapIntensity.value=H.environmentIntensity),Ze&&(ve.setValue(P,"toneMappingExposure",v.toneMappingExposure),qt.needsLights&&nr(ze,Xn),yt&&J.fog===!0&&at.refreshFogUniforms(ze,yt),at.refreshMaterialUniforms(ze,J,Q,mt,p.state.transmissionRenderTarget[T.id]),Os.upload(P,Ni(qt),ze,R)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Os.upload(P,Ni(qt),ze,R),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&ve.setValue(P,"center",k.center),ve.setValue(P,"modelViewMatrix",k.modelViewMatrix),ve.setValue(P,"normalMatrix",k.normalMatrix),ve.setValue(P,"modelMatrix",k.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let cn=J.uniformsGroups;for(let Ln=0,Yn=cn.length;Ln<Yn;Ln++){let ra=cn[Ln];B.update(ra,on),B.bind(ra,on)}}return on}function nr(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function ir(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(T,H,Z){At.get(T.texture).__webglTexture=H,At.get(T.depthTexture).__webglTexture=Z;let J=At.get(T);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,H){let Z=At.get(T);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,Z=0){U=T,I=H,L=Z;let J=!0,k=null,yt=!1,Rt=!1;if(T){let Vt=At.get(T);if(Vt.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(P.FRAMEBUFFER,null),J=!1;else if(Vt.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(Vt.__hasExternalTextures)R.rebindTextures(T,At.get(T.texture).__webglTexture,At.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Wt=T.depthTexture;if(Vt.__boundDepthTexture!==Wt){if(Wt!==null&&At.has(Wt)&&(T.width!==Wt.image.width||T.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}let se=T.texture;(se.isData3DTexture||se.isDataArrayTexture||se.isCompressedArrayTexture)&&(Rt=!0);let Gt=At.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Gt[H])?k=Gt[H][Z]:k=Gt[H],yt=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?k=At.get(T).__webglMultisampledFramebuffer:Array.isArray(Gt)?k=Gt[Z]:k=Gt,N.copy(T.viewport),q.copy(T.scissor),G=T.scissorTest}else N.copy(Ft).multiplyScalar(Q).floor(),q.copy(ne).multiplyScalar(Q).floor(),G=Yt;if(Et.bindFramebuffer(P.FRAMEBUFFER,k)&&J&&Et.drawBuffers(T,k),Et.viewport(N),Et.scissor(q),Et.setScissorTest(G),yt){let Vt=At.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+H,Vt.__webglTexture,Z)}else if(Rt){let Vt=At.get(T.texture),se=H||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Vt.__webglTexture,Z||0,se)}A=-1},this.readRenderTargetPixels=function(T,H,Z,J,k,yt,Rt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=At.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(kt=kt[Rt]),kt){Et.bindFramebuffer(P.FRAMEBUFFER,kt);try{let Vt=T.texture,se=Vt.format,Gt=Vt.type;if(!Tt.textureFormatReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-J&&Z>=0&&Z<=T.height-k&&P.readPixels(H,Z,J,k,ie.convert(se),ie.convert(Gt),yt)}finally{let Vt=U!==null?At.get(U).__webglFramebuffer:null;Et.bindFramebuffer(P.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(T,H,Z,J,k,yt,Rt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=At.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(kt=kt[Rt]),kt){let Vt=T.texture,se=Vt.format,Gt=Vt.type;if(!Tt.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=T.width-J&&Z>=0&&Z<=T.height-k){Et.bindFramebuffer(P.FRAMEBUFFER,kt);let Wt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Wt),P.bufferData(P.PIXEL_PACK_BUFFER,yt.byteLength,P.STREAM_READ),P.readPixels(H,Z,J,k,ie.convert(se),ie.convert(Gt),0);let fe=U!==null?At.get(U).__webglFramebuffer:null;Et.bindFramebuffer(P.FRAMEBUFFER,fe);let we=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Vf(P,we,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Wt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,yt),P.deleteBuffer(Wt),P.deleteSync(we),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,H=null,Z=0){T.isTexture!==!0&&(vr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,T=arguments[1]);let J=Math.pow(2,-Z),k=Math.floor(T.image.width*J),yt=Math.floor(T.image.height*J),Rt=H!==null?H.x:0,kt=H!==null?H.y:0;R.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,Z,0,0,Rt,kt,k,yt),Et.unbindTexture()},this.copyTextureToTexture=function(T,H,Z=null,J=null,k=0){T.isTexture!==!0&&(vr("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,T=arguments[1],H=arguments[2],k=arguments[3]||0,Z=null);let yt,Rt,kt,Vt,se,Gt,Wt,fe,we,Te=T.isCompressedTexture?T.mipmaps[k]:T.image;Z!==null?(yt=Z.max.x-Z.min.x,Rt=Z.max.y-Z.min.y,kt=Z.isBox3?Z.max.z-Z.min.z:1,Vt=Z.min.x,se=Z.min.y,Gt=Z.isBox3?Z.min.z:0):(yt=Te.width,Rt=Te.height,kt=Te.depth||1,Vt=0,se=0,Gt=0),J!==null?(Wt=J.x,fe=J.y,we=J.z):(Wt=0,fe=0,we=0);let nn=ie.convert(H.format),me=ie.convert(H.type),qt;H.isData3DTexture?(R.setTexture3D(H,0),qt=P.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(R.setTexture2DArray(H,0),qt=P.TEXTURE_2D_ARRAY):(R.setTexture2D(H,0),qt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,H.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,H.unpackAlignment);let wn=P.getParameter(P.UNPACK_ROW_LENGTH),_e=P.getParameter(P.UNPACK_IMAGE_HEIGHT),on=P.getParameter(P.UNPACK_SKIP_PIXELS),Tn=P.getParameter(P.UNPACK_SKIP_ROWS),Ze=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Te.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Te.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Vt),P.pixelStorei(P.UNPACK_SKIP_ROWS,se),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Gt);let Xn=T.isDataArrayTexture||T.isData3DTexture,ve=H.isDataArrayTexture||H.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let ze=At.get(T),Oi=At.get(H),cn=At.get(ze.__renderTarget),Ln=At.get(Oi.__renderTarget);Et.bindFramebuffer(P.READ_FRAMEBUFFER,cn.__webglFramebuffer),Et.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ln.__webglFramebuffer);for(let Yn=0;Yn<kt;Yn++)Xn&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,At.get(T).__webglTexture,k,Gt+Yn),T.isDepthTexture?(ve&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,At.get(H).__webglTexture,k,we+Yn),P.blitFramebuffer(Vt,se,yt,Rt,Wt,fe,yt,Rt,P.DEPTH_BUFFER_BIT,P.NEAREST)):ve?P.copyTexSubImage3D(qt,k,Wt,fe,we+Yn,Vt,se,yt,Rt):P.copyTexSubImage2D(qt,k,Wt,fe,we+Yn,Vt,se,yt,Rt);Et.bindFramebuffer(P.READ_FRAMEBUFFER,null),Et.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ve?T.isDataTexture||T.isData3DTexture?P.texSubImage3D(qt,k,Wt,fe,we,yt,Rt,kt,nn,me,Te.data):H.isCompressedArrayTexture?P.compressedTexSubImage3D(qt,k,Wt,fe,we,yt,Rt,kt,nn,Te.data):P.texSubImage3D(qt,k,Wt,fe,we,yt,Rt,kt,nn,me,Te):T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,k,Wt,fe,yt,Rt,nn,me,Te.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,k,Wt,fe,Te.width,Te.height,nn,Te.data):P.texSubImage2D(P.TEXTURE_2D,k,Wt,fe,yt,Rt,nn,me,Te);P.pixelStorei(P.UNPACK_ROW_LENGTH,wn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_e),P.pixelStorei(P.UNPACK_SKIP_PIXELS,on),P.pixelStorei(P.UNPACK_SKIP_ROWS,Tn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ze),k===0&&H.generateMipmaps&&P.generateMipmap(qt),Et.unbindTexture()},this.copyTextureToTexture3D=function(T,H,Z=null,J=null,k=0){return T.isTexture!==!0&&(vr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,J=arguments[1]||null,T=arguments[2],H=arguments[3],k=arguments[4]||0),vr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,H,Z,J,k)},this.initRenderTarget=function(T){At.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),Et.unbindTexture()},this.resetState=function(){I=0,L=0,U=null,Et.reset(),pe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}};var to=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Qt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Nr=class extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},eo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=nl,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},pn=new D,Or=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix4(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyNormalMatrix(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.transformDirection(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=zn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=zn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=zn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=zn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=zn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},$i=class extends di{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ts,pr=new D,As=new D,Rs=new D,Cs=new dt,mr=new dt,cd=new Ee,Ra=new D,gr=new D,Ca=new D,bu=new dt,uc=new dt,Su=new dt,Gs=class extends We{constructor(t=new $i){if(super(),this.isSprite=!0,this.type="Sprite",Ts===void 0){Ts=new Le;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new eo(e,5);Ts.setIndex([0,1,2,0,2,3]),Ts.setAttribute("position",new Or(n,3,0,!1)),Ts.setAttribute("uv",new Or(n,2,3,!1))}this.geometry=Ts,this.material=t,this.center=new dt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),As.setFromMatrixScale(this.matrixWorld),cd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Rs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&As.multiplyScalar(-Rs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Pa(Ra.set(-.5,-.5,0),Rs,a,As,s,r),Pa(gr.set(.5,-.5,0),Rs,a,As,s,r),Pa(Ca.set(.5,.5,0),Rs,a,As,s,r),bu.set(0,0),uc.set(1,0),Su.set(1,1);let o=t.ray.intersectTriangle(Ra,gr,Ca,!1,pr);if(o===null&&(Pa(gr.set(-.5,.5,0),Rs,a,As,s,r),uc.set(0,1),o=t.ray.intersectTriangle(Ra,Ca,gr,!1,pr),o===null))return;let c=t.ray.origin.distanceTo(pr);c<t.near||c>t.far||e.push({distance:c,point:pr.clone(),uv:Si.getInterpolation(pr,Ra,gr,Ca,bu,uc,Su,new dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Pa(i,t,e,n,s,r){Cs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(mr.x=r*Cs.x-s*Cs.y,mr.y=s*Cs.x+r*Cs.y):mr.copy(Cs),i.copy(t),i.x+=mr.x,i.y+=mr.y,i.applyMatrix4(cd)}var yl=class extends xn{constructor(t=null,e=1,n=1,s,r,a,o,c,l=sn,h=sn,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fr=class extends je{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ps=new Ee,wu=new Ee,Ia=[],Tu=new ui,zx=new Ee,xr=new pt,_r=new Ri,Ci=class extends pt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Fr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,zx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ui),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ps),Tu.copy(t.boundingBox).applyMatrix4(Ps),this.boundingBox.union(Tu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ri),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ps),_r.copy(t.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(_r)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(xr.geometry=this.geometry,xr.material=this.material,xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_r.copy(this.boundingSphere),_r.applyMatrix4(n),t.ray.intersectsSphere(_r)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ps),wu.multiplyMatrices(n,Ps),xr.matrixWorld=wu,xr.raycast(t,Ia);for(let a=0,o=Ia.length;a<o;a++){let c=Ia[a];c.instanceId=r,c.object=this,e.push(c)}Ia.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Fr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new yl(new Float32Array(s*this.count),s,this.count,ql,Jn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Pi=class extends di{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Au=new Ee,vl=new Ji,Da=new Ri,La=new D,Ki=class extends We{constructor(t=new Le,e=new Pi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(s),Da.radius+=r,t.ray.intersectsSphere(Da)===!1)return;Au.copy(s).invert(),vl.copy(t.ray).applyMatrix4(Au);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,_=f;g<_;g++){let m=l.getX(g);La.fromBufferAttribute(u,m),Ru(La,m,c,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)La.fromBufferAttribute(u,g),Ru(La,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ru(i,t,e,n,s,r,a){let o=vl.distanceSqToPoint(i);if(o<e){let c=new D;vl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Pn=class extends xn{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},In=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new dt:new D);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new D,s=[],r=[],a=[],o=new D,c=new Ee;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos($e(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos($e(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},zr=class extends In{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new dt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ml=class extends zr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ql(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Ua=new D,dc=new Ql,fc=new Ql,pc=new Ql,Br=class extends In{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Ua.subVectors(s[0],s[1]).add(s[0]),l=Ua);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ua.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ua),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),dc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),fc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),pc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(dc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),fc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),pc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(dc.calc(c),fc.calc(c),pc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Cu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Bx(i,t){let e=1-i;return e*e*t}function Hx(i,t){return 2*(1-i)*i*t}function kx(i,t){return i*i*t}function wr(i,t,e,n){return Bx(i,t)+Hx(i,e)+kx(i,n)}function Vx(i,t){let e=1-i;return e*e*e*t}function Gx(i,t){let e=1-i;return 3*e*e*i*t}function Wx(i,t){return 3*(1-i)*i*i*t}function Xx(i,t){return i*i*i*t}function Tr(i,t,e,n,s){return Vx(i,t)+Gx(i,e)+Wx(i,n)+Xx(i,s)}var no=class extends In{constructor(t=new dt,e=new dt,n=new dt,s=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new dt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Tr(t,s.x,r.x,a.x,o.x),Tr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},El=class extends In{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Tr(t,s.x,r.x,a.x,o.x),Tr(t,s.y,r.y,a.y,o.y),Tr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},io=class extends In{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bl=class extends In{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},so=class extends In{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(wr(t,s.x,r.x,a.x),wr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sl=class extends In{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(wr(t,s.x,r.x,a.x),wr(t,s.y,r.y,a.y),wr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ro=class extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Cu(o,c.x,l.x,h.x,u.x),Cu(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new dt().fromArray(s))}return this}},wl=Object.freeze({__proto__:null,ArcCurve:Ml,CatmullRomCurve3:Br,CubicBezierCurve:no,CubicBezierCurve3:El,EllipseCurve:zr,LineCurve:io,LineCurve3:bl,QuadraticBezierCurve:so,QuadraticBezierCurve3:Sl,SplineCurve:ro}),Tl=class extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new wl[s.type]().fromJSON(s))}return this}},ao=class extends Tl{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new io(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new so(this.currentPoint.clone(),new dt(t,e),new dt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new no(this.currentPoint.clone(),new dt(t,e),new dt(n,s),new dt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ro(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new zr(t,e,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Hr=class i extends Le{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new D,h=new dt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(o,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},be=class i extends Le{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,_=[],m=n/2,p=0;E(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new le(u,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(f,2));function E(){let v=new D,O=new D,I=0,L=(e-t)/n;for(let U=0;U<=r;U++){let A=[],S=U/r,N=S*(e-t)+t;for(let q=0;q<=s;q++){let G=q/s,Y=G*c+o,V=Math.sin(Y),j=Math.cos(Y);O.x=N*V,O.y=-S*n+m,O.z=N*j,u.push(O.x,O.y,O.z),v.set(V,L,j).normalize(),d.push(v.x,v.y,v.z),f.push(G,1-S),A.push(g++)}_.push(A)}for(let U=0;U<s;U++)for(let A=0;A<r;A++){let S=_[A][U],N=_[A+1][U],q=_[A+1][U+1],G=_[A][U+1];(t>0||A!==0)&&(h.push(S,N,G),I+=3),(e>0||A!==r-1)&&(h.push(N,q,G),I+=3)}l.addGroup(p,I,0),p+=I}function y(v){let O=g,I=new dt,L=new D,U=0,A=v===!0?t:e,S=v===!0?1:-1;for(let q=1;q<=s;q++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;let N=g;for(let q=0;q<=s;q++){let Y=q/s*c+o,V=Math.cos(Y),j=Math.sin(Y);L.x=A*j,L.y=m*S,L.z=A*V,u.push(L.x,L.y,L.z),d.push(0,S,0),I.x=V*.5+.5,I.y=j*.5*S+.5,f.push(I.x,I.y),g++}for(let q=0;q<s;q++){let G=O+q,Y=N+q;v===!0?h.push(Y,Y+1,G):h.push(Y+1,Y,G),U+=3}l.addGroup(p,U,v===!0?1:2),p+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},kn=class i extends be{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},oo=class i extends Le{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(E){let y=new D,v=new D,O=new D;for(let I=0;I<e.length;I+=3)f(e[I+0],y),f(e[I+1],v),f(e[I+2],O),c(y,v,O,E)}function c(E,y,v,O){let I=O+1,L=[];for(let U=0;U<=I;U++){L[U]=[];let A=E.clone().lerp(v,U/I),S=y.clone().lerp(v,U/I),N=I-U;for(let q=0;q<=N;q++)q===0&&U===I?L[U][q]=A:L[U][q]=A.clone().lerp(S,q/N)}for(let U=0;U<I;U++)for(let A=0;A<2*(I-U)-1;A++){let S=Math.floor(A/2);A%2===0?(d(L[U][S+1]),d(L[U+1][S]),d(L[U][S])):(d(L[U][S+1]),d(L[U+1][S+1]),d(L[U+1][S]))}}function l(E){let y=new D;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(E),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){let E=new D;for(let y=0;y<r.length;y+=3){E.x=r[y+0],E.y=r[y+1],E.z=r[y+2];let v=m(E)/2/Math.PI+.5,O=p(E)/Math.PI+.5;a.push(v,1-O)}g(),u()}function u(){for(let E=0;E<a.length;E+=6){let y=a[E+0],v=a[E+2],O=a[E+4],I=Math.max(y,v,O),L=Math.min(y,v,O);I>.9&&L<.1&&(y<.2&&(a[E+0]+=1),v<.2&&(a[E+2]+=1),O<.2&&(a[E+4]+=1))}}function d(E){r.push(E.x,E.y,E.z)}function f(E,y){let v=E*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){let E=new D,y=new D,v=new D,O=new D,I=new dt,L=new dt,U=new dt;for(let A=0,S=0;A<r.length;A+=9,S+=6){E.set(r[A+0],r[A+1],r[A+2]),y.set(r[A+3],r[A+4],r[A+5]),v.set(r[A+6],r[A+7],r[A+8]),I.set(a[S+0],a[S+1]),L.set(a[S+2],a[S+3]),U.set(a[S+4],a[S+5]),O.copy(E).add(y).add(v).divideScalar(3);let N=m(O);_(I,S+0,E,N),_(L,S+2,y,N),_(U,S+4,v,N)}}function _(E,y,v,O){O<0&&E.x===1&&(a[y]=E.x-1),v.x===0&&v.z===0&&(a[y]=O/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Ws=class i extends oo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ii=class extends ao{constructor(t){super(t),this.uuid=$n(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new ao().fromJSON(s))}return this}},Yx={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=ld(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,f;if(n&&(r=Kx(i,t,r,e)),i.length>80*e){o=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-o,h-c),f=f!==0?32767/f:0}return kr(r,a,e,o,c,f,0),a}};function ld(i,t,e,n,s){let r,a;if(s===c_(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Pu(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Pu(r,i[r],i[r+1],a);return a&&xo(a,a.next)&&(Gr(a),a=a.next),a}function ji(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(xo(e,e.next)||Oe(e.prev,e,e.next)===0)){if(Gr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function kr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&n_(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Zx(i,n,s,r):qx(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Gr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Jx(ji(i),t,e),kr(i,t,e,n,s,r,2)):a===2&&$x(i,t,e,n,s,r):kr(ji(i),t,e,n,s,r,1);break}}}function qx(i){let t=i.prev,e=i,n=i.next;if(Oe(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=s>r?s>a?s:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Ds(s,o,r,c,a,l,g.x,g.y)&&Oe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Zx(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Oe(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,f=o<c?o<l?o:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=o>c?o>l?o:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=Al(f,g,t,e,n),E=Al(_,m,t,e,n),y=i.prevZ,v=i.nextZ;for(;y&&y.z>=p&&v&&v.z<=E;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&Ds(o,h,c,u,l,d,y.x,y.y)&&Oe(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Ds(o,h,c,u,l,d,v.x,v.y)&&Oe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&Ds(o,h,c,u,l,d,y.x,y.y)&&Oe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=E;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Ds(o,h,c,u,l,d,v.x,v.y)&&Oe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Jx(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!xo(s,r)&&hd(s,n,n.next,r)&&Vr(s,r)&&Vr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Gr(n),Gr(n.next),n=i=r),n=n.next}while(n!==i);return ji(n)}function $x(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&r_(a,o)){let c=ud(a,o);a=ji(a,a.next),c=ji(c,c.next),kr(a,t,e,n,s,r,0),kr(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Kx(i,t,e,n){let s=[],r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=ld(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(s_(l));for(s.sort(jx),r=0;r<s.length;r++)e=Qx(s[r],e);return e}function jx(i,t){return i.x-t.x}function Qx(i,t){let e=t_(i,t);if(!e)return t;let n=ud(e,i);return ji(n,n.next),ji(e,e.next)}function t_(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Ds(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Vr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&e_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function e_(i,t){return Oe(i.prev,i,t.prev)<0&&Oe(t.next,i,i.next)<0}function n_(i,t,e,n){let s=i;do s.z===0&&(s.z=Al(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,i_(s)}function i_(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function Al(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function s_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ds(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function r_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!a_(i,t)&&(Vr(i,t)&&Vr(t,i)&&o_(i,t)&&(Oe(i.prev,i,t.prev)||Oe(i,t.prev,t))||xo(i,t)&&Oe(i.prev,i,i.next)>0&&Oe(t.prev,t,t.next)>0)}function Oe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function xo(i,t){return i.x===t.x&&i.y===t.y}function hd(i,t,e,n){let s=Oa(Oe(i,t,e)),r=Oa(Oe(i,t,n)),a=Oa(Oe(e,n,i)),o=Oa(Oe(e,n,t));return!!(s!==r&&a!==o||s===0&&Na(i,e,t)||r===0&&Na(i,n,t)||a===0&&Na(e,i,n)||o===0&&Na(e,t,n))}function Na(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Oa(i){return i>0?1:i<0?-1:0}function a_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&hd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Vr(i,t){return Oe(i.prev,i,i.next)<0?Oe(i,t,i.next)>=0&&Oe(i,i.prev,t)>=0:Oe(i,t,i.prev)<0||Oe(i,i.next,t)<0}function o_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ud(i,t){let e=new Rl(i.i,i.x,i.y),n=new Rl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Pu(i,t,e,n){let s=new Rl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Gr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Rl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function c_(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Ar=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Iu(t),Du(n,t);let a=t.length;e.forEach(Iu);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Du(n,e[c]);let o=Yx.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Iu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Du(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Di=class i extends Le{constructor(t=new Ii([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new le(s,3)),this.setAttribute("uv",new le(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:l_,y,v=!1,O,I,L,U;p&&(y=p.getSpacedPoints(h),v=!0,d=!1,O=p.computeFrenetFrames(h,!1),I=new D,L=new D,U=new D),d||(m=0,f=0,g=0,_=0);let A=o.extractPoints(l),S=A.shape,N=A.holes;if(!Ar.isClockWise(S)){S=S.reverse();for(let tt=0,ct=N.length;tt<ct;tt++){let P=N[tt];Ar.isClockWise(P)&&(N[tt]=P.reverse())}}let G=Ar.triangulateShape(S,N),Y=S;for(let tt=0,ct=N.length;tt<ct;tt++){let P=N[tt];S=S.concat(P)}function V(tt,ct,P){return ct||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(ct,P)}let j=S.length,mt=G.length;function Q(tt,ct,P){let Mt,ot,Tt,Et=tt.x-ct.x,ee=tt.y-ct.y,At=P.x-tt.x,R=P.y-tt.y,w=Et*Et+ee*ee,X=Et*R-ee*At;if(Math.abs(X)>Number.EPSILON){let nt=Math.sqrt(w),st=Math.sqrt(At*At+R*R),rt=ct.x-ee/nt,Ct=ct.y+Et/nt,at=P.x-R/st,Dt=P.y+At/st,ce=((at-rt)*R-(Dt-Ct)*At)/(Et*R-ee*At);Mt=rt+Et*ce-tt.x,ot=Ct+ee*ce-tt.y;let gt=Mt*Mt+ot*ot;if(gt<=2)return new dt(Mt,ot);Tt=Math.sqrt(gt/2)}else{let nt=!1;Et>Number.EPSILON?At>Number.EPSILON&&(nt=!0):Et<-Number.EPSILON?At<-Number.EPSILON&&(nt=!0):Math.sign(ee)===Math.sign(R)&&(nt=!0),nt?(Mt=-ee,ot=Et,Tt=Math.sqrt(w)):(Mt=Et,ot=ee,Tt=Math.sqrt(w/2))}return new dt(Mt/Tt,ot/Tt)}let vt=[];for(let tt=0,ct=Y.length,P=ct-1,Mt=tt+1;tt<ct;tt++,P++,Mt++)P===ct&&(P=0),Mt===ct&&(Mt=0),vt[tt]=Q(Y[tt],Y[P],Y[Mt]);let ut=[],Ft,ne=vt.concat();for(let tt=0,ct=N.length;tt<ct;tt++){let P=N[tt];Ft=[];for(let Mt=0,ot=P.length,Tt=ot-1,Et=Mt+1;Mt<ot;Mt++,Tt++,Et++)Tt===ot&&(Tt=0),Et===ot&&(Et=0),Ft[Mt]=Q(P[Mt],P[Tt],P[Et]);ut.push(Ft),ne=ne.concat(Ft)}for(let tt=0;tt<m;tt++){let ct=tt/m,P=f*Math.cos(ct*Math.PI/2),Mt=g*Math.sin(ct*Math.PI/2)+_;for(let ot=0,Tt=Y.length;ot<Tt;ot++){let Et=V(Y[ot],vt[ot],Mt);_t(Et.x,Et.y,-P)}for(let ot=0,Tt=N.length;ot<Tt;ot++){let Et=N[ot];Ft=ut[ot];for(let ee=0,At=Et.length;ee<At;ee++){let R=V(Et[ee],Ft[ee],Mt);_t(R.x,R.y,-P)}}}let Yt=g+_;for(let tt=0;tt<j;tt++){let ct=d?V(S[tt],ne[tt],Yt):S[tt];v?(L.copy(O.normals[0]).multiplyScalar(ct.x),I.copy(O.binormals[0]).multiplyScalar(ct.y),U.copy(y[0]).add(L).add(I),_t(U.x,U.y,U.z)):_t(ct.x,ct.y,0)}for(let tt=1;tt<=h;tt++)for(let ct=0;ct<j;ct++){let P=d?V(S[ct],ne[ct],Yt):S[ct];v?(L.copy(O.normals[tt]).multiplyScalar(P.x),I.copy(O.binormals[tt]).multiplyScalar(P.y),U.copy(y[tt]).add(L).add(I),_t(U.x,U.y,U.z)):_t(P.x,P.y,u/h*tt)}for(let tt=m-1;tt>=0;tt--){let ct=tt/m,P=f*Math.cos(ct*Math.PI/2),Mt=g*Math.sin(ct*Math.PI/2)+_;for(let ot=0,Tt=Y.length;ot<Tt;ot++){let Et=V(Y[ot],vt[ot],Mt);_t(Et.x,Et.y,u+P)}for(let ot=0,Tt=N.length;ot<Tt;ot++){let Et=N[ot];Ft=ut[ot];for(let ee=0,At=Et.length;ee<At;ee++){let R=V(Et[ee],Ft[ee],Mt);v?_t(R.x,R.y+y[h-1].y,y[h-1].x+P):_t(R.x,R.y,u+P)}}}it(),xt();function it(){let tt=s.length/3;if(d){let ct=0,P=j*ct;for(let Mt=0;Mt<mt;Mt++){let ot=G[Mt];Zt(ot[2]+P,ot[1]+P,ot[0]+P)}ct=h+m*2,P=j*ct;for(let Mt=0;Mt<mt;Mt++){let ot=G[Mt];Zt(ot[0]+P,ot[1]+P,ot[2]+P)}}else{for(let ct=0;ct<mt;ct++){let P=G[ct];Zt(P[2],P[1],P[0])}for(let ct=0;ct<mt;ct++){let P=G[ct];Zt(P[0]+j*h,P[1]+j*h,P[2]+j*h)}}n.addGroup(tt,s.length/3-tt,0)}function xt(){let tt=s.length/3,ct=0;Bt(Y,ct),ct+=Y.length;for(let P=0,Mt=N.length;P<Mt;P++){let ot=N[P];Bt(ot,ct),ct+=ot.length}n.addGroup(tt,s.length/3-tt,1)}function Bt(tt,ct){let P=tt.length;for(;--P>=0;){let Mt=P,ot=P-1;ot<0&&(ot=tt.length-1);for(let Tt=0,Et=h+m*2;Tt<Et;Tt++){let ee=j*Tt,At=j*(Tt+1),R=ct+Mt+ee,w=ct+ot+ee,X=ct+ot+At,nt=ct+Mt+At;lt(R,w,X,nt)}}}function _t(tt,ct,P){c.push(tt),c.push(ct),c.push(P)}function Zt(tt,ct,P){ft(tt),ft(ct),ft(P);let Mt=s.length/3,ot=E.generateTopUV(n,s,Mt-3,Mt-2,Mt-1);bt(ot[0]),bt(ot[1]),bt(ot[2])}function lt(tt,ct,P,Mt){ft(tt),ft(ct),ft(Mt),ft(ct),ft(P),ft(Mt);let ot=s.length/3,Tt=E.generateSideWallUV(n,s,ot-6,ot-3,ot-2,ot-1);bt(Tt[0]),bt(Tt[1]),bt(Tt[3]),bt(Tt[1]),bt(Tt[2]),bt(Tt[3])}function ft(tt){s.push(c[tt*3+0]),s.push(c[tt*3+1]),s.push(c[tt*3+2])}function bt(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return h_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new wl[s.type]().fromJSON(s)),new i(n,t.options)}},l_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new dt(r,a),new dt(o,c),new dt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new dt(a,1-c),new dt(l,1-u),new dt(d,1-g),new dt(_,1-p)]:[new dt(o,1-c),new dt(h,1-u),new dt(f,1-g),new dt(m,1-p)]}};function h_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Li=class i extends oo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Wr=class i extends Le{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=t,d=(e-t)/s,f=new D,g=new dt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){let m=_*(n+1);for(let p=0;p<n;p++){let E=p+m,y=E,v=E+n+1,O=E+n+2,I=E+1;o.push(y,v,I),o.push(v,O,I)}}this.setIndex(o),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Qe=class i extends Le{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new D,d=new D,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let E=[],y=p/n,v=0;p===0&&a===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let O=0;O<=e;O++){let I=O/e;u.x=-t*Math.cos(s+I*r)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(s+I*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(I+v,1-y),E.push(l++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){let y=h[p][E+1],v=h[p][E],O=h[p+1][E],I=h[p+1][E+1];(p!==0||a>0)&&f.push(y,v,I),(p!==n-1||c<Math.PI)&&f.push(v,O,I)}this.setIndex(f),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Xs=class i extends Le{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new D,u=new D,d=new D;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let _=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,E=(s+1)*f+g;a.push(_,m,E),a.push(m,p,E)}this.setIndex(a),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ye=class extends di{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ku,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Fa(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function u_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ys=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Cl=class extends Ys{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ah,endingEnd:Ah}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Rh:r=t,o=2*e-n;break;case Ch:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Rh:a=t,c=2*n-e;break;case Ch:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,E=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let O=0;O!==o;++O)r[O]=p*a[h+O]+E*a[l+O]+y*a[c+O]+v*a[u+O];return r}},Pl=class extends Ys{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Il=class extends Ys{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Vn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Fa(e,this.TimeBufferType),this.values=Fa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Fa(t.times,Array),values:Fa(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Cl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ga:e=this.InterpolantFactoryMethodDiscrete;break;case el:e=this.InterpolantFactoryMethodLinear;break;case zo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ga;case this.InterpolantFactoryMethodLinear:return el;case this.InterpolantFactoryMethodSmooth:return zo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&u_(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===zo,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[f+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=el;var Qi=class extends Vn{constructor(t,e,n){super(t,e,n)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Ga;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Dl=class extends Vn{};Dl.prototype.ValueTypeName="color";var Ll=class extends Vn{};Ll.prototype.ValueTypeName="number";var Ul=class extends Ys{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)Hn.slerpFlat(r,0,a,l-o,a,l,c);return r}},co=class extends Vn{InterpolantFactoryMethodLinear(t){return new Ul(this.times,this.values,this.getValueSize(),t)}};co.prototype.ValueTypeName="quaternion";co.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends Vn{constructor(t,e,n){super(t,e,n)}};ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Ga;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Nl=class extends Vn{};Nl.prototype.ValueTypeName="vector";var Lu={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Ol=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},d_=new Ol,Xr=class{constructor(t){this.manager=t!==void 0?t:d_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Xr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fl=class extends Xr{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Lu.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;let o=Ir("img");function c(){h(),Lu.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}};var lo=class extends Xr{constructor(t){super(t)}load(t,e,n,s){let r=new xn,a=new Fl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Yr=class extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},qr=class extends Yr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},mc=new Ee,Uu=new D,Nu=new D,ho=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lr,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Uu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uu),Nu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nu),e.updateMatrixWorld(),mc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ou=new Ee,yr=new D,gc=new D,zl=class extends ho{constructor(){super(new Ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new Re(2,1,1,1),new Re(0,1,1,1),new Re(3,1,1,1),new Re(1,1,1,1),new Re(3,0,1,1),new Re(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),yr.setFromMatrixPosition(t.matrixWorld),n.position.copy(yr),gc.copy(n.position),gc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(gc),n.updateMatrixWorld(),s.makeTranslation(-yr.x,-yr.y,-yr.z),Ou.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ou)}},Zr=class extends Yr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new zl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Bl=class extends ho{constructor(){super(new Ka(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Jr=class extends Yr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new Bl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var $r=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Fu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Fu(){return performance.now()}var th="\\[\\]\\.:\\/",f_=new RegExp("["+th+"]","g"),eh="[^"+th+"]",p_="[^"+th.replace("\\.","")+"]",m_=/((?:WC+[\/:])*)/.source.replace("WC",eh),g_=/(WCOD+)?/.source.replace("WCOD",p_),x_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eh),__=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eh),y_=new RegExp("^"+m_+g_+x_+__+"$"),v_=["material","materials","bones","map"],Hl=class{constructor(t,e,n){let s=n||Ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ue=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(f_,"")}static parseTrackName(t){let e=y_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);v_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ue.Composite=Hl;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cy=new Float32Array(1);var zu=new Ee,Kr=class{constructor(t,e,n=0,s=1/0){this.ray=new Ji(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Dr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return zu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zu),this}intersectObject(t,e=!0,n=[]){return kl(t,this,n,e),n.sort(Bu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)kl(t[s],this,n,e);return n.sort(Bu),n}};function Bu(i,t){return i.distance-t.distance}function kl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)kl(r[a],t,e,!0)}}var jr=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos($e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var uo=class extends li{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vl);var dd={type:"change"},ih={type:"start"},pd={type:"end"},_o=new Ji,fd=new Fn,E_=Math.cos(70*Qu.DEG2RAD),qe=new D,En=2*Math.PI,Ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},nh=1e-6,yo=class extends uo{constructor(t,e=null){super(t,e),this.state=Ce.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:es.ROTATE,MIDDLE:es.DOLLY,RIGHT:es.PAN},this.touches={ONE:ns.ROTATE,TWO:ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Hn,this._lastTargetPosition=new D,this._quat=new Hn().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new jr,this._sphericalDelta=new jr,this._scale=1,this._panOffset=new D,this._rotateStart=new dt,this._rotateEnd=new dt,this._rotateDelta=new dt,this._panStart=new dt,this._panEnd=new dt,this._panDelta=new dt,this._dollyStart=new dt,this._dollyEnd=new dt,this._dollyDelta=new dt,this._dollyDirection=new D,this._mouse=new dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=S_.bind(this),this._onPointerDown=b_.bind(this),this._onPointerUp=w_.bind(this),this._onContextMenu=D_.bind(this),this._onMouseWheel=R_.bind(this),this._onKeyDown=C_.bind(this),this._onTouchStart=P_.bind(this),this._onTouchMove=I_.bind(this),this._onMouseDown=T_.bind(this),this._onMouseMove=A_.bind(this),this._interceptControlDown=L_.bind(this),this._interceptControlUp=U_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(dd),this.update(),this.state=Ce.NONE}update(t=null){let e=this.object.position;qe.copy(e).sub(this.target),qe.applyQuaternion(this._quat),this._spherical.setFromVector3(qe),this.autoRotate&&this.state===Ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=En:n>Math.PI&&(n-=En),s<-Math.PI?s+=En:s>Math.PI&&(s-=En),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(qe.setFromSpherical(this._spherical),qe.applyQuaternion(this._quatInverse),e.copy(this.target).add(qe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=qe.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=qe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(_o.origin.copy(this.object.position),_o.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_o.direction))<E_?this.object.lookAt(this.target):(fd.setFromNormalAndCoplanarPoint(this.object.up,this.target),_o.intersectPlane(fd,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>nh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>nh||this._lastTargetPosition.distanceToSquared(this.target)>nh?(this.dispatchEvent(dd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?En/60*this.autoRotateSpeed*t:En/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){qe.setFromMatrixColumn(e,0),qe.multiplyScalar(-t),this._panOffset.add(qe)}_panUp(t,e){this.screenSpacePanning===!0?qe.setFromMatrixColumn(e,1):(qe.setFromMatrixColumn(e,0),qe.crossVectors(this.object.up,qe)),qe.multiplyScalar(t),this._panOffset.add(qe)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;qe.copy(s).sub(this.target);let r=qe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(En*this._rotateDelta.x/e.clientHeight),this._rotateUp(En*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(En*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-En*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(En*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-En*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(En*this._rotateDelta.x/e.clientHeight),this._rotateUp(En*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new dt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function b_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function S_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function w_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(pd),this.state=Ce.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function T_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case es.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ce.DOLLY;break;case es.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ce.ROTATE}break;case es.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ce.PAN}break;default:this.state=Ce.NONE}this.state!==Ce.NONE&&this.dispatchEvent(ih)}function A_(i){switch(this.state){case Ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function R_(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ce.NONE||(i.preventDefault(),this.dispatchEvent(ih),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(pd))}function C_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function P_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ns.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ce.TOUCH_ROTATE;break;case ns.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ce.TOUCH_PAN;break;default:this.state=Ce.NONE}break;case 2:switch(this.touches.TWO){case ns.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ce.TOUCH_DOLLY_PAN;break;case ns.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ce.TOUCH_DOLLY_ROTATE;break;default:this.state=Ce.NONE}break;default:this.state=Ce.NONE}this.state!==Ce.NONE&&this.dispatchEvent(ih)}function I_(i){switch(this._trackPointer(i),this.state){case Ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ce.NONE}}function D_(i){this.enabled!==!1&&i.preventDefault()}function L_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function U_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vo(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Le,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=md(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][d]);let g=md(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function md(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new je(a,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){let _=h.getComponent(d,g);o.setComponent(d+u,g,_)}}else a.set(h.array,c);c+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var N_={land:{W:320,H:236,houses:[[16,116],[52,116],[88,116],[124,116],[172,116],[208,116],[244,116],[16,150],[52,150],[192,23],[66,24],[88,150],[124,150],[16,186],[52,186],[88,186],[124,187],[180,152]],hall:[134,38],pond:[264,206],pondR:[8,4],hill:{x:160,y:46,w:216,h:74,r:12,height:3.2},ramp:{x:160,from:83,to:110.5},lot:{house:9,x0:172,y0:12,x1:258,y1:66,car:[226,54.4],swing:[182,38]},roads:[[8,110.5,312,110.5],[8,144.5,312,144.5],[8,180.5,206,180.5],[8,214.5,170,214.5],[46,110.5,46,214.5],[160,110.5,160,214.5],[64,70,258,70],[160,70,160,110.5]],river:[[292,30],[296,70],[292,110.5],[288,144.5],[282,175],[272,194]],mountains:[[-22,-32.5,5,11],[-8,-34.5,6,14],[8,-34.5,5.5,12],[22,-32,5,11],[33,-26,4.5,9]]},port:{W:200,H:360,houses:[[8,132],[8,184],[8,236],[8,288],[168,132],[168,184],[168,236],[168,288],[56,134],[132,51],[16,56],[88,134],[120,134],[56,186],[88,186],[120,186],[60,239],[116,239]],hall:[68,30],pond:[100,318],pondR:[6.5,3.6],hill:{x:100,y:52,w:184,h:96,r:12,height:3.2},ramp:{x:100,from:100,to:124.5},lot:{house:9,x0:110,y0:40,x1:186,y1:90,car:[166,81.6],swing:[118,60]},roads:[[44.5,124.5,155.5,124.5],[44.5,124.5,44.5,330],[155.5,124.5,155.5,312],[44.5,162.5,155.5,162.5],[44.5,214.5,155.5,214.5],[44.5,274.5,155.5,274.5],[16,94,186,94],[100,94,100,124.5]],river:[[206,24],[210,120],[206,230],[200,300],[170,330],[128,322]],mountains:[[-16,-48.5,4.5,10],[-2,-49.5,5,12],[12,-49,4.5,11],[24,-45.5,4,9]]}},Pe,ke,_n,Kt,yn,tn,Qs,an,na,hh,Ks,vn;function wd(i){Pe=N_[i];let t=(a,o)=>[(a-Pe.W/2)/4,(o-Pe.H/2)/4];ke=Pe.houses.map(([a,o])=>t(a+12,o+11)),_n=t(Pe.hall[0],Pe.hall[1]);let e=t(Pe.pond[0],Pe.pond[1]);Kt={x:e[0],z:e[1],rx:Pe.pondR[0],rz:Pe.pondR[1]},yn=Pe.roads.map(([a,o,c,l])=>t(a,o).concat(t(c,l)));let n=t(Pe.hill.x,Pe.hill.y);if(Qs={x:n[0],z:n[1],hw:Pe.hill.w/8,hd:Pe.hill.h/8,r:Pe.hill.r/4,h:Pe.hill.height},an={x:t(Pe.ramp.x,0)[0],z0:t(0,Pe.ramp.from)[1],z1:t(0,Pe.ramp.to)[1],hw:1.1},na=Pe.river.map(([a,o])=>{let c=t(a,o);return{x:c[0],z:c[1]}}),hh=Pe.mountains,Ks=ke.map((a,o)=>Pe.faces&&Pe.faces[o]||0),vn=null,Pe.lot){let a=Pe.lot,o=t(a.x0,a.y0),c=t(a.x1,a.y1);vn={house:a.house,x0:o[0],z0:o[1],x1:c[0],z1:c[1],car:t(a.car[0],a.car[1]),swing:t(a.swing[0],a.swing[1])}}let s=Pe.W/8+11,r=Pe.H/8+11;tn={a:s,b:r,n:2.6,w:s*2,d:r*2}}function Td(i,t){let e=Qs,n=Math.abs(i-e.x)-(e.hw-e.r),s=Math.abs(t-e.z)-(e.hd-e.r);return Math.hypot(Math.max(n,0),Math.max(s,0))+Math.min(Math.max(n,s),0)-e.r}var js=(i,t)=>Math.abs(i-an.x)<an.hw&&t>=an.z0-.4&&t<=an.z1;function rn(i,t){return Td(i,t)<=0?Qs.h:js(i,t)?Qs.h*Math.max(0,Math.min(1,1-(t-an.z0)/(an.z1-an.z0))):0}var Mo=(i,t,e)=>{let n=Td(i,t);return n>-.5-(e||0)&&n<.9+(e||0)&&!js(i,t)};function cs(i,t){let e=1e9;for(let n=1;n<na.length;n++){let s=na[n-1],r=na[n],a=r.x-s.x,o=r.z-s.z,c=a*a+o*o,l=Math.max(0,Math.min(1,((i-s.x)*a+(t-s.z)*o)/(c||1)));e=Math.min(e,Math.hypot(i-(s.x+a*l),t-(s.z+o*l)))}return e}var gd=(i,t,e)=>!!vn&&i>vn.x0-(e||0)&&i<vn.x1+(e||0)&&t>vn.z0-(e||0)&&t<vn.z1+(e||0);function pi(i,t){let e=tn,n=Math.abs(Math.cos(i)),s=Math.abs(Math.sin(i));return Math.pow(Math.pow(n/e.a,e.n)+Math.pow(s/e.b,e.n),-1/e.n)*(1+.035*Math.sin(3*i+.7)+.025*Math.sin(5*i+2.1)+.015*Math.sin(8*i))*(t||1)}function os(i,t,e){return Math.hypot(i,t)<pi(Math.atan2(t,i))-(e||0)}function Eo(i,t){let e=new Ii;for(let n=0;n<=96;n++){let s=n/96*Math.PI*2,r=pi(s,i)-(t||0),a=Math.cos(s)*r,o=-Math.sin(s)*r;n===0?e.moveTo(a,o):e.lineTo(a,o)}return e}wd("land");var he={grass:12576420,grassSide:10474377,dirt:13214334,dirt2:11569768,road:15983293,wall:16774888,wall2:15785156,door:12882799,frame:15323828,trunk:11042910,leaf:[10147472,8834176,11460768],water:9425898,sand:15983549,lily:8701828,roof:{pink:16165309,peach:16368540,blue:10473444,lav:13219054,mint:10738109,yellow:16111752,hall:15834032},flower:[16758465,16777215,16375946,14273008,16763304]},sh=new Map;function Ut(i,t){let e=i+JSON.stringify(t||{});return sh.has(e)||sh.set(e,new ye(Object.assign({color:i},t||{}))),sh.get(e)}function F(i,t,e,n,s=0,r=0,a=0,o){let c=new pt(new Fe(i,t,e),o&&o.isMaterial?o:Ut(n,o));return c.position.set(s,r,a),c.castShadow=!0,c.receiveShadow=!0,c}function To(i){return()=>(i=i*1664525+1013904223>>>0,i/4294967296)}var zt=(i,t)=>i+Math.random()*(t-i),dn=(i,t,e)=>i+(t-i)*e,as=(i,t,e=0)=>((i-Kt.x)/(Kt.rx+e))**2+((t-Kt.z)/(Kt.rz+e))**2<1;function bo(i,t,e,n){let s=new Di(i,{depth:t,bevelEnabled:!1,curveSegments:6});s.rotateX(-Math.PI/2);let r=new pt(s,Ut(e));return r.position.y=n,r.receiveShadow=!0,r}var Ad=new He({transparent:!0,opacity:0,depthWrite:!1}),Do=[],Co=[];function Lo(){let i=new ye({color:12576498,emissive:16765562,emissiveIntensity:0});return Do.push(i),i}function O_(i,t,e,n){let s=new Ii;s.moveTo(-i/2-.4,0),s.lineTo(i/2+.4,0),s.lineTo(0,e),s.lineTo(-i/2-.4,0);let r=new Di(s,{depth:t+.8,bevelEnabled:!1});r.translate(0,0,-(t+.8)/2);let a=new pt(r,Ut(n));return a.castShadow=!0,a.receiveShadow=!0,a}function Po(i){let t=new Ii;t.moveTo(0,-.5),t.bezierCurveTo(-.9,.1,-.5,.75,0,.35),t.bezierCurveTo(.5,.75,.9,.1,0,-.5);let e=new Di(t,{depth:.18,bevelEnabled:!1,curveSegments:10});return new pt(e,Ut(i,{emissive:i,emissiveIntensity:.25}))}function xd(i,t){let e=new te,n=!!(i&&i.floors===2),s=t?10:n?6:5.2,r=t?7:n?4.8:4.2,a=t?4.6:n?6.2:3.2,o=t?3.6:2.6,c=n?.3+1.95:.3+a*.6;e.add(F(s+.6,.3,r+.6,he.wall2,0,.15,0)),e.add(F(s,a,r,he.wall,0,.3+a/2,0));let l=O_(s,r,o,t?he.roof.hall:he.roof[i.roof]);l.position.y=.3+a,e.add(l);let h=t?1.9:1.05,u=t?2.8:2.15,d=new te;d.position.set(-h/2,.3,r/2+.02),e.add(d),d.add(F(h,u,.12,he.door,h/2,u/2,0)),d.add(F(.12,.12,.08,16375946,h-.25,u/2,.08)),e.add(F(h-.04,u-.04,.05,5916214,0,.3+u/2,r/2-.02)),e.userData.hinge=d,e.add(F(h+.8,.12,.8,he.road,0,.06,r/2+.6));let f=Lo();e.userData.wm=f;let g=t?[-3.6,-2,2,3.6]:[-1.6,1.6];if(g.forEach(p=>{e.add(F(1.1,1.1,.1,he.frame,p,c,r/2+.01)),e.add(F(.85,.85,.12,0,p,c,r/2+.03,f))}),[-1,1].forEach(p=>e.add(F(.12,.85,.85,0,p*(s/2+.01),c,0,f))),n){let p=3.5999999999999996;e.add(F(s+.12,.16,r+.12,he.wall2,0,p,0)),[-1,1].forEach(y=>e.add(F(.12,.85,.85,0,y*(s/2+.01),p+1.4,.6,f))),e.add(F(s-.6,.18,1.3,15785156,0,p+.05,r/2+.65));for(let y=0;y<=8;y++)e.add(F(.06,.8,.06,16777215,-(s-.8)/2+y*(s-.8)/8,p+.5,r/2+1.25));e.add(F(s-.6,.07,.08,16777215,0,p+.92,r/2+1.25)),[-1,1].forEach(y=>e.add(F(.07,.07,1.25,16777215,y*(s-.7)/2,p+.92,r/2+.65))),[-2.2,-1.75,1.85,2.3].forEach((y,v)=>{e.add(F(.32,.3,.32,[16368540,16165309][v%2],y,p+.3,r/2+.95));let O=new pt(new Li(.24,0),Ut(he.leaf[v%3],{flatShading:!0}));O.position.set(y,p+.6,r/2+.95),O.castShadow=!0,e.add(O),e.add(F(.1,.1,.1,he.flower[v%he.flower.length],y+.08,p+.78,r/2+.98))}),e.add(F(2.3,2.3,.1,16777215,0,p+1.25,r/2+.01));let E=new pt(new Fe(2.1,2.1,.06),new ye({color:12576498,transparent:!0,opacity:.55,emissive:16765562,emissiveIntensity:0}));E.position.set(0,p+1.25,r/2+.05),e.add(E),Do.push(E.material),e.userData.wm2=E.material,e.add(F(.06,2.1,.1,16777215,0,p+1.25,r/2+.07))}if(t||(e.add(F(.6,1.4,.6,he.wall2,s/4,.3+a+o*.55,-r/5)),e.userData.chimney=new D(s/4,.3+a+o*.55+1,-r/5),e.add(F(.8,.2,.8,14862765,s/4,.3+a+o*.55+.75,-r/5)),g.forEach(p=>{e.add(F(1.2,.25,.35,he.door,p,c-.75,r/2+.2)),[-.35,0,.35].forEach((E,y)=>e.add(F(.22,.22,.22,he.flower[y],p+E,c-.52,r/2+.22)))})),i&&i.heart){let p=Po(16744350);p.scale.setScalar(.9),p.material=new ye({color:16744350,emissive:16732030,emissiveIntensity:.2}),p.position.set(0,.3+a+o*.42,r/2+.42),e.add(p),e.userData.heart=p}let _=null;if(t){[-1.8,1.8].forEach(v=>e.add(F(.35,a,.35,he.wall2,v,.3+a/2,r/2+.25))),e.add(F(s+.4,.3,.9,he.wall2,0,.3+a+.05,r/2+.1));let p=F(.12,3,.12,he.trunk,0,.3+a+o+1.4,0);e.add(p);let E=F(1.4,.8,.06,16751536,.75,.3+a+o+2.4,0);e.add(E),e.userData.flag=E;let y=new ye({color:16375946,emissive:16739179,emissiveIntensity:0});_=new pt(new be(.25,.5,.6,10),y),_.position.set(0,.3+a+o*.42,r/2+.35),e.add(_),e.add(F(1.4,1.4,.1,he.frame,0,.3+a+o*.42,r/2+.25))}e.userData.top=.3+a+o+(t?3.2:.6);let m=new pt(new Fe(s+.6,a+o+.3,r+.6),Ad);return m.position.y=(a+o+.3)/2,e.add(m),e.userData.pick=m,e.userData.bell=_,e.userData.doorZ=r/2+1.3,e}function Io(i,t,e){let n=document.createElement("canvas");n.width=t,n.height=e,i(n.getContext("2d"),t,e);let s=new Pn(n);return s.colorSpace=Ge,s.anisotropy=4,s}function uh(i,t,e,n,s,r){r=r||0,i.userData.wm=s,i.userData.top=n+.9,i.userData.size={cx:r,hw:t/2+.4,hd:e/2+.3};let a=new pt(new Fe(t+.6,n+.3,e+.6),Ad);return a.position.set(r,(n+.3)/2,0),i.add(a),i.userData.pick=a,i.userData.doorZ=e/2+1.3,i}function dh(i,t,e,n,s){let r=new te;r.position.set(-t/2,.3,n),i.add(r),r.add(F(t,e,.1,s,t/2,e/2,0)),r.add(F(.06,.5,.06,14278115,t-.2,e/2,.07)),i.add(F(t-.04,e-.04,.05,3814720,0,.3+e/2,n-.04)),i.userData.hinge=r}function F_(){let i=new te,t=6.4,e=5.2,n=3,s=2.8,r=Lo();i.add(F(t+5.4,.25,e+.6,15328478,2.3,.12,0)),i.add(F(t,n,e,16513784,0,.25+n/2,0)),[-2.15,2.15].forEach(_=>{i.add(F(1.7,2.45,.08,3814720,_,.25+1.3,e/2+.01)),i.add(F(1.55,2.3,.1,0,_,.25+1.3,e/2+.03,r))}),dh(i,1.15,2.3,e/2+.03,9067068),i.add(F(t+.3,.18,e+.3,4867664,0,.25+n+.09,0));let a=.25+n+.18,o=Io((_,m,p)=>{for(let E=0;E<m;E+=4)_.fillStyle=E%8?"#c99166":"#bb8358",_.fillRect(E,0,4,p)},64,16),c=new ye({map:o}),l=new pt(new Fe(t-.6,s,e-.4),c);l.position.set(-.3,a+s/2,-.4),l.castShadow=!0,l.receiveShadow=!0,i.add(l),i.add(F(t-.3,.16,e-.1,4867664,-.3,a+s+.08,-.4));let h=e/2-.4+.01-.2;i.add(F(2.9,2.35,.08,3814720,-.3,a+1.2,h+.02));let u=new pt(new Fe(2.7,2.2,.06),new ye({color:12576498,transparent:!0,opacity:.6,emissive:16765562,emissiveIntensity:0}));u.position.set(-.3,a+1.2,h+.06),i.add(u),Do.push(u.material),i.add(F(.05,2.2,.08,3814720,-.3,a+1.2,h+.08)),i.add(F(t-.4,.14,1.5,15328478,-.2,a+.07,e/2+.55));let d=new pt(new Fe(t-.5,.75,.04),new ye({color:14217722,transparent:!0,opacity:.45}));d.position.set(-.2,a+.52,e/2+1.28),i.add(d),i.add(F(t-.5,.05,.07,3814720,-.2,a+.92,e/2+1.28)),[-2.5,-1.95,1.75,2.3].forEach((_,m)=>{i.add(F(.34,.32,.34,[15921906,9080729][m%2],_,a+.3,e/2+.95));let p=new pt(new Li(.26,0),Ut(he.leaf[m%3],{flatShading:!0}));p.position.set(_,a+.62,e/2+.95),p.castShadow=!0,i.add(p)});let f=Po(16744350);f.scale.setScalar(.55),f.material=new ye({color:16744350,emissive:16732030,emissiveIntensity:.25}),f.position.set(-2.2,a+2.05,e/2-.55),i.add(f),i.userData.heart=f;let g=t/2+2.3;i.add(F(4.6,2.9,e,16513784,g,.25+1.45,0)),i.add(F(4.8,.16,e+.2,4867664,g,.25+2.98,0)),i.add(F(3.7,2.3,.08,5592926,g,.25+1.15,e/2+.02));for(let _=0;_<6;_++)i.add(F(3.7,.03,.1,7040630,g,.45+_*.38,e/2+.05));return i.add(F(.5,.05,.05,16777215,g+1.4,2.95,e/2+.12)),[-1,1].forEach(_=>i.add(F(.12,.85,.85,0,_*(t/2+.01)-(_>0,0),.25+1.6,-1.2,r))),i.userData.vip=!0,uh(i,t+4.6,e,a+s+.2,r,2.3)}function z_(){let i=new te,t=9.2,e=6.6,n=3.8,s=Lo();i.add(F(t+.6,.25,e+.6,15326447,0,.12,0)),i.add(F(t,n,e,14273008,0,.25+n/2,0)),i.add(F(t+.4,.3,e+.4,16165309,0,.25+n+.15,0)),[-2.8,2.8].forEach(c=>{i.add(F(2.6,2,.1,16777215,c,1.5,e/2+.01)),i.add(F(2.4,1.8,.12,0,c,1.5,e/2+.03,s))}),dh(i,1.8,2.4,e/2+.03,15834032);let r=Io((c,l,h)=>{let u=c.createLinearGradient(0,0,l,0);u.addColorStop(0,"#ffb6c1"),u.addColorStop(.5,"#d9c9f0"),u.addColorStop(1,"#a6d8e8"),c.fillStyle=u,c.fillRect(0,0,l,h),c.fillStyle="#ffffff",c.font="bold 34px Nunito, sans-serif",c.textAlign="center",c.fillText("GAME CENTER",l/2,44),c.fillStyle="#fff59d";for(let d=0;d<6;d++)c.fillText("\u2605",18+d*44,14+d%2*54)},256,64),a=new pt(new Fe(6.4,1.6,.18),[Ut(15834032),Ut(15834032),Ut(15834032),Ut(15834032),new ye({map:r,emissive:16777215,emissiveMap:r,emissiveIntensity:.15}),Ut(15834032)]);a.position.set(0,.25+n+1.15,e/2-.2),a.castShadow=!0,i.add(a);for(let c=0;c<16;c++){let l=new ye({color:16774351,emissive:16765562,emissiveIntensity:0});Co.push(l);let h=new pt(new Qe(.07,6,5),l),u=c/16;h.position.set(-3.3+(u<.5?u*2*6.6:(1-u)*2*6.6),.25+n+(u<.5?1.98:.32),e/2-.1),i.add(h)}let o=new pt(new Qe(.55,12,10),Ut(14698591));return o.position.set(3.2,.25+n+2.2,-1.5),o.castShadow=!0,i.add(o),i.add(F(.18,1.6,.18,3814720,3.2,.25+n+1.2,-1.5)),i.add(F(1.6,.3,1.6,3814720,3.2,.25+n+.45,-1.5)),uh(i,t,e,n+2.4,s)}function B_(){let i=new te,t=9.2,e=7,n=3.5,s=Lo();i.add(F(t+.8,.22,e+.8,14605012,0,.11,0)),i.add(F(t,n,e,16513784,0,.22+n/2,0)),[[15895592,0],[3055195,.22],[14826299,.44]].forEach(([l,h])=>{i.add(F(t+.06,.2,e+.06,l,0,.22+n-.55-h,0))}),i.add(F(t+.5,.25,e+.5,15921906,0,.22+n+.12,0));let r=Io((l,h,u)=>{l.fillStyle="#d8f1fa",l.fillRect(0,0,h,u);let d=["#ffb6c1","#f5d888","#a3d9bd","#a6d8e8","#f9c39c","#d9c9f0"];for(let f=0;f<4;f++){l.fillStyle="#c9e7f2",l.fillRect(0,12+f*28,h,3);for(let g=0;g<26;g++)l.fillStyle=d[(g+f)%d.length],l.fillRect(6+g*10,15+f*28,7,10+g%3*3)}},256,128),a=new ye({map:r,emissive:16773836,emissiveMap:r,emissiveIntensity:.1});[-2.65,2.65].forEach(l=>{i.add(F(3.4,2,.08,14605012,l,1.35,e/2+.01));let h=new pt(new Fe(3.2,1.85,.1),a);h.position.set(l,1.35,e/2+.03),i.add(h)}),dh(i,1.7,2.3,e/2+.03,12576498);let o=Io((l,h,u)=>{l.fillStyle="#ffffff",l.fillRect(0,0,h,u),l.fillStyle="#2e9e5b",l.fillRect(10,18,108,16),l.fillStyle="#f28c28",l.fillRect(10,40,108,16),l.fillStyle="#e23b3b",l.font="bold 86px sans-serif",l.textAlign="center",l.fillText("7",64,98),l.font="bold 20px sans-serif",l.fillText("ELEVEn",64,122)},128,128),c=new pt(new Fe(1.5,1.5,.14),[Ut(16777215),Ut(16777215),Ut(16777215),Ut(16777215),new ye({map:o}),Ut(16777215)]);return c.position.set(t/2-1.1,.22+n+1.05,e/2-.3),c.castShadow=!0,i.add(c),i.add(F(.12,.8,.12,14605012,t/2-1.1,.22+n+.35,e/2-.3)),[[15226446,-.5],[6131664,.45]].forEach(([l,h])=>{i.add(F(.8,1.8,.75,l,t/2+.45,1.12,e/2-1.2+h));let u=F(.04,.9,.55,0,t/2+.86,1.4,e/2-1.2+h,new ye({color:16775126,emissive:16773808,emissiveIntensity:.25}));i.add(u)}),[-4,-3.2].forEach(l=>i.add(F(.5,.5,.5,15895592,l,.47,e/2+.9))),i.userData.alwaysLit=!0,uh(i,t,e,n+1.9,s)}function H_(){let i=new te,t=2500653,e=14278115,n=5202805;i.add(F(1.9,1,4.4,t,0,.95,0)),i.add(F(1.75,.78,2.7,t,0,1.85,-.35)),[[-1,0],[1,0]].forEach(([a])=>i.add(F(.03,.55,2.4,n,a*.885,1.9,-.35))),i.add(F(1.6,.55,.03,n,0,1.9,1.01)),i.add(F(1.6,.55,.03,n,0,1.9,-1.71)),i.add(F(1.92,.06,4.42,e,0,1.46,0)),i.add(F(1.3,.35,.05,1776672,0,1.05,2.21));for(let a=-2;a<=2;a++)i.add(F(.03,.3,.06,e,a*.22,1.05,2.22));[-1,1].forEach(a=>{let o=new pt(new be(.17,.17,.08,14),Ut(16775126,{emissive:16773808,emissiveIntensity:.35}));o.rotation.x=Math.PI/2,o.position.set(a*.72,1.12,2.22),i.add(o),i.add(F(.12,.12,.12,16754253,a*.95,1.5,1.95)),i.add(F(.22,.35,.05,14703183,a*.78,1,-2.22))}),i.add(F(1.94,.18,.2,1776672,0,.5,2.25)),i.add(F(1.94,.18,.2,1776672,0,.5,-2.25));let s=new pt(new be(.4,.4,.24,16),Ut(1776672));s.rotation.x=Math.PI/2,s.position.set(0,1.15,-2.35),i.add(s);let r=new pt(new be(.22,.22,.26,12),Ut(e));return r.rotation.x=Math.PI/2,r.position.set(0,1.15,-2.36),i.add(r),[[-.95,1.45],[.95,1.45],[-.95,-1.4],[.95,-1.4]].forEach(([a,o])=>{let c=new pt(new be(.42,.42,.34,14),Ut(1776672));c.rotation.z=Math.PI/2,c.position.set(a,.42,o),c.castShadow=!0,i.add(c);let l=new pt(new be(.22,.22,.36,10),Ut(e));l.rotation.z=Math.PI/2,l.position.set(a,.42,o),i.add(l)}),i.add(F(1.5,.05,2.2,3816514,0,2.27,-.35)),i}function k_(i,t){if(!vn)return{posts:[],blocks:[]};let e=vn,n={posts:[],blocks:[]},[s,r]=ke[e.house],[a,o]=e.car,c=t===Math.PI?e.z0:e.z1,l=rn(s,r),h=[[s-1.2,s+1.2],[a-1.6,a+1.6]],u=(m,p)=>Math.abs(p-c)<.01&&h.some(([E,y])=>m>E&&m<y),d=(m,p,E,y)=>{let v=Math.hypot(E-m,y-p),O=Math.max(1,Math.round(v/1));for(let I=0;I<O;I++){let L=dn(m,E,(I+.5)/O),U=dn(p,y,(I+.5)/O);if(u(L,U))continue;let A=F(v/O+.02,.55,.22,16052716,L,l+.27,U);A.rotation.y=Math.atan2(E-m,y-p)+Math.PI/2,i.add(A);let S=F(v/O,.32,.3,8831614,L,l+.68,U);S.rotation.y=A.rotation.y,i.add(S),n.posts.push({x:L,z:U,r:.45})}};d(e.x0,e.z0,e.x1,e.z0),d(e.x1,e.z0,e.x1,e.z1),d(e.x1,e.z1,e.x0,e.z1),d(e.x0,e.z1,e.x0,e.z0),n.blocks.push({x:s+5.5,z:r,hw:2.5,hd:2.8});let f=Math.min(c,o)-1.5,g=Math.max(c,o)+.5;i.add(F(3.4,.05,Math.abs(g-f)+1.5,14144203,a,l+.025,(f+g)/2-.5));let _=H_();return _.position.set(a,l,o),_.rotation.y=t,i.add(_),n.blocks.push({x:a,z:o,hw:1.2,hd:2.4}),i.add(F(1.3,.05,Math.abs(r-c),15392719,s,l+.03,(r+c)/2)),n}var V_=[16366031,16164288,16569313];function _d(i,t){let e=new te,n=1.3+i()*.6;if(e.add(F(.5*n,1.6*n,.5*n,t?10121050:he.trunk,0,.8*n,0)),t){let r=new pt(new Hr(1.5*n,9),Ut(16503776));r.rotation.x=-Math.PI/2,r.position.y=.02,r.receiveShadow=!0,e.add(r)}return(t?[[0,2.2,0,1.35],[.8,1.9,.3,.9],[-.7,2,-.3,.95],[.1,3,.1,.85],[-.2,1.8,.8,.7]]:[[0,2.1,0,1.25],[.6,1.8,.3,.85],[-.5,1.9,-.2,.9],[.1,2.8,.1,.8]]).forEach(([r,a,o,c],l)=>{let h=new pt(new Li(c*n,0),Ut(t?V_[l%3]:he.leaf[l%3],{flatShading:!0}));h.position.set(r*n,a*n,o*n),h.castShadow=!0,h.receiveShadow=!0,e.add(h)}),e.rotation.y=i()*6.28,e}function G_(){let i=new te;i.add(F(.16,2.2,.16,9206379,0,1.1,0));let t=new ye({color:16774351,emissive:16765562,emissiveIntensity:0});return Co.push(t),i.add(F(.5,.5,.5,0,0,2.45,0,t)),i.add(F(.62,.12,.62,9206379,0,2.76,0)),i}var W_=new ye({vertexColors:!0});function Rd(i,t){let e=[];i.traverse(n=>{n.isMesh||e.push(n)}),e.forEach(n=>{let s=n.children.filter(c=>c.isMesh&&!(t&&t.includes(c))&&!c.material.transparent&&!c.material.map);if(s.length<2)return;let r=s.map(c=>{let l=c.geometry.clone();Object.keys(l.attributes).forEach(f=>{f!=="position"&&f!=="normal"&&l.deleteAttribute(f)}),l.index&&(l=l.toNonIndexed()),l.clearGroups(),c.updateMatrix(),l.applyMatrix4(c.matrix);let h=c.material.color,u=l.attributes.position.count,d=new Float32Array(u*3);for(let f=0;f<u;f++)d[f*3]=h.r,d[f*3+1]=h.g,d[f*3+2]=h.b;return l.setAttribute("color",new je(d,3)),l}),a=vo(r,!1);if(r.forEach(c=>c.dispose()),!a)return;s.forEach(c=>n.remove(c));let o=new pt(a,W_);o.castShadow=!0,o.receiveShadow=!0,n.add(o)})}function Ao(i,t,e,n,s,r,a){let o=new te;o.position.set(s,r,a);let c=F(i,t,e,n,0,-t/2,0);return o.add(c),o}var Ro=[{hair:5914688,skin:16768198,shirt:12166888,pants:7170698,style:"short"},{hair:3878703,skin:15976614,shirt:16368540,pants:8161960,style:"bun"},{hair:11039050,skin:16769744,shirt:10934504,pants:9075306,style:"cap",cap:8830934},{hair:3025462,skin:15580570,shirt:10738109,pants:6253178,style:"short"},{hair:2038564,skin:16768198,shirt:16758465,pants:9080760,style:"twin"},{hair:9067068,skin:16175024,shirt:16111752,pants:7170698,style:"cap",cap:15834032},{hair:4864570,skin:15317140,shirt:9417689,pants:5196378,style:"short",glasses:!0},{hair:13208410,skin:16769744,shirt:10147472,pants:8161960,style:"long"},{hair:3878703,skin:15976614,shirt:16773544,pants:9075306,style:"bun",glasses:!0},null,{hair:5914688,skin:15580570,shirt:14273008,pants:7170698,style:"long"},{hair:3025462,skin:16768198,shirt:16111752,pants:8161960,style:"bun"},{hair:9067068,skin:15976614,shirt:10473444,pants:6253178,style:"short",glasses:!0},{hair:3878703,skin:15317140,shirt:10738109,pants:7170698,style:"cap",cap:10738109},{hair:13208410,skin:16769744,shirt:13482478,pants:9080760,style:"twin"},{hair:2367010,skin:16175024,shirt:16368540,pants:8161960,style:"short"},{hair:5914688,skin:16768198,shirt:16758465,pants:7170698,style:"long"},{hair:2038564,skin:15580570,shirt:9226408,pants:5196378,style:"cap",cap:16165309},{hair:11039050,skin:16769744,shirt:16111752,pants:9075306,style:"bun"}],ch={her:{hair:3877418,skin:16768198,shirt:16758465,pants:16758465,style:"long",dress:16165309},him:{hair:2367010,skin:15778976,shirt:10473444,pants:6253194,style:"short"}},yd=[{hair:3878703,skin:15976614,shirt:16103802,pants:7045032,style:"cap",cap:16111752},{hair:9067068,skin:16769744,shirt:16103802,pants:7045032,style:"cap",cap:16111752},{hair:2367010,skin:15317140,shirt:16103802,pants:7045032,style:"cap",cap:16111752}],Se=1.75/32,lh=12*Se;function Js(i,t){let e=new Qt(i);return t&&(e.r=Math.min(1,e.r*t),e.g=Math.min(1,e.g*t),e.b=Math.min(1,e.b*t)),"#"+e.getHexString()}function Cd(i,t){let e=document.createElement("canvas");e.width=e.height=64;let n=e.getContext("2d"),s=(i.hair^i.shirt^i.skin)>>>0,r=()=>(s=s*1664525+1013904223>>>0,s/4294967296),a=(_,m,p,E,y,v)=>{for(let O=0;O<E;O++)for(let I=0;I<p;I++)n.fillStyle=Js(y,1+(r()-.5)*(v==null?.1:v)),n.fillRect(_+I,m+O,1,1)},o=(_,m,p)=>{n.fillStyle=typeof p=="string"?p:Js(p),n.fillRect(_,m,1,1)},c=5981750,l=i.skin,h=i.hair,u=i.shirt,d=i.pants,f=i.style==="long"||i.style==="twin"||i.dress;a(0,0,32,16,l,.06),a(8,0,8,8,h),a(24,8,8,f?8:6,h),[0,16].forEach(_=>{a(_,8,8,f?7:4,h),a(_+(_?6:0),12,2,f?4:2,h)}),a(8,8,8,2,h),o(8,10,h),o(15,10,h),o(9,10,h),i.style==="cap"&&(a(8,0,8,8,i.cap),a(8,8,8,2,i.cap),a(0,8,8,2,i.cap),a(16,8,8,2,i.cap),a(24,8,8,2,i.cap)),[[9,12],[13,12]].forEach(([_,m])=>{if(t){o(_,m+1,"#3a2e33"),o(_+1,m+1,"#3a2e33");return}o(_,m,"#ffffff"),o(_+1,m,"#3a2e33"),o(_,m+1,"#ffffff"),o(_+1,m+1,"#3a2e33")}),o(9,14,"#ffa3b5"),o(14,14,"#ffa3b5"),o(11,14,Js(l,.78)),o(12,14,Js(l,.78)),o(11,15,"#c9707c"),o(12,15,"#c9707c"),i.glasses&&([9,13].forEach(_=>{["#6b5a4e"].forEach(m=>{o(_-1,12,m),o(_+2,12,m),o(_-1,13,m),o(_+2,13,m)})}),o(11,12,"#6b5a4e"),o(12,12,"#6b5a4e")),a(16,16,24,16,u),a(20,16,8,4,u,.05),a(23,20,2,1,l),i.dress?(a(16,26,24,6,i.dress),a(20,25,8,1,Js(i.dress,.9)&&i.dress)):a(16,30,24,2,Js(d,.85)&&d,.05),a(20,22,8,1,u,.25),[[40,16],[32,48]].forEach(([_,m])=>{a(_,m,16,16,u),a(_,m+4+5,16,7,l,.06),a(_+4,m,4,4,u),a(_+8,m,4,4,l)}),[[0,16],[16,48]].forEach(([_,m])=>{a(_,m,16,16,i.dress?l:d),i.dress&&a(_,m+4,16,3,i.dress),a(_,m+4+10,16,2,c,.05),a(_+8,m,4,4,c)});let g=new Pn(e);return g.magFilter=sn,g.minFilter=sn,g.generateMipmaps=!1,g.colorSpace=Ge,g}function $s(i,t,e,n,s){let r=new Fe(i*Se,t*Se,e*Se),a=64,o=(h,u,d,f,g)=>{let _=h/a,m=(h+d)/a,p=1-u/a,E=1-(u+f)/a;return g?[m,p,_,p,m,E,_,E]:[_,p,m,p,_,E,m,E]},c=[o(n+e+i,s+e,e,t),o(n,s+e,e,t),o(n+e,s,i,e),o(n+e+i,s,i,e,!0),o(n+e,s+e,i,t),o(n+2*e+i,s+e,i,t)],l=r.attributes.uv;return c.forEach((h,u)=>{for(let d=0;d<4;d++)l.setXY(u*4+d,h[d*2],h[d*2+1])}),l.needsUpdate=!0,r}function Pd(i){let t=new te,e={},n=new ye({map:Cd(i)});e.mat=n,e.look=i;let s=(c,l,h,u)=>{let d=new pt(c,n);return d.position.set(l,h,u),d.castShadow=!0,d.receiveShadow=!0,d},r=(c,l,h,u)=>{let d=new te;return d.position.set(c,l,h),d.add(u),d};e.legR=r(-2*Se,12*Se,0,s($s(4,12,4,0,16),0,-6*Se,0)),t.add(e.legR),e.legL=r(2*Se,12*Se,0,s($s(4,12,4,16,48),0,-6*Se,0)),t.add(e.legL),e.body=s($s(8,12,4,16,16),0,18*Se,0),t.add(e.body),e.armR=r(-6*Se,23.5*Se,0,s($s(4,12,4,40,16),0,-5.5*Se,0)),t.add(e.armR),e.armL=r(6*Se,23.5*Se,0,s($s(4,12,4,32,48),0,-5.5*Se,0)),t.add(e.armL);let a=new te;a.position.y=24*Se,t.add(a),e.head=a,a.add(s($s(8,8,8,0,0),0,4*Se,0));let o=(c,l,h,u,d,f,g)=>{let _=F(l*Se,h*Se,u*Se,c,d*Se,f*Se,g*Se);a.add(_)};if(i.style==="bun"&&o(i.hair,3,3,3,0,9.3,-2),i.style==="twin"&&(o(i.hair,2,4,2,-4.6,3.5,-1.5),o(i.hair,2,4,2,4.6,3.5,-1.5)),i.style==="cap"&&o(i.cap,8,1,3,0,6.5,5),i.style==="long"&&o(i.hair,8,5,1,0,-1.5,-4.5),i.dress){let c=F(9*Se,4*Se,5*Se,i.dress,0,12.5*Se,0);t.add(c)}return{g:t,parts:e}}function X_(){let i=new te,t={},e=16236938,n=14720350,s=16774118;i.add(F(.46,.4,.8,e,0,.5,0)),[-.12,.1].forEach(l=>i.add(F(.48,.06,.12,n,0,.71,l))),i.add(F(.36,.2,.5,s,0,.34,.05)),t.legs=[[-.14,.28],[.14,.28],[-.14,-.28],[.14,-.28]].map(([l,h])=>{let u=Ao(.13,.32,.13,e,l,.34,h);return i.add(u),u});let r=new te;r.position.set(0,.78,.48),i.add(r),t.head=r,r.add(F(.5,.42,.42,e,0,0,0)),r.add(F(.3,.16,.06,s,0,-.1,.21)),[-.15,.15].forEach(l=>{let h=new pt(new kn(.11,.2,4),Ut(n));h.position.set(l,.29,-.02),h.rotation.y=Math.PI/4,r.add(h);let u=F(.08,.1,.03,4010032,l*.8,.04,.215);r.add(u),(t.eyes=t.eyes||[]).push(u)}),r.add(F(.07,.05,.03,16752048,0,-.04,.23));let a=new te;a.position.set(0,.62,-.38),i.add(a),t.tail=a;let o=F(.1,.1,.4,e,0,.05,-.18);a.add(o);let c=new te;return c.position.set(0,.05,-.36),a.add(c),c.add(F(.1,.4,.1,n,0,.18,0)),a.rotation.x=.5,i.scale.setScalar(.6),Rd(i,t.eyes),{g:i,parts:t}}function Y_(){let i=new te,t={},e=16774374,n=13211247;i.add(F(.56,.5,.95,e,0,.62,0)),i.add(F(.58,.3,.4,n,0,.76,-.15)),t.legs=[[-.17,.33],[.17,.33],[-.17,-.33],[.17,-.33]].map(([a,o])=>{let c=Ao(.16,.4,.16,e,a,.42,o);return i.add(c),c});let s=new te;s.position.set(0,.98,.55),i.add(s),t.head=s,s.add(F(.56,.52,.5,e,0,0,0)),s.add(F(.3,.24,.26,e,0,-.1,.34)),s.add(F(.13,.1,.06,4010032,0,-.02,.48)),s.add(F(.1,.12,.06,16748451,.05,-.24,.42)),[-.3,.3].forEach(a=>{let o=Ao(.12,.42,.26,n,a,.2,-.02);o.rotation.z=a>0?-.15:.15,s.add(o);let c=F(.08,.11,.03,4010032,a*.45,.08,.26);s.add(c),(t.eyes=t.eyes||[]).push(c)});let r=Ao(.12,.42,.12,n,0,.82,-.47);return r.rotation.x=-.9,i.add(r),t.tail=r,i.scale.setScalar(.62),Rd(i,t.eyes),{g:i,parts:t}}function q_(i){let t=new te,e=[16751211,16777215,16757575][i%3],n=new pt(new Qe(.28,10,8),Ut(e));if(n.scale.set(.7,.6,1.4),t.add(n),i%3===1){let r=new pt(new Qe(.16,8,6),Ut(16744272));r.position.set(0,.1,.05),r.scale.set(1,.6,1.4),t.add(r)}let s=new pt(new kn(.22,.35,4),Ut(e===16777215?16751211:e));return s.rotation.x=Math.PI/2,s.position.z=-.5,t.add(s),t.userData.tail=s,t}function Z_(i){let t=new te,e=new ye({color:i,side:gn}),n=()=>{let a=new pt(new fi(.32,.26),e);a.position.x=.17;let o=new te;return o.add(a),o},s=n(),r=n();return r.scale.x=-1,t.add(s,r),t.userData.l=s,t.userData.r=r,t}function vd(){let i=new te,t=12883572,e=15392715;[-1.3,1.3].forEach(r=>[-1,1].forEach(a=>{let o=F(.14,2.75,.14,t,r,1.3,a*.48);o.rotation.x=-a*.36,i.add(o)})),i.add(F(2.9,.14,.16,t,0,2.58,0));let n=new te;n.position.y=2.52,i.add(n),[-.72,.72].forEach(r=>n.add(F(.04,1.96,.04,e,r,-.98,0)));let s=F(1.65,.1,.5,16165309,0,-1.98,0);return n.add(s),i.userData.pivot=n,i.userData.seat=s,i}function Id(i,t,e,n){let s=document.createElement("canvas");s.width=128,s.height=64;let r=s.getContext("2d");r.font="bold 48px sans-serif",r.fillStyle=t,r.textAlign="center",r.fillText(i,64,50);let a=new Gs(new $i({map:new Pn(s),transparent:!0,depthWrite:!1}));return a.scale.set(e,n,1),a.visible=!1,a}function Md(i,t){return Math.hypot((i-Kt.x)/(Kt.rx+4.4),(t-Kt.z)/(Kt.rz+4.4))<1&&!as(i,t,.4)}function J_(i){let t=Qs,e=new Ii,n=t.r,s=-t.hw+.6,r=t.hw-.6,a=-t.hd+.6,o=t.hd-.6,c=Math.max(.5,n-.6);e.moveTo(s+c,a),e.lineTo(r-c,a),e.quadraticCurveTo(r,a,r,a+c),e.lineTo(r,o-c),e.quadraticCurveTo(r,o,r-c,o),e.lineTo(s+c,o),e.quadraticCurveTo(s,o,s,o-c),e.lineTo(s,a+c),e.quadraticCurveTo(s,a,s+c,a);let l=new Di(e,{depth:t.h-.8,bevelEnabled:!0,bevelThickness:.4,bevelSize:.6,bevelSegments:2,curveSegments:8});l.rotateX(-Math.PI/2),l.translate(t.x,.4,t.z);let h=new pt(l,[Ut(he.grass),Ut(12888202,{flatShading:!0})]);h.castShadow=!0,h.receiveShadow=!0,i.add(h);let u=new Di(e,{depth:t.h*.42,bevelEnabled:!0,bevelThickness:.2,bevelSize:.75,bevelSegments:1,curveSegments:8});u.rotateX(-Math.PI/2),u.translate(t.x,.2,t.z);let d=new pt(u,Ut(11112312,{flatShading:!0}));d.receiveShadow=!0,i.add(d);let f=To(17);for(let E=0;E<46;E++){let y=f()*Math.PI*2,v=t.x+Math.cos(y)*(t.hw+.4),O=t.z+Math.sin(y)*(t.hd+.4),I=t.x+Math.max(-t.hw,Math.min(t.hw,v-t.x)),L=t.z+Math.max(-t.hd,Math.min(t.hd,O-t.z));if(js(I,L+.8)||Math.abs(I-an.x)<2.2&&L>t.z)continue;let U=new pt(new Ws(.35+f()*.6,0),Ut([12034959,10719872,13220006][E%3],{flatShading:!0}));U.position.set(I,.2+f()*.3,L),U.rotation.set(f()*3,f()*3,f()*3),U.castShadow=!0,i.add(U)}let g=an.z1-an.z0,_=Math.hypot(g,t.h),m=Math.atan2(t.h,g),p=new te;p.position.set(an.x,t.h/2,(an.z0+an.z1)/2),p.rotation.x=m,i.add(p),p.add(F(2.2,.3,_+.4,15126435,0,-.12,0));for(let E=0;E<_/.45;E++)p.add(F(2.2,.06,.08,13809807,0,.05,-_/2+.2+E*.45));[-1.15,1.15].forEach(E=>{p.add(F(.08,.08,_,12883572,E,.75,0));for(let y=0;y<=5;y++)p.add(F(.1,.8,.1,11569768,E,.38,-_/2+y*_/5))})}function $_(i){hh.forEach(([t,e,n,s],r)=>{let a=new pt(new kn(n,s,7,1),Ut([12102089,11115451,12760272][r%3],{flatShading:!0}));a.position.set(t,s/2-.2,e),a.rotation.y=r*1.3,a.castShadow=!0,a.receiveShadow=!0,i.add(a);let o=s*.3,c=new pt(new kn(n*.3*1.04,o,7,1),Ut(16777215,{flatShading:!0}));c.position.set(t,s-o/2-.18,e),c.rotation.y=a.rotation.y,i.add(c);let l=new pt(new kn(n*.55,s*.55,6,1),Ut(11707332,{flatShading:!0}));l.position.set(t+n*.55,s*.27-.2,e+n*.25),l.rotation.y=r,l.castShadow=!0,i.add(l)})}function K_(i){let t=new Br(na.map(_=>new D(_.x,0,_.z))),e=90,n=t.getSpacedPoints(e),s=(_,m,p)=>{let E=[],y=[];n.forEach((I,L)=>{let U=n[Math.max(0,L-1)],A=n[Math.min(e,L+1)],S=A.x-U.x,N=A.z-U.z,q=Math.hypot(S,N)||1,G=-N/q*_/2,Y=S/q*_/2;if(E.push(I.x+G,m,I.z+Y,I.x-G,m,I.z-Y),L){let V=L*2;y.push(V-2,V,V-1,V-1,V,V+1)}});let v=new Le;v.setAttribute("position",new le(E,3)),v.setIndex(y),v.computeVertexNormals();let O=new pt(v,p);return O.receiveShadow=!0,i.add(O),O};s(3.8,.012,Ut(he.sand));let r=s(2.4,.045,new ye({color:9425898,emissive:3837872,emissiveIntensity:.12}));r.userData.keepBatch=!0;let a=[];for(let _=0;_<26;_++){let m=new pt(new fi(.5,.12),new He({color:16777215,transparent:!0,opacity:.7,depthWrite:!1}));m.rotation.x=-Math.PI/2,i.add(m),a.push({m,t:Math.random(),side:(Math.random()-.5)*1.4,sp:.018+Math.random()*.012})}let o=n[0],c=5.5,l=document.createElement("canvas");l.width=16,l.height=64;let h=l.getContext("2d");h.fillStyle="#bfe8f7",h.fillRect(0,0,16,64);for(let _=0;_<40;_++)h.fillStyle="rgba(255,255,255,"+(.4+Math.random()*.5)+")",h.fillRect(Math.floor(Math.random()*16),Math.floor(Math.random()*64),1,3+Math.floor(Math.random()*6));let u=new Pn(l);u.wrapS=u.wrapT=Rr,u.repeat.set(1,2),u.magFilter=sn;let d=new pt(new fi(1.8,c),new He({map:u,transparent:!0,opacity:.92,side:gn}));d.position.set(o.x,c/2,o.z-.6),i.add(d);let f=[];for(let _=0;_<6;_++){let m=new pt(new Qe(.22,6,5),new He({color:16777215,transparent:!0,opacity:.85}));m.position.set(o.x+(_-2.5)*.3,.15,o.z-.2),i.add(m),f.push(m)}let g=[];return yn.forEach(([_,m,p,E])=>{let y=_===p;for(let v=0;v<n.length;v++){let O=n[v];!(y?Math.abs(O.x-_)<.95&&O.z>=Math.min(m,E)-.9&&O.z<=Math.max(m,E)+.9:Math.abs(O.z-m)<.95&&O.x>=Math.min(_,p)-.9&&O.x<=Math.max(_,p)+.9)||g.some(L=>Math.hypot(L.x-O.x,L.z-O.z)<3)||g.push({x:y?_:O.x,z:y?O.z:m,rot:y?0:Math.PI/2})}}),g.forEach(_=>i.add(Dd(_.x,_.z,_.rot,2.2))),{curve:t,glints:a,ftex:u,foam:f,bridges:g,src:o}}function Dd(i,t,e,n){let s=new te;s.position.set(i,0,t),s.rotation.y=e;for(let r=0;r<9;r++){let a=(r-4)/4,o=.12+(1-a*a)*.32;s.add(F(n,.1,.5,r%2?13208170:12418398,0,o,a*2.1))}return[-1,1].forEach(r=>{for(let a=0;a<5;a++){let o=(a-2)/2,c=.12+(1-o*o)*.32,l=r*(n/2+.05);s.add(F(.14,.75,.14,14833487,l,c+.37,o*2)),(a===0||a===4)&&s.add(F(.2,.12,.2,16181192,l,c+.8,o*2))}for(let a=0;a<4;a++){let o=(a-2)/2,c=(a-1)/2,l=.12+(1-o*o)*.32+.72,h=.12+(1-c*c)*.32+.72,u=Math.hypot(2*(c-o),h-l)+.06,d=F(.1,.1,u,14833487,r*(n/2+.05),(l+h)/2,o+c);d.rotation.x=-Math.atan2(h-l,2*(c-o)),s.add(d)}}),s}function j_(i,t){let e=Kt,n=e.rx+2.6,s=e.rz+2.6,r=80,a=[],o=[],c={benches:[],ducks:[],posts:[]};for(let u=0;u<=r;u++){let d=u/r*Math.PI*2,f=Math.cos(d),g=Math.sin(d),_=e.x+f*(n-.75),m=e.z+g*(s-.75),p=e.x+f*(n+.75),E=e.z+g*(s+.75);if(a.push(_,.025,m,p,.025,E),u){let y=u*2;o.push(y-2,y,y-1,y-1,y,y+1)}}let l=new Le;l.setAttribute("position",new le(a,3)),l.setIndex(o),l.computeVertexNormals();let h=new pt(l,Ut(15654072));h.receiveShadow=!0,i.add(h);for(let u=0;u<r;u++){let d=u/r*Math.PI*2,f=e.x+Math.cos(d)*n,g=e.z+Math.sin(d)*s;if(cs(f,g)<.6){i.add(Dd(f,g,-d+Math.PI/2+Math.PI/2,1.5));break}}[.6,2.2,3.6,5].forEach((u,d)=>{let f=e.x+Math.cos(u)*(n+1.6),g=e.z+Math.sin(u)*(s+1.6);if(cs(f,g)<2.2||!os(f,g,1.5))return;let _=new te;_.position.set(f,0,g),_.rotation.y=Math.atan2(e.x-f,e.z-g),_.add(F(1.5,.08,.45,12883572,0,.45,0)),_.add(F(1.5,.4,.07,12883572,0,.7,-.22)),[-.65,.65].forEach(m=>{_.add(F(.08,.45,.4,9206379,m,.22,0))}),i.add(_),c.posts.push({x:f,z:g,r:.9})});for(let u=0;u<7;u++){let d=u/7*Math.PI*2+.3,f=e.x+Math.cos(d)*(n+3.1),g=e.z+Math.sin(d)*(s+3.1);if(cs(f,g)<2.4||!os(f,g,1.8))continue;let _=new pt(new be(.9,.95,.18,9),Ut(10188374));_.position.set(f,.09,g),_.scale.z=.7,i.add(_);for(let m=0;m<9;m++){let p=f+(t()-.5)*1.3,E=g+(t()-.5)*.9;i.add(F(.06,.3,.06,8173679,p,.32,E)),i.add(F(.2,.18,.2,he.flower[(u+m)%he.flower.length],p,.52,E))}c.posts.push({x:f,z:g,r:1})}for(let u=0;u<2;u++){let d=new te;d.add(F(.5,.3,.7,16777215,0,.18,0)),d.add(F(.32,.3,.3,u?16777215:7317610,0,.45,.32)),d.add(F(.18,.08,.16,16098123,0,.42,.53)),[-.12,.12].forEach(f=>d.add(F(.05,.06,.03,3025462,f,.5,.47))),d.add(F(.2,.12,.2,15658734,0,.32,-.38)),d.scale.setScalar(.8),i.add(d),c.ducks.push({g:d,a:u*2.5,sp:u?-.12:.09})}return c}function Q_(i){let t=[],e=[],n=(u,d)=>u.toFixed(2)+","+d.toFixed(2),s=new Map,r=(u,d)=>{let f=n(u,d);return s.has(f)||(s.set(f,t.length),t.push({x:u,z:d}),e.push([])),s.get(f)},a=(u,d)=>{if(u===d)return;let f=Math.hypot(t[u].x-t[d].x,t[u].z-t[d].z);e[u].push([d,f]),e[d].push([u,f])},o=yn.map(()=>[]);yn.forEach((u,d)=>{o[d].push([u[0],u[1]],[u[2],u[3]])}),yn.forEach((u,d)=>yn.forEach((f,g)=>{if(d>=g)return;let _=u[0]===u[2],m=f[0]===f[2];if(_===m)return;let p=_?u:f,E=_?f:u,y=p[0],v=E[1];y>=Math.min(E[0],E[2])-.01&&y<=Math.max(E[0],E[2])+.01&&v>=Math.min(p[1],p[3])-.01&&v<=Math.max(p[1],p[3])+.01&&(o[d].push([y,v]),o[g].push([y,v]))}));let c=i.map(u=>{let d=null;yn.forEach((g,_)=>{let m=g[0]===g[2],p=m?g[0]:Math.max(Math.min(g[0],g[2]),Math.min(Math.max(g[0],g[2]),u.x)),E=m?Math.max(Math.min(g[1],g[3]),Math.min(Math.max(g[1],g[3]),u.z)):g[1],y=Math.hypot(p-u.x,E-u.z);(!d||y<d.dist)&&(d={i:_,x:p,z:E,dist:y})}),o[d.i].push([d.x,d.z]);let f=r(u.x,u.z);return a(f,r(d.x,d.z)),f});o.forEach((u,d)=>{let f=yn[d][0]===yn[d][2];u.sort((g,_)=>f?g[1]-_[1]:g[0]-_[0]);for(let g=1;g<u.length;g++)a(r(u[g-1][0],u[g-1][1]),r(u[g][0],u[g][1]))});function l(u,d){let f=t.map(()=>1/0),g=t.map(()=>-1),_=t.map(()=>!1);for(f[u]=0;;){let p=-1;for(let E=0;E<t.length;E++)!_[E]&&(p<0||f[E]<f[p])&&(p=E);if(p<0||f[p]===1/0||p===d)break;_[p]=!0,e[p].forEach(([E,y])=>{f[p]+y<f[E]&&(f[E]=f[p]+y,g[E]=p)})}let m=[];for(let p=d;p>=0;p=g[p])m.unshift(t[p]);return m.length&&m[0]===t[u]?m:[t[d]]}function h(u,d){let f=0,g=1/0;return t.forEach((_,m)=>{let p=Math.hypot(_.x-u,_.z-d);p<g&&(g=p,f=m)}),f}return{nodes:t,doorNodes:c,path:l,nearest:h}}var So=[[0,2764134,9414399,.25,.55,1],[5,3093616,9414399,.25,.55,1],[6,16305590,16763296,1.3,1.1,.4],[7.5,12575733,16774374,2.3,1.55,0],[16.5,12575733,16774374,2.3,1.55,0],[18,16236724,16760470,1.3,1.1,.4],[19.2,3290997,9414399,.3,.6,1],[24,2764134,9414399,.25,.55,1]];function Ld(i){let t=0;for(;t<So.length-2&&So[t+1][0]<=i;)t++;let e=So[t],n=So[t+1],s=(i-e[0])/(n[0]-e[0]||1),r=new Qt(e[1]),a=new Qt(n[1]),o=new Qt(e[2]),c=new Qt(n[2]);return{sky:r.lerp(a,s),sun:o.lerp(c,s),power:dn(e[3],n[3],s),amb:dn(e[4],n[4],s),night:dn(e[5],n[5],s)}}function ty(i,t){t=t||{};let e=(i.clientWidth||innerWidth)<(i.clientHeight||innerHeight)*.9?"port":"land";wd(e),Do=[],Co=[];let n=(()=>{let x=/[?&]hour=([\d.]+)/.exec(location.search);return x?Number(x[1]):null})();n==null&&t.timeMode==="day"&&(n=11),n==null&&t.timeMode==="night"&&(n=22);let s=new Ur({antialias:!0});s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.shadowMap.enabled=!0,s.shadowMap.type=fo,s.domElement.className="village-3d",i.appendChild(s.domElement);let r=new Nr;r.fog=new to(12575733,220,480);let a=new Ke(34,1,.5,1100),o=new yo(a,s.domElement);o.enableDamping=!0,o.dampingFactor=.08,o.minDistance=14,o.maxDistance=320,o.minPolarAngle=.15,o.maxPolarAngle=1.32,o.target.set(0,0,1.5),o.screenSpacePanning=!1,o.rotateSpeed=.7,o.panSpeed=1.1,o.keyPanSpeed=22,s.domElement.tabIndex=0,s.domElement.style.outline="none",o.listenToKeyEvents(s.domElement);let c=new D,l=new D,h=new D;function u(x,b){a.getWorldDirection(h),h.y=0,h.normalize(),l.crossVectors(h,a.up).normalize();let C=a.position.distanceTo(o.target)*.0016;c.copy(l).multiplyScalar(x*C).addScaledVector(h,-b*C),o.target.add(c),a.position.add(c)}s.domElement.addEventListener("wheel",x=>{!x.ctrlKey&&x.deltaMode===0&&(Math.abs(x.deltaX)>.01||Math.abs(x.deltaY)<40)&&(x.preventDefault(),x.stopImmediatePropagation(),u(x.deltaX,x.deltaY))},{capture:!0,passive:!1});function d(){let x=o.target,b=tn.w/2,C=tn.d/2,z=Math.max(-b,Math.min(b,x.x)),K=Math.max(-C,Math.min(C,x.z));(z!==x.x||K!==x.z||x.y!==0)&&(c.set(z-x.x,-x.y,K-x.z),x.add(c),a.position.add(c))}o.addEventListener("change",d);let f=new qr(16777215,12048288,1);r.add(f);let g=new Jr(16777215,1.5);g.castShadow=!0,g.shadow.mapSize.set(2048,2048),Object.assign(g.shadow.camera,{left:-tn.a-6,right:tn.a+6,top:tn.b+10,bottom:-tn.b-10,near:1,far:260}),g.shadow.bias=-6e-4,g.shadow.normalBias=.03,r.add(g),r.add(g.target);let _=[],m=new Cn({uniforms:{top:{value:new Qt(9356778)},bottom:{value:new Qt(14216952)}},vertexShader:"varying float vY; void main(){ vY = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 bottom; varying float vY; void main(){ float k = smoothstep(-0.15, 0.75, vY); gl_FragColor = vec4(mix(bottom, top, k), 1.0); }",side:un,depthWrite:!1,fog:!1}),p=new pt(new Qe(480,24,14),m);p.renderOrder=-1,r.add(p);let E=new pt(new Qe(4,16,12),new He({color:16771496,fog:!1})),y=new pt(new Qe(3,16,12),new He({color:16052735,fog:!1}));r.add(E,y);let v=new Le,O=[];for(let x=0;x<700;x++){let b=Math.random()*Math.PI*2,C=Math.random()*1.55;O.push(Math.cos(b)*Math.sin(C)*280,Math.cos(C)*280+20,Math.sin(b)*Math.sin(C)*280)}v.setAttribute("position",new le(O,3));let I=new Ki(v,new Pi({color:16777215,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1}));r.add(I);let L=[];for(let x=0;x<6;x++){let b=new te,C=new ye({color:16777215,transparent:!0,opacity:.92});for(let z=0;z<4;z++){let K=new pt(new Qe(zt(1.6,2.6),10,8),C);K.position.set(z*2-3,zt(-.4,.6),zt(-.8,.8)),K.scale.y=.7,b.add(K)}b.position.set(zt(-90,90),zt(34,46),zt(-90,-40)),b.userData.speed=zt(.6,1.4),b.userData.mat=C,L.push(b),r.add(b)}let U=new te;U.mat=new ye({color:16777215,transparent:!0,opacity:.9,fog:!1});for(let x=0;x<11;x++){let b=x/11*Math.PI*2+zt(-.15,.15),C=pi(b)+zt(1,7),z=[];for(let $=0;$<5;$++){let M=new Qe(zt(1.6,2.8),9,7);M.scale(1,.62,1),M.translate($*2.1-4.2,zt(-.3,.6),zt(-1,1)),z.push(M)}let K=new pt(vo(z,!1),U.mat);z.forEach($=>$.dispose()),K.position.set(Math.cos(b)*C,zt(-9,-3),-Math.sin(b)*C),K.rotation.y=b+Math.PI/2,K.scale.setScalar(zt(.9,1.5)),U.add(K)}r.add(U);let A=[];{let x=To(23),b=[12297952,10982100,9797574];for(let C=0;C<6;C++){let z=C/6*Math.PI*2+.4+x()*.4,K=pi(z)+9+x()*7,$=1.6+x()*1.8,M=new te,W=new pt(new be($,$*.92,.5,7),Ut(he.grass,{flatShading:!0}));W.position.y=-.25,W.receiveShadow=!0,M.add(W);let wt=new pt(new be($*.92,$*.8,.5,7),Ut(14202774,{flatShading:!0}));wt.position.y=-.75,M.add(wt);let Nt=new pt(new kn($*.8,$*2.2,7),Ut(b[C%3],{flatShading:!0}));if(Nt.rotation.x=Math.PI,Nt.position.y=-1-$*1.1,M.add(Nt),C%3===2)[0,1,2].forEach(re=>M.add(F(.25,.25,.25,he.flower[(C+re)%5],(re-1)*.6,.12,re%2*.5-.2)));else{let re=_d(x,C%3===0);re.scale.setScalar(.55),M.add(re)}M.position.set(Math.cos(z)*K,-2+x()*6,-Math.sin(z)*K),M.userData={y0:M.position.y,ph:x()*6},r.add(M),A.push(M)}}let S=(()=>{let x=document.createElement("canvas");x.width=x.height=64;let b=x.getContext("2d"),C=b.createRadialGradient(32,32,0,32,32,32);C.addColorStop(0,"rgba(255,255,255,0.85)"),C.addColorStop(.3,"rgba(255,255,255,0.22)"),C.addColorStop(1,"rgba(255,255,255,0)"),b.fillStyle=C,b.fillRect(0,0,64,64),b.fillStyle="#ffffff",b.beginPath();for(let K=0;K<10;K++){let $=K/10*Math.PI*2-Math.PI/2,M=K%2?8:20;b.lineTo(32+Math.cos($)*M,32+Math.sin($)*M)}b.closePath(),b.fill();let z=new Pn(x);return z.colorSpace=Ge,z})(),N=(()=>{let x=document.createElement("canvas");x.width=x.height=32;let b=x.getContext("2d");b.fillStyle="#ffffff",b.beginPath();for(let z=0;z<8;z++){let K=z/8*Math.PI*2,$=z%2?2.5:15;b.lineTo(16+Math.cos(K)*$,16+Math.sin(K)*$)}b.closePath(),b.fill();let C=new Pn(x);return C.colorSpace=Ge,C})(),q=[0,1,2].map(x=>{let b=[],C=[],z=new Qt,K=[16773544,16762076,14273791,12905727];for(let W=0;W<34;W++){let wt=Math.random()*Math.PI*2,Nt=.15+Math.random()*1.2;b.push(Math.cos(wt)*Math.sin(Nt)*260,Math.cos(Nt)*260+20,Math.sin(wt)*Math.sin(Nt)*260),z.set(K[(W+x)%4]),C.push(z.r,z.g,z.b)}let $=new Le;$.setAttribute("position",new le(b,3)),$.setAttribute("color",new le(C,3));let M=new Ki($,new Pi({size:11+x*3,map:S,vertexColors:!0,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,fog:!1}));return M.userData={base:0,ph:x*2.1},r.add(M),M}),G=new Gs(new $i({map:(()=>{let x=document.createElement("canvas");x.width=128,x.height=16;let b=x.getContext("2d"),C=b.createLinearGradient(0,0,128,0);return C.addColorStop(0,"rgba(255,255,255,0)"),C.addColorStop(1,"rgba(255,248,220,1)"),b.fillStyle=C,b.beginPath(),b.moveTo(0,8),b.lineTo(120,4),b.arc(120,8,4,-Math.PI/2,Math.PI/2),b.closePath(),b.fill(),new Pn(x)})(),transparent:!0,opacity:0,depthWrite:!1,fog:!1}));G.scale.set(36,4.5,1),r.add(G);let Y={t:-1,wait:6,from:new D,dir:new D},V=new te;r.add(V),V.add(bo(Eo(1),.6,he.grass,-.6)),V.add(bo(Eo(1,.25),1.2,14202774,-1.8));let j=[12297952,10982100,9797574,8679350],mt=[[.97,.4,2.2,-4],[.86,.4,2.4,-6.4],[.68,.4,2.2,-8.6],[.44,0,1.8,-10.4]];mt.forEach(([x,b,C,z],K)=>{let $=bo(Eo(x,b),C,0,z);$.material=Ut(j[K],{flatShading:!0}),V.add($)});{let x=To(11),b=new Ws(1,0);mt.forEach(([C,z,K,$],M)=>{let W=Math.round(46*C);for(let Nt=0;Nt<W;Nt++){let re=(Nt+x()*.6)/W*Math.PI*2,Xt=pi(re,C)-z-.3,de=new pt(b,Ut(j[Math.min(3,M+(x()<.4?1:0))],{flatShading:!0})),Ne=.9+x()*1.1;de.scale.set(Ne,Ne*(.8+x()*.6),Ne),de.position.set(Math.cos(re)*Xt,$+K*(.2+x()*.6),-Math.sin(re)*Xt),de.rotation.set(x()*3,x()*3,x()*3),V.add(de)}let wt=M===3?7:Math.round(16*C);for(let Nt=0;Nt<wt;Nt++){let re=x()*Math.PI*2,Xt=M===3?x()*pi(re,C)*.6:pi(re,C)-z-1-x()*2.5,de=(M===3?4:2)+x()*3,Ne=.8+x()*1.2,An=new pt(new kn(Ne,de,5),Ut(j[Math.min(3,M+1)],{flatShading:!0}));An.rotation.x=Math.PI,An.position.set(Math.cos(re)*Xt,$-de/2+.1,-Math.sin(re)*Xt),V.add(An)}})}let Q=bo(Eo(1,-.25),.3,he.grassSide,-.75);V.add(Q),yn.forEach(([x,b,C,z])=>{let K=x===C,$=Math.abs(K?z-b:C-x),M=(x+C)/2,W=(b+z)/2;if(K&&Math.abs(M-an.x)<.2&&Math.min(b,z)<an.z1&&Math.max(b,z)>an.z0&&rn(M,W)>0)return;let wt=F(K?1.8:$+1.8,.06,K?$+1.8:1.8,he.road,M,rn(M,W)+.03,W);wt.castShadow=!1,V.add(wt)}),J_(V),$_(V);let vt=K_(V),ut=To(5),Ft=new Fe(.5,.05,.4),ne=new Ci(Ft,Ut(15126435),140),Yt=new We;for(let x=0;x<140;x++){let b=yn[Math.floor(ut()*yn.length)],C=ut(),z=b[0]===b[2],K=dn(b[0],b[2],C)+(z?(ut()-.5)*1.2:0),$=dn(b[1],b[3],C)+(z?0:(ut()-.5)*1.2);Yt.position.set(K,rn(K,$)+.07,$),Yt.rotation.y=ut()*.6,Yt.updateMatrix(),ne.setMatrixAt(x,Yt.matrix)}ne.receiveShadow=!0,V.add(ne);let it=new pt(new be(1,1,.06,40),Ut(he.sand));it.scale.set(Kt.rx+1.2,1,Kt.rz+1.2),it.position.set(Kt.x,.03,Kt.z),it.receiveShadow=!0,V.add(it);let xt=new pt(new be(1,1,.1,40),Ut(7321295));xt.scale.set(Kt.rx,1,Kt.rz),xt.position.set(Kt.x,.05,Kt.z),V.add(xt);let Bt=new ye({color:he.water,transparent:!0,opacity:.72}),_t=new pt(new be(1,1,.08,40),Bt);_t.scale.set(Kt.rx-.15,1,Kt.rz-.15),_t.position.set(Kt.x,.2,Kt.z),V.add(_t),[[-4.5,1],[3.5,-1.6],[5.2,1.2]].forEach(([x,b])=>{let C=new pt(new be(.55,.55,.05,12),Ut(he.lily));C.position.set(Kt.x+x,.25,Kt.z+b),V.add(C)});let Zt=F(.25,.2,.25,16758465,Kt.x-4.5,.35,Kt.z+1);V.add(Zt);for(let x=0;x<10;x++){let b=ut()*Math.PI*2,C=Kt.x+Math.cos(b)*(Kt.rx+.6),z=Kt.z+Math.sin(b)*(Kt.rz+.6);V.add(F(.08,1,.08,8173679,C,.45,z))}let lt=j_(V,ut);{let x=new Hr(1,7);x.rotateX(-Math.PI/2);let b=new Ci(x,new ye({color:16777215}),70),C=new Qt,z=[11722133,13298352,11130508,13823672],K=0;for(let $=0;$<900&&K<70;$++){let M=(ut()-.5)*tn.w,W=(ut()-.5)*tn.d;if(!os(M,W,4)||Mo(M,W,1.5)||cs(M,W)<3||as(M,W,2)||js(M,W))continue;Yt.position.set(M,rn(M,W)+.008,W),Yt.rotation.set(0,ut()*6,0);let wt=1.6+ut()*2.6;Yt.scale.set(wt,1,wt*(.6+ut()*.5)),Yt.updateMatrix(),b.setMatrixAt(K,Yt.matrix),b.setColorAt(K,C.set(z[K%z.length])),K++}b.count=K,b.receiveShadow=!0,V.add(b),Yt.scale.set(1,1,1)}let ft=new Fe(.22,.22,.22),bt=new Fe(.08,.35,.08),tt=(x,b)=>os(x,b,2.2)&&!as(x,b,1.5)&&!gd(x,b,.8)&&!Mo(x,b,.6)&&cs(x,b)>2.4&&!Md(x,b)&&!js(x,b)&&!yn.some(([C,z,K,$])=>x>=Math.min(C,K)-1.2&&x<=Math.max(C,K)+1.2&&b>=Math.min(z,$)-1.2&&b<=Math.max(z,$)+1.2)&&!ke.some(([C,z])=>Math.abs(x-C)<3.6&&Math.abs(b-z)<3.8)&&!(Math.abs(x-_n[0])<6&&Math.abs(b-_n[1])<5.4);he.flower.forEach((x,b)=>{let z=new Ci(ft,Ut(x),60),K=0;for(;K<60;){let $=(ut()-.5)*(tn.w-6),M=(ut()-.5)*(tn.d-6);tt($,M)&&(Yt.position.set($,rn($,M)+.11,M),Yt.rotation.y=ut(),Yt.updateMatrix(),z.setMatrixAt(K++,Yt.matrix))}V.add(z)});let ct=new Ci(bt,Ut(9423996),420);for(let x=0;x<420;){let b=(ut()-.5)*(tn.w-4),C=(ut()-.5)*(tn.d-4);tt(b,C)&&(Yt.position.set(b,rn(b,C)+.17,C),Yt.rotation.set(ut()*.3,ut()*3,ut()*.3),Yt.updateMatrix(),ct.setMatrixAt(x++,Yt.matrix))}V.add(ct);let P=(t.houses||[]).findIndex(x=>x.id==="love"),Mt=(x,b)=>{if(vn)return gd(x,b,1.2);if(P<0||!ke[P])return!1;let[C,z]=ke[P];return Math.abs(x-C)<7&&b>z+2.5&&b<z+12||Math.abs(b-z)<3.5&&Math.abs(x-C)<8.5||Math.abs(x-C)<3.5&&b<z&&b>z-8},ot=[],Tt=(x,b)=>{if(!tt(x,b)||Mt(x,b)||ot.some(([z,K])=>Math.hypot(z-x,K-b)<3.4))return!1;let C=_d(ut,ut()<.38);return C.position.set(x,rn(x,b),b),C.userData.post=1.2,V.add(C),ot.push([x,b]),!0};for(let x=0;x<56;x++){let b=x/56*Math.PI*2+ut()*.05,C=pi(b)-3-ut()*3;Tt(Math.cos(b)*C,Math.sin(b)*C)}for(let x=0,b=0;x<600&&b<18;x++)Tt((ut()-.5)*tn.w,(ut()-.5)*tn.d)&&b++;{let x=new Li(.7,0),b=new Ws(.55,0);[[x,Ut(9686918,{flatShading:!0}),26],[x,Ut(16235728,{flatShading:!0}),12],[b,Ut(14209256,{flatShading:!0}),18],[b,Ut(12892382,{flatShading:!0}),10]].forEach(([z,K,$])=>{let M=new Ci(z,K,$),W=0;for(let wt=0;wt<3e3&&W<$;wt++){let Nt=ut()<.6&&ot.length,re=Nt?ot[Math.floor(ut()*ot.length)]:null,Xt=re?re[0]+(ut()-.5)*5:(ut()-.5)*(tn.w-6),de=re?re[1]+(ut()-.5)*5:(ut()-.5)*(tn.d-6);if(!tt(Xt,de)||Mt(Xt,de)||ot.some(([An,lr])=>Math.hypot(An-Xt,lr-de)<1.3))continue;let Ne=.7+ut()*.8;Yt.position.set(Xt,rn(Xt,de)+.3*Ne,de),Yt.rotation.set(ut(),ut()*6,ut()),Yt.scale.set(Ne*1.2,Ne*.8,Ne),Yt.updateMatrix(),M.setMatrixAt(W++,Yt.matrix)}M.count=W,M.castShadow=!0,M.receiveShadow=!0,V.add(M)}),Yt.scale.set(1,1,1),Yt.rotation.set(0,0,0)}let Et=[0,1,2].map(x=>{let b=[];for(let K=0;K<9;K++){let $=Math.random()*6.283,M=Math.sqrt(Math.random())*.85;b.push(Kt.x+Math.cos($)*Kt.rx*M,.42,Kt.z+Math.sin($)*Kt.rz*M)}for(let K=0;K<7;K++){let $=vt.curve.getPointAt(Math.random());b.push($.x+(Math.random()-.5)*1.4,.3,$.z+(Math.random()-.5)*1.4)}let C=new Le;C.setAttribute("position",new le(b,3));let z=new Ki(C,new Pi({size:.9,map:N,color:[16777215,16774072,16766698][x],transparent:!0,opacity:0,depthWrite:!1}));return z.userData={base:.6,ph:x*2.1},V.add(z),z}),ee=[];yn.forEach(([x,b,C,z])=>[.3,.72].forEach(K=>{let $=x===C,M=dn(x,C,K)+($?1.4:0),W=dn(b,z,K)+($?0:1.4);ke.some(([wt,Nt])=>Math.abs(M-wt)<3.6&&Math.abs(W-Nt)<4.2)||Math.abs(M-_n[0])<6.2&&Math.abs(W-_n[1])<6||as(M,W,1.5)||Mt(M,W)||!os(M,W,2)||Mo(M,W,.5)||cs(M,W)<2||js(M,W)||Md(M,W)||ee.push([M,W])})),ee.slice(0,7).forEach(([x,b],C)=>{let z=G_();if(z.position.set(x,rn(x,b),b),z.userData.post=.3,V.add(z),C%2===0&&_.length<3){let K=new Zr(16763255,0,12,1.6);K.position.set(x,rn(x,b)+2.7,b),V.add(K),_.push(K)}});let At=[],R=[];(t.houses||[]).forEach((x,b)=>{if(!ke[b])return;let C=x.id==="love"?F_():x.special==="arcade"?z_():x.special==="store"?B_():xd(x,!1);C.position.set(ke[b][0],rn(ke[b][0],ke[b][1]),ke[b][1]),C.rotation.y=Ks[b]||0,C.userData.face=Ks[b]||0,C.userData.id=x.id,V.add(C),At.push(C);let z=C.userData.face;R.push({x:ke[b][0]+Math.sin(z)*C.userData.doorZ,z:ke[b][1]+Math.cos(z)*C.userData.doorZ})});let w=k_(V,vn&&Ks[vn.house]||0),X=xd(null,!0);X.position.set(_n[0],rn(_n[0],_n[1]),_n[1]),X.userData.id="hall",V.add(X),At.push(X);let nt={x:_n[0],z:_n[1]+X.userData.doorZ};R.push(nt);let st=Q_(R),rt=st.doorNodes[st.doorNodes.length-1];(function(){V.updateMatrixWorld(!0);let b=new Set,C=$=>{$&&$.traverse(M=>b.add(M))};C(_t),lt.ducks.forEach($=>C($.g)),At.forEach($=>{C($.userData.hinge),C($.userData.flag),C($.userData.bell)});let z=new Map,K=[];V.traverse($=>{if(!$.isMesh||$.isInstancedMesh||b.has($)||Array.isArray($.material)||$.material.transparent)return;let M=$.geometry.clone();Object.keys(M.attributes).forEach(W=>{W!=="position"&&W!=="normal"&&W!=="uv"&&M.deleteAttribute(W)}),M.attributes.uv&&(M.index&&(M=M.toNonIndexed()),M.clearGroups(),M.applyMatrix4($.matrixWorld),z.has($.material)||z.set($.material,[]),z.get($.material).push(M),K.push($))}),K.forEach($=>$.parent.remove($)),z.forEach(($,M)=>{let W=vo($,!1);if($.forEach(Nt=>Nt.dispose()),!W)return;let wt=new pt(W,M);wt.castShadow=!0,wt.receiveShadow=!0,V.add(wt)})})();let Ct=[],at={her:null,him:null,home:null,kiss:0},Dt=x=>st.nodes[st.doorNodes[x]],ce={},gt=x=>ce[x]||0;function Ot(x,b,C){let z=Pd(x);V.add(z.g);let K=Dt(b);return z.g.position.set(K.x+zt(-.6,.6),0,K.z+zt(0,.4)),Object.assign(z,{kind:"person",i:Ct.length,home:b,path:[],speed:zt(1.35,1.75),wait:zt(0,3),t:zt(0,6),v:0,goal:"",inside:!1},C||{}),Ct.push(z),z}(t.houses||[]).forEach((x,b)=>{b>=ke.length||(x.id==="love"?(at.home=b,at.her=Ot(ch.her,b,{love:"her"}),at.him=Ot(ch.him,b,{love:"him"})):Ot(Ro[b]||Ro[b%9]||Ro[0],b))});let Jt=Object.assign(X_(),{kind:"cat",path:[],speed:1.1,wait:2,t:0,sit:!0}),jt=Object.assign(Y_(),{kind:"dog",path:[],speed:2.2,wait:1,t:0,buddy:0});{let x=st.nodes[st.doorNodes[2]],b=st.nodes[st.doorNodes[st.doorNodes.length-1]];Jt.g.position.set(x.x+1.5,0,x.z+.6),jt.g.position.set(b.x+3,0,b.z+.8)}V.add(Jt.g,jt.g);let Ht=[0,1,2,3].map(x=>{let b=q_(x);return V.add(b),{g:b,a:zt(0,6.28),r:zt(.3,.75),sp:zt(.25,.5)*(x%2?1:-1),jump:0,jx:0,jz:0}});function ue(){let x=document.createElement("canvas");x.width=128,x.height=64;let b=x.getContext("2d");b.font="bold 34px sans-serif",b.fillStyle="#7a6a9a",b.fillText("z",18,52),b.font="bold 26px sans-serif",b.fillText("z",52,36),b.font="bold 20px sans-serif",b.fillText("z",82,22);let C=new Gs(new $i({map:new Pn(x),transparent:!0,depthWrite:!1}));return C.scale.set(1.1,.55,1),C.visible=!1,V.add(C),C}Jt.zzz=ue(),jt.zzz=ue();let ie=Id("\u2665","#ff6f91",.9,.45);V.add(ie);let pe=new D,B=0,St=[],et=new Qe(.09,6,5);function ht(x,b){for(let C=0;C<7;C++){let z=Math.random()*6.28,K=Math.random()*.8,$=x+Math.cos(z)*K,M=b+Math.sin(z)*K*.7;if(!as($,M,-.8))continue;let W=new pt(et,Ut(C%2?13208410:14723437));W.position.set($,1.6+Math.random()*.6,M),V.add(W),St.push({m:W,vy:0,life:25})}}let It=[];function Lt(x,b,C){let z=new pt(new Wr(.15,.25,18),new He({color:16777215,transparent:!0,opacity:.8,side:gn}));z.rotation.x=-Math.PI/2,z.position.set(x,.245,b),z.userData.size=C,V.add(z),It.push(z)}let $t=new pt(new Wr(.3,.45,20),new He({color:16777215,transparent:!0,opacity:0,side:gn}));$t.rotation.x=-Math.PI/2,V.add($t);let Ie=[16758465,14273008,16375946,11591910].map((x,b)=>{let C=Z_(x);return V.add(C),{g:C,ph:b*1.7,cx:zt(-25,25),cz:zt(-15,15)}}),Ve=new Le,xe=[];for(let x=0;x<40;x++)xe.push(zt(-30,30),zt(1,3),zt(-20,20));Ve.setAttribute("position",new le(xe,3));let fn=new Ki(Ve,new Pi({color:16773792,size:.35,transparent:!0,opacity:0}));V.add(fn);let en=0;function mi(){let x=new Date;return x.getHours()+x.getMinutes()/60}function Ui(x){return x>=23||x<6.5?"sleep":x<7?"morning":x<11.5?"work":x<13?"lunch":x<16.5?"work":x<21?"evening":"home"}function Dn(x){let b=x%18,C=Math.floor(b/6),z=b%6;return{x:nt.x+(z-2.5)*1.2+C%2*.6,z:nt.z+1.3+C*1.1}}function Mn(x,b,C){if(x.goal=C,x.path=me(x,b),!x.path.length){let z=st.nearest(x.g.position.x,x.g.position.z),K=st.nearest(b.x,b.z);x.path=st.path(z,K).concat([b])}}function ls(x){let b=Dt(x),C=Ks[x]||0;return{x:b.x-Math.sin(C)*.9,z:b.z-Math.cos(C)*.9,f:C}}function Wn(x){let b=ls(x.home);x.inside=!1,x.g.visible=!0,x.g.position.set(b.x+zt(-.3,.3),0,b.z),x.g.rotation.set(0,b.f,0)}function Qn(x,b){let C=ls(x.home);Mn(x,{x:C.x,z:C.z},"in"),x.stay=b}let tr=At.findIndex(x=>x.userData.alwaysLit),gi=null,Ni=null;function er(){if(!gi){gi=ke.map((x,b)=>{let C=Dt(b);return[[-1.7,-.5],[1.7,-.5],[-.9,.2],[.9,.2]].map(([z,K])=>({x:C.x+z,z:C.z+K})).filter(z=>!kt(z.x,z.z,.15))}),Ni=[];for(let x=0;x<18;x++){let b={x:Kt.x+Math.cos(x/18*6.283)*(Kt.rx+2.2),z:Kt.z+Math.sin(x/18*6.283)*(Kt.rz+1.9)};kt(b.x,b.z,.2)||Ni.push(b)}}}let sa=x=>x[Math.floor(Math.random()*x.length)];function nr(x){er();let b=gi[x.home];return b.length?sa(b):Dt(x.home)}function ir(x,b){er();let C=Math.random();if(b==="lunch"&&tr>=0&&C<.6){let z=Dt(tr);return{x:z.x+zt(-2.6,2.6),z:z.z+zt(0,.8)}}if(b==="lunch"&&C<.75)return Dn(Math.floor(zt(0,18)));if(C<.4&&Ni.length)return sa(Ni);if(C<.85){let z=Dt(Math.floor(zt(0,ke.length)));return{x:z.x+zt(-1,1),z:z.z+zt(0,.5)}}return Dn(Math.floor(zt(0,18)))}function T(x){if(x.love==="him")return;let b=Ui(mi());if(x.love==="her")return H(x,b);let C=gt(x.home)>0;if(x.helper&&gt(x.home)<x.helper){x.inside&&Wn(x),Mn(x,{x:nt.x,z:nt.z},"leave");return}if(en&&!C&&b!=="sleep"&&b!=="home"&&!x.helper){x.inside&&Wn(x),(x.goal!=="hall"||x.path.length)&&Mn(x,Dn(x.i),"hall"),x.wait=zt(3,6);return}if(C||b==="work"){if(x.inside){Wn(x),Mn(x,nr(x),"work");return}if(x.goal==="work"){Qn(x,zt(3,C?6:10));return}Mn(x,nr(x),"work");return}if(b==="sleep"||b==="home"){if(x.inside){x.wait=zt(20,40);return}Qn(x,zt(20,40));return}if(x.inside)Wn(x);else if(Math.random()<.15){Qn(x,zt(5,12));return}Mn(x,ir(x,b),"stroll"),x.wait=zt(2,6)}function H(x,b){let C=at.him;if(b==="sleep"||b==="home"||mi()>=20.5){if(Z(),x.inside){x.wait=zt(30,60);return}Qn(x,zt(30,60));return}if(x.inside&&(Wn(x),Wn(C),C.g.position.x+=.7),x.sitting){Z(),Mn(x,ir(x,b),"stroll"),x.wait=zt(2,5);return}if(Gt&&Math.random()<.55){Mn(x,Gt.userData.front,"swing");return}Mn(x,ir(x,b),"stroll"),x.wait=zt(2,5)}function Z(){[at.her,at.him].forEach(x=>{!x||!x.sitting||(x.sitting=!1,x.g.position.set(Gt.userData.front.x+(x.love==="her"?-.4:.4),0,Gt.userData.front.z),x.g.rotation.set(0,Gt.rotation.y,0))})}function J(x){x.goal==="in"?(x.inside=!0,x.g.visible=!1,x.wait=x.stay||10):x.goal==="work"?x.wait=zt(6,12):x.goal==="swing"?(x.sitting=!0,x.wait=zt(15,30)):x.goal==="leave"&&(V.remove(x.g),Ct.splice(Ct.indexOf(x),1))}function k(x,b){let C=at.her;if(C.inside){if(x.inside)return!1;let Ne=ls(x.home),An=Ne.x-x.g.position.x,lr=Ne.z-x.g.position.z,aa=Math.hypot(An,lr);if(aa<.15)return x.inside=!0,x.g.visible=!1,!1;let Eh=Math.min(aa,C.speed*1.2*b);return x.g.position.x+=An/aa*Eh,x.g.position.z+=lr/aa*Eh,x.g.rotation.y=Math.atan2(An,lr),x.v=C.speed,!0}if(x.inside&&(Wn(x),x.g.position.x+=.7),C.sitting)return x.sitting=!0,!1;x.sitting=!1;let z=C.g.rotation.y,K=C.g.position.x-Math.cos(z)*.72,$=C.g.position.z+Math.sin(z)*.72,M=K-x.g.position.x,W=$-x.g.position.z,wt=Math.hypot(M,W);if(wt<.05){x.v=0;let Ne=z-x.g.rotation.y;return Ne=Math.atan2(Math.sin(Ne),Math.cos(Ne)),x.g.rotation.y+=Ne*Math.min(1,b*6),!1}let Nt=Math.min(C.speed*1.35,wt*4);x.v=(x.v||0)+(Nt-(x.v||0))*Math.min(1,b*5);let re=Math.min(wt,x.v*b);x.g.position.x+=M/wt*re,x.g.position.z+=W/wt*re;let de=(wt>.35?Math.atan2(M,W):z)-x.g.rotation.y;return de=Math.atan2(Math.sin(de),Math.cos(de)),x.g.rotation.y+=de*Math.min(1,b*7),x.v>.15}{let x=Ui(mi());(x==="sleep"||x==="home")&&Ct.forEach(b=>{b.inside=!0,b.g.visible=!1,b.wait=zt(5,30)})}let yt=At.filter(x=>x.userData.id!=="hall").map(x=>{let b=x.userData.size,C=x.userData.face||0,z=Math.abs(Math.sin(C))>.5;if(!b)return{x:x.position.x,z:x.position.z,hw:3.3,hd:2.6};let K=Math.cos(C)*b.cx,$=-Math.sin(C)*b.cx;return{x:x.position.x+K,z:x.position.z+$,hw:z?b.hd:b.hw,hd:z?b.hw:b.hd}}).concat([{x:_n[0],z:_n[1],hw:5.8,hd:4.1}]),Rt=[];V.children.forEach(x=>{x.userData.post&&Rt.push({x:x.position.x,z:x.position.z,r:x.userData.post})}),lt.posts.forEach(x=>Rt.push(x));function kt(x,b,C){return C=C||.5,!os(x,b,2.5)||Mo(x,b,0)||cs(x,b)<1.8&&!vt.bridges.some(z=>Math.hypot(z.x-x,z.z-b)<2.4)||as(x,b,.9+C)||yt.some(z=>Math.abs(x-z.x)<z.hw+C&&Math.abs(b-z.z)<z.hd+C)?!0:Rt.some(z=>Math.hypot(x-z.x,b-z.z)<z.r+C*.6)}function Vt(x,b){let C=Math.ceil(Math.hypot(b.x-x.x,b.z-x.z)/.4);for(let z=1;z<=C;z++){let K=z/C;if(kt(dn(x.x,b.x,K),dn(x.z,b.z,K),.45))return!1}return!0}let se=(x,b,C)=>yn.some(([z,K,$,M])=>x>=Math.min(z,$)-.9-C&&x<=Math.max(z,$)+.9+C&&b>=Math.min(K,M)-.9-C&&b<=Math.max(K,M)+.9+C),Gt=null;if(w.blocks.forEach(x=>yt.push(x)),w.posts.forEach(x=>Rt.push(x)),at.home!=null&&vn&&vn.house===at.home){let[x,b]=vn.swing,C=Ks[at.home]||0;Gt=vd(),Gt.position.set(x,0,b),Gt.rotation.y=C,V.add(Gt),Gt.userData.front={x:x+Math.sin(C)*1.25,z:b+Math.cos(C)*1.25},yt.push({x,z:b,hw:1.55,hd:1.55})}else if(at.home!=null){let[x,b]=ke[at.home],C=[[0,7.2],[0,6.4],[-2.2,7.2],[2.2,7.2],[0,8.4],[4.6,.8],[-4.6,.8],[0,-5.2]],z=(K,$)=>!os(K,$,2.5)||as(K,$,1)||yt.some(M=>Math.abs(K-M.x)<M.hw+.1&&Math.abs($-M.z)<M.hd+.1)||se(K,$,0);for(let[K,$]of C){let M=x+K,W=b+$;if([[-1.6,-.9],[1.6,-.9],[-1.6,.9],[1.6,.9],[0,0],[0,1.6],[-.5,1.6],[.5,1.6]].every(([Nt,re])=>!z(M+Nt,W+re))){V.children.slice().forEach(Nt=>{if(Nt.userData.post&&Math.abs(Nt.position.x-M)<2.6&&Math.abs(Nt.position.z-W)<2.2){V.remove(Nt);let re=Rt.findIndex(Xt=>Xt.x===Nt.position.x&&Xt.z===Nt.position.z);re>=0&&Rt.splice(re,1)}}),Gt=vd(),Gt.position.set(M,0,W),V.add(Gt),Gt.userData.front={x:M,z:W+1.25},yt.push({x:M,z:W,hw:1.55,hd:.75});break}}}let Wt=[],fe=new Qe(.28,8,6);function we(x){let b=new pt(fe,new ye({color:16777215,transparent:!0,opacity:.75,depthWrite:!1})),C=x.userData.chimney;b.position.set(x.position.x+C.x+zt(-.1,.1),C.y,x.position.z+C.z+zt(-.1,.1)),V.add(b),Wt.push({m:b,life:0})}let Te=[3,6,10];function nn(){ke.forEach((x,b)=>{if(b===at.home)return;let C=Te.filter(K=>gt(b)>=K).length,z=Ct.filter(K=>K.helper&&K.home===b&&K.goal!=="leave");for(let K=z.length;K<C;K++){let $=Ot(yd[K%yd.length],b,{helper:Te[K]});$.g.position.set(nt.x+zt(-1,1),0,nt.z+zt(0,.6)),Mn($,nr($),"work")}})}function me(x,b){let C={x:x.g.position.x,z:x.g.position.z};if(Vt(C,b))return[b];let z=st.nearest(C.x,C.z),K=st.nearest(b.x,b.z),$=st.path(z,K);if(!Vt(C,$[0]))return[];let M=$[$.length-1];return Vt(M,b)&&$.push(b),$}function qt(x){if(x.kind==="dog"&&Math.random()<.65){let C=Ct[x.buddy%Ct.length];for(let $=0;$<Ct.length&&(!C.g.visible||C.sitting);$++)C=Ct[++x.buddy%Ct.length];let z=C.g.position,K={x:z.x+zt(-1.5,1.5),z:z.z+zt(.8,1.6)};if(Math.random()<.15&&x.buddy++,!kt(K.x,K.z)&&(x.path=me(x,K),x.path.length))return}for(let C=0;C<30;C++){let z={x:x.g.position.x+zt(-9,9),z:x.g.position.z+zt(-7,7)};if(!kt(z.x,z.z,.8)&&Vt(x.g.position,z)){x.path=[z];return}}let b=st.nodes[st.nearest(x.g.position.x,x.g.position.z)];x.path=[{x:b.x,z:b.z}]}function wn(x,b){let C=x.g.position;if(x.sleep>0)return x.v=0,!1;if(!x.path.length){if(x.v=0,x.wait-=b,x.wait<=0){if(x.kind==="person")return x.wait=zt(1.5,4),T(x),!1;qt(x),x.wait=zt(2,6),x.kind==="cat"&&(x.sit=Math.random()<.45,x.sit&&(x.path=[]))}return!1}let z=x.path[0],K=z.x-C.x,$=z.z-C.z,M=Math.hypot(K,$);if(M<.08)return x.path.shift(),!x.path.length&&x.kind==="person"&&J(x),!0;let wt=Math.atan2(K,$)-x.g.rotation.y;wt=Math.atan2(Math.sin(wt),Math.cos(wt)),x.g.rotation.y+=wt*Math.min(1,b*7);let Nt=M+(x.path.length>1?99:0),re=Math.abs(wt)>1.1?x.speed*.15:x.speed*Math.min(1,Nt/1.2+.25);x.v=(x.v||0)+(re-(x.v||0))*Math.min(1,b*4);let Xt=Math.min(M,x.v*b);return C.x+=Math.sin(x.g.rotation.y)*Xt*.35+K/M*Xt*.65,C.z+=Math.cos(x.g.rotation.y)*Xt*.35+$/M*Xt*.65,!0}function _e(x,b){if(Ct.slice().forEach(M=>{let W=M.love==="him"?k(M,x):wn(M,x);if(M.inside||!M.g.visible)return;if(M.sitting&&Gt){let Xt=M.love==="her"?-.4:.4;pe.set(Xt,.06,0),Gt.userData.seat.localToWorld(pe),V.worldToLocal(pe),M.g.position.set(pe.x,pe.y-lh,pe.z),M.g.rotation.set(Gt.userData.pivot.rotation.x*.9,Gt.rotation.y,0),M.parts.legL.rotation.x=M.parts.legR.rotation.x=-1.45+Math.sin(b*1.7)*.25,M.parts.armL.rotation.x=M.parts.armR.rotation.x=-.5,M.parts.head.rotation.set(0,0,0);return}let wt=Math.min(1,(M.v||0)/M.speed);M.t+=x*(W?3+7*wt:2);let Nt=W?Math.sin(M.t)*.75*wt:0;M.parts.legL.rotation.x=Nt,M.parts.legR.rotation.x=-Nt,M.parts.armL.rotation.x=-Nt*.8,M.parts.armR.rotation.x=Nt*.8,M.g.rotation.x=0,M.parts.head.rotation.x=0,M.parts.head.rotation.z=0;let re=rn(M.g.position.x,M.g.position.z);if(M.g.position.y=re+(W?Math.abs(Math.sin(M.t))*.06:0),!W&&!M.path.length){if(M.goal==="hall"){let Xt=Math.PI-M.g.rotation.y;Xt=Math.atan2(Math.sin(Xt),Math.cos(Xt)),M.g.rotation.y+=Xt*Math.min(1,x*6),M.g.position.y=re+Math.max(0,Math.sin(b*4+M.i))*.1,M.parts.armR.rotation.x=-2.6+Math.sin(b*6+M.i)*.3}else if(M.goal==="work"){let Xt=Math.PI-M.g.rotation.y;Xt=Math.atan2(Math.sin(Xt),Math.cos(Xt)),M.g.rotation.y+=Xt*Math.min(1,x*6),M.parts.armR.rotation.x=-1.3+Math.sin(b*9+M.i)*.55,M.parts.armL.rotation.x=-.9+Math.sin(b*9+M.i+1.6)*.35,M.parts.head.rotation.x=.25}M.parts.head.rotation.y=M.goal==="work"?0:Math.sin(b*.7+M.i)*.4}else M.parts.head.rotation.y=0}),at.kiss>0&&at.him&&at.him.g.visible){at.kiss-=x;let M=at.her,W=at.him,wt=Math.min(1,Math.sin(Math.min(1,(2.4-at.kiss)/2.4)*Math.PI)*1.6),Nt=M.g.position.x-W.g.position.x,re=M.g.position.z-W.g.position.z;if(W.sitting)W.parts.head.rotation.y=.9*wt,W.parts.head.rotation.z=.25*wt,M.parts.head.rotation.z=-.15*wt;else{let Xt=Math.atan2(Nt,re)-W.g.rotation.y;Xt=Math.atan2(Math.sin(Xt),Math.cos(Xt)),W.g.rotation.y+=Xt*Math.min(1,x*8);let de=Math.atan2(-Nt,-re)-M.g.rotation.y;de=Math.atan2(Math.sin(de),Math.cos(de)),M.g.rotation.y+=de*Math.min(1,x*3)*.5,W.g.rotation.x=.2*wt}ie.visible=!0,ie.position.set((M.g.position.x+W.g.position.x)/2,2+(2.4-at.kiss)*.35,(M.g.position.z+W.g.position.z)/2),ie.material.opacity=Math.min(1,at.kiss*1.5),at.kiss<=0&&(ie.visible=!1,W.g.rotation.x=0)}if(Gt){let M=Gt.userData.pivot,W=at.her&&at.her.sitting;M.rotation.x=W?Math.sin(b*1.7)*(at.kiss>0?.12:.32):M.rotation.x*Math.max(0,1-x*1.5)}let C=Ui(mi());At.forEach((M,W)=>{if(!M.userData.wm)return;let wt=0;if(W===at.home?wt=0:(gt(W)>0||M.userData.alwaysLit||C!=="sleep"&&Ct.some(Nt=>Nt.home===W&&Nt.inside))&&(wt=1),M.userData.lit=dn(M.userData.lit||0,wt,Math.min(1,x*2)),M.userData.wm.emissiveIntensity=on*M.userData.lit*.95,M.userData.heart){let Nt=at.her&&at.her.inside&&at.him.inside;M.userData.heart.material.emissiveIntensity=Nt?.5+Math.max(0,Math.sin(b*5))*1.3:.2}gt(W)>0&&M.userData.chimney&&Math.random()<x*2.2&&we(M)});for(let M=Wt.length-1;M>=0;M--){let W=Wt[M];W.life+=x,W.m.position.y+=x*.9,W.m.position.x+=x*.25,W.m.scale.setScalar(1+W.life*.9),W.m.material.opacity=Math.max(0,.75-W.life*.3),W.life>2.5&&(V.remove(W.m),W.m.material.dispose(),Wt.splice(M,1))}B+=x,B>2&&(B=0,nn()),[Jt,jt].forEach(M=>{if(M.sleep>0){M.sleep-=x;let re=Math.min(1,M.sleepIn+=x*3);M.parts.legs.forEach((Xt,de)=>{Xt.rotation.x=(de<2?-1.45:1.45)*re}),M.g.position.y=rn(M.g.position.x,M.g.position.z)-.22*re*M.g.scale.y,M.parts.head.rotation.x=.35*re,M.parts.head.rotation.y=0,M.parts.eyes.forEach(Xt=>{Xt.scale.y=1-.8*re}),M.parts.tail.rotation.z=Math.sin(b*.8)*.15,M.zzz.visible=!0,M.zzz.position.set(M.g.position.x,.95+b*.6%1*.45,M.g.position.z),M.zzz.material.opacity=.9-b*.6%1*.6,M.sleep<=0&&(M.zzz.visible=!1,M.parts.eyes.forEach(Xt=>{Xt.scale.y=1}),M.parts.head.rotation.x=0,M.wait=zt(.3,1));return}let W=wn(M,x),wt=Math.min(1,(M.v||0)/M.speed);M.t+=x*(W?4+8*wt:2);let Nt=W?Math.sin(M.t)*.6*wt:0;M.parts.legs.forEach((re,Xt)=>{re.rotation.x=Xt===0||Xt===3?Nt:-Nt}),M.kind==="cat"?(M.parts.tail.rotation.z=Math.sin(b*2)*.35,M.parts.tail.rotation.x=M.sit&&!W?.9:.5,M.g.children[0].rotation.x=0,M.parts.head.rotation.y=W?0:Math.sin(b*.5)*.5,M.g.position.y=rn(M.g.position.x,M.g.position.z)):(M.parts.tail.rotation.z=Math.sin(b*(W?18:10))*.6,M.parts.head.rotation.x=W?0:Math.sin(b*1.3)*.1,M.g.position.y=rn(M.g.position.x,M.g.position.z)+(W?Math.abs(Math.sin(M.t))*.07:0))});for(let M=St.length-1;M>=0;M--){let W=St[M];W.m.position.y>.24?(W.vy-=x*9,W.m.position.y=Math.max(.24,W.m.position.y+W.vy*x),W.m.position.y===.24&&Lt(W.m.position.x,W.m.position.z,.5)):W.m.position.y=.24+Math.sin(b*3+M)*.015,W.life-=x,W.life<=0&&(V.remove(W.m),St.splice(M,1))}Ht.forEach(M=>{M.a+=M.sp*x;let W=Kt.x+Math.cos(M.a)*(Kt.rx-1.6)*M.r,wt=Kt.z+Math.sin(M.a)*(Kt.rz-1)*M.r,Nt=null,re=1e9;if(St.forEach(Xt=>{if(Xt.m.position.y<=.3){let de=Math.hypot(Xt.m.position.x-M.g.position.x,Xt.m.position.z-M.g.position.z);de<re&&(re=de,Nt=Xt)}}),Nt&&!M.jump){let Xt=Nt.m.position.x-M.g.position.x,de=Nt.m.position.z-M.g.position.z,Ne=Math.hypot(Xt,de),An=Math.min(Ne,2.6*x);M.g.position.x+=Xt/(Ne||1)*An,M.g.position.z+=de/(Ne||1)*An,M.g.position.y=.16,M.g.rotation.y=Math.atan2(Xt,de),Ne<.25&&(V.remove(Nt.m),St.splice(St.indexOf(Nt),1),Lt(Nt.m.position.x,Nt.m.position.z,.6)),M.a=Math.atan2((M.g.position.z-Kt.z)/(Kt.rz-1),(M.g.position.x-Kt.x)/(Kt.rx-1.6)),M.r=Math.min(.85,Math.max(.2,Math.hypot((M.g.position.x-Kt.x)/(Kt.rx-1.6),(M.g.position.z-Kt.z)/(Kt.rz-1)))),M.g.userData.tail.rotation.y=Math.sin(b*16+M.a)*.6;return}if(M.jump>0){M.jump+=x*.9;let Xt=Math.sin(M.jump*Math.PI)*1.8;M.g.position.set(dn(M.jx,W,M.jump),.12+Xt,dn(M.jz,wt,M.jump)),M.g.rotation.x=-Math.cos(M.jump*Math.PI)*1.1,M.jump>=1&&(M.jump=0,M.g.rotation.x=0,$t.position.set(W,.24,wt),$t.material.opacity=.8,$t.scale.setScalar(1))}else{let Xt=W-M.g.position.x,de=wt-M.g.position.z;M.g.position.set(dn(M.g.position.x,W,Math.min(1,x*6)),.12,dn(M.g.position.z,wt,Math.min(1,x*6))),(Xt||de)&&(M.g.rotation.y=Math.atan2(Xt,de)),Math.random()<x*.05&&(M.jump=.001,M.jx=W,M.jz=wt,$t.position.set(W,.24,wt),$t.material.opacity=.8,$t.scale.setScalar(1))}M.g.userData.tail.rotation.y=Math.sin(b*8+M.a)*.5}),vt.glints.forEach(M=>{M.t=(M.t+M.sp*x*6)%1;let W=vt.curve.getPointAt(M.t),wt=vt.curve.getTangentAt(M.t);M.m.position.set(W.x-wt.z*M.side,.06,W.z+wt.x*M.side),M.m.rotation.z=-Math.atan2(wt.z,wt.x),M.m.material.opacity=.35+Math.abs(Math.sin(b*3+M.side*9))*.5}),vt.ftex.offset.y=(vt.ftex.offset.y+x*1.6)%1,vt.foam.forEach((M,W)=>{let wt=.8+Math.abs(Math.sin(b*5+W))*.5;M.scale.setScalar(wt)}),lt.ducks.forEach(M=>{M.a+=M.sp*x;let W=Kt.x+Math.cos(M.a)*(Kt.rx-2),wt=Kt.z+Math.sin(M.a)*(Kt.rz-1.2);M.g.rotation.y=Math.atan2(W-M.g.position.x,wt-M.g.position.z)||M.g.rotation.y,M.g.position.set(W,.18+Math.sin(b*2+M.a)*.03,wt)});for(let M=It.length-1;M>=0;M--){let W=It[M];W.material.opacity-=x*1.2,W.scale.multiplyScalar(1+x*2.5*W.userData.size),W.material.opacity<=0&&(V.remove(W),W.geometry.dispose(),It.splice(M,1))}$t.material.opacity>0&&($t.material.opacity=Math.max(0,$t.material.opacity-x*.8),$t.scale.multiplyScalar(1+x*1.8)),Ie.forEach(M=>{M.ph+=x,M.g.position.set(M.cx+Math.sin(M.ph*.4)*6,1.6+Math.sin(M.ph*1.3)*.5,M.cz+Math.cos(M.ph*.33)*4),M.g.rotation.y=M.ph*.4+Math.PI/2;let W=Math.sin(M.ph*18)*1.1;M.g.userData.l.rotation.y=W,M.g.userData.r.rotation.y=-W});let z=fn.geometry.attributes.position;for(let M=0;M<z.count;M++)z.setY(M,1.5+Math.sin(b*.8+M)*.8),z.setX(M,z.getX(M)+Math.sin(b*.5+M*3)*x*.4);if(z.needsUpdate=!0,L.forEach(M=>{M.position.x+=M.userData.speed*x,M.position.x>90&&(M.position.x=-90)}),U.rotation.y+=x*.012,A.forEach(M=>{M.position.y=M.userData.y0+Math.sin(b*.6+M.userData.ph)*.45,M.rotation.y+=x*.03}),Et.forEach(M=>{M.material.opacity=M.userData.base*Math.max(0,Math.sin(b*1.8+M.userData.ph))}),q.forEach(M=>{M.material.opacity=M.userData.base*(.55+.45*Math.sin(b*1.3+M.userData.ph))}),on>.6)if(Y.t<0){if(Y.wait-=x,Y.wait<=0){let M=zt(0,Math.PI*2);Y.from.set(Math.cos(M)*180,zt(110,170),Math.sin(M)*180-40),Y.dir.set(zt(-1,1),zt(-.55,-.35),zt(-.3,.3)).normalize(),Y.t=0}}else{Y.t+=x/1.1,G.position.copy(Y.from).addScaledVector(Y.dir,Y.t*120);let M=G.position.clone().project(a),W=G.position.clone().addScaledVector(Y.dir,10).project(a);G.material.rotation=Math.atan2(W.y-M.y,W.x-M.x),G.material.opacity=Math.sin(Math.min(1,Y.t)*Math.PI)*.95,Y.t>=1&&(Y.t=-1,Y.wait=zt(7,16),G.material.opacity=0)}else G.material.opacity=0;let K=X.userData.flag;K.rotation.y=Math.sin(b*3)*.25;let $=X.userData.bell;$.material.emissiveIntensity=en?.6+Math.sin(b*6)*.4:0,$.rotation.z=en?Math.sin(b*7)*.35:0}let on=0;function Tn(){let x=new Date,b=n!=null?n:x.getHours()+x.getMinutes()/60,C=Ld(b);on=C.night,r.background=C.sky,r.fog.color.copy(C.sky),m.uniforms.bottom.value.copy(C.sky).lerp(new Qt(16777215),.18*(1-C.night)).lerp(new Qt(10324950),.4*C.night),m.uniforms.top.value.copy(C.sky).lerp(new Qt(C.night>.5?1316682:7320547),.5),f.intensity=C.amb,f.color.set(C.night>.5?10135776:16777215),f.groundColor.set(C.night>.5?3820122:12048288),g.color.copy(C.sun),g.intensity=C.power;let z=(b-6)/12*Math.PI,$=b>=5.5&&b<=18.6?z:((b+12)%24-6)/12*Math.PI,M=Math.cos($)*70,W=Math.max(Math.sin($),.25)*70;g.position.set(M,W,40),g.target.position.set(0,0,0),E.position.set(Math.cos(z)*200,Math.sin(z)*160,-120),E.visible=Math.sin(z)>-.05;let wt=((b+12)%24-6)/12*Math.PI;y.position.set(Math.cos(wt)*200,Math.sin(wt)*160,-120),y.visible=C.night>.3&&Math.sin(wt)>0,I.material.opacity=C.night,q.forEach(Nt=>{Nt.userData.base=C.night}),U.mat.color.set(C.night>.5?10131656:16777215),Et.forEach(Nt=>{Nt.userData.base=.55+C.night*.45}),fn.material.opacity=C.night*.95,Co.forEach(Nt=>{Nt.emissiveIntensity=C.night*.95}),_.forEach(Nt=>{Nt.intensity=C.night*18}),L.forEach(Nt=>{Nt.userData.mat.color.set(C.night>.5?8029096:16777215)}),Ie.forEach(Nt=>{Nt.g.visible=C.night<.5})}let Ze=1,Xn=1;function ve(){Ze=i.clientWidth||window.innerWidth,Xn=i.clientHeight||window.innerHeight,s.setSize(Ze,Xn,!1),a.aspect=Ze/Xn,a.updateProjectionMatrix()}let ze=new Ke;function Oi(x,b){ze.fov=a.fov,ze.aspect=a.aspect,ze.near=.5,ze.far=1e3,ze.updateProjectionMatrix();let C=[];for(let M=0;M<48;M++){let W=M/48*Math.PI*2,wt=pi(W);C.push(new D(Math.cos(W)*wt,0,Math.sin(W)*wt))}C.push(new D(_n[0],9+Qs.h,_n[1])),hh.forEach(([M,W,wt,Nt])=>C.push(new D(M,Nt,W))),ke.forEach(([M,W])=>C.push(new D(M,6.5,W)));let z=M=>{ze.position.set(0,Math.cos(x)*M,Math.sin(x)*M).add(b),ze.lookAt(b),ze.updateMatrixWorld();let W=new D;return C.every(wt=>(W.copy(wt).project(ze),Math.abs(W.x)<.97&&W.y>-.97&&W.y<.86))},K=10,$=600;for(let M=0;M<30;M++){let W=(K+$)/2;z(W)?$=W:K=W}return $}function cn(){ve();let x=e==="port"?.6:.88,b=new D(0,0,1.5),C=Oi(x,b);return{p:new D(0,Math.cos(x)*C,Math.sin(x)*C).add(b),t:b}}function Ln(){let x=cn();o.target.copy(x.t),a.position.copy(x.p),o.update()}let Yn=1800,ra=1900,De=null,sr=!1,rr=null,Uo=x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2;function fh(x){let b=x.userData.face||0,C=Math.sin(b),z=Math.cos(b),K=x.userData.doorZ-1.3,$=x.position.y,M=(W,wt)=>new D(x.position.x+C*(K+W),$+wt,x.position.z+z*(K+W));return{near:M(3.2,1.75),nearT:M(-1,1.45),inside:M(.35,1.6),insideT:M(-2,1.4)}}function ph(x,b,C,z){if(!C)return x.clone().lerp(b,z);let K=x.clone().lerp(b,z),$=b.clone().lerp(C,z);return K.lerp($,z)}function Ud(x,b,C){let z=At.find($=>$.userData.id===x);if(!z){b&&b();return}let K=fh(z);rr={p:a.position.clone(),t:o.target.clone()},De={mode:"in",start:performance.now(),dur:Yn,h:z,done:b,at:C&&C.at,atFired:!1,p:[rr.p,K.near,K.inside],t:[rr.t,K.nearT,K.insideT]},o.enabled=!1,sr=!0}function Nd(x,b){let C=At.find($=>$.userData.id===x);if(!C){mh(),b&&b();return}let z=fh(C),K=rr||cn();C.userData.hinge&&(C.userData.hinge.rotation.y=-1.7),a.position.copy(z.inside),o.target.copy(z.insideT),a.lookAt(o.target),De={mode:"out",start:performance.now(),dur:ra,h:C,done:b,p:[z.inside,z.near,K.p],t:[z.insideT,z.nearT,K.t]},o.enabled=!1,sr=!0}function Od(){if(!De)return;let x=Math.min(1,(performance.now()-De.start)/De.dur),b=Uo(x);a.position.copy(ph(De.p[0],De.p[1],De.p[2],b)),o.target.copy(ph(De.t[0],De.t[1],De.t[2],b)),a.lookAt(o.target);let C=De.h.userData.hinge;if(C&&(De.mode==="in"?C.rotation.y=-1.7*Uo(Math.min(1,Math.max(0,(x-.25)/.45))):C.rotation.y=-1.7*(1-Uo(Math.min(1,Math.max(0,(x-.2)/.5))))),De.at&&!De.atFired&&x>=De.at.k&&(De.atFired=!0,De.at.fn()),x>=1){let z=De.done,K=De.mode;De=null,K==="out"&&(sr=!1,o.enabled=!0,o.update()),z&&z()}}function mh(){if(!sr||De&&De.mode==="out")return;sr=!1,De=null,o.enabled=!0,At.forEach(b=>{b.userData.hinge&&(b.userData.hinge.rotation.y=0)});let x=rr||cn();a.position.copy(x.p),o.target.copy(x.t),o.update()}let ar=new Kr,gh=new dt,hs=null;s.domElement.addEventListener("pointerdown",x=>{hs={x:x.clientX,y:x.clientY}}),s.domElement.addEventListener("pointerup",x=>{if(!hs||Math.hypot(x.clientX-hs.x,x.clientY-hs.y)>6){hs=null;return}hs=null;let b=s.domElement.getBoundingClientRect();if(gh.set((x.clientX-b.left)/b.width*2-1,-((x.clientY-b.top)/b.height)*2+1),ar.setFromCamera(gh,a),at.her&&at.her.g.visible&&at.him.g.visible&&ar.intersectObjects([at.her.g,at.him.g],!0)[0]){at.kiss>0||(at.kiss=2.4,at.her.sitting||(at.her.path=[],at.her.wait=Math.max(at.her.wait,2.8)));return}let C=ar.intersectObjects([Jt.g,jt.g],!0)[0];if(C){let M=Jt.g.getObjectById(C.object.id)?Jt:jt;M.sleep>0||(M.sleep=3,M.sleepIn=0,M.path=[]);return}let z=ar.intersectObject(_t)[0];if(z){ht(z.point.x-V.position.x,z.point.z-V.position.z);return}let K=ar.intersectObjects(At,!0)[0];if(!K)return;let $=K.object;for(;$&&!$.userData.id;)$=$.parent;$&&t.onPick($.userData.id)});let or=new D;function Fd(x){let b=At.find(C=>C.userData.id===x);return b?(or.set(b.position.x,b.position.y+b.userData.top,b.position.z),or.project(a),{x:(or.x+1)/2*Ze,y:(1-or.y)/2*Xn,visible:or.z<1}):null}let No=new $r,cr=!1,us=!0,xh=0,_h=[];function yh(){if(!cr)return;if(!us||document.hidden){cr=!1;return}requestAnimationFrame(yh);let x=Math.min(.12,No.getDelta()),b=No.elapsedTime;b-xh>20&&(Tn(),xh=b),_e(x,b),De?Od():o.update(),s.render(r,a),_h.forEach(C=>C())}function Oo(){cr||(cr=!0,No.getDelta(),requestAnimationFrame(yh))}let vh=()=>{!document.hidden&&us&&(Tn(),Oo())},Mh=()=>{us&&ve()};return document.addEventListener("visibilitychange",vh),window.addEventListener("resize",Mh),Tn(),Ln(),Oo(),/[?&]debug3d/.test(location.search)&&(window.__v3d={renderer:s,people:Ct,couple:at,get swing(){return Gt},graph:st,cat:Jt,dog:jt,routine:Ui,realHour:mi,camera:a,controls:o,water:_t,food:St,get urgent(){return en}}),{setUrgent(x){let b=en;en=x||0,!!b!=!!en&&Ct.forEach(C=>{!C.love&&!C.helper&&(C.path=[],C.wait=zt(0,1.5))})},setBusy(x){let b={};(t.houses||[]).forEach((C,z)=>{x&&x[C.id]>0&&(b[z]=x[C.id])}),ce=b,nn()},anchor:Fd,onFrame(x){_h.push(x)},night(){return on},setTimeMode(x){n=x==="day"?11:x==="night"?22:null,Tn()},show(x){us=!!x,us&&(mh(),ve(),Tn(),Oo())},enterHouse:Ud,exitHouse:Nd,resize:ve,recenter:Ln,layout:e,destroy(){cr=!1,us=!1,document.removeEventListener("visibilitychange",vh),window.removeEventListener("resize",Mh),o.dispose(),r.traverse(x=>{x.geometry&&x.geometry.dispose()}),s.dispose(),s.domElement.remove()}}}var jn=9,is=7,Gn=4.4,Ed=7;function wo(i,t){return new Qt(i).lerp(new Qt(16777215),t).getHex()}function ta(i,t,e,n,s){let r=new te;return r.position.set(t,0,e),r.rotation.y=n||0,i.add(r),r.add(F(2.2,.08,1,s||14267535,0,.78,0)),[[-1,-.42],[1,-.42],[-1,.42],[1,.42]].forEach(([a,o])=>r.add(F(.08,.78,.08,11569768,a,.39,o))),r}function ss(i,t,e,n){let s=new te;return s.position.set(t,0,e),s.rotation.y=n||0,i.add(s),s.add(F(.55,.08,.55,16165309,0,.5,0)),s.add(F(.55,.6,.08,16165309,0,.82,-.26)),[[-.22,-.22],[.22,-.22],[-.22,.22],[.22,.22]].forEach(([r,a])=>s.add(F(.06,.5,.06,9206379,r,.25,a))),s}function rh(i,t,e){i.add(F(.7,.04,.48,14211296,t,.84,e));let n=F(.7,.46,.04,14211296,t,1.07,e-.24);n.rotation.x=-.25,i.add(n);let s=F(.62,.38,.02,0,t,1.07,e-.215,new He({color:12576498}));s.rotation.x=-.25,i.add(s)}function ea(i,t,e,n,s){let r=new te;r.position.set(t,0,e),r.rotation.y=n||0,i.add(r),r.add(F(1.8,2.4,.4,12883572,0,1.2,0));for(let a=0;a<4;a++){r.add(F(1.7,.06,.36,14862765,0,.3+a*.55,.03));for(let o=0;o<(s||6);o++){let c=he.flower[(o+a)%he.flower.length],l=.3+(o*7+a*3)%4*.04;r.add(F(.16,l,.28,c===16777215?10934504:c,-.7+o*.24,.33+a*.55+l/2,.05))}}return r}function rs(i,t,e){i.add(F(.45,.45,.45,16368540,t,.22,e)),[[0,.75,0,.42],[.18,1.05,.1,.3],[-.15,1,-.1,.32]].forEach(([n,s,r,a],o)=>{let c=new pt(new Li(a,0),Ut(he.leaf[o],{flatShading:!0}));c.position.set(t+n,s,e+r),c.castShadow=!0,i.add(c)})}function ia(i,t,e,n,s,r,a,o,c){let l=new te;return l.position.set(t,e,n),l.rotation.y=s,i.add(l),l.add(F(r+.12,a+.12,.05,12883572,0,0,0)),l.add(F(r,a,.06,o,0,0,.01)),(c||[]).forEach(([h,u,d,f])=>l.add(F(f||.32,f||.32,.03,d,h,u,.06))),l}function ah(i,t,e,n,s){let r=[[-.45,.25],[-.15,.45],[.15,.35],[.45,.6]],a=ia(i,t,e,n,s,1.4,1.1,16775920);return r.forEach(([o,c],l)=>a.add(F(.2,c,.03,[16758465,10934504,14542964,14273008][l],o,-.4+c/2,.06))),a}function bd(i,t,e,n,s,r){let a=r?2.2:1.1,o=r?1.6:.9,c=ia(i,t,e,n,s,a,o,16777215);c.add(F(a,o*.18,.04,16751536,0,o*.41,.05));for(let l=0;l<4;l++)for(let h=0;h<7;h++){let u=(l*7+h)%9===3;c.add(F(a/9,o/7,.02,u?16766687:15985894,-a/2+(h+1)*a/8,o*.2-l*o/5.5,.06))}return c}function ey(i,t,e,n,s){let r=new te;r.position.set(t,e,n),r.rotation.y=s,i.add(r);let a=new pt(new be(.35,.35,.06,20),Ut(16775920));a.rotation.x=Math.PI/2,r.add(a);let o=new pt(new Xs(.36,.04,6,20),Ut(16165309));r.add(o);let c=F(.04,.18,.02,4865855,0,.08,.05),l=F(.03,.27,.02,4865855,0,.12,.06);return r.add(c,l),r.userData.hands=[c,l],r}function ny(i,t,e){let n=new pt(new Qe(.28,12,10),Ut(16758465));n.scale.set(1.3,1,1),n.position.set(t,1.1,e),i.add(n),i.add(F(.12,.1,.1,16751536,t+.38,1.1,e)),[[-.15,-.12],[.15,-.12],[-.15,.12],[.15,.12]].forEach(([s,r])=>i.add(F(.07,.12,.07,16751536,t+s,.86,e+r))),i.add(F(.12,.02,.03,9202282,t,1.38,e));for(let s=0;s<3;s++)for(let r=0;r<2+s;r++){let a=new pt(new be(.09,.09,.03,12),Ut(16111752));a.position.set(t-.7+s*.22,.84+r*.035,e+.1),i.add(a)}}function Sd(i,t,e,n){let s=new te;s.position.set(t,0,e),s.rotation.y=n||0,i.add(s),s.add(F(1,1.1,.9,10135480,0,.55,0));let r=new pt(new be(.14,.14,.05,14),Ut(16111752));return r.rotation.x=Math.PI/2,r.position.set(.15,.6,.46),s.add(r),s.add(F(.06,.3,.05,16111752,-.3,.6,.46)),s}function iy(i,t,e,n){let s=new te;return s.position.set(t,0,e),s.rotation.y=n||0,i.add(s),s.add(F(2,.08,.45,12883572,0,1.3,0)),s.add(F(2,.08,.45,12883572,0,.6,0)),[-1,1].forEach(r=>s.add(F(.08,1.4,.45,11569768,r*.96,.7,0))),[.6,1.3].forEach((r,a)=>[-.65,-.2,.25,.7].forEach((o,c)=>{let l=new pt(new be(.15,.15,.4,12),new ye({color:15136507,transparent:!0,opacity:.7}));l.position.set(o,r+.24,0),s.add(l);let h=.08+(c+a*2)%4*.08,u=new pt(new be(.12,.12,h,12),Ut(16111752));u.position.set(o,r+.06+h/2,0),s.add(u)})),s}function sy(i,t,e,n){let s=new te;return s.position.set(t,0,e),s.rotation.y=n||0,i.add(s),s.add(F(.9,1.5,.7,10934504,0,.75,0)),[.35,.8,1.25].forEach(r=>{s.add(F(.8,.38,.04,12576498,0,r,.36)),s.add(F(.25,.05,.05,16775920,0,r+.08,.39))}),s}function ry(i,t,e){[0,2.1,4.2].forEach(r=>{let a=F(.04,1.4,.04,7035470,t+Math.cos(r)*.25,.65,e+Math.sin(r)*.25);a.rotation.set(Math.sin(r)*.3,0,-Math.cos(r)*.3),i.add(a)}),i.add(F(.4,.28,.25,4865855,t,1.45,e));let n=new pt(new be(.09,.09,.15,12),Ut(3025462));n.rotation.x=Math.PI/2,n.position.set(t,1.45,e+.18),i.add(n);let s=new pt(new Xs(.4,.05,6,24),new He({color:16774351}));s.position.set(t-.9,1.7,e-.3),i.add(s),i.add(F(.04,1.7,.04,7035470,t-.9,.85,e-.3))}function ay(i,t,e,n,s){let r=ia(i,t,e,n,s,1.2,.7,15785156);[-.4,-.13,.13,.4].forEach((a,o)=>{r.add(F(.05,.05,.08,9206379,a,.18,.08)),r.add(F(.1,.22,.03,[16111752,10934504,16758465,10738109][o],a,-.02,.08))})}var oh={work:{first:"list",build(i,t){let e=ta(i,-1.6,-2.4);rh(e,.2,0),e.add(F(.3,.2,.22,16777215,-.75,.92,.1)),ss(i,-1.4,-1.55,Math.PI),t.seat={x:-1.4,z:-1.6,ry:Math.PI,y:.54},ia(i,-4.45,1.8,.4,Math.PI/2,2.6,1.4,16777215,[[-.9,.35,16773544],[-.4,.4,16758465],[.1,.3,10934504],[.6,.38,10738109],[-.8,-.2,16758465],[-.2,-.25,16773544],[.5,-.2,14273008]]),ea(i,4.25,-.6,-Math.PI/2),ah(i,4.44,2.2,1.6,-Math.PI/2),ry(i,3.4,4.6),rs(i,-3.9,-3)},corners:{list:[.8,2.9,5.8,-1.3,1,-2.2],board:[2.4,2.7,4.2,-4.3,1.6,.3],stats:[-2.4,2.7,4.2,4.3,1.5,.3],posts:[-.6,2.5,8.6,3.2,1.3,4.4]}},money:{first:"overview",build(i,t){let e=ta(i,0,-2.3,0,16368540);ny(e,.4,0),e.add(F(.35,.05,.45,9417689,-.5,.84,.1)),ss(i,.2,-1.45,Math.PI),t.seat={x:.2,z:-1.5,ry:Math.PI,y:.54},bd(i,-4.44,1.9,-.8,Math.PI/2,!0),ah(i,-4.44,1.9,2.1,Math.PI/2),iy(i,4.2,-1,-Math.PI/2),sy(i,3.6,-3,0),Sd(i,3.6,2,-Math.PI/2.5),rs(i,-3.9,-3),t.windowX=-1.9},corners:{overview:[.6,2.9,5.8,0,1,-2.3],calendar:[2.6,2.7,3.6,-4.3,1.8,-.8],stats:[2.6,2.7,5.4,-4.3,1.8,1.8],budget:[-2.4,2.7,3.6,4.2,1.1,-1.2],history:[-1.6,2.7,3.8,3.4,1,-3],categories:[-1.6,2.5,6.2,3.6,.7,2]}},calendar:{first:"main",build(i,t){bd(i,-.1,2.05,-3.44,0,!0),ey(i,-2.6,2.5,-3.44,0),t.windowX=2.9;let e=ta(i,-1.2,-1.6);e.add(F(.5,.06,.36,16773544,.3,.84,0)),e.add(F(.04,.04,.3,15834032,.65,.88,0)),ss(i,-1,-.75,Math.PI),t.seat={x:-1,z:-.8,ry:Math.PI,y:.54},ea(i,4.25,.2,-Math.PI/2,5),rs(i,3.8,2.6)},corners:{main:[-.2,2.9,5.8,-.4,1.5,-2.8]}},account:{first:"main",build(i,t){Sd(i,3.7,-2.6,-.3),ay(i,-.5,2,-3.44,0),t.windowX=1.7;let e=ta(i,-1.8,-1.8,.2);rh(e,0,0),ss(i,-1.75,-.95,Math.PI+.2),t.seat={x:-1.72,z:-1,ry:Math.PI+.2,y:.54},ea(i,-4.25,.6,Math.PI/2,5),rs(i,3.9,1.8)},corners:{main:[-.2,2.9,5.8,-.9,1.2,-2.4]}},love:{first:"main",build(i,t){let n=new te;n.position.set(-.4,0,-2.5),i.add(n),n.add(F(2.6,.45,.9,16165309,0,.32,0)),n.add(F(2.6,.75,.25,15834032,0,.8,-.35)),[-1,1].forEach(f=>n.add(F(.25,.65,.9,15834032,f*1.3,.45,0)));let s=Po(16744350);s.scale.setScalar(.4),s.position.set(1,.75,-.15),n.add(s),t.seats=[{x:-.85,z:-2.35,ry:0,y:.56},{x:.05,z:-2.35,ry:0,y:.56}],t.sofa=!0,t.couple=!0,[[-1.95,2.35,.55,3095915],[-1.65,2.35,-.55,15230251]].forEach(([f,g,_,m])=>{let p=new te;p.position.set(f,g,-3.44+.06),p.rotation.z=_,i.add(p),p.add(F(.06,.34,.05,16777215,0,-.5,0)),p.add(F(.025,.34,.025,10135480,0,-.17,0));let E=new pt(new Xs(.17,.02,6,22),Ut(m));E.scale.y=1.3,E.position.y=.2,p.add(E);for(let y=-3;y<=3;y++)p.add(F(.004,.42,.004,16777215,y*.045,.2,0)),p.add(F(.32,.004,.004,16777215,0,.2+y*.055,0))});{let f=document.createElement("canvas");f.width=128,f.height=64;let g=f.getContext("2d");g.fillStyle="#ffffff",g.fillRect(0,0,128,64),g.fillStyle="#e8652b",g.fillRect(0,8,128,16),g.fillStyle="#26305a",g.beginPath(),g.moveTo(0,64),g.lineTo(0,24),g.lineTo(14,24),g.lineTo(30,64),g.fill(),g.fillStyle="#26305a",g.fillRect(0,6,128,2),g.fillRect(26,28,102,2),g.font="bold 13px sans-serif",g.fillText("YONEX",74,54),g.beginPath(),g.arc(60,49,3,0,7),g.arc(67,49,3,0,7),g.lineWidth=2,g.strokeStyle="#26305a",g.stroke();let _=new Pn(f);_.colorSpace=Ge;let m=Ut(16777215),p=new ye({map:_}),E=new pt(new Fe(1.15,.58,.36),[m,m,Ut(15230251),m,p,p]);E.position.set(1.25,1.62,-3.44+.22),E.castShadow=!0,i.add(E),[-.28,.28].forEach(y=>{i.add(F(.06,.5,.03,16777215,1.25+y*.9,2.02,-3.44+.2))}),i.add(F(.5,.06,.06,2502746,1.25,2.28,-3.44+.2)),i.add(F(.06,.06,.16,9206379,1.25,2.32,-3.44+.1))}i.add(F(1.42,1.08,.06,12883572,-.4,2.55,-3.44+.02)),i.add(F(1.28,.94,.07,16775920,-.4,2.55,-3.44+.03));let r=new pt(new fi(1.1,.78),new He({color:16766687}));r.position.set(-.4,2.55,-3.44+.075),r.userData.pick="frame",i.add(r),t.frames=[r];for(let f=0;f<14;f++){let g=new pt(new Qe(.05,6,5),new He({color:[16773544,16758465][f%2]}));g.position.set(-4+f*.62,3.45-Math.sin(f*.9)*.08,-3.38),i.add(g)}let a=new te;a.position.set(1.65,0,-2.3),i.add(a);let o=new pt(new be(.42,.42,.06,18),Ut(14861214));o.position.y=.6,a.add(o),a.add(F(.07,.6,.07,11569768,0,.3,0));let c=new pt(new be(.22,.25,.04,14),Ut(11569768));c.position.y=.02,a.add(c);let l=new te;l.position.set(0,.67,0),l.rotation.y=-.35,l.userData.pick="album",a.add(l),l.add(F(.5,.08,.38,15909198,0,0,0)),l.add(F(.04,.085,.38,14263854,-.25,0,0));let h=Po(14698591);h.scale.setScalar(.15),h.rotation.x=-Math.PI/2,h.position.set(.02,.045,.06),l.add(h),t.album=l;let u=new te;u.position.set(1.3,0,1.25),i.add(u),u.add(F(1.5,.06,.95,14861214,0,.76,0)),[[-.65,-.38],[.65,-.38],[-.65,.38],[.65,.38]].forEach(([f,g])=>u.add(F(.06,.76,.06,11569768,f,.38,g))),[-1,1].forEach(f=>{let g=(_,m,p)=>{let E=new pt(new be(.15,.1,.1,12),Ut(16777215));E.position.set(_,.84,m),u.add(E);let y=new pt(new be(.135,.135,.02,12),Ut(p));y.position.set(_,.88,m),u.add(y)};g(f*.4-.16,-.18,16183264),g(f*.4+.16,-.18,14257226),[[-.05,-.2],[.05,-.14],[0,-.24]].forEach(([_,m])=>u.add(F(.07,.03,.05,9065011,f*.4+.16+_,.9,m))),u.add(F(.32,.012,.012,12883572,f*.4,.8,.05)),u.add(F(.32,.012,.012,12883572,f*.4,.8,.08))});let d=new pt(new be(.2,.2,.03,12),Ut(16777215));d.position.set(0,.8,-.05),u.add(d);for(let f=0;f<7;f++)u.add(F(.07,.04,.05,[7321690,9423996][f%2],(f%3-1)*.08,.83,(Math.floor(f/3)-1)*.07-.05));ss(i,1.3-.4,1.25-.85,0),ss(i,1.3+.4,1.25-.85,0),t.dining=[{x:1.3-.4,z:1.25-.8,ry:0,y:.54},{x:1.3+.4,z:1.25-.8,ry:0,y:.54}],t.windowX=3.1,rs(i,3.95,-2.9)},corners:{main:[.2,2.8,6.6,0,1.3,-1.9]}},game:{first:"main",build(i,t){i.add(F(2.6,.6,.6,12883572,0,.3,-3.05)),i.add(F(2.2,1.3,.1,3025462,0,1.35,-3.15));let e=F(2.05,1.15,.02,0,0,1.35,-3.09,new He({color:10934504}));i.add(e),[[-.6,1.55,16758465],[.1,1.2,16111752],[.6,1.6,10738109]].forEach(([s,r,a])=>i.add(F(.3,.3,.01,0,s,r,-3.075,new He({color:a})))),i.add(F(.5,.12,.35,16777215,.8,.66,-2.95));let n=new pt(new Qe(.7,14,10),Ut(16165309));n.scale.set(1.1,.6,1),n.position.set(.2,.4,-.4),n.castShadow=!0,i.add(n),t.seats=[{x:.2,z:-.45,ry:Math.PI,y:.78}],t.gamer=!0,ah(i,-4.44,2.2,-.8,Math.PI/2),ia(i,4.44,2.2,-.4,-Math.PI/2,1.2,1.5,14273008,[[0,.3,16758465,.5],[0,-.35,16111752,.4]]),ea(i,-4.25,1.8,Math.PI/2,5),rs(i,3.9,-3),t.windowX=2.9},corners:{main:[.4,2.8,5.6,0,1.1,-2.6]}},other:{first:"main",build(i,t){let e=ta(i,-1,-2.3);rh(e,0,0),ss(i,-.8,-1.45,Math.PI),t.seat={x:-.8,z:-1.5,ry:Math.PI,y:.54},ea(i,4.25,-.6,-Math.PI/2),rs(i,-3.9,-3)},corners:{main:[0,2.9,5.8,0,1.1,-2]}}};function oy(i,t){t=t||{};let e=oh[t.house]||(t.kind==="game"?oh.game:oh.other),n=new Ur({antialias:!0});n.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),n.shadowMap.enabled=!0,n.shadowMap.type=fo,i.appendChild(n.domElement);let s=new Nr,r=new Ke(48,1,.1,100),a=wo(t.roof||16165309,.72),o=wo(t.roof||16165309,.55);s.background=new Qt(wo(t.roof||16165309,.82));let c=new te;s.add(c);let l=is+Ed,h=Ed/2;for(let lt=0;lt<12;lt++){let ft=F(jn/12,.1,l,lt%2?15323054:14861214,-jn/2+(lt+.5)*jn/12,-.05,h);ft.castShadow=!1,c.add(ft)}let u=F(jn,Gn,.12,a,0,Gn/2,-is/2);u.castShadow=!1,c.add(u),[-1,1].forEach(lt=>{let ft=F(.12,Gn,l,o,lt*jn/2,Gn/2,h);ft.castShadow=!1,ft.receiveShadow=!0,c.add(ft)});let d=wo(t.roof||16165309,.9),f=F(jn,.12,l,0,0,Gn+.06,h,new ye({color:d,emissive:d,emissiveIntensity:.3}));f.castShadow=!1,c.add(f);let g=lt=>{lt.castShadow=!1,c.add(lt)};g(F(jn,.16,.12,16777215,0,Gn-.08,-is/2+.1)),[-1,1].forEach(lt=>g(F(.12,.16,l,16777215,lt*(jn/2-.1),Gn-.08,h))),g(F(jn,.14,.04,16777215,0,.07,-is/2+.08)),[-1,1].forEach(lt=>g(F(.04,.14,l,16777215,lt*(jn/2-.08),.07,h)));let _=new He({color:12575733}),m=new pt(new be(1,1,.03,32),Ut(16176348));m.scale.set(2,1,1.3),m.position.set(.3,.02,.6),m.receiveShadow=!0,c.add(m);let p=F(.03,.55,.03,9206379,.3,Gn-.27,.3);p.castShadow=!1,c.add(p);let E=new pt(new kn(.45,.4,12,1,!0),new ye({color:16773544,emissive:16765562,emissiveIntensity:0,side:gn}));E.position.set(.3,Gn-.72,.3),E.castShadow=!1,c.add(E);let y={};e.build(c,y);{let lt=y.windowX!=null?y.windowX:2.2,ft=2.1,bt=-is/2;c.add(F(1.9,1.5,.08,16777215,lt,ft,bt+.06)),c.add(F(1.7,1.3,.09,0,lt,ft,bt+.07,_)),c.add(F(.05,1.3,.1,16777215,lt,ft,bt+.1)),c.add(F(1.7,.05,.1,16777215,lt,ft,bt+.1));let tt=F(2.5,.05,.05,12883572,lt,ft+.9,bt+.2);tt.castShadow=!1,c.add(tt),[-1,1].forEach(ct=>{let P=F(.24,1.75,.05,16762063,lt+ct*1.08,ft+0,bt+.2);P.castShadow=!1,c.add(P);let Mt=F(.28,.06,.07,16165309,lt+ct*1.08,ft-.25,bt+.22);Mt.castShadow=!1,c.add(Mt)})}let v=[];c.traverse(lt=>{lt.userData.hands&&(v=lt.userData.hands)});let O=y.seats||(y.seat?[y.seat]:[]),I=t.looks||(t.look?[t.look]:[]),L=O.slice(0,I.length).map((lt,ft)=>{let bt=Pd(I[ft]);return c.add(bt.g),bt.g.position.set(lt.x,lt.y-lh,lt.z),bt.g.rotation.y=lt.ry,bt.parts.legL.rotation.x=bt.parts.legR.rotation.x=-1.45,bt}),U=y.sofa||y.gamer?null:L[0]||null,A="",S=Id("z Z z","#7a6a9a",.9,.45);if(c.add(S),t.onPick){let lt=new Kr,ft=new dt,bt=null;n.domElement.addEventListener("pointerdown",tt=>{bt={x:tt.clientX,y:tt.clientY}}),n.domElement.addEventListener("pointerup",tt=>{if(!bt||Math.hypot(tt.clientX-bt.x,tt.clientY-bt.y)>8){bt=null;return}bt=null;let ct=n.domElement.getBoundingClientRect();ft.set((tt.clientX-ct.left)/ct.width*2-1,-((tt.clientY-ct.top)/ct.height)*2+1),lt.setFromCamera(ft,r);let P=lt.intersectObjects(c.children,!0).find(ot=>{let Tt=ot.object;for(;Tt&&!Tt.userData.pick;)Tt=Tt.parent;return!!Tt});if(!P)return;let Mt=P.object;for(;Mt&&!Mt.userData.pick;)Mt=Mt.parent;t.onPick(Mt.userData.pick)})}let N=y.gamer?L[0]:null,q=new qr(16777215,14861214,1.4);s.add(q);let G=new Jr(16774374,1.6);G.position.set(2.5,Gn-.3,8),G.target.position.set(0,0,-2),s.add(G.target),G.castShadow=!0,G.shadow.mapSize.set(1024,1024),Object.assign(G.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:.5,far:25}),G.shadow.bias=-.001,s.add(G);let Y=new Zr(16767392,0,12,1.3);Y.position.set(.3,Gn-1.1,.3),s.add(Y);function V(){let lt=new Date,ft=t.timeMode==="day"?11:t.timeMode==="night"?22:lt.getHours()+lt.getMinutes()/60,bt=Ld(ft);_.color.copy(bt.sky),q.intensity=1.5-bt.night*.7,G.intensity=1.6*(1-bt.night)+.2,Y.intensity=bt.night*8,E.material.emissiveIntensity=bt.night,v.length&&(v[0].rotation.z=-(lt.getHours()%12)/12*Math.PI*2,v[1].rotation.z=-lt.getMinutes()/60*Math.PI*2)}let j=new D,mt=new D,Q=new D,vt=new D;function ut(lt){return e.corners[lt]||e.corners[e.first]}function Ft(lt,ft){let bt=ut(lt);Q.set(bt[0],bt[1],bt[2]),vt.set(bt[3],bt[4],bt[5]),ft&&(j.copy(Q),mt.copy(vt))}Ft(t.corner,!0),t.walkIn&&(j.set(0,1.7,is/2+3.2),mt.set(0,1.4,-is/2));function ne(){let lt=i.clientWidth||innerWidth,ft=i.clientHeight||innerHeight;n.setSize(lt,ft,!1),r.aspect=lt/ft,r.fov=lt/ft<.9?64:50,lt/ft<.9?r.setViewOffset(lt,ft,0,-ft*.2,lt,ft):r.clearViewOffset(),r.updateProjectionMatrix()}ne();let Yt=()=>ne();window.addEventListener("resize",Yt);let it=new $r,xt=new D,Bt=!0,_t=0;function Zt(){if(!Bt||(requestAnimationFrame(Zt),document.hidden))return;let lt=Math.min(.1,it.getDelta()),ft=it.elapsedTime;if(j.lerp(Q,Math.min(1,lt*1.6)),mt.lerp(vt,Math.min(1,lt*1.6)),r.position.copy(j),r.lookAt(mt),y.couple){let bt=new Date,tt=bt.getHours()+bt.getMinutes()/60,ct=tt>=22||tt<6.5?"sleep":tt>=11.5&&tt<13?"lunch":"sofa";if(ct!==A){A=ct;let P=ct==="lunch"?y.dining:y.seats;L.forEach((Mt,ot)=>{Mt.g.position.set(P[ot].x,P[ot].y-lh,P[ot].z),Mt.g.rotation.y=P[ot].ry,Mt.sleepMap||(Mt.sleepMap=Cd(Mt.parts.look,!0)),Mt.awakeMap||(Mt.awakeMap=Mt.parts.mat.map),Mt.parts.mat.map=ct==="sleep"?Mt.sleepMap:Mt.awakeMap,Mt.parts.mat.needsUpdate=!0}),S.visible=ct==="sleep"}L.forEach((P,Mt)=>{let ot=Mt===0?-1:1;A==="lunch"?(P.parts.armL.rotation.x=-.9,P.parts.armR.rotation.x=-1.35+Math.sin(ft*2.6+Mt*1.7)*.45,P.parts.head.rotation.set(.12+Math.max(0,Math.sin(ft*2.6+Mt*1.7))*.12,0,0)):A==="sleep"?(P.parts.armL.rotation.x=P.parts.armR.rotation.x=-.5,P.parts.head.rotation.set(.1,-ot*.2,-ot*(.45+Math.sin(ft*.9)*.02))):(P.parts.armL.rotation.x=P.parts.armR.rotation.x=-.6,P.parts.head.rotation.set(0,-ot*.25,-ot*(.18+Math.sin(ft*.8)*.04)))}),S.visible&&(S.position.set(-.4,2.05+ft*.25%.4,-2.35),S.material.opacity=.9-ft*.25%.4*1.5)}else y.sofa&&L.forEach((bt,tt)=>{bt.parts.armL.rotation.x=bt.parts.armR.rotation.x=-.6,bt.parts.head.rotation.z=(tt===0?-1:1)*(.18+Math.sin(ft*.8)*.04),bt.parts.head.rotation.y=(tt===0?1:-1)*.25});N&&(N.parts.armL.rotation.x=N.parts.armR.rotation.x=-1.1+Math.sin(ft*14)*.05,N.parts.head.rotation.x=-.05,N.parts.head.rotation.y=Math.sin(ft*.5)*.08),U&&(U.parts.armL.rotation.x=-1.2+Math.sin(ft*9)*.12,U.parts.armR.rotation.x=-1.2+Math.sin(ft*9+1.8)*.12,U.parts.head.rotation.x=.15+Math.sin(ft*.6)*.05,U.parts.head.rotation.y=Math.sin(ft*.35)*.25),(ft-_t>20||_t===0)&&(V(),_t=ft||.001),n.render(s,r),xt.set(.3,.05,.6).project(r),document.documentElement.style.setProperty("--rug-x",((xt.x+1)/2*100).toFixed(1)+"vw"),document.documentElement.style.setProperty("--rug-y",((1-xt.y)/2*100).toFixed(1)+"vh")}return V(),requestAnimationFrame(Zt),{house:t.house,setCorner(lt){Ft(lt,!1)},setPhotos(lt){if(!y.frames)return;let ft=new lo;y.frames.forEach((bt,tt)=>{lt[tt]&&ft.load(lt[tt],ct=>{ct.colorSpace=Ge;let P=ct.image,Mt=bt.geometry.parameters.width,ot=bt.geometry.parameters.height,Tt=P.width/P.height,Et=Mt/ot;Tt>Et?(ct.repeat.set(Et/Tt,1),ct.offset.set((1-Et/Tt)/2,0)):(ct.repeat.set(1,Tt/Et),ct.offset.set(0,(1-Tt/Et)/2)),bt.material.map=ct,bt.material.color.set(16777215),bt.material.needsUpdate=!0})})},setTimeMode(lt){t.timeMode=lt,V()},destroy(){Bt=!1,window.removeEventListener("resize",Yt),s.traverse(lt=>{lt.geometry&&lt.geometry.dispose()}),n.dispose(),n.domElement.remove()}}}window.Village3D={create:ty,room:oy,LOOKS:Ro,LOVE:ch,ROOF:he.roof};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
