(()=>{var Sh="170",zs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cp=0,Eu=1,lp=2;var zf=1,Ya=2,Ii=3,is=0,Rn=1,An=2,es=0,dr=1,bu=2,Su=3,wu=4,hp=5,ws=100,up=101,fp=102,dp=103,pp=104,mp=200,gp=201,xp=202,_p=203,Qc=204,tl=205,yp=206,Mp=207,vp=208,Ep=209,bp=210,Sp=211,wp=212,Tp=213,Ap=214,el=0,nl=1,il=2,xr=3,sl=4,rl=5,ol=6,al=7,wh=0,Rp=1,Cp=2,ns=0,Pp=1,Ip=2,Lp=3,Dp=4,Up=5,Np=6,Op=7;var Bf=300,_r=301,yr=302,cl=303,ll=304,qa=306,ao=1e3,As=1001,hl=1002,rn=1003,Fp=1004;var ko=1005;var gi=1006,yc=1007;var Rs=1008;var Ni=1009,Hf=1010,kf=1011,co=1012,Th=1013,Cs=1014,Li=1015,Lo=1016,Ah=1017,Rh=1018,Mr=1020,Vf=35902,Gf=1021,Wf=1022,ai=1023,Xf=1024,Yf=1025,pr=1026,vr=1027,qf=1028,Ch=1029,Zf=1030,Ph=1031;var Ih=1033,xa=33776,_a=33777,ya=33778,Ma=33779,ul=35840,fl=35841,dl=35842,pl=35843,ml=36196,gl=37492,xl=37496,_l=37808,yl=37809,Ml=37810,vl=37811,El=37812,bl=37813,Sl=37814,wl=37815,Tl=37816,Al=37817,Rl=37818,Cl=37819,Pl=37820,Il=37821,va=36492,Ll=36494,Dl=36495,Kf=36283,Ul=36284,Nl=36285,Ol=36286;var Ea=2300,Fl=2301,Mc=2302,Tu=2400,Au=2401,Ru=2402;var zp=3200,Bp=3201;var Jf=0,Hp=1,Qi="",De="srgb",Tr="srgb-linear",Za="linear",Ue="srgb";var qs=7680;var Cu=519,kp=512,Vp=513,Gp=514,$f=515,Wp=516,Xp=517,Yp=518,qp=519,zl=35044;var Pu="300 es",Di=2e3,ba=2001,Oi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Iu=1234567,eo=Math.PI/180,lo=180/Math.PI;function xi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[e&63|128]+wn[e>>8&255]+"-"+wn[e>>16&255]+wn[e>>24&255]+wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]).toLowerCase()}function gn(n,t,e){return Math.max(t,Math.min(e,n))}function Lh(n,t){return(n%t+t)%t}function Zp(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Kp(n,t,e){return n!==t?(e-n)/(t-n):0}function no(n,t,e){return(1-e)*n+e*t}function Jp(n,t,e,i){return no(n,t,1-Math.exp(-e*i))}function $p(n,t=1){return t-Math.abs(Lh(n,t*2)-t)}function jp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Qp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function t0(n,t){return n+Math.floor(Math.random()*(t-n+1))}function e0(n,t){return n+Math.random()*(t-n)}function n0(n){return n*(.5-Math.random())}function i0(n){n!==void 0&&(Iu=n);let t=Iu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function s0(n){return n*eo}function r0(n){return n*lo}function o0(n){return(n&n-1)===0&&n!==0}function a0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function c0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function l0(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),h=o((t+i)/2),f=r((t-i)/2),u=o((t-i)/2),d=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,c*f,c*u,a*l);break;case"YZY":n.set(c*u,a*h,c*f,a*l);break;case"ZXZ":n.set(c*f,c*u,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*d,a*l);break;case"YXY":n.set(c*d,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function oi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Le(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var jf={DEG2RAD:eo,RAD2DEG:lo,generateUUID:xi,clamp:gn,euclideanModulo:Lh,mapLinear:Zp,inverseLerp:Kp,lerp:no,damp:Jp,pingpong:$p,smoothstep:jp,smootherstep:Qp,randInt:t0,randFloat:e0,randFloatSpread:n0,seededRandom:i0,degToRad:s0,radToDeg:r0,isPowerOfTwo:o0,ceilPowerOfTwo:a0,floorPowerOfTwo:c0,setQuaternionFromProperEuler:l0,normalize:Le,denormalize:oi},St=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(gn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Me=class n{constructor(t,e,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],f=i[7],u=i[2],d=i[5],g=i[8],M=s[0],x=s[3],m=s[6],w=s[1],E=s[4],b=s[7],V=s[2],L=s[5],D=s[8];return r[0]=o*M+a*w+c*V,r[3]=o*x+a*E+c*L,r[6]=o*m+a*b+c*D,r[1]=l*M+h*w+f*V,r[4]=l*x+h*E+f*L,r[7]=l*m+h*b+f*D,r[2]=u*M+d*w+g*V,r[5]=u*x+d*E+g*L,r[8]=u*m+d*b+g*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=h*o-a*l,u=a*c-h*r,d=l*r-o*c,g=e*f+i*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return t[0]=f*M,t[1]=(s*l-h*i)*M,t[2]=(a*i-s*o)*M,t[3]=u*M,t[4]=(h*e-s*c)*M,t[5]=(s*r-a*e)*M,t[6]=d*M,t[7]=(i*c-l*e)*M,t[8]=(o*e-i*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(vc.makeScale(t,e)),this}rotate(t){return this.premultiply(vc.makeRotation(-t)),this}translate(t,e){return this.premultiply(vc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},vc=new Me;function Qf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ho(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function h0(){let n=ho("canvas");return n.style.display="block",n}var Lu={};function Qr(n){n in Lu||(Lu[n]=!0,console.warn(n))}function u0(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function f0(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function d0(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Te={enabled:!0,workingColorSpace:Tr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ue&&(n.r=Ui(n.r),n.g=Ui(n.g),n.b=Ui(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ue&&(n.r=mr(n.r),n.g=mr(n.g),n.b=mr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Qi?Za:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function mr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Du=[.64,.33,.3,.6,.15,.06],Uu=[.2126,.7152,.0722],Nu=[.3127,.329],Ou=new Me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fu=new Me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Te.define({[Tr]:{primaries:Du,whitePoint:Nu,transfer:Za,toXYZ:Ou,fromXYZ:Fu,luminanceCoefficients:Uu,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:Du,whitePoint:Nu,transfer:Ue,toXYZ:Ou,fromXYZ:Fu,luminanceCoefficients:Uu,outputColorSpaceConfig:{drawingBufferColorSpace:De}}});var Zs,Bl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zs===void 0&&(Zs=ho("canvas")),Zs.width=t.width,Zs.height=t.height;let i=Zs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Zs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=ho("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ui(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ui(e[i]/255)*255):e[i]=Ui(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},p0=0,Sa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=xi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ec(s[o].image)):r.push(Ec(s[o]))}else r=Ec(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Ec(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Bl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var m0=0,Cn=class n extends Oi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=As,s=As,r=gi,o=Rs,a=ai,c=Ni,l=n.DEFAULT_ANISOTROPY,h=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=xi(),this.name="",this.source=new Sa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ao:t.x=t.x-Math.floor(t.x);break;case As:t.x=t.x<0?0:1;break;case hl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ao:t.y=t.y-Math.floor(t.y);break;case As:t.y=t.y<0?0:1;break;case hl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Bf;Cn.DEFAULT_ANISOTROPY=1;var Ne=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],g=c[9],M=c[2],x=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-M)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+M)<.1&&Math.abs(g+x)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(l+1)/2,b=(d+1)/2,V=(m+1)/2,L=(h+u)/4,D=(f+M)/4,z=(g+x)/4;return E>b&&E>V?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=L/i,r=D/i):b>V?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=L/s,r=z/s):V<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(V),i=D/r,s=z/r),this.set(i,s,r,e),this}let w=Math.sqrt((x-g)*(x-g)+(f-M)*(f-M)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(x-g)/w,this.y=(f-M)/w,this.z=(u-h)/w,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Hl=class extends Oi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Cn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Sa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fi=class extends Hl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},wa=class extends Cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=As,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var kl=class extends Cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=As,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ci=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],f=i[s+3],u=r[o+0],d=r[o+1],g=r[o+2],M=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=u,t[e+1]=d,t[e+2]=g,t[e+3]=M;return}if(f!==M||c!==u||l!==d||h!==g){let x=1-a,m=c*u+l*d+h*g+f*M,w=m>=0?1:-1,E=1-m*m;if(E>Number.EPSILON){let V=Math.sqrt(E),L=Math.atan2(V,m*w);x=Math.sin(x*L)/V,a=Math.sin(a*L)/V}let b=a*w;if(c=c*x+u*b,l=l*x+d*b,h=h*x+g*b,f=f*x+M*b,x===1-a){let V=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=V,l*=V,h*=V,f*=V}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],f=r[o],u=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*f+c*d-l*u,t[e+1]=c*g+h*u+l*f-a*d,t[e+2]=l*g+h*d+a*u-c*f,t[e+3]=h*g-a*f-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),f=a(r/2),u=c(i/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"YZX":this._x=u*h*f+l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f-u*d*g;break;case"XZY":this._x=u*h*f-l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=i+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>f){let d=2*Math.sqrt(1+i-a-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){let d=2*Math.sqrt(1+a-i-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(gn(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*f+this._w*u,this._x=i*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),h=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+c*l+o*f-a*h,this.y=i+c*h+a*l-r*f,this.z=s+c*f+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return bc.copy(this).projectOnVector(t),this.sub(bc)}reflect(t){return this.sub(bc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(gn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},bc=new O,zu=new ci,Ps=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ni):ni.fromBufferAttribute(r,o),ni.applyMatrix4(t.matrixWorld),this.expandByPoint(ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vo.copy(i.boundingBox)),Vo.applyMatrix4(t.matrixWorld),this.union(Vo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ni),ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xr),Go.subVectors(this.max,Xr),Ks.subVectors(t.a,Xr),Js.subVectors(t.b,Xr),$s.subVectors(t.c,Xr),qi.subVectors(Js,Ks),Zi.subVectors($s,Js),_s.subVectors(Ks,$s);let e=[0,-qi.z,qi.y,0,-Zi.z,Zi.y,0,-_s.z,_s.y,qi.z,0,-qi.x,Zi.z,0,-Zi.x,_s.z,0,-_s.x,-qi.y,qi.x,0,-Zi.y,Zi.x,0,-_s.y,_s.x,0];return!Sc(e,Ks,Js,$s,Go)||(e=[1,0,0,0,1,0,0,0,1],!Sc(e,Ks,Js,$s,Go))?!1:(Wo.crossVectors(qi,Zi),e=[Wo.x,Wo.y,Wo.z],Sc(e,Ks,Js,$s,Go))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ti=[new O,new O,new O,new O,new O,new O,new O,new O],ni=new O,Vo=new Ps,Ks=new O,Js=new O,$s=new O,qi=new O,Zi=new O,_s=new O,Xr=new O,Go=new O,Wo=new O,ys=new O;function Sc(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ys.fromArray(n,r);let a=s.x*Math.abs(ys.x)+s.y*Math.abs(ys.y)+s.z*Math.abs(ys.z),c=t.dot(ys),l=e.dot(ys),h=i.dot(ys);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var g0=new Ps,Yr=new O,wc=new O,Er=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):g0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yr.subVectors(t,this.center);let e=Yr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Yr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yr.copy(t.center).add(wc)),this.expandByPoint(Yr.copy(t.center).sub(wc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ai=new O,Tc=new O,Xo=new O,Ki=new O,Ac=new O,Yo=new O,Rc=new O,Is=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ai.copy(this.origin).addScaledVector(this.direction,e),Ai.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Tc.copy(t).add(e).multiplyScalar(.5),Xo.copy(e).sub(t).normalize(),Ki.copy(this.origin).sub(Tc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Xo),a=Ki.dot(this.direction),c=-Ki.dot(Xo),l=Ki.lengthSq(),h=Math.abs(1-o*o),f,u,d,g;if(h>0)if(f=o*c-a,u=o*a-c,g=r*h,f>=0)if(u>=-g)if(u<=g){let M=1/h;f*=M,u*=M,d=f*(f+o*u+2*a)+u*(o*f+u+2*c)+l}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Tc).addScaledVector(Xo,u),d}intersectSphere(t,e){Ai.subVectors(t.center,this.origin);let i=Ai.dot(this.direction),s=Ai.dot(Ai)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ai)!==null}intersectTriangle(t,e,i,s,r){Ac.subVectors(e,t),Yo.subVectors(i,t),Rc.crossVectors(Ac,Yo);let o=this.direction.dot(Rc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,t);let c=a*this.direction.dot(Yo.crossVectors(Ki,Yo));if(c<0)return null;let l=a*this.direction.dot(Ac.cross(Ki));if(l<0||c+l>o)return null;let h=-a*Ki.dot(Rc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Be=class n{constructor(t,e,i,s,r,o,a,c,l,h,f,u,d,g,M,x){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,h,f,u,d,g,M,x)}set(t,e,i,s,r,o,a,c,l,h,f,u,d,g,M,x){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=g,m[11]=M,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/js.setFromMatrixColumn(t,0).length(),r=1/js.setFromMatrixColumn(t,1).length(),o=1/js.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=o*h,d=o*f,g=a*h,M=a*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=u-M*l,e[9]=-a*c,e[2]=M-u*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let u=c*h,d=c*f,g=l*h,M=l*f;e[0]=u+M*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=M+u*a,e[10]=o*c}else if(t.order==="ZXY"){let u=c*h,d=c*f,g=l*h,M=l*f;e[0]=u-M*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=M-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let u=o*h,d=o*f,g=a*h,M=a*f;e[0]=c*h,e[4]=g*l-d,e[8]=u*l+M,e[1]=c*f,e[5]=M*l+u,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let u=o*c,d=o*l,g=a*c,M=a*l;e[0]=c*h,e[4]=M-u*f,e[8]=g*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*f+g,e[10]=u-M*f}else if(t.order==="XZY"){let u=o*c,d=o*l,g=a*c,M=a*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+M,e[5]=o*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*h,e[10]=M*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(x0,t,_0)}lookAt(t,e,i){let s=this.elements;return Wn.subVectors(t,e),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Ji.crossVectors(i,Wn),Ji.lengthSq()===0&&(Math.abs(i.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Ji.crossVectors(i,Wn)),Ji.normalize(),qo.crossVectors(Wn,Ji),s[0]=Ji.x,s[4]=qo.x,s[8]=Wn.x,s[1]=Ji.y,s[5]=qo.y,s[9]=Wn.y,s[2]=Ji.z,s[6]=qo.z,s[10]=Wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],f=i[5],u=i[9],d=i[13],g=i[2],M=i[6],x=i[10],m=i[14],w=i[3],E=i[7],b=i[11],V=i[15],L=s[0],D=s[4],z=s[8],A=s[12],S=s[1],B=s[5],Z=s[9],N=s[13],W=s[2],q=s[6],Y=s[10],ft=s[14],$=s[3],_t=s[7],Tt=s[11],dt=s[15];return r[0]=o*L+a*S+c*W+l*$,r[4]=o*D+a*B+c*q+l*_t,r[8]=o*z+a*Z+c*Y+l*Tt,r[12]=o*A+a*N+c*ft+l*dt,r[1]=h*L+f*S+u*W+d*$,r[5]=h*D+f*B+u*q+d*_t,r[9]=h*z+f*Z+u*Y+d*Tt,r[13]=h*A+f*N+u*ft+d*dt,r[2]=g*L+M*S+x*W+m*$,r[6]=g*D+M*B+x*q+m*_t,r[10]=g*z+M*Z+x*Y+m*Tt,r[14]=g*A+M*N+x*ft+m*dt,r[3]=w*L+E*S+b*W+V*$,r[7]=w*D+E*B+b*q+V*_t,r[11]=w*z+E*Z+b*Y+V*Tt,r[15]=w*A+E*N+b*ft+V*dt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],M=t[7],x=t[11],m=t[15];return g*(+r*c*f-s*l*f-r*a*u+i*l*u+s*a*d-i*c*d)+M*(+e*c*d-e*l*u+r*o*u-s*o*d+s*l*h-r*c*h)+x*(+e*l*f-e*a*d-r*o*f+i*o*d+r*a*h-i*l*h)+m*(-s*a*h-e*c*f+e*a*u+s*o*f-i*o*u+i*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],M=t[13],x=t[14],m=t[15],w=f*x*l-M*u*l+M*c*d-a*x*d-f*c*m+a*u*m,E=g*u*l-h*x*l-g*c*d+o*x*d+h*c*m-o*u*m,b=h*M*l-g*f*l+g*a*d-o*M*d-h*a*m+o*f*m,V=g*f*c-h*M*c-g*a*u+o*M*u+h*a*x-o*f*x,L=e*w+i*E+s*b+r*V;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/L;return t[0]=w*D,t[1]=(M*u*r-f*x*r-M*s*d+i*x*d+f*s*m-i*u*m)*D,t[2]=(a*x*r-M*c*r+M*s*l-i*x*l-a*s*m+i*c*m)*D,t[3]=(f*c*r-a*u*r-f*s*l+i*u*l+a*s*d-i*c*d)*D,t[4]=E*D,t[5]=(h*x*r-g*u*r+g*s*d-e*x*d-h*s*m+e*u*m)*D,t[6]=(g*c*r-o*x*r-g*s*l+e*x*l+o*s*m-e*c*m)*D,t[7]=(o*u*r-h*c*r+h*s*l-e*u*l-o*s*d+e*c*d)*D,t[8]=b*D,t[9]=(g*f*r-h*M*r-g*i*d+e*M*d+h*i*m-e*f*m)*D,t[10]=(o*M*r-g*a*r+g*i*l-e*M*l-o*i*m+e*a*m)*D,t[11]=(h*a*r-o*f*r-h*i*l+e*f*l+o*i*d-e*a*d)*D,t[12]=V*D,t[13]=(h*M*s-g*f*s+g*i*u-e*M*u-h*i*x+e*f*x)*D,t[14]=(g*a*s-o*M*s-g*i*c+e*M*c+o*i*x-e*a*x)*D,t[15]=(o*f*s-h*a*s+h*i*c-e*f*c-o*i*u+e*a*u)*D,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,f=a+a,u=r*l,d=r*h,g=r*f,M=o*h,x=o*f,m=a*f,w=c*l,E=c*h,b=c*f,V=i.x,L=i.y,D=i.z;return s[0]=(1-(M+m))*V,s[1]=(d+b)*V,s[2]=(g-E)*V,s[3]=0,s[4]=(d-b)*L,s[5]=(1-(u+m))*L,s[6]=(x+w)*L,s[7]=0,s[8]=(g+E)*D,s[9]=(x-w)*D,s[10]=(1-(u+M))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=js.set(s[0],s[1],s[2]).length(),o=js.set(s[4],s[5],s[6]).length(),a=js.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ii.copy(this);let l=1/r,h=1/o,f=1/a;return ii.elements[0]*=l,ii.elements[1]*=l,ii.elements[2]*=l,ii.elements[4]*=h,ii.elements[5]*=h,ii.elements[6]*=h,ii.elements[8]*=f,ii.elements[9]*=f,ii.elements[10]*=f,e.setFromRotationMatrix(ii),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Di){let c=this.elements,l=2*r/(e-t),h=2*r/(i-s),f=(e+t)/(e-t),u=(i+s)/(i-s),d,g;if(a===Di)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ba)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Di){let c=this.elements,l=1/(e-t),h=1/(i-s),f=1/(o-r),u=(e+t)*l,d=(i+s)*h,g,M;if(a===Di)g=(o+r)*f,M=-2*f;else if(a===ba)g=r*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=M,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},js=new O,ii=new Be,x0=new O(0,0,0),_0=new O(1,1,1),Ji=new O,qo=new O,Wn=new O,Bu=new Be,Hu=new ci,_i=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(gn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-gn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(gn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Bu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hu.setFromEuler(this),this.setFromQuaternion(Hu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_i.DEFAULT_ORDER="XYZ";var uo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},y0=0,ku=new O,Qs=new ci,Ri=new Be,Zo=new O,qr=new O,M0=new O,v0=new ci,Vu=new O(1,0,0),Gu=new O(0,1,0),Wu=new O(0,0,1),Xu={type:"added"},E0={type:"removed"},tr={type:"childadded",child:null},Cc={type:"childremoved",child:null},He=class n extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new O,e=new _i,i=new ci,s=new O(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Be},normalMatrix:{value:new Me}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qs.setFromAxisAngle(t,e),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(t,e){return Qs.setFromAxisAngle(t,e),this.quaternion.premultiply(Qs),this}rotateX(t){return this.rotateOnAxis(Vu,t)}rotateY(t){return this.rotateOnAxis(Gu,t)}rotateZ(t){return this.rotateOnAxis(Wu,t)}translateOnAxis(t,e){return ku.copy(t).applyQuaternion(this.quaternion),this.position.add(ku.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vu,t)}translateY(t){return this.translateOnAxis(Gu,t)}translateZ(t){return this.translateOnAxis(Wu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Zo.copy(t):Zo.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(qr,Zo,this.up):Ri.lookAt(Zo,qr,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),Qs.setFromRotationMatrix(Ri),this.quaternion.premultiply(Qs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xu),tr.child=t,this.dispatchEvent(tr),tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(E0),Cc.child=t,this.dispatchEvent(Cc),Cc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xu),tr.child=t,this.dispatchEvent(tr),tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,t,M0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,v0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};He.DEFAULT_UP=new O(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var si=new O,Ci=new O,Pc=new O,Pi=new O,er=new O,nr=new O,Yu=new O,Ic=new O,Lc=new O,Dc=new O,Uc=new Ne,Nc=new Ne,Oc=new Ne,ts=class n{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),si.subVectors(t,e),s.cross(si);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){si.subVectors(s,e),Ci.subVectors(i,e),Pc.subVectors(t,e);let o=si.dot(si),a=si.dot(Ci),c=si.dot(Pc),l=Ci.dot(Ci),h=Ci.dot(Pc),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Pi.x),c.addScaledVector(o,Pi.y),c.addScaledVector(a,Pi.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return Uc.setScalar(0),Nc.setScalar(0),Oc.setScalar(0),Uc.fromBufferAttribute(t,e),Nc.fromBufferAttribute(t,i),Oc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Uc,r.x),o.addScaledVector(Nc,r.y),o.addScaledVector(Oc,r.z),o}static isFrontFacing(t,e,i,s){return si.subVectors(i,e),Ci.subVectors(t,e),si.cross(Ci).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return si.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),si.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;er.subVectors(s,i),nr.subVectors(r,i),Ic.subVectors(t,i);let c=er.dot(Ic),l=nr.dot(Ic);if(c<=0&&l<=0)return e.copy(i);Lc.subVectors(t,s);let h=er.dot(Lc),f=nr.dot(Lc);if(h>=0&&f<=h)return e.copy(s);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(er,o);Dc.subVectors(t,r);let d=er.dot(Dc),g=nr.dot(Dc);if(g>=0&&d<=g)return e.copy(r);let M=d*l-c*g;if(M<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(nr,a);let x=h*g-d*f;if(x<=0&&f-h>=0&&d-g>=0)return Yu.subVectors(r,s),a=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(Yu,a);let m=1/(x+M+u);return o=M*m,a=u*m,e.copy(i).addScaledVector(er,o).addScaledVector(nr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Ko={h:0,s:0,l:0};function Fc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var ce=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Te.workingColorSpace){return this.r=t,this.g=e,this.b=i,Te.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Te.workingColorSpace){if(t=Lh(t,1),e=gn(e,0,1),i=gn(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Fc(o,r,t+1/3),this.g=Fc(o,r,t),this.b=Fc(o,r,t-1/3)}return Te.toWorkingColorSpace(this,s),this}setStyle(t,e=De){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){let i=td[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}copyLinearToSRGB(t){return this.r=mr(t.r),this.g=mr(t.g),this.b=mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return Te.fromWorkingColorSpace(Tn.copy(this),t),Math.round(gn(Tn.r*255,0,255))*65536+Math.round(gn(Tn.g*255,0,255))*256+Math.round(gn(Tn.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Te.workingColorSpace){Te.fromWorkingColorSpace(Tn.copy(this),e);let i=Tn.r,s=Tn.g,r=Tn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Te.workingColorSpace){return Te.fromWorkingColorSpace(Tn.copy(this),e),t.r=Tn.r,t.g=Tn.g,t.b=Tn.b,t}getStyle(t=De){Te.fromWorkingColorSpace(Tn.copy(this),t);let e=Tn.r,i=Tn.g,s=Tn.b;return t!==De?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL($i),this.setHSL($i.h+t,$i.s+e,$i.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL($i),t.getHSL(Ko);let i=no($i.h,Ko.h,e),s=no($i.s,Ko.s,e),r=no($i.l,Ko.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new ce;ce.NAMES=td;var b0=0,zi=class extends Oi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=xi(),this.name="",this.blending=dr,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qc,this.blendDst=tl,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(i.blending=this.blending),this.side!==is&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qc&&(i.blendSrc=this.blendSrc),this.blendDst!==tl&&(i.blendDst=this.blendDst),this.blendEquation!==ws&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},$e=class extends zi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var cn=new O,Jo=new St,En=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=zl,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Jo.fromBufferAttribute(this,e),Jo.applyMatrix3(t),this.setXY(e,Jo.x,Jo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)cn.fromBufferAttribute(this,e),cn.applyMatrix3(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)cn.fromBufferAttribute(this,e),cn.applyMatrix4(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)cn.fromBufferAttribute(this,e),cn.applyNormalMatrix(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)cn.fromBufferAttribute(this,e),cn.transformDirection(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=oi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Le(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=oi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=oi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=oi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=oi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zl&&(t.usage=this.usage),t}};var Ta=class extends En{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Aa=class extends En{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var xe=class extends En{constructor(t,e,i){super(new Float32Array(t),e,i)}},S0=0,Kn=new Be,zc=new He,ir=new O,Xn=new Ps,Zr=new Ps,mn=new O,ze=class n extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qf(t)?Aa:Ta)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Me().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Kn.makeRotationFromQuaternion(t),this.applyMatrix4(Kn),this}rotateX(t){return Kn.makeRotationX(t),this.applyMatrix4(Kn),this}rotateY(t){return Kn.makeRotationY(t),this.applyMatrix4(Kn),this}rotateZ(t){return Kn.makeRotationZ(t),this.applyMatrix4(Kn),this}translate(t,e,i){return Kn.makeTranslation(t,e,i),this.applyMatrix4(Kn),this}scale(t,e,i){return Kn.makeScale(t,e,i),this.applyMatrix4(Kn),this}lookAt(t){return zc.lookAt(t),zc.updateMatrix(),this.applyMatrix4(zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xe(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ps);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Xn.setFromBufferAttribute(r),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Er);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let i=this.boundingSphere.center;if(Xn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Zr.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(Xn.min,Zr.min),Xn.expandByPoint(mn),mn.addVectors(Xn.max,Zr.max),Xn.expandByPoint(mn)):(Xn.expandByPoint(Zr.min),Xn.expandByPoint(Zr.max))}Xn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)mn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(mn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)mn.fromBufferAttribute(a,l),c&&(ir.fromBufferAttribute(t,l),mn.add(ir)),s=Math.max(s,i.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let z=0;z<i.count;z++)a[z]=new O,c[z]=new O;let l=new O,h=new O,f=new O,u=new St,d=new St,g=new St,M=new O,x=new O;function m(z,A,S){l.fromBufferAttribute(i,z),h.fromBufferAttribute(i,A),f.fromBufferAttribute(i,S),u.fromBufferAttribute(r,z),d.fromBufferAttribute(r,A),g.fromBufferAttribute(r,S),h.sub(l),f.sub(l),d.sub(u),g.sub(u);let B=1/(d.x*g.y-g.x*d.y);isFinite(B)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(B),x.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(B),a[z].add(M),a[A].add(M),a[S].add(M),c[z].add(x),c[A].add(x),c[S].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let z=0,A=w.length;z<A;++z){let S=w[z],B=S.start,Z=S.count;for(let N=B,W=B+Z;N<W;N+=3)m(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let E=new O,b=new O,V=new O,L=new O;function D(z){V.fromBufferAttribute(s,z),L.copy(V);let A=a[z];E.copy(A),E.sub(V.multiplyScalar(V.dot(A))).normalize(),b.crossVectors(L,A);let B=b.dot(c[z])<0?-1:1;o.setXYZW(z,E.x,E.y,E.z,B)}for(let z=0,A=w.length;z<A;++z){let S=w[z],B=S.start,Z=S.count;for(let N=B,W=B+Z;N<W;N+=3)D(t.getX(N+0)),D(t.getX(N+1)),D(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new En(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new O,r=new O,o=new O,a=new O,c=new O,l=new O,h=new O,f=new O;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),M=t.getX(u+1),x=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,x),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,M),l.fromBufferAttribute(i,x),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(x,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)mn.fromBufferAttribute(t,e),mn.normalize(),t.setXYZ(e,mn.x,mn.y,mn.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,f=a.normalized,u=new l.constructor(c.length*h),d=0,g=0;for(let M=0,x=c.length;M<x;M++){a.isInterleavedBufferAttribute?d=c[M]*a.data.stride+a.offset:d=c[M]*h;for(let m=0;m<h;m++)u[g++]=l[d++]}return new En(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){let u=l[h],d=t(u,i);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],f=r[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qu=new Be,Ms=new Is,$o=new Er,Zu=new O,jo=new O,Qo=new O,ta=new O,Bc=new O,ea=new O,Ku=new O,na=new O,Pt=class extends He{constructor(t=new ze,e=new $e){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ea.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],f=r[c];h!==0&&(Bc.fromBufferAttribute(f,t),o?ea.addScaledVector(Bc,h):ea.addScaledVector(Bc.sub(e),h))}e.add(ea)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$o.copy(i.boundingSphere),$o.applyMatrix4(r),Ms.copy(t.ray).recast(t.near),!($o.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere($o,Zu)===null||Ms.origin.distanceToSquared(Zu)>(t.far-t.near)**2))&&(qu.copy(r).invert(),Ms.copy(t.ray).applyMatrix4(qu),!(i.boundingBox!==null&&Ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ms)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=u.length;g<M;g++){let x=u[g],m=o[x.materialIndex],w=Math.max(x.start,d.start),E=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let b=w,V=E;b<V;b+=3){let L=a.getX(b),D=a.getX(b+1),z=a.getX(b+2);s=ia(this,m,t,i,l,h,f,L,D,z),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),M=Math.min(a.count,d.start+d.count);for(let x=g,m=M;x<m;x+=3){let w=a.getX(x),E=a.getX(x+1),b=a.getX(x+2);s=ia(this,o,t,i,l,h,f,w,E,b),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,M=u.length;g<M;g++){let x=u[g],m=o[x.materialIndex],w=Math.max(x.start,d.start),E=Math.min(c.count,Math.min(x.start+x.count,d.start+d.count));for(let b=w,V=E;b<V;b+=3){let L=b,D=b+1,z=b+2;s=ia(this,m,t,i,l,h,f,L,D,z),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),M=Math.min(c.count,d.start+d.count);for(let x=g,m=M;x<m;x+=3){let w=x,E=x+1,b=x+2;s=ia(this,o,t,i,l,h,f,w,E,b),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function w0(n,t,e,i,s,r,o,a){let c;if(t.side===Rn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===is,a),c===null)return null;na.copy(a),na.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(na);return l<e.near||l>e.far?null:{distance:l,point:na.clone(),object:n}}function ia(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,jo),n.getVertexPosition(c,Qo),n.getVertexPosition(l,ta);let h=w0(n,t,e,i,jo,Qo,ta,Ku);if(h){let f=new O;ts.getBarycoord(Ku,jo,Qo,ta,f),s&&(h.uv=ts.getInterpolatedAttribute(s,a,c,l,f,new St)),r&&(h.uv1=ts.getInterpolatedAttribute(r,a,c,l,f,new St)),o&&(h.normal=ts.getInterpolatedAttribute(o,a,c,l,f,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new O,materialIndex:0};ts.getNormal(jo,Qo,ta,u.normal),h.face=u,h.barycoord=f}return h}var ke=class n extends ze{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(f,2));function g(M,x,m,w,E,b,V,L,D,z,A){let S=b/D,B=V/z,Z=b/2,N=V/2,W=L/2,q=D+1,Y=z+1,ft=0,$=0,_t=new O;for(let Tt=0;Tt<Y;Tt++){let dt=Tt*B-N;for(let Xt=0;Xt<q;Xt++){let ye=Xt*S-Z;_t[M]=ye*w,_t[x]=dt*E,_t[m]=W,l.push(_t.x,_t.y,_t.z),_t[M]=0,_t[x]=0,_t[m]=L>0?1:-1,h.push(_t.x,_t.y,_t.z),f.push(Xt/D),f.push(1-Tt/z),ft+=1}}for(let Tt=0;Tt<z;Tt++)for(let dt=0;dt<D;dt++){let Xt=u+dt+q*Tt,ye=u+dt+q*(Tt+1),pt=u+(dt+1)+q*(Tt+1),At=u+(dt+1)+q*Tt;c.push(Xt,ye,At),c.push(ye,pt,At),$+=6}a.addGroup(d,$,A),d+=$,u+=ft}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function br(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Dn(n){let t={};for(let e=0;e<n.length;e++){let i=br(n[e]);for(let s in i)t[s]=i[s]}return t}function T0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ed(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}var A0={clone:br,merge:Dn},R0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,C0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jn=class extends zi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R0,this.fragmentShader=C0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=br(t.uniforms),this.uniformsGroups=T0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Ra=class extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Di}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ji=new O,Ju=new St,$u=new St,xn=class extends Ra{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=lo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(eo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lo*2*Math.atan(Math.tan(eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ji.x,ji.y).multiplyScalar(-t/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-t/ji.z)}getViewSize(t,e){return this.getViewBounds(t,Ju,$u),e.subVectors($u,Ju)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(eo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},sr=-90,rr=1,Vl=class extends He{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new xn(sr,rr,t,e);s.layers=this.layers,this.add(s);let r=new xn(sr,rr,t,e);r.layers=this.layers,this.add(r);let o=new xn(sr,rr,t,e);o.layers=this.layers,this.add(o);let a=new xn(sr,rr,t,e);a.layers=this.layers,this.add(a);let c=new xn(sr,rr,t,e);c.layers=this.layers,this.add(c);let l=new xn(sr,rr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Di)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ba)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ca=class extends Cn{constructor(t,e,i,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:_r,super(t,e,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Gl=class extends Fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ca(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ke(5,5,5),r=new Jn({name:"CubemapFromEquirect",uniforms:br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rn,blending:es});r.uniforms.tEquirect.value=e;let o=new Pt(s,r),a=e.minFilter;return e.minFilter===Rs&&(e.minFilter=gi),new Vl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Hc=new O,P0=new O,I0=new Me,ri=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Hc.subVectors(i,e).cross(P0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Hc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||I0.getNormalMatrix(t),s=this.coplanarPoint(Hc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},vs=new Er,sa=new O,fo=class{constructor(t=new ri,e=new ri,i=new ri,s=new ri,r=new ri,o=new ri){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Di){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],f=s[6],u=s[7],d=s[8],g=s[9],M=s[10],x=s[11],m=s[12],w=s[13],E=s[14],b=s[15];if(i[0].setComponents(c-r,u-l,x-d,b-m).normalize(),i[1].setComponents(c+r,u+l,x+d,b+m).normalize(),i[2].setComponents(c+o,u+h,x+g,b+w).normalize(),i[3].setComponents(c-o,u-h,x-g,b-w).normalize(),i[4].setComponents(c-a,u-f,x-M,b-E).normalize(),e===Di)i[5].setComponents(c+a,u+f,x+M,b+E).normalize();else if(e===ba)i[5].setComponents(a,f,M,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(t){return vs.center.set(0,0,0),vs.radius=.7071067811865476,vs.applyMatrix4(t.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(sa.x=s.normal.x>0?t.max.x:t.min.x,sa.y=s.normal.y>0?t.max.y:t.min.y,sa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(sa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function nd(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function L0(n){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,f=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){let h=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],M=f[d];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++u,f[u]=M)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let M=f[d];n.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var ss=class n extends ze{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,f=t/a,u=e/c,d=[],g=[],M=[],x=[];for(let m=0;m<h;m++){let w=m*u-o;for(let E=0;E<l;E++){let b=E*f-r;g.push(b,-w,0),M.push(0,0,1),x.push(E/a),x.push(1-m/c)}}for(let m=0;m<c;m++)for(let w=0;w<a;w++){let E=w+l*m,b=w+l*(m+1),V=w+1+l*(m+1),L=w+1+l*m;d.push(E,b,L),d.push(b,V,L)}this.setIndex(d),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(M,3)),this.setAttribute("uv",new xe(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},D0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,U0=`#ifdef USE_ALPHAHASH
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
#endif`,N0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,O0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,z0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,B0=`#ifdef USE_AOMAP
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
#endif`,H0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,k0=`#ifdef USE_BATCHING
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
#endif`,V0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,G0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,W0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,X0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Y0=`#ifdef USE_IRIDESCENCE
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
#endif`,q0=`#ifdef USE_BUMPMAP
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
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nm=`#define PI 3.141592653589793
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
} // validated`,im=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sm=`vec3 transformedNormal = objectNormal;
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
#endif`,rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,om=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lm="gl_FragColor = linearToOutputTexel( gl_FragColor );",hm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,um=`#ifdef USE_ENVMAP
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
#endif`,fm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dm=`#ifdef USE_ENVMAP
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
#endif`,pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mm=`#ifdef USE_ENVMAP
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
#endif`,gm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_m=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ym=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mm=`#ifdef USE_GRADIENTMAP
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
}`,vm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Em=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sm=`uniform bool receiveShadow;
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
#endif`,wm=`#ifdef USE_ENVMAP
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
#endif`,Tm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pm=`PhysicalMaterial material;
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
#endif`,Im=`struct PhysicalMaterial {
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
}`,Lm=`
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
#endif`,Dm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Um=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Om=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vm=`#if defined( USE_POINTS_UV )
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
#endif`,Gm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ym=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zm=`#ifdef USE_MORPHTARGETS
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
#endif`,Km=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$m=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eg=`#ifdef USE_NORMALMAP
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
#endif`,ng=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ig=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,og=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ag=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xg=`float getShadowMask() {
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
}`,_g=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yg=`#ifdef USE_SKINNING
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
#endif`,Mg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vg=`#ifdef USE_SKINNING
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
#endif`,Eg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tg=`#ifdef USE_TRANSMISSION
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
#endif`,Ag=`#ifdef USE_TRANSMISSION
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
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ig=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Lg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dg=`uniform sampler2D t2D;
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
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ng=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`#include <common>
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
}`,Bg=`#if DEPTH_PACKING == 3200
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
}`,Hg=`#define DISTANCE
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
}`,kg=`#define DISTANCE
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
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wg=`uniform float scale;
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
}`,Xg=`uniform vec3 diffuse;
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
}`,Yg=`#include <common>
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
}`,qg=`uniform vec3 diffuse;
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
}`,Zg=`#define LAMBERT
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
}`,Kg=`#define LAMBERT
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
}`,Jg=`#define MATCAP
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
}`,$g=`#define MATCAP
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
}`,jg=`#define NORMAL
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
}`,Qg=`#define NORMAL
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
}`,tx=`#define PHONG
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
}`,ex=`#define PHONG
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
}`,nx=`#define STANDARD
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
}`,ix=`#define STANDARD
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
}`,sx=`#define TOON
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
}`,rx=`#define TOON
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
}`,ox=`uniform float size;
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
}`,ax=`uniform vec3 diffuse;
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
}`,cx=`#include <common>
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
}`,lx=`uniform vec3 color;
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
}`,hx=`uniform float rotation;
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
}`,ux=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:D0,alphahash_pars_fragment:U0,alphamap_fragment:N0,alphamap_pars_fragment:O0,alphatest_fragment:F0,alphatest_pars_fragment:z0,aomap_fragment:B0,aomap_pars_fragment:H0,batching_pars_vertex:k0,batching_vertex:V0,begin_vertex:G0,beginnormal_vertex:W0,bsdfs:X0,iridescence_fragment:Y0,bumpmap_pars_fragment:q0,clipping_planes_fragment:Z0,clipping_planes_pars_fragment:K0,clipping_planes_pars_vertex:J0,clipping_planes_vertex:$0,color_fragment:j0,color_pars_fragment:Q0,color_pars_vertex:tm,color_vertex:em,common:nm,cube_uv_reflection_fragment:im,defaultnormal_vertex:sm,displacementmap_pars_vertex:rm,displacementmap_vertex:om,emissivemap_fragment:am,emissivemap_pars_fragment:cm,colorspace_fragment:lm,colorspace_pars_fragment:hm,envmap_fragment:um,envmap_common_pars_fragment:fm,envmap_pars_fragment:dm,envmap_pars_vertex:pm,envmap_physical_pars_fragment:wm,envmap_vertex:mm,fog_vertex:gm,fog_pars_vertex:xm,fog_fragment:_m,fog_pars_fragment:ym,gradientmap_pars_fragment:Mm,lightmap_pars_fragment:vm,lights_lambert_fragment:Em,lights_lambert_pars_fragment:bm,lights_pars_begin:Sm,lights_toon_fragment:Tm,lights_toon_pars_fragment:Am,lights_phong_fragment:Rm,lights_phong_pars_fragment:Cm,lights_physical_fragment:Pm,lights_physical_pars_fragment:Im,lights_fragment_begin:Lm,lights_fragment_maps:Dm,lights_fragment_end:Um,logdepthbuf_fragment:Nm,logdepthbuf_pars_fragment:Om,logdepthbuf_pars_vertex:Fm,logdepthbuf_vertex:zm,map_fragment:Bm,map_pars_fragment:Hm,map_particle_fragment:km,map_particle_pars_fragment:Vm,metalnessmap_fragment:Gm,metalnessmap_pars_fragment:Wm,morphinstance_vertex:Xm,morphcolor_vertex:Ym,morphnormal_vertex:qm,morphtarget_pars_vertex:Zm,morphtarget_vertex:Km,normal_fragment_begin:Jm,normal_fragment_maps:$m,normal_pars_fragment:jm,normal_pars_vertex:Qm,normal_vertex:tg,normalmap_pars_fragment:eg,clearcoat_normal_fragment_begin:ng,clearcoat_normal_fragment_maps:ig,clearcoat_pars_fragment:sg,iridescence_pars_fragment:rg,opaque_fragment:og,packing:ag,premultiplied_alpha_fragment:cg,project_vertex:lg,dithering_fragment:hg,dithering_pars_fragment:ug,roughnessmap_fragment:fg,roughnessmap_pars_fragment:dg,shadowmap_pars_fragment:pg,shadowmap_pars_vertex:mg,shadowmap_vertex:gg,shadowmask_pars_fragment:xg,skinbase_vertex:_g,skinning_pars_vertex:yg,skinning_vertex:Mg,skinnormal_vertex:vg,specularmap_fragment:Eg,specularmap_pars_fragment:bg,tonemapping_fragment:Sg,tonemapping_pars_fragment:wg,transmission_fragment:Tg,transmission_pars_fragment:Ag,uv_pars_fragment:Rg,uv_pars_vertex:Cg,uv_vertex:Pg,worldpos_vertex:Ig,background_vert:Lg,background_frag:Dg,backgroundCube_vert:Ug,backgroundCube_frag:Ng,cube_vert:Og,cube_frag:Fg,depth_vert:zg,depth_frag:Bg,distanceRGBA_vert:Hg,distanceRGBA_frag:kg,equirect_vert:Vg,equirect_frag:Gg,linedashed_vert:Wg,linedashed_frag:Xg,meshbasic_vert:Yg,meshbasic_frag:qg,meshlambert_vert:Zg,meshlambert_frag:Kg,meshmatcap_vert:Jg,meshmatcap_frag:$g,meshnormal_vert:jg,meshnormal_frag:Qg,meshphong_vert:tx,meshphong_frag:ex,meshphysical_vert:nx,meshphysical_frag:ix,meshtoon_vert:sx,meshtoon_frag:rx,points_vert:ox,points_frag:ax,shadow_vert:cx,shadow_frag:lx,sprite_vert:hx,sprite_frag:ux},Vt={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Me}},envmap:{envMap:{value:null},envMapRotation:{value:new Me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Me},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0},uvTransform:{value:new Me}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}}},mi={basic:{uniforms:Dn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Dn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new ce(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Dn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Dn([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Dn([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new ce(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Dn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Dn([Vt.points,Vt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Dn([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Dn([Vt.common,Vt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Dn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Dn([Vt.sprite,Vt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Me}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distanceRGBA:{uniforms:Dn([Vt.common,Vt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distanceRGBA_vert,fragmentShader:ve.distanceRGBA_frag},shadow:{uniforms:Dn([Vt.lights,Vt.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};mi.physical={uniforms:Dn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Me},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Me},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Me},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Me},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Me},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Me}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};var ra={r:0,b:0,g:0},Es=new _i,fx=new Be;function dx(n,t,e,i,s,r,o){let a=new ce(0),c=r===!0?0:1,l,h,f=null,u=0,d=null;function g(w){let E=w.isScene===!0?w.background:null;return E&&E.isTexture&&(E=(w.backgroundBlurriness>0?e:t).get(E)),E}function M(w){let E=!1,b=g(w);b===null?m(a,c):b&&b.isColor&&(m(b,1),E=!0);let V=n.xr.getEnvironmentBlendMode();V==="additive"?i.buffers.color.setClear(0,0,0,1,o):V==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(w,E){let b=g(E);b&&(b.isCubeTexture||b.mapping===qa)?(h===void 0&&(h=new Pt(new ke(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:br(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(V,L,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Es.copy(E.backgroundRotation),Es.x*=-1,Es.y*=-1,Es.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(fx.makeRotationFromEuler(Es)),h.material.toneMapped=Te.getTransfer(b.colorSpace)!==Ue,(f!==b||u!==b.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,f=b,u=b.version,d=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Pt(new ss(2,2),new Jn({name:"BackgroundMaterial",uniforms:br(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Te.getTransfer(b.colorSpace)!==Ue,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||u!==b.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,f=b,u=b.version,d=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,E){w.getRGB(ra,ed(n)),i.buffers.color.setClear(ra.r,ra.g,ra.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(w,E=1){a.set(w),c=E,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,m(a,c)},render:M,addToRenderList:x}}function px(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(S,B,Z,N,W){let q=!1,Y=f(N,Z,B);r!==Y&&(r=Y,l(r.object)),q=d(S,N,Z,W),q&&g(S,N,Z,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,b(S,B,Z,N),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function h(S){return n.deleteVertexArray(S)}function f(S,B,Z){let N=Z.wireframe===!0,W=i[S.id];W===void 0&&(W={},i[S.id]=W);let q=W[B.id];q===void 0&&(q={},W[B.id]=q);let Y=q[N];return Y===void 0&&(Y=u(c()),q[N]=Y),Y}function u(S){let B=[],Z=[],N=[];for(let W=0;W<e;W++)B[W]=0,Z[W]=0,N[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Z,attributeDivisors:N,object:S,attributes:{},index:null}}function d(S,B,Z,N){let W=r.attributes,q=B.attributes,Y=0,ft=Z.getAttributes();for(let $ in ft)if(ft[$].location>=0){let Tt=W[$],dt=q[$];if(dt===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(dt=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(dt=S.instanceColor)),Tt===void 0||Tt.attribute!==dt||dt&&Tt.data!==dt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==N}function g(S,B,Z,N){let W={},q=B.attributes,Y=0,ft=Z.getAttributes();for(let $ in ft)if(ft[$].location>=0){let Tt=q[$];Tt===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(Tt=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(Tt=S.instanceColor));let dt={};dt.attribute=Tt,Tt&&Tt.data&&(dt.data=Tt.data),W[$]=dt,Y++}r.attributes=W,r.attributesNum=Y,r.index=N}function M(){let S=r.newAttributes;for(let B=0,Z=S.length;B<Z;B++)S[B]=0}function x(S){m(S,0)}function m(S,B){let Z=r.newAttributes,N=r.enabledAttributes,W=r.attributeDivisors;Z[S]=1,N[S]===0&&(n.enableVertexAttribArray(S),N[S]=1),W[S]!==B&&(n.vertexAttribDivisor(S,B),W[S]=B)}function w(){let S=r.newAttributes,B=r.enabledAttributes;for(let Z=0,N=B.length;Z<N;Z++)B[Z]!==S[Z]&&(n.disableVertexAttribArray(Z),B[Z]=0)}function E(S,B,Z,N,W,q,Y){Y===!0?n.vertexAttribIPointer(S,B,Z,W,q):n.vertexAttribPointer(S,B,Z,N,W,q)}function b(S,B,Z,N){M();let W=N.attributes,q=Z.getAttributes(),Y=B.defaultAttributeValues;for(let ft in q){let $=q[ft];if($.location>=0){let _t=W[ft];if(_t===void 0&&(ft==="instanceMatrix"&&S.instanceMatrix&&(_t=S.instanceMatrix),ft==="instanceColor"&&S.instanceColor&&(_t=S.instanceColor)),_t!==void 0){let Tt=_t.normalized,dt=_t.itemSize,Xt=t.get(_t);if(Xt===void 0)continue;let ye=Xt.buffer,pt=Xt.type,At=Xt.bytesPerElement,Yt=pt===n.INT||pt===n.UNSIGNED_INT||_t.gpuType===Th;if(_t.isInterleavedBufferAttribute){let Ct=_t.data,zt=Ct.stride,ie=_t.offset;if(Ct.isInstancedInterleavedBuffer){for(let re=0;re<$.locationSize;re++)m($.location+re,Ct.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let re=0;re<$.locationSize;re++)x($.location+re);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let re=0;re<$.locationSize;re++)E($.location+re,dt/$.locationSize,pt,Tt,zt*At,(ie+dt/$.locationSize*re)*At,Yt)}else{if(_t.isInstancedBufferAttribute){for(let Ct=0;Ct<$.locationSize;Ct++)m($.location+Ct,_t.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Ct=0;Ct<$.locationSize;Ct++)x($.location+Ct);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let Ct=0;Ct<$.locationSize;Ct++)E($.location+Ct,dt/$.locationSize,pt,Tt,dt*At,dt/$.locationSize*Ct*At,Yt)}}else if(Y!==void 0){let Tt=Y[ft];if(Tt!==void 0)switch(Tt.length){case 2:n.vertexAttrib2fv($.location,Tt);break;case 3:n.vertexAttrib3fv($.location,Tt);break;case 4:n.vertexAttrib4fv($.location,Tt);break;default:n.vertexAttrib1fv($.location,Tt)}}}}w()}function V(){z();for(let S in i){let B=i[S];for(let Z in B){let N=B[Z];for(let W in N)h(N[W].object),delete N[W];delete B[Z]}delete i[S]}}function L(S){if(i[S.id]===void 0)return;let B=i[S.id];for(let Z in B){let N=B[Z];for(let W in N)h(N[W].object),delete N[W];delete B[Z]}delete i[S.id]}function D(S){for(let B in i){let Z=i[B];if(Z[S.id]===void 0)continue;let N=Z[S.id];for(let W in N)h(N[W].object),delete N[W];delete Z[S.id]}}function z(){A(),o=!0,r!==s&&(r=s,l(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:z,resetDefaultState:A,dispose:V,releaseStatesOfGeometry:L,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:x,disableUnusedAttributes:w}}function mx(n,t,e){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,f){f!==0&&(n.drawArraysInstanced(i,l,h,f),e.update(h,i,f))}function a(l,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];e.update(d,i,1)}function c(l,h,f,u){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,h,0,u,0,f);let g=0;for(let M=0;M<f;M++)g+=h[M]*u[M];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function gx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==ai&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let z=D===Lo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Ni&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Li&&!z)}function c(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),V=g>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:b,vertexTextures:V,maxSamples:L}}function xx(n){let t=this,e=null,i=0,s=!1,r=!1,o=new ri,a=new Me,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,M=f.clipIntersection,x=f.clipShadows,m=n.get(f);if(!s||g===null||g.length===0||r&&!x)r?h(null):l();else{let w=r?0:i,E=w*4,b=m.clippingState||null;c.value=b,b=h(g,u,E,d);for(let V=0;V!==E;++V)b[V]=e[V];m.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,d,g){let M=f!==null?f.length:0,x=null;if(M!==0){if(x=c.value,g!==!0||x===null){let m=d+M*4,w=u.matrixWorldInverse;a.getNormalMatrix(w),(x===null||x.length<m)&&(x=new Float32Array(m));for(let E=0,b=d;E!==M;++E,b+=4)o.copy(f[E]).applyMatrix4(w,a),o.normal.toArray(x,b),x[b+3]=o.constant}c.value=x,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,x}}function _x(n){let t=new WeakMap;function e(o,a){return a===cl?o.mapping=_r:a===ll&&(o.mapping=yr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===cl||a===ll)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Gl(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Pa=class extends Ra{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ur=4,ju=[.125,.215,.35,.446,.526,.582],Ts=20,kc=new Pa,Qu=new ce,Vc=null,Gc=0,Wc=0,Xc=!1,Ss=(1+Math.sqrt(5))/2,or=1/Ss,tf=[new O(-Ss,or,0),new O(Ss,or,0),new O(-or,0,Ss),new O(or,0,Ss),new O(0,Ss,-or),new O(0,Ss,or),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],Ia=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Vc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Vc,Gc,Wc),this._renderer.xr.enabled=Xc,t.scissorTest=!1,oa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_r||t.mapping===yr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:Lo,format:ai,colorSpace:Tr,depthBuffer:!1},s=ef(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ef(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yx(r)),this._blurMaterial=Mx(r,t,e)}return s}_compileMaterial(t){let e=new Pt(this._lodPlanes[0],t);this._renderer.compile(e,kc)}_sceneToCubeUV(t,e,i,s){let a=new xn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Qu),h.toneMapping=ns,h.autoClear=!1;let d=new $e({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),g=new Pt(new ke,d),M=!1,x=t.background;x?x.isColor&&(d.color.copy(x),t.background=null,M=!0):(d.color.copy(Qu),M=!0);for(let m=0;m<6;m++){let w=m%3;w===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):w===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let E=this._cubeSize;oa(s,w*E,m>2?E:0,E,E),h.setRenderTarget(s),M&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=x}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===_r||t.mapping===yr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Pt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;oa(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,kc)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=tf[(s-r-1)%tf.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Pt(this._lodPlanes[s],l),u=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ts-1),M=r/g,x=isFinite(r)?1+Math.floor(h*M):Ts;x>Ts&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ts}`);let m=[],w=0;for(let D=0;D<Ts;++D){let z=D/M,A=Math.exp(-z*z/2);m.push(A),D===0?w+=A:D<x&&(w+=2*A)}for(let D=0;D<m.length;D++)m[D]=m[D]/w;u.envMap.value=t.texture,u.samples.value=x,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:E}=this;u.dTheta.value=g,u.mipInt.value=E-i;let b=this._sizeLods[s],V=3*b*(s>E-ur?s-E+ur:0),L=4*(this._cubeSize-b);oa(e,V,L,3*b,2*b),c.setRenderTarget(e),c.render(f,kc)}};function yx(n){let t=[],e=[],i=[],s=n,r=n-ur+1+ju.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>n-ur?c=ju[o-n+ur-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,M=3,x=2,m=1,w=new Float32Array(M*g*d),E=new Float32Array(x*g*d),b=new Float32Array(m*g*d);for(let L=0;L<d;L++){let D=L%3*2/3-1,z=L>2?0:-1,A=[D,z,0,D+2/3,z,0,D+2/3,z+1,0,D,z,0,D+2/3,z+1,0,D,z+1,0];w.set(A,M*g*L),E.set(u,x*g*L);let S=[L,L,L,L,L,L];b.set(S,m*g*L)}let V=new ze;V.setAttribute("position",new En(w,M)),V.setAttribute("uv",new En(E,x)),V.setAttribute("faceIndex",new En(b,m)),t.push(V),s>ur&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function ef(n,t,e){let i=new Fi(n,t,e);return i.texture.mapping=qa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function oa(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Mx(n,t,e){let i=new Float32Array(Ts),s=new O(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Dh(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function nf(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dh(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function sf(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function Dh(){return`

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
	`}function vx(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===cl||c===ll,h=c===_r||c===yr;if(l||h){let f=t.get(a),u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Ia(n)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Ia(n)),f=l?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Ex(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Qr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function bx(n,t,e,i){let s={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let M=u.morphAttributes[g];for(let x=0,m=M.length;x<m;x++)t.remove(M[x])}u.removeEventListener("dispose",o),delete s[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(f){let u=f.attributes;for(let g in u)t.update(u[g],n.ARRAY_BUFFER);let d=f.morphAttributes;for(let g in d){let M=d[g];for(let x=0,m=M.length;x<m;x++)t.update(M[x],n.ARRAY_BUFFER)}}function l(f){let u=[],d=f.index,g=f.attributes.position,M=0;if(d!==null){let w=d.array;M=d.version;for(let E=0,b=w.length;E<b;E+=3){let V=w[E+0],L=w[E+1],D=w[E+2];u.push(V,L,L,D,D,V)}}else if(g!==void 0){let w=g.array;M=g.version;for(let E=0,b=w.length/3-1;E<b;E+=3){let V=E+0,L=E+1,D=E+2;u.push(V,L,L,D,D,V)}}else return;let x=new(Qf(u)?Aa:Ta)(u,1);x.version=M;let m=r.get(f);m&&t.remove(m),r.set(f,x)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function Sx(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,d){n.drawElements(i,d,r,u*o),e.update(d,i,1)}function l(u,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,u*o,g),e.update(d,i,g))}function h(u,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,g);let x=0;for(let m=0;m<g;m++)x+=d[m];e.update(x,i,1)}function f(u,d,g,M){if(g===0)return;let x=t.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<u.length;m++)l(u[m]/o,d[m],M[m]);else{x.multiDrawElementsInstancedWEBGL(i,d,0,r,u,0,M,0,g);let m=0;for(let w=0;w<g;w++)m+=d[w]*M[w];e.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function wx(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Tx(n,t,e){let i=new WeakMap,s=new Ne;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==f){let A=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],E=0;d===!0&&(E=1),g===!0&&(E=2),M===!0&&(E=3);let b=a.attributes.position.count*E,V=1;b>t.maxTextureSize&&(V=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let L=new Float32Array(b*V*4*f),D=new wa(L,b,V,f);D.type=Li,D.needsUpdate=!0;let z=E*4;for(let S=0;S<f;S++){let B=x[S],Z=m[S],N=w[S],W=b*V*4*S;for(let q=0;q<B.count;q++){let Y=q*z;d===!0&&(s.fromBufferAttribute(B,q),L[W+Y+0]=s.x,L[W+Y+1]=s.y,L[W+Y+2]=s.z,L[W+Y+3]=0),g===!0&&(s.fromBufferAttribute(Z,q),L[W+Y+4]=s.x,L[W+Y+5]=s.y,L[W+Y+6]=s.z,L[W+Y+7]=0),M===!0&&(s.fromBufferAttribute(N,q),L[W+Y+8]=s.x,L[W+Y+9]=s.y,L[W+Y+10]=s.z,L[W+Y+11]=N.itemSize===4?s.w:1)}}u={count:f,texture:D,size:new St(b,V)},i.set(a,u),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let M=0;M<l.length;M++)d+=l[M];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Ax(n,t,e,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,f=t.get(c,h);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return f}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var La=class extends Cn{constructor(t,e,i,s,r,o,a,c,l,h=pr){if(h!==pr&&h!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===pr&&(i=Cs),i===void 0&&h===vr&&(i=Mr),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:rn,this.minFilter=c!==void 0?c:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},id=new Cn,rf=new La(1,1),sd=new wa,rd=new kl,od=new Ca,of=[],af=[],cf=new Float32Array(16),lf=new Float32Array(9),hf=new Float32Array(4);function Ar(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=of[s];if(r===void 0&&(r=new Float32Array(s),of[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function hn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function un(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ka(n,t){let e=af[t];e===void 0&&(e=new Int32Array(t),af[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Rx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Cx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;n.uniform2fv(this.addr,t),un(e,t)}}function Px(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(hn(e,t))return;n.uniform3fv(this.addr,t),un(e,t)}}function Ix(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;n.uniform4fv(this.addr,t),un(e,t)}}function Lx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(hn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),un(e,t)}else{if(hn(e,i))return;hf.set(i),n.uniformMatrix2fv(this.addr,!1,hf),un(e,i)}}function Dx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(hn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),un(e,t)}else{if(hn(e,i))return;lf.set(i),n.uniformMatrix3fv(this.addr,!1,lf),un(e,i)}}function Ux(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(hn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),un(e,t)}else{if(hn(e,i))return;cf.set(i),n.uniformMatrix4fv(this.addr,!1,cf),un(e,i)}}function Nx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Ox(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;n.uniform2iv(this.addr,t),un(e,t)}}function Fx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(hn(e,t))return;n.uniform3iv(this.addr,t),un(e,t)}}function zx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;n.uniform4iv(this.addr,t),un(e,t)}}function Bx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Hx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;n.uniform2uiv(this.addr,t),un(e,t)}}function kx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(hn(e,t))return;n.uniform3uiv(this.addr,t),un(e,t)}}function Vx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;n.uniform4uiv(this.addr,t),un(e,t)}}function Gx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(rf.compareFunction=$f,r=rf):r=id,e.setTexture2D(t||r,s)}function Wx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||rd,s)}function Xx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||od,s)}function Yx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||sd,s)}function qx(n){switch(n){case 5126:return Rx;case 35664:return Cx;case 35665:return Px;case 35666:return Ix;case 35674:return Lx;case 35675:return Dx;case 35676:return Ux;case 5124:case 35670:return Nx;case 35667:case 35671:return Ox;case 35668:case 35672:return Fx;case 35669:case 35673:return zx;case 5125:return Bx;case 36294:return Hx;case 36295:return kx;case 36296:return Vx;case 35678:case 36198:case 36298:case 36306:case 35682:return Gx;case 35679:case 36299:case 36307:return Wx;case 35680:case 36300:case 36308:case 36293:return Xx;case 36289:case 36303:case 36311:case 36292:return Yx}}function Zx(n,t){n.uniform1fv(this.addr,t)}function Kx(n,t){let e=Ar(t,this.size,2);n.uniform2fv(this.addr,e)}function Jx(n,t){let e=Ar(t,this.size,3);n.uniform3fv(this.addr,e)}function $x(n,t){let e=Ar(t,this.size,4);n.uniform4fv(this.addr,e)}function jx(n,t){let e=Ar(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Qx(n,t){let e=Ar(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function t_(n,t){let e=Ar(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function e_(n,t){n.uniform1iv(this.addr,t)}function n_(n,t){n.uniform2iv(this.addr,t)}function i_(n,t){n.uniform3iv(this.addr,t)}function s_(n,t){n.uniform4iv(this.addr,t)}function r_(n,t){n.uniform1uiv(this.addr,t)}function o_(n,t){n.uniform2uiv(this.addr,t)}function a_(n,t){n.uniform3uiv(this.addr,t)}function c_(n,t){n.uniform4uiv(this.addr,t)}function l_(n,t,e){let i=this.cache,s=t.length,r=Ka(e,s);hn(i,r)||(n.uniform1iv(this.addr,r),un(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||id,r[o])}function h_(n,t,e){let i=this.cache,s=t.length,r=Ka(e,s);hn(i,r)||(n.uniform1iv(this.addr,r),un(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||rd,r[o])}function u_(n,t,e){let i=this.cache,s=t.length,r=Ka(e,s);hn(i,r)||(n.uniform1iv(this.addr,r),un(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||od,r[o])}function f_(n,t,e){let i=this.cache,s=t.length,r=Ka(e,s);hn(i,r)||(n.uniform1iv(this.addr,r),un(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||sd,r[o])}function d_(n){switch(n){case 5126:return Zx;case 35664:return Kx;case 35665:return Jx;case 35666:return $x;case 35674:return jx;case 35675:return Qx;case 35676:return t_;case 5124:case 35670:return e_;case 35667:case 35671:return n_;case 35668:case 35672:return i_;case 35669:case 35673:return s_;case 5125:return r_;case 36294:return o_;case 36295:return a_;case 36296:return c_;case 35678:case 36198:case 36298:case 36306:case 35682:return l_;case 35679:case 36299:case 36307:return h_;case 35680:case 36300:case 36308:case 36293:return u_;case 36289:case 36303:case 36311:case 36292:return f_}}var Wl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=qx(e.type)}},Xl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=d_(e.type)}},Yl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Yc=/(\w+)(\])?(\[|\.)?/g;function uf(n,t){n.seq.push(t),n.map[t.id]=t}function p_(n,t,e){let i=n.name,s=i.length;for(Yc.lastIndex=0;;){let r=Yc.exec(i),o=Yc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){uf(e,l===void 0?new Wl(a,n,t):new Xl(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new Yl(a),uf(e,f)),e=f}}}var gr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);p_(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function ff(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var m_=37297,g_=0;function x_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var df=new Me;function __(n){Te._getMatrix(df,Te.workingColorSpace,n);let t=`mat3( ${df.elements.map(e=>e.toFixed(4))} )`;switch(Te.getTransfer(n)){case Za:return[t,"LinearTransferOETF"];case Ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function pf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+x_(n.getShaderSource(t),o)}else return s}function y_(n,t){let e=__(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function M_(n,t){let e;switch(t){case Pp:e="Linear";break;case Ip:e="Reinhard";break;case Lp:e="Cineon";break;case Dp:e="ACESFilmic";break;case Np:e="AgX";break;case Op:e="Neutral";break;case Up:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var aa=new O;function v_(){Te.getLuminanceCoefficients(aa);let n=aa.x.toFixed(4),t=aa.y.toFixed(4),e=aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(to).join(`
`)}function b_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function S_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function to(n){return n!==""}function mf(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var w_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ql(n){return n.replace(w_,A_)}var T_=new Map;function A_(n,t){let e=ve[t];if(e===void 0){let i=T_.get(t);if(i!==void 0)e=ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ql(e)}var R_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xf(n){return n.replace(R_,C_)}function C_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _f(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function P_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===zf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ya?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ii&&(t="SHADOWMAP_TYPE_VSM"),t}function I_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _r:case yr:t="ENVMAP_TYPE_CUBE";break;case qa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function L_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case yr:t="ENVMAP_MODE_REFRACTION";break}return t}function D_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case wh:t="ENVMAP_BLENDING_MULTIPLY";break;case Rp:t="ENVMAP_BLENDING_MIX";break;case Cp:t="ENVMAP_BLENDING_ADD";break}return t}function U_(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function N_(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=P_(e),l=I_(e),h=L_(e),f=D_(e),u=U_(e),d=E_(e),g=b_(r),M=s.createProgram(),x,m,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(to).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(to).join(`
`),m.length>0&&(m+=`
`)):(x=[_f(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),m=[_f(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ns?"#define TONE_MAPPING":"",e.toneMapping!==ns?ve.tonemapping_pars_fragment:"",e.toneMapping!==ns?M_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,y_("linearToOutputTexel",e.outputColorSpace),v_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(to).join(`
`)),o=ql(o),o=mf(o,e),o=gf(o,e),a=ql(a),a=mf(a,e),a=gf(a,e),o=xf(o),a=xf(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===Pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let E=w+x+o,b=w+m+a,V=ff(s,s.VERTEX_SHADER,E),L=ff(s,s.FRAGMENT_SHADER,b);s.attachShader(M,V),s.attachShader(M,L),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function D(B){if(n.debug.checkShaderErrors){let Z=s.getProgramInfoLog(M).trim(),N=s.getShaderInfoLog(V).trim(),W=s.getShaderInfoLog(L).trim(),q=!0,Y=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,V,L);else{let ft=pf(s,V,"vertex"),$=pf(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+Z+`
`+ft+`
`+$)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(N===""||W==="")&&(Y=!1);Y&&(B.diagnostics={runnable:q,programLog:Z,vertexShader:{log:N,prefix:x},fragmentShader:{log:W,prefix:m}})}s.deleteShader(V),s.deleteShader(L),z=new gr(s,M),A=S_(s,M)}let z;this.getUniforms=function(){return z===void 0&&D(this),z};let A;this.getAttributes=function(){return A===void 0&&D(this),A};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(M,m_)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=g_++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=V,this.fragmentShader=L,this}var O_=0,Zl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Kl(t),e.set(t,i)),i}},Kl=class{constructor(t){this.id=O_++,this.code=t,this.usedTimes=0}};function F_(n,t,e,i,s,r,o){let a=new uo,c=new Zl,l=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(A){return l.add(A),A===0?"uv":`uv${A}`}function x(A,S,B,Z,N){let W=Z.fog,q=N.geometry,Y=A.isMeshStandardMaterial?Z.environment:null,ft=(A.isMeshStandardMaterial?e:t).get(A.envMap||Y),$=ft&&ft.mapping===qa?ft.image.height:null,_t=g[A.type];A.precision!==null&&(d=s.getMaxPrecision(A.precision),d!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",d,"instead."));let Tt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,dt=Tt!==void 0?Tt.length:0,Xt=0;q.morphAttributes.position!==void 0&&(Xt=1),q.morphAttributes.normal!==void 0&&(Xt=2),q.morphAttributes.color!==void 0&&(Xt=3);let ye,pt,At,Yt;if(_t){let be=mi[_t];ye=be.vertexShader,pt=be.fragmentShader}else ye=A.vertexShader,pt=A.fragmentShader,c.update(A),At=c.getVertexShaderID(A),Yt=c.getFragmentShaderID(A);let Ct=n.getRenderTarget(),zt=n.state.buffers.depth.getReversed(),ie=N.isInstancedMesh===!0,re=N.isBatchedMesh===!0,ue=!!A.map,xt=!!A.matcap,vt=!!ft,F=!!A.aoMap,Zt=!!A.lightMap,wt=!!A.bumpMap,Ht=!!A.normalMap,Lt=!!A.displacementMap,oe=!!A.emissiveMap,Bt=!!A.metalnessMap,P=!!A.roughnessMap,T=A.anisotropy>0,Q=A.clearcoat>0,gt=A.dispersion>0,Mt=A.iridescence>0,G=A.sheen>0,tt=A.transmission>0,j=T&&!!A.anisotropyMap,ht=Q&&!!A.clearcoatMap,Nt=Q&&!!A.clearcoatNormalMap,it=Q&&!!A.clearcoatRoughnessMap,nt=Mt&&!!A.iridescenceMap,Ot=Mt&&!!A.iridescenceThicknessMap,bt=G&&!!A.sheenColorMap,lt=G&&!!A.sheenRoughnessMap,se=!!A.specularMap,le=!!A.specularColorMap,jt=!!A.specularIntensityMap,X=tt&&!!A.transmissionMap,Ut=tt&&!!A.thicknessMap,ct=!!A.gradientMap,yt=!!A.alphaMap,qt=A.alphaTest>0,Wt=!!A.alphaHash,pe=!!A.extensions,Pe=ns;A.toneMapped&&(Ct===null||Ct.isXRRenderTarget===!0)&&(Pe=n.toneMapping);let on={shaderID:_t,shaderType:A.type,shaderName:A.name,vertexShader:ye,fragmentShader:pt,defines:A.defines,customVertexShaderID:At,customFragmentShaderID:Yt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:d,batching:re,batchingColor:re&&N._colorsTexture!==null,instancing:ie,instancingColor:ie&&N.instanceColor!==null,instancingMorph:ie&&N.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:Ct===null?n.outputColorSpace:Ct.isXRRenderTarget===!0?Ct.texture.colorSpace:Tr,alphaToCoverage:!!A.alphaToCoverage,map:ue,matcap:xt,envMap:vt,envMapMode:vt&&ft.mapping,envMapCubeUVHeight:$,aoMap:F,lightMap:Zt,bumpMap:wt,normalMap:Ht,displacementMap:u&&Lt,emissiveMap:oe,normalMapObjectSpace:Ht&&A.normalMapType===Hp,normalMapTangentSpace:Ht&&A.normalMapType===Jf,metalnessMap:Bt,roughnessMap:P,anisotropy:T,anisotropyMap:j,clearcoat:Q,clearcoatMap:ht,clearcoatNormalMap:Nt,clearcoatRoughnessMap:it,dispersion:gt,iridescence:Mt,iridescenceMap:nt,iridescenceThicknessMap:Ot,sheen:G,sheenColorMap:bt,sheenRoughnessMap:lt,specularMap:se,specularColorMap:le,specularIntensityMap:jt,transmission:tt,transmissionMap:X,thicknessMap:Ut,gradientMap:ct,opaque:A.transparent===!1&&A.blending===dr&&A.alphaToCoverage===!1,alphaMap:yt,alphaTest:qt,alphaHash:Wt,combine:A.combine,mapUv:ue&&M(A.map.channel),aoMapUv:F&&M(A.aoMap.channel),lightMapUv:Zt&&M(A.lightMap.channel),bumpMapUv:wt&&M(A.bumpMap.channel),normalMapUv:Ht&&M(A.normalMap.channel),displacementMapUv:Lt&&M(A.displacementMap.channel),emissiveMapUv:oe&&M(A.emissiveMap.channel),metalnessMapUv:Bt&&M(A.metalnessMap.channel),roughnessMapUv:P&&M(A.roughnessMap.channel),anisotropyMapUv:j&&M(A.anisotropyMap.channel),clearcoatMapUv:ht&&M(A.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&M(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&M(A.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&M(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&M(A.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&M(A.sheenColorMap.channel),sheenRoughnessMapUv:lt&&M(A.sheenRoughnessMap.channel),specularMapUv:se&&M(A.specularMap.channel),specularColorMapUv:le&&M(A.specularColorMap.channel),specularIntensityMapUv:jt&&M(A.specularIntensityMap.channel),transmissionMapUv:X&&M(A.transmissionMap.channel),thicknessMapUv:Ut&&M(A.thicknessMap.channel),alphaMapUv:yt&&M(A.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ht||T),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!q.attributes.uv&&(ue||yt),fog:!!W,useFog:A.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:zt,skinning:N.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Xt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:Pe,decodeVideoTexture:ue&&A.map.isVideoTexture===!0&&Te.getTransfer(A.map.colorSpace)===Ue,decodeVideoTextureEmissive:oe&&A.emissiveMap.isVideoTexture===!0&&Te.getTransfer(A.emissiveMap.colorSpace)===Ue,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===An,flipSided:A.side===Rn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:pe&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&A.extensions.multiDraw===!0||re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return on.vertexUv1s=l.has(1),on.vertexUv2s=l.has(2),on.vertexUv3s=l.has(3),l.clear(),on}function m(A){let S=[];if(A.shaderID?S.push(A.shaderID):(S.push(A.customVertexShaderID),S.push(A.customFragmentShaderID)),A.defines!==void 0)for(let B in A.defines)S.push(B),S.push(A.defines[B]);return A.isRawShaderMaterial===!1&&(w(S,A),E(S,A),S.push(n.outputColorSpace)),S.push(A.customProgramCacheKey),S.join()}function w(A,S){A.push(S.precision),A.push(S.outputColorSpace),A.push(S.envMapMode),A.push(S.envMapCubeUVHeight),A.push(S.mapUv),A.push(S.alphaMapUv),A.push(S.lightMapUv),A.push(S.aoMapUv),A.push(S.bumpMapUv),A.push(S.normalMapUv),A.push(S.displacementMapUv),A.push(S.emissiveMapUv),A.push(S.metalnessMapUv),A.push(S.roughnessMapUv),A.push(S.anisotropyMapUv),A.push(S.clearcoatMapUv),A.push(S.clearcoatNormalMapUv),A.push(S.clearcoatRoughnessMapUv),A.push(S.iridescenceMapUv),A.push(S.iridescenceThicknessMapUv),A.push(S.sheenColorMapUv),A.push(S.sheenRoughnessMapUv),A.push(S.specularMapUv),A.push(S.specularColorMapUv),A.push(S.specularIntensityMapUv),A.push(S.transmissionMapUv),A.push(S.thicknessMapUv),A.push(S.combine),A.push(S.fogExp2),A.push(S.sizeAttenuation),A.push(S.morphTargetsCount),A.push(S.morphAttributeCount),A.push(S.numDirLights),A.push(S.numPointLights),A.push(S.numSpotLights),A.push(S.numSpotLightMaps),A.push(S.numHemiLights),A.push(S.numRectAreaLights),A.push(S.numDirLightShadows),A.push(S.numPointLightShadows),A.push(S.numSpotLightShadows),A.push(S.numSpotLightShadowsWithMaps),A.push(S.numLightProbes),A.push(S.shadowMapType),A.push(S.toneMapping),A.push(S.numClippingPlanes),A.push(S.numClipIntersection),A.push(S.depthPacking)}function E(A,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),A.push(a.mask)}function b(A){let S=g[A.type],B;if(S){let Z=mi[S];B=A0.clone(Z.uniforms)}else B=A.uniforms;return B}function V(A,S){let B;for(let Z=0,N=h.length;Z<N;Z++){let W=h[Z];if(W.cacheKey===S){B=W,++B.usedTimes;break}}return B===void 0&&(B=new N_(n,S,A,r),h.push(B)),B}function L(A){if(--A.usedTimes===0){let S=h.indexOf(A);h[S]=h[h.length-1],h.pop(),A.destroy()}}function D(A){c.remove(A)}function z(){c.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:b,acquireProgram:V,releaseProgram:L,releaseShaderCache:D,programs:h,dispose:z}}function z_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function B_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function yf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Mf(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f,u,d,g,M,x){let m=n[t];return m===void 0?(m={id:f.id,object:f,geometry:u,material:d,groupOrder:g,renderOrder:f.renderOrder,z:M,group:x},n[t]=m):(m.id=f.id,m.object=f,m.geometry=u,m.material=d,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=M,m.group=x),t++,m}function a(f,u,d,g,M,x){let m=o(f,u,d,g,M,x);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):e.push(m)}function c(f,u,d,g,M,x){let m=o(f,u,d,g,M,x);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function l(f,u){e.length>1&&e.sort(f||B_),i.length>1&&i.sort(u||yf),s.length>1&&s.sort(u||yf)}function h(){for(let f=t,u=n.length;f<u;f++){let d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function H_(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Mf,n.set(i,[o])):s>=r.length?(o=new Mf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function k_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new ce};break;case"SpotLight":e={position:new O,direction:new O,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new ce,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":e={color:new ce,position:new O,halfWidth:new O,halfHeight:new O};break}return n[t.id]=e,e}}}function V_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var G_=0;function W_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function X_(n){let t=new k_,e=V_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);let s=new O,r=new Be,o=new Be;function a(l){let h=0,f=0,u=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let d=0,g=0,M=0,x=0,m=0,w=0,E=0,b=0,V=0,L=0,D=0;l.sort(W_);for(let A=0,S=l.length;A<S;A++){let B=l[A],Z=B.color,N=B.intensity,W=B.distance,q=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)h+=Z.r*N,f+=Z.g*N,u+=Z.b*N;else if(B.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(B.sh.coefficients[Y],N);D++}else if(B.isDirectionalLight){let Y=t.get(B);if(Y.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let ft=B.shadow,$=e.get(B);$.shadowIntensity=ft.intensity,$.shadowBias=ft.bias,$.shadowNormalBias=ft.normalBias,$.shadowRadius=ft.radius,$.shadowMapSize=ft.mapSize,i.directionalShadow[d]=$,i.directionalShadowMap[d]=q,i.directionalShadowMatrix[d]=B.shadow.matrix,w++}i.directional[d]=Y,d++}else if(B.isSpotLight){let Y=t.get(B);Y.position.setFromMatrixPosition(B.matrixWorld),Y.color.copy(Z).multiplyScalar(N),Y.distance=W,Y.coneCos=Math.cos(B.angle),Y.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Y.decay=B.decay,i.spot[M]=Y;let ft=B.shadow;if(B.map&&(i.spotLightMap[V]=B.map,V++,ft.updateMatrices(B),B.castShadow&&L++),i.spotLightMatrix[M]=ft.matrix,B.castShadow){let $=e.get(B);$.shadowIntensity=ft.intensity,$.shadowBias=ft.bias,$.shadowNormalBias=ft.normalBias,$.shadowRadius=ft.radius,$.shadowMapSize=ft.mapSize,i.spotShadow[M]=$,i.spotShadowMap[M]=q,b++}M++}else if(B.isRectAreaLight){let Y=t.get(B);Y.color.copy(Z).multiplyScalar(N),Y.halfWidth.set(B.width*.5,0,0),Y.halfHeight.set(0,B.height*.5,0),i.rectArea[x]=Y,x++}else if(B.isPointLight){let Y=t.get(B);if(Y.color.copy(B.color).multiplyScalar(B.intensity),Y.distance=B.distance,Y.decay=B.decay,B.castShadow){let ft=B.shadow,$=e.get(B);$.shadowIntensity=ft.intensity,$.shadowBias=ft.bias,$.shadowNormalBias=ft.normalBias,$.shadowRadius=ft.radius,$.shadowMapSize=ft.mapSize,$.shadowCameraNear=ft.camera.near,$.shadowCameraFar=ft.camera.far,i.pointShadow[g]=$,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=B.shadow.matrix,E++}i.point[g]=Y,g++}else if(B.isHemisphereLight){let Y=t.get(B);Y.skyColor.copy(B.color).multiplyScalar(N),Y.groundColor.copy(B.groundColor).multiplyScalar(N),i.hemi[m]=Y,m++}}x>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Vt.LTC_FLOAT_1,i.rectAreaLTC2=Vt.LTC_FLOAT_2):(i.rectAreaLTC1=Vt.LTC_HALF_1,i.rectAreaLTC2=Vt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let z=i.hash;(z.directionalLength!==d||z.pointLength!==g||z.spotLength!==M||z.rectAreaLength!==x||z.hemiLength!==m||z.numDirectionalShadows!==w||z.numPointShadows!==E||z.numSpotShadows!==b||z.numSpotMaps!==V||z.numLightProbes!==D)&&(i.directional.length=d,i.spot.length=M,i.rectArea.length=x,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=b+V-L,i.spotLightMap.length=V,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=D,z.directionalLength=d,z.pointLength=g,z.spotLength=M,z.rectAreaLength=x,z.hemiLength=m,z.numDirectionalShadows=w,z.numPointShadows=E,z.numSpotShadows=b,z.numSpotMaps=V,z.numLightProbes=D,i.version=G_++)}function c(l,h){let f=0,u=0,d=0,g=0,M=0,x=h.matrixWorldInverse;for(let m=0,w=l.length;m<w;m++){let E=l[m];if(E.isDirectionalLight){let b=i.directional[f];b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(x),f++}else if(E.isSpotLight){let b=i.spot[d];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(x),b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(x),d++}else if(E.isRectAreaLight){let b=i.rectArea[g];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(x),o.identity(),r.copy(E.matrixWorld),r.premultiply(x),o.extractRotation(r),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){let b=i.point[u];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(x),u++}else if(E.isHemisphereLight){let b=i.hemi[M];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(x),M++}}}return{setup:a,setupView:c,state:i}}function vf(n){let t=new X_(n),e=[],i=[];function s(h){l.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Y_(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new vf(n),t.set(s,[a])):r>=o.length?(a=new vf(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Jl=class extends zi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=zp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},$l=class extends zi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},q_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z_=`uniform sampler2D shadow_pass;
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
}`;function K_(n,t,e){let i=new fo,s=new St,r=new St,o=new Ne,a=new Jl({depthPacking:Bp}),c=new $l,l={},h=e.maxTextureSize,f={[is]:Rn,[Rn]:is,[An]:An},u=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:q_,fragmentShader:Z_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new ze;g.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Pt(g,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zf;let m=this.type;this.render=function(L,D,z){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||L.length===0)return;let A=n.getRenderTarget(),S=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),Z=n.state;Z.setBlending(es),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);let N=m!==Ii&&this.type===Ii,W=m===Ii&&this.type!==Ii;for(let q=0,Y=L.length;q<Y;q++){let ft=L[q],$=ft.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ft,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let _t=$.getFrameExtents();if(s.multiply(_t),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/_t.x),s.x=r.x*_t.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/_t.y),s.y=r.y*_t.y,$.mapSize.y=r.y)),$.map===null||N===!0||W===!0){let dt=this.type!==Ii?{minFilter:rn,magFilter:rn}:{};$.map!==null&&$.map.dispose(),$.map=new Fi(s.x,s.y,dt),$.map.texture.name=ft.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();let Tt=$.getViewportCount();for(let dt=0;dt<Tt;dt++){let Xt=$.getViewport(dt);o.set(r.x*Xt.x,r.y*Xt.y,r.x*Xt.z,r.y*Xt.w),Z.viewport(o),$.updateMatrices(ft,dt),i=$.getFrustum(),b(D,z,$.camera,ft,this.type)}$.isPointLightShadow!==!0&&this.type===Ii&&w($,z),$.needsUpdate=!1}m=this.type,x.needsUpdate=!1,n.setRenderTarget(A,S,B)};function w(L,D){let z=t.update(M);u.defines.VSM_SAMPLES!==L.blurSamples&&(u.defines.VSM_SAMPLES=L.blurSamples,d.defines.VSM_SAMPLES=L.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Fi(s.x,s.y)),u.uniforms.shadow_pass.value=L.map.texture,u.uniforms.resolution.value=L.mapSize,u.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(D,null,z,u,M,null),d.uniforms.shadow_pass.value=L.mapPass.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(D,null,z,d,M,null)}function E(L,D,z,A){let S=null,B=z.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(B!==void 0)S=B;else if(S=z.isPointLight===!0?c:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let Z=S.uuid,N=D.uuid,W=l[Z];W===void 0&&(W={},l[Z]=W);let q=W[N];q===void 0&&(q=S.clone(),W[N]=q,D.addEventListener("dispose",V)),S=q}if(S.visible=D.visible,S.wireframe=D.wireframe,A===Ii?S.side=D.shadowSide!==null?D.shadowSide:D.side:S.side=D.shadowSide!==null?D.shadowSide:f[D.side],S.alphaMap=D.alphaMap,S.alphaTest=D.alphaTest,S.map=D.map,S.clipShadows=D.clipShadows,S.clippingPlanes=D.clippingPlanes,S.clipIntersection=D.clipIntersection,S.displacementMap=D.displacementMap,S.displacementScale=D.displacementScale,S.displacementBias=D.displacementBias,S.wireframeLinewidth=D.wireframeLinewidth,S.linewidth=D.linewidth,z.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let Z=n.properties.get(S);Z.light=z}return S}function b(L,D,z,A,S){if(L.visible===!1)return;if(L.layers.test(D.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&S===Ii)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,L.matrixWorld);let N=t.update(L),W=L.material;if(Array.isArray(W)){let q=N.groups;for(let Y=0,ft=q.length;Y<ft;Y++){let $=q[Y],_t=W[$.materialIndex];if(_t&&_t.visible){let Tt=E(L,_t,A,S);L.onBeforeShadow(n,L,D,z,N,Tt,$),n.renderBufferDirect(z,null,N,Tt,L,$),L.onAfterShadow(n,L,D,z,N,Tt,$)}}}else if(W.visible){let q=E(L,W,A,S);L.onBeforeShadow(n,L,D,z,N,q,null),n.renderBufferDirect(z,null,N,q,L,null),L.onAfterShadow(n,L,D,z,N,q,null)}}let Z=L.children;for(let N=0,W=Z.length;N<W;N++)b(Z[N],D,z,A,S)}function V(L){L.target.removeEventListener("dispose",V);for(let z in l){let A=l[z],S=L.target.uuid;S in A&&(A[S].dispose(),delete A[S])}}}var J_={[el]:nl,[il]:ol,[sl]:al,[xr]:rl,[nl]:el,[ol]:il,[al]:sl,[rl]:xr};function $_(n,t){function e(){let X=!1,Ut=new Ne,ct=null,yt=new Ne(0,0,0,0);return{setMask:function(qt){ct!==qt&&!X&&(n.colorMask(qt,qt,qt,qt),ct=qt)},setLocked:function(qt){X=qt},setClear:function(qt,Wt,pe,Pe,on){on===!0&&(qt*=Pe,Wt*=Pe,pe*=Pe),Ut.set(qt,Wt,pe,Pe),yt.equals(Ut)===!1&&(n.clearColor(qt,Wt,pe,Pe),yt.copy(Ut))},reset:function(){X=!1,ct=null,yt.set(-1,0,0,0)}}}function i(){let X=!1,Ut=!1,ct=null,yt=null,qt=null;return{setReversed:function(Wt){if(Ut!==Wt){let pe=t.get("EXT_clip_control");Ut?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT);let Pe=qt;qt=null,this.setClear(Pe)}Ut=Wt},getReversed:function(){return Ut},setTest:function(Wt){Wt?Ct(n.DEPTH_TEST):zt(n.DEPTH_TEST)},setMask:function(Wt){ct!==Wt&&!X&&(n.depthMask(Wt),ct=Wt)},setFunc:function(Wt){if(Ut&&(Wt=J_[Wt]),yt!==Wt){switch(Wt){case el:n.depthFunc(n.NEVER);break;case nl:n.depthFunc(n.ALWAYS);break;case il:n.depthFunc(n.LESS);break;case xr:n.depthFunc(n.LEQUAL);break;case sl:n.depthFunc(n.EQUAL);break;case rl:n.depthFunc(n.GEQUAL);break;case ol:n.depthFunc(n.GREATER);break;case al:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}yt=Wt}},setLocked:function(Wt){X=Wt},setClear:function(Wt){qt!==Wt&&(Ut&&(Wt=1-Wt),n.clearDepth(Wt),qt=Wt)},reset:function(){X=!1,ct=null,yt=null,qt=null,Ut=!1}}}function s(){let X=!1,Ut=null,ct=null,yt=null,qt=null,Wt=null,pe=null,Pe=null,on=null;return{setTest:function(be){X||(be?Ct(n.STENCIL_TEST):zt(n.STENCIL_TEST))},setMask:function(be){Ut!==be&&!X&&(n.stencilMask(be),Ut=be)},setFunc:function(be,kn,Qn){(ct!==be||yt!==kn||qt!==Qn)&&(n.stencilFunc(be,kn,Qn),ct=be,yt=kn,qt=Qn)},setOp:function(be,kn,Qn){(Wt!==be||pe!==kn||Pe!==Qn)&&(n.stencilOp(be,kn,Qn),Wt=be,pe=kn,Pe=Qn)},setLocked:function(be){X=be},setClear:function(be){on!==be&&(n.clearStencil(be),on=be)},reset:function(){X=!1,Ut=null,ct=null,yt=null,qt=null,Wt=null,pe=null,Pe=null,on=null}}}let r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap,h={},f={},u=new WeakMap,d=[],g=null,M=!1,x=null,m=null,w=null,E=null,b=null,V=null,L=null,D=new ce(0,0,0),z=0,A=!1,S=null,B=null,Z=null,N=null,W=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,ft=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec($)[1]),Y=ft>=1):$.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Y=ft>=2);let _t=null,Tt={},dt=n.getParameter(n.SCISSOR_BOX),Xt=n.getParameter(n.VIEWPORT),ye=new Ne().fromArray(dt),pt=new Ne().fromArray(Xt);function At(X,Ut,ct,yt){let qt=new Uint8Array(4),Wt=n.createTexture();n.bindTexture(X,Wt),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let pe=0;pe<ct;pe++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(Ut,0,n.RGBA,1,1,yt,0,n.RGBA,n.UNSIGNED_BYTE,qt):n.texImage2D(Ut+pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,qt);return Wt}let Yt={};Yt[n.TEXTURE_2D]=At(n.TEXTURE_2D,n.TEXTURE_2D,1),Yt[n.TEXTURE_CUBE_MAP]=At(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Yt[n.TEXTURE_2D_ARRAY]=At(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Yt[n.TEXTURE_3D]=At(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Ct(n.DEPTH_TEST),o.setFunc(xr),wt(!1),Ht(Eu),Ct(n.CULL_FACE),F(es);function Ct(X){h[X]!==!0&&(n.enable(X),h[X]=!0)}function zt(X){h[X]!==!1&&(n.disable(X),h[X]=!1)}function ie(X,Ut){return f[X]!==Ut?(n.bindFramebuffer(X,Ut),f[X]=Ut,X===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Ut),X===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Ut),!0):!1}function re(X,Ut){let ct=d,yt=!1;if(X){ct=u.get(Ut),ct===void 0&&(ct=[],u.set(Ut,ct));let qt=X.textures;if(ct.length!==qt.length||ct[0]!==n.COLOR_ATTACHMENT0){for(let Wt=0,pe=qt.length;Wt<pe;Wt++)ct[Wt]=n.COLOR_ATTACHMENT0+Wt;ct.length=qt.length,yt=!0}}else ct[0]!==n.BACK&&(ct[0]=n.BACK,yt=!0);yt&&n.drawBuffers(ct)}function ue(X){return g!==X?(n.useProgram(X),g=X,!0):!1}let xt={[ws]:n.FUNC_ADD,[up]:n.FUNC_SUBTRACT,[fp]:n.FUNC_REVERSE_SUBTRACT};xt[dp]=n.MIN,xt[pp]=n.MAX;let vt={[mp]:n.ZERO,[gp]:n.ONE,[xp]:n.SRC_COLOR,[Qc]:n.SRC_ALPHA,[bp]:n.SRC_ALPHA_SATURATE,[vp]:n.DST_COLOR,[yp]:n.DST_ALPHA,[_p]:n.ONE_MINUS_SRC_COLOR,[tl]:n.ONE_MINUS_SRC_ALPHA,[Ep]:n.ONE_MINUS_DST_COLOR,[Mp]:n.ONE_MINUS_DST_ALPHA,[Sp]:n.CONSTANT_COLOR,[wp]:n.ONE_MINUS_CONSTANT_COLOR,[Tp]:n.CONSTANT_ALPHA,[Ap]:n.ONE_MINUS_CONSTANT_ALPHA};function F(X,Ut,ct,yt,qt,Wt,pe,Pe,on,be){if(X===es){M===!0&&(zt(n.BLEND),M=!1);return}if(M===!1&&(Ct(n.BLEND),M=!0),X!==hp){if(X!==x||be!==A){if((m!==ws||b!==ws)&&(n.blendEquation(n.FUNC_ADD),m=ws,b=ws),be)switch(X){case dr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bu:n.blendFunc(n.ONE,n.ONE);break;case Su:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case dr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Su:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}w=null,E=null,V=null,L=null,D.set(0,0,0),z=0,x=X,A=be}return}qt=qt||Ut,Wt=Wt||ct,pe=pe||yt,(Ut!==m||qt!==b)&&(n.blendEquationSeparate(xt[Ut],xt[qt]),m=Ut,b=qt),(ct!==w||yt!==E||Wt!==V||pe!==L)&&(n.blendFuncSeparate(vt[ct],vt[yt],vt[Wt],vt[pe]),w=ct,E=yt,V=Wt,L=pe),(Pe.equals(D)===!1||on!==z)&&(n.blendColor(Pe.r,Pe.g,Pe.b,on),D.copy(Pe),z=on),x=X,A=!1}function Zt(X,Ut){X.side===An?zt(n.CULL_FACE):Ct(n.CULL_FACE);let ct=X.side===Rn;Ut&&(ct=!ct),wt(ct),X.blending===dr&&X.transparent===!1?F(es):F(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);let yt=X.stencilWrite;a.setTest(yt),yt&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),oe(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Ct(n.SAMPLE_ALPHA_TO_COVERAGE):zt(n.SAMPLE_ALPHA_TO_COVERAGE)}function wt(X){S!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),S=X)}function Ht(X){X!==cp?(Ct(n.CULL_FACE),X!==B&&(X===Eu?n.cullFace(n.BACK):X===lp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):zt(n.CULL_FACE),B=X}function Lt(X){X!==Z&&(Y&&n.lineWidth(X),Z=X)}function oe(X,Ut,ct){X?(Ct(n.POLYGON_OFFSET_FILL),(N!==Ut||W!==ct)&&(n.polygonOffset(Ut,ct),N=Ut,W=ct)):zt(n.POLYGON_OFFSET_FILL)}function Bt(X){X?Ct(n.SCISSOR_TEST):zt(n.SCISSOR_TEST)}function P(X){X===void 0&&(X=n.TEXTURE0+q-1),_t!==X&&(n.activeTexture(X),_t=X)}function T(X,Ut,ct){ct===void 0&&(_t===null?ct=n.TEXTURE0+q-1:ct=_t);let yt=Tt[ct];yt===void 0&&(yt={type:void 0,texture:void 0},Tt[ct]=yt),(yt.type!==X||yt.texture!==Ut)&&(_t!==ct&&(n.activeTexture(ct),_t=ct),n.bindTexture(X,Ut||Yt[X]),yt.type=X,yt.texture=Ut)}function Q(){let X=Tt[_t];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function gt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Mt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function G(){try{n.texSubImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function tt(){try{n.texSubImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function j(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ht(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Nt(){try{n.texStorage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function it(){try{n.texStorage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function nt(){try{n.texImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ot(){try{n.texImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function bt(X){ye.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),ye.copy(X))}function lt(X){pt.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),pt.copy(X))}function se(X,Ut){let ct=l.get(Ut);ct===void 0&&(ct=new WeakMap,l.set(Ut,ct));let yt=ct.get(X);yt===void 0&&(yt=n.getUniformBlockIndex(Ut,X.name),ct.set(X,yt))}function le(X,Ut){let yt=l.get(Ut).get(X);c.get(Ut)!==yt&&(n.uniformBlockBinding(Ut,yt,X.__bindingPointIndex),c.set(Ut,yt))}function jt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},_t=null,Tt={},f={},u=new WeakMap,d=[],g=null,M=!1,x=null,m=null,w=null,E=null,b=null,V=null,L=null,D=new ce(0,0,0),z=0,A=!1,S=null,B=null,Z=null,N=null,W=null,ye.set(0,0,n.canvas.width,n.canvas.height),pt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Ct,disable:zt,bindFramebuffer:ie,drawBuffers:re,useProgram:ue,setBlending:F,setMaterial:Zt,setFlipSided:wt,setCullFace:Ht,setLineWidth:Lt,setPolygonOffset:oe,setScissorTest:Bt,activeTexture:P,bindTexture:T,unbindTexture:Q,compressedTexImage2D:gt,compressedTexImage3D:Mt,texImage2D:nt,texImage3D:Ot,updateUBOMapping:se,uniformBlockBinding:le,texStorage2D:Nt,texStorage3D:it,texSubImage2D:G,texSubImage3D:tt,compressedTexSubImage2D:j,compressedTexSubImage3D:ht,scissor:bt,viewport:lt,reset:jt}}function Ef(n,t,e,i){let s=j_(i);switch(e){case Gf:return n*t;case Xf:return n*t;case Yf:return n*t*2;case qf:return n*t/s.components*s.byteLength;case Ch:return n*t/s.components*s.byteLength;case Zf:return n*t*2/s.components*s.byteLength;case Ph:return n*t*2/s.components*s.byteLength;case Wf:return n*t*3/s.components*s.byteLength;case ai:return n*t*4/s.components*s.byteLength;case Ih:return n*t*4/s.components*s.byteLength;case xa:case _a:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ya:case Ma:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fl:case pl:return Math.max(n,16)*Math.max(t,8)/4;case ul:case dl:return Math.max(n,8)*Math.max(t,8)/2;case ml:case gl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case xl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _l:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case yl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case vl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case El:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case bl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case wl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Tl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Al:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Pl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Il:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case va:case Ll:case Dl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Kf:case Ul:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Nl:case Ol:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function j_(n){switch(n){case Ni:case Hf:return{byteLength:1,components:1};case co:case kf:case Lo:return{byteLength:2,components:1};case Ah:case Rh:return{byteLength:2,components:4};case Cs:case Th:case Li:return{byteLength:4,components:1};case Vf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Q_(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new St,h=new WeakMap,f,u=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,T){return d?new OffscreenCanvas(P,T):ho("canvas")}function M(P,T,Q){let gt=1,Mt=Bt(P);if((Mt.width>Q||Mt.height>Q)&&(gt=Q/Math.max(Mt.width,Mt.height)),gt<1)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap||typeof VideoFrame!="undefined"&&P instanceof VideoFrame){let G=Math.floor(gt*Mt.width),tt=Math.floor(gt*Mt.height);f===void 0&&(f=g(G,tt));let j=T?g(G,tt):f;return j.width=G,j.height=tt,j.getContext("2d").drawImage(P,0,0,G,tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+G+"x"+tt+")."),j}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),P;return P}function x(P){return P.generateMipmaps}function m(P){n.generateMipmap(P)}function w(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(P,T,Q,gt,Mt=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let G=T;if(T===n.RED&&(Q===n.FLOAT&&(G=n.R32F),Q===n.HALF_FLOAT&&(G=n.R16F),Q===n.UNSIGNED_BYTE&&(G=n.R8)),T===n.RED_INTEGER&&(Q===n.UNSIGNED_BYTE&&(G=n.R8UI),Q===n.UNSIGNED_SHORT&&(G=n.R16UI),Q===n.UNSIGNED_INT&&(G=n.R32UI),Q===n.BYTE&&(G=n.R8I),Q===n.SHORT&&(G=n.R16I),Q===n.INT&&(G=n.R32I)),T===n.RG&&(Q===n.FLOAT&&(G=n.RG32F),Q===n.HALF_FLOAT&&(G=n.RG16F),Q===n.UNSIGNED_BYTE&&(G=n.RG8)),T===n.RG_INTEGER&&(Q===n.UNSIGNED_BYTE&&(G=n.RG8UI),Q===n.UNSIGNED_SHORT&&(G=n.RG16UI),Q===n.UNSIGNED_INT&&(G=n.RG32UI),Q===n.BYTE&&(G=n.RG8I),Q===n.SHORT&&(G=n.RG16I),Q===n.INT&&(G=n.RG32I)),T===n.RGB_INTEGER&&(Q===n.UNSIGNED_BYTE&&(G=n.RGB8UI),Q===n.UNSIGNED_SHORT&&(G=n.RGB16UI),Q===n.UNSIGNED_INT&&(G=n.RGB32UI),Q===n.BYTE&&(G=n.RGB8I),Q===n.SHORT&&(G=n.RGB16I),Q===n.INT&&(G=n.RGB32I)),T===n.RGBA_INTEGER&&(Q===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),Q===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),Q===n.UNSIGNED_INT&&(G=n.RGBA32UI),Q===n.BYTE&&(G=n.RGBA8I),Q===n.SHORT&&(G=n.RGBA16I),Q===n.INT&&(G=n.RGBA32I)),T===n.RGB&&Q===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),T===n.RGBA){let tt=Mt?Za:Te.getTransfer(gt);Q===n.FLOAT&&(G=n.RGBA32F),Q===n.HALF_FLOAT&&(G=n.RGBA16F),Q===n.UNSIGNED_BYTE&&(G=tt===Ue?n.SRGB8_ALPHA8:n.RGBA8),Q===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),Q===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function b(P,T){let Q;return P?T===null||T===Cs||T===Mr?Q=n.DEPTH24_STENCIL8:T===Li?Q=n.DEPTH32F_STENCIL8:T===co&&(Q=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Cs||T===Mr?Q=n.DEPTH_COMPONENT24:T===Li?Q=n.DEPTH_COMPONENT32F:T===co&&(Q=n.DEPTH_COMPONENT16),Q}function V(P,T){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==rn&&P.minFilter!==gi?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function L(P){let T=P.target;T.removeEventListener("dispose",L),z(T),T.isVideoTexture&&h.delete(T)}function D(P){let T=P.target;T.removeEventListener("dispose",D),S(T)}function z(P){let T=i.get(P);if(T.__webglInit===void 0)return;let Q=P.source,gt=u.get(Q);if(gt){let Mt=gt[T.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&A(P),Object.keys(gt).length===0&&u.delete(Q)}i.remove(P)}function A(P){let T=i.get(P);n.deleteTexture(T.__webglTexture);let Q=P.source,gt=u.get(Q);delete gt[T.__cacheKey],o.memory.textures--}function S(P){let T=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(T.__webglFramebuffer[gt]))for(let Mt=0;Mt<T.__webglFramebuffer[gt].length;Mt++)n.deleteFramebuffer(T.__webglFramebuffer[gt][Mt]);else n.deleteFramebuffer(T.__webglFramebuffer[gt]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[gt])}else{if(Array.isArray(T.__webglFramebuffer))for(let gt=0;gt<T.__webglFramebuffer.length;gt++)n.deleteFramebuffer(T.__webglFramebuffer[gt]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let gt=0;gt<T.__webglColorRenderbuffer.length;gt++)T.__webglColorRenderbuffer[gt]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[gt]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let Q=P.textures;for(let gt=0,Mt=Q.length;gt<Mt;gt++){let G=i.get(Q[gt]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(Q[gt])}i.remove(P)}let B=0;function Z(){B=0}function N(){let P=B;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),B+=1,P}function W(P){let T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function q(P,T){let Q=i.get(P);if(P.isVideoTexture&&Lt(P),P.isRenderTargetTexture===!1&&P.version>0&&Q.__version!==P.version){let gt=P.image;if(gt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(Q,P,T);return}}e.bindTexture(n.TEXTURE_2D,Q.__webglTexture,n.TEXTURE0+T)}function Y(P,T){let Q=i.get(P);if(P.version>0&&Q.__version!==P.version){pt(Q,P,T);return}e.bindTexture(n.TEXTURE_2D_ARRAY,Q.__webglTexture,n.TEXTURE0+T)}function ft(P,T){let Q=i.get(P);if(P.version>0&&Q.__version!==P.version){pt(Q,P,T);return}e.bindTexture(n.TEXTURE_3D,Q.__webglTexture,n.TEXTURE0+T)}function $(P,T){let Q=i.get(P);if(P.version>0&&Q.__version!==P.version){At(Q,P,T);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture,n.TEXTURE0+T)}let _t={[ao]:n.REPEAT,[As]:n.CLAMP_TO_EDGE,[hl]:n.MIRRORED_REPEAT},Tt={[rn]:n.NEAREST,[Fp]:n.NEAREST_MIPMAP_NEAREST,[ko]:n.NEAREST_MIPMAP_LINEAR,[gi]:n.LINEAR,[yc]:n.LINEAR_MIPMAP_NEAREST,[Rs]:n.LINEAR_MIPMAP_LINEAR},dt={[kp]:n.NEVER,[qp]:n.ALWAYS,[Vp]:n.LESS,[$f]:n.LEQUAL,[Gp]:n.EQUAL,[Yp]:n.GEQUAL,[Wp]:n.GREATER,[Xp]:n.NOTEQUAL};function Xt(P,T){if(T.type===Li&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===gi||T.magFilter===yc||T.magFilter===ko||T.magFilter===Rs||T.minFilter===gi||T.minFilter===yc||T.minFilter===ko||T.minFilter===Rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,_t[T.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,_t[T.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,_t[T.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Tt[T.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Tt[T.minFilter]),T.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,dt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===rn||T.minFilter!==ko&&T.minFilter!==Rs||T.type===Li&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let Q=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function ye(P,T){let Q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",L));let gt=T.source,Mt=u.get(gt);Mt===void 0&&(Mt={},u.set(gt,Mt));let G=W(T);if(G!==P.__cacheKey){Mt[G]===void 0&&(Mt[G]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),Mt[G].usedTimes++;let tt=Mt[P.__cacheKey];tt!==void 0&&(Mt[P.__cacheKey].usedTimes--,tt.usedTimes===0&&A(T)),P.__cacheKey=G,P.__webglTexture=Mt[G].texture}return Q}function pt(P,T,Q){let gt=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(gt=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(gt=n.TEXTURE_3D);let Mt=ye(P,T),G=T.source;e.bindTexture(gt,P.__webglTexture,n.TEXTURE0+Q);let tt=i.get(G);if(G.version!==tt.__version||Mt===!0){e.activeTexture(n.TEXTURE0+Q);let j=Te.getPrimaries(Te.workingColorSpace),ht=T.colorSpace===Qi?null:Te.getPrimaries(T.colorSpace),Nt=T.colorSpace===Qi||j===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let it=M(T.image,!1,s.maxTextureSize);it=oe(T,it);let nt=r.convert(T.format,T.colorSpace),Ot=r.convert(T.type),bt=E(T.internalFormat,nt,Ot,T.colorSpace,T.isVideoTexture);Xt(gt,T);let lt,se=T.mipmaps,le=T.isVideoTexture!==!0,jt=tt.__version===void 0||Mt===!0,X=G.dataReady,Ut=V(T,it);if(T.isDepthTexture)bt=b(T.format===vr,T.type),jt&&(le?e.texStorage2D(n.TEXTURE_2D,1,bt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,bt,it.width,it.height,0,nt,Ot,null));else if(T.isDataTexture)if(se.length>0){le&&jt&&e.texStorage2D(n.TEXTURE_2D,Ut,bt,se[0].width,se[0].height);for(let ct=0,yt=se.length;ct<yt;ct++)lt=se[ct],le?X&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,lt.width,lt.height,nt,Ot,lt.data):e.texImage2D(n.TEXTURE_2D,ct,bt,lt.width,lt.height,0,nt,Ot,lt.data);T.generateMipmaps=!1}else le?(jt&&e.texStorage2D(n.TEXTURE_2D,Ut,bt,it.width,it.height),X&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,it.width,it.height,nt,Ot,it.data)):e.texImage2D(n.TEXTURE_2D,0,bt,it.width,it.height,0,nt,Ot,it.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){le&&jt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ut,bt,se[0].width,se[0].height,it.depth);for(let ct=0,yt=se.length;ct<yt;ct++)if(lt=se[ct],T.format!==ai)if(nt!==null)if(le){if(X)if(T.layerUpdates.size>0){let qt=Ef(lt.width,lt.height,T.format,T.type);for(let Wt of T.layerUpdates){let pe=lt.data.subarray(Wt*qt/lt.data.BYTES_PER_ELEMENT,(Wt+1)*qt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,Wt,lt.width,lt.height,1,nt,pe)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,lt.width,lt.height,it.depth,nt,lt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ct,bt,lt.width,lt.height,it.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?X&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,lt.width,lt.height,it.depth,nt,Ot,lt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ct,bt,lt.width,lt.height,it.depth,0,nt,Ot,lt.data)}else{le&&jt&&e.texStorage2D(n.TEXTURE_2D,Ut,bt,se[0].width,se[0].height);for(let ct=0,yt=se.length;ct<yt;ct++)lt=se[ct],T.format!==ai?nt!==null?le?X&&e.compressedTexSubImage2D(n.TEXTURE_2D,ct,0,0,lt.width,lt.height,nt,lt.data):e.compressedTexImage2D(n.TEXTURE_2D,ct,bt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?X&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,lt.width,lt.height,nt,Ot,lt.data):e.texImage2D(n.TEXTURE_2D,ct,bt,lt.width,lt.height,0,nt,Ot,lt.data)}else if(T.isDataArrayTexture)if(le){if(jt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ut,bt,it.width,it.height,it.depth),X)if(T.layerUpdates.size>0){let ct=Ef(it.width,it.height,T.format,T.type);for(let yt of T.layerUpdates){let qt=it.data.subarray(yt*ct/it.data.BYTES_PER_ELEMENT,(yt+1)*ct/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,yt,it.width,it.height,1,nt,Ot,qt)}T.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,nt,Ot,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,bt,it.width,it.height,it.depth,0,nt,Ot,it.data);else if(T.isData3DTexture)le?(jt&&e.texStorage3D(n.TEXTURE_3D,Ut,bt,it.width,it.height,it.depth),X&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,nt,Ot,it.data)):e.texImage3D(n.TEXTURE_3D,0,bt,it.width,it.height,it.depth,0,nt,Ot,it.data);else if(T.isFramebufferTexture){if(jt)if(le)e.texStorage2D(n.TEXTURE_2D,Ut,bt,it.width,it.height);else{let ct=it.width,yt=it.height;for(let qt=0;qt<Ut;qt++)e.texImage2D(n.TEXTURE_2D,qt,bt,ct,yt,0,nt,Ot,null),ct>>=1,yt>>=1}}else if(se.length>0){if(le&&jt){let ct=Bt(se[0]);e.texStorage2D(n.TEXTURE_2D,Ut,bt,ct.width,ct.height)}for(let ct=0,yt=se.length;ct<yt;ct++)lt=se[ct],le?X&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,nt,Ot,lt):e.texImage2D(n.TEXTURE_2D,ct,bt,nt,Ot,lt);T.generateMipmaps=!1}else if(le){if(jt){let ct=Bt(it);e.texStorage2D(n.TEXTURE_2D,Ut,bt,ct.width,ct.height)}X&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,nt,Ot,it)}else e.texImage2D(n.TEXTURE_2D,0,bt,nt,Ot,it);x(T)&&m(gt),tt.__version=G.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function At(P,T,Q){if(T.image.length!==6)return;let gt=ye(P,T),Mt=T.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+Q);let G=i.get(Mt);if(Mt.version!==G.__version||gt===!0){e.activeTexture(n.TEXTURE0+Q);let tt=Te.getPrimaries(Te.workingColorSpace),j=T.colorSpace===Qi?null:Te.getPrimaries(T.colorSpace),ht=T.colorSpace===Qi||tt===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Nt=T.isCompressedTexture||T.image[0].isCompressedTexture,it=T.image[0]&&T.image[0].isDataTexture,nt=[];for(let yt=0;yt<6;yt++)!Nt&&!it?nt[yt]=M(T.image[yt],!0,s.maxCubemapSize):nt[yt]=it?T.image[yt].image:T.image[yt],nt[yt]=oe(T,nt[yt]);let Ot=nt[0],bt=r.convert(T.format,T.colorSpace),lt=r.convert(T.type),se=E(T.internalFormat,bt,lt,T.colorSpace),le=T.isVideoTexture!==!0,jt=G.__version===void 0||gt===!0,X=Mt.dataReady,Ut=V(T,Ot);Xt(n.TEXTURE_CUBE_MAP,T);let ct;if(Nt){le&&jt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ut,se,Ot.width,Ot.height);for(let yt=0;yt<6;yt++){ct=nt[yt].mipmaps;for(let qt=0;qt<ct.length;qt++){let Wt=ct[qt];T.format!==ai?bt!==null?le?X&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt,0,0,Wt.width,Wt.height,bt,Wt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt,se,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):le?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt,0,0,Wt.width,Wt.height,bt,lt,Wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt,se,Wt.width,Wt.height,0,bt,lt,Wt.data)}}}else{if(ct=T.mipmaps,le&&jt){ct.length>0&&Ut++;let yt=Bt(nt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ut,se,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(it){le?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,nt[yt].width,nt[yt].height,bt,lt,nt[yt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,se,nt[yt].width,nt[yt].height,0,bt,lt,nt[yt].data);for(let qt=0;qt<ct.length;qt++){let pe=ct[qt].image[yt].image;le?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt+1,0,0,pe.width,pe.height,bt,lt,pe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt+1,se,pe.width,pe.height,0,bt,lt,pe.data)}}else{le?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,bt,lt,nt[yt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,se,bt,lt,nt[yt]);for(let qt=0;qt<ct.length;qt++){let Wt=ct[qt];le?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt+1,0,0,bt,lt,Wt.image[yt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt+1,se,bt,lt,Wt.image[yt])}}}x(T)&&m(n.TEXTURE_CUBE_MAP),G.__version=Mt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Yt(P,T,Q,gt,Mt,G){let tt=r.convert(Q.format,Q.colorSpace),j=r.convert(Q.type),ht=E(Q.internalFormat,tt,j,Q.colorSpace),Nt=i.get(T),it=i.get(Q);if(it.__renderTarget=T,!Nt.__hasExternalTextures){let nt=Math.max(1,T.width>>G),Ot=Math.max(1,T.height>>G);Mt===n.TEXTURE_3D||Mt===n.TEXTURE_2D_ARRAY?e.texImage3D(Mt,G,ht,nt,Ot,T.depth,0,tt,j,null):e.texImage2D(Mt,G,ht,nt,Ot,0,tt,j,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),Ht(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,gt,Mt,it.__webglTexture,0,wt(T)):(Mt===n.TEXTURE_2D||Mt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,gt,Mt,it.__webglTexture,G),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ct(P,T,Q){if(n.bindRenderbuffer(n.RENDERBUFFER,P),T.depthBuffer){let gt=T.depthTexture,Mt=gt&&gt.isDepthTexture?gt.type:null,G=b(T.stencilBuffer,Mt),tt=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=wt(T);Ht(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,j,G,T.width,T.height):Q?n.renderbufferStorageMultisample(n.RENDERBUFFER,j,G,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,G,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,P)}else{let gt=T.textures;for(let Mt=0;Mt<gt.length;Mt++){let G=gt[Mt],tt=r.convert(G.format,G.colorSpace),j=r.convert(G.type),ht=E(G.internalFormat,tt,j,G.colorSpace),Nt=wt(T);Q&&Ht(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt,ht,T.width,T.height):Ht(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt,ht,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ht,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function zt(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let gt=i.get(T.depthTexture);gt.__renderTarget=T,(!gt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),q(T.depthTexture,0);let Mt=gt.__webglTexture,G=wt(T);if(T.depthTexture.format===pr)Ht(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Mt,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Mt,0);else if(T.depthTexture.format===vr)Ht(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Mt,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function ie(P){let T=i.get(P),Q=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){let gt=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),gt){let Mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,gt.removeEventListener("dispose",Mt)};gt.addEventListener("dispose",Mt),T.__depthDisposeCallback=Mt}T.__boundDepthTexture=gt}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");zt(T.__webglFramebuffer,P)}else if(Q){T.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[gt]),T.__webglDepthbuffer[gt]===void 0)T.__webglDepthbuffer[gt]=n.createRenderbuffer(),Ct(T.__webglDepthbuffer[gt],P,!1);else{let Mt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=T.__webglDepthbuffer[gt];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,Mt,n.RENDERBUFFER,G)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),Ct(T.__webglDepthbuffer,P,!1);else{let gt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,gt,n.RENDERBUFFER,Mt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function re(P,T,Q){let gt=i.get(P);T!==void 0&&Yt(gt.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Q!==void 0&&ie(P)}function ue(P){let T=P.texture,Q=i.get(P),gt=i.get(T);P.addEventListener("dispose",D);let Mt=P.textures,G=P.isWebGLCubeRenderTarget===!0,tt=Mt.length>1;if(tt||(gt.__webglTexture===void 0&&(gt.__webglTexture=n.createTexture()),gt.__version=T.version,o.memory.textures++),G){Q.__webglFramebuffer=[];for(let j=0;j<6;j++)if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer[j]=[];for(let ht=0;ht<T.mipmaps.length;ht++)Q.__webglFramebuffer[j][ht]=n.createFramebuffer()}else Q.__webglFramebuffer[j]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer=[];for(let j=0;j<T.mipmaps.length;j++)Q.__webglFramebuffer[j]=n.createFramebuffer()}else Q.__webglFramebuffer=n.createFramebuffer();if(tt)for(let j=0,ht=Mt.length;j<ht;j++){let Nt=i.get(Mt[j]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&Ht(P)===!1){Q.__webglMultisampledFramebuffer=n.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let j=0;j<Mt.length;j++){let ht=Mt[j];Q.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Q.__webglColorRenderbuffer[j]);let Nt=r.convert(ht.format,ht.colorSpace),it=r.convert(ht.type),nt=E(ht.internalFormat,Nt,it,ht.colorSpace,P.isXRRenderTarget===!0),Ot=wt(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot,nt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,Q.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(Q.__webglDepthRenderbuffer=n.createRenderbuffer(),Ct(Q.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){e.bindTexture(n.TEXTURE_CUBE_MAP,gt.__webglTexture),Xt(n.TEXTURE_CUBE_MAP,T);for(let j=0;j<6;j++)if(T.mipmaps&&T.mipmaps.length>0)for(let ht=0;ht<T.mipmaps.length;ht++)Yt(Q.__webglFramebuffer[j][ht],P,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht);else Yt(Q.__webglFramebuffer[j],P,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);x(T)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(tt){for(let j=0,ht=Mt.length;j<ht;j++){let Nt=Mt[j],it=i.get(Nt);e.bindTexture(n.TEXTURE_2D,it.__webglTexture),Xt(n.TEXTURE_2D,Nt),Yt(Q.__webglFramebuffer,P,Nt,n.COLOR_ATTACHMENT0+j,n.TEXTURE_2D,0),x(Nt)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let j=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(j=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(j,gt.__webglTexture),Xt(j,T),T.mipmaps&&T.mipmaps.length>0)for(let ht=0;ht<T.mipmaps.length;ht++)Yt(Q.__webglFramebuffer[ht],P,T,n.COLOR_ATTACHMENT0,j,ht);else Yt(Q.__webglFramebuffer,P,T,n.COLOR_ATTACHMENT0,j,0);x(T)&&m(j),e.unbindTexture()}P.depthBuffer&&ie(P)}function xt(P){let T=P.textures;for(let Q=0,gt=T.length;Q<gt;Q++){let Mt=T[Q];if(x(Mt)){let G=w(P),tt=i.get(Mt).__webglTexture;e.bindTexture(G,tt),m(G),e.unbindTexture()}}}let vt=[],F=[];function Zt(P){if(P.samples>0){if(Ht(P)===!1){let T=P.textures,Q=P.width,gt=P.height,Mt=n.COLOR_BUFFER_BIT,G=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=i.get(P),j=T.length>1;if(j)for(let ht=0;ht<T.length;ht++)e.bindFramebuffer(n.FRAMEBUFFER,tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,tt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,tt.__webglFramebuffer);for(let ht=0;ht<T.length;ht++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Mt|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Mt|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,tt.__webglColorRenderbuffer[ht]);let Nt=i.get(T[ht]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Nt,0)}n.blitFramebuffer(0,0,Q,gt,0,0,Q,gt,Mt,n.NEAREST),c===!0&&(vt.length=0,F.length=0,vt.push(n.COLOR_ATTACHMENT0+ht),P.depthBuffer&&P.resolveDepthBuffer===!1&&(vt.push(G),F.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,F)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,vt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let ht=0;ht<T.length;ht++){e.bindFramebuffer(n.FRAMEBUFFER,tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,tt.__webglColorRenderbuffer[ht]);let Nt=i.get(T[ht]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,Nt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,tt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let T=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function wt(P){return Math.min(s.maxSamples,P.samples)}function Ht(P){let T=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Lt(P){let T=o.render.frame;h.get(P)!==T&&(h.set(P,T),P.update())}function oe(P,T){let Q=P.colorSpace,gt=P.format,Mt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Q!==Tr&&Q!==Qi&&(Te.getTransfer(Q)===Ue?(gt!==ai||Mt!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),T}function Bt(P){return typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame!="undefined"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=Z,this.setTexture2D=q,this.setTexture2DArray=Y,this.setTexture3D=ft,this.setTextureCube=$,this.rebindTextures=re,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=Yt,this.useMultisampledRTT=Ht}function ty(n,t){function e(i,s=Qi){let r,o=Te.getTransfer(s);if(i===Ni)return n.UNSIGNED_BYTE;if(i===Ah)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Rh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Vf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Hf)return n.BYTE;if(i===kf)return n.SHORT;if(i===co)return n.UNSIGNED_SHORT;if(i===Th)return n.INT;if(i===Cs)return n.UNSIGNED_INT;if(i===Li)return n.FLOAT;if(i===Lo)return n.HALF_FLOAT;if(i===Gf)return n.ALPHA;if(i===Wf)return n.RGB;if(i===ai)return n.RGBA;if(i===Xf)return n.LUMINANCE;if(i===Yf)return n.LUMINANCE_ALPHA;if(i===pr)return n.DEPTH_COMPONENT;if(i===vr)return n.DEPTH_STENCIL;if(i===qf)return n.RED;if(i===Ch)return n.RED_INTEGER;if(i===Zf)return n.RG;if(i===Ph)return n.RG_INTEGER;if(i===Ih)return n.RGBA_INTEGER;if(i===xa||i===_a||i===ya||i===Ma)if(o===Ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===xa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===xa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ul||i===fl||i===dl||i===pl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ul)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ml||i===gl||i===xl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ml||i===gl)return o===Ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===xl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===_l||i===yl||i===Ml||i===vl||i===El||i===bl||i===Sl||i===wl||i===Tl||i===Al||i===Rl||i===Cl||i===Pl||i===Il)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===_l)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ml)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===El)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Tl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Al)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Il)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===va||i===Ll||i===Dl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===va)return o===Ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ll)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Dl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kf||i===Ul||i===Nl||i===Ol)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===va)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ul)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ol)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Mr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var jl=class extends xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Kt=class extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}},ey={type:"move"},io=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let M of t.hand.values()){let x=e.getJointPose(M,i),m=this._getHandJoint(l,M);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&u>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ey)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Kt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},ny=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iy=`
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

}`,Ql=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new Cn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Jn({vertexShader:ny,fragmentShader:iy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pt(new ss(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},th=class extends Oi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,g=null,M=new Ql,x=e.getContextAttributes(),m=null,w=null,E=[],b=[],V=new St,L=null,D=new xn;D.viewport=new Ne;let z=new xn;z.viewport=new Ne;let A=[D,z],S=new jl,B=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(pt){let At=E[pt];return At===void 0&&(At=new io,E[pt]=At),At.getTargetRaySpace()},this.getControllerGrip=function(pt){let At=E[pt];return At===void 0&&(At=new io,E[pt]=At),At.getGripSpace()},this.getHand=function(pt){let At=E[pt];return At===void 0&&(At=new io,E[pt]=At),At.getHandSpace()};function N(pt){let At=b.indexOf(pt.inputSource);if(At===-1)return;let Yt=E[At];Yt!==void 0&&(Yt.update(pt.inputSource,pt.frame,l||o),Yt.dispatchEvent({type:pt.type,data:pt.inputSource}))}function W(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",q);for(let pt=0;pt<E.length;pt++){let At=b[pt];At!==null&&(b[pt]=null,E[pt].disconnect(At))}B=null,Z=null,M.reset(),t.setRenderTarget(m),d=null,u=null,f=null,s=null,w=null,ye.stop(),i.isPresenting=!1,t.setPixelRatio(L),t.setSize(V.width,V.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(pt){r=pt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(pt){a=pt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(pt){l=pt},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(pt){if(s=pt,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",W),s.addEventListener("inputsourceschange",q),x.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(V),s.renderState.layers===void 0){let At={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,At),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new Fi(d.framebufferWidth,d.framebufferHeight,{format:ai,type:Ni,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let At=null,Yt=null,Ct=null;x.depth&&(Ct=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,At=x.stencil?vr:pr,Yt=x.stencil?Mr:Cs);let zt={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};f=new XRWebGLBinding(s,e),u=f.createProjectionLayer(zt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),w=new Fi(u.textureWidth,u.textureHeight,{format:ai,type:Ni,depthTexture:new La(u.textureWidth,u.textureHeight,Yt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ye.setContext(s),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function q(pt){for(let At=0;At<pt.removed.length;At++){let Yt=pt.removed[At],Ct=b.indexOf(Yt);Ct>=0&&(b[Ct]=null,E[Ct].disconnect(Yt))}for(let At=0;At<pt.added.length;At++){let Yt=pt.added[At],Ct=b.indexOf(Yt);if(Ct===-1){for(let ie=0;ie<E.length;ie++)if(ie>=b.length){b.push(Yt),Ct=ie;break}else if(b[ie]===null){b[ie]=Yt,Ct=ie;break}if(Ct===-1)break}let zt=E[Ct];zt&&zt.connect(Yt)}}let Y=new O,ft=new O;function $(pt,At,Yt){Y.setFromMatrixPosition(At.matrixWorld),ft.setFromMatrixPosition(Yt.matrixWorld);let Ct=Y.distanceTo(ft),zt=At.projectionMatrix.elements,ie=Yt.projectionMatrix.elements,re=zt[14]/(zt[10]-1),ue=zt[14]/(zt[10]+1),xt=(zt[9]+1)/zt[5],vt=(zt[9]-1)/zt[5],F=(zt[8]-1)/zt[0],Zt=(ie[8]+1)/ie[0],wt=re*F,Ht=re*Zt,Lt=Ct/(-F+Zt),oe=Lt*-F;if(At.matrixWorld.decompose(pt.position,pt.quaternion,pt.scale),pt.translateX(oe),pt.translateZ(Lt),pt.matrixWorld.compose(pt.position,pt.quaternion,pt.scale),pt.matrixWorldInverse.copy(pt.matrixWorld).invert(),zt[10]===-1)pt.projectionMatrix.copy(At.projectionMatrix),pt.projectionMatrixInverse.copy(At.projectionMatrixInverse);else{let Bt=re+Lt,P=ue+Lt,T=wt-oe,Q=Ht+(Ct-oe),gt=xt*ue/P*Bt,Mt=vt*ue/P*Bt;pt.projectionMatrix.makePerspective(T,Q,gt,Mt,Bt,P),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert()}}function _t(pt,At){At===null?pt.matrixWorld.copy(pt.matrix):pt.matrixWorld.multiplyMatrices(At.matrixWorld,pt.matrix),pt.matrixWorldInverse.copy(pt.matrixWorld).invert()}this.updateCamera=function(pt){if(s===null)return;let At=pt.near,Yt=pt.far;M.texture!==null&&(M.depthNear>0&&(At=M.depthNear),M.depthFar>0&&(Yt=M.depthFar)),S.near=z.near=D.near=At,S.far=z.far=D.far=Yt,(B!==S.near||Z!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),B=S.near,Z=S.far),D.layers.mask=pt.layers.mask|2,z.layers.mask=pt.layers.mask|4,S.layers.mask=D.layers.mask|z.layers.mask;let Ct=pt.parent,zt=S.cameras;_t(S,Ct);for(let ie=0;ie<zt.length;ie++)_t(zt[ie],Ct);zt.length===2?$(S,D,z):S.projectionMatrix.copy(D.projectionMatrix),Tt(pt,S,Ct)};function Tt(pt,At,Yt){Yt===null?pt.matrix.copy(At.matrixWorld):(pt.matrix.copy(Yt.matrixWorld),pt.matrix.invert(),pt.matrix.multiply(At.matrixWorld)),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.updateMatrixWorld(!0),pt.projectionMatrix.copy(At.projectionMatrix),pt.projectionMatrixInverse.copy(At.projectionMatrixInverse),pt.isPerspectiveCamera&&(pt.fov=lo*2*Math.atan(1/pt.projectionMatrix.elements[5]),pt.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(pt){c=pt,u!==null&&(u.fixedFoveation=pt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=pt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(S)};let dt=null;function Xt(pt,At){if(h=At.getViewerPose(l||o),g=At,h!==null){let Yt=h.views;d!==null&&(t.setRenderTargetFramebuffer(w,d.framebuffer),t.setRenderTarget(w));let Ct=!1;Yt.length!==S.cameras.length&&(S.cameras.length=0,Ct=!0);for(let ie=0;ie<Yt.length;ie++){let re=Yt[ie],ue=null;if(d!==null)ue=d.getViewport(re);else{let vt=f.getViewSubImage(u,re);ue=vt.viewport,ie===0&&(t.setRenderTargetTextures(w,vt.colorTexture,u.ignoreDepthValues?void 0:vt.depthStencilTexture),t.setRenderTarget(w))}let xt=A[ie];xt===void 0&&(xt=new xn,xt.layers.enable(ie),xt.viewport=new Ne,A[ie]=xt),xt.matrix.fromArray(re.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(re.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(ue.x,ue.y,ue.width,ue.height),ie===0&&(S.matrix.copy(xt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Ct===!0&&S.cameras.push(xt)}let zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")){let ie=f.getDepthInformation(Yt[0]);ie&&ie.isValid&&ie.texture&&M.init(t,ie,s.renderState)}}for(let Yt=0;Yt<E.length;Yt++){let Ct=b[Yt],zt=E[Yt];Ct!==null&&zt!==void 0&&zt.update(Ct,At,l||o)}dt&&dt(pt,At),At.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:At}),g=null}let ye=new nd;ye.setAnimationLoop(Xt),this.setAnimationLoop=function(pt){dt=pt},this.dispose=function(){}}},bs=new _i,sy=new Be;function ry(n,t){function e(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function i(x,m){m.color.getRGB(x.fogColor.value,ed(n)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function s(x,m,w,E,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(x,m):m.isMeshToonMaterial?(r(x,m),f(x,m)):m.isMeshPhongMaterial?(r(x,m),h(x,m)):m.isMeshStandardMaterial?(r(x,m),u(x,m),m.isMeshPhysicalMaterial&&d(x,m,b)):m.isMeshMatcapMaterial?(r(x,m),g(x,m)):m.isMeshDepthMaterial?r(x,m):m.isMeshDistanceMaterial?(r(x,m),M(x,m)):m.isMeshNormalMaterial?r(x,m):m.isLineBasicMaterial?(o(x,m),m.isLineDashedMaterial&&a(x,m)):m.isPointsMaterial?c(x,m,w,E):m.isSpriteMaterial?l(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,e(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===Rn&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,e(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===Rn&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,e(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,e(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);let w=t.get(m),E=w.envMap,b=w.envMapRotation;E&&(x.envMap.value=E,bs.copy(b),bs.x*=-1,bs.y*=-1,bs.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),x.envMapRotation.value.setFromMatrix4(sy.makeRotationFromEuler(bs)),x.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,x.aoMapTransform))}function o(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform))}function a(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function c(x,m,w,E){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*w,x.scale.value=E*.5,m.map&&(x.map.value=m.map,e(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function l(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function h(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function f(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function u(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function d(x,m,w){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Rn&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=w.texture,x.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,m){m.matcap&&(x.matcap.value=m.matcap)}function M(x,m){let w=t.get(m).light;x.referencePosition.value.setFromMatrixPosition(w.matrixWorld),x.nearDistance.value=w.shadow.camera.near,x.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function oy(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,E){let b=E.program;i.uniformBlockBinding(w,b)}function l(w,E){let b=s[w.id];b===void 0&&(g(w),b=h(w),s[w.id]=b,w.addEventListener("dispose",x));let V=E.program;i.updateUBOMapping(w,V);let L=t.render.frame;r[w.id]!==L&&(u(w),r[w.id]=L)}function h(w){let E=f();w.__bindingPointIndex=E;let b=n.createBuffer(),V=w.__size,L=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,V,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,b),b}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){let E=s[w.id],b=w.uniforms,V=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let L=0,D=b.length;L<D;L++){let z=Array.isArray(b[L])?b[L]:[b[L]];for(let A=0,S=z.length;A<S;A++){let B=z[A];if(d(B,L,A,V)===!0){let Z=B.__offset,N=Array.isArray(B.value)?B.value:[B.value],W=0;for(let q=0;q<N.length;q++){let Y=N[q],ft=M(Y);typeof Y=="number"||typeof Y=="boolean"?(B.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,Z+W,B.__data)):Y.isMatrix3?(B.__data[0]=Y.elements[0],B.__data[1]=Y.elements[1],B.__data[2]=Y.elements[2],B.__data[3]=0,B.__data[4]=Y.elements[3],B.__data[5]=Y.elements[4],B.__data[6]=Y.elements[5],B.__data[7]=0,B.__data[8]=Y.elements[6],B.__data[9]=Y.elements[7],B.__data[10]=Y.elements[8],B.__data[11]=0):(Y.toArray(B.__data,W),W+=ft.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Z,B.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(w,E,b,V){let L=w.value,D=E+"_"+b;if(V[D]===void 0)return typeof L=="number"||typeof L=="boolean"?V[D]=L:V[D]=L.clone(),!0;{let z=V[D];if(typeof L=="number"||typeof L=="boolean"){if(z!==L)return V[D]=L,!0}else if(z.equals(L)===!1)return z.copy(L),!0}return!1}function g(w){let E=w.uniforms,b=0,V=16;for(let D=0,z=E.length;D<z;D++){let A=Array.isArray(E[D])?E[D]:[E[D]];for(let S=0,B=A.length;S<B;S++){let Z=A[S],N=Array.isArray(Z.value)?Z.value:[Z.value];for(let W=0,q=N.length;W<q;W++){let Y=N[W],ft=M(Y),$=b%V,_t=$%ft.boundary,Tt=$+_t;b+=_t,Tt!==0&&V-Tt<ft.storage&&(b+=V-Tt),Z.__data=new Float32Array(ft.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=b,b+=ft.storage}}}let L=b%V;return L>0&&(b+=V-L),w.__size=b,w.__cache={},this}function M(w){let E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function x(w){let E=w.target;E.removeEventListener("dispose",x);let b=o.indexOf(E.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(let w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}var po=class{constructor(t={}){let{canvas:e=h0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),M=new Int32Array(4),x=null,m=null,w=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=De,this.toneMapping=ns,this.toneMappingExposure=1;let b=this,V=!1,L=0,D=0,z=null,A=-1,S=null,B=new Ne,Z=new Ne,N=null,W=new ce(0),q=0,Y=e.width,ft=e.height,$=1,_t=null,Tt=null,dt=new Ne(0,0,Y,ft),Xt=new Ne(0,0,Y,ft),ye=!1,pt=new fo,At=!1,Yt=!1,Ct=new Be,zt=new Be,ie=new O,re=new Ne,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xt=!1;function vt(){return z===null?$:1}let F=i;function Zt(R,K){return e.getContext(R,K)}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sh}`),e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",qt,!1),e.addEventListener("webglcontextcreationerror",Wt,!1),F===null){let K="webgl2";if(F=Zt(K,R),F===null)throw Zt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let wt,Ht,Lt,oe,Bt,P,T,Q,gt,Mt,G,tt,j,ht,Nt,it,nt,Ot,bt,lt,se,le,jt,X;function Ut(){wt=new Ex(F),wt.init(),le=new ty(F,wt),Ht=new gx(F,wt,t,le),Lt=new $_(F,wt),Ht.reverseDepthBuffer&&u&&Lt.buffers.depth.setReversed(!0),oe=new wx(F),Bt=new z_,P=new Q_(F,wt,Lt,Bt,Ht,le,oe),T=new _x(b),Q=new vx(b),gt=new L0(F),jt=new px(F,gt),Mt=new bx(F,gt,oe,jt),G=new Ax(F,Mt,gt,oe),bt=new Tx(F,Ht,P),it=new xx(Bt),tt=new F_(b,T,Q,wt,Ht,jt,it),j=new ry(b,Bt),ht=new H_,Nt=new Y_(wt),Ot=new dx(b,T,Q,Lt,G,d,c),nt=new K_(b,G,Ht),X=new oy(F,oe,Ht,Lt),lt=new mx(F,wt,oe),se=new Sx(F,wt,oe),oe.programs=tt.programs,b.capabilities=Ht,b.extensions=wt,b.properties=Bt,b.renderLists=ht,b.shadowMap=nt,b.state=Lt,b.info=oe}Ut();let ct=new th(b,F);this.xr=ct,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let R=wt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=wt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(R){R!==void 0&&($=R,this.setSize(Y,ft,!1))},this.getSize=function(R){return R.set(Y,ft)},this.setSize=function(R,K,st=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=R,ft=K,e.width=Math.floor(R*$),e.height=Math.floor(K*$),st===!0&&(e.style.width=R+"px",e.style.height=K+"px"),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(Y*$,ft*$).floor()},this.setDrawingBufferSize=function(R,K,st){Y=R,ft=K,$=st,e.width=Math.floor(R*st),e.height=Math.floor(K*st),this.setViewport(0,0,R,K)},this.getCurrentViewport=function(R){return R.copy(B)},this.getViewport=function(R){return R.copy(dt)},this.setViewport=function(R,K,st,rt){R.isVector4?dt.set(R.x,R.y,R.z,R.w):dt.set(R,K,st,rt),Lt.viewport(B.copy(dt).multiplyScalar($).round())},this.getScissor=function(R){return R.copy(Xt)},this.setScissor=function(R,K,st,rt){R.isVector4?Xt.set(R.x,R.y,R.z,R.w):Xt.set(R,K,st,rt),Lt.scissor(Z.copy(Xt).multiplyScalar($).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(R){Lt.setScissorTest(ye=R)},this.setOpaqueSort=function(R){_t=R},this.setTransparentSort=function(R){Tt=R},this.getClearColor=function(R){return R.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(R=!0,K=!0,st=!0){let rt=0;if(R){let J=!1;if(z!==null){let Dt=z.texture.format;J=Dt===Ih||Dt===Ph||Dt===Ch}if(J){let Dt=z.texture.type,kt=Dt===Ni||Dt===Cs||Dt===co||Dt===Mr||Dt===Ah||Dt===Rh,Jt=Ot.getClearColor(),te=Ot.getClearAlpha(),me=Jt.r,_e=Jt.g,ee=Jt.b;kt?(g[0]=me,g[1]=_e,g[2]=ee,g[3]=te,F.clearBufferuiv(F.COLOR,0,g)):(M[0]=me,M[1]=_e,M[2]=ee,M[3]=te,F.clearBufferiv(F.COLOR,0,M))}else rt|=F.COLOR_BUFFER_BIT}K&&(rt|=F.DEPTH_BUFFER_BIT),st&&(rt|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",Wt,!1),ht.dispose(),Nt.dispose(),Bt.dispose(),T.dispose(),Q.dispose(),G.dispose(),jt.dispose(),X.dispose(),tt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",ds),ct.removeEventListener("sessionend",Lr),nn.stop()};function yt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function qt(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;let R=oe.autoReset,K=nt.enabled,st=nt.autoUpdate,rt=nt.needsUpdate,J=nt.type;Ut(),oe.autoReset=R,nt.enabled=K,nt.autoUpdate=st,nt.needsUpdate=rt,nt.type=J}function Wt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function pe(R){let K=R.target;K.removeEventListener("dispose",pe),Pe(K)}function Pe(R){on(R),Bt.remove(R)}function on(R){let K=Bt.get(R).programs;K!==void 0&&(K.forEach(function(st){tt.releaseProgram(st)}),R.isShaderMaterial&&tt.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,st,rt,J,Dt){K===null&&(K=ue);let kt=J.isMesh&&J.matrixWorld.determinant()<0,Jt=On(R,K,st,rt,J);Lt.setMaterial(rt,kt);let te=st.index,me=1;if(rt.wireframe===!0){if(te=Mt.getWireframeAttribute(st),te===void 0)return;me=2}let _e=st.drawRange,ee=st.attributes.position,we=_e.start*me,Ie=(_e.start+_e.count)*me;Dt!==null&&(we=Math.max(we,Dt.start*me),Ie=Math.min(Ie,(Dt.start+Dt.count)*me)),te!==null?(we=Math.max(we,0),Ie=Math.min(Ie,te.count)):ee!=null&&(we=Math.max(we,0),Ie=Math.min(Ie,ee.count));let Ae=Ie-we;if(Ae<0||Ae===1/0)return;jt.setup(J,rt,Jt,st,te);let sn,Se=lt;if(te!==null&&(sn=gt.get(te),Se=se,Se.setIndex(sn)),J.isMesh)rt.wireframe===!0?(Lt.setLineWidth(rt.wireframeLinewidth*vt()),Se.setMode(F.LINES)):Se.setMode(F.TRIANGLES);else if(J.isLine){let Qt=rt.linewidth;Qt===void 0&&(Qt=1),Lt.setLineWidth(Qt*vt()),J.isLineSegments?Se.setMode(F.LINES):J.isLineLoop?Se.setMode(F.LINE_LOOP):Se.setMode(F.LINE_STRIP)}else J.isPoints?Se.setMode(F.POINTS):J.isSprite&&Se.setMode(F.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Se.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(wt.get("WEBGL_multi_draw"))Se.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let Qt=J._multiDrawStarts,ti=J._multiDrawCounts,he=J._multiDrawCount,bn=te?gt.get(te).bytesPerElement:1,Wi=Bt.get(rt).currentProgram.getUniforms();for(let In=0;In<he;In++)Wi.setValue(F,"_gl_DrawID",In),Se.render(Qt[In]/bn,ti[In])}else if(J.isInstancedMesh)Se.renderInstances(we,Ae,J.count);else if(st.isInstancedBufferGeometry){let Qt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,ti=Math.min(st.instanceCount,Qt);Se.renderInstances(we,Ae,ti)}else Se.render(we,Ae)};function be(R,K,st){R.transparent===!0&&R.side===An&&R.forceSinglePass===!1?(R.side=Rn,R.needsUpdate=!0,di(R,K,st),R.side=is,R.needsUpdate=!0,di(R,K,st),R.side=An):di(R,K,st)}this.compile=function(R,K,st=null){st===null&&(st=R),m=Nt.get(st),m.init(K),E.push(m),st.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),R!==st&&R.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),m.setupLights();let rt=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Dt=J.material;if(Dt)if(Array.isArray(Dt))for(let kt=0;kt<Dt.length;kt++){let Jt=Dt[kt];be(Jt,st,J),rt.add(Jt)}else be(Dt,st,J),rt.add(Dt)}),E.pop(),m=null,rt},this.compileAsync=function(R,K,st=null){let rt=this.compile(R,K,st);return new Promise(J=>{function Dt(){if(rt.forEach(function(kt){Bt.get(kt).currentProgram.isReady()&&rt.delete(kt)}),rt.size===0){J(R);return}setTimeout(Dt,10)}wt.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let kn=null;function Qn(R){kn&&kn(R)}function ds(){nn.stop()}function Lr(){nn.start()}let nn=new nd;nn.setAnimationLoop(Qn),typeof self!="undefined"&&nn.setContext(self),this.setAnimationLoop=function(R){kn=R,ct.setAnimationLoop(R),R===null?nn.stop():nn.start()},ct.addEventListener("sessionstart",ds),ct.addEventListener("sessionend",Lr),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(K),K=ct.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,K,z),m=Nt.get(R,E.length),m.init(K),E.push(m),zt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),pt.setFromProjectionMatrix(zt),Yt=this.localClippingEnabled,At=it.init(this.clippingPlanes,Yt),x=ht.get(R,w.length),x.init(),w.push(x),ct.enabled===!0&&ct.isPresenting===!0){let Dt=b.xr.getDepthSensingMesh();Dt!==null&&Ws(Dt,K,-1/0,b.sortObjects)}Ws(R,K,0,b.sortObjects),x.finish(),b.sortObjects===!0&&x.sort(_t,Tt),xt=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,xt&&Ot.addToRenderList(x,R),this.info.render.frame++,At===!0&&it.beginShadows();let st=m.state.shadowsArray;nt.render(st,R,K),At===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let rt=x.opaque,J=x.transmissive;if(m.setupLights(),K.isArrayCamera){let Dt=K.cameras;if(J.length>0)for(let kt=0,Jt=Dt.length;kt<Jt;kt++){let te=Dt[kt];Ur(rt,J,R,te)}xt&&Ot.render(R);for(let kt=0,Jt=Dt.length;kt<Jt;kt++){let te=Dt[kt];Dr(x,R,te,te.viewport)}}else J.length>0&&Ur(rt,J,R,K),xt&&Ot.render(R),Dr(x,R,K);z!==null&&(P.updateMultisampleRenderTarget(z),P.updateRenderTargetMipmap(z)),R.isScene===!0&&R.onAfterRender(b,R,K),jt.resetDefaultState(),A=-1,S=null,E.pop(),E.length>0?(m=E[E.length-1],At===!0&&it.setGlobalState(b.clippingPlanes,m.state.camera)):m=null,w.pop(),w.length>0?x=w[w.length-1]:x=null};function Ws(R,K,st,rt){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||pt.intersectsSprite(R)){rt&&re.setFromMatrixPosition(R.matrixWorld).applyMatrix4(zt);let kt=G.update(R),Jt=R.material;Jt.visible&&x.push(R,kt,Jt,st,re.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||pt.intersectsObject(R))){let kt=G.update(R),Jt=R.material;if(rt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),re.copy(R.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),re.copy(kt.boundingSphere.center)),re.applyMatrix4(R.matrixWorld).applyMatrix4(zt)),Array.isArray(Jt)){let te=kt.groups;for(let me=0,_e=te.length;me<_e;me++){let ee=te[me],we=Jt[ee.materialIndex];we&&we.visible&&x.push(R,kt,we,st,re.z,ee)}}else Jt.visible&&x.push(R,kt,Jt,st,re.z,null)}}let Dt=R.children;for(let kt=0,Jt=Dt.length;kt<Jt;kt++)Ws(Dt[kt],K,st,rt)}function Dr(R,K,st,rt){let J=R.opaque,Dt=R.transmissive,kt=R.transparent;m.setupLightsView(st),At===!0&&it.setGlobalState(b.clippingPlanes,st),rt&&Lt.viewport(B.copy(rt)),J.length>0&&Gi(J,K,st),Dt.length>0&&Gi(Dt,K,st),kt.length>0&&Gi(kt,K,st),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function Ur(R,K,st,rt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[rt.id]===void 0&&(m.state.transmissionRenderTarget[rt.id]=new Fi(1,1,{generateMipmaps:!0,type:wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float")?Lo:Ni,minFilter:Rs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));let Dt=m.state.transmissionRenderTarget[rt.id],kt=rt.viewport||B;Dt.setSize(kt.z,kt.w);let Jt=b.getRenderTarget();b.setRenderTarget(Dt),b.getClearColor(W),q=b.getClearAlpha(),q<1&&b.setClearColor(16777215,.5),b.clear(),xt&&Ot.render(st);let te=b.toneMapping;b.toneMapping=ns;let me=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),m.setupLightsView(rt),At===!0&&it.setGlobalState(b.clippingPlanes,rt),Gi(R,st,rt),P.updateMultisampleRenderTarget(Dt),P.updateRenderTargetMipmap(Dt),wt.has("WEBGL_multisampled_render_to_texture")===!1){let _e=!1;for(let ee=0,we=K.length;ee<we;ee++){let Ie=K[ee],Ae=Ie.object,sn=Ie.geometry,Se=Ie.material,Qt=Ie.group;if(Se.side===An&&Ae.layers.test(rt.layers)){let ti=Se.side;Se.side=Rn,Se.needsUpdate=!0,Vn(Ae,st,rt,sn,Se,Qt),Se.side=ti,Se.needsUpdate=!0,_e=!0}}_e===!0&&(P.updateMultisampleRenderTarget(Dt),P.updateRenderTargetMipmap(Dt))}b.setRenderTarget(Jt),b.setClearColor(W,q),me!==void 0&&(rt.viewport=me),b.toneMapping=te}function Gi(R,K,st){let rt=K.isScene===!0?K.overrideMaterial:null;for(let J=0,Dt=R.length;J<Dt;J++){let kt=R[J],Jt=kt.object,te=kt.geometry,me=rt===null?kt.material:rt,_e=kt.group;Jt.layers.test(st.layers)&&Vn(Jt,K,st,te,me,_e)}}function Vn(R,K,st,rt,J,Dt){R.onBeforeRender(b,K,st,rt,J,Dt),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(b,K,st,rt,R,Dt),J.transparent===!0&&J.side===An&&J.forceSinglePass===!1?(J.side=Rn,J.needsUpdate=!0,b.renderBufferDirect(st,K,rt,J,R,Dt),J.side=is,J.needsUpdate=!0,b.renderBufferDirect(st,K,rt,J,R,Dt),J.side=An):b.renderBufferDirect(st,K,rt,J,R,Dt),R.onAfterRender(b,K,st,rt,J,Dt)}function di(R,K,st){K.isScene!==!0&&(K=ue);let rt=Bt.get(R),J=m.state.lights,Dt=m.state.shadowsArray,kt=J.state.version,Jt=tt.getParameters(R,J.state,Dt,K,st),te=tt.getProgramCacheKey(Jt),me=rt.programs;rt.environment=R.isMeshStandardMaterial?K.environment:null,rt.fog=K.fog,rt.envMap=(R.isMeshStandardMaterial?Q:T).get(R.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&R.envMap===null?K.environmentRotation:R.envMapRotation,me===void 0&&(R.addEventListener("dispose",pe),me=new Map,rt.programs=me);let _e=me.get(te);if(_e!==void 0){if(rt.currentProgram===_e&&rt.lightsStateVersion===kt)return ms(R,Jt),_e}else Jt.uniforms=tt.getUniforms(R),R.onBeforeCompile(Jt,b),_e=tt.acquireProgram(Jt,te),me.set(te,_e),rt.uniforms=Jt.uniforms;let ee=rt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ee.clippingPlanes=it.uniform),ms(R,Jt),rt.needsLights=pi(R),rt.lightsStateVersion=kt,rt.needsLights&&(ee.ambientLightColor.value=J.state.ambient,ee.lightProbe.value=J.state.probe,ee.directionalLights.value=J.state.directional,ee.directionalLightShadows.value=J.state.directionalShadow,ee.spotLights.value=J.state.spot,ee.spotLightShadows.value=J.state.spotShadow,ee.rectAreaLights.value=J.state.rectArea,ee.ltc_1.value=J.state.rectAreaLTC1,ee.ltc_2.value=J.state.rectAreaLTC2,ee.pointLights.value=J.state.point,ee.pointLightShadows.value=J.state.pointShadow,ee.hemisphereLights.value=J.state.hemi,ee.directionalShadowMap.value=J.state.directionalShadowMap,ee.directionalShadowMatrix.value=J.state.directionalShadowMatrix,ee.spotShadowMap.value=J.state.spotShadowMap,ee.spotLightMatrix.value=J.state.spotLightMatrix,ee.spotLightMap.value=J.state.spotLightMap,ee.pointShadowMap.value=J.state.pointShadowMap,ee.pointShadowMatrix.value=J.state.pointShadowMatrix),rt.currentProgram=_e,rt.uniformsList=null,_e}function ps(R){if(R.uniformsList===null){let K=R.currentProgram.getUniforms();R.uniformsList=gr.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function ms(R,K){let st=Bt.get(R);st.outputColorSpace=K.outputColorSpace,st.batching=K.batching,st.batchingColor=K.batchingColor,st.instancing=K.instancing,st.instancingColor=K.instancingColor,st.instancingMorph=K.instancingMorph,st.skinning=K.skinning,st.morphTargets=K.morphTargets,st.morphNormals=K.morphNormals,st.morphColors=K.morphColors,st.morphTargetsCount=K.morphTargetsCount,st.numClippingPlanes=K.numClippingPlanes,st.numIntersection=K.numClipIntersection,st.vertexAlphas=K.vertexAlphas,st.vertexTangents=K.vertexTangents,st.toneMapping=K.toneMapping}function On(R,K,st,rt,J){K.isScene!==!0&&(K=ue),P.resetTextureUnits();let Dt=K.fog,kt=rt.isMeshStandardMaterial?K.environment:null,Jt=z===null?b.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Tr,te=(rt.isMeshStandardMaterial?Q:T).get(rt.envMap||kt),me=rt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,_e=!!st.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),ee=!!st.morphAttributes.position,we=!!st.morphAttributes.normal,Ie=!!st.morphAttributes.color,Ae=ns;rt.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Ae=b.toneMapping);let sn=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Se=sn!==void 0?sn.length:0,Qt=Bt.get(rt),ti=m.state.lights;if(At===!0&&(Yt===!0||R!==S)){let an=R===S&&rt.id===A;it.setState(rt,R,an)}let he=!1;rt.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==ti.state.version||Qt.outputColorSpace!==Jt||J.isBatchedMesh&&Qt.batching===!1||!J.isBatchedMesh&&Qt.batching===!0||J.isBatchedMesh&&Qt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Qt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Qt.instancing===!1||!J.isInstancedMesh&&Qt.instancing===!0||J.isSkinnedMesh&&Qt.skinning===!1||!J.isSkinnedMesh&&Qt.skinning===!0||J.isInstancedMesh&&Qt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Qt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Qt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Qt.instancingMorph===!1&&J.morphTexture!==null||Qt.envMap!==te||rt.fog===!0&&Qt.fog!==Dt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==it.numPlanes||Qt.numIntersection!==it.numIntersection)||Qt.vertexAlphas!==me||Qt.vertexTangents!==_e||Qt.morphTargets!==ee||Qt.morphNormals!==we||Qt.morphColors!==Ie||Qt.toneMapping!==Ae||Qt.morphTargetsCount!==Se)&&(he=!0):(he=!0,Qt.__version=rt.version);let bn=Qt.currentProgram;he===!0&&(bn=di(rt,K,J));let Wi=!1,In=!1,Xi=!1,Re=bn.getUniforms(),Xe=Qt.uniforms;if(Lt.useProgram(bn.program)&&(Wi=!0,In=!0,Xi=!0),rt.id!==A&&(A=rt.id,In=!0),Wi||S!==R){Lt.buffers.depth.getReversed()?(Ct.copy(R.projectionMatrix),f0(Ct),d0(Ct),Re.setValue(F,"projectionMatrix",Ct)):Re.setValue(F,"projectionMatrix",R.projectionMatrix),Re.setValue(F,"viewMatrix",R.matrixWorldInverse);let pn=Re.map.cameraPosition;pn!==void 0&&pn.setValue(F,ie.setFromMatrixPosition(R.matrixWorld)),Ht.logarithmicDepthBuffer&&Re.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Re.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,In=!0,Xi=!0)}if(J.isSkinnedMesh){Re.setOptional(F,J,"bindMatrix"),Re.setOptional(F,J,"bindMatrixInverse");let an=J.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Re.setValue(F,"boneTexture",an.boneTexture,P))}J.isBatchedMesh&&(Re.setOptional(F,J,"batchingTexture"),Re.setValue(F,"batchingTexture",J._matricesTexture,P),Re.setOptional(F,J,"batchingIdTexture"),Re.setValue(F,"batchingIdTexture",J._indirectTexture,P),Re.setOptional(F,J,"batchingColorTexture"),J._colorsTexture!==null&&Re.setValue(F,"batchingColorTexture",J._colorsTexture,P));let Yi=st.morphAttributes;if((Yi.position!==void 0||Yi.normal!==void 0||Yi.color!==void 0)&&bt.update(J,st,bn),(In||Qt.receiveShadow!==J.receiveShadow)&&(Qt.receiveShadow=J.receiveShadow,Re.setValue(F,"receiveShadow",J.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Xe.envMap.value=te,Xe.flipEnvMap.value=te.isCubeTexture&&te.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&K.environment!==null&&(Xe.envMapIntensity.value=K.environmentIntensity),In&&(Re.setValue(F,"toneMappingExposure",b.toneMappingExposure),Qt.needsLights&&Nr(Xe,Xi),Dt&&rt.fog===!0&&j.refreshFogUniforms(Xe,Dt),j.refreshMaterialUniforms(Xe,rt,$,ft,m.state.transmissionRenderTarget[R.id]),gr.upload(F,ps(Qt),Xe,P)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(gr.upload(F,ps(Qt),Xe,P),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Re.setValue(F,"center",J.center),Re.setValue(F,"modelViewMatrix",J.modelViewMatrix),Re.setValue(F,"normalMatrix",J.normalMatrix),Re.setValue(F,"modelMatrix",J.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){let an=rt.uniformsGroups;for(let pn=0,ei=an.length;pn<ei;pn++){let Or=an[pn];X.update(Or,bn),X.bind(Or,bn)}}return bn}function Nr(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function pi(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(R,K,st){Bt.get(R.texture).__webglTexture=K,Bt.get(R.depthTexture).__webglTexture=st;let rt=Bt.get(R);rt.__hasExternalTextures=!0,rt.__autoAllocateDepthBuffer=st===void 0,rt.__autoAllocateDepthBuffer||wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,K){let st=Bt.get(R);st.__webglFramebuffer=K,st.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(R,K=0,st=0){z=R,L=K,D=st;let rt=!0,J=null,Dt=!1,kt=!1;if(R){let te=Bt.get(R);if(te.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(F.FRAMEBUFFER,null),rt=!1;else if(te.__webglFramebuffer===void 0)P.setupRenderTarget(R);else if(te.__hasExternalTextures)P.rebindTextures(R,Bt.get(R.texture).__webglTexture,Bt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ee=R.depthTexture;if(te.__boundDepthTexture!==ee){if(ee!==null&&Bt.has(ee)&&(R.width!==ee.image.width||R.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(R)}}let me=R.texture;(me.isData3DTexture||me.isDataArrayTexture||me.isCompressedArrayTexture)&&(kt=!0);let _e=Bt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(_e[K])?J=_e[K][st]:J=_e[K],Dt=!0):R.samples>0&&P.useMultisampledRTT(R)===!1?J=Bt.get(R).__webglMultisampledFramebuffer:Array.isArray(_e)?J=_e[st]:J=_e,B.copy(R.viewport),Z.copy(R.scissor),N=R.scissorTest}else B.copy(dt).multiplyScalar($).floor(),Z.copy(Xt).multiplyScalar($).floor(),N=ye;if(Lt.bindFramebuffer(F.FRAMEBUFFER,J)&&rt&&Lt.drawBuffers(R,J),Lt.viewport(B),Lt.scissor(Z),Lt.setScissorTest(N),Dt){let te=Bt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+K,te.__webglTexture,st)}else if(kt){let te=Bt.get(R.texture),me=K||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,te.__webglTexture,st||0,me)}A=-1},this.readRenderTargetPixels=function(R,K,st,rt,J,Dt,kt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=Bt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&kt!==void 0&&(Jt=Jt[kt]),Jt){Lt.bindFramebuffer(F.FRAMEBUFFER,Jt);try{let te=R.texture,me=te.format,_e=te.type;if(!Ht.textureFormatReadable(me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(_e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-rt&&st>=0&&st<=R.height-J&&F.readPixels(K,st,rt,J,le.convert(me),le.convert(_e),Dt)}finally{let te=z!==null?Bt.get(z).__webglFramebuffer:null;Lt.bindFramebuffer(F.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(R,K,st,rt,J,Dt,kt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=Bt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&kt!==void 0&&(Jt=Jt[kt]),Jt){let te=R.texture,me=te.format,_e=te.type;if(!Ht.textureFormatReadable(me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(_e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=R.width-rt&&st>=0&&st<=R.height-J){Lt.bindFramebuffer(F.FRAMEBUFFER,Jt);let ee=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ee),F.bufferData(F.PIXEL_PACK_BUFFER,Dt.byteLength,F.STREAM_READ),F.readPixels(K,st,rt,J,le.convert(me),le.convert(_e),0);let we=z!==null?Bt.get(z).__webglFramebuffer:null;Lt.bindFramebuffer(F.FRAMEBUFFER,we);let Ie=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await u0(F,Ie,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ee),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Dt),F.deleteBuffer(ee),F.deleteSync(Ie),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,K=null,st=0){R.isTexture!==!0&&(Qr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,R=arguments[1]);let rt=Math.pow(2,-st),J=Math.floor(R.image.width*rt),Dt=Math.floor(R.image.height*rt),kt=K!==null?K.x:0,Jt=K!==null?K.y:0;P.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,st,0,0,kt,Jt,J,Dt),Lt.unbindTexture()},this.copyTextureToTexture=function(R,K,st=null,rt=null,J=0){R.isTexture!==!0&&(Qr("WebGLRenderer: copyTextureToTexture function signature has changed."),rt=arguments[0]||null,R=arguments[1],K=arguments[2],J=arguments[3]||0,st=null);let Dt,kt,Jt,te,me,_e,ee,we,Ie,Ae=R.isCompressedTexture?R.mipmaps[J]:R.image;st!==null?(Dt=st.max.x-st.min.x,kt=st.max.y-st.min.y,Jt=st.isBox3?st.max.z-st.min.z:1,te=st.min.x,me=st.min.y,_e=st.isBox3?st.min.z:0):(Dt=Ae.width,kt=Ae.height,Jt=Ae.depth||1,te=0,me=0,_e=0),rt!==null?(ee=rt.x,we=rt.y,Ie=rt.z):(ee=0,we=0,Ie=0);let sn=le.convert(K.format),Se=le.convert(K.type),Qt;K.isData3DTexture?(P.setTexture3D(K,0),Qt=F.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(P.setTexture2DArray(K,0),Qt=F.TEXTURE_2D_ARRAY):(P.setTexture2D(K,0),Qt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,K.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,K.unpackAlignment);let ti=F.getParameter(F.UNPACK_ROW_LENGTH),he=F.getParameter(F.UNPACK_IMAGE_HEIGHT),bn=F.getParameter(F.UNPACK_SKIP_PIXELS),Wi=F.getParameter(F.UNPACK_SKIP_ROWS),In=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ae.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ae.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,te),F.pixelStorei(F.UNPACK_SKIP_ROWS,me),F.pixelStorei(F.UNPACK_SKIP_IMAGES,_e);let Xi=R.isDataArrayTexture||R.isData3DTexture,Re=K.isDataArrayTexture||K.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let Xe=Bt.get(R),Yi=Bt.get(K),an=Bt.get(Xe.__renderTarget),pn=Bt.get(Yi.__renderTarget);Lt.bindFramebuffer(F.READ_FRAMEBUFFER,an.__webglFramebuffer),Lt.bindFramebuffer(F.DRAW_FRAMEBUFFER,pn.__webglFramebuffer);for(let ei=0;ei<Jt;ei++)Xi&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Bt.get(R).__webglTexture,J,_e+ei),R.isDepthTexture?(Re&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Bt.get(K).__webglTexture,J,Ie+ei),F.blitFramebuffer(te,me,Dt,kt,ee,we,Dt,kt,F.DEPTH_BUFFER_BIT,F.NEAREST)):Re?F.copyTexSubImage3D(Qt,J,ee,we,Ie+ei,te,me,Dt,kt):F.copyTexSubImage2D(Qt,J,ee,we,Ie+ei,te,me,Dt,kt);Lt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Re?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Qt,J,ee,we,Ie,Dt,kt,Jt,sn,Se,Ae.data):K.isCompressedArrayTexture?F.compressedTexSubImage3D(Qt,J,ee,we,Ie,Dt,kt,Jt,sn,Ae.data):F.texSubImage3D(Qt,J,ee,we,Ie,Dt,kt,Jt,sn,Se,Ae):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,J,ee,we,Dt,kt,sn,Se,Ae.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,J,ee,we,Ae.width,Ae.height,sn,Ae.data):F.texSubImage2D(F.TEXTURE_2D,J,ee,we,Dt,kt,sn,Se,Ae);F.pixelStorei(F.UNPACK_ROW_LENGTH,ti),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,he),F.pixelStorei(F.UNPACK_SKIP_PIXELS,bn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Wi),F.pixelStorei(F.UNPACK_SKIP_IMAGES,In),J===0&&K.generateMipmaps&&F.generateMipmap(Qt),Lt.unbindTexture()},this.copyTextureToTexture3D=function(R,K,st=null,rt=null,J=0){return R.isTexture!==!0&&(Qr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),st=arguments[0]||null,rt=arguments[1]||null,R=arguments[2],K=arguments[3],J=arguments[4]||0),Qr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,K,st,rt,J)},this.initRenderTarget=function(R){Bt.get(R).__webglFramebuffer===void 0&&P.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),Lt.unbindTexture()},this.resetState=function(){L=0,D=0,z=null,Lt.reset(),jt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Te._getDrawingBufferColorSpace(t),e.unpackColorSpace=Te._getUnpackColorSpace()}};var Da=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new ce(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},mo=class extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ua=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=zl,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ln=new O,go=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ln.fromBufferAttribute(this,e),Ln.applyMatrix4(t),this.setXYZ(e,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ln.fromBufferAttribute(this,e),Ln.applyNormalMatrix(t),this.setXYZ(e,Ln.x,Ln.y,Ln.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ln.fromBufferAttribute(this,e),Ln.transformDirection(t),this.setXYZ(e,Ln.x,Ln.y,Ln.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=oi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Le(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=oi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=oi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=oi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=oi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),s=Le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new En(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Bi=class extends zi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ar,Kr=new O,cr=new O,lr=new O,hr=new St,Jr=new St,ad=new Be,ca=new O,$r=new O,la=new O,bf=new St,qc=new St,Sf=new St,rs=class extends He{constructor(t=new Bi){if(super(),this.isSprite=!0,this.type="Sprite",ar===void 0){ar=new ze;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ua(e,5);ar.setIndex([0,1,2,0,2,3]),ar.setAttribute("position",new go(i,3,0,!1)),ar.setAttribute("uv",new go(i,2,3,!1))}this.geometry=ar,this.material=t,this.center=new St(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cr.setFromMatrixScale(this.matrixWorld),ad.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),lr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cr.multiplyScalar(-lr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;ha(ca.set(-.5,-.5,0),lr,o,cr,s,r),ha($r.set(.5,-.5,0),lr,o,cr,s,r),ha(la.set(.5,.5,0),lr,o,cr,s,r),bf.set(0,0),qc.set(1,0),Sf.set(1,1);let a=t.ray.intersectTriangle(ca,$r,la,!1,Kr);if(a===null&&(ha($r.set(-.5,.5,0),lr,o,cr,s,r),qc.set(0,1),a=t.ray.intersectTriangle(ca,la,$r,!1,Kr),a===null))return;let c=t.ray.origin.distanceTo(Kr);c<t.near||c>t.far||e.push({distance:c,point:Kr.clone(),uv:ts.getInterpolation(Kr,ca,$r,la,bf,qc,Sf,new St),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ha(n,t,e,i,s,r){hr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Jr.x=r*hr.x-s*hr.y,Jr.y=s*hr.x+r*hr.y):Jr.copy(hr),n.copy(t),n.x+=Jr.x,n.y+=Jr.y,n.applyMatrix4(ad)}var os=class extends zi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},wf=new Be,eh=new Is,ua=new Er,fa=new O,Ls=class extends He{constructor(t=new ze,e=new os){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ua.copy(i.boundingSphere),ua.applyMatrix4(s),ua.radius+=r,t.ray.intersectsSphere(ua)===!1)return;wf.copy(s).invert(),eh.copy(t.ray).applyMatrix4(wf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,f=i.attributes.position;if(l!==null){let u=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=u,M=d;g<M;g++){let x=l.getX(g);fa.fromBufferAttribute(f,x),Tf(fa,x,c,s,t,e,this)}}else{let u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=u,M=d;g<M;g++)fa.fromBufferAttribute(f,g),Tf(fa,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Tf(n,t,e,i,s,r,o){let a=eh.distanceSqToPoint(n);if(a<e){let c=new O;eh.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var _n=class extends Cn{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},$n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new St:new O);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new O,s=[],r=[],o=[],a=new O,c=new Be;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new O)}r[0]=new O,o[0]=new O;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),u<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(gn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(gn(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},xo=class extends $n{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new St){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,d=l-this.aY;c=u*h-d*f+this.aX,l=u*f+d*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},nh=class extends xo{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Uh(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,f){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+f)+(c-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var da=new O,Zc=new Uh,Kc=new Uh,Jc=new Uh,_o=class extends $n{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new O){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(da.subVectors(s[0],s[1]).add(s[0]),l=da);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(da.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=da),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),d),M=Math.pow(f.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(h),d);M<1e-4&&(M=1),g<1e-4&&(g=M),x<1e-4&&(x=M),Zc.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,g,M,x),Kc.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,g,M,x),Jc.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,g,M,x)}else this.curveType==="catmullrom"&&(Zc.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),Kc.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),Jc.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return i.set(Zc.calc(c),Kc.calc(c),Jc.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Af(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function ay(n,t){let e=1-n;return e*e*t}function cy(n,t){return 2*(1-n)*n*t}function ly(n,t){return n*n*t}function so(n,t,e,i){return ay(n,t)+cy(n,e)+ly(n,i)}function hy(n,t){let e=1-n;return e*e*e*t}function uy(n,t){let e=1-n;return 3*e*e*n*t}function fy(n,t){return 3*(1-n)*n*n*t}function dy(n,t){return n*n*n*t}function ro(n,t,e,i,s){return hy(n,t)+uy(n,e)+fy(n,i)+dy(n,s)}var Na=class extends $n{constructor(t=new St,e=new St,i=new St,s=new St){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new St){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ro(t,s.x,r.x,o.x,a.x),ro(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ih=class extends $n{constructor(t=new O,e=new O,i=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new O){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ro(t,s.x,r.x,o.x,a.x),ro(t,s.y,r.y,o.y,a.y),ro(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Oa=class extends $n{constructor(t=new St,e=new St){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new St){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new St){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sh=class extends $n{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fa=class extends $n{constructor(t=new St,e=new St,i=new St){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new St){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(so(t,s.x,r.x,o.x),so(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},rh=class extends $n{constructor(t=new O,e=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new O){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(so(t,s.x,r.x,o.x),so(t,s.y,r.y,o.y),so(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},za=class extends $n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new St){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Af(a,c.x,l.x,h.x,f.x),Af(a,c.y,l.y,h.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new St().fromArray(s))}return this}},oh=Object.freeze({__proto__:null,ArcCurve:nh,CatmullRomCurve3:_o,CubicBezierCurve:Na,CubicBezierCurve3:ih,EllipseCurve:xo,LineCurve:Oa,LineCurve3:sh,QuadraticBezierCurve:Fa,QuadraticBezierCurve3:rh,SplineCurve:za}),ah=class extends $n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new oh[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new oh[s.type]().fromJSON(s))}return this}},Ba=class extends ah{constructor(t){super(),this.type="Path",this.currentPoint=new St,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Oa(this.currentPoint.clone(),new St(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Fa(this.currentPoint.clone(),new St(t,e),new St(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Na(this.currentPoint.clone(),new St(t,e),new St(i,s),new St(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new za(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,r,o,a,c),this}absellipse(t,e,i,s,r,o,a,c){let l=new xo(t,e,i,s,r,o,a,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Ha=class n extends ze{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new O,h=new St;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let d=i+f/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,c.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new xe(o,3)),this.setAttribute("normal",new xe(a,3)),this.setAttribute("uv",new xe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},We=class n extends ze{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],g=0,M=[],x=i/2,m=0;w(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new xe(f,3)),this.setAttribute("normal",new xe(u,3)),this.setAttribute("uv",new xe(d,2));function w(){let b=new O,V=new O,L=0,D=(e-t)/i;for(let z=0;z<=r;z++){let A=[],S=z/r,B=S*(e-t)+t;for(let Z=0;Z<=s;Z++){let N=Z/s,W=N*c+a,q=Math.sin(W),Y=Math.cos(W);V.x=B*q,V.y=-S*i+x,V.z=B*Y,f.push(V.x,V.y,V.z),b.set(q,D,Y).normalize(),u.push(b.x,b.y,b.z),d.push(N,1-S),A.push(g++)}M.push(A)}for(let z=0;z<s;z++)for(let A=0;A<r;A++){let S=M[A][z],B=M[A+1][z],Z=M[A+1][z+1],N=M[A][z+1];(t>0||A!==0)&&(h.push(S,B,N),L+=3),(e>0||A!==r-1)&&(h.push(B,Z,N),L+=3)}l.addGroup(m,L,0),m+=L}function E(b){let V=g,L=new St,D=new O,z=0,A=b===!0?t:e,S=b===!0?1:-1;for(let Z=1;Z<=s;Z++)f.push(0,x*S,0),u.push(0,S,0),d.push(.5,.5),g++;let B=g;for(let Z=0;Z<=s;Z++){let W=Z/s*c+a,q=Math.cos(W),Y=Math.sin(W);D.x=A*Y,D.y=x*S,D.z=A*q,f.push(D.x,D.y,D.z),u.push(0,S,0),L.x=q*.5+.5,L.y=Y*.5*S+.5,d.push(L.x,L.y),g++}for(let Z=0;Z<s;Z++){let N=V+Z,W=B+Z;b===!0?h.push(W,W+1,N):h.push(W+1,W,N),z+=3}l.addGroup(m,z,b===!0?1:2),m+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},yo=class n extends We{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ch=class n extends ze{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new xe(r,3)),this.setAttribute("normal",new xe(r.slice(),3)),this.setAttribute("uv",new xe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){let E=new O,b=new O,V=new O;for(let L=0;L<e.length;L+=3)d(e[L+0],E),d(e[L+1],b),d(e[L+2],V),c(E,b,V,w)}function c(w,E,b,V){let L=V+1,D=[];for(let z=0;z<=L;z++){D[z]=[];let A=w.clone().lerp(b,z/L),S=E.clone().lerp(b,z/L),B=L-z;for(let Z=0;Z<=B;Z++)Z===0&&z===L?D[z][Z]=A:D[z][Z]=A.clone().lerp(S,Z/B)}for(let z=0;z<L;z++)for(let A=0;A<2*(L-z)-1;A++){let S=Math.floor(A/2);A%2===0?(u(D[z][S+1]),u(D[z+1][S]),u(D[z][S])):(u(D[z][S+1]),u(D[z+1][S+1]),u(D[z+1][S]))}}function l(w){let E=new O;for(let b=0;b<r.length;b+=3)E.x=r[b+0],E.y=r[b+1],E.z=r[b+2],E.normalize().multiplyScalar(w),r[b+0]=E.x,r[b+1]=E.y,r[b+2]=E.z}function h(){let w=new O;for(let E=0;E<r.length;E+=3){w.x=r[E+0],w.y=r[E+1],w.z=r[E+2];let b=x(w)/2/Math.PI+.5,V=m(w)/Math.PI+.5;o.push(b,1-V)}g(),f()}function f(){for(let w=0;w<o.length;w+=6){let E=o[w+0],b=o[w+2],V=o[w+4],L=Math.max(E,b,V),D=Math.min(E,b,V);L>.9&&D<.1&&(E<.2&&(o[w+0]+=1),b<.2&&(o[w+2]+=1),V<.2&&(o[w+4]+=1))}}function u(w){r.push(w.x,w.y,w.z)}function d(w,E){let b=w*3;E.x=t[b+0],E.y=t[b+1],E.z=t[b+2]}function g(){let w=new O,E=new O,b=new O,V=new O,L=new St,D=new St,z=new St;for(let A=0,S=0;A<r.length;A+=9,S+=6){w.set(r[A+0],r[A+1],r[A+2]),E.set(r[A+3],r[A+4],r[A+5]),b.set(r[A+6],r[A+7],r[A+8]),L.set(o[S+0],o[S+1]),D.set(o[S+2],o[S+3]),z.set(o[S+4],o[S+5]),V.copy(w).add(E).add(b).divideScalar(3);let B=x(V);M(L,S+0,w,B),M(D,S+2,E,B),M(z,S+4,b,B)}}function M(w,E,b,V){V<0&&w.x===1&&(o[E]=w.x-1),b.x===0&&b.z===0&&(o[E]=V/2/Math.PI+.5)}function x(w){return Math.atan2(w.z,-w.x)}function m(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var Mo=class extends Ba{constructor(t){super(t),this.uuid=xi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Ba().fromJSON(s))}return this}},py={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=cd(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,f,u,d;if(i&&(r=yy(n,t,r,e)),n.length>80*e){a=l=n[0],c=h=n[1];for(let g=e;g<s;g+=e)f=n[g],u=n[g+1],f<a&&(a=f),u<c&&(c=u),f>l&&(l=f),u>h&&(h=u);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return vo(r,o,e,a,c,d,0),o}};function cd(n,t,e,i,s){let r,o;if(s===Py(n,t,e,i)>0)for(r=t;r<e;r+=i)o=Rf(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=Rf(r,n[r],n[r+1],o);return o&&Ja(o,o.next)&&(bo(o),o=o.next),o}function Ds(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ja(e,e.next)||Je(e.prev,e,e.next)===0)){if(bo(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function vo(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Sy(n,i,s,r);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?gy(n,i,s,r):my(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),bo(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=xy(Ds(n),t,e),vo(n,t,e,i,s,r,2)):o===2&&_y(n,t,e,i,s,r):vo(Ds(n),t,e,i,s,r,1);break}}}function my(n){let t=n.prev,e=n,i=n.next;if(Je(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,h=s<r?s<o?s:o:r<o?r:o,f=a<c?a<l?a:l:c<l?c:l,u=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&fr(s,a,r,c,o,l,g.x,g.y)&&Je(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function gy(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Je(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,f=r.y,u=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<f?h<u?h:u:f<u?f:u,M=a>c?a>l?a:l:c>l?c:l,x=h>f?h>u?h:u:f>u?f:u,m=lh(d,g,t,e,i),w=lh(M,x,t,e,i),E=n.prevZ,b=n.nextZ;for(;E&&E.z>=m&&b&&b.z<=w;){if(E.x>=d&&E.x<=M&&E.y>=g&&E.y<=x&&E!==s&&E!==o&&fr(a,h,c,f,l,u,E.x,E.y)&&Je(E.prev,E,E.next)>=0||(E=E.prevZ,b.x>=d&&b.x<=M&&b.y>=g&&b.y<=x&&b!==s&&b!==o&&fr(a,h,c,f,l,u,b.x,b.y)&&Je(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;E&&E.z>=m;){if(E.x>=d&&E.x<=M&&E.y>=g&&E.y<=x&&E!==s&&E!==o&&fr(a,h,c,f,l,u,E.x,E.y)&&Je(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;b&&b.z<=w;){if(b.x>=d&&b.x<=M&&b.y>=g&&b.y<=x&&b!==s&&b!==o&&fr(a,h,c,f,l,u,b.x,b.y)&&Je(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function xy(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!Ja(s,r)&&ld(s,i,i.next,r)&&Eo(s,r)&&Eo(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),bo(i),bo(i.next),i=n=r),i=i.next}while(i!==n);return Ds(i)}function _y(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ay(o,a)){let c=hd(o,a);o=Ds(o,o.next),c=Ds(c,c.next),vo(o,t,e,i,s,r,0),vo(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function yy(n,t,e,i){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=cd(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(Ty(l));for(s.sort(My),r=0;r<s.length;r++)e=vy(s[r],e);return e}function My(n,t){return n.x-t.x}function vy(n,t){let e=Ey(n,t);if(!e)return t;let i=hd(e,n);return Ds(i,i.next),Ds(e,e.next)}function Ey(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>i&&(i=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,f;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&fr(o<l?r:i,o,c,l,o<l?i:r,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(r-e.x),Eo(e,n)&&(f<h||f===h&&(e.x>s.x||e.x===s.x&&by(s,e)))&&(s=e,h=f)),e=e.next;while(e!==a);return s}function by(n,t){return Je(n.prev,n,t.prev)<0&&Je(t.next,n,n.next)<0}function Sy(n,t,e,i){let s=n;do s.z===0&&(s.z=lh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,wy(s)}function wy(n){let t,e,i,s,r,o,a,c,l=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,l*=2}while(o>1);return n}function lh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Ty(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function fr(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Ay(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Ry(n,t)&&(Eo(n,t)&&Eo(t,n)&&Cy(n,t)&&(Je(n.prev,n,t.prev)||Je(n,t.prev,t))||Ja(n,t)&&Je(n.prev,n,n.next)>0&&Je(t.prev,t,t.next)>0)}function Je(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ja(n,t){return n.x===t.x&&n.y===t.y}function ld(n,t,e,i){let s=ma(Je(n,t,e)),r=ma(Je(n,t,i)),o=ma(Je(e,i,n)),a=ma(Je(e,i,t));return!!(s!==r&&o!==a||s===0&&pa(n,e,t)||r===0&&pa(n,i,t)||o===0&&pa(e,n,i)||a===0&&pa(e,t,i))}function pa(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ma(n){return n>0?1:n<0?-1:0}function Ry(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&ld(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Eo(n,t){return Je(n.prev,n,n.next)<0?Je(n,t,n.next)>=0&&Je(n,n.prev,t)>=0:Je(n,t,n.prev)<0||Je(n,n.next,t)<0}function Cy(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function hd(n,t){let e=new hh(n.i,n.x,n.y),i=new hh(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Rf(n,t,e,i){let s=new hh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function bo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function hh(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Py(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var oo=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Cf(t),Pf(i,t);let o=t.length;e.forEach(Cf);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Pf(i,e[c]);let a=py.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Cf(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Pf(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var ka=class n extends ze{constructor(t=new Mo([new St(.5,.5),new St(-.5,.5),new St(-.5,-.5),new St(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new xe(s,3)),this.setAttribute("uv",new xe(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:Iy,E,b=!1,V,L,D,z;m&&(E=m.getSpacedPoints(h),b=!0,u=!1,V=m.computeFrenetFrames(h,!1),L=new O,D=new O,z=new O),u||(x=0,d=0,g=0,M=0);let A=a.extractPoints(l),S=A.shape,B=A.holes;if(!oo.isClockWise(S)){S=S.reverse();for(let xt=0,vt=B.length;xt<vt;xt++){let F=B[xt];oo.isClockWise(F)&&(B[xt]=F.reverse())}}let N=oo.triangulateShape(S,B),W=S;for(let xt=0,vt=B.length;xt<vt;xt++){let F=B[xt];S=S.concat(F)}function q(xt,vt,F){return vt||console.error("THREE.ExtrudeGeometry: vec does not exist"),xt.clone().addScaledVector(vt,F)}let Y=S.length,ft=N.length;function $(xt,vt,F){let Zt,wt,Ht,Lt=xt.x-vt.x,oe=xt.y-vt.y,Bt=F.x-xt.x,P=F.y-xt.y,T=Lt*Lt+oe*oe,Q=Lt*P-oe*Bt;if(Math.abs(Q)>Number.EPSILON){let gt=Math.sqrt(T),Mt=Math.sqrt(Bt*Bt+P*P),G=vt.x-oe/gt,tt=vt.y+Lt/gt,j=F.x-P/Mt,ht=F.y+Bt/Mt,Nt=((j-G)*P-(ht-tt)*Bt)/(Lt*P-oe*Bt);Zt=G+Lt*Nt-xt.x,wt=tt+oe*Nt-xt.y;let it=Zt*Zt+wt*wt;if(it<=2)return new St(Zt,wt);Ht=Math.sqrt(it/2)}else{let gt=!1;Lt>Number.EPSILON?Bt>Number.EPSILON&&(gt=!0):Lt<-Number.EPSILON?Bt<-Number.EPSILON&&(gt=!0):Math.sign(oe)===Math.sign(P)&&(gt=!0),gt?(Zt=-oe,wt=Lt,Ht=Math.sqrt(T)):(Zt=Lt,wt=oe,Ht=Math.sqrt(T/2))}return new St(Zt/Ht,wt/Ht)}let _t=[];for(let xt=0,vt=W.length,F=vt-1,Zt=xt+1;xt<vt;xt++,F++,Zt++)F===vt&&(F=0),Zt===vt&&(Zt=0),_t[xt]=$(W[xt],W[F],W[Zt]);let Tt=[],dt,Xt=_t.concat();for(let xt=0,vt=B.length;xt<vt;xt++){let F=B[xt];dt=[];for(let Zt=0,wt=F.length,Ht=wt-1,Lt=Zt+1;Zt<wt;Zt++,Ht++,Lt++)Ht===wt&&(Ht=0),Lt===wt&&(Lt=0),dt[Zt]=$(F[Zt],F[Ht],F[Lt]);Tt.push(dt),Xt=Xt.concat(dt)}for(let xt=0;xt<x;xt++){let vt=xt/x,F=d*Math.cos(vt*Math.PI/2),Zt=g*Math.sin(vt*Math.PI/2)+M;for(let wt=0,Ht=W.length;wt<Ht;wt++){let Lt=q(W[wt],_t[wt],Zt);Ct(Lt.x,Lt.y,-F)}for(let wt=0,Ht=B.length;wt<Ht;wt++){let Lt=B[wt];dt=Tt[wt];for(let oe=0,Bt=Lt.length;oe<Bt;oe++){let P=q(Lt[oe],dt[oe],Zt);Ct(P.x,P.y,-F)}}}let ye=g+M;for(let xt=0;xt<Y;xt++){let vt=u?q(S[xt],Xt[xt],ye):S[xt];b?(D.copy(V.normals[0]).multiplyScalar(vt.x),L.copy(V.binormals[0]).multiplyScalar(vt.y),z.copy(E[0]).add(D).add(L),Ct(z.x,z.y,z.z)):Ct(vt.x,vt.y,0)}for(let xt=1;xt<=h;xt++)for(let vt=0;vt<Y;vt++){let F=u?q(S[vt],Xt[vt],ye):S[vt];b?(D.copy(V.normals[xt]).multiplyScalar(F.x),L.copy(V.binormals[xt]).multiplyScalar(F.y),z.copy(E[xt]).add(D).add(L),Ct(z.x,z.y,z.z)):Ct(F.x,F.y,f/h*xt)}for(let xt=x-1;xt>=0;xt--){let vt=xt/x,F=d*Math.cos(vt*Math.PI/2),Zt=g*Math.sin(vt*Math.PI/2)+M;for(let wt=0,Ht=W.length;wt<Ht;wt++){let Lt=q(W[wt],_t[wt],Zt);Ct(Lt.x,Lt.y,f+F)}for(let wt=0,Ht=B.length;wt<Ht;wt++){let Lt=B[wt];dt=Tt[wt];for(let oe=0,Bt=Lt.length;oe<Bt;oe++){let P=q(Lt[oe],dt[oe],Zt);b?Ct(P.x,P.y+E[h-1].y,E[h-1].x+F):Ct(P.x,P.y,f+F)}}}pt(),At();function pt(){let xt=s.length/3;if(u){let vt=0,F=Y*vt;for(let Zt=0;Zt<ft;Zt++){let wt=N[Zt];zt(wt[2]+F,wt[1]+F,wt[0]+F)}vt=h+x*2,F=Y*vt;for(let Zt=0;Zt<ft;Zt++){let wt=N[Zt];zt(wt[0]+F,wt[1]+F,wt[2]+F)}}else{for(let vt=0;vt<ft;vt++){let F=N[vt];zt(F[2],F[1],F[0])}for(let vt=0;vt<ft;vt++){let F=N[vt];zt(F[0]+Y*h,F[1]+Y*h,F[2]+Y*h)}}i.addGroup(xt,s.length/3-xt,0)}function At(){let xt=s.length/3,vt=0;Yt(W,vt),vt+=W.length;for(let F=0,Zt=B.length;F<Zt;F++){let wt=B[F];Yt(wt,vt),vt+=wt.length}i.addGroup(xt,s.length/3-xt,1)}function Yt(xt,vt){let F=xt.length;for(;--F>=0;){let Zt=F,wt=F-1;wt<0&&(wt=xt.length-1);for(let Ht=0,Lt=h+x*2;Ht<Lt;Ht++){let oe=Y*Ht,Bt=Y*(Ht+1),P=vt+Zt+oe,T=vt+wt+oe,Q=vt+wt+Bt,gt=vt+Zt+Bt;ie(P,T,Q,gt)}}}function Ct(xt,vt,F){c.push(xt),c.push(vt),c.push(F)}function zt(xt,vt,F){re(xt),re(vt),re(F);let Zt=s.length/3,wt=w.generateTopUV(i,s,Zt-3,Zt-2,Zt-1);ue(wt[0]),ue(wt[1]),ue(wt[2])}function ie(xt,vt,F,Zt){re(xt),re(vt),re(Zt),re(vt),re(F),re(Zt);let wt=s.length/3,Ht=w.generateSideWallUV(i,s,wt-6,wt-3,wt-2,wt-1);ue(Ht[0]),ue(Ht[1]),ue(Ht[3]),ue(Ht[1]),ue(Ht[2]),ue(Ht[3])}function re(xt){s.push(c[xt*3+0]),s.push(c[xt*3+1]),s.push(c[xt*3+2])}function ue(xt){r.push(xt.x),r.push(xt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Ly(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new oh[s.type]().fromJSON(s)),new n(i,t.options)}},Iy={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],h=t[s*3+1];return[new St(r,o),new St(a,c),new St(l,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],h=t[i*3+1],f=t[i*3+2],u=t[s*3],d=t[s*3+1],g=t[s*3+2],M=t[r*3],x=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new St(o,1-c),new St(l,1-f),new St(u,1-g),new St(M,1-m)]:[new St(a,1-c),new St(h,1-f),new St(d,1-g),new St(x,1-m)]}};function Ly(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Va=class n extends ch{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var So=class n extends ze{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],h=[],f=t,u=(e-t)/s,d=new O,g=new St;for(let M=0;M<=s;M++){for(let x=0;x<=i;x++){let m=r+x/i*o;d.x=f*Math.cos(m),d.y=f*Math.sin(m),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}f+=u}for(let M=0;M<s;M++){let x=M*(i+1);for(let m=0;m<i;m++){let w=m+x,E=w,b=w+i+1,V=w+i+2,L=w+1;a.push(E,b,L),a.push(b,V,L)}}this.setIndex(a),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(l,3)),this.setAttribute("uv",new xe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var yn=class n extends ze{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],f=new O,u=new O,d=[],g=[],M=[],x=[];for(let m=0;m<=i;m++){let w=[],E=m/i,b=0;m===0&&o===0?b=.5/e:m===i&&c===Math.PI&&(b=-.5/e);for(let V=0;V<=e;V++){let L=V/e;f.x=-t*Math.cos(s+L*r)*Math.sin(o+E*a),f.y=t*Math.cos(o+E*a),f.z=t*Math.sin(s+L*r)*Math.sin(o+E*a),g.push(f.x,f.y,f.z),u.copy(f).normalize(),M.push(u.x,u.y,u.z),x.push(L+b,1-E),w.push(l++)}h.push(w)}for(let m=0;m<i;m++)for(let w=0;w<e;w++){let E=h[m][w+1],b=h[m][w],V=h[m+1][w],L=h[m+1][w+1];(m!==0||o>0)&&d.push(E,b,L),(m!==i-1||c<Math.PI)&&d.push(b,V,L)}this.setIndex(d),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(M,3)),this.setAttribute("uv",new xe(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Us=class n extends ze{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new O,f=new O,u=new O;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){let M=g/s*r,x=d/i*Math.PI*2;f.x=(t+e*Math.cos(x))*Math.cos(M),f.y=(t+e*Math.cos(x))*Math.sin(M),f.z=e*Math.sin(x),a.push(f.x,f.y,f.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),u.subVectors(f,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/s),l.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){let M=(s+1)*d+g-1,x=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,w=(s+1)*d+g;o.push(M,x,w),o.push(x,m,w)}this.setIndex(o),this.setAttribute("position",new xe(a,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ee=class extends zi{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jf,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ga(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Dy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Sr=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},uh=class extends Sr{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tu,endingEnd:Tu}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Au:r=t,a=2*e-i;break;case Ru:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Au:o=t,c=2*i-e;break;case Ru:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(i-e)/(s-e),M=g*g,x=M*g,m=-u*x+2*u*M-u*g,w=(1+u)*x+(-1.5-2*u)*M+(-.5+u)*g+1,E=(-1-d)*x+(1.5+d)*M+.5*g,b=d*x-d*M;for(let V=0;V!==a;++V)r[V]=m*o[h+V]+w*o[l+V]+E*o[c+V]+b*o[f+V];return r}},fh=class extends Sr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(i-e)/(s-e),f=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*f+o[c+u]*h;return r}},dh=class extends Sr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},li=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ga(e,this.TimeBufferType),this.values=ga(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ga(t.times,Array),values:ga(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new dh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new uh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ea:e=this.InterpolantFactoryMethodDiscrete;break;case Fl:e=this.InterpolantFactoryMethodLinear;break;case Mc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ea;case this.InterpolantFactoryMethodLinear:return Fl;case this.InterpolantFactoryMethodSmooth:return Mc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Dy(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Mc,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let f=a*i,u=f-i,d=f+i;for(let g=0;g!==i;++g){let M=e[f+g];if(M!==e[u+g]||M!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let f=a*i,u=o*i;for(let d=0;d!==i;++d)e[u+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};li.prototype.TimeBufferType=Float32Array;li.prototype.ValueBufferType=Float32Array;li.prototype.DefaultInterpolation=Fl;var Ns=class extends li{constructor(t,e,i){super(t,e,i)}};Ns.prototype.ValueTypeName="bool";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=Ea;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;var ph=class extends li{};ph.prototype.ValueTypeName="color";var mh=class extends li{};mh.prototype.ValueTypeName="number";var gh=class extends Sr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)ci.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ga=class extends li{InterpolantFactoryMethodLinear(t){return new gh(this.times,this.values,this.getValueSize(),t)}};Ga.prototype.ValueTypeName="quaternion";Ga.prototype.InterpolantFactoryMethodSmooth=void 0;var Os=class extends li{constructor(t,e,i){super(t,e,i)}};Os.prototype.ValueTypeName="string";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=Ea;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;var xh=class extends li{};xh.prototype.ValueTypeName="vector";var If={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},_h=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let d=l[f],g=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},Uy=new _h,wo=class{constructor(t){this.manager=t!==void 0?t:Uy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};wo.DEFAULT_MATERIAL_NAME="__DEFAULT";var yh=class extends wo{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=If.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=ho("img");function c(){h(),If.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(f){h(),s&&s(f),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var To=class extends wo{constructor(t){super(t)}load(t,e,i,s){let r=new Cn,o=new yh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}},Ao=class extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ro=class extends Ao{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},$c=new Be,Lf=new O,Df=new O,Wa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fo,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Lf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Lf),Df.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Df),e.updateMatrixWorld(),$c.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($c),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($c)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Uf=new Be,jr=new O,jc=new O,Mh=class extends Wa{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new St(4,2),this._viewportCount=6,this._viewports=[new Ne(2,1,1,1),new Ne(0,1,1,1),new Ne(3,1,1,1),new Ne(1,1,1,1),new Ne(3,0,1,1),new Ne(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),jr.setFromMatrixPosition(t.matrixWorld),i.position.copy(jr),jc.copy(i.position),jc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(jc),i.updateMatrixWorld(),s.makeTranslation(-jr.x,-jr.y,-jr.z),Uf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uf)}},Co=class extends Ao{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Mh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},vh=class extends Wa{constructor(){super(new Pa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Po=class extends Ao{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new vh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Io=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Nf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Nf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Nf(){return performance.now()}var Nh="\\[\\]\\.:\\/",Ny=new RegExp("["+Nh+"]","g"),Oh="[^"+Nh+"]",Oy="[^"+Nh.replace("\\.","")+"]",Fy=/((?:WC+[\/:])*)/.source.replace("WC",Oh),zy=/(WCOD+)?/.source.replace("WCOD",Oy),By=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oh),Hy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oh),ky=new RegExp("^"+Fy+zy+By+Hy+"$"),Vy=["material","materials","bones","map"],Eh=class{constructor(t,e,i){let s=i||Ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ye=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ny,"")}static parseTrackName(t){let e=ky.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Vy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ye.Composite=Eh;Ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ye.prototype.GetterByBindingType=[Ye.prototype._getValue_direct,Ye.prototype._getValue_array,Ye.prototype._getValue_arrayElement,Ye.prototype._getValue_toArray];Ye.prototype.SetterByBindingTypeAndVersioning=[[Ye.prototype._setValue_direct,Ye.prototype._setValue_direct_setNeedsUpdate,Ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_array,Ye.prototype._setValue_array_setNeedsUpdate,Ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_arrayElement,Ye.prototype._setValue_arrayElement_setNeedsUpdate,Ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_fromArray,Ye.prototype._setValue_fromArray_setNeedsUpdate,Ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var O1=new Float32Array(1);var Of=new Be,wr=class{constructor(t,e,i=0,s=1/0){this.ray=new Is(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new uo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Of.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Of),this}intersectObject(t,e=!0,i=[]){return bh(t,this,i,e),i.sort(Ff),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)bh(t[s],this,i,e);return i.sort(Ff),i}};function Ff(n,t){return n.distance-t.distance}function bh(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)bh(r[o],t,e,!0)}}var Fs=class{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(gn(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Xa=class extends Oi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sh}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sh);var ud={type:"change"},Bh={type:"start"},dd={type:"end"},$a=new Is,fd=new ri,Gy=Math.cos(70*jf.DEG2RAD),fn=new O,Fn=2*Math.PI,Oe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},zh=1e-6,ja=class extends Xa{constructor(t,e=null){super(t,e),this.state=Oe.NONE,this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zs.ROTATE,MIDDLE:zs.DOLLY,RIGHT:zs.PAN},this.touches={ONE:yi.ROTATE,TWO:yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new ci,this._lastTargetPosition=new O,this._quat=new ci().setFromUnitVectors(t.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fs,this._sphericalDelta=new Fs,this._scale=1,this._panOffset=new O,this._rotateStart=new St,this._rotateEnd=new St,this._rotateDelta=new St,this._panStart=new St,this._panEnd=new St,this._panDelta=new St,this._dollyStart=new St,this._dollyEnd=new St,this._dollyDelta=new St,this._dollyDirection=new O,this._mouse=new St,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Xy.bind(this),this._onPointerDown=Wy.bind(this),this._onPointerUp=Yy.bind(this),this._onContextMenu=Qy.bind(this),this._onMouseWheel=Ky.bind(this),this._onKeyDown=Jy.bind(this),this._onTouchStart=$y.bind(this),this._onTouchMove=jy.bind(this),this._onMouseDown=qy.bind(this),this._onMouseMove=Zy.bind(this),this._interceptControlDown=t1.bind(this),this._interceptControlUp=e1.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ud),this.update(),this.state=Oe.NONE}update(t=null){let e=this.object.position;fn.copy(e).sub(this.target),fn.applyQuaternion(this._quat),this._spherical.setFromVector3(fn),this.autoRotate&&this.state===Oe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Fn:i>Math.PI&&(i-=Fn),s<-Math.PI?s+=Fn:s>Math.PI&&(s-=Fn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(fn.setFromSpherical(this._spherical),fn.applyQuaternion(this._quatInverse),e.copy(this.target).add(fn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=fn.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new O(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=fn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):($a.origin.copy(this.object.position),$a.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot($a.direction))<Gy?this.object.lookAt(this.target):(fd.setFromNormalAndCoplanarPoint(this.object.up,this.target),$a.intersectPlane(fd,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>zh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>zh||this._lastTargetPosition.distanceToSquared(this.target)>zh?(this.dispatchEvent(ud),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Fn/60*this.autoRotateSpeed*t:Fn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){fn.setFromMatrixColumn(e,0),fn.multiplyScalar(-t),this._panOffset.add(fn)}_panUp(t,e){this.screenSpacePanning===!0?fn.setFromMatrixColumn(e,1):(fn.setFromMatrixColumn(e,0),fn.crossVectors(this.object.up,fn)),fn.multiplyScalar(t),this._panOffset.add(fn)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;fn.copy(s).sub(this.target);let r=fn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Fn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Fn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Fn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Fn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new St,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Wy(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Xy(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Yy(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(dd),this.state=Oe.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function qy(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case zs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Oe.DOLLY;break;case zs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Oe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Oe.ROTATE}break;case zs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Oe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Oe.PAN}break;default:this.state=Oe.NONE}this.state!==Oe.NONE&&this.dispatchEvent(Bh)}function Zy(n){switch(this.state){case Oe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Oe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Oe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Ky(n){this.enabled===!1||this.enableZoom===!1||this.state!==Oe.NONE||(n.preventDefault(),this.dispatchEvent(Bh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(dd))}function Jy(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function $y(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case yi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Oe.TOUCH_ROTATE;break;case yi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Oe.TOUCH_PAN;break;default:this.state=Oe.NONE}break;case 2:switch(this.touches.TWO){case yi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Oe.TOUCH_DOLLY_PAN;break;case yi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Oe.TOUCH_DOLLY_ROTATE;break;default:this.state=Oe.NONE}break;default:this.state=Oe.NONE}this.state!==Oe.NONE&&this.dispatchEvent(Bh)}function jy(n){switch(this._trackPointer(n),this.state){case Oe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Oe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Oe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Oe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Oe.NONE}}function Qy(n){this.enabled!==!1&&n.preventDefault()}function t1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function e1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Qa(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new ze,l=0;for(let h=0;h<n.length;++h){let f=n[h],u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0,f=[];for(let u=0;u<n.length;++u){let d=n[u].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+h);h+=n[u].attributes.position.count}c.setIndex(f)}for(let h in r){let f=pd(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let M=0;M<o[h].length;++M)d.push(o[h][M][u]);let g=pd(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function pd(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){let h=n[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new En(o,e,i),c=0;for(let l=0;l<n.length;++l){let h=n[l];if(h.isInterleavedBufferAttribute){let f=c/e;for(let u=0,d=h.count;u<d;u++)for(let g=0;g<e;g++){let M=h.getComponent(u,g);a.setComponent(u+f,g,M)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Bs=16,Hs=8,kh=6;function gd(n){return()=>(n=n*1664525+1013904223>>>0,n/4294967296)}var n1=n=>"#"+("00000"+n.toString(16)).slice(-6);function qe(n,t){let e=Math.min(255,Math.max(0,(n>>16&255)*t)),i=Math.min(255,Math.max(0,(n>>8&255)*t)),s=Math.min(255,Math.max(0,(n&255)*t));return"rgb("+(e|0)+","+(i|0)+","+(s|0)+")"}var $t={noise:(n,t)=>(e,i)=>{for(let s=0;s<16;s++)for(let r=0;r<16;r++)e.fillStyle=qe(n,1-t/2+i()*t),e.fillRect(s,r,1,1)},grassTop:(n,t)=>{$t.noise(11132046,.16)(n,t);for(let e=0;e<14;e++)n.fillStyle=qe(9423992,.95+t()*.1),n.fillRect(t()*16|0,t()*16|0,1,1)},grassSide:(n,t)=>{$t.dirt(n,t);for(let e=0;e<16;e++){let i=3+(t()*2.2|0);for(let s=0;s<i;s++)n.fillStyle=qe(11132046,.9+t()*.15),n.fillRect(e,s,1,1)}},dirt:(n,t)=>{$t.noise(12094050,.18)(n,t);for(let e=0;e<10;e++)n.fillStyle=qe(10121296,1),n.fillRect(t()*16|0,t()*16|0,1,1)},stone:(n,t)=>{$t.noise(11842232,.12)(n,t);for(let e=0;e<6;e++){n.fillStyle=qe(10263202,1);let i=t()*14|0,s=t()*16|0;n.fillRect(i,s,2+(t()*3|0),1)}},sand:(n,t)=>$t.noise(15983286,.1)(n,t),pathTop:(n,t)=>{$t.noise(15324068,.14)(n,t);for(let e=0;e<12;e++)n.fillStyle=qe(13810058,1),n.fillRect(t()*16|0,t()*16|0,1,1)},pathSide:(n,t)=>{$t.dirt(n,t),n.fillStyle=qe(15324068,1),n.fillRect(0,0,16,2)},snowTop:(n,t)=>$t.noise(16514047,.05)(n,t),snowSide:(n,t)=>{$t.stone(n,t);for(let e=0;e<16;e++){let i=3+(t()*3|0);n.fillStyle=qe(16514047,.97+t()*.03),n.fillRect(e,0,1,i)}},logSide:(n,t)=>{for(let e=0;e<16;e++){let i=e%4===0?8215104:10121298;for(let s=0;s<16;s++)n.fillStyle=qe(i,.9+t()*.2),n.fillRect(e,s,1,1)}},logTop:(n,t)=>{$t.noise(14267267,.08)(n,t),n.strokeStyle=qe(11569760,1),n.lineWidth=1,[6,3].forEach(e=>{n.strokeRect(8-e+.5,8-e+.5,e*2-1,e*2-1)}),n.strokeStyle=qe(9071180,1),n.strokeRect(.5,.5,15,15)},leaves:n=>(t,e)=>{$t.noise(n,.22)(t,e);for(let i=0;i<22;i++)t.fillStyle=qe(n,.72),t.fillRect(e()*16|0,e()*16|0,1,1);for(let i=0;i<10;i++)t.fillStyle=qe(n,1.12),t.fillRect(e()*16|0,e()*16|0,1,1)},water:(n,t)=>{$t.noise(6991592,.08)(n,t);for(let e=0;e<7;e++)n.fillStyle="rgba(255,255,255,0.55)",n.fillRect(t()*13|0,t()*16|0,2+(t()*3|0),1)},birch:(n,t)=>{$t.noise(16052454,.06)(n,t);for(let e=0;e<8;e++)n.fillStyle="#5a5050",n.fillRect(t()*14|0,t()*16|0,2+(t()*2|0),1)},cobble:(n,t)=>{$t.noise(11052718,.1)(n,t),n.fillStyle=qe(8684172,1);for(let e=0;e<16;e+=4){n.fillRect(0,e,16,1);for(let i=e/4%2*3;i<16;i+=6)n.fillRect(i,e,1,4)}},deep:(n,t)=>$t.noise(9341592,.16)(n,t),clay:(n,t)=>{$t.noise(12950138,.12)(n,t);for(let e=3;e<16;e+=5)n.fillStyle=qe(11765610,1),n.fillRect(0,e,16,1)},gravel:(n,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++)n.fillStyle=qe([12433068,11051414,13814720][t()*3|0],1),n.fillRect(e,i,1,1)},planks:(n,t)=>{for(let e=0;e<16;e++){let i=e%4===3;for(let s=0;s<16;s++)n.fillStyle=i?"#9a7254":qe(13936760,.92+t()*.12),n.fillRect(s,e,1,1)}for(let e=0;e<16;e+=4)n.fillStyle="#9a7254",n.fillRect(e*3%16,e,1,3)},mossy:(n,t)=>{$t.cobble(n,t);for(let e=0;e<40;e++)n.fillStyle=qe(9423992,.9+t()*.2),n.fillRect(t()*16|0,t()*16|0,1,1)},shingle:(n,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=e>>2,r=e%4===3||(i+s*4)%8===0;n.fillStyle=qe(16777215,r?.78:.94+t()*.06),n.fillRect(i,e,1,1)}},plaster:(n,t)=>$t.noise(16777215,.07)(n,t),plankGrey:(n,t)=>{for(let e=0;e<16;e++){let i=e%4===3;for(let s=0;s<16;s++)n.fillStyle=qe(16777215,i?.72:.9+t()*.1),n.fillRect(s,e,1,1)}},glass:(n,t)=>{n.fillStyle="#d8f1fa",n.fillRect(0,0,16,16),n.fillStyle="#ffffff",n.fillRect(3,3,1,4),n.fillRect(4,3,1,2),n.fillRect(10,9,1,3),n.fillStyle="#bcd9e6",n.fillRect(0,0,16,1),n.fillRect(0,15,16,1),n.fillRect(0,0,1,16),n.fillRect(15,0,1,16),n.fillRect(7,0,2,16),n.fillRect(0,7,16,2)},bricks:(n,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=e%4===3||(i+(e>>2)%2*4)%8===7;n.fillStyle=s?"#e9e2d6":qe(16777215,.86+t()*.08),n.fillRect(i,e,1,1)}},stoneBrick:(n,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=e%8===7||(i+(e>>3)*8)%16===15;n.fillStyle=s?"#8c8a94":qe(11973820,.9+t()*.12),n.fillRect(i,e,1,1)}},farmland:(n,t)=>{$t.noise(8018496,.14)(n,t);for(let e=1;e<16;e+=4)n.fillStyle="#5e4430",n.fillRect(0,e,16,1)},sprucePlank:(n,t)=>{for(let e=0;e<16;e++){let i=e%4===3;for(let s=0;s<16;s++)n.fillStyle=i?"#5e4430":qe(9069640,.9+t()*.12),n.fillRect(s,e,1,1)}for(let e=0;e<16;e+=4)n.fillStyle="#5e4430",n.fillRect(e*5%16,e,1,3)},wheat:(n,t)=>{for(let e=1;e<15;e+=2){let i=9+(t()*5|0);n.fillStyle="#c9b45a",n.fillRect(e,16-i,1,i),n.fillStyle="#f2d36b",n.fillRect(e,16-i,1,4)}},carrot:(n,t)=>{for(let e=2;e<14;e+=3)n.fillStyle="#6faa5e",n.fillRect(e,7,1,6),n.fillRect(e+1,8,1,3),n.fillStyle="#f2963a",n.fillRect(e,13,2,3)},sprout:(n,t)=>{for(let e=1;e<15;e+=3)n.fillStyle="#7fc46a",n.fillRect(e+1,10,1,6),n.fillRect(e,10,3,1),n.fillRect(e+2,12,1,1)},tuft:(n,t)=>{for(let e=1;e<15;e+=2){let i=5+(t()*7|0);n.fillStyle=qe(9423992,.85+t()*.25),n.fillRect(e,16-i,1,i)}},flower:n=>(t,e)=>{t.fillStyle="#6faa5e",t.fillRect(7,8,2,8),t.fillRect(5,11,2,1),t.fillRect(9,13,2,1),t.fillStyle=n1(n),t.fillRect(6,4,4,3),t.fillRect(5,5,6,1),t.fillStyle="#fff6b0",t.fillRect(7,5,2,1)},reed:(n,t)=>{n.fillStyle="#7cb86f";for(let e=3;e<14;e+=3)n.fillRect(e,2+(t()*4|0),1,14);n.fillStyle="#a77a52",n.fillRect(6,2,2,4)},lily:(n,t)=>{n.fillStyle="#84c784",n.beginPath(),n.arc(8,8,6.5,.3,Math.PI*2-.3),n.lineTo(8,8),n.fill(),n.fillStyle="#ffb6c1",n.fillRect(9,6,2,2)}},mt={GRASS_TOP:0,GRASS_SIDE:1,DIRT:2,STONE:3,SAND:4,PATH_TOP:5,PATH_SIDE:6,SNOW_TOP:7,SNOW_SIDE:8,LOG:9,LOG_TOP:10,LEAF_G:11,LEAF_M:12,LEAF_L:13,LEAF_P:14,WATER:15,BIRCH:16,COBBLE:17,DEEP:18,CLAY:19,GRAVEL:20,PLANKS:21,MOSSY:22,LEAF_T:23,TUFT:24,FL_PINK:25,FL_WHITE:26,FL_YELLOW:27,FL_BLUE:28,FL_LAV:29,REED:30,LILY:31,SHINGLE:32,PLASTER:33,PLANK_GREY:34,GLASS:35,BRICKS:36,STONE_BRICK:37,FARMLAND:38,SPRUCE_PLANK:39,WHEAT:40,CARROT:41,SPROUT:42},xd=[$t.grassTop,$t.grassSide,$t.dirt,$t.stone,$t.sand,$t.pathTop,$t.pathSide,$t.snowTop,$t.snowSide,$t.logSide,$t.logTop,$t.leaves(8834168),$t.leaves(8178084),$t.leaves(11196796),$t.leaves(16167880),$t.water,$t.birch,$t.cobble,$t.deep,$t.clay,$t.gravel,$t.planks,$t.mossy,$t.leaves(7320465),$t.tuft,$t.flower(16752575),$t.flower(16777215),$t.flower(16769658),$t.flower(10473471),$t.flower(13809919),$t.reed,$t.lily,$t.shingle,$t.plaster,$t.plankGrey,$t.glass,$t.bricks,$t.stoneBrick,$t.farmland,$t.sprucePlank,$t.wheat,$t.carrot,$t.sprout],as=null;function i1(){if(as)return as;let n=document.createElement("canvas");n.width=Bs*Hs,n.height=Bs*kh;let t=n.getContext("2d");return xd.forEach((e,i)=>{t.save(),t.translate(i%Hs*Bs,Math.floor(i/Hs)*Bs),t.beginPath(),t.rect(0,0,Bs,Bs),t.clip(),e(t,gd(101+i*7)),t.restore()}),as=new _n(n),as.magFilter=rn,as.minFilter=rn,as.generateMipmaps=!1,as.colorSpace=De,as}var Hh=new Map;function hi(n){if(Hh.has(n))return Hh.get(n);let t=document.createElement("canvas");t.width=t.height=Bs,xd[n](t.getContext("2d"),gd(101+n*7));let e=new _n(t);return e.magFilter=rn,e.minFilter=rn,e.generateMipmaps=!1,e.wrapS=e.wrapT=ao,e.colorSpace=De,Hh.set(n,e),e}var md=n=>{let t=n%Hs/Hs,e=1-(Math.floor(n/Hs)+1)/kh,i=8e-4;return[t+i,e+i,t+1/Hs-i,e+1/kh-i]},It={AIR:0,GRASS:1,DIRT:2,STONE:3,SAND:4,PATH:5,SNOW:6,LOG:7,LEAF_G:8,LEAF_M:9,LEAF_L:10,LEAF_P:11,WATER:12,BIRCH:13,COBBLE:14,DEEP:15,CLAY:16,GRAVEL:17,LEAF_T:18,MOSSY:19,PLANKS:20,BRICK:21,FARM:22},je=[];je[It.GRASS]=[mt.GRASS_TOP,mt.GRASS_SIDE,mt.DIRT];je[It.DIRT]=[mt.DIRT,mt.DIRT,mt.DIRT];je[It.STONE]=[mt.STONE,mt.STONE,mt.STONE];je[It.SAND]=[mt.SAND,mt.SAND,mt.SAND];je[It.PATH]=[mt.PATH_TOP,mt.PATH_SIDE,mt.DIRT];je[It.SNOW]=[mt.SNOW_TOP,mt.SNOW_SIDE,mt.STONE];je[It.LOG]=[mt.LOG_TOP,mt.LOG,mt.LOG_TOP];je[It.BIRCH]=[mt.LOG_TOP,mt.BIRCH,mt.LOG_TOP];je[It.LEAF_G]=[mt.LEAF_G,mt.LEAF_G,mt.LEAF_G];je[It.LEAF_M]=[mt.LEAF_M,mt.LEAF_M,mt.LEAF_M];je[It.LEAF_L]=[mt.LEAF_L,mt.LEAF_L,mt.LEAF_L];je[It.LEAF_P]=[mt.LEAF_P,mt.LEAF_P,mt.LEAF_P];je[It.LEAF_T]=[mt.LEAF_T,mt.LEAF_T,mt.LEAF_T];je[It.WATER]=[mt.WATER,mt.WATER,mt.WATER];je[It.COBBLE]=[mt.COBBLE,mt.COBBLE,mt.COBBLE];je[It.DEEP]=[mt.DEEP,mt.DEEP,mt.DEEP];je[It.CLAY]=[mt.CLAY,mt.CLAY,mt.CLAY];je[It.GRAVEL]=[mt.GRAVEL,mt.GRAVEL,mt.GRAVEL];je[It.BRICK]=[mt.STONE_BRICK,mt.STONE_BRICK,mt.STONE_BRICK];je[It.FARM]=[mt.FARMLAND,mt.DIRT,mt.DIRT];je[It.MOSSY]=[mt.MOSSY,mt.MOSSY,mt.MOSSY];je[It.PLANKS]=[mt.PLANKS,mt.PLANKS,mt.PLANKS];var tc=n=>n===It.LEAF_G||n===It.LEAF_M||n===It.LEAF_L||n===It.LEAF_P||n===It.LEAF_T,Do=class{constructor(t,e,i,s,r,o){Object.assign(this,{x0:t,y0:e,z0:i,sx:s,sy:r,sz:o}),this.d=new Uint8Array(s*r*o),this.plants=[],this.tint=new Map}idx(t,e,i){let s=t-this.x0,r=e-this.y0,o=i-this.z0;return s<0||r<0||o<0||s>=this.sx||r>=this.sy||o>=this.sz?-1:(r*this.sz+o)*this.sx+s}get(t,e,i){let s=this.idx(t,e,i);return s<0?0:this.d[s]}set(t,e,i,s){let r=this.idx(t,e,i);r>=0&&(this.d[r]=s)}top(t,e){for(let i=this.y0+this.sy-1;i>=this.y0;i--){let s=this.get(t,i,e);if(s&&s!==It.WATER)return i}return null}plant(t,e,i,s,r){this.plants.push([t,e,i,s,r||1])}build(t){let e={p:[],n:[],u:[],c:[]},i={p:[],n:[],u:[],c:[]},s=[{d:[1,0,0],v:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],s:1,b:.84},{d:[-1,0,0],v:[[0,0,1],[0,1,1],[0,1,0],[0,0,0]],s:1,b:.84},{d:[0,1,0],v:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],s:0,b:1},{d:[0,-1,0],v:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],s:2,b:.62},{d:[0,0,1],v:[[1,0,1],[1,1,1],[0,1,1],[0,0,1]],s:1,b:.92},{d:[0,0,-1],v:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],s:1,b:.76}],r=t==null?.88:t;for(let u=0;u<this.sy;u++)for(let d=0;d<this.sz;d++)for(let g=0;g<this.sx;g++){let M=this.d[(u*this.sz+d)*this.sx+g];if(!M)continue;let x=this.x0+g,m=this.y0+u,w=this.z0+d,E=je[M];if(!E)continue;let b=this.tint.get((u*this.sz+d)*this.sx+g)||1;s.forEach(V=>{let L=this.get(x+V.d[0],m+V.d[1],w+V.d[2]);if(M===It.WATER){if(L!==It.AIR)return}else if(L&&L!==It.WATER&&!(tc(L)&&!tc(M)))return;if(tc(M)&&tc(L))return;let D=M===It.WATER?i:e,[z,A,S,B]=md(E[V.s]),Z=M===It.WATER&&this.get(x,m+1,w)!==It.WATER,N=V.v.map(([_t,Tt,dt])=>[x+_t,m+(Z&&Tt===1?r:Tt),w+dt]),W=V.b*b,q=W,Y=W,ft=W;if(M!==It.WATER&&L===It.WATER){let _t=0,Tt=x+V.d[0],dt=w+V.d[2];for(let ye=m+V.d[1];this.get(Tt,ye,dt)===It.WATER&&_t<6;ye++)_t++;let Xt=Math.max(.32,1-.2*_t);q=W*Xt*.62,Y=W*Xt*.82,ft=W*Math.min(1,Xt*1.05)}let $=V.d[1]!==0?[[z,A],[S,A],[S,B],[z,B]]:[[z,A],[z,B],[S,B],[S,A]];[0,1,2,0,2,3].forEach(_t=>{D.p.push(...N[_t]),D.n.push(...V.d),D.u.push(...$[_t]),D.c.push(q,Y,ft)})})}let o=u=>{let d=new ze;return d.setAttribute("position",new xe(u.p,3)),d.setAttribute("normal",new xe(u.n,3)),d.setAttribute("uv",new xe(u.u,2)),d.setAttribute("color",new xe(u.c,3)),d},a=i1(),c=new Pt(o(e),new Ee({map:a,vertexColors:!0}));c.castShadow=!0,c.receiveShadow=!0,c.userData.keepBatch=!0;let l=new Pt(o(i),new Ee({map:a,vertexColors:!0,transparent:!0,opacity:.84,depthWrite:!1}));l.receiveShadow=!0,l.userData.keepBatch=!0,l.renderOrder=1;let h={p:[],n:[],u:[],c:[]};this.plants.forEach(([u,d,g,M,x])=>{let[m,w,E,b]=md(M),V=.9*x,L=.45*x;[[[-L,-L],[L,L]],[[-L,L],[L,-L]]].forEach(([[D,z],[A,S]])=>{let B=[[u+D,d,g+z],[u+A,d,g+S],[u+A,d+V,g+S],[u+D,d+V,g+z]],Z=[[m,w],[E,w],[E,b],[m,b]];[0,1,2,0,2,3].forEach(N=>{h.p.push(...B[N]),h.n.push(0,1,0),h.u.push(...Z[N]),h.c.push(1,1,1)})})});let f=new Pt(o(h),new Ee({map:a,vertexColors:!0,alphaTest:.5,side:An}));return f.userData.keepBatch=!0,{solid:c,water:l,plants:f}}};function cs(n,t,e,i,s,r){let o={oak:[It.LEAF_G,It.LEAF_L][r()*2|0],birch:It.LEAF_L,mint:It.LEAF_M,cherry:It.LEAF_P,pine:It.LEAF_T}[s]||It.LEAF_G,a=s==="birch"?It.BIRCH:It.LOG,c=(h,f,u,d)=>{n.get(h,f,u)||n.set(h,f,u,d)};if(s==="pine"){let h=6+(r()*3|0);for(let u=0;u<h;u++)n.set(t,e+u,i,It.LOG);let f=2;for(let u=2;u<=h;u++){let d=u===h?0:(h-u)%2===0?Math.max(1,f-1):f;for(let g=-d;g<=d;g++)for(let M=-d;M<=d;M++)Math.abs(g)+Math.abs(M)<=d+(d>1?0:1)&&!(g===0&&M===0&&u<h)&&c(t+g,e+u,i+M,o);u%2===0&&f>1&&u>h/2&&f--}c(t,e+h,i,o),c(t,e+h+1,i,o);return}let l=(s==="birch"?5:4)+(r()*2|0);for(let h=0;h<l;h++)n.set(t,e+h,i,a);for(let h=l-2;h<=l+1;h++){let f=h>=l?1:2;for(let u=-f;u<=f;u++)for(let d=-f;d<=f;d++)f===2&&Math.abs(u)===2&&Math.abs(d)===2&&r()<.75||h===l+1&&Math.abs(u)+Math.abs(d)>1||c(t+u,e+h,i+d,o)}}function _d(n,t,e,i){let s=n.attributes.uv,r=[[i,e],[i,e],[t,i],[t,i],[t,e],[t,e]];for(let o=0;o<6;o++)for(let a=0;a<4;a++){let c=o*4+a;s.setXY(c,s.getX(c)*r[o][0],s.getY(c)*r[o][1])}return s.needsUpdate=!0,n}var Rr=16,Uo=n=>{if(typeof n=="number")return n;if(!n)return 16777215;if(n[0]==="#")return parseInt(n.length===4?n.slice(1).split("").map(e=>e+e).join(""):n.slice(1,7),16);let t=n.match(/(\d+)\D+(\d+)\D+(\d+)/);return t?+t[1]<<16|+t[2]<<8|+t[3]:16777215},Mi=(n,t)=>{n=Uo(n);let e=i=>Math.max(0,Math.min(255,Math.round(i*t)));return e(n>>16&255)<<16|e(n>>8&255)<<8|e(n&255)},ls=(n,t,e)=>{let i=n*374761393+t*668265263+e*2147483647|0;return i=(i^i>>>13)*1274126177,((i^i>>>16)>>>0)/4294967296};function r1(){let n=new Map,t=new Map,e=(s,r,o)=>s+","+r+","+o,i={S:n,G:t,put(s,r,o,a,c){s=Math.round(s),r=Math.round(r),o=Math.round(o),!(r<0)&&(c&&n.has(e(s,r,o))||((c?t:n).set(e(s,r,o),Uo(a)),c||t.delete(e(s,r,o))))},del(s,r,o){n.delete(e(s,r,o)),t.delete(e(s,r,o))},has(s,r,o){return n.has(e(s,r,o))},each(s){for(let r=0;r<20;r++)for(let o=-2;o<Rr+2;o++)for(let a=-2;a<Rr+2;a++)s(a,r,o)},fill(s,r,o){i.each((a,c,l)=>{s(a+.5,c+.5,l+.5)&&i.put(a,c,l,typeof r=="function"?r(a,c,l):r,o)})},cuboid(s,r,o,a,c,l,h,f){for(let u=r;u<c;u++)for(let d=o;d<l;d++)for(let g=s;g<a;g++)i.put(g,u,d,typeof h=="function"?h(g,u,d):h,f)},cyl(s,r,o,a,c,l,h,f,u){h=h==null?o:h;for(let d=a;d<c;d++){let g=c-a<=1?o:o+(h-o)*(d-a)/(c-a-1);for(let M=-2;M<Rr+2;M++)for(let x=-2;x<Rr+2;x++){let m=Math.hypot(x+.5-s,M+.5-r);m<=g&&(!f||m>g-f)&&i.put(x,d,M,typeof l=="function"?l(x,d,M):l,u)}}},ell(s,r,o,a,c,l,h,f){i.fill((u,d,g)=>{let M=(u-s)/a,x=(d-r)/c,m=(g-o)/l;return M*M+x*x+m*m<=1&&(!f||f(u,d,g))},h)},log(s,r,o,a,c,l){for(let h=s;h<r;h++)for(let f=0;f<20;f++)for(let u=-2;u<Rr+2;u++)Math.hypot(f+.5-o,u+.5-a)<=c&&i.put(h,f,u,typeof l=="function"?l(h,f,u):l)},top(s,r){for(let o=19;o>=0;o--)if(i.has(s,o,r))return o;return-1},sprinkle(s,r,o,a){s.forEach(([c,l],h)=>{let f=r[h%r.length];if(!f)return;let u=-1;for(let d=0;d<(a||o||1);d++)for(let g=0;g<(o||1);g++)u=Math.max(u,i.top(c+g,l+d));for(let d=0;d<(a||o||1);d++)for(let g=0;g<(o||1);g++)i.put(c+g,u+1,l+d,f)})}};return i}var ut=8,Vh=[[4,5],[9,4],[6,9],[10,9],[3,8],[8,11],[11,6],[5,12]],yd={bowl(n,t){n.cyl(ut,ut,3.2,0,1,14930886),n.cyl(ut,ut,3.2,1,2,16777215),n.cyl(ut,ut,3.8,2,6,t.soup||"#f3d9a8",6.2),n.cyl(ut,ut,4.2,1,7,(e,i)=>i===6?16165309:Mi(16777215,.93+i*.012),7.6,1.2),t.noodle&&n.fill((e,i,s)=>i>5&&i<6.9&&Math.hypot(e-ut,s-ut)<5.6&&(Math.floor(e)+Math.floor(s)*2)%5===0,t.noodle),n.sprinkle(Vh.slice(0,6),t.top||[],2,2),t.egg&&(n.cuboid(9,6,9,12,7,11,16777215),n.put(10,7,10,16761402))},pot(n,t){n.cyl(ut,ut,6.8,0,6,(e,i)=>i===5?10132136:9079448,6.8,1.1),n.cyl(ut,ut,6,0,1,7631999),n.cyl(ut,ut,5.8,1,5,t.soup||"#e8603f"),n.cuboid(0,4,7,1,5,9,7631999),n.cuboid(15,4,7,16,5,9,7631999),n.sprinkle(Vh,t.top||[],2,1)},plate(n,t){n.cyl(ut,ut,6.4,0,1,15260879),n.cyl(ut,ut,7.8,1,2,16777215),n.cyl(ut,ut,6.2,1,2,16183014),t.rice&&n.ell(t.main?5.5:ut,2,ut,t.main?3.6:5,2.8,t.main?4.2:4.6,(e,i,s)=>Mi(t.rice,.94+ls(e,i,s)*.1),(e,i)=>i>=2),t.sauce&&n.cyl(t.rice?10.5:ut,ut,t.rice?3.4:5.2,2,3,t.sauce),t.main&&(n.cuboid(8,2,5,13,4,11,t.main),n.cuboid(8,4,5,13,5,11,Mi(t.main,1.2))),t.egg&&(n.cyl(4.5,11.5,2.4,2,3,16777215),n.put(4,3,11,16761402)),t.veg&&(n.cuboid(11,2,11,14,3,13,t.veg),n.put(12,3,12,Mi(t.veg,.8))),n.sprinkle(Vh,t.dots||[],2,2)},bread(n){n.ell(ut,2.6,ut,7.2,2.6,2.8,15250538,(t,e)=>e>=0);for(let t=3;t<13;t++)for(let e=3;e<6;e++)for(let i=7;i<9;i++)n.del(t,e,i);for(let t=3;t<13;t++)n.put(t,3,7,["#ff8f7a","#7fc46a","#b5654a","#ffb3a3"][(t>>1)%4]),n.put(t,3,8,t%2?"#7fc46a":"#f6e0b8");[3,6,9,12].forEach(t=>{let e=n.top(t,6);n.put(t,e,6,13208126)})},xeo(n){n.fill((t,e,i)=>e<3&&i>=ut&&Math.hypot(t-ut,i-ut)<=7.2-(e>2?1:0),(t,e,i)=>Math.hypot(t-ut,i-ut)>6.3?14262842:e===2?16767338:16172618),[[5,"#ff9f8f"],[7,"#7fc46a"],[9,"#ffffff"],[11,"#7fc46a"]].forEach(([t,e])=>{n.put(t,0,7,e),n.put(t,1,7,e)})},rolls(n,t){n.cyl(ut,ut,7.6,0,1,16777215),[4,8,12].forEach(e=>n.log(2,14,2.6,e,1.7,(i,s,r)=>i===13||i===2?Uo(t.edge):t.fill&&ls(i,s,r)>.86?Uo(t.fill[(i+s)%2]):Mi(t.roll,.95+ls(i,s,r)*.12)))},bun(n,t){n.ell(ut,0,ut,6.2,6,6.2,(e,i,s)=>i>4&&Math.hypot(e-ut,s-ut)<1.8?14204580:t.bun,(e,i)=>i>=0),n.cyl(ut,ut,5,0,1,14930886)},skewer(n,t){n.cuboid(0,3,7,16,4,8,12883572),(t.bits||[]).forEach((e,i)=>n.cuboid(2+i*3,1,5,4+i*3+i%2,6,10,(s,r)=>r===5?Mi(e,1.2):e))},corn(n){n.log(2,13,2.8,ut,2.4,(t,e,i)=>(t+e+i)%2?16765803:15906874),n.cuboid(13,1,7,16,4,9,12883572),n.cuboid(5,0,3,13,1,6,8373354),n.cuboid(5,0,10,13,1,13,8373354),n.cuboid(6,1,4,11,2,5,6989914)},potato(n){n.ell(ut,2.4,ut,6.5,2.6,3.6,10111578,(t,e)=>e>=0);for(let t=4;t<13;t++)for(let e=7;e<10;e++){let i=n.top(t,e);n.put(t,i,e,16167770)}n.put(4,3,6,6961728),n.put(12,2,10,6961728)},sushi(n,t){[[2,4],[9,9]].forEach(([e,i])=>{n.cuboid(e,0,i,e+5,3,i+3,(s,r,o)=>Mi(16777215,.93+ls(s,r,o)*.08)),n.cuboid(e-1,3,i,e+6,4,i+3,t.fish||"#ff9f80"),n.cuboid(e,4,i,e+5,5,i+3,Mi(t.fish||"#ff9f80",1.12)),n.cuboid(e+2,0,i-1,e+3,5,i+4,3820090),n.cuboid(e+2,5,i,e+3,6,i+3,3820090)})},onigiri(n){n.fill((t,e,i)=>e<11&&i>5&&i<11&&Math.abs(t-ut)<=(11.5-e)*.55,(t,e,i)=>Mi(16777215,.94+ls(t,e,i)*.07)),n.cuboid(5,0,5,11,4,12,3820090)},balls(n,t){n.cyl(ut,ut,7.4,0,1,16777215),[[4,6],[9,5],[12,10],[6,11],[9,9]].forEach(([e,i])=>{n.ell(e,2.6,i,2.3,2.1,2.3,t.ball||"#d99a4e",(s,r)=>r>=1),n.put(e,4,i,t.sauce||"#7a3f2c"),n.put(e-1,4,i,t.sauce||"#7a3f2c"),n.put(e,5,i,8373354)})},kimbap(n){n.cyl(ut,ut,7.4,0,1,16777215),[[4,5],[11,6],[7,11]].forEach(([t,e])=>{n.cyl(t,e,2.8,1,4,3095088),n.cyl(t,e,2.1,1,4,16777215),n.put(t,3,e,16765803),n.put(t-1,3,e,16748378),n.put(t,3,e-1,8373354)})},dumpling(n){[[4,5],[11,6],[7,11]].forEach(([t,e],i)=>{n.ell(t,.5,e,3.6,2.6,2.4,(s,r)=>r===0?14921834:r>=2&&(s+i)%2?15259320:16313560,(s,r)=>r>=0)})},pizza(n){n.fill((t,e,i)=>e<2&&i>2&&Math.abs(t-ut)<=(15-i)*.55,(t,e)=>e===1?16765803:15250538),n.cuboid(1,0,1,15,3,3,14260814),n.cuboid(2,3,1,14,4,3,15250538),[[6,5],[9,6],[7,9],[8,12]].forEach(([t,e])=>n.cuboid(t,2,e,t+2,3,e+2,14241850)),[[5,7],[10,9],[8,4]].forEach(([t,e])=>n.put(t,2,e,8373354))},burger(n){n.cyl(ut,ut,6.2,0,2,15246666),n.cyl(ut,ut,6.6,2,3,8373354),n.cyl(ut,ut,6.4,3,5,8011564),n.cuboid(2,5,2,14,6,14,16765803),n.cyl(ut,ut,5.6,6,7,15224895),n.ell(ut,7,ut,6.4,4.6,6.4,15246666,(t,e)=>e>=7),[[5,6],[9,5],[7,9],[10,9],[6,11]].forEach(([t,e])=>n.put(t,n.top(t,e)+1,e,16774102))},fries(n){[[4,6],[6,8],[8,6],[10,8],[5,9],[9,9],[7,7],[11,6]].forEach(([t,e],i)=>n.cuboid(t,4,e,t+1,11+i%3,e+1,(s,r)=>r>=10+i%3?15906874:16765803)),n.cyl(ut,ut,4.6,0,9,15224895,5.4),n.cuboid(6,3,12,10,6,13,16777215)},drumstick(n){n.ell(6,3.6,ut,4.8,3.6,3.8,(t,e)=>e>5?15250538:14260814,(t,e)=>e>=0),n.log(10,14,3,ut,1.1,16775406),n.ell(14.2,3.4,7,1.4,1.4,1.4,16775406),n.ell(14.2,3.4,9,1.4,1.4,1.4,16775406)},hotdog(n){n.ell(ut,2,ut,7.2,2.4,3.4,15250538,(t,e,i)=>e>=0&&!(e>2&&Math.abs(i-ut)<1.2)),n.log(0,16,3.2,ut,1.6,14241850);for(let t=2;t<14;t++)n.put(t,5,ut-1+(t>>1)%2,16765803)},flan(n){n.cyl(ut,ut,7.4,0,1,16777215),n.cyl(ut,ut,5.4,1,7,(t,e)=>e===6?9062954:16767114,4.2),[[4,8],[11,7],[8,4],[7,12]].forEach(([t,e])=>{n.put(t,5,e,9062954),n.put(t,4,e,9062954)})},glass(n,t){n.cyl(ut,ut,3.6,0,13,15267583,3.6,.9,!0),n.cyl(ut,ut,3.6,0,1,13165810);let e=1;(t.layers||[]).forEach(i=>{n.cyl(ut,ut,2.8,e,e+3,i),e+=3}),n.cyl(ut,ut,2.8,e,e+1,t.top||"#ffffff"),n.cuboid(9,6,8,10,16,9,16748464)},cone(n,t){n.cyl(ut,ut,.8,0,8,(e,i,s)=>(e+i+s)%2?15250538:14260814,3.4),n.ell(ut,10.5,ut,4.4,4,4.4,t.scoop||"#ffb6d0"),n.put(ut,15,ut,15224895),n.put(ut,14,ut,15224895)},cake(n){n.cyl(ut,ut,6.2,0,6,(t,e,i)=>Math.hypot(t+.5-ut,i+.5-ut)>5.3&&(e===2||e===4)?16752575:16774112),n.cyl(ut,ut,6.4,6,7,16777215);for(let t=0;t<8;t++){let e=t/8*Math.PI*2;n.put(ut+Math.cos(e)*5,7,ut+Math.sin(e)*5,16777215)}n.cuboid(7,7,7,9,9,9,15224895),n.put(8,9,8,8373354)},donut(n){n.fill((t,e,i)=>{let s=Math.hypot(t-ut,i-ut);return e<4&&(s-4.4)**2+(e-1.6)**2<=2.9**2},(t,e)=>e>=2?16752575:15250538),[[4,6,16777215],[11,6,10473471],[6,11,16765803],[11,10,16777215],[8,3,10473471]].forEach(([t,e,i])=>n.put(t,n.top(t,e)+1,e,i))},cookie(n){n.cyl(ut,ut,6.6,0,2,(t,e,i)=>Mi(15250538,.95+ls(t,e,i)*.1)),n.cyl(ut,ut,5,2,3,15250538),[[5,6],[9,5],[7,9],[11,9],[5,11],[9,12]].forEach(([t,e])=>n.put(t,n.top(t,e),e,6961706))},mochi(n){n.cuboid(1,0,3,15,1,13,14207160),[[5,9,16765414],[11,9,13495501],[8,5,16774880]].forEach(([t,e,i])=>n.ell(t,1,e,3.2,3,3.2,i,(s,r)=>r>=1))},cup(n,t){n.cyl(ut,ut,3.2,0,12,15792383,3.9,.9,!0),n.cyl(ut,ut,3.2,0,1,13690610),n.cyl(ut,ut,2.4,1,10,t.drink||"#d9b08a",3),t.cream&&n.cyl(ut,ut,3,10,12,16777215),t.boba&&[[6,7],[8,9],[10,8],[7,10],[9,6]].forEach(([e,i])=>n.put(e,1,i,3811882)),t.ice&&[[6,7],[9,9]].forEach(([e,i])=>n.cuboid(e,9,i,e+2,11,i+2,16777215,!0)),t.slice&&n.fill((e,i,s)=>e>11&&e<13&&Math.hypot(i-11,s-ut)<2.4,(e,i,s)=>Math.hypot(i-11,s-ut)>1.6?16777215:Uo(t.slice)),n.cyl(ut,ut,4.2,12,13,14215410,4.2,.9,!0),n.cuboid(9,6,8,10,17,9,16748464)},coconut(n){n.ell(ut,4.6,ut,5.8,5,5.8,(t,e,i)=>ls(t,e,i)>.85?6989914:8373354,(t,e)=>e>=0&&e<9),n.cyl(ut,ut,3.2,8,9,16775920),n.cuboid(9,8,8,10,14,9,16748464)},mug(n,t){n.cyl(ut-1,ut,4.2,0,9,16777215,4.2,1),n.cyl(ut-1,ut,4.2,0,1,15128780),n.cyl(ut-1,ut,3.2,1,8,t.drink||"#c98a4a"),n.cuboid(11,2,7,13,3,9,16777215),n.cuboid(11,6,7,13,7,9,16777215),n.cuboid(12,3,7,13,6,9,16777215),[[6,10],[8,12],[7,14]].forEach(([e,i])=>n.put(e,i,ut,16777215,!0))}},o1=[[[1,0,0],[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],.86],[[-1,0,0],[[0,0,1],[0,1,1],[0,1,0],[0,0,0]],.86],[[0,1,0],[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],1],[[0,-1,0],[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],.6],[[0,0,1],[[1,0,1],[1,1,1],[0,1,1],[0,0,1]],.93],[[0,0,-1],[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],.93]];function Md(n,t,e,i){let s=[],r=[],o=[],a=[],c=new ce;n.forEach((h,f)=>{let[u,d,g]=f.split(",").map(Number),M=.94+ls(u,d,g)*.1;o1.forEach(([x,m,w])=>{let E=u+x[0]+","+(d+x[1])+","+(g+x[2]);if(n.has(E)||t&&t.has(E))return;c.setHex(h,De);let b=s.length/3;m.forEach(([V,L,D])=>{s.push((u+V-ut)*e,(d+L)*e,(g+D-ut)*e),r.push(x[0],x[1],x[2]),o.push(c.r*w*M,c.g*w*M,c.b*w*M)}),a.push(b,b+1,b+2,b,b+2,b+3)})});let l=new ze;return l.setAttribute("position",new xe(s,3)),l.setAttribute("normal",new xe(r,3)),l.setAttribute("color",new xe(o,3)),l.setIndex(a),new Pt(l,i)}var a1=new Ee({vertexColors:!0}),c1=new Ee({vertexColors:!0,transparent:!0,opacity:.42,depthWrite:!1}),Gh={};function Hi(n,t,e){let i=n+JSON.stringify(t||{});if(!Gh[i]){let c=r1();(yd[n]||yd.bowl)(c,t||{}),Gh[i]=c}let s=Gh[i],r=(e||.4)/Rr,o=new Kt,a=Md(s.S,null,r,a1);if(a.castShadow=!0,o.add(a),s.G.size){let c=Md(s.G,s.S,r,c1);c.renderOrder=2,o.add(c)}return o}var l1={land:{W:320,H:236,houses:[[16,116],[52,116],[88,116],[124,116],[172,116],[208,116],[244,116],[16,150],[52,150],[192,23],[66,24],[88,150],[124,150],[16,186],[52,186],[88,186],[124,187],[180,152]],hall:[134,38],pond:[264,206],pondR:[8,4],peak:{x:0,z:-42,R:29,Rp:15,H:16,lot:[24,16],house:[-3.5,-1.5],car:[3.5,4.8],swing:[-8.6,1.6]},back:-86,roads:[[8,110.5,312,110.5],[8,144.5,312,144.5],[8,180.5,206,180.5],[8,214.5,170,214.5],[46,110.5,46,214.5],[160,110.5,160,214.5]],river:[[310,-62],[306,-6],[300,62],[292,110.5],[288,144.5],[282,175],[272,194]],mountains:[[-40,-60,5,11],[-24,-76,6,14],[-4,-80,6,13],[18,-76,5.5,12],[36,-60,5,11]]},port:{W:200,H:360,houses:[[8,132],[8,184],[8,236],[8,288],[168,132],[168,184],[168,236],[168,288],[56,134],[132,51],[16,56],[88,134],[120,134],[56,186],[88,186],[120,186],[60,239],[116,239]],hall:[68,30],pond:[100,318],pondR:[6.5,3.6],peak:{x:0,z:-50,R:24,Rp:13,H:14,lot:[22,14],house:[-1.5,-1],car:[5,4.2],swing:[-7.8,1]},back:-96,roads:[[44.5,124.5,155.5,124.5],[44.5,124.5,44.5,330],[155.5,124.5,155.5,312],[44.5,162.5,155.5,162.5],[44.5,214.5,155.5,214.5],[44.5,274.5,155.5,274.5]],river:[[216,-120],[214,-30],[210,120],[206,230],[200,300],[170,330],[128,322]],mountains:[[-22,-80,5,10],[-6,-88,5,12],[10,-88,5,11],[25,-76,4.5,9]]}},dn,tn,Mn,ne,Pn,Fe,Ve,Bn,us,hs,vn,zn;function Dd(n){dn=l1[n];let t=(o,a)=>[(o-dn.W/2)/4,(a-dn.H/2)/4];tn=dn.houses.map(([o,a])=>t(o+12,a+11)),Mn=t(dn.hall[0],dn.hall[1]);let e=t(dn.pond[0],dn.pond[1]);ne={x:e[0],z:e[1],rx:dn.pondR[0],rz:dn.pondR[1]},Pn=dn.roads.map(([o,a,c,l])=>t(o,a).concat(t(c,l))),Bn=dn.river.map(([o,a])=>{let c=t(o,a);return{x:c[0],z:c[1]}}),us=dn.mountains.map(o=>[o[0],o[1],o[2]*1.25,o[3]*1.5]);{let o=Bn[0],a=0,c=1e9;us.forEach(([g,M],x)=>{let m=Math.hypot(g-o.x,M-o.z);m<c&&(c=m,a=x)});let l=us[a],h=Bn[1].x-l[0],f=Bn[1].z-l[1],u=Math.hypot(h,f)||1;l=us[a]=[l[0]+h/u*1.5,l[1]+f/u*1.5,Math.max(l[2],8),Math.max(l[3],18)],h=Bn[1].x-l[0],f=Bn[1].z-l[1],u=Math.hypot(h,f)||1,zn={i:a,x:l[0],z:l[1],r:l[2],h:l[3],dx:h/u,dz:f/u},Bn[0]={x:l[0]+zn.dx*l[2]*.45,z:l[1]+zn.dz*l[2]*.45};let d=Bn[Bn.length-1];Math.hypot(d.x-ne.x,d.z-ne.z)<22&&Bn.push({x:ne.x+(d.x-ne.x)*.25,z:ne.z+(d.z-ne.z)*.25})}hs=tn.map((o,a)=>dn.faces&&dn.faces[a]||0),h1();let i=dn.W/8+11,s=dn.H/8+11,r=dn.back||-s;Fe={a:i,b:(s-r)/2,cz:(s+r)/2,n:2.6,w:i*2,d:s-r}}var Gs=1.5;function h1(){let n=dn.peak,t={x:n.x,z:n.z,R:n.R,Rp:n.Rp,H:n.H};t.base=Z=>{if(Z<=t.Rp)return t.H;if(Z>=t.R)return 0;let N=(t.R-Z)/(t.R-t.Rp);return t.H*N*N*(3-2*N)};let e=t.Rp+2.2,i=t.R-1.5,s=[],r=Z=>{let N=Math.PI+Z*Math.PI*2,W=e+(i-e)*Z;return{x:t.x+Math.cos(N)*W,z:t.z+Math.sin(N)*W,y:t.base(W),s:Z}},o=Math.PI*2*(e+i)/2,a=Math.ceil(o/.5);for(let Z=0;Z<=a;Z++)s.push(r(Z/a));t.spiral=s,t.at=r;let[c,l]=n.lot;vn={house:9,x0:t.x-c/2,z0:t.z-l/2,x1:t.x+c/2,z1:t.z+l/2,car:[t.x+n.car[0],t.z+n.car[1]],swing:[t.x+n.swing[0],t.z+n.swing[1]]},tn[9]=[t.x+n.house[0],t.z+n.house[1]],hs[9]=0;let h={x:vn.car[0],z:vn.z1+1.6},f=s[0],u=[{x:h.x,z:h.z},{x:h.x,z:vn.z1+3.2},{x:f.x+.8,z:vn.z1+3.2},{x:f.x,z:f.z}];t.drive=u.map(Z=>({x:Z.x,z:Z.z,y:t.H}));let d=r(.5),g=d.x-t.x,M=d.z-t.z,x=Math.hypot(g,M);t.ledge={x:d.x-g/x*5.2,z:d.z-M/x*5.2,y:d.y,r:4.6},tn[10]=[t.ledge.x,t.ledge.z],hs[10]=Math.atan2(g,M),Mn=[t.x,t.z+t.R+5];let m=s[s.length-1],w=Pn.filter(Z=>Z[1]===Z[3]).reduce((Z,N)=>!Z||N[1]<Z[1]?N:Z,null),E=Math.min(w[0],w[2]),b=Math.max(w[0],w[2]);Pn.push([m.x,m.z,m.x,w[1]]),(m.x<E||m.x>b)&&Pn.push([m.x,w[1],m.x<E?E:b,w[1]]),t.foot={x:m.x,z:m.z};let V=.5,L=t.R+4,D=t.x-L,z=t.z-L,A=Math.ceil(L*2/V)+1,S=new Float32Array(A*A),B=t.drive.concat(s);for(let Z=0;Z<A;Z++)for(let N=0;N<A;N++){let W=D+N*V,q=z+Z*V,Y=Math.hypot(W-t.x,q-t.z),ft=t.base(Y),$=Math.hypot(W-t.ledge.x,q-t.ledge.z);$<t.ledge.r?ft=t.ledge.y:$<t.ledge.r+2.5&&(ft=vd(t.ledge.y,ft,Ed(($-t.ledge.r)/2.5)));let _t=1e9,Tt=0;for(let dt=1;dt<B.length;dt++){let Xt=B[dt-1],ye=B[dt],pt=ye.x-Xt.x,At=ye.z-Xt.z,Yt=pt*pt+At*At,Ct=Math.max(0,Math.min(1,((W-Xt.x)*pt+(q-Xt.z)*At)/(Yt||1))),zt=Math.hypot(W-(Xt.x+pt*Ct),q-(Xt.z+At*Ct));zt<_t&&(_t=zt,Tt=Xt.y+(ye.y-Xt.y)*Ct)}Y>t.Rp-.5&&(_t<Gs+.3?ft=Tt:_t<Gs+2.3&&(ft=vd(Tt,ft,Ed((_t-Gs-.3)/2)))),S[Z*A+N]=ft}t.grid={x0:D,z0:z,step:V,n:A,v:S},t.roadDist=(Z,N)=>{let W=1e9;for(let q=1;q<B.length;q++){let Y=B[q-1],ft=B[q];if(Math.abs(Z-Y.x)>6&&Math.abs(Z-ft.x)>6||Math.abs(N-Y.z)>6&&Math.abs(N-ft.z)>6)continue;let $=ft.x-Y.x,_t=ft.z-Y.z,Tt=$*$+_t*_t,dt=Math.max(0,Math.min(1,((Z-Y.x)*$+(N-Y.z)*_t)/(Tt||1)));W=Math.min(W,Math.hypot(Z-(Y.x+$*dt),N-(Y.z+_t*dt)))}return W},Ve=t}var vd=(n,t,e)=>n+(t-n)*e;function Ed(n){return n=Math.max(0,Math.min(1,n)),n*n*(3-2*n)}var Qh=(n,t,e)=>Math.hypot(n-Ve.x,t-Ve.z)<Ve.R+(e||0),sc=(n,t,e)=>Qh(n,t,2)&&Ve.roadDist(n,t)<Gs+(e||0),Kh=(n,t,e)=>Math.hypot(n-Ve.ledge.x,t-Ve.ledge.z)<Ve.ledge.r+(e||0);function Nn(n,t){let e=Ve&&Ve.grid;if(!e)return 0;let i=(n-e.x0)/e.step,s=(t-e.z0)/e.step;if(i<0||s<0||i>=e.n-1||s>=e.n-1)return 0;let r=Math.floor(i),o=Math.floor(s),a=i-r,c=s-o,l=e.n,h=e.v;return(h[o*l+r]*(1-a)+h[o*l+r+1]*a)*(1-c)+(h[(o+1)*l+r]*(1-a)+h[(o+1)*l+r+1]*a)*c}var Wh=(n,t,e)=>Qh(n,t,e||0)&&Math.hypot(n-Ve.x,t-Ve.z)>Ve.Rp-.5-(e||0)&&!sc(n,t,-(e||0))&&!Kh(n,t,-(e||0))&&Math.hypot(n-Ve.x,t-Ve.z)<Ve.R-1+(e||0);function Vs(n,t){let e=1e9;for(let i=1;i<Bn.length;i++){let s=Bn[i-1],r=Bn[i],o=r.x-s.x,a=r.z-s.z,c=o*o+a*a,l=Math.max(0,Math.min(1,((n-s.x)*o+(t-s.z)*a)/(c||1)));e=Math.min(e,Math.hypot(n-(s.x+o*l),t-(s.z+a*l)))}return e}var ec=(n,t,e)=>!!vn&&n>vn.x0-(e||0)&&n<vn.x1+(e||0)&&t>vn.z0-(e||0)&&t<vn.z1+(e||0),Ud=3,u1=2.1,f1=Ud,vi=f1/2;function Ir(n,t){let e=Fe,i=Math.abs(Math.cos(n)),s=Math.abs(Math.sin(n));return Math.pow(Math.pow(i/e.a,e.n)+Math.pow(s/e.b,e.n),-1/e.n)*(1+.035*Math.sin(3*n+.7)+.025*Math.sin(5*n+2.1)+.015*Math.sin(8*n))*(t||1)}function ki(n,t,e){let i=t-Fe.cz;return Math.hypot(n,i)<Ir(Math.atan2(i,n))-(e||0)}Dd("land");var bi={grass:12576420,grassSide:10474377,dirt:13214334,dirt2:11569768,road:15983293,wall:16774888,wall2:15785156,door:12882799,frame:15323828,trunk:11042910,leaf:[10147472,8834176,11460768],water:9425898,sand:15983549,lily:8701828,roof:{pink:16165309,peach:16368540,blue:10473444,lav:13219054,mint:10738109,yellow:16111752,hall:15834032},flower:[16758465,16777215,16375946,14273008,16763304]},Xh=new Map;function ge(n,t){let e=n+JSON.stringify(t||{});if(!Xh.has(e)){let i=Object.assign({color:n},t||{});!("map"in i)&&!i.noMap&&(i.map=hi(mt.PLASTER)),delete i.noMap,Xh.set(e,new Ee(i))}return Xh.get(e)}var Yh=new Map;function Ze(n,t,e){let i=n+":"+(t==null?"x":t)+JSON.stringify(e||{});return Yh.has(i)||Yh.set(i,new Ee(Object.assign({map:hi(n),color:t==null?16777215:t},e||{}))),Yh.get(i)}var qh=new Map;function Nd(n,t,e){let i=n.toFixed(3)+","+t.toFixed(3)+","+e.toFixed(3);return qh.has(i)||qh.set(i,_d(new ke(n,t,e),n,t,e)),qh.get(i)}function I(n,t,e,i,s=0,r=0,o=0,a){let c=new Pt(Nd(n,t,e),a&&a.isMaterial?a:ge(i,a));return c.position.set(s,r,o),c.castShadow=!0,c.receiveShadow=!0,c}function en(n,t,e,i,s=0,r=0,o=0,a){let c=new Pt(new ke(n,t,e),a&&a.isMaterial?a:ge(i,a));return c.position.set(s,r,o),c.castShadow=!0,c.receiveShadow=!0,c}function nc(n){return()=>(n=n*1664525+1013904223>>>0,n/4294967296)}var Gt=(n,t)=>n+Math.random()*(t-n),Hn=(n,t,e)=>n+(t-n)*e,Ei=(n,t,e=0)=>((n-ne.x)/(ne.rx+e))**2+((t-ne.z)/(ne.rz+e))**2<1;var tu=new $e({transparent:!0,opacity:0,depthWrite:!1}),eu=[],ac=[];function lc(){let n=new Ee({color:12576498,emissive:16765562,emissiveIntensity:0});return eu.push(n),n}function fs(n){let t=new Mo;t.moveTo(0,-.5),t.bezierCurveTo(-.9,.1,-.5,.75,0,.35),t.bezierCurveTo(.5,.75,.9,.1,0,-.5);let e=new ka(t,{depth:.18,bevelEnabled:!1,curveSegments:10});return new Pt(e,ge(n,{emissive:n,emissiveIntensity:.25}))}function d1(n,t,e){let i=new Kt,s=Ze(mt.SHINGLE,e),r=Ze(mt.SPRUCE_PLANK),o=t+1.6,a=0;for(;;a++){let c=o-a,l=a*.5+.25;if(c<=.6)break;i.add(I(n+1,.5,1,0,0,l,c/2-.5,s)),i.add(I(n+1,.5,1,0,0,l,-c/2+.5,s)),c>2.2&&i.add(I(n+.2,.5,c-2,0,0,l,0,r))}return i.add(I(n+1.2,.35,.6,0,0,a*.5+.1,0,r)),i.userData.h=a*.5+.3,i}function Od(){let n=new Ee({color:16773576,emissive:16761963,emissiveIntensity:0,map:hi(mt.PLASTER)});ac.push(n);let t=new Kt;return t.add(I(.3,.32,.3,0,0,0,0,n)),t.add(I(.34,.08,.34,4864564,0,.2,0)),t.add(I(.08,.12,.08,4864564,0,.3,0)),t}function bd(n,t){let e=new Kt,i=t?10:5,s=t?7:4,r=t?4:3,o=t?bi.roof.hall:bi.roof[n.roof]||bi.roof.pink,a=Ze(mt.STONE_BRICK),c=Ze(mt.COBBLE),l=Ze(mt.LOG),h=Ze(mt.PLANKS),f=Ze(mt.SPRUCE_PLANK);e.add(I(i+.5,.3,s+.5,0,0,.15,0,a)),e.add(I(i,.9,s,0,0,.3+.45,0,c)),e.add(I(i-.02,r-.9,s-.02,0,0,.3+.9+(r-.9)/2,0,t?Ze(mt.PLASTER,16774114):h));let u=t?[-i/2+.25,-2.6,2.6,i/2-.25]:[-i/2+.25,i/2-.25];[-1,1].forEach(D=>u.forEach(z=>e.add(I(.5,r,.5,0,z,.3+r/2,D*(s/2-.15),l)))),e.add(I(i+.3,.4,s+.3,0,0,.3+r-.2,0,f));let d=d1(i,s,o);d.position.y=.3+r,e.add(d);let g=d.userData.h,M=t?2:1,x=t?2.6:2,m=new Kt;m.position.set(-M/2,.3,s/2+.02),e.add(m),m.add(I(M,x,.12,0,M/2,x/2,0,f)),m.add(I(.12,.12,.08,16375946,M-.2,x/2,.08)),e.add(I(M-.04,x-.04,.05,4864560,0,.3+x/2,s/2-.02)),e.userData.hinge=m,e.add(I(M+1,.3,1,0,0,.15,s/2+.7,a)),e.add(I(M+1.2,.2,1,0,0,.3+x+.35,s/2+.5,f)),[-1,1].forEach(D=>{let z=Od();z.position.set(D*(M/2+.4),.3+x-.2,s/2+.2),e.add(z)});let w=lc();w.map=hi(mt.GLASS),e.userData.wm=w;let E=.3+(t?2.3:1.75),b=t?[-3.6,-1.5,1.5,3.6]:[-1.55,1.55];if(b.forEach(D=>{e.add(I(1.2,1.1,.12,0,D,E,s/2+.02,f)),e.add(I(1,.9,.14,0,D,E,s/2+.04,w))}),[-1,1].forEach(D=>{e.add(I(.12,1.1,1.2,0,D*(i/2+.02),E,0,f)),e.add(I(.14,.9,1,0,D*(i/2+.04),E,0,w))}),t||(b.forEach(D=>{e.add(I(1.2,.3,.4,0,D,E-.7,s/2+.22,f)),[-.35,0,.35].forEach((z,A)=>e.add(I(.22,.22,.22,bi.flower[A],D+z,E-.45,s/2+.22)))}),e.add(I(1,2,1,0,i/4,.3+r+g*.45,-s/5,c)),e.userData.chimney=new O(i/4,.3+r+g*.45+1.2,-s/5)),n&&n.heart){let D=fs(16744350);D.scale.setScalar(.9),D.position.set(0,.3+r+g*.42,s/2+.42),e.add(D),e.userData.heart=D}let V=null;if(t){[-1.5,1.5].forEach(A=>e.add(I(.6,r,.6,0,A,.3+r/2,s/2+.35,a))),e.add(I(i+.4,.4,1,0,0,.3+r+.1,s/2+.35,a)),e.add(I(.2,3,.2,0,0,.3+r+g+1.4,0,l));let D=I(1.4,.8,.08,16751536,.75,.3+r+g+2.4,0);e.add(D),e.userData.flag=D;let z=new Ee({color:16375946,emissive:16739179,emissiveIntensity:0,map:hi(mt.PLASTER)});V=new Pt(Nd(.7,.7,.7),z),V.position.set(0,.3+r+g*.42,s/2+.95),e.add(V),e.add(I(1.4,1.4,.1,0,0,.3+r+g*.42,s/2+.8,f))}e.userData.top=.3+r+g+(t?3.2:.6);let L=new Pt(new ke(i+.6,r+g+.3,s+.6),tu);return L.position.y=(r+g+.3)/2,e.add(L),e.userData.pick=L,e.userData.bell=V,e.userData.doorZ=s/2+1.3,e}function Jh(n,t,e){let i=document.createElement("canvas");i.width=t,i.height=e,n(i.getContext("2d"),t,e);let s=new _n(i);return s.colorSpace=De,s.anisotropy=4,s}function nu(n,t,e,i,s,r){r=r||0,n.userData.wm=s,n.userData.top=i+.9,n.userData.size={cx:r,hw:t/2+.4,hd:e/2+.3};let o=new Pt(new ke(t+.6,i+.3,e+.6),tu);return o.position.set(r,(i+.3)/2,0),n.add(o),n.userData.pick=o,n.userData.doorZ=e/2+1.3,n}function iu(n,t,e,i,s){let r=new Kt;r.position.set(-t/2,.3,i),n.add(r),r.add(I(t,e,.1,s,t/2,e/2,0)),r.add(I(.06,.5,.06,14278115,t-.2,e/2,.07)),n.add(I(t-.04,e-.04,.05,3814720,0,.3+e/2,i-.04)),n.userData.hinge=r}function p1(){let n=new Kt,t=6.4,e=5.2,i=3,s=2.8,r=lc();n.add(I(t+5.4,.25,e+.6,15328478,2.3,.12,0)),n.add(I(t,i,e,16513784,0,.25+i/2,0)),[-2.15,2.15].forEach(M=>{n.add(I(1.7,2.45,.08,3814720,M,.25+1.3,e/2+.01)),n.add(I(1.55,2.3,.1,0,M,.25+1.3,e/2+.03,r))}),iu(n,1.15,2.3,e/2+.03,9067068),n.add(I(t+.3,.18,e+.3,4867664,0,.25+i+.09,0));let o=.25+i+.18,a=Jh((M,x,m)=>{for(let w=0;w<x;w+=4)M.fillStyle=w%8?"#c99166":"#bb8358",M.fillRect(w,0,4,m)},64,16),c=new Ee({map:a}),l=new Pt(new ke(t-.6,s,e-.4),c);l.position.set(-.3,o+s/2,-.4),l.castShadow=!0,l.receiveShadow=!0,n.add(l),n.add(I(t-.3,.16,e-.1,4867664,-.3,o+s+.08,-.4));let h=e/2-.4+.01-.2;n.add(I(2.9,2.35,.08,3814720,-.3,o+1.2,h+.02));let f=new Pt(new ke(2.7,2.2,.06),new Ee({color:12576498,transparent:!0,opacity:.6,emissive:16765562,emissiveIntensity:0}));f.position.set(-.3,o+1.2,h+.06),n.add(f),eu.push(f.material),n.add(I(.05,2.2,.08,3814720,-.3,o+1.2,h+.08)),n.add(I(t-.4,.14,1.5,15328478,-.2,o+.07,e/2+.55));let u=new Pt(new ke(t-.5,.75,.04),new Ee({color:14217722,transparent:!0,opacity:.45}));u.position.set(-.2,o+.52,e/2+1.28),n.add(u),n.add(I(t-.5,.05,.07,3814720,-.2,o+.92,e/2+1.28)),[-2.5,-1.95,1.75,2.3].forEach((M,x)=>{n.add(I(.34,.32,.34,[15921906,9080729][x%2],M,o+.3,e/2+.95));let m=new Pt(new Va(.26,2),ge(bi.leaf[x%3],{}));m.position.set(M,o+.62,e/2+.95),m.castShadow=!0,n.add(m)});let d=fs(16744350);d.scale.setScalar(.55),d.material=new Ee({color:16744350,emissive:16732030,emissiveIntensity:.25}),d.position.set(-2.2,o+2.05,e/2-.55),n.add(d),n.userData.heart=d;let g=t/2+2.3;n.add(I(4.6,2.9,e,16513784,g,.25+1.45,0)),n.add(I(4.8,.16,e+.2,4867664,g,.25+2.98,0)),n.add(I(3.7,2.3,.08,5592926,g,.25+1.15,e/2+.02));for(let M=0;M<6;M++)n.add(I(3.7,.03,.1,7040630,g,.45+M*.38,e/2+.05));return n.add(I(.5,.05,.05,16777215,g+1.4,2.95,e/2+.12)),[-1,1].forEach(M=>n.add(I(.12,.85,.85,0,M*(t/2+.01)-(M>0,0),.25+1.6,-1.2,r))),n.userData.vip=!0,nu(n,t+4.6,e,o+s+.2,r,2.3)}function m1(){let n=new Kt,t=9.2,e=6.6,i=3.8,s=lc();n.add(I(t+.6,.25,e+.6,15326447,0,.12,0)),n.add(I(t,i,e,14273008,0,.25+i/2,0)),n.add(I(t+.4,.3,e+.4,16165309,0,.25+i+.15,0)),[-2.8,2.8].forEach(o=>{n.add(I(2.6,2,.1,16777215,o,1.5,e/2+.01)),n.add(I(2.4,1.8,.12,0,o,1.5,e/2+.03,s))}),iu(n,1.8,2.4,e/2+.03,15834032),[[-1.4,16773544],[0,16758465],[1.4,10934504]].forEach(([o,a])=>{let c=fs(a);c.scale.setScalar(.45),c.position.set(o,.25+i-.55,e/2+.02),n.add(c)});let r=new Pt(new yn(.55,20,14),ge(16027569));return r.position.set(3.2,.25+i+2.2,-1.5),r.castShadow=!0,n.add(r),n.add(I(.18,1.6,.18,3814720,3.2,.25+i+1.2,-1.5)),n.add(I(1.6,.3,1.6,3814720,3.2,.25+i+.45,-1.5)),nu(n,t,e,i+2.4,s)}function g1(){let n=new Kt,t=9.2,e=7,i=3.5,s=lc();n.add(I(t+.8,.22,e+.8,14605012,0,.11,0)),n.add(I(t,i,e,16513784,0,.22+i/2,0)),[[15895592,0],[3055195,.22],[14826299,.44]].forEach(([l,h])=>{n.add(I(t+.06,.2,e+.06,l,0,.22+i-.55-h,0))}),n.add(I(t+.5,.25,e+.5,15921906,0,.22+i+.12,0));let r=Jh((l,h,f)=>{l.fillStyle="#d8f1fa",l.fillRect(0,0,h,f);let u=["#ffb6c1","#f5d888","#a3d9bd","#a6d8e8","#f9c39c","#d9c9f0"];for(let d=0;d<4;d++){l.fillStyle="#c9e7f2",l.fillRect(0,12+d*28,h,3);for(let g=0;g<26;g++)l.fillStyle=u[(g+d)%u.length],l.fillRect(6+g*10,15+d*28,7,10+g%3*3)}},256,128),o=new Ee({map:r,emissive:16773836,emissiveMap:r,emissiveIntensity:.1});[-2.65,2.65].forEach(l=>{n.add(I(3.4,2,.08,14605012,l,1.35,e/2+.01));let h=new Pt(new ke(3.2,1.85,.1),o);h.position.set(l,1.35,e/2+.03),n.add(h)}),iu(n,1.7,2.3,e/2+.03,12576498);let a=Jh((l,h,f)=>{l.fillStyle="#ffffff",l.fillRect(0,0,h,f),l.fillStyle="#2e9e5b",l.fillRect(10,18,108,16),l.fillStyle="#f28c28",l.fillRect(10,40,108,16),l.fillStyle="#e23b3b",l.font="bold 86px sans-serif",l.textAlign="center",l.fillText("7",64,98),l.font="bold 20px sans-serif",l.fillText("ELEVEn",64,122)},128,128),c=new Pt(new ke(1.5,1.5,.14),[ge(16777215),ge(16777215),ge(16777215),ge(16777215),new Ee({map:a}),ge(16777215)]);return c.position.set(t/2-1.1,.22+i+1.05,e/2-.3),c.castShadow=!0,n.add(c),n.add(I(.12,.8,.12,14605012,t/2-1.1,.22+i+.35,e/2-.3)),[[15226446,-.5],[6131664,.45]].forEach(([l,h])=>{n.add(I(.8,1.8,.75,l,t/2+.45,1.12,e/2-1.2+h));let f=I(.04,.9,.55,0,t/2+.86,1.4,e/2-1.2+h,new Ee({color:16775126,emissive:16773808,emissiveIntensity:.25}));n.add(f)}),[-4,-3.2].forEach(l=>n.add(I(.5,.5,.5,15895592,l,.47,e/2+.9))),n.userData.alwaysLit=!0,nu(n,t,e,i+1.9,s)}function x1(){let n=new Kt,t=2500653,e=14278115,i=5202805;n.add(I(1.9,1,4.4,t,0,.95,0)),n.add(I(1.75,.78,2.7,t,0,1.85,-.35)),[[-1,0],[1,0]].forEach(([o])=>n.add(I(.03,.55,2.4,i,o*.885,1.9,-.35))),n.add(I(1.6,.55,.03,i,0,1.9,1.01)),n.add(I(1.6,.55,.03,i,0,1.9,-1.71)),n.add(I(1.92,.06,4.42,e,0,1.46,0)),n.add(I(1.3,.35,.05,1776672,0,1.05,2.21));for(let o=-2;o<=2;o++)n.add(I(.03,.3,.06,e,o*.22,1.05,2.22));[-1,1].forEach(o=>{let a=new Pt(new We(.17,.17,.08,14),ge(16775126,{emissive:16773808,emissiveIntensity:.35}));a.rotation.x=Math.PI/2,a.position.set(o*.72,1.12,2.22),n.add(a),n.add(I(.12,.12,.12,16754253,o*.95,1.5,1.95)),n.add(I(.22,.35,.05,14703183,o*.78,1,-2.22))}),n.add(I(1.94,.18,.2,1776672,0,.5,2.25)),n.add(I(1.94,.18,.2,1776672,0,.5,-2.25));let s=new Pt(new We(.4,.4,.24,16),ge(1776672));s.rotation.x=Math.PI/2,s.position.set(0,1.15,-2.35),n.add(s);let r=new Pt(new We(.22,.22,.26,12),ge(e));return r.rotation.x=Math.PI/2,r.position.set(0,1.15,-2.36),n.add(r),[[-.95,1.45],[.95,1.45],[-.95,-1.4],[.95,-1.4]].forEach(([o,a])=>{let c=new Pt(new We(.42,.42,.34,14),ge(1776672));c.rotation.z=Math.PI/2,c.position.set(o,.42,a),c.castShadow=!0,n.add(c);let l=new Pt(new We(.22,.22,.36,10),ge(e));l.rotation.z=Math.PI/2,l.position.set(o,.42,a),n.add(l)}),n.add(I(1.5,.05,2.2,3816514,0,2.27,-.35)),n}function _1(n,t){if(!vn)return{posts:[],blocks:[]};let e=vn,i={posts:[],blocks:[]},[s,r]=tn[e.house],[o,a]=e.car,c=t===Math.PI?e.z0:e.z1,l=Nn(s,r),h=[[s-1.2,s+1.2],[o-1.6,o+1.6]],f=(x,m)=>Math.abs(m-c)<.01&&h.some(([w,E])=>x>w&&x<E),u=(x,m,w,E)=>{let b=Math.hypot(w-x,E-m),V=Math.max(1,Math.round(b/1));for(let L=0;L<V;L++){let D=Hn(x,w,(L+.5)/V),z=Hn(m,E,(L+.5)/V);if(f(D,z))continue;let A=I(b/V+.02,.55,.22,16052716,D,l+.27,z);A.rotation.y=Math.atan2(w-x,E-m)+Math.PI/2,n.add(A);let S=I(b/V,.32,.3,8831614,D,l+.68,z);S.rotation.y=A.rotation.y,n.add(S),i.posts.push({x:D,z,r:.45})}};u(e.x0,e.z0,e.x1,e.z0),u(e.x1,e.z0,e.x1,e.z1),u(e.x1,e.z1,e.x0,e.z1),u(e.x0,e.z1,e.x0,e.z0),i.blocks.push({x:s+5.5,z:r,hw:2.5,hd:2.8});let d=Math.min(c,a)-1.5,g=Math.max(c,a)+.5;n.add(I(3.4,.05,Math.abs(g-d)+1.5,14144203,o,l+.025,(d+g)/2-.5));let M=x1();return M.position.set(o,l,a),M.rotation.y=t,n.add(M),i.blocks.push({x:o,z:a,hw:1.2,hd:2.4}),i.car=M,i.exit={x:o,z:c+(t===Math.PI?-1.6:1.6)},n.add(I(1.3,.05,Math.abs(r-c),15392719,s,l+.03,(r+c)/2)),i}function Sd(){let n=new Kt;n.add(I(.16,2.2,.16,9206379,0,1.1,0));let t=new Ee({color:16774351,emissive:16765562,emissiveIntensity:0});return ac.push(t),n.add(I(.5,.5,.5,0,0,2.45,0,t)),n.add(I(.62,.12,.62,9206379,0,2.76,0)),n}var y1=new Ee({vertexColors:!0});function Fd(n,t){let e=[];n.traverse(i=>{i.isMesh||e.push(i)}),e.forEach(i=>{let s=i.children.filter(c=>c.isMesh&&!(t&&t.includes(c))&&!c.material.transparent&&!c.material.map);if(s.length<2)return;let r=s.map(c=>{let l=c.geometry.clone();Object.keys(l.attributes).forEach(d=>{d!=="position"&&d!=="normal"&&l.deleteAttribute(d)}),l.index&&(l=l.toNonIndexed()),l.clearGroups(),c.updateMatrix(),l.applyMatrix4(c.matrix);let h=c.material.color,f=l.attributes.position.count,u=new Float32Array(f*3);for(let d=0;d<f;d++)u[d*3]=h.r,u[d*3+1]=h.g,u[d*3+2]=h.b;return l.setAttribute("color",new En(u,3)),l}),o=Qa(r,!1);if(r.forEach(c=>c.dispose()),!o)return;s.forEach(c=>i.remove(c));let a=new Pt(o,y1);a.castShadow=!0,a.receiveShadow=!0,i.add(a)})}function rc(n,t,e,i,s,r,o){let a=new Kt;a.position.set(s,r,o);let c=I(n,t,e,i,0,-t/2,0);return a.add(c),a}var oc=[{hair:5914688,skin:16768198,shirt:12824814,pants:6253194,style:"short",uniform:!0},{hair:3878703,skin:15976614,shirt:12824814,pants:6253194,style:"long",uniform:!0},{hair:11039050,skin:16769744,shirt:12824814,pants:6253194,style:"short",uniform:!0},{hair:3025462,skin:15580570,shirt:10738109,pants:6253178,style:"short"},{hair:2038564,skin:16768198,shirt:16758465,pants:9080760,style:"twin"},{hair:9067068,skin:16175024,shirt:16111752,pants:7170698,style:"cap",cap:15834032},{hair:4864570,skin:15317140,shirt:12824814,pants:6253194,style:"short",glasses:!0,uniform:!0},{hair:13208410,skin:16769744,shirt:10147472,pants:8161960,style:"long"},{hair:3878703,skin:15976614,shirt:12824814,pants:6253194,style:"bun",glasses:!0,uniform:!0},null,{hair:5914688,skin:15580570,shirt:14273008,pants:7170698,style:"long"},{hair:3025462,skin:16768198,shirt:16111752,pants:8161960,style:"bun"},{hair:9067068,skin:15976614,shirt:10473444,pants:6253178,style:"short",glasses:!0},{hair:3878703,skin:15317140,shirt:10738109,pants:7170698,style:"cap",cap:10738109},{hair:13208410,skin:16769744,shirt:13482478,pants:9080760,style:"twin"},{hair:2367010,skin:16175024,shirt:16368540,pants:8161960,style:"short"},{hair:5914688,skin:16768198,shirt:16758465,pants:7170698,style:"long"},{hair:2038564,skin:15580570,shirt:9226408,pants:5196378,style:"cap",cap:16165309},{hair:11039050,skin:16769744,shirt:16111752,pants:9075306,style:"bun"}],$h={her:{hair:3877418,skin:16768198,shirt:16758465,pants:16758465,style:"long",dress:16165309},him:{hair:2367010,skin:15778976,shirt:10473444,pants:6253194,style:"short"}},wd=[{hair:3878703,skin:15976614,shirt:12824814,pants:6253194,style:"short",uniform:!0},{hair:9067068,skin:16769744,shirt:12824814,pants:6253194,style:"long",uniform:!0},{hair:2367010,skin:15317140,shirt:12824814,pants:6253194,style:"bun",uniform:!0}],de=1.75/32,jh=12*de;function Cr(n,t){let e=new ce(n);return t&&(e.r=Math.min(1,e.r*t),e.g=Math.min(1,e.g*t),e.b=Math.min(1,e.b*t)),"#"+e.getHexString()}function zd(n,t){let e=document.createElement("canvas");e.width=e.height=64;let i=e.getContext("2d"),s=(n.hair^n.shirt^n.skin)>>>0,r=()=>(s=s*1664525+1013904223>>>0,s/4294967296),o=(M,x,m,w,E,b)=>{for(let V=0;V<w;V++)for(let L=0;L<m;L++)i.fillStyle=Cr(E,1+(r()-.5)*(b==null?.1:b)),i.fillRect(M+L,x+V,1,1)},a=(M,x,m)=>{i.fillStyle=typeof m=="string"?m:Cr(m),i.fillRect(M,x,1,1)},c=5981750,l=n.skin,h=n.hair,f=n.shirt,u=n.pants,d=n.style==="long"||n.style==="twin"||n.dress;o(0,0,32,16,l,.06),o(8,0,8,8,h),o(24,8,8,d?8:6,h),[0,16].forEach(M=>{o(M,8,8,d?7:4,h),o(M+(M?6:0),12,2,d?4:2,h)}),o(8,8,8,2,h),a(8,10,h),a(15,10,h),a(9,10,h),n.style==="cap"&&(o(8,0,8,8,n.cap),o(8,8,8,2,n.cap),o(0,8,8,2,n.cap),o(16,8,8,2,n.cap),o(24,8,8,2,n.cap)),[[9,12],[13,12]].forEach(([M,x])=>{if(t){a(M,x+1,"#3a2e33"),a(M+1,x+1,"#3a2e33");return}a(M,x,"#ffffff"),a(M+1,x,"#3a2e33"),a(M,x+1,"#ffffff"),a(M+1,x+1,"#3a2e33")}),a(9,14,"#ffa3b5"),a(14,14,"#ffa3b5"),a(11,14,Cr(l,.78)),a(12,14,Cr(l,.78)),a(11,15,"#c9707c"),a(12,15,"#c9707c"),n.glasses&&([9,13].forEach(M=>{["#6b5a4e"].forEach(x=>{a(M-1,12,x),a(M+2,12,x),a(M-1,13,x),a(M+2,13,x)})}),a(11,12,"#6b5a4e"),a(12,12,"#6b5a4e")),o(16,16,24,16,f),o(20,16,8,4,f,.05),o(23,20,2,1,l),n.uniform&&(o(22,20,4,1,16777215),o(21,22,2,2,16373355),o(20,31,8,1,9403592)),n.dress?(o(16,26,24,6,n.dress),o(20,25,8,1,Cr(n.dress,.9)&&n.dress)):o(16,30,24,2,Cr(u,.85)&&u,.05),o(20,22,8,1,f,.25),[[40,16],[32,48]].forEach(([M,x])=>{o(M,x,16,16,f),o(M,x+4+5,16,7,l,.06),o(M+4,x,4,4,f),o(M+8,x,4,4,l)}),[[0,16],[16,48]].forEach(([M,x])=>{o(M,x,16,16,n.dress?l:u),n.dress&&o(M,x+4,16,3,n.dress),o(M,x+4+10,16,2,c,.05),o(M+8,x,4,4,c)});let g=new _n(e);return g.magFilter=rn,g.minFilter=rn,g.generateMipmaps=!1,g.colorSpace=De,g}function Pr(n,t,e,i,s){let r=new ke(n*de,t*de,e*de),o=64,a=(h,f,u,d,g)=>{let M=h/o,x=(h+u)/o,m=1-f/o,w=1-(f+d)/o;return g?[x,m,M,m,x,w,M,w]:[M,m,x,m,M,w,x,w]},c=[a(i+e+n,s+e,e,t),a(i,s+e,e,t),a(i+e,s,n,e),a(i+e+n,s,n,e,!0),a(i+e,s+e,n,t),a(i+2*e+n,s+e,n,t)],l=r.attributes.uv;return c.forEach((h,f)=>{for(let u=0;u<4;u++)l.setXY(f*4+u,h[u*2],h[u*2+1])}),l.needsUpdate=!0,r}function Fo(n){let t=new Kt,e={},i=new Ee({map:zd(n)});e.mat=i,e.look=n;let s=(c,l,h,f)=>{let u=new Pt(c,i);return u.position.set(l,h,f),u.castShadow=!0,u.receiveShadow=!0,u},r=(c,l,h,f)=>{let u=new Kt;return u.position.set(c,l,h),u.add(f),u};e.legR=r(-2*de,12*de,0,s(Pr(4,12,4,0,16),0,-6*de,0)),t.add(e.legR),e.legL=r(2*de,12*de,0,s(Pr(4,12,4,16,48),0,-6*de,0)),t.add(e.legL),e.body=s(Pr(8,12,4,16,16),0,18*de,0),t.add(e.body),e.armR=r(-6*de,23.5*de,0,s(Pr(4,12,4,40,16),0,-5.5*de,0)),t.add(e.armR),e.armL=r(6*de,23.5*de,0,s(Pr(4,12,4,32,48),0,-5.5*de,0)),t.add(e.armL);let o=new Kt;o.position.y=24*de,t.add(o),e.head=o,o.add(s(Pr(8,8,8,0,0),0,4*de,0));let a=(c,l,h,f,u,d,g)=>{let M=en(l*de,h*de,f*de,c,u*de,d*de,g*de);o.add(M)};if(n.style==="bun"&&a(n.hair,3,3,3,0,9.3,-2),n.style==="twin"&&(a(n.hair,2,4,2,-4.6,3.5,-1.5),a(n.hair,2,4,2,4.6,3.5,-1.5)),n.style==="cap"&&a(n.cap,8,1,3,0,6.5,5),n.style==="long"&&a(n.hair,8,5,1,0,-1.5,-4.5),n.dress){let c=en(9*de,4*de,5*de,n.dress,0,12.5*de,0);t.add(c)}{let c=new Kt;c.position.set(0,-11*de,1.2*de),c.visible=!1,c.add(en(9*de,2.2*de,2.2*de,16112774,0,0,0)),c.add(en(1.2*de,2.8*de,2.8*de,11879994,-4.9*de,0,0)),c.add(en(1.2*de,2.8*de,2.8*de,11879994,4.9*de,0,0)),c.add(en(6*de,3.5*de,.3*de,16509616,.5*de,-2.6*de,.4*de)),e.armR.add(c),e.scroll=c}return e.kids=t.children.slice(),{g:t,parts:e}}var Bd=n=>n.style==="long"||n.style==="twin"||n.style==="bun";function Hd(n,t){return!n||!t||t==="f"===Bd(n)?n:Object.assign({},n,{style:(t==="f"?{short:"long",cap:"twin"}:{long:"short",twin:"cap",bun:"short"})[n.style]||(t==="f"?"long":"short"),cap:n.cap||n.shirt})}function Td(n,t){let e=Fo(t);(n.parts.kids||[]).forEach(s=>n.g.remove(s)),e.parts.kids.forEach(s=>n.g.add(s));let i={};Object.keys(n.parts).forEach(s=>{s in e.parts||(i[s]=n.parts[s])}),n.parts=Object.assign(e.parts,i)}function M1(){let n=new Kt,t={},e=16236938,i=14720350,s=16774118;n.add(en(.46,.4,.8,e,0,.5,0)),[-.12,.1].forEach(l=>n.add(en(.48,.06,.12,i,0,.71,l))),n.add(en(.36,.2,.5,s,0,.34,.05)),t.legs=[[-.14,.28],[.14,.28],[-.14,-.28],[.14,-.28]].map(([l,h])=>{let f=rc(.13,.32,.13,e,l,.34,h);return n.add(f),f});let r=new Kt;r.position.set(0,.78,.48),n.add(r),t.head=r,r.add(en(.5,.42,.42,e,0,0,0)),r.add(en(.3,.16,.06,s,0,-.1,.21)),[-.15,.15].forEach(l=>{let h=new Pt(new yo(.11,.2,4),ge(i));h.position.set(l,.29,-.02),h.rotation.y=Math.PI/4,r.add(h);let f=en(.08,.1,.03,4010032,l*.8,.04,.215);r.add(f),(t.eyes=t.eyes||[]).push(f)}),r.add(en(.07,.05,.03,16752048,0,-.04,.23));let o=new Kt;o.position.set(0,.62,-.38),n.add(o),t.tail=o;let a=en(.1,.1,.4,e,0,.05,-.18);o.add(a);let c=new Kt;return c.position.set(0,.05,-.36),o.add(c),c.add(en(.1,.4,.1,i,0,.18,0)),o.rotation.x=.5,n.scale.setScalar(.6),Fd(n,t.eyes),{g:n,parts:t}}function v1(){let n=new Kt,t={},e=16774374,i=13211247;n.add(en(.56,.5,.95,e,0,.62,0)),n.add(en(.58,.3,.4,i,0,.76,-.15)),t.legs=[[-.17,.33],[.17,.33],[-.17,-.33],[.17,-.33]].map(([o,a])=>{let c=rc(.16,.4,.16,e,o,.42,a);return n.add(c),c});let s=new Kt;s.position.set(0,.98,.55),n.add(s),t.head=s,s.add(en(.56,.52,.5,e,0,0,0)),s.add(en(.3,.24,.26,e,0,-.1,.34)),s.add(en(.13,.1,.06,4010032,0,-.02,.48)),s.add(en(.1,.12,.06,16748451,.05,-.24,.42)),[-.3,.3].forEach(o=>{let a=rc(.12,.42,.26,i,o,.2,-.02);a.rotation.z=o>0?-.15:.15,s.add(a);let c=en(.08,.11,.03,4010032,o*.45,.08,.26);s.add(c),(t.eyes=t.eyes||[]).push(c)});let r=rc(.12,.42,.12,i,0,.82,-.47);return r.rotation.x=-.9,n.add(r),t.tail=r,n.scale.setScalar(.62),Fd(n,t.eyes),{g:n,parts:t}}function Ad(n){let t=new Kt,e=[16751211,16777215,16757575][n%3],i=new Pt(new yn(.28,10,8),ge(e));if(i.scale.set(.7,.6,1.4),t.add(i),n%3===1){let r=new Pt(new yn(.16,8,6),ge(16744272));r.position.set(0,.1,.05),r.scale.set(1,.6,1.4),t.add(r)}let s=new Pt(new yo(.22,.35,4),ge(e===16777215?16751211:e));return s.rotation.x=Math.PI/2,s.position.z=-.5,t.add(s),t.userData.tail=s,t}function E1(n){let t=new Kt,e=new Ee({color:n,side:An}),i=()=>{let o=new Pt(new ss(.32,.26),e);o.position.x=.17;let a=new Kt;return a.add(o),a},s=i(),r=i();return r.scale.x=-1,t.add(s,r),t.userData.l=s,t.userData.r=r,t}function Rd(){let n=new Kt,t=15392715,e=3.5,i=Ze(mt.LOG),s=Ze(mt.LEAF_P),r=Ze(mt.LEAF_P,16769516),o=-2.2;n.add(I(1.4,e+3.4,1.4,0,o,(e+3.4)/2,-.3,i)),n.add(I(.9,.8,.9,0,o+1.1,.4,-.3,i)),n.add(I(.9,.6,.9,0,o-.9,.3,.3,i)),n.add(I(3.4,.55,.55,0,-.5,e+.05,0,i)),n.add(I(.6,2.2,.6,0,o-1.6,e+2.4,-.3,i)),n.add(I(.6,1.8,.6,0,o+1.4,e+2.6,.6,i)),[[o,e+3.6,-.3,9,2,7,s],[o,e+5.4,-.3,7,1.6,5.4,r],[o,e+6.7,-.3,4.4,1.1,3.4,r],[o-1.2,e+2.4,-.6,5.6,.8,4.6,s],[o+3.6,e+3.4,.4,2,1.4,2.6,s],[o-4.4,e+3.2,-.8,1.6,1.4,2.8,r]].forEach(([h,f,u,d,g,M,x])=>n.add(I(d,g,M,0,h,f,u,x))),[[-1,.4],[1.2,-1.1],[-3.6,1.6],[.6,1.9],[-4.4,-1.4],[2.4,.8]].forEach(([h,f])=>n.add(I(.3,.02,.3,16762070,o+h+1.5,.02,f)));let a=new Kt;a.position.set(0,e-.2,0),n.add(a);let c=e-.2-.56;[-.72,.72].forEach(h=>a.add(I(.06,c,.06,t,h,-c/2,0)));let l=I(1.65,.12,.5,0,0,-c,0,Ze(mt.PLANK_GREY,16165309));return a.add(l),n.userData.pivot=a,n.userData.seat=l,n}var su=[];function Cd(n,t){let e=document.createElement("canvas");e.width=e.height=16;let i=e.getContext("2d"),s=(h,f,u)=>{i.fillStyle=u,i.fillRect(h,f,1,1)},r=[];for(let h=0;h<9;h++)r.push([3+h,12-h]);let o=[];r.forEach(([h,f])=>{o.push([h,f,"#9a6a3e"],[h+1,f,"#6b4526"])}),[[12,2],[13,2],[13,3],[11,1],[12,1],[13,1],[14,1],[14,2],[14,3],[14,4],[10,2],[13,5]].forEach(([h,f])=>o.push([h,f,"#e6e6ee"])),[[12,3],[12,4],[11,3]].forEach(([h,f])=>o.push([h,f,"#b8b8c6"])),[[1,12],[2,11],[1,13],[2,14],[3,14],[1,11],[2,13],[4,14],[0,12],[3,15]].forEach(([h,f])=>o.push([h,f,"#ffffff"])),[[2,12],[3,13]].forEach(([h,f])=>o.push([h,f,"#f6a9bd"])),o.forEach(([h,f])=>{[[-1,0],[1,0],[0,-1],[0,1]].forEach(([u,d])=>s(h+u,f+d,"#4a3020"))}),o.forEach(([h,f,u])=>s(h,f,u));let a=new _n(e);a.magFilter=rn,a.minFilter=rn,a.colorSpace=De;let c=new rs(new Bi({map:a,transparent:!0,depthWrite:!1,depthTest:!1,rotation:n}));c.scale.set(t,t,1),c.renderOrder=5;let l=new O(Math.cos(n+Math.PI/4),Math.sin(n+Math.PI/4),0);return su.push({sp:c,dir:l,base:null}),c}function b1(n){su.forEach(t=>{t.base||(t.base=t.sp.position.clone());let e=(Math.sin(n*4)*.5+.5)*.12;t.sp.position.set(t.base.x+t.dir.x*e,t.base.y+t.dir.y*e,t.base.z)})}function S1(n,t,e){let s=document.createElement("canvas"),r=s.getContext("2d");r.font="800 64px Nunito, sans-serif";let o=Math.ceil(r.measureText(n).width)+40;s.width=o,s.height=100;let a=s.getContext("2d");a.font="800 64px Nunito, sans-serif",a.textAlign="center",a.textBaseline="middle",a.lineJoin="round",t==="#ffffff"&&(a.shadowColor="rgba(40,30,40,.45)",a.shadowBlur=6,a.shadowOffsetY=3),a.fillStyle=t,a.fillText(n,o/2,s.height/2);let c=new _n(s);c.colorSpace=De;let l=new rs(new Bi({map:c,transparent:!0,depthWrite:!1,depthTest:!1}));return l.scale.set(e*o/s.height,e,1),l.renderOrder=5,l}function kd(n,t,e,i){let s=document.createElement("canvas");s.width=128,s.height=64;let r=s.getContext("2d");r.font="bold 48px sans-serif",r.fillStyle=t,r.textAlign="center",r.fillText(n,64,50);let o=new rs(new Bi({map:new _n(s),transparent:!0,depthWrite:!1}));return o.scale.set(e,i,1),o.visible=!1,o}function Pd(n,t){return Math.hypot((n-ne.x)/(ne.rx+4.4),(t-ne.z)/(ne.rz+4.4))<1&&!Ei(n,t,.4)}function w1(n){let t=new _o(Bn.map(o=>new O(o.x,0,o.z))),e=90,i=t.getSpacedPoints(e),s=new Cn,r=[];return Pn.forEach(([o,a,c,l])=>{let h=o===c;for(let f=0;f<i.length;f++){let u=i[f];!(h?Math.abs(u.x-o)<.95&&u.z>=Math.min(a,l)-.9&&u.z<=Math.max(a,l)+.9:Math.abs(u.z-a)<.95&&u.x>=Math.min(o,c)-.9&&u.x<=Math.max(o,c)+.9)||r.some(g=>Math.hypot(g.x-u.x,g.z-u.z)<3)||r.push({x:h?o:u.x,z:h?u.z:a,rot:h?0:Math.PI/2})}}),r.forEach(o=>n.add(Vd(o.x,o.z,o.rot,3))),{curve:t,glints:[],ftex:s,foam:[],bridges:r,src:i[0]}}function Vd(n,t,e,i){let s=new Kt;s.position.set(n,0,t),s.rotation.y=e;let r=Ze(mt.PLANKS),o=Ze(mt.LOG);return[0,.25,.5,.25,0].forEach((a,c)=>s.add(I(i,.5,1,0,0,a-.15,c-2,r))),[-1,1].forEach(a=>{[0,.25,.5,.25,0].forEach((c,l)=>{s.add(I(.25,.9,.25,0,a*(i/2-.12),c+.55,l-2,o)),l<4&&s.add(I(.12,.12,1,0,a*(i/2-.12),c+.85+(l<2?.12:-.12),l-1.5,r))})}),s}function T1(n,t){let e=ne,i=e.rx+2.6,s=e.rz+2.6,r=80,o=[],a=[],c={benches:[],ducks:[],posts:[]};for(let l=0;l<=r;l++){let h=l/r*Math.PI*2,f=Math.cos(h),u=Math.sin(h),d=e.x+f*(i-.75),g=e.z+u*(s-.75),M=e.x+f*(i+.75),x=e.z+u*(s+.75);if(o.push(d,.025,g,M,.025,x),l){let m=l*2;a.push(m-2,m,m-1,m-1,m,m+1)}}for(let l=0;l<r;l++){let h=l/r*Math.PI*2,f=e.x+Math.cos(h)*i,u=e.z+Math.sin(h)*s;if(Vs(f,u)<.6){n.add(Vd(f,u,-h+Math.PI/2+Math.PI/2,1.5));break}}[.6,2.2,3.6,5].forEach((l,h)=>{let f=e.x+Math.cos(l)*(i+1.6),u=e.z+Math.sin(l)*(s+1.6);if(Vs(f,u)<2.2||!ki(f,u,1.5))return;let d=new Kt;d.position.set(f,0,u),d.rotation.y=Math.atan2(e.x-f,e.z-u),d.add(I(1.5,.08,.45,12883572,0,.45,0)),d.add(I(1.5,.4,.07,12883572,0,.7,-.22)),[-.65,.65].forEach(g=>{d.add(I(.08,.45,.4,9206379,g,.22,0))}),n.add(d),c.posts.push({x:f,z:u,r:.9})});for(let l=0;l<7;l++){let h=l/7*Math.PI*2+.3,f=e.x+Math.cos(h)*(i+3.1),u=e.z+Math.sin(h)*(s+3.1);if(!(Vs(f,u)<2.4||!ki(f,u,1.8))){n.add(I(2,.5,1,0,Math.floor(f)+.5,.25,Math.floor(u)+.5,Ze(mt.PLANKS)));for(let d=0;d<4;d++){let g=Math.floor(f)+.5+(d-1.5)*.45,M=Math.floor(u)+.5+(d%2?.15:-.15);n.add(I(.06,.35,.06,8173679,g,.65,M)),n.add(I(.22,.22,.22,bi.flower[(l+d)%bi.flower.length],g,.9,M))}c.posts.push({x:f,z:u,r:1})}}for(let l=0;l<2;l++){let h=new Kt;h.add(I(.5,.3,.7,16777215,0,.18,0)),h.add(I(.32,.3,.3,l?16777215:7317610,0,.45,.32)),h.add(I(.18,.08,.16,16098123,0,.42,.53)),[-.12,.12].forEach(f=>h.add(I(.05,.06,.03,3025462,f,.5,.47))),h.add(I(.2,.12,.2,15658734,0,.32,-.38)),h.scale.setScalar(.8),n.add(h),c.ducks.push({g:h,a:l*2.5,sp:l?-.12:.09})}return c}function A1(n){let t=[],e=[],i=(u,d)=>u.toFixed(2)+","+d.toFixed(2),s=new Map,r=(u,d)=>{let g=i(u,d);return s.has(g)||(s.set(g,t.length),t.push({x:u,z:d}),e.push([])),s.get(g)},o=(u,d)=>{if(u===d)return;let g=Math.hypot(t[u].x-t[d].x,t[u].z-t[d].z);e[u].push([d,g]),e[d].push([u,g])},a=Pn.map(()=>[]);Pn.forEach((u,d)=>{a[d].push([u[0],u[1]],[u[2],u[3]])}),Pn.forEach((u,d)=>Pn.forEach((g,M)=>{if(d>=M)return;let x=u[0]===u[2],m=g[0]===g[2];if(x===m)return;let w=x?u:g,E=x?g:u,b=w[0],V=E[1];b>=Math.min(E[0],E[2])-.01&&b<=Math.max(E[0],E[2])+.01&&V>=Math.min(w[1],w[3])-.01&&V<=Math.max(w[1],w[3])+.01&&(a[d].push([b,V]),a[M].push([b,V]))}));let c=[];if(Ve){let u=Ve.drive.concat(Ve.spiral),d=null;u.forEach((g,M)=>{(!d||Math.hypot(g.x-d.x,g.z-d.z)>=2||M===u.length-1)&&(c.push(r(g.x,g.z)),d=g)});for(let g=1;g<c.length;g++)o(c[g-1],c[g])}let l=n.map(u=>{let d=null,g=null;c.forEach(x=>{let m=Math.hypot(t[x].x-u.x,t[x].z-u.z);(!g||m<g.dist)&&(g={ni:x,dist:m})}),Pn.forEach((x,m)=>{let w=x[0]===x[2],E=w?x[0]:Math.max(Math.min(x[0],x[2]),Math.min(Math.max(x[0],x[2]),u.x)),b=w?Math.max(Math.min(x[1],x[3]),Math.min(Math.max(x[1],x[3]),u.z)):x[1],V=Math.hypot(E-u.x,b-u.z);(!d||V<d.dist)&&(d={i:m,x:E,z:b,dist:V})});let M=r(u.x,u.z);return g&&g.dist<d.dist?(o(M,g.ni),M):(a[d.i].push([d.x,d.z]),o(M,r(d.x,d.z)),M)});a.forEach((u,d)=>{let g=Pn[d][0]===Pn[d][2];u.sort((M,x)=>g?M[1]-x[1]:M[0]-x[0]);for(let M=1;M<u.length;M++)o(r(u[M-1][0],u[M-1][1]),r(u[M][0],u[M][1]))});function h(u,d){let g=t.map(()=>1/0),M=t.map(()=>-1),x=t.map(()=>!1);for(g[u]=0;;){let w=-1;for(let E=0;E<t.length;E++)!x[E]&&(w<0||g[E]<g[w])&&(w=E);if(w<0||g[w]===1/0||w===d)break;x[w]=!0,e[w].forEach(([E,b])=>{g[w]+b<g[E]&&(g[E]=g[w]+b,M[E]=w)})}let m=[];for(let w=d;w>=0;w=M[w])m.unshift(t[w]);return m.length&&m[0]===t[u]?m:[t[d]]}function f(u,d,g){let M=0,x=1/0,m=g?new Set(l):null;return t.forEach((w,E)=>{if(m&&m.has(E))return;let b=Math.hypot(w.x-u,w.z-d);b<x&&(x=b,M=E)}),M}return{nodes:t,doorNodes:l,path:h,nearest:f}}var ic=[[0,4870304,12633855,.8,1.35,1],[5,5199526,12633855,.8,1.35,1],[6,16305590,16763296,1.3,1.1,.4],[7.5,12575733,16774374,2.3,1.55,0],[16.5,12575733,16774374,2.3,1.55,0],[18,16236724,16760470,1.3,1.1,.4],[19.2,5265318,12633855,.8,1.35,1],[24,4870304,12633855,.8,1.35,1]];function Gd(n){let t=0;for(;t<ic.length-2&&ic[t+1][0]<=n;)t++;let e=ic[t],i=ic[t+1],s=(n-e[0])/(i[0]-e[0]||1),r=new ce(e[1]),o=new ce(i[1]),a=new ce(e[2]),c=new ce(i[2]);return{sky:r.lerp(o,s),sun:a.lerp(c,s),power:Hn(e[3],i[3],s),amb:Hn(e[4],i[4],s),night:Hn(e[5],i[5],s)}}function R1(n,t){t=t||{};let e=(n.clientWidth||innerWidth)<(n.clientHeight||innerHeight)*.9?"port":"land";Dd(e),eu=[],ac=[];let i=(()=>{let p=/[?&]hour=([\d.]+)/.exec(location.search);return p?Number(p[1]):null})();i==null&&t.timeMode==="day"&&(i=11),i==null&&t.timeMode==="night"&&(i=22);let s=new po({antialias:!0});s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.shadowMap.enabled=!0,s.shadowMap.type=Ya,s.domElement.className="village-3d",n.appendChild(s.domElement);let r=new mo;r.fog=new Da(12575733,320,760);let o=new xn(26,1,.5,1400),a=new ja(o,s.domElement);a.enableDamping=!0,a.dampingFactor=.08,a.minDistance=18,a.maxDistance=520,a.minPolarAngle=.15,a.maxPolarAngle=1.32,a.target.set(0,0,1.5),a.screenSpacePanning=!1,a.rotateSpeed=.7,a.panSpeed=1.1,a.keyPanSpeed=22,a.touches={ONE:yi.PAN,TWO:yi.DOLLY_PAN};{let p=s.domElement,_=new Map,v=null,C=!1,k=new O,H=new Fs,y=new O,U=new O,et=()=>{let at=Array.from(_.values());return{a:at[0],b:at[1],mx:(at[0].x+at[1].x)/2,my:(at[0].y+at[1].y)/2,d:Math.hypot(at[1].x-at[0].x,at[1].y-at[0].y),ang:Math.atan2(at[1].y-at[0].y,at[1].x-at[0].x)}};p.addEventListener("pointerdown",at=>{if(!(C||at.pointerType!=="touch"))if(at.isPrimary&&(_.clear(),v=null),_.set(at.pointerId,{x:at.clientX,y:at.clientY}),_.size===2){at.stopImmediatePropagation();let Et=Array.from(_.entries()).find(([ae])=>ae!==at.pointerId);if(Et){C=!0;try{p.dispatchEvent(new PointerEvent("pointerup",{pointerId:Et[0],pointerType:"touch",isPrimary:!0,clientX:Et[1].x,clientY:Et[1].y,bubbles:!0}))}catch{}C=!1}let Ft=et();v={last:Ft,moved:0,mode:"",y0a:Ft.a.y,y0b:Ft.b.y,x0:Ft.mx,d0:Ft.d}}else _.size>2&&at.stopImmediatePropagation()},{capture:!0}),p.addEventListener("pointermove",at=>{if(C||at.pointerType!=="touch"||!_.has(at.pointerId)||(_.get(at.pointerId).x=at.clientX,_.get(at.pointerId).y=at.clientY,!v||_.size<2)||(at.stopImmediatePropagation(),!a.enabled))return;let Et=et(),Ft=v.last;if(v.moved+=Math.hypot(Et.mx-Ft.mx,Et.my-Ft.my)+Math.abs(Et.d-Ft.d),!v.mode&&v.moved>22){let ae=Et.a.y-v.y0a,fe=Et.b.y-v.y0b,Ce=(ae+fe)/2,Ke=ae*fe>0&&Math.min(Math.abs(ae),Math.abs(fe))>.3*Math.max(Math.abs(ae),Math.abs(fe));v.mode=Ke&&Math.abs(Et.mx-v.x0)<Math.abs(Ce)*.7&&Math.abs(Et.d-v.d0)<Math.max(24,Math.abs(Ce)*.6)?"tilt":"free"}if(k.copy(o.position).sub(a.target),v.mode==="tilt")H.setFromVector3(k),H.phi=Math.max(a.minPolarAngle,Math.min(a.maxPolarAngle,H.phi-(Et.my-Ft.my)*.006)),k.setFromSpherical(H),o.position.copy(a.target).add(k);else if(v.mode==="free"){let ae=Et.ang-Ft.ang;ae>Math.PI&&(ae-=Math.PI*2),ae<-Math.PI&&(ae+=Math.PI*2),k.applyAxisAngle(He.DEFAULT_UP,ae);let fe=Math.max(a.minDistance,Math.min(a.maxDistance,k.length()*(Ft.d/Math.max(1,Et.d))));k.setLength(fe),o.position.copy(a.target).add(k),o.getWorldDirection(U),U.y=0,U.normalize(),y.crossVectors(U,o.up).normalize();let Ce=2*fe*Math.tan(o.fov*Math.PI/360)/(p.clientHeight||innerHeight);c.copy(y).multiplyScalar(-(Et.mx-Ft.mx)*Ce).addScaledVector(U,(Et.my-Ft.my)*Ce*1.4),a.target.add(c),o.position.add(c)}v.last=Et,a.update()},{capture:!0});let ot=at=>{C||at.pointerType!=="touch"||(v&&_.has(at.pointerId)&&at.stopImmediatePropagation(),_.delete(at.pointerId),_.size<2&&(v=null))};p.addEventListener("pointerup",ot,{capture:!0}),p.addEventListener("pointercancel",ot,{capture:!0});let Rt=at=>{at.pointerType==="touch"&&at.target!==p&&(_.delete(at.pointerId),_.size<2&&(v=null))};window.addEventListener("pointerup",Rt,!0),window.addEventListener("pointercancel",Rt,!0)}s.domElement.tabIndex=0,s.domElement.style.outline="none",a.listenToKeyEvents(s.domElement);let c=new O,l=new O,h=new O;function f(p,_){o.getWorldDirection(h),h.y=0,h.normalize(),l.crossVectors(h,o.up).normalize();let v=o.position.distanceTo(a.target)*.0016;c.copy(l).multiplyScalar(p*v).addScaledVector(h,-_*v),a.target.add(c),o.position.add(c)}s.domElement.addEventListener("wheel",p=>{!p.ctrlKey&&p.deltaMode===0&&(Math.abs(p.deltaX)>.01||Math.abs(p.deltaY)<40)&&(p.preventDefault(),p.stopImmediatePropagation(),f(p.deltaX,p.deltaY))},{capture:!0,passive:!1});function u(){let p=a.target,_=Fe.w/2,v=Fe.d/2,C=Math.max(-_,Math.min(_,p.x)),k=Math.max(Fe.cz-v,Math.min(Fe.cz+v,p.z));(C!==p.x||k!==p.z||p.y!==0)&&(c.set(C-p.x,-p.y,k-p.z),p.add(c),o.position.add(c))}a.addEventListener("change",u);let d=new Ro(16777215,12048288,1);r.add(d);let g=new Po(16777215,1.5);g.castShadow=!0,g.shadow.mapSize.set(2048,2048),Object.assign(g.shadow.camera,{left:-Fe.a-6,right:Fe.a+6,top:Fe.b+10,bottom:-Fe.b-10,near:1,far:260}),g.shadow.bias=-6e-4,g.shadow.normalBias=.03,r.add(g),r.add(g.target);let M=[],x=new Jn({uniforms:{top:{value:new ce(9356778)},bottom:{value:new ce(14216952)}},vertexShader:"varying float vY; void main(){ vY = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 bottom; varying float vY; void main(){ float k = smoothstep(-0.15, 0.75, vY); gl_FragColor = vec4(mix(bottom, top, k), 1.0); }",side:Rn,depthWrite:!1,fog:!1}),m=new Pt(new yn(480,24,14),x);m.renderOrder=-1,r.add(m);let w=new Pt(new ke(7,7,7),new $e({color:16771496,fog:!1})),E=new Pt(new ke(5,5,5),new $e({color:16052735,fog:!1}));r.add(w,E);let b=new ze,V=[];for(let p=0;p<700;p++){let _=Math.random()*Math.PI*2,v=Math.random()*1.55;V.push(Math.cos(_)*Math.sin(v)*450,Math.cos(v)*450+20,Math.sin(_)*Math.sin(v)*450)}b.setAttribute("position",new xe(V,3));let L=new Ls(b,new os({color:16777215,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1}));r.add(L);let D=[];for(let p=0;p<6;p++){let _=new Kt,v=new Ee({color:16777215,transparent:!0,opacity:.92});for(let C=0;C<5;C++){let k=new Pt(new ke(Gt(3,6),1.5,Gt(3,5)),v);k.position.set(C*2.6-5,0,Gt(-1.5,1.5)),_.add(k)}_.position.set(Gt(-90,90),Gt(34,46),Gt(-90,-40)),_.userData.speed=Gt(.6,1.4),_.userData.mat=v,D.push(_),r.add(_)}let z=new Kt;z.mat=new Ee({color:16777215,transparent:!0,opacity:.9,fog:!1});for(let p=0;p<11;p++){let _=p/11*Math.PI*2+Gt(-.15,.15),v=Ir(_)+Gt(1,7),C=[];for(let H=0;H<5;H++){let y=new ke(Math.round(Gt(2,5)),1,Math.round(Gt(2,4)));y.translate(Math.round(H*2.2-4.4),0,Math.round(Gt(-1,1))),C.push(y)}let k=new Pt(Qa(C,!1),z.mat);C.forEach(H=>H.dispose()),k.position.set(Math.cos(_)*v,Gt(-9,-3),Fe.cz-Math.sin(_)*v),k.rotation.y=_+Math.PI/2,k.scale.setScalar(Gt(.9,1.5)),z.add(k)}r.add(z);let A=[];[{t:Math.PI*.97,gap:9,r:4.5,y:-3,deco:(_,v,C)=>{cs(_,-1,1,-1,"oak",v),cs(_,2,1,1,"pine",v),_.set(-2,1,2,It.LEAF_M),_.plant(.5,1,2.5,mt.FL_PINK)}},{t:.06,gap:10,r:4,y:-2,deco:(_,v,C)=>{for(let k=0;k<18;k++){let H=v()*6.28,y=Math.sqrt(v())*3;_.plant(Math.floor(Math.cos(H)*y)+.5,1,Math.floor(Math.sin(H)*y)+.5,[mt.FL_PINK,mt.FL_WHITE,mt.FL_YELLOW,mt.FL_BLUE][k%4],.9)}C(I(2,.25,.6,0,.5,1.5,-.7,Ze(mt.PLANKS))),C(I(2,.6,.15,0,.5,1.85,-1,Ze(mt.PLANKS))),[-.35,1.35].forEach(k=>C(I(.2,.5,.6,0,k,1.25,-.7,Ze(mt.LOG))))}},{t:Math.PI*.62,gap:7,r:2.5,y:4.5,deco:(_,v)=>{cs(_,0,1,0,"pine",v),_.set(1,1,1,It.MOSSY)}},{t:-Math.PI*.3,gap:8,r:2.3,y:2.2,deco:(_,v,C)=>{[[0,0,15231594],[1,1,16757611]].forEach(([k,H,y])=>{C(I(.35,.6,.35,16774888,k+.5,1.3,H+.5)),C(I(.9,.35,.9,y,k+.5,1.75,H+.5))}),_.set(-1,1,0,It.LEAF_G)}}].forEach((_,v)=>{let C=nc(31+v*7),k=_.r,H=Math.ceil(k)+2,y=new Do(-H,-Math.ceil(k*2.4)-3,-H,H*2,Math.ceil(k*2.4)+16,H*2);for(let Rt=-H;Rt<H;Rt++)for(let at=-H;at<H;at++){let Et=Math.hypot(Rt+.5,at+.5)/k;if(Et>1)continue;let Ft=-Math.round(1+k*1.9*Math.pow(1-Et,.7)+C()*1.2);for(let ae=Ft;ae<1;ae++)y.set(Rt,ae,at,ae===0?It.GRASS:ae>-3?It.DIRT:It.STONE)}let U=new Kt;_.deco(y,C,Rt=>U.add(Rt));let et=y.build();U.add(et.solid,et.water,et.plants);let ot=Ir(_.t)+_.r+_.gap;U.position.set(Math.cos(_.t)*ot,_.y,Fe.cz-Math.sin(_.t)*ot),U.userData.y0=_.y,U.userData.ph=v*1.7,r.add(U),A.push(U)});let S=(()=>{let p=document.createElement("canvas");p.width=p.height=64;let _=p.getContext("2d"),v=_.createRadialGradient(32,32,0,32,32,32);v.addColorStop(0,"rgba(255,255,255,0.85)"),v.addColorStop(.3,"rgba(255,255,255,0.22)"),v.addColorStop(1,"rgba(255,255,255,0)"),_.fillStyle=v,_.fillRect(0,0,64,64),_.fillStyle="#ffffff",_.beginPath();for(let k=0;k<10;k++){let H=k/10*Math.PI*2-Math.PI/2,y=k%2?8:20;_.lineTo(32+Math.cos(H)*y,32+Math.sin(H)*y)}_.closePath(),_.fill();let C=new _n(p);return C.colorSpace=De,C})(),B=(()=>{let p=document.createElement("canvas");p.width=p.height=32;let _=p.getContext("2d");_.fillStyle="#ffffff",_.beginPath();for(let C=0;C<8;C++){let k=C/8*Math.PI*2,H=C%2?2.5:15;_.lineTo(16+Math.cos(k)*H,16+Math.sin(k)*H)}_.closePath(),_.fill();let v=new _n(p);return v.colorSpace=De,v})(),Z=[0,1,2].map(p=>{let _=[],v=[],C=new ce,k=[16773544,16762076,14273791,12905727];for(let U=0;U<34;U++){let et=Math.random()*Math.PI*2,ot=.15+Math.random()*1.2;_.push(Math.cos(et)*Math.sin(ot)*440,Math.cos(ot)*440+20,Math.sin(et)*Math.sin(ot)*440),C.set(k[(U+p)%4]),v.push(C.r,C.g,C.b)}let H=new ze;H.setAttribute("position",new xe(_,3)),H.setAttribute("color",new xe(v,3));let y=new Ls(H,new os({size:11+p*3,map:S,vertexColors:!0,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,fog:!1}));return y.userData={base:0,ph:p*2.1},r.add(y),y}),N=new rs(new Bi({map:(()=>{let p=document.createElement("canvas");p.width=128,p.height=16;let _=p.getContext("2d"),v=_.createLinearGradient(0,0,128,0);return v.addColorStop(0,"rgba(255,255,255,0)"),v.addColorStop(1,"rgba(255,248,220,1)"),_.fillStyle=v,_.beginPath(),_.moveTo(0,8),_.lineTo(120,4),_.arc(120,8,4,-Math.PI/2,Math.PI/2),_.closePath(),_.fill(),new _n(p)})(),transparent:!0,opacity:0,depthWrite:!1,fog:!1}));N.scale.set(36,4.5,1),r.add(N);let W={t:-1,wait:6,from:new O,dir:new O},q=new Kt;r.add(q);let Y=nc(5),ft=new He,$=Math.ceil(Fe.a)+2,_t=Math.ceil(Fe.b)+2,Tt=Math.round(Fe.cz),dt=new Do(-$,-26,Tt-_t,$*2,54,_t*2),Xt=p=>(p[0]===p[2]?Math.abs(p[3]-p[1]):Math.abs(p[2]-p[0]))>=40,ye=(p,_)=>sc(p,_,0)||Pn.some(v=>{let[C,k,H,y]=v,U=(Xt(v)?Ud:u1)/2;return p>=Math.min(C,H)-U&&p<=Math.max(C,H)+U&&_>=Math.min(k,y)-U&&_<=Math.max(k,y)+U}),pt=(p,_)=>{let v=Math.hypot((p-ne.x)/(ne.rx+2.6),(_-ne.z)/(ne.rz+2.6));return Math.abs(v-1)*(ne.rx+2.6)<.8},At=(p,_)=>Math.sin(p*.83+_*.37)*Math.cos(_*.71-p*.29)+.5*Math.sin(p*1.9-_*1.3),Yt=(p,_)=>{let v=0,C=-1;return Qh(p,_,2)?{h:0,i:-1}:(us.forEach(([k,H,y,U],et)=>{let ot=Math.hypot(p-k,_-H);if(ot<y){let Rt=U*Math.pow(1-ot/y,1.1)*(.88+.12*At(p,_))+(ot/y<.9?.8*At(p*1.7,_*1.7):0);Rt>v&&(v=Rt,C=et)}}),{h:v,i:C})},Ct=(p,_)=>1.4+1.3*Math.min(1,Math.hypot(p-zn.x,_-zn.z)/22),zt=new Map;for(let p=-$;p<$;p++)for(let _=Tt-_t;_<Tt+_t;_++){let v=p+.5,C=_+.5;if(!ki(v,C,.2))continue;let k=Math.round(Nn(v,C)),H="grass",y=Yt(v,C);if(y.h>k+.6){let ot=us[y.i][3];k=Math.max(k,Math.round(y.h-.2)),H=k>ot*(.58+.08*At(v*2,C*2))?"snow":k>ot*.22?"rock":"grass"}let U=Math.max(0,1-Math.hypot(v,C-Fe.cz)/Ir(Math.atan2(C-Fe.cz,v))),et=-1-Math.round(2+17*Math.pow(U,.55)+(Y()-.5)*2.4);for(let ot=et;ot<k;ot++){let Rt=k-1-ot,at=Rt===0?H==="snow"?It.SNOW:H==="rock"?Y()<.2?It.MOSSY:Y()<.12?It.GRAVEL:It.STONE:It.GRASS:Rt<3&&H==="grass"?It.DIRT:ot<et+3?Y()<.55?It.DEEP:It.STONE:Y()<.12?It.CLAY:Y()<.08?It.GRAVEL:It.STONE;dt.set(p,ot,_,at)}if(H==="grass"&&dt.tint.set(dt.idx(p,k-1,_),.94+.08*Math.sin(v*.21+C*.13)*Math.cos(C*.17-v*.05)+Y()*.03),zt.set(p+","+_,k),k<=0){let ot=Vs(v,C),Rt=Ct(v,C);if(Ei(v,C,0)||ot<Rt/2){let at=Ei(v,C,-2.6)?3:Ei(v,C,-1.2)?2:1;for(let Et=1;Et<=at;Et++)dt.set(p,-Et,_,It.WATER);dt.set(p,-at-1,_,It.SAND),dt.set(p,-at-2,_,It.SAND),zt.set(p+","+_,-1);continue}if((Ei(v,C,1.2)||ot<Rt/2+.9)&&!ye(v,C)){dt.set(p,-1,_,It.SAND),dt.set(p,-2,_,It.SAND);continue}}(ye(v,C)||pt(v,C))&&dt.set(p,k-1,_,It.PATH)}let ie=(p,_)=>{let v=zt.get(Math.floor(p)+","+Math.floor(_));return v==null?0:v},re=[];{let p=zn,_=-p.dz,v=p.dx,C=p.r*.95,k=new Set;for(let y=C;y<p.r+2;y+=.4)for(let U=-1.4;U<=1.4;U+=.4){let et=Math.floor(p.x+p.dx*y+_*U),ot=Math.floor(p.z+p.dz*y+v*U),Rt=et+","+ot;if(k.has(Rt)||!zt.has(Rt))continue;k.add(Rt);let at=zt.get(Rt);for(let Et=-1;Et<at;Et++)dt.set(et,Et,ot,It.AIR);dt.set(et,-1,ot,It.WATER),dt.set(et,-2,ot,It.WATER),dt.set(et,-3,ot,It.SAND),zt.set(Rt,-1)}let H=new Map;for(let y=C;y>-.6;y-=.3)for(let U=-1.2;U<=1.2;U+=.35){let et=Math.floor(p.x+p.dx*y+_*U),ot=Math.floor(p.z+p.dz*y+v*U),Rt=et+","+ot;if(k.has(Rt)||H.has(Rt)||!zt.has(Rt))continue;let at=zt.get(Rt),Et=C-y,Ft=Math.min(at-2,Math.floor(Et/.95)*2);if(!(Ft<0)){H.set(Rt,Ft);for(let ae=Ft+1;ae<at;ae++)dt.set(et,ae,ot,It.AIR);dt.set(et,Ft,ot,It.WATER),dt.set(et,Ft-1,ot,It.WATER),dt.set(et,Ft-2,ot,It.STONE),zt.set(Rt,Ft+1),[[_,v],[-_,-v]].forEach(([ae,fe])=>{let Ce=Math.floor(p.x+p.dx*y+_*U+ae*1.6),Ke=Math.floor(p.z+p.dz*y+v*U+fe*1.6),Sn=Ce+","+Ke;if(H.has(Sn)||k.has(Sn)||!zt.has(Sn))return;let Zn=zt.get(Sn),Gn=Math.min(Zn,Ft+3);if(Gn<Zn){for(let xs=Gn;xs<Zn;xs++)dt.set(Ce,xs,Ke,It.AIR);zt.set(Sn,Gn)}dt.set(Ce,Gn-1,Ke,Y()<.6?It.GRASS:It.MOSSY),Y()<.35&&dt.plant(Ce+.5,Gn,Ke+.5,Y()<.6?mt.TUFT:Y()<.5?mt.FL_BLUE:mt.FL_WHITE,.8)})}}for(let y=-1;y<=1;y++)re.push([Math.floor(p.x+p.dx*(C+.3)+_*y)+.5,Math.floor(p.z+p.dz*(C+.3)+v*y)+.5])}{let p=nc(77);zt.forEach((_,v)=>{let[C,k]=v.split(",").map(Number),H=Yt(C+.5,k+.5);H.i<0||_<1||_>us[H.i][3]*.32||p()>.035||Math.hypot(C-zn.x,k-zn.z)<zn.r*.9&&Math.abs((C-zn.x)*-zn.dz+(k-zn.z)*zn.dx)<3||dt.get(C,_,k)||cs(dt,C,_,k,"pine",p)})}let ue=w1(q,!0),xt=-1+.88,vt=new Pt(new We(1,1,.1,32),tu);vt.scale.set(ne.rx,1,ne.rz),vt.position.set(ne.x,xt,ne.z),q.add(vt);{let p=new Ee({map:hi(mt.LILY),transparent:!0,alphaTest:.5,side:An});[[-4.5,1],[3.5,-1.6],[5.2,1.2],[-2.6,-1.4]].forEach(([_,v])=>{let C=new Pt(new ss(1,1),p);C.rotation.x=-Math.PI/2,C.rotation.z=_,C.position.set(ne.x+_*ne.rz/4,xt+.02,ne.z+v*ne.rz/4),q.add(C)})}for(let p=0;p<14;p++){let _=Y()*6.28,v=ne.x+Math.cos(_)*(ne.rx+.7),C=ne.z+Math.sin(_)*(ne.rz+.7);dt.plant(v,0,C,mt.REED,1.1)}let F=(()=>{let p=new Kt;p.position.set(Math.floor(ne.x)+.5,0,Math.floor(ne.z)+.5),q.add(p);let _=new Ee({map:hi(mt.COBBLE)}),v=new Ee({map:hi(mt.WATER),transparent:!0,opacity:.85});for(let U=-1;U<=1;U++)for(let et=-1;et<=1;et++)(U||et)&&p.add(I(1,.5,1,0,U,-.25+.1,et,_));p.add(I(1,1.6,1,0,0,.3,0,_)),p.add(I(1.6,.3,1.6,0,0,1.15,0,_));let C=I(1.2,.08,1.2,0,0,1.33,0,v);p.add(C);let k=new $e({color:14677247,transparent:!0,opacity:.85,depthWrite:!1}),H=new Pt(new ke(.18,.8,.18),k);H.position.y=1.75,p.add(H);let y=[];for(let U=0;U<14;U++){let et=new Pt(new ke(.1,.1,.1),k);p.add(et),y.push({m:et,a:U/14*Math.PI*2,t:U/14})}return{g:p,jet:H,drops:y,rimR:1.3}})(),Zt=T1(q,Y,!0),wt=[],Ht=(p,_)=>wt.some(v=>p>v.x0-1&&p<v.x1+1&&_>v.z0-1&&_<v.z1+1),Lt=(p,_)=>!Ht(p,_)&&ki(p,_,2.2)&&!Ei(p,_,1.5)&&!ec(p,_,.8)&&!Wh(p,_,.6)&&Vs(p,_)>2.4&&!Pd(p,_)&&!sc(p,_,1.2)&&!Pn.some(([v,C,k,H])=>p>=Math.min(v,k)-vi-.3&&p<=Math.max(v,k)+vi+.3&&_>=Math.min(C,H)-vi-.3&&_<=Math.max(C,H)+vi+.3)&&!tn.some(([v,C])=>Math.abs(p-v)<3.6&&Math.abs(_-C)<3.8)&&!(Math.abs(p-Mn[0])<6&&Math.abs(_-Mn[1])<5.4)&&Yt(p,_).h<.5,oe=(t.houses||[]).findIndex(p=>p.id==="love"),Bt=(p,_)=>{if(vn)return ec(p,_,1.2);if(oe<0||!tn[oe])return!1;let[v,C]=tn[oe];return Math.abs(p-v)<7&&_>C+2.5&&_<C+12||Math.abs(_-C)<3.5&&Math.abs(p-v)<8.5||Math.abs(p-v)<3.5&&_<C&&_>C-8};{let v=(H,y)=>zt.get(H+","+y),C=(H,y)=>{for(let U=H-1;U<=H+11;U++)for(let et=y-1;et<=y+7;et++)if(v(U,et)!==0||!Lt(U+.5,et+.5)||Bt(U+.5,et+.5))return!1;return!0},k=[];for(let H=-_t+4;H<_t-7-4;H+=2)for(let y=-$+4;y<$-11-4;y+=2)C(y,H)&&k.push([y,H]);k.sort((H,y)=>y[1]-H[1]||Math.abs(H[0])-Math.abs(y[0]));for(let[H,y]of k){if(wt.length>=2)break;if(wt.some(Et=>Math.hypot(Et.x0-H,Et.z0-y)<18)||!C(H,y))continue;wt.push({x0:H,z0:y,x1:H+11,z1:y+7});let U=[mt.WHEAT,mt.CARROT,mt.SPROUT];for(let Et=H+1;Et<H+11-1;Et++)for(let Ft=y+1;Ft<y+7-1;Ft++){if(Ft===y+Math.floor(3.5)){dt.set(Et,-1,Ft,It.WATER);continue}dt.set(Et,-1,Ft,It.FARM),dt.tint.set(dt.idx(Et,-1,Ft),1),dt.plant(Et+.5,0,Ft+.5,U[(Ft<y+7/2?0:1)+(Et>H+11-4?1:0)],.95)}let et=Ze(mt.PLANKS),ot=Ze(mt.LOG),Rt=H+Math.floor(11/2),at=(Et,Ft,ae,fe)=>{let Ce=Math.hypot(ae-Et,fe-Ft),Ke=Math.round(Ce);for(let Sn=0;Sn<=Ke;Sn++){let Zn=Et+(ae-Et)*Sn/Ke,Gn=Ft+(fe-Ft)*Sn/Ke;if(Ft===fe&&Ft===y+7&&Math.abs(Zn-Rt-.5)<.6)continue;q.add(I(.25,1,.25,0,Zn,.5,Gn,ot));let xs=new He;xs.position.set(Zn,0,Gn),xs.userData.post=.7,q.add(xs),Sn<Ke&&!(Ft===fe&&Ft===y+7&&Math.abs(Zn+(ae-Et)/Ke/2-Rt-.5)<1)&&[.4,.8].forEach(op=>{let ap=I(Ft===fe?1:.1,.1,Ft===fe?.1:1,0,Zn+(ae-Et)/Ke/2,op,Gn+(fe-Ft)/Ke/2,et);q.add(ap)})}};at(H,y,H+11,y),at(H+11,y,H+11,y+7),at(H,y+7,H+11,y+7),at(H,y,H,y+7),[[H,y],[H+11,y],[H,y+7],[H+11,y+7]].forEach(([Et,Ft])=>{let ae=Od();ae.position.set(Et,1.2,Ft),q.add(ae)})}}{let p=Ve.drive.concat(Ve.spiral),_=0,v=0;for(let C=1;C<p.length;C++){let k=p[C-1],H=p[C],y=H.x-k.x,U=H.z-k.z,et=Math.hypot(y,U);if(_+=et,_<5.5)continue;_=0,v++;let ot=-U/et,Rt=y/et;[-1,1].forEach(at=>{let Et=(v+(at>0?1:0))%2===0,Ft=Et?Gs+.8:Gs+2.6,ae=H.x+ot*Ft*at,fe=H.z+Rt*Ft*at;if(!ki(ae,fe,1)||ec(ae,fe,.5)||Kh(ae,fe,.5)||Ve.roadDist(ae,fe)<Ft-.4)return;let Ce=Math.floor(ae),Ke=Math.floor(fe),Sn=zt.get(Ce+","+Ke);if(Sn!=null)if(Et){let Zn=Sd();Zn.position.set(Ce+.5,Sn,Ke+.5),q.add(Zn);let Gn=new He;Gn.position.set(Ce+.5,0,Ke+.5),Gn.userData.post=.3,q.add(Gn)}else dt.get(Ce,Sn,Ke)||cs(dt,Ce,Sn,Ke,"cherry",Y)})}}{let p=nc(61),_=Ve,v=[];for(let C=0;C<900&&v.length<70;C++){let k=p()*Math.PI*2,H=_.Rp+1+p()*(_.R-_.Rp),y=_.x+Math.cos(k)*H,U=_.z+Math.sin(k)*H;if(!ki(y,U,2)||ec(y,U,2)||Kh(y,U,2.5)||_.roadDist(y,U)<Gs+2.4||Math.abs(y-Mn[0])<7&&Math.abs(U-Mn[1])<6)continue;let et=Math.floor(y),ot=Math.floor(U);if(v.some(([at,Et])=>Math.hypot(at-et,Et-ot)<3.4))continue;let Rt=zt.get(et+","+ot);Rt==null||Rt<1||dt.get(et,Rt,ot)||(cs(dt,et,Rt,ot,["oak","oak","pine","birch","mint","pine"][p()*6|0],p),v.push([et,ot]))}}let P=[],T=(p,_)=>{let v=p+","+_,C=zt.get(v);C!=null&&(dt.set(p,C-1,_,It.DIRT),dt.set(p,C,_,It.GRASS),dt.tint.set(dt.idx(p,C,_),.97+Y()*.05),zt.set(v,C+1))},Q=(p,_,v)=>{let C=Math.floor(p),k=Math.floor(_);if(!Lt(C+.5,k+.5)||Bt(C+.5,k+.5)||P.some(([U,et])=>Math.hypot(U-C,et-k)<3.2))return!1;let H=v||(Y()<.1?"cherry":["oak","oak","birch","mint","pine"][Y()*5|0]);cs(dt,C,zt.get(C+","+k)||0,k,H,Y);let y=new He;return y.position.set(C+.5,0,k+.5),y.userData.post=1.2,q.add(y),P.push([C,k]),!0};for(let _=0;_<20;_++){let v=(_+.5+(Y()-.5)*.35)/20*Math.PI*2,C=Ir(v)-5.5-Y()*2,k=Math.cos(v)*C,H=Fe.cz+Math.sin(v)*C,y=2.5+Y()*1.5;if(Lt(k,H)&&!Bt(k,H)){for(let ot=Math.floor(k-y);ot<=k+y;ot++)for(let Rt=Math.floor(H-y);Rt<=H+y;Rt++)Math.hypot(ot+.5-k,(Rt+.5-H)*1.2)<y&&Lt(ot+.5,Rt+.5)&&!Bt(ot+.5,Rt+.5)&&T(ot,Rt);let et=new He;et.position.set(k,0,H),et.userData.post=y,q.add(et)}let U=2+(Y()*3|0);for(let et=0;et<U*4&&U>0;et++){let ot=Y()*6.28,Rt=Y()*3.4;Q(k+Math.cos(ot)*Rt,H+Math.sin(ot)*Rt)&&U--}for(let et=0;et<3;et++){let ot=Y()*6.28,Rt=2.2+Y()*2,at=Math.floor(k+Math.cos(ot)*Rt),Et=Math.floor(H+Math.sin(ot)*Rt);if(!Lt(at+.5,Et+.5)||Bt(at+.5,Et+.5)||dt.get(at,ie(at,Et),Et))continue;let Ft=ie(at,Et);dt.set(at,Ft,Et,Y()<.5?It.LEAF_G:It.LEAF_M),Y()<.4&&dt.plant(at+.5,Ft+1,Et+.5,[mt.FL_PINK,mt.FL_WHITE,mt.FL_YELLOW][Y()*3|0],.8)}}for(let p=0,_=0;p<600&&_<10;p++)Q((Y()-.5)*Fe.w,(Y()-.5)*Fe.d,["oak","birch","mint"][Y()*3|0])&&_++;{let p=[mt.FL_PINK,mt.FL_WHITE,mt.FL_YELLOW,mt.FL_BLUE,mt.FL_LAV];for(let _=0,v=0;_<6e3&&v<520;_++){let C=(Y()-.5)*(Fe.w-4),k=(Y()-.5)*(Fe.d-4);if(!Lt(C,k)||Bt(C,k))continue;let H=Math.floor(C),y=Math.floor(k),U=ie(H,y);dt.get(H,U,y)||(dt.plant(H+.5,U,y+.5,Y()<.32?p[Y()*p.length|0]:mt.TUFT,.8+Y()*.3),v++)}for(let _=0,v=0;_<800&&v<9;_++){let C=Math.floor((Y()-.5)*(Fe.w-8)),k=Math.floor((Y()-.5)*(Fe.d-8));if(!Lt(C+.5,k+.5)||Bt(C+.5,k+.5))continue;let H=ie(C,k),y=Y()<.5?It.COBBLE:It.MOSSY;dt.set(C,H,k,y),Y()<.6&&dt.set(C+1,H,k,It.STONE),Y()<.4&&dt.set(C,H+1,k,y);let U=new He;U.position.set(C+1,0,k+.5),U.userData.post=1.2,q.add(U),v++}}{let p=dt.build(.88);q.add(p.solid,p.water,p.plants)}let gt=[];{let p=new $e({color:16777215,transparent:!0,opacity:.5,depthWrite:!1});re.forEach(([_,v])=>{for(let C=0;C<4;C++){let k=new Pt(new ke(.5,.5,.5),p.clone());k.position.set(_+Gt(-.6,.6),0,v+Gt(0,1.2)),q.add(k),gt.push({m:k,t:Math.random(),x:k.position.x,z:k.position.z})}})}let Mt=[0,1,2].map(p=>{let _=[];for(let k=0;k<9;k++){let H=Math.random()*6.283,y=Math.sqrt(Math.random())*.85;_.push(ne.x+Math.cos(H)*ne.rx*y,xt+.15,ne.z+Math.sin(H)*ne.rz*y)}for(let k=0;k<7;k++){let H=ue.curve.getPointAt(Math.random());_.push(H.x+(Math.random()-.5)*1.2,xt+.12,H.z+(Math.random()-.5)*1.2)}let v=new ze;v.setAttribute("position",new xe(_,3));let C=new Ls(v,new os({size:.9,map:B,color:[16777215,16774072,16766698][p],transparent:!0,opacity:0,depthWrite:!1}));return C.userData={base:.6,ph:p*2.1},q.add(C),C}),G=[];Pn.forEach(([p,_,v,C])=>[.3,.72].forEach(k=>{let H=p===v,y=Hn(p,v,k)+(H?vi+.6:0),U=Hn(_,C,k)+(H?0:vi+.6);tn.some(([et,ot])=>Math.abs(y-et)<3.6&&Math.abs(U-ot)<4.2)||Math.abs(y-Mn[0])<6.2&&Math.abs(U-Mn[1])<6||Ei(y,U,1.5)||Bt(y,U)||!ki(y,U,2)||Wh(y,U,.5)||Vs(y,U)<2||sc(y,U,1)||Pd(y,U)||G.push([y,U])})),G.slice(0,7).forEach(([p,_],v)=>{let C=Sd();if(C.position.set(p,Nn(p,_),_),C.userData.post=.3,q.add(C),v%2===0&&M.length<3){let k=new Co(16763255,0,12,1.6);k.position.set(p,Nn(p,_)+2.7,_),q.add(k),M.push(k)}});let tt=[],j=[];(t.houses||[]).forEach((p,_)=>{if(!tn[_])return;let v=p.id==="love"?p1():p.special==="arcade"?m1():p.special==="store"?g1():bd(p,!1);v.position.set(tn[_][0],Nn(tn[_][0],tn[_][1]),tn[_][1]),v.rotation.y=hs[_]||0,v.userData.face=hs[_]||0,v.userData.id=p.id,q.add(v),tt.push(v);let C=v.userData.face;j.push({x:tn[_][0]+Math.sin(C)*v.userData.doorZ,z:tn[_][1]+Math.cos(C)*v.userData.doorZ})});let ht=_1(q,vn&&hs[vn.house]||0),Nt=bd(null,!0);Nt.position.set(Mn[0],Nn(Mn[0],Mn[1]),Mn[1]),Nt.userData.id="hall",q.add(Nt),tt.push(Nt);let it={x:Mn[0],z:Mn[1]+Nt.userData.doorZ};j.push(it);let nt=A1(j),Ot=nt.doorNodes[nt.doorNodes.length-1];(function(){q.updateMatrixWorld(!0);let _=new Set,v=H=>{H&&H.traverse(y=>_.add(y))};v(vt),Zt.ducks.forEach(H=>v(H.g)),tt.forEach(H=>{v(H.userData.hinge),v(H.userData.flag),v(H.userData.bell)}),v(ht.car),v(F.jet),F.drops.forEach(H=>v(H.m));let C=new Map,k=[];q.traverse(H=>{if(!H.isMesh||H.isInstancedMesh||_.has(H)||H.userData.keepBatch||Array.isArray(H.material)||H.material.transparent)return;let y=H.geometry.clone();Object.keys(y.attributes).forEach(U=>{U!=="position"&&U!=="normal"&&U!=="uv"&&y.deleteAttribute(U)}),y.attributes.uv&&(y.index&&(y=y.toNonIndexed()),y.clearGroups(),y.applyMatrix4(H.matrixWorld),C.has(H.material)||C.set(H.material,[]),C.get(H.material).push(y),k.push(H))}),k.forEach(H=>H.parent.remove(H)),C.forEach((H,y)=>{let U=Qa(H,!1);if(H.forEach(ot=>ot.dispose()),!U)return;let et=new Pt(U,y);et.castShadow=!0,et.receiveShadow=!0,q.add(et)})})();let bt=[],lt={her:null,him:null,home:null,kiss:0},se=p=>nt.nodes[nt.doorNodes[p]],le={},jt=p=>le[p]||0;function X(p,_,v){let C=Fo(p);q.add(C.g);let k=se(_);return C.g.position.set(k.x+Gt(-.6,.6),0,k.z+Gt(0,.4)),Object.assign(C,{kind:"person",i:bt.length,home:_,path:[],speed:Gt(1.35,1.75),wait:Gt(0,3),t:Gt(0,6),v:0,goal:"",inside:!1},v||{}),bt.push(C),C}(t.houses||[]).forEach((p,_)=>{if(!(_>=tn.length))if(p.id==="love")lt.home=_,lt.her=X($h.her,_,{love:"her"}),lt.him=X($h.him,_,{love:"him"});else{let v=oc[_]||oc[_%9]||oc[0];X(v,_,{hallReg:!!v.uniform})}});let Ut=Object.assign(M1(),{kind:"cat",path:[],speed:1.1,wait:2,t:0,sit:!0}),ct=Object.assign(v1(),{kind:"dog",path:[],speed:2.2,wait:1,t:0,buddy:0});{let p=nt.nodes[nt.doorNodes[2]],_=nt.nodes[nt.doorNodes[nt.doorNodes.length-1]];Ut.g.position.set(p.x+1.5,0,p.z+.6),ct.g.position.set(_.x+3,0,_.z+.8)}q.add(Ut.g,ct.g);let yt=[0,1,2,0,1].map((p,_)=>{let v=Ad(p);return v.scale.setScalar(.8),q.add(v),{g:v,t:.15+_*.16,dir:_%2?1:-1,sp:Gt(.012,.022),side:Gt(-.35,.35),ph:Gt(0,6)}}),qt=[0,1,2,3].map(p=>{let _=Ad(p);return q.add(_),{g:_,a:Gt(0,6.28),r:Gt(.62,.92),sp:Gt(.25,.5)*(p%2?1:-1),jump:0,jx:0,jz:0}});function Wt(){let p=document.createElement("canvas");p.width=128,p.height=64;let _=p.getContext("2d");_.font="bold 34px sans-serif",_.fillStyle="#7a6a9a",_.fillText("z",18,52),_.font="bold 26px sans-serif",_.fillText("z",52,36),_.font="bold 20px sans-serif",_.fillText("z",82,22);let v=new rs(new Bi({map:new _n(p),transparent:!0,depthWrite:!1}));return v.scale.set(1.1,.55,1),v.visible=!1,q.add(v),v}Ut.zzz=Wt(),ct.zzz=Wt();let pe=kd("\u2665","#ff6f91",.9,.45);q.add(pe);let Pe=new O,on=0,be=[],kn=new yn(.09,6,5);function Qn(p,_){for(let v=0;v<7;v++){let C=Math.random()*6.28,k=Math.random()*.8,H=p+Math.cos(C)*k,y=_+Math.sin(C)*k*.7;if(!Ei(H,y,-.8))continue;let U=new Pt(kn,ge(v%2?13208410:14723437));U.position.set(H,1.6+Math.random()*.6,y),q.add(U),be.push({m:U,vy:0,life:25})}}let ds=[];function Lr(p,_,v){let C=new Pt(new So(.18,.24,18),new $e({color:15399167,transparent:!0,opacity:.6,side:An,depthWrite:!1}));C.rotation.x=-Math.PI/2,C.position.set(p,-.09,_),C.renderOrder=3,C.userData.size=v,q.add(C),ds.push(C)}let nn=new Pt(new So(.34,.42,24),new $e({color:15399167,transparent:!0,opacity:0,side:An,depthWrite:!1}));nn.rotation.x=-Math.PI/2,nn.renderOrder=3,q.add(nn);let Ws=[16758465,14273008,16375946,11591910].map((p,_)=>{let v=E1(p);return q.add(v),{g:v,ph:_*1.7,cx:Gt(-25,25),cz:Gt(-15,15)}}),Dr=new ze,Ur=[];for(let p=0;p<40;p++)Ur.push(Gt(-30,30),Gt(1,3),Gt(-20,20));Dr.setAttribute("position",new xe(Ur,3));let Gi=new Ls(Dr,new os({color:16773792,size:.35,transparent:!0,opacity:0}));q.add(Gi);let Vn=0;function di(){let p=new Date;return p.getHours()+p.getMinutes()/60}function ps(p){return p>=23||p<6.5?"sleep":p<7?"morning":p<11.5?"work":p<13?"lunch":p<16.5?"work":p<21?"evening":"home"}function ms(p){let _=p%18,v=Math.floor(_/6),C=_%6;return{x:it.x+(C-2.5)*1.2+v%2*.6,z:it.z+1.3+v*1.1}}function On(p,_,v){if(p.goal=v,p.path=au(p,_),!p.path.length){let C=nt.nearest(p.g.position.x,p.g.position.z),k=nt.nearest(_.x,_.z);p.path=nt.path(C,k).concat([_])}}function Nr(p){let _=se(p),v=hs[p]||0;return{x:_.x-Math.sin(v)*.9,z:_.z-Math.cos(v)*.9,f:v}}function pi(p){let _=Nr(p.home);p.inside=!1,p.g.visible=!0,p.g.position.set(_.x+Gt(-.3,.3),0,_.z),p.g.rotation.set(0,_.f,0)}function R(p,_){let v=Nr(p.home);On(p,{x:v.x,z:v.z},"in"),p.stay=_}let K=tt.findIndex(p=>p.userData.alwaysLit),st=null,rt=null;function J(){if(!st){st=tn.map((p,_)=>{let v=se(_);return[[-1.7,-.5],[1.7,-.5],[-.9,.2],[.9,.2]].map(([C,k])=>({x:v.x+C,z:v.z+k})).filter(C=>!Se(C.x,C.z,.15))}),rt=[];for(let p=0;p<18;p++){let _={x:ne.x+Math.cos(p/18*6.283)*(ne.rx+2.2),z:ne.z+Math.sin(p/18*6.283)*(ne.rz+1.9)};Se(_.x,_.z,.2)||rt.push(_)}}}let Dt=p=>p[Math.floor(Math.random()*p.length)];function kt(p){J();let _=st[p.home];return _.length?Dt(_):se(p.home)}function Jt(p,_){J();let v=Math.random();if(_==="lunch"&&K>=0&&v<.6){let C=se(K);return{x:C.x+Gt(-2.6,2.6),z:C.z+Gt(0,.8)}}if(_==="lunch"&&v<.75)return ms(Math.floor(Gt(0,18)));if(v<.4&&rt.length)return Dt(rt);if(v<.85){let C=se(Math.floor(Gt(0,tn.length)));return{x:C.x+Gt(-1,1),z:C.z+Gt(0,.5)}}return ms(Math.floor(Gt(0,18)))}function te(p){if(p.love==="him"||p.pair)return;let _=ps(di());if(p.love==="her")return me(p,_);let v=jt(p.home)>0;if(p.helper&&jt(p.home)<p.helper){p.inside&&pi(p),On(p,{x:it.x,z:it.z},"leave");return}if(Vn&&!v&&_!=="sleep"&&_!=="home"&&!p.helper){p.inside&&pi(p),(p.goal!=="hall"||p.path.length)&&On(p,ms(p.i),"hall"),p.wait=Gt(3,6);return}if(p.hallReg&&_==="work"&&!v&&!p.helper){if(p.inside&&pi(p),p.goal==="hallwork"){On(p,kt(p),"work"),p.wait=Gt(6,14);return}if(p.goal==="work"&&Math.random()<.5){R(p,Gt(4,8));return}On(p,ms(p.i),"hallwork"),p.wait=Gt(10,22);return}if(v||_==="work"){if(p.inside){pi(p),On(p,kt(p),"work");return}if(p.goal==="work"){R(p,Gt(3,v?6:10));return}On(p,kt(p),"work");return}if(_==="sleep"||_==="home"){if(p.inside){p.wait=Gt(20,40);return}R(p,Gt(20,40));return}if(p.inside)pi(p);else if(Math.random()<.15){R(p,Gt(5,12));return}On(p,Jt(p,_),"stroll"),p.wait=Gt(2,6)}function me(p,_){let v=lt.him;if(_==="sleep"||_==="home"||di()>=20.5){if(_e(),p.inside){p.wait=Gt(30,60);return}R(p,Gt(30,60));return}if(p.inside&&(pi(p),pi(v),v.g.position.x+=.7),p.sitting){_e(),On(p,Jt(p,_),"stroll"),p.wait=Gt(2,5);return}if(he&&Math.random()<.55){On(p,he.userData.front,"swing");return}On(p,Jt(p,_),"stroll"),p.wait=Gt(2,5)}function _e(){[lt.her,lt.him].forEach(p=>{!p||!p.sitting||(p.sitting=!1,p.g.position.set(he.userData.front.x+(p.love==="her"?-.4:.4),0,he.userData.front.z),p.g.rotation.set(0,he.rotation.y,0))})}function ee(p){p.goal==="in"?(p.inside=!0,p.g.visible=!1,p.wait=p.stay||10):p.goal==="work"?p.wait=Gt(6,12):p.goal==="swing"?(p.sitting=!0,p.wait=Gt(15,30)):p.goal==="leave"&&(q.remove(p.g),bt.splice(bt.indexOf(p),1))}function we(p,_){return Ie(lt.her,p,_)}function Ie(p,_,v){if(p.inside){if(_.inside)return!1;let Ft=Nr(_.home),ae=Ft.x-_.g.position.x,fe=Ft.z-_.g.position.z,Ce=Math.hypot(ae,fe);if(Ce<.15)return _.inside=!0,_.g.visible=!1,!1;let Ke=Math.min(Ce,p.speed*1.2*v);return _.g.position.x+=ae/Ce*Ke,_.g.position.z+=fe/Ce*Ke,_.g.rotation.y=Math.atan2(ae,fe),_.v=p.speed,!0}if(_.inside&&(pi(_),_.g.position.x+=.7),p.sitting)return _.love&&(_.sitting=!0),!1;_.sitting=!1;let C=p.g.rotation.y,k=p.g.position.x-Math.cos(C)*.72,H=p.g.position.z+Math.sin(C)*.72,y=k-_.g.position.x,U=H-_.g.position.z,et=Math.hypot(y,U);if(et<.05){_.v=0;let Ft=C-_.g.rotation.y;return Ft=Math.atan2(Math.sin(Ft),Math.cos(Ft)),_.g.rotation.y+=Ft*Math.min(1,v*6),!1}let ot=Math.min(p.speed*1.35,et*4);_.v=(_.v||0)+(ot-(_.v||0))*Math.min(1,v*5);let Rt=Math.min(et,_.v*v);_.g.position.x+=y/et*Rt,_.g.position.z+=U/et*Rt;let Et=(et>.35?Math.atan2(y,U):C)-_.g.rotation.y;return Et=Math.atan2(Math.sin(Et),Math.cos(Et)),_.g.rotation.y+=Et*Math.min(1,v*7),_.v>.15}{let p=ps(di());(p==="sleep"||p==="home")&&bt.forEach(_=>{_.inside=!0,_.g.visible=!1,_.wait=Gt(5,30)})}let Ae=tt.filter(p=>p.userData.id!=="hall").map(p=>{let _=p.userData.size,v=p.userData.face||0,C=Math.abs(Math.sin(v))>.5;if(!_)return{x:p.position.x,z:p.position.z,hw:3.3,hd:2.6};let k=Math.cos(v)*_.cx,H=-Math.sin(v)*_.cx;return{x:p.position.x+k,z:p.position.z+H,hw:C?_.hd:_.hw,hd:C?_.hw:_.hd}}).concat([{x:Mn[0],z:Mn[1],hw:5.8,hd:4.1}]),sn=[];q.children.forEach(p=>{p.userData.post&&sn.push({x:p.position.x,z:p.position.z,r:p.userData.post})}),Zt.posts.forEach(p=>sn.push(p));function Se(p,_,v){return v=v||.5,!ki(p,_,2.5)||Wh(p,_,0)||Vs(p,_)<1.8&&!ue.bridges.some(C=>Math.hypot(C.x-p,C.z-_)<2.4)||Ei(p,_,.9+v)||Ae.some(C=>Math.abs(p-C.x)<C.hw+v&&Math.abs(_-C.z)<C.hd+v)?!0:sn.some(C=>Math.hypot(p-C.x,_-C.z)<C.r+v*.6)}function Qt(p,_){let v=Math.ceil(Math.hypot(_.x-p.x,_.z-p.z)/.4);for(let C=1;C<=v;C++){let k=C/v;if(Se(Hn(p.x,_.x,k),Hn(p.z,_.z,k),.45))return!1}return!0}let ti=(p,_,v)=>Pn.some(([C,k,H,y])=>p>=Math.min(C,H)-vi-v&&p<=Math.max(C,H)+vi+v&&_>=Math.min(k,y)-vi-v&&_<=Math.max(k,y)+vi+v),he=null;if(ht.blocks.forEach(p=>Ae.push(p)),ht.posts.forEach(p=>sn.push(p)),lt.home!=null&&vn&&vn.house===lt.home){let[p,_]=vn.swing,v=hs[lt.home]||0;he=Rd(),he.position.set(p,Nn(p,_),_),he.rotation.y=v,q.add(he),he.userData.front={x:p+Math.sin(v)*1.25,z:_+Math.cos(v)*1.25},Ae.push({x:p,z:_,hw:1.55,hd:1.55}),Ae.push({x:p-Math.cos(v)*2,z:_+Math.sin(v)*2,hw:.8,hd:.8})}else if(lt.home!=null){let[p,_]=tn[lt.home],v=[[0,7.2],[0,6.4],[-2.2,7.2],[2.2,7.2],[0,8.4],[4.6,.8],[-4.6,.8],[0,-5.2]],C=(k,H)=>!ki(k,H,2.5)||Ei(k,H,1)||Ae.some(y=>Math.abs(k-y.x)<y.hw+.1&&Math.abs(H-y.z)<y.hd+.1)||ti(k,H,0);for(let[k,H]of v){let y=p+k,U=_+H;if([[-1.6,-.9],[1.6,-.9],[-1.6,.9],[1.6,.9],[0,0],[0,1.6],[-.5,1.6],[.5,1.6]].every(([ot,Rt])=>!C(y+ot,U+Rt))){q.children.slice().forEach(ot=>{if(ot.userData.post&&Math.abs(ot.position.x-y)<2.6&&Math.abs(ot.position.z-U)<2.2){q.remove(ot);let Rt=sn.findIndex(at=>at.x===ot.position.x&&at.z===ot.position.z);Rt>=0&&sn.splice(Rt,1)}}),he=Rd(),he.position.set(y,Nn(y,U),U),q.add(he),he.userData.front={x:y,z:U+1.25},Ae.push({x:y,z:U,hw:1.55,hd:.75});break}}}let bn=[],Wi=new yn(.28,8,6);function In(p){let _=new Pt(Wi,new Ee({color:16777215,transparent:!0,opacity:.75,depthWrite:!1})),v=p.userData.chimney;_.position.set(p.position.x+v.x+Gt(-.1,.1),v.y,p.position.z+v.z+Gt(-.1,.1)),q.add(_),bn.push({m:_,life:0})}let Xi=[3,6,10],Re=document.createElement("div");Re.className="v3d-names",n.appendChild(Re);let Xe=null,Yi=!1,an=new Map,pn=new O,ei=[3877418,9067068,2038564,13208410,5914688,11039050],Or=[10934504,16165309,16111752,10738109,14273008,16368540];function Wd(p,_,v){let C=Object.assign({},p,{hair:ei[_%ei.length],cap:void 0,glasses:!p.glasses&&_%3===0});return p.uniform||(C.shirt=Or[(_+2)%Or.length]),C.style=v==="f"?["long","bun","twin"][_%3]:"short",C}function Xd(){let p=Xe&&Xe.extra||{};(t.houses||[]).forEach((_,v)=>{if(_.id==="love")return;let C=bt.find(U=>U.home===v&&!U.love&&!U.helper&&!U.pair);if(!C)return;let k=bt.find(U=>U.pair===C),H=p[_.id];if(!H&&k){q.remove(k.g),bt.splice(bt.indexOf(k),1);let U=an.get(k);U&&(U.remove(),an.delete(k));return}if(!H)return;let y=Wd(C.baseLook||C.parts.look,v,H.g==="f"?"f":"m");if(k)k.mateG!==H.g&&(k.mateG=H.g,Td(k,y));else{let U=X(y,v,{pair:C,mateG:H.g});U.g.position.copy(C.g.position),U.g.position.x+=.7,U.inside=C.inside,U.g.visible=C.g.visible}})}function Yd(){let p=Xe&&Xe.genders||{};bt.forEach(_=>{if(_.love||_.helper||_.pair)return;let v=(t.houses||[])[_.home];if(!v)return;_.baseLook||(_.baseLook=_.parts.look);let C=p[v.id]?Hd(_.baseLook,p[v.id]):_.baseLook;C!==_.parts.look&&Td(_,C)})}function qd(p){if(!Xe)return"";if(p.love==="her")return Xe.her||"namu";if(p.love==="him")return Xe.him||"hunf";if(p.helper)return"";let _=(t.houses||[])[p.home];return!_||!_.pub&&!Yi?"":p.pair?Xe.extra&&Xe.extra[_.id]&&Xe.extra[_.id].name||"":Xe.people&&Xe.people[_.id]||""}function Zd(){bt.forEach(p=>{let _=qd(p),v=an.get(p);if(!_){v&&(v.remove(),an.delete(p));return}v||(v=document.createElement("span"),Re.appendChild(v),an.set(p,v)),v.textContent=_})}let hc=document.createElement("div");hc.className="v3d-bubbles",n.appendChild(hc);let Fr=[];function uc(p,_,v){Fr.filter(y=>y.p===p).forEach(y=>{y.t=0});let C=document.createElement("div");C.className="v3d-bubble-at";let k=document.createElement("div");k.className="v3d-bubble"+(v?" loud":""),k.textContent=_,C.appendChild(k);let H={p,el:C,t:2.4};Fr.push(H),ru(H),hc.appendChild(C)}function ru(p){let _=n.clientWidth||innerWidth,v=n.clientHeight||innerHeight;p.p.g.getWorldPosition(zr),zr.y+=2.2,zr.project(o),p.el.style.transform="translate("+Math.round((zr.x+1)/2*_)+"px,"+Math.round((1-zr.y)/2*v)+"px)",p.el.style.opacity=Math.min(1,p.t*3)}let zr=new O;function Kd(p){for(let _=Fr.length-1;_>=0;_--){let v=Fr[_];if(v.t-=p,v.t<=0||!v.p.g.visible||v.p.inside){v.el.remove(),Fr.splice(_,1);continue}ru(v)}}function fc(){let p=o.position.distanceTo(a.target),_=p<175&&an.size>0;if(Re.style.display=_?"":"none",!_)return;let v=n.clientWidth||innerWidth,C=n.clientHeight||innerHeight,k=C*1.8/(2*p*Math.tan(o.fov*Math.PI/360));Re.style.fontSize=Math.max(7,Math.min(12,k*.24)).toFixed(1)+"px",Re.classList.toggle("night",Br>.5);let H=performance.now(),y=H-(fc.t||0)>300;y&&(fc.t=H);let U=[];an.forEach((et,ot)=>{if(!ot.g.visible||ot.inside||bt.indexOf(ot)<0){et.style.display="none";return}if(ot.g.getWorldPosition(pn),pn.y+=2.05,y){let Et=pn.clone().sub(o.position),Ft=Et.length();dc.set(o.position,Et.normalize()),dc.far=Ft-.3,ot.hidden=dc.intersectObjects(Jd,!1).length>0}if(ot.hidden){et.style.display="none";return}if(pn.project(o),pn.z>1||Math.abs(pn.x)>1.1||Math.abs(pn.y)>1.1){et.style.display="none";return}let Rt=(pn.x+1)/2*v,at=(1-pn.y)/2*C;for(let Et=0;Et<4;Et++){let Ft=U.find(ae=>Math.abs(ae[0]-Rt)<34&&Math.abs(ae[1]-at)<12);if(!Ft)break;at=Ft[1]-13}U.push([Rt,at]),et.style.display="",et.style.transform="translate("+Rt.toFixed(1)+"px,"+at.toFixed(1)+"px) translate(-50%,-100%)"})}let dc=new wr,Jd=tt.map(p=>p.userData.pick).filter(Boolean);function ou(){tn.forEach((p,_)=>{if(_===lt.home)return;let v=Xi.filter(k=>jt(_)>=k).length,C=bt.filter(k=>k.helper&&k.home===_&&k.goal!=="leave");for(let k=C.length;k<v;k++){let H=X(wd[k%wd.length],_,{helper:Xi[k]});H.g.position.set(it.x+Gt(-1,1),0,it.z+Gt(0,.6)),On(H,kt(H),"work")}})}function au(p,_){let v={x:p.g.position.x,z:p.g.position.z};if(Qt(v,_))return[_];let C=nt.nearest(v.x,v.z),k=nt.nearest(_.x,_.z),H=nt.path(C,k);if(!Qt(v,H[0]))return[];let y=H[H.length-1];return Qt(y,_)&&H.push(_),H}function $d(p){if(p.kind==="dog"&&Math.random()<.65){let v=bt[p.buddy%bt.length];for(let H=0;H<bt.length&&(!v.g.visible||v.sitting);H++)v=bt[++p.buddy%bt.length];let C=v.g.position,k={x:C.x+Gt(-1.5,1.5),z:C.z+Gt(.8,1.6)};if(Math.random()<.15&&p.buddy++,!Se(k.x,k.z)&&(p.path=au(p,k),p.path.length))return}for(let v=0;v<30;v++){let C={x:p.g.position.x+Gt(-9,9),z:p.g.position.z+Gt(-7,7)};if(!Se(C.x,C.z,.8)&&Qt(p.g.position,C)){p.path=[C];return}}let _=nt.nodes[nt.nearest(p.g.position.x,p.g.position.z)];p.path=[{x:_.x,z:_.z}]}function cu(p,_){let v=p.g.position;if(p.sleep>0)return p.v=0,!1;if(!p.path.length){if(p.v=0,p.wait-=_,p.wait<=0){if(p.kind==="person")return p.wait=Gt(1.5,4),te(p),!1;$d(p),p.wait=Gt(2,6),p.kind==="cat"&&(p.sit=Math.random()<.45,p.sit&&(p.path=[]))}return!1}let C=p.path[0],k=C.x-v.x,H=C.z-v.z,y=Math.hypot(k,H);if(y<.08)return p.path.shift(),!p.path.length&&p.kind==="person"&&ee(p),!0;let et=Math.atan2(k,H)-p.g.rotation.y;et=Math.atan2(Math.sin(et),Math.cos(et)),p.g.rotation.y+=et*Math.min(1,_*7);let ot=y+(p.path.length>1?99:0),Rt=Math.abs(et)>1.1?p.speed*.15:p.speed*Math.min(1,ot/1.2+.25);p.v=(p.v||0)+(Rt-(p.v||0))*Math.min(1,_*4);let at=Math.min(y,p.v*_);return v.x+=Math.sin(p.g.rotation.y)*at*.35+k/y*at*.65,v.z+=Math.cos(p.g.rotation.y)*at*.35+H/y*at*.65,!0}function jd(p,_){if(bt.slice().forEach(y=>{if(y.wave>0&&!y.inside&&y.g.visible&&(y.v=0),y.pair&&bt.indexOf(y.pair)<0){q.remove(y.g),bt.splice(bt.indexOf(y),1);return}let U=y.wave>0?!1:y.love==="him"?we(y,p):y.pair?Ie(y.pair,y,p):cu(y,p);if(y.inside||!y.g.visible)return;if(y.sitting&&he){let at=y.love==="her"?-.4:.4;Pe.set(at,.06,0),he.userData.seat.localToWorld(Pe),q.worldToLocal(Pe),y.g.position.set(Pe.x,Pe.y-jh,Pe.z),y.g.rotation.set(he.userData.pivot.rotation.x*.9,he.rotation.y,0),y.parts.legL.rotation.x=y.parts.legR.rotation.x=-1.45+Math.sin(_*1.7)*.25,y.parts.armL.rotation.x=y.parts.armR.rotation.x=-.5,y.parts.head.rotation.set(0,0,0);return}if(y.parts.scroll&&(y.parts.scroll.visible=!!Vn&&y.goal==="hall"),y.wave>0){y.wave-=p;let at=o.position.x-q.position.x-y.g.position.x,Et=o.position.z-q.position.z-y.g.position.z,Ft=Math.atan2(at,Et)-y.g.rotation.y;Ft=Math.atan2(Math.sin(Ft),Math.cos(Ft)),y.g.rotation.y+=Ft*Math.min(1,p*8),y.parts.legL.rotation.x=y.parts.legR.rotation.x=0,y.parts.armL.rotation.x=0,y.parts.armR.rotation.x=-2.9,y.parts.armR.rotation.z=Math.sin(_*13)*.45,y.wave<=0&&(y.parts.armR.rotation.z=0);return}let et=Math.min(1,(y.v||0)/y.speed);y.t+=p*(U?3+7*et:2);let ot=U?Math.sin(y.t)*.75*et:0;y.parts.legL.rotation.x=ot,y.parts.legR.rotation.x=-ot,y.parts.armL.rotation.x=-ot*.8,y.parts.armR.rotation.x=ot*.8,y.g.rotation.x=0,y.parts.head.rotation.x=0,y.parts.head.rotation.z=0;let Rt=Nn(y.g.position.x,y.g.position.z);if(y.g.position.y=Rt+(U?Math.abs(Math.sin(y.t))*.06:0),!U&&!y.path.length){if(y.goal==="hall"){let at=Math.PI-y.g.rotation.y;at=Math.atan2(Math.sin(at),Math.cos(at)),y.g.rotation.y+=at*Math.min(1,p*6),y.g.position.y=Rt+Math.max(0,Math.sin(_*2.2+y.i))*.04,y.parts.armR.rotation.x=-1.35+Math.sin(_*1.6+y.i)*.08}else if(y.goal==="work"){let at=Math.PI-y.g.rotation.y;at=Math.atan2(Math.sin(at),Math.cos(at)),y.g.rotation.y+=at*Math.min(1,p*6),y.parts.armR.rotation.x=-1.3+Math.sin(_*9+y.i)*.55,y.parts.armL.rotation.x=-.9+Math.sin(_*9+y.i+1.6)*.35,y.parts.head.rotation.x=.25}y.parts.head.rotation.y=y.goal==="work"?0:Math.sin(_*.7+y.i)*.4}else y.parts.head.rotation.y=0}),lt.kiss>0&&lt.him&&lt.him.g.visible){lt.kiss-=p;let y=lt.her,U=lt.him,et=Math.min(1,Math.sin(Math.min(1,(2.4-lt.kiss)/2.4)*Math.PI)*1.6),ot=y.g.position.x-U.g.position.x,Rt=y.g.position.z-U.g.position.z;if(U.sitting)U.parts.head.rotation.y=.9*et,U.parts.head.rotation.z=.25*et,y.parts.head.rotation.z=-.15*et;else{let at=Math.atan2(ot,Rt)-U.g.rotation.y;at=Math.atan2(Math.sin(at),Math.cos(at)),U.g.rotation.y+=at*Math.min(1,p*8);let Et=Math.atan2(-ot,-Rt)-y.g.rotation.y;Et=Math.atan2(Math.sin(Et),Math.cos(Et)),y.g.rotation.y+=Et*Math.min(1,p*3)*.5,U.g.rotation.x=.2*et}pe.visible=!0,pe.position.set((y.g.position.x+U.g.position.x)/2,2+(2.4-lt.kiss)*.35,(y.g.position.z+U.g.position.z)/2),pe.material.opacity=Math.min(1,lt.kiss*1.5),lt.kiss<=0&&(pe.visible=!1,U.g.rotation.x=0)}if(he){let y=he.userData.pivot,U=lt.her&&lt.her.sitting;y.rotation.x=U?Math.sin(_*1.7)*(lt.kiss>0?.12:.32):y.rotation.x*Math.max(0,1-p*1.5)}let v=ps(di());tt.forEach((y,U)=>{if(!y.userData.wm)return;let et=0;if(U===lt.home?et=0:(jt(U)>0||y.userData.alwaysLit||v!=="sleep"&&bt.some(ot=>ot.home===U&&ot.inside))&&(et=1),y.userData.lit=Hn(y.userData.lit||0,et,Math.min(1,p*2)),y.userData.wm.emissiveIntensity=Br*(.28+.7*y.userData.lit),y.userData.heart){let ot=lt.her&&lt.her.inside&&lt.him.inside;y.userData.heart.material.emissiveIntensity=ot?.5+Math.max(0,Math.sin(_*5))*1.3:.2}jt(U)>0&&y.userData.chimney&&Math.random()<p*2.2&&In(y)});for(let y=bn.length-1;y>=0;y--){let U=bn[y];U.life+=p,U.m.position.y+=p*.9,U.m.position.x+=p*.25,U.m.scale.setScalar(1+U.life*.9),U.m.material.opacity=Math.max(0,.75-U.life*.3),U.life>2.5&&(q.remove(U.m),U.m.material.dispose(),bn.splice(y,1))}on+=p,on>2&&(on=0,ou()),[Ut,ct].forEach(y=>{if(y.sleep>0){y.sleep-=p;let Rt=Math.min(1,y.sleepIn+=p*3);y.parts.legs.forEach((at,Et)=>{at.rotation.x=(Et<2?-1.45:1.45)*Rt}),y.g.position.y=Nn(y.g.position.x,y.g.position.z)-.22*Rt*y.g.scale.y,y.parts.head.rotation.x=.35*Rt,y.parts.head.rotation.y=0,y.parts.eyes.forEach(at=>{at.scale.y=1-.8*Rt}),y.parts.tail.rotation.z=Math.sin(_*.8)*.15,y.zzz.visible=!0,y.zzz.position.set(y.g.position.x,.95+_*.6%1*.45,y.g.position.z),y.zzz.material.opacity=.9-_*.6%1*.6,y.sleep<=0&&(y.zzz.visible=!1,y.parts.eyes.forEach(at=>{at.scale.y=1}),y.parts.head.rotation.x=0,y.wait=Gt(.3,1));return}let U=cu(y,p),et=Math.min(1,(y.v||0)/y.speed);y.t+=p*(U?4+8*et:2);let ot=U?Math.sin(y.t)*.6*et:0;y.parts.legs.forEach((Rt,at)=>{Rt.rotation.x=at===0||at===3?ot:-ot}),y.kind==="cat"?(y.parts.tail.rotation.z=Math.sin(_*2)*.35,y.parts.tail.rotation.x=y.sit&&!U?.9:.5,y.g.children[0].rotation.x=0,y.parts.head.rotation.y=U?0:Math.sin(_*.5)*.5,y.g.position.y=Nn(y.g.position.x,y.g.position.z)):(y.parts.tail.rotation.z=Math.sin(_*(U?18:10))*.6,y.parts.head.rotation.x=U?0:Math.sin(_*1.3)*.1,y.g.position.y=Nn(y.g.position.x,y.g.position.z)+(U?Math.abs(Math.sin(y.t))*.07:0))});for(let y=be.length-1;y>=0;y--){let U=be[y];U.m.position.y>-.08?(U.vy-=p*9,U.m.position.y=Math.max(-.08,U.m.position.y+U.vy*p),U.m.position.y===-.08&&Lr(U.m.position.x,U.m.position.z,.5)):U.m.position.y=-.08+Math.sin(_*3+y)*.015,U.life-=p,U.life<=0&&(q.remove(U.m),be.splice(y,1))}yt.forEach(y=>{y.t+=y.dir*y.sp*p,(y.t>.93||y.t<.12)&&(y.dir*=-1,y.t=Math.max(.12,Math.min(.93,y.t)));let U=ue.curve.getPointAt(y.t),et=ue.curve.getTangentAt(y.t),ot=y.side+Math.sin(_*.7+y.ph)*.2;y.g.position.set(U.x-et.z*ot,-.36,U.z+et.x*ot),y.g.rotation.y=Math.atan2(et.x*y.dir,et.z*y.dir),y.g.userData.tail.rotation.y=Math.sin(_*9+y.ph)*.5}),qt.forEach(y=>{y.a+=y.sp*p;let U=ne.x+Math.cos(y.a)*(ne.rx-1.6)*y.r,et=ne.z+Math.sin(y.a)*(ne.rz-1)*y.r,ot=null,Rt=1e9;if(be.forEach(at=>{if(at.m.position.y<=-.02){let Et=Math.hypot(at.m.position.x-y.g.position.x,at.m.position.z-y.g.position.z);Et<Rt&&(Rt=Et,ot=at)}}),ot&&!y.jump){let at=ot.m.position.x-y.g.position.x,Et=ot.m.position.z-y.g.position.z,Ft=Math.hypot(at,Et),ae=Math.min(Ft,2.6*p);y.g.position.x+=at/(Ft||1)*ae,y.g.position.z+=Et/(Ft||1)*ae,y.g.position.y=-.3,y.g.rotation.y=Math.atan2(at,Et),Ft<.25&&(q.remove(ot.m),be.splice(be.indexOf(ot),1),Lr(ot.m.position.x,ot.m.position.z,.6)),y.a=Math.atan2((y.g.position.z-ne.z)/(ne.rz-1),(y.g.position.x-ne.x)/(ne.rx-1.6)),y.r=Math.min(.85,Math.max(.2,Math.hypot((y.g.position.x-ne.x)/(ne.rx-1.6),(y.g.position.z-ne.z)/(ne.rz-1)))),y.g.userData.tail.rotation.y=Math.sin(_*16+y.a)*.6;return}if(y.jump>0){y.jump+=p*.9;let at=Math.sin(y.jump*Math.PI)*1.8;y.g.position.set(Hn(y.jx,U,y.jump),-.34+at,Hn(y.jz,et,y.jump)),y.g.rotation.x=-Math.cos(y.jump*Math.PI)*1.1,y.jump>=1&&(y.jump=0,y.g.rotation.x=0,nn.position.set(U,-.09,et),nn.material.opacity=.55,nn.scale.setScalar(1))}else{let at=U-y.g.position.x,Et=et-y.g.position.z;y.g.position.set(Hn(y.g.position.x,U,Math.min(1,p*6)),-.34,Hn(y.g.position.z,et,Math.min(1,p*6))),(at||Et)&&(y.g.rotation.y=Math.atan2(at,Et)),Math.random()<p*.05&&(y.jump=.001,y.jx=U,y.jz=et,nn.position.set(U,-.09,et),nn.material.opacity=.55,nn.scale.setScalar(1))}y.g.userData.tail.rotation.y=Math.sin(_*8+y.a)*.5}),ue.glints.forEach(y=>{y.t=(y.t+y.sp*p*6)%1;let U=ue.curve.getPointAt(y.t),et=ue.curve.getTangentAt(y.t);y.m.position.set(U.x-et.z*y.side,.06,U.z+et.x*y.side),y.m.rotation.z=-Math.atan2(et.z,et.x),y.m.material.opacity=.35+Math.abs(Math.sin(_*3+y.side*9))*.5}),ue.ftex.offset.y=(ue.ftex.offset.y+p*1.6)%1,F.jet.scale.y=1+Math.sin(_*6)*.08,gt.forEach(y=>{y.t=(y.t+p*.35)%1,y.m.position.set(y.x+Math.sin(y.t*6+y.z)*.3,-.1+y.t*1.8,y.z+y.t*.8),y.m.material.opacity=.55*(1-y.t),y.m.scale.setScalar(.6+y.t*1.2)}),F.drops.forEach(y=>{y.t=(y.t+p*.7)%1;let U=.15+y.t*.95,et=2.25+y.t*.6-y.t*y.t*2.35;y.m.position.set(Math.cos(y.a)*U,et,Math.sin(y.a)*U)}),ue.foam.forEach((y,U)=>{let et=.8+Math.abs(Math.sin(_*5+U))*.5;y.scale.setScalar(et)}),Zt.ducks.forEach(y=>{y.a+=y.sp*p;let U=ne.x+Math.cos(y.a)*(ne.rx-2),et=ne.z+Math.sin(y.a)*(ne.rz-1.2);y.g.rotation.y=Math.atan2(U-y.g.position.x,et-y.g.position.z)||y.g.rotation.y,y.g.position.set(U,-.2+Math.sin(_*2+y.a)*.03,et)});for(let y=ds.length-1;y>=0;y--){let U=ds[y];U.material.opacity-=p*1.2,U.scale.multiplyScalar(1+p*2.5*U.userData.size),U.material.opacity<=0&&(q.remove(U),U.geometry.dispose(),ds.splice(y,1))}nn.material.opacity>0&&(nn.material.opacity=Math.max(0,nn.material.opacity-p*.8),nn.scale.multiplyScalar(1+p*1.8)),Ws.forEach(y=>{y.ph+=p,y.g.position.set(y.cx+Math.sin(y.ph*.4)*6,1.6+Math.sin(y.ph*1.3)*.5,y.cz+Math.cos(y.ph*.33)*4),y.g.rotation.y=y.ph*.4+Math.PI/2;let U=Math.sin(y.ph*18)*1.1;y.g.userData.l.rotation.y=U,y.g.userData.r.rotation.y=-U});let C=Gi.geometry.attributes.position;for(let y=0;y<C.count;y++)C.setY(y,1.5+Math.sin(_*.8+y)*.8),C.setX(y,C.getX(y)+Math.sin(_*.5+y*3)*p*.4);if(C.needsUpdate=!0,D.forEach(y=>{y.position.x+=y.userData.speed*p,y.position.x>90&&(y.position.x=-90)}),qn&&hu(p),z.rotation.y+=p*.012,A.forEach(y=>{y.position.y=y.userData.y0+Math.sin(_*.5+y.userData.ph)*.3}),Mt.forEach(y=>{y.material.opacity=y.userData.base*Math.max(0,Math.sin(_*1.8+y.userData.ph))}),Z.forEach(y=>{y.material.opacity=y.userData.base*(.55+.45*Math.sin(_*1.3+y.userData.ph))}),Br>.6)if(W.t<0){if(W.wait-=p,W.wait<=0){let y=Gt(0,Math.PI*2);W.from.set(Math.cos(y)*180,Gt(110,170),Math.sin(y)*180-40),W.dir.set(Gt(-1,1),Gt(-.55,-.35),Gt(-.3,.3)).normalize(),W.t=0}}else{W.t+=p/1.1,N.position.copy(W.from).addScaledVector(W.dir,W.t*120);let y=N.position.clone().project(o),U=N.position.clone().addScaledVector(W.dir,10).project(o);N.material.rotation=Math.atan2(U.y-y.y,U.x-y.x),N.material.opacity=Math.sin(Math.min(1,W.t)*Math.PI)*.95,W.t>=1&&(W.t=-1,W.wait=Gt(7,16),N.material.opacity=0)}else N.material.opacity=0;let k=Nt.userData.flag;k.rotation.y=Math.sin(_*3)*.25;let H=Nt.userData.bell;H.material.emissiveIntensity=Vn?.6+Math.sin(_*6)*.4:0,H.rotation.z=Vn?Math.sin(_*7)*.35:0}let qn=null;function lu(p,_){if(!ht.car||qn)return!1;_=_||{};let v=ht.car,C={x:v.position.x,z:v.position.z,ry:v.rotation.y},k=nt.nearest(ht.exit.x,ht.exit.z),H=new Set(nt.doorNodes),U=nt.nodes.map((fe,Ce)=>Ce).filter(fe=>!H.has(fe)&&Math.abs(Nn(nt.nodes[fe].x,nt.nodes[fe].z))<.2).filter(fe=>Math.hypot(nt.nodes[fe].x-C.x,nt.nodes[fe].z-C.z)>30),et=fe=>fe[Math.floor(Math.random()*fe.length)],ot=(t.houses||[]).findIndex(fe=>fe.id==="store"),Rt=_.onShop&&ot>=0?nt.nearest(nt.nodes[nt.doorNodes[ot]].x,nt.nodes[nt.doorNodes[ot]].z,!0):-1,at=(Rt>=0?[Rt]:[]).concat(U.length?[et(U)]:[]),Et=[{x:C.x,z:C.z},{x:ht.exit.x,z:ht.exit.z}],Ft=k,ae=-1;return at.concat([k]).forEach(fe=>{nt.path(Ft,fe).forEach(Ce=>Et.push({x:Ce.x,z:Ce.z})),Ft=fe,fe===Rt&&ae<0&&(ae=Et.length-1)}),Et.push({x:ht.exit.x,z:ht.exit.z},{x:C.x,z:C.z-Math.cos(C.ry)*.01}),ae>=0&&(Et[ae].shop=!0),Et=Et.filter((fe,Ce)=>fe.shop||!Ce||Math.hypot(fe.x-Et[Ce-1].x,fe.z-Et[Ce-1].z)>.3),qn={pts:Et,i:1,home:C,done:p,v:0,last:0,onShop:_.onShop,wait:!1},!0}function hu(p){let _=ht.car,v=qn,C=v.pts[v.i];if(v.wait)return;let k=v.i===v.pts.length-1,H=C.x-_.position.x,y=C.z-_.position.z,U=Math.hypot(H,y);if(v.v=Math.min(k?2:6.5,v.v+p*3),U<.35){if(C.shop&&v.onShop){C.shop=!1,v.wait=!0,v.v=0,v.onShop(()=>{qn===v&&(v.wait=!1)});return}if(v.i++,v.i>=v.pts.length){_.position.set(v.home.x,Nn(v.home.x,v.home.z),v.home.z),_.rotation.y=v.home.ry;let at=v.done;qn=null,at&&at();return}return}let et=Math.min(U,v.v*p);_.position.x+=H/U*et,_.position.z+=y/U*et,_.position.y=Nn(_.position.x,_.position.z);let ot=Math.atan2(H,y)+(k?Math.PI:0),Rt=_.rotation.y;for(;ot-Rt>Math.PI;)ot-=Math.PI*2;for(;ot-Rt<-Math.PI;)ot+=Math.PI*2;_.rotation.y=Rt+(ot-Rt)*Math.min(1,p*5)}let Br=0;function Hr(){let p=new Date,_=i!=null?i:p.getHours()+p.getMinutes()/60,v=Gd(_);Br=v.night,r.background=v.sky,r.fog.color.copy(v.sky),x.uniforms.bottom.value.copy(v.sky).lerp(new ce(16777215),.18*(1-v.night)).lerp(new ce(10324950),.4*v.night),x.uniforms.top.value.copy(v.sky).lerp(new ce(v.night>.5?2501490:7320547),.5),d.intensity=v.amb,d.color.set(v.night>.5?13158143:16777215),d.groundColor.set(v.night>.5?8160432:12048288),g.color.copy(v.sun),g.intensity=v.power;let C=(_-6)/12*Math.PI,H=_>=5.5&&_<=18.6?C:((_+12)%24-6)/12*Math.PI,y=Math.cos(H)*70,U=Math.max(Math.sin(H),.25)*70;g.position.set(y,U,40+Fe.cz),g.target.position.set(0,0,Fe.cz),w.position.set(Math.cos(C)*200,Math.sin(C)*160,-120),w.visible=Math.sin(C)>-.05;let et=((_+12)%24-6)/12*Math.PI;E.position.set(Math.cos(et)*200,Math.sin(et)*160,-120),E.visible=v.night>.3&&Math.sin(et)>0,L.material.opacity=v.night,Z.forEach(ot=>{ot.userData.base=v.night}),z.mat.color.set(v.night>.5?10131656:16777215),Mt.forEach(ot=>{ot.userData.base=.55+v.night*.45}),Gi.material.opacity=v.night*.95,ac.forEach(ot=>{ot.emissiveIntensity=v.night*.95}),M.forEach(ot=>{ot.intensity=v.night*18}),D.forEach(ot=>{ot.userData.mat.color.set(v.night>.5?8029096:16777215)}),Ws.forEach(ot=>{ot.g.visible=v.night<.5})}let zo=1,Bo=1;function Ho(){zo=n.clientWidth||window.innerWidth,Bo=n.clientHeight||window.innerHeight,s.setSize(zo,Bo,!1),o.aspect=zo/Bo,o.updateProjectionMatrix()}let Si=new xn;function Qd(p,_){Si.fov=o.fov,Si.aspect=o.aspect,Si.near=.5,Si.far=1e3,Si.updateProjectionMatrix();let v=[];for(let y=0;y<48;y++){let U=y/48*Math.PI*2,et=Ir(U);v.push(new O(Math.cos(U)*et,0,Fe.cz+Math.sin(U)*et))}v.push(new O(Mn[0],9,Mn[1]),new O(Ve.x,Ve.H+8,Ve.z)),us.forEach(([y,U,et,ot])=>v.push(new O(y,ot,U))),tn.forEach(([y,U])=>v.push(new O(y,6.5,U)));let C=y=>{Si.position.set(0,Math.cos(p)*y,Math.sin(p)*y).add(_),Si.lookAt(_),Si.updateMatrixWorld();let U=new O;return v.every(et=>(U.copy(et).project(Si),Math.abs(U.x)<.97&&U.y>-.97&&U.y<.86))},k=10,H=600;for(let y=0;y<30;y++){let U=(k+H)/2;C(U)?H=U:k=U}return H}function pc(){Ho();let p=e==="port"?.6:.88,_=new O(0,0,1.5),v=Qd(p,_);return{p:new O(0,Math.cos(p)*v,Math.sin(p)*v).add(_),t:_}}function uu(){let p=pc();a.target.copy(p.t),o.position.copy(p.p),a.update()}let tp=1800,ep=1900,Ge=null,kr=!1,Vr=null,mc=p=>p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;function fu(p){let _=p.userData.face||0,v=Math.sin(_),C=Math.cos(_),k=p.userData.doorZ-1.3,H=p.position.y,y=(U,et)=>new O(p.position.x+v*(k+U),H+et,p.position.z+C*(k+U));return{near:y(3.2,1.75),nearT:y(-1,1.45),inside:y(.35,1.6),insideT:y(-2,1.4)}}function du(p,_,v,C){if(!v)return p.clone().lerp(_,C);let k=p.clone().lerp(_,C),H=_.clone().lerp(v,C);return k.lerp(H,C)}function np(p,_,v){let C=tt.find(H=>H.userData.id===p);if(!C){_&&_();return}let k=fu(C);Vr={p:o.position.clone(),t:a.target.clone()},Ge={mode:"in",start:performance.now(),dur:tp,h:C,done:_,at:v&&v.at,atFired:!1,p:[Vr.p,k.near,k.inside],t:[Vr.t,k.nearT,k.insideT]},a.enabled=!1,kr=!0}function ip(p,_){let v=tt.find(H=>H.userData.id===p);if(!v){pu(),_&&_();return}let C=fu(v),k=Vr||pc();v.userData.hinge&&(v.userData.hinge.rotation.y=-1.7),o.position.copy(C.inside),a.target.copy(C.insideT),o.lookAt(a.target),Ge={mode:"out",start:performance.now(),dur:ep,h:v,done:_,p:[C.inside,C.near,k.p],t:[C.insideT,C.nearT,k.t]},a.enabled=!1,kr=!0}function sp(){if(!Ge)return;let p=Math.min(1,(performance.now()-Ge.start)/Ge.dur),_=mc(p);o.position.copy(du(Ge.p[0],Ge.p[1],Ge.p[2],_)),a.target.copy(du(Ge.t[0],Ge.t[1],Ge.t[2],_)),o.lookAt(a.target);let v=Ge.h.userData.hinge;if(v&&(Ge.mode==="in"?v.rotation.y=-1.7*mc(Math.min(1,Math.max(0,(p-.25)/.45))):v.rotation.y=-1.7*(1-mc(Math.min(1,Math.max(0,(p-.2)/.5))))),Ge.at&&!Ge.atFired&&p>=Ge.at.k&&(Ge.atFired=!0,Ge.at.fn()),p>=1){let C=Ge.done,k=Ge.mode;Ge=null,k==="out"&&(kr=!1,a.enabled=!0,a.update()),C&&C()}}function pu(){if(!kr||Ge&&Ge.mode==="out")return;kr=!1,Ge=null,a.enabled=!0,tt.forEach(_=>{_.userData.hinge&&(_.userData.hinge.rotation.y=0)});let p=Vr||pc();o.position.copy(p.p),a.target.copy(p.t),a.update()}let gs=new wr,mu=new St,wi=null,Xs=0,gc=!1;window.addEventListener("pointerdown",p=>{!p.isTrusted||p.pointerType!=="touch"||(p.isPrimary&&(Xs=0,gc=!1),Xs++,Xs>1&&(gc=!0))},!0);let gu=p=>{p.isTrusted&&p.pointerType==="touch"&&(Xs=Math.max(0,Xs-1))};window.addEventListener("pointerup",gu,!0),window.addEventListener("pointercancel",gu,!0),s.domElement.addEventListener("pointerdown",p=>{(p.isPrimary||p.pointerType!=="touch")&&(wi={x:p.clientX,y:p.clientY,t:performance.now()})}),s.domElement.addEventListener("pointercancel",()=>{wi=null}),s.domElement.addEventListener("pointerup",p=>{if(!p.isTrusted||p.pointerType==="touch"&&(gc||Xs>0)){wi=null;return}if(!wi||Math.hypot(p.clientX-wi.x,p.clientY-wi.y)>8||performance.now()-wi.t>600){wi=null;return}wi=null;let _=s.domElement.getBoundingClientRect();if(mu.set((p.clientX-_.left)/_.width*2-1,-((p.clientY-_.top)/_.height)*2+1),gs.setFromCamera(mu,o),lt.her&&lt.her.g.visible&&lt.him.g.visible&&gs.intersectObjects([lt.her.g,lt.him.g],!0)[0]){lt.kiss>0||(lt.kiss=2.4,lt.her.sitting||(lt.her.path=[],lt.her.wait=Math.max(lt.her.wait,2.8)));return}if(ht.car&&!qn&&t.onCar&&gs.intersectObject(ht.car,!0)[0]){t.onCar();return}let v=bt.filter(et=>!et.love&&!et.inside&&et.g.visible),C=gs.intersectObjects(v.map(et=>et.g),!0)[0];if(C){let et=C.object,ot=v.find(Rt=>{let at=et;for(;at;){if(at===Rt.g)return!0;at=at.parent}return!1});if(ot){Vn&&ot.goal==="hall"?uc(ot,"Work!!!",!0):(ot.wave=2.2,uc(ot,"Hi!"));return}}let k=gs.intersectObjects([Ut.g,ct.g],!0)[0];if(k){let et=Ut.g.getObjectById(k.object.id)?Ut:ct;et.sleep>0||(et.sleep=3,et.sleepIn=0,et.path=[]);return}let H=gs.intersectObject(vt)[0];if(H){Qn(H.point.x-q.position.x,H.point.z-q.position.z);return}let y=gs.intersectObjects(tt,!0)[0];if(!y)return;let U=y.object;for(;U&&!U.userData.id;)U=U.parent;U&&t.onPick(U.userData.id)});let Gr=new O;function rp(p){let _=tt.find(v=>v.userData.id===p);return _?(Gr.set(_.position.x,_.position.y+_.userData.top,_.position.z),Gr.project(o),{x:(Gr.x+1)/2*zo,y:(1-Gr.y)/2*Bo,visible:Gr.z<1}):null}let xc=new Io,Wr=!1,Ys=!0,xu=0,_u=[];function yu(){if(!Wr)return;if(!Ys||document.hidden){Wr=!1;return}requestAnimationFrame(yu);let p=Math.min(.12,xc.getDelta()),_=xc.elapsedTime;_-xu>20&&(Hr(),xu=_),jd(p,_),Ge?sp():a.update(),s.render(r,o),_u.forEach(v=>v()),fc(),Kd(p)}function _c(){Wr||(Wr=!0,xc.getDelta(),requestAnimationFrame(yu))}let Mu=()=>{!document.hidden&&Ys&&(Hr(),_c())},vu=()=>{Ys&&Ho()};return document.addEventListener("visibilitychange",Mu),window.addEventListener("resize",vu),Hr(),uu(),_c(),/[?&]debug3d/.test(location.search)&&(window.__v3d={SOURCE:zn,POND:ne,drive:(p,_)=>lu(p,_),driveFF:p=>{for(let _=0;_<p&&qn;_++)hu(.1);return qn?qn.i+"/"+qn.pts.length+(qn.wait?" wait":""):"home"},get car(){return ht.car},renderer:s,people:bt,couple:lt,get swing(){return he},graph:nt,cat:Ut,dog:ct,routine:ps,realHour:di,camera:o,controls:a,water:vt,food:be,get urgent(){return Vn},set urgent(p){Vn=p},say:uc}),{setUrgent(p){let _=Vn;Vn=p||0,!!_!=!!Vn&&bt.forEach(v=>{!v.love&&!v.helper&&(v.path=[],v.wait=Gt(0,1.5))})},setBusy(p){let _={};(t.houses||[]).forEach((v,C)=>{p&&p[v.id]>0&&(_[C]=p[v.id])}),le=_,ou()},anchor:rp,onFrame(p){_u.push(p)},night(){return Br},setTimeMode(p){i=p==="day"?11:p==="night"?22:null,Hr()},show(p){Ys=!!p,Ys&&(pu(),Ho(),Hr(),_c())},enterHouse:np,exitHouse:ip,drive:lu,setNames(p,_){Xe=p||null,Yi=!!_,Yd(),Xd(),Zd()},mateLookOf(p){let _=bt.find(v=>v.pair&&(t.houses||[])[v.home]&&t.houses[v.home].id===p);return _?_.parts.look:null},genderOf(p){let _=bt.find(v=>!v.love&&!v.helper&&!v.pair&&(t.houses||[])[v.home]&&t.houses[v.home].id===p);return _?Bd(_.parts.look)?"f":"m":""},resize:Ho,recenter:uu,layout:e,destroy(){Wr=!1,Ys=!1,document.removeEventListener("visibilitychange",Mu),window.removeEventListener("resize",vu),a.dispose(),r.traverse(p=>{p.geometry&&p.geometry.dispose()}),s.dispose(),s.domElement.remove()}}}var Qe=9,jn=7,ln=4.4,cc=7;function No(n,t){return new ce(n).lerp(new ce(16777215),t).getHex()}function ui(n,t,e,i,s){let r=new Kt;return r.position.set(t,0,e),r.rotation.y=i||0,n.add(r),r.add(I(2.2,.08,1,s||14267535,0,.78,0)),[[-1,-.42],[1,-.42],[-1,.42],[1,.42]].forEach(([o,a])=>r.add(I(.08,.78,.08,11569768,o,.39,a))),r}function Yn(n,t,e,i){let s=new Kt;return s.position.set(t,0,e),s.rotation.y=i||0,n.add(s),s.add(I(.55,.08,.55,16165309,0,.5,0)),s.add(I(.55,.6,.08,16165309,0,.82,-.26)),[[-.22,-.22],[.22,-.22],[-.22,.22],[.22,.22]].forEach(([r,o])=>s.add(I(.06,.5,.06,9206379,r,.25,o))),s}function ks(n,t,e){n.add(I(.7,.04,.48,14211296,t,.84,e));let i=I(.7,.46,.04,14211296,t,1.07,e-.24);i.rotation.x=-.25,n.add(i);let s=I(.62,.38,.02,0,t,1.07,e-.215,new $e({color:12576498}));s.rotation.x=-.25,n.add(s)}function fi(n,t,e,i,s){let r=new Kt;r.position.set(t,0,e),r.rotation.y=i||0,n.add(r),r.add(I(1.8,2.4,.4,12883572,0,1.2,0));for(let o=0;o<4;o++){r.add(I(1.7,.06,.36,14862765,0,.3+o*.55,.03));for(let a=0;a<(s||6);a++){let c=bi.flower[(a+o)%bi.flower.length],l=.3+(a*7+o*3)%4*.04;r.add(I(.16,l,.28,c===16777215?10934504:c,-.7+a*.24,.33+o*.55+l/2,.05))}}return r}function Un(n,t,e){n.add(I(.5,.5,.5,0,t,.25,e,Ze(mt.CLAY,16368540))),[[0,.78,0,.56],[.2,1.18,.1,.36],[-.18,1.12,-.12,.34]].forEach(([i,s,r,o],a)=>n.add(I(o,o,o,0,t+i,s,e+r,Ze([mt.LEAF_G,mt.LEAF_L,mt.LEAF_M][a]))))}function Vi(n,t,e,i,s,r,o,a,c){let l=new Kt;return l.position.set(t,e,i),l.rotation.y=s,n.add(l),l.add(I(r+.12,o+.12,.05,12883572,0,0,0)),l.add(I(r,o,.06,a,0,0,.01)),(c||[]).forEach(([h,f,u,d])=>l.add(I(d||.32,d||.32,.03,u,h,f,.06))),l}function Oo(n,t,e,i,s){let r=[[-.45,.25],[-.15,.45],[.15,.35],[.45,.6]],o=Vi(n,t,e,i,s,1.4,1.1,16775920);return r.forEach(([a,c],l)=>o.add(I(.2,c,.03,[16758465,10934504,14542964,14273008][l],a,-.4+c/2,.06))),o}function Id(n,t,e,i,s,r){let o=r?2.2:1.1,a=r?1.6:.9,c=Vi(n,t,e,i,s,o,a,16777215);c.add(I(o,a*.18,.04,16751536,0,a*.41,.05));for(let l=0;l<4;l++)for(let h=0;h<7;h++){let f=(l*7+h)%9===3;c.add(I(o/9,a/7,.02,f?16766687:15985894,-o/2+(h+1)*o/8,a*.2-l*a/5.5,.06))}return c}function C1(n,t,e,i,s){let r=new Kt;r.position.set(t,e,i),r.rotation.y=s,n.add(r);let o=new Pt(new We(.35,.35,.06,20),ge(16775920));o.rotation.x=Math.PI/2,r.add(o);let a=new Pt(new Us(.36,.04,6,20),ge(16165309));r.add(a);let c=I(.04,.18,.02,4865855,0,.08,.05),l=I(.03,.27,.02,4865855,0,.12,.06);return r.add(c,l),r.userData.hands=[c,l],r}function P1(n,t,e){let i=new Pt(new yn(.28,12,10),ge(16758465));i.scale.set(1.3,1,1),i.position.set(t,1.1,e),n.add(i),n.add(I(.12,.1,.1,16751536,t+.38,1.1,e)),[[-.15,-.12],[.15,-.12],[-.15,.12],[.15,.12]].forEach(([s,r])=>n.add(I(.07,.12,.07,16751536,t+s,.86,e+r))),n.add(I(.12,.02,.03,9202282,t,1.38,e));for(let s=0;s<3;s++)for(let r=0;r<2+s;r++){let o=new Pt(new We(.09,.09,.03,12),ge(16111752));o.position.set(t-.7+s*.22,.84+r*.035,e+.1),n.add(o)}}function Ld(n,t,e,i){let s=new Kt;s.position.set(t,0,e),s.rotation.y=i||0,n.add(s),s.add(I(1,1.1,.9,10135480,0,.55,0));let r=new Pt(new We(.14,.14,.05,14),ge(16111752));return r.rotation.x=Math.PI/2,r.position.set(.15,.6,.46),s.add(r),s.add(I(.06,.3,.05,16111752,-.3,.6,.46)),s}function I1(n,t,e,i){let s=new Kt;return s.position.set(t,0,e),s.rotation.y=i||0,n.add(s),s.add(I(2,.08,.45,12883572,0,1.3,0)),s.add(I(2,.08,.45,12883572,0,.6,0)),[-1,1].forEach(r=>s.add(I(.08,1.4,.45,11569768,r*.96,.7,0))),[.6,1.3].forEach((r,o)=>[-.65,-.2,.25,.7].forEach((a,c)=>{let l=new Pt(new We(.15,.15,.4,12),new Ee({color:15136507,transparent:!0,opacity:.7}));l.position.set(a,r+.24,0),s.add(l);let h=.08+(c+o*2)%4*.08,f=new Pt(new We(.12,.12,h,12),ge(16111752));f.position.set(a,r+.06+h/2,0),s.add(f)})),s}function L1(n,t,e,i){let s=new Kt;return s.position.set(t,0,e),s.rotation.y=i||0,n.add(s),s.add(I(.9,1.5,.7,10934504,0,.75,0)),[.35,.8,1.25].forEach(r=>{s.add(I(.8,.38,.04,12576498,0,r,.36)),s.add(I(.25,.05,.05,16775920,0,r+.08,.39))}),s}function D1(n,t,e){[0,2.1,4.2].forEach(r=>{let o=I(.04,1.4,.04,7035470,t+Math.cos(r)*.25,.65,e+Math.sin(r)*.25);o.rotation.set(Math.sin(r)*.3,0,-Math.cos(r)*.3),n.add(o)}),n.add(I(.4,.28,.25,4865855,t,1.45,e));let i=new Pt(new We(.09,.09,.15,12),ge(3025462));i.rotation.x=Math.PI/2,i.position.set(t,1.45,e+.18),n.add(i);let s=new Pt(new Us(.4,.05,6,24),new $e({color:16774351}));s.position.set(t-.9,1.7,e-.3),n.add(s),n.add(I(.04,1.7,.04,7035470,t-.9,.85,e-.3))}function U1(n,t,e,i,s){let r=Vi(n,t,e,i,s,1.2,.7,15785156);[-.4,-.13,.13,.4].forEach((o,a)=>{r.add(I(.05,.05,.08,9206379,o,.18,.08)),r.add(I(.1,.22,.03,[16111752,10934504,16758465,10738109][a],o,-.02,.08))})}var Zh={work:{first:"list",build(n,t){let e=ui(n,-1.6,-2.4);ks(e,.2,0),e.add(I(.3,.2,.22,16777215,-.75,.92,.1)),Yn(n,-1.4,-1.55,Math.PI),t.seat={x:-1.4,z:-1.6,ry:Math.PI,y:.54},Vi(n,-4.45,1.8,.4,Math.PI/2,2.6,1.4,16777215,[[-.9,.35,16773544],[-.4,.4,16758465],[.1,.3,10934504],[.6,.38,10738109],[-.8,-.2,16758465],[-.2,-.25,16773544],[.5,-.2,14273008]]),fi(n,4.25,-.6,-Math.PI/2),Oo(n,4.44,2.2,1.6,-Math.PI/2),D1(n,3.4,4.6),Un(n,-3.9,-3)},corners:{list:[.8,2.9,5.8,-1.3,1,-2.2],board:[2.4,2.7,4.2,-4.3,1.6,.3],stats:[-2.4,2.7,4.2,4.3,1.5,.3],posts:[-.6,2.5,8.6,3.2,1.3,4.4]}},money:{first:"overview",build(n,t){let e=ui(n,0,-2.3,0,16368540);P1(e,.4,0),e.add(I(.35,.05,.45,9417689,-.5,.84,.1)),Yn(n,.2,-1.45,Math.PI),t.seat={x:.2,z:-1.5,ry:Math.PI,y:.54},Id(n,-4.44,1.9,-.8,Math.PI/2,!0),Oo(n,-4.44,1.9,2.1,Math.PI/2),I1(n,4.2,-1,-Math.PI/2),L1(n,3.6,-3,0),Ld(n,3.6,2,-Math.PI/2.5),Un(n,-3.9,-3),t.windowX=-1.9},corners:{overview:[.6,2.9,5.8,0,1,-2.3],calendar:[2.6,2.7,3.6,-4.3,1.8,-.8],stats:[2.6,2.7,5.4,-4.3,1.8,1.8],budget:[-2.4,2.7,3.6,4.2,1.1,-1.2],history:[-1.6,2.7,3.8,3.4,1,-3],categories:[-1.6,2.5,6.2,3.6,.7,2]}},calendar:{first:"main",build(n,t){Id(n,-.1,2.05,-3.44,0,!0),C1(n,-2.6,2.5,-3.44,0),t.windowX=2.9;let e=ui(n,-1.2,-1.6);e.add(I(.5,.06,.36,16773544,.3,.84,0)),e.add(I(.04,.04,.3,15834032,.65,.88,0)),Yn(n,-1,-.75,Math.PI),t.seat={x:-1,z:-.8,ry:Math.PI,y:.54},fi(n,4.25,.2,-Math.PI/2,5),Un(n,3.8,2.6)},corners:{main:[-.2,2.9,5.8,-.4,1.5,-2.8]}},account:{first:"main",build(n,t){Ld(n,3.7,-2.6,-.3),U1(n,-.5,2,-3.44,0),t.windowX=1.7;let e=ui(n,-1.8,-1.8,.2);ks(e,0,0),Yn(n,-1.75,-.95,Math.PI+.2),t.seat={x:-1.72,z:-1,ry:Math.PI+.2,y:.54},fi(n,-4.25,.6,Math.PI/2,5),Un(n,3.9,1.8)},corners:{main:[-.2,2.9,5.8,-.9,1.2,-2.4]}},love:{first:"main",build(n,t){let i=new Kt;i.position.set(.5,0,-2.4),n.add(i),i.add(I(2.6,.45,.9,16165309,0,.32,0)),i.add(I(2.6,.75,.25,15834032,0,.8,-.35)),[-1,1].forEach(N=>i.add(I(.25,.65,.9,15834032,N*1.3,.45,0)));let s=fs(16744350);s.scale.setScalar(.4),s.position.set(1,.75,-.15),i.add(s),t.seats=[{x:.05,z:-2.25,ry:0,y:.56},{x:.95,z:-2.25,ry:0,y:.56}],t.sofa=!0,t.couple=!0,[[1.1,2.95,.55,3095915],[1.4,2.95,-.55,15230251]].forEach(([N,W,q,Y])=>{let ft=new Kt;ft.position.set(N,W,-3.44+.06),ft.rotation.z=q,n.add(ft),ft.add(I(.06,.34,.05,16777215,0,-.5,0)),ft.add(I(.025,.34,.025,10135480,0,-.17,0));let $=new Pt(new Us(.17,.02,6,22),ge(Y));$.scale.y=1.3,$.position.y=.2,ft.add($);for(let _t=-3;_t<=3;_t++)ft.add(I(.004,.42,.004,16777215,_t*.045,.2,0)),ft.add(I(.32,.004,.004,16777215,0,.2+_t*.055,0))});{let N=document.createElement("canvas");N.width=128,N.height=64;let W=N.getContext("2d");W.fillStyle="#ffffff",W.fillRect(0,0,128,64),W.fillStyle="#e8652b",W.fillRect(0,8,128,16),W.fillStyle="#26305a",W.beginPath(),W.moveTo(0,64),W.lineTo(0,24),W.lineTo(14,24),W.lineTo(30,64),W.fill(),W.fillStyle="#26305a",W.fillRect(0,6,128,2),W.fillRect(26,28,102,2),W.font="bold 13px sans-serif",W.fillText("YONEX",74,54),W.beginPath(),W.arc(60,49,3,0,7),W.arc(67,49,3,0,7),W.lineWidth=2,W.strokeStyle="#26305a",W.stroke();let q=new _n(N);q.colorSpace=De;let Y=ge(16777215),ft=new Ee({map:q}),$=new Pt(new ke(1.15,.58,.36),[Y,Y,ge(15230251),Y,ft,ft]);$.position.set(1.25,1.62,-3.44+.22),$.castShadow=!0,n.add($),[-.28,.28].forEach(_t=>{n.add(I(.06,.5,.03,16777215,1.25+_t*.9,2.02,-3.44+.2))}),n.add(I(.5,.06,.06,2502746,1.25,2.28,-3.44+.2)),n.add(I(.06,.06,.16,9206379,1.25,2.32,-3.44+.1))}n.add(I(1.42,1.08,.06,12883572,-.4,2.55,-3.44+.02)),n.add(I(1.28,.94,.07,16775920,-.4,2.55,-3.44+.03));let r=new Pt(new ss(1.1,.78),new $e({color:16766687}));r.position.set(-.4,2.55,-3.44+.075),r.userData.pick="frame",n.add(r),t.frames=[r];for(let N=0;N<14;N++){let W=new Pt(new yn(.05,6,5),new $e({color:[16773544,16758465][N%2]}));W.position.set(-4+N*.62,3.45-Math.sin(N*.9)*.08,-3.38),n.add(W)}let o=new Kt;o.position.set(2.45,0,-2.4),n.add(o);let a=new Pt(new We(.42,.42,.06,18),ge(14861214));a.position.y=.6,o.add(a),o.add(I(.07,.6,.07,11569768,0,.3,0));let c=new Pt(new We(.22,.25,.04,14),ge(11569768));c.position.y=.02,o.add(c);let l=new Pt(new yn(.13,16,12),ge(13231096));l.scale.y=1.3,l.position.y=.8,o.add(l),[[0,1.08,0,16758465],[.08,1.02,.05,16773544],[-.08,1.04,-.03,16165309]].forEach(([N,W,q,Y])=>{o.add(I(.015,.25,.015,8173679,N*.6,.95,q*.6));let ft=new Pt(new yn(.06,10,8),ge(Y));ft.position.set(N,W,q),o.add(ft)});let h=new Kt;h.userData.pick="up",n.add(h);let f=Ze(mt.PLANKS),u=Ze(mt.PLANK_GREY,16165309);for(let N=0;N<10;N++){let W=-1.35-N*.32,q=(N+1)*.44;h.add(I(.32,q,.95,0,W,q/2,-2.95,f)),h.add(I(.32,.04,.6,0,W,q+.02,-2.95,u)),N%3===0&&h.add(I(.06,.8,.06,16777215,W,q+.4,-2.45))}{let N=Math.hypot(3.2,4.4),W=I(N,.08,.08,16777215,-1.35-1.6+.16,2.2+.8+.22,-2.45);W.rotation.z=-Math.atan2(4.4,3.2),h.add(W)}let d=Cd(Math.PI/2,.42);d.position.set(-1.85,1.75,-2.35),h.add(d);let g=new Kt;g.position.set(1.3,0,1.25),n.add(g),g.add(I(1.5,.06,.95,14861214,0,.76,0)),[[-.65,-.38],[.65,-.38],[-.65,.38],[.65,.38]].forEach(([N,W])=>g.add(I(.06,.76,.06,11569768,N,.38,W))),[-1,1].forEach(N=>{let W=Hi("bowl",{soup:"#f6efe0",noodle:"#fffaf0"},.3);W.position.set(N*.4-.16,.79,-.18),g.add(W);let q=Hi("bowl",{soup:"#d98c4a",top:["#8a5233","#8a5233","#a86a40","#7fc46a"]},.3);q.position.set(N*.4+.16,.79,-.18),g.add(q),g.add(I(.32,.012,.012,12883572,N*.4,.8,.05)),g.add(I(.32,.012,.012,12883572,N*.4,.8,.08))});let M=Hi("plate",{dots:["#6fb85a","#8fcc7c","#6fb85a","#8fcc7c","#6fb85a","#8fcc7c","#6fb85a","#8fcc7c"]},.4);M.position.set(0,.79,-.05),g.add(M),Yn(n,1.3-.4,1.25-.85,0),Yn(n,1.3+.4,1.25-.85,0),t.dining=[{x:1.3-.4,z:1.25-.8,ry:0,y:.54},{x:1.3+.4,z:1.25-.8,ry:0,y:.54}],t.windowX=3.1,Un(n,3.95,-2.9),t.dinner=g,t.defaultDishes=g.children.slice(5);let x=14,m=new Kt;m.position.x=x,n.add(m);let w=jn+cc,E=cc/2;for(let N=0;N<12;N++){let W=I(Qe/12,.1,w,N%2?15981768:15651517,-Qe/2+(N+.5)*Qe/12,-.05,E);W.castShadow=!1,m.add(W)}let b=I(Qe,ln,.12,t.wall,0,ln/2,-jn/2);b.castShadow=!1,m.add(b),[-1,1].forEach(N=>{let W=I(.12,ln,w,t.wall2,N*Qe/2,ln/2,E);W.castShadow=!1,m.add(W)});let V=I(Qe,.12,w,0,0,ln+.06,E,new Ee({color:t.ceil,emissive:t.ceil,emissiveIntensity:.3}));V.castShadow=!1,m.add(V),m.add(I(1.9,1.5,.08,16777215,2.9,2.3,-jn/2+.06)),m.add(I(1.7,1.3,.09,0,2.9,2.3,-jn/2+.07,t.skyMat)),[-1,1].forEach(N=>m.add(I(.26,1.8,.05,16762063,2.9+N*1.08,2.25,-jn/2+.2))),m.add(I(2.8,.4,3.4,15918810,0,.28,-1.85)),m.add(I(2.6,.22,3.2,16777215,0,.58,-1.85)),m.add(I(3,1.5,.22,16171471,0,1,-3.48)),m.add(I(2.7,.18,.1,16372702,0,1.6,-3.36)),[-.62,.62].forEach(N=>m.add(I(1,.2,.55,16775925,N,.8,-3))),m.add(I(2.72,.12,2.35,16368595,0,.98,-1.25)),m.add(I(2.74,.14,.32,16777215,0,.99,-2.3)),[-1.4,1.4].forEach(N=>m.add(I(.12,.5,2.3,16368595,N,.75,-1.25)));let L=fs(16748465);L.scale.setScalar(.32),L.position.set(0,1.25,-3.3),m.add(L),[-1.95,1.95].forEach(N=>{m.add(I(.75,.62,.6,14861214,N,.31,-3.05)),m.add(I(.79,.05,.64,15785156,N,.64,-3.05)),m.add(I(.5,.05,.02,12883572,N,.42,-2.74))}),m.add(I(.22,.22,.22,16171471,-1.95,.77,-3.05));let D=new Pt(new ke(.4,.3,.4),new Ee({color:16773590,emissive:16765562,emissiveIntensity:0,map:hi(mt.PLASTER)}));D.position.set(-1.95,1.02,-3.05),m.add(D),t.bedLamp=D;let z=new Kt;z.position.set(1.95,.7,-3),z.rotation.y=-.3,z.userData.pick="album",m.add(z),z.add(I(.5,.08,.38,13231096,0,0,0)),z.add(I(.04,.085,.38,11127784,-.25,0,0));let A=fs(16027569);A.scale.setScalar(.15),A.rotation.x=-Math.PI/2,A.position.set(.02,.045,.06),z.add(A),t.album=z;let S=new Kt;S.userData.pick="down",m.add(S),S.add(I(1.3,.04,2.6,12098694,-3.75,.005,1.2)),[.1,.6,1.1,1.6,2.1].forEach((N,W)=>S.add(I(1.2,.03,.42,10257008,-3.75,.02,.05+N-W*.02)));for(let N=0;N<6;N++)S.add(I(.06,.85,.06,16777215,-3.05,.42,-.05+N*.5));S.add(I(.08,.08,2.6,16777215,-3.05,.86,1.2));let B=Cd(-Math.PI*3/4,.45);B.position.set(-3.75,.75,1.2),S.add(B);let Z=new Pt(new We(1,1,.03,32),ge(14281207));Z.scale.set(1.8,1,1.1),Z.position.set(.6,.02,1),m.add(Z),Un(m,3.95,.4);for(let N=0;N<14;N++){let W=new Pt(new yn(.05,6,5),new $e({color:[16773544,16758465][N%2]}));W.position.set(-4+N*.62,3.45-Math.sin(N*.9)*.08,-3.38),m.add(W)}t.bedSpots=[{x:x-.45,z:-1.42},{x:x+.45,z:-1.42}]},corners:{main:[.2,2.8,6.6,0,1.3,-1.9],bed:[14.2,2.6,3.4,14,.9,-2.3],meal:[1,2.6,5.6,1.2,1,-.6],album:[15.75,1.75,-1.85,15.9,.55,-3.05]}},game:{first:"main",build(n,t){n.add(I(2.6,.6,.6,12883572,0,.3,-3.05)),n.add(I(2.2,1.3,.1,3025462,0,1.35,-3.15));let e=I(2.05,1.15,.02,0,0,1.35,-3.09,new $e({color:10934504}));n.add(e),[[-.6,1.55,16758465],[.1,1.2,16111752],[.6,1.6,10738109]].forEach(([s,r,o])=>n.add(I(.3,.3,.01,0,s,r,-3.075,new $e({color:o})))),n.add(I(.5,.12,.35,16777215,.8,.66,-2.95));let i=new Pt(new yn(.7,14,10),ge(16165309));i.scale.set(1.1,.6,1),i.position.set(.2,.4,-.4),i.castShadow=!0,n.add(i),t.seats=[{x:.2,z:-.45,ry:Math.PI,y:.78}],t.gamer=!0,Oo(n,-4.44,2.2,-.8,Math.PI/2),Vi(n,4.44,2.2,-.4,-Math.PI/2,1.2,1.5,14273008,[[0,.3,16758465,.5],[0,-.35,16111752,.4]]),fi(n,-4.25,1.8,Math.PI/2,5),Un(n,3.9,-3),t.windowX=2.9},corners:{main:[.4,2.8,5.6,0,1.1,-2.6]}},language:{first:"main",build(n,t){let e=ui(n,-1.2,-2.3,0,16171471);e.add(I(.5,.05,.36,16777215,-.2,.83,0)),e.add(I(.5,.05,.36,16774888,.32,.83,0)),e.add(I(.02,.06,.36,12883572,.06,.84,0)),[10934504,16758465,16111752].forEach((s,r)=>e.add(I(.4,.07,.28,s,.85,.83+r*.075,-.05)));let i=new Pt(new yn(.18,20,14),ge(10473444));i.position.set(-.8,1.08,0),e.add(i),e.add(I(.05,.25,.05,12883572,-.8,.9,0)),Yn(n,-1,-1.45,Math.PI),t.seat={x:-1,z:-1.5,ry:Math.PI,y:.54},Vi(n,-4.45,1.9,.2,Math.PI/2,2.4,1.4,16777215,[[-.75,.35,16758465],[-.25,.35,16773544],[.25,.35,10934504],[.75,.35,10738109],[-.5,-.25,14273008],[0,-.25,16758465],[.5,-.25,16773544]]),fi(n,4.25,-.4,-Math.PI/2,5),Oo(n,4.44,2.3,1.8,-Math.PI/2),Un(n,3.9,-3),t.windowX=2.2},corners:{main:[-.3,2.9,5.8,-.9,1.1,-2.3]}},skills:{first:"main",build(n,t){let e=ui(n,-.6,-2.3,0,16111752);ks(e,-.3,0),e.add(I(.45,.04,.32,16777215,.45,.83,.05)),e.add(I(.02,.02,.3,15235487,.62,.86,.05));let i=I(.6,.3,.32,15035243,3.4,.15,-2.6);n.add(i),n.add(I(.3,.05,.05,3814720,3.4,.35,-2.6)),Yn(n,-.4,-1.45,Math.PI),t.seat={x:-.4,z:-1.5,ry:Math.PI,y:.54};let s=new Kt;s.position.set(-3.3,0,-1.6),s.rotation.y=.5,n.add(s),[-.4,.4].forEach(r=>{let o=I(.07,1.9,.07,12883572,r,.95,0);o.rotation.z=-r*.15,s.add(o)}),s.add(I(1,.8,.05,16777215,0,1.35,.06)),s.add(I(.5,.3,.06,10934504,-.15,1.45,.08)),s.add(I(.25,.25,.06,16758465,.25,1.2,.08)),Vi(n,4.44,2,-.5,-Math.PI/2,1.6,1.2,16777215,[[-.5,-.25,10738109,.3],[-.15,-.1,16111752,.3],[.2,.05,16758465,.3],[.55,.2,10934504,.3]]),fi(n,-4.25,1.4,Math.PI/2,5),Un(n,3.9,2.4),t.windowX=2.4},corners:{main:[0,2.9,5.8,-.3,1.1,-2.2]}},notes:{first:"main",build(n,t){let e=ui(n,-.8,-2.3,0,16111752);ks(e,.4,0),[16758465,10934504,16773544].forEach((i,s)=>e.add(I(.36,.05,.48,i,-.5,.83+s*.055,.02+s*.03))),Yn(n,-.6,-1.45,Math.PI),t.seat={x:-.6,z:-1.5,ry:Math.PI,y:.54},Vi(n,-.6,2.2,-3.44,0,2.6,1.3,14267535,[[-1,.35,16773544],[-.55,.3,16758465],[-.1,.38,10934504],[.35,.32,10738109],[.85,.36,16773544],[-.8,-.25,14273008],[-.3,-.22,16773544],[.2,-.28,16758465],[.7,-.24,10934504]]),fi(n,4.25,-.4,-Math.PI/2,5),Un(n,-3.9,-3),t.windowX=2.8},corners:{main:[-.2,2.9,5.8,-.6,1.3,-2.4]}},goals:{first:"main",build(n,t){Vi(n,0,2.15,-3.44,0,3,1.6,16777215,[[-1.1,.35,10934504,.45],[-.45,.4,16758465,.4],[.55,.38,10738109,.45],[1.15,.3,16111752,.4],[-.9,-.35,14273008,.45],[.95,-.35,16758465,.4]]);let e=fs(16765803);e.scale.setScalar(.5),e.position.set(0,2.1,-3.3),n.add(e);let i=ui(n,-1.8,-1.9,.25,14273008);ks(i,0,0),Yn(n,-1.7,-1.05,Math.PI+.25),t.seat={x:-1.68,z:-1.1,ry:Math.PI+.25,y:.54};let s=new Pt(new We(.22,.12,.36,18),ge(16107596));s.position.set(3.7,1.28,-2.7),n.add(s),n.add(I(.5,.9,.5,15785156,3.7,.45,-2.7)),n.add(I(.2,.12,.2,16107596,3.7,1,-2.7)),Un(n,-3.9,-3),t.windowX=3.2},corners:{main:[.2,2.8,5.8,-.2,1.4,-2.4]}},health:{first:"main",build(n,t){let e=I(1,.04,2,10738109,-1.6,.03,-.6);e.castShadow=!1,n.add(e),[[-.7,-1.4],[-.45,-1.4]].forEach(([o,a])=>{n.add(I(.36,.05,.05,9080729,o,.12,a)),[-.16,.16].forEach(c=>{let l=new Pt(new We(.1,.1,.08,16),ge(15834032));l.rotation.z=Math.PI/2,l.position.set(o+c,.12,a),n.add(l)})}),n.add(I(.9,1.6,.8,16777215,3.6,.8,-2.9)),n.add(I(.05,.4,.05,12633806,3.2,1,-2.48)),n.add(I(.9,.04,.82,15328478,3.6,1.1,-2.9));let i=ui(n,1.2,-2.4,0,16766665),s=new Pt(new yn(.25,20,12,0,Math.PI*2,Math.PI/2,Math.PI/2),ge(16777215));s.position.set(0,1.04,0),i.add(s),[[16744319,-.08,0],[16765803,.08,.04],[10147472,0,-.08]].forEach(([o,a,c])=>{let l=new Pt(new yn(.09,14,10),ge(o));l.position.set(a,1.04,c),i.add(l)});let r=new Pt(new We(.07,.07,.3,14),ge(10473444));r.position.set(.5,.98,.1),i.add(r),Yn(n,1.4,-1.55,Math.PI),t.seat={x:1.4,z:-1.6,ry:Math.PI,y:.54},Oo(n,-4.44,2.2,-.6,Math.PI/2),Un(n,-3.9,-3),t.windowX=-.6},corners:{main:[.4,2.8,5.8,.2,1,-2]}},law:{first:"main",build(n,t){fi(n,-4.25,-.8,Math.PI/2,5),fi(n,-4.25,1.4,Math.PI/2,5),fi(n,4.25,-.4,-Math.PI/2,5);let e=ui(n,.2,-2.3,0,12883572);ks(e,-.4,0);let i=new Kt;i.position.set(.55,.83,0),e.add(i),i.add(I(.04,.5,.04,14267466,0,.25,0)),i.add(I(.5,.03,.03,14267466,0,.48,0)),[-.24,.24].forEach(s=>{let r=new Pt(new We(.09,.06,.03,16),ge(14267466));r.position.set(s,.3,0),i.add(r),i.add(I(.01,.18,.01,14267466,s,.39,0))}),Yn(n,.4,-1.45,Math.PI),t.seat={x:.4,z:-1.5,ry:Math.PI,y:.54},Un(n,3.9,2.4),t.windowX=2.4},corners:{main:[.2,2.9,5.8,.1,1.2,-2.3]}},store:{first:"main",build(n,t){n.add(I(2.6,1,.7,10147520,-.2,.5,-1.15)),n.add(I(2.7,.06,.8,16777215,-.2,1.03,-1.15));for(let u=0;u<5;u++)n.add(I(.3,.6,.02,8372906,-1.2+u*.5,.5,-.79));let s=new Kt;s.position.set(.55,1.06,-1.2),n.add(s),s.add(I(.5,.14,.4,5591134,0,.07,0));let r=I(.4,.28,.04,5591134,0,.32,-.12);r.rotation.x=-.3,s.add(r);let o=I(.34,.22,.02,0,0,.32,-.095,new $e({color:12579544}));o.rotation.x=-.3,s.add(o);for(let u=0;u<3;u++)for(let d=0;d<3;d++)s.add(I(.07,.02,.06,15394544,-.1+d*.1,.15,.04+u*.06));let a=Hi("onigiri",{},.26);a.position.set(-.9,1.06,-1.1),n.add(a);let c=Hi("cup",{drink:"#d9b08a",boba:!0},.3);c.position.set(-.55,1.06,-1.05),n.add(c);let l=Hi("bun",{bun:"#fff8ee"},.26);l.position.set(-1.25,1.06,-1.15),n.add(l);let h=[["cup",{drink:"#ff8fb0",cream:!0}],["cookie",{}],["donut",{}],["onigiri",{}],["mochi",{}],["cup",{drink:"#8a5a3a",ice:!0}],["kimbap",{}],["flan",{}]];[-2.6,2.2].forEach((u,d)=>{let g=new Kt;g.position.set(u,0,-3.15),n.add(g),g.add(I(1.9,2.3,.5,15920614,0,1.15,0));for(let M=0;M<4;M++){g.add(I(1.8,.05,.46,14208964,0,.32+M*.52,.04));for(let x=0;x<5;x++){let[m,w]=h[(x+M*2+d*3)%h.length],E=Hi(m,w,.3);E.position.set(-.72+x*.36,.35+M*.52,.06),g.add(E)}}g.add(I(1.9,.18,.52,d?16165309:16765803,0,2.2,.02))});let f=new Kt;f.position.set(4,0,-.6),f.rotation.y=-Math.PI/2,n.add(f),f.add(I(1.6,2.3,.7,15266552,0,1.15,0)),f.add(I(1.44,2,.02,0,0,1.15,.36,new $e({color:14677247,transparent:!0,opacity:.35})));for(let u=0;u<4;u++)for(let d=0;d<5;d++){let g=[16748410,10147472,16765803,10473471,16752575][(d+u)%5];f.add(I(.14,.32,.14,g,-.56+d*.28,.36+u*.48,.12)),f.add(I(.1,.06,.1,16777215,-.56+d*.28,.55+u*.48,.12))}f.add(I(1.6,.2,.72,10147520,0,2.2,0)),Un(n,-4,2.4),t.seat={x:-.1,z:-1.85,ry:0,y:0,stand:!0},t.windowX=-3.2},corners:{main:[.1,1.9,5,-.1,1.45,-2.2]}},other:{first:"main",build(n,t){let e=ui(n,-1,-2.3);ks(e,0,0),Yn(n,-.8,-1.45,Math.PI),t.seat={x:-.8,z:-1.5,ry:Math.PI,y:.54},fi(n,4.25,-.6,-Math.PI/2),Un(n,-3.9,-3)},corners:{main:[0,2.9,5.8,0,1.1,-2]}}};function N1(n,t){su.length=0,t=t||{};let e=Zh[t.house]||(t.kind==="game"?Zh.game:Zh.other),i=new po({antialias:!0});i.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),i.shadowMap.enabled=!0,i.shadowMap.type=Ya,n.appendChild(i.domElement);let s=new mo,r=new xn(48,1,.1,100),o=No(t.roof||16165309,.72),a=No(t.roof||16165309,.55);s.background=new ce(No(t.roof||16165309,.82));let c=new Kt;s.add(c);let l=jn+cc,h=cc/2;for(let G=0;G<12;G++){let tt=I(Qe/12,.1,l,G%2?15323054:14861214,-Qe/2+(G+.5)*Qe/12,-.05,h);tt.castShadow=!1,c.add(tt)}let f=I(Qe,ln,.12,o,0,ln/2,-jn/2);f.castShadow=!1,c.add(f),[-1,1].forEach(G=>{let tt=I(.12,ln,l,a,G*Qe/2,ln/2,h);tt.castShadow=!1,tt.receiveShadow=!0,c.add(tt)});let u=No(t.roof||16165309,.9),d=new Ee({color:u,emissive:u,emissiveIntensity:.3});if(t.house==="love"){let j=h-l/2,ht=h+l/2;[[-2.25,Qe/2,j,ht],[-Qe/2,-2.25,-2.3,ht]].forEach(([Ot,bt,lt,se])=>{let le=I(bt-Ot,.12,se-lt,0,(Ot+bt)/2,ln+.06,(lt+se)/2,d);le.castShadow=!1,c.add(le)});let Nt=-2.25+Qe/2,it=-2.3-j,nt=No(t.roof||16165309,.8);[[-Qe/2+Nt/2,j+.06,Nt,.12],[-Qe/2+Nt/2,-2.3,Nt,.12],[-2.25,j+it/2,.12,it]].forEach(([Ot,bt,lt,se])=>c.add(I(lt,2.2,se,nt,Ot,ln+1.1,bt))),c.add(I(Nt,.1,it,0,-Qe/2+Nt/2,ln+2.2,j+it/2,new $e({color:16773590}))),c.add(I(Nt,.06,it*.9,14267535,-Qe/2+Nt/2-.2,ln+.9,j+it/2))}else{let G=I(Qe,.12,l,0,0,ln+.06,h,d);G.castShadow=!1,c.add(G)}let g=G=>{G.castShadow=!1,c.add(G)};g(I(Qe,.16,.12,16777215,0,ln-.08,-jn/2+.1)),[-1,1].forEach(G=>g(I(.12,.16,l,16777215,G*(Qe/2-.1),ln-.08,h))),g(I(Qe,.14,.04,16777215,0,.07,-jn/2+.08)),[-1,1].forEach(G=>g(I(.04,.14,l,16777215,G*(Qe/2-.08),.07,h)));let M=new $e({color:12575733}),x=new Pt(new We(1,1,.03,32),ge(16176348));x.scale.set(2,1,1.3),x.position.set(.3,.02,.6),x.receiveShadow=!0,c.add(x);let m=I(.03,.55,.03,9206379,.3,ln-.27,.3);m.castShadow=!1,c.add(m);let w=new Pt(new ke(.6,.4,.6),new Ee({color:16773544,emissive:16765562,emissiveIntensity:0,map:hi(mt.PLASTER)}));w.position.set(.3,ln-.72,.3),w.castShadow=!1,c.add(w);let E={wall:o,wall2:a,ceil:u,skyMat:M};e.build(c,E);{let G=E.windowX!=null?E.windowX:2.2,tt=2.1,j=-jn/2;c.add(I(1.9,1.5,.08,16777215,G,tt,j+.06)),c.add(I(1.7,1.3,.09,0,G,tt,j+.07,M)),c.add(I(.05,1.3,.1,16777215,G,tt,j+.1)),c.add(I(1.7,.05,.1,16777215,G,tt,j+.1));let ht=I(2.5,.05,.05,12883572,G,tt+.9,j+.2);ht.castShadow=!1,c.add(ht),[-1,1].forEach(Nt=>{let it=I(.24,1.75,.05,16762063,G+Nt*1.08,tt+0,j+.2);it.castShadow=!1,c.add(it);let nt=I(.28,.06,.07,16165309,G+Nt*1.08,tt-.25,j+.22);nt.castShadow=!1,c.add(nt)})}let b=[];c.traverse(G=>{G.userData.hands&&(b=G.userData.hands)});let V=E.seats||(E.seat?[E.seat]:[]),L=t.looks||(t.look?[t.look]:[]),D=V.slice(0,L.length).map((G,tt)=>{let j=Fo(L[tt]);return c.add(j.g),G.stand?(j.g.position.set(G.x,0,G.z),j.g.rotation.y=G.ry,j.standing=!0,j):(j.g.position.set(G.x,G.y-jh,G.z),j.g.rotation.y=G.ry,j.parts.legL.rotation.x=j.parts.legR.rotation.x=-1.45,j)});if(t.mate&&V[0]&&!E.couple){let G=V[0],tt=Fo(t.mate);c.add(tt.g);let j=G.stand?G.x+.8:G.x+.85,ht=G.stand?G.z:G.z+.35;tt.g.position.set(j,0,ht),tt.g.rotation.y=G.ry+(G.stand?0:-.9),E.mateW=tt}let z=(t.guests||[]).map((G,tt)=>{let j=Fo(G);return c.add(j.g),j.g.position.set(tt?1:-1.25,0,-.25),j.g.rotation.y=Math.PI+(tt?.25:-.25),j}),A=E.sofa||E.gamer?null:D[0]||null,S="",B=[];E.couple&&D.forEach((G,tt)=>{G.g.userData.pick="couple";let j=t.names&&(tt===0?t.names.her:t.names.him)||(tt===0?"namu":"hunf"),ht=S1(j,"#ffffff",.19);c.add(ht),B.push(ht)});let Z=(()=>{let G=fs(16744350);return G.scale.setScalar(.16),G.visible=!1,c.add(G),G})(),N=-1,W="",q=!1,Y=!1,ft=()=>W==="bed"?"bed":S==="lunch"||S==="dinner"?"meal":e.corners[t.corner]?t.corner:e.first,$=null,_t=document.createElement("div");_t.style.cssText="position:absolute;inset:0;background:#fff6ee;opacity:0;pointer-events:none;transition:opacity .45s ease;z-index:2",getComputedStyle(n).position==="static"&&(n.style.position="relative"),n.appendChild(_t);let Tt=(G,tt,j)=>new O(G,tt,j),dt={up:{legs:[[Tt(-.4,1.8,.8),Tt(-3.4,3.4,-2.95),.9],[Tt(-2.2,3.2,-2.6),Tt(-4.2,5.4,-2.9),.8],[Tt(-3.4,5,-2.9),Tt(-4.4,5.8,-2.9),.6,!0]],out:[Tt(10.7,1.7,2.9),Tt(12.8,1.2,-1.2)]},down:{legs:[[Tt(11.2,1.75,2.4),Tt(10.25,.1,.9),.8],[Tt(10.6,1.05,1.5),Tt(10.2,-.8,.2),.7,!0]],out:[Tt(-3.7,4.3,-2.1),Tt(-.6,1.6,-2.95)]}},Xt={yaw:0,want:0,x0:0,w0:0,on:!1},ye=new O;{let G=i.domElement;G.addEventListener("pointerdown",j=>{Xt.on=!0,Xt.x0=j.clientX,Xt.w0=Xt.want}),G.addEventListener("pointermove",j=>{Xt.on&&(Xt.want=Math.max(-.55,Math.min(.55,Xt.w0+(j.clientX-Xt.x0)*.004)))});let tt=()=>{Xt.on=!1};G.addEventListener("pointerup",tt),G.addEventListener("pointercancel",tt),G.addEventListener("pointerleave",tt)}function pt(G,tt){Xt.want=0;let j=W&&G!==W;if(W=G,tt||!j){$=null,_t.style.opacity=0,Ht(ft(),tt);return}$={def:dt[G==="bed"?"up":"down"],leg:0,t:0,p0:xt.clone(),t0:vt.clone()}}function At(G){let tt=$.def.legs[$.leg];$.t+=G/tt[2],tt[3]&&_t.style.opacity!=="1"&&(_t.style.opacity=1);let j=Math.min(1,$.t),ht=j*j*(3-2*j);if(xt.lerpVectors($.p0,tt[0],ht),vt.lerpVectors($.t0,tt[1],ht),F.copy(xt),Zt.copy(vt),!(j<1)){if(++$.leg<$.def.legs.length){$.t=0,$.p0=xt.clone(),$.t0=vt.clone();return}xt.copy($.def.out[0]),vt.copy($.def.out[1]),$=null,Ht(ft(),!1),setTimeout(()=>{_t.style.opacity=0},120)}}let Yt=kd("z Z z","#7a6a9a",.9,.45);if(c.add(Yt),t.onPick){let G=new wr,tt=new St,j=null,ht=i.domElement,Nt=(nt,Ot)=>{let bt=ht.getBoundingClientRect();tt.set((nt-bt.left)/bt.width*2-1,-((Ot-bt.top)/bt.height)*2+1),G.setFromCamera(tt,r);let lt=G.intersectObjects(c.children,!0).find(le=>{if(le.object.isSprite)return!1;let jt=le.object;for(;jt&&!jt.userData.pick;)jt=jt.parent;return!!jt});if(!lt)return"";let se=lt.object;for(;se&&!se.userData.pick;)se=se.parent;return se.userData.pick},it=nt=>{if(nt==="couple"){N<0&&(N=0);return}if(nt==="up"||nt==="down"){q=!0,pt(nt==="up"?"bed":"main");return}if(nt==="album"){Y=!0,Ht("album"),setTimeout(()=>t.onPick("album"),750);return}t.onPick(nt)};ht.addEventListener("contextmenu",nt=>nt.preventDefault()),ht.addEventListener("pointerdown",nt=>{j={x:nt.clientX,y:nt.clientY,type:nt.pointerType}}),ht.addEventListener("pointerup",nt=>{if(!j||Math.hypot(nt.clientX-j.x,nt.clientY-j.y)>8){j=null;return}j=null;let Ot=Nt(nt.clientX,nt.clientY);Ot&&it(Ot)})}let Ct=E.gamer?D[0]:null,zt=new Ro(16777215,14861214,1.4);s.add(zt);let ie=new Po(16774374,1.6);ie.position.set(2.5,ln-.3,8),ie.target.position.set(0,0,-2),s.add(ie.target),ie.castShadow=!0,ie.shadow.mapSize.set(1024,1024),Object.assign(ie.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:.5,far:25}),ie.shadow.bias=-.001,s.add(ie);let re=new Co(16767392,0,12,1.3);re.position.set(.3,ln-1.1,.3),s.add(re);function ue(){let G=new Date,tt=t.timeMode==="day"?11:t.timeMode==="night"?22:G.getHours()+G.getMinutes()/60,j=Gd(tt);M.color.copy(j.sky),zt.intensity=1.5-j.night*.7,ie.intensity=1.6*(1-j.night)+.2,re.intensity=j.night*8,w.material.emissiveIntensity=j.night,b.length&&(b[0].rotation.z=-(G.getHours()%12)/12*Math.PI*2,b[1].rotation.z=-G.getMinutes()/60*Math.PI*2)}let xt=new O,vt=new O,F=new O,Zt=new O;function wt(G){return e.corners[G]||e.corners[e.first]}function Ht(G,tt){let j=wt(G);F.set(j[0],j[1],j[2]),Zt.set(j[3],j[4],j[5]),tt&&(xt.copy(F),vt.copy(Zt))}Ht(t.corner,!0),t.walkIn&&(xt.set(0,1.7,jn/2+3.2),vt.set(0,1.4,-jn/2));function Lt(){let G=n.clientWidth||innerWidth,tt=n.clientHeight||innerHeight;i.setSize(G,tt,!1),r.aspect=G/tt,r.fov=G/tt<.9?64:50,G/tt<.9?r.setViewOffset(G,tt,0,-tt*.2,G,tt):r.clearViewOffset(),r.updateProjectionMatrix()}Lt();let oe=()=>Lt();window.addEventListener("resize",oe);let Bt=new Io,P=new O,T=!0,Q=0;function gt(){if(!T||(requestAnimationFrame(gt),document.hidden))return;let G=Math.min(.1,Bt.getDelta()),tt=Bt.elapsedTime;if($?At(G):(xt.lerp(F,Math.min(1,G*1.6)),vt.lerp(Zt,Math.min(1,G*1.6))),Xt.yaw+=(($||Y?0:Xt.want)-Xt.yaw)*Math.min(1,G*8),ye.copy(vt).sub(xt).applyAxisAngle(He.DEFAULT_UP,Xt.yaw),r.position.copy(xt),r.lookAt(ye.add(xt)),b1(tt),E.couple){let j=new Date,ht=j.getHours()+j.getMinutes()/60,Nt=ht>=22||ht<6.5?"sleep":ht>=11.5&&ht<13?"lunch":ht>=18.5&&ht<19.75?"dinner":"sofa";if(Nt!==S){S=Nt,!q&&!Y&&pt(Nt==="sleep"?"bed":"main",!W&&!t.walkIn);let it=Nt==="lunch"||Nt==="dinner"?E.dining:E.seats;D.forEach((nt,Ot)=>{if(Nt==="sleep"){let bt=E.bedSpots[Ot];nt.g.position.set(bt.x,.9,bt.z),nt.g.rotation.set(-Math.PI/2,0,0),nt.parts.legL.rotation.x=nt.parts.legR.rotation.x=0}else nt.g.position.set(it[Ot].x,it[Ot].y-jh,it[Ot].z),nt.g.rotation.set(0,it[Ot].ry,0),nt.parts.legL.rotation.x=nt.parts.legR.rotation.x=-1.45;nt.sleepMap||(nt.sleepMap=zd(nt.parts.look,!0)),nt.awakeMap||(nt.awakeMap=nt.parts.mat.map),nt.parts.mat.map=Nt==="sleep"?nt.sleepMap:nt.awakeMap,nt.parts.mat.needsUpdate=!0}),Yt.visible=Nt==="sleep"}if(D.forEach((it,nt)=>{let Ot=nt===0?-1:1;S==="lunch"||S==="dinner"?(it.parts.armL.rotation.x=-.9,it.parts.armR.rotation.x=-1.35+Math.sin(tt*2.6+nt*1.7)*.45,it.parts.head.rotation.set(.12+Math.max(0,Math.sin(tt*2.6+nt*1.7))*.12,0,0)):S==="sleep"?(it.parts.armL.rotation.x=it.parts.armR.rotation.x=0,it.parts.head.rotation.set(.6,-Ot*(.35+Math.sin(tt*.9)*.03),0)):(it.parts.armL.rotation.x=it.parts.armR.rotation.x=-.6,it.parts.head.rotation.set(0,-Ot*.25,-Ot*(.18+Math.sin(tt*.8)*.04)))}),Yt.visible&&(Yt.position.set(14,1.6+tt*.25%.4,-3),Yt.material.opacity=.9-tt*.25%.4*1.5),D.forEach((it,nt)=>{it.parts.head.getWorldPosition(B[nt].position),B[nt].position.y+=S==="sleep"?.62:.55}),N>=0){N+=G;let it=D[1],nt=D[0],Ot=Math.sin(Math.min(1,N/1.6)*Math.PI);it.parts.head.rotation.y+=(S==="sleep"?-.5:-.9)*Ot,it.parts.head.rotation.z+=.25*Ot,nt.parts.head.rotation.z-=.2*Ot,S!=="sleep"&&(it.g.rotation.z=.16*Ot);let bt=new O;nt.parts.head.getWorldPosition(bt);let lt=new O;it.parts.head.getWorldPosition(lt),Z.visible=N>.5,Z.position.copy(bt).lerp(lt,.5),Z.position.y+=.35+(N-.5)*.35,Z.scale.setScalar(.12+Math.min(1,(N-.5)*2)*.06),Z.rotation.y=r.rotation.y,N>2.1&&(N=-1,Z.visible=!1,it.g.rotation.z=0)}E.bedLamp&&(E.bedLamp.material.emissiveIntensity=S==="sleep"?.15:.6*re.intensity/8)}else E.sofa&&D.forEach((j,ht)=>{j.parts.armL.rotation.x=j.parts.armR.rotation.x=-.6,j.parts.head.rotation.z=(ht===0?-1:1)*(.18+Math.sin(tt*.8)*.04),j.parts.head.rotation.y=(ht===0?1:-1)*.25});if(Ct&&(Ct.parts.armL.rotation.x=Ct.parts.armR.rotation.x=-1.1+Math.sin(tt*14)*.05,Ct.parts.head.rotation.x=-.05,Ct.parts.head.rotation.y=Math.sin(tt*.5)*.08),E.mateW&&(E.mateW.parts.head.rotation.y=-.4+Math.sin(tt*.6)*.25,E.mateW.parts.armR.rotation.x=Math.sin(tt*1.1)*.15-.1),z.forEach((j,ht)=>{j.parts.head.rotation.y=Math.sin(tt*.5+ht*2)*.3,j.parts.armL.rotation.x=Math.sin(tt*.8+ht)*.06}),A&&A.standing){let j=tt%9<1.4;A.parts.armL.rotation.x=-.35+Math.sin(tt*1.3)*.05,A.parts.armR.rotation.x=j?-2.6:-.35+Math.sin(tt*1.3+1)*.05,A.parts.armR.rotation.z=j?-.3+Math.sin(tt*14)*.25:0,A.parts.head.rotation.y=Math.sin(tt*.4)*.2,A.parts.head.rotation.x=0}else A&&(A.parts.armL.rotation.x=-1.2+Math.sin(tt*9)*.12,A.parts.armR.rotation.x=-1.2+Math.sin(tt*9+1.8)*.12,A.parts.head.rotation.x=.15+Math.sin(tt*.6)*.05,A.parts.head.rotation.y=Math.sin(tt*.35)*.25);(tt-Q>20||Q===0)&&(ue(),Q=tt||.001),i.render(s,r),P.set(.3,.05,.6).project(r),document.documentElement.style.setProperty("--rug-x",((P.x+1)/2*100).toFixed(1)+"vw"),document.documentElement.style.setProperty("--rug-y",((1-P.y)/2*100).toFixed(1)+"vh")}ue(),requestAnimationFrame(gt),/[?&]debug3d/.test(location.search)&&(window.__room={camera:r,R:E,renderer:i,sitters:D});function Mt(G){if(!E.dinner)return;(E.foodMeshes||[]).forEach(ht=>{E.dinner.remove(ht)}),E.foodMeshes=[],G=(G||[]).filter(ht=>ht&&ht.name).slice(0,4),E.defaultDishes.forEach(ht=>{ht.visible=!G.length});let tt=[[0],[-.33,.33],[-.48,0,.48],[-.54,-.18,.18,.54]][Math.max(0,G.length-1)]||[],j=new To;j.setCrossOrigin("anonymous"),G.forEach((ht,Nt)=>{let it=new Kt;it.position.set(tt[Nt],.8,-.12+Nt%2*.06),E.dinner.add(it),E.foodMeshes.push(it);let nt=new Pt(new We(.2,.15,.05,24),ge(16777215));it.add(nt);let Ot=new Pt(new Us(.19,.015,8,24),ge([16171471,13231096,16773544,13495501][Nt]));Ot.rotation.x=Math.PI/2,Ot.position.y=.025,it.add(Ot);let bt=ht.key&&window.FoodArt&&window.FoodArt.spec&&window.FoodArt.spec(ht.key);if(bt){it.remove(nt),it.remove(Ot),it.add(I(.46,.02,.46,[16171471,13231096,16773544,13495501][Nt],0,-.01,0));let jt=Hi(bt.tpl,bt.o,.4);jt.position.y=0,jt.rotation.y=(Nt-1.5)*.25,it.add(jt);return}let lt=new Ee({color:16777215}),se=new Pt(new Ha(.16,28),lt);se.rotation.x=-Math.PI/2,se.position.y=.03,it.add(se);let le=()=>{let jt=document.createElement("canvas");jt.width=jt.height=128;let X=jt.getContext("2d");X.fillStyle=["#ffe1e9","#e1f0fb","#fff6cf","#e3f5e1"][Nt],X.fillRect(0,0,128,128),X.font="64px sans-serif",X.textAlign="center",X.fillText("\u{1F372}",64,76),X.font="800 16px Nunito, sans-serif",X.fillStyle="#8a5a6a",X.fillText(ht.name.slice(0,14),64,112),lt.map=new _n(jt),lt.map.colorSpace=De,lt.needsUpdate=!0};if(!ht.img){le();return}if(/^data:image\/svg/.test(ht.img)){let jt=new Image;jt.onload=()=>{let X=document.createElement("canvas");X.width=X.height=256;let Ut=X.getContext("2d");Ut.fillStyle="#fffaf5",Ut.fillRect(0,0,256,256),Ut.drawImage(jt,0,0,256,256),lt.map=new _n(X),lt.map.colorSpace=De,lt.needsUpdate=!0},jt.onerror=le,jt.src=ht.img;return}j.load(ht.img,jt=>{jt.colorSpace=De;let X=jt.image.width/jt.image.height;X>1?(jt.repeat.set(1/X,1),jt.offset.set((1-1/X)/2,0)):(jt.repeat.set(1,X),jt.offset.set(0,(1-X)/2)),lt.map=jt,lt.needsUpdate=!0},void 0,le)})}return{house:t.house,setCorner(G){if(E.couple){t.corner=G,Y||Ht(ft(),!1);return}Ht(G,!1)},back(){Y=!1,Ht(ft(),!1)},setFood:Mt,get floor(){return W},setPhotos(G){if(!E.frames)return;let tt=new To;E.frames.forEach((j,ht)=>{G[ht]&&tt.load(G[ht],Nt=>{Nt.colorSpace=De;let it=Nt.image,nt=j.geometry.parameters.width,Ot=j.geometry.parameters.height,bt=it.width/it.height,lt=nt/Ot;bt>lt?(Nt.repeat.set(lt/bt,1),Nt.offset.set((1-lt/bt)/2,0)):(Nt.repeat.set(1,bt/lt),Nt.offset.set(0,(1-bt/lt)/2)),j.material.map=Nt,j.material.color.set(16777215),j.material.needsUpdate=!0})})},setTimeMode(G){t.timeMode=G,ue()},destroy(){T=!1,window.removeEventListener("resize",oe),s.traverse(G=>{G.geometry&&G.geometry.dispose()}),i.dispose(),i.domElement.remove(),_t.remove()}}}window.Village3D={create:R1,room:N1,LOOKS:oc,LOVE:$h,ROOF:bi.roof,lookAs:Hd};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
