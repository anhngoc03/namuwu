(()=>{var Nh="170",Gs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bp=0,Of=1,Sp=2;var $u=1,ec=2,zi=3,cs=0,Pn=1,Cn=2,os=0,vr=1,uo=2,Ff=3,Bf=4,wp=5,Ps=100,Tp=101,Ap=102,Rp=103,Cp=104,Pp=200,Ip=201,Lp=202,Dp=203,hl=204,fl=205,Up=206,Np=207,zp=208,Op=209,Fp=210,Bp=211,Hp=212,kp=213,Vp=214,ul=0,dl=1,pl=2,wr=3,ml=4,gl=5,xl=6,_l=7,zh=0,Gp=1,Wp=2,as=0,Xp=1,Yp=2,qp=3,Zp=4,Kp=5,Jp=6,$p=7;var ju=300,Tr=301,Ar=302,yl=303,Ml=304,nc=306,po=1e3,Ls=1001,vl=1002,nn=1003,jp=1004;var Jo=1005;var yi=1006,Pc=1007;var Ds=1008;var Hi=1009,Qu=1010,td=1011,mo=1012,Oh=1013,Us=1014,Oi=1015,Oo=1016,Fh=1017,Bh=1018,Rr=1020,ed=35902,nd=1021,id=1022,li=1023,sd=1024,rd=1025,Er=1026,Cr=1027,od=1028,Hh=1029,ad=1030,kh=1031;var Vh=1033,Ta=33776,Aa=33777,Ra=33778,Ca=33779,El=35840,bl=35841,Sl=35842,wl=35843,Tl=36196,Al=37492,Rl=37496,Cl=37808,Pl=37809,Il=37810,Ll=37811,Dl=37812,Ul=37813,Nl=37814,zl=37815,Ol=37816,Fl=37817,Bl=37818,Hl=37819,kl=37820,Vl=37821,Pa=36492,Gl=36494,Wl=36495,cd=36283,Xl=36284,Yl=36285,ql=36286;var Ia=2300,Zl=2301,Ic=2302,Hf=2400,kf=2401,Vf=2402;var Qp=3200,t0=3201;var ld=0,e0=1,ss="",De="srgb",Ur="srgb-linear",ic="linear",Oe="srgb";var er=7680;var Gf=519,n0=512,i0=513,s0=514,hd=515,r0=516,o0=517,a0=518,c0=519,Kl=35044;var Wf="300 es",Fi=2e3,La=2001,ki=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xf=1234567,oo=Math.PI/180,go=180/Math.PI;function Mi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]+"-"+An[t&255]+An[t>>8&255]+"-"+An[t>>16&15|64]+An[t>>24&255]+"-"+An[e&63|128]+An[e>>8&255]+"-"+An[e>>16&255]+An[e>>24&255]+An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]).toLowerCase()}function gn(n,t,e){return Math.max(t,Math.min(e,n))}function Gh(n,t){return(n%t+t)%t}function l0(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function h0(n,t,e){return n!==t?(e-n)/(t-n):0}function ao(n,t,e){return(1-e)*n+e*t}function f0(n,t,e,i){return ao(n,t,1-Math.exp(-e*i))}function u0(n,t=1){return t-Math.abs(Gh(n,t*2)-t)}function d0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function p0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function m0(n,t){return n+Math.floor(Math.random()*(t-n+1))}function g0(n,t){return n+Math.random()*(t-n)}function x0(n){return n*(.5-Math.random())}function _0(n){n!==void 0&&(Xf=n);let t=Xf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function y0(n){return n*oo}function M0(n){return n*go}function v0(n){return(n&n-1)===0&&n!==0}function E0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function b0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function S0(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),f=o((t-i)/2),d=r((i-t)/2),_=o((i-t)/2);switch(s){case"XYX":n.set(a*h,c*u,c*f,a*l);break;case"YZY":n.set(c*f,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*f,a*h,a*l);break;case"XZX":n.set(a*h,c*_,c*d,a*l);break;case"YXY":n.set(c*d,a*h,c*_,a*l);break;case"ZYZ":n.set(c*_,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ci(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Le(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var fd={DEG2RAD:oo,RAD2DEG:go,generateUUID:Mi,clamp:gn,euclideanModulo:Gh,mapLinear:l0,inverseLerp:h0,lerp:ao,damp:f0,pingpong:u0,smoothstep:d0,smootherstep:p0,randInt:m0,randFloat:g0,randFloatSpread:x0,seededRandom:_0,degToRad:y0,radToDeg:M0,isPowerOfTwo:v0,ceilPowerOfTwo:E0,floorPowerOfTwo:b0,setQuaternionFromProperEuler:S0,normalize:Le,denormalize:ci},Tt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(gn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ye=class n{constructor(t,e,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],d=i[5],_=i[8],M=s[0],g=s[3],m=s[6],w=s[1],S=s[4],v=s[7],F=s[2],L=s[5],U=s[8];return r[0]=o*M+a*w+c*F,r[3]=o*g+a*S+c*L,r[6]=o*m+a*v+c*U,r[1]=l*M+h*w+u*F,r[4]=l*g+h*S+u*L,r[7]=l*m+h*v+u*U,r[2]=f*M+d*w+_*F,r[5]=f*g+d*S+_*L,r[8]=f*m+d*v+_*U,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,_=e*u+i*f+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/_;return t[0]=u*M,t[1]=(s*l-h*i)*M,t[2]=(a*i-s*o)*M,t[3]=f*M,t[4]=(h*e-s*c)*M,t[5]=(s*r-a*e)*M,t[6]=d*M,t[7]=(i*c-l*e)*M,t[8]=(o*e-i*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Lc.makeScale(t,e)),this}rotate(t){return this.premultiply(Lc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Lc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Lc=new ye;function ud(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function xo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function w0(){let n=xo("canvas");return n.style.display="block",n}var Yf={};function so(n){n in Yf||(Yf[n]=!0,console.warn(n))}function T0(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function A0(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function R0(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Te={enabled:!0,workingColorSpace:Ur,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Oe&&(n.r=Bi(n.r),n.g=Bi(n.g),n.b=Bi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Oe&&(n.r=br(n.r),n.g=br(n.g),n.b=br(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ss?ic:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Bi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function br(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var qf=[.64,.33,.3,.6,.15,.06],Zf=[.2126,.7152,.0722],Kf=[.3127,.329],Jf=new ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$f=new ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Te.define({[Ur]:{primaries:qf,whitePoint:Kf,transfer:ic,toXYZ:Jf,fromXYZ:$f,luminanceCoefficients:Zf,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:qf,whitePoint:Kf,transfer:Oe,toXYZ:Jf,fromXYZ:$f,luminanceCoefficients:Zf,outputColorSpaceConfig:{drawingBufferColorSpace:De}}});var nr,Jl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{nr===void 0&&(nr=xo("canvas")),nr.width=t.width,nr.height=t.height;let i=nr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=nr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=xo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Bi(e[i]/255)*255):e[i]=Bi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},C0=0,Da=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=Mi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Dc(s[o].image)):r.push(Dc(s[o]))}else r=Dc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Dc(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Jl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var P0=0,In=class n extends ki{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Ls,s=Ls,r=yi,o=Ds,a=li,c=Hi,l=n.DEFAULT_ANISOTROPY,h=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=Mi(),this.name="",this.source=new Da(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ju)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case po:t.x=t.x-Math.floor(t.x);break;case Ls:t.x=t.x<0?0:1;break;case vl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case po:t.y=t.y-Math.floor(t.y);break;case Ls:t.y=t.y<0?0:1;break;case vl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=ju;In.DEFAULT_ANISOTROPY=1;var Fe=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],_=c[9],M=c[2],g=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-M)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+M)<.1&&Math.abs(_+g)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(l+1)/2,v=(d+1)/2,F=(m+1)/2,L=(h+f)/4,U=(u+M)/4,B=(_+g)/4;return S>v&&S>F?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=L/i,r=U/i):v>F?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=L/s,r=B/s):F<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),i=U/r,s=B/r),this.set(i,s,r,e),this}let w=Math.sqrt((g-_)*(g-_)+(u-M)*(u-M)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(g-_)/w,this.y=(u-M)/w,this.z=(f-h)/w,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$l=class extends ki{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new In(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Da(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vi=class extends $l{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ua=class extends In{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var jl=class extends In{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hi=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],_=r[o+2],M=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=M;return}if(u!==M||c!==f||l!==d||h!==_){let g=1-a,m=c*f+l*d+h*_+u*M,w=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){let F=Math.sqrt(S),L=Math.atan2(F,m*w);g=Math.sin(g*L)/F,a=Math.sin(a*L)/F}let v=a*w;if(c=c*g+f*v,l=l*g+d*v,h=h*g+_*v,u=u*g+M*v,g===1-a){let F=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=F,l*=F,h*=F,u*=F}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return t[e]=a*_+h*u+c*d-l*f,t[e+1]=c*_+h*f+l*u-a*d,t[e+2]=l*_+h*d+a*f-c*u,t[e+3]=h*_-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),f=c(i/2),d=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*_,this._y=l*d*u-f*h*_,this._z=l*h*_+f*d*u,this._w=l*h*u-f*d*_;break;case"YXZ":this._x=f*h*u+l*d*_,this._y=l*d*u-f*h*_,this._z=l*h*_-f*d*u,this._w=l*h*u+f*d*_;break;case"ZXY":this._x=f*h*u-l*d*_,this._y=l*d*u+f*h*_,this._z=l*h*_+f*d*u,this._w=l*h*u-f*d*_;break;case"ZYX":this._x=f*h*u-l*d*_,this._y=l*d*u+f*h*_,this._z=l*h*_-f*d*u,this._w=l*h*u+f*d*_;break;case"YZX":this._x=f*h*u+l*d*_,this._y=l*d*u+f*h*_,this._z=l*h*_-f*d*u,this._w=l*h*u-f*d*_;break;case"XZY":this._x=f*h*u-l*d*_,this._y=l*d*u-f*h*_,this._z=l*h*_+f*d*u,this._w=l*h*u+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(gn(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Uc.copy(this).projectOnVector(t),this.sub(Uc)}reflect(t){return this.sub(Uc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(gn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Uc=new O,jf=new hi,Ns=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,si):si.fromBufferAttribute(r,o),si.applyMatrix4(t.matrixWorld),this.expandByPoint(si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$o.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$o.copy(i.boundingBox)),$o.applyMatrix4(t.matrixWorld),this.union($o)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,si),si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Jr),jo.subVectors(this.max,Jr),ir.subVectors(t.a,Jr),sr.subVectors(t.b,Jr),rr.subVectors(t.c,Jr),ji.subVectors(sr,ir),Qi.subVectors(rr,sr),bs.subVectors(ir,rr);let e=[0,-ji.z,ji.y,0,-Qi.z,Qi.y,0,-bs.z,bs.y,ji.z,0,-ji.x,Qi.z,0,-Qi.x,bs.z,0,-bs.x,-ji.y,ji.x,0,-Qi.y,Qi.x,0,-bs.y,bs.x,0];return!Nc(e,ir,sr,rr,jo)||(e=[1,0,0,0,1,0,0,0,1],!Nc(e,ir,sr,rr,jo))?!1:(Qo.crossVectors(ji,Qi),e=[Qo.x,Qo.y,Qo.z],Nc(e,ir,sr,rr,jo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ii=[new O,new O,new O,new O,new O,new O,new O,new O],si=new O,$o=new Ns,ir=new O,sr=new O,rr=new O,ji=new O,Qi=new O,bs=new O,Jr=new O,jo=new O,Qo=new O,Ss=new O;function Nc(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ss.fromArray(n,r);let a=s.x*Math.abs(Ss.x)+s.y*Math.abs(Ss.y)+s.z*Math.abs(Ss.z),c=t.dot(Ss),l=e.dot(Ss),h=i.dot(Ss);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var I0=new Ns,$r=new O,zc=new O,Pr=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):I0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$r.subVectors(t,this.center);let e=$r.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector($r,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($r.copy(t.center).add(zc)),this.expandByPoint($r.copy(t.center).sub(zc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Li=new O,Oc=new O,ta=new O,ts=new O,Fc=new O,ea=new O,Bc=new O,zs=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Li.copy(this.origin).addScaledVector(this.direction,e),Li.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Oc.copy(t).add(e).multiplyScalar(.5),ta.copy(e).sub(t).normalize(),ts.copy(this.origin).sub(Oc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ta),a=ts.dot(this.direction),c=-ts.dot(ta),l=ts.lengthSq(),h=Math.abs(1-o*o),u,f,d,_;if(h>0)if(u=o*c-a,f=o*a-c,_=r*h,u>=0)if(f>=-_)if(f<=_){let M=1/h;u*=M,f*=M,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-_?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=_?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Oc).addScaledVector(ta,f),d}intersectSphere(t,e){Li.subVectors(t.center,this.origin);let i=Li.dot(this.direction),s=Li.dot(Li)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Li)!==null}intersectTriangle(t,e,i,s,r){Fc.subVectors(e,t),ea.subVectors(i,t),Bc.crossVectors(Fc,ea);let o=this.direction.dot(Bc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ts.subVectors(this.origin,t);let c=a*this.direction.dot(ea.crossVectors(ts,ea));if(c<0)return null;let l=a*this.direction.dot(Fc.cross(ts));if(l<0||c+l>o)return null;let h=-a*ts.dot(Bc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ge=class n{constructor(t,e,i,s,r,o,a,c,l,h,u,f,d,_,M,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,h,u,f,d,_,M,g)}set(t,e,i,s,r,o,a,c,l,h,u,f,d,_,M,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=_,m[11]=M,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/or.setFromMatrixColumn(t,0).length(),r=1/or.setFromMatrixColumn(t,1).length(),o=1/or.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,_=a*h,M=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+_*l,e[5]=f-M*l,e[9]=-a*c,e[2]=M-f*l,e[6]=_+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,_=l*h,M=l*u;e[0]=f+M*a,e[4]=_*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-_,e[6]=M+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,_=l*h,M=l*u;e[0]=f-M*a,e[4]=-o*u,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*h,e[9]=M-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,d=o*u,_=a*h,M=a*u;e[0]=c*h,e[4]=_*l-d,e[8]=f*l+M,e[1]=c*u,e[5]=M*l+f,e[9]=d*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,_=a*c,M=a*l;e[0]=c*h,e[4]=M-f*u,e[8]=_*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+_,e[10]=f-M*u}else if(t.order==="XZY"){let f=o*c,d=o*l,_=a*c,M=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+M,e[5]=o*h,e[9]=d*u-_,e[2]=_*u-d,e[6]=a*h,e[10]=M*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(L0,t,D0)}lookAt(t,e,i){let s=this.elements;return Xn.subVectors(t,e),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),es.crossVectors(i,Xn),es.lengthSq()===0&&(Math.abs(i.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),es.crossVectors(i,Xn)),es.normalize(),na.crossVectors(Xn,es),s[0]=es.x,s[4]=na.x,s[8]=Xn.x,s[1]=es.y,s[5]=na.y,s[9]=Xn.y,s[2]=es.z,s[6]=na.z,s[10]=Xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],d=i[13],_=i[2],M=i[6],g=i[10],m=i[14],w=i[3],S=i[7],v=i[11],F=i[15],L=s[0],U=s[4],B=s[8],R=s[12],E=s[1],D=s[5],Q=s[9],$=s[13],V=s[2],X=s[6],K=s[10],q=s[14],W=s[3],_t=s[7],Ct=s[11],Ot=s[15];return r[0]=o*L+a*E+c*V+l*W,r[4]=o*U+a*D+c*X+l*_t,r[8]=o*B+a*Q+c*K+l*Ct,r[12]=o*R+a*$+c*q+l*Ot,r[1]=h*L+u*E+f*V+d*W,r[5]=h*U+u*D+f*X+d*_t,r[9]=h*B+u*Q+f*K+d*Ct,r[13]=h*R+u*$+f*q+d*Ot,r[2]=_*L+M*E+g*V+m*W,r[6]=_*U+M*D+g*X+m*_t,r[10]=_*B+M*Q+g*K+m*Ct,r[14]=_*R+M*$+g*q+m*Ot,r[3]=w*L+S*E+v*V+F*W,r[7]=w*U+S*D+v*X+F*_t,r[11]=w*B+S*Q+v*K+F*Ct,r[15]=w*R+S*$+v*q+F*Ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],_=t[3],M=t[7],g=t[11],m=t[15];return _*(+r*c*u-s*l*u-r*a*f+i*l*f+s*a*d-i*c*d)+M*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+g*(+e*l*u-e*a*d-r*o*u+i*o*d+r*a*h-i*l*h)+m*(-s*a*h-e*c*u+e*a*f+s*o*u-i*o*f+i*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],_=t[12],M=t[13],g=t[14],m=t[15],w=u*g*l-M*f*l+M*c*d-a*g*d-u*c*m+a*f*m,S=_*f*l-h*g*l-_*c*d+o*g*d+h*c*m-o*f*m,v=h*M*l-_*u*l+_*a*d-o*M*d-h*a*m+o*u*m,F=_*u*c-h*M*c-_*a*f+o*M*f+h*a*g-o*u*g,L=e*w+i*S+s*v+r*F;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/L;return t[0]=w*U,t[1]=(M*f*r-u*g*r-M*s*d+i*g*d+u*s*m-i*f*m)*U,t[2]=(a*g*r-M*c*r+M*s*l-i*g*l-a*s*m+i*c*m)*U,t[3]=(u*c*r-a*f*r-u*s*l+i*f*l+a*s*d-i*c*d)*U,t[4]=S*U,t[5]=(h*g*r-_*f*r+_*s*d-e*g*d-h*s*m+e*f*m)*U,t[6]=(_*c*r-o*g*r-_*s*l+e*g*l+o*s*m-e*c*m)*U,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*d+e*c*d)*U,t[8]=v*U,t[9]=(_*u*r-h*M*r-_*i*d+e*M*d+h*i*m-e*u*m)*U,t[10]=(o*M*r-_*a*r+_*i*l-e*M*l-o*i*m+e*a*m)*U,t[11]=(h*a*r-o*u*r-h*i*l+e*u*l+o*i*d-e*a*d)*U,t[12]=F*U,t[13]=(h*M*s-_*u*s+_*i*f-e*M*f-h*i*g+e*u*g)*U,t[14]=(_*a*s-o*M*s-_*i*c+e*M*c+o*i*g-e*a*g)*U,t[15]=(o*u*s-h*a*s+h*i*c-e*u*c-o*i*f+e*a*f)*U,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,_=r*u,M=o*h,g=o*u,m=a*u,w=c*l,S=c*h,v=c*u,F=i.x,L=i.y,U=i.z;return s[0]=(1-(M+m))*F,s[1]=(d+v)*F,s[2]=(_-S)*F,s[3]=0,s[4]=(d-v)*L,s[5]=(1-(f+m))*L,s[6]=(g+w)*L,s[7]=0,s[8]=(_+S)*U,s[9]=(g-w)*U,s[10]=(1-(f+M))*U,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=or.set(s[0],s[1],s[2]).length(),o=or.set(s[4],s[5],s[6]).length(),a=or.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ri.copy(this);let l=1/r,h=1/o,u=1/a;return ri.elements[0]*=l,ri.elements[1]*=l,ri.elements[2]*=l,ri.elements[4]*=h,ri.elements[5]*=h,ri.elements[6]*=h,ri.elements[8]*=u,ri.elements[9]*=u,ri.elements[10]*=u,e.setFromRotationMatrix(ri),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Fi){let c=this.elements,l=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),d,_;if(a===Fi)d=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===La)d=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Fi){let c=this.elements,l=1/(e-t),h=1/(i-s),u=1/(o-r),f=(e+t)*l,d=(i+s)*h,_,M;if(a===Fi)_=(o+r)*u,M=-2*u;else if(a===La)_=r*u,M=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=M,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},or=new O,ri=new Ge,L0=new O(0,0,0),D0=new O(1,1,1),es=new O,na=new O,Xn=new O,Qf=new Ge,tu=new hi,vi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(gn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-gn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(gn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Qf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tu.setFromEuler(this),this.setFromQuaternion(tu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vi.DEFAULT_ORDER="XYZ";var _o=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},U0=0,eu=new O,ar=new hi,Di=new Ge,ia=new O,jr=new O,N0=new O,z0=new hi,nu=new O(1,0,0),iu=new O(0,1,0),su=new O(0,0,1),ru={type:"added"},O0={type:"removed"},cr={type:"childadded",child:null},Hc={type:"childremoved",child:null},We=class n extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new O,e=new vi,i=new hi,s=new O(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new ye}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ar.setFromAxisAngle(t,e),this.quaternion.multiply(ar),this}rotateOnWorldAxis(t,e){return ar.setFromAxisAngle(t,e),this.quaternion.premultiply(ar),this}rotateX(t){return this.rotateOnAxis(nu,t)}rotateY(t){return this.rotateOnAxis(iu,t)}rotateZ(t){return this.rotateOnAxis(su,t)}translateOnAxis(t,e){return eu.copy(t).applyQuaternion(this.quaternion),this.position.add(eu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nu,t)}translateY(t){return this.translateOnAxis(iu,t)}translateZ(t){return this.translateOnAxis(su,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ia.copy(t):ia.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(jr,ia,this.up):Di.lookAt(ia,jr,this.up),this.quaternion.setFromRotationMatrix(Di),s&&(Di.extractRotation(s.matrixWorld),ar.setFromRotationMatrix(Di),this.quaternion.premultiply(ar.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ru),cr.child=t,this.dispatchEvent(cr),cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(O0),Hc.child=t,this.dispatchEvent(Hc),Hc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Di.multiply(t.parent.matrixWorld)),t.applyMatrix4(Di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ru),cr.child=t,this.dispatchEvent(cr),cr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,t,N0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,z0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};We.DEFAULT_UP=new O(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var oi=new O,Ui=new O,kc=new O,Ni=new O,lr=new O,hr=new O,ou=new O,Vc=new O,Gc=new O,Wc=new O,Xc=new Fe,Yc=new Fe,qc=new Fe,rs=class n{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),oi.subVectors(t,e),s.cross(oi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){oi.subVectors(s,e),Ui.subVectors(i,e),kc.subVectors(t,e);let o=oi.dot(oi),a=oi.dot(Ui),c=oi.dot(kc),l=Ui.dot(Ui),h=Ui.dot(kc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,_=(o*h-a*c)*f;return r.set(1-d-_,_,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ni.x),c.addScaledVector(o,Ni.y),c.addScaledVector(a,Ni.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return Xc.setScalar(0),Yc.setScalar(0),qc.setScalar(0),Xc.fromBufferAttribute(t,e),Yc.fromBufferAttribute(t,i),qc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Xc,r.x),o.addScaledVector(Yc,r.y),o.addScaledVector(qc,r.z),o}static isFrontFacing(t,e,i,s){return oi.subVectors(i,e),Ui.subVectors(t,e),oi.cross(Ui).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return oi.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),oi.cross(Ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;lr.subVectors(s,i),hr.subVectors(r,i),Vc.subVectors(t,i);let c=lr.dot(Vc),l=hr.dot(Vc);if(c<=0&&l<=0)return e.copy(i);Gc.subVectors(t,s);let h=lr.dot(Gc),u=hr.dot(Gc);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(lr,o);Wc.subVectors(t,r);let d=lr.dot(Wc),_=hr.dot(Wc);if(_>=0&&d<=_)return e.copy(r);let M=d*l-c*_;if(M<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(i).addScaledVector(hr,a);let g=h*_-d*u;if(g<=0&&u-h>=0&&d-_>=0)return ou.subVectors(r,s),a=(u-h)/(u-h+(d-_)),e.copy(s).addScaledVector(ou,a);let m=1/(g+M+f);return o=M*m,a=f*m,e.copy(i).addScaledVector(lr,o).addScaledVector(hr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},sa={h:0,s:0,l:0};function Zc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var he=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Te.workingColorSpace){return this.r=t,this.g=e,this.b=i,Te.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Te.workingColorSpace){if(t=Gh(t,1),e=gn(e,0,1),i=gn(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Zc(o,r,t+1/3),this.g=Zc(o,r,t),this.b=Zc(o,r,t-1/3)}return Te.toWorkingColorSpace(this,s),this}setStyle(t,e=De){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){let i=dd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}copyLinearToSRGB(t){return this.r=br(t.r),this.g=br(t.g),this.b=br(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return Te.fromWorkingColorSpace(Rn.copy(this),t),Math.round(gn(Rn.r*255,0,255))*65536+Math.round(gn(Rn.g*255,0,255))*256+Math.round(gn(Rn.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Te.workingColorSpace){Te.fromWorkingColorSpace(Rn.copy(this),e);let i=Rn.r,s=Rn.g,r=Rn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Te.workingColorSpace){return Te.fromWorkingColorSpace(Rn.copy(this),e),t.r=Rn.r,t.g=Rn.g,t.b=Rn.b,t}getStyle(t=De){Te.fromWorkingColorSpace(Rn.copy(this),t);let e=Rn.r,i=Rn.g,s=Rn.b;return t!==De?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ns),this.setHSL(ns.h+t,ns.s+e,ns.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ns),t.getHSL(sa);let i=ao(ns.h,sa.h,e),s=ao(ns.s,sa.s,e),r=ao(ns.l,sa.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rn=new he;he.NAMES=dd;var F0=0,Gi=class extends ki{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Mi(),this.name="",this.blending=vr,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hl,this.blendDst=fl,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=er,this.stencilZFail=er,this.stencilZPass=er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(i.blending=this.blending),this.side!==cs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hl&&(i.blendSrc=this.blendSrc),this.blendDst!==fl&&(i.blendDst=this.blendDst),this.blendEquation!==Ps&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==er&&(i.stencilFail=this.stencilFail),this.stencilZFail!==er&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==er&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},tn=class extends Gi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var on=new O,ra=new Tt,Sn=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Kl,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ra.fromBufferAttribute(this,e),ra.applyMatrix3(t),this.setXY(e,ra.x,ra.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyMatrix3(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ci(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Le(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ci(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ci(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ci(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ci(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Kl&&(t.usage=this.usage),t}};var Na=class extends Sn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var za=class extends Sn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var xe=class extends Sn{constructor(t,e,i){super(new Float32Array(t),e,i)}},B0=0,$n=new Ge,Kc=new We,fr=new O,Yn=new Ns,Qr=new Ns,mn=new O,ke=class n extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ud(t)?za:Na)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ye().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $n.makeRotationFromQuaternion(t),this.applyMatrix4($n),this}rotateX(t){return $n.makeRotationX(t),this.applyMatrix4($n),this}rotateY(t){return $n.makeRotationY(t),this.applyMatrix4($n),this}rotateZ(t){return $n.makeRotationZ(t),this.applyMatrix4($n),this}translate(t,e,i){return $n.makeTranslation(t,e,i),this.applyMatrix4($n),this}scale(t,e,i){return $n.makeScale(t,e,i),this.applyMatrix4($n),this}lookAt(t){return Kc.lookAt(t),Kc.updateMatrix(),this.applyMatrix4(Kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xe(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ns);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Yn.setFromBufferAttribute(r),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let i=this.boundingSphere.center;if(Yn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Qr.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(Yn.min,Qr.min),Yn.expandByPoint(mn),mn.addVectors(Yn.max,Qr.max),Yn.expandByPoint(mn)):(Yn.expandByPoint(Qr.min),Yn.expandByPoint(Qr.max))}Yn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)mn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(mn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)mn.fromBufferAttribute(a,l),c&&(fr.fromBufferAttribute(t,l),mn.add(fr)),s=Math.max(s,i.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let B=0;B<i.count;B++)a[B]=new O,c[B]=new O;let l=new O,h=new O,u=new O,f=new Tt,d=new Tt,_=new Tt,M=new O,g=new O;function m(B,R,E){l.fromBufferAttribute(i,B),h.fromBufferAttribute(i,R),u.fromBufferAttribute(i,E),f.fromBufferAttribute(r,B),d.fromBufferAttribute(r,R),_.fromBufferAttribute(r,E),h.sub(l),u.sub(l),d.sub(f),_.sub(f);let D=1/(d.x*_.y-_.x*d.y);isFinite(D)&&(M.copy(h).multiplyScalar(_.y).addScaledVector(u,-d.y).multiplyScalar(D),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(D),a[B].add(M),a[R].add(M),a[E].add(M),c[B].add(g),c[R].add(g),c[E].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let B=0,R=w.length;B<R;++B){let E=w[B],D=E.start,Q=E.count;for(let $=D,V=D+Q;$<V;$+=3)m(t.getX($+0),t.getX($+1),t.getX($+2))}let S=new O,v=new O,F=new O,L=new O;function U(B){F.fromBufferAttribute(s,B),L.copy(F);let R=a[B];S.copy(R),S.sub(F.multiplyScalar(F.dot(R))).normalize(),v.crossVectors(L,R);let D=v.dot(c[B])<0?-1:1;o.setXYZW(B,S.x,S.y,S.z,D)}for(let B=0,R=w.length;B<R;++B){let E=w[B],D=E.start,Q=E.count;for(let $=D,V=D+Q;$<V;$+=3)U(t.getX($+0)),U(t.getX($+1)),U(t.getX($+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Sn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new O,r=new O,o=new O,a=new O,c=new O,l=new O,h=new O,u=new O;if(t)for(let f=0,d=t.count;f<d;f+=3){let _=t.getX(f+0),M=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,M),l.fromBufferAttribute(i,g),a.add(h),c.add(h),l.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)mn.fromBufferAttribute(t,e),mn.normalize(),t.setXYZ(e,mn.x,mn.y,mn.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,_=0;for(let M=0,g=c.length;M<g;M++){a.isInterleavedBufferAttribute?d=c[M]*a.data.stride+a.offset:d=c[M]*h;for(let m=0;m<h;m++)f[_++]=l[d++]}return new Sn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,i);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},au=new Ge,ws=new zs,oa=new Pr,cu=new O,aa=new O,ca=new O,la=new O,Jc=new O,ha=new O,lu=new O,fa=new O,Lt=class extends We{constructor(t=new ke,e=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ha.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Jc.fromBufferAttribute(u,t),o?ha.addScaledVector(Jc,h):ha.addScaledVector(Jc.sub(e),h))}e.add(ha)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(r),ws.copy(t.ray).recast(t.near),!(oa.containsPoint(ws.origin)===!1&&(ws.intersectSphere(oa,cu)===null||ws.origin.distanceToSquared(cu)>(t.far-t.near)**2))&&(au.copy(r).invert(),ws.copy(t.ray).applyMatrix4(au),!(i.boundingBox!==null&&ws.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ws)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=f.length;_<M;_++){let g=f[_],m=o[g.materialIndex],w=Math.max(g.start,d.start),S=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=w,F=S;v<F;v+=3){let L=a.getX(v),U=a.getX(v+1),B=a.getX(v+2);s=ua(this,m,t,i,l,h,u,L,U,B),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let _=Math.max(0,d.start),M=Math.min(a.count,d.start+d.count);for(let g=_,m=M;g<m;g+=3){let w=a.getX(g),S=a.getX(g+1),v=a.getX(g+2);s=ua(this,o,t,i,l,h,u,w,S,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,M=f.length;_<M;_++){let g=f[_],m=o[g.materialIndex],w=Math.max(g.start,d.start),S=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let v=w,F=S;v<F;v+=3){let L=v,U=v+1,B=v+2;s=ua(this,m,t,i,l,h,u,L,U,B),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let _=Math.max(0,d.start),M=Math.min(c.count,d.start+d.count);for(let g=_,m=M;g<m;g+=3){let w=g,S=g+1,v=g+2;s=ua(this,o,t,i,l,h,u,w,S,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function H0(n,t,e,i,s,r,o,a){let c;if(t.side===Pn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===cs,a),c===null)return null;fa.copy(a),fa.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(fa);return l<e.near||l>e.far?null:{distance:l,point:fa.clone(),object:n}}function ua(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,aa),n.getVertexPosition(c,ca),n.getVertexPosition(l,la);let h=H0(n,t,e,i,aa,ca,la,lu);if(h){let u=new O;rs.getBarycoord(lu,aa,ca,la,u),s&&(h.uv=rs.getInterpolatedAttribute(s,a,c,l,u,new Tt)),r&&(h.uv1=rs.getInterpolatedAttribute(r,a,c,l,u,new Tt)),o&&(h.normal=rs.getInterpolatedAttribute(o,a,c,l,u,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new O,materialIndex:0};rs.getNormal(aa,ca,la,f.normal),h.face=f,h.barycoord=u}return h}var Be=class n extends ke{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(u,2));function _(M,g,m,w,S,v,F,L,U,B,R){let E=v/U,D=F/B,Q=v/2,$=F/2,V=L/2,X=U+1,K=B+1,q=0,W=0,_t=new O;for(let Ct=0;Ct<K;Ct++){let Ot=Ct*D-$;for(let fe=0;fe<X;fe++){let Rt=fe*E-Q;_t[M]=Rt*w,_t[g]=Ot*S,_t[m]=V,l.push(_t.x,_t.y,_t.z),_t[M]=0,_t[g]=0,_t[m]=L>0?1:-1,h.push(_t.x,_t.y,_t.z),u.push(fe/U),u.push(1-Ct/B),q+=1}}for(let Ct=0;Ct<B;Ct++)for(let Ot=0;Ot<U;Ot++){let fe=f+Ot+X*Ct,Rt=f+Ot+X*(Ct+1),gt=f+(Ot+1)+X*(Ct+1),Dt=f+(Ot+1)+X*Ct;c.push(fe,Rt,Dt),c.push(Rt,gt,Dt),W+=6}a.addGroup(d,W,R),d+=W,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ir(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Nn(n){let t={};for(let e=0;e<n.length;e++){let i=Ir(n[e]);for(let s in i)t[s]=i[s]}return t}function k0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function pd(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}var V0={clone:Ir,merge:Nn},G0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,W0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jn=class extends Gi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=G0,this.fragmentShader=W0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ir(t.uniforms),this.uniformsGroups=k0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Oa=class extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=Fi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},is=new O,hu=new Tt,fu=new Tt,xn=class extends Oa{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=go*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(oo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return go*2*Math.atan(Math.tan(oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(is.x,is.y).multiplyScalar(-t/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-t/is.z)}getViewSize(t,e){return this.getViewBounds(t,hu,fu),e.subVectors(fu,hu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(oo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ur=-90,dr=1,Ql=class extends We{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new xn(ur,dr,t,e);s.layers=this.layers,this.add(s);let r=new xn(ur,dr,t,e);r.layers=this.layers,this.add(r);let o=new xn(ur,dr,t,e);o.layers=this.layers,this.add(o);let a=new xn(ur,dr,t,e);a.layers=this.layers,this.add(a);let c=new xn(ur,dr,t,e);c.layers=this.layers,this.add(c);let l=new xn(ur,dr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Fi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===La)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Fa=class extends In{constructor(t,e,i,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Tr,super(t,e,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},th=class extends Vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Fa(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:yi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Be(5,5,5),r=new jn({name:"CubemapFromEquirect",uniforms:Ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pn,blending:os});r.uniforms.tEquirect.value=e;let o=new Lt(s,r),a=e.minFilter;return e.minFilter===Ds&&(e.minFilter=yi),new Ql(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},$c=new O,X0=new O,Y0=new ye,ai=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=$c.subVectors(i,e).cross(X0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta($c),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Y0.getNormalMatrix(t),s=this.coplanarPoint($c).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ts=new Pr,da=new O,yo=class{constructor(t=new ai,e=new ai,i=new ai,s=new ai,r=new ai,o=new ai){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Fi){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],_=s[9],M=s[10],g=s[11],m=s[12],w=s[13],S=s[14],v=s[15];if(i[0].setComponents(c-r,f-l,g-d,v-m).normalize(),i[1].setComponents(c+r,f+l,g+d,v+m).normalize(),i[2].setComponents(c+o,f+h,g+_,v+w).normalize(),i[3].setComponents(c-o,f-h,g-_,v-w).normalize(),i[4].setComponents(c-a,f-u,g-M,v-S).normalize(),e===Fi)i[5].setComponents(c+a,f+u,g+M,v+S).normalize();else if(e===La)i[5].setComponents(a,u,M,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(t){return Ts.center.set(0,0,0),Ts.radius=.7071067811865476,Ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(da.x=s.normal.x>0?t.max.x:t.min.x,da.y=s.normal.y>0?t.max.y:t.min.y,da.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(da)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function md(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function q0(n){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<u.length;d++){let _=u[f],M=u[d];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++f,u[f]=M)}u.length=f+1;for(let d=0,_=u.length;d<_;d++){let M=u[d];n.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var ls=class n extends ke{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],_=[],M=[],g=[];for(let m=0;m<h;m++){let w=m*f-o;for(let S=0;S<l;S++){let v=S*u-r;_.push(v,-w,0),M.push(0,0,1),g.push(S/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let w=0;w<a;w++){let S=w+l*m,v=w+l*(m+1),F=w+1+l*(m+1),L=w+1+l*m;d.push(S,v,L),d.push(v,F,L)}this.setIndex(d),this.setAttribute("position",new xe(_,3)),this.setAttribute("normal",new xe(M,3)),this.setAttribute("uv",new xe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Z0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,K0=`#ifdef USE_ALPHAHASH
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
#endif`,J0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Q0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tm=`#ifdef USE_AOMAP
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
#endif`,em=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nm=`#ifdef USE_BATCHING
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
#endif`,im=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,om=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,am=`#ifdef USE_IRIDESCENCE
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
#endif`,cm=`#ifdef USE_BUMPMAP
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
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,xm=`#define PI 3.141592653589793
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
} // validated`,_m=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ym=`vec3 transformedNormal = objectNormal;
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
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Em=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sm="gl_FragColor = linearToOutputTexel( gl_FragColor );",wm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Am=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Im=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nm=`#ifdef USE_GRADIENTMAP
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
}`,zm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Om=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bm=`uniform bool receiveShadow;
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
#endif`,Hm=`#ifdef USE_ENVMAP
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
#endif`,km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xm=`PhysicalMaterial material;
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
#endif`,Ym=`struct PhysicalMaterial {
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
}`,qm=`
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
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Km=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$m=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ig=`#if defined( USE_POINTS_UV )
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
#endif`,sg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,og=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ag=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lg=`#ifdef USE_MORPHTARGETS
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
#endif`,hg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ug=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gg=`#ifdef USE_NORMALMAP
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
#endif`,xg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_g=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Eg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ag=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ig=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lg=`float getShadowMask() {
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
}`,Dg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ug=`#ifdef USE_SKINNING
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
#endif`,Ng=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zg=`#ifdef USE_SKINNING
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
#endif`,Og=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kg=`#ifdef USE_TRANSMISSION
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
#endif`,Vg=`#ifdef USE_TRANSMISSION
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
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zg=`uniform sampler2D t2D;
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
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`#include <common>
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
}`,tx=`#if DEPTH_PACKING == 3200
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
}`,ex=`#define DISTANCE
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
}`,nx=`#define DISTANCE
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
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`uniform float scale;
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
}`,ox=`uniform vec3 diffuse;
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
}`,ax=`#include <common>
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
}`,cx=`uniform vec3 diffuse;
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
}`,lx=`#define LAMBERT
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
}`,hx=`#define LAMBERT
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
}`,fx=`#define MATCAP
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
}`,ux=`#define MATCAP
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
}`,dx=`#define NORMAL
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
}`,px=`#define NORMAL
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
}`,mx=`#define PHONG
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
}`,gx=`#define PHONG
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
}`,xx=`#define STANDARD
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
}`,_x=`#define STANDARD
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
}`,yx=`#define TOON
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
}`,Mx=`#define TOON
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
}`,vx=`uniform float size;
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
}`,Ex=`uniform vec3 diffuse;
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
}`,bx=`#include <common>
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
}`,Sx=`uniform vec3 color;
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
}`,wx=`uniform float rotation;
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
}`,Tx=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:Z0,alphahash_pars_fragment:K0,alphamap_fragment:J0,alphamap_pars_fragment:$0,alphatest_fragment:j0,alphatest_pars_fragment:Q0,aomap_fragment:tm,aomap_pars_fragment:em,batching_pars_vertex:nm,batching_vertex:im,begin_vertex:sm,beginnormal_vertex:rm,bsdfs:om,iridescence_fragment:am,bumpmap_pars_fragment:cm,clipping_planes_fragment:lm,clipping_planes_pars_fragment:hm,clipping_planes_pars_vertex:fm,clipping_planes_vertex:um,color_fragment:dm,color_pars_fragment:pm,color_pars_vertex:mm,color_vertex:gm,common:xm,cube_uv_reflection_fragment:_m,defaultnormal_vertex:ym,displacementmap_pars_vertex:Mm,displacementmap_vertex:vm,emissivemap_fragment:Em,emissivemap_pars_fragment:bm,colorspace_fragment:Sm,colorspace_pars_fragment:wm,envmap_fragment:Tm,envmap_common_pars_fragment:Am,envmap_pars_fragment:Rm,envmap_pars_vertex:Cm,envmap_physical_pars_fragment:Hm,envmap_vertex:Pm,fog_vertex:Im,fog_pars_vertex:Lm,fog_fragment:Dm,fog_pars_fragment:Um,gradientmap_pars_fragment:Nm,lightmap_pars_fragment:zm,lights_lambert_fragment:Om,lights_lambert_pars_fragment:Fm,lights_pars_begin:Bm,lights_toon_fragment:km,lights_toon_pars_fragment:Vm,lights_phong_fragment:Gm,lights_phong_pars_fragment:Wm,lights_physical_fragment:Xm,lights_physical_pars_fragment:Ym,lights_fragment_begin:qm,lights_fragment_maps:Zm,lights_fragment_end:Km,logdepthbuf_fragment:Jm,logdepthbuf_pars_fragment:$m,logdepthbuf_pars_vertex:jm,logdepthbuf_vertex:Qm,map_fragment:tg,map_pars_fragment:eg,map_particle_fragment:ng,map_particle_pars_fragment:ig,metalnessmap_fragment:sg,metalnessmap_pars_fragment:rg,morphinstance_vertex:og,morphcolor_vertex:ag,morphnormal_vertex:cg,morphtarget_pars_vertex:lg,morphtarget_vertex:hg,normal_fragment_begin:fg,normal_fragment_maps:ug,normal_pars_fragment:dg,normal_pars_vertex:pg,normal_vertex:mg,normalmap_pars_fragment:gg,clearcoat_normal_fragment_begin:xg,clearcoat_normal_fragment_maps:_g,clearcoat_pars_fragment:yg,iridescence_pars_fragment:Mg,opaque_fragment:vg,packing:Eg,premultiplied_alpha_fragment:bg,project_vertex:Sg,dithering_fragment:wg,dithering_pars_fragment:Tg,roughnessmap_fragment:Ag,roughnessmap_pars_fragment:Rg,shadowmap_pars_fragment:Cg,shadowmap_pars_vertex:Pg,shadowmap_vertex:Ig,shadowmask_pars_fragment:Lg,skinbase_vertex:Dg,skinning_pars_vertex:Ug,skinning_vertex:Ng,skinnormal_vertex:zg,specularmap_fragment:Og,specularmap_pars_fragment:Fg,tonemapping_fragment:Bg,tonemapping_pars_fragment:Hg,transmission_fragment:kg,transmission_pars_fragment:Vg,uv_pars_fragment:Gg,uv_pars_vertex:Wg,uv_vertex:Xg,worldpos_vertex:Yg,background_vert:qg,background_frag:Zg,backgroundCube_vert:Kg,backgroundCube_frag:Jg,cube_vert:$g,cube_frag:jg,depth_vert:Qg,depth_frag:tx,distanceRGBA_vert:ex,distanceRGBA_frag:nx,equirect_vert:ix,equirect_frag:sx,linedashed_vert:rx,linedashed_frag:ox,meshbasic_vert:ax,meshbasic_frag:cx,meshlambert_vert:lx,meshlambert_frag:hx,meshmatcap_vert:fx,meshmatcap_frag:ux,meshnormal_vert:dx,meshnormal_frag:px,meshphong_vert:mx,meshphong_frag:gx,meshphysical_vert:xx,meshphysical_frag:_x,meshtoon_vert:yx,meshtoon_frag:Mx,points_vert:vx,points_frag:Ex,shadow_vert:bx,shadow_frag:Sx,sprite_vert:wx,sprite_frag:Tx},Xt={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ye}},envmap:{envMap:{value:null},envMapRotation:{value:new ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ye},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0},uvTransform:{value:new ye}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}}},_i={basic:{uniforms:Nn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Nn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new he(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Nn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Nn([Xt.common,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.roughnessmap,Xt.metalnessmap,Xt.fog,Xt.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Nn([Xt.common,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.gradientmap,Xt.fog,Xt.lights,{emissive:{value:new he(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Nn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Nn([Xt.points,Xt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Nn([Xt.common,Xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Nn([Xt.common,Xt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Nn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Nn([Xt.sprite,Xt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ye}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distanceRGBA:{uniforms:Nn([Xt.common,Xt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distanceRGBA_vert,fragmentShader:ve.distanceRGBA_frag},shadow:{uniforms:Nn([Xt.lights,Xt.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};_i.physical={uniforms:Nn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ye},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ye},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ye},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ye},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ye},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ye}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};var pa={r:0,b:0,g:0},As=new vi,Ax=new Ge;function Rx(n,t,e,i,s,r,o){let a=new he(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function _(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?e:t).get(S)),S}function M(w){let S=!1,v=_(w);v===null?m(a,c):v&&v.isColor&&(m(v,1),S=!0);let F=n.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(w,S){let v=_(S);v&&(v.isCubeTexture||v.mapping===nc)?(h===void 0&&(h=new Lt(new Be(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:Ir(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),As.copy(S.backgroundRotation),As.x*=-1,As.y*=-1,As.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ax.makeRotationFromEuler(As)),h.material.toneMapped=Te.getTransfer(v.colorSpace)!==Oe,(u!==v||f!==v.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Lt(new ls(2,2),new jn({name:"BackgroundMaterial",uniforms:Ir(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Te.getTransfer(v.colorSpace)!==Oe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,d=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,S){w.getRGB(pa,pd(n)),i.buffers.color.setClear(pa.r,pa.g,pa.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(w,S=1){a.set(w),c=S,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,m(a,c)},render:M,addToRenderList:g}}function Cx(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(E,D,Q,$,V){let X=!1,K=u($,Q,D);r!==K&&(r=K,l(r.object)),X=d(E,$,Q,V),X&&_(E,$,Q,V),V!==null&&t.update(V,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,v(E,D,Q,$),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return n.createVertexArray()}function l(E){return n.bindVertexArray(E)}function h(E){return n.deleteVertexArray(E)}function u(E,D,Q){let $=Q.wireframe===!0,V=i[E.id];V===void 0&&(V={},i[E.id]=V);let X=V[D.id];X===void 0&&(X={},V[D.id]=X);let K=X[$];return K===void 0&&(K=f(c()),X[$]=K),K}function f(E){let D=[],Q=[],$=[];for(let V=0;V<e;V++)D[V]=0,Q[V]=0,$[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:Q,attributeDivisors:$,object:E,attributes:{},index:null}}function d(E,D,Q,$){let V=r.attributes,X=D.attributes,K=0,q=Q.getAttributes();for(let W in q)if(q[W].location>=0){let Ct=V[W],Ot=X[W];if(Ot===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(Ot=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(Ot=E.instanceColor)),Ct===void 0||Ct.attribute!==Ot||Ot&&Ct.data!==Ot.data)return!0;K++}return r.attributesNum!==K||r.index!==$}function _(E,D,Q,$){let V={},X=D.attributes,K=0,q=Q.getAttributes();for(let W in q)if(q[W].location>=0){let Ct=X[W];Ct===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(Ct=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(Ct=E.instanceColor));let Ot={};Ot.attribute=Ct,Ct&&Ct.data&&(Ot.data=Ct.data),V[W]=Ot,K++}r.attributes=V,r.attributesNum=K,r.index=$}function M(){let E=r.newAttributes;for(let D=0,Q=E.length;D<Q;D++)E[D]=0}function g(E){m(E,0)}function m(E,D){let Q=r.newAttributes,$=r.enabledAttributes,V=r.attributeDivisors;Q[E]=1,$[E]===0&&(n.enableVertexAttribArray(E),$[E]=1),V[E]!==D&&(n.vertexAttribDivisor(E,D),V[E]=D)}function w(){let E=r.newAttributes,D=r.enabledAttributes;for(let Q=0,$=D.length;Q<$;Q++)D[Q]!==E[Q]&&(n.disableVertexAttribArray(Q),D[Q]=0)}function S(E,D,Q,$,V,X,K){K===!0?n.vertexAttribIPointer(E,D,Q,V,X):n.vertexAttribPointer(E,D,Q,$,V,X)}function v(E,D,Q,$){M();let V=$.attributes,X=Q.getAttributes(),K=D.defaultAttributeValues;for(let q in X){let W=X[q];if(W.location>=0){let _t=V[q];if(_t===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(_t=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(_t=E.instanceColor)),_t!==void 0){let Ct=_t.normalized,Ot=_t.itemSize,fe=t.get(_t);if(fe===void 0)continue;let Rt=fe.buffer,gt=fe.type,Dt=fe.bytesPerElement,jt=gt===n.INT||gt===n.UNSIGNED_INT||_t.gpuType===Oh;if(_t.isInterleavedBufferAttribute){let Nt=_t.data,Qt=Nt.stride,ue=_t.offset;if(Nt.isInstancedInterleavedBuffer){for(let ae=0;ae<W.locationSize;ae++)m(W.location+ae,Nt.meshPerAttribute);E.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Nt.meshPerAttribute*Nt.count)}else for(let ae=0;ae<W.locationSize;ae++)g(W.location+ae);n.bindBuffer(n.ARRAY_BUFFER,Rt);for(let ae=0;ae<W.locationSize;ae++)S(W.location+ae,Ot/W.locationSize,gt,Ct,Qt*Dt,(ue+Ot/W.locationSize*ae)*Dt,jt)}else{if(_t.isInstancedBufferAttribute){for(let Nt=0;Nt<W.locationSize;Nt++)m(W.location+Nt,_t.meshPerAttribute);E.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Nt=0;Nt<W.locationSize;Nt++)g(W.location+Nt);n.bindBuffer(n.ARRAY_BUFFER,Rt);for(let Nt=0;Nt<W.locationSize;Nt++)S(W.location+Nt,Ot/W.locationSize,gt,Ct,Ot*Dt,Ot/W.locationSize*Nt*Dt,jt)}}else if(K!==void 0){let Ct=K[q];if(Ct!==void 0)switch(Ct.length){case 2:n.vertexAttrib2fv(W.location,Ct);break;case 3:n.vertexAttrib3fv(W.location,Ct);break;case 4:n.vertexAttrib4fv(W.location,Ct);break;default:n.vertexAttrib1fv(W.location,Ct)}}}}w()}function F(){B();for(let E in i){let D=i[E];for(let Q in D){let $=D[Q];for(let V in $)h($[V].object),delete $[V];delete D[Q]}delete i[E]}}function L(E){if(i[E.id]===void 0)return;let D=i[E.id];for(let Q in D){let $=D[Q];for(let V in $)h($[V].object),delete $[V];delete D[Q]}delete i[E.id]}function U(E){for(let D in i){let Q=i[D];if(Q[E.id]===void 0)continue;let $=Q[E.id];for(let V in $)h($[V].object),delete $[V];delete Q[E.id]}}function B(){R(),o=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:B,resetDefaultState:R,dispose:F,releaseStatesOfGeometry:L,releaseStatesOfProgram:U,initAttributes:M,enableAttribute:g,disableUnusedAttributes:w}}function Px(n,t,e){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let d=0;for(let _=0;_<u;_++)d+=h[_];e.update(d,i,1)}function c(l,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<l.length;_++)o(l[_],h[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,u);let _=0;for(let M=0;M<u;M++)_+=h[M]*f[M];e.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Ix(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let U=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(U){return!(U!==li&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){let B=U===Oo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==Hi&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Oi&&!B)}function c(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),F=_>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:F,maxSamples:L}}function Lx(n){let t=this,e=null,i=0,s=!1,r=!1,o=new ai,a=new ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let _=u.clippingPlanes,M=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!s||_===null||_.length===0||r&&!g)r?h(null):l();else{let w=r?0:i,S=w*4,v=m.clippingState||null;c.value=v,v=h(_,f,S,d);for(let F=0;F!==S;++F)v[F]=e[F];m.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,_){let M=u!==null?u.length:0,g=null;if(M!==0){if(g=c.value,_!==!0||g===null){let m=d+M*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<m)&&(g=new Float32Array(m));for(let S=0,v=d;S!==M;++S,v+=4)o.copy(u[S]).applyMatrix4(w,a),o.normal.toArray(g,v),g[v+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}function Dx(n){let t=new WeakMap;function e(o,a){return a===yl?o.mapping=Tr:a===Ml&&(o.mapping=Ar),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===yl||a===Ml)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new th(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Ba=class extends Oa{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},yr=4,uu=[.125,.215,.35,.446,.526,.582],Is=20,jc=new Ba,du=new he,Qc=null,tl=0,el=0,nl=!1,Cs=(1+Math.sqrt(5))/2,pr=1/Cs,pu=[new O(-Cs,pr,0),new O(Cs,pr,0),new O(-pr,0,Cs),new O(pr,0,Cs),new O(0,Cs,-pr),new O(0,Cs,pr),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],Ha=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Qc=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qc,tl,el),this._renderer.xr.enabled=nl,t.scissorTest=!1,ma(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Tr||t.mapping===Ar?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qc=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Oo,format:li,colorSpace:Ur,depthBuffer:!1},s=mu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mu(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ux(r)),this._blurMaterial=Nx(r,t,e)}return s}_compileMaterial(t){let e=new Lt(this._lodPlanes[0],t);this._renderer.compile(e,jc)}_sceneToCubeUV(t,e,i,s){let a=new xn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(du),h.toneMapping=as,h.autoClear=!1;let d=new tn({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),_=new Lt(new Be,d),M=!1,g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,M=!0):(d.color.copy(du),M=!0);for(let m=0;m<6;m++){let w=m%3;w===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):w===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let S=this._cubeSize;ma(s,w*S,m>2?S:0,S,S),h.setRenderTarget(s),M&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Tr||t.mapping===Ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Lt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;ma(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,jc)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=pu[(s-r-1)%pu.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Lt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Is-1),M=r/_,g=isFinite(r)?1+Math.floor(h*M):Is;g>Is&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Is}`);let m=[],w=0;for(let U=0;U<Is;++U){let B=U/M,R=Math.exp(-B*B/2);m.push(R),U===0?w+=R:U<g&&(w+=2*R)}for(let U=0;U<m.length;U++)m[U]=m[U]/w;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:S}=this;f.dTheta.value=_,f.mipInt.value=S-i;let v=this._sizeLods[s],F=3*v*(s>S-yr?s-S+yr:0),L=4*(this._cubeSize-v);ma(e,F,L,3*v,2*v),c.setRenderTarget(e),c.render(u,jc)}};function Ux(n){let t=[],e=[],i=[],s=n,r=n-yr+1+uu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>n-yr?c=uu[o-n+yr-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,_=6,M=3,g=2,m=1,w=new Float32Array(M*_*d),S=new Float32Array(g*_*d),v=new Float32Array(m*_*d);for(let L=0;L<d;L++){let U=L%3*2/3-1,B=L>2?0:-1,R=[U,B,0,U+2/3,B,0,U+2/3,B+1,0,U,B,0,U+2/3,B+1,0,U,B+1,0];w.set(R,M*_*L),S.set(f,g*_*L);let E=[L,L,L,L,L,L];v.set(E,m*_*L)}let F=new ke;F.setAttribute("position",new Sn(w,M)),F.setAttribute("uv",new Sn(S,g)),F.setAttribute("faceIndex",new Sn(v,m)),t.push(F),s>yr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function mu(n,t,e){let i=new Vi(n,t,e);return i.texture.mapping=nc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ma(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Nx(n,t,e){let i=new Float32Array(Is),s=new O(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wh(),fragmentShader:`

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
		`,blending:os,depthTest:!1,depthWrite:!1})}function gu(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wh(),fragmentShader:`

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
		`,blending:os,depthTest:!1,depthWrite:!1})}function xu(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function Wh(){return`

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
	`}function zx(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===yl||c===Ml,h=c===Tr||c===Ar;if(l||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Ha(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Ha(n)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Ox(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&so("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Fx(n,t,e,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);for(let _ in f.morphAttributes){let M=f.morphAttributes[_];for(let g=0,m=M.length;g<m;g++)t.remove(M[g])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let _ in f)t.update(f[_],n.ARRAY_BUFFER);let d=u.morphAttributes;for(let _ in d){let M=d[_];for(let g=0,m=M.length;g<m;g++)t.update(M[g],n.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,_=u.attributes.position,M=0;if(d!==null){let w=d.array;M=d.version;for(let S=0,v=w.length;S<v;S+=3){let F=w[S+0],L=w[S+1],U=w[S+2];f.push(F,L,L,U,U,F)}}else if(_!==void 0){let w=_.array;M=_.version;for(let S=0,v=w.length/3-1;S<v;S+=3){let F=S+0,L=S+1,U=S+2;f.push(F,L,L,U,U,F)}}else return;let g=new(ud(f)?za:Na)(f,1);g.version=M;let m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Bx(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function l(f,d,_){_!==0&&(n.drawElementsInstanced(i,d,r,f*o,_),e.update(d,i,_))}function h(f,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,_);let g=0;for(let m=0;m<_;m++)g+=d[m];e.update(g,i,1)}function u(f,d,_,M){if(_===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)l(f[m]/o,d[m],M[m]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,M,0,_);let m=0;for(let w=0;w<_;w++)m+=d[w]*M[w];e.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Hx(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function kx(n,t,e){let i=new WeakMap,s=new Fe;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let R=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",R)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],S=0;d===!0&&(S=1),_===!0&&(S=2),M===!0&&(S=3);let v=a.attributes.position.count*S,F=1;v>t.maxTextureSize&&(F=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let L=new Float32Array(v*F*4*u),U=new Ua(L,v,F,u);U.type=Oi,U.needsUpdate=!0;let B=S*4;for(let E=0;E<u;E++){let D=g[E],Q=m[E],$=w[E],V=v*F*4*E;for(let X=0;X<D.count;X++){let K=X*B;d===!0&&(s.fromBufferAttribute(D,X),L[V+K+0]=s.x,L[V+K+1]=s.y,L[V+K+2]=s.z,L[V+K+3]=0),_===!0&&(s.fromBufferAttribute(Q,X),L[V+K+4]=s.x,L[V+K+5]=s.y,L[V+K+6]=s.z,L[V+K+7]=0),M===!0&&(s.fromBufferAttribute($,X),L[V+K+8]=s.x,L[V+K+9]=s.y,L[V+K+10]=s.z,L[V+K+11]=$.itemSize===4?s.w:1)}}f={count:u,texture:U,size:new Tt(v,F)},i.set(a,f),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let M=0;M<l.length;M++)d+=l[M];let _=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Vx(n,t,e,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var ka=class extends In{constructor(t,e,i,s,r,o,a,c,l,h=Er){if(h!==Er&&h!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Er&&(i=Us),i===void 0&&h===Cr&&(i=Rr),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:nn,this.minFilter=c!==void 0?c:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},gd=new In,_u=new ka(1,1),xd=new Ua,_d=new jl,yd=new Fa,yu=[],Mu=[],vu=new Float32Array(16),Eu=new Float32Array(9),bu=new Float32Array(4);function Nr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=yu[s];if(r===void 0&&(r=new Float32Array(s),yu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function hn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function fn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function sc(n,t){let e=Mu[t];e===void 0&&(e=new Int32Array(t),Mu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Gx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Wx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;n.uniform2fv(this.addr,t),fn(e,t)}}function Xx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(hn(e,t))return;n.uniform3fv(this.addr,t),fn(e,t)}}function Yx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;n.uniform4fv(this.addr,t),fn(e,t)}}function qx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(hn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),fn(e,t)}else{if(hn(e,i))return;bu.set(i),n.uniformMatrix2fv(this.addr,!1,bu),fn(e,i)}}function Zx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(hn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),fn(e,t)}else{if(hn(e,i))return;Eu.set(i),n.uniformMatrix3fv(this.addr,!1,Eu),fn(e,i)}}function Kx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(hn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),fn(e,t)}else{if(hn(e,i))return;vu.set(i),n.uniformMatrix4fv(this.addr,!1,vu),fn(e,i)}}function Jx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function $x(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;n.uniform2iv(this.addr,t),fn(e,t)}}function jx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(hn(e,t))return;n.uniform3iv(this.addr,t),fn(e,t)}}function Qx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;n.uniform4iv(this.addr,t),fn(e,t)}}function t_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function e_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;n.uniform2uiv(this.addr,t),fn(e,t)}}function n_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(hn(e,t))return;n.uniform3uiv(this.addr,t),fn(e,t)}}function i_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;n.uniform4uiv(this.addr,t),fn(e,t)}}function s_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(_u.compareFunction=hd,r=_u):r=gd,e.setTexture2D(t||r,s)}function r_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||_d,s)}function o_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||yd,s)}function a_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||xd,s)}function c_(n){switch(n){case 5126:return Gx;case 35664:return Wx;case 35665:return Xx;case 35666:return Yx;case 35674:return qx;case 35675:return Zx;case 35676:return Kx;case 5124:case 35670:return Jx;case 35667:case 35671:return $x;case 35668:case 35672:return jx;case 35669:case 35673:return Qx;case 5125:return t_;case 36294:return e_;case 36295:return n_;case 36296:return i_;case 35678:case 36198:case 36298:case 36306:case 35682:return s_;case 35679:case 36299:case 36307:return r_;case 35680:case 36300:case 36308:case 36293:return o_;case 36289:case 36303:case 36311:case 36292:return a_}}function l_(n,t){n.uniform1fv(this.addr,t)}function h_(n,t){let e=Nr(t,this.size,2);n.uniform2fv(this.addr,e)}function f_(n,t){let e=Nr(t,this.size,3);n.uniform3fv(this.addr,e)}function u_(n,t){let e=Nr(t,this.size,4);n.uniform4fv(this.addr,e)}function d_(n,t){let e=Nr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function p_(n,t){let e=Nr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function m_(n,t){let e=Nr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function g_(n,t){n.uniform1iv(this.addr,t)}function x_(n,t){n.uniform2iv(this.addr,t)}function __(n,t){n.uniform3iv(this.addr,t)}function y_(n,t){n.uniform4iv(this.addr,t)}function M_(n,t){n.uniform1uiv(this.addr,t)}function v_(n,t){n.uniform2uiv(this.addr,t)}function E_(n,t){n.uniform3uiv(this.addr,t)}function b_(n,t){n.uniform4uiv(this.addr,t)}function S_(n,t,e){let i=this.cache,s=t.length,r=sc(e,s);hn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||gd,r[o])}function w_(n,t,e){let i=this.cache,s=t.length,r=sc(e,s);hn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||_d,r[o])}function T_(n,t,e){let i=this.cache,s=t.length,r=sc(e,s);hn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||yd,r[o])}function A_(n,t,e){let i=this.cache,s=t.length,r=sc(e,s);hn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||xd,r[o])}function R_(n){switch(n){case 5126:return l_;case 35664:return h_;case 35665:return f_;case 35666:return u_;case 35674:return d_;case 35675:return p_;case 35676:return m_;case 5124:case 35670:return g_;case 35667:case 35671:return x_;case 35668:case 35672:return __;case 35669:case 35673:return y_;case 5125:return M_;case 36294:return v_;case 36295:return E_;case 36296:return b_;case 35678:case 36198:case 36298:case 36306:case 35682:return S_;case 35679:case 36299:case 36307:return w_;case 35680:case 36300:case 36308:case 36293:return T_;case 36289:case 36303:case 36311:case 36292:return A_}}var eh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=c_(e.type)}},nh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=R_(e.type)}},ih=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},il=/(\w+)(\])?(\[|\.)?/g;function Su(n,t){n.seq.push(t),n.map[t.id]=t}function C_(n,t,e){let i=n.name,s=i.length;for(il.lastIndex=0;;){let r=il.exec(i),o=il.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Su(e,l===void 0?new eh(a,n,t):new nh(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new ih(a),Su(e,u)),e=u}}}var Sr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);C_(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function wu(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var P_=37297,I_=0;function L_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Tu=new ye;function D_(n){Te._getMatrix(Tu,Te.workingColorSpace,n);let t=`mat3( ${Tu.elements.map(e=>e.toFixed(4))} )`;switch(Te.getTransfer(n)){case ic:return[t,"LinearTransferOETF"];case Oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Au(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+L_(n.getShaderSource(t),o)}else return s}function U_(n,t){let e=D_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function N_(n,t){let e;switch(t){case Xp:e="Linear";break;case Yp:e="Reinhard";break;case qp:e="Cineon";break;case Zp:e="ACESFilmic";break;case Jp:e="AgX";break;case $p:e="Neutral";break;case Kp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ga=new O;function z_(){Te.getLuminanceCoefficients(ga);let n=ga.x.toFixed(4),t=ga.y.toFixed(4),e=ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ro).join(`
`)}function F_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function B_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ro(n){return n!==""}function Ru(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var H_=/^[ \t]*#include +<([\w\d./]+)>/gm;function sh(n){return n.replace(H_,V_)}var k_=new Map;function V_(n,t){let e=ve[t];if(e===void 0){let i=k_.get(t);if(i!==void 0)e=ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return sh(e)}var G_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pu(n){return n.replace(G_,W_)}function W_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Iu(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function X_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$u?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===ec?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===zi&&(t="SHADOWMAP_TYPE_VSM"),t}function Y_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Tr:case Ar:t="ENVMAP_TYPE_CUBE";break;case nc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function q_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ar:t="ENVMAP_MODE_REFRACTION";break}return t}function Z_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case zh:t="ENVMAP_BLENDING_MULTIPLY";break;case Gp:t="ENVMAP_BLENDING_MIX";break;case Wp:t="ENVMAP_BLENDING_ADD";break}return t}function K_(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function J_(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=X_(e),l=Y_(e),h=q_(e),u=Z_(e),f=K_(e),d=O_(e),_=F_(r),M=s.createProgram(),g,m,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ro).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ro).join(`
`),m.length>0&&(m+=`
`)):(g=[Iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ro).join(`
`),m=[Iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==as?"#define TONE_MAPPING":"",e.toneMapping!==as?ve.tonemapping_pars_fragment:"",e.toneMapping!==as?N_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,U_("linearToOutputTexel",e.outputColorSpace),z_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ro).join(`
`)),o=sh(o),o=Ru(o,e),o=Cu(o,e),a=sh(a),a=Ru(a,e),a=Cu(a,e),o=Pu(o),a=Pu(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Wf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=w+g+o,v=w+m+a,F=wu(s,s.VERTEX_SHADER,S),L=wu(s,s.FRAGMENT_SHADER,v);s.attachShader(M,F),s.attachShader(M,L),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function U(D){if(n.debug.checkShaderErrors){let Q=s.getProgramInfoLog(M).trim(),$=s.getShaderInfoLog(F).trim(),V=s.getShaderInfoLog(L).trim(),X=!0,K=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,F,L);else{let q=Au(s,F,"vertex"),W=Au(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Q+`
`+q+`
`+W)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):($===""||V==="")&&(K=!1);K&&(D.diagnostics={runnable:X,programLog:Q,vertexShader:{log:$,prefix:g},fragmentShader:{log:V,prefix:m}})}s.deleteShader(F),s.deleteShader(L),B=new Sr(s,M),R=B_(s,M)}let B;this.getUniforms=function(){return B===void 0&&U(this),B};let R;this.getAttributes=function(){return R===void 0&&U(this),R};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(M,P_)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=I_++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=F,this.fragmentShader=L,this}var $_=0,rh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new oh(t),e.set(t,i)),i}},oh=class{constructor(t){this.id=$_++,this.code=t,this.usedTimes=0}};function j_(n,t,e,i,s,r,o){let a=new _o,c=new rh,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(R){return l.add(R),R===0?"uv":`uv${R}`}function g(R,E,D,Q,$){let V=Q.fog,X=$.geometry,K=R.isMeshStandardMaterial?Q.environment:null,q=(R.isMeshStandardMaterial?e:t).get(R.envMap||K),W=q&&q.mapping===nc?q.image.height:null,_t=_[R.type];R.precision!==null&&(d=s.getMaxPrecision(R.precision),d!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",d,"instead."));let Ct=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ot=Ct!==void 0?Ct.length:0,fe=0;X.morphAttributes.position!==void 0&&(fe=1),X.morphAttributes.normal!==void 0&&(fe=2),X.morphAttributes.color!==void 0&&(fe=3);let Rt,gt,Dt,jt;if(_t){let Se=_i[_t];Rt=Se.vertexShader,gt=Se.fragmentShader}else Rt=R.vertexShader,gt=R.fragmentShader,c.update(R),Dt=c.getVertexShaderID(R),jt=c.getFragmentShaderID(R);let Nt=n.getRenderTarget(),Qt=n.state.buffers.depth.getReversed(),ue=$.isInstancedMesh===!0,ae=$.isBatchedMesh===!0,ce=!!R.map,yt=!!R.matcap,St=!!q,z=!!R.aoMap,Kt=!!R.lightMap,bt=!!R.bumpMap,Yt=!!R.normalMap,Ut=!!R.displacementMap,le=!!R.emissiveMap,qt=!!R.metalnessMap,P=!!R.roughnessMap,T=R.anisotropy>0,tt=R.clearcoat>0,ut=R.dispersion>0,vt=R.iridescence>0,mt=R.sheen>0,J=R.transmission>0,et=T&&!!R.anisotropyMap,it=tt&&!!R.clearcoatMap,wt=tt&&!!R.clearcoatNormalMap,ct=tt&&!!R.clearcoatRoughnessMap,ft=vt&&!!R.iridescenceMap,xt=vt&&!!R.iridescenceThicknessMap,Ft=mt&&!!R.sheenColorMap,dt=mt&&!!R.sheenRoughnessMap,ie=!!R.specularMap,Ht=!!R.specularColorMap,Bt=!!R.specularIntensityMap,G=J&&!!R.transmissionMap,Pt=J&&!!R.thicknessMap,at=!!R.gradientMap,Mt=!!R.alphaMap,kt=R.alphaTest>0,Vt=!!R.alphaHash,_e=!!R.extensions,Ke=as;R.toneMapped&&(Nt===null||Nt.isXRRenderTarget===!0)&&(Ke=n.toneMapping);let cn={shaderID:_t,shaderType:R.type,shaderName:R.name,vertexShader:Rt,fragmentShader:gt,defines:R.defines,customVertexShaderID:Dt,customFragmentShaderID:jt,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:d,batching:ae,batchingColor:ae&&$._colorsTexture!==null,instancing:ue,instancingColor:ue&&$.instanceColor!==null,instancingMorph:ue&&$.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Nt===null?n.outputColorSpace:Nt.isXRRenderTarget===!0?Nt.texture.colorSpace:Ur,alphaToCoverage:!!R.alphaToCoverage,map:ce,matcap:yt,envMap:St,envMapMode:St&&q.mapping,envMapCubeUVHeight:W,aoMap:z,lightMap:Kt,bumpMap:bt,normalMap:Yt,displacementMap:f&&Ut,emissiveMap:le,normalMapObjectSpace:Yt&&R.normalMapType===e0,normalMapTangentSpace:Yt&&R.normalMapType===ld,metalnessMap:qt,roughnessMap:P,anisotropy:T,anisotropyMap:et,clearcoat:tt,clearcoatMap:it,clearcoatNormalMap:wt,clearcoatRoughnessMap:ct,dispersion:ut,iridescence:vt,iridescenceMap:ft,iridescenceThicknessMap:xt,sheen:mt,sheenColorMap:Ft,sheenRoughnessMap:dt,specularMap:ie,specularColorMap:Ht,specularIntensityMap:Bt,transmission:J,transmissionMap:G,thicknessMap:Pt,gradientMap:at,opaque:R.transparent===!1&&R.blending===vr&&R.alphaToCoverage===!1,alphaMap:Mt,alphaTest:kt,alphaHash:Vt,combine:R.combine,mapUv:ce&&M(R.map.channel),aoMapUv:z&&M(R.aoMap.channel),lightMapUv:Kt&&M(R.lightMap.channel),bumpMapUv:bt&&M(R.bumpMap.channel),normalMapUv:Yt&&M(R.normalMap.channel),displacementMapUv:Ut&&M(R.displacementMap.channel),emissiveMapUv:le&&M(R.emissiveMap.channel),metalnessMapUv:qt&&M(R.metalnessMap.channel),roughnessMapUv:P&&M(R.roughnessMap.channel),anisotropyMapUv:et&&M(R.anisotropyMap.channel),clearcoatMapUv:it&&M(R.clearcoatMap.channel),clearcoatNormalMapUv:wt&&M(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&M(R.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&M(R.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&M(R.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&M(R.sheenColorMap.channel),sheenRoughnessMapUv:dt&&M(R.sheenRoughnessMap.channel),specularMapUv:ie&&M(R.specularMap.channel),specularColorMapUv:Ht&&M(R.specularColorMap.channel),specularIntensityMapUv:Bt&&M(R.specularIntensityMap.channel),transmissionMapUv:G&&M(R.transmissionMap.channel),thicknessMapUv:Pt&&M(R.thicknessMap.channel),alphaMapUv:Mt&&M(R.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Yt||T),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!X.attributes.uv&&(ce||Mt),fog:!!V,useFog:R.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Qt,skinning:$.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Ot,morphTextureStride:fe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:R.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ke,decodeVideoTexture:ce&&R.map.isVideoTexture===!0&&Te.getTransfer(R.map.colorSpace)===Oe,decodeVideoTextureEmissive:le&&R.emissiveMap.isVideoTexture===!0&&Te.getTransfer(R.emissiveMap.colorSpace)===Oe,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Cn,flipSided:R.side===Pn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:_e&&R.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&R.extensions.multiDraw===!0||ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return cn.vertexUv1s=l.has(1),cn.vertexUv2s=l.has(2),cn.vertexUv3s=l.has(3),l.clear(),cn}function m(R){let E=[];if(R.shaderID?E.push(R.shaderID):(E.push(R.customVertexShaderID),E.push(R.customFragmentShaderID)),R.defines!==void 0)for(let D in R.defines)E.push(D),E.push(R.defines[D]);return R.isRawShaderMaterial===!1&&(w(E,R),S(E,R),E.push(n.outputColorSpace)),E.push(R.customProgramCacheKey),E.join()}function w(R,E){R.push(E.precision),R.push(E.outputColorSpace),R.push(E.envMapMode),R.push(E.envMapCubeUVHeight),R.push(E.mapUv),R.push(E.alphaMapUv),R.push(E.lightMapUv),R.push(E.aoMapUv),R.push(E.bumpMapUv),R.push(E.normalMapUv),R.push(E.displacementMapUv),R.push(E.emissiveMapUv),R.push(E.metalnessMapUv),R.push(E.roughnessMapUv),R.push(E.anisotropyMapUv),R.push(E.clearcoatMapUv),R.push(E.clearcoatNormalMapUv),R.push(E.clearcoatRoughnessMapUv),R.push(E.iridescenceMapUv),R.push(E.iridescenceThicknessMapUv),R.push(E.sheenColorMapUv),R.push(E.sheenRoughnessMapUv),R.push(E.specularMapUv),R.push(E.specularColorMapUv),R.push(E.specularIntensityMapUv),R.push(E.transmissionMapUv),R.push(E.thicknessMapUv),R.push(E.combine),R.push(E.fogExp2),R.push(E.sizeAttenuation),R.push(E.morphTargetsCount),R.push(E.morphAttributeCount),R.push(E.numDirLights),R.push(E.numPointLights),R.push(E.numSpotLights),R.push(E.numSpotLightMaps),R.push(E.numHemiLights),R.push(E.numRectAreaLights),R.push(E.numDirLightShadows),R.push(E.numPointLightShadows),R.push(E.numSpotLightShadows),R.push(E.numSpotLightShadowsWithMaps),R.push(E.numLightProbes),R.push(E.shadowMapType),R.push(E.toneMapping),R.push(E.numClippingPlanes),R.push(E.numClipIntersection),R.push(E.depthPacking)}function S(R,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),R.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),R.push(a.mask)}function v(R){let E=_[R.type],D;if(E){let Q=_i[E];D=V0.clone(Q.uniforms)}else D=R.uniforms;return D}function F(R,E){let D;for(let Q=0,$=h.length;Q<$;Q++){let V=h[Q];if(V.cacheKey===E){D=V,++D.usedTimes;break}}return D===void 0&&(D=new J_(n,E,R,r),h.push(D)),D}function L(R){if(--R.usedTimes===0){let E=h.indexOf(R);h[E]=h[h.length-1],h.pop(),R.destroy()}}function U(R){c.remove(R)}function B(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:F,releaseProgram:L,releaseShaderCache:U,programs:h,dispose:B}}function Q_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function t1(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Lu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Du(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,f,d,_,M,g){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:_,renderOrder:u.renderOrder,z:M,group:g},n[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=M,m.group=g),t++,m}function a(u,f,d,_,M,g){let m=o(u,f,d,_,M,g);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):e.push(m)}function c(u,f,d,_,M,g){let m=o(u,f,d,_,M,g);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function l(u,f){e.length>1&&e.sort(u||t1),i.length>1&&i.sort(f||Lu),s.length>1&&s.sort(f||Lu)}function h(){for(let u=t,f=n.length;u<f;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function e1(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Du,n.set(i,[o])):s>=r.length?(o=new Du,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function n1(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new he};break;case"SpotLight":e={position:new O,direction:new O,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new he,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new he,groundColor:new he};break;case"RectAreaLight":e={color:new he,position:new O,halfWidth:new O,halfHeight:new O};break}return n[t.id]=e,e}}}function i1(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var s1=0;function r1(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function o1(n){let t=new n1,e=i1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);let s=new O,r=new Ge,o=new Ge;function a(l){let h=0,u=0,f=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let d=0,_=0,M=0,g=0,m=0,w=0,S=0,v=0,F=0,L=0,U=0;l.sort(r1);for(let R=0,E=l.length;R<E;R++){let D=l[R],Q=D.color,$=D.intensity,V=D.distance,X=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=Q.r*$,u+=Q.g*$,f+=Q.b*$;else if(D.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(D.sh.coefficients[K],$);U++}else if(D.isDirectionalLight){let K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let q=D.shadow,W=e.get(D);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,i.directionalShadow[d]=W,i.directionalShadowMap[d]=X,i.directionalShadowMatrix[d]=D.shadow.matrix,w++}i.directional[d]=K,d++}else if(D.isSpotLight){let K=t.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy(Q).multiplyScalar($),K.distance=V,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,i.spot[M]=K;let q=D.shadow;if(D.map&&(i.spotLightMap[F]=D.map,F++,q.updateMatrices(D),D.castShadow&&L++),i.spotLightMatrix[M]=q.matrix,D.castShadow){let W=e.get(D);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,i.spotShadow[M]=W,i.spotShadowMap[M]=X,v++}M++}else if(D.isRectAreaLight){let K=t.get(D);K.color.copy(Q).multiplyScalar($),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=K,g++}else if(D.isPointLight){let K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),K.distance=D.distance,K.decay=D.decay,D.castShadow){let q=D.shadow,W=e.get(D);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,W.shadowCameraNear=q.camera.near,W.shadowCameraFar=q.camera.far,i.pointShadow[_]=W,i.pointShadowMap[_]=X,i.pointShadowMatrix[_]=D.shadow.matrix,S++}i.point[_]=K,_++}else if(D.isHemisphereLight){let K=t.get(D);K.skyColor.copy(D.color).multiplyScalar($),K.groundColor.copy(D.groundColor).multiplyScalar($),i.hemi[m]=K,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Xt.LTC_FLOAT_1,i.rectAreaLTC2=Xt.LTC_FLOAT_2):(i.rectAreaLTC1=Xt.LTC_HALF_1,i.rectAreaLTC2=Xt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let B=i.hash;(B.directionalLength!==d||B.pointLength!==_||B.spotLength!==M||B.rectAreaLength!==g||B.hemiLength!==m||B.numDirectionalShadows!==w||B.numPointShadows!==S||B.numSpotShadows!==v||B.numSpotMaps!==F||B.numLightProbes!==U)&&(i.directional.length=d,i.spot.length=M,i.rectArea.length=g,i.point.length=_,i.hemi.length=m,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=v+F-L,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=U,B.directionalLength=d,B.pointLength=_,B.spotLength=M,B.rectAreaLength=g,B.hemiLength=m,B.numDirectionalShadows=w,B.numPointShadows=S,B.numSpotShadows=v,B.numSpotMaps=F,B.numLightProbes=U,i.version=s1++)}function c(l,h){let u=0,f=0,d=0,_=0,M=0,g=h.matrixWorldInverse;for(let m=0,w=l.length;m<w;m++){let S=l[m];if(S.isDirectionalLight){let v=i.directional[u];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(S.isSpotLight){let v=i.spot[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(S.isRectAreaLight){let v=i.rectArea[_];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){let v=i.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),f++}else if(S.isHemisphereLight){let v=i.hemi[M];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(g),M++}}}return{setup:a,setupView:c,state:i}}function Uu(n){let t=new o1(n),e=[],i=[];function s(h){l.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function a1(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Uu(n),t.set(s,[a])):r>=o.length?(a=new Uu(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var ah=class extends Gi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Qp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ch=class extends Gi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},c1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l1=`uniform sampler2D shadow_pass;
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
}`;function h1(n,t,e){let i=new yo,s=new Tt,r=new Tt,o=new Fe,a=new ah({depthPacking:t0}),c=new ch,l={},h=e.maxTextureSize,u={[cs]:Pn,[Pn]:cs,[Cn]:Cn},f=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:c1,fragmentShader:l1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let _=new ke;_.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Lt(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$u;let m=this.type;this.render=function(L,U,B){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;let R=n.getRenderTarget(),E=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),Q=n.state;Q.setBlending(os),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);let $=m!==zi&&this.type===zi,V=m===zi&&this.type!==zi;for(let X=0,K=L.length;X<K;X++){let q=L[X],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let _t=W.getFrameExtents();if(s.multiply(_t),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/_t.x),s.x=r.x*_t.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/_t.y),s.y=r.y*_t.y,W.mapSize.y=r.y)),W.map===null||$===!0||V===!0){let Ot=this.type!==zi?{minFilter:nn,magFilter:nn}:{};W.map!==null&&W.map.dispose(),W.map=new Vi(s.x,s.y,Ot),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();let Ct=W.getViewportCount();for(let Ot=0;Ot<Ct;Ot++){let fe=W.getViewport(Ot);o.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),Q.viewport(o),W.updateMatrices(q,Ot),i=W.getFrustum(),v(U,B,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===zi&&w(W,B),W.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(R,E,D)};function w(L,U){let B=t.update(M);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,d.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Vi(s.x,s.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(U,null,B,f,M,null),d.uniforms.shadow_pass.value=L.mapPass.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(U,null,B,d,M,null)}function S(L,U,B,R){let E=null,D=B.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(D!==void 0)E=D;else if(E=B.isPointLight===!0?c:a,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){let Q=E.uuid,$=U.uuid,V=l[Q];V===void 0&&(V={},l[Q]=V);let X=V[$];X===void 0&&(X=E.clone(),V[$]=X,U.addEventListener("dispose",F)),E=X}if(E.visible=U.visible,E.wireframe=U.wireframe,R===zi?E.side=U.shadowSide!==null?U.shadowSide:U.side:E.side=U.shadowSide!==null?U.shadowSide:u[U.side],E.alphaMap=U.alphaMap,E.alphaTest=U.alphaTest,E.map=U.map,E.clipShadows=U.clipShadows,E.clippingPlanes=U.clippingPlanes,E.clipIntersection=U.clipIntersection,E.displacementMap=U.displacementMap,E.displacementScale=U.displacementScale,E.displacementBias=U.displacementBias,E.wireframeLinewidth=U.wireframeLinewidth,E.linewidth=U.linewidth,B.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let Q=n.properties.get(E);Q.light=B}return E}function v(L,U,B,R,E){if(L.visible===!1)return;if(L.layers.test(U.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&E===zi)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,L.matrixWorld);let $=t.update(L),V=L.material;if(Array.isArray(V)){let X=$.groups;for(let K=0,q=X.length;K<q;K++){let W=X[K],_t=V[W.materialIndex];if(_t&&_t.visible){let Ct=S(L,_t,R,E);L.onBeforeShadow(n,L,U,B,$,Ct,W),n.renderBufferDirect(B,null,$,Ct,L,W),L.onAfterShadow(n,L,U,B,$,Ct,W)}}}else if(V.visible){let X=S(L,V,R,E);L.onBeforeShadow(n,L,U,B,$,X,null),n.renderBufferDirect(B,null,$,X,L,null),L.onAfterShadow(n,L,U,B,$,X,null)}}let Q=L.children;for(let $=0,V=Q.length;$<V;$++)v(Q[$],U,B,R,E)}function F(L){L.target.removeEventListener("dispose",F);for(let B in l){let R=l[B],E=L.target.uuid;E in R&&(R[E].dispose(),delete R[E])}}}var f1={[ul]:dl,[pl]:xl,[ml]:_l,[wr]:gl,[dl]:ul,[xl]:pl,[_l]:ml,[gl]:wr};function u1(n,t){function e(){let G=!1,Pt=new Fe,at=null,Mt=new Fe(0,0,0,0);return{setMask:function(kt){at!==kt&&!G&&(n.colorMask(kt,kt,kt,kt),at=kt)},setLocked:function(kt){G=kt},setClear:function(kt,Vt,_e,Ke,cn){cn===!0&&(kt*=Ke,Vt*=Ke,_e*=Ke),Pt.set(kt,Vt,_e,Ke),Mt.equals(Pt)===!1&&(n.clearColor(kt,Vt,_e,Ke),Mt.copy(Pt))},reset:function(){G=!1,at=null,Mt.set(-1,0,0,0)}}}function i(){let G=!1,Pt=!1,at=null,Mt=null,kt=null;return{setReversed:function(Vt){if(Pt!==Vt){let _e=t.get("EXT_clip_control");Pt?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT);let Ke=kt;kt=null,this.setClear(Ke)}Pt=Vt},getReversed:function(){return Pt},setTest:function(Vt){Vt?Nt(n.DEPTH_TEST):Qt(n.DEPTH_TEST)},setMask:function(Vt){at!==Vt&&!G&&(n.depthMask(Vt),at=Vt)},setFunc:function(Vt){if(Pt&&(Vt=f1[Vt]),Mt!==Vt){switch(Vt){case ul:n.depthFunc(n.NEVER);break;case dl:n.depthFunc(n.ALWAYS);break;case pl:n.depthFunc(n.LESS);break;case wr:n.depthFunc(n.LEQUAL);break;case ml:n.depthFunc(n.EQUAL);break;case gl:n.depthFunc(n.GEQUAL);break;case xl:n.depthFunc(n.GREATER);break;case _l:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Mt=Vt}},setLocked:function(Vt){G=Vt},setClear:function(Vt){kt!==Vt&&(Pt&&(Vt=1-Vt),n.clearDepth(Vt),kt=Vt)},reset:function(){G=!1,at=null,Mt=null,kt=null,Pt=!1}}}function s(){let G=!1,Pt=null,at=null,Mt=null,kt=null,Vt=null,_e=null,Ke=null,cn=null;return{setTest:function(Se){G||(Se?Nt(n.STENCIL_TEST):Qt(n.STENCIL_TEST))},setMask:function(Se){Pt!==Se&&!G&&(n.stencilMask(Se),Pt=Se)},setFunc:function(Se,pn,Hn){(at!==Se||Mt!==pn||kt!==Hn)&&(n.stencilFunc(Se,pn,Hn),at=Se,Mt=pn,kt=Hn)},setOp:function(Se,pn,Hn){(Vt!==Se||_e!==pn||Ke!==Hn)&&(n.stencilOp(Se,pn,Hn),Vt=Se,_e=pn,Ke=Hn)},setLocked:function(Se){G=Se},setClear:function(Se){cn!==Se&&(n.clearStencil(Se),cn=Se)},reset:function(){G=!1,Pt=null,at=null,Mt=null,kt=null,Vt=null,_e=null,Ke=null,cn=null}}}let r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,d=[],_=null,M=!1,g=null,m=null,w=null,S=null,v=null,F=null,L=null,U=new he(0,0,0),B=0,R=!1,E=null,D=null,Q=null,$=null,V=null,X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,q=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(W)[1]),K=q>=1):W.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),K=q>=2);let _t=null,Ct={},Ot=n.getParameter(n.SCISSOR_BOX),fe=n.getParameter(n.VIEWPORT),Rt=new Fe().fromArray(Ot),gt=new Fe().fromArray(fe);function Dt(G,Pt,at,Mt){let kt=new Uint8Array(4),Vt=n.createTexture();n.bindTexture(G,Vt),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let _e=0;_e<at;_e++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Pt,0,n.RGBA,1,1,Mt,0,n.RGBA,n.UNSIGNED_BYTE,kt):n.texImage2D(Pt+_e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,kt);return Vt}let jt={};jt[n.TEXTURE_2D]=Dt(n.TEXTURE_2D,n.TEXTURE_2D,1),jt[n.TEXTURE_CUBE_MAP]=Dt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),jt[n.TEXTURE_2D_ARRAY]=Dt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),jt[n.TEXTURE_3D]=Dt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Nt(n.DEPTH_TEST),o.setFunc(wr),bt(!1),Yt(Of),Nt(n.CULL_FACE),z(os);function Nt(G){h[G]!==!0&&(n.enable(G),h[G]=!0)}function Qt(G){h[G]!==!1&&(n.disable(G),h[G]=!1)}function ue(G,Pt){return u[G]!==Pt?(n.bindFramebuffer(G,Pt),u[G]=Pt,G===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Pt),G===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Pt),!0):!1}function ae(G,Pt){let at=d,Mt=!1;if(G){at=f.get(Pt),at===void 0&&(at=[],f.set(Pt,at));let kt=G.textures;if(at.length!==kt.length||at[0]!==n.COLOR_ATTACHMENT0){for(let Vt=0,_e=kt.length;Vt<_e;Vt++)at[Vt]=n.COLOR_ATTACHMENT0+Vt;at.length=kt.length,Mt=!0}}else at[0]!==n.BACK&&(at[0]=n.BACK,Mt=!0);Mt&&n.drawBuffers(at)}function ce(G){return _!==G?(n.useProgram(G),_=G,!0):!1}let yt={[Ps]:n.FUNC_ADD,[Tp]:n.FUNC_SUBTRACT,[Ap]:n.FUNC_REVERSE_SUBTRACT};yt[Rp]=n.MIN,yt[Cp]=n.MAX;let St={[Pp]:n.ZERO,[Ip]:n.ONE,[Lp]:n.SRC_COLOR,[hl]:n.SRC_ALPHA,[Fp]:n.SRC_ALPHA_SATURATE,[zp]:n.DST_COLOR,[Up]:n.DST_ALPHA,[Dp]:n.ONE_MINUS_SRC_COLOR,[fl]:n.ONE_MINUS_SRC_ALPHA,[Op]:n.ONE_MINUS_DST_COLOR,[Np]:n.ONE_MINUS_DST_ALPHA,[Bp]:n.CONSTANT_COLOR,[Hp]:n.ONE_MINUS_CONSTANT_COLOR,[kp]:n.CONSTANT_ALPHA,[Vp]:n.ONE_MINUS_CONSTANT_ALPHA};function z(G,Pt,at,Mt,kt,Vt,_e,Ke,cn,Se){if(G===os){M===!0&&(Qt(n.BLEND),M=!1);return}if(M===!1&&(Nt(n.BLEND),M=!0),G!==wp){if(G!==g||Se!==R){if((m!==Ps||v!==Ps)&&(n.blendEquation(n.FUNC_ADD),m=Ps,v=Ps),Se)switch(G){case vr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uo:n.blendFunc(n.ONE,n.ONE);break;case Ff:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case vr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ff:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}w=null,S=null,F=null,L=null,U.set(0,0,0),B=0,g=G,R=Se}return}kt=kt||Pt,Vt=Vt||at,_e=_e||Mt,(Pt!==m||kt!==v)&&(n.blendEquationSeparate(yt[Pt],yt[kt]),m=Pt,v=kt),(at!==w||Mt!==S||Vt!==F||_e!==L)&&(n.blendFuncSeparate(St[at],St[Mt],St[Vt],St[_e]),w=at,S=Mt,F=Vt,L=_e),(Ke.equals(U)===!1||cn!==B)&&(n.blendColor(Ke.r,Ke.g,Ke.b,cn),U.copy(Ke),B=cn),g=G,R=!1}function Kt(G,Pt){G.side===Cn?Qt(n.CULL_FACE):Nt(n.CULL_FACE);let at=G.side===Pn;Pt&&(at=!at),bt(at),G.blending===vr&&G.transparent===!1?z(os):z(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let Mt=G.stencilWrite;a.setTest(Mt),Mt&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),le(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Nt(n.SAMPLE_ALPHA_TO_COVERAGE):Qt(n.SAMPLE_ALPHA_TO_COVERAGE)}function bt(G){E!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),E=G)}function Yt(G){G!==bp?(Nt(n.CULL_FACE),G!==D&&(G===Of?n.cullFace(n.BACK):G===Sp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Qt(n.CULL_FACE),D=G}function Ut(G){G!==Q&&(K&&n.lineWidth(G),Q=G)}function le(G,Pt,at){G?(Nt(n.POLYGON_OFFSET_FILL),($!==Pt||V!==at)&&(n.polygonOffset(Pt,at),$=Pt,V=at)):Qt(n.POLYGON_OFFSET_FILL)}function qt(G){G?Nt(n.SCISSOR_TEST):Qt(n.SCISSOR_TEST)}function P(G){G===void 0&&(G=n.TEXTURE0+X-1),_t!==G&&(n.activeTexture(G),_t=G)}function T(G,Pt,at){at===void 0&&(_t===null?at=n.TEXTURE0+X-1:at=_t);let Mt=Ct[at];Mt===void 0&&(Mt={type:void 0,texture:void 0},Ct[at]=Mt),(Mt.type!==G||Mt.texture!==Pt)&&(_t!==at&&(n.activeTexture(at),_t=at),n.bindTexture(G,Pt||jt[G]),Mt.type=G,Mt.texture=Pt)}function tt(){let G=Ct[_t];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ut(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function vt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function mt(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function J(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function it(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function wt(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ct(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ft(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xt(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ft(G){Rt.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Rt.copy(G))}function dt(G){gt.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),gt.copy(G))}function ie(G,Pt){let at=l.get(Pt);at===void 0&&(at=new WeakMap,l.set(Pt,at));let Mt=at.get(G);Mt===void 0&&(Mt=n.getUniformBlockIndex(Pt,G.name),at.set(G,Mt))}function Ht(G,Pt){let Mt=l.get(Pt).get(G);c.get(Pt)!==Mt&&(n.uniformBlockBinding(Pt,Mt,G.__bindingPointIndex),c.set(Pt,Mt))}function Bt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},_t=null,Ct={},u={},f=new WeakMap,d=[],_=null,M=!1,g=null,m=null,w=null,S=null,v=null,F=null,L=null,U=new he(0,0,0),B=0,R=!1,E=null,D=null,Q=null,$=null,V=null,Rt.set(0,0,n.canvas.width,n.canvas.height),gt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Nt,disable:Qt,bindFramebuffer:ue,drawBuffers:ae,useProgram:ce,setBlending:z,setMaterial:Kt,setFlipSided:bt,setCullFace:Yt,setLineWidth:Ut,setPolygonOffset:le,setScissorTest:qt,activeTexture:P,bindTexture:T,unbindTexture:tt,compressedTexImage2D:ut,compressedTexImage3D:vt,texImage2D:ft,texImage3D:xt,updateUBOMapping:ie,uniformBlockBinding:Ht,texStorage2D:wt,texStorage3D:ct,texSubImage2D:mt,texSubImage3D:J,compressedTexSubImage2D:et,compressedTexSubImage3D:it,scissor:Ft,viewport:dt,reset:Bt}}function Nu(n,t,e,i){let s=d1(i);switch(e){case nd:return n*t;case sd:return n*t;case rd:return n*t*2;case od:return n*t/s.components*s.byteLength;case Hh:return n*t/s.components*s.byteLength;case ad:return n*t*2/s.components*s.byteLength;case kh:return n*t*2/s.components*s.byteLength;case id:return n*t*3/s.components*s.byteLength;case li:return n*t*4/s.components*s.byteLength;case Vh:return n*t*4/s.components*s.byteLength;case Ta:case Aa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ra:case Ca:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case bl:case wl:return Math.max(n,16)*Math.max(t,8)/4;case El:case Sl:return Math.max(n,8)*Math.max(t,8)/2;case Tl:case Al:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Rl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Pl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Il:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case zl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ol:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case kl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Vl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Pa:case Gl:case Wl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case cd:case Xl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Yl:case ql:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function d1(n){switch(n){case Hi:case Qu:return{byteLength:1,components:1};case mo:case td:case Oo:return{byteLength:2,components:1};case Fh:case Bh:return{byteLength:2,components:4};case Us:case Oh:case Oi:return{byteLength:4,components:1};case ed:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function p1(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Tt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,T){return d?new OffscreenCanvas(P,T):xo("canvas")}function M(P,T,tt){let ut=1,vt=qt(P);if((vt.width>tt||vt.height>tt)&&(ut=tt/Math.max(vt.width,vt.height)),ut<1)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap||typeof VideoFrame!="undefined"&&P instanceof VideoFrame){let mt=Math.floor(ut*vt.width),J=Math.floor(ut*vt.height);u===void 0&&(u=_(mt,J));let et=T?_(mt,J):u;return et.width=mt,et.height=J,et.getContext("2d").drawImage(P,0,0,mt,J),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+mt+"x"+J+")."),et}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),P;return P}function g(P){return P.generateMipmaps}function m(P){n.generateMipmap(P)}function w(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(P,T,tt,ut,vt=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let mt=T;if(T===n.RED&&(tt===n.FLOAT&&(mt=n.R32F),tt===n.HALF_FLOAT&&(mt=n.R16F),tt===n.UNSIGNED_BYTE&&(mt=n.R8)),T===n.RED_INTEGER&&(tt===n.UNSIGNED_BYTE&&(mt=n.R8UI),tt===n.UNSIGNED_SHORT&&(mt=n.R16UI),tt===n.UNSIGNED_INT&&(mt=n.R32UI),tt===n.BYTE&&(mt=n.R8I),tt===n.SHORT&&(mt=n.R16I),tt===n.INT&&(mt=n.R32I)),T===n.RG&&(tt===n.FLOAT&&(mt=n.RG32F),tt===n.HALF_FLOAT&&(mt=n.RG16F),tt===n.UNSIGNED_BYTE&&(mt=n.RG8)),T===n.RG_INTEGER&&(tt===n.UNSIGNED_BYTE&&(mt=n.RG8UI),tt===n.UNSIGNED_SHORT&&(mt=n.RG16UI),tt===n.UNSIGNED_INT&&(mt=n.RG32UI),tt===n.BYTE&&(mt=n.RG8I),tt===n.SHORT&&(mt=n.RG16I),tt===n.INT&&(mt=n.RG32I)),T===n.RGB_INTEGER&&(tt===n.UNSIGNED_BYTE&&(mt=n.RGB8UI),tt===n.UNSIGNED_SHORT&&(mt=n.RGB16UI),tt===n.UNSIGNED_INT&&(mt=n.RGB32UI),tt===n.BYTE&&(mt=n.RGB8I),tt===n.SHORT&&(mt=n.RGB16I),tt===n.INT&&(mt=n.RGB32I)),T===n.RGBA_INTEGER&&(tt===n.UNSIGNED_BYTE&&(mt=n.RGBA8UI),tt===n.UNSIGNED_SHORT&&(mt=n.RGBA16UI),tt===n.UNSIGNED_INT&&(mt=n.RGBA32UI),tt===n.BYTE&&(mt=n.RGBA8I),tt===n.SHORT&&(mt=n.RGBA16I),tt===n.INT&&(mt=n.RGBA32I)),T===n.RGB&&tt===n.UNSIGNED_INT_5_9_9_9_REV&&(mt=n.RGB9_E5),T===n.RGBA){let J=vt?ic:Te.getTransfer(ut);tt===n.FLOAT&&(mt=n.RGBA32F),tt===n.HALF_FLOAT&&(mt=n.RGBA16F),tt===n.UNSIGNED_BYTE&&(mt=J===Oe?n.SRGB8_ALPHA8:n.RGBA8),tt===n.UNSIGNED_SHORT_4_4_4_4&&(mt=n.RGBA4),tt===n.UNSIGNED_SHORT_5_5_5_1&&(mt=n.RGB5_A1)}return(mt===n.R16F||mt===n.R32F||mt===n.RG16F||mt===n.RG32F||mt===n.RGBA16F||mt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function v(P,T){let tt;return P?T===null||T===Us||T===Rr?tt=n.DEPTH24_STENCIL8:T===Oi?tt=n.DEPTH32F_STENCIL8:T===mo&&(tt=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Us||T===Rr?tt=n.DEPTH_COMPONENT24:T===Oi?tt=n.DEPTH_COMPONENT32F:T===mo&&(tt=n.DEPTH_COMPONENT16),tt}function F(P,T){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==nn&&P.minFilter!==yi?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function L(P){let T=P.target;T.removeEventListener("dispose",L),B(T),T.isVideoTexture&&h.delete(T)}function U(P){let T=P.target;T.removeEventListener("dispose",U),E(T)}function B(P){let T=i.get(P);if(T.__webglInit===void 0)return;let tt=P.source,ut=f.get(tt);if(ut){let vt=ut[T.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&R(P),Object.keys(ut).length===0&&f.delete(tt)}i.remove(P)}function R(P){let T=i.get(P);n.deleteTexture(T.__webglTexture);let tt=P.source,ut=f.get(tt);delete ut[T.__cacheKey],o.memory.textures--}function E(P){let T=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(T.__webglFramebuffer[ut]))for(let vt=0;vt<T.__webglFramebuffer[ut].length;vt++)n.deleteFramebuffer(T.__webglFramebuffer[ut][vt]);else n.deleteFramebuffer(T.__webglFramebuffer[ut]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[ut])}else{if(Array.isArray(T.__webglFramebuffer))for(let ut=0;ut<T.__webglFramebuffer.length;ut++)n.deleteFramebuffer(T.__webglFramebuffer[ut]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ut=0;ut<T.__webglColorRenderbuffer.length;ut++)T.__webglColorRenderbuffer[ut]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[ut]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let tt=P.textures;for(let ut=0,vt=tt.length;ut<vt;ut++){let mt=i.get(tt[ut]);mt.__webglTexture&&(n.deleteTexture(mt.__webglTexture),o.memory.textures--),i.remove(tt[ut])}i.remove(P)}let D=0;function Q(){D=0}function $(){let P=D;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),D+=1,P}function V(P){let T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function X(P,T){let tt=i.get(P);if(P.isVideoTexture&&Ut(P),P.isRenderTargetTexture===!1&&P.version>0&&tt.__version!==P.version){let ut=P.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{gt(tt,P,T);return}}e.bindTexture(n.TEXTURE_2D,tt.__webglTexture,n.TEXTURE0+T)}function K(P,T){let tt=i.get(P);if(P.version>0&&tt.__version!==P.version){gt(tt,P,T);return}e.bindTexture(n.TEXTURE_2D_ARRAY,tt.__webglTexture,n.TEXTURE0+T)}function q(P,T){let tt=i.get(P);if(P.version>0&&tt.__version!==P.version){gt(tt,P,T);return}e.bindTexture(n.TEXTURE_3D,tt.__webglTexture,n.TEXTURE0+T)}function W(P,T){let tt=i.get(P);if(P.version>0&&tt.__version!==P.version){Dt(tt,P,T);return}e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture,n.TEXTURE0+T)}let _t={[po]:n.REPEAT,[Ls]:n.CLAMP_TO_EDGE,[vl]:n.MIRRORED_REPEAT},Ct={[nn]:n.NEAREST,[jp]:n.NEAREST_MIPMAP_NEAREST,[Jo]:n.NEAREST_MIPMAP_LINEAR,[yi]:n.LINEAR,[Pc]:n.LINEAR_MIPMAP_NEAREST,[Ds]:n.LINEAR_MIPMAP_LINEAR},Ot={[n0]:n.NEVER,[c0]:n.ALWAYS,[i0]:n.LESS,[hd]:n.LEQUAL,[s0]:n.EQUAL,[a0]:n.GEQUAL,[r0]:n.GREATER,[o0]:n.NOTEQUAL};function fe(P,T){if(T.type===Oi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===yi||T.magFilter===Pc||T.magFilter===Jo||T.magFilter===Ds||T.minFilter===yi||T.minFilter===Pc||T.minFilter===Jo||T.minFilter===Ds)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,_t[T.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,_t[T.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,_t[T.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Ct[T.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Ct[T.minFilter]),T.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Ot[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===nn||T.minFilter!==Jo&&T.minFilter!==Ds||T.type===Oi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let tt=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Rt(P,T){let tt=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",L));let ut=T.source,vt=f.get(ut);vt===void 0&&(vt={},f.set(ut,vt));let mt=V(T);if(mt!==P.__cacheKey){vt[mt]===void 0&&(vt[mt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,tt=!0),vt[mt].usedTimes++;let J=vt[P.__cacheKey];J!==void 0&&(vt[P.__cacheKey].usedTimes--,J.usedTimes===0&&R(T)),P.__cacheKey=mt,P.__webglTexture=vt[mt].texture}return tt}function gt(P,T,tt){let ut=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ut=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ut=n.TEXTURE_3D);let vt=Rt(P,T),mt=T.source;e.bindTexture(ut,P.__webglTexture,n.TEXTURE0+tt);let J=i.get(mt);if(mt.version!==J.__version||vt===!0){e.activeTexture(n.TEXTURE0+tt);let et=Te.getPrimaries(Te.workingColorSpace),it=T.colorSpace===ss?null:Te.getPrimaries(T.colorSpace),wt=T.colorSpace===ss||et===it?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let ct=M(T.image,!1,s.maxTextureSize);ct=le(T,ct);let ft=r.convert(T.format,T.colorSpace),xt=r.convert(T.type),Ft=S(T.internalFormat,ft,xt,T.colorSpace,T.isVideoTexture);fe(ut,T);let dt,ie=T.mipmaps,Ht=T.isVideoTexture!==!0,Bt=J.__version===void 0||vt===!0,G=mt.dataReady,Pt=F(T,ct);if(T.isDepthTexture)Ft=v(T.format===Cr,T.type),Bt&&(Ht?e.texStorage2D(n.TEXTURE_2D,1,Ft,ct.width,ct.height):e.texImage2D(n.TEXTURE_2D,0,Ft,ct.width,ct.height,0,ft,xt,null));else if(T.isDataTexture)if(ie.length>0){Ht&&Bt&&e.texStorage2D(n.TEXTURE_2D,Pt,Ft,ie[0].width,ie[0].height);for(let at=0,Mt=ie.length;at<Mt;at++)dt=ie[at],Ht?G&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,dt.width,dt.height,ft,xt,dt.data):e.texImage2D(n.TEXTURE_2D,at,Ft,dt.width,dt.height,0,ft,xt,dt.data);T.generateMipmaps=!1}else Ht?(Bt&&e.texStorage2D(n.TEXTURE_2D,Pt,Ft,ct.width,ct.height),G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ct.width,ct.height,ft,xt,ct.data)):e.texImage2D(n.TEXTURE_2D,0,Ft,ct.width,ct.height,0,ft,xt,ct.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ht&&Bt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Pt,Ft,ie[0].width,ie[0].height,ct.depth);for(let at=0,Mt=ie.length;at<Mt;at++)if(dt=ie[at],T.format!==li)if(ft!==null)if(Ht){if(G)if(T.layerUpdates.size>0){let kt=Nu(dt.width,dt.height,T.format,T.type);for(let Vt of T.layerUpdates){let _e=dt.data.subarray(Vt*kt/dt.data.BYTES_PER_ELEMENT,(Vt+1)*kt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,Vt,dt.width,dt.height,1,ft,_e)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,dt.width,dt.height,ct.depth,ft,dt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,at,Ft,dt.width,dt.height,ct.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?G&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,dt.width,dt.height,ct.depth,ft,xt,dt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,at,Ft,dt.width,dt.height,ct.depth,0,ft,xt,dt.data)}else{Ht&&Bt&&e.texStorage2D(n.TEXTURE_2D,Pt,Ft,ie[0].width,ie[0].height);for(let at=0,Mt=ie.length;at<Mt;at++)dt=ie[at],T.format!==li?ft!==null?Ht?G&&e.compressedTexSubImage2D(n.TEXTURE_2D,at,0,0,dt.width,dt.height,ft,dt.data):e.compressedTexImage2D(n.TEXTURE_2D,at,Ft,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?G&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,dt.width,dt.height,ft,xt,dt.data):e.texImage2D(n.TEXTURE_2D,at,Ft,dt.width,dt.height,0,ft,xt,dt.data)}else if(T.isDataArrayTexture)if(Ht){if(Bt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Pt,Ft,ct.width,ct.height,ct.depth),G)if(T.layerUpdates.size>0){let at=Nu(ct.width,ct.height,T.format,T.type);for(let Mt of T.layerUpdates){let kt=ct.data.subarray(Mt*at/ct.data.BYTES_PER_ELEMENT,(Mt+1)*at/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Mt,ct.width,ct.height,1,ft,xt,kt)}T.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,ft,xt,ct.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ft,ct.width,ct.height,ct.depth,0,ft,xt,ct.data);else if(T.isData3DTexture)Ht?(Bt&&e.texStorage3D(n.TEXTURE_3D,Pt,Ft,ct.width,ct.height,ct.depth),G&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,ft,xt,ct.data)):e.texImage3D(n.TEXTURE_3D,0,Ft,ct.width,ct.height,ct.depth,0,ft,xt,ct.data);else if(T.isFramebufferTexture){if(Bt)if(Ht)e.texStorage2D(n.TEXTURE_2D,Pt,Ft,ct.width,ct.height);else{let at=ct.width,Mt=ct.height;for(let kt=0;kt<Pt;kt++)e.texImage2D(n.TEXTURE_2D,kt,Ft,at,Mt,0,ft,xt,null),at>>=1,Mt>>=1}}else if(ie.length>0){if(Ht&&Bt){let at=qt(ie[0]);e.texStorage2D(n.TEXTURE_2D,Pt,Ft,at.width,at.height)}for(let at=0,Mt=ie.length;at<Mt;at++)dt=ie[at],Ht?G&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,ft,xt,dt):e.texImage2D(n.TEXTURE_2D,at,Ft,ft,xt,dt);T.generateMipmaps=!1}else if(Ht){if(Bt){let at=qt(ct);e.texStorage2D(n.TEXTURE_2D,Pt,Ft,at.width,at.height)}G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,xt,ct)}else e.texImage2D(n.TEXTURE_2D,0,Ft,ft,xt,ct);g(T)&&m(ut),J.__version=mt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Dt(P,T,tt){if(T.image.length!==6)return;let ut=Rt(P,T),vt=T.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+tt);let mt=i.get(vt);if(vt.version!==mt.__version||ut===!0){e.activeTexture(n.TEXTURE0+tt);let J=Te.getPrimaries(Te.workingColorSpace),et=T.colorSpace===ss?null:Te.getPrimaries(T.colorSpace),it=T.colorSpace===ss||J===et?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let wt=T.isCompressedTexture||T.image[0].isCompressedTexture,ct=T.image[0]&&T.image[0].isDataTexture,ft=[];for(let Mt=0;Mt<6;Mt++)!wt&&!ct?ft[Mt]=M(T.image[Mt],!0,s.maxCubemapSize):ft[Mt]=ct?T.image[Mt].image:T.image[Mt],ft[Mt]=le(T,ft[Mt]);let xt=ft[0],Ft=r.convert(T.format,T.colorSpace),dt=r.convert(T.type),ie=S(T.internalFormat,Ft,dt,T.colorSpace),Ht=T.isVideoTexture!==!0,Bt=mt.__version===void 0||ut===!0,G=vt.dataReady,Pt=F(T,xt);fe(n.TEXTURE_CUBE_MAP,T);let at;if(wt){Ht&&Bt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,ie,xt.width,xt.height);for(let Mt=0;Mt<6;Mt++){at=ft[Mt].mipmaps;for(let kt=0;kt<at.length;kt++){let Vt=at[kt];T.format!==li?Ft!==null?Ht?G&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,kt,0,0,Vt.width,Vt.height,Ft,Vt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,kt,ie,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,kt,0,0,Vt.width,Vt.height,Ft,dt,Vt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,kt,ie,Vt.width,Vt.height,0,Ft,dt,Vt.data)}}}else{if(at=T.mipmaps,Ht&&Bt){at.length>0&&Pt++;let Mt=qt(ft[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,ie,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(ct){Ht?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,ft[Mt].width,ft[Mt].height,Ft,dt,ft[Mt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ie,ft[Mt].width,ft[Mt].height,0,Ft,dt,ft[Mt].data);for(let kt=0;kt<at.length;kt++){let _e=at[kt].image[Mt].image;Ht?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,kt+1,0,0,_e.width,_e.height,Ft,dt,_e.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,kt+1,ie,_e.width,_e.height,0,Ft,dt,_e.data)}}else{Ht?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Ft,dt,ft[Mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ie,Ft,dt,ft[Mt]);for(let kt=0;kt<at.length;kt++){let Vt=at[kt];Ht?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,kt+1,0,0,Ft,dt,Vt.image[Mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,kt+1,ie,Ft,dt,Vt.image[Mt])}}}g(T)&&m(n.TEXTURE_CUBE_MAP),mt.__version=vt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function jt(P,T,tt,ut,vt,mt){let J=r.convert(tt.format,tt.colorSpace),et=r.convert(tt.type),it=S(tt.internalFormat,J,et,tt.colorSpace),wt=i.get(T),ct=i.get(tt);if(ct.__renderTarget=T,!wt.__hasExternalTextures){let ft=Math.max(1,T.width>>mt),xt=Math.max(1,T.height>>mt);vt===n.TEXTURE_3D||vt===n.TEXTURE_2D_ARRAY?e.texImage3D(vt,mt,it,ft,xt,T.depth,0,J,et,null):e.texImage2D(vt,mt,it,ft,xt,0,J,et,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),Yt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ut,vt,ct.__webglTexture,0,bt(T)):(vt===n.TEXTURE_2D||vt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ut,vt,ct.__webglTexture,mt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(P,T,tt){if(n.bindRenderbuffer(n.RENDERBUFFER,P),T.depthBuffer){let ut=T.depthTexture,vt=ut&&ut.isDepthTexture?ut.type:null,mt=v(T.stencilBuffer,vt),J=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=bt(T);Yt(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,et,mt,T.width,T.height):tt?n.renderbufferStorageMultisample(n.RENDERBUFFER,et,mt,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,mt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,P)}else{let ut=T.textures;for(let vt=0;vt<ut.length;vt++){let mt=ut[vt],J=r.convert(mt.format,mt.colorSpace),et=r.convert(mt.type),it=S(mt.internalFormat,J,et,mt.colorSpace),wt=bt(T);tt&&Yt(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,wt,it,T.width,T.height):Yt(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,wt,it,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,it,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Qt(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ut=i.get(T.depthTexture);ut.__renderTarget=T,(!ut.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),X(T.depthTexture,0);let vt=ut.__webglTexture,mt=bt(T);if(T.depthTexture.format===Er)Yt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,vt,0,mt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,vt,0);else if(T.depthTexture.format===Cr)Yt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,vt,0,mt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function ue(P){let T=i.get(P),tt=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){let ut=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ut){let vt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ut.removeEventListener("dispose",vt)};ut.addEventListener("dispose",vt),T.__depthDisposeCallback=vt}T.__boundDepthTexture=ut}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");Qt(T.__webglFramebuffer,P)}else if(tt){T.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[ut]),T.__webglDepthbuffer[ut]===void 0)T.__webglDepthbuffer[ut]=n.createRenderbuffer(),Nt(T.__webglDepthbuffer[ut],P,!1);else{let vt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=T.__webglDepthbuffer[ut];n.bindRenderbuffer(n.RENDERBUFFER,mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,vt,n.RENDERBUFFER,mt)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),Nt(T.__webglDepthbuffer,P,!1);else{let ut=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,vt=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,vt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ut,n.RENDERBUFFER,vt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(P,T,tt){let ut=i.get(P);T!==void 0&&jt(ut.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),tt!==void 0&&ue(P)}function ce(P){let T=P.texture,tt=i.get(P),ut=i.get(T);P.addEventListener("dispose",U);let vt=P.textures,mt=P.isWebGLCubeRenderTarget===!0,J=vt.length>1;if(J||(ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture()),ut.__version=T.version,o.memory.textures++),mt){tt.__webglFramebuffer=[];for(let et=0;et<6;et++)if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer[et]=[];for(let it=0;it<T.mipmaps.length;it++)tt.__webglFramebuffer[et][it]=n.createFramebuffer()}else tt.__webglFramebuffer[et]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer=[];for(let et=0;et<T.mipmaps.length;et++)tt.__webglFramebuffer[et]=n.createFramebuffer()}else tt.__webglFramebuffer=n.createFramebuffer();if(J)for(let et=0,it=vt.length;et<it;et++){let wt=i.get(vt[et]);wt.__webglTexture===void 0&&(wt.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&Yt(P)===!1){tt.__webglMultisampledFramebuffer=n.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let et=0;et<vt.length;et++){let it=vt[et];tt.__webglColorRenderbuffer[et]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,tt.__webglColorRenderbuffer[et]);let wt=r.convert(it.format,it.colorSpace),ct=r.convert(it.type),ft=S(it.internalFormat,wt,ct,it.colorSpace,P.isXRRenderTarget===!0),xt=bt(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,xt,ft,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+et,n.RENDERBUFFER,tt.__webglColorRenderbuffer[et])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(tt.__webglDepthRenderbuffer=n.createRenderbuffer(),Nt(tt.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(mt){e.bindTexture(n.TEXTURE_CUBE_MAP,ut.__webglTexture),fe(n.TEXTURE_CUBE_MAP,T);for(let et=0;et<6;et++)if(T.mipmaps&&T.mipmaps.length>0)for(let it=0;it<T.mipmaps.length;it++)jt(tt.__webglFramebuffer[et][it],P,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+et,it);else jt(tt.__webglFramebuffer[et],P,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);g(T)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(J){for(let et=0,it=vt.length;et<it;et++){let wt=vt[et],ct=i.get(wt);e.bindTexture(n.TEXTURE_2D,ct.__webglTexture),fe(n.TEXTURE_2D,wt),jt(tt.__webglFramebuffer,P,wt,n.COLOR_ATTACHMENT0+et,n.TEXTURE_2D,0),g(wt)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let et=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(et=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(et,ut.__webglTexture),fe(et,T),T.mipmaps&&T.mipmaps.length>0)for(let it=0;it<T.mipmaps.length;it++)jt(tt.__webglFramebuffer[it],P,T,n.COLOR_ATTACHMENT0,et,it);else jt(tt.__webglFramebuffer,P,T,n.COLOR_ATTACHMENT0,et,0);g(T)&&m(et),e.unbindTexture()}P.depthBuffer&&ue(P)}function yt(P){let T=P.textures;for(let tt=0,ut=T.length;tt<ut;tt++){let vt=T[tt];if(g(vt)){let mt=w(P),J=i.get(vt).__webglTexture;e.bindTexture(mt,J),m(mt),e.unbindTexture()}}}let St=[],z=[];function Kt(P){if(P.samples>0){if(Yt(P)===!1){let T=P.textures,tt=P.width,ut=P.height,vt=n.COLOR_BUFFER_BIT,mt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=i.get(P),et=T.length>1;if(et)for(let it=0;it<T.length;it++)e.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+it,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,J.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+it,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,J.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,J.__webglFramebuffer);for(let it=0;it<T.length;it++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(vt|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(vt|=n.STENCIL_BUFFER_BIT)),et){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,J.__webglColorRenderbuffer[it]);let wt=i.get(T[it]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,wt,0)}n.blitFramebuffer(0,0,tt,ut,0,0,tt,ut,vt,n.NEAREST),c===!0&&(St.length=0,z.length=0,St.push(n.COLOR_ATTACHMENT0+it),P.depthBuffer&&P.resolveDepthBuffer===!1&&(St.push(mt),z.push(mt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,St))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),et)for(let it=0;it<T.length;it++){e.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+it,n.RENDERBUFFER,J.__webglColorRenderbuffer[it]);let wt=i.get(T[it]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,J.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+it,n.TEXTURE_2D,wt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,J.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let T=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function bt(P){return Math.min(s.maxSamples,P.samples)}function Yt(P){let T=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ut(P){let T=o.render.frame;h.get(P)!==T&&(h.set(P,T),P.update())}function le(P,T){let tt=P.colorSpace,ut=P.format,vt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||tt!==Ur&&tt!==ss&&(Te.getTransfer(tt)===Oe?(ut!==li||vt!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),T}function qt(P){return typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame!="undefined"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=$,this.resetTextureUnits=Q,this.setTexture2D=X,this.setTexture2DArray=K,this.setTexture3D=q,this.setTextureCube=W,this.rebindTextures=ae,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=jt,this.useMultisampledRTT=Yt}function m1(n,t){function e(i,s=ss){let r,o=Te.getTransfer(s);if(i===Hi)return n.UNSIGNED_BYTE;if(i===Fh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Bh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ed)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Qu)return n.BYTE;if(i===td)return n.SHORT;if(i===mo)return n.UNSIGNED_SHORT;if(i===Oh)return n.INT;if(i===Us)return n.UNSIGNED_INT;if(i===Oi)return n.FLOAT;if(i===Oo)return n.HALF_FLOAT;if(i===nd)return n.ALPHA;if(i===id)return n.RGB;if(i===li)return n.RGBA;if(i===sd)return n.LUMINANCE;if(i===rd)return n.LUMINANCE_ALPHA;if(i===Er)return n.DEPTH_COMPONENT;if(i===Cr)return n.DEPTH_STENCIL;if(i===od)return n.RED;if(i===Hh)return n.RED_INTEGER;if(i===ad)return n.RG;if(i===kh)return n.RG_INTEGER;if(i===Vh)return n.RGBA_INTEGER;if(i===Ta||i===Aa||i===Ra||i===Ca)if(o===Oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===El||i===bl||i===Sl||i===wl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===El)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tl||i===Al||i===Rl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Tl||i===Al)return o===Oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Rl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Cl||i===Pl||i===Il||i===Ll||i===Dl||i===Ul||i===Nl||i===zl||i===Ol||i===Fl||i===Bl||i===Hl||i===kl||i===Vl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Cl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Il)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ll)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ul)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ol)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pa||i===Gl||i===Wl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Pa)return o===Oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cd||i===Xl||i===Yl||i===ql)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Pa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Xl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Rr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var lh=class extends xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},$t=class extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}},g1={type:"move"},co=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let M of t.hand.values()){let g=e.getJointPose(M,i),m=this._getHandJoint(l,M);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,_=.005;l.inputState.pinching&&f>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(g1)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new $t;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},x1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_1=`
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

}`,hh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new In,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new jn({vertexShader:x1,fragmentShader:_1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Lt(new ls(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fh=class extends ki{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,_=null,M=new hh,g=e.getContextAttributes(),m=null,w=null,S=[],v=[],F=new Tt,L=null,U=new xn;U.viewport=new Fe;let B=new xn;B.viewport=new Fe;let R=[U,B],E=new lh,D=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(gt){let Dt=S[gt];return Dt===void 0&&(Dt=new co,S[gt]=Dt),Dt.getTargetRaySpace()},this.getControllerGrip=function(gt){let Dt=S[gt];return Dt===void 0&&(Dt=new co,S[gt]=Dt),Dt.getGripSpace()},this.getHand=function(gt){let Dt=S[gt];return Dt===void 0&&(Dt=new co,S[gt]=Dt),Dt.getHandSpace()};function $(gt){let Dt=v.indexOf(gt.inputSource);if(Dt===-1)return;let jt=S[Dt];jt!==void 0&&(jt.update(gt.inputSource,gt.frame,l||o),jt.dispatchEvent({type:gt.type,data:gt.inputSource}))}function V(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",X);for(let gt=0;gt<S.length;gt++){let Dt=v[gt];Dt!==null&&(v[gt]=null,S[gt].disconnect(Dt))}D=null,Q=null,M.reset(),t.setRenderTarget(m),d=null,f=null,u=null,s=null,w=null,Rt.stop(),i.isPresenting=!1,t.setPixelRatio(L),t.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(gt){r=gt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(gt){a=gt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(gt){l=gt},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(gt){if(s=gt,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",V),s.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(F),s.renderState.layers===void 0){let Dt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Dt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new Vi(d.framebufferWidth,d.framebufferHeight,{format:li,type:Hi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let Dt=null,jt=null,Nt=null;g.depth&&(Nt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Dt=g.stencil?Cr:Er,jt=g.stencil?Rr:Us);let Qt={colorFormat:e.RGBA8,depthFormat:Nt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Qt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new Vi(f.textureWidth,f.textureHeight,{format:li,type:Hi,depthTexture:new ka(f.textureWidth,f.textureHeight,jt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Rt.setContext(s),Rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function X(gt){for(let Dt=0;Dt<gt.removed.length;Dt++){let jt=gt.removed[Dt],Nt=v.indexOf(jt);Nt>=0&&(v[Nt]=null,S[Nt].disconnect(jt))}for(let Dt=0;Dt<gt.added.length;Dt++){let jt=gt.added[Dt],Nt=v.indexOf(jt);if(Nt===-1){for(let ue=0;ue<S.length;ue++)if(ue>=v.length){v.push(jt),Nt=ue;break}else if(v[ue]===null){v[ue]=jt,Nt=ue;break}if(Nt===-1)break}let Qt=S[Nt];Qt&&Qt.connect(jt)}}let K=new O,q=new O;function W(gt,Dt,jt){K.setFromMatrixPosition(Dt.matrixWorld),q.setFromMatrixPosition(jt.matrixWorld);let Nt=K.distanceTo(q),Qt=Dt.projectionMatrix.elements,ue=jt.projectionMatrix.elements,ae=Qt[14]/(Qt[10]-1),ce=Qt[14]/(Qt[10]+1),yt=(Qt[9]+1)/Qt[5],St=(Qt[9]-1)/Qt[5],z=(Qt[8]-1)/Qt[0],Kt=(ue[8]+1)/ue[0],bt=ae*z,Yt=ae*Kt,Ut=Nt/(-z+Kt),le=Ut*-z;if(Dt.matrixWorld.decompose(gt.position,gt.quaternion,gt.scale),gt.translateX(le),gt.translateZ(Ut),gt.matrixWorld.compose(gt.position,gt.quaternion,gt.scale),gt.matrixWorldInverse.copy(gt.matrixWorld).invert(),Qt[10]===-1)gt.projectionMatrix.copy(Dt.projectionMatrix),gt.projectionMatrixInverse.copy(Dt.projectionMatrixInverse);else{let qt=ae+Ut,P=ce+Ut,T=bt-le,tt=Yt+(Nt-le),ut=yt*ce/P*qt,vt=St*ce/P*qt;gt.projectionMatrix.makePerspective(T,tt,ut,vt,qt,P),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert()}}function _t(gt,Dt){Dt===null?gt.matrixWorld.copy(gt.matrix):gt.matrixWorld.multiplyMatrices(Dt.matrixWorld,gt.matrix),gt.matrixWorldInverse.copy(gt.matrixWorld).invert()}this.updateCamera=function(gt){if(s===null)return;let Dt=gt.near,jt=gt.far;M.texture!==null&&(M.depthNear>0&&(Dt=M.depthNear),M.depthFar>0&&(jt=M.depthFar)),E.near=B.near=U.near=Dt,E.far=B.far=U.far=jt,(D!==E.near||Q!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),D=E.near,Q=E.far),U.layers.mask=gt.layers.mask|2,B.layers.mask=gt.layers.mask|4,E.layers.mask=U.layers.mask|B.layers.mask;let Nt=gt.parent,Qt=E.cameras;_t(E,Nt);for(let ue=0;ue<Qt.length;ue++)_t(Qt[ue],Nt);Qt.length===2?W(E,U,B):E.projectionMatrix.copy(U.projectionMatrix),Ct(gt,E,Nt)};function Ct(gt,Dt,jt){jt===null?gt.matrix.copy(Dt.matrixWorld):(gt.matrix.copy(jt.matrixWorld),gt.matrix.invert(),gt.matrix.multiply(Dt.matrixWorld)),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.updateMatrixWorld(!0),gt.projectionMatrix.copy(Dt.projectionMatrix),gt.projectionMatrixInverse.copy(Dt.projectionMatrixInverse),gt.isPerspectiveCamera&&(gt.fov=go*2*Math.atan(1/gt.projectionMatrix.elements[5]),gt.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(gt){c=gt,f!==null&&(f.fixedFoveation=gt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=gt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(E)};let Ot=null;function fe(gt,Dt){if(h=Dt.getViewerPose(l||o),_=Dt,h!==null){let jt=h.views;d!==null&&(t.setRenderTargetFramebuffer(w,d.framebuffer),t.setRenderTarget(w));let Nt=!1;jt.length!==E.cameras.length&&(E.cameras.length=0,Nt=!0);for(let ue=0;ue<jt.length;ue++){let ae=jt[ue],ce=null;if(d!==null)ce=d.getViewport(ae);else{let St=u.getViewSubImage(f,ae);ce=St.viewport,ue===0&&(t.setRenderTargetTextures(w,St.colorTexture,f.ignoreDepthValues?void 0:St.depthStencilTexture),t.setRenderTarget(w))}let yt=R[ue];yt===void 0&&(yt=new xn,yt.layers.enable(ue),yt.viewport=new Fe,R[ue]=yt),yt.matrix.fromArray(ae.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(ae.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(ce.x,ce.y,ce.width,ce.height),ue===0&&(E.matrix.copy(yt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Nt===!0&&E.cameras.push(yt)}let Qt=s.enabledFeatures;if(Qt&&Qt.includes("depth-sensing")){let ue=u.getDepthInformation(jt[0]);ue&&ue.isValid&&ue.texture&&M.init(t,ue,s.renderState)}}for(let jt=0;jt<S.length;jt++){let Nt=v[jt],Qt=S[jt];Nt!==null&&Qt!==void 0&&Qt.update(Nt,Dt,l||o)}Ot&&Ot(gt,Dt),Dt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Dt}),_=null}let Rt=new md;Rt.setAnimationLoop(fe),this.setAnimationLoop=function(gt){Ot=gt},this.dispose=function(){}}},Rs=new vi,y1=new Ge;function M1(n,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,pd(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,w,S,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),_(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),M(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,w,S):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Pn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Pn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let w=t.get(m),S=w.envMap,v=w.envMapRotation;S&&(g.envMap.value=S,Rs.copy(v),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),g.envMapRotation.value.setFromMatrix4(y1.makeRotationFromEuler(Rs)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,w,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*w,g.scale.value=S*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,w){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Pn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}function M(g,m){let w=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function v1(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,S){let v=S.program;i.uniformBlockBinding(w,v)}function l(w,S){let v=s[w.id];v===void 0&&(_(w),v=h(w),s[w.id]=v,w.addEventListener("dispose",g));let F=S.program;i.updateUBOMapping(w,F);let L=t.render.frame;r[w.id]!==L&&(f(w),r[w.id]=L)}function h(w){let S=u();w.__bindingPointIndex=S;let v=n.createBuffer(),F=w.__size,L=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,F,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,v),v}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let S=s[w.id],v=w.uniforms,F=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let L=0,U=v.length;L<U;L++){let B=Array.isArray(v[L])?v[L]:[v[L]];for(let R=0,E=B.length;R<E;R++){let D=B[R];if(d(D,L,R,F)===!0){let Q=D.__offset,$=Array.isArray(D.value)?D.value:[D.value],V=0;for(let X=0;X<$.length;X++){let K=$[X],q=M(K);typeof K=="number"||typeof K=="boolean"?(D.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,Q+V,D.__data)):K.isMatrix3?(D.__data[0]=K.elements[0],D.__data[1]=K.elements[1],D.__data[2]=K.elements[2],D.__data[3]=0,D.__data[4]=K.elements[3],D.__data[5]=K.elements[4],D.__data[6]=K.elements[5],D.__data[7]=0,D.__data[8]=K.elements[6],D.__data[9]=K.elements[7],D.__data[10]=K.elements[8],D.__data[11]=0):(K.toArray(D.__data,V),V+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Q,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(w,S,v,F){let L=w.value,U=S+"_"+v;if(F[U]===void 0)return typeof L=="number"||typeof L=="boolean"?F[U]=L:F[U]=L.clone(),!0;{let B=F[U];if(typeof L=="number"||typeof L=="boolean"){if(B!==L)return F[U]=L,!0}else if(B.equals(L)===!1)return B.copy(L),!0}return!1}function _(w){let S=w.uniforms,v=0,F=16;for(let U=0,B=S.length;U<B;U++){let R=Array.isArray(S[U])?S[U]:[S[U]];for(let E=0,D=R.length;E<D;E++){let Q=R[E],$=Array.isArray(Q.value)?Q.value:[Q.value];for(let V=0,X=$.length;V<X;V++){let K=$[V],q=M(K),W=v%F,_t=W%q.boundary,Ct=W+_t;v+=_t,Ct!==0&&F-Ct<q.storage&&(v+=F-Ct),Q.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=v,v+=q.storage}}}let L=v%F;return L>0&&(v+=F-L),w.__size=v,w.__cache={},this}function M(w){let S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function g(w){let S=w.target;S.removeEventListener("dispose",g);let v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function m(){for(let w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}var Mo=class{constructor(t={}){let{canvas:e=w0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let _=new Uint32Array(4),M=new Int32Array(4),g=null,m=null,w=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=De,this.toneMapping=as,this.toneMappingExposure=1;let v=this,F=!1,L=0,U=0,B=null,R=-1,E=null,D=new Fe,Q=new Fe,$=null,V=new he(0),X=0,K=e.width,q=e.height,W=1,_t=null,Ct=null,Ot=new Fe(0,0,K,q),fe=new Fe(0,0,K,q),Rt=!1,gt=new yo,Dt=!1,jt=!1,Nt=new Ge,Qt=new Ge,ue=new O,ae=new Fe,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},yt=!1;function St(){return B===null?W:1}let z=i;function Kt(A,Y){return e.getContext(A,Y)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Nh}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",kt,!1),e.addEventListener("webglcontextcreationerror",Vt,!1),z===null){let Y="webgl2";if(z=Kt(Y,A),z===null)throw Kt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let bt,Yt,Ut,le,qt,P,T,tt,ut,vt,mt,J,et,it,wt,ct,ft,xt,Ft,dt,ie,Ht,Bt,G;function Pt(){bt=new Ox(z),bt.init(),Ht=new m1(z,bt),Yt=new Ix(z,bt,t,Ht),Ut=new u1(z,bt),Yt.reverseDepthBuffer&&f&&Ut.buffers.depth.setReversed(!0),le=new Hx(z),qt=new Q_,P=new p1(z,bt,Ut,qt,Yt,Ht,le),T=new Dx(v),tt=new zx(v),ut=new q0(z),Bt=new Cx(z,ut),vt=new Fx(z,ut,le,Bt),mt=new Vx(z,vt,ut,le),Ft=new kx(z,Yt,P),ct=new Lx(qt),J=new j_(v,T,tt,bt,Yt,Bt,ct),et=new M1(v,qt),it=new e1,wt=new a1(bt),xt=new Rx(v,T,tt,Ut,mt,d,c),ft=new h1(v,mt,Yt),G=new v1(z,le,Yt,Ut),dt=new Px(z,bt,le),ie=new Bx(z,bt,le),le.programs=J.programs,v.capabilities=Yt,v.extensions=bt,v.properties=qt,v.renderLists=it,v.shadowMap=ft,v.state=Ut,v.info=le}Pt();let at=new fh(v,z);this.xr=at,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let A=bt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=bt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(K,q,!1))},this.getSize=function(A){return A.set(K,q)},this.setSize=function(A,Y,st=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=A,q=Y,e.width=Math.floor(A*W),e.height=Math.floor(Y*W),st===!0&&(e.style.width=A+"px",e.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(K*W,q*W).floor()},this.setDrawingBufferSize=function(A,Y,st){K=A,q=Y,W=st,e.width=Math.floor(A*st),e.height=Math.floor(Y*st),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(Ot)},this.setViewport=function(A,Y,st,ot){A.isVector4?Ot.set(A.x,A.y,A.z,A.w):Ot.set(A,Y,st,ot),Ut.viewport(D.copy(Ot).multiplyScalar(W).round())},this.getScissor=function(A){return A.copy(fe)},this.setScissor=function(A,Y,st,ot){A.isVector4?fe.set(A.x,A.y,A.z,A.w):fe.set(A,Y,st,ot),Ut.scissor(Q.copy(fe).multiplyScalar(W).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(A){Ut.setScissorTest(Rt=A)},this.setOpaqueSort=function(A){_t=A},this.setTransparentSort=function(A){Ct=A},this.getClearColor=function(A){return A.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor.apply(xt,arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha.apply(xt,arguments)},this.clear=function(A=!0,Y=!0,st=!0){let ot=0;if(A){let Z=!1;if(B!==null){let zt=B.texture.format;Z=zt===Vh||zt===kh||zt===Hh}if(Z){let zt=B.texture.type,Wt=zt===Hi||zt===Us||zt===mo||zt===Rr||zt===Fh||zt===Bh,ee=xt.getClearColor(),ne=xt.getClearAlpha(),de=ee.r,ge=ee.g,se=ee.b;Wt?(_[0]=de,_[1]=ge,_[2]=se,_[3]=ne,z.clearBufferuiv(z.COLOR,0,_)):(M[0]=de,M[1]=ge,M[2]=se,M[3]=ne,z.clearBufferiv(z.COLOR,0,M))}else ot|=z.COLOR_BUFFER_BIT}Y&&(ot|=z.DEPTH_BUFFER_BIT),st&&(ot|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",Vt,!1),it.dispose(),wt.dispose(),qt.dispose(),T.dispose(),tt.dispose(),mt.dispose(),Bt.dispose(),G.dispose(),J.dispose(),at.dispose(),at.removeEventListener("sessionstart",ei),at.removeEventListener("sessionend",Yo),Ai.stop()};function Mt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function kt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;let A=le.autoReset,Y=ft.enabled,st=ft.autoUpdate,ot=ft.needsUpdate,Z=ft.type;Pt(),le.autoReset=A,ft.enabled=Y,ft.autoUpdate=st,ft.needsUpdate=ot,ft.type=Z}function Vt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function _e(A){let Y=A.target;Y.removeEventListener("dispose",_e),Ke(Y)}function Ke(A){cn(A),qt.remove(A)}function cn(A){let Y=qt.get(A).programs;Y!==void 0&&(Y.forEach(function(st){J.releaseProgram(st)}),A.isShaderMaterial&&J.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,st,ot,Z,zt){Y===null&&(Y=ce);let Wt=Z.isMesh&&Z.matrixWorld.determinant()<0,ee=$i(A,Y,st,ot,Z);Ut.setMaterial(ot,Wt);let ne=st.index,de=1;if(ot.wireframe===!0){if(ne=vt.getWireframeAttribute(st),ne===void 0)return;de=2}let ge=st.drawRange,se=st.attributes.position,we=ge.start*de,Pe=(ge.start+ge.count)*de;zt!==null&&(we=Math.max(we,zt.start*de),Pe=Math.min(Pe,(zt.start+zt.count)*de)),ne!==null?(we=Math.max(we,0),Pe=Math.min(Pe,ne.count)):se!=null&&(we=Math.max(we,0),Pe=Math.min(Pe,se.count));let ze=Pe-we;if(ze<0||ze===1/0)return;Bt.setup(Z,ot,ee,st,ne);let En,Ae=dt;if(ne!==null&&(En=ut.get(ne),Ae=ie,Ae.setIndex(En)),Z.isMesh)ot.wireframe===!0?(Ut.setLineWidth(ot.wireframeLinewidth*St()),Ae.setMode(z.LINES)):Ae.setMode(z.TRIANGLES);else if(Z.isLine){let re=ot.linewidth;re===void 0&&(re=1),Ut.setLineWidth(re*St()),Z.isLineSegments?Ae.setMode(z.LINES):Z.isLineLoop?Ae.setMode(z.LINE_LOOP):Ae.setMode(z.LINE_STRIP)}else Z.isPoints?Ae.setMode(z.POINTS):Z.isSprite&&Ae.setMode(z.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Ae.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(bt.get("WEBGL_multi_draw"))Ae.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let re=Z._multiDrawStarts,ni=Z._multiDrawCounts,Re=Z._multiDrawCount,On=ne?ut.get(ne).bytesPerElement:1,Vn=qt.get(ot).currentProgram.getUniforms();for(let rn=0;rn<Re;rn++)Vn.setValue(z,"_gl_DrawID",rn),Ae.render(re[rn]/On,ni[rn])}else if(Z.isInstancedMesh)Ae.renderInstances(we,ze,Z.count);else if(st.isInstancedBufferGeometry){let re=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,ni=Math.min(st.instanceCount,re);Ae.renderInstances(we,ze,ni)}else Ae.render(we,ze)};function Se(A,Y,st){A.transparent===!0&&A.side===Cn&&A.forceSinglePass===!1?(A.side=Pn,A.needsUpdate=!0,ys(A,Y,st),A.side=cs,A.needsUpdate=!0,ys(A,Y,st),A.side=Cn):ys(A,Y,st)}this.compile=function(A,Y,st=null){st===null&&(st=A),m=wt.get(st),m.init(Y),S.push(m),st.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),A!==st&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),m.setupLights();let ot=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let zt=Z.material;if(zt)if(Array.isArray(zt))for(let Wt=0;Wt<zt.length;Wt++){let ee=zt[Wt];Se(ee,st,Z),ot.add(ee)}else Se(zt,st,Z),ot.add(zt)}),S.pop(),m=null,ot},this.compileAsync=function(A,Y,st=null){let ot=this.compile(A,Y,st);return new Promise(Z=>{function zt(){if(ot.forEach(function(Wt){qt.get(Wt).currentProgram.isReady()&&ot.delete(Wt)}),ot.size===0){Z(A);return}setTimeout(zt,10)}bt.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let pn=null;function Hn(A){pn&&pn(A)}function ei(){Ai.stop()}function Yo(){Ai.start()}let Ai=new md;Ai.setAnimationLoop(Hn),typeof self!="undefined"&&Ai.setContext(self),this.setAnimationLoop=function(A){pn=A,at.setAnimationLoop(A),A===null?Ai.stop():Ai.start()},at.addEventListener("sessionstart",ei),at.addEventListener("sessionend",Yo),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(Y),Y=at.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,Y,B),m=wt.get(A,S.length),m.init(Y),S.push(m),Qt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),gt.setFromProjectionMatrix(Qt),jt=this.localClippingEnabled,Dt=ct.init(this.clippingPlanes,jt),g=it.get(A,w.length),g.init(),w.push(g),at.enabled===!0&&at.isPresenting===!0){let zt=v.xr.getDepthSensingMesh();zt!==null&&Ji(zt,Y,-1/0,v.sortObjects)}Ji(A,Y,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(_t,Ct),yt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,yt&&xt.addToRenderList(g,A),this.info.render.frame++,Dt===!0&&ct.beginShadows();let st=m.state.shadowsArray;ft.render(st,A,Y),Dt===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();let ot=g.opaque,Z=g.transmissive;if(m.setupLights(),Y.isArrayCamera){let zt=Y.cameras;if(Z.length>0)for(let Wt=0,ee=zt.length;Wt<ee;Wt++){let ne=zt[Wt];wn(ot,Z,A,ne)}yt&&xt.render(A);for(let Wt=0,ee=zt.length;Wt<ee;Wt++){let ne=zt[Wt];Br(g,A,ne,ne.viewport)}}else Z.length>0&&wn(ot,Z,A,Y),yt&&xt.render(A),Br(g,A,Y);B!==null&&(P.updateMultisampleRenderTarget(B),P.updateRenderTargetMipmap(B)),A.isScene===!0&&A.onAfterRender(v,A,Y),Bt.resetDefaultState(),R=-1,E=null,S.pop(),S.length>0?(m=S[S.length-1],Dt===!0&&ct.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,w.pop(),w.length>0?g=w[w.length-1]:g=null};function Ji(A,Y,st,ot){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)st=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||gt.intersectsSprite(A)){ot&&ae.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Qt);let Wt=mt.update(A),ee=A.material;ee.visible&&g.push(A,Wt,ee,st,ae.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||gt.intersectsObject(A))){let Wt=mt.update(A),ee=A.material;if(ot&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ae.copy(A.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),ae.copy(Wt.boundingSphere.center)),ae.applyMatrix4(A.matrixWorld).applyMatrix4(Qt)),Array.isArray(ee)){let ne=Wt.groups;for(let de=0,ge=ne.length;de<ge;de++){let se=ne[de],we=ee[se.materialIndex];we&&we.visible&&g.push(A,Wt,we,st,ae.z,se)}}else ee.visible&&g.push(A,Wt,ee,st,ae.z,null)}}let zt=A.children;for(let Wt=0,ee=zt.length;Wt<ee;Wt++)Ji(zt[Wt],Y,st,ot)}function Br(A,Y,st,ot){let Z=A.opaque,zt=A.transmissive,Wt=A.transparent;m.setupLightsView(st),Dt===!0&&ct.setGlobalState(v.clippingPlanes,st),ot&&Ut.viewport(D.copy(ot)),Z.length>0&&_s(Z,Y,st),zt.length>0&&_s(zt,Y,st),Wt.length>0&&_s(Wt,Y,st),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function wn(A,Y,st,ot){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[ot.id]===void 0&&(m.state.transmissionRenderTarget[ot.id]=new Vi(1,1,{generateMipmaps:!0,type:bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float")?Oo:Hi,minFilter:Ds,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));let zt=m.state.transmissionRenderTarget[ot.id],Wt=ot.viewport||D;zt.setSize(Wt.z,Wt.w);let ee=v.getRenderTarget();v.setRenderTarget(zt),v.getClearColor(V),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),yt&&xt.render(st);let ne=v.toneMapping;v.toneMapping=as;let de=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),m.setupLightsView(ot),Dt===!0&&ct.setGlobalState(v.clippingPlanes,ot),_s(A,st,ot),P.updateMultisampleRenderTarget(zt),P.updateRenderTargetMipmap(zt),bt.has("WEBGL_multisampled_render_to_texture")===!1){let ge=!1;for(let se=0,we=Y.length;se<we;se++){let Pe=Y[se],ze=Pe.object,En=Pe.geometry,Ae=Pe.material,re=Pe.group;if(Ae.side===Cn&&ze.layers.test(ot.layers)){let ni=Ae.side;Ae.side=Pn,Ae.needsUpdate=!0,Hr(ze,st,ot,En,Ae,re),Ae.side=ni,Ae.needsUpdate=!0,ge=!0}}ge===!0&&(P.updateMultisampleRenderTarget(zt),P.updateRenderTargetMipmap(zt))}v.setRenderTarget(ee),v.setClearColor(V,X),de!==void 0&&(ot.viewport=de),v.toneMapping=ne}function _s(A,Y,st){let ot=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,zt=A.length;Z<zt;Z++){let Wt=A[Z],ee=Wt.object,ne=Wt.geometry,de=ot===null?Wt.material:ot,ge=Wt.group;ee.layers.test(st.layers)&&Hr(ee,Y,st,ne,de,ge)}}function Hr(A,Y,st,ot,Z,zt){A.onBeforeRender(v,Y,st,ot,Z,zt),A.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(v,Y,st,ot,A,zt),Z.transparent===!0&&Z.side===Cn&&Z.forceSinglePass===!1?(Z.side=Pn,Z.needsUpdate=!0,v.renderBufferDirect(st,Y,ot,Z,A,zt),Z.side=cs,Z.needsUpdate=!0,v.renderBufferDirect(st,Y,ot,Z,A,zt),Z.side=Cn):v.renderBufferDirect(st,Y,ot,Z,A,zt),A.onAfterRender(v,Y,st,ot,Z,zt)}function ys(A,Y,st){Y.isScene!==!0&&(Y=ce);let ot=qt.get(A),Z=m.state.lights,zt=m.state.shadowsArray,Wt=Z.state.version,ee=J.getParameters(A,Z.state,zt,Y,st),ne=J.getProgramCacheKey(ee),de=ot.programs;ot.environment=A.isMeshStandardMaterial?Y.environment:null,ot.fog=Y.fog,ot.envMap=(A.isMeshStandardMaterial?tt:T).get(A.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,de===void 0&&(A.addEventListener("dispose",_e),de=new Map,ot.programs=de);let ge=de.get(ne);if(ge!==void 0){if(ot.currentProgram===ge&&ot.lightsStateVersion===Wt)return kn(A,ee),ge}else ee.uniforms=J.getUniforms(A),A.onBeforeCompile(ee,v),ge=J.acquireProgram(ee,ne),de.set(ne,ge),ot.uniforms=ee.uniforms;let se=ot.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(se.clippingPlanes=ct.uniform),kn(A,ee),ot.needsLights=$s(A),ot.lightsStateVersion=Wt,ot.needsLights&&(se.ambientLightColor.value=Z.state.ambient,se.lightProbe.value=Z.state.probe,se.directionalLights.value=Z.state.directional,se.directionalLightShadows.value=Z.state.directionalShadow,se.spotLights.value=Z.state.spot,se.spotLightShadows.value=Z.state.spotShadow,se.rectAreaLights.value=Z.state.rectArea,se.ltc_1.value=Z.state.rectAreaLTC1,se.ltc_2.value=Z.state.rectAreaLTC2,se.pointLights.value=Z.state.point,se.pointLightShadows.value=Z.state.pointShadow,se.hemisphereLights.value=Z.state.hemi,se.directionalShadowMap.value=Z.state.directionalShadowMap,se.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,se.spotShadowMap.value=Z.state.spotShadowMap,se.spotLightMatrix.value=Z.state.spotLightMatrix,se.spotLightMap.value=Z.state.spotLightMap,se.pointShadowMap.value=Z.state.pointShadowMap,se.pointShadowMatrix.value=Z.state.pointShadowMatrix),ot.currentProgram=ge,ot.uniformsList=null,ge}function Ks(A){if(A.uniformsList===null){let Y=A.currentProgram.getUniforms();A.uniformsList=Sr.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function kn(A,Y){let st=qt.get(A);st.outputColorSpace=Y.outputColorSpace,st.batching=Y.batching,st.batchingColor=Y.batchingColor,st.instancing=Y.instancing,st.instancingColor=Y.instancingColor,st.instancingMorph=Y.instancingMorph,st.skinning=Y.skinning,st.morphTargets=Y.morphTargets,st.morphNormals=Y.morphNormals,st.morphColors=Y.morphColors,st.morphTargetsCount=Y.morphTargetsCount,st.numClippingPlanes=Y.numClippingPlanes,st.numIntersection=Y.numClipIntersection,st.vertexAlphas=Y.vertexAlphas,st.vertexTangents=Y.vertexTangents,st.toneMapping=Y.toneMapping}function $i(A,Y,st,ot,Z){Y.isScene!==!0&&(Y=ce),P.resetTextureUnits();let zt=Y.fog,Wt=ot.isMeshStandardMaterial?Y.environment:null,ee=B===null?v.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ur,ne=(ot.isMeshStandardMaterial?tt:T).get(ot.envMap||Wt),de=ot.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,ge=!!st.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),se=!!st.morphAttributes.position,we=!!st.morphAttributes.normal,Pe=!!st.morphAttributes.color,ze=as;ot.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(ze=v.toneMapping);let En=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Ae=En!==void 0?En.length:0,re=qt.get(ot),ni=m.state.lights;if(Dt===!0&&(jt===!0||A!==E)){let bn=A===E&&ot.id===R;ct.setState(ot,A,bn)}let Re=!1;ot.version===re.__version?(re.needsLights&&re.lightsStateVersion!==ni.state.version||re.outputColorSpace!==ee||Z.isBatchedMesh&&re.batching===!1||!Z.isBatchedMesh&&re.batching===!0||Z.isBatchedMesh&&re.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&re.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&re.instancing===!1||!Z.isInstancedMesh&&re.instancing===!0||Z.isSkinnedMesh&&re.skinning===!1||!Z.isSkinnedMesh&&re.skinning===!0||Z.isInstancedMesh&&re.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&re.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&re.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&re.instancingMorph===!1&&Z.morphTexture!==null||re.envMap!==ne||ot.fog===!0&&re.fog!==zt||re.numClippingPlanes!==void 0&&(re.numClippingPlanes!==ct.numPlanes||re.numIntersection!==ct.numIntersection)||re.vertexAlphas!==de||re.vertexTangents!==ge||re.morphTargets!==se||re.morphNormals!==we||re.morphColors!==Pe||re.toneMapping!==ze||re.morphTargetsCount!==Ae)&&(Re=!0):(Re=!0,re.__version=ot.version);let On=re.currentProgram;Re===!0&&(On=ys(ot,Y,Z));let Vn=!1,rn=!1,ii=!1,Ce=On.getUniforms(),Kn=re.uniforms;if(Ut.useProgram(On.program)&&(Vn=!0,rn=!0,ii=!0),ot.id!==R&&(R=ot.id,rn=!0),Vn||E!==A){Ut.buffers.depth.getReversed()?(Nt.copy(A.projectionMatrix),A0(Nt),R0(Nt),Ce.setValue(z,"projectionMatrix",Nt)):Ce.setValue(z,"projectionMatrix",A.projectionMatrix),Ce.setValue(z,"viewMatrix",A.matrixWorldInverse);let gi=Ce.map.cameraPosition;gi!==void 0&&gi.setValue(z,ue.setFromMatrixPosition(A.matrixWorld)),Yt.logarithmicDepthBuffer&&Ce.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Ce.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,rn=!0,ii=!0)}if(Z.isSkinnedMesh){Ce.setOptional(z,Z,"bindMatrix"),Ce.setOptional(z,Z,"bindMatrixInverse");let bn=Z.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Ce.setValue(z,"boneTexture",bn.boneTexture,P))}Z.isBatchedMesh&&(Ce.setOptional(z,Z,"batchingTexture"),Ce.setValue(z,"batchingTexture",Z._matricesTexture,P),Ce.setOptional(z,Z,"batchingIdTexture"),Ce.setValue(z,"batchingIdTexture",Z._indirectTexture,P),Ce.setOptional(z,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ce.setValue(z,"batchingColorTexture",Z._colorsTexture,P));let Ie=st.morphAttributes;if((Ie.position!==void 0||Ie.normal!==void 0||Ie.color!==void 0)&&Ft.update(Z,st,On),(rn||re.receiveShadow!==Z.receiveShadow)&&(re.receiveShadow=Z.receiveShadow,Ce.setValue(z,"receiveShadow",Z.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Kn.envMap.value=ne,Kn.flipEnvMap.value=ne.isCubeTexture&&ne.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Y.environment!==null&&(Kn.envMapIntensity.value=Y.environmentIntensity),rn&&(Ce.setValue(z,"toneMappingExposure",v.toneMappingExposure),re.needsLights&&Js(Kn,ii),zt&&ot.fog===!0&&et.refreshFogUniforms(Kn,zt),et.refreshMaterialUniforms(Kn,ot,W,q,m.state.transmissionRenderTarget[A.id]),Sr.upload(z,Ks(re),Kn,P)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Sr.upload(z,Ks(re),Kn,P),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Ce.setValue(z,"center",Z.center),Ce.setValue(z,"modelViewMatrix",Z.modelViewMatrix),Ce.setValue(z,"normalMatrix",Z.normalMatrix),Ce.setValue(z,"modelMatrix",Z.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){let bn=ot.uniformsGroups;for(let gi=0,xi=bn.length;gi<xi;gi++){let kr=bn[gi];G.update(kr,On),G.bind(kr,On)}}return On}function Js(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function $s(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(A,Y,st){qt.get(A.texture).__webglTexture=Y,qt.get(A.depthTexture).__webglTexture=st;let ot=qt.get(A);ot.__hasExternalTextures=!0,ot.__autoAllocateDepthBuffer=st===void 0,ot.__autoAllocateDepthBuffer||bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ot.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,Y){let st=qt.get(A);st.__webglFramebuffer=Y,st.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(A,Y=0,st=0){B=A,L=Y,U=st;let ot=!0,Z=null,zt=!1,Wt=!1;if(A){let ne=qt.get(A);if(ne.__useDefaultFramebuffer!==void 0)Ut.bindFramebuffer(z.FRAMEBUFFER,null),ot=!1;else if(ne.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(ne.__hasExternalTextures)P.rebindTextures(A,qt.get(A.texture).__webglTexture,qt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let se=A.depthTexture;if(ne.__boundDepthTexture!==se){if(se!==null&&qt.has(se)&&(A.width!==se.image.width||A.height!==se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}let de=A.texture;(de.isData3DTexture||de.isDataArrayTexture||de.isCompressedArrayTexture)&&(Wt=!0);let ge=qt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ge[Y])?Z=ge[Y][st]:Z=ge[Y],zt=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?Z=qt.get(A).__webglMultisampledFramebuffer:Array.isArray(ge)?Z=ge[st]:Z=ge,D.copy(A.viewport),Q.copy(A.scissor),$=A.scissorTest}else D.copy(Ot).multiplyScalar(W).floor(),Q.copy(fe).multiplyScalar(W).floor(),$=Rt;if(Ut.bindFramebuffer(z.FRAMEBUFFER,Z)&&ot&&Ut.drawBuffers(A,Z),Ut.viewport(D),Ut.scissor(Q),Ut.setScissorTest($),zt){let ne=qt.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ne.__webglTexture,st)}else if(Wt){let ne=qt.get(A.texture),de=Y||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,ne.__webglTexture,st||0,de)}R=-1},this.readRenderTargetPixels=function(A,Y,st,ot,Z,zt,Wt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ee=qt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Wt!==void 0&&(ee=ee[Wt]),ee){Ut.bindFramebuffer(z.FRAMEBUFFER,ee);try{let ne=A.texture,de=ne.format,ge=ne.type;if(!Yt.textureFormatReadable(de)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-ot&&st>=0&&st<=A.height-Z&&z.readPixels(Y,st,ot,Z,Ht.convert(de),Ht.convert(ge),zt)}finally{let ne=B!==null?qt.get(B).__webglFramebuffer:null;Ut.bindFramebuffer(z.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(A,Y,st,ot,Z,zt,Wt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ee=qt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Wt!==void 0&&(ee=ee[Wt]),ee){let ne=A.texture,de=ne.format,ge=ne.type;if(!Yt.textureFormatReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=A.width-ot&&st>=0&&st<=A.height-Z){Ut.bindFramebuffer(z.FRAMEBUFFER,ee);let se=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,se),z.bufferData(z.PIXEL_PACK_BUFFER,zt.byteLength,z.STREAM_READ),z.readPixels(Y,st,ot,Z,Ht.convert(de),Ht.convert(ge),0);let we=B!==null?qt.get(B).__webglFramebuffer:null;Ut.bindFramebuffer(z.FRAMEBUFFER,we);let Pe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await T0(z,Pe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,se),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,zt),z.deleteBuffer(se),z.deleteSync(Pe),zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,Y=null,st=0){A.isTexture!==!0&&(so("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,A=arguments[1]);let ot=Math.pow(2,-st),Z=Math.floor(A.image.width*ot),zt=Math.floor(A.image.height*ot),Wt=Y!==null?Y.x:0,ee=Y!==null?Y.y:0;P.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,st,0,0,Wt,ee,Z,zt),Ut.unbindTexture()},this.copyTextureToTexture=function(A,Y,st=null,ot=null,Z=0){A.isTexture!==!0&&(so("WebGLRenderer: copyTextureToTexture function signature has changed."),ot=arguments[0]||null,A=arguments[1],Y=arguments[2],Z=arguments[3]||0,st=null);let zt,Wt,ee,ne,de,ge,se,we,Pe,ze=A.isCompressedTexture?A.mipmaps[Z]:A.image;st!==null?(zt=st.max.x-st.min.x,Wt=st.max.y-st.min.y,ee=st.isBox3?st.max.z-st.min.z:1,ne=st.min.x,de=st.min.y,ge=st.isBox3?st.min.z:0):(zt=ze.width,Wt=ze.height,ee=ze.depth||1,ne=0,de=0,ge=0),ot!==null?(se=ot.x,we=ot.y,Pe=ot.z):(se=0,we=0,Pe=0);let En=Ht.convert(Y.format),Ae=Ht.convert(Y.type),re;Y.isData3DTexture?(P.setTexture3D(Y,0),re=z.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(P.setTexture2DArray(Y,0),re=z.TEXTURE_2D_ARRAY):(P.setTexture2D(Y,0),re=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Y.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Y.unpackAlignment);let ni=z.getParameter(z.UNPACK_ROW_LENGTH),Re=z.getParameter(z.UNPACK_IMAGE_HEIGHT),On=z.getParameter(z.UNPACK_SKIP_PIXELS),Vn=z.getParameter(z.UNPACK_SKIP_ROWS),rn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,ze.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ze.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ne),z.pixelStorei(z.UNPACK_SKIP_ROWS,de),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ge);let ii=A.isDataArrayTexture||A.isData3DTexture,Ce=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let Kn=qt.get(A),Ie=qt.get(Y),bn=qt.get(Kn.__renderTarget),gi=qt.get(Ie.__renderTarget);Ut.bindFramebuffer(z.READ_FRAMEBUFFER,bn.__webglFramebuffer),Ut.bindFramebuffer(z.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let xi=0;xi<ee;xi++)ii&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,qt.get(A).__webglTexture,Z,ge+xi),A.isDepthTexture?(Ce&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,qt.get(Y).__webglTexture,Z,Pe+xi),z.blitFramebuffer(ne,de,zt,Wt,se,we,zt,Wt,z.DEPTH_BUFFER_BIT,z.NEAREST)):Ce?z.copyTexSubImage3D(re,Z,se,we,Pe+xi,ne,de,zt,Wt):z.copyTexSubImage2D(re,Z,se,we,Pe+xi,ne,de,zt,Wt);Ut.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ce?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(re,Z,se,we,Pe,zt,Wt,ee,En,Ae,ze.data):Y.isCompressedArrayTexture?z.compressedTexSubImage3D(re,Z,se,we,Pe,zt,Wt,ee,En,ze.data):z.texSubImage3D(re,Z,se,we,Pe,zt,Wt,ee,En,Ae,ze):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Z,se,we,zt,Wt,En,Ae,ze.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Z,se,we,ze.width,ze.height,En,ze.data):z.texSubImage2D(z.TEXTURE_2D,Z,se,we,zt,Wt,En,Ae,ze);z.pixelStorei(z.UNPACK_ROW_LENGTH,ni),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Re),z.pixelStorei(z.UNPACK_SKIP_PIXELS,On),z.pixelStorei(z.UNPACK_SKIP_ROWS,Vn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,rn),Z===0&&Y.generateMipmaps&&z.generateMipmap(re),Ut.unbindTexture()},this.copyTextureToTexture3D=function(A,Y,st=null,ot=null,Z=0){return A.isTexture!==!0&&(so("WebGLRenderer: copyTextureToTexture3D function signature has changed."),st=arguments[0]||null,ot=arguments[1]||null,A=arguments[2],Y=arguments[3],Z=arguments[4]||0),so('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,Y,st,ot,Z)},this.initRenderTarget=function(A){qt.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),Ut.unbindTexture()},this.resetState=function(){L=0,U=0,B=null,Ut.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Te._getDrawingBufferColorSpace(t),e.unpackColorSpace=Te._getUnpackColorSpace()}};var Va=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new he(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},vo=class extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ga=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Kl,this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Un=new O,Eo=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Un.fromBufferAttribute(this,e),Un.applyMatrix4(t),this.setXYZ(e,Un.x,Un.y,Un.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Un.fromBufferAttribute(this,e),Un.applyNormalMatrix(t),this.setXYZ(e,Un.x,Un.y,Un.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Un.fromBufferAttribute(this,e),Un.transformDirection(t),this.setXYZ(e,Un.x,Un.y,Un.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ci(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Le(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ci(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ci(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ci(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ci(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),s=Le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Sn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Wi=class extends Gi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new he(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},mr,to=new O,gr=new O,xr=new O,_r=new Tt,eo=new Tt,Md=new Ge,xa=new O,no=new O,_a=new O,zu=new Tt,sl=new Tt,Ou=new Tt,hs=class extends We{constructor(t=new Wi){if(super(),this.isSprite=!0,this.type="Sprite",mr===void 0){mr=new ke;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ga(e,5);mr.setIndex([0,1,2,0,2,3]),mr.setAttribute("position",new Eo(i,3,0,!1)),mr.setAttribute("uv",new Eo(i,2,3,!1))}this.geometry=mr,this.material=t,this.center=new Tt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gr.setFromMatrixScale(this.matrixWorld),Md.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),xr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gr.multiplyScalar(-xr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;ya(xa.set(-.5,-.5,0),xr,o,gr,s,r),ya(no.set(.5,-.5,0),xr,o,gr,s,r),ya(_a.set(.5,.5,0),xr,o,gr,s,r),zu.set(0,0),sl.set(1,0),Ou.set(1,1);let a=t.ray.intersectTriangle(xa,no,_a,!1,to);if(a===null&&(ya(no.set(-.5,.5,0),xr,o,gr,s,r),sl.set(0,1),a=t.ray.intersectTriangle(xa,_a,no,!1,to),a===null))return;let c=t.ray.origin.distanceTo(to);c<t.near||c>t.far||e.push({distance:c,point:to.clone(),uv:rs.getInterpolation(to,xa,no,_a,zu,sl,Ou,new Tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ya(n,t,e,i,s,r){_r.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(eo.x=r*_r.x-s*_r.y,eo.y=s*_r.x+r*_r.y):eo.copy(_r),n.copy(t),n.x+=eo.x,n.y+=eo.y,n.applyMatrix4(Md)}var fs=class extends Gi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Fu=new Ge,uh=new zs,Ma=new Pr,va=new O,Os=class extends We{constructor(t=new ke,e=new fs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ma.copy(i.boundingSphere),Ma.applyMatrix4(s),Ma.radius+=r,t.ray.intersectsSphere(Ma)===!1)return;Fu.copy(s).invert(),uh.copy(t.ray).applyMatrix4(Fu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let _=f,M=d;_<M;_++){let g=l.getX(_);va.fromBufferAttribute(u,g),Bu(va,g,c,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let _=f,M=d;_<M;_++)va.fromBufferAttribute(u,_),Bu(va,_,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Bu(n,t,e,i,s,r,o){let a=uh.distanceSqToPoint(n);if(a<e){let c=new O;uh.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var _n=class extends In{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Qn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Tt:new O);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new O,s=[],r=[],o=[],a=new O,c=new Ge;for(let d=0;d<=t;d++){let _=d/t;s[d]=this.getTangentAt(_,new O)}r[0]=new O,o[0]=new O;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(gn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,_))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(gn(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],d*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},bo=class extends Qn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Tt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},dh=class extends bo{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Xh(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var Ea=new O,rl=new Xh,ol=new Xh,al=new Xh,Fs=class extends Qn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new O){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Ea.subVectors(s[0],s[1]).add(s[0]),l=Ea);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ea.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ea),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,_=Math.pow(l.distanceToSquared(u),d),M=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);M<1e-4&&(M=1),_<1e-4&&(_=M),g<1e-4&&(g=M),rl.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,_,M,g),ol.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,_,M,g),al.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,_,M,g)}else this.curveType==="catmullrom"&&(rl.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),ol.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),al.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return i.set(rl.calc(c),ol.calc(c),al.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Hu(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function E1(n,t){let e=1-n;return e*e*t}function b1(n,t){return 2*(1-n)*n*t}function S1(n,t){return n*n*t}function lo(n,t,e,i){return E1(n,t)+b1(n,e)+S1(n,i)}function w1(n,t){let e=1-n;return e*e*e*t}function T1(n,t){let e=1-n;return 3*e*e*n*t}function A1(n,t){return 3*(1-n)*n*n*t}function R1(n,t){return n*n*n*t}function ho(n,t,e,i,s){return w1(n,t)+T1(n,e)+A1(n,i)+R1(n,s)}var Wa=class extends Qn{constructor(t=new Tt,e=new Tt,i=new Tt,s=new Tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Tt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ho(t,s.x,r.x,o.x,a.x),ho(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ph=class extends Qn{constructor(t=new O,e=new O,i=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new O){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ho(t,s.x,r.x,o.x,a.x),ho(t,s.y,r.y,o.y,a.y),ho(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Xa=class extends Qn{constructor(t=new Tt,e=new Tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Tt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mh=class extends Qn{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ya=class extends Qn{constructor(t=new Tt,e=new Tt,i=new Tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Tt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(lo(t,s.x,r.x,o.x),lo(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gh=class extends Qn{constructor(t=new O,e=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new O){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(lo(t,s.x,r.x,o.x),lo(t,s.y,r.y,o.y),lo(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qa=class extends Qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Tt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Hu(a,c.x,l.x,h.x,u.x),Hu(a,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new Tt().fromArray(s))}return this}},xh=Object.freeze({__proto__:null,ArcCurve:dh,CatmullRomCurve3:Fs,CubicBezierCurve:Wa,CubicBezierCurve3:ph,EllipseCurve:bo,LineCurve:Xa,LineCurve3:mh,QuadraticBezierCurve:Ya,QuadraticBezierCurve3:gh,SplineCurve:qa}),_h=class extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xh[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new xh[s.type]().fromJSON(s))}return this}},Za=class extends _h{constructor(t){super(),this.type="Path",this.currentPoint=new Tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Xa(this.currentPoint.clone(),new Tt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Ya(this.currentPoint.clone(),new Tt(t,e),new Tt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Wa(this.currentPoint.clone(),new Tt(t,e),new Tt(i,s),new Tt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new qa(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,r,o,a,c),this}absellipse(t,e,i,s,r,o,a,c){let l=new bo(t,e,i,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Ka=class n extends ke{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new O,h=new Tt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=i+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new xe(o,3)),this.setAttribute("normal",new xe(a,3)),this.setAttribute("uv",new xe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},qe=class n extends ke{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],_=0,M=[],g=i/2,m=0;w(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new xe(u,3)),this.setAttribute("normal",new xe(f,3)),this.setAttribute("uv",new xe(d,2));function w(){let v=new O,F=new O,L=0,U=(e-t)/i;for(let B=0;B<=r;B++){let R=[],E=B/r,D=E*(e-t)+t;for(let Q=0;Q<=s;Q++){let $=Q/s,V=$*c+a,X=Math.sin(V),K=Math.cos(V);F.x=D*X,F.y=-E*i+g,F.z=D*K,u.push(F.x,F.y,F.z),v.set(X,U,K).normalize(),f.push(v.x,v.y,v.z),d.push($,1-E),R.push(_++)}M.push(R)}for(let B=0;B<s;B++)for(let R=0;R<r;R++){let E=M[R][B],D=M[R+1][B],Q=M[R+1][B+1],$=M[R][B+1];(t>0||R!==0)&&(h.push(E,D,$),L+=3),(e>0||R!==r-1)&&(h.push(D,Q,$),L+=3)}l.addGroup(m,L,0),m+=L}function S(v){let F=_,L=new Tt,U=new O,B=0,R=v===!0?t:e,E=v===!0?1:-1;for(let Q=1;Q<=s;Q++)u.push(0,g*E,0),f.push(0,E,0),d.push(.5,.5),_++;let D=_;for(let Q=0;Q<=s;Q++){let V=Q/s*c+a,X=Math.cos(V),K=Math.sin(V);U.x=R*K,U.y=g*E,U.z=R*X,u.push(U.x,U.y,U.z),f.push(0,E,0),L.x=X*.5+.5,L.y=K*.5*E+.5,d.push(L.x,L.y),_++}for(let Q=0;Q<s;Q++){let $=F+Q,V=D+Q;v===!0?h.push(V,V+1,$):h.push(V+1,V,$),B+=3}l.addGroup(m,B,v===!0?1:2),m+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},So=class n extends qe{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},yh=class n extends ke{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new xe(r,3)),this.setAttribute("normal",new xe(r.slice(),3)),this.setAttribute("uv",new xe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){let S=new O,v=new O,F=new O;for(let L=0;L<e.length;L+=3)d(e[L+0],S),d(e[L+1],v),d(e[L+2],F),c(S,v,F,w)}function c(w,S,v,F){let L=F+1,U=[];for(let B=0;B<=L;B++){U[B]=[];let R=w.clone().lerp(v,B/L),E=S.clone().lerp(v,B/L),D=L-B;for(let Q=0;Q<=D;Q++)Q===0&&B===L?U[B][Q]=R:U[B][Q]=R.clone().lerp(E,Q/D)}for(let B=0;B<L;B++)for(let R=0;R<2*(L-B)-1;R++){let E=Math.floor(R/2);R%2===0?(f(U[B][E+1]),f(U[B+1][E]),f(U[B][E])):(f(U[B][E+1]),f(U[B+1][E+1]),f(U[B+1][E]))}}function l(w){let S=new O;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(w),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function h(){let w=new O;for(let S=0;S<r.length;S+=3){w.x=r[S+0],w.y=r[S+1],w.z=r[S+2];let v=g(w)/2/Math.PI+.5,F=m(w)/Math.PI+.5;o.push(v,1-F)}_(),u()}function u(){for(let w=0;w<o.length;w+=6){let S=o[w+0],v=o[w+2],F=o[w+4],L=Math.max(S,v,F),U=Math.min(S,v,F);L>.9&&U<.1&&(S<.2&&(o[w+0]+=1),v<.2&&(o[w+2]+=1),F<.2&&(o[w+4]+=1))}}function f(w){r.push(w.x,w.y,w.z)}function d(w,S){let v=w*3;S.x=t[v+0],S.y=t[v+1],S.z=t[v+2]}function _(){let w=new O,S=new O,v=new O,F=new O,L=new Tt,U=new Tt,B=new Tt;for(let R=0,E=0;R<r.length;R+=9,E+=6){w.set(r[R+0],r[R+1],r[R+2]),S.set(r[R+3],r[R+4],r[R+5]),v.set(r[R+6],r[R+7],r[R+8]),L.set(o[E+0],o[E+1]),U.set(o[E+2],o[E+3]),B.set(o[E+4],o[E+5]),F.copy(w).add(S).add(v).divideScalar(3);let D=g(F);M(L,E+0,w,D),M(U,E+2,S,D),M(B,E+4,v,D)}}function M(w,S,v,F){F<0&&w.x===1&&(o[S]=w.x-1),v.x===0&&v.z===0&&(o[S]=F/2/Math.PI+.5)}function g(w){return Math.atan2(w.z,-w.x)}function m(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var wo=class extends Za{constructor(t){super(t),this.uuid=Mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Za().fromJSON(s))}return this}},C1={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=vd(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(i&&(r=U1(n,t,r,e)),n.length>80*e){a=l=n[0],c=h=n[1];for(let _=e;_<s;_+=e)u=n[_],f=n[_+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return To(r,o,e,a,c,d,0),o}};function vd(n,t,e,i,s){let r,o;if(s===X1(n,t,e,i)>0)for(r=t;r<e;r+=i)o=ku(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=ku(r,n[r],n[r+1],o);return o&&rc(o,o.next)&&(Ro(o),o=o.next),o}function Bs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(rc(e,e.next)||je(e.prev,e,e.next)===0)){if(Ro(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function To(n,t,e,i,s,r,o){if(!n)return;!o&&r&&B1(n,i,s,r);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?I1(n,i,s,r):P1(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),Ro(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=L1(Bs(n),t,e),To(n,t,e,i,s,r,2)):o===2&&D1(n,t,e,i,s,r):To(Bs(n),t,e,i,s,r,1);break}}}function P1(n){let t=n.prev,e=n,i=n.next;if(je(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,_=i.next;for(;_!==t;){if(_.x>=h&&_.x<=f&&_.y>=u&&_.y<=d&&Mr(s,a,r,c,o,l,_.x,_.y)&&je(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function I1(n,t,e,i){let s=n.prev,r=n,o=n.next;if(je(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,_=h<u?h<f?h:f:u<f?u:f,M=a>c?a>l?a:l:c>l?c:l,g=h>u?h>f?h:f:u>f?u:f,m=Mh(d,_,t,e,i),w=Mh(M,g,t,e,i),S=n.prevZ,v=n.nextZ;for(;S&&S.z>=m&&v&&v.z<=w;){if(S.x>=d&&S.x<=M&&S.y>=_&&S.y<=g&&S!==s&&S!==o&&Mr(a,h,c,u,l,f,S.x,S.y)&&je(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=d&&v.x<=M&&v.y>=_&&v.y<=g&&v!==s&&v!==o&&Mr(a,h,c,u,l,f,v.x,v.y)&&je(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=m;){if(S.x>=d&&S.x<=M&&S.y>=_&&S.y<=g&&S!==s&&S!==o&&Mr(a,h,c,u,l,f,S.x,S.y)&&je(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=w;){if(v.x>=d&&v.x<=M&&v.y>=_&&v.y<=g&&v!==s&&v!==o&&Mr(a,h,c,u,l,f,v.x,v.y)&&je(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function L1(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!rc(s,r)&&Ed(s,i,i.next,r)&&Ao(s,r)&&Ao(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Ro(i),Ro(i.next),i=n=r),i=i.next}while(i!==n);return Bs(i)}function D1(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&V1(o,a)){let c=bd(o,a);o=Bs(o,o.next),c=Bs(c,c.next),To(o,t,e,i,s,r,0),To(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function U1(n,t,e,i){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=vd(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(k1(l));for(s.sort(N1),r=0;r<s.length;r++)e=z1(s[r],e);return e}function N1(n,t){return n.x-t.x}function z1(n,t){let e=O1(n,t);if(!e)return t;let i=bd(e,n);return Bs(i,i.next),Bs(e,e.next)}function O1(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Mr(o<l?r:i,o,c,l,o<l?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Ao(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&F1(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function F1(n,t){return je(n.prev,n,t.prev)<0&&je(t.next,n,n.next)<0}function B1(n,t,e,i){let s=n;do s.z===0&&(s.z=Mh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,H1(s)}function H1(n){let t,e,i,s,r,o,a,c,l=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,l*=2}while(o>1);return n}function Mh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function k1(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Mr(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function V1(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!G1(n,t)&&(Ao(n,t)&&Ao(t,n)&&W1(n,t)&&(je(n.prev,n,t.prev)||je(n,t.prev,t))||rc(n,t)&&je(n.prev,n,n.next)>0&&je(t.prev,t,t.next)>0)}function je(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function rc(n,t){return n.x===t.x&&n.y===t.y}function Ed(n,t,e,i){let s=Sa(je(n,t,e)),r=Sa(je(n,t,i)),o=Sa(je(e,i,n)),a=Sa(je(e,i,t));return!!(s!==r&&o!==a||s===0&&ba(n,e,t)||r===0&&ba(n,i,t)||o===0&&ba(e,n,i)||a===0&&ba(e,t,i))}function ba(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Sa(n){return n>0?1:n<0?-1:0}function G1(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Ed(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Ao(n,t){return je(n.prev,n,n.next)<0?je(n,t,n.next)>=0&&je(n,n.prev,t)>=0:je(n,t,n.prev)<0||je(n,n.next,t)<0}function W1(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function bd(n,t){let e=new vh(n.i,n.x,n.y),i=new vh(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function ku(n,t,e,i){let s=new vh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ro(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function vh(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function X1(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var fo=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Vu(t),Gu(i,t);let o=t.length;e.forEach(Vu);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Gu(i,e[c]);let a=C1.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Vu(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Gu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Ja=class n extends ke{constructor(t=new wo([new Tt(.5,.5),new Tt(-.5,.5),new Tt(-.5,-.5),new Tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new xe(s,3)),this.setAttribute("uv",new xe(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:d-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:Y1,S,v=!1,F,L,U,B;m&&(S=m.getSpacedPoints(h),v=!0,f=!1,F=m.computeFrenetFrames(h,!1),L=new O,U=new O,B=new O),f||(g=0,d=0,_=0,M=0);let R=a.extractPoints(l),E=R.shape,D=R.holes;if(!fo.isClockWise(E)){E=E.reverse();for(let yt=0,St=D.length;yt<St;yt++){let z=D[yt];fo.isClockWise(z)&&(D[yt]=z.reverse())}}let $=fo.triangulateShape(E,D),V=E;for(let yt=0,St=D.length;yt<St;yt++){let z=D[yt];E=E.concat(z)}function X(yt,St,z){return St||console.error("THREE.ExtrudeGeometry: vec does not exist"),yt.clone().addScaledVector(St,z)}let K=E.length,q=$.length;function W(yt,St,z){let Kt,bt,Yt,Ut=yt.x-St.x,le=yt.y-St.y,qt=z.x-yt.x,P=z.y-yt.y,T=Ut*Ut+le*le,tt=Ut*P-le*qt;if(Math.abs(tt)>Number.EPSILON){let ut=Math.sqrt(T),vt=Math.sqrt(qt*qt+P*P),mt=St.x-le/ut,J=St.y+Ut/ut,et=z.x-P/vt,it=z.y+qt/vt,wt=((et-mt)*P-(it-J)*qt)/(Ut*P-le*qt);Kt=mt+Ut*wt-yt.x,bt=J+le*wt-yt.y;let ct=Kt*Kt+bt*bt;if(ct<=2)return new Tt(Kt,bt);Yt=Math.sqrt(ct/2)}else{let ut=!1;Ut>Number.EPSILON?qt>Number.EPSILON&&(ut=!0):Ut<-Number.EPSILON?qt<-Number.EPSILON&&(ut=!0):Math.sign(le)===Math.sign(P)&&(ut=!0),ut?(Kt=-le,bt=Ut,Yt=Math.sqrt(T)):(Kt=Ut,bt=le,Yt=Math.sqrt(T/2))}return new Tt(Kt/Yt,bt/Yt)}let _t=[];for(let yt=0,St=V.length,z=St-1,Kt=yt+1;yt<St;yt++,z++,Kt++)z===St&&(z=0),Kt===St&&(Kt=0),_t[yt]=W(V[yt],V[z],V[Kt]);let Ct=[],Ot,fe=_t.concat();for(let yt=0,St=D.length;yt<St;yt++){let z=D[yt];Ot=[];for(let Kt=0,bt=z.length,Yt=bt-1,Ut=Kt+1;Kt<bt;Kt++,Yt++,Ut++)Yt===bt&&(Yt=0),Ut===bt&&(Ut=0),Ot[Kt]=W(z[Kt],z[Yt],z[Ut]);Ct.push(Ot),fe=fe.concat(Ot)}for(let yt=0;yt<g;yt++){let St=yt/g,z=d*Math.cos(St*Math.PI/2),Kt=_*Math.sin(St*Math.PI/2)+M;for(let bt=0,Yt=V.length;bt<Yt;bt++){let Ut=X(V[bt],_t[bt],Kt);Nt(Ut.x,Ut.y,-z)}for(let bt=0,Yt=D.length;bt<Yt;bt++){let Ut=D[bt];Ot=Ct[bt];for(let le=0,qt=Ut.length;le<qt;le++){let P=X(Ut[le],Ot[le],Kt);Nt(P.x,P.y,-z)}}}let Rt=_+M;for(let yt=0;yt<K;yt++){let St=f?X(E[yt],fe[yt],Rt):E[yt];v?(U.copy(F.normals[0]).multiplyScalar(St.x),L.copy(F.binormals[0]).multiplyScalar(St.y),B.copy(S[0]).add(U).add(L),Nt(B.x,B.y,B.z)):Nt(St.x,St.y,0)}for(let yt=1;yt<=h;yt++)for(let St=0;St<K;St++){let z=f?X(E[St],fe[St],Rt):E[St];v?(U.copy(F.normals[yt]).multiplyScalar(z.x),L.copy(F.binormals[yt]).multiplyScalar(z.y),B.copy(S[yt]).add(U).add(L),Nt(B.x,B.y,B.z)):Nt(z.x,z.y,u/h*yt)}for(let yt=g-1;yt>=0;yt--){let St=yt/g,z=d*Math.cos(St*Math.PI/2),Kt=_*Math.sin(St*Math.PI/2)+M;for(let bt=0,Yt=V.length;bt<Yt;bt++){let Ut=X(V[bt],_t[bt],Kt);Nt(Ut.x,Ut.y,u+z)}for(let bt=0,Yt=D.length;bt<Yt;bt++){let Ut=D[bt];Ot=Ct[bt];for(let le=0,qt=Ut.length;le<qt;le++){let P=X(Ut[le],Ot[le],Kt);v?Nt(P.x,P.y+S[h-1].y,S[h-1].x+z):Nt(P.x,P.y,u+z)}}}gt(),Dt();function gt(){let yt=s.length/3;if(f){let St=0,z=K*St;for(let Kt=0;Kt<q;Kt++){let bt=$[Kt];Qt(bt[2]+z,bt[1]+z,bt[0]+z)}St=h+g*2,z=K*St;for(let Kt=0;Kt<q;Kt++){let bt=$[Kt];Qt(bt[0]+z,bt[1]+z,bt[2]+z)}}else{for(let St=0;St<q;St++){let z=$[St];Qt(z[2],z[1],z[0])}for(let St=0;St<q;St++){let z=$[St];Qt(z[0]+K*h,z[1]+K*h,z[2]+K*h)}}i.addGroup(yt,s.length/3-yt,0)}function Dt(){let yt=s.length/3,St=0;jt(V,St),St+=V.length;for(let z=0,Kt=D.length;z<Kt;z++){let bt=D[z];jt(bt,St),St+=bt.length}i.addGroup(yt,s.length/3-yt,1)}function jt(yt,St){let z=yt.length;for(;--z>=0;){let Kt=z,bt=z-1;bt<0&&(bt=yt.length-1);for(let Yt=0,Ut=h+g*2;Yt<Ut;Yt++){let le=K*Yt,qt=K*(Yt+1),P=St+Kt+le,T=St+bt+le,tt=St+bt+qt,ut=St+Kt+qt;ue(P,T,tt,ut)}}}function Nt(yt,St,z){c.push(yt),c.push(St),c.push(z)}function Qt(yt,St,z){ae(yt),ae(St),ae(z);let Kt=s.length/3,bt=w.generateTopUV(i,s,Kt-3,Kt-2,Kt-1);ce(bt[0]),ce(bt[1]),ce(bt[2])}function ue(yt,St,z,Kt){ae(yt),ae(St),ae(Kt),ae(St),ae(z),ae(Kt);let bt=s.length/3,Yt=w.generateSideWallUV(i,s,bt-6,bt-3,bt-2,bt-1);ce(Yt[0]),ce(Yt[1]),ce(Yt[3]),ce(Yt[1]),ce(Yt[2]),ce(Yt[3])}function ae(yt){s.push(c[yt*3+0]),s.push(c[yt*3+1]),s.push(c[yt*3+2])}function ce(yt){r.push(yt.x),r.push(yt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return q1(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new xh[s.type]().fromJSON(s)),new n(i,t.options)}},Y1={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],h=t[s*3+1];return[new Tt(r,o),new Tt(a,c),new Tt(l,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],h=t[i*3+1],u=t[i*3+2],f=t[s*3],d=t[s*3+1],_=t[s*3+2],M=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Tt(o,1-c),new Tt(l,1-u),new Tt(f,1-_),new Tt(M,1-m)]:[new Tt(a,1-c),new Tt(h,1-u),new Tt(d,1-_),new Tt(g,1-m)]}};function q1(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var $a=class n extends yh{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var Co=class n extends ke{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,f=(e-t)/s,d=new O,_=new Tt;for(let M=0;M<=s;M++){for(let g=0;g<=i;g++){let m=r+g/i*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),c.push(d.x,d.y,d.z),l.push(0,0,1),_.x=(d.x/e+1)/2,_.y=(d.y/e+1)/2,h.push(_.x,_.y)}u+=f}for(let M=0;M<s;M++){let g=M*(i+1);for(let m=0;m<i;m++){let w=m+g,S=w,v=w+i+1,F=w+i+2,L=w+1;a.push(S,v,L),a.push(v,F,L)}}this.setIndex(a),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(l,3)),this.setAttribute("uv",new xe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var yn=class n extends ke{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new O,f=new O,d=[],_=[],M=[],g=[];for(let m=0;m<=i;m++){let w=[],S=m/i,v=0;m===0&&o===0?v=.5/e:m===i&&c===Math.PI&&(v=-.5/e);for(let F=0;F<=e;F++){let L=F/e;u.x=-t*Math.cos(s+L*r)*Math.sin(o+S*a),u.y=t*Math.cos(o+S*a),u.z=t*Math.sin(s+L*r)*Math.sin(o+S*a),_.push(u.x,u.y,u.z),f.copy(u).normalize(),M.push(f.x,f.y,f.z),g.push(L+v,1-S),w.push(l++)}h.push(w)}for(let m=0;m<i;m++)for(let w=0;w<e;w++){let S=h[m][w+1],v=h[m][w],F=h[m+1][w],L=h[m+1][w+1];(m!==0||o>0)&&d.push(S,v,L),(m!==i-1||c<Math.PI)&&d.push(v,F,L)}this.setIndex(d),this.setAttribute("position",new xe(_,3)),this.setAttribute("normal",new xe(M,3)),this.setAttribute("uv",new xe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var us=class n extends ke{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new O,u=new O,f=new O;for(let d=0;d<=i;d++)for(let _=0;_<=s;_++){let M=_/s*r,g=d/i*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(M),u.y=(t+e*Math.cos(g))*Math.sin(M),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(_/s),l.push(d/i)}for(let d=1;d<=i;d++)for(let _=1;_<=s;_++){let M=(s+1)*d+_-1,g=(s+1)*(d-1)+_-1,m=(s+1)*(d-1)+_,w=(s+1)*d+_;o.push(M,g,w),o.push(g,m,w)}this.setIndex(o),this.setAttribute("position",new xe(a,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ee=class extends Gi{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ld,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function wa(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Z1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Lr=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Eh=class extends Lr{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hf,endingEnd:Hf}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case kf:r=t,a=2*e-i;break;case Vf:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case kf:o=t,c=2*i-e;break;case Vf:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(i-e)/(s-e),M=_*_,g=M*_,m=-f*g+2*f*M-f*_,w=(1+f)*g+(-1.5-2*f)*M+(-.5+f)*_+1,S=(-1-d)*g+(1.5+d)*M+.5*_,v=d*g-d*M;for(let F=0;F!==a;++F)r[F]=m*o[h+F]+w*o[l+F]+S*o[c+F]+v*o[u+F];return r}},bh=class extends Lr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(i-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Sh=class extends Lr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},fi=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=wa(e,this.TimeBufferType),this.values=wa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:wa(t.times,Array),values:wa(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Sh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new bh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Eh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ia:e=this.InterpolantFactoryMethodDiscrete;break;case Zl:e=this.InterpolantFactoryMethodLinear;break;case Ic:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ia;case this.InterpolantFactoryMethodLinear:return Zl;case this.InterpolantFactoryMethodSmooth:return Ic}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Z1(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ic,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*i,f=u-i,d=u+i;for(let _=0;_!==i;++_){let M=e[u+_];if(M!==e[f+_]||M!==e[d+_]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};fi.prototype.TimeBufferType=Float32Array;fi.prototype.ValueBufferType=Float32Array;fi.prototype.DefaultInterpolation=Zl;var Hs=class extends fi{constructor(t,e,i){super(t,e,i)}};Hs.prototype.ValueTypeName="bool";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=Ia;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;var wh=class extends fi{};wh.prototype.ValueTypeName="color";var Th=class extends fi{};Th.prototype.ValueTypeName="number";var Ah=class extends Lr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)hi.slerpFlat(r,0,o,l-a,o,l,c);return r}},ja=class extends fi{InterpolantFactoryMethodLinear(t){return new Ah(this.times,this.values,this.getValueSize(),t)}};ja.prototype.ValueTypeName="quaternion";ja.prototype.InterpolantFactoryMethodSmooth=void 0;var ks=class extends fi{constructor(t,e,i){super(t,e,i)}};ks.prototype.ValueTypeName="string";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=Ia;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;var Rh=class extends fi{};Rh.prototype.ValueTypeName="vector";var Wu={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Ch=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],_=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null}}},K1=new Ch,Po=class{constructor(t){this.manager=t!==void 0?t:K1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Po.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ph=class extends Po{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Wu.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=xo("img");function c(){h(),Wu.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var Io=class extends Po{constructor(t){super(t)}load(t,e,i,s){let r=new In,o=new Ph(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}},Lo=class extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new he(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Do=class extends Lo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new he(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},cl=new Ge,Xu=new O,Yu=new O,Qa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yo,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Xu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xu),Yu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yu),e.updateMatrixWorld(),cl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(cl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var qu=new Ge,io=new O,ll=new O,Ih=class extends Qa{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Tt(4,2),this._viewportCount=6,this._viewports=[new Fe(2,1,1,1),new Fe(0,1,1,1),new Fe(3,1,1,1),new Fe(1,1,1,1),new Fe(3,0,1,1),new Fe(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),io.setFromMatrixPosition(t.matrixWorld),i.position.copy(io),ll.copy(i.position),ll.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(ll),i.updateMatrixWorld(),s.makeTranslation(-io.x,-io.y,-io.z),qu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qu)}},Uo=class extends Lo{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ih}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Lh=class extends Qa{constructor(){super(new Ba(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},No=class extends Lo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new Lh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var zo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Zu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Zu(){return performance.now()}var Yh="\\[\\]\\.:\\/",J1=new RegExp("["+Yh+"]","g"),qh="[^"+Yh+"]",$1="[^"+Yh.replace("\\.","")+"]",j1=/((?:WC+[\/:])*)/.source.replace("WC",qh),Q1=/(WCOD+)?/.source.replace("WCOD",$1),ty=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qh),ey=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qh),ny=new RegExp("^"+j1+Q1+ty+ey+"$"),iy=["material","materials","bones","map"],Dh=class{constructor(t,e,i){let s=i||Je.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Je=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(J1,"")}static parseTrackName(t){let e=ny.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);iy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Je.Composite=Dh;Je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Je.prototype.GetterByBindingType=[Je.prototype._getValue_direct,Je.prototype._getValue_array,Je.prototype._getValue_arrayElement,Je.prototype._getValue_toArray];Je.prototype.SetterByBindingTypeAndVersioning=[[Je.prototype._setValue_direct,Je.prototype._setValue_direct_setNeedsUpdate,Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_array,Je.prototype._setValue_array_setNeedsUpdate,Je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_arrayElement,Je.prototype._setValue_arrayElement_setNeedsUpdate,Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_fromArray,Je.prototype._setValue_fromArray_setNeedsUpdate,Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tM=new Float32Array(1);var Ku=new Ge,Dr=class{constructor(t,e,i=0,s=1/0){this.ray=new zs(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new _o,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ku.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ku),this}intersectObject(t,e=!0,i=[]){return Uh(t,this,i,e),i.sort(Ju),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Uh(t[s],this,i,e);return i.sort(Ju),i}};function Ju(n,t){return n.distance-t.distance}function Uh(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Uh(r[o],t,e,!0)}}var Vs=class{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(gn(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var tc=class extends ki{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nh}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nh);var Sd={type:"change"},Jh={type:"start"},Td={type:"end"},oc=new zs,wd=new ai,sy=Math.cos(70*fd.DEG2RAD),un=new O,Fn=2*Math.PI,He={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Kh=1e-6,ac=class extends tc{constructor(t,e=null){super(t,e),this.state=He.NONE,this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gs.ROTATE,MIDDLE:Gs.DOLLY,RIGHT:Gs.PAN},this.touches={ONE:Ei.ROTATE,TWO:Ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new hi,this._lastTargetPosition=new O,this._quat=new hi().setFromUnitVectors(t.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Vs,this._sphericalDelta=new Vs,this._scale=1,this._panOffset=new O,this._rotateStart=new Tt,this._rotateEnd=new Tt,this._rotateDelta=new Tt,this._panStart=new Tt,this._panEnd=new Tt,this._panDelta=new Tt,this._dollyStart=new Tt,this._dollyEnd=new Tt,this._dollyDelta=new Tt,this._dollyDirection=new O,this._mouse=new Tt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=oy.bind(this),this._onPointerDown=ry.bind(this),this._onPointerUp=ay.bind(this),this._onContextMenu=py.bind(this),this._onMouseWheel=hy.bind(this),this._onKeyDown=fy.bind(this),this._onTouchStart=uy.bind(this),this._onTouchMove=dy.bind(this),this._onMouseDown=cy.bind(this),this._onMouseMove=ly.bind(this),this._interceptControlDown=my.bind(this),this._interceptControlUp=gy.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sd),this.update(),this.state=He.NONE}update(t=null){let e=this.object.position;un.copy(e).sub(this.target),un.applyQuaternion(this._quat),this._spherical.setFromVector3(un),this.autoRotate&&this.state===He.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Fn:i>Math.PI&&(i-=Fn),s<-Math.PI?s+=Fn:s>Math.PI&&(s-=Fn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(un.setFromSpherical(this._spherical),un.applyQuaternion(this._quatInverse),e.copy(this.target).add(un),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=un.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new O(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=un.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(oc.origin.copy(this.object.position),oc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(oc.direction))<sy?this.object.lookAt(this.target):(wd.setFromNormalAndCoplanarPoint(this.object.up,this.target),oc.intersectPlane(wd,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Kh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Kh||this._lastTargetPosition.distanceToSquared(this.target)>Kh?(this.dispatchEvent(Sd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Fn/60*this.autoRotateSpeed*t:Fn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){un.setFromMatrixColumn(e,0),un.multiplyScalar(-t),this._panOffset.add(un)}_panUp(t,e){this.screenSpacePanning===!0?un.setFromMatrixColumn(e,1):(un.setFromMatrixColumn(e,0),un.crossVectors(this.object.up,un)),un.multiplyScalar(t),this._panOffset.add(un)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;un.copy(s).sub(this.target);let r=un.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Fn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Fn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Fn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Fn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Tt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function ry(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function oy(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function ay(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Td),this.state=He.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function cy(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Gs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=He.DOLLY;break;case Gs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=He.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=He.ROTATE}break;case Gs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=He.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=He.PAN}break;default:this.state=He.NONE}this.state!==He.NONE&&this.dispatchEvent(Jh)}function ly(n){switch(this.state){case He.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case He.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case He.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function hy(n){this.enabled===!1||this.enableZoom===!1||this.state!==He.NONE||(n.preventDefault(),this.dispatchEvent(Jh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Td))}function fy(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function uy(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ei.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=He.TOUCH_ROTATE;break;case Ei.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=He.TOUCH_PAN;break;default:this.state=He.NONE}break;case 2:switch(this.touches.TWO){case Ei.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=He.TOUCH_DOLLY_PAN;break;case Ei.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=He.TOUCH_DOLLY_ROTATE;break;default:this.state=He.NONE}break;default:this.state=He.NONE}this.state!==He.NONE&&this.dispatchEvent(Jh)}function dy(n){switch(this._trackPointer(n),this.state){case He.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case He.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case He.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case He.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=He.NONE}}function py(n){this.enabled!==!1&&n.preventDefault()}function my(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gy(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function cc(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new ke,l=0;for(let h=0;h<n.length;++h){let u=n[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0,u=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let _=0;_<d.count;++_)u.push(d.getX(_)+h);h+=n[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Ad(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let M=0;M<o[h].length;++M)d.push(o[h][M][f]);let _=Ad(d);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(_)}}return c}function Ad(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){let h=n[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Sn(o,e,i),c=0;for(let l=0;l<n.length;++l){let h=n[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let f=0,d=h.count;f<d;f++)for(let _=0;_<e;_++){let M=h.getComponent(f,_);a.setComponent(f+u,_,M)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Ws=16,Xs=8,jh=6;function Cd(n){return()=>(n=n*1664525+1013904223>>>0,n/4294967296)}var xy=n=>"#"+("00000"+n.toString(16)).slice(-6);function $e(n,t){let e=Math.min(255,Math.max(0,(n>>16&255)*t)),i=Math.min(255,Math.max(0,(n>>8&255)*t)),s=Math.min(255,Math.max(0,(n&255)*t));return"rgb("+(e|0)+","+(i|0)+","+(s|0)+")"}var te={noise:(n,t)=>(e,i)=>{for(let s=0;s<16;s++)for(let r=0;r<16;r++)e.fillStyle=$e(n,1-t/2+i()*t),e.fillRect(s,r,1,1)},grassTop:(n,t)=>{te.noise(11132046,.16)(n,t);for(let e=0;e<14;e++)n.fillStyle=$e(9423992,.95+t()*.1),n.fillRect(t()*16|0,t()*16|0,1,1)},grassSide:(n,t)=>{te.dirt(n,t);for(let e=0;e<16;e++){let i=3+(t()*2.2|0);for(let s=0;s<i;s++)n.fillStyle=$e(11132046,.9+t()*.15),n.fillRect(e,s,1,1)}},dirt:(n,t)=>{te.noise(12094050,.18)(n,t);for(let e=0;e<10;e++)n.fillStyle=$e(10121296,1),n.fillRect(t()*16|0,t()*16|0,1,1)},stone:(n,t)=>{te.noise(11842232,.12)(n,t);for(let e=0;e<6;e++){n.fillStyle=$e(10263202,1);let i=t()*14|0,s=t()*16|0;n.fillRect(i,s,2+(t()*3|0),1)}},sand:(n,t)=>te.noise(15983286,.1)(n,t),pathTop:(n,t)=>{te.noise(15324068,.14)(n,t);for(let e=0;e<12;e++)n.fillStyle=$e(13810058,1),n.fillRect(t()*16|0,t()*16|0,1,1)},pathSide:(n,t)=>{te.dirt(n,t),n.fillStyle=$e(15324068,1),n.fillRect(0,0,16,2)},snowTop:(n,t)=>te.noise(16514047,.05)(n,t),snowSide:(n,t)=>{te.stone(n,t);for(let e=0;e<16;e++){let i=3+(t()*3|0);n.fillStyle=$e(16514047,.97+t()*.03),n.fillRect(e,0,1,i)}},logSide:(n,t)=>{for(let e=0;e<16;e++){let i=e%4===0?8215104:10121298;for(let s=0;s<16;s++)n.fillStyle=$e(i,.9+t()*.2),n.fillRect(e,s,1,1)}},logTop:(n,t)=>{te.noise(14267267,.08)(n,t),n.strokeStyle=$e(11569760,1),n.lineWidth=1,[6,3].forEach(e=>{n.strokeRect(8-e+.5,8-e+.5,e*2-1,e*2-1)}),n.strokeStyle=$e(9071180,1),n.strokeRect(.5,.5,15,15)},leaves:n=>(t,e)=>{te.noise(n,.22)(t,e);for(let i=0;i<22;i++)t.fillStyle=$e(n,.72),t.fillRect(e()*16|0,e()*16|0,1,1);for(let i=0;i<10;i++)t.fillStyle=$e(n,1.12),t.fillRect(e()*16|0,e()*16|0,1,1)},water:(n,t)=>{te.noise(6991592,.08)(n,t);for(let e=0;e<7;e++)n.fillStyle="rgba(255,255,255,0.55)",n.fillRect(t()*13|0,t()*16|0,2+(t()*3|0),1)},birch:(n,t)=>{te.noise(16052454,.06)(n,t);for(let e=0;e<8;e++)n.fillStyle="#5a5050",n.fillRect(t()*14|0,t()*16|0,2+(t()*2|0),1)},cobble:(n,t)=>{te.noise(11052718,.1)(n,t),n.fillStyle=$e(8684172,1);for(let e=0;e<16;e+=4){n.fillRect(0,e,16,1);for(let i=e/4%2*3;i<16;i+=6)n.fillRect(i,e,1,4)}},deep:(n,t)=>te.noise(9341592,.16)(n,t),clay:(n,t)=>{te.noise(12950138,.12)(n,t);for(let e=3;e<16;e+=5)n.fillStyle=$e(11765610,1),n.fillRect(0,e,16,1)},gravel:(n,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++)n.fillStyle=$e([12433068,11051414,13814720][t()*3|0],1),n.fillRect(e,i,1,1)},planks:(n,t)=>{for(let e=0;e<16;e++){let i=e%4===3;for(let s=0;s<16;s++)n.fillStyle=i?"#9a7254":$e(13936760,.92+t()*.12),n.fillRect(s,e,1,1)}for(let e=0;e<16;e+=4)n.fillStyle="#9a7254",n.fillRect(e*3%16,e,1,3)},mossy:(n,t)=>{te.cobble(n,t);for(let e=0;e<40;e++)n.fillStyle=$e(9423992,.9+t()*.2),n.fillRect(t()*16|0,t()*16|0,1,1)},shingle:(n,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=e>>2,r=e%4===3||(i+s*4)%8===0;n.fillStyle=$e(16777215,r?.78:.94+t()*.06),n.fillRect(i,e,1,1)}},plaster:(n,t)=>te.noise(16777215,.07)(n,t),plankGrey:(n,t)=>{for(let e=0;e<16;e++){let i=e%4===3;for(let s=0;s<16;s++)n.fillStyle=$e(16777215,i?.72:.9+t()*.1),n.fillRect(s,e,1,1)}},glass:(n,t)=>{n.fillStyle="#d8f1fa",n.fillRect(0,0,16,16),n.fillStyle="#ffffff",n.fillRect(3,3,1,4),n.fillRect(4,3,1,2),n.fillRect(10,9,1,3),n.fillStyle="#bcd9e6",n.fillRect(0,0,16,1),n.fillRect(0,15,16,1),n.fillRect(0,0,1,16),n.fillRect(15,0,1,16),n.fillRect(7,0,2,16),n.fillRect(0,7,16,2)},bricks:(n,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=e%4===3||(i+(e>>2)%2*4)%8===7;n.fillStyle=s?"#e9e2d6":$e(16777215,.86+t()*.08),n.fillRect(i,e,1,1)}},stoneBrick:(n,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=e%8===7||(i+(e>>3)*8)%16===15;n.fillStyle=s?"#8c8a94":$e(11973820,.9+t()*.12),n.fillRect(i,e,1,1)}},farmland:(n,t)=>{te.noise(8018496,.14)(n,t);for(let e=1;e<16;e+=4)n.fillStyle="#5e4430",n.fillRect(0,e,16,1)},sprucePlank:(n,t)=>{for(let e=0;e<16;e++){let i=e%4===3;for(let s=0;s<16;s++)n.fillStyle=i?"#5e4430":$e(9069640,.9+t()*.12),n.fillRect(s,e,1,1)}for(let e=0;e<16;e+=4)n.fillStyle="#5e4430",n.fillRect(e*5%16,e,1,3)},wheat:(n,t)=>{for(let e=1;e<15;e+=2){let i=9+(t()*5|0);n.fillStyle="#c9b45a",n.fillRect(e,16-i,1,i),n.fillStyle="#f2d36b",n.fillRect(e,16-i,1,4)}},carrot:(n,t)=>{for(let e=2;e<14;e+=3)n.fillStyle="#6faa5e",n.fillRect(e,7,1,6),n.fillRect(e+1,8,1,3),n.fillStyle="#f2963a",n.fillRect(e,13,2,3)},sprout:(n,t)=>{for(let e=1;e<15;e+=3)n.fillStyle="#7fc46a",n.fillRect(e+1,10,1,6),n.fillRect(e,10,3,1),n.fillRect(e+2,12,1,1)},tuft:(n,t)=>{for(let e=1;e<15;e+=2){let i=5+(t()*7|0);n.fillStyle=$e(9423992,.85+t()*.25),n.fillRect(e,16-i,1,i)}},flower:n=>(t,e)=>{t.fillStyle="#6faa5e",t.fillRect(7,8,2,8),t.fillRect(5,11,2,1),t.fillRect(9,13,2,1),t.fillStyle=xy(n),t.fillRect(6,4,4,3),t.fillRect(5,5,6,1),t.fillStyle="#fff6b0",t.fillRect(7,5,2,1)},reed:(n,t)=>{n.fillStyle="#7cb86f";for(let e=3;e<14;e+=3)n.fillRect(e,2+(t()*4|0),1,14);n.fillStyle="#a77a52",n.fillRect(6,2,2,4)},lily:(n,t)=>{n.fillStyle="#84c784",n.beginPath(),n.arc(8,8,6.5,.3,Math.PI*2-.3),n.lineTo(8,8),n.fill(),n.fillStyle="#ffb6c1",n.fillRect(9,6,2,2)}},lt={GRASS_TOP:0,GRASS_SIDE:1,DIRT:2,STONE:3,SAND:4,PATH_TOP:5,PATH_SIDE:6,SNOW_TOP:7,SNOW_SIDE:8,LOG:9,LOG_TOP:10,LEAF_G:11,LEAF_M:12,LEAF_L:13,LEAF_P:14,WATER:15,BIRCH:16,COBBLE:17,DEEP:18,CLAY:19,GRAVEL:20,PLANKS:21,MOSSY:22,LEAF_T:23,TUFT:24,FL_PINK:25,FL_WHITE:26,FL_YELLOW:27,FL_BLUE:28,FL_LAV:29,REED:30,LILY:31,SHINGLE:32,PLASTER:33,PLANK_GREY:34,GLASS:35,BRICKS:36,STONE_BRICK:37,FARMLAND:38,SPRUCE_PLANK:39,WHEAT:40,CARROT:41,SPROUT:42},Pd=[te.grassTop,te.grassSide,te.dirt,te.stone,te.sand,te.pathTop,te.pathSide,te.snowTop,te.snowSide,te.logSide,te.logTop,te.leaves(8834168),te.leaves(8178084),te.leaves(11196796),te.leaves(16167880),te.water,te.birch,te.cobble,te.deep,te.clay,te.gravel,te.planks,te.mossy,te.leaves(7320465),te.tuft,te.flower(16752575),te.flower(16777215),te.flower(16769658),te.flower(10473471),te.flower(13809919),te.reed,te.lily,te.shingle,te.plaster,te.plankGrey,te.glass,te.bricks,te.stoneBrick,te.farmland,te.sprucePlank,te.wheat,te.carrot,te.sprout],ds=null;function _y(){if(ds)return ds;let n=document.createElement("canvas");n.width=Ws*Xs,n.height=Ws*jh;let t=n.getContext("2d");return Pd.forEach((e,i)=>{t.save(),t.translate(i%Xs*Ws,Math.floor(i/Xs)*Ws),t.beginPath(),t.rect(0,0,Ws,Ws),t.clip(),e(t,Cd(101+i*7)),t.restore()}),ds=new _n(n),ds.magFilter=nn,ds.minFilter=nn,ds.generateMipmaps=!1,ds.colorSpace=De,ds}var $h=new Map;function ui(n){if($h.has(n))return $h.get(n);let t=document.createElement("canvas");t.width=t.height=Ws,Pd[n](t.getContext("2d"),Cd(101+n*7));let e=new _n(t);return e.magFilter=nn,e.minFilter=nn,e.generateMipmaps=!1,e.wrapS=e.wrapT=po,e.colorSpace=De,$h.set(n,e),e}var Rd=n=>{let t=n%Xs/Xs,e=1-(Math.floor(n/Xs)+1)/jh,i=8e-4;return[t+i,e+i,t+1/Xs-i,e+1/jh-i]},At={AIR:0,GRASS:1,DIRT:2,STONE:3,SAND:4,PATH:5,SNOW:6,LOG:7,LEAF_G:8,LEAF_M:9,LEAF_L:10,LEAF_P:11,WATER:12,BIRCH:13,COBBLE:14,DEEP:15,CLAY:16,GRAVEL:17,LEAF_T:18,MOSSY:19,PLANKS:20,BRICK:21,FARM:22},Qe=[];Qe[At.GRASS]=[lt.GRASS_TOP,lt.GRASS_SIDE,lt.DIRT];Qe[At.DIRT]=[lt.DIRT,lt.DIRT,lt.DIRT];Qe[At.STONE]=[lt.STONE,lt.STONE,lt.STONE];Qe[At.SAND]=[lt.SAND,lt.SAND,lt.SAND];Qe[At.PATH]=[lt.PATH_TOP,lt.PATH_SIDE,lt.DIRT];Qe[At.SNOW]=[lt.SNOW_TOP,lt.SNOW_SIDE,lt.STONE];Qe[At.LOG]=[lt.LOG_TOP,lt.LOG,lt.LOG_TOP];Qe[At.BIRCH]=[lt.LOG_TOP,lt.BIRCH,lt.LOG_TOP];Qe[At.LEAF_G]=[lt.LEAF_G,lt.LEAF_G,lt.LEAF_G];Qe[At.LEAF_M]=[lt.LEAF_M,lt.LEAF_M,lt.LEAF_M];Qe[At.LEAF_L]=[lt.LEAF_L,lt.LEAF_L,lt.LEAF_L];Qe[At.LEAF_P]=[lt.LEAF_P,lt.LEAF_P,lt.LEAF_P];Qe[At.LEAF_T]=[lt.LEAF_T,lt.LEAF_T,lt.LEAF_T];Qe[At.WATER]=[lt.WATER,lt.WATER,lt.WATER];Qe[At.COBBLE]=[lt.COBBLE,lt.COBBLE,lt.COBBLE];Qe[At.DEEP]=[lt.DEEP,lt.DEEP,lt.DEEP];Qe[At.CLAY]=[lt.CLAY,lt.CLAY,lt.CLAY];Qe[At.GRAVEL]=[lt.GRAVEL,lt.GRAVEL,lt.GRAVEL];Qe[At.BRICK]=[lt.STONE_BRICK,lt.STONE_BRICK,lt.STONE_BRICK];Qe[At.FARM]=[lt.FARMLAND,lt.DIRT,lt.DIRT];Qe[At.MOSSY]=[lt.MOSSY,lt.MOSSY,lt.MOSSY];Qe[At.PLANKS]=[lt.PLANKS,lt.PLANKS,lt.PLANKS];var lc=n=>n===At.LEAF_G||n===At.LEAF_M||n===At.LEAF_L||n===At.LEAF_P||n===At.LEAF_T,Fo=class{constructor(t,e,i,s,r,o){Object.assign(this,{x0:t,y0:e,z0:i,sx:s,sy:r,sz:o}),this.d=new Uint8Array(s*r*o),this.plants=[],this.tint=new Map}idx(t,e,i){let s=t-this.x0,r=e-this.y0,o=i-this.z0;return s<0||r<0||o<0||s>=this.sx||r>=this.sy||o>=this.sz?-1:(r*this.sz+o)*this.sx+s}get(t,e,i){let s=this.idx(t,e,i);return s<0?0:this.d[s]}set(t,e,i,s){let r=this.idx(t,e,i);r>=0&&(this.d[r]=s)}top(t,e){for(let i=this.y0+this.sy-1;i>=this.y0;i--){let s=this.get(t,i,e);if(s&&s!==At.WATER)return i}return null}plant(t,e,i,s,r){this.plants.push([t,e,i,s,r||1])}build(t){let e={p:[],n:[],u:[],c:[]},i={p:[],n:[],u:[],c:[]},s=[{d:[1,0,0],v:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],s:1,b:.84},{d:[-1,0,0],v:[[0,0,1],[0,1,1],[0,1,0],[0,0,0]],s:1,b:.84},{d:[0,1,0],v:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],s:0,b:1},{d:[0,-1,0],v:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],s:2,b:.62},{d:[0,0,1],v:[[1,0,1],[1,1,1],[0,1,1],[0,0,1]],s:1,b:.92},{d:[0,0,-1],v:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],s:1,b:.76}],r=t==null?.88:t;for(let f=0;f<this.sy;f++)for(let d=0;d<this.sz;d++)for(let _=0;_<this.sx;_++){let M=this.d[(f*this.sz+d)*this.sx+_];if(!M)continue;let g=this.x0+_,m=this.y0+f,w=this.z0+d,S=Qe[M];if(!S)continue;let v=this.tint.get((f*this.sz+d)*this.sx+_)||1;s.forEach(F=>{let L=this.get(g+F.d[0],m+F.d[1],w+F.d[2]);if(M===At.WATER){if(L!==At.AIR)return}else if(L&&L!==At.WATER&&!(lc(L)&&!lc(M)))return;if(lc(M)&&lc(L))return;let U=M===At.WATER?i:e,[B,R,E,D]=Rd(S[F.s]),Q=M===At.WATER&&this.get(g,m+1,w)!==At.WATER,$=F.v.map(([_t,Ct,Ot])=>[g+_t,m+(Q&&Ct===1?r:Ct),w+Ot]),V=F.b*v,X=V,K=V,q=V;if(M!==At.WATER&&L===At.WATER){let _t=0,Ct=g+F.d[0],Ot=w+F.d[2];for(let Rt=m+F.d[1];this.get(Ct,Rt,Ot)===At.WATER&&_t<6;Rt++)_t++;let fe=Math.max(.32,1-.2*_t);X=V*fe*.62,K=V*fe*.82,q=V*Math.min(1,fe*1.05)}let W=F.d[1]!==0?[[B,R],[E,R],[E,D],[B,D]]:[[B,R],[B,D],[E,D],[E,R]];[0,1,2,0,2,3].forEach(_t=>{U.p.push(...$[_t]),U.n.push(...F.d),U.u.push(...W[_t]),U.c.push(X,K,q)})})}let o=f=>{let d=new ke;return d.setAttribute("position",new xe(f.p,3)),d.setAttribute("normal",new xe(f.n,3)),d.setAttribute("uv",new xe(f.u,2)),d.setAttribute("color",new xe(f.c,3)),d},a=_y(),c=new Lt(o(e),new Ee({map:a,vertexColors:!0}));c.castShadow=!0,c.receiveShadow=!0,c.userData.keepBatch=!0;let l=new Lt(o(i),new Ee({map:a,vertexColors:!0,transparent:!0,opacity:.84,depthWrite:!1}));l.receiveShadow=!0,l.userData.keepBatch=!0,l.renderOrder=1;let h={p:[],n:[],u:[],c:[]};this.plants.forEach(([f,d,_,M,g])=>{let[m,w,S,v]=Rd(M),F=.9*g,L=.45*g;[[[-L,-L],[L,L]],[[-L,L],[L,-L]]].forEach(([[U,B],[R,E]])=>{let D=[[f+U,d,_+B],[f+R,d,_+E],[f+R,d+F,_+E],[f+U,d+F,_+B]],Q=[[m,w],[S,w],[S,v],[m,v]];[0,1,2,0,2,3].forEach($=>{h.p.push(...D[$]),h.n.push(0,1,0),h.u.push(...Q[$]),h.c.push(1,1,1)})})});let u=new Lt(o(h),new Ee({map:a,vertexColors:!0,alphaTest:.5,side:Cn}));return u.userData.keepBatch=!0,{solid:c,water:l,plants:u}}};function ps(n,t,e,i,s,r){let o={oak:[At.LEAF_G,At.LEAF_L][r()*2|0],birch:At.LEAF_L,mint:At.LEAF_M,cherry:At.LEAF_P,pine:At.LEAF_T}[s]||At.LEAF_G,a=s==="birch"?At.BIRCH:At.LOG,c=(h,u,f,d)=>{n.get(h,u,f)||n.set(h,u,f,d)};if(s==="pine"){let h=6+(r()*3|0);for(let f=0;f<h;f++)n.set(t,e+f,i,At.LOG);let u=2;for(let f=2;f<=h;f++){let d=f===h?0:(h-f)%2===0?Math.max(1,u-1):u;for(let _=-d;_<=d;_++)for(let M=-d;M<=d;M++)Math.abs(_)+Math.abs(M)<=d+(d>1?0:1)&&!(_===0&&M===0&&f<h)&&c(t+_,e+f,i+M,o);f%2===0&&u>1&&f>h/2&&u--}c(t,e+h,i,o),c(t,e+h+1,i,o);return}let l=(s==="birch"?5:4)+(r()*2|0);for(let h=0;h<l;h++)n.set(t,e+h,i,a);for(let h=l-2;h<=l+1;h++){let u=h>=l?1:2;for(let f=-u;f<=u;f++)for(let d=-u;d<=u;d++)u===2&&Math.abs(f)===2&&Math.abs(d)===2&&r()<.75||h===l+1&&Math.abs(f)+Math.abs(d)>1||c(t+f,e+h,i+d,o)}}function Id(n,t,e,i){let s=n.attributes.uv,r=[[i,e],[i,e],[t,i],[t,i],[t,e],[t,e]];for(let o=0;o<6;o++)for(let a=0;a<4;a++){let c=o*4+a;s.setXY(c,s.getX(c)*r[o][0],s.getY(c)*r[o][1])}return s.needsUpdate=!0,n}var zr=16,Bo=n=>{if(typeof n=="number")return n;if(!n)return 16777215;if(n[0]==="#")return parseInt(n.length===4?n.slice(1).split("").map(e=>e+e).join(""):n.slice(1,7),16);let t=n.match(/(\d+)\D+(\d+)\D+(\d+)/);return t?+t[1]<<16|+t[2]<<8|+t[3]:16777215},bi=(n,t)=>{n=Bo(n);let e=i=>Math.max(0,Math.min(255,Math.round(i*t)));return e(n>>16&255)<<16|e(n>>8&255)<<8|e(n&255)},ms=(n,t,e)=>{let i=n*374761393+t*668265263+e*2147483647|0;return i=(i^i>>>13)*1274126177,((i^i>>>16)>>>0)/4294967296};function My(){let n=new Map,t=new Map,e=(s,r,o)=>s+","+r+","+o,i={S:n,G:t,put(s,r,o,a,c){s=Math.round(s),r=Math.round(r),o=Math.round(o),!(r<0)&&(c&&n.has(e(s,r,o))||((c?t:n).set(e(s,r,o),Bo(a)),c||t.delete(e(s,r,o))))},del(s,r,o){n.delete(e(s,r,o)),t.delete(e(s,r,o))},has(s,r,o){return n.has(e(s,r,o))},each(s){for(let r=0;r<20;r++)for(let o=-2;o<zr+2;o++)for(let a=-2;a<zr+2;a++)s(a,r,o)},fill(s,r,o){i.each((a,c,l)=>{s(a+.5,c+.5,l+.5)&&i.put(a,c,l,typeof r=="function"?r(a,c,l):r,o)})},cuboid(s,r,o,a,c,l,h,u){for(let f=r;f<c;f++)for(let d=o;d<l;d++)for(let _=s;_<a;_++)i.put(_,f,d,typeof h=="function"?h(_,f,d):h,u)},cyl(s,r,o,a,c,l,h,u,f){h=h==null?o:h;for(let d=a;d<c;d++){let _=c-a<=1?o:o+(h-o)*(d-a)/(c-a-1);for(let M=-2;M<zr+2;M++)for(let g=-2;g<zr+2;g++){let m=Math.hypot(g+.5-s,M+.5-r);m<=_&&(!u||m>_-u)&&i.put(g,d,M,typeof l=="function"?l(g,d,M):l,f)}}},ell(s,r,o,a,c,l,h,u){i.fill((f,d,_)=>{let M=(f-s)/a,g=(d-r)/c,m=(_-o)/l;return M*M+g*g+m*m<=1&&(!u||u(f,d,_))},h)},log(s,r,o,a,c,l){for(let h=s;h<r;h++)for(let u=0;u<20;u++)for(let f=-2;f<zr+2;f++)Math.hypot(u+.5-o,f+.5-a)<=c&&i.put(h,u,f,typeof l=="function"?l(h,u,f):l)},top(s,r){for(let o=19;o>=0;o--)if(i.has(s,o,r))return o;return-1},sprinkle(s,r,o,a){s.forEach(([c,l],h)=>{let u=r[h%r.length];if(!u)return;let f=-1;for(let d=0;d<(a||o||1);d++)for(let _=0;_<(o||1);_++)f=Math.max(f,i.top(c+_,l+d));for(let d=0;d<(a||o||1);d++)for(let _=0;_<(o||1);_++)i.put(c+_,f+1,l+d,u)})}};return i}var ht=8,Qh=[[4,5],[9,4],[6,9],[10,9],[3,8],[8,11],[11,6],[5,12]],Ld={bowl(n,t){n.cyl(ht,ht,3.2,0,1,14930886),n.cyl(ht,ht,3.2,1,2,16777215),n.cyl(ht,ht,3.8,2,6,t.soup||"#f3d9a8",6.2),n.cyl(ht,ht,4.2,1,7,(e,i)=>i===6?16165309:bi(16777215,.93+i*.012),7.6,1.2),t.noodle&&n.fill((e,i,s)=>i>5&&i<6.9&&Math.hypot(e-ht,s-ht)<5.6&&(Math.floor(e)+Math.floor(s)*2)%5===0,t.noodle),n.sprinkle(Qh.slice(0,6),t.top||[],2,2),t.egg&&(n.cuboid(9,6,9,12,7,11,16777215),n.put(10,7,10,16761402))},pot(n,t){n.cyl(ht,ht,6.8,0,6,(e,i)=>i===5?10132136:9079448,6.8,1.1),n.cyl(ht,ht,6,0,1,7631999),n.cyl(ht,ht,5.8,1,5,t.soup||"#e8603f"),n.cuboid(0,4,7,1,5,9,7631999),n.cuboid(15,4,7,16,5,9,7631999),n.sprinkle(Qh,t.top||[],2,1)},plate(n,t){n.cyl(ht,ht,6.4,0,1,15260879),n.cyl(ht,ht,7.8,1,2,16777215),n.cyl(ht,ht,6.2,1,2,16183014),t.rice&&n.ell(t.main?5.5:ht,2,ht,t.main?3.6:5,2.8,t.main?4.2:4.6,(e,i,s)=>bi(t.rice,.94+ms(e,i,s)*.1),(e,i)=>i>=2),t.sauce&&n.cyl(t.rice?10.5:ht,ht,t.rice?3.4:5.2,2,3,t.sauce),t.main&&(n.cuboid(8,2,5,13,4,11,t.main),n.cuboid(8,4,5,13,5,11,bi(t.main,1.2))),t.egg&&(n.cyl(4.5,11.5,2.4,2,3,16777215),n.put(4,3,11,16761402)),t.veg&&(n.cuboid(11,2,11,14,3,13,t.veg),n.put(12,3,12,bi(t.veg,.8))),n.sprinkle(Qh,t.dots||[],2,2)},bread(n){n.ell(ht,2.6,ht,7.2,2.6,2.8,15250538,(t,e)=>e>=0);for(let t=3;t<13;t++)for(let e=3;e<6;e++)for(let i=7;i<9;i++)n.del(t,e,i);for(let t=3;t<13;t++)n.put(t,3,7,["#ff8f7a","#7fc46a","#b5654a","#ffb3a3"][(t>>1)%4]),n.put(t,3,8,t%2?"#7fc46a":"#f6e0b8");[3,6,9,12].forEach(t=>{let e=n.top(t,6);n.put(t,e,6,13208126)})},xeo(n){n.fill((t,e,i)=>e<3&&i>=ht&&Math.hypot(t-ht,i-ht)<=7.2-(e>2?1:0),(t,e,i)=>Math.hypot(t-ht,i-ht)>6.3?14262842:e===2?16767338:16172618),[[5,"#ff9f8f"],[7,"#7fc46a"],[9,"#ffffff"],[11,"#7fc46a"]].forEach(([t,e])=>{n.put(t,0,7,e),n.put(t,1,7,e)})},rolls(n,t){n.cyl(ht,ht,7.6,0,1,16777215),[4,8,12].forEach(e=>n.log(2,14,2.6,e,1.7,(i,s,r)=>i===13||i===2?Bo(t.edge):t.fill&&ms(i,s,r)>.86?Bo(t.fill[(i+s)%2]):bi(t.roll,.95+ms(i,s,r)*.12)))},bun(n,t){n.ell(ht,0,ht,6.2,6,6.2,(e,i,s)=>i>4&&Math.hypot(e-ht,s-ht)<1.8?14204580:t.bun,(e,i)=>i>=0),n.cyl(ht,ht,5,0,1,14930886)},skewer(n,t){n.cuboid(0,3,7,16,4,8,12883572),(t.bits||[]).forEach((e,i)=>n.cuboid(2+i*3,1,5,4+i*3+i%2,6,10,(s,r)=>r===5?bi(e,1.2):e))},corn(n){n.log(2,13,2.8,ht,2.4,(t,e,i)=>(t+e+i)%2?16765803:15906874),n.cuboid(13,1,7,16,4,9,12883572),n.cuboid(5,0,3,13,1,6,8373354),n.cuboid(5,0,10,13,1,13,8373354),n.cuboid(6,1,4,11,2,5,6989914)},potato(n){n.ell(ht,2.4,ht,6.5,2.6,3.6,10111578,(t,e)=>e>=0);for(let t=4;t<13;t++)for(let e=7;e<10;e++){let i=n.top(t,e);n.put(t,i,e,16167770)}n.put(4,3,6,6961728),n.put(12,2,10,6961728)},sushi(n,t){[[2,4],[9,9]].forEach(([e,i])=>{n.cuboid(e,0,i,e+5,3,i+3,(s,r,o)=>bi(16777215,.93+ms(s,r,o)*.08)),n.cuboid(e-1,3,i,e+6,4,i+3,t.fish||"#ff9f80"),n.cuboid(e,4,i,e+5,5,i+3,bi(t.fish||"#ff9f80",1.12)),n.cuboid(e+2,0,i-1,e+3,5,i+4,3820090),n.cuboid(e+2,5,i,e+3,6,i+3,3820090)})},onigiri(n){n.fill((t,e,i)=>e<11&&i>5&&i<11&&Math.abs(t-ht)<=(11.5-e)*.55,(t,e,i)=>bi(16777215,.94+ms(t,e,i)*.07)),n.cuboid(5,0,5,11,4,12,3820090)},balls(n,t){n.cyl(ht,ht,7.4,0,1,16777215),[[4,6],[9,5],[12,10],[6,11],[9,9]].forEach(([e,i])=>{n.ell(e,2.6,i,2.3,2.1,2.3,t.ball||"#d99a4e",(s,r)=>r>=1),n.put(e,4,i,t.sauce||"#7a3f2c"),n.put(e-1,4,i,t.sauce||"#7a3f2c"),n.put(e,5,i,8373354)})},kimbap(n){n.cyl(ht,ht,7.4,0,1,16777215),[[4,5],[11,6],[7,11]].forEach(([t,e])=>{n.cyl(t,e,2.8,1,4,3095088),n.cyl(t,e,2.1,1,4,16777215),n.put(t,3,e,16765803),n.put(t-1,3,e,16748378),n.put(t,3,e-1,8373354)})},dumpling(n){[[4,5],[11,6],[7,11]].forEach(([t,e],i)=>{n.ell(t,.5,e,3.6,2.6,2.4,(s,r)=>r===0?14921834:r>=2&&(s+i)%2?15259320:16313560,(s,r)=>r>=0)})},pizza(n){n.fill((t,e,i)=>e<2&&i>2&&Math.abs(t-ht)<=(15-i)*.55,(t,e)=>e===1?16765803:15250538),n.cuboid(1,0,1,15,3,3,14260814),n.cuboid(2,3,1,14,4,3,15250538),[[6,5],[9,6],[7,9],[8,12]].forEach(([t,e])=>n.cuboid(t,2,e,t+2,3,e+2,14241850)),[[5,7],[10,9],[8,4]].forEach(([t,e])=>n.put(t,2,e,8373354))},burger(n){n.cyl(ht,ht,6.2,0,2,15246666),n.cyl(ht,ht,6.6,2,3,8373354),n.cyl(ht,ht,6.4,3,5,8011564),n.cuboid(2,5,2,14,6,14,16765803),n.cyl(ht,ht,5.6,6,7,15224895),n.ell(ht,7,ht,6.4,4.6,6.4,15246666,(t,e)=>e>=7),[[5,6],[9,5],[7,9],[10,9],[6,11]].forEach(([t,e])=>n.put(t,n.top(t,e)+1,e,16774102))},fries(n){[[4,6],[6,8],[8,6],[10,8],[5,9],[9,9],[7,7],[11,6]].forEach(([t,e],i)=>n.cuboid(t,4,e,t+1,11+i%3,e+1,(s,r)=>r>=10+i%3?15906874:16765803)),n.cyl(ht,ht,4.6,0,9,15224895,5.4),n.cuboid(6,3,12,10,6,13,16777215)},drumstick(n){n.ell(6,3.6,ht,4.8,3.6,3.8,(t,e)=>e>5?15250538:14260814,(t,e)=>e>=0),n.log(10,14,3,ht,1.1,16775406),n.ell(14.2,3.4,7,1.4,1.4,1.4,16775406),n.ell(14.2,3.4,9,1.4,1.4,1.4,16775406)},hotdog(n){n.ell(ht,2,ht,7.2,2.4,3.4,15250538,(t,e,i)=>e>=0&&!(e>2&&Math.abs(i-ht)<1.2)),n.log(0,16,3.2,ht,1.6,14241850);for(let t=2;t<14;t++)n.put(t,5,ht-1+(t>>1)%2,16765803)},flan(n){n.cyl(ht,ht,7.4,0,1,16777215),n.cyl(ht,ht,5.4,1,7,(t,e)=>e===6?9062954:16767114,4.2),[[4,8],[11,7],[8,4],[7,12]].forEach(([t,e])=>{n.put(t,5,e,9062954),n.put(t,4,e,9062954)})},glass(n,t){n.cyl(ht,ht,3.6,0,13,15267583,3.6,.9,!0),n.cyl(ht,ht,3.6,0,1,13165810);let e=1;(t.layers||[]).forEach(i=>{n.cyl(ht,ht,2.8,e,e+3,i),e+=3}),n.cyl(ht,ht,2.8,e,e+1,t.top||"#ffffff"),n.cuboid(9,6,8,10,16,9,16748464)},cone(n,t){n.cyl(ht,ht,.8,0,8,(e,i,s)=>(e+i+s)%2?15250538:14260814,3.4),n.ell(ht,10.5,ht,4.4,4,4.4,t.scoop||"#ffb6d0"),n.put(ht,15,ht,15224895),n.put(ht,14,ht,15224895)},cake(n){n.cyl(ht,ht,6.2,0,6,(t,e,i)=>Math.hypot(t+.5-ht,i+.5-ht)>5.3&&(e===2||e===4)?16752575:16774112),n.cyl(ht,ht,6.4,6,7,16777215);for(let t=0;t<8;t++){let e=t/8*Math.PI*2;n.put(ht+Math.cos(e)*5,7,ht+Math.sin(e)*5,16777215)}n.cuboid(7,7,7,9,9,9,15224895),n.put(8,9,8,8373354)},donut(n){n.fill((t,e,i)=>{let s=Math.hypot(t-ht,i-ht);return e<4&&(s-4.4)**2+(e-1.6)**2<=2.9**2},(t,e)=>e>=2?16752575:15250538),[[4,6,16777215],[11,6,10473471],[6,11,16765803],[11,10,16777215],[8,3,10473471]].forEach(([t,e,i])=>n.put(t,n.top(t,e)+1,e,i))},cookie(n){n.cyl(ht,ht,6.6,0,2,(t,e,i)=>bi(15250538,.95+ms(t,e,i)*.1)),n.cyl(ht,ht,5,2,3,15250538),[[5,6],[9,5],[7,9],[11,9],[5,11],[9,12]].forEach(([t,e])=>n.put(t,n.top(t,e),e,6961706))},mochi(n){n.cuboid(1,0,3,15,1,13,14207160),[[5,9,16765414],[11,9,13495501],[8,5,16774880]].forEach(([t,e,i])=>n.ell(t,1,e,3.2,3,3.2,i,(s,r)=>r>=1))},cup(n,t){n.cyl(ht,ht,3.2,0,12,15792383,3.9,.9,!0),n.cyl(ht,ht,3.2,0,1,13690610),n.cyl(ht,ht,2.4,1,10,t.drink||"#d9b08a",3),t.cream&&n.cyl(ht,ht,3,10,12,16777215),t.boba&&[[6,7],[8,9],[10,8],[7,10],[9,6]].forEach(([e,i])=>n.put(e,1,i,3811882)),t.ice&&[[6,7],[9,9]].forEach(([e,i])=>n.cuboid(e,9,i,e+2,11,i+2,16777215,!0)),t.slice&&n.fill((e,i,s)=>e>11&&e<13&&Math.hypot(i-11,s-ht)<2.4,(e,i,s)=>Math.hypot(i-11,s-ht)>1.6?16777215:Bo(t.slice)),n.cyl(ht,ht,4.2,12,13,14215410,4.2,.9,!0),n.cuboid(9,6,8,10,17,9,16748464)},coconut(n){n.ell(ht,4.6,ht,5.8,5,5.8,(t,e,i)=>ms(t,e,i)>.85?6989914:8373354,(t,e)=>e>=0&&e<9),n.cyl(ht,ht,3.2,8,9,16775920),n.cuboid(9,8,8,10,14,9,16748464)},mug(n,t){n.cyl(ht-1,ht,4.2,0,9,16777215,4.2,1),n.cyl(ht-1,ht,4.2,0,1,15128780),n.cyl(ht-1,ht,3.2,1,8,t.drink||"#c98a4a"),n.cuboid(11,2,7,13,3,9,16777215),n.cuboid(11,6,7,13,7,9,16777215),n.cuboid(12,3,7,13,6,9,16777215),[[6,10],[8,12],[7,14]].forEach(([e,i])=>n.put(e,i,ht,16777215,!0))}},vy=[[[1,0,0],[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],.86],[[-1,0,0],[[0,0,1],[0,1,1],[0,1,0],[0,0,0]],.86],[[0,1,0],[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],1],[[0,-1,0],[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],.6],[[0,0,1],[[1,0,1],[1,1,1],[0,1,1],[0,0,1]],.93],[[0,0,-1],[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],.93]];function Dd(n,t,e,i){let s=[],r=[],o=[],a=[],c=new he;n.forEach((h,u)=>{let[f,d,_]=u.split(",").map(Number),M=.94+ms(f,d,_)*.1;vy.forEach(([g,m,w])=>{let S=f+g[0]+","+(d+g[1])+","+(_+g[2]);if(n.has(S)||t&&t.has(S))return;c.setHex(h,De);let v=s.length/3;m.forEach(([F,L,U])=>{s.push((f+F-ht)*e,(d+L)*e,(_+U-ht)*e),r.push(g[0],g[1],g[2]),o.push(c.r*w*M,c.g*w*M,c.b*w*M)}),a.push(v,v+1,v+2,v,v+2,v+3)})});let l=new ke;return l.setAttribute("position",new xe(s,3)),l.setAttribute("normal",new xe(r,3)),l.setAttribute("color",new xe(o,3)),l.setIndex(a),new Lt(l,i)}var Ey=new Ee({vertexColors:!0}),by=new Ee({vertexColors:!0,transparent:!0,opacity:.42,depthWrite:!1}),tf={};function Xi(n,t,e){let i=n+JSON.stringify(t||{});if(!tf[i]){let c=My();(Ld[n]||Ld.bowl)(c,t||{}),tf[i]=c}let s=tf[i],r=(e||.4)/zr,o=new $t,a=Dd(s.S,null,r,Ey);if(a.castShadow=!0,o.add(a),s.G.size){let c=Dd(s.G,s.S,r,by);c.renderOrder=2,o.add(c)}return o}var Sy={land:{W:320,H:236,houses:[[16,116],[52,116],[88,116],[124,116],[172,116],[208,116],[244,116],[16,150],[52,150],[192,23],[66,24],[88,150],[124,150],[16,186],[52,186],[88,186],[124,187],[180,152]],hall:[134,38],pond:[264,206],pondR:[8,4],peak:{x:0,z:-51,R:31,Rp:17,H:16,lot:[28,18],house:[-3.5,-1.5],car:[3.5,4.8],swing:[-8.6,1.6]},back:-92,grid:!0,roads:[[8,110.5,312,110.5],[8,144.5,312,144.5],[8,180.5,206,180.5],[8,214.5,170,214.5],[46,110.5,46,214.5],[160,110.5,160,214.5]],river:[[318,-72],[306,-10],[300,62],[292,110.5],[288,144.5],[282,175],[272,194]],mountains:[[-27,-43,8,13],[-20,-68,8.5,14],[-1,-77,8.5,15],[18,-69,8,14],[30,-54,7,13]],village:{x0:-44,x1:26,z0:4,z1:37,seed:11,streets:[[[0,1.5],[-3,10],[4,19],[-2,28],[5,36]],[[-46,12],[-30,8],[-16,13],[-2,10],[12,6],[24,9],[40,7]],[[-44,30],[-28,26],[-14,31],[0,27],[10,31],[16,27]]]}},port:{W:200,H:360,houses:[[8,132],[8,184],[8,236],[8,288],[168,132],[168,184],[168,236],[168,288],[56,134],[132,51],[16,56],[88,134],[120,134],[56,186],[88,186],[120,186],[60,239],[116,239]],hall:[68,30],pond:[100,318],pondR:[6.5,3.6],peak:{x:0,z:-59,R:26,Rp:15,H:14,lot:[25,16],house:[-1.5,-1],car:[5,4.2],swing:[-7.8,1]},back:-102,grid:!0,roads:[[44.5,124.5,155.5,124.5],[44.5,124.5,44.5,330],[155.5,124.5,155.5,312],[44.5,162.5,155.5,162.5],[44.5,214.5,155.5,214.5],[44.5,274.5,155.5,274.5]],river:[[218,-148],[214,-50],[210,120],[206,230],[200,300],[170,330],[128,322]],mountains:[[-23,-52,7,12],[-15,-78,7.5,13],[0,-85,7.5,14],[15,-78,7,13],[24,-63,6.5,12]],village:{x0:-27,x1:21,z0:-8,z1:50,seed:5,streets:[[[0,-11],[-3,-2],[3,8],[-4,18],[2,27],[-4,37]],[[-28,-4],[-14,-8],[0,-3],[12,-7],[26,-3],[36,-5]],[[-28,16],[-14,20],[0,14],[12,19],[22,15]],[[-27,40],[-14,44],[-4,37]]]}}},sn,Xe,Mn,oe,hf,Ue,Ze,Dn,gs,Zi,dn,Bn;function Xd(n){sn=Sy[n];let t=(o,a)=>[(o-sn.W/2)/4,(a-sn.H/2)/4];Xe=sn.houses.map(([o,a])=>t(o+12,a+11)),Mn=t(sn.hall[0],sn.hall[1]);let e=t(sn.pond[0],sn.pond[1]);oe={x:e[0],z:e[1],rx:sn.pondR[0],rz:sn.pondR[1]},hf=sn.roads.map(([o,a,c,l])=>t(o,a).concat(t(c,l))),Dn=sn.river.map(([o,a])=>{let c=t(o,a);return{x:c[0],z:c[1]}}),gs=sn.mountains.map(o=>[o[0],o[1],o[2]*1.25,o[3]*1.5]);{let o=Dn[0],a=0,c=1e9;gs.forEach(([m,w],S)=>{let v=Math.hypot(m-o.x,w-o.z);v<c&&(c=v,a=S)});let l=gs[a],h=Dn[1].x-l[0],u=Dn[1].z-l[1],f=Math.hypot(h,u)||1;l=gs[a]=[l[0]+h/f*1.5,l[1]+u/f*1.5,Math.max(l[2],8),Math.max(l[3],18)],h=Dn[1].x-l[0],u=Dn[1].z-l[1],f=Math.hypot(h,u)||1,Bn={i:a,x:l[0],z:l[1],r:l[2],h:l[3],dx:h/f,dz:u/f},Dn[0]={x:l[0]+Bn.dx*l[2]*.45,z:l[1]+Bn.dz*l[2]*.45};let d=Dn[Dn.length-1];Math.hypot(d.x-oe.x,d.z-oe.z)<22&&Dn.push({x:oe.x+(d.x-oe.x)*.25,z:oe.z+(d.z-oe.z)*.25});let _=new Fs(Dn.map(m=>new O(m.x,0,m.z))),M=_.getLength(),g=Math.ceil(M/2.5);Dn=_.getSpacedPoints(g).map((m,w)=>{let S=w/g,v=_.getTangentAt(Math.min(1,S)),F=Math.min(1,S/.12,(1-S)/.12),L=Math.sin(S*M/15*Math.PI*2)*3.2*Math.max(0,F);return{x:m.x-v.z*L,z:m.z+v.x*L}})}Zi=Xe.map((o,a)=>sn.faces&&sn.faces[a]||0);let i=sn.W/8+11,s=sn.H/8+11,r=sn.back||-s;Ue={a:i,b:(s-r)/2,cz:(s+r)/2,n:2.6,w:i*2,d:s-r},wy(),Ty(),Ay()}var ef=1.5,Zs=[],Yd=null,be=null;function wi(n,t,e){Zs.push({pts:n,w:t,kind:e})}function ff(n,t){let e=new Fs(n.map(([s,r])=>new O(s,0,r))),i=Math.max(2,Math.ceil(e.getLength()/(t||1)));return e.getSpacedPoints(i).map(s=>({x:s.x,z:s.z}))}function uc(){let t=new Map,e=[];Zs.forEach(i=>{for(let s=1;s<i.pts.length;s++){let r=i.pts[s-1],o=i.pts[s],a=e.length,c=i.w/2+3.5;e.push({a:r,b:o,r:i});for(let l=Math.floor((Math.min(r.x,o.x)-c)/4);l<=Math.floor((Math.max(r.x,o.x)+c)/4);l++)for(let h=Math.floor((Math.min(r.z,o.z)-c)/4);h<=Math.floor((Math.max(r.z,o.z)+c)/4);h++){let u=l+","+h;t.has(u)||t.set(u,[]),t.get(u).push(a)}}}),Yd={C:4,cells:t,segs:e}}function _c(n,t,e){let i=Yd;if(!i)return null;let s=i.cells.get(Math.floor(n/i.C)+","+Math.floor(t/i.C));if(!s)return null;let r=null;for(let o of s){let a=i.segs[o];if(e&&!e(a.r))continue;let{a:c,b:l}=a,h=l.x-c.x,u=l.z-c.z,f=h*h+u*u,d=Math.max(0,Math.min(1,((n-c.x)*h+(t-c.z)*u)/(f||1))),_=c.x+h*d,M=c.z+u*d,g=Math.hypot(n-_,t-M),m=g-a.r.w/2;(!r||m<r.edge)&&(r={d:g,edge:m,r:a.r,x:_,z:M,y:c.y!=null?c.y+(l.y-c.y)*d:null})}return r}var Yi=(n,t,e)=>{let i=_c(n,t,e);return i?i.edge:99},Vo=(n,t,e)=>!!be&&((n-be.x)/(be.rx+(e||0)))**2+((t-be.z)/(be.rz+(e||0)))**2<1;function wy(){Zs=[];let n=sn.peak,t={x:n.x,z:n.z,R:n.R,Rp:n.Rp,H:n.H};t.base=E=>{if(E<=t.Rp)return t.H;if(E>=t.R)return 0;let D=(t.R-E)/(t.R-t.Rp);return t.H*D*D*(3-2*D)};let[e,i]=n.lot;dn={house:9,x0:t.x-e/2,z0:t.z-i/2,x1:t.x+e/2,z1:t.z+i/2,car:[t.x+n.car[0],t.z+n.car[1]],swing:[t.x+n.swing[0],t.z+n.swing[1]]},Xe[9]=[t.x+n.house[0],t.z+n.house[1]],Zi[9]=0,Mn=[t.x,t.z+t.R+6],be={x:Mn[0],z:Mn[1]+2.5,rx:17,rz:8.5};let s=n.legs||4,r=dn.z1+3.4,o=t.z+t.R-2,a=E=>r+(o-r)*E/(s-1),c=E=>Math.max(5,Math.min(n.legW||14,Math.sqrt(Math.max(0,(t.R-2)**2-(E-t.z)**2))-3)),l={x:dn.car[0],z:dn.z1+1.6},h=[{x:l.x,z:l.z},{x:l.x,z:r}],u=1;for(let E=0;E<s;E++)h.push({x:t.x+u*c(a(E)),z:a(E)}),E<s-1&&(h.push({x:t.x+u*c(a(E+1)),z:a(E+1)}),u=-u);let f=h[h.length-1],d=[],_=0;for(let E=2;E<h.length;E++)_+=Math.hypot(h[E].x-h[E-1].x,h[E].z-h[E-1].z);let M=0;for(let E=1;E<h.length;E++){let D=h[E-1],Q=h[E],$=Math.hypot(Q.x-D.x,Q.z-D.z),V=Math.max(1,Math.ceil($/.5));for(let X=E===1?0:1;X<=V;X++){let K=X/V,q=E>=2?M+$*K:0;d.push({x:D.x+(Q.x-D.x)*K,z:D.z+(Q.z-D.z)*K,y:t.H*(1-q/_)})}E>=2&&(M+=$)}t.zig=d,t.legs=[];for(let E=0;E<s;E++){let D=a(E),Q=d.filter(X=>Math.abs(X.z-D)<.01);if(Q.length<2)continue;let $=Q[0],V=Q[Q.length-1];t.legs.push({z:D,xa:$.x,ya:$.y,xb:V.x,yb:V.y})}t.legY=(E,D)=>{let Q=Math.max(0,Math.min(1,(D-E.xa)/(E.xb-E.xa||1)));return E.ya+(E.yb-E.ya)*Q},t.hw=c,t.z0=r,t.zN=o;let g=ff([[f.x,f.z],[f.x+Math.sign(be.x-f.x)*2,f.z+3.5],[be.x-Math.sign(be.x-f.x)*be.rx*.72,be.z]],.5).map(E=>({x:E.x,z:E.z,y:0}));wi(d.concat(g.slice(1)),3,"mtn");let m=Math.floor((s-1)/2),w=h[2+m*2],S=h[3+m*2]||w,v=Math.sign(w.x-t.x)||-1,F=d.reduce((E,D)=>Math.abs(D.x-(w.x+S.x)/2)<.6&&Math.abs(D.z-(w.z+S.z)/2)<.6?D.y:E,t.H/2);t.ledge={x:(w.x+S.x)/2+v*6,z:(w.z+S.z)/2,y:F,r:4.8},Xe[10]=[t.ledge.x,t.ledge.z],Zi[10]=-v*Math.PI/2;let L=ff([[dn.x0-1.2,t.z-1],[t.x-t.Rp-1.5,t.z+1.5],[t.x-t.R*.78,t.z+t.R*.32],[t.x-t.R*.86,t.z+t.R*.7],[t.x-t.R*.62,t.z+t.R+1.5],[be.x-be.rx*.72,be.z-.6]],.5),U=0,B=[];L.forEach((E,D)=>{D&&(U+=Math.hypot(E.x-L[D-1].x,E.z-L[D-1].z)),B.push(U)});let R=B[B.length-1]*.86;wi(L.map((E,D)=>({x:E.x,z:E.z,y:t.H*Math.max(0,1-B[D]/R)})),2,"stairs"),t.foot=f,Ze=t}function Ty(){let n=sn.village||{},t=Go(n.seed||7);if(sn.grid){hf.forEach(([c,l,h,u])=>{let f=Math.hypot(h-c,u-l),d=Math.max(1,Math.ceil(f)),_=[];for(let M=0;M<=d;M++)_.push({x:c+(h-c)*M/d,z:l+(u-l)*M/d});wi(_,f>=40?3:2.1,"main")});let o=hf.filter(c=>c[1]===c[3]).reduce((c,l)=>!c||l[1]<c[1]?l:c,null);o&&wi([{x:be.x,z:be.z+be.rz*.6},{x:be.x,z:o[1]}],3,"main");let a=[];for(let c=0;c<=40;c++){let l=c/40*Math.PI*2;a.push({x:be.x+Math.cos(l)*be.rx*.72,z:be.z+Math.sin(l)*be.rz*.6})}wi(a,1,"plaza"),uc();return}(n.streets||[]).forEach(o=>wi(ff(o,1),3,"main"));{let o=[];for(let a=0;a<=32;a++){let c=a/32*Math.PI*2;o.push({x:be.x+Math.cos(c)*be.rx*.72,z:be.z+Math.sin(c)*be.rz*.72})}wi(o,1,"plaza")}uc();let e=o=>o===16||o===17?7.5:5.6,i=(o,a,c,l)=>o<n.x0||o>n.x1||a<n.z0||a>n.z1||!Si(o,a,c+2)||mi(o,a,c+4)||Ki(o,a)<c+3.5||Vo(o,a,c+1)||Zd(o,a,c+1)||Yi(o,a)<c-1.2?!1:l.every(h=>Math.hypot(h.x-o,h.z-a)>h.r+c+2.5),s=Xe.map((o,a)=>a).filter(o=>o!==9&&o!==10),r=[];for(let o of s.sort((a,c)=>e(c)-e(a))){let a=e(o),c=null;for(let l=0;l<3e3&&!c;l++){let h=n.x0+t()*(n.x1-n.x0),u=n.z0+t()*(n.z1-n.z0),f=l>2e3?1.5:0;i(h,u,a-f,r)&&(c={x:h,z:u})}c||(c={x:Xe[o][0],z:Xe[o][1]}),r.push({x:c.x,z:c.z,r:a,i:o}),Xe[o]=[c.x,c.z]}r.forEach(o=>{let a=_c(o.x,o.z,f=>f.kind==="main")||qd(o.x,o.z);if(!a)return;let c=a.x-o.x,l=a.z-o.z,h=Math.hypot(c,l)||1;Zi[o.i]=Math.atan2(c,l);let u={x:o.x+c/h*(o.r*.5),z:o.z+l/h*(o.r*.5)};h-o.r*.5>.8&&wi([u,{x:a.x,z:a.z}],1.8,"lane")}),uc()}function qd(n,t){let e=null;return Zs.forEach(i=>{if(i.kind==="main")for(let s=1;s<i.pts.length;s++){let r=i.pts[s-1],o=i.pts[s],a=o.x-r.x,c=o.z-r.z,l=a*a+c*c,h=Math.max(0,Math.min(1,((n-r.x)*a+(t-r.z)*c)/(l||1))),u=r.x+a*h,f=r.z+c*h,d=Math.hypot(u-n,f-t);(!e||d<e.d)&&(e={x:u,z:f,d})}}),e}function Ay(){let n=Ze,t=.5,e=n.R+6,i=n.x-e,s=n.z-e,r=Math.ceil(e*2/t)+1,o=new Float32Array(r*r),a=c=>c.kind==="mtn"||c.kind==="stairs";for(let c=0;c<r;c++)for(let l=0;l<r;l++){let h=i+l*t,u=s+c*t,f=Math.hypot(h-n.x,u-n.z),d=n.base(f);if(u>=n.z0&&u<=n.zN&&n.legs.length>1){let g=0;for(;g<n.legs.length-2&&u>n.legs[g+1].z;)g++;let m=n.legs[g],w=n.legs[g+1],S=(u-m.z)/(w.z-m.z||1),v=n.legY(m,h)+(n.legY(w,h)-n.legY(m,h))*S,F=Math.abs(h-n.x),L=n.hw(u);F<=L+1?d=v:F<L+5&&(d=nf(v,d,sf((F-L-1)/4)))}let _=Math.hypot(h-n.ledge.x,u-n.ledge.z);_<n.ledge.r?d=n.ledge.y:_<n.ledge.r+2.5&&(d=nf(n.ledge.y,d,sf((_-n.ledge.r)/2.5)));let M=_c(h,u,a);M&&M.y!=null&&f>n.Rp-.5&&(M.edge<.3?d=M.y:M.edge<2.3&&(d=nf(M.y,d,sf((M.edge-.3)/2)))),f<=n.Rp-.5&&(d=n.H),o[c*r+l]=d}n.grid={x0:i,z0:s,step:t,n:r,v:o}}var nf=(n,t,e)=>n+(t-n)*e;function sf(n){return n=Math.max(0,Math.min(1,n)),n*n*(3-2*n)}var Zd=(n,t,e)=>Math.hypot(n-Ze.x,t-Ze.z)<Ze.R+(e||0),rf=(n,t,e)=>t>dn.z1-1&&t<Ze.zN+3&&Math.abs(n-Ze.x)<Ze.hw(Math.min(t,Ze.zN))+2+(e||0),Kd=(n,t,e)=>Yi(n,t,i=>i.kind==="mtn"||i.kind==="stairs")<(e||0),dc=(n,t,e)=>Math.hypot(n-Ze.ledge.x,t-Ze.ledge.z)<Ze.ledge.r+(e||0);function Ln(n,t){let e=Ze&&Ze.grid;if(!e)return 0;let i=(n-e.x0)/e.step,s=(t-e.z0)/e.step;if(i<0||s<0||i>=e.n-1||s>=e.n-1)return 0;let r=Math.floor(i),o=Math.floor(s),a=i-r,c=s-o,l=e.n,h=e.v;return(h[o*l+r]*(1-a)+h[o*l+r+1]*a)*(1-c)+(h[(o+1)*l+r]*(1-a)+h[(o+1)*l+r+1]*a)*c}var Ud=(n,t,e)=>Zd(n,t,e||0)&&Math.hypot(n-Ze.x,t-Ze.z)>Ze.Rp-.5-(e||0)&&!Kd(n,t,-(e||0))&&!dc(n,t,-(e||0))&&Math.hypot(n-Ze.x,t-Ze.z)<Ze.R-1+(e||0);function Ki(n,t){let e=1e9;for(let i=1;i<Dn.length;i++){let s=Dn[i-1],r=Dn[i],o=r.x-s.x,a=r.z-s.z,c=o*o+a*a,l=Math.max(0,Math.min(1,((n-s.x)*o+(t-s.z)*a)/(c||1)));e=Math.min(e,Math.hypot(n-(s.x+o*l),t-(s.z+a*l)))}return e}var Ho=(n,t,e)=>!!dn&&n>dn.x0-(e||0)&&n<dn.x1+(e||0)&&t>dn.z0-(e||0)&&t<dn.z1+(e||0),Ry=3;var Cy=Ry,dM=Cy/2;function qs(n,t){let e=Ue,i=Math.abs(Math.cos(n)),s=Math.abs(Math.sin(n));return Math.pow(Math.pow(i/e.a,e.n)+Math.pow(s/e.b,e.n),-1/e.n)*(1+.035*Math.sin(3*n+.7)+.025*Math.sin(5*n+2.1)+.015*Math.sin(8*n))*(t||1)}function Si(n,t,e){let i=t-Ue.cz;return Math.hypot(n,i)<qs(Math.atan2(i,n))-(e||0)}var Ti={grass:12576420,grassSide:10474377,dirt:13214334,dirt2:11569768,road:15983293,wall:16774888,wall2:15785156,door:12882799,frame:15323828,trunk:11042910,leaf:[10147472,8834176,11460768],water:9425898,sand:15983549,lily:8701828,roof:{pink:16165309,peach:16368540,blue:10473444,lav:13219054,mint:10738109,yellow:16111752,hall:15834032},flower:[16758465,16777215,16375946,14273008,16763304]},of=new Map;function me(n,t){let e=n+JSON.stringify(t||{});if(!of.has(e)){let i=Object.assign({color:n},t||{});!("map"in i)&&!i.noMap&&(i.map=ui(lt.PLASTER)),delete i.noMap,of.set(e,new Ee(i))}return of.get(e)}var af=new Map;function Ne(n,t,e){let i=n+":"+(t==null?"x":t)+JSON.stringify(e||{});return af.has(i)||af.set(i,new Ee(Object.assign({map:ui(n),color:t==null?16777215:t},e||{}))),af.get(i)}var cf=new Map;function Jd(n,t,e){let i=n.toFixed(3)+","+t.toFixed(3)+","+e.toFixed(3);return cf.has(i)||cf.set(i,Id(new Be(n,t,e),n,t,e)),cf.get(i)}function I(n,t,e,i,s=0,r=0,o=0,a){let c=new Lt(Jd(n,t,e),a&&a.isMaterial?a:me(i,a));return c.position.set(s,r,o),c.castShadow=!0,c.receiveShadow=!0,c}function en(n,t,e,i,s=0,r=0,o=0,a){let c=new Lt(new Be(n,t,e),a&&a.isMaterial?a:me(i,a));return c.position.set(s,r,o),c.castShadow=!0,c.receiveShadow=!0,c}function Go(n){return()=>(n=n*1664525+1013904223>>>0,n/4294967296)}var Gt=(n,t)=>n+Math.random()*(t-n),ti=(n,t,e)=>n+(t-n)*e,mi=(n,t,e=0)=>((n-oe.x)/(oe.rx+e))**2+((t-oe.z)/(oe.rz+e))**2<1;Xd("land");var yc=new tn({transparent:!0,opacity:0,depthWrite:!1}),df=[],gc=[];function Mc(){let n=new Ee({color:12576498,emissive:16765562,emissiveIntensity:0});return df.push(n),n}function xs(n){let t=new wo;t.moveTo(0,-.5),t.bezierCurveTo(-.9,.1,-.5,.75,0,.35),t.bezierCurveTo(.5,.75,.9,.1,0,-.5);let e=new Ja(t,{depth:.18,bevelEnabled:!1,curveSegments:10});return new Lt(e,me(n,{emissive:n,emissiveIntensity:.25}))}function Py(n,t,e){let i=new $t,s=Ne(lt.SHINGLE,e),r=Ne(lt.SPRUCE_PLANK),o=t+1.6,a=0;for(;;a++){let c=o-a,l=a*.5+.25;if(c<=.6)break;i.add(I(n+1,.5,1,0,0,l,c/2-.5,s)),i.add(I(n+1,.5,1,0,0,l,-c/2+.5,s)),c>2.2&&i.add(I(n+.2,.5,c-2,0,0,l,0,r))}return i.add(I(n+1.2,.35,.6,0,0,a*.5+.1,0,r)),i.userData.h=a*.5+.3,i}function $d(){let n=new Ee({color:16773576,emissive:16761963,emissiveIntensity:0,map:ui(lt.PLASTER)});gc.push(n);let t=new $t;return t.add(I(.3,.32,.3,0,0,0,0,n)),t.add(I(.34,.08,.34,4864564,0,.2,0)),t.add(I(.08,.12,.08,4864564,0,.3,0)),t}function Nd(n,t){let e=new $t,i=t?10:5,s=t?7:4,r=t?4:3,o=t?Ti.roof.hall:Ti.roof[n.roof]||Ti.roof.pink,a=Ne(lt.STONE_BRICK),c=Ne(lt.COBBLE),l=Ne(lt.LOG),h=Ne(lt.PLANKS),u=Ne(lt.SPRUCE_PLANK);e.add(I(i+.5,.3,s+.5,0,0,.15,0,a)),e.add(I(i,.9,s,0,0,.3+.45,0,c)),e.add(I(i-.02,r-.9,s-.02,0,0,.3+.9+(r-.9)/2,0,t?Ne(lt.PLASTER,16774114):h));let f=t?[-i/2+.25,-2.6,2.6,i/2-.25]:[-i/2+.25,i/2-.25];[-1,1].forEach(U=>f.forEach(B=>e.add(I(.5,r,.5,0,B,.3+r/2,U*(s/2-.15),l)))),e.add(I(i+.3,.4,s+.3,0,0,.3+r-.2,0,u));let d=Py(i,s,o);d.position.y=.3+r,e.add(d);let _=d.userData.h,M=t?2:1,g=t?2.6:2,m=new $t;m.position.set(-M/2,.3,s/2+.02),e.add(m),m.add(I(M,g,.12,0,M/2,g/2,0,u)),m.add(I(.12,.12,.08,16375946,M-.2,g/2,.08)),e.add(I(M-.04,g-.04,.05,4864560,0,.3+g/2,s/2-.02)),e.userData.hinge=m,e.add(I(M+1,.3,1,0,0,.15,s/2+.7,a)),e.add(I(M+1.2,.2,1,0,0,.3+g+.35,s/2+.5,u)),[-1,1].forEach(U=>{let B=$d();B.position.set(U*(M/2+.4),.3+g-.2,s/2+.2),e.add(B)});let w=Mc();w.map=ui(lt.GLASS),e.userData.wm=w;let S=.3+(t?2.3:1.75),v=t?[-3.6,-1.5,1.5,3.6]:[-1.55,1.55];if(v.forEach(U=>{e.add(I(1.2,1.1,.12,0,U,S,s/2+.02,u)),e.add(I(1,.9,.14,0,U,S,s/2+.04,w))}),[-1,1].forEach(U=>{e.add(I(.12,1.1,1.2,0,U*(i/2+.02),S,0,u)),e.add(I(.14,.9,1,0,U*(i/2+.04),S,0,w))}),t||(v.forEach(U=>{e.add(I(1.2,.3,.4,0,U,S-.7,s/2+.22,u)),[-.35,0,.35].forEach((B,R)=>e.add(I(.22,.22,.22,Ti.flower[R],U+B,S-.45,s/2+.22)))}),e.add(I(1,2,1,0,i/4,.3+r+_*.45,-s/5,c)),e.userData.chimney=new O(i/4,.3+r+_*.45+1.2,-s/5)),n&&n.heart){let U=xs(16744350);U.scale.setScalar(.9),U.position.set(0,.3+r+_*.42,s/2+.42),e.add(U),e.userData.heart=U}let F=null;if(t){[-1.5,1.5].forEach(R=>e.add(I(.6,r,.6,0,R,.3+r/2,s/2+.35,a))),e.add(I(i+.4,.4,1,0,0,.3+r+.1,s/2+.35,a)),e.add(I(.2,3,.2,0,0,.3+r+_+1.4,0,l));let U=I(1.4,.8,.08,16751536,.75,.3+r+_+2.4,0);e.add(U),e.userData.flag=U;let B=new Ee({color:16375946,emissive:16739179,emissiveIntensity:0,map:ui(lt.PLASTER)});F=new Lt(Jd(.7,.7,.7),B),F.position.set(0,.3+r+_*.42,s/2+.95),e.add(F),e.add(I(1.4,1.4,.1,0,0,.3+r+_*.42,s/2+.8,u))}e.userData.top=.3+r+_+(t?3.2:.6);let L=new Lt(new Be(i+.6,r+_+.3,s+.6),yc);return L.position.y=(r+_+.3)/2,e.add(L),e.userData.pick=L,e.userData.bell=F,e.userData.doorZ=s/2+1.3,e}function zd(n,t,e){let i=document.createElement("canvas");i.width=t,i.height=e,n(i.getContext("2d"),t,e);let s=new _n(i);return s.colorSpace=De,s.anisotropy=4,s}function pf(n,t,e,i,s,r){r=r||0,n.userData.wm=s,n.userData.top=i+.9,n.userData.size={cx:r,hw:t/2+.4,hd:e/2+.3};let o=new Lt(new Be(t+.6,i+.3,e+.6),yc);return o.position.set(r,(i+.3)/2,0),n.add(o),n.userData.pick=o,n.userData.doorZ=e/2+1.3,n}function mf(n,t,e,i,s){let r=new $t;r.position.set(-t/2,.3,i),n.add(r),r.add(I(t,e,.1,s,t/2,e/2,0)),r.add(I(.06,.5,.06,14278115,t-.2,e/2,.07)),n.add(I(t-.04,e-.04,.05,3814720,0,.3+e/2,i-.04)),n.userData.hinge=r}function Iy(){let n=new $t,t=6.4,e=5.2,i=3,s=2.8,r=Mc();n.add(I(t+5.4,.25,e+.6,15328478,2.3,.12,0)),n.add(I(t,i,e,16513784,0,.25+i/2,0)),[-2.15,2.15].forEach(_=>{n.add(I(1.7,2.45,.08,3814720,_,.25+1.3,e/2+.01)),n.add(I(1.55,2.3,.1,0,_,.25+1.3,e/2+.03,r))}),mf(n,1.15,2.3,e/2+.03,9067068),n.add(I(t+.3,.18,e+.3,4867664,0,.25+i+.09,0));let o=.25+i+.18,a=me(16645370),c=new Lt(new Be(t-.6,s,e-.4),a);c.position.set(-.3,o+s/2,-.4),c.castShadow=!0,c.receiveShadow=!0,n.add(c),n.add(I(t-.3,.16,e-.1,4867664,-.3,o+s+.08,-.4));let l=e/2-.4+.01-.2;n.add(I(2.9,2.35,.08,3814720,-.3,o+1.2,l+.02));let h=new Lt(new Be(2.7,2.2,.06),new Ee({color:12576498,transparent:!0,opacity:.6,emissive:16765562,emissiveIntensity:0}));h.position.set(-.3,o+1.2,l+.06),n.add(h),df.push(h.material),n.add(I(.05,2.2,.08,3814720,-.3,o+1.2,l+.08)),n.add(I(t-.4,.14,1.5,15328478,-.2,o+.07,e/2+.55));let u=new Lt(new Be(t-.5,.75,.04),new Ee({color:14217722,transparent:!0,opacity:.45}));u.position.set(-.2,o+.52,e/2+1.28),n.add(u),n.add(I(t-.5,.05,.07,3814720,-.2,o+.92,e/2+1.28)),[-2.5,-1.95,1.75,2.3].forEach((_,M)=>{n.add(I(.34,.32,.34,[15921906,9080729][M%2],_,o+.3,e/2+.95));let g=new Lt(new $a(.26,2),me(Ti.leaf[M%3],{}));g.position.set(_,o+.62,e/2+.95),g.castShadow=!0,n.add(g)});let f=xs(16744350);f.scale.setScalar(.55),f.material=new Ee({color:16744350,emissive:16732030,emissiveIntensity:.25}),f.position.set(-2.2,o+2.05,e/2-.55),n.add(f),n.userData.heart=f;let d=t/2+2.3;n.add(I(4.6,2.9,e,16513784,d,.25+1.45,0)),n.add(I(4.8,.16,e+.2,4867664,d,.25+2.98,0)),n.add(I(3.7,2.3,.08,5592926,d,.25+1.15,e/2+.02));for(let _=0;_<6;_++)n.add(I(3.7,.03,.1,7040630,d,.45+_*.38,e/2+.05));n.add(I(.5,.05,.05,16777215,d+1.4,2.95,e/2+.12));{let M=-e/2+.3,g=.9;n.add(I(4.4,.45,g-M+.4,16052716,d,3.31+.22,(M+g)/2));let m=new Lt(new Be(3.8,.06,g-M-.2),new Ee({color:7325932,transparent:!0,opacity:.88,emissive:2789312,emissiveIntensity:.15}));m.position.set(d,3.31+.42,(M+g)/2),n.add(m),n.userData.poolWater=m,n.add(I(.06,.6,.06,13225942,d+1.6,3.31+.75,g-.05)),n.add(I(.06,.6,.06,13225942,d+1.9,3.31+.75,g-.05));let w=new Lt(new us(.32,.1,8,16),me(16748456));w.rotation.x=Math.PI/2,w.position.set(d-.9,3.31+.48,-.6),n.add(w),[-.9,.9].forEach(v=>{n.add(I(.6,.12,1.3,16777215,d+v,3.31+.25,e/2-.85)),n.add(I(.6,.35,.12,16777215,d+v,3.31+.4,e/2-.25))}),n.add(I(.06,1.6,.06,12883572,d+2,3.31+.8,e/2-.6)),n.add(I(1.5,.12,1.5,16165309,d+2,3.31+1.62,e/2-.6));let S=new Lt(new Be(4.6,.7,.04),new Ee({color:14217722,transparent:!0,opacity:.4}));S.position.set(d,3.31+.4,e/2+.08),n.add(S),n.userData.poolSpots=[{x:d-.55,y:3.31+.45,z:g+.05,ry:Math.PI},{x:d+.35,y:3.31+.45,z:g+.05,ry:Math.PI}]}return[-1,1].forEach(_=>n.add(I(.12,.85,.85,0,_*(t/2+.01)-(_>0,0),.25+1.6,-1.2,r))),n.userData.vip=!0,pf(n,t+4.6,e,o+s+.2,r,2.3)}function Ly(){let n=new $t,t=9.2,e=6.6,i=3.8,s=Mc();n.add(I(t+.6,.25,e+.6,15326447,0,.12,0)),n.add(I(t,i,e,14273008,0,.25+i/2,0)),n.add(I(t+.4,.3,e+.4,16165309,0,.25+i+.15,0)),[-2.8,2.8].forEach(o=>{n.add(I(2.6,2,.1,16777215,o,1.5,e/2+.01)),n.add(I(2.4,1.8,.12,0,o,1.5,e/2+.03,s))}),mf(n,1.8,2.4,e/2+.03,15834032),[[-1.4,16773544],[0,16758465],[1.4,10934504]].forEach(([o,a])=>{let c=xs(a);c.scale.setScalar(.45),c.position.set(o,.25+i-.55,e/2+.02),n.add(c)});let r=new Lt(new yn(.55,20,14),me(16027569));return r.position.set(3.2,.25+i+2.2,-1.5),r.castShadow=!0,n.add(r),n.add(I(.18,1.6,.18,3814720,3.2,.25+i+1.2,-1.5)),n.add(I(1.6,.3,1.6,3814720,3.2,.25+i+.45,-1.5)),pf(n,t,e,i+2.4,s)}function Dy(){let n=new $t,t=9.2,e=7,i=3.5,s=Mc();n.add(I(t+.8,.22,e+.8,14605012,0,.11,0)),n.add(I(t,i,e,16513784,0,.22+i/2,0)),[[15895592,0],[3055195,.22],[14826299,.44]].forEach(([l,h])=>{n.add(I(t+.06,.2,e+.06,l,0,.22+i-.55-h,0))}),n.add(I(t+.5,.25,e+.5,15921906,0,.22+i+.12,0));let r=zd((l,h,u)=>{l.fillStyle="#d8f1fa",l.fillRect(0,0,h,u);let f=["#ffb6c1","#f5d888","#a3d9bd","#a6d8e8","#f9c39c","#d9c9f0"];for(let d=0;d<4;d++){l.fillStyle="#c9e7f2",l.fillRect(0,12+d*28,h,3);for(let _=0;_<26;_++)l.fillStyle=f[(_+d)%f.length],l.fillRect(6+_*10,15+d*28,7,10+_%3*3)}},256,128),o=new Ee({map:r,emissive:16773836,emissiveMap:r,emissiveIntensity:.1});[-2.65,2.65].forEach(l=>{n.add(I(3.4,2,.08,14605012,l,1.35,e/2+.01));let h=new Lt(new Be(3.2,1.85,.1),o);h.position.set(l,1.35,e/2+.03),n.add(h)}),mf(n,1.7,2.3,e/2+.03,12576498);let a=zd((l,h,u)=>{l.fillStyle="#ffffff",l.fillRect(0,0,h,u),l.fillStyle="#2e9e5b",l.fillRect(10,18,108,16),l.fillStyle="#f28c28",l.fillRect(10,40,108,16),l.fillStyle="#e23b3b",l.font="bold 86px sans-serif",l.textAlign="center",l.fillText("7",64,98),l.font="bold 20px sans-serif",l.fillText("ELEVEn",64,122)},128,128),c=new Lt(new Be(1.5,1.5,.14),[me(16777215),me(16777215),me(16777215),me(16777215),new Ee({map:a}),me(16777215)]);return c.position.set(t/2-1.1,.22+i+1.05,e/2-.3),c.castShadow=!0,n.add(c),n.add(I(.12,.8,.12,14605012,t/2-1.1,.22+i+.35,e/2-.3)),[[15226446,-.5],[6131664,.45]].forEach(([l,h])=>{n.add(I(.8,1.8,.75,l,t/2+.45,1.12,e/2-1.2+h));let u=I(.04,.9,.55,0,t/2+.86,1.4,e/2-1.2+h,new Ee({color:16775126,emissive:16773808,emissiveIntensity:.25}));n.add(u)}),[-4,-3.2].forEach(l=>n.add(I(.5,.5,.5,15895592,l,.47,e/2+.9))),n.userData.alwaysLit=!0,pf(n,t,e,i+1.9,s)}function Uy(){let n=new $t,t=2500653,e=14278115,i=5202805;n.add(I(1.9,1,4.4,t,0,.95,0)),n.add(I(1.75,.78,2.7,t,0,1.85,-.35)),[[-1,0],[1,0]].forEach(([o])=>n.add(I(.03,.55,2.4,i,o*.885,1.9,-.35))),n.add(I(1.6,.55,.03,i,0,1.9,1.01)),n.add(I(1.6,.55,.03,i,0,1.9,-1.71)),n.add(I(1.92,.06,4.42,e,0,1.46,0)),n.add(I(1.3,.35,.05,1776672,0,1.05,2.21));for(let o=-2;o<=2;o++)n.add(I(.03,.3,.06,e,o*.22,1.05,2.22));[-1,1].forEach(o=>{let a=new Lt(new qe(.17,.17,.08,14),me(16775126,{emissive:16773808,emissiveIntensity:.35}));a.rotation.x=Math.PI/2,a.position.set(o*.72,1.12,2.22),n.add(a),n.add(I(.12,.12,.12,16754253,o*.95,1.5,1.95)),n.add(I(.22,.35,.05,14703183,o*.78,1,-2.22))}),n.add(I(1.94,.18,.2,1776672,0,.5,2.25)),n.add(I(1.94,.18,.2,1776672,0,.5,-2.25));let s=new Lt(new qe(.4,.4,.24,16),me(1776672));s.rotation.x=Math.PI/2,s.position.set(0,1.15,-2.35),n.add(s);let r=new Lt(new qe(.22,.22,.26,12),me(e));return r.rotation.x=Math.PI/2,r.position.set(0,1.15,-2.36),n.add(r),[[-.95,1.45],[.95,1.45],[-.95,-1.4],[.95,-1.4]].forEach(([o,a])=>{let c=new Lt(new qe(.42,.42,.34,14),me(1776672));c.rotation.z=Math.PI/2,c.position.set(o,.42,a),c.castShadow=!0,n.add(c);let l=new Lt(new qe(.22,.22,.36,10),me(e));l.rotation.z=Math.PI/2,l.position.set(o,.42,a),n.add(l)}),n.add(I(1.5,.05,2.2,3816514,0,2.27,-.35)),n}function Ny(n,t){if(!dn)return{posts:[],blocks:[]};let e=dn,i={posts:[],blocks:[]},[s,r]=Xe[e.house],[o,a]=e.car,c=t===Math.PI?e.z0:e.z1,l=Ln(s,r),h=[[s-1.2,s+1.2],[o-1.6,o+1.6]],u=(g,m)=>Math.abs(m-c)<.01&&h.some(([w,S])=>g>w&&g<S),f=(g,m,w,S)=>{let v=Math.hypot(w-g,S-m),F=Math.max(1,Math.round(v/1));for(let L=0;L<F;L++){let U=ti(g,w,(L+.5)/F),B=ti(m,S,(L+.5)/F);if(u(U,B))continue;let R=I(v/F+.02,.55,.22,16052716,U,l+.27,B);R.rotation.y=Math.atan2(w-g,S-m)+Math.PI/2,n.add(R);let E=I(v/F,.32,.3,8831614,U,l+.68,B);E.rotation.y=R.rotation.y,n.add(E),i.posts.push({x:U,z:B,r:.45})}};f(e.x0,e.z0,e.x1,e.z0),f(e.x1,e.z0,e.x1,e.z1),f(e.x1,e.z1,e.x0,e.z1),f(e.x0,e.z1,e.x0,e.z0),i.blocks.push({x:s+5.5,z:r,hw:2.5,hd:2.8});let d=Math.min(c,a)-1.5,_=Math.max(c,a)+.5;n.add(I(3.4,.05,Math.abs(_-d)+1.5,14144203,o,l+.025,(d+_)/2-.5));let M=Uy();return M.position.set(o,l,a),M.rotation.y=t,n.add(M),i.blocks.push({x:o,z:a,hw:1.2,hd:2.4}),i.car=M,i.exit={x:o,z:c+(t===Math.PI?-1.6:1.6)},n.add(I(1.3,.05,Math.abs(r-c),15392719,s,l+.03,(r+c)/2)),i}function Od(){let n=new $t;n.add(I(.16,2.2,.16,9206379,0,1.1,0));let t=new Ee({color:16774351,emissive:16765562,emissiveIntensity:0});return gc.push(t),n.add(I(.5,.5,.5,0,0,2.45,0,t)),n.add(I(.62,.12,.62,9206379,0,2.76,0)),n}var zy=new Ee({vertexColors:!0});function jd(n,t){let e=[];n.traverse(i=>{i.isMesh||e.push(i)}),e.forEach(i=>{let s=i.children.filter(c=>c.isMesh&&!(t&&t.includes(c))&&!c.material.transparent&&!c.material.map);if(s.length<2)return;let r=s.map(c=>{let l=c.geometry.clone();Object.keys(l.attributes).forEach(d=>{d!=="position"&&d!=="normal"&&l.deleteAttribute(d)}),l.index&&(l=l.toNonIndexed()),l.clearGroups(),c.updateMatrix(),l.applyMatrix4(c.matrix);let h=c.material.color,u=l.attributes.position.count,f=new Float32Array(u*3);for(let d=0;d<u;d++)f[d*3]=h.r,f[d*3+1]=h.g,f[d*3+2]=h.b;return l.setAttribute("color",new Sn(f,3)),l}),o=cc(r,!1);if(r.forEach(c=>c.dispose()),!o)return;s.forEach(c=>i.remove(c));let a=new Lt(o,zy);a.castShadow=!0,a.receiveShadow=!0,i.add(a)})}function pc(n,t,e,i,s,r,o){let a=new $t;a.position.set(s,r,o);let c=I(n,t,e,i,0,-t/2,0);return a.add(c),a}var mc=[{hair:5914688,skin:16768198,shirt:12824814,pants:6253194,style:"short",uniform:!0},{hair:3878703,skin:15976614,shirt:12824814,pants:6253194,style:"long",uniform:!0},{hair:11039050,skin:16769744,shirt:12824814,pants:6253194,style:"short",uniform:!0},{hair:3025462,skin:15580570,shirt:10738109,pants:6253178,style:"short"},{hair:2038564,skin:16768198,shirt:16758465,pants:9080760,style:"twin"},{hair:9067068,skin:16175024,shirt:16111752,pants:7170698,style:"cap",cap:15834032},{hair:4864570,skin:15317140,shirt:12824814,pants:6253194,style:"short",glasses:!0,uniform:!0},{hair:13208410,skin:16769744,shirt:10147472,pants:8161960,style:"long"},{hair:3878703,skin:15976614,shirt:12824814,pants:6253194,style:"bun",glasses:!0,uniform:!0},null,{hair:5914688,skin:15580570,shirt:14273008,pants:7170698,style:"long"},{hair:3025462,skin:16768198,shirt:16111752,pants:8161960,style:"bun"},{hair:9067068,skin:15976614,shirt:10473444,pants:6253178,style:"short",glasses:!0},{hair:3878703,skin:15317140,shirt:10738109,pants:7170698,style:"cap",cap:10738109},{hair:13208410,skin:16769744,shirt:13482478,pants:9080760,style:"twin"},{hair:2367010,skin:16175024,shirt:16368540,pants:8161960,style:"short"},{hair:5914688,skin:16768198,shirt:16758465,pants:7170698,style:"long"},{hair:2038564,skin:15580570,shirt:9226408,pants:5196378,style:"cap",cap:16165309},{hair:11039050,skin:16769744,shirt:16111752,pants:9075306,style:"bun"}],uf={her:{hair:3877418,skin:16768198,shirt:16758465,pants:16758465,style:"long",dress:16165309},him:{hair:2367010,skin:15778976,shirt:10473444,pants:6253194,style:"short"}},Fd=[{hair:3878703,skin:15976614,shirt:12824814,pants:6253194,style:"short",uniform:!0},{hair:9067068,skin:16769744,shirt:12824814,pants:6253194,style:"long",uniform:!0},{hair:2367010,skin:15317140,shirt:12824814,pants:6253194,style:"bun",uniform:!0}],pe=1.75/32,Wo=12*pe;function Or(n,t){let e=new he(n);return t&&(e.r=Math.min(1,e.r*t),e.g=Math.min(1,e.g*t),e.b=Math.min(1,e.b*t)),"#"+e.getHexString()}function Qd(n,t){let e=document.createElement("canvas");e.width=e.height=64;let i=e.getContext("2d"),s=(n.hair^n.shirt^n.skin)>>>0,r=()=>(s=s*1664525+1013904223>>>0,s/4294967296),o=(M,g,m,w,S,v)=>{for(let F=0;F<w;F++)for(let L=0;L<m;L++)i.fillStyle=Or(S,1+(r()-.5)*(v==null?.1:v)),i.fillRect(M+L,g+F,1,1)},a=(M,g,m)=>{i.fillStyle=typeof m=="string"?m:Or(m),i.fillRect(M,g,1,1)},c=5981750,l=n.skin,h=n.hair,u=n.shirt,f=n.pants,d=n.style==="long"||n.style==="twin"||n.dress;o(0,0,32,16,l,.06),o(8,0,8,8,h),o(24,8,8,d?8:6,h),[0,16].forEach(M=>{o(M,8,8,d?7:4,h),o(M+(M?6:0),12,2,d?4:2,h)}),o(8,8,8,2,h),a(8,10,h),a(15,10,h),a(9,10,h),n.style==="cap"&&(o(8,0,8,8,n.cap),o(8,8,8,2,n.cap),o(0,8,8,2,n.cap),o(16,8,8,2,n.cap),o(24,8,8,2,n.cap)),[[9,12],[13,12]].forEach(([M,g])=>{if(t){a(M,g+1,"#3a2e33"),a(M+1,g+1,"#3a2e33");return}a(M,g,"#ffffff"),a(M+1,g,"#3a2e33"),a(M,g+1,"#ffffff"),a(M+1,g+1,"#3a2e33")}),a(9,14,"#ffa3b5"),a(14,14,"#ffa3b5"),a(11,14,Or(l,.78)),a(12,14,Or(l,.78)),a(11,15,"#c9707c"),a(12,15,"#c9707c"),n.glasses&&([9,13].forEach(M=>{["#6b5a4e"].forEach(g=>{a(M-1,12,g),a(M+2,12,g),a(M-1,13,g),a(M+2,13,g)})}),a(11,12,"#6b5a4e"),a(12,12,"#6b5a4e")),o(16,16,24,16,u),o(20,16,8,4,u,.05),o(23,20,2,1,l),n.uniform&&(o(22,20,4,1,16777215),o(21,22,2,2,16373355),o(20,31,8,1,9403592)),n.dress?(o(16,26,24,6,n.dress),o(20,25,8,1,Or(n.dress,.9)&&n.dress)):o(16,30,24,2,Or(f,.85)&&f,.05),o(20,22,8,1,u,.25),[[40,16],[32,48]].forEach(([M,g])=>{o(M,g,16,16,u),o(M,g+4+5,16,7,l,.06),o(M+4,g,4,4,u),o(M+8,g,4,4,l)}),[[0,16],[16,48]].forEach(([M,g])=>{o(M,g,16,16,n.dress?l:f),n.dress&&o(M,g+4,16,3,n.dress),o(M,g+4+10,16,2,c,.05),o(M+8,g,4,4,c)});let _=new _n(e);return _.magFilter=nn,_.minFilter=nn,_.generateMipmaps=!1,_.colorSpace=De,_}function Fr(n,t,e,i,s){let r=new Be(n*pe,t*pe,e*pe),o=64,a=(h,u,f,d,_)=>{let M=h/o,g=(h+f)/o,m=1-u/o,w=1-(u+d)/o;return _?[g,m,M,m,g,w,M,w]:[M,m,g,m,M,w,g,w]},c=[a(i+e+n,s+e,e,t),a(i,s+e,e,t),a(i+e,s,n,e),a(i+e+n,s,n,e,!0),a(i+e,s+e,n,t),a(i+2*e+n,s+e,n,t)],l=r.attributes.uv;return c.forEach((h,u)=>{for(let f=0;f<4;f++)l.setXY(u*4+f,h[f*2],h[f*2+1])}),l.needsUpdate=!0,r}function Xo(n){let t=new $t,e={},i=new Ee({map:Qd(n)});e.mat=i,e.look=n;let s=(c,l,h,u)=>{let f=new Lt(c,i);return f.position.set(l,h,u),f.castShadow=!0,f.receiveShadow=!0,f},r=(c,l,h,u)=>{let f=new $t;return f.position.set(c,l,h),f.add(u),f};e.legR=r(-2*pe,12*pe,0,s(Fr(4,12,4,0,16),0,-6*pe,0)),t.add(e.legR),e.legL=r(2*pe,12*pe,0,s(Fr(4,12,4,16,48),0,-6*pe,0)),t.add(e.legL),e.body=s(Fr(8,12,4,16,16),0,18*pe,0),t.add(e.body),e.armR=r(-6*pe,23.5*pe,0,s(Fr(4,12,4,40,16),0,-5.5*pe,0)),t.add(e.armR),e.armL=r(6*pe,23.5*pe,0,s(Fr(4,12,4,32,48),0,-5.5*pe,0)),t.add(e.armL);let o=new $t;o.position.y=24*pe,t.add(o),e.head=o,o.add(s(Fr(8,8,8,0,0),0,4*pe,0));let a=(c,l,h,u,f,d,_)=>{let M=en(l*pe,h*pe,u*pe,c,f*pe,d*pe,_*pe);o.add(M)};if(n.style==="bun"&&a(n.hair,3,3,3,0,9.3,-2),n.style==="twin"&&(a(n.hair,2,4,2,-4.6,3.5,-1.5),a(n.hair,2,4,2,4.6,3.5,-1.5)),n.style==="cap"&&a(n.cap,8,1,3,0,6.5,5),n.style==="long"&&a(n.hair,8,5,1,0,-1.5,-4.5),n.dress){let c=en(9*pe,4*pe,5*pe,n.dress,0,12.5*pe,0);t.add(c)}{let c=new $t;c.position.set(0,-11*pe,1.2*pe),c.visible=!1,c.add(en(9*pe,2.2*pe,2.2*pe,16112774,0,0,0)),c.add(en(1.2*pe,2.8*pe,2.8*pe,11879994,-4.9*pe,0,0)),c.add(en(1.2*pe,2.8*pe,2.8*pe,11879994,4.9*pe,0,0)),c.add(en(6*pe,3.5*pe,.3*pe,16509616,.5*pe,-2.6*pe,.4*pe)),e.armR.add(c),e.scroll=c}return e.kids=t.children.slice(),{g:t,parts:e}}var tp=n=>n.style==="long"||n.style==="twin"||n.style==="bun";function ep(n,t){return!n||!t||t==="f"===tp(n)?n:Object.assign({},n,{style:(t==="f"?{short:"long",cap:"twin"}:{long:"short",twin:"cap",bun:"short"})[n.style]||(t==="f"?"long":"short"),cap:n.cap||n.shirt})}function Bd(n,t){let e=Xo(t);(n.parts.kids||[]).forEach(s=>n.g.remove(s)),e.parts.kids.forEach(s=>n.g.add(s));let i={};Object.keys(n.parts).forEach(s=>{s in e.parts||(i[s]=n.parts[s])}),n.parts=Object.assign(e.parts,i)}function Oy(){let n=new $t,t={},e=16236938,i=14720350,s=16774118;n.add(en(.46,.4,.8,e,0,.5,0)),[-.12,.1].forEach(l=>n.add(en(.48,.06,.12,i,0,.71,l))),n.add(en(.36,.2,.5,s,0,.34,.05)),t.legs=[[-.14,.28],[.14,.28],[-.14,-.28],[.14,-.28]].map(([l,h])=>{let u=pc(.13,.32,.13,e,l,.34,h);return n.add(u),u});let r=new $t;r.position.set(0,.78,.48),n.add(r),t.head=r,r.add(en(.5,.42,.42,e,0,0,0)),r.add(en(.3,.16,.06,s,0,-.1,.21)),[-.15,.15].forEach(l=>{let h=new Lt(new So(.11,.2,4),me(i));h.position.set(l,.29,-.02),h.rotation.y=Math.PI/4,r.add(h);let u=en(.08,.1,.03,4010032,l*.8,.04,.215);r.add(u),(t.eyes=t.eyes||[]).push(u)}),r.add(en(.07,.05,.03,16752048,0,-.04,.23));let o=new $t;o.position.set(0,.62,-.38),n.add(o),t.tail=o;let a=en(.1,.1,.4,e,0,.05,-.18);o.add(a);let c=new $t;return c.position.set(0,.05,-.36),o.add(c),c.add(en(.1,.4,.1,i,0,.18,0)),o.rotation.x=.5,n.scale.setScalar(.6),jd(n,t.eyes),{g:n,parts:t}}function Fy(){let n=new $t,t={},e=16774374,i=13211247;n.add(en(.56,.5,.95,e,0,.62,0)),n.add(en(.58,.3,.4,i,0,.76,-.15)),t.legs=[[-.17,.33],[.17,.33],[-.17,-.33],[.17,-.33]].map(([o,a])=>{let c=pc(.16,.4,.16,e,o,.42,a);return n.add(c),c});let s=new $t;s.position.set(0,.98,.55),n.add(s),t.head=s,s.add(en(.56,.52,.5,e,0,0,0)),s.add(en(.3,.24,.26,e,0,-.1,.34)),s.add(en(.13,.1,.06,4010032,0,-.02,.48)),s.add(en(.1,.12,.06,16748451,.05,-.24,.42)),[-.3,.3].forEach(o=>{let a=pc(.12,.42,.26,i,o,.2,-.02);a.rotation.z=o>0?-.15:.15,s.add(a);let c=en(.08,.11,.03,4010032,o*.45,.08,.26);s.add(c),(t.eyes=t.eyes||[]).push(c)});let r=pc(.12,.42,.12,i,0,.82,-.47);return r.rotation.x=-.9,n.add(r),t.tail=r,n.scale.setScalar(.62),jd(n,t.eyes),{g:n,parts:t}}function Hd(n){let t=new $t,e=[16751211,16777215,16757575][n%3],i=new Lt(new yn(.28,10,8),me(e));if(i.scale.set(.7,.6,1.4),t.add(i),n%3===1){let r=new Lt(new yn(.16,8,6),me(16744272));r.position.set(0,.1,.05),r.scale.set(1,.6,1.4),t.add(r)}let s=new Lt(new So(.22,.35,4),me(e===16777215?16751211:e));return s.rotation.x=Math.PI/2,s.position.z=-.5,t.add(s),t.userData.tail=s,t}function By(n){let t=new $t,e=new Ee({color:n,side:Cn}),i=()=>{let o=new Lt(new ls(.32,.26),e);o.position.x=.17;let a=new $t;return a.add(o),a},s=i(),r=i();return r.scale.x=-1,t.add(s,r),t.userData.l=s,t.userData.r=r,t}function kd(){let n=new $t,t=15392715,e=3.5,i=Ne(lt.LOG),s=Ne(lt.LEAF_P),r=Ne(lt.LEAF_P,16769516),o=-2.2;n.add(I(1.4,e+3.4,1.4,0,o,(e+3.4)/2,-.3,i)),n.add(I(.9,.8,.9,0,o+1.1,.4,-.3,i)),n.add(I(.9,.6,.9,0,o-.9,.3,.3,i)),n.add(I(3.4,.55,.55,0,-.5,e+.05,0,i)),n.add(I(.6,2.2,.6,0,o-1.6,e+2.4,-.3,i)),n.add(I(.6,1.8,.6,0,o+1.4,e+2.6,.6,i)),[[o,e+3.6,-.3,9,2,7,s],[o,e+5.4,-.3,7,1.6,5.4,r],[o,e+6.7,-.3,4.4,1.1,3.4,r],[o-1.2,e+2.4,-.6,5.6,.8,4.6,s],[o+3.6,e+3.4,.4,2,1.4,2.6,s],[o-4.4,e+3.2,-.8,1.6,1.4,2.8,r]].forEach(([h,u,f,d,_,M,g])=>n.add(I(d,_,M,0,h,u,f,g))),[[-1,.4],[1.2,-1.1],[-3.6,1.6],[.6,1.9],[-4.4,-1.4],[2.4,.8]].forEach(([h,u])=>n.add(I(.3,.02,.3,16762070,o+h+1.5,.02,u)));let a=new $t;a.position.set(0,e-.2,0),n.add(a);let c=e-.2-.56;[-.72,.72].forEach(h=>a.add(I(.06,c,.06,t,h,-c/2,0)));let l=I(1.65,.12,.5,0,0,-c,0,Ne(lt.PLANK_GREY,16165309));return a.add(l),n.userData.pivot=a,n.userData.seat=l,n}var gf=[];function Hy(n,t){let e=document.createElement("canvas");e.width=e.height=16;let i=e.getContext("2d"),s=(h,u,f)=>{i.fillStyle=f,i.fillRect(h,u,1,1)},r=[];for(let h=0;h<9;h++)r.push([3+h,12-h]);let o=[];r.forEach(([h,u])=>{o.push([h,u,"#9a6a3e"],[h+1,u,"#6b4526"])}),[[12,2],[13,2],[13,3],[11,1],[12,1],[13,1],[14,1],[14,2],[14,3],[14,4],[10,2],[13,5]].forEach(([h,u])=>o.push([h,u,"#e6e6ee"])),[[12,3],[12,4],[11,3]].forEach(([h,u])=>o.push([h,u,"#b8b8c6"])),[[1,12],[2,11],[1,13],[2,14],[3,14],[1,11],[2,13],[4,14],[0,12],[3,15]].forEach(([h,u])=>o.push([h,u,"#ffffff"])),[[2,12],[3,13]].forEach(([h,u])=>o.push([h,u,"#f6a9bd"])),o.forEach(([h,u])=>{[[-1,0],[1,0],[0,-1],[0,1]].forEach(([f,d])=>s(h+f,u+d,"#4a3020"))}),o.forEach(([h,u,f])=>s(h,u,f));let a=new _n(e);a.magFilter=nn,a.minFilter=nn,a.colorSpace=De;let c=new hs(new Wi({map:a,transparent:!0,depthWrite:!1,depthTest:!1,rotation:n}));c.scale.set(t,t,1),c.renderOrder=5;let l=new O(Math.cos(n+Math.PI/4),Math.sin(n+Math.PI/4),0);return gf.push({sp:c,dir:l,base:null}),c}function ky(n){gf.forEach(t=>{t.base||(t.base=t.sp.position.clone());let e=(Math.sin(n*4)*.5+.5)*.12;t.sp.position.set(t.base.x+t.dir.x*e,t.base.y+t.dir.y*e,t.base.z)})}function Vy(n,t,e){let s=document.createElement("canvas"),r=s.getContext("2d");r.font="800 64px Nunito, sans-serif";let o=Math.ceil(r.measureText(n).width)+40;s.width=o,s.height=100;let a=s.getContext("2d");a.font="800 64px Nunito, sans-serif",a.textAlign="center",a.textBaseline="middle",a.lineJoin="round",t==="#ffffff"&&(a.shadowColor="rgba(40,30,40,.45)",a.shadowBlur=6,a.shadowOffsetY=3),a.fillStyle=t,a.fillText(n,o/2,s.height/2);let c=new _n(s);c.colorSpace=De;let l=new hs(new Wi({map:c,transparent:!0,depthWrite:!1,depthTest:!1}));return l.scale.set(e*o/s.height,e,1),l.renderOrder=5,l}function np(n,t,e,i){let s=document.createElement("canvas");s.width=128,s.height=64;let r=s.getContext("2d");r.font="bold 48px sans-serif",r.fillStyle=t,r.textAlign="center",r.fillText(n,64,50);let o=new hs(new Wi({map:new _n(s),transparent:!0,depthWrite:!1}));return o.scale.set(e,i,1),o.visible=!1,o}function Vd(n,t){return Math.hypot((n-oe.x)/(oe.rx+4.4),(t-oe.z)/(oe.rz+4.4))<1&&!mi(n,t,.4)}function Gy(n){let t=new Fs(Dn.map(o=>new O(o.x,0,o.z))),e=90,i=t.getSpacedPoints(e),s=new In,r=[];return Zs.forEach(o=>{if(o.kind!=="stairs")for(let a=1;a<o.pts.length;a++){let c=o.pts[a-1],l=o.pts[a],h=l.x-c.x,u=l.z-c.z,f=Math.hypot(h,u)||1,d=(c.x+l.x)/2,_=(c.z+l.z)/2;Ki(d,_)>.9||r.some(M=>Math.hypot(M.x-d,M.z-_)<4)||r.push({x:d,z:_,rot:Math.atan2(h,u),w:Math.max(2,o.w)})}}),r.forEach(o=>n.add(ip(o.x,o.z,o.rot,o.w))),{curve:t,glints:[],ftex:s,foam:[],bridges:r,src:i[0]}}function ip(n,t,e,i){let s=new $t;s.position.set(n,0,t),s.rotation.y=e;let r=Ne(lt.PLANKS),o=Ne(lt.LOG);return[0,.25,.5,.25,0].forEach((a,c)=>s.add(I(i,.5,1,0,0,a-.15,c-2,r))),[-1,1].forEach(a=>{[0,.25,.5,.25,0].forEach((c,l)=>{s.add(I(.25,.9,.25,0,a*(i/2-.12),c+.55,l-2,o)),l<4&&s.add(I(.12,.12,1,0,a*(i/2-.12),c+.85+(l<2?.12:-.12),l-1.5,r))})}),s}function Wy(n,t){let e=oe,i=e.rx+2.6,s=e.rz+2.6,r=80,o=[],a=[],c={benches:[],ducks:[],posts:[]};for(let l=0;l<=r;l++){let h=l/r*Math.PI*2,u=Math.cos(h),f=Math.sin(h),d=e.x+u*(i-.75),_=e.z+f*(s-.75),M=e.x+u*(i+.75),g=e.z+f*(s+.75);if(o.push(d,.025,_,M,.025,g),l){let m=l*2;a.push(m-2,m,m-1,m-1,m,m+1)}}for(let l=0;l<r;l++){let h=l/r*Math.PI*2,u=e.x+Math.cos(h)*i,f=e.z+Math.sin(h)*s;if(Ki(u,f)<.6){n.add(ip(u,f,-h+Math.PI/2+Math.PI/2,1.5));break}}[.6,2.2,3.6,5].forEach((l,h)=>{let u=e.x+Math.cos(l)*(i+1.6),f=e.z+Math.sin(l)*(s+1.6);if(Ki(u,f)<2.2||!Si(u,f,1.5))return;let d=new $t;d.position.set(u,0,f),d.rotation.y=Math.atan2(e.x-u,e.z-f),d.add(I(1.5,.08,.45,12883572,0,.45,0)),d.add(I(1.5,.4,.07,12883572,0,.7,-.22)),[-.65,.65].forEach(_=>{d.add(I(.08,.45,.4,9206379,_,.22,0))}),n.add(d),c.posts.push({x:u,z:f,r:.9})});for(let l=0;l<7;l++){let h=l/7*Math.PI*2+.3,u=e.x+Math.cos(h)*(i+3.1),f=e.z+Math.sin(h)*(s+3.1);if(!(Ki(u,f)<2.4||!Si(u,f,1.8))){n.add(I(2,.5,1,0,Math.floor(u)+.5,.25,Math.floor(f)+.5,Ne(lt.PLANKS)));for(let d=0;d<4;d++){let _=Math.floor(u)+.5+(d-1.5)*.45,M=Math.floor(f)+.5+(d%2?.15:-.15);n.add(I(.06,.35,.06,8173679,_,.65,M)),n.add(I(.22,.22,.22,Ti.flower[(l+d)%Ti.flower.length],_,.9,M))}c.posts.push({x:u,z:f,r:1})}}for(let l=0;l<2;l++){let h=new $t;h.add(I(.5,.3,.7,16777215,0,.18,0)),h.add(I(.32,.3,.3,l?16777215:7317610,0,.45,.32)),h.add(I(.18,.08,.16,16098123,0,.42,.53)),[-.12,.12].forEach(u=>h.add(I(.05,.06,.03,3025462,u,.5,.47))),h.add(I(.2,.12,.2,15658734,0,.32,-.38)),h.scale.setScalar(.8),n.add(h),c.ducks.push({g:h,a:l*2.5,sp:l?-.12:.09})}return c}function Xy(n){let t=[],e=[],i=(f,d)=>f.toFixed(2)+","+d.toFixed(2),s=new Map,r=(f,d)=>{let _=i(f,d);return s.has(_)||(s.set(_,t.length),t.push({x:f,z:d}),e.push([])),s.get(_)},o=(f,d,_)=>{if(f===d||e[f].some(g=>g[0]===d))return;let M=Math.hypot(t[f].x-t[d].x,t[f].z-t[d].z);e[f].push([d,M,!!_]),e[d].push([f,M,!!_])},a=[],c=[];Zs.forEach(f=>{let d=[],_=null;f.pts.forEach((M,g)=>{(!_||Math.hypot(M.x-_.x,M.z-_.z)>=2||g===f.pts.length-1)&&(d.push(r(M.x,M.z)),_=M)});for(let M=1;M<d.length;M++)o(d[M-1],d[M],f.kind==="stairs");a.push({r:f,ch:d})}),a.forEach((f,d)=>a.forEach((_,M)=>{M<=d||f.ch.forEach(g=>{let m=-1,w=2.6;_.ch.forEach(S=>{let v=Math.hypot(t[g].x-t[S].x,t[g].z-t[S].z);v<w&&(w=v,m=S)}),m>=0&&o(g,m,f.r.kind==="stairs"||_.r.kind==="stairs")})}));let l=t.map((f,d)=>d);n.forEach(f=>{let d=-1,_=1e9;a.forEach(g=>{g.r.kind!=="stairs"&&g.ch.forEach(m=>{let w=Math.hypot(t[m].x-f.x,t[m].z-f.z);w<_&&(_=w,d=m)})});let M=r(f.x,f.z);d>=0&&o(M,d),c.push(M)});function h(f,d,_){let M=t.map(()=>1/0),g=t.map(()=>-1),m=t.map(()=>!1);for(M[f]=0;;){let S=-1;for(let v=0;v<t.length;v++)!m[v]&&(S<0||M[v]<M[S])&&(S=v);if(S<0||M[S]===1/0||S===d)break;m[S]=!0,e[S].forEach(([v,F,L])=>{_&&L||M[S]+F<M[v]&&(M[v]=M[S]+F,g[v]=S)})}let w=[];for(let S=d;S>=0;S=g[S])w.unshift(t[S]);return w.length&&w[0]===t[f]?w:[t[d]]}function u(f,d,_){let M=0,g=1/0,m=_?new Set(c):null;return t.forEach((w,S)=>{if(m&&m.has(S))return;let v=Math.hypot(w.x-f,w.z-d);v<g&&(g=v,M=S)}),M}return{nodes:t,doorNodes:c,path:h,nearest:u}}var hc=[[0,4870304,12633855,.8,1.35,1],[5,5199526,12633855,.8,1.35,1],[6,16305590,16763296,1.3,1.1,.4],[7.5,12575733,16774374,2.3,1.55,0],[16.5,12575733,16774374,2.3,1.55,0],[18,16236724,16760470,1.3,1.1,.4],[19.2,5265318,12633855,.8,1.35,1],[24,4870304,12633855,.8,1.35,1]];function sp(n){let t=0;for(;t<hc.length-2&&hc[t+1][0]<=n;)t++;let e=hc[t],i=hc[t+1],s=(n-e[0])/(i[0]-e[0]||1),r=new he(e[1]),o=new he(i[1]),a=new he(e[2]),c=new he(i[2]);return{sky:r.lerp(o,s),sun:a.lerp(c,s),power:ti(e[3],i[3],s),amb:ti(e[4],i[4],s),night:ti(e[5],i[5],s)}}function Yy(n,t){t=t||{};let e=(n.clientWidth||innerWidth)<(n.clientHeight||innerHeight)*.9?"port":"land";Xd(e),df=[],gc=[];let i=(()=>{let p=/[?&]hour=([\d.]+)/.exec(location.search);return p?Number(p[1]):null})();i==null&&t.timeMode==="day"&&(i=11),i==null&&t.timeMode==="night"&&(i=22);let s=new Mo({antialias:!0});s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.shadowMap.enabled=!0,s.shadowMap.type=ec,s.domElement.className="village-3d",n.appendChild(s.domElement);let r=new vo;r.fog=new Va(12575733,320,760);let o=new xn(26,1,.5,1400),a=new ac(o,s.domElement);a.enableDamping=!0,a.dampingFactor=.08,a.minDistance=18,a.maxDistance=520,a.minPolarAngle=.15,a.maxPolarAngle=1.32,a.target.set(0,0,1.5),a.screenSpacePanning=!1,a.rotateSpeed=.7,a.panSpeed=1.1,a.keyPanSpeed=22,a.touches={ONE:Ei.PAN,TWO:Ei.DOLLY_PAN};{let p=s.domElement,x=new Map,b=null,C=!1,k=new O,H=new Vs,y=new O,N=new O,j=()=>{let nt=Array.from(x.values());return{a:nt[0],b:nt[1],mx:(nt[0].x+nt[1].x)/2,my:(nt[0].y+nt[1].y)/2,d:Math.hypot(nt[1].x-nt[0].x,nt[1].y-nt[0].y),ang:Math.atan2(nt[1].y-nt[0].y,nt[1].x-nt[0].x)}};p.addEventListener("pointerdown",nt=>{if(!(C||nt.pointerType!=="touch"))if(nt.isPrimary&&(x.clear(),b=null),x.set(nt.pointerId,{x:nt.clientX,y:nt.clientY}),x.size===2){nt.stopImmediatePropagation();let pt=Array.from(x.entries()).find(([Zt])=>Zt!==nt.pointerId);if(pt){C=!0;try{p.dispatchEvent(new PointerEvent("pointerup",{pointerId:pt[0],pointerType:"touch",isPrimary:!0,clientX:pt[1].x,clientY:pt[1].y,bubbles:!0}))}catch{}C=!1}let It=j();b={last:It,moved:0,mode:"",y0a:It.a.y,y0b:It.b.y,x0:It.mx,d0:It.d}}else x.size>2&&nt.stopImmediatePropagation()},{capture:!0}),p.addEventListener("pointermove",nt=>{if(C||nt.pointerType!=="touch"||!x.has(nt.pointerId)||(x.get(nt.pointerId).x=nt.clientX,x.get(nt.pointerId).y=nt.clientY,!b||x.size<2)||(nt.stopImmediatePropagation(),!a.enabled))return;let pt=j(),It=b.last;if(b.moved+=Math.hypot(pt.mx-It.mx,pt.my-It.my)+Math.abs(pt.d-It.d),!b.mode&&b.moved>22){let Zt=pt.a.y-b.y0a,Jt=pt.b.y-b.y0b,Me=(Zt+Jt)/2,Ve=Zt*Jt>0&&Math.min(Math.abs(Zt),Math.abs(Jt))>.3*Math.max(Math.abs(Zt),Math.abs(Jt));b.mode=Ve&&Math.abs(pt.mx-b.x0)<Math.abs(Me)*.7&&Math.abs(pt.d-b.d0)<Math.max(24,Math.abs(Me)*.6)?"tilt":"free"}if(k.copy(o.position).sub(a.target),b.mode==="tilt")H.setFromVector3(k),H.phi=Math.max(a.minPolarAngle,Math.min(a.maxPolarAngle,H.phi-(pt.my-It.my)*.006)),k.setFromSpherical(H),o.position.copy(a.target).add(k);else if(b.mode==="free"){let Zt=pt.ang-It.ang;Zt>Math.PI&&(Zt-=Math.PI*2),Zt<-Math.PI&&(Zt+=Math.PI*2),k.applyAxisAngle(We.DEFAULT_UP,Zt);let Jt=Math.max(a.minDistance,Math.min(a.maxDistance,k.length()*(It.d/Math.max(1,pt.d))));k.setLength(Jt),o.position.copy(a.target).add(k),o.getWorldDirection(N),N.y=0,N.normalize(),y.crossVectors(N,o.up).normalize();let Me=2*Jt*Math.tan(o.fov*Math.PI/360)/(p.clientHeight||innerHeight);c.copy(y).multiplyScalar(-(pt.mx-It.mx)*Me).addScaledVector(N,(pt.my-It.my)*Me*1.4),a.target.add(c),o.position.add(c)}b.last=pt,a.update()},{capture:!0});let rt=nt=>{C||nt.pointerType!=="touch"||(b&&x.has(nt.pointerId)&&nt.stopImmediatePropagation(),x.delete(nt.pointerId),x.size<2&&(b=null))};p.addEventListener("pointerup",rt,{capture:!0}),p.addEventListener("pointercancel",rt,{capture:!0});let Et=nt=>{nt.pointerType==="touch"&&nt.target!==p&&(x.delete(nt.pointerId),x.size<2&&(b=null))};window.addEventListener("pointerup",Et,!0),window.addEventListener("pointercancel",Et,!0)}s.domElement.tabIndex=0,s.domElement.style.outline="none",a.listenToKeyEvents(s.domElement);let c=new O,l=new O,h=new O;function u(p,x){o.getWorldDirection(h),h.y=0,h.normalize(),l.crossVectors(h,o.up).normalize();let b=o.position.distanceTo(a.target)*.0016;c.copy(l).multiplyScalar(p*b).addScaledVector(h,-x*b),a.target.add(c),o.position.add(c)}s.domElement.addEventListener("wheel",p=>{!p.ctrlKey&&p.deltaMode===0&&(Math.abs(p.deltaX)>.01||Math.abs(p.deltaY)<40)&&(p.preventDefault(),p.stopImmediatePropagation(),u(p.deltaX,p.deltaY))},{capture:!0,passive:!1});function f(){let p=a.target,x=Ue.w/2,b=Ue.d/2,C=Math.max(-x,Math.min(x,p.x)),k=Math.max(Ue.cz-b,Math.min(Ue.cz+b,p.z));(C!==p.x||k!==p.z||p.y!==0)&&(c.set(C-p.x,-p.y,k-p.z),p.add(c),o.position.add(c))}a.addEventListener("change",f);let d=new Do(16777215,12048288,1);r.add(d);let _=new No(16777215,1.5);_.castShadow=!0,_.shadow.mapSize.set(2048,2048),Object.assign(_.shadow.camera,{left:-Ue.a-6,right:Ue.a+6,top:Ue.b+10,bottom:-Ue.b-10,near:1,far:260}),_.shadow.bias=-6e-4,_.shadow.normalBias=.03,r.add(_),r.add(_.target);let M=[],g=new jn({uniforms:{top:{value:new he(9356778)},bottom:{value:new he(14216952)}},vertexShader:"varying float vY; void main(){ vY = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 bottom; varying float vY; void main(){ float k = smoothstep(-0.15, 0.75, vY); gl_FragColor = vec4(mix(bottom, top, k), 1.0); }",side:Pn,depthWrite:!1,fog:!1}),m=new Lt(new yn(480,24,14),g);m.renderOrder=-1,r.add(m);let w=new Lt(new Be(7,7,7),new tn({color:16771496,fog:!1})),S=new Lt(new Be(5,5,5),new tn({color:16052735,fog:!1}));r.add(w,S);let v=new ke,F=[];for(let p=0;p<1400;p++){let x=Math.random()*Math.PI*2,b=Math.acos(1-Math.random()*1.85);F.push(Math.cos(x)*Math.sin(b)*450,Math.cos(b)*450+20,Math.sin(x)*Math.sin(b)*450)}v.setAttribute("position",new xe(F,3));let L=new Os(v,new fs({color:16776168,size:3.2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,blending:uo,depthWrite:!1}));r.add(L);let U=[];for(let p=0;p<6;p++){let x=new $t,b=new Ee({color:16777215,transparent:!0,opacity:.92});for(let C=0;C<5;C++){let k=new Lt(new Be(Gt(3,6),1.5,Gt(3,5)),b);k.position.set(C*2.6-5,0,Gt(-1.5,1.5)),x.add(k)}x.position.set(Gt(-90,90),Gt(34,46),Gt(-90,-40)),x.userData.speed=Gt(.6,1.4),x.userData.mat=b,U.push(x),r.add(x)}let B=new $t;B.mat=new Ee({color:16777215,transparent:!0,opacity:.9,fog:!1});for(let p=0;p<11;p++){let x=p/11*Math.PI*2+Gt(-.15,.15),b=qs(x)+Gt(1,7),C=[];for(let H=0;H<5;H++){let y=new Be(Math.round(Gt(2,5)),1,Math.round(Gt(2,4)));y.translate(Math.round(H*2.2-4.4),0,Math.round(Gt(-1,1))),C.push(y)}let k=new Lt(cc(C,!1),B.mat);C.forEach(H=>H.dispose()),k.position.set(Math.cos(x)*b,Gt(-9,-3),Ue.cz-Math.sin(x)*b),k.rotation.y=x+Math.PI/2,k.scale.setScalar(Gt(.9,1.5)),B.add(k)}r.add(B);let R=[],E=null,D=null;[{t:Math.PI*.97,gap:9,r:4.5,y:-3,deco:(x,b,C)=>{ps(x,-1,1,-1,"oak",b),ps(x,2,1,1,"pine",b),x.set(-2,1,2,At.LEAF_M),x.plant(.5,1,2.5,lt.FL_PINK)}},{t:.06,gap:8,r:4,y:-1,bench:!0,deco:(x,b,C)=>{for(let k=0;k<18;k++){let H=b()*6.28,y=Math.sqrt(b())*3;x.plant(Math.floor(Math.cos(H)*y)+.5,1,Math.floor(Math.sin(H)*y)+.5,[lt.FL_PINK,lt.FL_WHITE,lt.FL_YELLOW,lt.FL_BLUE][k%4],.9)}C(I(2,.25,.6,0,.5,1.5,-.7,Ne(lt.PLANKS))),C(I(2,.6,.15,0,.5,1.85,-1,Ne(lt.PLANKS))),[-.35,1.35].forEach(k=>C(I(.2,.5,.6,0,k,1.25,-.7,Ne(lt.LOG))))}},{t:Math.PI*.62,gap:7,r:2.5,y:4.5,deco:(x,b)=>{ps(x,0,1,0,"pine",b),x.set(1,1,1,At.MOSSY)}},{t:-Math.PI*.3,gap:8,r:2.3,y:2.2,deco:(x,b,C)=>{[[0,0,15231594],[1,1,16757611]].forEach(([k,H,y])=>{C(I(.35,.6,.35,16774888,k+.5,1.3,H+.5)),C(I(.9,.35,.9,y,k+.5,1.75,H+.5))}),x.set(-1,1,0,At.LEAF_G)}}].forEach((x,b)=>{let C=Go(31+b*7),k=x.r,H=Math.ceil(k)+2,y=new Fo(-H,-Math.ceil(k*2.4)-3,-H,H*2,Math.ceil(k*2.4)+16,H*2);for(let Et=-H;Et<H;Et++)for(let nt=-H;nt<H;nt++){let pt=Math.hypot(Et+.5,nt+.5)/k;if(pt>1)continue;let It=-Math.round(1+k*1.9*Math.pow(1-pt,.7)+C()*1.2);for(let Zt=It;Zt<1;Zt++)y.set(Et,Zt,nt,Zt===0?At.GRASS:Zt>-3?At.DIRT:At.STONE)}let N=new $t;x.deco(y,C,Et=>N.add(Et));let j=y.build();N.add(j.solid,j.water,j.plants);let rt=qs(x.t)+x.r+x.gap;if(N.position.set(Math.cos(x.t)*rt,x.y,Ue.cz-Math.sin(x.t)*rt),N.userData.y0=x.y,N.userData.ph=b*1.7,r.add(N),R.push(N),x.bench){N.userData.withIsland=!0;let Et=Math.cos(x.t),nt=-Math.sin(x.t),pt=qs(x.t)-1.6,It={x:Et*pt,z:Ue.cz+nt*pt},Zt={x:N.position.x-Et*(k-.7),z:N.position.z-nt*(k-.7)},Jt={x:N.position.x+.5,z:N.position.z-.62};E={x:Jt.x,z:Jt.z,ry:0,y:.45},D={S:It,E:Zt};let Me=qd(It.x,It.z);Me&&wi([{x:Me.x,z:Me.z},It],1.8,"lane"),wi([It,Zt,{x:Jt.x,z:Jt.z+.6}],1.2,"bridge"),uc()}});let Q=(()=>{let p=document.createElement("canvas");p.width=p.height=64;let x=p.getContext("2d"),b=x.createRadialGradient(32,32,0,32,32,32);b.addColorStop(0,"rgba(255,255,255,1)"),b.addColorStop(.18,"rgba(255,255,255,0.75)"),b.addColorStop(.42,"rgba(255,255,255,0.22)"),b.addColorStop(1,"rgba(255,255,255,0)"),x.fillStyle=b,x.fillRect(0,0,64,64),x.fillStyle="#ffffff",x.beginPath();for(let k=0;k<10;k++){let H=k/10*Math.PI*2-Math.PI/2,y=k%2?8:20;x.lineTo(32+Math.cos(H)*y,32+Math.sin(H)*y)}x.closePath(),x.fill();let C=new _n(p);return C.colorSpace=De,C})(),$=(()=>{let p=document.createElement("canvas");p.width=p.height=32;let x=p.getContext("2d");x.fillStyle="#ffffff",x.beginPath();for(let C=0;C<8;C++){let k=C/8*Math.PI*2,H=C%2?2.5:15;x.lineTo(16+Math.cos(k)*H,16+Math.sin(k)*H)}x.closePath(),x.fill();let b=new _n(p);return b.colorSpace=De,b})(),V=[0,1,2].map(p=>{let x=[],b=[],C=new he,k=[16773544,16762076,14273791,12905727];for(let N=0;N<70;N++){let j=Math.random()*Math.PI*2,rt=Math.acos(1-Math.random()*1.8);x.push(Math.cos(j)*Math.sin(rt)*440,Math.cos(rt)*440+20,Math.sin(j)*Math.sin(rt)*440),C.set(k[(N+p)%4]),b.push(C.r,C.g,C.b)}let H=new ke;H.setAttribute("position",new xe(x,3)),H.setAttribute("color",new xe(b,3));let y=new Os(H,new fs({size:16+p*5,map:Q,vertexColors:!0,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,fog:!1,blending:uo}));return y.userData={base:0,ph:p*2.1},r.add(y),y}),X=new hs(new Wi({map:(()=>{let p=document.createElement("canvas");p.width=128,p.height=16;let x=p.getContext("2d"),b=x.createLinearGradient(0,0,128,0);return b.addColorStop(0,"rgba(255,255,255,0)"),b.addColorStop(1,"rgba(255,248,220,1)"),x.fillStyle=b,x.beginPath(),x.moveTo(0,8),x.lineTo(120,4),x.arc(120,8,4,-Math.PI/2,Math.PI/2),x.closePath(),x.fill(),new _n(p)})(),transparent:!0,opacity:0,depthWrite:!1,fog:!1}));X.scale.set(36,4.5,1),r.add(X);let K={t:-1,wait:6,from:new O,dir:new O},q=new $t;if(r.add(q),D){let{S:p,E:x}=D,b=x.x-p.x,C=x.z-p.z,k=Math.hypot(b,C),H=Math.atan2(b,C),y=Math.ceil(k/.42),N=Ne(lt.PLANKS),j=Ne(lt.LOG),rt=14272160,Et=nt=>-.08-.45*Math.sin(Math.PI*nt);for(let nt=0;nt<=y;nt++){let pt=nt/y,It=I(1.5,.08,.34,0,p.x+b*pt,Et(pt),p.z+C*pt,N);It.rotation.y=H,q.add(It)}[-1,1].forEach(nt=>{let pt=Math.cos(H)*.8*nt,It=-Math.sin(H)*.8*nt;[0,1].forEach(Zt=>q.add(I(.2,1.3,.2,0,p.x+b*Zt+pt,.45,p.z+C*Zt+It,j)));for(let Zt=0;Zt<y;Zt++){let Jt=Zt/y,Me=(Zt+1)/y,Ve=Et(Jt)+.9,ln=Et(Me)+.9,Tn=I(.05,.05,k/y+.02,rt,p.x+b*(Jt+Me)/2+pt,(Ve+ln)/2,p.z+C*(Jt+Me)/2+It);Tn.rotation.y=H,Tn.rotation.x=-Math.atan2(ln-Ve,k/y),q.add(Tn),Zt%3===0&&q.add(I(.03,.9,.03,rt,p.x+b*Jt+pt,Et(Jt)+.45,p.z+C*Jt+It))}})}let W=Go(5),_t=new We,Ct=Math.ceil(Ue.a)+2,Ot=Math.ceil(Ue.b)+2,fe=Math.round(Ue.cz),Rt=new Fo(-Ct,-26,fe-Ot,Ct*2,54,Ot*2),gt=p=>(p[0]===p[2]?Math.abs(p[3]-p[1]):Math.abs(p[2]-p[0]))>=40,Dt=(p,x)=>Yi(p,x)<0||Vo(p,x),jt=(p,x)=>{let b=_c(p,x);return!!b&&b.edge<0&&b.r.kind==="stairs"},Nt=(p,x)=>{let b=Math.hypot((p-oe.x)/(oe.rx+2.6),(x-oe.z)/(oe.rz+2.6));return Math.abs(b-1)*(oe.rx+2.6)<.8},Qt=(p,x)=>Math.sin(p*.83+x*.37)*Math.cos(x*.71-p*.29)+.5*Math.sin(p*1.9-x*1.3),ue=(p,x)=>{let b=0,C=-1;return Ho(p,x,2.5)||rf(p,x,3)||dc(p,x,3)||Yi(p,x)<2.5||Vo(p,x,3)?{h:0,i:-1}:(gs.forEach(([k,H,y,N],j)=>{let rt=Math.hypot(p-k,x-H);if(rt<y){let Et=N*Math.pow(1-rt/y,1.1)*(.88+.12*Qt(p,x))+(rt/y<.9?.8*Qt(p*1.7,x*1.7):0);Et>b&&(b=Et,C=j)}}),{h:b,i:C})},ae=(p,x)=>1.4+1.3*Math.min(1,Math.hypot(p-Bn.x,x-Bn.z)/22),ce=new Map;for(let p=-Ct;p<Ct;p++)for(let x=fe-Ot;x<fe+Ot;x++){let b=p+.5,C=x+.5;if(!Si(b,C,.2))continue;let k=Math.round(Ln(b,C)),H="grass",y=ue(b,C);if(y.h>0&&y.h<=k+.6&&y.h>k-2.5&&(H="meet"),y.h>k+.6){let rt=gs[y.i][3];k=Math.max(k,Math.round(y.h-.2)),H=k>rt*(.58+.08*Qt(b*2,C*2))?"snow":k>rt*.22?"rock":"grass"}let N=Math.max(0,1-Math.hypot(b,C-Ue.cz)/qs(Math.atan2(C-Ue.cz,b))),j=-1-Math.round(2+17*Math.pow(N,.55)+(W()-.5)*2.4);for(let rt=j;rt<k;rt++){let Et=k-1-rt,nt=Et===0?H==="snow"?At.SNOW:H==="rock"?W()<.2?At.MOSSY:W()<.12?At.GRAVEL:At.STONE:H==="meet"?W()<.45?At.GRASS:W()<.5?At.MOSSY:At.GRAVEL:At.GRASS:Et<3&&H==="grass"?At.DIRT:rt<j+3?W()<.55?At.DEEP:At.STONE:W()<.12?At.CLAY:W()<.08?At.GRAVEL:At.STONE;Rt.set(p,rt,x,nt)}if((H==="grass"||H==="meet")&&Rt.tint.set(Rt.idx(p,k-1,x),.94+.08*Math.sin(b*.21+C*.13)*Math.cos(C*.17-b*.05)+W()*.03),ce.set(p+","+x,k),k<=0){let rt=Ki(b,C),Et=ae(b,C);if(mi(b,C,0)||rt<Et/2){let nt=mi(b,C,-2.6)?3:mi(b,C,-1.2)?2:1;for(let pt=1;pt<=nt;pt++)Rt.set(p,-pt,x,At.WATER);Rt.set(p,-nt-1,x,At.SAND),Rt.set(p,-nt-2,x,At.SAND),ce.set(p+","+x,-1);continue}if((mi(b,C,1.2)||rt<Et/2+.9)&&!Dt(b,C)){Rt.set(p,-1,x,At.SAND),Rt.set(p,-2,x,At.SAND);continue}}jt(b,C)?Rt.set(p,k-1,x,W()<.55?At.COBBLE:W()<.5?At.MOSSY:At.STONE):(Dt(b,C)||Nt(b,C))&&Rt.set(p,k-1,x,At.PATH)}let yt=(p,x)=>{let b=ce.get(Math.floor(p)+","+Math.floor(x));return b==null?0:b},St=[];{let p=Bn,x=-p.dz,b=p.dx,C=p.r*.95,k=new Set;for(let y=C;y<p.r+2;y+=.4)for(let N=-1.4;N<=1.4;N+=.4){let j=Math.floor(p.x+p.dx*y+x*N),rt=Math.floor(p.z+p.dz*y+b*N),Et=j+","+rt;if(k.has(Et)||!ce.has(Et))continue;k.add(Et);let nt=ce.get(Et);for(let pt=-1;pt<nt;pt++)Rt.set(j,pt,rt,At.AIR);Rt.set(j,-1,rt,At.WATER),Rt.set(j,-2,rt,At.WATER),Rt.set(j,-3,rt,At.SAND),ce.set(Et,-1)}let H=new Map;for(let y=C;y>-.6;y-=.3)for(let N=-1.2;N<=1.2;N+=.35){let j=Math.floor(p.x+p.dx*y+x*N),rt=Math.floor(p.z+p.dz*y+b*N),Et=j+","+rt;if(k.has(Et)||H.has(Et)||!ce.has(Et))continue;let nt=ce.get(Et),pt=C-y,It=Math.min(nt-2,Math.floor(pt/.95)*2);if(!(It<0)){H.set(Et,It);for(let Zt=It+1;Zt<nt;Zt++)Rt.set(j,Zt,rt,At.AIR);Rt.set(j,It,rt,At.WATER),Rt.set(j,It-1,rt,At.WATER),Rt.set(j,It-2,rt,At.STONE),ce.set(Et,It+1),[[x,b],[-x,-b]].forEach(([Zt,Jt])=>{let Me=Math.floor(p.x+p.dx*y+x*N+Zt*1.6),Ve=Math.floor(p.z+p.dz*y+b*N+Jt*1.6),ln=Me+","+Ve;if(H.has(ln)||k.has(ln)||!ce.has(ln))return;let Tn=ce.get(ln),Wn=Math.min(Tn,It+3);if(Wn<Tn){for(let Es=Wn;Es<Tn;Es++)Rt.set(Me,Es,Ve,At.AIR);ce.set(ln,Wn)}Rt.set(Me,Wn-1,Ve,W()<.6?At.GRASS:At.MOSSY),W()<.35&&Rt.plant(Me+.5,Wn,Ve+.5,W()<.6?lt.TUFT:W()<.5?lt.FL_BLUE:lt.FL_WHITE,.8)})}}for(let y=-1;y<=1;y++)St.push([Math.floor(p.x+p.dx*(C+.3)+x*y)+.5,Math.floor(p.z+p.dz*(C+.3)+b*y)+.5])}{let p=Go(77);ce.forEach((x,b)=>{let[C,k]=b.split(",").map(Number),H=ue(C+.5,k+.5);H.i<0||x<1||x>gs[H.i][3]*.32||p()>.035||Math.hypot(C-Bn.x,k-Bn.z)<Bn.r*.9&&Math.abs((C-Bn.x)*-Bn.dz+(k-Bn.z)*Bn.dx)<3||Rt.get(C,x,k)||ps(Rt,C,x,k,"pine",p)})}let z=Gy(q,!0),Kt=-1+.88,bt=new Lt(new qe(1,1,.1,32),yc);bt.scale.set(oe.rx,1,oe.rz),bt.position.set(oe.x,Kt,oe.z),q.add(bt);{let p=new Ee({map:ui(lt.LILY),transparent:!0,alphaTest:.5,side:Cn});[[-4.5,1],[3.5,-1.6],[5.2,1.2],[-2.6,-1.4]].forEach(([x,b])=>{let C=new Lt(new ls(1,1),p);C.rotation.x=-Math.PI/2,C.rotation.z=x,C.position.set(oe.x+x*oe.rz/4,Kt+.02,oe.z+b*oe.rz/4),q.add(C)})}for(let p=0;p<14;p++){let x=W()*6.28,b=oe.x+Math.cos(x)*(oe.rx+.7),C=oe.z+Math.sin(x)*(oe.rz+.7);Rt.plant(b,0,C,lt.REED,1.1)}let Yt=(()=>{let p=new $t;p.position.set(Math.floor(oe.x)+.5,0,Math.floor(oe.z)+.5),q.add(p);let x=new Ee({map:ui(lt.COBBLE)}),b=new Ee({map:ui(lt.WATER),transparent:!0,opacity:.85});for(let N=-1;N<=1;N++)for(let j=-1;j<=1;j++)(N||j)&&p.add(I(1,.5,1,0,N,-.25+.1,j,x));p.add(I(1,1.6,1,0,0,.3,0,x)),p.add(I(1.6,.3,1.6,0,0,1.15,0,x));let C=I(1.2,.08,1.2,0,0,1.33,0,b);p.add(C);let k=new tn({color:14677247,transparent:!0,opacity:.85,depthWrite:!1}),H=new Lt(new Be(.18,.8,.18),k);H.position.y=1.75,p.add(H);let y=[];for(let N=0;N<14;N++){let j=new Lt(new Be(.1,.1,.1),k);p.add(j),y.push({m:j,a:N/14*Math.PI*2,t:N/14})}return{g:p,jet:H,drops:y,rimR:1.3}})(),Ut=Wy(q,W,!0),le=[],qt=(p,x)=>le.some(b=>p>b.x0-1&&p<b.x1+1&&x>b.z0-1&&x<b.z1+1),P=(p,x)=>!qt(p,x)&&Si(p,x,2.2)&&!mi(p,x,1.5)&&!Ho(p,x,.8)&&!Ud(p,x,.6)&&Ki(p,x)>2.4&&!Vd(p,x)&&!Kd(p,x,1.2)&&Yi(p,x)>.4&&!Vo(p,x,1)&&!Xe.some(([b,C])=>Math.abs(p-b)<3.6&&Math.abs(x-C)<3.8)&&!(Math.abs(p-Mn[0])<7&&Math.abs(x-Mn[1])<6)&&ue(p,x).h<.5,T=(t.houses||[]).findIndex(p=>p.id==="love"),tt=(p,x)=>{if(dn)return Ho(p,x,1.2);if(T<0||!Xe[T])return!1;let[b,C]=Xe[T];return Math.abs(p-b)<7&&x>C+2.5&&x<C+12||Math.abs(x-C)<3.5&&Math.abs(p-b)<8.5||Math.abs(p-b)<3.5&&x<C&&x>C-8};{let b=(H,y)=>ce.get(H+","+y),C=(H,y)=>{for(let N=H-1;N<=H+11;N++)for(let j=y-1;j<=y+7;j++)if(b(N,j)!==0||!P(N+.5,j+.5)||tt(N+.5,j+.5))return!1;return!0},k=[];for(let H=-Ot+4;H<Ot-7-4;H+=2)for(let y=-Ct+4;y<Ct-11-4;y+=2)C(y,H)&&k.push([y,H]);k.sort((H,y)=>y[1]-H[1]||Math.abs(H[0])-Math.abs(y[0]));for(let[H,y]of k){if(le.length>=2)break;if(le.some(pt=>Math.hypot(pt.x0-H,pt.z0-y)<18)||!C(H,y))continue;le.push({x0:H,z0:y,x1:H+11,z1:y+7});let N=[lt.WHEAT,lt.CARROT,lt.SPROUT];for(let pt=H+1;pt<H+11-1;pt++)for(let It=y+1;It<y+7-1;It++){if(It===y+Math.floor(3.5)){Rt.set(pt,-1,It,At.WATER);continue}Rt.set(pt,-1,It,At.FARM),Rt.tint.set(Rt.idx(pt,-1,It),1),Rt.plant(pt+.5,0,It+.5,N[(It<y+7/2?0:1)+(pt>H+11-4?1:0)],.95)}let j=Ne(lt.PLANKS),rt=Ne(lt.LOG),Et=H+Math.floor(11/2),nt=(pt,It,Zt,Jt)=>{let Me=Math.hypot(Zt-pt,Jt-It),Ve=Math.round(Me);for(let ln=0;ln<=Ve;ln++){let Tn=pt+(Zt-pt)*ln/Ve,Wn=It+(Jt-It)*ln/Ve;if(It===Jt&&It===y+7&&Math.abs(Tn-Et-.5)<.6)continue;q.add(I(.25,1,.25,0,Tn,.5,Wn,rt));let Es=new We;Es.position.set(Tn,0,Wn),Es.userData.post=.7,q.add(Es),ln<Ve&&!(It===Jt&&It===y+7&&Math.abs(Tn+(Zt-pt)/Ve/2-Et-.5)<1)&&[.4,.8].forEach(vp=>{let Ep=I(It===Jt?1:.1,.1,It===Jt?.1:1,0,Tn+(Zt-pt)/Ve/2,vp,Wn+(Jt-It)/Ve/2,j);q.add(Ep)})}};nt(H,y,H+11,y),nt(H+11,y,H+11,y+7),nt(H,y+7,H+11,y+7),nt(H,y,H,y+7),[[H,y],[H+11,y],[H,y+7],[H+11,y+7]].forEach(([pt,It])=>{let Zt=$d();Zt.position.set(pt,1.2,It),q.add(Zt)})}}{let p=Ze.zig,x=0,b=0;for(let C=1;C<p.length;C++){let k=p[C-1],H=p[C],y=H.x-k.x,N=H.z-k.z,j=Math.hypot(y,N);if(x+=j,x<5.5)continue;x=0,b++;let rt=-N/j,Et=y/j;[-1,1].forEach(nt=>{let pt=(b+(nt>0?1:0))%2===0||rf(H.x,H.z,-3),It=pt?ef+.8:ef+2.6,Zt=H.x+rt*It*nt,Jt=H.z+Et*It*nt;if(!Si(Zt,Jt,1)||Ho(Zt,Jt,.5)||dc(Zt,Jt,.5)||Yi(Zt,Jt)<It-ef-.4)return;let Me=Math.floor(Zt),Ve=Math.floor(Jt),ln=ce.get(Me+","+Ve);if(ln!=null)if(pt){let Tn=Od();Tn.position.set(Me+.5,ln,Ve+.5),q.add(Tn);let Wn=new We;Wn.position.set(Me+.5,0,Ve+.5),Wn.userData.post=.3,q.add(Wn)}else Rt.get(Me,ln,Ve)||ps(Rt,Me,ln,Ve,"cherry",W)})}}{let p=Go(61),x=Ze,b=[];for(let C=0;C<4e3&&b.length<170;C++){let k=p()*Math.PI*2,H=x.Rp+1+p()*(x.R-x.Rp),y=x.x+Math.cos(k)*H,N=x.z+Math.sin(k)*H;if(!Si(y,N,2)||Ho(y,N,2)||dc(y,N,2.5)||Yi(y,N)<2.4||rf(y,N)||Math.abs(y-Mn[0])<7&&Math.abs(N-Mn[1])<6)continue;let j=Math.floor(y),rt=Math.floor(N);if(b.some(([nt,pt])=>Math.hypot(nt-j,pt-rt)<3.1))continue;let Et=ce.get(j+","+rt);Et==null||Et<1||Rt.get(j,Et,rt)||ue(y,N).h>Ln(y,N)+.5||(ps(Rt,j,Et,rt,["oak","oak","pine","birch","mint","pine"][p()*6|0],p),b.push([j,rt]))}}let ut=[],vt=(p,x)=>{let b=p+","+x,C=ce.get(b);C!=null&&(Rt.set(p,C-1,x,At.DIRT),Rt.set(p,C,x,At.GRASS),Rt.tint.set(Rt.idx(p,C,x),.97+W()*.05),ce.set(b,C+1))},mt=(p,x,b)=>{let C=Math.floor(p),k=Math.floor(x);if(!P(C+.5,k+.5)||tt(C+.5,k+.5)||ut.some(([N,j])=>Math.hypot(N-C,j-k)<3.2))return!1;let H=b||(W()<.1?"cherry":["oak","oak","birch","mint","pine"][W()*5|0]);ps(Rt,C,ce.get(C+","+k)||0,k,H,W);let y=new We;return y.position.set(C+.5,0,k+.5),y.userData.post=1.2,q.add(y),ut.push([C,k]),!0};for(let x=0;x<20;x++){let b=(x+.5+(W()-.5)*.35)/20*Math.PI*2,C=qs(b)-5.5-W()*2,k=Math.cos(b)*C,H=Ue.cz+Math.sin(b)*C,y=2.5+W()*1.5;if(P(k,H)&&!tt(k,H)){for(let rt=Math.floor(k-y);rt<=k+y;rt++)for(let Et=Math.floor(H-y);Et<=H+y;Et++)Math.hypot(rt+.5-k,(Et+.5-H)*1.2)<y&&P(rt+.5,Et+.5)&&!tt(rt+.5,Et+.5)&&vt(rt,Et);let j=new We;j.position.set(k,0,H),j.userData.post=y,q.add(j)}let N=2+(W()*3|0);for(let j=0;j<N*4&&N>0;j++){let rt=W()*6.28,Et=W()*3.4;mt(k+Math.cos(rt)*Et,H+Math.sin(rt)*Et)&&N--}for(let j=0;j<3;j++){let rt=W()*6.28,Et=2.2+W()*2,nt=Math.floor(k+Math.cos(rt)*Et),pt=Math.floor(H+Math.sin(rt)*Et);if(!P(nt+.5,pt+.5)||tt(nt+.5,pt+.5)||Rt.get(nt,yt(nt,pt),pt))continue;let It=yt(nt,pt);Rt.set(nt,It,pt,W()<.5?At.LEAF_G:At.LEAF_M),W()<.4&&Rt.plant(nt+.5,It+1,pt+.5,[lt.FL_PINK,lt.FL_WHITE,lt.FL_YELLOW][W()*3|0],.8)}}for(let p=0,x=0;p<600&&x<10;p++)mt((W()-.5)*Ue.w,(W()-.5)*Ue.d,["oak","birch","mint"][W()*3|0])&&x++;{let p=[lt.FL_PINK,lt.FL_WHITE,lt.FL_YELLOW,lt.FL_BLUE,lt.FL_LAV];for(let x=0,b=0;x<6e3&&b<520;x++){let C=(W()-.5)*(Ue.w-4),k=(W()-.5)*(Ue.d-4);if(!P(C,k)||tt(C,k))continue;let H=Math.floor(C),y=Math.floor(k),N=yt(H,y);Rt.get(H,N,y)||(Rt.plant(H+.5,N,y+.5,W()<.32?p[W()*p.length|0]:lt.TUFT,.8+W()*.3),b++)}for(let x=0,b=0;x<800&&b<9;x++){let C=Math.floor((W()-.5)*(Ue.w-8)),k=Math.floor((W()-.5)*(Ue.d-8));if(!P(C+.5,k+.5)||tt(C+.5,k+.5))continue;let H=yt(C,k),y=W()<.5?At.COBBLE:At.MOSSY;Rt.set(C,H,k,y),W()<.6&&Rt.set(C+1,H,k,At.STONE),W()<.4&&Rt.set(C,H+1,k,y);let N=new We;N.position.set(C+1,0,k+.5),N.userData.post=1.2,q.add(N),b++}}{let p=Rt.build(.88);q.add(p.solid,p.water,p.plants)}let J=[];{let p=new tn({color:16777215,transparent:!0,opacity:.5,depthWrite:!1});St.forEach(([x,b])=>{for(let C=0;C<4;C++){let k=new Lt(new Be(.5,.5,.5),p.clone());k.position.set(x+Gt(-.6,.6),0,b+Gt(0,1.2)),q.add(k),J.push({m:k,t:Math.random(),x:k.position.x,z:k.position.z})}})}let et=[0,1,2].map(p=>{let x=[];for(let k=0;k<9;k++){let H=Math.random()*6.283,y=Math.sqrt(Math.random())*.85;x.push(oe.x+Math.cos(H)*oe.rx*y,Kt+.15,oe.z+Math.sin(H)*oe.rz*y)}for(let k=0;k<7;k++){let H=z.curve.getPointAt(Math.random());x.push(H.x+(Math.random()-.5)*1.2,Kt+.12,H.z+(Math.random()-.5)*1.2)}let b=new ke;b.setAttribute("position",new xe(x,3));let C=new Os(b,new fs({size:.9,map:$,color:[16777215,16774072,16766698][p],transparent:!0,opacity:0,depthWrite:!1}));return C.userData={base:.6,ph:p*2.1},q.add(C),C}),it=[];Zs.forEach(p=>{if(p.kind==="main")for(let x=6;x<p.pts.length-2;x+=14){let b=p.pts[x-1],C=p.pts[x+1],k=C.x-b.x,H=C.z-b.z,y=Math.hypot(k,H)||1,N=x/14%2?1:-1,j=p.pts[x].x-H/y*(p.w/2+.7)*N,rt=p.pts[x].z+k/y*(p.w/2+.7)*N;Xe.some(([Et,nt])=>Math.hypot(j-Et,rt-nt)<4.5)||mi(j,rt,1.5)||!Si(j,rt,2)||Ki(j,rt)<2||Yi(j,rt)<.2||Vd(j,rt)||Vo(j,rt)||it.push([j,rt])}}),be&&([.35,2.79,3.5,5.93].forEach(p=>it.unshift([be.x+Math.cos(p)*be.rx*.93,be.z+Math.sin(p)*be.rz*.93])),[-1,1].forEach(p=>{let x=be.x+p*be.rx*.55,b=be.z+be.rz*.75;q.add(I(2.4,.5,.9,0,x,.25,b,Ne(lt.PLANKS))),[-.8,-.25,.3,.85].forEach((H,y)=>{let N=I(.35,.35,.35,[16758465,16375946,14273008,16777215][y],x+H,.68,b);q.add(N)});let C=be.x+p*be.rx*.82,k=be.z-.5;q.add(I(.6,.12,1.8,0,C,.45,k,Ne(lt.PLANKS))),q.add(I(.12,.5,1.8,0,C+p*.3,.75,k,Ne(lt.PLANKS)))})),it.slice(0,14).forEach(([p,x],b)=>{let C=Od();if(C.position.set(p,Ln(p,x),x),C.userData.post=.3,q.add(C),b%2===0&&M.length<3){let k=new Uo(16763255,0,12,1.6);k.position.set(p,Ln(p,x)+2.7,x),q.add(k),M.push(k)}});let wt=[],ct=[];(t.houses||[]).forEach((p,x)=>{if(!Xe[x])return;let b=p.id==="love"?Iy():p.special==="arcade"?Ly():p.special==="store"?Dy():Nd(p,!1);b.position.set(Xe[x][0],Ln(Xe[x][0],Xe[x][1]),Xe[x][1]),b.rotation.y=Zi[x]||0,b.userData.face=Zi[x]||0,b.userData.id=p.id,q.add(b),wt.push(b);let C=b.userData.face;ct.push({x:Xe[x][0]+Math.sin(C)*b.userData.doorZ,z:Xe[x][1]+Math.cos(C)*b.userData.doorZ})});let ft=Ny(q,dn&&Zi[dn.house]||0),xt=Nd(null,!0);xt.position.set(Mn[0],Ln(Mn[0],Mn[1]),Mn[1]),xt.userData.id="hall",q.add(xt),wt.push(xt);let Ft={x:Mn[0],z:Mn[1]+xt.userData.doorZ};ct.push(Ft);let dt=Xy(ct),ie=dt.doorNodes[dt.doorNodes.length-1];(function(){q.updateMatrixWorld(!0);let x=new Set,b=H=>{H&&H.traverse(y=>x.add(y))};b(bt),Ut.ducks.forEach(H=>b(H.g)),wt.forEach(H=>{b(H.userData.hinge),b(H.userData.flag),b(H.userData.bell)}),b(ft.car),b(Yt.jet),Yt.drops.forEach(H=>b(H.m));let C=new Map,k=[];q.traverse(H=>{if(!H.isMesh||H.isInstancedMesh||x.has(H)||H.userData.keepBatch||Array.isArray(H.material)||H.material.transparent)return;let y=H.geometry.clone();Object.keys(y.attributes).forEach(N=>{N!=="position"&&N!=="normal"&&N!=="uv"&&y.deleteAttribute(N)}),y.attributes.uv&&(y.index&&(y=y.toNonIndexed()),y.clearGroups(),y.applyMatrix4(H.matrixWorld),C.has(H.material)||C.set(H.material,[]),C.get(H.material).push(y),k.push(H))}),k.forEach(H=>H.parent.remove(H)),C.forEach((H,y)=>{let N=cc(H,!1);if(H.forEach(rt=>rt.dispose()),!N)return;let j=new Lt(N,y);j.castShadow=!0,j.receiveShadow=!0,q.add(j)})})();let Ht=[],Bt={her:null,him:null,home:null,kiss:0},G=p=>dt.nodes[dt.doorNodes[p]],Pt={},at=p=>Pt[p]||0;function Mt(p,x,b){let C=Xo(p);q.add(C.g);let k=G(x);return C.g.position.set(k.x+Gt(-.6,.6),0,k.z+Gt(0,.4)),Object.assign(C,{kind:"person",i:Ht.length,home:x,path:[],speed:Gt(1.35,1.75),wait:Gt(0,3),t:Gt(0,6),v:0,goal:"",inside:!1},b||{}),Ht.push(C),C}(t.houses||[]).forEach((p,x)=>{if(!(x>=Xe.length))if(p.id==="love")Bt.home=x,Bt.her=Mt(uf.her,x,{love:"her"}),Bt.him=Mt(uf.him,x,{love:"him"});else{let b=mc[x]||mc[x%9]||mc[0];Mt(b,x,{hallReg:!!b.uniform})}});let kt=Object.assign(Oy(),{kind:"cat",path:[],speed:1.1,wait:2,t:0,sit:!0}),Vt=Object.assign(Fy(),{kind:"dog",path:[],speed:2.2,wait:1,t:0,buddy:0});{let p=dt.nodes[dt.doorNodes[2]],x=dt.nodes[dt.doorNodes[dt.doorNodes.length-1]];kt.g.position.set(p.x+1.5,0,p.z+.6),Vt.g.position.set(x.x+3,0,x.z+.8)}q.add(kt.g,Vt.g);let _e=[0,1,2,0,1].map((p,x)=>{let b=Hd(p);return b.scale.setScalar(.8),q.add(b),{g:b,t:.15+x*.16,dir:x%2?1:-1,sp:Gt(.012,.022),side:Gt(-.35,.35),ph:Gt(0,6)}}),Ke=[0,1,2,3].map(p=>{let x=Hd(p);return q.add(x),{g:x,a:Gt(0,6.28),r:Gt(.62,.92),sp:Gt(.25,.5)*(p%2?1:-1),jump:0,jx:0,jz:0}});function cn(){let p=document.createElement("canvas");p.width=128,p.height=64;let x=p.getContext("2d");x.font="bold 34px sans-serif",x.fillStyle="#7a6a9a",x.fillText("z",18,52),x.font="bold 26px sans-serif",x.fillText("z",52,36),x.font="bold 20px sans-serif",x.fillText("z",82,22);let b=new hs(new Wi({map:new _n(p),transparent:!0,depthWrite:!1}));return b.scale.set(1.1,.55,1),b.visible=!1,q.add(b),b}kt.zzz=cn(),Vt.zzz=cn();let Se=np("\u2665","#ff6f91",.9,.45);q.add(Se);let pn=new O,Hn=0,ei=[],Yo=new yn(.09,6,5);function Ai(p,x){for(let b=0;b<7;b++){let C=Math.random()*6.28,k=Math.random()*.8,H=p+Math.cos(C)*k,y=x+Math.sin(C)*k*.7;if(!mi(H,y,-.8))continue;let N=new Lt(Yo,me(b%2?13208410:14723437));N.position.set(H,1.6+Math.random()*.6,y),q.add(N),ei.push({m:N,vy:0,life:25})}}let Ji=[];function Br(p,x,b){let C=new Lt(new Co(.18,.24,18),new tn({color:15399167,transparent:!0,opacity:.6,side:Cn,depthWrite:!1}));C.rotation.x=-Math.PI/2,C.position.set(p,-.09,x),C.renderOrder=3,C.userData.size=b,q.add(C),Ji.push(C)}let wn=new Lt(new Co(.34,.42,24),new tn({color:15399167,transparent:!0,opacity:0,side:Cn,depthWrite:!1}));wn.rotation.x=-Math.PI/2,wn.renderOrder=3,q.add(wn);let _s=[16758465,14273008,16375946,11591910].map((p,x)=>{let b=By(p);return q.add(b),{g:b,ph:x*1.7,cx:Gt(-25,25),cz:Gt(-15,15)}}),Hr=new ke,ys=[];for(let p=0;p<40;p++)ys.push(Gt(-30,30),Gt(1,3),Gt(-20,20));Hr.setAttribute("position",new xe(ys,3));let Ks=new Os(Hr,new fs({color:16773792,size:.35,transparent:!0,opacity:0}));q.add(Ks);let kn=0;function $i(){let p=new Date;return p.getHours()+p.getMinutes()/60}function Js(p){return p>=23||p<6.5?"sleep":p<7?"morning":p<11.5?"work":p<13?"lunch":p<16.5?"work":p<21?"evening":"home"}function $s(p){let x=p%18,b=Math.floor(x/6),C=x%6;return{x:Ft.x+(C-2.5)*1.2+b%2*.6,z:Ft.z+1.3+b*1.1}}function A(p,x,b){if(p.goal=b,p.path=Ef(p,x),!p.path.length){let C=dt.nearest(p.g.position.x,p.g.position.z),k=dt.nearest(x.x,x.z);p.path=dt.path(C,k).concat([x])}}function Y(p){let x=G(p),b=Zi[p]||0;return{x:x.x-Math.sin(b)*.9,z:x.z-Math.cos(b)*.9,f:b}}function st(p){let x=Y(p.home);p.inside=!1,p.g.visible=!0,p.g.position.set(x.x+Gt(-.3,.3),0,x.z),p.g.rotation.set(0,x.f,0)}function ot(p,x){let b=Y(p.home);A(p,{x:b.x,z:b.z},"in"),p.stay=x}let Z=wt.findIndex(p=>p.userData.alwaysLit),zt=null,Wt=null;function ee(){if(!zt){zt=Xe.map((p,x)=>{let b=G(x);return[[-1.7,-.5],[1.7,-.5],[-.9,.2],[.9,.2]].map(([C,k])=>({x:b.x+C,z:b.z+k})).filter(C=>!ii(C.x,C.z,.15))}),Wt=[];for(let p=0;p<18;p++){let x={x:oe.x+Math.cos(p/18*6.283)*(oe.rx+2.2),z:oe.z+Math.sin(p/18*6.283)*(oe.rz+1.9)};ii(x.x,x.z,.2)||Wt.push(x)}}}let ne=p=>p[Math.floor(Math.random()*p.length)];function de(p){ee();let x=zt[p.home];return x.length?ne(x):G(p.home)}function ge(p,x){ee();let b=Math.random();if(x==="lunch"&&Z>=0&&b<.6){let C=G(Z);return{x:C.x+Gt(-2.6,2.6),z:C.z+Gt(0,.8)}}if(x==="lunch"&&b<.75)return $s(Math.floor(Gt(0,18)));if(b<.4&&Wt.length)return ne(Wt);if(b<.85){let C=G(Math.floor(Gt(0,Xe.length)));return{x:C.x+Gt(-1,1),z:C.z+Gt(0,.5)}}return $s(Math.floor(Gt(0,18)))}function se(p){if(p.onBench&&(p.onBench=!1,p.g.rotation.set(0,p.g.rotation.y,0)),p.love==="him"||p.pair)return;let x=Js($i());if(p.love==="her")return Ae(p,x);let b=at(p.home)>0;if(p.helper&&at(p.home)<p.helper){p.inside&&st(p),A(p,{x:Ft.x,z:Ft.z},"leave");return}if(kn&&!b&&x!=="sleep"&&x!=="home"&&!p.helper){p.inside&&st(p),(p.goal!=="hall"||p.path.length)&&A(p,$s(p.i),"hall"),p.wait=Gt(3,6);return}if(p.hallReg&&x==="work"&&!b&&!p.helper){if(p.inside&&st(p),p.goal==="hallwork"){A(p,de(p),"work"),p.wait=Gt(6,14);return}if(p.goal==="work"&&Math.random()<.5){ot(p,Gt(4,8));return}A(p,$s(p.i),"hallwork"),p.wait=Gt(10,22);return}if(b||x==="work"){if(p.inside){st(p),A(p,de(p),"work");return}if(p.goal==="work"){ot(p,Gt(3,b?6:10));return}A(p,de(p),"work");return}if(x==="sleep"||x==="home"){if(p.inside){p.wait=Gt(20,40);return}ot(p,Gt(20,40));return}if(p.inside)st(p);else if(Math.random()<.15){ot(p,Gt(5,12));return}if(E&&x!=="lunch"&&Math.random()<.14&&Ht.filter(C=>C.goal==="bench").length<2){A(p,{x:E.x,z:E.z+.6},"bench");return}A(p,ge(p,x),"stroll"),p.wait=Gt(2,6)}let we=()=>wt.find(p=>p.userData.id==="love");function Pe(p){let x=we(),b=x&&x.userData.poolSpots&&x.userData.poolSpots[p];if(!b)return null;let C=new O(b.x,b.y,b.z);return x.localToWorld(C),q.worldToLocal(C),{x:C.x,y:C.y,z:C.z,ry:b.ry+x.rotation.y}}let ze=()=>{let p=$i();return p>=16&&p<17};function En(){[Bt.her,Bt.him].forEach(p=>{if(!p||!p.pool)return;p.pool=!1;let x=Y(p.home);p.g.position.set(x.x+(p.love==="him"?.7:0),0,x.z),p.g.rotation.set(0,0,0)})}function Ae(p,x){let b=Bt.him;if(p.inCar){p.wait=2;return}if(p.pool){if(ze()){p.wait=15;return}En()}if(ze()&&Pe(0)&&x!=="sleep"){re(),p.inside&&(st(p),st(b)),A(p,Y(p.home),"pool");return}if(x==="sleep"||x==="home"||$i()>=20.5){if(re(),p.inside){p.wait=Gt(30,60);return}ot(p,Gt(30,60));return}if(p.inside&&(st(p),st(b),b.g.position.x+=.7),p.sitting){re(),A(p,ge(p,x),"stroll"),p.wait=Gt(2,5);return}if(Ie&&Math.random()<.55){A(p,Ie.userData.front,"swing");return}A(p,ge(p,x),"stroll"),p.wait=Gt(2,5)}function re(){[Bt.her,Bt.him].forEach(p=>{!p||!p.sitting||(p.sitting=!1,p.g.position.set(Ie.userData.front.x+(p.love==="her"?-.4:.4),0,Ie.userData.front.z),p.g.rotation.set(0,Ie.rotation.y,0))})}function ni(p){p.goal==="in"?(p.inside=!0,p.g.visible=!1,p.wait=p.stay||10):p.goal==="work"?p.wait=Gt(6,12):p.goal==="swing"?(p.sitting=!0,p.wait=Gt(15,30)):p.goal==="bench"?(p.onBench=!0,p.benchSide=Ht.some(x=>x!==p&&x.onBench&&x.benchSide<0)?1:-1,p.wait=Gt(14,28)):p.goal==="pool"?(p.pool=!0,Bt.him&&(Bt.him.pool=!0),p.wait=10):p.goal==="leave"&&(q.remove(p.g),Ht.splice(Ht.indexOf(p),1))}function Re(p,x){return On(Bt.her,p,x)}function On(p,x,b){if(p.pool||x.pool)return!1;if(p.inside){if(x.inside)return!1;let It=Y(x.home),Zt=It.x-x.g.position.x,Jt=It.z-x.g.position.z,Me=Math.hypot(Zt,Jt);if(Me<.15)return x.inside=!0,x.g.visible=!1,!1;let Ve=Math.min(Me,p.speed*1.2*b);return x.g.position.x+=Zt/Me*Ve,x.g.position.z+=Jt/Me*Ve,x.g.rotation.y=Math.atan2(Zt,Jt),x.v=p.speed,!0}if(x.inside&&(st(x),x.g.position.x+=.7),p.sitting)return x.love&&(x.sitting=!0),!1;x.sitting=!1;let C=p.g.rotation.y,k=p.g.position.x-Math.cos(C)*.72,H=p.g.position.z+Math.sin(C)*.72,y=k-x.g.position.x,N=H-x.g.position.z,j=Math.hypot(y,N);if(j<.05){x.v=0;let It=C-x.g.rotation.y;return It=Math.atan2(Math.sin(It),Math.cos(It)),x.g.rotation.y+=It*Math.min(1,b*6),!1}let rt=Math.min(p.speed*1.35,j*4);x.v=(x.v||0)+(rt-(x.v||0))*Math.min(1,b*5);let Et=Math.min(j,x.v*b);x.g.position.x+=y/j*Et,x.g.position.z+=N/j*Et;let pt=(j>.35?Math.atan2(y,N):C)-x.g.rotation.y;return pt=Math.atan2(Math.sin(pt),Math.cos(pt)),x.g.rotation.y+=pt*Math.min(1,b*7),x.v>.15}{let p=Js($i());(p==="sleep"||p==="home")&&Ht.forEach(x=>{x.inside=!0,x.g.visible=!1,x.wait=Gt(5,30)})}let Vn=wt.filter(p=>p.userData.id!=="hall").map(p=>{let x=p.userData.size,b=p.userData.face||0,C=Math.abs(Math.sin(b))>.5;if(!x)return{x:p.position.x,z:p.position.z,hw:3.3,hd:2.6};let k=Math.cos(b)*x.cx,H=-Math.sin(b)*x.cx;return{x:p.position.x+k,z:p.position.z+H,hw:C?x.hd:x.hw,hd:C?x.hw:x.hd}}).concat([{x:Mn[0],z:Mn[1],hw:5.8,hd:4.1}]),rn=[];q.children.forEach(p=>{p.userData.post&&rn.push({x:p.position.x,z:p.position.z,r:p.userData.post})}),Ut.posts.forEach(p=>rn.push(p));function ii(p,x,b){return b=b||.5,!Si(p,x,2.5)||Ud(p,x,0)||Ki(p,x)<1.8&&!z.bridges.some(C=>Math.hypot(C.x-p,C.z-x)<2.4)||mi(p,x,.9+b)||Vn.some(C=>Math.abs(p-C.x)<C.hw+b&&Math.abs(x-C.z)<C.hd+b)?!0:rn.some(C=>Math.hypot(p-C.x,x-C.z)<C.r+b*.6)}function Ce(p,x){let b=Math.ceil(Math.hypot(x.x-p.x,x.z-p.z)/.4);for(let C=1;C<=b;C++){let k=C/b;if(ii(ti(p.x,x.x,k),ti(p.z,x.z,k),.45))return!1}return!0}let Kn=(p,x,b)=>Yi(p,x)<(b||0),Ie=null;if(ft.blocks.forEach(p=>Vn.push(p)),ft.posts.forEach(p=>rn.push(p)),Bt.home!=null&&dn&&dn.house===Bt.home){let[p,x]=dn.swing,b=Zi[Bt.home]||0;Ie=kd(),Ie.position.set(p,Ln(p,x),x),Ie.rotation.y=b,q.add(Ie),Ie.userData.front={x:p+Math.sin(b)*1.25,z:x+Math.cos(b)*1.25},Vn.push({x:p,z:x,hw:1.55,hd:1.55}),Vn.push({x:p-Math.cos(b)*2,z:x+Math.sin(b)*2,hw:.8,hd:.8})}else if(Bt.home!=null){let[p,x]=Xe[Bt.home],b=[[0,7.2],[0,6.4],[-2.2,7.2],[2.2,7.2],[0,8.4],[4.6,.8],[-4.6,.8],[0,-5.2]],C=(k,H)=>!Si(k,H,2.5)||mi(k,H,1)||Vn.some(y=>Math.abs(k-y.x)<y.hw+.1&&Math.abs(H-y.z)<y.hd+.1)||Kn(k,H,0);for(let[k,H]of b){let y=p+k,N=x+H;if([[-1.6,-.9],[1.6,-.9],[-1.6,.9],[1.6,.9],[0,0],[0,1.6],[-.5,1.6],[.5,1.6]].every(([rt,Et])=>!C(y+rt,N+Et))){q.children.slice().forEach(rt=>{if(rt.userData.post&&Math.abs(rt.position.x-y)<2.6&&Math.abs(rt.position.z-N)<2.2){q.remove(rt);let Et=rn.findIndex(nt=>nt.x===rt.position.x&&nt.z===rt.position.z);Et>=0&&rn.splice(Et,1)}}),Ie=kd(),Ie.position.set(y,Ln(y,N),N),q.add(Ie),Ie.userData.front={x:y,z:N+1.25},Vn.push({x:y,z:N,hw:1.55,hd:.75});break}}}let bn=[],gi=new yn(.28,8,6);function xi(p){let x=new Lt(gi,new Ee({color:16777215,transparent:!0,opacity:.75,depthWrite:!1})),b=p.userData.chimney;x.position.set(p.position.x+b.x+Gt(-.1,.1),b.y,p.position.z+b.z+Gt(-.1,.1)),q.add(x),bn.push({m:x,life:0})}let kr=[3,6,10],js=document.createElement("div");js.className="v3d-names",n.appendChild(js);let Gn=null,xf=!1,Ms=new Map,Ri=new O,_f=[3877418,9067068,2038564,13208410,5914688,11039050],yf=[10934504,16165309,16111752,10738109,14273008,16368540];function rp(p,x,b){let C=Object.assign({},p,{hair:_f[x%_f.length],cap:void 0,glasses:!p.glasses&&x%3===0});return p.uniform||(C.shirt=yf[(x+2)%yf.length]),C.style=b==="f"?["long","bun","twin"][x%3]:"short",C}function op(){let p=Gn&&Gn.extra||{};(t.houses||[]).forEach((x,b)=>{if(x.id==="love")return;let C=Ht.find(N=>N.home===b&&!N.love&&!N.helper&&!N.pair);if(!C)return;let k=Ht.find(N=>N.pair===C),H=p[x.id];if(!H&&k){q.remove(k.g),Ht.splice(Ht.indexOf(k),1);let N=Ms.get(k);N&&(N.remove(),Ms.delete(k));return}if(!H)return;let y=rp(C.baseLook||C.parts.look,b,H.g==="f"?"f":"m");if(k)k.mateG!==H.g&&(k.mateG=H.g,Bd(k,y));else{let N=Mt(y,b,{pair:C,mateG:H.g});N.g.position.copy(C.g.position),N.g.position.x+=.7,N.inside=C.inside,N.g.visible=C.g.visible}})}function ap(){let p=Gn&&Gn.genders||{};Ht.forEach(x=>{if(x.love||x.helper||x.pair)return;let b=(t.houses||[])[x.home];if(!b)return;x.baseLook||(x.baseLook=x.parts.look);let C=p[b.id]?ep(x.baseLook,p[b.id]):x.baseLook;C!==x.parts.look&&Bd(x,C)})}function cp(p){if(!Gn)return"";if(p.love==="her")return Gn.her||"namu";if(p.love==="him")return Gn.him||"hunf";if(p.helper)return"";let x=(t.houses||[])[p.home];return!x||!x.pub&&!xf?"":p.pair?Gn.extra&&Gn.extra[x.id]&&Gn.extra[x.id].name||"":Gn.people&&Gn.people[x.id]||""}function lp(){Ht.forEach(p=>{let x=cp(p),b=Ms.get(p);if(!x){b&&(b.remove(),Ms.delete(p));return}b||(b=document.createElement("span"),js.appendChild(b),Ms.set(p,b)),b.textContent=x})}let vc=document.createElement("div");vc.className="v3d-bubbles",n.appendChild(vc);let Vr=[];function Ec(p,x,b){Vr.filter(y=>y.p===p).forEach(y=>{y.t=0});let C=document.createElement("div");C.className="v3d-bubble-at";let k=document.createElement("div");k.className="v3d-bubble"+(b?" loud":""),k.textContent=x,C.appendChild(k);let H={p,el:C,t:2.4};Vr.push(H),Mf(H),vc.appendChild(C)}function Mf(p){let x=n.clientWidth||innerWidth,b=n.clientHeight||innerHeight;p.p.g.getWorldPosition(Gr),Gr.y+=2.2,Gr.project(o),p.el.style.transform="translate("+Math.round((Gr.x+1)/2*x)+"px,"+Math.round((1-Gr.y)/2*b)+"px)",p.el.style.opacity=Math.min(1,p.t*3)}let Gr=new O;function hp(p){for(let x=Vr.length-1;x>=0;x--){let b=Vr[x];if(b.t-=p,b.t<=0||!b.p.g.visible||b.p.inside){b.el.remove(),Vr.splice(x,1);continue}Mf(b)}}function bc(){let p=o.position.distanceTo(a.target),x=p<175&&Ms.size>0;if(js.style.display=x?"":"none",!x)return;let b=n.clientWidth||innerWidth,C=n.clientHeight||innerHeight,k=C*1.8/(2*p*Math.tan(o.fov*Math.PI/360));js.style.fontSize=Math.max(7,Math.min(12,k*.24)).toFixed(1)+"px",js.classList.toggle("night",Wr>.5);let H=performance.now(),y=H-(bc.t||0)>300;y&&(bc.t=H);let N=[];Ms.forEach((j,rt)=>{if(!rt.g.visible||rt.inside||Ht.indexOf(rt)<0){j.style.display="none";return}if(rt.g.getWorldPosition(Ri),Ri.y+=2.05,y){let pt=Ri.clone().sub(o.position),It=pt.length();Sc.set(o.position,pt.normalize()),Sc.far=It-.3,rt.hidden=Sc.intersectObjects(fp,!1).length>0}if(rt.hidden){j.style.display="none";return}if(Ri.project(o),Ri.z>1||Math.abs(Ri.x)>1.1||Math.abs(Ri.y)>1.1){j.style.display="none";return}let Et=(Ri.x+1)/2*b,nt=(1-Ri.y)/2*C;for(let pt=0;pt<4;pt++){let It=N.find(Zt=>Math.abs(Zt[0]-Et)<34&&Math.abs(Zt[1]-nt)<12);if(!It)break;nt=It[1]-13}N.push([Et,nt]),j.style.display="",j.style.transform="translate("+Et.toFixed(1)+"px,"+nt.toFixed(1)+"px) translate(-50%,-100%)"})}let Sc=new Dr,fp=wt.map(p=>p.userData.pick).filter(Boolean);function vf(){Xe.forEach((p,x)=>{if(x===Bt.home)return;let b=kr.filter(k=>at(x)>=k).length,C=Ht.filter(k=>k.helper&&k.home===x&&k.goal!=="leave");for(let k=C.length;k<b;k++){let H=Mt(Fd[k%Fd.length],x,{helper:kr[k]});H.g.position.set(Ft.x+Gt(-1,1),0,Ft.z+Gt(0,.6)),A(H,de(H),"work")}})}function Ef(p,x){let b={x:p.g.position.x,z:p.g.position.z};if(Ce(b,x))return[x];let C=dt.nearest(b.x,b.z),k=dt.nearest(x.x,x.z),H=dt.path(C,k);if(!Ce(b,H[0]))return[];let y=H[H.length-1];return Ce(y,x)&&H.push(x),H}function up(p){if(p.kind==="dog"&&Math.random()<.65){let b=Ht[p.buddy%Ht.length];for(let H=0;H<Ht.length&&(!b.g.visible||b.sitting);H++)b=Ht[++p.buddy%Ht.length];let C=b.g.position,k={x:C.x+Gt(-1.5,1.5),z:C.z+Gt(.8,1.6)};if(Math.random()<.15&&p.buddy++,!ii(k.x,k.z)&&(p.path=Ef(p,k),p.path.length))return}for(let b=0;b<30;b++){let C={x:p.g.position.x+Gt(-9,9),z:p.g.position.z+Gt(-7,7)};if(!ii(C.x,C.z,.8)&&Ce(p.g.position,C)){p.path=[C];return}}let x=dt.nodes[dt.nearest(p.g.position.x,p.g.position.z)];p.path=[{x:x.x,z:x.z}]}function bf(p,x){let b=p.g.position;if(p.sleep>0)return p.v=0,!1;if(!p.path.length){if(p.v=0,p.wait-=x,p.wait<=0){if(p.kind==="person")return p.wait=Gt(1.5,4),se(p),!1;up(p),p.wait=Gt(2,6),p.kind==="cat"&&(p.sit=Math.random()<.45,p.sit&&(p.path=[]))}return!1}let C=p.path[0],k=C.x-b.x,H=C.z-b.z,y=Math.hypot(k,H);if(y<.08)return p.path.shift(),!p.path.length&&p.kind==="person"&&ni(p),!0;let j=Math.atan2(k,H)-p.g.rotation.y;j=Math.atan2(Math.sin(j),Math.cos(j)),p.g.rotation.y+=j*Math.min(1,x*7);let rt=y+(p.path.length>1?99:0),Et=Math.abs(j)>1.1?p.speed*.15:p.speed*Math.min(1,rt/1.2+.25);p.v=(p.v||0)+(Et-(p.v||0))*Math.min(1,x*4);let nt=Math.min(y,p.v*x);return b.x+=Math.sin(p.g.rotation.y)*nt*.35+k/y*nt*.65,b.z+=Math.cos(p.g.rotation.y)*nt*.35+H/y*nt*.65,!0}function dp(p,x){if(Ht.slice().forEach(y=>{if(y.inCar){y.g.visible=!1;return}if(y.pool){let nt=Pe(y.love==="him"?1:0);if(nt){y.inside=!1,y.g.visible=!0,y.g.position.set(nt.x,nt.y-Wo,nt.z),y.g.rotation.set(0,nt.ry,0),y.parts.legL.rotation.x=-1.2+Math.sin(x*2.4+(y.love==="him"?1.3:0))*.35,y.parts.legR.rotation.x=-1.2+Math.sin(x*2.4+2+(y.love==="him"?1.3:0))*.35,y.parts.armL.rotation.x=y.parts.armR.rotation.x=.35,y.parts.head.rotation.set(0,y.love==="him"?-.4:.4,0);return}}if(y.onBench&&E){y.g.position.set(E.x+y.benchSide*.42,E.y+q.position.y*0-Wo+.05,E.z),y.g.rotation.set(0,E.ry,0),y.parts.legL.rotation.x=y.parts.legR.rotation.x=-1.45+Math.sin(x*1.5+y.i)*.1,y.parts.armL.rotation.x=y.parts.armR.rotation.x=-.25,y.parts.head.rotation.set(0,Math.sin(x*.4+y.i)*.4,0);return}if(y.wave>0&&!y.inside&&y.g.visible&&(y.v=0),y.pair&&Ht.indexOf(y.pair)<0){q.remove(y.g),Ht.splice(Ht.indexOf(y),1);return}let N=y.wave>0?!1:y.love==="him"?Re(y,p):y.pair?On(y.pair,y,p):bf(y,p);if(y.inside||!y.g.visible)return;if(y.sitting&&Ie){let nt=y.love==="her"?-.4:.4;pn.set(nt,.06,0),Ie.userData.seat.localToWorld(pn),q.worldToLocal(pn),y.g.position.set(pn.x,pn.y-Wo,pn.z),y.g.rotation.set(Ie.userData.pivot.rotation.x*.9,Ie.rotation.y,0),y.parts.legL.rotation.x=y.parts.legR.rotation.x=-1.45+Math.sin(x*1.7)*.25,y.parts.armL.rotation.x=y.parts.armR.rotation.x=-.5,y.parts.head.rotation.set(0,0,0);return}if(y.parts.scroll&&(y.parts.scroll.visible=!!kn&&y.goal==="hall"),y.wave>0){y.wave-=p;let nt=o.position.x-q.position.x-y.g.position.x,pt=o.position.z-q.position.z-y.g.position.z,It=Math.atan2(nt,pt)-y.g.rotation.y;It=Math.atan2(Math.sin(It),Math.cos(It)),y.g.rotation.y+=It*Math.min(1,p*8),y.parts.legL.rotation.x=y.parts.legR.rotation.x=0,y.parts.armL.rotation.x=0,y.parts.armR.rotation.x=-2.9,y.parts.armR.rotation.z=Math.sin(x*13)*.45,y.wave<=0&&(y.parts.armR.rotation.z=0);return}let j=Math.min(1,(y.v||0)/y.speed);y.t+=p*(N?3+7*j:2);let rt=N?Math.sin(y.t)*.75*j:0;y.parts.legL.rotation.x=rt,y.parts.legR.rotation.x=-rt,y.parts.armL.rotation.x=-rt*.8,y.parts.armR.rotation.x=rt*.8,y.g.rotation.x=0,y.parts.head.rotation.x=0,y.parts.head.rotation.z=0;let Et=Ln(y.g.position.x,y.g.position.z);if(y.g.position.y=Et+(N?Math.abs(Math.sin(y.t))*.06:0),!N&&!y.path.length){if(y.goal==="hall"){let nt=Math.PI-y.g.rotation.y;nt=Math.atan2(Math.sin(nt),Math.cos(nt)),y.g.rotation.y+=nt*Math.min(1,p*6),y.g.position.y=Et+Math.max(0,Math.sin(x*2.2+y.i))*.04,y.parts.armR.rotation.x=-1.35+Math.sin(x*1.6+y.i)*.08}else if(y.goal==="work"){let nt=Math.PI-y.g.rotation.y;nt=Math.atan2(Math.sin(nt),Math.cos(nt)),y.g.rotation.y+=nt*Math.min(1,p*6),y.parts.armR.rotation.x=-1.3+Math.sin(x*9+y.i)*.55,y.parts.armL.rotation.x=-.9+Math.sin(x*9+y.i+1.6)*.35,y.parts.head.rotation.x=.25}y.parts.head.rotation.y=y.goal==="work"?0:Math.sin(x*.7+y.i)*.4}else y.parts.head.rotation.y=0}),Bt.kiss>0&&Bt.him&&Bt.him.g.visible){Bt.kiss-=p;let y=Bt.her,N=Bt.him,j=Math.min(1,Math.sin(Math.min(1,(2.4-Bt.kiss)/2.4)*Math.PI)*1.6),rt=y.g.position.x-N.g.position.x,Et=y.g.position.z-N.g.position.z;if(N.sitting)N.parts.head.rotation.y=.9*j,N.parts.head.rotation.z=.25*j,y.parts.head.rotation.z=-.15*j;else{let nt=Math.atan2(rt,Et)-N.g.rotation.y;nt=Math.atan2(Math.sin(nt),Math.cos(nt)),N.g.rotation.y+=nt*Math.min(1,p*8);let pt=Math.atan2(-rt,-Et)-y.g.rotation.y;pt=Math.atan2(Math.sin(pt),Math.cos(pt)),y.g.rotation.y+=pt*Math.min(1,p*3)*.5,N.g.rotation.x=.2*j}Se.visible=!0,Se.position.set((y.g.position.x+N.g.position.x)/2,2+(2.4-Bt.kiss)*.35,(y.g.position.z+N.g.position.z)/2),Se.material.opacity=Math.min(1,Bt.kiss*1.5),Bt.kiss<=0&&(Se.visible=!1,N.g.rotation.x=0)}if(Ie){let y=Ie.userData.pivot,N=Bt.her&&Bt.her.sitting;y.rotation.x=N?Math.sin(x*1.7)*(Bt.kiss>0?.12:.32):y.rotation.x*Math.max(0,1-p*1.5)}let b=Js($i());wt.forEach((y,N)=>{if(!y.userData.wm)return;let j=0;if(N===Bt.home?j=0:(at(N)>0||y.userData.alwaysLit||b!=="sleep"&&Ht.some(rt=>rt.home===N&&rt.inside))&&(j=1),y.userData.lit=ti(y.userData.lit||0,j,Math.min(1,p*2)),y.userData.wm.emissiveIntensity=Wr*(.28+.7*y.userData.lit),y.userData.heart){let rt=Bt.her&&Bt.her.inside&&Bt.him.inside;y.userData.heart.material.emissiveIntensity=rt?.5+Math.max(0,Math.sin(x*5))*1.3:.2}at(N)>0&&y.userData.chimney&&Math.random()<p*2.2&&xi(y)});for(let y=bn.length-1;y>=0;y--){let N=bn[y];N.life+=p,N.m.position.y+=p*.9,N.m.position.x+=p*.25,N.m.scale.setScalar(1+N.life*.9),N.m.material.opacity=Math.max(0,.75-N.life*.3),N.life>2.5&&(q.remove(N.m),N.m.material.dispose(),bn.splice(y,1))}Hn+=p,Hn>2&&(Hn=0,vf()),[kt,Vt].forEach(y=>{if(y.sleep>0){y.sleep-=p;let Et=Math.min(1,y.sleepIn+=p*3);y.parts.legs.forEach((nt,pt)=>{nt.rotation.x=(pt<2?-1.45:1.45)*Et}),y.g.position.y=Ln(y.g.position.x,y.g.position.z)-.22*Et*y.g.scale.y,y.parts.head.rotation.x=.35*Et,y.parts.head.rotation.y=0,y.parts.eyes.forEach(nt=>{nt.scale.y=1-.8*Et}),y.parts.tail.rotation.z=Math.sin(x*.8)*.15,y.zzz.visible=!0,y.zzz.position.set(y.g.position.x,.95+x*.6%1*.45,y.g.position.z),y.zzz.material.opacity=.9-x*.6%1*.6,y.sleep<=0&&(y.zzz.visible=!1,y.parts.eyes.forEach(nt=>{nt.scale.y=1}),y.parts.head.rotation.x=0,y.wait=Gt(.3,1));return}let N=bf(y,p),j=Math.min(1,(y.v||0)/y.speed);y.t+=p*(N?4+8*j:2);let rt=N?Math.sin(y.t)*.6*j:0;y.parts.legs.forEach((Et,nt)=>{Et.rotation.x=nt===0||nt===3?rt:-rt}),y.kind==="cat"?(y.parts.tail.rotation.z=Math.sin(x*2)*.35,y.parts.tail.rotation.x=y.sit&&!N?.9:.5,y.g.children[0].rotation.x=0,y.parts.head.rotation.y=N?0:Math.sin(x*.5)*.5,y.g.position.y=Ln(y.g.position.x,y.g.position.z)):(y.parts.tail.rotation.z=Math.sin(x*(N?18:10))*.6,y.parts.head.rotation.x=N?0:Math.sin(x*1.3)*.1,y.g.position.y=Ln(y.g.position.x,y.g.position.z)+(N?Math.abs(Math.sin(y.t))*.07:0))});for(let y=ei.length-1;y>=0;y--){let N=ei[y];N.m.position.y>-.08?(N.vy-=p*9,N.m.position.y=Math.max(-.08,N.m.position.y+N.vy*p),N.m.position.y===-.08&&Br(N.m.position.x,N.m.position.z,.5)):N.m.position.y=-.08+Math.sin(x*3+y)*.015,N.life-=p,N.life<=0&&(q.remove(N.m),ei.splice(y,1))}_e.forEach(y=>{y.t+=y.dir*y.sp*p,(y.t>.93||y.t<.12)&&(y.dir*=-1,y.t=Math.max(.12,Math.min(.93,y.t)));let N=z.curve.getPointAt(y.t),j=z.curve.getTangentAt(y.t),rt=y.side+Math.sin(x*.7+y.ph)*.2;y.g.position.set(N.x-j.z*rt,-.36,N.z+j.x*rt),y.g.rotation.y=Math.atan2(j.x*y.dir,j.z*y.dir),y.g.userData.tail.rotation.y=Math.sin(x*9+y.ph)*.5}),Ke.forEach(y=>{y.a+=y.sp*p;let N=oe.x+Math.cos(y.a)*(oe.rx-1.6)*y.r,j=oe.z+Math.sin(y.a)*(oe.rz-1)*y.r,rt=null,Et=1e9;if(ei.forEach(nt=>{if(nt.m.position.y<=-.02){let pt=Math.hypot(nt.m.position.x-y.g.position.x,nt.m.position.z-y.g.position.z);pt<Et&&(Et=pt,rt=nt)}}),rt&&!y.jump){let nt=rt.m.position.x-y.g.position.x,pt=rt.m.position.z-y.g.position.z,It=Math.hypot(nt,pt),Zt=Math.min(It,2.6*p);y.g.position.x+=nt/(It||1)*Zt,y.g.position.z+=pt/(It||1)*Zt,y.g.position.y=-.3,y.g.rotation.y=Math.atan2(nt,pt),It<.25&&(q.remove(rt.m),ei.splice(ei.indexOf(rt),1),Br(rt.m.position.x,rt.m.position.z,.6)),y.a=Math.atan2((y.g.position.z-oe.z)/(oe.rz-1),(y.g.position.x-oe.x)/(oe.rx-1.6)),y.r=Math.min(.85,Math.max(.2,Math.hypot((y.g.position.x-oe.x)/(oe.rx-1.6),(y.g.position.z-oe.z)/(oe.rz-1)))),y.g.userData.tail.rotation.y=Math.sin(x*16+y.a)*.6;return}if(y.jump>0){y.jump+=p*.9;let nt=Math.sin(y.jump*Math.PI)*1.8;y.g.position.set(ti(y.jx,N,y.jump),-.34+nt,ti(y.jz,j,y.jump)),y.g.rotation.x=-Math.cos(y.jump*Math.PI)*1.1,y.jump>=1&&(y.jump=0,y.g.rotation.x=0,wn.position.set(N,-.09,j),wn.material.opacity=.55,wn.scale.setScalar(1))}else{let nt=N-y.g.position.x,pt=j-y.g.position.z;y.g.position.set(ti(y.g.position.x,N,Math.min(1,p*6)),-.34,ti(y.g.position.z,j,Math.min(1,p*6))),(nt||pt)&&(y.g.rotation.y=Math.atan2(nt,pt)),Math.random()<p*.05&&(y.jump=.001,y.jx=N,y.jz=j,wn.position.set(N,-.09,j),wn.material.opacity=.55,wn.scale.setScalar(1))}y.g.userData.tail.rotation.y=Math.sin(x*8+y.a)*.5}),z.glints.forEach(y=>{y.t=(y.t+y.sp*p*6)%1;let N=z.curve.getPointAt(y.t),j=z.curve.getTangentAt(y.t);y.m.position.set(N.x-j.z*y.side,.06,N.z+j.x*y.side),y.m.rotation.z=-Math.atan2(j.z,j.x),y.m.material.opacity=.35+Math.abs(Math.sin(x*3+y.side*9))*.5}),z.ftex.offset.y=(z.ftex.offset.y+p*1.6)%1,Yt.jet.scale.y=1+Math.sin(x*6)*.08,J.forEach(y=>{y.t=(y.t+p*.35)%1,y.m.position.set(y.x+Math.sin(y.t*6+y.z)*.3,-.1+y.t*1.8,y.z+y.t*.8),y.m.material.opacity=.55*(1-y.t),y.m.scale.setScalar(.6+y.t*1.2)}),Yt.drops.forEach(y=>{y.t=(y.t+p*.7)%1;let N=.15+y.t*.95,j=2.25+y.t*.6-y.t*y.t*2.35;y.m.position.set(Math.cos(y.a)*N,j,Math.sin(y.a)*N)}),z.foam.forEach((y,N)=>{let j=.8+Math.abs(Math.sin(x*5+N))*.5;y.scale.setScalar(j)}),Ut.ducks.forEach(y=>{y.a+=y.sp*p;let N=oe.x+Math.cos(y.a)*(oe.rx-2),j=oe.z+Math.sin(y.a)*(oe.rz-1.2);y.g.rotation.y=Math.atan2(N-y.g.position.x,j-y.g.position.z)||y.g.rotation.y,y.g.position.set(N,-.2+Math.sin(x*2+y.a)*.03,j)});for(let y=Ji.length-1;y>=0;y--){let N=Ji[y];N.material.opacity-=p*1.2,N.scale.multiplyScalar(1+p*2.5*N.userData.size),N.material.opacity<=0&&(q.remove(N),N.geometry.dispose(),Ji.splice(y,1))}wn.material.opacity>0&&(wn.material.opacity=Math.max(0,wn.material.opacity-p*.8),wn.scale.multiplyScalar(1+p*1.8)),_s.forEach(y=>{y.ph+=p,y.g.position.set(y.cx+Math.sin(y.ph*.4)*6,1.6+Math.sin(y.ph*1.3)*.5,y.cz+Math.cos(y.ph*.33)*4),y.g.rotation.y=y.ph*.4+Math.PI/2;let N=Math.sin(y.ph*18)*1.1;y.g.userData.l.rotation.y=N,y.g.userData.r.rotation.y=-N});let C=Ks.geometry.attributes.position;for(let y=0;y<C.count;y++)C.setY(y,1.5+Math.sin(x*.8+y)*.8),C.setX(y,C.getX(y)+Math.sin(x*.5+y*3)*p*.4);if(C.needsUpdate=!0,U.forEach(y=>{y.position.x+=y.userData.speed*p,y.position.x>90&&(y.position.x=-90)}),Jn&&wf(p),B.rotation.y+=p*.012,q.position.y=Math.sin(x*.33)*.32,R.forEach(y=>{y.position.y=y.userData.y0+(y.userData.withIsland?q.position.y:Math.sin(x*.5+y.userData.ph)*.3)}),et.forEach(y=>{y.material.opacity=y.userData.base*Math.max(0,Math.sin(x*1.8+y.userData.ph))}),V.forEach(y=>{y.material.opacity=y.userData.base*(.55+.45*Math.sin(x*1.3+y.userData.ph))}),Wr>.6)if(K.t<0){if(K.wait-=p,K.wait<=0){let y=Gt(0,Math.PI*2);K.from.set(Math.cos(y)*180,Gt(110,170),Math.sin(y)*180-40),K.dir.set(Gt(-1,1),Gt(-.55,-.35),Gt(-.3,.3)).normalize(),K.t=0}}else{K.t+=p/1.1,X.position.copy(K.from).addScaledVector(K.dir,K.t*120);let y=X.position.clone().project(o),N=X.position.clone().addScaledVector(K.dir,10).project(o);X.material.rotation=Math.atan2(N.y-y.y,N.x-y.x),X.material.opacity=Math.sin(Math.min(1,K.t)*Math.PI)*.95,K.t>=1&&(K.t=-1,K.wait=Gt(7,16),X.material.opacity=0)}else X.material.opacity=0;let k=xt.userData.flag;k.rotation.y=Math.sin(x*3)*.25;let H=xt.userData.bell;H.material.emissiveIntensity=kn?.6+Math.sin(x*6)*.4:0,H.rotation.z=kn?Math.sin(x*7)*.35:0}let Jn=null;function Sf(p,x){if(!ft.car||Jn)return!1;x=x||{};let b=ft.car,C={x:b.position.x,z:b.position.z,ry:b.rotation.y},k=dt.nearest(ft.exit.x,ft.exit.z),H=new Set(dt.doorNodes),N=dt.nodes.map((Jt,Me)=>Me).filter(Jt=>!H.has(Jt)&&Math.abs(Ln(dt.nodes[Jt].x,dt.nodes[Jt].z))<.2).filter(Jt=>Math.hypot(dt.nodes[Jt].x-C.x,dt.nodes[Jt].z-C.z)>30),j=Jt=>Jt[Math.floor(Math.random()*Jt.length)],rt=(t.houses||[]).findIndex(Jt=>Jt.id==="store"),Et=x.onShop&&rt>=0?dt.nearest(dt.nodes[dt.doorNodes[rt]].x,dt.nodes[dt.doorNodes[rt]].z,!0):-1,nt=(Et>=0?[Et]:[]).concat(N.length?[j(N)]:[]),pt=[{x:C.x,z:C.z},{x:ft.exit.x,z:ft.exit.z}],It=k,Zt=-1;return nt.concat([k]).forEach(Jt=>{dt.path(It,Jt,!0).forEach(Me=>pt.push({x:Me.x,z:Me.z})),It=Jt,Jt===Et&&Zt<0&&(Zt=pt.length-1)}),pt.push({x:ft.exit.x,z:ft.exit.z},{x:C.x,z:C.z-Math.cos(C.ry)*.01}),Zt>=0&&(pt[Zt].shop=!0),pt=pt.filter((Jt,Me)=>Jt.shop||!Me||Math.hypot(Jt.x-pt[Me-1].x,Jt.z-pt[Me-1].z)>.3),Jn={pts:pt,i:1,home:C,done:p,v:0,last:0,onShop:x.onShop,wait:!1},En(),[Bt.her,Bt.him].forEach(Jt=>{Jt&&(Jt.inCar=!0,Jt.sitting=!1,Jt.path=[],Jt.inside=!1,Jt.g.visible=!1)}),Ie&&(Ie.userData.pivot.rotation.x=0),!0}function wf(p){let x=ft.car,b=Jn,C=b.pts[b.i];if(b.wait)return;let k=b.i===b.pts.length-1,H=C.x-x.position.x,y=C.z-x.position.z,N=Math.hypot(H,y);if(b.v=Math.min(k?2:6.5,b.v+p*3),N<.35){if(C.shop&&b.onShop){C.shop=!1,b.wait=!0,b.v=0,b.onShop(()=>{Jn===b&&(b.wait=!1)});return}if(b.i++,b.i>=b.pts.length){x.position.set(b.home.x,Ln(b.home.x,b.home.z),b.home.z),x.rotation.y=b.home.ry;let nt=b.done;Jn=null,[Bt.her,Bt.him].forEach((pt,It)=>{if(!pt)return;pt.inCar=!1;let Zt=Y(pt.home);pt.g.position.set(Zt.x+It*.7,0,Zt.z),pt.g.visible=!0,pt.wait=Gt(2,5)}),nt&&nt();return}return}let j=Math.min(N,b.v*p);x.position.x+=H/N*j,x.position.z+=y/N*j,x.position.y=Ln(x.position.x,x.position.z);let rt=Math.atan2(H,y)+(k?Math.PI:0),Et=x.rotation.y;for(;rt-Et>Math.PI;)rt-=Math.PI*2;for(;rt-Et<-Math.PI;)rt+=Math.PI*2;x.rotation.y=Et+(rt-Et)*Math.min(1,p*5)}let Wr=0;function Xr(){let p=new Date,x=i!=null?i:p.getHours()+p.getMinutes()/60,b=sp(x);Wr=b.night,r.background=b.sky,r.fog.color.copy(b.sky),g.uniforms.bottom.value.copy(b.sky).lerp(new he(16777215),.18*(1-b.night)).lerp(new he(10324950),.4*b.night),g.uniforms.top.value.copy(b.sky).lerp(new he(b.night>.5?2501490:7320547),.5),d.intensity=b.amb,d.color.set(b.night>.5?13158143:16777215),d.groundColor.set(b.night>.5?8160432:12048288),_.color.copy(b.sun),_.intensity=b.power;let C=(x-6)/12*Math.PI,H=x>=5.5&&x<=18.6?C:((x+12)%24-6)/12*Math.PI,y=Math.cos(H)*70,N=Math.max(Math.sin(H),.25)*70;_.position.set(y,N,40+Ue.cz),_.target.position.set(0,0,Ue.cz),w.position.set(Math.cos(C)*200,Math.sin(C)*160,-120),w.visible=Math.sin(C)>-.05;let j=((x+12)%24-6)/12*Math.PI;S.position.set(Math.cos(j)*200,Math.sin(j)*160,-120),S.visible=b.night>.3&&Math.sin(j)>0,L.material.opacity=b.night,V.forEach(rt=>{rt.userData.base=b.night}),B.mat.color.set(b.night>.5?10131656:16777215),et.forEach(rt=>{rt.userData.base=.55+b.night*.45}),Ks.material.opacity=b.night*.95,gc.forEach(rt=>{rt.emissiveIntensity=b.night*.95}),M.forEach(rt=>{rt.intensity=b.night*18}),U.forEach(rt=>{rt.userData.mat.color.set(b.night>.5?8029096:16777215)}),_s.forEach(rt=>{rt.g.visible=b.night<.5})}let qo=1,Zo=1;function Ko(){qo=n.clientWidth||window.innerWidth,Zo=n.clientHeight||window.innerHeight,s.setSize(qo,Zo,!1),o.aspect=qo/Zo,o.updateProjectionMatrix()}let Ci=new xn;function pp(p,x){Ci.fov=o.fov,Ci.aspect=o.aspect,Ci.near=.5,Ci.far=1e3,Ci.updateProjectionMatrix();let b=[];for(let y=0;y<48;y++){let N=y/48*Math.PI*2,j=qs(N);b.push(new O(Math.cos(N)*j,0,Ue.cz+Math.sin(N)*j))}b.push(new O(Mn[0],9,Mn[1]),new O(Ze.x,Ze.H+8,Ze.z)),gs.forEach(([y,N,j,rt])=>b.push(new O(y,rt,N))),Xe.forEach(([y,N])=>b.push(new O(y,6.5,N)));let C=y=>{Ci.position.set(0,Math.cos(p)*y,Math.sin(p)*y).add(x),Ci.lookAt(x),Ci.updateMatrixWorld();let N=new O;return b.every(j=>(N.copy(j).project(Ci),Math.abs(N.x)<.97&&N.y>-.97&&N.y<.86))},k=10,H=600;for(let y=0;y<30;y++){let N=(k+H)/2;C(N)?H=N:k=N}return H}function wc(){Ko();let p=e==="port"?.6:.88,x=new O(0,0,1.5),b=pp(p,x);return{p:new O(0,Math.cos(p)*b,Math.sin(p)*b).add(x),t:x}}function Tf(){let p=wc();a.target.copy(p.t),o.position.copy(p.p),a.update()}let mp=1800,gp=1900,Ye=null,Yr=!1,qr=null,Tc=p=>p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;function Af(p){let x=p.userData.face||0,b=Math.sin(x),C=Math.cos(x),k=p.userData.doorZ-1.3,H=p.position.y,y=(N,j)=>new O(p.position.x+b*(k+N),H+j,p.position.z+C*(k+N));return{near:y(3.2,1.75),nearT:y(-1,1.45),inside:y(.35,1.6),insideT:y(-2,1.4)}}function Rf(p,x,b,C){if(!b)return p.clone().lerp(x,C);let k=p.clone().lerp(x,C),H=x.clone().lerp(b,C);return k.lerp(H,C)}function xp(p,x,b){let C=wt.find(H=>H.userData.id===p);if(!C){x&&x();return}let k=Af(C);qr={p:o.position.clone(),t:a.target.clone()},Ye={mode:"in",start:performance.now(),dur:mp,h:C,done:x,at:b&&b.at,atFired:!1,p:[qr.p,k.near,k.inside],t:[qr.t,k.nearT,k.insideT]},a.enabled=!1,Yr=!0}function _p(p,x){let b=wt.find(H=>H.userData.id===p);if(!b){Cf(),x&&x();return}let C=Af(b),k=qr||wc();b.userData.hinge&&(b.userData.hinge.rotation.y=-1.7),o.position.copy(C.inside),a.target.copy(C.insideT),o.lookAt(a.target),Ye={mode:"out",start:performance.now(),dur:gp,h:b,done:x,p:[C.inside,C.near,k.p],t:[C.insideT,C.nearT,k.t]},a.enabled=!1,Yr=!0}function yp(){if(!Ye)return;let p=Math.min(1,(performance.now()-Ye.start)/Ye.dur),x=Tc(p);o.position.copy(Rf(Ye.p[0],Ye.p[1],Ye.p[2],x)),a.target.copy(Rf(Ye.t[0],Ye.t[1],Ye.t[2],x)),o.lookAt(a.target);let b=Ye.h.userData.hinge;if(b&&(Ye.mode==="in"?b.rotation.y=-1.7*Tc(Math.min(1,Math.max(0,(p-.25)/.45))):b.rotation.y=-1.7*(1-Tc(Math.min(1,Math.max(0,(p-.2)/.5))))),Ye.at&&!Ye.atFired&&p>=Ye.at.k&&(Ye.atFired=!0,Ye.at.fn()),p>=1){let C=Ye.done,k=Ye.mode;Ye=null,k==="out"&&(Yr=!1,a.enabled=!0,a.update()),C&&C()}}function Cf(){if(!Yr||Ye&&Ye.mode==="out")return;Yr=!1,Ye=null,a.enabled=!0,wt.forEach(x=>{x.userData.hinge&&(x.userData.hinge.rotation.y=0)});let p=qr||wc();o.position.copy(p.p),a.target.copy(p.t),a.update()}let vs=new Dr,Pf=new Tt,Pi=null,Qs=0,Ac=!1;window.addEventListener("pointerdown",p=>{!p.isTrusted||p.pointerType!=="touch"||(p.isPrimary&&(Qs=0,Ac=!1),Qs++,Qs>1&&(Ac=!0))},!0);let If=p=>{p.isTrusted&&p.pointerType==="touch"&&(Qs=Math.max(0,Qs-1))};window.addEventListener("pointerup",If,!0),window.addEventListener("pointercancel",If,!0),s.domElement.addEventListener("pointerdown",p=>{(p.isPrimary||p.pointerType!=="touch")&&(Pi={x:p.clientX,y:p.clientY,t:performance.now()})}),s.domElement.addEventListener("pointercancel",()=>{Pi=null}),s.domElement.addEventListener("pointerup",p=>{if(!p.isTrusted||p.pointerType==="touch"&&(Ac||Qs>0)){Pi=null;return}if(!Pi||Math.hypot(p.clientX-Pi.x,p.clientY-Pi.y)>8||performance.now()-Pi.t>600){Pi=null;return}Pi=null;let x=s.domElement.getBoundingClientRect();if(Pf.set((p.clientX-x.left)/x.width*2-1,-((p.clientY-x.top)/x.height)*2+1),vs.setFromCamera(Pf,o),Bt.her&&Bt.her.g.visible&&Bt.him.g.visible&&vs.intersectObjects([Bt.her.g,Bt.him.g],!0)[0]){Bt.kiss>0||(Bt.kiss=2.4,Bt.her.sitting||(Bt.her.path=[],Bt.her.wait=Math.max(Bt.her.wait,2.8)));return}if(ft.car&&!Jn&&t.onCar&&vs.intersectObject(ft.car,!0)[0]){t.onCar();return}let b=Ht.filter(j=>!j.love&&!j.inside&&j.g.visible),C=vs.intersectObjects(b.map(j=>j.g),!0)[0];if(C){let j=C.object,rt=b.find(Et=>{let nt=j;for(;nt;){if(nt===Et.g)return!0;nt=nt.parent}return!1});if(rt){kn&&rt.goal==="hall"?Ec(rt,"Work!!!",!0):(rt.wave=2.2,Ec(rt,"Hi!"));return}}let k=vs.intersectObjects([kt.g,Vt.g],!0)[0];if(k){let j=kt.g.getObjectById(k.object.id)?kt:Vt;j.sleep>0||(j.sleep=3,j.sleepIn=0,j.path=[]);return}let H=vs.intersectObject(bt)[0];if(H){Ai(H.point.x-q.position.x,H.point.z-q.position.z);return}let y=vs.intersectObjects(wt,!0)[0];if(!y)return;let N=y.object;for(;N&&!N.userData.id;)N=N.parent;N&&t.onPick(N.userData.id)});let Zr=new O;function Mp(p){let x=wt.find(b=>b.userData.id===p);return x?(Zr.set(x.position.x,x.position.y+x.userData.top,x.position.z),Zr.project(o),{x:(Zr.x+1)/2*qo,y:(1-Zr.y)/2*Zo,visible:Zr.z<1}):null}let Rc=new zo,Kr=!1,tr=!0,Lf=0,Df=[];function Uf(){if(!Kr)return;if(!tr||document.hidden){Kr=!1;return}requestAnimationFrame(Uf);let p=Math.min(.12,Rc.getDelta()),x=Rc.elapsedTime;x-Lf>20&&(Xr(),Lf=x),dp(p,x),Ye?yp():a.update(),s.render(r,o),Df.forEach(b=>b()),bc(),hp(p)}function Cc(){Kr||(Kr=!0,Rc.getDelta(),requestAnimationFrame(Uf))}let Nf=()=>{!document.hidden&&tr&&(Xr(),Cc())},zf=()=>{tr&&Ko()};return document.addEventListener("visibilitychange",Nf),window.addEventListener("resize",zf),Xr(),Tf(),Cc(),/[?&]debug3d/.test(location.search)&&(window.__v3d={SOURCE:Bn,POND:oe,drive:(p,x)=>Sf(p,x),driveFF:p=>{for(let x=0;x<p&&Jn;x++)wf(.1);return Jn?Jn.i+"/"+Jn.pts.length+(Jn.wait?" wait":""):"home"},get car(){return ft.car},renderer:s,people:Ht,couple:Bt,get swing(){return Ie},graph:dt,cat:kt,dog:Vt,routine:Js,realHour:$i,camera:o,controls:a,water:bt,food:ei,get urgent(){return kn},set urgent(p){kn=p},say:Ec}),{setUrgent(p){let x=kn;kn=p||0,!!x!=!!kn&&Ht.forEach(b=>{!b.love&&!b.helper&&(b.path=[],b.wait=Gt(0,1.5))})},setBusy(p){let x={};(t.houses||[]).forEach((b,C)=>{p&&p[b.id]>0&&(x[C]=p[b.id])}),Pt=x,vf()},anchor:Mp,onFrame(p){Df.push(p)},night(){return Wr},setTimeMode(p){i=p==="day"?11:p==="night"?22:null,Xr()},show(p){tr=!!p,tr&&(Cf(),Ko(),Xr(),Cc())},enterHouse:xp,exitHouse:_p,drive:Sf,setNames(p,x){Gn=p||null,xf=!!x,ap(),op(),lp()},mateLookOf(p){let x=Ht.find(b=>b.pair&&(t.houses||[])[b.home]&&t.houses[b.home].id===p);return x?x.parts.look:null},genderOf(p){let x=Ht.find(b=>!b.love&&!b.helper&&!b.pair&&(t.houses||[])[b.home]&&t.houses[b.home].id===p);return x?tp(x.parts.look)?"f":"m":""},resize:Ko,recenter:Tf,layout:e,destroy(){Kr=!1,tr=!1,document.removeEventListener("visibilitychange",Nf),window.removeEventListener("resize",zf),a.dispose(),r.traverse(p=>{p.geometry&&p.geometry.dispose()}),s.dispose(),s.domElement.remove()}}}var an=9,Zn=7,vn=4.4,xc=7;function fc(n,t){return new he(n).lerp(new he(16777215),t).getHex()}function di(n,t,e,i,s){let r=new $t;return r.position.set(t,0,e),r.rotation.y=i||0,n.add(r),r.add(I(2.2,.08,1,s||14267535,0,.78,0)),[[-1,-.42],[1,-.42],[-1,.42],[1,.42]].forEach(([o,a])=>r.add(I(.08,.78,.08,11569768,o,.39,a))),r}function qn(n,t,e,i){let s=new $t;return s.position.set(t,0,e),s.rotation.y=i||0,n.add(s),s.add(I(.55,.08,.55,16165309,0,.5,0)),s.add(I(.55,.6,.08,16165309,0,.82,-.26)),[[-.22,-.22],[.22,-.22],[-.22,.22],[.22,.22]].forEach(([r,o])=>s.add(I(.06,.5,.06,9206379,r,.25,o))),s}function Ys(n,t,e){n.add(I(.7,.04,.48,14211296,t,.84,e));let i=I(.7,.46,.04,14211296,t,1.07,e-.24);i.rotation.x=-.25,n.add(i);let s=I(.62,.38,.02,0,t,1.07,e-.215,new tn({color:12576498}));s.rotation.x=-.25,n.add(s)}function pi(n,t,e,i,s){let r=new $t;r.position.set(t,0,e),r.rotation.y=i||0,n.add(r),r.add(I(1.8,2.4,.4,12883572,0,1.2,0));for(let o=0;o<4;o++){r.add(I(1.7,.06,.36,14862765,0,.3+o*.55,.03));for(let a=0;a<(s||6);a++){let c=Ti.flower[(a+o)%Ti.flower.length],l=.3+(a*7+o*3)%4*.04;r.add(I(.16,l,.28,c===16777215?10934504:c,-.7+a*.24,.33+o*.55+l/2,.05))}}return r}function zn(n,t,e){n.add(I(.5,.5,.5,0,t,.25,e,Ne(lt.CLAY,16368540))),[[0,.78,0,.56],[.2,1.18,.1,.36],[-.18,1.12,-.12,.34]].forEach(([i,s,r,o],a)=>n.add(I(o,o,o,0,t+i,s,e+r,Ne([lt.LEAF_G,lt.LEAF_L,lt.LEAF_M][a]))))}function qi(n,t,e,i,s,r,o,a,c){let l=new $t;return l.position.set(t,e,i),l.rotation.y=s,n.add(l),l.add(I(r+.12,o+.12,.05,12883572,0,0,0)),l.add(I(r,o,.06,a,0,0,.01)),(c||[]).forEach(([h,u,f,d])=>l.add(I(d||.32,d||.32,.03,f,h,u,.06))),l}function ko(n,t,e,i,s){let r=[[-.45,.25],[-.15,.45],[.15,.35],[.45,.6]],o=qi(n,t,e,i,s,1.4,1.1,16775920);return r.forEach(([a,c],l)=>o.add(I(.2,c,.03,[16758465,10934504,14542964,14273008][l],a,-.4+c/2,.06))),o}function Gd(n,t,e,i,s,r){let o=r?2.2:1.1,a=r?1.6:.9,c=qi(n,t,e,i,s,o,a,16777215);c.add(I(o,a*.18,.04,16751536,0,a*.41,.05));for(let l=0;l<4;l++)for(let h=0;h<7;h++){let u=(l*7+h)%9===3;c.add(I(o/9,a/7,.02,u?16766687:15985894,-o/2+(h+1)*o/8,a*.2-l*a/5.5,.06))}return c}function qy(n,t,e,i,s){let r=new $t;r.position.set(t,e,i),r.rotation.y=s,n.add(r);let o=new Lt(new qe(.35,.35,.06,20),me(16775920));o.rotation.x=Math.PI/2,r.add(o);let a=new Lt(new us(.36,.04,6,20),me(16165309));r.add(a);let c=I(.04,.18,.02,4865855,0,.08,.05),l=I(.03,.27,.02,4865855,0,.12,.06);return r.add(c,l),r.userData.hands=[c,l],r}function Zy(n,t,e){let i=new Lt(new yn(.28,12,10),me(16758465));i.scale.set(1.3,1,1),i.position.set(t,1.1,e),n.add(i),n.add(I(.12,.1,.1,16751536,t+.38,1.1,e)),[[-.15,-.12],[.15,-.12],[-.15,.12],[.15,.12]].forEach(([s,r])=>n.add(I(.07,.12,.07,16751536,t+s,.86,e+r))),n.add(I(.12,.02,.03,9202282,t,1.38,e));for(let s=0;s<3;s++)for(let r=0;r<2+s;r++){let o=new Lt(new qe(.09,.09,.03,12),me(16111752));o.position.set(t-.7+s*.22,.84+r*.035,e+.1),n.add(o)}}function Wd(n,t,e,i){let s=new $t;s.position.set(t,0,e),s.rotation.y=i||0,n.add(s),s.add(I(1,1.1,.9,10135480,0,.55,0));let r=new Lt(new qe(.14,.14,.05,14),me(16111752));return r.rotation.x=Math.PI/2,r.position.set(.15,.6,.46),s.add(r),s.add(I(.06,.3,.05,16111752,-.3,.6,.46)),s}function Ky(n,t,e,i){let s=new $t;return s.position.set(t,0,e),s.rotation.y=i||0,n.add(s),s.add(I(2,.08,.45,12883572,0,1.3,0)),s.add(I(2,.08,.45,12883572,0,.6,0)),[-1,1].forEach(r=>s.add(I(.08,1.4,.45,11569768,r*.96,.7,0))),[.6,1.3].forEach((r,o)=>[-.65,-.2,.25,.7].forEach((a,c)=>{let l=new Lt(new qe(.15,.15,.4,12),new Ee({color:15136507,transparent:!0,opacity:.7}));l.position.set(a,r+.24,0),s.add(l);let h=.08+(c+o*2)%4*.08,u=new Lt(new qe(.12,.12,h,12),me(16111752));u.position.set(a,r+.06+h/2,0),s.add(u)})),s}function Jy(n,t,e,i){let s=new $t;return s.position.set(t,0,e),s.rotation.y=i||0,n.add(s),s.add(I(.9,1.5,.7,10934504,0,.75,0)),[.35,.8,1.25].forEach(r=>{s.add(I(.8,.38,.04,12576498,0,r,.36)),s.add(I(.25,.05,.05,16775920,0,r+.08,.39))}),s}function $y(n,t,e){[0,2.1,4.2].forEach(r=>{let o=I(.04,1.4,.04,7035470,t+Math.cos(r)*.25,.65,e+Math.sin(r)*.25);o.rotation.set(Math.sin(r)*.3,0,-Math.cos(r)*.3),n.add(o)}),n.add(I(.4,.28,.25,4865855,t,1.45,e));let i=new Lt(new qe(.09,.09,.15,12),me(3025462));i.rotation.x=Math.PI/2,i.position.set(t,1.45,e+.18),n.add(i);let s=new Lt(new us(.4,.05,6,24),new tn({color:16774351}));s.position.set(t-.9,1.7,e-.3),n.add(s),n.add(I(.04,1.7,.04,7035470,t-.9,.85,e-.3))}function jy(n,t,e,i,s){let r=qi(n,t,e,i,s,1.2,.7,15785156);[-.4,-.13,.13,.4].forEach((o,a)=>{r.add(I(.05,.05,.08,9206379,o,.18,.08)),r.add(I(.1,.22,.03,[16111752,10934504,16758465,10738109][a],o,-.02,.08))})}var lf={work:{first:"list",build(n,t){let e=di(n,-1.6,-2.4);Ys(e,.2,0),e.add(I(.3,.2,.22,16777215,-.75,.92,.1)),qn(n,-1.4,-1.55,Math.PI),t.seat={x:-1.4,z:-1.6,ry:Math.PI,y:.54},qi(n,-4.45,1.8,.4,Math.PI/2,2.6,1.4,16777215,[[-.9,.35,16773544],[-.4,.4,16758465],[.1,.3,10934504],[.6,.38,10738109],[-.8,-.2,16758465],[-.2,-.25,16773544],[.5,-.2,14273008]]),pi(n,4.25,-.6,-Math.PI/2),ko(n,4.44,2.2,1.6,-Math.PI/2),$y(n,3.4,4.6),zn(n,-3.9,-3)},corners:{list:[.8,2.9,5.8,-1.3,1,-2.2],board:[2.4,2.7,4.2,-4.3,1.6,.3],stats:[-2.4,2.7,4.2,4.3,1.5,.3],posts:[-.6,2.5,8.6,3.2,1.3,4.4]}},money:{first:"overview",build(n,t){let e=di(n,0,-2.3,0,16368540);Zy(e,.4,0),e.add(I(.35,.05,.45,9417689,-.5,.84,.1)),qn(n,.2,-1.45,Math.PI),t.seat={x:.2,z:-1.5,ry:Math.PI,y:.54},Gd(n,-4.44,1.9,-.8,Math.PI/2,!0),ko(n,-4.44,1.9,2.1,Math.PI/2),Ky(n,4.2,-1,-Math.PI/2),Jy(n,3.6,-3,0),Wd(n,3.6,2,-Math.PI/2.5),zn(n,-3.9,-3),t.windowX=-1.9},corners:{overview:[.6,2.9,5.8,0,1,-2.3],calendar:[2.6,2.7,3.6,-4.3,1.8,-.8],stats:[2.6,2.7,5.4,-4.3,1.8,1.8],budget:[-2.4,2.7,3.6,4.2,1.1,-1.2],history:[-1.6,2.7,3.8,3.4,1,-3],categories:[-1.6,2.5,6.2,3.6,.7,2]}},calendar:{first:"main",build(n,t){Gd(n,-.1,2.05,-3.44,0,!0),qy(n,-2.6,2.5,-3.44,0),t.windowX=2.9;let e=di(n,-1.2,-1.6);e.add(I(.5,.06,.36,16773544,.3,.84,0)),e.add(I(.04,.04,.3,15834032,.65,.88,0)),qn(n,-1,-.75,Math.PI),t.seat={x:-1,z:-.8,ry:Math.PI,y:.54},pi(n,4.25,.2,-Math.PI/2,5),zn(n,3.8,2.6)},corners:{main:[-.2,2.9,5.8,-.4,1.5,-2.8]}},account:{first:"main",build(n,t){Wd(n,3.7,-2.6,-.3),jy(n,-.5,2,-3.44,0),t.windowX=1.7;let e=di(n,-1.8,-1.8,.2);Ys(e,0,0),qn(n,-1.75,-.95,Math.PI+.2),t.seat={x:-1.72,z:-1,ry:Math.PI+.2,y:.54},pi(n,-4.25,.6,Math.PI/2,5),zn(n,3.9,1.8)},corners:{main:[-.2,2.9,5.8,-.9,1.2,-2.4]}},love:{first:"main",build(n,t){let i=new $t;i.position.set(-.2,0,-2.4),n.add(i),i.add(I(2.6,.45,.9,16165309,0,.32,0)),i.add(I(2.6,.75,.25,15834032,0,.8,-.35)),[-1,1].forEach(V=>i.add(I(.25,.65,.9,15834032,V*1.3,.45,0)));let s=xs(16744350);s.scale.setScalar(.4),s.position.set(1,.75,-.15),i.add(s),t.seats=[{x:-.65,z:-2.25,ry:0,y:.56},{x:.25,z:-2.25,ry:0,y:.56}],t.sofa=!0,t.couple=!0,[[-2.35,2.95,.55,3095915],[-2.05,2.95,-.55,15230251]].forEach(([V,X,K,q])=>{let W=new $t;W.position.set(V,X,-3.44+.06),W.rotation.z=K,n.add(W),W.add(I(.06,.34,.05,16777215,0,-.5,0)),W.add(I(.025,.34,.025,10135480,0,-.17,0));let _t=new Lt(new us(.17,.02,6,22),me(q));_t.scale.y=1.3,_t.position.y=.2,W.add(_t);for(let Ct=-3;Ct<=3;Ct++)W.add(I(.004,.42,.004,16777215,Ct*.045,.2,0)),W.add(I(.32,.004,.004,16777215,0,.2+Ct*.055,0))});{let V=document.createElement("canvas");V.width=128,V.height=64;let X=V.getContext("2d");X.fillStyle="#ffffff",X.fillRect(0,0,128,64),X.fillStyle="#e8652b",X.fillRect(0,8,128,16),X.fillStyle="#26305a",X.beginPath(),X.moveTo(0,64),X.lineTo(0,24),X.lineTo(14,24),X.lineTo(30,64),X.fill(),X.fillStyle="#26305a",X.fillRect(0,6,128,2),X.fillRect(26,28,102,2),X.font="bold 13px sans-serif",X.fillText("YONEX",74,54),X.beginPath(),X.arc(60,49,3,0,7),X.arc(67,49,3,0,7),X.lineWidth=2,X.strokeStyle="#26305a",X.stroke();let K=new _n(V);K.colorSpace=De;let q=me(16777215),W=new Ee({map:K}),_t=new Lt(new Be(1.15,.58,.36),[q,q,me(15230251),q,W,W]);_t.position.set(-2.2,1.62,-3.44+.22),_t.castShadow=!0,n.add(_t),[-.28,.28].forEach(Ct=>{n.add(I(.06,.5,.03,16777215,-2.2+Ct*.9,2.02,-3.44+.2))}),n.add(I(.5,.06,.06,2502746,-2.2,2.28,-3.44+.2)),n.add(I(.06,.06,.16,9206379,-2.2,2.32,-3.44+.1))}n.add(I(1.42,1.08,.06,12883572,-.2,2.6,-3.44+.02)),n.add(I(1.28,.94,.07,16775920,-.2,2.6,-3.44+.03));let r=new Lt(new ls(1.1,.78),new tn({color:16766687}));r.position.set(-.2,2.6,-3.44+.075),r.userData.pick="frame",n.add(r),t.frames=[r];for(let V=0;V<14;V++){let X=new Lt(new yn(.05,6,5),new tn({color:[16773544,16758465][V%2]}));X.position.set(-4+V*.62,3.45-Math.sin(V*.9)*.08,-3.38),n.add(X)}let o=new $t;o.position.set(-2,0,-2.4),n.add(o);let a=new Lt(new qe(.42,.42,.06,18),me(14861214));a.position.y=.6,o.add(a),o.add(I(.07,.6,.07,11569768,0,.3,0));let c=new Lt(new qe(.22,.25,.04,14),me(11569768));c.position.y=.02,o.add(c);let l=new Lt(new yn(.13,16,12),me(13231096));l.scale.y=1.3,l.position.y=.8,o.add(l),[[0,1.08,0,16758465],[.08,1.02,.05,16773544],[-.08,1.04,-.03,16165309]].forEach(([V,X,K,q])=>{o.add(I(.015,.25,.015,8173679,V*.6,.95,K*.6));let W=new Lt(new yn(.06,10,8),me(q));W.position.set(V,X,K),o.add(W)});let h=new $t;h.userData.pick="up",n.add(h);let u=Ne(lt.PLANKS),f=Ne(lt.PLANK_GREY,16165309),d=-3.95;for(let V=0;V<10;V++){let X=.6-V*.32,K=(V+1)*.44;h.add(I(.95,K,.32,0,d,K/2,X,u)),h.add(I(.6,.04,.32,0,d,K+.02,X,f)),V%3===0&&h.add(I(.06,.8,.06,16777215,d+.5,K+.4,X))}{let V=Math.hypot(3.2,4.4),X=I(.08,.08,V,16777215,d+.5,2.2+.8+.22,.6-1.6+.16);X.rotation.x=-Math.atan2(4.4,3.2),h.add(X)}t.stairHole={x0:-an/2,x1:-3,z0:-Zn/2,z1:-.7};let _=Hy(Math.PI/4,.42);_.position.set(d+.2,2.2,.2),h.add(_);let M=new $t;M.position.set(2.75,0,-1.25),n.add(M),M.add(I(1.5,.06,.95,14861214,0,.76,0)),[[-.65,-.38],[.65,-.38],[-.65,.38],[.65,.38]].forEach(([V,X])=>M.add(I(.06,.76,.06,11569768,V,.38,X))),[-1,1].forEach(V=>{let X=Xi("bowl",{soup:"#f6efe0",noodle:"#fffaf0"},.3);X.position.set(V*.4-.16,.79,-.18),M.add(X);let K=Xi("bowl",{soup:"#d98c4a",top:["#8a5233","#8a5233","#a86a40","#7fc46a"]},.3);K.position.set(V*.4+.16,.79,-.18),M.add(K),M.add(I(.32,.012,.012,12883572,V*.4,.8,.05)),M.add(I(.32,.012,.012,12883572,V*.4,.8,.08))});let g=Xi("plate",{dots:["#6fb85a","#8fcc7c","#6fb85a","#8fcc7c","#6fb85a","#8fcc7c","#6fb85a","#8fcc7c"]},.4);g.position.set(0,.79,-.05),M.add(g),qn(n,2.75-.4,-1.25-.85,0),qn(n,2.75+.4,-1.25-.85,0),t.dining=[{x:2.75-.4,z:-1.25-.8,ry:0,y:.54},{x:2.75+.4,z:-1.25-.8,ry:0,y:.54}],t.windowX=2.7,t.bigWindow=!0,zn(n,3.95,1.4),t.dinner=M,t.defaultDishes=M.children.slice(5);let m=vn+.3,w=new $t;w.position.y=m,n.add(w);let S=Zn+xc,v=xc/2,F=t.stairHole;for(let V=0;V<12;V++){let X=-an/2+(V+.5)*an/12,K=V%2?15981768:15651517;if(X<F.x1){let q=F.z1,W=v+S/2,_t=I(an/12,.1,W-q,K,X,-.05,(q+W)/2);w.add(_t)}else w.add(I(an/12,.1,S,K,X,-.05,v))}let L=I(an,vn,.12,t.wall,0,vn/2,-Zn/2);L.castShadow=!1,w.add(L),[-1,1].forEach(V=>{let X=I(.12,vn,S,t.wall2,V*an/2,vn/2,v);X.castShadow=!1,w.add(X)});let U=I(an,.12,S,0,0,vn+.06,v,new Ee({color:t.ceil,emissive:t.ceil,emissiveIntensity:.3}));U.castShadow=!1,w.add(U),w.add(I(3.1,2.1,.08,16777215,3,2.2,-Zn/2+.06)),w.add(I(2.9,1.9,.09,0,3,2.2,-Zn/2+.07,t.skyMat)),[-1,1].forEach(V=>w.add(I(.26,2.3,.05,16762063,3+V*1.6,2.2,-Zn/2+.2))),w.add(I(2.8,.4,3.4,15918810,0,.28,-1.85)),w.add(I(2.6,.22,3.2,16777215,0,.58,-1.85)),w.add(I(3,1.5,.22,16171471,0,1,-3.48)),w.add(I(2.7,.18,.1,16372702,0,1.6,-3.36)),[-.62,.62].forEach(V=>w.add(I(1,.2,.55,16775925,V,.8,-3))),w.add(I(2.72,.12,2.35,16368595,0,.98,-1.25)),w.add(I(2.74,.14,.32,16777215,0,.99,-2.3)),[-1.4,1.4].forEach(V=>w.add(I(.12,.5,2.3,16368595,V,.75,-1.25)));let B=xs(16748465);B.scale.setScalar(.32),B.position.set(0,1.25,-3.3),w.add(B),[-1.95,1.95].forEach(V=>{w.add(I(.75,.62,.6,14861214,V,.31,-3.05)),w.add(I(.79,.05,.64,15785156,V,.64,-3.05)),w.add(I(.5,.05,.02,12883572,V,.42,-2.74))}),w.add(I(.22,.22,.22,16171471,-1.95,.77,-3.05));let R=new Lt(new Be(.4,.3,.4),new Ee({color:16773590,emissive:16765562,emissiveIntensity:0,map:ui(lt.PLASTER)}));R.position.set(-1.95,1.02,-3.05),w.add(R),t.bedLamp=R;let E=new $t;E.position.set(1.95,.7,-3),E.rotation.y=-.3,E.userData.pick="album",w.add(E),E.add(I(.5,.08,.38,13231096,0,0,0)),E.add(I(.04,.085,.38,11127784,-.25,0,0));let D=xs(16027569);D.scale.setScalar(.15),D.rotation.x=-Math.PI/2,D.position.set(.02,.045,.06),E.add(D),t.album=E;let Q=new $t;Q.userData.pick="down",w.add(Q),Q.add(I(F.x1-F.x0,.05,F.z1-F.z0,0,(F.x0+F.x1)/2,-.02,(F.z0+F.z1)/2,yc));for(let V=0;V<5;V++)Q.add(I(.06,.85,.06,16777215,F.x1,.42,F.z0+.25+V*.6));Q.add(I(.08,.08,F.z1-F.z0,16777215,F.x1,.86,(F.z0+F.z1)/2)),Q.add(I(.08,.08,F.x1-F.x0-1,16777215,(F.x0+1+F.x1)/2,.86,F.z1)),Q.add(I(.06,.85,.06,16777215,F.x0+1,.42,F.z1));let $=new Lt(new qe(1,1,.03,32),me(14281207));$.scale.set(1.8,1,1.1),$.position.set(.6,.02,1),w.add($),zn(w,3.95,.8);for(let V=0;V<14;V++){let X=new Lt(new yn(.05,6,5),new tn({color:[16773544,16758465][V%2]}));X.position.set(-4+V*.62,3.45-Math.sin(V*.9)*.08,-3.38),w.add(X)}t.bedSpots=[{x:-.45,z:-1.42},{x:.45,z:-1.42}],t.bedY=m,w.traverse(V=>{V.castShadow=!1})},corners:{main:[.4,2.8,6.6,.2,1.3,-1.9],bed:[.2,4.7+2.6,3.4,0,4.7+.9,-2.3],meal:[2.2,2.6,3.8,2.8,1,-1.6],album:[1.75,4.7+1.75,-1.85,1.9,4.7+.55,-3.05]}},game:{first:"main",build(n,t){n.add(I(2.6,.6,.6,12883572,0,.3,-3.05)),n.add(I(2.2,1.3,.1,3025462,0,1.35,-3.15));let e=I(2.05,1.15,.02,0,0,1.35,-3.09,new tn({color:10934504}));n.add(e),[[-.6,1.55,16758465],[.1,1.2,16111752],[.6,1.6,10738109]].forEach(([s,r,o])=>n.add(I(.3,.3,.01,0,s,r,-3.075,new tn({color:o})))),n.add(I(.5,.12,.35,16777215,.8,.66,-2.95));let i=new Lt(new yn(.7,14,10),me(16165309));i.scale.set(1.1,.6,1),i.position.set(.2,.4,-.4),i.castShadow=!0,n.add(i),t.seats=[{x:.2,z:-.45,ry:Math.PI,y:.78}],t.gamer=!0,ko(n,-4.44,2.2,-.8,Math.PI/2),qi(n,4.44,2.2,-.4,-Math.PI/2,1.2,1.5,14273008,[[0,.3,16758465,.5],[0,-.35,16111752,.4]]),pi(n,-4.25,1.8,Math.PI/2,5),zn(n,3.9,-3),t.windowX=2.9},corners:{main:[.4,2.8,5.6,0,1.1,-2.6]}},language:{first:"main",build(n,t){let e=di(n,-1.2,-2.3,0,16171471);e.add(I(.5,.05,.36,16777215,-.2,.83,0)),e.add(I(.5,.05,.36,16774888,.32,.83,0)),e.add(I(.02,.06,.36,12883572,.06,.84,0)),[10934504,16758465,16111752].forEach((s,r)=>e.add(I(.4,.07,.28,s,.85,.83+r*.075,-.05)));let i=new Lt(new yn(.18,20,14),me(10473444));i.position.set(-.8,1.08,0),e.add(i),e.add(I(.05,.25,.05,12883572,-.8,.9,0)),qn(n,-1,-1.45,Math.PI),t.seat={x:-1,z:-1.5,ry:Math.PI,y:.54},qi(n,-4.45,1.9,.2,Math.PI/2,2.4,1.4,16777215,[[-.75,.35,16758465],[-.25,.35,16773544],[.25,.35,10934504],[.75,.35,10738109],[-.5,-.25,14273008],[0,-.25,16758465],[.5,-.25,16773544]]),pi(n,4.25,-.4,-Math.PI/2,5),ko(n,4.44,2.3,1.8,-Math.PI/2),zn(n,3.9,-3),t.windowX=2.2},corners:{main:[-.3,2.9,5.8,-.9,1.1,-2.3]}},skills:{first:"main",build(n,t){let e=di(n,-.6,-2.3,0,16111752);Ys(e,-.3,0),e.add(I(.45,.04,.32,16777215,.45,.83,.05)),e.add(I(.02,.02,.3,15235487,.62,.86,.05));let i=I(.6,.3,.32,15035243,3.4,.15,-2.6);n.add(i),n.add(I(.3,.05,.05,3814720,3.4,.35,-2.6)),qn(n,-.4,-1.45,Math.PI),t.seat={x:-.4,z:-1.5,ry:Math.PI,y:.54};let s=new $t;s.position.set(-3.3,0,-1.6),s.rotation.y=.5,n.add(s),[-.4,.4].forEach(r=>{let o=I(.07,1.9,.07,12883572,r,.95,0);o.rotation.z=-r*.15,s.add(o)}),s.add(I(1,.8,.05,16777215,0,1.35,.06)),s.add(I(.5,.3,.06,10934504,-.15,1.45,.08)),s.add(I(.25,.25,.06,16758465,.25,1.2,.08)),qi(n,4.44,2,-.5,-Math.PI/2,1.6,1.2,16777215,[[-.5,-.25,10738109,.3],[-.15,-.1,16111752,.3],[.2,.05,16758465,.3],[.55,.2,10934504,.3]]),pi(n,-4.25,1.4,Math.PI/2,5),zn(n,3.9,2.4),t.windowX=2.4},corners:{main:[0,2.9,5.8,-.3,1.1,-2.2]}},notes:{first:"main",build(n,t){let e=di(n,-.8,-2.3,0,16111752);Ys(e,.4,0),[16758465,10934504,16773544].forEach((i,s)=>e.add(I(.36,.05,.48,i,-.5,.83+s*.055,.02+s*.03))),qn(n,-.6,-1.45,Math.PI),t.seat={x:-.6,z:-1.5,ry:Math.PI,y:.54},qi(n,-.6,2.2,-3.44,0,2.6,1.3,14267535,[[-1,.35,16773544],[-.55,.3,16758465],[-.1,.38,10934504],[.35,.32,10738109],[.85,.36,16773544],[-.8,-.25,14273008],[-.3,-.22,16773544],[.2,-.28,16758465],[.7,-.24,10934504]]),pi(n,4.25,-.4,-Math.PI/2,5),zn(n,-3.9,-3),t.windowX=2.8},corners:{main:[-.2,2.9,5.8,-.6,1.3,-2.4]}},goals:{first:"main",build(n,t){qi(n,0,2.15,-3.44,0,3,1.6,16777215,[[-1.1,.35,10934504,.45],[-.45,.4,16758465,.4],[.55,.38,10738109,.45],[1.15,.3,16111752,.4],[-.9,-.35,14273008,.45],[.95,-.35,16758465,.4]]);let e=xs(16765803);e.scale.setScalar(.5),e.position.set(0,2.1,-3.3),n.add(e);let i=di(n,-1.8,-1.9,.25,14273008);Ys(i,0,0),qn(n,-1.7,-1.05,Math.PI+.25),t.seat={x:-1.68,z:-1.1,ry:Math.PI+.25,y:.54};let s=new Lt(new qe(.22,.12,.36,18),me(16107596));s.position.set(3.7,1.28,-2.7),n.add(s),n.add(I(.5,.9,.5,15785156,3.7,.45,-2.7)),n.add(I(.2,.12,.2,16107596,3.7,1,-2.7)),zn(n,-3.9,-3),t.windowX=3.2},corners:{main:[.2,2.8,5.8,-.2,1.4,-2.4]}},health:{first:"main",build(n,t){let e=I(1,.04,2,10738109,-1.6,.03,-.6);e.castShadow=!1,n.add(e),[[-.7,-1.4],[-.45,-1.4]].forEach(([o,a])=>{n.add(I(.36,.05,.05,9080729,o,.12,a)),[-.16,.16].forEach(c=>{let l=new Lt(new qe(.1,.1,.08,16),me(15834032));l.rotation.z=Math.PI/2,l.position.set(o+c,.12,a),n.add(l)})}),n.add(I(.9,1.6,.8,16777215,3.6,.8,-2.9)),n.add(I(.05,.4,.05,12633806,3.2,1,-2.48)),n.add(I(.9,.04,.82,15328478,3.6,1.1,-2.9));let i=di(n,1.2,-2.4,0,16766665),s=new Lt(new yn(.25,20,12,0,Math.PI*2,Math.PI/2,Math.PI/2),me(16777215));s.position.set(0,1.04,0),i.add(s),[[16744319,-.08,0],[16765803,.08,.04],[10147472,0,-.08]].forEach(([o,a,c])=>{let l=new Lt(new yn(.09,14,10),me(o));l.position.set(a,1.04,c),i.add(l)});let r=new Lt(new qe(.07,.07,.3,14),me(10473444));r.position.set(.5,.98,.1),i.add(r),qn(n,1.4,-1.55,Math.PI),t.seat={x:1.4,z:-1.6,ry:Math.PI,y:.54},ko(n,-4.44,2.2,-.6,Math.PI/2),zn(n,-3.9,-3),t.windowX=-.6},corners:{main:[.4,2.8,5.8,.2,1,-2]}},law:{first:"main",build(n,t){pi(n,-4.25,-.8,Math.PI/2,5),pi(n,-4.25,1.4,Math.PI/2,5),pi(n,4.25,-.4,-Math.PI/2,5);let e=di(n,.2,-2.3,0,12883572);Ys(e,-.4,0);let i=new $t;i.position.set(.55,.83,0),e.add(i),i.add(I(.04,.5,.04,14267466,0,.25,0)),i.add(I(.5,.03,.03,14267466,0,.48,0)),[-.24,.24].forEach(s=>{let r=new Lt(new qe(.09,.06,.03,16),me(14267466));r.position.set(s,.3,0),i.add(r),i.add(I(.01,.18,.01,14267466,s,.39,0))}),qn(n,.4,-1.45,Math.PI),t.seat={x:.4,z:-1.5,ry:Math.PI,y:.54},zn(n,3.9,2.4),t.windowX=2.4},corners:{main:[.2,2.9,5.8,.1,1.2,-2.3]}},store:{first:"main",build(n,t){n.add(I(2.6,1,.7,10147520,-.2,.5,-1.15)),n.add(I(2.7,.06,.8,16777215,-.2,1.03,-1.15));for(let f=0;f<5;f++)n.add(I(.3,.6,.02,8372906,-1.2+f*.5,.5,-.79));let s=new $t;s.position.set(.55,1.06,-1.2),n.add(s),s.add(I(.5,.14,.4,5591134,0,.07,0));let r=I(.4,.28,.04,5591134,0,.32,-.12);r.rotation.x=-.3,s.add(r);let o=I(.34,.22,.02,0,0,.32,-.095,new tn({color:12579544}));o.rotation.x=-.3,s.add(o);for(let f=0;f<3;f++)for(let d=0;d<3;d++)s.add(I(.07,.02,.06,15394544,-.1+d*.1,.15,.04+f*.06));let a=Xi("onigiri",{},.26);a.position.set(-.9,1.06,-1.1),n.add(a);let c=Xi("cup",{drink:"#d9b08a",boba:!0},.3);c.position.set(-.55,1.06,-1.05),n.add(c);let l=Xi("bun",{bun:"#fff8ee"},.26);l.position.set(-1.25,1.06,-1.15),n.add(l);let h=[["cup",{drink:"#ff8fb0",cream:!0}],["cookie",{}],["donut",{}],["onigiri",{}],["mochi",{}],["cup",{drink:"#8a5a3a",ice:!0}],["kimbap",{}],["flan",{}]];[-2.6,2.2].forEach((f,d)=>{let _=new $t;_.position.set(f,0,-3.15),n.add(_),_.add(I(1.9,2.3,.5,15920614,0,1.15,0));for(let M=0;M<4;M++){_.add(I(1.8,.05,.46,14208964,0,.32+M*.52,.04));for(let g=0;g<5;g++){let[m,w]=h[(g+M*2+d*3)%h.length],S=Xi(m,w,.3);S.position.set(-.72+g*.36,.35+M*.52,.06),_.add(S)}}_.add(I(1.9,.18,.52,d?16165309:16765803,0,2.2,.02))});let u=new $t;u.position.set(4,0,-.6),u.rotation.y=-Math.PI/2,n.add(u),u.add(I(1.6,2.3,.7,15266552,0,1.15,0)),u.add(I(1.44,2,.02,0,0,1.15,.36,new tn({color:14677247,transparent:!0,opacity:.35})));for(let f=0;f<4;f++)for(let d=0;d<5;d++){let _=[16748410,10147472,16765803,10473471,16752575][(d+f)%5];u.add(I(.14,.32,.14,_,-.56+d*.28,.36+f*.48,.12)),u.add(I(.1,.06,.1,16777215,-.56+d*.28,.55+f*.48,.12))}u.add(I(1.6,.2,.72,10147520,0,2.2,0)),zn(n,-4,2.4),t.seat={x:-.1,z:-1.85,ry:0,y:0,stand:!0},t.windowX=-3.2},corners:{main:[.1,1.9,5,-.1,1.45,-2.2]}},other:{first:"main",build(n,t){let e=di(n,-1,-2.3);Ys(e,0,0),qn(n,-.8,-1.45,Math.PI),t.seat={x:-.8,z:-1.5,ry:Math.PI,y:.54},pi(n,4.25,-.6,-Math.PI/2),zn(n,-3.9,-3)},corners:{main:[0,2.9,5.8,0,1.1,-2]}}};function Qy(n,t){gf.length=0,t=t||{};let e=lf[t.house]||(t.kind==="game"?lf.game:lf.other),i=new Mo({antialias:!0});i.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),i.shadowMap.enabled=!0,i.shadowMap.type=ec,n.appendChild(i.domElement);let s=new vo,r=new xn(48,1,.1,100),o=t.house==="love",a=fc(t.roof||16165309,o?.6:.72),c=fc(t.roof||16165309,o?.46:.55);s.background=new he(fc(t.roof||16165309,.82));let l=new $t;s.add(l);let h=Zn+xc,u=xc/2;for(let J=0;J<12;J++){let et=I(an/12,.1,h,J%2?15323054:14861214,-an/2+(J+.5)*an/12,-.05,u);et.castShadow=!1,l.add(et)}let f=I(an,vn,.12,a,0,vn/2,-Zn/2);f.castShadow=!1,l.add(f),[-1,1].forEach(J=>{let et=I(.12,vn,h,c,J*an/2,vn/2,u);et.castShadow=!1,et.receiveShadow=!0,l.add(et)});let d=fc(t.roof||16165309,.9),_=new Ee({color:d,emissive:d,emissiveIntensity:.3});if(t.house==="love"){let it=u-h/2,wt=u+h/2;[[-3,an/2,it,wt],[-an/2,-3,-.7,wt]].forEach(([ct,ft,xt,Ft])=>{let dt=I(ft-ct,.12,Ft-xt,0,(ct+ft)/2,vn+.06,(xt+Ft)/2,_);dt.castShadow=!1,l.add(dt)})}else{let J=I(an,.12,h,0,0,vn+.06,u,_);J.castShadow=!1,l.add(J)}let M=J=>{J.castShadow=!1,l.add(J)};M(I(an,.16,.12,16777215,0,vn-.08,-Zn/2+.1)),[-1,1].forEach(J=>M(I(.12,.16,h,16777215,J*(an/2-.1),vn-.08,u))),M(I(an,.14,.04,16777215,0,.07,-Zn/2+.08)),[-1,1].forEach(J=>M(I(.04,.14,h,16777215,J*(an/2-.08),.07,u)));let g=new tn({color:12575733}),m=new Lt(new qe(1,1,.03,32),me(16176348));m.scale.set(2,1,1.3),m.position.set(.3,.02,.6),m.receiveShadow=!0,l.add(m);let w=I(.03,.55,.03,9206379,.3,vn-.27,.3);w.castShadow=!1,l.add(w);let S=new Lt(new Be(.6,.4,.6),new Ee({color:16773544,emissive:16765562,emissiveIntensity:0,map:ui(lt.PLASTER)}));S.position.set(.3,vn-.72,.3),S.castShadow=!1,l.add(S);let v={wall:a,wall2:c,ceil:d,skyMat:g};e.build(l,v);{let J=v.windowX!=null?v.windowX:2.2,et=2.1,it=-Zn/2,wt=!!v.bigWindow,ct=wt?3:1.9,ft=wt?2.2:1.5;l.add(I(ct,ft,.08,16777215,J,et,it+.06)),l.add(I(ct-.2,ft-.2,.09,0,J,et,it+.07,g)),wt||(l.add(I(.05,1.3,.1,16777215,J,et,it+.1)),l.add(I(1.7,.05,.1,16777215,J,et,it+.1)));let xt=I(ct+.6,.05,.05,12883572,J,et+ft/2+.15,it+.2);xt.castShadow=!1,l.add(xt),[-1,1].forEach(Ft=>{let dt=I(.24,ft+.25,.05,16762063,J+Ft*(ct/2+.13),et+0,it+.2);dt.castShadow=!1,l.add(dt);let ie=I(.28,.06,.07,16165309,J+Ft*(ct/2+.13),et-.3,it+.22);ie.castShadow=!1,l.add(ie)})}let F=[];l.traverse(J=>{J.userData.hands&&(F=J.userData.hands)});let L=v.seats||(v.seat?[v.seat]:[]),U=t.looks||(t.look?[t.look]:[]),B=L.slice(0,U.length).map((J,et)=>{let it=Xo(U[et]);return l.add(it.g),J.stand?(it.g.position.set(J.x,0,J.z),it.g.rotation.y=J.ry,it.standing=!0,it):(it.g.position.set(J.x,J.y-Wo,J.z),it.g.rotation.y=J.ry,it.parts.legL.rotation.x=it.parts.legR.rotation.x=-1.45,it)});if(t.mate&&L[0]&&!v.couple){let J=L[0],et=Xo(t.mate);l.add(et.g);let it=J.stand?J.x+.8:J.x+.85,wt=J.stand?J.z:J.z+.35;et.g.position.set(it,0,wt),et.g.rotation.y=J.ry+(J.stand?0:-.9),v.mateW=et}let R=(t.guests||[]).map((J,et)=>{let it=Xo(J);return l.add(it.g),it.g.position.set(et?1:-1.25,0,-.25),it.g.rotation.y=Math.PI+(et?.25:-.25),it}),E=v.sofa||v.gamer?null:B[0]||null,D="",Q=[];v.couple&&B.forEach((J,et)=>{J.g.userData.pick="couple";let it=t.names&&(et===0?t.names.her:t.names.him)||(et===0?"namu":"hunf"),wt=Vy(it,"#ffffff",.19);l.add(wt),Q.push(wt)});let $=(()=>{let J=xs(16744350);return J.scale.setScalar(.16),J.visible=!1,l.add(J),J})(),V=-1,X="",K=!1,q=!1,W=()=>X==="bed"?"bed":D==="lunch"||D==="dinner"?"meal":e.corners[t.corner]?t.corner:e.first,_t=null,Ct=document.createElement("div");Ct.style.cssText="position:absolute;inset:0;background:#fff6ee;opacity:0;pointer-events:none;transition:opacity .45s ease;z-index:2",getComputedStyle(n).position==="static"&&(n.style.position="relative"),n.appendChild(Ct);let Ot=(J,et,it)=>new O(J,et,it),fe={up:{legs:[[Ot(-2.4,1.8,2.8),Ot(-3.95,2.6,-1),.9],[Ot(-3.7,3.4,-.2),Ot(-3.95,5.8,-3),.8],[Ot(-3.8,6.4,-1.8),Ot(-2,6,-2.6),.7,!0]],out:[Ot(-2.6,6.5,.2),Ot(.4,5.6,-2.2)]},down:{legs:[[Ot(-2,6.5,.6),Ot(-3.9,4,-1.8),.8],[Ot(-3.8,5.4,-1.6),Ot(-3.95,1.4,1.6),.8,!0]],out:[Ot(-3,2.4,2.4),Ot(.2,1.3,-2)]}},Rt={yaw:0,want:0,x0:0,w0:0,on:!1},gt=new O;{let J=i.domElement;J.addEventListener("pointerdown",it=>{Rt.on=!0,Rt.x0=it.clientX,Rt.w0=Rt.want}),J.addEventListener("pointermove",it=>{Rt.on&&(Rt.want=Math.max(-.55,Math.min(.55,Rt.w0+(it.clientX-Rt.x0)*.004)))});let et=()=>{Rt.on=!1};J.addEventListener("pointerup",et),J.addEventListener("pointercancel",et),J.addEventListener("pointerleave",et)}function Dt(J,et){Rt.want=0;let it=X&&J!==X||!X&&J==="bed"&&t.walkIn;if(X=J,et||!it){_t=null,Ct.style.opacity=0,Ut(W(),et);return}_t={def:fe[J==="bed"?"up":"down"],leg:0,t:0,p0:St.clone(),t0:z.clone()}}function jt(J){let et=_t.def.legs[_t.leg];_t.t+=J/et[2],et[3]&&Ct.style.opacity!=="1"&&(Ct.style.opacity=1);let it=Math.min(1,_t.t),wt=it*it*(3-2*it);if(St.lerpVectors(_t.p0,et[0],wt),z.lerpVectors(_t.t0,et[1],wt),Kt.copy(St),bt.copy(z),!(it<1)){if(++_t.leg<_t.def.legs.length){_t.t=0,_t.p0=St.clone(),_t.t0=z.clone();return}St.copy(_t.def.out[0]),z.copy(_t.def.out[1]),_t=null,Ut(W(),!1),setTimeout(()=>{Ct.style.opacity=0},120)}}let Nt=np("z Z z","#7a6a9a",.9,.45);if(l.add(Nt),t.onPick){let J=new Dr,et=new Tt,it=null,wt=i.domElement,ct=(xt,Ft)=>{let dt=wt.getBoundingClientRect();et.set((xt-dt.left)/dt.width*2-1,-((Ft-dt.top)/dt.height)*2+1),J.setFromCamera(et,r);let ie=J.intersectObjects(l.children,!0).find(Bt=>{if(Bt.object.isSprite)return!1;let G=Bt.object;for(;G&&!G.userData.pick;)G=G.parent;return!!G});if(!ie)return"";let Ht=ie.object;for(;Ht&&!Ht.userData.pick;)Ht=Ht.parent;return Ht.userData.pick},ft=xt=>{if(xt==="couple"){V<0&&(V=0);return}if(xt==="up"||xt==="down"){K=!0,Dt(xt==="up"?"bed":"main");return}if(xt==="album"){q=!0,Ut("album"),setTimeout(()=>t.onPick("album"),750);return}t.onPick(xt)};wt.addEventListener("contextmenu",xt=>xt.preventDefault()),wt.addEventListener("pointerdown",xt=>{it={x:xt.clientX,y:xt.clientY,type:xt.pointerType}}),wt.addEventListener("pointerup",xt=>{if(!it||Math.hypot(xt.clientX-it.x,xt.clientY-it.y)>8){it=null;return}it=null;let Ft=ct(xt.clientX,xt.clientY);Ft&&ft(Ft)})}let Qt=v.gamer?B[0]:null,ue=new Do(16777215,14861214,1.4);s.add(ue);let ae=new No(16774374,1.6);ae.position.set(2.5,vn-.3,8),ae.target.position.set(0,0,-2),s.add(ae.target),ae.castShadow=!0,ae.shadow.mapSize.set(1024,1024),Object.assign(ae.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:.5,far:25}),ae.shadow.bias=-.001,s.add(ae);let ce=new Uo(16767392,0,12,1.3);ce.position.set(.3,vn-1.1,.3),s.add(ce);function yt(){let J=new Date,et=t.timeMode==="day"?11:t.timeMode==="night"?22:J.getHours()+J.getMinutes()/60,it=sp(et);g.color.copy(it.sky),ue.intensity=1.5-it.night*.7,ae.intensity=1.6*(1-it.night)+.2,ce.intensity=it.night*8,S.material.emissiveIntensity=it.night,F.length&&(F[0].rotation.z=-(J.getHours()%12)/12*Math.PI*2,F[1].rotation.z=-J.getMinutes()/60*Math.PI*2)}let St=new O,z=new O,Kt=new O,bt=new O;function Yt(J){return e.corners[J]||e.corners[e.first]}function Ut(J,et){let it=Yt(J);Kt.set(it[0],it[1],it[2]),bt.set(it[3],it[4],it[5]),et&&(St.copy(Kt),z.copy(bt))}Ut(t.corner,!0),t.walkIn&&(St.set(0,1.7,Zn/2+3.2),z.set(0,1.4,-Zn/2));function le(){let J=n.clientWidth||innerWidth,et=n.clientHeight||innerHeight;i.setSize(J,et,!1),r.aspect=J/et,r.fov=J/et<.9?64:50,J/et<.9?r.setViewOffset(J,et,0,-et*.2,J,et):r.clearViewOffset(),r.updateProjectionMatrix()}le();let qt=()=>le();window.addEventListener("resize",qt);let P=new zo,T=new O,tt=!0,ut=0;function vt(){if(!tt||(requestAnimationFrame(vt),document.hidden))return;let J=Math.min(.1,P.getDelta()),et=P.elapsedTime;if(_t?jt(J):(St.lerp(Kt,Math.min(1,J*1.6)),z.lerp(bt,Math.min(1,J*1.6))),Rt.yaw+=((_t||q?0:Rt.want)-Rt.yaw)*Math.min(1,J*8),gt.copy(z).sub(St).applyAxisAngle(We.DEFAULT_UP,Rt.yaw),r.position.copy(St),r.lookAt(gt.add(St)),ky(et),v.couple){let it=new Date,wt=it.getHours()+it.getMinutes()/60,ct=wt>=22||wt<6.5?"sleep":wt>=11.5&&wt<13?"lunch":wt>=18.5&&wt<19.75?"dinner":"sofa";if(ct!==D){D=ct,!K&&!q&&Dt(ct==="sleep"?"bed":"main",!X&&!t.walkIn);let ft=ct==="lunch"||ct==="dinner"?v.dining:v.seats;B.forEach((xt,Ft)=>{if(ct==="sleep"){let dt=v.bedSpots[Ft];xt.g.position.set(dt.x,(v.bedY||0)+.9,dt.z),xt.g.rotation.set(-Math.PI/2,0,0),xt.parts.legL.rotation.x=xt.parts.legR.rotation.x=0}else xt.g.position.set(ft[Ft].x,ft[Ft].y-Wo,ft[Ft].z),xt.g.rotation.set(0,ft[Ft].ry,0),xt.parts.legL.rotation.x=xt.parts.legR.rotation.x=-1.45;xt.sleepMap||(xt.sleepMap=Qd(xt.parts.look,!0)),xt.awakeMap||(xt.awakeMap=xt.parts.mat.map),xt.parts.mat.map=ct==="sleep"?xt.sleepMap:xt.awakeMap,xt.parts.mat.needsUpdate=!0}),Nt.visible=ct==="sleep"}if(B.forEach((ft,xt)=>{let Ft=xt===0?-1:1;D==="lunch"||D==="dinner"?(ft.parts.armL.rotation.x=-.9,ft.parts.armR.rotation.x=-1.35+Math.sin(et*2.6+xt*1.7)*.45,ft.parts.head.rotation.set(.12+Math.max(0,Math.sin(et*2.6+xt*1.7))*.12,0,0)):D==="sleep"?(ft.parts.armL.rotation.x=ft.parts.armR.rotation.x=0,ft.parts.head.rotation.set(.6,-Ft*(.35+Math.sin(et*.9)*.03),0)):(ft.parts.armL.rotation.x=ft.parts.armR.rotation.x=-.6,ft.parts.head.rotation.set(0,-Ft*.25,-Ft*(.18+Math.sin(et*.8)*.04)))}),Nt.visible&&(Nt.position.set(14,1.6+et*.25%.4,-3),Nt.material.opacity=.9-et*.25%.4*1.5),B.forEach((ft,xt)=>{ft.parts.head.getWorldPosition(Q[xt].position),Q[xt].position.y+=D==="sleep"?.62:.55}),V>=0){V+=J;let ft=B[1],xt=B[0],Ft=Math.sin(Math.min(1,V/1.6)*Math.PI);ft.parts.head.rotation.y+=(D==="sleep"?-.5:-.9)*Ft,ft.parts.head.rotation.z+=.25*Ft,xt.parts.head.rotation.z-=.2*Ft,D!=="sleep"&&(ft.g.rotation.z=.16*Ft);let dt=new O;xt.parts.head.getWorldPosition(dt);let ie=new O;ft.parts.head.getWorldPosition(ie),$.visible=V>.5,$.position.copy(dt).lerp(ie,.5),$.position.y+=.35+(V-.5)*.35,$.scale.setScalar(.12+Math.min(1,(V-.5)*2)*.06),$.rotation.y=r.rotation.y,V>2.1&&(V=-1,$.visible=!1,ft.g.rotation.z=0)}v.bedLamp&&(v.bedLamp.material.emissiveIntensity=D==="sleep"?.15:.6*ce.intensity/8)}else v.sofa&&B.forEach((it,wt)=>{it.parts.armL.rotation.x=it.parts.armR.rotation.x=-.6,it.parts.head.rotation.z=(wt===0?-1:1)*(.18+Math.sin(et*.8)*.04),it.parts.head.rotation.y=(wt===0?1:-1)*.25});if(Qt&&(Qt.parts.armL.rotation.x=Qt.parts.armR.rotation.x=-1.1+Math.sin(et*14)*.05,Qt.parts.head.rotation.x=-.05,Qt.parts.head.rotation.y=Math.sin(et*.5)*.08),v.mateW&&(v.mateW.parts.head.rotation.y=-.4+Math.sin(et*.6)*.25,v.mateW.parts.armR.rotation.x=Math.sin(et*1.1)*.15-.1),R.forEach((it,wt)=>{it.parts.head.rotation.y=Math.sin(et*.5+wt*2)*.3,it.parts.armL.rotation.x=Math.sin(et*.8+wt)*.06}),E&&E.standing){let it=et%9<1.4;E.parts.armL.rotation.x=-.35+Math.sin(et*1.3)*.05,E.parts.armR.rotation.x=it?-2.6:-.35+Math.sin(et*1.3+1)*.05,E.parts.armR.rotation.z=it?-.3+Math.sin(et*14)*.25:0,E.parts.head.rotation.y=Math.sin(et*.4)*.2,E.parts.head.rotation.x=0}else E&&(E.parts.armL.rotation.x=-1.2+Math.sin(et*9)*.12,E.parts.armR.rotation.x=-1.2+Math.sin(et*9+1.8)*.12,E.parts.head.rotation.x=.15+Math.sin(et*.6)*.05,E.parts.head.rotation.y=Math.sin(et*.35)*.25);(et-ut>20||ut===0)&&(yt(),ut=et||.001),i.render(s,r),T.set(.3,.05,.6).project(r),document.documentElement.style.setProperty("--rug-x",((T.x+1)/2*100).toFixed(1)+"vw"),document.documentElement.style.setProperty("--rug-y",((1-T.y)/2*100).toFixed(1)+"vh")}yt(),requestAnimationFrame(vt),/[?&]debug3d/.test(location.search)&&(window.__room={camera:r,R:v,renderer:i,sitters:B});function mt(J){if(!v.dinner)return;(v.foodMeshes||[]).forEach(wt=>{v.dinner.remove(wt)}),v.foodMeshes=[],J=(J||[]).filter(wt=>wt&&wt.name).slice(0,4),v.defaultDishes.forEach(wt=>{wt.visible=!J.length});let et=[[0],[-.33,.33],[-.48,0,.48],[-.54,-.18,.18,.54]][Math.max(0,J.length-1)]||[],it=new Io;it.setCrossOrigin("anonymous"),J.forEach((wt,ct)=>{let ft=new $t;ft.position.set(et[ct],.8,-.12+ct%2*.06),v.dinner.add(ft),v.foodMeshes.push(ft);let xt=new Lt(new qe(.2,.15,.05,24),me(16777215));ft.add(xt);let Ft=new Lt(new us(.19,.015,8,24),me([16171471,13231096,16773544,13495501][ct]));Ft.rotation.x=Math.PI/2,Ft.position.y=.025,ft.add(Ft);let dt=wt.key&&window.FoodArt&&window.FoodArt.spec&&window.FoodArt.spec(wt.key);if(dt){ft.remove(xt),ft.remove(Ft),ft.add(I(.46,.02,.46,[16171471,13231096,16773544,13495501][ct],0,-.01,0));let G=Xi(dt.tpl,dt.o,.4);G.position.y=0,G.rotation.y=(ct-1.5)*.25,ft.add(G);return}let ie=new Ee({color:16777215}),Ht=new Lt(new Ka(.16,28),ie);Ht.rotation.x=-Math.PI/2,Ht.position.y=.03,ft.add(Ht);let Bt=()=>{let G=document.createElement("canvas");G.width=G.height=128;let Pt=G.getContext("2d");Pt.fillStyle=["#ffe1e9","#e1f0fb","#fff6cf","#e3f5e1"][ct],Pt.fillRect(0,0,128,128),Pt.font="64px sans-serif",Pt.textAlign="center",Pt.fillText("\u{1F372}",64,76),Pt.font="800 16px Nunito, sans-serif",Pt.fillStyle="#8a5a6a",Pt.fillText(wt.name.slice(0,14),64,112),ie.map=new _n(G),ie.map.colorSpace=De,ie.needsUpdate=!0};if(!wt.img){Bt();return}if(/^data:image\/svg/.test(wt.img)){let G=new Image;G.onload=()=>{let Pt=document.createElement("canvas");Pt.width=Pt.height=256;let at=Pt.getContext("2d");at.fillStyle="#fffaf5",at.fillRect(0,0,256,256),at.drawImage(G,0,0,256,256),ie.map=new _n(Pt),ie.map.colorSpace=De,ie.needsUpdate=!0},G.onerror=Bt,G.src=wt.img;return}it.load(wt.img,G=>{G.colorSpace=De;let Pt=G.image.width/G.image.height;Pt>1?(G.repeat.set(1/Pt,1),G.offset.set((1-1/Pt)/2,0)):(G.repeat.set(1,Pt),G.offset.set(0,(1-Pt)/2)),ie.map=G,ie.needsUpdate=!0},void 0,Bt)})}return{house:t.house,setCorner(J){if(v.couple){t.corner=J,q||Ut(W(),!1);return}Ut(J,!1)},back(){q=!1,Ut(W(),!1)},setFood:mt,get floor(){return X},setPhotos(J){if(!v.frames)return;let et=new Io;v.frames.forEach((it,wt)=>{J[wt]&&et.load(J[wt],ct=>{ct.colorSpace=De;let ft=ct.image,xt=it.geometry.parameters.width,Ft=it.geometry.parameters.height,dt=ft.width/ft.height,ie=xt/Ft;dt>ie?(ct.repeat.set(ie/dt,1),ct.offset.set((1-ie/dt)/2,0)):(ct.repeat.set(1,dt/ie),ct.offset.set(0,(1-dt/ie)/2)),it.material.map=ct,it.material.color.set(16777215),it.material.needsUpdate=!0})})},setTimeMode(J){t.timeMode=J,yt()},destroy(){tt=!1,window.removeEventListener("resize",qt),s.traverse(J=>{J.geometry&&J.geometry.dispose()}),i.dispose(),i.domElement.remove(),Ct.remove()}}}window.Village3D={create:Yy,room:Qy,LOOKS:mc,LOVE:uf,ROOF:Ti.roof,lookAs:ep};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
