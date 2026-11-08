(()=>{var Rh="170",ks={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},up=0,wu=1,fp=2;var kf=1,qa=2,Ui=3,ss=0,Rn=1,An=2,ns=0,gr=1,Tu=2,Au=3,Ru=4,dp=5,Cs=100,pp=101,mp=102,gp=103,xp=104,_p=200,yp=201,Mp=202,vp=203,il=204,sl=205,Ep=206,bp=207,Sp=208,wp=209,Tp=210,Ap=211,Rp=212,Cp=213,Pp=214,rl=0,ol=1,al=2,Mr=3,cl=4,ll=5,hl=6,ul=7,Ch=0,Ip=1,Lp=2,is=0,Dp=1,Up=2,Np=3,Op=4,Fp=5,zp=6,Bp=7;var Vf=300,vr=301,Er=302,fl=303,dl=304,Za=306,lo=1e3,Is=1001,pl=1002,sn=1003,Hp=1004;var Vo=1005;var _i=1006,bc=1007;var Ls=1008;var zi=1009,Gf=1010,Wf=1011,ho=1012,Ph=1013,Ds=1014,Ni=1015,Uo=1016,Ih=1017,Lh=1018,br=1020,Xf=35902,Yf=1021,qf=1022,ui=1023,Zf=1024,Kf=1025,xr=1026,Sr=1027,Jf=1028,Dh=1029,$f=1030,Uh=1031;var Nh=1033,_a=33776,ya=33777,Ma=33778,va=33779,ml=35840,gl=35841,xl=35842,_l=35843,yl=36196,Ml=37492,vl=37496,El=37808,bl=37809,Sl=37810,wl=37811,Tl=37812,Al=37813,Rl=37814,Cl=37815,Pl=37816,Il=37817,Ll=37818,Dl=37819,Ul=37820,Nl=37821,Ea=36492,Ol=36494,Fl=36495,jf=36283,zl=36284,Bl=36285,Hl=36286;var ba=2300,kl=2301,Sc=2302,Cu=2400,Pu=2401,Iu=2402;var kp=3200,Vp=3201;var Qf=0,Gp=1,ts="",De="srgb",Cr="srgb-linear",Ka="linear",Ne="srgb";var Js=7680;var Lu=519,Wp=512,Xp=513,Yp=514,td=515,qp=516,Zp=517,Kp=518,Jp=519,Vl=35044;var Du="300 es",Oi=2e3,Sa=2001,Bi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uu=1234567,io=Math.PI/180,uo=180/Math.PI;function yi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[e&63|128]+wn[e>>8&255]+"-"+wn[e>>16&255]+wn[e>>24&255]+wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]).toLowerCase()}function dn(n,t,e){return Math.max(t,Math.min(e,n))}function Oh(n,t){return(n%t+t)%t}function $p(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function jp(n,t,e){return n!==t?(e-n)/(t-n):0}function so(n,t,e){return(1-e)*n+e*t}function Qp(n,t,e,i){return so(n,t,1-Math.exp(-e*i))}function t0(n,t=1){return t-Math.abs(Oh(n,t*2)-t)}function e0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function n0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function i0(n,t){return n+Math.floor(Math.random()*(t-n+1))}function s0(n,t){return n+Math.random()*(t-n)}function r0(n){return n*(.5-Math.random())}function o0(n){n!==void 0&&(Uu=n);let t=Uu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function a0(n){return n*io}function c0(n){return n*uo}function l0(n){return(n&n-1)===0&&n!==0}function h0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function u0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function f0(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),h=o((t+i)/2),d=r((t-i)/2),u=o((t-i)/2),f=r((i-t)/2),x=o((i-t)/2);switch(s){case"XYX":n.set(a*h,c*d,c*u,a*l);break;case"YZY":n.set(c*u,a*h,c*d,a*l);break;case"ZXZ":n.set(c*d,c*u,a*h,a*l);break;case"XZX":n.set(a*h,c*x,c*f,a*l);break;case"YXY":n.set(c*f,a*h,c*x,a*l);break;case"ZYZ":n.set(c*x,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Le(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ed={DEG2RAD:io,RAD2DEG:uo,generateUUID:yi,clamp:dn,euclideanModulo:Oh,mapLinear:$p,inverseLerp:jp,lerp:so,damp:Qp,pingpong:t0,smoothstep:e0,smootherstep:n0,randInt:i0,randFloat:s0,randFloatSpread:r0,seededRandom:o0,degToRad:a0,radToDeg:c0,isPowerOfTwo:l0,ceilPowerOfTwo:h0,floorPowerOfTwo:u0,setQuaternionFromProperEuler:f0,normalize:Le,denormalize:hi},At=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(dn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},_e=class n{constructor(t,e,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],f=i[5],x=i[8],M=s[0],g=s[3],m=s[6],b=s[1],w=s[4],v=s[7],N=s[2],L=s[5],D=s[8];return r[0]=o*M+a*b+c*N,r[3]=o*g+a*w+c*L,r[6]=o*m+a*v+c*D,r[1]=l*M+h*b+d*N,r[4]=l*g+h*w+d*L,r[7]=l*m+h*v+d*D,r[2]=u*M+f*b+x*N,r[5]=u*g+f*w+x*L,r[8]=u*m+f*v+x*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,x=e*d+i*u+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/x;return t[0]=d*M,t[1]=(s*l-h*i)*M,t[2]=(a*i-s*o)*M,t[3]=u*M,t[4]=(h*e-s*c)*M,t[5]=(s*r-a*e)*M,t[6]=f*M,t[7]=(i*c-l*e)*M,t[8]=(o*e-i*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(wc.makeScale(t,e)),this}rotate(t){return this.premultiply(wc.makeRotation(-t)),this}translate(t,e){return this.premultiply(wc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},wc=new _e;function nd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function fo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function d0(){let n=fo("canvas");return n.style.display="block",n}var Nu={};function eo(n){n in Nu||(Nu[n]=!0,console.warn(n))}function p0(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function m0(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function g0(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var we={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ne&&(n.r=Fi(n.r),n.g=Fi(n.g),n.b=Fi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ne&&(n.r=_r(n.r),n.g=_r(n.g),n.b=_r(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ts?Ka:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Fi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _r(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ou=[.64,.33,.3,.6,.15,.06],Fu=[.2126,.7152,.0722],zu=[.3127,.329],Bu=new _e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hu=new _e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);we.define({[Cr]:{primaries:Ou,whitePoint:zu,transfer:Ka,toXYZ:Bu,fromXYZ:Hu,luminanceCoefficients:Fu,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:Ou,whitePoint:zu,transfer:Ne,toXYZ:Bu,fromXYZ:Hu,luminanceCoefficients:Fu,outputColorSpaceConfig:{drawingBufferColorSpace:De}}});var $s,Gl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$s===void 0&&($s=fo("canvas")),$s.width=t.width,$s.height=t.height;let i=$s.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=$s}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=fo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Fi(e[i]/255)*255):e[i]=Fi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},x0=0,wa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=yi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Tc(s[o].image)):r.push(Tc(s[o]))}else r=Tc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Tc(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Gl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var _0=0,Cn=class n extends Bi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Is,s=Is,r=_i,o=Ls,a=ui,c=zi,l=n.DEFAULT_ANISOTROPY,h=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=yi(),this.name="",this.source=new wa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case lo:t.x=t.x-Math.floor(t.x);break;case Is:t.x=t.x<0?0:1;break;case pl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case lo:t.y=t.y-Math.floor(t.y);break;case Is:t.y=t.y<0?0:1;break;case pl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Vf;Cn.DEFAULT_ANISOTROPY=1;var Oe=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],x=c[9],M=c[2],g=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(x+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(l+1)/2,v=(f+1)/2,N=(m+1)/2,L=(h+u)/4,D=(d+M)/4,z=(x+g)/4;return w>v&&w>N?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=L/i,r=D/i):v>N?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=L/s,r=z/s):N<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),i=D/r,s=z/r),this.set(i,s,r,e),this}let b=Math.sqrt((g-x)*(g-x)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(g-x)/b,this.y=(d-M)/b,this.z=(u-h)/b,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wl=class extends Bi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Cn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new wa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hi=class extends Wl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ta=class extends Cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xl=class extends Cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fi=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],x=r[o+2],M=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=x,t[e+3]=M;return}if(d!==M||c!==u||l!==f||h!==x){let g=1-a,m=c*u+l*f+h*x+d*M,b=m>=0?1:-1,w=1-m*m;if(w>Number.EPSILON){let N=Math.sqrt(w),L=Math.atan2(N,m*b);g=Math.sin(g*L)/N,a=Math.sin(a*L)/N}let v=a*b;if(c=c*g+u*v,l=l*g+f*v,h=h*g+x*v,d=d*g+M*v,g===1-a){let N=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=N,l*=N,h*=N,d*=N}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],x=r[o+3];return t[e]=a*x+h*d+c*f-l*u,t[e+1]=c*x+h*u+l*d-a*f,t[e+2]=l*x+h*f+a*u-c*d,t[e+3]=h*x-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),d=a(r/2),u=c(i/2),f=c(s/2),x=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*x,this._y=l*f*d-u*h*x,this._z=l*h*x+u*f*d,this._w=l*h*d-u*f*x;break;case"YXZ":this._x=u*h*d+l*f*x,this._y=l*f*d-u*h*x,this._z=l*h*x-u*f*d,this._w=l*h*d+u*f*x;break;case"ZXY":this._x=u*h*d-l*f*x,this._y=l*f*d+u*h*x,this._z=l*h*x+u*f*d,this._w=l*h*d-u*f*x;break;case"ZYX":this._x=u*h*d-l*f*x,this._y=l*f*d+u*h*x,this._z=l*h*x-u*f*d,this._w=l*h*d+u*f*x;break;case"YZX":this._x=u*h*d+l*f*x,this._y=l*f*d+u*h*x,this._z=l*h*x-u*f*d,this._w=l*h*d-u*f*x;break;case"XZY":this._x=u*h*d-l*f*x,this._y=l*f*d-u*h*x,this._z=l*h*x+u*f*d,this._w=l*h*d+u*f*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(dn(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ku.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ku.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),h=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+c*l+o*d-a*h,this.y=i+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ac.copy(this).projectOnVector(t),this.sub(Ac)}reflect(t){return this.sub(Ac.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(dn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ac=new O,ku=new fi,Us=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(oi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(oi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,oi):oi.fromBufferAttribute(r,o),oi.applyMatrix4(t.matrixWorld),this.expandByPoint(oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Go.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Go.copy(i.boundingBox)),Go.applyMatrix4(t.matrixWorld),this.union(Go)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,oi),oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qr),Wo.subVectors(this.max,qr),js.subVectors(t.a,qr),Qs.subVectors(t.b,qr),tr.subVectors(t.c,qr),Zi.subVectors(Qs,js),Ki.subVectors(tr,Qs),Es.subVectors(js,tr);let e=[0,-Zi.z,Zi.y,0,-Ki.z,Ki.y,0,-Es.z,Es.y,Zi.z,0,-Zi.x,Ki.z,0,-Ki.x,Es.z,0,-Es.x,-Zi.y,Zi.x,0,-Ki.y,Ki.x,0,-Es.y,Es.x,0];return!Rc(e,js,Qs,tr,Wo)||(e=[1,0,0,0,1,0,0,0,1],!Rc(e,js,Qs,tr,Wo))?!1:(Xo.crossVectors(Zi,Ki),e=[Xo.x,Xo.y,Xo.z],Rc(e,js,Qs,tr,Wo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ci=[new O,new O,new O,new O,new O,new O,new O,new O],oi=new O,Go=new Us,js=new O,Qs=new O,tr=new O,Zi=new O,Ki=new O,Es=new O,qr=new O,Wo=new O,Xo=new O,bs=new O;function Rc(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){bs.fromArray(n,r);let a=s.x*Math.abs(bs.x)+s.y*Math.abs(bs.y)+s.z*Math.abs(bs.z),c=t.dot(bs),l=e.dot(bs),h=i.dot(bs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var y0=new Us,Zr=new O,Cc=new O,wr=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):y0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zr.subVectors(t,this.center);let e=Zr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Zr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zr.copy(t.center).add(Cc)),this.expandByPoint(Zr.copy(t.center).sub(Cc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Pi=new O,Pc=new O,Yo=new O,Ji=new O,Ic=new O,qo=new O,Lc=new O,Ns=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pi.copy(this.origin).addScaledVector(this.direction,e),Pi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Pc.copy(t).add(e).multiplyScalar(.5),Yo.copy(e).sub(t).normalize(),Ji.copy(this.origin).sub(Pc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Yo),a=Ji.dot(this.direction),c=-Ji.dot(Yo),l=Ji.lengthSq(),h=Math.abs(1-o*o),d,u,f,x;if(h>0)if(d=o*c-a,u=o*a-c,x=r*h,d>=0)if(u>=-x)if(u<=x){let M=1/h;d*=M,u*=M,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-x?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=x?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Pc).addScaledVector(Yo,u),f}intersectSphere(t,e){Pi.subVectors(t.center,this.origin);let i=Pi.dot(this.direction),s=Pi.dot(Pi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Pi)!==null}intersectTriangle(t,e,i,s,r){Ic.subVectors(e,t),qo.subVectors(i,t),Lc.crossVectors(Ic,qo);let o=this.direction.dot(Lc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ji.subVectors(this.origin,t);let c=a*this.direction.dot(qo.crossVectors(Ji,qo));if(c<0)return null;let l=a*this.direction.dot(Ic.cross(Ji));if(l<0||c+l>o)return null;let h=-a*Ji.dot(Lc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ke=class n{constructor(t,e,i,s,r,o,a,c,l,h,d,u,f,x,M,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,h,d,u,f,x,M,g)}set(t,e,i,s,r,o,a,c,l,h,d,u,f,x,M,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=x,m[11]=M,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/er.setFromMatrixColumn(t,0).length(),r=1/er.setFromMatrixColumn(t,1).length(),o=1/er.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,x=a*h,M=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+x*l,e[5]=u-M*l,e[9]=-a*c,e[2]=M-u*l,e[6]=x+f*l,e[10]=o*c}else if(t.order==="YXZ"){let u=c*h,f=c*d,x=l*h,M=l*d;e[0]=u+M*a,e[4]=x*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-x,e[6]=M+u*a,e[10]=o*c}else if(t.order==="ZXY"){let u=c*h,f=c*d,x=l*h,M=l*d;e[0]=u-M*a,e[4]=-o*d,e[8]=x+f*a,e[1]=f+x*a,e[5]=o*h,e[9]=M-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let u=o*h,f=o*d,x=a*h,M=a*d;e[0]=c*h,e[4]=x*l-f,e[8]=u*l+M,e[1]=c*d,e[5]=M*l+u,e[9]=f*l-x,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let u=o*c,f=o*l,x=a*c,M=a*l;e[0]=c*h,e[4]=M-u*d,e[8]=x*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+x,e[10]=u-M*d}else if(t.order==="XZY"){let u=o*c,f=o*l,x=a*c,M=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+M,e[5]=o*h,e[9]=f*d-x,e[2]=x*d-f,e[6]=a*h,e[10]=M*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(M0,t,v0)}lookAt(t,e,i){let s=this.elements;return Yn.subVectors(t,e),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),$i.crossVectors(i,Yn),$i.lengthSq()===0&&(Math.abs(i.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),$i.crossVectors(i,Yn)),$i.normalize(),Zo.crossVectors(Yn,$i),s[0]=$i.x,s[4]=Zo.x,s[8]=Yn.x,s[1]=$i.y,s[5]=Zo.y,s[9]=Yn.y,s[2]=$i.z,s[6]=Zo.z,s[10]=Yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],f=i[13],x=i[2],M=i[6],g=i[10],m=i[14],b=i[3],w=i[7],v=i[11],N=i[15],L=s[0],D=s[4],z=s[8],A=s[12],S=s[1],B=s[5],q=s[9],Y=s[13],H=s[2],k=s[6],X=s[10],gt=s[14],$=s[3],ht=s[7],Rt=s[11],lt=s[15];return r[0]=o*L+a*S+c*H+l*$,r[4]=o*D+a*B+c*k+l*ht,r[8]=o*z+a*q+c*X+l*Rt,r[12]=o*A+a*Y+c*gt+l*lt,r[1]=h*L+d*S+u*H+f*$,r[5]=h*D+d*B+u*k+f*ht,r[9]=h*z+d*q+u*X+f*Rt,r[13]=h*A+d*Y+u*gt+f*lt,r[2]=x*L+M*S+g*H+m*$,r[6]=x*D+M*B+g*k+m*ht,r[10]=x*z+M*q+g*X+m*Rt,r[14]=x*A+M*Y+g*gt+m*lt,r[3]=b*L+w*S+v*H+N*$,r[7]=b*D+w*B+v*k+N*ht,r[11]=b*z+w*q+v*X+N*Rt,r[15]=b*A+w*Y+v*gt+N*lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],x=t[3],M=t[7],g=t[11],m=t[15];return x*(+r*c*d-s*l*d-r*a*u+i*l*u+s*a*f-i*c*f)+M*(+e*c*f-e*l*u+r*o*u-s*o*f+s*l*h-r*c*h)+g*(+e*l*d-e*a*f-r*o*d+i*o*f+r*a*h-i*l*h)+m*(-s*a*h-e*c*d+e*a*u+s*o*d-i*o*u+i*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],x=t[12],M=t[13],g=t[14],m=t[15],b=d*g*l-M*u*l+M*c*f-a*g*f-d*c*m+a*u*m,w=x*u*l-h*g*l-x*c*f+o*g*f+h*c*m-o*u*m,v=h*M*l-x*d*l+x*a*f-o*M*f-h*a*m+o*d*m,N=x*d*c-h*M*c-x*a*u+o*M*u+h*a*g-o*d*g,L=e*b+i*w+s*v+r*N;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/L;return t[0]=b*D,t[1]=(M*u*r-d*g*r-M*s*f+i*g*f+d*s*m-i*u*m)*D,t[2]=(a*g*r-M*c*r+M*s*l-i*g*l-a*s*m+i*c*m)*D,t[3]=(d*c*r-a*u*r-d*s*l+i*u*l+a*s*f-i*c*f)*D,t[4]=w*D,t[5]=(h*g*r-x*u*r+x*s*f-e*g*f-h*s*m+e*u*m)*D,t[6]=(x*c*r-o*g*r-x*s*l+e*g*l+o*s*m-e*c*m)*D,t[7]=(o*u*r-h*c*r+h*s*l-e*u*l-o*s*f+e*c*f)*D,t[8]=v*D,t[9]=(x*d*r-h*M*r-x*i*f+e*M*f+h*i*m-e*d*m)*D,t[10]=(o*M*r-x*a*r+x*i*l-e*M*l-o*i*m+e*a*m)*D,t[11]=(h*a*r-o*d*r-h*i*l+e*d*l+o*i*f-e*a*f)*D,t[12]=N*D,t[13]=(h*M*s-x*d*s+x*i*u-e*M*u-h*i*g+e*d*g)*D,t[14]=(x*a*s-o*M*s-x*i*c+e*M*c+o*i*g-e*a*g)*D,t[15]=(o*d*s-h*a*s+h*i*c-e*d*c-o*i*u+e*a*u)*D,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,x=r*d,M=o*h,g=o*d,m=a*d,b=c*l,w=c*h,v=c*d,N=i.x,L=i.y,D=i.z;return s[0]=(1-(M+m))*N,s[1]=(f+v)*N,s[2]=(x-w)*N,s[3]=0,s[4]=(f-v)*L,s[5]=(1-(u+m))*L,s[6]=(g+b)*L,s[7]=0,s[8]=(x+w)*D,s[9]=(g-b)*D,s[10]=(1-(u+M))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=er.set(s[0],s[1],s[2]).length(),o=er.set(s[4],s[5],s[6]).length(),a=er.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ai.copy(this);let l=1/r,h=1/o,d=1/a;return ai.elements[0]*=l,ai.elements[1]*=l,ai.elements[2]*=l,ai.elements[4]*=h,ai.elements[5]*=h,ai.elements[6]*=h,ai.elements[8]*=d,ai.elements[9]*=d,ai.elements[10]*=d,e.setFromRotationMatrix(ai),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Oi){let c=this.elements,l=2*r/(e-t),h=2*r/(i-s),d=(e+t)/(e-t),u=(i+s)/(i-s),f,x;if(a===Oi)f=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Sa)f=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Oi){let c=this.elements,l=1/(e-t),h=1/(i-s),d=1/(o-r),u=(e+t)*l,f=(i+s)*h,x,M;if(a===Oi)x=(o+r)*d,M=-2*d;else if(a===Sa)x=r*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=M,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},er=new O,ai=new ke,M0=new O(0,0,0),v0=new O(1,1,1),$i=new O,Zo=new O,Yn=new O,Vu=new ke,Gu=new fi,Mi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(dn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-dn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(dn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Vu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gu.setFromEuler(this),this.setFromQuaternion(Gu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mi.DEFAULT_ORDER="XYZ";var po=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},E0=0,Wu=new O,nr=new fi,Ii=new ke,Ko=new O,Kr=new O,b0=new O,S0=new fi,Xu=new O(1,0,0),Yu=new O(0,1,0),qu=new O(0,0,1),Zu={type:"added"},w0={type:"removed"},ir={type:"childadded",child:null},Dc={type:"childremoved",child:null},Ve=class n extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new O,e=new Mi,i=new fi,s=new O(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ke},normalMatrix:{value:new _e}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return nr.setFromAxisAngle(t,e),this.quaternion.multiply(nr),this}rotateOnWorldAxis(t,e){return nr.setFromAxisAngle(t,e),this.quaternion.premultiply(nr),this}rotateX(t){return this.rotateOnAxis(Xu,t)}rotateY(t){return this.rotateOnAxis(Yu,t)}rotateZ(t){return this.rotateOnAxis(qu,t)}translateOnAxis(t,e){return Wu.copy(t).applyQuaternion(this.quaternion),this.position.add(Wu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xu,t)}translateY(t){return this.translateOnAxis(Yu,t)}translateZ(t){return this.translateOnAxis(qu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ko.copy(t):Ko.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Kr,Ko,this.up):Ii.lookAt(Ko,Kr,this.up),this.quaternion.setFromRotationMatrix(Ii),s&&(Ii.extractRotation(s.matrixWorld),nr.setFromRotationMatrix(Ii),this.quaternion.premultiply(nr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zu),ir.child=t,this.dispatchEvent(ir),ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(w0),Dc.child=t,this.dispatchEvent(Dc),Dc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zu),ir.child=t,this.dispatchEvent(ir),ir.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,t,b0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,S0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),x=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),x.length>0&&(i.nodes=x)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Ve.DEFAULT_UP=new O(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ci=new O,Li=new O,Uc=new O,Di=new O,sr=new O,rr=new O,Ku=new O,Nc=new O,Oc=new O,Fc=new O,zc=new Oe,Bc=new Oe,Hc=new Oe,es=class n{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ci.subVectors(t,e),s.cross(ci);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ci.subVectors(s,e),Li.subVectors(i,e),Uc.subVectors(t,e);let o=ci.dot(ci),a=ci.dot(Li),c=ci.dot(Uc),l=Li.dot(Li),h=Li.dot(Uc),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-a*h)*u,x=(o*h-a*c)*u;return r.set(1-f-x,x,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Di)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Di.x),c.addScaledVector(o,Di.y),c.addScaledVector(a,Di.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return zc.setScalar(0),Bc.setScalar(0),Hc.setScalar(0),zc.fromBufferAttribute(t,e),Bc.fromBufferAttribute(t,i),Hc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(zc,r.x),o.addScaledVector(Bc,r.y),o.addScaledVector(Hc,r.z),o}static isFrontFacing(t,e,i,s){return ci.subVectors(i,e),Li.subVectors(t,e),ci.cross(Li).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ci.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ci.cross(Li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;sr.subVectors(s,i),rr.subVectors(r,i),Nc.subVectors(t,i);let c=sr.dot(Nc),l=rr.dot(Nc);if(c<=0&&l<=0)return e.copy(i);Oc.subVectors(t,s);let h=sr.dot(Oc),d=rr.dot(Oc);if(h>=0&&d<=h)return e.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(sr,o);Fc.subVectors(t,r);let f=sr.dot(Fc),x=rr.dot(Fc);if(x>=0&&f<=x)return e.copy(r);let M=f*l-c*x;if(M<=0&&l>=0&&x<=0)return a=l/(l-x),e.copy(i).addScaledVector(rr,a);let g=h*x-f*d;if(g<=0&&d-h>=0&&f-x>=0)return Ku.subVectors(r,s),a=(d-h)/(d-h+(f-x)),e.copy(s).addScaledVector(Ku,a);let m=1/(g+M+u);return o=M*m,a=u*m,e.copy(i).addScaledVector(sr,o).addScaledVector(rr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Jo={h:0,s:0,l:0};function kc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var ce=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=we.workingColorSpace){return this.r=t,this.g=e,this.b=i,we.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=we.workingColorSpace){if(t=Oh(t,1),e=dn(e,0,1),i=dn(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=kc(o,r,t+1/3),this.g=kc(o,r,t),this.b=kc(o,r,t-1/3)}return we.toWorkingColorSpace(this,s),this}setStyle(t,e=De){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){let i=id[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fi(t.r),this.g=Fi(t.g),this.b=Fi(t.b),this}copyLinearToSRGB(t){return this.r=_r(t.r),this.g=_r(t.g),this.b=_r(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return we.fromWorkingColorSpace(Tn.copy(this),t),Math.round(dn(Tn.r*255,0,255))*65536+Math.round(dn(Tn.g*255,0,255))*256+Math.round(dn(Tn.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=we.workingColorSpace){we.fromWorkingColorSpace(Tn.copy(this),e);let i=Tn.r,s=Tn.g,r=Tn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=we.workingColorSpace){return we.fromWorkingColorSpace(Tn.copy(this),e),t.r=Tn.r,t.g=Tn.g,t.b=Tn.b,t}getStyle(t=De){we.fromWorkingColorSpace(Tn.copy(this),t);let e=Tn.r,i=Tn.g,s=Tn.b;return t!==De?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ji),this.setHSL(ji.h+t,ji.s+e,ji.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ji),t.getHSL(Jo);let i=so(ji.h,Jo.h,e),s=so(ji.s,Jo.s,e),r=so(ji.l,Jo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new ce;ce.NAMES=id;var T0=0,ki=class extends Bi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=yi(),this.name="",this.blending=gr,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=il,this.blendDst=sl,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(i.blending=this.blending),this.side!==ss&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==il&&(i.blendSrc=this.blendSrc),this.blendDst!==sl&&(i.blendDst=this.blendDst),this.blendEquation!==Cs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Qe=class extends ki{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=Ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var on=new O,$o=new At,vn=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Vl,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)$o.fromBufferAttribute(this,e),$o.applyMatrix3(t),this.setXY(e,$o.x,$o.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyMatrix3(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=hi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Le(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vl&&(t.usage=this.usage),t}};var Aa=class extends vn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ra=class extends vn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ge=class extends vn{constructor(t,e,i){super(new Float32Array(t),e,i)}},A0=0,ti=new ke,Vc=new Ve,or=new O,qn=new Us,Jr=new Us,fn=new O,He=class n extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nd(t)?Ra:Aa)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new _e().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ti.makeRotationFromQuaternion(t),this.applyMatrix4(ti),this}rotateX(t){return ti.makeRotationX(t),this.applyMatrix4(ti),this}rotateY(t){return ti.makeRotationY(t),this.applyMatrix4(ti),this}rotateZ(t){return ti.makeRotationZ(t),this.applyMatrix4(ti),this}translate(t,e,i){return ti.makeTranslation(t,e,i),this.applyMatrix4(ti),this}scale(t,e,i){return ti.makeScale(t,e,i),this.applyMatrix4(ti),this}lookAt(t){return Vc.lookAt(t),Vc.updateMatrix(),this.applyMatrix4(Vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ge(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Us);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];qn.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let i=this.boundingSphere.center;if(qn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Jr.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(qn.min,Jr.min),qn.expandByPoint(fn),fn.addVectors(qn.max,Jr.max),qn.expandByPoint(fn)):(qn.expandByPoint(Jr.min),qn.expandByPoint(Jr.max))}qn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)fn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(fn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)fn.fromBufferAttribute(a,l),c&&(or.fromBufferAttribute(t,l),fn.add(or)),s=Math.max(s,i.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let z=0;z<i.count;z++)a[z]=new O,c[z]=new O;let l=new O,h=new O,d=new O,u=new At,f=new At,x=new At,M=new O,g=new O;function m(z,A,S){l.fromBufferAttribute(i,z),h.fromBufferAttribute(i,A),d.fromBufferAttribute(i,S),u.fromBufferAttribute(r,z),f.fromBufferAttribute(r,A),x.fromBufferAttribute(r,S),h.sub(l),d.sub(l),f.sub(u),x.sub(u);let B=1/(f.x*x.y-x.x*f.y);isFinite(B)&&(M.copy(h).multiplyScalar(x.y).addScaledVector(d,-f.y).multiplyScalar(B),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-x.x).multiplyScalar(B),a[z].add(M),a[A].add(M),a[S].add(M),c[z].add(g),c[A].add(g),c[S].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let z=0,A=b.length;z<A;++z){let S=b[z],B=S.start,q=S.count;for(let Y=B,H=B+q;Y<H;Y+=3)m(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}let w=new O,v=new O,N=new O,L=new O;function D(z){N.fromBufferAttribute(s,z),L.copy(N);let A=a[z];w.copy(A),w.sub(N.multiplyScalar(N.dot(A))).normalize(),v.crossVectors(L,A);let B=v.dot(c[z])<0?-1:1;o.setXYZW(z,w.x,w.y,w.z,B)}for(let z=0,A=b.length;z<A;++z){let S=b[z],B=S.start,q=S.count;for(let Y=B,H=B+q;Y<H;Y+=3)D(t.getX(Y+0)),D(t.getX(Y+1)),D(t.getX(Y+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new O,r=new O,o=new O,a=new O,c=new O,l=new O,h=new O,d=new O;if(t)for(let u=0,f=t.count;u<f;u+=3){let x=t.getX(u+0),M=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,x),c.fromBufferAttribute(i,M),l.fromBufferAttribute(i,g),a.add(h),c.add(h),l.add(h),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)fn.fromBufferAttribute(t,e),fn.normalize(),t.setXYZ(e,fn.x,fn.y,fn.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),f=0,x=0;for(let M=0,g=c.length;M<g;M++){a.isInterleavedBufferAttribute?f=c[M]*a.data.stride+a.offset:f=c[M]*h;for(let m=0;m<h;m++)u[x++]=l[f++]}return new vn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=t(u,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ju=new ke,Ss=new Ns,jo=new wr,$u=new O,Qo=new O,ta=new O,ea=new O,Gc=new O,na=new O,ju=new O,ia=new O,Dt=class extends Ve{constructor(t=new He,e=new Qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){na.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(Gc.fromBufferAttribute(d,t),o?na.addScaledVector(Gc,h):na.addScaledVector(Gc.sub(e),h))}e.add(na)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jo.copy(i.boundingSphere),jo.applyMatrix4(r),Ss.copy(t.ray).recast(t.near),!(jo.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(jo,$u)===null||Ss.origin.distanceToSquared($u)>(t.far-t.near)**2))&&(Ju.copy(r).invert(),Ss.copy(t.ray).applyMatrix4(Ju),!(i.boundingBox!==null&&Ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ss)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,M=u.length;x<M;x++){let g=u[x],m=o[g.materialIndex],b=Math.max(g.start,f.start),w=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=b,N=w;v<N;v+=3){let L=a.getX(v),D=a.getX(v+1),z=a.getX(v+2);s=sa(this,m,t,i,l,h,d,L,D,z),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,f.start),M=Math.min(a.count,f.start+f.count);for(let g=x,m=M;g<m;g+=3){let b=a.getX(g),w=a.getX(g+1),v=a.getX(g+2);s=sa(this,o,t,i,l,h,d,b,w,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,M=u.length;x<M;x++){let g=u[x],m=o[g.materialIndex],b=Math.max(g.start,f.start),w=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let v=b,N=w;v<N;v+=3){let L=v,D=v+1,z=v+2;s=sa(this,m,t,i,l,h,d,L,D,z),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,f.start),M=Math.min(c.count,f.start+f.count);for(let g=x,m=M;g<m;g+=3){let b=g,w=g+1,v=g+2;s=sa(this,o,t,i,l,h,d,b,w,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function R0(n,t,e,i,s,r,o,a){let c;if(t.side===Rn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===ss,a),c===null)return null;ia.copy(a),ia.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(ia);return l<e.near||l>e.far?null:{distance:l,point:ia.clone(),object:n}}function sa(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,Qo),n.getVertexPosition(c,ta),n.getVertexPosition(l,ea);let h=R0(n,t,e,i,Qo,ta,ea,ju);if(h){let d=new O;es.getBarycoord(ju,Qo,ta,ea,d),s&&(h.uv=es.getInterpolatedAttribute(s,a,c,l,d,new At)),r&&(h.uv1=es.getInterpolatedAttribute(r,a,c,l,d,new At)),o&&(h.normal=es.getInterpolatedAttribute(o,a,c,l,d,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new O,materialIndex:0};es.getNormal(Qo,ta,ea,u.normal),h.face=u,h.barycoord=d}return h}var Fe=class n extends He{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,f=0;x("z","y","x",-1,-1,i,e,t,o,r,0),x("z","y","x",1,-1,i,e,-t,o,r,1),x("x","z","y",1,1,t,i,e,s,o,2),x("x","z","y",1,-1,t,i,-e,s,o,3),x("x","y","z",1,-1,t,e,i,s,r,4),x("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new ge(l,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(d,2));function x(M,g,m,b,w,v,N,L,D,z,A){let S=v/D,B=N/z,q=v/2,Y=N/2,H=L/2,k=D+1,X=z+1,gt=0,$=0,ht=new O;for(let Rt=0;Rt<X;Rt++){let lt=Rt*B-Y;for(let ne=0;ne<k;ne++){let re=ne*S-q;ht[M]=re*b,ht[g]=lt*w,ht[m]=H,l.push(ht.x,ht.y,ht.z),ht[M]=0,ht[g]=0,ht[m]=L>0?1:-1,h.push(ht.x,ht.y,ht.z),d.push(ne/D),d.push(1-Rt/z),gt+=1}}for(let Rt=0;Rt<z;Rt++)for(let lt=0;lt<D;lt++){let ne=u+lt+k*Rt,re=u+lt+k*(Rt+1),dt=u+(lt+1)+k*(Rt+1),Ct=u+(lt+1)+k*Rt;c.push(ne,re,Ct),c.push(re,dt,Ct),$+=6}a.addGroup(f,$,A),f+=$,u+=gt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Tr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function On(n){let t={};for(let e=0;e<n.length;e++){let i=Tr(n[e]);for(let s in i)t[s]=i[s]}return t}function C0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function sd(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}var P0={clone:Tr,merge:On},I0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ei=class extends ki{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I0,this.fragmentShader=L0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Tr(t.uniforms),this.uniformsGroups=C0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Ca=class extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Oi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Qi=new O,Qu=new At,tf=new At,pn=class extends Ca{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=uo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return uo*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qi.x,Qi.y).multiplyScalar(-t/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-t/Qi.z)}getViewSize(t,e){return this.getViewBounds(t,Qu,tf),e.subVectors(tf,Qu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(io*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ar=-90,cr=1,Yl=class extends Ve{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pn(ar,cr,t,e);s.layers=this.layers,this.add(s);let r=new pn(ar,cr,t,e);r.layers=this.layers,this.add(r);let o=new pn(ar,cr,t,e);o.layers=this.layers,this.add(o);let a=new pn(ar,cr,t,e);a.layers=this.layers,this.add(a);let c=new pn(ar,cr,t,e);c.layers=this.layers,this.add(c);let l=new pn(ar,cr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Oi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Sa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},Pa=class extends Cn{constructor(t,e,i,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:vr,super(t,e,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ql=class extends Hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Pa(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:_i}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fe(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:Tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rn,blending:ns});r.uniforms.tEquirect.value=e;let o=new Dt(s,r),a=e.minFilter;return e.minFilter===Ls&&(e.minFilter=_i),new Yl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Wc=new O,D0=new O,U0=new _e,li=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Wc.subVectors(i,e).cross(D0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Wc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||U0.getNormalMatrix(t),s=this.coplanarPoint(Wc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ws=new wr,ra=new O,mo=class{constructor(t=new li,e=new li,i=new li,s=new li,r=new li,o=new li){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Oi){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],d=s[6],u=s[7],f=s[8],x=s[9],M=s[10],g=s[11],m=s[12],b=s[13],w=s[14],v=s[15];if(i[0].setComponents(c-r,u-l,g-f,v-m).normalize(),i[1].setComponents(c+r,u+l,g+f,v+m).normalize(),i[2].setComponents(c+o,u+h,g+x,v+b).normalize(),i[3].setComponents(c-o,u-h,g-x,v-b).normalize(),i[4].setComponents(c-a,u-d,g-M,v-w).normalize(),e===Oi)i[5].setComponents(c+a,u+d,g+M,v+w).normalize();else if(e===Sa)i[5].setComponents(a,d,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(t){return ws.center.set(0,0,0),ws.radius=.7071067811865476,ws.applyMatrix4(t.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(ra.x=s.normal.x>0?t.max.x:t.min.x,ra.y=s.normal.y>0?t.max.y:t.min.y,ra.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ra)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function rd(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function N0(n){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,d=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let h=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,h);else{d.sort((f,x)=>f.start-x.start);let u=0;for(let f=1;f<d.length;f++){let x=d[u],M=d[f];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++u,d[u]=M)}d.length=u+1;for(let f=0,x=d.length;f<x;f++){let M=d[f];n.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var rs=class n extends He{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,d=t/a,u=e/c,f=[],x=[],M=[],g=[];for(let m=0;m<h;m++){let b=m*u-o;for(let w=0;w<l;w++){let v=w*d-r;x.push(v,-b,0),M.push(0,0,1),g.push(w/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let b=0;b<a;b++){let w=b+l*m,v=b+l*(m+1),N=b+1+l*(m+1),L=b+1+l*m;f.push(w,v,L),f.push(v,N,L)}this.setIndex(f),this.setAttribute("position",new ge(x,3)),this.setAttribute("normal",new ge(M,3)),this.setAttribute("uv",new ge(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},O0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,F0=`#ifdef USE_ALPHAHASH
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
#endif`,z0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,B0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,k0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,V0=`#ifdef USE_AOMAP
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
#endif`,G0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,W0=`#ifdef USE_BATCHING
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
#endif`,X0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Y0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,q0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Z0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,K0=`#ifdef USE_IRIDESCENCE
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
#endif`,J0=`#ifdef USE_BUMPMAP
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
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rm=`#define PI 3.141592653589793
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
} // validated`,om=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,am=`vec3 transformedNormal = objectNormal;
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
#endif`,cm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,um=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fm="gl_FragColor = linearToOutputTexel( gl_FragColor );",dm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pm=`#ifdef USE_ENVMAP
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
#endif`,mm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gm=`#ifdef USE_ENVMAP
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
#endif`,xm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_m=`#ifdef USE_ENVMAP
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
#endif`,ym=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Em=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bm=`#ifdef USE_GRADIENTMAP
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
}`,Sm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Am=`uniform bool receiveShadow;
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
#endif`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Cm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Im=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dm=`PhysicalMaterial material;
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
#endif`,Um=`struct PhysicalMaterial {
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
}`,Nm=`
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
#endif`,Om=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,km=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xm=`#if defined( USE_POINTS_UV )
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
#endif`,Ym=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Km=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$m=`#ifdef USE_MORPHTARGETS
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
#endif`,jm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ig=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sg=`#ifdef USE_NORMALMAP
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
#endif`,rg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,og=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ag=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ug=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_g=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mg=`float getShadowMask() {
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
}`,vg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Eg=`#ifdef USE_SKINNING
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
#endif`,bg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sg=`#ifdef USE_SKINNING
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
#endif`,wg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ag=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cg=`#ifdef USE_TRANSMISSION
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
#endif`,Pg=`#ifdef USE_TRANSMISSION
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
#endif`,Ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ug=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ng=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Og=`uniform sampler2D t2D;
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
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kg=`#include <common>
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
}`,Vg=`#if DEPTH_PACKING == 3200
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
}`,Gg=`#define DISTANCE
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
}`,Wg=`#define DISTANCE
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qg=`uniform float scale;
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
}`,Zg=`uniform vec3 diffuse;
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
}`,Kg=`#include <common>
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
}`,Jg=`uniform vec3 diffuse;
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
}`,$g=`#define LAMBERT
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
}`,jg=`#define LAMBERT
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
}`,Qg=`#define MATCAP
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
}`,tx=`#define MATCAP
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
}`,ex=`#define NORMAL
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
}`,nx=`#define NORMAL
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
}`,ix=`#define PHONG
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
}`,sx=`#define PHONG
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
}`,rx=`#define STANDARD
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
}`,ox=`#define STANDARD
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
}`,ax=`#define TOON
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
}`,cx=`#define TOON
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
}`,lx=`uniform float size;
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
}`,hx=`uniform vec3 diffuse;
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
}`,ux=`#include <common>
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
}`,fx=`uniform vec3 color;
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
}`,dx=`uniform float rotation;
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
}`,px=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:O0,alphahash_pars_fragment:F0,alphamap_fragment:z0,alphamap_pars_fragment:B0,alphatest_fragment:H0,alphatest_pars_fragment:k0,aomap_fragment:V0,aomap_pars_fragment:G0,batching_pars_vertex:W0,batching_vertex:X0,begin_vertex:Y0,beginnormal_vertex:q0,bsdfs:Z0,iridescence_fragment:K0,bumpmap_pars_fragment:J0,clipping_planes_fragment:$0,clipping_planes_pars_fragment:j0,clipping_planes_pars_vertex:Q0,clipping_planes_vertex:tm,color_fragment:em,color_pars_fragment:nm,color_pars_vertex:im,color_vertex:sm,common:rm,cube_uv_reflection_fragment:om,defaultnormal_vertex:am,displacementmap_pars_vertex:cm,displacementmap_vertex:lm,emissivemap_fragment:hm,emissivemap_pars_fragment:um,colorspace_fragment:fm,colorspace_pars_fragment:dm,envmap_fragment:pm,envmap_common_pars_fragment:mm,envmap_pars_fragment:gm,envmap_pars_vertex:xm,envmap_physical_pars_fragment:Rm,envmap_vertex:_m,fog_vertex:ym,fog_pars_vertex:Mm,fog_fragment:vm,fog_pars_fragment:Em,gradientmap_pars_fragment:bm,lightmap_pars_fragment:Sm,lights_lambert_fragment:wm,lights_lambert_pars_fragment:Tm,lights_pars_begin:Am,lights_toon_fragment:Cm,lights_toon_pars_fragment:Pm,lights_phong_fragment:Im,lights_phong_pars_fragment:Lm,lights_physical_fragment:Dm,lights_physical_pars_fragment:Um,lights_fragment_begin:Nm,lights_fragment_maps:Om,lights_fragment_end:Fm,logdepthbuf_fragment:zm,logdepthbuf_pars_fragment:Bm,logdepthbuf_pars_vertex:Hm,logdepthbuf_vertex:km,map_fragment:Vm,map_pars_fragment:Gm,map_particle_fragment:Wm,map_particle_pars_fragment:Xm,metalnessmap_fragment:Ym,metalnessmap_pars_fragment:qm,morphinstance_vertex:Zm,morphcolor_vertex:Km,morphnormal_vertex:Jm,morphtarget_pars_vertex:$m,morphtarget_vertex:jm,normal_fragment_begin:Qm,normal_fragment_maps:tg,normal_pars_fragment:eg,normal_pars_vertex:ng,normal_vertex:ig,normalmap_pars_fragment:sg,clearcoat_normal_fragment_begin:rg,clearcoat_normal_fragment_maps:og,clearcoat_pars_fragment:ag,iridescence_pars_fragment:cg,opaque_fragment:lg,packing:hg,premultiplied_alpha_fragment:ug,project_vertex:fg,dithering_fragment:dg,dithering_pars_fragment:pg,roughnessmap_fragment:mg,roughnessmap_pars_fragment:gg,shadowmap_pars_fragment:xg,shadowmap_pars_vertex:_g,shadowmap_vertex:yg,shadowmask_pars_fragment:Mg,skinbase_vertex:vg,skinning_pars_vertex:Eg,skinning_vertex:bg,skinnormal_vertex:Sg,specularmap_fragment:wg,specularmap_pars_fragment:Tg,tonemapping_fragment:Ag,tonemapping_pars_fragment:Rg,transmission_fragment:Cg,transmission_pars_fragment:Pg,uv_pars_fragment:Ig,uv_pars_vertex:Lg,uv_vertex:Dg,worldpos_vertex:Ug,background_vert:Ng,background_frag:Og,backgroundCube_vert:Fg,backgroundCube_frag:zg,cube_vert:Bg,cube_frag:Hg,depth_vert:kg,depth_frag:Vg,distanceRGBA_vert:Gg,distanceRGBA_frag:Wg,equirect_vert:Xg,equirect_frag:Yg,linedashed_vert:qg,linedashed_frag:Zg,meshbasic_vert:Kg,meshbasic_frag:Jg,meshlambert_vert:$g,meshlambert_frag:jg,meshmatcap_vert:Qg,meshmatcap_frag:tx,meshnormal_vert:ex,meshnormal_frag:nx,meshphong_vert:ix,meshphong_frag:sx,meshphysical_vert:rx,meshphysical_frag:ox,meshtoon_vert:ax,meshtoon_frag:cx,points_vert:lx,points_frag:hx,shadow_vert:ux,shadow_frag:fx,sprite_vert:dx,sprite_frag:px},kt={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},xi={basic:{uniforms:On([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:On([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new ce(0)}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:On([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:On([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:On([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new ce(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:On([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:On([kt.points,kt.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:On([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:On([kt.common,kt.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:On([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:On([kt.sprite,kt.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distanceRGBA:{uniforms:On([kt.common,kt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distanceRGBA_vert,fragmentShader:ye.distanceRGBA_frag},shadow:{uniforms:On([kt.lights,kt.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};xi.physical={uniforms:On([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};var oa={r:0,b:0,g:0},Ts=new Mi,mx=new ke;function gx(n,t,e,i,s,r,o){let a=new ce(0),c=r===!0?0:1,l,h,d=null,u=0,f=null;function x(b){let w=b.isScene===!0?b.background:null;return w&&w.isTexture&&(w=(b.backgroundBlurriness>0?e:t).get(w)),w}function M(b){let w=!1,v=x(b);v===null?m(a,c):v&&v.isColor&&(m(v,1),w=!0);let N=n.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(b,w){let v=x(w);v&&(v.isCubeTexture||v.mapping===Za)?(h===void 0&&(h=new Dt(new Fe(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:Tr(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,L,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ts.copy(w.backgroundRotation),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(mx.makeRotationFromEuler(Ts)),h.material.toneMapped=we.getTransfer(v.colorSpace)!==Ne,(d!==v||u!==v.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,f=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Dt(new rs(2,2),new ei({name:"BackgroundMaterial",uniforms:Tr(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=we.getTransfer(v.colorSpace)!==Ne,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=v,u=v.version,f=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,w){b.getRGB(oa,sd(n)),i.buffers.color.setClear(oa.r,oa.g,oa.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),c=w,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,m(a,c)},render:M,addToRenderList:g}}function xx(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(S,B,q,Y,H){let k=!1,X=d(Y,q,B);r!==X&&(r=X,l(r.object)),k=f(S,Y,q,H),k&&x(S,Y,q,H),H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,v(S,B,q,Y),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function h(S){return n.deleteVertexArray(S)}function d(S,B,q){let Y=q.wireframe===!0,H=i[S.id];H===void 0&&(H={},i[S.id]=H);let k=H[B.id];k===void 0&&(k={},H[B.id]=k);let X=k[Y];return X===void 0&&(X=u(c()),k[Y]=X),X}function u(S){let B=[],q=[],Y=[];for(let H=0;H<e;H++)B[H]=0,q[H]=0,Y[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:q,attributeDivisors:Y,object:S,attributes:{},index:null}}function f(S,B,q,Y){let H=r.attributes,k=B.attributes,X=0,gt=q.getAttributes();for(let $ in gt)if(gt[$].location>=0){let Rt=H[$],lt=k[$];if(lt===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(lt=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(lt=S.instanceColor)),Rt===void 0||Rt.attribute!==lt||lt&&Rt.data!==lt.data)return!0;X++}return r.attributesNum!==X||r.index!==Y}function x(S,B,q,Y){let H={},k=B.attributes,X=0,gt=q.getAttributes();for(let $ in gt)if(gt[$].location>=0){let Rt=k[$];Rt===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(Rt=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(Rt=S.instanceColor));let lt={};lt.attribute=Rt,Rt&&Rt.data&&(lt.data=Rt.data),H[$]=lt,X++}r.attributes=H,r.attributesNum=X,r.index=Y}function M(){let S=r.newAttributes;for(let B=0,q=S.length;B<q;B++)S[B]=0}function g(S){m(S,0)}function m(S,B){let q=r.newAttributes,Y=r.enabledAttributes,H=r.attributeDivisors;q[S]=1,Y[S]===0&&(n.enableVertexAttribArray(S),Y[S]=1),H[S]!==B&&(n.vertexAttribDivisor(S,B),H[S]=B)}function b(){let S=r.newAttributes,B=r.enabledAttributes;for(let q=0,Y=B.length;q<Y;q++)B[q]!==S[q]&&(n.disableVertexAttribArray(q),B[q]=0)}function w(S,B,q,Y,H,k,X){X===!0?n.vertexAttribIPointer(S,B,q,H,k):n.vertexAttribPointer(S,B,q,Y,H,k)}function v(S,B,q,Y){M();let H=Y.attributes,k=q.getAttributes(),X=B.defaultAttributeValues;for(let gt in k){let $=k[gt];if($.location>=0){let ht=H[gt];if(ht===void 0&&(gt==="instanceMatrix"&&S.instanceMatrix&&(ht=S.instanceMatrix),gt==="instanceColor"&&S.instanceColor&&(ht=S.instanceColor)),ht!==void 0){let Rt=ht.normalized,lt=ht.itemSize,ne=t.get(ht);if(ne===void 0)continue;let re=ne.buffer,dt=ne.type,Ct=ne.bytesPerElement,Yt=dt===n.INT||dt===n.UNSIGNED_INT||ht.gpuType===Ph;if(ht.isInterleavedBufferAttribute){let Ut=ht.data,zt=Ut.stride,he=ht.offset;if(Ut.isInstancedInterleavedBuffer){for(let Qt=0;Qt<$.locationSize;Qt++)m($.location+Qt,Ut.meshPerAttribute);S.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let Qt=0;Qt<$.locationSize;Qt++)g($.location+Qt);n.bindBuffer(n.ARRAY_BUFFER,re);for(let Qt=0;Qt<$.locationSize;Qt++)w($.location+Qt,lt/$.locationSize,dt,Rt,zt*Ct,(he+lt/$.locationSize*Qt)*Ct,Yt)}else{if(ht.isInstancedBufferAttribute){for(let Ut=0;Ut<$.locationSize;Ut++)m($.location+Ut,ht.meshPerAttribute);S.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Ut=0;Ut<$.locationSize;Ut++)g($.location+Ut);n.bindBuffer(n.ARRAY_BUFFER,re);for(let Ut=0;Ut<$.locationSize;Ut++)w($.location+Ut,lt/$.locationSize,dt,Rt,lt*Ct,lt/$.locationSize*Ut*Ct,Yt)}}else if(X!==void 0){let Rt=X[gt];if(Rt!==void 0)switch(Rt.length){case 2:n.vertexAttrib2fv($.location,Rt);break;case 3:n.vertexAttrib3fv($.location,Rt);break;case 4:n.vertexAttrib4fv($.location,Rt);break;default:n.vertexAttrib1fv($.location,Rt)}}}}b()}function N(){z();for(let S in i){let B=i[S];for(let q in B){let Y=B[q];for(let H in Y)h(Y[H].object),delete Y[H];delete B[q]}delete i[S]}}function L(S){if(i[S.id]===void 0)return;let B=i[S.id];for(let q in B){let Y=B[q];for(let H in Y)h(Y[H].object),delete Y[H];delete B[q]}delete i[S.id]}function D(S){for(let B in i){let q=i[B];if(q[S.id]===void 0)continue;let Y=q[S.id];for(let H in Y)h(Y[H].object),delete Y[H];delete q[S.id]}}function z(){A(),o=!0,r!==s&&(r=s,l(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:z,resetDefaultState:A,dispose:N,releaseStatesOfGeometry:L,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:g,disableUnusedAttributes:b}}function _x(n,t,e){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,d){d!==0&&(n.drawArraysInstanced(i,l,h,d),e.update(h,i,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,d);let f=0;for(let x=0;x<d;x++)f+=h[x];e.update(f,i,1)}function c(l,h,d,u){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<l.length;x++)o(l[x],h[x],u[x]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,u,0,d);let x=0;for(let M=0;M<d;M++)x+=h[M]*u[M];e.update(x,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function yx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==ui&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let z=D===Uo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==zi&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Ni&&!z)}function c(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=x>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:v,vertexTextures:N,maxSamples:L}}function Mx(n){let t=this,e=null,i=0,s=!1,r=!1,o=new li,a=new _e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let x=d.clippingPlanes,M=d.clipIntersection,g=d.clipShadows,m=n.get(d);if(!s||x===null||x.length===0||r&&!g)r?h(null):l();else{let b=r?0:i,w=b*4,v=m.clippingState||null;c.value=v,v=h(x,u,w,f);for(let N=0;N!==w;++N)v[N]=e[N];m.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,x){let M=d!==null?d.length:0,g=null;if(M!==0){if(g=c.value,x!==!0||g===null){let m=f+M*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,v=f;w!==M;++w,v+=4)o.copy(d[w]).applyMatrix4(b,a),o.normal.toArray(g,v),g[v+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}function vx(n){let t=new WeakMap;function e(o,a){return a===fl?o.mapping=vr:a===dl&&(o.mapping=Er),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===fl||a===dl)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new ql(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Ia=class extends Ca{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},pr=4,ef=[.125,.215,.35,.446,.526,.582],Ps=20,Xc=new Ia,nf=new ce,Yc=null,qc=0,Zc=0,Kc=!1,Rs=(1+Math.sqrt(5))/2,lr=1/Rs,sf=[new O(-Rs,lr,0),new O(Rs,lr,0),new O(-lr,0,Rs),new O(lr,0,Rs),new O(0,Rs,-lr),new O(0,Rs,lr),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],La=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Yc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=af(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Yc,qc,Zc),this._renderer.xr.enabled=Kc,t.scissorTest=!1,aa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vr||t.mapping===Er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:Uo,format:ui,colorSpace:Cr,depthBuffer:!1},s=rf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rf(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ex(r)),this._blurMaterial=bx(r,t,e)}return s}_compileMaterial(t){let e=new Dt(this._lodPlanes[0],t);this._renderer.compile(e,Xc)}_sceneToCubeUV(t,e,i,s){let a=new pn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(nf),h.toneMapping=is,h.autoClear=!1;let f=new Qe({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),x=new Dt(new Fe,f),M=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,M=!0):(f.color.copy(nf),M=!0);for(let m=0;m<6;m++){let b=m%3;b===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):b===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let w=this._cubeSize;aa(s,b*w,m>2?w:0,w,w),h.setRenderTarget(s),M&&h.render(x,a),h.render(t,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=g}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===vr||t.mapping===Er;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=af()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=of());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Dt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;aa(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Xc)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=sf[(s-r-1)%sf.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Dt(this._lodPlanes[s],l),u=l.uniforms,f=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ps-1),M=r/x,g=isFinite(r)?1+Math.floor(h*M):Ps;g>Ps&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ps}`);let m=[],b=0;for(let D=0;D<Ps;++D){let z=D/M,A=Math.exp(-z*z/2);m.push(A),D===0?b+=A:D<g&&(b+=2*A)}for(let D=0;D<m.length;D++)m[D]=m[D]/b;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:w}=this;u.dTheta.value=x,u.mipInt.value=w-i;let v=this._sizeLods[s],N=3*v*(s>w-pr?s-w+pr:0),L=4*(this._cubeSize-v);aa(e,N,L,3*v,2*v),c.setRenderTarget(e),c.render(d,Xc)}};function Ex(n){let t=[],e=[],i=[],s=n,r=n-pr+1+ef.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>n-pr?c=ef[o-n+pr-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,x=6,M=3,g=2,m=1,b=new Float32Array(M*x*f),w=new Float32Array(g*x*f),v=new Float32Array(m*x*f);for(let L=0;L<f;L++){let D=L%3*2/3-1,z=L>2?0:-1,A=[D,z,0,D+2/3,z,0,D+2/3,z+1,0,D,z,0,D+2/3,z+1,0,D,z+1,0];b.set(A,M*x*L),w.set(u,g*x*L);let S=[L,L,L,L,L,L];v.set(S,m*x*L)}let N=new He;N.setAttribute("position",new vn(b,M)),N.setAttribute("uv",new vn(w,g)),N.setAttribute("faceIndex",new vn(v,m)),t.push(N),s>pr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function rf(n,t,e){let i=new Hi(n,t,e);return i.texture.mapping=Za,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function aa(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function bx(n,t,e){let i=new Float32Array(Ps),s=new O(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fh(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function of(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fh(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function af(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Fh(){return`

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
	`}function Sx(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===fl||c===dl,h=c===vr||c===Er;if(l||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new La(n)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new La(n)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function wx(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&eo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Tx(n,t,e,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let x in u.attributes)t.remove(u.attributes[x]);for(let x in u.morphAttributes){let M=u.morphAttributes[x];for(let g=0,m=M.length;g<m;g++)t.remove(M[g])}u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let x in u)t.update(u[x],n.ARRAY_BUFFER);let f=d.morphAttributes;for(let x in f){let M=f[x];for(let g=0,m=M.length;g<m;g++)t.update(M[g],n.ARRAY_BUFFER)}}function l(d){let u=[],f=d.index,x=d.attributes.position,M=0;if(f!==null){let b=f.array;M=f.version;for(let w=0,v=b.length;w<v;w+=3){let N=b[w+0],L=b[w+1],D=b[w+2];u.push(N,L,L,D,D,N)}}else if(x!==void 0){let b=x.array;M=x.version;for(let w=0,v=b.length/3-1;w<v;w+=3){let N=w+0,L=w+1,D=w+2;u.push(N,L,L,D,D,N)}}else return;let g=new(nd(u)?Ra:Aa)(u,1);g.version=M;let m=r.get(d);m&&t.remove(m),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Ax(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){n.drawElements(i,f,r,u*o),e.update(f,i,1)}function l(u,f,x){x!==0&&(n.drawElementsInstanced(i,f,r,u*o,x),e.update(f,i,x))}function h(u,f,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,x);let g=0;for(let m=0;m<x;m++)g+=f[m];e.update(g,i,1)}function d(u,f,x,M){if(x===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<u.length;m++)l(u[m]/o,f[m],M[m]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,M,0,x);let m=0;for(let b=0;b<x;b++)m+=f[b]*M[b];e.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Rx(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Cx(n,t,e){let i=new WeakMap,s=new Oe;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let A=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],w=0;f===!0&&(w=1),x===!0&&(w=2),M===!0&&(w=3);let v=a.attributes.position.count*w,N=1;v>t.maxTextureSize&&(N=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let L=new Float32Array(v*N*4*d),D=new Ta(L,v,N,d);D.type=Ni,D.needsUpdate=!0;let z=w*4;for(let S=0;S<d;S++){let B=g[S],q=m[S],Y=b[S],H=v*N*4*S;for(let k=0;k<B.count;k++){let X=k*z;f===!0&&(s.fromBufferAttribute(B,k),L[H+X+0]=s.x,L[H+X+1]=s.y,L[H+X+2]=s.z,L[H+X+3]=0),x===!0&&(s.fromBufferAttribute(q,k),L[H+X+4]=s.x,L[H+X+5]=s.y,L[H+X+6]=s.z,L[H+X+7]=0),M===!0&&(s.fromBufferAttribute(Y,k),L[H+X+8]=s.x,L[H+X+9]=s.y,L[H+X+10]=s.z,L[H+X+11]=Y.itemSize===4?s.w:1)}}u={count:d,texture:D,size:new At(v,N)},i.set(a,u),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let M=0;M<l.length;M++)f+=l[M];let x=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Px(n,t,e,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Da=class extends Cn{constructor(t,e,i,s,r,o,a,c,l,h=xr){if(h!==xr&&h!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===xr&&(i=Ds),i===void 0&&h===Sr&&(i=br),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:sn,this.minFilter=c!==void 0?c:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},od=new Cn,cf=new Da(1,1),ad=new Ta,cd=new Xl,ld=new Pa,lf=[],hf=[],uf=new Float32Array(16),ff=new Float32Array(9),df=new Float32Array(4);function Pr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=lf[s];if(r===void 0&&(r=new Float32Array(s),lf[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function cn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ln(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ja(n,t){let e=hf[t];e===void 0&&(e=new Int32Array(t),hf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Ix(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Lx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;n.uniform2fv(this.addr,t),ln(e,t)}}function Dx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(cn(e,t))return;n.uniform3fv(this.addr,t),ln(e,t)}}function Ux(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;n.uniform4fv(this.addr,t),ln(e,t)}}function Nx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(cn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ln(e,t)}else{if(cn(e,i))return;df.set(i),n.uniformMatrix2fv(this.addr,!1,df),ln(e,i)}}function Ox(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(cn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ln(e,t)}else{if(cn(e,i))return;ff.set(i),n.uniformMatrix3fv(this.addr,!1,ff),ln(e,i)}}function Fx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(cn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ln(e,t)}else{if(cn(e,i))return;uf.set(i),n.uniformMatrix4fv(this.addr,!1,uf),ln(e,i)}}function zx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Bx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;n.uniform2iv(this.addr,t),ln(e,t)}}function Hx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;n.uniform3iv(this.addr,t),ln(e,t)}}function kx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;n.uniform4iv(this.addr,t),ln(e,t)}}function Vx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Gx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;n.uniform2uiv(this.addr,t),ln(e,t)}}function Wx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;n.uniform3uiv(this.addr,t),ln(e,t)}}function Xx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;n.uniform4uiv(this.addr,t),ln(e,t)}}function Yx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(cf.compareFunction=td,r=cf):r=od,e.setTexture2D(t||r,s)}function qx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||cd,s)}function Zx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||ld,s)}function Kx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||ad,s)}function Jx(n){switch(n){case 5126:return Ix;case 35664:return Lx;case 35665:return Dx;case 35666:return Ux;case 35674:return Nx;case 35675:return Ox;case 35676:return Fx;case 5124:case 35670:return zx;case 35667:case 35671:return Bx;case 35668:case 35672:return Hx;case 35669:case 35673:return kx;case 5125:return Vx;case 36294:return Gx;case 36295:return Wx;case 36296:return Xx;case 35678:case 36198:case 36298:case 36306:case 35682:return Yx;case 35679:case 36299:case 36307:return qx;case 35680:case 36300:case 36308:case 36293:return Zx;case 36289:case 36303:case 36311:case 36292:return Kx}}function $x(n,t){n.uniform1fv(this.addr,t)}function jx(n,t){let e=Pr(t,this.size,2);n.uniform2fv(this.addr,e)}function Qx(n,t){let e=Pr(t,this.size,3);n.uniform3fv(this.addr,e)}function t_(n,t){let e=Pr(t,this.size,4);n.uniform4fv(this.addr,e)}function e_(n,t){let e=Pr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function n_(n,t){let e=Pr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function i_(n,t){let e=Pr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function s_(n,t){n.uniform1iv(this.addr,t)}function r_(n,t){n.uniform2iv(this.addr,t)}function o_(n,t){n.uniform3iv(this.addr,t)}function a_(n,t){n.uniform4iv(this.addr,t)}function c_(n,t){n.uniform1uiv(this.addr,t)}function l_(n,t){n.uniform2uiv(this.addr,t)}function h_(n,t){n.uniform3uiv(this.addr,t)}function u_(n,t){n.uniform4uiv(this.addr,t)}function f_(n,t,e){let i=this.cache,s=t.length,r=Ja(e,s);cn(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||od,r[o])}function d_(n,t,e){let i=this.cache,s=t.length,r=Ja(e,s);cn(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||cd,r[o])}function p_(n,t,e){let i=this.cache,s=t.length,r=Ja(e,s);cn(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ld,r[o])}function m_(n,t,e){let i=this.cache,s=t.length,r=Ja(e,s);cn(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ad,r[o])}function g_(n){switch(n){case 5126:return $x;case 35664:return jx;case 35665:return Qx;case 35666:return t_;case 35674:return e_;case 35675:return n_;case 35676:return i_;case 5124:case 35670:return s_;case 35667:case 35671:return r_;case 35668:case 35672:return o_;case 35669:case 35673:return a_;case 5125:return c_;case 36294:return l_;case 36295:return h_;case 36296:return u_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return d_;case 35680:case 36300:case 36308:case 36293:return p_;case 36289:case 36303:case 36311:case 36292:return m_}}var Zl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Jx(e.type)}},Kl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=g_(e.type)}},Jl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Jc=/(\w+)(\])?(\[|\.)?/g;function pf(n,t){n.seq.push(t),n.map[t.id]=t}function x_(n,t,e){let i=n.name,s=i.length;for(Jc.lastIndex=0;;){let r=Jc.exec(i),o=Jc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){pf(e,l===void 0?new Zl(a,n,t):new Kl(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new Jl(a),pf(e,d)),e=d}}}var yr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);x_(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function mf(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var __=37297,y_=0;function M_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var gf=new _e;function v_(n){we._getMatrix(gf,we.workingColorSpace,n);let t=`mat3( ${gf.elements.map(e=>e.toFixed(4))} )`;switch(we.getTransfer(n)){case Ka:return[t,"LinearTransferOETF"];case Ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function xf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+M_(n.getShaderSource(t),o)}else return s}function E_(n,t){let e=v_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function b_(n,t){let e;switch(t){case Dp:e="Linear";break;case Up:e="Reinhard";break;case Np:e="Cineon";break;case Op:e="ACESFilmic";break;case zp:e="AgX";break;case Bp:e="Neutral";break;case Fp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ca=new O;function S_(){we.getLuminanceCoefficients(ca);let n=ca.x.toFixed(4),t=ca.y.toFixed(4),e=ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function w_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(no).join(`
`)}function T_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function A_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function no(n){return n!==""}function _f(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var R_=/^[ \t]*#include +<([\w\d./]+)>/gm;function $l(n){return n.replace(R_,P_)}var C_=new Map;function P_(n,t){let e=ye[t];if(e===void 0){let i=C_.get(t);if(i!==void 0)e=ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return $l(e)}var I_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mf(n){return n.replace(I_,L_)}function L_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vf(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function D_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===kf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===qa?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ui&&(t="SHADOWMAP_TYPE_VSM"),t}function U_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case vr:case Er:t="ENVMAP_TYPE_CUBE";break;case Za:t="ENVMAP_TYPE_CUBE_UV";break}return t}function N_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Er:t="ENVMAP_MODE_REFRACTION";break}return t}function O_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ch:t="ENVMAP_BLENDING_MULTIPLY";break;case Ip:t="ENVMAP_BLENDING_MIX";break;case Lp:t="ENVMAP_BLENDING_ADD";break}return t}function F_(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function z_(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=D_(e),l=U_(e),h=N_(e),d=O_(e),u=F_(e),f=w_(e),x=T_(r),M=s.createProgram(),g,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(no).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(no).join(`
`),m.length>0&&(m+=`
`)):(g=[vf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),m=[vf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==is?"#define TONE_MAPPING":"",e.toneMapping!==is?ye.tonemapping_pars_fragment:"",e.toneMapping!==is?b_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,E_("linearToOutputTexel",e.outputColorSpace),S_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(no).join(`
`)),o=$l(o),o=_f(o,e),o=yf(o,e),a=$l(a),a=_f(a,e),a=yf(a,e),o=Mf(o),a=Mf(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Du?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=b+g+o,v=b+m+a,N=mf(s,s.VERTEX_SHADER,w),L=mf(s,s.FRAGMENT_SHADER,v);s.attachShader(M,N),s.attachShader(M,L),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function D(B){if(n.debug.checkShaderErrors){let q=s.getProgramInfoLog(M).trim(),Y=s.getShaderInfoLog(N).trim(),H=s.getShaderInfoLog(L).trim(),k=!0,X=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,N,L);else{let gt=xf(s,N,"vertex"),$=xf(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+q+`
`+gt+`
`+$)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(Y===""||H==="")&&(X=!1);X&&(B.diagnostics={runnable:k,programLog:q,vertexShader:{log:Y,prefix:g},fragmentShader:{log:H,prefix:m}})}s.deleteShader(N),s.deleteShader(L),z=new yr(s,M),A=A_(s,M)}let z;this.getUniforms=function(){return z===void 0&&D(this),z};let A;this.getAttributes=function(){return A===void 0&&D(this),A};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(M,__)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=y_++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=N,this.fragmentShader=L,this}var B_=0,jl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Ql(t),e.set(t,i)),i}},Ql=class{constructor(t){this.id=B_++,this.code=t,this.usedTimes=0}};function H_(n,t,e,i,s,r,o){let a=new po,c=new jl,l=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(A){return l.add(A),A===0?"uv":`uv${A}`}function g(A,S,B,q,Y){let H=q.fog,k=Y.geometry,X=A.isMeshStandardMaterial?q.environment:null,gt=(A.isMeshStandardMaterial?e:t).get(A.envMap||X),$=gt&&gt.mapping===Za?gt.image.height:null,ht=x[A.type];A.precision!==null&&(f=s.getMaxPrecision(A.precision),f!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",f,"instead."));let Rt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,lt=Rt!==void 0?Rt.length:0,ne=0;k.morphAttributes.position!==void 0&&(ne=1),k.morphAttributes.normal!==void 0&&(ne=2),k.morphAttributes.color!==void 0&&(ne=3);let re,dt,Ct,Yt;if(ht){let Ee=xi[ht];re=Ee.vertexShader,dt=Ee.fragmentShader}else re=A.vertexShader,dt=A.fragmentShader,c.update(A),Ct=c.getVertexShaderID(A),Yt=c.getFragmentShaderID(A);let Ut=n.getRenderTarget(),zt=n.state.buffers.depth.getReversed(),he=Y.isInstancedMesh===!0,Qt=Y.isBatchedMesh===!0,ue=!!A.map,_t=!!A.matcap,St=!!gt,F=!!A.aoMap,qt=!!A.lightMap,wt=!!A.bumpMap,Xt=!!A.normalMap,Pt=!!A.displacementMap,oe=!!A.emissiveMap,Bt=!!A.metalnessMap,P=!!A.roughnessMap,T=A.anisotropy>0,et=A.clearcoat>0,pt=A.dispersion>0,Et=A.iridescence>0,xt=A.sheen>0,Z=A.transmission>0,Q=T&&!!A.anisotropyMap,j=et&&!!A.clearcoatMap,It=et&&!!A.clearcoatNormalMap,ut=et&&!!A.clearcoatRoughnessMap,rt=Et&&!!A.iridescenceMap,Mt=Et&&!!A.iridescenceThicknessMap,bt=xt&&!!A.sheenColorMap,at=xt&&!!A.sheenRoughnessMap,Zt=!!A.specularMap,le=!!A.specularColorMap,ve=!!A.specularIntensityMap,W=Z&&!!A.transmissionMap,Tt=Z&&!!A.thicknessMap,ct=!!A.gradientMap,vt=!!A.alphaMap,Wt=A.alphaTest>0,Gt=!!A.alphaHash,pe=!!A.extensions,Ce=is;A.toneMapped&&(Ut===null||Ut.isXRRenderTarget===!0)&&(Ce=n.toneMapping);let rn={shaderID:ht,shaderType:A.type,shaderName:A.name,vertexShader:re,fragmentShader:dt,defines:A.defines,customVertexShaderID:Ct,customFragmentShaderID:Yt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:f,batching:Qt,batchingColor:Qt&&Y._colorsTexture!==null,instancing:he,instancingColor:he&&Y.instanceColor!==null,instancingMorph:he&&Y.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:Ut===null?n.outputColorSpace:Ut.isXRRenderTarget===!0?Ut.texture.colorSpace:Cr,alphaToCoverage:!!A.alphaToCoverage,map:ue,matcap:_t,envMap:St,envMapMode:St&&gt.mapping,envMapCubeUVHeight:$,aoMap:F,lightMap:qt,bumpMap:wt,normalMap:Xt,displacementMap:u&&Pt,emissiveMap:oe,normalMapObjectSpace:Xt&&A.normalMapType===Gp,normalMapTangentSpace:Xt&&A.normalMapType===Qf,metalnessMap:Bt,roughnessMap:P,anisotropy:T,anisotropyMap:Q,clearcoat:et,clearcoatMap:j,clearcoatNormalMap:It,clearcoatRoughnessMap:ut,dispersion:pt,iridescence:Et,iridescenceMap:rt,iridescenceThicknessMap:Mt,sheen:xt,sheenColorMap:bt,sheenRoughnessMap:at,specularMap:Zt,specularColorMap:le,specularIntensityMap:ve,transmission:Z,transmissionMap:W,thicknessMap:Tt,gradientMap:ct,opaque:A.transparent===!1&&A.blending===gr&&A.alphaToCoverage===!1,alphaMap:vt,alphaTest:Wt,alphaHash:Gt,combine:A.combine,mapUv:ue&&M(A.map.channel),aoMapUv:F&&M(A.aoMap.channel),lightMapUv:qt&&M(A.lightMap.channel),bumpMapUv:wt&&M(A.bumpMap.channel),normalMapUv:Xt&&M(A.normalMap.channel),displacementMapUv:Pt&&M(A.displacementMap.channel),emissiveMapUv:oe&&M(A.emissiveMap.channel),metalnessMapUv:Bt&&M(A.metalnessMap.channel),roughnessMapUv:P&&M(A.roughnessMap.channel),anisotropyMapUv:Q&&M(A.anisotropyMap.channel),clearcoatMapUv:j&&M(A.clearcoatMap.channel),clearcoatNormalMapUv:It&&M(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&M(A.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&M(A.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&M(A.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&M(A.sheenColorMap.channel),sheenRoughnessMapUv:at&&M(A.sheenRoughnessMap.channel),specularMapUv:Zt&&M(A.specularMap.channel),specularColorMapUv:le&&M(A.specularColorMap.channel),specularIntensityMapUv:ve&&M(A.specularIntensityMap.channel),transmissionMapUv:W&&M(A.transmissionMap.channel),thicknessMapUv:Tt&&M(A.thicknessMap.channel),alphaMapUv:vt&&M(A.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Xt||T),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!k.attributes.uv&&(ue||vt),fog:!!H,useFog:A.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:zt,skinning:Y.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:ne,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ce,decodeVideoTexture:ue&&A.map.isVideoTexture===!0&&we.getTransfer(A.map.colorSpace)===Ne,decodeVideoTextureEmissive:oe&&A.emissiveMap.isVideoTexture===!0&&we.getTransfer(A.emissiveMap.colorSpace)===Ne,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===An,flipSided:A.side===Rn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:pe&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&A.extensions.multiDraw===!0||Qt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return rn.vertexUv1s=l.has(1),rn.vertexUv2s=l.has(2),rn.vertexUv3s=l.has(3),l.clear(),rn}function m(A){let S=[];if(A.shaderID?S.push(A.shaderID):(S.push(A.customVertexShaderID),S.push(A.customFragmentShaderID)),A.defines!==void 0)for(let B in A.defines)S.push(B),S.push(A.defines[B]);return A.isRawShaderMaterial===!1&&(b(S,A),w(S,A),S.push(n.outputColorSpace)),S.push(A.customProgramCacheKey),S.join()}function b(A,S){A.push(S.precision),A.push(S.outputColorSpace),A.push(S.envMapMode),A.push(S.envMapCubeUVHeight),A.push(S.mapUv),A.push(S.alphaMapUv),A.push(S.lightMapUv),A.push(S.aoMapUv),A.push(S.bumpMapUv),A.push(S.normalMapUv),A.push(S.displacementMapUv),A.push(S.emissiveMapUv),A.push(S.metalnessMapUv),A.push(S.roughnessMapUv),A.push(S.anisotropyMapUv),A.push(S.clearcoatMapUv),A.push(S.clearcoatNormalMapUv),A.push(S.clearcoatRoughnessMapUv),A.push(S.iridescenceMapUv),A.push(S.iridescenceThicknessMapUv),A.push(S.sheenColorMapUv),A.push(S.sheenRoughnessMapUv),A.push(S.specularMapUv),A.push(S.specularColorMapUv),A.push(S.specularIntensityMapUv),A.push(S.transmissionMapUv),A.push(S.thicknessMapUv),A.push(S.combine),A.push(S.fogExp2),A.push(S.sizeAttenuation),A.push(S.morphTargetsCount),A.push(S.morphAttributeCount),A.push(S.numDirLights),A.push(S.numPointLights),A.push(S.numSpotLights),A.push(S.numSpotLightMaps),A.push(S.numHemiLights),A.push(S.numRectAreaLights),A.push(S.numDirLightShadows),A.push(S.numPointLightShadows),A.push(S.numSpotLightShadows),A.push(S.numSpotLightShadowsWithMaps),A.push(S.numLightProbes),A.push(S.shadowMapType),A.push(S.toneMapping),A.push(S.numClippingPlanes),A.push(S.numClipIntersection),A.push(S.depthPacking)}function w(A,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),A.push(a.mask)}function v(A){let S=x[A.type],B;if(S){let q=xi[S];B=P0.clone(q.uniforms)}else B=A.uniforms;return B}function N(A,S){let B;for(let q=0,Y=h.length;q<Y;q++){let H=h[q];if(H.cacheKey===S){B=H,++B.usedTimes;break}}return B===void 0&&(B=new z_(n,S,A,r),h.push(B)),B}function L(A){if(--A.usedTimes===0){let S=h.indexOf(A);h[S]=h[h.length-1],h.pop(),A.destroy()}}function D(A){c.remove(A)}function z(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:N,releaseProgram:L,releaseShaderCache:D,programs:h,dispose:z}}function k_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function V_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Ef(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function bf(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d,u,f,x,M,g){let m=n[t];return m===void 0?(m={id:d.id,object:d,geometry:u,material:f,groupOrder:x,renderOrder:d.renderOrder,z:M,group:g},n[t]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=f,m.groupOrder=x,m.renderOrder=d.renderOrder,m.z=M,m.group=g),t++,m}function a(d,u,f,x,M,g){let m=o(d,u,f,x,M,g);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):e.push(m)}function c(d,u,f,x,M,g){let m=o(d,u,f,x,M,g);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function l(d,u){e.length>1&&e.sort(d||V_),i.length>1&&i.sort(u||Ef),s.length>1&&s.sort(u||Ef)}function h(){for(let d=t,u=n.length;d<u;d++){let f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function G_(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new bf,n.set(i,[o])):s>=r.length?(o=new bf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function W_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new ce};break;case"SpotLight":e={position:new O,direction:new O,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new ce,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":e={color:new ce,position:new O,halfWidth:new O,halfHeight:new O};break}return n[t.id]=e,e}}}function X_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Y_=0;function q_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Z_(n){let t=new W_,e=X_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);let s=new O,r=new ke,o=new ke;function a(l){let h=0,d=0,u=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let f=0,x=0,M=0,g=0,m=0,b=0,w=0,v=0,N=0,L=0,D=0;l.sort(q_);for(let A=0,S=l.length;A<S;A++){let B=l[A],q=B.color,Y=B.intensity,H=B.distance,k=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)h+=q.r*Y,d+=q.g*Y,u+=q.b*Y;else if(B.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(B.sh.coefficients[X],Y);D++}else if(B.isDirectionalLight){let X=t.get(B);if(X.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let gt=B.shadow,$=e.get(B);$.shadowIntensity=gt.intensity,$.shadowBias=gt.bias,$.shadowNormalBias=gt.normalBias,$.shadowRadius=gt.radius,$.shadowMapSize=gt.mapSize,i.directionalShadow[f]=$,i.directionalShadowMap[f]=k,i.directionalShadowMatrix[f]=B.shadow.matrix,b++}i.directional[f]=X,f++}else if(B.isSpotLight){let X=t.get(B);X.position.setFromMatrixPosition(B.matrixWorld),X.color.copy(q).multiplyScalar(Y),X.distance=H,X.coneCos=Math.cos(B.angle),X.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),X.decay=B.decay,i.spot[M]=X;let gt=B.shadow;if(B.map&&(i.spotLightMap[N]=B.map,N++,gt.updateMatrices(B),B.castShadow&&L++),i.spotLightMatrix[M]=gt.matrix,B.castShadow){let $=e.get(B);$.shadowIntensity=gt.intensity,$.shadowBias=gt.bias,$.shadowNormalBias=gt.normalBias,$.shadowRadius=gt.radius,$.shadowMapSize=gt.mapSize,i.spotShadow[M]=$,i.spotShadowMap[M]=k,v++}M++}else if(B.isRectAreaLight){let X=t.get(B);X.color.copy(q).multiplyScalar(Y),X.halfWidth.set(B.width*.5,0,0),X.halfHeight.set(0,B.height*.5,0),i.rectArea[g]=X,g++}else if(B.isPointLight){let X=t.get(B);if(X.color.copy(B.color).multiplyScalar(B.intensity),X.distance=B.distance,X.decay=B.decay,B.castShadow){let gt=B.shadow,$=e.get(B);$.shadowIntensity=gt.intensity,$.shadowBias=gt.bias,$.shadowNormalBias=gt.normalBias,$.shadowRadius=gt.radius,$.shadowMapSize=gt.mapSize,$.shadowCameraNear=gt.camera.near,$.shadowCameraFar=gt.camera.far,i.pointShadow[x]=$,i.pointShadowMap[x]=k,i.pointShadowMatrix[x]=B.shadow.matrix,w++}i.point[x]=X,x++}else if(B.isHemisphereLight){let X=t.get(B);X.skyColor.copy(B.color).multiplyScalar(Y),X.groundColor.copy(B.groundColor).multiplyScalar(Y),i.hemi[m]=X,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=kt.LTC_FLOAT_1,i.rectAreaLTC2=kt.LTC_FLOAT_2):(i.rectAreaLTC1=kt.LTC_HALF_1,i.rectAreaLTC2=kt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let z=i.hash;(z.directionalLength!==f||z.pointLength!==x||z.spotLength!==M||z.rectAreaLength!==g||z.hemiLength!==m||z.numDirectionalShadows!==b||z.numPointShadows!==w||z.numSpotShadows!==v||z.numSpotMaps!==N||z.numLightProbes!==D)&&(i.directional.length=f,i.spot.length=M,i.rectArea.length=g,i.point.length=x,i.hemi.length=m,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=v+N-L,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=D,z.directionalLength=f,z.pointLength=x,z.spotLength=M,z.rectAreaLength=g,z.hemiLength=m,z.numDirectionalShadows=b,z.numPointShadows=w,z.numSpotShadows=v,z.numSpotMaps=N,z.numLightProbes=D,i.version=Y_++)}function c(l,h){let d=0,u=0,f=0,x=0,M=0,g=h.matrixWorldInverse;for(let m=0,b=l.length;m<b;m++){let w=l[m];if(w.isDirectionalLight){let v=i.directional[d];v.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(w.isSpotLight){let v=i.spot[f];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),f++}else if(w.isRectAreaLight){let v=i.rectArea[x];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(w.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(w.width*.5,0,0),v.halfHeight.set(0,w.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),x++}else if(w.isPointLight){let v=i.point[u];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(g),u++}else if(w.isHemisphereLight){let v=i.hemi[M];v.direction.setFromMatrixPosition(w.matrixWorld),v.direction.transformDirection(g),M++}}}return{setup:a,setupView:c,state:i}}function Sf(n){let t=new Z_(n),e=[],i=[];function s(h){l.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function K_(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Sf(n),t.set(s,[a])):r>=o.length?(a=new Sf(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var th=class extends ki{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=kp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},eh=class extends ki{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},J_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$_=`uniform sampler2D shadow_pass;
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
}`;function j_(n,t,e){let i=new mo,s=new At,r=new At,o=new Oe,a=new th({depthPacking:Vp}),c=new eh,l={},h=e.maxTextureSize,d={[ss]:Rn,[Rn]:ss,[An]:An},u=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:J_,fragmentShader:$_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let x=new He;x.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Dt(x,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kf;let m=this.type;this.render=function(L,D,z){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;let A=n.getRenderTarget(),S=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),q=n.state;q.setBlending(ns),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let Y=m!==Ui&&this.type===Ui,H=m===Ui&&this.type!==Ui;for(let k=0,X=L.length;k<X;k++){let gt=L[k],$=gt.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",gt,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let ht=$.getFrameExtents();if(s.multiply(ht),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,$.mapSize.y=r.y)),$.map===null||Y===!0||H===!0){let lt=this.type!==Ui?{minFilter:sn,magFilter:sn}:{};$.map!==null&&$.map.dispose(),$.map=new Hi(s.x,s.y,lt),$.map.texture.name=gt.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();let Rt=$.getViewportCount();for(let lt=0;lt<Rt;lt++){let ne=$.getViewport(lt);o.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),q.viewport(o),$.updateMatrices(gt,lt),i=$.getFrustum(),v(D,z,$.camera,gt,this.type)}$.isPointLightShadow!==!0&&this.type===Ui&&b($,z),$.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(A,S,B)};function b(L,D){let z=t.update(M);u.defines.VSM_SAMPLES!==L.blurSamples&&(u.defines.VSM_SAMPLES=L.blurSamples,f.defines.VSM_SAMPLES=L.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Hi(s.x,s.y)),u.uniforms.shadow_pass.value=L.map.texture,u.uniforms.resolution.value=L.mapSize,u.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(D,null,z,u,M,null),f.uniforms.shadow_pass.value=L.mapPass.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(D,null,z,f,M,null)}function w(L,D,z,A){let S=null,B=z.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(B!==void 0)S=B;else if(S=z.isPointLight===!0?c:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let q=S.uuid,Y=D.uuid,H=l[q];H===void 0&&(H={},l[q]=H);let k=H[Y];k===void 0&&(k=S.clone(),H[Y]=k,D.addEventListener("dispose",N)),S=k}if(S.visible=D.visible,S.wireframe=D.wireframe,A===Ui?S.side=D.shadowSide!==null?D.shadowSide:D.side:S.side=D.shadowSide!==null?D.shadowSide:d[D.side],S.alphaMap=D.alphaMap,S.alphaTest=D.alphaTest,S.map=D.map,S.clipShadows=D.clipShadows,S.clippingPlanes=D.clippingPlanes,S.clipIntersection=D.clipIntersection,S.displacementMap=D.displacementMap,S.displacementScale=D.displacementScale,S.displacementBias=D.displacementBias,S.wireframeLinewidth=D.wireframeLinewidth,S.linewidth=D.linewidth,z.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let q=n.properties.get(S);q.light=z}return S}function v(L,D,z,A,S){if(L.visible===!1)return;if(L.layers.test(D.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&S===Ui)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,L.matrixWorld);let Y=t.update(L),H=L.material;if(Array.isArray(H)){let k=Y.groups;for(let X=0,gt=k.length;X<gt;X++){let $=k[X],ht=H[$.materialIndex];if(ht&&ht.visible){let Rt=w(L,ht,A,S);L.onBeforeShadow(n,L,D,z,Y,Rt,$),n.renderBufferDirect(z,null,Y,Rt,L,$),L.onAfterShadow(n,L,D,z,Y,Rt,$)}}}else if(H.visible){let k=w(L,H,A,S);L.onBeforeShadow(n,L,D,z,Y,k,null),n.renderBufferDirect(z,null,Y,k,L,null),L.onAfterShadow(n,L,D,z,Y,k,null)}}let q=L.children;for(let Y=0,H=q.length;Y<H;Y++)v(q[Y],D,z,A,S)}function N(L){L.target.removeEventListener("dispose",N);for(let z in l){let A=l[z],S=L.target.uuid;S in A&&(A[S].dispose(),delete A[S])}}}var Q_={[rl]:ol,[al]:hl,[cl]:ul,[Mr]:ll,[ol]:rl,[hl]:al,[ul]:cl,[ll]:Mr};function ty(n,t){function e(){let W=!1,Tt=new Oe,ct=null,vt=new Oe(0,0,0,0);return{setMask:function(Wt){ct!==Wt&&!W&&(n.colorMask(Wt,Wt,Wt,Wt),ct=Wt)},setLocked:function(Wt){W=Wt},setClear:function(Wt,Gt,pe,Ce,rn){rn===!0&&(Wt*=Ce,Gt*=Ce,pe*=Ce),Tt.set(Wt,Gt,pe,Ce),vt.equals(Tt)===!1&&(n.clearColor(Wt,Gt,pe,Ce),vt.copy(Tt))},reset:function(){W=!1,ct=null,vt.set(-1,0,0,0)}}}function i(){let W=!1,Tt=!1,ct=null,vt=null,Wt=null;return{setReversed:function(Gt){if(Tt!==Gt){let pe=t.get("EXT_clip_control");Tt?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT);let Ce=Wt;Wt=null,this.setClear(Ce)}Tt=Gt},getReversed:function(){return Tt},setTest:function(Gt){Gt?Ut(n.DEPTH_TEST):zt(n.DEPTH_TEST)},setMask:function(Gt){ct!==Gt&&!W&&(n.depthMask(Gt),ct=Gt)},setFunc:function(Gt){if(Tt&&(Gt=Q_[Gt]),vt!==Gt){switch(Gt){case rl:n.depthFunc(n.NEVER);break;case ol:n.depthFunc(n.ALWAYS);break;case al:n.depthFunc(n.LESS);break;case Mr:n.depthFunc(n.LEQUAL);break;case cl:n.depthFunc(n.EQUAL);break;case ll:n.depthFunc(n.GEQUAL);break;case hl:n.depthFunc(n.GREATER);break;case ul:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}vt=Gt}},setLocked:function(Gt){W=Gt},setClear:function(Gt){Wt!==Gt&&(Tt&&(Gt=1-Gt),n.clearDepth(Gt),Wt=Gt)},reset:function(){W=!1,ct=null,vt=null,Wt=null,Tt=!1}}}function s(){let W=!1,Tt=null,ct=null,vt=null,Wt=null,Gt=null,pe=null,Ce=null,rn=null;return{setTest:function(Ee){W||(Ee?Ut(n.STENCIL_TEST):zt(n.STENCIL_TEST))},setMask:function(Ee){Tt!==Ee&&!W&&(n.stencilMask(Ee),Tt=Ee)},setFunc:function(Ee,Gn,ii){(ct!==Ee||vt!==Gn||Wt!==ii)&&(n.stencilFunc(Ee,Gn,ii),ct=Ee,vt=Gn,Wt=ii)},setOp:function(Ee,Gn,ii){(Gt!==Ee||pe!==Gn||Ce!==ii)&&(n.stencilOp(Ee,Gn,ii),Gt=Ee,pe=Gn,Ce=ii)},setLocked:function(Ee){W=Ee},setClear:function(Ee){rn!==Ee&&(n.clearStencil(Ee),rn=Ee)},reset:function(){W=!1,Tt=null,ct=null,vt=null,Wt=null,Gt=null,pe=null,Ce=null,rn=null}}}let r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap,h={},d={},u=new WeakMap,f=[],x=null,M=!1,g=null,m=null,b=null,w=null,v=null,N=null,L=null,D=new ce(0,0,0),z=0,A=!1,S=null,B=null,q=null,Y=null,H=null,k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,gt=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(gt=parseFloat(/^WebGL (\d)/.exec($)[1]),X=gt>=1):$.indexOf("OpenGL ES")!==-1&&(gt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=gt>=2);let ht=null,Rt={},lt=n.getParameter(n.SCISSOR_BOX),ne=n.getParameter(n.VIEWPORT),re=new Oe().fromArray(lt),dt=new Oe().fromArray(ne);function Ct(W,Tt,ct,vt){let Wt=new Uint8Array(4),Gt=n.createTexture();n.bindTexture(W,Gt),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let pe=0;pe<ct;pe++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(Tt,0,n.RGBA,1,1,vt,0,n.RGBA,n.UNSIGNED_BYTE,Wt):n.texImage2D(Tt+pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Wt);return Gt}let Yt={};Yt[n.TEXTURE_2D]=Ct(n.TEXTURE_2D,n.TEXTURE_2D,1),Yt[n.TEXTURE_CUBE_MAP]=Ct(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Yt[n.TEXTURE_2D_ARRAY]=Ct(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Yt[n.TEXTURE_3D]=Ct(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Ut(n.DEPTH_TEST),o.setFunc(Mr),wt(!1),Xt(wu),Ut(n.CULL_FACE),F(ns);function Ut(W){h[W]!==!0&&(n.enable(W),h[W]=!0)}function zt(W){h[W]!==!1&&(n.disable(W),h[W]=!1)}function he(W,Tt){return d[W]!==Tt?(n.bindFramebuffer(W,Tt),d[W]=Tt,W===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Tt),W===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Tt),!0):!1}function Qt(W,Tt){let ct=f,vt=!1;if(W){ct=u.get(Tt),ct===void 0&&(ct=[],u.set(Tt,ct));let Wt=W.textures;if(ct.length!==Wt.length||ct[0]!==n.COLOR_ATTACHMENT0){for(let Gt=0,pe=Wt.length;Gt<pe;Gt++)ct[Gt]=n.COLOR_ATTACHMENT0+Gt;ct.length=Wt.length,vt=!0}}else ct[0]!==n.BACK&&(ct[0]=n.BACK,vt=!0);vt&&n.drawBuffers(ct)}function ue(W){return x!==W?(n.useProgram(W),x=W,!0):!1}let _t={[Cs]:n.FUNC_ADD,[pp]:n.FUNC_SUBTRACT,[mp]:n.FUNC_REVERSE_SUBTRACT};_t[gp]=n.MIN,_t[xp]=n.MAX;let St={[_p]:n.ZERO,[yp]:n.ONE,[Mp]:n.SRC_COLOR,[il]:n.SRC_ALPHA,[Tp]:n.SRC_ALPHA_SATURATE,[Sp]:n.DST_COLOR,[Ep]:n.DST_ALPHA,[vp]:n.ONE_MINUS_SRC_COLOR,[sl]:n.ONE_MINUS_SRC_ALPHA,[wp]:n.ONE_MINUS_DST_COLOR,[bp]:n.ONE_MINUS_DST_ALPHA,[Ap]:n.CONSTANT_COLOR,[Rp]:n.ONE_MINUS_CONSTANT_COLOR,[Cp]:n.CONSTANT_ALPHA,[Pp]:n.ONE_MINUS_CONSTANT_ALPHA};function F(W,Tt,ct,vt,Wt,Gt,pe,Ce,rn,Ee){if(W===ns){M===!0&&(zt(n.BLEND),M=!1);return}if(M===!1&&(Ut(n.BLEND),M=!0),W!==dp){if(W!==g||Ee!==A){if((m!==Cs||v!==Cs)&&(n.blendEquation(n.FUNC_ADD),m=Cs,v=Cs),Ee)switch(W){case gr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tu:n.blendFunc(n.ONE,n.ONE);break;case Au:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ru:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case gr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Au:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ru:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}b=null,w=null,N=null,L=null,D.set(0,0,0),z=0,g=W,A=Ee}return}Wt=Wt||Tt,Gt=Gt||ct,pe=pe||vt,(Tt!==m||Wt!==v)&&(n.blendEquationSeparate(_t[Tt],_t[Wt]),m=Tt,v=Wt),(ct!==b||vt!==w||Gt!==N||pe!==L)&&(n.blendFuncSeparate(St[ct],St[vt],St[Gt],St[pe]),b=ct,w=vt,N=Gt,L=pe),(Ce.equals(D)===!1||rn!==z)&&(n.blendColor(Ce.r,Ce.g,Ce.b,rn),D.copy(Ce),z=rn),g=W,A=!1}function qt(W,Tt){W.side===An?zt(n.CULL_FACE):Ut(n.CULL_FACE);let ct=W.side===Rn;Tt&&(ct=!ct),wt(ct),W.blending===gr&&W.transparent===!1?F(ns):F(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let vt=W.stencilWrite;a.setTest(vt),vt&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),oe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Ut(n.SAMPLE_ALPHA_TO_COVERAGE):zt(n.SAMPLE_ALPHA_TO_COVERAGE)}function wt(W){S!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),S=W)}function Xt(W){W!==up?(Ut(n.CULL_FACE),W!==B&&(W===wu?n.cullFace(n.BACK):W===fp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):zt(n.CULL_FACE),B=W}function Pt(W){W!==q&&(X&&n.lineWidth(W),q=W)}function oe(W,Tt,ct){W?(Ut(n.POLYGON_OFFSET_FILL),(Y!==Tt||H!==ct)&&(n.polygonOffset(Tt,ct),Y=Tt,H=ct)):zt(n.POLYGON_OFFSET_FILL)}function Bt(W){W?Ut(n.SCISSOR_TEST):zt(n.SCISSOR_TEST)}function P(W){W===void 0&&(W=n.TEXTURE0+k-1),ht!==W&&(n.activeTexture(W),ht=W)}function T(W,Tt,ct){ct===void 0&&(ht===null?ct=n.TEXTURE0+k-1:ct=ht);let vt=Rt[ct];vt===void 0&&(vt={type:void 0,texture:void 0},Rt[ct]=vt),(vt.type!==W||vt.texture!==Tt)&&(ht!==ct&&(n.activeTexture(ct),ht=ct),n.bindTexture(W,Tt||Yt[W]),vt.type=W,vt.texture=Tt)}function et(){let W=Rt[ht];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function pt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Et(){try{n.compressedTexImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function xt(){try{n.texSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Z(){try{n.texSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Q(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function j(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function It(){try{n.texStorage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ut(){try{n.texStorage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function rt(){try{n.texImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Mt(){try{n.texImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function bt(W){re.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),re.copy(W))}function at(W){dt.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),dt.copy(W))}function Zt(W,Tt){let ct=l.get(Tt);ct===void 0&&(ct=new WeakMap,l.set(Tt,ct));let vt=ct.get(W);vt===void 0&&(vt=n.getUniformBlockIndex(Tt,W.name),ct.set(W,vt))}function le(W,Tt){let vt=l.get(Tt).get(W);c.get(Tt)!==vt&&(n.uniformBlockBinding(Tt,vt,W.__bindingPointIndex),c.set(Tt,vt))}function ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ht=null,Rt={},d={},u=new WeakMap,f=[],x=null,M=!1,g=null,m=null,b=null,w=null,v=null,N=null,L=null,D=new ce(0,0,0),z=0,A=!1,S=null,B=null,q=null,Y=null,H=null,re.set(0,0,n.canvas.width,n.canvas.height),dt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Ut,disable:zt,bindFramebuffer:he,drawBuffers:Qt,useProgram:ue,setBlending:F,setMaterial:qt,setFlipSided:wt,setCullFace:Xt,setLineWidth:Pt,setPolygonOffset:oe,setScissorTest:Bt,activeTexture:P,bindTexture:T,unbindTexture:et,compressedTexImage2D:pt,compressedTexImage3D:Et,texImage2D:rt,texImage3D:Mt,updateUBOMapping:Zt,uniformBlockBinding:le,texStorage2D:It,texStorage3D:ut,texSubImage2D:xt,texSubImage3D:Z,compressedTexSubImage2D:Q,compressedTexSubImage3D:j,scissor:bt,viewport:at,reset:ve}}function wf(n,t,e,i){let s=ey(i);switch(e){case Yf:return n*t;case Zf:return n*t;case Kf:return n*t*2;case Jf:return n*t/s.components*s.byteLength;case Dh:return n*t/s.components*s.byteLength;case $f:return n*t*2/s.components*s.byteLength;case Uh:return n*t*2/s.components*s.byteLength;case qf:return n*t*3/s.components*s.byteLength;case ui:return n*t*4/s.components*s.byteLength;case Nh:return n*t*4/s.components*s.byteLength;case _a:case ya:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ma:case va:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case gl:case _l:return Math.max(n,16)*Math.max(t,8)/4;case ml:case xl:return Math.max(n,8)*Math.max(t,8)/2;case yl:case Ml:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case vl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case El:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case bl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case wl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Al:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Pl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Il:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Dl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ul:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Nl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ea:case Ol:case Fl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case jf:case zl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Bl:case Hl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ey(n){switch(n){case zi:case Gf:return{byteLength:1,components:1};case ho:case Wf:case Uo:return{byteLength:2,components:1};case Ih:case Lh:return{byteLength:2,components:4};case Ds:case Ph:case Ni:return{byteLength:4,components:1};case Xf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function ny(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new At,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,T){return f?new OffscreenCanvas(P,T):fo("canvas")}function M(P,T,et){let pt=1,Et=Bt(P);if((Et.width>et||Et.height>et)&&(pt=et/Math.max(Et.width,Et.height)),pt<1)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap||typeof VideoFrame!="undefined"&&P instanceof VideoFrame){let xt=Math.floor(pt*Et.width),Z=Math.floor(pt*Et.height);d===void 0&&(d=x(xt,Z));let Q=T?x(xt,Z):d;return Q.width=xt,Q.height=Z,Q.getContext("2d").drawImage(P,0,0,xt,Z),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+xt+"x"+Z+")."),Q}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),P;return P}function g(P){return P.generateMipmaps}function m(P){n.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(P,T,et,pt,Et=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let xt=T;if(T===n.RED&&(et===n.FLOAT&&(xt=n.R32F),et===n.HALF_FLOAT&&(xt=n.R16F),et===n.UNSIGNED_BYTE&&(xt=n.R8)),T===n.RED_INTEGER&&(et===n.UNSIGNED_BYTE&&(xt=n.R8UI),et===n.UNSIGNED_SHORT&&(xt=n.R16UI),et===n.UNSIGNED_INT&&(xt=n.R32UI),et===n.BYTE&&(xt=n.R8I),et===n.SHORT&&(xt=n.R16I),et===n.INT&&(xt=n.R32I)),T===n.RG&&(et===n.FLOAT&&(xt=n.RG32F),et===n.HALF_FLOAT&&(xt=n.RG16F),et===n.UNSIGNED_BYTE&&(xt=n.RG8)),T===n.RG_INTEGER&&(et===n.UNSIGNED_BYTE&&(xt=n.RG8UI),et===n.UNSIGNED_SHORT&&(xt=n.RG16UI),et===n.UNSIGNED_INT&&(xt=n.RG32UI),et===n.BYTE&&(xt=n.RG8I),et===n.SHORT&&(xt=n.RG16I),et===n.INT&&(xt=n.RG32I)),T===n.RGB_INTEGER&&(et===n.UNSIGNED_BYTE&&(xt=n.RGB8UI),et===n.UNSIGNED_SHORT&&(xt=n.RGB16UI),et===n.UNSIGNED_INT&&(xt=n.RGB32UI),et===n.BYTE&&(xt=n.RGB8I),et===n.SHORT&&(xt=n.RGB16I),et===n.INT&&(xt=n.RGB32I)),T===n.RGBA_INTEGER&&(et===n.UNSIGNED_BYTE&&(xt=n.RGBA8UI),et===n.UNSIGNED_SHORT&&(xt=n.RGBA16UI),et===n.UNSIGNED_INT&&(xt=n.RGBA32UI),et===n.BYTE&&(xt=n.RGBA8I),et===n.SHORT&&(xt=n.RGBA16I),et===n.INT&&(xt=n.RGBA32I)),T===n.RGB&&et===n.UNSIGNED_INT_5_9_9_9_REV&&(xt=n.RGB9_E5),T===n.RGBA){let Z=Et?Ka:we.getTransfer(pt);et===n.FLOAT&&(xt=n.RGBA32F),et===n.HALF_FLOAT&&(xt=n.RGBA16F),et===n.UNSIGNED_BYTE&&(xt=Z===Ne?n.SRGB8_ALPHA8:n.RGBA8),et===n.UNSIGNED_SHORT_4_4_4_4&&(xt=n.RGBA4),et===n.UNSIGNED_SHORT_5_5_5_1&&(xt=n.RGB5_A1)}return(xt===n.R16F||xt===n.R32F||xt===n.RG16F||xt===n.RG32F||xt===n.RGBA16F||xt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),xt}function v(P,T){let et;return P?T===null||T===Ds||T===br?et=n.DEPTH24_STENCIL8:T===Ni?et=n.DEPTH32F_STENCIL8:T===ho&&(et=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ds||T===br?et=n.DEPTH_COMPONENT24:T===Ni?et=n.DEPTH_COMPONENT32F:T===ho&&(et=n.DEPTH_COMPONENT16),et}function N(P,T){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==sn&&P.minFilter!==_i?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function L(P){let T=P.target;T.removeEventListener("dispose",L),z(T),T.isVideoTexture&&h.delete(T)}function D(P){let T=P.target;T.removeEventListener("dispose",D),S(T)}function z(P){let T=i.get(P);if(T.__webglInit===void 0)return;let et=P.source,pt=u.get(et);if(pt){let Et=pt[T.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&A(P),Object.keys(pt).length===0&&u.delete(et)}i.remove(P)}function A(P){let T=i.get(P);n.deleteTexture(T.__webglTexture);let et=P.source,pt=u.get(et);delete pt[T.__cacheKey],o.memory.textures--}function S(P){let T=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(T.__webglFramebuffer[pt]))for(let Et=0;Et<T.__webglFramebuffer[pt].length;Et++)n.deleteFramebuffer(T.__webglFramebuffer[pt][Et]);else n.deleteFramebuffer(T.__webglFramebuffer[pt]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[pt])}else{if(Array.isArray(T.__webglFramebuffer))for(let pt=0;pt<T.__webglFramebuffer.length;pt++)n.deleteFramebuffer(T.__webglFramebuffer[pt]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pt=0;pt<T.__webglColorRenderbuffer.length;pt++)T.__webglColorRenderbuffer[pt]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[pt]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let et=P.textures;for(let pt=0,Et=et.length;pt<Et;pt++){let xt=i.get(et[pt]);xt.__webglTexture&&(n.deleteTexture(xt.__webglTexture),o.memory.textures--),i.remove(et[pt])}i.remove(P)}let B=0;function q(){B=0}function Y(){let P=B;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),B+=1,P}function H(P){let T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function k(P,T){let et=i.get(P);if(P.isVideoTexture&&Pt(P),P.isRenderTargetTexture===!1&&P.version>0&&et.__version!==P.version){let pt=P.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(et,P,T);return}}e.bindTexture(n.TEXTURE_2D,et.__webglTexture,n.TEXTURE0+T)}function X(P,T){let et=i.get(P);if(P.version>0&&et.__version!==P.version){dt(et,P,T);return}e.bindTexture(n.TEXTURE_2D_ARRAY,et.__webglTexture,n.TEXTURE0+T)}function gt(P,T){let et=i.get(P);if(P.version>0&&et.__version!==P.version){dt(et,P,T);return}e.bindTexture(n.TEXTURE_3D,et.__webglTexture,n.TEXTURE0+T)}function $(P,T){let et=i.get(P);if(P.version>0&&et.__version!==P.version){Ct(et,P,T);return}e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture,n.TEXTURE0+T)}let ht={[lo]:n.REPEAT,[Is]:n.CLAMP_TO_EDGE,[pl]:n.MIRRORED_REPEAT},Rt={[sn]:n.NEAREST,[Hp]:n.NEAREST_MIPMAP_NEAREST,[Vo]:n.NEAREST_MIPMAP_LINEAR,[_i]:n.LINEAR,[bc]:n.LINEAR_MIPMAP_NEAREST,[Ls]:n.LINEAR_MIPMAP_LINEAR},lt={[Wp]:n.NEVER,[Jp]:n.ALWAYS,[Xp]:n.LESS,[td]:n.LEQUAL,[Yp]:n.EQUAL,[Kp]:n.GEQUAL,[qp]:n.GREATER,[Zp]:n.NOTEQUAL};function ne(P,T){if(T.type===Ni&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===_i||T.magFilter===bc||T.magFilter===Vo||T.magFilter===Ls||T.minFilter===_i||T.minFilter===bc||T.minFilter===Vo||T.minFilter===Ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,ht[T.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,ht[T.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,ht[T.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Rt[T.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Rt[T.minFilter]),T.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,lt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===sn||T.minFilter!==Vo&&T.minFilter!==Ls||T.type===Ni&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let et=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function re(P,T){let et=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",L));let pt=T.source,Et=u.get(pt);Et===void 0&&(Et={},u.set(pt,Et));let xt=H(T);if(xt!==P.__cacheKey){Et[xt]===void 0&&(Et[xt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,et=!0),Et[xt].usedTimes++;let Z=Et[P.__cacheKey];Z!==void 0&&(Et[P.__cacheKey].usedTimes--,Z.usedTimes===0&&A(T)),P.__cacheKey=xt,P.__webglTexture=Et[xt].texture}return et}function dt(P,T,et){let pt=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pt=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pt=n.TEXTURE_3D);let Et=re(P,T),xt=T.source;e.bindTexture(pt,P.__webglTexture,n.TEXTURE0+et);let Z=i.get(xt);if(xt.version!==Z.__version||Et===!0){e.activeTexture(n.TEXTURE0+et);let Q=we.getPrimaries(we.workingColorSpace),j=T.colorSpace===ts?null:we.getPrimaries(T.colorSpace),It=T.colorSpace===ts||Q===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let ut=M(T.image,!1,s.maxTextureSize);ut=oe(T,ut);let rt=r.convert(T.format,T.colorSpace),Mt=r.convert(T.type),bt=w(T.internalFormat,rt,Mt,T.colorSpace,T.isVideoTexture);ne(pt,T);let at,Zt=T.mipmaps,le=T.isVideoTexture!==!0,ve=Z.__version===void 0||Et===!0,W=xt.dataReady,Tt=N(T,ut);if(T.isDepthTexture)bt=v(T.format===Sr,T.type),ve&&(le?e.texStorage2D(n.TEXTURE_2D,1,bt,ut.width,ut.height):e.texImage2D(n.TEXTURE_2D,0,bt,ut.width,ut.height,0,rt,Mt,null));else if(T.isDataTexture)if(Zt.length>0){le&&ve&&e.texStorage2D(n.TEXTURE_2D,Tt,bt,Zt[0].width,Zt[0].height);for(let ct=0,vt=Zt.length;ct<vt;ct++)at=Zt[ct],le?W&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,at.width,at.height,rt,Mt,at.data):e.texImage2D(n.TEXTURE_2D,ct,bt,at.width,at.height,0,rt,Mt,at.data);T.generateMipmaps=!1}else le?(ve&&e.texStorage2D(n.TEXTURE_2D,Tt,bt,ut.width,ut.height),W&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ut.width,ut.height,rt,Mt,ut.data)):e.texImage2D(n.TEXTURE_2D,0,bt,ut.width,ut.height,0,rt,Mt,ut.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){le&&ve&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Tt,bt,Zt[0].width,Zt[0].height,ut.depth);for(let ct=0,vt=Zt.length;ct<vt;ct++)if(at=Zt[ct],T.format!==ui)if(rt!==null)if(le){if(W)if(T.layerUpdates.size>0){let Wt=wf(at.width,at.height,T.format,T.type);for(let Gt of T.layerUpdates){let pe=at.data.subarray(Gt*Wt/at.data.BYTES_PER_ELEMENT,(Gt+1)*Wt/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,Gt,at.width,at.height,1,rt,pe)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,at.width,at.height,ut.depth,rt,at.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ct,bt,at.width,at.height,ut.depth,0,at.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?W&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,at.width,at.height,ut.depth,rt,Mt,at.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ct,bt,at.width,at.height,ut.depth,0,rt,Mt,at.data)}else{le&&ve&&e.texStorage2D(n.TEXTURE_2D,Tt,bt,Zt[0].width,Zt[0].height);for(let ct=0,vt=Zt.length;ct<vt;ct++)at=Zt[ct],T.format!==ui?rt!==null?le?W&&e.compressedTexSubImage2D(n.TEXTURE_2D,ct,0,0,at.width,at.height,rt,at.data):e.compressedTexImage2D(n.TEXTURE_2D,ct,bt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?W&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,at.width,at.height,rt,Mt,at.data):e.texImage2D(n.TEXTURE_2D,ct,bt,at.width,at.height,0,rt,Mt,at.data)}else if(T.isDataArrayTexture)if(le){if(ve&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Tt,bt,ut.width,ut.height,ut.depth),W)if(T.layerUpdates.size>0){let ct=wf(ut.width,ut.height,T.format,T.type);for(let vt of T.layerUpdates){let Wt=ut.data.subarray(vt*ct/ut.data.BYTES_PER_ELEMENT,(vt+1)*ct/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,vt,ut.width,ut.height,1,rt,Mt,Wt)}T.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,rt,Mt,ut.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,bt,ut.width,ut.height,ut.depth,0,rt,Mt,ut.data);else if(T.isData3DTexture)le?(ve&&e.texStorage3D(n.TEXTURE_3D,Tt,bt,ut.width,ut.height,ut.depth),W&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,rt,Mt,ut.data)):e.texImage3D(n.TEXTURE_3D,0,bt,ut.width,ut.height,ut.depth,0,rt,Mt,ut.data);else if(T.isFramebufferTexture){if(ve)if(le)e.texStorage2D(n.TEXTURE_2D,Tt,bt,ut.width,ut.height);else{let ct=ut.width,vt=ut.height;for(let Wt=0;Wt<Tt;Wt++)e.texImage2D(n.TEXTURE_2D,Wt,bt,ct,vt,0,rt,Mt,null),ct>>=1,vt>>=1}}else if(Zt.length>0){if(le&&ve){let ct=Bt(Zt[0]);e.texStorage2D(n.TEXTURE_2D,Tt,bt,ct.width,ct.height)}for(let ct=0,vt=Zt.length;ct<vt;ct++)at=Zt[ct],le?W&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,rt,Mt,at):e.texImage2D(n.TEXTURE_2D,ct,bt,rt,Mt,at);T.generateMipmaps=!1}else if(le){if(ve){let ct=Bt(ut);e.texStorage2D(n.TEXTURE_2D,Tt,bt,ct.width,ct.height)}W&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,rt,Mt,ut)}else e.texImage2D(n.TEXTURE_2D,0,bt,rt,Mt,ut);g(T)&&m(pt),Z.__version=xt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Ct(P,T,et){if(T.image.length!==6)return;let pt=re(P,T),Et=T.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+et);let xt=i.get(Et);if(Et.version!==xt.__version||pt===!0){e.activeTexture(n.TEXTURE0+et);let Z=we.getPrimaries(we.workingColorSpace),Q=T.colorSpace===ts?null:we.getPrimaries(T.colorSpace),j=T.colorSpace===ts||Z===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let It=T.isCompressedTexture||T.image[0].isCompressedTexture,ut=T.image[0]&&T.image[0].isDataTexture,rt=[];for(let vt=0;vt<6;vt++)!It&&!ut?rt[vt]=M(T.image[vt],!0,s.maxCubemapSize):rt[vt]=ut?T.image[vt].image:T.image[vt],rt[vt]=oe(T,rt[vt]);let Mt=rt[0],bt=r.convert(T.format,T.colorSpace),at=r.convert(T.type),Zt=w(T.internalFormat,bt,at,T.colorSpace),le=T.isVideoTexture!==!0,ve=xt.__version===void 0||pt===!0,W=Et.dataReady,Tt=N(T,Mt);ne(n.TEXTURE_CUBE_MAP,T);let ct;if(It){le&&ve&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Tt,Zt,Mt.width,Mt.height);for(let vt=0;vt<6;vt++){ct=rt[vt].mipmaps;for(let Wt=0;Wt<ct.length;Wt++){let Gt=ct[Wt];T.format!==ui?bt!==null?le?W&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt,0,0,Gt.width,Gt.height,bt,Gt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt,Zt,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):le?W&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt,0,0,Gt.width,Gt.height,bt,at,Gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt,Zt,Gt.width,Gt.height,0,bt,at,Gt.data)}}}else{if(ct=T.mipmaps,le&&ve){ct.length>0&&Tt++;let vt=Bt(rt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Tt,Zt,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(ut){le?W&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,rt[vt].width,rt[vt].height,bt,at,rt[vt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Zt,rt[vt].width,rt[vt].height,0,bt,at,rt[vt].data);for(let Wt=0;Wt<ct.length;Wt++){let pe=ct[Wt].image[vt].image;le?W&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt+1,0,0,pe.width,pe.height,bt,at,pe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt+1,Zt,pe.width,pe.height,0,bt,at,pe.data)}}else{le?W&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,bt,at,rt[vt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Zt,bt,at,rt[vt]);for(let Wt=0;Wt<ct.length;Wt++){let Gt=ct[Wt];le?W&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt+1,0,0,bt,at,Gt.image[vt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt+1,Zt,bt,at,Gt.image[vt])}}}g(T)&&m(n.TEXTURE_CUBE_MAP),xt.__version=Et.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Yt(P,T,et,pt,Et,xt){let Z=r.convert(et.format,et.colorSpace),Q=r.convert(et.type),j=w(et.internalFormat,Z,Q,et.colorSpace),It=i.get(T),ut=i.get(et);if(ut.__renderTarget=T,!It.__hasExternalTextures){let rt=Math.max(1,T.width>>xt),Mt=Math.max(1,T.height>>xt);Et===n.TEXTURE_3D||Et===n.TEXTURE_2D_ARRAY?e.texImage3D(Et,xt,j,rt,Mt,T.depth,0,Z,Q,null):e.texImage2D(Et,xt,j,rt,Mt,0,Z,Q,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),Xt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pt,Et,ut.__webglTexture,0,wt(T)):(Et===n.TEXTURE_2D||Et>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,pt,Et,ut.__webglTexture,xt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ut(P,T,et){if(n.bindRenderbuffer(n.RENDERBUFFER,P),T.depthBuffer){let pt=T.depthTexture,Et=pt&&pt.isDepthTexture?pt.type:null,xt=v(T.stencilBuffer,Et),Z=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=wt(T);Xt(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,xt,T.width,T.height):et?n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,xt,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,xt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,P)}else{let pt=T.textures;for(let Et=0;Et<pt.length;Et++){let xt=pt[Et],Z=r.convert(xt.format,xt.colorSpace),Q=r.convert(xt.type),j=w(xt.internalFormat,Z,Q,xt.colorSpace),It=wt(T);et&&Xt(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,It,j,T.width,T.height):Xt(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,It,j,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,j,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function zt(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let pt=i.get(T.depthTexture);pt.__renderTarget=T,(!pt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),k(T.depthTexture,0);let Et=pt.__webglTexture,xt=wt(T);if(T.depthTexture.format===xr)Xt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Et,0,xt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Et,0);else if(T.depthTexture.format===Sr)Xt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Et,0,xt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function he(P){let T=i.get(P),et=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){let pt=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pt){let Et=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pt.removeEventListener("dispose",Et)};pt.addEventListener("dispose",Et),T.__depthDisposeCallback=Et}T.__boundDepthTexture=pt}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");zt(T.__webglFramebuffer,P)}else if(et){T.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[pt]),T.__webglDepthbuffer[pt]===void 0)T.__webglDepthbuffer[pt]=n.createRenderbuffer(),Ut(T.__webglDepthbuffer[pt],P,!1);else{let Et=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=T.__webglDepthbuffer[pt];n.bindRenderbuffer(n.RENDERBUFFER,xt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Et,n.RENDERBUFFER,xt)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),Ut(T.__webglDepthbuffer,P,!1);else{let pt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Et),n.framebufferRenderbuffer(n.FRAMEBUFFER,pt,n.RENDERBUFFER,Et)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Qt(P,T,et){let pt=i.get(P);T!==void 0&&Yt(pt.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),et!==void 0&&he(P)}function ue(P){let T=P.texture,et=i.get(P),pt=i.get(T);P.addEventListener("dispose",D);let Et=P.textures,xt=P.isWebGLCubeRenderTarget===!0,Z=Et.length>1;if(Z||(pt.__webglTexture===void 0&&(pt.__webglTexture=n.createTexture()),pt.__version=T.version,o.memory.textures++),xt){et.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer[Q]=[];for(let j=0;j<T.mipmaps.length;j++)et.__webglFramebuffer[Q][j]=n.createFramebuffer()}else et.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer=[];for(let Q=0;Q<T.mipmaps.length;Q++)et.__webglFramebuffer[Q]=n.createFramebuffer()}else et.__webglFramebuffer=n.createFramebuffer();if(Z)for(let Q=0,j=Et.length;Q<j;Q++){let It=i.get(Et[Q]);It.__webglTexture===void 0&&(It.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&Xt(P)===!1){et.__webglMultisampledFramebuffer=n.createFramebuffer(),et.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Q=0;Q<Et.length;Q++){let j=Et[Q];et.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,et.__webglColorRenderbuffer[Q]);let It=r.convert(j.format,j.colorSpace),ut=r.convert(j.type),rt=w(j.internalFormat,It,ut,j.colorSpace,P.isXRRenderTarget===!0),Mt=wt(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt,rt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,et.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(et.__webglDepthRenderbuffer=n.createRenderbuffer(),Ut(et.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(xt){e.bindTexture(n.TEXTURE_CUBE_MAP,pt.__webglTexture),ne(n.TEXTURE_CUBE_MAP,T);for(let Q=0;Q<6;Q++)if(T.mipmaps&&T.mipmaps.length>0)for(let j=0;j<T.mipmaps.length;j++)Yt(et.__webglFramebuffer[Q][j],P,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,j);else Yt(et.__webglFramebuffer[Q],P,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);g(T)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Z){for(let Q=0,j=Et.length;Q<j;Q++){let It=Et[Q],ut=i.get(It);e.bindTexture(n.TEXTURE_2D,ut.__webglTexture),ne(n.TEXTURE_2D,It),Yt(et.__webglFramebuffer,P,It,n.COLOR_ATTACHMENT0+Q,n.TEXTURE_2D,0),g(It)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let Q=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Q=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Q,pt.__webglTexture),ne(Q,T),T.mipmaps&&T.mipmaps.length>0)for(let j=0;j<T.mipmaps.length;j++)Yt(et.__webglFramebuffer[j],P,T,n.COLOR_ATTACHMENT0,Q,j);else Yt(et.__webglFramebuffer,P,T,n.COLOR_ATTACHMENT0,Q,0);g(T)&&m(Q),e.unbindTexture()}P.depthBuffer&&he(P)}function _t(P){let T=P.textures;for(let et=0,pt=T.length;et<pt;et++){let Et=T[et];if(g(Et)){let xt=b(P),Z=i.get(Et).__webglTexture;e.bindTexture(xt,Z),m(xt),e.unbindTexture()}}}let St=[],F=[];function qt(P){if(P.samples>0){if(Xt(P)===!1){let T=P.textures,et=P.width,pt=P.height,Et=n.COLOR_BUFFER_BIT,xt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=i.get(P),Q=T.length>1;if(Q)for(let j=0;j<T.length;j++)e.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Z.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Z.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Z.__webglFramebuffer);for(let j=0;j<T.length;j++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Et|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Et|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Z.__webglColorRenderbuffer[j]);let It=i.get(T[j]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,It,0)}n.blitFramebuffer(0,0,et,pt,0,0,et,pt,Et,n.NEAREST),c===!0&&(St.length=0,F.length=0,St.push(n.COLOR_ATTACHMENT0+j),P.depthBuffer&&P.resolveDepthBuffer===!1&&(St.push(xt),F.push(xt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,F)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,St))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let j=0;j<T.length;j++){e.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,Z.__webglColorRenderbuffer[j]);let It=i.get(T[j]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Z.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.TEXTURE_2D,It,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Z.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let T=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function wt(P){return Math.min(s.maxSamples,P.samples)}function Xt(P){let T=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Pt(P){let T=o.render.frame;h.get(P)!==T&&(h.set(P,T),P.update())}function oe(P,T){let et=P.colorSpace,pt=P.format,Et=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||et!==Cr&&et!==ts&&(we.getTransfer(et)===Ne?(pt!==ui||Et!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),T}function Bt(P){return typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame!="undefined"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=Y,this.resetTextureUnits=q,this.setTexture2D=k,this.setTexture2DArray=X,this.setTexture3D=gt,this.setTextureCube=$,this.rebindTextures=Qt,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=Yt,this.useMultisampledRTT=Xt}function iy(n,t){function e(i,s=ts){let r,o=we.getTransfer(s);if(i===zi)return n.UNSIGNED_BYTE;if(i===Ih)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Lh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Gf)return n.BYTE;if(i===Wf)return n.SHORT;if(i===ho)return n.UNSIGNED_SHORT;if(i===Ph)return n.INT;if(i===Ds)return n.UNSIGNED_INT;if(i===Ni)return n.FLOAT;if(i===Uo)return n.HALF_FLOAT;if(i===Yf)return n.ALPHA;if(i===qf)return n.RGB;if(i===ui)return n.RGBA;if(i===Zf)return n.LUMINANCE;if(i===Kf)return n.LUMINANCE_ALPHA;if(i===xr)return n.DEPTH_COMPONENT;if(i===Sr)return n.DEPTH_STENCIL;if(i===Jf)return n.RED;if(i===Dh)return n.RED_INTEGER;if(i===$f)return n.RG;if(i===Uh)return n.RG_INTEGER;if(i===Nh)return n.RGBA_INTEGER;if(i===_a||i===ya||i===Ma||i===va)if(o===Ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===_a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===_a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ml||i===gl||i===xl||i===_l)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_l)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yl||i===Ml||i===vl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===yl||i===Ml)return o===Ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===vl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===El||i===bl||i===Sl||i===wl||i===Tl||i===Al||i===Rl||i===Cl||i===Pl||i===Il||i===Ll||i===Dl||i===Ul||i===Nl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===El)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Al)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Il)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ll)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ul)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ea||i===Ol||i===Fl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ea)return o===Ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jf||i===zl||i===Bl||i===Hl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ea)return r.COMPRESSED_RED_RGTC1_EXT;if(i===zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===br?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var nh=class extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Kt=class extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},sy={type:"move"},ro=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let M of t.hand.values()){let g=e.getJointPose(M,i),m=this._getHandJoint(l,M);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,x=.005;l.inputState.pinching&&u>f+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sy)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Kt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},ry=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oy=`
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

}`,ih=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new Cn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ei({vertexShader:ry,fragmentShader:oy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Dt(new rs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sh=class extends Bi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,x=null,M=new ih,g=e.getContextAttributes(),m=null,b=null,w=[],v=[],N=new At,L=null,D=new pn;D.viewport=new Oe;let z=new pn;z.viewport=new Oe;let A=[D,z],S=new nh,B=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(dt){let Ct=w[dt];return Ct===void 0&&(Ct=new ro,w[dt]=Ct),Ct.getTargetRaySpace()},this.getControllerGrip=function(dt){let Ct=w[dt];return Ct===void 0&&(Ct=new ro,w[dt]=Ct),Ct.getGripSpace()},this.getHand=function(dt){let Ct=w[dt];return Ct===void 0&&(Ct=new ro,w[dt]=Ct),Ct.getHandSpace()};function Y(dt){let Ct=v.indexOf(dt.inputSource);if(Ct===-1)return;let Yt=w[Ct];Yt!==void 0&&(Yt.update(dt.inputSource,dt.frame,l||o),Yt.dispatchEvent({type:dt.type,data:dt.inputSource}))}function H(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",k);for(let dt=0;dt<w.length;dt++){let Ct=v[dt];Ct!==null&&(v[dt]=null,w[dt].disconnect(Ct))}B=null,q=null,M.reset(),t.setRenderTarget(m),f=null,u=null,d=null,s=null,b=null,re.stop(),i.isPresenting=!1,t.setPixelRatio(L),t.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(dt){r=dt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(dt){a=dt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(dt){l=dt},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(dt){if(s=dt,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",H),s.addEventListener("inputsourceschange",k),g.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(N),s.renderState.layers===void 0){let Ct={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Ct),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Hi(f.framebufferWidth,f.framebufferHeight,{format:ui,type:zi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let Ct=null,Yt=null,Ut=null;g.depth&&(Ut=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ct=g.stencil?Sr:xr,Yt=g.stencil?br:Ds);let zt={colorFormat:e.RGBA8,depthFormat:Ut,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(zt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new Hi(u.textureWidth,u.textureHeight,{format:ui,type:zi,depthTexture:new Da(u.textureWidth,u.textureHeight,Yt,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),re.setContext(s),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function k(dt){for(let Ct=0;Ct<dt.removed.length;Ct++){let Yt=dt.removed[Ct],Ut=v.indexOf(Yt);Ut>=0&&(v[Ut]=null,w[Ut].disconnect(Yt))}for(let Ct=0;Ct<dt.added.length;Ct++){let Yt=dt.added[Ct],Ut=v.indexOf(Yt);if(Ut===-1){for(let he=0;he<w.length;he++)if(he>=v.length){v.push(Yt),Ut=he;break}else if(v[he]===null){v[he]=Yt,Ut=he;break}if(Ut===-1)break}let zt=w[Ut];zt&&zt.connect(Yt)}}let X=new O,gt=new O;function $(dt,Ct,Yt){X.setFromMatrixPosition(Ct.matrixWorld),gt.setFromMatrixPosition(Yt.matrixWorld);let Ut=X.distanceTo(gt),zt=Ct.projectionMatrix.elements,he=Yt.projectionMatrix.elements,Qt=zt[14]/(zt[10]-1),ue=zt[14]/(zt[10]+1),_t=(zt[9]+1)/zt[5],St=(zt[9]-1)/zt[5],F=(zt[8]-1)/zt[0],qt=(he[8]+1)/he[0],wt=Qt*F,Xt=Qt*qt,Pt=Ut/(-F+qt),oe=Pt*-F;if(Ct.matrixWorld.decompose(dt.position,dt.quaternion,dt.scale),dt.translateX(oe),dt.translateZ(Pt),dt.matrixWorld.compose(dt.position,dt.quaternion,dt.scale),dt.matrixWorldInverse.copy(dt.matrixWorld).invert(),zt[10]===-1)dt.projectionMatrix.copy(Ct.projectionMatrix),dt.projectionMatrixInverse.copy(Ct.projectionMatrixInverse);else{let Bt=Qt+Pt,P=ue+Pt,T=wt-oe,et=Xt+(Ut-oe),pt=_t*ue/P*Bt,Et=St*ue/P*Bt;dt.projectionMatrix.makePerspective(T,et,pt,Et,Bt,P),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert()}}function ht(dt,Ct){Ct===null?dt.matrixWorld.copy(dt.matrix):dt.matrixWorld.multiplyMatrices(Ct.matrixWorld,dt.matrix),dt.matrixWorldInverse.copy(dt.matrixWorld).invert()}this.updateCamera=function(dt){if(s===null)return;let Ct=dt.near,Yt=dt.far;M.texture!==null&&(M.depthNear>0&&(Ct=M.depthNear),M.depthFar>0&&(Yt=M.depthFar)),S.near=z.near=D.near=Ct,S.far=z.far=D.far=Yt,(B!==S.near||q!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),B=S.near,q=S.far),D.layers.mask=dt.layers.mask|2,z.layers.mask=dt.layers.mask|4,S.layers.mask=D.layers.mask|z.layers.mask;let Ut=dt.parent,zt=S.cameras;ht(S,Ut);for(let he=0;he<zt.length;he++)ht(zt[he],Ut);zt.length===2?$(S,D,z):S.projectionMatrix.copy(D.projectionMatrix),Rt(dt,S,Ut)};function Rt(dt,Ct,Yt){Yt===null?dt.matrix.copy(Ct.matrixWorld):(dt.matrix.copy(Yt.matrixWorld),dt.matrix.invert(),dt.matrix.multiply(Ct.matrixWorld)),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.updateMatrixWorld(!0),dt.projectionMatrix.copy(Ct.projectionMatrix),dt.projectionMatrixInverse.copy(Ct.projectionMatrixInverse),dt.isPerspectiveCamera&&(dt.fov=uo*2*Math.atan(1/dt.projectionMatrix.elements[5]),dt.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(dt){c=dt,u!==null&&(u.fixedFoveation=dt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=dt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(S)};let lt=null;function ne(dt,Ct){if(h=Ct.getViewerPose(l||o),x=Ct,h!==null){let Yt=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let Ut=!1;Yt.length!==S.cameras.length&&(S.cameras.length=0,Ut=!0);for(let he=0;he<Yt.length;he++){let Qt=Yt[he],ue=null;if(f!==null)ue=f.getViewport(Qt);else{let St=d.getViewSubImage(u,Qt);ue=St.viewport,he===0&&(t.setRenderTargetTextures(b,St.colorTexture,u.ignoreDepthValues?void 0:St.depthStencilTexture),t.setRenderTarget(b))}let _t=A[he];_t===void 0&&(_t=new pn,_t.layers.enable(he),_t.viewport=new Oe,A[he]=_t),_t.matrix.fromArray(Qt.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(Qt.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(ue.x,ue.y,ue.width,ue.height),he===0&&(S.matrix.copy(_t.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Ut===!0&&S.cameras.push(_t)}let zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")){let he=d.getDepthInformation(Yt[0]);he&&he.isValid&&he.texture&&M.init(t,he,s.renderState)}}for(let Yt=0;Yt<w.length;Yt++){let Ut=v[Yt],zt=w[Yt];Ut!==null&&zt!==void 0&&zt.update(Ut,Ct,l||o)}lt&&lt(dt,Ct),Ct.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Ct}),x=null}let re=new rd;re.setAnimationLoop(ne),this.setAnimationLoop=function(dt){lt=dt},this.dispose=function(){}}},As=new Mi,ay=new ke;function cy(n,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,sd(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,b,w,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),x(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),M(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,b,w):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Rn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Rn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let b=t.get(m),w=b.envMap,v=b.envMapRotation;w&&(g.envMap.value=w,As.copy(v),As.x*=-1,As.y*=-1,As.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),g.envMapRotation.value.setFromMatrix4(ay.makeRotationFromEuler(As)),g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,b,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=w*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,b){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Rn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function M(g,m){let b=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ly(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,w){let v=w.program;i.uniformBlockBinding(b,v)}function l(b,w){let v=s[b.id];v===void 0&&(x(b),v=h(b),s[b.id]=v,b.addEventListener("dispose",g));let N=w.program;i.updateUBOMapping(b,N);let L=t.render.frame;r[b.id]!==L&&(u(b),r[b.id]=L)}function h(b){let w=d();b.__bindingPointIndex=w;let v=n.createBuffer(),N=b.__size,L=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,N,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,v),v}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){let w=s[b.id],v=b.uniforms,N=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let L=0,D=v.length;L<D;L++){let z=Array.isArray(v[L])?v[L]:[v[L]];for(let A=0,S=z.length;A<S;A++){let B=z[A];if(f(B,L,A,N)===!0){let q=B.__offset,Y=Array.isArray(B.value)?B.value:[B.value],H=0;for(let k=0;k<Y.length;k++){let X=Y[k],gt=M(X);typeof X=="number"||typeof X=="boolean"?(B.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,q+H,B.__data)):X.isMatrix3?(B.__data[0]=X.elements[0],B.__data[1]=X.elements[1],B.__data[2]=X.elements[2],B.__data[3]=0,B.__data[4]=X.elements[3],B.__data[5]=X.elements[4],B.__data[6]=X.elements[5],B.__data[7]=0,B.__data[8]=X.elements[6],B.__data[9]=X.elements[7],B.__data[10]=X.elements[8],B.__data[11]=0):(X.toArray(B.__data,H),H+=gt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,B.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,w,v,N){let L=b.value,D=w+"_"+v;if(N[D]===void 0)return typeof L=="number"||typeof L=="boolean"?N[D]=L:N[D]=L.clone(),!0;{let z=N[D];if(typeof L=="number"||typeof L=="boolean"){if(z!==L)return N[D]=L,!0}else if(z.equals(L)===!1)return z.copy(L),!0}return!1}function x(b){let w=b.uniforms,v=0,N=16;for(let D=0,z=w.length;D<z;D++){let A=Array.isArray(w[D])?w[D]:[w[D]];for(let S=0,B=A.length;S<B;S++){let q=A[S],Y=Array.isArray(q.value)?q.value:[q.value];for(let H=0,k=Y.length;H<k;H++){let X=Y[H],gt=M(X),$=v%N,ht=$%gt.boundary,Rt=$+ht;v+=ht,Rt!==0&&N-Rt<gt.storage&&(v+=N-Rt),q.__data=new Float32Array(gt.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=v,v+=gt.storage}}}let L=v%N;return L>0&&(v+=N-L),b.__size=v,b.__cache={},this}function M(b){let w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function g(b){let w=b.target;w.removeEventListener("dispose",g);let v=o.indexOf(w.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function m(){for(let b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}var go=class{constructor(t={}){let{canvas:e=d0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let x=new Uint32Array(4),M=new Int32Array(4),g=null,m=null,b=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=De,this.toneMapping=is,this.toneMappingExposure=1;let v=this,N=!1,L=0,D=0,z=null,A=-1,S=null,B=new Oe,q=new Oe,Y=null,H=new ce(0),k=0,X=e.width,gt=e.height,$=1,ht=null,Rt=null,lt=new Oe(0,0,X,gt),ne=new Oe(0,0,X,gt),re=!1,dt=new mo,Ct=!1,Yt=!1,Ut=new ke,zt=new ke,he=new O,Qt=new Oe,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_t=!1;function St(){return z===null?$:1}let F=i;function qt(R,K){return e.getContext(R,K)}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Rh}`),e.addEventListener("webglcontextlost",vt,!1),e.addEventListener("webglcontextrestored",Wt,!1),e.addEventListener("webglcontextcreationerror",Gt,!1),F===null){let K="webgl2";if(F=qt(K,R),F===null)throw qt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let wt,Xt,Pt,oe,Bt,P,T,et,pt,Et,xt,Z,Q,j,It,ut,rt,Mt,bt,at,Zt,le,ve,W;function Tt(){wt=new wx(F),wt.init(),le=new iy(F,wt),Xt=new yx(F,wt,t,le),Pt=new ty(F,wt),Xt.reverseDepthBuffer&&u&&Pt.buffers.depth.setReversed(!0),oe=new Rx(F),Bt=new k_,P=new ny(F,wt,Pt,Bt,Xt,le,oe),T=new vx(v),et=new Sx(v),pt=new N0(F),ve=new xx(F,pt),Et=new Tx(F,pt,oe,ve),xt=new Px(F,Et,pt,oe),bt=new Cx(F,Xt,P),ut=new Mx(Bt),Z=new H_(v,T,et,wt,Xt,ve,ut),Q=new cy(v,Bt),j=new G_,It=new K_(wt),Mt=new gx(v,T,et,Pt,xt,f,c),rt=new j_(v,xt,Xt),W=new ly(F,oe,Xt,Pt),at=new _x(F,wt,oe),Zt=new Ax(F,wt,oe),oe.programs=Z.programs,v.capabilities=Xt,v.extensions=wt,v.properties=Bt,v.renderLists=j,v.shadowMap=rt,v.state=Pt,v.info=oe}Tt();let ct=new sh(v,F);this.xr=ct,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let R=wt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=wt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(R){R!==void 0&&($=R,this.setSize(X,gt,!1))},this.getSize=function(R){return R.set(X,gt)},this.setSize=function(R,K,it=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=R,gt=K,e.width=Math.floor(R*$),e.height=Math.floor(K*$),it===!0&&(e.style.width=R+"px",e.style.height=K+"px"),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(X*$,gt*$).floor()},this.setDrawingBufferSize=function(R,K,it){X=R,gt=K,$=it,e.width=Math.floor(R*it),e.height=Math.floor(K*it),this.setViewport(0,0,R,K)},this.getCurrentViewport=function(R){return R.copy(B)},this.getViewport=function(R){return R.copy(lt)},this.setViewport=function(R,K,it,st){R.isVector4?lt.set(R.x,R.y,R.z,R.w):lt.set(R,K,it,st),Pt.viewport(B.copy(lt).multiplyScalar($).round())},this.getScissor=function(R){return R.copy(ne)},this.setScissor=function(R,K,it,st){R.isVector4?ne.set(R.x,R.y,R.z,R.w):ne.set(R,K,it,st),Pt.scissor(q.copy(ne).multiplyScalar($).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(R){Pt.setScissorTest(re=R)},this.setOpaqueSort=function(R){ht=R},this.setTransparentSort=function(R){Rt=R},this.getClearColor=function(R){return R.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(R=!0,K=!0,it=!0){let st=0;if(R){let J=!1;if(z!==null){let Ot=z.texture.format;J=Ot===Nh||Ot===Uh||Ot===Dh}if(J){let Ot=z.texture.type,Ht=Ot===zi||Ot===Ds||Ot===ho||Ot===br||Ot===Ih||Ot===Lh,Jt=Mt.getClearColor(),te=Mt.getClearAlpha(),me=Jt.r,xe=Jt.g,jt=Jt.b;Ht?(x[0]=me,x[1]=xe,x[2]=jt,x[3]=te,F.clearBufferuiv(F.COLOR,0,x)):(M[0]=me,M[1]=xe,M[2]=jt,M[3]=te,F.clearBufferiv(F.COLOR,0,M))}else st|=F.COLOR_BUFFER_BIT}K&&(st|=F.DEPTH_BUFFER_BIT),it&&(st|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",vt,!1),e.removeEventListener("webglcontextrestored",Wt,!1),e.removeEventListener("webglcontextcreationerror",Gt,!1),j.dispose(),It.dispose(),Bt.dispose(),T.dispose(),et.dispose(),xt.dispose(),ve.dispose(),W.dispose(),Z.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",ms),ct.removeEventListener("sessionend",Nr),nn.stop()};function vt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Wt(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;let R=oe.autoReset,K=rt.enabled,it=rt.autoUpdate,st=rt.needsUpdate,J=rt.type;Tt(),oe.autoReset=R,rt.enabled=K,rt.autoUpdate=it,rt.needsUpdate=st,rt.type=J}function Gt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function pe(R){let K=R.target;K.removeEventListener("dispose",pe),Ce(K)}function Ce(R){rn(R),Bt.remove(R)}function rn(R){let K=Bt.get(R).programs;K!==void 0&&(K.forEach(function(it){Z.releaseProgram(it)}),R.isShaderMaterial&&Z.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,it,st,J,Ot){K===null&&(K=ue);let Ht=J.isMesh&&J.matrixWorld.determinant()<0,Jt=In(R,K,it,st,J);Pt.setMaterial(st,Ht);let te=it.index,me=1;if(st.wireframe===!0){if(te=Et.getWireframeAttribute(it),te===void 0)return;me=2}let xe=it.drawRange,jt=it.attributes.position,Se=xe.start*me,Ue=(xe.start+xe.count)*me;Ot!==null&&(Se=Math.max(Se,Ot.start*me),Ue=Math.min(Ue,(Ot.start+Ot.count)*me)),te!==null?(Se=Math.max(Se,0),Ue=Math.min(Ue,te.count)):jt!=null&&(Se=Math.max(Se,0),Ue=Math.min(Ue,jt.count));let Pe=Ue-Se;if(Pe<0||Pe===1/0)return;ve.setup(J,st,Jt,it,te);let En,Te=at;if(te!==null&&(En=pt.get(te),Te=Zt,Te.setIndex(En)),J.isMesh)st.wireframe===!0?(Pt.setLineWidth(st.wireframeLinewidth*St()),Te.setMode(F.LINES)):Te.setMode(F.TRIANGLES);else if(J.isLine){let ie=st.linewidth;ie===void 0&&(ie=1),Pt.setLineWidth(ie*St()),J.isLineSegments?Te.setMode(F.LINES):J.isLineLoop?Te.setMode(F.LINE_LOOP):Te.setMode(F.LINE_STRIP)}else J.isPoints?Te.setMode(F.POINTS):J.isSprite&&Te.setMode(F.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Te.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(wt.get("WEBGL_multi_draw"))Te.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let ie=J._multiDrawStarts,bn=J._multiDrawCounts,be=J._multiDrawCount,Mn=te?pt.get(te).bytesPerElement:1,ri=Bt.get(st).currentProgram.getUniforms();for(let Ln=0;Ln<be;Ln++)ri.setValue(F,"_gl_DrawID",Ln),Te.render(ie[Ln]/Mn,bn[Ln])}else if(J.isInstancedMesh)Te.renderInstances(Se,Pe,J.count);else if(it.isInstancedBufferGeometry){let ie=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,bn=Math.min(it.instanceCount,ie);Te.renderInstances(Se,Pe,bn)}else Te.render(Se,Pe)};function Ee(R,K,it){R.transparent===!0&&R.side===An&&R.forceSinglePass===!1?(R.side=Rn,R.needsUpdate=!0,si(R,K,it),R.side=ss,R.needsUpdate=!0,si(R,K,it),R.side=An):si(R,K,it)}this.compile=function(R,K,it=null){it===null&&(it=R),m=It.get(it),m.init(K),w.push(m),it.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),R!==it&&R.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),m.setupLights();let st=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Ot=J.material;if(Ot)if(Array.isArray(Ot))for(let Ht=0;Ht<Ot.length;Ht++){let Jt=Ot[Ht];Ee(Jt,it,J),st.add(Jt)}else Ee(Ot,it,J),st.add(Ot)}),w.pop(),m=null,st},this.compileAsync=function(R,K,it=null){let st=this.compile(R,K,it);return new Promise(J=>{function Ot(){if(st.forEach(function(Ht){Bt.get(Ht).currentProgram.isReady()&&st.delete(Ht)}),st.size===0){J(R);return}setTimeout(Ot,10)}wt.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let Gn=null;function ii(R){Gn&&Gn(R)}function ms(){nn.stop()}function Nr(){nn.start()}let nn=new rd;nn.setAnimationLoop(ii),typeof self!="undefined"&&nn.setContext(self),this.setAnimationLoop=function(R){Gn=R,ct.setAnimationLoop(R),R===null?nn.stop():nn.start()},ct.addEventListener("sessionstart",ms),ct.addEventListener("sessionend",Nr),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(K),K=ct.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,K,z),m=It.get(R,w.length),m.init(K),w.push(m),zt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),dt.setFromProjectionMatrix(zt),Yt=this.localClippingEnabled,Ct=ut.init(this.clippingPlanes,Yt),g=j.get(R,b.length),g.init(),b.push(g),ct.enabled===!0&&ct.isPresenting===!0){let Ot=v.xr.getDepthSensingMesh();Ot!==null&&qs(Ot,K,-1/0,v.sortObjects)}qs(R,K,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ht,Rt),_t=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,_t&&Mt.addToRenderList(g,R),this.info.render.frame++,Ct===!0&&ut.beginShadows();let it=m.state.shadowsArray;rt.render(it,R,K),Ct===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();let st=g.opaque,J=g.transmissive;if(m.setupLights(),K.isArrayCamera){let Ot=K.cameras;if(J.length>0)for(let Ht=0,Jt=Ot.length;Ht<Jt;Ht++){let te=Ot[Ht];Fr(st,J,R,te)}_t&&Mt.render(R);for(let Ht=0,Jt=Ot.length;Ht<Jt;Ht++){let te=Ot[Ht];Or(g,R,te,te.viewport)}}else J.length>0&&Fr(st,J,R,K),_t&&Mt.render(R),Or(g,R,K);z!==null&&(P.updateMultisampleRenderTarget(z),P.updateRenderTargetMipmap(z)),R.isScene===!0&&R.onAfterRender(v,R,K),ve.resetDefaultState(),A=-1,S=null,w.pop(),w.length>0?(m=w[w.length-1],Ct===!0&&ut.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function qs(R,K,it,st){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)it=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||dt.intersectsSprite(R)){st&&Qt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(zt);let Ht=xt.update(R),Jt=R.material;Jt.visible&&g.push(R,Ht,Jt,it,Qt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||dt.intersectsObject(R))){let Ht=xt.update(R),Jt=R.material;if(st&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Qt.copy(R.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),Qt.copy(Ht.boundingSphere.center)),Qt.applyMatrix4(R.matrixWorld).applyMatrix4(zt)),Array.isArray(Jt)){let te=Ht.groups;for(let me=0,xe=te.length;me<xe;me++){let jt=te[me],Se=Jt[jt.materialIndex];Se&&Se.visible&&g.push(R,Ht,Se,it,Qt.z,jt)}}else Jt.visible&&g.push(R,Ht,Jt,it,Qt.z,null)}}let Ot=R.children;for(let Ht=0,Jt=Ot.length;Ht<Jt;Ht++)qs(Ot[Ht],K,it,st)}function Or(R,K,it,st){let J=R.opaque,Ot=R.transmissive,Ht=R.transparent;m.setupLightsView(it),Ct===!0&&ut.setGlobalState(v.clippingPlanes,it),st&&Pt.viewport(B.copy(st)),J.length>0&&Yi(J,K,it),Ot.length>0&&Yi(Ot,K,it),Ht.length>0&&Yi(Ht,K,it),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function Fr(R,K,it,st){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[st.id]===void 0&&(m.state.transmissionRenderTarget[st.id]=new Hi(1,1,{generateMipmaps:!0,type:wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float")?Uo:zi,minFilter:Ls,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));let Ot=m.state.transmissionRenderTarget[st.id],Ht=st.viewport||B;Ot.setSize(Ht.z,Ht.w);let Jt=v.getRenderTarget();v.setRenderTarget(Ot),v.getClearColor(H),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear(),_t&&Mt.render(it);let te=v.toneMapping;v.toneMapping=is;let me=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),m.setupLightsView(st),Ct===!0&&ut.setGlobalState(v.clippingPlanes,st),Yi(R,it,st),P.updateMultisampleRenderTarget(Ot),P.updateRenderTargetMipmap(Ot),wt.has("WEBGL_multisampled_render_to_texture")===!1){let xe=!1;for(let jt=0,Se=K.length;jt<Se;jt++){let Ue=K[jt],Pe=Ue.object,En=Ue.geometry,Te=Ue.material,ie=Ue.group;if(Te.side===An&&Pe.layers.test(st.layers)){let bn=Te.side;Te.side=Rn,Te.needsUpdate=!0,Wn(Pe,it,st,En,Te,ie),Te.side=bn,Te.needsUpdate=!0,xe=!0}}xe===!0&&(P.updateMultisampleRenderTarget(Ot),P.updateRenderTargetMipmap(Ot))}v.setRenderTarget(Jt),v.setClearColor(H,k),me!==void 0&&(st.viewport=me),v.toneMapping=te}function Yi(R,K,it){let st=K.isScene===!0?K.overrideMaterial:null;for(let J=0,Ot=R.length;J<Ot;J++){let Ht=R[J],Jt=Ht.object,te=Ht.geometry,me=st===null?Ht.material:st,xe=Ht.group;Jt.layers.test(it.layers)&&Wn(Jt,K,it,te,me,xe)}}function Wn(R,K,it,st,J,Ot){R.onBeforeRender(v,K,it,st,J,Ot),R.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(v,K,it,st,R,Ot),J.transparent===!0&&J.side===An&&J.forceSinglePass===!1?(J.side=Rn,J.needsUpdate=!0,v.renderBufferDirect(it,K,st,J,R,Ot),J.side=ss,J.needsUpdate=!0,v.renderBufferDirect(it,K,st,J,R,Ot),J.side=An):v.renderBufferDirect(it,K,st,J,R,Ot),R.onAfterRender(v,K,it,st,J,Ot)}function si(R,K,it){K.isScene!==!0&&(K=ue);let st=Bt.get(R),J=m.state.lights,Ot=m.state.shadowsArray,Ht=J.state.version,Jt=Z.getParameters(R,J.state,Ot,K,it),te=Z.getProgramCacheKey(Jt),me=st.programs;st.environment=R.isMeshStandardMaterial?K.environment:null,st.fog=K.fog,st.envMap=(R.isMeshStandardMaterial?et:T).get(R.envMap||st.environment),st.envMapRotation=st.environment!==null&&R.envMap===null?K.environmentRotation:R.envMapRotation,me===void 0&&(R.addEventListener("dispose",pe),me=new Map,st.programs=me);let xe=me.get(te);if(xe!==void 0){if(st.currentProgram===xe&&st.lightsStateVersion===Ht)return xs(R,Jt),xe}else Jt.uniforms=Z.getUniforms(R),R.onBeforeCompile(Jt,v),xe=Z.acquireProgram(Jt,te),me.set(te,xe),st.uniforms=Jt.uniforms;let jt=st.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(jt.clippingPlanes=ut.uniform),xs(R,Jt),st.needsLights=Jn(R),st.lightsStateVersion=Ht,st.needsLights&&(jt.ambientLightColor.value=J.state.ambient,jt.lightProbe.value=J.state.probe,jt.directionalLights.value=J.state.directional,jt.directionalLightShadows.value=J.state.directionalShadow,jt.spotLights.value=J.state.spot,jt.spotLightShadows.value=J.state.spotShadow,jt.rectAreaLights.value=J.state.rectArea,jt.ltc_1.value=J.state.rectAreaLTC1,jt.ltc_2.value=J.state.rectAreaLTC2,jt.pointLights.value=J.state.point,jt.pointLightShadows.value=J.state.pointShadow,jt.hemisphereLights.value=J.state.hemi,jt.directionalShadowMap.value=J.state.directionalShadowMap,jt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,jt.spotShadowMap.value=J.state.spotShadowMap,jt.spotLightMatrix.value=J.state.spotLightMatrix,jt.spotLightMap.value=J.state.spotLightMap,jt.pointShadowMap.value=J.state.pointShadowMap,jt.pointShadowMatrix.value=J.state.pointShadowMatrix),st.currentProgram=xe,st.uniformsList=null,xe}function gs(R){if(R.uniformsList===null){let K=R.currentProgram.getUniforms();R.uniformsList=yr.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function xs(R,K){let it=Bt.get(R);it.outputColorSpace=K.outputColorSpace,it.batching=K.batching,it.batchingColor=K.batchingColor,it.instancing=K.instancing,it.instancingColor=K.instancingColor,it.instancingMorph=K.instancingMorph,it.skinning=K.skinning,it.morphTargets=K.morphTargets,it.morphNormals=K.morphNormals,it.morphColors=K.morphColors,it.morphTargetsCount=K.morphTargetsCount,it.numClippingPlanes=K.numClippingPlanes,it.numIntersection=K.numClipIntersection,it.vertexAlphas=K.vertexAlphas,it.vertexTangents=K.vertexTangents,it.toneMapping=K.toneMapping}function In(R,K,it,st,J){K.isScene!==!0&&(K=ue),P.resetTextureUnits();let Ot=K.fog,Ht=st.isMeshStandardMaterial?K.environment:null,Jt=z===null?v.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Cr,te=(st.isMeshStandardMaterial?et:T).get(st.envMap||Ht),me=st.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,xe=!!it.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),jt=!!it.morphAttributes.position,Se=!!it.morphAttributes.normal,Ue=!!it.morphAttributes.color,Pe=is;st.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Pe=v.toneMapping);let En=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,Te=En!==void 0?En.length:0,ie=Bt.get(st),bn=m.state.lights;if(Ct===!0&&(Yt===!0||R!==S)){let Dn=R===S&&st.id===A;ut.setState(st,R,Dn)}let be=!1;st.version===ie.__version?(ie.needsLights&&ie.lightsStateVersion!==bn.state.version||ie.outputColorSpace!==Jt||J.isBatchedMesh&&ie.batching===!1||!J.isBatchedMesh&&ie.batching===!0||J.isBatchedMesh&&ie.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&ie.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&ie.instancing===!1||!J.isInstancedMesh&&ie.instancing===!0||J.isSkinnedMesh&&ie.skinning===!1||!J.isSkinnedMesh&&ie.skinning===!0||J.isInstancedMesh&&ie.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&ie.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&ie.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&ie.instancingMorph===!1&&J.morphTexture!==null||ie.envMap!==te||st.fog===!0&&ie.fog!==Ot||ie.numClippingPlanes!==void 0&&(ie.numClippingPlanes!==ut.numPlanes||ie.numIntersection!==ut.numIntersection)||ie.vertexAlphas!==me||ie.vertexTangents!==xe||ie.morphTargets!==jt||ie.morphNormals!==Se||ie.morphColors!==Ue||ie.toneMapping!==Pe||ie.morphTargetsCount!==Te)&&(be=!0):(be=!0,ie.__version=st.version);let Mn=ie.currentProgram;be===!0&&(Mn=si(st,K,J));let ri=!1,Ln=!1,Ie=!1,Re=Mn.getUniforms(),$n=ie.uniforms;if(Pt.useProgram(Mn.program)&&(ri=!0,Ln=!0,Ie=!0),st.id!==A&&(A=st.id,Ln=!0),ri||S!==R){Pt.buffers.depth.getReversed()?(Ut.copy(R.projectionMatrix),m0(Ut),g0(Ut),Re.setValue(F,"projectionMatrix",Ut)):Re.setValue(F,"projectionMatrix",R.projectionMatrix),Re.setValue(F,"viewMatrix",R.matrixWorldInverse);let Un=Re.map.cameraPosition;Un!==void 0&&Un.setValue(F,he.setFromMatrixPosition(R.matrixWorld)),Xt.logarithmicDepthBuffer&&Re.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Re.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,Ln=!0,Ie=!0)}if(J.isSkinnedMesh){Re.setOptional(F,J,"bindMatrix"),Re.setOptional(F,J,"bindMatrixInverse");let Dn=J.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),Re.setValue(F,"boneTexture",Dn.boneTexture,P))}J.isBatchedMesh&&(Re.setOptional(F,J,"batchingTexture"),Re.setValue(F,"batchingTexture",J._matricesTexture,P),Re.setOptional(F,J,"batchingIdTexture"),Re.setValue(F,"batchingIdTexture",J._indirectTexture,P),Re.setOptional(F,J,"batchingColorTexture"),J._colorsTexture!==null&&Re.setValue(F,"batchingColorTexture",J._colorsTexture,P));let _s=it.morphAttributes;if((_s.position!==void 0||_s.normal!==void 0||_s.color!==void 0)&&bt.update(J,it,Mn),(Ln||ie.receiveShadow!==J.receiveShadow)&&(ie.receiveShadow=J.receiveShadow,Re.setValue(F,"receiveShadow",J.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&($n.envMap.value=te,$n.flipEnvMap.value=te.isCubeTexture&&te.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&K.environment!==null&&($n.envMapIntensity.value=K.environmentIntensity),Ln&&(Re.setValue(F,"toneMappingExposure",v.toneMappingExposure),ie.needsLights&&qi($n,Ie),Ot&&st.fog===!0&&Q.refreshFogUniforms($n,Ot),Q.refreshMaterialUniforms($n,st,$,gt,m.state.transmissionRenderTarget[R.id]),yr.upload(F,gs(ie),$n,P)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(yr.upload(F,gs(ie),$n,P),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Re.setValue(F,"center",J.center),Re.setValue(F,"modelViewMatrix",J.modelViewMatrix),Re.setValue(F,"normalMatrix",J.normalMatrix),Re.setValue(F,"modelMatrix",J.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){let Dn=st.uniformsGroups;for(let Un=0,je=Dn.length;Un<je;Un++){let zr=Dn[Un];W.update(zr,Mn),W.bind(zr,Mn)}}return Mn}function qi(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function Jn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(R,K,it){Bt.get(R.texture).__webglTexture=K,Bt.get(R.depthTexture).__webglTexture=it;let st=Bt.get(R);st.__hasExternalTextures=!0,st.__autoAllocateDepthBuffer=it===void 0,st.__autoAllocateDepthBuffer||wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,K){let it=Bt.get(R);it.__webglFramebuffer=K,it.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(R,K=0,it=0){z=R,L=K,D=it;let st=!0,J=null,Ot=!1,Ht=!1;if(R){let te=Bt.get(R);if(te.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(F.FRAMEBUFFER,null),st=!1;else if(te.__webglFramebuffer===void 0)P.setupRenderTarget(R);else if(te.__hasExternalTextures)P.rebindTextures(R,Bt.get(R.texture).__webglTexture,Bt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let jt=R.depthTexture;if(te.__boundDepthTexture!==jt){if(jt!==null&&Bt.has(jt)&&(R.width!==jt.image.width||R.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(R)}}let me=R.texture;(me.isData3DTexture||me.isDataArrayTexture||me.isCompressedArrayTexture)&&(Ht=!0);let xe=Bt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(xe[K])?J=xe[K][it]:J=xe[K],Ot=!0):R.samples>0&&P.useMultisampledRTT(R)===!1?J=Bt.get(R).__webglMultisampledFramebuffer:Array.isArray(xe)?J=xe[it]:J=xe,B.copy(R.viewport),q.copy(R.scissor),Y=R.scissorTest}else B.copy(lt).multiplyScalar($).floor(),q.copy(ne).multiplyScalar($).floor(),Y=re;if(Pt.bindFramebuffer(F.FRAMEBUFFER,J)&&st&&Pt.drawBuffers(R,J),Pt.viewport(B),Pt.scissor(q),Pt.setScissorTest(Y),Ot){let te=Bt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+K,te.__webglTexture,it)}else if(Ht){let te=Bt.get(R.texture),me=K||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,te.__webglTexture,it||0,me)}A=-1},this.readRenderTargetPixels=function(R,K,it,st,J,Ot,Ht){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=Bt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ht!==void 0&&(Jt=Jt[Ht]),Jt){Pt.bindFramebuffer(F.FRAMEBUFFER,Jt);try{let te=R.texture,me=te.format,xe=te.type;if(!Xt.textureFormatReadable(me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-st&&it>=0&&it<=R.height-J&&F.readPixels(K,it,st,J,le.convert(me),le.convert(xe),Ot)}finally{let te=z!==null?Bt.get(z).__webglFramebuffer:null;Pt.bindFramebuffer(F.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(R,K,it,st,J,Ot,Ht){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=Bt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ht!==void 0&&(Jt=Jt[Ht]),Jt){let te=R.texture,me=te.format,xe=te.type;if(!Xt.textureFormatReadable(me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=R.width-st&&it>=0&&it<=R.height-J){Pt.bindFramebuffer(F.FRAMEBUFFER,Jt);let jt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,jt),F.bufferData(F.PIXEL_PACK_BUFFER,Ot.byteLength,F.STREAM_READ),F.readPixels(K,it,st,J,le.convert(me),le.convert(xe),0);let Se=z!==null?Bt.get(z).__webglFramebuffer:null;Pt.bindFramebuffer(F.FRAMEBUFFER,Se);let Ue=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await p0(F,Ue,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,jt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ot),F.deleteBuffer(jt),F.deleteSync(Ue),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,K=null,it=0){R.isTexture!==!0&&(eo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,R=arguments[1]);let st=Math.pow(2,-it),J=Math.floor(R.image.width*st),Ot=Math.floor(R.image.height*st),Ht=K!==null?K.x:0,Jt=K!==null?K.y:0;P.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,it,0,0,Ht,Jt,J,Ot),Pt.unbindTexture()},this.copyTextureToTexture=function(R,K,it=null,st=null,J=0){R.isTexture!==!0&&(eo("WebGLRenderer: copyTextureToTexture function signature has changed."),st=arguments[0]||null,R=arguments[1],K=arguments[2],J=arguments[3]||0,it=null);let Ot,Ht,Jt,te,me,xe,jt,Se,Ue,Pe=R.isCompressedTexture?R.mipmaps[J]:R.image;it!==null?(Ot=it.max.x-it.min.x,Ht=it.max.y-it.min.y,Jt=it.isBox3?it.max.z-it.min.z:1,te=it.min.x,me=it.min.y,xe=it.isBox3?it.min.z:0):(Ot=Pe.width,Ht=Pe.height,Jt=Pe.depth||1,te=0,me=0,xe=0),st!==null?(jt=st.x,Se=st.y,Ue=st.z):(jt=0,Se=0,Ue=0);let En=le.convert(K.format),Te=le.convert(K.type),ie;K.isData3DTexture?(P.setTexture3D(K,0),ie=F.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(P.setTexture2DArray(K,0),ie=F.TEXTURE_2D_ARRAY):(P.setTexture2D(K,0),ie=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,K.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,K.unpackAlignment);let bn=F.getParameter(F.UNPACK_ROW_LENGTH),be=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Mn=F.getParameter(F.UNPACK_SKIP_PIXELS),ri=F.getParameter(F.UNPACK_SKIP_ROWS),Ln=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Pe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Pe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,te),F.pixelStorei(F.UNPACK_SKIP_ROWS,me),F.pixelStorei(F.UNPACK_SKIP_IMAGES,xe);let Ie=R.isDataArrayTexture||R.isData3DTexture,Re=K.isDataArrayTexture||K.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let $n=Bt.get(R),_s=Bt.get(K),Dn=Bt.get($n.__renderTarget),Un=Bt.get(_s.__renderTarget);Pt.bindFramebuffer(F.READ_FRAMEBUFFER,Dn.__webglFramebuffer),Pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let je=0;je<Jt;je++)Ie&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Bt.get(R).__webglTexture,J,xe+je),R.isDepthTexture?(Re&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Bt.get(K).__webglTexture,J,Ue+je),F.blitFramebuffer(te,me,Ot,Ht,jt,Se,Ot,Ht,F.DEPTH_BUFFER_BIT,F.NEAREST)):Re?F.copyTexSubImage3D(ie,J,jt,Se,Ue+je,te,me,Ot,Ht):F.copyTexSubImage2D(ie,J,jt,Se,Ue+je,te,me,Ot,Ht);Pt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Re?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(ie,J,jt,Se,Ue,Ot,Ht,Jt,En,Te,Pe.data):K.isCompressedArrayTexture?F.compressedTexSubImage3D(ie,J,jt,Se,Ue,Ot,Ht,Jt,En,Pe.data):F.texSubImage3D(ie,J,jt,Se,Ue,Ot,Ht,Jt,En,Te,Pe):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,J,jt,Se,Ot,Ht,En,Te,Pe.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,J,jt,Se,Pe.width,Pe.height,En,Pe.data):F.texSubImage2D(F.TEXTURE_2D,J,jt,Se,Ot,Ht,En,Te,Pe);F.pixelStorei(F.UNPACK_ROW_LENGTH,bn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,be),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Mn),F.pixelStorei(F.UNPACK_SKIP_ROWS,ri),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ln),J===0&&K.generateMipmaps&&F.generateMipmap(ie),Pt.unbindTexture()},this.copyTextureToTexture3D=function(R,K,it=null,st=null,J=0){return R.isTexture!==!0&&(eo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),it=arguments[0]||null,st=arguments[1]||null,R=arguments[2],K=arguments[3],J=arguments[4]||0),eo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,K,it,st,J)},this.initRenderTarget=function(R){Bt.get(R).__webglFramebuffer===void 0&&P.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),Pt.unbindTexture()},this.resetState=function(){L=0,D=0,z=null,Pt.reset(),ve.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=we._getDrawingBufferColorSpace(t),e.unpackColorSpace=we._getUnpackColorSpace()}};var Ua=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new ce(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},xo=class extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Na=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Vl,this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Nn=new O,_o=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Nn.fromBufferAttribute(this,e),Nn.applyMatrix4(t),this.setXYZ(e,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Nn.fromBufferAttribute(this,e),Nn.applyNormalMatrix(t),this.setXYZ(e,Nn.x,Nn.y,Nn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Nn.fromBufferAttribute(this,e),Nn.transformDirection(t),this.setXYZ(e,Nn.x,Nn.y,Nn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=hi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Le(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=hi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=hi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=hi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=hi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),s=Le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new vn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Vi=class extends ki{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},hr,$r=new O,ur=new O,fr=new O,dr=new At,jr=new At,hd=new ke,la=new O,Qr=new O,ha=new O,Tf=new At,$c=new At,Af=new At,os=class extends Ve{constructor(t=new Vi){if(super(),this.isSprite=!0,this.type="Sprite",hr===void 0){hr=new He;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Na(e,5);hr.setIndex([0,1,2,0,2,3]),hr.setAttribute("position",new _o(i,3,0,!1)),hr.setAttribute("uv",new _o(i,2,3,!1))}this.geometry=hr,this.material=t,this.center=new At(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ur.setFromMatrixScale(this.matrixWorld),hd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),fr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ur.multiplyScalar(-fr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;ua(la.set(-.5,-.5,0),fr,o,ur,s,r),ua(Qr.set(.5,-.5,0),fr,o,ur,s,r),ua(ha.set(.5,.5,0),fr,o,ur,s,r),Tf.set(0,0),$c.set(1,0),Af.set(1,1);let a=t.ray.intersectTriangle(la,Qr,ha,!1,$r);if(a===null&&(ua(Qr.set(-.5,.5,0),fr,o,ur,s,r),$c.set(0,1),a=t.ray.intersectTriangle(la,ha,Qr,!1,$r),a===null))return;let c=t.ray.origin.distanceTo($r);c<t.near||c>t.far||e.push({distance:c,point:$r.clone(),uv:es.getInterpolation($r,la,Qr,ha,Tf,$c,Af,new At),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ua(n,t,e,i,s,r){dr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(jr.x=r*dr.x-s*dr.y,jr.y=s*dr.x+r*dr.y):jr.copy(dr),n.copy(t),n.x+=jr.x,n.y+=jr.y,n.applyMatrix4(hd)}var as=class extends ki{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Rf=new ke,rh=new Ns,fa=new wr,da=new O,Os=class extends Ve{constructor(t=new He,e=new as){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fa.copy(i.boundingSphere),fa.applyMatrix4(s),fa.radius+=r,t.ray.intersectsSphere(fa)===!1)return;Rf.copy(s).invert(),rh.copy(t.ray).applyMatrix4(Rf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){let u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let x=u,M=f;x<M;x++){let g=l.getX(x);da.fromBufferAttribute(d,g),Cf(da,g,c,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let x=u,M=f;x<M;x++)da.fromBufferAttribute(d,x),Cf(da,x,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Cf(n,t,e,i,s,r,o){let a=rh.distanceSqToPoint(n);if(a<e){let c=new O;rh.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var mn=class extends Cn{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ni=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new At:new O);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new O,s=[],r=[],o=[],a=new O,c=new ke;for(let f=0;f<=t;f++){let x=f/t;s[f]=this.getTangentAt(x,new O)}r[0]=new O,o[0]=new O;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),u<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(dn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,x))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(dn(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let x=1;x<=t;x++)r[x].applyMatrix4(c.makeRotationAxis(s[x],f*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},yo=class extends ni{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new At){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},oh=class extends yo{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function zh(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var pa=new O,jc=new zh,Qc=new zh,tl=new zh,Mo=class extends ni{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new O){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(pa.subVectors(s[0],s[1]).add(s[0]),l=pa);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(pa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=pa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,x=Math.pow(l.distanceToSquared(d),f),M=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);M<1e-4&&(M=1),x<1e-4&&(x=M),g<1e-4&&(g=M),jc.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,x,M,g),Qc.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,x,M,g),tl.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,x,M,g)}else this.curveType==="catmullrom"&&(jc.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),Qc.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),tl.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return i.set(jc.calc(c),Qc.calc(c),tl.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Pf(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function hy(n,t){let e=1-n;return e*e*t}function uy(n,t){return 2*(1-n)*n*t}function fy(n,t){return n*n*t}function oo(n,t,e,i){return hy(n,t)+uy(n,e)+fy(n,i)}function dy(n,t){let e=1-n;return e*e*e*t}function py(n,t){let e=1-n;return 3*e*e*n*t}function my(n,t){return 3*(1-n)*n*n*t}function gy(n,t){return n*n*n*t}function ao(n,t,e,i,s){return dy(n,t)+py(n,e)+my(n,i)+gy(n,s)}var Oa=class extends ni{constructor(t=new At,e=new At,i=new At,s=new At){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new At){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ao(t,s.x,r.x,o.x,a.x),ao(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ah=class extends ni{constructor(t=new O,e=new O,i=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new O){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ao(t,s.x,r.x,o.x,a.x),ao(t,s.y,r.y,o.y,a.y),ao(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fa=class extends ni{constructor(t=new At,e=new At){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new At){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new At){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ch=class extends ni{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},za=class extends ni{constructor(t=new At,e=new At,i=new At){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new At){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(oo(t,s.x,r.x,o.x),oo(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},lh=class extends ni{constructor(t=new O,e=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new O){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(oo(t,s.x,r.x,o.x),oo(t,s.y,r.y,o.y),oo(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ba=class extends ni{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new At){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Pf(a,c.x,l.x,h.x,d.x),Pf(a,c.y,l.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new At().fromArray(s))}return this}},hh=Object.freeze({__proto__:null,ArcCurve:oh,CatmullRomCurve3:Mo,CubicBezierCurve:Oa,CubicBezierCurve3:ah,EllipseCurve:yo,LineCurve:Fa,LineCurve3:ch,QuadraticBezierCurve:za,QuadraticBezierCurve3:lh,SplineCurve:Ba}),uh=class extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hh[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new hh[s.type]().fromJSON(s))}return this}},Ha=class extends uh{constructor(t){super(),this.type="Path",this.currentPoint=new At,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Fa(this.currentPoint.clone(),new At(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new za(this.currentPoint.clone(),new At(t,e),new At(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Oa(this.currentPoint.clone(),new At(t,e),new At(i,s),new At(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Ba(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,r,o,a,c),this}absellipse(t,e,i,s,r,o,a,c){let l=new yo(t,e,i,s,r,o,a,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var ka=class n extends He{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new O,h=new At;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=i+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ge(o,3)),this.setAttribute("normal",new ge(a,3)),this.setAttribute("uv",new ge(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Xe=class n extends He{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],x=0,M=[],g=i/2,m=0;b(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ge(d,3)),this.setAttribute("normal",new ge(u,3)),this.setAttribute("uv",new ge(f,2));function b(){let v=new O,N=new O,L=0,D=(e-t)/i;for(let z=0;z<=r;z++){let A=[],S=z/r,B=S*(e-t)+t;for(let q=0;q<=s;q++){let Y=q/s,H=Y*c+a,k=Math.sin(H),X=Math.cos(H);N.x=B*k,N.y=-S*i+g,N.z=B*X,d.push(N.x,N.y,N.z),v.set(k,D,X).normalize(),u.push(v.x,v.y,v.z),f.push(Y,1-S),A.push(x++)}M.push(A)}for(let z=0;z<s;z++)for(let A=0;A<r;A++){let S=M[A][z],B=M[A+1][z],q=M[A+1][z+1],Y=M[A][z+1];(t>0||A!==0)&&(h.push(S,B,Y),L+=3),(e>0||A!==r-1)&&(h.push(B,q,Y),L+=3)}l.addGroup(m,L,0),m+=L}function w(v){let N=x,L=new At,D=new O,z=0,A=v===!0?t:e,S=v===!0?1:-1;for(let q=1;q<=s;q++)d.push(0,g*S,0),u.push(0,S,0),f.push(.5,.5),x++;let B=x;for(let q=0;q<=s;q++){let H=q/s*c+a,k=Math.cos(H),X=Math.sin(H);D.x=A*X,D.y=g*S,D.z=A*k,d.push(D.x,D.y,D.z),u.push(0,S,0),L.x=k*.5+.5,L.y=X*.5*S+.5,f.push(L.x,L.y),x++}for(let q=0;q<s;q++){let Y=N+q,H=B+q;v===!0?h.push(H,H+1,Y):h.push(H+1,H,Y),z+=3}l.addGroup(m,z,v===!0?1:2),m+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},vo=class n extends Xe{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},fh=class n extends He{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new ge(r,3)),this.setAttribute("normal",new ge(r.slice(),3)),this.setAttribute("uv",new ge(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let w=new O,v=new O,N=new O;for(let L=0;L<e.length;L+=3)f(e[L+0],w),f(e[L+1],v),f(e[L+2],N),c(w,v,N,b)}function c(b,w,v,N){let L=N+1,D=[];for(let z=0;z<=L;z++){D[z]=[];let A=b.clone().lerp(v,z/L),S=w.clone().lerp(v,z/L),B=L-z;for(let q=0;q<=B;q++)q===0&&z===L?D[z][q]=A:D[z][q]=A.clone().lerp(S,q/B)}for(let z=0;z<L;z++)for(let A=0;A<2*(L-z)-1;A++){let S=Math.floor(A/2);A%2===0?(u(D[z][S+1]),u(D[z+1][S]),u(D[z][S])):(u(D[z][S+1]),u(D[z+1][S+1]),u(D[z+1][S]))}}function l(b){let w=new O;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(b),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function h(){let b=new O;for(let w=0;w<r.length;w+=3){b.x=r[w+0],b.y=r[w+1],b.z=r[w+2];let v=g(b)/2/Math.PI+.5,N=m(b)/Math.PI+.5;o.push(v,1-N)}x(),d()}function d(){for(let b=0;b<o.length;b+=6){let w=o[b+0],v=o[b+2],N=o[b+4],L=Math.max(w,v,N),D=Math.min(w,v,N);L>.9&&D<.1&&(w<.2&&(o[b+0]+=1),v<.2&&(o[b+2]+=1),N<.2&&(o[b+4]+=1))}}function u(b){r.push(b.x,b.y,b.z)}function f(b,w){let v=b*3;w.x=t[v+0],w.y=t[v+1],w.z=t[v+2]}function x(){let b=new O,w=new O,v=new O,N=new O,L=new At,D=new At,z=new At;for(let A=0,S=0;A<r.length;A+=9,S+=6){b.set(r[A+0],r[A+1],r[A+2]),w.set(r[A+3],r[A+4],r[A+5]),v.set(r[A+6],r[A+7],r[A+8]),L.set(o[S+0],o[S+1]),D.set(o[S+2],o[S+3]),z.set(o[S+4],o[S+5]),N.copy(b).add(w).add(v).divideScalar(3);let B=g(N);M(L,S+0,b,B),M(D,S+2,w,B),M(z,S+4,v,B)}}function M(b,w,v,N){N<0&&b.x===1&&(o[w]=b.x-1),v.x===0&&v.z===0&&(o[w]=N/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function m(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var Eo=class extends Ha{constructor(t){super(t),this.uuid=yi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Ha().fromJSON(s))}return this}},xy={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=ud(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,d,u,f;if(i&&(r=Ey(n,t,r,e)),n.length>80*e){a=l=n[0],c=h=n[1];for(let x=e;x<s;x+=e)d=n[x],u=n[x+1],d<a&&(a=d),u<c&&(c=u),d>l&&(l=d),u>h&&(h=u);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return bo(r,o,e,a,c,f,0),o}};function ud(n,t,e,i,s){let r,o;if(s===Dy(n,t,e,i)>0)for(r=t;r<e;r+=i)o=If(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=If(r,n[r],n[r+1],o);return o&&$a(o,o.next)&&(wo(o),o=o.next),o}function Fs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&($a(e,e.next)||Je(e.prev,e,e.next)===0)){if(wo(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function bo(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Ay(n,i,s,r);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?yy(n,i,s,r):_y(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),wo(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=My(Fs(n),t,e),bo(n,t,e,i,s,r,2)):o===2&&vy(n,t,e,i,s,r):bo(Fs(n),t,e,i,s,r,1);break}}}function _y(n){let t=n.prev,e=n,i=n.next;if(Je(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,h=s<r?s<o?s:o:r<o?r:o,d=a<c?a<l?a:l:c<l?c:l,u=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,x=i.next;for(;x!==t;){if(x.x>=h&&x.x<=u&&x.y>=d&&x.y<=f&&mr(s,a,r,c,o,l,x.x,x.y)&&Je(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function yy(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Je(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,d=r.y,u=o.y,f=a<c?a<l?a:l:c<l?c:l,x=h<d?h<u?h:u:d<u?d:u,M=a>c?a>l?a:l:c>l?c:l,g=h>d?h>u?h:u:d>u?d:u,m=dh(f,x,t,e,i),b=dh(M,g,t,e,i),w=n.prevZ,v=n.nextZ;for(;w&&w.z>=m&&v&&v.z<=b;){if(w.x>=f&&w.x<=M&&w.y>=x&&w.y<=g&&w!==s&&w!==o&&mr(a,h,c,d,l,u,w.x,w.y)&&Je(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=f&&v.x<=M&&v.y>=x&&v.y<=g&&v!==s&&v!==o&&mr(a,h,c,d,l,u,v.x,v.y)&&Je(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=m;){if(w.x>=f&&w.x<=M&&w.y>=x&&w.y<=g&&w!==s&&w!==o&&mr(a,h,c,d,l,u,w.x,w.y)&&Je(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=b;){if(v.x>=f&&v.x<=M&&v.y>=x&&v.y<=g&&v!==s&&v!==o&&mr(a,h,c,d,l,u,v.x,v.y)&&Je(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function My(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!$a(s,r)&&fd(s,i,i.next,r)&&So(s,r)&&So(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),wo(i),wo(i.next),i=n=r),i=i.next}while(i!==n);return Fs(i)}function vy(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Py(o,a)){let c=dd(o,a);o=Fs(o,o.next),c=Fs(c,c.next),bo(o,t,e,i,s,r,0),bo(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Ey(n,t,e,i){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=ud(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(Cy(l));for(s.sort(by),r=0;r<s.length;r++)e=Sy(s[r],e);return e}function by(n,t){return n.x-t.x}function Sy(n,t){let e=wy(n,t);if(!e)return t;let i=dd(e,n);return Fs(i,i.next),Fs(e,e.next)}function wy(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>i&&(i=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,d;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&mr(o<l?r:i,o,c,l,o<l?i:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),So(e,n)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&Ty(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function Ty(n,t){return Je(n.prev,n,t.prev)<0&&Je(t.next,n,n.next)<0}function Ay(n,t,e,i){let s=n;do s.z===0&&(s.z=dh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Ry(s)}function Ry(n){let t,e,i,s,r,o,a,c,l=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,l*=2}while(o>1);return n}function dh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Cy(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function mr(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Py(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Iy(n,t)&&(So(n,t)&&So(t,n)&&Ly(n,t)&&(Je(n.prev,n,t.prev)||Je(n,t.prev,t))||$a(n,t)&&Je(n.prev,n,n.next)>0&&Je(t.prev,t,t.next)>0)}function Je(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function $a(n,t){return n.x===t.x&&n.y===t.y}function fd(n,t,e,i){let s=ga(Je(n,t,e)),r=ga(Je(n,t,i)),o=ga(Je(e,i,n)),a=ga(Je(e,i,t));return!!(s!==r&&o!==a||s===0&&ma(n,e,t)||r===0&&ma(n,i,t)||o===0&&ma(e,n,i)||a===0&&ma(e,t,i))}function ma(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ga(n){return n>0?1:n<0?-1:0}function Iy(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&fd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function So(n,t){return Je(n.prev,n,n.next)<0?Je(n,t,n.next)>=0&&Je(n,n.prev,t)>=0:Je(n,t,n.prev)<0||Je(n,n.next,t)<0}function Ly(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function dd(n,t){let e=new ph(n.i,n.x,n.y),i=new ph(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function If(n,t,e,i){let s=new ph(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function wo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ph(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Dy(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var co=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Lf(t),Df(i,t);let o=t.length;e.forEach(Lf);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Df(i,e[c]);let a=xy.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Lf(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Df(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Va=class n extends He{constructor(t=new Eo([new At(.5,.5),new At(-.5,.5),new At(-.5,-.5),new At(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new ge(s,3)),this.setAttribute("uv",new ge(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:f-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Uy,w,v=!1,N,L,D,z;m&&(w=m.getSpacedPoints(h),v=!0,u=!1,N=m.computeFrenetFrames(h,!1),L=new O,D=new O,z=new O),u||(g=0,f=0,x=0,M=0);let A=a.extractPoints(l),S=A.shape,B=A.holes;if(!co.isClockWise(S)){S=S.reverse();for(let _t=0,St=B.length;_t<St;_t++){let F=B[_t];co.isClockWise(F)&&(B[_t]=F.reverse())}}let Y=co.triangulateShape(S,B),H=S;for(let _t=0,St=B.length;_t<St;_t++){let F=B[_t];S=S.concat(F)}function k(_t,St,F){return St||console.error("THREE.ExtrudeGeometry: vec does not exist"),_t.clone().addScaledVector(St,F)}let X=S.length,gt=Y.length;function $(_t,St,F){let qt,wt,Xt,Pt=_t.x-St.x,oe=_t.y-St.y,Bt=F.x-_t.x,P=F.y-_t.y,T=Pt*Pt+oe*oe,et=Pt*P-oe*Bt;if(Math.abs(et)>Number.EPSILON){let pt=Math.sqrt(T),Et=Math.sqrt(Bt*Bt+P*P),xt=St.x-oe/pt,Z=St.y+Pt/pt,Q=F.x-P/Et,j=F.y+Bt/Et,It=((Q-xt)*P-(j-Z)*Bt)/(Pt*P-oe*Bt);qt=xt+Pt*It-_t.x,wt=Z+oe*It-_t.y;let ut=qt*qt+wt*wt;if(ut<=2)return new At(qt,wt);Xt=Math.sqrt(ut/2)}else{let pt=!1;Pt>Number.EPSILON?Bt>Number.EPSILON&&(pt=!0):Pt<-Number.EPSILON?Bt<-Number.EPSILON&&(pt=!0):Math.sign(oe)===Math.sign(P)&&(pt=!0),pt?(qt=-oe,wt=Pt,Xt=Math.sqrt(T)):(qt=Pt,wt=oe,Xt=Math.sqrt(T/2))}return new At(qt/Xt,wt/Xt)}let ht=[];for(let _t=0,St=H.length,F=St-1,qt=_t+1;_t<St;_t++,F++,qt++)F===St&&(F=0),qt===St&&(qt=0),ht[_t]=$(H[_t],H[F],H[qt]);let Rt=[],lt,ne=ht.concat();for(let _t=0,St=B.length;_t<St;_t++){let F=B[_t];lt=[];for(let qt=0,wt=F.length,Xt=wt-1,Pt=qt+1;qt<wt;qt++,Xt++,Pt++)Xt===wt&&(Xt=0),Pt===wt&&(Pt=0),lt[qt]=$(F[qt],F[Xt],F[Pt]);Rt.push(lt),ne=ne.concat(lt)}for(let _t=0;_t<g;_t++){let St=_t/g,F=f*Math.cos(St*Math.PI/2),qt=x*Math.sin(St*Math.PI/2)+M;for(let wt=0,Xt=H.length;wt<Xt;wt++){let Pt=k(H[wt],ht[wt],qt);Ut(Pt.x,Pt.y,-F)}for(let wt=0,Xt=B.length;wt<Xt;wt++){let Pt=B[wt];lt=Rt[wt];for(let oe=0,Bt=Pt.length;oe<Bt;oe++){let P=k(Pt[oe],lt[oe],qt);Ut(P.x,P.y,-F)}}}let re=x+M;for(let _t=0;_t<X;_t++){let St=u?k(S[_t],ne[_t],re):S[_t];v?(D.copy(N.normals[0]).multiplyScalar(St.x),L.copy(N.binormals[0]).multiplyScalar(St.y),z.copy(w[0]).add(D).add(L),Ut(z.x,z.y,z.z)):Ut(St.x,St.y,0)}for(let _t=1;_t<=h;_t++)for(let St=0;St<X;St++){let F=u?k(S[St],ne[St],re):S[St];v?(D.copy(N.normals[_t]).multiplyScalar(F.x),L.copy(N.binormals[_t]).multiplyScalar(F.y),z.copy(w[_t]).add(D).add(L),Ut(z.x,z.y,z.z)):Ut(F.x,F.y,d/h*_t)}for(let _t=g-1;_t>=0;_t--){let St=_t/g,F=f*Math.cos(St*Math.PI/2),qt=x*Math.sin(St*Math.PI/2)+M;for(let wt=0,Xt=H.length;wt<Xt;wt++){let Pt=k(H[wt],ht[wt],qt);Ut(Pt.x,Pt.y,d+F)}for(let wt=0,Xt=B.length;wt<Xt;wt++){let Pt=B[wt];lt=Rt[wt];for(let oe=0,Bt=Pt.length;oe<Bt;oe++){let P=k(Pt[oe],lt[oe],qt);v?Ut(P.x,P.y+w[h-1].y,w[h-1].x+F):Ut(P.x,P.y,d+F)}}}dt(),Ct();function dt(){let _t=s.length/3;if(u){let St=0,F=X*St;for(let qt=0;qt<gt;qt++){let wt=Y[qt];zt(wt[2]+F,wt[1]+F,wt[0]+F)}St=h+g*2,F=X*St;for(let qt=0;qt<gt;qt++){let wt=Y[qt];zt(wt[0]+F,wt[1]+F,wt[2]+F)}}else{for(let St=0;St<gt;St++){let F=Y[St];zt(F[2],F[1],F[0])}for(let St=0;St<gt;St++){let F=Y[St];zt(F[0]+X*h,F[1]+X*h,F[2]+X*h)}}i.addGroup(_t,s.length/3-_t,0)}function Ct(){let _t=s.length/3,St=0;Yt(H,St),St+=H.length;for(let F=0,qt=B.length;F<qt;F++){let wt=B[F];Yt(wt,St),St+=wt.length}i.addGroup(_t,s.length/3-_t,1)}function Yt(_t,St){let F=_t.length;for(;--F>=0;){let qt=F,wt=F-1;wt<0&&(wt=_t.length-1);for(let Xt=0,Pt=h+g*2;Xt<Pt;Xt++){let oe=X*Xt,Bt=X*(Xt+1),P=St+qt+oe,T=St+wt+oe,et=St+wt+Bt,pt=St+qt+Bt;he(P,T,et,pt)}}}function Ut(_t,St,F){c.push(_t),c.push(St),c.push(F)}function zt(_t,St,F){Qt(_t),Qt(St),Qt(F);let qt=s.length/3,wt=b.generateTopUV(i,s,qt-3,qt-2,qt-1);ue(wt[0]),ue(wt[1]),ue(wt[2])}function he(_t,St,F,qt){Qt(_t),Qt(St),Qt(qt),Qt(St),Qt(F),Qt(qt);let wt=s.length/3,Xt=b.generateSideWallUV(i,s,wt-6,wt-3,wt-2,wt-1);ue(Xt[0]),ue(Xt[1]),ue(Xt[3]),ue(Xt[1]),ue(Xt[2]),ue(Xt[3])}function Qt(_t){s.push(c[_t*3+0]),s.push(c[_t*3+1]),s.push(c[_t*3+2])}function ue(_t){r.push(_t.x),r.push(_t.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Ny(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new hh[s.type]().fromJSON(s)),new n(i,t.options)}},Uy={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],h=t[s*3+1];return[new At(r,o),new At(a,c),new At(l,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],h=t[i*3+1],d=t[i*3+2],u=t[s*3],f=t[s*3+1],x=t[s*3+2],M=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new At(o,1-c),new At(l,1-d),new At(u,1-x),new At(M,1-m)]:[new At(a,1-c),new At(h,1-d),new At(f,1-x),new At(g,1-m)]}};function Ny(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ga=class n extends fh{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var To=class n extends He{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],h=[],d=t,u=(e-t)/s,f=new O,x=new At;for(let M=0;M<=s;M++){for(let g=0;g<=i;g++){let m=r+g/i*o;f.x=d*Math.cos(m),f.y=d*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),x.x=(f.x/e+1)/2,x.y=(f.y/e+1)/2,h.push(x.x,x.y)}d+=u}for(let M=0;M<s;M++){let g=M*(i+1);for(let m=0;m<i;m++){let b=m+g,w=b,v=b+i+1,N=b+i+2,L=b+1;a.push(w,v,L),a.push(v,N,L)}}this.setIndex(a),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(l,3)),this.setAttribute("uv",new ge(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var gn=class n extends He{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new O,u=new O,f=[],x=[],M=[],g=[];for(let m=0;m<=i;m++){let b=[],w=m/i,v=0;m===0&&o===0?v=.5/e:m===i&&c===Math.PI&&(v=-.5/e);for(let N=0;N<=e;N++){let L=N/e;d.x=-t*Math.cos(s+L*r)*Math.sin(o+w*a),d.y=t*Math.cos(o+w*a),d.z=t*Math.sin(s+L*r)*Math.sin(o+w*a),x.push(d.x,d.y,d.z),u.copy(d).normalize(),M.push(u.x,u.y,u.z),g.push(L+v,1-w),b.push(l++)}h.push(b)}for(let m=0;m<i;m++)for(let b=0;b<e;b++){let w=h[m][b+1],v=h[m][b],N=h[m+1][b],L=h[m+1][b+1];(m!==0||o>0)&&f.push(w,v,L),(m!==i-1||c<Math.PI)&&f.push(v,N,L)}this.setIndex(f),this.setAttribute("position",new ge(x,3)),this.setAttribute("normal",new ge(M,3)),this.setAttribute("uv",new ge(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var cs=class n extends He{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new O,d=new O,u=new O;for(let f=0;f<=i;f++)for(let x=0;x<=s;x++){let M=x/s*r,g=f/i*Math.PI*2;d.x=(t+e*Math.cos(g))*Math.cos(M),d.y=(t+e*Math.cos(g))*Math.sin(M),d.z=e*Math.sin(g),a.push(d.x,d.y,d.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(x/s),l.push(f/i)}for(let f=1;f<=i;f++)for(let x=1;x<=s;x++){let M=(s+1)*f+x-1,g=(s+1)*(f-1)+x-1,m=(s+1)*(f-1)+x,b=(s+1)*f+x;o.push(M,g,b),o.push(g,m,b)}this.setIndex(o),this.setAttribute("position",new ge(a,3)),this.setAttribute("normal",new ge(c,3)),this.setAttribute("uv",new ge(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Me=class extends ki{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qf,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=Ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function xa(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Oy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ar=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},mh=class extends Ar{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cu,endingEnd:Cu}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Pu:r=t,a=2*e-i;break;case Iu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Pu:o=t,c=2*i-e;break;case Iu:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,x=(i-e)/(s-e),M=x*x,g=M*x,m=-u*g+2*u*M-u*x,b=(1+u)*g+(-1.5-2*u)*M+(-.5+u)*x+1,w=(-1-f)*g+(1.5+f)*M+.5*x,v=f*g-f*M;for(let N=0;N!==a;++N)r[N]=m*o[h+N]+b*o[l+N]+w*o[c+N]+v*o[d+N];return r}},gh=class extends Ar{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(i-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},xh=class extends Ar{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},di=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=xa(e,this.TimeBufferType),this.values=xa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:xa(t.times,Array),values:xa(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new xh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new gh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new mh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ba:e=this.InterpolantFactoryMethodDiscrete;break;case kl:e=this.InterpolantFactoryMethodLinear;break;case Sc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ba;case this.InterpolantFactoryMethodLinear:return kl;case this.InterpolantFactoryMethodSmooth:return Sc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Oy(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Sc,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let d=a*i,u=d-i,f=d+i;for(let x=0;x!==i;++x){let M=e[d+x];if(M!==e[u+x]||M!==e[f+x]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=kl;var zs=class extends di{constructor(t,e,i){super(t,e,i)}};zs.prototype.ValueTypeName="bool";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=ba;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;var _h=class extends di{};_h.prototype.ValueTypeName="color";var yh=class extends di{};yh.prototype.ValueTypeName="number";var Mh=class extends Ar{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)fi.slerpFlat(r,0,o,l-a,o,l,c);return r}},Wa=class extends di{InterpolantFactoryMethodLinear(t){return new Mh(this.times,this.values,this.getValueSize(),t)}};Wa.prototype.ValueTypeName="quaternion";Wa.prototype.InterpolantFactoryMethodSmooth=void 0;var Bs=class extends di{constructor(t,e,i){super(t,e,i)}};Bs.prototype.ValueTypeName="string";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=ba;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;var vh=class extends di{};vh.prototype.ValueTypeName="vector";var Uf={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Eh=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],x=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null}}},Fy=new Eh,Ao=class{constructor(t){this.manager=t!==void 0?t:Fy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ao.DEFAULT_MATERIAL_NAME="__DEFAULT";var bh=class extends Ao{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Uf.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=fo("img");function c(){h(),Uf.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(d){h(),s&&s(d),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var Ro=class extends Ao{constructor(t){super(t)}load(t,e,i,s){let r=new Cn,o=new bh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}},Co=class extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Po=class extends Co{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},el=new ke,Nf=new O,Of=new O,Xa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mo,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Nf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nf),Of.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Of),e.updateMatrixWorld(),el.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(el),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(el)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ff=new ke,to=new O,nl=new O,Sh=class extends Xa{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new At(4,2),this._viewportCount=6,this._viewports=[new Oe(2,1,1,1),new Oe(0,1,1,1),new Oe(3,1,1,1),new Oe(1,1,1,1),new Oe(3,0,1,1),new Oe(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),to.setFromMatrixPosition(t.matrixWorld),i.position.copy(to),nl.copy(i.position),nl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(nl),i.updateMatrixWorld(),s.makeTranslation(-to.x,-to.y,-to.z),Ff.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ff)}},Io=class extends Co{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Sh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},wh=class extends Xa{constructor(){super(new Ia(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Lo=class extends Co{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new wh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Do=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=zf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function zf(){return performance.now()}var Bh="\\[\\]\\.:\\/",zy=new RegExp("["+Bh+"]","g"),Hh="[^"+Bh+"]",By="[^"+Bh.replace("\\.","")+"]",Hy=/((?:WC+[\/:])*)/.source.replace("WC",Hh),ky=/(WCOD+)?/.source.replace("WCOD",By),Vy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hh),Gy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hh),Wy=new RegExp("^"+Hy+ky+Vy+Gy+"$"),Xy=["material","materials","bones","map"],Th=class{constructor(t,e,i){let s=i||Ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ye=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(zy,"")}static parseTrackName(t){let e=Wy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Xy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ye.Composite=Th;Ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ye.prototype.GetterByBindingType=[Ye.prototype._getValue_direct,Ye.prototype._getValue_array,Ye.prototype._getValue_arrayElement,Ye.prototype._getValue_toArray];Ye.prototype.SetterByBindingTypeAndVersioning=[[Ye.prototype._setValue_direct,Ye.prototype._setValue_direct_setNeedsUpdate,Ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_array,Ye.prototype._setValue_array_setNeedsUpdate,Ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_arrayElement,Ye.prototype._setValue_arrayElement_setNeedsUpdate,Ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_fromArray,Ye.prototype._setValue_fromArray_setNeedsUpdate,Ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var H1=new Float32Array(1);var Bf=new ke,Rr=class{constructor(t,e,i=0,s=1/0){this.ray=new Ns(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new po,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Bf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bf),this}intersectObject(t,e=!0,i=[]){return Ah(t,this,i,e),i.sort(Hf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Ah(t[s],this,i,e);return i.sort(Hf),i}};function Hf(n,t){return n.distance-t.distance}function Ah(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Ah(r[o],t,e,!0)}}var Hs=class{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(dn(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ya=class extends Bi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rh}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rh);var pd={type:"change"},Gh={type:"start"},gd={type:"end"},ja=new Ns,md=new li,Yy=Math.cos(70*ed.DEG2RAD),hn=new O,Bn=2*Math.PI,ze={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Vh=1e-6,Qa=class extends Ya{constructor(t,e=null){super(t,e),this.state=ze.NONE,this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ks.ROTATE,MIDDLE:ks.DOLLY,RIGHT:ks.PAN},this.touches={ONE:vi.ROTATE,TWO:vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new fi,this._lastTargetPosition=new O,this._quat=new fi().setFromUnitVectors(t.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Hs,this._sphericalDelta=new Hs,this._scale=1,this._panOffset=new O,this._rotateStart=new At,this._rotateEnd=new At,this._rotateDelta=new At,this._panStart=new At,this._panEnd=new At,this._panDelta=new At,this._dollyStart=new At,this._dollyEnd=new At,this._dollyDelta=new At,this._dollyDirection=new O,this._mouse=new At,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Zy.bind(this),this._onPointerDown=qy.bind(this),this._onPointerUp=Ky.bind(this),this._onContextMenu=n1.bind(this),this._onMouseWheel=jy.bind(this),this._onKeyDown=Qy.bind(this),this._onTouchStart=t1.bind(this),this._onTouchMove=e1.bind(this),this._onMouseDown=Jy.bind(this),this._onMouseMove=$y.bind(this),this._interceptControlDown=i1.bind(this),this._interceptControlUp=s1.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(pd),this.update(),this.state=ze.NONE}update(t=null){let e=this.object.position;hn.copy(e).sub(this.target),hn.applyQuaternion(this._quat),this._spherical.setFromVector3(hn),this.autoRotate&&this.state===ze.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Bn:i>Math.PI&&(i-=Bn),s<-Math.PI?s+=Bn:s>Math.PI&&(s-=Bn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(hn.setFromSpherical(this._spherical),hn.applyQuaternion(this._quatInverse),e.copy(this.target).add(hn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=hn.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new O(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=hn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ja.origin.copy(this.object.position),ja.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ja.direction))<Yy?this.object.lookAt(this.target):(md.setFromNormalAndCoplanarPoint(this.object.up,this.target),ja.intersectPlane(md,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Vh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Vh||this._lastTargetPosition.distanceToSquared(this.target)>Vh?(this.dispatchEvent(pd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Bn/60*this.autoRotateSpeed*t:Bn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){hn.setFromMatrixColumn(e,0),hn.multiplyScalar(-t),this._panOffset.add(hn)}_panUp(t,e){this.screenSpacePanning===!0?hn.setFromMatrixColumn(e,1):(hn.setFromMatrixColumn(e,0),hn.crossVectors(this.object.up,hn)),hn.multiplyScalar(t),this._panOffset.add(hn)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;hn.copy(s).sub(this.target);let r=hn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Bn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Bn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Bn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Bn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Bn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Bn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Bn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Bn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new At,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function qy(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Zy(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Ky(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gd),this.state=ze.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Jy(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ks.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ze.DOLLY;break;case ks.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ze.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ze.ROTATE}break;case ks.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ze.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ze.PAN}break;default:this.state=ze.NONE}this.state!==ze.NONE&&this.dispatchEvent(Gh)}function $y(n){switch(this.state){case ze.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ze.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ze.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function jy(n){this.enabled===!1||this.enableZoom===!1||this.state!==ze.NONE||(n.preventDefault(),this.dispatchEvent(Gh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(gd))}function Qy(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function t1(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case vi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ze.TOUCH_ROTATE;break;case vi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ze.TOUCH_PAN;break;default:this.state=ze.NONE}break;case 2:switch(this.touches.TWO){case vi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ze.TOUCH_DOLLY_PAN;break;case vi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ze.TOUCH_DOLLY_ROTATE;break;default:this.state=ze.NONE}break;default:this.state=ze.NONE}this.state!==ze.NONE&&this.dispatchEvent(Gh)}function e1(n){switch(this._trackPointer(n),this.state){case ze.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ze.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ze.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ze.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ze.NONE}}function n1(n){this.enabled!==!1&&n.preventDefault()}function i1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function s1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function tc(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new He,l=0;for(let h=0;h<n.length;++h){let d=n[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,d=[];for(let u=0;u<n.length;++u){let f=n[u].index;for(let x=0;x<f.count;++x)d.push(f.getX(x)+h);h+=n[u].attributes.position.count}c.setIndex(d)}for(let h in r){let d=xd(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let M=0;M<o[h].length;++M)f.push(o[h][M][u]);let x=xd(f);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(x)}}return c}function xd(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){let h=n[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new vn(o,e,i),c=0;for(let l=0;l<n.length;++l){let h=n[l];if(h.isInterleavedBufferAttribute){let d=c/e;for(let u=0,f=h.count;u<f;u++)for(let x=0;x<e;x++){let M=h.getComponent(u,x);a.setComponent(u+d,x,M)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Vs=16,Gs=8,Xh=6;function yd(n){return()=>(n=n*1664525+1013904223>>>0,n/4294967296)}var r1=n=>"#"+("00000"+n.toString(16)).slice(-6);function qe(n,t){let e=Math.min(255,Math.max(0,(n>>16&255)*t)),i=Math.min(255,Math.max(0,(n>>8&255)*t)),s=Math.min(255,Math.max(0,(n&255)*t));return"rgb("+(e|0)+","+(i|0)+","+(s|0)+")"}var $t={noise:(n,t)=>(e,i)=>{for(let s=0;s<16;s++)for(let r=0;r<16;r++)e.fillStyle=qe(n,1-t/2+i()*t),e.fillRect(s,r,1,1)},grassTop:(n,t)=>{$t.noise(11132046,.16)(n,t);for(let e=0;e<14;e++)n.fillStyle=qe(9423992,.95+t()*.1),n.fillRect(t()*16|0,t()*16|0,1,1)},grassSide:(n,t)=>{$t.dirt(n,t);for(let e=0;e<16;e++){let i=3+(t()*2.2|0);for(let s=0;s<i;s++)n.fillStyle=qe(11132046,.9+t()*.15),n.fillRect(e,s,1,1)}},dirt:(n,t)=>{$t.noise(12094050,.18)(n,t);for(let e=0;e<10;e++)n.fillStyle=qe(10121296,1),n.fillRect(t()*16|0,t()*16|0,1,1)},stone:(n,t)=>{$t.noise(11842232,.12)(n,t);for(let e=0;e<6;e++){n.fillStyle=qe(10263202,1);let i=t()*14|0,s=t()*16|0;n.fillRect(i,s,2+(t()*3|0),1)}},sand:(n,t)=>$t.noise(15983286,.1)(n,t),pathTop:(n,t)=>{$t.noise(15324068,.14)(n,t);for(let e=0;e<12;e++)n.fillStyle=qe(13810058,1),n.fillRect(t()*16|0,t()*16|0,1,1)},pathSide:(n,t)=>{$t.dirt(n,t),n.fillStyle=qe(15324068,1),n.fillRect(0,0,16,2)},snowTop:(n,t)=>$t.noise(16514047,.05)(n,t),snowSide:(n,t)=>{$t.stone(n,t);for(let e=0;e<16;e++){let i=3+(t()*3|0);n.fillStyle=qe(16514047,.97+t()*.03),n.fillRect(e,0,1,i)}},logSide:(n,t)=>{for(let e=0;e<16;e++){let i=e%4===0?8215104:10121298;for(let s=0;s<16;s++)n.fillStyle=qe(i,.9+t()*.2),n.fillRect(e,s,1,1)}},logTop:(n,t)=>{$t.noise(14267267,.08)(n,t),n.strokeStyle=qe(11569760,1),n.lineWidth=1,[6,3].forEach(e=>{n.strokeRect(8-e+.5,8-e+.5,e*2-1,e*2-1)}),n.strokeStyle=qe(9071180,1),n.strokeRect(.5,.5,15,15)},leaves:n=>(t,e)=>{$t.noise(n,.22)(t,e);for(let i=0;i<22;i++)t.fillStyle=qe(n,.72),t.fillRect(e()*16|0,e()*16|0,1,1);for(let i=0;i<10;i++)t.fillStyle=qe(n,1.12),t.fillRect(e()*16|0,e()*16|0,1,1)},water:(n,t)=>{$t.noise(6991592,.08)(n,t);for(let e=0;e<7;e++)n.fillStyle="rgba(255,255,255,0.55)",n.fillRect(t()*13|0,t()*16|0,2+(t()*3|0),1)},birch:(n,t)=>{$t.noise(16052454,.06)(n,t);for(let e=0;e<8;e++)n.fillStyle="#5a5050",n.fillRect(t()*14|0,t()*16|0,2+(t()*2|0),1)},cobble:(n,t)=>{$t.noise(11052718,.1)(n,t),n.fillStyle=qe(8684172,1);for(let e=0;e<16;e+=4){n.fillRect(0,e,16,1);for(let i=e/4%2*3;i<16;i+=6)n.fillRect(i,e,1,4)}},deep:(n,t)=>$t.noise(9341592,.16)(n,t),clay:(n,t)=>{$t.noise(12950138,.12)(n,t);for(let e=3;e<16;e+=5)n.fillStyle=qe(11765610,1),n.fillRect(0,e,16,1)},gravel:(n,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++)n.fillStyle=qe([12433068,11051414,13814720][t()*3|0],1),n.fillRect(e,i,1,1)},planks:(n,t)=>{for(let e=0;e<16;e++){let i=e%4===3;for(let s=0;s<16;s++)n.fillStyle=i?"#9a7254":qe(13936760,.92+t()*.12),n.fillRect(s,e,1,1)}for(let e=0;e<16;e+=4)n.fillStyle="#9a7254",n.fillRect(e*3%16,e,1,3)},mossy:(n,t)=>{$t.cobble(n,t);for(let e=0;e<40;e++)n.fillStyle=qe(9423992,.9+t()*.2),n.fillRect(t()*16|0,t()*16|0,1,1)},shingle:(n,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=e>>2,r=e%4===3||(i+s*4)%8===0;n.fillStyle=qe(16777215,r?.78:.94+t()*.06),n.fillRect(i,e,1,1)}},plaster:(n,t)=>$t.noise(16777215,.07)(n,t),plankGrey:(n,t)=>{for(let e=0;e<16;e++){let i=e%4===3;for(let s=0;s<16;s++)n.fillStyle=qe(16777215,i?.72:.9+t()*.1),n.fillRect(s,e,1,1)}},glass:(n,t)=>{n.fillStyle="#d8f1fa",n.fillRect(0,0,16,16),n.fillStyle="#ffffff",n.fillRect(3,3,1,4),n.fillRect(4,3,1,2),n.fillRect(10,9,1,3),n.fillStyle="#bcd9e6",n.fillRect(0,0,16,1),n.fillRect(0,15,16,1),n.fillRect(0,0,1,16),n.fillRect(15,0,1,16),n.fillRect(7,0,2,16),n.fillRect(0,7,16,2)},bricks:(n,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=e%4===3||(i+(e>>2)%2*4)%8===7;n.fillStyle=s?"#e9e2d6":qe(16777215,.86+t()*.08),n.fillRect(i,e,1,1)}},stoneBrick:(n,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=e%8===7||(i+(e>>3)*8)%16===15;n.fillStyle=s?"#8c8a94":qe(11973820,.9+t()*.12),n.fillRect(i,e,1,1)}},farmland:(n,t)=>{$t.noise(8018496,.14)(n,t);for(let e=1;e<16;e+=4)n.fillStyle="#5e4430",n.fillRect(0,e,16,1)},sprucePlank:(n,t)=>{for(let e=0;e<16;e++){let i=e%4===3;for(let s=0;s<16;s++)n.fillStyle=i?"#5e4430":qe(9069640,.9+t()*.12),n.fillRect(s,e,1,1)}for(let e=0;e<16;e+=4)n.fillStyle="#5e4430",n.fillRect(e*5%16,e,1,3)},wheat:(n,t)=>{for(let e=1;e<15;e+=2){let i=9+(t()*5|0);n.fillStyle="#c9b45a",n.fillRect(e,16-i,1,i),n.fillStyle="#f2d36b",n.fillRect(e,16-i,1,4)}},carrot:(n,t)=>{for(let e=2;e<14;e+=3)n.fillStyle="#6faa5e",n.fillRect(e,7,1,6),n.fillRect(e+1,8,1,3),n.fillStyle="#f2963a",n.fillRect(e,13,2,3)},sprout:(n,t)=>{for(let e=1;e<15;e+=3)n.fillStyle="#7fc46a",n.fillRect(e+1,10,1,6),n.fillRect(e,10,3,1),n.fillRect(e+2,12,1,1)},tuft:(n,t)=>{for(let e=1;e<15;e+=2){let i=5+(t()*7|0);n.fillStyle=qe(9423992,.85+t()*.25),n.fillRect(e,16-i,1,i)}},flower:n=>(t,e)=>{t.fillStyle="#6faa5e",t.fillRect(7,8,2,8),t.fillRect(5,11,2,1),t.fillRect(9,13,2,1),t.fillStyle=r1(n),t.fillRect(6,4,4,3),t.fillRect(5,5,6,1),t.fillStyle="#fff6b0",t.fillRect(7,5,2,1)},reed:(n,t)=>{n.fillStyle="#7cb86f";for(let e=3;e<14;e+=3)n.fillRect(e,2+(t()*4|0),1,14);n.fillStyle="#a77a52",n.fillRect(6,2,2,4)},lily:(n,t)=>{n.fillStyle="#84c784",n.beginPath(),n.arc(8,8,6.5,.3,Math.PI*2-.3),n.lineTo(8,8),n.fill(),n.fillStyle="#ffb6c1",n.fillRect(9,6,2,2)}},mt={GRASS_TOP:0,GRASS_SIDE:1,DIRT:2,STONE:3,SAND:4,PATH_TOP:5,PATH_SIDE:6,SNOW_TOP:7,SNOW_SIDE:8,LOG:9,LOG_TOP:10,LEAF_G:11,LEAF_M:12,LEAF_L:13,LEAF_P:14,WATER:15,BIRCH:16,COBBLE:17,DEEP:18,CLAY:19,GRAVEL:20,PLANKS:21,MOSSY:22,LEAF_T:23,TUFT:24,FL_PINK:25,FL_WHITE:26,FL_YELLOW:27,FL_BLUE:28,FL_LAV:29,REED:30,LILY:31,SHINGLE:32,PLASTER:33,PLANK_GREY:34,GLASS:35,BRICKS:36,STONE_BRICK:37,FARMLAND:38,SPRUCE_PLANK:39,WHEAT:40,CARROT:41,SPROUT:42},Md=[$t.grassTop,$t.grassSide,$t.dirt,$t.stone,$t.sand,$t.pathTop,$t.pathSide,$t.snowTop,$t.snowSide,$t.logSide,$t.logTop,$t.leaves(8834168),$t.leaves(8178084),$t.leaves(11196796),$t.leaves(16167880),$t.water,$t.birch,$t.cobble,$t.deep,$t.clay,$t.gravel,$t.planks,$t.mossy,$t.leaves(7320465),$t.tuft,$t.flower(16752575),$t.flower(16777215),$t.flower(16769658),$t.flower(10473471),$t.flower(13809919),$t.reed,$t.lily,$t.shingle,$t.plaster,$t.plankGrey,$t.glass,$t.bricks,$t.stoneBrick,$t.farmland,$t.sprucePlank,$t.wheat,$t.carrot,$t.sprout],ls=null;function o1(){if(ls)return ls;let n=document.createElement("canvas");n.width=Vs*Gs,n.height=Vs*Xh;let t=n.getContext("2d");return Md.forEach((e,i)=>{t.save(),t.translate(i%Gs*Vs,Math.floor(i/Gs)*Vs),t.beginPath(),t.rect(0,0,Vs,Vs),t.clip(),e(t,yd(101+i*7)),t.restore()}),ls=new mn(n),ls.magFilter=sn,ls.minFilter=sn,ls.generateMipmaps=!1,ls.colorSpace=De,ls}var Wh=new Map;function pi(n){if(Wh.has(n))return Wh.get(n);let t=document.createElement("canvas");t.width=t.height=Vs,Md[n](t.getContext("2d"),yd(101+n*7));let e=new mn(t);return e.magFilter=sn,e.minFilter=sn,e.generateMipmaps=!1,e.wrapS=e.wrapT=lo,e.colorSpace=De,Wh.set(n,e),e}var _d=n=>{let t=n%Gs/Gs,e=1-(Math.floor(n/Gs)+1)/Xh,i=8e-4;return[t+i,e+i,t+1/Gs-i,e+1/Xh-i]},Nt={AIR:0,GRASS:1,DIRT:2,STONE:3,SAND:4,PATH:5,SNOW:6,LOG:7,LEAF_G:8,LEAF_M:9,LEAF_L:10,LEAF_P:11,WATER:12,BIRCH:13,COBBLE:14,DEEP:15,CLAY:16,GRAVEL:17,LEAF_T:18,MOSSY:19,PLANKS:20,BRICK:21,FARM:22},$e=[];$e[Nt.GRASS]=[mt.GRASS_TOP,mt.GRASS_SIDE,mt.DIRT];$e[Nt.DIRT]=[mt.DIRT,mt.DIRT,mt.DIRT];$e[Nt.STONE]=[mt.STONE,mt.STONE,mt.STONE];$e[Nt.SAND]=[mt.SAND,mt.SAND,mt.SAND];$e[Nt.PATH]=[mt.PATH_TOP,mt.PATH_SIDE,mt.DIRT];$e[Nt.SNOW]=[mt.SNOW_TOP,mt.SNOW_SIDE,mt.STONE];$e[Nt.LOG]=[mt.LOG_TOP,mt.LOG,mt.LOG_TOP];$e[Nt.BIRCH]=[mt.LOG_TOP,mt.BIRCH,mt.LOG_TOP];$e[Nt.LEAF_G]=[mt.LEAF_G,mt.LEAF_G,mt.LEAF_G];$e[Nt.LEAF_M]=[mt.LEAF_M,mt.LEAF_M,mt.LEAF_M];$e[Nt.LEAF_L]=[mt.LEAF_L,mt.LEAF_L,mt.LEAF_L];$e[Nt.LEAF_P]=[mt.LEAF_P,mt.LEAF_P,mt.LEAF_P];$e[Nt.LEAF_T]=[mt.LEAF_T,mt.LEAF_T,mt.LEAF_T];$e[Nt.WATER]=[mt.WATER,mt.WATER,mt.WATER];$e[Nt.COBBLE]=[mt.COBBLE,mt.COBBLE,mt.COBBLE];$e[Nt.DEEP]=[mt.DEEP,mt.DEEP,mt.DEEP];$e[Nt.CLAY]=[mt.CLAY,mt.CLAY,mt.CLAY];$e[Nt.GRAVEL]=[mt.GRAVEL,mt.GRAVEL,mt.GRAVEL];$e[Nt.BRICK]=[mt.STONE_BRICK,mt.STONE_BRICK,mt.STONE_BRICK];$e[Nt.FARM]=[mt.FARMLAND,mt.DIRT,mt.DIRT];$e[Nt.MOSSY]=[mt.MOSSY,mt.MOSSY,mt.MOSSY];$e[Nt.PLANKS]=[mt.PLANKS,mt.PLANKS,mt.PLANKS];var ec=n=>n===Nt.LEAF_G||n===Nt.LEAF_M||n===Nt.LEAF_L||n===Nt.LEAF_P||n===Nt.LEAF_T,No=class{constructor(t,e,i,s,r,o){Object.assign(this,{x0:t,y0:e,z0:i,sx:s,sy:r,sz:o}),this.d=new Uint8Array(s*r*o),this.plants=[],this.tint=new Map}idx(t,e,i){let s=t-this.x0,r=e-this.y0,o=i-this.z0;return s<0||r<0||o<0||s>=this.sx||r>=this.sy||o>=this.sz?-1:(r*this.sz+o)*this.sx+s}get(t,e,i){let s=this.idx(t,e,i);return s<0?0:this.d[s]}set(t,e,i,s){let r=this.idx(t,e,i);r>=0&&(this.d[r]=s)}top(t,e){for(let i=this.y0+this.sy-1;i>=this.y0;i--){let s=this.get(t,i,e);if(s&&s!==Nt.WATER)return i}return null}plant(t,e,i,s,r){this.plants.push([t,e,i,s,r||1])}build(t){let e={p:[],n:[],u:[],c:[]},i={p:[],n:[],u:[],c:[]},s=[{d:[1,0,0],v:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],s:1,b:.84},{d:[-1,0,0],v:[[0,0,1],[0,1,1],[0,1,0],[0,0,0]],s:1,b:.84},{d:[0,1,0],v:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],s:0,b:1},{d:[0,-1,0],v:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],s:2,b:.62},{d:[0,0,1],v:[[1,0,1],[1,1,1],[0,1,1],[0,0,1]],s:1,b:.92},{d:[0,0,-1],v:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],s:1,b:.76}],r=t==null?.88:t;for(let u=0;u<this.sy;u++)for(let f=0;f<this.sz;f++)for(let x=0;x<this.sx;x++){let M=this.d[(u*this.sz+f)*this.sx+x];if(!M)continue;let g=this.x0+x,m=this.y0+u,b=this.z0+f,w=$e[M];if(!w)continue;let v=this.tint.get((u*this.sz+f)*this.sx+x)||1;s.forEach(N=>{let L=this.get(g+N.d[0],m+N.d[1],b+N.d[2]);if(M===Nt.WATER){if(L!==Nt.AIR)return}else if(L&&L!==Nt.WATER&&!(ec(L)&&!ec(M)))return;if(ec(M)&&ec(L))return;let D=M===Nt.WATER?i:e,[z,A,S,B]=_d(w[N.s]),q=M===Nt.WATER&&this.get(g,m+1,b)!==Nt.WATER,Y=N.v.map(([ht,Rt,lt])=>[g+ht,m+(q&&Rt===1?r:Rt),b+lt]),H=N.b*v,k=H,X=H,gt=H;if(M!==Nt.WATER&&L===Nt.WATER){let ht=0,Rt=g+N.d[0],lt=b+N.d[2];for(let re=m+N.d[1];this.get(Rt,re,lt)===Nt.WATER&&ht<6;re++)ht++;let ne=Math.max(.32,1-.2*ht);k=H*ne*.62,X=H*ne*.82,gt=H*Math.min(1,ne*1.05)}let $=N.d[1]!==0?[[z,A],[S,A],[S,B],[z,B]]:[[z,A],[z,B],[S,B],[S,A]];[0,1,2,0,2,3].forEach(ht=>{D.p.push(...Y[ht]),D.n.push(...N.d),D.u.push(...$[ht]),D.c.push(k,X,gt)})})}let o=u=>{let f=new He;return f.setAttribute("position",new ge(u.p,3)),f.setAttribute("normal",new ge(u.n,3)),f.setAttribute("uv",new ge(u.u,2)),f.setAttribute("color",new ge(u.c,3)),f},a=o1(),c=new Dt(o(e),new Me({map:a,vertexColors:!0}));c.castShadow=!0,c.receiveShadow=!0,c.userData.keepBatch=!0;let l=new Dt(o(i),new Me({map:a,vertexColors:!0,transparent:!0,opacity:.84,depthWrite:!1}));l.receiveShadow=!0,l.userData.keepBatch=!0,l.renderOrder=1;let h={p:[],n:[],u:[],c:[]};this.plants.forEach(([u,f,x,M,g])=>{let[m,b,w,v]=_d(M),N=.9*g,L=.45*g;[[[-L,-L],[L,L]],[[-L,L],[L,-L]]].forEach(([[D,z],[A,S]])=>{let B=[[u+D,f,x+z],[u+A,f,x+S],[u+A,f+N,x+S],[u+D,f+N,x+z]],q=[[m,b],[w,b],[w,v],[m,v]];[0,1,2,0,2,3].forEach(Y=>{h.p.push(...B[Y]),h.n.push(0,1,0),h.u.push(...q[Y]),h.c.push(1,1,1)})})});let d=new Dt(o(h),new Me({map:a,vertexColors:!0,alphaTest:.5,side:An}));return d.userData.keepBatch=!0,{solid:c,water:l,plants:d}}};function hs(n,t,e,i,s,r){let o={oak:[Nt.LEAF_G,Nt.LEAF_L][r()*2|0],birch:Nt.LEAF_L,mint:Nt.LEAF_M,cherry:Nt.LEAF_P,pine:Nt.LEAF_T}[s]||Nt.LEAF_G,a=s==="birch"?Nt.BIRCH:Nt.LOG,c=(h,d,u,f)=>{n.get(h,d,u)||n.set(h,d,u,f)};if(s==="pine"){let h=6+(r()*3|0);for(let u=0;u<h;u++)n.set(t,e+u,i,Nt.LOG);let d=2;for(let u=2;u<=h;u++){let f=u===h?0:(h-u)%2===0?Math.max(1,d-1):d;for(let x=-f;x<=f;x++)for(let M=-f;M<=f;M++)Math.abs(x)+Math.abs(M)<=f+(f>1?0:1)&&!(x===0&&M===0&&u<h)&&c(t+x,e+u,i+M,o);u%2===0&&d>1&&u>h/2&&d--}c(t,e+h,i,o),c(t,e+h+1,i,o);return}let l=(s==="birch"?5:4)+(r()*2|0);for(let h=0;h<l;h++)n.set(t,e+h,i,a);for(let h=l-2;h<=l+1;h++){let d=h>=l?1:2;for(let u=-d;u<=d;u++)for(let f=-d;f<=d;f++)d===2&&Math.abs(u)===2&&Math.abs(f)===2&&r()<.75||h===l+1&&Math.abs(u)+Math.abs(f)>1||c(t+u,e+h,i+f,o)}}function vd(n,t,e,i){let s=n.attributes.uv,r=[[i,e],[i,e],[t,i],[t,i],[t,e],[t,e]];for(let o=0;o<6;o++)for(let a=0;a<4;a++){let c=o*4+a;s.setXY(c,s.getX(c)*r[o][0],s.getY(c)*r[o][1])}return s.needsUpdate=!0,n}var Ir=16,Oo=n=>{if(typeof n=="number")return n;if(!n)return 16777215;if(n[0]==="#")return parseInt(n.length===4?n.slice(1).split("").map(e=>e+e).join(""):n.slice(1,7),16);let t=n.match(/(\d+)\D+(\d+)\D+(\d+)/);return t?+t[1]<<16|+t[2]<<8|+t[3]:16777215},Ei=(n,t)=>{n=Oo(n);let e=i=>Math.max(0,Math.min(255,Math.round(i*t)));return e(n>>16&255)<<16|e(n>>8&255)<<8|e(n&255)},us=(n,t,e)=>{let i=n*374761393+t*668265263+e*2147483647|0;return i=(i^i>>>13)*1274126177,((i^i>>>16)>>>0)/4294967296};function c1(){let n=new Map,t=new Map,e=(s,r,o)=>s+","+r+","+o,i={S:n,G:t,put(s,r,o,a,c){s=Math.round(s),r=Math.round(r),o=Math.round(o),!(r<0)&&(c&&n.has(e(s,r,o))||((c?t:n).set(e(s,r,o),Oo(a)),c||t.delete(e(s,r,o))))},del(s,r,o){n.delete(e(s,r,o)),t.delete(e(s,r,o))},has(s,r,o){return n.has(e(s,r,o))},each(s){for(let r=0;r<20;r++)for(let o=-2;o<Ir+2;o++)for(let a=-2;a<Ir+2;a++)s(a,r,o)},fill(s,r,o){i.each((a,c,l)=>{s(a+.5,c+.5,l+.5)&&i.put(a,c,l,typeof r=="function"?r(a,c,l):r,o)})},cuboid(s,r,o,a,c,l,h,d){for(let u=r;u<c;u++)for(let f=o;f<l;f++)for(let x=s;x<a;x++)i.put(x,u,f,typeof h=="function"?h(x,u,f):h,d)},cyl(s,r,o,a,c,l,h,d,u){h=h==null?o:h;for(let f=a;f<c;f++){let x=c-a<=1?o:o+(h-o)*(f-a)/(c-a-1);for(let M=-2;M<Ir+2;M++)for(let g=-2;g<Ir+2;g++){let m=Math.hypot(g+.5-s,M+.5-r);m<=x&&(!d||m>x-d)&&i.put(g,f,M,typeof l=="function"?l(g,f,M):l,u)}}},ell(s,r,o,a,c,l,h,d){i.fill((u,f,x)=>{let M=(u-s)/a,g=(f-r)/c,m=(x-o)/l;return M*M+g*g+m*m<=1&&(!d||d(u,f,x))},h)},log(s,r,o,a,c,l){for(let h=s;h<r;h++)for(let d=0;d<20;d++)for(let u=-2;u<Ir+2;u++)Math.hypot(d+.5-o,u+.5-a)<=c&&i.put(h,d,u,typeof l=="function"?l(h,d,u):l)},top(s,r){for(let o=19;o>=0;o--)if(i.has(s,o,r))return o;return-1},sprinkle(s,r,o,a){s.forEach(([c,l],h)=>{let d=r[h%r.length];if(!d)return;let u=-1;for(let f=0;f<(a||o||1);f++)for(let x=0;x<(o||1);x++)u=Math.max(u,i.top(c+x,l+f));for(let f=0;f<(a||o||1);f++)for(let x=0;x<(o||1);x++)i.put(c+x,u+1,l+f,d)})}};return i}var ft=8,Yh=[[4,5],[9,4],[6,9],[10,9],[3,8],[8,11],[11,6],[5,12]],Ed={bowl(n,t){n.cyl(ft,ft,3.2,0,1,14930886),n.cyl(ft,ft,3.2,1,2,16777215),n.cyl(ft,ft,3.8,2,6,t.soup||"#f3d9a8",6.2),n.cyl(ft,ft,4.2,1,7,(e,i)=>i===6?16165309:Ei(16777215,.93+i*.012),7.6,1.2),t.noodle&&n.fill((e,i,s)=>i>5&&i<6.9&&Math.hypot(e-ft,s-ft)<5.6&&(Math.floor(e)+Math.floor(s)*2)%5===0,t.noodle),n.sprinkle(Yh.slice(0,6),t.top||[],2,2),t.egg&&(n.cuboid(9,6,9,12,7,11,16777215),n.put(10,7,10,16761402))},pot(n,t){n.cyl(ft,ft,6.8,0,6,(e,i)=>i===5?10132136:9079448,6.8,1.1),n.cyl(ft,ft,6,0,1,7631999),n.cyl(ft,ft,5.8,1,5,t.soup||"#e8603f"),n.cuboid(0,4,7,1,5,9,7631999),n.cuboid(15,4,7,16,5,9,7631999),n.sprinkle(Yh,t.top||[],2,1)},plate(n,t){n.cyl(ft,ft,6.4,0,1,15260879),n.cyl(ft,ft,7.8,1,2,16777215),n.cyl(ft,ft,6.2,1,2,16183014),t.rice&&n.ell(t.main?5.5:ft,2,ft,t.main?3.6:5,2.8,t.main?4.2:4.6,(e,i,s)=>Ei(t.rice,.94+us(e,i,s)*.1),(e,i)=>i>=2),t.sauce&&n.cyl(t.rice?10.5:ft,ft,t.rice?3.4:5.2,2,3,t.sauce),t.main&&(n.cuboid(8,2,5,13,4,11,t.main),n.cuboid(8,4,5,13,5,11,Ei(t.main,1.2))),t.egg&&(n.cyl(4.5,11.5,2.4,2,3,16777215),n.put(4,3,11,16761402)),t.veg&&(n.cuboid(11,2,11,14,3,13,t.veg),n.put(12,3,12,Ei(t.veg,.8))),n.sprinkle(Yh,t.dots||[],2,2)},bread(n){n.ell(ft,2.6,ft,7.2,2.6,2.8,15250538,(t,e)=>e>=0);for(let t=3;t<13;t++)for(let e=3;e<6;e++)for(let i=7;i<9;i++)n.del(t,e,i);for(let t=3;t<13;t++)n.put(t,3,7,["#ff8f7a","#7fc46a","#b5654a","#ffb3a3"][(t>>1)%4]),n.put(t,3,8,t%2?"#7fc46a":"#f6e0b8");[3,6,9,12].forEach(t=>{let e=n.top(t,6);n.put(t,e,6,13208126)})},xeo(n){n.fill((t,e,i)=>e<3&&i>=ft&&Math.hypot(t-ft,i-ft)<=7.2-(e>2?1:0),(t,e,i)=>Math.hypot(t-ft,i-ft)>6.3?14262842:e===2?16767338:16172618),[[5,"#ff9f8f"],[7,"#7fc46a"],[9,"#ffffff"],[11,"#7fc46a"]].forEach(([t,e])=>{n.put(t,0,7,e),n.put(t,1,7,e)})},rolls(n,t){n.cyl(ft,ft,7.6,0,1,16777215),[4,8,12].forEach(e=>n.log(2,14,2.6,e,1.7,(i,s,r)=>i===13||i===2?Oo(t.edge):t.fill&&us(i,s,r)>.86?Oo(t.fill[(i+s)%2]):Ei(t.roll,.95+us(i,s,r)*.12)))},bun(n,t){n.ell(ft,0,ft,6.2,6,6.2,(e,i,s)=>i>4&&Math.hypot(e-ft,s-ft)<1.8?14204580:t.bun,(e,i)=>i>=0),n.cyl(ft,ft,5,0,1,14930886)},skewer(n,t){n.cuboid(0,3,7,16,4,8,12883572),(t.bits||[]).forEach((e,i)=>n.cuboid(2+i*3,1,5,4+i*3+i%2,6,10,(s,r)=>r===5?Ei(e,1.2):e))},corn(n){n.log(2,13,2.8,ft,2.4,(t,e,i)=>(t+e+i)%2?16765803:15906874),n.cuboid(13,1,7,16,4,9,12883572),n.cuboid(5,0,3,13,1,6,8373354),n.cuboid(5,0,10,13,1,13,8373354),n.cuboid(6,1,4,11,2,5,6989914)},potato(n){n.ell(ft,2.4,ft,6.5,2.6,3.6,10111578,(t,e)=>e>=0);for(let t=4;t<13;t++)for(let e=7;e<10;e++){let i=n.top(t,e);n.put(t,i,e,16167770)}n.put(4,3,6,6961728),n.put(12,2,10,6961728)},sushi(n,t){[[2,4],[9,9]].forEach(([e,i])=>{n.cuboid(e,0,i,e+5,3,i+3,(s,r,o)=>Ei(16777215,.93+us(s,r,o)*.08)),n.cuboid(e-1,3,i,e+6,4,i+3,t.fish||"#ff9f80"),n.cuboid(e,4,i,e+5,5,i+3,Ei(t.fish||"#ff9f80",1.12)),n.cuboid(e+2,0,i-1,e+3,5,i+4,3820090),n.cuboid(e+2,5,i,e+3,6,i+3,3820090)})},onigiri(n){n.fill((t,e,i)=>e<11&&i>5&&i<11&&Math.abs(t-ft)<=(11.5-e)*.55,(t,e,i)=>Ei(16777215,.94+us(t,e,i)*.07)),n.cuboid(5,0,5,11,4,12,3820090)},balls(n,t){n.cyl(ft,ft,7.4,0,1,16777215),[[4,6],[9,5],[12,10],[6,11],[9,9]].forEach(([e,i])=>{n.ell(e,2.6,i,2.3,2.1,2.3,t.ball||"#d99a4e",(s,r)=>r>=1),n.put(e,4,i,t.sauce||"#7a3f2c"),n.put(e-1,4,i,t.sauce||"#7a3f2c"),n.put(e,5,i,8373354)})},kimbap(n){n.cyl(ft,ft,7.4,0,1,16777215),[[4,5],[11,6],[7,11]].forEach(([t,e])=>{n.cyl(t,e,2.8,1,4,3095088),n.cyl(t,e,2.1,1,4,16777215),n.put(t,3,e,16765803),n.put(t-1,3,e,16748378),n.put(t,3,e-1,8373354)})},dumpling(n){[[4,5],[11,6],[7,11]].forEach(([t,e],i)=>{n.ell(t,.5,e,3.6,2.6,2.4,(s,r)=>r===0?14921834:r>=2&&(s+i)%2?15259320:16313560,(s,r)=>r>=0)})},pizza(n){n.fill((t,e,i)=>e<2&&i>2&&Math.abs(t-ft)<=(15-i)*.55,(t,e)=>e===1?16765803:15250538),n.cuboid(1,0,1,15,3,3,14260814),n.cuboid(2,3,1,14,4,3,15250538),[[6,5],[9,6],[7,9],[8,12]].forEach(([t,e])=>n.cuboid(t,2,e,t+2,3,e+2,14241850)),[[5,7],[10,9],[8,4]].forEach(([t,e])=>n.put(t,2,e,8373354))},burger(n){n.cyl(ft,ft,6.2,0,2,15246666),n.cyl(ft,ft,6.6,2,3,8373354),n.cyl(ft,ft,6.4,3,5,8011564),n.cuboid(2,5,2,14,6,14,16765803),n.cyl(ft,ft,5.6,6,7,15224895),n.ell(ft,7,ft,6.4,4.6,6.4,15246666,(t,e)=>e>=7),[[5,6],[9,5],[7,9],[10,9],[6,11]].forEach(([t,e])=>n.put(t,n.top(t,e)+1,e,16774102))},fries(n){[[4,6],[6,8],[8,6],[10,8],[5,9],[9,9],[7,7],[11,6]].forEach(([t,e],i)=>n.cuboid(t,4,e,t+1,11+i%3,e+1,(s,r)=>r>=10+i%3?15906874:16765803)),n.cyl(ft,ft,4.6,0,9,15224895,5.4),n.cuboid(6,3,12,10,6,13,16777215)},drumstick(n){n.ell(6,3.6,ft,4.8,3.6,3.8,(t,e)=>e>5?15250538:14260814,(t,e)=>e>=0),n.log(10,14,3,ft,1.1,16775406),n.ell(14.2,3.4,7,1.4,1.4,1.4,16775406),n.ell(14.2,3.4,9,1.4,1.4,1.4,16775406)},hotdog(n){n.ell(ft,2,ft,7.2,2.4,3.4,15250538,(t,e,i)=>e>=0&&!(e>2&&Math.abs(i-ft)<1.2)),n.log(0,16,3.2,ft,1.6,14241850);for(let t=2;t<14;t++)n.put(t,5,ft-1+(t>>1)%2,16765803)},flan(n){n.cyl(ft,ft,7.4,0,1,16777215),n.cyl(ft,ft,5.4,1,7,(t,e)=>e===6?9062954:16767114,4.2),[[4,8],[11,7],[8,4],[7,12]].forEach(([t,e])=>{n.put(t,5,e,9062954),n.put(t,4,e,9062954)})},glass(n,t){n.cyl(ft,ft,3.6,0,13,15267583,3.6,.9,!0),n.cyl(ft,ft,3.6,0,1,13165810);let e=1;(t.layers||[]).forEach(i=>{n.cyl(ft,ft,2.8,e,e+3,i),e+=3}),n.cyl(ft,ft,2.8,e,e+1,t.top||"#ffffff"),n.cuboid(9,6,8,10,16,9,16748464)},cone(n,t){n.cyl(ft,ft,.8,0,8,(e,i,s)=>(e+i+s)%2?15250538:14260814,3.4),n.ell(ft,10.5,ft,4.4,4,4.4,t.scoop||"#ffb6d0"),n.put(ft,15,ft,15224895),n.put(ft,14,ft,15224895)},cake(n){n.cyl(ft,ft,6.2,0,6,(t,e,i)=>Math.hypot(t+.5-ft,i+.5-ft)>5.3&&(e===2||e===4)?16752575:16774112),n.cyl(ft,ft,6.4,6,7,16777215);for(let t=0;t<8;t++){let e=t/8*Math.PI*2;n.put(ft+Math.cos(e)*5,7,ft+Math.sin(e)*5,16777215)}n.cuboid(7,7,7,9,9,9,15224895),n.put(8,9,8,8373354)},donut(n){n.fill((t,e,i)=>{let s=Math.hypot(t-ft,i-ft);return e<4&&(s-4.4)**2+(e-1.6)**2<=2.9**2},(t,e)=>e>=2?16752575:15250538),[[4,6,16777215],[11,6,10473471],[6,11,16765803],[11,10,16777215],[8,3,10473471]].forEach(([t,e,i])=>n.put(t,n.top(t,e)+1,e,i))},cookie(n){n.cyl(ft,ft,6.6,0,2,(t,e,i)=>Ei(15250538,.95+us(t,e,i)*.1)),n.cyl(ft,ft,5,2,3,15250538),[[5,6],[9,5],[7,9],[11,9],[5,11],[9,12]].forEach(([t,e])=>n.put(t,n.top(t,e),e,6961706))},mochi(n){n.cuboid(1,0,3,15,1,13,14207160),[[5,9,16765414],[11,9,13495501],[8,5,16774880]].forEach(([t,e,i])=>n.ell(t,1,e,3.2,3,3.2,i,(s,r)=>r>=1))},cup(n,t){n.cyl(ft,ft,3.2,0,12,15792383,3.9,.9,!0),n.cyl(ft,ft,3.2,0,1,13690610),n.cyl(ft,ft,2.4,1,10,t.drink||"#d9b08a",3),t.cream&&n.cyl(ft,ft,3,10,12,16777215),t.boba&&[[6,7],[8,9],[10,8],[7,10],[9,6]].forEach(([e,i])=>n.put(e,1,i,3811882)),t.ice&&[[6,7],[9,9]].forEach(([e,i])=>n.cuboid(e,9,i,e+2,11,i+2,16777215,!0)),t.slice&&n.fill((e,i,s)=>e>11&&e<13&&Math.hypot(i-11,s-ft)<2.4,(e,i,s)=>Math.hypot(i-11,s-ft)>1.6?16777215:Oo(t.slice)),n.cyl(ft,ft,4.2,12,13,14215410,4.2,.9,!0),n.cuboid(9,6,8,10,17,9,16748464)},coconut(n){n.ell(ft,4.6,ft,5.8,5,5.8,(t,e,i)=>us(t,e,i)>.85?6989914:8373354,(t,e)=>e>=0&&e<9),n.cyl(ft,ft,3.2,8,9,16775920),n.cuboid(9,8,8,10,14,9,16748464)},mug(n,t){n.cyl(ft-1,ft,4.2,0,9,16777215,4.2,1),n.cyl(ft-1,ft,4.2,0,1,15128780),n.cyl(ft-1,ft,3.2,1,8,t.drink||"#c98a4a"),n.cuboid(11,2,7,13,3,9,16777215),n.cuboid(11,6,7,13,7,9,16777215),n.cuboid(12,3,7,13,6,9,16777215),[[6,10],[8,12],[7,14]].forEach(([e,i])=>n.put(e,i,ft,16777215,!0))}},l1=[[[1,0,0],[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],.86],[[-1,0,0],[[0,0,1],[0,1,1],[0,1,0],[0,0,0]],.86],[[0,1,0],[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],1],[[0,-1,0],[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],.6],[[0,0,1],[[1,0,1],[1,1,1],[0,1,1],[0,0,1]],.93],[[0,0,-1],[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],.93]];function bd(n,t,e,i){let s=[],r=[],o=[],a=[],c=new ce;n.forEach((h,d)=>{let[u,f,x]=d.split(",").map(Number),M=.94+us(u,f,x)*.1;l1.forEach(([g,m,b])=>{let w=u+g[0]+","+(f+g[1])+","+(x+g[2]);if(n.has(w)||t&&t.has(w))return;c.setHex(h,De);let v=s.length/3;m.forEach(([N,L,D])=>{s.push((u+N-ft)*e,(f+L)*e,(x+D-ft)*e),r.push(g[0],g[1],g[2]),o.push(c.r*b*M,c.g*b*M,c.b*b*M)}),a.push(v,v+1,v+2,v,v+2,v+3)})});let l=new He;return l.setAttribute("position",new ge(s,3)),l.setAttribute("normal",new ge(r,3)),l.setAttribute("color",new ge(o,3)),l.setIndex(a),new Dt(l,i)}var h1=new Me({vertexColors:!0}),u1=new Me({vertexColors:!0,transparent:!0,opacity:.42,depthWrite:!1}),qh={};function Gi(n,t,e){let i=n+JSON.stringify(t||{});if(!qh[i]){let c=c1();(Ed[n]||Ed.bowl)(c,t||{}),qh[i]=c}let s=qh[i],r=(e||.4)/Ir,o=new Kt,a=bd(s.S,null,r,h1);if(a.castShadow=!0,o.add(a),s.G.size){let c=bd(s.G,s.S,r,u1);c.renderOrder=2,o.add(c)}return o}var f1={land:{W:320,H:236,houses:[[16,116],[52,116],[88,116],[124,116],[172,116],[208,116],[244,116],[16,150],[52,150],[192,23],[66,24],[88,150],[124,150],[16,186],[52,186],[88,186],[124,187],[180,152]],hall:[134,38],pond:[264,206],pondR:[8,4],peak:{x:0,z:-45,R:31,Rp:17,H:16,lot:[28,18],house:[-3.5,-1.5],car:[3.5,4.8],swing:[-8.6,1.6]},back:-86,roads:[[8,110.5,312,110.5],[8,144.5,312,144.5],[8,180.5,206,180.5],[8,214.5,170,214.5],[46,110.5,46,214.5],[160,110.5,160,214.5]],river:[[310,-62],[306,-6],[300,62],[292,110.5],[288,144.5],[282,175],[272,194]],mountains:[[-40,-60,5,11],[-24,-76,6,14],[-4,-80,6,13],[18,-76,5.5,12],[36,-60,5,11]]},port:{W:200,H:360,houses:[[8,132],[8,184],[8,236],[8,288],[168,132],[168,184],[168,236],[168,288],[56,134],[132,51],[16,56],[88,134],[120,134],[56,186],[88,186],[120,186],[60,239],[116,239]],hall:[68,30],pond:[100,318],pondR:[6.5,3.6],peak:{x:0,z:-53,R:26,Rp:15,H:14,lot:[25,16],house:[-1.5,-1],car:[5,4.2],swing:[-7.8,1]},back:-96,roads:[[44.5,124.5,155.5,124.5],[44.5,124.5,44.5,330],[155.5,124.5,155.5,312],[44.5,162.5,155.5,162.5],[44.5,214.5,155.5,214.5],[44.5,274.5,155.5,274.5]],river:[[216,-120],[214,-30],[210,120],[206,230],[200,300],[170,330],[128,322]],mountains:[[-22,-80,5,10],[-6,-88,5,12],[10,-88,5,11],[25,-76,4.5,9]]}},un,tn,xn,ee,Pn,Be,Ge,kn,ds,fs,yn,Hn;function Od(n){un=f1[n];let t=(o,a)=>[(o-un.W/2)/4,(a-un.H/2)/4];tn=un.houses.map(([o,a])=>t(o+12,a+11)),xn=t(un.hall[0],un.hall[1]);let e=t(un.pond[0],un.pond[1]);ee={x:e[0],z:e[1],rx:un.pondR[0],rz:un.pondR[1]},Pn=un.roads.map(([o,a,c,l])=>t(o,a).concat(t(c,l))),kn=un.river.map(([o,a])=>{let c=t(o,a);return{x:c[0],z:c[1]}}),ds=un.mountains.map(o=>[o[0],o[1],o[2]*1.25,o[3]*1.5]);{let o=kn[0],a=0,c=1e9;ds.forEach(([x,M],g)=>{let m=Math.hypot(x-o.x,M-o.z);m<c&&(c=m,a=g)});let l=ds[a],h=kn[1].x-l[0],d=kn[1].z-l[1],u=Math.hypot(h,d)||1;l=ds[a]=[l[0]+h/u*1.5,l[1]+d/u*1.5,Math.max(l[2],8),Math.max(l[3],18)],h=kn[1].x-l[0],d=kn[1].z-l[1],u=Math.hypot(h,d)||1,Hn={i:a,x:l[0],z:l[1],r:l[2],h:l[3],dx:h/u,dz:d/u},kn[0]={x:l[0]+Hn.dx*l[2]*.45,z:l[1]+Hn.dz*l[2]*.45};let f=kn[kn.length-1];Math.hypot(f.x-ee.x,f.z-ee.z)<22&&kn.push({x:ee.x+(f.x-ee.x)*.25,z:ee.z+(f.z-ee.z)*.25})}fs=tn.map((o,a)=>un.faces&&un.faces[a]||0),d1();let i=un.W/8+11,s=un.H/8+11,r=un.back||-s;Be={a:i,b:(s-r)/2,cz:(s+r)/2,n:2.6,w:i*2,d:s-r}}var Ys=1.5;function d1(){let n=un.peak,t={x:n.x,z:n.z,R:n.R,Rp:n.Rp,H:n.H};t.base=q=>{if(q<=t.Rp)return t.H;if(q>=t.R)return 0;let Y=(t.R-q)/(t.R-t.Rp);return t.H*Y*Y*(3-2*Y)};let e=t.Rp+2.2,i=t.R-1.5,s=[],r=q=>{let Y=Math.PI+q*Math.PI*2,H=e+(i-e)*q;return{x:t.x+Math.cos(Y)*H,z:t.z+Math.sin(Y)*H,y:t.base(H),s:q}},o=Math.PI*2*(e+i)/2,a=Math.ceil(o/.5);for(let q=0;q<=a;q++)s.push(r(q/a));t.spiral=s,t.at=r;let[c,l]=n.lot;yn={house:9,x0:t.x-c/2,z0:t.z-l/2,x1:t.x+c/2,z1:t.z+l/2,car:[t.x+n.car[0],t.z+n.car[1]],swing:[t.x+n.swing[0],t.z+n.swing[1]]},tn[9]=[t.x+n.house[0],t.z+n.house[1]],fs[9]=0;let h={x:yn.car[0],z:yn.z1+1.6},d=s[0],u=[{x:h.x,z:h.z},{x:h.x,z:yn.z1+3.2},{x:d.x+.8,z:yn.z1+3.2},{x:d.x,z:d.z}];t.drive=u.map(q=>({x:q.x,z:q.z,y:t.H}));let f=r(.5),x=f.x-t.x,M=f.z-t.z,g=Math.hypot(x,M);t.ledge={x:f.x-x/g*5.2,z:f.z-M/g*5.2,y:f.y,r:4.6},tn[10]=[t.ledge.x,t.ledge.z],fs[10]=Math.atan2(x,M),xn=[t.x,t.z+t.R+5];let m=s[s.length-1],b=Pn.filter(q=>q[1]===q[3]).reduce((q,Y)=>!q||Y[1]<q[1]?Y:q,null),w=Math.min(b[0],b[2]),v=Math.max(b[0],b[2]);Pn.push([m.x,m.z,m.x,b[1]]),(m.x<w||m.x>v)&&Pn.push([m.x,b[1],m.x<w?w:v,b[1]]),t.foot={x:m.x,z:m.z};let N=.5,L=t.R+4,D=t.x-L,z=t.z-L,A=Math.ceil(L*2/N)+1,S=new Float32Array(A*A),B=t.drive.concat(s);for(let q=0;q<A;q++)for(let Y=0;Y<A;Y++){let H=D+Y*N,k=z+q*N,X=Math.hypot(H-t.x,k-t.z),gt=t.base(X),$=Math.hypot(H-t.ledge.x,k-t.ledge.z);$<t.ledge.r?gt=t.ledge.y:$<t.ledge.r+2.5&&(gt=Sd(t.ledge.y,gt,wd(($-t.ledge.r)/2.5)));let ht=1e9,Rt=0;for(let lt=1;lt<B.length;lt++){let ne=B[lt-1],re=B[lt],dt=re.x-ne.x,Ct=re.z-ne.z,Yt=dt*dt+Ct*Ct,Ut=Math.max(0,Math.min(1,((H-ne.x)*dt+(k-ne.z)*Ct)/(Yt||1))),zt=Math.hypot(H-(ne.x+dt*Ut),k-(ne.z+Ct*Ut));zt<ht&&(ht=zt,Rt=ne.y+(re.y-ne.y)*Ut)}X>t.Rp-.5&&(ht<Ys+.3?gt=Rt:ht<Ys+2.3&&(gt=Sd(Rt,gt,wd((ht-Ys-.3)/2)))),S[q*A+Y]=gt}t.grid={x0:D,z0:z,step:N,n:A,v:S},t.roadDist=(q,Y)=>{let H=1e9;for(let k=1;k<B.length;k++){let X=B[k-1],gt=B[k];if(Math.abs(q-X.x)>6&&Math.abs(q-gt.x)>6||Math.abs(Y-X.z)>6&&Math.abs(Y-gt.z)>6)continue;let $=gt.x-X.x,ht=gt.z-X.z,Rt=$*$+ht*ht,lt=Math.max(0,Math.min(1,((q-X.x)*$+(Y-X.z)*ht)/(Rt||1)));H=Math.min(H,Math.hypot(q-(X.x+$*lt),Y-(X.z+ht*lt)))}return H},Ge=t}var Sd=(n,t,e)=>n+(t-n)*e;function wd(n){return n=Math.max(0,Math.min(1,n)),n*n*(3-2*n)}var eu=(n,t,e)=>Math.hypot(n-Ge.x,t-Ge.z)<Ge.R+(e||0),oc=(n,t,e)=>eu(n,t,2)&&Ge.roadDist(n,t)<Ys+(e||0),Qh=(n,t,e)=>Math.hypot(n-Ge.ledge.x,t-Ge.ledge.z)<Ge.ledge.r+(e||0);function zn(n,t){let e=Ge&&Ge.grid;if(!e)return 0;let i=(n-e.x0)/e.step,s=(t-e.z0)/e.step;if(i<0||s<0||i>=e.n-1||s>=e.n-1)return 0;let r=Math.floor(i),o=Math.floor(s),a=i-r,c=s-o,l=e.n,h=e.v;return(h[o*l+r]*(1-a)+h[o*l+r+1]*a)*(1-c)+(h[(o+1)*l+r]*(1-a)+h[(o+1)*l+r+1]*a)*c}var Zh=(n,t,e)=>eu(n,t,e||0)&&Math.hypot(n-Ge.x,t-Ge.z)>Ge.Rp-.5-(e||0)&&!oc(n,t,-(e||0))&&!Qh(n,t,-(e||0))&&Math.hypot(n-Ge.x,t-Ge.z)<Ge.R-1+(e||0);function Xs(n,t){let e=1e9;for(let i=1;i<kn.length;i++){let s=kn[i-1],r=kn[i],o=r.x-s.x,a=r.z-s.z,c=o*o+a*a,l=Math.max(0,Math.min(1,((n-s.x)*o+(t-s.z)*a)/(c||1)));e=Math.min(e,Math.hypot(n-(s.x+o*l),t-(s.z+a*l)))}return e}var nc=(n,t,e)=>!!yn&&n>yn.x0-(e||0)&&n<yn.x1+(e||0)&&t>yn.z0-(e||0)&&t<yn.z1+(e||0),Fd=3,p1=2.1,m1=Fd,bi=m1/2;function Ur(n,t){let e=Be,i=Math.abs(Math.cos(n)),s=Math.abs(Math.sin(n));return Math.pow(Math.pow(i/e.a,e.n)+Math.pow(s/e.b,e.n),-1/e.n)*(1+.035*Math.sin(3*n+.7)+.025*Math.sin(5*n+2.1)+.015*Math.sin(8*n))*(t||1)}function Wi(n,t,e){let i=t-Be.cz;return Math.hypot(n,i)<Ur(Math.atan2(i,n))-(e||0)}Od("land");var wi={grass:12576420,grassSide:10474377,dirt:13214334,dirt2:11569768,road:15983293,wall:16774888,wall2:15785156,door:12882799,frame:15323828,trunk:11042910,leaf:[10147472,8834176,11460768],water:9425898,sand:15983549,lily:8701828,roof:{pink:16165309,peach:16368540,blue:10473444,lav:13219054,mint:10738109,yellow:16111752,hall:15834032},flower:[16758465,16777215,16375946,14273008,16763304]},Kh=new Map;function de(n,t){let e=n+JSON.stringify(t||{});if(!Kh.has(e)){let i=Object.assign({color:n},t||{});!("map"in i)&&!i.noMap&&(i.map=pi(mt.PLASTER)),delete i.noMap,Kh.set(e,new Me(i))}return Kh.get(e)}var Jh=new Map;function Ze(n,t,e){let i=n+":"+(t==null?"x":t)+JSON.stringify(e||{});return Jh.has(i)||Jh.set(i,new Me(Object.assign({map:pi(n),color:t==null?16777215:t},e||{}))),Jh.get(i)}var $h=new Map;function zd(n,t,e){let i=n.toFixed(3)+","+t.toFixed(3)+","+e.toFixed(3);return $h.has(i)||$h.set(i,vd(new Fe(n,t,e),n,t,e)),$h.get(i)}function I(n,t,e,i,s=0,r=0,o=0,a){let c=new Dt(zd(n,t,e),a&&a.isMaterial?a:de(i,a));return c.position.set(s,r,o),c.castShadow=!0,c.receiveShadow=!0,c}function en(n,t,e,i,s=0,r=0,o=0,a){let c=new Dt(new Fe(n,t,e),a&&a.isMaterial?a:de(i,a));return c.position.set(s,r,o),c.castShadow=!0,c.receiveShadow=!0,c}function ic(n){return()=>(n=n*1664525+1013904223>>>0,n/4294967296)}var Vt=(n,t)=>n+Math.random()*(t-n),Vn=(n,t,e)=>n+(t-n)*e,Si=(n,t,e=0)=>((n-ee.x)/(ee.rx+e))**2+((t-ee.z)/(ee.rz+e))**2<1;var fc=new Qe({transparent:!0,opacity:0,depthWrite:!1}),nu=[],lc=[];function dc(){let n=new Me({color:12576498,emissive:16765562,emissiveIntensity:0});return nu.push(n),n}function ps(n){let t=new Eo;t.moveTo(0,-.5),t.bezierCurveTo(-.9,.1,-.5,.75,0,.35),t.bezierCurveTo(.5,.75,.9,.1,0,-.5);let e=new Va(t,{depth:.18,bevelEnabled:!1,curveSegments:10});return new Dt(e,de(n,{emissive:n,emissiveIntensity:.25}))}function g1(n,t,e){let i=new Kt,s=Ze(mt.SHINGLE,e),r=Ze(mt.SPRUCE_PLANK),o=t+1.6,a=0;for(;;a++){let c=o-a,l=a*.5+.25;if(c<=.6)break;i.add(I(n+1,.5,1,0,0,l,c/2-.5,s)),i.add(I(n+1,.5,1,0,0,l,-c/2+.5,s)),c>2.2&&i.add(I(n+.2,.5,c-2,0,0,l,0,r))}return i.add(I(n+1.2,.35,.6,0,0,a*.5+.1,0,r)),i.userData.h=a*.5+.3,i}function Bd(){let n=new Me({color:16773576,emissive:16761963,emissiveIntensity:0,map:pi(mt.PLASTER)});lc.push(n);let t=new Kt;return t.add(I(.3,.32,.3,0,0,0,0,n)),t.add(I(.34,.08,.34,4864564,0,.2,0)),t.add(I(.08,.12,.08,4864564,0,.3,0)),t}function Td(n,t){let e=new Kt,i=t?10:5,s=t?7:4,r=t?4:3,o=t?wi.roof.hall:wi.roof[n.roof]||wi.roof.pink,a=Ze(mt.STONE_BRICK),c=Ze(mt.COBBLE),l=Ze(mt.LOG),h=Ze(mt.PLANKS),d=Ze(mt.SPRUCE_PLANK);e.add(I(i+.5,.3,s+.5,0,0,.15,0,a)),e.add(I(i,.9,s,0,0,.3+.45,0,c)),e.add(I(i-.02,r-.9,s-.02,0,0,.3+.9+(r-.9)/2,0,t?Ze(mt.PLASTER,16774114):h));let u=t?[-i/2+.25,-2.6,2.6,i/2-.25]:[-i/2+.25,i/2-.25];[-1,1].forEach(D=>u.forEach(z=>e.add(I(.5,r,.5,0,z,.3+r/2,D*(s/2-.15),l)))),e.add(I(i+.3,.4,s+.3,0,0,.3+r-.2,0,d));let f=g1(i,s,o);f.position.y=.3+r,e.add(f);let x=f.userData.h,M=t?2:1,g=t?2.6:2,m=new Kt;m.position.set(-M/2,.3,s/2+.02),e.add(m),m.add(I(M,g,.12,0,M/2,g/2,0,d)),m.add(I(.12,.12,.08,16375946,M-.2,g/2,.08)),e.add(I(M-.04,g-.04,.05,4864560,0,.3+g/2,s/2-.02)),e.userData.hinge=m,e.add(I(M+1,.3,1,0,0,.15,s/2+.7,a)),e.add(I(M+1.2,.2,1,0,0,.3+g+.35,s/2+.5,d)),[-1,1].forEach(D=>{let z=Bd();z.position.set(D*(M/2+.4),.3+g-.2,s/2+.2),e.add(z)});let b=dc();b.map=pi(mt.GLASS),e.userData.wm=b;let w=.3+(t?2.3:1.75),v=t?[-3.6,-1.5,1.5,3.6]:[-1.55,1.55];if(v.forEach(D=>{e.add(I(1.2,1.1,.12,0,D,w,s/2+.02,d)),e.add(I(1,.9,.14,0,D,w,s/2+.04,b))}),[-1,1].forEach(D=>{e.add(I(.12,1.1,1.2,0,D*(i/2+.02),w,0,d)),e.add(I(.14,.9,1,0,D*(i/2+.04),w,0,b))}),t||(v.forEach(D=>{e.add(I(1.2,.3,.4,0,D,w-.7,s/2+.22,d)),[-.35,0,.35].forEach((z,A)=>e.add(I(.22,.22,.22,wi.flower[A],D+z,w-.45,s/2+.22)))}),e.add(I(1,2,1,0,i/4,.3+r+x*.45,-s/5,c)),e.userData.chimney=new O(i/4,.3+r+x*.45+1.2,-s/5)),n&&n.heart){let D=ps(16744350);D.scale.setScalar(.9),D.position.set(0,.3+r+x*.42,s/2+.42),e.add(D),e.userData.heart=D}let N=null;if(t){[-1.5,1.5].forEach(A=>e.add(I(.6,r,.6,0,A,.3+r/2,s/2+.35,a))),e.add(I(i+.4,.4,1,0,0,.3+r+.1,s/2+.35,a)),e.add(I(.2,3,.2,0,0,.3+r+x+1.4,0,l));let D=I(1.4,.8,.08,16751536,.75,.3+r+x+2.4,0);e.add(D),e.userData.flag=D;let z=new Me({color:16375946,emissive:16739179,emissiveIntensity:0,map:pi(mt.PLASTER)});N=new Dt(zd(.7,.7,.7),z),N.position.set(0,.3+r+x*.42,s/2+.95),e.add(N),e.add(I(1.4,1.4,.1,0,0,.3+r+x*.42,s/2+.8,d))}e.userData.top=.3+r+x+(t?3.2:.6);let L=new Dt(new Fe(i+.6,r+x+.3,s+.6),fc);return L.position.y=(r+x+.3)/2,e.add(L),e.userData.pick=L,e.userData.bell=N,e.userData.doorZ=s/2+1.3,e}function Ad(n,t,e){let i=document.createElement("canvas");i.width=t,i.height=e,n(i.getContext("2d"),t,e);let s=new mn(i);return s.colorSpace=De,s.anisotropy=4,s}function iu(n,t,e,i,s,r){r=r||0,n.userData.wm=s,n.userData.top=i+.9,n.userData.size={cx:r,hw:t/2+.4,hd:e/2+.3};let o=new Dt(new Fe(t+.6,i+.3,e+.6),fc);return o.position.set(r,(i+.3)/2,0),n.add(o),n.userData.pick=o,n.userData.doorZ=e/2+1.3,n}function su(n,t,e,i,s){let r=new Kt;r.position.set(-t/2,.3,i),n.add(r),r.add(I(t,e,.1,s,t/2,e/2,0)),r.add(I(.06,.5,.06,14278115,t-.2,e/2,.07)),n.add(I(t-.04,e-.04,.05,3814720,0,.3+e/2,i-.04)),n.userData.hinge=r}function x1(){let n=new Kt,t=6.4,e=5.2,i=3,s=2.8,r=dc();n.add(I(t+5.4,.25,e+.6,15328478,2.3,.12,0)),n.add(I(t,i,e,16513784,0,.25+i/2,0)),[-2.15,2.15].forEach(x=>{n.add(I(1.7,2.45,.08,3814720,x,.25+1.3,e/2+.01)),n.add(I(1.55,2.3,.1,0,x,.25+1.3,e/2+.03,r))}),su(n,1.15,2.3,e/2+.03,9067068),n.add(I(t+.3,.18,e+.3,4867664,0,.25+i+.09,0));let o=.25+i+.18,a=de(16645370),c=new Dt(new Fe(t-.6,s,e-.4),a);c.position.set(-.3,o+s/2,-.4),c.castShadow=!0,c.receiveShadow=!0,n.add(c),n.add(I(t-.3,.16,e-.1,4867664,-.3,o+s+.08,-.4));let l=e/2-.4+.01-.2;n.add(I(2.9,2.35,.08,3814720,-.3,o+1.2,l+.02));let h=new Dt(new Fe(2.7,2.2,.06),new Me({color:12576498,transparent:!0,opacity:.6,emissive:16765562,emissiveIntensity:0}));h.position.set(-.3,o+1.2,l+.06),n.add(h),nu.push(h.material),n.add(I(.05,2.2,.08,3814720,-.3,o+1.2,l+.08)),n.add(I(t-.4,.14,1.5,15328478,-.2,o+.07,e/2+.55));let d=new Dt(new Fe(t-.5,.75,.04),new Me({color:14217722,transparent:!0,opacity:.45}));d.position.set(-.2,o+.52,e/2+1.28),n.add(d),n.add(I(t-.5,.05,.07,3814720,-.2,o+.92,e/2+1.28)),[-2.5,-1.95,1.75,2.3].forEach((x,M)=>{n.add(I(.34,.32,.34,[15921906,9080729][M%2],x,o+.3,e/2+.95));let g=new Dt(new Ga(.26,2),de(wi.leaf[M%3],{}));g.position.set(x,o+.62,e/2+.95),g.castShadow=!0,n.add(g)});let u=ps(16744350);u.scale.setScalar(.55),u.material=new Me({color:16744350,emissive:16732030,emissiveIntensity:.25}),u.position.set(-2.2,o+2.05,e/2-.55),n.add(u),n.userData.heart=u;let f=t/2+2.3;n.add(I(4.6,2.9,e,16513784,f,.25+1.45,0)),n.add(I(4.8,.16,e+.2,4867664,f,.25+2.98,0)),n.add(I(3.7,2.3,.08,5592926,f,.25+1.15,e/2+.02));for(let x=0;x<6;x++)n.add(I(3.7,.03,.1,7040630,f,.45+x*.38,e/2+.05));n.add(I(.5,.05,.05,16777215,f+1.4,2.95,e/2+.12));{let M=-e/2+.3,g=.9;n.add(I(4.4,.45,g-M+.4,16052716,f,3.31+.22,(M+g)/2));let m=new Dt(new Fe(3.8,.06,g-M-.2),new Me({color:7325932,transparent:!0,opacity:.88,emissive:2789312,emissiveIntensity:.15}));m.position.set(f,3.31+.42,(M+g)/2),n.add(m),n.userData.poolWater=m,n.add(I(.06,.6,.06,13225942,f+1.6,3.31+.75,g-.05)),n.add(I(.06,.6,.06,13225942,f+1.9,3.31+.75,g-.05));let b=new Dt(new cs(.32,.1,8,16),de(16748456));b.rotation.x=Math.PI/2,b.position.set(f-.9,3.31+.48,-.6),n.add(b),[-.9,.9].forEach(v=>{n.add(I(.6,.12,1.3,16777215,f+v,3.31+.25,e/2-.85)),n.add(I(.6,.35,.12,16777215,f+v,3.31+.4,e/2-.25))}),n.add(I(.06,1.6,.06,12883572,f+2,3.31+.8,e/2-.6)),n.add(I(1.5,.12,1.5,16165309,f+2,3.31+1.62,e/2-.6));let w=new Dt(new Fe(4.6,.7,.04),new Me({color:14217722,transparent:!0,opacity:.4}));w.position.set(f,3.31+.4,e/2+.08),n.add(w),n.userData.poolSpots=[{x:f-.55,y:3.31+.45,z:g+.05,ry:Math.PI},{x:f+.35,y:3.31+.45,z:g+.05,ry:Math.PI}]}return[-1,1].forEach(x=>n.add(I(.12,.85,.85,0,x*(t/2+.01)-(x>0,0),.25+1.6,-1.2,r))),n.userData.vip=!0,iu(n,t+4.6,e,o+s+.2,r,2.3)}function _1(){let n=new Kt,t=9.2,e=6.6,i=3.8,s=dc();n.add(I(t+.6,.25,e+.6,15326447,0,.12,0)),n.add(I(t,i,e,14273008,0,.25+i/2,0)),n.add(I(t+.4,.3,e+.4,16165309,0,.25+i+.15,0)),[-2.8,2.8].forEach(o=>{n.add(I(2.6,2,.1,16777215,o,1.5,e/2+.01)),n.add(I(2.4,1.8,.12,0,o,1.5,e/2+.03,s))}),su(n,1.8,2.4,e/2+.03,15834032),[[-1.4,16773544],[0,16758465],[1.4,10934504]].forEach(([o,a])=>{let c=ps(a);c.scale.setScalar(.45),c.position.set(o,.25+i-.55,e/2+.02),n.add(c)});let r=new Dt(new gn(.55,20,14),de(16027569));return r.position.set(3.2,.25+i+2.2,-1.5),r.castShadow=!0,n.add(r),n.add(I(.18,1.6,.18,3814720,3.2,.25+i+1.2,-1.5)),n.add(I(1.6,.3,1.6,3814720,3.2,.25+i+.45,-1.5)),iu(n,t,e,i+2.4,s)}function y1(){let n=new Kt,t=9.2,e=7,i=3.5,s=dc();n.add(I(t+.8,.22,e+.8,14605012,0,.11,0)),n.add(I(t,i,e,16513784,0,.22+i/2,0)),[[15895592,0],[3055195,.22],[14826299,.44]].forEach(([l,h])=>{n.add(I(t+.06,.2,e+.06,l,0,.22+i-.55-h,0))}),n.add(I(t+.5,.25,e+.5,15921906,0,.22+i+.12,0));let r=Ad((l,h,d)=>{l.fillStyle="#d8f1fa",l.fillRect(0,0,h,d);let u=["#ffb6c1","#f5d888","#a3d9bd","#a6d8e8","#f9c39c","#d9c9f0"];for(let f=0;f<4;f++){l.fillStyle="#c9e7f2",l.fillRect(0,12+f*28,h,3);for(let x=0;x<26;x++)l.fillStyle=u[(x+f)%u.length],l.fillRect(6+x*10,15+f*28,7,10+x%3*3)}},256,128),o=new Me({map:r,emissive:16773836,emissiveMap:r,emissiveIntensity:.1});[-2.65,2.65].forEach(l=>{n.add(I(3.4,2,.08,14605012,l,1.35,e/2+.01));let h=new Dt(new Fe(3.2,1.85,.1),o);h.position.set(l,1.35,e/2+.03),n.add(h)}),su(n,1.7,2.3,e/2+.03,12576498);let a=Ad((l,h,d)=>{l.fillStyle="#ffffff",l.fillRect(0,0,h,d),l.fillStyle="#2e9e5b",l.fillRect(10,18,108,16),l.fillStyle="#f28c28",l.fillRect(10,40,108,16),l.fillStyle="#e23b3b",l.font="bold 86px sans-serif",l.textAlign="center",l.fillText("7",64,98),l.font="bold 20px sans-serif",l.fillText("ELEVEn",64,122)},128,128),c=new Dt(new Fe(1.5,1.5,.14),[de(16777215),de(16777215),de(16777215),de(16777215),new Me({map:a}),de(16777215)]);return c.position.set(t/2-1.1,.22+i+1.05,e/2-.3),c.castShadow=!0,n.add(c),n.add(I(.12,.8,.12,14605012,t/2-1.1,.22+i+.35,e/2-.3)),[[15226446,-.5],[6131664,.45]].forEach(([l,h])=>{n.add(I(.8,1.8,.75,l,t/2+.45,1.12,e/2-1.2+h));let d=I(.04,.9,.55,0,t/2+.86,1.4,e/2-1.2+h,new Me({color:16775126,emissive:16773808,emissiveIntensity:.25}));n.add(d)}),[-4,-3.2].forEach(l=>n.add(I(.5,.5,.5,15895592,l,.47,e/2+.9))),n.userData.alwaysLit=!0,iu(n,t,e,i+1.9,s)}function M1(){let n=new Kt,t=2500653,e=14278115,i=5202805;n.add(I(1.9,1,4.4,t,0,.95,0)),n.add(I(1.75,.78,2.7,t,0,1.85,-.35)),[[-1,0],[1,0]].forEach(([o])=>n.add(I(.03,.55,2.4,i,o*.885,1.9,-.35))),n.add(I(1.6,.55,.03,i,0,1.9,1.01)),n.add(I(1.6,.55,.03,i,0,1.9,-1.71)),n.add(I(1.92,.06,4.42,e,0,1.46,0)),n.add(I(1.3,.35,.05,1776672,0,1.05,2.21));for(let o=-2;o<=2;o++)n.add(I(.03,.3,.06,e,o*.22,1.05,2.22));[-1,1].forEach(o=>{let a=new Dt(new Xe(.17,.17,.08,14),de(16775126,{emissive:16773808,emissiveIntensity:.35}));a.rotation.x=Math.PI/2,a.position.set(o*.72,1.12,2.22),n.add(a),n.add(I(.12,.12,.12,16754253,o*.95,1.5,1.95)),n.add(I(.22,.35,.05,14703183,o*.78,1,-2.22))}),n.add(I(1.94,.18,.2,1776672,0,.5,2.25)),n.add(I(1.94,.18,.2,1776672,0,.5,-2.25));let s=new Dt(new Xe(.4,.4,.24,16),de(1776672));s.rotation.x=Math.PI/2,s.position.set(0,1.15,-2.35),n.add(s);let r=new Dt(new Xe(.22,.22,.26,12),de(e));return r.rotation.x=Math.PI/2,r.position.set(0,1.15,-2.36),n.add(r),[[-.95,1.45],[.95,1.45],[-.95,-1.4],[.95,-1.4]].forEach(([o,a])=>{let c=new Dt(new Xe(.42,.42,.34,14),de(1776672));c.rotation.z=Math.PI/2,c.position.set(o,.42,a),c.castShadow=!0,n.add(c);let l=new Dt(new Xe(.22,.22,.36,10),de(e));l.rotation.z=Math.PI/2,l.position.set(o,.42,a),n.add(l)}),n.add(I(1.5,.05,2.2,3816514,0,2.27,-.35)),n}function v1(n,t){if(!yn)return{posts:[],blocks:[]};let e=yn,i={posts:[],blocks:[]},[s,r]=tn[e.house],[o,a]=e.car,c=t===Math.PI?e.z0:e.z1,l=zn(s,r),h=[[s-1.2,s+1.2],[o-1.6,o+1.6]],d=(g,m)=>Math.abs(m-c)<.01&&h.some(([b,w])=>g>b&&g<w),u=(g,m,b,w)=>{let v=Math.hypot(b-g,w-m),N=Math.max(1,Math.round(v/1));for(let L=0;L<N;L++){let D=Vn(g,b,(L+.5)/N),z=Vn(m,w,(L+.5)/N);if(d(D,z))continue;let A=I(v/N+.02,.55,.22,16052716,D,l+.27,z);A.rotation.y=Math.atan2(b-g,w-m)+Math.PI/2,n.add(A);let S=I(v/N,.32,.3,8831614,D,l+.68,z);S.rotation.y=A.rotation.y,n.add(S),i.posts.push({x:D,z,r:.45})}};u(e.x0,e.z0,e.x1,e.z0),u(e.x1,e.z0,e.x1,e.z1),u(e.x1,e.z1,e.x0,e.z1),u(e.x0,e.z1,e.x0,e.z0),i.blocks.push({x:s+5.5,z:r,hw:2.5,hd:2.8});let f=Math.min(c,a)-1.5,x=Math.max(c,a)+.5;n.add(I(3.4,.05,Math.abs(x-f)+1.5,14144203,o,l+.025,(f+x)/2-.5));let M=M1();return M.position.set(o,l,a),M.rotation.y=t,n.add(M),i.blocks.push({x:o,z:a,hw:1.2,hd:2.4}),i.car=M,i.exit={x:o,z:c+(t===Math.PI?-1.6:1.6)},n.add(I(1.3,.05,Math.abs(r-c),15392719,s,l+.03,(r+c)/2)),i}function Rd(){let n=new Kt;n.add(I(.16,2.2,.16,9206379,0,1.1,0));let t=new Me({color:16774351,emissive:16765562,emissiveIntensity:0});return lc.push(t),n.add(I(.5,.5,.5,0,0,2.45,0,t)),n.add(I(.62,.12,.62,9206379,0,2.76,0)),n}var E1=new Me({vertexColors:!0});function Hd(n,t){let e=[];n.traverse(i=>{i.isMesh||e.push(i)}),e.forEach(i=>{let s=i.children.filter(c=>c.isMesh&&!(t&&t.includes(c))&&!c.material.transparent&&!c.material.map);if(s.length<2)return;let r=s.map(c=>{let l=c.geometry.clone();Object.keys(l.attributes).forEach(f=>{f!=="position"&&f!=="normal"&&l.deleteAttribute(f)}),l.index&&(l=l.toNonIndexed()),l.clearGroups(),c.updateMatrix(),l.applyMatrix4(c.matrix);let h=c.material.color,d=l.attributes.position.count,u=new Float32Array(d*3);for(let f=0;f<d;f++)u[f*3]=h.r,u[f*3+1]=h.g,u[f*3+2]=h.b;return l.setAttribute("color",new vn(u,3)),l}),o=tc(r,!1);if(r.forEach(c=>c.dispose()),!o)return;s.forEach(c=>i.remove(c));let a=new Dt(o,E1);a.castShadow=!0,a.receiveShadow=!0,i.add(a)})}function ac(n,t,e,i,s,r,o){let a=new Kt;a.position.set(s,r,o);let c=I(n,t,e,i,0,-t/2,0);return a.add(c),a}var cc=[{hair:5914688,skin:16768198,shirt:12824814,pants:6253194,style:"short",uniform:!0},{hair:3878703,skin:15976614,shirt:12824814,pants:6253194,style:"long",uniform:!0},{hair:11039050,skin:16769744,shirt:12824814,pants:6253194,style:"short",uniform:!0},{hair:3025462,skin:15580570,shirt:10738109,pants:6253178,style:"short"},{hair:2038564,skin:16768198,shirt:16758465,pants:9080760,style:"twin"},{hair:9067068,skin:16175024,shirt:16111752,pants:7170698,style:"cap",cap:15834032},{hair:4864570,skin:15317140,shirt:12824814,pants:6253194,style:"short",glasses:!0,uniform:!0},{hair:13208410,skin:16769744,shirt:10147472,pants:8161960,style:"long"},{hair:3878703,skin:15976614,shirt:12824814,pants:6253194,style:"bun",glasses:!0,uniform:!0},null,{hair:5914688,skin:15580570,shirt:14273008,pants:7170698,style:"long"},{hair:3025462,skin:16768198,shirt:16111752,pants:8161960,style:"bun"},{hair:9067068,skin:15976614,shirt:10473444,pants:6253178,style:"short",glasses:!0},{hair:3878703,skin:15317140,shirt:10738109,pants:7170698,style:"cap",cap:10738109},{hair:13208410,skin:16769744,shirt:13482478,pants:9080760,style:"twin"},{hair:2367010,skin:16175024,shirt:16368540,pants:8161960,style:"short"},{hair:5914688,skin:16768198,shirt:16758465,pants:7170698,style:"long"},{hair:2038564,skin:15580570,shirt:9226408,pants:5196378,style:"cap",cap:16165309},{hair:11039050,skin:16769744,shirt:16111752,pants:9075306,style:"bun"}],tu={her:{hair:3877418,skin:16768198,shirt:16758465,pants:16758465,style:"long",dress:16165309},him:{hair:2367010,skin:15778976,shirt:10473444,pants:6253194,style:"short"}},Cd=[{hair:3878703,skin:15976614,shirt:12824814,pants:6253194,style:"short",uniform:!0},{hair:9067068,skin:16769744,shirt:12824814,pants:6253194,style:"long",uniform:!0},{hair:2367010,skin:15317140,shirt:12824814,pants:6253194,style:"bun",uniform:!0}],fe=1.75/32,hc=12*fe;function Lr(n,t){let e=new ce(n);return t&&(e.r=Math.min(1,e.r*t),e.g=Math.min(1,e.g*t),e.b=Math.min(1,e.b*t)),"#"+e.getHexString()}function kd(n,t){let e=document.createElement("canvas");e.width=e.height=64;let i=e.getContext("2d"),s=(n.hair^n.shirt^n.skin)>>>0,r=()=>(s=s*1664525+1013904223>>>0,s/4294967296),o=(M,g,m,b,w,v)=>{for(let N=0;N<b;N++)for(let L=0;L<m;L++)i.fillStyle=Lr(w,1+(r()-.5)*(v==null?.1:v)),i.fillRect(M+L,g+N,1,1)},a=(M,g,m)=>{i.fillStyle=typeof m=="string"?m:Lr(m),i.fillRect(M,g,1,1)},c=5981750,l=n.skin,h=n.hair,d=n.shirt,u=n.pants,f=n.style==="long"||n.style==="twin"||n.dress;o(0,0,32,16,l,.06),o(8,0,8,8,h),o(24,8,8,f?8:6,h),[0,16].forEach(M=>{o(M,8,8,f?7:4,h),o(M+(M?6:0),12,2,f?4:2,h)}),o(8,8,8,2,h),a(8,10,h),a(15,10,h),a(9,10,h),n.style==="cap"&&(o(8,0,8,8,n.cap),o(8,8,8,2,n.cap),o(0,8,8,2,n.cap),o(16,8,8,2,n.cap),o(24,8,8,2,n.cap)),[[9,12],[13,12]].forEach(([M,g])=>{if(t){a(M,g+1,"#3a2e33"),a(M+1,g+1,"#3a2e33");return}a(M,g,"#ffffff"),a(M+1,g,"#3a2e33"),a(M,g+1,"#ffffff"),a(M+1,g+1,"#3a2e33")}),a(9,14,"#ffa3b5"),a(14,14,"#ffa3b5"),a(11,14,Lr(l,.78)),a(12,14,Lr(l,.78)),a(11,15,"#c9707c"),a(12,15,"#c9707c"),n.glasses&&([9,13].forEach(M=>{["#6b5a4e"].forEach(g=>{a(M-1,12,g),a(M+2,12,g),a(M-1,13,g),a(M+2,13,g)})}),a(11,12,"#6b5a4e"),a(12,12,"#6b5a4e")),o(16,16,24,16,d),o(20,16,8,4,d,.05),o(23,20,2,1,l),n.uniform&&(o(22,20,4,1,16777215),o(21,22,2,2,16373355),o(20,31,8,1,9403592)),n.dress?(o(16,26,24,6,n.dress),o(20,25,8,1,Lr(n.dress,.9)&&n.dress)):o(16,30,24,2,Lr(u,.85)&&u,.05),o(20,22,8,1,d,.25),[[40,16],[32,48]].forEach(([M,g])=>{o(M,g,16,16,d),o(M,g+4+5,16,7,l,.06),o(M+4,g,4,4,d),o(M+8,g,4,4,l)}),[[0,16],[16,48]].forEach(([M,g])=>{o(M,g,16,16,n.dress?l:u),n.dress&&o(M,g+4,16,3,n.dress),o(M,g+4+10,16,2,c,.05),o(M+8,g,4,4,c)});let x=new mn(e);return x.magFilter=sn,x.minFilter=sn,x.generateMipmaps=!1,x.colorSpace=De,x}function Dr(n,t,e,i,s){let r=new Fe(n*fe,t*fe,e*fe),o=64,a=(h,d,u,f,x)=>{let M=h/o,g=(h+u)/o,m=1-d/o,b=1-(d+f)/o;return x?[g,m,M,m,g,b,M,b]:[M,m,g,m,M,b,g,b]},c=[a(i+e+n,s+e,e,t),a(i,s+e,e,t),a(i+e,s,n,e),a(i+e+n,s,n,e,!0),a(i+e,s+e,n,t),a(i+2*e+n,s+e,n,t)],l=r.attributes.uv;return c.forEach((h,d)=>{for(let u=0;u<4;u++)l.setXY(d*4+u,h[u*2],h[u*2+1])}),l.needsUpdate=!0,r}function zo(n){let t=new Kt,e={},i=new Me({map:kd(n)});e.mat=i,e.look=n;let s=(c,l,h,d)=>{let u=new Dt(c,i);return u.position.set(l,h,d),u.castShadow=!0,u.receiveShadow=!0,u},r=(c,l,h,d)=>{let u=new Kt;return u.position.set(c,l,h),u.add(d),u};e.legR=r(-2*fe,12*fe,0,s(Dr(4,12,4,0,16),0,-6*fe,0)),t.add(e.legR),e.legL=r(2*fe,12*fe,0,s(Dr(4,12,4,16,48),0,-6*fe,0)),t.add(e.legL),e.body=s(Dr(8,12,4,16,16),0,18*fe,0),t.add(e.body),e.armR=r(-6*fe,23.5*fe,0,s(Dr(4,12,4,40,16),0,-5.5*fe,0)),t.add(e.armR),e.armL=r(6*fe,23.5*fe,0,s(Dr(4,12,4,32,48),0,-5.5*fe,0)),t.add(e.armL);let o=new Kt;o.position.y=24*fe,t.add(o),e.head=o,o.add(s(Dr(8,8,8,0,0),0,4*fe,0));let a=(c,l,h,d,u,f,x)=>{let M=en(l*fe,h*fe,d*fe,c,u*fe,f*fe,x*fe);o.add(M)};if(n.style==="bun"&&a(n.hair,3,3,3,0,9.3,-2),n.style==="twin"&&(a(n.hair,2,4,2,-4.6,3.5,-1.5),a(n.hair,2,4,2,4.6,3.5,-1.5)),n.style==="cap"&&a(n.cap,8,1,3,0,6.5,5),n.style==="long"&&a(n.hair,8,5,1,0,-1.5,-4.5),n.dress){let c=en(9*fe,4*fe,5*fe,n.dress,0,12.5*fe,0);t.add(c)}{let c=new Kt;c.position.set(0,-11*fe,1.2*fe),c.visible=!1,c.add(en(9*fe,2.2*fe,2.2*fe,16112774,0,0,0)),c.add(en(1.2*fe,2.8*fe,2.8*fe,11879994,-4.9*fe,0,0)),c.add(en(1.2*fe,2.8*fe,2.8*fe,11879994,4.9*fe,0,0)),c.add(en(6*fe,3.5*fe,.3*fe,16509616,.5*fe,-2.6*fe,.4*fe)),e.armR.add(c),e.scroll=c}return e.kids=t.children.slice(),{g:t,parts:e}}var Vd=n=>n.style==="long"||n.style==="twin"||n.style==="bun";function Gd(n,t){return!n||!t||t==="f"===Vd(n)?n:Object.assign({},n,{style:(t==="f"?{short:"long",cap:"twin"}:{long:"short",twin:"cap",bun:"short"})[n.style]||(t==="f"?"long":"short"),cap:n.cap||n.shirt})}function Pd(n,t){let e=zo(t);(n.parts.kids||[]).forEach(s=>n.g.remove(s)),e.parts.kids.forEach(s=>n.g.add(s));let i={};Object.keys(n.parts).forEach(s=>{s in e.parts||(i[s]=n.parts[s])}),n.parts=Object.assign(e.parts,i)}function b1(){let n=new Kt,t={},e=16236938,i=14720350,s=16774118;n.add(en(.46,.4,.8,e,0,.5,0)),[-.12,.1].forEach(l=>n.add(en(.48,.06,.12,i,0,.71,l))),n.add(en(.36,.2,.5,s,0,.34,.05)),t.legs=[[-.14,.28],[.14,.28],[-.14,-.28],[.14,-.28]].map(([l,h])=>{let d=ac(.13,.32,.13,e,l,.34,h);return n.add(d),d});let r=new Kt;r.position.set(0,.78,.48),n.add(r),t.head=r,r.add(en(.5,.42,.42,e,0,0,0)),r.add(en(.3,.16,.06,s,0,-.1,.21)),[-.15,.15].forEach(l=>{let h=new Dt(new vo(.11,.2,4),de(i));h.position.set(l,.29,-.02),h.rotation.y=Math.PI/4,r.add(h);let d=en(.08,.1,.03,4010032,l*.8,.04,.215);r.add(d),(t.eyes=t.eyes||[]).push(d)}),r.add(en(.07,.05,.03,16752048,0,-.04,.23));let o=new Kt;o.position.set(0,.62,-.38),n.add(o),t.tail=o;let a=en(.1,.1,.4,e,0,.05,-.18);o.add(a);let c=new Kt;return c.position.set(0,.05,-.36),o.add(c),c.add(en(.1,.4,.1,i,0,.18,0)),o.rotation.x=.5,n.scale.setScalar(.6),Hd(n,t.eyes),{g:n,parts:t}}function S1(){let n=new Kt,t={},e=16774374,i=13211247;n.add(en(.56,.5,.95,e,0,.62,0)),n.add(en(.58,.3,.4,i,0,.76,-.15)),t.legs=[[-.17,.33],[.17,.33],[-.17,-.33],[.17,-.33]].map(([o,a])=>{let c=ac(.16,.4,.16,e,o,.42,a);return n.add(c),c});let s=new Kt;s.position.set(0,.98,.55),n.add(s),t.head=s,s.add(en(.56,.52,.5,e,0,0,0)),s.add(en(.3,.24,.26,e,0,-.1,.34)),s.add(en(.13,.1,.06,4010032,0,-.02,.48)),s.add(en(.1,.12,.06,16748451,.05,-.24,.42)),[-.3,.3].forEach(o=>{let a=ac(.12,.42,.26,i,o,.2,-.02);a.rotation.z=o>0?-.15:.15,s.add(a);let c=en(.08,.11,.03,4010032,o*.45,.08,.26);s.add(c),(t.eyes=t.eyes||[]).push(c)});let r=ac(.12,.42,.12,i,0,.82,-.47);return r.rotation.x=-.9,n.add(r),t.tail=r,n.scale.setScalar(.62),Hd(n,t.eyes),{g:n,parts:t}}function Id(n){let t=new Kt,e=[16751211,16777215,16757575][n%3],i=new Dt(new gn(.28,10,8),de(e));if(i.scale.set(.7,.6,1.4),t.add(i),n%3===1){let r=new Dt(new gn(.16,8,6),de(16744272));r.position.set(0,.1,.05),r.scale.set(1,.6,1.4),t.add(r)}let s=new Dt(new vo(.22,.35,4),de(e===16777215?16751211:e));return s.rotation.x=Math.PI/2,s.position.z=-.5,t.add(s),t.userData.tail=s,t}function w1(n){let t=new Kt,e=new Me({color:n,side:An}),i=()=>{let o=new Dt(new rs(.32,.26),e);o.position.x=.17;let a=new Kt;return a.add(o),a},s=i(),r=i();return r.scale.x=-1,t.add(s,r),t.userData.l=s,t.userData.r=r,t}function Ld(){let n=new Kt,t=15392715,e=3.5,i=Ze(mt.LOG),s=Ze(mt.LEAF_P),r=Ze(mt.LEAF_P,16769516),o=-2.2;n.add(I(1.4,e+3.4,1.4,0,o,(e+3.4)/2,-.3,i)),n.add(I(.9,.8,.9,0,o+1.1,.4,-.3,i)),n.add(I(.9,.6,.9,0,o-.9,.3,.3,i)),n.add(I(3.4,.55,.55,0,-.5,e+.05,0,i)),n.add(I(.6,2.2,.6,0,o-1.6,e+2.4,-.3,i)),n.add(I(.6,1.8,.6,0,o+1.4,e+2.6,.6,i)),[[o,e+3.6,-.3,9,2,7,s],[o,e+5.4,-.3,7,1.6,5.4,r],[o,e+6.7,-.3,4.4,1.1,3.4,r],[o-1.2,e+2.4,-.6,5.6,.8,4.6,s],[o+3.6,e+3.4,.4,2,1.4,2.6,s],[o-4.4,e+3.2,-.8,1.6,1.4,2.8,r]].forEach(([h,d,u,f,x,M,g])=>n.add(I(f,x,M,0,h,d,u,g))),[[-1,.4],[1.2,-1.1],[-3.6,1.6],[.6,1.9],[-4.4,-1.4],[2.4,.8]].forEach(([h,d])=>n.add(I(.3,.02,.3,16762070,o+h+1.5,.02,d)));let a=new Kt;a.position.set(0,e-.2,0),n.add(a);let c=e-.2-.56;[-.72,.72].forEach(h=>a.add(I(.06,c,.06,t,h,-c/2,0)));let l=I(1.65,.12,.5,0,0,-c,0,Ze(mt.PLANK_GREY,16165309));return a.add(l),n.userData.pivot=a,n.userData.seat=l,n}var ru=[];function T1(n,t){let e=document.createElement("canvas");e.width=e.height=16;let i=e.getContext("2d"),s=(h,d,u)=>{i.fillStyle=u,i.fillRect(h,d,1,1)},r=[];for(let h=0;h<9;h++)r.push([3+h,12-h]);let o=[];r.forEach(([h,d])=>{o.push([h,d,"#9a6a3e"],[h+1,d,"#6b4526"])}),[[12,2],[13,2],[13,3],[11,1],[12,1],[13,1],[14,1],[14,2],[14,3],[14,4],[10,2],[13,5]].forEach(([h,d])=>o.push([h,d,"#e6e6ee"])),[[12,3],[12,4],[11,3]].forEach(([h,d])=>o.push([h,d,"#b8b8c6"])),[[1,12],[2,11],[1,13],[2,14],[3,14],[1,11],[2,13],[4,14],[0,12],[3,15]].forEach(([h,d])=>o.push([h,d,"#ffffff"])),[[2,12],[3,13]].forEach(([h,d])=>o.push([h,d,"#f6a9bd"])),o.forEach(([h,d])=>{[[-1,0],[1,0],[0,-1],[0,1]].forEach(([u,f])=>s(h+u,d+f,"#4a3020"))}),o.forEach(([h,d,u])=>s(h,d,u));let a=new mn(e);a.magFilter=sn,a.minFilter=sn,a.colorSpace=De;let c=new os(new Vi({map:a,transparent:!0,depthWrite:!1,depthTest:!1,rotation:n}));c.scale.set(t,t,1),c.renderOrder=5;let l=new O(Math.cos(n+Math.PI/4),Math.sin(n+Math.PI/4),0);return ru.push({sp:c,dir:l,base:null}),c}function A1(n){ru.forEach(t=>{t.base||(t.base=t.sp.position.clone());let e=(Math.sin(n*4)*.5+.5)*.12;t.sp.position.set(t.base.x+t.dir.x*e,t.base.y+t.dir.y*e,t.base.z)})}function R1(n,t,e){let s=document.createElement("canvas"),r=s.getContext("2d");r.font="800 64px Nunito, sans-serif";let o=Math.ceil(r.measureText(n).width)+40;s.width=o,s.height=100;let a=s.getContext("2d");a.font="800 64px Nunito, sans-serif",a.textAlign="center",a.textBaseline="middle",a.lineJoin="round",t==="#ffffff"&&(a.shadowColor="rgba(40,30,40,.45)",a.shadowBlur=6,a.shadowOffsetY=3),a.fillStyle=t,a.fillText(n,o/2,s.height/2);let c=new mn(s);c.colorSpace=De;let l=new os(new Vi({map:c,transparent:!0,depthWrite:!1,depthTest:!1}));return l.scale.set(e*o/s.height,e,1),l.renderOrder=5,l}function Wd(n,t,e,i){let s=document.createElement("canvas");s.width=128,s.height=64;let r=s.getContext("2d");r.font="bold 48px sans-serif",r.fillStyle=t,r.textAlign="center",r.fillText(n,64,50);let o=new os(new Vi({map:new mn(s),transparent:!0,depthWrite:!1}));return o.scale.set(e,i,1),o.visible=!1,o}function Dd(n,t){return Math.hypot((n-ee.x)/(ee.rx+4.4),(t-ee.z)/(ee.rz+4.4))<1&&!Si(n,t,.4)}function C1(n){let t=new Mo(kn.map(o=>new O(o.x,0,o.z))),e=90,i=t.getSpacedPoints(e),s=new Cn,r=[];return Pn.forEach(([o,a,c,l])=>{let h=o===c;for(let d=0;d<i.length;d++){let u=i[d];!(h?Math.abs(u.x-o)<.95&&u.z>=Math.min(a,l)-.9&&u.z<=Math.max(a,l)+.9:Math.abs(u.z-a)<.95&&u.x>=Math.min(o,c)-.9&&u.x<=Math.max(o,c)+.9)||r.some(x=>Math.hypot(x.x-u.x,x.z-u.z)<3)||r.push({x:h?o:u.x,z:h?u.z:a,rot:h?0:Math.PI/2})}}),r.forEach(o=>n.add(Xd(o.x,o.z,o.rot,3))),{curve:t,glints:[],ftex:s,foam:[],bridges:r,src:i[0]}}function Xd(n,t,e,i){let s=new Kt;s.position.set(n,0,t),s.rotation.y=e;let r=Ze(mt.PLANKS),o=Ze(mt.LOG);return[0,.25,.5,.25,0].forEach((a,c)=>s.add(I(i,.5,1,0,0,a-.15,c-2,r))),[-1,1].forEach(a=>{[0,.25,.5,.25,0].forEach((c,l)=>{s.add(I(.25,.9,.25,0,a*(i/2-.12),c+.55,l-2,o)),l<4&&s.add(I(.12,.12,1,0,a*(i/2-.12),c+.85+(l<2?.12:-.12),l-1.5,r))})}),s}function P1(n,t){let e=ee,i=e.rx+2.6,s=e.rz+2.6,r=80,o=[],a=[],c={benches:[],ducks:[],posts:[]};for(let l=0;l<=r;l++){let h=l/r*Math.PI*2,d=Math.cos(h),u=Math.sin(h),f=e.x+d*(i-.75),x=e.z+u*(s-.75),M=e.x+d*(i+.75),g=e.z+u*(s+.75);if(o.push(f,.025,x,M,.025,g),l){let m=l*2;a.push(m-2,m,m-1,m-1,m,m+1)}}for(let l=0;l<r;l++){let h=l/r*Math.PI*2,d=e.x+Math.cos(h)*i,u=e.z+Math.sin(h)*s;if(Xs(d,u)<.6){n.add(Xd(d,u,-h+Math.PI/2+Math.PI/2,1.5));break}}[.6,2.2,3.6,5].forEach((l,h)=>{let d=e.x+Math.cos(l)*(i+1.6),u=e.z+Math.sin(l)*(s+1.6);if(Xs(d,u)<2.2||!Wi(d,u,1.5))return;let f=new Kt;f.position.set(d,0,u),f.rotation.y=Math.atan2(e.x-d,e.z-u),f.add(I(1.5,.08,.45,12883572,0,.45,0)),f.add(I(1.5,.4,.07,12883572,0,.7,-.22)),[-.65,.65].forEach(x=>{f.add(I(.08,.45,.4,9206379,x,.22,0))}),n.add(f),c.posts.push({x:d,z:u,r:.9})});for(let l=0;l<7;l++){let h=l/7*Math.PI*2+.3,d=e.x+Math.cos(h)*(i+3.1),u=e.z+Math.sin(h)*(s+3.1);if(!(Xs(d,u)<2.4||!Wi(d,u,1.8))){n.add(I(2,.5,1,0,Math.floor(d)+.5,.25,Math.floor(u)+.5,Ze(mt.PLANKS)));for(let f=0;f<4;f++){let x=Math.floor(d)+.5+(f-1.5)*.45,M=Math.floor(u)+.5+(f%2?.15:-.15);n.add(I(.06,.35,.06,8173679,x,.65,M)),n.add(I(.22,.22,.22,wi.flower[(l+f)%wi.flower.length],x,.9,M))}c.posts.push({x:d,z:u,r:1})}}for(let l=0;l<2;l++){let h=new Kt;h.add(I(.5,.3,.7,16777215,0,.18,0)),h.add(I(.32,.3,.3,l?16777215:7317610,0,.45,.32)),h.add(I(.18,.08,.16,16098123,0,.42,.53)),[-.12,.12].forEach(d=>h.add(I(.05,.06,.03,3025462,d,.5,.47))),h.add(I(.2,.12,.2,15658734,0,.32,-.38)),h.scale.setScalar(.8),n.add(h),c.ducks.push({g:h,a:l*2.5,sp:l?-.12:.09})}return c}function I1(n){let t=[],e=[],i=(u,f)=>u.toFixed(2)+","+f.toFixed(2),s=new Map,r=(u,f)=>{let x=i(u,f);return s.has(x)||(s.set(x,t.length),t.push({x:u,z:f}),e.push([])),s.get(x)},o=(u,f)=>{if(u===f)return;let x=Math.hypot(t[u].x-t[f].x,t[u].z-t[f].z);e[u].push([f,x]),e[f].push([u,x])},a=Pn.map(()=>[]);Pn.forEach((u,f)=>{a[f].push([u[0],u[1]],[u[2],u[3]])}),Pn.forEach((u,f)=>Pn.forEach((x,M)=>{if(f>=M)return;let g=u[0]===u[2],m=x[0]===x[2];if(g===m)return;let b=g?u:x,w=g?x:u,v=b[0],N=w[1];v>=Math.min(w[0],w[2])-.01&&v<=Math.max(w[0],w[2])+.01&&N>=Math.min(b[1],b[3])-.01&&N<=Math.max(b[1],b[3])+.01&&(a[f].push([v,N]),a[M].push([v,N]))}));let c=[];if(Ge){let u=Ge.drive.concat(Ge.spiral),f=null;u.forEach((x,M)=>{(!f||Math.hypot(x.x-f.x,x.z-f.z)>=2||M===u.length-1)&&(c.push(r(x.x,x.z)),f=x)});for(let x=1;x<c.length;x++)o(c[x-1],c[x])}let l=n.map(u=>{let f=null,x=null;c.forEach(g=>{let m=Math.hypot(t[g].x-u.x,t[g].z-u.z);(!x||m<x.dist)&&(x={ni:g,dist:m})}),Pn.forEach((g,m)=>{let b=g[0]===g[2],w=b?g[0]:Math.max(Math.min(g[0],g[2]),Math.min(Math.max(g[0],g[2]),u.x)),v=b?Math.max(Math.min(g[1],g[3]),Math.min(Math.max(g[1],g[3]),u.z)):g[1],N=Math.hypot(w-u.x,v-u.z);(!f||N<f.dist)&&(f={i:m,x:w,z:v,dist:N})});let M=r(u.x,u.z);return x&&x.dist<f.dist?(o(M,x.ni),M):(a[f.i].push([f.x,f.z]),o(M,r(f.x,f.z)),M)});a.forEach((u,f)=>{let x=Pn[f][0]===Pn[f][2];u.sort((M,g)=>x?M[1]-g[1]:M[0]-g[0]);for(let M=1;M<u.length;M++)o(r(u[M-1][0],u[M-1][1]),r(u[M][0],u[M][1]))});function h(u,f){let x=t.map(()=>1/0),M=t.map(()=>-1),g=t.map(()=>!1);for(x[u]=0;;){let b=-1;for(let w=0;w<t.length;w++)!g[w]&&(b<0||x[w]<x[b])&&(b=w);if(b<0||x[b]===1/0||b===f)break;g[b]=!0,e[b].forEach(([w,v])=>{x[b]+v<x[w]&&(x[w]=x[b]+v,M[w]=b)})}let m=[];for(let b=f;b>=0;b=M[b])m.unshift(t[b]);return m.length&&m[0]===t[u]?m:[t[f]]}function d(u,f,x){let M=0,g=1/0,m=x?new Set(l):null;return t.forEach((b,w)=>{if(m&&m.has(w))return;let v=Math.hypot(b.x-u,b.z-f);v<g&&(g=v,M=w)}),M}return{nodes:t,doorNodes:l,path:h,nearest:d}}var sc=[[0,4870304,12633855,.8,1.35,1],[5,5199526,12633855,.8,1.35,1],[6,16305590,16763296,1.3,1.1,.4],[7.5,12575733,16774374,2.3,1.55,0],[16.5,12575733,16774374,2.3,1.55,0],[18,16236724,16760470,1.3,1.1,.4],[19.2,5265318,12633855,.8,1.35,1],[24,4870304,12633855,.8,1.35,1]];function Yd(n){let t=0;for(;t<sc.length-2&&sc[t+1][0]<=n;)t++;let e=sc[t],i=sc[t+1],s=(n-e[0])/(i[0]-e[0]||1),r=new ce(e[1]),o=new ce(i[1]),a=new ce(e[2]),c=new ce(i[2]);return{sky:r.lerp(o,s),sun:a.lerp(c,s),power:Vn(e[3],i[3],s),amb:Vn(e[4],i[4],s),night:Vn(e[5],i[5],s)}}function L1(n,t){t=t||{};let e=(n.clientWidth||innerWidth)<(n.clientHeight||innerHeight)*.9?"port":"land";Od(e),nu=[],lc=[];let i=(()=>{let p=/[?&]hour=([\d.]+)/.exec(location.search);return p?Number(p[1]):null})();i==null&&t.timeMode==="day"&&(i=11),i==null&&t.timeMode==="night"&&(i=22);let s=new go({antialias:!0});s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.shadowMap.enabled=!0,s.shadowMap.type=qa,s.domElement.className="village-3d",n.appendChild(s.domElement);let r=new xo;r.fog=new Ua(12575733,320,760);let o=new pn(26,1,.5,1400),a=new Qa(o,s.domElement);a.enableDamping=!0,a.dampingFactor=.08,a.minDistance=18,a.maxDistance=520,a.minPolarAngle=.15,a.maxPolarAngle=1.32,a.target.set(0,0,1.5),a.screenSpacePanning=!1,a.rotateSpeed=.7,a.panSpeed=1.1,a.keyPanSpeed=22,a.touches={ONE:vi.PAN,TWO:vi.DOLLY_PAN};{let p=s.domElement,_=new Map,E=null,C=!1,G=new O,V=new Hs,y=new O,U=new O,tt=()=>{let nt=Array.from(_.values());return{a:nt[0],b:nt[1],mx:(nt[0].x+nt[1].x)/2,my:(nt[0].y+nt[1].y)/2,d:Math.hypot(nt[1].x-nt[0].x,nt[1].y-nt[0].y),ang:Math.atan2(nt[1].y-nt[0].y,nt[1].x-nt[0].x)}};p.addEventListener("pointerdown",nt=>{if(!(C||nt.pointerType!=="touch"))if(nt.isPrimary&&(_.clear(),E=null),_.set(nt.pointerId,{x:nt.clientX,y:nt.clientY}),_.size===2){nt.stopImmediatePropagation();let yt=Array.from(_.entries()).find(([se])=>se!==nt.pointerId);if(yt){C=!0;try{p.dispatchEvent(new PointerEvent("pointerup",{pointerId:yt[0],pointerType:"touch",isPrimary:!0,clientX:yt[1].x,clientY:yt[1].y,bubbles:!0}))}catch{}C=!1}let Ft=tt();E={last:Ft,moved:0,mode:"",y0a:Ft.a.y,y0b:Ft.b.y,x0:Ft.mx,d0:Ft.d}}else _.size>2&&nt.stopImmediatePropagation()},{capture:!0}),p.addEventListener("pointermove",nt=>{if(C||nt.pointerType!=="touch"||!_.has(nt.pointerId)||(_.get(nt.pointerId).x=nt.clientX,_.get(nt.pointerId).y=nt.clientY,!E||_.size<2)||(nt.stopImmediatePropagation(),!a.enabled))return;let yt=tt(),Ft=E.last;if(E.moved+=Math.hypot(yt.mx-Ft.mx,yt.my-Ft.my)+Math.abs(yt.d-Ft.d),!E.mode&&E.moved>22){let se=yt.a.y-E.y0a,ae=yt.b.y-E.y0b,Ae=(se+ae)/2,Ke=se*ae>0&&Math.min(Math.abs(se),Math.abs(ae))>.3*Math.max(Math.abs(se),Math.abs(ae));E.mode=Ke&&Math.abs(yt.mx-E.x0)<Math.abs(Ae)*.7&&Math.abs(yt.d-E.d0)<Math.max(24,Math.abs(Ae)*.6)?"tilt":"free"}if(G.copy(o.position).sub(a.target),E.mode==="tilt")V.setFromVector3(G),V.phi=Math.max(a.minPolarAngle,Math.min(a.maxPolarAngle,V.phi-(yt.my-Ft.my)*.006)),G.setFromSpherical(V),o.position.copy(a.target).add(G);else if(E.mode==="free"){let se=yt.ang-Ft.ang;se>Math.PI&&(se-=Math.PI*2),se<-Math.PI&&(se+=Math.PI*2),G.applyAxisAngle(Ve.DEFAULT_UP,se);let ae=Math.max(a.minDistance,Math.min(a.maxDistance,G.length()*(Ft.d/Math.max(1,yt.d))));G.setLength(ae),o.position.copy(a.target).add(G),o.getWorldDirection(U),U.y=0,U.normalize(),y.crossVectors(U,o.up).normalize();let Ae=2*ae*Math.tan(o.fov*Math.PI/360)/(p.clientHeight||innerHeight);c.copy(y).multiplyScalar(-(yt.mx-Ft.mx)*Ae).addScaledVector(U,(yt.my-Ft.my)*Ae*1.4),a.target.add(c),o.position.add(c)}E.last=yt,a.update()},{capture:!0});let ot=nt=>{C||nt.pointerType!=="touch"||(E&&_.has(nt.pointerId)&&nt.stopImmediatePropagation(),_.delete(nt.pointerId),_.size<2&&(E=null))};p.addEventListener("pointerup",ot,{capture:!0}),p.addEventListener("pointercancel",ot,{capture:!0});let Lt=nt=>{nt.pointerType==="touch"&&nt.target!==p&&(_.delete(nt.pointerId),_.size<2&&(E=null))};window.addEventListener("pointerup",Lt,!0),window.addEventListener("pointercancel",Lt,!0)}s.domElement.tabIndex=0,s.domElement.style.outline="none",a.listenToKeyEvents(s.domElement);let c=new O,l=new O,h=new O;function d(p,_){o.getWorldDirection(h),h.y=0,h.normalize(),l.crossVectors(h,o.up).normalize();let E=o.position.distanceTo(a.target)*.0016;c.copy(l).multiplyScalar(p*E).addScaledVector(h,-_*E),a.target.add(c),o.position.add(c)}s.domElement.addEventListener("wheel",p=>{!p.ctrlKey&&p.deltaMode===0&&(Math.abs(p.deltaX)>.01||Math.abs(p.deltaY)<40)&&(p.preventDefault(),p.stopImmediatePropagation(),d(p.deltaX,p.deltaY))},{capture:!0,passive:!1});function u(){let p=a.target,_=Be.w/2,E=Be.d/2,C=Math.max(-_,Math.min(_,p.x)),G=Math.max(Be.cz-E,Math.min(Be.cz+E,p.z));(C!==p.x||G!==p.z||p.y!==0)&&(c.set(C-p.x,-p.y,G-p.z),p.add(c),o.position.add(c))}a.addEventListener("change",u);let f=new Po(16777215,12048288,1);r.add(f);let x=new Lo(16777215,1.5);x.castShadow=!0,x.shadow.mapSize.set(2048,2048),Object.assign(x.shadow.camera,{left:-Be.a-6,right:Be.a+6,top:Be.b+10,bottom:-Be.b-10,near:1,far:260}),x.shadow.bias=-6e-4,x.shadow.normalBias=.03,r.add(x),r.add(x.target);let M=[],g=new ei({uniforms:{top:{value:new ce(9356778)},bottom:{value:new ce(14216952)}},vertexShader:"varying float vY; void main(){ vY = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 bottom; varying float vY; void main(){ float k = smoothstep(-0.15, 0.75, vY); gl_FragColor = vec4(mix(bottom, top, k), 1.0); }",side:Rn,depthWrite:!1,fog:!1}),m=new Dt(new gn(480,24,14),g);m.renderOrder=-1,r.add(m);let b=new Dt(new Fe(7,7,7),new Qe({color:16771496,fog:!1})),w=new Dt(new Fe(5,5,5),new Qe({color:16052735,fog:!1}));r.add(b,w);let v=new He,N=[];for(let p=0;p<700;p++){let _=Math.random()*Math.PI*2,E=Math.random()*1.55;N.push(Math.cos(_)*Math.sin(E)*450,Math.cos(E)*450+20,Math.sin(_)*Math.sin(E)*450)}v.setAttribute("position",new ge(N,3));let L=new Os(v,new as({color:16777215,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1}));r.add(L);let D=[];for(let p=0;p<6;p++){let _=new Kt,E=new Me({color:16777215,transparent:!0,opacity:.92});for(let C=0;C<5;C++){let G=new Dt(new Fe(Vt(3,6),1.5,Vt(3,5)),E);G.position.set(C*2.6-5,0,Vt(-1.5,1.5)),_.add(G)}_.position.set(Vt(-90,90),Vt(34,46),Vt(-90,-40)),_.userData.speed=Vt(.6,1.4),_.userData.mat=E,D.push(_),r.add(_)}let z=new Kt;z.mat=new Me({color:16777215,transparent:!0,opacity:.9,fog:!1});for(let p=0;p<11;p++){let _=p/11*Math.PI*2+Vt(-.15,.15),E=Ur(_)+Vt(1,7),C=[];for(let V=0;V<5;V++){let y=new Fe(Math.round(Vt(2,5)),1,Math.round(Vt(2,4)));y.translate(Math.round(V*2.2-4.4),0,Math.round(Vt(-1,1))),C.push(y)}let G=new Dt(tc(C,!1),z.mat);C.forEach(V=>V.dispose()),G.position.set(Math.cos(_)*E,Vt(-9,-3),Be.cz-Math.sin(_)*E),G.rotation.y=_+Math.PI/2,G.scale.setScalar(Vt(.9,1.5)),z.add(G)}r.add(z);let A=[];[{t:Math.PI*.97,gap:9,r:4.5,y:-3,deco:(_,E,C)=>{hs(_,-1,1,-1,"oak",E),hs(_,2,1,1,"pine",E),_.set(-2,1,2,Nt.LEAF_M),_.plant(.5,1,2.5,mt.FL_PINK)}},{t:.06,gap:10,r:4,y:-2,deco:(_,E,C)=>{for(let G=0;G<18;G++){let V=E()*6.28,y=Math.sqrt(E())*3;_.plant(Math.floor(Math.cos(V)*y)+.5,1,Math.floor(Math.sin(V)*y)+.5,[mt.FL_PINK,mt.FL_WHITE,mt.FL_YELLOW,mt.FL_BLUE][G%4],.9)}C(I(2,.25,.6,0,.5,1.5,-.7,Ze(mt.PLANKS))),C(I(2,.6,.15,0,.5,1.85,-1,Ze(mt.PLANKS))),[-.35,1.35].forEach(G=>C(I(.2,.5,.6,0,G,1.25,-.7,Ze(mt.LOG))))}},{t:Math.PI*.62,gap:7,r:2.5,y:4.5,deco:(_,E)=>{hs(_,0,1,0,"pine",E),_.set(1,1,1,Nt.MOSSY)}},{t:-Math.PI*.3,gap:8,r:2.3,y:2.2,deco:(_,E,C)=>{[[0,0,15231594],[1,1,16757611]].forEach(([G,V,y])=>{C(I(.35,.6,.35,16774888,G+.5,1.3,V+.5)),C(I(.9,.35,.9,y,G+.5,1.75,V+.5))}),_.set(-1,1,0,Nt.LEAF_G)}}].forEach((_,E)=>{let C=ic(31+E*7),G=_.r,V=Math.ceil(G)+2,y=new No(-V,-Math.ceil(G*2.4)-3,-V,V*2,Math.ceil(G*2.4)+16,V*2);for(let Lt=-V;Lt<V;Lt++)for(let nt=-V;nt<V;nt++){let yt=Math.hypot(Lt+.5,nt+.5)/G;if(yt>1)continue;let Ft=-Math.round(1+G*1.9*Math.pow(1-yt,.7)+C()*1.2);for(let se=Ft;se<1;se++)y.set(Lt,se,nt,se===0?Nt.GRASS:se>-3?Nt.DIRT:Nt.STONE)}let U=new Kt;_.deco(y,C,Lt=>U.add(Lt));let tt=y.build();U.add(tt.solid,tt.water,tt.plants);let ot=Ur(_.t)+_.r+_.gap;U.position.set(Math.cos(_.t)*ot,_.y,Be.cz-Math.sin(_.t)*ot),U.userData.y0=_.y,U.userData.ph=E*1.7,r.add(U),A.push(U)});let S=(()=>{let p=document.createElement("canvas");p.width=p.height=64;let _=p.getContext("2d"),E=_.createRadialGradient(32,32,0,32,32,32);E.addColorStop(0,"rgba(255,255,255,0.85)"),E.addColorStop(.3,"rgba(255,255,255,0.22)"),E.addColorStop(1,"rgba(255,255,255,0)"),_.fillStyle=E,_.fillRect(0,0,64,64),_.fillStyle="#ffffff",_.beginPath();for(let G=0;G<10;G++){let V=G/10*Math.PI*2-Math.PI/2,y=G%2?8:20;_.lineTo(32+Math.cos(V)*y,32+Math.sin(V)*y)}_.closePath(),_.fill();let C=new mn(p);return C.colorSpace=De,C})(),B=(()=>{let p=document.createElement("canvas");p.width=p.height=32;let _=p.getContext("2d");_.fillStyle="#ffffff",_.beginPath();for(let C=0;C<8;C++){let G=C/8*Math.PI*2,V=C%2?2.5:15;_.lineTo(16+Math.cos(G)*V,16+Math.sin(G)*V)}_.closePath(),_.fill();let E=new mn(p);return E.colorSpace=De,E})(),q=[0,1,2].map(p=>{let _=[],E=[],C=new ce,G=[16773544,16762076,14273791,12905727];for(let U=0;U<34;U++){let tt=Math.random()*Math.PI*2,ot=.15+Math.random()*1.2;_.push(Math.cos(tt)*Math.sin(ot)*440,Math.cos(ot)*440+20,Math.sin(tt)*Math.sin(ot)*440),C.set(G[(U+p)%4]),E.push(C.r,C.g,C.b)}let V=new He;V.setAttribute("position",new ge(_,3)),V.setAttribute("color",new ge(E,3));let y=new Os(V,new as({size:11+p*3,map:S,vertexColors:!0,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,fog:!1}));return y.userData={base:0,ph:p*2.1},r.add(y),y}),Y=new os(new Vi({map:(()=>{let p=document.createElement("canvas");p.width=128,p.height=16;let _=p.getContext("2d"),E=_.createLinearGradient(0,0,128,0);return E.addColorStop(0,"rgba(255,255,255,0)"),E.addColorStop(1,"rgba(255,248,220,1)"),_.fillStyle=E,_.beginPath(),_.moveTo(0,8),_.lineTo(120,4),_.arc(120,8,4,-Math.PI/2,Math.PI/2),_.closePath(),_.fill(),new mn(p)})(),transparent:!0,opacity:0,depthWrite:!1,fog:!1}));Y.scale.set(36,4.5,1),r.add(Y);let H={t:-1,wait:6,from:new O,dir:new O},k=new Kt;r.add(k);let X=ic(5),gt=new Ve,$=Math.ceil(Be.a)+2,ht=Math.ceil(Be.b)+2,Rt=Math.round(Be.cz),lt=new No(-$,-26,Rt-ht,$*2,54,ht*2),ne=p=>(p[0]===p[2]?Math.abs(p[3]-p[1]):Math.abs(p[2]-p[0]))>=40,re=(p,_)=>oc(p,_,0)||Pn.some(E=>{let[C,G,V,y]=E,U=(ne(E)?Fd:p1)/2;return p>=Math.min(C,V)-U&&p<=Math.max(C,V)+U&&_>=Math.min(G,y)-U&&_<=Math.max(G,y)+U}),dt=(p,_)=>{let E=Math.hypot((p-ee.x)/(ee.rx+2.6),(_-ee.z)/(ee.rz+2.6));return Math.abs(E-1)*(ee.rx+2.6)<.8},Ct=(p,_)=>Math.sin(p*.83+_*.37)*Math.cos(_*.71-p*.29)+.5*Math.sin(p*1.9-_*1.3),Yt=(p,_)=>{let E=0,C=-1;return eu(p,_,2)?{h:0,i:-1}:(ds.forEach(([G,V,y,U],tt)=>{let ot=Math.hypot(p-G,_-V);if(ot<y){let Lt=U*Math.pow(1-ot/y,1.1)*(.88+.12*Ct(p,_))+(ot/y<.9?.8*Ct(p*1.7,_*1.7):0);Lt>E&&(E=Lt,C=tt)}}),{h:E,i:C})},Ut=(p,_)=>1.4+1.3*Math.min(1,Math.hypot(p-Hn.x,_-Hn.z)/22),zt=new Map;for(let p=-$;p<$;p++)for(let _=Rt-ht;_<Rt+ht;_++){let E=p+.5,C=_+.5;if(!Wi(E,C,.2))continue;let G=Math.round(zn(E,C)),V="grass",y=Yt(E,C);if(y.h>G+.6){let ot=ds[y.i][3];G=Math.max(G,Math.round(y.h-.2)),V=G>ot*(.58+.08*Ct(E*2,C*2))?"snow":G>ot*.22?"rock":"grass"}let U=Math.max(0,1-Math.hypot(E,C-Be.cz)/Ur(Math.atan2(C-Be.cz,E))),tt=-1-Math.round(2+17*Math.pow(U,.55)+(X()-.5)*2.4);for(let ot=tt;ot<G;ot++){let Lt=G-1-ot,nt=Lt===0?V==="snow"?Nt.SNOW:V==="rock"?X()<.2?Nt.MOSSY:X()<.12?Nt.GRAVEL:Nt.STONE:Nt.GRASS:Lt<3&&V==="grass"?Nt.DIRT:ot<tt+3?X()<.55?Nt.DEEP:Nt.STONE:X()<.12?Nt.CLAY:X()<.08?Nt.GRAVEL:Nt.STONE;lt.set(p,ot,_,nt)}if(V==="grass"&&lt.tint.set(lt.idx(p,G-1,_),.94+.08*Math.sin(E*.21+C*.13)*Math.cos(C*.17-E*.05)+X()*.03),zt.set(p+","+_,G),G<=0){let ot=Xs(E,C),Lt=Ut(E,C);if(Si(E,C,0)||ot<Lt/2){let nt=Si(E,C,-2.6)?3:Si(E,C,-1.2)?2:1;for(let yt=1;yt<=nt;yt++)lt.set(p,-yt,_,Nt.WATER);lt.set(p,-nt-1,_,Nt.SAND),lt.set(p,-nt-2,_,Nt.SAND),zt.set(p+","+_,-1);continue}if((Si(E,C,1.2)||ot<Lt/2+.9)&&!re(E,C)){lt.set(p,-1,_,Nt.SAND),lt.set(p,-2,_,Nt.SAND);continue}}(re(E,C)||dt(E,C))&&lt.set(p,G-1,_,Nt.PATH)}let he=(p,_)=>{let E=zt.get(Math.floor(p)+","+Math.floor(_));return E==null?0:E},Qt=[];{let p=Hn,_=-p.dz,E=p.dx,C=p.r*.95,G=new Set;for(let y=C;y<p.r+2;y+=.4)for(let U=-1.4;U<=1.4;U+=.4){let tt=Math.floor(p.x+p.dx*y+_*U),ot=Math.floor(p.z+p.dz*y+E*U),Lt=tt+","+ot;if(G.has(Lt)||!zt.has(Lt))continue;G.add(Lt);let nt=zt.get(Lt);for(let yt=-1;yt<nt;yt++)lt.set(tt,yt,ot,Nt.AIR);lt.set(tt,-1,ot,Nt.WATER),lt.set(tt,-2,ot,Nt.WATER),lt.set(tt,-3,ot,Nt.SAND),zt.set(Lt,-1)}let V=new Map;for(let y=C;y>-.6;y-=.3)for(let U=-1.2;U<=1.2;U+=.35){let tt=Math.floor(p.x+p.dx*y+_*U),ot=Math.floor(p.z+p.dz*y+E*U),Lt=tt+","+ot;if(G.has(Lt)||V.has(Lt)||!zt.has(Lt))continue;let nt=zt.get(Lt),yt=C-y,Ft=Math.min(nt-2,Math.floor(yt/.95)*2);if(!(Ft<0)){V.set(Lt,Ft);for(let se=Ft+1;se<nt;se++)lt.set(tt,se,ot,Nt.AIR);lt.set(tt,Ft,ot,Nt.WATER),lt.set(tt,Ft-1,ot,Nt.WATER),lt.set(tt,Ft-2,ot,Nt.STONE),zt.set(Lt,Ft+1),[[_,E],[-_,-E]].forEach(([se,ae])=>{let Ae=Math.floor(p.x+p.dx*y+_*U+se*1.6),Ke=Math.floor(p.z+p.dz*y+E*U+ae*1.6),Sn=Ae+","+Ke;if(V.has(Sn)||G.has(Sn)||!zt.has(Sn))return;let Qn=zt.get(Sn),Xn=Math.min(Qn,Ft+3);if(Xn<Qn){for(let vs=Xn;vs<Qn;vs++)lt.set(Ae,vs,Ke,Nt.AIR);zt.set(Sn,Xn)}lt.set(Ae,Xn-1,Ke,X()<.6?Nt.GRASS:Nt.MOSSY),X()<.35&&lt.plant(Ae+.5,Xn,Ke+.5,X()<.6?mt.TUFT:X()<.5?mt.FL_BLUE:mt.FL_WHITE,.8)})}}for(let y=-1;y<=1;y++)Qt.push([Math.floor(p.x+p.dx*(C+.3)+_*y)+.5,Math.floor(p.z+p.dz*(C+.3)+E*y)+.5])}{let p=ic(77);zt.forEach((_,E)=>{let[C,G]=E.split(",").map(Number),V=Yt(C+.5,G+.5);V.i<0||_<1||_>ds[V.i][3]*.32||p()>.035||Math.hypot(C-Hn.x,G-Hn.z)<Hn.r*.9&&Math.abs((C-Hn.x)*-Hn.dz+(G-Hn.z)*Hn.dx)<3||lt.get(C,_,G)||hs(lt,C,_,G,"pine",p)})}let ue=C1(k,!0),_t=-1+.88,St=new Dt(new Xe(1,1,.1,32),fc);St.scale.set(ee.rx,1,ee.rz),St.position.set(ee.x,_t,ee.z),k.add(St);{let p=new Me({map:pi(mt.LILY),transparent:!0,alphaTest:.5,side:An});[[-4.5,1],[3.5,-1.6],[5.2,1.2],[-2.6,-1.4]].forEach(([_,E])=>{let C=new Dt(new rs(1,1),p);C.rotation.x=-Math.PI/2,C.rotation.z=_,C.position.set(ee.x+_*ee.rz/4,_t+.02,ee.z+E*ee.rz/4),k.add(C)})}for(let p=0;p<14;p++){let _=X()*6.28,E=ee.x+Math.cos(_)*(ee.rx+.7),C=ee.z+Math.sin(_)*(ee.rz+.7);lt.plant(E,0,C,mt.REED,1.1)}let F=(()=>{let p=new Kt;p.position.set(Math.floor(ee.x)+.5,0,Math.floor(ee.z)+.5),k.add(p);let _=new Me({map:pi(mt.COBBLE)}),E=new Me({map:pi(mt.WATER),transparent:!0,opacity:.85});for(let U=-1;U<=1;U++)for(let tt=-1;tt<=1;tt++)(U||tt)&&p.add(I(1,.5,1,0,U,-.25+.1,tt,_));p.add(I(1,1.6,1,0,0,.3,0,_)),p.add(I(1.6,.3,1.6,0,0,1.15,0,_));let C=I(1.2,.08,1.2,0,0,1.33,0,E);p.add(C);let G=new Qe({color:14677247,transparent:!0,opacity:.85,depthWrite:!1}),V=new Dt(new Fe(.18,.8,.18),G);V.position.y=1.75,p.add(V);let y=[];for(let U=0;U<14;U++){let tt=new Dt(new Fe(.1,.1,.1),G);p.add(tt),y.push({m:tt,a:U/14*Math.PI*2,t:U/14})}return{g:p,jet:V,drops:y,rimR:1.3}})(),qt=P1(k,X,!0),wt=[],Xt=(p,_)=>wt.some(E=>p>E.x0-1&&p<E.x1+1&&_>E.z0-1&&_<E.z1+1),Pt=(p,_)=>!Xt(p,_)&&Wi(p,_,2.2)&&!Si(p,_,1.5)&&!nc(p,_,.8)&&!Zh(p,_,.6)&&Xs(p,_)>2.4&&!Dd(p,_)&&!oc(p,_,1.2)&&!Pn.some(([E,C,G,V])=>p>=Math.min(E,G)-bi-.3&&p<=Math.max(E,G)+bi+.3&&_>=Math.min(C,V)-bi-.3&&_<=Math.max(C,V)+bi+.3)&&!tn.some(([E,C])=>Math.abs(p-E)<3.6&&Math.abs(_-C)<3.8)&&!(Math.abs(p-xn[0])<6&&Math.abs(_-xn[1])<5.4)&&Yt(p,_).h<.5,oe=(t.houses||[]).findIndex(p=>p.id==="love"),Bt=(p,_)=>{if(yn)return nc(p,_,1.2);if(oe<0||!tn[oe])return!1;let[E,C]=tn[oe];return Math.abs(p-E)<7&&_>C+2.5&&_<C+12||Math.abs(_-C)<3.5&&Math.abs(p-E)<8.5||Math.abs(p-E)<3.5&&_<C&&_>C-8};{let E=(V,y)=>zt.get(V+","+y),C=(V,y)=>{for(let U=V-1;U<=V+11;U++)for(let tt=y-1;tt<=y+7;tt++)if(E(U,tt)!==0||!Pt(U+.5,tt+.5)||Bt(U+.5,tt+.5))return!1;return!0},G=[];for(let V=-ht+4;V<ht-7-4;V+=2)for(let y=-$+4;y<$-11-4;y+=2)C(y,V)&&G.push([y,V]);G.sort((V,y)=>y[1]-V[1]||Math.abs(V[0])-Math.abs(y[0]));for(let[V,y]of G){if(wt.length>=2)break;if(wt.some(yt=>Math.hypot(yt.x0-V,yt.z0-y)<18)||!C(V,y))continue;wt.push({x0:V,z0:y,x1:V+11,z1:y+7});let U=[mt.WHEAT,mt.CARROT,mt.SPROUT];for(let yt=V+1;yt<V+11-1;yt++)for(let Ft=y+1;Ft<y+7-1;Ft++){if(Ft===y+Math.floor(3.5)){lt.set(yt,-1,Ft,Nt.WATER);continue}lt.set(yt,-1,Ft,Nt.FARM),lt.tint.set(lt.idx(yt,-1,Ft),1),lt.plant(yt+.5,0,Ft+.5,U[(Ft<y+7/2?0:1)+(yt>V+11-4?1:0)],.95)}let tt=Ze(mt.PLANKS),ot=Ze(mt.LOG),Lt=V+Math.floor(11/2),nt=(yt,Ft,se,ae)=>{let Ae=Math.hypot(se-yt,ae-Ft),Ke=Math.round(Ae);for(let Sn=0;Sn<=Ke;Sn++){let Qn=yt+(se-yt)*Sn/Ke,Xn=Ft+(ae-Ft)*Sn/Ke;if(Ft===ae&&Ft===y+7&&Math.abs(Qn-Lt-.5)<.6)continue;k.add(I(.25,1,.25,0,Qn,.5,Xn,ot));let vs=new Ve;vs.position.set(Qn,0,Xn),vs.userData.post=.7,k.add(vs),Sn<Ke&&!(Ft===ae&&Ft===y+7&&Math.abs(Qn+(se-yt)/Ke/2-Lt-.5)<1)&&[.4,.8].forEach(lp=>{let hp=I(Ft===ae?1:.1,.1,Ft===ae?.1:1,0,Qn+(se-yt)/Ke/2,lp,Xn+(ae-Ft)/Ke/2,tt);k.add(hp)})}};nt(V,y,V+11,y),nt(V+11,y,V+11,y+7),nt(V,y+7,V+11,y+7),nt(V,y,V,y+7),[[V,y],[V+11,y],[V,y+7],[V+11,y+7]].forEach(([yt,Ft])=>{let se=Bd();se.position.set(yt,1.2,Ft),k.add(se)})}}{let p=Ge.drive.concat(Ge.spiral),_=0,E=0;for(let C=1;C<p.length;C++){let G=p[C-1],V=p[C],y=V.x-G.x,U=V.z-G.z,tt=Math.hypot(y,U);if(_+=tt,_<5.5)continue;_=0,E++;let ot=-U/tt,Lt=y/tt;[-1,1].forEach(nt=>{let yt=(E+(nt>0?1:0))%2===0,Ft=yt?Ys+.8:Ys+2.6,se=V.x+ot*Ft*nt,ae=V.z+Lt*Ft*nt;if(!Wi(se,ae,1)||nc(se,ae,.5)||Qh(se,ae,.5)||Ge.roadDist(se,ae)<Ft-.4)return;let Ae=Math.floor(se),Ke=Math.floor(ae),Sn=zt.get(Ae+","+Ke);if(Sn!=null)if(yt){let Qn=Rd();Qn.position.set(Ae+.5,Sn,Ke+.5),k.add(Qn);let Xn=new Ve;Xn.position.set(Ae+.5,0,Ke+.5),Xn.userData.post=.3,k.add(Xn)}else lt.get(Ae,Sn,Ke)||hs(lt,Ae,Sn,Ke,"cherry",X)})}}{let p=ic(61),_=Ge,E=[];for(let C=0;C<900&&E.length<70;C++){let G=p()*Math.PI*2,V=_.Rp+1+p()*(_.R-_.Rp),y=_.x+Math.cos(G)*V,U=_.z+Math.sin(G)*V;if(!Wi(y,U,2)||nc(y,U,2)||Qh(y,U,2.5)||_.roadDist(y,U)<Ys+2.4||Math.abs(y-xn[0])<7&&Math.abs(U-xn[1])<6)continue;let tt=Math.floor(y),ot=Math.floor(U);if(E.some(([nt,yt])=>Math.hypot(nt-tt,yt-ot)<3.4))continue;let Lt=zt.get(tt+","+ot);Lt==null||Lt<1||lt.get(tt,Lt,ot)||(hs(lt,tt,Lt,ot,["oak","oak","pine","birch","mint","pine"][p()*6|0],p),E.push([tt,ot]))}}let P=[],T=(p,_)=>{let E=p+","+_,C=zt.get(E);C!=null&&(lt.set(p,C-1,_,Nt.DIRT),lt.set(p,C,_,Nt.GRASS),lt.tint.set(lt.idx(p,C,_),.97+X()*.05),zt.set(E,C+1))},et=(p,_,E)=>{let C=Math.floor(p),G=Math.floor(_);if(!Pt(C+.5,G+.5)||Bt(C+.5,G+.5)||P.some(([U,tt])=>Math.hypot(U-C,tt-G)<3.2))return!1;let V=E||(X()<.1?"cherry":["oak","oak","birch","mint","pine"][X()*5|0]);hs(lt,C,zt.get(C+","+G)||0,G,V,X);let y=new Ve;return y.position.set(C+.5,0,G+.5),y.userData.post=1.2,k.add(y),P.push([C,G]),!0};for(let _=0;_<20;_++){let E=(_+.5+(X()-.5)*.35)/20*Math.PI*2,C=Ur(E)-5.5-X()*2,G=Math.cos(E)*C,V=Be.cz+Math.sin(E)*C,y=2.5+X()*1.5;if(Pt(G,V)&&!Bt(G,V)){for(let ot=Math.floor(G-y);ot<=G+y;ot++)for(let Lt=Math.floor(V-y);Lt<=V+y;Lt++)Math.hypot(ot+.5-G,(Lt+.5-V)*1.2)<y&&Pt(ot+.5,Lt+.5)&&!Bt(ot+.5,Lt+.5)&&T(ot,Lt);let tt=new Ve;tt.position.set(G,0,V),tt.userData.post=y,k.add(tt)}let U=2+(X()*3|0);for(let tt=0;tt<U*4&&U>0;tt++){let ot=X()*6.28,Lt=X()*3.4;et(G+Math.cos(ot)*Lt,V+Math.sin(ot)*Lt)&&U--}for(let tt=0;tt<3;tt++){let ot=X()*6.28,Lt=2.2+X()*2,nt=Math.floor(G+Math.cos(ot)*Lt),yt=Math.floor(V+Math.sin(ot)*Lt);if(!Pt(nt+.5,yt+.5)||Bt(nt+.5,yt+.5)||lt.get(nt,he(nt,yt),yt))continue;let Ft=he(nt,yt);lt.set(nt,Ft,yt,X()<.5?Nt.LEAF_G:Nt.LEAF_M),X()<.4&&lt.plant(nt+.5,Ft+1,yt+.5,[mt.FL_PINK,mt.FL_WHITE,mt.FL_YELLOW][X()*3|0],.8)}}for(let p=0,_=0;p<600&&_<10;p++)et((X()-.5)*Be.w,(X()-.5)*Be.d,["oak","birch","mint"][X()*3|0])&&_++;{let p=[mt.FL_PINK,mt.FL_WHITE,mt.FL_YELLOW,mt.FL_BLUE,mt.FL_LAV];for(let _=0,E=0;_<6e3&&E<520;_++){let C=(X()-.5)*(Be.w-4),G=(X()-.5)*(Be.d-4);if(!Pt(C,G)||Bt(C,G))continue;let V=Math.floor(C),y=Math.floor(G),U=he(V,y);lt.get(V,U,y)||(lt.plant(V+.5,U,y+.5,X()<.32?p[X()*p.length|0]:mt.TUFT,.8+X()*.3),E++)}for(let _=0,E=0;_<800&&E<9;_++){let C=Math.floor((X()-.5)*(Be.w-8)),G=Math.floor((X()-.5)*(Be.d-8));if(!Pt(C+.5,G+.5)||Bt(C+.5,G+.5))continue;let V=he(C,G),y=X()<.5?Nt.COBBLE:Nt.MOSSY;lt.set(C,V,G,y),X()<.6&&lt.set(C+1,V,G,Nt.STONE),X()<.4&&lt.set(C,V+1,G,y);let U=new Ve;U.position.set(C+1,0,G+.5),U.userData.post=1.2,k.add(U),E++}}{let p=lt.build(.88);k.add(p.solid,p.water,p.plants)}let pt=[];{let p=new Qe({color:16777215,transparent:!0,opacity:.5,depthWrite:!1});Qt.forEach(([_,E])=>{for(let C=0;C<4;C++){let G=new Dt(new Fe(.5,.5,.5),p.clone());G.position.set(_+Vt(-.6,.6),0,E+Vt(0,1.2)),k.add(G),pt.push({m:G,t:Math.random(),x:G.position.x,z:G.position.z})}})}let Et=[0,1,2].map(p=>{let _=[];for(let G=0;G<9;G++){let V=Math.random()*6.283,y=Math.sqrt(Math.random())*.85;_.push(ee.x+Math.cos(V)*ee.rx*y,_t+.15,ee.z+Math.sin(V)*ee.rz*y)}for(let G=0;G<7;G++){let V=ue.curve.getPointAt(Math.random());_.push(V.x+(Math.random()-.5)*1.2,_t+.12,V.z+(Math.random()-.5)*1.2)}let E=new He;E.setAttribute("position",new ge(_,3));let C=new Os(E,new as({size:.9,map:B,color:[16777215,16774072,16766698][p],transparent:!0,opacity:0,depthWrite:!1}));return C.userData={base:.6,ph:p*2.1},k.add(C),C}),xt=[];Pn.forEach(([p,_,E,C])=>[.3,.72].forEach(G=>{let V=p===E,y=Vn(p,E,G)+(V?bi+.6:0),U=Vn(_,C,G)+(V?0:bi+.6);tn.some(([tt,ot])=>Math.abs(y-tt)<3.6&&Math.abs(U-ot)<4.2)||Math.abs(y-xn[0])<6.2&&Math.abs(U-xn[1])<6||Si(y,U,1.5)||Bt(y,U)||!Wi(y,U,2)||Zh(y,U,.5)||Xs(y,U)<2||oc(y,U,1)||Dd(y,U)||xt.push([y,U])})),xt.slice(0,7).forEach(([p,_],E)=>{let C=Rd();if(C.position.set(p,zn(p,_),_),C.userData.post=.3,k.add(C),E%2===0&&M.length<3){let G=new Io(16763255,0,12,1.6);G.position.set(p,zn(p,_)+2.7,_),k.add(G),M.push(G)}});let Z=[],Q=[];(t.houses||[]).forEach((p,_)=>{if(!tn[_])return;let E=p.id==="love"?x1():p.special==="arcade"?_1():p.special==="store"?y1():Td(p,!1);E.position.set(tn[_][0],zn(tn[_][0],tn[_][1]),tn[_][1]),E.rotation.y=fs[_]||0,E.userData.face=fs[_]||0,E.userData.id=p.id,k.add(E),Z.push(E);let C=E.userData.face;Q.push({x:tn[_][0]+Math.sin(C)*E.userData.doorZ,z:tn[_][1]+Math.cos(C)*E.userData.doorZ})});let j=v1(k,yn&&fs[yn.house]||0),It=Td(null,!0);It.position.set(xn[0],zn(xn[0],xn[1]),xn[1]),It.userData.id="hall",k.add(It),Z.push(It);let ut={x:xn[0],z:xn[1]+It.userData.doorZ};Q.push(ut);let rt=I1(Q),Mt=rt.doorNodes[rt.doorNodes.length-1];(function(){k.updateMatrixWorld(!0);let _=new Set,E=V=>{V&&V.traverse(y=>_.add(y))};E(St),qt.ducks.forEach(V=>E(V.g)),Z.forEach(V=>{E(V.userData.hinge),E(V.userData.flag),E(V.userData.bell)}),E(j.car),E(F.jet),F.drops.forEach(V=>E(V.m));let C=new Map,G=[];k.traverse(V=>{if(!V.isMesh||V.isInstancedMesh||_.has(V)||V.userData.keepBatch||Array.isArray(V.material)||V.material.transparent)return;let y=V.geometry.clone();Object.keys(y.attributes).forEach(U=>{U!=="position"&&U!=="normal"&&U!=="uv"&&y.deleteAttribute(U)}),y.attributes.uv&&(y.index&&(y=y.toNonIndexed()),y.clearGroups(),y.applyMatrix4(V.matrixWorld),C.has(V.material)||C.set(V.material,[]),C.get(V.material).push(y),G.push(V))}),G.forEach(V=>V.parent.remove(V)),C.forEach((V,y)=>{let U=tc(V,!1);if(V.forEach(ot=>ot.dispose()),!U)return;let tt=new Dt(U,y);tt.castShadow=!0,tt.receiveShadow=!0,k.add(tt)})})();let bt=[],at={her:null,him:null,home:null,kiss:0},Zt=p=>rt.nodes[rt.doorNodes[p]],le={},ve=p=>le[p]||0;function W(p,_,E){let C=zo(p);k.add(C.g);let G=Zt(_);return C.g.position.set(G.x+Vt(-.6,.6),0,G.z+Vt(0,.4)),Object.assign(C,{kind:"person",i:bt.length,home:_,path:[],speed:Vt(1.35,1.75),wait:Vt(0,3),t:Vt(0,6),v:0,goal:"",inside:!1},E||{}),bt.push(C),C}(t.houses||[]).forEach((p,_)=>{if(!(_>=tn.length))if(p.id==="love")at.home=_,at.her=W(tu.her,_,{love:"her"}),at.him=W(tu.him,_,{love:"him"});else{let E=cc[_]||cc[_%9]||cc[0];W(E,_,{hallReg:!!E.uniform})}});let Tt=Object.assign(b1(),{kind:"cat",path:[],speed:1.1,wait:2,t:0,sit:!0}),ct=Object.assign(S1(),{kind:"dog",path:[],speed:2.2,wait:1,t:0,buddy:0});{let p=rt.nodes[rt.doorNodes[2]],_=rt.nodes[rt.doorNodes[rt.doorNodes.length-1]];Tt.g.position.set(p.x+1.5,0,p.z+.6),ct.g.position.set(_.x+3,0,_.z+.8)}k.add(Tt.g,ct.g);let vt=[0,1,2,0,1].map((p,_)=>{let E=Id(p);return E.scale.setScalar(.8),k.add(E),{g:E,t:.15+_*.16,dir:_%2?1:-1,sp:Vt(.012,.022),side:Vt(-.35,.35),ph:Vt(0,6)}}),Wt=[0,1,2,3].map(p=>{let _=Id(p);return k.add(_),{g:_,a:Vt(0,6.28),r:Vt(.62,.92),sp:Vt(.25,.5)*(p%2?1:-1),jump:0,jx:0,jz:0}});function Gt(){let p=document.createElement("canvas");p.width=128,p.height=64;let _=p.getContext("2d");_.font="bold 34px sans-serif",_.fillStyle="#7a6a9a",_.fillText("z",18,52),_.font="bold 26px sans-serif",_.fillText("z",52,36),_.font="bold 20px sans-serif",_.fillText("z",82,22);let E=new os(new Vi({map:new mn(p),transparent:!0,depthWrite:!1}));return E.scale.set(1.1,.55,1),E.visible=!1,k.add(E),E}Tt.zzz=Gt(),ct.zzz=Gt();let pe=Wd("\u2665","#ff6f91",.9,.45);k.add(pe);let Ce=new O,rn=0,Ee=[],Gn=new gn(.09,6,5);function ii(p,_){for(let E=0;E<7;E++){let C=Math.random()*6.28,G=Math.random()*.8,V=p+Math.cos(C)*G,y=_+Math.sin(C)*G*.7;if(!Si(V,y,-.8))continue;let U=new Dt(Gn,de(E%2?13208410:14723437));U.position.set(V,1.6+Math.random()*.6,y),k.add(U),Ee.push({m:U,vy:0,life:25})}}let ms=[];function Nr(p,_,E){let C=new Dt(new To(.18,.24,18),new Qe({color:15399167,transparent:!0,opacity:.6,side:An,depthWrite:!1}));C.rotation.x=-Math.PI/2,C.position.set(p,-.09,_),C.renderOrder=3,C.userData.size=E,k.add(C),ms.push(C)}let nn=new Dt(new To(.34,.42,24),new Qe({color:15399167,transparent:!0,opacity:0,side:An,depthWrite:!1}));nn.rotation.x=-Math.PI/2,nn.renderOrder=3,k.add(nn);let qs=[16758465,14273008,16375946,11591910].map((p,_)=>{let E=w1(p);return k.add(E),{g:E,ph:_*1.7,cx:Vt(-25,25),cz:Vt(-15,15)}}),Or=new He,Fr=[];for(let p=0;p<40;p++)Fr.push(Vt(-30,30),Vt(1,3),Vt(-20,20));Or.setAttribute("position",new ge(Fr,3));let Yi=new Os(Or,new as({color:16773792,size:.35,transparent:!0,opacity:0}));k.add(Yi);let Wn=0;function si(){let p=new Date;return p.getHours()+p.getMinutes()/60}function gs(p){return p>=23||p<6.5?"sleep":p<7?"morning":p<11.5?"work":p<13?"lunch":p<16.5?"work":p<21?"evening":"home"}function xs(p){let _=p%18,E=Math.floor(_/6),C=_%6;return{x:ut.x+(C-2.5)*1.2+E%2*.6,z:ut.z+1.3+E*1.1}}function In(p,_,E){if(p.goal=E,p.path=hu(p,_),!p.path.length){let C=rt.nearest(p.g.position.x,p.g.position.z),G=rt.nearest(_.x,_.z);p.path=rt.path(C,G).concat([_])}}function qi(p){let _=Zt(p),E=fs[p]||0;return{x:_.x-Math.sin(E)*.9,z:_.z-Math.cos(E)*.9,f:E}}function Jn(p){let _=qi(p.home);p.inside=!1,p.g.visible=!0,p.g.position.set(_.x+Vt(-.3,.3),0,_.z),p.g.rotation.set(0,_.f,0)}function R(p,_){let E=qi(p.home);In(p,{x:E.x,z:E.z},"in"),p.stay=_}let K=Z.findIndex(p=>p.userData.alwaysLit),it=null,st=null;function J(){if(!it){it=tn.map((p,_)=>{let E=Zt(_);return[[-1.7,-.5],[1.7,-.5],[-.9,.2],[.9,.2]].map(([C,G])=>({x:E.x+C,z:E.z+G})).filter(C=>!Mn(C.x,C.z,.15))}),st=[];for(let p=0;p<18;p++){let _={x:ee.x+Math.cos(p/18*6.283)*(ee.rx+2.2),z:ee.z+Math.sin(p/18*6.283)*(ee.rz+1.9)};Mn(_.x,_.z,.2)||st.push(_)}}}let Ot=p=>p[Math.floor(Math.random()*p.length)];function Ht(p){J();let _=it[p.home];return _.length?Ot(_):Zt(p.home)}function Jt(p,_){J();let E=Math.random();if(_==="lunch"&&K>=0&&E<.6){let C=Zt(K);return{x:C.x+Vt(-2.6,2.6),z:C.z+Vt(0,.8)}}if(_==="lunch"&&E<.75)return xs(Math.floor(Vt(0,18)));if(E<.4&&st.length)return Ot(st);if(E<.85){let C=Zt(Math.floor(Vt(0,tn.length)));return{x:C.x+Vt(-1,1),z:C.z+Vt(0,.5)}}return xs(Math.floor(Vt(0,18)))}function te(p){if(p.love==="him"||p.pair)return;let _=gs(si());if(p.love==="her")return Ue(p,_);let E=ve(p.home)>0;if(p.helper&&ve(p.home)<p.helper){p.inside&&Jn(p),In(p,{x:ut.x,z:ut.z},"leave");return}if(Wn&&!E&&_!=="sleep"&&_!=="home"&&!p.helper){p.inside&&Jn(p),(p.goal!=="hall"||p.path.length)&&In(p,xs(p.i),"hall"),p.wait=Vt(3,6);return}if(p.hallReg&&_==="work"&&!E&&!p.helper){if(p.inside&&Jn(p),p.goal==="hallwork"){In(p,Ht(p),"work"),p.wait=Vt(6,14);return}if(p.goal==="work"&&Math.random()<.5){R(p,Vt(4,8));return}In(p,xs(p.i),"hallwork"),p.wait=Vt(10,22);return}if(E||_==="work"){if(p.inside){Jn(p),In(p,Ht(p),"work");return}if(p.goal==="work"){R(p,Vt(3,E?6:10));return}In(p,Ht(p),"work");return}if(_==="sleep"||_==="home"){if(p.inside){p.wait=Vt(20,40);return}R(p,Vt(20,40));return}if(p.inside)Jn(p);else if(Math.random()<.15){R(p,Vt(5,12));return}In(p,Jt(p,_),"stroll"),p.wait=Vt(2,6)}let me=()=>Z.find(p=>p.userData.id==="love");function xe(p){let _=me(),E=_&&_.userData.poolSpots&&_.userData.poolSpots[p];if(!E)return null;let C=new O(E.x,E.y,E.z);return _.localToWorld(C),k.worldToLocal(C),{x:C.x,y:C.y,z:C.z,ry:E.ry+_.rotation.y}}let jt=()=>{let p=si();return p>=16&&p<17};function Se(){[at.her,at.him].forEach(p=>{if(!p||!p.pool)return;p.pool=!1;let _=qi(p.home);p.g.position.set(_.x+(p.love==="him"?.7:0),0,_.z),p.g.rotation.set(0,0,0)})}function Ue(p,_){let E=at.him;if(p.inCar){p.wait=2;return}if(p.pool){if(jt()){p.wait=15;return}Se()}if(jt()&&xe(0)&&_!=="sleep"){Pe(),p.inside&&(Jn(p),Jn(E)),In(p,qi(p.home),"pool");return}if(_==="sleep"||_==="home"||si()>=20.5){if(Pe(),p.inside){p.wait=Vt(30,60);return}R(p,Vt(30,60));return}if(p.inside&&(Jn(p),Jn(E),E.g.position.x+=.7),p.sitting){Pe(),In(p,Jt(p,_),"stroll"),p.wait=Vt(2,5);return}if(Ie&&Math.random()<.55){In(p,Ie.userData.front,"swing");return}In(p,Jt(p,_),"stroll"),p.wait=Vt(2,5)}function Pe(){[at.her,at.him].forEach(p=>{!p||!p.sitting||(p.sitting=!1,p.g.position.set(Ie.userData.front.x+(p.love==="her"?-.4:.4),0,Ie.userData.front.z),p.g.rotation.set(0,Ie.rotation.y,0))})}function En(p){p.goal==="in"?(p.inside=!0,p.g.visible=!1,p.wait=p.stay||10):p.goal==="work"?p.wait=Vt(6,12):p.goal==="swing"?(p.sitting=!0,p.wait=Vt(15,30)):p.goal==="pool"?(p.pool=!0,at.him&&(at.him.pool=!0),p.wait=10):p.goal==="leave"&&(k.remove(p.g),bt.splice(bt.indexOf(p),1))}function Te(p,_){return ie(at.her,p,_)}function ie(p,_,E){if(p.pool||_.pool)return!1;if(p.inside){if(_.inside)return!1;let Ft=qi(_.home),se=Ft.x-_.g.position.x,ae=Ft.z-_.g.position.z,Ae=Math.hypot(se,ae);if(Ae<.15)return _.inside=!0,_.g.visible=!1,!1;let Ke=Math.min(Ae,p.speed*1.2*E);return _.g.position.x+=se/Ae*Ke,_.g.position.z+=ae/Ae*Ke,_.g.rotation.y=Math.atan2(se,ae),_.v=p.speed,!0}if(_.inside&&(Jn(_),_.g.position.x+=.7),p.sitting)return _.love&&(_.sitting=!0),!1;_.sitting=!1;let C=p.g.rotation.y,G=p.g.position.x-Math.cos(C)*.72,V=p.g.position.z+Math.sin(C)*.72,y=G-_.g.position.x,U=V-_.g.position.z,tt=Math.hypot(y,U);if(tt<.05){_.v=0;let Ft=C-_.g.rotation.y;return Ft=Math.atan2(Math.sin(Ft),Math.cos(Ft)),_.g.rotation.y+=Ft*Math.min(1,E*6),!1}let ot=Math.min(p.speed*1.35,tt*4);_.v=(_.v||0)+(ot-(_.v||0))*Math.min(1,E*5);let Lt=Math.min(tt,_.v*E);_.g.position.x+=y/tt*Lt,_.g.position.z+=U/tt*Lt;let yt=(tt>.35?Math.atan2(y,U):C)-_.g.rotation.y;return yt=Math.atan2(Math.sin(yt),Math.cos(yt)),_.g.rotation.y+=yt*Math.min(1,E*7),_.v>.15}{let p=gs(si());(p==="sleep"||p==="home")&&bt.forEach(_=>{_.inside=!0,_.g.visible=!1,_.wait=Vt(5,30)})}let bn=Z.filter(p=>p.userData.id!=="hall").map(p=>{let _=p.userData.size,E=p.userData.face||0,C=Math.abs(Math.sin(E))>.5;if(!_)return{x:p.position.x,z:p.position.z,hw:3.3,hd:2.6};let G=Math.cos(E)*_.cx,V=-Math.sin(E)*_.cx;return{x:p.position.x+G,z:p.position.z+V,hw:C?_.hd:_.hw,hd:C?_.hw:_.hd}}).concat([{x:xn[0],z:xn[1],hw:5.8,hd:4.1}]),be=[];k.children.forEach(p=>{p.userData.post&&be.push({x:p.position.x,z:p.position.z,r:p.userData.post})}),qt.posts.forEach(p=>be.push(p));function Mn(p,_,E){return E=E||.5,!Wi(p,_,2.5)||Zh(p,_,0)||Xs(p,_)<1.8&&!ue.bridges.some(C=>Math.hypot(C.x-p,C.z-_)<2.4)||Si(p,_,.9+E)||bn.some(C=>Math.abs(p-C.x)<C.hw+E&&Math.abs(_-C.z)<C.hd+E)?!0:be.some(C=>Math.hypot(p-C.x,_-C.z)<C.r+E*.6)}function ri(p,_){let E=Math.ceil(Math.hypot(_.x-p.x,_.z-p.z)/.4);for(let C=1;C<=E;C++){let G=C/E;if(Mn(Vn(p.x,_.x,G),Vn(p.z,_.z,G),.45))return!1}return!0}let Ln=(p,_,E)=>Pn.some(([C,G,V,y])=>p>=Math.min(C,V)-bi-E&&p<=Math.max(C,V)+bi+E&&_>=Math.min(G,y)-bi-E&&_<=Math.max(G,y)+bi+E),Ie=null;if(j.blocks.forEach(p=>bn.push(p)),j.posts.forEach(p=>be.push(p)),at.home!=null&&yn&&yn.house===at.home){let[p,_]=yn.swing,E=fs[at.home]||0;Ie=Ld(),Ie.position.set(p,zn(p,_),_),Ie.rotation.y=E,k.add(Ie),Ie.userData.front={x:p+Math.sin(E)*1.25,z:_+Math.cos(E)*1.25},bn.push({x:p,z:_,hw:1.55,hd:1.55}),bn.push({x:p-Math.cos(E)*2,z:_+Math.sin(E)*2,hw:.8,hd:.8})}else if(at.home!=null){let[p,_]=tn[at.home],E=[[0,7.2],[0,6.4],[-2.2,7.2],[2.2,7.2],[0,8.4],[4.6,.8],[-4.6,.8],[0,-5.2]],C=(G,V)=>!Wi(G,V,2.5)||Si(G,V,1)||bn.some(y=>Math.abs(G-y.x)<y.hw+.1&&Math.abs(V-y.z)<y.hd+.1)||Ln(G,V,0);for(let[G,V]of E){let y=p+G,U=_+V;if([[-1.6,-.9],[1.6,-.9],[-1.6,.9],[1.6,.9],[0,0],[0,1.6],[-.5,1.6],[.5,1.6]].every(([ot,Lt])=>!C(y+ot,U+Lt))){k.children.slice().forEach(ot=>{if(ot.userData.post&&Math.abs(ot.position.x-y)<2.6&&Math.abs(ot.position.z-U)<2.2){k.remove(ot);let Lt=be.findIndex(nt=>nt.x===ot.position.x&&nt.z===ot.position.z);Lt>=0&&be.splice(Lt,1)}}),Ie=Ld(),Ie.position.set(y,zn(y,U),U),k.add(Ie),Ie.userData.front={x:y,z:U+1.25},bn.push({x:y,z:U,hw:1.55,hd:.75});break}}}let Re=[],$n=new gn(.28,8,6);function _s(p){let _=new Dt($n,new Me({color:16777215,transparent:!0,opacity:.75,depthWrite:!1})),E=p.userData.chimney;_.position.set(p.position.x+E.x+Vt(-.1,.1),E.y,p.position.z+E.z+Vt(-.1,.1)),k.add(_),Re.push({m:_,life:0})}let Dn=[3,6,10],Un=document.createElement("div");Un.className="v3d-names",n.appendChild(Un);let je=null,zr=!1,ys=new Map,Ti=new O,ou=[3877418,9067068,2038564,13208410,5914688,11039050],au=[10934504,16165309,16111752,10738109,14273008,16368540];function qd(p,_,E){let C=Object.assign({},p,{hair:ou[_%ou.length],cap:void 0,glasses:!p.glasses&&_%3===0});return p.uniform||(C.shirt=au[(_+2)%au.length]),C.style=E==="f"?["long","bun","twin"][_%3]:"short",C}function Zd(){let p=je&&je.extra||{};(t.houses||[]).forEach((_,E)=>{if(_.id==="love")return;let C=bt.find(U=>U.home===E&&!U.love&&!U.helper&&!U.pair);if(!C)return;let G=bt.find(U=>U.pair===C),V=p[_.id];if(!V&&G){k.remove(G.g),bt.splice(bt.indexOf(G),1);let U=ys.get(G);U&&(U.remove(),ys.delete(G));return}if(!V)return;let y=qd(C.baseLook||C.parts.look,E,V.g==="f"?"f":"m");if(G)G.mateG!==V.g&&(G.mateG=V.g,Pd(G,y));else{let U=W(y,E,{pair:C,mateG:V.g});U.g.position.copy(C.g.position),U.g.position.x+=.7,U.inside=C.inside,U.g.visible=C.g.visible}})}function Kd(){let p=je&&je.genders||{};bt.forEach(_=>{if(_.love||_.helper||_.pair)return;let E=(t.houses||[])[_.home];if(!E)return;_.baseLook||(_.baseLook=_.parts.look);let C=p[E.id]?Gd(_.baseLook,p[E.id]):_.baseLook;C!==_.parts.look&&Pd(_,C)})}function Jd(p){if(!je)return"";if(p.love==="her")return je.her||"namu";if(p.love==="him")return je.him||"hunf";if(p.helper)return"";let _=(t.houses||[])[p.home];return!_||!_.pub&&!zr?"":p.pair?je.extra&&je.extra[_.id]&&je.extra[_.id].name||"":je.people&&je.people[_.id]||""}function $d(){bt.forEach(p=>{let _=Jd(p),E=ys.get(p);if(!_){E&&(E.remove(),ys.delete(p));return}E||(E=document.createElement("span"),Un.appendChild(E),ys.set(p,E)),E.textContent=_})}let pc=document.createElement("div");pc.className="v3d-bubbles",n.appendChild(pc);let Br=[];function mc(p,_,E){Br.filter(y=>y.p===p).forEach(y=>{y.t=0});let C=document.createElement("div");C.className="v3d-bubble-at";let G=document.createElement("div");G.className="v3d-bubble"+(E?" loud":""),G.textContent=_,C.appendChild(G);let V={p,el:C,t:2.4};Br.push(V),cu(V),pc.appendChild(C)}function cu(p){let _=n.clientWidth||innerWidth,E=n.clientHeight||innerHeight;p.p.g.getWorldPosition(Hr),Hr.y+=2.2,Hr.project(o),p.el.style.transform="translate("+Math.round((Hr.x+1)/2*_)+"px,"+Math.round((1-Hr.y)/2*E)+"px)",p.el.style.opacity=Math.min(1,p.t*3)}let Hr=new O;function jd(p){for(let _=Br.length-1;_>=0;_--){let E=Br[_];if(E.t-=p,E.t<=0||!E.p.g.visible||E.p.inside){E.el.remove(),Br.splice(_,1);continue}cu(E)}}function gc(){let p=o.position.distanceTo(a.target),_=p<175&&ys.size>0;if(Un.style.display=_?"":"none",!_)return;let E=n.clientWidth||innerWidth,C=n.clientHeight||innerHeight,G=C*1.8/(2*p*Math.tan(o.fov*Math.PI/360));Un.style.fontSize=Math.max(7,Math.min(12,G*.24)).toFixed(1)+"px",Un.classList.toggle("night",kr>.5);let V=performance.now(),y=V-(gc.t||0)>300;y&&(gc.t=V);let U=[];ys.forEach((tt,ot)=>{if(!ot.g.visible||ot.inside||bt.indexOf(ot)<0){tt.style.display="none";return}if(ot.g.getWorldPosition(Ti),Ti.y+=2.05,y){let yt=Ti.clone().sub(o.position),Ft=yt.length();xc.set(o.position,yt.normalize()),xc.far=Ft-.3,ot.hidden=xc.intersectObjects(Qd,!1).length>0}if(ot.hidden){tt.style.display="none";return}if(Ti.project(o),Ti.z>1||Math.abs(Ti.x)>1.1||Math.abs(Ti.y)>1.1){tt.style.display="none";return}let Lt=(Ti.x+1)/2*E,nt=(1-Ti.y)/2*C;for(let yt=0;yt<4;yt++){let Ft=U.find(se=>Math.abs(se[0]-Lt)<34&&Math.abs(se[1]-nt)<12);if(!Ft)break;nt=Ft[1]-13}U.push([Lt,nt]),tt.style.display="",tt.style.transform="translate("+Lt.toFixed(1)+"px,"+nt.toFixed(1)+"px) translate(-50%,-100%)"})}let xc=new Rr,Qd=Z.map(p=>p.userData.pick).filter(Boolean);function lu(){tn.forEach((p,_)=>{if(_===at.home)return;let E=Dn.filter(G=>ve(_)>=G).length,C=bt.filter(G=>G.helper&&G.home===_&&G.goal!=="leave");for(let G=C.length;G<E;G++){let V=W(Cd[G%Cd.length],_,{helper:Dn[G]});V.g.position.set(ut.x+Vt(-1,1),0,ut.z+Vt(0,.6)),In(V,Ht(V),"work")}})}function hu(p,_){let E={x:p.g.position.x,z:p.g.position.z};if(ri(E,_))return[_];let C=rt.nearest(E.x,E.z),G=rt.nearest(_.x,_.z),V=rt.path(C,G);if(!ri(E,V[0]))return[];let y=V[V.length-1];return ri(y,_)&&V.push(_),V}function tp(p){if(p.kind==="dog"&&Math.random()<.65){let E=bt[p.buddy%bt.length];for(let V=0;V<bt.length&&(!E.g.visible||E.sitting);V++)E=bt[++p.buddy%bt.length];let C=E.g.position,G={x:C.x+Vt(-1.5,1.5),z:C.z+Vt(.8,1.6)};if(Math.random()<.15&&p.buddy++,!Mn(G.x,G.z)&&(p.path=hu(p,G),p.path.length))return}for(let E=0;E<30;E++){let C={x:p.g.position.x+Vt(-9,9),z:p.g.position.z+Vt(-7,7)};if(!Mn(C.x,C.z,.8)&&ri(p.g.position,C)){p.path=[C];return}}let _=rt.nodes[rt.nearest(p.g.position.x,p.g.position.z)];p.path=[{x:_.x,z:_.z}]}function uu(p,_){let E=p.g.position;if(p.sleep>0)return p.v=0,!1;if(!p.path.length){if(p.v=0,p.wait-=_,p.wait<=0){if(p.kind==="person")return p.wait=Vt(1.5,4),te(p),!1;tp(p),p.wait=Vt(2,6),p.kind==="cat"&&(p.sit=Math.random()<.45,p.sit&&(p.path=[]))}return!1}let C=p.path[0],G=C.x-E.x,V=C.z-E.z,y=Math.hypot(G,V);if(y<.08)return p.path.shift(),!p.path.length&&p.kind==="person"&&En(p),!0;let tt=Math.atan2(G,V)-p.g.rotation.y;tt=Math.atan2(Math.sin(tt),Math.cos(tt)),p.g.rotation.y+=tt*Math.min(1,_*7);let ot=y+(p.path.length>1?99:0),Lt=Math.abs(tt)>1.1?p.speed*.15:p.speed*Math.min(1,ot/1.2+.25);p.v=(p.v||0)+(Lt-(p.v||0))*Math.min(1,_*4);let nt=Math.min(y,p.v*_);return E.x+=Math.sin(p.g.rotation.y)*nt*.35+G/y*nt*.65,E.z+=Math.cos(p.g.rotation.y)*nt*.35+V/y*nt*.65,!0}function ep(p,_){if(bt.slice().forEach(y=>{if(y.inCar){y.g.visible=!1;return}if(y.pool){let nt=xe(y.love==="him"?1:0);if(nt){y.inside=!1,y.g.visible=!0,y.g.position.set(nt.x,nt.y-hc,nt.z),y.g.rotation.set(0,nt.ry,0),y.parts.legL.rotation.x=-1.2+Math.sin(_*2.4+(y.love==="him"?1.3:0))*.35,y.parts.legR.rotation.x=-1.2+Math.sin(_*2.4+2+(y.love==="him"?1.3:0))*.35,y.parts.armL.rotation.x=y.parts.armR.rotation.x=.35,y.parts.head.rotation.set(0,y.love==="him"?-.4:.4,0);return}}if(y.wave>0&&!y.inside&&y.g.visible&&(y.v=0),y.pair&&bt.indexOf(y.pair)<0){k.remove(y.g),bt.splice(bt.indexOf(y),1);return}let U=y.wave>0?!1:y.love==="him"?Te(y,p):y.pair?ie(y.pair,y,p):uu(y,p);if(y.inside||!y.g.visible)return;if(y.sitting&&Ie){let nt=y.love==="her"?-.4:.4;Ce.set(nt,.06,0),Ie.userData.seat.localToWorld(Ce),k.worldToLocal(Ce),y.g.position.set(Ce.x,Ce.y-hc,Ce.z),y.g.rotation.set(Ie.userData.pivot.rotation.x*.9,Ie.rotation.y,0),y.parts.legL.rotation.x=y.parts.legR.rotation.x=-1.45+Math.sin(_*1.7)*.25,y.parts.armL.rotation.x=y.parts.armR.rotation.x=-.5,y.parts.head.rotation.set(0,0,0);return}if(y.parts.scroll&&(y.parts.scroll.visible=!!Wn&&y.goal==="hall"),y.wave>0){y.wave-=p;let nt=o.position.x-k.position.x-y.g.position.x,yt=o.position.z-k.position.z-y.g.position.z,Ft=Math.atan2(nt,yt)-y.g.rotation.y;Ft=Math.atan2(Math.sin(Ft),Math.cos(Ft)),y.g.rotation.y+=Ft*Math.min(1,p*8),y.parts.legL.rotation.x=y.parts.legR.rotation.x=0,y.parts.armL.rotation.x=0,y.parts.armR.rotation.x=-2.9,y.parts.armR.rotation.z=Math.sin(_*13)*.45,y.wave<=0&&(y.parts.armR.rotation.z=0);return}let tt=Math.min(1,(y.v||0)/y.speed);y.t+=p*(U?3+7*tt:2);let ot=U?Math.sin(y.t)*.75*tt:0;y.parts.legL.rotation.x=ot,y.parts.legR.rotation.x=-ot,y.parts.armL.rotation.x=-ot*.8,y.parts.armR.rotation.x=ot*.8,y.g.rotation.x=0,y.parts.head.rotation.x=0,y.parts.head.rotation.z=0;let Lt=zn(y.g.position.x,y.g.position.z);if(y.g.position.y=Lt+(U?Math.abs(Math.sin(y.t))*.06:0),!U&&!y.path.length){if(y.goal==="hall"){let nt=Math.PI-y.g.rotation.y;nt=Math.atan2(Math.sin(nt),Math.cos(nt)),y.g.rotation.y+=nt*Math.min(1,p*6),y.g.position.y=Lt+Math.max(0,Math.sin(_*2.2+y.i))*.04,y.parts.armR.rotation.x=-1.35+Math.sin(_*1.6+y.i)*.08}else if(y.goal==="work"){let nt=Math.PI-y.g.rotation.y;nt=Math.atan2(Math.sin(nt),Math.cos(nt)),y.g.rotation.y+=nt*Math.min(1,p*6),y.parts.armR.rotation.x=-1.3+Math.sin(_*9+y.i)*.55,y.parts.armL.rotation.x=-.9+Math.sin(_*9+y.i+1.6)*.35,y.parts.head.rotation.x=.25}y.parts.head.rotation.y=y.goal==="work"?0:Math.sin(_*.7+y.i)*.4}else y.parts.head.rotation.y=0}),at.kiss>0&&at.him&&at.him.g.visible){at.kiss-=p;let y=at.her,U=at.him,tt=Math.min(1,Math.sin(Math.min(1,(2.4-at.kiss)/2.4)*Math.PI)*1.6),ot=y.g.position.x-U.g.position.x,Lt=y.g.position.z-U.g.position.z;if(U.sitting)U.parts.head.rotation.y=.9*tt,U.parts.head.rotation.z=.25*tt,y.parts.head.rotation.z=-.15*tt;else{let nt=Math.atan2(ot,Lt)-U.g.rotation.y;nt=Math.atan2(Math.sin(nt),Math.cos(nt)),U.g.rotation.y+=nt*Math.min(1,p*8);let yt=Math.atan2(-ot,-Lt)-y.g.rotation.y;yt=Math.atan2(Math.sin(yt),Math.cos(yt)),y.g.rotation.y+=yt*Math.min(1,p*3)*.5,U.g.rotation.x=.2*tt}pe.visible=!0,pe.position.set((y.g.position.x+U.g.position.x)/2,2+(2.4-at.kiss)*.35,(y.g.position.z+U.g.position.z)/2),pe.material.opacity=Math.min(1,at.kiss*1.5),at.kiss<=0&&(pe.visible=!1,U.g.rotation.x=0)}if(Ie){let y=Ie.userData.pivot,U=at.her&&at.her.sitting;y.rotation.x=U?Math.sin(_*1.7)*(at.kiss>0?.12:.32):y.rotation.x*Math.max(0,1-p*1.5)}let E=gs(si());Z.forEach((y,U)=>{if(!y.userData.wm)return;let tt=0;if(U===at.home?tt=0:(ve(U)>0||y.userData.alwaysLit||E!=="sleep"&&bt.some(ot=>ot.home===U&&ot.inside))&&(tt=1),y.userData.lit=Vn(y.userData.lit||0,tt,Math.min(1,p*2)),y.userData.wm.emissiveIntensity=kr*(.28+.7*y.userData.lit),y.userData.heart){let ot=at.her&&at.her.inside&&at.him.inside;y.userData.heart.material.emissiveIntensity=ot?.5+Math.max(0,Math.sin(_*5))*1.3:.2}ve(U)>0&&y.userData.chimney&&Math.random()<p*2.2&&_s(y)});for(let y=Re.length-1;y>=0;y--){let U=Re[y];U.life+=p,U.m.position.y+=p*.9,U.m.position.x+=p*.25,U.m.scale.setScalar(1+U.life*.9),U.m.material.opacity=Math.max(0,.75-U.life*.3),U.life>2.5&&(k.remove(U.m),U.m.material.dispose(),Re.splice(y,1))}rn+=p,rn>2&&(rn=0,lu()),[Tt,ct].forEach(y=>{if(y.sleep>0){y.sleep-=p;let Lt=Math.min(1,y.sleepIn+=p*3);y.parts.legs.forEach((nt,yt)=>{nt.rotation.x=(yt<2?-1.45:1.45)*Lt}),y.g.position.y=zn(y.g.position.x,y.g.position.z)-.22*Lt*y.g.scale.y,y.parts.head.rotation.x=.35*Lt,y.parts.head.rotation.y=0,y.parts.eyes.forEach(nt=>{nt.scale.y=1-.8*Lt}),y.parts.tail.rotation.z=Math.sin(_*.8)*.15,y.zzz.visible=!0,y.zzz.position.set(y.g.position.x,.95+_*.6%1*.45,y.g.position.z),y.zzz.material.opacity=.9-_*.6%1*.6,y.sleep<=0&&(y.zzz.visible=!1,y.parts.eyes.forEach(nt=>{nt.scale.y=1}),y.parts.head.rotation.x=0,y.wait=Vt(.3,1));return}let U=uu(y,p),tt=Math.min(1,(y.v||0)/y.speed);y.t+=p*(U?4+8*tt:2);let ot=U?Math.sin(y.t)*.6*tt:0;y.parts.legs.forEach((Lt,nt)=>{Lt.rotation.x=nt===0||nt===3?ot:-ot}),y.kind==="cat"?(y.parts.tail.rotation.z=Math.sin(_*2)*.35,y.parts.tail.rotation.x=y.sit&&!U?.9:.5,y.g.children[0].rotation.x=0,y.parts.head.rotation.y=U?0:Math.sin(_*.5)*.5,y.g.position.y=zn(y.g.position.x,y.g.position.z)):(y.parts.tail.rotation.z=Math.sin(_*(U?18:10))*.6,y.parts.head.rotation.x=U?0:Math.sin(_*1.3)*.1,y.g.position.y=zn(y.g.position.x,y.g.position.z)+(U?Math.abs(Math.sin(y.t))*.07:0))});for(let y=Ee.length-1;y>=0;y--){let U=Ee[y];U.m.position.y>-.08?(U.vy-=p*9,U.m.position.y=Math.max(-.08,U.m.position.y+U.vy*p),U.m.position.y===-.08&&Nr(U.m.position.x,U.m.position.z,.5)):U.m.position.y=-.08+Math.sin(_*3+y)*.015,U.life-=p,U.life<=0&&(k.remove(U.m),Ee.splice(y,1))}vt.forEach(y=>{y.t+=y.dir*y.sp*p,(y.t>.93||y.t<.12)&&(y.dir*=-1,y.t=Math.max(.12,Math.min(.93,y.t)));let U=ue.curve.getPointAt(y.t),tt=ue.curve.getTangentAt(y.t),ot=y.side+Math.sin(_*.7+y.ph)*.2;y.g.position.set(U.x-tt.z*ot,-.36,U.z+tt.x*ot),y.g.rotation.y=Math.atan2(tt.x*y.dir,tt.z*y.dir),y.g.userData.tail.rotation.y=Math.sin(_*9+y.ph)*.5}),Wt.forEach(y=>{y.a+=y.sp*p;let U=ee.x+Math.cos(y.a)*(ee.rx-1.6)*y.r,tt=ee.z+Math.sin(y.a)*(ee.rz-1)*y.r,ot=null,Lt=1e9;if(Ee.forEach(nt=>{if(nt.m.position.y<=-.02){let yt=Math.hypot(nt.m.position.x-y.g.position.x,nt.m.position.z-y.g.position.z);yt<Lt&&(Lt=yt,ot=nt)}}),ot&&!y.jump){let nt=ot.m.position.x-y.g.position.x,yt=ot.m.position.z-y.g.position.z,Ft=Math.hypot(nt,yt),se=Math.min(Ft,2.6*p);y.g.position.x+=nt/(Ft||1)*se,y.g.position.z+=yt/(Ft||1)*se,y.g.position.y=-.3,y.g.rotation.y=Math.atan2(nt,yt),Ft<.25&&(k.remove(ot.m),Ee.splice(Ee.indexOf(ot),1),Nr(ot.m.position.x,ot.m.position.z,.6)),y.a=Math.atan2((y.g.position.z-ee.z)/(ee.rz-1),(y.g.position.x-ee.x)/(ee.rx-1.6)),y.r=Math.min(.85,Math.max(.2,Math.hypot((y.g.position.x-ee.x)/(ee.rx-1.6),(y.g.position.z-ee.z)/(ee.rz-1)))),y.g.userData.tail.rotation.y=Math.sin(_*16+y.a)*.6;return}if(y.jump>0){y.jump+=p*.9;let nt=Math.sin(y.jump*Math.PI)*1.8;y.g.position.set(Vn(y.jx,U,y.jump),-.34+nt,Vn(y.jz,tt,y.jump)),y.g.rotation.x=-Math.cos(y.jump*Math.PI)*1.1,y.jump>=1&&(y.jump=0,y.g.rotation.x=0,nn.position.set(U,-.09,tt),nn.material.opacity=.55,nn.scale.setScalar(1))}else{let nt=U-y.g.position.x,yt=tt-y.g.position.z;y.g.position.set(Vn(y.g.position.x,U,Math.min(1,p*6)),-.34,Vn(y.g.position.z,tt,Math.min(1,p*6))),(nt||yt)&&(y.g.rotation.y=Math.atan2(nt,yt)),Math.random()<p*.05&&(y.jump=.001,y.jx=U,y.jz=tt,nn.position.set(U,-.09,tt),nn.material.opacity=.55,nn.scale.setScalar(1))}y.g.userData.tail.rotation.y=Math.sin(_*8+y.a)*.5}),ue.glints.forEach(y=>{y.t=(y.t+y.sp*p*6)%1;let U=ue.curve.getPointAt(y.t),tt=ue.curve.getTangentAt(y.t);y.m.position.set(U.x-tt.z*y.side,.06,U.z+tt.x*y.side),y.m.rotation.z=-Math.atan2(tt.z,tt.x),y.m.material.opacity=.35+Math.abs(Math.sin(_*3+y.side*9))*.5}),ue.ftex.offset.y=(ue.ftex.offset.y+p*1.6)%1,F.jet.scale.y=1+Math.sin(_*6)*.08,pt.forEach(y=>{y.t=(y.t+p*.35)%1,y.m.position.set(y.x+Math.sin(y.t*6+y.z)*.3,-.1+y.t*1.8,y.z+y.t*.8),y.m.material.opacity=.55*(1-y.t),y.m.scale.setScalar(.6+y.t*1.2)}),F.drops.forEach(y=>{y.t=(y.t+p*.7)%1;let U=.15+y.t*.95,tt=2.25+y.t*.6-y.t*y.t*2.35;y.m.position.set(Math.cos(y.a)*U,tt,Math.sin(y.a)*U)}),ue.foam.forEach((y,U)=>{let tt=.8+Math.abs(Math.sin(_*5+U))*.5;y.scale.setScalar(tt)}),qt.ducks.forEach(y=>{y.a+=y.sp*p;let U=ee.x+Math.cos(y.a)*(ee.rx-2),tt=ee.z+Math.sin(y.a)*(ee.rz-1.2);y.g.rotation.y=Math.atan2(U-y.g.position.x,tt-y.g.position.z)||y.g.rotation.y,y.g.position.set(U,-.2+Math.sin(_*2+y.a)*.03,tt)});for(let y=ms.length-1;y>=0;y--){let U=ms[y];U.material.opacity-=p*1.2,U.scale.multiplyScalar(1+p*2.5*U.userData.size),U.material.opacity<=0&&(k.remove(U),U.geometry.dispose(),ms.splice(y,1))}nn.material.opacity>0&&(nn.material.opacity=Math.max(0,nn.material.opacity-p*.8),nn.scale.multiplyScalar(1+p*1.8)),qs.forEach(y=>{y.ph+=p,y.g.position.set(y.cx+Math.sin(y.ph*.4)*6,1.6+Math.sin(y.ph*1.3)*.5,y.cz+Math.cos(y.ph*.33)*4),y.g.rotation.y=y.ph*.4+Math.PI/2;let U=Math.sin(y.ph*18)*1.1;y.g.userData.l.rotation.y=U,y.g.userData.r.rotation.y=-U});let C=Yi.geometry.attributes.position;for(let y=0;y<C.count;y++)C.setY(y,1.5+Math.sin(_*.8+y)*.8),C.setX(y,C.getX(y)+Math.sin(_*.5+y*3)*p*.4);if(C.needsUpdate=!0,D.forEach(y=>{y.position.x+=y.userData.speed*p,y.position.x>90&&(y.position.x=-90)}),jn&&du(p),z.rotation.y+=p*.012,A.forEach(y=>{y.position.y=y.userData.y0+Math.sin(_*.5+y.userData.ph)*.3}),Et.forEach(y=>{y.material.opacity=y.userData.base*Math.max(0,Math.sin(_*1.8+y.userData.ph))}),q.forEach(y=>{y.material.opacity=y.userData.base*(.55+.45*Math.sin(_*1.3+y.userData.ph))}),kr>.6)if(H.t<0){if(H.wait-=p,H.wait<=0){let y=Vt(0,Math.PI*2);H.from.set(Math.cos(y)*180,Vt(110,170),Math.sin(y)*180-40),H.dir.set(Vt(-1,1),Vt(-.55,-.35),Vt(-.3,.3)).normalize(),H.t=0}}else{H.t+=p/1.1,Y.position.copy(H.from).addScaledVector(H.dir,H.t*120);let y=Y.position.clone().project(o),U=Y.position.clone().addScaledVector(H.dir,10).project(o);Y.material.rotation=Math.atan2(U.y-y.y,U.x-y.x),Y.material.opacity=Math.sin(Math.min(1,H.t)*Math.PI)*.95,H.t>=1&&(H.t=-1,H.wait=Vt(7,16),Y.material.opacity=0)}else Y.material.opacity=0;let G=It.userData.flag;G.rotation.y=Math.sin(_*3)*.25;let V=It.userData.bell;V.material.emissiveIntensity=Wn?.6+Math.sin(_*6)*.4:0,V.rotation.z=Wn?Math.sin(_*7)*.35:0}let jn=null;function fu(p,_){if(!j.car||jn)return!1;_=_||{};let E=j.car,C={x:E.position.x,z:E.position.z,ry:E.rotation.y},G=rt.nearest(j.exit.x,j.exit.z),V=new Set(rt.doorNodes),U=rt.nodes.map((ae,Ae)=>Ae).filter(ae=>!V.has(ae)&&Math.abs(zn(rt.nodes[ae].x,rt.nodes[ae].z))<.2).filter(ae=>Math.hypot(rt.nodes[ae].x-C.x,rt.nodes[ae].z-C.z)>30),tt=ae=>ae[Math.floor(Math.random()*ae.length)],ot=(t.houses||[]).findIndex(ae=>ae.id==="store"),Lt=_.onShop&&ot>=0?rt.nearest(rt.nodes[rt.doorNodes[ot]].x,rt.nodes[rt.doorNodes[ot]].z,!0):-1,nt=(Lt>=0?[Lt]:[]).concat(U.length?[tt(U)]:[]),yt=[{x:C.x,z:C.z},{x:j.exit.x,z:j.exit.z}],Ft=G,se=-1;return nt.concat([G]).forEach(ae=>{rt.path(Ft,ae).forEach(Ae=>yt.push({x:Ae.x,z:Ae.z})),Ft=ae,ae===Lt&&se<0&&(se=yt.length-1)}),yt.push({x:j.exit.x,z:j.exit.z},{x:C.x,z:C.z-Math.cos(C.ry)*.01}),se>=0&&(yt[se].shop=!0),yt=yt.filter((ae,Ae)=>ae.shop||!Ae||Math.hypot(ae.x-yt[Ae-1].x,ae.z-yt[Ae-1].z)>.3),jn={pts:yt,i:1,home:C,done:p,v:0,last:0,onShop:_.onShop,wait:!1},Se(),[at.her,at.him].forEach(ae=>{ae&&(ae.inCar=!0,ae.sitting=!1,ae.path=[],ae.inside=!1,ae.g.visible=!1)}),Ie&&(Ie.userData.pivot.rotation.x=0),!0}function du(p){let _=j.car,E=jn,C=E.pts[E.i];if(E.wait)return;let G=E.i===E.pts.length-1,V=C.x-_.position.x,y=C.z-_.position.z,U=Math.hypot(V,y);if(E.v=Math.min(G?2:6.5,E.v+p*3),U<.35){if(C.shop&&E.onShop){C.shop=!1,E.wait=!0,E.v=0,E.onShop(()=>{jn===E&&(E.wait=!1)});return}if(E.i++,E.i>=E.pts.length){_.position.set(E.home.x,zn(E.home.x,E.home.z),E.home.z),_.rotation.y=E.home.ry;let nt=E.done;jn=null,[at.her,at.him].forEach((yt,Ft)=>{if(!yt)return;yt.inCar=!1;let se=qi(yt.home);yt.g.position.set(se.x+Ft*.7,0,se.z),yt.g.visible=!0,yt.wait=Vt(2,5)}),nt&&nt();return}return}let tt=Math.min(U,E.v*p);_.position.x+=V/U*tt,_.position.z+=y/U*tt,_.position.y=zn(_.position.x,_.position.z);let ot=Math.atan2(V,y)+(G?Math.PI:0),Lt=_.rotation.y;for(;ot-Lt>Math.PI;)ot-=Math.PI*2;for(;ot-Lt<-Math.PI;)ot+=Math.PI*2;_.rotation.y=Lt+(ot-Lt)*Math.min(1,p*5)}let kr=0;function Vr(){let p=new Date,_=i!=null?i:p.getHours()+p.getMinutes()/60,E=Yd(_);kr=E.night,r.background=E.sky,r.fog.color.copy(E.sky),g.uniforms.bottom.value.copy(E.sky).lerp(new ce(16777215),.18*(1-E.night)).lerp(new ce(10324950),.4*E.night),g.uniforms.top.value.copy(E.sky).lerp(new ce(E.night>.5?2501490:7320547),.5),f.intensity=E.amb,f.color.set(E.night>.5?13158143:16777215),f.groundColor.set(E.night>.5?8160432:12048288),x.color.copy(E.sun),x.intensity=E.power;let C=(_-6)/12*Math.PI,V=_>=5.5&&_<=18.6?C:((_+12)%24-6)/12*Math.PI,y=Math.cos(V)*70,U=Math.max(Math.sin(V),.25)*70;x.position.set(y,U,40+Be.cz),x.target.position.set(0,0,Be.cz),b.position.set(Math.cos(C)*200,Math.sin(C)*160,-120),b.visible=Math.sin(C)>-.05;let tt=((_+12)%24-6)/12*Math.PI;w.position.set(Math.cos(tt)*200,Math.sin(tt)*160,-120),w.visible=E.night>.3&&Math.sin(tt)>0,L.material.opacity=E.night,q.forEach(ot=>{ot.userData.base=E.night}),z.mat.color.set(E.night>.5?10131656:16777215),Et.forEach(ot=>{ot.userData.base=.55+E.night*.45}),Yi.material.opacity=E.night*.95,lc.forEach(ot=>{ot.emissiveIntensity=E.night*.95}),M.forEach(ot=>{ot.intensity=E.night*18}),D.forEach(ot=>{ot.userData.mat.color.set(E.night>.5?8029096:16777215)}),qs.forEach(ot=>{ot.g.visible=E.night<.5})}let Bo=1,Ho=1;function ko(){Bo=n.clientWidth||window.innerWidth,Ho=n.clientHeight||window.innerHeight,s.setSize(Bo,Ho,!1),o.aspect=Bo/Ho,o.updateProjectionMatrix()}let Ai=new pn;function np(p,_){Ai.fov=o.fov,Ai.aspect=o.aspect,Ai.near=.5,Ai.far=1e3,Ai.updateProjectionMatrix();let E=[];for(let y=0;y<48;y++){let U=y/48*Math.PI*2,tt=Ur(U);E.push(new O(Math.cos(U)*tt,0,Be.cz+Math.sin(U)*tt))}E.push(new O(xn[0],9,xn[1]),new O(Ge.x,Ge.H+8,Ge.z)),ds.forEach(([y,U,tt,ot])=>E.push(new O(y,ot,U))),tn.forEach(([y,U])=>E.push(new O(y,6.5,U)));let C=y=>{Ai.position.set(0,Math.cos(p)*y,Math.sin(p)*y).add(_),Ai.lookAt(_),Ai.updateMatrixWorld();let U=new O;return E.every(tt=>(U.copy(tt).project(Ai),Math.abs(U.x)<.97&&U.y>-.97&&U.y<.86))},G=10,V=600;for(let y=0;y<30;y++){let U=(G+V)/2;C(U)?V=U:G=U}return V}function _c(){ko();let p=e==="port"?.6:.88,_=new O(0,0,1.5),E=np(p,_);return{p:new O(0,Math.cos(p)*E,Math.sin(p)*E).add(_),t:_}}function pu(){let p=_c();a.target.copy(p.t),o.position.copy(p.p),a.update()}let ip=1800,sp=1900,We=null,Gr=!1,Wr=null,yc=p=>p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;function mu(p){let _=p.userData.face||0,E=Math.sin(_),C=Math.cos(_),G=p.userData.doorZ-1.3,V=p.position.y,y=(U,tt)=>new O(p.position.x+E*(G+U),V+tt,p.position.z+C*(G+U));return{near:y(3.2,1.75),nearT:y(-1,1.45),inside:y(.35,1.6),insideT:y(-2,1.4)}}function gu(p,_,E,C){if(!E)return p.clone().lerp(_,C);let G=p.clone().lerp(_,C),V=_.clone().lerp(E,C);return G.lerp(V,C)}function rp(p,_,E){let C=Z.find(V=>V.userData.id===p);if(!C){_&&_();return}let G=mu(C);Wr={p:o.position.clone(),t:a.target.clone()},We={mode:"in",start:performance.now(),dur:ip,h:C,done:_,at:E&&E.at,atFired:!1,p:[Wr.p,G.near,G.inside],t:[Wr.t,G.nearT,G.insideT]},a.enabled=!1,Gr=!0}function op(p,_){let E=Z.find(V=>V.userData.id===p);if(!E){xu(),_&&_();return}let C=mu(E),G=Wr||_c();E.userData.hinge&&(E.userData.hinge.rotation.y=-1.7),o.position.copy(C.inside),a.target.copy(C.insideT),o.lookAt(a.target),We={mode:"out",start:performance.now(),dur:sp,h:E,done:_,p:[C.inside,C.near,G.p],t:[C.insideT,C.nearT,G.t]},a.enabled=!1,Gr=!0}function ap(){if(!We)return;let p=Math.min(1,(performance.now()-We.start)/We.dur),_=yc(p);o.position.copy(gu(We.p[0],We.p[1],We.p[2],_)),a.target.copy(gu(We.t[0],We.t[1],We.t[2],_)),o.lookAt(a.target);let E=We.h.userData.hinge;if(E&&(We.mode==="in"?E.rotation.y=-1.7*yc(Math.min(1,Math.max(0,(p-.25)/.45))):E.rotation.y=-1.7*(1-yc(Math.min(1,Math.max(0,(p-.2)/.5))))),We.at&&!We.atFired&&p>=We.at.k&&(We.atFired=!0,We.at.fn()),p>=1){let C=We.done,G=We.mode;We=null,G==="out"&&(Gr=!1,a.enabled=!0,a.update()),C&&C()}}function xu(){if(!Gr||We&&We.mode==="out")return;Gr=!1,We=null,a.enabled=!0,Z.forEach(_=>{_.userData.hinge&&(_.userData.hinge.rotation.y=0)});let p=Wr||_c();o.position.copy(p.p),a.target.copy(p.t),a.update()}let Ms=new Rr,_u=new At,Ri=null,Zs=0,Mc=!1;window.addEventListener("pointerdown",p=>{!p.isTrusted||p.pointerType!=="touch"||(p.isPrimary&&(Zs=0,Mc=!1),Zs++,Zs>1&&(Mc=!0))},!0);let yu=p=>{p.isTrusted&&p.pointerType==="touch"&&(Zs=Math.max(0,Zs-1))};window.addEventListener("pointerup",yu,!0),window.addEventListener("pointercancel",yu,!0),s.domElement.addEventListener("pointerdown",p=>{(p.isPrimary||p.pointerType!=="touch")&&(Ri={x:p.clientX,y:p.clientY,t:performance.now()})}),s.domElement.addEventListener("pointercancel",()=>{Ri=null}),s.domElement.addEventListener("pointerup",p=>{if(!p.isTrusted||p.pointerType==="touch"&&(Mc||Zs>0)){Ri=null;return}if(!Ri||Math.hypot(p.clientX-Ri.x,p.clientY-Ri.y)>8||performance.now()-Ri.t>600){Ri=null;return}Ri=null;let _=s.domElement.getBoundingClientRect();if(_u.set((p.clientX-_.left)/_.width*2-1,-((p.clientY-_.top)/_.height)*2+1),Ms.setFromCamera(_u,o),at.her&&at.her.g.visible&&at.him.g.visible&&Ms.intersectObjects([at.her.g,at.him.g],!0)[0]){at.kiss>0||(at.kiss=2.4,at.her.sitting||(at.her.path=[],at.her.wait=Math.max(at.her.wait,2.8)));return}if(j.car&&!jn&&t.onCar&&Ms.intersectObject(j.car,!0)[0]){t.onCar();return}let E=bt.filter(tt=>!tt.love&&!tt.inside&&tt.g.visible),C=Ms.intersectObjects(E.map(tt=>tt.g),!0)[0];if(C){let tt=C.object,ot=E.find(Lt=>{let nt=tt;for(;nt;){if(nt===Lt.g)return!0;nt=nt.parent}return!1});if(ot){Wn&&ot.goal==="hall"?mc(ot,"Work!!!",!0):(ot.wave=2.2,mc(ot,"Hi!"));return}}let G=Ms.intersectObjects([Tt.g,ct.g],!0)[0];if(G){let tt=Tt.g.getObjectById(G.object.id)?Tt:ct;tt.sleep>0||(tt.sleep=3,tt.sleepIn=0,tt.path=[]);return}let V=Ms.intersectObject(St)[0];if(V){ii(V.point.x-k.position.x,V.point.z-k.position.z);return}let y=Ms.intersectObjects(Z,!0)[0];if(!y)return;let U=y.object;for(;U&&!U.userData.id;)U=U.parent;U&&t.onPick(U.userData.id)});let Xr=new O;function cp(p){let _=Z.find(E=>E.userData.id===p);return _?(Xr.set(_.position.x,_.position.y+_.userData.top,_.position.z),Xr.project(o),{x:(Xr.x+1)/2*Bo,y:(1-Xr.y)/2*Ho,visible:Xr.z<1}):null}let vc=new Do,Yr=!1,Ks=!0,Mu=0,vu=[];function Eu(){if(!Yr)return;if(!Ks||document.hidden){Yr=!1;return}requestAnimationFrame(Eu);let p=Math.min(.12,vc.getDelta()),_=vc.elapsedTime;_-Mu>20&&(Vr(),Mu=_),ep(p,_),We?ap():a.update(),s.render(r,o),vu.forEach(E=>E()),gc(),jd(p)}function Ec(){Yr||(Yr=!0,vc.getDelta(),requestAnimationFrame(Eu))}let bu=()=>{!document.hidden&&Ks&&(Vr(),Ec())},Su=()=>{Ks&&ko()};return document.addEventListener("visibilitychange",bu),window.addEventListener("resize",Su),Vr(),pu(),Ec(),/[?&]debug3d/.test(location.search)&&(window.__v3d={SOURCE:Hn,POND:ee,drive:(p,_)=>fu(p,_),driveFF:p=>{for(let _=0;_<p&&jn;_++)du(.1);return jn?jn.i+"/"+jn.pts.length+(jn.wait?" wait":""):"home"},get car(){return j.car},renderer:s,people:bt,couple:at,get swing(){return Ie},graph:rt,cat:Tt,dog:ct,routine:gs,realHour:si,camera:o,controls:a,water:St,food:Ee,get urgent(){return Wn},set urgent(p){Wn=p},say:mc}),{setUrgent(p){let _=Wn;Wn=p||0,!!_!=!!Wn&&bt.forEach(E=>{!E.love&&!E.helper&&(E.path=[],E.wait=Vt(0,1.5))})},setBusy(p){let _={};(t.houses||[]).forEach((E,C)=>{p&&p[E.id]>0&&(_[C]=p[E.id])}),le=_,lu()},anchor:cp,onFrame(p){vu.push(p)},night(){return kr},setTimeMode(p){i=p==="day"?11:p==="night"?22:null,Vr()},show(p){Ks=!!p,Ks&&(xu(),ko(),Vr(),Ec())},enterHouse:rp,exitHouse:op,drive:fu,setNames(p,_){je=p||null,zr=!!_,Kd(),Zd(),$d()},mateLookOf(p){let _=bt.find(E=>E.pair&&(t.houses||[])[E.home]&&t.houses[E.home].id===p);return _?_.parts.look:null},genderOf(p){let _=bt.find(E=>!E.love&&!E.helper&&!E.pair&&(t.houses||[])[E.home]&&t.houses[E.home].id===p);return _?Vd(_.parts.look)?"f":"m":""},resize:ko,recenter:pu,layout:e,destroy(){Yr=!1,Ks=!1,document.removeEventListener("visibilitychange",bu),window.removeEventListener("resize",Su),a.dispose(),r.traverse(p=>{p.geometry&&p.geometry.dispose()}),s.dispose(),s.domElement.remove()}}}var an=9,Kn=7,_n=4.4,uc=7;function rc(n,t){return new ce(n).lerp(new ce(16777215),t).getHex()}function mi(n,t,e,i,s){let r=new Kt;return r.position.set(t,0,e),r.rotation.y=i||0,n.add(r),r.add(I(2.2,.08,1,s||14267535,0,.78,0)),[[-1,-.42],[1,-.42],[-1,.42],[1,.42]].forEach(([o,a])=>r.add(I(.08,.78,.08,11569768,o,.39,a))),r}function Zn(n,t,e,i){let s=new Kt;return s.position.set(t,0,e),s.rotation.y=i||0,n.add(s),s.add(I(.55,.08,.55,16165309,0,.5,0)),s.add(I(.55,.6,.08,16165309,0,.82,-.26)),[[-.22,-.22],[.22,-.22],[-.22,.22],[.22,.22]].forEach(([r,o])=>s.add(I(.06,.5,.06,9206379,r,.25,o))),s}function Ws(n,t,e){n.add(I(.7,.04,.48,14211296,t,.84,e));let i=I(.7,.46,.04,14211296,t,1.07,e-.24);i.rotation.x=-.25,n.add(i);let s=I(.62,.38,.02,0,t,1.07,e-.215,new Qe({color:12576498}));s.rotation.x=-.25,n.add(s)}function gi(n,t,e,i,s){let r=new Kt;r.position.set(t,0,e),r.rotation.y=i||0,n.add(r),r.add(I(1.8,2.4,.4,12883572,0,1.2,0));for(let o=0;o<4;o++){r.add(I(1.7,.06,.36,14862765,0,.3+o*.55,.03));for(let a=0;a<(s||6);a++){let c=wi.flower[(a+o)%wi.flower.length],l=.3+(a*7+o*3)%4*.04;r.add(I(.16,l,.28,c===16777215?10934504:c,-.7+a*.24,.33+o*.55+l/2,.05))}}return r}function Fn(n,t,e){n.add(I(.5,.5,.5,0,t,.25,e,Ze(mt.CLAY,16368540))),[[0,.78,0,.56],[.2,1.18,.1,.36],[-.18,1.12,-.12,.34]].forEach(([i,s,r,o],a)=>n.add(I(o,o,o,0,t+i,s,e+r,Ze([mt.LEAF_G,mt.LEAF_L,mt.LEAF_M][a]))))}function Xi(n,t,e,i,s,r,o,a,c){let l=new Kt;return l.position.set(t,e,i),l.rotation.y=s,n.add(l),l.add(I(r+.12,o+.12,.05,12883572,0,0,0)),l.add(I(r,o,.06,a,0,0,.01)),(c||[]).forEach(([h,d,u,f])=>l.add(I(f||.32,f||.32,.03,u,h,d,.06))),l}function Fo(n,t,e,i,s){let r=[[-.45,.25],[-.15,.45],[.15,.35],[.45,.6]],o=Xi(n,t,e,i,s,1.4,1.1,16775920);return r.forEach(([a,c],l)=>o.add(I(.2,c,.03,[16758465,10934504,14542964,14273008][l],a,-.4+c/2,.06))),o}function Ud(n,t,e,i,s,r){let o=r?2.2:1.1,a=r?1.6:.9,c=Xi(n,t,e,i,s,o,a,16777215);c.add(I(o,a*.18,.04,16751536,0,a*.41,.05));for(let l=0;l<4;l++)for(let h=0;h<7;h++){let d=(l*7+h)%9===3;c.add(I(o/9,a/7,.02,d?16766687:15985894,-o/2+(h+1)*o/8,a*.2-l*a/5.5,.06))}return c}function D1(n,t,e,i,s){let r=new Kt;r.position.set(t,e,i),r.rotation.y=s,n.add(r);let o=new Dt(new Xe(.35,.35,.06,20),de(16775920));o.rotation.x=Math.PI/2,r.add(o);let a=new Dt(new cs(.36,.04,6,20),de(16165309));r.add(a);let c=I(.04,.18,.02,4865855,0,.08,.05),l=I(.03,.27,.02,4865855,0,.12,.06);return r.add(c,l),r.userData.hands=[c,l],r}function U1(n,t,e){let i=new Dt(new gn(.28,12,10),de(16758465));i.scale.set(1.3,1,1),i.position.set(t,1.1,e),n.add(i),n.add(I(.12,.1,.1,16751536,t+.38,1.1,e)),[[-.15,-.12],[.15,-.12],[-.15,.12],[.15,.12]].forEach(([s,r])=>n.add(I(.07,.12,.07,16751536,t+s,.86,e+r))),n.add(I(.12,.02,.03,9202282,t,1.38,e));for(let s=0;s<3;s++)for(let r=0;r<2+s;r++){let o=new Dt(new Xe(.09,.09,.03,12),de(16111752));o.position.set(t-.7+s*.22,.84+r*.035,e+.1),n.add(o)}}function Nd(n,t,e,i){let s=new Kt;s.position.set(t,0,e),s.rotation.y=i||0,n.add(s),s.add(I(1,1.1,.9,10135480,0,.55,0));let r=new Dt(new Xe(.14,.14,.05,14),de(16111752));return r.rotation.x=Math.PI/2,r.position.set(.15,.6,.46),s.add(r),s.add(I(.06,.3,.05,16111752,-.3,.6,.46)),s}function N1(n,t,e,i){let s=new Kt;return s.position.set(t,0,e),s.rotation.y=i||0,n.add(s),s.add(I(2,.08,.45,12883572,0,1.3,0)),s.add(I(2,.08,.45,12883572,0,.6,0)),[-1,1].forEach(r=>s.add(I(.08,1.4,.45,11569768,r*.96,.7,0))),[.6,1.3].forEach((r,o)=>[-.65,-.2,.25,.7].forEach((a,c)=>{let l=new Dt(new Xe(.15,.15,.4,12),new Me({color:15136507,transparent:!0,opacity:.7}));l.position.set(a,r+.24,0),s.add(l);let h=.08+(c+o*2)%4*.08,d=new Dt(new Xe(.12,.12,h,12),de(16111752));d.position.set(a,r+.06+h/2,0),s.add(d)})),s}function O1(n,t,e,i){let s=new Kt;return s.position.set(t,0,e),s.rotation.y=i||0,n.add(s),s.add(I(.9,1.5,.7,10934504,0,.75,0)),[.35,.8,1.25].forEach(r=>{s.add(I(.8,.38,.04,12576498,0,r,.36)),s.add(I(.25,.05,.05,16775920,0,r+.08,.39))}),s}function F1(n,t,e){[0,2.1,4.2].forEach(r=>{let o=I(.04,1.4,.04,7035470,t+Math.cos(r)*.25,.65,e+Math.sin(r)*.25);o.rotation.set(Math.sin(r)*.3,0,-Math.cos(r)*.3),n.add(o)}),n.add(I(.4,.28,.25,4865855,t,1.45,e));let i=new Dt(new Xe(.09,.09,.15,12),de(3025462));i.rotation.x=Math.PI/2,i.position.set(t,1.45,e+.18),n.add(i);let s=new Dt(new cs(.4,.05,6,24),new Qe({color:16774351}));s.position.set(t-.9,1.7,e-.3),n.add(s),n.add(I(.04,1.7,.04,7035470,t-.9,.85,e-.3))}function z1(n,t,e,i,s){let r=Xi(n,t,e,i,s,1.2,.7,15785156);[-.4,-.13,.13,.4].forEach((o,a)=>{r.add(I(.05,.05,.08,9206379,o,.18,.08)),r.add(I(.1,.22,.03,[16111752,10934504,16758465,10738109][a],o,-.02,.08))})}var jh={work:{first:"list",build(n,t){let e=mi(n,-1.6,-2.4);Ws(e,.2,0),e.add(I(.3,.2,.22,16777215,-.75,.92,.1)),Zn(n,-1.4,-1.55,Math.PI),t.seat={x:-1.4,z:-1.6,ry:Math.PI,y:.54},Xi(n,-4.45,1.8,.4,Math.PI/2,2.6,1.4,16777215,[[-.9,.35,16773544],[-.4,.4,16758465],[.1,.3,10934504],[.6,.38,10738109],[-.8,-.2,16758465],[-.2,-.25,16773544],[.5,-.2,14273008]]),gi(n,4.25,-.6,-Math.PI/2),Fo(n,4.44,2.2,1.6,-Math.PI/2),F1(n,3.4,4.6),Fn(n,-3.9,-3)},corners:{list:[.8,2.9,5.8,-1.3,1,-2.2],board:[2.4,2.7,4.2,-4.3,1.6,.3],stats:[-2.4,2.7,4.2,4.3,1.5,.3],posts:[-.6,2.5,8.6,3.2,1.3,4.4]}},money:{first:"overview",build(n,t){let e=mi(n,0,-2.3,0,16368540);U1(e,.4,0),e.add(I(.35,.05,.45,9417689,-.5,.84,.1)),Zn(n,.2,-1.45,Math.PI),t.seat={x:.2,z:-1.5,ry:Math.PI,y:.54},Ud(n,-4.44,1.9,-.8,Math.PI/2,!0),Fo(n,-4.44,1.9,2.1,Math.PI/2),N1(n,4.2,-1,-Math.PI/2),O1(n,3.6,-3,0),Nd(n,3.6,2,-Math.PI/2.5),Fn(n,-3.9,-3),t.windowX=-1.9},corners:{overview:[.6,2.9,5.8,0,1,-2.3],calendar:[2.6,2.7,3.6,-4.3,1.8,-.8],stats:[2.6,2.7,5.4,-4.3,1.8,1.8],budget:[-2.4,2.7,3.6,4.2,1.1,-1.2],history:[-1.6,2.7,3.8,3.4,1,-3],categories:[-1.6,2.5,6.2,3.6,.7,2]}},calendar:{first:"main",build(n,t){Ud(n,-.1,2.05,-3.44,0,!0),D1(n,-2.6,2.5,-3.44,0),t.windowX=2.9;let e=mi(n,-1.2,-1.6);e.add(I(.5,.06,.36,16773544,.3,.84,0)),e.add(I(.04,.04,.3,15834032,.65,.88,0)),Zn(n,-1,-.75,Math.PI),t.seat={x:-1,z:-.8,ry:Math.PI,y:.54},gi(n,4.25,.2,-Math.PI/2,5),Fn(n,3.8,2.6)},corners:{main:[-.2,2.9,5.8,-.4,1.5,-2.8]}},account:{first:"main",build(n,t){Nd(n,3.7,-2.6,-.3),z1(n,-.5,2,-3.44,0),t.windowX=1.7;let e=mi(n,-1.8,-1.8,.2);Ws(e,0,0),Zn(n,-1.75,-.95,Math.PI+.2),t.seat={x:-1.72,z:-1,ry:Math.PI+.2,y:.54},gi(n,-4.25,.6,Math.PI/2,5),Fn(n,3.9,1.8)},corners:{main:[-.2,2.9,5.8,-.9,1.2,-2.4]}},love:{first:"main",build(n,t){let i=new Kt;i.position.set(-.2,0,-2.4),n.add(i),i.add(I(2.6,.45,.9,16165309,0,.32,0)),i.add(I(2.6,.75,.25,15834032,0,.8,-.35)),[-1,1].forEach(H=>i.add(I(.25,.65,.9,15834032,H*1.3,.45,0)));let s=ps(16744350);s.scale.setScalar(.4),s.position.set(1,.75,-.15),i.add(s),t.seats=[{x:-.65,z:-2.25,ry:0,y:.56},{x:.25,z:-2.25,ry:0,y:.56}],t.sofa=!0,t.couple=!0,[[-2.35,2.95,.55,3095915],[-2.05,2.95,-.55,15230251]].forEach(([H,k,X,gt])=>{let $=new Kt;$.position.set(H,k,-3.44+.06),$.rotation.z=X,n.add($),$.add(I(.06,.34,.05,16777215,0,-.5,0)),$.add(I(.025,.34,.025,10135480,0,-.17,0));let ht=new Dt(new cs(.17,.02,6,22),de(gt));ht.scale.y=1.3,ht.position.y=.2,$.add(ht);for(let Rt=-3;Rt<=3;Rt++)$.add(I(.004,.42,.004,16777215,Rt*.045,.2,0)),$.add(I(.32,.004,.004,16777215,0,.2+Rt*.055,0))});{let H=document.createElement("canvas");H.width=128,H.height=64;let k=H.getContext("2d");k.fillStyle="#ffffff",k.fillRect(0,0,128,64),k.fillStyle="#e8652b",k.fillRect(0,8,128,16),k.fillStyle="#26305a",k.beginPath(),k.moveTo(0,64),k.lineTo(0,24),k.lineTo(14,24),k.lineTo(30,64),k.fill(),k.fillStyle="#26305a",k.fillRect(0,6,128,2),k.fillRect(26,28,102,2),k.font="bold 13px sans-serif",k.fillText("YONEX",74,54),k.beginPath(),k.arc(60,49,3,0,7),k.arc(67,49,3,0,7),k.lineWidth=2,k.strokeStyle="#26305a",k.stroke();let X=new mn(H);X.colorSpace=De;let gt=de(16777215),$=new Me({map:X}),ht=new Dt(new Fe(1.15,.58,.36),[gt,gt,de(15230251),gt,$,$]);ht.position.set(-2.2,1.62,-3.44+.22),ht.castShadow=!0,n.add(ht),[-.28,.28].forEach(Rt=>{n.add(I(.06,.5,.03,16777215,-2.2+Rt*.9,2.02,-3.44+.2))}),n.add(I(.5,.06,.06,2502746,-2.2,2.28,-3.44+.2)),n.add(I(.06,.06,.16,9206379,-2.2,2.32,-3.44+.1))}n.add(I(1.42,1.08,.06,12883572,-.2,2.6,-3.44+.02)),n.add(I(1.28,.94,.07,16775920,-.2,2.6,-3.44+.03));let r=new Dt(new rs(1.1,.78),new Qe({color:16766687}));r.position.set(-.2,2.6,-3.44+.075),r.userData.pick="frame",n.add(r),t.frames=[r];for(let H=0;H<14;H++){let k=new Dt(new gn(.05,6,5),new Qe({color:[16773544,16758465][H%2]}));k.position.set(-4+H*.62,3.45-Math.sin(H*.9)*.08,-3.38),n.add(k)}let o=new Kt;o.position.set(-2,0,-2.4),n.add(o);let a=new Dt(new Xe(.42,.42,.06,18),de(14861214));a.position.y=.6,o.add(a),o.add(I(.07,.6,.07,11569768,0,.3,0));let c=new Dt(new Xe(.22,.25,.04,14),de(11569768));c.position.y=.02,o.add(c);let l=new Dt(new gn(.13,16,12),de(13231096));l.scale.y=1.3,l.position.y=.8,o.add(l),[[0,1.08,0,16758465],[.08,1.02,.05,16773544],[-.08,1.04,-.03,16165309]].forEach(([H,k,X,gt])=>{o.add(I(.015,.25,.015,8173679,H*.6,.95,X*.6));let $=new Dt(new gn(.06,10,8),de(gt));$.position.set(H,k,X),o.add($)});let h=new Kt;h.userData.pick="up",n.add(h);let d=Ze(mt.PLANKS),u=Ze(mt.PLANK_GREY,16165309),f=-3.95;for(let H=0;H<10;H++){let k=.6-H*.32,X=(H+1)*.44;h.add(I(.95,X,.32,0,f,X/2,k,d)),h.add(I(.6,.04,.32,0,f,X+.02,k,u)),H%3===0&&h.add(I(.06,.8,.06,16777215,f+.5,X+.4,k))}{let H=Math.hypot(3.2,4.4),k=I(.08,.08,H,16777215,f+.5,2.2+.8+.22,.6-1.6+.16);k.rotation.x=-Math.atan2(4.4,3.2),h.add(k)}t.stairHole={x0:-an/2,x1:-3,z0:-Kn/2,z1:-.7};let x=T1(Math.PI/4,.42);x.position.set(f+.2,2.2,.2),h.add(x);let M=new Kt;M.position.set(2.75,0,-1.25),n.add(M),M.add(I(1.5,.06,.95,14861214,0,.76,0)),[[-.65,-.38],[.65,-.38],[-.65,.38],[.65,.38]].forEach(([H,k])=>M.add(I(.06,.76,.06,11569768,H,.38,k))),[-1,1].forEach(H=>{let k=Gi("bowl",{soup:"#f6efe0",noodle:"#fffaf0"},.3);k.position.set(H*.4-.16,.79,-.18),M.add(k);let X=Gi("bowl",{soup:"#d98c4a",top:["#8a5233","#8a5233","#a86a40","#7fc46a"]},.3);X.position.set(H*.4+.16,.79,-.18),M.add(X),M.add(I(.32,.012,.012,12883572,H*.4,.8,.05)),M.add(I(.32,.012,.012,12883572,H*.4,.8,.08))});let g=Gi("plate",{dots:["#6fb85a","#8fcc7c","#6fb85a","#8fcc7c","#6fb85a","#8fcc7c","#6fb85a","#8fcc7c"]},.4);g.position.set(0,.79,-.05),M.add(g),Zn(n,2.75-.4,-1.25-.85,0),Zn(n,2.75+.4,-1.25-.85,0),t.dining=[{x:2.75-.4,z:-1.25-.8,ry:0,y:.54},{x:2.75+.4,z:-1.25-.8,ry:0,y:.54}],t.windowX=2.7,t.bigWindow=!0,Fn(n,3.95,1.4),t.dinner=M,t.defaultDishes=M.children.slice(5);let m=_n+.3,b=new Kt;b.position.y=m,n.add(b);let w=Kn+uc,v=uc/2,N=t.stairHole;for(let H=0;H<12;H++){let k=-an/2+(H+.5)*an/12,X=H%2?15981768:15651517;if(k<N.x1){let gt=N.z1,$=v+w/2,ht=I(an/12,.1,$-gt,X,k,-.05,(gt+$)/2);b.add(ht)}else b.add(I(an/12,.1,w,X,k,-.05,v))}let L=I(an,_n,.12,t.wall,0,_n/2,-Kn/2);L.castShadow=!1,b.add(L),[-1,1].forEach(H=>{let k=I(.12,_n,w,t.wall2,H*an/2,_n/2,v);k.castShadow=!1,b.add(k)});let D=I(an,.12,w,0,0,_n+.06,v,new Me({color:t.ceil,emissive:t.ceil,emissiveIntensity:.3}));D.castShadow=!1,b.add(D),b.add(I(3.1,2.1,.08,16777215,3,2.2,-Kn/2+.06)),b.add(I(2.9,1.9,.09,0,3,2.2,-Kn/2+.07,t.skyMat)),[-1,1].forEach(H=>b.add(I(.26,2.3,.05,16762063,3+H*1.6,2.2,-Kn/2+.2))),b.add(I(2.8,.4,3.4,15918810,0,.28,-1.85)),b.add(I(2.6,.22,3.2,16777215,0,.58,-1.85)),b.add(I(3,1.5,.22,16171471,0,1,-3.48)),b.add(I(2.7,.18,.1,16372702,0,1.6,-3.36)),[-.62,.62].forEach(H=>b.add(I(1,.2,.55,16775925,H,.8,-3))),b.add(I(2.72,.12,2.35,16368595,0,.98,-1.25)),b.add(I(2.74,.14,.32,16777215,0,.99,-2.3)),[-1.4,1.4].forEach(H=>b.add(I(.12,.5,2.3,16368595,H,.75,-1.25)));let z=ps(16748465);z.scale.setScalar(.32),z.position.set(0,1.25,-3.3),b.add(z),[-1.95,1.95].forEach(H=>{b.add(I(.75,.62,.6,14861214,H,.31,-3.05)),b.add(I(.79,.05,.64,15785156,H,.64,-3.05)),b.add(I(.5,.05,.02,12883572,H,.42,-2.74))}),b.add(I(.22,.22,.22,16171471,-1.95,.77,-3.05));let A=new Dt(new Fe(.4,.3,.4),new Me({color:16773590,emissive:16765562,emissiveIntensity:0,map:pi(mt.PLASTER)}));A.position.set(-1.95,1.02,-3.05),b.add(A),t.bedLamp=A;let S=new Kt;S.position.set(1.95,.7,-3),S.rotation.y=-.3,S.userData.pick="album",b.add(S),S.add(I(.5,.08,.38,13231096,0,0,0)),S.add(I(.04,.085,.38,11127784,-.25,0,0));let B=ps(16027569);B.scale.setScalar(.15),B.rotation.x=-Math.PI/2,B.position.set(.02,.045,.06),S.add(B),t.album=S;let q=new Kt;q.userData.pick="down",b.add(q),q.add(I(N.x1-N.x0,.05,N.z1-N.z0,0,(N.x0+N.x1)/2,-.02,(N.z0+N.z1)/2,fc));for(let H=0;H<5;H++)q.add(I(.06,.85,.06,16777215,N.x1,.42,N.z0+.25+H*.6));q.add(I(.08,.08,N.z1-N.z0,16777215,N.x1,.86,(N.z0+N.z1)/2)),q.add(I(.08,.08,N.x1-N.x0-1,16777215,(N.x0+1+N.x1)/2,.86,N.z1)),q.add(I(.06,.85,.06,16777215,N.x0+1,.42,N.z1));let Y=new Dt(new Xe(1,1,.03,32),de(14281207));Y.scale.set(1.8,1,1.1),Y.position.set(.6,.02,1),b.add(Y),Fn(b,3.95,.8);for(let H=0;H<14;H++){let k=new Dt(new gn(.05,6,5),new Qe({color:[16773544,16758465][H%2]}));k.position.set(-4+H*.62,3.45-Math.sin(H*.9)*.08,-3.38),b.add(k)}t.bedSpots=[{x:-.45,z:-1.42},{x:.45,z:-1.42}],t.bedY=m,b.traverse(H=>{H.castShadow=!1})},corners:{main:[.4,2.8,6.6,.2,1.3,-1.9],bed:[.2,4.7+2.6,3.4,0,4.7+.9,-2.3],meal:[2.2,2.6,3.8,2.8,1,-1.6],album:[1.75,4.7+1.75,-1.85,1.9,4.7+.55,-3.05]}},game:{first:"main",build(n,t){n.add(I(2.6,.6,.6,12883572,0,.3,-3.05)),n.add(I(2.2,1.3,.1,3025462,0,1.35,-3.15));let e=I(2.05,1.15,.02,0,0,1.35,-3.09,new Qe({color:10934504}));n.add(e),[[-.6,1.55,16758465],[.1,1.2,16111752],[.6,1.6,10738109]].forEach(([s,r,o])=>n.add(I(.3,.3,.01,0,s,r,-3.075,new Qe({color:o})))),n.add(I(.5,.12,.35,16777215,.8,.66,-2.95));let i=new Dt(new gn(.7,14,10),de(16165309));i.scale.set(1.1,.6,1),i.position.set(.2,.4,-.4),i.castShadow=!0,n.add(i),t.seats=[{x:.2,z:-.45,ry:Math.PI,y:.78}],t.gamer=!0,Fo(n,-4.44,2.2,-.8,Math.PI/2),Xi(n,4.44,2.2,-.4,-Math.PI/2,1.2,1.5,14273008,[[0,.3,16758465,.5],[0,-.35,16111752,.4]]),gi(n,-4.25,1.8,Math.PI/2,5),Fn(n,3.9,-3),t.windowX=2.9},corners:{main:[.4,2.8,5.6,0,1.1,-2.6]}},language:{first:"main",build(n,t){let e=mi(n,-1.2,-2.3,0,16171471);e.add(I(.5,.05,.36,16777215,-.2,.83,0)),e.add(I(.5,.05,.36,16774888,.32,.83,0)),e.add(I(.02,.06,.36,12883572,.06,.84,0)),[10934504,16758465,16111752].forEach((s,r)=>e.add(I(.4,.07,.28,s,.85,.83+r*.075,-.05)));let i=new Dt(new gn(.18,20,14),de(10473444));i.position.set(-.8,1.08,0),e.add(i),e.add(I(.05,.25,.05,12883572,-.8,.9,0)),Zn(n,-1,-1.45,Math.PI),t.seat={x:-1,z:-1.5,ry:Math.PI,y:.54},Xi(n,-4.45,1.9,.2,Math.PI/2,2.4,1.4,16777215,[[-.75,.35,16758465],[-.25,.35,16773544],[.25,.35,10934504],[.75,.35,10738109],[-.5,-.25,14273008],[0,-.25,16758465],[.5,-.25,16773544]]),gi(n,4.25,-.4,-Math.PI/2,5),Fo(n,4.44,2.3,1.8,-Math.PI/2),Fn(n,3.9,-3),t.windowX=2.2},corners:{main:[-.3,2.9,5.8,-.9,1.1,-2.3]}},skills:{first:"main",build(n,t){let e=mi(n,-.6,-2.3,0,16111752);Ws(e,-.3,0),e.add(I(.45,.04,.32,16777215,.45,.83,.05)),e.add(I(.02,.02,.3,15235487,.62,.86,.05));let i=I(.6,.3,.32,15035243,3.4,.15,-2.6);n.add(i),n.add(I(.3,.05,.05,3814720,3.4,.35,-2.6)),Zn(n,-.4,-1.45,Math.PI),t.seat={x:-.4,z:-1.5,ry:Math.PI,y:.54};let s=new Kt;s.position.set(-3.3,0,-1.6),s.rotation.y=.5,n.add(s),[-.4,.4].forEach(r=>{let o=I(.07,1.9,.07,12883572,r,.95,0);o.rotation.z=-r*.15,s.add(o)}),s.add(I(1,.8,.05,16777215,0,1.35,.06)),s.add(I(.5,.3,.06,10934504,-.15,1.45,.08)),s.add(I(.25,.25,.06,16758465,.25,1.2,.08)),Xi(n,4.44,2,-.5,-Math.PI/2,1.6,1.2,16777215,[[-.5,-.25,10738109,.3],[-.15,-.1,16111752,.3],[.2,.05,16758465,.3],[.55,.2,10934504,.3]]),gi(n,-4.25,1.4,Math.PI/2,5),Fn(n,3.9,2.4),t.windowX=2.4},corners:{main:[0,2.9,5.8,-.3,1.1,-2.2]}},notes:{first:"main",build(n,t){let e=mi(n,-.8,-2.3,0,16111752);Ws(e,.4,0),[16758465,10934504,16773544].forEach((i,s)=>e.add(I(.36,.05,.48,i,-.5,.83+s*.055,.02+s*.03))),Zn(n,-.6,-1.45,Math.PI),t.seat={x:-.6,z:-1.5,ry:Math.PI,y:.54},Xi(n,-.6,2.2,-3.44,0,2.6,1.3,14267535,[[-1,.35,16773544],[-.55,.3,16758465],[-.1,.38,10934504],[.35,.32,10738109],[.85,.36,16773544],[-.8,-.25,14273008],[-.3,-.22,16773544],[.2,-.28,16758465],[.7,-.24,10934504]]),gi(n,4.25,-.4,-Math.PI/2,5),Fn(n,-3.9,-3),t.windowX=2.8},corners:{main:[-.2,2.9,5.8,-.6,1.3,-2.4]}},goals:{first:"main",build(n,t){Xi(n,0,2.15,-3.44,0,3,1.6,16777215,[[-1.1,.35,10934504,.45],[-.45,.4,16758465,.4],[.55,.38,10738109,.45],[1.15,.3,16111752,.4],[-.9,-.35,14273008,.45],[.95,-.35,16758465,.4]]);let e=ps(16765803);e.scale.setScalar(.5),e.position.set(0,2.1,-3.3),n.add(e);let i=mi(n,-1.8,-1.9,.25,14273008);Ws(i,0,0),Zn(n,-1.7,-1.05,Math.PI+.25),t.seat={x:-1.68,z:-1.1,ry:Math.PI+.25,y:.54};let s=new Dt(new Xe(.22,.12,.36,18),de(16107596));s.position.set(3.7,1.28,-2.7),n.add(s),n.add(I(.5,.9,.5,15785156,3.7,.45,-2.7)),n.add(I(.2,.12,.2,16107596,3.7,1,-2.7)),Fn(n,-3.9,-3),t.windowX=3.2},corners:{main:[.2,2.8,5.8,-.2,1.4,-2.4]}},health:{first:"main",build(n,t){let e=I(1,.04,2,10738109,-1.6,.03,-.6);e.castShadow=!1,n.add(e),[[-.7,-1.4],[-.45,-1.4]].forEach(([o,a])=>{n.add(I(.36,.05,.05,9080729,o,.12,a)),[-.16,.16].forEach(c=>{let l=new Dt(new Xe(.1,.1,.08,16),de(15834032));l.rotation.z=Math.PI/2,l.position.set(o+c,.12,a),n.add(l)})}),n.add(I(.9,1.6,.8,16777215,3.6,.8,-2.9)),n.add(I(.05,.4,.05,12633806,3.2,1,-2.48)),n.add(I(.9,.04,.82,15328478,3.6,1.1,-2.9));let i=mi(n,1.2,-2.4,0,16766665),s=new Dt(new gn(.25,20,12,0,Math.PI*2,Math.PI/2,Math.PI/2),de(16777215));s.position.set(0,1.04,0),i.add(s),[[16744319,-.08,0],[16765803,.08,.04],[10147472,0,-.08]].forEach(([o,a,c])=>{let l=new Dt(new gn(.09,14,10),de(o));l.position.set(a,1.04,c),i.add(l)});let r=new Dt(new Xe(.07,.07,.3,14),de(10473444));r.position.set(.5,.98,.1),i.add(r),Zn(n,1.4,-1.55,Math.PI),t.seat={x:1.4,z:-1.6,ry:Math.PI,y:.54},Fo(n,-4.44,2.2,-.6,Math.PI/2),Fn(n,-3.9,-3),t.windowX=-.6},corners:{main:[.4,2.8,5.8,.2,1,-2]}},law:{first:"main",build(n,t){gi(n,-4.25,-.8,Math.PI/2,5),gi(n,-4.25,1.4,Math.PI/2,5),gi(n,4.25,-.4,-Math.PI/2,5);let e=mi(n,.2,-2.3,0,12883572);Ws(e,-.4,0);let i=new Kt;i.position.set(.55,.83,0),e.add(i),i.add(I(.04,.5,.04,14267466,0,.25,0)),i.add(I(.5,.03,.03,14267466,0,.48,0)),[-.24,.24].forEach(s=>{let r=new Dt(new Xe(.09,.06,.03,16),de(14267466));r.position.set(s,.3,0),i.add(r),i.add(I(.01,.18,.01,14267466,s,.39,0))}),Zn(n,.4,-1.45,Math.PI),t.seat={x:.4,z:-1.5,ry:Math.PI,y:.54},Fn(n,3.9,2.4),t.windowX=2.4},corners:{main:[.2,2.9,5.8,.1,1.2,-2.3]}},store:{first:"main",build(n,t){n.add(I(2.6,1,.7,10147520,-.2,.5,-1.15)),n.add(I(2.7,.06,.8,16777215,-.2,1.03,-1.15));for(let u=0;u<5;u++)n.add(I(.3,.6,.02,8372906,-1.2+u*.5,.5,-.79));let s=new Kt;s.position.set(.55,1.06,-1.2),n.add(s),s.add(I(.5,.14,.4,5591134,0,.07,0));let r=I(.4,.28,.04,5591134,0,.32,-.12);r.rotation.x=-.3,s.add(r);let o=I(.34,.22,.02,0,0,.32,-.095,new Qe({color:12579544}));o.rotation.x=-.3,s.add(o);for(let u=0;u<3;u++)for(let f=0;f<3;f++)s.add(I(.07,.02,.06,15394544,-.1+f*.1,.15,.04+u*.06));let a=Gi("onigiri",{},.26);a.position.set(-.9,1.06,-1.1),n.add(a);let c=Gi("cup",{drink:"#d9b08a",boba:!0},.3);c.position.set(-.55,1.06,-1.05),n.add(c);let l=Gi("bun",{bun:"#fff8ee"},.26);l.position.set(-1.25,1.06,-1.15),n.add(l);let h=[["cup",{drink:"#ff8fb0",cream:!0}],["cookie",{}],["donut",{}],["onigiri",{}],["mochi",{}],["cup",{drink:"#8a5a3a",ice:!0}],["kimbap",{}],["flan",{}]];[-2.6,2.2].forEach((u,f)=>{let x=new Kt;x.position.set(u,0,-3.15),n.add(x),x.add(I(1.9,2.3,.5,15920614,0,1.15,0));for(let M=0;M<4;M++){x.add(I(1.8,.05,.46,14208964,0,.32+M*.52,.04));for(let g=0;g<5;g++){let[m,b]=h[(g+M*2+f*3)%h.length],w=Gi(m,b,.3);w.position.set(-.72+g*.36,.35+M*.52,.06),x.add(w)}}x.add(I(1.9,.18,.52,f?16165309:16765803,0,2.2,.02))});let d=new Kt;d.position.set(4,0,-.6),d.rotation.y=-Math.PI/2,n.add(d),d.add(I(1.6,2.3,.7,15266552,0,1.15,0)),d.add(I(1.44,2,.02,0,0,1.15,.36,new Qe({color:14677247,transparent:!0,opacity:.35})));for(let u=0;u<4;u++)for(let f=0;f<5;f++){let x=[16748410,10147472,16765803,10473471,16752575][(f+u)%5];d.add(I(.14,.32,.14,x,-.56+f*.28,.36+u*.48,.12)),d.add(I(.1,.06,.1,16777215,-.56+f*.28,.55+u*.48,.12))}d.add(I(1.6,.2,.72,10147520,0,2.2,0)),Fn(n,-4,2.4),t.seat={x:-.1,z:-1.85,ry:0,y:0,stand:!0},t.windowX=-3.2},corners:{main:[.1,1.9,5,-.1,1.45,-2.2]}},other:{first:"main",build(n,t){let e=mi(n,-1,-2.3);Ws(e,0,0),Zn(n,-.8,-1.45,Math.PI),t.seat={x:-.8,z:-1.5,ry:Math.PI,y:.54},gi(n,4.25,-.6,-Math.PI/2),Fn(n,-3.9,-3)},corners:{main:[0,2.9,5.8,0,1.1,-2]}}};function B1(n,t){ru.length=0,t=t||{};let e=jh[t.house]||(t.kind==="game"?jh.game:jh.other),i=new go({antialias:!0});i.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),i.shadowMap.enabled=!0,i.shadowMap.type=qa,n.appendChild(i.domElement);let s=new xo,r=new pn(48,1,.1,100),o=t.house==="love",a=rc(t.roof||16165309,o?.6:.72),c=rc(t.roof||16165309,o?.46:.55);s.background=new ce(rc(t.roof||16165309,.82));let l=new Kt;s.add(l);let h=Kn+uc,d=uc/2;for(let Z=0;Z<12;Z++){let Q=I(an/12,.1,h,Z%2?15323054:14861214,-an/2+(Z+.5)*an/12,-.05,d);Q.castShadow=!1,l.add(Q)}let u=I(an,_n,.12,a,0,_n/2,-Kn/2);u.castShadow=!1,l.add(u),[-1,1].forEach(Z=>{let Q=I(.12,_n,h,c,Z*an/2,_n/2,d);Q.castShadow=!1,Q.receiveShadow=!0,l.add(Q)});let f=rc(t.roof||16165309,.9),x=new Me({color:f,emissive:f,emissiveIntensity:.3});if(t.house==="love"){let j=d-h/2,It=d+h/2;[[-3,an/2,j,It],[-an/2,-3,-.7,It]].forEach(([ut,rt,Mt,bt])=>{let at=I(rt-ut,.12,bt-Mt,0,(ut+rt)/2,_n+.06,(Mt+bt)/2,x);at.castShadow=!1,l.add(at)})}else{let Z=I(an,.12,h,0,0,_n+.06,d,x);Z.castShadow=!1,l.add(Z)}let M=Z=>{Z.castShadow=!1,l.add(Z)};M(I(an,.16,.12,16777215,0,_n-.08,-Kn/2+.1)),[-1,1].forEach(Z=>M(I(.12,.16,h,16777215,Z*(an/2-.1),_n-.08,d))),M(I(an,.14,.04,16777215,0,.07,-Kn/2+.08)),[-1,1].forEach(Z=>M(I(.04,.14,h,16777215,Z*(an/2-.08),.07,d)));let g=new Qe({color:12575733}),m=new Dt(new Xe(1,1,.03,32),de(16176348));m.scale.set(2,1,1.3),m.position.set(.3,.02,.6),m.receiveShadow=!0,l.add(m);let b=I(.03,.55,.03,9206379,.3,_n-.27,.3);b.castShadow=!1,l.add(b);let w=new Dt(new Fe(.6,.4,.6),new Me({color:16773544,emissive:16765562,emissiveIntensity:0,map:pi(mt.PLASTER)}));w.position.set(.3,_n-.72,.3),w.castShadow=!1,l.add(w);let v={wall:a,wall2:c,ceil:f,skyMat:g};e.build(l,v);{let Z=v.windowX!=null?v.windowX:2.2,Q=2.1,j=-Kn/2,It=!!v.bigWindow,ut=It?3:1.9,rt=It?2.2:1.5;l.add(I(ut,rt,.08,16777215,Z,Q,j+.06)),l.add(I(ut-.2,rt-.2,.09,0,Z,Q,j+.07,g)),It||(l.add(I(.05,1.3,.1,16777215,Z,Q,j+.1)),l.add(I(1.7,.05,.1,16777215,Z,Q,j+.1)));let Mt=I(ut+.6,.05,.05,12883572,Z,Q+rt/2+.15,j+.2);Mt.castShadow=!1,l.add(Mt),[-1,1].forEach(bt=>{let at=I(.24,rt+.25,.05,16762063,Z+bt*(ut/2+.13),Q+0,j+.2);at.castShadow=!1,l.add(at);let Zt=I(.28,.06,.07,16165309,Z+bt*(ut/2+.13),Q-.3,j+.22);Zt.castShadow=!1,l.add(Zt)})}let N=[];l.traverse(Z=>{Z.userData.hands&&(N=Z.userData.hands)});let L=v.seats||(v.seat?[v.seat]:[]),D=t.looks||(t.look?[t.look]:[]),z=L.slice(0,D.length).map((Z,Q)=>{let j=zo(D[Q]);return l.add(j.g),Z.stand?(j.g.position.set(Z.x,0,Z.z),j.g.rotation.y=Z.ry,j.standing=!0,j):(j.g.position.set(Z.x,Z.y-hc,Z.z),j.g.rotation.y=Z.ry,j.parts.legL.rotation.x=j.parts.legR.rotation.x=-1.45,j)});if(t.mate&&L[0]&&!v.couple){let Z=L[0],Q=zo(t.mate);l.add(Q.g);let j=Z.stand?Z.x+.8:Z.x+.85,It=Z.stand?Z.z:Z.z+.35;Q.g.position.set(j,0,It),Q.g.rotation.y=Z.ry+(Z.stand?0:-.9),v.mateW=Q}let A=(t.guests||[]).map((Z,Q)=>{let j=zo(Z);return l.add(j.g),j.g.position.set(Q?1:-1.25,0,-.25),j.g.rotation.y=Math.PI+(Q?.25:-.25),j}),S=v.sofa||v.gamer?null:z[0]||null,B="",q=[];v.couple&&z.forEach((Z,Q)=>{Z.g.userData.pick="couple";let j=t.names&&(Q===0?t.names.her:t.names.him)||(Q===0?"namu":"hunf"),It=R1(j,"#ffffff",.19);l.add(It),q.push(It)});let Y=(()=>{let Z=ps(16744350);return Z.scale.setScalar(.16),Z.visible=!1,l.add(Z),Z})(),H=-1,k="",X=!1,gt=!1,$=()=>k==="bed"?"bed":B==="lunch"||B==="dinner"?"meal":e.corners[t.corner]?t.corner:e.first,ht=null,Rt=document.createElement("div");Rt.style.cssText="position:absolute;inset:0;background:#fff6ee;opacity:0;pointer-events:none;transition:opacity .45s ease;z-index:2",getComputedStyle(n).position==="static"&&(n.style.position="relative"),n.appendChild(Rt);let lt=(Z,Q,j)=>new O(Z,Q,j),ne={up:{legs:[[lt(-2.4,1.8,2.8),lt(-3.95,2.6,-1),.9],[lt(-3.7,3.4,-.2),lt(-3.95,5.8,-3),.8],[lt(-3.8,6.4,-1.8),lt(-2,6,-2.6),.7,!0]],out:[lt(-2.6,6.5,.2),lt(.4,5.6,-2.2)]},down:{legs:[[lt(-2,6.5,.6),lt(-3.9,4,-1.8),.8],[lt(-3.8,5.4,-1.6),lt(-3.95,1.4,1.6),.8,!0]],out:[lt(-3,2.4,2.4),lt(.2,1.3,-2)]}},re={yaw:0,want:0,x0:0,w0:0,on:!1},dt=new O;{let Z=i.domElement;Z.addEventListener("pointerdown",j=>{re.on=!0,re.x0=j.clientX,re.w0=re.want}),Z.addEventListener("pointermove",j=>{re.on&&(re.want=Math.max(-.55,Math.min(.55,re.w0+(j.clientX-re.x0)*.004)))});let Q=()=>{re.on=!1};Z.addEventListener("pointerup",Q),Z.addEventListener("pointercancel",Q),Z.addEventListener("pointerleave",Q)}function Ct(Z,Q){re.want=0;let j=k&&Z!==k||!k&&Z==="bed"&&t.walkIn;if(k=Z,Q||!j){ht=null,Rt.style.opacity=0,Pt($(),Q);return}ht={def:ne[Z==="bed"?"up":"down"],leg:0,t:0,p0:St.clone(),t0:F.clone()}}function Yt(Z){let Q=ht.def.legs[ht.leg];ht.t+=Z/Q[2],Q[3]&&Rt.style.opacity!=="1"&&(Rt.style.opacity=1);let j=Math.min(1,ht.t),It=j*j*(3-2*j);if(St.lerpVectors(ht.p0,Q[0],It),F.lerpVectors(ht.t0,Q[1],It),qt.copy(St),wt.copy(F),!(j<1)){if(++ht.leg<ht.def.legs.length){ht.t=0,ht.p0=St.clone(),ht.t0=F.clone();return}St.copy(ht.def.out[0]),F.copy(ht.def.out[1]),ht=null,Pt($(),!1),setTimeout(()=>{Rt.style.opacity=0},120)}}let Ut=Wd("z Z z","#7a6a9a",.9,.45);if(l.add(Ut),t.onPick){let Z=new Rr,Q=new At,j=null,It=i.domElement,ut=(Mt,bt)=>{let at=It.getBoundingClientRect();Q.set((Mt-at.left)/at.width*2-1,-((bt-at.top)/at.height)*2+1),Z.setFromCamera(Q,r);let Zt=Z.intersectObjects(l.children,!0).find(ve=>{if(ve.object.isSprite)return!1;let W=ve.object;for(;W&&!W.userData.pick;)W=W.parent;return!!W});if(!Zt)return"";let le=Zt.object;for(;le&&!le.userData.pick;)le=le.parent;return le.userData.pick},rt=Mt=>{if(Mt==="couple"){H<0&&(H=0);return}if(Mt==="up"||Mt==="down"){X=!0,Ct(Mt==="up"?"bed":"main");return}if(Mt==="album"){gt=!0,Pt("album"),setTimeout(()=>t.onPick("album"),750);return}t.onPick(Mt)};It.addEventListener("contextmenu",Mt=>Mt.preventDefault()),It.addEventListener("pointerdown",Mt=>{j={x:Mt.clientX,y:Mt.clientY,type:Mt.pointerType}}),It.addEventListener("pointerup",Mt=>{if(!j||Math.hypot(Mt.clientX-j.x,Mt.clientY-j.y)>8){j=null;return}j=null;let bt=ut(Mt.clientX,Mt.clientY);bt&&rt(bt)})}let zt=v.gamer?z[0]:null,he=new Po(16777215,14861214,1.4);s.add(he);let Qt=new Lo(16774374,1.6);Qt.position.set(2.5,_n-.3,8),Qt.target.position.set(0,0,-2),s.add(Qt.target),Qt.castShadow=!0,Qt.shadow.mapSize.set(1024,1024),Object.assign(Qt.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:.5,far:25}),Qt.shadow.bias=-.001,s.add(Qt);let ue=new Io(16767392,0,12,1.3);ue.position.set(.3,_n-1.1,.3),s.add(ue);function _t(){let Z=new Date,Q=t.timeMode==="day"?11:t.timeMode==="night"?22:Z.getHours()+Z.getMinutes()/60,j=Yd(Q);g.color.copy(j.sky),he.intensity=1.5-j.night*.7,Qt.intensity=1.6*(1-j.night)+.2,ue.intensity=j.night*8,w.material.emissiveIntensity=j.night,N.length&&(N[0].rotation.z=-(Z.getHours()%12)/12*Math.PI*2,N[1].rotation.z=-Z.getMinutes()/60*Math.PI*2)}let St=new O,F=new O,qt=new O,wt=new O;function Xt(Z){return e.corners[Z]||e.corners[e.first]}function Pt(Z,Q){let j=Xt(Z);qt.set(j[0],j[1],j[2]),wt.set(j[3],j[4],j[5]),Q&&(St.copy(qt),F.copy(wt))}Pt(t.corner,!0),t.walkIn&&(St.set(0,1.7,Kn/2+3.2),F.set(0,1.4,-Kn/2));function oe(){let Z=n.clientWidth||innerWidth,Q=n.clientHeight||innerHeight;i.setSize(Z,Q,!1),r.aspect=Z/Q,r.fov=Z/Q<.9?64:50,Z/Q<.9?r.setViewOffset(Z,Q,0,-Q*.2,Z,Q):r.clearViewOffset(),r.updateProjectionMatrix()}oe();let Bt=()=>oe();window.addEventListener("resize",Bt);let P=new Do,T=new O,et=!0,pt=0;function Et(){if(!et||(requestAnimationFrame(Et),document.hidden))return;let Z=Math.min(.1,P.getDelta()),Q=P.elapsedTime;if(ht?Yt(Z):(St.lerp(qt,Math.min(1,Z*1.6)),F.lerp(wt,Math.min(1,Z*1.6))),re.yaw+=((ht||gt?0:re.want)-re.yaw)*Math.min(1,Z*8),dt.copy(F).sub(St).applyAxisAngle(Ve.DEFAULT_UP,re.yaw),r.position.copy(St),r.lookAt(dt.add(St)),A1(Q),v.couple){let j=new Date,It=j.getHours()+j.getMinutes()/60,ut=It>=22||It<6.5?"sleep":It>=11.5&&It<13?"lunch":It>=18.5&&It<19.75?"dinner":"sofa";if(ut!==B){B=ut,!X&&!gt&&Ct(ut==="sleep"?"bed":"main",!k&&!t.walkIn);let rt=ut==="lunch"||ut==="dinner"?v.dining:v.seats;z.forEach((Mt,bt)=>{if(ut==="sleep"){let at=v.bedSpots[bt];Mt.g.position.set(at.x,(v.bedY||0)+.9,at.z),Mt.g.rotation.set(-Math.PI/2,0,0),Mt.parts.legL.rotation.x=Mt.parts.legR.rotation.x=0}else Mt.g.position.set(rt[bt].x,rt[bt].y-hc,rt[bt].z),Mt.g.rotation.set(0,rt[bt].ry,0),Mt.parts.legL.rotation.x=Mt.parts.legR.rotation.x=-1.45;Mt.sleepMap||(Mt.sleepMap=kd(Mt.parts.look,!0)),Mt.awakeMap||(Mt.awakeMap=Mt.parts.mat.map),Mt.parts.mat.map=ut==="sleep"?Mt.sleepMap:Mt.awakeMap,Mt.parts.mat.needsUpdate=!0}),Ut.visible=ut==="sleep"}if(z.forEach((rt,Mt)=>{let bt=Mt===0?-1:1;B==="lunch"||B==="dinner"?(rt.parts.armL.rotation.x=-.9,rt.parts.armR.rotation.x=-1.35+Math.sin(Q*2.6+Mt*1.7)*.45,rt.parts.head.rotation.set(.12+Math.max(0,Math.sin(Q*2.6+Mt*1.7))*.12,0,0)):B==="sleep"?(rt.parts.armL.rotation.x=rt.parts.armR.rotation.x=0,rt.parts.head.rotation.set(.6,-bt*(.35+Math.sin(Q*.9)*.03),0)):(rt.parts.armL.rotation.x=rt.parts.armR.rotation.x=-.6,rt.parts.head.rotation.set(0,-bt*.25,-bt*(.18+Math.sin(Q*.8)*.04)))}),Ut.visible&&(Ut.position.set(14,1.6+Q*.25%.4,-3),Ut.material.opacity=.9-Q*.25%.4*1.5),z.forEach((rt,Mt)=>{rt.parts.head.getWorldPosition(q[Mt].position),q[Mt].position.y+=B==="sleep"?.62:.55}),H>=0){H+=Z;let rt=z[1],Mt=z[0],bt=Math.sin(Math.min(1,H/1.6)*Math.PI);rt.parts.head.rotation.y+=(B==="sleep"?-.5:-.9)*bt,rt.parts.head.rotation.z+=.25*bt,Mt.parts.head.rotation.z-=.2*bt,B!=="sleep"&&(rt.g.rotation.z=.16*bt);let at=new O;Mt.parts.head.getWorldPosition(at);let Zt=new O;rt.parts.head.getWorldPosition(Zt),Y.visible=H>.5,Y.position.copy(at).lerp(Zt,.5),Y.position.y+=.35+(H-.5)*.35,Y.scale.setScalar(.12+Math.min(1,(H-.5)*2)*.06),Y.rotation.y=r.rotation.y,H>2.1&&(H=-1,Y.visible=!1,rt.g.rotation.z=0)}v.bedLamp&&(v.bedLamp.material.emissiveIntensity=B==="sleep"?.15:.6*ue.intensity/8)}else v.sofa&&z.forEach((j,It)=>{j.parts.armL.rotation.x=j.parts.armR.rotation.x=-.6,j.parts.head.rotation.z=(It===0?-1:1)*(.18+Math.sin(Q*.8)*.04),j.parts.head.rotation.y=(It===0?1:-1)*.25});if(zt&&(zt.parts.armL.rotation.x=zt.parts.armR.rotation.x=-1.1+Math.sin(Q*14)*.05,zt.parts.head.rotation.x=-.05,zt.parts.head.rotation.y=Math.sin(Q*.5)*.08),v.mateW&&(v.mateW.parts.head.rotation.y=-.4+Math.sin(Q*.6)*.25,v.mateW.parts.armR.rotation.x=Math.sin(Q*1.1)*.15-.1),A.forEach((j,It)=>{j.parts.head.rotation.y=Math.sin(Q*.5+It*2)*.3,j.parts.armL.rotation.x=Math.sin(Q*.8+It)*.06}),S&&S.standing){let j=Q%9<1.4;S.parts.armL.rotation.x=-.35+Math.sin(Q*1.3)*.05,S.parts.armR.rotation.x=j?-2.6:-.35+Math.sin(Q*1.3+1)*.05,S.parts.armR.rotation.z=j?-.3+Math.sin(Q*14)*.25:0,S.parts.head.rotation.y=Math.sin(Q*.4)*.2,S.parts.head.rotation.x=0}else S&&(S.parts.armL.rotation.x=-1.2+Math.sin(Q*9)*.12,S.parts.armR.rotation.x=-1.2+Math.sin(Q*9+1.8)*.12,S.parts.head.rotation.x=.15+Math.sin(Q*.6)*.05,S.parts.head.rotation.y=Math.sin(Q*.35)*.25);(Q-pt>20||pt===0)&&(_t(),pt=Q||.001),i.render(s,r),T.set(.3,.05,.6).project(r),document.documentElement.style.setProperty("--rug-x",((T.x+1)/2*100).toFixed(1)+"vw"),document.documentElement.style.setProperty("--rug-y",((1-T.y)/2*100).toFixed(1)+"vh")}_t(),requestAnimationFrame(Et),/[?&]debug3d/.test(location.search)&&(window.__room={camera:r,R:v,renderer:i,sitters:z});function xt(Z){if(!v.dinner)return;(v.foodMeshes||[]).forEach(It=>{v.dinner.remove(It)}),v.foodMeshes=[],Z=(Z||[]).filter(It=>It&&It.name).slice(0,4),v.defaultDishes.forEach(It=>{It.visible=!Z.length});let Q=[[0],[-.33,.33],[-.48,0,.48],[-.54,-.18,.18,.54]][Math.max(0,Z.length-1)]||[],j=new Ro;j.setCrossOrigin("anonymous"),Z.forEach((It,ut)=>{let rt=new Kt;rt.position.set(Q[ut],.8,-.12+ut%2*.06),v.dinner.add(rt),v.foodMeshes.push(rt);let Mt=new Dt(new Xe(.2,.15,.05,24),de(16777215));rt.add(Mt);let bt=new Dt(new cs(.19,.015,8,24),de([16171471,13231096,16773544,13495501][ut]));bt.rotation.x=Math.PI/2,bt.position.y=.025,rt.add(bt);let at=It.key&&window.FoodArt&&window.FoodArt.spec&&window.FoodArt.spec(It.key);if(at){rt.remove(Mt),rt.remove(bt),rt.add(I(.46,.02,.46,[16171471,13231096,16773544,13495501][ut],0,-.01,0));let W=Gi(at.tpl,at.o,.4);W.position.y=0,W.rotation.y=(ut-1.5)*.25,rt.add(W);return}let Zt=new Me({color:16777215}),le=new Dt(new ka(.16,28),Zt);le.rotation.x=-Math.PI/2,le.position.y=.03,rt.add(le);let ve=()=>{let W=document.createElement("canvas");W.width=W.height=128;let Tt=W.getContext("2d");Tt.fillStyle=["#ffe1e9","#e1f0fb","#fff6cf","#e3f5e1"][ut],Tt.fillRect(0,0,128,128),Tt.font="64px sans-serif",Tt.textAlign="center",Tt.fillText("\u{1F372}",64,76),Tt.font="800 16px Nunito, sans-serif",Tt.fillStyle="#8a5a6a",Tt.fillText(It.name.slice(0,14),64,112),Zt.map=new mn(W),Zt.map.colorSpace=De,Zt.needsUpdate=!0};if(!It.img){ve();return}if(/^data:image\/svg/.test(It.img)){let W=new Image;W.onload=()=>{let Tt=document.createElement("canvas");Tt.width=Tt.height=256;let ct=Tt.getContext("2d");ct.fillStyle="#fffaf5",ct.fillRect(0,0,256,256),ct.drawImage(W,0,0,256,256),Zt.map=new mn(Tt),Zt.map.colorSpace=De,Zt.needsUpdate=!0},W.onerror=ve,W.src=It.img;return}j.load(It.img,W=>{W.colorSpace=De;let Tt=W.image.width/W.image.height;Tt>1?(W.repeat.set(1/Tt,1),W.offset.set((1-1/Tt)/2,0)):(W.repeat.set(1,Tt),W.offset.set(0,(1-Tt)/2)),Zt.map=W,Zt.needsUpdate=!0},void 0,ve)})}return{house:t.house,setCorner(Z){if(v.couple){t.corner=Z,gt||Pt($(),!1);return}Pt(Z,!1)},back(){gt=!1,Pt($(),!1)},setFood:xt,get floor(){return k},setPhotos(Z){if(!v.frames)return;let Q=new Ro;v.frames.forEach((j,It)=>{Z[It]&&Q.load(Z[It],ut=>{ut.colorSpace=De;let rt=ut.image,Mt=j.geometry.parameters.width,bt=j.geometry.parameters.height,at=rt.width/rt.height,Zt=Mt/bt;at>Zt?(ut.repeat.set(Zt/at,1),ut.offset.set((1-Zt/at)/2,0)):(ut.repeat.set(1,at/Zt),ut.offset.set(0,(1-at/Zt)/2)),j.material.map=ut,j.material.color.set(16777215),j.material.needsUpdate=!0})})},setTimeMode(Z){t.timeMode=Z,_t()},destroy(){et=!1,window.removeEventListener("resize",Bt),s.traverse(Z=>{Z.geometry&&Z.geometry.dispose()}),i.dispose(),i.domElement.remove(),Rt.remove()}}}window.Village3D={create:L1,room:B1,LOOKS:cc,LOVE:tu,ROOF:wi.roof,lookAs:Gd};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
