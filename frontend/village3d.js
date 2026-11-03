(()=>{var nh="170",Es={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lf=0,Vh=1,hf=2;var rd=1,Ia=2,Mi=3,Wi=0,ln=1,cn=2,Vi=0,Qs=1,Gh=2,Wh=3,Xh=4,uf=5,ls=100,df=101,ff=102,pf=103,mf=104,gf=200,xf=201,_f=202,yf=203,Lc=204,Uc=205,vf=206,Mf=207,Ef=208,bf=209,Sf=210,wf=211,Tf=212,Af=213,Rf=214,Nc=0,Oc=1,Fc=2,ir=3,zc=4,Bc=5,Hc=6,kc=7,ih=0,Cf=1,Pf=2,Gi=0,If=1,Df=2,Lf=3,Uf=4,Nf=5,Of=6,Ff=7;var od=300,sr=301,rr=302,Vc=303,Gc=304,Da=306,Xr=1e3,us=1001,Wc=1002,hn=1003,zf=1004;var bo=1005;var ri=1006,Qa=1007;var ds=1008;var Si=1009,ad=1010,cd=1011,Yr=1012,sh=1013,fs=1014,oi=1015,go=1016,rh=1017,oh=1018,or=1020,ld=35902,hd=1021,ud=1022,Kn=1023,dd=1024,fd=1025,tr=1026,ar=1027,ah=1028,ch=1029,pd=1030,lh=1031;var hh=1033,ta=33776,ea=33777,na=33778,ia=33779,Xc=35840,Yc=35841,qc=35842,Zc=35843,Jc=36196,$c=37492,Kc=37496,jc=37808,Qc=37809,tl=37810,el=37811,nl=37812,il=37813,sl=37814,rl=37815,ol=37816,al=37817,cl=37818,ll=37819,hl=37820,ul=37821,sa=36492,dl=36494,fl=36495,md=36283,pl=36284,ml=36285,gl=36286;var ra=2300,xl=2301,tc=2302,Yh=2400,qh=2401,Zh=2402;var Bf=3200,Hf=3201;var gd=0,kf=1,Hi="",Be="srgb",ur="srgb-linear",La="linear",Pe="srgb";var Ds=7680;var Jh=519,Vf=512,Gf=513,Wf=514,xd=515,Xf=516,Yf=517,qf=518,Zf=519,_l=35044;var $h="300 es",Ei=2e3,oa=2001,wi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kh=1234567,Br=Math.PI/180,qr=180/Math.PI;function ai(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[e&63|128]+on[e>>8&255]+"-"+on[e>>16&255]+on[e>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function qe(i,t,e){return Math.max(t,Math.min(e,i))}function uh(i,t){return(i%t+t)%t}function Jf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function $f(i,t,e){return i!==t?(e-i)/(t-i):0}function Hr(i,t,e){return(1-e)*i+e*t}function Kf(i,t,e,n){return Hr(i,t,1-Math.exp(-e*n))}function jf(i,t=1){return t-Math.abs(uh(i,t*2)-t)}function Qf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function tp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ep(i,t){return i+Math.floor(Math.random()*(t-i+1))}function np(i,t){return i+Math.random()*(t-i)}function ip(i){return i*(.5-Math.random())}function sp(i){i!==void 0&&(Kh=i);let t=Kh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rp(i){return i*Br}function op(i){return i*qr}function ap(i){return(i&i-1)===0&&i!==0}function cp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function lp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hp(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $n(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function we(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var _d={DEG2RAD:Br,RAD2DEG:qr,generateUUID:ai,clamp:qe,euclideanModulo:uh,mapLinear:Jf,inverseLerp:$f,lerp:Hr,damp:Kf,pingpong:jf,smoothstep:Qf,smootherstep:tp,randInt:ep,randFloat:np,randFloatSpread:ip,seededRandom:sp,degToRad:rp,radToDeg:op,isPowerOfTwo:ap,ceilPowerOfTwo:cp,floorPowerOfTwo:lp,setQuaternionFromProperEuler:hp,normalize:we,denormalize:$n},pt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},de=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],b=s[1],y=s[4],M=s[7],U=s[2],P=s[5],I=s[8];return r[0]=o*_+a*b+c*U,r[3]=o*m+a*y+c*P,r[6]=o*f+a*M+c*I,r[1]=l*_+h*b+u*U,r[4]=l*m+h*y+u*P,r[7]=l*f+h*M+u*I,r[2]=d*_+p*b+g*U,r[5]=d*m+p*y+g*P,r[8]=d*f+p*M+g*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ec.makeScale(t,e)),this}rotate(t){return this.premultiply(ec.makeRotation(-t)),this}translate(t,e){return this.premultiply(ec.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ec=new de;function yd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function up(){let i=Zr("canvas");return i.style.display="block",i}var jh={};function Fr(i){i in jh||(jh[i]=!0,console.warn(i))}function dp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function fp(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function pp(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ve={enabled:!0,workingColorSpace:ur,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Pe&&(i.r=bi(i.r),i.g=bi(i.g),i.b=bi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Pe&&(i.r=er(i.r),i.g=er(i.g),i.b=er(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Hi?La:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function er(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Qh=[.64,.33,.3,.6,.15,.06],tu=[.2126,.7152,.0722],eu=[.3127,.329],nu=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),iu=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ve.define({[ur]:{primaries:Qh,whitePoint:eu,transfer:La,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:tu,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:Qh,whitePoint:eu,transfer:Pe,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:tu,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}});var Ls,yl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ls===void 0&&(Ls=Zr("canvas")),Ls.width=t.width,Ls.height=t.height;let n=Ls.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ls}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Zr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bi(e[n]/255)*255):e[n]=bi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},mp=0,aa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=ai(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nc(s[o].image)):r.push(nc(s[o]))}else r=nc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function nc(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?yl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var gp=0,Mn=class i extends wi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=us,s=us,r=ri,o=ds,a=Kn,c=Si,l=i.DEFAULT_ANISOTROPY,h=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=ai(),this.name="",this.source=new aa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==od)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xr:t.x=t.x-Math.floor(t.x);break;case us:t.x=t.x<0?0:1;break;case Wc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xr:t.y=t.y-Math.floor(t.y);break;case us:t.y=t.y<0?0:1;break;case Wc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=od;Mn.DEFAULT_ANISOTROPY=1;var Ie=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,M=(p+1)/2,U=(f+1)/2,P=(h+d)/4,I=(u+_)/4,L=(g+m)/4;return y>M&&y>U?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=P/n,r=I/n):M>U?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=P/s,r=L/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=I/r,s=L/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-_)/b,this.z=(d-h)/b,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vl=class extends wi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Mn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new aa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ti=class extends vl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ca=class extends Mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ml=class extends Mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==p||h!==g){let m=1-a,f=c*d+l*p+h*g+u*_,b=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){let U=Math.sqrt(y),P=Math.atan2(U,f*b);m=Math.sin(m*P)/U,a=Math.sin(a*P)/U}let M=a*b;if(c=c*m+d*M,l=l*m+p*M,h=h*m+g*M,u=u*m+_*M,m===1-a){let U=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=U,l*=U,h*=U,u*=U}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*p-l*d,t[e+1]=c*g+h*d+l*u-a*p,t[e+2]=l*g+h*p+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(su.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(su.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ic.copy(this).projectOnVector(t),this.sub(ic)}reflect(t){return this.sub(ic.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ic=new D,su=new jn,Ai=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Yn):Yn.fromBufferAttribute(r,o),Yn.applyMatrix4(t.matrixWorld),this.expandByPoint(Yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),So.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),So.copy(n.boundingBox)),So.applyMatrix4(t.matrixWorld),this.union(So)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Yn),Yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ar),wo.subVectors(this.max,Ar),Us.subVectors(t.a,Ar),Ns.subVectors(t.b,Ar),Os.subVectors(t.c,Ar),Ui.subVectors(Ns,Us),Ni.subVectors(Os,Ns),ns.subVectors(Us,Os);let e=[0,-Ui.z,Ui.y,0,-Ni.z,Ni.y,0,-ns.z,ns.y,Ui.z,0,-Ui.x,Ni.z,0,-Ni.x,ns.z,0,-ns.x,-Ui.y,Ui.x,0,-Ni.y,Ni.x,0,-ns.y,ns.x,0];return!sc(e,Us,Ns,Os,wo)||(e=[1,0,0,0,1,0,0,0,1],!sc(e,Us,Ns,Os,wo))?!1:(To.crossVectors(Ui,Ni),e=[To.x,To.y,To.z],sc(e,Us,Ns,Os,wo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},gi=[new D,new D,new D,new D,new D,new D,new D,new D],Yn=new D,So=new Ai,Us=new D,Ns=new D,Os=new D,Ui=new D,Ni=new D,ns=new D,Ar=new D,wo=new D,To=new D,is=new D;function sc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){is.fromArray(i,r);let a=s.x*Math.abs(is.x)+s.y*Math.abs(is.y)+s.z*Math.abs(is.z),c=t.dot(is),l=e.dot(is),h=n.dot(is);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var xp=new Ai,Rr=new D,rc=new D,Xi=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):xp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rr.subVectors(t,this.center);let e=Rr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Rr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rr.copy(t.center).add(rc)),this.expandByPoint(Rr.copy(t.center).sub(rc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},xi=new D,oc=new D,Ao=new D,Oi=new D,ac=new D,Ro=new D,cc=new D,ps=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xi.copy(this.origin).addScaledVector(this.direction,e),xi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){oc.copy(t).add(e).multiplyScalar(.5),Ao.copy(e).sub(t).normalize(),Oi.copy(this.origin).sub(oc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ao),a=Oi.dot(this.direction),c=-Oi.dot(Ao),l=Oi.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(oc).addScaledVector(Ao,d),p}intersectSphere(t,e){xi.subVectors(t.center,this.origin);let n=xi.dot(this.direction),s=xi.dot(xi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,xi)!==null}intersectTriangle(t,e,n,s,r){ac.subVectors(e,t),Ro.subVectors(n,t),cc.crossVectors(ac,Ro);let o=this.direction.dot(cc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,t);let c=a*this.direction.dot(Ro.crossVectors(Oi,Ro));if(c<0)return null;let l=a*this.direction.dot(ac.cross(Oi));if(l<0||c+l>o)return null;let h=-a*Oi.dot(cc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},be=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,d,p,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,p,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,u,d,p,g,_,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Fs.setFromMatrixColumn(t,0).length(),r=1/Fs.setFromMatrixColumn(t,1).length(),o=1/Fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,p=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,p=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,p=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-p,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_p,t,yp)}lookAt(t,e,n){let s=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Fi.crossVectors(n,Dn),Fi.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Fi.crossVectors(n,Dn)),Fi.normalize(),Co.crossVectors(Dn,Fi),s[0]=Fi.x,s[4]=Co.x,s[8]=Dn.x,s[1]=Fi.y,s[5]=Co.y,s[9]=Dn.y,s[2]=Fi.z,s[6]=Co.z,s[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],b=n[3],y=n[7],M=n[11],U=n[15],P=s[0],I=s[4],L=s[8],T=s[12],w=s[1],z=s[5],B=s[9],H=s[13],Z=s[2],W=s[6],K=s[10],mt=s[14],j=s[3],at=s[7],Rt=s[11],It=s[15];return r[0]=o*P+a*w+c*Z+l*j,r[4]=o*I+a*z+c*W+l*at,r[8]=o*L+a*B+c*K+l*Rt,r[12]=o*T+a*H+c*mt+l*It,r[1]=h*P+u*w+d*Z+p*j,r[5]=h*I+u*z+d*W+p*at,r[9]=h*L+u*B+d*K+p*Rt,r[13]=h*T+u*H+d*mt+p*It,r[2]=g*P+_*w+m*Z+f*j,r[6]=g*I+_*z+m*W+f*at,r[10]=g*L+_*B+m*K+f*Rt,r[14]=g*T+_*H+m*mt+f*It,r[3]=b*P+y*w+M*Z+U*j,r[7]=b*I+y*z+M*W+U*at,r[11]=b*L+y*B+M*K+U*Rt,r[15]=b*T+y*H+M*mt+U*It,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*p-n*c*p)+_*(+e*c*p-e*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+m*(+e*l*u-e*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+f*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],b=u*m*l-_*d*l+_*c*p-a*m*p-u*c*f+a*d*f,y=g*d*l-h*m*l-g*c*p+o*m*p+h*c*f-o*d*f,M=h*_*l-g*u*l+g*a*p-o*_*p-h*a*f+o*u*f,U=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,P=e*b+n*y+s*M+r*U;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/P;return t[0]=b*I,t[1]=(_*d*r-u*m*r-_*s*p+n*m*p+u*s*f-n*d*f)*I,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*f+n*c*f)*I,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*p-n*c*p)*I,t[4]=y*I,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*I,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*f-e*c*f)*I,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*p+e*c*p)*I,t[8]=M*I,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*f-e*u*f)*I,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*f+e*a*f)*I,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*p-e*a*p)*I,t[12]=U*I,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*I,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*I,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*I,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,b=c*l,y=c*h,M=c*u,U=n.x,P=n.y,I=n.z;return s[0]=(1-(_+f))*U,s[1]=(p+M)*U,s[2]=(g-y)*U,s[3]=0,s[4]=(p-M)*P,s[5]=(1-(d+f))*P,s[6]=(m+b)*P,s[7]=0,s[8]=(g+y)*I,s[9]=(m-b)*I,s[10]=(1-(d+_))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Fs.set(s[0],s[1],s[2]).length(),o=Fs.set(s[4],s[5],s[6]).length(),a=Fs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],qn.copy(this);let l=1/r,h=1/o,u=1/a;return qn.elements[0]*=l,qn.elements[1]*=l,qn.elements[2]*=l,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=u,qn.elements[9]*=u,qn.elements[10]*=u,e.setFromRotationMatrix(qn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Ei){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,g;if(a===Ei)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===oa)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Ei){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,p=(n+s)*h,g,_;if(a===Ei)g=(o+r)*u,_=-2*u;else if(a===oa)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Fs=new D,qn=new be,_p=new D(0,0,0),yp=new D(1,1,1),Fi=new D,Co=new D,Dn=new D,ru=new be,ou=new jn,ci=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ru.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ru,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ou.setFromEuler(this),this.setFromQuaternion(ou,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ci.DEFAULT_ORDER="XYZ";var Jr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},vp=0,au=new D,zs=new jn,_i=new be,Po=new D,Cr=new D,Mp=new D,Ep=new jn,cu=new D(1,0,0),lu=new D(0,1,0),hu=new D(0,0,1),uu={type:"added"},bp={type:"removed"},Bs={type:"childadded",child:null},lc={type:"childremoved",child:null},Ve=class i extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new ci,n=new jn,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new be},normalMatrix:{value:new de}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.multiply(zs),this}rotateOnWorldAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.premultiply(zs),this}rotateX(t){return this.rotateOnAxis(cu,t)}rotateY(t){return this.rotateOnAxis(lu,t)}rotateZ(t){return this.rotateOnAxis(hu,t)}translateOnAxis(t,e){return au.copy(t).applyQuaternion(this.quaternion),this.position.add(au.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cu,t)}translateY(t){return this.translateOnAxis(lu,t)}translateZ(t){return this.translateOnAxis(hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Po.copy(t):Po.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Cr,Po,this.up):_i.lookAt(Po,Cr,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),zs.setFromRotationMatrix(_i),this.quaternion.premultiply(zs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uu),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bp),lc.child=t,this.dispatchEvent(lc),lc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_i.multiply(t.parent.matrixWorld)),t.applyMatrix4(_i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uu),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,t,Mp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,Ep,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ve.DEFAULT_UP=new D(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zn=new D,yi=new D,hc=new D,vi=new D,Hs=new D,ks=new D,du=new D,uc=new D,dc=new D,fc=new D,pc=new Ie,mc=new Ie,gc=new Ie,ki=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Zn.subVectors(t,e),s.cross(Zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Zn.subVectors(s,e),yi.subVectors(n,e),hc.subVectors(t,e);let o=Zn.dot(Zn),a=Zn.dot(yi),c=Zn.dot(hc),l=yi.dot(yi),h=yi.dot(hc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vi.x),c.addScaledVector(o,vi.y),c.addScaledVector(a,vi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return pc.setScalar(0),mc.setScalar(0),gc.setScalar(0),pc.fromBufferAttribute(t,e),mc.fromBufferAttribute(t,n),gc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(pc,r.x),o.addScaledVector(mc,r.y),o.addScaledVector(gc,r.z),o}static isFrontFacing(t,e,n,s){return Zn.subVectors(n,e),yi.subVectors(t,e),Zn.cross(yi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Zn.cross(yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Hs.subVectors(s,n),ks.subVectors(r,n),uc.subVectors(t,n);let c=Hs.dot(uc),l=ks.dot(uc);if(c<=0&&l<=0)return e.copy(n);dc.subVectors(t,s);let h=Hs.dot(dc),u=ks.dot(dc);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Hs,o);fc.subVectors(t,r);let p=Hs.dot(fc),g=ks.dot(fc);if(g>=0&&p<=g)return e.copy(r);let _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ks,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return du.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(du,a);let f=1/(m+_+d);return o=_*f,a=d*f,e.copy(n).addScaledVector(Hs,o).addScaledVector(ks,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Io={h:0,s:0,l:0};function xc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ve.workingColorSpace){return this.r=t,this.g=e,this.b=n,ve.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ve.workingColorSpace){if(t=uh(t,1),e=qe(e,0,1),n=qe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=xc(o,r,t+1/3),this.g=xc(o,r,t),this.b=xc(o,r,t-1/3)}return ve.toWorkingColorSpace(this,s),this}setStyle(t,e=Be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){let n=vd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=er(t.r),this.g=er(t.g),this.b=er(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return ve.fromWorkingColorSpace(an.copy(this),t),Math.round(qe(an.r*255,0,255))*65536+Math.round(qe(an.g*255,0,255))*256+Math.round(qe(an.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.fromWorkingColorSpace(an.copy(this),e);let n=an.r,s=an.g,r=an.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ve.workingColorSpace){return ve.fromWorkingColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=Be){ve.fromWorkingColorSpace(an.copy(this),t);let e=an.r,n=an.g,s=an.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(zi),this.setHSL(zi.h+t,zi.s+e,zi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zi),t.getHSL(Io);let n=Hr(zi.h,Io.h,e),s=Hr(zi.s,Io.s,e),r=Hr(zi.l,Io.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new Qt;Qt.NAMES=vd;var Sp=0,Ri=class extends wi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=ai(),this.name="",this.blending=Qs,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lc,this.blendDst=Uc,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(n.blending=this.blending),this.side!==Wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Lc&&(n.blendSrc=this.blendSrc),this.blendDst!==Uc&&(n.blendDst=this.blendDst),this.blendEquation!==ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ke=class extends Ri{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ge=new D,Do=new pt,tn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_l,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Do.fromBufferAttribute(this,e),Do.applyMatrix3(t),this.setXY(e,Do.x,Do.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$n(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$n(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$n(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array),r=we(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_l&&(t.usage=this.usage),t}};var la=class extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ha=class extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var re=class extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}},wp=0,Bn=new be,_c=new Ve,Vs=new D,Ln=new Ai,Pr=new Ai,je=new D,Te=class i extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yd(t)?ha:la)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new de().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Bn.makeRotationFromQuaternion(t),this.applyMatrix4(Bn),this}rotateX(t){return Bn.makeRotationX(t),this.applyMatrix4(Bn),this}rotateY(t){return Bn.makeRotationY(t),this.applyMatrix4(Bn),this}rotateZ(t){return Bn.makeRotationZ(t),this.applyMatrix4(Bn),this}translate(t,e,n){return Bn.makeTranslation(t,e,n),this.applyMatrix4(Bn),this}scale(t,e,n){return Bn.makeScale(t,e,n),this.applyMatrix4(Bn),this}lookAt(t){return _c.lookAt(t),_c.updateMatrix(),this.applyMatrix4(_c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new re(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Pr.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(Ln.min,Pr.min),Ln.expandByPoint(je),je.addVectors(Ln.max,Pr.max),Ln.expandByPoint(je)):(Ln.expandByPoint(Pr.min),Ln.expandByPoint(Pr.max))}Ln.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(je));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)je.fromBufferAttribute(a,l),c&&(Vs.fromBufferAttribute(t,l),je.add(Vs)),s=Math.max(s,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new D,c[L]=new D;let l=new D,h=new D,u=new D,d=new pt,p=new pt,g=new pt,_=new D,m=new D;function f(L,T,w){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,w),d.fromBufferAttribute(r,L),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,w),h.sub(l),u.sub(l),p.sub(d),g.sub(d);let z=1/(p.x*g.y-g.x*p.y);isFinite(z)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(z),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(z),a[L].add(_),a[T].add(_),a[w].add(_),c[L].add(m),c[T].add(m),c[w].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let L=0,T=b.length;L<T;++L){let w=b[L],z=w.start,B=w.count;for(let H=z,Z=z+B;H<Z;H+=3)f(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let y=new D,M=new D,U=new D,P=new D;function I(L){U.fromBufferAttribute(s,L),P.copy(U);let T=a[L];y.copy(T),y.sub(U.multiplyScalar(U.dot(T))).normalize(),M.crossVectors(P,T);let z=M.dot(c[L])<0?-1:1;o.setXYZW(L,y.x,y.y,y.z,z)}for(let L=0,T=b.length;L<T;++L){let w=b[L],z=w.start,B=w.count;for(let H=z,Z=z+B;H<Z;H+=3)I(t.getX(H+0)),I(t.getX(H+1)),I(t.getX(H+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new tn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fu=new be,ss=new ps,Lo=new Xi,pu=new D,Uo=new D,No=new D,Oo=new D,yc=new D,Fo=new D,mu=new D,zo=new D,st=class extends Ve{constructor(t=new Te,e=new ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Fo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(yc.fromBufferAttribute(u,t),o?Fo.addScaledVector(yc,h):Fo.addScaledVector(yc.sub(e),h))}e.add(Fo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(r),ss.copy(t.ray).recast(t.near),!(Lo.containsPoint(ss.origin)===!1&&(ss.intersectSphere(Lo,pu)===null||ss.origin.distanceToSquared(pu)>(t.far-t.near)**2))&&(fu.copy(r).invert(),ss.copy(t.ray).applyMatrix4(fu),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ss)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=o[m.materialIndex],b=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=b,U=y;M<U;M+=3){let P=a.getX(M),I=a.getX(M+1),L=a.getX(M+2);s=Bo(this,f,t,n,l,h,u,P,I,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let b=a.getX(m),y=a.getX(m+1),M=a.getX(m+2);s=Bo(this,o,t,n,l,h,u,b,y,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=o[m.materialIndex],b=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=b,U=y;M<U;M+=3){let P=M,I=M+1,L=M+2;s=Bo(this,f,t,n,l,h,u,P,I,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let b=m,y=m+1,M=m+2;s=Bo(this,o,t,n,l,h,u,b,y,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Tp(i,t,e,n,s,r,o,a){let c;if(t.side===ln?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Wi,a),c===null)return null;zo.copy(a),zo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(zo);return l<e.near||l>e.far?null:{distance:l,point:zo.clone(),object:i}}function Bo(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Uo),i.getVertexPosition(c,No),i.getVertexPosition(l,Oo);let h=Tp(i,t,e,n,Uo,No,Oo,mu);if(h){let u=new D;ki.getBarycoord(mu,Uo,No,Oo,u),s&&(h.uv=ki.getInterpolatedAttribute(s,a,c,l,u,new pt)),r&&(h.uv1=ki.getInterpolatedAttribute(r,a,c,l,u,new pt)),o&&(h.normal=ki.getInterpolatedAttribute(o,a,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new D,materialIndex:0};ki.getNormal(Uo,No,Oo,d.normal),h.face=d,h.barycoord=u}return h}var We=class i extends Te{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(u,2));function g(_,m,f,b,y,M,U,P,I,L,T){let w=M/I,z=U/L,B=M/2,H=U/2,Z=P/2,W=I+1,K=L+1,mt=0,j=0,at=new D;for(let Rt=0;Rt<K;Rt++){let It=Rt*z-H;for(let Ut=0;Ut<W;Ut++){let pe=Ut*w-B;at[_]=pe*b,at[m]=It*y,at[f]=Z,l.push(at.x,at.y,at.z),at[_]=0,at[m]=0,at[f]=P>0?1:-1,h.push(at.x,at.y,at.z),u.push(Ut/I),u.push(1-Rt/L),mt+=1}}for(let Rt=0;Rt<L;Rt++)for(let It=0;It<I;It++){let Ut=d+It+W*Rt,pe=d+It+W*(Rt+1),ut=d+(It+1)+W*(Rt+1),bt=d+(It+1)+W*Rt;c.push(Ut,pe,bt),c.push(pe,ut,bt),j+=6}a.addGroup(p,j,T),p+=j,d+=mt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function cr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function vn(i){let t={};for(let e=0;e<i.length;e++){let n=cr(i[e]);for(let s in n)t[s]=n[s]}return t}function Ap(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Md(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ve.workingColorSpace}var Rp={clone:cr,merge:vn},Cp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Hn=class extends Ri{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cp,this.fragmentShader=Pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cr(t.uniforms),this.uniformsGroups=Ap(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ua=class extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=Ei}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Bi=new D,gu=new pt,xu=new pt,Qe=class extends ua{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=qr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qr*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z)}getViewSize(t,e){return this.getViewBounds(t,gu,xu),e.subVectors(xu,gu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Br*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Gs=-90,Ws=1,El=class extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Qe(Gs,Ws,t,e);s.layers=this.layers,this.add(s);let r=new Qe(Gs,Ws,t,e);r.layers=this.layers,this.add(r);let o=new Qe(Gs,Ws,t,e);o.layers=this.layers,this.add(o);let a=new Qe(Gs,Ws,t,e);a.layers=this.layers,this.add(a);let c=new Qe(Gs,Ws,t,e);c.layers=this.layers,this.add(c);let l=new Qe(Gs,Ws,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===oa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},da=class extends Mn{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:sr,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},bl=class extends Ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new da(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ri}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new We(5,5,5),r=new Hn({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:Vi});r.uniforms.tEquirect.value=e;let o=new st(s,r),a=e.minFilter;return e.minFilter===ds&&(e.minFilter=ri),new El(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},vc=new D,Ip=new D,Dp=new de,Jn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=vc.subVectors(n,e).cross(Ip.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(vc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Dp.getNormalMatrix(t),s=this.coplanarPoint(vc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},rs=new Xi,Ho=new D,$r=class{constructor(t=new Jn,e=new Jn,n=new Jn,s=new Jn,r=new Jn,o=new Jn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ei){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],b=s[13],y=s[14],M=s[15];if(n[0].setComponents(c-r,d-l,m-p,M-f).normalize(),n[1].setComponents(c+r,d+l,m+p,M+f).normalize(),n[2].setComponents(c+o,d+h,m+g,M+b).normalize(),n[3].setComponents(c-o,d-h,m-g,M-b).normalize(),n[4].setComponents(c-a,d-u,m-_,M-y).normalize(),e===Ei)n[5].setComponents(c+a,d+u,m+_,M+y).normalize();else if(e===oa)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){return rs.center.set(0,0,0),rs.radius=.7071067811865476,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ho.x=s.normal.x>0?t.max.x:t.min.x,Ho.y=s.normal.y>0?t.max.y:t.min.y,Ho.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ed(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Lp(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let _=u[p];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Yi=class i extends Te{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){let b=f*d-o;for(let y=0;y<l;y++){let M=y*u-r;g.push(M,-b,0),_.push(0,0,1),m.push(y/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<a;b++){let y=b+l*f,M=b+l*(f+1),U=b+1+l*(f+1),P=b+1+l*f;p.push(y,M,P),p.push(M,U,P)}this.setIndex(p),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Up=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Np=`#ifdef USE_ALPHAHASH
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
#endif`,Op=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hp=`#ifdef USE_AOMAP
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
#endif`,kp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vp=`#ifdef USE_BATCHING
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
#endif`,Gp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qp=`#ifdef USE_IRIDESCENCE
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
#endif`,Zp=`#ifdef USE_BUMPMAP
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
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,t0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,e0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,i0=`#define PI 3.141592653589793
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
} // validated`,s0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,r0=`vec3 transformedNormal = objectNormal;
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
#endif`,o0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,c0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,l0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h0="gl_FragColor = linearToOutputTexel( gl_FragColor );",u0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,d0=`#ifdef USE_ENVMAP
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
#endif`,f0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
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
#endif`,x0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,y0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,v0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M0=`#ifdef USE_GRADIENTMAP
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
}`,E0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,S0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,w0=`uniform bool receiveShadow;
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
#endif`,T0=`#ifdef USE_ENVMAP
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
#endif`,A0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,C0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,P0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,I0=`PhysicalMaterial material;
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
#endif`,D0=`struct PhysicalMaterial {
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
}`,L0=`
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
#endif`,U0=`#if defined( RE_IndirectDiffuse )
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
#endif`,N0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,F0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,k0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,V0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,G0=`#if defined( USE_POINTS_UV )
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
#endif`,W0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,q0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J0=`#ifdef USE_MORPHTARGETS
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
#endif`,$0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,j0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,em=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nm=`#ifdef USE_NORMALMAP
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
#endif`,im=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,om=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,am=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,um=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_m=`float getShadowMask() {
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
}`,ym=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vm=`#ifdef USE_SKINNING
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
#endif`,Mm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Em=`#ifdef USE_SKINNING
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
#endif`,bm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Am=`#ifdef USE_TRANSMISSION
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
#endif`,Rm=`#ifdef USE_TRANSMISSION
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
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Um=`uniform sampler2D t2D;
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
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Om=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`#include <common>
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
}`,Hm=`#if DEPTH_PACKING == 3200
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
}`,km=`#define DISTANCE
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
}`,Vm=`#define DISTANCE
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
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`uniform float scale;
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
}`,Ym=`uniform vec3 diffuse;
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
}`,qm=`#include <common>
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
}`,Zm=`uniform vec3 diffuse;
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
}`,Jm=`#define LAMBERT
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
}`,$m=`#define LAMBERT
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
}`,Km=`#define MATCAP
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
}`,jm=`#define MATCAP
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
}`,Qm=`#define NORMAL
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
}`,tg=`#define NORMAL
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
}`,eg=`#define PHONG
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
}`,ng=`#define PHONG
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
}`,ig=`#define STANDARD
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
}`,sg=`#define STANDARD
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
}`,rg=`#define TOON
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
}`,og=`#define TOON
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
}`,ag=`uniform float size;
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
}`,cg=`uniform vec3 diffuse;
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
}`,lg=`#include <common>
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
}`,hg=`uniform vec3 color;
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
}`,ug=`uniform float rotation;
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
}`,dg=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:Up,alphahash_pars_fragment:Np,alphamap_fragment:Op,alphamap_pars_fragment:Fp,alphatest_fragment:zp,alphatest_pars_fragment:Bp,aomap_fragment:Hp,aomap_pars_fragment:kp,batching_pars_vertex:Vp,batching_vertex:Gp,begin_vertex:Wp,beginnormal_vertex:Xp,bsdfs:Yp,iridescence_fragment:qp,bumpmap_pars_fragment:Zp,clipping_planes_fragment:Jp,clipping_planes_pars_fragment:$p,clipping_planes_pars_vertex:Kp,clipping_planes_vertex:jp,color_fragment:Qp,color_pars_fragment:t0,color_pars_vertex:e0,color_vertex:n0,common:i0,cube_uv_reflection_fragment:s0,defaultnormal_vertex:r0,displacementmap_pars_vertex:o0,displacementmap_vertex:a0,emissivemap_fragment:c0,emissivemap_pars_fragment:l0,colorspace_fragment:h0,colorspace_pars_fragment:u0,envmap_fragment:d0,envmap_common_pars_fragment:f0,envmap_pars_fragment:p0,envmap_pars_vertex:m0,envmap_physical_pars_fragment:T0,envmap_vertex:g0,fog_vertex:x0,fog_pars_vertex:_0,fog_fragment:y0,fog_pars_fragment:v0,gradientmap_pars_fragment:M0,lightmap_pars_fragment:E0,lights_lambert_fragment:b0,lights_lambert_pars_fragment:S0,lights_pars_begin:w0,lights_toon_fragment:A0,lights_toon_pars_fragment:R0,lights_phong_fragment:C0,lights_phong_pars_fragment:P0,lights_physical_fragment:I0,lights_physical_pars_fragment:D0,lights_fragment_begin:L0,lights_fragment_maps:U0,lights_fragment_end:N0,logdepthbuf_fragment:O0,logdepthbuf_pars_fragment:F0,logdepthbuf_pars_vertex:z0,logdepthbuf_vertex:B0,map_fragment:H0,map_pars_fragment:k0,map_particle_fragment:V0,map_particle_pars_fragment:G0,metalnessmap_fragment:W0,metalnessmap_pars_fragment:X0,morphinstance_vertex:Y0,morphcolor_vertex:q0,morphnormal_vertex:Z0,morphtarget_pars_vertex:J0,morphtarget_vertex:$0,normal_fragment_begin:K0,normal_fragment_maps:j0,normal_pars_fragment:Q0,normal_pars_vertex:tm,normal_vertex:em,normalmap_pars_fragment:nm,clearcoat_normal_fragment_begin:im,clearcoat_normal_fragment_maps:sm,clearcoat_pars_fragment:rm,iridescence_pars_fragment:om,opaque_fragment:am,packing:cm,premultiplied_alpha_fragment:lm,project_vertex:hm,dithering_fragment:um,dithering_pars_fragment:dm,roughnessmap_fragment:fm,roughnessmap_pars_fragment:pm,shadowmap_pars_fragment:mm,shadowmap_pars_vertex:gm,shadowmap_vertex:xm,shadowmask_pars_fragment:_m,skinbase_vertex:ym,skinning_pars_vertex:vm,skinning_vertex:Mm,skinnormal_vertex:Em,specularmap_fragment:bm,specularmap_pars_fragment:Sm,tonemapping_fragment:wm,tonemapping_pars_fragment:Tm,transmission_fragment:Am,transmission_pars_fragment:Rm,uv_pars_fragment:Cm,uv_pars_vertex:Pm,uv_vertex:Im,worldpos_vertex:Dm,background_vert:Lm,background_frag:Um,backgroundCube_vert:Nm,backgroundCube_frag:Om,cube_vert:Fm,cube_frag:zm,depth_vert:Bm,depth_frag:Hm,distanceRGBA_vert:km,distanceRGBA_frag:Vm,equirect_vert:Gm,equirect_frag:Wm,linedashed_vert:Xm,linedashed_frag:Ym,meshbasic_vert:qm,meshbasic_frag:Zm,meshlambert_vert:Jm,meshlambert_frag:$m,meshmatcap_vert:Km,meshmatcap_frag:jm,meshnormal_vert:Qm,meshnormal_frag:tg,meshphong_vert:eg,meshphong_frag:ng,meshphysical_vert:ig,meshphysical_frag:sg,meshtoon_vert:rg,meshtoon_frag:og,points_vert:ag,points_frag:cg,shadow_vert:lg,shadow_frag:hg,sprite_vert:ug,sprite_frag:dg},Lt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},si={basic:{uniforms:vn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:vn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:vn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:vn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:vn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:vn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:vn([Lt.points,Lt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:vn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:vn([Lt.common,Lt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:vn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:vn([Lt.sprite,Lt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:vn([Lt.common,Lt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:vn([Lt.lights,Lt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};si.physical={uniforms:vn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};var ko={r:0,b:0,g:0},os=new ci,fg=new be;function pg(i,t,e,n,s,r,o){let a=new Qt(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?e:t).get(y)),y}function _(b){let y=!1,M=g(b);M===null?f(a,c):M&&M.isColor&&(f(M,1),y=!0);let U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,y){let M=g(y);M&&(M.isCubeTexture||M.mapping===Da)?(h===void 0&&(h=new st(new We(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:cr(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),os.copy(y.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(fg.makeRotationFromEuler(os)),h.material.toneMapped=ve.getTransfer(M.colorSpace)!==Pe,(u!==M||d!==M.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,p=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new st(new Yi(2,2),new Hn({name:"BackgroundMaterial",uniforms:cr(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ve.getTransfer(M.colorSpace)!==Pe,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,p=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function f(b,y){b.getRGB(ko,Md(i)),n.buffers.color.setClear(ko.r,ko.g,ko.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),c=y,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,f(a,c)},render:_,addToRenderList:m}}function mg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(w,z,B,H,Z){let W=!1,K=u(H,B,z);r!==K&&(r=K,l(r.object)),W=p(w,H,B,Z),W&&g(w,H,B,Z),Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,M(w,z,B,H),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function c(){return i.createVertexArray()}function l(w){return i.bindVertexArray(w)}function h(w){return i.deleteVertexArray(w)}function u(w,z,B){let H=B.wireframe===!0,Z=n[w.id];Z===void 0&&(Z={},n[w.id]=Z);let W=Z[z.id];W===void 0&&(W={},Z[z.id]=W);let K=W[H];return K===void 0&&(K=d(c()),W[H]=K),K}function d(w){let z=[],B=[],H=[];for(let Z=0;Z<e;Z++)z[Z]=0,B[Z]=0,H[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:B,attributeDivisors:H,object:w,attributes:{},index:null}}function p(w,z,B,H){let Z=r.attributes,W=z.attributes,K=0,mt=B.getAttributes();for(let j in mt)if(mt[j].location>=0){let Rt=Z[j],It=W[j];if(It===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(It=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(It=w.instanceColor)),Rt===void 0||Rt.attribute!==It||It&&Rt.data!==It.data)return!0;K++}return r.attributesNum!==K||r.index!==H}function g(w,z,B,H){let Z={},W=z.attributes,K=0,mt=B.getAttributes();for(let j in mt)if(mt[j].location>=0){let Rt=W[j];Rt===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(Rt=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(Rt=w.instanceColor));let It={};It.attribute=Rt,Rt&&Rt.data&&(It.data=Rt.data),Z[j]=It,K++}r.attributes=Z,r.attributesNum=K,r.index=H}function _(){let w=r.newAttributes;for(let z=0,B=w.length;z<B;z++)w[z]=0}function m(w){f(w,0)}function f(w,z){let B=r.newAttributes,H=r.enabledAttributes,Z=r.attributeDivisors;B[w]=1,H[w]===0&&(i.enableVertexAttribArray(w),H[w]=1),Z[w]!==z&&(i.vertexAttribDivisor(w,z),Z[w]=z)}function b(){let w=r.newAttributes,z=r.enabledAttributes;for(let B=0,H=z.length;B<H;B++)z[B]!==w[B]&&(i.disableVertexAttribArray(B),z[B]=0)}function y(w,z,B,H,Z,W,K){K===!0?i.vertexAttribIPointer(w,z,B,Z,W):i.vertexAttribPointer(w,z,B,H,Z,W)}function M(w,z,B,H){_();let Z=H.attributes,W=B.getAttributes(),K=z.defaultAttributeValues;for(let mt in W){let j=W[mt];if(j.location>=0){let at=Z[mt];if(at===void 0&&(mt==="instanceMatrix"&&w.instanceMatrix&&(at=w.instanceMatrix),mt==="instanceColor"&&w.instanceColor&&(at=w.instanceColor)),at!==void 0){let Rt=at.normalized,It=at.itemSize,Ut=t.get(at);if(Ut===void 0)continue;let pe=Ut.buffer,ut=Ut.type,bt=Ut.bytesPerElement,Ft=ut===i.INT||ut===i.UNSIGNED_INT||at.gpuType===sh;if(at.isInterleavedBufferAttribute){let wt=at.data,Zt=wt.stride,Kt=at.offset;if(wt.isInstancedInterleavedBuffer){for(let ee=0;ee<j.locationSize;ee++)f(j.location+ee,wt.meshPerAttribute);w.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let ee=0;ee<j.locationSize;ee++)m(j.location+ee);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let ee=0;ee<j.locationSize;ee++)y(j.location+ee,It/j.locationSize,ut,Rt,Zt*bt,(Kt+It/j.locationSize*ee)*bt,Ft)}else{if(at.isInstancedBufferAttribute){for(let wt=0;wt<j.locationSize;wt++)f(j.location+wt,at.meshPerAttribute);w.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let wt=0;wt<j.locationSize;wt++)m(j.location+wt);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let wt=0;wt<j.locationSize;wt++)y(j.location+wt,It/j.locationSize,ut,Rt,It*bt,It/j.locationSize*wt*bt,Ft)}}else if(K!==void 0){let Rt=K[mt];if(Rt!==void 0)switch(Rt.length){case 2:i.vertexAttrib2fv(j.location,Rt);break;case 3:i.vertexAttrib3fv(j.location,Rt);break;case 4:i.vertexAttrib4fv(j.location,Rt);break;default:i.vertexAttrib1fv(j.location,Rt)}}}}b()}function U(){L();for(let w in n){let z=n[w];for(let B in z){let H=z[B];for(let Z in H)h(H[Z].object),delete H[Z];delete z[B]}delete n[w]}}function P(w){if(n[w.id]===void 0)return;let z=n[w.id];for(let B in z){let H=z[B];for(let Z in H)h(H[Z].object),delete H[Z];delete z[B]}delete n[w.id]}function I(w){for(let z in n){let B=n[z];if(B[w.id]===void 0)continue;let H=B[w.id];for(let Z in H)h(H[Z].object),delete H[Z];delete B[w.id]}}function L(){T(),o=!0,r!==s&&(r=s,l(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:T,dispose:U,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function gg(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function c(l,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function xg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==Kn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let L=I===go&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Si&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==oi&&!L)}function c(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:U,maxSamples:P}}function _g(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Jn,a=new de,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let b=r?0:n,y=b*4,M=f.clippingState||null;c.value=M,M=h(g,d,y,p);for(let U=0;U!==y;++U)M[U]=e[U];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let f=p+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,M=p;y!==_;++y,M+=4)o.copy(u[y]).applyMatrix4(b,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function yg(i){let t=new WeakMap;function e(o,a){return a===Vc?o.mapping=sr:a===Gc&&(o.mapping=rr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Vc||a===Gc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new bl(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var fa=class extends ua{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ks=4,_u=[.125,.215,.35,.446,.526,.582],hs=20,Mc=new fa,yu=new Qt,Ec=null,bc=0,Sc=0,wc=!1,cs=(1+Math.sqrt(5))/2,Xs=1/cs,vu=[new D(-cs,Xs,0),new D(cs,Xs,0),new D(-Xs,0,cs),new D(Xs,0,cs),new D(0,cs,-Xs),new D(0,cs,Xs),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],pa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ec=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ec,bc,Sc),this._renderer.xr.enabled=wc,t.scissorTest=!1,Vo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===sr||t.mapping===rr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ec=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:go,format:Kn,colorSpace:ur,depthBuffer:!1},s=Mu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vg(r)),this._blurMaterial=Mg(r,t,e)}return s}_compileMaterial(t){let e=new st(this._lodPlanes[0],t);this._renderer.compile(e,Mc)}_sceneToCubeUV(t,e,n,s){let a=new Qe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(yu),h.toneMapping=Gi,h.autoClear=!1;let p=new ke({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new st(new We,p),_=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(yu),_=!0);for(let f=0;f<6;f++){let b=f%3;b===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):b===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let y=this._cubeSize;Vo(s,b*y,f>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===sr||t.mapping===rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new st(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Vo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Mc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=vu[(s-r-1)%vu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new st(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*hs-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):hs;m>hs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hs}`);let f=[],b=0;for(let I=0;I<hs;++I){let L=I/_,T=Math.exp(-L*L/2);f.push(T),I===0?b+=T:I<m&&(b+=2*T)}for(let I=0;I<f.length;I++)f[I]=f[I]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let M=this._sizeLods[s],U=3*M*(s>y-Ks?s-y+Ks:0),P=4*(this._cubeSize-M);Vo(e,U,P,3*M,2*M),c.setRenderTarget(e),c.render(u,Mc)}};function vg(i){let t=[],e=[],n=[],s=i,r=i-Ks+1+_u.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ks?c=_u[o-i+Ks-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,b=new Float32Array(_*g*p),y=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let P=0;P<p;P++){let I=P%3*2/3-1,L=P>2?0:-1,T=[I,L,0,I+2/3,L,0,I+2/3,L+1,0,I,L,0,I+2/3,L+1,0,I,L+1,0];b.set(T,_*g*P),y.set(d,m*g*P);let w=[P,P,P,P,P,P];M.set(w,f*g*P)}let U=new Te;U.setAttribute("position",new tn(b,_)),U.setAttribute("uv",new tn(y,m)),U.setAttribute("faceIndex",new tn(M,f)),t.push(U),s>Ks&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Mu(i,t,e){let n=new Ti(i,t,e);return n.texture.mapping=Da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Mg(i,t,e){let n=new Float32Array(hs),s=new D(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:dh(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Eu(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dh(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function bu(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function dh(){return`

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
	`}function Eg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Vc||c===Gc,h=c===sr||c===rr;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new pa(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new pa(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function bg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Fr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Sg(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){let d=[],p=u.index,g=u.attributes.position,_=0;if(p!==null){let b=p.array;_=p.version;for(let y=0,M=b.length;y<M;y+=3){let U=b[y+0],P=b[y+1],I=b[y+2];d.push(U,P,P,I,I,U)}}else if(g!==void 0){let b=g.array;_=g.version;for(let y=0,M=b.length/3-1;y<M;y+=3){let U=y+0,P=y+1,I=y+2;d.push(U,P,P,I,I,U)}}else return;let m=new(yd(d)?ha:la)(d,1);m.version=_;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function wg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let b=0;b<g;b++)f+=p[b]*_[b];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Tg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ag(i,t,e){let n=new WeakMap,s=new Ie;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let T=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],y=0;p===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let M=a.attributes.position.count*y,U=1;M>t.maxTextureSize&&(U=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let P=new Float32Array(M*U*4*u),I=new ca(P,M,U,u);I.type=oi,I.needsUpdate=!0;let L=y*4;for(let w=0;w<u;w++){let z=m[w],B=f[w],H=b[w],Z=M*U*4*w;for(let W=0;W<z.count;W++){let K=W*L;p===!0&&(s.fromBufferAttribute(z,W),P[Z+K+0]=s.x,P[Z+K+1]=s.y,P[Z+K+2]=s.z,P[Z+K+3]=0),g===!0&&(s.fromBufferAttribute(B,W),P[Z+K+4]=s.x,P[Z+K+5]=s.y,P[Z+K+6]=s.z,P[Z+K+7]=0),_===!0&&(s.fromBufferAttribute(H,W),P[Z+K+8]=s.x,P[Z+K+9]=s.y,P[Z+K+10]=s.z,P[Z+K+11]=H.itemSize===4?s.w:1)}}d={count:u,texture:I,size:new pt(M,U)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Rg(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var ma=class extends Mn{constructor(t,e,n,s,r,o,a,c,l,h=tr){if(h!==tr&&h!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===tr&&(n=fs),n===void 0&&h===ar&&(n=or),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:hn,this.minFilter=c!==void 0?c:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},bd=new Mn,Su=new ma(1,1),Sd=new ca,wd=new Ml,Td=new da,wu=[],Tu=[],Au=new Float32Array(16),Ru=new Float32Array(9),Cu=new Float32Array(4);function dr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=wu[s];if(r===void 0&&(r=new Float32Array(s),wu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Je(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ua(i,t){let e=Tu[t];e===void 0&&(e=new Int32Array(t),Tu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Cg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2fv(this.addr,t),Je(e,t)}}function Ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;i.uniform3fv(this.addr,t),Je(e,t)}}function Dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4fv(this.addr,t),Je(e,t)}}function Lg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;Cu.set(n),i.uniformMatrix2fv(this.addr,!1,Cu),Je(e,n)}}function Ug(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;Ru.set(n),i.uniformMatrix3fv(this.addr,!1,Ru),Je(e,n)}}function Ng(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;Au.set(n),i.uniformMatrix4fv(this.addr,!1,Au),Je(e,n)}}function Og(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2iv(this.addr,t),Je(e,t)}}function zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3iv(this.addr,t),Je(e,t)}}function Bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4iv(this.addr,t),Je(e,t)}}function Hg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2uiv(this.addr,t),Je(e,t)}}function Vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3uiv(this.addr,t),Je(e,t)}}function Gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4uiv(this.addr,t),Je(e,t)}}function Wg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Su.compareFunction=xd,r=Su):r=bd,e.setTexture2D(t||r,s)}function Xg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||wd,s)}function Yg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Td,s)}function qg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Sd,s)}function Zg(i){switch(i){case 5126:return Cg;case 35664:return Pg;case 35665:return Ig;case 35666:return Dg;case 35674:return Lg;case 35675:return Ug;case 35676:return Ng;case 5124:case 35670:return Og;case 35667:case 35671:return Fg;case 35668:case 35672:return zg;case 35669:case 35673:return Bg;case 5125:return Hg;case 36294:return kg;case 36295:return Vg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return qg}}function Jg(i,t){i.uniform1fv(this.addr,t)}function $g(i,t){let e=dr(t,this.size,2);i.uniform2fv(this.addr,e)}function Kg(i,t){let e=dr(t,this.size,3);i.uniform3fv(this.addr,e)}function jg(i,t){let e=dr(t,this.size,4);i.uniform4fv(this.addr,e)}function Qg(i,t){let e=dr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function tx(i,t){let e=dr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ex(i,t){let e=dr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function nx(i,t){i.uniform1iv(this.addr,t)}function ix(i,t){i.uniform2iv(this.addr,t)}function sx(i,t){i.uniform3iv(this.addr,t)}function rx(i,t){i.uniform4iv(this.addr,t)}function ox(i,t){i.uniform1uiv(this.addr,t)}function ax(i,t){i.uniform2uiv(this.addr,t)}function cx(i,t){i.uniform3uiv(this.addr,t)}function lx(i,t){i.uniform4uiv(this.addr,t)}function hx(i,t,e){let n=this.cache,s=t.length,r=Ua(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||bd,r[o])}function ux(i,t,e){let n=this.cache,s=t.length,r=Ua(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||wd,r[o])}function dx(i,t,e){let n=this.cache,s=t.length,r=Ua(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Td,r[o])}function fx(i,t,e){let n=this.cache,s=t.length,r=Ua(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Sd,r[o])}function px(i){switch(i){case 5126:return Jg;case 35664:return $g;case 35665:return Kg;case 35666:return jg;case 35674:return Qg;case 35675:return tx;case 35676:return ex;case 5124:case 35670:return nx;case 35667:case 35671:return ix;case 35668:case 35672:return sx;case 35669:case 35673:return rx;case 5125:return ox;case 36294:return ax;case 36295:return cx;case 36296:return lx;case 35678:case 36198:case 36298:case 36306:case 35682:return hx;case 35679:case 36299:case 36307:return ux;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return fx}}var Sl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zg(e.type)}},wl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=px(e.type)}},Tl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Tc=/(\w+)(\])?(\[|\.)?/g;function Pu(i,t){i.seq.push(t),i.map[t.id]=t}function mx(i,t,e){let n=i.name,s=n.length;for(Tc.lastIndex=0;;){let r=Tc.exec(n),o=Tc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Pu(e,l===void 0?new Sl(a,i,t):new wl(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Tl(a),Pu(e,u)),e=u}}}var nr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);mx(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Iu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var gx=37297,xx=0;function _x(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Du=new de;function yx(i){ve._getMatrix(Du,ve.workingColorSpace,i);let t=`mat3( ${Du.elements.map(e=>e.toFixed(4))} )`;switch(ve.getTransfer(i)){case La:return[t,"LinearTransferOETF"];case Pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Lu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+_x(i.getShaderSource(t),o)}else return s}function vx(i,t){let e=yx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Mx(i,t){let e;switch(t){case If:e="Linear";break;case Df:e="Reinhard";break;case Lf:e="Cineon";break;case Uf:e="ACESFilmic";break;case Of:e="AgX";break;case Ff:e="Neutral";break;case Nf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Go=new D;function Ex(){ve.getLuminanceCoefficients(Go);let i=Go.x.toFixed(4),t=Go.y.toFixed(4),e=Go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function Sx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function wx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function zr(i){return i!==""}function Uu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Tx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Al(i){return i.replace(Tx,Rx)}var Ax=new Map;function Rx(i,t){let e=fe[t];if(e===void 0){let n=Ax.get(t);if(n!==void 0)e=fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Al(e)}var Cx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ou(i){return i.replace(Cx,Px)}function Px(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Ix(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===rd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ia?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mi&&(t="SHADOWMAP_TYPE_VSM"),t}function Dx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case sr:case rr:t="ENVMAP_TYPE_CUBE";break;case Da:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Lx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case rr:t="ENVMAP_MODE_REFRACTION";break}return t}function Ux(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ih:t="ENVMAP_BLENDING_MULTIPLY";break;case Cf:t="ENVMAP_BLENDING_MIX";break;case Pf:t="ENVMAP_BLENDING_ADD";break}return t}function Nx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ox(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Ix(e),l=Dx(e),h=Lx(e),u=Ux(e),d=Nx(e),p=bx(e),g=Sx(r),_=s.createProgram(),m,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zr).join(`
`),f.length>0&&(f+=`
`)):(m=[Fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),f=[Fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gi?"#define TONE_MAPPING":"",e.toneMapping!==Gi?fe.tonemapping_pars_fragment:"",e.toneMapping!==Gi?Mx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,vx("linearToOutputTexel",e.outputColorSpace),Ex(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zr).join(`
`)),o=Al(o),o=Uu(o,e),o=Nu(o,e),a=Al(a),a=Uu(a,e),a=Nu(a,e),o=Ou(o),a=Ou(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===$h?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let y=b+m+o,M=b+f+a,U=Iu(s,s.VERTEX_SHADER,y),P=Iu(s,s.FRAGMENT_SHADER,M);s.attachShader(_,U),s.attachShader(_,P),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function I(z){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(_).trim(),H=s.getShaderInfoLog(U).trim(),Z=s.getShaderInfoLog(P).trim(),W=!0,K=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,U,P);else{let mt=Lu(s,U,"vertex"),j=Lu(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+B+`
`+mt+`
`+j)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(H===""||Z==="")&&(K=!1);K&&(z.diagnostics={runnable:W,programLog:B,vertexShader:{log:H,prefix:m},fragmentShader:{log:Z,prefix:f}})}s.deleteShader(U),s.deleteShader(P),L=new nr(s,_),T=wx(s,_)}let L;this.getUniforms=function(){return L===void 0&&I(this),L};let T;this.getAttributes=function(){return T===void 0&&I(this),T};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(_,gx)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xx++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=P,this}var Fx=0,Rl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Cl(t),e.set(t,n)),n}},Cl=class{constructor(t){this.id=Fx++,this.code=t,this.usedTimes=0}};function zx(i,t,e,n,s,r,o){let a=new Jr,c=new Rl,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return l.add(T),T===0?"uv":`uv${T}`}function m(T,w,z,B,H){let Z=B.fog,W=H.geometry,K=T.isMeshStandardMaterial?B.environment:null,mt=(T.isMeshStandardMaterial?e:t).get(T.envMap||K),j=mt&&mt.mapping===Da?mt.image.height:null,at=g[T.type];T.precision!==null&&(p=s.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));let Rt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,It=Rt!==void 0?Rt.length:0,Ut=0;W.morphAttributes.position!==void 0&&(Ut=1),W.morphAttributes.normal!==void 0&&(Ut=2),W.morphAttributes.color!==void 0&&(Ut=3);let pe,ut,bt,Ft;if(at){let ue=si[at];pe=ue.vertexShader,ut=ue.fragmentShader}else pe=T.vertexShader,ut=T.fragmentShader,c.update(T),bt=c.getVertexShaderID(T),Ft=c.getFragmentShaderID(T);let wt=i.getRenderTarget(),Zt=i.state.buffers.depth.getReversed(),Kt=H.isInstancedMesh===!0,ee=H.isBatchedMesh===!0,me=!!T.map,ft=!!T.matcap,Mt=!!mt,F=!!T.aoMap,kt=!!T.lightMap,_t=!!T.bumpMap,zt=!!T.normalMap,Q=!!T.displacementMap,xt=!!T.emissiveMap,ht=!!T.metalnessMap,C=!!T.roughnessMap,S=T.anisotropy>0,V=T.clearcoat>0,$=T.dispersion>0,it=T.iridescence>0,tt=T.sheen>0,At=T.transmission>0,ot=S&&!!T.anisotropyMap,Et=V&&!!T.clearcoatMap,Tt=V&&!!T.clearcoatNormalMap,rt=V&&!!T.clearcoatRoughnessMap,Dt=it&&!!T.iridescenceMap,jt=it&&!!T.iridescenceThicknessMap,$t=tt&&!!T.sheenColorMap,Bt=tt&&!!T.sheenRoughnessMap,ae=!!T.specularMap,ie=!!T.specularColorMap,Re=!!T.specularIntensityMap,X=At&&!!T.transmissionMap,Ct=At&&!!T.thicknessMap,ct=!!T.gradientMap,gt=!!T.alphaMap,Pt=T.alphaTest>0,Nt=!!T.alphaHash,ce=!!T.extensions,Ue=Gi;T.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(Ue=i.toneMapping);let Ye={shaderID:at,shaderType:T.type,shaderName:T.name,vertexShader:pe,fragmentShader:ut,defines:T.defines,customVertexShaderID:bt,customFragmentShaderID:Ft,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:ee,batchingColor:ee&&H._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&H.instanceColor!==null,instancingMorph:Kt&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:wt===null?i.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:ur,alphaToCoverage:!!T.alphaToCoverage,map:me,matcap:ft,envMap:Mt,envMapMode:Mt&&mt.mapping,envMapCubeUVHeight:j,aoMap:F,lightMap:kt,bumpMap:_t,normalMap:zt,displacementMap:d&&Q,emissiveMap:xt,normalMapObjectSpace:zt&&T.normalMapType===kf,normalMapTangentSpace:zt&&T.normalMapType===gd,metalnessMap:ht,roughnessMap:C,anisotropy:S,anisotropyMap:ot,clearcoat:V,clearcoatMap:Et,clearcoatNormalMap:Tt,clearcoatRoughnessMap:rt,dispersion:$,iridescence:it,iridescenceMap:Dt,iridescenceThicknessMap:jt,sheen:tt,sheenColorMap:$t,sheenRoughnessMap:Bt,specularMap:ae,specularColorMap:ie,specularIntensityMap:Re,transmission:At,transmissionMap:X,thicknessMap:Ct,gradientMap:ct,opaque:T.transparent===!1&&T.blending===Qs&&T.alphaToCoverage===!1,alphaMap:gt,alphaTest:Pt,alphaHash:Nt,combine:T.combine,mapUv:me&&_(T.map.channel),aoMapUv:F&&_(T.aoMap.channel),lightMapUv:kt&&_(T.lightMap.channel),bumpMapUv:_t&&_(T.bumpMap.channel),normalMapUv:zt&&_(T.normalMap.channel),displacementMapUv:Q&&_(T.displacementMap.channel),emissiveMapUv:xt&&_(T.emissiveMap.channel),metalnessMapUv:ht&&_(T.metalnessMap.channel),roughnessMapUv:C&&_(T.roughnessMap.channel),anisotropyMapUv:ot&&_(T.anisotropyMap.channel),clearcoatMapUv:Et&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&_(T.sheenRoughnessMap.channel),specularMapUv:ae&&_(T.specularMap.channel),specularColorMapUv:ie&&_(T.specularColorMap.channel),specularIntensityMapUv:Re&&_(T.specularIntensityMap.channel),transmissionMapUv:X&&_(T.transmissionMap.channel),thicknessMapUv:Ct&&_(T.thicknessMap.channel),alphaMapUv:gt&&_(T.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(zt||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!W.attributes.uv&&(me||gt),fog:!!Z,useFog:T.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Zt,skinning:H.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:Ut,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ue,decodeVideoTexture:me&&T.map.isVideoTexture===!0&&ve.getTransfer(T.map.colorSpace)===Pe,decodeVideoTextureEmissive:xt&&T.emissiveMap.isVideoTexture===!0&&ve.getTransfer(T.emissiveMap.colorSpace)===Pe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===cn,flipSided:T.side===ln,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ce&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&T.extensions.multiDraw===!0||ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ye.vertexUv1s=l.has(1),Ye.vertexUv2s=l.has(2),Ye.vertexUv3s=l.has(3),l.clear(),Ye}function f(T){let w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(let z in T.defines)w.push(z),w.push(T.defines[z]);return T.isRawShaderMaterial===!1&&(b(w,T),y(w,T),w.push(i.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function b(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function y(T,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),T.push(a.mask)}function M(T){let w=g[T.type],z;if(w){let B=si[w];z=Rp.clone(B.uniforms)}else z=T.uniforms;return z}function U(T,w){let z;for(let B=0,H=h.length;B<H;B++){let Z=h[B];if(Z.cacheKey===w){z=Z,++z.usedTimes;break}}return z===void 0&&(z=new Ox(i,w,T,r),h.push(z)),z}function P(T){if(--T.usedTimes===0){let w=h.indexOf(T);h[w]=h[h.length-1],h.pop(),T.destroy()}}function I(T){c.remove(T)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:U,releaseProgram:P,releaseShaderCache:I,programs:h,dispose:L}}function Bx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Hx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function zu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Bu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,g,_,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function a(u,d,p,g,_,m){let f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(u,d,p,g,_,m){let f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||Hx),n.length>1&&n.sort(d||zu),s.length>1&&s.sort(d||zu)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function kx(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Bu,i.set(n,[o])):s>=r.length?(o=new Bu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Vx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Qt};break;case"SpotLight":e={position:new D,direction:new D,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function Gx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Wx=0;function Xx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Yx(i){let t=new Vx,e=Gx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let s=new D,r=new be,o=new be;function a(l){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,b=0,y=0,M=0,U=0,P=0,I=0;l.sort(Xx);for(let T=0,w=l.length;T<w;T++){let z=l[T],B=z.color,H=z.intensity,Z=z.distance,W=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=B.r*H,u+=B.g*H,d+=B.b*H;else if(z.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(z.sh.coefficients[K],H);I++}else if(z.isDirectionalLight){let K=t.get(z);if(K.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let mt=z.shadow,j=e.get(z);j.shadowIntensity=mt.intensity,j.shadowBias=mt.bias,j.shadowNormalBias=mt.normalBias,j.shadowRadius=mt.radius,j.shadowMapSize=mt.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=z.shadow.matrix,b++}n.directional[p]=K,p++}else if(z.isSpotLight){let K=t.get(z);K.position.setFromMatrixPosition(z.matrixWorld),K.color.copy(B).multiplyScalar(H),K.distance=Z,K.coneCos=Math.cos(z.angle),K.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),K.decay=z.decay,n.spot[_]=K;let mt=z.shadow;if(z.map&&(n.spotLightMap[U]=z.map,U++,mt.updateMatrices(z),z.castShadow&&P++),n.spotLightMatrix[_]=mt.matrix,z.castShadow){let j=e.get(z);j.shadowIntensity=mt.intensity,j.shadowBias=mt.bias,j.shadowNormalBias=mt.normalBias,j.shadowRadius=mt.radius,j.shadowMapSize=mt.mapSize,n.spotShadow[_]=j,n.spotShadowMap[_]=W,M++}_++}else if(z.isRectAreaLight){let K=t.get(z);K.color.copy(B).multiplyScalar(H),K.halfWidth.set(z.width*.5,0,0),K.halfHeight.set(0,z.height*.5,0),n.rectArea[m]=K,m++}else if(z.isPointLight){let K=t.get(z);if(K.color.copy(z.color).multiplyScalar(z.intensity),K.distance=z.distance,K.decay=z.decay,z.castShadow){let mt=z.shadow,j=e.get(z);j.shadowIntensity=mt.intensity,j.shadowBias=mt.bias,j.shadowNormalBias=mt.normalBias,j.shadowRadius=mt.radius,j.shadowMapSize=mt.mapSize,j.shadowCameraNear=mt.camera.near,j.shadowCameraFar=mt.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=z.shadow.matrix,y++}n.point[g]=K,g++}else if(z.isHemisphereLight){let K=t.get(z);K.skyColor.copy(z.color).multiplyScalar(H),K.groundColor.copy(z.groundColor).multiplyScalar(H),n.hemi[f]=K,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==b||L.numPointShadows!==y||L.numSpotShadows!==M||L.numSpotMaps!==U||L.numLightProbes!==I)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+U-P,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=I,L.directionalLength=p,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=b,L.numPointShadows=y,L.numSpotShadows=M,L.numSpotMaps=U,L.numLightProbes=I,n.version=Wx++)}function c(l,h){let u=0,d=0,p=0,g=0,_=0,m=h.matrixWorldInverse;for(let f=0,b=l.length;f<b;f++){let y=l[f];if(y.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(y.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let M=n.hemi[_];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Hu(i){let t=new Yx(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function qx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Hu(i),t.set(s,[a])):r>=o.length?(a=new Hu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Pl=class extends Ri{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Il=class extends Ri{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Zx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jx=`uniform sampler2D shadow_pass;
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
}`;function $x(i,t,e){let n=new $r,s=new pt,r=new pt,o=new Ie,a=new Pl({depthPacking:Hf}),c=new Il,l={},h=e.maxTextureSize,u={[Wi]:ln,[ln]:Wi,[cn]:cn},d=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:Zx,fragmentShader:Jx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Te;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new st(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rd;let f=this.type;this.render=function(P,I,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;let T=i.getRenderTarget(),w=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Vi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let H=f!==Mi&&this.type===Mi,Z=f===Mi&&this.type!==Mi;for(let W=0,K=P.length;W<K;W++){let mt=P[W],j=mt.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",mt,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let at=j.getFrameExtents();if(s.multiply(at),r.copy(j.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,j.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,j.mapSize.y=r.y)),j.map===null||H===!0||Z===!0){let It=this.type!==Mi?{minFilter:hn,magFilter:hn}:{};j.map!==null&&j.map.dispose(),j.map=new Ti(s.x,s.y,It),j.map.texture.name=mt.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();let Rt=j.getViewportCount();for(let It=0;It<Rt;It++){let Ut=j.getViewport(It);o.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),B.viewport(o),j.updateMatrices(mt,It),n=j.getFrustum(),M(I,L,j.camera,mt,this.type)}j.isPointLightShadow!==!0&&this.type===Mi&&b(j,L),j.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(T,w,z)};function b(P,I){let L=t.update(_);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ti(s.x,s.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(I,null,L,d,_,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(I,null,L,p,_,null)}function y(P,I,L,T){let w=null,z=L.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(z!==void 0)w=z;else if(w=L.isPointLight===!0?c:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let B=w.uuid,H=I.uuid,Z=l[B];Z===void 0&&(Z={},l[B]=Z);let W=Z[H];W===void 0&&(W=w.clone(),Z[H]=W,I.addEventListener("dispose",U)),w=W}if(w.visible=I.visible,w.wireframe=I.wireframe,T===Mi?w.side=I.shadowSide!==null?I.shadowSide:I.side:w.side=I.shadowSide!==null?I.shadowSide:u[I.side],w.alphaMap=I.alphaMap,w.alphaTest=I.alphaTest,w.map=I.map,w.clipShadows=I.clipShadows,w.clippingPlanes=I.clippingPlanes,w.clipIntersection=I.clipIntersection,w.displacementMap=I.displacementMap,w.displacementScale=I.displacementScale,w.displacementBias=I.displacementBias,w.wireframeLinewidth=I.wireframeLinewidth,w.linewidth=I.linewidth,L.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let B=i.properties.get(w);B.light=L}return w}function M(P,I,L,T,w){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&w===Mi)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,P.matrixWorld);let H=t.update(P),Z=P.material;if(Array.isArray(Z)){let W=H.groups;for(let K=0,mt=W.length;K<mt;K++){let j=W[K],at=Z[j.materialIndex];if(at&&at.visible){let Rt=y(P,at,T,w);P.onBeforeShadow(i,P,I,L,H,Rt,j),i.renderBufferDirect(L,null,H,Rt,P,j),P.onAfterShadow(i,P,I,L,H,Rt,j)}}}else if(Z.visible){let W=y(P,Z,T,w);P.onBeforeShadow(i,P,I,L,H,W,null),i.renderBufferDirect(L,null,H,W,P,null),P.onAfterShadow(i,P,I,L,H,W,null)}}let B=P.children;for(let H=0,Z=B.length;H<Z;H++)M(B[H],I,L,T,w)}function U(P){P.target.removeEventListener("dispose",U);for(let L in l){let T=l[L],w=P.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}var Kx={[Nc]:Oc,[Fc]:Hc,[zc]:kc,[ir]:Bc,[Oc]:Nc,[Hc]:Fc,[kc]:zc,[Bc]:ir};function jx(i,t){function e(){let X=!1,Ct=new Ie,ct=null,gt=new Ie(0,0,0,0);return{setMask:function(Pt){ct!==Pt&&!X&&(i.colorMask(Pt,Pt,Pt,Pt),ct=Pt)},setLocked:function(Pt){X=Pt},setClear:function(Pt,Nt,ce,Ue,Ye){Ye===!0&&(Pt*=Ue,Nt*=Ue,ce*=Ue),Ct.set(Pt,Nt,ce,Ue),gt.equals(Ct)===!1&&(i.clearColor(Pt,Nt,ce,Ue),gt.copy(Ct))},reset:function(){X=!1,ct=null,gt.set(-1,0,0,0)}}}function n(){let X=!1,Ct=!1,ct=null,gt=null,Pt=null;return{setReversed:function(Nt){if(Ct!==Nt){let ce=t.get("EXT_clip_control");Ct?ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.ZERO_TO_ONE_EXT):ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.NEGATIVE_ONE_TO_ONE_EXT);let Ue=Pt;Pt=null,this.setClear(Ue)}Ct=Nt},getReversed:function(){return Ct},setTest:function(Nt){Nt?wt(i.DEPTH_TEST):Zt(i.DEPTH_TEST)},setMask:function(Nt){ct!==Nt&&!X&&(i.depthMask(Nt),ct=Nt)},setFunc:function(Nt){if(Ct&&(Nt=Kx[Nt]),gt!==Nt){switch(Nt){case Nc:i.depthFunc(i.NEVER);break;case Oc:i.depthFunc(i.ALWAYS);break;case Fc:i.depthFunc(i.LESS);break;case ir:i.depthFunc(i.LEQUAL);break;case zc:i.depthFunc(i.EQUAL);break;case Bc:i.depthFunc(i.GEQUAL);break;case Hc:i.depthFunc(i.GREATER);break;case kc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=Nt}},setLocked:function(Nt){X=Nt},setClear:function(Nt){Pt!==Nt&&(Ct&&(Nt=1-Nt),i.clearDepth(Nt),Pt=Nt)},reset:function(){X=!1,ct=null,gt=null,Pt=null,Ct=!1}}}function s(){let X=!1,Ct=null,ct=null,gt=null,Pt=null,Nt=null,ce=null,Ue=null,Ye=null;return{setTest:function(ue){X||(ue?wt(i.STENCIL_TEST):Zt(i.STENCIL_TEST))},setMask:function(ue){Ct!==ue&&!X&&(i.stencilMask(ue),Ct=ue)},setFunc:function(ue,wn,Nn){(ct!==ue||gt!==wn||Pt!==Nn)&&(i.stencilFunc(ue,wn,Nn),ct=ue,gt=wn,Pt=Nn)},setOp:function(ue,wn,Nn){(Nt!==ue||ce!==wn||Ue!==Nn)&&(i.stencilOp(ue,wn,Nn),Nt=ue,ce=wn,Ue=Nn)},setLocked:function(ue){X=ue},setClear:function(ue){Ye!==ue&&(i.clearStencil(ue),Ye=ue)},reset:function(){X=!1,Ct=null,ct=null,gt=null,Pt=null,Nt=null,ce=null,Ue=null,Ye=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,b=null,y=null,M=null,U=null,P=null,I=new Qt(0,0,0),L=0,T=!1,w=null,z=null,B=null,H=null,Z=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,mt=0,j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(mt=parseFloat(/^WebGL (\d)/.exec(j)[1]),K=mt>=1):j.indexOf("OpenGL ES")!==-1&&(mt=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),K=mt>=2);let at=null,Rt={},It=i.getParameter(i.SCISSOR_BOX),Ut=i.getParameter(i.VIEWPORT),pe=new Ie().fromArray(It),ut=new Ie().fromArray(Ut);function bt(X,Ct,ct,gt){let Pt=new Uint8Array(4),Nt=i.createTexture();i.bindTexture(X,Nt),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ce=0;ce<ct;ce++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(Ct,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(Ct+ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return Nt}let Ft={};Ft[i.TEXTURE_2D]=bt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ft[i.TEXTURE_CUBE_MAP]=bt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ft[i.TEXTURE_2D_ARRAY]=bt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ft[i.TEXTURE_3D]=bt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),wt(i.DEPTH_TEST),o.setFunc(ir),_t(!1),zt(Vh),wt(i.CULL_FACE),F(Vi);function wt(X){h[X]!==!0&&(i.enable(X),h[X]=!0)}function Zt(X){h[X]!==!1&&(i.disable(X),h[X]=!1)}function Kt(X,Ct){return u[X]!==Ct?(i.bindFramebuffer(X,Ct),u[X]=Ct,X===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ct),X===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ct),!0):!1}function ee(X,Ct){let ct=p,gt=!1;if(X){ct=d.get(Ct),ct===void 0&&(ct=[],d.set(Ct,ct));let Pt=X.textures;if(ct.length!==Pt.length||ct[0]!==i.COLOR_ATTACHMENT0){for(let Nt=0,ce=Pt.length;Nt<ce;Nt++)ct[Nt]=i.COLOR_ATTACHMENT0+Nt;ct.length=Pt.length,gt=!0}}else ct[0]!==i.BACK&&(ct[0]=i.BACK,gt=!0);gt&&i.drawBuffers(ct)}function me(X){return g!==X?(i.useProgram(X),g=X,!0):!1}let ft={[ls]:i.FUNC_ADD,[df]:i.FUNC_SUBTRACT,[ff]:i.FUNC_REVERSE_SUBTRACT};ft[pf]=i.MIN,ft[mf]=i.MAX;let Mt={[gf]:i.ZERO,[xf]:i.ONE,[_f]:i.SRC_COLOR,[Lc]:i.SRC_ALPHA,[Sf]:i.SRC_ALPHA_SATURATE,[Ef]:i.DST_COLOR,[vf]:i.DST_ALPHA,[yf]:i.ONE_MINUS_SRC_COLOR,[Uc]:i.ONE_MINUS_SRC_ALPHA,[bf]:i.ONE_MINUS_DST_COLOR,[Mf]:i.ONE_MINUS_DST_ALPHA,[wf]:i.CONSTANT_COLOR,[Tf]:i.ONE_MINUS_CONSTANT_COLOR,[Af]:i.CONSTANT_ALPHA,[Rf]:i.ONE_MINUS_CONSTANT_ALPHA};function F(X,Ct,ct,gt,Pt,Nt,ce,Ue,Ye,ue){if(X===Vi){_===!0&&(Zt(i.BLEND),_=!1);return}if(_===!1&&(wt(i.BLEND),_=!0),X!==uf){if(X!==m||ue!==T){if((f!==ls||M!==ls)&&(i.blendEquation(i.FUNC_ADD),f=ls,M=ls),ue)switch(X){case Qs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gh:i.blendFunc(i.ONE,i.ONE);break;case Wh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Qs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Wh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}b=null,y=null,U=null,P=null,I.set(0,0,0),L=0,m=X,T=ue}return}Pt=Pt||Ct,Nt=Nt||ct,ce=ce||gt,(Ct!==f||Pt!==M)&&(i.blendEquationSeparate(ft[Ct],ft[Pt]),f=Ct,M=Pt),(ct!==b||gt!==y||Nt!==U||ce!==P)&&(i.blendFuncSeparate(Mt[ct],Mt[gt],Mt[Nt],Mt[ce]),b=ct,y=gt,U=Nt,P=ce),(Ue.equals(I)===!1||Ye!==L)&&(i.blendColor(Ue.r,Ue.g,Ue.b,Ye),I.copy(Ue),L=Ye),m=X,T=!1}function kt(X,Ct){X.side===cn?Zt(i.CULL_FACE):wt(i.CULL_FACE);let ct=X.side===ln;Ct&&(ct=!ct),_t(ct),X.blending===Qs&&X.transparent===!1?F(Vi):F(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);let gt=X.stencilWrite;a.setTest(gt),gt&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),xt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?wt(i.SAMPLE_ALPHA_TO_COVERAGE):Zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function _t(X){w!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),w=X)}function zt(X){X!==lf?(wt(i.CULL_FACE),X!==z&&(X===Vh?i.cullFace(i.BACK):X===hf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Zt(i.CULL_FACE),z=X}function Q(X){X!==B&&(K&&i.lineWidth(X),B=X)}function xt(X,Ct,ct){X?(wt(i.POLYGON_OFFSET_FILL),(H!==Ct||Z!==ct)&&(i.polygonOffset(Ct,ct),H=Ct,Z=ct)):Zt(i.POLYGON_OFFSET_FILL)}function ht(X){X?wt(i.SCISSOR_TEST):Zt(i.SCISSOR_TEST)}function C(X){X===void 0&&(X=i.TEXTURE0+W-1),at!==X&&(i.activeTexture(X),at=X)}function S(X,Ct,ct){ct===void 0&&(at===null?ct=i.TEXTURE0+W-1:ct=at);let gt=Rt[ct];gt===void 0&&(gt={type:void 0,texture:void 0},Rt[ct]=gt),(gt.type!==X||gt.texture!==Ct)&&(at!==ct&&(i.activeTexture(ct),at=ct),i.bindTexture(X,Ct||Ft[X]),gt.type=X,gt.texture=Ct)}function V(){let X=Rt[at];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function tt(){try{i.texSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Et(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Tt(){try{i.texStorage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Dt(){try{i.texImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function jt(){try{i.texImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $t(X){pe.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),pe.copy(X))}function Bt(X){ut.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),ut.copy(X))}function ae(X,Ct){let ct=l.get(Ct);ct===void 0&&(ct=new WeakMap,l.set(Ct,ct));let gt=ct.get(X);gt===void 0&&(gt=i.getUniformBlockIndex(Ct,X.name),ct.set(X,gt))}function ie(X,Ct){let gt=l.get(Ct).get(X);c.get(Ct)!==gt&&(i.uniformBlockBinding(Ct,gt,X.__bindingPointIndex),c.set(Ct,gt))}function Re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},at=null,Rt={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,b=null,y=null,M=null,U=null,P=null,I=new Qt(0,0,0),L=0,T=!1,w=null,z=null,B=null,H=null,Z=null,pe.set(0,0,i.canvas.width,i.canvas.height),ut.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:wt,disable:Zt,bindFramebuffer:Kt,drawBuffers:ee,useProgram:me,setBlending:F,setMaterial:kt,setFlipSided:_t,setCullFace:zt,setLineWidth:Q,setPolygonOffset:xt,setScissorTest:ht,activeTexture:C,bindTexture:S,unbindTexture:V,compressedTexImage2D:$,compressedTexImage3D:it,texImage2D:Dt,texImage3D:jt,updateUBOMapping:ae,uniformBlockBinding:ie,texStorage2D:Tt,texStorage3D:rt,texSubImage2D:tt,texSubImage3D:At,compressedTexSubImage2D:ot,compressedTexSubImage3D:Et,scissor:$t,viewport:Bt,reset:Re}}function ku(i,t,e,n){let s=Qx(n);switch(e){case hd:return i*t;case dd:return i*t;case fd:return i*t*2;case ah:return i*t/s.components*s.byteLength;case ch:return i*t/s.components*s.byteLength;case pd:return i*t*2/s.components*s.byteLength;case lh:return i*t*2/s.components*s.byteLength;case ud:return i*t*3/s.components*s.byteLength;case Kn:return i*t*4/s.components*s.byteLength;case hh:return i*t*4/s.components*s.byteLength;case ta:case ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case na:case ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yc:case Zc:return Math.max(i,16)*Math.max(t,8)/4;case Xc:case qc:return Math.max(i,8)*Math.max(t,8)/2;case Jc:case $c:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Kc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case tl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case el:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case nl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case il:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case sl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case rl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ol:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case al:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case hl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ul:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case sa:case dl:case fl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case md:case pl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ml:case gl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qx(i){switch(i){case Si:case ad:return{byteLength:1,components:1};case Yr:case cd:case go:return{byteLength:2,components:1};case rh:case oh:return{byteLength:2,components:4};case fs:case sh:case oi:return{byteLength:4,components:1};case ld:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function t_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pt,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return p?new OffscreenCanvas(C,S):Zr("canvas")}function _(C,S,V){let $=1,it=ht(C);if((it.width>V||it.height>V)&&($=V/Math.max(it.width,it.height)),$<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let tt=Math.floor($*it.width),At=Math.floor($*it.height);u===void 0&&(u=g(tt,At));let ot=S?g(tt,At):u;return ot.width=tt,ot.height=At,ot.getContext("2d").drawImage(C,0,0,tt,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+tt+"x"+At+")."),ot}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){i.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(C,S,V,$,it=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let tt=S;if(S===i.RED&&(V===i.FLOAT&&(tt=i.R32F),V===i.HALF_FLOAT&&(tt=i.R16F),V===i.UNSIGNED_BYTE&&(tt=i.R8)),S===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(tt=i.R8UI),V===i.UNSIGNED_SHORT&&(tt=i.R16UI),V===i.UNSIGNED_INT&&(tt=i.R32UI),V===i.BYTE&&(tt=i.R8I),V===i.SHORT&&(tt=i.R16I),V===i.INT&&(tt=i.R32I)),S===i.RG&&(V===i.FLOAT&&(tt=i.RG32F),V===i.HALF_FLOAT&&(tt=i.RG16F),V===i.UNSIGNED_BYTE&&(tt=i.RG8)),S===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(tt=i.RG8UI),V===i.UNSIGNED_SHORT&&(tt=i.RG16UI),V===i.UNSIGNED_INT&&(tt=i.RG32UI),V===i.BYTE&&(tt=i.RG8I),V===i.SHORT&&(tt=i.RG16I),V===i.INT&&(tt=i.RG32I)),S===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),V===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),V===i.UNSIGNED_INT&&(tt=i.RGB32UI),V===i.BYTE&&(tt=i.RGB8I),V===i.SHORT&&(tt=i.RGB16I),V===i.INT&&(tt=i.RGB32I)),S===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),V===i.UNSIGNED_INT&&(tt=i.RGBA32UI),V===i.BYTE&&(tt=i.RGBA8I),V===i.SHORT&&(tt=i.RGBA16I),V===i.INT&&(tt=i.RGBA32I)),S===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),S===i.RGBA){let At=it?La:ve.getTransfer($);V===i.FLOAT&&(tt=i.RGBA32F),V===i.HALF_FLOAT&&(tt=i.RGBA16F),V===i.UNSIGNED_BYTE&&(tt=At===Pe?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function M(C,S){let V;return C?S===null||S===fs||S===or?V=i.DEPTH24_STENCIL8:S===oi?V=i.DEPTH32F_STENCIL8:S===Yr&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===fs||S===or?V=i.DEPTH_COMPONENT24:S===oi?V=i.DEPTH_COMPONENT32F:S===Yr&&(V=i.DEPTH_COMPONENT16),V}function U(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==hn&&C.minFilter!==ri?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function P(C){let S=C.target;S.removeEventListener("dispose",P),L(S),S.isVideoTexture&&h.delete(S)}function I(C){let S=C.target;S.removeEventListener("dispose",I),w(S)}function L(C){let S=n.get(C);if(S.__webglInit===void 0)return;let V=C.source,$=d.get(V);if($){let it=$[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&T(C),Object.keys($).length===0&&d.delete(V)}n.remove(C)}function T(C){let S=n.get(C);i.deleteTexture(S.__webglTexture);let V=C.source,$=d.get(V);delete $[S.__cacheKey],o.memory.textures--}function w(C){let S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let it=0;it<S.__webglFramebuffer[$].length;it++)i.deleteFramebuffer(S.__webglFramebuffer[$][it]);else i.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)i.deleteFramebuffer(S.__webglFramebuffer[$]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let V=C.textures;for(let $=0,it=V.length;$<it;$++){let tt=n.get(V[$]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(V[$])}n.remove(C)}let z=0;function B(){z=0}function H(){let C=z;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),z+=1,C}function Z(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function W(C,S){let V=n.get(C);if(C.isVideoTexture&&Q(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){let $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut(V,C,S);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+S)}function K(C,S){let V=n.get(C);if(C.version>0&&V.__version!==C.version){ut(V,C,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+S)}function mt(C,S){let V=n.get(C);if(C.version>0&&V.__version!==C.version){ut(V,C,S);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+S)}function j(C,S){let V=n.get(C);if(C.version>0&&V.__version!==C.version){bt(V,C,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+S)}let at={[Xr]:i.REPEAT,[us]:i.CLAMP_TO_EDGE,[Wc]:i.MIRRORED_REPEAT},Rt={[hn]:i.NEAREST,[zf]:i.NEAREST_MIPMAP_NEAREST,[bo]:i.NEAREST_MIPMAP_LINEAR,[ri]:i.LINEAR,[Qa]:i.LINEAR_MIPMAP_NEAREST,[ds]:i.LINEAR_MIPMAP_LINEAR},It={[Vf]:i.NEVER,[Zf]:i.ALWAYS,[Gf]:i.LESS,[xd]:i.LEQUAL,[Wf]:i.EQUAL,[qf]:i.GEQUAL,[Xf]:i.GREATER,[Yf]:i.NOTEQUAL};function Ut(C,S){if(S.type===oi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===ri||S.magFilter===Qa||S.magFilter===bo||S.magFilter===ds||S.minFilter===ri||S.minFilter===Qa||S.minFilter===bo||S.minFilter===ds)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,at[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,at[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,at[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Rt[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Rt[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,It[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===hn||S.minFilter!==bo&&S.minFilter!==ds||S.type===oi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function pe(C,S){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",P));let $=S.source,it=d.get($);it===void 0&&(it={},d.set($,it));let tt=Z(S);if(tt!==C.__cacheKey){it[tt]===void 0&&(it[tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),it[tt].usedTimes++;let At=it[C.__cacheKey];At!==void 0&&(it[C.__cacheKey].usedTimes--,At.usedTimes===0&&T(S)),C.__cacheKey=tt,C.__webglTexture=it[tt].texture}return V}function ut(C,S,V){let $=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=i.TEXTURE_3D);let it=pe(C,S),tt=S.source;e.bindTexture($,C.__webglTexture,i.TEXTURE0+V);let At=n.get(tt);if(tt.version!==At.__version||it===!0){e.activeTexture(i.TEXTURE0+V);let ot=ve.getPrimaries(ve.workingColorSpace),Et=S.colorSpace===Hi?null:ve.getPrimaries(S.colorSpace),Tt=S.colorSpace===Hi||ot===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let rt=_(S.image,!1,s.maxTextureSize);rt=xt(S,rt);let Dt=r.convert(S.format,S.colorSpace),jt=r.convert(S.type),$t=y(S.internalFormat,Dt,jt,S.colorSpace,S.isVideoTexture);Ut($,S);let Bt,ae=S.mipmaps,ie=S.isVideoTexture!==!0,Re=At.__version===void 0||it===!0,X=tt.dataReady,Ct=U(S,rt);if(S.isDepthTexture)$t=M(S.format===ar,S.type),Re&&(ie?e.texStorage2D(i.TEXTURE_2D,1,$t,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,$t,rt.width,rt.height,0,Dt,jt,null));else if(S.isDataTexture)if(ae.length>0){ie&&Re&&e.texStorage2D(i.TEXTURE_2D,Ct,$t,ae[0].width,ae[0].height);for(let ct=0,gt=ae.length;ct<gt;ct++)Bt=ae[ct],ie?X&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Bt.width,Bt.height,Dt,jt,Bt.data):e.texImage2D(i.TEXTURE_2D,ct,$t,Bt.width,Bt.height,0,Dt,jt,Bt.data);S.generateMipmaps=!1}else ie?(Re&&e.texStorage2D(i.TEXTURE_2D,Ct,$t,rt.width,rt.height),X&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,Dt,jt,rt.data)):e.texImage2D(i.TEXTURE_2D,0,$t,rt.width,rt.height,0,Dt,jt,rt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ie&&Re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,$t,ae[0].width,ae[0].height,rt.depth);for(let ct=0,gt=ae.length;ct<gt;ct++)if(Bt=ae[ct],S.format!==Kn)if(Dt!==null)if(ie){if(X)if(S.layerUpdates.size>0){let Pt=ku(Bt.width,Bt.height,S.format,S.type);for(let Nt of S.layerUpdates){let ce=Bt.data.subarray(Nt*Pt/Bt.data.BYTES_PER_ELEMENT,(Nt+1)*Pt/Bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,Nt,Bt.width,Bt.height,1,Dt,ce)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,Bt.width,Bt.height,rt.depth,Dt,Bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,$t,Bt.width,Bt.height,rt.depth,0,Bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?X&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,Bt.width,Bt.height,rt.depth,Dt,jt,Bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,$t,Bt.width,Bt.height,rt.depth,0,Dt,jt,Bt.data)}else{ie&&Re&&e.texStorage2D(i.TEXTURE_2D,Ct,$t,ae[0].width,ae[0].height);for(let ct=0,gt=ae.length;ct<gt;ct++)Bt=ae[ct],S.format!==Kn?Dt!==null?ie?X&&e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,Bt.width,Bt.height,Dt,Bt.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,$t,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?X&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Bt.width,Bt.height,Dt,jt,Bt.data):e.texImage2D(i.TEXTURE_2D,ct,$t,Bt.width,Bt.height,0,Dt,jt,Bt.data)}else if(S.isDataArrayTexture)if(ie){if(Re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,$t,rt.width,rt.height,rt.depth),X)if(S.layerUpdates.size>0){let ct=ku(rt.width,rt.height,S.format,S.type);for(let gt of S.layerUpdates){let Pt=rt.data.subarray(gt*ct/rt.data.BYTES_PER_ELEMENT,(gt+1)*ct/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,gt,rt.width,rt.height,1,Dt,jt,Pt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Dt,jt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,$t,rt.width,rt.height,rt.depth,0,Dt,jt,rt.data);else if(S.isData3DTexture)ie?(Re&&e.texStorage3D(i.TEXTURE_3D,Ct,$t,rt.width,rt.height,rt.depth),X&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Dt,jt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,$t,rt.width,rt.height,rt.depth,0,Dt,jt,rt.data);else if(S.isFramebufferTexture){if(Re)if(ie)e.texStorage2D(i.TEXTURE_2D,Ct,$t,rt.width,rt.height);else{let ct=rt.width,gt=rt.height;for(let Pt=0;Pt<Ct;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,$t,ct,gt,0,Dt,jt,null),ct>>=1,gt>>=1}}else if(ae.length>0){if(ie&&Re){let ct=ht(ae[0]);e.texStorage2D(i.TEXTURE_2D,Ct,$t,ct.width,ct.height)}for(let ct=0,gt=ae.length;ct<gt;ct++)Bt=ae[ct],ie?X&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Dt,jt,Bt):e.texImage2D(i.TEXTURE_2D,ct,$t,Dt,jt,Bt);S.generateMipmaps=!1}else if(ie){if(Re){let ct=ht(rt);e.texStorage2D(i.TEXTURE_2D,Ct,$t,ct.width,ct.height)}X&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Dt,jt,rt)}else e.texImage2D(i.TEXTURE_2D,0,$t,Dt,jt,rt);m(S)&&f($),At.__version=tt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function bt(C,S,V){if(S.image.length!==6)return;let $=pe(C,S),it=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+V);let tt=n.get(it);if(it.version!==tt.__version||$===!0){e.activeTexture(i.TEXTURE0+V);let At=ve.getPrimaries(ve.workingColorSpace),ot=S.colorSpace===Hi?null:ve.getPrimaries(S.colorSpace),Et=S.colorSpace===Hi||At===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let Tt=S.isCompressedTexture||S.image[0].isCompressedTexture,rt=S.image[0]&&S.image[0].isDataTexture,Dt=[];for(let gt=0;gt<6;gt++)!Tt&&!rt?Dt[gt]=_(S.image[gt],!0,s.maxCubemapSize):Dt[gt]=rt?S.image[gt].image:S.image[gt],Dt[gt]=xt(S,Dt[gt]);let jt=Dt[0],$t=r.convert(S.format,S.colorSpace),Bt=r.convert(S.type),ae=y(S.internalFormat,$t,Bt,S.colorSpace),ie=S.isVideoTexture!==!0,Re=tt.__version===void 0||$===!0,X=it.dataReady,Ct=U(S,jt);Ut(i.TEXTURE_CUBE_MAP,S);let ct;if(Tt){ie&&Re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,ae,jt.width,jt.height);for(let gt=0;gt<6;gt++){ct=Dt[gt].mipmaps;for(let Pt=0;Pt<ct.length;Pt++){let Nt=ct[Pt];S.format!==Kn?$t!==null?ie?X&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt,0,0,Nt.width,Nt.height,$t,Nt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt,ae,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt,0,0,Nt.width,Nt.height,$t,Bt,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt,ae,Nt.width,Nt.height,0,$t,Bt,Nt.data)}}}else{if(ct=S.mipmaps,ie&&Re){ct.length>0&&Ct++;let gt=ht(Dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,ae,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(rt){ie?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Dt[gt].width,Dt[gt].height,$t,Bt,Dt[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ae,Dt[gt].width,Dt[gt].height,0,$t,Bt,Dt[gt].data);for(let Pt=0;Pt<ct.length;Pt++){let ce=ct[Pt].image[gt].image;ie?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt+1,0,0,ce.width,ce.height,$t,Bt,ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt+1,ae,ce.width,ce.height,0,$t,Bt,ce.data)}}else{ie?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,$t,Bt,Dt[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ae,$t,Bt,Dt[gt]);for(let Pt=0;Pt<ct.length;Pt++){let Nt=ct[Pt];ie?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt+1,0,0,$t,Bt,Nt.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt+1,ae,$t,Bt,Nt.image[gt])}}}m(S)&&f(i.TEXTURE_CUBE_MAP),tt.__version=it.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Ft(C,S,V,$,it,tt){let At=r.convert(V.format,V.colorSpace),ot=r.convert(V.type),Et=y(V.internalFormat,At,ot,V.colorSpace),Tt=n.get(S),rt=n.get(V);if(rt.__renderTarget=S,!Tt.__hasExternalTextures){let Dt=Math.max(1,S.width>>tt),jt=Math.max(1,S.height>>tt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,tt,Et,Dt,jt,S.depth,0,At,ot,null):e.texImage2D(it,tt,Et,Dt,jt,0,At,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),zt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,it,rt.__webglTexture,0,_t(S)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,it,rt.__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(C,S,V){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){let $=S.depthTexture,it=$&&$.isDepthTexture?$.type:null,tt=M(S.stencilBuffer,it),At=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=_t(S);zt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,tt,S.width,S.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,tt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,tt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,C)}else{let $=S.textures;for(let it=0;it<$.length;it++){let tt=$[it],At=r.convert(tt.format,tt.colorSpace),ot=r.convert(tt.type),Et=y(tt.internalFormat,At,ot,tt.colorSpace),Tt=_t(S);V&&zt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,Et,S.width,S.height):zt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,Et,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Et,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Zt(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);let it=$.__webglTexture,tt=_t(S);if(S.depthTexture.format===tr)zt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(S.depthTexture.format===ar)zt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Kt(C){let S=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let $=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){let it=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",it)};$.addEventListener("dispose",it),S.__depthDisposeCallback=it}S.__boundDepthTexture=$}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Zt(S.__webglFramebuffer,C)}else if(V){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=i.createRenderbuffer(),wt(S.__webglDepthbuffer[$],C,!1);else{let it=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=S.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),wt(S.__webglDepthbuffer,C,!1);else{let $=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(C,S,V){let $=n.get(C);S!==void 0&&Ft($.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Kt(C)}function me(C){let S=C.texture,V=n.get(C),$=n.get(S);C.addEventListener("dispose",I);let it=C.textures,tt=C.isWebGLCubeRenderTarget===!0,At=it.length>1;if(At||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=S.version,o.memory.textures++),tt){V.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[ot]=[];for(let Et=0;Et<S.mipmaps.length;Et++)V.__webglFramebuffer[ot][Et]=i.createFramebuffer()}else V.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let ot=0;ot<S.mipmaps.length;ot++)V.__webglFramebuffer[ot]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(At)for(let ot=0,Et=it.length;ot<Et;ot++){let Tt=n.get(it[ot]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&zt(C)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ot=0;ot<it.length;ot++){let Et=it[ot];V.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ot]);let Tt=r.convert(Et.format,Et.colorSpace),rt=r.convert(Et.type),Dt=y(Et.internalFormat,Tt,rt,Et.colorSpace,C.isXRRenderTarget===!0),jt=_t(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,Dt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,V.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),wt(V.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ut(i.TEXTURE_CUBE_MAP,S);for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0)for(let Et=0;Et<S.mipmaps.length;Et++)Ft(V.__webglFramebuffer[ot][Et],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Et);else Ft(V.__webglFramebuffer[ot],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(S)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let ot=0,Et=it.length;ot<Et;ot++){let Tt=it[ot],rt=n.get(Tt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),Ut(i.TEXTURE_2D,Tt),Ft(V.__webglFramebuffer,C,Tt,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),m(Tt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ot=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,$.__webglTexture),Ut(ot,S),S.mipmaps&&S.mipmaps.length>0)for(let Et=0;Et<S.mipmaps.length;Et++)Ft(V.__webglFramebuffer[Et],C,S,i.COLOR_ATTACHMENT0,ot,Et);else Ft(V.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,ot,0);m(S)&&f(ot),e.unbindTexture()}C.depthBuffer&&Kt(C)}function ft(C){let S=C.textures;for(let V=0,$=S.length;V<$;V++){let it=S[V];if(m(it)){let tt=b(C),At=n.get(it).__webglTexture;e.bindTexture(tt,At),f(tt),e.unbindTexture()}}}let Mt=[],F=[];function kt(C){if(C.samples>0){if(zt(C)===!1){let S=C.textures,V=C.width,$=C.height,it=i.COLOR_BUFFER_BIT,tt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(C),ot=S.length>1;if(ot)for(let Et=0;Et<S.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Et=0;Et<S.length;Et++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[Et]);let Tt=n.get(S[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Tt,0)}i.blitFramebuffer(0,0,V,$,0,0,V,$,it,i.NEAREST),c===!0&&(Mt.length=0,F.length=0,Mt.push(i.COLOR_ATTACHMENT0+Et),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Mt.push(tt),F.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let Et=0;Et<S.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,At.__webglColorRenderbuffer[Et]);let Tt=n.get(S[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,Tt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function _t(C){return Math.min(s.maxSamples,C.samples)}function zt(C){let S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Q(C){let S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function xt(C,S){let V=C.colorSpace,$=C.format,it=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==ur&&V!==Hi&&(ve.getTransfer(V)===Pe?($!==Kn||it!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function ht(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=B,this.setTexture2D=W,this.setTexture2DArray=K,this.setTexture3D=mt,this.setTextureCube=j,this.rebindTextures=ee,this.setupRenderTarget=me,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=zt}function e_(i,t){function e(n,s=Hi){let r,o=ve.getTransfer(s);if(n===Si)return i.UNSIGNED_BYTE;if(n===rh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ld)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ad)return i.BYTE;if(n===cd)return i.SHORT;if(n===Yr)return i.UNSIGNED_SHORT;if(n===sh)return i.INT;if(n===fs)return i.UNSIGNED_INT;if(n===oi)return i.FLOAT;if(n===go)return i.HALF_FLOAT;if(n===hd)return i.ALPHA;if(n===ud)return i.RGB;if(n===Kn)return i.RGBA;if(n===dd)return i.LUMINANCE;if(n===fd)return i.LUMINANCE_ALPHA;if(n===tr)return i.DEPTH_COMPONENT;if(n===ar)return i.DEPTH_STENCIL;if(n===ah)return i.RED;if(n===ch)return i.RED_INTEGER;if(n===pd)return i.RG;if(n===lh)return i.RG_INTEGER;if(n===hh)return i.RGBA_INTEGER;if(n===ta||n===ea||n===na||n===ia)if(o===Pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xc||n===Yc||n===qc||n===Zc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jc||n===$c||n===Kc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jc||n===$c)return o===Pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Kc)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===jc||n===Qc||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===cl||n===ll||n===hl||n===ul)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===jc)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qc)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===el)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===il)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ol)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===al)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ll)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ul)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sa||n===dl||n===fl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===sa)return o===Pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===md||n===pl||n===ml||n===gl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===sa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===pl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ml)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===or?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Dl=class extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Yt=class extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},n_={type:"move"},kr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(n_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},i_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,s_=`
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

}`,Ll=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Mn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Hn({vertexShader:i_,fragmentShader:s_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new st(new Yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ul=class extends wi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null,_=new Ll,m=e.getContextAttributes(),f=null,b=null,y=[],M=[],U=new pt,P=null,I=new Qe;I.viewport=new Ie;let L=new Qe;L.viewport=new Ie;let T=[I,L],w=new Dl,z=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ut){let bt=y[ut];return bt===void 0&&(bt=new kr,y[ut]=bt),bt.getTargetRaySpace()},this.getControllerGrip=function(ut){let bt=y[ut];return bt===void 0&&(bt=new kr,y[ut]=bt),bt.getGripSpace()},this.getHand=function(ut){let bt=y[ut];return bt===void 0&&(bt=new kr,y[ut]=bt),bt.getHandSpace()};function H(ut){let bt=M.indexOf(ut.inputSource);if(bt===-1)return;let Ft=y[bt];Ft!==void 0&&(Ft.update(ut.inputSource,ut.frame,l||o),Ft.dispatchEvent({type:ut.type,data:ut.inputSource}))}function Z(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",W);for(let ut=0;ut<y.length;ut++){let bt=M[ut];bt!==null&&(M[ut]=null,y[ut].disconnect(bt))}z=null,B=null,_.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,b=null,pe.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ut){r=ut,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ut){a=ut,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ut){l=ut},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ut){if(s=ut,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){let bt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,bt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Ti(p.framebufferWidth,p.framebufferHeight,{format:Kn,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let bt=null,Ft=null,wt=null;m.depth&&(wt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=m.stencil?ar:tr,Ft=m.stencil?or:fs);let Zt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Zt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Ti(d.textureWidth,d.textureHeight,{format:Kn,type:Si,depthTexture:new ma(d.textureWidth,d.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),pe.setContext(s),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W(ut){for(let bt=0;bt<ut.removed.length;bt++){let Ft=ut.removed[bt],wt=M.indexOf(Ft);wt>=0&&(M[wt]=null,y[wt].disconnect(Ft))}for(let bt=0;bt<ut.added.length;bt++){let Ft=ut.added[bt],wt=M.indexOf(Ft);if(wt===-1){for(let Kt=0;Kt<y.length;Kt++)if(Kt>=M.length){M.push(Ft),wt=Kt;break}else if(M[Kt]===null){M[Kt]=Ft,wt=Kt;break}if(wt===-1)break}let Zt=y[wt];Zt&&Zt.connect(Ft)}}let K=new D,mt=new D;function j(ut,bt,Ft){K.setFromMatrixPosition(bt.matrixWorld),mt.setFromMatrixPosition(Ft.matrixWorld);let wt=K.distanceTo(mt),Zt=bt.projectionMatrix.elements,Kt=Ft.projectionMatrix.elements,ee=Zt[14]/(Zt[10]-1),me=Zt[14]/(Zt[10]+1),ft=(Zt[9]+1)/Zt[5],Mt=(Zt[9]-1)/Zt[5],F=(Zt[8]-1)/Zt[0],kt=(Kt[8]+1)/Kt[0],_t=ee*F,zt=ee*kt,Q=wt/(-F+kt),xt=Q*-F;if(bt.matrixWorld.decompose(ut.position,ut.quaternion,ut.scale),ut.translateX(xt),ut.translateZ(Q),ut.matrixWorld.compose(ut.position,ut.quaternion,ut.scale),ut.matrixWorldInverse.copy(ut.matrixWorld).invert(),Zt[10]===-1)ut.projectionMatrix.copy(bt.projectionMatrix),ut.projectionMatrixInverse.copy(bt.projectionMatrixInverse);else{let ht=ee+Q,C=me+Q,S=_t-xt,V=zt+(wt-xt),$=ft*me/C*ht,it=Mt*me/C*ht;ut.projectionMatrix.makePerspective(S,V,$,it,ht,C),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert()}}function at(ut,bt){bt===null?ut.matrixWorld.copy(ut.matrix):ut.matrixWorld.multiplyMatrices(bt.matrixWorld,ut.matrix),ut.matrixWorldInverse.copy(ut.matrixWorld).invert()}this.updateCamera=function(ut){if(s===null)return;let bt=ut.near,Ft=ut.far;_.texture!==null&&(_.depthNear>0&&(bt=_.depthNear),_.depthFar>0&&(Ft=_.depthFar)),w.near=L.near=I.near=bt,w.far=L.far=I.far=Ft,(z!==w.near||B!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),z=w.near,B=w.far),I.layers.mask=ut.layers.mask|2,L.layers.mask=ut.layers.mask|4,w.layers.mask=I.layers.mask|L.layers.mask;let wt=ut.parent,Zt=w.cameras;at(w,wt);for(let Kt=0;Kt<Zt.length;Kt++)at(Zt[Kt],wt);Zt.length===2?j(w,I,L):w.projectionMatrix.copy(I.projectionMatrix),Rt(ut,w,wt)};function Rt(ut,bt,Ft){Ft===null?ut.matrix.copy(bt.matrixWorld):(ut.matrix.copy(Ft.matrixWorld),ut.matrix.invert(),ut.matrix.multiply(bt.matrixWorld)),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.updateMatrixWorld(!0),ut.projectionMatrix.copy(bt.projectionMatrix),ut.projectionMatrixInverse.copy(bt.projectionMatrixInverse),ut.isPerspectiveCamera&&(ut.fov=qr*2*Math.atan(1/ut.projectionMatrix.elements[5]),ut.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(ut){c=ut,d!==null&&(d.fixedFoveation=ut),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ut)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(w)};let It=null;function Ut(ut,bt){if(h=bt.getViewerPose(l||o),g=bt,h!==null){let Ft=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let wt=!1;Ft.length!==w.cameras.length&&(w.cameras.length=0,wt=!0);for(let Kt=0;Kt<Ft.length;Kt++){let ee=Ft[Kt],me=null;if(p!==null)me=p.getViewport(ee);else{let Mt=u.getViewSubImage(d,ee);me=Mt.viewport,Kt===0&&(t.setRenderTargetTextures(b,Mt.colorTexture,d.ignoreDepthValues?void 0:Mt.depthStencilTexture),t.setRenderTarget(b))}let ft=T[Kt];ft===void 0&&(ft=new Qe,ft.layers.enable(Kt),ft.viewport=new Ie,T[Kt]=ft),ft.matrix.fromArray(ee.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(ee.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(me.x,me.y,me.width,me.height),Kt===0&&(w.matrix.copy(ft.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),wt===!0&&w.cameras.push(ft)}let Zt=s.enabledFeatures;if(Zt&&Zt.includes("depth-sensing")){let Kt=u.getDepthInformation(Ft[0]);Kt&&Kt.isValid&&Kt.texture&&_.init(t,Kt,s.renderState)}}for(let Ft=0;Ft<y.length;Ft++){let wt=M[Ft],Zt=y[Ft];wt!==null&&Zt!==void 0&&Zt.update(wt,bt,l||o)}It&&It(ut,bt),bt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:bt}),g=null}let pe=new Ed;pe.setAnimationLoop(Ut),this.setAnimationLoop=function(ut){It=ut},this.dispose=function(){}}},as=new ci,r_=new be;function o_(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Md(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,b,y,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,b,y):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===ln&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===ln&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let b=t.get(f),y=b.envMap,M=b.envMapRotation;y&&(m.envMap.value=y,as.copy(M),as.x*=-1,as.y*=-1,as.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),m.envMapRotation.value.setFromMatrix4(r_.makeRotationFromEuler(as)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,b,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=y*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ln&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function a_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,y){let M=y.program;n.uniformBlockBinding(b,M)}function l(b,y){let M=s[b.id];M===void 0&&(g(b),M=h(b),s[b.id]=M,b.addEventListener("dispose",m));let U=y.program;n.updateUBOMapping(b,U);let P=t.render.frame;r[b.id]!==P&&(d(b),r[b.id]=P)}function h(b){let y=u();b.__bindingPointIndex=y;let M=i.createBuffer(),U=b.__size,P=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,U,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let y=s[b.id],M=b.uniforms,U=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let P=0,I=M.length;P<I;P++){let L=Array.isArray(M[P])?M[P]:[M[P]];for(let T=0,w=L.length;T<w;T++){let z=L[T];if(p(z,P,T,U)===!0){let B=z.__offset,H=Array.isArray(z.value)?z.value:[z.value],Z=0;for(let W=0;W<H.length;W++){let K=H[W],mt=_(K);typeof K=="number"||typeof K=="boolean"?(z.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,B+Z,z.__data)):K.isMatrix3?(z.__data[0]=K.elements[0],z.__data[1]=K.elements[1],z.__data[2]=K.elements[2],z.__data[3]=0,z.__data[4]=K.elements[3],z.__data[5]=K.elements[4],z.__data[6]=K.elements[5],z.__data[7]=0,z.__data[8]=K.elements[6],z.__data[9]=K.elements[7],z.__data[10]=K.elements[8],z.__data[11]=0):(K.toArray(z.__data,Z),Z+=mt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,y,M,U){let P=b.value,I=y+"_"+M;if(U[I]===void 0)return typeof P=="number"||typeof P=="boolean"?U[I]=P:U[I]=P.clone(),!0;{let L=U[I];if(typeof P=="number"||typeof P=="boolean"){if(L!==P)return U[I]=P,!0}else if(L.equals(P)===!1)return L.copy(P),!0}return!1}function g(b){let y=b.uniforms,M=0,U=16;for(let I=0,L=y.length;I<L;I++){let T=Array.isArray(y[I])?y[I]:[y[I]];for(let w=0,z=T.length;w<z;w++){let B=T[w],H=Array.isArray(B.value)?B.value:[B.value];for(let Z=0,W=H.length;Z<W;Z++){let K=H[Z],mt=_(K),j=M%U,at=j%mt.boundary,Rt=j+at;M+=at,Rt!==0&&U-Rt<mt.storage&&(M+=U-Rt),B.__data=new Float32Array(mt.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=mt.storage}}}let P=M%U;return P>0&&(M+=U-P),b.__size=M,b.__cache={},this}function _(b){let y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function m(b){let y=b.target;y.removeEventListener("dispose",m);let M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}var Kr=class{constructor(t={}){let{canvas:e=up(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,f=null,b=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Be,this.toneMapping=Gi,this.toneMappingExposure=1;let M=this,U=!1,P=0,I=0,L=null,T=-1,w=null,z=new Ie,B=new Ie,H=null,Z=new Qt(0),W=0,K=e.width,mt=e.height,j=1,at=null,Rt=null,It=new Ie(0,0,K,mt),Ut=new Ie(0,0,K,mt),pe=!1,ut=new $r,bt=!1,Ft=!1,wt=new be,Zt=new be,Kt=new D,ee=new Ie,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ft=!1;function Mt(){return L===null?j:1}let F=n;function kt(R,Y){return e.getContext(R,Y)}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nh}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",Nt,!1),F===null){let Y="webgl2";if(F=kt(Y,R),F===null)throw kt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let _t,zt,Q,xt,ht,C,S,V,$,it,tt,At,ot,Et,Tt,rt,Dt,jt,$t,Bt,ae,ie,Re,X;function Ct(){_t=new bg(F),_t.init(),ie=new e_(F,_t),zt=new xg(F,_t,t,ie),Q=new jx(F,_t),zt.reverseDepthBuffer&&d&&Q.buffers.depth.setReversed(!0),xt=new Tg(F),ht=new Bx,C=new t_(F,_t,Q,ht,zt,ie,xt),S=new yg(M),V=new Eg(M),$=new Lp(F),Re=new mg(F,$),it=new Sg(F,$,xt,Re),tt=new Rg(F,it,$,xt),$t=new Ag(F,zt,C),rt=new _g(ht),At=new zx(M,S,V,_t,zt,Re,rt),ot=new o_(M,ht),Et=new kx,Tt=new qx(_t),jt=new pg(M,S,V,Q,tt,p,c),Dt=new $x(M,tt,zt),X=new a_(F,xt,zt,Q),Bt=new gg(F,_t,xt),ae=new wg(F,_t,xt),xt.programs=At.programs,M.capabilities=zt,M.extensions=_t,M.properties=ht,M.renderLists=Et,M.shadowMap=Dt,M.state=Q,M.info=xt}Ct();let ct=new Ul(M,F);this.xr=ct,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let R=_t.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=_t.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(K,mt,!1))},this.getSize=function(R){return R.set(K,mt)},this.setSize=function(R,Y,et=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=R,mt=Y,e.width=Math.floor(R*j),e.height=Math.floor(Y*j),et===!0&&(e.style.width=R+"px",e.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(K*j,mt*j).floor()},this.setDrawingBufferSize=function(R,Y,et){K=R,mt=Y,j=et,e.width=Math.floor(R*et),e.height=Math.floor(Y*et),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(z)},this.getViewport=function(R){return R.copy(It)},this.setViewport=function(R,Y,et,nt){R.isVector4?It.set(R.x,R.y,R.z,R.w):It.set(R,Y,et,nt),Q.viewport(z.copy(It).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(Ut)},this.setScissor=function(R,Y,et,nt){R.isVector4?Ut.set(R.x,R.y,R.z,R.w):Ut.set(R,Y,et,nt),Q.scissor(B.copy(Ut).multiplyScalar(j).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(R){Q.setScissorTest(pe=R)},this.setOpaqueSort=function(R){at=R},this.setTransparentSort=function(R){Rt=R},this.getClearColor=function(R){return R.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor.apply(jt,arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha.apply(jt,arguments)},this.clear=function(R=!0,Y=!0,et=!0){let nt=0;if(R){let J=!1;if(L!==null){let St=L.texture.format;J=St===hh||St===lh||St===ch}if(J){let St=L.texture.type,Ot=St===Si||St===fs||St===Yr||St===or||St===rh||St===oh,qt=jt.getClearColor(),Gt=jt.getClearAlpha(),ne=qt.r,oe=qt.g,Wt=qt.b;Ot?(g[0]=ne,g[1]=oe,g[2]=Wt,g[3]=Gt,F.clearBufferuiv(F.COLOR,0,g)):(_[0]=ne,_[1]=oe,_[2]=Wt,_[3]=Gt,F.clearBufferiv(F.COLOR,0,_))}else nt|=F.COLOR_BUFFER_BIT}Y&&(nt|=F.DEPTH_BUFFER_BIT),et&&(nt|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",Nt,!1),Et.dispose(),Tt.dispose(),ht.dispose(),S.dispose(),V.dispose(),tt.dispose(),Re.dispose(),X.dispose(),At.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",yr),ct.removeEventListener("sessionend",Ts),mn.stop()};function gt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;let R=xt.autoReset,Y=Dt.enabled,et=Dt.autoUpdate,nt=Dt.needsUpdate,J=Dt.type;Ct(),xt.autoReset=R,Dt.enabled=Y,Dt.autoUpdate=et,Dt.needsUpdate=nt,Dt.type=J}function Nt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ce(R){let Y=R.target;Y.removeEventListener("dispose",ce),Ue(Y)}function Ue(R){Ye(R),ht.remove(R)}function Ye(R){let Y=ht.get(R).programs;Y!==void 0&&(Y.forEach(function(et){At.releaseProgram(et)}),R.isShaderMaterial&&At.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,et,nt,J,St){Y===null&&(Y=me);let Ot=J.isMesh&&J.matrixWorld.determinant()<0,qt=Mr(R,Y,et,nt,J);Q.setMaterial(nt,Ot);let Gt=et.index,ne=1;if(nt.wireframe===!0){if(Gt=it.getWireframeAttribute(et),Gt===void 0)return;ne=2}let oe=et.drawRange,Wt=et.attributes.position,_e=oe.start*ne,se=(oe.start+oe.count)*ne;St!==null&&(_e=Math.max(_e,St.start*ne),se=Math.min(se,(St.start+St.count)*ne)),Gt!==null?(_e=Math.max(_e,0),se=Math.min(se,Gt.count)):Wt!=null&&(_e=Math.max(_e,0),se=Math.min(se,Wt.count));let Se=se-_e;if(Se<0||Se===1/0)return;Re.setup(J,nt,qt,et,Gt);let rn,Ee=Bt;if(Gt!==null&&(rn=$.get(Gt),Ee=ae,Ee.setIndex(rn)),J.isMesh)nt.wireframe===!0?(Q.setLineWidth(nt.wireframeLinewidth*Mt()),Ee.setMode(F.LINES)):Ee.setMode(F.TRIANGLES);else if(J.isLine){let Jt=nt.linewidth;Jt===void 0&&(Jt=1),Q.setLineWidth(Jt*Mt()),J.isLineSegments?Ee.setMode(F.LINES):J.isLineLoop?Ee.setMode(F.LINE_LOOP):Ee.setMode(F.LINE_STRIP)}else J.isPoints?Ee.setMode(F.POINTS):J.isSprite&&Ee.setMode(F.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Ee.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))Ee.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let Jt=J._multiDrawStarts,Fn=J._multiDrawCounts,ye=J._multiDrawCount,Cn=Gt?$.get(Gt).bytesPerElement:1,pi=ht.get(nt).currentProgram.getUniforms();for(let xn=0;xn<ye;xn++)pi.setValue(F,"_gl_DrawID",xn),Ee.render(Jt[xn]/Cn,Fn[xn])}else if(J.isInstancedMesh)Ee.renderInstances(_e,Se,J.count);else if(et.isInstancedBufferGeometry){let Jt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Fn=Math.min(et.instanceCount,Jt);Ee.renderInstances(_e,Se,Fn)}else Ee.render(_e,Se)};function ue(R,Y,et){R.transparent===!0&&R.side===cn&&R.forceSinglePass===!1?(R.side=ln,R.needsUpdate=!0,On(R,Y,et),R.side=Wi,R.needsUpdate=!0,On(R,Y,et),R.side=cn):On(R,Y,et)}this.compile=function(R,Y,et=null){et===null&&(et=R),f=Tt.get(et),f.init(Y),y.push(f),et.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(f.pushLight(J),J.castShadow&&f.pushShadow(J))}),R!==et&&R.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(f.pushLight(J),J.castShadow&&f.pushShadow(J))}),f.setupLights();let nt=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let St=J.material;if(St)if(Array.isArray(St))for(let Ot=0;Ot<St.length;Ot++){let qt=St[Ot];ue(qt,et,J),nt.add(qt)}else ue(St,et,J),nt.add(St)}),y.pop(),f=null,nt},this.compileAsync=function(R,Y,et=null){let nt=this.compile(R,Y,et);return new Promise(J=>{function St(){if(nt.forEach(function(Ot){ht.get(Ot).currentProgram.isReady()&&nt.delete(Ot)}),nt.size===0){J(R);return}setTimeout(St,10)}_t.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let wn=null;function Nn(R){wn&&wn(R)}function yr(){mn.stop()}function Ts(){mn.start()}let mn=new Ed;mn.setAnimationLoop(Nn),typeof self!="undefined"&&mn.setContext(self),this.setAnimationLoop=function(R){wn=R,ct.setAnimationLoop(R),R===null?mn.stop():mn.start()},ct.addEventListener("sessionstart",yr),ct.addEventListener("sessionend",Ts),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(Y),Y=ct.getCamera()),R.isScene===!0&&R.onBeforeRender(M,R,Y,L),f=Tt.get(R,y.length),f.init(Y),y.push(f),Zt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),ut.setFromProjectionMatrix(Zt),Ft=this.localClippingEnabled,bt=rt.init(this.clippingPlanes,Ft),m=Et.get(R,b.length),m.init(),b.push(m),ct.enabled===!0&&ct.isPresenting===!0){let St=M.xr.getDepthSensingMesh();St!==null&&fi(St,Y,-1/0,M.sortObjects)}fi(R,Y,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(at,Rt),ft=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,ft&&jt.addToRenderList(m,R),this.info.render.frame++,bt===!0&&rt.beginShadows();let et=f.state.shadowsArray;Dt.render(et,R,Y),bt===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let nt=m.opaque,J=m.transmissive;if(f.setupLights(),Y.isArrayCamera){let St=Y.cameras;if(J.length>0)for(let Ot=0,qt=St.length;Ot<qt;Ot++){let Gt=St[Ot];As(nt,J,R,Gt)}ft&&jt.render(R);for(let Ot=0,qt=St.length;Ot<qt;Ot++){let Gt=St[Ot];Qi(m,R,Gt,Gt.viewport)}}else J.length>0&&As(nt,J,R,Y),ft&&jt.render(R),Qi(m,R,Y);L!==null&&(C.updateMultisampleRenderTarget(L),C.updateRenderTargetMipmap(L)),R.isScene===!0&&R.onAfterRender(M,R,Y),Re.resetDefaultState(),T=-1,w=null,y.pop(),y.length>0?(f=y[y.length-1],bt===!0&&rt.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function fi(R,Y,et,nt){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)et=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)f.pushLight(R),R.castShadow&&f.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ut.intersectsSprite(R)){nt&&ee.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Zt);let Ot=tt.update(R),qt=R.material;qt.visible&&m.push(R,Ot,qt,et,ee.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ut.intersectsObject(R))){let Ot=tt.update(R),qt=R.material;if(nt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ee.copy(R.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),ee.copy(Ot.boundingSphere.center)),ee.applyMatrix4(R.matrixWorld).applyMatrix4(Zt)),Array.isArray(qt)){let Gt=Ot.groups;for(let ne=0,oe=Gt.length;ne<oe;ne++){let Wt=Gt[ne],_e=qt[Wt.materialIndex];_e&&_e.visible&&m.push(R,Ot,_e,et,ee.z,Wt)}}else qt.visible&&m.push(R,Ot,qt,et,ee.z,null)}}let St=R.children;for(let Ot=0,qt=St.length;Ot<qt;Ot++)fi(St[Ot],Y,et,nt)}function Qi(R,Y,et,nt){let J=R.opaque,St=R.transmissive,Ot=R.transparent;f.setupLightsView(et),bt===!0&&rt.setGlobalState(M.clippingPlanes,et),nt&&Q.viewport(z.copy(nt)),J.length>0&&gn(J,Y,et),St.length>0&&gn(St,Y,et),Ot.length>0&&gn(Ot,Y,et),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function As(R,Y,et,nt){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[nt.id]===void 0&&(f.state.transmissionRenderTarget[nt.id]=new Ti(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?go:Si,minFilter:ds,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ve.workingColorSpace}));let St=f.state.transmissionRenderTarget[nt.id],Ot=nt.viewport||z;St.setSize(Ot.z,Ot.w);let qt=M.getRenderTarget();M.setRenderTarget(St),M.getClearColor(Z),W=M.getClearAlpha(),W<1&&M.setClearColor(16777215,.5),M.clear(),ft&&jt.render(et);let Gt=M.toneMapping;M.toneMapping=Gi;let ne=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),f.setupLightsView(nt),bt===!0&&rt.setGlobalState(M.clippingPlanes,nt),gn(R,et,nt),C.updateMultisampleRenderTarget(St),C.updateRenderTargetMipmap(St),_t.has("WEBGL_multisampled_render_to_texture")===!1){let oe=!1;for(let Wt=0,_e=Y.length;Wt<_e;Wt++){let se=Y[Wt],Se=se.object,rn=se.geometry,Ee=se.material,Jt=se.group;if(Ee.side===cn&&Se.layers.test(nt.layers)){let Fn=Ee.side;Ee.side=ln,Ee.needsUpdate=!0,Rs(Se,et,nt,rn,Ee,Jt),Ee.side=Fn,Ee.needsUpdate=!0,oe=!0}}oe===!0&&(C.updateMultisampleRenderTarget(St),C.updateRenderTargetMipmap(St))}M.setRenderTarget(qt),M.setClearColor(Z,W),ne!==void 0&&(nt.viewport=ne),M.toneMapping=Gt}function gn(R,Y,et){let nt=Y.isScene===!0?Y.overrideMaterial:null;for(let J=0,St=R.length;J<St;J++){let Ot=R[J],qt=Ot.object,Gt=Ot.geometry,ne=nt===null?Ot.material:nt,oe=Ot.group;qt.layers.test(et.layers)&&Rs(qt,Y,et,Gt,ne,oe)}}function Rs(R,Y,et,nt,J,St){R.onBeforeRender(M,Y,et,nt,J,St),R.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(M,Y,et,nt,R,St),J.transparent===!0&&J.side===cn&&J.forceSinglePass===!1?(J.side=ln,J.needsUpdate=!0,M.renderBufferDirect(et,Y,nt,J,R,St),J.side=Wi,J.needsUpdate=!0,M.renderBufferDirect(et,Y,nt,J,R,St),J.side=cn):M.renderBufferDirect(et,Y,nt,J,R,St),R.onAfterRender(M,Y,et,nt,J,St)}function On(R,Y,et){Y.isScene!==!0&&(Y=me);let nt=ht.get(R),J=f.state.lights,St=f.state.shadowsArray,Ot=J.state.version,qt=At.getParameters(R,J.state,St,Y,et),Gt=At.getProgramCacheKey(qt),ne=nt.programs;nt.environment=R.isMeshStandardMaterial?Y.environment:null,nt.fog=Y.fog,nt.envMap=(R.isMeshStandardMaterial?V:S).get(R.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,ne===void 0&&(R.addEventListener("dispose",ce),ne=new Map,nt.programs=ne);let oe=ne.get(Gt);if(oe!==void 0){if(nt.currentProgram===oe&&nt.lightsStateVersion===Ot)return vr(R,qt),oe}else qt.uniforms=At.getUniforms(R),R.onBeforeCompile(qt,M),oe=At.acquireProgram(qt,Gt),ne.set(Gt,oe),nt.uniforms=qt.uniforms;let Wt=nt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Wt.clippingPlanes=rt.uniform),vr(R,qt),nt.needsLights=Mo(R),nt.lightsStateVersion=Ot,nt.needsLights&&(Wt.ambientLightColor.value=J.state.ambient,Wt.lightProbe.value=J.state.probe,Wt.directionalLights.value=J.state.directional,Wt.directionalLightShadows.value=J.state.directionalShadow,Wt.spotLights.value=J.state.spot,Wt.spotLightShadows.value=J.state.spotShadow,Wt.rectAreaLights.value=J.state.rectArea,Wt.ltc_1.value=J.state.rectAreaLTC1,Wt.ltc_2.value=J.state.rectAreaLTC2,Wt.pointLights.value=J.state.point,Wt.pointLightShadows.value=J.state.pointShadow,Wt.hemisphereLights.value=J.state.hemi,Wt.directionalShadowMap.value=J.state.directionalShadowMap,Wt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Wt.spotShadowMap.value=J.state.spotShadowMap,Wt.spotLightMatrix.value=J.state.spotLightMatrix,Wt.spotLightMap.value=J.state.spotLightMap,Wt.pointShadowMap.value=J.state.pointShadowMap,Wt.pointShadowMatrix.value=J.state.pointShadowMatrix),nt.currentProgram=oe,nt.uniformsList=null,oe}function ts(R){if(R.uniformsList===null){let Y=R.currentProgram.getUniforms();R.uniformsList=nr.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function vr(R,Y){let et=ht.get(R);et.outputColorSpace=Y.outputColorSpace,et.batching=Y.batching,et.batchingColor=Y.batchingColor,et.instancing=Y.instancing,et.instancingColor=Y.instancingColor,et.instancingMorph=Y.instancingMorph,et.skinning=Y.skinning,et.morphTargets=Y.morphTargets,et.morphNormals=Y.morphNormals,et.morphColors=Y.morphColors,et.morphTargetsCount=Y.morphTargetsCount,et.numClippingPlanes=Y.numClippingPlanes,et.numIntersection=Y.numClipIntersection,et.vertexAlphas=Y.vertexAlphas,et.vertexTangents=Y.vertexTangents,et.toneMapping=Y.toneMapping}function Mr(R,Y,et,nt,J){Y.isScene!==!0&&(Y=me),C.resetTextureUnits();let St=Y.fog,Ot=nt.isMeshStandardMaterial?Y.environment:null,qt=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ur,Gt=(nt.isMeshStandardMaterial?V:S).get(nt.envMap||Ot),ne=nt.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,oe=!!et.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Wt=!!et.morphAttributes.position,_e=!!et.morphAttributes.normal,se=!!et.morphAttributes.color,Se=Gi;nt.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Se=M.toneMapping);let rn=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Ee=rn!==void 0?rn.length:0,Jt=ht.get(nt),Fn=f.state.lights;if(bt===!0&&(Ft===!0||R!==w)){let Ke=R===w&&nt.id===T;rt.setState(nt,R,Ke)}let ye=!1;nt.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Fn.state.version||Jt.outputColorSpace!==qt||J.isBatchedMesh&&Jt.batching===!1||!J.isBatchedMesh&&Jt.batching===!0||J.isBatchedMesh&&Jt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Jt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Jt.instancing===!1||!J.isInstancedMesh&&Jt.instancing===!0||J.isSkinnedMesh&&Jt.skinning===!1||!J.isSkinnedMesh&&Jt.skinning===!0||J.isInstancedMesh&&Jt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Jt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Jt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Jt.instancingMorph===!1&&J.morphTexture!==null||Jt.envMap!==Gt||nt.fog===!0&&Jt.fog!==St||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==rt.numPlanes||Jt.numIntersection!==rt.numIntersection)||Jt.vertexAlphas!==ne||Jt.vertexTangents!==oe||Jt.morphTargets!==Wt||Jt.morphNormals!==_e||Jt.morphColors!==se||Jt.toneMapping!==Se||Jt.morphTargetsCount!==Ee)&&(ye=!0):(ye=!0,Jt.__version=nt.version);let Cn=Jt.currentProgram;ye===!0&&(Cn=On(nt,Y,J));let pi=!1,xn=!1,Xn=!1,Ce=Cn.getUniforms(),zn=Jt.uniforms;if(Q.useProgram(Cn.program)&&(pi=!0,xn=!0,Xn=!0),nt.id!==T&&(T=nt.id,xn=!0),pi||w!==R){Q.buffers.depth.getReversed()?(wt.copy(R.projectionMatrix),fp(wt),pp(wt),Ce.setValue(F,"projectionMatrix",wt)):Ce.setValue(F,"projectionMatrix",R.projectionMatrix),Ce.setValue(F,"viewMatrix",R.matrixWorldInverse);let Pn=Ce.map.cameraPosition;Pn!==void 0&&Pn.setValue(F,Kt.setFromMatrixPosition(R.matrixWorld)),zt.logarithmicDepthBuffer&&Ce.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Ce.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,xn=!0,Xn=!0)}if(J.isSkinnedMesh){Ce.setOptional(F,J,"bindMatrix"),Ce.setOptional(F,J,"bindMatrixInverse");let Ke=J.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),Ce.setValue(F,"boneTexture",Ke.boneTexture,C))}J.isBatchedMesh&&(Ce.setOptional(F,J,"batchingTexture"),Ce.setValue(F,"batchingTexture",J._matricesTexture,C),Ce.setOptional(F,J,"batchingIdTexture"),Ce.setValue(F,"batchingIdTexture",J._indirectTexture,C),Ce.setOptional(F,J,"batchingColorTexture"),J._colorsTexture!==null&&Ce.setValue(F,"batchingColorTexture",J._colorsTexture,C));let ni=et.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&$t.update(J,et,Cn),(xn||Jt.receiveShadow!==J.receiveShadow)&&(Jt.receiveShadow=J.receiveShadow,Ce.setValue(F,"receiveShadow",J.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(zn.envMap.value=Gt,zn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&Y.environment!==null&&(zn.envMapIntensity.value=Y.environmentIntensity),xn&&(Ce.setValue(F,"toneMappingExposure",M.toneMappingExposure),Jt.needsLights&&Cs(zn,Xn),St&&nt.fog===!0&&ot.refreshFogUniforms(zn,St),ot.refreshMaterialUniforms(zn,nt,j,mt,f.state.transmissionRenderTarget[R.id]),nr.upload(F,ts(Jt),zn,C)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(nr.upload(F,ts(Jt),zn,C),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Ce.setValue(F,"center",J.center),Ce.setValue(F,"modelViewMatrix",J.modelViewMatrix),Ce.setValue(F,"normalMatrix",J.normalMatrix),Ce.setValue(F,"modelMatrix",J.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){let Ke=nt.uniformsGroups;for(let Pn=0,In=Ke.length;Pn<In;Pn++){let es=Ke[Pn];X.update(es,Cn),X.bind(es,Cn)}}return Cn}function Cs(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Mo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(R,Y,et){ht.get(R.texture).__webglTexture=Y,ht.get(R.depthTexture).__webglTexture=et;let nt=ht.get(R);nt.__hasExternalTextures=!0,nt.__autoAllocateDepthBuffer=et===void 0,nt.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,Y){let et=ht.get(R);et.__webglFramebuffer=Y,et.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(R,Y=0,et=0){L=R,P=Y,I=et;let nt=!0,J=null,St=!1,Ot=!1;if(R){let Gt=ht.get(R);if(Gt.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(F.FRAMEBUFFER,null),nt=!1;else if(Gt.__webglFramebuffer===void 0)C.setupRenderTarget(R);else if(Gt.__hasExternalTextures)C.rebindTextures(R,ht.get(R.texture).__webglTexture,ht.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Wt=R.depthTexture;if(Gt.__boundDepthTexture!==Wt){if(Wt!==null&&ht.has(Wt)&&(R.width!==Wt.image.width||R.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(R)}}let ne=R.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Ot=!0);let oe=ht.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(oe[Y])?J=oe[Y][et]:J=oe[Y],St=!0):R.samples>0&&C.useMultisampledRTT(R)===!1?J=ht.get(R).__webglMultisampledFramebuffer:Array.isArray(oe)?J=oe[et]:J=oe,z.copy(R.viewport),B.copy(R.scissor),H=R.scissorTest}else z.copy(It).multiplyScalar(j).floor(),B.copy(Ut).multiplyScalar(j).floor(),H=pe;if(Q.bindFramebuffer(F.FRAMEBUFFER,J)&&nt&&Q.drawBuffers(R,J),Q.viewport(z),Q.scissor(B),Q.setScissorTest(H),St){let Gt=ht.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Gt.__webglTexture,et)}else if(Ot){let Gt=ht.get(R.texture),ne=Y||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Gt.__webglTexture,et||0,ne)}T=-1},this.readRenderTargetPixels=function(R,Y,et,nt,J,St,Ot){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=ht.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(qt=qt[Ot]),qt){Q.bindFramebuffer(F.FRAMEBUFFER,qt);try{let Gt=R.texture,ne=Gt.format,oe=Gt.type;if(!zt.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-nt&&et>=0&&et<=R.height-J&&F.readPixels(Y,et,nt,J,ie.convert(ne),ie.convert(oe),St)}finally{let Gt=L!==null?ht.get(L).__webglFramebuffer:null;Q.bindFramebuffer(F.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(R,Y,et,nt,J,St,Ot){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=ht.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(qt=qt[Ot]),qt){let Gt=R.texture,ne=Gt.format,oe=Gt.type;if(!zt.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=R.width-nt&&et>=0&&et<=R.height-J){Q.bindFramebuffer(F.FRAMEBUFFER,qt);let Wt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Wt),F.bufferData(F.PIXEL_PACK_BUFFER,St.byteLength,F.STREAM_READ),F.readPixels(Y,et,nt,J,ie.convert(ne),ie.convert(oe),0);let _e=L!==null?ht.get(L).__webglFramebuffer:null;Q.bindFramebuffer(F.FRAMEBUFFER,_e);let se=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await dp(F,se,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Wt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,St),F.deleteBuffer(Wt),F.deleteSync(se),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,Y=null,et=0){R.isTexture!==!0&&(Fr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,R=arguments[1]);let nt=Math.pow(2,-et),J=Math.floor(R.image.width*nt),St=Math.floor(R.image.height*nt),Ot=Y!==null?Y.x:0,qt=Y!==null?Y.y:0;C.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,et,0,0,Ot,qt,J,St),Q.unbindTexture()},this.copyTextureToTexture=function(R,Y,et=null,nt=null,J=0){R.isTexture!==!0&&(Fr("WebGLRenderer: copyTextureToTexture function signature has changed."),nt=arguments[0]||null,R=arguments[1],Y=arguments[2],J=arguments[3]||0,et=null);let St,Ot,qt,Gt,ne,oe,Wt,_e,se,Se=R.isCompressedTexture?R.mipmaps[J]:R.image;et!==null?(St=et.max.x-et.min.x,Ot=et.max.y-et.min.y,qt=et.isBox3?et.max.z-et.min.z:1,Gt=et.min.x,ne=et.min.y,oe=et.isBox3?et.min.z:0):(St=Se.width,Ot=Se.height,qt=Se.depth||1,Gt=0,ne=0,oe=0),nt!==null?(Wt=nt.x,_e=nt.y,se=nt.z):(Wt=0,_e=0,se=0);let rn=ie.convert(Y.format),Ee=ie.convert(Y.type),Jt;Y.isData3DTexture?(C.setTexture3D(Y,0),Jt=F.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(C.setTexture2DArray(Y,0),Jt=F.TEXTURE_2D_ARRAY):(C.setTexture2D(Y,0),Jt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Y.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Y.unpackAlignment);let Fn=F.getParameter(F.UNPACK_ROW_LENGTH),ye=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Cn=F.getParameter(F.UNPACK_SKIP_PIXELS),pi=F.getParameter(F.UNPACK_SKIP_ROWS),xn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Se.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Se.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Gt),F.pixelStorei(F.UNPACK_SKIP_ROWS,ne),F.pixelStorei(F.UNPACK_SKIP_IMAGES,oe);let Xn=R.isDataArrayTexture||R.isData3DTexture,Ce=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let zn=ht.get(R),ni=ht.get(Y),Ke=ht.get(zn.__renderTarget),Pn=ht.get(ni.__renderTarget);Q.bindFramebuffer(F.READ_FRAMEBUFFER,Ke.__webglFramebuffer),Q.bindFramebuffer(F.DRAW_FRAMEBUFFER,Pn.__webglFramebuffer);for(let In=0;In<qt;In++)Xn&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ht.get(R).__webglTexture,J,oe+In),R.isDepthTexture?(Ce&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ht.get(Y).__webglTexture,J,se+In),F.blitFramebuffer(Gt,ne,St,Ot,Wt,_e,St,Ot,F.DEPTH_BUFFER_BIT,F.NEAREST)):Ce?F.copyTexSubImage3D(Jt,J,Wt,_e,se+In,Gt,ne,St,Ot):F.copyTexSubImage2D(Jt,J,Wt,_e,se+In,Gt,ne,St,Ot);Q.bindFramebuffer(F.READ_FRAMEBUFFER,null),Q.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ce?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Jt,J,Wt,_e,se,St,Ot,qt,rn,Ee,Se.data):Y.isCompressedArrayTexture?F.compressedTexSubImage3D(Jt,J,Wt,_e,se,St,Ot,qt,rn,Se.data):F.texSubImage3D(Jt,J,Wt,_e,se,St,Ot,qt,rn,Ee,Se):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,J,Wt,_e,St,Ot,rn,Ee,Se.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,J,Wt,_e,Se.width,Se.height,rn,Se.data):F.texSubImage2D(F.TEXTURE_2D,J,Wt,_e,St,Ot,rn,Ee,Se);F.pixelStorei(F.UNPACK_ROW_LENGTH,Fn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ye),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Cn),F.pixelStorei(F.UNPACK_SKIP_ROWS,pi),F.pixelStorei(F.UNPACK_SKIP_IMAGES,xn),J===0&&Y.generateMipmaps&&F.generateMipmap(Jt),Q.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,et=null,nt=null,J=0){return R.isTexture!==!0&&(Fr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,nt=arguments[1]||null,R=arguments[2],Y=arguments[3],J=arguments[4]||0),Fr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Y,et,nt,J)},this.initRenderTarget=function(R){ht.get(R).__webglFramebuffer===void 0&&C.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?C.setTextureCube(R,0):R.isData3DTexture?C.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?C.setTexture2DArray(R,0):C.setTexture2D(R,0),Q.unbindTexture()},this.resetState=function(){P=0,I=0,L=null,Q.reset(),Re.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ve._getDrawingBufferColorSpace(t),e.unpackColorSpace=ve._getUnpackColorSpace()}};var ga=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Qt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},jr=class extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},xa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=_l,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},yn=new D,Qr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyMatrix4(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyNormalMatrix(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.transformDirection(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=$n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=$n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=$n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=$n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=$n(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array),r=we(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new tn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},qi=class extends Ri{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ys,Ir=new D,qs=new D,Zs=new D,Js=new pt,Dr=new pt,Ad=new be,Wo=new D,Lr=new D,Xo=new D,Vu=new pt,Ac=new pt,Gu=new pt,ms=class extends Ve{constructor(t=new qi){if(super(),this.isSprite=!0,this.type="Sprite",Ys===void 0){Ys=new Te;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new xa(e,5);Ys.setIndex([0,1,2,0,2,3]),Ys.setAttribute("position",new Qr(n,3,0,!1)),Ys.setAttribute("uv",new Qr(n,2,3,!1))}this.geometry=Ys,this.material=t,this.center=new pt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qs.setFromMatrixScale(this.matrixWorld),Ad.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Zs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qs.multiplyScalar(-Zs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Yo(Wo.set(-.5,-.5,0),Zs,o,qs,s,r),Yo(Lr.set(.5,-.5,0),Zs,o,qs,s,r),Yo(Xo.set(.5,.5,0),Zs,o,qs,s,r),Vu.set(0,0),Ac.set(1,0),Gu.set(1,1);let a=t.ray.intersectTriangle(Wo,Lr,Xo,!1,Ir);if(a===null&&(Yo(Lr.set(-.5,.5,0),Zs,o,qs,s,r),Ac.set(0,1),a=t.ray.intersectTriangle(Wo,Xo,Lr,!1,Ir),a===null))return;let c=t.ray.origin.distanceTo(Ir);c<t.near||c>t.far||e.push({distance:c,point:Ir.clone(),uv:ki.getInterpolation(Ir,Wo,Lr,Xo,Vu,Ac,Gu,new pt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Yo(i,t,e,n,s,r){Js.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Dr.x=r*Js.x-s*Js.y,Dr.y=s*Js.x+r*Js.y):Dr.copy(Js),i.copy(t),i.x+=Dr.x,i.y+=Dr.y,i.applyMatrix4(Ad)}var Nl=class extends Mn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=hn,h=hn,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var to=class extends tn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},$s=new be,Wu=new be,qo=[],Xu=new Ai,c_=new be,Ur=new st,Nr=new Xi,Ci=class extends st{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new to(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,c_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ai),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$s),Xu.copy(t.boundingBox).applyMatrix4($s),this.boundingBox.union(Xu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$s),Nr.copy(t.boundingSphere).applyMatrix4($s),this.boundingSphere.union(Nr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ur.geometry=this.geometry,Ur.material=this.material,Ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nr.copy(this.boundingSphere),Nr.applyMatrix4(n),t.ray.intersectsSphere(Nr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$s),Wu.multiplyMatrices(n,$s),Ur.matrixWorld=Wu,Ur.raycast(t,qo);for(let o=0,a=qo.length;o<a;o++){let c=qo[o];c.instanceId=r,c.object=this,e.push(c)}qo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new to(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nl(new Float32Array(s*this.count),s,this.count,ah,oi));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Zi=class extends Ri{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Yu=new be,Ol=new ps,Zo=new Xi,Jo=new D,gs=class extends Ve{constructor(t=new Te,e=new Zi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(s),Zo.radius+=r,t.ray.intersectsSphere(Zo)===!1)return;Yu.copy(s).invert(),Ol.copy(t.ray).applyMatrix4(Yu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,_=p;g<_;g++){let m=l.getX(g);Jo.fromBufferAttribute(u,m),qu(Jo,m,c,s,t,e,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++)Jo.fromBufferAttribute(u,g),qu(Jo,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function qu(i,t,e,n,s,r,o){let a=Ol.distanceSqToPoint(i);if(a<e){let c=new D;Ol.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var En=class extends Mn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new pt:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new D,s=[],r=[],o=[],a=new D,c=new be;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(qe(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(qe(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},eo=class extends kn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new pt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Fl=class extends eo{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function fh(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var $o=new D,Rc=new fh,Cc=new fh,Pc=new fh,lr=class extends kn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:($o.subVectors(s[0],s[1]).add(s[0]),l=$o);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:($o.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=$o),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Rc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),Cc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),Pc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Rc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Cc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Pc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Rc.calc(c),Cc.calc(c),Pc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Zu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function l_(i,t){let e=1-i;return e*e*t}function h_(i,t){return 2*(1-i)*i*t}function u_(i,t){return i*i*t}function Vr(i,t,e,n){return l_(i,t)+h_(i,e)+u_(i,n)}function d_(i,t){let e=1-i;return e*e*e*t}function f_(i,t){let e=1-i;return 3*e*e*i*t}function p_(i,t){return 3*(1-i)*i*i*t}function m_(i,t){return i*i*i*t}function Gr(i,t,e,n,s){return d_(i,t)+f_(i,e)+p_(i,n)+m_(i,s)}var _a=class extends kn{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Gr(t,s.x,r.x,o.x,a.x),Gr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},zl=class extends kn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Gr(t,s.x,r.x,o.x,a.x),Gr(t,s.y,r.y,o.y,a.y),Gr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ya=class extends kn{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Bl=class extends kn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},va=class extends kn{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Vr(t,s.x,r.x,o.x),Vr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ma=class extends kn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Vr(t,s.x,r.x,o.x),Vr(t,s.y,r.y,o.y),Vr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ea=class extends kn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Zu(a,c.x,l.x,h.x,u.x),Zu(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new pt().fromArray(s))}return this}},ba=Object.freeze({__proto__:null,ArcCurve:Fl,CatmullRomCurve3:lr,CubicBezierCurve:_a,CubicBezierCurve3:zl,EllipseCurve:eo,LineCurve:ya,LineCurve3:Bl,QuadraticBezierCurve:va,QuadraticBezierCurve3:Ma,SplineCurve:Ea}),Hl=class extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ba[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new ba[s.type]().fromJSON(s))}return this}},Sa=class extends Hl{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ya(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new va(this.currentPoint.clone(),new pt(t,e),new pt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new _a(this.currentPoint.clone(),new pt(t,e),new pt(n,s),new pt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ea(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new eo(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},no=class i extends Te{constructor(t=[new pt(0,-.5),new pt(.5,0),new pt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=qe(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new D,d=new pt,p=new D,g=new D,_=new D,m=0,f=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,f=t[b+1].y-t[b].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[b+1].x-t[b].x,f=t[b+1].y-t[b].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),c.push(p.x,p.y,p.z),_.copy(g)}for(let b=0;b<=e;b++){let y=n+b*h*s,M=Math.sin(y),U=Math.cos(y);for(let P=0;P<=t.length-1;P++){u.x=t[P].x*M,u.y=t[P].y,u.z=t[P].x*U,o.push(u.x,u.y,u.z),d.x=b/e,d.y=P/(t.length-1),a.push(d.x,d.y);let I=c[3*P+0]*M,L=c[3*P+1],T=c[3*P+0]*U;l.push(I,L,T)}}for(let b=0;b<e;b++)for(let y=0;y<t.length-1;y++){let M=y+b*t.length,U=M,P=M+t.length,I=M+t.length+1,L=M+1;r.push(U,P,L),r.push(I,L,P)}this.setIndex(r),this.setAttribute("position",new re(o,3)),this.setAttribute("uv",new re(a,2)),this.setAttribute("normal",new re(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var xs=class i extends Te{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new D,h=new pt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(a,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},le=class i extends Te{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,_=[],m=n/2,f=0;b(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(p,2));function b(){let M=new D,U=new D,P=0,I=(e-t)/n;for(let L=0;L<=r;L++){let T=[],w=L/r,z=w*(e-t)+t;for(let B=0;B<=s;B++){let H=B/s,Z=H*c+a,W=Math.sin(Z),K=Math.cos(Z);U.x=z*W,U.y=-w*n+m,U.z=z*K,u.push(U.x,U.y,U.z),M.set(W,I,K).normalize(),d.push(M.x,M.y,M.z),p.push(H,1-w),T.push(g++)}_.push(T)}for(let L=0;L<s;L++)for(let T=0;T<r;T++){let w=_[T][L],z=_[T+1][L],B=_[T+1][L+1],H=_[T][L+1];(t>0||T!==0)&&(h.push(w,z,H),P+=3),(e>0||T!==r-1)&&(h.push(z,B,H),P+=3)}l.addGroup(f,P,0),f+=P}function y(M){let U=g,P=new pt,I=new D,L=0,T=M===!0?t:e,w=M===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,m*w,0),d.push(0,w,0),p.push(.5,.5),g++;let z=g;for(let B=0;B<=s;B++){let Z=B/s*c+a,W=Math.cos(Z),K=Math.sin(Z);I.x=T*K,I.y=m*w,I.z=T*W,u.push(I.x,I.y,I.z),d.push(0,w,0),P.x=W*.5+.5,P.y=K*.5*w+.5,p.push(P.x,P.y),g++}for(let B=0;B<s;B++){let H=U+B,Z=z+B;M===!0?h.push(Z,Z+1,H):h.push(Z+1,Z,H),L+=3}l.addGroup(f,L,M===!0?1:2),f+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ji=class i extends le{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},wa=class i extends Te{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let y=new D,M=new D,U=new D;for(let P=0;P<e.length;P+=3)p(e[P+0],y),p(e[P+1],M),p(e[P+2],U),c(y,M,U,b)}function c(b,y,M,U){let P=U+1,I=[];for(let L=0;L<=P;L++){I[L]=[];let T=b.clone().lerp(M,L/P),w=y.clone().lerp(M,L/P),z=P-L;for(let B=0;B<=z;B++)B===0&&L===P?I[L][B]=T:I[L][B]=T.clone().lerp(w,B/z)}for(let L=0;L<P;L++)for(let T=0;T<2*(P-L)-1;T++){let w=Math.floor(T/2);T%2===0?(d(I[L][w+1]),d(I[L+1][w]),d(I[L][w])):(d(I[L][w+1]),d(I[L+1][w+1]),d(I[L+1][w]))}}function l(b){let y=new D;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(b),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function h(){let b=new D;for(let y=0;y<r.length;y+=3){b.x=r[y+0],b.y=r[y+1],b.z=r[y+2];let M=m(b)/2/Math.PI+.5,U=f(b)/Math.PI+.5;o.push(M,1-U)}g(),u()}function u(){for(let b=0;b<o.length;b+=6){let y=o[b+0],M=o[b+2],U=o[b+4],P=Math.max(y,M,U),I=Math.min(y,M,U);P>.9&&I<.1&&(y<.2&&(o[b+0]+=1),M<.2&&(o[b+2]+=1),U<.2&&(o[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function p(b,y){let M=b*3;y.x=t[M+0],y.y=t[M+1],y.z=t[M+2]}function g(){let b=new D,y=new D,M=new D,U=new D,P=new pt,I=new pt,L=new pt;for(let T=0,w=0;T<r.length;T+=9,w+=6){b.set(r[T+0],r[T+1],r[T+2]),y.set(r[T+3],r[T+4],r[T+5]),M.set(r[T+6],r[T+7],r[T+8]),P.set(o[w+0],o[w+1]),I.set(o[w+2],o[w+3]),L.set(o[w+4],o[w+5]),U.copy(b).add(y).add(M).divideScalar(3);let z=m(U);_(P,w+0,b,z),_(I,w+2,y,z),_(L,w+4,M,z)}}function _(b,y,M,U){U<0&&b.x===1&&(o[y]=b.x-1),M.x===0&&M.z===0&&(o[y]=U/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function f(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Pi=class extends Sa{constructor(t){super(t),this.uuid=ai(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Sa().fromJSON(s))}return this}},g_={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Rd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,p;if(n&&(r=M_(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return io(r,o,e,a,c,p,0),o}};function Rd(i,t,e,n,s){let r,o;if(s===D_(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Ju(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Ju(r,i[r],i[r+1],o);return o&&Na(o,o.next)&&(ro(o),o=o.next),o}function _s(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Na(e,e.next)||He(e.prev,e,e.next)===0)){if(ro(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function io(i,t,e,n,s,r,o){if(!i)return;!o&&r&&T_(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?__(i,n,s,r):x_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),ro(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=y_(_s(i),t,e),io(i,t,e,n,s,r,2)):o===2&&v_(i,t,e,n,s,r):io(_s(i),t,e,n,s,r,1);break}}}function x_(i){let t=i.prev,e=i,n=i.next;if(He(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&js(s,a,r,c,o,l,g.x,g.y)&&He(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function __(i,t,e,n){let s=i.prev,r=i,o=i.next;if(He(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,p=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,f=kl(p,g,t,e,n),b=kl(_,m,t,e,n),y=i.prevZ,M=i.nextZ;for(;y&&y.z>=f&&M&&M.z<=b;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&js(a,h,c,u,l,d,y.x,y.y)&&He(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=p&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&js(a,h,c,u,l,d,M.x,M.y)&&He(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&js(a,h,c,u,l,d,y.x,y.y)&&He(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=b;){if(M.x>=p&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&js(a,h,c,u,l,d,M.x,M.y)&&He(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function y_(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Na(s,r)&&Cd(s,n,n.next,r)&&so(s,r)&&so(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),ro(n),ro(n.next),n=i=r),n=n.next}while(n!==i);return _s(n)}function v_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&C_(o,a)){let c=Pd(o,a);o=_s(o,o.next),c=_s(c,c.next),io(o,t,e,n,s,r,0),io(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function M_(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Rd(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(R_(l));for(s.sort(E_),r=0;r<s.length;r++)e=b_(s[r],e);return e}function E_(i,t){return i.x-t.x}function b_(i,t){let e=S_(i,t);if(!e)return t;let n=Pd(e,i);return _s(n,n.next),_s(e,e.next)}function S_(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&js(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),so(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&w_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function w_(i,t){return He(i.prev,i,t.prev)<0&&He(t.next,i,i.next)<0}function T_(i,t,e,n){let s=i;do s.z===0&&(s.z=kl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,A_(s)}function A_(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function kl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function R_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function js(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function C_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!P_(i,t)&&(so(i,t)&&so(t,i)&&I_(i,t)&&(He(i.prev,i,t.prev)||He(i,t.prev,t))||Na(i,t)&&He(i.prev,i,i.next)>0&&He(t.prev,t,t.next)>0)}function He(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Na(i,t){return i.x===t.x&&i.y===t.y}function Cd(i,t,e,n){let s=jo(He(i,t,e)),r=jo(He(i,t,n)),o=jo(He(e,n,i)),a=jo(He(e,n,t));return!!(s!==r&&o!==a||s===0&&Ko(i,e,t)||r===0&&Ko(i,n,t)||o===0&&Ko(e,i,n)||a===0&&Ko(e,t,n))}function Ko(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function jo(i){return i>0?1:i<0?-1:0}function P_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Cd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function so(i,t){return He(i.prev,i,i.next)<0?He(i,t,i.next)>=0&&He(i,i.prev,t)>=0:He(i,t,i.prev)<0||He(i,i.next,t)<0}function I_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Pd(i,t){let e=new Vl(i.i,i.x,i.y),n=new Vl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ju(i,t,e,n){let s=new Vl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ro(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Vl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function D_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Wr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];$u(t),Ku(n,t);let o=t.length;e.forEach($u);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Ku(n,e[c]);let a=g_.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function $u(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ku(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ii=class i extends Te{constructor(t=new Pi([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new re(s,3)),this.setAttribute("uv",new re(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:L_,y,M=!1,U,P,I,L;f&&(y=f.getSpacedPoints(h),M=!0,d=!1,U=f.computeFrenetFrames(h,!1),P=new D,I=new D,L=new D),d||(m=0,p=0,g=0,_=0);let T=a.extractPoints(l),w=T.shape,z=T.holes;if(!Wr.isClockWise(w)){w=w.reverse();for(let ft=0,Mt=z.length;ft<Mt;ft++){let F=z[ft];Wr.isClockWise(F)&&(z[ft]=F.reverse())}}let H=Wr.triangulateShape(w,z),Z=w;for(let ft=0,Mt=z.length;ft<Mt;ft++){let F=z[ft];w=w.concat(F)}function W(ft,Mt,F){return Mt||console.error("THREE.ExtrudeGeometry: vec does not exist"),ft.clone().addScaledVector(Mt,F)}let K=w.length,mt=H.length;function j(ft,Mt,F){let kt,_t,zt,Q=ft.x-Mt.x,xt=ft.y-Mt.y,ht=F.x-ft.x,C=F.y-ft.y,S=Q*Q+xt*xt,V=Q*C-xt*ht;if(Math.abs(V)>Number.EPSILON){let $=Math.sqrt(S),it=Math.sqrt(ht*ht+C*C),tt=Mt.x-xt/$,At=Mt.y+Q/$,ot=F.x-C/it,Et=F.y+ht/it,Tt=((ot-tt)*C-(Et-At)*ht)/(Q*C-xt*ht);kt=tt+Q*Tt-ft.x,_t=At+xt*Tt-ft.y;let rt=kt*kt+_t*_t;if(rt<=2)return new pt(kt,_t);zt=Math.sqrt(rt/2)}else{let $=!1;Q>Number.EPSILON?ht>Number.EPSILON&&($=!0):Q<-Number.EPSILON?ht<-Number.EPSILON&&($=!0):Math.sign(xt)===Math.sign(C)&&($=!0),$?(kt=-xt,_t=Q,zt=Math.sqrt(S)):(kt=Q,_t=xt,zt=Math.sqrt(S/2))}return new pt(kt/zt,_t/zt)}let at=[];for(let ft=0,Mt=Z.length,F=Mt-1,kt=ft+1;ft<Mt;ft++,F++,kt++)F===Mt&&(F=0),kt===Mt&&(kt=0),at[ft]=j(Z[ft],Z[F],Z[kt]);let Rt=[],It,Ut=at.concat();for(let ft=0,Mt=z.length;ft<Mt;ft++){let F=z[ft];It=[];for(let kt=0,_t=F.length,zt=_t-1,Q=kt+1;kt<_t;kt++,zt++,Q++)zt===_t&&(zt=0),Q===_t&&(Q=0),It[kt]=j(F[kt],F[zt],F[Q]);Rt.push(It),Ut=Ut.concat(It)}for(let ft=0;ft<m;ft++){let Mt=ft/m,F=p*Math.cos(Mt*Math.PI/2),kt=g*Math.sin(Mt*Math.PI/2)+_;for(let _t=0,zt=Z.length;_t<zt;_t++){let Q=W(Z[_t],at[_t],kt);wt(Q.x,Q.y,-F)}for(let _t=0,zt=z.length;_t<zt;_t++){let Q=z[_t];It=Rt[_t];for(let xt=0,ht=Q.length;xt<ht;xt++){let C=W(Q[xt],It[xt],kt);wt(C.x,C.y,-F)}}}let pe=g+_;for(let ft=0;ft<K;ft++){let Mt=d?W(w[ft],Ut[ft],pe):w[ft];M?(I.copy(U.normals[0]).multiplyScalar(Mt.x),P.copy(U.binormals[0]).multiplyScalar(Mt.y),L.copy(y[0]).add(I).add(P),wt(L.x,L.y,L.z)):wt(Mt.x,Mt.y,0)}for(let ft=1;ft<=h;ft++)for(let Mt=0;Mt<K;Mt++){let F=d?W(w[Mt],Ut[Mt],pe):w[Mt];M?(I.copy(U.normals[ft]).multiplyScalar(F.x),P.copy(U.binormals[ft]).multiplyScalar(F.y),L.copy(y[ft]).add(I).add(P),wt(L.x,L.y,L.z)):wt(F.x,F.y,u/h*ft)}for(let ft=m-1;ft>=0;ft--){let Mt=ft/m,F=p*Math.cos(Mt*Math.PI/2),kt=g*Math.sin(Mt*Math.PI/2)+_;for(let _t=0,zt=Z.length;_t<zt;_t++){let Q=W(Z[_t],at[_t],kt);wt(Q.x,Q.y,u+F)}for(let _t=0,zt=z.length;_t<zt;_t++){let Q=z[_t];It=Rt[_t];for(let xt=0,ht=Q.length;xt<ht;xt++){let C=W(Q[xt],It[xt],kt);M?wt(C.x,C.y+y[h-1].y,y[h-1].x+F):wt(C.x,C.y,u+F)}}}ut(),bt();function ut(){let ft=s.length/3;if(d){let Mt=0,F=K*Mt;for(let kt=0;kt<mt;kt++){let _t=H[kt];Zt(_t[2]+F,_t[1]+F,_t[0]+F)}Mt=h+m*2,F=K*Mt;for(let kt=0;kt<mt;kt++){let _t=H[kt];Zt(_t[0]+F,_t[1]+F,_t[2]+F)}}else{for(let Mt=0;Mt<mt;Mt++){let F=H[Mt];Zt(F[2],F[1],F[0])}for(let Mt=0;Mt<mt;Mt++){let F=H[Mt];Zt(F[0]+K*h,F[1]+K*h,F[2]+K*h)}}n.addGroup(ft,s.length/3-ft,0)}function bt(){let ft=s.length/3,Mt=0;Ft(Z,Mt),Mt+=Z.length;for(let F=0,kt=z.length;F<kt;F++){let _t=z[F];Ft(_t,Mt),Mt+=_t.length}n.addGroup(ft,s.length/3-ft,1)}function Ft(ft,Mt){let F=ft.length;for(;--F>=0;){let kt=F,_t=F-1;_t<0&&(_t=ft.length-1);for(let zt=0,Q=h+m*2;zt<Q;zt++){let xt=K*zt,ht=K*(zt+1),C=Mt+kt+xt,S=Mt+_t+xt,V=Mt+_t+ht,$=Mt+kt+ht;Kt(C,S,V,$)}}}function wt(ft,Mt,F){c.push(ft),c.push(Mt),c.push(F)}function Zt(ft,Mt,F){ee(ft),ee(Mt),ee(F);let kt=s.length/3,_t=b.generateTopUV(n,s,kt-3,kt-2,kt-1);me(_t[0]),me(_t[1]),me(_t[2])}function Kt(ft,Mt,F,kt){ee(ft),ee(Mt),ee(kt),ee(Mt),ee(F),ee(kt);let _t=s.length/3,zt=b.generateSideWallUV(n,s,_t-6,_t-3,_t-2,_t-1);me(zt[0]),me(zt[1]),me(zt[3]),me(zt[1]),me(zt[2]),me(zt[3])}function ee(ft){s.push(c[ft*3+0]),s.push(c[ft*3+1]),s.push(c[ft*3+2])}function me(ft){r.push(ft.x),r.push(ft.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return U_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ba[s.type]().fromJSON(s)),new i(n,t.options)}},L_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new pt(r,o),new pt(a,c),new pt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new pt(o,1-c),new pt(l,1-u),new pt(d,1-g),new pt(_,1-f)]:[new pt(a,1-c),new pt(h,1-u),new pt(p,1-g),new pt(m,1-f)]}};function U_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var li=class i extends wa{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Ta=class i extends wa{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},oo=class i extends Te{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,d=(e-t)/s,p=new D,g=new pt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let f=r+m/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){let m=_*(n+1);for(let f=0;f<n;f++){let b=f+m,y=b,M=b+n+1,U=b+n+2,P=b+1;a.push(y,M,P),a.push(M,U,P)}}this.setIndex(a),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Me=class i extends Te{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new D,d=new D,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){let b=[],y=f/n,M=0;f===0&&o===0?M=.5/e:f===n&&c===Math.PI&&(M=-.5/e);for(let U=0;U<=e;U++){let P=U/e;u.x=-t*Math.cos(s+P*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+P*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(P+M,1-y),b.push(l++)}h.push(b)}for(let f=0;f<n;f++)for(let b=0;b<e;b++){let y=h[f][b+1],M=h[f][b],U=h[f+1][b],P=h[f+1][b+1];(f!==0||o>0)&&p.push(y,M,P),(f!==n-1||c<Math.PI)&&p.push(M,U,P)}this.setIndex(p),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Di=class i extends Te{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new D,u=new D,d=new D;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let _=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,b=(s+1)*p+g;o.push(_,m,b),o.push(m,f,b)}this.setIndex(o),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Aa=class i extends Te{constructor(t=new Ma(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new D,c=new D,l=new pt,h=new D,u=[],d=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(p,2));function _(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),b(),f()}function m(y){h=t.getPointAt(y/e,h);let M=o.normals[y],U=o.binormals[y];for(let P=0;P<=s;P++){let I=P/s*Math.PI*2,L=Math.sin(I),T=-Math.cos(I);c.x=T*M.x+L*U.x,c.y=T*M.y+L*U.y,c.z=T*M.z+L*U.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function f(){for(let y=1;y<=e;y++)for(let M=1;M<=s;M++){let U=(s+1)*(y-1)+(M-1),P=(s+1)*y+(M-1),I=(s+1)*y+M,L=(s+1)*(y-1)+M;g.push(U,P,L),g.push(P,I,L)}}function b(){for(let y=0;y<=e;y++)for(let M=0;M<=s;M++)l.x=y/e,l.y=M/s,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new ba[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var xe=class extends Ri{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gd,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Qo(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function N_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var hr=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Gl=class extends hr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yh,endingEnd:Yh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case qh:r=t,a=2*e-n;break;case Zh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case qh:o=t,c=2*n-e;break;case Zh:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,b=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-p)*m+(1.5+p)*_+.5*g,M=p*m-p*_;for(let U=0;U!==a;++U)r[U]=f*o[h+U]+b*o[l+U]+y*o[c+U]+M*o[u+U];return r}},Wl=class extends hr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Xl=class extends hr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Qn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qo(e,this.TimeBufferType),this.values=Qo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Qo(t.times,Array),values:Qo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Xl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Wl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Gl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ra:e=this.InterpolantFactoryMethodDiscrete;break;case xl:e=this.InterpolantFactoryMethodLinear;break;case tc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ra;case this.InterpolantFactoryMethodLinear:return xl;case this.InterpolantFactoryMethodSmooth:return tc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&N_(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===tc,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[p+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=xl;var ys=class extends Qn{constructor(t,e,n){super(t,e,n)}};ys.prototype.ValueTypeName="bool";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=ra;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;var Yl=class extends Qn{};Yl.prototype.ValueTypeName="color";var ql=class extends Qn{};ql.prototype.ValueTypeName="number";var Zl=class extends hr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)jn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ra=class extends Qn{InterpolantFactoryMethodLinear(t){return new Zl(this.times,this.values,this.getValueSize(),t)}};Ra.prototype.ValueTypeName="quaternion";Ra.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends Qn{constructor(t,e,n){super(t,e,n)}};vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=ra;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var Jl=class extends Qn{};Jl.prototype.ValueTypeName="vector";var ju={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},$l=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},O_=new $l,ao=class{constructor(t){this.manager=t!==void 0?t:O_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ao.DEFAULT_MATERIAL_NAME="__DEFAULT";var Kl=class extends ao{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=ju.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=Zr("img");function c(){h(),ju.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var co=class extends ao{constructor(t){super(t)}load(t,e,n,s){let r=new Mn,o=new Kl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},lo=class extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ho=class extends lo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ic=new be,Qu=new D,td=new D,Ca=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $r,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Qu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qu),td.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(td),e.updateMatrixWorld(),Ic.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ic),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ic)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ed=new be,Or=new D,Dc=new D,jl=class extends Ca{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new Ie(2,1,1,1),new Ie(0,1,1,1),new Ie(3,1,1,1),new Ie(1,1,1,1),new Ie(3,0,1,1),new Ie(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Or.setFromMatrixPosition(t.matrixWorld),n.position.copy(Or),Dc.copy(n.position),Dc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Dc),n.updateMatrixWorld(),s.makeTranslation(-Or.x,-Or.y,-Or.z),ed.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ed)}},uo=class extends lo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new jl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Ql=class extends Ca{constructor(){super(new fa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fo=class extends lo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new Ql}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var po=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=nd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function nd(){return performance.now()}var ph="\\[\\]\\.:\\/",F_=new RegExp("["+ph+"]","g"),mh="[^"+ph+"]",z_="[^"+ph.replace("\\.","")+"]",B_=/((?:WC+[\/:])*)/.source.replace("WC",mh),H_=/(WCOD+)?/.source.replace("WCOD",z_),k_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mh),V_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mh),G_=new RegExp("^"+B_+H_+k_+V_+"$"),W_=["material","materials","bones","map"],th=class{constructor(t,e,n){let s=n||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(F_,"")}static parseTrackName(t){let e=G_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);W_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=th;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zy=new Float32Array(1);var id=new be,mo=class{constructor(t,e,n=0,s=1/0){this.ray=new ps(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Jr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return id.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(id),this}intersectObject(t,e=!0,n=[]){return eh(t,this,n,e),n.sort(sd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)eh(t[s],this,n,e);return n.sort(sd),n}};function sd(i,t){return i.distance-t.distance}function eh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)eh(r[o],t,e,!0)}}var Ms=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(qe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Pa=class extends wi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nh}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nh);var Id={type:"change"},xh={type:"start"},Ld={type:"end"},Oa=new ps,Dd=new Jn,Y_=Math.cos(70*_d.DEG2RAD),$e=new D,Tn=2*Math.PI,De={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},gh=1e-6,Fa=class extends Pa{constructor(t,e=null){super(t,e),this.state=De.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Es.ROTATE,MIDDLE:Es.DOLLY,RIGHT:Es.PAN},this.touches={ONE:hi.ROTATE,TWO:hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new jn,this._lastTargetPosition=new D,this._quat=new jn().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ms,this._sphericalDelta=new Ms,this._scale=1,this._panOffset=new D,this._rotateStart=new pt,this._rotateEnd=new pt,this._rotateDelta=new pt,this._panStart=new pt,this._panEnd=new pt,this._panDelta=new pt,this._dollyStart=new pt,this._dollyEnd=new pt,this._dollyDelta=new pt,this._dollyDirection=new D,this._mouse=new pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Z_.bind(this),this._onPointerDown=q_.bind(this),this._onPointerUp=J_.bind(this),this._onContextMenu=ny.bind(this),this._onMouseWheel=j_.bind(this),this._onKeyDown=Q_.bind(this),this._onTouchStart=ty.bind(this),this._onTouchMove=ey.bind(this),this._onMouseDown=$_.bind(this),this._onMouseMove=K_.bind(this),this._interceptControlDown=iy.bind(this),this._interceptControlUp=sy.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Id),this.update(),this.state=De.NONE}update(t=null){let e=this.object.position;$e.copy(e).sub(this.target),$e.applyQuaternion(this._quat),this._spherical.setFromVector3($e),this.autoRotate&&this.state===De.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Tn:n>Math.PI&&(n-=Tn),s<-Math.PI?s+=Tn:s>Math.PI&&(s-=Tn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if($e.setFromSpherical(this._spherical),$e.applyQuaternion(this._quatInverse),e.copy(this.target).add($e),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=$e.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=$e.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Oa.origin.copy(this.object.position),Oa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Oa.direction))<Y_?this.object.lookAt(this.target):(Dd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Oa.intersectPlane(Dd,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>gh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>gh||this._lastTargetPosition.distanceToSquared(this.target)>gh?(this.dispatchEvent(Id),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Tn/60*this.autoRotateSpeed*t:Tn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){$e.setFromMatrixColumn(e,0),$e.multiplyScalar(-t),this._panOffset.add($e)}_panUp(t,e){this.screenSpacePanning===!0?$e.setFromMatrixColumn(e,1):($e.setFromMatrixColumn(e,0),$e.crossVectors(this.object.up,$e)),$e.multiplyScalar(t),this._panOffset.add($e)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;$e.copy(s).sub(this.target);let r=$e.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Tn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Tn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Tn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Tn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new pt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function q_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Z_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function J_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ld),this.state=De.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function $_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Es.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=De.DOLLY;break;case Es.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=De.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=De.ROTATE}break;case Es.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=De.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=De.PAN}break;default:this.state=De.NONE}this.state!==De.NONE&&this.dispatchEvent(xh)}function K_(i){switch(this.state){case De.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case De.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case De.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function j_(i){this.enabled===!1||this.enableZoom===!1||this.state!==De.NONE||(i.preventDefault(),this.dispatchEvent(xh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ld))}function Q_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function ty(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case hi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=De.TOUCH_ROTATE;break;case hi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=De.TOUCH_PAN;break;default:this.state=De.NONE}break;case 2:switch(this.touches.TWO){case hi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=De.TOUCH_DOLLY_PAN;break;case hi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=De.TOUCH_DOLLY_ROTATE;break;default:this.state=De.NONE}break;default:this.state=De.NONE}this.state!==De.NONE&&this.dispatchEvent(xh)}function ey(i){switch(this._trackPointer(i),this.state){case De.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case De.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case De.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case De.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=De.NONE}}function ny(i){this.enabled!==!1&&i.preventDefault()}function iy(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function sy(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function xo(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Te,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let p=i[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Ud(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let _=0;_<o[h].length;++_)p.push(o[h][_][d]);let g=Ud(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Ud(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new tn(o,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let d=0,p=h.count;d<p;d++)for(let g=0;g<e;g++){let _=h.getComponent(d,g);a.setComponent(d+u,g,_)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var _o=new D;function Vn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;_o.copy(t),_o[n]=0,_o.normalize();let l=.5*o/(o+a),h=1-_o.angleTo(i)/c;return Math.sign(_o[e])===1?h*l:a/(o+a)+l+l*(1-h)}var za=class extends We{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new D,c=new D,l=new D(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,g=new D,_=.5/s;for(let m=0,f=0;m<h.length;m+=3,f+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/p)){case 0:g.set(1,0,0),d[f+0]=Vn(g,c,"z","y",r,n),d[f+1]=1-Vn(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),d[f+0]=1-Vn(g,c,"z","y",r,n),d[f+1]=1-Vn(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),d[f+0]=1-Vn(g,c,"x","z",r,t),d[f+1]=Vn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[f+0]=1-Vn(g,c,"x","z",r,t),d[f+1]=1-Vn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[f+0]=1-Vn(g,c,"x","y",r,t),d[f+1]=1-Vn(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),d[f+0]=Vn(g,c,"x","y",r,t),d[f+1]=1-Vn(g,c,"y","x",r,e);break}}};var ry={land:{W:320,H:236,houses:[[16,116],[52,116],[88,116],[124,116],[172,116],[208,116],[244,116],[16,150],[52,150],[192,23],[66,24],[88,150],[124,150],[16,186],[52,186],[88,186],[124,187],[180,152]],hall:[134,38],pond:[264,206],pondR:[8,4],hill:{x:160,y:46,w:216,h:74,r:12,height:3.2},ramp:{x:160,from:83,to:110.5},lot:{house:9,x0:172,y0:12,x1:258,y1:66,car:[226,54.4],swing:[186,40]},roads:[[8,110.5,312,110.5],[8,144.5,312,144.5],[8,180.5,206,180.5],[8,214.5,170,214.5],[46,110.5,46,214.5],[160,110.5,160,214.5],[64,70,258,70],[160,70,160,110.5]],river:[[292,30],[296,70],[292,110.5],[288,144.5],[282,175],[272,194]],mountains:[[-22,-32.5,5,11],[-8,-34.5,6,14],[8,-34.5,5.5,12],[22,-32,5,11],[33,-26,4.5,9]]},port:{W:200,H:360,houses:[[8,132],[8,184],[8,236],[8,288],[168,132],[168,184],[168,236],[168,288],[56,134],[132,51],[16,56],[88,134],[120,134],[56,186],[88,186],[120,186],[60,239],[116,239]],hall:[68,30],pond:[100,318],pondR:[6.5,3.6],hill:{x:100,y:52,w:184,h:96,r:12,height:3.2},ramp:{x:100,from:100,to:124.5},lot:{house:9,x0:110,y0:40,x1:186,y1:90,car:[166,81.6],swing:[122,66]},roads:[[44.5,124.5,155.5,124.5],[44.5,124.5,44.5,330],[155.5,124.5,155.5,312],[44.5,162.5,155.5,162.5],[44.5,214.5,155.5,214.5],[44.5,274.5,155.5,274.5],[16,94,186,94],[100,94,100,124.5]],river:[[206,24],[210,120],[206,230],[200,300],[170,330],[128,322]],mountains:[[-16,-48.5,4.5,10],[-2,-49.5,5,12],[12,-49,4.5,11],[24,-45.5,4,9]]}},Le,Xe,bn,Xt,pn,en,xr,sn,Gn,vo,mr,Sn,di;function Wd(i){Le=ry[i];let t=(o,a)=>[(o-Le.W/2)/4,(a-Le.H/2)/4];Xe=Le.houses.map(([o,a])=>t(o+12,a+11)),bn=t(Le.hall[0],Le.hall[1]);let e=t(Le.pond[0],Le.pond[1]);Xt={x:e[0],z:e[1],rx:Le.pondR[0],rz:Le.pondR[1]},pn=Le.roads.map(([o,a,c,l])=>t(o,a).concat(t(c,l)));let n=t(Le.hill.x,Le.hill.y);xr={x:n[0],z:n[1],hw:Le.hill.w/8,hd:Le.hill.h/8,r:Le.hill.r/4,h:Le.hill.height},sn={x:t(Le.ramp.x,0)[0],z0:t(0,Le.ramp.from)[1],z1:t(0,Le.ramp.to)[1],hw:1.1},Gn=Le.river.map(([o,a])=>{let c=t(o,a);return{x:c[0],z:c[1]}}),vo=Le.mountains.map(o=>o.slice());{let o=Gn[0],a=0,c=1e9;vo.forEach(([g,_],m)=>{let f=Math.hypot(g-o.x,_-o.z);f<c&&(c=f,a=m)});let l=vo[a],h=Gn[1].x-l[0],u=Gn[1].z-l[1],d=Math.hypot(h,u)||1;di={i:a,x:l[0],z:l[1],r:l[2],h:l[3],dx:h/d,dz:u/d},Gn[0]={x:l[0]+di.dx*(l[2]-.2),z:l[1]+di.dz*(l[2]-.2)};let p=Gn[Gn.length-1];Math.hypot(p.x-Xt.x,p.z-Xt.z)<22&&Gn.push({x:Xt.x+(p.x-Xt.x)*.25,z:Xt.z+(p.z-Xt.z)*.25})}if(mr=Xe.map((o,a)=>Le.faces&&Le.faces[a]||0),Sn=null,Le.lot){let o=Le.lot,a=t(o.x0,o.y0),c=t(o.x1,o.y1);Sn={house:o.house,x0:a[0],z0:a[1],x1:c[0],z1:c[1],car:t(o.car[0],o.car[1]),swing:t(o.swing[0],o.swing[1])}}let s=Le.W/8+11,r=Le.H/8+11;en={a:s,b:r,n:2.6,w:s*2,d:r*2}}function Xd(i,t){let e=xr,n=Math.abs(i-e.x)-(e.hw-e.r),s=Math.abs(t-e.z)-(e.hd-e.r);return Math.hypot(Math.max(n,0),Math.max(s,0))+Math.min(Math.max(n,s),0)-e.r}var gr=(i,t)=>Math.abs(i-sn.x)<sn.hw&&t>=sn.z0-.4&&t<=sn.z1;function ze(i,t){return Xd(i,t)<=0?xr.h:gr(i,t)?xr.h*Math.max(0,Math.min(1,1-(t-sn.z0)/(sn.z1-sn.z0))):0}var Ba=(i,t,e)=>{let n=Xd(i,t);return n>-.5-(e||0)&&n<.9+(e||0)&&!gr(i,t)};function Ss(i,t){let e=1e9;for(let n=1;n<Gn.length;n++){let s=Gn[n-1],r=Gn[n],o=r.x-s.x,a=r.z-s.z,c=o*o+a*a,l=Math.max(0,Math.min(1,((i-s.x)*o+(t-s.z)*a)/(c||1)));e=Math.min(e,Math.hypot(i-(s.x+o*l),t-(s.z+a*l)))}return e}var Nd=(i,t,e)=>!!Sn&&i>Sn.x0-(e||0)&&i<Sn.x1+(e||0)&&t>Sn.z0-(e||0)&&t<Sn.z1+(e||0),Yd=3,oy=2.1,ay=Yd,Rn=ay/2,cy=(i,t,e)=>pn.some(([n,s,r,o])=>i>=Math.min(n,r)-Rn-e&&i<=Math.max(n,r)+Rn+e&&t>=Math.min(s,o)-Rn-e&&t<=Math.max(s,o)+Rn+e);function ui(i,t){let e=en,n=Math.abs(Math.cos(i)),s=Math.abs(Math.sin(i));return Math.pow(Math.pow(n/e.a,e.n)+Math.pow(s/e.b,e.n),-1/e.n)*(1+.035*Math.sin(3*i+.7)+.025*Math.sin(5*i+2.1)+.015*Math.sin(8*i))*(t||1)}function Ki(i,t,e){return Math.hypot(i,t)<ui(Math.atan2(t,i))-(e||0)}function Od(i,t){let e=new Pi;for(let n=0;n<=96;n++){let s=n/96*Math.PI*2,r=ui(s,i)-(t||0),o=Math.cos(s)*r,a=-Math.sin(s)*r;n===0?e.moveTo(o,a):e.lineTo(o,a)}return e}Wd("land");var he={grass:12576420,grassSide:10474377,dirt:13214334,dirt2:11569768,road:15983293,wall:16774888,wall2:15785156,door:12882799,frame:15323828,trunk:11042910,leaf:[10147472,8834176,11460768],water:9425898,sand:15983549,lily:8701828,roof:{pink:16165309,peach:16368540,blue:10473444,lav:13219054,mint:10738109,yellow:16111752,hall:15834032},flower:[16758465,16777215,16375946,14273008,16763304]},_h=new Map;function vt(i,t){let e=i+JSON.stringify(t||{});return _h.has(e)||_h.set(e,new xe(Object.assign({color:i},t||{}))),_h.get(e)}var yh=new Map;function ly(i,t,e){let n=Math.min(i,t,e);if(n<.1)return new We(i,t,e);let s=i.toFixed(3)+","+t.toFixed(3)+","+e.toFixed(3);return yh.has(s)||yh.set(s,new za(i,t,e,2,Math.min(n*.28,.32))),yh.get(s)}function N(i,t,e,n,s=0,r=0,o=0,a){let c=new st(ly(i,t,e),a&&a.isMaterial?a:vt(n,a));return c.position.set(s,r,o),c.castShadow=!0,c.receiveShadow=!0,c}function nn(i,t,e,n,s=0,r=0,o=0,a){let c=new st(new We(i,t,e),a&&a.isMaterial?a:vt(n,a));return c.position.set(s,r,o),c.castShadow=!0,c.receiveShadow=!0,c}function _r(i){return()=>(i=i*1664525+1013904223>>>0,i/4294967296)}var Vt=(i,t)=>i+Math.random()*(t-i),un=(i,t,e)=>i+(t-i)*e,$i=(i,t,e=0)=>((i-Xt.x)/(Xt.rx+e))**2+((t-Xt.z)/(Xt.rz+e))**2<1;function Fd(i,t,e,n,s){let r=new Ii(i,s?{depth:t-.5,bevelEnabled:!0,bevelThickness:.25,bevelSize:.35,bevelSegments:5,curveSegments:6}:{depth:t,bevelEnabled:!1,curveSegments:6});s&&r.translate(0,0,.25),r.rotateX(-Math.PI/2);let o=new st(r,vt(e));return o.position.y=n,o.receiveShadow=!0,o}var qd=new ke({transparent:!0,opacity:0,depthWrite:!1}),qa=[],bh=[];function Za(){let i=new xe({color:12576498,emissive:16765562,emissiveIntensity:0});return qa.push(i),i}function hy(i,t,e,n){let s=new Pi;s.moveTo(-i/2-.4,0),s.lineTo(i/2+.4,0),s.lineTo(0,e),s.lineTo(-i/2-.4,0);let r=new Ii(s,{depth:t+.5,bevelEnabled:!0,bevelThickness:.15,bevelSize:.14,bevelSegments:4,curveSegments:4});r.translate(0,0,-(t+.5)/2);let o=new st(r,vt(n));return o.castShadow=!0,o.receiveShadow=!0,o}function ji(i){let t=new Pi;t.moveTo(0,-.5),t.bezierCurveTo(-.9,.1,-.5,.75,0,.35),t.bezierCurveTo(.5,.75,.9,.1,0,-.5);let e=new Ii(t,{depth:.18,bevelEnabled:!1,curveSegments:10});return new st(e,vt(i,{emissive:i,emissiveIntensity:.25}))}function zd(i,t){let e=new Yt,n=!!(i&&i.floors===2),s=t?10:n?6:5.2,r=t?7:n?4.8:4.2,o=t?4.6:n?6.2:3.2,a=t?3.6:2.6,c=n?.3+1.95:.3+o*.6;e.add(N(s+.6,.3,r+.6,he.wall2,0,.15,0)),e.add(N(s,o,r,he.wall,0,.3+o/2,0));let l=hy(s,r,a,t?he.roof.hall:he.roof[i.roof]);l.position.y=.3+o,e.add(l);let h=t?1.9:1.05,u=t?2.8:2.15,d=new Yt;d.position.set(-h/2,.3,r/2+.02),e.add(d),d.add(N(h,u,.12,he.door,h/2,u/2,0)),d.add(N(.12,.12,.08,16375946,h-.25,u/2,.08)),e.add(N(h-.04,u-.04,.05,5916214,0,.3+u/2,r/2-.02)),e.userData.hinge=d,e.add(N(h+.8,.12,.8,he.road,0,.06,r/2+.6));let p=Za();e.userData.wm=p;let g=t?[-3.6,-2,2,3.6]:[-1.6,1.6];if(g.forEach(f=>{e.add(N(1.1,1.1,.1,he.frame,f,c,r/2+.01)),e.add(N(.85,.85,.12,0,f,c,r/2+.03,p))}),[-1,1].forEach(f=>e.add(N(.12,.85,.85,0,f*(s/2+.01),c,0,p))),n){let f=3.5999999999999996;e.add(N(s+.12,.16,r+.12,he.wall2,0,f,0)),[-1,1].forEach(y=>e.add(N(.12,.85,.85,0,y*(s/2+.01),f+1.4,.6,p))),e.add(N(s-.6,.18,1.3,15785156,0,f+.05,r/2+.65));for(let y=0;y<=8;y++)e.add(N(.06,.8,.06,16777215,-(s-.8)/2+y*(s-.8)/8,f+.5,r/2+1.25));e.add(N(s-.6,.07,.08,16777215,0,f+.92,r/2+1.25)),[-1,1].forEach(y=>e.add(N(.07,.07,1.25,16777215,y*(s-.7)/2,f+.92,r/2+.65))),[-2.2,-1.75,1.85,2.3].forEach((y,M)=>{e.add(N(.32,.3,.32,[16368540,16165309][M%2],y,f+.3,r/2+.95));let U=new st(new li(.24,2),vt(he.leaf[M%3],{}));U.position.set(y,f+.6,r/2+.95),U.castShadow=!0,e.add(U),e.add(N(.1,.1,.1,he.flower[M%he.flower.length],y+.08,f+.78,r/2+.98))}),e.add(N(2.3,2.3,.1,16777215,0,f+1.25,r/2+.01));let b=new st(new We(2.1,2.1,.06),new xe({color:12576498,transparent:!0,opacity:.55,emissive:16765562,emissiveIntensity:0}));b.position.set(0,f+1.25,r/2+.05),e.add(b),qa.push(b.material),e.userData.wm2=b.material,e.add(N(.06,2.1,.1,16777215,0,f+1.25,r/2+.07))}if(!t){let f=he.roof[i.roof]||he.roof.pink,b=N(h+.9,.12,.8,f,0,.3+u+.32,r/2+.38);b.rotation.x=.22,e.add(b),[-1,1].forEach(y=>e.add(N(.08,.5,.08,he.frame,y*(h/2+.3),.3+u+.05,r/2+.68))),e.add(N(h+.5,.14,.45,he.wall2,0,.07,r/2+.28)),e.add(N(h+.3,.14,.3,he.wall2,0,.2,r/2+.16)),g.forEach(y=>[-1,1].forEach(M=>e.add(N(.26,1.1,.07,f,y+M*.72,c,r/2+.04)))),e.add(N(.08,.95,.08,he.trunk,s/2+.35,.47,r/2+1.35)),e.add(N(.36,.3,.5,f,s/2+.35,1.05,r/2+1.35)),e.add(N(.06,.18,.06,16744319,s/2+.55,1.2,r/2+1.25)),e.add(N(.6,1.4,.6,he.wall2,s/4,.3+o+a*.55,-r/5)),e.userData.chimney=new D(s/4,.3+o+a*.55+1,-r/5),e.add(N(.8,.2,.8,14862765,s/4,.3+o+a*.55+.75,-r/5)),g.forEach(y=>{e.add(N(1.2,.25,.35,he.door,y,c-.75,r/2+.2)),[-.35,0,.35].forEach((M,U)=>e.add(N(.22,.22,.22,he.flower[U],y+M,c-.52,r/2+.22)))})}if(i&&i.heart){let f=ji(16744350);f.scale.setScalar(.9),f.material=new xe({color:16744350,emissive:16732030,emissiveIntensity:.2}),f.position.set(0,.3+o+a*.42,r/2+.42),e.add(f),e.userData.heart=f}let _=null;if(t){[-1.8,1.8].forEach(M=>e.add(N(.35,o,.35,he.wall2,M,.3+o/2,r/2+.25))),e.add(N(s+.4,.3,.9,he.wall2,0,.3+o+.05,r/2+.1));let f=N(.12,3,.12,he.trunk,0,.3+o+a+1.4,0);e.add(f);let b=N(1.4,.8,.06,16751536,.75,.3+o+a+2.4,0);e.add(b),e.userData.flag=b;let y=new xe({color:16375946,emissive:16739179,emissiveIntensity:0});_=new st(new le(.25,.5,.6,10),y),_.position.set(0,.3+o+a*.42,r/2+.35),e.add(_),e.add(N(1.4,1.4,.1,he.frame,0,.3+o+a*.42,r/2+.25))}e.userData.top=.3+o+a+(t?3.2:.6);let m=new st(new We(s+.6,o+a+.3,r+.6),qd);return m.position.y=(o+a+.3)/2,e.add(m),e.userData.pick=m,e.userData.bell=_,e.userData.doorZ=r/2+1.3,e}function Sh(i,t,e){let n=document.createElement("canvas");n.width=t,n.height=e,i(n.getContext("2d"),t,e);let s=new En(n);return s.colorSpace=Be,s.anisotropy=4,s}function Ph(i,t,e,n,s,r){r=r||0,i.userData.wm=s,i.userData.top=n+.9,i.userData.size={cx:r,hw:t/2+.4,hd:e/2+.3};let o=new st(new We(t+.6,n+.3,e+.6),qd);return o.position.set(r,(n+.3)/2,0),i.add(o),i.userData.pick=o,i.userData.doorZ=e/2+1.3,i}function Ih(i,t,e,n,s){let r=new Yt;r.position.set(-t/2,.3,n),i.add(r),r.add(N(t,e,.1,s,t/2,e/2,0)),r.add(N(.06,.5,.06,14278115,t-.2,e/2,.07)),i.add(N(t-.04,e-.04,.05,3814720,0,.3+e/2,n-.04)),i.userData.hinge=r}function uy(){let i=new Yt,t=6.4,e=5.2,n=3,s=2.8,r=Za();i.add(N(t+5.4,.25,e+.6,15328478,2.3,.12,0)),i.add(N(t,n,e,16513784,0,.25+n/2,0)),[-2.15,2.15].forEach(_=>{i.add(N(1.7,2.45,.08,3814720,_,.25+1.3,e/2+.01)),i.add(N(1.55,2.3,.1,0,_,.25+1.3,e/2+.03,r))}),Ih(i,1.15,2.3,e/2+.03,9067068),i.add(N(t+.3,.18,e+.3,4867664,0,.25+n+.09,0));let o=.25+n+.18,a=Sh((_,m,f)=>{for(let b=0;b<m;b+=4)_.fillStyle=b%8?"#c99166":"#bb8358",_.fillRect(b,0,4,f)},64,16),c=new xe({map:a}),l=new st(new We(t-.6,s,e-.4),c);l.position.set(-.3,o+s/2,-.4),l.castShadow=!0,l.receiveShadow=!0,i.add(l),i.add(N(t-.3,.16,e-.1,4867664,-.3,o+s+.08,-.4));let h=e/2-.4+.01-.2;i.add(N(2.9,2.35,.08,3814720,-.3,o+1.2,h+.02));let u=new st(new We(2.7,2.2,.06),new xe({color:12576498,transparent:!0,opacity:.6,emissive:16765562,emissiveIntensity:0}));u.position.set(-.3,o+1.2,h+.06),i.add(u),qa.push(u.material),i.add(N(.05,2.2,.08,3814720,-.3,o+1.2,h+.08)),i.add(N(t-.4,.14,1.5,15328478,-.2,o+.07,e/2+.55));let d=new st(new We(t-.5,.75,.04),new xe({color:14217722,transparent:!0,opacity:.45}));d.position.set(-.2,o+.52,e/2+1.28),i.add(d),i.add(N(t-.5,.05,.07,3814720,-.2,o+.92,e/2+1.28)),[-2.5,-1.95,1.75,2.3].forEach((_,m)=>{i.add(N(.34,.32,.34,[15921906,9080729][m%2],_,o+.3,e/2+.95));let f=new st(new li(.26,2),vt(he.leaf[m%3],{}));f.position.set(_,o+.62,e/2+.95),f.castShadow=!0,i.add(f)});let p=ji(16744350);p.scale.setScalar(.55),p.material=new xe({color:16744350,emissive:16732030,emissiveIntensity:.25}),p.position.set(-2.2,o+2.05,e/2-.55),i.add(p),i.userData.heart=p;let g=t/2+2.3;i.add(N(4.6,2.9,e,16513784,g,.25+1.45,0)),i.add(N(4.8,.16,e+.2,4867664,g,.25+2.98,0)),i.add(N(3.7,2.3,.08,5592926,g,.25+1.15,e/2+.02));for(let _=0;_<6;_++)i.add(N(3.7,.03,.1,7040630,g,.45+_*.38,e/2+.05));return i.add(N(.5,.05,.05,16777215,g+1.4,2.95,e/2+.12)),[-1,1].forEach(_=>i.add(N(.12,.85,.85,0,_*(t/2+.01)-(_>0,0),.25+1.6,-1.2,r))),i.userData.vip=!0,Ph(i,t+4.6,e,o+s+.2,r,2.3)}function dy(){let i=new Yt,t=9.2,e=6.6,n=3.8,s=Za();i.add(N(t+.6,.25,e+.6,15326447,0,.12,0)),i.add(N(t,n,e,14273008,0,.25+n/2,0)),i.add(N(t+.4,.3,e+.4,16165309,0,.25+n+.15,0)),[-2.8,2.8].forEach(o=>{i.add(N(2.6,2,.1,16777215,o,1.5,e/2+.01)),i.add(N(2.4,1.8,.12,0,o,1.5,e/2+.03,s))}),Ih(i,1.8,2.4,e/2+.03,15834032),[[-1.4,16773544],[0,16758465],[1.4,10934504]].forEach(([o,a])=>{let c=ji(a);c.scale.setScalar(.45),c.position.set(o,.25+n-.55,e/2+.02),i.add(c)});let r=new st(new Me(.55,20,14),vt(16027569));return r.position.set(3.2,.25+n+2.2,-1.5),r.castShadow=!0,i.add(r),i.add(N(.18,1.6,.18,3814720,3.2,.25+n+1.2,-1.5)),i.add(N(1.6,.3,1.6,3814720,3.2,.25+n+.45,-1.5)),Ph(i,t,e,n+2.4,s)}function fy(){let i=new Yt,t=9.2,e=7,n=3.5,s=Za();i.add(N(t+.8,.22,e+.8,14605012,0,.11,0)),i.add(N(t,n,e,16513784,0,.22+n/2,0)),[[15895592,0],[3055195,.22],[14826299,.44]].forEach(([l,h])=>{i.add(N(t+.06,.2,e+.06,l,0,.22+n-.55-h,0))}),i.add(N(t+.5,.25,e+.5,15921906,0,.22+n+.12,0));let r=Sh((l,h,u)=>{l.fillStyle="#d8f1fa",l.fillRect(0,0,h,u);let d=["#ffb6c1","#f5d888","#a3d9bd","#a6d8e8","#f9c39c","#d9c9f0"];for(let p=0;p<4;p++){l.fillStyle="#c9e7f2",l.fillRect(0,12+p*28,h,3);for(let g=0;g<26;g++)l.fillStyle=d[(g+p)%d.length],l.fillRect(6+g*10,15+p*28,7,10+g%3*3)}},256,128),o=new xe({map:r,emissive:16773836,emissiveMap:r,emissiveIntensity:.1});[-2.65,2.65].forEach(l=>{i.add(N(3.4,2,.08,14605012,l,1.35,e/2+.01));let h=new st(new We(3.2,1.85,.1),o);h.position.set(l,1.35,e/2+.03),i.add(h)}),Ih(i,1.7,2.3,e/2+.03,12576498);let a=Sh((l,h,u)=>{l.fillStyle="#ffffff",l.fillRect(0,0,h,u),l.fillStyle="#2e9e5b",l.fillRect(10,18,108,16),l.fillStyle="#f28c28",l.fillRect(10,40,108,16),l.fillStyle="#e23b3b",l.font="bold 86px sans-serif",l.textAlign="center",l.fillText("7",64,98),l.font="bold 20px sans-serif",l.fillText("ELEVEn",64,122)},128,128),c=new st(new We(1.5,1.5,.14),[vt(16777215),vt(16777215),vt(16777215),vt(16777215),new xe({map:a}),vt(16777215)]);return c.position.set(t/2-1.1,.22+n+1.05,e/2-.3),c.castShadow=!0,i.add(c),i.add(N(.12,.8,.12,14605012,t/2-1.1,.22+n+.35,e/2-.3)),[[15226446,-.5],[6131664,.45]].forEach(([l,h])=>{i.add(N(.8,1.8,.75,l,t/2+.45,1.12,e/2-1.2+h));let u=N(.04,.9,.55,0,t/2+.86,1.4,e/2-1.2+h,new xe({color:16775126,emissive:16773808,emissiveIntensity:.25}));i.add(u)}),[-4,-3.2].forEach(l=>i.add(N(.5,.5,.5,15895592,l,.47,e/2+.9))),i.userData.alwaysLit=!0,Ph(i,t,e,n+1.9,s)}function py(){let i=new Yt,t=2500653,e=14278115,n=5202805;i.add(N(1.9,1,4.4,t,0,.95,0)),i.add(N(1.75,.78,2.7,t,0,1.85,-.35)),[[-1,0],[1,0]].forEach(([o])=>i.add(N(.03,.55,2.4,n,o*.885,1.9,-.35))),i.add(N(1.6,.55,.03,n,0,1.9,1.01)),i.add(N(1.6,.55,.03,n,0,1.9,-1.71)),i.add(N(1.92,.06,4.42,e,0,1.46,0)),i.add(N(1.3,.35,.05,1776672,0,1.05,2.21));for(let o=-2;o<=2;o++)i.add(N(.03,.3,.06,e,o*.22,1.05,2.22));[-1,1].forEach(o=>{let a=new st(new le(.17,.17,.08,14),vt(16775126,{emissive:16773808,emissiveIntensity:.35}));a.rotation.x=Math.PI/2,a.position.set(o*.72,1.12,2.22),i.add(a),i.add(N(.12,.12,.12,16754253,o*.95,1.5,1.95)),i.add(N(.22,.35,.05,14703183,o*.78,1,-2.22))}),i.add(N(1.94,.18,.2,1776672,0,.5,2.25)),i.add(N(1.94,.18,.2,1776672,0,.5,-2.25));let s=new st(new le(.4,.4,.24,16),vt(1776672));s.rotation.x=Math.PI/2,s.position.set(0,1.15,-2.35),i.add(s);let r=new st(new le(.22,.22,.26,12),vt(e));return r.rotation.x=Math.PI/2,r.position.set(0,1.15,-2.36),i.add(r),[[-.95,1.45],[.95,1.45],[-.95,-1.4],[.95,-1.4]].forEach(([o,a])=>{let c=new st(new le(.42,.42,.34,14),vt(1776672));c.rotation.z=Math.PI/2,c.position.set(o,.42,a),c.castShadow=!0,i.add(c);let l=new st(new le(.22,.22,.36,10),vt(e));l.rotation.z=Math.PI/2,l.position.set(o,.42,a),i.add(l)}),i.add(N(1.5,.05,2.2,3816514,0,2.27,-.35)),i}function my(i,t){if(!Sn)return{posts:[],blocks:[]};let e=Sn,n={posts:[],blocks:[]},[s,r]=Xe[e.house],[o,a]=e.car,c=t===Math.PI?e.z0:e.z1,l=ze(s,r),h=[[s-1.2,s+1.2],[o-1.6,o+1.6]],u=(m,f)=>Math.abs(f-c)<.01&&h.some(([b,y])=>m>b&&m<y),d=(m,f,b,y)=>{let M=Math.hypot(b-m,y-f),U=Math.max(1,Math.round(M/1));for(let P=0;P<U;P++){let I=un(m,b,(P+.5)/U),L=un(f,y,(P+.5)/U);if(u(I,L))continue;let T=N(M/U+.02,.55,.22,16052716,I,l+.27,L);T.rotation.y=Math.atan2(b-m,y-f)+Math.PI/2,i.add(T);let w=N(M/U,.32,.3,8831614,I,l+.68,L);w.rotation.y=T.rotation.y,i.add(w),n.posts.push({x:I,z:L,r:.45})}};d(e.x0,e.z0,e.x1,e.z0),d(e.x1,e.z0,e.x1,e.z1),d(e.x1,e.z1,e.x0,e.z1),d(e.x0,e.z1,e.x0,e.z0),n.blocks.push({x:s+5.5,z:r,hw:2.5,hd:2.8});let p=Math.min(c,a)-1.5,g=Math.max(c,a)+.5;i.add(N(3.4,.05,Math.abs(g-p)+1.5,14144203,o,l+.025,(p+g)/2-.5));let _=py();return _.position.set(o,l,a),_.rotation.y=t,i.add(_),n.blocks.push({x:o,z:a,hw:1.2,hd:2.4}),n.car=_,n.exit={x:o,z:c+(t===Math.PI?-1.6:1.6)},i.add(N(1.3,.05,Math.abs(r-c),15392719,s,l+.03,(r+c)/2)),n}var gy=[16366031,16164288,16569313],Xa=[[8834176,11460768],[7323535,10148272],[9420650,12115084],[10147472,12970149],[8178084,11067588]],ws=new Me(1,11,8);function vh(i,t){if(t===!0&&(t="cherry"),!t){let l=i();t=l<.5?"round":l<.75?"tall":"pine"}let e=new Yt,n=1.15+i()*.55,s=t==="cherry"?[16164288,16569313]:Xa[Math.floor(i()*Xa.length)],r=t==="cherry"?10121050:9397320,o=(l,h,u,d,p,g)=>{let _=new st(ws,vt(p));_.scale.set(d,d*(g||.86),d),_.position.set(l,h,u),_.castShadow=!0,_.receiveShadow=!0,e.add(_)},a=(t==="tall"?2:t==="pine"?.8:1.5)*n,c=new st(new le(.2*n,.34*n,a,10),vt(r));c.position.y=a/2,c.castShadow=!0,e.add(c);for(let l=0;l<3;l++){let h=l/3*Math.PI*2+i(),u=new st(ws,vt(r));u.scale.set(.26*n,.14*n,.16*n),u.position.set(Math.cos(h)*.3*n,.06,Math.sin(h)*.3*n),u.rotation.y=-h,e.add(u)}if(t==="pine")[[1.25,1.3,.7],[.98,1.15,1.55],[.68,1,2.3]].forEach(([l,h,u],d)=>{let p=[new pt(.001,h),new pt(l*.3,h*.82),new pt(l*.85,h*.25),new pt(l,h*.06),new pt(l*.8,0),new pt(.001,.02)],g=new st(new no(p,16),vt(d%2?s[1]:s[0]));g.scale.setScalar(n),g.position.y=u*n,g.castShadow=!0,g.receiveShadow=!0,e.add(g)});else if(t==="tall")o(0,a+1*n,0,.95*n,s[0],1.45),o(.35*n,a+1.5*n,.2*n,.62*n,s[1],1.1),o(-.3*n,a+.6*n,-.2*n,.6*n,s[0],1);else{let l=a+.55*n,h=7;o(0,l+.2*n,0,1.05*n,s[0],.82);for(let u=0;u<h;u++){let d=u/h*Math.PI*2+i()*.3;o(Math.cos(d)*.8*n,l-.05*n+i()*.2*n,Math.sin(d)*.8*n,(.5+i()*.12)*n,s[0])}for(let u=0;u<4;u++){let d=u/4*Math.PI*2+i();o(Math.cos(d)*.42*n,l+.72*n,Math.sin(d)*.42*n,(.46+i()*.1)*n,s[1])}if(o(0,l+1.05*n,0,.42*n,s[1]),t==="cherry"){let u=new st(new xs(1.4*n,16),vt(16503776));u.rotation.x=-Math.PI/2,u.position.y=.02,u.receiveShadow=!0,e.add(u)}}return e.rotation.y=i()*6.28,e.userData.kind=t,e}function Ha(i,t){let e=new Yt,n=Xa[Math.floor(i()*Xa.length)],s=.55+i()*.45;if([[0,.45,0,.62],[.45,.33,.12,.45],[-.4,.32,-.08,.44],[.05,.3,.42,.4]].forEach(([r,o,a,c],l)=>{let h=new st(ws,vt(l?n[0]:n[1]));h.scale.set(c*s,c*s*.85,c*s),h.position.set(r*s,o*s,a*s),h.castShadow=!0,e.add(h)}),t){let r=[16777215,16773544,16762589][Math.floor(i()*3)];for(let o=0;o<7;o++){let a=i()*6.28,c=new st(ws,vt(r));c.scale.setScalar(.08*s),c.position.set(Math.cos(a)*.45*s,(.62+i()*.18)*s,Math.sin(a)*.45*s),e.add(c)}}return e.rotation.y=i()*6.28,e}var wh=[12618334,11434581,10251599,9135184,8019026,7165522];function Zd(i,t,e,n,s){let r=_r(n||7),o=s||120,a=Array.from({length:o},()=>r()),c=U=>(a[(U+o-1)%o]+2*a[U]+a[(U+1)%o])/4-.5,l=t.map(([U,P],I)=>{let L=[];for(let T=0;T<o;T++){let w=T/o*Math.PI*2,z=I===0?0:c(T)*.2*(.6+I*.15)+(r()-.5)*.04,B=i(w)*P*(1+z);L.push(new D(Math.cos(w)*B,U+(I?(r()-.5)*.5:0),-Math.sin(w)*B))}return L}),h=new D(0,e,0),u=[],d=[],p=new Qt,g=new D,_=new D,m=new D,f=(U,P,I,L)=>{g.subVectors(P,U),_.subVectors(I,U),m.crossVectors(g,_);let w=(U.x+P.x+I.x)*m.x+(U.z+P.z+I.z)*m.z>=0?[U,P,I]:[U,I,P];p.set(wh[Math.min(wh.length-1,L)]).offsetHSL(0,0,(r()-.5)*.06),w.forEach(z=>{u.push(z.x,z.y,z.z),d.push(p.r,p.g,p.b)})};for(let U=0;U<l.length-1;U++)for(let P=0;P<o;P++){let I=l[U][P],L=l[U][(P+1)%o],T=l[U+1][(P+1)%o],w=l[U+1][P];f(I,L,T,U),f(I,T,w,U)}let b=l[l.length-1];for(let U=0;U<o;U++)f(b[U],b[(U+1)%o],h,l.length);let y=new Te;y.setAttribute("position",new re(u,3)),y.setAttribute("color",new re(d,3)),y.computeVertexNormals();let M=new st(y,new xe({vertexColors:!0}));return M.receiveShadow=!0,M.userData.keepBatch=!0,M}function xy(i,t,e){let n=new Yt,s=_r(t),r=new Pi;for(let l=0;l<=40;l++){let h=l/40*Math.PI*2,u=i*(1+.05*Math.sin(3*h+t));l?r.lineTo(Math.cos(h)*u,-Math.sin(h)*u):r.moveTo(Math.cos(h)*u,-Math.sin(h)*u)}let o=new Ii(r,{depth:.2,bevelEnabled:!0,bevelThickness:.2,bevelSize:.2,bevelSegments:4,curveSegments:4});o.rotateX(-Math.PI/2),o.translate(0,-.4,0);let a=new st(o,vt(he.grass));a.receiveShadow=!0,n.add(a);let c=i*1.5;return n.add(Zd(l=>i*(1+.05*Math.sin(3*l+t)),[[-.45,1],[-.45-.22*c,.93],[-.45-.5*c,.72],[-.45-.78*c,.42],[-.45-.95*c,.18]],-.45-1.2*c,t,40)),e(n,s),_y(n)}function _y(i){i.updateMatrixWorld(!0);let t=new be().copy(i.matrixWorld).invert(),e=new Map,n=[];return i.traverse(s=>{if(!s.isMesh||s.userData.keepBatch||Array.isArray(s.material)||s.material.transparent)return;let r=s.geometry.clone();if(Object.keys(r.attributes).forEach(o=>{o!=="position"&&o!=="normal"&&o!=="uv"&&r.deleteAttribute(o)}),!r.attributes.uv){r.dispose();return}r.index&&(r=r.toNonIndexed()),r.clearGroups(),r.applyMatrix4(new be().multiplyMatrices(t,s.matrixWorld)),e.has(s.material)||e.set(s.material,[]),e.get(s.material).push(r),n.push(s)}),n.forEach(s=>s.parent.remove(s)),e.forEach((s,r)=>{let o=xo(s,!1);if(s.forEach(c=>c.dispose()),!o)return;let a=new st(o,r);a.castShadow=!0,a.receiveShadow=!0,i.add(a)}),i}function yy(){let i=new Yt;i.add(N(.16,2.2,.16,9206379,0,1.1,0));let t=new xe({color:16774351,emissive:16765562,emissiveIntensity:0});return bh.push(t),i.add(N(.5,.5,.5,0,0,2.45,0,t)),i.add(N(.62,.12,.62,9206379,0,2.76,0)),i}var vy=new xe({vertexColors:!0});function Jd(i,t){let e=[];i.traverse(n=>{n.isMesh||e.push(n)}),e.forEach(n=>{let s=n.children.filter(c=>c.isMesh&&!(t&&t.includes(c))&&!c.material.transparent&&!c.material.map);if(s.length<2)return;let r=s.map(c=>{let l=c.geometry.clone();Object.keys(l.attributes).forEach(p=>{p!=="position"&&p!=="normal"&&l.deleteAttribute(p)}),l.index&&(l=l.toNonIndexed()),l.clearGroups(),c.updateMatrix(),l.applyMatrix4(c.matrix);let h=c.material.color,u=l.attributes.position.count,d=new Float32Array(u*3);for(let p=0;p<u;p++)d[p*3]=h.r,d[p*3+1]=h.g,d[p*3+2]=h.b;return l.setAttribute("color",new tn(d,3)),l}),o=xo(r,!1);if(r.forEach(c=>c.dispose()),!o)return;s.forEach(c=>n.remove(c));let a=new st(o,vy);a.castShadow=!0,a.receiveShadow=!0,n.add(a)})}function Ga(i,t,e,n,s,r,o){let a=new Yt;a.position.set(s,r,o);let c=N(i,t,e,n,0,-t/2,0);return a.add(c),a}var Wa=[{hair:5914688,skin:16768198,shirt:12166888,pants:7170698,style:"short"},{hair:3878703,skin:15976614,shirt:16368540,pants:8161960,style:"bun"},{hair:11039050,skin:16769744,shirt:10934504,pants:9075306,style:"cap",cap:8830934},{hair:3025462,skin:15580570,shirt:10738109,pants:6253178,style:"short"},{hair:2038564,skin:16768198,shirt:16758465,pants:9080760,style:"twin"},{hair:9067068,skin:16175024,shirt:16111752,pants:7170698,style:"cap",cap:15834032},{hair:4864570,skin:15317140,shirt:9417689,pants:5196378,style:"short",glasses:!0},{hair:13208410,skin:16769744,shirt:10147472,pants:8161960,style:"long"},{hair:3878703,skin:15976614,shirt:16773544,pants:9075306,style:"bun",glasses:!0},null,{hair:5914688,skin:15580570,shirt:14273008,pants:7170698,style:"long"},{hair:3025462,skin:16768198,shirt:16111752,pants:8161960,style:"bun"},{hair:9067068,skin:15976614,shirt:10473444,pants:6253178,style:"short",glasses:!0},{hair:3878703,skin:15317140,shirt:10738109,pants:7170698,style:"cap",cap:10738109},{hair:13208410,skin:16769744,shirt:13482478,pants:9080760,style:"twin"},{hair:2367010,skin:16175024,shirt:16368540,pants:8161960,style:"short"},{hair:5914688,skin:16768198,shirt:16758465,pants:7170698,style:"long"},{hair:2038564,skin:15580570,shirt:9226408,pants:5196378,style:"cap",cap:16165309},{hair:11039050,skin:16769744,shirt:16111752,pants:9075306,style:"bun"}],Th={her:{hair:3877418,skin:16768198,shirt:16758465,pants:16758465,style:"long",dress:16165309},him:{hair:2367010,skin:15778976,shirt:10473444,pants:6253194,style:"short"}},Bd=[{hair:3878703,skin:15976614,shirt:16103802,pants:7045032,style:"cap",cap:16111752},{hair:9067068,skin:16769744,shirt:16103802,pants:7045032,style:"cap",cap:16111752},{hair:2367010,skin:15317140,shirt:16103802,pants:7045032,style:"cap",cap:16111752}],Ae=1.75/32,Ah=12*Ae;function fr(i,t){let e=new Qt(i);return t&&(e.r=Math.min(1,e.r*t),e.g=Math.min(1,e.g*t),e.b=Math.min(1,e.b*t)),"#"+e.getHexString()}function $d(i,t){let e=document.createElement("canvas");e.width=e.height=64;let n=e.getContext("2d"),s=(i.hair^i.shirt^i.skin)>>>0,r=()=>(s=s*1664525+1013904223>>>0,s/4294967296),o=(_,m,f,b,y,M)=>{for(let U=0;U<b;U++)for(let P=0;P<f;P++)n.fillStyle=fr(y,1+(r()-.5)*(M==null?.1:M)),n.fillRect(_+P,m+U,1,1)},a=(_,m,f)=>{n.fillStyle=typeof f=="string"?f:fr(f),n.fillRect(_,m,1,1)},c=5981750,l=i.skin,h=i.hair,u=i.shirt,d=i.pants,p=i.style==="long"||i.style==="twin"||i.dress;o(0,0,32,16,l,.06),o(8,0,8,8,h),o(24,8,8,p?8:6,h),[0,16].forEach(_=>{o(_,8,8,p?7:4,h),o(_+(_?6:0),12,2,p?4:2,h)}),o(8,8,8,2,h),a(8,10,h),a(15,10,h),a(9,10,h),i.style==="cap"&&(o(8,0,8,8,i.cap),o(8,8,8,2,i.cap),o(0,8,8,2,i.cap),o(16,8,8,2,i.cap),o(24,8,8,2,i.cap)),[[9,12],[13,12]].forEach(([_,m])=>{if(t){a(_,m+1,"#3a2e33"),a(_+1,m+1,"#3a2e33");return}a(_,m,"#ffffff"),a(_+1,m,"#3a2e33"),a(_,m+1,"#ffffff"),a(_+1,m+1,"#3a2e33")}),a(9,14,"#ffa3b5"),a(14,14,"#ffa3b5"),a(11,14,fr(l,.78)),a(12,14,fr(l,.78)),a(11,15,"#c9707c"),a(12,15,"#c9707c"),i.glasses&&([9,13].forEach(_=>{["#6b5a4e"].forEach(m=>{a(_-1,12,m),a(_+2,12,m),a(_-1,13,m),a(_+2,13,m)})}),a(11,12,"#6b5a4e"),a(12,12,"#6b5a4e")),o(16,16,24,16,u),o(20,16,8,4,u,.05),o(23,20,2,1,l),i.dress?(o(16,26,24,6,i.dress),o(20,25,8,1,fr(i.dress,.9)&&i.dress)):o(16,30,24,2,fr(d,.85)&&d,.05),o(20,22,8,1,u,.25),[[40,16],[32,48]].forEach(([_,m])=>{o(_,m,16,16,u),o(_,m+4+5,16,7,l,.06),o(_+4,m,4,4,u),o(_+8,m,4,4,l)}),[[0,16],[16,48]].forEach(([_,m])=>{o(_,m,16,16,i.dress?l:d),i.dress&&o(_,m+4,16,3,i.dress),o(_,m+4+10,16,2,c,.05),o(_+8,m,4,4,c)});let g=new En(e);return g.magFilter=hn,g.minFilter=hn,g.generateMipmaps=!1,g.colorSpace=Be,g}function pr(i,t,e,n,s){let r=new We(i*Ae,t*Ae,e*Ae),o=64,a=(h,u,d,p,g)=>{let _=h/o,m=(h+d)/o,f=1-u/o,b=1-(u+p)/o;return g?[m,f,_,f,m,b,_,b]:[_,f,m,f,_,b,m,b]},c=[a(n+e+i,s+e,e,t),a(n,s+e,e,t),a(n+e,s,i,e),a(n+e+i,s,i,e,!0),a(n+e,s+e,i,t),a(n+2*e+i,s+e,i,t)],l=r.attributes.uv;return c.forEach((h,u)=>{for(let d=0;d<4;d++)l.setXY(u*4+d,h[d*2],h[d*2+1])}),l.needsUpdate=!0,r}function Kd(i){let t=new Yt,e={},n=new xe({map:$d(i)});e.mat=n,e.look=i;let s=(c,l,h,u)=>{let d=new st(c,n);return d.position.set(l,h,u),d.castShadow=!0,d.receiveShadow=!0,d},r=(c,l,h,u)=>{let d=new Yt;return d.position.set(c,l,h),d.add(u),d};e.legR=r(-2*Ae,12*Ae,0,s(pr(4,12,4,0,16),0,-6*Ae,0)),t.add(e.legR),e.legL=r(2*Ae,12*Ae,0,s(pr(4,12,4,16,48),0,-6*Ae,0)),t.add(e.legL),e.body=s(pr(8,12,4,16,16),0,18*Ae,0),t.add(e.body),e.armR=r(-6*Ae,23.5*Ae,0,s(pr(4,12,4,40,16),0,-5.5*Ae,0)),t.add(e.armR),e.armL=r(6*Ae,23.5*Ae,0,s(pr(4,12,4,32,48),0,-5.5*Ae,0)),t.add(e.armL);let o=new Yt;o.position.y=24*Ae,t.add(o),e.head=o,o.add(s(pr(8,8,8,0,0),0,4*Ae,0));let a=(c,l,h,u,d,p,g)=>{let _=nn(l*Ae,h*Ae,u*Ae,c,d*Ae,p*Ae,g*Ae);o.add(_)};if(i.style==="bun"&&a(i.hair,3,3,3,0,9.3,-2),i.style==="twin"&&(a(i.hair,2,4,2,-4.6,3.5,-1.5),a(i.hair,2,4,2,4.6,3.5,-1.5)),i.style==="cap"&&a(i.cap,8,1,3,0,6.5,5),i.style==="long"&&a(i.hair,8,5,1,0,-1.5,-4.5),i.dress){let c=nn(9*Ae,4*Ae,5*Ae,i.dress,0,12.5*Ae,0);t.add(c)}return{g:t,parts:e}}function My(){let i=new Yt,t={},e=16236938,n=14720350,s=16774118;i.add(nn(.46,.4,.8,e,0,.5,0)),[-.12,.1].forEach(l=>i.add(nn(.48,.06,.12,n,0,.71,l))),i.add(nn(.36,.2,.5,s,0,.34,.05)),t.legs=[[-.14,.28],[.14,.28],[-.14,-.28],[.14,-.28]].map(([l,h])=>{let u=Ga(.13,.32,.13,e,l,.34,h);return i.add(u),u});let r=new Yt;r.position.set(0,.78,.48),i.add(r),t.head=r,r.add(nn(.5,.42,.42,e,0,0,0)),r.add(nn(.3,.16,.06,s,0,-.1,.21)),[-.15,.15].forEach(l=>{let h=new st(new Ji(.11,.2,4),vt(n));h.position.set(l,.29,-.02),h.rotation.y=Math.PI/4,r.add(h);let u=nn(.08,.1,.03,4010032,l*.8,.04,.215);r.add(u),(t.eyes=t.eyes||[]).push(u)}),r.add(nn(.07,.05,.03,16752048,0,-.04,.23));let o=new Yt;o.position.set(0,.62,-.38),i.add(o),t.tail=o;let a=nn(.1,.1,.4,e,0,.05,-.18);o.add(a);let c=new Yt;return c.position.set(0,.05,-.36),o.add(c),c.add(nn(.1,.4,.1,n,0,.18,0)),o.rotation.x=.5,i.scale.setScalar(.6),Jd(i,t.eyes),{g:i,parts:t}}function Ey(){let i=new Yt,t={},e=16774374,n=13211247;i.add(nn(.56,.5,.95,e,0,.62,0)),i.add(nn(.58,.3,.4,n,0,.76,-.15)),t.legs=[[-.17,.33],[.17,.33],[-.17,-.33],[.17,-.33]].map(([o,a])=>{let c=Ga(.16,.4,.16,e,o,.42,a);return i.add(c),c});let s=new Yt;s.position.set(0,.98,.55),i.add(s),t.head=s,s.add(nn(.56,.52,.5,e,0,0,0)),s.add(nn(.3,.24,.26,e,0,-.1,.34)),s.add(nn(.13,.1,.06,4010032,0,-.02,.48)),s.add(nn(.1,.12,.06,16748451,.05,-.24,.42)),[-.3,.3].forEach(o=>{let a=Ga(.12,.42,.26,n,o,.2,-.02);a.rotation.z=o>0?-.15:.15,s.add(a);let c=nn(.08,.11,.03,4010032,o*.45,.08,.26);s.add(c),(t.eyes=t.eyes||[]).push(c)});let r=Ga(.12,.42,.12,n,0,.82,-.47);return r.rotation.x=-.9,i.add(r),t.tail=r,i.scale.setScalar(.62),Jd(i,t.eyes),{g:i,parts:t}}function by(i){let t=new Yt,e=[16751211,16777215,16757575][i%3],n=new st(new Me(.28,10,8),vt(e));if(n.scale.set(.7,.6,1.4),t.add(n),i%3===1){let r=new st(new Me(.16,8,6),vt(16744272));r.position.set(0,.1,.05),r.scale.set(1,.6,1.4),t.add(r)}let s=new st(new Ji(.22,.35,4),vt(e===16777215?16751211:e));return s.rotation.x=Math.PI/2,s.position.z=-.5,t.add(s),t.userData.tail=s,t}function Sy(i){let t=new Yt,e=new xe({color:i,side:cn}),n=()=>{let o=new st(new Yi(.32,.26),e);o.position.x=.17;let a=new Yt;return a.add(o),a},s=n(),r=n();return r.scale.x=-1,t.add(s,r),t.userData.l=s,t.userData.r=r,t}function Hd(){let i=new Yt,t=10121050,e=15392715,n=3.5,s=new st(new le(.42,.62,n+1.4,16),vt(t));s.position.set(-2,(n+1.4)/2,-.2),s.castShadow=!0,i.add(s),[[-.5,.3],[.45,-.25],[0,.5]].forEach(([u,d])=>{let p=new st(new Me(.4,12,8),vt(t));p.scale.set(1.3,.45,.8),p.position.set(-2+u,.1,-.2+d),i.add(p)});let r=new st(new le(.16,.26,3.1,12),vt(t));r.rotation.z=Math.PI/2-.12,r.position.set(-.5,n+.05,0),r.castShadow=!0,i.add(r);let o=new st(new Me(.17,10,8),vt(t));o.position.set(1.05,n-.15,0),i.add(o),[[-2,n+2.4,-.4,1.8],[-.7,n+1.6,-.7,1.25],[-3,n+1.5,-.3,1.1],[-1.8,n+3.4,-.6,1.15],[.4,n+1.2,-.5,.8],[-2.5,n+1.3,.7,.95]].forEach(([u,d,p,g],_)=>{let m=new st(new li(g,2),vt(gy[_%3]));m.position.set(u,d,p),m.castShadow=!0,i.add(m)});let a=new st(new xs(2,20),vt(16503776));a.rotation.x=-Math.PI/2,a.position.set(-1.6,.02,-.2),a.receiveShadow=!0,i.add(a);let c=new Yt;c.position.set(0,n-.12,0),i.add(c);let l=n-.12-.56;[-.72,.72].forEach(u=>c.add(N(.04,l,.04,e,u,-l/2,0)));let h=N(1.65,.1,.5,16165309,0,-l,0);return c.add(h),i.userData.pivot=c,i.userData.seat=h,i}function Rh(i,t,e){let s=document.createElement("canvas"),r=s.getContext("2d");r.font="800 64px Nunito, sans-serif";let o=Math.ceil(r.measureText(i).width)+40;s.width=o,s.height=100;let a=s.getContext("2d");a.font="800 64px Nunito, sans-serif",a.textAlign="center",a.textBaseline="middle",a.lineJoin="round",a.lineWidth=14,a.strokeStyle="rgba(255,255,255,0.95)",a.strokeText(i,o/2,s.height/2),a.fillStyle=t,a.fillText(i,o/2,s.height/2);let c=new En(s);c.colorSpace=Be;let l=new ms(new qi({map:c,transparent:!0,depthWrite:!1,depthTest:!1}));return l.scale.set(e*o/s.height,e,1),l.renderOrder=5,l}function jd(i,t,e,n){let s=document.createElement("canvas");s.width=128,s.height=64;let r=s.getContext("2d");r.font="bold 48px sans-serif",r.fillStyle=t,r.textAlign="center",r.fillText(i,64,50);let o=new ms(new qi({map:new En(s),transparent:!0,depthWrite:!1}));return o.scale.set(e,n,1),o.visible=!1,o}function kd(i,t){return Math.hypot((i-Xt.x)/(Xt.rx+4.4),(t-Xt.z)/(Xt.rz+4.4))<1&&!$i(i,t,.4)}function wy(i){let t=xr,e=new Pi,n=t.r,s=-t.hw+.6,r=t.hw-.6,o=-t.hd+.6,a=t.hd-.6,c=Math.max(.5,n-.6);e.moveTo(s+c,o),e.lineTo(r-c,o),e.quadraticCurveTo(r,o,r,o+c),e.lineTo(r,a-c),e.quadraticCurveTo(r,a,r-c,a),e.lineTo(s+c,a),e.quadraticCurveTo(s,a,s,a-c),e.lineTo(s,o+c),e.quadraticCurveTo(s,o,s+c,o);let l=new Ii(e,{depth:t.h-.8,bevelEnabled:!0,bevelThickness:.4,bevelSize:.6,bevelSegments:2,curveSegments:8});l.rotateX(-Math.PI/2),l.translate(t.x,.4,t.z);let h=new st(l,[vt(he.grass),vt(12888202,{})]);h.castShadow=!0,h.receiveShadow=!0,i.add(h);let u=new Ii(e,{depth:t.h*.42,bevelEnabled:!0,bevelThickness:.2,bevelSize:.75,bevelSegments:1,curveSegments:8});u.rotateX(-Math.PI/2),u.translate(t.x,.2,t.z);let d=new st(u,vt(11112312,{}));d.receiveShadow=!0,i.add(d);let p=_r(17);for(let b=0;b<46;b++){let y=p()*Math.PI*2,M=t.x+Math.cos(y)*(t.hw+.4),U=t.z+Math.sin(y)*(t.hd+.4),P=t.x+Math.max(-t.hw,Math.min(t.hw,M-t.x)),I=t.z+Math.max(-t.hd,Math.min(t.hd,U-t.z));if(gr(P,I+.8)||Math.abs(P-sn.x)<2.2&&I>t.z)continue;let L=new st(new li(.35+p()*.6,2),vt([12034959,10719872,13220006][b%3],{}));L.position.set(P,.2+p()*.3,I),L.rotation.set(p()*3,p()*3,p()*3),L.castShadow=!0,i.add(L)}let g=sn.z1-sn.z0,_=Math.hypot(g,t.h),m=Math.atan2(t.h,g),f=new Yt;f.position.set(sn.x,t.h/2,(sn.z0+sn.z1)/2),f.rotation.x=m,i.add(f),f.add(N(2.2,.3,_+.4,15126435,0,-.12,0));for(let b=0;b<_/.45;b++)f.add(N(2.2,.06,.08,13809807,0,.05,-_/2+.2+b*.45));[-1.15,1.15].forEach(b=>{f.add(N(.08,.08,_,12883572,b,.75,0));for(let y=0;y<=5;y++)f.add(N(.1,.8,.1,11569768,b,.38,-_/2+y*_/5))})}function Ch(i,t,e){let n=Math.min(1,Math.max(0,e/t));return i*Math.pow(1-Math.pow(n,1.7),.62)}function Mh(i,t,e){let n=[];for(let s=0;s<=24;s++){let r=(e||0)+(t-(e||0))*s/24;n.push(new pt(Math.max(.001,Ch(i,t,r)),r))}return new no(n,36)}function Ty(i){vo.forEach(([t,e,n,s],r)=>{let o=new st(Mh(n,s),vt([11126710,10468555,11783609][r%3],{}));o.position.set(t,-.2,e),o.castShadow=!0,o.receiveShadow=!0,i.add(o);let a=new st(Mh(n*1.03,s*1.005,s*.7),vt(16777215,{}));a.position.set(t,-.2,e),i.add(a);let c=Math.atan2(di&&di.i===r?-di.dz:.25,di&&di.i===r?-di.dx:1)+.9,l=new st(Mh(n*.6,s*.5),vt(12180389,{}));l.position.set(t+Math.cos(c)*n*.75,-.2,e+Math.sin(c)*n*.75),l.castShadow=!0,l.receiveShadow=!0,i.add(l)})}function Ay(i){let t=new lr(Gn.map(f=>new D(f.x,0,f.z))),e=90,n=t.getSpacedPoints(e),s=(f,b,y)=>{let M=[],U=[];n.forEach((L,T)=>{let w=n[Math.max(0,T-1)],z=n[Math.min(e,T+1)],B=z.x-w.x,H=z.z-w.z,Z=Math.hypot(B,H)||1,W=f*(.55+.45*Math.min(1,T/(e*.45))),K=-H/Z*W/2,mt=B/Z*W/2;if(M.push(L.x+K,b,L.z+mt,L.x-K,b,L.z-mt),T){let j=T*2;U.push(j-2,j,j-1,j-1,j,j+1)}});let P=new Te;P.setAttribute("position",new re(M,3)),P.setIndex(U),P.computeVertexNormals();let I=new st(P,y);return I.receiveShadow=!0,i.add(I),I};s(3.8,.012,vt(he.sand));let r=s(2.4,.045,new xe({color:9425898,emissive:3837872,emissiveIntensity:.12}));r.userData.keepBatch=!0;let o=[];for(let f=0;f<26;f++){let b=new st(new Yi(.5,.12),new ke({color:16777215,transparent:!0,opacity:.7,depthWrite:!1}));b.rotation.x=-Math.PI/2,i.add(b),o.push({m:b,t:Math.random(),side:(Math.random()-.5)*1.4,sp:.018+Math.random()*.012})}let a=n[0],c=di,l=document.createElement("canvas");l.width=32,l.height=128;let h=l.getContext("2d"),u=h.createLinearGradient(0,0,32,0);u.addColorStop(0,"rgba(191,232,247,0)"),u.addColorStop(.2,"#bfe8f7"),u.addColorStop(.8,"#bfe8f7"),u.addColorStop(1,"rgba(191,232,247,0)"),h.fillStyle=u,h.fillRect(0,0,32,128),h.lineCap="round";for(let f=0;f<26;f++){h.strokeStyle="rgba(255,255,255,"+(.45+Math.random()*.5)+")",h.lineWidth=1.5+Math.random()*2;let b=6+Math.random()*20,y=Math.random()*128;h.beginPath(),h.moveTo(b,y),h.lineTo(b,y+8+Math.random()*14),h.stroke()}let d=new En(l);d.wrapS=d.wrapT=Xr,d.repeat.set(1,2);{let f=c.h*.66,b=20,y=[],M=[],U=[],P=1.35,I=-c.dz,L=c.dx;for(let H=0;H<=b;H++){let Z=f*(1-H/b),W=Ch(c.r,c.h,Z+.2)+.08,K=c.x+c.dx*W,mt=c.z+c.dz*W,j=Z-.2+.05,at=P*(.7+.3*H/b);if(y.push(K-I*at/2,j,mt-L*at/2,K+I*at/2,j,mt+L*at/2),M.push(0,1-H/b,1,1-H/b),H){let Rt=H*2;U.push(Rt-2,Rt-1,Rt,Rt-1,Rt+1,Rt)}}let T=new Te;T.setAttribute("position",new re(y,3)),T.setAttribute("uv",new re(M,2)),T.setIndex(U);let w=new st(T,new ke({map:d,transparent:!0,opacity:.95,side:cn,depthWrite:!1}));w.renderOrder=2,i.add(w);let z=new st(new Me(.5,16,10),new xe({color:12577015,emissive:3837872,emissiveIntensity:.1})),B=Ch(c.r,c.h,f+.2);z.scale.set(1,.3,.55),z.position.set(c.x+c.dx*(B-.2),f-.12,c.z+c.dz*(B-.2)),i.add(z)}let p=new st(new le(1.5,1.5,.06,28),new xe({color:10476783,emissive:3837872,emissiveIntensity:.12}));p.position.set(a.x+c.dx*.6,.05,a.z+c.dz*.6),i.add(p);let g=new st(new Di(1.55,.22,10,28),vt(14209256));g.rotation.x=Math.PI/2,g.position.copy(p.position),g.position.y=.06,g.scale.set(1,1,.6),i.add(g);let _=[];for(let f=0;f<7;f++){let b=new st(new Me(.22,10,8),new ke({color:16777215,transparent:!0,opacity:.85}));b.position.set(a.x+-c.dz*(f-3)*.22,.15,a.z+c.dx*(f-3)*.22),i.add(b),_.push(b)}{let f=_r(41),b=140,y=new Me(1,8,6),M=new Ci(y,vt(14274754),b),U=new Ve,P=0,I=[];for(let L=0;L<300&&P<b;L++){let T=f(),w=t.getPointAt(T),z=t.getTangentAt(T),B=f()<.5?-1:1,H=1.85+f()*.5*(.6+T),Z=w.x-z.z*B*H,W=w.z+z.x*B*H;if(cy(Z,W,.6)||!Ki(Z,W,.8)||$i(Z,W,.5))continue;let K=.12+f()*.16;U.position.set(Z,.03,W),U.scale.set(K*1.3,K*.55,K),U.rotation.y=f()*3,U.updateMatrix(),M.setMatrixAt(P++,U.matrix),f()<.08&&I.push([Z,W])}M.count=P,M.receiveShadow=!0,i.add(M),U.scale.set(1,1,1),I.forEach(([L,T])=>{for(let w=0;w<4;w++)i.add(N(.06,.7+f()*.4,.06,w%2?8173679:9423996,L+(f()-.5)*.4,.4,T+(f()-.5)*.4))})}let m=[];return pn.forEach(([f,b,y,M])=>{let U=f===y;for(let P=0;P<n.length;P++){let I=n[P];!(U?Math.abs(I.x-f)<.95&&I.z>=Math.min(b,M)-.9&&I.z<=Math.max(b,M)+.9:Math.abs(I.z-b)<.95&&I.x>=Math.min(f,y)-.9&&I.x<=Math.max(f,y)+.9)||m.some(T=>Math.hypot(T.x-I.x,T.z-I.z)<3)||m.push({x:U?f:I.x,z:U?I.z:b,rot:U?0:Math.PI/2})}}),m.forEach(f=>i.add(Qd(f.x,f.z,f.rot,2.2))),{curve:t,glints:o,ftex:d,foam:_,bridges:m,src:a}}function Qd(i,t,e,n){let s=new Yt;s.position.set(i,0,t),s.rotation.y=e;for(let r=0;r<9;r++){let o=(r-4)/4,a=.12+(1-o*o)*.32;s.add(N(n,.1,.5,r%2?13208170:12418398,0,a,o*2.1))}return[-1,1].forEach(r=>{for(let o=0;o<5;o++){let a=(o-2)/2,c=.12+(1-a*a)*.32,l=r*(n/2+.05);s.add(N(.14,.75,.14,14833487,l,c+.37,a*2)),(o===0||o===4)&&s.add(N(.2,.12,.2,16181192,l,c+.8,a*2))}for(let o=0;o<4;o++){let a=(o-2)/2,c=(o-1)/2,l=.12+(1-a*a)*.32+.72,h=.12+(1-c*c)*.32+.72,u=Math.hypot(2*(c-a),h-l)+.06,d=N(.1,.1,u,14833487,r*(n/2+.05),(l+h)/2,a+c);d.rotation.x=-Math.atan2(h-l,2*(c-a)),s.add(d)}}),s}function Ry(i,t){let e=Xt,n=e.rx+2.6,s=e.rz+2.6,r=80,o=[],a=[],c={benches:[],ducks:[],posts:[]};for(let u=0;u<=r;u++){let d=u/r*Math.PI*2,p=Math.cos(d),g=Math.sin(d),_=e.x+p*(n-.75),m=e.z+g*(s-.75),f=e.x+p*(n+.75),b=e.z+g*(s+.75);if(o.push(_,.025,m,f,.025,b),u){let y=u*2;a.push(y-2,y,y-1,y-1,y,y+1)}}let l=new Te;l.setAttribute("position",new re(o,3)),l.setIndex(a),l.computeVertexNormals();let h=new st(l,vt(15654072));h.receiveShadow=!0,i.add(h);for(let u=0;u<r;u++){let d=u/r*Math.PI*2,p=e.x+Math.cos(d)*n,g=e.z+Math.sin(d)*s;if(Ss(p,g)<.6){i.add(Qd(p,g,-d+Math.PI/2+Math.PI/2,1.5));break}}[.6,2.2,3.6,5].forEach((u,d)=>{let p=e.x+Math.cos(u)*(n+1.6),g=e.z+Math.sin(u)*(s+1.6);if(Ss(p,g)<2.2||!Ki(p,g,1.5))return;let _=new Yt;_.position.set(p,0,g),_.rotation.y=Math.atan2(e.x-p,e.z-g),_.add(N(1.5,.08,.45,12883572,0,.45,0)),_.add(N(1.5,.4,.07,12883572,0,.7,-.22)),[-.65,.65].forEach(m=>{_.add(N(.08,.45,.4,9206379,m,.22,0))}),i.add(_),c.posts.push({x:p,z:g,r:.9})});for(let u=0;u<7;u++){let d=u/7*Math.PI*2+.3,p=e.x+Math.cos(d)*(n+3.1),g=e.z+Math.sin(d)*(s+3.1);if(Ss(p,g)<2.4||!Ki(p,g,1.8))continue;let _=new st(new le(.9,.95,.18,9),vt(10188374));_.position.set(p,.09,g),_.scale.z=.7,i.add(_);for(let m=0;m<9;m++){let f=p+(t()-.5)*1.3,b=g+(t()-.5)*.9;i.add(N(.06,.3,.06,8173679,f,.32,b)),i.add(N(.2,.18,.2,he.flower[(u+m)%he.flower.length],f,.52,b))}c.posts.push({x:p,z:g,r:1})}for(let u=0;u<2;u++){let d=new Yt;d.add(N(.5,.3,.7,16777215,0,.18,0)),d.add(N(.32,.3,.3,u?16777215:7317610,0,.45,.32)),d.add(N(.18,.08,.16,16098123,0,.42,.53)),[-.12,.12].forEach(p=>d.add(N(.05,.06,.03,3025462,p,.5,.47))),d.add(N(.2,.12,.2,15658734,0,.32,-.38)),d.scale.setScalar(.8),i.add(d),c.ducks.push({g:d,a:u*2.5,sp:u?-.12:.09})}return c}function Cy(i){let t=[],e=[],n=(u,d)=>u.toFixed(2)+","+d.toFixed(2),s=new Map,r=(u,d)=>{let p=n(u,d);return s.has(p)||(s.set(p,t.length),t.push({x:u,z:d}),e.push([])),s.get(p)},o=(u,d)=>{if(u===d)return;let p=Math.hypot(t[u].x-t[d].x,t[u].z-t[d].z);e[u].push([d,p]),e[d].push([u,p])},a=pn.map(()=>[]);pn.forEach((u,d)=>{a[d].push([u[0],u[1]],[u[2],u[3]])}),pn.forEach((u,d)=>pn.forEach((p,g)=>{if(d>=g)return;let _=u[0]===u[2],m=p[0]===p[2];if(_===m)return;let f=_?u:p,b=_?p:u,y=f[0],M=b[1];y>=Math.min(b[0],b[2])-.01&&y<=Math.max(b[0],b[2])+.01&&M>=Math.min(f[1],f[3])-.01&&M<=Math.max(f[1],f[3])+.01&&(a[d].push([y,M]),a[g].push([y,M]))}));let c=i.map(u=>{let d=null;pn.forEach((g,_)=>{let m=g[0]===g[2],f=m?g[0]:Math.max(Math.min(g[0],g[2]),Math.min(Math.max(g[0],g[2]),u.x)),b=m?Math.max(Math.min(g[1],g[3]),Math.min(Math.max(g[1],g[3]),u.z)):g[1],y=Math.hypot(f-u.x,b-u.z);(!d||y<d.dist)&&(d={i:_,x:f,z:b,dist:y})}),a[d.i].push([d.x,d.z]);let p=r(u.x,u.z);return o(p,r(d.x,d.z)),p});a.forEach((u,d)=>{let p=pn[d][0]===pn[d][2];u.sort((g,_)=>p?g[1]-_[1]:g[0]-_[0]);for(let g=1;g<u.length;g++)o(r(u[g-1][0],u[g-1][1]),r(u[g][0],u[g][1]))});function l(u,d){let p=t.map(()=>1/0),g=t.map(()=>-1),_=t.map(()=>!1);for(p[u]=0;;){let f=-1;for(let b=0;b<t.length;b++)!_[b]&&(f<0||p[b]<p[f])&&(f=b);if(f<0||p[f]===1/0||f===d)break;_[f]=!0,e[f].forEach(([b,y])=>{p[f]+y<p[b]&&(p[b]=p[f]+y,g[b]=f)})}let m=[];for(let f=d;f>=0;f=g[f])m.unshift(t[f]);return m.length&&m[0]===t[u]?m:[t[d]]}function h(u,d){let p=0,g=1/0;return t.forEach((_,m)=>{let f=Math.hypot(_.x-u,_.z-d);f<g&&(g=f,p=m)}),p}return{nodes:t,doorNodes:c,path:l,nearest:h}}var ka=[[0,4870304,12633855,.8,1.35,1],[5,5199526,12633855,.8,1.35,1],[6,16305590,16763296,1.3,1.1,.4],[7.5,12575733,16774374,2.3,1.55,0],[16.5,12575733,16774374,2.3,1.55,0],[18,16236724,16760470,1.3,1.1,.4],[19.2,5265318,12633855,.8,1.35,1],[24,4870304,12633855,.8,1.35,1]];function tf(i){let t=0;for(;t<ka.length-2&&ka[t+1][0]<=i;)t++;let e=ka[t],n=ka[t+1],s=(i-e[0])/(n[0]-e[0]||1),r=new Qt(e[1]),o=new Qt(n[1]),a=new Qt(e[2]),c=new Qt(n[2]);return{sky:r.lerp(o,s),sun:a.lerp(c,s),power:un(e[3],n[3],s),amb:un(e[4],n[4],s),night:un(e[5],n[5],s)}}function Py(i,t){t=t||{};let e=(i.clientWidth||innerWidth)<(i.clientHeight||innerHeight)*.9?"port":"land";Wd(e),qa=[],bh=[];let n=(()=>{let x=/[?&]hour=([\d.]+)/.exec(location.search);return x?Number(x[1]):null})();n==null&&t.timeMode==="day"&&(n=11),n==null&&t.timeMode==="night"&&(n=22);let s=new Kr({antialias:!0});s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.shadowMap.enabled=!0,s.shadowMap.type=Ia,s.domElement.className="village-3d",i.appendChild(s.domElement);let r=new jr;r.fog=new ga(12575733,320,760);let o=new Qe(26,1,.5,1400),a=new Fa(o,s.domElement);a.enableDamping=!0,a.dampingFactor=.08,a.minDistance=18,a.maxDistance=520,a.minPolarAngle=.15,a.maxPolarAngle=1.32,a.target.set(0,0,1.5),a.screenSpacePanning=!1,a.rotateSpeed=.7,a.panSpeed=1.1,a.keyPanSpeed=22,a.touches={ONE:hi.PAN,TWO:hi.DOLLY_PAN};{let x=s.domElement,v=new Map,A=null,O=!1,k=new D,q=new Ms,E=new D,G=new D,dt=()=>{let lt=Array.from(v.values());return{a:lt[0],b:lt[1],mx:(lt[0].x+lt[1].x)/2,my:(lt[0].y+lt[1].y)/2,d:Math.hypot(lt[1].x-lt[0].x,lt[1].y-lt[0].y),ang:Math.atan2(lt[1].y-lt[0].y,lt[1].x-lt[0].x)}};x.addEventListener("pointerdown",lt=>{if(!(O||lt.pointerType!=="touch"))if(lt.isPrimary&&(v.clear(),A=null),v.set(lt.pointerId,{x:lt.clientX,y:lt.clientY}),v.size===2){lt.stopImmediatePropagation();let Ht=Array.from(v.entries()).find(([Oe])=>Oe!==lt.pointerId);if(Ht){O=!0;try{x.dispatchEvent(new PointerEvent("pointerup",{pointerId:Ht[0],pointerType:"touch",isPrimary:!0,clientX:Ht[1].x,clientY:Ht[1].y,bubbles:!0}))}catch{}O=!1}let ge=dt();A={last:ge,moved:0,mode:"",y0a:ge.a.y,y0b:ge.b.y,x0:ge.mx,d0:ge.d}}else v.size>2&&lt.stopImmediatePropagation()},{capture:!0}),x.addEventListener("pointermove",lt=>{if(O||lt.pointerType!=="touch"||!v.has(lt.pointerId)||(v.get(lt.pointerId).x=lt.clientX,v.get(lt.pointerId).y=lt.clientY,!A||v.size<2)||(lt.stopImmediatePropagation(),!a.enabled))return;let Ht=dt(),ge=A.last;if(A.moved+=Math.hypot(Ht.mx-ge.mx,Ht.my-ge.my)+Math.abs(Ht.d-ge.d),!A.mode&&A.moved>22){let Oe=Ht.a.y-A.y0a,_n=Ht.b.y-A.y0b,ii=(Oe+_n)/2,Eo=Oe*_n>0&&Math.min(Math.abs(Oe),Math.abs(_n))>.3*Math.max(Math.abs(Oe),Math.abs(_n));A.mode=Eo&&Math.abs(Ht.mx-A.x0)<Math.abs(ii)*.7&&Math.abs(Ht.d-A.d0)<Math.max(24,Math.abs(ii)*.6)?"tilt":"free"}if(k.copy(o.position).sub(a.target),A.mode==="tilt")q.setFromVector3(k),q.phi=Math.max(a.minPolarAngle,Math.min(a.maxPolarAngle,q.phi-(Ht.my-ge.my)*.006)),k.setFromSpherical(q),o.position.copy(a.target).add(k);else if(A.mode==="free"){let Oe=Ht.ang-ge.ang;Oe>Math.PI&&(Oe-=Math.PI*2),Oe<-Math.PI&&(Oe+=Math.PI*2),k.applyAxisAngle(Ve.DEFAULT_UP,Oe);let _n=Math.max(a.minDistance,Math.min(a.maxDistance,k.length()*(ge.d/Math.max(1,Ht.d))));k.setLength(_n),o.position.copy(a.target).add(k),o.getWorldDirection(G),G.y=0,G.normalize(),E.crossVectors(G,o.up).normalize();let ii=2*_n*Math.tan(o.fov*Math.PI/360)/(x.clientHeight||innerHeight);c.copy(E).multiplyScalar(-(Ht.mx-ge.mx)*ii).addScaledVector(G,(Ht.my-ge.my)*ii*1.4),a.target.add(c),o.position.add(c)}A.last=Ht,a.update()},{capture:!0});let yt=lt=>{O||lt.pointerType!=="touch"||(A&&v.has(lt.pointerId)&&lt.stopImmediatePropagation(),v.delete(lt.pointerId),v.size<2&&(A=null))};x.addEventListener("pointerup",yt,{capture:!0}),x.addEventListener("pointercancel",yt,{capture:!0});let te=lt=>{lt.pointerType==="touch"&&lt.target!==x&&(v.delete(lt.pointerId),v.size<2&&(A=null))};window.addEventListener("pointerup",te,!0),window.addEventListener("pointercancel",te,!0)}s.domElement.tabIndex=0,s.domElement.style.outline="none",a.listenToKeyEvents(s.domElement);let c=new D,l=new D,h=new D;function u(x,v){o.getWorldDirection(h),h.y=0,h.normalize(),l.crossVectors(h,o.up).normalize();let A=o.position.distanceTo(a.target)*.0016;c.copy(l).multiplyScalar(x*A).addScaledVector(h,-v*A),a.target.add(c),o.position.add(c)}s.domElement.addEventListener("wheel",x=>{!x.ctrlKey&&x.deltaMode===0&&(Math.abs(x.deltaX)>.01||Math.abs(x.deltaY)<40)&&(x.preventDefault(),x.stopImmediatePropagation(),u(x.deltaX,x.deltaY))},{capture:!0,passive:!1});function d(){let x=a.target,v=en.w/2,A=en.d/2,O=Math.max(-v,Math.min(v,x.x)),k=Math.max(-A,Math.min(A,x.z));(O!==x.x||k!==x.z||x.y!==0)&&(c.set(O-x.x,-x.y,k-x.z),x.add(c),o.position.add(c))}a.addEventListener("change",d);let p=new ho(16777215,12048288,1);r.add(p);let g=new fo(16777215,1.5);g.castShadow=!0,g.shadow.mapSize.set(2048,2048),Object.assign(g.shadow.camera,{left:-en.a-6,right:en.a+6,top:en.b+10,bottom:-en.b-10,near:1,far:260}),g.shadow.bias=-6e-4,g.shadow.normalBias=.03,r.add(g),r.add(g.target);let _=[],m=new Hn({uniforms:{top:{value:new Qt(9356778)},bottom:{value:new Qt(14216952)}},vertexShader:"varying float vY; void main(){ vY = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 bottom; varying float vY; void main(){ float k = smoothstep(-0.15, 0.75, vY); gl_FragColor = vec4(mix(bottom, top, k), 1.0); }",side:ln,depthWrite:!1,fog:!1}),f=new st(new Me(480,24,14),m);f.renderOrder=-1,r.add(f);let b=new st(new Me(4,16,12),new ke({color:16771496,fog:!1})),y=new st(new Me(3,16,12),new ke({color:16052735,fog:!1}));r.add(b,y);let M=new Te,U=[];for(let x=0;x<700;x++){let v=Math.random()*Math.PI*2,A=Math.random()*1.55;U.push(Math.cos(v)*Math.sin(A)*450,Math.cos(A)*450+20,Math.sin(v)*Math.sin(A)*450)}M.setAttribute("position",new re(U,3));let P=new gs(M,new Zi({color:16777215,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1}));r.add(P);let I=[];for(let x=0;x<6;x++){let v=new Yt,A=new xe({color:16777215,transparent:!0,opacity:.92});for(let O=0;O<4;O++){let k=new st(new Me(Vt(1.6,2.6),10,8),A);k.position.set(O*2-3,Vt(-.4,.6),Vt(-.8,.8)),k.scale.y=.7,v.add(k)}v.position.set(Vt(-90,90),Vt(34,46),Vt(-90,-40)),v.userData.speed=Vt(.6,1.4),v.userData.mat=A,I.push(v),r.add(v)}let L=new Yt;L.mat=new xe({color:16777215,transparent:!0,opacity:.9,fog:!1});for(let x=0;x<11;x++){let v=x/11*Math.PI*2+Vt(-.15,.15),A=ui(v)+Vt(1,7),O=[];for(let q=0;q<5;q++){let E=new Me(Vt(1.6,2.8),9,7);E.scale(1,.62,1),E.translate(q*2.1-4.2,Vt(-.3,.6),Vt(-1,1)),O.push(E)}let k=new st(xo(O,!1),L.mat);O.forEach(q=>q.dispose()),k.position.set(Math.cos(v)*A,Vt(-9,-3),-Math.sin(v)*A),k.rotation.y=v+Math.PI/2,k.scale.setScalar(Vt(.9,1.5)),L.add(k)}r.add(L);let T=[];[{t:Math.PI*.97,gap:9,r:4.2,y:-3.2,deco:(v,A)=>{[[-1.2,-.6,"round"],[1.1,-1,"pine"],[.2,1.3,"tall"]].forEach(([O,k,q])=>{let E=vh(A,q);E.scale.setScalar(.62),E.position.set(O,0,k),v.add(E)}),[[1.6,1.1],[-1.9,1.2]].forEach(([O,k],q)=>{let E=Ha(A,q===0);E.position.set(O,0,k),v.add(E)})}},{t:.06,gap:10,r:3.8,y:-2.4,deco:(v,A)=>{for(let k=0;k<26;k++){let q=A()*6.28,E=Math.sqrt(A())*3,G=new st(ws,vt(he.flower[k%he.flower.length]));G.scale.setScalar(.13),G.position.set(Math.cos(q)*E,.1,Math.sin(q)*E),v.add(G)}v.add(N(1.5,.12,.45,12883572,0,.5,-.6)),v.add(N(1.5,.45,.1,12883572,0,.8,-.82)),[-.6,.6].forEach(k=>v.add(N(.1,.5,.4,11042910,k,.25,-.6)));let O=Ha(A,!0);O.position.set(-1.8,0,-1.2),v.add(O)}},{t:Math.PI*.62,gap:7,r:2.4,y:4.5,deco:(v,A)=>{let O=vh(A,"pine");O.scale.setScalar(.8),v.add(O);let k=new st(ws,vt(14209220));k.scale.set(.45,.3,.38),k.position.set(1.1,.12,.6),v.add(k)}},{t:-Math.PI*.3,gap:8,r:2.2,y:2.2,deco:(v,A)=>{[[0,0,.5,16748442],[.7,.4,.32,16760939],[-.6,.5,.26,16748442]].forEach(([k,q,E,G])=>{v.add(N(E*.4,E*1.1,E*.4,16774888,k,E*.55,q));let dt=new st(new Me(E,16,10,0,Math.PI*2,0,Math.PI/2),vt(G));dt.position.set(k,E*1.05,q),v.add(dt)});let O=Ha(A,!1);O.position.set(-.9,0,-.6),v.add(O)}}].forEach((v,A)=>{let O=xy(v.r,31+A*7,v.deco),k=ui(v.t)+v.r+v.gap;O.position.set(Math.cos(v.t)*k,v.y,-Math.sin(v.t)*k),O.userData.y0=v.y,O.userData.ph=A*1.7,r.add(O),T.push(O)});let w=(()=>{let x=document.createElement("canvas");x.width=x.height=64;let v=x.getContext("2d"),A=v.createRadialGradient(32,32,0,32,32,32);A.addColorStop(0,"rgba(255,255,255,0.85)"),A.addColorStop(.3,"rgba(255,255,255,0.22)"),A.addColorStop(1,"rgba(255,255,255,0)"),v.fillStyle=A,v.fillRect(0,0,64,64),v.fillStyle="#ffffff",v.beginPath();for(let k=0;k<10;k++){let q=k/10*Math.PI*2-Math.PI/2,E=k%2?8:20;v.lineTo(32+Math.cos(q)*E,32+Math.sin(q)*E)}v.closePath(),v.fill();let O=new En(x);return O.colorSpace=Be,O})(),z=(()=>{let x=document.createElement("canvas");x.width=x.height=32;let v=x.getContext("2d");v.fillStyle="#ffffff",v.beginPath();for(let O=0;O<8;O++){let k=O/8*Math.PI*2,q=O%2?2.5:15;v.lineTo(16+Math.cos(k)*q,16+Math.sin(k)*q)}v.closePath(),v.fill();let A=new En(x);return A.colorSpace=Be,A})(),B=[0,1,2].map(x=>{let v=[],A=[],O=new Qt,k=[16773544,16762076,14273791,12905727];for(let G=0;G<34;G++){let dt=Math.random()*Math.PI*2,yt=.15+Math.random()*1.2;v.push(Math.cos(dt)*Math.sin(yt)*440,Math.cos(yt)*440+20,Math.sin(dt)*Math.sin(yt)*440),O.set(k[(G+x)%4]),A.push(O.r,O.g,O.b)}let q=new Te;q.setAttribute("position",new re(v,3)),q.setAttribute("color",new re(A,3));let E=new gs(q,new Zi({size:11+x*3,map:w,vertexColors:!0,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,fog:!1}));return E.userData={base:0,ph:x*2.1},r.add(E),E}),H=new ms(new qi({map:(()=>{let x=document.createElement("canvas");x.width=128,x.height=16;let v=x.getContext("2d"),A=v.createLinearGradient(0,0,128,0);return A.addColorStop(0,"rgba(255,255,255,0)"),A.addColorStop(1,"rgba(255,248,220,1)"),v.fillStyle=A,v.beginPath(),v.moveTo(0,8),v.lineTo(120,4),v.arc(120,8,4,-Math.PI/2,Math.PI/2),v.closePath(),v.fill(),new En(x)})(),transparent:!0,opacity:0,depthWrite:!1,fog:!1}));H.scale.set(36,4.5,1),r.add(H);let Z={t:-1,wait:6,from:new D,dir:new D},W=new Yt;r.add(W),W.add(Fd(Od(1,.35),.6,he.grass,-.6,!0));let K=Zd(x=>ui(x)-.15,[[-.5,1],[-1.9,.985],[-4.4,.93],[-7.6,.8],[-11.2,.6],[-14.4,.37],[-17.2,.15]],-19.8,11,140);W.add(K);{let x=_r(12);for(let A=0;A<20;A++){let O=(A+x()*.7)/20*Math.PI*2,k=ui(O)-.2,q=Math.cos(O),E=-Math.sin(O),G=1.6+x()*2.2,dt=new lr([new D(q*(k-.3),-.7,E*(k-.3)),new D(q*(k+.25),-1.3,E*(k+.25)),new D(q*(k+.1-x()*.3),-.9-G*.7,E*(k+.1)),new D(q*(k-.2),-1-G,E*(k-.2))]);W.add(new st(new Aa(dt,10,.05+x()*.05,5),vt(9068355)))}for(let A=0;A<7;A++){let O=x()*6.28,k=x()*.4,q=ui(O)*k,E=1.6+x()*2.4,G=new st(new Ji(.6+x()*.9,E,6),new xe({color:wh[4+A%2],flatShading:!0}));G.rotation.x=Math.PI,G.rotation.y=x()*3,G.position.set(Math.cos(O)*q,-15-x()*2-E/2+(1-k)*3,-Math.sin(O)*q),W.add(G)}let v=new Ta(1,0);[-.35,.25,.9,1.6,2.3,3.6].forEach((A,O)=>{let k=-Math.PI/2+A*.55,q=ui(k)*.86,E=-4.2-O%3*1.2,G=new xe({color:[12575743,16762589,14273791][O%3],emissive:[7320575,16748479,11111423][O%3],emissiveIntensity:.35,flatShading:!0});for(let dt=0;dt<3;dt++){let yt=new st(v,G);yt.scale.set(.22+dt*.05,.6+x()*.4,.22+dt*.05),yt.position.set(Math.cos(k)*(q+.25)+(dt-1)*.3,E+(dt===1?.2:0),-Math.sin(k)*(q+.25)),yt.rotation.set((x()-.5)*.8,x()*3,(dt-1)*.5),W.add(yt)}})}let mt=Fd(Od(1,-.25),.3,he.grassSide,-.75);W.add(mt),pn.forEach(([x,v,A,O])=>{let k=x===A,q=Math.abs(k?O-v:A-x),E=(x+A)/2,G=(v+O)/2;if(k&&Math.abs(E-sn.x)<.2&&Math.min(v,O)<sn.z1&&Math.max(v,O)>sn.z0&&ze(E,G)>0)return;let dt=q>=40,yt=dt?Yd:oy,te=ze(E,G),lt=N(k?yt:q+yt,.06,k?q+yt:yt,dt?15851446:he.road,E,te+.03,G);lt.castShadow=!1,W.add(lt),dt&&[-1,1].forEach(Ht=>{let ge=N(k?.22:q+yt,.1,k?q+yt:.22,14731676,E+(k?Ht*(yt/2-.05):0),te+.05,G+(k?0:Ht*(yt/2-.05)));ge.castShadow=!1,W.add(ge)})}),wy(W),Ty(W);let j=Ay(W),at=_r(5),Rt=new le(.26,.26,.05,14),It=new Ci(Rt,vt(15126435),140),Ut=new Ve;for(let x=0;x<140;x++){let v=pn[Math.floor(at()*pn.length)],A=at(),O=v[0]===v[2],k=un(v[0],v[2],A)+(O?(at()-.5)*1.8:0),q=un(v[1],v[3],A)+(O?0:(at()-.5)*1.8);Ut.position.set(k,ze(k,q)+.07,q),Ut.rotation.y=at()*.6,Ut.updateMatrix(),It.setMatrixAt(x,Ut.matrix)}It.receiveShadow=!0,W.add(It);let pe=new st(new le(1,1,.06,40),vt(he.sand));pe.scale.set(Xt.rx+1.2,1,Xt.rz+1.2),pe.position.set(Xt.x,.03,Xt.z),pe.receiveShadow=!0,W.add(pe);let ut=new st(new le(1,1,.1,40),vt(7321295));ut.scale.set(Xt.rx,1,Xt.rz),ut.position.set(Xt.x,.05,Xt.z),W.add(ut);let bt=new xe({color:he.water,transparent:!0,opacity:.72}),Ft=new st(new le(1,1,.08,40),bt);Ft.scale.set(Xt.rx-.15,1,Xt.rz-.15),Ft.position.set(Xt.x,.2,Xt.z),W.add(Ft),[[-4.5,1],[3.5,-1.6],[5.2,1.2]].forEach(([x,v])=>{let A=new st(new le(.55,.55,.05,12),vt(he.lily));A.position.set(Xt.x+x,.25,Xt.z+v),W.add(A)});let wt=N(.25,.2,.25,16758465,Xt.x-4.5,.35,Xt.z+1);W.add(wt);let Zt=(()=>{let x=new Yt;x.position.set(Xt.x,0,Xt.z),x.scale.setScalar(Math.min(1,Xt.rz/4)),W.add(x);let v=vt(15656668),A=vt(14274498),O=new st(new le(1.3,1.45,.45,28),v);O.position.y=.2,x.add(O);let k=new st(new Di(1.3,.12,8,28),A);k.rotation.x=Math.PI/2,k.position.y=.44,x.add(k);let q=new st(new le(1.18,1.18,.05,28),new xe({color:10476783,emissive:3837872,emissiveIntensity:.12}));q.position.y=.43,x.add(q);let E=new st(new le(.16,.24,1,14),v);E.position.y=.9,x.add(E);let G=new st(new Me(.55,20,10,0,Math.PI*2,Math.PI/2,Math.PI/2),A);G.position.y=1.45,x.add(G);let dt=new ke({color:14677247,transparent:!0,opacity:.8,depthWrite:!1}),yt=new st(new le(.05,.1,.9,10),dt);yt.position.y=1.85,x.add(yt);let te=[];for(let lt=0;lt<14;lt++){let Ht=new st(new Me(.06,6,5),dt);x.add(Ht),te.push({m:Ht,a:lt/14*Math.PI*2,t:lt/14})}return x.userData.keep=!0,{g:x,jet:yt,drops:te,rimR:1.3}})();for(let x=0;x<10;x++){let v=at()*Math.PI*2,A=Xt.x+Math.cos(v)*(Xt.rx+.6),O=Xt.z+Math.sin(v)*(Xt.rz+.6);W.add(N(.08,1,.08,8173679,A,.45,O))}let Kt=Ry(W,at);{let x=new xs(1,24);x.rotateX(-Math.PI/2);let v=new Ci(x,new xe({color:16777215}),70),A=new Qt,O=[11722133,13298352,11130508,13823672],k=0;for(let q=0;q<900&&k<70;q++){let E=(at()-.5)*en.w,G=(at()-.5)*en.d;if(!Ki(E,G,4)||Ba(E,G,1.5)||Ss(E,G)<3||$i(E,G,2)||gr(E,G))continue;Ut.position.set(E,ze(E,G)+.008,G),Ut.rotation.set(0,at()*6,0);let dt=1.6+at()*2.6;Ut.scale.set(dt,1,dt*(.6+at()*.5)),Ut.updateMatrix(),v.setMatrixAt(k,Ut.matrix),v.setColorAt(k,A.set(O[k%O.length])),k++}v.count=k,v.receiveShadow=!0,W.add(v),Ut.scale.set(1,1,1)}let ee=new Me(.13,10,8),me=new Ji(.07,.38,6),ft=(x,v)=>Ki(x,v,2.2)&&!$i(x,v,1.5)&&!Nd(x,v,.8)&&!Ba(x,v,.6)&&Ss(x,v)>2.4&&!kd(x,v)&&!gr(x,v)&&!pn.some(([A,O,k,q])=>x>=Math.min(A,k)-Rn-.3&&x<=Math.max(A,k)+Rn+.3&&v>=Math.min(O,q)-Rn-.3&&v<=Math.max(O,q)+Rn+.3)&&!Xe.some(([A,O])=>Math.abs(x-A)<3.6&&Math.abs(v-O)<3.8)&&!(Math.abs(x-bn[0])<6&&Math.abs(v-bn[1])<5.4);he.flower.forEach((x,v)=>{let O=new Ci(ee,vt(x),60),k=0;for(;k<60;){let q=(at()-.5)*(en.w-6),E=(at()-.5)*(en.d-6);ft(q,E)&&(Ut.position.set(q,ze(q,E)+.11,E),Ut.rotation.y=at(),Ut.updateMatrix(),O.setMatrixAt(k++,Ut.matrix))}W.add(O)});let Mt=new Ci(me,vt(9423996),420);for(let x=0;x<420;){let v=(at()-.5)*(en.w-4),A=(at()-.5)*(en.d-4);ft(v,A)&&(Ut.position.set(v,ze(v,A)+.17,A),Ut.rotation.set(at()*.3,at()*3,at()*.3),Ut.updateMatrix(),Mt.setMatrixAt(x++,Ut.matrix))}W.add(Mt);let F=(t.houses||[]).findIndex(x=>x.id==="love"),kt=(x,v)=>{if(Sn)return Nd(x,v,1.2);if(F<0||!Xe[F])return!1;let[A,O]=Xe[F];return Math.abs(x-A)<7&&v>O+2.5&&v<O+12||Math.abs(v-O)<3.5&&Math.abs(x-A)<8.5||Math.abs(x-A)<3.5&&v<O&&v>O-8},_t=[],zt=[],Q=(x,v)=>{let A=0;return zt.forEach(O=>{let k=Math.hypot(x-O.x,v-O.z)/O.r;k<1&&(A=Math.max(A,O.h*Math.sqrt(1-k*k)-.06))}),A},xt=(x,v,A,O)=>{if(!ft(x,v)||kt(x,v)||_t.some(([q,E])=>Math.hypot(q-x,E-v)<2.6))return!1;let k=vh(at,A||(at()<.12?"cherry":void 0));return O&&k.scale.setScalar(O),k.position.set(x,ze(x,v)+Q(x,v),v),k.userData.post=1.1,W.add(k),_t.push([x,v]),!0},ht=(x,v,A)=>[[0,0],[A,0],[-A,0],[0,A],[0,-A]].every(([O,k])=>ft(x+O,v+k)&&!kt(x+O,v+k));for(let v=0;v<21;v++){let A=(v+.5+(at()-.5)*.35)/21*Math.PI*2,O=ui(A)-5.5-at()*2,k=Math.cos(A)*O,q=Math.sin(A)*O,E=3.2+at()*1.4;if(ht(k,q,E*.8)){let dt=new st(ws,vt(13035949));dt.scale.set(E,.55,E*(.8+at()*.3)),dt.position.set(k,ze(k,q)-.05,q),dt.receiveShadow=!0,dt.userData.post=E*.85,W.add(dt),zt.push({x:k,z:q,r:E,h:.5})}let G=3+Math.floor(at()*3);for(let dt=0;dt<G*3&&_t.length<400;dt++){let yt=at()*6.28,te=at()*3.2;if(xt(k+Math.cos(yt)*te,q+Math.sin(yt)*te,void 0,.95+at()*.4)&&--G===0)break}for(let dt=0;dt<3;dt++){let yt=at()*6.28,te=2.4+at()*1.6,lt=k+Math.cos(yt)*te,Ht=q+Math.sin(yt)*te;if(!ft(lt,Ht)||kt(lt,Ht)||_t.some(([Oe,_n])=>Math.hypot(Oe-lt,_n-Ht)<1.5))continue;let ge=Ha(at,at()<.45);ge.position.set(lt,ze(lt,Ht)+Q(lt,Ht),Ht),W.add(ge)}}for(let x=0,v=0;x<600&&v<12;x++)xt((at()-.5)*en.w,(at()-.5)*en.d,at()<.5?"round":"tall",.7+at()*.15)&&v++;{let x=new li(.7,2),v=new li(.55,2);[[x,vt(9686918,{}),16],[x,vt(11066528,{}),12],[v,vt(14538184,{}),16],[v,vt(13221806,{}),10]].forEach(([O,k,q])=>{let E=new Ci(O,k,q),G=0;for(let dt=0;dt<3e3&&G<q;dt++){let yt=at()<.6&&_t.length,te=yt?_t[Math.floor(at()*_t.length)]:null,lt=te?te[0]+(at()-.5)*5:(at()-.5)*(en.w-6),Ht=te?te[1]+(at()-.5)*5:(at()-.5)*(en.d-6);if(!ft(lt,Ht)||kt(lt,Ht)||_t.some(([Oe,_n])=>Math.hypot(Oe-lt,_n-Ht)<1.3))continue;let ge=.7+at()*.8;Ut.position.set(lt,ze(lt,Ht)+.3*ge,Ht),Ut.rotation.set(at(),at()*6,at()),Ut.scale.set(ge*1.2,ge*.8,ge),Ut.updateMatrix(),E.setMatrixAt(G++,Ut.matrix)}E.count=G,E.castShadow=!0,E.receiveShadow=!0,W.add(E)}),Ut.scale.set(1,1,1),Ut.rotation.set(0,0,0)}let C=[0,1,2].map(x=>{let v=[];for(let k=0;k<9;k++){let q=Math.random()*6.283,E=Math.sqrt(Math.random())*.85;v.push(Xt.x+Math.cos(q)*Xt.rx*E,.42,Xt.z+Math.sin(q)*Xt.rz*E)}for(let k=0;k<7;k++){let q=j.curve.getPointAt(Math.random());v.push(q.x+(Math.random()-.5)*1.4,.3,q.z+(Math.random()-.5)*1.4)}let A=new Te;A.setAttribute("position",new re(v,3));let O=new gs(A,new Zi({size:.9,map:z,color:[16777215,16774072,16766698][x],transparent:!0,opacity:0,depthWrite:!1}));return O.userData={base:.6,ph:x*2.1},W.add(O),O}),S=[];pn.forEach(([x,v,A,O])=>[.3,.72].forEach(k=>{let q=x===A,E=un(x,A,k)+(q?Rn+.6:0),G=un(v,O,k)+(q?0:Rn+.6);Xe.some(([dt,yt])=>Math.abs(E-dt)<3.6&&Math.abs(G-yt)<4.2)||Math.abs(E-bn[0])<6.2&&Math.abs(G-bn[1])<6||$i(E,G,1.5)||kt(E,G)||!Ki(E,G,2)||Ba(E,G,.5)||Ss(E,G)<2||gr(E,G)||kd(E,G)||S.push([E,G])})),S.slice(0,7).forEach(([x,v],A)=>{let O=yy();if(O.position.set(x,ze(x,v),v),O.userData.post=.3,W.add(O),A%2===0&&_.length<3){let k=new uo(16763255,0,12,1.6);k.position.set(x,ze(x,v)+2.7,v),W.add(k),_.push(k)}});let V=[],$=[];(t.houses||[]).forEach((x,v)=>{if(!Xe[v])return;let A=x.id==="love"?uy():x.special==="arcade"?dy():x.special==="store"?fy():zd(x,!1);A.position.set(Xe[v][0],ze(Xe[v][0],Xe[v][1]),Xe[v][1]),A.rotation.y=mr[v]||0,A.userData.face=mr[v]||0,A.userData.id=x.id,W.add(A),V.push(A);let O=A.userData.face;$.push({x:Xe[v][0]+Math.sin(O)*A.userData.doorZ,z:Xe[v][1]+Math.cos(O)*A.userData.doorZ})});let it=my(W,Sn&&mr[Sn.house]||0),tt=zd(null,!0);tt.position.set(bn[0],ze(bn[0],bn[1]),bn[1]),tt.userData.id="hall",W.add(tt),V.push(tt);let At={x:bn[0],z:bn[1]+tt.userData.doorZ};$.push(At);let ot=Cy($),Et=ot.doorNodes[ot.doorNodes.length-1];(function(){W.updateMatrixWorld(!0);let v=new Set,A=q=>{q&&q.traverse(E=>v.add(E))};A(Ft),Kt.ducks.forEach(q=>A(q.g)),V.forEach(q=>{A(q.userData.hinge),A(q.userData.flag),A(q.userData.bell)}),A(it.car),A(Zt.jet),Zt.drops.forEach(q=>A(q.m));let O=new Map,k=[];W.traverse(q=>{if(!q.isMesh||q.isInstancedMesh||v.has(q)||q.userData.keepBatch||Array.isArray(q.material)||q.material.transparent)return;let E=q.geometry.clone();Object.keys(E.attributes).forEach(G=>{G!=="position"&&G!=="normal"&&G!=="uv"&&E.deleteAttribute(G)}),E.attributes.uv&&(E.index&&(E=E.toNonIndexed()),E.clearGroups(),E.applyMatrix4(q.matrixWorld),O.has(q.material)||O.set(q.material,[]),O.get(q.material).push(E),k.push(q))}),k.forEach(q=>q.parent.remove(q)),O.forEach((q,E)=>{let G=xo(q,!1);if(q.forEach(yt=>yt.dispose()),!G)return;let dt=new st(G,E);dt.castShadow=!0,dt.receiveShadow=!0,W.add(dt)})})();let Tt=[],rt={her:null,him:null,home:null,kiss:0},Dt=x=>ot.nodes[ot.doorNodes[x]],jt={},$t=x=>jt[x]||0;function Bt(x,v,A){let O=Kd(x);W.add(O.g);let k=Dt(v);return O.g.position.set(k.x+Vt(-.6,.6),0,k.z+Vt(0,.4)),Object.assign(O,{kind:"person",i:Tt.length,home:v,path:[],speed:Vt(1.35,1.75),wait:Vt(0,3),t:Vt(0,6),v:0,goal:"",inside:!1},A||{}),Tt.push(O),O}(t.houses||[]).forEach((x,v)=>{v>=Xe.length||(x.id==="love"?(rt.home=v,rt.her=Bt(Th.her,v,{love:"her"}),rt.him=Bt(Th.him,v,{love:"him"})):Bt(Wa[v]||Wa[v%9]||Wa[0],v))});let ae=Object.assign(My(),{kind:"cat",path:[],speed:1.1,wait:2,t:0,sit:!0}),ie=Object.assign(Ey(),{kind:"dog",path:[],speed:2.2,wait:1,t:0,buddy:0});{let x=ot.nodes[ot.doorNodes[2]],v=ot.nodes[ot.doorNodes[ot.doorNodes.length-1]];ae.g.position.set(x.x+1.5,0,x.z+.6),ie.g.position.set(v.x+3,0,v.z+.8)}W.add(ae.g,ie.g);let Re=[0,1,2,3].map(x=>{let v=by(x);return W.add(v),{g:v,a:Vt(0,6.28),r:Vt(.62,.92),sp:Vt(.25,.5)*(x%2?1:-1),jump:0,jx:0,jz:0}});function X(){let x=document.createElement("canvas");x.width=128,x.height=64;let v=x.getContext("2d");v.font="bold 34px sans-serif",v.fillStyle="#7a6a9a",v.fillText("z",18,52),v.font="bold 26px sans-serif",v.fillText("z",52,36),v.font="bold 20px sans-serif",v.fillText("z",82,22);let A=new ms(new qi({map:new En(x),transparent:!0,depthWrite:!1}));return A.scale.set(1.1,.55,1),A.visible=!1,W.add(A),A}ae.zzz=X(),ie.zzz=X();let Ct=jd("\u2665","#ff6f91",.9,.45);W.add(Ct);let ct=new D,gt=0,Pt=[],Nt=new Me(.09,6,5);function ce(x,v){for(let A=0;A<7;A++){let O=Math.random()*6.28,k=Math.random()*.8,q=x+Math.cos(O)*k,E=v+Math.sin(O)*k*.7;if(!$i(q,E,-.8))continue;let G=new st(Nt,vt(A%2?13208410:14723437));G.position.set(q,1.6+Math.random()*.6,E),W.add(G),Pt.push({m:G,vy:0,life:25})}}let Ue=[];function Ye(x,v,A){let O=new st(new oo(.15,.25,18),new ke({color:16777215,transparent:!0,opacity:.8,side:cn}));O.rotation.x=-Math.PI/2,O.position.set(x,.245,v),O.userData.size=A,W.add(O),Ue.push(O)}let ue=new st(new oo(.3,.45,20),new ke({color:16777215,transparent:!0,opacity:0,side:cn}));ue.rotation.x=-Math.PI/2,W.add(ue);let wn=[16758465,14273008,16375946,11591910].map((x,v)=>{let A=Sy(x);return W.add(A),{g:A,ph:v*1.7,cx:Vt(-25,25),cz:Vt(-15,15)}}),Nn=new Te,yr=[];for(let x=0;x<40;x++)yr.push(Vt(-30,30),Vt(1,3),Vt(-20,20));Nn.setAttribute("position",new re(yr,3));let Ts=new gs(Nn,new Zi({color:16773792,size:.35,transparent:!0,opacity:0}));W.add(Ts);let mn=0;function fi(){let x=new Date;return x.getHours()+x.getMinutes()/60}function Qi(x){return x>=23||x<6.5?"sleep":x<7?"morning":x<11.5?"work":x<13?"lunch":x<16.5?"work":x<21?"evening":"home"}function As(x){let v=x%18,A=Math.floor(v/6),O=v%6;return{x:At.x+(O-2.5)*1.2+A%2*.6,z:At.z+1.3+A*1.1}}function gn(x,v,A){if(x.goal=A,x.path=ye(x,v),!x.path.length){let O=ot.nearest(x.g.position.x,x.g.position.z),k=ot.nearest(v.x,v.z);x.path=ot.path(O,k).concat([v])}}function Rs(x){let v=Dt(x),A=mr[x]||0;return{x:v.x-Math.sin(A)*.9,z:v.z-Math.cos(A)*.9,f:A}}function On(x){let v=Rs(x.home);x.inside=!1,x.g.visible=!0,x.g.position.set(v.x+Vt(-.3,.3),0,v.z),x.g.rotation.set(0,v.f,0)}function ts(x,v){let A=Rs(x.home);gn(x,{x:A.x,z:A.z},"in"),x.stay=v}let vr=V.findIndex(x=>x.userData.alwaysLit),Mr=null,Cs=null;function Mo(){if(!Mr){Mr=Xe.map((x,v)=>{let A=Dt(v);return[[-1.7,-.5],[1.7,-.5],[-.9,.2],[.9,.2]].map(([O,k])=>({x:A.x+O,z:A.z+k})).filter(O=>!oe(O.x,O.z,.15))}),Cs=[];for(let x=0;x<18;x++){let v={x:Xt.x+Math.cos(x/18*6.283)*(Xt.rx+2.2),z:Xt.z+Math.sin(x/18*6.283)*(Xt.rz+1.9)};oe(v.x,v.z,.2)||Cs.push(v)}}}let R=x=>x[Math.floor(Math.random()*x.length)];function Y(x){Mo();let v=Mr[x.home];return v.length?R(v):Dt(x.home)}function et(x,v){Mo();let A=Math.random();if(v==="lunch"&&vr>=0&&A<.6){let O=Dt(vr);return{x:O.x+Vt(-2.6,2.6),z:O.z+Vt(0,.8)}}if(v==="lunch"&&A<.75)return As(Math.floor(Vt(0,18)));if(A<.4&&Cs.length)return R(Cs);if(A<.85){let O=Dt(Math.floor(Vt(0,Xe.length)));return{x:O.x+Vt(-1,1),z:O.z+Vt(0,.5)}}return As(Math.floor(Vt(0,18)))}function nt(x){if(x.love==="him")return;let v=Qi(fi());if(x.love==="her")return J(x,v);let A=$t(x.home)>0;if(x.helper&&$t(x.home)<x.helper){x.inside&&On(x),gn(x,{x:At.x,z:At.z},"leave");return}if(mn&&!A&&v!=="sleep"&&v!=="home"&&!x.helper){x.inside&&On(x),(x.goal!=="hall"||x.path.length)&&gn(x,As(x.i),"hall"),x.wait=Vt(3,6);return}if(A||v==="work"){if(x.inside){On(x),gn(x,Y(x),"work");return}if(x.goal==="work"){ts(x,Vt(3,A?6:10));return}gn(x,Y(x),"work");return}if(v==="sleep"||v==="home"){if(x.inside){x.wait=Vt(20,40);return}ts(x,Vt(20,40));return}if(x.inside)On(x);else if(Math.random()<.15){ts(x,Vt(5,12));return}gn(x,et(x,v),"stroll"),x.wait=Vt(2,6)}function J(x,v){let A=rt.him;if(v==="sleep"||v==="home"||fi()>=20.5){if(St(),x.inside){x.wait=Vt(30,60);return}ts(x,Vt(30,60));return}if(x.inside&&(On(x),On(A),A.g.position.x+=.7),x.sitting){St(),gn(x,et(x,v),"stroll"),x.wait=Vt(2,5);return}if(se&&Math.random()<.55){gn(x,se.userData.front,"swing");return}gn(x,et(x,v),"stroll"),x.wait=Vt(2,5)}function St(){[rt.her,rt.him].forEach(x=>{!x||!x.sitting||(x.sitting=!1,x.g.position.set(se.userData.front.x+(x.love==="her"?-.4:.4),0,se.userData.front.z),x.g.rotation.set(0,se.rotation.y,0))})}function Ot(x){x.goal==="in"?(x.inside=!0,x.g.visible=!1,x.wait=x.stay||10):x.goal==="work"?x.wait=Vt(6,12):x.goal==="swing"?(x.sitting=!0,x.wait=Vt(15,30)):x.goal==="leave"&&(W.remove(x.g),Tt.splice(Tt.indexOf(x),1))}function qt(x,v){let A=rt.her;if(A.inside){if(x.inside)return!1;let ge=Rs(x.home),Oe=ge.x-x.g.position.x,_n=ge.z-x.g.position.z,ii=Math.hypot(Oe,_n);if(ii<.15)return x.inside=!0,x.g.visible=!1,!1;let Eo=Math.min(ii,A.speed*1.2*v);return x.g.position.x+=Oe/ii*Eo,x.g.position.z+=_n/ii*Eo,x.g.rotation.y=Math.atan2(Oe,_n),x.v=A.speed,!0}if(x.inside&&(On(x),x.g.position.x+=.7),A.sitting)return x.sitting=!0,!1;x.sitting=!1;let O=A.g.rotation.y,k=A.g.position.x-Math.cos(O)*.72,q=A.g.position.z+Math.sin(O)*.72,E=k-x.g.position.x,G=q-x.g.position.z,dt=Math.hypot(E,G);if(dt<.05){x.v=0;let ge=O-x.g.rotation.y;return ge=Math.atan2(Math.sin(ge),Math.cos(ge)),x.g.rotation.y+=ge*Math.min(1,v*6),!1}let yt=Math.min(A.speed*1.35,dt*4);x.v=(x.v||0)+(yt-(x.v||0))*Math.min(1,v*5);let te=Math.min(dt,x.v*v);x.g.position.x+=E/dt*te,x.g.position.z+=G/dt*te;let Ht=(dt>.35?Math.atan2(E,G):O)-x.g.rotation.y;return Ht=Math.atan2(Math.sin(Ht),Math.cos(Ht)),x.g.rotation.y+=Ht*Math.min(1,v*7),x.v>.15}{let x=Qi(fi());(x==="sleep"||x==="home")&&Tt.forEach(v=>{v.inside=!0,v.g.visible=!1,v.wait=Vt(5,30)})}let Gt=V.filter(x=>x.userData.id!=="hall").map(x=>{let v=x.userData.size,A=x.userData.face||0,O=Math.abs(Math.sin(A))>.5;if(!v)return{x:x.position.x,z:x.position.z,hw:3.3,hd:2.6};let k=Math.cos(A)*v.cx,q=-Math.sin(A)*v.cx;return{x:x.position.x+k,z:x.position.z+q,hw:O?v.hd:v.hw,hd:O?v.hw:v.hd}}).concat([{x:bn[0],z:bn[1],hw:5.8,hd:4.1}]),ne=[];W.children.forEach(x=>{x.userData.post&&ne.push({x:x.position.x,z:x.position.z,r:x.userData.post})}),Kt.posts.forEach(x=>ne.push(x));function oe(x,v,A){return A=A||.5,!Ki(x,v,2.5)||Ba(x,v,0)||Ss(x,v)<1.8&&!j.bridges.some(O=>Math.hypot(O.x-x,O.z-v)<2.4)||$i(x,v,.9+A)||Gt.some(O=>Math.abs(x-O.x)<O.hw+A&&Math.abs(v-O.z)<O.hd+A)?!0:ne.some(O=>Math.hypot(x-O.x,v-O.z)<O.r+A*.6)}function Wt(x,v){let A=Math.ceil(Math.hypot(v.x-x.x,v.z-x.z)/.4);for(let O=1;O<=A;O++){let k=O/A;if(oe(un(x.x,v.x,k),un(x.z,v.z,k),.45))return!1}return!0}let _e=(x,v,A)=>pn.some(([O,k,q,E])=>x>=Math.min(O,q)-Rn-A&&x<=Math.max(O,q)+Rn+A&&v>=Math.min(k,E)-Rn-A&&v<=Math.max(k,E)+Rn+A),se=null;if(it.blocks.forEach(x=>Gt.push(x)),it.posts.forEach(x=>ne.push(x)),rt.home!=null&&Sn&&Sn.house===rt.home){let[x,v]=Sn.swing,A=mr[rt.home]||0;se=Hd(),se.position.set(x,ze(x,v),v),se.rotation.y=A,W.add(se),se.userData.front={x:x+Math.sin(A)*1.25,z:v+Math.cos(A)*1.25},Gt.push({x,z:v,hw:1.55,hd:1.55}),Gt.push({x:x-Math.cos(A)*2,z:v+Math.sin(A)*2,hw:.8,hd:.8})}else if(rt.home!=null){let[x,v]=Xe[rt.home],A=[[0,7.2],[0,6.4],[-2.2,7.2],[2.2,7.2],[0,8.4],[4.6,.8],[-4.6,.8],[0,-5.2]],O=(k,q)=>!Ki(k,q,2.5)||$i(k,q,1)||Gt.some(E=>Math.abs(k-E.x)<E.hw+.1&&Math.abs(q-E.z)<E.hd+.1)||_e(k,q,0);for(let[k,q]of A){let E=x+k,G=v+q;if([[-1.6,-.9],[1.6,-.9],[-1.6,.9],[1.6,.9],[0,0],[0,1.6],[-.5,1.6],[.5,1.6]].every(([yt,te])=>!O(E+yt,G+te))){W.children.slice().forEach(yt=>{if(yt.userData.post&&Math.abs(yt.position.x-E)<2.6&&Math.abs(yt.position.z-G)<2.2){W.remove(yt);let te=ne.findIndex(lt=>lt.x===yt.position.x&&lt.z===yt.position.z);te>=0&&ne.splice(te,1)}}),se=Hd(),se.position.set(E,ze(E,G),G),W.add(se),se.userData.front={x:E,z:G+1.25},Gt.push({x:E,z:G,hw:1.55,hd:.75});break}}}let Se=[],rn=new Me(.28,8,6);function Ee(x){let v=new st(rn,new xe({color:16777215,transparent:!0,opacity:.75,depthWrite:!1})),A=x.userData.chimney;v.position.set(x.position.x+A.x+Vt(-.1,.1),A.y,x.position.z+A.z+Vt(-.1,.1)),W.add(v),Se.push({m:v,life:0})}let Jt=[3,6,10];function Fn(){Xe.forEach((x,v)=>{if(v===rt.home)return;let A=Jt.filter(k=>$t(v)>=k).length,O=Tt.filter(k=>k.helper&&k.home===v&&k.goal!=="leave");for(let k=O.length;k<A;k++){let q=Bt(Bd[k%Bd.length],v,{helper:Jt[k]});q.g.position.set(At.x+Vt(-1,1),0,At.z+Vt(0,.6)),gn(q,Y(q),"work")}})}function ye(x,v){let A={x:x.g.position.x,z:x.g.position.z};if(Wt(A,v))return[v];let O=ot.nearest(A.x,A.z),k=ot.nearest(v.x,v.z),q=ot.path(O,k);if(!Wt(A,q[0]))return[];let E=q[q.length-1];return Wt(E,v)&&q.push(v),q}function Cn(x){if(x.kind==="dog"&&Math.random()<.65){let A=Tt[x.buddy%Tt.length];for(let q=0;q<Tt.length&&(!A.g.visible||A.sitting);q++)A=Tt[++x.buddy%Tt.length];let O=A.g.position,k={x:O.x+Vt(-1.5,1.5),z:O.z+Vt(.8,1.6)};if(Math.random()<.15&&x.buddy++,!oe(k.x,k.z)&&(x.path=ye(x,k),x.path.length))return}for(let A=0;A<30;A++){let O={x:x.g.position.x+Vt(-9,9),z:x.g.position.z+Vt(-7,7)};if(!oe(O.x,O.z,.8)&&Wt(x.g.position,O)){x.path=[O];return}}let v=ot.nodes[ot.nearest(x.g.position.x,x.g.position.z)];x.path=[{x:v.x,z:v.z}]}function pi(x,v){let A=x.g.position;if(x.sleep>0)return x.v=0,!1;if(!x.path.length){if(x.v=0,x.wait-=v,x.wait<=0){if(x.kind==="person")return x.wait=Vt(1.5,4),nt(x),!1;Cn(x),x.wait=Vt(2,6),x.kind==="cat"&&(x.sit=Math.random()<.45,x.sit&&(x.path=[]))}return!1}let O=x.path[0],k=O.x-A.x,q=O.z-A.z,E=Math.hypot(k,q);if(E<.08)return x.path.shift(),!x.path.length&&x.kind==="person"&&Ot(x),!0;let dt=Math.atan2(k,q)-x.g.rotation.y;dt=Math.atan2(Math.sin(dt),Math.cos(dt)),x.g.rotation.y+=dt*Math.min(1,v*7);let yt=E+(x.path.length>1?99:0),te=Math.abs(dt)>1.1?x.speed*.15:x.speed*Math.min(1,yt/1.2+.25);x.v=(x.v||0)+(te-(x.v||0))*Math.min(1,v*4);let lt=Math.min(E,x.v*v);return A.x+=Math.sin(x.g.rotation.y)*lt*.35+k/E*lt*.65,A.z+=Math.cos(x.g.rotation.y)*lt*.35+q/E*lt*.65,!0}function xn(x,v){if(Tt.slice().forEach(E=>{let G=E.love==="him"?qt(E,x):pi(E,x);if(E.inside||!E.g.visible)return;if(E.sitting&&se){let lt=E.love==="her"?-.4:.4;ct.set(lt,.06,0),se.userData.seat.localToWorld(ct),W.worldToLocal(ct),E.g.position.set(ct.x,ct.y-Ah,ct.z),E.g.rotation.set(se.userData.pivot.rotation.x*.9,se.rotation.y,0),E.parts.legL.rotation.x=E.parts.legR.rotation.x=-1.45+Math.sin(v*1.7)*.25,E.parts.armL.rotation.x=E.parts.armR.rotation.x=-.5,E.parts.head.rotation.set(0,0,0);return}let dt=Math.min(1,(E.v||0)/E.speed);E.t+=x*(G?3+7*dt:2);let yt=G?Math.sin(E.t)*.75*dt:0;E.parts.legL.rotation.x=yt,E.parts.legR.rotation.x=-yt,E.parts.armL.rotation.x=-yt*.8,E.parts.armR.rotation.x=yt*.8,E.g.rotation.x=0,E.parts.head.rotation.x=0,E.parts.head.rotation.z=0;let te=ze(E.g.position.x,E.g.position.z);if(E.g.position.y=te+(G?Math.abs(Math.sin(E.t))*.06:0),!G&&!E.path.length){if(E.goal==="hall"){let lt=Math.PI-E.g.rotation.y;lt=Math.atan2(Math.sin(lt),Math.cos(lt)),E.g.rotation.y+=lt*Math.min(1,x*6),E.g.position.y=te+Math.max(0,Math.sin(v*4+E.i))*.1,E.parts.armR.rotation.x=-2.6+Math.sin(v*6+E.i)*.3}else if(E.goal==="work"){let lt=Math.PI-E.g.rotation.y;lt=Math.atan2(Math.sin(lt),Math.cos(lt)),E.g.rotation.y+=lt*Math.min(1,x*6),E.parts.armR.rotation.x=-1.3+Math.sin(v*9+E.i)*.55,E.parts.armL.rotation.x=-.9+Math.sin(v*9+E.i+1.6)*.35,E.parts.head.rotation.x=.25}E.parts.head.rotation.y=E.goal==="work"?0:Math.sin(v*.7+E.i)*.4}else E.parts.head.rotation.y=0}),rt.kiss>0&&rt.him&&rt.him.g.visible){rt.kiss-=x;let E=rt.her,G=rt.him,dt=Math.min(1,Math.sin(Math.min(1,(2.4-rt.kiss)/2.4)*Math.PI)*1.6),yt=E.g.position.x-G.g.position.x,te=E.g.position.z-G.g.position.z;if(G.sitting)G.parts.head.rotation.y=.9*dt,G.parts.head.rotation.z=.25*dt,E.parts.head.rotation.z=-.15*dt;else{let lt=Math.atan2(yt,te)-G.g.rotation.y;lt=Math.atan2(Math.sin(lt),Math.cos(lt)),G.g.rotation.y+=lt*Math.min(1,x*8);let Ht=Math.atan2(-yt,-te)-E.g.rotation.y;Ht=Math.atan2(Math.sin(Ht),Math.cos(Ht)),E.g.rotation.y+=Ht*Math.min(1,x*3)*.5,G.g.rotation.x=.2*dt}Ct.visible=!0,Ct.position.set((E.g.position.x+G.g.position.x)/2,2+(2.4-rt.kiss)*.35,(E.g.position.z+G.g.position.z)/2),Ct.material.opacity=Math.min(1,rt.kiss*1.5),rt.kiss<=0&&(Ct.visible=!1,G.g.rotation.x=0)}if(se){let E=se.userData.pivot,G=rt.her&&rt.her.sitting;E.rotation.x=G?Math.sin(v*1.7)*(rt.kiss>0?.12:.32):E.rotation.x*Math.max(0,1-x*1.5)}let A=Qi(fi());V.forEach((E,G)=>{if(!E.userData.wm)return;let dt=0;if(G===rt.home?dt=0:($t(G)>0||E.userData.alwaysLit||A!=="sleep"&&Tt.some(yt=>yt.home===G&&yt.inside))&&(dt=1),E.userData.lit=un(E.userData.lit||0,dt,Math.min(1,x*2)),E.userData.wm.emissiveIntensity=ni*(.28+.7*E.userData.lit),E.userData.heart){let yt=rt.her&&rt.her.inside&&rt.him.inside;E.userData.heart.material.emissiveIntensity=yt?.5+Math.max(0,Math.sin(v*5))*1.3:.2}$t(G)>0&&E.userData.chimney&&Math.random()<x*2.2&&Ee(E)});for(let E=Se.length-1;E>=0;E--){let G=Se[E];G.life+=x,G.m.position.y+=x*.9,G.m.position.x+=x*.25,G.m.scale.setScalar(1+G.life*.9),G.m.material.opacity=Math.max(0,.75-G.life*.3),G.life>2.5&&(W.remove(G.m),G.m.material.dispose(),Se.splice(E,1))}gt+=x,gt>2&&(gt=0,Fn()),[ae,ie].forEach(E=>{if(E.sleep>0){E.sleep-=x;let te=Math.min(1,E.sleepIn+=x*3);E.parts.legs.forEach((lt,Ht)=>{lt.rotation.x=(Ht<2?-1.45:1.45)*te}),E.g.position.y=ze(E.g.position.x,E.g.position.z)-.22*te*E.g.scale.y,E.parts.head.rotation.x=.35*te,E.parts.head.rotation.y=0,E.parts.eyes.forEach(lt=>{lt.scale.y=1-.8*te}),E.parts.tail.rotation.z=Math.sin(v*.8)*.15,E.zzz.visible=!0,E.zzz.position.set(E.g.position.x,.95+v*.6%1*.45,E.g.position.z),E.zzz.material.opacity=.9-v*.6%1*.6,E.sleep<=0&&(E.zzz.visible=!1,E.parts.eyes.forEach(lt=>{lt.scale.y=1}),E.parts.head.rotation.x=0,E.wait=Vt(.3,1));return}let G=pi(E,x),dt=Math.min(1,(E.v||0)/E.speed);E.t+=x*(G?4+8*dt:2);let yt=G?Math.sin(E.t)*.6*dt:0;E.parts.legs.forEach((te,lt)=>{te.rotation.x=lt===0||lt===3?yt:-yt}),E.kind==="cat"?(E.parts.tail.rotation.z=Math.sin(v*2)*.35,E.parts.tail.rotation.x=E.sit&&!G?.9:.5,E.g.children[0].rotation.x=0,E.parts.head.rotation.y=G?0:Math.sin(v*.5)*.5,E.g.position.y=ze(E.g.position.x,E.g.position.z)):(E.parts.tail.rotation.z=Math.sin(v*(G?18:10))*.6,E.parts.head.rotation.x=G?0:Math.sin(v*1.3)*.1,E.g.position.y=ze(E.g.position.x,E.g.position.z)+(G?Math.abs(Math.sin(E.t))*.07:0))});for(let E=Pt.length-1;E>=0;E--){let G=Pt[E];G.m.position.y>.24?(G.vy-=x*9,G.m.position.y=Math.max(.24,G.m.position.y+G.vy*x),G.m.position.y===.24&&Ye(G.m.position.x,G.m.position.z,.5)):G.m.position.y=.24+Math.sin(v*3+E)*.015,G.life-=x,G.life<=0&&(W.remove(G.m),Pt.splice(E,1))}Re.forEach(E=>{E.a+=E.sp*x;let G=Xt.x+Math.cos(E.a)*(Xt.rx-1.6)*E.r,dt=Xt.z+Math.sin(E.a)*(Xt.rz-1)*E.r,yt=null,te=1e9;if(Pt.forEach(lt=>{if(lt.m.position.y<=.3){let Ht=Math.hypot(lt.m.position.x-E.g.position.x,lt.m.position.z-E.g.position.z);Ht<te&&(te=Ht,yt=lt)}}),yt&&!E.jump){let lt=yt.m.position.x-E.g.position.x,Ht=yt.m.position.z-E.g.position.z,ge=Math.hypot(lt,Ht),Oe=Math.min(ge,2.6*x);E.g.position.x+=lt/(ge||1)*Oe,E.g.position.z+=Ht/(ge||1)*Oe,E.g.position.y=.16,E.g.rotation.y=Math.atan2(lt,Ht),ge<.25&&(W.remove(yt.m),Pt.splice(Pt.indexOf(yt),1),Ye(yt.m.position.x,yt.m.position.z,.6)),E.a=Math.atan2((E.g.position.z-Xt.z)/(Xt.rz-1),(E.g.position.x-Xt.x)/(Xt.rx-1.6)),E.r=Math.min(.85,Math.max(.2,Math.hypot((E.g.position.x-Xt.x)/(Xt.rx-1.6),(E.g.position.z-Xt.z)/(Xt.rz-1)))),E.g.userData.tail.rotation.y=Math.sin(v*16+E.a)*.6;return}if(E.jump>0){E.jump+=x*.9;let lt=Math.sin(E.jump*Math.PI)*1.8;E.g.position.set(un(E.jx,G,E.jump),.12+lt,un(E.jz,dt,E.jump)),E.g.rotation.x=-Math.cos(E.jump*Math.PI)*1.1,E.jump>=1&&(E.jump=0,E.g.rotation.x=0,ue.position.set(G,.24,dt),ue.material.opacity=.8,ue.scale.setScalar(1))}else{let lt=G-E.g.position.x,Ht=dt-E.g.position.z;E.g.position.set(un(E.g.position.x,G,Math.min(1,x*6)),.12,un(E.g.position.z,dt,Math.min(1,x*6))),(lt||Ht)&&(E.g.rotation.y=Math.atan2(lt,Ht)),Math.random()<x*.05&&(E.jump=.001,E.jx=G,E.jz=dt,ue.position.set(G,.24,dt),ue.material.opacity=.8,ue.scale.setScalar(1))}E.g.userData.tail.rotation.y=Math.sin(v*8+E.a)*.5}),j.glints.forEach(E=>{E.t=(E.t+E.sp*x*6)%1;let G=j.curve.getPointAt(E.t),dt=j.curve.getTangentAt(E.t);E.m.position.set(G.x-dt.z*E.side,.06,G.z+dt.x*E.side),E.m.rotation.z=-Math.atan2(dt.z,dt.x),E.m.material.opacity=.35+Math.abs(Math.sin(v*3+E.side*9))*.5}),j.ftex.offset.y=(j.ftex.offset.y+x*1.6)%1,Zt.jet.scale.y=1+Math.sin(v*6)*.08,Zt.drops.forEach(E=>{E.t=(E.t+x*.7)%1;let G=.15+E.t*.95,dt=2.25+E.t*.6-E.t*E.t*2.35;E.m.position.set(Math.cos(E.a)*G,dt,Math.sin(E.a)*G)}),j.foam.forEach((E,G)=>{let dt=.8+Math.abs(Math.sin(v*5+G))*.5;E.scale.setScalar(dt)}),Kt.ducks.forEach(E=>{E.a+=E.sp*x;let G=Xt.x+Math.cos(E.a)*(Xt.rx-2),dt=Xt.z+Math.sin(E.a)*(Xt.rz-1.2);E.g.rotation.y=Math.atan2(G-E.g.position.x,dt-E.g.position.z)||E.g.rotation.y,E.g.position.set(G,.18+Math.sin(v*2+E.a)*.03,dt)});for(let E=Ue.length-1;E>=0;E--){let G=Ue[E];G.material.opacity-=x*1.2,G.scale.multiplyScalar(1+x*2.5*G.userData.size),G.material.opacity<=0&&(W.remove(G),G.geometry.dispose(),Ue.splice(E,1))}ue.material.opacity>0&&(ue.material.opacity=Math.max(0,ue.material.opacity-x*.8),ue.scale.multiplyScalar(1+x*1.8)),wn.forEach(E=>{E.ph+=x,E.g.position.set(E.cx+Math.sin(E.ph*.4)*6,1.6+Math.sin(E.ph*1.3)*.5,E.cz+Math.cos(E.ph*.33)*4),E.g.rotation.y=E.ph*.4+Math.PI/2;let G=Math.sin(E.ph*18)*1.1;E.g.userData.l.rotation.y=G,E.g.userData.r.rotation.y=-G});let O=Ts.geometry.attributes.position;for(let E=0;E<O.count;E++)O.setY(E,1.5+Math.sin(v*.8+E)*.8),O.setX(E,O.getX(E)+Math.sin(v*.5+E*3)*x*.4);if(O.needsUpdate=!0,I.forEach(E=>{E.position.x+=E.userData.speed*x,E.position.x>90&&(E.position.x=-90)}),Xn&&zn(x),L.rotation.y+=x*.012,T.forEach(E=>{E.position.y=E.userData.y0+Math.sin(v*.5+E.userData.ph)*.3}),C.forEach(E=>{E.material.opacity=E.userData.base*Math.max(0,Math.sin(v*1.8+E.userData.ph))}),B.forEach(E=>{E.material.opacity=E.userData.base*(.55+.45*Math.sin(v*1.3+E.userData.ph))}),ni>.6)if(Z.t<0){if(Z.wait-=x,Z.wait<=0){let E=Vt(0,Math.PI*2);Z.from.set(Math.cos(E)*180,Vt(110,170),Math.sin(E)*180-40),Z.dir.set(Vt(-1,1),Vt(-.55,-.35),Vt(-.3,.3)).normalize(),Z.t=0}}else{Z.t+=x/1.1,H.position.copy(Z.from).addScaledVector(Z.dir,Z.t*120);let E=H.position.clone().project(o),G=H.position.clone().addScaledVector(Z.dir,10).project(o);H.material.rotation=Math.atan2(G.y-E.y,G.x-E.x),H.material.opacity=Math.sin(Math.min(1,Z.t)*Math.PI)*.95,Z.t>=1&&(Z.t=-1,Z.wait=Vt(7,16),H.material.opacity=0)}else H.material.opacity=0;let k=tt.userData.flag;k.rotation.y=Math.sin(v*3)*.25;let q=tt.userData.bell;q.material.emissiveIntensity=mn?.6+Math.sin(v*6)*.4:0,q.rotation.z=mn?Math.sin(v*7)*.35:0}let Xn=null;function Ce(x){if(!it.car||Xn)return!1;let v=it.car,A={x:v.position.x,z:v.position.z,ry:v.rotation.y},O=ot.nearest(it.exit.x,it.exit.z),k=new Set(ot.doorNodes),E=ot.nodes.map((lt,Ht)=>Ht).filter(lt=>!k.has(lt)&&Math.abs(ze(ot.nodes[lt].x,ot.nodes[lt].z))<.2).filter(lt=>Math.hypot(ot.nodes[lt].x-A.x,ot.nodes[lt].z-A.z)>30),G=lt=>lt[Math.floor(Math.random()*lt.length)],dt=E.length?[G(E),G(E)]:[],yt=[{x:A.x,z:A.z},{x:it.exit.x,z:it.exit.z}],te=O;return dt.concat([O]).forEach(lt=>{ot.path(te,lt).forEach(Ht=>yt.push({x:Ht.x,z:Ht.z})),te=lt}),yt.push({x:it.exit.x,z:it.exit.z},{x:A.x,z:A.z-Math.cos(A.ry)*.01}),yt=yt.filter((lt,Ht)=>!Ht||Math.hypot(lt.x-yt[Ht-1].x,lt.z-yt[Ht-1].z)>.3),Xn={pts:yt,i:1,home:A,done:x,v:0,last:0},!0}function zn(x){let v=it.car,A=Xn,O=A.pts[A.i],k=A.i===A.pts.length-1,q=O.x-v.position.x,E=O.z-v.position.z,G=Math.hypot(q,E);if(A.v=Math.min(k?2:6.5,A.v+x*3),G<.35){if(A.i++,A.i>=A.pts.length){v.position.set(A.home.x,ze(A.home.x,A.home.z),A.home.z),v.rotation.y=A.home.ry;let lt=A.done;Xn=null,lt&&lt();return}return}let dt=Math.min(G,A.v*x);v.position.x+=q/G*dt,v.position.z+=E/G*dt,v.position.y=ze(v.position.x,v.position.z);let yt=Math.atan2(q,E)+(k?Math.PI:0),te=v.rotation.y;for(;yt-te>Math.PI;)yt-=Math.PI*2;for(;yt-te<-Math.PI;)yt+=Math.PI*2;v.rotation.y=te+(yt-te)*Math.min(1,x*5)}let ni=0;function Ke(){let x=new Date,v=n!=null?n:x.getHours()+x.getMinutes()/60,A=tf(v);ni=A.night,r.background=A.sky,r.fog.color.copy(A.sky),m.uniforms.bottom.value.copy(A.sky).lerp(new Qt(16777215),.18*(1-A.night)).lerp(new Qt(10324950),.4*A.night),m.uniforms.top.value.copy(A.sky).lerp(new Qt(A.night>.5?2501490:7320547),.5),p.intensity=A.amb,p.color.set(A.night>.5?13158143:16777215),p.groundColor.set(A.night>.5?8160432:12048288),g.color.copy(A.sun),g.intensity=A.power;let O=(v-6)/12*Math.PI,q=v>=5.5&&v<=18.6?O:((v+12)%24-6)/12*Math.PI,E=Math.cos(q)*70,G=Math.max(Math.sin(q),.25)*70;g.position.set(E,G,40),g.target.position.set(0,0,0),b.position.set(Math.cos(O)*200,Math.sin(O)*160,-120),b.visible=Math.sin(O)>-.05;let dt=((v+12)%24-6)/12*Math.PI;y.position.set(Math.cos(dt)*200,Math.sin(dt)*160,-120),y.visible=A.night>.3&&Math.sin(dt)>0,P.material.opacity=A.night,B.forEach(yt=>{yt.userData.base=A.night}),L.mat.color.set(A.night>.5?10131656:16777215),C.forEach(yt=>{yt.userData.base=.55+A.night*.45}),Ts.material.opacity=A.night*.95,bh.forEach(yt=>{yt.emissiveIntensity=A.night*.95}),_.forEach(yt=>{yt.intensity=A.night*18}),I.forEach(yt=>{yt.userData.mat.color.set(A.night>.5?8029096:16777215)}),wn.forEach(yt=>{yt.g.visible=A.night<.5})}let Pn=1,In=1;function es(){Pn=i.clientWidth||window.innerWidth,In=i.clientHeight||window.innerHeight,s.setSize(Pn,In,!1),o.aspect=Pn/In,o.updateProjectionMatrix()}let mi=new Qe;function ef(x,v){mi.fov=o.fov,mi.aspect=o.aspect,mi.near=.5,mi.far=1e3,mi.updateProjectionMatrix();let A=[];for(let E=0;E<48;E++){let G=E/48*Math.PI*2,dt=ui(G);A.push(new D(Math.cos(G)*dt,0,Math.sin(G)*dt))}A.push(new D(bn[0],9+xr.h,bn[1])),vo.forEach(([E,G,dt,yt])=>A.push(new D(E,yt,G))),Xe.forEach(([E,G])=>A.push(new D(E,6.5,G)));let O=E=>{mi.position.set(0,Math.cos(x)*E,Math.sin(x)*E).add(v),mi.lookAt(v),mi.updateMatrixWorld();let G=new D;return A.every(dt=>(G.copy(dt).project(mi),Math.abs(G.x)<.97&&G.y>-.97&&G.y<.86))},k=10,q=600;for(let E=0;E<30;E++){let G=(k+q)/2;O(G)?q=G:k=G}return q}function Ja(){es();let x=e==="port"?.6:.88,v=new D(0,0,1.5),A=ef(x,v);return{p:new D(0,Math.cos(x)*A,Math.sin(x)*A).add(v),t:v}}function Dh(){let x=Ja();a.target.copy(x.t),o.position.copy(x.p),a.update()}let nf=1800,sf=1900,Ne=null,Er=!1,br=null,$a=x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2;function Lh(x){let v=x.userData.face||0,A=Math.sin(v),O=Math.cos(v),k=x.userData.doorZ-1.3,q=x.position.y,E=(G,dt)=>new D(x.position.x+A*(k+G),q+dt,x.position.z+O*(k+G));return{near:E(3.2,1.75),nearT:E(-1,1.45),inside:E(.35,1.6),insideT:E(-2,1.4)}}function Uh(x,v,A,O){if(!A)return x.clone().lerp(v,O);let k=x.clone().lerp(v,O),q=v.clone().lerp(A,O);return k.lerp(q,O)}function rf(x,v,A){let O=V.find(q=>q.userData.id===x);if(!O){v&&v();return}let k=Lh(O);br={p:o.position.clone(),t:a.target.clone()},Ne={mode:"in",start:performance.now(),dur:nf,h:O,done:v,at:A&&A.at,atFired:!1,p:[br.p,k.near,k.inside],t:[br.t,k.nearT,k.insideT]},a.enabled=!1,Er=!0}function of(x,v){let A=V.find(q=>q.userData.id===x);if(!A){Nh(),v&&v();return}let O=Lh(A),k=br||Ja();A.userData.hinge&&(A.userData.hinge.rotation.y=-1.7),o.position.copy(O.inside),a.target.copy(O.insideT),o.lookAt(a.target),Ne={mode:"out",start:performance.now(),dur:sf,h:A,done:v,p:[O.inside,O.near,k.p],t:[O.insideT,O.nearT,k.t]},a.enabled=!1,Er=!0}function af(){if(!Ne)return;let x=Math.min(1,(performance.now()-Ne.start)/Ne.dur),v=$a(x);o.position.copy(Uh(Ne.p[0],Ne.p[1],Ne.p[2],v)),a.target.copy(Uh(Ne.t[0],Ne.t[1],Ne.t[2],v)),o.lookAt(a.target);let A=Ne.h.userData.hinge;if(A&&(Ne.mode==="in"?A.rotation.y=-1.7*$a(Math.min(1,Math.max(0,(x-.25)/.45))):A.rotation.y=-1.7*(1-$a(Math.min(1,Math.max(0,(x-.2)/.5))))),Ne.at&&!Ne.atFired&&x>=Ne.at.k&&(Ne.atFired=!0,Ne.at.fn()),x>=1){let O=Ne.done,k=Ne.mode;Ne=null,k==="out"&&(Er=!1,a.enabled=!0,a.update()),O&&O()}}function Nh(){if(!Er||Ne&&Ne.mode==="out")return;Er=!1,Ne=null,a.enabled=!0,V.forEach(v=>{v.userData.hinge&&(v.userData.hinge.rotation.y=0)});let x=br||Ja();o.position.copy(x.p),a.target.copy(x.t),a.update()}let Sr=new mo,Oh=new pt,Ps=null;s.domElement.addEventListener("pointerdown",x=>{Ps={x:x.clientX,y:x.clientY}}),s.domElement.addEventListener("pointerup",x=>{if(!Ps||Math.hypot(x.clientX-Ps.x,x.clientY-Ps.y)>6){Ps=null;return}Ps=null;let v=s.domElement.getBoundingClientRect();if(Oh.set((x.clientX-v.left)/v.width*2-1,-((x.clientY-v.top)/v.height)*2+1),Sr.setFromCamera(Oh,o),rt.her&&rt.her.g.visible&&rt.him.g.visible&&Sr.intersectObjects([rt.her.g,rt.him.g],!0)[0]){rt.kiss>0||(rt.kiss=2.4,rt.her.sitting||(rt.her.path=[],rt.her.wait=Math.max(rt.her.wait,2.8)));return}let A=Sr.intersectObjects([ae.g,ie.g],!0)[0];if(A){let E=ae.g.getObjectById(A.object.id)?ae:ie;E.sleep>0||(E.sleep=3,E.sleepIn=0,E.path=[]);return}let O=Sr.intersectObject(Ft)[0];if(O){ce(O.point.x-W.position.x,O.point.z-W.position.z);return}let k=Sr.intersectObjects(V,!0)[0];if(!k)return;let q=k.object;for(;q&&!q.userData.id;)q=q.parent;q&&t.onPick(q.userData.id)});let wr=new D;function cf(x){let v=V.find(A=>A.userData.id===x);return v?(wr.set(v.position.x,v.position.y+v.userData.top,v.position.z),wr.project(o),{x:(wr.x+1)/2*Pn,y:(1-wr.y)/2*In,visible:wr.z<1}):null}let Ka=new po,Tr=!1,Is=!0,Fh=0,zh=[];function Bh(){if(!Tr)return;if(!Is||document.hidden){Tr=!1;return}requestAnimationFrame(Bh);let x=Math.min(.12,Ka.getDelta()),v=Ka.elapsedTime;v-Fh>20&&(Ke(),Fh=v),xn(x,v),Ne?af():a.update(),s.render(r,o),zh.forEach(A=>A())}function ja(){Tr||(Tr=!0,Ka.getDelta(),requestAnimationFrame(Bh))}let Hh=()=>{!document.hidden&&Is&&(Ke(),ja())},kh=()=>{Is&&es()};return document.addEventListener("visibilitychange",Hh),window.addEventListener("resize",kh),Ke(),Dh(),ja(),/[?&]debug3d/.test(location.search)&&(window.__v3d={drive:x=>Ce(x),get car(){return it.car},renderer:s,people:Tt,couple:rt,get swing(){return se},graph:ot,cat:ae,dog:ie,routine:Qi,realHour:fi,camera:o,controls:a,water:Ft,food:Pt,get urgent(){return mn}}),{setUrgent(x){let v=mn;mn=x||0,!!v!=!!mn&&Tt.forEach(A=>{!A.love&&!A.helper&&(A.path=[],A.wait=Vt(0,1.5))})},setBusy(x){let v={};(t.houses||[]).forEach((A,O)=>{x&&x[A.id]>0&&(v[O]=x[A.id])}),jt=v,Fn()},anchor:cf,onFrame(x){zh.push(x)},night(){return ni},setTimeMode(x){n=x==="day"?11:x==="night"?22:null,Ke()},show(x){Is=!!x,Is&&(Nh(),es(),Ke(),ja())},enterHouse:rf,exitHouse:of,drive:Ce,resize:es,recenter:Dh,layout:e,destroy(){Tr=!1,Is=!1,document.removeEventListener("visibilitychange",Hh),window.removeEventListener("resize",kh),a.dispose(),r.traverse(x=>{x.geometry&&x.geometry.dispose()}),s.dispose(),s.domElement.remove()}}}var fn=9,Wn=7,dn=4.4,Ya=7;function Va(i,t){return new Qt(i).lerp(new Qt(16777215),t).getHex()}function ti(i,t,e,n,s){let r=new Yt;return r.position.set(t,0,e),r.rotation.y=n||0,i.add(r),r.add(N(2.2,.08,1,s||14267535,0,.78,0)),[[-1,-.42],[1,-.42],[-1,.42],[1,.42]].forEach(([o,a])=>r.add(N(.08,.78,.08,11569768,o,.39,a))),r}function Un(i,t,e,n){let s=new Yt;return s.position.set(t,0,e),s.rotation.y=n||0,i.add(s),s.add(N(.55,.08,.55,16165309,0,.5,0)),s.add(N(.55,.6,.08,16165309,0,.82,-.26)),[[-.22,-.22],[.22,-.22],[-.22,.22],[.22,.22]].forEach(([r,o])=>s.add(N(.06,.5,.06,9206379,r,.25,o))),s}function bs(i,t,e){i.add(N(.7,.04,.48,14211296,t,.84,e));let n=N(.7,.46,.04,14211296,t,1.07,e-.24);n.rotation.x=-.25,i.add(n);let s=N(.62,.38,.02,0,t,1.07,e-.215,new ke({color:12576498}));s.rotation.x=-.25,i.add(s)}function ei(i,t,e,n,s){let r=new Yt;r.position.set(t,0,e),r.rotation.y=n||0,i.add(r),r.add(N(1.8,2.4,.4,12883572,0,1.2,0));for(let o=0;o<4;o++){r.add(N(1.7,.06,.36,14862765,0,.3+o*.55,.03));for(let a=0;a<(s||6);a++){let c=he.flower[(a+o)%he.flower.length],l=.3+(a*7+o*3)%4*.04;r.add(N(.16,l,.28,c===16777215?10934504:c,-.7+a*.24,.33+o*.55+l/2,.05))}}return r}function An(i,t,e){i.add(N(.45,.45,.45,16368540,t,.22,e)),[[0,.75,0,.42],[.18,1.05,.1,.3],[-.15,1,-.1,.32]].forEach(([n,s,r,o],a)=>{let c=new st(new li(o,2),vt(he.leaf[a],{}));c.position.set(t+n,s,e+r),c.castShadow=!0,i.add(c)})}function Li(i,t,e,n,s,r,o,a,c){let l=new Yt;return l.position.set(t,e,n),l.rotation.y=s,i.add(l),l.add(N(r+.12,o+.12,.05,12883572,0,0,0)),l.add(N(r,o,.06,a,0,0,.01)),(c||[]).forEach(([h,u,d,p])=>l.add(N(p||.32,p||.32,.03,d,h,u,.06))),l}function yo(i,t,e,n,s){let r=[[-.45,.25],[-.15,.45],[.15,.35],[.45,.6]],o=Li(i,t,e,n,s,1.4,1.1,16775920);return r.forEach(([a,c],l)=>o.add(N(.2,c,.03,[16758465,10934504,14542964,14273008][l],a,-.4+c/2,.06))),o}function Vd(i,t,e,n,s,r){let o=r?2.2:1.1,a=r?1.6:.9,c=Li(i,t,e,n,s,o,a,16777215);c.add(N(o,a*.18,.04,16751536,0,a*.41,.05));for(let l=0;l<4;l++)for(let h=0;h<7;h++){let u=(l*7+h)%9===3;c.add(N(o/9,a/7,.02,u?16766687:15985894,-o/2+(h+1)*o/8,a*.2-l*a/5.5,.06))}return c}function Iy(i,t,e,n,s){let r=new Yt;r.position.set(t,e,n),r.rotation.y=s,i.add(r);let o=new st(new le(.35,.35,.06,20),vt(16775920));o.rotation.x=Math.PI/2,r.add(o);let a=new st(new Di(.36,.04,6,20),vt(16165309));r.add(a);let c=N(.04,.18,.02,4865855,0,.08,.05),l=N(.03,.27,.02,4865855,0,.12,.06);return r.add(c,l),r.userData.hands=[c,l],r}function Dy(i,t,e){let n=new st(new Me(.28,12,10),vt(16758465));n.scale.set(1.3,1,1),n.position.set(t,1.1,e),i.add(n),i.add(N(.12,.1,.1,16751536,t+.38,1.1,e)),[[-.15,-.12],[.15,-.12],[-.15,.12],[.15,.12]].forEach(([s,r])=>i.add(N(.07,.12,.07,16751536,t+s,.86,e+r))),i.add(N(.12,.02,.03,9202282,t,1.38,e));for(let s=0;s<3;s++)for(let r=0;r<2+s;r++){let o=new st(new le(.09,.09,.03,12),vt(16111752));o.position.set(t-.7+s*.22,.84+r*.035,e+.1),i.add(o)}}function Gd(i,t,e,n){let s=new Yt;s.position.set(t,0,e),s.rotation.y=n||0,i.add(s),s.add(N(1,1.1,.9,10135480,0,.55,0));let r=new st(new le(.14,.14,.05,14),vt(16111752));return r.rotation.x=Math.PI/2,r.position.set(.15,.6,.46),s.add(r),s.add(N(.06,.3,.05,16111752,-.3,.6,.46)),s}function Ly(i,t,e,n){let s=new Yt;return s.position.set(t,0,e),s.rotation.y=n||0,i.add(s),s.add(N(2,.08,.45,12883572,0,1.3,0)),s.add(N(2,.08,.45,12883572,0,.6,0)),[-1,1].forEach(r=>s.add(N(.08,1.4,.45,11569768,r*.96,.7,0))),[.6,1.3].forEach((r,o)=>[-.65,-.2,.25,.7].forEach((a,c)=>{let l=new st(new le(.15,.15,.4,12),new xe({color:15136507,transparent:!0,opacity:.7}));l.position.set(a,r+.24,0),s.add(l);let h=.08+(c+o*2)%4*.08,u=new st(new le(.12,.12,h,12),vt(16111752));u.position.set(a,r+.06+h/2,0),s.add(u)})),s}function Uy(i,t,e,n){let s=new Yt;return s.position.set(t,0,e),s.rotation.y=n||0,i.add(s),s.add(N(.9,1.5,.7,10934504,0,.75,0)),[.35,.8,1.25].forEach(r=>{s.add(N(.8,.38,.04,12576498,0,r,.36)),s.add(N(.25,.05,.05,16775920,0,r+.08,.39))}),s}function Ny(i,t,e){[0,2.1,4.2].forEach(r=>{let o=N(.04,1.4,.04,7035470,t+Math.cos(r)*.25,.65,e+Math.sin(r)*.25);o.rotation.set(Math.sin(r)*.3,0,-Math.cos(r)*.3),i.add(o)}),i.add(N(.4,.28,.25,4865855,t,1.45,e));let n=new st(new le(.09,.09,.15,12),vt(3025462));n.rotation.x=Math.PI/2,n.position.set(t,1.45,e+.18),i.add(n);let s=new st(new Di(.4,.05,6,24),new ke({color:16774351}));s.position.set(t-.9,1.7,e-.3),i.add(s),i.add(N(.04,1.7,.04,7035470,t-.9,.85,e-.3))}function Oy(i,t,e,n,s){let r=Li(i,t,e,n,s,1.2,.7,15785156);[-.4,-.13,.13,.4].forEach((o,a)=>{r.add(N(.05,.05,.08,9206379,o,.18,.08)),r.add(N(.1,.22,.03,[16111752,10934504,16758465,10738109][a],o,-.02,.08))})}var Eh={work:{first:"list",build(i,t){let e=ti(i,-1.6,-2.4);bs(e,.2,0),e.add(N(.3,.2,.22,16777215,-.75,.92,.1)),Un(i,-1.4,-1.55,Math.PI),t.seat={x:-1.4,z:-1.6,ry:Math.PI,y:.54},Li(i,-4.45,1.8,.4,Math.PI/2,2.6,1.4,16777215,[[-.9,.35,16773544],[-.4,.4,16758465],[.1,.3,10934504],[.6,.38,10738109],[-.8,-.2,16758465],[-.2,-.25,16773544],[.5,-.2,14273008]]),ei(i,4.25,-.6,-Math.PI/2),yo(i,4.44,2.2,1.6,-Math.PI/2),Ny(i,3.4,4.6),An(i,-3.9,-3)},corners:{list:[.8,2.9,5.8,-1.3,1,-2.2],board:[2.4,2.7,4.2,-4.3,1.6,.3],stats:[-2.4,2.7,4.2,4.3,1.5,.3],posts:[-.6,2.5,8.6,3.2,1.3,4.4]}},money:{first:"overview",build(i,t){let e=ti(i,0,-2.3,0,16368540);Dy(e,.4,0),e.add(N(.35,.05,.45,9417689,-.5,.84,.1)),Un(i,.2,-1.45,Math.PI),t.seat={x:.2,z:-1.5,ry:Math.PI,y:.54},Vd(i,-4.44,1.9,-.8,Math.PI/2,!0),yo(i,-4.44,1.9,2.1,Math.PI/2),Ly(i,4.2,-1,-Math.PI/2),Uy(i,3.6,-3,0),Gd(i,3.6,2,-Math.PI/2.5),An(i,-3.9,-3),t.windowX=-1.9},corners:{overview:[.6,2.9,5.8,0,1,-2.3],calendar:[2.6,2.7,3.6,-4.3,1.8,-.8],stats:[2.6,2.7,5.4,-4.3,1.8,1.8],budget:[-2.4,2.7,3.6,4.2,1.1,-1.2],history:[-1.6,2.7,3.8,3.4,1,-3],categories:[-1.6,2.5,6.2,3.6,.7,2]}},calendar:{first:"main",build(i,t){Vd(i,-.1,2.05,-3.44,0,!0),Iy(i,-2.6,2.5,-3.44,0),t.windowX=2.9;let e=ti(i,-1.2,-1.6);e.add(N(.5,.06,.36,16773544,.3,.84,0)),e.add(N(.04,.04,.3,15834032,.65,.88,0)),Un(i,-1,-.75,Math.PI),t.seat={x:-1,z:-.8,ry:Math.PI,y:.54},ei(i,4.25,.2,-Math.PI/2,5),An(i,3.8,2.6)},corners:{main:[-.2,2.9,5.8,-.4,1.5,-2.8]}},account:{first:"main",build(i,t){Gd(i,3.7,-2.6,-.3),Oy(i,-.5,2,-3.44,0),t.windowX=1.7;let e=ti(i,-1.8,-1.8,.2);bs(e,0,0),Un(i,-1.75,-.95,Math.PI+.2),t.seat={x:-1.72,z:-1,ry:Math.PI+.2,y:.54},ei(i,-4.25,.6,Math.PI/2,5),An(i,3.9,1.8)},corners:{main:[-.2,2.9,5.8,-.9,1.2,-2.4]}},love:{first:"main",build(i,t){let n=new Yt;n.position.set(-.4,0,-2.5),i.add(n),n.add(N(2.6,.45,.9,16165309,0,.32,0)),n.add(N(2.6,.75,.25,15834032,0,.8,-.35)),[-1,1].forEach(B=>n.add(N(.25,.65,.9,15834032,B*1.3,.45,0)));let s=ji(16744350);s.scale.setScalar(.4),s.position.set(1,.75,-.15),n.add(s),t.seats=[{x:-.85,z:-2.35,ry:0,y:.56},{x:.05,z:-2.35,ry:0,y:.56}],t.sofa=!0,t.couple=!0,[[-1.95,2.35,.55,3095915],[-1.65,2.35,-.55,15230251]].forEach(([B,H,Z,W])=>{let K=new Yt;K.position.set(B,H,-3.44+.06),K.rotation.z=Z,i.add(K),K.add(N(.06,.34,.05,16777215,0,-.5,0)),K.add(N(.025,.34,.025,10135480,0,-.17,0));let mt=new st(new Di(.17,.02,6,22),vt(W));mt.scale.y=1.3,mt.position.y=.2,K.add(mt);for(let j=-3;j<=3;j++)K.add(N(.004,.42,.004,16777215,j*.045,.2,0)),K.add(N(.32,.004,.004,16777215,0,.2+j*.055,0))});{let B=document.createElement("canvas");B.width=128,B.height=64;let H=B.getContext("2d");H.fillStyle="#ffffff",H.fillRect(0,0,128,64),H.fillStyle="#e8652b",H.fillRect(0,8,128,16),H.fillStyle="#26305a",H.beginPath(),H.moveTo(0,64),H.lineTo(0,24),H.lineTo(14,24),H.lineTo(30,64),H.fill(),H.fillStyle="#26305a",H.fillRect(0,6,128,2),H.fillRect(26,28,102,2),H.font="bold 13px sans-serif",H.fillText("YONEX",74,54),H.beginPath(),H.arc(60,49,3,0,7),H.arc(67,49,3,0,7),H.lineWidth=2,H.strokeStyle="#26305a",H.stroke();let Z=new En(B);Z.colorSpace=Be;let W=vt(16777215),K=new xe({map:Z}),mt=new st(new We(1.15,.58,.36),[W,W,vt(15230251),W,K,K]);mt.position.set(1.25,1.62,-3.44+.22),mt.castShadow=!0,i.add(mt),[-.28,.28].forEach(j=>{i.add(N(.06,.5,.03,16777215,1.25+j*.9,2.02,-3.44+.2))}),i.add(N(.5,.06,.06,2502746,1.25,2.28,-3.44+.2)),i.add(N(.06,.06,.16,9206379,1.25,2.32,-3.44+.1))}i.add(N(1.42,1.08,.06,12883572,-.4,2.55,-3.44+.02)),i.add(N(1.28,.94,.07,16775920,-.4,2.55,-3.44+.03));let r=new st(new Yi(1.1,.78),new ke({color:16766687}));r.position.set(-.4,2.55,-3.44+.075),r.userData.pick="frame",i.add(r),t.frames=[r];for(let B=0;B<14;B++){let H=new st(new Me(.05,6,5),new ke({color:[16773544,16758465][B%2]}));H.position.set(-4+B*.62,3.45-Math.sin(B*.9)*.08,-3.38),i.add(H)}let o=new Yt;o.position.set(1.65,0,-2.3),i.add(o);let a=new st(new le(.42,.42,.06,18),vt(14861214));a.position.y=.6,o.add(a),o.add(N(.07,.6,.07,11569768,0,.3,0));let c=new st(new le(.22,.25,.04,14),vt(11569768));c.position.y=.02,o.add(c);let l=new st(new Me(.13,16,12),vt(13231096));l.scale.y=1.3,l.position.y=.8,o.add(l),[[0,1.08,0,16758465],[.08,1.02,.05,16773544],[-.08,1.04,-.03,16165309]].forEach(([B,H,Z,W])=>{o.add(N(.015,.25,.015,8173679,B*.6,.95,Z*.6));let K=new st(new Me(.06,10,8),vt(W));K.position.set(B,H,Z),o.add(K)});let h=new Yt;h.userData.pick="up",i.add(h);for(let B=0;B<10;B++)h.add(N(1.1,(B+1)*.44,.5,B%2?15323054:14861214,-3.88,(B+1)*.22,2.2-B*.48)),h.add(N(1.12,.05,.52,16165309,-3.88,(B+1)*.44+.02,2.2-B*.48)),B%2===0&&h.add(N(.06,.8,.06,16777215,-3.3,(B+1)*.44+.4,2.2-B*.48));{let B=Math.hypot(4.8,4.4),H=N(.08,.08,B,16777215,-3.3,2.2+.8+.22,.04);H.rotation.x=Math.atan2(4.4,4.8),h.add(H)}let u=Rh("\u2B06 bedroom","#d0668c",.34);u.position.set(-3.3,2.75,.2),h.add(u);let d=new Yt;d.position.set(1.3,0,1.25),i.add(d),d.add(N(1.5,.06,.95,14861214,0,.76,0)),[[-.65,-.38],[.65,-.38],[-.65,.38],[.65,.38]].forEach(([B,H])=>d.add(N(.06,.76,.06,11569768,B,.38,H))),[-1,1].forEach(B=>{let H=(Z,W,K)=>{let mt=new st(new le(.15,.1,.1,12),vt(16777215));mt.position.set(Z,.84,W),d.add(mt);let j=new st(new le(.135,.135,.02,12),vt(K));j.position.set(Z,.88,W),d.add(j)};H(B*.4-.16,-.18,16183264),H(B*.4+.16,-.18,14257226),[[-.05,-.2],[.05,-.14],[0,-.24]].forEach(([Z,W])=>d.add(N(.07,.03,.05,9065011,B*.4+.16+Z,.9,W))),d.add(N(.32,.012,.012,12883572,B*.4,.8,.05)),d.add(N(.32,.012,.012,12883572,B*.4,.8,.08))});let p=new st(new le(.2,.2,.03,12),vt(16777215));p.position.set(0,.8,-.05),d.add(p);for(let B=0;B<7;B++)d.add(N(.07,.04,.05,[7321690,9423996][B%2],(B%3-1)*.08,.83,(Math.floor(B/3)-1)*.07-.05));Un(i,1.3-.4,1.25-.85,0),Un(i,1.3+.4,1.25-.85,0),t.dining=[{x:1.3-.4,z:1.25-.8,ry:0,y:.54},{x:1.3+.4,z:1.25-.8,ry:0,y:.54}],t.windowX=3.1,An(i,3.95,-2.9),t.dinner=d,t.defaultDishes=d.children.slice(5);let g=14,_=new Yt;_.position.x=g,i.add(_);let m=Wn+Ya,f=Ya/2;for(let B=0;B<12;B++){let H=N(fn/12,.1,m,B%2?15981768:15651517,-fn/2+(B+.5)*fn/12,-.05,f);H.castShadow=!1,_.add(H)}let b=N(fn,dn,.12,t.wall,0,dn/2,-Wn/2);b.castShadow=!1,_.add(b),[-1,1].forEach(B=>{let H=N(.12,dn,m,t.wall2,B*fn/2,dn/2,f);H.castShadow=!1,_.add(H)});let y=N(fn,.12,m,0,0,dn+.06,f,new xe({color:t.ceil,emissive:t.ceil,emissiveIntensity:.3}));y.castShadow=!1,_.add(y),_.add(N(1.9,1.5,.08,16777215,2.9,2.3,-Wn/2+.06)),_.add(N(1.7,1.3,.09,0,2.9,2.3,-Wn/2+.07,t.skyMat)),[-1,1].forEach(B=>_.add(N(.26,1.8,.05,16762063,2.9+B*1.08,2.25,-Wn/2+.2))),_.add(N(2.8,.4,3.4,15918810,0,.28,-1.85)),_.add(N(2.6,.22,3.2,16777215,0,.58,-1.85)),_.add(N(3,1.5,.22,16171471,0,1,-3.48)),_.add(N(2.7,.18,.1,16372702,0,1.6,-3.36)),[-.62,.62].forEach(B=>_.add(N(1,.2,.55,16775925,B,.8,-3))),_.add(N(2.72,.12,2.35,16368595,0,.98,-1.25)),_.add(N(2.74,.14,.32,16777215,0,.99,-2.3)),[-1.4,1.4].forEach(B=>_.add(N(.12,.5,2.3,16368595,B,.75,-1.25)));let M=ji(16748465);M.scale.setScalar(.32),M.position.set(0,1.25,-3.3),_.add(M),[-1.95,1.95].forEach(B=>{_.add(N(.75,.62,.6,14861214,B,.31,-3.05)),_.add(N(.79,.05,.64,15785156,B,.64,-3.05)),_.add(N(.5,.05,.02,12883572,B,.42,-2.74))});let U=new st(new Me(.12,14,10),vt(16171471));U.position.set(-1.95,.76,-3.05),_.add(U);let P=new st(new le(.16,.24,.26,18,1,!0),new xe({color:16773590,emissive:16765562,emissiveIntensity:0,side:cn}));P.position.set(-1.95,1.02,-3.05),_.add(P),t.bedLamp=P;let I=new Yt;I.position.set(1.95,.7,-3),I.rotation.y=-.3,I.userData.pick="album",_.add(I),I.add(N(.5,.08,.38,13231096,0,0,0)),I.add(N(.04,.085,.38,11127784,-.25,0,0));let L=ji(16027569);L.scale.setScalar(.15),L.rotation.x=-Math.PI/2,L.position.set(.02,.045,.06),I.add(L),t.album=I;let T=new Yt;T.userData.pick="down",_.add(T),T.add(N(1.3,.04,2.6,12098694,-3.75,.005,1.2)),[.1,.6,1.1,1.6,2.1].forEach((B,H)=>T.add(N(1.2,.03,.42,10257008,-3.75,.02,.05+B-H*.02)));for(let B=0;B<6;B++)T.add(N(.06,.85,.06,16777215,-3.05,.42,-.05+B*.5));T.add(N(.08,.08,2.6,16777215,-3.05,.86,1.2));let w=Rh("\u2B07 living room","#d0668c",.34);w.position.set(-3,1.35,.6),T.add(w);let z=new st(new le(1,1,.03,32),vt(14281207));z.scale.set(1.8,1,1.1),z.position.set(.6,.02,1),_.add(z),An(_,3.95,.4);for(let B=0;B<14;B++){let H=new st(new Me(.05,6,5),new ke({color:[16773544,16758465][B%2]}));H.position.set(-4+B*.62,3.45-Math.sin(B*.9)*.08,-3.38),_.add(H)}t.bedSpots=[{x:g-.45,z:-1.42},{x:g+.45,z:-1.42}]},corners:{main:[.2,2.8,6.6,0,1.3,-1.9],bed:[14.2,2.6,3.4,14,.9,-2.3],meal:[1,2.6,5.6,1.2,1,-.6],album:[15.75,1.75,-1.85,15.9,.55,-3.05]}},game:{first:"main",build(i,t){i.add(N(2.6,.6,.6,12883572,0,.3,-3.05)),i.add(N(2.2,1.3,.1,3025462,0,1.35,-3.15));let e=N(2.05,1.15,.02,0,0,1.35,-3.09,new ke({color:10934504}));i.add(e),[[-.6,1.55,16758465],[.1,1.2,16111752],[.6,1.6,10738109]].forEach(([s,r,o])=>i.add(N(.3,.3,.01,0,s,r,-3.075,new ke({color:o})))),i.add(N(.5,.12,.35,16777215,.8,.66,-2.95));let n=new st(new Me(.7,14,10),vt(16165309));n.scale.set(1.1,.6,1),n.position.set(.2,.4,-.4),n.castShadow=!0,i.add(n),t.seats=[{x:.2,z:-.45,ry:Math.PI,y:.78}],t.gamer=!0,yo(i,-4.44,2.2,-.8,Math.PI/2),Li(i,4.44,2.2,-.4,-Math.PI/2,1.2,1.5,14273008,[[0,.3,16758465,.5],[0,-.35,16111752,.4]]),ei(i,-4.25,1.8,Math.PI/2,5),An(i,3.9,-3),t.windowX=2.9},corners:{main:[.4,2.8,5.6,0,1.1,-2.6]}},language:{first:"main",build(i,t){let e=ti(i,-1.2,-2.3,0,16171471);e.add(N(.5,.05,.36,16777215,-.2,.83,0)),e.add(N(.5,.05,.36,16774888,.32,.83,0)),e.add(N(.02,.06,.36,12883572,.06,.84,0)),[10934504,16758465,16111752].forEach((s,r)=>e.add(N(.4,.07,.28,s,.85,.83+r*.075,-.05)));let n=new st(new Me(.18,20,14),vt(10473444));n.position.set(-.8,1.08,0),e.add(n),e.add(N(.05,.25,.05,12883572,-.8,.9,0)),Un(i,-1,-1.45,Math.PI),t.seat={x:-1,z:-1.5,ry:Math.PI,y:.54},Li(i,-4.45,1.9,.2,Math.PI/2,2.4,1.4,16777215,[[-.75,.35,16758465],[-.25,.35,16773544],[.25,.35,10934504],[.75,.35,10738109],[-.5,-.25,14273008],[0,-.25,16758465],[.5,-.25,16773544]]),ei(i,4.25,-.4,-Math.PI/2,5),yo(i,4.44,2.3,1.8,-Math.PI/2),An(i,3.9,-3),t.windowX=2.2},corners:{main:[-.3,2.9,5.8,-.9,1.1,-2.3]}},skills:{first:"main",build(i,t){let e=ti(i,-.6,-2.3,0,16111752);bs(e,-.3,0),e.add(N(.45,.04,.32,16777215,.45,.83,.05)),e.add(N(.02,.02,.3,15235487,.62,.86,.05));let n=N(.6,.3,.32,15035243,3.4,.15,-2.6);i.add(n),i.add(N(.3,.05,.05,3814720,3.4,.35,-2.6)),Un(i,-.4,-1.45,Math.PI),t.seat={x:-.4,z:-1.5,ry:Math.PI,y:.54};let s=new Yt;s.position.set(-3.3,0,-1.6),s.rotation.y=.5,i.add(s),[-.4,.4].forEach(r=>{let o=N(.07,1.9,.07,12883572,r,.95,0);o.rotation.z=-r*.15,s.add(o)}),s.add(N(1,.8,.05,16777215,0,1.35,.06)),s.add(N(.5,.3,.06,10934504,-.15,1.45,.08)),s.add(N(.25,.25,.06,16758465,.25,1.2,.08)),Li(i,4.44,2,-.5,-Math.PI/2,1.6,1.2,16777215,[[-.5,-.25,10738109,.3],[-.15,-.1,16111752,.3],[.2,.05,16758465,.3],[.55,.2,10934504,.3]]),ei(i,-4.25,1.4,Math.PI/2,5),An(i,3.9,2.4),t.windowX=2.4},corners:{main:[0,2.9,5.8,-.3,1.1,-2.2]}},notes:{first:"main",build(i,t){let e=ti(i,-.8,-2.3,0,16111752);bs(e,.4,0),[16758465,10934504,16773544].forEach((n,s)=>e.add(N(.36,.05,.48,n,-.5,.83+s*.055,.02+s*.03))),Un(i,-.6,-1.45,Math.PI),t.seat={x:-.6,z:-1.5,ry:Math.PI,y:.54},Li(i,-.6,2.2,-3.44,0,2.6,1.3,14267535,[[-1,.35,16773544],[-.55,.3,16758465],[-.1,.38,10934504],[.35,.32,10738109],[.85,.36,16773544],[-.8,-.25,14273008],[-.3,-.22,16773544],[.2,-.28,16758465],[.7,-.24,10934504]]),ei(i,4.25,-.4,-Math.PI/2,5),An(i,-3.9,-3),t.windowX=2.8},corners:{main:[-.2,2.9,5.8,-.6,1.3,-2.4]}},goals:{first:"main",build(i,t){Li(i,0,2.15,-3.44,0,3,1.6,16777215,[[-1.1,.35,10934504,.45],[-.45,.4,16758465,.4],[.55,.38,10738109,.45],[1.15,.3,16111752,.4],[-.9,-.35,14273008,.45],[.95,-.35,16758465,.4]]);let e=ji(16765803);e.scale.setScalar(.5),e.position.set(0,2.1,-3.3),i.add(e);let n=ti(i,-1.8,-1.9,.25,14273008);bs(n,0,0),Un(i,-1.7,-1.05,Math.PI+.25),t.seat={x:-1.68,z:-1.1,ry:Math.PI+.25,y:.54};let s=new st(new le(.22,.12,.36,18),vt(16107596));s.position.set(3.7,1.28,-2.7),i.add(s),i.add(N(.5,.9,.5,15785156,3.7,.45,-2.7)),i.add(N(.2,.12,.2,16107596,3.7,1,-2.7)),An(i,-3.9,-3),t.windowX=3.2},corners:{main:[.2,2.8,5.8,-.2,1.4,-2.4]}},health:{first:"main",build(i,t){let e=N(1,.04,2,10738109,-1.6,.03,-.6);e.castShadow=!1,i.add(e),[[-.7,-1.4],[-.45,-1.4]].forEach(([o,a])=>{i.add(N(.36,.05,.05,9080729,o,.12,a)),[-.16,.16].forEach(c=>{let l=new st(new le(.1,.1,.08,16),vt(15834032));l.rotation.z=Math.PI/2,l.position.set(o+c,.12,a),i.add(l)})}),i.add(N(.9,1.6,.8,16777215,3.6,.8,-2.9)),i.add(N(.05,.4,.05,12633806,3.2,1,-2.48)),i.add(N(.9,.04,.82,15328478,3.6,1.1,-2.9));let n=ti(i,1.2,-2.4,0,16766665),s=new st(new Me(.25,20,12,0,Math.PI*2,Math.PI/2,Math.PI/2),vt(16777215));s.position.set(0,1.04,0),n.add(s),[[16744319,-.08,0],[16765803,.08,.04],[10147472,0,-.08]].forEach(([o,a,c])=>{let l=new st(new Me(.09,14,10),vt(o));l.position.set(a,1.04,c),n.add(l)});let r=new st(new le(.07,.07,.3,14),vt(10473444));r.position.set(.5,.98,.1),n.add(r),Un(i,1.4,-1.55,Math.PI),t.seat={x:1.4,z:-1.6,ry:Math.PI,y:.54},yo(i,-4.44,2.2,-.6,Math.PI/2),An(i,-3.9,-3),t.windowX=-.6},corners:{main:[.4,2.8,5.8,.2,1,-2]}},law:{first:"main",build(i,t){ei(i,-4.25,-.8,Math.PI/2,5),ei(i,-4.25,1.4,Math.PI/2,5),ei(i,4.25,-.4,-Math.PI/2,5);let e=ti(i,.2,-2.3,0,12883572);bs(e,-.4,0);let n=new Yt;n.position.set(.55,.83,0),e.add(n),n.add(N(.04,.5,.04,14267466,0,.25,0)),n.add(N(.5,.03,.03,14267466,0,.48,0)),[-.24,.24].forEach(s=>{let r=new st(new le(.09,.06,.03,16),vt(14267466));r.position.set(s,.3,0),n.add(r),n.add(N(.01,.18,.01,14267466,s,.39,0))}),Un(i,.4,-1.45,Math.PI),t.seat={x:.4,z:-1.5,ry:Math.PI,y:.54},An(i,3.9,2.4),t.windowX=2.4},corners:{main:[.2,2.9,5.8,.1,1.2,-2.3]}},other:{first:"main",build(i,t){let e=ti(i,-1,-2.3);bs(e,0,0),Un(i,-.8,-1.45,Math.PI),t.seat={x:-.8,z:-1.5,ry:Math.PI,y:.54},ei(i,4.25,-.6,-Math.PI/2),An(i,-3.9,-3)},corners:{main:[0,2.9,5.8,0,1.1,-2]}}};function Fy(i,t){t=t||{};let e=Eh[t.house]||(t.kind==="game"?Eh.game:Eh.other),n=new Kr({antialias:!0});n.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),n.shadowMap.enabled=!0,n.shadowMap.type=Ia,i.appendChild(n.domElement);let s=new jr,r=new Qe(48,1,.1,100),o=Va(t.roof||16165309,.72),a=Va(t.roof||16165309,.55);s.background=new Qt(Va(t.roof||16165309,.82));let c=new Yt;s.add(c);let l=Wn+Ya,h=Ya/2;for(let Q=0;Q<12;Q++){let xt=N(fn/12,.1,l,Q%2?15323054:14861214,-fn/2+(Q+.5)*fn/12,-.05,h);xt.castShadow=!1,c.add(xt)}let u=N(fn,dn,.12,o,0,dn/2,-Wn/2);u.castShadow=!1,c.add(u),[-1,1].forEach(Q=>{let xt=N(.12,dn,l,a,Q*fn/2,dn/2,h);xt.castShadow=!1,xt.receiveShadow=!0,c.add(xt)});let d=Va(t.roof||16165309,.9),p=N(fn,.12,l,0,0,dn+.06,h,new xe({color:d,emissive:d,emissiveIntensity:.3}));p.castShadow=!1,c.add(p);let g=Q=>{Q.castShadow=!1,c.add(Q)};g(N(fn,.16,.12,16777215,0,dn-.08,-Wn/2+.1)),[-1,1].forEach(Q=>g(N(.12,.16,l,16777215,Q*(fn/2-.1),dn-.08,h))),g(N(fn,.14,.04,16777215,0,.07,-Wn/2+.08)),[-1,1].forEach(Q=>g(N(.04,.14,l,16777215,Q*(fn/2-.08),.07,h)));let _=new ke({color:12575733}),m=new st(new le(1,1,.03,32),vt(16176348));m.scale.set(2,1,1.3),m.position.set(.3,.02,.6),m.receiveShadow=!0,c.add(m);let f=N(.03,.55,.03,9206379,.3,dn-.27,.3);f.castShadow=!1,c.add(f);let b=new st(new Ji(.45,.4,12,1,!0),new xe({color:16773544,emissive:16765562,emissiveIntensity:0,side:cn}));b.position.set(.3,dn-.72,.3),b.castShadow=!1,c.add(b);let y={wall:o,wall2:a,ceil:d,skyMat:_};e.build(c,y);{let Q=y.windowX!=null?y.windowX:2.2,xt=2.1,ht=-Wn/2;c.add(N(1.9,1.5,.08,16777215,Q,xt,ht+.06)),c.add(N(1.7,1.3,.09,0,Q,xt,ht+.07,_)),c.add(N(.05,1.3,.1,16777215,Q,xt,ht+.1)),c.add(N(1.7,.05,.1,16777215,Q,xt,ht+.1));let C=N(2.5,.05,.05,12883572,Q,xt+.9,ht+.2);C.castShadow=!1,c.add(C),[-1,1].forEach(S=>{let V=N(.24,1.75,.05,16762063,Q+S*1.08,xt+0,ht+.2);V.castShadow=!1,c.add(V);let $=N(.28,.06,.07,16165309,Q+S*1.08,xt-.25,ht+.22);$.castShadow=!1,c.add($)})}let M=[];c.traverse(Q=>{Q.userData.hands&&(M=Q.userData.hands)});let U=y.seats||(y.seat?[y.seat]:[]),P=t.looks||(t.look?[t.look]:[]),I=U.slice(0,P.length).map((Q,xt)=>{let ht=Kd(P[xt]);return c.add(ht.g),ht.g.position.set(Q.x,Q.y-Ah,Q.z),ht.g.rotation.y=Q.ry,ht.parts.legL.rotation.x=ht.parts.legR.rotation.x=-1.45,ht}),L=y.sofa||y.gamer?null:I[0]||null,T="",w=[];y.couple&&I.forEach((Q,xt)=>{Q.g.userData.pick="couple";let ht=Rh(xt===0?"namu":"hunf",xt===0?"#e8799f":"#5f8fc4",.3);c.add(ht),w.push(ht)});let z=(()=>{let Q=ji(16744350);return Q.scale.setScalar(.16),Q.visible=!1,c.add(Q),Q})(),B=-1,H="",Z=!1,W=!1,K=()=>H==="bed"?"bed":T==="lunch"||T==="dinner"?"meal":e.corners[t.corner]?t.corner:e.first;function mt(Q,xt){H=Q,Kt(K(),xt)}let j=jd("z Z z","#7a6a9a",.9,.45);if(c.add(j),t.onPick){let Q=new mo,xt=new pt,ht=null,C=0,S=!1,V=0,$=n.domElement,it=(ot,Et)=>{let Tt=$.getBoundingClientRect();xt.set((ot-Tt.left)/Tt.width*2-1,-((Et-Tt.top)/Tt.height)*2+1),Q.setFromCamera(xt,r);let rt=Q.intersectObjects(c.children,!0).find(jt=>{if(jt.object.isSprite)return!1;let $t=jt.object;for(;$t&&!$t.userData.pick;)$t=$t.parent;return!!$t});if(!rt)return"";let Dt=rt.object;for(;Dt&&!Dt.userData.pick;)Dt=Dt.parent;return Dt.userData.pick},tt=()=>{let ot=new D;w[0].getWorldPosition(ot);let Et=new D;w[1].getWorldPosition(Et),ot.add(Et).multiplyScalar(.5).project(r);let Tt=$.getBoundingClientRect();t.onPick("couple-menu",{x:Tt.left+(ot.x+1)/2*Tt.width,y:Tt.top+(1-ot.y)/2*Tt.height})},At=ot=>{if(ot==="couple"){B<0&&(B=0);return}if(ot==="up"||ot==="down"){Z=!0,mt(ot==="up"?"bed":"main");return}if(ot==="album"){W=!0,Kt("album"),setTimeout(()=>t.onPick("album"),750);return}t.onPick(ot)};$.addEventListener("contextmenu",ot=>ot.preventDefault()),$.addEventListener("pointerdown",ot=>{ht={x:ot.clientX,y:ot.clientY,type:ot.pointerType},S=!1,clearTimeout(C),ot.pointerType!=="mouse"&&y.couple&&it(ot.clientX,ot.clientY)==="couple"&&(C=setTimeout(()=>{S=!0,tt()},520))}),$.addEventListener("pointermove",ot=>{ht&&Math.hypot(ot.clientX-ht.x,ot.clientY-ht.y)>8&&clearTimeout(C)}),$.addEventListener("pointerup",ot=>{if(clearTimeout(C),!ht||S||Math.hypot(ot.clientX-ht.x,ot.clientY-ht.y)>8){ht=null;return}let Et=ht.type;ht=null;let Tt=it(ot.clientX,ot.clientY);if(Tt){if(Tt==="couple"&&Et==="mouse"){clearTimeout(V),V=setTimeout(()=>At("couple"),260);return}At(Tt)}}),$.addEventListener("dblclick",ot=>{!y.couple||it(ot.clientX,ot.clientY)!=="couple"||(clearTimeout(V),tt())})}let at=y.gamer?I[0]:null,Rt=new ho(16777215,14861214,1.4);s.add(Rt);let It=new fo(16774374,1.6);It.position.set(2.5,dn-.3,8),It.target.position.set(0,0,-2),s.add(It.target),It.castShadow=!0,It.shadow.mapSize.set(1024,1024),Object.assign(It.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:.5,far:25}),It.shadow.bias=-.001,s.add(It);let Ut=new uo(16767392,0,12,1.3);Ut.position.set(.3,dn-1.1,.3),s.add(Ut);function pe(){let Q=new Date,xt=t.timeMode==="day"?11:t.timeMode==="night"?22:Q.getHours()+Q.getMinutes()/60,ht=tf(xt);_.color.copy(ht.sky),Rt.intensity=1.5-ht.night*.7,It.intensity=1.6*(1-ht.night)+.2,Ut.intensity=ht.night*8,b.material.emissiveIntensity=ht.night,M.length&&(M[0].rotation.z=-(Q.getHours()%12)/12*Math.PI*2,M[1].rotation.z=-Q.getMinutes()/60*Math.PI*2)}let ut=new D,bt=new D,Ft=new D,wt=new D;function Zt(Q){return e.corners[Q]||e.corners[e.first]}function Kt(Q,xt){let ht=Zt(Q);Ft.set(ht[0],ht[1],ht[2]),wt.set(ht[3],ht[4],ht[5]),xt&&(ut.copy(Ft),bt.copy(wt))}Kt(t.corner,!0),t.walkIn&&(ut.set(0,1.7,Wn/2+3.2),bt.set(0,1.4,-Wn/2));function ee(){let Q=i.clientWidth||innerWidth,xt=i.clientHeight||innerHeight;n.setSize(Q,xt,!1),r.aspect=Q/xt,r.fov=Q/xt<.9?64:50,Q/xt<.9?r.setViewOffset(Q,xt,0,-xt*.2,Q,xt):r.clearViewOffset(),r.updateProjectionMatrix()}ee();let me=()=>ee();window.addEventListener("resize",me);let ft=new po,Mt=new D,F=!0,kt=0;function _t(){if(!F||(requestAnimationFrame(_t),document.hidden))return;let Q=Math.min(.1,ft.getDelta()),xt=ft.elapsedTime;if(ut.lerp(Ft,Math.min(1,Q*1.6)),bt.lerp(wt,Math.min(1,Q*1.6)),r.position.copy(ut),r.lookAt(bt),y.couple){let ht=new Date,C=ht.getHours()+ht.getMinutes()/60,S=C>=22||C<6.5?"sleep":C>=11.5&&C<13?"lunch":C>=18.5&&C<19.75?"dinner":"sofa";if(S!==T){T=S,!Z&&!W&&mt(S==="sleep"?"bed":"main",!H&&!t.walkIn);let V=S==="lunch"||S==="dinner"?y.dining:y.seats;I.forEach(($,it)=>{if(S==="sleep"){let tt=y.bedSpots[it];$.g.position.set(tt.x,.9,tt.z),$.g.rotation.set(-Math.PI/2,0,0),$.parts.legL.rotation.x=$.parts.legR.rotation.x=0}else $.g.position.set(V[it].x,V[it].y-Ah,V[it].z),$.g.rotation.set(0,V[it].ry,0),$.parts.legL.rotation.x=$.parts.legR.rotation.x=-1.45;$.sleepMap||($.sleepMap=$d($.parts.look,!0)),$.awakeMap||($.awakeMap=$.parts.mat.map),$.parts.mat.map=S==="sleep"?$.sleepMap:$.awakeMap,$.parts.mat.needsUpdate=!0}),j.visible=S==="sleep"}if(I.forEach((V,$)=>{let it=$===0?-1:1;T==="lunch"||T==="dinner"?(V.parts.armL.rotation.x=-.9,V.parts.armR.rotation.x=-1.35+Math.sin(xt*2.6+$*1.7)*.45,V.parts.head.rotation.set(.12+Math.max(0,Math.sin(xt*2.6+$*1.7))*.12,0,0)):T==="sleep"?(V.parts.armL.rotation.x=V.parts.armR.rotation.x=0,V.parts.head.rotation.set(.6,-it*(.35+Math.sin(xt*.9)*.03),0)):(V.parts.armL.rotation.x=V.parts.armR.rotation.x=-.6,V.parts.head.rotation.set(0,-it*.25,-it*(.18+Math.sin(xt*.8)*.04)))}),j.visible&&(j.position.set(14,1.6+xt*.25%.4,-3),j.material.opacity=.9-xt*.25%.4*1.5),I.forEach((V,$)=>{V.parts.head.getWorldPosition(w[$].position),w[$].position.y+=T==="sleep"?.45:.62}),B>=0){B+=Q;let V=I[1],$=I[0],it=Math.sin(Math.min(1,B/1.6)*Math.PI);V.parts.head.rotation.y+=(T==="sleep"?-.5:-.9)*it,V.parts.head.rotation.z+=.25*it,$.parts.head.rotation.z-=.2*it,T!=="sleep"&&(V.g.rotation.z=.16*it);let tt=new D;$.parts.head.getWorldPosition(tt);let At=new D;V.parts.head.getWorldPosition(At),z.visible=B>.5,z.position.copy(tt).lerp(At,.5),z.position.y+=.35+(B-.5)*.35,z.scale.setScalar(.12+Math.min(1,(B-.5)*2)*.06),z.rotation.y=r.rotation.y,B>2.1&&(B=-1,z.visible=!1,V.g.rotation.z=0)}y.bedLamp&&(y.bedLamp.material.emissiveIntensity=T==="sleep"?.15:.6*Ut.intensity/8)}else y.sofa&&I.forEach((ht,C)=>{ht.parts.armL.rotation.x=ht.parts.armR.rotation.x=-.6,ht.parts.head.rotation.z=(C===0?-1:1)*(.18+Math.sin(xt*.8)*.04),ht.parts.head.rotation.y=(C===0?1:-1)*.25});at&&(at.parts.armL.rotation.x=at.parts.armR.rotation.x=-1.1+Math.sin(xt*14)*.05,at.parts.head.rotation.x=-.05,at.parts.head.rotation.y=Math.sin(xt*.5)*.08),L&&(L.parts.armL.rotation.x=-1.2+Math.sin(xt*9)*.12,L.parts.armR.rotation.x=-1.2+Math.sin(xt*9+1.8)*.12,L.parts.head.rotation.x=.15+Math.sin(xt*.6)*.05,L.parts.head.rotation.y=Math.sin(xt*.35)*.25),(xt-kt>20||kt===0)&&(pe(),kt=xt||.001),n.render(s,r),Mt.set(.3,.05,.6).project(r),document.documentElement.style.setProperty("--rug-x",((Mt.x+1)/2*100).toFixed(1)+"vw"),document.documentElement.style.setProperty("--rug-y",((1-Mt.y)/2*100).toFixed(1)+"vh")}pe(),requestAnimationFrame(_t),/[?&]debug3d/.test(location.search)&&(window.__room={camera:r,R:y,renderer:n,sitters:I});function zt(Q){if(!y.dinner)return;(y.foodMeshes||[]).forEach(C=>{y.dinner.remove(C)}),y.foodMeshes=[],Q=(Q||[]).filter(C=>C&&C.name).slice(0,4),y.defaultDishes.forEach(C=>{C.visible=!Q.length});let xt=[[0],[-.33,.33],[-.48,0,.48],[-.54,-.18,.18,.54]][Math.max(0,Q.length-1)]||[],ht=new co;ht.setCrossOrigin("anonymous"),Q.forEach((C,S)=>{let V=new Yt;V.position.set(xt[S],.8,-.12+S%2*.06),y.dinner.add(V),y.foodMeshes.push(V);let $=new st(new le(.2,.15,.05,24),vt(16777215));V.add($);let it=new st(new Di(.19,.015,8,24),vt([16171471,13231096,16773544,13495501][S]));it.rotation.x=Math.PI/2,it.position.y=.025,V.add(it);let tt=new xe({color:16777215}),At=new st(new xs(.16,28),tt);At.rotation.x=-Math.PI/2,At.position.y=.03,V.add(At);let ot=()=>{let Et=document.createElement("canvas");Et.width=Et.height=128;let Tt=Et.getContext("2d");Tt.fillStyle=["#ffe1e9","#e1f0fb","#fff6cf","#e3f5e1"][S],Tt.fillRect(0,0,128,128),Tt.font="64px sans-serif",Tt.textAlign="center",Tt.fillText("\u{1F372}",64,76),Tt.font="800 16px Nunito, sans-serif",Tt.fillStyle="#8a5a6a",Tt.fillText(C.name.slice(0,14),64,112),tt.map=new En(Et),tt.map.colorSpace=Be,tt.needsUpdate=!0};if(!C.img){ot();return}if(/^data:image\/svg/.test(C.img)){let Et=new Image;Et.onload=()=>{let Tt=document.createElement("canvas");Tt.width=Tt.height=256;let rt=Tt.getContext("2d");rt.fillStyle="#fffaf5",rt.fillRect(0,0,256,256),rt.drawImage(Et,0,0,256,256),tt.map=new En(Tt),tt.map.colorSpace=Be,tt.needsUpdate=!0},Et.onerror=ot,Et.src=C.img;return}ht.load(C.img,Et=>{Et.colorSpace=Be;let Tt=Et.image.width/Et.image.height;Tt>1?(Et.repeat.set(1/Tt,1),Et.offset.set((1-1/Tt)/2,0)):(Et.repeat.set(1,Tt),Et.offset.set(0,(1-Tt)/2)),tt.map=Et,tt.needsUpdate=!0},void 0,ot)})}return{house:t.house,setCorner(Q){if(y.couple){t.corner=Q,W||Kt(K(),!1);return}Kt(Q,!1)},back(){W=!1,Kt(K(),!1)},setFood:zt,get floor(){return H},setPhotos(Q){if(!y.frames)return;let xt=new co;y.frames.forEach((ht,C)=>{Q[C]&&xt.load(Q[C],S=>{S.colorSpace=Be;let V=S.image,$=ht.geometry.parameters.width,it=ht.geometry.parameters.height,tt=V.width/V.height,At=$/it;tt>At?(S.repeat.set(At/tt,1),S.offset.set((1-At/tt)/2,0)):(S.repeat.set(1,tt/At),S.offset.set(0,(1-tt/At)/2)),ht.material.map=S,ht.material.color.set(16777215),ht.material.needsUpdate=!0})})},setTimeMode(Q){t.timeMode=Q,pe()},destroy(){F=!1,window.removeEventListener("resize",me),s.traverse(Q=>{Q.geometry&&Q.geometry.dispose()}),n.dispose(),n.domElement.remove()}}}window.Village3D={create:Py,room:Fy,LOOKS:Wa,LOVE:Th,ROOF:he.roof};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
