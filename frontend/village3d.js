(()=>{var bh="170",Ns={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},np=0,Mu=1,ip=2;var Of=1,qa=2,Ui=3,is=0,En=1,vn=2,es=0,fr=1,vu=2,Eu=3,bu=4,sp=5,Es=100,rp=101,op=102,ap=103,cp=104,lp=200,hp=201,up=202,fp=203,jc=204,Qc=205,dp=206,pp=207,mp=208,gp=209,xp=210,_p=211,yp=212,Mp=213,vp=214,tl=0,el=1,nl=2,gr=3,il=4,sl=5,rl=6,ol=7,Sh=0,Ep=1,bp=2,ns=0,Sp=1,wp=2,Tp=3,Ap=4,Rp=5,Cp=6,Pp=7;var Ff=300,xr=301,_r=302,al=303,cl=304,Za=306,oo=1e3,Ss=1001,ll=1002,en=1003,Ip=1004;var Vo=1005;var gi=1006,_c=1007;var ws=1008;var Bi=1009,Bf=1010,zf=1011,ao=1012,wh=1013,Ts=1014,Ni=1015,Io=1016,Th=1017,Ah=1018,yr=1020,Hf=35902,kf=1021,Vf=1022,ai=1023,Gf=1024,Wf=1025,dr=1026,Mr=1027,Xf=1028,Rh=1029,Yf=1030,Ch=1031;var Ph=1033,_a=33776,ya=33777,Ma=33778,va=33779,hl=35840,ul=35841,fl=35842,dl=35843,pl=36196,ml=37492,gl=37496,xl=37808,_l=37809,yl=37810,Ml=37811,vl=37812,El=37813,bl=37814,Sl=37815,wl=37816,Tl=37817,Al=37818,Rl=37819,Cl=37820,Pl=37821,Ea=36492,Il=36494,Ll=36495,qf=36283,Dl=36284,Ul=36285,Nl=36286;var ba=2300,Ol=2301,yc=2302,Su=2400,wu=2401,Tu=2402;var Lp=3200,Dp=3201;var Zf=0,Up=1,Qi="",Le="srgb",wr="srgb-linear",Ka="linear",De="srgb";var Ys=7680;var Au=519,Np=512,Op=513,Fp=514,Kf=515,Bp=516,zp=517,Hp=518,kp=519,Fl=35044;var Ru="300 es",Oi=2e3,Sa=2001,zi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cu=1234567,to=Math.PI/180,co=180/Math.PI;function xi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[e&63|128]+yn[e>>8&255]+"-"+yn[e>>16&255]+yn[e>>24&255]+yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]).toLowerCase()}function un(n,t,e){return Math.max(t,Math.min(e,n))}function Ih(n,t){return(n%t+t)%t}function Vp(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Gp(n,t,e){return n!==t?(e-n)/(t-n):0}function eo(n,t,e){return(1-e)*n+e*t}function Wp(n,t,e,i){return eo(n,t,1-Math.exp(-e*i))}function Xp(n,t=1){return t-Math.abs(Ih(n,t*2)-t)}function Yp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function qp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Zp(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Kp(n,t){return n+Math.random()*(t-n)}function Jp(n){return n*(.5-Math.random())}function $p(n){n!==void 0&&(Cu=n);let t=Cu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function jp(n){return n*to}function Qp(n){return n*co}function t0(n){return(n&n-1)===0&&n!==0}function e0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function n0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function i0(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),f=o((t-i)/2),d=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,c*u,c*f,a*l);break;case"YZY":n.set(c*f,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*f,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*d,a*l);break;case"YXY":n.set(c*d,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function oi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ie(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Jf={DEG2RAD:to,RAD2DEG:co,generateUUID:xi,clamp:un,euclideanModulo:Ih,mapLinear:Vp,inverseLerp:Gp,lerp:eo,damp:Wp,pingpong:Xp,smoothstep:Yp,smootherstep:qp,randInt:Zp,randFloat:Kp,randFloatSpread:Jp,seededRandom:$p,degToRad:jp,radToDeg:Qp,isPowerOfTwo:t0,ceilPowerOfTwo:e0,floorPowerOfTwo:n0,setQuaternionFromProperEuler:i0,normalize:Ie,denormalize:oi},wt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(un(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},_e=class n{constructor(t,e,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],M=s[0],x=s[3],m=s[6],T=s[1],E=s[4],b=s[7],G=s[2],L=s[5],D=s[8];return r[0]=o*M+a*T+c*G,r[3]=o*x+a*E+c*L,r[6]=o*m+a*b+c*D,r[1]=l*M+h*T+u*G,r[4]=l*x+h*E+u*L,r[7]=l*m+h*b+u*D,r[2]=f*M+d*T+g*G,r[5]=f*x+d*E+g*L,r[8]=f*m+d*b+g*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=e*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return t[0]=u*M,t[1]=(s*l-h*i)*M,t[2]=(a*i-s*o)*M,t[3]=f*M,t[4]=(h*e-s*c)*M,t[5]=(s*r-a*e)*M,t[6]=d*M,t[7]=(i*c-l*e)*M,t[8]=(o*e-i*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Mc.makeScale(t,e)),this}rotate(t){return this.premultiply(Mc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Mc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Mc=new _e;function $f(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function lo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function s0(){let n=lo("canvas");return n.style.display="block",n}var Pu={};function jr(n){n in Pu||(Pu[n]=!0,console.warn(n))}function r0(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function o0(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function a0(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Ae={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===De&&(n.r=Fi(n.r),n.g=Fi(n.g),n.b=Fi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===De&&(n.r=pr(n.r),n.g=pr(n.g),n.b=pr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Qi?Ka:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Fi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function pr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Iu=[.64,.33,.3,.6,.15,.06],Lu=[.2126,.7152,.0722],Du=[.3127,.329],Uu=new _e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nu=new _e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ae.define({[wr]:{primaries:Iu,whitePoint:Du,transfer:Ka,toXYZ:Uu,fromXYZ:Nu,luminanceCoefficients:Lu,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:Iu,whitePoint:Du,transfer:De,toXYZ:Uu,fromXYZ:Nu,luminanceCoefficients:Lu,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}});var qs,Bl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{qs===void 0&&(qs=lo("canvas")),qs.width=t.width,qs.height=t.height;let i=qs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=qs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=lo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Fi(e[i]/255)*255):e[i]=Fi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},c0=0,wa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=xi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(vc(s[o].image)):r.push(vc(s[o]))}else r=vc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function vc(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Bl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var l0=0,bn=class n extends zi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Ss,s=Ss,r=gi,o=ws,a=ai,c=Bi,l=n.DEFAULT_ANISOTROPY,h=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=xi(),this.name="",this.source=new wa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ff)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oo:t.x=t.x-Math.floor(t.x);break;case Ss:t.x=t.x<0?0:1;break;case ll:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oo:t.y=t.y-Math.floor(t.y);break;case Ss:t.y=t.y<0?0:1;break;case ll:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=Ff;bn.DEFAULT_ANISOTROPY=1;var Ue=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],M=c[2],x=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-M)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+M)<.1&&Math.abs(g+x)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(l+1)/2,b=(d+1)/2,G=(m+1)/2,L=(h+f)/4,D=(u+M)/4,z=(g+x)/4;return E>b&&E>G?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=L/i,r=D/i):b>G?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=L/s,r=z/s):G<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(G),i=D/r,s=z/r),this.set(i,s,r,e),this}let T=Math.sqrt((x-g)*(x-g)+(u-M)*(u-M)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(x-g)/T,this.y=(u-M)/T,this.z=(f-h)/T,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},zl=class extends zi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new bn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new wa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hi=class extends zl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ta=class extends bn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Hl=class extends bn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ci=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],g=r[o+2],M=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=M;return}if(u!==M||c!==f||l!==d||h!==g){let x=1-a,m=c*f+l*d+h*g+u*M,T=m>=0?1:-1,E=1-m*m;if(E>Number.EPSILON){let G=Math.sqrt(E),L=Math.atan2(G,m*T);x=Math.sin(x*L)/G,a=Math.sin(a*L)/G}let b=a*T;if(c=c*x+f*b,l=l*x+d*b,h=h*x+g*b,u=u*x+M*b,x===1-a){let G=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=G,l*=G,h*=G,u*=G}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-a*d,t[e+2]=l*g+h*d+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),f=c(i/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(un(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ou.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ou.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ec.copy(this).projectOnVector(t),this.sub(Ec)}reflect(t){return this.sub(Ec.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(un(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ec=new U,Ou=new ci,As=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ni):ni.fromBufferAttribute(r,o),ni.applyMatrix4(t.matrixWorld),this.expandByPoint(ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Go.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Go.copy(i.boundingBox)),Go.applyMatrix4(t.matrixWorld),this.union(Go)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ni),ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wr),Wo.subVectors(this.max,Wr),Zs.subVectors(t.a,Wr),Ks.subVectors(t.b,Wr),Js.subVectors(t.c,Wr),qi.subVectors(Ks,Zs),Zi.subVectors(Js,Ks),ms.subVectors(Zs,Js);let e=[0,-qi.z,qi.y,0,-Zi.z,Zi.y,0,-ms.z,ms.y,qi.z,0,-qi.x,Zi.z,0,-Zi.x,ms.z,0,-ms.x,-qi.y,qi.x,0,-Zi.y,Zi.x,0,-ms.y,ms.x,0];return!bc(e,Zs,Ks,Js,Wo)||(e=[1,0,0,0,1,0,0,0,1],!bc(e,Zs,Ks,Js,Wo))?!1:(Xo.crossVectors(qi,Zi),e=[Xo.x,Xo.y,Xo.z],bc(e,Zs,Ks,Js,Wo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ci=[new U,new U,new U,new U,new U,new U,new U,new U],ni=new U,Go=new As,Zs=new U,Ks=new U,Js=new U,qi=new U,Zi=new U,ms=new U,Wr=new U,Wo=new U,Xo=new U,gs=new U;function bc(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){gs.fromArray(n,r);let a=s.x*Math.abs(gs.x)+s.y*Math.abs(gs.y)+s.z*Math.abs(gs.z),c=t.dot(gs),l=e.dot(gs),h=i.dot(gs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var h0=new As,Xr=new U,Sc=new U,vr=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):h0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xr.subVectors(t,this.center);let e=Xr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Xr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xr.copy(t.center).add(Sc)),this.expandByPoint(Xr.copy(t.center).sub(Sc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Pi=new U,wc=new U,Yo=new U,Ki=new U,Tc=new U,qo=new U,Ac=new U,Rs=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pi.copy(this.origin).addScaledVector(this.direction,e),Pi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){wc.copy(t).add(e).multiplyScalar(.5),Yo.copy(e).sub(t).normalize(),Ki.copy(this.origin).sub(wc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Yo),a=Ki.dot(this.direction),c=-Ki.dot(Yo),l=Ki.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let M=1/h;u*=M,f*=M,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(wc).addScaledVector(Yo,f),d}intersectSphere(t,e){Pi.subVectors(t.center,this.origin);let i=Pi.dot(this.direction),s=Pi.dot(Pi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Pi)!==null}intersectTriangle(t,e,i,s,r){Tc.subVectors(e,t),qo.subVectors(i,t),Ac.crossVectors(Tc,qo);let o=this.direction.dot(Ac),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,t);let c=a*this.direction.dot(qo.crossVectors(Ki,qo));if(c<0)return null;let l=a*this.direction.dot(Tc.cross(Ki));if(l<0||c+l>o)return null;let h=-a*Ki.dot(Ac);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},He=class n{constructor(t,e,i,s,r,o,a,c,l,h,u,f,d,g,M,x){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,h,u,f,d,g,M,x)}set(t,e,i,s,r,o,a,c,l,h,u,f,d,g,M,x){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=M,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/$s.setFromMatrixColumn(t,0).length(),r=1/$s.setFromMatrixColumn(t,1).length(),o=1/$s.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,M=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-M*l,e[9]=-a*c,e[2]=M-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,g=l*h,M=l*u;e[0]=f+M*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=M+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,g=l*h,M=l*u;e[0]=f-M*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=M-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,M=a*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+M,e[1]=c*u,e[5]=M*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,g=a*c,M=a*l;e[0]=c*h,e[4]=M-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-M*u}else if(t.order==="XZY"){let f=o*c,d=o*l,g=a*c,M=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+M,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=M*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(u0,t,f0)}lookAt(t,e,i){let s=this.elements;return Vn.subVectors(t,e),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),Ji.crossVectors(i,Vn),Ji.lengthSq()===0&&(Math.abs(i.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),Ji.crossVectors(i,Vn)),Ji.normalize(),Zo.crossVectors(Vn,Ji),s[0]=Ji.x,s[4]=Zo.x,s[8]=Vn.x,s[1]=Ji.y,s[5]=Zo.y,s[9]=Vn.y,s[2]=Ji.z,s[6]=Zo.z,s[10]=Vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],M=i[6],x=i[10],m=i[14],T=i[3],E=i[7],b=i[11],G=i[15],L=s[0],D=s[4],z=s[8],A=s[12],S=s[1],k=s[5],tt=s[9],H=s[13],W=s[2],q=s[6],Y=s[10],xt=s[14],j=s[3],Mt=s[7],at=s[11],Wt=s[15];return r[0]=o*L+a*S+c*W+l*j,r[4]=o*D+a*k+c*q+l*Mt,r[8]=o*z+a*tt+c*Y+l*at,r[12]=o*A+a*H+c*xt+l*Wt,r[1]=h*L+u*S+f*W+d*j,r[5]=h*D+u*k+f*q+d*Mt,r[9]=h*z+u*tt+f*Y+d*at,r[13]=h*A+u*H+f*xt+d*Wt,r[2]=g*L+M*S+x*W+m*j,r[6]=g*D+M*k+x*q+m*Mt,r[10]=g*z+M*tt+x*Y+m*at,r[14]=g*A+M*H+x*xt+m*Wt,r[3]=T*L+E*S+b*W+G*j,r[7]=T*D+E*k+b*q+G*Mt,r[11]=T*z+E*tt+b*Y+G*at,r[15]=T*A+E*H+b*xt+G*Wt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],M=t[7],x=t[11],m=t[15];return g*(+r*c*u-s*l*u-r*a*f+i*l*f+s*a*d-i*c*d)+M*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+x*(+e*l*u-e*a*d-r*o*u+i*o*d+r*a*h-i*l*h)+m*(-s*a*h-e*c*u+e*a*f+s*o*u-i*o*f+i*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],M=t[13],x=t[14],m=t[15],T=u*x*l-M*f*l+M*c*d-a*x*d-u*c*m+a*f*m,E=g*f*l-h*x*l-g*c*d+o*x*d+h*c*m-o*f*m,b=h*M*l-g*u*l+g*a*d-o*M*d-h*a*m+o*u*m,G=g*u*c-h*M*c-g*a*f+o*M*f+h*a*x-o*u*x,L=e*T+i*E+s*b+r*G;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/L;return t[0]=T*D,t[1]=(M*f*r-u*x*r-M*s*d+i*x*d+u*s*m-i*f*m)*D,t[2]=(a*x*r-M*c*r+M*s*l-i*x*l-a*s*m+i*c*m)*D,t[3]=(u*c*r-a*f*r-u*s*l+i*f*l+a*s*d-i*c*d)*D,t[4]=E*D,t[5]=(h*x*r-g*f*r+g*s*d-e*x*d-h*s*m+e*f*m)*D,t[6]=(g*c*r-o*x*r-g*s*l+e*x*l+o*s*m-e*c*m)*D,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*d+e*c*d)*D,t[8]=b*D,t[9]=(g*u*r-h*M*r-g*i*d+e*M*d+h*i*m-e*u*m)*D,t[10]=(o*M*r-g*a*r+g*i*l-e*M*l-o*i*m+e*a*m)*D,t[11]=(h*a*r-o*u*r-h*i*l+e*u*l+o*i*d-e*a*d)*D,t[12]=G*D,t[13]=(h*M*s-g*u*s+g*i*f-e*M*f-h*i*x+e*u*x)*D,t[14]=(g*a*s-o*M*s-g*i*c+e*M*c+o*i*x-e*a*x)*D,t[15]=(o*u*s-h*a*s+h*i*c-e*u*c-o*i*f+e*a*f)*D,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,M=o*h,x=o*u,m=a*u,T=c*l,E=c*h,b=c*u,G=i.x,L=i.y,D=i.z;return s[0]=(1-(M+m))*G,s[1]=(d+b)*G,s[2]=(g-E)*G,s[3]=0,s[4]=(d-b)*L,s[5]=(1-(f+m))*L,s[6]=(x+T)*L,s[7]=0,s[8]=(g+E)*D,s[9]=(x-T)*D,s[10]=(1-(f+M))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=$s.set(s[0],s[1],s[2]).length(),o=$s.set(s[4],s[5],s[6]).length(),a=$s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ii.copy(this);let l=1/r,h=1/o,u=1/a;return ii.elements[0]*=l,ii.elements[1]*=l,ii.elements[2]*=l,ii.elements[4]*=h,ii.elements[5]*=h,ii.elements[6]*=h,ii.elements[8]*=u,ii.elements[9]*=u,ii.elements[10]*=u,e.setFromRotationMatrix(ii),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Oi){let c=this.elements,l=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),d,g;if(a===Oi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Sa)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Oi){let c=this.elements,l=1/(e-t),h=1/(i-s),u=1/(o-r),f=(e+t)*l,d=(i+s)*h,g,M;if(a===Oi)g=(o+r)*u,M=-2*u;else if(a===Sa)g=r*u,M=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=M,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},$s=new U,ii=new He,u0=new U(0,0,0),f0=new U(1,1,1),Ji=new U,Zo=new U,Vn=new U,Fu=new He,Bu=new ci,_i=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-un(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(un(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-un(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(un(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Fu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bu.setFromEuler(this),this.setFromQuaternion(Bu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_i.DEFAULT_ORDER="XYZ";var ho=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},d0=0,zu=new U,js=new ci,Ii=new He,Ko=new U,Yr=new U,p0=new U,m0=new ci,Hu=new U(1,0,0),ku=new U(0,1,0),Vu=new U(0,0,1),Gu={type:"added"},g0={type:"removed"},Qs={type:"childadded",child:null},Rc={type:"childremoved",child:null},We=class n extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new U,e=new _i,i=new ci,s=new U(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new _e}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return js.setFromAxisAngle(t,e),this.quaternion.multiply(js),this}rotateOnWorldAxis(t,e){return js.setFromAxisAngle(t,e),this.quaternion.premultiply(js),this}rotateX(t){return this.rotateOnAxis(Hu,t)}rotateY(t){return this.rotateOnAxis(ku,t)}rotateZ(t){return this.rotateOnAxis(Vu,t)}translateOnAxis(t,e){return zu.copy(t).applyQuaternion(this.quaternion),this.position.add(zu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hu,t)}translateY(t){return this.translateOnAxis(ku,t)}translateZ(t){return this.translateOnAxis(Vu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ko.copy(t):Ko.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Yr,Ko,this.up):Ii.lookAt(Ko,Yr,this.up),this.quaternion.setFromRotationMatrix(Ii),s&&(Ii.extractRotation(s.matrixWorld),js.setFromRotationMatrix(Ii),this.quaternion.premultiply(js.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gu),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(g0),Rc.child=t,this.dispatchEvent(Rc),Rc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gu),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,t,p0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,m0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};We.DEFAULT_UP=new U(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var si=new U,Li=new U,Cc=new U,Di=new U,tr=new U,er=new U,Wu=new U,Pc=new U,Ic=new U,Lc=new U,Dc=new Ue,Uc=new Ue,Nc=new Ue,ts=class n{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),si.subVectors(t,e),s.cross(si);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){si.subVectors(s,e),Li.subVectors(i,e),Cc.subVectors(t,e);let o=si.dot(si),a=si.dot(Li),c=si.dot(Cc),l=Li.dot(Li),h=Li.dot(Cc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Di)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Di.x),c.addScaledVector(o,Di.y),c.addScaledVector(a,Di.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return Dc.setScalar(0),Uc.setScalar(0),Nc.setScalar(0),Dc.fromBufferAttribute(t,e),Uc.fromBufferAttribute(t,i),Nc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Dc,r.x),o.addScaledVector(Uc,r.y),o.addScaledVector(Nc,r.z),o}static isFrontFacing(t,e,i,s){return si.subVectors(i,e),Li.subVectors(t,e),si.cross(Li).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return si.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),si.cross(Li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;tr.subVectors(s,i),er.subVectors(r,i),Pc.subVectors(t,i);let c=tr.dot(Pc),l=er.dot(Pc);if(c<=0&&l<=0)return e.copy(i);Ic.subVectors(t,s);let h=tr.dot(Ic),u=er.dot(Ic);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(tr,o);Lc.subVectors(t,r);let d=tr.dot(Lc),g=er.dot(Lc);if(g>=0&&d<=g)return e.copy(r);let M=d*l-c*g;if(M<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(er,a);let x=h*g-d*u;if(x<=0&&u-h>=0&&d-g>=0)return Wu.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Wu,a);let m=1/(x+M+f);return o=M*m,a=f*m,e.copy(i).addScaledVector(tr,o).addScaledVector(er,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},jf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Jo={h:0,s:0,l:0};function Oc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var ae=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ae.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Ae.workingColorSpace){if(t=Ih(t,1),e=un(e,0,1),i=un(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Oc(o,r,t+1/3),this.g=Oc(o,r,t),this.b=Oc(o,r,t-1/3)}return Ae.toWorkingColorSpace(this,s),this}setStyle(t,e=Le){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){let i=jf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fi(t.r),this.g=Fi(t.g),this.b=Fi(t.b),this}copyLinearToSRGB(t){return this.r=pr(t.r),this.g=pr(t.g),this.b=pr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return Ae.fromWorkingColorSpace(Mn.copy(this),t),Math.round(un(Mn.r*255,0,255))*65536+Math.round(un(Mn.g*255,0,255))*256+Math.round(un(Mn.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ae.workingColorSpace){Ae.fromWorkingColorSpace(Mn.copy(this),e);let i=Mn.r,s=Mn.g,r=Mn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Ae.workingColorSpace){return Ae.fromWorkingColorSpace(Mn.copy(this),e),t.r=Mn.r,t.g=Mn.g,t.b=Mn.b,t}getStyle(t=Le){Ae.fromWorkingColorSpace(Mn.copy(this),t);let e=Mn.r,i=Mn.g,s=Mn.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL($i),this.setHSL($i.h+t,$i.s+e,$i.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL($i),t.getHSL(Jo);let i=eo($i.h,Jo.h,e),s=eo($i.s,Jo.s,e),r=eo($i.l,Jo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new ae;ae.NAMES=jf;var x0=0,ki=class extends zi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=xi(),this.name="",this.blending=fr,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jc,this.blendDst=Qc,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(i.blending=this.blending),this.side!==is&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jc&&(i.blendSrc=this.blendSrc),this.blendDst!==Qc&&(i.blendDst=this.blendDst),this.blendEquation!==Es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Au&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Je=class extends ki{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=Sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var sn=new U,$o=new wt,gn=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Fl,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)$o.fromBufferAttribute(this,e),$o.applyMatrix3(t),this.setXY(e,$o.x,$o.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix3(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=oi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ie(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=oi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=oi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=oi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=oi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),i=Ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),i=Ie(i,this.array),s=Ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),i=Ie(i,this.array),s=Ie(s,this.array),r=Ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fl&&(t.usage=this.usage),t}};var Aa=class extends gn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ra=class extends gn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var pe=class extends gn{constructor(t,e,i){super(new Float32Array(t),e,i)}},_0=0,Zn=new He,Fc=new We,nr=new U,Gn=new As,qr=new As,hn=new U,Fe=class n extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($f(t)?Ra:Aa)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new _e().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Zn.makeRotationFromQuaternion(t),this.applyMatrix4(Zn),this}rotateX(t){return Zn.makeRotationX(t),this.applyMatrix4(Zn),this}rotateY(t){return Zn.makeRotationY(t),this.applyMatrix4(Zn),this}rotateZ(t){return Zn.makeRotationZ(t),this.applyMatrix4(Zn),this}translate(t,e,i){return Zn.makeTranslation(t,e,i),this.applyMatrix4(Zn),this}scale(t,e,i){return Zn.makeScale(t,e,i),this.applyMatrix4(Zn),this}lookAt(t){return Fc.lookAt(t),Fc.updateMatrix(),this.applyMatrix4(Fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pe(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new As);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Gn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let i=this.boundingSphere.center;if(Gn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];qr.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Gn.min,qr.min),Gn.expandByPoint(hn),hn.addVectors(Gn.max,qr.max),Gn.expandByPoint(hn)):(Gn.expandByPoint(qr.min),Gn.expandByPoint(qr.max))}Gn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)hn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(hn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)hn.fromBufferAttribute(a,l),c&&(nr.fromBufferAttribute(t,l),hn.add(nr)),s=Math.max(s,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let z=0;z<i.count;z++)a[z]=new U,c[z]=new U;let l=new U,h=new U,u=new U,f=new wt,d=new wt,g=new wt,M=new U,x=new U;function m(z,A,S){l.fromBufferAttribute(i,z),h.fromBufferAttribute(i,A),u.fromBufferAttribute(i,S),f.fromBufferAttribute(r,z),d.fromBufferAttribute(r,A),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),d.sub(f),g.sub(f);let k=1/(d.x*g.y-g.x*d.y);isFinite(k)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(k),x.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(k),a[z].add(M),a[A].add(M),a[S].add(M),c[z].add(x),c[A].add(x),c[S].add(x))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let z=0,A=T.length;z<A;++z){let S=T[z],k=S.start,tt=S.count;for(let H=k,W=k+tt;H<W;H+=3)m(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let E=new U,b=new U,G=new U,L=new U;function D(z){G.fromBufferAttribute(s,z),L.copy(G);let A=a[z];E.copy(A),E.sub(G.multiplyScalar(G.dot(A))).normalize(),b.crossVectors(L,A);let k=b.dot(c[z])<0?-1:1;o.setXYZW(z,E.x,E.y,E.z,k)}for(let z=0,A=T.length;z<A;++z){let S=T[z],k=S.start,tt=S.count;for(let H=k,W=k+tt;H<W;H+=3)D(t.getX(H+0)),D(t.getX(H+1)),D(t.getX(H+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,h=new U,u=new U;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),M=t.getX(f+1),x=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,x),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,M),l.fromBufferAttribute(i,x),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(x,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)hn.fromBufferAttribute(t,e),hn.normalize(),t.setXYZ(e,hn.x,hn.y,hn.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let M=0,x=c.length;M<x;M++){a.isInterleavedBufferAttribute?d=c[M]*a.data.stride+a.offset:d=c[M]*h;for(let m=0;m<h;m++)f[g++]=l[d++]}return new gn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,i);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xu=new He,xs=new Rs,jo=new vr,Yu=new U,Qo=new U,ta=new U,ea=new U,Bc=new U,na=new U,qu=new U,ia=new U,Pt=class extends We{constructor(t=new Fe,e=new Je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){na.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Bc.fromBufferAttribute(u,t),o?na.addScaledVector(Bc,h):na.addScaledVector(Bc.sub(e),h))}e.add(na)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jo.copy(i.boundingSphere),jo.applyMatrix4(r),xs.copy(t.ray).recast(t.near),!(jo.containsPoint(xs.origin)===!1&&(xs.intersectSphere(jo,Yu)===null||xs.origin.distanceToSquared(Yu)>(t.far-t.near)**2))&&(Xu.copy(r).invert(),xs.copy(t.ray).applyMatrix4(Xu),!(i.boundingBox!==null&&xs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,xs)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=f.length;g<M;g++){let x=f[g],m=o[x.materialIndex],T=Math.max(x.start,d.start),E=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let b=T,G=E;b<G;b+=3){let L=a.getX(b),D=a.getX(b+1),z=a.getX(b+2);s=sa(this,m,t,i,l,h,u,L,D,z),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),M=Math.min(a.count,d.start+d.count);for(let x=g,m=M;x<m;x+=3){let T=a.getX(x),E=a.getX(x+1),b=a.getX(x+2);s=sa(this,o,t,i,l,h,u,T,E,b),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,M=f.length;g<M;g++){let x=f[g],m=o[x.materialIndex],T=Math.max(x.start,d.start),E=Math.min(c.count,Math.min(x.start+x.count,d.start+d.count));for(let b=T,G=E;b<G;b+=3){let L=b,D=b+1,z=b+2;s=sa(this,m,t,i,l,h,u,L,D,z),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),M=Math.min(c.count,d.start+d.count);for(let x=g,m=M;x<m;x+=3){let T=x,E=x+1,b=x+2;s=sa(this,o,t,i,l,h,u,T,E,b),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function y0(n,t,e,i,s,r,o,a){let c;if(t.side===En?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===is,a),c===null)return null;ia.copy(a),ia.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(ia);return l<e.near||l>e.far?null:{distance:l,point:ia.clone(),object:n}}function sa(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,Qo),n.getVertexPosition(c,ta),n.getVertexPosition(l,ea);let h=y0(n,t,e,i,Qo,ta,ea,qu);if(h){let u=new U;ts.getBarycoord(qu,Qo,ta,ea,u),s&&(h.uv=ts.getInterpolatedAttribute(s,a,c,l,u,new wt)),r&&(h.uv1=ts.getInterpolatedAttribute(r,a,c,l,u,new wt)),o&&(h.normal=ts.getInterpolatedAttribute(o,a,c,l,u,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new U,materialIndex:0};ts.getNormal(Qo,ta,ea,f.normal),h.face=f,h.barycoord=u}return h}var ke=class n extends Fe{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(u,2));function g(M,x,m,T,E,b,G,L,D,z,A){let S=b/D,k=G/z,tt=b/2,H=G/2,W=L/2,q=D+1,Y=z+1,xt=0,j=0,Mt=new U;for(let at=0;at<Y;at++){let Wt=at*k-H;for(let Zt=0;Zt<q;Zt++){let Ee=Zt*S-tt;Mt[M]=Ee*T,Mt[x]=Wt*E,Mt[m]=W,l.push(Mt.x,Mt.y,Mt.z),Mt[M]=0,Mt[x]=0,Mt[m]=L>0?1:-1,h.push(Mt.x,Mt.y,Mt.z),u.push(Zt/D),u.push(1-at/z),xt+=1}}for(let at=0;at<z;at++)for(let Wt=0;Wt<D;Wt++){let Zt=f+Wt+q*at,Ee=f+Wt+q*(at+1),mt=f+(Wt+1)+q*(at+1),Ct=f+(Wt+1)+q*at;c.push(Zt,Ee,Ct),c.push(Ee,mt,Ct),j+=6}a.addGroup(d,j,A),d+=j,f+=xt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Er(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Rn(n){let t={};for(let e=0;e<n.length;e++){let i=Er(n[e]);for(let s in i)t[s]=i[s]}return t}function M0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Qf(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}var v0={clone:Er,merge:Rn},E0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,b0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kn=class extends ki{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=E0,this.fragmentShader=b0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Er(t.uniforms),this.uniformsGroups=M0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Ca=class extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Oi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ji=new U,Zu=new wt,Ku=new wt,fn=class extends Ca{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=co*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return co*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ji.x,ji.y).multiplyScalar(-t/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-t/ji.z)}getViewSize(t,e){return this.getViewBounds(t,Zu,Ku),e.subVectors(Ku,Zu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(to*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ir=-90,sr=1,kl=class extends We{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new fn(ir,sr,t,e);s.layers=this.layers,this.add(s);let r=new fn(ir,sr,t,e);r.layers=this.layers,this.add(r);let o=new fn(ir,sr,t,e);o.layers=this.layers,this.add(o);let a=new fn(ir,sr,t,e);a.layers=this.layers,this.add(a);let c=new fn(ir,sr,t,e);c.layers=this.layers,this.add(c);let l=new fn(ir,sr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Oi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Sa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Pa=class extends bn{constructor(t,e,i,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:xr,super(t,e,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Vl=class extends Hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Pa(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ke(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:Er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:es});r.uniforms.tEquirect.value=e;let o=new Pt(s,r),a=e.minFilter;return e.minFilter===ws&&(e.minFilter=gi),new kl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},zc=new U,S0=new U,w0=new _e,ri=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=zc.subVectors(i,e).cross(S0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(zc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||w0.getNormalMatrix(t),s=this.coplanarPoint(zc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},_s=new vr,ra=new U,uo=class{constructor(t=new ri,e=new ri,i=new ri,s=new ri,r=new ri,o=new ri){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Oi){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],M=s[10],x=s[11],m=s[12],T=s[13],E=s[14],b=s[15];if(i[0].setComponents(c-r,f-l,x-d,b-m).normalize(),i[1].setComponents(c+r,f+l,x+d,b+m).normalize(),i[2].setComponents(c+o,f+h,x+g,b+T).normalize(),i[3].setComponents(c-o,f-h,x-g,b-T).normalize(),i[4].setComponents(c-a,f-u,x-M,b-E).normalize(),e===Oi)i[5].setComponents(c+a,f+u,x+M,b+E).normalize();else if(e===Sa)i[5].setComponents(a,u,M,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(t){return _s.center.set(0,0,0),_s.radius=.7071067811865476,_s.applyMatrix4(t.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(ra.x=s.normal.x>0?t.max.x:t.min.x,ra.y=s.normal.y>0?t.max.y:t.min.y,ra.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ra)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function td(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function T0(n){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],M=u[d];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++f,u[f]=M)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let M=u[d];n.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var ss=class n extends Fe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],g=[],M=[],x=[];for(let m=0;m<h;m++){let T=m*f-o;for(let E=0;E<l;E++){let b=E*u-r;g.push(b,-T,0),M.push(0,0,1),x.push(E/a),x.push(1-m/c)}}for(let m=0;m<c;m++)for(let T=0;T<a;T++){let E=T+l*m,b=T+l*(m+1),G=T+1+l*(m+1),L=T+1+l*m;d.push(E,b,L),d.push(b,G,L)}this.setIndex(d),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(M,3)),this.setAttribute("uv",new pe(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},A0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,R0=`#ifdef USE_ALPHAHASH
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
#endif`,C0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,P0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,L0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,D0=`#ifdef USE_AOMAP
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
#endif`,U0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N0=`#ifdef USE_BATCHING
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
#endif`,O0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,F0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,B0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,H0=`#ifdef USE_IRIDESCENCE
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
#endif`,k0=`#ifdef USE_BUMPMAP
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
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,K0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,J0=`#define PI 3.141592653589793
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
} // validated`,$0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,j0=`vec3 transformedNormal = objectNormal;
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
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,em=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,im="gl_FragColor = linearToOutputTexel( gl_FragColor );",sm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rm=`#ifdef USE_ENVMAP
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
#endif`,om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,um=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pm=`#ifdef USE_GRADIENTMAP
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
}`,mm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_m=`uniform bool receiveShadow;
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
#endif`,ym=`#ifdef USE_ENVMAP
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
#endif`,Mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sm=`PhysicalMaterial material;
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
#endif`,wm=`struct PhysicalMaterial {
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
}`,Tm=`
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
#endif`,Am=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Om=`#if defined( USE_POINTS_UV )
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
#endif`,Fm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,km=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`#ifdef USE_MORPHTARGETS
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
#endif`,Gm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Km=`#ifdef USE_NORMALMAP
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
#endif`,Jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ng=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ig=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ag=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ug=`float getShadowMask() {
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
}`,fg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dg=`#ifdef USE_SKINNING
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
#endif`,pg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mg=`#ifdef USE_SKINNING
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
#endif`,gg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_g=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mg=`#ifdef USE_TRANSMISSION
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
#endif`,vg=`#ifdef USE_TRANSMISSION
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
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ag=`uniform sampler2D t2D;
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
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ig=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lg=`#include <common>
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
}`,Dg=`#if DEPTH_PACKING == 3200
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
}`,Ug=`#define DISTANCE
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
}`,Ng=`#define DISTANCE
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
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bg=`uniform float scale;
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
}`,zg=`uniform vec3 diffuse;
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
}`,Hg=`#include <common>
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
}`,kg=`uniform vec3 diffuse;
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
}`,Vg=`#define LAMBERT
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
}`,Gg=`#define LAMBERT
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
}`,Wg=`#define MATCAP
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
}`,Xg=`#define MATCAP
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
}`,Yg=`#define NORMAL
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
}`,qg=`#define NORMAL
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
}`,Zg=`#define PHONG
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
}`,Kg=`#define PHONG
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
}`,Jg=`#define STANDARD
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
}`,$g=`#define STANDARD
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
}`,jg=`#define TOON
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
}`,Qg=`#define TOON
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
}`,tx=`uniform float size;
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
}`,ex=`uniform vec3 diffuse;
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
}`,nx=`#include <common>
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
}`,ix=`uniform vec3 color;
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
}`,sx=`uniform float rotation;
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
}`,rx=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:A0,alphahash_pars_fragment:R0,alphamap_fragment:C0,alphamap_pars_fragment:P0,alphatest_fragment:I0,alphatest_pars_fragment:L0,aomap_fragment:D0,aomap_pars_fragment:U0,batching_pars_vertex:N0,batching_vertex:O0,begin_vertex:F0,beginnormal_vertex:B0,bsdfs:z0,iridescence_fragment:H0,bumpmap_pars_fragment:k0,clipping_planes_fragment:V0,clipping_planes_pars_fragment:G0,clipping_planes_pars_vertex:W0,clipping_planes_vertex:X0,color_fragment:Y0,color_pars_fragment:q0,color_pars_vertex:Z0,color_vertex:K0,common:J0,cube_uv_reflection_fragment:$0,defaultnormal_vertex:j0,displacementmap_pars_vertex:Q0,displacementmap_vertex:tm,emissivemap_fragment:em,emissivemap_pars_fragment:nm,colorspace_fragment:im,colorspace_pars_fragment:sm,envmap_fragment:rm,envmap_common_pars_fragment:om,envmap_pars_fragment:am,envmap_pars_vertex:cm,envmap_physical_pars_fragment:ym,envmap_vertex:lm,fog_vertex:hm,fog_pars_vertex:um,fog_fragment:fm,fog_pars_fragment:dm,gradientmap_pars_fragment:pm,lightmap_pars_fragment:mm,lights_lambert_fragment:gm,lights_lambert_pars_fragment:xm,lights_pars_begin:_m,lights_toon_fragment:Mm,lights_toon_pars_fragment:vm,lights_phong_fragment:Em,lights_phong_pars_fragment:bm,lights_physical_fragment:Sm,lights_physical_pars_fragment:wm,lights_fragment_begin:Tm,lights_fragment_maps:Am,lights_fragment_end:Rm,logdepthbuf_fragment:Cm,logdepthbuf_pars_fragment:Pm,logdepthbuf_pars_vertex:Im,logdepthbuf_vertex:Lm,map_fragment:Dm,map_pars_fragment:Um,map_particle_fragment:Nm,map_particle_pars_fragment:Om,metalnessmap_fragment:Fm,metalnessmap_pars_fragment:Bm,morphinstance_vertex:zm,morphcolor_vertex:Hm,morphnormal_vertex:km,morphtarget_pars_vertex:Vm,morphtarget_vertex:Gm,normal_fragment_begin:Wm,normal_fragment_maps:Xm,normal_pars_fragment:Ym,normal_pars_vertex:qm,normal_vertex:Zm,normalmap_pars_fragment:Km,clearcoat_normal_fragment_begin:Jm,clearcoat_normal_fragment_maps:$m,clearcoat_pars_fragment:jm,iridescence_pars_fragment:Qm,opaque_fragment:tg,packing:eg,premultiplied_alpha_fragment:ng,project_vertex:ig,dithering_fragment:sg,dithering_pars_fragment:rg,roughnessmap_fragment:og,roughnessmap_pars_fragment:ag,shadowmap_pars_fragment:cg,shadowmap_pars_vertex:lg,shadowmap_vertex:hg,shadowmask_pars_fragment:ug,skinbase_vertex:fg,skinning_pars_vertex:dg,skinning_vertex:pg,skinnormal_vertex:mg,specularmap_fragment:gg,specularmap_pars_fragment:xg,tonemapping_fragment:_g,tonemapping_pars_fragment:yg,transmission_fragment:Mg,transmission_pars_fragment:vg,uv_pars_fragment:Eg,uv_pars_vertex:bg,uv_vertex:Sg,worldpos_vertex:wg,background_vert:Tg,background_frag:Ag,backgroundCube_vert:Rg,backgroundCube_frag:Cg,cube_vert:Pg,cube_frag:Ig,depth_vert:Lg,depth_frag:Dg,distanceRGBA_vert:Ug,distanceRGBA_frag:Ng,equirect_vert:Og,equirect_frag:Fg,linedashed_vert:Bg,linedashed_frag:zg,meshbasic_vert:Hg,meshbasic_frag:kg,meshlambert_vert:Vg,meshlambert_frag:Gg,meshmatcap_vert:Wg,meshmatcap_frag:Xg,meshnormal_vert:Yg,meshnormal_frag:qg,meshphong_vert:Zg,meshphong_frag:Kg,meshphysical_vert:Jg,meshphysical_frag:$g,meshtoon_vert:jg,meshtoon_frag:Qg,points_vert:tx,points_frag:ex,shadow_vert:nx,shadow_frag:ix,sprite_vert:sx,sprite_frag:rx},zt={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},mi={basic:{uniforms:Rn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:Rn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new ae(0)}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:Rn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:Rn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:Rn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new ae(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:Rn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:Rn([zt.points,zt.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:Rn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:Rn([zt.common,zt.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:Rn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:Rn([zt.sprite,zt.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distanceRGBA:{uniforms:Rn([zt.common,zt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distanceRGBA_vert,fragmentShader:ye.distanceRGBA_frag},shadow:{uniforms:Rn([zt.lights,zt.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};mi.physical={uniforms:Rn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};var oa={r:0,b:0,g:0},ys=new _i,ox=new He;function ax(n,t,e,i,s,r,o){let a=new ae(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?e:t).get(E)),E}function M(T){let E=!1,b=g(T);b===null?m(a,c):b&&b.isColor&&(m(b,1),E=!0);let G=n.xr.getEnvironmentBlendMode();G==="additive"?i.buffers.color.setClear(0,0,0,1,o):G==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(T,E){let b=g(E);b&&(b.isCubeTexture||b.mapping===Za)?(h===void 0&&(h=new Pt(new ke(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Er(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(G,L,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ys.copy(E.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ox.makeRotationFromEuler(ys)),h.material.toneMapped=Ae.getTransfer(b.colorSpace)!==De,(u!==b||f!==b.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,d=n.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Pt(new ss(2,2),new Kn({name:"BackgroundMaterial",uniforms:Er(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Ae.getTransfer(b.colorSpace)!==De,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,d=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,E){T.getRGB(oa,Qf(n)),i.buffers.color.setClear(oa.r,oa.g,oa.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(T,E=1){a.set(T),c=E,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,m(a,c)},render:M,addToRenderList:x}}function cx(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(S,k,tt,H,W){let q=!1,Y=u(H,tt,k);r!==Y&&(r=Y,l(r.object)),q=d(S,H,tt,W),q&&g(S,H,tt,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,b(S,k,tt,H),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function h(S){return n.deleteVertexArray(S)}function u(S,k,tt){let H=tt.wireframe===!0,W=i[S.id];W===void 0&&(W={},i[S.id]=W);let q=W[k.id];q===void 0&&(q={},W[k.id]=q);let Y=q[H];return Y===void 0&&(Y=f(c()),q[H]=Y),Y}function f(S){let k=[],tt=[],H=[];for(let W=0;W<e;W++)k[W]=0,tt[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:tt,attributeDivisors:H,object:S,attributes:{},index:null}}function d(S,k,tt,H){let W=r.attributes,q=k.attributes,Y=0,xt=tt.getAttributes();for(let j in xt)if(xt[j].location>=0){let at=W[j],Wt=q[j];if(Wt===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(Wt=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(Wt=S.instanceColor)),at===void 0||at.attribute!==Wt||Wt&&at.data!==Wt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==H}function g(S,k,tt,H){let W={},q=k.attributes,Y=0,xt=tt.getAttributes();for(let j in xt)if(xt[j].location>=0){let at=q[j];at===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(at=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(at=S.instanceColor));let Wt={};Wt.attribute=at,at&&at.data&&(Wt.data=at.data),W[j]=Wt,Y++}r.attributes=W,r.attributesNum=Y,r.index=H}function M(){let S=r.newAttributes;for(let k=0,tt=S.length;k<tt;k++)S[k]=0}function x(S){m(S,0)}function m(S,k){let tt=r.newAttributes,H=r.enabledAttributes,W=r.attributeDivisors;tt[S]=1,H[S]===0&&(n.enableVertexAttribArray(S),H[S]=1),W[S]!==k&&(n.vertexAttribDivisor(S,k),W[S]=k)}function T(){let S=r.newAttributes,k=r.enabledAttributes;for(let tt=0,H=k.length;tt<H;tt++)k[tt]!==S[tt]&&(n.disableVertexAttribArray(tt),k[tt]=0)}function E(S,k,tt,H,W,q,Y){Y===!0?n.vertexAttribIPointer(S,k,tt,W,q):n.vertexAttribPointer(S,k,tt,H,W,q)}function b(S,k,tt,H){M();let W=H.attributes,q=tt.getAttributes(),Y=k.defaultAttributeValues;for(let xt in q){let j=q[xt];if(j.location>=0){let Mt=W[xt];if(Mt===void 0&&(xt==="instanceMatrix"&&S.instanceMatrix&&(Mt=S.instanceMatrix),xt==="instanceColor"&&S.instanceColor&&(Mt=S.instanceColor)),Mt!==void 0){let at=Mt.normalized,Wt=Mt.itemSize,Zt=t.get(Mt);if(Zt===void 0)continue;let Ee=Zt.buffer,mt=Zt.type,Ct=Zt.bytesPerElement,Xt=mt===n.INT||mt===n.UNSIGNED_INT||Mt.gpuType===wh;if(Mt.isInterleavedBufferAttribute){let Et=Mt.data,jt=Et.stride,re=Mt.offset;if(Et.isInstancedInterleavedBuffer){for(let Kt=0;Kt<j.locationSize;Kt++)m(j.location+Kt,Et.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Kt=0;Kt<j.locationSize;Kt++)x(j.location+Kt);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let Kt=0;Kt<j.locationSize;Kt++)E(j.location+Kt,Wt/j.locationSize,mt,at,jt*Ct,(re+Wt/j.locationSize*Kt)*Ct,Xt)}else{if(Mt.isInstancedBufferAttribute){for(let Et=0;Et<j.locationSize;Et++)m(j.location+Et,Mt.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Et=0;Et<j.locationSize;Et++)x(j.location+Et);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let Et=0;Et<j.locationSize;Et++)E(j.location+Et,Wt/j.locationSize,mt,at,Wt*Ct,Wt/j.locationSize*Et*Ct,Xt)}}else if(Y!==void 0){let at=Y[xt];if(at!==void 0)switch(at.length){case 2:n.vertexAttrib2fv(j.location,at);break;case 3:n.vertexAttrib3fv(j.location,at);break;case 4:n.vertexAttrib4fv(j.location,at);break;default:n.vertexAttrib1fv(j.location,at)}}}}T()}function G(){z();for(let S in i){let k=i[S];for(let tt in k){let H=k[tt];for(let W in H)h(H[W].object),delete H[W];delete k[tt]}delete i[S]}}function L(S){if(i[S.id]===void 0)return;let k=i[S.id];for(let tt in k){let H=k[tt];for(let W in H)h(H[W].object),delete H[W];delete k[tt]}delete i[S.id]}function D(S){for(let k in i){let tt=i[k];if(tt[S.id]===void 0)continue;let H=tt[S.id];for(let W in H)h(H[W].object),delete H[W];delete tt[S.id]}}function z(){A(),o=!0,r!==s&&(r=s,l(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:z,resetDefaultState:A,dispose:G,releaseStatesOfGeometry:L,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:x,disableUnusedAttributes:T}}function lx(n,t,e){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,i,1)}function c(l,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,u);let g=0;for(let M=0;M<u;M++)g+=h[M]*f[M];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function hx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==ai&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let z=D===Io&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Bi&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Ni&&!z)}function c(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),G=g>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:b,vertexTextures:G,maxSamples:L}}function ux(n){let t=this,e=null,i=0,s=!1,r=!1,o=new ri,a=new _e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,M=u.clipIntersection,x=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!x)r?h(null):l();else{let T=r?0:i,E=T*4,b=m.clippingState||null;c.value=b,b=h(g,f,E,d);for(let G=0;G!==E;++G)b[G]=e[G];m.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,g){let M=u!==null?u.length:0,x=null;if(M!==0){if(x=c.value,g!==!0||x===null){let m=d+M*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(x===null||x.length<m)&&(x=new Float32Array(m));for(let E=0,b=d;E!==M;++E,b+=4)o.copy(u[E]).applyMatrix4(T,a),o.normal.toArray(x,b),x[b+3]=o.constant}c.value=x,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,x}}function fx(n){let t=new WeakMap;function e(o,a){return a===al?o.mapping=xr:a===cl&&(o.mapping=_r),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===al||a===cl)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Vl(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Ia=class extends Ca{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},hr=4,Ju=[.125,.215,.35,.446,.526,.582],bs=20,Hc=new Ia,$u=new ae,kc=null,Vc=0,Gc=0,Wc=!1,vs=(1+Math.sqrt(5))/2,rr=1/vs,ju=[new U(-vs,rr,0),new U(vs,rr,0),new U(-rr,0,vs),new U(rr,0,vs),new U(0,vs,-rr),new U(0,vs,rr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],La=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){kc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel(),Wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ef(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(kc,Vc,Gc),this._renderer.xr.enabled=Wc,t.scissorTest=!1,aa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xr||t.mapping===_r?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel(),Wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:Io,format:ai,colorSpace:wr,depthBuffer:!1},s=Qu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qu(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dx(r)),this._blurMaterial=px(r,t,e)}return s}_compileMaterial(t){let e=new Pt(this._lodPlanes[0],t);this._renderer.compile(e,Hc)}_sceneToCubeUV(t,e,i,s){let a=new fn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor($u),h.toneMapping=ns,h.autoClear=!1;let d=new Je({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),g=new Pt(new ke,d),M=!1,x=t.background;x?x.isColor&&(d.color.copy(x),t.background=null,M=!0):(d.color.copy($u),M=!0);for(let m=0;m<6;m++){let T=m%3;T===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):T===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let E=this._cubeSize;aa(s,T*E,m>2?E:0,E,E),h.setRenderTarget(s),M&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=x}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===xr||t.mapping===_r;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ef()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Pt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;aa(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Hc)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ju[(s-r-1)%ju.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Pt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*bs-1),M=r/g,x=isFinite(r)?1+Math.floor(h*M):bs;x>bs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${bs}`);let m=[],T=0;for(let D=0;D<bs;++D){let z=D/M,A=Math.exp(-z*z/2);m.push(A),D===0?T+=A:D<x&&(T+=2*A)}for(let D=0;D<m.length;D++)m[D]=m[D]/T;f.envMap.value=t.texture,f.samples.value=x,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-i;let b=this._sizeLods[s],G=3*b*(s>E-hr?s-E+hr:0),L=4*(this._cubeSize-b);aa(e,G,L,3*b,2*b),c.setRenderTarget(e),c.render(u,Hc)}};function dx(n){let t=[],e=[],i=[],s=n,r=n-hr+1+Ju.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>n-hr?c=Ju[o-n+hr-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,M=3,x=2,m=1,T=new Float32Array(M*g*d),E=new Float32Array(x*g*d),b=new Float32Array(m*g*d);for(let L=0;L<d;L++){let D=L%3*2/3-1,z=L>2?0:-1,A=[D,z,0,D+2/3,z,0,D+2/3,z+1,0,D,z,0,D+2/3,z+1,0,D,z+1,0];T.set(A,M*g*L),E.set(f,x*g*L);let S=[L,L,L,L,L,L];b.set(S,m*g*L)}let G=new Fe;G.setAttribute("position",new gn(T,M)),G.setAttribute("uv",new gn(E,x)),G.setAttribute("faceIndex",new gn(b,m)),t.push(G),s>hr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Qu(n,t,e){let i=new Hi(n,t,e);return i.texture.mapping=Za,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function aa(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function px(n,t,e){let i=new Float32Array(bs),s=new U(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:bs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function tf(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function ef(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function Lh(){return`

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
	`}function mx(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===al||c===cl,h=c===xr||c===_r;if(l||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new La(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new La(n)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function gx(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&jr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function xx(n,t,e,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let M=f.morphAttributes[g];for(let x=0,m=M.length;x<m;x++)t.remove(M[x])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)t.update(f[g],n.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let M=d[g];for(let x=0,m=M.length;x<m;x++)t.update(M[x],n.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,g=u.attributes.position,M=0;if(d!==null){let T=d.array;M=d.version;for(let E=0,b=T.length;E<b;E+=3){let G=T[E+0],L=T[E+1],D=T[E+2];f.push(G,L,L,D,D,G)}}else if(g!==void 0){let T=g.array;M=g.version;for(let E=0,b=T.length/3-1;E<b;E+=3){let G=E+0,L=E+1,D=E+2;f.push(G,L,L,D,D,G)}}else return;let x=new($f(f)?Ra:Aa)(f,1);x.version=M;let m=r.get(u);m&&t.remove(m),r.set(u,x)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function _x(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function l(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),e.update(d,i,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let x=0;for(let m=0;m<g;m++)x+=d[m];e.update(x,i,1)}function u(f,d,g,M){if(g===0)return;let x=t.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<f.length;m++)l(f[m]/o,d[m],M[m]);else{x.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,M,0,g);let m=0;for(let T=0;T<g;T++)m+=d[T]*M[T];e.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function yx(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Mx(n,t,e){let i=new WeakMap,s=new Ue;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let A=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],E=0;d===!0&&(E=1),g===!0&&(E=2),M===!0&&(E=3);let b=a.attributes.position.count*E,G=1;b>t.maxTextureSize&&(G=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let L=new Float32Array(b*G*4*u),D=new Ta(L,b,G,u);D.type=Ni,D.needsUpdate=!0;let z=E*4;for(let S=0;S<u;S++){let k=x[S],tt=m[S],H=T[S],W=b*G*4*S;for(let q=0;q<k.count;q++){let Y=q*z;d===!0&&(s.fromBufferAttribute(k,q),L[W+Y+0]=s.x,L[W+Y+1]=s.y,L[W+Y+2]=s.z,L[W+Y+3]=0),g===!0&&(s.fromBufferAttribute(tt,q),L[W+Y+4]=s.x,L[W+Y+5]=s.y,L[W+Y+6]=s.z,L[W+Y+7]=0),M===!0&&(s.fromBufferAttribute(H,q),L[W+Y+8]=s.x,L[W+Y+9]=s.y,L[W+Y+10]=s.z,L[W+Y+11]=H.itemSize===4?s.w:1)}}f={count:u,texture:D,size:new wt(b,G)},i.set(a,f),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let M=0;M<l.length;M++)d+=l[M];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function vx(n,t,e,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Da=class extends bn{constructor(t,e,i,s,r,o,a,c,l,h=dr){if(h!==dr&&h!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===dr&&(i=Ts),i===void 0&&h===Mr&&(i=yr),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:en,this.minFilter=c!==void 0?c:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ed=new bn,nf=new Da(1,1),nd=new Ta,id=new Hl,sd=new Pa,sf=[],rf=[],of=new Float32Array(16),af=new Float32Array(9),cf=new Float32Array(4);function Tr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=sf[s];if(r===void 0&&(r=new Float32Array(s),sf[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function an(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function cn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ja(n,t){let e=rf[t];e===void 0&&(e=new Int32Array(t),rf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Ex(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function bx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;n.uniform2fv(this.addr,t),cn(e,t)}}function Sx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(an(e,t))return;n.uniform3fv(this.addr,t),cn(e,t)}}function wx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;n.uniform4fv(this.addr,t),cn(e,t)}}function Tx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(an(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),cn(e,t)}else{if(an(e,i))return;cf.set(i),n.uniformMatrix2fv(this.addr,!1,cf),cn(e,i)}}function Ax(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(an(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),cn(e,t)}else{if(an(e,i))return;af.set(i),n.uniformMatrix3fv(this.addr,!1,af),cn(e,i)}}function Rx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(an(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),cn(e,t)}else{if(an(e,i))return;of.set(i),n.uniformMatrix4fv(this.addr,!1,of),cn(e,i)}}function Cx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Px(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;n.uniform2iv(this.addr,t),cn(e,t)}}function Ix(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;n.uniform3iv(this.addr,t),cn(e,t)}}function Lx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;n.uniform4iv(this.addr,t),cn(e,t)}}function Dx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Ux(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;n.uniform2uiv(this.addr,t),cn(e,t)}}function Nx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;n.uniform3uiv(this.addr,t),cn(e,t)}}function Ox(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;n.uniform4uiv(this.addr,t),cn(e,t)}}function Fx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(nf.compareFunction=Kf,r=nf):r=ed,e.setTexture2D(t||r,s)}function Bx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||id,s)}function zx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||sd,s)}function Hx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||nd,s)}function kx(n){switch(n){case 5126:return Ex;case 35664:return bx;case 35665:return Sx;case 35666:return wx;case 35674:return Tx;case 35675:return Ax;case 35676:return Rx;case 5124:case 35670:return Cx;case 35667:case 35671:return Px;case 35668:case 35672:return Ix;case 35669:case 35673:return Lx;case 5125:return Dx;case 36294:return Ux;case 36295:return Nx;case 36296:return Ox;case 35678:case 36198:case 36298:case 36306:case 35682:return Fx;case 35679:case 36299:case 36307:return Bx;case 35680:case 36300:case 36308:case 36293:return zx;case 36289:case 36303:case 36311:case 36292:return Hx}}function Vx(n,t){n.uniform1fv(this.addr,t)}function Gx(n,t){let e=Tr(t,this.size,2);n.uniform2fv(this.addr,e)}function Wx(n,t){let e=Tr(t,this.size,3);n.uniform3fv(this.addr,e)}function Xx(n,t){let e=Tr(t,this.size,4);n.uniform4fv(this.addr,e)}function Yx(n,t){let e=Tr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function qx(n,t){let e=Tr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Zx(n,t){let e=Tr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Kx(n,t){n.uniform1iv(this.addr,t)}function Jx(n,t){n.uniform2iv(this.addr,t)}function $x(n,t){n.uniform3iv(this.addr,t)}function jx(n,t){n.uniform4iv(this.addr,t)}function Qx(n,t){n.uniform1uiv(this.addr,t)}function t_(n,t){n.uniform2uiv(this.addr,t)}function e_(n,t){n.uniform3uiv(this.addr,t)}function n_(n,t){n.uniform4uiv(this.addr,t)}function i_(n,t,e){let i=this.cache,s=t.length,r=Ja(e,s);an(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||ed,r[o])}function s_(n,t,e){let i=this.cache,s=t.length,r=Ja(e,s);an(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||id,r[o])}function r_(n,t,e){let i=this.cache,s=t.length,r=Ja(e,s);an(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||sd,r[o])}function o_(n,t,e){let i=this.cache,s=t.length,r=Ja(e,s);an(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||nd,r[o])}function a_(n){switch(n){case 5126:return Vx;case 35664:return Gx;case 35665:return Wx;case 35666:return Xx;case 35674:return Yx;case 35675:return qx;case 35676:return Zx;case 5124:case 35670:return Kx;case 35667:case 35671:return Jx;case 35668:case 35672:return $x;case 35669:case 35673:return jx;case 5125:return Qx;case 36294:return t_;case 36295:return e_;case 36296:return n_;case 35678:case 36198:case 36298:case 36306:case 35682:return i_;case 35679:case 36299:case 36307:return s_;case 35680:case 36300:case 36308:case 36293:return r_;case 36289:case 36303:case 36311:case 36292:return o_}}var Gl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=kx(e.type)}},Wl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=a_(e.type)}},Xl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Xc=/(\w+)(\])?(\[|\.)?/g;function lf(n,t){n.seq.push(t),n.map[t.id]=t}function c_(n,t,e){let i=n.name,s=i.length;for(Xc.lastIndex=0;;){let r=Xc.exec(i),o=Xc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){lf(e,l===void 0?new Gl(a,n,t):new Wl(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Xl(a),lf(e,u)),e=u}}}var mr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);c_(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function hf(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var l_=37297,h_=0;function u_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var uf=new _e;function f_(n){Ae._getMatrix(uf,Ae.workingColorSpace,n);let t=`mat3( ${uf.elements.map(e=>e.toFixed(4))} )`;switch(Ae.getTransfer(n)){case Ka:return[t,"LinearTransferOETF"];case De:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function ff(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+u_(n.getShaderSource(t),o)}else return s}function d_(n,t){let e=f_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function p_(n,t){let e;switch(t){case Sp:e="Linear";break;case wp:e="Reinhard";break;case Tp:e="Cineon";break;case Ap:e="ACESFilmic";break;case Cp:e="AgX";break;case Pp:e="Neutral";break;case Rp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ca=new U;function m_(){Ae.getLuminanceCoefficients(ca);let n=ca.x.toFixed(4),t=ca.y.toFixed(4),e=ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qr).join(`
`)}function x_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function __(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Qr(n){return n!==""}function df(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var y_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yl(n){return n.replace(y_,v_)}var M_=new Map;function v_(n,t){let e=ye[t];if(e===void 0){let i=M_.get(t);if(i!==void 0)e=ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Yl(e)}var E_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mf(n){return n.replace(E_,b_)}function b_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function S_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Of?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===qa?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ui&&(t="SHADOWMAP_TYPE_VSM"),t}function w_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case xr:case _r:t="ENVMAP_TYPE_CUBE";break;case Za:t="ENVMAP_TYPE_CUBE_UV";break}return t}function T_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case _r:t="ENVMAP_MODE_REFRACTION";break}return t}function A_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Sh:t="ENVMAP_BLENDING_MULTIPLY";break;case Ep:t="ENVMAP_BLENDING_MIX";break;case bp:t="ENVMAP_BLENDING_ADD";break}return t}function R_(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function C_(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=S_(e),l=w_(e),h=T_(e),u=A_(e),f=R_(e),d=g_(e),g=x_(r),M=s.createProgram(),x,m,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qr).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qr).join(`
`),m.length>0&&(m+=`
`)):(x=[gf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),m=[gf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ns?"#define TONE_MAPPING":"",e.toneMapping!==ns?ye.tonemapping_pars_fragment:"",e.toneMapping!==ns?p_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,d_("linearToOutputTexel",e.outputColorSpace),m_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qr).join(`
`)),o=Yl(o),o=df(o,e),o=pf(o,e),a=Yl(a),a=df(a,e),a=pf(a,e),o=mf(o),a=mf(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===Ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let E=T+x+o,b=T+m+a,G=hf(s,s.VERTEX_SHADER,E),L=hf(s,s.FRAGMENT_SHADER,b);s.attachShader(M,G),s.attachShader(M,L),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function D(k){if(n.debug.checkShaderErrors){let tt=s.getProgramInfoLog(M).trim(),H=s.getShaderInfoLog(G).trim(),W=s.getShaderInfoLog(L).trim(),q=!0,Y=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,G,L);else{let xt=ff(s,G,"vertex"),j=ff(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+tt+`
`+xt+`
`+j)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(H===""||W==="")&&(Y=!1);Y&&(k.diagnostics={runnable:q,programLog:tt,vertexShader:{log:H,prefix:x},fragmentShader:{log:W,prefix:m}})}s.deleteShader(G),s.deleteShader(L),z=new mr(s,M),A=__(s,M)}let z;this.getUniforms=function(){return z===void 0&&D(this),z};let A;this.getAttributes=function(){return A===void 0&&D(this),A};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(M,l_)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=h_++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=G,this.fragmentShader=L,this}var P_=0,ql=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Zl(t),e.set(t,i)),i}},Zl=class{constructor(t){this.id=P_++,this.code=t,this.usedTimes=0}};function I_(n,t,e,i,s,r,o){let a=new ho,c=new ql,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(A){return l.add(A),A===0?"uv":`uv${A}`}function x(A,S,k,tt,H){let W=tt.fog,q=H.geometry,Y=A.isMeshStandardMaterial?tt.environment:null,xt=(A.isMeshStandardMaterial?e:t).get(A.envMap||Y),j=xt&&xt.mapping===Za?xt.image.height:null,Mt=g[A.type];A.precision!==null&&(d=s.getMaxPrecision(A.precision),d!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",d,"instead."));let at=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Wt=at!==void 0?at.length:0,Zt=0;q.morphAttributes.position!==void 0&&(Zt=1),q.morphAttributes.normal!==void 0&&(Zt=2),q.morphAttributes.color!==void 0&&(Zt=3);let Ee,mt,Ct,Xt;if(Mt){let Ce=mi[Mt];Ee=Ce.vertexShader,mt=Ce.fragmentShader}else Ee=A.vertexShader,mt=A.fragmentShader,c.update(A),Ct=c.getVertexShaderID(A),Xt=c.getFragmentShaderID(A);let Et=n.getRenderTarget(),jt=n.state.buffers.depth.getReversed(),re=H.isInstancedMesh===!0,Kt=H.isBatchedMesh===!0,ge=!!A.map,ut=!!A.matcap,bt=!!xt,O=!!A.aoMap,Yt=!!A.lightMap,At=!!A.bumpMap,Ot=!!A.normalMap,Dt=!!A.displacementMap,Qt=!!A.emissiveMap,Vt=!!A.metalnessMap,P=!!A.roughnessMap,w=A.anisotropy>0,Q=A.clearcoat>0,pt=A.dispersion>0,vt=A.iridescence>0,B=A.sheen>0,et=A.transmission>0,Z=w&&!!A.anisotropyMap,ht=Q&&!!A.clearcoatMap,Nt=Q&&!!A.clearcoatNormalMap,$=Q&&!!A.clearcoatRoughnessMap,ft=vt&&!!A.iridescenceMap,_t=vt&&!!A.iridescenceThicknessMap,gt=B&&!!A.sheenColorMap,Tt=B&&!!A.sheenRoughnessMap,ce=!!A.specularMap,oe=!!A.specularColorMap,$t=!!A.specularIntensityMap,X=et&&!!A.transmissionMap,Ut=et&&!!A.thicknessMap,ct=!!A.gradientMap,yt=!!A.alphaMap,Gt=A.alphaTest>0,Ft=!!A.alphaHash,he=!!A.extensions,Be=ns;A.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(Be=n.toneMapping);let Ve={shaderID:Mt,shaderType:A.type,shaderName:A.name,vertexShader:Ee,fragmentShader:mt,defines:A.defines,customVertexShaderID:Ct,customFragmentShaderID:Xt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:d,batching:Kt,batchingColor:Kt&&H._colorsTexture!==null,instancing:re,instancingColor:re&&H.instanceColor!==null,instancingMorph:re&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Et===null?n.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:wr,alphaToCoverage:!!A.alphaToCoverage,map:ge,matcap:ut,envMap:bt,envMapMode:bt&&xt.mapping,envMapCubeUVHeight:j,aoMap:O,lightMap:Yt,bumpMap:At,normalMap:Ot,displacementMap:f&&Dt,emissiveMap:Qt,normalMapObjectSpace:Ot&&A.normalMapType===Up,normalMapTangentSpace:Ot&&A.normalMapType===Zf,metalnessMap:Vt,roughnessMap:P,anisotropy:w,anisotropyMap:Z,clearcoat:Q,clearcoatMap:ht,clearcoatNormalMap:Nt,clearcoatRoughnessMap:$,dispersion:pt,iridescence:vt,iridescenceMap:ft,iridescenceThicknessMap:_t,sheen:B,sheenColorMap:gt,sheenRoughnessMap:Tt,specularMap:ce,specularColorMap:oe,specularIntensityMap:$t,transmission:et,transmissionMap:X,thicknessMap:Ut,gradientMap:ct,opaque:A.transparent===!1&&A.blending===fr&&A.alphaToCoverage===!1,alphaMap:yt,alphaTest:Gt,alphaHash:Ft,combine:A.combine,mapUv:ge&&M(A.map.channel),aoMapUv:O&&M(A.aoMap.channel),lightMapUv:Yt&&M(A.lightMap.channel),bumpMapUv:At&&M(A.bumpMap.channel),normalMapUv:Ot&&M(A.normalMap.channel),displacementMapUv:Dt&&M(A.displacementMap.channel),emissiveMapUv:Qt&&M(A.emissiveMap.channel),metalnessMapUv:Vt&&M(A.metalnessMap.channel),roughnessMapUv:P&&M(A.roughnessMap.channel),anisotropyMapUv:Z&&M(A.anisotropyMap.channel),clearcoatMapUv:ht&&M(A.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&M(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&M(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&M(A.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&M(A.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&M(A.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&M(A.sheenRoughnessMap.channel),specularMapUv:ce&&M(A.specularMap.channel),specularColorMapUv:oe&&M(A.specularColorMap.channel),specularIntensityMapUv:$t&&M(A.specularIntensityMap.channel),transmissionMapUv:X&&M(A.transmissionMap.channel),thicknessMapUv:Ut&&M(A.thicknessMap.channel),alphaMapUv:yt&&M(A.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ot||w),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!q.attributes.uv&&(ge||yt),fog:!!W,useFog:A.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:jt,skinning:H.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Wt,morphTextureStride:Zt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:Be,decodeVideoTexture:ge&&A.map.isVideoTexture===!0&&Ae.getTransfer(A.map.colorSpace)===De,decodeVideoTextureEmissive:Qt&&A.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(A.emissiveMap.colorSpace)===De,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===vn,flipSided:A.side===En,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:he&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&A.extensions.multiDraw===!0||Kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ve.vertexUv1s=l.has(1),Ve.vertexUv2s=l.has(2),Ve.vertexUv3s=l.has(3),l.clear(),Ve}function m(A){let S=[];if(A.shaderID?S.push(A.shaderID):(S.push(A.customVertexShaderID),S.push(A.customFragmentShaderID)),A.defines!==void 0)for(let k in A.defines)S.push(k),S.push(A.defines[k]);return A.isRawShaderMaterial===!1&&(T(S,A),E(S,A),S.push(n.outputColorSpace)),S.push(A.customProgramCacheKey),S.join()}function T(A,S){A.push(S.precision),A.push(S.outputColorSpace),A.push(S.envMapMode),A.push(S.envMapCubeUVHeight),A.push(S.mapUv),A.push(S.alphaMapUv),A.push(S.lightMapUv),A.push(S.aoMapUv),A.push(S.bumpMapUv),A.push(S.normalMapUv),A.push(S.displacementMapUv),A.push(S.emissiveMapUv),A.push(S.metalnessMapUv),A.push(S.roughnessMapUv),A.push(S.anisotropyMapUv),A.push(S.clearcoatMapUv),A.push(S.clearcoatNormalMapUv),A.push(S.clearcoatRoughnessMapUv),A.push(S.iridescenceMapUv),A.push(S.iridescenceThicknessMapUv),A.push(S.sheenColorMapUv),A.push(S.sheenRoughnessMapUv),A.push(S.specularMapUv),A.push(S.specularColorMapUv),A.push(S.specularIntensityMapUv),A.push(S.transmissionMapUv),A.push(S.thicknessMapUv),A.push(S.combine),A.push(S.fogExp2),A.push(S.sizeAttenuation),A.push(S.morphTargetsCount),A.push(S.morphAttributeCount),A.push(S.numDirLights),A.push(S.numPointLights),A.push(S.numSpotLights),A.push(S.numSpotLightMaps),A.push(S.numHemiLights),A.push(S.numRectAreaLights),A.push(S.numDirLightShadows),A.push(S.numPointLightShadows),A.push(S.numSpotLightShadows),A.push(S.numSpotLightShadowsWithMaps),A.push(S.numLightProbes),A.push(S.shadowMapType),A.push(S.toneMapping),A.push(S.numClippingPlanes),A.push(S.numClipIntersection),A.push(S.depthPacking)}function E(A,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),A.push(a.mask)}function b(A){let S=g[A.type],k;if(S){let tt=mi[S];k=v0.clone(tt.uniforms)}else k=A.uniforms;return k}function G(A,S){let k;for(let tt=0,H=h.length;tt<H;tt++){let W=h[tt];if(W.cacheKey===S){k=W,++k.usedTimes;break}}return k===void 0&&(k=new C_(n,S,A,r),h.push(k)),k}function L(A){if(--A.usedTimes===0){let S=h.indexOf(A);h[S]=h[h.length-1],h.pop(),A.destroy()}}function D(A){c.remove(A)}function z(){c.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:b,acquireProgram:G,releaseProgram:L,releaseShaderCache:D,programs:h,dispose:z}}function L_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function D_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function xf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function _f(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,f,d,g,M,x){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:M,group:x},n[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=M,m.group=x),t++,m}function a(u,f,d,g,M,x){let m=o(u,f,d,g,M,x);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):e.push(m)}function c(u,f,d,g,M,x){let m=o(u,f,d,g,M,x);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function l(u,f){e.length>1&&e.sort(u||D_),i.length>1&&i.sort(f||xf),s.length>1&&s.sort(f||xf)}function h(){for(let u=t,f=n.length;u<f;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function U_(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new _f,n.set(i,[o])):s>=r.length?(o=new _f,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function N_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new ae};break;case"SpotLight":e={position:new U,direction:new U,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":e={color:new ae,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function O_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var F_=0;function B_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function z_(n){let t=new N_,e=O_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);let s=new U,r=new He,o=new He;function a(l){let h=0,u=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let d=0,g=0,M=0,x=0,m=0,T=0,E=0,b=0,G=0,L=0,D=0;l.sort(B_);for(let A=0,S=l.length;A<S;A++){let k=l[A],tt=k.color,H=k.intensity,W=k.distance,q=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)h+=tt.r*H,u+=tt.g*H,f+=tt.b*H;else if(k.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(k.sh.coefficients[Y],H);D++}else if(k.isDirectionalLight){let Y=t.get(k);if(Y.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let xt=k.shadow,j=e.get(k);j.shadowIntensity=xt.intensity,j.shadowBias=xt.bias,j.shadowNormalBias=xt.normalBias,j.shadowRadius=xt.radius,j.shadowMapSize=xt.mapSize,i.directionalShadow[d]=j,i.directionalShadowMap[d]=q,i.directionalShadowMatrix[d]=k.shadow.matrix,T++}i.directional[d]=Y,d++}else if(k.isSpotLight){let Y=t.get(k);Y.position.setFromMatrixPosition(k.matrixWorld),Y.color.copy(tt).multiplyScalar(H),Y.distance=W,Y.coneCos=Math.cos(k.angle),Y.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Y.decay=k.decay,i.spot[M]=Y;let xt=k.shadow;if(k.map&&(i.spotLightMap[G]=k.map,G++,xt.updateMatrices(k),k.castShadow&&L++),i.spotLightMatrix[M]=xt.matrix,k.castShadow){let j=e.get(k);j.shadowIntensity=xt.intensity,j.shadowBias=xt.bias,j.shadowNormalBias=xt.normalBias,j.shadowRadius=xt.radius,j.shadowMapSize=xt.mapSize,i.spotShadow[M]=j,i.spotShadowMap[M]=q,b++}M++}else if(k.isRectAreaLight){let Y=t.get(k);Y.color.copy(tt).multiplyScalar(H),Y.halfWidth.set(k.width*.5,0,0),Y.halfHeight.set(0,k.height*.5,0),i.rectArea[x]=Y,x++}else if(k.isPointLight){let Y=t.get(k);if(Y.color.copy(k.color).multiplyScalar(k.intensity),Y.distance=k.distance,Y.decay=k.decay,k.castShadow){let xt=k.shadow,j=e.get(k);j.shadowIntensity=xt.intensity,j.shadowBias=xt.bias,j.shadowNormalBias=xt.normalBias,j.shadowRadius=xt.radius,j.shadowMapSize=xt.mapSize,j.shadowCameraNear=xt.camera.near,j.shadowCameraFar=xt.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=k.shadow.matrix,E++}i.point[g]=Y,g++}else if(k.isHemisphereLight){let Y=t.get(k);Y.skyColor.copy(k.color).multiplyScalar(H),Y.groundColor.copy(k.groundColor).multiplyScalar(H),i.hemi[m]=Y,m++}}x>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=zt.LTC_FLOAT_1,i.rectAreaLTC2=zt.LTC_FLOAT_2):(i.rectAreaLTC1=zt.LTC_HALF_1,i.rectAreaLTC2=zt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let z=i.hash;(z.directionalLength!==d||z.pointLength!==g||z.spotLength!==M||z.rectAreaLength!==x||z.hemiLength!==m||z.numDirectionalShadows!==T||z.numPointShadows!==E||z.numSpotShadows!==b||z.numSpotMaps!==G||z.numLightProbes!==D)&&(i.directional.length=d,i.spot.length=M,i.rectArea.length=x,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=b+G-L,i.spotLightMap.length=G,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=D,z.directionalLength=d,z.pointLength=g,z.spotLength=M,z.rectAreaLength=x,z.hemiLength=m,z.numDirectionalShadows=T,z.numPointShadows=E,z.numSpotShadows=b,z.numSpotMaps=G,z.numLightProbes=D,i.version=F_++)}function c(l,h){let u=0,f=0,d=0,g=0,M=0,x=h.matrixWorldInverse;for(let m=0,T=l.length;m<T;m++){let E=l[m];if(E.isDirectionalLight){let b=i.directional[u];b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(x),u++}else if(E.isSpotLight){let b=i.spot[d];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(x),b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(x),d++}else if(E.isRectAreaLight){let b=i.rectArea[g];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(x),o.identity(),r.copy(E.matrixWorld),r.premultiply(x),o.extractRotation(r),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){let b=i.point[f];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(x),f++}else if(E.isHemisphereLight){let b=i.hemi[M];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(x),M++}}}return{setup:a,setupView:c,state:i}}function yf(n){let t=new z_(n),e=[],i=[];function s(h){l.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function H_(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new yf(n),t.set(s,[a])):r>=o.length?(a=new yf(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Kl=class extends ki{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Lp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Jl=class extends ki{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},k_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V_=`uniform sampler2D shadow_pass;
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
}`;function G_(n,t,e){let i=new uo,s=new wt,r=new wt,o=new Ue,a=new Kl({depthPacking:Dp}),c=new Jl,l={},h=e.maxTextureSize,u={[is]:En,[En]:is,[vn]:vn},f=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:k_,fragmentShader:V_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Fe;g.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Pt(g,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Of;let m=this.type;this.render=function(L,D,z){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||L.length===0)return;let A=n.getRenderTarget(),S=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),tt=n.state;tt.setBlending(es),tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);let H=m!==Ui&&this.type===Ui,W=m===Ui&&this.type!==Ui;for(let q=0,Y=L.length;q<Y;q++){let xt=L[q],j=xt.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",xt,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let Mt=j.getFrameExtents();if(s.multiply(Mt),r.copy(j.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Mt.x),s.x=r.x*Mt.x,j.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Mt.y),s.y=r.y*Mt.y,j.mapSize.y=r.y)),j.map===null||H===!0||W===!0){let Wt=this.type!==Ui?{minFilter:en,magFilter:en}:{};j.map!==null&&j.map.dispose(),j.map=new Hi(s.x,s.y,Wt),j.map.texture.name=xt.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();let at=j.getViewportCount();for(let Wt=0;Wt<at;Wt++){let Zt=j.getViewport(Wt);o.set(r.x*Zt.x,r.y*Zt.y,r.x*Zt.z,r.y*Zt.w),tt.viewport(o),j.updateMatrices(xt,Wt),i=j.getFrustum(),b(D,z,j.camera,xt,this.type)}j.isPointLightShadow!==!0&&this.type===Ui&&T(j,z),j.needsUpdate=!1}m=this.type,x.needsUpdate=!1,n.setRenderTarget(A,S,k)};function T(L,D){let z=t.update(M);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,d.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Hi(s.x,s.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(D,null,z,f,M,null),d.uniforms.shadow_pass.value=L.mapPass.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(D,null,z,d,M,null)}function E(L,D,z,A){let S=null,k=z.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(k!==void 0)S=k;else if(S=z.isPointLight===!0?c:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let tt=S.uuid,H=D.uuid,W=l[tt];W===void 0&&(W={},l[tt]=W);let q=W[H];q===void 0&&(q=S.clone(),W[H]=q,D.addEventListener("dispose",G)),S=q}if(S.visible=D.visible,S.wireframe=D.wireframe,A===Ui?S.side=D.shadowSide!==null?D.shadowSide:D.side:S.side=D.shadowSide!==null?D.shadowSide:u[D.side],S.alphaMap=D.alphaMap,S.alphaTest=D.alphaTest,S.map=D.map,S.clipShadows=D.clipShadows,S.clippingPlanes=D.clippingPlanes,S.clipIntersection=D.clipIntersection,S.displacementMap=D.displacementMap,S.displacementScale=D.displacementScale,S.displacementBias=D.displacementBias,S.wireframeLinewidth=D.wireframeLinewidth,S.linewidth=D.linewidth,z.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let tt=n.properties.get(S);tt.light=z}return S}function b(L,D,z,A,S){if(L.visible===!1)return;if(L.layers.test(D.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&S===Ui)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,L.matrixWorld);let H=t.update(L),W=L.material;if(Array.isArray(W)){let q=H.groups;for(let Y=0,xt=q.length;Y<xt;Y++){let j=q[Y],Mt=W[j.materialIndex];if(Mt&&Mt.visible){let at=E(L,Mt,A,S);L.onBeforeShadow(n,L,D,z,H,at,j),n.renderBufferDirect(z,null,H,at,L,j),L.onAfterShadow(n,L,D,z,H,at,j)}}}else if(W.visible){let q=E(L,W,A,S);L.onBeforeShadow(n,L,D,z,H,q,null),n.renderBufferDirect(z,null,H,q,L,null),L.onAfterShadow(n,L,D,z,H,q,null)}}let tt=L.children;for(let H=0,W=tt.length;H<W;H++)b(tt[H],D,z,A,S)}function G(L){L.target.removeEventListener("dispose",G);for(let z in l){let A=l[z],S=L.target.uuid;S in A&&(A[S].dispose(),delete A[S])}}}var W_={[tl]:el,[nl]:rl,[il]:ol,[gr]:sl,[el]:tl,[rl]:nl,[ol]:il,[sl]:gr};function X_(n,t){function e(){let X=!1,Ut=new Ue,ct=null,yt=new Ue(0,0,0,0);return{setMask:function(Gt){ct!==Gt&&!X&&(n.colorMask(Gt,Gt,Gt,Gt),ct=Gt)},setLocked:function(Gt){X=Gt},setClear:function(Gt,Ft,he,Be,Ve){Ve===!0&&(Gt*=Be,Ft*=Be,he*=Be),Ut.set(Gt,Ft,he,Be),yt.equals(Ut)===!1&&(n.clearColor(Gt,Ft,he,Be),yt.copy(Ut))},reset:function(){X=!1,ct=null,yt.set(-1,0,0,0)}}}function i(){let X=!1,Ut=!1,ct=null,yt=null,Gt=null;return{setReversed:function(Ft){if(Ut!==Ft){let he=t.get("EXT_clip_control");Ut?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT);let Be=Gt;Gt=null,this.setClear(Be)}Ut=Ft},getReversed:function(){return Ut},setTest:function(Ft){Ft?Et(n.DEPTH_TEST):jt(n.DEPTH_TEST)},setMask:function(Ft){ct!==Ft&&!X&&(n.depthMask(Ft),ct=Ft)},setFunc:function(Ft){if(Ut&&(Ft=W_[Ft]),yt!==Ft){switch(Ft){case tl:n.depthFunc(n.NEVER);break;case el:n.depthFunc(n.ALWAYS);break;case nl:n.depthFunc(n.LESS);break;case gr:n.depthFunc(n.LEQUAL);break;case il:n.depthFunc(n.EQUAL);break;case sl:n.depthFunc(n.GEQUAL);break;case rl:n.depthFunc(n.GREATER);break;case ol:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}yt=Ft}},setLocked:function(Ft){X=Ft},setClear:function(Ft){Gt!==Ft&&(Ut&&(Ft=1-Ft),n.clearDepth(Ft),Gt=Ft)},reset:function(){X=!1,ct=null,yt=null,Gt=null,Ut=!1}}}function s(){let X=!1,Ut=null,ct=null,yt=null,Gt=null,Ft=null,he=null,Be=null,Ve=null;return{setTest:function(Ce){X||(Ce?Et(n.STENCIL_TEST):jt(n.STENCIL_TEST))},setMask:function(Ce){Ut!==Ce&&!X&&(n.stencilMask(Ce),Ut=Ce)},setFunc:function(Ce,Bn,Dn){(ct!==Ce||yt!==Bn||Gt!==Dn)&&(n.stencilFunc(Ce,Bn,Dn),ct=Ce,yt=Bn,Gt=Dn)},setOp:function(Ce,Bn,Dn){(Ft!==Ce||he!==Bn||Be!==Dn)&&(n.stencilOp(Ce,Bn,Dn),Ft=Ce,he=Bn,Be=Dn)},setLocked:function(Ce){X=Ce},setClear:function(Ce){Ve!==Ce&&(n.clearStencil(Ce),Ve=Ce)},reset:function(){X=!1,Ut=null,ct=null,yt=null,Gt=null,Ft=null,he=null,Be=null,Ve=null}}}let r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,M=!1,x=null,m=null,T=null,E=null,b=null,G=null,L=null,D=new ae(0,0,0),z=0,A=!1,S=null,k=null,tt=null,H=null,W=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,xt=0,j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(xt=parseFloat(/^WebGL (\d)/.exec(j)[1]),Y=xt>=1):j.indexOf("OpenGL ES")!==-1&&(xt=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Y=xt>=2);let Mt=null,at={},Wt=n.getParameter(n.SCISSOR_BOX),Zt=n.getParameter(n.VIEWPORT),Ee=new Ue().fromArray(Wt),mt=new Ue().fromArray(Zt);function Ct(X,Ut,ct,yt){let Gt=new Uint8Array(4),Ft=n.createTexture();n.bindTexture(X,Ft),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let he=0;he<ct;he++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(Ut,0,n.RGBA,1,1,yt,0,n.RGBA,n.UNSIGNED_BYTE,Gt):n.texImage2D(Ut+he,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Gt);return Ft}let Xt={};Xt[n.TEXTURE_2D]=Ct(n.TEXTURE_2D,n.TEXTURE_2D,1),Xt[n.TEXTURE_CUBE_MAP]=Ct(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Xt[n.TEXTURE_2D_ARRAY]=Ct(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Xt[n.TEXTURE_3D]=Ct(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Et(n.DEPTH_TEST),o.setFunc(gr),At(!1),Ot(Mu),Et(n.CULL_FACE),O(es);function Et(X){h[X]!==!0&&(n.enable(X),h[X]=!0)}function jt(X){h[X]!==!1&&(n.disable(X),h[X]=!1)}function re(X,Ut){return u[X]!==Ut?(n.bindFramebuffer(X,Ut),u[X]=Ut,X===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Ut),X===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Kt(X,Ut){let ct=d,yt=!1;if(X){ct=f.get(Ut),ct===void 0&&(ct=[],f.set(Ut,ct));let Gt=X.textures;if(ct.length!==Gt.length||ct[0]!==n.COLOR_ATTACHMENT0){for(let Ft=0,he=Gt.length;Ft<he;Ft++)ct[Ft]=n.COLOR_ATTACHMENT0+Ft;ct.length=Gt.length,yt=!0}}else ct[0]!==n.BACK&&(ct[0]=n.BACK,yt=!0);yt&&n.drawBuffers(ct)}function ge(X){return g!==X?(n.useProgram(X),g=X,!0):!1}let ut={[Es]:n.FUNC_ADD,[rp]:n.FUNC_SUBTRACT,[op]:n.FUNC_REVERSE_SUBTRACT};ut[ap]=n.MIN,ut[cp]=n.MAX;let bt={[lp]:n.ZERO,[hp]:n.ONE,[up]:n.SRC_COLOR,[jc]:n.SRC_ALPHA,[xp]:n.SRC_ALPHA_SATURATE,[mp]:n.DST_COLOR,[dp]:n.DST_ALPHA,[fp]:n.ONE_MINUS_SRC_COLOR,[Qc]:n.ONE_MINUS_SRC_ALPHA,[gp]:n.ONE_MINUS_DST_COLOR,[pp]:n.ONE_MINUS_DST_ALPHA,[_p]:n.CONSTANT_COLOR,[yp]:n.ONE_MINUS_CONSTANT_COLOR,[Mp]:n.CONSTANT_ALPHA,[vp]:n.ONE_MINUS_CONSTANT_ALPHA};function O(X,Ut,ct,yt,Gt,Ft,he,Be,Ve,Ce){if(X===es){M===!0&&(jt(n.BLEND),M=!1);return}if(M===!1&&(Et(n.BLEND),M=!0),X!==sp){if(X!==x||Ce!==A){if((m!==Es||b!==Es)&&(n.blendEquation(n.FUNC_ADD),m=Es,b=Es),Ce)switch(X){case fr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vu:n.blendFunc(n.ONE,n.ONE);break;case Eu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case fr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Eu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}T=null,E=null,G=null,L=null,D.set(0,0,0),z=0,x=X,A=Ce}return}Gt=Gt||Ut,Ft=Ft||ct,he=he||yt,(Ut!==m||Gt!==b)&&(n.blendEquationSeparate(ut[Ut],ut[Gt]),m=Ut,b=Gt),(ct!==T||yt!==E||Ft!==G||he!==L)&&(n.blendFuncSeparate(bt[ct],bt[yt],bt[Ft],bt[he]),T=ct,E=yt,G=Ft,L=he),(Be.equals(D)===!1||Ve!==z)&&(n.blendColor(Be.r,Be.g,Be.b,Ve),D.copy(Be),z=Ve),x=X,A=!1}function Yt(X,Ut){X.side===vn?jt(n.CULL_FACE):Et(n.CULL_FACE);let ct=X.side===En;Ut&&(ct=!ct),At(ct),X.blending===fr&&X.transparent===!1?O(es):O(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);let yt=X.stencilWrite;a.setTest(yt),yt&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Qt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Et(n.SAMPLE_ALPHA_TO_COVERAGE):jt(n.SAMPLE_ALPHA_TO_COVERAGE)}function At(X){S!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),S=X)}function Ot(X){X!==np?(Et(n.CULL_FACE),X!==k&&(X===Mu?n.cullFace(n.BACK):X===ip?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):jt(n.CULL_FACE),k=X}function Dt(X){X!==tt&&(Y&&n.lineWidth(X),tt=X)}function Qt(X,Ut,ct){X?(Et(n.POLYGON_OFFSET_FILL),(H!==Ut||W!==ct)&&(n.polygonOffset(Ut,ct),H=Ut,W=ct)):jt(n.POLYGON_OFFSET_FILL)}function Vt(X){X?Et(n.SCISSOR_TEST):jt(n.SCISSOR_TEST)}function P(X){X===void 0&&(X=n.TEXTURE0+q-1),Mt!==X&&(n.activeTexture(X),Mt=X)}function w(X,Ut,ct){ct===void 0&&(Mt===null?ct=n.TEXTURE0+q-1:ct=Mt);let yt=at[ct];yt===void 0&&(yt={type:void 0,texture:void 0},at[ct]=yt),(yt.type!==X||yt.texture!==Ut)&&(Mt!==ct&&(n.activeTexture(ct),Mt=ct),n.bindTexture(X,Ut||Xt[X]),yt.type=X,yt.texture=Ut)}function Q(){let X=at[Mt];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function pt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function vt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function B(){try{n.texSubImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function et(){try{n.texSubImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Z(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ht(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Nt(){try{n.texStorage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $(){try{n.texStorage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ft(){try{n.texImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _t(){try{n.texImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function gt(X){Ee.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),Ee.copy(X))}function Tt(X){mt.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),mt.copy(X))}function ce(X,Ut){let ct=l.get(Ut);ct===void 0&&(ct=new WeakMap,l.set(Ut,ct));let yt=ct.get(X);yt===void 0&&(yt=n.getUniformBlockIndex(Ut,X.name),ct.set(X,yt))}function oe(X,Ut){let yt=l.get(Ut).get(X);c.get(Ut)!==yt&&(n.uniformBlockBinding(Ut,yt,X.__bindingPointIndex),c.set(Ut,yt))}function $t(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Mt=null,at={},u={},f=new WeakMap,d=[],g=null,M=!1,x=null,m=null,T=null,E=null,b=null,G=null,L=null,D=new ae(0,0,0),z=0,A=!1,S=null,k=null,tt=null,H=null,W=null,Ee.set(0,0,n.canvas.width,n.canvas.height),mt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Et,disable:jt,bindFramebuffer:re,drawBuffers:Kt,useProgram:ge,setBlending:O,setMaterial:Yt,setFlipSided:At,setCullFace:Ot,setLineWidth:Dt,setPolygonOffset:Qt,setScissorTest:Vt,activeTexture:P,bindTexture:w,unbindTexture:Q,compressedTexImage2D:pt,compressedTexImage3D:vt,texImage2D:ft,texImage3D:_t,updateUBOMapping:ce,uniformBlockBinding:oe,texStorage2D:Nt,texStorage3D:$,texSubImage2D:B,texSubImage3D:et,compressedTexSubImage2D:Z,compressedTexSubImage3D:ht,scissor:gt,viewport:Tt,reset:$t}}function Mf(n,t,e,i){let s=Y_(i);switch(e){case kf:return n*t;case Gf:return n*t;case Wf:return n*t*2;case Xf:return n*t/s.components*s.byteLength;case Rh:return n*t/s.components*s.byteLength;case Yf:return n*t*2/s.components*s.byteLength;case Ch:return n*t*2/s.components*s.byteLength;case Vf:return n*t*3/s.components*s.byteLength;case ai:return n*t*4/s.components*s.byteLength;case Ph:return n*t*4/s.components*s.byteLength;case _a:case ya:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ma:case va:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ul:case dl:return Math.max(n,16)*Math.max(t,8)/4;case hl:case fl:return Math.max(n,8)*Math.max(t,8)/2;case pl:case ml:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case gl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _l:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case yl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case vl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case El:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case bl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Sl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case wl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Al:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Cl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Pl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ea:case Il:case Ll:return Math.ceil(n/4)*Math.ceil(t/4)*16;case qf:case Dl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ul:case Nl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Y_(n){switch(n){case Bi:case Bf:return{byteLength:1,components:1};case ao:case zf:case Io:return{byteLength:2,components:1};case Th:case Ah:return{byteLength:2,components:4};case Ts:case wh:case Ni:return{byteLength:4,components:1};case Hf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function q_(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new wt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,w){return d?new OffscreenCanvas(P,w):lo("canvas")}function M(P,w,Q){let pt=1,vt=Vt(P);if((vt.width>Q||vt.height>Q)&&(pt=Q/Math.max(vt.width,vt.height)),pt<1)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap||typeof VideoFrame!="undefined"&&P instanceof VideoFrame){let B=Math.floor(pt*vt.width),et=Math.floor(pt*vt.height);u===void 0&&(u=g(B,et));let Z=w?g(B,et):u;return Z.width=B,Z.height=et,Z.getContext("2d").drawImage(P,0,0,B,et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+B+"x"+et+")."),Z}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),P;return P}function x(P){return P.generateMipmaps}function m(P){n.generateMipmap(P)}function T(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(P,w,Q,pt,vt=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let B=w;if(w===n.RED&&(Q===n.FLOAT&&(B=n.R32F),Q===n.HALF_FLOAT&&(B=n.R16F),Q===n.UNSIGNED_BYTE&&(B=n.R8)),w===n.RED_INTEGER&&(Q===n.UNSIGNED_BYTE&&(B=n.R8UI),Q===n.UNSIGNED_SHORT&&(B=n.R16UI),Q===n.UNSIGNED_INT&&(B=n.R32UI),Q===n.BYTE&&(B=n.R8I),Q===n.SHORT&&(B=n.R16I),Q===n.INT&&(B=n.R32I)),w===n.RG&&(Q===n.FLOAT&&(B=n.RG32F),Q===n.HALF_FLOAT&&(B=n.RG16F),Q===n.UNSIGNED_BYTE&&(B=n.RG8)),w===n.RG_INTEGER&&(Q===n.UNSIGNED_BYTE&&(B=n.RG8UI),Q===n.UNSIGNED_SHORT&&(B=n.RG16UI),Q===n.UNSIGNED_INT&&(B=n.RG32UI),Q===n.BYTE&&(B=n.RG8I),Q===n.SHORT&&(B=n.RG16I),Q===n.INT&&(B=n.RG32I)),w===n.RGB_INTEGER&&(Q===n.UNSIGNED_BYTE&&(B=n.RGB8UI),Q===n.UNSIGNED_SHORT&&(B=n.RGB16UI),Q===n.UNSIGNED_INT&&(B=n.RGB32UI),Q===n.BYTE&&(B=n.RGB8I),Q===n.SHORT&&(B=n.RGB16I),Q===n.INT&&(B=n.RGB32I)),w===n.RGBA_INTEGER&&(Q===n.UNSIGNED_BYTE&&(B=n.RGBA8UI),Q===n.UNSIGNED_SHORT&&(B=n.RGBA16UI),Q===n.UNSIGNED_INT&&(B=n.RGBA32UI),Q===n.BYTE&&(B=n.RGBA8I),Q===n.SHORT&&(B=n.RGBA16I),Q===n.INT&&(B=n.RGBA32I)),w===n.RGB&&Q===n.UNSIGNED_INT_5_9_9_9_REV&&(B=n.RGB9_E5),w===n.RGBA){let et=vt?Ka:Ae.getTransfer(pt);Q===n.FLOAT&&(B=n.RGBA32F),Q===n.HALF_FLOAT&&(B=n.RGBA16F),Q===n.UNSIGNED_BYTE&&(B=et===De?n.SRGB8_ALPHA8:n.RGBA8),Q===n.UNSIGNED_SHORT_4_4_4_4&&(B=n.RGBA4),Q===n.UNSIGNED_SHORT_5_5_5_1&&(B=n.RGB5_A1)}return(B===n.R16F||B===n.R32F||B===n.RG16F||B===n.RG32F||B===n.RGBA16F||B===n.RGBA32F)&&t.get("EXT_color_buffer_float"),B}function b(P,w){let Q;return P?w===null||w===Ts||w===yr?Q=n.DEPTH24_STENCIL8:w===Ni?Q=n.DEPTH32F_STENCIL8:w===ao&&(Q=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ts||w===yr?Q=n.DEPTH_COMPONENT24:w===Ni?Q=n.DEPTH_COMPONENT32F:w===ao&&(Q=n.DEPTH_COMPONENT16),Q}function G(P,w){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==en&&P.minFilter!==gi?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function L(P){let w=P.target;w.removeEventListener("dispose",L),z(w),w.isVideoTexture&&h.delete(w)}function D(P){let w=P.target;w.removeEventListener("dispose",D),S(w)}function z(P){let w=i.get(P);if(w.__webglInit===void 0)return;let Q=P.source,pt=f.get(Q);if(pt){let vt=pt[w.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&A(P),Object.keys(pt).length===0&&f.delete(Q)}i.remove(P)}function A(P){let w=i.get(P);n.deleteTexture(w.__webglTexture);let Q=P.source,pt=f.get(Q);delete pt[w.__cacheKey],o.memory.textures--}function S(P){let w=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(w.__webglFramebuffer[pt]))for(let vt=0;vt<w.__webglFramebuffer[pt].length;vt++)n.deleteFramebuffer(w.__webglFramebuffer[pt][vt]);else n.deleteFramebuffer(w.__webglFramebuffer[pt]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[pt])}else{if(Array.isArray(w.__webglFramebuffer))for(let pt=0;pt<w.__webglFramebuffer.length;pt++)n.deleteFramebuffer(w.__webglFramebuffer[pt]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let pt=0;pt<w.__webglColorRenderbuffer.length;pt++)w.__webglColorRenderbuffer[pt]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[pt]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let Q=P.textures;for(let pt=0,vt=Q.length;pt<vt;pt++){let B=i.get(Q[pt]);B.__webglTexture&&(n.deleteTexture(B.__webglTexture),o.memory.textures--),i.remove(Q[pt])}i.remove(P)}let k=0;function tt(){k=0}function H(){let P=k;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),k+=1,P}function W(P){let w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function q(P,w){let Q=i.get(P);if(P.isVideoTexture&&Dt(P),P.isRenderTargetTexture===!1&&P.version>0&&Q.__version!==P.version){let pt=P.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(Q,P,w);return}}e.bindTexture(n.TEXTURE_2D,Q.__webglTexture,n.TEXTURE0+w)}function Y(P,w){let Q=i.get(P);if(P.version>0&&Q.__version!==P.version){mt(Q,P,w);return}e.bindTexture(n.TEXTURE_2D_ARRAY,Q.__webglTexture,n.TEXTURE0+w)}function xt(P,w){let Q=i.get(P);if(P.version>0&&Q.__version!==P.version){mt(Q,P,w);return}e.bindTexture(n.TEXTURE_3D,Q.__webglTexture,n.TEXTURE0+w)}function j(P,w){let Q=i.get(P);if(P.version>0&&Q.__version!==P.version){Ct(Q,P,w);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture,n.TEXTURE0+w)}let Mt={[oo]:n.REPEAT,[Ss]:n.CLAMP_TO_EDGE,[ll]:n.MIRRORED_REPEAT},at={[en]:n.NEAREST,[Ip]:n.NEAREST_MIPMAP_NEAREST,[Vo]:n.NEAREST_MIPMAP_LINEAR,[gi]:n.LINEAR,[_c]:n.LINEAR_MIPMAP_NEAREST,[ws]:n.LINEAR_MIPMAP_LINEAR},Wt={[Np]:n.NEVER,[kp]:n.ALWAYS,[Op]:n.LESS,[Kf]:n.LEQUAL,[Fp]:n.EQUAL,[Hp]:n.GEQUAL,[Bp]:n.GREATER,[zp]:n.NOTEQUAL};function Zt(P,w){if(w.type===Ni&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===gi||w.magFilter===_c||w.magFilter===Vo||w.magFilter===ws||w.minFilter===gi||w.minFilter===_c||w.minFilter===Vo||w.minFilter===ws)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,Mt[w.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,Mt[w.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,Mt[w.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,at[w.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,at[w.minFilter]),w.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Wt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===en||w.minFilter!==Vo&&w.minFilter!==ws||w.type===Ni&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let Q=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Ee(P,w){let Q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",L));let pt=w.source,vt=f.get(pt);vt===void 0&&(vt={},f.set(pt,vt));let B=W(w);if(B!==P.__cacheKey){vt[B]===void 0&&(vt[B]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),vt[B].usedTimes++;let et=vt[P.__cacheKey];et!==void 0&&(vt[P.__cacheKey].usedTimes--,et.usedTimes===0&&A(w)),P.__cacheKey=B,P.__webglTexture=vt[B].texture}return Q}function mt(P,w,Q){let pt=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(pt=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(pt=n.TEXTURE_3D);let vt=Ee(P,w),B=w.source;e.bindTexture(pt,P.__webglTexture,n.TEXTURE0+Q);let et=i.get(B);if(B.version!==et.__version||vt===!0){e.activeTexture(n.TEXTURE0+Q);let Z=Ae.getPrimaries(Ae.workingColorSpace),ht=w.colorSpace===Qi?null:Ae.getPrimaries(w.colorSpace),Nt=w.colorSpace===Qi||Z===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let $=M(w.image,!1,s.maxTextureSize);$=Qt(w,$);let ft=r.convert(w.format,w.colorSpace),_t=r.convert(w.type),gt=E(w.internalFormat,ft,_t,w.colorSpace,w.isVideoTexture);Zt(pt,w);let Tt,ce=w.mipmaps,oe=w.isVideoTexture!==!0,$t=et.__version===void 0||vt===!0,X=B.dataReady,Ut=G(w,$);if(w.isDepthTexture)gt=b(w.format===Mr,w.type),$t&&(oe?e.texStorage2D(n.TEXTURE_2D,1,gt,$.width,$.height):e.texImage2D(n.TEXTURE_2D,0,gt,$.width,$.height,0,ft,_t,null));else if(w.isDataTexture)if(ce.length>0){oe&&$t&&e.texStorage2D(n.TEXTURE_2D,Ut,gt,ce[0].width,ce[0].height);for(let ct=0,yt=ce.length;ct<yt;ct++)Tt=ce[ct],oe?X&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,Tt.width,Tt.height,ft,_t,Tt.data):e.texImage2D(n.TEXTURE_2D,ct,gt,Tt.width,Tt.height,0,ft,_t,Tt.data);w.generateMipmaps=!1}else oe?($t&&e.texStorage2D(n.TEXTURE_2D,Ut,gt,$.width,$.height),X&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,$.width,$.height,ft,_t,$.data)):e.texImage2D(n.TEXTURE_2D,0,gt,$.width,$.height,0,ft,_t,$.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){oe&&$t&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ut,gt,ce[0].width,ce[0].height,$.depth);for(let ct=0,yt=ce.length;ct<yt;ct++)if(Tt=ce[ct],w.format!==ai)if(ft!==null)if(oe){if(X)if(w.layerUpdates.size>0){let Gt=Mf(Tt.width,Tt.height,w.format,w.type);for(let Ft of w.layerUpdates){let he=Tt.data.subarray(Ft*Gt/Tt.data.BYTES_PER_ELEMENT,(Ft+1)*Gt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,Ft,Tt.width,Tt.height,1,ft,he)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,Tt.width,Tt.height,$.depth,ft,Tt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ct,gt,Tt.width,Tt.height,$.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?X&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,Tt.width,Tt.height,$.depth,ft,_t,Tt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ct,gt,Tt.width,Tt.height,$.depth,0,ft,_t,Tt.data)}else{oe&&$t&&e.texStorage2D(n.TEXTURE_2D,Ut,gt,ce[0].width,ce[0].height);for(let ct=0,yt=ce.length;ct<yt;ct++)Tt=ce[ct],w.format!==ai?ft!==null?oe?X&&e.compressedTexSubImage2D(n.TEXTURE_2D,ct,0,0,Tt.width,Tt.height,ft,Tt.data):e.compressedTexImage2D(n.TEXTURE_2D,ct,gt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?X&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,Tt.width,Tt.height,ft,_t,Tt.data):e.texImage2D(n.TEXTURE_2D,ct,gt,Tt.width,Tt.height,0,ft,_t,Tt.data)}else if(w.isDataArrayTexture)if(oe){if($t&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ut,gt,$.width,$.height,$.depth),X)if(w.layerUpdates.size>0){let ct=Mf($.width,$.height,w.format,w.type);for(let yt of w.layerUpdates){let Gt=$.data.subarray(yt*ct/$.data.BYTES_PER_ELEMENT,(yt+1)*ct/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,yt,$.width,$.height,1,ft,_t,Gt)}w.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ft,_t,$.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,gt,$.width,$.height,$.depth,0,ft,_t,$.data);else if(w.isData3DTexture)oe?($t&&e.texStorage3D(n.TEXTURE_3D,Ut,gt,$.width,$.height,$.depth),X&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ft,_t,$.data)):e.texImage3D(n.TEXTURE_3D,0,gt,$.width,$.height,$.depth,0,ft,_t,$.data);else if(w.isFramebufferTexture){if($t)if(oe)e.texStorage2D(n.TEXTURE_2D,Ut,gt,$.width,$.height);else{let ct=$.width,yt=$.height;for(let Gt=0;Gt<Ut;Gt++)e.texImage2D(n.TEXTURE_2D,Gt,gt,ct,yt,0,ft,_t,null),ct>>=1,yt>>=1}}else if(ce.length>0){if(oe&&$t){let ct=Vt(ce[0]);e.texStorage2D(n.TEXTURE_2D,Ut,gt,ct.width,ct.height)}for(let ct=0,yt=ce.length;ct<yt;ct++)Tt=ce[ct],oe?X&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,ft,_t,Tt):e.texImage2D(n.TEXTURE_2D,ct,gt,ft,_t,Tt);w.generateMipmaps=!1}else if(oe){if($t){let ct=Vt($);e.texStorage2D(n.TEXTURE_2D,Ut,gt,ct.width,ct.height)}X&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,_t,$)}else e.texImage2D(n.TEXTURE_2D,0,gt,ft,_t,$);x(w)&&m(pt),et.__version=B.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Ct(P,w,Q){if(w.image.length!==6)return;let pt=Ee(P,w),vt=w.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+Q);let B=i.get(vt);if(vt.version!==B.__version||pt===!0){e.activeTexture(n.TEXTURE0+Q);let et=Ae.getPrimaries(Ae.workingColorSpace),Z=w.colorSpace===Qi?null:Ae.getPrimaries(w.colorSpace),ht=w.colorSpace===Qi||et===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Nt=w.isCompressedTexture||w.image[0].isCompressedTexture,$=w.image[0]&&w.image[0].isDataTexture,ft=[];for(let yt=0;yt<6;yt++)!Nt&&!$?ft[yt]=M(w.image[yt],!0,s.maxCubemapSize):ft[yt]=$?w.image[yt].image:w.image[yt],ft[yt]=Qt(w,ft[yt]);let _t=ft[0],gt=r.convert(w.format,w.colorSpace),Tt=r.convert(w.type),ce=E(w.internalFormat,gt,Tt,w.colorSpace),oe=w.isVideoTexture!==!0,$t=B.__version===void 0||pt===!0,X=vt.dataReady,Ut=G(w,_t);Zt(n.TEXTURE_CUBE_MAP,w);let ct;if(Nt){oe&&$t&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ut,ce,_t.width,_t.height);for(let yt=0;yt<6;yt++){ct=ft[yt].mipmaps;for(let Gt=0;Gt<ct.length;Gt++){let Ft=ct[Gt];w.format!==ai?gt!==null?oe?X&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Gt,0,0,Ft.width,Ft.height,gt,Ft.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Gt,ce,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Gt,0,0,Ft.width,Ft.height,gt,Tt,Ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Gt,ce,Ft.width,Ft.height,0,gt,Tt,Ft.data)}}}else{if(ct=w.mipmaps,oe&&$t){ct.length>0&&Ut++;let yt=Vt(ft[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ut,ce,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if($){oe?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,ft[yt].width,ft[yt].height,gt,Tt,ft[yt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ce,ft[yt].width,ft[yt].height,0,gt,Tt,ft[yt].data);for(let Gt=0;Gt<ct.length;Gt++){let he=ct[Gt].image[yt].image;oe?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Gt+1,0,0,he.width,he.height,gt,Tt,he.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Gt+1,ce,he.width,he.height,0,gt,Tt,he.data)}}else{oe?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,gt,Tt,ft[yt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ce,gt,Tt,ft[yt]);for(let Gt=0;Gt<ct.length;Gt++){let Ft=ct[Gt];oe?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Gt+1,0,0,gt,Tt,Ft.image[yt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Gt+1,ce,gt,Tt,Ft.image[yt])}}}x(w)&&m(n.TEXTURE_CUBE_MAP),B.__version=vt.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Xt(P,w,Q,pt,vt,B){let et=r.convert(Q.format,Q.colorSpace),Z=r.convert(Q.type),ht=E(Q.internalFormat,et,Z,Q.colorSpace),Nt=i.get(w),$=i.get(Q);if($.__renderTarget=w,!Nt.__hasExternalTextures){let ft=Math.max(1,w.width>>B),_t=Math.max(1,w.height>>B);vt===n.TEXTURE_3D||vt===n.TEXTURE_2D_ARRAY?e.texImage3D(vt,B,ht,ft,_t,w.depth,0,et,Z,null):e.texImage2D(vt,B,ht,ft,_t,0,et,Z,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),Ot(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pt,vt,$.__webglTexture,0,At(w)):(vt===n.TEXTURE_2D||vt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,pt,vt,$.__webglTexture,B),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Et(P,w,Q){if(n.bindRenderbuffer(n.RENDERBUFFER,P),w.depthBuffer){let pt=w.depthTexture,vt=pt&&pt.isDepthTexture?pt.type:null,B=b(w.stencilBuffer,vt),et=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=At(w);Ot(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Z,B,w.width,w.height):Q?n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,B,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,B,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,P)}else{let pt=w.textures;for(let vt=0;vt<pt.length;vt++){let B=pt[vt],et=r.convert(B.format,B.colorSpace),Z=r.convert(B.type),ht=E(B.internalFormat,et,Z,B.colorSpace),Nt=At(w);Q&&Ot(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt,ht,w.width,w.height):Ot(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt,ht,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ht,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function jt(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let pt=i.get(w.depthTexture);pt.__renderTarget=w,(!pt.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),q(w.depthTexture,0);let vt=pt.__webglTexture,B=At(w);if(w.depthTexture.format===dr)Ot(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,vt,0,B):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,vt,0);else if(w.depthTexture.format===Mr)Ot(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,vt,0,B):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function re(P){let w=i.get(P),Q=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){let pt=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),pt){let vt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,pt.removeEventListener("dispose",vt)};pt.addEventListener("dispose",vt),w.__depthDisposeCallback=vt}w.__boundDepthTexture=pt}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");jt(w.__webglFramebuffer,P)}else if(Q){w.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[pt]),w.__webglDepthbuffer[pt]===void 0)w.__webglDepthbuffer[pt]=n.createRenderbuffer(),Et(w.__webglDepthbuffer[pt],P,!1);else{let vt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,B=w.__webglDepthbuffer[pt];n.bindRenderbuffer(n.RENDERBUFFER,B),n.framebufferRenderbuffer(n.FRAMEBUFFER,vt,n.RENDERBUFFER,B)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),Et(w.__webglDepthbuffer,P,!1);else{let pt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,vt=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,vt),n.framebufferRenderbuffer(n.FRAMEBUFFER,pt,n.RENDERBUFFER,vt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Kt(P,w,Q){let pt=i.get(P);w!==void 0&&Xt(pt.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Q!==void 0&&re(P)}function ge(P){let w=P.texture,Q=i.get(P),pt=i.get(w);P.addEventListener("dispose",D);let vt=P.textures,B=P.isWebGLCubeRenderTarget===!0,et=vt.length>1;if(et||(pt.__webglTexture===void 0&&(pt.__webglTexture=n.createTexture()),pt.__version=w.version,o.memory.textures++),B){Q.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer[Z]=[];for(let ht=0;ht<w.mipmaps.length;ht++)Q.__webglFramebuffer[Z][ht]=n.createFramebuffer()}else Q.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Z=0;Z<w.mipmaps.length;Z++)Q.__webglFramebuffer[Z]=n.createFramebuffer()}else Q.__webglFramebuffer=n.createFramebuffer();if(et)for(let Z=0,ht=vt.length;Z<ht;Z++){let Nt=i.get(vt[Z]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&Ot(P)===!1){Q.__webglMultisampledFramebuffer=n.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Z=0;Z<vt.length;Z++){let ht=vt[Z];Q.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Q.__webglColorRenderbuffer[Z]);let Nt=r.convert(ht.format,ht.colorSpace),$=r.convert(ht.type),ft=E(ht.internalFormat,Nt,$,ht.colorSpace,P.isXRRenderTarget===!0),_t=At(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,_t,ft,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,Q.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(Q.__webglDepthRenderbuffer=n.createRenderbuffer(),Et(Q.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(B){e.bindTexture(n.TEXTURE_CUBE_MAP,pt.__webglTexture),Zt(n.TEXTURE_CUBE_MAP,w);for(let Z=0;Z<6;Z++)if(w.mipmaps&&w.mipmaps.length>0)for(let ht=0;ht<w.mipmaps.length;ht++)Xt(Q.__webglFramebuffer[Z][ht],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht);else Xt(Q.__webglFramebuffer[Z],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);x(w)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(et){for(let Z=0,ht=vt.length;Z<ht;Z++){let Nt=vt[Z],$=i.get(Nt);e.bindTexture(n.TEXTURE_2D,$.__webglTexture),Zt(n.TEXTURE_2D,Nt),Xt(Q.__webglFramebuffer,P,Nt,n.COLOR_ATTACHMENT0+Z,n.TEXTURE_2D,0),x(Nt)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let Z=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Z=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Z,pt.__webglTexture),Zt(Z,w),w.mipmaps&&w.mipmaps.length>0)for(let ht=0;ht<w.mipmaps.length;ht++)Xt(Q.__webglFramebuffer[ht],P,w,n.COLOR_ATTACHMENT0,Z,ht);else Xt(Q.__webglFramebuffer,P,w,n.COLOR_ATTACHMENT0,Z,0);x(w)&&m(Z),e.unbindTexture()}P.depthBuffer&&re(P)}function ut(P){let w=P.textures;for(let Q=0,pt=w.length;Q<pt;Q++){let vt=w[Q];if(x(vt)){let B=T(P),et=i.get(vt).__webglTexture;e.bindTexture(B,et),m(B),e.unbindTexture()}}}let bt=[],O=[];function Yt(P){if(P.samples>0){if(Ot(P)===!1){let w=P.textures,Q=P.width,pt=P.height,vt=n.COLOR_BUFFER_BIT,B=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=i.get(P),Z=w.length>1;if(Z)for(let ht=0;ht<w.length;ht++)e.bindFramebuffer(n.FRAMEBUFFER,et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,et.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,et.__webglFramebuffer);for(let ht=0;ht<w.length;ht++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(vt|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(vt|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,et.__webglColorRenderbuffer[ht]);let Nt=i.get(w[ht]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Nt,0)}n.blitFramebuffer(0,0,Q,pt,0,0,Q,pt,vt,n.NEAREST),c===!0&&(bt.length=0,O.length=0,bt.push(n.COLOR_ATTACHMENT0+ht),P.depthBuffer&&P.resolveDepthBuffer===!1&&(bt.push(B),O.push(B),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,bt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let ht=0;ht<w.length;ht++){e.bindFramebuffer(n.FRAMEBUFFER,et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,et.__webglColorRenderbuffer[ht]);let Nt=i.get(w[ht]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,Nt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,et.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let w=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function At(P){return Math.min(s.maxSamples,P.samples)}function Ot(P){let w=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Dt(P){let w=o.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function Qt(P,w){let Q=P.colorSpace,pt=P.format,vt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Q!==wr&&Q!==Qi&&(Ae.getTransfer(Q)===De?(pt!==ai||vt!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),w}function Vt(P){return typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame!="undefined"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=tt,this.setTexture2D=q,this.setTexture2DArray=Y,this.setTexture3D=xt,this.setTextureCube=j,this.rebindTextures=Kt,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Xt,this.useMultisampledRTT=Ot}function Z_(n,t){function e(i,s=Qi){let r,o=Ae.getTransfer(s);if(i===Bi)return n.UNSIGNED_BYTE;if(i===Th)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ah)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Hf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Bf)return n.BYTE;if(i===zf)return n.SHORT;if(i===ao)return n.UNSIGNED_SHORT;if(i===wh)return n.INT;if(i===Ts)return n.UNSIGNED_INT;if(i===Ni)return n.FLOAT;if(i===Io)return n.HALF_FLOAT;if(i===kf)return n.ALPHA;if(i===Vf)return n.RGB;if(i===ai)return n.RGBA;if(i===Gf)return n.LUMINANCE;if(i===Wf)return n.LUMINANCE_ALPHA;if(i===dr)return n.DEPTH_COMPONENT;if(i===Mr)return n.DEPTH_STENCIL;if(i===Xf)return n.RED;if(i===Rh)return n.RED_INTEGER;if(i===Yf)return n.RG;if(i===Ch)return n.RG_INTEGER;if(i===Ph)return n.RGBA_INTEGER;if(i===_a||i===ya||i===Ma||i===va)if(o===De)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===_a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===_a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hl||i===ul||i===fl||i===dl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===hl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ul)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pl||i===ml||i===gl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===pl||i===ml)return o===De?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===gl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xl||i===_l||i===yl||i===Ml||i===vl||i===El||i===bl||i===Sl||i===wl||i===Tl||i===Al||i===Rl||i===Cl||i===Pl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===xl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_l)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ml)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===El)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Tl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Al)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Cl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ea||i===Il||i===Ll)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ea)return o===De?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ll)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qf||i===Dl||i===Ul||i===Nl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ea)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ul)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===yr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var $l=class extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},qt=class extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}},K_={type:"move"},no=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let M of t.hand.values()){let x=e.getJointPose(M,i),m=this._getHandJoint(l,M);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(K_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new qt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},J_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$_=`
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

}`,jl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new bn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Kn({vertexShader:J_,fragmentShader:$_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pt(new ss(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ql=class extends zi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,M=new jl,x=e.getContextAttributes(),m=null,T=null,E=[],b=[],G=new wt,L=null,D=new fn;D.viewport=new Ue;let z=new fn;z.viewport=new Ue;let A=[D,z],S=new $l,k=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(mt){let Ct=E[mt];return Ct===void 0&&(Ct=new no,E[mt]=Ct),Ct.getTargetRaySpace()},this.getControllerGrip=function(mt){let Ct=E[mt];return Ct===void 0&&(Ct=new no,E[mt]=Ct),Ct.getGripSpace()},this.getHand=function(mt){let Ct=E[mt];return Ct===void 0&&(Ct=new no,E[mt]=Ct),Ct.getHandSpace()};function H(mt){let Ct=b.indexOf(mt.inputSource);if(Ct===-1)return;let Xt=E[Ct];Xt!==void 0&&(Xt.update(mt.inputSource,mt.frame,l||o),Xt.dispatchEvent({type:mt.type,data:mt.inputSource}))}function W(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",q);for(let mt=0;mt<E.length;mt++){let Ct=b[mt];Ct!==null&&(b[mt]=null,E[mt].disconnect(Ct))}k=null,tt=null,M.reset(),t.setRenderTarget(m),d=null,f=null,u=null,s=null,T=null,Ee.stop(),i.isPresenting=!1,t.setPixelRatio(L),t.setSize(G.width,G.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(mt){r=mt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(mt){a=mt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(mt){l=mt},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(mt){if(s=mt,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",W),s.addEventListener("inputsourceschange",q),x.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(G),s.renderState.layers===void 0){let Ct={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Ct),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new Hi(d.framebufferWidth,d.framebufferHeight,{format:ai,type:Bi,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let Ct=null,Xt=null,Et=null;x.depth&&(Et=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ct=x.stencil?Mr:dr,Xt=x.stencil?yr:Ts);let jt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(jt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),T=new Hi(f.textureWidth,f.textureHeight,{format:ai,type:Bi,depthTexture:new Da(f.textureWidth,f.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ee.setContext(s),Ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function q(mt){for(let Ct=0;Ct<mt.removed.length;Ct++){let Xt=mt.removed[Ct],Et=b.indexOf(Xt);Et>=0&&(b[Et]=null,E[Et].disconnect(Xt))}for(let Ct=0;Ct<mt.added.length;Ct++){let Xt=mt.added[Ct],Et=b.indexOf(Xt);if(Et===-1){for(let re=0;re<E.length;re++)if(re>=b.length){b.push(Xt),Et=re;break}else if(b[re]===null){b[re]=Xt,Et=re;break}if(Et===-1)break}let jt=E[Et];jt&&jt.connect(Xt)}}let Y=new U,xt=new U;function j(mt,Ct,Xt){Y.setFromMatrixPosition(Ct.matrixWorld),xt.setFromMatrixPosition(Xt.matrixWorld);let Et=Y.distanceTo(xt),jt=Ct.projectionMatrix.elements,re=Xt.projectionMatrix.elements,Kt=jt[14]/(jt[10]-1),ge=jt[14]/(jt[10]+1),ut=(jt[9]+1)/jt[5],bt=(jt[9]-1)/jt[5],O=(jt[8]-1)/jt[0],Yt=(re[8]+1)/re[0],At=Kt*O,Ot=Kt*Yt,Dt=Et/(-O+Yt),Qt=Dt*-O;if(Ct.matrixWorld.decompose(mt.position,mt.quaternion,mt.scale),mt.translateX(Qt),mt.translateZ(Dt),mt.matrixWorld.compose(mt.position,mt.quaternion,mt.scale),mt.matrixWorldInverse.copy(mt.matrixWorld).invert(),jt[10]===-1)mt.projectionMatrix.copy(Ct.projectionMatrix),mt.projectionMatrixInverse.copy(Ct.projectionMatrixInverse);else{let Vt=Kt+Dt,P=ge+Dt,w=At-Qt,Q=Ot+(Et-Qt),pt=ut*ge/P*Vt,vt=bt*ge/P*Vt;mt.projectionMatrix.makePerspective(w,Q,pt,vt,Vt,P),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert()}}function Mt(mt,Ct){Ct===null?mt.matrixWorld.copy(mt.matrix):mt.matrixWorld.multiplyMatrices(Ct.matrixWorld,mt.matrix),mt.matrixWorldInverse.copy(mt.matrixWorld).invert()}this.updateCamera=function(mt){if(s===null)return;let Ct=mt.near,Xt=mt.far;M.texture!==null&&(M.depthNear>0&&(Ct=M.depthNear),M.depthFar>0&&(Xt=M.depthFar)),S.near=z.near=D.near=Ct,S.far=z.far=D.far=Xt,(k!==S.near||tt!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),k=S.near,tt=S.far),D.layers.mask=mt.layers.mask|2,z.layers.mask=mt.layers.mask|4,S.layers.mask=D.layers.mask|z.layers.mask;let Et=mt.parent,jt=S.cameras;Mt(S,Et);for(let re=0;re<jt.length;re++)Mt(jt[re],Et);jt.length===2?j(S,D,z):S.projectionMatrix.copy(D.projectionMatrix),at(mt,S,Et)};function at(mt,Ct,Xt){Xt===null?mt.matrix.copy(Ct.matrixWorld):(mt.matrix.copy(Xt.matrixWorld),mt.matrix.invert(),mt.matrix.multiply(Ct.matrixWorld)),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.updateMatrixWorld(!0),mt.projectionMatrix.copy(Ct.projectionMatrix),mt.projectionMatrixInverse.copy(Ct.projectionMatrixInverse),mt.isPerspectiveCamera&&(mt.fov=co*2*Math.atan(1/mt.projectionMatrix.elements[5]),mt.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(mt){c=mt,f!==null&&(f.fixedFoveation=mt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=mt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(S)};let Wt=null;function Zt(mt,Ct){if(h=Ct.getViewerPose(l||o),g=Ct,h!==null){let Xt=h.views;d!==null&&(t.setRenderTargetFramebuffer(T,d.framebuffer),t.setRenderTarget(T));let Et=!1;Xt.length!==S.cameras.length&&(S.cameras.length=0,Et=!0);for(let re=0;re<Xt.length;re++){let Kt=Xt[re],ge=null;if(d!==null)ge=d.getViewport(Kt);else{let bt=u.getViewSubImage(f,Kt);ge=bt.viewport,re===0&&(t.setRenderTargetTextures(T,bt.colorTexture,f.ignoreDepthValues?void 0:bt.depthStencilTexture),t.setRenderTarget(T))}let ut=A[re];ut===void 0&&(ut=new fn,ut.layers.enable(re),ut.viewport=new Ue,A[re]=ut),ut.matrix.fromArray(Kt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(Kt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(ge.x,ge.y,ge.width,ge.height),re===0&&(S.matrix.copy(ut.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Et===!0&&S.cameras.push(ut)}let jt=s.enabledFeatures;if(jt&&jt.includes("depth-sensing")){let re=u.getDepthInformation(Xt[0]);re&&re.isValid&&re.texture&&M.init(t,re,s.renderState)}}for(let Xt=0;Xt<E.length;Xt++){let Et=b[Xt],jt=E[Xt];Et!==null&&jt!==void 0&&jt.update(Et,Ct,l||o)}Wt&&Wt(mt,Ct),Ct.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Ct}),g=null}let Ee=new td;Ee.setAnimationLoop(Zt),this.setAnimationLoop=function(mt){Wt=mt},this.dispose=function(){}}},Ms=new _i,j_=new He;function Q_(n,t){function e(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function i(x,m){m.color.getRGB(x.fogColor.value,Qf(n)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function s(x,m,T,E,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(x,m):m.isMeshToonMaterial?(r(x,m),u(x,m)):m.isMeshPhongMaterial?(r(x,m),h(x,m)):m.isMeshStandardMaterial?(r(x,m),f(x,m),m.isMeshPhysicalMaterial&&d(x,m,b)):m.isMeshMatcapMaterial?(r(x,m),g(x,m)):m.isMeshDepthMaterial?r(x,m):m.isMeshDistanceMaterial?(r(x,m),M(x,m)):m.isMeshNormalMaterial?r(x,m):m.isLineBasicMaterial?(o(x,m),m.isLineDashedMaterial&&a(x,m)):m.isPointsMaterial?c(x,m,T,E):m.isSpriteMaterial?l(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,e(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===En&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,e(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===En&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,e(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,e(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);let T=t.get(m),E=T.envMap,b=T.envMapRotation;E&&(x.envMap.value=E,Ms.copy(b),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),x.envMapRotation.value.setFromMatrix4(j_.makeRotationFromEuler(Ms)),x.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,x.aoMapTransform))}function o(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform))}function a(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function c(x,m,T,E){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*T,x.scale.value=E*.5,m.map&&(x.map.value=m.map,e(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function l(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function h(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function u(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function f(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function d(x,m,T){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===En&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=T.texture,x.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,m){m.matcap&&(x.matcap.value=m.matcap)}function M(x,m){let T=t.get(m).light;x.referencePosition.value.setFromMatrixPosition(T.matrixWorld),x.nearDistance.value=T.shadow.camera.near,x.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ty(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,E){let b=E.program;i.uniformBlockBinding(T,b)}function l(T,E){let b=s[T.id];b===void 0&&(g(T),b=h(T),s[T.id]=b,T.addEventListener("dispose",x));let G=E.program;i.updateUBOMapping(T,G);let L=t.render.frame;r[T.id]!==L&&(f(T),r[T.id]=L)}function h(T){let E=u();T.__bindingPointIndex=E;let b=n.createBuffer(),G=T.__size,L=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,G,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,b),b}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){let E=s[T.id],b=T.uniforms,G=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let L=0,D=b.length;L<D;L++){let z=Array.isArray(b[L])?b[L]:[b[L]];for(let A=0,S=z.length;A<S;A++){let k=z[A];if(d(k,L,A,G)===!0){let tt=k.__offset,H=Array.isArray(k.value)?k.value:[k.value],W=0;for(let q=0;q<H.length;q++){let Y=H[q],xt=M(Y);typeof Y=="number"||typeof Y=="boolean"?(k.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,tt+W,k.__data)):Y.isMatrix3?(k.__data[0]=Y.elements[0],k.__data[1]=Y.elements[1],k.__data[2]=Y.elements[2],k.__data[3]=0,k.__data[4]=Y.elements[3],k.__data[5]=Y.elements[4],k.__data[6]=Y.elements[5],k.__data[7]=0,k.__data[8]=Y.elements[6],k.__data[9]=Y.elements[7],k.__data[10]=Y.elements[8],k.__data[11]=0):(Y.toArray(k.__data,W),W+=xt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,tt,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(T,E,b,G){let L=T.value,D=E+"_"+b;if(G[D]===void 0)return typeof L=="number"||typeof L=="boolean"?G[D]=L:G[D]=L.clone(),!0;{let z=G[D];if(typeof L=="number"||typeof L=="boolean"){if(z!==L)return G[D]=L,!0}else if(z.equals(L)===!1)return z.copy(L),!0}return!1}function g(T){let E=T.uniforms,b=0,G=16;for(let D=0,z=E.length;D<z;D++){let A=Array.isArray(E[D])?E[D]:[E[D]];for(let S=0,k=A.length;S<k;S++){let tt=A[S],H=Array.isArray(tt.value)?tt.value:[tt.value];for(let W=0,q=H.length;W<q;W++){let Y=H[W],xt=M(Y),j=b%G,Mt=j%xt.boundary,at=j+Mt;b+=Mt,at!==0&&G-at<xt.storage&&(b+=G-at),tt.__data=new Float32Array(xt.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=b,b+=xt.storage}}}let L=b%G;return L>0&&(b+=G-L),T.__size=b,T.__cache={},this}function M(T){let E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function x(T){let E=T.target;E.removeEventListener("dispose",x);let b=o.indexOf(E.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(let T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}var fo=class{constructor(t={}){let{canvas:e=s0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),M=new Int32Array(4),x=null,m=null,T=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Le,this.toneMapping=ns,this.toneMappingExposure=1;let b=this,G=!1,L=0,D=0,z=null,A=-1,S=null,k=new Ue,tt=new Ue,H=null,W=new ae(0),q=0,Y=e.width,xt=e.height,j=1,Mt=null,at=null,Wt=new Ue(0,0,Y,xt),Zt=new Ue(0,0,Y,xt),Ee=!1,mt=new uo,Ct=!1,Xt=!1,Et=new He,jt=new He,re=new U,Kt=new Ue,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ut=!1;function bt(){return z===null?j:1}let O=i;function Yt(R,K){return e.getContext(R,K)}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${bh}`),e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",Gt,!1),e.addEventListener("webglcontextcreationerror",Ft,!1),O===null){let K="webgl2";if(O=Yt(K,R),O===null)throw Yt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let At,Ot,Dt,Qt,Vt,P,w,Q,pt,vt,B,et,Z,ht,Nt,$,ft,_t,gt,Tt,ce,oe,$t,X;function Ut(){At=new gx(O),At.init(),oe=new Z_(O,At),Ot=new hx(O,At,t,oe),Dt=new X_(O,At),Ot.reverseDepthBuffer&&f&&Dt.buffers.depth.setReversed(!0),Qt=new yx(O),Vt=new L_,P=new q_(O,At,Dt,Vt,Ot,oe,Qt),w=new fx(b),Q=new mx(b),pt=new T0(O),$t=new cx(O,pt),vt=new xx(O,pt,Qt,$t),B=new vx(O,vt,pt,Qt),gt=new Mx(O,Ot,P),$=new ux(Vt),et=new I_(b,w,Q,At,Ot,$t,$),Z=new Q_(b,Vt),ht=new U_,Nt=new H_(At),_t=new ax(b,w,Q,Dt,B,d,c),ft=new G_(b,B,Ot),X=new ty(O,Qt,Ot,Dt),Tt=new lx(O,At,Qt),ce=new _x(O,At,Qt),Qt.programs=et.programs,b.capabilities=Ot,b.extensions=At,b.properties=Vt,b.renderLists=ht,b.shadowMap=ft,b.state=Dt,b.info=Qt}Ut();let ct=new Ql(b,O);this.xr=ct,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let R=At.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=At.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(Y,xt,!1))},this.getSize=function(R){return R.set(Y,xt)},this.setSize=function(R,K,it=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=R,xt=K,e.width=Math.floor(R*j),e.height=Math.floor(K*j),it===!0&&(e.style.width=R+"px",e.style.height=K+"px"),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(Y*j,xt*j).floor()},this.setDrawingBufferSize=function(R,K,it){Y=R,xt=K,j=it,e.width=Math.floor(R*it),e.height=Math.floor(K*it),this.setViewport(0,0,R,K)},this.getCurrentViewport=function(R){return R.copy(k)},this.getViewport=function(R){return R.copy(Wt)},this.setViewport=function(R,K,it,st){R.isVector4?Wt.set(R.x,R.y,R.z,R.w):Wt.set(R,K,it,st),Dt.viewport(k.copy(Wt).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(Zt)},this.setScissor=function(R,K,it,st){R.isVector4?Zt.set(R.x,R.y,R.z,R.w):Zt.set(R,K,it,st),Dt.scissor(tt.copy(Zt).multiplyScalar(j).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(R){Dt.setScissorTest(Ee=R)},this.setOpaqueSort=function(R){Mt=R},this.setTransparentSort=function(R){at=R},this.getClearColor=function(R){return R.copy(_t.getClearColor())},this.setClearColor=function(){_t.setClearColor.apply(_t,arguments)},this.getClearAlpha=function(){return _t.getClearAlpha()},this.setClearAlpha=function(){_t.setClearAlpha.apply(_t,arguments)},this.clear=function(R=!0,K=!0,it=!0){let st=0;if(R){let J=!1;if(z!==null){let It=z.texture.format;J=It===Ph||It===Ch||It===Rh}if(J){let It=z.texture.type,Ht=It===Bi||It===Ts||It===ao||It===yr||It===Th||It===Ah,te=_t.getClearColor(),ee=_t.getClearAlpha(),fe=te.r,me=te.g,ne=te.b;Ht?(g[0]=fe,g[1]=me,g[2]=ne,g[3]=ee,O.clearBufferuiv(O.COLOR,0,g)):(M[0]=fe,M[1]=me,M[2]=ne,M[3]=ee,O.clearBufferiv(O.COLOR,0,M))}else st|=O.COLOR_BUFFER_BIT}K&&(st|=O.DEPTH_BUFFER_BIT),it&&(st|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",Ft,!1),ht.dispose(),Nt.dispose(),Vt.dispose(),w.dispose(),Q.dispose(),B.dispose(),$t.dispose(),X.dispose(),et.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Dr),ct.removeEventListener("sessionend",xn),di.stop()};function yt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Gt(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;let R=Qt.autoReset,K=ft.enabled,it=ft.autoUpdate,st=ft.needsUpdate,J=ft.type;Ut(),Qt.autoReset=R,ft.enabled=K,ft.autoUpdate=it,ft.needsUpdate=st,ft.type=J}function Ft(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function he(R){let K=R.target;K.removeEventListener("dispose",he),Be(K)}function Be(R){Ve(R),Vt.remove(R)}function Ve(R){let K=Vt.get(R).programs;K!==void 0&&(K.forEach(function(it){et.releaseProgram(it)}),R.isShaderMaterial&&et.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,it,st,J,It){K===null&&(K=ge);let Ht=J.isMesh&&J.matrixWorld.determinant()<0,te=Nr(R,K,it,st,J);Dt.setMaterial(st,Ht);let ee=it.index,fe=1;if(st.wireframe===!0){if(ee=vt.getWireframeAttribute(it),ee===void 0)return;fe=2}let me=it.drawRange,ne=it.attributes.position,be=me.start*fe,Te=(me.start+me.count)*fe;It!==null&&(be=Math.max(be,It.start*fe),Te=Math.min(Te,(It.start+It.count)*fe)),ee!==null?(be=Math.max(be,0),Te=Math.min(Te,ee.count)):ne!=null&&(be=Math.max(be,0),Te=Math.min(Te,ne.count));let Re=Te-be;if(Re<0||Re===1/0)return;$t.setup(J,st,te,it,ee);let nn,Se=Tt;if(ee!==null&&(nn=pt.get(ee),Se=ce,Se.setIndex(nn)),J.isMesh)st.wireframe===!0?(Dt.setLineWidth(st.wireframeLinewidth*bt()),Se.setMode(O.LINES)):Se.setMode(O.TRIANGLES);else if(J.isLine){let se=st.linewidth;se===void 0&&(se=1),Dt.setLineWidth(se*bt()),J.isLineSegments?Se.setMode(O.LINES):J.isLineLoop?Se.setMode(O.LINE_LOOP):Se.setMode(O.LINE_STRIP)}else J.isPoints?Se.setMode(O.POINTS):J.isSprite&&Se.setMode(O.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Se.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(At.get("WEBGL_multi_draw"))Se.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let se=J._multiDrawStarts,Pe=J._multiDrawCounts,we=J._multiDrawCount,zn=ee?pt.get(ee).bytesPerElement:1,Yi=Vt.get(st).currentProgram.getUniforms();for(let _n=0;_n<we;_n++)Yi.setValue(O,"_gl_DrawID",_n),Se.render(se[_n]/zn,Pe[_n])}else if(J.isInstancedMesh)Se.renderInstances(be,Re,J.count);else if(it.isInstancedBufferGeometry){let se=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Pe=Math.min(it.instanceCount,se);Se.renderInstances(be,Re,Pe)}else Se.render(be,Re)};function Ce(R,K,it){R.transparent===!0&&R.side===vn&&R.forceSinglePass===!1?(R.side=En,R.needsUpdate=!0,Si(R,K,it),R.side=is,R.needsUpdate=!0,Si(R,K,it),R.side=vn):Si(R,K,it)}this.compile=function(R,K,it=null){it===null&&(it=R),m=Nt.get(it),m.init(K),E.push(m),it.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),R!==it&&R.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),m.setupLights();let st=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let It=J.material;if(It)if(Array.isArray(It))for(let Ht=0;Ht<It.length;Ht++){let te=It[Ht];Ce(te,it,J),st.add(te)}else Ce(It,it,J),st.add(It)}),E.pop(),m=null,st},this.compileAsync=function(R,K,it=null){let st=this.compile(R,K,it);return new Promise(J=>{function It(){if(st.forEach(function(Ht){Vt.get(Ht).currentProgram.isReady()&&st.delete(Ht)}),st.size===0){J(R);return}setTimeout(It,10)}At.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Bn=null;function Dn(R){Bn&&Bn(R)}function Dr(){di.stop()}function xn(){di.start()}let di=new td;di.setAnimationLoop(Dn),typeof self!="undefined"&&di.setContext(self),this.setAnimationLoop=function(R){Bn=R,ct.setAnimationLoop(R),R===null?di.stop():di.start()},ct.addEventListener("sessionstart",Dr),ct.addEventListener("sessionend",xn),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(K),K=ct.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,K,z),m=Nt.get(R,E.length),m.init(K),E.push(m),jt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),mt.setFromProjectionMatrix(jt),Xt=this.localClippingEnabled,Ct=$.init(this.clippingPlanes,Xt),x=ht.get(R,T.length),x.init(),T.push(x),ct.enabled===!0&&ct.isPresenting===!0){let It=b.xr.getDepthSensingMesh();It!==null&&Vs(It,K,-1/0,b.sortObjects)}Vs(R,K,0,b.sortObjects),x.finish(),b.sortObjects===!0&&x.sort(Mt,at),ut=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,ut&&_t.addToRenderList(x,R),this.info.render.frame++,Ct===!0&&$.beginShadows();let it=m.state.shadowsArray;ft.render(it,R,K),Ct===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset();let st=x.opaque,J=x.transmissive;if(m.setupLights(),K.isArrayCamera){let It=K.cameras;if(J.length>0)for(let Ht=0,te=It.length;Ht<te;Ht++){let ee=It[Ht];Gs(st,J,R,ee)}ut&&_t.render(R);for(let Ht=0,te=It.length;Ht<te;Ht++){let ee=It[Ht];Ur(x,R,ee,ee.viewport)}}else J.length>0&&Gs(st,J,R,K),ut&&_t.render(R),Ur(x,R,K);z!==null&&(P.updateMultisampleRenderTarget(z),P.updateRenderTargetMipmap(z)),R.isScene===!0&&R.onAfterRender(b,R,K),$t.resetDefaultState(),A=-1,S=null,E.pop(),E.length>0?(m=E[E.length-1],Ct===!0&&$.setGlobalState(b.clippingPlanes,m.state.camera)):m=null,T.pop(),T.length>0?x=T[T.length-1]:x=null};function Vs(R,K,it,st){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)it=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||mt.intersectsSprite(R)){st&&Kt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(jt);let Ht=B.update(R),te=R.material;te.visible&&x.push(R,Ht,te,it,Kt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||mt.intersectsObject(R))){let Ht=B.update(R),te=R.material;if(st&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Kt.copy(R.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),Kt.copy(Ht.boundingSphere.center)),Kt.applyMatrix4(R.matrixWorld).applyMatrix4(jt)),Array.isArray(te)){let ee=Ht.groups;for(let fe=0,me=ee.length;fe<me;fe++){let ne=ee[fe],be=te[ne.materialIndex];be&&be.visible&&x.push(R,Ht,be,it,Kt.z,ne)}}else te.visible&&x.push(R,Ht,te,it,Kt.z,null)}}let It=R.children;for(let Ht=0,te=It.length;Ht<te;Ht++)Vs(It[Ht],K,it,st)}function Ur(R,K,it,st){let J=R.opaque,It=R.transmissive,Ht=R.transparent;m.setupLightsView(it),Ct===!0&&$.setGlobalState(b.clippingPlanes,it),st&&Dt.viewport(k.copy(st)),J.length>0&&wn(J,K,it),It.length>0&&wn(It,K,it),Ht.length>0&&wn(Ht,K,it),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function Gs(R,K,it,st){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[st.id]===void 0&&(m.state.transmissionRenderTarget[st.id]=new Hi(1,1,{generateMipmaps:!0,type:At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float")?Io:Bi,minFilter:ws,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));let It=m.state.transmissionRenderTarget[st.id],Ht=st.viewport||k;It.setSize(Ht.z,Ht.w);let te=b.getRenderTarget();b.setRenderTarget(It),b.getClearColor(W),q=b.getClearAlpha(),q<1&&b.setClearColor(16777215,.5),b.clear(),ut&&_t.render(it);let ee=b.toneMapping;b.toneMapping=ns;let fe=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),m.setupLightsView(st),Ct===!0&&$.setGlobalState(b.clippingPlanes,st),wn(R,it,st),P.updateMultisampleRenderTarget(It),P.updateRenderTargetMipmap(It),At.has("WEBGL_multisampled_render_to_texture")===!1){let me=!1;for(let ne=0,be=K.length;ne<be;ne++){let Te=K[ne],Re=Te.object,nn=Te.geometry,Se=Te.material,se=Te.group;if(Se.side===vn&&Re.layers.test(st.layers)){let Pe=Se.side;Se.side=En,Se.needsUpdate=!0,Xi(Re,it,st,nn,Se,se),Se.side=Pe,Se.needsUpdate=!0,me=!0}}me===!0&&(P.updateMultisampleRenderTarget(It),P.updateRenderTargetMipmap(It))}b.setRenderTarget(te),b.setClearColor(W,q),fe!==void 0&&(st.viewport=fe),b.toneMapping=ee}function wn(R,K,it){let st=K.isScene===!0?K.overrideMaterial:null;for(let J=0,It=R.length;J<It;J++){let Ht=R[J],te=Ht.object,ee=Ht.geometry,fe=st===null?Ht.material:st,me=Ht.group;te.layers.test(it.layers)&&Xi(te,K,it,ee,fe,me)}}function Xi(R,K,it,st,J,It){R.onBeforeRender(b,K,it,st,J,It),R.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(b,K,it,st,R,It),J.transparent===!0&&J.side===vn&&J.forceSinglePass===!1?(J.side=En,J.needsUpdate=!0,b.renderBufferDirect(it,K,st,J,R,It),J.side=is,J.needsUpdate=!0,b.renderBufferDirect(it,K,st,J,R,It),J.side=vn):b.renderBufferDirect(it,K,st,J,R,It),R.onAfterRender(b,K,it,st,J,It)}function Si(R,K,it){K.isScene!==!0&&(K=ge);let st=Vt.get(R),J=m.state.lights,It=m.state.shadowsArray,Ht=J.state.version,te=et.getParameters(R,J.state,It,K,it),ee=et.getProgramCacheKey(te),fe=st.programs;st.environment=R.isMeshStandardMaterial?K.environment:null,st.fog=K.fog,st.envMap=(R.isMeshStandardMaterial?Q:w).get(R.envMap||st.environment),st.envMapRotation=st.environment!==null&&R.envMap===null?K.environmentRotation:R.envMapRotation,fe===void 0&&(R.addEventListener("dispose",he),fe=new Map,st.programs=fe);let me=fe.get(ee);if(me!==void 0){if(st.currentProgram===me&&st.lightsStateVersion===Ht)return Tn(R,te),me}else te.uniforms=et.getUniforms(R),R.onBeforeCompile(te,b),me=et.acquireProgram(te,ee),fe.set(ee,me),st.uniforms=te.uniforms;let ne=st.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ne.clippingPlanes=$.uniform),Tn(R,te),st.needsLights=fs(R),st.lightsStateVersion=Ht,st.needsLights&&(ne.ambientLightColor.value=J.state.ambient,ne.lightProbe.value=J.state.probe,ne.directionalLights.value=J.state.directional,ne.directionalLightShadows.value=J.state.directionalShadow,ne.spotLights.value=J.state.spot,ne.spotLightShadows.value=J.state.spotShadow,ne.rectAreaLights.value=J.state.rectArea,ne.ltc_1.value=J.state.rectAreaLTC1,ne.ltc_2.value=J.state.rectAreaLTC2,ne.pointLights.value=J.state.point,ne.pointLightShadows.value=J.state.pointShadow,ne.hemisphereLights.value=J.state.hemi,ne.directionalShadowMap.value=J.state.directionalShadowMap,ne.directionalShadowMatrix.value=J.state.directionalShadowMatrix,ne.spotShadowMap.value=J.state.spotShadowMap,ne.spotLightMatrix.value=J.state.spotLightMatrix,ne.spotLightMap.value=J.state.spotLightMap,ne.pointShadowMap.value=J.state.pointShadowMap,ne.pointShadowMatrix.value=J.state.pointShadowMatrix),st.currentProgram=me,st.uniformsList=null,me}function us(R){if(R.uniformsList===null){let K=R.currentProgram.getUniforms();R.uniformsList=mr.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function Tn(R,K){let it=Vt.get(R);it.outputColorSpace=K.outputColorSpace,it.batching=K.batching,it.batchingColor=K.batchingColor,it.instancing=K.instancing,it.instancingColor=K.instancingColor,it.instancingMorph=K.instancingMorph,it.skinning=K.skinning,it.morphTargets=K.morphTargets,it.morphNormals=K.morphNormals,it.morphColors=K.morphColors,it.morphTargetsCount=K.morphTargetsCount,it.numClippingPlanes=K.numClippingPlanes,it.numIntersection=K.numClipIntersection,it.vertexAlphas=K.vertexAlphas,it.vertexTangents=K.vertexTangents,it.toneMapping=K.toneMapping}function Nr(R,K,it,st,J){K.isScene!==!0&&(K=ge),P.resetTextureUnits();let It=K.fog,Ht=st.isMeshStandardMaterial?K.environment:null,te=z===null?b.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:wr,ee=(st.isMeshStandardMaterial?Q:w).get(st.envMap||Ht),fe=st.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,me=!!it.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),ne=!!it.morphAttributes.position,be=!!it.morphAttributes.normal,Te=!!it.morphAttributes.color,Re=ns;st.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Re=b.toneMapping);let nn=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,Se=nn!==void 0?nn.length:0,se=Vt.get(st),Pe=m.state.lights;if(Ct===!0&&(Xt===!0||R!==S)){let Qe=R===S&&st.id===A;$.setState(st,R,Qe)}let we=!1;st.version===se.__version?(se.needsLights&&se.lightsStateVersion!==Pe.state.version||se.outputColorSpace!==te||J.isBatchedMesh&&se.batching===!1||!J.isBatchedMesh&&se.batching===!0||J.isBatchedMesh&&se.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&se.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&se.instancing===!1||!J.isInstancedMesh&&se.instancing===!0||J.isSkinnedMesh&&se.skinning===!1||!J.isSkinnedMesh&&se.skinning===!0||J.isInstancedMesh&&se.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&se.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&se.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&se.instancingMorph===!1&&J.morphTexture!==null||se.envMap!==ee||st.fog===!0&&se.fog!==It||se.numClippingPlanes!==void 0&&(se.numClippingPlanes!==$.numPlanes||se.numIntersection!==$.numIntersection)||se.vertexAlphas!==fe||se.vertexTangents!==me||se.morphTargets!==ne||se.morphNormals!==be||se.morphColors!==Te||se.toneMapping!==Re||se.morphTargetsCount!==Se)&&(we=!0):(we=!0,se.__version=st.version);let zn=se.currentProgram;we===!0&&(zn=Si(st,K,J));let Yi=!1,_n=!1,Yn=!1,Me=zn.getUniforms(),Hn=se.uniforms;if(Dt.useProgram(zn.program)&&(Yi=!0,_n=!0,Yn=!0),st.id!==A&&(A=st.id,_n=!0),Yi||S!==R){Dt.buffers.depth.getReversed()?(Et.copy(R.projectionMatrix),o0(Et),a0(Et),Me.setValue(O,"projectionMatrix",Et)):Me.setValue(O,"projectionMatrix",R.projectionMatrix),Me.setValue(O,"viewMatrix",R.matrixWorldInverse);let Qn=Me.map.cameraPosition;Qn!==void 0&&Qn.setValue(O,re.setFromMatrixPosition(R.matrixWorld)),Ot.logarithmicDepthBuffer&&Me.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Me.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,_n=!0,Yn=!0)}if(J.isSkinnedMesh){Me.setOptional(O,J,"bindMatrix"),Me.setOptional(O,J,"bindMatrixInverse");let Qe=J.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),Me.setValue(O,"boneTexture",Qe.boneTexture,P))}J.isBatchedMesh&&(Me.setOptional(O,J,"batchingTexture"),Me.setValue(O,"batchingTexture",J._matricesTexture,P),Me.setOptional(O,J,"batchingIdTexture"),Me.setValue(O,"batchingIdTexture",J._indirectTexture,P),Me.setOptional(O,J,"batchingColorTexture"),J._colorsTexture!==null&&Me.setValue(O,"batchingColorTexture",J._colorsTexture,P));let kn=it.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&gt.update(J,it,zn),(_n||se.receiveShadow!==J.receiveShadow)&&(se.receiveShadow=J.receiveShadow,Me.setValue(O,"receiveShadow",J.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Hn.envMap.value=ee,Hn.flipEnvMap.value=ee.isCubeTexture&&ee.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&K.environment!==null&&(Hn.envMapIntensity.value=K.environmentIntensity),_n&&(Me.setValue(O,"toneMappingExposure",b.toneMappingExposure),se.needsLights&&pi(Hn,Yn),It&&st.fog===!0&&Z.refreshFogUniforms(Hn,It),Z.refreshMaterialUniforms(Hn,st,j,xt,m.state.transmissionRenderTarget[R.id]),mr.upload(O,us(se),Hn,P)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(mr.upload(O,us(se),Hn,P),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Me.setValue(O,"center",J.center),Me.setValue(O,"modelViewMatrix",J.modelViewMatrix),Me.setValue(O,"normalMatrix",J.normalMatrix),Me.setValue(O,"modelMatrix",J.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){let Qe=st.uniformsGroups;for(let Qn=0,ti=Qe.length;Qn<ti;Qn++){let Bo=Qe[Qn];X.update(Bo,zn),X.bind(Bo,zn)}}return zn}function pi(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function fs(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(R,K,it){Vt.get(R.texture).__webglTexture=K,Vt.get(R.depthTexture).__webglTexture=it;let st=Vt.get(R);st.__hasExternalTextures=!0,st.__autoAllocateDepthBuffer=it===void 0,st.__autoAllocateDepthBuffer||At.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,K){let it=Vt.get(R);it.__webglFramebuffer=K,it.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(R,K=0,it=0){z=R,L=K,D=it;let st=!0,J=null,It=!1,Ht=!1;if(R){let ee=Vt.get(R);if(ee.__useDefaultFramebuffer!==void 0)Dt.bindFramebuffer(O.FRAMEBUFFER,null),st=!1;else if(ee.__webglFramebuffer===void 0)P.setupRenderTarget(R);else if(ee.__hasExternalTextures)P.rebindTextures(R,Vt.get(R.texture).__webglTexture,Vt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ne=R.depthTexture;if(ee.__boundDepthTexture!==ne){if(ne!==null&&Vt.has(ne)&&(R.width!==ne.image.width||R.height!==ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(R)}}let fe=R.texture;(fe.isData3DTexture||fe.isDataArrayTexture||fe.isCompressedArrayTexture)&&(Ht=!0);let me=Vt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(me[K])?J=me[K][it]:J=me[K],It=!0):R.samples>0&&P.useMultisampledRTT(R)===!1?J=Vt.get(R).__webglMultisampledFramebuffer:Array.isArray(me)?J=me[it]:J=me,k.copy(R.viewport),tt.copy(R.scissor),H=R.scissorTest}else k.copy(Wt).multiplyScalar(j).floor(),tt.copy(Zt).multiplyScalar(j).floor(),H=Ee;if(Dt.bindFramebuffer(O.FRAMEBUFFER,J)&&st&&Dt.drawBuffers(R,J),Dt.viewport(k),Dt.scissor(tt),Dt.setScissorTest(H),It){let ee=Vt.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+K,ee.__webglTexture,it)}else if(Ht){let ee=Vt.get(R.texture),fe=K||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,ee.__webglTexture,it||0,fe)}A=-1},this.readRenderTargetPixels=function(R,K,it,st,J,It,Ht){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let te=Vt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ht!==void 0&&(te=te[Ht]),te){Dt.bindFramebuffer(O.FRAMEBUFFER,te);try{let ee=R.texture,fe=ee.format,me=ee.type;if(!Ot.textureFormatReadable(fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-st&&it>=0&&it<=R.height-J&&O.readPixels(K,it,st,J,oe.convert(fe),oe.convert(me),It)}finally{let ee=z!==null?Vt.get(z).__webglFramebuffer:null;Dt.bindFramebuffer(O.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(R,K,it,st,J,It,Ht){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let te=Vt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ht!==void 0&&(te=te[Ht]),te){let ee=R.texture,fe=ee.format,me=ee.type;if(!Ot.textureFormatReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=R.width-st&&it>=0&&it<=R.height-J){Dt.bindFramebuffer(O.FRAMEBUFFER,te);let ne=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ne),O.bufferData(O.PIXEL_PACK_BUFFER,It.byteLength,O.STREAM_READ),O.readPixels(K,it,st,J,oe.convert(fe),oe.convert(me),0);let be=z!==null?Vt.get(z).__webglFramebuffer:null;Dt.bindFramebuffer(O.FRAMEBUFFER,be);let Te=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await r0(O,Te,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ne),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,It),O.deleteBuffer(ne),O.deleteSync(Te),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,K=null,it=0){R.isTexture!==!0&&(jr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,R=arguments[1]);let st=Math.pow(2,-it),J=Math.floor(R.image.width*st),It=Math.floor(R.image.height*st),Ht=K!==null?K.x:0,te=K!==null?K.y:0;P.setTexture2D(R,0),O.copyTexSubImage2D(O.TEXTURE_2D,it,0,0,Ht,te,J,It),Dt.unbindTexture()},this.copyTextureToTexture=function(R,K,it=null,st=null,J=0){R.isTexture!==!0&&(jr("WebGLRenderer: copyTextureToTexture function signature has changed."),st=arguments[0]||null,R=arguments[1],K=arguments[2],J=arguments[3]||0,it=null);let It,Ht,te,ee,fe,me,ne,be,Te,Re=R.isCompressedTexture?R.mipmaps[J]:R.image;it!==null?(It=it.max.x-it.min.x,Ht=it.max.y-it.min.y,te=it.isBox3?it.max.z-it.min.z:1,ee=it.min.x,fe=it.min.y,me=it.isBox3?it.min.z:0):(It=Re.width,Ht=Re.height,te=Re.depth||1,ee=0,fe=0,me=0),st!==null?(ne=st.x,be=st.y,Te=st.z):(ne=0,be=0,Te=0);let nn=oe.convert(K.format),Se=oe.convert(K.type),se;K.isData3DTexture?(P.setTexture3D(K,0),se=O.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(P.setTexture2DArray(K,0),se=O.TEXTURE_2D_ARRAY):(P.setTexture2D(K,0),se=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,K.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,K.unpackAlignment);let Pe=O.getParameter(O.UNPACK_ROW_LENGTH),we=O.getParameter(O.UNPACK_IMAGE_HEIGHT),zn=O.getParameter(O.UNPACK_SKIP_PIXELS),Yi=O.getParameter(O.UNPACK_SKIP_ROWS),_n=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Re.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Re.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ee),O.pixelStorei(O.UNPACK_SKIP_ROWS,fe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,me);let Yn=R.isDataArrayTexture||R.isData3DTexture,Me=K.isDataArrayTexture||K.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let Hn=Vt.get(R),kn=Vt.get(K),Qe=Vt.get(Hn.__renderTarget),Qn=Vt.get(kn.__renderTarget);Dt.bindFramebuffer(O.READ_FRAMEBUFFER,Qe.__webglFramebuffer),Dt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let ti=0;ti<te;ti++)Yn&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Vt.get(R).__webglTexture,J,me+ti),R.isDepthTexture?(Me&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Vt.get(K).__webglTexture,J,Te+ti),O.blitFramebuffer(ee,fe,It,Ht,ne,be,It,Ht,O.DEPTH_BUFFER_BIT,O.NEAREST)):Me?O.copyTexSubImage3D(se,J,ne,be,Te+ti,ee,fe,It,Ht):O.copyTexSubImage2D(se,J,ne,be,Te+ti,ee,fe,It,Ht);Dt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Me?R.isDataTexture||R.isData3DTexture?O.texSubImage3D(se,J,ne,be,Te,It,Ht,te,nn,Se,Re.data):K.isCompressedArrayTexture?O.compressedTexSubImage3D(se,J,ne,be,Te,It,Ht,te,nn,Re.data):O.texSubImage3D(se,J,ne,be,Te,It,Ht,te,nn,Se,Re):R.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,J,ne,be,It,Ht,nn,Se,Re.data):R.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,J,ne,be,Re.width,Re.height,nn,Re.data):O.texSubImage2D(O.TEXTURE_2D,J,ne,be,It,Ht,nn,Se,Re);O.pixelStorei(O.UNPACK_ROW_LENGTH,Pe),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,we),O.pixelStorei(O.UNPACK_SKIP_PIXELS,zn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Yi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,_n),J===0&&K.generateMipmaps&&O.generateMipmap(se),Dt.unbindTexture()},this.copyTextureToTexture3D=function(R,K,it=null,st=null,J=0){return R.isTexture!==!0&&(jr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),it=arguments[0]||null,st=arguments[1]||null,R=arguments[2],K=arguments[3],J=arguments[4]||0),jr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,K,it,st,J)},this.initRenderTarget=function(R){Vt.get(R).__webglFramebuffer===void 0&&P.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),Dt.unbindTexture()},this.resetState=function(){L=0,D=0,z=null,Dt.reset(),$t.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ae._getUnpackColorSpace()}};var Ua=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new ae(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},po=class extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Na=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Fl,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},An=new U,mo=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)An.fromBufferAttribute(this,e),An.applyMatrix4(t),this.setXYZ(e,An.x,An.y,An.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)An.fromBufferAttribute(this,e),An.applyNormalMatrix(t),this.setXYZ(e,An.x,An.y,An.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)An.fromBufferAttribute(this,e),An.transformDirection(t),this.setXYZ(e,An.x,An.y,An.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=oi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ie(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=oi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=oi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=oi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=oi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ie(e,this.array),i=Ie(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ie(e,this.array),i=Ie(i,this.array),s=Ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ie(e,this.array),i=Ie(i,this.array),s=Ie(s,this.array),r=Ie(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new gn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Vi=class extends ki{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},or,Zr=new U,ar=new U,cr=new U,lr=new wt,Kr=new wt,rd=new He,la=new U,Jr=new U,ha=new U,vf=new wt,Yc=new wt,Ef=new wt,rs=class extends We{constructor(t=new Vi){if(super(),this.isSprite=!0,this.type="Sprite",or===void 0){or=new Fe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Na(e,5);or.setIndex([0,1,2,0,2,3]),or.setAttribute("position",new mo(i,3,0,!1)),or.setAttribute("uv",new mo(i,2,3,!1))}this.geometry=or,this.material=t,this.center=new wt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ar.setFromMatrixScale(this.matrixWorld),rd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),cr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ar.multiplyScalar(-cr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;ua(la.set(-.5,-.5,0),cr,o,ar,s,r),ua(Jr.set(.5,-.5,0),cr,o,ar,s,r),ua(ha.set(.5,.5,0),cr,o,ar,s,r),vf.set(0,0),Yc.set(1,0),Ef.set(1,1);let a=t.ray.intersectTriangle(la,Jr,ha,!1,Zr);if(a===null&&(ua(Jr.set(-.5,.5,0),cr,o,ar,s,r),Yc.set(0,1),a=t.ray.intersectTriangle(la,ha,Jr,!1,Zr),a===null))return;let c=t.ray.origin.distanceTo(Zr);c<t.near||c>t.far||e.push({distance:c,point:Zr.clone(),uv:ts.getInterpolation(Zr,la,Jr,ha,vf,Yc,Ef,new wt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ua(n,t,e,i,s,r){lr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Kr.x=r*lr.x-s*lr.y,Kr.y=s*lr.x+r*lr.y):Kr.copy(lr),n.copy(t),n.x+=Kr.x,n.y+=Kr.y,n.applyMatrix4(rd)}var os=class extends ki{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},bf=new He,th=new Rs,fa=new vr,da=new U,Cs=class extends We{constructor(t=new Fe,e=new os){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fa.copy(i.boundingSphere),fa.applyMatrix4(s),fa.radius+=r,t.ray.intersectsSphere(fa)===!1)return;bf.copy(s).invert(),th.copy(t.ray).applyMatrix4(bf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,M=d;g<M;g++){let x=l.getX(g);da.fromBufferAttribute(u,x),Sf(da,x,c,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,M=d;g<M;g++)da.fromBufferAttribute(u,g),Sf(da,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Sf(n,t,e,i,s,r,o){let a=th.distanceSqToPoint(n);if(a<e){let c=new U;th.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var dn=class extends bn{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Jn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new wt:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new U,s=[],r=[],o=[],a=new U,c=new He;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(un(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(un(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},go=class extends Jn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new wt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},eh=class extends go{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Dh(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var pa=new U,qc=new Dh,Zc=new Dh,Kc=new Dh,xo=class extends Jn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new U){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(pa.subVectors(s[0],s[1]).add(s[0]),l=pa);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(pa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=pa),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),d),M=Math.pow(u.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d);M<1e-4&&(M=1),g<1e-4&&(g=M),x<1e-4&&(x=M),qc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,M,x),Zc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,M,x),Kc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,M,x)}else this.curveType==="catmullrom"&&(qc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Zc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Kc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return i.set(qc.calc(c),Zc.calc(c),Kc.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function wf(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function ey(n,t){let e=1-n;return e*e*t}function ny(n,t){return 2*(1-n)*n*t}function iy(n,t){return n*n*t}function io(n,t,e,i){return ey(n,t)+ny(n,e)+iy(n,i)}function sy(n,t){let e=1-n;return e*e*e*t}function ry(n,t){let e=1-n;return 3*e*e*n*t}function oy(n,t){return 3*(1-n)*n*n*t}function ay(n,t){return n*n*n*t}function so(n,t,e,i,s){return sy(n,t)+ry(n,e)+oy(n,i)+ay(n,s)}var Oa=class extends Jn{constructor(t=new wt,e=new wt,i=new wt,s=new wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new wt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(so(t,s.x,r.x,o.x,a.x),so(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},nh=class extends Jn{constructor(t=new U,e=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new U){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(so(t,s.x,r.x,o.x,a.x),so(t,s.y,r.y,o.y,a.y),so(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fa=class extends Jn{constructor(t=new wt,e=new wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new wt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new wt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ih=class extends Jn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ba=class extends Jn{constructor(t=new wt,e=new wt,i=new wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new wt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(io(t,s.x,r.x,o.x),io(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sh=class extends Jn{constructor(t=new U,e=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new U){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(io(t,s.x,r.x,o.x),io(t,s.y,r.y,o.y),io(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},za=class extends Jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new wt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(wf(a,c.x,l.x,h.x,u.x),wf(a,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new wt().fromArray(s))}return this}},rh=Object.freeze({__proto__:null,ArcCurve:eh,CatmullRomCurve3:xo,CubicBezierCurve:Oa,CubicBezierCurve3:nh,EllipseCurve:go,LineCurve:Fa,LineCurve3:ih,QuadraticBezierCurve:Ba,QuadraticBezierCurve3:sh,SplineCurve:za}),oh=class extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rh[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new rh[s.type]().fromJSON(s))}return this}},Ha=class extends oh{constructor(t){super(),this.type="Path",this.currentPoint=new wt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Fa(this.currentPoint.clone(),new wt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Ba(this.currentPoint.clone(),new wt(t,e),new wt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Oa(this.currentPoint.clone(),new wt(t,e),new wt(i,s),new wt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new za(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,r,o,a,c),this}absellipse(t,e,i,s,r,o,a,c){let l=new go(t,e,i,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var ka=class n extends Fe{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new U,h=new wt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=i+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(a,3)),this.setAttribute("uv",new pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Xe=class n extends Fe{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,M=[],x=i/2,m=0;T(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new pe(u,3)),this.setAttribute("normal",new pe(f,3)),this.setAttribute("uv",new pe(d,2));function T(){let b=new U,G=new U,L=0,D=(e-t)/i;for(let z=0;z<=r;z++){let A=[],S=z/r,k=S*(e-t)+t;for(let tt=0;tt<=s;tt++){let H=tt/s,W=H*c+a,q=Math.sin(W),Y=Math.cos(W);G.x=k*q,G.y=-S*i+x,G.z=k*Y,u.push(G.x,G.y,G.z),b.set(q,D,Y).normalize(),f.push(b.x,b.y,b.z),d.push(H,1-S),A.push(g++)}M.push(A)}for(let z=0;z<s;z++)for(let A=0;A<r;A++){let S=M[A][z],k=M[A+1][z],tt=M[A+1][z+1],H=M[A][z+1];(t>0||A!==0)&&(h.push(S,k,H),L+=3),(e>0||A!==r-1)&&(h.push(k,tt,H),L+=3)}l.addGroup(m,L,0),m+=L}function E(b){let G=g,L=new wt,D=new U,z=0,A=b===!0?t:e,S=b===!0?1:-1;for(let tt=1;tt<=s;tt++)u.push(0,x*S,0),f.push(0,S,0),d.push(.5,.5),g++;let k=g;for(let tt=0;tt<=s;tt++){let W=tt/s*c+a,q=Math.cos(W),Y=Math.sin(W);D.x=A*Y,D.y=x*S,D.z=A*q,u.push(D.x,D.y,D.z),f.push(0,S,0),L.x=q*.5+.5,L.y=Y*.5*S+.5,d.push(L.x,L.y),g++}for(let tt=0;tt<s;tt++){let H=G+tt,W=k+tt;b===!0?h.push(W,W+1,H):h.push(W+1,W,H),z+=3}l.addGroup(m,z,b===!0?1:2),m+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},_o=class n extends Xe{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ah=class n extends Fe{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new pe(r,3)),this.setAttribute("normal",new pe(r.slice(),3)),this.setAttribute("uv",new pe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(T){let E=new U,b=new U,G=new U;for(let L=0;L<e.length;L+=3)d(e[L+0],E),d(e[L+1],b),d(e[L+2],G),c(E,b,G,T)}function c(T,E,b,G){let L=G+1,D=[];for(let z=0;z<=L;z++){D[z]=[];let A=T.clone().lerp(b,z/L),S=E.clone().lerp(b,z/L),k=L-z;for(let tt=0;tt<=k;tt++)tt===0&&z===L?D[z][tt]=A:D[z][tt]=A.clone().lerp(S,tt/k)}for(let z=0;z<L;z++)for(let A=0;A<2*(L-z)-1;A++){let S=Math.floor(A/2);A%2===0?(f(D[z][S+1]),f(D[z+1][S]),f(D[z][S])):(f(D[z][S+1]),f(D[z+1][S+1]),f(D[z+1][S]))}}function l(T){let E=new U;for(let b=0;b<r.length;b+=3)E.x=r[b+0],E.y=r[b+1],E.z=r[b+2],E.normalize().multiplyScalar(T),r[b+0]=E.x,r[b+1]=E.y,r[b+2]=E.z}function h(){let T=new U;for(let E=0;E<r.length;E+=3){T.x=r[E+0],T.y=r[E+1],T.z=r[E+2];let b=x(T)/2/Math.PI+.5,G=m(T)/Math.PI+.5;o.push(b,1-G)}g(),u()}function u(){for(let T=0;T<o.length;T+=6){let E=o[T+0],b=o[T+2],G=o[T+4],L=Math.max(E,b,G),D=Math.min(E,b,G);L>.9&&D<.1&&(E<.2&&(o[T+0]+=1),b<.2&&(o[T+2]+=1),G<.2&&(o[T+4]+=1))}}function f(T){r.push(T.x,T.y,T.z)}function d(T,E){let b=T*3;E.x=t[b+0],E.y=t[b+1],E.z=t[b+2]}function g(){let T=new U,E=new U,b=new U,G=new U,L=new wt,D=new wt,z=new wt;for(let A=0,S=0;A<r.length;A+=9,S+=6){T.set(r[A+0],r[A+1],r[A+2]),E.set(r[A+3],r[A+4],r[A+5]),b.set(r[A+6],r[A+7],r[A+8]),L.set(o[S+0],o[S+1]),D.set(o[S+2],o[S+3]),z.set(o[S+4],o[S+5]),G.copy(T).add(E).add(b).divideScalar(3);let k=x(G);M(L,S+0,T,k),M(D,S+2,E,k),M(z,S+4,b,k)}}function M(T,E,b,G){G<0&&T.x===1&&(o[E]=T.x-1),b.x===0&&b.z===0&&(o[E]=G/2/Math.PI+.5)}function x(T){return Math.atan2(T.z,-T.x)}function m(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var yo=class extends Ha{constructor(t){super(t),this.uuid=xi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Ha().fromJSON(s))}return this}},cy={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=od(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(i&&(r=dy(n,t,r,e)),n.length>80*e){a=l=n[0],c=h=n[1];for(let g=e;g<s;g+=e)u=n[g],f=n[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return Mo(r,o,e,a,c,d,0),o}};function od(n,t,e,i,s){let r,o;if(s===Sy(n,t,e,i)>0)for(r=t;r<e;r+=i)o=Tf(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=Tf(r,n[r],n[r+1],o);return o&&$a(o,o.next)&&(Eo(o),o=o.next),o}function Ps(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&($a(e,e.next)||Ke(e.prev,e,e.next)===0)){if(Eo(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Mo(n,t,e,i,s,r,o){if(!n)return;!o&&r&&_y(n,i,s,r);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?hy(n,i,s,r):ly(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),Eo(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=uy(Ps(n),t,e),Mo(n,t,e,i,s,r,2)):o===2&&fy(n,t,e,i,s,r):Mo(Ps(n),t,e,i,s,r,1);break}}}function ly(n){let t=n.prev,e=n,i=n.next;if(Ke(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&ur(s,a,r,c,o,l,g.x,g.y)&&Ke(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function hy(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Ke(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,M=a>c?a>l?a:l:c>l?c:l,x=h>u?h>f?h:f:u>f?u:f,m=ch(d,g,t,e,i),T=ch(M,x,t,e,i),E=n.prevZ,b=n.nextZ;for(;E&&E.z>=m&&b&&b.z<=T;){if(E.x>=d&&E.x<=M&&E.y>=g&&E.y<=x&&E!==s&&E!==o&&ur(a,h,c,u,l,f,E.x,E.y)&&Ke(E.prev,E,E.next)>=0||(E=E.prevZ,b.x>=d&&b.x<=M&&b.y>=g&&b.y<=x&&b!==s&&b!==o&&ur(a,h,c,u,l,f,b.x,b.y)&&Ke(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;E&&E.z>=m;){if(E.x>=d&&E.x<=M&&E.y>=g&&E.y<=x&&E!==s&&E!==o&&ur(a,h,c,u,l,f,E.x,E.y)&&Ke(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;b&&b.z<=T;){if(b.x>=d&&b.x<=M&&b.y>=g&&b.y<=x&&b!==s&&b!==o&&ur(a,h,c,u,l,f,b.x,b.y)&&Ke(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function uy(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!$a(s,r)&&ad(s,i,i.next,r)&&vo(s,r)&&vo(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Eo(i),Eo(i.next),i=n=r),i=i.next}while(i!==n);return Ps(i)}function fy(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&vy(o,a)){let c=cd(o,a);o=Ps(o,o.next),c=Ps(c,c.next),Mo(o,t,e,i,s,r,0),Mo(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function dy(n,t,e,i){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=od(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(My(l));for(s.sort(py),r=0;r<s.length;r++)e=my(s[r],e);return e}function py(n,t){return n.x-t.x}function my(n,t){let e=gy(n,t);if(!e)return t;let i=cd(e,n);return Ps(i,i.next),Ps(e,e.next)}function gy(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&ur(o<l?r:i,o,c,l,o<l?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),vo(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&xy(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function xy(n,t){return Ke(n.prev,n,t.prev)<0&&Ke(t.next,n,n.next)<0}function _y(n,t,e,i){let s=n;do s.z===0&&(s.z=ch(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,yy(s)}function yy(n){let t,e,i,s,r,o,a,c,l=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,l*=2}while(o>1);return n}function ch(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function My(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function ur(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function vy(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Ey(n,t)&&(vo(n,t)&&vo(t,n)&&by(n,t)&&(Ke(n.prev,n,t.prev)||Ke(n,t.prev,t))||$a(n,t)&&Ke(n.prev,n,n.next)>0&&Ke(t.prev,t,t.next)>0)}function Ke(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function $a(n,t){return n.x===t.x&&n.y===t.y}function ad(n,t,e,i){let s=ga(Ke(n,t,e)),r=ga(Ke(n,t,i)),o=ga(Ke(e,i,n)),a=ga(Ke(e,i,t));return!!(s!==r&&o!==a||s===0&&ma(n,e,t)||r===0&&ma(n,i,t)||o===0&&ma(e,n,i)||a===0&&ma(e,t,i))}function ma(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ga(n){return n>0?1:n<0?-1:0}function Ey(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&ad(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function vo(n,t){return Ke(n.prev,n,n.next)<0?Ke(n,t,n.next)>=0&&Ke(n,n.prev,t)>=0:Ke(n,t,n.prev)<0||Ke(n,n.next,t)<0}function by(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function cd(n,t){let e=new lh(n.i,n.x,n.y),i=new lh(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Tf(n,t,e,i){let s=new lh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Eo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function lh(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Sy(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var ro=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Af(t),Rf(i,t);let o=t.length;e.forEach(Af);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Rf(i,e[c]);let a=cy.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Af(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Rf(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Va=class n extends Fe{constructor(t=new yo([new wt(.5,.5),new wt(-.5,.5),new wt(-.5,-.5),new wt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new pe(s,3)),this.setAttribute("uv",new pe(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:wy,E,b=!1,G,L,D,z;m&&(E=m.getSpacedPoints(h),b=!0,f=!1,G=m.computeFrenetFrames(h,!1),L=new U,D=new U,z=new U),f||(x=0,d=0,g=0,M=0);let A=a.extractPoints(l),S=A.shape,k=A.holes;if(!ro.isClockWise(S)){S=S.reverse();for(let ut=0,bt=k.length;ut<bt;ut++){let O=k[ut];ro.isClockWise(O)&&(k[ut]=O.reverse())}}let H=ro.triangulateShape(S,k),W=S;for(let ut=0,bt=k.length;ut<bt;ut++){let O=k[ut];S=S.concat(O)}function q(ut,bt,O){return bt||console.error("THREE.ExtrudeGeometry: vec does not exist"),ut.clone().addScaledVector(bt,O)}let Y=S.length,xt=H.length;function j(ut,bt,O){let Yt,At,Ot,Dt=ut.x-bt.x,Qt=ut.y-bt.y,Vt=O.x-ut.x,P=O.y-ut.y,w=Dt*Dt+Qt*Qt,Q=Dt*P-Qt*Vt;if(Math.abs(Q)>Number.EPSILON){let pt=Math.sqrt(w),vt=Math.sqrt(Vt*Vt+P*P),B=bt.x-Qt/pt,et=bt.y+Dt/pt,Z=O.x-P/vt,ht=O.y+Vt/vt,Nt=((Z-B)*P-(ht-et)*Vt)/(Dt*P-Qt*Vt);Yt=B+Dt*Nt-ut.x,At=et+Qt*Nt-ut.y;let $=Yt*Yt+At*At;if($<=2)return new wt(Yt,At);Ot=Math.sqrt($/2)}else{let pt=!1;Dt>Number.EPSILON?Vt>Number.EPSILON&&(pt=!0):Dt<-Number.EPSILON?Vt<-Number.EPSILON&&(pt=!0):Math.sign(Qt)===Math.sign(P)&&(pt=!0),pt?(Yt=-Qt,At=Dt,Ot=Math.sqrt(w)):(Yt=Dt,At=Qt,Ot=Math.sqrt(w/2))}return new wt(Yt/Ot,At/Ot)}let Mt=[];for(let ut=0,bt=W.length,O=bt-1,Yt=ut+1;ut<bt;ut++,O++,Yt++)O===bt&&(O=0),Yt===bt&&(Yt=0),Mt[ut]=j(W[ut],W[O],W[Yt]);let at=[],Wt,Zt=Mt.concat();for(let ut=0,bt=k.length;ut<bt;ut++){let O=k[ut];Wt=[];for(let Yt=0,At=O.length,Ot=At-1,Dt=Yt+1;Yt<At;Yt++,Ot++,Dt++)Ot===At&&(Ot=0),Dt===At&&(Dt=0),Wt[Yt]=j(O[Yt],O[Ot],O[Dt]);at.push(Wt),Zt=Zt.concat(Wt)}for(let ut=0;ut<x;ut++){let bt=ut/x,O=d*Math.cos(bt*Math.PI/2),Yt=g*Math.sin(bt*Math.PI/2)+M;for(let At=0,Ot=W.length;At<Ot;At++){let Dt=q(W[At],Mt[At],Yt);Et(Dt.x,Dt.y,-O)}for(let At=0,Ot=k.length;At<Ot;At++){let Dt=k[At];Wt=at[At];for(let Qt=0,Vt=Dt.length;Qt<Vt;Qt++){let P=q(Dt[Qt],Wt[Qt],Yt);Et(P.x,P.y,-O)}}}let Ee=g+M;for(let ut=0;ut<Y;ut++){let bt=f?q(S[ut],Zt[ut],Ee):S[ut];b?(D.copy(G.normals[0]).multiplyScalar(bt.x),L.copy(G.binormals[0]).multiplyScalar(bt.y),z.copy(E[0]).add(D).add(L),Et(z.x,z.y,z.z)):Et(bt.x,bt.y,0)}for(let ut=1;ut<=h;ut++)for(let bt=0;bt<Y;bt++){let O=f?q(S[bt],Zt[bt],Ee):S[bt];b?(D.copy(G.normals[ut]).multiplyScalar(O.x),L.copy(G.binormals[ut]).multiplyScalar(O.y),z.copy(E[ut]).add(D).add(L),Et(z.x,z.y,z.z)):Et(O.x,O.y,u/h*ut)}for(let ut=x-1;ut>=0;ut--){let bt=ut/x,O=d*Math.cos(bt*Math.PI/2),Yt=g*Math.sin(bt*Math.PI/2)+M;for(let At=0,Ot=W.length;At<Ot;At++){let Dt=q(W[At],Mt[At],Yt);Et(Dt.x,Dt.y,u+O)}for(let At=0,Ot=k.length;At<Ot;At++){let Dt=k[At];Wt=at[At];for(let Qt=0,Vt=Dt.length;Qt<Vt;Qt++){let P=q(Dt[Qt],Wt[Qt],Yt);b?Et(P.x,P.y+E[h-1].y,E[h-1].x+O):Et(P.x,P.y,u+O)}}}mt(),Ct();function mt(){let ut=s.length/3;if(f){let bt=0,O=Y*bt;for(let Yt=0;Yt<xt;Yt++){let At=H[Yt];jt(At[2]+O,At[1]+O,At[0]+O)}bt=h+x*2,O=Y*bt;for(let Yt=0;Yt<xt;Yt++){let At=H[Yt];jt(At[0]+O,At[1]+O,At[2]+O)}}else{for(let bt=0;bt<xt;bt++){let O=H[bt];jt(O[2],O[1],O[0])}for(let bt=0;bt<xt;bt++){let O=H[bt];jt(O[0]+Y*h,O[1]+Y*h,O[2]+Y*h)}}i.addGroup(ut,s.length/3-ut,0)}function Ct(){let ut=s.length/3,bt=0;Xt(W,bt),bt+=W.length;for(let O=0,Yt=k.length;O<Yt;O++){let At=k[O];Xt(At,bt),bt+=At.length}i.addGroup(ut,s.length/3-ut,1)}function Xt(ut,bt){let O=ut.length;for(;--O>=0;){let Yt=O,At=O-1;At<0&&(At=ut.length-1);for(let Ot=0,Dt=h+x*2;Ot<Dt;Ot++){let Qt=Y*Ot,Vt=Y*(Ot+1),P=bt+Yt+Qt,w=bt+At+Qt,Q=bt+At+Vt,pt=bt+Yt+Vt;re(P,w,Q,pt)}}}function Et(ut,bt,O){c.push(ut),c.push(bt),c.push(O)}function jt(ut,bt,O){Kt(ut),Kt(bt),Kt(O);let Yt=s.length/3,At=T.generateTopUV(i,s,Yt-3,Yt-2,Yt-1);ge(At[0]),ge(At[1]),ge(At[2])}function re(ut,bt,O,Yt){Kt(ut),Kt(bt),Kt(Yt),Kt(bt),Kt(O),Kt(Yt);let At=s.length/3,Ot=T.generateSideWallUV(i,s,At-6,At-3,At-2,At-1);ge(Ot[0]),ge(Ot[1]),ge(Ot[3]),ge(Ot[1]),ge(Ot[2]),ge(Ot[3])}function Kt(ut){s.push(c[ut*3+0]),s.push(c[ut*3+1]),s.push(c[ut*3+2])}function ge(ut){r.push(ut.x),r.push(ut.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Ty(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new rh[s.type]().fromJSON(s)),new n(i,t.options)}},wy={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],h=t[s*3+1];return[new wt(r,o),new wt(a,c),new wt(l,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],h=t[i*3+1],u=t[i*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],M=t[r*3],x=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new wt(o,1-c),new wt(l,1-u),new wt(f,1-g),new wt(M,1-m)]:[new wt(a,1-c),new wt(h,1-u),new wt(d,1-g),new wt(x,1-m)]}};function Ty(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ga=class n extends ah{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var bo=class n extends Fe{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,f=(e-t)/s,d=new U,g=new wt;for(let M=0;M<=s;M++){for(let x=0;x<=i;x++){let m=r+x/i*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let M=0;M<s;M++){let x=M*(i+1);for(let m=0;m<i;m++){let T=m+x,E=T,b=T+i+1,G=T+i+2,L=T+1;a.push(E,b,L),a.push(b,G,L)}}this.setIndex(a),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(l,3)),this.setAttribute("uv",new pe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var pn=class n extends Fe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new U,f=new U,d=[],g=[],M=[],x=[];for(let m=0;m<=i;m++){let T=[],E=m/i,b=0;m===0&&o===0?b=.5/e:m===i&&c===Math.PI&&(b=-.5/e);for(let G=0;G<=e;G++){let L=G/e;u.x=-t*Math.cos(s+L*r)*Math.sin(o+E*a),u.y=t*Math.cos(o+E*a),u.z=t*Math.sin(s+L*r)*Math.sin(o+E*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),M.push(f.x,f.y,f.z),x.push(L+b,1-E),T.push(l++)}h.push(T)}for(let m=0;m<i;m++)for(let T=0;T<e;T++){let E=h[m][T+1],b=h[m][T],G=h[m+1][T],L=h[m+1][T+1];(m!==0||o>0)&&d.push(E,b,L),(m!==i-1||c<Math.PI)&&d.push(b,G,L)}this.setIndex(d),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(M,3)),this.setAttribute("uv",new pe(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Is=class n extends Fe{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new U,u=new U,f=new U;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){let M=g/s*r,x=d/i*Math.PI*2;u.x=(t+e*Math.cos(x))*Math.cos(M),u.y=(t+e*Math.cos(x))*Math.sin(M),u.z=e*Math.sin(x),a.push(u.x,u.y,u.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){let M=(s+1)*d+g-1,x=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,T=(s+1)*d+g;o.push(M,x,T),o.push(x,m,T)}this.setIndex(o),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(c,3)),this.setAttribute("uv",new pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ve=class extends ki{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zf,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=Sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function xa(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Ay(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var br=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},hh=class extends br{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Su,endingEnd:Su}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case wu:r=t,a=2*e-i;break;case Tu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case wu:o=t,c=2*i-e;break;case Tu:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-e)/(s-e),M=g*g,x=M*g,m=-f*x+2*f*M-f*g,T=(1+f)*x+(-1.5-2*f)*M+(-.5+f)*g+1,E=(-1-d)*x+(1.5+d)*M+.5*g,b=d*x-d*M;for(let G=0;G!==a;++G)r[G]=m*o[h+G]+T*o[l+G]+E*o[c+G]+b*o[u+G];return r}},uh=class extends br{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(i-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},fh=class extends br{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},li=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=xa(e,this.TimeBufferType),this.values=xa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:xa(t.times,Array),values:xa(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new fh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new uh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new hh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ba:e=this.InterpolantFactoryMethodDiscrete;break;case Ol:e=this.InterpolantFactoryMethodLinear;break;case yc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ba;case this.InterpolantFactoryMethodLinear:return Ol;case this.InterpolantFactoryMethodSmooth:return yc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Ay(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===yc,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let M=e[u+g];if(M!==e[f+g]||M!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};li.prototype.TimeBufferType=Float32Array;li.prototype.ValueBufferType=Float32Array;li.prototype.DefaultInterpolation=Ol;var Ls=class extends li{constructor(t,e,i){super(t,e,i)}};Ls.prototype.ValueTypeName="bool";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=ba;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var dh=class extends li{};dh.prototype.ValueTypeName="color";var ph=class extends li{};ph.prototype.ValueTypeName="number";var mh=class extends br{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)ci.slerpFlat(r,0,o,l-a,o,l,c);return r}},Wa=class extends li{InterpolantFactoryMethodLinear(t){return new mh(this.times,this.values,this.getValueSize(),t)}};Wa.prototype.ValueTypeName="quaternion";Wa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ds=class extends li{constructor(t,e,i){super(t,e,i)}};Ds.prototype.ValueTypeName="string";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=ba;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var gh=class extends li{};gh.prototype.ValueTypeName="vector";var Cf={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},xh=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},Ry=new xh,So=class{constructor(t){this.manager=t!==void 0?t:Ry,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};So.DEFAULT_MATERIAL_NAME="__DEFAULT";var _h=class extends So{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Cf.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=lo("img");function c(){h(),Cf.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var wo=class extends So{constructor(t){super(t)}load(t,e,i,s){let r=new bn,o=new _h(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}},To=class extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ao=class extends To{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ae(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Jc=new He,Pf=new U,If=new U,Xa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uo,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Pf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pf),If.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(If),e.updateMatrixWorld(),Jc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Jc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Lf=new He,$r=new U,$c=new U,yh=class extends Xa{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new wt(4,2),this._viewportCount=6,this._viewports=[new Ue(2,1,1,1),new Ue(0,1,1,1),new Ue(3,1,1,1),new Ue(1,1,1,1),new Ue(3,0,1,1),new Ue(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),$r.setFromMatrixPosition(t.matrixWorld),i.position.copy($r),$c.copy(i.position),$c.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt($c),i.updateMatrixWorld(),s.makeTranslation(-$r.x,-$r.y,-$r.z),Lf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lf)}},Ro=class extends To{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new yh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Mh=class extends Xa{constructor(){super(new Ia(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Co=class extends To{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new Mh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Po=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Df(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Df();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Df(){return performance.now()}var Uh="\\[\\]\\.:\\/",Cy=new RegExp("["+Uh+"]","g"),Nh="[^"+Uh+"]",Py="[^"+Uh.replace("\\.","")+"]",Iy=/((?:WC+[\/:])*)/.source.replace("WC",Nh),Ly=/(WCOD+)?/.source.replace("WCOD",Py),Dy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nh),Uy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nh),Ny=new RegExp("^"+Iy+Ly+Dy+Uy+"$"),Oy=["material","materials","bones","map"],vh=class{constructor(t,e,i){let s=i||Ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ye=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Cy,"")}static parseTrackName(t){let e=Ny.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Oy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ye.Composite=vh;Ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ye.prototype.GetterByBindingType=[Ye.prototype._getValue_direct,Ye.prototype._getValue_array,Ye.prototype._getValue_arrayElement,Ye.prototype._getValue_toArray];Ye.prototype.SetterByBindingTypeAndVersioning=[[Ye.prototype._setValue_direct,Ye.prototype._setValue_direct_setNeedsUpdate,Ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_array,Ye.prototype._setValue_array_setNeedsUpdate,Ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_arrayElement,Ye.prototype._setValue_arrayElement_setNeedsUpdate,Ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_fromArray,Ye.prototype._setValue_fromArray_setNeedsUpdate,Ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var P1=new Float32Array(1);var Uf=new He,Sr=class{constructor(t,e,i=0,s=1/0){this.ray=new Rs(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new ho,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Uf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uf),this}intersectObject(t,e=!0,i=[]){return Eh(t,this,i,e),i.sort(Nf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Eh(t[s],this,i,e);return i.sort(Nf),i}};function Nf(n,t){return n.distance-t.distance}function Eh(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Eh(r[o],t,e,!0)}}var Us=class{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(un(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ya=class extends zi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bh}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bh);var ld={type:"change"},Bh={type:"start"},ud={type:"end"},ja=new Rs,hd=new ri,Fy=Math.cos(70*Jf.DEG2RAD),ln=new U,Un=2*Math.PI,Ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Fh=1e-6,Qa=class extends Ya{constructor(t,e=null){super(t,e),this.state=Ne.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ns.ROTATE,MIDDLE:Ns.DOLLY,RIGHT:Ns.PAN},this.touches={ONE:yi.ROTATE,TWO:yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new ci,this._lastTargetPosition=new U,this._quat=new ci().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Us,this._sphericalDelta=new Us,this._scale=1,this._panOffset=new U,this._rotateStart=new wt,this._rotateEnd=new wt,this._rotateDelta=new wt,this._panStart=new wt,this._panEnd=new wt,this._panDelta=new wt,this._dollyStart=new wt,this._dollyEnd=new wt,this._dollyDelta=new wt,this._dollyDirection=new U,this._mouse=new wt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zy.bind(this),this._onPointerDown=By.bind(this),this._onPointerUp=Hy.bind(this),this._onContextMenu=qy.bind(this),this._onMouseWheel=Gy.bind(this),this._onKeyDown=Wy.bind(this),this._onTouchStart=Xy.bind(this),this._onTouchMove=Yy.bind(this),this._onMouseDown=ky.bind(this),this._onMouseMove=Vy.bind(this),this._interceptControlDown=Zy.bind(this),this._interceptControlUp=Ky.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ld),this.update(),this.state=Ne.NONE}update(t=null){let e=this.object.position;ln.copy(e).sub(this.target),ln.applyQuaternion(this._quat),this._spherical.setFromVector3(ln),this.autoRotate&&this.state===Ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Un:i>Math.PI&&(i-=Un),s<-Math.PI?s+=Un:s>Math.PI&&(s-=Un),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ln.setFromSpherical(this._spherical),ln.applyQuaternion(this._quatInverse),e.copy(this.target).add(ln),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=ln.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new U(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=ln.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ja.origin.copy(this.object.position),ja.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ja.direction))<Fy?this.object.lookAt(this.target):(hd.setFromNormalAndCoplanarPoint(this.object.up,this.target),ja.intersectPlane(hd,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Fh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Fh||this._lastTargetPosition.distanceToSquared(this.target)>Fh?(this.dispatchEvent(ld),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Un/60*this.autoRotateSpeed*t:Un/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ln.setFromMatrixColumn(e,0),ln.multiplyScalar(-t),this._panOffset.add(ln)}_panUp(t,e){this.screenSpacePanning===!0?ln.setFromMatrixColumn(e,1):(ln.setFromMatrixColumn(e,0),ln.crossVectors(this.object.up,ln)),ln.multiplyScalar(t),this._panOffset.add(ln)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;ln.copy(s).sub(this.target);let r=ln.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/e.clientHeight),this._rotateUp(Un*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/e.clientHeight),this._rotateUp(Un*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new wt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function By(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function zy(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Hy(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ud),this.state=Ne.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function ky(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ns.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ne.DOLLY;break;case Ns.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ne.ROTATE}break;case Ns.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ne.PAN}break;default:this.state=Ne.NONE}this.state!==Ne.NONE&&this.dispatchEvent(Bh)}function Vy(n){switch(this.state){case Ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Gy(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ne.NONE||(n.preventDefault(),this.dispatchEvent(Bh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(ud))}function Wy(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function Xy(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case yi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Ne.TOUCH_ROTATE;break;case yi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Ne.TOUCH_PAN;break;default:this.state=Ne.NONE}break;case 2:switch(this.touches.TWO){case yi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ne.TOUCH_DOLLY_PAN;break;case yi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ne.TOUCH_DOLLY_ROTATE;break;default:this.state=Ne.NONE}break;default:this.state=Ne.NONE}this.state!==Ne.NONE&&this.dispatchEvent(Bh)}function Yy(n){switch(this._trackPointer(n),this.state){case Ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ne.NONE}}function qy(n){this.enabled!==!1&&n.preventDefault()}function Zy(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ky(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function tc(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new Fe,l=0;for(let h=0;h<n.length;++h){let u=n[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0,u=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=n[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=fd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let M=0;M<o[h].length;++M)d.push(o[h][M][f]);let g=fd(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function fd(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){let h=n[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new gn(o,e,i),c=0;for(let l=0;l<n.length;++l){let h=n[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){let M=h.getComponent(f,g);a.setComponent(f+u,g,M)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Os=16,Fs=8,Hh=6;function pd(n){return()=>(n=n*1664525+1013904223>>>0,n/4294967296)}var Jy=n=>"#"+("00000"+n.toString(16)).slice(-6);function qe(n,t){let e=Math.min(255,Math.max(0,(n>>16&255)*t)),i=Math.min(255,Math.max(0,(n>>8&255)*t)),s=Math.min(255,Math.max(0,(n&255)*t));return"rgb("+(e|0)+","+(i|0)+","+(s|0)+")"}var Jt={noise:(n,t)=>(e,i)=>{for(let s=0;s<16;s++)for(let r=0;r<16;r++)e.fillStyle=qe(n,1-t/2+i()*t),e.fillRect(s,r,1,1)},grassTop:(n,t)=>{Jt.noise(11132046,.16)(n,t);for(let e=0;e<14;e++)n.fillStyle=qe(9423992,.95+t()*.1),n.fillRect(t()*16|0,t()*16|0,1,1)},grassSide:(n,t)=>{Jt.dirt(n,t);for(let e=0;e<16;e++){let i=3+(t()*2.2|0);for(let s=0;s<i;s++)n.fillStyle=qe(11132046,.9+t()*.15),n.fillRect(e,s,1,1)}},dirt:(n,t)=>{Jt.noise(12094050,.18)(n,t);for(let e=0;e<10;e++)n.fillStyle=qe(10121296,1),n.fillRect(t()*16|0,t()*16|0,1,1)},stone:(n,t)=>{Jt.noise(11842232,.12)(n,t);for(let e=0;e<6;e++){n.fillStyle=qe(10263202,1);let i=t()*14|0,s=t()*16|0;n.fillRect(i,s,2+(t()*3|0),1)}},sand:(n,t)=>Jt.noise(15983286,.1)(n,t),pathTop:(n,t)=>{Jt.noise(15324068,.14)(n,t);for(let e=0;e<12;e++)n.fillStyle=qe(13810058,1),n.fillRect(t()*16|0,t()*16|0,1,1)},pathSide:(n,t)=>{Jt.dirt(n,t),n.fillStyle=qe(15324068,1),n.fillRect(0,0,16,2)},snowTop:(n,t)=>Jt.noise(16514047,.05)(n,t),snowSide:(n,t)=>{Jt.stone(n,t);for(let e=0;e<16;e++){let i=3+(t()*3|0);n.fillStyle=qe(16514047,.97+t()*.03),n.fillRect(e,0,1,i)}},logSide:(n,t)=>{for(let e=0;e<16;e++){let i=e%4===0?8215104:10121298;for(let s=0;s<16;s++)n.fillStyle=qe(i,.9+t()*.2),n.fillRect(e,s,1,1)}},logTop:(n,t)=>{Jt.noise(14267267,.08)(n,t),n.strokeStyle=qe(11569760,1),n.lineWidth=1,[6,3].forEach(e=>{n.strokeRect(8-e+.5,8-e+.5,e*2-1,e*2-1)}),n.strokeStyle=qe(9071180,1),n.strokeRect(.5,.5,15,15)},leaves:n=>(t,e)=>{Jt.noise(n,.22)(t,e);for(let i=0;i<22;i++)t.fillStyle=qe(n,.72),t.fillRect(e()*16|0,e()*16|0,1,1);for(let i=0;i<10;i++)t.fillStyle=qe(n,1.12),t.fillRect(e()*16|0,e()*16|0,1,1)},water:(n,t)=>{Jt.noise(6991592,.08)(n,t);for(let e=0;e<7;e++)n.fillStyle="rgba(255,255,255,0.55)",n.fillRect(t()*13|0,t()*16|0,2+(t()*3|0),1)},birch:(n,t)=>{Jt.noise(16052454,.06)(n,t);for(let e=0;e<8;e++)n.fillStyle="#5a5050",n.fillRect(t()*14|0,t()*16|0,2+(t()*2|0),1)},cobble:(n,t)=>{Jt.noise(11052718,.1)(n,t),n.fillStyle=qe(8684172,1);for(let e=0;e<16;e+=4){n.fillRect(0,e,16,1);for(let i=e/4%2*3;i<16;i+=6)n.fillRect(i,e,1,4)}},deep:(n,t)=>Jt.noise(9341592,.16)(n,t),clay:(n,t)=>{Jt.noise(12950138,.12)(n,t);for(let e=3;e<16;e+=5)n.fillStyle=qe(11765610,1),n.fillRect(0,e,16,1)},gravel:(n,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++)n.fillStyle=qe([12433068,11051414,13814720][t()*3|0],1),n.fillRect(e,i,1,1)},planks:(n,t)=>{for(let e=0;e<16;e++){let i=e%4===3;for(let s=0;s<16;s++)n.fillStyle=i?"#9a7254":qe(13936760,.92+t()*.12),n.fillRect(s,e,1,1)}for(let e=0;e<16;e+=4)n.fillStyle="#9a7254",n.fillRect(e*3%16,e,1,3)},mossy:(n,t)=>{Jt.cobble(n,t);for(let e=0;e<40;e++)n.fillStyle=qe(9423992,.9+t()*.2),n.fillRect(t()*16|0,t()*16|0,1,1)},shingle:(n,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=e>>2,r=e%4===3||(i+s*4)%8===0;n.fillStyle=qe(16777215,r?.78:.94+t()*.06),n.fillRect(i,e,1,1)}},plaster:(n,t)=>Jt.noise(16777215,.07)(n,t),plankGrey:(n,t)=>{for(let e=0;e<16;e++){let i=e%4===3;for(let s=0;s<16;s++)n.fillStyle=qe(16777215,i?.72:.9+t()*.1),n.fillRect(s,e,1,1)}},glass:(n,t)=>{n.fillStyle="#d8f1fa",n.fillRect(0,0,16,16),n.fillStyle="#ffffff",n.fillRect(3,3,1,4),n.fillRect(4,3,1,2),n.fillRect(10,9,1,3),n.fillStyle="#bcd9e6",n.fillRect(0,0,16,1),n.fillRect(0,15,16,1),n.fillRect(0,0,1,16),n.fillRect(15,0,1,16),n.fillRect(7,0,2,16),n.fillRect(0,7,16,2)},bricks:(n,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=e%4===3||(i+(e>>2)%2*4)%8===7;n.fillStyle=s?"#e9e2d6":qe(16777215,.86+t()*.08),n.fillRect(i,e,1,1)}},stoneBrick:(n,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=e%8===7||(i+(e>>3)*8)%16===15;n.fillStyle=s?"#8c8a94":qe(11973820,.9+t()*.12),n.fillRect(i,e,1,1)}},farmland:(n,t)=>{Jt.noise(8018496,.14)(n,t);for(let e=1;e<16;e+=4)n.fillStyle="#5e4430",n.fillRect(0,e,16,1)},sprucePlank:(n,t)=>{for(let e=0;e<16;e++){let i=e%4===3;for(let s=0;s<16;s++)n.fillStyle=i?"#5e4430":qe(9069640,.9+t()*.12),n.fillRect(s,e,1,1)}for(let e=0;e<16;e+=4)n.fillStyle="#5e4430",n.fillRect(e*5%16,e,1,3)},wheat:(n,t)=>{for(let e=1;e<15;e+=2){let i=9+(t()*5|0);n.fillStyle="#c9b45a",n.fillRect(e,16-i,1,i),n.fillStyle="#f2d36b",n.fillRect(e,16-i,1,4)}},carrot:(n,t)=>{for(let e=2;e<14;e+=3)n.fillStyle="#6faa5e",n.fillRect(e,7,1,6),n.fillRect(e+1,8,1,3),n.fillStyle="#f2963a",n.fillRect(e,13,2,3)},sprout:(n,t)=>{for(let e=1;e<15;e+=3)n.fillStyle="#7fc46a",n.fillRect(e+1,10,1,6),n.fillRect(e,10,3,1),n.fillRect(e+2,12,1,1)},tuft:(n,t)=>{for(let e=1;e<15;e+=2){let i=5+(t()*7|0);n.fillStyle=qe(9423992,.85+t()*.25),n.fillRect(e,16-i,1,i)}},flower:n=>(t,e)=>{t.fillStyle="#6faa5e",t.fillRect(7,8,2,8),t.fillRect(5,11,2,1),t.fillRect(9,13,2,1),t.fillStyle=Jy(n),t.fillRect(6,4,4,3),t.fillRect(5,5,6,1),t.fillStyle="#fff6b0",t.fillRect(7,5,2,1)},reed:(n,t)=>{n.fillStyle="#7cb86f";for(let e=3;e<14;e+=3)n.fillRect(e,2+(t()*4|0),1,14);n.fillStyle="#a77a52",n.fillRect(6,2,2,4)},lily:(n,t)=>{n.fillStyle="#84c784",n.beginPath(),n.arc(8,8,6.5,.3,Math.PI*2-.3),n.lineTo(8,8),n.fill(),n.fillStyle="#ffb6c1",n.fillRect(9,6,2,2)}},dt={GRASS_TOP:0,GRASS_SIDE:1,DIRT:2,STONE:3,SAND:4,PATH_TOP:5,PATH_SIDE:6,SNOW_TOP:7,SNOW_SIDE:8,LOG:9,LOG_TOP:10,LEAF_G:11,LEAF_M:12,LEAF_L:13,LEAF_P:14,WATER:15,BIRCH:16,COBBLE:17,DEEP:18,CLAY:19,GRAVEL:20,PLANKS:21,MOSSY:22,LEAF_T:23,TUFT:24,FL_PINK:25,FL_WHITE:26,FL_YELLOW:27,FL_BLUE:28,FL_LAV:29,REED:30,LILY:31,SHINGLE:32,PLASTER:33,PLANK_GREY:34,GLASS:35,BRICKS:36,STONE_BRICK:37,FARMLAND:38,SPRUCE_PLANK:39,WHEAT:40,CARROT:41,SPROUT:42},md=[Jt.grassTop,Jt.grassSide,Jt.dirt,Jt.stone,Jt.sand,Jt.pathTop,Jt.pathSide,Jt.snowTop,Jt.snowSide,Jt.logSide,Jt.logTop,Jt.leaves(8834168),Jt.leaves(8178084),Jt.leaves(11196796),Jt.leaves(16167880),Jt.water,Jt.birch,Jt.cobble,Jt.deep,Jt.clay,Jt.gravel,Jt.planks,Jt.mossy,Jt.leaves(7320465),Jt.tuft,Jt.flower(16752575),Jt.flower(16777215),Jt.flower(16769658),Jt.flower(10473471),Jt.flower(13809919),Jt.reed,Jt.lily,Jt.shingle,Jt.plaster,Jt.plankGrey,Jt.glass,Jt.bricks,Jt.stoneBrick,Jt.farmland,Jt.sprucePlank,Jt.wheat,Jt.carrot,Jt.sprout],as=null;function $y(){if(as)return as;let n=document.createElement("canvas");n.width=Os*Fs,n.height=Os*Hh;let t=n.getContext("2d");return md.forEach((e,i)=>{t.save(),t.translate(i%Fs*Os,Math.floor(i/Fs)*Os),t.beginPath(),t.rect(0,0,Os,Os),t.clip(),e(t,pd(101+i*7)),t.restore()}),as=new dn(n),as.magFilter=en,as.minFilter=en,as.generateMipmaps=!1,as.colorSpace=Le,as}var zh=new Map;function hi(n){if(zh.has(n))return zh.get(n);let t=document.createElement("canvas");t.width=t.height=Os,md[n](t.getContext("2d"),pd(101+n*7));let e=new dn(t);return e.magFilter=en,e.minFilter=en,e.generateMipmaps=!1,e.wrapS=e.wrapT=oo,e.colorSpace=Le,zh.set(n,e),e}var dd=n=>{let t=n%Fs/Fs,e=1-(Math.floor(n/Fs)+1)/Hh,i=8e-4;return[t+i,e+i,t+1/Fs-i,e+1/Hh-i]},Rt={AIR:0,GRASS:1,DIRT:2,STONE:3,SAND:4,PATH:5,SNOW:6,LOG:7,LEAF_G:8,LEAF_M:9,LEAF_L:10,LEAF_P:11,WATER:12,BIRCH:13,COBBLE:14,DEEP:15,CLAY:16,GRAVEL:17,LEAF_T:18,MOSSY:19,PLANKS:20,BRICK:21,FARM:22},$e=[];$e[Rt.GRASS]=[dt.GRASS_TOP,dt.GRASS_SIDE,dt.DIRT];$e[Rt.DIRT]=[dt.DIRT,dt.DIRT,dt.DIRT];$e[Rt.STONE]=[dt.STONE,dt.STONE,dt.STONE];$e[Rt.SAND]=[dt.SAND,dt.SAND,dt.SAND];$e[Rt.PATH]=[dt.PATH_TOP,dt.PATH_SIDE,dt.DIRT];$e[Rt.SNOW]=[dt.SNOW_TOP,dt.SNOW_SIDE,dt.STONE];$e[Rt.LOG]=[dt.LOG_TOP,dt.LOG,dt.LOG_TOP];$e[Rt.BIRCH]=[dt.LOG_TOP,dt.BIRCH,dt.LOG_TOP];$e[Rt.LEAF_G]=[dt.LEAF_G,dt.LEAF_G,dt.LEAF_G];$e[Rt.LEAF_M]=[dt.LEAF_M,dt.LEAF_M,dt.LEAF_M];$e[Rt.LEAF_L]=[dt.LEAF_L,dt.LEAF_L,dt.LEAF_L];$e[Rt.LEAF_P]=[dt.LEAF_P,dt.LEAF_P,dt.LEAF_P];$e[Rt.LEAF_T]=[dt.LEAF_T,dt.LEAF_T,dt.LEAF_T];$e[Rt.WATER]=[dt.WATER,dt.WATER,dt.WATER];$e[Rt.COBBLE]=[dt.COBBLE,dt.COBBLE,dt.COBBLE];$e[Rt.DEEP]=[dt.DEEP,dt.DEEP,dt.DEEP];$e[Rt.CLAY]=[dt.CLAY,dt.CLAY,dt.CLAY];$e[Rt.GRAVEL]=[dt.GRAVEL,dt.GRAVEL,dt.GRAVEL];$e[Rt.BRICK]=[dt.STONE_BRICK,dt.STONE_BRICK,dt.STONE_BRICK];$e[Rt.FARM]=[dt.FARMLAND,dt.DIRT,dt.DIRT];$e[Rt.MOSSY]=[dt.MOSSY,dt.MOSSY,dt.MOSSY];$e[Rt.PLANKS]=[dt.PLANKS,dt.PLANKS,dt.PLANKS];var ec=n=>n===Rt.LEAF_G||n===Rt.LEAF_M||n===Rt.LEAF_L||n===Rt.LEAF_P||n===Rt.LEAF_T,Lo=class{constructor(t,e,i,s,r,o){Object.assign(this,{x0:t,y0:e,z0:i,sx:s,sy:r,sz:o}),this.d=new Uint8Array(s*r*o),this.plants=[],this.tint=new Map}idx(t,e,i){let s=t-this.x0,r=e-this.y0,o=i-this.z0;return s<0||r<0||o<0||s>=this.sx||r>=this.sy||o>=this.sz?-1:(r*this.sz+o)*this.sx+s}get(t,e,i){let s=this.idx(t,e,i);return s<0?0:this.d[s]}set(t,e,i,s){let r=this.idx(t,e,i);r>=0&&(this.d[r]=s)}top(t,e){for(let i=this.y0+this.sy-1;i>=this.y0;i--){let s=this.get(t,i,e);if(s&&s!==Rt.WATER)return i}return null}plant(t,e,i,s,r){this.plants.push([t,e,i,s,r||1])}build(t){let e={p:[],n:[],u:[],c:[]},i={p:[],n:[],u:[],c:[]},s=[{d:[1,0,0],v:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],s:1,b:.84},{d:[-1,0,0],v:[[0,0,1],[0,1,1],[0,1,0],[0,0,0]],s:1,b:.84},{d:[0,1,0],v:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],s:0,b:1},{d:[0,-1,0],v:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],s:2,b:.62},{d:[0,0,1],v:[[1,0,1],[1,1,1],[0,1,1],[0,0,1]],s:1,b:.92},{d:[0,0,-1],v:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],s:1,b:.76}],r=t==null?.88:t;for(let f=0;f<this.sy;f++)for(let d=0;d<this.sz;d++)for(let g=0;g<this.sx;g++){let M=this.d[(f*this.sz+d)*this.sx+g];if(!M)continue;let x=this.x0+g,m=this.y0+f,T=this.z0+d,E=$e[M];if(!E)continue;let b=this.tint.get((f*this.sz+d)*this.sx+g)||1;s.forEach(G=>{let L=this.get(x+G.d[0],m+G.d[1],T+G.d[2]);if(M===Rt.WATER){if(L!==Rt.AIR)return}else if(L&&L!==Rt.WATER&&!(ec(L)&&!ec(M)))return;if(ec(M)&&ec(L))return;let D=M===Rt.WATER?i:e,[z,A,S,k]=dd(E[G.s]),tt=M===Rt.WATER&&this.get(x,m+1,T)!==Rt.WATER,H=G.v.map(([Mt,at,Wt])=>[x+Mt,m+(tt&&at===1?r:at),T+Wt]),W=G.b*b,q=W,Y=W,xt=W;if(M!==Rt.WATER&&L===Rt.WATER){let Mt=0,at=x+G.d[0],Wt=T+G.d[2];for(let Ee=m+G.d[1];this.get(at,Ee,Wt)===Rt.WATER&&Mt<6;Ee++)Mt++;let Zt=Math.max(.32,1-.2*Mt);q=W*Zt*.62,Y=W*Zt*.82,xt=W*Math.min(1,Zt*1.05)}let j=G.d[1]!==0?[[z,A],[S,A],[S,k],[z,k]]:[[z,A],[z,k],[S,k],[S,A]];[0,1,2,0,2,3].forEach(Mt=>{D.p.push(...H[Mt]),D.n.push(...G.d),D.u.push(...j[Mt]),D.c.push(q,Y,xt)})})}let o=f=>{let d=new Fe;return d.setAttribute("position",new pe(f.p,3)),d.setAttribute("normal",new pe(f.n,3)),d.setAttribute("uv",new pe(f.u,2)),d.setAttribute("color",new pe(f.c,3)),d},a=$y(),c=new Pt(o(e),new ve({map:a,vertexColors:!0}));c.castShadow=!0,c.receiveShadow=!0,c.userData.keepBatch=!0;let l=new Pt(o(i),new ve({map:a,vertexColors:!0,transparent:!0,opacity:.84,depthWrite:!1}));l.receiveShadow=!0,l.userData.keepBatch=!0,l.renderOrder=1;let h={p:[],n:[],u:[],c:[]};this.plants.forEach(([f,d,g,M,x])=>{let[m,T,E,b]=dd(M),G=.9*x,L=.45*x;[[[-L,-L],[L,L]],[[-L,L],[L,-L]]].forEach(([[D,z],[A,S]])=>{let k=[[f+D,d,g+z],[f+A,d,g+S],[f+A,d+G,g+S],[f+D,d+G,g+z]],tt=[[m,T],[E,T],[E,b],[m,b]];[0,1,2,0,2,3].forEach(H=>{h.p.push(...k[H]),h.n.push(0,1,0),h.u.push(...tt[H]),h.c.push(1,1,1)})})});let u=new Pt(o(h),new ve({map:a,vertexColors:!0,alphaTest:.5,side:vn}));return u.userData.keepBatch=!0,{solid:c,water:l,plants:u}}};function Ar(n,t,e,i,s,r){let o={oak:[Rt.LEAF_G,Rt.LEAF_L][r()*2|0],birch:Rt.LEAF_L,mint:Rt.LEAF_M,cherry:Rt.LEAF_P,pine:Rt.LEAF_T}[s]||Rt.LEAF_G,a=s==="birch"?Rt.BIRCH:Rt.LOG,c=(h,u,f,d)=>{n.get(h,u,f)||n.set(h,u,f,d)};if(s==="pine"){let h=6+(r()*3|0);for(let f=0;f<h;f++)n.set(t,e+f,i,Rt.LOG);let u=2;for(let f=2;f<=h;f++){let d=f===h?0:(h-f)%2===0?Math.max(1,u-1):u;for(let g=-d;g<=d;g++)for(let M=-d;M<=d;M++)Math.abs(g)+Math.abs(M)<=d+(d>1?0:1)&&!(g===0&&M===0&&f<h)&&c(t+g,e+f,i+M,o);f%2===0&&u>1&&f>h/2&&u--}c(t,e+h,i,o),c(t,e+h+1,i,o);return}let l=(s==="birch"?5:4)+(r()*2|0);for(let h=0;h<l;h++)n.set(t,e+h,i,a);for(let h=l-2;h<=l+1;h++){let u=h>=l?1:2;for(let f=-u;f<=u;f++)for(let d=-u;d<=u;d++)u===2&&Math.abs(f)===2&&Math.abs(d)===2&&r()<.75||h===l+1&&Math.abs(f)+Math.abs(d)>1||c(t+f,e+h,i+d,o)}}function gd(n,t,e,i){let s=n.attributes.uv,r=[[i,e],[i,e],[t,i],[t,i],[t,e],[t,e]];for(let o=0;o<6;o++)for(let a=0;a<4;a++){let c=o*4+a;s.setXY(c,s.getX(c)*r[o][0],s.getY(c)*r[o][1])}return s.needsUpdate=!0,n}var Rr=16,Do=n=>{if(typeof n=="number")return n;if(!n)return 16777215;if(n[0]==="#")return parseInt(n.length===4?n.slice(1).split("").map(e=>e+e).join(""):n.slice(1,7),16);let t=n.match(/(\d+)\D+(\d+)\D+(\d+)/);return t?+t[1]<<16|+t[2]<<8|+t[3]:16777215},Mi=(n,t)=>{n=Do(n);let e=i=>Math.max(0,Math.min(255,Math.round(i*t)));return e(n>>16&255)<<16|e(n>>8&255)<<8|e(n&255)},cs=(n,t,e)=>{let i=n*374761393+t*668265263+e*2147483647|0;return i=(i^i>>>13)*1274126177,((i^i>>>16)>>>0)/4294967296};function Qy(){let n=new Map,t=new Map,e=(s,r,o)=>s+","+r+","+o,i={S:n,G:t,put(s,r,o,a,c){s=Math.round(s),r=Math.round(r),o=Math.round(o),!(r<0)&&(c&&n.has(e(s,r,o))||((c?t:n).set(e(s,r,o),Do(a)),c||t.delete(e(s,r,o))))},del(s,r,o){n.delete(e(s,r,o)),t.delete(e(s,r,o))},has(s,r,o){return n.has(e(s,r,o))},each(s){for(let r=0;r<20;r++)for(let o=-2;o<Rr+2;o++)for(let a=-2;a<Rr+2;a++)s(a,r,o)},fill(s,r,o){i.each((a,c,l)=>{s(a+.5,c+.5,l+.5)&&i.put(a,c,l,typeof r=="function"?r(a,c,l):r,o)})},cuboid(s,r,o,a,c,l,h,u){for(let f=r;f<c;f++)for(let d=o;d<l;d++)for(let g=s;g<a;g++)i.put(g,f,d,typeof h=="function"?h(g,f,d):h,u)},cyl(s,r,o,a,c,l,h,u,f){h=h==null?o:h;for(let d=a;d<c;d++){let g=c-a<=1?o:o+(h-o)*(d-a)/(c-a-1);for(let M=-2;M<Rr+2;M++)for(let x=-2;x<Rr+2;x++){let m=Math.hypot(x+.5-s,M+.5-r);m<=g&&(!u||m>g-u)&&i.put(x,d,M,typeof l=="function"?l(x,d,M):l,f)}}},ell(s,r,o,a,c,l,h,u){i.fill((f,d,g)=>{let M=(f-s)/a,x=(d-r)/c,m=(g-o)/l;return M*M+x*x+m*m<=1&&(!u||u(f,d,g))},h)},log(s,r,o,a,c,l){for(let h=s;h<r;h++)for(let u=0;u<20;u++)for(let f=-2;f<Rr+2;f++)Math.hypot(u+.5-o,f+.5-a)<=c&&i.put(h,u,f,typeof l=="function"?l(h,u,f):l)},top(s,r){for(let o=19;o>=0;o--)if(i.has(s,o,r))return o;return-1},sprinkle(s,r,o,a){s.forEach(([c,l],h)=>{let u=r[h%r.length];if(!u)return;let f=-1;for(let d=0;d<(a||o||1);d++)for(let g=0;g<(o||1);g++)f=Math.max(f,i.top(c+g,l+d));for(let d=0;d<(a||o||1);d++)for(let g=0;g<(o||1);g++)i.put(c+g,f+1,l+d,u)})}};return i}var lt=8,kh=[[4,5],[9,4],[6,9],[10,9],[3,8],[8,11],[11,6],[5,12]],xd={bowl(n,t){n.cyl(lt,lt,3.2,0,1,14930886),n.cyl(lt,lt,3.2,1,2,16777215),n.cyl(lt,lt,3.8,2,6,t.soup||"#f3d9a8",6.2),n.cyl(lt,lt,4.2,1,7,(e,i)=>i===6?16165309:Mi(16777215,.93+i*.012),7.6,1.2),t.noodle&&n.fill((e,i,s)=>i>5&&i<6.9&&Math.hypot(e-lt,s-lt)<5.6&&(Math.floor(e)+Math.floor(s)*2)%5===0,t.noodle),n.sprinkle(kh.slice(0,6),t.top||[],2,2),t.egg&&(n.cuboid(9,6,9,12,7,11,16777215),n.put(10,7,10,16761402))},pot(n,t){n.cyl(lt,lt,6.8,0,6,(e,i)=>i===5?10132136:9079448,6.8,1.1),n.cyl(lt,lt,6,0,1,7631999),n.cyl(lt,lt,5.8,1,5,t.soup||"#e8603f"),n.cuboid(0,4,7,1,5,9,7631999),n.cuboid(15,4,7,16,5,9,7631999),n.sprinkle(kh,t.top||[],2,1)},plate(n,t){n.cyl(lt,lt,6.4,0,1,15260879),n.cyl(lt,lt,7.8,1,2,16777215),n.cyl(lt,lt,6.2,1,2,16183014),t.rice&&n.ell(t.main?5.5:lt,2,lt,t.main?3.6:5,2.8,t.main?4.2:4.6,(e,i,s)=>Mi(t.rice,.94+cs(e,i,s)*.1),(e,i)=>i>=2),t.sauce&&n.cyl(t.rice?10.5:lt,lt,t.rice?3.4:5.2,2,3,t.sauce),t.main&&(n.cuboid(8,2,5,13,4,11,t.main),n.cuboid(8,4,5,13,5,11,Mi(t.main,1.2))),t.egg&&(n.cyl(4.5,11.5,2.4,2,3,16777215),n.put(4,3,11,16761402)),t.veg&&(n.cuboid(11,2,11,14,3,13,t.veg),n.put(12,3,12,Mi(t.veg,.8))),n.sprinkle(kh,t.dots||[],2,2)},bread(n){n.ell(lt,2.6,lt,7.2,2.6,2.8,15250538,(t,e)=>e>=0);for(let t=3;t<13;t++)for(let e=3;e<6;e++)for(let i=7;i<9;i++)n.del(t,e,i);for(let t=3;t<13;t++)n.put(t,3,7,["#ff8f7a","#7fc46a","#b5654a","#ffb3a3"][(t>>1)%4]),n.put(t,3,8,t%2?"#7fc46a":"#f6e0b8");[3,6,9,12].forEach(t=>{let e=n.top(t,6);n.put(t,e,6,13208126)})},xeo(n){n.fill((t,e,i)=>e<3&&i>=lt&&Math.hypot(t-lt,i-lt)<=7.2-(e>2?1:0),(t,e,i)=>Math.hypot(t-lt,i-lt)>6.3?14262842:e===2?16767338:16172618),[[5,"#ff9f8f"],[7,"#7fc46a"],[9,"#ffffff"],[11,"#7fc46a"]].forEach(([t,e])=>{n.put(t,0,7,e),n.put(t,1,7,e)})},rolls(n,t){n.cyl(lt,lt,7.6,0,1,16777215),[4,8,12].forEach(e=>n.log(2,14,2.6,e,1.7,(i,s,r)=>i===13||i===2?Do(t.edge):t.fill&&cs(i,s,r)>.86?Do(t.fill[(i+s)%2]):Mi(t.roll,.95+cs(i,s,r)*.12)))},bun(n,t){n.ell(lt,0,lt,6.2,6,6.2,(e,i,s)=>i>4&&Math.hypot(e-lt,s-lt)<1.8?14204580:t.bun,(e,i)=>i>=0),n.cyl(lt,lt,5,0,1,14930886)},skewer(n,t){n.cuboid(0,3,7,16,4,8,12883572),(t.bits||[]).forEach((e,i)=>n.cuboid(2+i*3,1,5,4+i*3+i%2,6,10,(s,r)=>r===5?Mi(e,1.2):e))},corn(n){n.log(2,13,2.8,lt,2.4,(t,e,i)=>(t+e+i)%2?16765803:15906874),n.cuboid(13,1,7,16,4,9,12883572),n.cuboid(5,0,3,13,1,6,8373354),n.cuboid(5,0,10,13,1,13,8373354),n.cuboid(6,1,4,11,2,5,6989914)},potato(n){n.ell(lt,2.4,lt,6.5,2.6,3.6,10111578,(t,e)=>e>=0);for(let t=4;t<13;t++)for(let e=7;e<10;e++){let i=n.top(t,e);n.put(t,i,e,16167770)}n.put(4,3,6,6961728),n.put(12,2,10,6961728)},sushi(n,t){[[2,4],[9,9]].forEach(([e,i])=>{n.cuboid(e,0,i,e+5,3,i+3,(s,r,o)=>Mi(16777215,.93+cs(s,r,o)*.08)),n.cuboid(e-1,3,i,e+6,4,i+3,t.fish||"#ff9f80"),n.cuboid(e,4,i,e+5,5,i+3,Mi(t.fish||"#ff9f80",1.12)),n.cuboid(e+2,0,i-1,e+3,5,i+4,3820090),n.cuboid(e+2,5,i,e+3,6,i+3,3820090)})},onigiri(n){n.fill((t,e,i)=>e<11&&i>5&&i<11&&Math.abs(t-lt)<=(11.5-e)*.55,(t,e,i)=>Mi(16777215,.94+cs(t,e,i)*.07)),n.cuboid(5,0,5,11,4,12,3820090)},balls(n,t){n.cyl(lt,lt,7.4,0,1,16777215),[[4,6],[9,5],[12,10],[6,11],[9,9]].forEach(([e,i])=>{n.ell(e,2.6,i,2.3,2.1,2.3,t.ball||"#d99a4e",(s,r)=>r>=1),n.put(e,4,i,t.sauce||"#7a3f2c"),n.put(e-1,4,i,t.sauce||"#7a3f2c"),n.put(e,5,i,8373354)})},kimbap(n){n.cyl(lt,lt,7.4,0,1,16777215),[[4,5],[11,6],[7,11]].forEach(([t,e])=>{n.cyl(t,e,2.8,1,4,3095088),n.cyl(t,e,2.1,1,4,16777215),n.put(t,3,e,16765803),n.put(t-1,3,e,16748378),n.put(t,3,e-1,8373354)})},dumpling(n){[[4,5],[11,6],[7,11]].forEach(([t,e],i)=>{n.ell(t,.5,e,3.6,2.6,2.4,(s,r)=>r===0?14921834:r>=2&&(s+i)%2?15259320:16313560,(s,r)=>r>=0)})},pizza(n){n.fill((t,e,i)=>e<2&&i>2&&Math.abs(t-lt)<=(15-i)*.55,(t,e)=>e===1?16765803:15250538),n.cuboid(1,0,1,15,3,3,14260814),n.cuboid(2,3,1,14,4,3,15250538),[[6,5],[9,6],[7,9],[8,12]].forEach(([t,e])=>n.cuboid(t,2,e,t+2,3,e+2,14241850)),[[5,7],[10,9],[8,4]].forEach(([t,e])=>n.put(t,2,e,8373354))},burger(n){n.cyl(lt,lt,6.2,0,2,15246666),n.cyl(lt,lt,6.6,2,3,8373354),n.cyl(lt,lt,6.4,3,5,8011564),n.cuboid(2,5,2,14,6,14,16765803),n.cyl(lt,lt,5.6,6,7,15224895),n.ell(lt,7,lt,6.4,4.6,6.4,15246666,(t,e)=>e>=7),[[5,6],[9,5],[7,9],[10,9],[6,11]].forEach(([t,e])=>n.put(t,n.top(t,e)+1,e,16774102))},fries(n){[[4,6],[6,8],[8,6],[10,8],[5,9],[9,9],[7,7],[11,6]].forEach(([t,e],i)=>n.cuboid(t,4,e,t+1,11+i%3,e+1,(s,r)=>r>=10+i%3?15906874:16765803)),n.cyl(lt,lt,4.6,0,9,15224895,5.4),n.cuboid(6,3,12,10,6,13,16777215)},drumstick(n){n.ell(6,3.6,lt,4.8,3.6,3.8,(t,e)=>e>5?15250538:14260814,(t,e)=>e>=0),n.log(10,14,3,lt,1.1,16775406),n.ell(14.2,3.4,7,1.4,1.4,1.4,16775406),n.ell(14.2,3.4,9,1.4,1.4,1.4,16775406)},hotdog(n){n.ell(lt,2,lt,7.2,2.4,3.4,15250538,(t,e,i)=>e>=0&&!(e>2&&Math.abs(i-lt)<1.2)),n.log(0,16,3.2,lt,1.6,14241850);for(let t=2;t<14;t++)n.put(t,5,lt-1+(t>>1)%2,16765803)},flan(n){n.cyl(lt,lt,7.4,0,1,16777215),n.cyl(lt,lt,5.4,1,7,(t,e)=>e===6?9062954:16767114,4.2),[[4,8],[11,7],[8,4],[7,12]].forEach(([t,e])=>{n.put(t,5,e,9062954),n.put(t,4,e,9062954)})},glass(n,t){n.cyl(lt,lt,3.6,0,13,15267583,3.6,.9,!0),n.cyl(lt,lt,3.6,0,1,13165810);let e=1;(t.layers||[]).forEach(i=>{n.cyl(lt,lt,2.8,e,e+3,i),e+=3}),n.cyl(lt,lt,2.8,e,e+1,t.top||"#ffffff"),n.cuboid(9,6,8,10,16,9,16748464)},cone(n,t){n.cyl(lt,lt,.8,0,8,(e,i,s)=>(e+i+s)%2?15250538:14260814,3.4),n.ell(lt,10.5,lt,4.4,4,4.4,t.scoop||"#ffb6d0"),n.put(lt,15,lt,15224895),n.put(lt,14,lt,15224895)},cake(n){n.cyl(lt,lt,6.2,0,6,(t,e,i)=>Math.hypot(t+.5-lt,i+.5-lt)>5.3&&(e===2||e===4)?16752575:16774112),n.cyl(lt,lt,6.4,6,7,16777215);for(let t=0;t<8;t++){let e=t/8*Math.PI*2;n.put(lt+Math.cos(e)*5,7,lt+Math.sin(e)*5,16777215)}n.cuboid(7,7,7,9,9,9,15224895),n.put(8,9,8,8373354)},donut(n){n.fill((t,e,i)=>{let s=Math.hypot(t-lt,i-lt);return e<4&&(s-4.4)**2+(e-1.6)**2<=2.9**2},(t,e)=>e>=2?16752575:15250538),[[4,6,16777215],[11,6,10473471],[6,11,16765803],[11,10,16777215],[8,3,10473471]].forEach(([t,e,i])=>n.put(t,n.top(t,e)+1,e,i))},cookie(n){n.cyl(lt,lt,6.6,0,2,(t,e,i)=>Mi(15250538,.95+cs(t,e,i)*.1)),n.cyl(lt,lt,5,2,3,15250538),[[5,6],[9,5],[7,9],[11,9],[5,11],[9,12]].forEach(([t,e])=>n.put(t,n.top(t,e),e,6961706))},mochi(n){n.cuboid(1,0,3,15,1,13,14207160),[[5,9,16765414],[11,9,13495501],[8,5,16774880]].forEach(([t,e,i])=>n.ell(t,1,e,3.2,3,3.2,i,(s,r)=>r>=1))},cup(n,t){n.cyl(lt,lt,3.2,0,12,15792383,3.9,.9,!0),n.cyl(lt,lt,3.2,0,1,13690610),n.cyl(lt,lt,2.4,1,10,t.drink||"#d9b08a",3),t.cream&&n.cyl(lt,lt,3,10,12,16777215),t.boba&&[[6,7],[8,9],[10,8],[7,10],[9,6]].forEach(([e,i])=>n.put(e,1,i,3811882)),t.ice&&[[6,7],[9,9]].forEach(([e,i])=>n.cuboid(e,9,i,e+2,11,i+2,16777215,!0)),t.slice&&n.fill((e,i,s)=>e>11&&e<13&&Math.hypot(i-11,s-lt)<2.4,(e,i,s)=>Math.hypot(i-11,s-lt)>1.6?16777215:Do(t.slice)),n.cyl(lt,lt,4.2,12,13,14215410,4.2,.9,!0),n.cuboid(9,6,8,10,17,9,16748464)},coconut(n){n.ell(lt,4.6,lt,5.8,5,5.8,(t,e,i)=>cs(t,e,i)>.85?6989914:8373354,(t,e)=>e>=0&&e<9),n.cyl(lt,lt,3.2,8,9,16775920),n.cuboid(9,8,8,10,14,9,16748464)},mug(n,t){n.cyl(lt-1,lt,4.2,0,9,16777215,4.2,1),n.cyl(lt-1,lt,4.2,0,1,15128780),n.cyl(lt-1,lt,3.2,1,8,t.drink||"#c98a4a"),n.cuboid(11,2,7,13,3,9,16777215),n.cuboid(11,6,7,13,7,9,16777215),n.cuboid(12,3,7,13,6,9,16777215),[[6,10],[8,12],[7,14]].forEach(([e,i])=>n.put(e,i,lt,16777215,!0))}},t1=[[[1,0,0],[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],.86],[[-1,0,0],[[0,0,1],[0,1,1],[0,1,0],[0,0,0]],.86],[[0,1,0],[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],1],[[0,-1,0],[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],.6],[[0,0,1],[[1,0,1],[1,1,1],[0,1,1],[0,0,1]],.93],[[0,0,-1],[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],.93]];function _d(n,t,e,i){let s=[],r=[],o=[],a=[],c=new ae;n.forEach((h,u)=>{let[f,d,g]=u.split(",").map(Number),M=.94+cs(f,d,g)*.1;t1.forEach(([x,m,T])=>{let E=f+x[0]+","+(d+x[1])+","+(g+x[2]);if(n.has(E)||t&&t.has(E))return;c.setHex(h,Le);let b=s.length/3;m.forEach(([G,L,D])=>{s.push((f+G-lt)*e,(d+L)*e,(g+D-lt)*e),r.push(x[0],x[1],x[2]),o.push(c.r*T*M,c.g*T*M,c.b*T*M)}),a.push(b,b+1,b+2,b,b+2,b+3)})});let l=new Fe;return l.setAttribute("position",new pe(s,3)),l.setAttribute("normal",new pe(r,3)),l.setAttribute("color",new pe(o,3)),l.setIndex(a),new Pt(l,i)}var e1=new ve({vertexColors:!0}),n1=new ve({vertexColors:!0,transparent:!0,opacity:.42,depthWrite:!1}),Vh={};function Gi(n,t,e){let i=n+JSON.stringify(t||{});if(!Vh[i]){let c=Qy();(xd[n]||xd.bowl)(c,t||{}),Vh[i]=c}let s=Vh[i],r=(e||.4)/Rr,o=new qt,a=_d(s.S,null,r,e1);if(a.castShadow=!0,o.add(a),s.G.size){let c=_d(s.G,s.S,r,n1);c.renderOrder=2,o.add(c)}return o}var i1={land:{W:320,H:236,houses:[[16,116],[52,116],[88,116],[124,116],[172,116],[208,116],[244,116],[16,150],[52,150],[192,23],[66,24],[88,150],[124,150],[16,186],[52,186],[88,186],[124,187],[180,152]],hall:[134,38],pond:[264,206],pondR:[8,4],hill:{x:160,y:46,w:216,h:74,r:12,height:3},ramp:{x:160,from:83,to:110.5},lot:{house:9,x0:172,y0:12,x1:258,y1:66,car:[226,54.4],swing:[186,40]},roads:[[8,110.5,312,110.5],[8,144.5,312,144.5],[8,180.5,206,180.5],[8,214.5,170,214.5],[46,110.5,46,214.5],[160,110.5,160,214.5],[64,70,258,70],[160,70,160,110.5]],river:[[292,30],[296,70],[292,110.5],[288,144.5],[282,175],[272,194]],mountains:[[-22,-32.5,5,11],[-8,-34.5,6,14],[8,-34.5,5.5,12],[22,-32,5,11],[33,-26,4.5,9]]},port:{W:200,H:360,houses:[[8,132],[8,184],[8,236],[8,288],[168,132],[168,184],[168,236],[168,288],[56,134],[132,51],[16,56],[88,134],[120,134],[56,186],[88,186],[120,186],[60,239],[116,239]],hall:[68,30],pond:[100,318],pondR:[6.5,3.6],hill:{x:100,y:52,w:184,h:96,r:12,height:3},ramp:{x:100,from:100,to:124.5},lot:{house:9,x0:110,y0:40,x1:186,y1:90,car:[166,81.6],swing:[122,66]},roads:[[44.5,124.5,155.5,124.5],[44.5,124.5,44.5,330],[155.5,124.5,155.5,312],[44.5,162.5,155.5,162.5],[44.5,214.5,155.5,214.5],[44.5,274.5,155.5,274.5],[16,94,186,94],[100,94,100,124.5]],river:[[206,24],[210,120],[206,230],[200,300],[170,330],[128,322]],mountains:[[-16,-48.5,4.5,10],[-2,-49.5,5,12],[12,-49,4.5,11],[24,-45.5,4,9]]}},Oe,rn,Pn,ie,Xn,Sn,ks,jn,On,ls,Ir,Ln,Nn;function Cd(n){Oe=i1[n];let t=(o,a)=>[(o-Oe.W/2)/4,(a-Oe.H/2)/4];rn=Oe.houses.map(([o,a])=>t(o+12,a+11)),Pn=t(Oe.hall[0],Oe.hall[1]);let e=t(Oe.pond[0],Oe.pond[1]);ie={x:e[0],z:e[1],rx:Oe.pondR[0],rz:Oe.pondR[1]},Xn=Oe.roads.map(([o,a,c,l])=>t(o,a).concat(t(c,l)));let i=t(Oe.hill.x,Oe.hill.y);ks={x:i[0],z:i[1],hw:Oe.hill.w/8,hd:Oe.hill.h/8,r:Oe.hill.r/4,h:Oe.hill.height},jn={x:t(Oe.ramp.x,0)[0],z0:t(0,Oe.ramp.from)[1],z1:t(0,Oe.ramp.to)[1],hw:1.1},On=Oe.river.map(([o,a])=>{let c=t(o,a);return{x:c[0],z:c[1]}}),ls=Oe.mountains.map(o=>[o[0],o[1],o[2]*1.25,o[3]*1.5]);{let o=On[0],a=0,c=1e9;ls.forEach(([g,M],x)=>{let m=Math.hypot(g-o.x,M-o.z);m<c&&(c=m,a=x)});let l=ls[a],h=On[1].x-l[0],u=On[1].z-l[1],f=Math.hypot(h,u)||1;l=ls[a]=[l[0]+h/f*1.5,l[1]+u/f*1.5,Math.max(l[2],8),Math.max(l[3],18)],h=On[1].x-l[0],u=On[1].z-l[1],f=Math.hypot(h,u)||1,Nn={i:a,x:l[0],z:l[1],r:l[2],h:l[3],dx:h/f,dz:u/f},On[0]={x:l[0]+Nn.dx*l[2]*.45,z:l[1]+Nn.dz*l[2]*.45};let d=On[On.length-1];Math.hypot(d.x-ie.x,d.z-ie.z)<22&&On.push({x:ie.x+(d.x-ie.x)*.25,z:ie.z+(d.z-ie.z)*.25})}if(Ir=rn.map((o,a)=>Oe.faces&&Oe.faces[a]||0),Ln=null,Oe.lot){let o=Oe.lot,a=t(o.x0,o.y0),c=t(o.x1,o.y1);Ln={house:o.house,x0:a[0],z0:a[1],x1:c[0],z1:c[1],car:t(o.car[0],o.car[1]),swing:t(o.swing[0],o.swing[1])}}let s=Oe.W/8+11,r=Oe.H/8+11;Sn={a:s,b:r,n:2.6,w:s*2,d:r*2}}function rc(n,t){let e=ks,i=Math.abs(n-e.x)-(e.hw-e.r),s=Math.abs(t-e.z)-(e.hd-e.r);return Math.hypot(Math.max(i,0),Math.max(s,0))+Math.min(Math.max(i,s),0)-e.r}var Oo=(n,t)=>Math.abs(n-jn.x)<jn.hw&&t>=jn.z0-.4&&t<=jn.z1;function In(n,t){return rc(n,t)<=0?ks.h:Oo(n,t)?ks.h*Math.max(0,Math.min(1,1-(t-jn.z0)/(jn.z1-jn.z0))):0}var Gh=(n,t,e)=>{let i=rc(n,t);return i>-.5-(e||0)&&i<.9+(e||0)&&!Oo(n,t)};function Hs(n,t){let e=1e9;for(let i=1;i<On.length;i++){let s=On[i-1],r=On[i],o=r.x-s.x,a=r.z-s.z,c=o*o+a*a,l=Math.max(0,Math.min(1,((n-s.x)*o+(t-s.z)*a)/(c||1)));e=Math.min(e,Math.hypot(n-(s.x+o*l),t-(s.z+a*l)))}return e}var yd=(n,t,e)=>!!Ln&&n>Ln.x0-(e||0)&&n<Ln.x1+(e||0)&&t>Ln.z0-(e||0)&&t<Ln.z1+(e||0),Pd=3,s1=2.1,r1=Pd,vi=r1/2;function Lr(n,t){let e=Sn,i=Math.abs(Math.cos(n)),s=Math.abs(Math.sin(n));return Math.pow(Math.pow(i/e.a,e.n)+Math.pow(s/e.b,e.n),-1/e.n)*(1+.035*Math.sin(3*n+.7)+.025*Math.sin(5*n+2.1)+.015*Math.sin(8*n))*(t||1)}function zs(n,t,e){return Math.hypot(n,t)<Lr(Math.atan2(t,n))-(e||0)}Cd("land");var bi={grass:12576420,grassSide:10474377,dirt:13214334,dirt2:11569768,road:15983293,wall:16774888,wall2:15785156,door:12882799,frame:15323828,trunk:11042910,leaf:[10147472,8834176,11460768],water:9425898,sand:15983549,lily:8701828,roof:{pink:16165309,peach:16368540,blue:10473444,lav:13219054,mint:10738109,yellow:16111752,hall:15834032},flower:[16758465,16777215,16375946,14273008,16763304]},Wh=new Map;function de(n,t){let e=n+JSON.stringify(t||{});if(!Wh.has(e)){let i=Object.assign({color:n},t||{});!("map"in i)&&!i.noMap&&(i.map=hi(dt.PLASTER)),delete i.noMap,Wh.set(e,new ve(i))}return Wh.get(e)}var Xh=new Map;function Ze(n,t,e){let i=n+":"+(t==null?"x":t)+JSON.stringify(e||{});return Xh.has(i)||Xh.set(i,new ve(Object.assign({map:hi(n),color:t==null?16777215:t},e||{}))),Xh.get(i)}var Yh=new Map;function Id(n,t,e){let i=n.toFixed(3)+","+t.toFixed(3)+","+e.toFixed(3);return Yh.has(i)||Yh.set(i,gd(new ke(n,t,e),n,t,e)),Yh.get(i)}function I(n,t,e,i,s=0,r=0,o=0,a){let c=new Pt(Id(n,t,e),a&&a.isMaterial?a:de(i,a));return c.position.set(s,r,o),c.castShadow=!0,c.receiveShadow=!0,c}function tn(n,t,e,i,s=0,r=0,o=0,a){let c=new Pt(new ke(n,t,e),a&&a.isMaterial?a:de(i,a));return c.position.set(s,r,o),c.castShadow=!0,c.receiveShadow=!0,c}function qh(n){return()=>(n=n*1664525+1013904223>>>0,n/4294967296)}var kt=(n,t)=>n+Math.random()*(t-n),Fn=(n,t,e)=>n+(t-n)*e,Ei=(n,t,e=0)=>((n-ie.x)/(ie.rx+e))**2+((t-ie.z)/(ie.rz+e))**2<1;var Qh=new Je({transparent:!0,opacity:0,depthWrite:!1}),tu=[],oc=[];function cc(){let n=new ve({color:12576498,emissive:16765562,emissiveIntensity:0});return tu.push(n),n}function hs(n){let t=new yo;t.moveTo(0,-.5),t.bezierCurveTo(-.9,.1,-.5,.75,0,.35),t.bezierCurveTo(.5,.75,.9,.1,0,-.5);let e=new Va(t,{depth:.18,bevelEnabled:!1,curveSegments:10});return new Pt(e,de(n,{emissive:n,emissiveIntensity:.25}))}function o1(n,t,e){let i=new qt,s=Ze(dt.SHINGLE,e),r=Ze(dt.SPRUCE_PLANK),o=t+1.6,a=0;for(;;a++){let c=o-a,l=a*.5+.25;if(c<=.6)break;i.add(I(n+1,.5,1,0,0,l,c/2-.5,s)),i.add(I(n+1,.5,1,0,0,l,-c/2+.5,s)),c>2.2&&i.add(I(n+.2,.5,c-2,0,0,l,0,r))}return i.add(I(n+1.2,.35,.6,0,0,a*.5+.1,0,r)),i.userData.h=a*.5+.3,i}function Kh(){let n=new ve({color:16773576,emissive:16761963,emissiveIntensity:0,map:hi(dt.PLASTER)});oc.push(n);let t=new qt;return t.add(I(.3,.32,.3,0,0,0,0,n)),t.add(I(.34,.08,.34,4864564,0,.2,0)),t.add(I(.08,.12,.08,4864564,0,.3,0)),t}function Md(n,t){let e=new qt,i=t?10:5,s=t?7:4,r=t?4:3,o=t?bi.roof.hall:bi.roof[n.roof]||bi.roof.pink,a=Ze(dt.STONE_BRICK),c=Ze(dt.COBBLE),l=Ze(dt.LOG),h=Ze(dt.PLANKS),u=Ze(dt.SPRUCE_PLANK);e.add(I(i+.5,.3,s+.5,0,0,.15,0,a)),e.add(I(i,.9,s,0,0,.3+.45,0,c)),e.add(I(i-.02,r-.9,s-.02,0,0,.3+.9+(r-.9)/2,0,t?Ze(dt.PLASTER,16774114):h));let f=t?[-i/2+.25,-2.6,2.6,i/2-.25]:[-i/2+.25,i/2-.25];[-1,1].forEach(D=>f.forEach(z=>e.add(I(.5,r,.5,0,z,.3+r/2,D*(s/2-.15),l)))),e.add(I(i+.3,.4,s+.3,0,0,.3+r-.2,0,u));let d=o1(i,s,o);d.position.y=.3+r,e.add(d);let g=d.userData.h,M=t?2:1,x=t?2.6:2,m=new qt;m.position.set(-M/2,.3,s/2+.02),e.add(m),m.add(I(M,x,.12,0,M/2,x/2,0,u)),m.add(I(.12,.12,.08,16375946,M-.2,x/2,.08)),e.add(I(M-.04,x-.04,.05,4864560,0,.3+x/2,s/2-.02)),e.userData.hinge=m,e.add(I(M+1,.3,1,0,0,.15,s/2+.7,a)),e.add(I(M+1.2,.2,1,0,0,.3+x+.35,s/2+.5,u)),[-1,1].forEach(D=>{let z=Kh();z.position.set(D*(M/2+.4),.3+x-.2,s/2+.2),e.add(z)});let T=cc();T.map=hi(dt.GLASS),e.userData.wm=T;let E=.3+(t?2.3:1.75),b=t?[-3.6,-1.5,1.5,3.6]:[-1.55,1.55];if(b.forEach(D=>{e.add(I(1.2,1.1,.12,0,D,E,s/2+.02,u)),e.add(I(1,.9,.14,0,D,E,s/2+.04,T))}),[-1,1].forEach(D=>{e.add(I(.12,1.1,1.2,0,D*(i/2+.02),E,0,u)),e.add(I(.14,.9,1,0,D*(i/2+.04),E,0,T))}),t||(b.forEach(D=>{e.add(I(1.2,.3,.4,0,D,E-.7,s/2+.22,u)),[-.35,0,.35].forEach((z,A)=>e.add(I(.22,.22,.22,bi.flower[A],D+z,E-.45,s/2+.22)))}),e.add(I(1,2,1,0,i/4,.3+r+g*.45,-s/5,c)),e.userData.chimney=new U(i/4,.3+r+g*.45+1.2,-s/5)),n&&n.heart){let D=hs(16744350);D.scale.setScalar(.9),D.position.set(0,.3+r+g*.42,s/2+.42),e.add(D),e.userData.heart=D}let G=null;if(t){[-1.5,1.5].forEach(A=>e.add(I(.6,r,.6,0,A,.3+r/2,s/2+.35,a))),e.add(I(i+.4,.4,1,0,0,.3+r+.1,s/2+.35,a)),e.add(I(.2,3,.2,0,0,.3+r+g+1.4,0,l));let D=I(1.4,.8,.08,16751536,.75,.3+r+g+2.4,0);e.add(D),e.userData.flag=D;let z=new ve({color:16375946,emissive:16739179,emissiveIntensity:0,map:hi(dt.PLASTER)});G=new Pt(Id(.7,.7,.7),z),G.position.set(0,.3+r+g*.42,s/2+.95),e.add(G),e.add(I(1.4,1.4,.1,0,0,.3+r+g*.42,s/2+.8,u))}e.userData.top=.3+r+g+(t?3.2:.6);let L=new Pt(new ke(i+.6,r+g+.3,s+.6),Qh);return L.position.y=(r+g+.3)/2,e.add(L),e.userData.pick=L,e.userData.bell=G,e.userData.doorZ=s/2+1.3,e}function Jh(n,t,e){let i=document.createElement("canvas");i.width=t,i.height=e,n(i.getContext("2d"),t,e);let s=new dn(i);return s.colorSpace=Le,s.anisotropy=4,s}function eu(n,t,e,i,s,r){r=r||0,n.userData.wm=s,n.userData.top=i+.9,n.userData.size={cx:r,hw:t/2+.4,hd:e/2+.3};let o=new Pt(new ke(t+.6,i+.3,e+.6),Qh);return o.position.set(r,(i+.3)/2,0),n.add(o),n.userData.pick=o,n.userData.doorZ=e/2+1.3,n}function nu(n,t,e,i,s){let r=new qt;r.position.set(-t/2,.3,i),n.add(r),r.add(I(t,e,.1,s,t/2,e/2,0)),r.add(I(.06,.5,.06,14278115,t-.2,e/2,.07)),n.add(I(t-.04,e-.04,.05,3814720,0,.3+e/2,i-.04)),n.userData.hinge=r}function a1(){let n=new qt,t=6.4,e=5.2,i=3,s=2.8,r=cc();n.add(I(t+5.4,.25,e+.6,15328478,2.3,.12,0)),n.add(I(t,i,e,16513784,0,.25+i/2,0)),[-2.15,2.15].forEach(M=>{n.add(I(1.7,2.45,.08,3814720,M,.25+1.3,e/2+.01)),n.add(I(1.55,2.3,.1,0,M,.25+1.3,e/2+.03,r))}),nu(n,1.15,2.3,e/2+.03,9067068),n.add(I(t+.3,.18,e+.3,4867664,0,.25+i+.09,0));let o=.25+i+.18,a=Jh((M,x,m)=>{for(let T=0;T<x;T+=4)M.fillStyle=T%8?"#c99166":"#bb8358",M.fillRect(T,0,4,m)},64,16),c=new ve({map:a}),l=new Pt(new ke(t-.6,s,e-.4),c);l.position.set(-.3,o+s/2,-.4),l.castShadow=!0,l.receiveShadow=!0,n.add(l),n.add(I(t-.3,.16,e-.1,4867664,-.3,o+s+.08,-.4));let h=e/2-.4+.01-.2;n.add(I(2.9,2.35,.08,3814720,-.3,o+1.2,h+.02));let u=new Pt(new ke(2.7,2.2,.06),new ve({color:12576498,transparent:!0,opacity:.6,emissive:16765562,emissiveIntensity:0}));u.position.set(-.3,o+1.2,h+.06),n.add(u),tu.push(u.material),n.add(I(.05,2.2,.08,3814720,-.3,o+1.2,h+.08)),n.add(I(t-.4,.14,1.5,15328478,-.2,o+.07,e/2+.55));let f=new Pt(new ke(t-.5,.75,.04),new ve({color:14217722,transparent:!0,opacity:.45}));f.position.set(-.2,o+.52,e/2+1.28),n.add(f),n.add(I(t-.5,.05,.07,3814720,-.2,o+.92,e/2+1.28)),[-2.5,-1.95,1.75,2.3].forEach((M,x)=>{n.add(I(.34,.32,.34,[15921906,9080729][x%2],M,o+.3,e/2+.95));let m=new Pt(new Ga(.26,2),de(bi.leaf[x%3],{}));m.position.set(M,o+.62,e/2+.95),m.castShadow=!0,n.add(m)});let d=hs(16744350);d.scale.setScalar(.55),d.material=new ve({color:16744350,emissive:16732030,emissiveIntensity:.25}),d.position.set(-2.2,o+2.05,e/2-.55),n.add(d),n.userData.heart=d;let g=t/2+2.3;n.add(I(4.6,2.9,e,16513784,g,.25+1.45,0)),n.add(I(4.8,.16,e+.2,4867664,g,.25+2.98,0)),n.add(I(3.7,2.3,.08,5592926,g,.25+1.15,e/2+.02));for(let M=0;M<6;M++)n.add(I(3.7,.03,.1,7040630,g,.45+M*.38,e/2+.05));return n.add(I(.5,.05,.05,16777215,g+1.4,2.95,e/2+.12)),[-1,1].forEach(M=>n.add(I(.12,.85,.85,0,M*(t/2+.01)-(M>0,0),.25+1.6,-1.2,r))),n.userData.vip=!0,eu(n,t+4.6,e,o+s+.2,r,2.3)}function c1(){let n=new qt,t=9.2,e=6.6,i=3.8,s=cc();n.add(I(t+.6,.25,e+.6,15326447,0,.12,0)),n.add(I(t,i,e,14273008,0,.25+i/2,0)),n.add(I(t+.4,.3,e+.4,16165309,0,.25+i+.15,0)),[-2.8,2.8].forEach(o=>{n.add(I(2.6,2,.1,16777215,o,1.5,e/2+.01)),n.add(I(2.4,1.8,.12,0,o,1.5,e/2+.03,s))}),nu(n,1.8,2.4,e/2+.03,15834032),[[-1.4,16773544],[0,16758465],[1.4,10934504]].forEach(([o,a])=>{let c=hs(a);c.scale.setScalar(.45),c.position.set(o,.25+i-.55,e/2+.02),n.add(c)});let r=new Pt(new pn(.55,20,14),de(16027569));return r.position.set(3.2,.25+i+2.2,-1.5),r.castShadow=!0,n.add(r),n.add(I(.18,1.6,.18,3814720,3.2,.25+i+1.2,-1.5)),n.add(I(1.6,.3,1.6,3814720,3.2,.25+i+.45,-1.5)),eu(n,t,e,i+2.4,s)}function l1(){let n=new qt,t=9.2,e=7,i=3.5,s=cc();n.add(I(t+.8,.22,e+.8,14605012,0,.11,0)),n.add(I(t,i,e,16513784,0,.22+i/2,0)),[[15895592,0],[3055195,.22],[14826299,.44]].forEach(([l,h])=>{n.add(I(t+.06,.2,e+.06,l,0,.22+i-.55-h,0))}),n.add(I(t+.5,.25,e+.5,15921906,0,.22+i+.12,0));let r=Jh((l,h,u)=>{l.fillStyle="#d8f1fa",l.fillRect(0,0,h,u);let f=["#ffb6c1","#f5d888","#a3d9bd","#a6d8e8","#f9c39c","#d9c9f0"];for(let d=0;d<4;d++){l.fillStyle="#c9e7f2",l.fillRect(0,12+d*28,h,3);for(let g=0;g<26;g++)l.fillStyle=f[(g+d)%f.length],l.fillRect(6+g*10,15+d*28,7,10+g%3*3)}},256,128),o=new ve({map:r,emissive:16773836,emissiveMap:r,emissiveIntensity:.1});[-2.65,2.65].forEach(l=>{n.add(I(3.4,2,.08,14605012,l,1.35,e/2+.01));let h=new Pt(new ke(3.2,1.85,.1),o);h.position.set(l,1.35,e/2+.03),n.add(h)}),nu(n,1.7,2.3,e/2+.03,12576498);let a=Jh((l,h,u)=>{l.fillStyle="#ffffff",l.fillRect(0,0,h,u),l.fillStyle="#2e9e5b",l.fillRect(10,18,108,16),l.fillStyle="#f28c28",l.fillRect(10,40,108,16),l.fillStyle="#e23b3b",l.font="bold 86px sans-serif",l.textAlign="center",l.fillText("7",64,98),l.font="bold 20px sans-serif",l.fillText("ELEVEn",64,122)},128,128),c=new Pt(new ke(1.5,1.5,.14),[de(16777215),de(16777215),de(16777215),de(16777215),new ve({map:a}),de(16777215)]);return c.position.set(t/2-1.1,.22+i+1.05,e/2-.3),c.castShadow=!0,n.add(c),n.add(I(.12,.8,.12,14605012,t/2-1.1,.22+i+.35,e/2-.3)),[[15226446,-.5],[6131664,.45]].forEach(([l,h])=>{n.add(I(.8,1.8,.75,l,t/2+.45,1.12,e/2-1.2+h));let u=I(.04,.9,.55,0,t/2+.86,1.4,e/2-1.2+h,new ve({color:16775126,emissive:16773808,emissiveIntensity:.25}));n.add(u)}),[-4,-3.2].forEach(l=>n.add(I(.5,.5,.5,15895592,l,.47,e/2+.9))),n.userData.alwaysLit=!0,eu(n,t,e,i+1.9,s)}function h1(){let n=new qt,t=2500653,e=14278115,i=5202805;n.add(I(1.9,1,4.4,t,0,.95,0)),n.add(I(1.75,.78,2.7,t,0,1.85,-.35)),[[-1,0],[1,0]].forEach(([o])=>n.add(I(.03,.55,2.4,i,o*.885,1.9,-.35))),n.add(I(1.6,.55,.03,i,0,1.9,1.01)),n.add(I(1.6,.55,.03,i,0,1.9,-1.71)),n.add(I(1.92,.06,4.42,e,0,1.46,0)),n.add(I(1.3,.35,.05,1776672,0,1.05,2.21));for(let o=-2;o<=2;o++)n.add(I(.03,.3,.06,e,o*.22,1.05,2.22));[-1,1].forEach(o=>{let a=new Pt(new Xe(.17,.17,.08,14),de(16775126,{emissive:16773808,emissiveIntensity:.35}));a.rotation.x=Math.PI/2,a.position.set(o*.72,1.12,2.22),n.add(a),n.add(I(.12,.12,.12,16754253,o*.95,1.5,1.95)),n.add(I(.22,.35,.05,14703183,o*.78,1,-2.22))}),n.add(I(1.94,.18,.2,1776672,0,.5,2.25)),n.add(I(1.94,.18,.2,1776672,0,.5,-2.25));let s=new Pt(new Xe(.4,.4,.24,16),de(1776672));s.rotation.x=Math.PI/2,s.position.set(0,1.15,-2.35),n.add(s);let r=new Pt(new Xe(.22,.22,.26,12),de(e));return r.rotation.x=Math.PI/2,r.position.set(0,1.15,-2.36),n.add(r),[[-.95,1.45],[.95,1.45],[-.95,-1.4],[.95,-1.4]].forEach(([o,a])=>{let c=new Pt(new Xe(.42,.42,.34,14),de(1776672));c.rotation.z=Math.PI/2,c.position.set(o,.42,a),c.castShadow=!0,n.add(c);let l=new Pt(new Xe(.22,.22,.36,10),de(e));l.rotation.z=Math.PI/2,l.position.set(o,.42,a),n.add(l)}),n.add(I(1.5,.05,2.2,3816514,0,2.27,-.35)),n}function u1(n,t){if(!Ln)return{posts:[],blocks:[]};let e=Ln,i={posts:[],blocks:[]},[s,r]=rn[e.house],[o,a]=e.car,c=t===Math.PI?e.z0:e.z1,l=In(s,r),h=[[s-1.2,s+1.2],[o-1.6,o+1.6]],u=(x,m)=>Math.abs(m-c)<.01&&h.some(([T,E])=>x>T&&x<E),f=(x,m,T,E)=>{let b=Math.hypot(T-x,E-m),G=Math.max(1,Math.round(b/1));for(let L=0;L<G;L++){let D=Fn(x,T,(L+.5)/G),z=Fn(m,E,(L+.5)/G);if(u(D,z))continue;let A=I(b/G+.02,.55,.22,16052716,D,l+.27,z);A.rotation.y=Math.atan2(T-x,E-m)+Math.PI/2,n.add(A);let S=I(b/G,.32,.3,8831614,D,l+.68,z);S.rotation.y=A.rotation.y,n.add(S),i.posts.push({x:D,z,r:.45})}};f(e.x0,e.z0,e.x1,e.z0),f(e.x1,e.z0,e.x1,e.z1),f(e.x1,e.z1,e.x0,e.z1),f(e.x0,e.z1,e.x0,e.z0),i.blocks.push({x:s+5.5,z:r,hw:2.5,hd:2.8});let d=Math.min(c,a)-1.5,g=Math.max(c,a)+.5;n.add(I(3.4,.05,Math.abs(g-d)+1.5,14144203,o,l+.025,(d+g)/2-.5));let M=h1();return M.position.set(o,l,a),M.rotation.y=t,n.add(M),i.blocks.push({x:o,z:a,hw:1.2,hd:2.4}),i.car=M,i.exit={x:o,z:c+(t===Math.PI?-1.6:1.6)},n.add(I(1.3,.05,Math.abs(r-c),15392719,s,l+.03,(r+c)/2)),i}function f1(){let n=new qt;n.add(I(.16,2.2,.16,9206379,0,1.1,0));let t=new ve({color:16774351,emissive:16765562,emissiveIntensity:0});return oc.push(t),n.add(I(.5,.5,.5,0,0,2.45,0,t)),n.add(I(.62,.12,.62,9206379,0,2.76,0)),n}var d1=new ve({vertexColors:!0});function Ld(n,t){let e=[];n.traverse(i=>{i.isMesh||e.push(i)}),e.forEach(i=>{let s=i.children.filter(c=>c.isMesh&&!(t&&t.includes(c))&&!c.material.transparent&&!c.material.map);if(s.length<2)return;let r=s.map(c=>{let l=c.geometry.clone();Object.keys(l.attributes).forEach(d=>{d!=="position"&&d!=="normal"&&l.deleteAttribute(d)}),l.index&&(l=l.toNonIndexed()),l.clearGroups(),c.updateMatrix(),l.applyMatrix4(c.matrix);let h=c.material.color,u=l.attributes.position.count,f=new Float32Array(u*3);for(let d=0;d<u;d++)f[d*3]=h.r,f[d*3+1]=h.g,f[d*3+2]=h.b;return l.setAttribute("color",new gn(f,3)),l}),o=tc(r,!1);if(r.forEach(c=>c.dispose()),!o)return;s.forEach(c=>i.remove(c));let a=new Pt(o,d1);a.castShadow=!0,a.receiveShadow=!0,i.add(a)})}function ic(n,t,e,i,s,r,o){let a=new qt;a.position.set(s,r,o);let c=I(n,t,e,i,0,-t/2,0);return a.add(c),a}var sc=[{hair:5914688,skin:16768198,shirt:12824814,pants:6253194,style:"short",uniform:!0},{hair:3878703,skin:15976614,shirt:12824814,pants:6253194,style:"long",uniform:!0},{hair:11039050,skin:16769744,shirt:12824814,pants:6253194,style:"short",uniform:!0},{hair:3025462,skin:15580570,shirt:10738109,pants:6253178,style:"short"},{hair:2038564,skin:16768198,shirt:16758465,pants:9080760,style:"twin"},{hair:9067068,skin:16175024,shirt:16111752,pants:7170698,style:"cap",cap:15834032},{hair:4864570,skin:15317140,shirt:12824814,pants:6253194,style:"short",glasses:!0,uniform:!0},{hair:13208410,skin:16769744,shirt:10147472,pants:8161960,style:"long"},{hair:3878703,skin:15976614,shirt:12824814,pants:6253194,style:"bun",glasses:!0,uniform:!0},null,{hair:5914688,skin:15580570,shirt:14273008,pants:7170698,style:"long"},{hair:3025462,skin:16768198,shirt:16111752,pants:8161960,style:"bun"},{hair:9067068,skin:15976614,shirt:10473444,pants:6253178,style:"short",glasses:!0},{hair:3878703,skin:15317140,shirt:10738109,pants:7170698,style:"cap",cap:10738109},{hair:13208410,skin:16769744,shirt:13482478,pants:9080760,style:"twin"},{hair:2367010,skin:16175024,shirt:16368540,pants:8161960,style:"short"},{hair:5914688,skin:16768198,shirt:16758465,pants:7170698,style:"long"},{hair:2038564,skin:15580570,shirt:9226408,pants:5196378,style:"cap",cap:16165309},{hair:11039050,skin:16769744,shirt:16111752,pants:9075306,style:"bun"}],$h={her:{hair:3877418,skin:16768198,shirt:16758465,pants:16758465,style:"long",dress:16165309},him:{hair:2367010,skin:15778976,shirt:10473444,pants:6253194,style:"short"}},vd=[{hair:3878703,skin:15976614,shirt:12824814,pants:6253194,style:"short",uniform:!0},{hair:9067068,skin:16769744,shirt:12824814,pants:6253194,style:"long",uniform:!0},{hair:2367010,skin:15317140,shirt:12824814,pants:6253194,style:"bun",uniform:!0}],ue=1.75/32,jh=12*ue;function Cr(n,t){let e=new ae(n);return t&&(e.r=Math.min(1,e.r*t),e.g=Math.min(1,e.g*t),e.b=Math.min(1,e.b*t)),"#"+e.getHexString()}function Dd(n,t){let e=document.createElement("canvas");e.width=e.height=64;let i=e.getContext("2d"),s=(n.hair^n.shirt^n.skin)>>>0,r=()=>(s=s*1664525+1013904223>>>0,s/4294967296),o=(M,x,m,T,E,b)=>{for(let G=0;G<T;G++)for(let L=0;L<m;L++)i.fillStyle=Cr(E,1+(r()-.5)*(b==null?.1:b)),i.fillRect(M+L,x+G,1,1)},a=(M,x,m)=>{i.fillStyle=typeof m=="string"?m:Cr(m),i.fillRect(M,x,1,1)},c=5981750,l=n.skin,h=n.hair,u=n.shirt,f=n.pants,d=n.style==="long"||n.style==="twin"||n.dress;o(0,0,32,16,l,.06),o(8,0,8,8,h),o(24,8,8,d?8:6,h),[0,16].forEach(M=>{o(M,8,8,d?7:4,h),o(M+(M?6:0),12,2,d?4:2,h)}),o(8,8,8,2,h),a(8,10,h),a(15,10,h),a(9,10,h),n.style==="cap"&&(o(8,0,8,8,n.cap),o(8,8,8,2,n.cap),o(0,8,8,2,n.cap),o(16,8,8,2,n.cap),o(24,8,8,2,n.cap)),[[9,12],[13,12]].forEach(([M,x])=>{if(t){a(M,x+1,"#3a2e33"),a(M+1,x+1,"#3a2e33");return}a(M,x,"#ffffff"),a(M+1,x,"#3a2e33"),a(M,x+1,"#ffffff"),a(M+1,x+1,"#3a2e33")}),a(9,14,"#ffa3b5"),a(14,14,"#ffa3b5"),a(11,14,Cr(l,.78)),a(12,14,Cr(l,.78)),a(11,15,"#c9707c"),a(12,15,"#c9707c"),n.glasses&&([9,13].forEach(M=>{["#6b5a4e"].forEach(x=>{a(M-1,12,x),a(M+2,12,x),a(M-1,13,x),a(M+2,13,x)})}),a(11,12,"#6b5a4e"),a(12,12,"#6b5a4e")),o(16,16,24,16,u),o(20,16,8,4,u,.05),o(23,20,2,1,l),n.uniform&&(o(22,20,4,1,16777215),o(21,22,2,2,16373355),o(20,31,8,1,9403592)),n.dress?(o(16,26,24,6,n.dress),o(20,25,8,1,Cr(n.dress,.9)&&n.dress)):o(16,30,24,2,Cr(f,.85)&&f,.05),o(20,22,8,1,u,.25),[[40,16],[32,48]].forEach(([M,x])=>{o(M,x,16,16,u),o(M,x+4+5,16,7,l,.06),o(M+4,x,4,4,u),o(M+8,x,4,4,l)}),[[0,16],[16,48]].forEach(([M,x])=>{o(M,x,16,16,n.dress?l:f),n.dress&&o(M,x+4,16,3,n.dress),o(M,x+4+10,16,2,c,.05),o(M+8,x,4,4,c)});let g=new dn(e);return g.magFilter=en,g.minFilter=en,g.generateMipmaps=!1,g.colorSpace=Le,g}function Pr(n,t,e,i,s){let r=new ke(n*ue,t*ue,e*ue),o=64,a=(h,u,f,d,g)=>{let M=h/o,x=(h+f)/o,m=1-u/o,T=1-(u+d)/o;return g?[x,m,M,m,x,T,M,T]:[M,m,x,m,M,T,x,T]},c=[a(i+e+n,s+e,e,t),a(i,s+e,e,t),a(i+e,s,n,e),a(i+e+n,s,n,e,!0),a(i+e,s+e,n,t),a(i+2*e+n,s+e,n,t)],l=r.attributes.uv;return c.forEach((h,u)=>{for(let f=0;f<4;f++)l.setXY(u*4+f,h[f*2],h[f*2+1])}),l.needsUpdate=!0,r}function Fo(n){let t=new qt,e={},i=new ve({map:Dd(n)});e.mat=i,e.look=n;let s=(c,l,h,u)=>{let f=new Pt(c,i);return f.position.set(l,h,u),f.castShadow=!0,f.receiveShadow=!0,f},r=(c,l,h,u)=>{let f=new qt;return f.position.set(c,l,h),f.add(u),f};e.legR=r(-2*ue,12*ue,0,s(Pr(4,12,4,0,16),0,-6*ue,0)),t.add(e.legR),e.legL=r(2*ue,12*ue,0,s(Pr(4,12,4,16,48),0,-6*ue,0)),t.add(e.legL),e.body=s(Pr(8,12,4,16,16),0,18*ue,0),t.add(e.body),e.armR=r(-6*ue,23.5*ue,0,s(Pr(4,12,4,40,16),0,-5.5*ue,0)),t.add(e.armR),e.armL=r(6*ue,23.5*ue,0,s(Pr(4,12,4,32,48),0,-5.5*ue,0)),t.add(e.armL);let o=new qt;o.position.y=24*ue,t.add(o),e.head=o,o.add(s(Pr(8,8,8,0,0),0,4*ue,0));let a=(c,l,h,u,f,d,g)=>{let M=tn(l*ue,h*ue,u*ue,c,f*ue,d*ue,g*ue);o.add(M)};if(n.style==="bun"&&a(n.hair,3,3,3,0,9.3,-2),n.style==="twin"&&(a(n.hair,2,4,2,-4.6,3.5,-1.5),a(n.hair,2,4,2,4.6,3.5,-1.5)),n.style==="cap"&&a(n.cap,8,1,3,0,6.5,5),n.style==="long"&&a(n.hair,8,5,1,0,-1.5,-4.5),n.dress){let c=tn(9*ue,4*ue,5*ue,n.dress,0,12.5*ue,0);t.add(c)}{let c=new qt;c.position.set(0,-11*ue,1.2*ue),c.visible=!1,c.add(tn(9*ue,2.2*ue,2.2*ue,16112774,0,0,0)),c.add(tn(1.2*ue,2.8*ue,2.8*ue,11879994,-4.9*ue,0,0)),c.add(tn(1.2*ue,2.8*ue,2.8*ue,11879994,4.9*ue,0,0)),c.add(tn(6*ue,3.5*ue,.3*ue,16509616,.5*ue,-2.6*ue,.4*ue)),e.armR.add(c),e.scroll=c}return e.kids=t.children.slice(),{g:t,parts:e}}var Ud=n=>n.style==="long"||n.style==="twin"||n.style==="bun";function Nd(n,t){return!n||!t||t==="f"===Ud(n)?n:Object.assign({},n,{style:(t==="f"?{short:"long",cap:"twin"}:{long:"short",twin:"cap",bun:"short"})[n.style]||(t==="f"?"long":"short"),cap:n.cap||n.shirt})}function Ed(n,t){let e=Fo(t);(n.parts.kids||[]).forEach(s=>n.g.remove(s)),e.parts.kids.forEach(s=>n.g.add(s));let i={};Object.keys(n.parts).forEach(s=>{s in e.parts||(i[s]=n.parts[s])}),n.parts=Object.assign(e.parts,i)}function p1(){let n=new qt,t={},e=16236938,i=14720350,s=16774118;n.add(tn(.46,.4,.8,e,0,.5,0)),[-.12,.1].forEach(l=>n.add(tn(.48,.06,.12,i,0,.71,l))),n.add(tn(.36,.2,.5,s,0,.34,.05)),t.legs=[[-.14,.28],[.14,.28],[-.14,-.28],[.14,-.28]].map(([l,h])=>{let u=ic(.13,.32,.13,e,l,.34,h);return n.add(u),u});let r=new qt;r.position.set(0,.78,.48),n.add(r),t.head=r,r.add(tn(.5,.42,.42,e,0,0,0)),r.add(tn(.3,.16,.06,s,0,-.1,.21)),[-.15,.15].forEach(l=>{let h=new Pt(new _o(.11,.2,4),de(i));h.position.set(l,.29,-.02),h.rotation.y=Math.PI/4,r.add(h);let u=tn(.08,.1,.03,4010032,l*.8,.04,.215);r.add(u),(t.eyes=t.eyes||[]).push(u)}),r.add(tn(.07,.05,.03,16752048,0,-.04,.23));let o=new qt;o.position.set(0,.62,-.38),n.add(o),t.tail=o;let a=tn(.1,.1,.4,e,0,.05,-.18);o.add(a);let c=new qt;return c.position.set(0,.05,-.36),o.add(c),c.add(tn(.1,.4,.1,i,0,.18,0)),o.rotation.x=.5,n.scale.setScalar(.6),Ld(n,t.eyes),{g:n,parts:t}}function m1(){let n=new qt,t={},e=16774374,i=13211247;n.add(tn(.56,.5,.95,e,0,.62,0)),n.add(tn(.58,.3,.4,i,0,.76,-.15)),t.legs=[[-.17,.33],[.17,.33],[-.17,-.33],[.17,-.33]].map(([o,a])=>{let c=ic(.16,.4,.16,e,o,.42,a);return n.add(c),c});let s=new qt;s.position.set(0,.98,.55),n.add(s),t.head=s,s.add(tn(.56,.52,.5,e,0,0,0)),s.add(tn(.3,.24,.26,e,0,-.1,.34)),s.add(tn(.13,.1,.06,4010032,0,-.02,.48)),s.add(tn(.1,.12,.06,16748451,.05,-.24,.42)),[-.3,.3].forEach(o=>{let a=ic(.12,.42,.26,i,o,.2,-.02);a.rotation.z=o>0?-.15:.15,s.add(a);let c=tn(.08,.11,.03,4010032,o*.45,.08,.26);s.add(c),(t.eyes=t.eyes||[]).push(c)});let r=ic(.12,.42,.12,i,0,.82,-.47);return r.rotation.x=-.9,n.add(r),t.tail=r,n.scale.setScalar(.62),Ld(n,t.eyes),{g:n,parts:t}}function bd(n){let t=new qt,e=[16751211,16777215,16757575][n%3],i=new Pt(new pn(.28,10,8),de(e));if(i.scale.set(.7,.6,1.4),t.add(i),n%3===1){let r=new Pt(new pn(.16,8,6),de(16744272));r.position.set(0,.1,.05),r.scale.set(1,.6,1.4),t.add(r)}let s=new Pt(new _o(.22,.35,4),de(e===16777215?16751211:e));return s.rotation.x=Math.PI/2,s.position.z=-.5,t.add(s),t.userData.tail=s,t}function g1(n){let t=new qt,e=new ve({color:n,side:vn}),i=()=>{let o=new Pt(new ss(.32,.26),e);o.position.x=.17;let a=new qt;return a.add(o),a},s=i(),r=i();return r.scale.x=-1,t.add(s,r),t.userData.l=s,t.userData.r=r,t}function Sd(){let n=new qt,t=15392715,e=3.5,i=Ze(dt.LOG),s=Ze(dt.LEAF_P);n.add(I(1,e+1.5,1,0,-2,(e+1.5)/2,-.2,i)),n.add(I(3.2,.5,.5,0,-.4,e+.05,0,i)),[[-2,e+2.5,-.3,4,2,3],[-2,e+3.5,-.3,2,1,2],[-.6,e+1.6,-.6,2,1,2],[-3.4,e+1.6,-.2,1,1,2]].forEach(([c,l,h,u,f,d])=>n.add(I(u,f,d,0,c,l,h,s)));let r=new qt;r.position.set(0,e-.2,0),n.add(r);let o=e-.2-.56;[-.72,.72].forEach(c=>r.add(I(.06,o,.06,t,c,-o/2,0)));let a=I(1.65,.12,.5,0,0,-o,0,Ze(dt.PLANK_GREY,16165309));return r.add(a),n.userData.pivot=r,n.userData.seat=a,n}var iu=[];function wd(n,t){let e=document.createElement("canvas");e.width=e.height=16;let i=e.getContext("2d"),s=(h,u,f)=>{i.fillStyle=f,i.fillRect(h,u,1,1)},r=[];for(let h=0;h<9;h++)r.push([3+h,12-h]);let o=[];r.forEach(([h,u])=>{o.push([h,u,"#9a6a3e"],[h+1,u,"#6b4526"])}),[[12,2],[13,2],[13,3],[11,1],[12,1],[13,1],[14,1],[14,2],[14,3],[14,4],[10,2],[13,5]].forEach(([h,u])=>o.push([h,u,"#e6e6ee"])),[[12,3],[12,4],[11,3]].forEach(([h,u])=>o.push([h,u,"#b8b8c6"])),[[1,12],[2,11],[1,13],[2,14],[3,14],[1,11],[2,13],[4,14],[0,12],[3,15]].forEach(([h,u])=>o.push([h,u,"#ffffff"])),[[2,12],[3,13]].forEach(([h,u])=>o.push([h,u,"#f6a9bd"])),o.forEach(([h,u])=>{[[-1,0],[1,0],[0,-1],[0,1]].forEach(([f,d])=>s(h+f,u+d,"#4a3020"))}),o.forEach(([h,u,f])=>s(h,u,f));let a=new dn(e);a.magFilter=en,a.minFilter=en,a.colorSpace=Le;let c=new rs(new Vi({map:a,transparent:!0,depthWrite:!1,depthTest:!1,rotation:n}));c.scale.set(t,t,1),c.renderOrder=5;let l=new U(Math.cos(n+Math.PI/4),Math.sin(n+Math.PI/4),0);return iu.push({sp:c,dir:l,base:null}),c}function x1(n){iu.forEach(t=>{t.base||(t.base=t.sp.position.clone());let e=(Math.sin(n*4)*.5+.5)*.12;t.sp.position.set(t.base.x+t.dir.x*e,t.base.y+t.dir.y*e,t.base.z)})}function _1(n,t,e){let s=document.createElement("canvas"),r=s.getContext("2d");r.font="800 64px Nunito, sans-serif";let o=Math.ceil(r.measureText(n).width)+40;s.width=o,s.height=100;let a=s.getContext("2d");a.font="800 64px Nunito, sans-serif",a.textAlign="center",a.textBaseline="middle",a.lineJoin="round",t==="#ffffff"&&(a.shadowColor="rgba(40,30,40,.45)",a.shadowBlur=6,a.shadowOffsetY=3),a.fillStyle=t,a.fillText(n,o/2,s.height/2);let c=new dn(s);c.colorSpace=Le;let l=new rs(new Vi({map:c,transparent:!0,depthWrite:!1,depthTest:!1}));return l.scale.set(e*o/s.height,e,1),l.renderOrder=5,l}function Od(n,t,e,i){let s=document.createElement("canvas");s.width=128,s.height=64;let r=s.getContext("2d");r.font="bold 48px sans-serif",r.fillStyle=t,r.textAlign="center",r.fillText(n,64,50);let o=new rs(new Vi({map:new dn(s),transparent:!0,depthWrite:!1}));return o.scale.set(e,i,1),o.visible=!1,o}function Td(n,t){return Math.hypot((n-ie.x)/(ie.rx+4.4),(t-ie.z)/(ie.rz+4.4))<1&&!Ei(n,t,.4)}function y1(n){let t=new xo(On.map(o=>new U(o.x,0,o.z))),e=90,i=t.getSpacedPoints(e),s=new bn,r=[];return Xn.forEach(([o,a,c,l])=>{let h=o===c;for(let u=0;u<i.length;u++){let f=i[u];!(h?Math.abs(f.x-o)<.95&&f.z>=Math.min(a,l)-.9&&f.z<=Math.max(a,l)+.9:Math.abs(f.z-a)<.95&&f.x>=Math.min(o,c)-.9&&f.x<=Math.max(o,c)+.9)||r.some(g=>Math.hypot(g.x-f.x,g.z-f.z)<3)||r.push({x:h?o:f.x,z:h?f.z:a,rot:h?0:Math.PI/2})}}),r.forEach(o=>n.add(Fd(o.x,o.z,o.rot,3))),{curve:t,glints:[],ftex:s,foam:[],bridges:r,src:i[0]}}function Fd(n,t,e,i){let s=new qt;s.position.set(n,0,t),s.rotation.y=e;let r=Ze(dt.PLANKS),o=Ze(dt.LOG);return[0,.25,.5,.25,0].forEach((a,c)=>s.add(I(i,.5,1,0,0,a-.15,c-2,r))),[-1,1].forEach(a=>{[0,.25,.5,.25,0].forEach((c,l)=>{s.add(I(.25,.9,.25,0,a*(i/2-.12),c+.55,l-2,o)),l<4&&s.add(I(.12,.12,1,0,a*(i/2-.12),c+.85+(l<2?.12:-.12),l-1.5,r))})}),s}function M1(n,t){let e=ie,i=e.rx+2.6,s=e.rz+2.6,r=80,o=[],a=[],c={benches:[],ducks:[],posts:[]};for(let l=0;l<=r;l++){let h=l/r*Math.PI*2,u=Math.cos(h),f=Math.sin(h),d=e.x+u*(i-.75),g=e.z+f*(s-.75),M=e.x+u*(i+.75),x=e.z+f*(s+.75);if(o.push(d,.025,g,M,.025,x),l){let m=l*2;a.push(m-2,m,m-1,m-1,m,m+1)}}for(let l=0;l<r;l++){let h=l/r*Math.PI*2,u=e.x+Math.cos(h)*i,f=e.z+Math.sin(h)*s;if(Hs(u,f)<.6){n.add(Fd(u,f,-h+Math.PI/2+Math.PI/2,1.5));break}}[.6,2.2,3.6,5].forEach((l,h)=>{let u=e.x+Math.cos(l)*(i+1.6),f=e.z+Math.sin(l)*(s+1.6);if(Hs(u,f)<2.2||!zs(u,f,1.5))return;let d=new qt;d.position.set(u,0,f),d.rotation.y=Math.atan2(e.x-u,e.z-f),d.add(I(1.5,.08,.45,12883572,0,.45,0)),d.add(I(1.5,.4,.07,12883572,0,.7,-.22)),[-.65,.65].forEach(g=>{d.add(I(.08,.45,.4,9206379,g,.22,0))}),n.add(d),c.posts.push({x:u,z:f,r:.9})});for(let l=0;l<7;l++){let h=l/7*Math.PI*2+.3,u=e.x+Math.cos(h)*(i+3.1),f=e.z+Math.sin(h)*(s+3.1);if(!(Hs(u,f)<2.4||!zs(u,f,1.8))){n.add(I(2,.5,1,0,Math.floor(u)+.5,.25,Math.floor(f)+.5,Ze(dt.PLANKS)));for(let d=0;d<4;d++){let g=Math.floor(u)+.5+(d-1.5)*.45,M=Math.floor(f)+.5+(d%2?.15:-.15);n.add(I(.06,.35,.06,8173679,g,.65,M)),n.add(I(.22,.22,.22,bi.flower[(l+d)%bi.flower.length],g,.9,M))}c.posts.push({x:u,z:f,r:1})}}for(let l=0;l<2;l++){let h=new qt;h.add(I(.5,.3,.7,16777215,0,.18,0)),h.add(I(.32,.3,.3,l?16777215:7317610,0,.45,.32)),h.add(I(.18,.08,.16,16098123,0,.42,.53)),[-.12,.12].forEach(u=>h.add(I(.05,.06,.03,3025462,u,.5,.47))),h.add(I(.2,.12,.2,15658734,0,.32,-.38)),h.scale.setScalar(.8),n.add(h),c.ducks.push({g:h,a:l*2.5,sp:l?-.12:.09})}return c}function v1(n){let t=[],e=[],i=(u,f)=>u.toFixed(2)+","+f.toFixed(2),s=new Map,r=(u,f)=>{let d=i(u,f);return s.has(d)||(s.set(d,t.length),t.push({x:u,z:f}),e.push([])),s.get(d)},o=(u,f)=>{if(u===f)return;let d=Math.hypot(t[u].x-t[f].x,t[u].z-t[f].z);e[u].push([f,d]),e[f].push([u,d])},a=Xn.map(()=>[]);Xn.forEach((u,f)=>{a[f].push([u[0],u[1]],[u[2],u[3]])}),Xn.forEach((u,f)=>Xn.forEach((d,g)=>{if(f>=g)return;let M=u[0]===u[2],x=d[0]===d[2];if(M===x)return;let m=M?u:d,T=M?d:u,E=m[0],b=T[1];E>=Math.min(T[0],T[2])-.01&&E<=Math.max(T[0],T[2])+.01&&b>=Math.min(m[1],m[3])-.01&&b<=Math.max(m[1],m[3])+.01&&(a[f].push([E,b]),a[g].push([E,b]))}));let c=n.map(u=>{let f=null;Xn.forEach((g,M)=>{let x=g[0]===g[2],m=x?g[0]:Math.max(Math.min(g[0],g[2]),Math.min(Math.max(g[0],g[2]),u.x)),T=x?Math.max(Math.min(g[1],g[3]),Math.min(Math.max(g[1],g[3]),u.z)):g[1],E=Math.hypot(m-u.x,T-u.z);(!f||E<f.dist)&&(f={i:M,x:m,z:T,dist:E})}),a[f.i].push([f.x,f.z]);let d=r(u.x,u.z);return o(d,r(f.x,f.z)),d});a.forEach((u,f)=>{let d=Xn[f][0]===Xn[f][2];u.sort((g,M)=>d?g[1]-M[1]:g[0]-M[0]);for(let g=1;g<u.length;g++)o(r(u[g-1][0],u[g-1][1]),r(u[g][0],u[g][1]))});function l(u,f){let d=t.map(()=>1/0),g=t.map(()=>-1),M=t.map(()=>!1);for(d[u]=0;;){let m=-1;for(let T=0;T<t.length;T++)!M[T]&&(m<0||d[T]<d[m])&&(m=T);if(m<0||d[m]===1/0||m===f)break;M[m]=!0,e[m].forEach(([T,E])=>{d[m]+E<d[T]&&(d[T]=d[m]+E,g[T]=m)})}let x=[];for(let m=f;m>=0;m=g[m])x.unshift(t[m]);return x.length&&x[0]===t[u]?x:[t[f]]}function h(u,f,d){let g=0,M=1/0,x=d?new Set(c):null;return t.forEach((m,T)=>{if(x&&x.has(T))return;let E=Math.hypot(m.x-u,m.z-f);E<M&&(M=E,g=T)}),g}return{nodes:t,doorNodes:c,path:l,nearest:h}}var nc=[[0,4870304,12633855,.8,1.35,1],[5,5199526,12633855,.8,1.35,1],[6,16305590,16763296,1.3,1.1,.4],[7.5,12575733,16774374,2.3,1.55,0],[16.5,12575733,16774374,2.3,1.55,0],[18,16236724,16760470,1.3,1.1,.4],[19.2,5265318,12633855,.8,1.35,1],[24,4870304,12633855,.8,1.35,1]];function Bd(n){let t=0;for(;t<nc.length-2&&nc[t+1][0]<=n;)t++;let e=nc[t],i=nc[t+1],s=(n-e[0])/(i[0]-e[0]||1),r=new ae(e[1]),o=new ae(i[1]),a=new ae(e[2]),c=new ae(i[2]);return{sky:r.lerp(o,s),sun:a.lerp(c,s),power:Fn(e[3],i[3],s),amb:Fn(e[4],i[4],s),night:Fn(e[5],i[5],s)}}function E1(n,t){t=t||{};let e=(n.clientWidth||innerWidth)<(n.clientHeight||innerHeight)*.9?"port":"land";Cd(e),tu=[],oc=[];let i=(()=>{let p=/[?&]hour=([\d.]+)/.exec(location.search);return p?Number(p[1]):null})();i==null&&t.timeMode==="day"&&(i=11),i==null&&t.timeMode==="night"&&(i=22);let s=new fo({antialias:!0});s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.shadowMap.enabled=!0,s.shadowMap.type=qa,s.domElement.className="village-3d",n.appendChild(s.domElement);let r=new po;r.fog=new Ua(12575733,320,760);let o=new fn(26,1,.5,1400),a=new Qa(o,s.domElement);a.enableDamping=!0,a.dampingFactor=.08,a.minDistance=18,a.maxDistance=520,a.minPolarAngle=.15,a.maxPolarAngle=1.32,a.target.set(0,0,1.5),a.screenSpacePanning=!1,a.rotateSpeed=.7,a.panSpeed=1.1,a.keyPanSpeed=22,a.touches={ONE:yi.PAN,TWO:yi.DOLLY_PAN};{let p=s.domElement,_=new Map,v=null,C=!1,F=new U,V=new Us,y=new U,N=new U,nt=()=>{let ot=Array.from(_.values());return{a:ot[0],b:ot[1],mx:(ot[0].x+ot[1].x)/2,my:(ot[0].y+ot[1].y)/2,d:Math.hypot(ot[1].x-ot[0].x,ot[1].y-ot[0].y),ang:Math.atan2(ot[1].y-ot[0].y,ot[1].x-ot[0].x)}};p.addEventListener("pointerdown",ot=>{if(!(C||ot.pointerType!=="touch"))if(ot.isPrimary&&(_.clear(),v=null),_.set(ot.pointerId,{x:ot.clientX,y:ot.clientY}),_.size===2){ot.stopImmediatePropagation();let St=Array.from(_.entries()).find(([le])=>le!==ot.pointerId);if(St){C=!0;try{p.dispatchEvent(new PointerEvent("pointerup",{pointerId:St[0],pointerType:"touch",isPrimary:!0,clientX:St[1].x,clientY:St[1].y,bubbles:!0}))}catch{}C=!1}let Bt=nt();v={last:Bt,moved:0,mode:"",y0a:Bt.a.y,y0b:Bt.b.y,x0:Bt.mx,d0:Bt.d}}else _.size>2&&ot.stopImmediatePropagation()},{capture:!0}),p.addEventListener("pointermove",ot=>{if(C||ot.pointerType!=="touch"||!_.has(ot.pointerId)||(_.get(ot.pointerId).x=ot.clientX,_.get(ot.pointerId).y=ot.clientY,!v||_.size<2)||(ot.stopImmediatePropagation(),!a.enabled))return;let St=nt(),Bt=v.last;if(v.moved+=Math.hypot(St.mx-Bt.mx,St.my-Bt.my)+Math.abs(St.d-Bt.d),!v.mode&&v.moved>22){let le=St.a.y-v.y0a,xe=St.b.y-v.y0b,ze=(le+xe)/2,mn=le*xe>0&&Math.min(Math.abs(le),Math.abs(xe))>.3*Math.max(Math.abs(le),Math.abs(xe));v.mode=mn&&Math.abs(St.mx-v.x0)<Math.abs(ze)*.7&&Math.abs(St.d-v.d0)<Math.max(24,Math.abs(ze)*.6)?"tilt":"free"}if(F.copy(o.position).sub(a.target),v.mode==="tilt")V.setFromVector3(F),V.phi=Math.max(a.minPolarAngle,Math.min(a.maxPolarAngle,V.phi-(St.my-Bt.my)*.006)),F.setFromSpherical(V),o.position.copy(a.target).add(F);else if(v.mode==="free"){let le=St.ang-Bt.ang;le>Math.PI&&(le-=Math.PI*2),le<-Math.PI&&(le+=Math.PI*2),F.applyAxisAngle(We.DEFAULT_UP,le);let xe=Math.max(a.minDistance,Math.min(a.maxDistance,F.length()*(Bt.d/Math.max(1,St.d))));F.setLength(xe),o.position.copy(a.target).add(F),o.getWorldDirection(N),N.y=0,N.normalize(),y.crossVectors(N,o.up).normalize();let ze=2*xe*Math.tan(o.fov*Math.PI/360)/(p.clientHeight||innerHeight);c.copy(y).multiplyScalar(-(St.mx-Bt.mx)*ze).addScaledVector(N,(St.my-Bt.my)*ze*1.4),a.target.add(c),o.position.add(c)}v.last=St,a.update()},{capture:!0});let rt=ot=>{C||ot.pointerType!=="touch"||(v&&_.has(ot.pointerId)&&ot.stopImmediatePropagation(),_.delete(ot.pointerId),_.size<2&&(v=null))};p.addEventListener("pointerup",rt,{capture:!0}),p.addEventListener("pointercancel",rt,{capture:!0});let Lt=ot=>{ot.pointerType==="touch"&&ot.target!==p&&(_.delete(ot.pointerId),_.size<2&&(v=null))};window.addEventListener("pointerup",Lt,!0),window.addEventListener("pointercancel",Lt,!0)}s.domElement.tabIndex=0,s.domElement.style.outline="none",a.listenToKeyEvents(s.domElement);let c=new U,l=new U,h=new U;function u(p,_){o.getWorldDirection(h),h.y=0,h.normalize(),l.crossVectors(h,o.up).normalize();let v=o.position.distanceTo(a.target)*.0016;c.copy(l).multiplyScalar(p*v).addScaledVector(h,-_*v),a.target.add(c),o.position.add(c)}s.domElement.addEventListener("wheel",p=>{!p.ctrlKey&&p.deltaMode===0&&(Math.abs(p.deltaX)>.01||Math.abs(p.deltaY)<40)&&(p.preventDefault(),p.stopImmediatePropagation(),u(p.deltaX,p.deltaY))},{capture:!0,passive:!1});function f(){let p=a.target,_=Sn.w/2,v=Sn.d/2,C=Math.max(-_,Math.min(_,p.x)),F=Math.max(-v,Math.min(v,p.z));(C!==p.x||F!==p.z||p.y!==0)&&(c.set(C-p.x,-p.y,F-p.z),p.add(c),o.position.add(c))}a.addEventListener("change",f);let d=new Ao(16777215,12048288,1);r.add(d);let g=new Co(16777215,1.5);g.castShadow=!0,g.shadow.mapSize.set(2048,2048),Object.assign(g.shadow.camera,{left:-Sn.a-6,right:Sn.a+6,top:Sn.b+10,bottom:-Sn.b-10,near:1,far:260}),g.shadow.bias=-6e-4,g.shadow.normalBias=.03,r.add(g),r.add(g.target);let M=[],x=new Kn({uniforms:{top:{value:new ae(9356778)},bottom:{value:new ae(14216952)}},vertexShader:"varying float vY; void main(){ vY = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 bottom; varying float vY; void main(){ float k = smoothstep(-0.15, 0.75, vY); gl_FragColor = vec4(mix(bottom, top, k), 1.0); }",side:En,depthWrite:!1,fog:!1}),m=new Pt(new pn(480,24,14),x);m.renderOrder=-1,r.add(m);let T=new Pt(new ke(7,7,7),new Je({color:16771496,fog:!1})),E=new Pt(new ke(5,5,5),new Je({color:16052735,fog:!1}));r.add(T,E);let b=new Fe,G=[];for(let p=0;p<700;p++){let _=Math.random()*Math.PI*2,v=Math.random()*1.55;G.push(Math.cos(_)*Math.sin(v)*450,Math.cos(v)*450+20,Math.sin(_)*Math.sin(v)*450)}b.setAttribute("position",new pe(G,3));let L=new Cs(b,new os({color:16777215,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1}));r.add(L);let D=[];for(let p=0;p<6;p++){let _=new qt,v=new ve({color:16777215,transparent:!0,opacity:.92});for(let C=0;C<5;C++){let F=new Pt(new ke(kt(3,6),1.5,kt(3,5)),v);F.position.set(C*2.6-5,0,kt(-1.5,1.5)),_.add(F)}_.position.set(kt(-90,90),kt(34,46),kt(-90,-40)),_.userData.speed=kt(.6,1.4),_.userData.mat=v,D.push(_),r.add(_)}let z=new qt;z.mat=new ve({color:16777215,transparent:!0,opacity:.9,fog:!1});for(let p=0;p<11;p++){let _=p/11*Math.PI*2+kt(-.15,.15),v=Lr(_)+kt(1,7),C=[];for(let V=0;V<5;V++){let y=new ke(Math.round(kt(2,5)),1,Math.round(kt(2,4)));y.translate(Math.round(V*2.2-4.4),0,Math.round(kt(-1,1))),C.push(y)}let F=new Pt(tc(C,!1),z.mat);C.forEach(V=>V.dispose()),F.position.set(Math.cos(_)*v,kt(-9,-3),-Math.sin(_)*v),F.rotation.y=_+Math.PI/2,F.scale.setScalar(kt(.9,1.5)),z.add(F)}r.add(z);let A=[];[{t:Math.PI*.97,gap:9,r:4.5,y:-3,deco:(_,v,C)=>{Ar(_,-1,1,-1,"oak",v),Ar(_,2,1,1,"pine",v),_.set(-2,1,2,Rt.LEAF_M),_.plant(.5,1,2.5,dt.FL_PINK)}},{t:.06,gap:10,r:4,y:-2,deco:(_,v,C)=>{for(let F=0;F<18;F++){let V=v()*6.28,y=Math.sqrt(v())*3;_.plant(Math.floor(Math.cos(V)*y)+.5,1,Math.floor(Math.sin(V)*y)+.5,[dt.FL_PINK,dt.FL_WHITE,dt.FL_YELLOW,dt.FL_BLUE][F%4],.9)}C(I(2,.25,.6,0,.5,1.5,-.7,Ze(dt.PLANKS))),C(I(2,.6,.15,0,.5,1.85,-1,Ze(dt.PLANKS))),[-.35,1.35].forEach(F=>C(I(.2,.5,.6,0,F,1.25,-.7,Ze(dt.LOG))))}},{t:Math.PI*.62,gap:7,r:2.5,y:4.5,deco:(_,v)=>{Ar(_,0,1,0,"pine",v),_.set(1,1,1,Rt.MOSSY)}},{t:-Math.PI*.3,gap:8,r:2.3,y:2.2,deco:(_,v,C)=>{[[0,0,15231594],[1,1,16757611]].forEach(([F,V,y])=>{C(I(.35,.6,.35,16774888,F+.5,1.3,V+.5)),C(I(.9,.35,.9,y,F+.5,1.75,V+.5))}),_.set(-1,1,0,Rt.LEAF_G)}}].forEach((_,v)=>{let C=qh(31+v*7),F=_.r,V=Math.ceil(F)+2,y=new Lo(-V,-Math.ceil(F*2.4)-3,-V,V*2,Math.ceil(F*2.4)+16,V*2);for(let Lt=-V;Lt<V;Lt++)for(let ot=-V;ot<V;ot++){let St=Math.hypot(Lt+.5,ot+.5)/F;if(St>1)continue;let Bt=-Math.round(1+F*1.9*Math.pow(1-St,.7)+C()*1.2);for(let le=Bt;le<1;le++)y.set(Lt,le,ot,le===0?Rt.GRASS:le>-3?Rt.DIRT:Rt.STONE)}let N=new qt;_.deco(y,C,Lt=>N.add(Lt));let nt=y.build();N.add(nt.solid,nt.water,nt.plants);let rt=Lr(_.t)+_.r+_.gap;N.position.set(Math.cos(_.t)*rt,_.y,-Math.sin(_.t)*rt),N.userData.y0=_.y,N.userData.ph=v*1.7,r.add(N),A.push(N)});let S=(()=>{let p=document.createElement("canvas");p.width=p.height=64;let _=p.getContext("2d"),v=_.createRadialGradient(32,32,0,32,32,32);v.addColorStop(0,"rgba(255,255,255,0.85)"),v.addColorStop(.3,"rgba(255,255,255,0.22)"),v.addColorStop(1,"rgba(255,255,255,0)"),_.fillStyle=v,_.fillRect(0,0,64,64),_.fillStyle="#ffffff",_.beginPath();for(let F=0;F<10;F++){let V=F/10*Math.PI*2-Math.PI/2,y=F%2?8:20;_.lineTo(32+Math.cos(V)*y,32+Math.sin(V)*y)}_.closePath(),_.fill();let C=new dn(p);return C.colorSpace=Le,C})(),k=(()=>{let p=document.createElement("canvas");p.width=p.height=32;let _=p.getContext("2d");_.fillStyle="#ffffff",_.beginPath();for(let C=0;C<8;C++){let F=C/8*Math.PI*2,V=C%2?2.5:15;_.lineTo(16+Math.cos(F)*V,16+Math.sin(F)*V)}_.closePath(),_.fill();let v=new dn(p);return v.colorSpace=Le,v})(),tt=[0,1,2].map(p=>{let _=[],v=[],C=new ae,F=[16773544,16762076,14273791,12905727];for(let N=0;N<34;N++){let nt=Math.random()*Math.PI*2,rt=.15+Math.random()*1.2;_.push(Math.cos(nt)*Math.sin(rt)*440,Math.cos(rt)*440+20,Math.sin(nt)*Math.sin(rt)*440),C.set(F[(N+p)%4]),v.push(C.r,C.g,C.b)}let V=new Fe;V.setAttribute("position",new pe(_,3)),V.setAttribute("color",new pe(v,3));let y=new Cs(V,new os({size:11+p*3,map:S,vertexColors:!0,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,fog:!1}));return y.userData={base:0,ph:p*2.1},r.add(y),y}),H=new rs(new Vi({map:(()=>{let p=document.createElement("canvas");p.width=128,p.height=16;let _=p.getContext("2d"),v=_.createLinearGradient(0,0,128,0);return v.addColorStop(0,"rgba(255,255,255,0)"),v.addColorStop(1,"rgba(255,248,220,1)"),_.fillStyle=v,_.beginPath(),_.moveTo(0,8),_.lineTo(120,4),_.arc(120,8,4,-Math.PI/2,Math.PI/2),_.closePath(),_.fill(),new dn(p)})(),transparent:!0,opacity:0,depthWrite:!1,fog:!1}));H.scale.set(36,4.5,1),r.add(H);let W={t:-1,wait:6,from:new U,dir:new U},q=new qt;r.add(q);let Y=qh(5),xt=new We,j=Math.ceil(Sn.a)+2,Mt=Math.ceil(Sn.b)+2,at=new Lo(-j,-26,-Mt,j*2,54,Mt*2),Wt=p=>(p[0]===p[2]?Math.abs(p[3]-p[1]):Math.abs(p[2]-p[0]))>=40,Zt=(p,_)=>Xn.some(v=>{let[C,F,V,y]=v,N=(Wt(v)?Pd:s1)/2;return p>=Math.min(C,V)-N&&p<=Math.max(C,V)+N&&_>=Math.min(F,y)-N&&_<=Math.max(F,y)+N}),Ee=(p,_)=>{let v=Math.hypot((p-ie.x)/(ie.rx+2.6),(_-ie.z)/(ie.rz+2.6));return Math.abs(v-1)*(ie.rx+2.6)<.8},mt=(p,_)=>Math.sin(p*.83+_*.37)*Math.cos(_*.71-p*.29)+.5*Math.sin(p*1.9-_*1.3),Ct=(p,_)=>{let v=0,C=-1;return rc(p,_)<1?{h:0,i:-1}:(ls.forEach(([F,V,y,N],nt)=>{let rt=Math.hypot(p-F,_-V);if(rt<y){let Lt=N*Math.pow(1-rt/y,1.1)*(.88+.12*mt(p,_))+(rt/y<.9?.8*mt(p*1.7,_*1.7):0);Lt>v&&(v=Lt,C=nt)}}),{h:v,i:C})},Xt=(p,_)=>1.4+1.3*Math.min(1,Math.hypot(p-Nn.x,_-Nn.z)/22),Et=new Map;for(let p=-j;p<j;p++)for(let _=-Mt;_<Mt;_++){let v=p+.5,C=_+.5;if(!zs(v,C,.2))continue;let F=Math.round(In(v,C)),V="grass",y=Ct(v,C);if(y.h>F+.6){let rt=ls[y.i][3];F=Math.max(F,Math.round(y.h-.2)),V=F>rt*(.58+.08*mt(v*2,C*2))?"snow":F>rt*.22?"rock":"grass"}let N=Math.max(0,1-Math.hypot(v,C)/Lr(Math.atan2(C,v))),nt=-1-Math.round(2+17*Math.pow(N,.55)+(Y()-.5)*2.4);for(let rt=nt;rt<F;rt++){let Lt=F-1-rt;if(F>=ks.h&&rc(v,C)<=0&&rt>=0&&Lt>0){at.set(p,rt,_,Y()<.7?Rt.BRICK:Y()<.5?Rt.MOSSY:Rt.COBBLE);continue}let St=Lt===0?V==="snow"?Rt.SNOW:V==="rock"?Y()<.2?Rt.MOSSY:Y()<.12?Rt.GRAVEL:Rt.STONE:Rt.GRASS:Lt<3&&V==="grass"?Rt.DIRT:rt<nt+3?Y()<.55?Rt.DEEP:Rt.STONE:Y()<.12?Rt.CLAY:Y()<.08?Rt.GRAVEL:Rt.STONE;at.set(p,rt,_,St)}if(V==="grass"&&at.tint.set(at.idx(p,F-1,_),.94+.08*Math.sin(v*.21+C*.13)*Math.cos(C*.17-v*.05)+Y()*.03),Et.set(p+","+_,F),F<=0){let rt=Hs(v,C),Lt=Xt(v,C);if(Ei(v,C,0)||rt<Lt/2){let ot=Ei(v,C,-2.6)?3:Ei(v,C,-1.2)?2:1;for(let St=1;St<=ot;St++)at.set(p,-St,_,Rt.WATER);at.set(p,-ot-1,_,Rt.SAND),at.set(p,-ot-2,_,Rt.SAND),Et.set(p+","+_,-1);continue}if((Ei(v,C,1.2)||rt<Lt/2+.9)&&!Zt(v,C)){at.set(p,-1,_,Rt.SAND),at.set(p,-2,_,Rt.SAND);continue}}Oo(v,C)?at.set(p,F-1,_,Rt.BRICK):(Zt(v,C)||Ee(v,C))&&at.set(p,F-1,_,Rt.PATH)}let jt=(p,_)=>{let v=Et.get(Math.floor(p)+","+Math.floor(_));return v==null?0:v},re=[];{let p=Nn,_=-p.dz,v=p.dx,C=p.r*.95,F=new Set;for(let y=C;y<p.r+2;y+=.4)for(let N=-1.4;N<=1.4;N+=.4){let nt=Math.floor(p.x+p.dx*y+_*N),rt=Math.floor(p.z+p.dz*y+v*N),Lt=nt+","+rt;if(F.has(Lt)||!Et.has(Lt))continue;F.add(Lt);let ot=Et.get(Lt);for(let St=-1;St<ot;St++)at.set(nt,St,rt,Rt.AIR);at.set(nt,-1,rt,Rt.WATER),at.set(nt,-2,rt,Rt.WATER),at.set(nt,-3,rt,Rt.SAND),Et.set(Lt,-1)}let V=new Map;for(let y=C;y>-.6;y-=.3)for(let N=-1.2;N<=1.2;N+=.35){let nt=Math.floor(p.x+p.dx*y+_*N),rt=Math.floor(p.z+p.dz*y+v*N),Lt=nt+","+rt;if(F.has(Lt)||V.has(Lt)||!Et.has(Lt))continue;let ot=Et.get(Lt),St=C-y,Bt=Math.min(ot-2,Math.floor(St/.95)*2);if(!(Bt<0)){V.set(Lt,Bt);for(let le=Bt+1;le<ot;le++)at.set(nt,le,rt,Rt.AIR);at.set(nt,Bt,rt,Rt.WATER),at.set(nt,Bt-1,rt,Rt.WATER),at.set(nt,Bt-2,rt,Rt.STONE),Et.set(Lt,Bt+1),[[_,v],[-_,-v]].forEach(([le,xe])=>{let ze=Math.floor(p.x+p.dx*y+_*N+le*1.6),mn=Math.floor(p.z+p.dz*y+v*N+xe*1.6),ei=ze+","+mn;if(V.has(ei)||F.has(ei)||!Et.has(ei))return;let Ai=Et.get(ei),Ri=Math.min(Ai,Bt+3);if(Ri<Ai){for(let ps=Ri;ps<Ai;ps++)at.set(ze,ps,mn,Rt.AIR);Et.set(ei,Ri)}at.set(ze,Ri-1,mn,Y()<.6?Rt.GRASS:Rt.MOSSY),Y()<.35&&at.plant(ze+.5,Ri,mn+.5,Y()<.6?dt.TUFT:Y()<.5?dt.FL_BLUE:dt.FL_WHITE,.8)})}}for(let y=-1;y<=1;y++)re.push([Math.floor(p.x+p.dx*(C+.3)+_*y)+.5,Math.floor(p.z+p.dz*(C+.3)+v*y)+.5])}{let p=qh(77);Et.forEach((_,v)=>{let[C,F]=v.split(",").map(Number),V=Ct(C+.5,F+.5);V.i<0||_<1||_>ls[V.i][3]*.32||p()>.035||Math.hypot(C-Nn.x,F-Nn.z)<Nn.r*.9&&Math.abs((C-Nn.x)*-Nn.dz+(F-Nn.z)*Nn.dx)<3||at.get(C,_,F)||Ar(at,C,_,F,"pine",p)})}let Kt=y1(q,!0),ge=-1+.88,ut=new Pt(new Xe(1,1,.1,32),Qh);ut.scale.set(ie.rx,1,ie.rz),ut.position.set(ie.x,ge,ie.z),q.add(ut);{let p=new ve({map:hi(dt.LILY),transparent:!0,alphaTest:.5,side:vn});[[-4.5,1],[3.5,-1.6],[5.2,1.2],[-2.6,-1.4]].forEach(([_,v])=>{let C=new Pt(new ss(1,1),p);C.rotation.x=-Math.PI/2,C.rotation.z=_,C.position.set(ie.x+_*ie.rz/4,ge+.02,ie.z+v*ie.rz/4),q.add(C)})}for(let p=0;p<14;p++){let _=Y()*6.28,v=ie.x+Math.cos(_)*(ie.rx+.7),C=ie.z+Math.sin(_)*(ie.rz+.7);at.plant(v,0,C,dt.REED,1.1)}let bt=(()=>{let p=new qt;p.position.set(Math.floor(ie.x)+.5,0,Math.floor(ie.z)+.5),q.add(p);let _=new ve({map:hi(dt.COBBLE)}),v=new ve({map:hi(dt.WATER),transparent:!0,opacity:.85});for(let N=-1;N<=1;N++)for(let nt=-1;nt<=1;nt++)(N||nt)&&p.add(I(1,.5,1,0,N,-.25+.1,nt,_));p.add(I(1,1.6,1,0,0,.3,0,_)),p.add(I(1.6,.3,1.6,0,0,1.15,0,_));let C=I(1.2,.08,1.2,0,0,1.33,0,v);p.add(C);let F=new Je({color:14677247,transparent:!0,opacity:.85,depthWrite:!1}),V=new Pt(new ke(.18,.8,.18),F);V.position.y=1.75,p.add(V);let y=[];for(let N=0;N<14;N++){let nt=new Pt(new ke(.1,.1,.1),F);p.add(nt),y.push({m:nt,a:N/14*Math.PI*2,t:N/14})}return{g:p,jet:V,drops:y,rimR:1.3}})(),O=M1(q,Y,!0),Yt=[],At=(p,_)=>Yt.some(v=>p>v.x0-1&&p<v.x1+1&&_>v.z0-1&&_<v.z1+1),Ot=(p,_)=>!At(p,_)&&zs(p,_,2.2)&&!Ei(p,_,1.5)&&!yd(p,_,.8)&&!Gh(p,_,.6)&&Hs(p,_)>2.4&&!Td(p,_)&&!Oo(p,_)&&!Xn.some(([v,C,F,V])=>p>=Math.min(v,F)-vi-.3&&p<=Math.max(v,F)+vi+.3&&_>=Math.min(C,V)-vi-.3&&_<=Math.max(C,V)+vi+.3)&&!rn.some(([v,C])=>Math.abs(p-v)<3.6&&Math.abs(_-C)<3.8)&&!(Math.abs(p-Pn[0])<6&&Math.abs(_-Pn[1])<5.4)&&Ct(p,_).h<.5,Dt=(t.houses||[]).findIndex(p=>p.id==="love"),Qt=(p,_)=>{if(Ln)return yd(p,_,1.2);if(Dt<0||!rn[Dt])return!1;let[v,C]=rn[Dt];return Math.abs(p-v)<7&&_>C+2.5&&_<C+12||Math.abs(_-C)<3.5&&Math.abs(p-v)<8.5||Math.abs(p-v)<3.5&&_<C&&_>C-8};{let v=(V,y)=>Et.get(V+","+y),C=(V,y)=>{for(let N=V-1;N<=V+11;N++)for(let nt=y-1;nt<=y+7;nt++)if(v(N,nt)!==0||!Ot(N+.5,nt+.5)||Qt(N+.5,nt+.5))return!1;return!0},F=[];for(let V=-Mt+4;V<Mt-7-4;V+=2)for(let y=-j+4;y<j-11-4;y+=2)C(y,V)&&F.push([y,V]);F.sort((V,y)=>y[1]-V[1]||Math.abs(V[0])-Math.abs(y[0]));for(let[V,y]of F){if(Yt.length>=2)break;if(Yt.some(St=>Math.hypot(St.x0-V,St.z0-y)<18)||!C(V,y))continue;Yt.push({x0:V,z0:y,x1:V+11,z1:y+7});let N=[dt.WHEAT,dt.CARROT,dt.SPROUT];for(let St=V+1;St<V+11-1;St++)for(let Bt=y+1;Bt<y+7-1;Bt++){if(Bt===y+Math.floor(3.5)){at.set(St,-1,Bt,Rt.WATER);continue}at.set(St,-1,Bt,Rt.FARM),at.tint.set(at.idx(St,-1,Bt),1),at.plant(St+.5,0,Bt+.5,N[(Bt<y+7/2?0:1)+(St>V+11-4?1:0)],.95)}let nt=Ze(dt.PLANKS),rt=Ze(dt.LOG),Lt=V+Math.floor(11/2),ot=(St,Bt,le,xe)=>{let ze=Math.hypot(le-St,xe-Bt),mn=Math.round(ze);for(let ei=0;ei<=mn;ei++){let Ai=St+(le-St)*ei/mn,Ri=Bt+(xe-Bt)*ei/mn;if(Bt===xe&&Bt===y+7&&Math.abs(Ai-Lt-.5)<.6)continue;q.add(I(.25,1,.25,0,Ai,.5,Ri,rt));let ps=new We;ps.position.set(Ai,0,Ri),ps.userData.post=.7,q.add(ps),ei<mn&&!(Bt===xe&&Bt===y+7&&Math.abs(Ai+(le-St)/mn/2-Lt-.5)<1)&&[.4,.8].forEach(tp=>{let ep=I(Bt===xe?1:.1,.1,Bt===xe?.1:1,0,Ai+(le-St)/mn/2,tp,Ri+(xe-Bt)/mn/2,nt);q.add(ep)})}};ot(V,y,V+11,y),ot(V+11,y,V+11,y+7),ot(V,y+7,V+11,y+7),ot(V,y,V,y+7),[[V,y],[V+11,y],[V,y+7],[V+11,y+7]].forEach(([St,Bt])=>{let le=Kh();le.position.set(St,1.2,Bt),q.add(le)})}}[[jn.z1+.4,0],[jn.z0-.6,ks.h]].forEach(([p,_])=>[-1,1].forEach(v=>{let C=jn.x+v*(jn.hw+.7);q.add(I(.25,1.4,.25,0,C,_+.7,p,Ze(dt.LOG)));let F=Kh();F.position.set(C,_+1.6,p),q.add(F)}));let Vt=[],P=(p,_)=>{let v=p+","+_,C=Et.get(v);C!=null&&(at.set(p,C-1,_,Rt.DIRT),at.set(p,C,_,Rt.GRASS),at.tint.set(at.idx(p,C,_),.97+Y()*.05),Et.set(v,C+1))},w=(p,_,v)=>{let C=Math.floor(p),F=Math.floor(_);if(!Ot(C+.5,F+.5)||Qt(C+.5,F+.5)||Vt.some(([N,nt])=>Math.hypot(N-C,nt-F)<3.2))return!1;let V=v||(Y()<.1?"cherry":["oak","oak","birch","mint","pine"][Y()*5|0]);Ar(at,C,Et.get(C+","+F)||0,F,V,Y);let y=new We;return y.position.set(C+.5,0,F+.5),y.userData.post=1.2,q.add(y),Vt.push([C,F]),!0};for(let _=0;_<20;_++){let v=(_+.5+(Y()-.5)*.35)/20*Math.PI*2,C=Lr(v)-5.5-Y()*2,F=Math.cos(v)*C,V=Math.sin(v)*C,y=2.5+Y()*1.5;if(Ot(F,V)&&!Qt(F,V)){for(let rt=Math.floor(F-y);rt<=F+y;rt++)for(let Lt=Math.floor(V-y);Lt<=V+y;Lt++)Math.hypot(rt+.5-F,(Lt+.5-V)*1.2)<y&&Ot(rt+.5,Lt+.5)&&!Qt(rt+.5,Lt+.5)&&P(rt,Lt);let nt=new We;nt.position.set(F,0,V),nt.userData.post=y,q.add(nt)}let N=2+(Y()*3|0);for(let nt=0;nt<N*4&&N>0;nt++){let rt=Y()*6.28,Lt=Y()*3.4;w(F+Math.cos(rt)*Lt,V+Math.sin(rt)*Lt)&&N--}for(let nt=0;nt<3;nt++){let rt=Y()*6.28,Lt=2.2+Y()*2,ot=Math.floor(F+Math.cos(rt)*Lt),St=Math.floor(V+Math.sin(rt)*Lt);if(!Ot(ot+.5,St+.5)||Qt(ot+.5,St+.5)||at.get(ot,jt(ot,St),St))continue;let Bt=jt(ot,St);at.set(ot,Bt,St,Y()<.5?Rt.LEAF_G:Rt.LEAF_M),Y()<.4&&at.plant(ot+.5,Bt+1,St+.5,[dt.FL_PINK,dt.FL_WHITE,dt.FL_YELLOW][Y()*3|0],.8)}}for(let p=0,_=0;p<600&&_<10;p++)w((Y()-.5)*Sn.w,(Y()-.5)*Sn.d,["oak","birch","mint"][Y()*3|0])&&_++;{let p=[dt.FL_PINK,dt.FL_WHITE,dt.FL_YELLOW,dt.FL_BLUE,dt.FL_LAV];for(let _=0,v=0;_<6e3&&v<520;_++){let C=(Y()-.5)*(Sn.w-4),F=(Y()-.5)*(Sn.d-4);if(!Ot(C,F)||Qt(C,F))continue;let V=Math.floor(C),y=Math.floor(F),N=jt(V,y);at.get(V,N,y)||(at.plant(V+.5,N,y+.5,Y()<.32?p[Y()*p.length|0]:dt.TUFT,.8+Y()*.3),v++)}for(let _=0,v=0;_<800&&v<9;_++){let C=Math.floor((Y()-.5)*(Sn.w-8)),F=Math.floor((Y()-.5)*(Sn.d-8));if(!Ot(C+.5,F+.5)||Qt(C+.5,F+.5))continue;let V=jt(C,F),y=Y()<.5?Rt.COBBLE:Rt.MOSSY;at.set(C,V,F,y),Y()<.6&&at.set(C+1,V,F,Rt.STONE),Y()<.4&&at.set(C,V+1,F,y);let N=new We;N.position.set(C+1,0,F+.5),N.userData.post=1.2,q.add(N),v++}}{let p=at.build(.88);q.add(p.solid,p.water,p.plants)}let Q=[];{let p=new Je({color:16777215,transparent:!0,opacity:.5,depthWrite:!1});re.forEach(([_,v])=>{for(let C=0;C<4;C++){let F=new Pt(new ke(.5,.5,.5),p.clone());F.position.set(_+kt(-.6,.6),0,v+kt(0,1.2)),q.add(F),Q.push({m:F,t:Math.random(),x:F.position.x,z:F.position.z})}})}let pt=[0,1,2].map(p=>{let _=[];for(let F=0;F<9;F++){let V=Math.random()*6.283,y=Math.sqrt(Math.random())*.85;_.push(ie.x+Math.cos(V)*ie.rx*y,ge+.15,ie.z+Math.sin(V)*ie.rz*y)}for(let F=0;F<7;F++){let V=Kt.curve.getPointAt(Math.random());_.push(V.x+(Math.random()-.5)*1.2,ge+.12,V.z+(Math.random()-.5)*1.2)}let v=new Fe;v.setAttribute("position",new pe(_,3));let C=new Cs(v,new os({size:.9,map:k,color:[16777215,16774072,16766698][p],transparent:!0,opacity:0,depthWrite:!1}));return C.userData={base:.6,ph:p*2.1},q.add(C),C}),vt=[];Xn.forEach(([p,_,v,C])=>[.3,.72].forEach(F=>{let V=p===v,y=Fn(p,v,F)+(V?vi+.6:0),N=Fn(_,C,F)+(V?0:vi+.6);rn.some(([nt,rt])=>Math.abs(y-nt)<3.6&&Math.abs(N-rt)<4.2)||Math.abs(y-Pn[0])<6.2&&Math.abs(N-Pn[1])<6||Ei(y,N,1.5)||Qt(y,N)||!zs(y,N,2)||Gh(y,N,.5)||Hs(y,N)<2||Oo(y,N)||Td(y,N)||vt.push([y,N])})),vt.slice(0,7).forEach(([p,_],v)=>{let C=f1();if(C.position.set(p,In(p,_),_),C.userData.post=.3,q.add(C),v%2===0&&M.length<3){let F=new Ro(16763255,0,12,1.6);F.position.set(p,In(p,_)+2.7,_),q.add(F),M.push(F)}});let B=[],et=[];(t.houses||[]).forEach((p,_)=>{if(!rn[_])return;let v=p.id==="love"?a1():p.special==="arcade"?c1():p.special==="store"?l1():Md(p,!1);v.position.set(rn[_][0],In(rn[_][0],rn[_][1]),rn[_][1]),v.rotation.y=Ir[_]||0,v.userData.face=Ir[_]||0,v.userData.id=p.id,q.add(v),B.push(v);let C=v.userData.face;et.push({x:rn[_][0]+Math.sin(C)*v.userData.doorZ,z:rn[_][1]+Math.cos(C)*v.userData.doorZ})});let Z=u1(q,Ln&&Ir[Ln.house]||0),ht=Md(null,!0);ht.position.set(Pn[0],In(Pn[0],Pn[1]),Pn[1]),ht.userData.id="hall",q.add(ht),B.push(ht);let Nt={x:Pn[0],z:Pn[1]+ht.userData.doorZ};et.push(Nt);let $=v1(et),ft=$.doorNodes[$.doorNodes.length-1];(function(){q.updateMatrixWorld(!0);let _=new Set,v=V=>{V&&V.traverse(y=>_.add(y))};v(ut),O.ducks.forEach(V=>v(V.g)),B.forEach(V=>{v(V.userData.hinge),v(V.userData.flag),v(V.userData.bell)}),v(Z.car),v(bt.jet),bt.drops.forEach(V=>v(V.m));let C=new Map,F=[];q.traverse(V=>{if(!V.isMesh||V.isInstancedMesh||_.has(V)||V.userData.keepBatch||Array.isArray(V.material)||V.material.transparent)return;let y=V.geometry.clone();Object.keys(y.attributes).forEach(N=>{N!=="position"&&N!=="normal"&&N!=="uv"&&y.deleteAttribute(N)}),y.attributes.uv&&(y.index&&(y=y.toNonIndexed()),y.clearGroups(),y.applyMatrix4(V.matrixWorld),C.has(V.material)||C.set(V.material,[]),C.get(V.material).push(y),F.push(V))}),F.forEach(V=>V.parent.remove(V)),C.forEach((V,y)=>{let N=tc(V,!1);if(V.forEach(rt=>rt.dispose()),!N)return;let nt=new Pt(N,y);nt.castShadow=!0,nt.receiveShadow=!0,q.add(nt)})})();let _t=[],gt={her:null,him:null,home:null,kiss:0},Tt=p=>$.nodes[$.doorNodes[p]],ce={},oe=p=>ce[p]||0;function $t(p,_,v){let C=Fo(p);q.add(C.g);let F=Tt(_);return C.g.position.set(F.x+kt(-.6,.6),0,F.z+kt(0,.4)),Object.assign(C,{kind:"person",i:_t.length,home:_,path:[],speed:kt(1.35,1.75),wait:kt(0,3),t:kt(0,6),v:0,goal:"",inside:!1},v||{}),_t.push(C),C}(t.houses||[]).forEach((p,_)=>{if(!(_>=rn.length))if(p.id==="love")gt.home=_,gt.her=$t($h.her,_,{love:"her"}),gt.him=$t($h.him,_,{love:"him"});else{let v=sc[_]||sc[_%9]||sc[0];$t(v,_,{hallReg:!!v.uniform})}});let X=Object.assign(p1(),{kind:"cat",path:[],speed:1.1,wait:2,t:0,sit:!0}),Ut=Object.assign(m1(),{kind:"dog",path:[],speed:2.2,wait:1,t:0,buddy:0});{let p=$.nodes[$.doorNodes[2]],_=$.nodes[$.doorNodes[$.doorNodes.length-1]];X.g.position.set(p.x+1.5,0,p.z+.6),Ut.g.position.set(_.x+3,0,_.z+.8)}q.add(X.g,Ut.g);let ct=[0,1,2,0,1].map((p,_)=>{let v=bd(p);return v.scale.setScalar(.8),q.add(v),{g:v,t:.15+_*.16,dir:_%2?1:-1,sp:kt(.012,.022),side:kt(-.35,.35),ph:kt(0,6)}}),yt=[0,1,2,3].map(p=>{let _=bd(p);return q.add(_),{g:_,a:kt(0,6.28),r:kt(.62,.92),sp:kt(.25,.5)*(p%2?1:-1),jump:0,jx:0,jz:0}});function Gt(){let p=document.createElement("canvas");p.width=128,p.height=64;let _=p.getContext("2d");_.font="bold 34px sans-serif",_.fillStyle="#7a6a9a",_.fillText("z",18,52),_.font="bold 26px sans-serif",_.fillText("z",52,36),_.font="bold 20px sans-serif",_.fillText("z",82,22);let v=new rs(new Vi({map:new dn(p),transparent:!0,depthWrite:!1}));return v.scale.set(1.1,.55,1),v.visible=!1,q.add(v),v}X.zzz=Gt(),Ut.zzz=Gt();let Ft=Od("\u2665","#ff6f91",.9,.45);q.add(Ft);let he=new U,Be=0,Ve=[],Ce=new pn(.09,6,5);function Bn(p,_){for(let v=0;v<7;v++){let C=Math.random()*6.28,F=Math.random()*.8,V=p+Math.cos(C)*F,y=_+Math.sin(C)*F*.7;if(!Ei(V,y,-.8))continue;let N=new Pt(Ce,de(v%2?13208410:14723437));N.position.set(V,1.6+Math.random()*.6,y),q.add(N),Ve.push({m:N,vy:0,life:25})}}let Dn=[];function Dr(p,_,v){let C=new Pt(new bo(.18,.24,18),new Je({color:15399167,transparent:!0,opacity:.6,side:vn,depthWrite:!1}));C.rotation.x=-Math.PI/2,C.position.set(p,-.09,_),C.renderOrder=3,C.userData.size=v,q.add(C),Dn.push(C)}let xn=new Pt(new bo(.34,.42,24),new Je({color:15399167,transparent:!0,opacity:0,side:vn,depthWrite:!1}));xn.rotation.x=-Math.PI/2,xn.renderOrder=3,q.add(xn);let di=[16758465,14273008,16375946,11591910].map((p,_)=>{let v=g1(p);return q.add(v),{g:v,ph:_*1.7,cx:kt(-25,25),cz:kt(-15,15)}}),Vs=new Fe,Ur=[];for(let p=0;p<40;p++)Ur.push(kt(-30,30),kt(1,3),kt(-20,20));Vs.setAttribute("position",new pe(Ur,3));let Gs=new Cs(Vs,new os({color:16773792,size:.35,transparent:!0,opacity:0}));q.add(Gs);let wn=0;function Xi(){let p=new Date;return p.getHours()+p.getMinutes()/60}function Si(p){return p>=23||p<6.5?"sleep":p<7?"morning":p<11.5?"work":p<13?"lunch":p<16.5?"work":p<21?"evening":"home"}function us(p){let _=p%18,v=Math.floor(_/6),C=_%6;return{x:Nt.x+(C-2.5)*1.2+v%2*.6,z:Nt.z+1.3+v*1.1}}function Tn(p,_,v){if(p.goal=v,p.path=ru(p,_),!p.path.length){let C=$.nearest(p.g.position.x,p.g.position.z),F=$.nearest(_.x,_.z);p.path=$.path(C,F).concat([_])}}function Nr(p){let _=Tt(p),v=Ir[p]||0;return{x:_.x-Math.sin(v)*.9,z:_.z-Math.cos(v)*.9,f:v}}function pi(p){let _=Nr(p.home);p.inside=!1,p.g.visible=!0,p.g.position.set(_.x+kt(-.3,.3),0,_.z),p.g.rotation.set(0,_.f,0)}function fs(p,_){let v=Nr(p.home);Tn(p,{x:v.x,z:v.z},"in"),p.stay=_}let R=B.findIndex(p=>p.userData.alwaysLit),K=null,it=null;function st(){if(!K){K=rn.map((p,_)=>{let v=Tt(_);return[[-1.7,-.5],[1.7,-.5],[-.9,.2],[.9,.2]].map(([C,F])=>({x:v.x+C,z:v.z+F})).filter(C=>!nn(C.x,C.z,.15))}),it=[];for(let p=0;p<18;p++){let _={x:ie.x+Math.cos(p/18*6.283)*(ie.rx+2.2),z:ie.z+Math.sin(p/18*6.283)*(ie.rz+1.9)};nn(_.x,_.z,.2)||it.push(_)}}}let J=p=>p[Math.floor(Math.random()*p.length)];function It(p){st();let _=K[p.home];return _.length?J(_):Tt(p.home)}function Ht(p,_){st();let v=Math.random();if(_==="lunch"&&R>=0&&v<.6){let C=Tt(R);return{x:C.x+kt(-2.6,2.6),z:C.z+kt(0,.8)}}if(_==="lunch"&&v<.75)return us(Math.floor(kt(0,18)));if(v<.4&&it.length)return J(it);if(v<.85){let C=Tt(Math.floor(kt(0,rn.length)));return{x:C.x+kt(-1,1),z:C.z+kt(0,.5)}}return us(Math.floor(kt(0,18)))}function te(p){if(p.love==="him"||p.pair)return;let _=Si(Xi());if(p.love==="her")return ee(p,_);let v=oe(p.home)>0;if(p.helper&&oe(p.home)<p.helper){p.inside&&pi(p),Tn(p,{x:Nt.x,z:Nt.z},"leave");return}if(wn&&!v&&_!=="sleep"&&_!=="home"&&!p.helper){p.inside&&pi(p),(p.goal!=="hall"||p.path.length)&&Tn(p,us(p.i),"hall"),p.wait=kt(3,6);return}if(p.hallReg&&_==="work"&&!v&&!p.helper){if(p.inside&&pi(p),p.goal==="hallwork"){Tn(p,It(p),"work"),p.wait=kt(6,14);return}if(p.goal==="work"&&Math.random()<.5){fs(p,kt(4,8));return}Tn(p,us(p.i),"hallwork"),p.wait=kt(10,22);return}if(v||_==="work"){if(p.inside){pi(p),Tn(p,It(p),"work");return}if(p.goal==="work"){fs(p,kt(3,v?6:10));return}Tn(p,It(p),"work");return}if(_==="sleep"||_==="home"){if(p.inside){p.wait=kt(20,40);return}fs(p,kt(20,40));return}if(p.inside)pi(p);else if(Math.random()<.15){fs(p,kt(5,12));return}Tn(p,Ht(p,_),"stroll"),p.wait=kt(2,6)}function ee(p,_){let v=gt.him;if(_==="sleep"||_==="home"||Xi()>=20.5){if(fe(),p.inside){p.wait=kt(30,60);return}fs(p,kt(30,60));return}if(p.inside&&(pi(p),pi(v),v.g.position.x+=.7),p.sitting){fe(),Tn(p,Ht(p,_),"stroll"),p.wait=kt(2,5);return}if(Pe&&Math.random()<.55){Tn(p,Pe.userData.front,"swing");return}Tn(p,Ht(p,_),"stroll"),p.wait=kt(2,5)}function fe(){[gt.her,gt.him].forEach(p=>{!p||!p.sitting||(p.sitting=!1,p.g.position.set(Pe.userData.front.x+(p.love==="her"?-.4:.4),0,Pe.userData.front.z),p.g.rotation.set(0,Pe.rotation.y,0))})}function me(p){p.goal==="in"?(p.inside=!0,p.g.visible=!1,p.wait=p.stay||10):p.goal==="work"?p.wait=kt(6,12):p.goal==="swing"?(p.sitting=!0,p.wait=kt(15,30)):p.goal==="leave"&&(q.remove(p.g),_t.splice(_t.indexOf(p),1))}function ne(p,_){return be(gt.her,p,_)}function be(p,_,v){if(p.inside){if(_.inside)return!1;let Bt=Nr(_.home),le=Bt.x-_.g.position.x,xe=Bt.z-_.g.position.z,ze=Math.hypot(le,xe);if(ze<.15)return _.inside=!0,_.g.visible=!1,!1;let mn=Math.min(ze,p.speed*1.2*v);return _.g.position.x+=le/ze*mn,_.g.position.z+=xe/ze*mn,_.g.rotation.y=Math.atan2(le,xe),_.v=p.speed,!0}if(_.inside&&(pi(_),_.g.position.x+=.7),p.sitting)return _.love&&(_.sitting=!0),!1;_.sitting=!1;let C=p.g.rotation.y,F=p.g.position.x-Math.cos(C)*.72,V=p.g.position.z+Math.sin(C)*.72,y=F-_.g.position.x,N=V-_.g.position.z,nt=Math.hypot(y,N);if(nt<.05){_.v=0;let Bt=C-_.g.rotation.y;return Bt=Math.atan2(Math.sin(Bt),Math.cos(Bt)),_.g.rotation.y+=Bt*Math.min(1,v*6),!1}let rt=Math.min(p.speed*1.35,nt*4);_.v=(_.v||0)+(rt-(_.v||0))*Math.min(1,v*5);let Lt=Math.min(nt,_.v*v);_.g.position.x+=y/nt*Lt,_.g.position.z+=N/nt*Lt;let St=(nt>.35?Math.atan2(y,N):C)-_.g.rotation.y;return St=Math.atan2(Math.sin(St),Math.cos(St)),_.g.rotation.y+=St*Math.min(1,v*7),_.v>.15}{let p=Si(Xi());(p==="sleep"||p==="home")&&_t.forEach(_=>{_.inside=!0,_.g.visible=!1,_.wait=kt(5,30)})}let Te=B.filter(p=>p.userData.id!=="hall").map(p=>{let _=p.userData.size,v=p.userData.face||0,C=Math.abs(Math.sin(v))>.5;if(!_)return{x:p.position.x,z:p.position.z,hw:3.3,hd:2.6};let F=Math.cos(v)*_.cx,V=-Math.sin(v)*_.cx;return{x:p.position.x+F,z:p.position.z+V,hw:C?_.hd:_.hw,hd:C?_.hw:_.hd}}).concat([{x:Pn[0],z:Pn[1],hw:5.8,hd:4.1}]),Re=[];q.children.forEach(p=>{p.userData.post&&Re.push({x:p.position.x,z:p.position.z,r:p.userData.post})}),O.posts.forEach(p=>Re.push(p));function nn(p,_,v){return v=v||.5,!zs(p,_,2.5)||Gh(p,_,0)||Hs(p,_)<1.8&&!Kt.bridges.some(C=>Math.hypot(C.x-p,C.z-_)<2.4)||Ei(p,_,.9+v)||Te.some(C=>Math.abs(p-C.x)<C.hw+v&&Math.abs(_-C.z)<C.hd+v)?!0:Re.some(C=>Math.hypot(p-C.x,_-C.z)<C.r+v*.6)}function Se(p,_){let v=Math.ceil(Math.hypot(_.x-p.x,_.z-p.z)/.4);for(let C=1;C<=v;C++){let F=C/v;if(nn(Fn(p.x,_.x,F),Fn(p.z,_.z,F),.45))return!1}return!0}let se=(p,_,v)=>Xn.some(([C,F,V,y])=>p>=Math.min(C,V)-vi-v&&p<=Math.max(C,V)+vi+v&&_>=Math.min(F,y)-vi-v&&_<=Math.max(F,y)+vi+v),Pe=null;if(Z.blocks.forEach(p=>Te.push(p)),Z.posts.forEach(p=>Re.push(p)),gt.home!=null&&Ln&&Ln.house===gt.home){let[p,_]=Ln.swing,v=Ir[gt.home]||0;Pe=Sd(),Pe.position.set(p,In(p,_),_),Pe.rotation.y=v,q.add(Pe),Pe.userData.front={x:p+Math.sin(v)*1.25,z:_+Math.cos(v)*1.25},Te.push({x:p,z:_,hw:1.55,hd:1.55}),Te.push({x:p-Math.cos(v)*2,z:_+Math.sin(v)*2,hw:.8,hd:.8})}else if(gt.home!=null){let[p,_]=rn[gt.home],v=[[0,7.2],[0,6.4],[-2.2,7.2],[2.2,7.2],[0,8.4],[4.6,.8],[-4.6,.8],[0,-5.2]],C=(F,V)=>!zs(F,V,2.5)||Ei(F,V,1)||Te.some(y=>Math.abs(F-y.x)<y.hw+.1&&Math.abs(V-y.z)<y.hd+.1)||se(F,V,0);for(let[F,V]of v){let y=p+F,N=_+V;if([[-1.6,-.9],[1.6,-.9],[-1.6,.9],[1.6,.9],[0,0],[0,1.6],[-.5,1.6],[.5,1.6]].every(([rt,Lt])=>!C(y+rt,N+Lt))){q.children.slice().forEach(rt=>{if(rt.userData.post&&Math.abs(rt.position.x-y)<2.6&&Math.abs(rt.position.z-N)<2.2){q.remove(rt);let Lt=Re.findIndex(ot=>ot.x===rt.position.x&&ot.z===rt.position.z);Lt>=0&&Re.splice(Lt,1)}}),Pe=Sd(),Pe.position.set(y,In(y,N),N),q.add(Pe),Pe.userData.front={x:y,z:N+1.25},Te.push({x:y,z:N,hw:1.55,hd:.75});break}}}let we=[],zn=new pn(.28,8,6);function Yi(p){let _=new Pt(zn,new ve({color:16777215,transparent:!0,opacity:.75,depthWrite:!1})),v=p.userData.chimney;_.position.set(p.position.x+v.x+kt(-.1,.1),v.y,p.position.z+v.z+kt(-.1,.1)),q.add(_),we.push({m:_,life:0})}let _n=[3,6,10],Yn=document.createElement("div");Yn.className="v3d-names",n.appendChild(Yn);let Me=null,Hn=!1,kn=new Map,Qe=new U,Qn=[3877418,9067068,2038564,13208410,5914688,11039050],ti=[10934504,16165309,16111752,10738109,14273008,16368540];function Bo(p,_,v){let C=Object.assign({},p,{hair:Qn[_%Qn.length],cap:void 0,glasses:!p.glasses&&_%3===0});return p.uniform||(C.shirt=ti[(_+2)%ti.length]),C.style=v==="f"?["long","bun","twin"][_%3]:"short",C}function zd(){let p=Me&&Me.extra||{};(t.houses||[]).forEach((_,v)=>{if(_.id==="love")return;let C=_t.find(N=>N.home===v&&!N.love&&!N.helper&&!N.pair);if(!C)return;let F=_t.find(N=>N.pair===C),V=p[_.id];if(!V&&F){q.remove(F.g),_t.splice(_t.indexOf(F),1);let N=kn.get(F);N&&(N.remove(),kn.delete(F));return}if(!V)return;let y=Bo(C.baseLook||C.parts.look,v,V.g==="f"?"f":"m");if(F)F.mateG!==V.g&&(F.mateG=V.g,Ed(F,y));else{let N=$t(y,v,{pair:C,mateG:V.g});N.g.position.copy(C.g.position),N.g.position.x+=.7,N.inside=C.inside,N.g.visible=C.g.visible}})}function Hd(){let p=Me&&Me.genders||{};_t.forEach(_=>{if(_.love||_.helper||_.pair)return;let v=(t.houses||[])[_.home];if(!v)return;_.baseLook||(_.baseLook=_.parts.look);let C=p[v.id]?Nd(_.baseLook,p[v.id]):_.baseLook;C!==_.parts.look&&Ed(_,C)})}function kd(p){if(!Me)return"";if(p.love==="her")return Me.her||"namu";if(p.love==="him")return Me.him||"hunf";if(p.helper)return"";let _=(t.houses||[])[p.home];return!_||!_.pub&&!Hn?"":p.pair?Me.extra&&Me.extra[_.id]&&Me.extra[_.id].name||"":Me.people&&Me.people[_.id]||""}function Vd(){_t.forEach(p=>{let _=kd(p),v=kn.get(p);if(!_){v&&(v.remove(),kn.delete(p));return}v||(v=document.createElement("span"),Yn.appendChild(v),kn.set(p,v)),v.textContent=_})}let lc=document.createElement("div");lc.className="v3d-bubbles",n.appendChild(lc);let Or=[];function hc(p,_,v){Or.filter(F=>F.p===p).forEach(F=>{F.t=0});let C=document.createElement("div");C.className="v3d-bubble"+(v?" loud":""),C.textContent=_,lc.appendChild(C),Or.push({p,el:C,t:2.4})}let Fr=new U;function Gd(p){let _=n.clientWidth||innerWidth,v=n.clientHeight||innerHeight;for(let C=Or.length-1;C>=0;C--){let F=Or[C];if(F.t-=p,F.t<=0||!F.p.g.visible||F.p.inside){F.el.remove(),Or.splice(C,1);continue}F.p.g.getWorldPosition(Fr),Fr.y+=2.5,Fr.project(o),F.el.style.transform="translate("+Math.round((Fr.x+1)/2*_)+"px,"+Math.round((1-Fr.y)/2*v)+"px) translate(-50%,-100%)",F.el.style.opacity=Math.min(1,F.t*3)}}function uc(){let p=o.position.distanceTo(a.target),_=p<175&&kn.size>0;if(Yn.style.display=_?"":"none",!_)return;let v=n.clientWidth||innerWidth,C=n.clientHeight||innerHeight,F=C*1.8/(2*p*Math.tan(o.fov*Math.PI/360));Yn.style.fontSize=Math.max(7,Math.min(12,F*.24)).toFixed(1)+"px",Yn.classList.toggle("night",Br>.5);let V=performance.now(),y=V-(uc.t||0)>300;y&&(uc.t=V);let N=[];kn.forEach((nt,rt)=>{if(!rt.g.visible||rt.inside||_t.indexOf(rt)<0){nt.style.display="none";return}if(rt.g.getWorldPosition(Qe),Qe.y+=2.05,y){let St=Qe.clone().sub(o.position),Bt=St.length();fc.set(o.position,St.normalize()),fc.far=Bt-.3,rt.hidden=fc.intersectObjects(Wd,!1).length>0}if(rt.hidden){nt.style.display="none";return}if(Qe.project(o),Qe.z>1||Math.abs(Qe.x)>1.1||Math.abs(Qe.y)>1.1){nt.style.display="none";return}let Lt=(Qe.x+1)/2*v,ot=(1-Qe.y)/2*C;for(let St=0;St<4;St++){let Bt=N.find(le=>Math.abs(le[0]-Lt)<34&&Math.abs(le[1]-ot)<12);if(!Bt)break;ot=Bt[1]-13}N.push([Lt,ot]),nt.style.display="",nt.style.transform="translate("+Lt.toFixed(1)+"px,"+ot.toFixed(1)+"px) translate(-50%,-100%)"})}let fc=new Sr,Wd=B.map(p=>p.userData.pick).filter(Boolean);function su(){rn.forEach((p,_)=>{if(_===gt.home)return;let v=_n.filter(F=>oe(_)>=F).length,C=_t.filter(F=>F.helper&&F.home===_&&F.goal!=="leave");for(let F=C.length;F<v;F++){let V=$t(vd[F%vd.length],_,{helper:_n[F]});V.g.position.set(Nt.x+kt(-1,1),0,Nt.z+kt(0,.6)),Tn(V,It(V),"work")}})}function ru(p,_){let v={x:p.g.position.x,z:p.g.position.z};if(Se(v,_))return[_];let C=$.nearest(v.x,v.z),F=$.nearest(_.x,_.z),V=$.path(C,F);if(!Se(v,V[0]))return[];let y=V[V.length-1];return Se(y,_)&&V.push(_),V}function Xd(p){if(p.kind==="dog"&&Math.random()<.65){let v=_t[p.buddy%_t.length];for(let V=0;V<_t.length&&(!v.g.visible||v.sitting);V++)v=_t[++p.buddy%_t.length];let C=v.g.position,F={x:C.x+kt(-1.5,1.5),z:C.z+kt(.8,1.6)};if(Math.random()<.15&&p.buddy++,!nn(F.x,F.z)&&(p.path=ru(p,F),p.path.length))return}for(let v=0;v<30;v++){let C={x:p.g.position.x+kt(-9,9),z:p.g.position.z+kt(-7,7)};if(!nn(C.x,C.z,.8)&&Se(p.g.position,C)){p.path=[C];return}}let _=$.nodes[$.nearest(p.g.position.x,p.g.position.z)];p.path=[{x:_.x,z:_.z}]}function ou(p,_){let v=p.g.position;if(p.sleep>0)return p.v=0,!1;if(!p.path.length){if(p.v=0,p.wait-=_,p.wait<=0){if(p.kind==="person")return p.wait=kt(1.5,4),te(p),!1;Xd(p),p.wait=kt(2,6),p.kind==="cat"&&(p.sit=Math.random()<.45,p.sit&&(p.path=[]))}return!1}let C=p.path[0],F=C.x-v.x,V=C.z-v.z,y=Math.hypot(F,V);if(y<.08)return p.path.shift(),!p.path.length&&p.kind==="person"&&me(p),!0;let nt=Math.atan2(F,V)-p.g.rotation.y;nt=Math.atan2(Math.sin(nt),Math.cos(nt)),p.g.rotation.y+=nt*Math.min(1,_*7);let rt=y+(p.path.length>1?99:0),Lt=Math.abs(nt)>1.1?p.speed*.15:p.speed*Math.min(1,rt/1.2+.25);p.v=(p.v||0)+(Lt-(p.v||0))*Math.min(1,_*4);let ot=Math.min(y,p.v*_);return v.x+=Math.sin(p.g.rotation.y)*ot*.35+F/y*ot*.65,v.z+=Math.cos(p.g.rotation.y)*ot*.35+V/y*ot*.65,!0}function Yd(p,_){if(_t.slice().forEach(y=>{if(y.wave>0&&!y.inside&&y.g.visible&&(y.v=0),y.pair&&_t.indexOf(y.pair)<0){q.remove(y.g),_t.splice(_t.indexOf(y),1);return}let N=y.wave>0?!1:y.love==="him"?ne(y,p):y.pair?be(y.pair,y,p):ou(y,p);if(y.inside||!y.g.visible)return;if(y.sitting&&Pe){let ot=y.love==="her"?-.4:.4;he.set(ot,.06,0),Pe.userData.seat.localToWorld(he),q.worldToLocal(he),y.g.position.set(he.x,he.y-jh,he.z),y.g.rotation.set(Pe.userData.pivot.rotation.x*.9,Pe.rotation.y,0),y.parts.legL.rotation.x=y.parts.legR.rotation.x=-1.45+Math.sin(_*1.7)*.25,y.parts.armL.rotation.x=y.parts.armR.rotation.x=-.5,y.parts.head.rotation.set(0,0,0);return}if(y.parts.scroll&&(y.parts.scroll.visible=!!wn&&y.goal==="hall"),y.wave>0){y.wave-=p;let ot=o.position.x-q.position.x-y.g.position.x,St=o.position.z-q.position.z-y.g.position.z,Bt=Math.atan2(ot,St)-y.g.rotation.y;Bt=Math.atan2(Math.sin(Bt),Math.cos(Bt)),y.g.rotation.y+=Bt*Math.min(1,p*8),y.parts.legL.rotation.x=y.parts.legR.rotation.x=0,y.parts.armL.rotation.x=0,y.parts.armR.rotation.x=-2.9,y.parts.armR.rotation.z=Math.sin(_*13)*.45,y.wave<=0&&(y.parts.armR.rotation.z=0);return}let nt=Math.min(1,(y.v||0)/y.speed);y.t+=p*(N?3+7*nt:2);let rt=N?Math.sin(y.t)*.75*nt:0;y.parts.legL.rotation.x=rt,y.parts.legR.rotation.x=-rt,y.parts.armL.rotation.x=-rt*.8,y.parts.armR.rotation.x=rt*.8,y.g.rotation.x=0,y.parts.head.rotation.x=0,y.parts.head.rotation.z=0;let Lt=In(y.g.position.x,y.g.position.z);if(y.g.position.y=Lt+(N?Math.abs(Math.sin(y.t))*.06:0),!N&&!y.path.length){if(y.goal==="hall"){let ot=Math.PI-y.g.rotation.y;ot=Math.atan2(Math.sin(ot),Math.cos(ot)),y.g.rotation.y+=ot*Math.min(1,p*6),y.g.position.y=Lt+Math.max(0,Math.sin(_*2.2+y.i))*.04,y.parts.armR.rotation.x=-1.35+Math.sin(_*1.6+y.i)*.08}else if(y.goal==="work"){let ot=Math.PI-y.g.rotation.y;ot=Math.atan2(Math.sin(ot),Math.cos(ot)),y.g.rotation.y+=ot*Math.min(1,p*6),y.parts.armR.rotation.x=-1.3+Math.sin(_*9+y.i)*.55,y.parts.armL.rotation.x=-.9+Math.sin(_*9+y.i+1.6)*.35,y.parts.head.rotation.x=.25}y.parts.head.rotation.y=y.goal==="work"?0:Math.sin(_*.7+y.i)*.4}else y.parts.head.rotation.y=0}),gt.kiss>0&&gt.him&&gt.him.g.visible){gt.kiss-=p;let y=gt.her,N=gt.him,nt=Math.min(1,Math.sin(Math.min(1,(2.4-gt.kiss)/2.4)*Math.PI)*1.6),rt=y.g.position.x-N.g.position.x,Lt=y.g.position.z-N.g.position.z;if(N.sitting)N.parts.head.rotation.y=.9*nt,N.parts.head.rotation.z=.25*nt,y.parts.head.rotation.z=-.15*nt;else{let ot=Math.atan2(rt,Lt)-N.g.rotation.y;ot=Math.atan2(Math.sin(ot),Math.cos(ot)),N.g.rotation.y+=ot*Math.min(1,p*8);let St=Math.atan2(-rt,-Lt)-y.g.rotation.y;St=Math.atan2(Math.sin(St),Math.cos(St)),y.g.rotation.y+=St*Math.min(1,p*3)*.5,N.g.rotation.x=.2*nt}Ft.visible=!0,Ft.position.set((y.g.position.x+N.g.position.x)/2,2+(2.4-gt.kiss)*.35,(y.g.position.z+N.g.position.z)/2),Ft.material.opacity=Math.min(1,gt.kiss*1.5),gt.kiss<=0&&(Ft.visible=!1,N.g.rotation.x=0)}if(Pe){let y=Pe.userData.pivot,N=gt.her&&gt.her.sitting;y.rotation.x=N?Math.sin(_*1.7)*(gt.kiss>0?.12:.32):y.rotation.x*Math.max(0,1-p*1.5)}let v=Si(Xi());B.forEach((y,N)=>{if(!y.userData.wm)return;let nt=0;if(N===gt.home?nt=0:(oe(N)>0||y.userData.alwaysLit||v!=="sleep"&&_t.some(rt=>rt.home===N&&rt.inside))&&(nt=1),y.userData.lit=Fn(y.userData.lit||0,nt,Math.min(1,p*2)),y.userData.wm.emissiveIntensity=Br*(.28+.7*y.userData.lit),y.userData.heart){let rt=gt.her&&gt.her.inside&&gt.him.inside;y.userData.heart.material.emissiveIntensity=rt?.5+Math.max(0,Math.sin(_*5))*1.3:.2}oe(N)>0&&y.userData.chimney&&Math.random()<p*2.2&&Yi(y)});for(let y=we.length-1;y>=0;y--){let N=we[y];N.life+=p,N.m.position.y+=p*.9,N.m.position.x+=p*.25,N.m.scale.setScalar(1+N.life*.9),N.m.material.opacity=Math.max(0,.75-N.life*.3),N.life>2.5&&(q.remove(N.m),N.m.material.dispose(),we.splice(y,1))}Be+=p,Be>2&&(Be=0,su()),[X,Ut].forEach(y=>{if(y.sleep>0){y.sleep-=p;let Lt=Math.min(1,y.sleepIn+=p*3);y.parts.legs.forEach((ot,St)=>{ot.rotation.x=(St<2?-1.45:1.45)*Lt}),y.g.position.y=In(y.g.position.x,y.g.position.z)-.22*Lt*y.g.scale.y,y.parts.head.rotation.x=.35*Lt,y.parts.head.rotation.y=0,y.parts.eyes.forEach(ot=>{ot.scale.y=1-.8*Lt}),y.parts.tail.rotation.z=Math.sin(_*.8)*.15,y.zzz.visible=!0,y.zzz.position.set(y.g.position.x,.95+_*.6%1*.45,y.g.position.z),y.zzz.material.opacity=.9-_*.6%1*.6,y.sleep<=0&&(y.zzz.visible=!1,y.parts.eyes.forEach(ot=>{ot.scale.y=1}),y.parts.head.rotation.x=0,y.wait=kt(.3,1));return}let N=ou(y,p),nt=Math.min(1,(y.v||0)/y.speed);y.t+=p*(N?4+8*nt:2);let rt=N?Math.sin(y.t)*.6*nt:0;y.parts.legs.forEach((Lt,ot)=>{Lt.rotation.x=ot===0||ot===3?rt:-rt}),y.kind==="cat"?(y.parts.tail.rotation.z=Math.sin(_*2)*.35,y.parts.tail.rotation.x=y.sit&&!N?.9:.5,y.g.children[0].rotation.x=0,y.parts.head.rotation.y=N?0:Math.sin(_*.5)*.5,y.g.position.y=In(y.g.position.x,y.g.position.z)):(y.parts.tail.rotation.z=Math.sin(_*(N?18:10))*.6,y.parts.head.rotation.x=N?0:Math.sin(_*1.3)*.1,y.g.position.y=In(y.g.position.x,y.g.position.z)+(N?Math.abs(Math.sin(y.t))*.07:0))});for(let y=Ve.length-1;y>=0;y--){let N=Ve[y];N.m.position.y>-.08?(N.vy-=p*9,N.m.position.y=Math.max(-.08,N.m.position.y+N.vy*p),N.m.position.y===-.08&&Dr(N.m.position.x,N.m.position.z,.5)):N.m.position.y=-.08+Math.sin(_*3+y)*.015,N.life-=p,N.life<=0&&(q.remove(N.m),Ve.splice(y,1))}ct.forEach(y=>{y.t+=y.dir*y.sp*p,(y.t>.93||y.t<.12)&&(y.dir*=-1,y.t=Math.max(.12,Math.min(.93,y.t)));let N=Kt.curve.getPointAt(y.t),nt=Kt.curve.getTangentAt(y.t),rt=y.side+Math.sin(_*.7+y.ph)*.2;y.g.position.set(N.x-nt.z*rt,-.36,N.z+nt.x*rt),y.g.rotation.y=Math.atan2(nt.x*y.dir,nt.z*y.dir),y.g.userData.tail.rotation.y=Math.sin(_*9+y.ph)*.5}),yt.forEach(y=>{y.a+=y.sp*p;let N=ie.x+Math.cos(y.a)*(ie.rx-1.6)*y.r,nt=ie.z+Math.sin(y.a)*(ie.rz-1)*y.r,rt=null,Lt=1e9;if(Ve.forEach(ot=>{if(ot.m.position.y<=-.02){let St=Math.hypot(ot.m.position.x-y.g.position.x,ot.m.position.z-y.g.position.z);St<Lt&&(Lt=St,rt=ot)}}),rt&&!y.jump){let ot=rt.m.position.x-y.g.position.x,St=rt.m.position.z-y.g.position.z,Bt=Math.hypot(ot,St),le=Math.min(Bt,2.6*p);y.g.position.x+=ot/(Bt||1)*le,y.g.position.z+=St/(Bt||1)*le,y.g.position.y=-.3,y.g.rotation.y=Math.atan2(ot,St),Bt<.25&&(q.remove(rt.m),Ve.splice(Ve.indexOf(rt),1),Dr(rt.m.position.x,rt.m.position.z,.6)),y.a=Math.atan2((y.g.position.z-ie.z)/(ie.rz-1),(y.g.position.x-ie.x)/(ie.rx-1.6)),y.r=Math.min(.85,Math.max(.2,Math.hypot((y.g.position.x-ie.x)/(ie.rx-1.6),(y.g.position.z-ie.z)/(ie.rz-1)))),y.g.userData.tail.rotation.y=Math.sin(_*16+y.a)*.6;return}if(y.jump>0){y.jump+=p*.9;let ot=Math.sin(y.jump*Math.PI)*1.8;y.g.position.set(Fn(y.jx,N,y.jump),-.34+ot,Fn(y.jz,nt,y.jump)),y.g.rotation.x=-Math.cos(y.jump*Math.PI)*1.1,y.jump>=1&&(y.jump=0,y.g.rotation.x=0,xn.position.set(N,-.09,nt),xn.material.opacity=.55,xn.scale.setScalar(1))}else{let ot=N-y.g.position.x,St=nt-y.g.position.z;y.g.position.set(Fn(y.g.position.x,N,Math.min(1,p*6)),-.34,Fn(y.g.position.z,nt,Math.min(1,p*6))),(ot||St)&&(y.g.rotation.y=Math.atan2(ot,St)),Math.random()<p*.05&&(y.jump=.001,y.jx=N,y.jz=nt,xn.position.set(N,-.09,nt),xn.material.opacity=.55,xn.scale.setScalar(1))}y.g.userData.tail.rotation.y=Math.sin(_*8+y.a)*.5}),Kt.glints.forEach(y=>{y.t=(y.t+y.sp*p*6)%1;let N=Kt.curve.getPointAt(y.t),nt=Kt.curve.getTangentAt(y.t);y.m.position.set(N.x-nt.z*y.side,.06,N.z+nt.x*y.side),y.m.rotation.z=-Math.atan2(nt.z,nt.x),y.m.material.opacity=.35+Math.abs(Math.sin(_*3+y.side*9))*.5}),Kt.ftex.offset.y=(Kt.ftex.offset.y+p*1.6)%1,bt.jet.scale.y=1+Math.sin(_*6)*.08,Q.forEach(y=>{y.t=(y.t+p*.35)%1,y.m.position.set(y.x+Math.sin(y.t*6+y.z)*.3,-.1+y.t*1.8,y.z+y.t*.8),y.m.material.opacity=.55*(1-y.t),y.m.scale.setScalar(.6+y.t*1.2)}),bt.drops.forEach(y=>{y.t=(y.t+p*.7)%1;let N=.15+y.t*.95,nt=2.25+y.t*.6-y.t*y.t*2.35;y.m.position.set(Math.cos(y.a)*N,nt,Math.sin(y.a)*N)}),Kt.foam.forEach((y,N)=>{let nt=.8+Math.abs(Math.sin(_*5+N))*.5;y.scale.setScalar(nt)}),O.ducks.forEach(y=>{y.a+=y.sp*p;let N=ie.x+Math.cos(y.a)*(ie.rx-2),nt=ie.z+Math.sin(y.a)*(ie.rz-1.2);y.g.rotation.y=Math.atan2(N-y.g.position.x,nt-y.g.position.z)||y.g.rotation.y,y.g.position.set(N,-.2+Math.sin(_*2+y.a)*.03,nt)});for(let y=Dn.length-1;y>=0;y--){let N=Dn[y];N.material.opacity-=p*1.2,N.scale.multiplyScalar(1+p*2.5*N.userData.size),N.material.opacity<=0&&(q.remove(N),N.geometry.dispose(),Dn.splice(y,1))}xn.material.opacity>0&&(xn.material.opacity=Math.max(0,xn.material.opacity-p*.8),xn.scale.multiplyScalar(1+p*1.8)),di.forEach(y=>{y.ph+=p,y.g.position.set(y.cx+Math.sin(y.ph*.4)*6,1.6+Math.sin(y.ph*1.3)*.5,y.cz+Math.cos(y.ph*.33)*4),y.g.rotation.y=y.ph*.4+Math.PI/2;let N=Math.sin(y.ph*18)*1.1;y.g.userData.l.rotation.y=N,y.g.userData.r.rotation.y=-N});let C=Gs.geometry.attributes.position;for(let y=0;y<C.count;y++)C.setY(y,1.5+Math.sin(_*.8+y)*.8),C.setX(y,C.getX(y)+Math.sin(_*.5+y*3)*p*.4);if(C.needsUpdate=!0,D.forEach(y=>{y.position.x+=y.userData.speed*p,y.position.x>90&&(y.position.x=-90)}),qn&&cu(p),z.rotation.y+=p*.012,A.forEach(y=>{y.position.y=y.userData.y0+Math.sin(_*.5+y.userData.ph)*.3}),pt.forEach(y=>{y.material.opacity=y.userData.base*Math.max(0,Math.sin(_*1.8+y.userData.ph))}),tt.forEach(y=>{y.material.opacity=y.userData.base*(.55+.45*Math.sin(_*1.3+y.userData.ph))}),Br>.6)if(W.t<0){if(W.wait-=p,W.wait<=0){let y=kt(0,Math.PI*2);W.from.set(Math.cos(y)*180,kt(110,170),Math.sin(y)*180-40),W.dir.set(kt(-1,1),kt(-.55,-.35),kt(-.3,.3)).normalize(),W.t=0}}else{W.t+=p/1.1,H.position.copy(W.from).addScaledVector(W.dir,W.t*120);let y=H.position.clone().project(o),N=H.position.clone().addScaledVector(W.dir,10).project(o);H.material.rotation=Math.atan2(N.y-y.y,N.x-y.x),H.material.opacity=Math.sin(Math.min(1,W.t)*Math.PI)*.95,W.t>=1&&(W.t=-1,W.wait=kt(7,16),H.material.opacity=0)}else H.material.opacity=0;let F=ht.userData.flag;F.rotation.y=Math.sin(_*3)*.25;let V=ht.userData.bell;V.material.emissiveIntensity=wn?.6+Math.sin(_*6)*.4:0,V.rotation.z=wn?Math.sin(_*7)*.35:0}let qn=null;function au(p,_){if(!Z.car||qn)return!1;_=_||{};let v=Z.car,C={x:v.position.x,z:v.position.z,ry:v.rotation.y},F=$.nearest(Z.exit.x,Z.exit.z),V=new Set($.doorNodes),N=$.nodes.map((xe,ze)=>ze).filter(xe=>!V.has(xe)&&Math.abs(In($.nodes[xe].x,$.nodes[xe].z))<.2).filter(xe=>Math.hypot($.nodes[xe].x-C.x,$.nodes[xe].z-C.z)>30),nt=xe=>xe[Math.floor(Math.random()*xe.length)],rt=(t.houses||[]).findIndex(xe=>xe.id==="store"),Lt=_.onShop&&rt>=0?$.nearest($.nodes[$.doorNodes[rt]].x,$.nodes[$.doorNodes[rt]].z,!0):-1,ot=(Lt>=0?[Lt]:[]).concat(N.length?[nt(N)]:[]),St=[{x:C.x,z:C.z},{x:Z.exit.x,z:Z.exit.z}],Bt=F,le=-1;return ot.concat([F]).forEach(xe=>{$.path(Bt,xe).forEach(ze=>St.push({x:ze.x,z:ze.z})),Bt=xe,xe===Lt&&le<0&&(le=St.length-1)}),St.push({x:Z.exit.x,z:Z.exit.z},{x:C.x,z:C.z-Math.cos(C.ry)*.01}),le>=0&&(St[le].shop=!0),St=St.filter((xe,ze)=>xe.shop||!ze||Math.hypot(xe.x-St[ze-1].x,xe.z-St[ze-1].z)>.3),qn={pts:St,i:1,home:C,done:p,v:0,last:0,onShop:_.onShop,wait:!1},!0}function cu(p){let _=Z.car,v=qn,C=v.pts[v.i];if(v.wait)return;let F=v.i===v.pts.length-1,V=C.x-_.position.x,y=C.z-_.position.z,N=Math.hypot(V,y);if(v.v=Math.min(F?2:6.5,v.v+p*3),N<.35){if(C.shop&&v.onShop){C.shop=!1,v.wait=!0,v.v=0,v.onShop(()=>{qn===v&&(v.wait=!1)});return}if(v.i++,v.i>=v.pts.length){_.position.set(v.home.x,In(v.home.x,v.home.z),v.home.z),_.rotation.y=v.home.ry;let ot=v.done;qn=null,ot&&ot();return}return}let nt=Math.min(N,v.v*p);_.position.x+=V/N*nt,_.position.z+=y/N*nt,_.position.y=In(_.position.x,_.position.z);let rt=Math.atan2(V,y)+(F?Math.PI:0),Lt=_.rotation.y;for(;rt-Lt>Math.PI;)rt-=Math.PI*2;for(;rt-Lt<-Math.PI;)rt+=Math.PI*2;_.rotation.y=Lt+(rt-Lt)*Math.min(1,p*5)}let Br=0;function zr(){let p=new Date,_=i!=null?i:p.getHours()+p.getMinutes()/60,v=Bd(_);Br=v.night,r.background=v.sky,r.fog.color.copy(v.sky),x.uniforms.bottom.value.copy(v.sky).lerp(new ae(16777215),.18*(1-v.night)).lerp(new ae(10324950),.4*v.night),x.uniforms.top.value.copy(v.sky).lerp(new ae(v.night>.5?2501490:7320547),.5),d.intensity=v.amb,d.color.set(v.night>.5?13158143:16777215),d.groundColor.set(v.night>.5?8160432:12048288),g.color.copy(v.sun),g.intensity=v.power;let C=(_-6)/12*Math.PI,V=_>=5.5&&_<=18.6?C:((_+12)%24-6)/12*Math.PI,y=Math.cos(V)*70,N=Math.max(Math.sin(V),.25)*70;g.position.set(y,N,40),g.target.position.set(0,0,0),T.position.set(Math.cos(C)*200,Math.sin(C)*160,-120),T.visible=Math.sin(C)>-.05;let nt=((_+12)%24-6)/12*Math.PI;E.position.set(Math.cos(nt)*200,Math.sin(nt)*160,-120),E.visible=v.night>.3&&Math.sin(nt)>0,L.material.opacity=v.night,tt.forEach(rt=>{rt.userData.base=v.night}),z.mat.color.set(v.night>.5?10131656:16777215),pt.forEach(rt=>{rt.userData.base=.55+v.night*.45}),Gs.material.opacity=v.night*.95,oc.forEach(rt=>{rt.emissiveIntensity=v.night*.95}),M.forEach(rt=>{rt.intensity=v.night*18}),D.forEach(rt=>{rt.userData.mat.color.set(v.night>.5?8029096:16777215)}),di.forEach(rt=>{rt.g.visible=v.night<.5})}let zo=1,Ho=1;function ko(){zo=n.clientWidth||window.innerWidth,Ho=n.clientHeight||window.innerHeight,s.setSize(zo,Ho,!1),o.aspect=zo/Ho,o.updateProjectionMatrix()}let wi=new fn;function qd(p,_){wi.fov=o.fov,wi.aspect=o.aspect,wi.near=.5,wi.far=1e3,wi.updateProjectionMatrix();let v=[];for(let y=0;y<48;y++){let N=y/48*Math.PI*2,nt=Lr(N);v.push(new U(Math.cos(N)*nt,0,Math.sin(N)*nt))}v.push(new U(Pn[0],9+ks.h,Pn[1])),ls.forEach(([y,N,nt,rt])=>v.push(new U(y,rt,N))),rn.forEach(([y,N])=>v.push(new U(y,6.5,N)));let C=y=>{wi.position.set(0,Math.cos(p)*y,Math.sin(p)*y).add(_),wi.lookAt(_),wi.updateMatrixWorld();let N=new U;return v.every(nt=>(N.copy(nt).project(wi),Math.abs(N.x)<.97&&N.y>-.97&&N.y<.86))},F=10,V=600;for(let y=0;y<30;y++){let N=(F+V)/2;C(N)?V=N:F=N}return V}function dc(){ko();let p=e==="port"?.6:.88,_=new U(0,0,1.5),v=qd(p,_);return{p:new U(0,Math.cos(p)*v,Math.sin(p)*v).add(_),t:_}}function lu(){let p=dc();a.target.copy(p.t),o.position.copy(p.p),a.update()}let Zd=1800,Kd=1900,Ge=null,Hr=!1,kr=null,pc=p=>p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;function hu(p){let _=p.userData.face||0,v=Math.sin(_),C=Math.cos(_),F=p.userData.doorZ-1.3,V=p.position.y,y=(N,nt)=>new U(p.position.x+v*(F+N),V+nt,p.position.z+C*(F+N));return{near:y(3.2,1.75),nearT:y(-1,1.45),inside:y(.35,1.6),insideT:y(-2,1.4)}}function uu(p,_,v,C){if(!v)return p.clone().lerp(_,C);let F=p.clone().lerp(_,C),V=_.clone().lerp(v,C);return F.lerp(V,C)}function Jd(p,_,v){let C=B.find(V=>V.userData.id===p);if(!C){_&&_();return}let F=hu(C);kr={p:o.position.clone(),t:a.target.clone()},Ge={mode:"in",start:performance.now(),dur:Zd,h:C,done:_,at:v&&v.at,atFired:!1,p:[kr.p,F.near,F.inside],t:[kr.t,F.nearT,F.insideT]},a.enabled=!1,Hr=!0}function $d(p,_){let v=B.find(V=>V.userData.id===p);if(!v){fu(),_&&_();return}let C=hu(v),F=kr||dc();v.userData.hinge&&(v.userData.hinge.rotation.y=-1.7),o.position.copy(C.inside),a.target.copy(C.insideT),o.lookAt(a.target),Ge={mode:"out",start:performance.now(),dur:Kd,h:v,done:_,p:[C.inside,C.near,F.p],t:[C.insideT,C.nearT,F.t]},a.enabled=!1,Hr=!0}function jd(){if(!Ge)return;let p=Math.min(1,(performance.now()-Ge.start)/Ge.dur),_=pc(p);o.position.copy(uu(Ge.p[0],Ge.p[1],Ge.p[2],_)),a.target.copy(uu(Ge.t[0],Ge.t[1],Ge.t[2],_)),o.lookAt(a.target);let v=Ge.h.userData.hinge;if(v&&(Ge.mode==="in"?v.rotation.y=-1.7*pc(Math.min(1,Math.max(0,(p-.25)/.45))):v.rotation.y=-1.7*(1-pc(Math.min(1,Math.max(0,(p-.2)/.5))))),Ge.at&&!Ge.atFired&&p>=Ge.at.k&&(Ge.atFired=!0,Ge.at.fn()),p>=1){let C=Ge.done,F=Ge.mode;Ge=null,F==="out"&&(Hr=!1,a.enabled=!0,a.update()),C&&C()}}function fu(){if(!Hr||Ge&&Ge.mode==="out")return;Hr=!1,Ge=null,a.enabled=!0,B.forEach(_=>{_.userData.hinge&&(_.userData.hinge.rotation.y=0)});let p=kr||dc();o.position.copy(p.p),a.target.copy(p.t),a.update()}let ds=new Sr,du=new wt,Ti=null,Ws=0,mc=!1;window.addEventListener("pointerdown",p=>{!p.isTrusted||p.pointerType!=="touch"||(p.isPrimary&&(Ws=0,mc=!1),Ws++,Ws>1&&(mc=!0))},!0);let pu=p=>{p.isTrusted&&p.pointerType==="touch"&&(Ws=Math.max(0,Ws-1))};window.addEventListener("pointerup",pu,!0),window.addEventListener("pointercancel",pu,!0),s.domElement.addEventListener("pointerdown",p=>{(p.isPrimary||p.pointerType!=="touch")&&(Ti={x:p.clientX,y:p.clientY,t:performance.now()})}),s.domElement.addEventListener("pointercancel",()=>{Ti=null}),s.domElement.addEventListener("pointerup",p=>{if(!p.isTrusted||p.pointerType==="touch"&&(mc||Ws>0)){Ti=null;return}if(!Ti||Math.hypot(p.clientX-Ti.x,p.clientY-Ti.y)>8||performance.now()-Ti.t>600){Ti=null;return}Ti=null;let _=s.domElement.getBoundingClientRect();if(du.set((p.clientX-_.left)/_.width*2-1,-((p.clientY-_.top)/_.height)*2+1),ds.setFromCamera(du,o),gt.her&&gt.her.g.visible&&gt.him.g.visible&&ds.intersectObjects([gt.her.g,gt.him.g],!0)[0]){gt.kiss>0||(gt.kiss=2.4,gt.her.sitting||(gt.her.path=[],gt.her.wait=Math.max(gt.her.wait,2.8)));return}if(Z.car&&!qn&&t.onCar&&ds.intersectObject(Z.car,!0)[0]){t.onCar();return}let v=_t.filter(nt=>!nt.love&&!nt.inside&&nt.g.visible),C=ds.intersectObjects(v.map(nt=>nt.g),!0)[0];if(C){let nt=C.object,rt=v.find(Lt=>{let ot=nt;for(;ot;){if(ot===Lt.g)return!0;ot=ot.parent}return!1});if(rt){wn&&rt.goal==="hall"?hc(rt,"Work!!!",!0):(rt.wave=2.2,hc(rt,"Hi!"));return}}let F=ds.intersectObjects([X.g,Ut.g],!0)[0];if(F){let nt=X.g.getObjectById(F.object.id)?X:Ut;nt.sleep>0||(nt.sleep=3,nt.sleepIn=0,nt.path=[]);return}let V=ds.intersectObject(ut)[0];if(V){Bn(V.point.x-q.position.x,V.point.z-q.position.z);return}let y=ds.intersectObjects(B,!0)[0];if(!y)return;let N=y.object;for(;N&&!N.userData.id;)N=N.parent;N&&t.onPick(N.userData.id)});let Vr=new U;function Qd(p){let _=B.find(v=>v.userData.id===p);return _?(Vr.set(_.position.x,_.position.y+_.userData.top,_.position.z),Vr.project(o),{x:(Vr.x+1)/2*zo,y:(1-Vr.y)/2*Ho,visible:Vr.z<1}):null}let gc=new Po,Gr=!1,Xs=!0,mu=0,gu=[];function xu(){if(!Gr)return;if(!Xs||document.hidden){Gr=!1;return}requestAnimationFrame(xu);let p=Math.min(.12,gc.getDelta()),_=gc.elapsedTime;_-mu>20&&(zr(),mu=_),Yd(p,_),Ge?jd():a.update(),s.render(r,o),gu.forEach(v=>v()),uc(),Gd(p)}function xc(){Gr||(Gr=!0,gc.getDelta(),requestAnimationFrame(xu))}let _u=()=>{!document.hidden&&Xs&&(zr(),xc())},yu=()=>{Xs&&ko()};return document.addEventListener("visibilitychange",_u),window.addEventListener("resize",yu),zr(),lu(),xc(),/[?&]debug3d/.test(location.search)&&(window.__v3d={SOURCE:Nn,POND:ie,drive:(p,_)=>au(p,_),driveFF:p=>{for(let _=0;_<p&&qn;_++)cu(.1);return qn?qn.i+"/"+qn.pts.length+(qn.wait?" wait":""):"home"},get car(){return Z.car},renderer:s,people:_t,couple:gt,get swing(){return Pe},graph:$,cat:X,dog:Ut,routine:Si,realHour:Xi,camera:o,controls:a,water:ut,food:Ve,get urgent(){return wn},set urgent(p){wn=p},say:hc}),{setUrgent(p){let _=wn;wn=p||0,!!_!=!!wn&&_t.forEach(v=>{!v.love&&!v.helper&&(v.path=[],v.wait=kt(0,1.5))})},setBusy(p){let _={};(t.houses||[]).forEach((v,C)=>{p&&p[v.id]>0&&(_[C]=p[v.id])}),ce=_,su()},anchor:Qd,onFrame(p){gu.push(p)},night(){return Br},setTimeMode(p){i=p==="day"?11:p==="night"?22:null,zr()},show(p){Xs=!!p,Xs&&(fu(),ko(),zr(),xc())},enterHouse:Jd,exitHouse:$d,drive:au,setNames(p,_){Me=p||null,Hn=!!_,Hd(),zd(),Vd()},mateLookOf(p){let _=_t.find(v=>v.pair&&(t.houses||[])[v.home]&&t.houses[v.home].id===p);return _?_.parts.look:null},genderOf(p){let _=_t.find(v=>!v.love&&!v.helper&&!v.pair&&(t.houses||[])[v.home]&&t.houses[v.home].id===p);return _?Ud(_.parts.look)?"f":"m":""},resize:ko,recenter:lu,layout:e,destroy(){Gr=!1,Xs=!1,document.removeEventListener("visibilitychange",_u),window.removeEventListener("resize",yu),a.dispose(),r.traverse(p=>{p.geometry&&p.geometry.dispose()}),s.dispose(),s.domElement.remove()}}}var je=9,$n=7,on=4.4,ac=7;function Uo(n,t){return new ae(n).lerp(new ae(16777215),t).getHex()}function ui(n,t,e,i,s){let r=new qt;return r.position.set(t,0,e),r.rotation.y=i||0,n.add(r),r.add(I(2.2,.08,1,s||14267535,0,.78,0)),[[-1,-.42],[1,-.42],[-1,.42],[1,.42]].forEach(([o,a])=>r.add(I(.08,.78,.08,11569768,o,.39,a))),r}function Wn(n,t,e,i){let s=new qt;return s.position.set(t,0,e),s.rotation.y=i||0,n.add(s),s.add(I(.55,.08,.55,16165309,0,.5,0)),s.add(I(.55,.6,.08,16165309,0,.82,-.26)),[[-.22,-.22],[.22,-.22],[-.22,.22],[.22,.22]].forEach(([r,o])=>s.add(I(.06,.5,.06,9206379,r,.25,o))),s}function Bs(n,t,e){n.add(I(.7,.04,.48,14211296,t,.84,e));let i=I(.7,.46,.04,14211296,t,1.07,e-.24);i.rotation.x=-.25,n.add(i);let s=I(.62,.38,.02,0,t,1.07,e-.215,new Je({color:12576498}));s.rotation.x=-.25,n.add(s)}function fi(n,t,e,i,s){let r=new qt;r.position.set(t,0,e),r.rotation.y=i||0,n.add(r),r.add(I(1.8,2.4,.4,12883572,0,1.2,0));for(let o=0;o<4;o++){r.add(I(1.7,.06,.36,14862765,0,.3+o*.55,.03));for(let a=0;a<(s||6);a++){let c=bi.flower[(a+o)%bi.flower.length],l=.3+(a*7+o*3)%4*.04;r.add(I(.16,l,.28,c===16777215?10934504:c,-.7+a*.24,.33+o*.55+l/2,.05))}}return r}function Cn(n,t,e){n.add(I(.5,.5,.5,0,t,.25,e,Ze(dt.CLAY,16368540))),[[0,.78,0,.56],[.2,1.18,.1,.36],[-.18,1.12,-.12,.34]].forEach(([i,s,r,o],a)=>n.add(I(o,o,o,0,t+i,s,e+r,Ze([dt.LEAF_G,dt.LEAF_L,dt.LEAF_M][a]))))}function Wi(n,t,e,i,s,r,o,a,c){let l=new qt;return l.position.set(t,e,i),l.rotation.y=s,n.add(l),l.add(I(r+.12,o+.12,.05,12883572,0,0,0)),l.add(I(r,o,.06,a,0,0,.01)),(c||[]).forEach(([h,u,f,d])=>l.add(I(d||.32,d||.32,.03,f,h,u,.06))),l}function No(n,t,e,i,s){let r=[[-.45,.25],[-.15,.45],[.15,.35],[.45,.6]],o=Wi(n,t,e,i,s,1.4,1.1,16775920);return r.forEach(([a,c],l)=>o.add(I(.2,c,.03,[16758465,10934504,14542964,14273008][l],a,-.4+c/2,.06))),o}function Ad(n,t,e,i,s,r){let o=r?2.2:1.1,a=r?1.6:.9,c=Wi(n,t,e,i,s,o,a,16777215);c.add(I(o,a*.18,.04,16751536,0,a*.41,.05));for(let l=0;l<4;l++)for(let h=0;h<7;h++){let u=(l*7+h)%9===3;c.add(I(o/9,a/7,.02,u?16766687:15985894,-o/2+(h+1)*o/8,a*.2-l*a/5.5,.06))}return c}function b1(n,t,e,i,s){let r=new qt;r.position.set(t,e,i),r.rotation.y=s,n.add(r);let o=new Pt(new Xe(.35,.35,.06,20),de(16775920));o.rotation.x=Math.PI/2,r.add(o);let a=new Pt(new Is(.36,.04,6,20),de(16165309));r.add(a);let c=I(.04,.18,.02,4865855,0,.08,.05),l=I(.03,.27,.02,4865855,0,.12,.06);return r.add(c,l),r.userData.hands=[c,l],r}function S1(n,t,e){let i=new Pt(new pn(.28,12,10),de(16758465));i.scale.set(1.3,1,1),i.position.set(t,1.1,e),n.add(i),n.add(I(.12,.1,.1,16751536,t+.38,1.1,e)),[[-.15,-.12],[.15,-.12],[-.15,.12],[.15,.12]].forEach(([s,r])=>n.add(I(.07,.12,.07,16751536,t+s,.86,e+r))),n.add(I(.12,.02,.03,9202282,t,1.38,e));for(let s=0;s<3;s++)for(let r=0;r<2+s;r++){let o=new Pt(new Xe(.09,.09,.03,12),de(16111752));o.position.set(t-.7+s*.22,.84+r*.035,e+.1),n.add(o)}}function Rd(n,t,e,i){let s=new qt;s.position.set(t,0,e),s.rotation.y=i||0,n.add(s),s.add(I(1,1.1,.9,10135480,0,.55,0));let r=new Pt(new Xe(.14,.14,.05,14),de(16111752));return r.rotation.x=Math.PI/2,r.position.set(.15,.6,.46),s.add(r),s.add(I(.06,.3,.05,16111752,-.3,.6,.46)),s}function w1(n,t,e,i){let s=new qt;return s.position.set(t,0,e),s.rotation.y=i||0,n.add(s),s.add(I(2,.08,.45,12883572,0,1.3,0)),s.add(I(2,.08,.45,12883572,0,.6,0)),[-1,1].forEach(r=>s.add(I(.08,1.4,.45,11569768,r*.96,.7,0))),[.6,1.3].forEach((r,o)=>[-.65,-.2,.25,.7].forEach((a,c)=>{let l=new Pt(new Xe(.15,.15,.4,12),new ve({color:15136507,transparent:!0,opacity:.7}));l.position.set(a,r+.24,0),s.add(l);let h=.08+(c+o*2)%4*.08,u=new Pt(new Xe(.12,.12,h,12),de(16111752));u.position.set(a,r+.06+h/2,0),s.add(u)})),s}function T1(n,t,e,i){let s=new qt;return s.position.set(t,0,e),s.rotation.y=i||0,n.add(s),s.add(I(.9,1.5,.7,10934504,0,.75,0)),[.35,.8,1.25].forEach(r=>{s.add(I(.8,.38,.04,12576498,0,r,.36)),s.add(I(.25,.05,.05,16775920,0,r+.08,.39))}),s}function A1(n,t,e){[0,2.1,4.2].forEach(r=>{let o=I(.04,1.4,.04,7035470,t+Math.cos(r)*.25,.65,e+Math.sin(r)*.25);o.rotation.set(Math.sin(r)*.3,0,-Math.cos(r)*.3),n.add(o)}),n.add(I(.4,.28,.25,4865855,t,1.45,e));let i=new Pt(new Xe(.09,.09,.15,12),de(3025462));i.rotation.x=Math.PI/2,i.position.set(t,1.45,e+.18),n.add(i);let s=new Pt(new Is(.4,.05,6,24),new Je({color:16774351}));s.position.set(t-.9,1.7,e-.3),n.add(s),n.add(I(.04,1.7,.04,7035470,t-.9,.85,e-.3))}function R1(n,t,e,i,s){let r=Wi(n,t,e,i,s,1.2,.7,15785156);[-.4,-.13,.13,.4].forEach((o,a)=>{r.add(I(.05,.05,.08,9206379,o,.18,.08)),r.add(I(.1,.22,.03,[16111752,10934504,16758465,10738109][a],o,-.02,.08))})}var Zh={work:{first:"list",build(n,t){let e=ui(n,-1.6,-2.4);Bs(e,.2,0),e.add(I(.3,.2,.22,16777215,-.75,.92,.1)),Wn(n,-1.4,-1.55,Math.PI),t.seat={x:-1.4,z:-1.6,ry:Math.PI,y:.54},Wi(n,-4.45,1.8,.4,Math.PI/2,2.6,1.4,16777215,[[-.9,.35,16773544],[-.4,.4,16758465],[.1,.3,10934504],[.6,.38,10738109],[-.8,-.2,16758465],[-.2,-.25,16773544],[.5,-.2,14273008]]),fi(n,4.25,-.6,-Math.PI/2),No(n,4.44,2.2,1.6,-Math.PI/2),A1(n,3.4,4.6),Cn(n,-3.9,-3)},corners:{list:[.8,2.9,5.8,-1.3,1,-2.2],board:[2.4,2.7,4.2,-4.3,1.6,.3],stats:[-2.4,2.7,4.2,4.3,1.5,.3],posts:[-.6,2.5,8.6,3.2,1.3,4.4]}},money:{first:"overview",build(n,t){let e=ui(n,0,-2.3,0,16368540);S1(e,.4,0),e.add(I(.35,.05,.45,9417689,-.5,.84,.1)),Wn(n,.2,-1.45,Math.PI),t.seat={x:.2,z:-1.5,ry:Math.PI,y:.54},Ad(n,-4.44,1.9,-.8,Math.PI/2,!0),No(n,-4.44,1.9,2.1,Math.PI/2),w1(n,4.2,-1,-Math.PI/2),T1(n,3.6,-3,0),Rd(n,3.6,2,-Math.PI/2.5),Cn(n,-3.9,-3),t.windowX=-1.9},corners:{overview:[.6,2.9,5.8,0,1,-2.3],calendar:[2.6,2.7,3.6,-4.3,1.8,-.8],stats:[2.6,2.7,5.4,-4.3,1.8,1.8],budget:[-2.4,2.7,3.6,4.2,1.1,-1.2],history:[-1.6,2.7,3.8,3.4,1,-3],categories:[-1.6,2.5,6.2,3.6,.7,2]}},calendar:{first:"main",build(n,t){Ad(n,-.1,2.05,-3.44,0,!0),b1(n,-2.6,2.5,-3.44,0),t.windowX=2.9;let e=ui(n,-1.2,-1.6);e.add(I(.5,.06,.36,16773544,.3,.84,0)),e.add(I(.04,.04,.3,15834032,.65,.88,0)),Wn(n,-1,-.75,Math.PI),t.seat={x:-1,z:-.8,ry:Math.PI,y:.54},fi(n,4.25,.2,-Math.PI/2,5),Cn(n,3.8,2.6)},corners:{main:[-.2,2.9,5.8,-.4,1.5,-2.8]}},account:{first:"main",build(n,t){Rd(n,3.7,-2.6,-.3),R1(n,-.5,2,-3.44,0),t.windowX=1.7;let e=ui(n,-1.8,-1.8,.2);Bs(e,0,0),Wn(n,-1.75,-.95,Math.PI+.2),t.seat={x:-1.72,z:-1,ry:Math.PI+.2,y:.54},fi(n,-4.25,.6,Math.PI/2,5),Cn(n,3.9,1.8)},corners:{main:[-.2,2.9,5.8,-.9,1.2,-2.4]}},love:{first:"main",build(n,t){let i=new qt;i.position.set(.5,0,-2.4),n.add(i),i.add(I(2.6,.45,.9,16165309,0,.32,0)),i.add(I(2.6,.75,.25,15834032,0,.8,-.35)),[-1,1].forEach(H=>i.add(I(.25,.65,.9,15834032,H*1.3,.45,0)));let s=hs(16744350);s.scale.setScalar(.4),s.position.set(1,.75,-.15),i.add(s),t.seats=[{x:.05,z:-2.25,ry:0,y:.56},{x:.95,z:-2.25,ry:0,y:.56}],t.sofa=!0,t.couple=!0,[[1.1,2.95,.55,3095915],[1.4,2.95,-.55,15230251]].forEach(([H,W,q,Y])=>{let xt=new qt;xt.position.set(H,W,-3.44+.06),xt.rotation.z=q,n.add(xt),xt.add(I(.06,.34,.05,16777215,0,-.5,0)),xt.add(I(.025,.34,.025,10135480,0,-.17,0));let j=new Pt(new Is(.17,.02,6,22),de(Y));j.scale.y=1.3,j.position.y=.2,xt.add(j);for(let Mt=-3;Mt<=3;Mt++)xt.add(I(.004,.42,.004,16777215,Mt*.045,.2,0)),xt.add(I(.32,.004,.004,16777215,0,.2+Mt*.055,0))});{let H=document.createElement("canvas");H.width=128,H.height=64;let W=H.getContext("2d");W.fillStyle="#ffffff",W.fillRect(0,0,128,64),W.fillStyle="#e8652b",W.fillRect(0,8,128,16),W.fillStyle="#26305a",W.beginPath(),W.moveTo(0,64),W.lineTo(0,24),W.lineTo(14,24),W.lineTo(30,64),W.fill(),W.fillStyle="#26305a",W.fillRect(0,6,128,2),W.fillRect(26,28,102,2),W.font="bold 13px sans-serif",W.fillText("YONEX",74,54),W.beginPath(),W.arc(60,49,3,0,7),W.arc(67,49,3,0,7),W.lineWidth=2,W.strokeStyle="#26305a",W.stroke();let q=new dn(H);q.colorSpace=Le;let Y=de(16777215),xt=new ve({map:q}),j=new Pt(new ke(1.15,.58,.36),[Y,Y,de(15230251),Y,xt,xt]);j.position.set(1.25,1.62,-3.44+.22),j.castShadow=!0,n.add(j),[-.28,.28].forEach(Mt=>{n.add(I(.06,.5,.03,16777215,1.25+Mt*.9,2.02,-3.44+.2))}),n.add(I(.5,.06,.06,2502746,1.25,2.28,-3.44+.2)),n.add(I(.06,.06,.16,9206379,1.25,2.32,-3.44+.1))}n.add(I(1.42,1.08,.06,12883572,-.4,2.55,-3.44+.02)),n.add(I(1.28,.94,.07,16775920,-.4,2.55,-3.44+.03));let r=new Pt(new ss(1.1,.78),new Je({color:16766687}));r.position.set(-.4,2.55,-3.44+.075),r.userData.pick="frame",n.add(r),t.frames=[r];for(let H=0;H<14;H++){let W=new Pt(new pn(.05,6,5),new Je({color:[16773544,16758465][H%2]}));W.position.set(-4+H*.62,3.45-Math.sin(H*.9)*.08,-3.38),n.add(W)}let o=new qt;o.position.set(2.45,0,-2.4),n.add(o);let a=new Pt(new Xe(.42,.42,.06,18),de(14861214));a.position.y=.6,o.add(a),o.add(I(.07,.6,.07,11569768,0,.3,0));let c=new Pt(new Xe(.22,.25,.04,14),de(11569768));c.position.y=.02,o.add(c);let l=new Pt(new pn(.13,16,12),de(13231096));l.scale.y=1.3,l.position.y=.8,o.add(l),[[0,1.08,0,16758465],[.08,1.02,.05,16773544],[-.08,1.04,-.03,16165309]].forEach(([H,W,q,Y])=>{o.add(I(.015,.25,.015,8173679,H*.6,.95,q*.6));let xt=new Pt(new pn(.06,10,8),de(Y));xt.position.set(H,W,q),o.add(xt)});let h=new qt;h.userData.pick="up",n.add(h);let u=Ze(dt.PLANKS),f=Ze(dt.PLANK_GREY,16165309);for(let H=0;H<10;H++){let W=-1.35-H*.32,q=(H+1)*.44;h.add(I(.32,q,.95,0,W,q/2,-2.95,u)),h.add(I(.32,.04,.6,0,W,q+.02,-2.95,f)),H%3===0&&h.add(I(.06,.8,.06,16777215,W,q+.4,-2.45))}{let H=Math.hypot(3.2,4.4),W=I(H,.08,.08,16777215,-1.35-1.6+.16,2.2+.8+.22,-2.45);W.rotation.z=-Math.atan2(4.4,3.2),h.add(W)}let d=wd(Math.PI/2,.42);d.position.set(-1.85,1.75,-2.35),h.add(d);let g=new qt;g.position.set(1.3,0,1.25),n.add(g),g.add(I(1.5,.06,.95,14861214,0,.76,0)),[[-.65,-.38],[.65,-.38],[-.65,.38],[.65,.38]].forEach(([H,W])=>g.add(I(.06,.76,.06,11569768,H,.38,W))),[-1,1].forEach(H=>{let W=Gi("bowl",{soup:"#f6efe0",noodle:"#fffaf0"},.3);W.position.set(H*.4-.16,.79,-.18),g.add(W);let q=Gi("bowl",{soup:"#d98c4a",top:["#8a5233","#8a5233","#a86a40","#7fc46a"]},.3);q.position.set(H*.4+.16,.79,-.18),g.add(q),g.add(I(.32,.012,.012,12883572,H*.4,.8,.05)),g.add(I(.32,.012,.012,12883572,H*.4,.8,.08))});let M=Gi("plate",{dots:["#6fb85a","#8fcc7c","#6fb85a","#8fcc7c","#6fb85a","#8fcc7c","#6fb85a","#8fcc7c"]},.4);M.position.set(0,.79,-.05),g.add(M),Wn(n,1.3-.4,1.25-.85,0),Wn(n,1.3+.4,1.25-.85,0),t.dining=[{x:1.3-.4,z:1.25-.8,ry:0,y:.54},{x:1.3+.4,z:1.25-.8,ry:0,y:.54}],t.windowX=3.1,Cn(n,3.95,-2.9),t.dinner=g,t.defaultDishes=g.children.slice(5);let x=14,m=new qt;m.position.x=x,n.add(m);let T=$n+ac,E=ac/2;for(let H=0;H<12;H++){let W=I(je/12,.1,T,H%2?15981768:15651517,-je/2+(H+.5)*je/12,-.05,E);W.castShadow=!1,m.add(W)}let b=I(je,on,.12,t.wall,0,on/2,-$n/2);b.castShadow=!1,m.add(b),[-1,1].forEach(H=>{let W=I(.12,on,T,t.wall2,H*je/2,on/2,E);W.castShadow=!1,m.add(W)});let G=I(je,.12,T,0,0,on+.06,E,new ve({color:t.ceil,emissive:t.ceil,emissiveIntensity:.3}));G.castShadow=!1,m.add(G),m.add(I(1.9,1.5,.08,16777215,2.9,2.3,-$n/2+.06)),m.add(I(1.7,1.3,.09,0,2.9,2.3,-$n/2+.07,t.skyMat)),[-1,1].forEach(H=>m.add(I(.26,1.8,.05,16762063,2.9+H*1.08,2.25,-$n/2+.2))),m.add(I(2.8,.4,3.4,15918810,0,.28,-1.85)),m.add(I(2.6,.22,3.2,16777215,0,.58,-1.85)),m.add(I(3,1.5,.22,16171471,0,1,-3.48)),m.add(I(2.7,.18,.1,16372702,0,1.6,-3.36)),[-.62,.62].forEach(H=>m.add(I(1,.2,.55,16775925,H,.8,-3))),m.add(I(2.72,.12,2.35,16368595,0,.98,-1.25)),m.add(I(2.74,.14,.32,16777215,0,.99,-2.3)),[-1.4,1.4].forEach(H=>m.add(I(.12,.5,2.3,16368595,H,.75,-1.25)));let L=hs(16748465);L.scale.setScalar(.32),L.position.set(0,1.25,-3.3),m.add(L),[-1.95,1.95].forEach(H=>{m.add(I(.75,.62,.6,14861214,H,.31,-3.05)),m.add(I(.79,.05,.64,15785156,H,.64,-3.05)),m.add(I(.5,.05,.02,12883572,H,.42,-2.74))}),m.add(I(.22,.22,.22,16171471,-1.95,.77,-3.05));let D=new Pt(new ke(.4,.3,.4),new ve({color:16773590,emissive:16765562,emissiveIntensity:0,map:hi(dt.PLASTER)}));D.position.set(-1.95,1.02,-3.05),m.add(D),t.bedLamp=D;let z=new qt;z.position.set(1.95,.7,-3),z.rotation.y=-.3,z.userData.pick="album",m.add(z),z.add(I(.5,.08,.38,13231096,0,0,0)),z.add(I(.04,.085,.38,11127784,-.25,0,0));let A=hs(16027569);A.scale.setScalar(.15),A.rotation.x=-Math.PI/2,A.position.set(.02,.045,.06),z.add(A),t.album=z;let S=new qt;S.userData.pick="down",m.add(S),S.add(I(1.3,.04,2.6,12098694,-3.75,.005,1.2)),[.1,.6,1.1,1.6,2.1].forEach((H,W)=>S.add(I(1.2,.03,.42,10257008,-3.75,.02,.05+H-W*.02)));for(let H=0;H<6;H++)S.add(I(.06,.85,.06,16777215,-3.05,.42,-.05+H*.5));S.add(I(.08,.08,2.6,16777215,-3.05,.86,1.2));let k=wd(-Math.PI*3/4,.45);k.position.set(-3.75,.75,1.2),S.add(k);let tt=new Pt(new Xe(1,1,.03,32),de(14281207));tt.scale.set(1.8,1,1.1),tt.position.set(.6,.02,1),m.add(tt),Cn(m,3.95,.4);for(let H=0;H<14;H++){let W=new Pt(new pn(.05,6,5),new Je({color:[16773544,16758465][H%2]}));W.position.set(-4+H*.62,3.45-Math.sin(H*.9)*.08,-3.38),m.add(W)}t.bedSpots=[{x:x-.45,z:-1.42},{x:x+.45,z:-1.42}]},corners:{main:[.2,2.8,6.6,0,1.3,-1.9],bed:[14.2,2.6,3.4,14,.9,-2.3],meal:[1,2.6,5.6,1.2,1,-.6],album:[15.75,1.75,-1.85,15.9,.55,-3.05]}},game:{first:"main",build(n,t){n.add(I(2.6,.6,.6,12883572,0,.3,-3.05)),n.add(I(2.2,1.3,.1,3025462,0,1.35,-3.15));let e=I(2.05,1.15,.02,0,0,1.35,-3.09,new Je({color:10934504}));n.add(e),[[-.6,1.55,16758465],[.1,1.2,16111752],[.6,1.6,10738109]].forEach(([s,r,o])=>n.add(I(.3,.3,.01,0,s,r,-3.075,new Je({color:o})))),n.add(I(.5,.12,.35,16777215,.8,.66,-2.95));let i=new Pt(new pn(.7,14,10),de(16165309));i.scale.set(1.1,.6,1),i.position.set(.2,.4,-.4),i.castShadow=!0,n.add(i),t.seats=[{x:.2,z:-.45,ry:Math.PI,y:.78}],t.gamer=!0,No(n,-4.44,2.2,-.8,Math.PI/2),Wi(n,4.44,2.2,-.4,-Math.PI/2,1.2,1.5,14273008,[[0,.3,16758465,.5],[0,-.35,16111752,.4]]),fi(n,-4.25,1.8,Math.PI/2,5),Cn(n,3.9,-3),t.windowX=2.9},corners:{main:[.4,2.8,5.6,0,1.1,-2.6]}},language:{first:"main",build(n,t){let e=ui(n,-1.2,-2.3,0,16171471);e.add(I(.5,.05,.36,16777215,-.2,.83,0)),e.add(I(.5,.05,.36,16774888,.32,.83,0)),e.add(I(.02,.06,.36,12883572,.06,.84,0)),[10934504,16758465,16111752].forEach((s,r)=>e.add(I(.4,.07,.28,s,.85,.83+r*.075,-.05)));let i=new Pt(new pn(.18,20,14),de(10473444));i.position.set(-.8,1.08,0),e.add(i),e.add(I(.05,.25,.05,12883572,-.8,.9,0)),Wn(n,-1,-1.45,Math.PI),t.seat={x:-1,z:-1.5,ry:Math.PI,y:.54},Wi(n,-4.45,1.9,.2,Math.PI/2,2.4,1.4,16777215,[[-.75,.35,16758465],[-.25,.35,16773544],[.25,.35,10934504],[.75,.35,10738109],[-.5,-.25,14273008],[0,-.25,16758465],[.5,-.25,16773544]]),fi(n,4.25,-.4,-Math.PI/2,5),No(n,4.44,2.3,1.8,-Math.PI/2),Cn(n,3.9,-3),t.windowX=2.2},corners:{main:[-.3,2.9,5.8,-.9,1.1,-2.3]}},skills:{first:"main",build(n,t){let e=ui(n,-.6,-2.3,0,16111752);Bs(e,-.3,0),e.add(I(.45,.04,.32,16777215,.45,.83,.05)),e.add(I(.02,.02,.3,15235487,.62,.86,.05));let i=I(.6,.3,.32,15035243,3.4,.15,-2.6);n.add(i),n.add(I(.3,.05,.05,3814720,3.4,.35,-2.6)),Wn(n,-.4,-1.45,Math.PI),t.seat={x:-.4,z:-1.5,ry:Math.PI,y:.54};let s=new qt;s.position.set(-3.3,0,-1.6),s.rotation.y=.5,n.add(s),[-.4,.4].forEach(r=>{let o=I(.07,1.9,.07,12883572,r,.95,0);o.rotation.z=-r*.15,s.add(o)}),s.add(I(1,.8,.05,16777215,0,1.35,.06)),s.add(I(.5,.3,.06,10934504,-.15,1.45,.08)),s.add(I(.25,.25,.06,16758465,.25,1.2,.08)),Wi(n,4.44,2,-.5,-Math.PI/2,1.6,1.2,16777215,[[-.5,-.25,10738109,.3],[-.15,-.1,16111752,.3],[.2,.05,16758465,.3],[.55,.2,10934504,.3]]),fi(n,-4.25,1.4,Math.PI/2,5),Cn(n,3.9,2.4),t.windowX=2.4},corners:{main:[0,2.9,5.8,-.3,1.1,-2.2]}},notes:{first:"main",build(n,t){let e=ui(n,-.8,-2.3,0,16111752);Bs(e,.4,0),[16758465,10934504,16773544].forEach((i,s)=>e.add(I(.36,.05,.48,i,-.5,.83+s*.055,.02+s*.03))),Wn(n,-.6,-1.45,Math.PI),t.seat={x:-.6,z:-1.5,ry:Math.PI,y:.54},Wi(n,-.6,2.2,-3.44,0,2.6,1.3,14267535,[[-1,.35,16773544],[-.55,.3,16758465],[-.1,.38,10934504],[.35,.32,10738109],[.85,.36,16773544],[-.8,-.25,14273008],[-.3,-.22,16773544],[.2,-.28,16758465],[.7,-.24,10934504]]),fi(n,4.25,-.4,-Math.PI/2,5),Cn(n,-3.9,-3),t.windowX=2.8},corners:{main:[-.2,2.9,5.8,-.6,1.3,-2.4]}},goals:{first:"main",build(n,t){Wi(n,0,2.15,-3.44,0,3,1.6,16777215,[[-1.1,.35,10934504,.45],[-.45,.4,16758465,.4],[.55,.38,10738109,.45],[1.15,.3,16111752,.4],[-.9,-.35,14273008,.45],[.95,-.35,16758465,.4]]);let e=hs(16765803);e.scale.setScalar(.5),e.position.set(0,2.1,-3.3),n.add(e);let i=ui(n,-1.8,-1.9,.25,14273008);Bs(i,0,0),Wn(n,-1.7,-1.05,Math.PI+.25),t.seat={x:-1.68,z:-1.1,ry:Math.PI+.25,y:.54};let s=new Pt(new Xe(.22,.12,.36,18),de(16107596));s.position.set(3.7,1.28,-2.7),n.add(s),n.add(I(.5,.9,.5,15785156,3.7,.45,-2.7)),n.add(I(.2,.12,.2,16107596,3.7,1,-2.7)),Cn(n,-3.9,-3),t.windowX=3.2},corners:{main:[.2,2.8,5.8,-.2,1.4,-2.4]}},health:{first:"main",build(n,t){let e=I(1,.04,2,10738109,-1.6,.03,-.6);e.castShadow=!1,n.add(e),[[-.7,-1.4],[-.45,-1.4]].forEach(([o,a])=>{n.add(I(.36,.05,.05,9080729,o,.12,a)),[-.16,.16].forEach(c=>{let l=new Pt(new Xe(.1,.1,.08,16),de(15834032));l.rotation.z=Math.PI/2,l.position.set(o+c,.12,a),n.add(l)})}),n.add(I(.9,1.6,.8,16777215,3.6,.8,-2.9)),n.add(I(.05,.4,.05,12633806,3.2,1,-2.48)),n.add(I(.9,.04,.82,15328478,3.6,1.1,-2.9));let i=ui(n,1.2,-2.4,0,16766665),s=new Pt(new pn(.25,20,12,0,Math.PI*2,Math.PI/2,Math.PI/2),de(16777215));s.position.set(0,1.04,0),i.add(s),[[16744319,-.08,0],[16765803,.08,.04],[10147472,0,-.08]].forEach(([o,a,c])=>{let l=new Pt(new pn(.09,14,10),de(o));l.position.set(a,1.04,c),i.add(l)});let r=new Pt(new Xe(.07,.07,.3,14),de(10473444));r.position.set(.5,.98,.1),i.add(r),Wn(n,1.4,-1.55,Math.PI),t.seat={x:1.4,z:-1.6,ry:Math.PI,y:.54},No(n,-4.44,2.2,-.6,Math.PI/2),Cn(n,-3.9,-3),t.windowX=-.6},corners:{main:[.4,2.8,5.8,.2,1,-2]}},law:{first:"main",build(n,t){fi(n,-4.25,-.8,Math.PI/2,5),fi(n,-4.25,1.4,Math.PI/2,5),fi(n,4.25,-.4,-Math.PI/2,5);let e=ui(n,.2,-2.3,0,12883572);Bs(e,-.4,0);let i=new qt;i.position.set(.55,.83,0),e.add(i),i.add(I(.04,.5,.04,14267466,0,.25,0)),i.add(I(.5,.03,.03,14267466,0,.48,0)),[-.24,.24].forEach(s=>{let r=new Pt(new Xe(.09,.06,.03,16),de(14267466));r.position.set(s,.3,0),i.add(r),i.add(I(.01,.18,.01,14267466,s,.39,0))}),Wn(n,.4,-1.45,Math.PI),t.seat={x:.4,z:-1.5,ry:Math.PI,y:.54},Cn(n,3.9,2.4),t.windowX=2.4},corners:{main:[.2,2.9,5.8,.1,1.2,-2.3]}},store:{first:"main",build(n,t){n.add(I(2.6,1,.7,10147520,-.2,.5,-1.15)),n.add(I(2.7,.06,.8,16777215,-.2,1.03,-1.15));for(let f=0;f<5;f++)n.add(I(.3,.6,.02,8372906,-1.2+f*.5,.5,-.79));let s=new qt;s.position.set(.55,1.06,-1.2),n.add(s),s.add(I(.5,.14,.4,5591134,0,.07,0));let r=I(.4,.28,.04,5591134,0,.32,-.12);r.rotation.x=-.3,s.add(r);let o=I(.34,.22,.02,0,0,.32,-.095,new Je({color:12579544}));o.rotation.x=-.3,s.add(o);for(let f=0;f<3;f++)for(let d=0;d<3;d++)s.add(I(.07,.02,.06,15394544,-.1+d*.1,.15,.04+f*.06));let a=Gi("onigiri",{},.26);a.position.set(-.9,1.06,-1.1),n.add(a);let c=Gi("cup",{drink:"#d9b08a",boba:!0},.3);c.position.set(-.55,1.06,-1.05),n.add(c);let l=Gi("bun",{bun:"#fff8ee"},.26);l.position.set(-1.25,1.06,-1.15),n.add(l);let h=[["cup",{drink:"#ff8fb0",cream:!0}],["cookie",{}],["donut",{}],["onigiri",{}],["mochi",{}],["cup",{drink:"#8a5a3a",ice:!0}],["kimbap",{}],["flan",{}]];[-2.6,2.2].forEach((f,d)=>{let g=new qt;g.position.set(f,0,-3.15),n.add(g),g.add(I(1.9,2.3,.5,15920614,0,1.15,0));for(let M=0;M<4;M++){g.add(I(1.8,.05,.46,14208964,0,.32+M*.52,.04));for(let x=0;x<5;x++){let[m,T]=h[(x+M*2+d*3)%h.length],E=Gi(m,T,.3);E.position.set(-.72+x*.36,.35+M*.52,.06),g.add(E)}}g.add(I(1.9,.18,.52,d?16165309:16765803,0,2.2,.02))});let u=new qt;u.position.set(4,0,-.6),u.rotation.y=-Math.PI/2,n.add(u),u.add(I(1.6,2.3,.7,15266552,0,1.15,0)),u.add(I(1.44,2,.02,0,0,1.15,.36,new Je({color:14677247,transparent:!0,opacity:.35})));for(let f=0;f<4;f++)for(let d=0;d<5;d++){let g=[16748410,10147472,16765803,10473471,16752575][(d+f)%5];u.add(I(.14,.32,.14,g,-.56+d*.28,.36+f*.48,.12)),u.add(I(.1,.06,.1,16777215,-.56+d*.28,.55+f*.48,.12))}u.add(I(1.6,.2,.72,10147520,0,2.2,0)),Cn(n,-4,2.4),t.seat={x:-.1,z:-1.85,ry:0,y:0,stand:!0},t.windowX=-3.2},corners:{main:[.1,1.9,5,-.1,1.45,-2.2]}},other:{first:"main",build(n,t){let e=ui(n,-1,-2.3);Bs(e,0,0),Wn(n,-.8,-1.45,Math.PI),t.seat={x:-.8,z:-1.5,ry:Math.PI,y:.54},fi(n,4.25,-.6,-Math.PI/2),Cn(n,-3.9,-3)},corners:{main:[0,2.9,5.8,0,1.1,-2]}}};function C1(n,t){iu.length=0,t=t||{};let e=Zh[t.house]||(t.kind==="game"?Zh.game:Zh.other),i=new fo({antialias:!0});i.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),i.shadowMap.enabled=!0,i.shadowMap.type=qa,n.appendChild(i.domElement);let s=new po,r=new fn(48,1,.1,100),o=Uo(t.roof||16165309,.72),a=Uo(t.roof||16165309,.55);s.background=new ae(Uo(t.roof||16165309,.82));let c=new qt;s.add(c);let l=$n+ac,h=ac/2;for(let B=0;B<12;B++){let et=I(je/12,.1,l,B%2?15323054:14861214,-je/2+(B+.5)*je/12,-.05,h);et.castShadow=!1,c.add(et)}let u=I(je,on,.12,o,0,on/2,-$n/2);u.castShadow=!1,c.add(u),[-1,1].forEach(B=>{let et=I(.12,on,l,a,B*je/2,on/2,h);et.castShadow=!1,et.receiveShadow=!0,c.add(et)});let f=Uo(t.roof||16165309,.9),d=new ve({color:f,emissive:f,emissiveIntensity:.3});if(t.house==="love"){let Z=h-l/2,ht=h+l/2;[[-2.25,je/2,Z,ht],[-je/2,-2.25,-2.3,ht]].forEach(([_t,gt,Tt,ce])=>{let oe=I(gt-_t,.12,ce-Tt,0,(_t+gt)/2,on+.06,(Tt+ce)/2,d);oe.castShadow=!1,c.add(oe)});let Nt=-2.25+je/2,$=-2.3-Z,ft=Uo(t.roof||16165309,.8);[[-je/2+Nt/2,Z+.06,Nt,.12],[-je/2+Nt/2,-2.3,Nt,.12],[-2.25,Z+$/2,.12,$]].forEach(([_t,gt,Tt,ce])=>c.add(I(Tt,2.2,ce,ft,_t,on+1.1,gt))),c.add(I(Nt,.1,$,0,-je/2+Nt/2,on+2.2,Z+$/2,new Je({color:16773590}))),c.add(I(Nt,.06,$*.9,14267535,-je/2+Nt/2-.2,on+.9,Z+$/2))}else{let B=I(je,.12,l,0,0,on+.06,h,d);B.castShadow=!1,c.add(B)}let g=B=>{B.castShadow=!1,c.add(B)};g(I(je,.16,.12,16777215,0,on-.08,-$n/2+.1)),[-1,1].forEach(B=>g(I(.12,.16,l,16777215,B*(je/2-.1),on-.08,h))),g(I(je,.14,.04,16777215,0,.07,-$n/2+.08)),[-1,1].forEach(B=>g(I(.04,.14,l,16777215,B*(je/2-.08),.07,h)));let M=new Je({color:12575733}),x=new Pt(new Xe(1,1,.03,32),de(16176348));x.scale.set(2,1,1.3),x.position.set(.3,.02,.6),x.receiveShadow=!0,c.add(x);let m=I(.03,.55,.03,9206379,.3,on-.27,.3);m.castShadow=!1,c.add(m);let T=new Pt(new ke(.6,.4,.6),new ve({color:16773544,emissive:16765562,emissiveIntensity:0,map:hi(dt.PLASTER)}));T.position.set(.3,on-.72,.3),T.castShadow=!1,c.add(T);let E={wall:o,wall2:a,ceil:f,skyMat:M};e.build(c,E);{let B=E.windowX!=null?E.windowX:2.2,et=2.1,Z=-$n/2;c.add(I(1.9,1.5,.08,16777215,B,et,Z+.06)),c.add(I(1.7,1.3,.09,0,B,et,Z+.07,M)),c.add(I(.05,1.3,.1,16777215,B,et,Z+.1)),c.add(I(1.7,.05,.1,16777215,B,et,Z+.1));let ht=I(2.5,.05,.05,12883572,B,et+.9,Z+.2);ht.castShadow=!1,c.add(ht),[-1,1].forEach(Nt=>{let $=I(.24,1.75,.05,16762063,B+Nt*1.08,et+0,Z+.2);$.castShadow=!1,c.add($);let ft=I(.28,.06,.07,16165309,B+Nt*1.08,et-.25,Z+.22);ft.castShadow=!1,c.add(ft)})}let b=[];c.traverse(B=>{B.userData.hands&&(b=B.userData.hands)});let G=E.seats||(E.seat?[E.seat]:[]),L=t.looks||(t.look?[t.look]:[]),D=G.slice(0,L.length).map((B,et)=>{let Z=Fo(L[et]);return c.add(Z.g),B.stand?(Z.g.position.set(B.x,0,B.z),Z.g.rotation.y=B.ry,Z.standing=!0,Z):(Z.g.position.set(B.x,B.y-jh,B.z),Z.g.rotation.y=B.ry,Z.parts.legL.rotation.x=Z.parts.legR.rotation.x=-1.45,Z)});if(t.mate&&G[0]&&!E.couple){let B=G[0],et=Fo(t.mate);c.add(et.g);let Z=B.stand?B.x+.8:B.x+.85,ht=B.stand?B.z:B.z+.35;et.g.position.set(Z,0,ht),et.g.rotation.y=B.ry+(B.stand?0:-.9),E.mateW=et}let z=(t.guests||[]).map((B,et)=>{let Z=Fo(B);return c.add(Z.g),Z.g.position.set(et?1:-1.25,0,-.25),Z.g.rotation.y=Math.PI+(et?.25:-.25),Z}),A=E.sofa||E.gamer?null:D[0]||null,S="",k=[];E.couple&&D.forEach((B,et)=>{B.g.userData.pick="couple";let Z=t.names&&(et===0?t.names.her:t.names.him)||(et===0?"namu":"hunf"),ht=_1(Z,"#ffffff",.19);c.add(ht),k.push(ht)});let tt=(()=>{let B=hs(16744350);return B.scale.setScalar(.16),B.visible=!1,c.add(B),B})(),H=-1,W="",q=!1,Y=!1,xt=()=>W==="bed"?"bed":S==="lunch"||S==="dinner"?"meal":e.corners[t.corner]?t.corner:e.first,j=null,Mt=document.createElement("div");Mt.style.cssText="position:absolute;inset:0;background:#fff6ee;opacity:0;pointer-events:none;transition:opacity .45s ease;z-index:2",getComputedStyle(n).position==="static"&&(n.style.position="relative"),n.appendChild(Mt);let at=(B,et,Z)=>new U(B,et,Z),Wt={up:{legs:[[at(-.4,1.8,.8),at(-3.4,3.4,-2.95),.9],[at(-2.2,3.2,-2.6),at(-4.2,5.4,-2.9),.8],[at(-3.4,5,-2.9),at(-4.4,5.8,-2.9),.6,!0]],out:[at(10.7,1.7,2.9),at(12.8,1.2,-1.2)]},down:{legs:[[at(11.2,1.75,2.4),at(10.25,.1,.9),.8],[at(10.6,1.05,1.5),at(10.2,-.8,.2),.7,!0]],out:[at(-3.7,4.3,-2.1),at(-.6,1.6,-2.95)]}},Zt={yaw:0,want:0,x0:0,w0:0,on:!1},Ee=new U;{let B=i.domElement;B.addEventListener("pointerdown",Z=>{Zt.on=!0,Zt.x0=Z.clientX,Zt.w0=Zt.want}),B.addEventListener("pointermove",Z=>{Zt.on&&(Zt.want=Math.max(-.55,Math.min(.55,Zt.w0+(Z.clientX-Zt.x0)*.004)))});let et=()=>{Zt.on=!1};B.addEventListener("pointerup",et),B.addEventListener("pointercancel",et),B.addEventListener("pointerleave",et)}function mt(B,et){Zt.want=0;let Z=W&&B!==W;if(W=B,et||!Z){j=null,Mt.style.opacity=0,Ot(xt(),et);return}j={def:Wt[B==="bed"?"up":"down"],leg:0,t:0,p0:ut.clone(),t0:bt.clone()}}function Ct(B){let et=j.def.legs[j.leg];j.t+=B/et[2],et[3]&&Mt.style.opacity!=="1"&&(Mt.style.opacity=1);let Z=Math.min(1,j.t),ht=Z*Z*(3-2*Z);if(ut.lerpVectors(j.p0,et[0],ht),bt.lerpVectors(j.t0,et[1],ht),O.copy(ut),Yt.copy(bt),!(Z<1)){if(++j.leg<j.def.legs.length){j.t=0,j.p0=ut.clone(),j.t0=bt.clone();return}ut.copy(j.def.out[0]),bt.copy(j.def.out[1]),j=null,Ot(xt(),!1),setTimeout(()=>{Mt.style.opacity=0},120)}}let Xt=Od("z Z z","#7a6a9a",.9,.45);if(c.add(Xt),t.onPick){let B=new Sr,et=new wt,Z=null,ht=i.domElement,Nt=(ft,_t)=>{let gt=ht.getBoundingClientRect();et.set((ft-gt.left)/gt.width*2-1,-((_t-gt.top)/gt.height)*2+1),B.setFromCamera(et,r);let Tt=B.intersectObjects(c.children,!0).find(oe=>{if(oe.object.isSprite)return!1;let $t=oe.object;for(;$t&&!$t.userData.pick;)$t=$t.parent;return!!$t});if(!Tt)return"";let ce=Tt.object;for(;ce&&!ce.userData.pick;)ce=ce.parent;return ce.userData.pick},$=ft=>{if(ft==="couple"){H<0&&(H=0);return}if(ft==="up"||ft==="down"){q=!0,mt(ft==="up"?"bed":"main");return}if(ft==="album"){Y=!0,Ot("album"),setTimeout(()=>t.onPick("album"),750);return}t.onPick(ft)};ht.addEventListener("contextmenu",ft=>ft.preventDefault()),ht.addEventListener("pointerdown",ft=>{Z={x:ft.clientX,y:ft.clientY,type:ft.pointerType}}),ht.addEventListener("pointerup",ft=>{if(!Z||Math.hypot(ft.clientX-Z.x,ft.clientY-Z.y)>8){Z=null;return}Z=null;let _t=Nt(ft.clientX,ft.clientY);_t&&$(_t)})}let Et=E.gamer?D[0]:null,jt=new Ao(16777215,14861214,1.4);s.add(jt);let re=new Co(16774374,1.6);re.position.set(2.5,on-.3,8),re.target.position.set(0,0,-2),s.add(re.target),re.castShadow=!0,re.shadow.mapSize.set(1024,1024),Object.assign(re.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:.5,far:25}),re.shadow.bias=-.001,s.add(re);let Kt=new Ro(16767392,0,12,1.3);Kt.position.set(.3,on-1.1,.3),s.add(Kt);function ge(){let B=new Date,et=t.timeMode==="day"?11:t.timeMode==="night"?22:B.getHours()+B.getMinutes()/60,Z=Bd(et);M.color.copy(Z.sky),jt.intensity=1.5-Z.night*.7,re.intensity=1.6*(1-Z.night)+.2,Kt.intensity=Z.night*8,T.material.emissiveIntensity=Z.night,b.length&&(b[0].rotation.z=-(B.getHours()%12)/12*Math.PI*2,b[1].rotation.z=-B.getMinutes()/60*Math.PI*2)}let ut=new U,bt=new U,O=new U,Yt=new U;function At(B){return e.corners[B]||e.corners[e.first]}function Ot(B,et){let Z=At(B);O.set(Z[0],Z[1],Z[2]),Yt.set(Z[3],Z[4],Z[5]),et&&(ut.copy(O),bt.copy(Yt))}Ot(t.corner,!0),t.walkIn&&(ut.set(0,1.7,$n/2+3.2),bt.set(0,1.4,-$n/2));function Dt(){let B=n.clientWidth||innerWidth,et=n.clientHeight||innerHeight;i.setSize(B,et,!1),r.aspect=B/et,r.fov=B/et<.9?64:50,B/et<.9?r.setViewOffset(B,et,0,-et*.2,B,et):r.clearViewOffset(),r.updateProjectionMatrix()}Dt();let Qt=()=>Dt();window.addEventListener("resize",Qt);let Vt=new Po,P=new U,w=!0,Q=0;function pt(){if(!w||(requestAnimationFrame(pt),document.hidden))return;let B=Math.min(.1,Vt.getDelta()),et=Vt.elapsedTime;if(j?Ct(B):(ut.lerp(O,Math.min(1,B*1.6)),bt.lerp(Yt,Math.min(1,B*1.6))),Zt.yaw+=((j||Y?0:Zt.want)-Zt.yaw)*Math.min(1,B*8),Ee.copy(bt).sub(ut).applyAxisAngle(We.DEFAULT_UP,Zt.yaw),r.position.copy(ut),r.lookAt(Ee.add(ut)),x1(et),E.couple){let Z=new Date,ht=Z.getHours()+Z.getMinutes()/60,Nt=ht>=22||ht<6.5?"sleep":ht>=11.5&&ht<13?"lunch":ht>=18.5&&ht<19.75?"dinner":"sofa";if(Nt!==S){S=Nt,!q&&!Y&&mt(Nt==="sleep"?"bed":"main",!W&&!t.walkIn);let $=Nt==="lunch"||Nt==="dinner"?E.dining:E.seats;D.forEach((ft,_t)=>{if(Nt==="sleep"){let gt=E.bedSpots[_t];ft.g.position.set(gt.x,.9,gt.z),ft.g.rotation.set(-Math.PI/2,0,0),ft.parts.legL.rotation.x=ft.parts.legR.rotation.x=0}else ft.g.position.set($[_t].x,$[_t].y-jh,$[_t].z),ft.g.rotation.set(0,$[_t].ry,0),ft.parts.legL.rotation.x=ft.parts.legR.rotation.x=-1.45;ft.sleepMap||(ft.sleepMap=Dd(ft.parts.look,!0)),ft.awakeMap||(ft.awakeMap=ft.parts.mat.map),ft.parts.mat.map=Nt==="sleep"?ft.sleepMap:ft.awakeMap,ft.parts.mat.needsUpdate=!0}),Xt.visible=Nt==="sleep"}if(D.forEach(($,ft)=>{let _t=ft===0?-1:1;S==="lunch"||S==="dinner"?($.parts.armL.rotation.x=-.9,$.parts.armR.rotation.x=-1.35+Math.sin(et*2.6+ft*1.7)*.45,$.parts.head.rotation.set(.12+Math.max(0,Math.sin(et*2.6+ft*1.7))*.12,0,0)):S==="sleep"?($.parts.armL.rotation.x=$.parts.armR.rotation.x=0,$.parts.head.rotation.set(.6,-_t*(.35+Math.sin(et*.9)*.03),0)):($.parts.armL.rotation.x=$.parts.armR.rotation.x=-.6,$.parts.head.rotation.set(0,-_t*.25,-_t*(.18+Math.sin(et*.8)*.04)))}),Xt.visible&&(Xt.position.set(14,1.6+et*.25%.4,-3),Xt.material.opacity=.9-et*.25%.4*1.5),D.forEach(($,ft)=>{$.parts.head.getWorldPosition(k[ft].position),k[ft].position.y+=S==="sleep"?.62:.55}),H>=0){H+=B;let $=D[1],ft=D[0],_t=Math.sin(Math.min(1,H/1.6)*Math.PI);$.parts.head.rotation.y+=(S==="sleep"?-.5:-.9)*_t,$.parts.head.rotation.z+=.25*_t,ft.parts.head.rotation.z-=.2*_t,S!=="sleep"&&($.g.rotation.z=.16*_t);let gt=new U;ft.parts.head.getWorldPosition(gt);let Tt=new U;$.parts.head.getWorldPosition(Tt),tt.visible=H>.5,tt.position.copy(gt).lerp(Tt,.5),tt.position.y+=.35+(H-.5)*.35,tt.scale.setScalar(.12+Math.min(1,(H-.5)*2)*.06),tt.rotation.y=r.rotation.y,H>2.1&&(H=-1,tt.visible=!1,$.g.rotation.z=0)}E.bedLamp&&(E.bedLamp.material.emissiveIntensity=S==="sleep"?.15:.6*Kt.intensity/8)}else E.sofa&&D.forEach((Z,ht)=>{Z.parts.armL.rotation.x=Z.parts.armR.rotation.x=-.6,Z.parts.head.rotation.z=(ht===0?-1:1)*(.18+Math.sin(et*.8)*.04),Z.parts.head.rotation.y=(ht===0?1:-1)*.25});if(Et&&(Et.parts.armL.rotation.x=Et.parts.armR.rotation.x=-1.1+Math.sin(et*14)*.05,Et.parts.head.rotation.x=-.05,Et.parts.head.rotation.y=Math.sin(et*.5)*.08),E.mateW&&(E.mateW.parts.head.rotation.y=-.4+Math.sin(et*.6)*.25,E.mateW.parts.armR.rotation.x=Math.sin(et*1.1)*.15-.1),z.forEach((Z,ht)=>{Z.parts.head.rotation.y=Math.sin(et*.5+ht*2)*.3,Z.parts.armL.rotation.x=Math.sin(et*.8+ht)*.06}),A&&A.standing){let Z=et%9<1.4;A.parts.armL.rotation.x=-.35+Math.sin(et*1.3)*.05,A.parts.armR.rotation.x=Z?-2.6:-.35+Math.sin(et*1.3+1)*.05,A.parts.armR.rotation.z=Z?-.3+Math.sin(et*14)*.25:0,A.parts.head.rotation.y=Math.sin(et*.4)*.2,A.parts.head.rotation.x=0}else A&&(A.parts.armL.rotation.x=-1.2+Math.sin(et*9)*.12,A.parts.armR.rotation.x=-1.2+Math.sin(et*9+1.8)*.12,A.parts.head.rotation.x=.15+Math.sin(et*.6)*.05,A.parts.head.rotation.y=Math.sin(et*.35)*.25);(et-Q>20||Q===0)&&(ge(),Q=et||.001),i.render(s,r),P.set(.3,.05,.6).project(r),document.documentElement.style.setProperty("--rug-x",((P.x+1)/2*100).toFixed(1)+"vw"),document.documentElement.style.setProperty("--rug-y",((1-P.y)/2*100).toFixed(1)+"vh")}ge(),requestAnimationFrame(pt),/[?&]debug3d/.test(location.search)&&(window.__room={camera:r,R:E,renderer:i,sitters:D});function vt(B){if(!E.dinner)return;(E.foodMeshes||[]).forEach(ht=>{E.dinner.remove(ht)}),E.foodMeshes=[],B=(B||[]).filter(ht=>ht&&ht.name).slice(0,4),E.defaultDishes.forEach(ht=>{ht.visible=!B.length});let et=[[0],[-.33,.33],[-.48,0,.48],[-.54,-.18,.18,.54]][Math.max(0,B.length-1)]||[],Z=new wo;Z.setCrossOrigin("anonymous"),B.forEach((ht,Nt)=>{let $=new qt;$.position.set(et[Nt],.8,-.12+Nt%2*.06),E.dinner.add($),E.foodMeshes.push($);let ft=new Pt(new Xe(.2,.15,.05,24),de(16777215));$.add(ft);let _t=new Pt(new Is(.19,.015,8,24),de([16171471,13231096,16773544,13495501][Nt]));_t.rotation.x=Math.PI/2,_t.position.y=.025,$.add(_t);let gt=ht.key&&window.FoodArt&&window.FoodArt.spec&&window.FoodArt.spec(ht.key);if(gt){$.remove(ft),$.remove(_t),$.add(I(.46,.02,.46,[16171471,13231096,16773544,13495501][Nt],0,-.01,0));let $t=Gi(gt.tpl,gt.o,.4);$t.position.y=0,$t.rotation.y=(Nt-1.5)*.25,$.add($t);return}let Tt=new ve({color:16777215}),ce=new Pt(new ka(.16,28),Tt);ce.rotation.x=-Math.PI/2,ce.position.y=.03,$.add(ce);let oe=()=>{let $t=document.createElement("canvas");$t.width=$t.height=128;let X=$t.getContext("2d");X.fillStyle=["#ffe1e9","#e1f0fb","#fff6cf","#e3f5e1"][Nt],X.fillRect(0,0,128,128),X.font="64px sans-serif",X.textAlign="center",X.fillText("\u{1F372}",64,76),X.font="800 16px Nunito, sans-serif",X.fillStyle="#8a5a6a",X.fillText(ht.name.slice(0,14),64,112),Tt.map=new dn($t),Tt.map.colorSpace=Le,Tt.needsUpdate=!0};if(!ht.img){oe();return}if(/^data:image\/svg/.test(ht.img)){let $t=new Image;$t.onload=()=>{let X=document.createElement("canvas");X.width=X.height=256;let Ut=X.getContext("2d");Ut.fillStyle="#fffaf5",Ut.fillRect(0,0,256,256),Ut.drawImage($t,0,0,256,256),Tt.map=new dn(X),Tt.map.colorSpace=Le,Tt.needsUpdate=!0},$t.onerror=oe,$t.src=ht.img;return}Z.load(ht.img,$t=>{$t.colorSpace=Le;let X=$t.image.width/$t.image.height;X>1?($t.repeat.set(1/X,1),$t.offset.set((1-1/X)/2,0)):($t.repeat.set(1,X),$t.offset.set(0,(1-X)/2)),Tt.map=$t,Tt.needsUpdate=!0},void 0,oe)})}return{house:t.house,setCorner(B){if(E.couple){t.corner=B,Y||Ot(xt(),!1);return}Ot(B,!1)},back(){Y=!1,Ot(xt(),!1)},setFood:vt,get floor(){return W},setPhotos(B){if(!E.frames)return;let et=new wo;E.frames.forEach((Z,ht)=>{B[ht]&&et.load(B[ht],Nt=>{Nt.colorSpace=Le;let $=Nt.image,ft=Z.geometry.parameters.width,_t=Z.geometry.parameters.height,gt=$.width/$.height,Tt=ft/_t;gt>Tt?(Nt.repeat.set(Tt/gt,1),Nt.offset.set((1-Tt/gt)/2,0)):(Nt.repeat.set(1,gt/Tt),Nt.offset.set(0,(1-gt/Tt)/2)),Z.material.map=Nt,Z.material.color.set(16777215),Z.material.needsUpdate=!0})})},setTimeMode(B){t.timeMode=B,ge()},destroy(){w=!1,window.removeEventListener("resize",Qt),s.traverse(B=>{B.geometry&&B.geometry.dispose()}),i.dispose(),i.domElement.remove(),Mt.remove()}}}window.Village3D={create:E1,room:C1,LOOKS:sc,LOVE:$h,ROOF:bi.roof,lookAs:Nd};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
