(()=>{var Kl="170",fs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ii={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qd=0,Oh=1,tf=2;var Qu=1,va=2,pi=3,Fi=0,un=1,hn=2,Ni=0,Ys=1,Fh=2,zh=3,Bh=4,ef=5,es=100,nf=101,sf=102,rf=103,of=104,af=200,cf=201,lf=202,hf=203,wc=204,Tc=205,uf=206,df=207,ff=208,pf=209,mf=210,gf=211,xf=212,_f=213,yf=214,Ac=0,Rc=1,Cc=2,$s=3,Pc=4,Ic=5,Dc=6,Lc=7,jl=0,vf=1,Mf=2,Oi=0,Ef=1,bf=2,Sf=3,wf=4,Tf=5,Af=6,Rf=7;var td=300,Ks=301,js=302,Uc=303,Nc=304,Ma=306,zr=1e3,is=1001,Oc=1002,dn=1003,Cf=1004;var go=1005;var Qn=1006,Xa=1007;var ss=1008;var xi=1009,ed=1010,nd=1011,Br=1012,Ql=1013,rs=1014,ti=1015,lo=1016,th=1017,eh=1018,Qs=1020,id=35902,sd=1021,rd=1022,Xn=1023,od=1024,ad=1025,qs=1026,tr=1027,nh=1028,ih=1029,cd=1030,sh=1031;var rh=1033,qo=33776,Zo=33777,Jo=33778,$o=33779,Fc=35840,zc=35841,Bc=35842,Hc=35843,kc=36196,Vc=37492,Gc=37496,Wc=37808,Xc=37809,Yc=37810,qc=37811,Zc=37812,Jc=37813,$c=37814,Kc=37815,jc=37816,Qc=37817,tl=37818,el=37819,nl=37820,il=37821,Ko=36492,sl=36494,rl=36495,ld=36283,ol=36284,al=36285,cl=36286;var jo=2300,ll=2301,Ya=2302,Hh=2400,kh=2401,Vh=2402;var Pf=3200,If=3201;var hd=0,Df=1,Li="",Fe="srgb",ir="srgb-linear",Ea="linear",Ae="srgb";var ws=7680;var Gh=519,Lf=512,Uf=513,Nf=514,ud=515,Of=516,Ff=517,zf=518,Bf=519,hl=35044;var Wh="300 es",mi=2e3,Qo=2001,_i=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xh=1234567,Dr=Math.PI/180,Hr=180/Math.PI;function ei(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[e&63|128]+cn[e>>8&255]+"-"+cn[e>>16&255]+cn[e>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function Ye(i,t,e){return Math.max(t,Math.min(e,i))}function oh(i,t){return(i%t+t)%t}function Hf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function kf(i,t,e){return i!==t?(e-i)/(t-i):0}function Lr(i,t,e){return(1-e)*i+e*t}function Vf(i,t,e,n){return Lr(i,t,1-Math.exp(-e*n))}function Gf(i,t=1){return t-Math.abs(oh(i,t*2)-t)}function Wf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Xf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Yf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function qf(i,t){return i+Math.random()*(t-i)}function Zf(i){return i*(.5-Math.random())}function Jf(i){i!==void 0&&(Xh=i);let t=Xh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function $f(i){return i*Dr}function Kf(i){return i*Hr}function jf(i){return(i&i-1)===0&&i!==0}function Qf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function tp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ep(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),x=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*x,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*x,a*l);break;case"ZYZ":i.set(c*x,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var dd={DEG2RAD:Dr,RAD2DEG:Hr,generateUUID:ei,clamp:Ye,euclideanModulo:oh,mapLinear:Hf,inverseLerp:kf,lerp:Lr,damp:Vf,pingpong:Gf,smoothstep:Wf,smootherstep:Xf,randInt:Yf,randFloat:qf,randFloatSpread:Zf,seededRandom:Jf,degToRad:$f,radToDeg:Kf,isPowerOfTwo:jf,ceilPowerOfTwo:Qf,floorPowerOfTwo:tp,setQuaternionFromProperEuler:ep,normalize:Ee,denormalize:Wn},pt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ce=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],x=n[8],_=s[0],m=s[3],f=s[6],v=s[1],y=s[4],M=s[7],B=s[2],P=s[5],I=s[8];return r[0]=o*_+a*v+c*B,r[3]=o*m+a*y+c*P,r[6]=o*f+a*M+c*I,r[1]=l*_+h*v+u*B,r[4]=l*m+h*y+u*P,r[7]=l*f+h*M+u*I,r[2]=d*_+p*v+x*B,r[5]=d*m+p*y+x*P,r[8]=d*f+p*M+x*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,x=e*u+n*d+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/x;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(qa.makeScale(t,e)),this}rotate(t){return this.premultiply(qa.makeRotation(-t)),this}translate(t,e){return this.premultiply(qa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},qa=new ce;function fd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function np(){let i=kr("canvas");return i.style.display="block",i}var Yh={};function Pr(i){i in Yh||(Yh[i]=!0,console.warn(i))}function ip(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function sp(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function rp(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var _e={enabled:!0,workingColorSpace:ir,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ae&&(i.r=gi(i.r),i.g=gi(i.g),i.b=gi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ae&&(i.r=Zs(i.r),i.g=Zs(i.g),i.b=Zs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Li?Ea:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var qh=[.64,.33,.3,.6,.15,.06],Zh=[.2126,.7152,.0722],Jh=[.3127,.329],$h=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kh=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);_e.define({[ir]:{primaries:qh,whitePoint:Jh,transfer:Ea,toXYZ:$h,fromXYZ:Kh,luminanceCoefficients:Zh,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:qh,whitePoint:Jh,transfer:Ae,toXYZ:$h,fromXYZ:Kh,luminanceCoefficients:Zh,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}});var Ts,ul=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ts===void 0&&(Ts=kr("canvas")),Ts.width=t.width,Ts.height=t.height;let n=Ts.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ts}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=kr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gi(e[n]/255)*255):e[n]=gi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},op=0,ta=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=ei(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Za(s[o].image)):r.push(Za(s[o]))}else r=Za(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Za(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?ul.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ap=0,Mn=class i extends _i{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=is,s=is,r=Qn,o=ss,a=Xn,c=xi,l=i.DEFAULT_ANISOTROPY,h=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=ei(),this.name="",this.source=new ta(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==td)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zr:t.x=t.x-Math.floor(t.x);break;case is:t.x=t.x<0?0:1;break;case Oc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zr:t.y=t.y-Math.floor(t.y);break;case is:t.y=t.y<0?0:1;break;case Oc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=td;Mn.DEFAULT_ANISOTROPY=1;var Re=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],x=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(x+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,M=(p+1)/2,B=(f+1)/2,P=(h+d)/4,I=(u+_)/4,U=(x+m)/4;return y>M&&y>B?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=P/n,r=I/n):M>B?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=P/s,r=U/s):B<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(B),n=I/r,s=U/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-x)*(m-x)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-x)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},dl=class extends _i{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Mn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ta(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},yi=class extends dl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ea=class extends Mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var fl=class extends Mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],p=r[o+1],x=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=x,t[e+3]=_;return}if(u!==_||c!==d||l!==p||h!==x){let m=1-a,f=c*d+l*p+h*x+u*_,v=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){let B=Math.sqrt(y),P=Math.atan2(B,f*v);m=Math.sin(m*P)/B,a=Math.sin(a*P)/B}let M=a*v;if(c=c*m+d*M,l=l*m+p*M,h=h*m+x*M,u=u*m+_*M,m===1-a){let B=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=B,l*=B,h*=B,u*=B}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],x=r[o+3];return t[e]=a*x+h*u+c*p-l*d,t[e+1]=c*x+h*d+l*u-a*p,t[e+2]=l*x+h*p+a*d-c*u,t[e+3]=h*x-a*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),p=c(s/2),x=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*x,this._y=l*p*u-d*h*x,this._z=l*h*x+d*p*u,this._w=l*h*u-d*p*x;break;case"YXZ":this._x=d*h*u+l*p*x,this._y=l*p*u-d*h*x,this._z=l*h*x-d*p*u,this._w=l*h*u+d*p*x;break;case"ZXY":this._x=d*h*u-l*p*x,this._y=l*p*u+d*h*x,this._z=l*h*x+d*p*u,this._w=l*h*u-d*p*x;break;case"ZYX":this._x=d*h*u-l*p*x,this._y=l*p*u+d*h*x,this._z=l*h*x-d*p*u,this._w=l*h*u+d*p*x;break;case"YZX":this._x=d*h*u+l*p*x,this._y=l*p*u+d*h*x,this._z=l*h*x-d*p*u,this._w=l*h*u-d*p*x;break;case"XZY":this._x=d*h*u-l*p*x,this._y=l*p*u-d*h*x,this._z=l*h*x+d*p*u,this._w=l*h*u+d*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ja.copy(this).projectOnVector(t),this.sub(Ja)}reflect(t){return this.sub(Ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ja=new D,jh=new Yn,vi=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Hn):Hn.fromBufferAttribute(r,o),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xo.copy(n.boundingBox)),xo.applyMatrix4(t.matrixWorld),this.union(xo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vr),_o.subVectors(this.max,vr),As.subVectors(t.a,vr),Rs.subVectors(t.b,vr),Cs.subVectors(t.c,vr),Ai.subVectors(Rs,As),Ri.subVectors(Cs,Rs),Zi.subVectors(As,Cs);let e=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-Zi.z,Zi.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,Zi.z,0,-Zi.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-Zi.y,Zi.x,0];return!$a(e,As,Rs,Cs,_o)||(e=[1,0,0,0,1,0,0,0,1],!$a(e,As,Rs,Cs,_o))?!1:(yo.crossVectors(Ai,Ri),e=[yo.x,yo.y,yo.z],$a(e,As,Rs,Cs,_o))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},li=[new D,new D,new D,new D,new D,new D,new D,new D],Hn=new D,xo=new vi,As=new D,Rs=new D,Cs=new D,Ai=new D,Ri=new D,Zi=new D,vr=new D,_o=new D,yo=new D,Ji=new D;function $a(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ji.fromArray(i,r);let a=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),c=t.dot(Ji),l=e.dot(Ji),h=n.dot(Ji);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var cp=new vi,Mr=new D,Ka=new D,zi=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):cp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mr.subVectors(t,this.center);let e=Mr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Mr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ka.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mr.copy(t.center).add(Ka)),this.expandByPoint(Mr.copy(t.center).sub(Ka))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},hi=new D,ja=new D,vo=new D,Ci=new D,Qa=new D,Mo=new D,tc=new D,os=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hi.copy(this.origin).addScaledVector(this.direction,e),hi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ja.copy(t).add(e).multiplyScalar(.5),vo.copy(e).sub(t).normalize(),Ci.copy(this.origin).sub(ja);let r=t.distanceTo(e)*.5,o=-this.direction.dot(vo),a=Ci.dot(this.direction),c=-Ci.dot(vo),l=Ci.lengthSq(),h=Math.abs(1-o*o),u,d,p,x;if(h>0)if(u=o*c-a,d=o*a-c,x=r*h,u>=0)if(d>=-x)if(d<=x){let _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-x?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=x?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ja).addScaledVector(vo,d),p}intersectSphere(t,e){hi.subVectors(t.center,this.origin);let n=hi.dot(this.direction),s=hi.dot(hi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,hi)!==null}intersectTriangle(t,e,n,s,r){Qa.subVectors(e,t),Mo.subVectors(n,t),tc.crossVectors(Qa,Mo);let o=this.direction.dot(tc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,t);let c=a*this.direction.dot(Mo.crossVectors(Ci,Mo));if(c<0)return null;let l=a*this.direction.dot(Qa.cross(Ci));if(l<0||c+l>o)return null;let h=-a*Ci.dot(tc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},be=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,d,p,x,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,p,x,_,m)}set(t,e,n,s,r,o,a,c,l,h,u,d,p,x,_,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=x,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ps.setFromMatrixColumn(t,0).length(),r=1/Ps.setFromMatrixColumn(t,1).length(),o=1/Ps.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*u,x=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+x*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=x+p*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,p=c*u,x=l*h,_=l*u;e[0]=d+_*a,e[4]=x*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-x,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,p=c*u,x=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=x+p*a,e[1]=p+x*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,p=o*u,x=a*h,_=a*u;e[0]=c*h,e[4]=x*l-p,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=p*l-x,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,p=o*l,x=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=x*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+x,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*c,p=o*l,x=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=p*u-x,e[2]=x*u-p,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lp,t,hp)}lookAt(t,e,n){let s=this.elements;return Rn.subVectors(t,e),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Pi.crossVectors(n,Rn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Pi.crossVectors(n,Rn)),Pi.normalize(),Eo.crossVectors(Rn,Pi),s[0]=Pi.x,s[4]=Eo.x,s[8]=Rn.x,s[1]=Pi.y,s[5]=Eo.y,s[9]=Rn.y,s[2]=Pi.z,s[6]=Eo.z,s[10]=Rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],x=n[2],_=n[6],m=n[10],f=n[14],v=n[3],y=n[7],M=n[11],B=n[15],P=s[0],I=s[4],U=s[8],T=s[12],w=s[1],N=s[5],F=s[9],z=s[13],q=s[2],V=s[6],J=s[10],ut=s[14],K=s[3],_t=s[7],lt=s[11],It=s[15];return r[0]=o*P+a*w+c*q+l*K,r[4]=o*I+a*N+c*V+l*_t,r[8]=o*U+a*F+c*J+l*lt,r[12]=o*T+a*z+c*ut+l*It,r[1]=h*P+u*w+d*q+p*K,r[5]=h*I+u*N+d*V+p*_t,r[9]=h*U+u*F+d*J+p*lt,r[13]=h*T+u*z+d*ut+p*It,r[2]=x*P+_*w+m*q+f*K,r[6]=x*I+_*N+m*V+f*_t,r[10]=x*U+_*F+m*J+f*lt,r[14]=x*T+_*z+m*ut+f*It,r[3]=v*P+y*w+M*q+B*K,r[7]=v*I+y*N+M*V+B*_t,r[11]=v*U+y*F+M*J+B*lt,r[15]=v*T+y*z+M*ut+B*It,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],x=t[3],_=t[7],m=t[11],f=t[15];return x*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*p-n*c*p)+_*(+e*c*p-e*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+m*(+e*l*u-e*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+f*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],x=t[12],_=t[13],m=t[14],f=t[15],v=u*m*l-_*d*l+_*c*p-a*m*p-u*c*f+a*d*f,y=x*d*l-h*m*l-x*c*p+o*m*p+h*c*f-o*d*f,M=h*_*l-x*u*l+x*a*p-o*_*p-h*a*f+o*u*f,B=x*u*c-h*_*c-x*a*d+o*_*d+h*a*m-o*u*m,P=e*v+n*y+s*M+r*B;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/P;return t[0]=v*I,t[1]=(_*d*r-u*m*r-_*s*p+n*m*p+u*s*f-n*d*f)*I,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*f+n*c*f)*I,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*p-n*c*p)*I,t[4]=y*I,t[5]=(h*m*r-x*d*r+x*s*p-e*m*p-h*s*f+e*d*f)*I,t[6]=(x*c*r-o*m*r-x*s*l+e*m*l+o*s*f-e*c*f)*I,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*p+e*c*p)*I,t[8]=M*I,t[9]=(x*u*r-h*_*r-x*n*p+e*_*p+h*n*f-e*u*f)*I,t[10]=(o*_*r-x*a*r+x*n*l-e*_*l-o*n*f+e*a*f)*I,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*p-e*a*p)*I,t[12]=B*I,t[13]=(h*_*s-x*u*s+x*n*d-e*_*d-h*n*m+e*u*m)*I,t[14]=(x*a*s-o*_*s-x*n*c+e*_*c+o*n*m-e*a*m)*I,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*I,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,x=r*u,_=o*h,m=o*u,f=a*u,v=c*l,y=c*h,M=c*u,B=n.x,P=n.y,I=n.z;return s[0]=(1-(_+f))*B,s[1]=(p+M)*B,s[2]=(x-y)*B,s[3]=0,s[4]=(p-M)*P,s[5]=(1-(d+f))*P,s[6]=(m+v)*P,s[7]=0,s[8]=(x+y)*I,s[9]=(m-v)*I,s[10]=(1-(d+_))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ps.set(s[0],s[1],s[2]).length(),o=Ps.set(s[4],s[5],s[6]).length(),a=Ps.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],kn.copy(this);let l=1/r,h=1/o,u=1/a;return kn.elements[0]*=l,kn.elements[1]*=l,kn.elements[2]*=l,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=u,kn.elements[9]*=u,kn.elements[10]*=u,e.setFromRotationMatrix(kn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=mi){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,x;if(a===mi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Qo)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=mi){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,p=(n+s)*h,x,_;if(a===mi)x=(o+r)*u,_=-2*u;else if(a===Qo)x=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ps=new D,kn=new be,lp=new D(0,0,0),hp=new D(1,1,1),Pi=new D,Eo=new D,Rn=new D,Qh=new be,tu=new Yn,ni=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tu.setFromEuler(this),this.setFromQuaternion(tu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ni.DEFAULT_ORDER="XYZ";var Vr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},up=0,eu=new D,Is=new Yn,ui=new be,bo=new D,Er=new D,dp=new D,fp=new Yn,nu=new D(1,0,0),iu=new D(0,1,0),su=new D(0,0,1),ru={type:"added"},pp={type:"removed"},Ds={type:"childadded",child:null},ec={type:"childremoved",child:null},Ve=class i extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new ni,n=new Yn,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new be},normalMatrix:{value:new ce}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Is.setFromAxisAngle(t,e),this.quaternion.multiply(Is),this}rotateOnWorldAxis(t,e){return Is.setFromAxisAngle(t,e),this.quaternion.premultiply(Is),this}rotateX(t){return this.rotateOnAxis(nu,t)}rotateY(t){return this.rotateOnAxis(iu,t)}rotateZ(t){return this.rotateOnAxis(su,t)}translateOnAxis(t,e){return eu.copy(t).applyQuaternion(this.quaternion),this.position.add(eu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nu,t)}translateY(t){return this.translateOnAxis(iu,t)}translateZ(t){return this.translateOnAxis(su,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?bo.copy(t):bo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Er,bo,this.up):ui.lookAt(bo,Er,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),Is.setFromRotationMatrix(ui),this.quaternion.premultiply(Is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ru),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pp),ec.child=t,this.dispatchEvent(ec),ec.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ru),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,t,dp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,fp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ve.DEFAULT_UP=new D(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vn=new D,di=new D,nc=new D,fi=new D,Ls=new D,Us=new D,ou=new D,ic=new D,sc=new D,rc=new D,oc=new Re,ac=new Re,cc=new Re,Ui=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Vn.subVectors(t,e),s.cross(Vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Vn.subVectors(s,e),di.subVectors(n,e),nc.subVectors(t,e);let o=Vn.dot(Vn),a=Vn.dot(di),c=Vn.dot(nc),l=di.dot(di),h=di.dot(nc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-a*h)*d,x=(o*h-a*c)*d;return r.set(1-p-x,x,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,fi.x),c.addScaledVector(o,fi.y),c.addScaledVector(a,fi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return oc.setScalar(0),ac.setScalar(0),cc.setScalar(0),oc.fromBufferAttribute(t,e),ac.fromBufferAttribute(t,n),cc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(oc,r.x),o.addScaledVector(ac,r.y),o.addScaledVector(cc,r.z),o}static isFrontFacing(t,e,n,s){return Vn.subVectors(n,e),di.subVectors(t,e),Vn.cross(di).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Vn.cross(di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ls.subVectors(s,n),Us.subVectors(r,n),ic.subVectors(t,n);let c=Ls.dot(ic),l=Us.dot(ic);if(c<=0&&l<=0)return e.copy(n);sc.subVectors(t,s);let h=Ls.dot(sc),u=Us.dot(sc);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ls,o);rc.subVectors(t,r);let p=Ls.dot(rc),x=Us.dot(rc);if(x>=0&&p<=x)return e.copy(r);let _=p*l-c*x;if(_<=0&&l>=0&&x<=0)return a=l/(l-x),e.copy(n).addScaledVector(Us,a);let m=h*x-p*u;if(m<=0&&u-h>=0&&p-x>=0)return ou.subVectors(r,s),a=(u-h)/(u-h+(p-x)),e.copy(s).addScaledVector(ou,a);let f=1/(m+_+d);return o=_*f,a=d*f,e.copy(n).addScaledVector(Ls,o).addScaledVector(Us,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},So={h:0,s:0,l:0};function lc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ee=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=_e.workingColorSpace){return this.r=t,this.g=e,this.b=n,_e.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=_e.workingColorSpace){if(t=oh(t,1),e=Ye(e,0,1),n=Ye(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=lc(o,r,t+1/3),this.g=lc(o,r,t),this.b=lc(o,r,t-1/3)}return _e.toWorkingColorSpace(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){let n=pd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=Zs(t.r),this.g=Zs(t.g),this.b=Zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return _e.fromWorkingColorSpace(ln.copy(this),t),Math.round(Ye(ln.r*255,0,255))*65536+Math.round(Ye(ln.g*255,0,255))*256+Math.round(Ye(ln.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.fromWorkingColorSpace(ln.copy(this),e);let n=ln.r,s=ln.g,r=ln.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=_e.workingColorSpace){return _e.fromWorkingColorSpace(ln.copy(this),e),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=Fe){_e.fromWorkingColorSpace(ln.copy(this),t);let e=ln.r,n=ln.g,s=ln.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ii),this.setHSL(Ii.h+t,Ii.s+e,Ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ii),t.getHSL(So);let n=Lr(Ii.h,So.h,e),s=Lr(Ii.s,So.s,e),r=Lr(Ii.l,So.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new ee;ee.NAMES=pd;var mp=0,Mi=class extends _i{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=ei(),this.name="",this.blending=Ys,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wc,this.blendDst=Tc,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(n.blending=this.blending),this.side!==Fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wc&&(n.blendSrc=this.blendSrc),this.blendDst!==Tc&&(n.blendDst=this.blendDst),this.blendEquation!==es&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},He=class extends Mi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ke=new D,wo=new pt,Qe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hl,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wo.fromBufferAttribute(this,e),wo.applyMatrix3(t),this.setXY(e,wo.x,wo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Wn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Wn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Wn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Wn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hl&&(t.usage=this.usage),t}};var na=class extends Qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ia=class extends Qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ae=class extends Qe{constructor(t,e,n){super(new Float32Array(t),e,n)}},gp=0,Dn=new be,hc=new Ve,Ns=new D,Cn=new vi,br=new vi,Ke=new D,Ie=class i extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fd(t)?ia:na)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ce().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,n){return Dn.makeTranslation(t,e,n),this.applyMatrix4(Dn),this}scale(t,e,n){return Dn.makeScale(t,e,n),this.applyMatrix4(Dn),this}lookAt(t){return hc.lookAt(t),hc.updateMatrix(),this.applyMatrix4(hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ae(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];br.setFromBufferAttribute(a),this.morphTargetsRelative?(Ke.addVectors(Cn.min,br.min),Cn.expandByPoint(Ke),Ke.addVectors(Cn.max,br.max),Cn.expandByPoint(Ke)):(Cn.expandByPoint(br.min),Cn.expandByPoint(br.max))}Cn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ke));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ke.fromBufferAttribute(a,l),c&&(Ns.fromBufferAttribute(t,l),Ke.add(Ns)),s=Math.max(s,n.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let U=0;U<n.count;U++)a[U]=new D,c[U]=new D;let l=new D,h=new D,u=new D,d=new pt,p=new pt,x=new pt,_=new D,m=new D;function f(U,T,w){l.fromBufferAttribute(n,U),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,w),d.fromBufferAttribute(r,U),p.fromBufferAttribute(r,T),x.fromBufferAttribute(r,w),h.sub(l),u.sub(l),p.sub(d),x.sub(d);let N=1/(p.x*x.y-x.x*p.y);isFinite(N)&&(_.copy(h).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(N),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(N),a[U].add(_),a[T].add(_),a[w].add(_),c[U].add(m),c[T].add(m),c[w].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let U=0,T=v.length;U<T;++U){let w=v[U],N=w.start,F=w.count;for(let z=N,q=N+F;z<q;z+=3)f(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let y=new D,M=new D,B=new D,P=new D;function I(U){B.fromBufferAttribute(s,U),P.copy(B);let T=a[U];y.copy(T),y.sub(B.multiplyScalar(B.dot(T))).normalize(),M.crossVectors(P,T);let N=M.dot(c[U])<0?-1:1;o.setXYZW(U,y.x,y.y,y.z,N)}for(let U=0,T=v.length;U<T;++U){let w=v[U],N=w.start,F=w.count;for(let z=N,q=N+F;z<q;z+=3)I(t.getX(z+0)),I(t.getX(z+1)),I(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(t)for(let d=0,p=t.count;d<p;d+=3){let x=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),p=0,x=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let f=0;f<h;f++)d[x++]=l[p++]}return new Qe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},au=new be,$i=new os,To=new zi,cu=new D,Ao=new D,Ro=new D,Co=new D,uc=new D,Po=new D,lu=new D,Io=new D,ct=class extends Ve{constructor(t=new Ie,e=new He){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Po.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(uc.fromBufferAttribute(u,t),o?Po.addScaledVector(uc,h):Po.addScaledVector(uc.sub(e),h))}e.add(Po)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(r),$i.copy(t.ray).recast(t.near),!(To.containsPoint($i.origin)===!1&&($i.intersectSphere(To,cu)===null||$i.origin.distanceToSquared(cu)>(t.far-t.near)**2))&&(au.copy(r).invert(),$i.copy(t.ray).applyMatrix4(au),!(n.boundingBox!==null&&$i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,$i)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=d.length;x<_;x++){let m=d[x],f=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,B=y;M<B;M+=3){let P=a.getX(M),I=a.getX(M+1),U=a.getX(M+2);s=Do(this,f,t,n,l,h,u,P,I,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=x,f=_;m<f;m+=3){let v=a.getX(m),y=a.getX(m+1),M=a.getX(m+2);s=Do(this,o,t,n,l,h,u,v,y,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,_=d.length;x<_;x++){let m=d[x],f=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,B=y;M<B;M+=3){let P=M,I=M+1,U=M+2;s=Do(this,f,t,n,l,h,u,P,I,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=x,f=_;m<f;m+=3){let v=m,y=m+1,M=m+2;s=Do(this,o,t,n,l,h,u,v,y,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function xp(i,t,e,n,s,r,o,a){let c;if(t.side===un?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Fi,a),c===null)return null;Io.copy(a),Io.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Io);return l<e.near||l>e.far?null:{distance:l,point:Io.clone(),object:i}}function Do(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Ao),i.getVertexPosition(c,Ro),i.getVertexPosition(l,Co);let h=xp(i,t,e,n,Ao,Ro,Co,lu);if(h){let u=new D;Ui.getBarycoord(lu,Ao,Ro,Co,u),s&&(h.uv=Ui.getInterpolatedAttribute(s,a,c,l,u,new pt)),r&&(h.uv1=Ui.getInterpolatedAttribute(r,a,c,l,u,new pt)),o&&(h.normal=Ui.getInterpolatedAttribute(o,a,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new D,materialIndex:0};Ui.getNormal(Ao,Ro,Co,d.normal),h.face=d,h.barycoord=u}return h}var Ge=class i extends Ie{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,p=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,s,o,2),x("x","z","y",1,-1,t,n,-e,s,o,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(u,2));function x(_,m,f,v,y,M,B,P,I,U,T){let w=M/I,N=B/U,F=M/2,z=B/2,q=P/2,V=I+1,J=U+1,ut=0,K=0,_t=new D;for(let lt=0;lt<J;lt++){let It=lt*N-z;for(let ie=0;ie<V;ie++){let Xt=ie*w-F;_t[_]=Xt*v,_t[m]=It*y,_t[f]=q,l.push(_t.x,_t.y,_t.z),_t[_]=0,_t[m]=0,_t[f]=P>0?1:-1,h.push(_t.x,_t.y,_t.z),u.push(ie/I),u.push(1-lt/U),ut+=1}}for(let lt=0;lt<U;lt++)for(let It=0;It<I;It++){let ie=d+It+V*lt,Xt=d+It+V*(lt+1),at=d+(It+1)+V*(lt+1),yt=d+(It+1)+V*lt;c.push(ie,Xt,yt),c.push(Xt,at,yt),K+=6}a.addGroup(p,K,T),p+=K,d+=ut}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function er(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function vn(i){let t={};for(let e=0;e<i.length;e++){let n=er(i[e]);for(let s in n)t[s]=n[s]}return t}function _p(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function md(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}var yp={clone:er,merge:vn},vp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ln=class extends Mi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vp,this.fragmentShader=Mp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=er(t.uniforms),this.uniformsGroups=_p(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},sa=class extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=mi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Di=new D,hu=new pt,uu=new pt,je=class extends sa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Hr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hr*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Di.x,Di.y).multiplyScalar(-t/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-t/Di.z)}getViewSize(t,e){return this.getViewBounds(t,hu,uu),e.subVectors(uu,hu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Dr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Os=-90,Fs=1,pl=class extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new je(Os,Fs,t,e);s.layers=this.layers,this.add(s);let r=new je(Os,Fs,t,e);r.layers=this.layers,this.add(r);let o=new je(Os,Fs,t,e);o.layers=this.layers,this.add(o);let a=new je(Os,Fs,t,e);a.layers=this.layers,this.add(a);let c=new je(Os,Fs,t,e);c.layers=this.layers,this.add(c);let l=new je(Os,Fs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===mi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Qo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},ra=class extends Mn{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ks,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ml=class extends yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ra(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Qn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ge(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:Ni});r.uniforms.tEquirect.value=e;let o=new ct(s,r),a=e.minFilter;return e.minFilter===ss&&(e.minFilter=Qn),new pl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},dc=new D,Ep=new D,bp=new ce,Gn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=dc.subVectors(n,e).cross(Ep.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(dc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||bp.getNormalMatrix(t),s=this.coplanarPoint(dc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ki=new zi,Lo=new D,Gr=class{constructor(t=new Gn,e=new Gn,n=new Gn,s=new Gn,r=new Gn,o=new Gn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mi){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],x=s[9],_=s[10],m=s[11],f=s[12],v=s[13],y=s[14],M=s[15];if(n[0].setComponents(c-r,d-l,m-p,M-f).normalize(),n[1].setComponents(c+r,d+l,m+p,M+f).normalize(),n[2].setComponents(c+o,d+h,m+x,M+v).normalize(),n[3].setComponents(c-o,d-h,m-x,M-v).normalize(),n[4].setComponents(c-a,d-u,m-_,M-y).normalize(),e===mi)n[5].setComponents(c+a,d+u,m+_,M+y).normalize();else if(e===Qo)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(t){return Ki.center.set(0,0,0),Ki.radius=.7071067811865476,Ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Lo.x=s.normal.x>0?t.max.x:t.min.x,Lo.y=s.normal.y>0?t.max.y:t.min.y,Lo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function gd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Sp(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<u.length;p++){let x=u[d],_=u[p];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,x=u.length;p<x;p++){let _=u[p];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Bi=class i extends Ie{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,p=[],x=[],_=[],m=[];for(let f=0;f<h;f++){let v=f*d-o;for(let y=0;y<l;y++){let M=y*u-r;x.push(M,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let v=0;v<a;v++){let y=v+l*f,M=v+l*(f+1),B=v+1+l*(f+1),P=v+1+l*f;p.push(y,M,P),p.push(M,B,P)}this.setIndex(p),this.setAttribute("position",new ae(x,3)),this.setAttribute("normal",new ae(_,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},wp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tp=`#ifdef USE_ALPHAHASH
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
#endif`,Ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ip=`#ifdef USE_AOMAP
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
#endif`,Dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lp=`#ifdef USE_BATCHING
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
#endif`,Up=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Np=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zp=`#ifdef USE_IRIDESCENCE
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
#endif`,Bp=`#ifdef USE_BUMPMAP
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
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zp=`#define PI 3.141592653589793
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
} // validated`,Jp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$p=`vec3 transformedNormal = objectNormal;
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
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,t0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,e0="gl_FragColor = linearToOutputTexel( gl_FragColor );",n0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i0=`#ifdef USE_ENVMAP
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
#endif`,s0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,r0=`#ifdef USE_ENVMAP
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
#endif`,o0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a0=`#ifdef USE_ENVMAP
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
#endif`,c0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,l0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d0=`#ifdef USE_GRADIENTMAP
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
}`,f0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g0=`uniform bool receiveShadow;
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
#endif`,x0=`#ifdef USE_ENVMAP
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
#endif`,_0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,v0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,M0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E0=`PhysicalMaterial material;
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
#endif`,b0=`struct PhysicalMaterial {
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
}`,S0=`
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
#endif`,w0=`#if defined( RE_IndirectDiffuse )
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
#endif`,T0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,A0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,I0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,L0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,U0=`#if defined( USE_POINTS_UV )
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
#endif`,N0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,F0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,z0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,B0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H0=`#ifdef USE_MORPHTARGETS
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
#endif`,k0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,G0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,W0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,q0=`#ifdef USE_NORMALMAP
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
#endif`,Z0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,K0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lm=`float getShadowMask() {
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
}`,hm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,um=`#ifdef USE_SKINNING
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
#endif`,dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fm=`#ifdef USE_SKINNING
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
#endif`,pm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_m=`#ifdef USE_TRANSMISSION
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
#endif`,ym=`#ifdef USE_TRANSMISSION
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
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wm=`uniform sampler2D t2D;
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
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Am=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`#include <common>
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
}`,Im=`#if DEPTH_PACKING == 3200
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
}`,Dm=`#define DISTANCE
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
}`,Lm=`#define DISTANCE
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
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`uniform float scale;
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
}`,Fm=`uniform vec3 diffuse;
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
}`,zm=`#include <common>
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
}`,Bm=`uniform vec3 diffuse;
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
}`,Hm=`#define LAMBERT
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
}`,km=`#define LAMBERT
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
}`,Vm=`#define MATCAP
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
}`,Gm=`#define MATCAP
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
}`,Wm=`#define NORMAL
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
}`,Xm=`#define NORMAL
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
}`,Ym=`#define PHONG
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
}`,qm=`#define PHONG
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
}`,Zm=`#define STANDARD
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
}`,Jm=`#define STANDARD
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
}`,$m=`#define TOON
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
}`,Km=`#define TOON
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
}`,jm=`uniform float size;
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
}`,Qm=`uniform vec3 diffuse;
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
}`,tg=`#include <common>
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
}`,eg=`uniform vec3 color;
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
}`,ng=`uniform float rotation;
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
}`,ig=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:wp,alphahash_pars_fragment:Tp,alphamap_fragment:Ap,alphamap_pars_fragment:Rp,alphatest_fragment:Cp,alphatest_pars_fragment:Pp,aomap_fragment:Ip,aomap_pars_fragment:Dp,batching_pars_vertex:Lp,batching_vertex:Up,begin_vertex:Np,beginnormal_vertex:Op,bsdfs:Fp,iridescence_fragment:zp,bumpmap_pars_fragment:Bp,clipping_planes_fragment:Hp,clipping_planes_pars_fragment:kp,clipping_planes_pars_vertex:Vp,clipping_planes_vertex:Gp,color_fragment:Wp,color_pars_fragment:Xp,color_pars_vertex:Yp,color_vertex:qp,common:Zp,cube_uv_reflection_fragment:Jp,defaultnormal_vertex:$p,displacementmap_pars_vertex:Kp,displacementmap_vertex:jp,emissivemap_fragment:Qp,emissivemap_pars_fragment:t0,colorspace_fragment:e0,colorspace_pars_fragment:n0,envmap_fragment:i0,envmap_common_pars_fragment:s0,envmap_pars_fragment:r0,envmap_pars_vertex:o0,envmap_physical_pars_fragment:x0,envmap_vertex:a0,fog_vertex:c0,fog_pars_vertex:l0,fog_fragment:h0,fog_pars_fragment:u0,gradientmap_pars_fragment:d0,lightmap_pars_fragment:f0,lights_lambert_fragment:p0,lights_lambert_pars_fragment:m0,lights_pars_begin:g0,lights_toon_fragment:_0,lights_toon_pars_fragment:y0,lights_phong_fragment:v0,lights_phong_pars_fragment:M0,lights_physical_fragment:E0,lights_physical_pars_fragment:b0,lights_fragment_begin:S0,lights_fragment_maps:w0,lights_fragment_end:T0,logdepthbuf_fragment:A0,logdepthbuf_pars_fragment:R0,logdepthbuf_pars_vertex:C0,logdepthbuf_vertex:P0,map_fragment:I0,map_pars_fragment:D0,map_particle_fragment:L0,map_particle_pars_fragment:U0,metalnessmap_fragment:N0,metalnessmap_pars_fragment:O0,morphinstance_vertex:F0,morphcolor_vertex:z0,morphnormal_vertex:B0,morphtarget_pars_vertex:H0,morphtarget_vertex:k0,normal_fragment_begin:V0,normal_fragment_maps:G0,normal_pars_fragment:W0,normal_pars_vertex:X0,normal_vertex:Y0,normalmap_pars_fragment:q0,clearcoat_normal_fragment_begin:Z0,clearcoat_normal_fragment_maps:J0,clearcoat_pars_fragment:$0,iridescence_pars_fragment:K0,opaque_fragment:j0,packing:Q0,premultiplied_alpha_fragment:tm,project_vertex:em,dithering_fragment:nm,dithering_pars_fragment:im,roughnessmap_fragment:sm,roughnessmap_pars_fragment:rm,shadowmap_pars_fragment:om,shadowmap_pars_vertex:am,shadowmap_vertex:cm,shadowmask_pars_fragment:lm,skinbase_vertex:hm,skinning_pars_vertex:um,skinning_vertex:dm,skinnormal_vertex:fm,specularmap_fragment:pm,specularmap_pars_fragment:mm,tonemapping_fragment:gm,tonemapping_pars_fragment:xm,transmission_fragment:_m,transmission_pars_fragment:ym,uv_pars_fragment:vm,uv_pars_vertex:Mm,uv_vertex:Em,worldpos_vertex:bm,background_vert:Sm,background_frag:wm,backgroundCube_vert:Tm,backgroundCube_frag:Am,cube_vert:Rm,cube_frag:Cm,depth_vert:Pm,depth_frag:Im,distanceRGBA_vert:Dm,distanceRGBA_frag:Lm,equirect_vert:Um,equirect_frag:Nm,linedashed_vert:Om,linedashed_frag:Fm,meshbasic_vert:zm,meshbasic_frag:Bm,meshlambert_vert:Hm,meshlambert_frag:km,meshmatcap_vert:Vm,meshmatcap_frag:Gm,meshnormal_vert:Wm,meshnormal_frag:Xm,meshphong_vert:Ym,meshphong_frag:qm,meshphysical_vert:Zm,meshphysical_frag:Jm,meshtoon_vert:$m,meshtoon_frag:Km,points_vert:jm,points_frag:Qm,shadow_vert:tg,shadow_frag:eg,sprite_vert:ng,sprite_frag:ig},Pt={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},jn={basic:{uniforms:vn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:vn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new ee(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:vn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:vn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:vn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new ee(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:vn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:vn([Pt.points,Pt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:vn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:vn([Pt.common,Pt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:vn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:vn([Pt.sprite,Pt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:vn([Pt.common,Pt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:vn([Pt.lights,Pt.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};jn.physical={uniforms:vn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};var Uo={r:0,b:0,g:0},ji=new ni,sg=new be;function rg(i,t,e,n,s,r,o){let a=new ee(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function x(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function _(v){let y=!1,M=x(v);M===null?f(a,c):M&&M.isColor&&(f(M,1),y=!0);let B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,o):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,y){let M=x(y);M&&(M.isCubeTexture||M.mapping===Ma)?(h===void 0&&(h=new ct(new Ge(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:er(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ji.copy(y.backgroundRotation),ji.x*=-1,ji.y*=-1,ji.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(sg.makeRotationFromEuler(ji)),h.material.toneMapped=_e.getTransfer(M.colorSpace)!==Ae,(u!==M||d!==M.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,p=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ct(new Bi(2,2),new Ln({name:"BackgroundMaterial",uniforms:er(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=_e.getTransfer(M.colorSpace)!==Ae,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,p=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function f(v,y){v.getRGB(Uo,md(i)),n.buffers.color.setClear(Uo.r,Uo.g,Uo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),c=y,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,f(a,c)},render:_,addToRenderList:m}}function og(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(w,N,F,z,q){let V=!1,J=u(z,F,N);r!==J&&(r=J,l(r.object)),V=p(w,z,F,q),V&&x(w,z,F,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,M(w,N,F,z),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return i.createVertexArray()}function l(w){return i.bindVertexArray(w)}function h(w){return i.deleteVertexArray(w)}function u(w,N,F){let z=F.wireframe===!0,q=n[w.id];q===void 0&&(q={},n[w.id]=q);let V=q[N.id];V===void 0&&(V={},q[N.id]=V);let J=V[z];return J===void 0&&(J=d(c()),V[z]=J),J}function d(w){let N=[],F=[],z=[];for(let q=0;q<e;q++)N[q]=0,F[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:F,attributeDivisors:z,object:w,attributes:{},index:null}}function p(w,N,F,z){let q=r.attributes,V=N.attributes,J=0,ut=F.getAttributes();for(let K in ut)if(ut[K].location>=0){let lt=q[K],It=V[K];if(It===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(It=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(It=w.instanceColor)),lt===void 0||lt.attribute!==It||It&&lt.data!==It.data)return!0;J++}return r.attributesNum!==J||r.index!==z}function x(w,N,F,z){let q={},V=N.attributes,J=0,ut=F.getAttributes();for(let K in ut)if(ut[K].location>=0){let lt=V[K];lt===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(lt=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(lt=w.instanceColor));let It={};It.attribute=lt,lt&&lt.data&&(It.data=lt.data),q[K]=It,J++}r.attributes=q,r.attributesNum=J,r.index=z}function _(){let w=r.newAttributes;for(let N=0,F=w.length;N<F;N++)w[N]=0}function m(w){f(w,0)}function f(w,N){let F=r.newAttributes,z=r.enabledAttributes,q=r.attributeDivisors;F[w]=1,z[w]===0&&(i.enableVertexAttribArray(w),z[w]=1),q[w]!==N&&(i.vertexAttribDivisor(w,N),q[w]=N)}function v(){let w=r.newAttributes,N=r.enabledAttributes;for(let F=0,z=N.length;F<z;F++)N[F]!==w[F]&&(i.disableVertexAttribArray(F),N[F]=0)}function y(w,N,F,z,q,V,J){J===!0?i.vertexAttribIPointer(w,N,F,q,V):i.vertexAttribPointer(w,N,F,z,q,V)}function M(w,N,F,z){_();let q=z.attributes,V=F.getAttributes(),J=N.defaultAttributeValues;for(let ut in V){let K=V[ut];if(K.location>=0){let _t=q[ut];if(_t===void 0&&(ut==="instanceMatrix"&&w.instanceMatrix&&(_t=w.instanceMatrix),ut==="instanceColor"&&w.instanceColor&&(_t=w.instanceColor)),_t!==void 0){let lt=_t.normalized,It=_t.itemSize,ie=t.get(_t);if(ie===void 0)continue;let Xt=ie.buffer,at=ie.type,yt=ie.bytesPerElement,Ft=at===i.INT||at===i.UNSIGNED_INT||_t.gpuType===Ql;if(_t.isInterleavedBufferAttribute){let Mt=_t.data,Kt=Mt.stride,jt=_t.offset;if(Mt.isInstancedInterleavedBuffer){for(let ne=0;ne<K.locationSize;ne++)f(K.location+ne,Mt.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let ne=0;ne<K.locationSize;ne++)m(K.location+ne);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let ne=0;ne<K.locationSize;ne++)y(K.location+ne,It/K.locationSize,at,lt,Kt*yt,(jt+It/K.locationSize*ne)*yt,Ft)}else{if(_t.isInstancedBufferAttribute){for(let Mt=0;Mt<K.locationSize;Mt++)f(K.location+Mt,_t.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Mt=0;Mt<K.locationSize;Mt++)m(K.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let Mt=0;Mt<K.locationSize;Mt++)y(K.location+Mt,It/K.locationSize,at,lt,It*yt,It/K.locationSize*Mt*yt,Ft)}}else if(J!==void 0){let lt=J[ut];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(K.location,lt);break;case 3:i.vertexAttrib3fv(K.location,lt);break;case 4:i.vertexAttrib4fv(K.location,lt);break;default:i.vertexAttrib1fv(K.location,lt)}}}}v()}function B(){U();for(let w in n){let N=n[w];for(let F in N){let z=N[F];for(let q in z)h(z[q].object),delete z[q];delete N[F]}delete n[w]}}function P(w){if(n[w.id]===void 0)return;let N=n[w.id];for(let F in N){let z=N[F];for(let q in z)h(z[q].object),delete z[q];delete N[F]}delete n[w.id]}function I(w){for(let N in n){let F=n[N];if(F[w.id]===void 0)continue;let z=F[w.id];for(let q in z)h(z[q].object),delete z[q];delete F[w.id]}}function U(){T(),o=!0,r!==s&&(r=s,l(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:T,dispose:B,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function ag(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x];e.update(p,n,1)}function c(l,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<l.length;x++)o(l[x],h[x],d[x]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let x=0;for(let _=0;_<u;_++)x+=h[_]*d[_];e.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function cg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==Xn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let U=I===lo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==xi&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ti&&!U)}function c(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=x>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:B,maxSamples:P}}function lg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Gn,a=new ce,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let x=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||x===null||x.length===0||r&&!m)r?h(null):l();else{let v=r?0:n,y=v*4,M=f.clippingState||null;c.value=M,M=h(x,d,y,p);for(let B=0;B!==y;++B)M[B]=e[B];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,x){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,x!==!0||m===null){let f=p+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,M=p;y!==_;++y,M+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function hg(i){let t=new WeakMap;function e(o,a){return a===Uc?o.mapping=Ks:a===Nc&&(o.mapping=js),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Uc||a===Nc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new ml(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var oa=class extends sa{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ws=4,du=[.125,.215,.35,.446,.526,.582],ns=20,fc=new oa,fu=new ee,pc=null,mc=0,gc=0,xc=!1,ts=(1+Math.sqrt(5))/2,zs=1/ts,pu=[new D(-ts,zs,0),new D(ts,zs,0),new D(-zs,0,ts),new D(zs,0,ts),new D(0,ts,-zs),new D(0,ts,zs),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],aa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pc,mc,gc),this._renderer.xr.enabled=xc,t.scissorTest=!1,No(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ks||t.mapping===js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:lo,format:Xn,colorSpace:ir,depthBuffer:!1},s=mu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ug(r)),this._blurMaterial=dg(r,t,e)}return s}_compileMaterial(t){let e=new ct(this._lodPlanes[0],t);this._renderer.compile(e,fc)}_sceneToCubeUV(t,e,n,s){let a=new je(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(fu),h.toneMapping=Oi,h.autoClear=!1;let p=new He({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),x=new ct(new Ge,p),_=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(fu),_=!0);for(let f=0;f<6;f++){let v=f%3;v===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):v===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let y=this._cubeSize;No(s,v*y,f>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(x,a),h.render(t,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ks||t.mapping===js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ct(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;No(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,fc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=pu[(s-r-1)%pu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ct(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ns-1),_=r/x,m=isFinite(r)?1+Math.floor(h*_):ns;m>ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ns}`);let f=[],v=0;for(let I=0;I<ns;++I){let U=I/_,T=Math.exp(-U*U/2);f.push(T),I===0?v+=T:I<m&&(v+=2*T)}for(let I=0;I<f.length;I++)f[I]=f[I]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=x,d.mipInt.value=y-n;let M=this._sizeLods[s],B=3*M*(s>y-Ws?s-y+Ws:0),P=4*(this._cubeSize-M);No(e,B,P,3*M,2*M),c.setRenderTarget(e),c.render(u,fc)}};function ug(i){let t=[],e=[],n=[],s=i,r=i-Ws+1+du.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ws?c=du[o-i+Ws-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,x=6,_=3,m=2,f=1,v=new Float32Array(_*x*p),y=new Float32Array(m*x*p),M=new Float32Array(f*x*p);for(let P=0;P<p;P++){let I=P%3*2/3-1,U=P>2?0:-1,T=[I,U,0,I+2/3,U,0,I+2/3,U+1,0,I,U,0,I+2/3,U+1,0,I,U+1,0];v.set(T,_*x*P),y.set(d,m*x*P);let w=[P,P,P,P,P,P];M.set(w,f*x*P)}let B=new Ie;B.setAttribute("position",new Qe(v,_)),B.setAttribute("uv",new Qe(y,m)),B.setAttribute("faceIndex",new Qe(M,f)),t.push(B),s>Ws&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function mu(i,t,e){let n=new yi(i,t,e);return n.texture.mapping=Ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function No(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function dg(i,t,e){let n=new Float32Array(ns),s=new D(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ah(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function gu(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ah(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function xu(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function ah(){return`

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
	`}function fg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Uc||c===Nc,h=c===Ks||c===js;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new aa(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new aa(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function pg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Pr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function mg(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let x in d.attributes)t.remove(d.attributes[x]);for(let x in d.morphAttributes){let _=d.morphAttributes[x];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let x in d)t.update(d[x],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let x in p){let _=p[x];for(let m=0,f=_.length;m<f;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){let d=[],p=u.index,x=u.attributes.position,_=0;if(p!==null){let v=p.array;_=p.version;for(let y=0,M=v.length;y<M;y+=3){let B=v[y+0],P=v[y+1],I=v[y+2];d.push(B,P,P,I,I,B)}}else if(x!==void 0){let v=x.array;_=x.version;for(let y=0,M=v.length/3-1;y<M;y+=3){let B=y+0,P=y+1,I=y+2;d.push(B,P,P,I,I,B)}}else return;let m=new(fd(d)?ia:na)(d,1);m.version=_;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function gg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function l(d,p,x){x!==0&&(i.drawElementsInstanced(n,p,r,d*o,x),e.update(p,n,x))}function h(d,p,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,x);let m=0;for(let f=0;f<x;f++)m+=p[f];e.update(m,n,1)}function u(d,p,x,_){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,x);let f=0;for(let v=0;v<x;v++)f+=p[v]*_[v];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function xg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function _g(i,t,e){let n=new WeakMap,s=new Re;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let T=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],y=0;p===!0&&(y=1),x===!0&&(y=2),_===!0&&(y=3);let M=a.attributes.position.count*y,B=1;M>t.maxTextureSize&&(B=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let P=new Float32Array(M*B*4*u),I=new ea(P,M,B,u);I.type=ti,I.needsUpdate=!0;let U=y*4;for(let w=0;w<u;w++){let N=m[w],F=f[w],z=v[w],q=M*B*4*w;for(let V=0;V<N.count;V++){let J=V*U;p===!0&&(s.fromBufferAttribute(N,V),P[q+J+0]=s.x,P[q+J+1]=s.y,P[q+J+2]=s.z,P[q+J+3]=0),x===!0&&(s.fromBufferAttribute(F,V),P[q+J+4]=s.x,P[q+J+5]=s.y,P[q+J+6]=s.z,P[q+J+7]=0),_===!0&&(s.fromBufferAttribute(z,V),P[q+J+8]=s.x,P[q+J+9]=s.y,P[q+J+10]=s.z,P[q+J+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:I,size:new pt(M,B)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];let x=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function yg(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var ca=class extends Mn{constructor(t,e,n,s,r,o,a,c,l,h=qs){if(h!==qs&&h!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===qs&&(n=rs),n===void 0&&h===tr&&(n=Qs),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:dn,this.minFilter=c!==void 0?c:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},xd=new Mn,_u=new ca(1,1),_d=new ea,yd=new fl,vd=new ra,yu=[],vu=[],Mu=new Float32Array(16),Eu=new Float32Array(9),bu=new Float32Array(4);function sr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=yu[s];if(r===void 0&&(r=new Float32Array(s),yu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ba(i,t){let e=vu[t];e===void 0&&(e=new Int32Array(t),vu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function vg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2fv(this.addr,t),Ze(e,t)}}function Eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;i.uniform3fv(this.addr,t),Ze(e,t)}}function bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4fv(this.addr,t),Ze(e,t)}}function Sg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(qe(e,n))return;bu.set(n),i.uniformMatrix2fv(this.addr,!1,bu),Ze(e,n)}}function wg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(qe(e,n))return;Eu.set(n),i.uniformMatrix3fv(this.addr,!1,Eu),Ze(e,n)}}function Tg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(qe(e,n))return;Mu.set(n),i.uniformMatrix4fv(this.addr,!1,Mu),Ze(e,n)}}function Ag(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2iv(this.addr,t),Ze(e,t)}}function Cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3iv(this.addr,t),Ze(e,t)}}function Pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4iv(this.addr,t),Ze(e,t)}}function Ig(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2uiv(this.addr,t),Ze(e,t)}}function Lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3uiv(this.addr,t),Ze(e,t)}}function Ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4uiv(this.addr,t),Ze(e,t)}}function Ng(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(_u.compareFunction=ud,r=_u):r=xd,e.setTexture2D(t||r,s)}function Og(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||yd,s)}function Fg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||vd,s)}function zg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||_d,s)}function Bg(i){switch(i){case 5126:return vg;case 35664:return Mg;case 35665:return Eg;case 35666:return bg;case 35674:return Sg;case 35675:return wg;case 35676:return Tg;case 5124:case 35670:return Ag;case 35667:case 35671:return Rg;case 35668:case 35672:return Cg;case 35669:case 35673:return Pg;case 5125:return Ig;case 36294:return Dg;case 36295:return Lg;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return zg}}function Hg(i,t){i.uniform1fv(this.addr,t)}function kg(i,t){let e=sr(t,this.size,2);i.uniform2fv(this.addr,e)}function Vg(i,t){let e=sr(t,this.size,3);i.uniform3fv(this.addr,e)}function Gg(i,t){let e=sr(t,this.size,4);i.uniform4fv(this.addr,e)}function Wg(i,t){let e=sr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Xg(i,t){let e=sr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Yg(i,t){let e=sr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function qg(i,t){i.uniform1iv(this.addr,t)}function Zg(i,t){i.uniform2iv(this.addr,t)}function Jg(i,t){i.uniform3iv(this.addr,t)}function $g(i,t){i.uniform4iv(this.addr,t)}function Kg(i,t){i.uniform1uiv(this.addr,t)}function jg(i,t){i.uniform2uiv(this.addr,t)}function Qg(i,t){i.uniform3uiv(this.addr,t)}function tx(i,t){i.uniform4uiv(this.addr,t)}function ex(i,t,e){let n=this.cache,s=t.length,r=ba(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||xd,r[o])}function nx(i,t,e){let n=this.cache,s=t.length,r=ba(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||yd,r[o])}function ix(i,t,e){let n=this.cache,s=t.length,r=ba(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||vd,r[o])}function sx(i,t,e){let n=this.cache,s=t.length,r=ba(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||_d,r[o])}function rx(i){switch(i){case 5126:return Hg;case 35664:return kg;case 35665:return Vg;case 35666:return Gg;case 35674:return Wg;case 35675:return Xg;case 35676:return Yg;case 5124:case 35670:return qg;case 35667:case 35671:return Zg;case 35668:case 35672:return Jg;case 35669:case 35673:return $g;case 5125:return Kg;case 36294:return jg;case 36295:return Qg;case 36296:return tx;case 35678:case 36198:case 36298:case 36306:case 35682:return ex;case 35679:case 36299:case 36307:return nx;case 35680:case 36300:case 36308:case 36293:return ix;case 36289:case 36303:case 36311:case 36292:return sx}}var gl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Bg(e.type)}},xl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rx(e.type)}},_l=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},_c=/(\w+)(\])?(\[|\.)?/g;function Su(i,t){i.seq.push(t),i.map[t.id]=t}function ox(i,t,e){let n=i.name,s=n.length;for(_c.lastIndex=0;;){let r=_c.exec(n),o=_c.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Su(e,l===void 0?new gl(a,i,t):new xl(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new _l(a),Su(e,u)),e=u}}}var Js=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);ox(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function wu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var ax=37297,cx=0;function lx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Tu=new ce;function hx(i){_e._getMatrix(Tu,_e.workingColorSpace,i);let t=`mat3( ${Tu.elements.map(e=>e.toFixed(4))} )`;switch(_e.getTransfer(i)){case Ea:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Au(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+lx(i.getShaderSource(t),o)}else return s}function ux(i,t){let e=hx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function dx(i,t){let e;switch(t){case Ef:e="Linear";break;case bf:e="Reinhard";break;case Sf:e="Cineon";break;case wf:e="ACESFilmic";break;case Af:e="AgX";break;case Rf:e="Neutral";break;case Tf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Oo=new D;function fx(){_e.getLuminanceCoefficients(Oo);let i=Oo.x.toFixed(4),t=Oo.y.toFixed(4),e=Oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function px(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function mx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ir(i){return i!==""}function Ru(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var xx=/^[ \t]*#include +<([\w\d./]+)>/gm;function yl(i){return i.replace(xx,yx)}var _x=new Map;function yx(i,t){let e=le[t];if(e===void 0){let n=_x.get(t);if(n!==void 0)e=le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return yl(e)}var vx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pu(i){return i.replace(vx,Mx)}function Mx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Iu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Ex(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Qu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===va?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pi&&(t="SHADOWMAP_TYPE_VSM"),t}function bx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ks:case js:t="ENVMAP_TYPE_CUBE";break;case Ma:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Sx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case js:t="ENVMAP_MODE_REFRACTION";break}return t}function wx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case jl:t="ENVMAP_BLENDING_MULTIPLY";break;case vf:t="ENVMAP_BLENDING_MIX";break;case Mf:t="ENVMAP_BLENDING_ADD";break}return t}function Tx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ax(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Ex(e),l=bx(e),h=Sx(e),u=wx(e),d=Tx(e),p=px(e),x=mx(r),_=s.createProgram(),m,f,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ir).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ir).join(`
`),f.length>0&&(f+=`
`)):(m=[Iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),f=[Iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Oi?"#define TONE_MAPPING":"",e.toneMapping!==Oi?le.tonemapping_pars_fragment:"",e.toneMapping!==Oi?dx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,ux("linearToOutputTexel",e.outputColorSpace),fx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ir).join(`
`)),o=yl(o),o=Ru(o,e),o=Cu(o,e),a=yl(a),a=Ru(a,e),a=Cu(a,e),o=Pu(o),a=Pu(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let y=v+m+o,M=v+f+a,B=wu(s,s.VERTEX_SHADER,y),P=wu(s,s.FRAGMENT_SHADER,M);s.attachShader(_,B),s.attachShader(_,P),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function I(N){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(B).trim(),q=s.getShaderInfoLog(P).trim(),V=!0,J=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,B,P);else{let ut=Au(s,B,"vertex"),K=Au(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+F+`
`+ut+`
`+K)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(z===""||q==="")&&(J=!1);J&&(N.diagnostics={runnable:V,programLog:F,vertexShader:{log:z,prefix:m},fragmentShader:{log:q,prefix:f}})}s.deleteShader(B),s.deleteShader(P),U=new Js(s,_),T=gx(s,_)}let U;this.getUniforms=function(){return U===void 0&&I(this),U};let T;this.getAttributes=function(){return T===void 0&&I(this),T};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(_,ax)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cx++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=B,this.fragmentShader=P,this}var Rx=0,vl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ml(t),e.set(t,n)),n}},Ml=class{constructor(t){this.id=Rx++,this.code=t,this.usedTimes=0}};function Cx(i,t,e,n,s,r,o){let a=new Vr,c=new vl,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return l.add(T),T===0?"uv":`uv${T}`}function m(T,w,N,F,z){let q=F.fog,V=z.geometry,J=T.isMeshStandardMaterial?F.environment:null,ut=(T.isMeshStandardMaterial?e:t).get(T.envMap||J),K=ut&&ut.mapping===Ma?ut.image.height:null,_t=x[T.type];T.precision!==null&&(p=s.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));let lt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,It=lt!==void 0?lt.length:0,ie=0;V.morphAttributes.position!==void 0&&(ie=1),V.morphAttributes.normal!==void 0&&(ie=2),V.morphAttributes.color!==void 0&&(ie=3);let Xt,at,yt,Ft;if(_t){let ye=jn[_t];Xt=ye.vertexShader,at=ye.fragmentShader}else Xt=T.vertexShader,at=T.fragmentShader,c.update(T),yt=c.getVertexShaderID(T),Ft=c.getFragmentShaderID(T);let Mt=i.getRenderTarget(),Kt=i.state.buffers.depth.getReversed(),jt=z.isInstancedMesh===!0,ne=z.isBatchedMesh===!0,he=!!T.map,ht=!!T.matcap,vt=!!ut,L=!!T.aoMap,Bt=!!T.lightMap,mt=!!T.bumpMap,Ot=!!T.normalMap,$=!!T.displacementMap,dt=!!T.emissiveMap,rt=!!T.metalnessMap,R=!!T.roughnessMap,b=T.anisotropy>0,k=T.clearcoat>0,Z=T.dispersion>0,tt=T.iridescence>0,st=T.sheen>0,bt=T.transmission>0,j=b&&!!T.anisotropyMap,xt=k&&!!T.clearcoatMap,Ut=k&&!!T.clearcoatNormalMap,gt=k&&!!T.clearcoatRoughnessMap,Dt=tt&&!!T.iridescenceMap,Yt=tt&&!!T.iridescenceThicknessMap,Zt=st&&!!T.sheenColorMap,Ht=st&&!!T.sheenRoughnessMap,de=!!T.specularMap,se=!!T.specularColorMap,ge=!!T.specularIntensityMap,G=bt&&!!T.transmissionMap,At=bt&&!!T.thicknessMap,ot=!!T.gradientMap,ft=!!T.alphaMap,Lt=T.alphaTest>0,Nt=!!T.alphaHash,Qt=!!T.extensions,Le=Oi;T.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(Le=i.toneMapping);let Xe={shaderID:_t,shaderType:T.type,shaderName:T.name,vertexShader:Xt,fragmentShader:at,defines:T.defines,customVertexShaderID:yt,customFragmentShaderID:Ft,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:ne,batchingColor:ne&&z._colorsTexture!==null,instancing:jt,instancingColor:jt&&z.instanceColor!==null,instancingMorph:jt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Mt===null?i.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:ir,alphaToCoverage:!!T.alphaToCoverage,map:he,matcap:ht,envMap:vt,envMapMode:vt&&ut.mapping,envMapCubeUVHeight:K,aoMap:L,lightMap:Bt,bumpMap:mt,normalMap:Ot,displacementMap:d&&$,emissiveMap:dt,normalMapObjectSpace:Ot&&T.normalMapType===Df,normalMapTangentSpace:Ot&&T.normalMapType===hd,metalnessMap:rt,roughnessMap:R,anisotropy:b,anisotropyMap:j,clearcoat:k,clearcoatMap:xt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:gt,dispersion:Z,iridescence:tt,iridescenceMap:Dt,iridescenceThicknessMap:Yt,sheen:st,sheenColorMap:Zt,sheenRoughnessMap:Ht,specularMap:de,specularColorMap:se,specularIntensityMap:ge,transmission:bt,transmissionMap:G,thicknessMap:At,gradientMap:ot,opaque:T.transparent===!1&&T.blending===Ys&&T.alphaToCoverage===!1,alphaMap:ft,alphaTest:Lt,alphaHash:Nt,combine:T.combine,mapUv:he&&_(T.map.channel),aoMapUv:L&&_(T.aoMap.channel),lightMapUv:Bt&&_(T.lightMap.channel),bumpMapUv:mt&&_(T.bumpMap.channel),normalMapUv:Ot&&_(T.normalMap.channel),displacementMapUv:$&&_(T.displacementMap.channel),emissiveMapUv:dt&&_(T.emissiveMap.channel),metalnessMapUv:rt&&_(T.metalnessMap.channel),roughnessMapUv:R&&_(T.roughnessMap.channel),anisotropyMapUv:j&&_(T.anisotropyMap.channel),clearcoatMapUv:xt&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&_(T.sheenRoughnessMap.channel),specularMapUv:de&&_(T.specularMap.channel),specularColorMapUv:se&&_(T.specularColorMap.channel),specularIntensityMapUv:ge&&_(T.specularIntensityMap.channel),transmissionMapUv:G&&_(T.transmissionMap.channel),thicknessMapUv:At&&_(T.thicknessMap.channel),alphaMapUv:ft&&_(T.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ot||b),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!V.attributes.uv&&(he||ft),fog:!!q,useFog:T.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Kt,skinning:z.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:ie,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,decodeVideoTexture:he&&T.map.isVideoTexture===!0&&_e.getTransfer(T.map.colorSpace)===Ae,decodeVideoTextureEmissive:dt&&T.emissiveMap.isVideoTexture===!0&&_e.getTransfer(T.emissiveMap.colorSpace)===Ae,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===hn,flipSided:T.side===un,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Qt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&T.extensions.multiDraw===!0||ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Xe.vertexUv1s=l.has(1),Xe.vertexUv2s=l.has(2),Xe.vertexUv3s=l.has(3),l.clear(),Xe}function f(T){let w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(let N in T.defines)w.push(N),w.push(T.defines[N]);return T.isRawShaderMaterial===!1&&(v(w,T),y(w,T),w.push(i.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function v(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function y(T,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),T.push(a.mask)}function M(T){let w=x[T.type],N;if(w){let F=jn[w];N=yp.clone(F.uniforms)}else N=T.uniforms;return N}function B(T,w){let N;for(let F=0,z=h.length;F<z;F++){let q=h[F];if(q.cacheKey===w){N=q,++N.usedTimes;break}}return N===void 0&&(N=new Ax(i,w,T,r),h.push(N)),N}function P(T){if(--T.usedTimes===0){let w=h.indexOf(T);h[w]=h[h.length-1],h.pop(),T.destroy()}}function I(T){c.remove(T)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:B,releaseProgram:P,releaseShaderCache:I,programs:h,dispose:U}}function Px(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ix(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Du(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Lu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,x,_,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:x,renderOrder:u.renderOrder,z:_,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=x,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function a(u,d,p,x,_,m){let f=o(u,d,p,x,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(u,d,p,x,_,m){let f=o(u,d,p,x,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||Ix),n.length>1&&n.sort(d||Du),s.length>1&&s.sort(d||Du)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Dx(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Lu,i.set(n,[o])):s>=r.length?(o=new Lu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Lx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new ee};break;case"SpotLight":e={position:new D,direction:new D,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function Ux(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Nx=0;function Ox(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Fx(i){let t=new Lx,e=Ux(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let s=new D,r=new be,o=new be;function a(l){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,x=0,_=0,m=0,f=0,v=0,y=0,M=0,B=0,P=0,I=0;l.sort(Ox);for(let T=0,w=l.length;T<w;T++){let N=l[T],F=N.color,z=N.intensity,q=N.distance,V=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=F.r*z,u+=F.g*z,d+=F.b*z;else if(N.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(N.sh.coefficients[J],z);I++}else if(N.isDirectionalLight){let J=t.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ut=N.shadow,K=e.get(N);K.shadowIntensity=ut.intensity,K.shadowBias=ut.bias,K.shadowNormalBias=ut.normalBias,K.shadowRadius=ut.radius,K.shadowMapSize=ut.mapSize,n.directionalShadow[p]=K,n.directionalShadowMap[p]=V,n.directionalShadowMatrix[p]=N.shadow.matrix,v++}n.directional[p]=J,p++}else if(N.isSpotLight){let J=t.get(N);J.position.setFromMatrixPosition(N.matrixWorld),J.color.copy(F).multiplyScalar(z),J.distance=q,J.coneCos=Math.cos(N.angle),J.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),J.decay=N.decay,n.spot[_]=J;let ut=N.shadow;if(N.map&&(n.spotLightMap[B]=N.map,B++,ut.updateMatrices(N),N.castShadow&&P++),n.spotLightMatrix[_]=ut.matrix,N.castShadow){let K=e.get(N);K.shadowIntensity=ut.intensity,K.shadowBias=ut.bias,K.shadowNormalBias=ut.normalBias,K.shadowRadius=ut.radius,K.shadowMapSize=ut.mapSize,n.spotShadow[_]=K,n.spotShadowMap[_]=V,M++}_++}else if(N.isRectAreaLight){let J=t.get(N);J.color.copy(F).multiplyScalar(z),J.halfWidth.set(N.width*.5,0,0),J.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=J,m++}else if(N.isPointLight){let J=t.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),J.distance=N.distance,J.decay=N.decay,N.castShadow){let ut=N.shadow,K=e.get(N);K.shadowIntensity=ut.intensity,K.shadowBias=ut.bias,K.shadowNormalBias=ut.normalBias,K.shadowRadius=ut.radius,K.shadowMapSize=ut.mapSize,K.shadowCameraNear=ut.camera.near,K.shadowCameraFar=ut.camera.far,n.pointShadow[x]=K,n.pointShadowMap[x]=V,n.pointShadowMatrix[x]=N.shadow.matrix,y++}n.point[x]=J,x++}else if(N.isHemisphereLight){let J=t.get(N);J.skyColor.copy(N.color).multiplyScalar(z),J.groundColor.copy(N.groundColor).multiplyScalar(z),n.hemi[f]=J,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let U=n.hash;(U.directionalLength!==p||U.pointLength!==x||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==v||U.numPointShadows!==y||U.numSpotShadows!==M||U.numSpotMaps!==B||U.numLightProbes!==I)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=x,n.hemi.length=f,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+B-P,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=I,U.directionalLength=p,U.pointLength=x,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=v,U.numPointShadows=y,U.numSpotShadows=M,U.numSpotMaps=B,U.numLightProbes=I,n.version=Nx++)}function c(l,h){let u=0,d=0,p=0,x=0,_=0,m=h.matrixWorldInverse;for(let f=0,v=l.length;f<v;f++){let y=l[f];if(y.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(y.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let M=n.hemi[_];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Uu(i){let t=new Fx(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function zx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Uu(i),t.set(s,[a])):r>=o.length?(a=new Uu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var El=class extends Mi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Pf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},bl=class extends Mi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Bx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hx=`uniform sampler2D shadow_pass;
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
}`;function kx(i,t,e){let n=new Gr,s=new pt,r=new pt,o=new Re,a=new El({depthPacking:If}),c=new bl,l={},h=e.maxTextureSize,u={[Fi]:un,[un]:Fi,[hn]:hn},d=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:Bx,fragmentShader:Hx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let x=new Ie;x.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ct(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qu;let f=this.type;this.render=function(P,I,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;let T=i.getRenderTarget(),w=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Ni),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let z=f!==pi&&this.type===pi,q=f===pi&&this.type!==pi;for(let V=0,J=P.length;V<J;V++){let ut=P[V],K=ut.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ut,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let _t=K.getFrameExtents();if(s.multiply(_t),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/_t.x),s.x=r.x*_t.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/_t.y),s.y=r.y*_t.y,K.mapSize.y=r.y)),K.map===null||z===!0||q===!0){let It=this.type!==pi?{minFilter:dn,magFilter:dn}:{};K.map!==null&&K.map.dispose(),K.map=new yi(s.x,s.y,It),K.map.texture.name=ut.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();let lt=K.getViewportCount();for(let It=0;It<lt;It++){let ie=K.getViewport(It);o.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),F.viewport(o),K.updateMatrices(ut,It),n=K.getFrustum(),M(I,U,K.camera,ut,this.type)}K.isPointLightShadow!==!0&&this.type===pi&&v(K,U),K.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(T,w,N)};function v(P,I){let U=t.update(_);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new yi(s.x,s.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(I,null,U,d,_,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(I,null,U,p,_,null)}function y(P,I,U,T){let w=null,N=U.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(N!==void 0)w=N;else if(w=U.isPointLight===!0?c:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let F=w.uuid,z=I.uuid,q=l[F];q===void 0&&(q={},l[F]=q);let V=q[z];V===void 0&&(V=w.clone(),q[z]=V,I.addEventListener("dispose",B)),w=V}if(w.visible=I.visible,w.wireframe=I.wireframe,T===pi?w.side=I.shadowSide!==null?I.shadowSide:I.side:w.side=I.shadowSide!==null?I.shadowSide:u[I.side],w.alphaMap=I.alphaMap,w.alphaTest=I.alphaTest,w.map=I.map,w.clipShadows=I.clipShadows,w.clippingPlanes=I.clippingPlanes,w.clipIntersection=I.clipIntersection,w.displacementMap=I.displacementMap,w.displacementScale=I.displacementScale,w.displacementBias=I.displacementBias,w.wireframeLinewidth=I.wireframeLinewidth,w.linewidth=I.linewidth,U.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let F=i.properties.get(w);F.light=U}return w}function M(P,I,U,T,w){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&w===pi)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,P.matrixWorld);let z=t.update(P),q=P.material;if(Array.isArray(q)){let V=z.groups;for(let J=0,ut=V.length;J<ut;J++){let K=V[J],_t=q[K.materialIndex];if(_t&&_t.visible){let lt=y(P,_t,T,w);P.onBeforeShadow(i,P,I,U,z,lt,K),i.renderBufferDirect(U,null,z,lt,P,K),P.onAfterShadow(i,P,I,U,z,lt,K)}}}else if(q.visible){let V=y(P,q,T,w);P.onBeforeShadow(i,P,I,U,z,V,null),i.renderBufferDirect(U,null,z,V,P,null),P.onAfterShadow(i,P,I,U,z,V,null)}}let F=P.children;for(let z=0,q=F.length;z<q;z++)M(F[z],I,U,T,w)}function B(P){P.target.removeEventListener("dispose",B);for(let U in l){let T=l[U],w=P.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}var Vx={[Ac]:Rc,[Cc]:Dc,[Pc]:Lc,[$s]:Ic,[Rc]:Ac,[Dc]:Cc,[Lc]:Pc,[Ic]:$s};function Gx(i,t){function e(){let G=!1,At=new Re,ot=null,ft=new Re(0,0,0,0);return{setMask:function(Lt){ot!==Lt&&!G&&(i.colorMask(Lt,Lt,Lt,Lt),ot=Lt)},setLocked:function(Lt){G=Lt},setClear:function(Lt,Nt,Qt,Le,Xe){Xe===!0&&(Lt*=Le,Nt*=Le,Qt*=Le),At.set(Lt,Nt,Qt,Le),ft.equals(At)===!1&&(i.clearColor(Lt,Nt,Qt,Le),ft.copy(At))},reset:function(){G=!1,ot=null,ft.set(-1,0,0,0)}}}function n(){let G=!1,At=!1,ot=null,ft=null,Lt=null;return{setReversed:function(Nt){if(At!==Nt){let Qt=t.get("EXT_clip_control");At?Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.ZERO_TO_ONE_EXT):Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.NEGATIVE_ONE_TO_ONE_EXT);let Le=Lt;Lt=null,this.setClear(Le)}At=Nt},getReversed:function(){return At},setTest:function(Nt){Nt?Mt(i.DEPTH_TEST):Kt(i.DEPTH_TEST)},setMask:function(Nt){ot!==Nt&&!G&&(i.depthMask(Nt),ot=Nt)},setFunc:function(Nt){if(At&&(Nt=Vx[Nt]),ft!==Nt){switch(Nt){case Ac:i.depthFunc(i.NEVER);break;case Rc:i.depthFunc(i.ALWAYS);break;case Cc:i.depthFunc(i.LESS);break;case $s:i.depthFunc(i.LEQUAL);break;case Pc:i.depthFunc(i.EQUAL);break;case Ic:i.depthFunc(i.GEQUAL);break;case Dc:i.depthFunc(i.GREATER);break;case Lc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=Nt}},setLocked:function(Nt){G=Nt},setClear:function(Nt){Lt!==Nt&&(At&&(Nt=1-Nt),i.clearDepth(Nt),Lt=Nt)},reset:function(){G=!1,ot=null,ft=null,Lt=null,At=!1}}}function s(){let G=!1,At=null,ot=null,ft=null,Lt=null,Nt=null,Qt=null,Le=null,Xe=null;return{setTest:function(ye){G||(ye?Mt(i.STENCIL_TEST):Kt(i.STENCIL_TEST))},setMask:function(ye){At!==ye&&!G&&(i.stencilMask(ye),At=ye)},setFunc:function(ye,gn,nn){(ot!==ye||ft!==gn||Lt!==nn)&&(i.stencilFunc(ye,gn,nn),ot=ye,ft=gn,Lt=nn)},setOp:function(ye,gn,nn){(Nt!==ye||Qt!==gn||Le!==nn)&&(i.stencilOp(ye,gn,nn),Nt=ye,Qt=gn,Le=nn)},setLocked:function(ye){G=ye},setClear:function(ye){Xe!==ye&&(i.clearStencil(ye),Xe=ye)},reset:function(){G=!1,At=null,ot=null,ft=null,Lt=null,Nt=null,Qt=null,Le=null,Xe=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,p=[],x=null,_=!1,m=null,f=null,v=null,y=null,M=null,B=null,P=null,I=new ee(0,0,0),U=0,T=!1,w=null,N=null,F=null,z=null,q=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,ut=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(K)[1]),J=ut>=1):K.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),J=ut>=2);let _t=null,lt={},It=i.getParameter(i.SCISSOR_BOX),ie=i.getParameter(i.VIEWPORT),Xt=new Re().fromArray(It),at=new Re().fromArray(ie);function yt(G,At,ot,ft){let Lt=new Uint8Array(4),Nt=i.createTexture();i.bindTexture(G,Nt),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qt=0;Qt<ot;Qt++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(At,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,Lt):i.texImage2D(At+Qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Lt);return Nt}let Ft={};Ft[i.TEXTURE_2D]=yt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ft[i.TEXTURE_CUBE_MAP]=yt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ft[i.TEXTURE_2D_ARRAY]=yt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ft[i.TEXTURE_3D]=yt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Mt(i.DEPTH_TEST),o.setFunc($s),mt(!1),Ot(Oh),Mt(i.CULL_FACE),L(Ni);function Mt(G){h[G]!==!0&&(i.enable(G),h[G]=!0)}function Kt(G){h[G]!==!1&&(i.disable(G),h[G]=!1)}function jt(G,At){return u[G]!==At?(i.bindFramebuffer(G,At),u[G]=At,G===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=At),G===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=At),!0):!1}function ne(G,At){let ot=p,ft=!1;if(G){ot=d.get(At),ot===void 0&&(ot=[],d.set(At,ot));let Lt=G.textures;if(ot.length!==Lt.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let Nt=0,Qt=Lt.length;Nt<Qt;Nt++)ot[Nt]=i.COLOR_ATTACHMENT0+Nt;ot.length=Lt.length,ft=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,ft=!0);ft&&i.drawBuffers(ot)}function he(G){return x!==G?(i.useProgram(G),x=G,!0):!1}let ht={[es]:i.FUNC_ADD,[nf]:i.FUNC_SUBTRACT,[sf]:i.FUNC_REVERSE_SUBTRACT};ht[rf]=i.MIN,ht[of]=i.MAX;let vt={[af]:i.ZERO,[cf]:i.ONE,[lf]:i.SRC_COLOR,[wc]:i.SRC_ALPHA,[mf]:i.SRC_ALPHA_SATURATE,[ff]:i.DST_COLOR,[uf]:i.DST_ALPHA,[hf]:i.ONE_MINUS_SRC_COLOR,[Tc]:i.ONE_MINUS_SRC_ALPHA,[pf]:i.ONE_MINUS_DST_COLOR,[df]:i.ONE_MINUS_DST_ALPHA,[gf]:i.CONSTANT_COLOR,[xf]:i.ONE_MINUS_CONSTANT_COLOR,[_f]:i.CONSTANT_ALPHA,[yf]:i.ONE_MINUS_CONSTANT_ALPHA};function L(G,At,ot,ft,Lt,Nt,Qt,Le,Xe,ye){if(G===Ni){_===!0&&(Kt(i.BLEND),_=!1);return}if(_===!1&&(Mt(i.BLEND),_=!0),G!==ef){if(G!==m||ye!==T){if((f!==es||M!==es)&&(i.blendEquation(i.FUNC_ADD),f=es,M=es),ye)switch(G){case Ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fh:i.blendFunc(i.ONE,i.ONE);break;case zh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case zh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}v=null,y=null,B=null,P=null,I.set(0,0,0),U=0,m=G,T=ye}return}Lt=Lt||At,Nt=Nt||ot,Qt=Qt||ft,(At!==f||Lt!==M)&&(i.blendEquationSeparate(ht[At],ht[Lt]),f=At,M=Lt),(ot!==v||ft!==y||Nt!==B||Qt!==P)&&(i.blendFuncSeparate(vt[ot],vt[ft],vt[Nt],vt[Qt]),v=ot,y=ft,B=Nt,P=Qt),(Le.equals(I)===!1||Xe!==U)&&(i.blendColor(Le.r,Le.g,Le.b,Xe),I.copy(Le),U=Xe),m=G,T=!1}function Bt(G,At){G.side===hn?Kt(i.CULL_FACE):Mt(i.CULL_FACE);let ot=G.side===un;At&&(ot=!ot),mt(ot),G.blending===Ys&&G.transparent===!1?L(Ni):L(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let ft=G.stencilWrite;a.setTest(ft),ft&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),dt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Mt(i.SAMPLE_ALPHA_TO_COVERAGE):Kt(i.SAMPLE_ALPHA_TO_COVERAGE)}function mt(G){w!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),w=G)}function Ot(G){G!==Qd?(Mt(i.CULL_FACE),G!==N&&(G===Oh?i.cullFace(i.BACK):G===tf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Kt(i.CULL_FACE),N=G}function $(G){G!==F&&(J&&i.lineWidth(G),F=G)}function dt(G,At,ot){G?(Mt(i.POLYGON_OFFSET_FILL),(z!==At||q!==ot)&&(i.polygonOffset(At,ot),z=At,q=ot)):Kt(i.POLYGON_OFFSET_FILL)}function rt(G){G?Mt(i.SCISSOR_TEST):Kt(i.SCISSOR_TEST)}function R(G){G===void 0&&(G=i.TEXTURE0+V-1),_t!==G&&(i.activeTexture(G),_t=G)}function b(G,At,ot){ot===void 0&&(_t===null?ot=i.TEXTURE0+V-1:ot=_t);let ft=lt[ot];ft===void 0&&(ft={type:void 0,texture:void 0},lt[ot]=ft),(ft.type!==G||ft.texture!==At)&&(_t!==ot&&(i.activeTexture(ot),_t=ot),i.bindTexture(G,At||Ft[G]),ft.type=G,ft.texture=At)}function k(){let G=lt[_t];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function st(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function j(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ut(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function gt(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Dt(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Yt(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Zt(G){Xt.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Xt.copy(G))}function Ht(G){at.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),at.copy(G))}function de(G,At){let ot=l.get(At);ot===void 0&&(ot=new WeakMap,l.set(At,ot));let ft=ot.get(G);ft===void 0&&(ft=i.getUniformBlockIndex(At,G.name),ot.set(G,ft))}function se(G,At){let ft=l.get(At).get(G);c.get(At)!==ft&&(i.uniformBlockBinding(At,ft,G.__bindingPointIndex),c.set(At,ft))}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},_t=null,lt={},u={},d=new WeakMap,p=[],x=null,_=!1,m=null,f=null,v=null,y=null,M=null,B=null,P=null,I=new ee(0,0,0),U=0,T=!1,w=null,N=null,F=null,z=null,q=null,Xt.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Mt,disable:Kt,bindFramebuffer:jt,drawBuffers:ne,useProgram:he,setBlending:L,setMaterial:Bt,setFlipSided:mt,setCullFace:Ot,setLineWidth:$,setPolygonOffset:dt,setScissorTest:rt,activeTexture:R,bindTexture:b,unbindTexture:k,compressedTexImage2D:Z,compressedTexImage3D:tt,texImage2D:Dt,texImage3D:Yt,updateUBOMapping:de,uniformBlockBinding:se,texStorage2D:Ut,texStorage3D:gt,texSubImage2D:st,texSubImage3D:bt,compressedTexSubImage2D:j,compressedTexSubImage3D:xt,scissor:Zt,viewport:Ht,reset:ge}}function Nu(i,t,e,n){let s=Wx(n);switch(e){case sd:return i*t;case od:return i*t;case ad:return i*t*2;case nh:return i*t/s.components*s.byteLength;case ih:return i*t/s.components*s.byteLength;case cd:return i*t*2/s.components*s.byteLength;case sh:return i*t*2/s.components*s.byteLength;case rd:return i*t*3/s.components*s.byteLength;case Xn:return i*t*4/s.components*s.byteLength;case rh:return i*t*4/s.components*s.byteLength;case qo:case Zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Jo:case $o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zc:case Hc:return Math.max(i,16)*Math.max(t,8)/4;case Fc:case Bc:return Math.max(i,8)*Math.max(t,8)/2;case kc:case Vc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Gc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Yc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case qc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Zc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Jc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case $c:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Kc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case jc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Qc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case el:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case nl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ko:case sl:case rl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ld:case ol:return Math.ceil(i/4)*Math.ceil(t/4)*8;case al:case cl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wx(i){switch(i){case xi:case ed:return{byteLength:1,components:1};case Br:case nd:case lo:return{byteLength:2,components:1};case th:case eh:return{byteLength:2,components:4};case rs:case Ql:case ti:return{byteLength:4,components:1};case id:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Xx(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pt,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,b){return p?new OffscreenCanvas(R,b):kr("canvas")}function _(R,b,k){let Z=1,tt=rt(R);if((tt.width>k||tt.height>k)&&(Z=k/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){let st=Math.floor(Z*tt.width),bt=Math.floor(Z*tt.height);u===void 0&&(u=x(st,bt));let j=b?x(st,bt):u;return j.width=st,j.height=bt,j.getContext("2d").drawImage(R,0,0,st,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+st+"x"+bt+")."),j}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),R;return R}function m(R){return R.generateMipmaps}function f(R){i.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,b,k,Z,tt=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let st=b;if(b===i.RED&&(k===i.FLOAT&&(st=i.R32F),k===i.HALF_FLOAT&&(st=i.R16F),k===i.UNSIGNED_BYTE&&(st=i.R8)),b===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(st=i.R8UI),k===i.UNSIGNED_SHORT&&(st=i.R16UI),k===i.UNSIGNED_INT&&(st=i.R32UI),k===i.BYTE&&(st=i.R8I),k===i.SHORT&&(st=i.R16I),k===i.INT&&(st=i.R32I)),b===i.RG&&(k===i.FLOAT&&(st=i.RG32F),k===i.HALF_FLOAT&&(st=i.RG16F),k===i.UNSIGNED_BYTE&&(st=i.RG8)),b===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(st=i.RG8UI),k===i.UNSIGNED_SHORT&&(st=i.RG16UI),k===i.UNSIGNED_INT&&(st=i.RG32UI),k===i.BYTE&&(st=i.RG8I),k===i.SHORT&&(st=i.RG16I),k===i.INT&&(st=i.RG32I)),b===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(st=i.RGB8UI),k===i.UNSIGNED_SHORT&&(st=i.RGB16UI),k===i.UNSIGNED_INT&&(st=i.RGB32UI),k===i.BYTE&&(st=i.RGB8I),k===i.SHORT&&(st=i.RGB16I),k===i.INT&&(st=i.RGB32I)),b===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),k===i.UNSIGNED_INT&&(st=i.RGBA32UI),k===i.BYTE&&(st=i.RGBA8I),k===i.SHORT&&(st=i.RGBA16I),k===i.INT&&(st=i.RGBA32I)),b===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),b===i.RGBA){let bt=tt?Ea:_e.getTransfer(Z);k===i.FLOAT&&(st=i.RGBA32F),k===i.HALF_FLOAT&&(st=i.RGBA16F),k===i.UNSIGNED_BYTE&&(st=bt===Ae?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function M(R,b){let k;return R?b===null||b===rs||b===Qs?k=i.DEPTH24_STENCIL8:b===ti?k=i.DEPTH32F_STENCIL8:b===Br&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===rs||b===Qs?k=i.DEPTH_COMPONENT24:b===ti?k=i.DEPTH_COMPONENT32F:b===Br&&(k=i.DEPTH_COMPONENT16),k}function B(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==dn&&R.minFilter!==Qn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function P(R){let b=R.target;b.removeEventListener("dispose",P),U(b),b.isVideoTexture&&h.delete(b)}function I(R){let b=R.target;b.removeEventListener("dispose",I),w(b)}function U(R){let b=n.get(R);if(b.__webglInit===void 0)return;let k=R.source,Z=d.get(k);if(Z){let tt=Z[b.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&T(R),Object.keys(Z).length===0&&d.delete(k)}n.remove(R)}function T(R){let b=n.get(R);i.deleteTexture(b.__webglTexture);let k=R.source,Z=d.get(k);delete Z[b.__cacheKey],o.memory.textures--}function w(R){let b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let tt=0;tt<b.__webglFramebuffer[Z].length;tt++)i.deleteFramebuffer(b.__webglFramebuffer[Z][tt]);else i.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)i.deleteFramebuffer(b.__webglFramebuffer[Z]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let k=R.textures;for(let Z=0,tt=k.length;Z<tt;Z++){let st=n.get(k[Z]);st.__webglTexture&&(i.deleteTexture(st.__webglTexture),o.memory.textures--),n.remove(k[Z])}n.remove(R)}let N=0;function F(){N=0}function z(){let R=N;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),N+=1,R}function q(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function V(R,b){let k=n.get(R);if(R.isVideoTexture&&$(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){let Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(k,R,b);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+b)}function J(R,b){let k=n.get(R);if(R.version>0&&k.__version!==R.version){at(k,R,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+b)}function ut(R,b){let k=n.get(R);if(R.version>0&&k.__version!==R.version){at(k,R,b);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+b)}function K(R,b){let k=n.get(R);if(R.version>0&&k.__version!==R.version){yt(k,R,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+b)}let _t={[zr]:i.REPEAT,[is]:i.CLAMP_TO_EDGE,[Oc]:i.MIRRORED_REPEAT},lt={[dn]:i.NEAREST,[Cf]:i.NEAREST_MIPMAP_NEAREST,[go]:i.NEAREST_MIPMAP_LINEAR,[Qn]:i.LINEAR,[Xa]:i.LINEAR_MIPMAP_NEAREST,[ss]:i.LINEAR_MIPMAP_LINEAR},It={[Lf]:i.NEVER,[Bf]:i.ALWAYS,[Uf]:i.LESS,[ud]:i.LEQUAL,[Nf]:i.EQUAL,[zf]:i.GEQUAL,[Of]:i.GREATER,[Ff]:i.NOTEQUAL};function ie(R,b){if(b.type===ti&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Qn||b.magFilter===Xa||b.magFilter===go||b.magFilter===ss||b.minFilter===Qn||b.minFilter===Xa||b.minFilter===go||b.minFilter===ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,_t[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,_t[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,_t[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,lt[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,lt[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,It[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===dn||b.minFilter!==go&&b.minFilter!==ss||b.type===ti&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Xt(R,b){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",P));let Z=b.source,tt=d.get(Z);tt===void 0&&(tt={},d.set(Z,tt));let st=q(b);if(st!==R.__cacheKey){tt[st]===void 0&&(tt[st]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),tt[st].usedTimes++;let bt=tt[R.__cacheKey];bt!==void 0&&(tt[R.__cacheKey].usedTimes--,bt.usedTimes===0&&T(b)),R.__cacheKey=st,R.__webglTexture=tt[st].texture}return k}function at(R,b,k){let Z=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=i.TEXTURE_3D);let tt=Xt(R,b),st=b.source;e.bindTexture(Z,R.__webglTexture,i.TEXTURE0+k);let bt=n.get(st);if(st.version!==bt.__version||tt===!0){e.activeTexture(i.TEXTURE0+k);let j=_e.getPrimaries(_e.workingColorSpace),xt=b.colorSpace===Li?null:_e.getPrimaries(b.colorSpace),Ut=b.colorSpace===Li||j===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let gt=_(b.image,!1,s.maxTextureSize);gt=dt(b,gt);let Dt=r.convert(b.format,b.colorSpace),Yt=r.convert(b.type),Zt=y(b.internalFormat,Dt,Yt,b.colorSpace,b.isVideoTexture);ie(Z,b);let Ht,de=b.mipmaps,se=b.isVideoTexture!==!0,ge=bt.__version===void 0||tt===!0,G=st.dataReady,At=B(b,gt);if(b.isDepthTexture)Zt=M(b.format===tr,b.type),ge&&(se?e.texStorage2D(i.TEXTURE_2D,1,Zt,gt.width,gt.height):e.texImage2D(i.TEXTURE_2D,0,Zt,gt.width,gt.height,0,Dt,Yt,null));else if(b.isDataTexture)if(de.length>0){se&&ge&&e.texStorage2D(i.TEXTURE_2D,At,Zt,de[0].width,de[0].height);for(let ot=0,ft=de.length;ot<ft;ot++)Ht=de[ot],se?G&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,Ht.width,Ht.height,Dt,Yt,Ht.data):e.texImage2D(i.TEXTURE_2D,ot,Zt,Ht.width,Ht.height,0,Dt,Yt,Ht.data);b.generateMipmaps=!1}else se?(ge&&e.texStorage2D(i.TEXTURE_2D,At,Zt,gt.width,gt.height),G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt.width,gt.height,Dt,Yt,gt.data)):e.texImage2D(i.TEXTURE_2D,0,Zt,gt.width,gt.height,0,Dt,Yt,gt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){se&&ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Zt,de[0].width,de[0].height,gt.depth);for(let ot=0,ft=de.length;ot<ft;ot++)if(Ht=de[ot],b.format!==Xn)if(Dt!==null)if(se){if(G)if(b.layerUpdates.size>0){let Lt=Nu(Ht.width,Ht.height,b.format,b.type);for(let Nt of b.layerUpdates){let Qt=Ht.data.subarray(Nt*Lt/Ht.data.BYTES_PER_ELEMENT,(Nt+1)*Lt/Ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,Nt,Ht.width,Ht.height,1,Dt,Qt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,Ht.width,Ht.height,gt.depth,Dt,Ht.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,Zt,Ht.width,Ht.height,gt.depth,0,Ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?G&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,Ht.width,Ht.height,gt.depth,Dt,Yt,Ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,Zt,Ht.width,Ht.height,gt.depth,0,Dt,Yt,Ht.data)}else{se&&ge&&e.texStorage2D(i.TEXTURE_2D,At,Zt,de[0].width,de[0].height);for(let ot=0,ft=de.length;ot<ft;ot++)Ht=de[ot],b.format!==Xn?Dt!==null?se?G&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,Ht.width,Ht.height,Dt,Ht.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,Zt,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?G&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,Ht.width,Ht.height,Dt,Yt,Ht.data):e.texImage2D(i.TEXTURE_2D,ot,Zt,Ht.width,Ht.height,0,Dt,Yt,Ht.data)}else if(b.isDataArrayTexture)if(se){if(ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Zt,gt.width,gt.height,gt.depth),G)if(b.layerUpdates.size>0){let ot=Nu(gt.width,gt.height,b.format,b.type);for(let ft of b.layerUpdates){let Lt=gt.data.subarray(ft*ot/gt.data.BYTES_PER_ELEMENT,(ft+1)*ot/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ft,gt.width,gt.height,1,Dt,Yt,Lt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,Dt,Yt,gt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Zt,gt.width,gt.height,gt.depth,0,Dt,Yt,gt.data);else if(b.isData3DTexture)se?(ge&&e.texStorage3D(i.TEXTURE_3D,At,Zt,gt.width,gt.height,gt.depth),G&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,Dt,Yt,gt.data)):e.texImage3D(i.TEXTURE_3D,0,Zt,gt.width,gt.height,gt.depth,0,Dt,Yt,gt.data);else if(b.isFramebufferTexture){if(ge)if(se)e.texStorage2D(i.TEXTURE_2D,At,Zt,gt.width,gt.height);else{let ot=gt.width,ft=gt.height;for(let Lt=0;Lt<At;Lt++)e.texImage2D(i.TEXTURE_2D,Lt,Zt,ot,ft,0,Dt,Yt,null),ot>>=1,ft>>=1}}else if(de.length>0){if(se&&ge){let ot=rt(de[0]);e.texStorage2D(i.TEXTURE_2D,At,Zt,ot.width,ot.height)}for(let ot=0,ft=de.length;ot<ft;ot++)Ht=de[ot],se?G&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,Dt,Yt,Ht):e.texImage2D(i.TEXTURE_2D,ot,Zt,Dt,Yt,Ht);b.generateMipmaps=!1}else if(se){if(ge){let ot=rt(gt);e.texStorage2D(i.TEXTURE_2D,At,Zt,ot.width,ot.height)}G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Dt,Yt,gt)}else e.texImage2D(i.TEXTURE_2D,0,Zt,Dt,Yt,gt);m(b)&&f(Z),bt.__version=st.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function yt(R,b,k){if(b.image.length!==6)return;let Z=Xt(R,b),tt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+k);let st=n.get(tt);if(tt.version!==st.__version||Z===!0){e.activeTexture(i.TEXTURE0+k);let bt=_e.getPrimaries(_e.workingColorSpace),j=b.colorSpace===Li?null:_e.getPrimaries(b.colorSpace),xt=b.colorSpace===Li||bt===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let Ut=b.isCompressedTexture||b.image[0].isCompressedTexture,gt=b.image[0]&&b.image[0].isDataTexture,Dt=[];for(let ft=0;ft<6;ft++)!Ut&&!gt?Dt[ft]=_(b.image[ft],!0,s.maxCubemapSize):Dt[ft]=gt?b.image[ft].image:b.image[ft],Dt[ft]=dt(b,Dt[ft]);let Yt=Dt[0],Zt=r.convert(b.format,b.colorSpace),Ht=r.convert(b.type),de=y(b.internalFormat,Zt,Ht,b.colorSpace),se=b.isVideoTexture!==!0,ge=st.__version===void 0||Z===!0,G=tt.dataReady,At=B(b,Yt);ie(i.TEXTURE_CUBE_MAP,b);let ot;if(Ut){se&&ge&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,de,Yt.width,Yt.height);for(let ft=0;ft<6;ft++){ot=Dt[ft].mipmaps;for(let Lt=0;Lt<ot.length;Lt++){let Nt=ot[Lt];b.format!==Xn?Zt!==null?se?G&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Lt,0,0,Nt.width,Nt.height,Zt,Nt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Lt,de,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Lt,0,0,Nt.width,Nt.height,Zt,Ht,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Lt,de,Nt.width,Nt.height,0,Zt,Ht,Nt.data)}}}else{if(ot=b.mipmaps,se&&ge){ot.length>0&&At++;let ft=rt(Dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,At,de,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(gt){se?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Dt[ft].width,Dt[ft].height,Zt,Ht,Dt[ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,de,Dt[ft].width,Dt[ft].height,0,Zt,Ht,Dt[ft].data);for(let Lt=0;Lt<ot.length;Lt++){let Qt=ot[Lt].image[ft].image;se?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Lt+1,0,0,Qt.width,Qt.height,Zt,Ht,Qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Lt+1,de,Qt.width,Qt.height,0,Zt,Ht,Qt.data)}}else{se?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Zt,Ht,Dt[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,de,Zt,Ht,Dt[ft]);for(let Lt=0;Lt<ot.length;Lt++){let Nt=ot[Lt];se?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Lt+1,0,0,Zt,Ht,Nt.image[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Lt+1,de,Zt,Ht,Nt.image[ft])}}}m(b)&&f(i.TEXTURE_CUBE_MAP),st.__version=tt.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Ft(R,b,k,Z,tt,st){let bt=r.convert(k.format,k.colorSpace),j=r.convert(k.type),xt=y(k.internalFormat,bt,j,k.colorSpace),Ut=n.get(b),gt=n.get(k);if(gt.__renderTarget=b,!Ut.__hasExternalTextures){let Dt=Math.max(1,b.width>>st),Yt=Math.max(1,b.height>>st);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,st,xt,Dt,Yt,b.depth,0,bt,j,null):e.texImage2D(tt,st,xt,Dt,Yt,0,bt,j,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Ot(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,tt,gt.__webglTexture,0,mt(b)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,tt,gt.__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(R,b,k){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){let Z=b.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,st=M(b.stencilBuffer,tt),bt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=mt(b);Ot(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,j,st,b.width,b.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,j,st,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,st,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,R)}else{let Z=b.textures;for(let tt=0;tt<Z.length;tt++){let st=Z[tt],bt=r.convert(st.format,st.colorSpace),j=r.convert(st.type),xt=y(st.internalFormat,bt,j,st.colorSpace),Ut=mt(b);k&&Ot(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,xt,b.width,b.height):Ot(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut,xt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,xt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Kt(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(b.depthTexture);Z.__renderTarget=b,(!Z.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),V(b.depthTexture,0);let tt=Z.__webglTexture,st=mt(b);if(b.depthTexture.format===qs)Ot(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(b.depthTexture.format===tr)Ot(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function jt(R){let b=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let Z=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){let tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),b.__depthDisposeCallback=tt}b.__boundDepthTexture=Z}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Kt(b.__webglFramebuffer,R)}else if(k){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=i.createRenderbuffer(),Mt(b.__webglDepthbuffer[Z],R,!1);else{let tt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=b.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,st)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Mt(b.__webglDepthbuffer,R,!1);else{let Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(R,b,k){let Z=n.get(R);b!==void 0&&Ft(Z.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&jt(R)}function he(R){let b=R.texture,k=n.get(R),Z=n.get(b);R.addEventListener("dispose",I);let tt=R.textures,st=R.isWebGLCubeRenderTarget===!0,bt=tt.length>1;if(bt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=b.version,o.memory.textures++),st){k.__webglFramebuffer=[];for(let j=0;j<6;j++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[j]=[];for(let xt=0;xt<b.mipmaps.length;xt++)k.__webglFramebuffer[j][xt]=i.createFramebuffer()}else k.__webglFramebuffer[j]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let j=0;j<b.mipmaps.length;j++)k.__webglFramebuffer[j]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(bt)for(let j=0,xt=tt.length;j<xt;j++){let Ut=n.get(tt[j]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Ot(R)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let j=0;j<tt.length;j++){let xt=tt[j];k.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[j]);let Ut=r.convert(xt.format,xt.colorSpace),gt=r.convert(xt.type),Dt=y(xt.internalFormat,Ut,gt,xt.colorSpace,R.isXRRenderTarget===!0),Yt=mt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,Dt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,k.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Mt(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),ie(i.TEXTURE_CUBE_MAP,b);for(let j=0;j<6;j++)if(b.mipmaps&&b.mipmaps.length>0)for(let xt=0;xt<b.mipmaps.length;xt++)Ft(k.__webglFramebuffer[j][xt],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xt);else Ft(k.__webglFramebuffer[j],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);m(b)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let j=0,xt=tt.length;j<xt;j++){let Ut=tt[j],gt=n.get(Ut);e.bindTexture(i.TEXTURE_2D,gt.__webglTexture),ie(i.TEXTURE_2D,Ut),Ft(k.__webglFramebuffer,R,Ut,i.COLOR_ATTACHMENT0+j,i.TEXTURE_2D,0),m(Ut)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let j=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(j=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,Z.__webglTexture),ie(j,b),b.mipmaps&&b.mipmaps.length>0)for(let xt=0;xt<b.mipmaps.length;xt++)Ft(k.__webglFramebuffer[xt],R,b,i.COLOR_ATTACHMENT0,j,xt);else Ft(k.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,j,0);m(b)&&f(j),e.unbindTexture()}R.depthBuffer&&jt(R)}function ht(R){let b=R.textures;for(let k=0,Z=b.length;k<Z;k++){let tt=b[k];if(m(tt)){let st=v(R),bt=n.get(tt).__webglTexture;e.bindTexture(st,bt),f(st),e.unbindTexture()}}}let vt=[],L=[];function Bt(R){if(R.samples>0){if(Ot(R)===!1){let b=R.textures,k=R.width,Z=R.height,tt=i.COLOR_BUFFER_BIT,st=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(R),j=b.length>1;if(j)for(let xt=0;xt<b.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let xt=0;xt<b.length;xt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[xt]);let Ut=n.get(b[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ut,0)}i.blitFramebuffer(0,0,k,Z,0,0,k,Z,tt,i.NEAREST),c===!0&&(vt.length=0,L.length=0,vt.push(i.COLOR_ATTACHMENT0+xt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(vt.push(st),L.push(st),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,vt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let xt=0;xt<b.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,bt.__webglColorRenderbuffer[xt]);let Ut=n.get(b[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,Ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function mt(R){return Math.min(s.maxSamples,R.samples)}function Ot(R){let b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function $(R){let b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function dt(R,b){let k=R.colorSpace,Z=R.format,tt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==ir&&k!==Li&&(_e.getTransfer(k)===Ae?(Z!==Xn||tt!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}function rt(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=F,this.setTexture2D=V,this.setTexture2DArray=J,this.setTexture3D=ut,this.setTextureCube=K,this.rebindTextures=ne,this.setupRenderTarget=he,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=Ot}function Yx(i,t){function e(n,s=Li){let r,o=_e.getTransfer(s);if(n===xi)return i.UNSIGNED_BYTE;if(n===th)return i.UNSIGNED_SHORT_4_4_4_4;if(n===eh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===id)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ed)return i.BYTE;if(n===nd)return i.SHORT;if(n===Br)return i.UNSIGNED_SHORT;if(n===Ql)return i.INT;if(n===rs)return i.UNSIGNED_INT;if(n===ti)return i.FLOAT;if(n===lo)return i.HALF_FLOAT;if(n===sd)return i.ALPHA;if(n===rd)return i.RGB;if(n===Xn)return i.RGBA;if(n===od)return i.LUMINANCE;if(n===ad)return i.LUMINANCE_ALPHA;if(n===qs)return i.DEPTH_COMPONENT;if(n===tr)return i.DEPTH_STENCIL;if(n===nh)return i.RED;if(n===ih)return i.RED_INTEGER;if(n===cd)return i.RG;if(n===sh)return i.RG_INTEGER;if(n===rh)return i.RGBA_INTEGER;if(n===qo||n===Zo||n===Jo||n===$o)if(o===Ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fc||n===zc||n===Bc||n===Hc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kc||n===Vc||n===Gc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===kc||n===Vc)return o===Ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Gc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wc||n===Xc||n===Yc||n===qc||n===Zc||n===Jc||n===$c||n===Kc||n===jc||n===Qc||n===tl||n===el||n===nl||n===il)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$c)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===el)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===il)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ko||n===sl||n===rl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ko)return o===Ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ld||n===ol||n===al||n===cl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ko)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===al)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Sl=class extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},$t=class extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},qx={type:"move"},Ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,x=.005;l.inputState.pinching&&d>p+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qx)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jx=`
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

}`,wl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Mn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ln({vertexShader:Zx,fragmentShader:Jx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ct(new Bi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Tl=class extends _i{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,x=null,_=new wl,m=e.getContextAttributes(),f=null,v=null,y=[],M=[],B=new pt,P=null,I=new je;I.viewport=new Re;let U=new je;U.viewport=new Re;let T=[I,U],w=new Sl,N=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let yt=y[at];return yt===void 0&&(yt=new Ur,y[at]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(at){let yt=y[at];return yt===void 0&&(yt=new Ur,y[at]=yt),yt.getGripSpace()},this.getHand=function(at){let yt=y[at];return yt===void 0&&(yt=new Ur,y[at]=yt),yt.getHandSpace()};function z(at){let yt=M.indexOf(at.inputSource);if(yt===-1)return;let Ft=y[yt];Ft!==void 0&&(Ft.update(at.inputSource,at.frame,l||o),Ft.dispatchEvent({type:at.type,data:at.inputSource}))}function q(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",V);for(let at=0;at<y.length;at++){let yt=M[at];yt!==null&&(M[at]=null,y[at].disconnect(yt))}N=null,F=null,_.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,v=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){r=at,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){a=at,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(at){l=at},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(at){if(s=at,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",q),s.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(B),s.renderState.layers===void 0){let yt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new yi(p.framebufferWidth,p.framebufferHeight,{format:Xn,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let yt=null,Ft=null,Mt=null;m.depth&&(Mt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=m.stencil?tr:qs,Ft=m.stencil?Qs:rs);let Kt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Kt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new yi(d.textureWidth,d.textureHeight,{format:Xn,type:xi,depthTexture:new ca(d.textureWidth,d.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Xt.setContext(s),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(at){for(let yt=0;yt<at.removed.length;yt++){let Ft=at.removed[yt],Mt=M.indexOf(Ft);Mt>=0&&(M[Mt]=null,y[Mt].disconnect(Ft))}for(let yt=0;yt<at.added.length;yt++){let Ft=at.added[yt],Mt=M.indexOf(Ft);if(Mt===-1){for(let jt=0;jt<y.length;jt++)if(jt>=M.length){M.push(Ft),Mt=jt;break}else if(M[jt]===null){M[jt]=Ft,Mt=jt;break}if(Mt===-1)break}let Kt=y[Mt];Kt&&Kt.connect(Ft)}}let J=new D,ut=new D;function K(at,yt,Ft){J.setFromMatrixPosition(yt.matrixWorld),ut.setFromMatrixPosition(Ft.matrixWorld);let Mt=J.distanceTo(ut),Kt=yt.projectionMatrix.elements,jt=Ft.projectionMatrix.elements,ne=Kt[14]/(Kt[10]-1),he=Kt[14]/(Kt[10]+1),ht=(Kt[9]+1)/Kt[5],vt=(Kt[9]-1)/Kt[5],L=(Kt[8]-1)/Kt[0],Bt=(jt[8]+1)/jt[0],mt=ne*L,Ot=ne*Bt,$=Mt/(-L+Bt),dt=$*-L;if(yt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(dt),at.translateZ($),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Kt[10]===-1)at.projectionMatrix.copy(yt.projectionMatrix),at.projectionMatrixInverse.copy(yt.projectionMatrixInverse);else{let rt=ne+$,R=he+$,b=mt-dt,k=Ot+(Mt-dt),Z=ht*he/R*rt,tt=vt*he/R*rt;at.projectionMatrix.makePerspective(b,k,Z,tt,rt,R),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function _t(at,yt){yt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(yt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(s===null)return;let yt=at.near,Ft=at.far;_.texture!==null&&(_.depthNear>0&&(yt=_.depthNear),_.depthFar>0&&(Ft=_.depthFar)),w.near=U.near=I.near=yt,w.far=U.far=I.far=Ft,(N!==w.near||F!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),N=w.near,F=w.far),I.layers.mask=at.layers.mask|2,U.layers.mask=at.layers.mask|4,w.layers.mask=I.layers.mask|U.layers.mask;let Mt=at.parent,Kt=w.cameras;_t(w,Mt);for(let jt=0;jt<Kt.length;jt++)_t(Kt[jt],Mt);Kt.length===2?K(w,I,U):w.projectionMatrix.copy(I.projectionMatrix),lt(at,w,Mt)};function lt(at,yt,Ft){Ft===null?at.matrix.copy(yt.matrixWorld):(at.matrix.copy(Ft.matrixWorld),at.matrix.invert(),at.matrix.multiply(yt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(yt.projectionMatrix),at.projectionMatrixInverse.copy(yt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=Hr*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(at){c=at,d!==null&&(d.fixedFoveation=at),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=at)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(w)};let It=null;function ie(at,yt){if(h=yt.getViewerPose(l||o),x=yt,h!==null){let Ft=h.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let Mt=!1;Ft.length!==w.cameras.length&&(w.cameras.length=0,Mt=!0);for(let jt=0;jt<Ft.length;jt++){let ne=Ft[jt],he=null;if(p!==null)he=p.getViewport(ne);else{let vt=u.getViewSubImage(d,ne);he=vt.viewport,jt===0&&(t.setRenderTargetTextures(v,vt.colorTexture,d.ignoreDepthValues?void 0:vt.depthStencilTexture),t.setRenderTarget(v))}let ht=T[jt];ht===void 0&&(ht=new je,ht.layers.enable(jt),ht.viewport=new Re,T[jt]=ht),ht.matrix.fromArray(ne.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(ne.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(he.x,he.y,he.width,he.height),jt===0&&(w.matrix.copy(ht.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Mt===!0&&w.cameras.push(ht)}let Kt=s.enabledFeatures;if(Kt&&Kt.includes("depth-sensing")){let jt=u.getDepthInformation(Ft[0]);jt&&jt.isValid&&jt.texture&&_.init(t,jt,s.renderState)}}for(let Ft=0;Ft<y.length;Ft++){let Mt=M[Ft],Kt=y[Ft];Mt!==null&&Kt!==void 0&&Kt.update(Mt,yt,l||o)}It&&It(at,yt),yt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:yt}),x=null}let Xt=new gd;Xt.setAnimationLoop(ie),this.setAnimationLoop=function(at){It=at},this.dispose=function(){}}},Qi=new ni,$x=new be;function Kx(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,md(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,v,y,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),x(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,v,y):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===un&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===un&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let v=t.get(f),y=v.envMap,M=v.envMapRotation;y&&(m.envMap.value=y,Qi.copy(M),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),m.envMapRotation.value.setFromMatrix4($x.makeRotationFromEuler(Qi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,v,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=y*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===un&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let v=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function jx(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){let M=y.program;n.uniformBlockBinding(v,M)}function l(v,y){let M=s[v.id];M===void 0&&(x(v),M=h(v),s[v.id]=M,v.addEventListener("dispose",m));let B=y.program;n.updateUBOMapping(v,B);let P=t.render.frame;r[v.id]!==P&&(d(v),r[v.id]=P)}function h(v){let y=u();v.__bindingPointIndex=y;let M=i.createBuffer(),B=v.__size,P=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,B,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let y=s[v.id],M=v.uniforms,B=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let P=0,I=M.length;P<I;P++){let U=Array.isArray(M[P])?M[P]:[M[P]];for(let T=0,w=U.length;T<w;T++){let N=U[T];if(p(N,P,T,B)===!0){let F=N.__offset,z=Array.isArray(N.value)?N.value:[N.value],q=0;for(let V=0;V<z.length;V++){let J=z[V],ut=_(J);typeof J=="number"||typeof J=="boolean"?(N.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,F+q,N.__data)):J.isMatrix3?(N.__data[0]=J.elements[0],N.__data[1]=J.elements[1],N.__data[2]=J.elements[2],N.__data[3]=0,N.__data[4]=J.elements[3],N.__data[5]=J.elements[4],N.__data[6]=J.elements[5],N.__data[7]=0,N.__data[8]=J.elements[6],N.__data[9]=J.elements[7],N.__data[10]=J.elements[8],N.__data[11]=0):(J.toArray(N.__data,q),q+=ut.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,y,M,B){let P=v.value,I=y+"_"+M;if(B[I]===void 0)return typeof P=="number"||typeof P=="boolean"?B[I]=P:B[I]=P.clone(),!0;{let U=B[I];if(typeof P=="number"||typeof P=="boolean"){if(U!==P)return B[I]=P,!0}else if(U.equals(P)===!1)return U.copy(P),!0}return!1}function x(v){let y=v.uniforms,M=0,B=16;for(let I=0,U=y.length;I<U;I++){let T=Array.isArray(y[I])?y[I]:[y[I]];for(let w=0,N=T.length;w<N;w++){let F=T[w],z=Array.isArray(F.value)?F.value:[F.value];for(let q=0,V=z.length;q<V;q++){let J=z[q],ut=_(J),K=M%B,_t=K%ut.boundary,lt=K+_t;M+=_t,lt!==0&&B-lt<ut.storage&&(M+=B-lt),F.__data=new Float32Array(ut.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=ut.storage}}}let P=M%B;return P>0&&(M+=B-P),v.__size=M,v.__cache={},this}function _(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){let y=v.target;y.removeEventListener("dispose",m);let M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}var Wr=class{constructor(t={}){let{canvas:e=np(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=new Uint32Array(4),_=new Int32Array(4),m=null,f=null,v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fe,this.toneMapping=Oi,this.toneMappingExposure=1;let M=this,B=!1,P=0,I=0,U=null,T=-1,w=null,N=new Re,F=new Re,z=null,q=new ee(0),V=0,J=e.width,ut=e.height,K=1,_t=null,lt=null,It=new Re(0,0,J,ut),ie=new Re(0,0,J,ut),Xt=!1,at=new Gr,yt=!1,Ft=!1,Mt=new be,Kt=new be,jt=new D,ne=new Re,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ht=!1;function vt(){return U===null?K:1}let L=n;function Bt(A,W){return e.getContext(A,W)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kl}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",Lt,!1),e.addEventListener("webglcontextcreationerror",Nt,!1),L===null){let W="webgl2";if(L=Bt(W,A),L===null)throw Bt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let mt,Ot,$,dt,rt,R,b,k,Z,tt,st,bt,j,xt,Ut,gt,Dt,Yt,Zt,Ht,de,se,ge,G;function At(){mt=new pg(L),mt.init(),se=new Yx(L,mt),Ot=new cg(L,mt,t,se),$=new Gx(L,mt),Ot.reverseDepthBuffer&&d&&$.buffers.depth.setReversed(!0),dt=new xg(L),rt=new Px,R=new Xx(L,mt,$,rt,Ot,se,dt),b=new hg(M),k=new fg(M),Z=new Sp(L),ge=new og(L,Z),tt=new mg(L,Z,dt,ge),st=new yg(L,tt,Z,dt),Zt=new _g(L,Ot,R),gt=new lg(rt),bt=new Cx(M,b,k,mt,Ot,ge,gt),j=new Kx(M,rt),xt=new Dx,Ut=new zx(mt),Yt=new rg(M,b,k,$,st,p,c),Dt=new kx(M,st,Ot),G=new jx(L,dt,Ot,$),Ht=new ag(L,mt,dt),de=new gg(L,mt,dt),dt.programs=bt.programs,M.capabilities=Ot,M.extensions=mt,M.properties=rt,M.renderLists=xt,M.shadowMap=Dt,M.state=$,M.info=dt}At();let ot=new Tl(M,L);this.xr=ot,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let A=mt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=mt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize(J,ut,!1))},this.getSize=function(A){return A.set(J,ut)},this.setSize=function(A,W,nt=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=A,ut=W,e.width=Math.floor(A*K),e.height=Math.floor(W*K),nt===!0&&(e.style.width=A+"px",e.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(J*K,ut*K).floor()},this.setDrawingBufferSize=function(A,W,nt){J=A,ut=W,K=nt,e.width=Math.floor(A*nt),e.height=Math.floor(W*nt),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(It)},this.setViewport=function(A,W,nt,it){A.isVector4?It.set(A.x,A.y,A.z,A.w):It.set(A,W,nt,it),$.viewport(N.copy(It).multiplyScalar(K).round())},this.getScissor=function(A){return A.copy(ie)},this.setScissor=function(A,W,nt,it){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,W,nt,it),$.scissor(F.copy(ie).multiplyScalar(K).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(A){$.setScissorTest(Xt=A)},this.setOpaqueSort=function(A){_t=A},this.setTransparentSort=function(A){lt=A},this.getClearColor=function(A){return A.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(A=!0,W=!0,nt=!0){let it=0;if(A){let X=!1;if(U!==null){let Et=U.texture.format;X=Et===rh||Et===sh||Et===ih}if(X){let Et=U.texture.type,Ct=Et===xi||Et===rs||Et===Br||Et===Qs||Et===th||Et===eh,kt=Yt.getClearColor(),Vt=Yt.getClearAlpha(),re=kt.r,Gt=kt.g,Wt=kt.b;Ct?(x[0]=re,x[1]=Gt,x[2]=Wt,x[3]=Vt,L.clearBufferuiv(L.COLOR,0,x)):(_[0]=re,_[1]=Gt,_[2]=Wt,_[3]=Vt,L.clearBufferiv(L.COLOR,0,_))}else it|=L.COLOR_BUFFER_BIT}W&&(it|=L.DEPTH_BUFFER_BIT),nt&&(it|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",Lt,!1),e.removeEventListener("webglcontextcreationerror",Nt,!1),xt.dispose(),Ut.dispose(),rt.dispose(),b.dispose(),k.dispose(),st.dispose(),ge.dispose(),G.dispose(),bt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",wi),ot.removeEventListener("sessionend",Yi),Bn.stop()};function ft(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;let A=dt.autoReset,W=Dt.enabled,nt=Dt.autoUpdate,it=Dt.needsUpdate,X=Dt.type;At(),dt.autoReset=A,Dt.enabled=W,Dt.autoUpdate=nt,Dt.needsUpdate=it,Dt.type=X}function Nt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Qt(A){let W=A.target;W.removeEventListener("dispose",Qt),Le(W)}function Le(A){Xe(A),rt.remove(A)}function Xe(A){let W=rt.get(A).programs;W!==void 0&&(W.forEach(function(nt){bt.releaseProgram(nt)}),A.isShaderMaterial&&bt.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,nt,it,X,Et){W===null&&(W=he);let Ct=X.isMesh&&X.matrixWorld.determinant()<0,kt=po(A,W,nt,it,X);$.setMaterial(it,Ct);let Vt=nt.index,re=1;if(it.wireframe===!0){if(Vt=tt.getWireframeAttribute(nt),Vt===void 0)return;re=2}let Gt=nt.drawRange,Wt=nt.attributes.position,pe=Gt.start*re,we=(Gt.start+Gt.count)*re;Et!==null&&(pe=Math.max(pe,Et.start*re),we=Math.min(we,(Et.start+Et.count)*re)),Vt!==null?(pe=Math.max(pe,0),we=Math.min(we,Vt.count)):Wt!=null&&(pe=Math.max(pe,0),we=Math.min(we,Wt.count));let Te=we-pe;if(Te<0||Te===1/0)return;ge.setup(X,it,kt,nt,Vt);let sn,xe=Ht;if(Vt!==null&&(sn=Z.get(Vt),xe=de,xe.setIndex(sn)),X.isMesh)it.wireframe===!0?($.setLineWidth(it.wireframeLinewidth*vt()),xe.setMode(L.LINES)):xe.setMode(L.TRIANGLES);else if(X.isLine){let Jt=it.linewidth;Jt===void 0&&(Jt=1),$.setLineWidth(Jt*vt()),X.isLineSegments?xe.setMode(L.LINES):X.isLineLoop?xe.setMode(L.LINE_LOOP):xe.setMode(L.LINE_STRIP)}else X.isPoints?xe.setMode(L.POINTS):X.isSprite&&xe.setMode(L.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)xe.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))xe.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Jt=X._multiDrawStarts,Pn=X._multiDrawCounts,ve=X._multiDrawCount,rn=Vt?Z.get(Vt).bytesPerElement:1,ci=rt.get(it).currentProgram.getUniforms();for(let xn=0;xn<ve;xn++)ci.setValue(L,"_gl_DrawID",xn),xe.render(Jt[xn]/rn,Pn[xn])}else if(X.isInstancedMesh)xe.renderInstances(pe,Te,X.count);else if(nt.isInstancedBufferGeometry){let Jt=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,Pn=Math.min(nt.instanceCount,Jt);xe.renderInstances(pe,Te,Pn)}else xe.render(pe,Te)};function ye(A,W,nt){A.transparent===!0&&A.side===hn&&A.forceSinglePass===!1?(A.side=un,A.needsUpdate=!0,Ti(A,W,nt),A.side=Fi,A.needsUpdate=!0,Ti(A,W,nt),A.side=hn):Ti(A,W,nt)}this.compile=function(A,W,nt=null){nt===null&&(nt=A),f=Ut.get(nt),f.init(W),y.push(f),nt.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(f.pushLight(X),X.castShadow&&f.pushShadow(X))}),A!==nt&&A.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(f.pushLight(X),X.castShadow&&f.pushShadow(X))}),f.setupLights();let it=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Et=X.material;if(Et)if(Array.isArray(Et))for(let Ct=0;Ct<Et.length;Ct++){let kt=Et[Ct];ye(kt,nt,X),it.add(kt)}else ye(Et,nt,X),it.add(Et)}),y.pop(),f=null,it},this.compileAsync=function(A,W,nt=null){let it=this.compile(A,W,nt);return new Promise(X=>{function Et(){if(it.forEach(function(Ct){rt.get(Ct).currentProgram.isReady()&&it.delete(Ct)}),it.size===0){X(A);return}setTimeout(Et,10)}mt.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let gn=null;function nn(A){gn&&gn(A)}function wi(){Bn.stop()}function Yi(){Bn.start()}let Bn=new gd;Bn.setAnimationLoop(nn),typeof self!="undefined"&&Bn.setContext(self),this.setAnimationLoop=function(A){gn=A,ot.setAnimationLoop(A),A===null?Bn.stop():Bn.start()},ot.addEventListener("sessionstart",wi),ot.addEventListener("sessionend",Yi),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(W),W=ot.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,W,U),f=Ut.get(A,y.length),f.init(W),y.push(f),Kt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),at.setFromProjectionMatrix(Kt),Ft=this.localClippingEnabled,yt=gt.init(this.clippingPlanes,Ft),m=xt.get(A,v.length),m.init(),v.push(m),ot.enabled===!0&&ot.isPresenting===!0){let Et=M.xr.getDepthSensingMesh();Et!==null&&Tn(Et,W,-1/0,M.sortObjects)}Tn(A,W,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(_t,lt),ht=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,ht&&Yt.addToRenderList(m,A),this.info.render.frame++,yt===!0&&gt.beginShadows();let nt=f.state.shadowsArray;Dt.render(nt,A,W),yt===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();let it=m.opaque,X=m.transmissive;if(f.setupLights(),W.isArrayCamera){let Et=W.cameras;if(X.length>0)for(let Ct=0,kt=Et.length;Ct<kt;Ct++){let Vt=Et[Ct];Zn(it,X,A,Vt)}ht&&Yt.render(A);for(let Ct=0,kt=Et.length;Ct<kt;Ct++){let Vt=Et[Ct];Ms(m,A,Vt,Vt.viewport)}}else X.length>0&&Zn(it,X,A,W),ht&&Yt.render(A),Ms(m,A,W);U!==null&&(R.updateMultisampleRenderTarget(U),R.updateRenderTargetMipmap(U)),A.isScene===!0&&A.onAfterRender(M,A,W),ge.resetDefaultState(),T=-1,w=null,y.pop(),y.length>0?(f=y[y.length-1],yt===!0&&gt.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Tn(A,W,nt,it){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)nt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||at.intersectsSprite(A)){it&&ne.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Kt);let Ct=st.update(A),kt=A.material;kt.visible&&m.push(A,Ct,kt,nt,ne.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||at.intersectsObject(A))){let Ct=st.update(A),kt=A.material;if(it&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ne.copy(A.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),ne.copy(Ct.boundingSphere.center)),ne.applyMatrix4(A.matrixWorld).applyMatrix4(Kt)),Array.isArray(kt)){let Vt=Ct.groups;for(let re=0,Gt=Vt.length;re<Gt;re++){let Wt=Vt[re],pe=kt[Wt.materialIndex];pe&&pe.visible&&m.push(A,Ct,pe,nt,ne.z,Wt)}}else kt.visible&&m.push(A,Ct,kt,nt,ne.z,null)}}let Et=A.children;for(let Ct=0,kt=Et.length;Ct<kt;Ct++)Tn(Et[Ct],W,nt,it)}function Ms(A,W,nt,it){let X=A.opaque,Et=A.transmissive,Ct=A.transparent;f.setupLightsView(nt),yt===!0&&gt.setGlobalState(M.clippingPlanes,nt),it&&$.viewport(N.copy(it)),X.length>0&&ai(X,W,nt),Et.length>0&&ai(Et,W,nt),Ct.length>0&&ai(Ct,W,nt),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function Zn(A,W,nt,it){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[it.id]===void 0&&(f.state.transmissionRenderTarget[it.id]=new yi(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?lo:xi,minFilter:ss,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_e.workingColorSpace}));let Et=f.state.transmissionRenderTarget[it.id],Ct=it.viewport||N;Et.setSize(Ct.z,Ct.w);let kt=M.getRenderTarget();M.setRenderTarget(Et),M.getClearColor(q),V=M.getClearAlpha(),V<1&&M.setClearColor(16777215,.5),M.clear(),ht&&Yt.render(nt);let Vt=M.toneMapping;M.toneMapping=Oi;let re=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),f.setupLightsView(it),yt===!0&&gt.setGlobalState(M.clippingPlanes,it),ai(A,nt,it),R.updateMultisampleRenderTarget(Et),R.updateRenderTargetMipmap(Et),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Wt=0,pe=W.length;Wt<pe;Wt++){let we=W[Wt],Te=we.object,sn=we.geometry,xe=we.material,Jt=we.group;if(xe.side===hn&&Te.layers.test(it.layers)){let Pn=xe.side;xe.side=un,xe.needsUpdate=!0,hr(Te,nt,it,sn,xe,Jt),xe.side=Pn,xe.needsUpdate=!0,Gt=!0}}Gt===!0&&(R.updateMultisampleRenderTarget(Et),R.updateRenderTargetMipmap(Et))}M.setRenderTarget(kt),M.setClearColor(q,V),re!==void 0&&(it.viewport=re),M.toneMapping=Vt}function ai(A,W,nt){let it=W.isScene===!0?W.overrideMaterial:null;for(let X=0,Et=A.length;X<Et;X++){let Ct=A[X],kt=Ct.object,Vt=Ct.geometry,re=it===null?Ct.material:it,Gt=Ct.group;kt.layers.test(nt.layers)&&hr(kt,W,nt,Vt,re,Gt)}}function hr(A,W,nt,it,X,Et){A.onBeforeRender(M,W,nt,it,X,Et),A.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(M,W,nt,it,A,Et),X.transparent===!0&&X.side===hn&&X.forceSinglePass===!1?(X.side=un,X.needsUpdate=!0,M.renderBufferDirect(nt,W,it,X,A,Et),X.side=Fi,X.needsUpdate=!0,M.renderBufferDirect(nt,W,it,X,A,Et),X.side=hn):M.renderBufferDirect(nt,W,it,X,A,Et),A.onAfterRender(M,W,nt,it,X,Et)}function Ti(A,W,nt){W.isScene!==!0&&(W=he);let it=rt.get(A),X=f.state.lights,Et=f.state.shadowsArray,Ct=X.state.version,kt=bt.getParameters(A,X.state,Et,W,nt),Vt=bt.getProgramCacheKey(kt),re=it.programs;it.environment=A.isMeshStandardMaterial?W.environment:null,it.fog=W.fog,it.envMap=(A.isMeshStandardMaterial?k:b).get(A.envMap||it.environment),it.envMapRotation=it.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,re===void 0&&(A.addEventListener("dispose",Qt),re=new Map,it.programs=re);let Gt=re.get(Vt);if(Gt!==void 0){if(it.currentProgram===Gt&&it.lightsStateVersion===Ct)return ur(A,kt),Gt}else kt.uniforms=bt.getUniforms(A),A.onBeforeCompile(kt,M),Gt=bt.acquireProgram(kt,Vt),re.set(Vt,Gt),it.uniforms=kt.uniforms;let Wt=it.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Wt.clippingPlanes=gt.uniform),ur(A,kt),it.needsLights=fr(A),it.lightsStateVersion=Ct,it.needsLights&&(Wt.ambientLightColor.value=X.state.ambient,Wt.lightProbe.value=X.state.probe,Wt.directionalLights.value=X.state.directional,Wt.directionalLightShadows.value=X.state.directionalShadow,Wt.spotLights.value=X.state.spot,Wt.spotLightShadows.value=X.state.spotShadow,Wt.rectAreaLights.value=X.state.rectArea,Wt.ltc_1.value=X.state.rectAreaLTC1,Wt.ltc_2.value=X.state.rectAreaLTC2,Wt.pointLights.value=X.state.point,Wt.pointLightShadows.value=X.state.pointShadow,Wt.hemisphereLights.value=X.state.hemi,Wt.directionalShadowMap.value=X.state.directionalShadowMap,Wt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Wt.spotShadowMap.value=X.state.spotShadowMap,Wt.spotLightMatrix.value=X.state.spotLightMatrix,Wt.spotLightMap.value=X.state.spotLightMap,Wt.pointShadowMap.value=X.state.pointShadowMap,Wt.pointShadowMatrix.value=X.state.pointShadowMatrix),it.currentProgram=Gt,it.uniformsList=null,Gt}function qi(A){if(A.uniformsList===null){let W=A.currentProgram.getUniforms();A.uniformsList=Js.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function ur(A,W){let nt=rt.get(A);nt.outputColorSpace=W.outputColorSpace,nt.batching=W.batching,nt.batchingColor=W.batchingColor,nt.instancing=W.instancing,nt.instancingColor=W.instancingColor,nt.instancingMorph=W.instancingMorph,nt.skinning=W.skinning,nt.morphTargets=W.morphTargets,nt.morphNormals=W.morphNormals,nt.morphColors=W.morphColors,nt.morphTargetsCount=W.morphTargetsCount,nt.numClippingPlanes=W.numClippingPlanes,nt.numIntersection=W.numClipIntersection,nt.vertexAlphas=W.vertexAlphas,nt.vertexTangents=W.vertexTangents,nt.toneMapping=W.toneMapping}function po(A,W,nt,it,X){W.isScene!==!0&&(W=he),R.resetTextureUnits();let Et=W.fog,Ct=it.isMeshStandardMaterial?W.environment:null,kt=U===null?M.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ir,Vt=(it.isMeshStandardMaterial?k:b).get(it.envMap||Ct),re=it.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,Gt=!!nt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Wt=!!nt.morphAttributes.position,pe=!!nt.morphAttributes.normal,we=!!nt.morphAttributes.color,Te=Oi;it.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Te=M.toneMapping);let sn=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,xe=sn!==void 0?sn.length:0,Jt=rt.get(it),Pn=f.state.lights;if(yt===!0&&(Ft===!0||A!==w)){let on=A===w&&it.id===T;gt.setState(it,A,on)}let ve=!1;it.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Pn.state.version||Jt.outputColorSpace!==kt||X.isBatchedMesh&&Jt.batching===!1||!X.isBatchedMesh&&Jt.batching===!0||X.isBatchedMesh&&Jt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Jt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Jt.instancing===!1||!X.isInstancedMesh&&Jt.instancing===!0||X.isSkinnedMesh&&Jt.skinning===!1||!X.isSkinnedMesh&&Jt.skinning===!0||X.isInstancedMesh&&Jt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Jt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Jt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Jt.instancingMorph===!1&&X.morphTexture!==null||Jt.envMap!==Vt||it.fog===!0&&Jt.fog!==Et||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==gt.numPlanes||Jt.numIntersection!==gt.numIntersection)||Jt.vertexAlphas!==re||Jt.vertexTangents!==Gt||Jt.morphTargets!==Wt||Jt.morphNormals!==pe||Jt.morphColors!==we||Jt.toneMapping!==Te||Jt.morphTargetsCount!==xe)&&(ve=!0):(ve=!0,Jt.__version=it.version);let rn=Jt.currentProgram;ve===!0&&(rn=Ti(it,W,X));let ci=!1,xn=!1,Jn=!1,Me=rn.getUniforms(),_n=Jt.uniforms;if($.useProgram(rn.program)&&(ci=!0,xn=!0,Jn=!0),it.id!==T&&(T=it.id,xn=!0),ci||w!==A){$.buffers.depth.getReversed()?(Mt.copy(A.projectionMatrix),sp(Mt),rp(Mt),Me.setValue(L,"projectionMatrix",Mt)):Me.setValue(L,"projectionMatrix",A.projectionMatrix),Me.setValue(L,"viewMatrix",A.matrixWorldInverse);let $e=Me.map.cameraPosition;$e!==void 0&&$e.setValue(L,jt.setFromMatrixPosition(A.matrixWorld)),Ot.logarithmicDepthBuffer&&Me.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Me.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,xn=!0,Jn=!0)}if(X.isSkinnedMesh){Me.setOptional(L,X,"bindMatrix"),Me.setOptional(L,X,"bindMatrixInverse");let on=X.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Me.setValue(L,"boneTexture",on.boneTexture,R))}X.isBatchedMesh&&(Me.setOptional(L,X,"batchingTexture"),Me.setValue(L,"batchingTexture",X._matricesTexture,R),Me.setOptional(L,X,"batchingIdTexture"),Me.setValue(L,"batchingIdTexture",X._indirectTexture,R),Me.setOptional(L,X,"batchingColorTexture"),X._colorsTexture!==null&&Me.setValue(L,"batchingColorTexture",X._colorsTexture,R));let $n=nt.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&Zt.update(X,nt,rn),(xn||Jt.receiveShadow!==X.receiveShadow)&&(Jt.receiveShadow=X.receiveShadow,Me.setValue(L,"receiveShadow",X.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(_n.envMap.value=Vt,_n.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&W.environment!==null&&(_n.envMapIntensity.value=W.environmentIntensity),xn&&(Me.setValue(L,"toneMappingExposure",M.toneMappingExposure),Jt.needsLights&&dr(_n,Jn),Et&&it.fog===!0&&j.refreshFogUniforms(_n,Et),j.refreshMaterialUniforms(_n,it,K,ut,f.state.transmissionRenderTarget[A.id]),Js.upload(L,qi(Jt),_n,R)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Js.upload(L,qi(Jt),_n,R),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Me.setValue(L,"center",X.center),Me.setValue(L,"modelViewMatrix",X.modelViewMatrix),Me.setValue(L,"normalMatrix",X.normalMatrix),Me.setValue(L,"modelMatrix",X.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){let on=it.uniformsGroups;for(let $e=0,Kn=on.length;$e<Kn;$e++){let Es=on[$e];G.update(Es,rn),G.bind(Es,rn)}}return rn}function dr(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function fr(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(A,W,nt){rt.get(A.texture).__webglTexture=W,rt.get(A.depthTexture).__webglTexture=nt;let it=rt.get(A);it.__hasExternalTextures=!0,it.__autoAllocateDepthBuffer=nt===void 0,it.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){let nt=rt.get(A);nt.__webglFramebuffer=W,nt.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,nt=0){U=A,P=W,I=nt;let it=!0,X=null,Et=!1,Ct=!1;if(A){let Vt=rt.get(A);if(Vt.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(L.FRAMEBUFFER,null),it=!1;else if(Vt.__webglFramebuffer===void 0)R.setupRenderTarget(A);else if(Vt.__hasExternalTextures)R.rebindTextures(A,rt.get(A.texture).__webglTexture,rt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Wt=A.depthTexture;if(Vt.__boundDepthTexture!==Wt){if(Wt!==null&&rt.has(Wt)&&(A.width!==Wt.image.width||A.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(A)}}let re=A.texture;(re.isData3DTexture||re.isDataArrayTexture||re.isCompressedArrayTexture)&&(Ct=!0);let Gt=rt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Gt[W])?X=Gt[W][nt]:X=Gt[W],Et=!0):A.samples>0&&R.useMultisampledRTT(A)===!1?X=rt.get(A).__webglMultisampledFramebuffer:Array.isArray(Gt)?X=Gt[nt]:X=Gt,N.copy(A.viewport),F.copy(A.scissor),z=A.scissorTest}else N.copy(It).multiplyScalar(K).floor(),F.copy(ie).multiplyScalar(K).floor(),z=Xt;if($.bindFramebuffer(L.FRAMEBUFFER,X)&&it&&$.drawBuffers(A,X),$.viewport(N),$.scissor(F),$.setScissorTest(z),Et){let Vt=rt.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+W,Vt.__webglTexture,nt)}else if(Ct){let Vt=rt.get(A.texture),re=W||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Vt.__webglTexture,nt||0,re)}T=-1},this.readRenderTargetPixels=function(A,W,nt,it,X,Et,Ct){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=rt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(kt=kt[Ct]),kt){$.bindFramebuffer(L.FRAMEBUFFER,kt);try{let Vt=A.texture,re=Vt.format,Gt=Vt.type;if(!Ot.textureFormatReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-it&&nt>=0&&nt<=A.height-X&&L.readPixels(W,nt,it,X,se.convert(re),se.convert(Gt),Et)}finally{let Vt=U!==null?rt.get(U).__webglFramebuffer:null;$.bindFramebuffer(L.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(A,W,nt,it,X,Et,Ct){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=rt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(kt=kt[Ct]),kt){let Vt=A.texture,re=Vt.format,Gt=Vt.type;if(!Ot.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-it&&nt>=0&&nt<=A.height-X){$.bindFramebuffer(L.FRAMEBUFFER,kt);let Wt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Wt),L.bufferData(L.PIXEL_PACK_BUFFER,Et.byteLength,L.STREAM_READ),L.readPixels(W,nt,it,X,se.convert(re),se.convert(Gt),0);let pe=U!==null?rt.get(U).__webglFramebuffer:null;$.bindFramebuffer(L.FRAMEBUFFER,pe);let we=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await ip(L,we,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Wt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Et),L.deleteBuffer(Wt),L.deleteSync(we),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,nt=0){A.isTexture!==!0&&(Pr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);let it=Math.pow(2,-nt),X=Math.floor(A.image.width*it),Et=Math.floor(A.image.height*it),Ct=W!==null?W.x:0,kt=W!==null?W.y:0;R.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,nt,0,0,Ct,kt,X,Et),$.unbindTexture()},this.copyTextureToTexture=function(A,W,nt=null,it=null,X=0){A.isTexture!==!0&&(Pr("WebGLRenderer: copyTextureToTexture function signature has changed."),it=arguments[0]||null,A=arguments[1],W=arguments[2],X=arguments[3]||0,nt=null);let Et,Ct,kt,Vt,re,Gt,Wt,pe,we,Te=A.isCompressedTexture?A.mipmaps[X]:A.image;nt!==null?(Et=nt.max.x-nt.min.x,Ct=nt.max.y-nt.min.y,kt=nt.isBox3?nt.max.z-nt.min.z:1,Vt=nt.min.x,re=nt.min.y,Gt=nt.isBox3?nt.min.z:0):(Et=Te.width,Ct=Te.height,kt=Te.depth||1,Vt=0,re=0,Gt=0),it!==null?(Wt=it.x,pe=it.y,we=it.z):(Wt=0,pe=0,we=0);let sn=se.convert(W.format),xe=se.convert(W.type),Jt;W.isData3DTexture?(R.setTexture3D(W,0),Jt=L.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(R.setTexture2DArray(W,0),Jt=L.TEXTURE_2D_ARRAY):(R.setTexture2D(W,0),Jt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,W.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,W.unpackAlignment);let Pn=L.getParameter(L.UNPACK_ROW_LENGTH),ve=L.getParameter(L.UNPACK_IMAGE_HEIGHT),rn=L.getParameter(L.UNPACK_SKIP_PIXELS),ci=L.getParameter(L.UNPACK_SKIP_ROWS),xn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Te.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Te.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Vt),L.pixelStorei(L.UNPACK_SKIP_ROWS,re),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Gt);let Jn=A.isDataArrayTexture||A.isData3DTexture,Me=W.isDataArrayTexture||W.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let _n=rt.get(A),$n=rt.get(W),on=rt.get(_n.__renderTarget),$e=rt.get($n.__renderTarget);$.bindFramebuffer(L.READ_FRAMEBUFFER,on.__webglFramebuffer),$.bindFramebuffer(L.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let Kn=0;Kn<kt;Kn++)Jn&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,rt.get(A).__webglTexture,X,Gt+Kn),A.isDepthTexture?(Me&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,rt.get(W).__webglTexture,X,we+Kn),L.blitFramebuffer(Vt,re,Et,Ct,Wt,pe,Et,Ct,L.DEPTH_BUFFER_BIT,L.NEAREST)):Me?L.copyTexSubImage3D(Jt,X,Wt,pe,we+Kn,Vt,re,Et,Ct):L.copyTexSubImage2D(Jt,X,Wt,pe,we+Kn,Vt,re,Et,Ct);$.bindFramebuffer(L.READ_FRAMEBUFFER,null),$.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Me?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(Jt,X,Wt,pe,we,Et,Ct,kt,sn,xe,Te.data):W.isCompressedArrayTexture?L.compressedTexSubImage3D(Jt,X,Wt,pe,we,Et,Ct,kt,sn,Te.data):L.texSubImage3D(Jt,X,Wt,pe,we,Et,Ct,kt,sn,xe,Te):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,X,Wt,pe,Et,Ct,sn,xe,Te.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,X,Wt,pe,Te.width,Te.height,sn,Te.data):L.texSubImage2D(L.TEXTURE_2D,X,Wt,pe,Et,Ct,sn,xe,Te);L.pixelStorei(L.UNPACK_ROW_LENGTH,Pn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ve),L.pixelStorei(L.UNPACK_SKIP_PIXELS,rn),L.pixelStorei(L.UNPACK_SKIP_ROWS,ci),L.pixelStorei(L.UNPACK_SKIP_IMAGES,xn),X===0&&W.generateMipmaps&&L.generateMipmap(Jt),$.unbindTexture()},this.copyTextureToTexture3D=function(A,W,nt=null,it=null,X=0){return A.isTexture!==!0&&(Pr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),nt=arguments[0]||null,it=arguments[1]||null,A=arguments[2],W=arguments[3],X=arguments[4]||0),Pr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,nt,it,X)},this.initRenderTarget=function(A){rt.get(A).__webglFramebuffer===void 0&&R.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),$.unbindTexture()},this.resetState=function(){P=0,I=0,U=null,$.reset(),ge.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=_e._getDrawingBufferColorSpace(t),e.unpackColorSpace=_e._getUnpackColorSpace()}};var la=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ee(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Xr=class extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ha=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=hl,this.updateRanges=[],this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},yn=new D,Yr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyMatrix4(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyNormalMatrix(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.transformDirection(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Wn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Wn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Wn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Wn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Hi=class extends Mi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Bs,Sr=new D,Hs=new D,ks=new D,Vs=new pt,wr=new pt,Md=new be,Fo=new D,Tr=new D,zo=new D,Ou=new pt,yc=new pt,Fu=new pt,as=class extends Ve{constructor(t=new Hi){if(super(),this.isSprite=!0,this.type="Sprite",Bs===void 0){Bs=new Ie;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ha(e,5);Bs.setIndex([0,1,2,0,2,3]),Bs.setAttribute("position",new Yr(n,3,0,!1)),Bs.setAttribute("uv",new Yr(n,2,3,!1))}this.geometry=Bs,this.material=t,this.center=new pt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hs.setFromMatrixScale(this.matrixWorld),Md.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ks.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hs.multiplyScalar(-ks.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Bo(Fo.set(-.5,-.5,0),ks,o,Hs,s,r),Bo(Tr.set(.5,-.5,0),ks,o,Hs,s,r),Bo(zo.set(.5,.5,0),ks,o,Hs,s,r),Ou.set(0,0),yc.set(1,0),Fu.set(1,1);let a=t.ray.intersectTriangle(Fo,Tr,zo,!1,Sr);if(a===null&&(Bo(Tr.set(-.5,.5,0),ks,o,Hs,s,r),yc.set(0,1),a=t.ray.intersectTriangle(Fo,zo,Tr,!1,Sr),a===null))return;let c=t.ray.origin.distanceTo(Sr);c<t.near||c>t.far||e.push({distance:c,point:Sr.clone(),uv:Ui.getInterpolation(Sr,Fo,Tr,zo,Ou,yc,Fu,new pt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Bo(i,t,e,n,s,r){Vs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(wr.x=r*Vs.x-s*Vs.y,wr.y=s*Vs.x+r*Vs.y):wr.copy(Vs),i.copy(t),i.x+=wr.x,i.y+=wr.y,i.applyMatrix4(Md)}var Al=class extends Mn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=dn,h=dn,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qr=class extends Qe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Gs=new be,zu=new be,Ho=[],Bu=new vi,Qx=new be,Ar=new ct,Rr=new zi,ki=class extends ct{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new qr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Qx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gs),Bu.copy(t.boundingBox).applyMatrix4(Gs),this.boundingBox.union(Bu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gs),Rr.copy(t.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(Rr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ar.geometry=this.geometry,Ar.material=this.material,Ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rr.copy(this.boundingSphere),Rr.applyMatrix4(n),t.ray.intersectsSphere(Rr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gs),zu.multiplyMatrices(n,Gs),Ar.matrixWorld=zu,Ar.raycast(t,Ho);for(let o=0,a=Ho.length;o<a;o++){let c=Ho[o];c.instanceId=r,c.object=this,e.push(c)}Ho.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new qr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Al(new Float32Array(s*this.count),s,this.count,nh,ti));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Vi=class extends Mi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Hu=new be,Rl=new os,ko=new zi,Vo=new D,cs=class extends Ve{constructor(t=new Ie,e=new Vi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(s),ko.radius+=r,t.ray.intersectsSphere(ko)===!1)return;Hu.copy(s).invert(),Rl.copy(t.ray).applyMatrix4(Hu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let x=d,_=p;x<_;x++){let m=l.getX(x);Vo.fromBufferAttribute(u,m),ku(Vo,m,c,s,t,e,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=d,_=p;x<_;x++)Vo.fromBufferAttribute(u,x),ku(Vo,x,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ku(i,t,e,n,s,r,o){let a=Rl.distanceSqToPoint(i);if(a<e){let c=new D;Rl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var En=class extends Mn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new pt:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new D,s=[],r=[],o=[],a=new D,c=new be;for(let p=0;p<=t;p++){let x=p/t;s[p]=this.getTangentAt(x,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(Ye(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,x))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Ye(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let x=1;x<=t;x++)r[x].applyMatrix4(c.makeRotationAxis(s[x],p*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Zr=class extends Un{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new pt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Cl=class extends Zr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ch(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Go=new D,vc=new ch,Mc=new ch,Ec=new ch,Jr=class extends Un{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Go.subVectors(s[0],s[1]).add(s[0]),l=Go);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Go.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Go),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,x=Math.pow(l.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),x<1e-4&&(x=_),m<1e-4&&(m=_),vc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,x,_,m),Mc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,x,_,m),Ec.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,x,_,m)}else this.curveType==="catmullrom"&&(vc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Mc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Ec.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(vc.calc(c),Mc.calc(c),Ec.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Vu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function t_(i,t){let e=1-i;return e*e*t}function e_(i,t){return 2*(1-i)*i*t}function n_(i,t){return i*i*t}function Nr(i,t,e,n){return t_(i,t)+e_(i,e)+n_(i,n)}function i_(i,t){let e=1-i;return e*e*e*t}function s_(i,t){let e=1-i;return 3*e*e*i*t}function r_(i,t){return 3*(1-i)*i*i*t}function o_(i,t){return i*i*i*t}function Or(i,t,e,n,s){return i_(i,t)+s_(i,e)+r_(i,n)+o_(i,s)}var ua=class extends Un{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Or(t,s.x,r.x,o.x,a.x),Or(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Pl=class extends Un{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Or(t,s.x,r.x,o.x,a.x),Or(t,s.y,r.y,o.y,a.y),Or(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},da=class extends Un{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Il=class extends Un{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fa=class extends Un{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Nr(t,s.x,r.x,o.x),Nr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Dl=class extends Un{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Nr(t,s.x,r.x,o.x),Nr(t,s.y,r.y,o.y),Nr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pa=class extends Un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Vu(a,c.x,l.x,h.x,u.x),Vu(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new pt().fromArray(s))}return this}},Ll=Object.freeze({__proto__:null,ArcCurve:Cl,CatmullRomCurve3:Jr,CubicBezierCurve:ua,CubicBezierCurve3:Pl,EllipseCurve:Zr,LineCurve:da,LineCurve3:Il,QuadraticBezierCurve:fa,QuadraticBezierCurve3:Dl,SplineCurve:pa}),Ul=class extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ll[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ll[s.type]().fromJSON(s))}return this}},ma=class extends Ul{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new da(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new fa(this.currentPoint.clone(),new pt(t,e),new pt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new ua(this.currentPoint.clone(),new pt(t,e),new pt(n,s),new pt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new pa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Zr(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ga=class i extends Ie{constructor(t=[new pt(0,-.5),new pt(.5,0),new pt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ye(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new D,d=new pt,p=new D,x=new D,_=new D,m=0,f=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,f=t[v+1].y-t[v].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[v+1].x-t[v].x,f=t[v+1].y-t[v].y,p.x=f*1,p.y=-m,p.z=f*0,x.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),c.push(p.x,p.y,p.z),_.copy(x)}for(let v=0;v<=e;v++){let y=n+v*h*s,M=Math.sin(y),B=Math.cos(y);for(let P=0;P<=t.length-1;P++){u.x=t[P].x*M,u.y=t[P].y,u.z=t[P].x*B,o.push(u.x,u.y,u.z),d.x=v/e,d.y=P/(t.length-1),a.push(d.x,d.y);let I=c[3*P+0]*M,U=c[3*P+1],T=c[3*P+0]*B;l.push(I,U,T)}}for(let v=0;v<e;v++)for(let y=0;y<t.length-1;y++){let M=y+v*t.length,B=M,P=M+t.length,I=M+t.length+1,U=M+1;r.push(B,P,U),r.push(I,U,P)}this.setIndex(r),this.setAttribute("position",new ae(o,3)),this.setAttribute("uv",new ae(a,2)),this.setAttribute("normal",new ae(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var ls=class i extends Ie{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new D,h=new pt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(a,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},fe=class i extends Ie{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],x=0,_=[],m=n/2,f=0;v(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ae(u,3)),this.setAttribute("normal",new ae(d,3)),this.setAttribute("uv",new ae(p,2));function v(){let M=new D,B=new D,P=0,I=(e-t)/n;for(let U=0;U<=r;U++){let T=[],w=U/r,N=w*(e-t)+t;for(let F=0;F<=s;F++){let z=F/s,q=z*c+a,V=Math.sin(q),J=Math.cos(q);B.x=N*V,B.y=-w*n+m,B.z=N*J,u.push(B.x,B.y,B.z),M.set(V,I,J).normalize(),d.push(M.x,M.y,M.z),p.push(z,1-w),T.push(x++)}_.push(T)}for(let U=0;U<s;U++)for(let T=0;T<r;T++){let w=_[T][U],N=_[T+1][U],F=_[T+1][U+1],z=_[T][U+1];(t>0||T!==0)&&(h.push(w,N,z),P+=3),(e>0||T!==r-1)&&(h.push(N,F,z),P+=3)}l.addGroup(f,P,0),f+=P}function y(M){let B=x,P=new pt,I=new D,U=0,T=M===!0?t:e,w=M===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*w,0),d.push(0,w,0),p.push(.5,.5),x++;let N=x;for(let F=0;F<=s;F++){let q=F/s*c+a,V=Math.cos(q),J=Math.sin(q);I.x=T*J,I.y=m*w,I.z=T*V,u.push(I.x,I.y,I.z),d.push(0,w,0),P.x=V*.5+.5,P.y=J*.5*w+.5,p.push(P.x,P.y),x++}for(let F=0;F<s;F++){let z=B+F,q=N+F;M===!0?h.push(q,q+1,z):h.push(q+1,q,z),U+=3}l.addGroup(f,U,M===!0?1:2),f+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ei=class i extends fe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Nl=class i extends Ie{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ae(r,3)),this.setAttribute("normal",new ae(r.slice(),3)),this.setAttribute("uv",new ae(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let y=new D,M=new D,B=new D;for(let P=0;P<e.length;P+=3)p(e[P+0],y),p(e[P+1],M),p(e[P+2],B),c(y,M,B,v)}function c(v,y,M,B){let P=B+1,I=[];for(let U=0;U<=P;U++){I[U]=[];let T=v.clone().lerp(M,U/P),w=y.clone().lerp(M,U/P),N=P-U;for(let F=0;F<=N;F++)F===0&&U===P?I[U][F]=T:I[U][F]=T.clone().lerp(w,F/N)}for(let U=0;U<P;U++)for(let T=0;T<2*(P-U)-1;T++){let w=Math.floor(T/2);T%2===0?(d(I[U][w+1]),d(I[U+1][w]),d(I[U][w])):(d(I[U][w+1]),d(I[U+1][w+1]),d(I[U+1][w]))}}function l(v){let y=new D;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(v),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function h(){let v=new D;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];let M=m(v)/2/Math.PI+.5,B=f(v)/Math.PI+.5;o.push(M,1-B)}x(),u()}function u(){for(let v=0;v<o.length;v+=6){let y=o[v+0],M=o[v+2],B=o[v+4],P=Math.max(y,M,B),I=Math.min(y,M,B);P>.9&&I<.1&&(y<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),B<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function p(v,y){let M=v*3;y.x=t[M+0],y.y=t[M+1],y.z=t[M+2]}function x(){let v=new D,y=new D,M=new D,B=new D,P=new pt,I=new pt,U=new pt;for(let T=0,w=0;T<r.length;T+=9,w+=6){v.set(r[T+0],r[T+1],r[T+2]),y.set(r[T+3],r[T+4],r[T+5]),M.set(r[T+6],r[T+7],r[T+8]),P.set(o[w+0],o[w+1]),I.set(o[w+2],o[w+3]),U.set(o[w+4],o[w+5]),B.copy(v).add(y).add(M).divideScalar(3);let N=m(B);_(P,w+0,v,N),_(I,w+2,y,N),_(U,w+4,M,N)}}function _(v,y,M,B){B<0&&v.x===1&&(o[y]=v.x-1),M.x===0&&M.z===0&&(o[y]=B/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Gi=class extends ma{constructor(t){super(t),this.uuid=ei(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new ma().fromJSON(s))}return this}},a_={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Ed(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,p;if(n&&(r=d_(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let x=e;x<s;x+=e)u=i[x],d=i[x+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return $r(r,o,e,a,c,p,0),o}};function Ed(i,t,e,n,s){let r,o;if(s===b_(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Gu(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Gu(r,i[r],i[r+1],o);return o&&Sa(o,o.next)&&(jr(o),o=o.next),o}function hs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Sa(e,e.next)||ze(e.prev,e,e.next)===0)){if(jr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function $r(i,t,e,n,s,r,o){if(!i)return;!o&&r&&x_(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?l_(i,n,s,r):c_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),jr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=h_(hs(i),t,e),$r(i,t,e,n,s,r,2)):o===2&&u_(i,t,e,n,s,r):$r(hs(i),t,e,n,s,r,1);break}}}function c_(i){let t=i.prev,e=i,n=i.next;if(ze(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l,x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=d&&x.y>=u&&x.y<=p&&Xs(s,a,r,c,o,l,x.x,x.y)&&ze(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function l_(i,t,e,n){let s=i.prev,r=i,o=i.next;if(ze(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,p=a<c?a<l?a:l:c<l?c:l,x=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,f=Ol(p,x,t,e,n),v=Ol(_,m,t,e,n),y=i.prevZ,M=i.nextZ;for(;y&&y.z>=f&&M&&M.z<=v;){if(y.x>=p&&y.x<=_&&y.y>=x&&y.y<=m&&y!==s&&y!==o&&Xs(a,h,c,u,l,d,y.x,y.y)&&ze(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=p&&M.x<=_&&M.y>=x&&M.y<=m&&M!==s&&M!==o&&Xs(a,h,c,u,l,d,M.x,M.y)&&ze(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=_&&y.y>=x&&y.y<=m&&y!==s&&y!==o&&Xs(a,h,c,u,l,d,y.x,y.y)&&ze(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=v;){if(M.x>=p&&M.x<=_&&M.y>=x&&M.y<=m&&M!==s&&M!==o&&Xs(a,h,c,u,l,d,M.x,M.y)&&ze(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function h_(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Sa(s,r)&&bd(s,n,n.next,r)&&Kr(s,r)&&Kr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),jr(n),jr(n.next),n=i=r),n=n.next}while(n!==i);return hs(n)}function u_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&v_(o,a)){let c=Sd(o,a);o=hs(o,o.next),c=hs(c,c.next),$r(o,t,e,n,s,r,0),$r(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function d_(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Ed(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(y_(l));for(s.sort(f_),r=0;r<s.length;r++)e=p_(s[r],e);return e}function f_(i,t){return i.x-t.x}function p_(i,t){let e=m_(i,t);if(!e)return t;let n=Sd(e,i);return hs(n,n.next),hs(e,e.next)}function m_(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Xs(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Kr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&g_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function g_(i,t){return ze(i.prev,i,t.prev)<0&&ze(t.next,i,i.next)<0}function x_(i,t,e,n){let s=i;do s.z===0&&(s.z=Ol(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,__(s)}function __(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Ol(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function y_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Xs(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function v_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!M_(i,t)&&(Kr(i,t)&&Kr(t,i)&&E_(i,t)&&(ze(i.prev,i,t.prev)||ze(i,t.prev,t))||Sa(i,t)&&ze(i.prev,i,i.next)>0&&ze(t.prev,t,t.next)>0)}function ze(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Sa(i,t){return i.x===t.x&&i.y===t.y}function bd(i,t,e,n){let s=Xo(ze(i,t,e)),r=Xo(ze(i,t,n)),o=Xo(ze(e,n,i)),a=Xo(ze(e,n,t));return!!(s!==r&&o!==a||s===0&&Wo(i,e,t)||r===0&&Wo(i,n,t)||o===0&&Wo(e,i,n)||a===0&&Wo(e,t,n))}function Wo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Xo(i){return i>0?1:i<0?-1:0}function M_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&bd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Kr(i,t){return ze(i.prev,i,i.next)<0?ze(i,t,i.next)>=0&&ze(i,i.prev,t)>=0:ze(i,t,i.prev)<0||ze(i,i.next,t)<0}function E_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Sd(i,t){let e=new Fl(i.i,i.x,i.y),n=new Fl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Gu(i,t,e,n){let s=new Fl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function jr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Fl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function b_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Fr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Wu(t),Xu(n,t);let o=t.length;e.forEach(Wu);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Xu(n,e[c]);let a=a_.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Wu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Xu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Wi=class i extends Ie{constructor(t=new Gi([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new ae(s,3)),this.setAttribute("uv",new ae(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:S_,y,M=!1,B,P,I,U;f&&(y=f.getSpacedPoints(h),M=!0,d=!1,B=f.computeFrenetFrames(h,!1),P=new D,I=new D,U=new D),d||(m=0,p=0,x=0,_=0);let T=a.extractPoints(l),w=T.shape,N=T.holes;if(!Fr.isClockWise(w)){w=w.reverse();for(let ht=0,vt=N.length;ht<vt;ht++){let L=N[ht];Fr.isClockWise(L)&&(N[ht]=L.reverse())}}let z=Fr.triangulateShape(w,N),q=w;for(let ht=0,vt=N.length;ht<vt;ht++){let L=N[ht];w=w.concat(L)}function V(ht,vt,L){return vt||console.error("THREE.ExtrudeGeometry: vec does not exist"),ht.clone().addScaledVector(vt,L)}let J=w.length,ut=z.length;function K(ht,vt,L){let Bt,mt,Ot,$=ht.x-vt.x,dt=ht.y-vt.y,rt=L.x-ht.x,R=L.y-ht.y,b=$*$+dt*dt,k=$*R-dt*rt;if(Math.abs(k)>Number.EPSILON){let Z=Math.sqrt(b),tt=Math.sqrt(rt*rt+R*R),st=vt.x-dt/Z,bt=vt.y+$/Z,j=L.x-R/tt,xt=L.y+rt/tt,Ut=((j-st)*R-(xt-bt)*rt)/($*R-dt*rt);Bt=st+$*Ut-ht.x,mt=bt+dt*Ut-ht.y;let gt=Bt*Bt+mt*mt;if(gt<=2)return new pt(Bt,mt);Ot=Math.sqrt(gt/2)}else{let Z=!1;$>Number.EPSILON?rt>Number.EPSILON&&(Z=!0):$<-Number.EPSILON?rt<-Number.EPSILON&&(Z=!0):Math.sign(dt)===Math.sign(R)&&(Z=!0),Z?(Bt=-dt,mt=$,Ot=Math.sqrt(b)):(Bt=$,mt=dt,Ot=Math.sqrt(b/2))}return new pt(Bt/Ot,mt/Ot)}let _t=[];for(let ht=0,vt=q.length,L=vt-1,Bt=ht+1;ht<vt;ht++,L++,Bt++)L===vt&&(L=0),Bt===vt&&(Bt=0),_t[ht]=K(q[ht],q[L],q[Bt]);let lt=[],It,ie=_t.concat();for(let ht=0,vt=N.length;ht<vt;ht++){let L=N[ht];It=[];for(let Bt=0,mt=L.length,Ot=mt-1,$=Bt+1;Bt<mt;Bt++,Ot++,$++)Ot===mt&&(Ot=0),$===mt&&($=0),It[Bt]=K(L[Bt],L[Ot],L[$]);lt.push(It),ie=ie.concat(It)}for(let ht=0;ht<m;ht++){let vt=ht/m,L=p*Math.cos(vt*Math.PI/2),Bt=x*Math.sin(vt*Math.PI/2)+_;for(let mt=0,Ot=q.length;mt<Ot;mt++){let $=V(q[mt],_t[mt],Bt);Mt($.x,$.y,-L)}for(let mt=0,Ot=N.length;mt<Ot;mt++){let $=N[mt];It=lt[mt];for(let dt=0,rt=$.length;dt<rt;dt++){let R=V($[dt],It[dt],Bt);Mt(R.x,R.y,-L)}}}let Xt=x+_;for(let ht=0;ht<J;ht++){let vt=d?V(w[ht],ie[ht],Xt):w[ht];M?(I.copy(B.normals[0]).multiplyScalar(vt.x),P.copy(B.binormals[0]).multiplyScalar(vt.y),U.copy(y[0]).add(I).add(P),Mt(U.x,U.y,U.z)):Mt(vt.x,vt.y,0)}for(let ht=1;ht<=h;ht++)for(let vt=0;vt<J;vt++){let L=d?V(w[vt],ie[vt],Xt):w[vt];M?(I.copy(B.normals[ht]).multiplyScalar(L.x),P.copy(B.binormals[ht]).multiplyScalar(L.y),U.copy(y[ht]).add(I).add(P),Mt(U.x,U.y,U.z)):Mt(L.x,L.y,u/h*ht)}for(let ht=m-1;ht>=0;ht--){let vt=ht/m,L=p*Math.cos(vt*Math.PI/2),Bt=x*Math.sin(vt*Math.PI/2)+_;for(let mt=0,Ot=q.length;mt<Ot;mt++){let $=V(q[mt],_t[mt],Bt);Mt($.x,$.y,u+L)}for(let mt=0,Ot=N.length;mt<Ot;mt++){let $=N[mt];It=lt[mt];for(let dt=0,rt=$.length;dt<rt;dt++){let R=V($[dt],It[dt],Bt);M?Mt(R.x,R.y+y[h-1].y,y[h-1].x+L):Mt(R.x,R.y,u+L)}}}at(),yt();function at(){let ht=s.length/3;if(d){let vt=0,L=J*vt;for(let Bt=0;Bt<ut;Bt++){let mt=z[Bt];Kt(mt[2]+L,mt[1]+L,mt[0]+L)}vt=h+m*2,L=J*vt;for(let Bt=0;Bt<ut;Bt++){let mt=z[Bt];Kt(mt[0]+L,mt[1]+L,mt[2]+L)}}else{for(let vt=0;vt<ut;vt++){let L=z[vt];Kt(L[2],L[1],L[0])}for(let vt=0;vt<ut;vt++){let L=z[vt];Kt(L[0]+J*h,L[1]+J*h,L[2]+J*h)}}n.addGroup(ht,s.length/3-ht,0)}function yt(){let ht=s.length/3,vt=0;Ft(q,vt),vt+=q.length;for(let L=0,Bt=N.length;L<Bt;L++){let mt=N[L];Ft(mt,vt),vt+=mt.length}n.addGroup(ht,s.length/3-ht,1)}function Ft(ht,vt){let L=ht.length;for(;--L>=0;){let Bt=L,mt=L-1;mt<0&&(mt=ht.length-1);for(let Ot=0,$=h+m*2;Ot<$;Ot++){let dt=J*Ot,rt=J*(Ot+1),R=vt+Bt+dt,b=vt+mt+dt,k=vt+mt+rt,Z=vt+Bt+rt;jt(R,b,k,Z)}}}function Mt(ht,vt,L){c.push(ht),c.push(vt),c.push(L)}function Kt(ht,vt,L){ne(ht),ne(vt),ne(L);let Bt=s.length/3,mt=v.generateTopUV(n,s,Bt-3,Bt-2,Bt-1);he(mt[0]),he(mt[1]),he(mt[2])}function jt(ht,vt,L,Bt){ne(ht),ne(vt),ne(Bt),ne(vt),ne(L),ne(Bt);let mt=s.length/3,Ot=v.generateSideWallUV(n,s,mt-6,mt-3,mt-2,mt-1);he(Ot[0]),he(Ot[1]),he(Ot[3]),he(Ot[1]),he(Ot[2]),he(Ot[3])}function ne(ht){s.push(c[ht*3+0]),s.push(c[ht*3+1]),s.push(c[ht*3+2])}function he(ht){r.push(ht.x),r.push(ht.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return w_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ll[s.type]().fromJSON(s)),new i(n,t.options)}},S_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new pt(r,o),new pt(a,c),new pt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],x=t[s*3+2],_=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new pt(o,1-c),new pt(l,1-u),new pt(d,1-x),new pt(_,1-f)]:[new pt(a,1-c),new pt(h,1-u),new pt(p,1-x),new pt(m,1-f)]}};function w_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Nn=class i extends Nl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Qr=class i extends Ie{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,d=(e-t)/s,p=new D,x=new pt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let f=r+m/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),x.x=(p.x/e+1)/2,x.y=(p.y/e+1)/2,h.push(x.x,x.y)}u+=d}for(let _=0;_<s;_++){let m=_*(n+1);for(let f=0;f<n;f++){let v=f+m,y=v,M=v+n+1,B=v+n+2,P=v+1;a.push(y,M,P),a.push(M,B,P)}}this.setIndex(a),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var De=class i extends Ie{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new D,d=new D,p=[],x=[],_=[],m=[];for(let f=0;f<=n;f++){let v=[],y=f/n,M=0;f===0&&o===0?M=.5/e:f===n&&c===Math.PI&&(M=-.5/e);for(let B=0;B<=e;B++){let P=B/e;u.x=-t*Math.cos(s+P*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+P*r)*Math.sin(o+y*a),x.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(P+M,1-y),v.push(l++)}h.push(v)}for(let f=0;f<n;f++)for(let v=0;v<e;v++){let y=h[f][v+1],M=h[f][v],B=h[f+1][v],P=h[f+1][v+1];(f!==0||o>0)&&p.push(y,M,P),(f!==n-1||c<Math.PI)&&p.push(M,B,P)}this.setIndex(p),this.setAttribute("position",new ae(x,3)),this.setAttribute("normal",new ae(_,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Xi=class i extends Ie{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new D,u=new D,d=new D;for(let p=0;p<=n;p++)for(let x=0;x<=s;x++){let _=x/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(x/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let x=1;x<=s;x++){let _=(s+1)*p+x-1,m=(s+1)*(p-1)+x-1,f=(s+1)*(p-1)+x,v=(s+1)*p+x;o.push(_,m,v),o.push(m,f,v)}this.setIndex(o),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var me=class extends Mi{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hd,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Yo(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function T_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var nr=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},zl=class extends nr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hh,endingEnd:Hh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case kh:r=t,a=2*e-n;break;case Vh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case kh:o=t,c=2*n-e;break;case Vh:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,x=(n-e)/(s-e),_=x*x,m=_*x,f=-d*m+2*d*_-d*x,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*x+1,y=(-1-p)*m+(1.5+p)*_+.5*x,M=p*m-p*_;for(let B=0;B!==a;++B)r[B]=f*o[h+B]+v*o[l+B]+y*o[c+B]+M*o[u+B];return r}},Bl=class extends nr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Hl=class extends nr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},qn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Yo(e,this.TimeBufferType),this.values=Yo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Yo(t.times,Array),values:Yo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Hl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Bl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new zl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case jo:e=this.InterpolantFactoryMethodDiscrete;break;case ll:e=this.InterpolantFactoryMethodLinear;break;case Ya:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jo;case this.InterpolantFactoryMethodLinear:return ll;case this.InterpolantFactoryMethodSmooth:return Ya}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&T_(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ya,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,d=u-n,p=u+n;for(let x=0;x!==n;++x){let _=e[u+x];if(_!==e[d+x]||_!==e[p+x]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=ll;var us=class extends qn{constructor(t,e,n){super(t,e,n)}};us.prototype.ValueTypeName="bool";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=jo;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var kl=class extends qn{};kl.prototype.ValueTypeName="color";var Vl=class extends qn{};Vl.prototype.ValueTypeName="number";var Gl=class extends nr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)Yn.slerpFlat(r,0,o,l-a,o,l,c);return r}},xa=class extends qn{InterpolantFactoryMethodLinear(t){return new Gl(this.times,this.values,this.getValueSize(),t)}};xa.prototype.ValueTypeName="quaternion";xa.prototype.InterpolantFactoryMethodSmooth=void 0;var ds=class extends qn{constructor(t,e,n){super(t,e,n)}};ds.prototype.ValueTypeName="string";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=jo;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var Wl=class extends qn{};Wl.prototype.ValueTypeName="vector";var Yu={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Xl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],x=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null}}},A_=new Xl,to=class{constructor(t){this.manager=t!==void 0?t:A_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};to.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yl=class extends to{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Yu.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=kr("img");function c(){h(),Yu.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var eo=class extends to{constructor(t){super(t)}load(t,e,n,s){let r=new Mn,o=new Yl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},no=class extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},io=class extends no{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ee(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},bc=new be,qu=new D,Zu=new D,_a=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gr,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;qu.setFromMatrixPosition(t.matrixWorld),e.position.copy(qu),Zu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zu),e.updateMatrixWorld(),bc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ju=new be,Cr=new D,Sc=new D,ql=class extends _a{constructor(){super(new je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new Re(2,1,1,1),new Re(0,1,1,1),new Re(3,1,1,1),new Re(1,1,1,1),new Re(3,0,1,1),new Re(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Cr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Cr),Sc.copy(n.position),Sc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Sc),n.updateMatrixWorld(),s.makeTranslation(-Cr.x,-Cr.y,-Cr.z),Ju.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ju)}},so=class extends no{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ql}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Zl=class extends _a{constructor(){super(new oa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ro=class extends no{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new Zl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var oo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$u(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=$u();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function $u(){return performance.now()}var lh="\\[\\]\\.:\\/",R_=new RegExp("["+lh+"]","g"),hh="[^"+lh+"]",C_="[^"+lh.replace("\\.","")+"]",P_=/((?:WC+[\/:])*)/.source.replace("WC",hh),I_=/(WCOD+)?/.source.replace("WCOD",C_),D_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hh),L_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hh),U_=new RegExp("^"+P_+I_+D_+L_+"$"),N_=["material","materials","bones","map"],Jl=class{constructor(t,e,n){let s=n||Ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ne=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(R_,"")}static parseTrackName(t){let e=U_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);N_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=Jl;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var by=new Float32Array(1);var Ku=new be,ao=class{constructor(t,e,n=0,s=1/0){this.ray=new os(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Vr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ku.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ku),this}intersectObject(t,e=!0,n=[]){return $l(t,this,n,e),n.sort(ju),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)$l(t[s],this,n,e);return n.sort(ju),n}};function ju(i,t){return i.distance-t.distance}function $l(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)$l(r[o],t,e,!0)}}var co=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ye(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ya=class extends _i{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kl);var wd={type:"change"},dh={type:"start"},Ad={type:"end"},wa=new os,Td=new Gn,F_=Math.cos(70*dd.DEG2RAD),Je=new D,An=2*Math.PI,Ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},uh=1e-6,Ta=class extends ya{constructor(t,e=null){super(t,e),this.state=Ce.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fs.ROTATE,MIDDLE:fs.DOLLY,RIGHT:fs.PAN},this.touches={ONE:ii.ROTATE,TWO:ii.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Yn,this._lastTargetPosition=new D,this._quat=new Yn().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new co,this._sphericalDelta=new co,this._scale=1,this._panOffset=new D,this._rotateStart=new pt,this._rotateEnd=new pt,this._rotateDelta=new pt,this._panStart=new pt,this._panEnd=new pt,this._panDelta=new pt,this._dollyStart=new pt,this._dollyEnd=new pt,this._dollyDelta=new pt,this._dollyDirection=new D,this._mouse=new pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=B_.bind(this),this._onPointerDown=z_.bind(this),this._onPointerUp=H_.bind(this),this._onContextMenu=q_.bind(this),this._onMouseWheel=G_.bind(this),this._onKeyDown=W_.bind(this),this._onTouchStart=X_.bind(this),this._onTouchMove=Y_.bind(this),this._onMouseDown=k_.bind(this),this._onMouseMove=V_.bind(this),this._interceptControlDown=Z_.bind(this),this._interceptControlUp=J_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wd),this.update(),this.state=Ce.NONE}update(t=null){let e=this.object.position;Je.copy(e).sub(this.target),Je.applyQuaternion(this._quat),this._spherical.setFromVector3(Je),this.autoRotate&&this.state===Ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=An:n>Math.PI&&(n-=An),s<-Math.PI?s+=An:s>Math.PI&&(s-=An),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Je.setFromSpherical(this._spherical),Je.applyQuaternion(this._quatInverse),e.copy(this.target).add(Je),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Je.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Je.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(wa.origin.copy(this.object.position),wa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(wa.direction))<F_?this.object.lookAt(this.target):(Td.setFromNormalAndCoplanarPoint(this.object.up,this.target),wa.intersectPlane(Td,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>uh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>uh||this._lastTargetPosition.distanceToSquared(this.target)>uh?(this.dispatchEvent(wd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?An/60*this.autoRotateSpeed*t:An/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Je.setFromMatrixColumn(e,0),Je.multiplyScalar(-t),this._panOffset.add(Je)}_panUp(t,e){this.screenSpacePanning===!0?Je.setFromMatrixColumn(e,1):(Je.setFromMatrixColumn(e,0),Je.crossVectors(this.object.up,Je)),Je.multiplyScalar(t),this._panOffset.add(Je)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Je.copy(s).sub(this.target);let r=Je.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(An*this._rotateDelta.x/e.clientHeight),this._rotateUp(An*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(An*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-An*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(An*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-An*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(An*this._rotateDelta.x/e.clientHeight),this._rotateUp(An*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new pt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function z_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function B_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function H_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ad),this.state=Ce.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function k_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case fs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ce.DOLLY;break;case fs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ce.ROTATE}break;case fs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ce.PAN}break;default:this.state=Ce.NONE}this.state!==Ce.NONE&&this.dispatchEvent(dh)}function V_(i){switch(this.state){case Ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function G_(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ce.NONE||(i.preventDefault(),this.dispatchEvent(dh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ad))}function W_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function X_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ii.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ce.TOUCH_ROTATE;break;case ii.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ce.TOUCH_PAN;break;default:this.state=Ce.NONE}break;case 2:switch(this.touches.TWO){case ii.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ce.TOUCH_DOLLY_PAN;break;case ii.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ce.TOUCH_DOLLY_ROTATE;break;default:this.state=Ce.NONE}break;default:this.state=Ce.NONE}this.state!==Ce.NONE&&this.dispatchEvent(dh)}function Y_(i){switch(this._trackPointer(i),this.state){case Ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ce.NONE}}function q_(i){this.enabled!==!1&&i.preventDefault()}function Z_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function J_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Aa(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Ie,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let p=i[d].index;for(let x=0;x<p.count;++x)u.push(p.getX(x)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Rd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let _=0;_<o[h].length;++_)p.push(o[h][_][d]);let x=Rd(p);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(x)}}return c}function Rd(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Qe(o,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let d=0,p=h.count;d<p;d++)for(let x=0;x<e;x++){let _=h.getComponent(d,x);a.setComponent(d+u,x,_)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var ho=new D;function On(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;ho.copy(t),ho[n]=0,ho.normalize();let l=.5*o/(o+a),h=1-ho.angleTo(i)/c;return Math.sign(ho[e])===1?h*l:a/(o+a)+l+l*(1-h)}var Ra=class extends Ge{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new D,c=new D,l=new D(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,x=new D,_=.5/s;for(let m=0,f=0;m<h.length;m+=3,f+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/p)){case 0:x.set(1,0,0),d[f+0]=On(x,c,"z","y",r,n),d[f+1]=1-On(x,c,"y","z",r,e);break;case 1:x.set(-1,0,0),d[f+0]=1-On(x,c,"z","y",r,n),d[f+1]=1-On(x,c,"y","z",r,e);break;case 2:x.set(0,1,0),d[f+0]=1-On(x,c,"x","z",r,t),d[f+1]=On(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),d[f+0]=1-On(x,c,"x","z",r,t),d[f+1]=1-On(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),d[f+0]=1-On(x,c,"x","y",r,t),d[f+1]=1-On(x,c,"y","x",r,e);break;case 5:x.set(0,0,-1),d[f+0]=On(x,c,"x","y",r,t),d[f+1]=1-On(x,c,"y","x",r,e);break}}};var $_={land:{W:320,H:236,houses:[[16,116],[52,116],[88,116],[124,116],[172,116],[208,116],[244,116],[16,150],[52,150],[192,23],[66,24],[88,150],[124,150],[16,186],[52,186],[88,186],[124,187],[180,152]],hall:[134,38],pond:[264,206],pondR:[8,4],hill:{x:160,y:46,w:216,h:74,r:12,height:3.2},ramp:{x:160,from:83,to:110.5},lot:{house:9,x0:172,y0:12,x1:258,y1:66,car:[226,54.4],swing:[186,40]},roads:[[8,110.5,312,110.5],[8,144.5,312,144.5],[8,180.5,206,180.5],[8,214.5,170,214.5],[46,110.5,46,214.5],[160,110.5,160,214.5],[64,70,258,70],[160,70,160,110.5]],river:[[292,30],[296,70],[292,110.5],[288,144.5],[282,175],[272,194]],mountains:[[-22,-32.5,5,11],[-8,-34.5,6,14],[8,-34.5,5.5,12],[22,-32,5,11],[33,-26,4.5,9]]},port:{W:200,H:360,houses:[[8,132],[8,184],[8,236],[8,288],[168,132],[168,184],[168,236],[168,288],[56,134],[132,51],[16,56],[88,134],[120,134],[56,186],[88,186],[120,186],[60,239],[116,239]],hall:[68,30],pond:[100,318],pondR:[6.5,3.6],hill:{x:100,y:52,w:184,h:96,r:12,height:3.2},ramp:{x:100,from:100,to:124.5},lot:{house:9,x0:110,y0:40,x1:186,y1:90,car:[166,81.6],swing:[122,66]},roads:[[44.5,124.5,155.5,124.5],[44.5,124.5,44.5,330],[155.5,124.5,155.5,312],[44.5,162.5,155.5,162.5],[44.5,214.5,155.5,214.5],[44.5,274.5,155.5,274.5],[16,94,186,94],[100,94,100,124.5]],river:[[206,24],[210,120],[206,230],[200,300],[170,330],[128,322]],mountains:[[-16,-48.5,4.5,10],[-2,-49.5,5,12],[12,-49,4.5,11],[24,-45.5,4,9]]}},Pe,We,bn,qt,Sn,tn,lr,an,Fn,fo,ar,wn,oi;function Fd(i){Pe=$_[i];let t=(o,a)=>[(o-Pe.W/2)/4,(a-Pe.H/2)/4];We=Pe.houses.map(([o,a])=>t(o+12,a+11)),bn=t(Pe.hall[0],Pe.hall[1]);let e=t(Pe.pond[0],Pe.pond[1]);qt={x:e[0],z:e[1],rx:Pe.pondR[0],rz:Pe.pondR[1]},Sn=Pe.roads.map(([o,a,c,l])=>t(o,a).concat(t(c,l)));let n=t(Pe.hill.x,Pe.hill.y);lr={x:n[0],z:n[1],hw:Pe.hill.w/8,hd:Pe.hill.h/8,r:Pe.hill.r/4,h:Pe.hill.height},an={x:t(Pe.ramp.x,0)[0],z0:t(0,Pe.ramp.from)[1],z1:t(0,Pe.ramp.to)[1],hw:1.1},Fn=Pe.river.map(([o,a])=>{let c=t(o,a);return{x:c[0],z:c[1]}}),fo=Pe.mountains.map(o=>o.slice());{let o=Fn[0],a=0,c=1e9;fo.forEach(([x,_],m)=>{let f=Math.hypot(x-o.x,_-o.z);f<c&&(c=f,a=m)});let l=fo[a],h=Fn[1].x-l[0],u=Fn[1].z-l[1],d=Math.hypot(h,u)||1;oi={i:a,x:l[0],z:l[1],r:l[2],h:l[3],dx:h/d,dz:u/d},Fn[0]={x:l[0]+oi.dx*(l[2]-.2),z:l[1]+oi.dz*(l[2]-.2)};let p=Fn[Fn.length-1];Math.hypot(p.x-qt.x,p.z-qt.z)<22&&Fn.push({x:qt.x+(p.x-qt.x)*.25,z:qt.z+(p.z-qt.z)*.25})}if(ar=We.map((o,a)=>Pe.faces&&Pe.faces[a]||0),wn=null,Pe.lot){let o=Pe.lot,a=t(o.x0,o.y0),c=t(o.x1,o.y1);wn={house:o.house,x0:a[0],z0:a[1],x1:c[0],z1:c[1],car:t(o.car[0],o.car[1]),swing:t(o.swing[0],o.swing[1])}}let s=Pe.W/8+11,r=Pe.H/8+11;tn={a:s,b:r,n:2.6,w:s*2,d:r*2}}function zd(i,t){let e=lr,n=Math.abs(i-e.x)-(e.hw-e.r),s=Math.abs(t-e.z)-(e.hd-e.r);return Math.hypot(Math.max(n,0),Math.max(s,0))+Math.min(Math.max(n,s),0)-e.r}var cr=(i,t)=>Math.abs(i-an.x)<an.hw&&t>=an.z0-.4&&t<=an.z1;function Be(i,t){return zd(i,t)<=0?lr.h:cr(i,t)?lr.h*Math.max(0,Math.min(1,1-(t-an.z0)/(an.z1-an.z0))):0}var Ca=(i,t,e)=>{let n=zd(i,t);return n>-.5-(e||0)&&n<.9+(e||0)&&!cr(i,t)};function _s(i,t){let e=1e9;for(let n=1;n<Fn.length;n++){let s=Fn[n-1],r=Fn[n],o=r.x-s.x,a=r.z-s.z,c=o*o+a*a,l=Math.max(0,Math.min(1,((i-s.x)*o+(t-s.z)*a)/(c||1)));e=Math.min(e,Math.hypot(i-(s.x+o*l),t-(s.z+a*l)))}return e}var Cd=(i,t,e)=>!!wn&&i>wn.x0-(e||0)&&i<wn.x1+(e||0)&&t>wn.z0-(e||0)&&t<wn.z1+(e||0),uo=2.6,si=uo/2;function Si(i,t){let e=tn,n=Math.abs(Math.cos(i)),s=Math.abs(Math.sin(i));return Math.pow(Math.pow(n/e.a,e.n)+Math.pow(s/e.b,e.n),-1/e.n)*(1+.035*Math.sin(3*i+.7)+.025*Math.sin(5*i+2.1)+.015*Math.sin(8*i))*(t||1)}function xs(i,t,e){return Math.hypot(i,t)<Si(Math.atan2(t,i))-(e||0)}function Pa(i,t){let e=new Gi;for(let n=0;n<=96;n++){let s=n/96*Math.PI*2,r=Si(s,i)-(t||0),o=Math.cos(s)*r,a=-Math.sin(s)*r;n===0?e.moveTo(o,a):e.lineTo(o,a)}return e}Fd("land");var ue={grass:12576420,grassSide:10474377,dirt:13214334,dirt2:11569768,road:15983293,wall:16774888,wall2:15785156,door:12882799,frame:15323828,trunk:11042910,leaf:[10147472,8834176,11460768],water:9425898,sand:15983549,lily:8701828,roof:{pink:16165309,peach:16368540,blue:10473444,lav:13219054,mint:10738109,yellow:16111752,hall:15834032},flower:[16758465,16777215,16375946,14273008,16763304]},fh=new Map;function Tt(i,t){let e=i+JSON.stringify(t||{});return fh.has(e)||fh.set(e,new me(Object.assign({color:i},t||{}))),fh.get(e)}var ph=new Map;function K_(i,t,e){let n=Math.min(i,t,e);if(n<.1)return new Ge(i,t,e);let s=i.toFixed(3)+","+t.toFixed(3)+","+e.toFixed(3);return ph.has(s)||ph.set(s,new Ra(i,t,e,2,Math.min(n*.28,.32))),ph.get(s)}function O(i,t,e,n,s=0,r=0,o=0,a){let c=new ct(K_(i,t,e),a&&a.isMaterial?a:Tt(n,a));return c.position.set(s,r,o),c.castShadow=!0,c.receiveShadow=!0,c}function en(i,t,e,n,s=0,r=0,o=0,a){let c=new ct(new Ge(i,t,e),a&&a.isMaterial?a:Tt(n,a));return c.position.set(s,r,o),c.castShadow=!0,c.receiveShadow=!0,c}function Oa(i){return()=>(i=i*1664525+1013904223>>>0,i/4294967296)}var zt=(i,t)=>i+Math.random()*(t-i),fn=(i,t,e)=>i+(t-i)*e,gs=(i,t,e=0)=>((i-qt.x)/(qt.rx+e))**2+((t-qt.z)/(qt.rz+e))**2<1;function Ia(i,t,e,n,s){let r=new Wi(i,s?{depth:t-.5,bevelEnabled:!0,bevelThickness:.25,bevelSize:.35,bevelSegments:5,curveSegments:6}:{depth:t,bevelEnabled:!1,curveSegments:6});s&&r.translate(0,0,.25),r.rotateX(-Math.PI/2);let o=new ct(r,Tt(e));return o.position.y=n,o.receiveShadow=!0,o}var Bd=new He({transparent:!0,opacity:0,depthWrite:!1}),Ha=[],xh=[];function ka(){let i=new me({color:12576498,emissive:16765562,emissiveIntensity:0});return Ha.push(i),i}function j_(i,t,e,n){let s=new Gi;s.moveTo(-i/2-.4,0),s.lineTo(i/2+.4,0),s.lineTo(0,e),s.lineTo(-i/2-.4,0);let r=new Wi(s,{depth:t+.5,bevelEnabled:!0,bevelThickness:.15,bevelSize:.14,bevelSegments:4,curveSegments:4});r.translate(0,0,-(t+.5)/2);let o=new ct(r,Tt(n));return o.castShadow=!0,o.receiveShadow=!0,o}function vs(i){let t=new Gi;t.moveTo(0,-.5),t.bezierCurveTo(-.9,.1,-.5,.75,0,.35),t.bezierCurveTo(.5,.75,.9,.1,0,-.5);let e=new Wi(t,{depth:.18,bevelEnabled:!1,curveSegments:10});return new ct(e,Tt(i,{emissive:i,emissiveIntensity:.25}))}function Pd(i,t){let e=new $t,n=!!(i&&i.floors===2),s=t?10:n?6:5.2,r=t?7:n?4.8:4.2,o=t?4.6:n?6.2:3.2,a=t?3.6:2.6,c=n?.3+1.95:.3+o*.6;e.add(O(s+.6,.3,r+.6,ue.wall2,0,.15,0)),e.add(O(s,o,r,ue.wall,0,.3+o/2,0));let l=j_(s,r,a,t?ue.roof.hall:ue.roof[i.roof]);l.position.y=.3+o,e.add(l);let h=t?1.9:1.05,u=t?2.8:2.15,d=new $t;d.position.set(-h/2,.3,r/2+.02),e.add(d),d.add(O(h,u,.12,ue.door,h/2,u/2,0)),d.add(O(.12,.12,.08,16375946,h-.25,u/2,.08)),e.add(O(h-.04,u-.04,.05,5916214,0,.3+u/2,r/2-.02)),e.userData.hinge=d,e.add(O(h+.8,.12,.8,ue.road,0,.06,r/2+.6));let p=ka();e.userData.wm=p;let x=t?[-3.6,-2,2,3.6]:[-1.6,1.6];if(x.forEach(f=>{e.add(O(1.1,1.1,.1,ue.frame,f,c,r/2+.01)),e.add(O(.85,.85,.12,0,f,c,r/2+.03,p))}),[-1,1].forEach(f=>e.add(O(.12,.85,.85,0,f*(s/2+.01),c,0,p))),n){let f=3.5999999999999996;e.add(O(s+.12,.16,r+.12,ue.wall2,0,f,0)),[-1,1].forEach(y=>e.add(O(.12,.85,.85,0,y*(s/2+.01),f+1.4,.6,p))),e.add(O(s-.6,.18,1.3,15785156,0,f+.05,r/2+.65));for(let y=0;y<=8;y++)e.add(O(.06,.8,.06,16777215,-(s-.8)/2+y*(s-.8)/8,f+.5,r/2+1.25));e.add(O(s-.6,.07,.08,16777215,0,f+.92,r/2+1.25)),[-1,1].forEach(y=>e.add(O(.07,.07,1.25,16777215,y*(s-.7)/2,f+.92,r/2+.65))),[-2.2,-1.75,1.85,2.3].forEach((y,M)=>{e.add(O(.32,.3,.32,[16368540,16165309][M%2],y,f+.3,r/2+.95));let B=new ct(new Nn(.24,2),Tt(ue.leaf[M%3],{}));B.position.set(y,f+.6,r/2+.95),B.castShadow=!0,e.add(B),e.add(O(.1,.1,.1,ue.flower[M%ue.flower.length],y+.08,f+.78,r/2+.98))}),e.add(O(2.3,2.3,.1,16777215,0,f+1.25,r/2+.01));let v=new ct(new Ge(2.1,2.1,.06),new me({color:12576498,transparent:!0,opacity:.55,emissive:16765562,emissiveIntensity:0}));v.position.set(0,f+1.25,r/2+.05),e.add(v),Ha.push(v.material),e.userData.wm2=v.material,e.add(O(.06,2.1,.1,16777215,0,f+1.25,r/2+.07))}if(t||(e.add(O(.6,1.4,.6,ue.wall2,s/4,.3+o+a*.55,-r/5)),e.userData.chimney=new D(s/4,.3+o+a*.55+1,-r/5),e.add(O(.8,.2,.8,14862765,s/4,.3+o+a*.55+.75,-r/5)),x.forEach(f=>{e.add(O(1.2,.25,.35,ue.door,f,c-.75,r/2+.2)),[-.35,0,.35].forEach((v,y)=>e.add(O(.22,.22,.22,ue.flower[y],f+v,c-.52,r/2+.22)))})),i&&i.heart){let f=vs(16744350);f.scale.setScalar(.9),f.material=new me({color:16744350,emissive:16732030,emissiveIntensity:.2}),f.position.set(0,.3+o+a*.42,r/2+.42),e.add(f),e.userData.heart=f}let _=null;if(t){[-1.8,1.8].forEach(M=>e.add(O(.35,o,.35,ue.wall2,M,.3+o/2,r/2+.25))),e.add(O(s+.4,.3,.9,ue.wall2,0,.3+o+.05,r/2+.1));let f=O(.12,3,.12,ue.trunk,0,.3+o+a+1.4,0);e.add(f);let v=O(1.4,.8,.06,16751536,.75,.3+o+a+2.4,0);e.add(v),e.userData.flag=v;let y=new me({color:16375946,emissive:16739179,emissiveIntensity:0});_=new ct(new fe(.25,.5,.6,10),y),_.position.set(0,.3+o+a*.42,r/2+.35),e.add(_),e.add(O(1.4,1.4,.1,ue.frame,0,.3+o+a*.42,r/2+.25))}e.userData.top=.3+o+a+(t?3.2:.6);let m=new ct(new Ge(s+.6,o+a+.3,r+.6),Bd);return m.position.y=(o+a+.3)/2,e.add(m),e.userData.pick=m,e.userData.bell=_,e.userData.doorZ=r/2+1.3,e}function _h(i,t,e){let n=document.createElement("canvas");n.width=t,n.height=e,i(n.getContext("2d"),t,e);let s=new En(n);return s.colorSpace=Fe,s.anisotropy=4,s}function bh(i,t,e,n,s,r){r=r||0,i.userData.wm=s,i.userData.top=n+.9,i.userData.size={cx:r,hw:t/2+.4,hd:e/2+.3};let o=new ct(new Ge(t+.6,n+.3,e+.6),Bd);return o.position.set(r,(n+.3)/2,0),i.add(o),i.userData.pick=o,i.userData.doorZ=e/2+1.3,i}function Sh(i,t,e,n,s){let r=new $t;r.position.set(-t/2,.3,n),i.add(r),r.add(O(t,e,.1,s,t/2,e/2,0)),r.add(O(.06,.5,.06,14278115,t-.2,e/2,.07)),i.add(O(t-.04,e-.04,.05,3814720,0,.3+e/2,n-.04)),i.userData.hinge=r}function Q_(){let i=new $t,t=6.4,e=5.2,n=3,s=2.8,r=ka();i.add(O(t+5.4,.25,e+.6,15328478,2.3,.12,0)),i.add(O(t,n,e,16513784,0,.25+n/2,0)),[-2.15,2.15].forEach(_=>{i.add(O(1.7,2.45,.08,3814720,_,.25+1.3,e/2+.01)),i.add(O(1.55,2.3,.1,0,_,.25+1.3,e/2+.03,r))}),Sh(i,1.15,2.3,e/2+.03,9067068),i.add(O(t+.3,.18,e+.3,4867664,0,.25+n+.09,0));let o=.25+n+.18,a=_h((_,m,f)=>{for(let v=0;v<m;v+=4)_.fillStyle=v%8?"#c99166":"#bb8358",_.fillRect(v,0,4,f)},64,16),c=new me({map:a}),l=new ct(new Ge(t-.6,s,e-.4),c);l.position.set(-.3,o+s/2,-.4),l.castShadow=!0,l.receiveShadow=!0,i.add(l),i.add(O(t-.3,.16,e-.1,4867664,-.3,o+s+.08,-.4));let h=e/2-.4+.01-.2;i.add(O(2.9,2.35,.08,3814720,-.3,o+1.2,h+.02));let u=new ct(new Ge(2.7,2.2,.06),new me({color:12576498,transparent:!0,opacity:.6,emissive:16765562,emissiveIntensity:0}));u.position.set(-.3,o+1.2,h+.06),i.add(u),Ha.push(u.material),i.add(O(.05,2.2,.08,3814720,-.3,o+1.2,h+.08)),i.add(O(t-.4,.14,1.5,15328478,-.2,o+.07,e/2+.55));let d=new ct(new Ge(t-.5,.75,.04),new me({color:14217722,transparent:!0,opacity:.45}));d.position.set(-.2,o+.52,e/2+1.28),i.add(d),i.add(O(t-.5,.05,.07,3814720,-.2,o+.92,e/2+1.28)),[-2.5,-1.95,1.75,2.3].forEach((_,m)=>{i.add(O(.34,.32,.34,[15921906,9080729][m%2],_,o+.3,e/2+.95));let f=new ct(new Nn(.26,2),Tt(ue.leaf[m%3],{}));f.position.set(_,o+.62,e/2+.95),f.castShadow=!0,i.add(f)});let p=vs(16744350);p.scale.setScalar(.55),p.material=new me({color:16744350,emissive:16732030,emissiveIntensity:.25}),p.position.set(-2.2,o+2.05,e/2-.55),i.add(p),i.userData.heart=p;let x=t/2+2.3;i.add(O(4.6,2.9,e,16513784,x,.25+1.45,0)),i.add(O(4.8,.16,e+.2,4867664,x,.25+2.98,0)),i.add(O(3.7,2.3,.08,5592926,x,.25+1.15,e/2+.02));for(let _=0;_<6;_++)i.add(O(3.7,.03,.1,7040630,x,.45+_*.38,e/2+.05));return i.add(O(.5,.05,.05,16777215,x+1.4,2.95,e/2+.12)),[-1,1].forEach(_=>i.add(O(.12,.85,.85,0,_*(t/2+.01)-(_>0,0),.25+1.6,-1.2,r))),i.userData.vip=!0,bh(i,t+4.6,e,o+s+.2,r,2.3)}function ty(){let i=new $t,t=9.2,e=6.6,n=3.8,s=ka();i.add(O(t+.6,.25,e+.6,15326447,0,.12,0)),i.add(O(t,n,e,14273008,0,.25+n/2,0)),i.add(O(t+.4,.3,e+.4,16165309,0,.25+n+.15,0)),[-2.8,2.8].forEach(o=>{i.add(O(2.6,2,.1,16777215,o,1.5,e/2+.01)),i.add(O(2.4,1.8,.12,0,o,1.5,e/2+.03,s))}),Sh(i,1.8,2.4,e/2+.03,15834032),[[-1.4,16773544],[0,16758465],[1.4,10934504]].forEach(([o,a])=>{let c=vs(a);c.scale.setScalar(.45),c.position.set(o,.25+n-.55,e/2+.02),i.add(c)});let r=new ct(new De(.55,20,14),Tt(16027569));return r.position.set(3.2,.25+n+2.2,-1.5),r.castShadow=!0,i.add(r),i.add(O(.18,1.6,.18,3814720,3.2,.25+n+1.2,-1.5)),i.add(O(1.6,.3,1.6,3814720,3.2,.25+n+.45,-1.5)),bh(i,t,e,n+2.4,s)}function ey(){let i=new $t,t=9.2,e=7,n=3.5,s=ka();i.add(O(t+.8,.22,e+.8,14605012,0,.11,0)),i.add(O(t,n,e,16513784,0,.22+n/2,0)),[[15895592,0],[3055195,.22],[14826299,.44]].forEach(([l,h])=>{i.add(O(t+.06,.2,e+.06,l,0,.22+n-.55-h,0))}),i.add(O(t+.5,.25,e+.5,15921906,0,.22+n+.12,0));let r=_h((l,h,u)=>{l.fillStyle="#d8f1fa",l.fillRect(0,0,h,u);let d=["#ffb6c1","#f5d888","#a3d9bd","#a6d8e8","#f9c39c","#d9c9f0"];for(let p=0;p<4;p++){l.fillStyle="#c9e7f2",l.fillRect(0,12+p*28,h,3);for(let x=0;x<26;x++)l.fillStyle=d[(x+p)%d.length],l.fillRect(6+x*10,15+p*28,7,10+x%3*3)}},256,128),o=new me({map:r,emissive:16773836,emissiveMap:r,emissiveIntensity:.1});[-2.65,2.65].forEach(l=>{i.add(O(3.4,2,.08,14605012,l,1.35,e/2+.01));let h=new ct(new Ge(3.2,1.85,.1),o);h.position.set(l,1.35,e/2+.03),i.add(h)}),Sh(i,1.7,2.3,e/2+.03,12576498);let a=_h((l,h,u)=>{l.fillStyle="#ffffff",l.fillRect(0,0,h,u),l.fillStyle="#2e9e5b",l.fillRect(10,18,108,16),l.fillStyle="#f28c28",l.fillRect(10,40,108,16),l.fillStyle="#e23b3b",l.font="bold 86px sans-serif",l.textAlign="center",l.fillText("7",64,98),l.font="bold 20px sans-serif",l.fillText("ELEVEn",64,122)},128,128),c=new ct(new Ge(1.5,1.5,.14),[Tt(16777215),Tt(16777215),Tt(16777215),Tt(16777215),new me({map:a}),Tt(16777215)]);return c.position.set(t/2-1.1,.22+n+1.05,e/2-.3),c.castShadow=!0,i.add(c),i.add(O(.12,.8,.12,14605012,t/2-1.1,.22+n+.35,e/2-.3)),[[15226446,-.5],[6131664,.45]].forEach(([l,h])=>{i.add(O(.8,1.8,.75,l,t/2+.45,1.12,e/2-1.2+h));let u=O(.04,.9,.55,0,t/2+.86,1.4,e/2-1.2+h,new me({color:16775126,emissive:16773808,emissiveIntensity:.25}));i.add(u)}),[-4,-3.2].forEach(l=>i.add(O(.5,.5,.5,15895592,l,.47,e/2+.9))),i.userData.alwaysLit=!0,bh(i,t,e,n+1.9,s)}function ny(){let i=new $t,t=2500653,e=14278115,n=5202805;i.add(O(1.9,1,4.4,t,0,.95,0)),i.add(O(1.75,.78,2.7,t,0,1.85,-.35)),[[-1,0],[1,0]].forEach(([o])=>i.add(O(.03,.55,2.4,n,o*.885,1.9,-.35))),i.add(O(1.6,.55,.03,n,0,1.9,1.01)),i.add(O(1.6,.55,.03,n,0,1.9,-1.71)),i.add(O(1.92,.06,4.42,e,0,1.46,0)),i.add(O(1.3,.35,.05,1776672,0,1.05,2.21));for(let o=-2;o<=2;o++)i.add(O(.03,.3,.06,e,o*.22,1.05,2.22));[-1,1].forEach(o=>{let a=new ct(new fe(.17,.17,.08,14),Tt(16775126,{emissive:16773808,emissiveIntensity:.35}));a.rotation.x=Math.PI/2,a.position.set(o*.72,1.12,2.22),i.add(a),i.add(O(.12,.12,.12,16754253,o*.95,1.5,1.95)),i.add(O(.22,.35,.05,14703183,o*.78,1,-2.22))}),i.add(O(1.94,.18,.2,1776672,0,.5,2.25)),i.add(O(1.94,.18,.2,1776672,0,.5,-2.25));let s=new ct(new fe(.4,.4,.24,16),Tt(1776672));s.rotation.x=Math.PI/2,s.position.set(0,1.15,-2.35),i.add(s);let r=new ct(new fe(.22,.22,.26,12),Tt(e));return r.rotation.x=Math.PI/2,r.position.set(0,1.15,-2.36),i.add(r),[[-.95,1.45],[.95,1.45],[-.95,-1.4],[.95,-1.4]].forEach(([o,a])=>{let c=new ct(new fe(.42,.42,.34,14),Tt(1776672));c.rotation.z=Math.PI/2,c.position.set(o,.42,a),c.castShadow=!0,i.add(c);let l=new ct(new fe(.22,.22,.36,10),Tt(e));l.rotation.z=Math.PI/2,l.position.set(o,.42,a),i.add(l)}),i.add(O(1.5,.05,2.2,3816514,0,2.27,-.35)),i}function iy(i,t){if(!wn)return{posts:[],blocks:[]};let e=wn,n={posts:[],blocks:[]},[s,r]=We[e.house],[o,a]=e.car,c=t===Math.PI?e.z0:e.z1,l=Be(s,r),h=[[s-1.2,s+1.2],[o-1.6,o+1.6]],u=(m,f)=>Math.abs(f-c)<.01&&h.some(([v,y])=>m>v&&m<y),d=(m,f,v,y)=>{let M=Math.hypot(v-m,y-f),B=Math.max(1,Math.round(M/1));for(let P=0;P<B;P++){let I=fn(m,v,(P+.5)/B),U=fn(f,y,(P+.5)/B);if(u(I,U))continue;let T=O(M/B+.02,.55,.22,16052716,I,l+.27,U);T.rotation.y=Math.atan2(v-m,y-f)+Math.PI/2,i.add(T);let w=O(M/B,.32,.3,8831614,I,l+.68,U);w.rotation.y=T.rotation.y,i.add(w),n.posts.push({x:I,z:U,r:.45})}};d(e.x0,e.z0,e.x1,e.z0),d(e.x1,e.z0,e.x1,e.z1),d(e.x1,e.z1,e.x0,e.z1),d(e.x0,e.z1,e.x0,e.z0),n.blocks.push({x:s+5.5,z:r,hw:2.5,hd:2.8});let p=Math.min(c,a)-1.5,x=Math.max(c,a)+.5;i.add(O(3.4,.05,Math.abs(x-p)+1.5,14144203,o,l+.025,(p+x)/2-.5));let _=ny();return _.position.set(o,l,a),_.rotation.y=t,i.add(_),n.blocks.push({x:o,z:a,hw:1.2,hd:2.4}),n.car=_,n.exit={x:o,z:c+(t===Math.PI?-1.6:1.6)},i.add(O(1.3,.05,Math.abs(r-c),15392719,s,l+.03,(r+c)/2)),n}var Hd=[16366031,16164288,16569313];function Id(i,t){let e=new $t,n=1.3+i()*.6;if(e.add(O(.5*n,1.6*n,.5*n,t?10121050:ue.trunk,0,.8*n,0)),t){let r=new ct(new ls(1.5*n,9),Tt(16503776));r.rotation.x=-Math.PI/2,r.position.y=.02,r.receiveShadow=!0,e.add(r)}return(t?[[0,2.2,0,1.35],[.8,1.9,.3,.9],[-.7,2,-.3,.95],[.1,3,.1,.85],[-.2,1.8,.8,.7]]:[[0,2.1,0,1.25],[.6,1.8,.3,.85],[-.5,1.9,-.2,.9],[.1,2.8,.1,.8]]).forEach(([r,o,a,c],l)=>{let h=new ct(new Nn(c*n,2),Tt(t?Hd[l%3]:ue.leaf[l%3],{}));h.position.set(r*n,o*n,a*n),h.castShadow=!0,h.receiveShadow=!0,e.add(h)}),e.rotation.y=i()*6.28,e}function sy(){let i=new $t;i.add(O(.16,2.2,.16,9206379,0,1.1,0));let t=new me({color:16774351,emissive:16765562,emissiveIntensity:0});return xh.push(t),i.add(O(.5,.5,.5,0,0,2.45,0,t)),i.add(O(.62,.12,.62,9206379,0,2.76,0)),i}var ry=new me({vertexColors:!0});function kd(i,t){let e=[];i.traverse(n=>{n.isMesh||e.push(n)}),e.forEach(n=>{let s=n.children.filter(c=>c.isMesh&&!(t&&t.includes(c))&&!c.material.transparent&&!c.material.map);if(s.length<2)return;let r=s.map(c=>{let l=c.geometry.clone();Object.keys(l.attributes).forEach(p=>{p!=="position"&&p!=="normal"&&l.deleteAttribute(p)}),l.index&&(l=l.toNonIndexed()),l.clearGroups(),c.updateMatrix(),l.applyMatrix4(c.matrix);let h=c.material.color,u=l.attributes.position.count,d=new Float32Array(u*3);for(let p=0;p<u;p++)d[p*3]=h.r,d[p*3+1]=h.g,d[p*3+2]=h.b;return l.setAttribute("color",new Qe(d,3)),l}),o=Aa(r,!1);if(r.forEach(c=>c.dispose()),!o)return;s.forEach(c=>n.remove(c));let a=new ct(o,ry);a.castShadow=!0,a.receiveShadow=!0,n.add(a)})}function Fa(i,t,e,n,s,r,o){let a=new $t;a.position.set(s,r,o);let c=O(i,t,e,n,0,-t/2,0);return a.add(c),a}var za=[{hair:5914688,skin:16768198,shirt:12166888,pants:7170698,style:"short"},{hair:3878703,skin:15976614,shirt:16368540,pants:8161960,style:"bun"},{hair:11039050,skin:16769744,shirt:10934504,pants:9075306,style:"cap",cap:8830934},{hair:3025462,skin:15580570,shirt:10738109,pants:6253178,style:"short"},{hair:2038564,skin:16768198,shirt:16758465,pants:9080760,style:"twin"},{hair:9067068,skin:16175024,shirt:16111752,pants:7170698,style:"cap",cap:15834032},{hair:4864570,skin:15317140,shirt:9417689,pants:5196378,style:"short",glasses:!0},{hair:13208410,skin:16769744,shirt:10147472,pants:8161960,style:"long"},{hair:3878703,skin:15976614,shirt:16773544,pants:9075306,style:"bun",glasses:!0},null,{hair:5914688,skin:15580570,shirt:14273008,pants:7170698,style:"long"},{hair:3025462,skin:16768198,shirt:16111752,pants:8161960,style:"bun"},{hair:9067068,skin:15976614,shirt:10473444,pants:6253178,style:"short",glasses:!0},{hair:3878703,skin:15317140,shirt:10738109,pants:7170698,style:"cap",cap:10738109},{hair:13208410,skin:16769744,shirt:13482478,pants:9080760,style:"twin"},{hair:2367010,skin:16175024,shirt:16368540,pants:8161960,style:"short"},{hair:5914688,skin:16768198,shirt:16758465,pants:7170698,style:"long"},{hair:2038564,skin:15580570,shirt:9226408,pants:5196378,style:"cap",cap:16165309},{hair:11039050,skin:16769744,shirt:16111752,pants:9075306,style:"bun"}],yh={her:{hair:3877418,skin:16768198,shirt:16758465,pants:16758465,style:"long",dress:16165309},him:{hair:2367010,skin:15778976,shirt:10473444,pants:6253194,style:"short"}},Dd=[{hair:3878703,skin:15976614,shirt:16103802,pants:7045032,style:"cap",cap:16111752},{hair:9067068,skin:16769744,shirt:16103802,pants:7045032,style:"cap",cap:16111752},{hair:2367010,skin:15317140,shirt:16103802,pants:7045032,style:"cap",cap:16111752}],Se=1.75/32,vh=12*Se;function rr(i,t){let e=new ee(i);return t&&(e.r=Math.min(1,e.r*t),e.g=Math.min(1,e.g*t),e.b=Math.min(1,e.b*t)),"#"+e.getHexString()}function Vd(i,t){let e=document.createElement("canvas");e.width=e.height=64;let n=e.getContext("2d"),s=(i.hair^i.shirt^i.skin)>>>0,r=()=>(s=s*1664525+1013904223>>>0,s/4294967296),o=(_,m,f,v,y,M)=>{for(let B=0;B<v;B++)for(let P=0;P<f;P++)n.fillStyle=rr(y,1+(r()-.5)*(M==null?.1:M)),n.fillRect(_+P,m+B,1,1)},a=(_,m,f)=>{n.fillStyle=typeof f=="string"?f:rr(f),n.fillRect(_,m,1,1)},c=5981750,l=i.skin,h=i.hair,u=i.shirt,d=i.pants,p=i.style==="long"||i.style==="twin"||i.dress;o(0,0,32,16,l,.06),o(8,0,8,8,h),o(24,8,8,p?8:6,h),[0,16].forEach(_=>{o(_,8,8,p?7:4,h),o(_+(_?6:0),12,2,p?4:2,h)}),o(8,8,8,2,h),a(8,10,h),a(15,10,h),a(9,10,h),i.style==="cap"&&(o(8,0,8,8,i.cap),o(8,8,8,2,i.cap),o(0,8,8,2,i.cap),o(16,8,8,2,i.cap),o(24,8,8,2,i.cap)),[[9,12],[13,12]].forEach(([_,m])=>{if(t){a(_,m+1,"#3a2e33"),a(_+1,m+1,"#3a2e33");return}a(_,m,"#ffffff"),a(_+1,m,"#3a2e33"),a(_,m+1,"#ffffff"),a(_+1,m+1,"#3a2e33")}),a(9,14,"#ffa3b5"),a(14,14,"#ffa3b5"),a(11,14,rr(l,.78)),a(12,14,rr(l,.78)),a(11,15,"#c9707c"),a(12,15,"#c9707c"),i.glasses&&([9,13].forEach(_=>{["#6b5a4e"].forEach(m=>{a(_-1,12,m),a(_+2,12,m),a(_-1,13,m),a(_+2,13,m)})}),a(11,12,"#6b5a4e"),a(12,12,"#6b5a4e")),o(16,16,24,16,u),o(20,16,8,4,u,.05),o(23,20,2,1,l),i.dress?(o(16,26,24,6,i.dress),o(20,25,8,1,rr(i.dress,.9)&&i.dress)):o(16,30,24,2,rr(d,.85)&&d,.05),o(20,22,8,1,u,.25),[[40,16],[32,48]].forEach(([_,m])=>{o(_,m,16,16,u),o(_,m+4+5,16,7,l,.06),o(_+4,m,4,4,u),o(_+8,m,4,4,l)}),[[0,16],[16,48]].forEach(([_,m])=>{o(_,m,16,16,i.dress?l:d),i.dress&&o(_,m+4,16,3,i.dress),o(_,m+4+10,16,2,c,.05),o(_+8,m,4,4,c)});let x=new En(e);return x.magFilter=dn,x.minFilter=dn,x.generateMipmaps=!1,x.colorSpace=Fe,x}function or(i,t,e,n,s){let r=new Ge(i*Se,t*Se,e*Se),o=64,a=(h,u,d,p,x)=>{let _=h/o,m=(h+d)/o,f=1-u/o,v=1-(u+p)/o;return x?[m,f,_,f,m,v,_,v]:[_,f,m,f,_,v,m,v]},c=[a(n+e+i,s+e,e,t),a(n,s+e,e,t),a(n+e,s,i,e),a(n+e+i,s,i,e,!0),a(n+e,s+e,i,t),a(n+2*e+i,s+e,i,t)],l=r.attributes.uv;return c.forEach((h,u)=>{for(let d=0;d<4;d++)l.setXY(u*4+d,h[d*2],h[d*2+1])}),l.needsUpdate=!0,r}function Gd(i){let t=new $t,e={},n=new me({map:Vd(i)});e.mat=n,e.look=i;let s=(c,l,h,u)=>{let d=new ct(c,n);return d.position.set(l,h,u),d.castShadow=!0,d.receiveShadow=!0,d},r=(c,l,h,u)=>{let d=new $t;return d.position.set(c,l,h),d.add(u),d};e.legR=r(-2*Se,12*Se,0,s(or(4,12,4,0,16),0,-6*Se,0)),t.add(e.legR),e.legL=r(2*Se,12*Se,0,s(or(4,12,4,16,48),0,-6*Se,0)),t.add(e.legL),e.body=s(or(8,12,4,16,16),0,18*Se,0),t.add(e.body),e.armR=r(-6*Se,23.5*Se,0,s(or(4,12,4,40,16),0,-5.5*Se,0)),t.add(e.armR),e.armL=r(6*Se,23.5*Se,0,s(or(4,12,4,32,48),0,-5.5*Se,0)),t.add(e.armL);let o=new $t;o.position.y=24*Se,t.add(o),e.head=o,o.add(s(or(8,8,8,0,0),0,4*Se,0));let a=(c,l,h,u,d,p,x)=>{let _=en(l*Se,h*Se,u*Se,c,d*Se,p*Se,x*Se);o.add(_)};if(i.style==="bun"&&a(i.hair,3,3,3,0,9.3,-2),i.style==="twin"&&(a(i.hair,2,4,2,-4.6,3.5,-1.5),a(i.hair,2,4,2,4.6,3.5,-1.5)),i.style==="cap"&&a(i.cap,8,1,3,0,6.5,5),i.style==="long"&&a(i.hair,8,5,1,0,-1.5,-4.5),i.dress){let c=en(9*Se,4*Se,5*Se,i.dress,0,12.5*Se,0);t.add(c)}return{g:t,parts:e}}function oy(){let i=new $t,t={},e=16236938,n=14720350,s=16774118;i.add(en(.46,.4,.8,e,0,.5,0)),[-.12,.1].forEach(l=>i.add(en(.48,.06,.12,n,0,.71,l))),i.add(en(.36,.2,.5,s,0,.34,.05)),t.legs=[[-.14,.28],[.14,.28],[-.14,-.28],[.14,-.28]].map(([l,h])=>{let u=Fa(.13,.32,.13,e,l,.34,h);return i.add(u),u});let r=new $t;r.position.set(0,.78,.48),i.add(r),t.head=r,r.add(en(.5,.42,.42,e,0,0,0)),r.add(en(.3,.16,.06,s,0,-.1,.21)),[-.15,.15].forEach(l=>{let h=new ct(new Ei(.11,.2,4),Tt(n));h.position.set(l,.29,-.02),h.rotation.y=Math.PI/4,r.add(h);let u=en(.08,.1,.03,4010032,l*.8,.04,.215);r.add(u),(t.eyes=t.eyes||[]).push(u)}),r.add(en(.07,.05,.03,16752048,0,-.04,.23));let o=new $t;o.position.set(0,.62,-.38),i.add(o),t.tail=o;let a=en(.1,.1,.4,e,0,.05,-.18);o.add(a);let c=new $t;return c.position.set(0,.05,-.36),o.add(c),c.add(en(.1,.4,.1,n,0,.18,0)),o.rotation.x=.5,i.scale.setScalar(.6),kd(i,t.eyes),{g:i,parts:t}}function ay(){let i=new $t,t={},e=16774374,n=13211247;i.add(en(.56,.5,.95,e,0,.62,0)),i.add(en(.58,.3,.4,n,0,.76,-.15)),t.legs=[[-.17,.33],[.17,.33],[-.17,-.33],[.17,-.33]].map(([o,a])=>{let c=Fa(.16,.4,.16,e,o,.42,a);return i.add(c),c});let s=new $t;s.position.set(0,.98,.55),i.add(s),t.head=s,s.add(en(.56,.52,.5,e,0,0,0)),s.add(en(.3,.24,.26,e,0,-.1,.34)),s.add(en(.13,.1,.06,4010032,0,-.02,.48)),s.add(en(.1,.12,.06,16748451,.05,-.24,.42)),[-.3,.3].forEach(o=>{let a=Fa(.12,.42,.26,n,o,.2,-.02);a.rotation.z=o>0?-.15:.15,s.add(a);let c=en(.08,.11,.03,4010032,o*.45,.08,.26);s.add(c),(t.eyes=t.eyes||[]).push(c)});let r=Fa(.12,.42,.12,n,0,.82,-.47);return r.rotation.x=-.9,i.add(r),t.tail=r,i.scale.setScalar(.62),kd(i,t.eyes),{g:i,parts:t}}function cy(i){let t=new $t,e=[16751211,16777215,16757575][i%3],n=new ct(new De(.28,10,8),Tt(e));if(n.scale.set(.7,.6,1.4),t.add(n),i%3===1){let r=new ct(new De(.16,8,6),Tt(16744272));r.position.set(0,.1,.05),r.scale.set(1,.6,1.4),t.add(r)}let s=new ct(new Ei(.22,.35,4),Tt(e===16777215?16751211:e));return s.rotation.x=Math.PI/2,s.position.z=-.5,t.add(s),t.userData.tail=s,t}function ly(i){let t=new $t,e=new me({color:i,side:hn}),n=()=>{let o=new ct(new Bi(.32,.26),e);o.position.x=.17;let a=new $t;return a.add(o),a},s=n(),r=n();return r.scale.x=-1,t.add(s,r),t.userData.l=s,t.userData.r=r,t}function Ld(){let i=new $t,t=10121050,e=15392715,n=3.5,s=new ct(new fe(.42,.62,n+1.4,16),Tt(t));s.position.set(-2,(n+1.4)/2,-.2),s.castShadow=!0,i.add(s),[[-.5,.3],[.45,-.25],[0,.5]].forEach(([u,d])=>{let p=new ct(new De(.4,12,8),Tt(t));p.scale.set(1.3,.45,.8),p.position.set(-2+u,.1,-.2+d),i.add(p)});let r=new ct(new fe(.16,.26,3.1,12),Tt(t));r.rotation.z=Math.PI/2-.12,r.position.set(-.5,n+.05,0),r.castShadow=!0,i.add(r);let o=new ct(new De(.17,10,8),Tt(t));o.position.set(1.05,n-.15,0),i.add(o),[[-2,n+2.4,-.4,1.8],[-.7,n+1.6,-.7,1.25],[-3,n+1.5,-.3,1.1],[-1.8,n+3.4,-.6,1.15],[.4,n+1.2,-.5,.8],[-2.5,n+1.3,.7,.95]].forEach(([u,d,p,x],_)=>{let m=new ct(new Nn(x,2),Tt(Hd[_%3]));m.position.set(u,d,p),m.castShadow=!0,i.add(m)});let a=new ct(new ls(2,20),Tt(16503776));a.rotation.x=-Math.PI/2,a.position.set(-1.6,.02,-.2),a.receiveShadow=!0,i.add(a);let c=new $t;c.position.set(0,n-.12,0),i.add(c);let l=n-.12-.56;[-.72,.72].forEach(u=>c.add(O(.04,l,.04,e,u,-l/2,0)));let h=O(1.65,.1,.5,16165309,0,-l,0);return c.add(h),i.userData.pivot=c,i.userData.seat=h,i}function Mh(i,t,e){let s=document.createElement("canvas"),r=s.getContext("2d");r.font="800 64px Nunito, sans-serif";let o=Math.ceil(r.measureText(i).width)+40;s.width=o,s.height=100;let a=s.getContext("2d");a.font="800 64px Nunito, sans-serif",a.textAlign="center",a.textBaseline="middle",a.lineJoin="round",a.lineWidth=14,a.strokeStyle="rgba(255,255,255,0.95)",a.strokeText(i,o/2,s.height/2),a.fillStyle=t,a.fillText(i,o/2,s.height/2);let c=new En(s);c.colorSpace=Fe;let l=new as(new Hi({map:c,transparent:!0,depthWrite:!1,depthTest:!1}));return l.scale.set(e*o/s.height,e,1),l.renderOrder=5,l}function Wd(i,t,e,n){let s=document.createElement("canvas");s.width=128,s.height=64;let r=s.getContext("2d");r.font="bold 48px sans-serif",r.fillStyle=t,r.textAlign="center",r.fillText(i,64,50);let o=new as(new Hi({map:new En(s),transparent:!0,depthWrite:!1}));return o.scale.set(e,n,1),o.visible=!1,o}function Ud(i,t){return Math.hypot((i-qt.x)/(qt.rx+4.4),(t-qt.z)/(qt.rz+4.4))<1&&!gs(i,t,.4)}function hy(i){let t=lr,e=new Gi,n=t.r,s=-t.hw+.6,r=t.hw-.6,o=-t.hd+.6,a=t.hd-.6,c=Math.max(.5,n-.6);e.moveTo(s+c,o),e.lineTo(r-c,o),e.quadraticCurveTo(r,o,r,o+c),e.lineTo(r,a-c),e.quadraticCurveTo(r,a,r-c,a),e.lineTo(s+c,a),e.quadraticCurveTo(s,a,s,a-c),e.lineTo(s,o+c),e.quadraticCurveTo(s,o,s+c,o);let l=new Wi(e,{depth:t.h-.8,bevelEnabled:!0,bevelThickness:.4,bevelSize:.6,bevelSegments:2,curveSegments:8});l.rotateX(-Math.PI/2),l.translate(t.x,.4,t.z);let h=new ct(l,[Tt(ue.grass),Tt(12888202,{})]);h.castShadow=!0,h.receiveShadow=!0,i.add(h);let u=new Wi(e,{depth:t.h*.42,bevelEnabled:!0,bevelThickness:.2,bevelSize:.75,bevelSegments:1,curveSegments:8});u.rotateX(-Math.PI/2),u.translate(t.x,.2,t.z);let d=new ct(u,Tt(11112312,{}));d.receiveShadow=!0,i.add(d);let p=Oa(17);for(let v=0;v<46;v++){let y=p()*Math.PI*2,M=t.x+Math.cos(y)*(t.hw+.4),B=t.z+Math.sin(y)*(t.hd+.4),P=t.x+Math.max(-t.hw,Math.min(t.hw,M-t.x)),I=t.z+Math.max(-t.hd,Math.min(t.hd,B-t.z));if(cr(P,I+.8)||Math.abs(P-an.x)<2.2&&I>t.z)continue;let U=new ct(new Nn(.35+p()*.6,2),Tt([12034959,10719872,13220006][v%3],{}));U.position.set(P,.2+p()*.3,I),U.rotation.set(p()*3,p()*3,p()*3),U.castShadow=!0,i.add(U)}let x=an.z1-an.z0,_=Math.hypot(x,t.h),m=Math.atan2(t.h,x),f=new $t;f.position.set(an.x,t.h/2,(an.z0+an.z1)/2),f.rotation.x=m,i.add(f),f.add(O(2.2,.3,_+.4,15126435,0,-.12,0));for(let v=0;v<_/.45;v++)f.add(O(2.2,.06,.08,13809807,0,.05,-_/2+.2+v*.45));[-1.15,1.15].forEach(v=>{f.add(O(.08,.08,_,12883572,v,.75,0));for(let y=0;y<=5;y++)f.add(O(.1,.8,.1,11569768,v,.38,-_/2+y*_/5))})}function Eh(i,t,e){let n=Math.min(1,Math.max(0,e/t));return i*Math.pow(1-Math.pow(n,1.7),.62)}function mh(i,t,e){let n=[];for(let s=0;s<=24;s++){let r=(e||0)+(t-(e||0))*s/24;n.push(new pt(Math.max(.001,Eh(i,t,r)),r))}return new ga(n,36)}function uy(i){fo.forEach(([t,e,n,s],r)=>{let o=new ct(mh(n,s),Tt([12825564,12035796,13352418][r%3],{}));o.position.set(t,-.2,e),o.castShadow=!0,o.receiveShadow=!0,i.add(o);let a=new ct(mh(n*1.03,s*1.005,s*.7),Tt(16777215,{}));a.position.set(t,-.2,e),i.add(a);let c=Math.atan2(oi&&oi.i===r?-oi.dz:.25,oi&&oi.i===r?-oi.dx:1)+.9,l=new ct(mh(n*.6,s*.5),Tt(13879014,{}));l.position.set(t+Math.cos(c)*n*.75,-.2,e+Math.sin(c)*n*.75),l.castShadow=!0,l.receiveShadow=!0,i.add(l)})}function dy(i){let t=new Jr(Fn.map(f=>new D(f.x,0,f.z))),e=90,n=t.getSpacedPoints(e),s=(f,v,y)=>{let M=[],B=[];n.forEach((U,T)=>{let w=n[Math.max(0,T-1)],N=n[Math.min(e,T+1)],F=N.x-w.x,z=N.z-w.z,q=Math.hypot(F,z)||1,V=f*(.55+.45*Math.min(1,T/(e*.45))),J=-z/q*V/2,ut=F/q*V/2;if(M.push(U.x+J,v,U.z+ut,U.x-J,v,U.z-ut),T){let K=T*2;B.push(K-2,K,K-1,K-1,K,K+1)}});let P=new Ie;P.setAttribute("position",new ae(M,3)),P.setIndex(B),P.computeVertexNormals();let I=new ct(P,y);return I.receiveShadow=!0,i.add(I),I};s(3.8,.012,Tt(ue.sand));let r=s(2.4,.045,new me({color:9425898,emissive:3837872,emissiveIntensity:.12}));r.userData.keepBatch=!0;let o=[];for(let f=0;f<26;f++){let v=new ct(new Bi(.5,.12),new He({color:16777215,transparent:!0,opacity:.7,depthWrite:!1}));v.rotation.x=-Math.PI/2,i.add(v),o.push({m:v,t:Math.random(),side:(Math.random()-.5)*1.4,sp:.018+Math.random()*.012})}let a=n[0],c=oi,l=document.createElement("canvas");l.width=32,l.height=128;let h=l.getContext("2d"),u=h.createLinearGradient(0,0,32,0);u.addColorStop(0,"rgba(191,232,247,0)"),u.addColorStop(.2,"#bfe8f7"),u.addColorStop(.8,"#bfe8f7"),u.addColorStop(1,"rgba(191,232,247,0)"),h.fillStyle=u,h.fillRect(0,0,32,128),h.lineCap="round";for(let f=0;f<26;f++){h.strokeStyle="rgba(255,255,255,"+(.45+Math.random()*.5)+")",h.lineWidth=1.5+Math.random()*2;let v=6+Math.random()*20,y=Math.random()*128;h.beginPath(),h.moveTo(v,y),h.lineTo(v,y+8+Math.random()*14),h.stroke()}let d=new En(l);d.wrapS=d.wrapT=zr,d.repeat.set(1,2);{let f=c.h*.66,v=20,y=[],M=[],B=[],P=1.35,I=-c.dz,U=c.dx;for(let z=0;z<=v;z++){let q=f*(1-z/v),V=Eh(c.r,c.h,q+.2)+.08,J=c.x+c.dx*V,ut=c.z+c.dz*V,K=q-.2+.05,_t=P*(.7+.3*z/v);if(y.push(J-I*_t/2,K,ut-U*_t/2,J+I*_t/2,K,ut+U*_t/2),M.push(0,1-z/v,1,1-z/v),z){let lt=z*2;B.push(lt-2,lt-1,lt,lt-1,lt+1,lt)}}let T=new Ie;T.setAttribute("position",new ae(y,3)),T.setAttribute("uv",new ae(M,2)),T.setIndex(B);let w=new ct(T,new He({map:d,transparent:!0,opacity:.95,side:hn,depthWrite:!1}));w.renderOrder=2,i.add(w);let N=new ct(new De(.5,16,10),new me({color:12577015,emissive:3837872,emissiveIntensity:.1})),F=Eh(c.r,c.h,f+.2);N.scale.set(1,.3,.55),N.position.set(c.x+c.dx*(F-.2),f-.12,c.z+c.dz*(F-.2)),i.add(N)}let p=new ct(new fe(1.5,1.5,.06,28),new me({color:10476783,emissive:3837872,emissiveIntensity:.12}));p.position.set(a.x+c.dx*.6,.05,a.z+c.dz*.6),i.add(p);let x=new ct(new Xi(1.55,.22,10,28),Tt(14209256));x.rotation.x=Math.PI/2,x.position.copy(p.position),x.position.y=.06,x.scale.set(1,1,.6),i.add(x);let _=[];for(let f=0;f<7;f++){let v=new ct(new De(.22,10,8),new He({color:16777215,transparent:!0,opacity:.85}));v.position.set(a.x+-c.dz*(f-3)*.22,.15,a.z+c.dx*(f-3)*.22),i.add(v),_.push(v)}let m=[];return Sn.forEach(([f,v,y,M])=>{let B=f===y;for(let P=0;P<n.length;P++){let I=n[P];!(B?Math.abs(I.x-f)<.95&&I.z>=Math.min(v,M)-.9&&I.z<=Math.max(v,M)+.9:Math.abs(I.z-v)<.95&&I.x>=Math.min(f,y)-.9&&I.x<=Math.max(f,y)+.9)||m.some(T=>Math.hypot(T.x-I.x,T.z-I.z)<3)||m.push({x:B?f:I.x,z:B?I.z:v,rot:B?0:Math.PI/2})}}),m.forEach(f=>i.add(Xd(f.x,f.z,f.rot,2.2))),{curve:t,glints:o,ftex:d,foam:_,bridges:m,src:a}}function Xd(i,t,e,n){let s=new $t;s.position.set(i,0,t),s.rotation.y=e;for(let r=0;r<9;r++){let o=(r-4)/4,a=.12+(1-o*o)*.32;s.add(O(n,.1,.5,r%2?13208170:12418398,0,a,o*2.1))}return[-1,1].forEach(r=>{for(let o=0;o<5;o++){let a=(o-2)/2,c=.12+(1-a*a)*.32,l=r*(n/2+.05);s.add(O(.14,.75,.14,14833487,l,c+.37,a*2)),(o===0||o===4)&&s.add(O(.2,.12,.2,16181192,l,c+.8,a*2))}for(let o=0;o<4;o++){let a=(o-2)/2,c=(o-1)/2,l=.12+(1-a*a)*.32+.72,h=.12+(1-c*c)*.32+.72,u=Math.hypot(2*(c-a),h-l)+.06,d=O(.1,.1,u,14833487,r*(n/2+.05),(l+h)/2,a+c);d.rotation.x=-Math.atan2(h-l,2*(c-a)),s.add(d)}}),s}function fy(i,t){let e=qt,n=e.rx+2.6,s=e.rz+2.6,r=80,o=[],a=[],c={benches:[],ducks:[],posts:[]};for(let u=0;u<=r;u++){let d=u/r*Math.PI*2,p=Math.cos(d),x=Math.sin(d),_=e.x+p*(n-.75),m=e.z+x*(s-.75),f=e.x+p*(n+.75),v=e.z+x*(s+.75);if(o.push(_,.025,m,f,.025,v),u){let y=u*2;a.push(y-2,y,y-1,y-1,y,y+1)}}let l=new Ie;l.setAttribute("position",new ae(o,3)),l.setIndex(a),l.computeVertexNormals();let h=new ct(l,Tt(15654072));h.receiveShadow=!0,i.add(h);for(let u=0;u<r;u++){let d=u/r*Math.PI*2,p=e.x+Math.cos(d)*n,x=e.z+Math.sin(d)*s;if(_s(p,x)<.6){i.add(Xd(p,x,-d+Math.PI/2+Math.PI/2,1.5));break}}[.6,2.2,3.6,5].forEach((u,d)=>{let p=e.x+Math.cos(u)*(n+1.6),x=e.z+Math.sin(u)*(s+1.6);if(_s(p,x)<2.2||!xs(p,x,1.5))return;let _=new $t;_.position.set(p,0,x),_.rotation.y=Math.atan2(e.x-p,e.z-x),_.add(O(1.5,.08,.45,12883572,0,.45,0)),_.add(O(1.5,.4,.07,12883572,0,.7,-.22)),[-.65,.65].forEach(m=>{_.add(O(.08,.45,.4,9206379,m,.22,0))}),i.add(_),c.posts.push({x:p,z:x,r:.9})});for(let u=0;u<7;u++){let d=u/7*Math.PI*2+.3,p=e.x+Math.cos(d)*(n+3.1),x=e.z+Math.sin(d)*(s+3.1);if(_s(p,x)<2.4||!xs(p,x,1.8))continue;let _=new ct(new fe(.9,.95,.18,9),Tt(10188374));_.position.set(p,.09,x),_.scale.z=.7,i.add(_);for(let m=0;m<9;m++){let f=p+(t()-.5)*1.3,v=x+(t()-.5)*.9;i.add(O(.06,.3,.06,8173679,f,.32,v)),i.add(O(.2,.18,.2,ue.flower[(u+m)%ue.flower.length],f,.52,v))}c.posts.push({x:p,z:x,r:1})}for(let u=0;u<2;u++){let d=new $t;d.add(O(.5,.3,.7,16777215,0,.18,0)),d.add(O(.32,.3,.3,u?16777215:7317610,0,.45,.32)),d.add(O(.18,.08,.16,16098123,0,.42,.53)),[-.12,.12].forEach(p=>d.add(O(.05,.06,.03,3025462,p,.5,.47))),d.add(O(.2,.12,.2,15658734,0,.32,-.38)),d.scale.setScalar(.8),i.add(d),c.ducks.push({g:d,a:u*2.5,sp:u?-.12:.09})}return c}function py(i){let t=[],e=[],n=(u,d)=>u.toFixed(2)+","+d.toFixed(2),s=new Map,r=(u,d)=>{let p=n(u,d);return s.has(p)||(s.set(p,t.length),t.push({x:u,z:d}),e.push([])),s.get(p)},o=(u,d)=>{if(u===d)return;let p=Math.hypot(t[u].x-t[d].x,t[u].z-t[d].z);e[u].push([d,p]),e[d].push([u,p])},a=Sn.map(()=>[]);Sn.forEach((u,d)=>{a[d].push([u[0],u[1]],[u[2],u[3]])}),Sn.forEach((u,d)=>Sn.forEach((p,x)=>{if(d>=x)return;let _=u[0]===u[2],m=p[0]===p[2];if(_===m)return;let f=_?u:p,v=_?p:u,y=f[0],M=v[1];y>=Math.min(v[0],v[2])-.01&&y<=Math.max(v[0],v[2])+.01&&M>=Math.min(f[1],f[3])-.01&&M<=Math.max(f[1],f[3])+.01&&(a[d].push([y,M]),a[x].push([y,M]))}));let c=i.map(u=>{let d=null;Sn.forEach((x,_)=>{let m=x[0]===x[2],f=m?x[0]:Math.max(Math.min(x[0],x[2]),Math.min(Math.max(x[0],x[2]),u.x)),v=m?Math.max(Math.min(x[1],x[3]),Math.min(Math.max(x[1],x[3]),u.z)):x[1],y=Math.hypot(f-u.x,v-u.z);(!d||y<d.dist)&&(d={i:_,x:f,z:v,dist:y})}),a[d.i].push([d.x,d.z]);let p=r(u.x,u.z);return o(p,r(d.x,d.z)),p});a.forEach((u,d)=>{let p=Sn[d][0]===Sn[d][2];u.sort((x,_)=>p?x[1]-_[1]:x[0]-_[0]);for(let x=1;x<u.length;x++)o(r(u[x-1][0],u[x-1][1]),r(u[x][0],u[x][1]))});function l(u,d){let p=t.map(()=>1/0),x=t.map(()=>-1),_=t.map(()=>!1);for(p[u]=0;;){let f=-1;for(let v=0;v<t.length;v++)!_[v]&&(f<0||p[v]<p[f])&&(f=v);if(f<0||p[f]===1/0||f===d)break;_[f]=!0,e[f].forEach(([v,y])=>{p[f]+y<p[v]&&(p[v]=p[f]+y,x[v]=f)})}let m=[];for(let f=d;f>=0;f=x[f])m.unshift(t[f]);return m.length&&m[0]===t[u]?m:[t[d]]}function h(u,d){let p=0,x=1/0;return t.forEach((_,m)=>{let f=Math.hypot(_.x-u,_.z-d);f<x&&(x=f,p=m)}),p}return{nodes:t,doorNodes:c,path:l,nearest:h}}var Da=[[0,2764134,9414399,.25,.55,1],[5,3093616,9414399,.25,.55,1],[6,16305590,16763296,1.3,1.1,.4],[7.5,12575733,16774374,2.3,1.55,0],[16.5,12575733,16774374,2.3,1.55,0],[18,16236724,16760470,1.3,1.1,.4],[19.2,3290997,9414399,.3,.6,1],[24,2764134,9414399,.25,.55,1]];function Yd(i){let t=0;for(;t<Da.length-2&&Da[t+1][0]<=i;)t++;let e=Da[t],n=Da[t+1],s=(i-e[0])/(n[0]-e[0]||1),r=new ee(e[1]),o=new ee(n[1]),a=new ee(e[2]),c=new ee(n[2]);return{sky:r.lerp(o,s),sun:a.lerp(c,s),power:fn(e[3],n[3],s),amb:fn(e[4],n[4],s),night:fn(e[5],n[5],s)}}function my(i,t){t=t||{};let e=(i.clientWidth||innerWidth)<(i.clientHeight||innerHeight)*.9?"port":"land";Fd(e),Ha=[],xh=[];let n=(()=>{let g=/[?&]hour=([\d.]+)/.exec(location.search);return g?Number(g[1]):null})();n==null&&t.timeMode==="day"&&(n=11),n==null&&t.timeMode==="night"&&(n=22);let s=new Wr({antialias:!0});s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.shadowMap.enabled=!0,s.shadowMap.type=va,s.domElement.className="village-3d",i.appendChild(s.domElement);let r=new Xr;r.fog=new la(12575733,220,480);let o=new je(34,1,.5,1100),a=new Ta(o,s.domElement);a.enableDamping=!0,a.dampingFactor=.08,a.minDistance=14,a.maxDistance=320,a.minPolarAngle=.15,a.maxPolarAngle=1.32,a.target.set(0,0,1.5),a.screenSpacePanning=!1,a.rotateSpeed=.7,a.panSpeed=1.1,a.keyPanSpeed=22,a.touches={ONE:ii.PAN,TWO:ii.DOLLY_PAN};{let g=null,S=new D,C=H=>Math.atan2(H[1].clientY-H[0].clientY,H[1].clientX-H[0].clientX);s.domElement.addEventListener("touchstart",H=>{g=H.touches.length===2?C(H.touches):null},{passive:!0}),s.domElement.addEventListener("touchmove",H=>{if(H.touches.length!==2||g==null||!a.enabled)return;let et=C(H.touches),Q=et-g;g=et,Q>Math.PI&&(Q-=Math.PI*2),Q<-Math.PI&&(Q+=Math.PI*2),S.copy(o.position).sub(a.target).applyAxisAngle(Ve.DEFAULT_UP,Q),o.position.copy(a.target).add(S),a.update()},{passive:!0}),s.domElement.addEventListener("touchend",H=>{g=H.touches.length===2?C(H.touches):null},{passive:!0})}s.domElement.tabIndex=0,s.domElement.style.outline="none",a.listenToKeyEvents(s.domElement);let c=new D,l=new D,h=new D;function u(g,S){o.getWorldDirection(h),h.y=0,h.normalize(),l.crossVectors(h,o.up).normalize();let C=o.position.distanceTo(a.target)*.0016;c.copy(l).multiplyScalar(g*C).addScaledVector(h,-S*C),a.target.add(c),o.position.add(c)}s.domElement.addEventListener("wheel",g=>{!g.ctrlKey&&g.deltaMode===0&&(Math.abs(g.deltaX)>.01||Math.abs(g.deltaY)<40)&&(g.preventDefault(),g.stopImmediatePropagation(),u(g.deltaX,g.deltaY))},{capture:!0,passive:!1});function d(){let g=a.target,S=tn.w/2,C=tn.d/2,H=Math.max(-S,Math.min(S,g.x)),et=Math.max(-C,Math.min(C,g.z));(H!==g.x||et!==g.z||g.y!==0)&&(c.set(H-g.x,-g.y,et-g.z),g.add(c),o.position.add(c))}a.addEventListener("change",d);let p=new io(16777215,12048288,1);r.add(p);let x=new ro(16777215,1.5);x.castShadow=!0,x.shadow.mapSize.set(2048,2048),Object.assign(x.shadow.camera,{left:-tn.a-6,right:tn.a+6,top:tn.b+10,bottom:-tn.b-10,near:1,far:260}),x.shadow.bias=-6e-4,x.shadow.normalBias=.03,r.add(x),r.add(x.target);let _=[],m=new Ln({uniforms:{top:{value:new ee(9356778)},bottom:{value:new ee(14216952)}},vertexShader:"varying float vY; void main(){ vY = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 bottom; varying float vY; void main(){ float k = smoothstep(-0.15, 0.75, vY); gl_FragColor = vec4(mix(bottom, top, k), 1.0); }",side:un,depthWrite:!1,fog:!1}),f=new ct(new De(480,24,14),m);f.renderOrder=-1,r.add(f);let v=new ct(new De(4,16,12),new He({color:16771496,fog:!1})),y=new ct(new De(3,16,12),new He({color:16052735,fog:!1}));r.add(v,y);let M=new Ie,B=[];for(let g=0;g<700;g++){let S=Math.random()*Math.PI*2,C=Math.random()*1.55;B.push(Math.cos(S)*Math.sin(C)*280,Math.cos(C)*280+20,Math.sin(S)*Math.sin(C)*280)}M.setAttribute("position",new ae(B,3));let P=new cs(M,new Vi({color:16777215,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1}));r.add(P);let I=[];for(let g=0;g<6;g++){let S=new $t,C=new me({color:16777215,transparent:!0,opacity:.92});for(let H=0;H<4;H++){let et=new ct(new De(zt(1.6,2.6),10,8),C);et.position.set(H*2-3,zt(-.4,.6),zt(-.8,.8)),et.scale.y=.7,S.add(et)}S.position.set(zt(-90,90),zt(34,46),zt(-90,-40)),S.userData.speed=zt(.6,1.4),S.userData.mat=C,I.push(S),r.add(S)}let U=new $t;U.mat=new me({color:16777215,transparent:!0,opacity:.9,fog:!1});for(let g=0;g<11;g++){let S=g/11*Math.PI*2+zt(-.15,.15),C=Si(S)+zt(1,7),H=[];for(let Q=0;Q<5;Q++){let E=new De(zt(1.6,2.8),9,7);E.scale(1,.62,1),E.translate(Q*2.1-4.2,zt(-.3,.6),zt(-1,1)),H.push(E)}let et=new ct(Aa(H,!1),U.mat);H.forEach(Q=>Q.dispose()),et.position.set(Math.cos(S)*C,zt(-9,-3),-Math.sin(S)*C),et.rotation.y=S+Math.PI/2,et.scale.setScalar(zt(.9,1.5)),U.add(et)}r.add(U);let T=[];{let g=Oa(23),S=[12297952,10982100,9797574];for(let C=0;C<6;C++){let H=C/6*Math.PI*2+.4+g()*.4,et=Si(H)+9+g()*7,Q=1.6+g()*1.8,E=new $t,Y=new ct(new fe(Q,Q*.92,.5,20),Tt(ue.grass,{}));Y.position.y=-.25,Y.receiveShadow=!0,E.add(Y);let St=new ct(new fe(Q*.92,Q*.8,.5,20),Tt(14202774,{}));St.position.y=-.75,E.add(St);let wt=new ct(new Ei(Q*.8,Q*2.2,16),Tt(S[C%3],{}));if(wt.rotation.x=Math.PI,wt.position.y=-1-Q*1.1,E.add(wt),C%3===2)[0,1,2].forEach(te=>E.add(O(.25,.25,.25,ue.flower[(C+te)%5],(te-1)*.6,.12,te%2*.5-.2)));else{let te=Id(g,C%3===0);te.scale.setScalar(.55),E.add(te)}E.position.set(Math.cos(H)*et,-2+g()*6,-Math.sin(H)*et),E.userData={y0:E.position.y,ph:g()*6},r.add(E),T.push(E)}}let w=(()=>{let g=document.createElement("canvas");g.width=g.height=64;let S=g.getContext("2d"),C=S.createRadialGradient(32,32,0,32,32,32);C.addColorStop(0,"rgba(255,255,255,0.85)"),C.addColorStop(.3,"rgba(255,255,255,0.22)"),C.addColorStop(1,"rgba(255,255,255,0)"),S.fillStyle=C,S.fillRect(0,0,64,64),S.fillStyle="#ffffff",S.beginPath();for(let et=0;et<10;et++){let Q=et/10*Math.PI*2-Math.PI/2,E=et%2?8:20;S.lineTo(32+Math.cos(Q)*E,32+Math.sin(Q)*E)}S.closePath(),S.fill();let H=new En(g);return H.colorSpace=Fe,H})(),N=(()=>{let g=document.createElement("canvas");g.width=g.height=32;let S=g.getContext("2d");S.fillStyle="#ffffff",S.beginPath();for(let H=0;H<8;H++){let et=H/8*Math.PI*2,Q=H%2?2.5:15;S.lineTo(16+Math.cos(et)*Q,16+Math.sin(et)*Q)}S.closePath(),S.fill();let C=new En(g);return C.colorSpace=Fe,C})(),F=[0,1,2].map(g=>{let S=[],C=[],H=new ee,et=[16773544,16762076,14273791,12905727];for(let Y=0;Y<34;Y++){let St=Math.random()*Math.PI*2,wt=.15+Math.random()*1.2;S.push(Math.cos(St)*Math.sin(wt)*260,Math.cos(wt)*260+20,Math.sin(St)*Math.sin(wt)*260),H.set(et[(Y+g)%4]),C.push(H.r,H.g,H.b)}let Q=new Ie;Q.setAttribute("position",new ae(S,3)),Q.setAttribute("color",new ae(C,3));let E=new cs(Q,new Vi({size:11+g*3,map:w,vertexColors:!0,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,fog:!1}));return E.userData={base:0,ph:g*2.1},r.add(E),E}),z=new as(new Hi({map:(()=>{let g=document.createElement("canvas");g.width=128,g.height=16;let S=g.getContext("2d"),C=S.createLinearGradient(0,0,128,0);return C.addColorStop(0,"rgba(255,255,255,0)"),C.addColorStop(1,"rgba(255,248,220,1)"),S.fillStyle=C,S.beginPath(),S.moveTo(0,8),S.lineTo(120,4),S.arc(120,8,4,-Math.PI/2,Math.PI/2),S.closePath(),S.fill(),new En(g)})(),transparent:!0,opacity:0,depthWrite:!1,fog:!1}));z.scale.set(36,4.5,1),r.add(z);let q={t:-1,wait:6,from:new D,dir:new D},V=new $t;r.add(V),V.add(Ia(Pa(1,.35),.6,ue.grass,-.6,!0)),V.add(Ia(Pa(1,.25),1.2,14202774,-1.8));let J=[12297952,10982100,9797574,8679350],ut=[[.97,.4,2.2,-4],[.86,.4,2.4,-6.4],[.68,.4,2.2,-8.6],[.44,0,1.8,-10.4]];ut.forEach(([g,S,C,H],et)=>{let Q=Ia(Pa(g,S),C,0,H);Q.material=Tt(J[et],{}),V.add(Q)});{let g=Oa(11),S=new Nn(1,2);ut.forEach(([C,H,et,Q],E)=>{let Y=Math.round(46*C);for(let wt=0;wt<Y;wt++){let te=(wt+g()*.6)/Y*Math.PI*2,Rt=Si(te,C)-H-.3,oe=new ct(S,Tt(J[Math.min(3,E+(g()<.4?1:0))],{})),Oe=.9+g()*1.1;oe.scale.set(Oe,Oe*(.8+g()*.6),Oe),oe.position.set(Math.cos(te)*Rt,Q+et*(.2+g()*.6),-Math.sin(te)*Rt),oe.rotation.set(g()*3,g()*3,g()*3),V.add(oe)}let St=E===3?7:Math.round(16*C);for(let wt=0;wt<St;wt++){let te=g()*Math.PI*2,Rt=E===3?g()*Si(te,C)*.6:Si(te,C)-H-1-g()*2.5,oe=(E===3?4:2)+g()*3,Oe=.8+g()*1.2,In=new ct(new Ei(Oe,oe,14),Tt(J[Math.min(3,E+1)],{}));In.rotation.x=Math.PI,In.position.set(Math.cos(te)*Rt,Q-oe/2+.1,-Math.sin(te)*Rt),V.add(In)}})}let K=Ia(Pa(1,-.25),.3,ue.grassSide,-.75);V.add(K),Sn.forEach(([g,S,C,H])=>{let et=g===C,Q=Math.abs(et?H-S:C-g),E=(g+C)/2,Y=(S+H)/2;if(et&&Math.abs(E-an.x)<.2&&Math.min(S,H)<an.z1&&Math.max(S,H)>an.z0&&Be(E,Y)>0)return;let St=O(et?uo:Q+uo,.06,et?Q+uo:uo,ue.road,E,Be(E,Y)+.03,Y);St.castShadow=!1,V.add(St)}),hy(V),uy(V);let _t=dy(V),lt=Oa(5),It=new fe(.26,.26,.05,14),ie=new ki(It,Tt(15126435),140),Xt=new Ve;for(let g=0;g<140;g++){let S=Sn[Math.floor(lt()*Sn.length)],C=lt(),H=S[0]===S[2],et=fn(S[0],S[2],C)+(H?(lt()-.5)*1.8:0),Q=fn(S[1],S[3],C)+(H?0:(lt()-.5)*1.8);Xt.position.set(et,Be(et,Q)+.07,Q),Xt.rotation.y=lt()*.6,Xt.updateMatrix(),ie.setMatrixAt(g,Xt.matrix)}ie.receiveShadow=!0,V.add(ie);let at=new ct(new fe(1,1,.06,40),Tt(ue.sand));at.scale.set(qt.rx+1.2,1,qt.rz+1.2),at.position.set(qt.x,.03,qt.z),at.receiveShadow=!0,V.add(at);let yt=new ct(new fe(1,1,.1,40),Tt(7321295));yt.scale.set(qt.rx,1,qt.rz),yt.position.set(qt.x,.05,qt.z),V.add(yt);let Ft=new me({color:ue.water,transparent:!0,opacity:.72}),Mt=new ct(new fe(1,1,.08,40),Ft);Mt.scale.set(qt.rx-.15,1,qt.rz-.15),Mt.position.set(qt.x,.2,qt.z),V.add(Mt),[[-4.5,1],[3.5,-1.6],[5.2,1.2]].forEach(([g,S])=>{let C=new ct(new fe(.55,.55,.05,12),Tt(ue.lily));C.position.set(qt.x+g,.25,qt.z+S),V.add(C)});let Kt=O(.25,.2,.25,16758465,qt.x-4.5,.35,qt.z+1);V.add(Kt);for(let g=0;g<10;g++){let S=lt()*Math.PI*2,C=qt.x+Math.cos(S)*(qt.rx+.6),H=qt.z+Math.sin(S)*(qt.rz+.6);V.add(O(.08,1,.08,8173679,C,.45,H))}let jt=fy(V,lt);{let g=new ls(1,7);g.rotateX(-Math.PI/2);let S=new ki(g,new me({color:16777215}),70),C=new ee,H=[11722133,13298352,11130508,13823672],et=0;for(let Q=0;Q<900&&et<70;Q++){let E=(lt()-.5)*tn.w,Y=(lt()-.5)*tn.d;if(!xs(E,Y,4)||Ca(E,Y,1.5)||_s(E,Y)<3||gs(E,Y,2)||cr(E,Y))continue;Xt.position.set(E,Be(E,Y)+.008,Y),Xt.rotation.set(0,lt()*6,0);let St=1.6+lt()*2.6;Xt.scale.set(St,1,St*(.6+lt()*.5)),Xt.updateMatrix(),S.setMatrixAt(et,Xt.matrix),S.setColorAt(et,C.set(H[et%H.length])),et++}S.count=et,S.receiveShadow=!0,V.add(S),Xt.scale.set(1,1,1)}let ne=new De(.13,10,8),he=new Ei(.07,.38,6),ht=(g,S)=>xs(g,S,2.2)&&!gs(g,S,1.5)&&!Cd(g,S,.8)&&!Ca(g,S,.6)&&_s(g,S)>2.4&&!Ud(g,S)&&!cr(g,S)&&!Sn.some(([C,H,et,Q])=>g>=Math.min(C,et)-si-.3&&g<=Math.max(C,et)+si+.3&&S>=Math.min(H,Q)-si-.3&&S<=Math.max(H,Q)+si+.3)&&!We.some(([C,H])=>Math.abs(g-C)<3.6&&Math.abs(S-H)<3.8)&&!(Math.abs(g-bn[0])<6&&Math.abs(S-bn[1])<5.4);ue.flower.forEach((g,S)=>{let H=new ki(ne,Tt(g),60),et=0;for(;et<60;){let Q=(lt()-.5)*(tn.w-6),E=(lt()-.5)*(tn.d-6);ht(Q,E)&&(Xt.position.set(Q,Be(Q,E)+.11,E),Xt.rotation.y=lt(),Xt.updateMatrix(),H.setMatrixAt(et++,Xt.matrix))}V.add(H)});let vt=new ki(he,Tt(9423996),420);for(let g=0;g<420;){let S=(lt()-.5)*(tn.w-4),C=(lt()-.5)*(tn.d-4);ht(S,C)&&(Xt.position.set(S,Be(S,C)+.17,C),Xt.rotation.set(lt()*.3,lt()*3,lt()*.3),Xt.updateMatrix(),vt.setMatrixAt(g++,Xt.matrix))}V.add(vt);let L=(t.houses||[]).findIndex(g=>g.id==="love"),Bt=(g,S)=>{if(wn)return Cd(g,S,1.2);if(L<0||!We[L])return!1;let[C,H]=We[L];return Math.abs(g-C)<7&&S>H+2.5&&S<H+12||Math.abs(S-H)<3.5&&Math.abs(g-C)<8.5||Math.abs(g-C)<3.5&&S<H&&S>H-8},mt=[],Ot=(g,S)=>{if(!ht(g,S)||Bt(g,S)||mt.some(([H,et])=>Math.hypot(H-g,et-S)<3.4))return!1;let C=Id(lt,lt()<.38);return C.position.set(g,Be(g,S),S),C.userData.post=1.2,V.add(C),mt.push([g,S]),!0};for(let g=0;g<56;g++){let S=g/56*Math.PI*2+lt()*.05,C=Si(S)-3-lt()*3;Ot(Math.cos(S)*C,Math.sin(S)*C)}for(let g=0,S=0;g<600&&S<18;g++)Ot((lt()-.5)*tn.w,(lt()-.5)*tn.d)&&S++;{let g=new Nn(.7,2),S=new Nn(.55,2);[[g,Tt(9686918,{}),26],[g,Tt(16235728,{}),12],[S,Tt(14209256,{}),18],[S,Tt(12892382,{}),10]].forEach(([H,et,Q])=>{let E=new ki(H,et,Q),Y=0;for(let St=0;St<3e3&&Y<Q;St++){let wt=lt()<.6&&mt.length,te=wt?mt[Math.floor(lt()*mt.length)]:null,Rt=te?te[0]+(lt()-.5)*5:(lt()-.5)*(tn.w-6),oe=te?te[1]+(lt()-.5)*5:(lt()-.5)*(tn.d-6);if(!ht(Rt,oe)||Bt(Rt,oe)||mt.some(([In,yr])=>Math.hypot(In-Rt,yr-oe)<1.3))continue;let Oe=.7+lt()*.8;Xt.position.set(Rt,Be(Rt,oe)+.3*Oe,oe),Xt.rotation.set(lt(),lt()*6,lt()),Xt.scale.set(Oe*1.2,Oe*.8,Oe),Xt.updateMatrix(),E.setMatrixAt(Y++,Xt.matrix)}E.count=Y,E.castShadow=!0,E.receiveShadow=!0,V.add(E)}),Xt.scale.set(1,1,1),Xt.rotation.set(0,0,0)}let $=[0,1,2].map(g=>{let S=[];for(let et=0;et<9;et++){let Q=Math.random()*6.283,E=Math.sqrt(Math.random())*.85;S.push(qt.x+Math.cos(Q)*qt.rx*E,.42,qt.z+Math.sin(Q)*qt.rz*E)}for(let et=0;et<7;et++){let Q=_t.curve.getPointAt(Math.random());S.push(Q.x+(Math.random()-.5)*1.4,.3,Q.z+(Math.random()-.5)*1.4)}let C=new Ie;C.setAttribute("position",new ae(S,3));let H=new cs(C,new Vi({size:.9,map:N,color:[16777215,16774072,16766698][g],transparent:!0,opacity:0,depthWrite:!1}));return H.userData={base:.6,ph:g*2.1},V.add(H),H}),dt=[];Sn.forEach(([g,S,C,H])=>[.3,.72].forEach(et=>{let Q=g===C,E=fn(g,C,et)+(Q?si+.6:0),Y=fn(S,H,et)+(Q?0:si+.6);We.some(([St,wt])=>Math.abs(E-St)<3.6&&Math.abs(Y-wt)<4.2)||Math.abs(E-bn[0])<6.2&&Math.abs(Y-bn[1])<6||gs(E,Y,1.5)||Bt(E,Y)||!xs(E,Y,2)||Ca(E,Y,.5)||_s(E,Y)<2||cr(E,Y)||Ud(E,Y)||dt.push([E,Y])})),dt.slice(0,7).forEach(([g,S],C)=>{let H=sy();if(H.position.set(g,Be(g,S),S),H.userData.post=.3,V.add(H),C%2===0&&_.length<3){let et=new so(16763255,0,12,1.6);et.position.set(g,Be(g,S)+2.7,S),V.add(et),_.push(et)}});let rt=[],R=[];(t.houses||[]).forEach((g,S)=>{if(!We[S])return;let C=g.id==="love"?Q_():g.special==="arcade"?ty():g.special==="store"?ey():Pd(g,!1);C.position.set(We[S][0],Be(We[S][0],We[S][1]),We[S][1]),C.rotation.y=ar[S]||0,C.userData.face=ar[S]||0,C.userData.id=g.id,V.add(C),rt.push(C);let H=C.userData.face;R.push({x:We[S][0]+Math.sin(H)*C.userData.doorZ,z:We[S][1]+Math.cos(H)*C.userData.doorZ})});let b=iy(V,wn&&ar[wn.house]||0),k=Pd(null,!0);k.position.set(bn[0],Be(bn[0],bn[1]),bn[1]),k.userData.id="hall",V.add(k),rt.push(k);let Z={x:bn[0],z:bn[1]+k.userData.doorZ};R.push(Z);let tt=py(R),st=tt.doorNodes[tt.doorNodes.length-1];(function(){V.updateMatrixWorld(!0);let S=new Set,C=Q=>{Q&&Q.traverse(E=>S.add(E))};C(Mt),jt.ducks.forEach(Q=>C(Q.g)),rt.forEach(Q=>{C(Q.userData.hinge),C(Q.userData.flag),C(Q.userData.bell)}),C(b.car);let H=new Map,et=[];V.traverse(Q=>{if(!Q.isMesh||Q.isInstancedMesh||S.has(Q)||Array.isArray(Q.material)||Q.material.transparent)return;let E=Q.geometry.clone();Object.keys(E.attributes).forEach(Y=>{Y!=="position"&&Y!=="normal"&&Y!=="uv"&&E.deleteAttribute(Y)}),E.attributes.uv&&(E.index&&(E=E.toNonIndexed()),E.clearGroups(),E.applyMatrix4(Q.matrixWorld),H.has(Q.material)||H.set(Q.material,[]),H.get(Q.material).push(E),et.push(Q))}),et.forEach(Q=>Q.parent.remove(Q)),H.forEach((Q,E)=>{let Y=Aa(Q,!1);if(Q.forEach(wt=>wt.dispose()),!Y)return;let St=new ct(Y,E);St.castShadow=!0,St.receiveShadow=!0,V.add(St)})})();let bt=[],j={her:null,him:null,home:null,kiss:0},xt=g=>tt.nodes[tt.doorNodes[g]],Ut={},gt=g=>Ut[g]||0;function Dt(g,S,C){let H=Gd(g);V.add(H.g);let et=xt(S);return H.g.position.set(et.x+zt(-.6,.6),0,et.z+zt(0,.4)),Object.assign(H,{kind:"person",i:bt.length,home:S,path:[],speed:zt(1.35,1.75),wait:zt(0,3),t:zt(0,6),v:0,goal:"",inside:!1},C||{}),bt.push(H),H}(t.houses||[]).forEach((g,S)=>{S>=We.length||(g.id==="love"?(j.home=S,j.her=Dt(yh.her,S,{love:"her"}),j.him=Dt(yh.him,S,{love:"him"})):Dt(za[S]||za[S%9]||za[0],S))});let Yt=Object.assign(oy(),{kind:"cat",path:[],speed:1.1,wait:2,t:0,sit:!0}),Zt=Object.assign(ay(),{kind:"dog",path:[],speed:2.2,wait:1,t:0,buddy:0});{let g=tt.nodes[tt.doorNodes[2]],S=tt.nodes[tt.doorNodes[tt.doorNodes.length-1]];Yt.g.position.set(g.x+1.5,0,g.z+.6),Zt.g.position.set(S.x+3,0,S.z+.8)}V.add(Yt.g,Zt.g);let Ht=[0,1,2,3].map(g=>{let S=cy(g);return V.add(S),{g:S,a:zt(0,6.28),r:zt(.3,.75),sp:zt(.25,.5)*(g%2?1:-1),jump:0,jx:0,jz:0}});function de(){let g=document.createElement("canvas");g.width=128,g.height=64;let S=g.getContext("2d");S.font="bold 34px sans-serif",S.fillStyle="#7a6a9a",S.fillText("z",18,52),S.font="bold 26px sans-serif",S.fillText("z",52,36),S.font="bold 20px sans-serif",S.fillText("z",82,22);let C=new as(new Hi({map:new En(g),transparent:!0,depthWrite:!1}));return C.scale.set(1.1,.55,1),C.visible=!1,V.add(C),C}Yt.zzz=de(),Zt.zzz=de();let se=Wd("\u2665","#ff6f91",.9,.45);V.add(se);let ge=new D,G=0,At=[],ot=new De(.09,6,5);function ft(g,S){for(let C=0;C<7;C++){let H=Math.random()*6.28,et=Math.random()*.8,Q=g+Math.cos(H)*et,E=S+Math.sin(H)*et*.7;if(!gs(Q,E,-.8))continue;let Y=new ct(ot,Tt(C%2?13208410:14723437));Y.position.set(Q,1.6+Math.random()*.6,E),V.add(Y),At.push({m:Y,vy:0,life:25})}}let Lt=[];function Nt(g,S,C){let H=new ct(new Qr(.15,.25,18),new He({color:16777215,transparent:!0,opacity:.8,side:hn}));H.rotation.x=-Math.PI/2,H.position.set(g,.245,S),H.userData.size=C,V.add(H),Lt.push(H)}let Qt=new ct(new Qr(.3,.45,20),new He({color:16777215,transparent:!0,opacity:0,side:hn}));Qt.rotation.x=-Math.PI/2,V.add(Qt);let Le=[16758465,14273008,16375946,11591910].map((g,S)=>{let C=ly(g);return V.add(C),{g:C,ph:S*1.7,cx:zt(-25,25),cz:zt(-15,15)}}),Xe=new Ie,ye=[];for(let g=0;g<40;g++)ye.push(zt(-30,30),zt(1,3),zt(-20,20));Xe.setAttribute("position",new ae(ye,3));let gn=new cs(Xe,new Vi({color:16773792,size:.35,transparent:!0,opacity:0}));V.add(gn);let nn=0;function wi(){let g=new Date;return g.getHours()+g.getMinutes()/60}function Yi(g){return g>=23||g<6.5?"sleep":g<7?"morning":g<11.5?"work":g<13?"lunch":g<16.5?"work":g<21?"evening":"home"}function Bn(g){let S=g%18,C=Math.floor(S/6),H=S%6;return{x:Z.x+(H-2.5)*1.2+C%2*.6,z:Z.z+1.3+C*1.1}}function Tn(g,S,C){if(g.goal=C,g.path=xe(g,S),!g.path.length){let H=tt.nearest(g.g.position.x,g.g.position.z),et=tt.nearest(S.x,S.z);g.path=tt.path(H,et).concat([S])}}function Ms(g){let S=xt(g),C=ar[g]||0;return{x:S.x-Math.sin(C)*.9,z:S.z-Math.cos(C)*.9,f:C}}function Zn(g){let S=Ms(g.home);g.inside=!1,g.g.visible=!0,g.g.position.set(S.x+zt(-.3,.3),0,S.z),g.g.rotation.set(0,S.f,0)}function ai(g,S){let C=Ms(g.home);Tn(g,{x:C.x,z:C.z},"in"),g.stay=S}let hr=rt.findIndex(g=>g.userData.alwaysLit),Ti=null,qi=null;function ur(){if(!Ti){Ti=We.map((g,S)=>{let C=xt(S);return[[-1.7,-.5],[1.7,-.5],[-.9,.2],[.9,.2]].map(([H,et])=>({x:C.x+H,z:C.z+et})).filter(H=>!kt(H.x,H.z,.15))}),qi=[];for(let g=0;g<18;g++){let S={x:qt.x+Math.cos(g/18*6.283)*(qt.rx+2.2),z:qt.z+Math.sin(g/18*6.283)*(qt.rz+1.9)};kt(S.x,S.z,.2)||qi.push(S)}}}let po=g=>g[Math.floor(Math.random()*g.length)];function dr(g){ur();let S=Ti[g.home];return S.length?po(S):xt(g.home)}function fr(g,S){ur();let C=Math.random();if(S==="lunch"&&hr>=0&&C<.6){let H=xt(hr);return{x:H.x+zt(-2.6,2.6),z:H.z+zt(0,.8)}}if(S==="lunch"&&C<.75)return Bn(Math.floor(zt(0,18)));if(C<.4&&qi.length)return po(qi);if(C<.85){let H=xt(Math.floor(zt(0,We.length)));return{x:H.x+zt(-1,1),z:H.z+zt(0,.5)}}return Bn(Math.floor(zt(0,18)))}function A(g){if(g.love==="him")return;let S=Yi(wi());if(g.love==="her")return W(g,S);let C=gt(g.home)>0;if(g.helper&&gt(g.home)<g.helper){g.inside&&Zn(g),Tn(g,{x:Z.x,z:Z.z},"leave");return}if(nn&&!C&&S!=="sleep"&&S!=="home"&&!g.helper){g.inside&&Zn(g),(g.goal!=="hall"||g.path.length)&&Tn(g,Bn(g.i),"hall"),g.wait=zt(3,6);return}if(C||S==="work"){if(g.inside){Zn(g),Tn(g,dr(g),"work");return}if(g.goal==="work"){ai(g,zt(3,C?6:10));return}Tn(g,dr(g),"work");return}if(S==="sleep"||S==="home"){if(g.inside){g.wait=zt(20,40);return}ai(g,zt(20,40));return}if(g.inside)Zn(g);else if(Math.random()<.15){ai(g,zt(5,12));return}Tn(g,fr(g,S),"stroll"),g.wait=zt(2,6)}function W(g,S){let C=j.him;if(S==="sleep"||S==="home"||wi()>=20.5){if(nt(),g.inside){g.wait=zt(30,60);return}ai(g,zt(30,60));return}if(g.inside&&(Zn(g),Zn(C),C.g.position.x+=.7),g.sitting){nt(),Tn(g,fr(g,S),"stroll"),g.wait=zt(2,5);return}if(Gt&&Math.random()<.55){Tn(g,Gt.userData.front,"swing");return}Tn(g,fr(g,S),"stroll"),g.wait=zt(2,5)}function nt(){[j.her,j.him].forEach(g=>{!g||!g.sitting||(g.sitting=!1,g.g.position.set(Gt.userData.front.x+(g.love==="her"?-.4:.4),0,Gt.userData.front.z),g.g.rotation.set(0,Gt.rotation.y,0))})}function it(g){g.goal==="in"?(g.inside=!0,g.g.visible=!1,g.wait=g.stay||10):g.goal==="work"?g.wait=zt(6,12):g.goal==="swing"?(g.sitting=!0,g.wait=zt(15,30)):g.goal==="leave"&&(V.remove(g.g),bt.splice(bt.indexOf(g),1))}function X(g,S){let C=j.her;if(C.inside){if(g.inside)return!1;let Oe=Ms(g.home),In=Oe.x-g.g.position.x,yr=Oe.z-g.g.position.z,mo=Math.hypot(In,yr);if(mo<.15)return g.inside=!0,g.g.visible=!1,!1;let Nh=Math.min(mo,C.speed*1.2*S);return g.g.position.x+=In/mo*Nh,g.g.position.z+=yr/mo*Nh,g.g.rotation.y=Math.atan2(In,yr),g.v=C.speed,!0}if(g.inside&&(Zn(g),g.g.position.x+=.7),C.sitting)return g.sitting=!0,!1;g.sitting=!1;let H=C.g.rotation.y,et=C.g.position.x-Math.cos(H)*.72,Q=C.g.position.z+Math.sin(H)*.72,E=et-g.g.position.x,Y=Q-g.g.position.z,St=Math.hypot(E,Y);if(St<.05){g.v=0;let Oe=H-g.g.rotation.y;return Oe=Math.atan2(Math.sin(Oe),Math.cos(Oe)),g.g.rotation.y+=Oe*Math.min(1,S*6),!1}let wt=Math.min(C.speed*1.35,St*4);g.v=(g.v||0)+(wt-(g.v||0))*Math.min(1,S*5);let te=Math.min(St,g.v*S);g.g.position.x+=E/St*te,g.g.position.z+=Y/St*te;let oe=(St>.35?Math.atan2(E,Y):H)-g.g.rotation.y;return oe=Math.atan2(Math.sin(oe),Math.cos(oe)),g.g.rotation.y+=oe*Math.min(1,S*7),g.v>.15}{let g=Yi(wi());(g==="sleep"||g==="home")&&bt.forEach(S=>{S.inside=!0,S.g.visible=!1,S.wait=zt(5,30)})}let Et=rt.filter(g=>g.userData.id!=="hall").map(g=>{let S=g.userData.size,C=g.userData.face||0,H=Math.abs(Math.sin(C))>.5;if(!S)return{x:g.position.x,z:g.position.z,hw:3.3,hd:2.6};let et=Math.cos(C)*S.cx,Q=-Math.sin(C)*S.cx;return{x:g.position.x+et,z:g.position.z+Q,hw:H?S.hd:S.hw,hd:H?S.hw:S.hd}}).concat([{x:bn[0],z:bn[1],hw:5.8,hd:4.1}]),Ct=[];V.children.forEach(g=>{g.userData.post&&Ct.push({x:g.position.x,z:g.position.z,r:g.userData.post})}),jt.posts.forEach(g=>Ct.push(g));function kt(g,S,C){return C=C||.5,!xs(g,S,2.5)||Ca(g,S,0)||_s(g,S)<1.8&&!_t.bridges.some(H=>Math.hypot(H.x-g,H.z-S)<2.4)||gs(g,S,.9+C)||Et.some(H=>Math.abs(g-H.x)<H.hw+C&&Math.abs(S-H.z)<H.hd+C)?!0:Ct.some(H=>Math.hypot(g-H.x,S-H.z)<H.r+C*.6)}function Vt(g,S){let C=Math.ceil(Math.hypot(S.x-g.x,S.z-g.z)/.4);for(let H=1;H<=C;H++){let et=H/C;if(kt(fn(g.x,S.x,et),fn(g.z,S.z,et),.45))return!1}return!0}let re=(g,S,C)=>Sn.some(([H,et,Q,E])=>g>=Math.min(H,Q)-si-C&&g<=Math.max(H,Q)+si+C&&S>=Math.min(et,E)-si-C&&S<=Math.max(et,E)+si+C),Gt=null;if(b.blocks.forEach(g=>Et.push(g)),b.posts.forEach(g=>Ct.push(g)),j.home!=null&&wn&&wn.house===j.home){let[g,S]=wn.swing,C=ar[j.home]||0;Gt=Ld(),Gt.position.set(g,Be(g,S),S),Gt.rotation.y=C,V.add(Gt),Gt.userData.front={x:g+Math.sin(C)*1.25,z:S+Math.cos(C)*1.25},Et.push({x:g,z:S,hw:1.55,hd:1.55}),Et.push({x:g-Math.cos(C)*2,z:S+Math.sin(C)*2,hw:.8,hd:.8})}else if(j.home!=null){let[g,S]=We[j.home],C=[[0,7.2],[0,6.4],[-2.2,7.2],[2.2,7.2],[0,8.4],[4.6,.8],[-4.6,.8],[0,-5.2]],H=(et,Q)=>!xs(et,Q,2.5)||gs(et,Q,1)||Et.some(E=>Math.abs(et-E.x)<E.hw+.1&&Math.abs(Q-E.z)<E.hd+.1)||re(et,Q,0);for(let[et,Q]of C){let E=g+et,Y=S+Q;if([[-1.6,-.9],[1.6,-.9],[-1.6,.9],[1.6,.9],[0,0],[0,1.6],[-.5,1.6],[.5,1.6]].every(([wt,te])=>!H(E+wt,Y+te))){V.children.slice().forEach(wt=>{if(wt.userData.post&&Math.abs(wt.position.x-E)<2.6&&Math.abs(wt.position.z-Y)<2.2){V.remove(wt);let te=Ct.findIndex(Rt=>Rt.x===wt.position.x&&Rt.z===wt.position.z);te>=0&&Ct.splice(te,1)}}),Gt=Ld(),Gt.position.set(E,Be(E,Y),Y),V.add(Gt),Gt.userData.front={x:E,z:Y+1.25},Et.push({x:E,z:Y,hw:1.55,hd:.75});break}}}let Wt=[],pe=new De(.28,8,6);function we(g){let S=new ct(pe,new me({color:16777215,transparent:!0,opacity:.75,depthWrite:!1})),C=g.userData.chimney;S.position.set(g.position.x+C.x+zt(-.1,.1),C.y,g.position.z+C.z+zt(-.1,.1)),V.add(S),Wt.push({m:S,life:0})}let Te=[3,6,10];function sn(){We.forEach((g,S)=>{if(S===j.home)return;let C=Te.filter(et=>gt(S)>=et).length,H=bt.filter(et=>et.helper&&et.home===S&&et.goal!=="leave");for(let et=H.length;et<C;et++){let Q=Dt(Dd[et%Dd.length],S,{helper:Te[et]});Q.g.position.set(Z.x+zt(-1,1),0,Z.z+zt(0,.6)),Tn(Q,dr(Q),"work")}})}function xe(g,S){let C={x:g.g.position.x,z:g.g.position.z};if(Vt(C,S))return[S];let H=tt.nearest(C.x,C.z),et=tt.nearest(S.x,S.z),Q=tt.path(H,et);if(!Vt(C,Q[0]))return[];let E=Q[Q.length-1];return Vt(E,S)&&Q.push(S),Q}function Jt(g){if(g.kind==="dog"&&Math.random()<.65){let C=bt[g.buddy%bt.length];for(let Q=0;Q<bt.length&&(!C.g.visible||C.sitting);Q++)C=bt[++g.buddy%bt.length];let H=C.g.position,et={x:H.x+zt(-1.5,1.5),z:H.z+zt(.8,1.6)};if(Math.random()<.15&&g.buddy++,!kt(et.x,et.z)&&(g.path=xe(g,et),g.path.length))return}for(let C=0;C<30;C++){let H={x:g.g.position.x+zt(-9,9),z:g.g.position.z+zt(-7,7)};if(!kt(H.x,H.z,.8)&&Vt(g.g.position,H)){g.path=[H];return}}let S=tt.nodes[tt.nearest(g.g.position.x,g.g.position.z)];g.path=[{x:S.x,z:S.z}]}function Pn(g,S){let C=g.g.position;if(g.sleep>0)return g.v=0,!1;if(!g.path.length){if(g.v=0,g.wait-=S,g.wait<=0){if(g.kind==="person")return g.wait=zt(1.5,4),A(g),!1;Jt(g),g.wait=zt(2,6),g.kind==="cat"&&(g.sit=Math.random()<.45,g.sit&&(g.path=[]))}return!1}let H=g.path[0],et=H.x-C.x,Q=H.z-C.z,E=Math.hypot(et,Q);if(E<.08)return g.path.shift(),!g.path.length&&g.kind==="person"&&it(g),!0;let St=Math.atan2(et,Q)-g.g.rotation.y;St=Math.atan2(Math.sin(St),Math.cos(St)),g.g.rotation.y+=St*Math.min(1,S*7);let wt=E+(g.path.length>1?99:0),te=Math.abs(St)>1.1?g.speed*.15:g.speed*Math.min(1,wt/1.2+.25);g.v=(g.v||0)+(te-(g.v||0))*Math.min(1,S*4);let Rt=Math.min(E,g.v*S);return C.x+=Math.sin(g.g.rotation.y)*Rt*.35+et/E*Rt*.65,C.z+=Math.cos(g.g.rotation.y)*Rt*.35+Q/E*Rt*.65,!0}function ve(g,S){if(bt.slice().forEach(E=>{let Y=E.love==="him"?X(E,g):Pn(E,g);if(E.inside||!E.g.visible)return;if(E.sitting&&Gt){let Rt=E.love==="her"?-.4:.4;ge.set(Rt,.06,0),Gt.userData.seat.localToWorld(ge),V.worldToLocal(ge),E.g.position.set(ge.x,ge.y-vh,ge.z),E.g.rotation.set(Gt.userData.pivot.rotation.x*.9,Gt.rotation.y,0),E.parts.legL.rotation.x=E.parts.legR.rotation.x=-1.45+Math.sin(S*1.7)*.25,E.parts.armL.rotation.x=E.parts.armR.rotation.x=-.5,E.parts.head.rotation.set(0,0,0);return}let St=Math.min(1,(E.v||0)/E.speed);E.t+=g*(Y?3+7*St:2);let wt=Y?Math.sin(E.t)*.75*St:0;E.parts.legL.rotation.x=wt,E.parts.legR.rotation.x=-wt,E.parts.armL.rotation.x=-wt*.8,E.parts.armR.rotation.x=wt*.8,E.g.rotation.x=0,E.parts.head.rotation.x=0,E.parts.head.rotation.z=0;let te=Be(E.g.position.x,E.g.position.z);if(E.g.position.y=te+(Y?Math.abs(Math.sin(E.t))*.06:0),!Y&&!E.path.length){if(E.goal==="hall"){let Rt=Math.PI-E.g.rotation.y;Rt=Math.atan2(Math.sin(Rt),Math.cos(Rt)),E.g.rotation.y+=Rt*Math.min(1,g*6),E.g.position.y=te+Math.max(0,Math.sin(S*4+E.i))*.1,E.parts.armR.rotation.x=-2.6+Math.sin(S*6+E.i)*.3}else if(E.goal==="work"){let Rt=Math.PI-E.g.rotation.y;Rt=Math.atan2(Math.sin(Rt),Math.cos(Rt)),E.g.rotation.y+=Rt*Math.min(1,g*6),E.parts.armR.rotation.x=-1.3+Math.sin(S*9+E.i)*.55,E.parts.armL.rotation.x=-.9+Math.sin(S*9+E.i+1.6)*.35,E.parts.head.rotation.x=.25}E.parts.head.rotation.y=E.goal==="work"?0:Math.sin(S*.7+E.i)*.4}else E.parts.head.rotation.y=0}),j.kiss>0&&j.him&&j.him.g.visible){j.kiss-=g;let E=j.her,Y=j.him,St=Math.min(1,Math.sin(Math.min(1,(2.4-j.kiss)/2.4)*Math.PI)*1.6),wt=E.g.position.x-Y.g.position.x,te=E.g.position.z-Y.g.position.z;if(Y.sitting)Y.parts.head.rotation.y=.9*St,Y.parts.head.rotation.z=.25*St,E.parts.head.rotation.z=-.15*St;else{let Rt=Math.atan2(wt,te)-Y.g.rotation.y;Rt=Math.atan2(Math.sin(Rt),Math.cos(Rt)),Y.g.rotation.y+=Rt*Math.min(1,g*8);let oe=Math.atan2(-wt,-te)-E.g.rotation.y;oe=Math.atan2(Math.sin(oe),Math.cos(oe)),E.g.rotation.y+=oe*Math.min(1,g*3)*.5,Y.g.rotation.x=.2*St}se.visible=!0,se.position.set((E.g.position.x+Y.g.position.x)/2,2+(2.4-j.kiss)*.35,(E.g.position.z+Y.g.position.z)/2),se.material.opacity=Math.min(1,j.kiss*1.5),j.kiss<=0&&(se.visible=!1,Y.g.rotation.x=0)}if(Gt){let E=Gt.userData.pivot,Y=j.her&&j.her.sitting;E.rotation.x=Y?Math.sin(S*1.7)*(j.kiss>0?.12:.32):E.rotation.x*Math.max(0,1-g*1.5)}let C=Yi(wi());rt.forEach((E,Y)=>{if(!E.userData.wm)return;let St=0;if(Y===j.home?St=0:(gt(Y)>0||E.userData.alwaysLit||C!=="sleep"&&bt.some(wt=>wt.home===Y&&wt.inside))&&(St=1),E.userData.lit=fn(E.userData.lit||0,St,Math.min(1,g*2)),E.userData.wm.emissiveIntensity=Jn*E.userData.lit*.95,E.userData.heart){let wt=j.her&&j.her.inside&&j.him.inside;E.userData.heart.material.emissiveIntensity=wt?.5+Math.max(0,Math.sin(S*5))*1.3:.2}gt(Y)>0&&E.userData.chimney&&Math.random()<g*2.2&&we(E)});for(let E=Wt.length-1;E>=0;E--){let Y=Wt[E];Y.life+=g,Y.m.position.y+=g*.9,Y.m.position.x+=g*.25,Y.m.scale.setScalar(1+Y.life*.9),Y.m.material.opacity=Math.max(0,.75-Y.life*.3),Y.life>2.5&&(V.remove(Y.m),Y.m.material.dispose(),Wt.splice(E,1))}G+=g,G>2&&(G=0,sn()),[Yt,Zt].forEach(E=>{if(E.sleep>0){E.sleep-=g;let te=Math.min(1,E.sleepIn+=g*3);E.parts.legs.forEach((Rt,oe)=>{Rt.rotation.x=(oe<2?-1.45:1.45)*te}),E.g.position.y=Be(E.g.position.x,E.g.position.z)-.22*te*E.g.scale.y,E.parts.head.rotation.x=.35*te,E.parts.head.rotation.y=0,E.parts.eyes.forEach(Rt=>{Rt.scale.y=1-.8*te}),E.parts.tail.rotation.z=Math.sin(S*.8)*.15,E.zzz.visible=!0,E.zzz.position.set(E.g.position.x,.95+S*.6%1*.45,E.g.position.z),E.zzz.material.opacity=.9-S*.6%1*.6,E.sleep<=0&&(E.zzz.visible=!1,E.parts.eyes.forEach(Rt=>{Rt.scale.y=1}),E.parts.head.rotation.x=0,E.wait=zt(.3,1));return}let Y=Pn(E,g),St=Math.min(1,(E.v||0)/E.speed);E.t+=g*(Y?4+8*St:2);let wt=Y?Math.sin(E.t)*.6*St:0;E.parts.legs.forEach((te,Rt)=>{te.rotation.x=Rt===0||Rt===3?wt:-wt}),E.kind==="cat"?(E.parts.tail.rotation.z=Math.sin(S*2)*.35,E.parts.tail.rotation.x=E.sit&&!Y?.9:.5,E.g.children[0].rotation.x=0,E.parts.head.rotation.y=Y?0:Math.sin(S*.5)*.5,E.g.position.y=Be(E.g.position.x,E.g.position.z)):(E.parts.tail.rotation.z=Math.sin(S*(Y?18:10))*.6,E.parts.head.rotation.x=Y?0:Math.sin(S*1.3)*.1,E.g.position.y=Be(E.g.position.x,E.g.position.z)+(Y?Math.abs(Math.sin(E.t))*.07:0))});for(let E=At.length-1;E>=0;E--){let Y=At[E];Y.m.position.y>.24?(Y.vy-=g*9,Y.m.position.y=Math.max(.24,Y.m.position.y+Y.vy*g),Y.m.position.y===.24&&Nt(Y.m.position.x,Y.m.position.z,.5)):Y.m.position.y=.24+Math.sin(S*3+E)*.015,Y.life-=g,Y.life<=0&&(V.remove(Y.m),At.splice(E,1))}Ht.forEach(E=>{E.a+=E.sp*g;let Y=qt.x+Math.cos(E.a)*(qt.rx-1.6)*E.r,St=qt.z+Math.sin(E.a)*(qt.rz-1)*E.r,wt=null,te=1e9;if(At.forEach(Rt=>{if(Rt.m.position.y<=.3){let oe=Math.hypot(Rt.m.position.x-E.g.position.x,Rt.m.position.z-E.g.position.z);oe<te&&(te=oe,wt=Rt)}}),wt&&!E.jump){let Rt=wt.m.position.x-E.g.position.x,oe=wt.m.position.z-E.g.position.z,Oe=Math.hypot(Rt,oe),In=Math.min(Oe,2.6*g);E.g.position.x+=Rt/(Oe||1)*In,E.g.position.z+=oe/(Oe||1)*In,E.g.position.y=.16,E.g.rotation.y=Math.atan2(Rt,oe),Oe<.25&&(V.remove(wt.m),At.splice(At.indexOf(wt),1),Nt(wt.m.position.x,wt.m.position.z,.6)),E.a=Math.atan2((E.g.position.z-qt.z)/(qt.rz-1),(E.g.position.x-qt.x)/(qt.rx-1.6)),E.r=Math.min(.85,Math.max(.2,Math.hypot((E.g.position.x-qt.x)/(qt.rx-1.6),(E.g.position.z-qt.z)/(qt.rz-1)))),E.g.userData.tail.rotation.y=Math.sin(S*16+E.a)*.6;return}if(E.jump>0){E.jump+=g*.9;let Rt=Math.sin(E.jump*Math.PI)*1.8;E.g.position.set(fn(E.jx,Y,E.jump),.12+Rt,fn(E.jz,St,E.jump)),E.g.rotation.x=-Math.cos(E.jump*Math.PI)*1.1,E.jump>=1&&(E.jump=0,E.g.rotation.x=0,Qt.position.set(Y,.24,St),Qt.material.opacity=.8,Qt.scale.setScalar(1))}else{let Rt=Y-E.g.position.x,oe=St-E.g.position.z;E.g.position.set(fn(E.g.position.x,Y,Math.min(1,g*6)),.12,fn(E.g.position.z,St,Math.min(1,g*6))),(Rt||oe)&&(E.g.rotation.y=Math.atan2(Rt,oe)),Math.random()<g*.05&&(E.jump=.001,E.jx=Y,E.jz=St,Qt.position.set(Y,.24,St),Qt.material.opacity=.8,Qt.scale.setScalar(1))}E.g.userData.tail.rotation.y=Math.sin(S*8+E.a)*.5}),_t.glints.forEach(E=>{E.t=(E.t+E.sp*g*6)%1;let Y=_t.curve.getPointAt(E.t),St=_t.curve.getTangentAt(E.t);E.m.position.set(Y.x-St.z*E.side,.06,Y.z+St.x*E.side),E.m.rotation.z=-Math.atan2(St.z,St.x),E.m.material.opacity=.35+Math.abs(Math.sin(S*3+E.side*9))*.5}),_t.ftex.offset.y=(_t.ftex.offset.y+g*1.6)%1,_t.foam.forEach((E,Y)=>{let St=.8+Math.abs(Math.sin(S*5+Y))*.5;E.scale.setScalar(St)}),jt.ducks.forEach(E=>{E.a+=E.sp*g;let Y=qt.x+Math.cos(E.a)*(qt.rx-2),St=qt.z+Math.sin(E.a)*(qt.rz-1.2);E.g.rotation.y=Math.atan2(Y-E.g.position.x,St-E.g.position.z)||E.g.rotation.y,E.g.position.set(Y,.18+Math.sin(S*2+E.a)*.03,St)});for(let E=Lt.length-1;E>=0;E--){let Y=Lt[E];Y.material.opacity-=g*1.2,Y.scale.multiplyScalar(1+g*2.5*Y.userData.size),Y.material.opacity<=0&&(V.remove(Y),Y.geometry.dispose(),Lt.splice(E,1))}Qt.material.opacity>0&&(Qt.material.opacity=Math.max(0,Qt.material.opacity-g*.8),Qt.scale.multiplyScalar(1+g*1.8)),Le.forEach(E=>{E.ph+=g,E.g.position.set(E.cx+Math.sin(E.ph*.4)*6,1.6+Math.sin(E.ph*1.3)*.5,E.cz+Math.cos(E.ph*.33)*4),E.g.rotation.y=E.ph*.4+Math.PI/2;let Y=Math.sin(E.ph*18)*1.1;E.g.userData.l.rotation.y=Y,E.g.userData.r.rotation.y=-Y});let H=gn.geometry.attributes.position;for(let E=0;E<H.count;E++)H.setY(E,1.5+Math.sin(S*.8+E)*.8),H.setX(E,H.getX(E)+Math.sin(S*.5+E*3)*g*.4);if(H.needsUpdate=!0,I.forEach(E=>{E.position.x+=E.userData.speed*g,E.position.x>90&&(E.position.x=-90)}),rn&&xn(g),U.rotation.y+=g*.012,T.forEach(E=>{E.position.y=E.userData.y0+Math.sin(S*.6+E.userData.ph)*.45,E.rotation.y+=g*.03}),$.forEach(E=>{E.material.opacity=E.userData.base*Math.max(0,Math.sin(S*1.8+E.userData.ph))}),F.forEach(E=>{E.material.opacity=E.userData.base*(.55+.45*Math.sin(S*1.3+E.userData.ph))}),Jn>.6)if(q.t<0){if(q.wait-=g,q.wait<=0){let E=zt(0,Math.PI*2);q.from.set(Math.cos(E)*180,zt(110,170),Math.sin(E)*180-40),q.dir.set(zt(-1,1),zt(-.55,-.35),zt(-.3,.3)).normalize(),q.t=0}}else{q.t+=g/1.1,z.position.copy(q.from).addScaledVector(q.dir,q.t*120);let E=z.position.clone().project(o),Y=z.position.clone().addScaledVector(q.dir,10).project(o);z.material.rotation=Math.atan2(Y.y-E.y,Y.x-E.x),z.material.opacity=Math.sin(Math.min(1,q.t)*Math.PI)*.95,q.t>=1&&(q.t=-1,q.wait=zt(7,16),z.material.opacity=0)}else z.material.opacity=0;let et=k.userData.flag;et.rotation.y=Math.sin(S*3)*.25;let Q=k.userData.bell;Q.material.emissiveIntensity=nn?.6+Math.sin(S*6)*.4:0,Q.rotation.z=nn?Math.sin(S*7)*.35:0}let rn=null;function ci(g){if(!b.car||rn)return!1;let S=b.car,C={x:S.position.x,z:S.position.z,ry:S.rotation.y},H=tt.nearest(b.exit.x,b.exit.z),et=new Set(tt.doorNodes),E=tt.nodes.map((Rt,oe)=>oe).filter(Rt=>!et.has(Rt)&&Math.abs(Be(tt.nodes[Rt].x,tt.nodes[Rt].z))<.2).filter(Rt=>Math.hypot(tt.nodes[Rt].x-C.x,tt.nodes[Rt].z-C.z)>30),Y=Rt=>Rt[Math.floor(Math.random()*Rt.length)],St=E.length?[Y(E),Y(E)]:[],wt=[{x:C.x,z:C.z},{x:b.exit.x,z:b.exit.z}],te=H;return St.concat([H]).forEach(Rt=>{tt.path(te,Rt).forEach(oe=>wt.push({x:oe.x,z:oe.z})),te=Rt}),wt.push({x:b.exit.x,z:b.exit.z},{x:C.x,z:C.z-Math.cos(C.ry)*.01}),wt=wt.filter((Rt,oe)=>!oe||Math.hypot(Rt.x-wt[oe-1].x,Rt.z-wt[oe-1].z)>.3),rn={pts:wt,i:1,home:C,done:g,v:0,last:0},!0}function xn(g){let S=b.car,C=rn,H=C.pts[C.i],et=C.i===C.pts.length-1,Q=H.x-S.position.x,E=H.z-S.position.z,Y=Math.hypot(Q,E);if(C.v=Math.min(et?2:6.5,C.v+g*3),Y<.35){if(C.i++,C.i>=C.pts.length){S.position.set(C.home.x,Be(C.home.x,C.home.z),C.home.z),S.rotation.y=C.home.ry;let Rt=C.done;rn=null,Rt&&Rt();return}return}let St=Math.min(Y,C.v*g);S.position.x+=Q/Y*St,S.position.z+=E/Y*St,S.position.y=Be(S.position.x,S.position.z);let wt=Math.atan2(Q,E)+(et?Math.PI:0),te=S.rotation.y;for(;wt-te>Math.PI;)wt-=Math.PI*2;for(;wt-te<-Math.PI;)wt+=Math.PI*2;S.rotation.y=te+(wt-te)*Math.min(1,g*5)}let Jn=0;function Me(){let g=new Date,S=n!=null?n:g.getHours()+g.getMinutes()/60,C=Yd(S);Jn=C.night,r.background=C.sky,r.fog.color.copy(C.sky),m.uniforms.bottom.value.copy(C.sky).lerp(new ee(16777215),.18*(1-C.night)).lerp(new ee(10324950),.4*C.night),m.uniforms.top.value.copy(C.sky).lerp(new ee(C.night>.5?1316682:7320547),.5),p.intensity=C.amb,p.color.set(C.night>.5?10135776:16777215),p.groundColor.set(C.night>.5?3820122:12048288),x.color.copy(C.sun),x.intensity=C.power;let H=(S-6)/12*Math.PI,Q=S>=5.5&&S<=18.6?H:((S+12)%24-6)/12*Math.PI,E=Math.cos(Q)*70,Y=Math.max(Math.sin(Q),.25)*70;x.position.set(E,Y,40),x.target.position.set(0,0,0),v.position.set(Math.cos(H)*200,Math.sin(H)*160,-120),v.visible=Math.sin(H)>-.05;let St=((S+12)%24-6)/12*Math.PI;y.position.set(Math.cos(St)*200,Math.sin(St)*160,-120),y.visible=C.night>.3&&Math.sin(St)>0,P.material.opacity=C.night,F.forEach(wt=>{wt.userData.base=C.night}),U.mat.color.set(C.night>.5?10131656:16777215),$.forEach(wt=>{wt.userData.base=.55+C.night*.45}),gn.material.opacity=C.night*.95,xh.forEach(wt=>{wt.emissiveIntensity=C.night*.95}),_.forEach(wt=>{wt.intensity=C.night*18}),I.forEach(wt=>{wt.userData.mat.color.set(C.night>.5?8029096:16777215)}),Le.forEach(wt=>{wt.g.visible=C.night<.5})}let _n=1,$n=1;function on(){_n=i.clientWidth||window.innerWidth,$n=i.clientHeight||window.innerHeight,s.setSize(_n,$n,!1),o.aspect=_n/$n,o.updateProjectionMatrix()}let $e=new je;function Kn(g,S){$e.fov=o.fov,$e.aspect=o.aspect,$e.near=.5,$e.far=1e3,$e.updateProjectionMatrix();let C=[];for(let E=0;E<48;E++){let Y=E/48*Math.PI*2,St=Si(Y);C.push(new D(Math.cos(Y)*St,0,Math.sin(Y)*St))}C.push(new D(bn[0],9+lr.h,bn[1])),fo.forEach(([E,Y,St,wt])=>C.push(new D(E,wt,Y))),We.forEach(([E,Y])=>C.push(new D(E,6.5,Y)));let H=E=>{$e.position.set(0,Math.cos(g)*E,Math.sin(g)*E).add(S),$e.lookAt(S),$e.updateMatrixWorld();let Y=new D;return C.every(St=>(Y.copy(St).project($e),Math.abs(Y.x)<.97&&Y.y>-.97&&Y.y<.86))},et=10,Q=600;for(let E=0;E<30;E++){let Y=(et+Q)/2;H(Y)?Q=Y:et=Y}return Q}function Es(){on();let g=e==="port"?.6:.88,S=new D(0,0,1.5),C=Kn(g,S);return{p:new D(0,Math.cos(g)*C,Math.sin(g)*C).add(S),t:S}}function wh(){let g=Es();a.target.copy(g.t),o.position.copy(g.p),a.update()}let qd=1800,Zd=1900,Ue=null,pr=!1,mr=null,Va=g=>g<.5?4*g*g*g:1-Math.pow(-2*g+2,3)/2;function Th(g){let S=g.userData.face||0,C=Math.sin(S),H=Math.cos(S),et=g.userData.doorZ-1.3,Q=g.position.y,E=(Y,St)=>new D(g.position.x+C*(et+Y),Q+St,g.position.z+H*(et+Y));return{near:E(3.2,1.75),nearT:E(-1,1.45),inside:E(.35,1.6),insideT:E(-2,1.4)}}function Ah(g,S,C,H){if(!C)return g.clone().lerp(S,H);let et=g.clone().lerp(S,H),Q=S.clone().lerp(C,H);return et.lerp(Q,H)}function Jd(g,S,C){let H=rt.find(Q=>Q.userData.id===g);if(!H){S&&S();return}let et=Th(H);mr={p:o.position.clone(),t:a.target.clone()},Ue={mode:"in",start:performance.now(),dur:qd,h:H,done:S,at:C&&C.at,atFired:!1,p:[mr.p,et.near,et.inside],t:[mr.t,et.nearT,et.insideT]},a.enabled=!1,pr=!0}function $d(g,S){let C=rt.find(Q=>Q.userData.id===g);if(!C){Rh(),S&&S();return}let H=Th(C),et=mr||Es();C.userData.hinge&&(C.userData.hinge.rotation.y=-1.7),o.position.copy(H.inside),a.target.copy(H.insideT),o.lookAt(a.target),Ue={mode:"out",start:performance.now(),dur:Zd,h:C,done:S,p:[H.inside,H.near,et.p],t:[H.insideT,H.nearT,et.t]},a.enabled=!1,pr=!0}function Kd(){if(!Ue)return;let g=Math.min(1,(performance.now()-Ue.start)/Ue.dur),S=Va(g);o.position.copy(Ah(Ue.p[0],Ue.p[1],Ue.p[2],S)),a.target.copy(Ah(Ue.t[0],Ue.t[1],Ue.t[2],S)),o.lookAt(a.target);let C=Ue.h.userData.hinge;if(C&&(Ue.mode==="in"?C.rotation.y=-1.7*Va(Math.min(1,Math.max(0,(g-.25)/.45))):C.rotation.y=-1.7*(1-Va(Math.min(1,Math.max(0,(g-.2)/.5))))),Ue.at&&!Ue.atFired&&g>=Ue.at.k&&(Ue.atFired=!0,Ue.at.fn()),g>=1){let H=Ue.done,et=Ue.mode;Ue=null,et==="out"&&(pr=!1,a.enabled=!0,a.update()),H&&H()}}function Rh(){if(!pr||Ue&&Ue.mode==="out")return;pr=!1,Ue=null,a.enabled=!0,rt.forEach(S=>{S.userData.hinge&&(S.userData.hinge.rotation.y=0)});let g=mr||Es();o.position.copy(g.p),a.target.copy(g.t),a.update()}let gr=new ao,Ch=new pt,bs=null;s.domElement.addEventListener("pointerdown",g=>{bs={x:g.clientX,y:g.clientY}}),s.domElement.addEventListener("pointerup",g=>{if(!bs||Math.hypot(g.clientX-bs.x,g.clientY-bs.y)>6){bs=null;return}bs=null;let S=s.domElement.getBoundingClientRect();if(Ch.set((g.clientX-S.left)/S.width*2-1,-((g.clientY-S.top)/S.height)*2+1),gr.setFromCamera(Ch,o),j.her&&j.her.g.visible&&j.him.g.visible&&gr.intersectObjects([j.her.g,j.him.g],!0)[0]){j.kiss>0||(j.kiss=2.4,j.her.sitting||(j.her.path=[],j.her.wait=Math.max(j.her.wait,2.8)));return}let C=gr.intersectObjects([Yt.g,Zt.g],!0)[0];if(C){let E=Yt.g.getObjectById(C.object.id)?Yt:Zt;E.sleep>0||(E.sleep=3,E.sleepIn=0,E.path=[]);return}let H=gr.intersectObject(Mt)[0];if(H){ft(H.point.x-V.position.x,H.point.z-V.position.z);return}let et=gr.intersectObjects(rt,!0)[0];if(!et)return;let Q=et.object;for(;Q&&!Q.userData.id;)Q=Q.parent;Q&&t.onPick(Q.userData.id)});let xr=new D;function jd(g){let S=rt.find(C=>C.userData.id===g);return S?(xr.set(S.position.x,S.position.y+S.userData.top,S.position.z),xr.project(o),{x:(xr.x+1)/2*_n,y:(1-xr.y)/2*$n,visible:xr.z<1}):null}let Ga=new oo,_r=!1,Ss=!0,Ph=0,Ih=[];function Dh(){if(!_r)return;if(!Ss||document.hidden){_r=!1;return}requestAnimationFrame(Dh);let g=Math.min(.12,Ga.getDelta()),S=Ga.elapsedTime;S-Ph>20&&(Me(),Ph=S),ve(g,S),Ue?Kd():a.update(),s.render(r,o),Ih.forEach(C=>C())}function Wa(){_r||(_r=!0,Ga.getDelta(),requestAnimationFrame(Dh))}let Lh=()=>{!document.hidden&&Ss&&(Me(),Wa())},Uh=()=>{Ss&&on()};return document.addEventListener("visibilitychange",Lh),window.addEventListener("resize",Uh),Me(),wh(),Wa(),/[?&]debug3d/.test(location.search)&&(window.__v3d={drive:g=>ci(g),get car(){return b.car},renderer:s,people:bt,couple:j,get swing(){return Gt},graph:tt,cat:Yt,dog:Zt,routine:Yi,realHour:wi,camera:o,controls:a,water:Mt,food:At,get urgent(){return nn}}),{setUrgent(g){let S=nn;nn=g||0,!!S!=!!nn&&bt.forEach(C=>{!C.love&&!C.helper&&(C.path=[],C.wait=zt(0,1.5))})},setBusy(g){let S={};(t.houses||[]).forEach((C,H)=>{g&&g[C.id]>0&&(S[H]=g[C.id])}),Ut=S,sn()},anchor:jd,onFrame(g){Ih.push(g)},night(){return Jn},setTimeMode(g){n=g==="day"?11:g==="night"?22:null,Me()},show(g){Ss=!!g,Ss&&(Rh(),on(),Me(),Wa())},enterHouse:Jd,exitHouse:$d,drive:ci,resize:on,recenter:wh,layout:e,destroy(){_r=!1,Ss=!1,document.removeEventListener("visibilitychange",Lh),window.removeEventListener("resize",Uh),a.dispose(),r.traverse(g=>{g.geometry&&g.geometry.dispose()}),s.dispose(),s.domElement.remove()}}}var mn=9,zn=7,pn=4.4,Ba=7;function La(i,t){return new ee(i).lerp(new ee(16777215),t).getHex()}function ps(i,t,e,n,s){let r=new $t;return r.position.set(t,0,e),r.rotation.y=n||0,i.add(r),r.add(O(2.2,.08,1,s||14267535,0,.78,0)),[[-1,-.42],[1,-.42],[-1,.42],[1,.42]].forEach(([o,a])=>r.add(O(.08,.78,.08,11569768,o,.39,a))),r}function bi(i,t,e,n){let s=new $t;return s.position.set(t,0,e),s.rotation.y=n||0,i.add(s),s.add(O(.55,.08,.55,16165309,0,.5,0)),s.add(O(.55,.6,.08,16165309,0,.82,-.26)),[[-.22,-.22],[.22,-.22],[-.22,.22],[.22,.22]].forEach(([r,o])=>s.add(O(.06,.5,.06,9206379,r,.25,o))),s}function Ua(i,t,e){i.add(O(.7,.04,.48,14211296,t,.84,e));let n=O(.7,.46,.04,14211296,t,1.07,e-.24);n.rotation.x=-.25,i.add(n);let s=O(.62,.38,.02,0,t,1.07,e-.215,new He({color:12576498}));s.rotation.x=-.25,i.add(s)}function ms(i,t,e,n,s){let r=new $t;r.position.set(t,0,e),r.rotation.y=n||0,i.add(r),r.add(O(1.8,2.4,.4,12883572,0,1.2,0));for(let o=0;o<4;o++){r.add(O(1.7,.06,.36,14862765,0,.3+o*.55,.03));for(let a=0;a<(s||6);a++){let c=ue.flower[(a+o)%ue.flower.length],l=.3+(a*7+o*3)%4*.04;r.add(O(.16,l,.28,c===16777215?10934504:c,-.7+a*.24,.33+o*.55+l/2,.05))}}return r}function ri(i,t,e){i.add(O(.45,.45,.45,16368540,t,.22,e)),[[0,.75,0,.42],[.18,1.05,.1,.3],[-.15,1,-.1,.32]].forEach(([n,s,r,o],a)=>{let c=new ct(new Nn(o,2),Tt(ue.leaf[a],{}));c.position.set(t+n,s,e+r),c.castShadow=!0,i.add(c)})}function ys(i,t,e,n,s,r,o,a,c){let l=new $t;return l.position.set(t,e,n),l.rotation.y=s,i.add(l),l.add(O(r+.12,o+.12,.05,12883572,0,0,0)),l.add(O(r,o,.06,a,0,0,.01)),(c||[]).forEach(([h,u,d,p])=>l.add(O(p||.32,p||.32,.03,d,h,u,.06))),l}function Na(i,t,e,n,s){let r=[[-.45,.25],[-.15,.45],[.15,.35],[.45,.6]],o=ys(i,t,e,n,s,1.4,1.1,16775920);return r.forEach(([a,c],l)=>o.add(O(.2,c,.03,[16758465,10934504,14542964,14273008][l],a,-.4+c/2,.06))),o}function Nd(i,t,e,n,s,r){let o=r?2.2:1.1,a=r?1.6:.9,c=ys(i,t,e,n,s,o,a,16777215);c.add(O(o,a*.18,.04,16751536,0,a*.41,.05));for(let l=0;l<4;l++)for(let h=0;h<7;h++){let u=(l*7+h)%9===3;c.add(O(o/9,a/7,.02,u?16766687:15985894,-o/2+(h+1)*o/8,a*.2-l*a/5.5,.06))}return c}function gy(i,t,e,n,s){let r=new $t;r.position.set(t,e,n),r.rotation.y=s,i.add(r);let o=new ct(new fe(.35,.35,.06,20),Tt(16775920));o.rotation.x=Math.PI/2,r.add(o);let a=new ct(new Xi(.36,.04,6,20),Tt(16165309));r.add(a);let c=O(.04,.18,.02,4865855,0,.08,.05),l=O(.03,.27,.02,4865855,0,.12,.06);return r.add(c,l),r.userData.hands=[c,l],r}function xy(i,t,e){let n=new ct(new De(.28,12,10),Tt(16758465));n.scale.set(1.3,1,1),n.position.set(t,1.1,e),i.add(n),i.add(O(.12,.1,.1,16751536,t+.38,1.1,e)),[[-.15,-.12],[.15,-.12],[-.15,.12],[.15,.12]].forEach(([s,r])=>i.add(O(.07,.12,.07,16751536,t+s,.86,e+r))),i.add(O(.12,.02,.03,9202282,t,1.38,e));for(let s=0;s<3;s++)for(let r=0;r<2+s;r++){let o=new ct(new fe(.09,.09,.03,12),Tt(16111752));o.position.set(t-.7+s*.22,.84+r*.035,e+.1),i.add(o)}}function Od(i,t,e,n){let s=new $t;s.position.set(t,0,e),s.rotation.y=n||0,i.add(s),s.add(O(1,1.1,.9,10135480,0,.55,0));let r=new ct(new fe(.14,.14,.05,14),Tt(16111752));return r.rotation.x=Math.PI/2,r.position.set(.15,.6,.46),s.add(r),s.add(O(.06,.3,.05,16111752,-.3,.6,.46)),s}function _y(i,t,e,n){let s=new $t;return s.position.set(t,0,e),s.rotation.y=n||0,i.add(s),s.add(O(2,.08,.45,12883572,0,1.3,0)),s.add(O(2,.08,.45,12883572,0,.6,0)),[-1,1].forEach(r=>s.add(O(.08,1.4,.45,11569768,r*.96,.7,0))),[.6,1.3].forEach((r,o)=>[-.65,-.2,.25,.7].forEach((a,c)=>{let l=new ct(new fe(.15,.15,.4,12),new me({color:15136507,transparent:!0,opacity:.7}));l.position.set(a,r+.24,0),s.add(l);let h=.08+(c+o*2)%4*.08,u=new ct(new fe(.12,.12,h,12),Tt(16111752));u.position.set(a,r+.06+h/2,0),s.add(u)})),s}function yy(i,t,e,n){let s=new $t;return s.position.set(t,0,e),s.rotation.y=n||0,i.add(s),s.add(O(.9,1.5,.7,10934504,0,.75,0)),[.35,.8,1.25].forEach(r=>{s.add(O(.8,.38,.04,12576498,0,r,.36)),s.add(O(.25,.05,.05,16775920,0,r+.08,.39))}),s}function vy(i,t,e){[0,2.1,4.2].forEach(r=>{let o=O(.04,1.4,.04,7035470,t+Math.cos(r)*.25,.65,e+Math.sin(r)*.25);o.rotation.set(Math.sin(r)*.3,0,-Math.cos(r)*.3),i.add(o)}),i.add(O(.4,.28,.25,4865855,t,1.45,e));let n=new ct(new fe(.09,.09,.15,12),Tt(3025462));n.rotation.x=Math.PI/2,n.position.set(t,1.45,e+.18),i.add(n);let s=new ct(new Xi(.4,.05,6,24),new He({color:16774351}));s.position.set(t-.9,1.7,e-.3),i.add(s),i.add(O(.04,1.7,.04,7035470,t-.9,.85,e-.3))}function My(i,t,e,n,s){let r=ys(i,t,e,n,s,1.2,.7,15785156);[-.4,-.13,.13,.4].forEach((o,a)=>{r.add(O(.05,.05,.08,9206379,o,.18,.08)),r.add(O(.1,.22,.03,[16111752,10934504,16758465,10738109][a],o,-.02,.08))})}var gh={work:{first:"list",build(i,t){let e=ps(i,-1.6,-2.4);Ua(e,.2,0),e.add(O(.3,.2,.22,16777215,-.75,.92,.1)),bi(i,-1.4,-1.55,Math.PI),t.seat={x:-1.4,z:-1.6,ry:Math.PI,y:.54},ys(i,-4.45,1.8,.4,Math.PI/2,2.6,1.4,16777215,[[-.9,.35,16773544],[-.4,.4,16758465],[.1,.3,10934504],[.6,.38,10738109],[-.8,-.2,16758465],[-.2,-.25,16773544],[.5,-.2,14273008]]),ms(i,4.25,-.6,-Math.PI/2),Na(i,4.44,2.2,1.6,-Math.PI/2),vy(i,3.4,4.6),ri(i,-3.9,-3)},corners:{list:[.8,2.9,5.8,-1.3,1,-2.2],board:[2.4,2.7,4.2,-4.3,1.6,.3],stats:[-2.4,2.7,4.2,4.3,1.5,.3],posts:[-.6,2.5,8.6,3.2,1.3,4.4]}},money:{first:"overview",build(i,t){let e=ps(i,0,-2.3,0,16368540);xy(e,.4,0),e.add(O(.35,.05,.45,9417689,-.5,.84,.1)),bi(i,.2,-1.45,Math.PI),t.seat={x:.2,z:-1.5,ry:Math.PI,y:.54},Nd(i,-4.44,1.9,-.8,Math.PI/2,!0),Na(i,-4.44,1.9,2.1,Math.PI/2),_y(i,4.2,-1,-Math.PI/2),yy(i,3.6,-3,0),Od(i,3.6,2,-Math.PI/2.5),ri(i,-3.9,-3),t.windowX=-1.9},corners:{overview:[.6,2.9,5.8,0,1,-2.3],calendar:[2.6,2.7,3.6,-4.3,1.8,-.8],stats:[2.6,2.7,5.4,-4.3,1.8,1.8],budget:[-2.4,2.7,3.6,4.2,1.1,-1.2],history:[-1.6,2.7,3.8,3.4,1,-3],categories:[-1.6,2.5,6.2,3.6,.7,2]}},calendar:{first:"main",build(i,t){Nd(i,-.1,2.05,-3.44,0,!0),gy(i,-2.6,2.5,-3.44,0),t.windowX=2.9;let e=ps(i,-1.2,-1.6);e.add(O(.5,.06,.36,16773544,.3,.84,0)),e.add(O(.04,.04,.3,15834032,.65,.88,0)),bi(i,-1,-.75,Math.PI),t.seat={x:-1,z:-.8,ry:Math.PI,y:.54},ms(i,4.25,.2,-Math.PI/2,5),ri(i,3.8,2.6)},corners:{main:[-.2,2.9,5.8,-.4,1.5,-2.8]}},account:{first:"main",build(i,t){Od(i,3.7,-2.6,-.3),My(i,-.5,2,-3.44,0),t.windowX=1.7;let e=ps(i,-1.8,-1.8,.2);Ua(e,0,0),bi(i,-1.75,-.95,Math.PI+.2),t.seat={x:-1.72,z:-1,ry:Math.PI+.2,y:.54},ms(i,-4.25,.6,Math.PI/2,5),ri(i,3.9,1.8)},corners:{main:[-.2,2.9,5.8,-.9,1.2,-2.4]}},love:{first:"main",build(i,t){let n=new $t;n.position.set(-.4,0,-2.5),i.add(n),n.add(O(2.6,.45,.9,16165309,0,.32,0)),n.add(O(2.6,.75,.25,15834032,0,.8,-.35)),[-1,1].forEach(F=>n.add(O(.25,.65,.9,15834032,F*1.3,.45,0)));let s=vs(16744350);s.scale.setScalar(.4),s.position.set(1,.75,-.15),n.add(s),t.seats=[{x:-.85,z:-2.35,ry:0,y:.56},{x:.05,z:-2.35,ry:0,y:.56}],t.sofa=!0,t.couple=!0,[[-1.95,2.35,.55,3095915],[-1.65,2.35,-.55,15230251]].forEach(([F,z,q,V])=>{let J=new $t;J.position.set(F,z,-3.44+.06),J.rotation.z=q,i.add(J),J.add(O(.06,.34,.05,16777215,0,-.5,0)),J.add(O(.025,.34,.025,10135480,0,-.17,0));let ut=new ct(new Xi(.17,.02,6,22),Tt(V));ut.scale.y=1.3,ut.position.y=.2,J.add(ut);for(let K=-3;K<=3;K++)J.add(O(.004,.42,.004,16777215,K*.045,.2,0)),J.add(O(.32,.004,.004,16777215,0,.2+K*.055,0))});{let F=document.createElement("canvas");F.width=128,F.height=64;let z=F.getContext("2d");z.fillStyle="#ffffff",z.fillRect(0,0,128,64),z.fillStyle="#e8652b",z.fillRect(0,8,128,16),z.fillStyle="#26305a",z.beginPath(),z.moveTo(0,64),z.lineTo(0,24),z.lineTo(14,24),z.lineTo(30,64),z.fill(),z.fillStyle="#26305a",z.fillRect(0,6,128,2),z.fillRect(26,28,102,2),z.font="bold 13px sans-serif",z.fillText("YONEX",74,54),z.beginPath(),z.arc(60,49,3,0,7),z.arc(67,49,3,0,7),z.lineWidth=2,z.strokeStyle="#26305a",z.stroke();let q=new En(F);q.colorSpace=Fe;let V=Tt(16777215),J=new me({map:q}),ut=new ct(new Ge(1.15,.58,.36),[V,V,Tt(15230251),V,J,J]);ut.position.set(1.25,1.62,-3.44+.22),ut.castShadow=!0,i.add(ut),[-.28,.28].forEach(K=>{i.add(O(.06,.5,.03,16777215,1.25+K*.9,2.02,-3.44+.2))}),i.add(O(.5,.06,.06,2502746,1.25,2.28,-3.44+.2)),i.add(O(.06,.06,.16,9206379,1.25,2.32,-3.44+.1))}i.add(O(1.42,1.08,.06,12883572,-.4,2.55,-3.44+.02)),i.add(O(1.28,.94,.07,16775920,-.4,2.55,-3.44+.03));let r=new ct(new Bi(1.1,.78),new He({color:16766687}));r.position.set(-.4,2.55,-3.44+.075),r.userData.pick="frame",i.add(r),t.frames=[r];for(let F=0;F<14;F++){let z=new ct(new De(.05,6,5),new He({color:[16773544,16758465][F%2]}));z.position.set(-4+F*.62,3.45-Math.sin(F*.9)*.08,-3.38),i.add(z)}let o=new $t;o.position.set(1.65,0,-2.3),i.add(o);let a=new ct(new fe(.42,.42,.06,18),Tt(14861214));a.position.y=.6,o.add(a),o.add(O(.07,.6,.07,11569768,0,.3,0));let c=new ct(new fe(.22,.25,.04,14),Tt(11569768));c.position.y=.02,o.add(c);let l=new ct(new De(.13,16,12),Tt(13231096));l.scale.y=1.3,l.position.y=.8,o.add(l),[[0,1.08,0,16758465],[.08,1.02,.05,16773544],[-.08,1.04,-.03,16165309]].forEach(([F,z,q,V])=>{o.add(O(.015,.25,.015,8173679,F*.6,.95,q*.6));let J=new ct(new De(.06,10,8),Tt(V));J.position.set(F,z,q),o.add(J)});let h=new $t;h.userData.pick="up",i.add(h);for(let F=0;F<10;F++)h.add(O(1.1,(F+1)*.44,.5,F%2?15323054:14861214,-3.88,(F+1)*.22,2.2-F*.48)),h.add(O(1.12,.05,.52,16165309,-3.88,(F+1)*.44+.02,2.2-F*.48)),F%2===0&&h.add(O(.06,.8,.06,16777215,-3.3,(F+1)*.44+.4,2.2-F*.48));{let F=Math.hypot(4.8,4.4),z=O(.08,.08,F,16777215,-3.3,2.2+.8+.22,.04);z.rotation.x=Math.atan2(4.4,4.8),h.add(z)}let u=Mh("\u2B06 bedroom","#d0668c",.34);u.position.set(-3.3,2.75,.2),h.add(u);let d=new $t;d.position.set(1.3,0,1.25),i.add(d),d.add(O(1.5,.06,.95,14861214,0,.76,0)),[[-.65,-.38],[.65,-.38],[-.65,.38],[.65,.38]].forEach(([F,z])=>d.add(O(.06,.76,.06,11569768,F,.38,z))),[-1,1].forEach(F=>{let z=(q,V,J)=>{let ut=new ct(new fe(.15,.1,.1,12),Tt(16777215));ut.position.set(q,.84,V),d.add(ut);let K=new ct(new fe(.135,.135,.02,12),Tt(J));K.position.set(q,.88,V),d.add(K)};z(F*.4-.16,-.18,16183264),z(F*.4+.16,-.18,14257226),[[-.05,-.2],[.05,-.14],[0,-.24]].forEach(([q,V])=>d.add(O(.07,.03,.05,9065011,F*.4+.16+q,.9,V))),d.add(O(.32,.012,.012,12883572,F*.4,.8,.05)),d.add(O(.32,.012,.012,12883572,F*.4,.8,.08))});let p=new ct(new fe(.2,.2,.03,12),Tt(16777215));p.position.set(0,.8,-.05),d.add(p);for(let F=0;F<7;F++)d.add(O(.07,.04,.05,[7321690,9423996][F%2],(F%3-1)*.08,.83,(Math.floor(F/3)-1)*.07-.05));bi(i,1.3-.4,1.25-.85,0),bi(i,1.3+.4,1.25-.85,0),t.dining=[{x:1.3-.4,z:1.25-.8,ry:0,y:.54},{x:1.3+.4,z:1.25-.8,ry:0,y:.54}],t.windowX=3.1,ri(i,3.95,-2.9),t.dinner=d,t.defaultDishes=d.children.slice(5);let x=14,_=new $t;_.position.x=x,i.add(_);let m=zn+Ba,f=Ba/2;for(let F=0;F<12;F++){let z=O(mn/12,.1,m,F%2?15981768:15651517,-mn/2+(F+.5)*mn/12,-.05,f);z.castShadow=!1,_.add(z)}let v=O(mn,pn,.12,t.wall,0,pn/2,-zn/2);v.castShadow=!1,_.add(v),[-1,1].forEach(F=>{let z=O(.12,pn,m,t.wall2,F*mn/2,pn/2,f);z.castShadow=!1,_.add(z)});let y=O(mn,.12,m,0,0,pn+.06,f,new me({color:t.ceil,emissive:t.ceil,emissiveIntensity:.3}));y.castShadow=!1,_.add(y),_.add(O(1.9,1.5,.08,16777215,2.9,2.3,-zn/2+.06)),_.add(O(1.7,1.3,.09,0,2.9,2.3,-zn/2+.07,t.skyMat)),[-1,1].forEach(F=>_.add(O(.26,1.8,.05,16762063,2.9+F*1.08,2.25,-zn/2+.2))),_.add(O(2.8,.4,3.4,15918810,0,.28,-1.85)),_.add(O(2.6,.22,3.2,16777215,0,.58,-1.85)),_.add(O(3,1.5,.22,16171471,0,1,-3.48)),_.add(O(2.7,.18,.1,16372702,0,1.6,-3.36)),[-.62,.62].forEach(F=>_.add(O(1,.2,.55,16775925,F,.8,-3))),_.add(O(2.72,.12,2.35,16368595,0,.98,-1.25)),_.add(O(2.74,.14,.32,16777215,0,.99,-2.3)),[-1.4,1.4].forEach(F=>_.add(O(.12,.5,2.3,16368595,F,.75,-1.25)));let M=vs(16748465);M.scale.setScalar(.32),M.position.set(0,1.25,-3.3),_.add(M),[-1.95,1.95].forEach(F=>{_.add(O(.75,.62,.6,14861214,F,.31,-3.05)),_.add(O(.79,.05,.64,15785156,F,.64,-3.05)),_.add(O(.5,.05,.02,12883572,F,.42,-2.74))});let B=new ct(new De(.12,14,10),Tt(16171471));B.position.set(-1.95,.76,-3.05),_.add(B);let P=new ct(new fe(.16,.24,.26,18,1,!0),new me({color:16773590,emissive:16765562,emissiveIntensity:0,side:hn}));P.position.set(-1.95,1.02,-3.05),_.add(P),t.bedLamp=P;let I=new $t;I.position.set(1.95,.7,-3),I.rotation.y=-.3,I.userData.pick="album",_.add(I),I.add(O(.5,.08,.38,13231096,0,0,0)),I.add(O(.04,.085,.38,11127784,-.25,0,0));let U=vs(16027569);U.scale.setScalar(.15),U.rotation.x=-Math.PI/2,U.position.set(.02,.045,.06),I.add(U),t.album=I;let T=new $t;T.userData.pick="down",_.add(T),T.add(O(1.3,.04,2.6,12098694,-3.75,.005,1.2)),[.1,.6,1.1,1.6,2.1].forEach((F,z)=>T.add(O(1.2,.03,.42,10257008,-3.75,.02,.05+F-z*.02)));for(let F=0;F<6;F++)T.add(O(.06,.85,.06,16777215,-3.05,.42,-.05+F*.5));T.add(O(.08,.08,2.6,16777215,-3.05,.86,1.2));let w=Mh("\u2B07 living room","#d0668c",.34);w.position.set(-3,1.35,.6),T.add(w);let N=new ct(new fe(1,1,.03,32),Tt(14281207));N.scale.set(1.8,1,1.1),N.position.set(.6,.02,1),_.add(N),ri(_,3.95,.4);for(let F=0;F<14;F++){let z=new ct(new De(.05,6,5),new He({color:[16773544,16758465][F%2]}));z.position.set(-4+F*.62,3.45-Math.sin(F*.9)*.08,-3.38),_.add(z)}t.bedSpots=[{x:x-.45,z:-1.42},{x:x+.45,z:-1.42}]},corners:{main:[.2,2.8,6.6,0,1.3,-1.9],bed:[14.2,2.6,3.4,14,.9,-2.3],meal:[1,2.6,5.6,1.2,1,-.6],album:[15.75,1.75,-1.85,15.9,.55,-3.05]}},game:{first:"main",build(i,t){i.add(O(2.6,.6,.6,12883572,0,.3,-3.05)),i.add(O(2.2,1.3,.1,3025462,0,1.35,-3.15));let e=O(2.05,1.15,.02,0,0,1.35,-3.09,new He({color:10934504}));i.add(e),[[-.6,1.55,16758465],[.1,1.2,16111752],[.6,1.6,10738109]].forEach(([s,r,o])=>i.add(O(.3,.3,.01,0,s,r,-3.075,new He({color:o})))),i.add(O(.5,.12,.35,16777215,.8,.66,-2.95));let n=new ct(new De(.7,14,10),Tt(16165309));n.scale.set(1.1,.6,1),n.position.set(.2,.4,-.4),n.castShadow=!0,i.add(n),t.seats=[{x:.2,z:-.45,ry:Math.PI,y:.78}],t.gamer=!0,Na(i,-4.44,2.2,-.8,Math.PI/2),ys(i,4.44,2.2,-.4,-Math.PI/2,1.2,1.5,14273008,[[0,.3,16758465,.5],[0,-.35,16111752,.4]]),ms(i,-4.25,1.8,Math.PI/2,5),ri(i,3.9,-3),t.windowX=2.9},corners:{main:[.4,2.8,5.6,0,1.1,-2.6]}},language:{first:"main",build(i,t){let e=ps(i,-1.2,-2.3,0,16171471);e.add(O(.5,.05,.36,16777215,-.2,.83,0)),e.add(O(.5,.05,.36,16774888,.32,.83,0)),e.add(O(.02,.06,.36,12883572,.06,.84,0)),[10934504,16758465,16111752].forEach((s,r)=>e.add(O(.4,.07,.28,s,.85,.83+r*.075,-.05)));let n=new ct(new De(.18,20,14),Tt(10473444));n.position.set(-.8,1.08,0),e.add(n),e.add(O(.05,.25,.05,12883572,-.8,.9,0)),bi(i,-1,-1.45,Math.PI),t.seat={x:-1,z:-1.5,ry:Math.PI,y:.54},ys(i,-4.45,1.9,.2,Math.PI/2,2.4,1.4,16777215,[[-.75,.35,16758465],[-.25,.35,16773544],[.25,.35,10934504],[.75,.35,10738109],[-.5,-.25,14273008],[0,-.25,16758465],[.5,-.25,16773544]]),ms(i,4.25,-.4,-Math.PI/2,5),Na(i,4.44,2.3,1.8,-Math.PI/2),ri(i,3.9,-3),t.windowX=2.2},corners:{main:[-.3,2.9,5.8,-.9,1.1,-2.3]}},skills:{first:"main",build(i,t){let e=ps(i,-.6,-2.3,0,16111752);Ua(e,-.3,0),e.add(O(.45,.04,.32,16777215,.45,.83,.05)),e.add(O(.02,.02,.3,15235487,.62,.86,.05));let n=O(.6,.3,.32,15035243,3.4,.15,-2.6);i.add(n),i.add(O(.3,.05,.05,3814720,3.4,.35,-2.6)),bi(i,-.4,-1.45,Math.PI),t.seat={x:-.4,z:-1.5,ry:Math.PI,y:.54};let s=new $t;s.position.set(-3.3,0,-1.6),s.rotation.y=.5,i.add(s),[-.4,.4].forEach(r=>{let o=O(.07,1.9,.07,12883572,r,.95,0);o.rotation.z=-r*.15,s.add(o)}),s.add(O(1,.8,.05,16777215,0,1.35,.06)),s.add(O(.5,.3,.06,10934504,-.15,1.45,.08)),s.add(O(.25,.25,.06,16758465,.25,1.2,.08)),ys(i,4.44,2,-.5,-Math.PI/2,1.6,1.2,16777215,[[-.5,-.25,10738109,.3],[-.15,-.1,16111752,.3],[.2,.05,16758465,.3],[.55,.2,10934504,.3]]),ms(i,-4.25,1.4,Math.PI/2,5),ri(i,3.9,2.4),t.windowX=2.4},corners:{main:[0,2.9,5.8,-.3,1.1,-2.2]}},other:{first:"main",build(i,t){let e=ps(i,-1,-2.3);Ua(e,0,0),bi(i,-.8,-1.45,Math.PI),t.seat={x:-.8,z:-1.5,ry:Math.PI,y:.54},ms(i,4.25,-.6,-Math.PI/2),ri(i,-3.9,-3)},corners:{main:[0,2.9,5.8,0,1.1,-2]}}};function Ey(i,t){t=t||{};let e=gh[t.house]||(t.kind==="game"?gh.game:gh.other),n=new Wr({antialias:!0});n.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),n.shadowMap.enabled=!0,n.shadowMap.type=va,i.appendChild(n.domElement);let s=new Xr,r=new je(48,1,.1,100),o=La(t.roof||16165309,.72),a=La(t.roof||16165309,.55);s.background=new ee(La(t.roof||16165309,.82));let c=new $t;s.add(c);let l=zn+Ba,h=Ba/2;for(let $=0;$<12;$++){let dt=O(mn/12,.1,l,$%2?15323054:14861214,-mn/2+($+.5)*mn/12,-.05,h);dt.castShadow=!1,c.add(dt)}let u=O(mn,pn,.12,o,0,pn/2,-zn/2);u.castShadow=!1,c.add(u),[-1,1].forEach($=>{let dt=O(.12,pn,l,a,$*mn/2,pn/2,h);dt.castShadow=!1,dt.receiveShadow=!0,c.add(dt)});let d=La(t.roof||16165309,.9),p=O(mn,.12,l,0,0,pn+.06,h,new me({color:d,emissive:d,emissiveIntensity:.3}));p.castShadow=!1,c.add(p);let x=$=>{$.castShadow=!1,c.add($)};x(O(mn,.16,.12,16777215,0,pn-.08,-zn/2+.1)),[-1,1].forEach($=>x(O(.12,.16,l,16777215,$*(mn/2-.1),pn-.08,h))),x(O(mn,.14,.04,16777215,0,.07,-zn/2+.08)),[-1,1].forEach($=>x(O(.04,.14,l,16777215,$*(mn/2-.08),.07,h)));let _=new He({color:12575733}),m=new ct(new fe(1,1,.03,32),Tt(16176348));m.scale.set(2,1,1.3),m.position.set(.3,.02,.6),m.receiveShadow=!0,c.add(m);let f=O(.03,.55,.03,9206379,.3,pn-.27,.3);f.castShadow=!1,c.add(f);let v=new ct(new Ei(.45,.4,12,1,!0),new me({color:16773544,emissive:16765562,emissiveIntensity:0,side:hn}));v.position.set(.3,pn-.72,.3),v.castShadow=!1,c.add(v);let y={wall:o,wall2:a,ceil:d,skyMat:_};e.build(c,y);{let $=y.windowX!=null?y.windowX:2.2,dt=2.1,rt=-zn/2;c.add(O(1.9,1.5,.08,16777215,$,dt,rt+.06)),c.add(O(1.7,1.3,.09,0,$,dt,rt+.07,_)),c.add(O(.05,1.3,.1,16777215,$,dt,rt+.1)),c.add(O(1.7,.05,.1,16777215,$,dt,rt+.1));let R=O(2.5,.05,.05,12883572,$,dt+.9,rt+.2);R.castShadow=!1,c.add(R),[-1,1].forEach(b=>{let k=O(.24,1.75,.05,16762063,$+b*1.08,dt+0,rt+.2);k.castShadow=!1,c.add(k);let Z=O(.28,.06,.07,16165309,$+b*1.08,dt-.25,rt+.22);Z.castShadow=!1,c.add(Z)})}let M=[];c.traverse($=>{$.userData.hands&&(M=$.userData.hands)});let B=y.seats||(y.seat?[y.seat]:[]),P=t.looks||(t.look?[t.look]:[]),I=B.slice(0,P.length).map(($,dt)=>{let rt=Gd(P[dt]);return c.add(rt.g),rt.g.position.set($.x,$.y-vh,$.z),rt.g.rotation.y=$.ry,rt.parts.legL.rotation.x=rt.parts.legR.rotation.x=-1.45,rt}),U=y.sofa||y.gamer?null:I[0]||null,T="",w=[];y.couple&&I.forEach(($,dt)=>{$.g.userData.pick="couple";let rt=Mh(dt===0?"namu":"hunf",dt===0?"#e8799f":"#5f8fc4",.3);c.add(rt),w.push(rt)});let N=(()=>{let $=vs(16744350);return $.scale.setScalar(.16),$.visible=!1,c.add($),$})(),F=-1,z="",q=!1,V=!1,J=()=>z==="bed"?"bed":T==="lunch"||T==="dinner"?"meal":e.corners[t.corner]?t.corner:e.first;function ut($,dt){z=$,jt(J(),dt)}let K=Wd("z Z z","#7a6a9a",.9,.45);if(c.add(K),t.onPick){let $=new ao,dt=new pt,rt=null,R=0,b=!1,k=0,Z=n.domElement,tt=(j,xt)=>{let Ut=Z.getBoundingClientRect();dt.set((j-Ut.left)/Ut.width*2-1,-((xt-Ut.top)/Ut.height)*2+1),$.setFromCamera(dt,r);let gt=$.intersectObjects(c.children,!0).find(Yt=>{if(Yt.object.isSprite)return!1;let Zt=Yt.object;for(;Zt&&!Zt.userData.pick;)Zt=Zt.parent;return!!Zt});if(!gt)return"";let Dt=gt.object;for(;Dt&&!Dt.userData.pick;)Dt=Dt.parent;return Dt.userData.pick},st=()=>{let j=new D;w[0].getWorldPosition(j);let xt=new D;w[1].getWorldPosition(xt),j.add(xt).multiplyScalar(.5).project(r);let Ut=Z.getBoundingClientRect();t.onPick("couple-menu",{x:Ut.left+(j.x+1)/2*Ut.width,y:Ut.top+(1-j.y)/2*Ut.height})},bt=j=>{if(j==="couple"){F<0&&(F=0);return}if(j==="up"||j==="down"){q=!0,ut(j==="up"?"bed":"main");return}if(j==="album"){V=!0,jt("album"),setTimeout(()=>t.onPick("album"),750);return}t.onPick(j)};Z.addEventListener("contextmenu",j=>j.preventDefault()),Z.addEventListener("pointerdown",j=>{rt={x:j.clientX,y:j.clientY,type:j.pointerType},b=!1,clearTimeout(R),j.pointerType!=="mouse"&&y.couple&&tt(j.clientX,j.clientY)==="couple"&&(R=setTimeout(()=>{b=!0,st()},520))}),Z.addEventListener("pointermove",j=>{rt&&Math.hypot(j.clientX-rt.x,j.clientY-rt.y)>8&&clearTimeout(R)}),Z.addEventListener("pointerup",j=>{if(clearTimeout(R),!rt||b||Math.hypot(j.clientX-rt.x,j.clientY-rt.y)>8){rt=null;return}let xt=rt.type;rt=null;let Ut=tt(j.clientX,j.clientY);if(Ut){if(Ut==="couple"&&xt==="mouse"){clearTimeout(k),k=setTimeout(()=>bt("couple"),260);return}bt(Ut)}}),Z.addEventListener("dblclick",j=>{!y.couple||tt(j.clientX,j.clientY)!=="couple"||(clearTimeout(k),st())})}let _t=y.gamer?I[0]:null,lt=new io(16777215,14861214,1.4);s.add(lt);let It=new ro(16774374,1.6);It.position.set(2.5,pn-.3,8),It.target.position.set(0,0,-2),s.add(It.target),It.castShadow=!0,It.shadow.mapSize.set(1024,1024),Object.assign(It.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:.5,far:25}),It.shadow.bias=-.001,s.add(It);let ie=new so(16767392,0,12,1.3);ie.position.set(.3,pn-1.1,.3),s.add(ie);function Xt(){let $=new Date,dt=t.timeMode==="day"?11:t.timeMode==="night"?22:$.getHours()+$.getMinutes()/60,rt=Yd(dt);_.color.copy(rt.sky),lt.intensity=1.5-rt.night*.7,It.intensity=1.6*(1-rt.night)+.2,ie.intensity=rt.night*8,v.material.emissiveIntensity=rt.night,M.length&&(M[0].rotation.z=-($.getHours()%12)/12*Math.PI*2,M[1].rotation.z=-$.getMinutes()/60*Math.PI*2)}let at=new D,yt=new D,Ft=new D,Mt=new D;function Kt($){return e.corners[$]||e.corners[e.first]}function jt($,dt){let rt=Kt($);Ft.set(rt[0],rt[1],rt[2]),Mt.set(rt[3],rt[4],rt[5]),dt&&(at.copy(Ft),yt.copy(Mt))}jt(t.corner,!0),t.walkIn&&(at.set(0,1.7,zn/2+3.2),yt.set(0,1.4,-zn/2));function ne(){let $=i.clientWidth||innerWidth,dt=i.clientHeight||innerHeight;n.setSize($,dt,!1),r.aspect=$/dt,r.fov=$/dt<.9?64:50,$/dt<.9?r.setViewOffset($,dt,0,-dt*.2,$,dt):r.clearViewOffset(),r.updateProjectionMatrix()}ne();let he=()=>ne();window.addEventListener("resize",he);let ht=new oo,vt=new D,L=!0,Bt=0;function mt(){if(!L||(requestAnimationFrame(mt),document.hidden))return;let $=Math.min(.1,ht.getDelta()),dt=ht.elapsedTime;if(at.lerp(Ft,Math.min(1,$*1.6)),yt.lerp(Mt,Math.min(1,$*1.6)),r.position.copy(at),r.lookAt(yt),y.couple){let rt=new Date,R=rt.getHours()+rt.getMinutes()/60,b=R>=22||R<6.5?"sleep":R>=11.5&&R<13?"lunch":R>=18.5&&R<19.75?"dinner":"sofa";if(b!==T){T=b,!q&&!V&&ut(b==="sleep"?"bed":"main",!z&&!t.walkIn);let k=b==="lunch"||b==="dinner"?y.dining:y.seats;I.forEach((Z,tt)=>{if(b==="sleep"){let st=y.bedSpots[tt];Z.g.position.set(st.x,.9,st.z),Z.g.rotation.set(-Math.PI/2,0,0),Z.parts.legL.rotation.x=Z.parts.legR.rotation.x=0}else Z.g.position.set(k[tt].x,k[tt].y-vh,k[tt].z),Z.g.rotation.set(0,k[tt].ry,0),Z.parts.legL.rotation.x=Z.parts.legR.rotation.x=-1.45;Z.sleepMap||(Z.sleepMap=Vd(Z.parts.look,!0)),Z.awakeMap||(Z.awakeMap=Z.parts.mat.map),Z.parts.mat.map=b==="sleep"?Z.sleepMap:Z.awakeMap,Z.parts.mat.needsUpdate=!0}),K.visible=b==="sleep"}if(I.forEach((k,Z)=>{let tt=Z===0?-1:1;T==="lunch"||T==="dinner"?(k.parts.armL.rotation.x=-.9,k.parts.armR.rotation.x=-1.35+Math.sin(dt*2.6+Z*1.7)*.45,k.parts.head.rotation.set(.12+Math.max(0,Math.sin(dt*2.6+Z*1.7))*.12,0,0)):T==="sleep"?(k.parts.armL.rotation.x=k.parts.armR.rotation.x=0,k.parts.head.rotation.set(.6,-tt*(.35+Math.sin(dt*.9)*.03),0)):(k.parts.armL.rotation.x=k.parts.armR.rotation.x=-.6,k.parts.head.rotation.set(0,-tt*.25,-tt*(.18+Math.sin(dt*.8)*.04)))}),K.visible&&(K.position.set(14,1.6+dt*.25%.4,-3),K.material.opacity=.9-dt*.25%.4*1.5),I.forEach((k,Z)=>{k.parts.head.getWorldPosition(w[Z].position),w[Z].position.y+=T==="sleep"?.45:.62}),F>=0){F+=$;let k=I[1],Z=I[0],tt=Math.sin(Math.min(1,F/1.6)*Math.PI);k.parts.head.rotation.y+=(T==="sleep"?-.5:-.9)*tt,k.parts.head.rotation.z+=.25*tt,Z.parts.head.rotation.z-=.2*tt,T!=="sleep"&&(k.g.rotation.z=.16*tt);let st=new D;Z.parts.head.getWorldPosition(st);let bt=new D;k.parts.head.getWorldPosition(bt),N.visible=F>.5,N.position.copy(st).lerp(bt,.5),N.position.y+=.35+(F-.5)*.35,N.scale.setScalar(.12+Math.min(1,(F-.5)*2)*.06),N.rotation.y=r.rotation.y,F>2.1&&(F=-1,N.visible=!1,k.g.rotation.z=0)}y.bedLamp&&(y.bedLamp.material.emissiveIntensity=T==="sleep"?.15:.6*ie.intensity/8)}else y.sofa&&I.forEach((rt,R)=>{rt.parts.armL.rotation.x=rt.parts.armR.rotation.x=-.6,rt.parts.head.rotation.z=(R===0?-1:1)*(.18+Math.sin(dt*.8)*.04),rt.parts.head.rotation.y=(R===0?1:-1)*.25});_t&&(_t.parts.armL.rotation.x=_t.parts.armR.rotation.x=-1.1+Math.sin(dt*14)*.05,_t.parts.head.rotation.x=-.05,_t.parts.head.rotation.y=Math.sin(dt*.5)*.08),U&&(U.parts.armL.rotation.x=-1.2+Math.sin(dt*9)*.12,U.parts.armR.rotation.x=-1.2+Math.sin(dt*9+1.8)*.12,U.parts.head.rotation.x=.15+Math.sin(dt*.6)*.05,U.parts.head.rotation.y=Math.sin(dt*.35)*.25),(dt-Bt>20||Bt===0)&&(Xt(),Bt=dt||.001),n.render(s,r),vt.set(.3,.05,.6).project(r),document.documentElement.style.setProperty("--rug-x",((vt.x+1)/2*100).toFixed(1)+"vw"),document.documentElement.style.setProperty("--rug-y",((1-vt.y)/2*100).toFixed(1)+"vh")}Xt(),requestAnimationFrame(mt),/[?&]debug3d/.test(location.search)&&(window.__room={camera:r,R:y,renderer:n,sitters:I});function Ot($){if(!y.dinner)return;(y.foodMeshes||[]).forEach(R=>{y.dinner.remove(R)}),y.foodMeshes=[],$=($||[]).filter(R=>R&&R.name).slice(0,4),y.defaultDishes.forEach(R=>{R.visible=!$.length});let dt=[[0],[-.33,.33],[-.48,0,.48],[-.54,-.18,.18,.54]][Math.max(0,$.length-1)]||[],rt=new eo;rt.setCrossOrigin("anonymous"),$.forEach((R,b)=>{let k=new $t;k.position.set(dt[b],.8,-.12+b%2*.06),y.dinner.add(k),y.foodMeshes.push(k);let Z=new ct(new fe(.2,.15,.05,24),Tt(16777215));k.add(Z);let tt=new ct(new Xi(.19,.015,8,24),Tt([16171471,13231096,16773544,13495501][b]));tt.rotation.x=Math.PI/2,tt.position.y=.025,k.add(tt);let st=new me({color:16777215}),bt=new ct(new ls(.16,28),st);bt.rotation.x=-Math.PI/2,bt.position.y=.03,k.add(bt);let j=()=>{let xt=document.createElement("canvas");xt.width=xt.height=128;let Ut=xt.getContext("2d");Ut.fillStyle=["#ffe1e9","#e1f0fb","#fff6cf","#e3f5e1"][b],Ut.fillRect(0,0,128,128),Ut.font="64px sans-serif",Ut.textAlign="center",Ut.fillText("\u{1F372}",64,76),Ut.font="800 16px Nunito, sans-serif",Ut.fillStyle="#8a5a6a",Ut.fillText(R.name.slice(0,14),64,112),st.map=new En(xt),st.map.colorSpace=Fe,st.needsUpdate=!0};if(!R.img){j();return}if(/^data:image\/svg/.test(R.img)){let xt=new Image;xt.onload=()=>{let Ut=document.createElement("canvas");Ut.width=Ut.height=256;let gt=Ut.getContext("2d");gt.fillStyle="#fffaf5",gt.fillRect(0,0,256,256),gt.drawImage(xt,0,0,256,256),st.map=new En(Ut),st.map.colorSpace=Fe,st.needsUpdate=!0},xt.onerror=j,xt.src=R.img;return}rt.load(R.img,xt=>{xt.colorSpace=Fe;let Ut=xt.image.width/xt.image.height;Ut>1?(xt.repeat.set(1/Ut,1),xt.offset.set((1-1/Ut)/2,0)):(xt.repeat.set(1,Ut),xt.offset.set(0,(1-Ut)/2)),st.map=xt,st.needsUpdate=!0},void 0,j)})}return{house:t.house,setCorner($){if(y.couple){t.corner=$,V||jt(J(),!1);return}jt($,!1)},back(){V=!1,jt(J(),!1)},setFood:Ot,get floor(){return z},setPhotos($){if(!y.frames)return;let dt=new eo;y.frames.forEach((rt,R)=>{$[R]&&dt.load($[R],b=>{b.colorSpace=Fe;let k=b.image,Z=rt.geometry.parameters.width,tt=rt.geometry.parameters.height,st=k.width/k.height,bt=Z/tt;st>bt?(b.repeat.set(bt/st,1),b.offset.set((1-bt/st)/2,0)):(b.repeat.set(1,st/bt),b.offset.set(0,(1-st/bt)/2)),rt.material.map=b,rt.material.color.set(16777215),rt.material.needsUpdate=!0})})},setTimeMode($){t.timeMode=$,Xt()},destroy(){L=!1,window.removeEventListener("resize",he),s.traverse($=>{$.geometry&&$.geometry.dispose()}),n.dispose(),n.domElement.remove()}}}window.Village3D={create:my,room:Ey,LOOKS:za,LOVE:yh,ROOF:ue.roof};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
