(()=>{var ph="170",Ts={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fd=0,lu=1,Bd=2;var wf=1,Ha=2,Ri=3,Ji=0,xn=1,gn=2,Zi=0,rr=1,hu=2,uu=3,fu=4,zd=5,ds=100,Hd=101,kd=102,Vd=103,Gd=104,Wd=200,Xd=201,Yd=202,qd=203,Gc=204,Wc=205,Zd=206,Kd=207,Jd=208,$d=209,jd=210,Qd=211,tp=212,ep=213,np=214,Xc=0,Yc=1,qc=2,lr=3,Zc=4,Kc=5,Jc=6,$c=7,mh=0,ip=1,sp=2,Ki=0,rp=1,op=2,ap=3,cp=4,lp=5,hp=6,up=7;var Tf=300,hr=301,ur=302,jc=303,Qc=304,ka=306,Qr=1e3,ms=1001,tl=1002,qe=1003,fp=1004;var No=1005;var pi=1006,lc=1007;var gs=1008;var Li=1009,Af=1010,Rf=1011,to=1012,gh=1013,xs=1014,Ci=1015,So=1016,xh=1017,_h=1018,fr=1020,Cf=35902,Pf=1021,If=1022,ii=1023,Lf=1024,Df=1025,or=1026,dr=1027,Uf=1028,yh=1029,Nf=1030,Mh=1031;var vh=1033,ua=33776,fa=33777,da=33778,pa=33779,el=35840,nl=35841,il=35842,sl=35843,rl=36196,ol=37492,al=37496,cl=37808,ll=37809,hl=37810,ul=37811,fl=37812,dl=37813,pl=37814,ml=37815,gl=37816,xl=37817,_l=37818,yl=37819,Ml=37820,vl=37821,ma=36492,El=36494,bl=36495,Of=36283,Sl=36284,wl=36285,Tl=36286;var ga=2300,Al=2301,hc=2302,du=2400,pu=2401,mu=2402;var dp=3200,pp=3201;var Ff=0,mp=1,Yi="",Pe="srgb",_r="srgb-linear",Va="linear",Le="srgb";var zs=7680;var gu=519,gp=512,xp=513,_p=514,Bf=515,yp=516,Mp=517,vp=518,Ep=519,Rl=35044;var xu="300 es",Pi=2e3,xa=2001,Di=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_u=1234567,qr=Math.PI/180,eo=180/Math.PI;function mi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]+"-"+pn[t&255]+pn[t>>8&255]+"-"+pn[t>>16&15|64]+pn[t>>24&255]+"-"+pn[e&63|128]+pn[e>>8&255]+"-"+pn[e>>16&255]+pn[e>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function on(n,t,e){return Math.max(t,Math.min(e,n))}function Eh(n,t){return(n%t+t)%t}function bp(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Sp(n,t,e){return n!==t?(e-n)/(t-n):0}function Zr(n,t,e){return(1-e)*n+e*t}function wp(n,t,e,i){return Zr(n,t,1-Math.exp(-e*i))}function Tp(n,t=1){return t-Math.abs(Eh(n,t*2)-t)}function Ap(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Rp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Cp(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Pp(n,t){return n+Math.random()*(t-n)}function Ip(n){return n*(.5-Math.random())}function Lp(n){n!==void 0&&(_u=n);let t=_u+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Dp(n){return n*qr}function Up(n){return n*eo}function Np(n){return(n&n-1)===0&&n!==0}function Op(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Fp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Bp(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),f=o((t-i)/2),d=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,c*u,c*f,a*l);break;case"YZY":n.set(c*f,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*f,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*d,a*l);break;case"YXY":n.set(c*d,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ni(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ce(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var zf={DEG2RAD:qr,RAD2DEG:eo,generateUUID:mi,clamp:on,euclideanModulo:Eh,mapLinear:bp,inverseLerp:Sp,lerp:Zr,damp:wp,pingpong:Tp,smoothstep:Ap,smootherstep:Rp,randInt:Cp,randFloat:Pp,randFloatSpread:Ip,seededRandom:Lp,degToRad:Dp,radToDeg:Up,isPowerOfTwo:Np,ceilPowerOfTwo:Op,floorPowerOfTwo:Fp,setQuaternionFromProperEuler:Bp,normalize:Ce,denormalize:ni},yt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(on(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pe=class n{constructor(t,e,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],_=s[0],x=s[3],m=s[6],T=s[1],E=s[4],v=s[7],V=s[2],L=s[5],I=s[8];return r[0]=o*_+a*T+c*V,r[3]=o*x+a*E+c*L,r[6]=o*m+a*v+c*I,r[1]=l*_+h*T+u*V,r[4]=l*x+h*E+u*L,r[7]=l*m+h*v+u*I,r[2]=f*_+d*T+g*V,r[5]=f*x+d*E+g*L,r[8]=f*m+d*v+g*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=e*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*l-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(i*c-l*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(uc.makeScale(t,e)),this}rotate(t){return this.premultiply(uc.makeRotation(-t)),this}translate(t,e){return this.premultiply(uc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},uc=new pe;function Hf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function no(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function zp(){let n=no("canvas");return n.style.display="block",n}var yu={};function Xr(n){n in yu||(yu[n]=!0,console.warn(n))}function Hp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function kp(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Vp(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ve={enabled:!0,workingColorSpace:_r,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Le&&(n.r=Ii(n.r),n.g=Ii(n.g),n.b=Ii(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Le&&(n.r=ar(n.r),n.g=ar(n.g),n.b=ar(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Yi?Va:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ar(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Mu=[.64,.33,.3,.6,.15,.06],vu=[.2126,.7152,.0722],Eu=[.3127,.329],bu=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Su=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ve.define({[_r]:{primaries:Mu,whitePoint:Eu,transfer:Va,toXYZ:bu,fromXYZ:Su,luminanceCoefficients:vu,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:Mu,whitePoint:Eu,transfer:Le,toXYZ:bu,fromXYZ:Su,luminanceCoefficients:vu,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}});var Hs,Cl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hs===void 0&&(Hs=no("canvas")),Hs.width=t.width,Hs.height=t.height;let i=Hs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Hs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=no("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ii(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ii(e[i]/255)*255):e[i]=Ii(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Gp=0,_a=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=mi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(fc(s[o].image)):r.push(fc(s[o]))}else r=fc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function fc(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Cl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Wp=0,_n=class n extends Di{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=ms,s=ms,r=pi,o=gs,a=ii,c=Li,l=n.DEFAULT_ANISOTROPY,h=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=mi(),this.name="",this.source=new _a(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qr:t.x=t.x-Math.floor(t.x);break;case ms:t.x=t.x<0?0:1;break;case tl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qr:t.y=t.y-Math.floor(t.y);break;case ms:t.y=t.y<0?0:1;break;case tl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Tf;_n.DEFAULT_ANISOTROPY=1;var De=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],_=c[2],x=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+x)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(l+1)/2,v=(d+1)/2,V=(m+1)/2,L=(h+f)/4,I=(u+_)/4,O=(g+x)/4;return E>v&&E>V?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=L/i,r=I/i):v>V?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=L/s,r=O/s):V<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(V),i=I/r,s=O/r),this.set(i,s,r,e),this}let T=Math.sqrt((x-g)*(x-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(x-g)/T,this.y=(u-_)/T,this.z=(f-h)/T,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pl=class extends Di{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new _n(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new _a(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ui=class extends Pl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ya=class extends _n{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Il=class extends _n{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var si=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||l!==d||h!==g){let x=1-a,m=c*f+l*d+h*g+u*_,T=m>=0?1:-1,E=1-m*m;if(E>Number.EPSILON){let V=Math.sqrt(E),L=Math.atan2(V,m*T);x=Math.sin(x*L)/V,a=Math.sin(a*L)/V}let v=a*T;if(c=c*x+f*v,l=l*x+d*v,h=h*x+g*v,u=u*x+_*v,x===1-a){let V=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=V,l*=V,h*=V,u*=V}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-a*d,t[e+2]=l*g+h*d+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),f=c(i/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(on(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return dc.copy(this).projectOnVector(t),this.sub(dc)}reflect(t){return this.sub(dc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(on(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dc=new U,wu=new si,_s=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,jn):jn.fromBufferAttribute(r,o),jn.applyMatrix4(t.matrixWorld),this.expandByPoint(jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Oo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oo.copy(i.boundingBox)),Oo.applyMatrix4(t.matrixWorld),this.union(Oo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,jn),jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fr),Fo.subVectors(this.max,Fr),ks.subVectors(t.a,Fr),Vs.subVectors(t.b,Fr),Gs.subVectors(t.c,Fr),Hi.subVectors(Vs,ks),ki.subVectors(Gs,Vs),os.subVectors(ks,Gs);let e=[0,-Hi.z,Hi.y,0,-ki.z,ki.y,0,-os.z,os.y,Hi.z,0,-Hi.x,ki.z,0,-ki.x,os.z,0,-os.x,-Hi.y,Hi.x,0,-ki.y,ki.x,0,-os.y,os.x,0];return!pc(e,ks,Vs,Gs,Fo)||(e=[1,0,0,0,1,0,0,0,1],!pc(e,ks,Vs,Gs,Fo))?!1:(Bo.crossVectors(Hi,ki),e=[Bo.x,Bo.y,Bo.z],pc(e,ks,Vs,Gs,Fo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},bi=[new U,new U,new U,new U,new U,new U,new U,new U],jn=new U,Oo=new _s,ks=new U,Vs=new U,Gs=new U,Hi=new U,ki=new U,os=new U,Fr=new U,Fo=new U,Bo=new U,as=new U;function pc(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){as.fromArray(n,r);let a=s.x*Math.abs(as.x)+s.y*Math.abs(as.y)+s.z*Math.abs(as.z),c=t.dot(as),l=e.dot(as),h=i.dot(as);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Xp=new _s,Br=new U,mc=new U,pr=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Xp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Br.subVectors(t,this.center);let e=Br.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Br,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Br.copy(t.center).add(mc)),this.expandByPoint(Br.copy(t.center).sub(mc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Si=new U,gc=new U,zo=new U,Vi=new U,xc=new U,Ho=new U,_c=new U,ys=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Si.copy(this.origin).addScaledVector(this.direction,e),Si.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){gc.copy(t).add(e).multiplyScalar(.5),zo.copy(e).sub(t).normalize(),Vi.copy(this.origin).sub(gc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(zo),a=Vi.dot(this.direction),c=-Vi.dot(zo),l=Vi.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(gc).addScaledVector(zo,f),d}intersectSphere(t,e){Si.subVectors(t.center,this.origin);let i=Si.dot(this.direction),s=Si.dot(Si)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Si)!==null}intersectTriangle(t,e,i,s,r){xc.subVectors(e,t),Ho.subVectors(i,t),_c.crossVectors(xc,Ho);let o=this.direction.dot(_c),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vi.subVectors(this.origin,t);let c=a*this.direction.dot(Ho.crossVectors(Vi,Ho));if(c<0)return null;let l=a*this.direction.dot(xc.cross(Vi));if(l<0||c+l>o)return null;let h=-a*Vi.dot(_c);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fe=class n{constructor(t,e,i,s,r,o,a,c,l,h,u,f,d,g,_,x){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,h,u,f,d,g,_,x)}set(t,e,i,s,r,o,a,c,l,h,u,f,d,g,_,x){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Ws.setFromMatrixColumn(t,0).length(),r=1/Ws.setFromMatrixColumn(t,1).length(),o=1/Ws.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yp,t,qp)}lookAt(t,e,i){let s=this.elements;return Nn.subVectors(t,e),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Gi.crossVectors(i,Nn),Gi.lengthSq()===0&&(Math.abs(i.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Gi.crossVectors(i,Nn)),Gi.normalize(),ko.crossVectors(Nn,Gi),s[0]=Gi.x,s[4]=ko.x,s[8]=Nn.x,s[1]=Gi.y,s[5]=ko.y,s[9]=Nn.y,s[2]=Gi.z,s[6]=ko.z,s[10]=Nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],_=i[6],x=i[10],m=i[14],T=i[3],E=i[7],v=i[11],V=i[15],L=s[0],I=s[4],O=s[8],A=s[12],w=s[1],F=s[5],j=s[9],B=s[13],G=s[2],q=s[6],Y=s[10],xt=s[14],Q=s[3],Et=s[7],gt=s[11],zt=s[15];return r[0]=o*L+a*w+c*G+l*Q,r[4]=o*I+a*F+c*q+l*Et,r[8]=o*O+a*j+c*Y+l*gt,r[12]=o*A+a*B+c*xt+l*zt,r[1]=h*L+u*w+f*G+d*Q,r[5]=h*I+u*F+f*q+d*Et,r[9]=h*O+u*j+f*Y+d*gt,r[13]=h*A+u*B+f*xt+d*zt,r[2]=g*L+_*w+x*G+m*Q,r[6]=g*I+_*F+x*q+m*Et,r[10]=g*O+_*j+x*Y+m*gt,r[14]=g*A+_*B+x*xt+m*zt,r[3]=T*L+E*w+v*G+V*Q,r[7]=T*I+E*F+v*q+V*Et,r[11]=T*O+E*j+v*Y+V*gt,r[15]=T*A+E*B+v*xt+V*zt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],x=t[11],m=t[15];return g*(+r*c*u-s*l*u-r*a*f+i*l*f+s*a*d-i*c*d)+_*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+x*(+e*l*u-e*a*d-r*o*u+i*o*d+r*a*h-i*l*h)+m*(-s*a*h-e*c*u+e*a*f+s*o*u-i*o*f+i*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],x=t[14],m=t[15],T=u*x*l-_*f*l+_*c*d-a*x*d-u*c*m+a*f*m,E=g*f*l-h*x*l-g*c*d+o*x*d+h*c*m-o*f*m,v=h*_*l-g*u*l+g*a*d-o*_*d-h*a*m+o*u*m,V=g*u*c-h*_*c-g*a*f+o*_*f+h*a*x-o*u*x,L=e*T+i*E+s*v+r*V;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/L;return t[0]=T*I,t[1]=(_*f*r-u*x*r-_*s*d+i*x*d+u*s*m-i*f*m)*I,t[2]=(a*x*r-_*c*r+_*s*l-i*x*l-a*s*m+i*c*m)*I,t[3]=(u*c*r-a*f*r-u*s*l+i*f*l+a*s*d-i*c*d)*I,t[4]=E*I,t[5]=(h*x*r-g*f*r+g*s*d-e*x*d-h*s*m+e*f*m)*I,t[6]=(g*c*r-o*x*r-g*s*l+e*x*l+o*s*m-e*c*m)*I,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*d+e*c*d)*I,t[8]=v*I,t[9]=(g*u*r-h*_*r-g*i*d+e*_*d+h*i*m-e*u*m)*I,t[10]=(o*_*r-g*a*r+g*i*l-e*_*l-o*i*m+e*a*m)*I,t[11]=(h*a*r-o*u*r-h*i*l+e*u*l+o*i*d-e*a*d)*I,t[12]=V*I,t[13]=(h*_*s-g*u*s+g*i*f-e*_*f-h*i*x+e*u*x)*I,t[14]=(g*a*s-o*_*s-g*i*c+e*_*c+o*i*x-e*a*x)*I,t[15]=(o*u*s-h*a*s+h*i*c-e*u*c-o*i*f+e*a*f)*I,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,_=o*h,x=o*u,m=a*u,T=c*l,E=c*h,v=c*u,V=i.x,L=i.y,I=i.z;return s[0]=(1-(_+m))*V,s[1]=(d+v)*V,s[2]=(g-E)*V,s[3]=0,s[4]=(d-v)*L,s[5]=(1-(f+m))*L,s[6]=(x+T)*L,s[7]=0,s[8]=(g+E)*I,s[9]=(x-T)*I,s[10]=(1-(f+_))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Ws.set(s[0],s[1],s[2]).length(),o=Ws.set(s[4],s[5],s[6]).length(),a=Ws.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Qn.copy(this);let l=1/r,h=1/o,u=1/a;return Qn.elements[0]*=l,Qn.elements[1]*=l,Qn.elements[2]*=l,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=u,Qn.elements[9]*=u,Qn.elements[10]*=u,e.setFromRotationMatrix(Qn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Pi){let c=this.elements,l=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),d,g;if(a===Pi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===xa)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Pi){let c=this.elements,l=1/(e-t),h=1/(i-s),u=1/(o-r),f=(e+t)*l,d=(i+s)*h,g,_;if(a===Pi)g=(o+r)*u,_=-2*u;else if(a===xa)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Ws=new U,Qn=new Fe,Yp=new U(0,0,0),qp=new U(1,1,1),Gi=new U,ko=new U,Nn=new U,Tu=new Fe,Au=new si,gi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-on(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(on(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(on(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Tu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Tu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Au.setFromEuler(this),this.setFromQuaternion(Au,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gi.DEFAULT_ORDER="XYZ";var io=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Zp=0,Ru=new U,Xs=new si,wi=new Fe,Vo=new U,zr=new U,Kp=new U,Jp=new si,Cu=new U(1,0,0),Pu=new U(0,1,0),Iu=new U(0,0,1),Lu={type:"added"},$p={type:"removed"},Ys={type:"childadded",child:null},yc={type:"childremoved",child:null},Ve=class n extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new U,e=new gi,i=new si,s=new U(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Fe},normalMatrix:{value:new pe}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xs.setFromAxisAngle(t,e),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(t,e){return Xs.setFromAxisAngle(t,e),this.quaternion.premultiply(Xs),this}rotateX(t){return this.rotateOnAxis(Cu,t)}rotateY(t){return this.rotateOnAxis(Pu,t)}rotateZ(t){return this.rotateOnAxis(Iu,t)}translateOnAxis(t,e){return Ru.copy(t).applyQuaternion(this.quaternion),this.position.add(Ru.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cu,t)}translateY(t){return this.translateOnAxis(Pu,t)}translateZ(t){return this.translateOnAxis(Iu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Vo.copy(t):Vo.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(zr,Vo,this.up):wi.lookAt(Vo,zr,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),Xs.setFromRotationMatrix(wi),this.quaternion.premultiply(Xs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lu),Ys.child=t,this.dispatchEvent(Ys),Ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($p),yc.child=t,this.dispatchEvent(yc),yc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lu),Ys.child=t,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,t,Kp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,Jp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Ve.DEFAULT_UP=new U(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ti=new U,Ti=new U,Mc=new U,Ai=new U,qs=new U,Zs=new U,Du=new U,vc=new U,Ec=new U,bc=new U,Sc=new De,wc=new De,Tc=new De,qi=class n{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ti.subVectors(t,e),s.cross(ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ti.subVectors(s,e),Ti.subVectors(i,e),Mc.subVectors(t,e);let o=ti.dot(ti),a=ti.dot(Ti),c=ti.dot(Mc),l=Ti.dot(Ti),h=Ti.dot(Mc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ai.x),c.addScaledVector(o,Ai.y),c.addScaledVector(a,Ai.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return Sc.setScalar(0),wc.setScalar(0),Tc.setScalar(0),Sc.fromBufferAttribute(t,e),wc.fromBufferAttribute(t,i),Tc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Sc,r.x),o.addScaledVector(wc,r.y),o.addScaledVector(Tc,r.z),o}static isFrontFacing(t,e,i,s){return ti.subVectors(i,e),Ti.subVectors(t,e),ti.cross(Ti).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ti.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),ti.cross(Ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;qs.subVectors(s,i),Zs.subVectors(r,i),vc.subVectors(t,i);let c=qs.dot(vc),l=Zs.dot(vc);if(c<=0&&l<=0)return e.copy(i);Ec.subVectors(t,s);let h=qs.dot(Ec),u=Zs.dot(Ec);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(qs,o);bc.subVectors(t,r);let d=qs.dot(bc),g=Zs.dot(bc);if(g>=0&&d<=g)return e.copy(r);let _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(Zs,a);let x=h*g-d*u;if(x<=0&&u-h>=0&&d-g>=0)return Du.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Du,a);let m=1/(x+_+f);return o=_*m,a=f*m,e.copy(i).addScaledVector(qs,o).addScaledVector(Zs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},kf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},Go={h:0,s:0,l:0};function Ac(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var se=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ve.workingColorSpace){return this.r=t,this.g=e,this.b=i,ve.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ve.workingColorSpace){if(t=Eh(t,1),e=on(e,0,1),i=on(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ac(o,r,t+1/3),this.g=Ac(o,r,t),this.b=Ac(o,r,t-1/3)}return ve.toWorkingColorSpace(this,s),this}setStyle(t,e=Pe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){let i=kf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ii(t.r),this.g=Ii(t.g),this.b=Ii(t.b),this}copyLinearToSRGB(t){return this.r=ar(t.r),this.g=ar(t.g),this.b=ar(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return ve.fromWorkingColorSpace(mn.copy(this),t),Math.round(on(mn.r*255,0,255))*65536+Math.round(on(mn.g*255,0,255))*256+Math.round(on(mn.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.fromWorkingColorSpace(mn.copy(this),e);let i=mn.r,s=mn.g,r=mn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ve.workingColorSpace){return ve.fromWorkingColorSpace(mn.copy(this),e),t.r=mn.r,t.g=mn.g,t.b=mn.b,t}getStyle(t=Pe){ve.fromWorkingColorSpace(mn.copy(this),t);let e=mn.r,i=mn.g,s=mn.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Wi),this.setHSL(Wi.h+t,Wi.s+e,Wi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Wi),t.getHSL(Go);let i=Zr(Wi.h,Go.h,e),s=Zr(Wi.s,Go.s,e),r=Zr(Wi.l,Go.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new se;se.NAMES=kf;var jp=0,Ni=class extends Di{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=mi(),this.name="",this.blending=rr,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Wc,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rr&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gc&&(i.blendSrc=this.blendSrc),this.blendDst!==Wc&&(i.blendDst=this.blendDst),this.blendEquation!==ds&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==lr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},$e=class extends Ni{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Je=new U,Wo=new yt,un=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Rl,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Wo.fromBufferAttribute(this,e),Wo.applyMatrix3(t),this.setXY(e,Wo.x,Wo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix3(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ni(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ce(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array),s=Ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array),s=Ce(s,this.array),r=Ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rl&&(t.usage=this.usage),t}};var Ma=class extends un{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var va=class extends un{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ue=class extends un{constructor(t,e,i){super(new Float32Array(t),e,i)}},Qp=0,Xn=new Fe,Rc=new Ve,Ks=new U,On=new _s,Hr=new _s,rn=new U,Oe=class n extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hf(t)?va:Ma)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new pe().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xn.makeRotationFromQuaternion(t),this.applyMatrix4(Xn),this}rotateX(t){return Xn.makeRotationX(t),this.applyMatrix4(Xn),this}rotateY(t){return Xn.makeRotationY(t),this.applyMatrix4(Xn),this}rotateZ(t){return Xn.makeRotationZ(t),this.applyMatrix4(Xn),this}translate(t,e,i){return Xn.makeTranslation(t,e,i),this.applyMatrix4(Xn),this}scale(t,e,i){return Xn.makeScale(t,e,i),this.applyMatrix4(Xn),this}lookAt(t){return Rc.lookAt(t),Rc.updateMatrix(),this.applyMatrix4(Rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _s);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];On.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let i=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Hr.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(On.min,Hr.min),On.expandByPoint(rn),rn.addVectors(On.max,Hr.max),On.expandByPoint(rn)):(On.expandByPoint(Hr.min),On.expandByPoint(Hr.max))}On.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)rn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(rn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)rn.fromBufferAttribute(a,l),c&&(Ks.fromBufferAttribute(t,l),rn.add(Ks)),s=Math.max(s,i.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let O=0;O<i.count;O++)a[O]=new U,c[O]=new U;let l=new U,h=new U,u=new U,f=new yt,d=new yt,g=new yt,_=new U,x=new U;function m(O,A,w){l.fromBufferAttribute(i,O),h.fromBufferAttribute(i,A),u.fromBufferAttribute(i,w),f.fromBufferAttribute(r,O),d.fromBufferAttribute(r,A),g.fromBufferAttribute(r,w),h.sub(l),u.sub(l),d.sub(f),g.sub(f);let F=1/(d.x*g.y-g.x*d.y);isFinite(F)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(F),x.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(F),a[O].add(_),a[A].add(_),a[w].add(_),c[O].add(x),c[A].add(x),c[w].add(x))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let O=0,A=T.length;O<A;++O){let w=T[O],F=w.start,j=w.count;for(let B=F,G=F+j;B<G;B+=3)m(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let E=new U,v=new U,V=new U,L=new U;function I(O){V.fromBufferAttribute(s,O),L.copy(V);let A=a[O];E.copy(A),E.sub(V.multiplyScalar(V.dot(A))).normalize(),v.crossVectors(L,A);let F=v.dot(c[O])<0?-1:1;o.setXYZW(O,E.x,E.y,E.z,F)}for(let O=0,A=T.length;O<A;++O){let w=T[O],F=w.start,j=w.count;for(let B=F,G=F+j;B<G;B+=3)I(t.getX(B+0)),I(t.getX(B+1)),I(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new un(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,h=new U,u=new U;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),_=t.getX(f+1),x=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,x),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(x,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)rn.fromBufferAttribute(t,e),rn.normalize(),t.setXYZ(e,rn.x,rn.y,rn.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let _=0,x=c.length;_<x;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let m=0;m<h;m++)f[g++]=l[d++]}return new un(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,i);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Uu=new Fe,cs=new ys,Xo=new pr,Nu=new U,Yo=new U,qo=new U,Zo=new U,Cc=new U,Ko=new U,Ou=new U,Jo=new U,At=class extends Ve{constructor(t=new Oe,e=new $e){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ko.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Cc.fromBufferAttribute(u,t),o?Ko.addScaledVector(Cc,h):Ko.addScaledVector(Cc.sub(e),h))}e.add(Ko)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xo.copy(i.boundingSphere),Xo.applyMatrix4(r),cs.copy(t.ray).recast(t.near),!(Xo.containsPoint(cs.origin)===!1&&(cs.intersectSphere(Xo,Nu)===null||cs.origin.distanceToSquared(Nu)>(t.far-t.near)**2))&&(Uu.copy(r).invert(),cs.copy(t.ray).applyMatrix4(Uu),!(i.boundingBox!==null&&cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,cs)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let x=f[g],m=o[x.materialIndex],T=Math.max(x.start,d.start),E=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let v=T,V=E;v<V;v+=3){let L=a.getX(v),I=a.getX(v+1),O=a.getX(v+2);s=$o(this,m,t,i,l,h,u,L,I,O),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let x=g,m=_;x<m;x+=3){let T=a.getX(x),E=a.getX(x+1),v=a.getX(x+2);s=$o(this,o,t,i,l,h,u,T,E,v),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let x=f[g],m=o[x.materialIndex],T=Math.max(x.start,d.start),E=Math.min(c.count,Math.min(x.start+x.count,d.start+d.count));for(let v=T,V=E;v<V;v+=3){let L=v,I=v+1,O=v+2;s=$o(this,m,t,i,l,h,u,L,I,O),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let x=g,m=_;x<m;x+=3){let T=x,E=x+1,v=x+2;s=$o(this,o,t,i,l,h,u,T,E,v),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function t0(n,t,e,i,s,r,o,a){let c;if(t.side===xn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===Ji,a),c===null)return null;Jo.copy(a),Jo.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Jo);return l<e.near||l>e.far?null:{distance:l,point:Jo.clone(),object:n}}function $o(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,Yo),n.getVertexPosition(c,qo),n.getVertexPosition(l,Zo);let h=t0(n,t,e,i,Yo,qo,Zo,Ou);if(h){let u=new U;qi.getBarycoord(Ou,Yo,qo,Zo,u),s&&(h.uv=qi.getInterpolatedAttribute(s,a,c,l,u,new yt)),r&&(h.uv1=qi.getInterpolatedAttribute(r,a,c,l,u,new yt)),o&&(h.normal=qi.getInterpolatedAttribute(o,a,c,l,u,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new U,materialIndex:0};qi.getNormal(Yo,qo,Zo,f.normal),h.face=f,h.barycoord=u}return h}var Be=class n extends Oe{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(u,2));function g(_,x,m,T,E,v,V,L,I,O,A){let w=v/I,F=V/O,j=v/2,B=V/2,G=L/2,q=I+1,Y=O+1,xt=0,Q=0,Et=new U;for(let gt=0;gt<Y;gt++){let zt=gt*F-B;for(let oe=0;oe<q;oe++){let Me=oe*w-j;Et[_]=Me*T,Et[x]=zt*E,Et[m]=G,l.push(Et.x,Et.y,Et.z),Et[_]=0,Et[x]=0,Et[m]=L>0?1:-1,h.push(Et.x,Et.y,Et.z),u.push(oe/I),u.push(1-gt/O),xt+=1}}for(let gt=0;gt<O;gt++)for(let zt=0;zt<I;zt++){let oe=f+zt+q*gt,Me=f+zt+q*(gt+1),ft=f+(zt+1)+q*(gt+1),bt=f+(zt+1)+q*gt;c.push(oe,Me,bt),c.push(Me,ft,bt),Q+=6}a.addGroup(d,Q,A),d+=Q,f+=xt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function mr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function wn(n){let t={};for(let e=0;e<n.length;e++){let i=mr(n[e]);for(let s in i)t[s]=i[s]}return t}function e0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Vf(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ve.workingColorSpace}var n0={clone:mr,merge:wn},i0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,s0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yn=class extends Ni{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i0,this.fragmentShader=s0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mr(t.uniforms),this.uniformsGroups=e0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Ea=class extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=Pi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xi=new U,Fu=new yt,Bu=new yt,an=class extends Ea{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=eo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return eo*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xi.x,Xi.y).multiplyScalar(-t/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-t/Xi.z)}getViewSize(t,e){return this.getViewBounds(t,Fu,Bu),e.subVectors(Bu,Fu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(qr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Js=-90,$s=1,Ll=class extends Ve{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new an(Js,$s,t,e);s.layers=this.layers,this.add(s);let r=new an(Js,$s,t,e);r.layers=this.layers,this.add(r);let o=new an(Js,$s,t,e);o.layers=this.layers,this.add(o);let a=new an(Js,$s,t,e);a.layers=this.layers,this.add(a);let c=new an(Js,$s,t,e);c.layers=this.layers,this.add(c);let l=new an(Js,$s,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===xa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ba=class extends _n{constructor(t,e,i,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:hr,super(t,e,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Dl=class extends Ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ba(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:pi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Be(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:Zi});r.uniforms.tEquirect.value=e;let o=new At(s,r),a=e.minFilter;return e.minFilter===gs&&(e.minFilter=pi),new Ll(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Pc=new U,r0=new U,o0=new pe,ei=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Pc.subVectors(i,e).cross(r0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Pc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||o0.getNormalMatrix(t),s=this.coplanarPoint(Pc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ls=new pr,jo=new U,so=class{constructor(t=new ei,e=new ei,i=new ei,s=new ei,r=new ei,o=new ei){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Pi){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],_=s[10],x=s[11],m=s[12],T=s[13],E=s[14],v=s[15];if(i[0].setComponents(c-r,f-l,x-d,v-m).normalize(),i[1].setComponents(c+r,f+l,x+d,v+m).normalize(),i[2].setComponents(c+o,f+h,x+g,v+T).normalize(),i[3].setComponents(c-o,f-h,x-g,v-T).normalize(),i[4].setComponents(c-a,f-u,x-_,v-E).normalize(),e===Pi)i[5].setComponents(c+a,f+u,x+_,v+E).normalize();else if(e===xa)i[5].setComponents(a,u,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(t){return ls.center.set(0,0,0),ls.radius=.7071067811865476,ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(jo.x=s.normal.x>0?t.max.x:t.min.x,jo.y=s.normal.y>0?t.max.y:t.min.y,jo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(jo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Gf(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function a0(n){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let _=u[d];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var $i=class n extends Oe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],g=[],_=[],x=[];for(let m=0;m<h;m++){let T=m*f-o;for(let E=0;E<l;E++){let v=E*u-r;g.push(v,-T,0),_.push(0,0,1),x.push(E/a),x.push(1-m/c)}}for(let m=0;m<c;m++)for(let T=0;T<a;T++){let E=T+l*m,v=T+l*(m+1),V=T+1+l*(m+1),L=T+1+l*m;d.push(E,v,L),d.push(v,V,L)}this.setIndex(d),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},c0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l0=`#ifdef USE_ALPHAHASH
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
#endif`,h0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,u0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,d0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,p0=`#ifdef USE_AOMAP
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
#endif`,m0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g0=`#ifdef USE_BATCHING
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
#endif`,x0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,v0=`#ifdef USE_IRIDESCENCE
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
#endif`,E0=`#ifdef USE_BUMPMAP
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
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,C0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,I0=`#define PI 3.141592653589793
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
} // validated`,L0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,D0=`vec3 transformedNormal = objectNormal;
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
#endif`,U0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,O0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B0="gl_FragColor = linearToOutputTexel( gl_FragColor );",z0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,H0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,V0=`#ifdef USE_ENVMAP
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
#endif`,G0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W0=`#ifdef USE_ENVMAP
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
#endif`,X0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,q0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Z0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K0=`#ifdef USE_GRADIENTMAP
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
}`,J0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,j0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q0=`uniform bool receiveShadow;
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
#endif`,tm=`#ifdef USE_ENVMAP
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
#endif`,em=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,im=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rm=`PhysicalMaterial material;
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
#endif`,om=`struct PhysicalMaterial {
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
}`,am=`
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
#endif`,cm=`#if defined( RE_IndirectDiffuse )
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
#endif`,lm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,um=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xm=`#if defined( USE_POINTS_UV )
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
#endif`,_m=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ym=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Em=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bm=`#ifdef USE_MORPHTARGETS
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
#endif`,Sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pm=`#ifdef USE_NORMALMAP
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
#endif`,Im=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Om=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ym=`float getShadowMask() {
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
}`,qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zm=`#ifdef USE_SKINNING
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
#endif`,Jm=`#ifdef USE_SKINNING
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
#endif`,$m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eg=`#ifdef USE_TRANSMISSION
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
#endif`,ng=`#ifdef USE_TRANSMISSION
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
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,og=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ag=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cg=`uniform sampler2D t2D;
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
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`#include <common>
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
}`,pg=`#if DEPTH_PACKING == 3200
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
}`,mg=`#define DISTANCE
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
}`,gg=`#define DISTANCE
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
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_g=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`uniform float scale;
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
}`,Mg=`uniform vec3 diffuse;
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
}`,vg=`#include <common>
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
}`,Eg=`uniform vec3 diffuse;
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
}`,bg=`#define LAMBERT
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
}`,Sg=`#define LAMBERT
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
}`,wg=`#define MATCAP
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
}`,Tg=`#define MATCAP
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
}`,Ag=`#define NORMAL
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
}`,Rg=`#define NORMAL
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
}`,Cg=`#define PHONG
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
}`,Pg=`#define PHONG
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
}`,Ig=`#define STANDARD
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
}`,Lg=`#define STANDARD
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
}`,Dg=`#define TOON
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
}`,Ug=`#define TOON
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
}`,Ng=`uniform float size;
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
}`,Og=`uniform vec3 diffuse;
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
}`,Fg=`#include <common>
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
}`,Bg=`uniform vec3 color;
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
}`,zg=`uniform float rotation;
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
}`,Hg=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:c0,alphahash_pars_fragment:l0,alphamap_fragment:h0,alphamap_pars_fragment:u0,alphatest_fragment:f0,alphatest_pars_fragment:d0,aomap_fragment:p0,aomap_pars_fragment:m0,batching_pars_vertex:g0,batching_vertex:x0,begin_vertex:_0,beginnormal_vertex:y0,bsdfs:M0,iridescence_fragment:v0,bumpmap_pars_fragment:E0,clipping_planes_fragment:b0,clipping_planes_pars_fragment:S0,clipping_planes_pars_vertex:w0,clipping_planes_vertex:T0,color_fragment:A0,color_pars_fragment:R0,color_pars_vertex:C0,color_vertex:P0,common:I0,cube_uv_reflection_fragment:L0,defaultnormal_vertex:D0,displacementmap_pars_vertex:U0,displacementmap_vertex:N0,emissivemap_fragment:O0,emissivemap_pars_fragment:F0,colorspace_fragment:B0,colorspace_pars_fragment:z0,envmap_fragment:H0,envmap_common_pars_fragment:k0,envmap_pars_fragment:V0,envmap_pars_vertex:G0,envmap_physical_pars_fragment:tm,envmap_vertex:W0,fog_vertex:X0,fog_pars_vertex:Y0,fog_fragment:q0,fog_pars_fragment:Z0,gradientmap_pars_fragment:K0,lightmap_pars_fragment:J0,lights_lambert_fragment:$0,lights_lambert_pars_fragment:j0,lights_pars_begin:Q0,lights_toon_fragment:em,lights_toon_pars_fragment:nm,lights_phong_fragment:im,lights_phong_pars_fragment:sm,lights_physical_fragment:rm,lights_physical_pars_fragment:om,lights_fragment_begin:am,lights_fragment_maps:cm,lights_fragment_end:lm,logdepthbuf_fragment:hm,logdepthbuf_pars_fragment:um,logdepthbuf_pars_vertex:fm,logdepthbuf_vertex:dm,map_fragment:pm,map_pars_fragment:mm,map_particle_fragment:gm,map_particle_pars_fragment:xm,metalnessmap_fragment:_m,metalnessmap_pars_fragment:ym,morphinstance_vertex:Mm,morphcolor_vertex:vm,morphnormal_vertex:Em,morphtarget_pars_vertex:bm,morphtarget_vertex:Sm,normal_fragment_begin:wm,normal_fragment_maps:Tm,normal_pars_fragment:Am,normal_pars_vertex:Rm,normal_vertex:Cm,normalmap_pars_fragment:Pm,clearcoat_normal_fragment_begin:Im,clearcoat_normal_fragment_maps:Lm,clearcoat_pars_fragment:Dm,iridescence_pars_fragment:Um,opaque_fragment:Nm,packing:Om,premultiplied_alpha_fragment:Fm,project_vertex:Bm,dithering_fragment:zm,dithering_pars_fragment:Hm,roughnessmap_fragment:km,roughnessmap_pars_fragment:Vm,shadowmap_pars_fragment:Gm,shadowmap_pars_vertex:Wm,shadowmap_vertex:Xm,shadowmask_pars_fragment:Ym,skinbase_vertex:qm,skinning_pars_vertex:Zm,skinning_vertex:Km,skinnormal_vertex:Jm,specularmap_fragment:$m,specularmap_pars_fragment:jm,tonemapping_fragment:Qm,tonemapping_pars_fragment:tg,transmission_fragment:eg,transmission_pars_fragment:ng,uv_pars_fragment:ig,uv_pars_vertex:sg,uv_vertex:rg,worldpos_vertex:og,background_vert:ag,background_frag:cg,backgroundCube_vert:lg,backgroundCube_frag:hg,cube_vert:ug,cube_frag:fg,depth_vert:dg,depth_frag:pg,distanceRGBA_vert:mg,distanceRGBA_frag:gg,equirect_vert:xg,equirect_frag:_g,linedashed_vert:yg,linedashed_frag:Mg,meshbasic_vert:vg,meshbasic_frag:Eg,meshlambert_vert:bg,meshlambert_frag:Sg,meshmatcap_vert:wg,meshmatcap_frag:Tg,meshnormal_vert:Ag,meshnormal_frag:Rg,meshphong_vert:Cg,meshphong_frag:Pg,meshphysical_vert:Ig,meshphysical_frag:Lg,meshtoon_vert:Dg,meshtoon_frag:Ug,points_vert:Ng,points_frag:Og,shadow_vert:Fg,shadow_frag:Bg,sprite_vert:zg,sprite_frag:Hg},Bt={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},di={basic:{uniforms:wn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:wn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new se(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:wn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:wn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:wn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new se(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:wn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:wn([Bt.points,Bt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:wn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:wn([Bt.common,Bt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:wn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:wn([Bt.sprite,Bt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:wn([Bt.common,Bt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:wn([Bt.lights,Bt.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};di.physical={uniforms:wn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};var Qo={r:0,b:0,g:0},hs=new gi,kg=new Fe;function Vg(n,t,e,i,s,r,o){let a=new se(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?e:t).get(E)),E}function _(T){let E=!1,v=g(T);v===null?m(a,c):v&&v.isColor&&(m(v,1),E=!0);let V=n.xr.getEnvironmentBlendMode();V==="additive"?i.buffers.color.setClear(0,0,0,1,o):V==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(T,E){let v=g(E);v&&(v.isCubeTexture||v.mapping===ka)?(h===void 0&&(h=new At(new Be(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:mr(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(V,L,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),hs.copy(E.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kg.makeRotationFromEuler(hs)),h.material.toneMapped=ve.getTransfer(v.colorSpace)!==Le,(u!==v||f!==v.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=n.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new At(new $i(2,2),new Yn({name:"BackgroundMaterial",uniforms:mr(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ve.getTransfer(v.colorSpace)!==Le,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,d=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,E){T.getRGB(Qo,Vf(n)),i.buffers.color.setClear(Qo.r,Qo.g,Qo.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(T,E=1){a.set(T),c=E,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,m(a,c)},render:_,addToRenderList:x}}function Gg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(w,F,j,B,G){let q=!1,Y=u(B,j,F);r!==Y&&(r=Y,l(r.object)),q=d(w,B,j,G),q&&g(w,B,j,G),G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(w,F,j,B),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return n.createVertexArray()}function l(w){return n.bindVertexArray(w)}function h(w){return n.deleteVertexArray(w)}function u(w,F,j){let B=j.wireframe===!0,G=i[w.id];G===void 0&&(G={},i[w.id]=G);let q=G[F.id];q===void 0&&(q={},G[F.id]=q);let Y=q[B];return Y===void 0&&(Y=f(c()),q[B]=Y),Y}function f(w){let F=[],j=[],B=[];for(let G=0;G<e;G++)F[G]=0,j[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:j,attributeDivisors:B,object:w,attributes:{},index:null}}function d(w,F,j,B){let G=r.attributes,q=F.attributes,Y=0,xt=j.getAttributes();for(let Q in xt)if(xt[Q].location>=0){let gt=G[Q],zt=q[Q];if(zt===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(zt=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(zt=w.instanceColor)),gt===void 0||gt.attribute!==zt||zt&&gt.data!==zt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==B}function g(w,F,j,B){let G={},q=F.attributes,Y=0,xt=j.getAttributes();for(let Q in xt)if(xt[Q].location>=0){let gt=q[Q];gt===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(gt=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(gt=w.instanceColor));let zt={};zt.attribute=gt,gt&&gt.data&&(zt.data=gt.data),G[Q]=zt,Y++}r.attributes=G,r.attributesNum=Y,r.index=B}function _(){let w=r.newAttributes;for(let F=0,j=w.length;F<j;F++)w[F]=0}function x(w){m(w,0)}function m(w,F){let j=r.newAttributes,B=r.enabledAttributes,G=r.attributeDivisors;j[w]=1,B[w]===0&&(n.enableVertexAttribArray(w),B[w]=1),G[w]!==F&&(n.vertexAttribDivisor(w,F),G[w]=F)}function T(){let w=r.newAttributes,F=r.enabledAttributes;for(let j=0,B=F.length;j<B;j++)F[j]!==w[j]&&(n.disableVertexAttribArray(j),F[j]=0)}function E(w,F,j,B,G,q,Y){Y===!0?n.vertexAttribIPointer(w,F,j,G,q):n.vertexAttribPointer(w,F,j,B,G,q)}function v(w,F,j,B){_();let G=B.attributes,q=j.getAttributes(),Y=F.defaultAttributeValues;for(let xt in q){let Q=q[xt];if(Q.location>=0){let Et=G[xt];if(Et===void 0&&(xt==="instanceMatrix"&&w.instanceMatrix&&(Et=w.instanceMatrix),xt==="instanceColor"&&w.instanceColor&&(Et=w.instanceColor)),Et!==void 0){let gt=Et.normalized,zt=Et.itemSize,oe=t.get(Et);if(oe===void 0)continue;let Me=oe.buffer,ft=oe.type,bt=oe.bytesPerElement,Xt=ft===n.INT||ft===n.UNSIGNED_INT||Et.gpuType===gh;if(Et.isInterleavedBufferAttribute){let Mt=Et.data,Qt=Mt.stride,ie=Et.offset;if(Mt.isInstancedInterleavedBuffer){for(let te=0;te<Q.locationSize;te++)m(Q.location+te,Mt.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let te=0;te<Q.locationSize;te++)x(Q.location+te);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let te=0;te<Q.locationSize;te++)E(Q.location+te,zt/Q.locationSize,ft,gt,Qt*bt,(ie+zt/Q.locationSize*te)*bt,Xt)}else{if(Et.isInstancedBufferAttribute){for(let Mt=0;Mt<Q.locationSize;Mt++)m(Q.location+Mt,Et.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Mt=0;Mt<Q.locationSize;Mt++)x(Q.location+Mt);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let Mt=0;Mt<Q.locationSize;Mt++)E(Q.location+Mt,zt/Q.locationSize,ft,gt,zt*bt,zt/Q.locationSize*Mt*bt,Xt)}}else if(Y!==void 0){let gt=Y[xt];if(gt!==void 0)switch(gt.length){case 2:n.vertexAttrib2fv(Q.location,gt);break;case 3:n.vertexAttrib3fv(Q.location,gt);break;case 4:n.vertexAttrib4fv(Q.location,gt);break;default:n.vertexAttrib1fv(Q.location,gt)}}}}T()}function V(){O();for(let w in i){let F=i[w];for(let j in F){let B=F[j];for(let G in B)h(B[G].object),delete B[G];delete F[j]}delete i[w]}}function L(w){if(i[w.id]===void 0)return;let F=i[w.id];for(let j in F){let B=F[j];for(let G in B)h(B[G].object),delete B[G];delete F[j]}delete i[w.id]}function I(w){for(let F in i){let j=i[F];if(j[w.id]===void 0)continue;let B=j[w.id];for(let G in B)h(B[G].object),delete B[G];delete j[w.id]}}function O(){A(),o=!0,r!==s&&(r=s,l(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:A,dispose:V,releaseStatesOfGeometry:L,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:x,disableUnusedAttributes:T}}function Wg(n,t,e){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,i,1)}function c(l,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Xg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==ii&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let O=I===So&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Li&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ci&&!O)}function c(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),V=g>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:V,maxSamples:L}}function Yg(n){let t=this,e=null,i=0,s=!1,r=!1,o=new ei,a=new pe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,_=u.clipIntersection,x=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!x)r?h(null):l();else{let T=r?0:i,E=T*4,v=m.clippingState||null;c.value=v,v=h(g,f,E,d);for(let V=0;V!==E;++V)v[V]=e[V];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,g){let _=u!==null?u.length:0,x=null;if(_!==0){if(x=c.value,g!==!0||x===null){let m=d+_*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(x===null||x.length<m)&&(x=new Float32Array(m));for(let E=0,v=d;E!==_;++E,v+=4)o.copy(u[E]).applyMatrix4(T,a),o.normal.toArray(x,v),x[v+3]=o.constant}c.value=x,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,x}}function qg(n){let t=new WeakMap;function e(o,a){return a===jc?o.mapping=hr:a===Qc&&(o.mapping=ur),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===jc||a===Qc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Dl(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Sa=class extends Ea{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ir=4,zu=[.125,.215,.35,.446,.526,.582],ps=20,Ic=new Sa,Hu=new se,Lc=null,Dc=0,Uc=0,Nc=!1,fs=(1+Math.sqrt(5))/2,js=1/fs,ku=[new U(-fs,js,0),new U(fs,js,0),new U(-js,0,fs),new U(js,0,fs),new U(0,fs,-js),new U(0,fs,js),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],wa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Lc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel(),Nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Lc,Dc,Uc),this._renderer.xr.enabled=Nc,t.scissorTest=!1,ta(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hr||t.mapping===ur?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel(),Nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:So,format:ii,colorSpace:_r,depthBuffer:!1},s=Vu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vu(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zg(r)),this._blurMaterial=Kg(r,t,e)}return s}_compileMaterial(t){let e=new At(this._lodPlanes[0],t);this._renderer.compile(e,Ic)}_sceneToCubeUV(t,e,i,s){let a=new an(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Hu),h.toneMapping=Ki,h.autoClear=!1;let d=new $e({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),g=new At(new Be,d),_=!1,x=t.background;x?x.isColor&&(d.color.copy(x),t.background=null,_=!0):(d.color.copy(Hu),_=!0);for(let m=0;m<6;m++){let T=m%3;T===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):T===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let E=this._cubeSize;ta(s,T*E,m>2?E:0,E,E),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=x}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===hr||t.mapping===ur;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new At(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;ta(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Ic)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ku[(s-r-1)%ku.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new At(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ps-1),_=r/g,x=isFinite(r)?1+Math.floor(h*_):ps;x>ps&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ps}`);let m=[],T=0;for(let I=0;I<ps;++I){let O=I/_,A=Math.exp(-O*O/2);m.push(A),I===0?T+=A:I<x&&(T+=2*A)}for(let I=0;I<m.length;I++)m[I]=m[I]/T;f.envMap.value=t.texture,f.samples.value=x,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-i;let v=this._sizeLods[s],V=3*v*(s>E-ir?s-E+ir:0),L=4*(this._cubeSize-v);ta(e,V,L,3*v,2*v),c.setRenderTarget(e),c.render(u,Ic)}};function Zg(n){let t=[],e=[],i=[],s=n,r=n-ir+1+zu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>n-ir?c=zu[o-n+ir-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,x=2,m=1,T=new Float32Array(_*g*d),E=new Float32Array(x*g*d),v=new Float32Array(m*g*d);for(let L=0;L<d;L++){let I=L%3*2/3-1,O=L>2?0:-1,A=[I,O,0,I+2/3,O,0,I+2/3,O+1,0,I,O,0,I+2/3,O+1,0,I,O+1,0];T.set(A,_*g*L),E.set(f,x*g*L);let w=[L,L,L,L,L,L];v.set(w,m*g*L)}let V=new Oe;V.setAttribute("position",new un(T,_)),V.setAttribute("uv",new un(E,x)),V.setAttribute("faceIndex",new un(v,m)),t.push(V),s>ir&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Vu(n,t,e){let i=new Ui(n,t,e);return i.texture.mapping=ka,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ta(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Kg(n,t,e){let i=new Float32Array(ps),s=new U(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bh(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Gu(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bh(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Wu(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function bh(){return`

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
	`}function Jg(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===jc||c===Qc,h=c===hr||c===ur;if(l||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new wa(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new wa(n)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function $g(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Xr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function jg(n,t,e,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let x=0,m=_.length;x<m;x++)t.remove(_[x])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)t.update(f[g],n.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let _=d[g];for(let x=0,m=_.length;x<m;x++)t.update(_[x],n.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,g=u.attributes.position,_=0;if(d!==null){let T=d.array;_=d.version;for(let E=0,v=T.length;E<v;E+=3){let V=T[E+0],L=T[E+1],I=T[E+2];f.push(V,L,L,I,I,V)}}else if(g!==void 0){let T=g.array;_=g.version;for(let E=0,v=T.length/3-1;E<v;E+=3){let V=E+0,L=E+1,I=E+2;f.push(V,L,L,I,I,V)}}else return;let x=new(Hf(f)?va:Ma)(f,1);x.version=_;let m=r.get(u);m&&t.remove(m),r.set(u,x)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Qg(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function l(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),e.update(d,i,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let x=0;for(let m=0;m<g;m++)x+=d[m];e.update(x,i,1)}function u(f,d,g,_){if(g===0)return;let x=t.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<f.length;m++)l(f[m]/o,d[m],_[m]);else{x.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,_,0,g);let m=0;for(let T=0;T<g;T++)m+=d[T]*_[T];e.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function tx(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function ex(n,t,e){let i=new WeakMap,s=new De;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let A=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],E=0;d===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let v=a.attributes.position.count*E,V=1;v>t.maxTextureSize&&(V=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let L=new Float32Array(v*V*4*u),I=new ya(L,v,V,u);I.type=Ci,I.needsUpdate=!0;let O=E*4;for(let w=0;w<u;w++){let F=x[w],j=m[w],B=T[w],G=v*V*4*w;for(let q=0;q<F.count;q++){let Y=q*O;d===!0&&(s.fromBufferAttribute(F,q),L[G+Y+0]=s.x,L[G+Y+1]=s.y,L[G+Y+2]=s.z,L[G+Y+3]=0),g===!0&&(s.fromBufferAttribute(j,q),L[G+Y+4]=s.x,L[G+Y+5]=s.y,L[G+Y+6]=s.z,L[G+Y+7]=0),_===!0&&(s.fromBufferAttribute(B,q),L[G+Y+8]=s.x,L[G+Y+9]=s.y,L[G+Y+10]=s.z,L[G+Y+11]=B.itemSize===4?s.w:1)}}f={count:u,texture:I,size:new yt(v,V)},i.set(a,f),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function nx(n,t,e,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Ta=class extends _n{constructor(t,e,i,s,r,o,a,c,l,h=or){if(h!==or&&h!==dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===or&&(i=xs),i===void 0&&h===dr&&(i=fr),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:qe,this.minFilter=c!==void 0?c:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Wf=new _n,Xu=new Ta(1,1),Xf=new ya,Yf=new Il,qf=new ba,Yu=[],qu=[],Zu=new Float32Array(16),Ku=new Float32Array(9),Ju=new Float32Array(4);function yr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Yu[s];if(r===void 0&&(r=new Float32Array(s),Yu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function tn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function en(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ga(n,t){let e=qu[t];e===void 0&&(e=new Int32Array(t),qu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function ix(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function sx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;n.uniform2fv(this.addr,t),en(e,t)}}function rx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(tn(e,t))return;n.uniform3fv(this.addr,t),en(e,t)}}function ox(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;n.uniform4fv(this.addr,t),en(e,t)}}function ax(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(tn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),en(e,t)}else{if(tn(e,i))return;Ju.set(i),n.uniformMatrix2fv(this.addr,!1,Ju),en(e,i)}}function cx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(tn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),en(e,t)}else{if(tn(e,i))return;Ku.set(i),n.uniformMatrix3fv(this.addr,!1,Ku),en(e,i)}}function lx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(tn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),en(e,t)}else{if(tn(e,i))return;Zu.set(i),n.uniformMatrix4fv(this.addr,!1,Zu),en(e,i)}}function hx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function ux(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;n.uniform2iv(this.addr,t),en(e,t)}}function fx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;n.uniform3iv(this.addr,t),en(e,t)}}function dx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;n.uniform4iv(this.addr,t),en(e,t)}}function px(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function mx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;n.uniform2uiv(this.addr,t),en(e,t)}}function gx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;n.uniform3uiv(this.addr,t),en(e,t)}}function xx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;n.uniform4uiv(this.addr,t),en(e,t)}}function _x(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Xu.compareFunction=Bf,r=Xu):r=Wf,e.setTexture2D(t||r,s)}function yx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Yf,s)}function Mx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||qf,s)}function vx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Xf,s)}function Ex(n){switch(n){case 5126:return ix;case 35664:return sx;case 35665:return rx;case 35666:return ox;case 35674:return ax;case 35675:return cx;case 35676:return lx;case 5124:case 35670:return hx;case 35667:case 35671:return ux;case 35668:case 35672:return fx;case 35669:case 35673:return dx;case 5125:return px;case 36294:return mx;case 36295:return gx;case 36296:return xx;case 35678:case 36198:case 36298:case 36306:case 35682:return _x;case 35679:case 36299:case 36307:return yx;case 35680:case 36300:case 36308:case 36293:return Mx;case 36289:case 36303:case 36311:case 36292:return vx}}function bx(n,t){n.uniform1fv(this.addr,t)}function Sx(n,t){let e=yr(t,this.size,2);n.uniform2fv(this.addr,e)}function wx(n,t){let e=yr(t,this.size,3);n.uniform3fv(this.addr,e)}function Tx(n,t){let e=yr(t,this.size,4);n.uniform4fv(this.addr,e)}function Ax(n,t){let e=yr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Rx(n,t){let e=yr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Cx(n,t){let e=yr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Px(n,t){n.uniform1iv(this.addr,t)}function Ix(n,t){n.uniform2iv(this.addr,t)}function Lx(n,t){n.uniform3iv(this.addr,t)}function Dx(n,t){n.uniform4iv(this.addr,t)}function Ux(n,t){n.uniform1uiv(this.addr,t)}function Nx(n,t){n.uniform2uiv(this.addr,t)}function Ox(n,t){n.uniform3uiv(this.addr,t)}function Fx(n,t){n.uniform4uiv(this.addr,t)}function Bx(n,t,e){let i=this.cache,s=t.length,r=Ga(e,s);tn(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Wf,r[o])}function zx(n,t,e){let i=this.cache,s=t.length,r=Ga(e,s);tn(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Yf,r[o])}function Hx(n,t,e){let i=this.cache,s=t.length,r=Ga(e,s);tn(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||qf,r[o])}function kx(n,t,e){let i=this.cache,s=t.length,r=Ga(e,s);tn(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Xf,r[o])}function Vx(n){switch(n){case 5126:return bx;case 35664:return Sx;case 35665:return wx;case 35666:return Tx;case 35674:return Ax;case 35675:return Rx;case 35676:return Cx;case 5124:case 35670:return Px;case 35667:case 35671:return Ix;case 35668:case 35672:return Lx;case 35669:case 35673:return Dx;case 5125:return Ux;case 36294:return Nx;case 36295:return Ox;case 36296:return Fx;case 35678:case 36198:case 36298:case 36306:case 35682:return Bx;case 35679:case 36299:case 36307:return zx;case 35680:case 36300:case 36308:case 36293:return Hx;case 36289:case 36303:case 36311:case 36292:return kx}}var Ul=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ex(e.type)}},Nl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Vx(e.type)}},Ol=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Oc=/(\w+)(\])?(\[|\.)?/g;function $u(n,t){n.seq.push(t),n.map[t.id]=t}function Gx(n,t,e){let i=n.name,s=i.length;for(Oc.lastIndex=0;;){let r=Oc.exec(i),o=Oc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){$u(e,l===void 0?new Ul(a,n,t):new Nl(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Ol(a),$u(e,u)),e=u}}}var cr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Gx(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function ju(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Wx=37297,Xx=0;function Yx(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Qu=new pe;function qx(n){ve._getMatrix(Qu,ve.workingColorSpace,n);let t=`mat3( ${Qu.elements.map(e=>e.toFixed(4))} )`;switch(ve.getTransfer(n)){case Va:return[t,"LinearTransferOETF"];case Le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function tf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Yx(n.getShaderSource(t),o)}else return s}function Zx(n,t){let e=qx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Kx(n,t){let e;switch(t){case rp:e="Linear";break;case op:e="Reinhard";break;case ap:e="Cineon";break;case cp:e="ACESFilmic";break;case hp:e="AgX";break;case up:e="Neutral";break;case lp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ea=new U;function Jx(){ve.getLuminanceCoefficients(ea);let n=ea.x.toFixed(4),t=ea.y.toFixed(4),e=ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $x(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function jx(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Qx(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Yr(n){return n!==""}function ef(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var t_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fl(n){return n.replace(t_,n_)}var e_=new Map;function n_(n,t){let e=me[t];if(e===void 0){let i=e_.get(t);if(i!==void 0)e=me[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Fl(e)}var i_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sf(n){return n.replace(i_,s_)}function s_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function r_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===wf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ha?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ri&&(t="SHADOWMAP_TYPE_VSM"),t}function o_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case hr:case ur:t="ENVMAP_TYPE_CUBE";break;case ka:t="ENVMAP_TYPE_CUBE_UV";break}return t}function a_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ur:t="ENVMAP_MODE_REFRACTION";break}return t}function c_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case mh:t="ENVMAP_BLENDING_MULTIPLY";break;case ip:t="ENVMAP_BLENDING_MIX";break;case sp:t="ENVMAP_BLENDING_ADD";break}return t}function l_(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function h_(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=r_(e),l=o_(e),h=a_(e),u=c_(e),f=l_(e),d=$x(e),g=jx(r),_=s.createProgram(),x,m,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Yr).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Yr).join(`
`),m.length>0&&(m+=`
`)):(x=[rf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),m=[rf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ki?"#define TONE_MAPPING":"",e.toneMapping!==Ki?me.tonemapping_pars_fragment:"",e.toneMapping!==Ki?Kx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,Zx("linearToOutputTexel",e.outputColorSpace),Jx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Yr).join(`
`)),o=Fl(o),o=ef(o,e),o=nf(o,e),a=Fl(a),a=ef(a,e),a=nf(a,e),o=sf(o),a=sf(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let E=T+x+o,v=T+m+a,V=ju(s,s.VERTEX_SHADER,E),L=ju(s,s.FRAGMENT_SHADER,v);s.attachShader(_,V),s.attachShader(_,L),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function I(F){if(n.debug.checkShaderErrors){let j=s.getProgramInfoLog(_).trim(),B=s.getShaderInfoLog(V).trim(),G=s.getShaderInfoLog(L).trim(),q=!0,Y=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,V,L);else{let xt=tf(s,V,"vertex"),Q=tf(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+j+`
`+xt+`
`+Q)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(B===""||G==="")&&(Y=!1);Y&&(F.diagnostics={runnable:q,programLog:j,vertexShader:{log:B,prefix:x},fragmentShader:{log:G,prefix:m}})}s.deleteShader(V),s.deleteShader(L),O=new cr(s,_),A=Qx(s,_)}let O;this.getUniforms=function(){return O===void 0&&I(this),O};let A;this.getAttributes=function(){return A===void 0&&I(this),A};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(_,Wx)),w},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Xx++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=V,this.fragmentShader=L,this}var u_=0,Bl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new zl(t),e.set(t,i)),i}},zl=class{constructor(t){this.id=u_++,this.code=t,this.usedTimes=0}};function f_(n,t,e,i,s,r,o){let a=new io,c=new Bl,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(A){return l.add(A),A===0?"uv":`uv${A}`}function x(A,w,F,j,B){let G=j.fog,q=B.geometry,Y=A.isMeshStandardMaterial?j.environment:null,xt=(A.isMeshStandardMaterial?e:t).get(A.envMap||Y),Q=xt&&xt.mapping===ka?xt.image.height:null,Et=g[A.type];A.precision!==null&&(d=s.getMaxPrecision(A.precision),d!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",d,"instead."));let gt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,zt=gt!==void 0?gt.length:0,oe=0;q.morphAttributes.position!==void 0&&(oe=1),q.morphAttributes.normal!==void 0&&(oe=2),q.morphAttributes.color!==void 0&&(oe=3);let Me,ft,bt,Xt;if(Et){let Te=di[Et];Me=Te.vertexShader,ft=Te.fragmentShader}else Me=A.vertexShader,ft=A.fragmentShader,c.update(A),bt=c.getVertexShaderID(A),Xt=c.getFragmentShaderID(A);let Mt=n.getRenderTarget(),Qt=n.state.buffers.depth.getReversed(),ie=B.isInstancedMesh===!0,te=B.isBatchedMesh===!0,de=!!A.map,mt=!!A.matcap,St=!!xt,N=!!A.aoMap,Yt=!!A.lightMap,vt=!!A.bumpMap,Nt=!!A.normalMap,$=!!A.displacementMap,pt=!!A.emissiveMap,ht=!!A.metalnessMap,C=!!A.roughnessMap,b=A.anisotropy>0,W=A.clearcoat>0,J=A.dispersion>0,rt=A.iridescence>0,tt=A.sheen>0,Ct=A.transmission>0,ut=b&&!!A.anisotropyMap,Pt=W&&!!A.clearcoatMap,Lt=W&&!!A.clearcoatNormalMap,st=W&&!!A.clearcoatRoughnessMap,Ht=rt&&!!A.iridescenceMap,Wt=rt&&!!A.iridescenceThicknessMap,wt=tt&&!!A.sheenColorMap,Gt=tt&&!!A.sheenRoughnessMap,ye=!!A.specularMap,ae=!!A.specularColorMap,Se=!!A.specularIntensityMap,X=Ct&&!!A.transmissionMap,Dt=Ct&&!!A.thicknessMap,at=!!A.gradientMap,_t=!!A.alphaMap,Ot=A.alphaTest>0,Ut=!!A.alphaHash,he=!!A.extensions,we=Ki;A.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(we=n.toneMapping);let sn={shaderID:Et,shaderType:A.type,shaderName:A.name,vertexShader:Me,fragmentShader:ft,defines:A.defines,customVertexShaderID:bt,customFragmentShaderID:Xt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:d,batching:te,batchingColor:te&&B._colorsTexture!==null,instancing:ie,instancingColor:ie&&B.instanceColor!==null,instancingMorph:ie&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Mt===null?n.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:_r,alphaToCoverage:!!A.alphaToCoverage,map:de,matcap:mt,envMap:St,envMapMode:St&&xt.mapping,envMapCubeUVHeight:Q,aoMap:N,lightMap:Yt,bumpMap:vt,normalMap:Nt,displacementMap:f&&$,emissiveMap:pt,normalMapObjectSpace:Nt&&A.normalMapType===mp,normalMapTangentSpace:Nt&&A.normalMapType===Ff,metalnessMap:ht,roughnessMap:C,anisotropy:b,anisotropyMap:ut,clearcoat:W,clearcoatMap:Pt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:st,dispersion:J,iridescence:rt,iridescenceMap:Ht,iridescenceThicknessMap:Wt,sheen:tt,sheenColorMap:wt,sheenRoughnessMap:Gt,specularMap:ye,specularColorMap:ae,specularIntensityMap:Se,transmission:Ct,transmissionMap:X,thicknessMap:Dt,gradientMap:at,opaque:A.transparent===!1&&A.blending===rr&&A.alphaToCoverage===!1,alphaMap:_t,alphaTest:Ot,alphaHash:Ut,combine:A.combine,mapUv:de&&_(A.map.channel),aoMapUv:N&&_(A.aoMap.channel),lightMapUv:Yt&&_(A.lightMap.channel),bumpMapUv:vt&&_(A.bumpMap.channel),normalMapUv:Nt&&_(A.normalMap.channel),displacementMapUv:$&&_(A.displacementMap.channel),emissiveMapUv:pt&&_(A.emissiveMap.channel),metalnessMapUv:ht&&_(A.metalnessMap.channel),roughnessMapUv:C&&_(A.roughnessMap.channel),anisotropyMapUv:ut&&_(A.anisotropyMap.channel),clearcoatMapUv:Pt&&_(A.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&_(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&_(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ht&&_(A.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&_(A.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&_(A.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&_(A.sheenRoughnessMap.channel),specularMapUv:ye&&_(A.specularMap.channel),specularColorMapUv:ae&&_(A.specularColorMap.channel),specularIntensityMapUv:Se&&_(A.specularIntensityMap.channel),transmissionMapUv:X&&_(A.transmissionMap.channel),thicknessMapUv:Dt&&_(A.thicknessMap.channel),alphaMapUv:_t&&_(A.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Nt||b),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&(de||_t),fog:!!G,useFog:A.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Qt,skinning:B.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:zt,morphTextureStride:oe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:we,decodeVideoTexture:de&&A.map.isVideoTexture===!0&&ve.getTransfer(A.map.colorSpace)===Le,decodeVideoTextureEmissive:pt&&A.emissiveMap.isVideoTexture===!0&&ve.getTransfer(A.emissiveMap.colorSpace)===Le,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===gn,flipSided:A.side===xn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:he&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&A.extensions.multiDraw===!0||te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return sn.vertexUv1s=l.has(1),sn.vertexUv2s=l.has(2),sn.vertexUv3s=l.has(3),l.clear(),sn}function m(A){let w=[];if(A.shaderID?w.push(A.shaderID):(w.push(A.customVertexShaderID),w.push(A.customFragmentShaderID)),A.defines!==void 0)for(let F in A.defines)w.push(F),w.push(A.defines[F]);return A.isRawShaderMaterial===!1&&(T(w,A),E(w,A),w.push(n.outputColorSpace)),w.push(A.customProgramCacheKey),w.join()}function T(A,w){A.push(w.precision),A.push(w.outputColorSpace),A.push(w.envMapMode),A.push(w.envMapCubeUVHeight),A.push(w.mapUv),A.push(w.alphaMapUv),A.push(w.lightMapUv),A.push(w.aoMapUv),A.push(w.bumpMapUv),A.push(w.normalMapUv),A.push(w.displacementMapUv),A.push(w.emissiveMapUv),A.push(w.metalnessMapUv),A.push(w.roughnessMapUv),A.push(w.anisotropyMapUv),A.push(w.clearcoatMapUv),A.push(w.clearcoatNormalMapUv),A.push(w.clearcoatRoughnessMapUv),A.push(w.iridescenceMapUv),A.push(w.iridescenceThicknessMapUv),A.push(w.sheenColorMapUv),A.push(w.sheenRoughnessMapUv),A.push(w.specularMapUv),A.push(w.specularColorMapUv),A.push(w.specularIntensityMapUv),A.push(w.transmissionMapUv),A.push(w.thicknessMapUv),A.push(w.combine),A.push(w.fogExp2),A.push(w.sizeAttenuation),A.push(w.morphTargetsCount),A.push(w.morphAttributeCount),A.push(w.numDirLights),A.push(w.numPointLights),A.push(w.numSpotLights),A.push(w.numSpotLightMaps),A.push(w.numHemiLights),A.push(w.numRectAreaLights),A.push(w.numDirLightShadows),A.push(w.numPointLightShadows),A.push(w.numSpotLightShadows),A.push(w.numSpotLightShadowsWithMaps),A.push(w.numLightProbes),A.push(w.shadowMapType),A.push(w.toneMapping),A.push(w.numClippingPlanes),A.push(w.numClipIntersection),A.push(w.depthPacking)}function E(A,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),A.push(a.mask)}function v(A){let w=g[A.type],F;if(w){let j=di[w];F=n0.clone(j.uniforms)}else F=A.uniforms;return F}function V(A,w){let F;for(let j=0,B=h.length;j<B;j++){let G=h[j];if(G.cacheKey===w){F=G,++F.usedTimes;break}}return F===void 0&&(F=new h_(n,w,A,r),h.push(F)),F}function L(A){if(--A.usedTimes===0){let w=h.indexOf(A);h[w]=h[h.length-1],h.pop(),A.destroy()}}function I(A){c.remove(A)}function O(){c.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:v,acquireProgram:V,releaseProgram:L,releaseShaderCache:I,programs:h,dispose:O}}function d_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function p_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function of(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function af(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,f,d,g,_,x){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:x},n[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=x),t++,m}function a(u,f,d,g,_,x){let m=o(u,f,d,g,_,x);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):e.push(m)}function c(u,f,d,g,_,x){let m=o(u,f,d,g,_,x);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function l(u,f){e.length>1&&e.sort(u||p_),i.length>1&&i.sort(f||of),s.length>1&&s.sort(f||of)}function h(){for(let u=t,f=n.length;u<f;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function m_(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new af,n.set(i,[o])):s>=r.length?(o=new af,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function g_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new se};break;case"SpotLight":e={position:new U,direction:new U,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function x_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var __=0;function y_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function M_(n){let t=new g_,e=x_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);let s=new U,r=new Fe,o=new Fe;function a(l){let h=0,u=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let d=0,g=0,_=0,x=0,m=0,T=0,E=0,v=0,V=0,L=0,I=0;l.sort(y_);for(let A=0,w=l.length;A<w;A++){let F=l[A],j=F.color,B=F.intensity,G=F.distance,q=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)h+=j.r*B,u+=j.g*B,f+=j.b*B;else if(F.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(F.sh.coefficients[Y],B);I++}else if(F.isDirectionalLight){let Y=t.get(F);if(Y.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let xt=F.shadow,Q=e.get(F);Q.shadowIntensity=xt.intensity,Q.shadowBias=xt.bias,Q.shadowNormalBias=xt.normalBias,Q.shadowRadius=xt.radius,Q.shadowMapSize=xt.mapSize,i.directionalShadow[d]=Q,i.directionalShadowMap[d]=q,i.directionalShadowMatrix[d]=F.shadow.matrix,T++}i.directional[d]=Y,d++}else if(F.isSpotLight){let Y=t.get(F);Y.position.setFromMatrixPosition(F.matrixWorld),Y.color.copy(j).multiplyScalar(B),Y.distance=G,Y.coneCos=Math.cos(F.angle),Y.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Y.decay=F.decay,i.spot[_]=Y;let xt=F.shadow;if(F.map&&(i.spotLightMap[V]=F.map,V++,xt.updateMatrices(F),F.castShadow&&L++),i.spotLightMatrix[_]=xt.matrix,F.castShadow){let Q=e.get(F);Q.shadowIntensity=xt.intensity,Q.shadowBias=xt.bias,Q.shadowNormalBias=xt.normalBias,Q.shadowRadius=xt.radius,Q.shadowMapSize=xt.mapSize,i.spotShadow[_]=Q,i.spotShadowMap[_]=q,v++}_++}else if(F.isRectAreaLight){let Y=t.get(F);Y.color.copy(j).multiplyScalar(B),Y.halfWidth.set(F.width*.5,0,0),Y.halfHeight.set(0,F.height*.5,0),i.rectArea[x]=Y,x++}else if(F.isPointLight){let Y=t.get(F);if(Y.color.copy(F.color).multiplyScalar(F.intensity),Y.distance=F.distance,Y.decay=F.decay,F.castShadow){let xt=F.shadow,Q=e.get(F);Q.shadowIntensity=xt.intensity,Q.shadowBias=xt.bias,Q.shadowNormalBias=xt.normalBias,Q.shadowRadius=xt.radius,Q.shadowMapSize=xt.mapSize,Q.shadowCameraNear=xt.camera.near,Q.shadowCameraFar=xt.camera.far,i.pointShadow[g]=Q,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=F.shadow.matrix,E++}i.point[g]=Y,g++}else if(F.isHemisphereLight){let Y=t.get(F);Y.skyColor.copy(F.color).multiplyScalar(B),Y.groundColor.copy(F.groundColor).multiplyScalar(B),i.hemi[m]=Y,m++}}x>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Bt.LTC_FLOAT_1,i.rectAreaLTC2=Bt.LTC_FLOAT_2):(i.rectAreaLTC1=Bt.LTC_HALF_1,i.rectAreaLTC2=Bt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let O=i.hash;(O.directionalLength!==d||O.pointLength!==g||O.spotLength!==_||O.rectAreaLength!==x||O.hemiLength!==m||O.numDirectionalShadows!==T||O.numPointShadows!==E||O.numSpotShadows!==v||O.numSpotMaps!==V||O.numLightProbes!==I)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=x,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=v+V-L,i.spotLightMap.length=V,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=I,O.directionalLength=d,O.pointLength=g,O.spotLength=_,O.rectAreaLength=x,O.hemiLength=m,O.numDirectionalShadows=T,O.numPointShadows=E,O.numSpotShadows=v,O.numSpotMaps=V,O.numLightProbes=I,i.version=__++)}function c(l,h){let u=0,f=0,d=0,g=0,_=0,x=h.matrixWorldInverse;for(let m=0,T=l.length;m<T;m++){let E=l[m];if(E.isDirectionalLight){let v=i.directional[u];v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(x),u++}else if(E.isSpotLight){let v=i.spot[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(x),v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(x),d++}else if(E.isRectAreaLight){let v=i.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(x),o.identity(),r.copy(E.matrixWorld),r.premultiply(x),o.extractRotation(r),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){let v=i.point[f];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(x),f++}else if(E.isHemisphereLight){let v=i.hemi[_];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(x),_++}}}return{setup:a,setupView:c,state:i}}function cf(n){let t=new M_(n),e=[],i=[];function s(h){l.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function v_(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new cf(n),t.set(s,[a])):r>=o.length?(a=new cf(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Hl=class extends Ni{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=dp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},kl=class extends Ni{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},E_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b_=`uniform sampler2D shadow_pass;
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
}`;function S_(n,t,e){let i=new so,s=new yt,r=new yt,o=new De,a=new Hl({depthPacking:pp}),c=new kl,l={},h=e.maxTextureSize,u={[Ji]:xn,[xn]:Ji,[gn]:gn},f=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:E_,fragmentShader:b_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Oe;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new At(g,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wf;let m=this.type;this.render=function(L,I,O){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||L.length===0)return;let A=n.getRenderTarget(),w=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),j=n.state;j.setBlending(Zi),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);let B=m!==Ri&&this.type===Ri,G=m===Ri&&this.type!==Ri;for(let q=0,Y=L.length;q<Y;q++){let xt=L[q],Q=xt.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",xt,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);let Et=Q.getFrameExtents();if(s.multiply(Et),r.copy(Q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Et.x),s.x=r.x*Et.x,Q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Et.y),s.y=r.y*Et.y,Q.mapSize.y=r.y)),Q.map===null||B===!0||G===!0){let zt=this.type!==Ri?{minFilter:qe,magFilter:qe}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Ui(s.x,s.y,zt),Q.map.texture.name=xt.name+".shadowMap",Q.camera.updateProjectionMatrix()}n.setRenderTarget(Q.map),n.clear();let gt=Q.getViewportCount();for(let zt=0;zt<gt;zt++){let oe=Q.getViewport(zt);o.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),j.viewport(o),Q.updateMatrices(xt,zt),i=Q.getFrustum(),v(I,O,Q.camera,xt,this.type)}Q.isPointLightShadow!==!0&&this.type===Ri&&T(Q,O),Q.needsUpdate=!1}m=this.type,x.needsUpdate=!1,n.setRenderTarget(A,w,F)};function T(L,I){let O=t.update(_);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,d.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Ui(s.x,s.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(I,null,O,f,_,null),d.uniforms.shadow_pass.value=L.mapPass.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(I,null,O,d,_,null)}function E(L,I,O,A){let w=null,F=O.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(F!==void 0)w=F;else if(w=O.isPointLight===!0?c:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let j=w.uuid,B=I.uuid,G=l[j];G===void 0&&(G={},l[j]=G);let q=G[B];q===void 0&&(q=w.clone(),G[B]=q,I.addEventListener("dispose",V)),w=q}if(w.visible=I.visible,w.wireframe=I.wireframe,A===Ri?w.side=I.shadowSide!==null?I.shadowSide:I.side:w.side=I.shadowSide!==null?I.shadowSide:u[I.side],w.alphaMap=I.alphaMap,w.alphaTest=I.alphaTest,w.map=I.map,w.clipShadows=I.clipShadows,w.clippingPlanes=I.clippingPlanes,w.clipIntersection=I.clipIntersection,w.displacementMap=I.displacementMap,w.displacementScale=I.displacementScale,w.displacementBias=I.displacementBias,w.wireframeLinewidth=I.wireframeLinewidth,w.linewidth=I.linewidth,O.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let j=n.properties.get(w);j.light=O}return w}function v(L,I,O,A,w){if(L.visible===!1)return;if(L.layers.test(I.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&w===Ri)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,L.matrixWorld);let B=t.update(L),G=L.material;if(Array.isArray(G)){let q=B.groups;for(let Y=0,xt=q.length;Y<xt;Y++){let Q=q[Y],Et=G[Q.materialIndex];if(Et&&Et.visible){let gt=E(L,Et,A,w);L.onBeforeShadow(n,L,I,O,B,gt,Q),n.renderBufferDirect(O,null,B,gt,L,Q),L.onAfterShadow(n,L,I,O,B,gt,Q)}}}else if(G.visible){let q=E(L,G,A,w);L.onBeforeShadow(n,L,I,O,B,q,null),n.renderBufferDirect(O,null,B,q,L,null),L.onAfterShadow(n,L,I,O,B,q,null)}}let j=L.children;for(let B=0,G=j.length;B<G;B++)v(j[B],I,O,A,w)}function V(L){L.target.removeEventListener("dispose",V);for(let O in l){let A=l[O],w=L.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}var w_={[Xc]:Yc,[qc]:Jc,[Zc]:$c,[lr]:Kc,[Yc]:Xc,[Jc]:qc,[$c]:Zc,[Kc]:lr};function T_(n,t){function e(){let X=!1,Dt=new De,at=null,_t=new De(0,0,0,0);return{setMask:function(Ot){at!==Ot&&!X&&(n.colorMask(Ot,Ot,Ot,Ot),at=Ot)},setLocked:function(Ot){X=Ot},setClear:function(Ot,Ut,he,we,sn){sn===!0&&(Ot*=we,Ut*=we,he*=we),Dt.set(Ot,Ut,he,we),_t.equals(Dt)===!1&&(n.clearColor(Ot,Ut,he,we),_t.copy(Dt))},reset:function(){X=!1,at=null,_t.set(-1,0,0,0)}}}function i(){let X=!1,Dt=!1,at=null,_t=null,Ot=null;return{setReversed:function(Ut){if(Dt!==Ut){let he=t.get("EXT_clip_control");Dt?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT);let we=Ot;Ot=null,this.setClear(we)}Dt=Ut},getReversed:function(){return Dt},setTest:function(Ut){Ut?Mt(n.DEPTH_TEST):Qt(n.DEPTH_TEST)},setMask:function(Ut){at!==Ut&&!X&&(n.depthMask(Ut),at=Ut)},setFunc:function(Ut){if(Dt&&(Ut=w_[Ut]),_t!==Ut){switch(Ut){case Xc:n.depthFunc(n.NEVER);break;case Yc:n.depthFunc(n.ALWAYS);break;case qc:n.depthFunc(n.LESS);break;case lr:n.depthFunc(n.LEQUAL);break;case Zc:n.depthFunc(n.EQUAL);break;case Kc:n.depthFunc(n.GEQUAL);break;case Jc:n.depthFunc(n.GREATER);break;case $c:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_t=Ut}},setLocked:function(Ut){X=Ut},setClear:function(Ut){Ot!==Ut&&(Dt&&(Ut=1-Ut),n.clearDepth(Ut),Ot=Ut)},reset:function(){X=!1,at=null,_t=null,Ot=null,Dt=!1}}}function s(){let X=!1,Dt=null,at=null,_t=null,Ot=null,Ut=null,he=null,we=null,sn=null;return{setTest:function(Te){X||(Te?Mt(n.STENCIL_TEST):Qt(n.STENCIL_TEST))},setMask:function(Te){Dt!==Te&&!X&&(n.stencilMask(Te),Dt=Te)},setFunc:function(Te,fn,Hn){(at!==Te||_t!==fn||Ot!==Hn)&&(n.stencilFunc(Te,fn,Hn),at=Te,_t=fn,Ot=Hn)},setOp:function(Te,fn,Hn){(Ut!==Te||he!==fn||we!==Hn)&&(n.stencilOp(Te,fn,Hn),Ut=Te,he=fn,we=Hn)},setLocked:function(Te){X=Te},setClear:function(Te){sn!==Te&&(n.clearStencil(Te),sn=Te)},reset:function(){X=!1,Dt=null,at=null,_t=null,Ot=null,Ut=null,he=null,we=null,sn=null}}}let r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,_=!1,x=null,m=null,T=null,E=null,v=null,V=null,L=null,I=new se(0,0,0),O=0,A=!1,w=null,F=null,j=null,B=null,G=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,xt=0,Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(xt=parseFloat(/^WebGL (\d)/.exec(Q)[1]),Y=xt>=1):Q.indexOf("OpenGL ES")!==-1&&(xt=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),Y=xt>=2);let Et=null,gt={},zt=n.getParameter(n.SCISSOR_BOX),oe=n.getParameter(n.VIEWPORT),Me=new De().fromArray(zt),ft=new De().fromArray(oe);function bt(X,Dt,at,_t){let Ot=new Uint8Array(4),Ut=n.createTexture();n.bindTexture(X,Ut),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let he=0;he<at;he++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(Dt,0,n.RGBA,1,1,_t,0,n.RGBA,n.UNSIGNED_BYTE,Ot):n.texImage2D(Dt+he,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ot);return Ut}let Xt={};Xt[n.TEXTURE_2D]=bt(n.TEXTURE_2D,n.TEXTURE_2D,1),Xt[n.TEXTURE_CUBE_MAP]=bt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Xt[n.TEXTURE_2D_ARRAY]=bt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Xt[n.TEXTURE_3D]=bt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Mt(n.DEPTH_TEST),o.setFunc(lr),vt(!1),Nt(lu),Mt(n.CULL_FACE),N(Zi);function Mt(X){h[X]!==!0&&(n.enable(X),h[X]=!0)}function Qt(X){h[X]!==!1&&(n.disable(X),h[X]=!1)}function ie(X,Dt){return u[X]!==Dt?(n.bindFramebuffer(X,Dt),u[X]=Dt,X===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Dt),X===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Dt),!0):!1}function te(X,Dt){let at=d,_t=!1;if(X){at=f.get(Dt),at===void 0&&(at=[],f.set(Dt,at));let Ot=X.textures;if(at.length!==Ot.length||at[0]!==n.COLOR_ATTACHMENT0){for(let Ut=0,he=Ot.length;Ut<he;Ut++)at[Ut]=n.COLOR_ATTACHMENT0+Ut;at.length=Ot.length,_t=!0}}else at[0]!==n.BACK&&(at[0]=n.BACK,_t=!0);_t&&n.drawBuffers(at)}function de(X){return g!==X?(n.useProgram(X),g=X,!0):!1}let mt={[ds]:n.FUNC_ADD,[Hd]:n.FUNC_SUBTRACT,[kd]:n.FUNC_REVERSE_SUBTRACT};mt[Vd]=n.MIN,mt[Gd]=n.MAX;let St={[Wd]:n.ZERO,[Xd]:n.ONE,[Yd]:n.SRC_COLOR,[Gc]:n.SRC_ALPHA,[jd]:n.SRC_ALPHA_SATURATE,[Jd]:n.DST_COLOR,[Zd]:n.DST_ALPHA,[qd]:n.ONE_MINUS_SRC_COLOR,[Wc]:n.ONE_MINUS_SRC_ALPHA,[$d]:n.ONE_MINUS_DST_COLOR,[Kd]:n.ONE_MINUS_DST_ALPHA,[Qd]:n.CONSTANT_COLOR,[tp]:n.ONE_MINUS_CONSTANT_COLOR,[ep]:n.CONSTANT_ALPHA,[np]:n.ONE_MINUS_CONSTANT_ALPHA};function N(X,Dt,at,_t,Ot,Ut,he,we,sn,Te){if(X===Zi){_===!0&&(Qt(n.BLEND),_=!1);return}if(_===!1&&(Mt(n.BLEND),_=!0),X!==zd){if(X!==x||Te!==A){if((m!==ds||v!==ds)&&(n.blendEquation(n.FUNC_ADD),m=ds,v=ds),Te)switch(X){case rr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hu:n.blendFunc(n.ONE,n.ONE);break;case uu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case rr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case uu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}T=null,E=null,V=null,L=null,I.set(0,0,0),O=0,x=X,A=Te}return}Ot=Ot||Dt,Ut=Ut||at,he=he||_t,(Dt!==m||Ot!==v)&&(n.blendEquationSeparate(mt[Dt],mt[Ot]),m=Dt,v=Ot),(at!==T||_t!==E||Ut!==V||he!==L)&&(n.blendFuncSeparate(St[at],St[_t],St[Ut],St[he]),T=at,E=_t,V=Ut,L=he),(we.equals(I)===!1||sn!==O)&&(n.blendColor(we.r,we.g,we.b,sn),I.copy(we),O=sn),x=X,A=!1}function Yt(X,Dt){X.side===gn?Qt(n.CULL_FACE):Mt(n.CULL_FACE);let at=X.side===xn;Dt&&(at=!at),vt(at),X.blending===rr&&X.transparent===!1?N(Zi):N(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);let _t=X.stencilWrite;a.setTest(_t),_t&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),pt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Mt(n.SAMPLE_ALPHA_TO_COVERAGE):Qt(n.SAMPLE_ALPHA_TO_COVERAGE)}function vt(X){w!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),w=X)}function Nt(X){X!==Fd?(Mt(n.CULL_FACE),X!==F&&(X===lu?n.cullFace(n.BACK):X===Bd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Qt(n.CULL_FACE),F=X}function $(X){X!==j&&(Y&&n.lineWidth(X),j=X)}function pt(X,Dt,at){X?(Mt(n.POLYGON_OFFSET_FILL),(B!==Dt||G!==at)&&(n.polygonOffset(Dt,at),B=Dt,G=at)):Qt(n.POLYGON_OFFSET_FILL)}function ht(X){X?Mt(n.SCISSOR_TEST):Qt(n.SCISSOR_TEST)}function C(X){X===void 0&&(X=n.TEXTURE0+q-1),Et!==X&&(n.activeTexture(X),Et=X)}function b(X,Dt,at){at===void 0&&(Et===null?at=n.TEXTURE0+q-1:at=Et);let _t=gt[at];_t===void 0&&(_t={type:void 0,texture:void 0},gt[at]=_t),(_t.type!==X||_t.texture!==Dt)&&(Et!==at&&(n.activeTexture(at),Et=at),n.bindTexture(X,Dt||Xt[X]),_t.type=X,_t.texture=Dt)}function W(){let X=gt[Et];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function rt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function tt(){try{n.texSubImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ct(){try{n.texSubImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ut(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Lt(){try{n.texStorage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function st(){try{n.texStorage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ht(){try{n.texImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Wt(){try{n.texImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function wt(X){Me.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),Me.copy(X))}function Gt(X){ft.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),ft.copy(X))}function ye(X,Dt){let at=l.get(Dt);at===void 0&&(at=new WeakMap,l.set(Dt,at));let _t=at.get(X);_t===void 0&&(_t=n.getUniformBlockIndex(Dt,X.name),at.set(X,_t))}function ae(X,Dt){let _t=l.get(Dt).get(X);c.get(Dt)!==_t&&(n.uniformBlockBinding(Dt,_t,X.__bindingPointIndex),c.set(Dt,_t))}function Se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Et=null,gt={},u={},f=new WeakMap,d=[],g=null,_=!1,x=null,m=null,T=null,E=null,v=null,V=null,L=null,I=new se(0,0,0),O=0,A=!1,w=null,F=null,j=null,B=null,G=null,Me.set(0,0,n.canvas.width,n.canvas.height),ft.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Mt,disable:Qt,bindFramebuffer:ie,drawBuffers:te,useProgram:de,setBlending:N,setMaterial:Yt,setFlipSided:vt,setCullFace:Nt,setLineWidth:$,setPolygonOffset:pt,setScissorTest:ht,activeTexture:C,bindTexture:b,unbindTexture:W,compressedTexImage2D:J,compressedTexImage3D:rt,texImage2D:Ht,texImage3D:Wt,updateUBOMapping:ye,uniformBlockBinding:ae,texStorage2D:Lt,texStorage3D:st,texSubImage2D:tt,texSubImage3D:Ct,compressedTexSubImage2D:ut,compressedTexSubImage3D:Pt,scissor:wt,viewport:Gt,reset:Se}}function lf(n,t,e,i){let s=A_(i);switch(e){case Pf:return n*t;case Lf:return n*t;case Df:return n*t*2;case Uf:return n*t/s.components*s.byteLength;case yh:return n*t/s.components*s.byteLength;case Nf:return n*t*2/s.components*s.byteLength;case Mh:return n*t*2/s.components*s.byteLength;case If:return n*t*3/s.components*s.byteLength;case ii:return n*t*4/s.components*s.byteLength;case vh:return n*t*4/s.components*s.byteLength;case ua:case fa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case da:case pa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case nl:case sl:return Math.max(n,16)*Math.max(t,8)/4;case el:case il:return Math.max(n,8)*Math.max(t,8)/2;case rl:case ol:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case al:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case cl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ll:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case hl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ul:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case fl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case dl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case pl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ml:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case gl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case xl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case _l:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case yl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ml:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case vl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ma:case El:case bl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Of:case Sl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case wl:case Tl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function A_(n){switch(n){case Li:case Af:return{byteLength:1,components:1};case to:case Rf:case So:return{byteLength:2,components:1};case xh:case _h:return{byteLength:2,components:4};case xs:case gh:case Ci:return{byteLength:4,components:1};case Cf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function R_(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new yt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return d?new OffscreenCanvas(C,b):no("canvas")}function _(C,b,W){let J=1,rt=ht(C);if((rt.width>W||rt.height>W)&&(J=W/Math.max(rt.width,rt.height)),J<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let tt=Math.floor(J*rt.width),Ct=Math.floor(J*rt.height);u===void 0&&(u=g(tt,Ct));let ut=b?g(tt,Ct):u;return ut.width=tt,ut.height=Ct,ut.getContext("2d").drawImage(C,0,0,tt,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+tt+"x"+Ct+")."),ut}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),C;return C}function x(C){return C.generateMipmaps}function m(C){n.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(C,b,W,J,rt=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let tt=b;if(b===n.RED&&(W===n.FLOAT&&(tt=n.R32F),W===n.HALF_FLOAT&&(tt=n.R16F),W===n.UNSIGNED_BYTE&&(tt=n.R8)),b===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(tt=n.R8UI),W===n.UNSIGNED_SHORT&&(tt=n.R16UI),W===n.UNSIGNED_INT&&(tt=n.R32UI),W===n.BYTE&&(tt=n.R8I),W===n.SHORT&&(tt=n.R16I),W===n.INT&&(tt=n.R32I)),b===n.RG&&(W===n.FLOAT&&(tt=n.RG32F),W===n.HALF_FLOAT&&(tt=n.RG16F),W===n.UNSIGNED_BYTE&&(tt=n.RG8)),b===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(tt=n.RG8UI),W===n.UNSIGNED_SHORT&&(tt=n.RG16UI),W===n.UNSIGNED_INT&&(tt=n.RG32UI),W===n.BYTE&&(tt=n.RG8I),W===n.SHORT&&(tt=n.RG16I),W===n.INT&&(tt=n.RG32I)),b===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(tt=n.RGB8UI),W===n.UNSIGNED_SHORT&&(tt=n.RGB16UI),W===n.UNSIGNED_INT&&(tt=n.RGB32UI),W===n.BYTE&&(tt=n.RGB8I),W===n.SHORT&&(tt=n.RGB16I),W===n.INT&&(tt=n.RGB32I)),b===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(tt=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(tt=n.RGBA16UI),W===n.UNSIGNED_INT&&(tt=n.RGBA32UI),W===n.BYTE&&(tt=n.RGBA8I),W===n.SHORT&&(tt=n.RGBA16I),W===n.INT&&(tt=n.RGBA32I)),b===n.RGB&&W===n.UNSIGNED_INT_5_9_9_9_REV&&(tt=n.RGB9_E5),b===n.RGBA){let Ct=rt?Va:ve.getTransfer(J);W===n.FLOAT&&(tt=n.RGBA32F),W===n.HALF_FLOAT&&(tt=n.RGBA16F),W===n.UNSIGNED_BYTE&&(tt=Ct===Le?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(tt=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(tt=n.RGB5_A1)}return(tt===n.R16F||tt===n.R32F||tt===n.RG16F||tt===n.RG32F||tt===n.RGBA16F||tt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function v(C,b){let W;return C?b===null||b===xs||b===fr?W=n.DEPTH24_STENCIL8:b===Ci?W=n.DEPTH32F_STENCIL8:b===to&&(W=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===xs||b===fr?W=n.DEPTH_COMPONENT24:b===Ci?W=n.DEPTH_COMPONENT32F:b===to&&(W=n.DEPTH_COMPONENT16),W}function V(C,b){return x(C)===!0||C.isFramebufferTexture&&C.minFilter!==qe&&C.minFilter!==pi?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function L(C){let b=C.target;b.removeEventListener("dispose",L),O(b),b.isVideoTexture&&h.delete(b)}function I(C){let b=C.target;b.removeEventListener("dispose",I),w(b)}function O(C){let b=i.get(C);if(b.__webglInit===void 0)return;let W=C.source,J=f.get(W);if(J){let rt=J[b.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&A(C),Object.keys(J).length===0&&f.delete(W)}i.remove(C)}function A(C){let b=i.get(C);n.deleteTexture(b.__webglTexture);let W=C.source,J=f.get(W);delete J[b.__cacheKey],o.memory.textures--}function w(C){let b=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(b.__webglFramebuffer[J]))for(let rt=0;rt<b.__webglFramebuffer[J].length;rt++)n.deleteFramebuffer(b.__webglFramebuffer[J][rt]);else n.deleteFramebuffer(b.__webglFramebuffer[J]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[J])}else{if(Array.isArray(b.__webglFramebuffer))for(let J=0;J<b.__webglFramebuffer.length;J++)n.deleteFramebuffer(b.__webglFramebuffer[J]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let J=0;J<b.__webglColorRenderbuffer.length;J++)b.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[J]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let W=C.textures;for(let J=0,rt=W.length;J<rt;J++){let tt=i.get(W[J]);tt.__webglTexture&&(n.deleteTexture(tt.__webglTexture),o.memory.textures--),i.remove(W[J])}i.remove(C)}let F=0;function j(){F=0}function B(){let C=F;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),F+=1,C}function G(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function q(C,b){let W=i.get(C);if(C.isVideoTexture&&$(C),C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){let J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(W,C,b);return}}e.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+b)}function Y(C,b){let W=i.get(C);if(C.version>0&&W.__version!==C.version){ft(W,C,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+b)}function xt(C,b){let W=i.get(C);if(C.version>0&&W.__version!==C.version){ft(W,C,b);return}e.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+b)}function Q(C,b){let W=i.get(C);if(C.version>0&&W.__version!==C.version){bt(W,C,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+b)}let Et={[Qr]:n.REPEAT,[ms]:n.CLAMP_TO_EDGE,[tl]:n.MIRRORED_REPEAT},gt={[qe]:n.NEAREST,[fp]:n.NEAREST_MIPMAP_NEAREST,[No]:n.NEAREST_MIPMAP_LINEAR,[pi]:n.LINEAR,[lc]:n.LINEAR_MIPMAP_NEAREST,[gs]:n.LINEAR_MIPMAP_LINEAR},zt={[gp]:n.NEVER,[Ep]:n.ALWAYS,[xp]:n.LESS,[Bf]:n.LEQUAL,[_p]:n.EQUAL,[vp]:n.GEQUAL,[yp]:n.GREATER,[Mp]:n.NOTEQUAL};function oe(C,b){if(b.type===Ci&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===pi||b.magFilter===lc||b.magFilter===No||b.magFilter===gs||b.minFilter===pi||b.minFilter===lc||b.minFilter===No||b.minFilter===gs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,Et[b.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Et[b.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Et[b.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,gt[b.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,gt[b.minFilter]),b.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,zt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===qe||b.minFilter!==No&&b.minFilter!==gs||b.type===Ci&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Me(C,b){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",L));let J=b.source,rt=f.get(J);rt===void 0&&(rt={},f.set(J,rt));let tt=G(b);if(tt!==C.__cacheKey){rt[tt]===void 0&&(rt[tt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),rt[tt].usedTimes++;let Ct=rt[C.__cacheKey];Ct!==void 0&&(rt[C.__cacheKey].usedTimes--,Ct.usedTimes===0&&A(b)),C.__cacheKey=tt,C.__webglTexture=rt[tt].texture}return W}function ft(C,b,W){let J=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(J=n.TEXTURE_3D);let rt=Me(C,b),tt=b.source;e.bindTexture(J,C.__webglTexture,n.TEXTURE0+W);let Ct=i.get(tt);if(tt.version!==Ct.__version||rt===!0){e.activeTexture(n.TEXTURE0+W);let ut=ve.getPrimaries(ve.workingColorSpace),Pt=b.colorSpace===Yi?null:ve.getPrimaries(b.colorSpace),Lt=b.colorSpace===Yi||ut===Pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let st=_(b.image,!1,s.maxTextureSize);st=pt(b,st);let Ht=r.convert(b.format,b.colorSpace),Wt=r.convert(b.type),wt=E(b.internalFormat,Ht,Wt,b.colorSpace,b.isVideoTexture);oe(J,b);let Gt,ye=b.mipmaps,ae=b.isVideoTexture!==!0,Se=Ct.__version===void 0||rt===!0,X=tt.dataReady,Dt=V(b,st);if(b.isDepthTexture)wt=v(b.format===dr,b.type),Se&&(ae?e.texStorage2D(n.TEXTURE_2D,1,wt,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,wt,st.width,st.height,0,Ht,Wt,null));else if(b.isDataTexture)if(ye.length>0){ae&&Se&&e.texStorage2D(n.TEXTURE_2D,Dt,wt,ye[0].width,ye[0].height);for(let at=0,_t=ye.length;at<_t;at++)Gt=ye[at],ae?X&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,Gt.width,Gt.height,Ht,Wt,Gt.data):e.texImage2D(n.TEXTURE_2D,at,wt,Gt.width,Gt.height,0,Ht,Wt,Gt.data);b.generateMipmaps=!1}else ae?(Se&&e.texStorage2D(n.TEXTURE_2D,Dt,wt,st.width,st.height),X&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,st.width,st.height,Ht,Wt,st.data)):e.texImage2D(n.TEXTURE_2D,0,wt,st.width,st.height,0,Ht,Wt,st.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ae&&Se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Dt,wt,ye[0].width,ye[0].height,st.depth);for(let at=0,_t=ye.length;at<_t;at++)if(Gt=ye[at],b.format!==ii)if(Ht!==null)if(ae){if(X)if(b.layerUpdates.size>0){let Ot=lf(Gt.width,Gt.height,b.format,b.type);for(let Ut of b.layerUpdates){let he=Gt.data.subarray(Ut*Ot/Gt.data.BYTES_PER_ELEMENT,(Ut+1)*Ot/Gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,Ut,Gt.width,Gt.height,1,Ht,he)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,Gt.width,Gt.height,st.depth,Ht,Gt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,at,wt,Gt.width,Gt.height,st.depth,0,Gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?X&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,Gt.width,Gt.height,st.depth,Ht,Wt,Gt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,at,wt,Gt.width,Gt.height,st.depth,0,Ht,Wt,Gt.data)}else{ae&&Se&&e.texStorage2D(n.TEXTURE_2D,Dt,wt,ye[0].width,ye[0].height);for(let at=0,_t=ye.length;at<_t;at++)Gt=ye[at],b.format!==ii?Ht!==null?ae?X&&e.compressedTexSubImage2D(n.TEXTURE_2D,at,0,0,Gt.width,Gt.height,Ht,Gt.data):e.compressedTexImage2D(n.TEXTURE_2D,at,wt,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?X&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,Gt.width,Gt.height,Ht,Wt,Gt.data):e.texImage2D(n.TEXTURE_2D,at,wt,Gt.width,Gt.height,0,Ht,Wt,Gt.data)}else if(b.isDataArrayTexture)if(ae){if(Se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Dt,wt,st.width,st.height,st.depth),X)if(b.layerUpdates.size>0){let at=lf(st.width,st.height,b.format,b.type);for(let _t of b.layerUpdates){let Ot=st.data.subarray(_t*at/st.data.BYTES_PER_ELEMENT,(_t+1)*at/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,_t,st.width,st.height,1,Ht,Wt,Ot)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Ht,Wt,st.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,wt,st.width,st.height,st.depth,0,Ht,Wt,st.data);else if(b.isData3DTexture)ae?(Se&&e.texStorage3D(n.TEXTURE_3D,Dt,wt,st.width,st.height,st.depth),X&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Ht,Wt,st.data)):e.texImage3D(n.TEXTURE_3D,0,wt,st.width,st.height,st.depth,0,Ht,Wt,st.data);else if(b.isFramebufferTexture){if(Se)if(ae)e.texStorage2D(n.TEXTURE_2D,Dt,wt,st.width,st.height);else{let at=st.width,_t=st.height;for(let Ot=0;Ot<Dt;Ot++)e.texImage2D(n.TEXTURE_2D,Ot,wt,at,_t,0,Ht,Wt,null),at>>=1,_t>>=1}}else if(ye.length>0){if(ae&&Se){let at=ht(ye[0]);e.texStorage2D(n.TEXTURE_2D,Dt,wt,at.width,at.height)}for(let at=0,_t=ye.length;at<_t;at++)Gt=ye[at],ae?X&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,Ht,Wt,Gt):e.texImage2D(n.TEXTURE_2D,at,wt,Ht,Wt,Gt);b.generateMipmaps=!1}else if(ae){if(Se){let at=ht(st);e.texStorage2D(n.TEXTURE_2D,Dt,wt,at.width,at.height)}X&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ht,Wt,st)}else e.texImage2D(n.TEXTURE_2D,0,wt,Ht,Wt,st);x(b)&&m(J),Ct.__version=tt.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function bt(C,b,W){if(b.image.length!==6)return;let J=Me(C,b),rt=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+W);let tt=i.get(rt);if(rt.version!==tt.__version||J===!0){e.activeTexture(n.TEXTURE0+W);let Ct=ve.getPrimaries(ve.workingColorSpace),ut=b.colorSpace===Yi?null:ve.getPrimaries(b.colorSpace),Pt=b.colorSpace===Yi||Ct===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let Lt=b.isCompressedTexture||b.image[0].isCompressedTexture,st=b.image[0]&&b.image[0].isDataTexture,Ht=[];for(let _t=0;_t<6;_t++)!Lt&&!st?Ht[_t]=_(b.image[_t],!0,s.maxCubemapSize):Ht[_t]=st?b.image[_t].image:b.image[_t],Ht[_t]=pt(b,Ht[_t]);let Wt=Ht[0],wt=r.convert(b.format,b.colorSpace),Gt=r.convert(b.type),ye=E(b.internalFormat,wt,Gt,b.colorSpace),ae=b.isVideoTexture!==!0,Se=tt.__version===void 0||J===!0,X=rt.dataReady,Dt=V(b,Wt);oe(n.TEXTURE_CUBE_MAP,b);let at;if(Lt){ae&&Se&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Dt,ye,Wt.width,Wt.height);for(let _t=0;_t<6;_t++){at=Ht[_t].mipmaps;for(let Ot=0;Ot<at.length;Ot++){let Ut=at[Ot];b.format!==ii?wt!==null?ae?X&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ot,0,0,Ut.width,Ut.height,wt,Ut.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ot,ye,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ot,0,0,Ut.width,Ut.height,wt,Gt,Ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ot,ye,Ut.width,Ut.height,0,wt,Gt,Ut.data)}}}else{if(at=b.mipmaps,ae&&Se){at.length>0&&Dt++;let _t=ht(Ht[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Dt,ye,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(st){ae?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ht[_t].width,Ht[_t].height,wt,Gt,Ht[_t].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ye,Ht[_t].width,Ht[_t].height,0,wt,Gt,Ht[_t].data);for(let Ot=0;Ot<at.length;Ot++){let he=at[Ot].image[_t].image;ae?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ot+1,0,0,he.width,he.height,wt,Gt,he.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ot+1,ye,he.width,he.height,0,wt,Gt,he.data)}}else{ae?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,wt,Gt,Ht[_t]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ye,wt,Gt,Ht[_t]);for(let Ot=0;Ot<at.length;Ot++){let Ut=at[Ot];ae?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ot+1,0,0,wt,Gt,Ut.image[_t]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ot+1,ye,wt,Gt,Ut.image[_t])}}}x(b)&&m(n.TEXTURE_CUBE_MAP),tt.__version=rt.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Xt(C,b,W,J,rt,tt){let Ct=r.convert(W.format,W.colorSpace),ut=r.convert(W.type),Pt=E(W.internalFormat,Ct,ut,W.colorSpace),Lt=i.get(b),st=i.get(W);if(st.__renderTarget=b,!Lt.__hasExternalTextures){let Ht=Math.max(1,b.width>>tt),Wt=Math.max(1,b.height>>tt);rt===n.TEXTURE_3D||rt===n.TEXTURE_2D_ARRAY?e.texImage3D(rt,tt,Pt,Ht,Wt,b.depth,0,Ct,ut,null):e.texImage2D(rt,tt,Pt,Ht,Wt,0,Ct,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),Nt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,rt,st.__webglTexture,0,vt(b)):(rt===n.TEXTURE_2D||rt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,rt,st.__webglTexture,tt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Mt(C,b,W){if(n.bindRenderbuffer(n.RENDERBUFFER,C),b.depthBuffer){let J=b.depthTexture,rt=J&&J.isDepthTexture?J.type:null,tt=v(b.stencilBuffer,rt),Ct=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=vt(b);Nt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,tt,b.width,b.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,tt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,tt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ct,n.RENDERBUFFER,C)}else{let J=b.textures;for(let rt=0;rt<J.length;rt++){let tt=J[rt],Ct=r.convert(tt.format,tt.colorSpace),ut=r.convert(tt.type),Pt=E(tt.internalFormat,Ct,ut,tt.colorSpace),Lt=vt(b);W&&Nt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt,Pt,b.width,b.height):Nt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt,Pt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Pt,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Qt(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=i.get(b.depthTexture);J.__renderTarget=b,(!J.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q(b.depthTexture,0);let rt=J.__webglTexture,tt=vt(b);if(b.depthTexture.format===or)Nt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,rt,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,rt,0);else if(b.depthTexture.format===dr)Nt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,rt,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function ie(C){let b=i.get(C),W=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let J=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),J){let rt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,J.removeEventListener("dispose",rt)};J.addEventListener("dispose",rt),b.__depthDisposeCallback=rt}b.__boundDepthTexture=J}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Qt(b.__webglFramebuffer,C)}else if(W){b.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[J]),b.__webglDepthbuffer[J]===void 0)b.__webglDepthbuffer[J]=n.createRenderbuffer(),Mt(b.__webglDepthbuffer[J],C,!1);else{let rt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=b.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,rt,n.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Mt(b.__webglDepthbuffer,C,!1);else{let J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,rt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function te(C,b,W){let J=i.get(C);b!==void 0&&Xt(J.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&ie(C)}function de(C){let b=C.texture,W=i.get(C),J=i.get(b);C.addEventListener("dispose",I);let rt=C.textures,tt=C.isWebGLCubeRenderTarget===!0,Ct=rt.length>1;if(Ct||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=b.version,o.memory.textures++),tt){W.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[ut]=[];for(let Pt=0;Pt<b.mipmaps.length;Pt++)W.__webglFramebuffer[ut][Pt]=n.createFramebuffer()}else W.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let ut=0;ut<b.mipmaps.length;ut++)W.__webglFramebuffer[ut]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(Ct)for(let ut=0,Pt=rt.length;ut<Pt;ut++){let Lt=i.get(rt[ut]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&Nt(C)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ut=0;ut<rt.length;ut++){let Pt=rt[ut];W.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[ut]);let Lt=r.convert(Pt.format,Pt.colorSpace),st=r.convert(Pt.type),Ht=E(Pt.internalFormat,Lt,st,Pt.colorSpace,C.isXRRenderTarget===!0),Wt=vt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Wt,Ht,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,W.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),Mt(W.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(tt){e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),oe(n.TEXTURE_CUBE_MAP,b);for(let ut=0;ut<6;ut++)if(b.mipmaps&&b.mipmaps.length>0)for(let Pt=0;Pt<b.mipmaps.length;Pt++)Xt(W.__webglFramebuffer[ut][Pt],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Pt);else Xt(W.__webglFramebuffer[ut],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);x(b)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let ut=0,Pt=rt.length;ut<Pt;ut++){let Lt=rt[ut],st=i.get(Lt);e.bindTexture(n.TEXTURE_2D,st.__webglTexture),oe(n.TEXTURE_2D,Lt),Xt(W.__webglFramebuffer,C,Lt,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,0),x(Lt)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ut=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,J.__webglTexture),oe(ut,b),b.mipmaps&&b.mipmaps.length>0)for(let Pt=0;Pt<b.mipmaps.length;Pt++)Xt(W.__webglFramebuffer[Pt],C,b,n.COLOR_ATTACHMENT0,ut,Pt);else Xt(W.__webglFramebuffer,C,b,n.COLOR_ATTACHMENT0,ut,0);x(b)&&m(ut),e.unbindTexture()}C.depthBuffer&&ie(C)}function mt(C){let b=C.textures;for(let W=0,J=b.length;W<J;W++){let rt=b[W];if(x(rt)){let tt=T(C),Ct=i.get(rt).__webglTexture;e.bindTexture(tt,Ct),m(tt),e.unbindTexture()}}}let St=[],N=[];function Yt(C){if(C.samples>0){if(Nt(C)===!1){let b=C.textures,W=C.width,J=C.height,rt=n.COLOR_BUFFER_BIT,tt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ct=i.get(C),ut=b.length>1;if(ut)for(let Pt=0;Pt<b.length;Pt++)e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Pt=0;Pt<b.length;Pt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(rt|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(rt|=n.STENCIL_BUFFER_BIT)),ut){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ct.__webglColorRenderbuffer[Pt]);let Lt=i.get(b[Pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Lt,0)}n.blitFramebuffer(0,0,W,J,0,0,W,J,rt,n.NEAREST),c===!0&&(St.length=0,N.length=0,St.push(n.COLOR_ATTACHMENT0+Pt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(St.push(tt),N.push(tt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,St))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let Pt=0;Pt<b.length;Pt++){e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.RENDERBUFFER,Ct.__webglColorRenderbuffer[Pt]);let Lt=i.get(b[Pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.TEXTURE_2D,Lt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let b=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function vt(C){return Math.min(s.maxSamples,C.samples)}function Nt(C){let b=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function $(C){let b=o.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function pt(C,b){let W=C.colorSpace,J=C.format,rt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==_r&&W!==Yi&&(ve.getTransfer(W)===Le?(J!==ii||rt!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),b}function ht(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=j,this.setTexture2D=q,this.setTexture2DArray=Y,this.setTexture3D=xt,this.setTextureCube=Q,this.rebindTextures=te,this.setupRenderTarget=de,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=Xt,this.useMultisampledRTT=Nt}function C_(n,t){function e(i,s=Yi){let r,o=ve.getTransfer(s);if(i===Li)return n.UNSIGNED_BYTE;if(i===xh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===_h)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Cf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Af)return n.BYTE;if(i===Rf)return n.SHORT;if(i===to)return n.UNSIGNED_SHORT;if(i===gh)return n.INT;if(i===xs)return n.UNSIGNED_INT;if(i===Ci)return n.FLOAT;if(i===So)return n.HALF_FLOAT;if(i===Pf)return n.ALPHA;if(i===If)return n.RGB;if(i===ii)return n.RGBA;if(i===Lf)return n.LUMINANCE;if(i===Df)return n.LUMINANCE_ALPHA;if(i===or)return n.DEPTH_COMPONENT;if(i===dr)return n.DEPTH_STENCIL;if(i===Uf)return n.RED;if(i===yh)return n.RED_INTEGER;if(i===Nf)return n.RG;if(i===Mh)return n.RG_INTEGER;if(i===vh)return n.RGBA_INTEGER;if(i===ua||i===fa||i===da||i===pa)if(o===Le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===el||i===nl||i===il||i===sl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===el)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rl||i===ol||i===al)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===rl||i===ol)return o===Le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===al)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===cl||i===ll||i===hl||i===ul||i===fl||i===dl||i===pl||i===ml||i===gl||i===xl||i===_l||i===yl||i===Ml||i===vl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===cl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ll)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ul)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ml)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_l)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ml)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ma||i===El||i===bl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ma)return o===Le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===El)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Of||i===Sl||i===wl||i===Tl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ma)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Vl=class extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Zt=class extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},P_={type:"move"},Kr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let x=e.getJointPose(_,i),m=this._getHandJoint(l,_);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(P_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Zt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},I_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L_=`
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

}`,Gl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new _n,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Yn({vertexShader:I_,fragmentShader:L_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new At(new $i(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wl=class extends Di{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,_=new Gl,x=e.getContextAttributes(),m=null,T=null,E=[],v=[],V=new yt,L=null,I=new an;I.viewport=new De;let O=new an;O.viewport=new De;let A=[I,O],w=new Vl,F=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ft){let bt=E[ft];return bt===void 0&&(bt=new Kr,E[ft]=bt),bt.getTargetRaySpace()},this.getControllerGrip=function(ft){let bt=E[ft];return bt===void 0&&(bt=new Kr,E[ft]=bt),bt.getGripSpace()},this.getHand=function(ft){let bt=E[ft];return bt===void 0&&(bt=new Kr,E[ft]=bt),bt.getHandSpace()};function B(ft){let bt=v.indexOf(ft.inputSource);if(bt===-1)return;let Xt=E[bt];Xt!==void 0&&(Xt.update(ft.inputSource,ft.frame,l||o),Xt.dispatchEvent({type:ft.type,data:ft.inputSource}))}function G(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",q);for(let ft=0;ft<E.length;ft++){let bt=v[ft];bt!==null&&(v[ft]=null,E[ft].disconnect(bt))}F=null,j=null,_.reset(),t.setRenderTarget(m),d=null,f=null,u=null,s=null,T=null,Me.stop(),i.isPresenting=!1,t.setPixelRatio(L),t.setSize(V.width,V.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ft){r=ft,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ft){a=ft,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ft){l=ft},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ft){if(s=ft,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",G),s.addEventListener("inputsourceschange",q),x.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(V),s.renderState.layers===void 0){let bt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,bt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new Ui(d.framebufferWidth,d.framebufferHeight,{format:ii,type:Li,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let bt=null,Xt=null,Mt=null;x.depth&&(Mt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=x.stencil?dr:or,Xt=x.stencil?fr:xs);let Qt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Qt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),T=new Ui(f.textureWidth,f.textureHeight,{format:ii,type:Li,depthTexture:new Ta(f.textureWidth,f.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Me.setContext(s),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(ft){for(let bt=0;bt<ft.removed.length;bt++){let Xt=ft.removed[bt],Mt=v.indexOf(Xt);Mt>=0&&(v[Mt]=null,E[Mt].disconnect(Xt))}for(let bt=0;bt<ft.added.length;bt++){let Xt=ft.added[bt],Mt=v.indexOf(Xt);if(Mt===-1){for(let ie=0;ie<E.length;ie++)if(ie>=v.length){v.push(Xt),Mt=ie;break}else if(v[ie]===null){v[ie]=Xt,Mt=ie;break}if(Mt===-1)break}let Qt=E[Mt];Qt&&Qt.connect(Xt)}}let Y=new U,xt=new U;function Q(ft,bt,Xt){Y.setFromMatrixPosition(bt.matrixWorld),xt.setFromMatrixPosition(Xt.matrixWorld);let Mt=Y.distanceTo(xt),Qt=bt.projectionMatrix.elements,ie=Xt.projectionMatrix.elements,te=Qt[14]/(Qt[10]-1),de=Qt[14]/(Qt[10]+1),mt=(Qt[9]+1)/Qt[5],St=(Qt[9]-1)/Qt[5],N=(Qt[8]-1)/Qt[0],Yt=(ie[8]+1)/ie[0],vt=te*N,Nt=te*Yt,$=Mt/(-N+Yt),pt=$*-N;if(bt.matrixWorld.decompose(ft.position,ft.quaternion,ft.scale),ft.translateX(pt),ft.translateZ($),ft.matrixWorld.compose(ft.position,ft.quaternion,ft.scale),ft.matrixWorldInverse.copy(ft.matrixWorld).invert(),Qt[10]===-1)ft.projectionMatrix.copy(bt.projectionMatrix),ft.projectionMatrixInverse.copy(bt.projectionMatrixInverse);else{let ht=te+$,C=de+$,b=vt-pt,W=Nt+(Mt-pt),J=mt*de/C*ht,rt=St*de/C*ht;ft.projectionMatrix.makePerspective(b,W,J,rt,ht,C),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert()}}function Et(ft,bt){bt===null?ft.matrixWorld.copy(ft.matrix):ft.matrixWorld.multiplyMatrices(bt.matrixWorld,ft.matrix),ft.matrixWorldInverse.copy(ft.matrixWorld).invert()}this.updateCamera=function(ft){if(s===null)return;let bt=ft.near,Xt=ft.far;_.texture!==null&&(_.depthNear>0&&(bt=_.depthNear),_.depthFar>0&&(Xt=_.depthFar)),w.near=O.near=I.near=bt,w.far=O.far=I.far=Xt,(F!==w.near||j!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),F=w.near,j=w.far),I.layers.mask=ft.layers.mask|2,O.layers.mask=ft.layers.mask|4,w.layers.mask=I.layers.mask|O.layers.mask;let Mt=ft.parent,Qt=w.cameras;Et(w,Mt);for(let ie=0;ie<Qt.length;ie++)Et(Qt[ie],Mt);Qt.length===2?Q(w,I,O):w.projectionMatrix.copy(I.projectionMatrix),gt(ft,w,Mt)};function gt(ft,bt,Xt){Xt===null?ft.matrix.copy(bt.matrixWorld):(ft.matrix.copy(Xt.matrixWorld),ft.matrix.invert(),ft.matrix.multiply(bt.matrixWorld)),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.updateMatrixWorld(!0),ft.projectionMatrix.copy(bt.projectionMatrix),ft.projectionMatrixInverse.copy(bt.projectionMatrixInverse),ft.isPerspectiveCamera&&(ft.fov=eo*2*Math.atan(1/ft.projectionMatrix.elements[5]),ft.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(ft){c=ft,f!==null&&(f.fixedFoveation=ft),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ft)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(w)};let zt=null;function oe(ft,bt){if(h=bt.getViewerPose(l||o),g=bt,h!==null){let Xt=h.views;d!==null&&(t.setRenderTargetFramebuffer(T,d.framebuffer),t.setRenderTarget(T));let Mt=!1;Xt.length!==w.cameras.length&&(w.cameras.length=0,Mt=!0);for(let ie=0;ie<Xt.length;ie++){let te=Xt[ie],de=null;if(d!==null)de=d.getViewport(te);else{let St=u.getViewSubImage(f,te);de=St.viewport,ie===0&&(t.setRenderTargetTextures(T,St.colorTexture,f.ignoreDepthValues?void 0:St.depthStencilTexture),t.setRenderTarget(T))}let mt=A[ie];mt===void 0&&(mt=new an,mt.layers.enable(ie),mt.viewport=new De,A[ie]=mt),mt.matrix.fromArray(te.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(te.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(de.x,de.y,de.width,de.height),ie===0&&(w.matrix.copy(mt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Mt===!0&&w.cameras.push(mt)}let Qt=s.enabledFeatures;if(Qt&&Qt.includes("depth-sensing")){let ie=u.getDepthInformation(Xt[0]);ie&&ie.isValid&&ie.texture&&_.init(t,ie,s.renderState)}}for(let Xt=0;Xt<E.length;Xt++){let Mt=v[Xt],Qt=E[Xt];Mt!==null&&Qt!==void 0&&Qt.update(Mt,bt,l||o)}zt&&zt(ft,bt),bt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:bt}),g=null}let Me=new Gf;Me.setAnimationLoop(oe),this.setAnimationLoop=function(ft){zt=ft},this.dispose=function(){}}},us=new gi,D_=new Fe;function U_(n,t){function e(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function i(x,m){m.color.getRGB(x.fogColor.value,Vf(n)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function s(x,m,T,E,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(x,m):m.isMeshToonMaterial?(r(x,m),u(x,m)):m.isMeshPhongMaterial?(r(x,m),h(x,m)):m.isMeshStandardMaterial?(r(x,m),f(x,m),m.isMeshPhysicalMaterial&&d(x,m,v)):m.isMeshMatcapMaterial?(r(x,m),g(x,m)):m.isMeshDepthMaterial?r(x,m):m.isMeshDistanceMaterial?(r(x,m),_(x,m)):m.isMeshNormalMaterial?r(x,m):m.isLineBasicMaterial?(o(x,m),m.isLineDashedMaterial&&a(x,m)):m.isPointsMaterial?c(x,m,T,E):m.isSpriteMaterial?l(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,e(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===xn&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,e(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===xn&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,e(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,e(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);let T=t.get(m),E=T.envMap,v=T.envMapRotation;E&&(x.envMap.value=E,us.copy(v),us.x*=-1,us.y*=-1,us.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),x.envMapRotation.value.setFromMatrix4(D_.makeRotationFromEuler(us)),x.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,x.aoMapTransform))}function o(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform))}function a(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function c(x,m,T,E){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*T,x.scale.value=E*.5,m.map&&(x.map.value=m.map,e(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function l(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function h(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function u(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function f(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function d(x,m,T){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===xn&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=T.texture,x.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,m){m.matcap&&(x.matcap.value=m.matcap)}function _(x,m){let T=t.get(m).light;x.referencePosition.value.setFromMatrixPosition(T.matrixWorld),x.nearDistance.value=T.shadow.camera.near,x.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function N_(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,E){let v=E.program;i.uniformBlockBinding(T,v)}function l(T,E){let v=s[T.id];v===void 0&&(g(T),v=h(T),s[T.id]=v,T.addEventListener("dispose",x));let V=E.program;i.updateUBOMapping(T,V);let L=t.render.frame;r[T.id]!==L&&(f(T),r[T.id]=L)}function h(T){let E=u();T.__bindingPointIndex=E;let v=n.createBuffer(),V=T.__size,L=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,V,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,v),v}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){let E=s[T.id],v=T.uniforms,V=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let L=0,I=v.length;L<I;L++){let O=Array.isArray(v[L])?v[L]:[v[L]];for(let A=0,w=O.length;A<w;A++){let F=O[A];if(d(F,L,A,V)===!0){let j=F.__offset,B=Array.isArray(F.value)?F.value:[F.value],G=0;for(let q=0;q<B.length;q++){let Y=B[q],xt=_(Y);typeof Y=="number"||typeof Y=="boolean"?(F.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,j+G,F.__data)):Y.isMatrix3?(F.__data[0]=Y.elements[0],F.__data[1]=Y.elements[1],F.__data[2]=Y.elements[2],F.__data[3]=0,F.__data[4]=Y.elements[3],F.__data[5]=Y.elements[4],F.__data[6]=Y.elements[5],F.__data[7]=0,F.__data[8]=Y.elements[6],F.__data[9]=Y.elements[7],F.__data[10]=Y.elements[8],F.__data[11]=0):(Y.toArray(F.__data,G),G+=xt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,j,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(T,E,v,V){let L=T.value,I=E+"_"+v;if(V[I]===void 0)return typeof L=="number"||typeof L=="boolean"?V[I]=L:V[I]=L.clone(),!0;{let O=V[I];if(typeof L=="number"||typeof L=="boolean"){if(O!==L)return V[I]=L,!0}else if(O.equals(L)===!1)return O.copy(L),!0}return!1}function g(T){let E=T.uniforms,v=0,V=16;for(let I=0,O=E.length;I<O;I++){let A=Array.isArray(E[I])?E[I]:[E[I]];for(let w=0,F=A.length;w<F;w++){let j=A[w],B=Array.isArray(j.value)?j.value:[j.value];for(let G=0,q=B.length;G<q;G++){let Y=B[G],xt=_(Y),Q=v%V,Et=Q%xt.boundary,gt=Q+Et;v+=Et,gt!==0&&V-gt<xt.storage&&(v+=V-gt),j.__data=new Float32Array(xt.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=v,v+=xt.storage}}}let L=v%V;return L>0&&(v+=V-L),T.__size=v,T.__cache={},this}function _(T){let E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function x(T){let E=T.target;E.removeEventListener("dispose",x);let v=o.indexOf(E.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(let T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}var ro=class{constructor(t={}){let{canvas:e=zp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),_=new Int32Array(4),x=null,m=null,T=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pe,this.toneMapping=Ki,this.toneMappingExposure=1;let v=this,V=!1,L=0,I=0,O=null,A=-1,w=null,F=new De,j=new De,B=null,G=new se(0),q=0,Y=e.width,xt=e.height,Q=1,Et=null,gt=null,zt=new De(0,0,Y,xt),oe=new De(0,0,Y,xt),Me=!1,ft=new so,bt=!1,Xt=!1,Mt=new Fe,Qt=new Fe,ie=new U,te=new De,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},mt=!1;function St(){return O===null?Q:1}let N=i;function Yt(R,Z){return e.getContext(R,Z)}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ph}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",Ot,!1),e.addEventListener("webglcontextcreationerror",Ut,!1),N===null){let Z="webgl2";if(N=Yt(Z,R),N===null)throw Yt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let vt,Nt,$,pt,ht,C,b,W,J,rt,tt,Ct,ut,Pt,Lt,st,Ht,Wt,wt,Gt,ye,ae,Se,X;function Dt(){vt=new $g(N),vt.init(),ae=new C_(N,vt),Nt=new Xg(N,vt,t,ae),$=new T_(N,vt),Nt.reverseDepthBuffer&&f&&$.buffers.depth.setReversed(!0),pt=new tx(N),ht=new d_,C=new R_(N,vt,$,ht,Nt,ae,pt),b=new qg(v),W=new Jg(v),J=new a0(N),Se=new Gg(N,J),rt=new jg(N,J,pt,Se),tt=new nx(N,rt,J,pt),wt=new ex(N,Nt,C),st=new Yg(ht),Ct=new f_(v,b,W,vt,Nt,Se,st),ut=new U_(v,ht),Pt=new m_,Lt=new v_(vt),Wt=new Vg(v,b,W,$,tt,d,c),Ht=new S_(v,tt,Nt),X=new N_(N,pt,Nt,$),Gt=new Wg(N,vt,pt),ye=new Qg(N,vt,pt),pt.programs=Ct.programs,v.capabilities=Nt,v.extensions=vt,v.properties=ht,v.renderLists=Pt,v.shadowMap=Ht,v.state=$,v.info=pt}Dt();let at=new Wl(v,N);this.xr=at,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let R=vt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=vt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(R){R!==void 0&&(Q=R,this.setSize(Y,xt,!1))},this.getSize=function(R){return R.set(Y,xt)},this.setSize=function(R,Z,et=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=R,xt=Z,e.width=Math.floor(R*Q),e.height=Math.floor(Z*Q),et===!0&&(e.style.width=R+"px",e.style.height=Z+"px"),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(Y*Q,xt*Q).floor()},this.setDrawingBufferSize=function(R,Z,et){Y=R,xt=Z,Q=et,e.width=Math.floor(R*et),e.height=Math.floor(Z*et),this.setViewport(0,0,R,Z)},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(zt)},this.setViewport=function(R,Z,et,nt){R.isVector4?zt.set(R.x,R.y,R.z,R.w):zt.set(R,Z,et,nt),$.viewport(F.copy(zt).multiplyScalar(Q).round())},this.getScissor=function(R){return R.copy(oe)},this.setScissor=function(R,Z,et,nt){R.isVector4?oe.set(R.x,R.y,R.z,R.w):oe.set(R,Z,et,nt),$.scissor(j.copy(oe).multiplyScalar(Q).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(R){$.setScissorTest(Me=R)},this.setOpaqueSort=function(R){Et=R},this.setTransparentSort=function(R){gt=R},this.getClearColor=function(R){return R.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor.apply(Wt,arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha.apply(Wt,arguments)},this.clear=function(R=!0,Z=!0,et=!0){let nt=0;if(R){let K=!1;if(O!==null){let Rt=O.texture.format;K=Rt===vh||Rt===Mh||Rt===yh}if(K){let Rt=O.texture.type,kt=Rt===Li||Rt===xs||Rt===to||Rt===fr||Rt===xh||Rt===_h,jt=Wt.getClearColor(),Jt=Wt.getClearAlpha(),ce=jt.r,fe=jt.g,qt=jt.b;kt?(g[0]=ce,g[1]=fe,g[2]=qt,g[3]=Jt,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=ce,_[1]=fe,_[2]=qt,_[3]=Jt,N.clearBufferiv(N.COLOR,0,_))}else nt|=N.COLOR_BUFFER_BIT}Z&&(nt|=N.DEPTH_BUFFER_BIT),et&&(nt|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",Ot,!1),e.removeEventListener("webglcontextcreationerror",Ut,!1),Pt.dispose(),Lt.dispose(),ht.dispose(),b.dispose(),W.dispose(),tt.dispose(),Se.dispose(),X.dispose(),Ct.dispose(),at.dispose(),at.removeEventListener("sessionstart",En),at.removeEventListener("sessionend",Tr),li.stop()};function _t(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Ot(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;let R=pt.autoReset,Z=Ht.enabled,et=Ht.autoUpdate,nt=Ht.needsUpdate,K=Ht.type;Dt(),pt.autoReset=R,Ht.enabled=Z,Ht.autoUpdate=et,Ht.needsUpdate=nt,Ht.type=K}function Ut(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function he(R){let Z=R.target;Z.removeEventListener("dispose",he),we(Z)}function we(R){sn(R),ht.remove(R)}function sn(R){let Z=ht.get(R).programs;Z!==void 0&&(Z.forEach(function(et){Ct.releaseProgram(et)}),R.isShaderMaterial&&Ct.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,et,nt,K,Rt){Z===null&&(Z=de);let kt=K.isMesh&&K.matrixWorld.determinant()<0,jt=fi(R,Z,et,nt,K);$.setMaterial(nt,kt);let Jt=et.index,ce=1;if(nt.wireframe===!0){if(Jt=rt.getWireframeAttribute(et),Jt===void 0)return;ce=2}let fe=et.drawRange,qt=et.attributes.position,ge=fe.start*ce,Ee=(fe.start+fe.count)*ce;Rt!==null&&(ge=Math.max(ge,Rt.start*ce),Ee=Math.min(Ee,(Rt.start+Rt.count)*ce)),Jt!==null?(ge=Math.max(ge,0),Ee=Math.min(Ee,Jt.count)):qt!=null&&(ge=Math.max(ge,0),Ee=Math.min(Ee,qt.count));let Re=Ee-ge;if(Re<0||Re===1/0)return;Se.setup(K,nt,jt,et,Jt);let dn,re=Gt;if(Jt!==null&&(dn=J.get(Jt),re=ye,re.setIndex(dn)),K.isMesh)nt.wireframe===!0?($.setLineWidth(nt.wireframeLinewidth*St()),re.setMode(N.LINES)):re.setMode(N.TRIANGLES);else if(K.isLine){let $t=nt.linewidth;$t===void 0&&($t=1),$.setLineWidth($t*St()),K.isLineSegments?re.setMode(N.LINES):K.isLineLoop?re.setMode(N.LINE_LOOP):re.setMode(N.LINE_STRIP)}else K.isPoints?re.setMode(N.POINTS):K.isSprite&&re.setMode(N.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)re.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))re.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let $t=K._multiDrawStarts,$n=K._multiDrawCounts,be=K._multiDrawCount,Cn=Jt?J.get(Jt).bytesPerElement:1,Un=ht.get(nt).currentProgram.getUniforms();for(let Ze=0;Ze<be;Ze++)Un.setValue(N,"_gl_DrawID",Ze),re.render($t[Ze]/Cn,$n[Ze])}else if(K.isInstancedMesh)re.renderInstances(ge,Re,K.count);else if(et.isInstancedBufferGeometry){let $t=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,$n=Math.min(et.instanceCount,$t);re.renderInstances(ge,Re,$n)}else re.render(ge,Re)};function Te(R,Z,et){R.transparent===!0&&R.side===gn&&R.forceSinglePass===!1?(R.side=xn,R.needsUpdate=!0,vi(R,Z,et),R.side=Ji,R.needsUpdate=!0,vi(R,Z,et),R.side=gn):vi(R,Z,et)}this.compile=function(R,Z,et=null){et===null&&(et=R),m=Lt.get(et),m.init(Z),E.push(m),et.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),R!==et&&R.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights();let nt=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Rt=K.material;if(Rt)if(Array.isArray(Rt))for(let kt=0;kt<Rt.length;kt++){let jt=Rt[kt];Te(jt,et,K),nt.add(jt)}else Te(Rt,et,K),nt.add(Rt)}),E.pop(),m=null,nt},this.compileAsync=function(R,Z,et=null){let nt=this.compile(R,Z,et);return new Promise(K=>{function Rt(){if(nt.forEach(function(kt){ht.get(kt).currentProgram.isReady()&&nt.delete(kt)}),nt.size===0){K(R);return}setTimeout(Rt,10)}vt.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let fn=null;function Hn(R){fn&&fn(R)}function En(){li.stop()}function Tr(){li.start()}let li=new Gf;li.setAnimationLoop(Hn),typeof self!="undefined"&&li.setContext(self),this.setAnimationLoop=function(R){fn=R,at.setAnimationLoop(R),R===null?li.stop():li.start()},at.addEventListener("sessionstart",En),at.addEventListener("sessionend",Tr),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(Z),Z=at.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,Z,O),m=Lt.get(R,E.length),m.init(Z),E.push(m),Qt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),ft.setFromProjectionMatrix(Qt),Xt=this.localClippingEnabled,bt=st.init(this.clippingPlanes,Xt),x=Pt.get(R,T.length),x.init(),T.push(x),at.enabled===!0&&at.isPresenting===!0){let Rt=v.xr.getDepthSensingMesh();Rt!==null&&Us(Rt,Z,-1/0,v.sortObjects)}Us(R,Z,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(Et,gt),mt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,mt&&Wt.addToRenderList(x,R),this.info.render.frame++,bt===!0&&st.beginShadows();let et=m.state.shadowsArray;Ht.render(et,R,Z),bt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let nt=x.opaque,K=x.transmissive;if(m.setupLights(),Z.isArrayCamera){let Rt=Z.cameras;if(K.length>0)for(let kt=0,jt=Rt.length;kt<jt;kt++){let Jt=Rt[kt];hi(nt,K,R,Jt)}mt&&Wt.render(R);for(let kt=0,jt=Rt.length;kt<jt;kt++){let Jt=Rt[kt];Ns(x,R,Jt,Jt.viewport)}}else K.length>0&&hi(nt,K,R,Z),mt&&Wt.render(R),Ns(x,R,Z);O!==null&&(C.updateMultisampleRenderTarget(O),C.updateRenderTargetMipmap(O)),R.isScene===!0&&R.onAfterRender(v,R,Z),Se.resetDefaultState(),A=-1,w=null,E.pop(),E.length>0?(m=E[E.length-1],bt===!0&&st.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,T.pop(),T.length>0?x=T[T.length-1]:x=null};function Us(R,Z,et,nt){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)et=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ft.intersectsSprite(R)){nt&&te.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Qt);let kt=tt.update(R),jt=R.material;jt.visible&&x.push(R,kt,jt,et,te.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ft.intersectsObject(R))){let kt=tt.update(R),jt=R.material;if(nt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),te.copy(R.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),te.copy(kt.boundingSphere.center)),te.applyMatrix4(R.matrixWorld).applyMatrix4(Qt)),Array.isArray(jt)){let Jt=kt.groups;for(let ce=0,fe=Jt.length;ce<fe;ce++){let qt=Jt[ce],ge=jt[qt.materialIndex];ge&&ge.visible&&x.push(R,kt,ge,et,te.z,qt)}}else jt.visible&&x.push(R,kt,jt,et,te.z,null)}}let Rt=R.children;for(let kt=0,jt=Rt.length;kt<jt;kt++)Us(Rt[kt],Z,et,nt)}function Ns(R,Z,et,nt){let K=R.opaque,Rt=R.transmissive,kt=R.transparent;m.setupLightsView(et),bt===!0&&st.setGlobalState(v.clippingPlanes,et),nt&&$.viewport(F.copy(nt)),K.length>0&&ui(K,Z,et),Rt.length>0&&ui(Rt,Z,et),kt.length>0&&ui(kt,Z,et),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function hi(R,Z,et,nt){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[nt.id]===void 0&&(m.state.transmissionRenderTarget[nt.id]=new Ui(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float")?So:Li,minFilter:gs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ve.workingColorSpace}));let Rt=m.state.transmissionRenderTarget[nt.id],kt=nt.viewport||F;Rt.setSize(kt.z,kt.w);let jt=v.getRenderTarget();v.setRenderTarget(Rt),v.getClearColor(G),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),mt&&Wt.render(et);let Jt=v.toneMapping;v.toneMapping=Ki;let ce=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),m.setupLightsView(nt),bt===!0&&st.setGlobalState(v.clippingPlanes,nt),ui(R,et,nt),C.updateMultisampleRenderTarget(Rt),C.updateRenderTargetMipmap(Rt),vt.has("WEBGL_multisampled_render_to_texture")===!1){let fe=!1;for(let qt=0,ge=Z.length;qt<ge;qt++){let Ee=Z[qt],Re=Ee.object,dn=Ee.geometry,re=Ee.material,$t=Ee.group;if(re.side===gn&&Re.layers.test(nt.layers)){let $n=re.side;re.side=xn,re.needsUpdate=!0,is(Re,et,nt,dn,re,$t),re.side=$n,re.needsUpdate=!0,fe=!0}}fe===!0&&(C.updateMultisampleRenderTarget(Rt),C.updateRenderTargetMipmap(Rt))}v.setRenderTarget(jt),v.setClearColor(G,q),ce!==void 0&&(nt.viewport=ce),v.toneMapping=Jt}function ui(R,Z,et){let nt=Z.isScene===!0?Z.overrideMaterial:null;for(let K=0,Rt=R.length;K<Rt;K++){let kt=R[K],jt=kt.object,Jt=kt.geometry,ce=nt===null?kt.material:nt,fe=kt.group;jt.layers.test(et.layers)&&is(jt,Z,et,Jt,ce,fe)}}function is(R,Z,et,nt,K,Rt){R.onBeforeRender(v,Z,et,nt,K,Rt),R.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(v,Z,et,nt,R,Rt),K.transparent===!0&&K.side===gn&&K.forceSinglePass===!1?(K.side=xn,K.needsUpdate=!0,v.renderBufferDirect(et,Z,nt,K,R,Rt),K.side=Ji,K.needsUpdate=!0,v.renderBufferDirect(et,Z,nt,K,R,Rt),K.side=gn):v.renderBufferDirect(et,Z,nt,K,R,Rt),R.onAfterRender(v,Z,et,nt,K,Rt)}function vi(R,Z,et){Z.isScene!==!0&&(Z=de);let nt=ht.get(R),K=m.state.lights,Rt=m.state.shadowsArray,kt=K.state.version,jt=Ct.getParameters(R,K.state,Rt,Z,et),Jt=Ct.getProgramCacheKey(jt),ce=nt.programs;nt.environment=R.isMeshStandardMaterial?Z.environment:null,nt.fog=Z.fog,nt.envMap=(R.isMeshStandardMaterial?W:b).get(R.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,ce===void 0&&(R.addEventListener("dispose",he),ce=new Map,nt.programs=ce);let fe=ce.get(Jt);if(fe!==void 0){if(nt.currentProgram===fe&&nt.lightsStateVersion===kt)return Os(R,jt),fe}else jt.uniforms=Ct.getUniforms(R),R.onBeforeCompile(jt,v),fe=Ct.acquireProgram(jt,Jt),ce.set(Jt,fe),nt.uniforms=jt.uniforms;let qt=nt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qt.clippingPlanes=st.uniform),Os(R,jt),nt.needsLights=Po(R),nt.lightsStateVersion=kt,nt.needsLights&&(qt.ambientLightColor.value=K.state.ambient,qt.lightProbe.value=K.state.probe,qt.directionalLights.value=K.state.directional,qt.directionalLightShadows.value=K.state.directionalShadow,qt.spotLights.value=K.state.spot,qt.spotLightShadows.value=K.state.spotShadow,qt.rectAreaLights.value=K.state.rectArea,qt.ltc_1.value=K.state.rectAreaLTC1,qt.ltc_2.value=K.state.rectAreaLTC2,qt.pointLights.value=K.state.point,qt.pointLightShadows.value=K.state.pointShadow,qt.hemisphereLights.value=K.state.hemi,qt.directionalShadowMap.value=K.state.directionalShadowMap,qt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,qt.spotShadowMap.value=K.state.spotShadowMap,qt.spotLightMatrix.value=K.state.spotLightMatrix,qt.spotLightMap.value=K.state.spotLightMap,qt.pointShadowMap.value=K.state.pointShadowMap,qt.pointShadowMatrix.value=K.state.pointShadowMatrix),nt.currentProgram=fe,nt.uniformsList=null,fe}function bn(R){if(R.uniformsList===null){let Z=R.currentProgram.getUniforms();R.uniformsList=cr.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function Os(R,Z){let et=ht.get(R);et.outputColorSpace=Z.outputColorSpace,et.batching=Z.batching,et.batchingColor=Z.batchingColor,et.instancing=Z.instancing,et.instancingColor=Z.instancingColor,et.instancingMorph=Z.instancingMorph,et.skinning=Z.skinning,et.morphTargets=Z.morphTargets,et.morphNormals=Z.morphNormals,et.morphColors=Z.morphColors,et.morphTargetsCount=Z.morphTargetsCount,et.numClippingPlanes=Z.numClippingPlanes,et.numIntersection=Z.numClipIntersection,et.vertexAlphas=Z.vertexAlphas,et.vertexTangents=Z.vertexTangents,et.toneMapping=Z.toneMapping}function fi(R,Z,et,nt,K){Z.isScene!==!0&&(Z=de),C.resetTextureUnits();let Rt=Z.fog,kt=nt.isMeshStandardMaterial?Z.environment:null,jt=O===null?v.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:_r,Jt=(nt.isMeshStandardMaterial?W:b).get(nt.envMap||kt),ce=nt.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,fe=!!et.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),qt=!!et.morphAttributes.position,ge=!!et.morphAttributes.normal,Ee=!!et.morphAttributes.color,Re=Ki;nt.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Re=v.toneMapping);let dn=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,re=dn!==void 0?dn.length:0,$t=ht.get(nt),$n=m.state.lights;if(bt===!0&&(Xt===!0||R!==w)){let Pn=R===w&&nt.id===A;st.setState(nt,R,Pn)}let be=!1;nt.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==$n.state.version||$t.outputColorSpace!==jt||K.isBatchedMesh&&$t.batching===!1||!K.isBatchedMesh&&$t.batching===!0||K.isBatchedMesh&&$t.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&$t.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&$t.instancing===!1||!K.isInstancedMesh&&$t.instancing===!0||K.isSkinnedMesh&&$t.skinning===!1||!K.isSkinnedMesh&&$t.skinning===!0||K.isInstancedMesh&&$t.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&$t.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&$t.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&$t.instancingMorph===!1&&K.morphTexture!==null||$t.envMap!==Jt||nt.fog===!0&&$t.fog!==Rt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==st.numPlanes||$t.numIntersection!==st.numIntersection)||$t.vertexAlphas!==ce||$t.vertexTangents!==fe||$t.morphTargets!==qt||$t.morphNormals!==ge||$t.morphColors!==Ee||$t.toneMapping!==Re||$t.morphTargetsCount!==re)&&(be=!0):(be=!0,$t.__version=nt.version);let Cn=$t.currentProgram;be===!0&&(Cn=vi(nt,Z,K));let Un=!1,Ze=!1,zi=!1,Ae=Cn.getUniforms(),Ke=$t.uniforms;if($.useProgram(Cn.program)&&(Un=!0,Ze=!0,zi=!0),nt.id!==A&&(A=nt.id,Ze=!0),Un||w!==R){$.buffers.depth.getReversed()?(Mt.copy(R.projectionMatrix),kp(Mt),Vp(Mt),Ae.setValue(N,"projectionMatrix",Mt)):Ae.setValue(N,"projectionMatrix",R.projectionMatrix),Ae.setValue(N,"viewMatrix",R.matrixWorldInverse);let kn=Ae.map.cameraPosition;kn!==void 0&&kn.setValue(N,ie.setFromMatrixPosition(R.matrixWorld)),Nt.logarithmicDepthBuffer&&Ae.setValue(N,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Ae.setValue(N,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,Ze=!0,zi=!0)}if(K.isSkinnedMesh){Ae.setOptional(N,K,"bindMatrix"),Ae.setOptional(N,K,"bindMatrixInverse");let Pn=K.skeleton;Pn&&(Pn.boneTexture===null&&Pn.computeBoneTexture(),Ae.setValue(N,"boneTexture",Pn.boneTexture,C))}K.isBatchedMesh&&(Ae.setOptional(N,K,"batchingTexture"),Ae.setValue(N,"batchingTexture",K._matricesTexture,C),Ae.setOptional(N,K,"batchingIdTexture"),Ae.setValue(N,"batchingIdTexture",K._indirectTexture,C),Ae.setOptional(N,K,"batchingColorTexture"),K._colorsTexture!==null&&Ae.setValue(N,"batchingColorTexture",K._colorsTexture,C));let rs=et.morphAttributes;if((rs.position!==void 0||rs.normal!==void 0||rs.color!==void 0)&&wt.update(K,et,Cn),(Ze||$t.receiveShadow!==K.receiveShadow)&&($t.receiveShadow=K.receiveShadow,Ae.setValue(N,"receiveShadow",K.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(Ke.envMap.value=Jt,Ke.flipEnvMap.value=Jt.isCubeTexture&&Jt.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&Z.environment!==null&&(Ke.envMapIntensity.value=Z.environmentIntensity),Ze&&(Ae.setValue(N,"toneMappingExposure",v.toneMappingExposure),$t.needsLights&&ss(Ke,zi),Rt&&nt.fog===!0&&ut.refreshFogUniforms(Ke,Rt),ut.refreshMaterialUniforms(Ke,nt,Q,xt,m.state.transmissionRenderTarget[R.id]),cr.upload(N,bn($t),Ke,C)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(cr.upload(N,bn($t),Ke,C),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Ae.setValue(N,"center",K.center),Ae.setValue(N,"modelViewMatrix",K.modelViewMatrix),Ae.setValue(N,"normalMatrix",K.normalMatrix),Ae.setValue(N,"modelMatrix",K.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){let Pn=nt.uniformsGroups;for(let kn=0,Vn=Pn.length;kn<Vn;kn++){let Io=Pn[kn];X.update(Io,Cn),X.bind(Io,Cn)}}return Cn}function ss(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function Po(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(R,Z,et){ht.get(R.texture).__webglTexture=Z,ht.get(R.depthTexture).__webglTexture=et;let nt=ht.get(R);nt.__hasExternalTextures=!0,nt.__autoAllocateDepthBuffer=et===void 0,nt.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,Z){let et=ht.get(R);et.__webglFramebuffer=Z,et.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(R,Z=0,et=0){O=R,L=Z,I=et;let nt=!0,K=null,Rt=!1,kt=!1;if(R){let Jt=ht.get(R);if(Jt.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(N.FRAMEBUFFER,null),nt=!1;else if(Jt.__webglFramebuffer===void 0)C.setupRenderTarget(R);else if(Jt.__hasExternalTextures)C.rebindTextures(R,ht.get(R.texture).__webglTexture,ht.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let qt=R.depthTexture;if(Jt.__boundDepthTexture!==qt){if(qt!==null&&ht.has(qt)&&(R.width!==qt.image.width||R.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(R)}}let ce=R.texture;(ce.isData3DTexture||ce.isDataArrayTexture||ce.isCompressedArrayTexture)&&(kt=!0);let fe=ht.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(fe[Z])?K=fe[Z][et]:K=fe[Z],Rt=!0):R.samples>0&&C.useMultisampledRTT(R)===!1?K=ht.get(R).__webglMultisampledFramebuffer:Array.isArray(fe)?K=fe[et]:K=fe,F.copy(R.viewport),j.copy(R.scissor),B=R.scissorTest}else F.copy(zt).multiplyScalar(Q).floor(),j.copy(oe).multiplyScalar(Q).floor(),B=Me;if($.bindFramebuffer(N.FRAMEBUFFER,K)&&nt&&$.drawBuffers(R,K),$.viewport(F),$.scissor(j),$.setScissorTest(B),Rt){let Jt=ht.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Jt.__webglTexture,et)}else if(kt){let Jt=ht.get(R.texture),ce=Z||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Jt.__webglTexture,et||0,ce)}A=-1},this.readRenderTargetPixels=function(R,Z,et,nt,K,Rt,kt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let jt=ht.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&kt!==void 0&&(jt=jt[kt]),jt){$.bindFramebuffer(N.FRAMEBUFFER,jt);try{let Jt=R.texture,ce=Jt.format,fe=Jt.type;if(!Nt.textureFormatReadable(ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Nt.textureTypeReadable(fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-nt&&et>=0&&et<=R.height-K&&N.readPixels(Z,et,nt,K,ae.convert(ce),ae.convert(fe),Rt)}finally{let Jt=O!==null?ht.get(O).__webglFramebuffer:null;$.bindFramebuffer(N.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(R,Z,et,nt,K,Rt,kt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let jt=ht.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&kt!==void 0&&(jt=jt[kt]),jt){let Jt=R.texture,ce=Jt.format,fe=Jt.type;if(!Nt.textureFormatReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Nt.textureTypeReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=R.width-nt&&et>=0&&et<=R.height-K){$.bindFramebuffer(N.FRAMEBUFFER,jt);let qt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,qt),N.bufferData(N.PIXEL_PACK_BUFFER,Rt.byteLength,N.STREAM_READ),N.readPixels(Z,et,nt,K,ae.convert(ce),ae.convert(fe),0);let ge=O!==null?ht.get(O).__webglFramebuffer:null;$.bindFramebuffer(N.FRAMEBUFFER,ge);let Ee=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Hp(N,Ee,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,qt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Rt),N.deleteBuffer(qt),N.deleteSync(Ee),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,Z=null,et=0){R.isTexture!==!0&&(Xr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,R=arguments[1]);let nt=Math.pow(2,-et),K=Math.floor(R.image.width*nt),Rt=Math.floor(R.image.height*nt),kt=Z!==null?Z.x:0,jt=Z!==null?Z.y:0;C.setTexture2D(R,0),N.copyTexSubImage2D(N.TEXTURE_2D,et,0,0,kt,jt,K,Rt),$.unbindTexture()},this.copyTextureToTexture=function(R,Z,et=null,nt=null,K=0){R.isTexture!==!0&&(Xr("WebGLRenderer: copyTextureToTexture function signature has changed."),nt=arguments[0]||null,R=arguments[1],Z=arguments[2],K=arguments[3]||0,et=null);let Rt,kt,jt,Jt,ce,fe,qt,ge,Ee,Re=R.isCompressedTexture?R.mipmaps[K]:R.image;et!==null?(Rt=et.max.x-et.min.x,kt=et.max.y-et.min.y,jt=et.isBox3?et.max.z-et.min.z:1,Jt=et.min.x,ce=et.min.y,fe=et.isBox3?et.min.z:0):(Rt=Re.width,kt=Re.height,jt=Re.depth||1,Jt=0,ce=0,fe=0),nt!==null?(qt=nt.x,ge=nt.y,Ee=nt.z):(qt=0,ge=0,Ee=0);let dn=ae.convert(Z.format),re=ae.convert(Z.type),$t;Z.isData3DTexture?(C.setTexture3D(Z,0),$t=N.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(C.setTexture2DArray(Z,0),$t=N.TEXTURE_2D_ARRAY):(C.setTexture2D(Z,0),$t=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,Z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,Z.unpackAlignment);let $n=N.getParameter(N.UNPACK_ROW_LENGTH),be=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Cn=N.getParameter(N.UNPACK_SKIP_PIXELS),Un=N.getParameter(N.UNPACK_SKIP_ROWS),Ze=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Re.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Re.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Jt),N.pixelStorei(N.UNPACK_SKIP_ROWS,ce),N.pixelStorei(N.UNPACK_SKIP_IMAGES,fe);let zi=R.isDataArrayTexture||R.isData3DTexture,Ae=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let Ke=ht.get(R),rs=ht.get(Z),Pn=ht.get(Ke.__renderTarget),kn=ht.get(rs.__renderTarget);$.bindFramebuffer(N.READ_FRAMEBUFFER,Pn.__webglFramebuffer),$.bindFramebuffer(N.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let Vn=0;Vn<jt;Vn++)zi&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ht.get(R).__webglTexture,K,fe+Vn),R.isDepthTexture?(Ae&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ht.get(Z).__webglTexture,K,Ee+Vn),N.blitFramebuffer(Jt,ce,Rt,kt,qt,ge,Rt,kt,N.DEPTH_BUFFER_BIT,N.NEAREST)):Ae?N.copyTexSubImage3D($t,K,qt,ge,Ee+Vn,Jt,ce,Rt,kt):N.copyTexSubImage2D($t,K,qt,ge,Ee+Vn,Jt,ce,Rt,kt);$.bindFramebuffer(N.READ_FRAMEBUFFER,null),$.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ae?R.isDataTexture||R.isData3DTexture?N.texSubImage3D($t,K,qt,ge,Ee,Rt,kt,jt,dn,re,Re.data):Z.isCompressedArrayTexture?N.compressedTexSubImage3D($t,K,qt,ge,Ee,Rt,kt,jt,dn,Re.data):N.texSubImage3D($t,K,qt,ge,Ee,Rt,kt,jt,dn,re,Re):R.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,K,qt,ge,Rt,kt,dn,re,Re.data):R.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,K,qt,ge,Re.width,Re.height,dn,Re.data):N.texSubImage2D(N.TEXTURE_2D,K,qt,ge,Rt,kt,dn,re,Re);N.pixelStorei(N.UNPACK_ROW_LENGTH,$n),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,be),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Cn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Un),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ze),K===0&&Z.generateMipmaps&&N.generateMipmap($t),$.unbindTexture()},this.copyTextureToTexture3D=function(R,Z,et=null,nt=null,K=0){return R.isTexture!==!0&&(Xr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,nt=arguments[1]||null,R=arguments[2],Z=arguments[3],K=arguments[4]||0),Xr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Z,et,nt,K)},this.initRenderTarget=function(R){ht.get(R).__webglFramebuffer===void 0&&C.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?C.setTextureCube(R,0):R.isData3DTexture?C.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?C.setTexture2DArray(R,0):C.setTexture2D(R,0),$.unbindTexture()},this.resetState=function(){L=0,I=0,O=null,$.reset(),Se.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ve._getDrawingBufferColorSpace(t),e.unpackColorSpace=ve._getUnpackColorSpace()}};var Aa=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new se(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},oo=class extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ra=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Rl,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Sn=new U,ao=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Sn.fromBufferAttribute(this,e),Sn.applyMatrix4(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Sn.fromBufferAttribute(this,e),Sn.applyNormalMatrix(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Sn.fromBufferAttribute(this,e),Sn.transformDirection(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ni(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ce(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ni(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ni(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ni(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ni(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array),s=Ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array),s=Ce(s,this.array),r=Ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new un(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Oi=class extends Ni{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Qs,kr=new U,tr=new U,er=new U,nr=new yt,Vr=new yt,Zf=new Fe,na=new U,Gr=new U,ia=new U,hf=new yt,Fc=new yt,uf=new yt,ji=class extends Ve{constructor(t=new Oi){if(super(),this.isSprite=!0,this.type="Sprite",Qs===void 0){Qs=new Oe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ra(e,5);Qs.setIndex([0,1,2,0,2,3]),Qs.setAttribute("position",new ao(i,3,0,!1)),Qs.setAttribute("uv",new ao(i,2,3,!1))}this.geometry=Qs,this.material=t,this.center=new yt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),tr.setFromMatrixScale(this.matrixWorld),Zf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),er.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&tr.multiplyScalar(-er.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;sa(na.set(-.5,-.5,0),er,o,tr,s,r),sa(Gr.set(.5,-.5,0),er,o,tr,s,r),sa(ia.set(.5,.5,0),er,o,tr,s,r),hf.set(0,0),Fc.set(1,0),uf.set(1,1);let a=t.ray.intersectTriangle(na,Gr,ia,!1,kr);if(a===null&&(sa(Gr.set(-.5,.5,0),er,o,tr,s,r),Fc.set(0,1),a=t.ray.intersectTriangle(na,ia,Gr,!1,kr),a===null))return;let c=t.ray.origin.distanceTo(kr);c<t.near||c>t.far||e.push({distance:c,point:kr.clone(),uv:qi.getInterpolation(kr,na,Gr,ia,hf,Fc,uf,new yt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function sa(n,t,e,i,s,r){nr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Vr.x=r*nr.x-s*nr.y,Vr.y=s*nr.x+r*nr.y):Vr.copy(nr),n.copy(t),n.x+=Vr.x,n.y+=Vr.y,n.applyMatrix4(Zf)}var Qi=class extends Ni{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ff=new Fe,Xl=new ys,ra=new pr,oa=new U,Ms=class extends Ve{constructor(t=new Oe,e=new Qi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ra.copy(i.boundingSphere),ra.applyMatrix4(s),ra.radius+=r,t.ray.intersectsSphere(ra)===!1)return;ff.copy(s).invert(),Xl.copy(t.ray).applyMatrix4(ff);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,_=d;g<_;g++){let x=l.getX(g);oa.fromBufferAttribute(u,x),df(oa,x,c,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++)oa.fromBufferAttribute(u,g),df(oa,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function df(n,t,e,i,s,r,o){let a=Xl.distanceSqToPoint(n);if(a<e){let c=new U;Xl.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var cn=class extends _n{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},qn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new yt:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new U,s=[],r=[],o=[],a=new U,c=new Fe;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(on(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(on(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},co=class extends qn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new yt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Yl=class extends co{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Sh(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var aa=new U,Bc=new Sh,zc=new Sh,Hc=new Sh,lo=class extends qn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new U){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(aa.subVectors(s[0],s[1]).add(s[0]),l=aa);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(aa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=aa),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),x<1e-4&&(x=_),Bc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,x),zc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,x),Hc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,x)}else this.curveType==="catmullrom"&&(Bc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),zc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Hc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return i.set(Bc.calc(c),zc.calc(c),Hc.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function pf(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function O_(n,t){let e=1-n;return e*e*t}function F_(n,t){return 2*(1-n)*n*t}function B_(n,t){return n*n*t}function Jr(n,t,e,i){return O_(n,t)+F_(n,e)+B_(n,i)}function z_(n,t){let e=1-n;return e*e*e*t}function H_(n,t){let e=1-n;return 3*e*e*n*t}function k_(n,t){return 3*(1-n)*n*n*t}function V_(n,t){return n*n*n*t}function $r(n,t,e,i,s){return z_(n,t)+H_(n,e)+k_(n,i)+V_(n,s)}var Ca=class extends qn{constructor(t=new yt,e=new yt,i=new yt,s=new yt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new yt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set($r(t,s.x,r.x,o.x,a.x),$r(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ql=class extends qn{constructor(t=new U,e=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new U){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set($r(t,s.x,r.x,o.x,a.x),$r(t,s.y,r.y,o.y,a.y),$r(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Pa=class extends qn{constructor(t=new yt,e=new yt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new yt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new yt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zl=class extends qn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ia=class extends qn{constructor(t=new yt,e=new yt,i=new yt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new yt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Jr(t,s.x,r.x,o.x),Jr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Kl=class extends qn{constructor(t=new U,e=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new U){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Jr(t,s.x,r.x,o.x),Jr(t,s.y,r.y,o.y),Jr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},La=class extends qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new yt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(pf(a,c.x,l.x,h.x,u.x),pf(a,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new yt().fromArray(s))}return this}},Jl=Object.freeze({__proto__:null,ArcCurve:Yl,CatmullRomCurve3:lo,CubicBezierCurve:Ca,CubicBezierCurve3:ql,EllipseCurve:co,LineCurve:Pa,LineCurve3:Zl,QuadraticBezierCurve:Ia,QuadraticBezierCurve3:Kl,SplineCurve:La}),$l=class extends qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jl[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Jl[s.type]().fromJSON(s))}return this}},Da=class extends $l{constructor(t){super(),this.type="Path",this.currentPoint=new yt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Pa(this.currentPoint.clone(),new yt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Ia(this.currentPoint.clone(),new yt(t,e),new yt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Ca(this.currentPoint.clone(),new yt(t,e),new yt(i,s),new yt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new La(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,r,o,a,c),this}absellipse(t,e,i,s,r,o,a,c){let l=new co(t,e,i,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Ua=class n extends Oe{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new U,h=new yt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=i+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("normal",new ue(a,3)),this.setAttribute("uv",new ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},He=class n extends Oe{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,_=[],x=i/2,m=0;T(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ue(u,3)),this.setAttribute("normal",new ue(f,3)),this.setAttribute("uv",new ue(d,2));function T(){let v=new U,V=new U,L=0,I=(e-t)/i;for(let O=0;O<=r;O++){let A=[],w=O/r,F=w*(e-t)+t;for(let j=0;j<=s;j++){let B=j/s,G=B*c+a,q=Math.sin(G),Y=Math.cos(G);V.x=F*q,V.y=-w*i+x,V.z=F*Y,u.push(V.x,V.y,V.z),v.set(q,I,Y).normalize(),f.push(v.x,v.y,v.z),d.push(B,1-w),A.push(g++)}_.push(A)}for(let O=0;O<s;O++)for(let A=0;A<r;A++){let w=_[A][O],F=_[A+1][O],j=_[A+1][O+1],B=_[A][O+1];(t>0||A!==0)&&(h.push(w,F,B),L+=3),(e>0||A!==r-1)&&(h.push(F,j,B),L+=3)}l.addGroup(m,L,0),m+=L}function E(v){let V=g,L=new yt,I=new U,O=0,A=v===!0?t:e,w=v===!0?1:-1;for(let j=1;j<=s;j++)u.push(0,x*w,0),f.push(0,w,0),d.push(.5,.5),g++;let F=g;for(let j=0;j<=s;j++){let G=j/s*c+a,q=Math.cos(G),Y=Math.sin(G);I.x=A*Y,I.y=x*w,I.z=A*q,u.push(I.x,I.y,I.z),f.push(0,w,0),L.x=q*.5+.5,L.y=Y*.5*w+.5,d.push(L.x,L.y),g++}for(let j=0;j<s;j++){let B=V+j,G=F+j;v===!0?h.push(G,G+1,B):h.push(G+1,G,B),O+=3}l.addGroup(m,O,v===!0?1:2),m+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ho=class n extends He{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},jl=class n extends Oe{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new ue(r,3)),this.setAttribute("normal",new ue(r.slice(),3)),this.setAttribute("uv",new ue(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(T){let E=new U,v=new U,V=new U;for(let L=0;L<e.length;L+=3)d(e[L+0],E),d(e[L+1],v),d(e[L+2],V),c(E,v,V,T)}function c(T,E,v,V){let L=V+1,I=[];for(let O=0;O<=L;O++){I[O]=[];let A=T.clone().lerp(v,O/L),w=E.clone().lerp(v,O/L),F=L-O;for(let j=0;j<=F;j++)j===0&&O===L?I[O][j]=A:I[O][j]=A.clone().lerp(w,j/F)}for(let O=0;O<L;O++)for(let A=0;A<2*(L-O)-1;A++){let w=Math.floor(A/2);A%2===0?(f(I[O][w+1]),f(I[O+1][w]),f(I[O][w])):(f(I[O][w+1]),f(I[O+1][w+1]),f(I[O+1][w]))}}function l(T){let E=new U;for(let v=0;v<r.length;v+=3)E.x=r[v+0],E.y=r[v+1],E.z=r[v+2],E.normalize().multiplyScalar(T),r[v+0]=E.x,r[v+1]=E.y,r[v+2]=E.z}function h(){let T=new U;for(let E=0;E<r.length;E+=3){T.x=r[E+0],T.y=r[E+1],T.z=r[E+2];let v=x(T)/2/Math.PI+.5,V=m(T)/Math.PI+.5;o.push(v,1-V)}g(),u()}function u(){for(let T=0;T<o.length;T+=6){let E=o[T+0],v=o[T+2],V=o[T+4],L=Math.max(E,v,V),I=Math.min(E,v,V);L>.9&&I<.1&&(E<.2&&(o[T+0]+=1),v<.2&&(o[T+2]+=1),V<.2&&(o[T+4]+=1))}}function f(T){r.push(T.x,T.y,T.z)}function d(T,E){let v=T*3;E.x=t[v+0],E.y=t[v+1],E.z=t[v+2]}function g(){let T=new U,E=new U,v=new U,V=new U,L=new yt,I=new yt,O=new yt;for(let A=0,w=0;A<r.length;A+=9,w+=6){T.set(r[A+0],r[A+1],r[A+2]),E.set(r[A+3],r[A+4],r[A+5]),v.set(r[A+6],r[A+7],r[A+8]),L.set(o[w+0],o[w+1]),I.set(o[w+2],o[w+3]),O.set(o[w+4],o[w+5]),V.copy(T).add(E).add(v).divideScalar(3);let F=x(V);_(L,w+0,T,F),_(I,w+2,E,F),_(O,w+4,v,F)}}function _(T,E,v,V){V<0&&T.x===1&&(o[E]=T.x-1),v.x===0&&v.z===0&&(o[E]=V/2/Math.PI+.5)}function x(T){return Math.atan2(T.z,-T.x)}function m(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var uo=class extends Da{constructor(t){super(t),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Da().fromJSON(s))}return this}},G_={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Kf(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(i&&(r=Z_(n,t,r,e)),n.length>80*e){a=l=n[0],c=h=n[1];for(let g=e;g<s;g+=e)u=n[g],f=n[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return fo(r,o,e,a,c,d,0),o}};function Kf(n,t,e,i,s){let r,o;if(s===ry(n,t,e,i)>0)for(r=t;r<e;r+=i)o=mf(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=mf(r,n[r],n[r+1],o);return o&&Wa(o,o.next)&&(mo(o),o=o.next),o}function vs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Wa(e,e.next)||Xe(e.prev,e,e.next)===0)){if(mo(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function fo(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Q_(n,i,s,r);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?X_(n,i,s,r):W_(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),mo(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Y_(vs(n),t,e),fo(n,t,e,i,s,r,2)):o===2&&q_(n,t,e,i,s,r):fo(vs(n),t,e,i,s,r,1);break}}}function W_(n){let t=n.prev,e=n,i=n.next;if(Xe(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&sr(s,a,r,c,o,l,g.x,g.y)&&Xe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function X_(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Xe(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,_=a>c?a>l?a:l:c>l?c:l,x=h>u?h>f?h:f:u>f?u:f,m=Ql(d,g,t,e,i),T=Ql(_,x,t,e,i),E=n.prevZ,v=n.nextZ;for(;E&&E.z>=m&&v&&v.z<=T;){if(E.x>=d&&E.x<=_&&E.y>=g&&E.y<=x&&E!==s&&E!==o&&sr(a,h,c,u,l,f,E.x,E.y)&&Xe(E.prev,E,E.next)>=0||(E=E.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=x&&v!==s&&v!==o&&sr(a,h,c,u,l,f,v.x,v.y)&&Xe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;E&&E.z>=m;){if(E.x>=d&&E.x<=_&&E.y>=g&&E.y<=x&&E!==s&&E!==o&&sr(a,h,c,u,l,f,E.x,E.y)&&Xe(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;v&&v.z<=T;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=x&&v!==s&&v!==o&&sr(a,h,c,u,l,f,v.x,v.y)&&Xe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Y_(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!Wa(s,r)&&Jf(s,i,i.next,r)&&po(s,r)&&po(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),mo(i),mo(i.next),i=n=r),i=i.next}while(i!==n);return vs(i)}function q_(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ny(o,a)){let c=$f(o,a);o=vs(o,o.next),c=vs(c,c.next),fo(o,t,e,i,s,r,0),fo(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Z_(n,t,e,i){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=Kf(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(ey(l));for(s.sort(K_),r=0;r<s.length;r++)e=J_(s[r],e);return e}function K_(n,t){return n.x-t.x}function J_(n,t){let e=$_(n,t);if(!e)return t;let i=$f(e,n);return vs(i,i.next),vs(e,e.next)}function $_(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&sr(o<l?r:i,o,c,l,o<l?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),po(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&j_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function j_(n,t){return Xe(n.prev,n,t.prev)<0&&Xe(t.next,n,n.next)<0}function Q_(n,t,e,i){let s=n;do s.z===0&&(s.z=Ql(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,ty(s)}function ty(n){let t,e,i,s,r,o,a,c,l=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,l*=2}while(o>1);return n}function Ql(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function ey(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function sr(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function ny(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!iy(n,t)&&(po(n,t)&&po(t,n)&&sy(n,t)&&(Xe(n.prev,n,t.prev)||Xe(n,t.prev,t))||Wa(n,t)&&Xe(n.prev,n,n.next)>0&&Xe(t.prev,t,t.next)>0)}function Xe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Wa(n,t){return n.x===t.x&&n.y===t.y}function Jf(n,t,e,i){let s=la(Xe(n,t,e)),r=la(Xe(n,t,i)),o=la(Xe(e,i,n)),a=la(Xe(e,i,t));return!!(s!==r&&o!==a||s===0&&ca(n,e,t)||r===0&&ca(n,i,t)||o===0&&ca(e,n,i)||a===0&&ca(e,t,i))}function ca(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function la(n){return n>0?1:n<0?-1:0}function iy(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Jf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function po(n,t){return Xe(n.prev,n,n.next)<0?Xe(n,t,n.next)>=0&&Xe(n,n.prev,t)>=0:Xe(n,t,n.prev)<0||Xe(n,n.next,t)<0}function sy(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function $f(n,t){let e=new th(n.i,n.x,n.y),i=new th(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function mf(n,t,e,i){let s=new th(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function mo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function th(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ry(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var jr=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];gf(t),xf(i,t);let o=t.length;e.forEach(gf);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,xf(i,e[c]);let a=G_.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function gf(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function xf(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Na=class n extends Oe{constructor(t=new uo([new yt(.5,.5),new yt(-.5,.5),new yt(-.5,-.5),new yt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new ue(s,3)),this.setAttribute("uv",new ue(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:oy,E,v=!1,V,L,I,O;m&&(E=m.getSpacedPoints(h),v=!0,f=!1,V=m.computeFrenetFrames(h,!1),L=new U,I=new U,O=new U),f||(x=0,d=0,g=0,_=0);let A=a.extractPoints(l),w=A.shape,F=A.holes;if(!jr.isClockWise(w)){w=w.reverse();for(let mt=0,St=F.length;mt<St;mt++){let N=F[mt];jr.isClockWise(N)&&(F[mt]=N.reverse())}}let B=jr.triangulateShape(w,F),G=w;for(let mt=0,St=F.length;mt<St;mt++){let N=F[mt];w=w.concat(N)}function q(mt,St,N){return St||console.error("THREE.ExtrudeGeometry: vec does not exist"),mt.clone().addScaledVector(St,N)}let Y=w.length,xt=B.length;function Q(mt,St,N){let Yt,vt,Nt,$=mt.x-St.x,pt=mt.y-St.y,ht=N.x-mt.x,C=N.y-mt.y,b=$*$+pt*pt,W=$*C-pt*ht;if(Math.abs(W)>Number.EPSILON){let J=Math.sqrt(b),rt=Math.sqrt(ht*ht+C*C),tt=St.x-pt/J,Ct=St.y+$/J,ut=N.x-C/rt,Pt=N.y+ht/rt,Lt=((ut-tt)*C-(Pt-Ct)*ht)/($*C-pt*ht);Yt=tt+$*Lt-mt.x,vt=Ct+pt*Lt-mt.y;let st=Yt*Yt+vt*vt;if(st<=2)return new yt(Yt,vt);Nt=Math.sqrt(st/2)}else{let J=!1;$>Number.EPSILON?ht>Number.EPSILON&&(J=!0):$<-Number.EPSILON?ht<-Number.EPSILON&&(J=!0):Math.sign(pt)===Math.sign(C)&&(J=!0),J?(Yt=-pt,vt=$,Nt=Math.sqrt(b)):(Yt=$,vt=pt,Nt=Math.sqrt(b/2))}return new yt(Yt/Nt,vt/Nt)}let Et=[];for(let mt=0,St=G.length,N=St-1,Yt=mt+1;mt<St;mt++,N++,Yt++)N===St&&(N=0),Yt===St&&(Yt=0),Et[mt]=Q(G[mt],G[N],G[Yt]);let gt=[],zt,oe=Et.concat();for(let mt=0,St=F.length;mt<St;mt++){let N=F[mt];zt=[];for(let Yt=0,vt=N.length,Nt=vt-1,$=Yt+1;Yt<vt;Yt++,Nt++,$++)Nt===vt&&(Nt=0),$===vt&&($=0),zt[Yt]=Q(N[Yt],N[Nt],N[$]);gt.push(zt),oe=oe.concat(zt)}for(let mt=0;mt<x;mt++){let St=mt/x,N=d*Math.cos(St*Math.PI/2),Yt=g*Math.sin(St*Math.PI/2)+_;for(let vt=0,Nt=G.length;vt<Nt;vt++){let $=q(G[vt],Et[vt],Yt);Mt($.x,$.y,-N)}for(let vt=0,Nt=F.length;vt<Nt;vt++){let $=F[vt];zt=gt[vt];for(let pt=0,ht=$.length;pt<ht;pt++){let C=q($[pt],zt[pt],Yt);Mt(C.x,C.y,-N)}}}let Me=g+_;for(let mt=0;mt<Y;mt++){let St=f?q(w[mt],oe[mt],Me):w[mt];v?(I.copy(V.normals[0]).multiplyScalar(St.x),L.copy(V.binormals[0]).multiplyScalar(St.y),O.copy(E[0]).add(I).add(L),Mt(O.x,O.y,O.z)):Mt(St.x,St.y,0)}for(let mt=1;mt<=h;mt++)for(let St=0;St<Y;St++){let N=f?q(w[St],oe[St],Me):w[St];v?(I.copy(V.normals[mt]).multiplyScalar(N.x),L.copy(V.binormals[mt]).multiplyScalar(N.y),O.copy(E[mt]).add(I).add(L),Mt(O.x,O.y,O.z)):Mt(N.x,N.y,u/h*mt)}for(let mt=x-1;mt>=0;mt--){let St=mt/x,N=d*Math.cos(St*Math.PI/2),Yt=g*Math.sin(St*Math.PI/2)+_;for(let vt=0,Nt=G.length;vt<Nt;vt++){let $=q(G[vt],Et[vt],Yt);Mt($.x,$.y,u+N)}for(let vt=0,Nt=F.length;vt<Nt;vt++){let $=F[vt];zt=gt[vt];for(let pt=0,ht=$.length;pt<ht;pt++){let C=q($[pt],zt[pt],Yt);v?Mt(C.x,C.y+E[h-1].y,E[h-1].x+N):Mt(C.x,C.y,u+N)}}}ft(),bt();function ft(){let mt=s.length/3;if(f){let St=0,N=Y*St;for(let Yt=0;Yt<xt;Yt++){let vt=B[Yt];Qt(vt[2]+N,vt[1]+N,vt[0]+N)}St=h+x*2,N=Y*St;for(let Yt=0;Yt<xt;Yt++){let vt=B[Yt];Qt(vt[0]+N,vt[1]+N,vt[2]+N)}}else{for(let St=0;St<xt;St++){let N=B[St];Qt(N[2],N[1],N[0])}for(let St=0;St<xt;St++){let N=B[St];Qt(N[0]+Y*h,N[1]+Y*h,N[2]+Y*h)}}i.addGroup(mt,s.length/3-mt,0)}function bt(){let mt=s.length/3,St=0;Xt(G,St),St+=G.length;for(let N=0,Yt=F.length;N<Yt;N++){let vt=F[N];Xt(vt,St),St+=vt.length}i.addGroup(mt,s.length/3-mt,1)}function Xt(mt,St){let N=mt.length;for(;--N>=0;){let Yt=N,vt=N-1;vt<0&&(vt=mt.length-1);for(let Nt=0,$=h+x*2;Nt<$;Nt++){let pt=Y*Nt,ht=Y*(Nt+1),C=St+Yt+pt,b=St+vt+pt,W=St+vt+ht,J=St+Yt+ht;ie(C,b,W,J)}}}function Mt(mt,St,N){c.push(mt),c.push(St),c.push(N)}function Qt(mt,St,N){te(mt),te(St),te(N);let Yt=s.length/3,vt=T.generateTopUV(i,s,Yt-3,Yt-2,Yt-1);de(vt[0]),de(vt[1]),de(vt[2])}function ie(mt,St,N,Yt){te(mt),te(St),te(Yt),te(St),te(N),te(Yt);let vt=s.length/3,Nt=T.generateSideWallUV(i,s,vt-6,vt-3,vt-2,vt-1);de(Nt[0]),de(Nt[1]),de(Nt[3]),de(Nt[1]),de(Nt[2]),de(Nt[3])}function te(mt){s.push(c[mt*3+0]),s.push(c[mt*3+1]),s.push(c[mt*3+2])}function de(mt){r.push(mt.x),r.push(mt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return ay(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Jl[s.type]().fromJSON(s)),new n(i,t.options)}},oy={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],h=t[s*3+1];return[new yt(r,o),new yt(a,c),new yt(l,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],h=t[i*3+1],u=t[i*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],_=t[r*3],x=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new yt(o,1-c),new yt(l,1-u),new yt(f,1-g),new yt(_,1-m)]:[new yt(a,1-c),new yt(h,1-u),new yt(d,1-g),new yt(x,1-m)]}};function ay(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Oa=class n extends jl{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var go=class n extends Oe{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,f=(e-t)/s,d=new U,g=new yt;for(let _=0;_<=s;_++){for(let x=0;x<=i;x++){let m=r+x/i*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){let x=_*(i+1);for(let m=0;m<i;m++){let T=m+x,E=T,v=T+i+1,V=T+i+2,L=T+1;a.push(E,v,L),a.push(v,V,L)}}this.setIndex(a),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(l,3)),this.setAttribute("uv",new ue(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ln=class n extends Oe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new U,f=new U,d=[],g=[],_=[],x=[];for(let m=0;m<=i;m++){let T=[],E=m/i,v=0;m===0&&o===0?v=.5/e:m===i&&c===Math.PI&&(v=-.5/e);for(let V=0;V<=e;V++){let L=V/e;u.x=-t*Math.cos(s+L*r)*Math.sin(o+E*a),u.y=t*Math.cos(o+E*a),u.z=t*Math.sin(s+L*r)*Math.sin(o+E*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),x.push(L+v,1-E),T.push(l++)}h.push(T)}for(let m=0;m<i;m++)for(let T=0;T<e;T++){let E=h[m][T+1],v=h[m][T],V=h[m+1][T],L=h[m+1][T+1];(m!==0||o>0)&&d.push(E,v,L),(m!==i-1||c<Math.PI)&&d.push(v,V,L)}this.setIndex(d),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Es=class n extends Oe{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new U,u=new U,f=new U;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){let _=g/s*r,x=d/i*Math.PI*2;u.x=(t+e*Math.cos(x))*Math.cos(_),u.y=(t+e*Math.cos(x))*Math.sin(_),u.z=e*Math.sin(x),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){let _=(s+1)*d+g-1,x=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,T=(s+1)*d+g;o.push(_,x,T),o.push(x,m,T)}this.setIndex(o),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var xe=class extends Ni{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ff,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ha(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function cy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var gr=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},eh=class extends gr{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:du,endingEnd:du}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case pu:r=t,a=2*e-i;break;case mu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case pu:o=t,c=2*i-e;break;case mu:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-e)/(s-e),_=g*g,x=_*g,m=-f*x+2*f*_-f*g,T=(1+f)*x+(-1.5-2*f)*_+(-.5+f)*g+1,E=(-1-d)*x+(1.5+d)*_+.5*g,v=d*x-d*_;for(let V=0;V!==a;++V)r[V]=m*o[h+V]+T*o[l+V]+E*o[c+V]+v*o[u+V];return r}},nh=class extends gr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(i-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},ih=class extends gr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ri=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ha(e,this.TimeBufferType),this.values=ha(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ha(t.times,Array),values:ha(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ih(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new nh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new eh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ga:e=this.InterpolantFactoryMethodDiscrete;break;case Al:e=this.InterpolantFactoryMethodLinear;break;case hc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ga;case this.InterpolantFactoryMethodLinear:return Al;case this.InterpolantFactoryMethodSmooth:return hc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&cy(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===hc,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let _=e[u+g];if(_!==e[f+g]||_!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};ri.prototype.TimeBufferType=Float32Array;ri.prototype.ValueBufferType=Float32Array;ri.prototype.DefaultInterpolation=Al;var bs=class extends ri{constructor(t,e,i){super(t,e,i)}};bs.prototype.ValueTypeName="bool";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=ga;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var sh=class extends ri{};sh.prototype.ValueTypeName="color";var rh=class extends ri{};rh.prototype.ValueTypeName="number";var oh=class extends gr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)si.slerpFlat(r,0,o,l-a,o,l,c);return r}},Fa=class extends ri{InterpolantFactoryMethodLinear(t){return new oh(this.times,this.values,this.getValueSize(),t)}};Fa.prototype.ValueTypeName="quaternion";Fa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ss=class extends ri{constructor(t,e,i){super(t,e,i)}};Ss.prototype.ValueTypeName="string";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=ga;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var ah=class extends ri{};ah.prototype.ValueTypeName="vector";var _f={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},ch=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},ly=new ch,xo=class{constructor(t){this.manager=t!==void 0?t:ly,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};xo.DEFAULT_MATERIAL_NAME="__DEFAULT";var lh=class extends xo{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=_f.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=no("img");function c(){h(),_f.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var _o=class extends xo{constructor(t){super(t)}load(t,e,i,s){let r=new _n,o=new lh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}},yo=class extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Mo=class extends yo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},kc=new Fe,yf=new U,Mf=new U,Ba=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new so,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;yf.setFromMatrixPosition(t.matrixWorld),e.position.copy(yf),Mf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mf),e.updateMatrixWorld(),kc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(kc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var vf=new Fe,Wr=new U,Vc=new U,hh=class extends Ba{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new yt(4,2),this._viewportCount=6,this._viewports=[new De(2,1,1,1),new De(0,1,1,1),new De(3,1,1,1),new De(1,1,1,1),new De(3,0,1,1),new De(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Wr.setFromMatrixPosition(t.matrixWorld),i.position.copy(Wr),Vc.copy(i.position),Vc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Vc),i.updateMatrixWorld(),s.makeTranslation(-Wr.x,-Wr.y,-Wr.z),vf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vf)}},vo=class extends yo{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new hh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},uh=class extends Ba{constructor(){super(new Sa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Eo=class extends yo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new uh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var bo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ef(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Ef();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Ef(){return performance.now()}var wh="\\[\\]\\.:\\/",hy=new RegExp("["+wh+"]","g"),Th="[^"+wh+"]",uy="[^"+wh.replace("\\.","")+"]",fy=/((?:WC+[\/:])*)/.source.replace("WC",Th),dy=/(WCOD+)?/.source.replace("WCOD",uy),py=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Th),my=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Th),gy=new RegExp("^"+fy+dy+py+my+"$"),xy=["material","materials","bones","map"],fh=class{constructor(t,e,i){let s=i||ke.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ke=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(hy,"")}static parseTrackName(t){let e=gy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);xy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ke.Composite=fh;ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ke.prototype.GetterByBindingType=[ke.prototype._getValue_direct,ke.prototype._getValue_array,ke.prototype._getValue_arrayElement,ke.prototype._getValue_toArray];ke.prototype.SetterByBindingTypeAndVersioning=[[ke.prototype._setValue_direct,ke.prototype._setValue_direct_setNeedsUpdate,ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_array,ke.prototype._setValue_array_setNeedsUpdate,ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_arrayElement,ke.prototype._setValue_arrayElement_setNeedsUpdate,ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_fromArray,ke.prototype._setValue_fromArray_setNeedsUpdate,ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var f1=new Float32Array(1);var bf=new Fe,xr=class{constructor(t,e,i=0,s=1/0){this.ray=new ys(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new io,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return bf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bf),this}intersectObject(t,e=!0,i=[]){return dh(t,this,i,e),i.sort(Sf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)dh(t[s],this,i,e);return i.sort(Sf),i}};function Sf(n,t){return n.distance-t.distance}function dh(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)dh(r[o],t,e,!0)}}var ws=class{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(on(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var za=class extends Di{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ph}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ph);var jf={type:"change"},Ch={type:"start"},td={type:"end"},Xa=new ys,Qf=new ei,_y=Math.cos(70*zf.DEG2RAD),nn=new U,In=2*Math.PI,Ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Rh=1e-6,Ya=class extends za{constructor(t,e=null){super(t,e),this.state=Ue.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ts.ROTATE,MIDDLE:Ts.DOLLY,RIGHT:Ts.PAN},this.touches={ONE:xi.ROTATE,TWO:xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new si,this._lastTargetPosition=new U,this._quat=new si().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ws,this._sphericalDelta=new ws,this._scale=1,this._panOffset=new U,this._rotateStart=new yt,this._rotateEnd=new yt,this._rotateDelta=new yt,this._panStart=new yt,this._panEnd=new yt,this._panDelta=new yt,this._dollyStart=new yt,this._dollyEnd=new yt,this._dollyDelta=new yt,this._dollyDirection=new U,this._mouse=new yt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=My.bind(this),this._onPointerDown=yy.bind(this),this._onPointerUp=vy.bind(this),this._onContextMenu=Ry.bind(this),this._onMouseWheel=Sy.bind(this),this._onKeyDown=wy.bind(this),this._onTouchStart=Ty.bind(this),this._onTouchMove=Ay.bind(this),this._onMouseDown=Ey.bind(this),this._onMouseMove=by.bind(this),this._interceptControlDown=Cy.bind(this),this._interceptControlUp=Py.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(jf),this.update(),this.state=Ue.NONE}update(t=null){let e=this.object.position;nn.copy(e).sub(this.target),nn.applyQuaternion(this._quat),this._spherical.setFromVector3(nn),this.autoRotate&&this.state===Ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=In:i>Math.PI&&(i-=In),s<-Math.PI?s+=In:s>Math.PI&&(s-=In),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(nn.setFromSpherical(this._spherical),nn.applyQuaternion(this._quatInverse),e.copy(this.target).add(nn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=nn.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new U(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=nn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Xa.origin.copy(this.object.position),Xa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Xa.direction))<_y?this.object.lookAt(this.target):(Qf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Xa.intersectPlane(Qf,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Rh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Rh||this._lastTargetPosition.distanceToSquared(this.target)>Rh?(this.dispatchEvent(jf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?In/60*this.autoRotateSpeed*t:In/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){nn.setFromMatrixColumn(e,0),nn.multiplyScalar(-t),this._panOffset.add(nn)}_panUp(t,e){this.screenSpacePanning===!0?nn.setFromMatrixColumn(e,1):(nn.setFromMatrixColumn(e,0),nn.crossVectors(this.object.up,nn)),nn.multiplyScalar(t),this._panOffset.add(nn)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;nn.copy(s).sub(this.target);let r=nn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(In*this._rotateDelta.x/e.clientHeight),this._rotateUp(In*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(In*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-In*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(In*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-In*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(In*this._rotateDelta.x/e.clientHeight),this._rotateUp(In*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new yt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function yy(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function My(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function vy(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(td),this.state=Ue.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Ey(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ts.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ue.DOLLY;break;case Ts.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ue.ROTATE}break;case Ts.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ue.PAN}break;default:this.state=Ue.NONE}this.state!==Ue.NONE&&this.dispatchEvent(Ch)}function by(n){switch(this.state){case Ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Sy(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ue.NONE||(n.preventDefault(),this.dispatchEvent(Ch),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(td))}function wy(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function Ty(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case xi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Ue.TOUCH_ROTATE;break;case xi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Ue.TOUCH_PAN;break;default:this.state=Ue.NONE}break;case 2:switch(this.touches.TWO){case xi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ue.TOUCH_DOLLY_PAN;break;case xi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ue.TOUCH_DOLLY_ROTATE;break;default:this.state=Ue.NONE}break;default:this.state=Ue.NONE}this.state!==Ue.NONE&&this.dispatchEvent(Ch)}function Ay(n){switch(this._trackPointer(n),this.state){case Ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ue.NONE}}function Ry(n){this.enabled!==!1&&n.preventDefault()}function Cy(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Py(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function qa(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new Oe,l=0;for(let h=0;h<n.length;++h){let u=n[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0,u=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=n[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=ed(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);let g=ed(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function ed(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){let h=n[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new un(o,e,i),c=0;for(let l=0;l<n.length;++l){let h=n[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){let _=h.getComponent(f,g);a.setComponent(f+u,g,_)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var As=16,Rs=8,Ih=6;function id(n){return()=>(n=n*1664525+1013904223>>>0,n/4294967296)}var Iy=n=>"#"+("00000"+n.toString(16)).slice(-6);function Ge(n,t){let e=Math.min(255,Math.max(0,(n>>16&255)*t)),i=Math.min(255,Math.max(0,(n>>8&255)*t)),s=Math.min(255,Math.max(0,(n&255)*t));return"rgb("+(e|0)+","+(i|0)+","+(s|0)+")"}var Kt={noise:(n,t)=>(e,i)=>{for(let s=0;s<16;s++)for(let r=0;r<16;r++)e.fillStyle=Ge(n,1-t/2+i()*t),e.fillRect(s,r,1,1)},grassTop:(n,t)=>{Kt.noise(11132046,.16)(n,t);for(let e=0;e<14;e++)n.fillStyle=Ge(9423992,.95+t()*.1),n.fillRect(t()*16|0,t()*16|0,1,1)},grassSide:(n,t)=>{Kt.dirt(n,t);for(let e=0;e<16;e++){let i=3+(t()*2.2|0);for(let s=0;s<i;s++)n.fillStyle=Ge(11132046,.9+t()*.15),n.fillRect(e,s,1,1)}},dirt:(n,t)=>{Kt.noise(12094050,.18)(n,t);for(let e=0;e<10;e++)n.fillStyle=Ge(10121296,1),n.fillRect(t()*16|0,t()*16|0,1,1)},stone:(n,t)=>{Kt.noise(11842232,.12)(n,t);for(let e=0;e<6;e++){n.fillStyle=Ge(10263202,1);let i=t()*14|0,s=t()*16|0;n.fillRect(i,s,2+(t()*3|0),1)}},sand:(n,t)=>Kt.noise(15983286,.1)(n,t),pathTop:(n,t)=>{Kt.noise(15324068,.14)(n,t);for(let e=0;e<12;e++)n.fillStyle=Ge(13810058,1),n.fillRect(t()*16|0,t()*16|0,1,1)},pathSide:(n,t)=>{Kt.dirt(n,t),n.fillStyle=Ge(15324068,1),n.fillRect(0,0,16,2)},snowTop:(n,t)=>Kt.noise(16514047,.05)(n,t),snowSide:(n,t)=>{Kt.stone(n,t);for(let e=0;e<16;e++){let i=3+(t()*3|0);n.fillStyle=Ge(16514047,.97+t()*.03),n.fillRect(e,0,1,i)}},logSide:(n,t)=>{for(let e=0;e<16;e++){let i=e%4===0?8215104:10121298;for(let s=0;s<16;s++)n.fillStyle=Ge(i,.9+t()*.2),n.fillRect(e,s,1,1)}},logTop:(n,t)=>{Kt.noise(14267267,.08)(n,t),n.strokeStyle=Ge(11569760,1),n.lineWidth=1,[6,3].forEach(e=>{n.strokeRect(8-e+.5,8-e+.5,e*2-1,e*2-1)}),n.strokeStyle=Ge(9071180,1),n.strokeRect(.5,.5,15,15)},leaves:n=>(t,e)=>{Kt.noise(n,.22)(t,e);for(let i=0;i<22;i++)t.fillStyle=Ge(n,.72),t.fillRect(e()*16|0,e()*16|0,1,1);for(let i=0;i<10;i++)t.fillStyle=Ge(n,1.12),t.fillRect(e()*16|0,e()*16|0,1,1)},water:(n,t)=>{Kt.noise(9425898,.08)(n,t);for(let e=0;e<7;e++)n.fillStyle="rgba(255,255,255,0.55)",n.fillRect(t()*13|0,t()*16|0,2+(t()*3|0),1)},birch:(n,t)=>{Kt.noise(16052454,.06)(n,t);for(let e=0;e<8;e++)n.fillStyle="#5a5050",n.fillRect(t()*14|0,t()*16|0,2+(t()*2|0),1)},cobble:(n,t)=>{Kt.noise(11052718,.1)(n,t),n.fillStyle=Ge(8684172,1);for(let e=0;e<16;e+=4){n.fillRect(0,e,16,1);for(let i=e/4%2*3;i<16;i+=6)n.fillRect(i,e,1,4)}},deep:(n,t)=>Kt.noise(9341592,.16)(n,t),clay:(n,t)=>{Kt.noise(12950138,.12)(n,t);for(let e=3;e<16;e+=5)n.fillStyle=Ge(11765610,1),n.fillRect(0,e,16,1)},gravel:(n,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++)n.fillStyle=Ge([12433068,11051414,13814720][t()*3|0],1),n.fillRect(e,i,1,1)},planks:(n,t)=>{for(let e=0;e<16;e++){let i=e%4===3;for(let s=0;s<16;s++)n.fillStyle=i?"#9a7254":Ge(13936760,.92+t()*.12),n.fillRect(s,e,1,1)}for(let e=0;e<16;e+=4)n.fillStyle="#9a7254",n.fillRect(e*3%16,e,1,3)},mossy:(n,t)=>{Kt.cobble(n,t);for(let e=0;e<40;e++)n.fillStyle=Ge(9423992,.9+t()*.2),n.fillRect(t()*16|0,t()*16|0,1,1)},shingle:(n,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=e>>2,r=e%4===3||(i+s*4)%8===0;n.fillStyle=Ge(16777215,r?.78:.94+t()*.06),n.fillRect(i,e,1,1)}},plaster:(n,t)=>Kt.noise(16777215,.07)(n,t),plankGrey:(n,t)=>{for(let e=0;e<16;e++){let i=e%4===3;for(let s=0;s<16;s++)n.fillStyle=Ge(16777215,i?.72:.9+t()*.1),n.fillRect(s,e,1,1)}},glass:(n,t)=>{n.fillStyle="#d8f1fa",n.fillRect(0,0,16,16),n.fillStyle="#ffffff",n.fillRect(3,3,1,4),n.fillRect(4,3,1,2),n.fillRect(10,9,1,3),n.fillStyle="#bcd9e6",n.fillRect(0,0,16,1),n.fillRect(0,15,16,1),n.fillRect(0,0,1,16),n.fillRect(15,0,1,16),n.fillRect(7,0,2,16),n.fillRect(0,7,16,2)},bricks:(n,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=e%4===3||(i+(e>>2)%2*4)%8===7;n.fillStyle=s?"#e9e2d6":Ge(16777215,.86+t()*.08),n.fillRect(i,e,1,1)}},stoneBrick:(n,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=e%8===7||(i+(e>>3)*8)%16===15;n.fillStyle=s?"#8c8a94":Ge(11973820,.9+t()*.12),n.fillRect(i,e,1,1)}},farmland:(n,t)=>{Kt.noise(8018496,.14)(n,t);for(let e=1;e<16;e+=4)n.fillStyle="#5e4430",n.fillRect(0,e,16,1)},sprucePlank:(n,t)=>{for(let e=0;e<16;e++){let i=e%4===3;for(let s=0;s<16;s++)n.fillStyle=i?"#5e4430":Ge(9069640,.9+t()*.12),n.fillRect(s,e,1,1)}for(let e=0;e<16;e+=4)n.fillStyle="#5e4430",n.fillRect(e*5%16,e,1,3)},wheat:(n,t)=>{for(let e=1;e<15;e+=2){let i=9+(t()*5|0);n.fillStyle="#c9b45a",n.fillRect(e,16-i,1,i),n.fillStyle="#f2d36b",n.fillRect(e,16-i,1,4)}},carrot:(n,t)=>{for(let e=2;e<14;e+=3)n.fillStyle="#6faa5e",n.fillRect(e,7,1,6),n.fillRect(e+1,8,1,3),n.fillStyle="#f2963a",n.fillRect(e,13,2,3)},sprout:(n,t)=>{for(let e=1;e<15;e+=3)n.fillStyle="#7fc46a",n.fillRect(e+1,10,1,6),n.fillRect(e,10,3,1),n.fillRect(e+2,12,1,1)},tuft:(n,t)=>{for(let e=1;e<15;e+=2){let i=5+(t()*7|0);n.fillStyle=Ge(9423992,.85+t()*.25),n.fillRect(e,16-i,1,i)}},flower:n=>(t,e)=>{t.fillStyle="#6faa5e",t.fillRect(7,8,2,8),t.fillRect(5,11,2,1),t.fillRect(9,13,2,1),t.fillStyle=Iy(n),t.fillRect(6,4,4,3),t.fillRect(5,5,6,1),t.fillStyle="#fff6b0",t.fillRect(7,5,2,1)},reed:(n,t)=>{n.fillStyle="#7cb86f";for(let e=3;e<14;e+=3)n.fillRect(e,2+(t()*4|0),1,14);n.fillStyle="#a77a52",n.fillRect(6,2,2,4)},lily:(n,t)=>{n.fillStyle="#84c784",n.beginPath(),n.arc(8,8,6.5,.3,Math.PI*2-.3),n.lineTo(8,8),n.fill(),n.fillStyle="#ffb6c1",n.fillRect(9,6,2,2)}},dt={GRASS_TOP:0,GRASS_SIDE:1,DIRT:2,STONE:3,SAND:4,PATH_TOP:5,PATH_SIDE:6,SNOW_TOP:7,SNOW_SIDE:8,LOG:9,LOG_TOP:10,LEAF_G:11,LEAF_M:12,LEAF_L:13,LEAF_P:14,WATER:15,BIRCH:16,COBBLE:17,DEEP:18,CLAY:19,GRAVEL:20,PLANKS:21,MOSSY:22,LEAF_T:23,TUFT:24,FL_PINK:25,FL_WHITE:26,FL_YELLOW:27,FL_BLUE:28,FL_LAV:29,REED:30,LILY:31,SHINGLE:32,PLASTER:33,PLANK_GREY:34,GLASS:35,BRICKS:36,STONE_BRICK:37,FARMLAND:38,SPRUCE_PLANK:39,WHEAT:40,CARROT:41,SPROUT:42},sd=[Kt.grassTop,Kt.grassSide,Kt.dirt,Kt.stone,Kt.sand,Kt.pathTop,Kt.pathSide,Kt.snowTop,Kt.snowSide,Kt.logSide,Kt.logTop,Kt.leaves(8834168),Kt.leaves(8178084),Kt.leaves(11196796),Kt.leaves(16167880),Kt.water,Kt.birch,Kt.cobble,Kt.deep,Kt.clay,Kt.gravel,Kt.planks,Kt.mossy,Kt.leaves(7320465),Kt.tuft,Kt.flower(16752575),Kt.flower(16777215),Kt.flower(16769658),Kt.flower(10473471),Kt.flower(13809919),Kt.reed,Kt.lily,Kt.shingle,Kt.plaster,Kt.plankGrey,Kt.glass,Kt.bricks,Kt.stoneBrick,Kt.farmland,Kt.sprucePlank,Kt.wheat,Kt.carrot,Kt.sprout],ts=null;function Ly(){if(ts)return ts;let n=document.createElement("canvas");n.width=As*Rs,n.height=As*Ih;let t=n.getContext("2d");return sd.forEach((e,i)=>{t.save(),t.translate(i%Rs*As,Math.floor(i/Rs)*As),t.beginPath(),t.rect(0,0,As,As),t.clip(),e(t,id(101+i*7)),t.restore()}),ts=new cn(n),ts.magFilter=qe,ts.minFilter=qe,ts.generateMipmaps=!1,ts.colorSpace=Pe,ts}var Ph=new Map;function oi(n){if(Ph.has(n))return Ph.get(n);let t=document.createElement("canvas");t.width=t.height=As,sd[n](t.getContext("2d"),id(101+n*7));let e=new cn(t);return e.magFilter=qe,e.minFilter=qe,e.generateMipmaps=!1,e.wrapS=e.wrapT=Qr,e.colorSpace=Pe,Ph.set(n,e),e}var nd=n=>{let t=n%Rs/Rs,e=1-(Math.floor(n/Rs)+1)/Ih,i=8e-4;return[t+i,e+i,t+1/Rs-i,e+1/Ih-i]},It={AIR:0,GRASS:1,DIRT:2,STONE:3,SAND:4,PATH:5,SNOW:6,LOG:7,LEAF_G:8,LEAF_M:9,LEAF_L:10,LEAF_P:11,WATER:12,BIRCH:13,COBBLE:14,DEEP:15,CLAY:16,GRAVEL:17,LEAF_T:18,MOSSY:19,PLANKS:20,BRICK:21,FARM:22},Ye=[];Ye[It.GRASS]=[dt.GRASS_TOP,dt.GRASS_SIDE,dt.DIRT];Ye[It.DIRT]=[dt.DIRT,dt.DIRT,dt.DIRT];Ye[It.STONE]=[dt.STONE,dt.STONE,dt.STONE];Ye[It.SAND]=[dt.SAND,dt.SAND,dt.SAND];Ye[It.PATH]=[dt.PATH_TOP,dt.PATH_SIDE,dt.DIRT];Ye[It.SNOW]=[dt.SNOW_TOP,dt.SNOW_SIDE,dt.STONE];Ye[It.LOG]=[dt.LOG_TOP,dt.LOG,dt.LOG_TOP];Ye[It.BIRCH]=[dt.LOG_TOP,dt.BIRCH,dt.LOG_TOP];Ye[It.LEAF_G]=[dt.LEAF_G,dt.LEAF_G,dt.LEAF_G];Ye[It.LEAF_M]=[dt.LEAF_M,dt.LEAF_M,dt.LEAF_M];Ye[It.LEAF_L]=[dt.LEAF_L,dt.LEAF_L,dt.LEAF_L];Ye[It.LEAF_P]=[dt.LEAF_P,dt.LEAF_P,dt.LEAF_P];Ye[It.LEAF_T]=[dt.LEAF_T,dt.LEAF_T,dt.LEAF_T];Ye[It.WATER]=[dt.WATER,dt.WATER,dt.WATER];Ye[It.COBBLE]=[dt.COBBLE,dt.COBBLE,dt.COBBLE];Ye[It.DEEP]=[dt.DEEP,dt.DEEP,dt.DEEP];Ye[It.CLAY]=[dt.CLAY,dt.CLAY,dt.CLAY];Ye[It.GRAVEL]=[dt.GRAVEL,dt.GRAVEL,dt.GRAVEL];Ye[It.BRICK]=[dt.STONE_BRICK,dt.STONE_BRICK,dt.STONE_BRICK];Ye[It.FARM]=[dt.FARMLAND,dt.DIRT,dt.DIRT];Ye[It.MOSSY]=[dt.MOSSY,dt.MOSSY,dt.MOSSY];Ye[It.PLANKS]=[dt.PLANKS,dt.PLANKS,dt.PLANKS];var Za=n=>n===It.LEAF_G||n===It.LEAF_M||n===It.LEAF_L||n===It.LEAF_P||n===It.LEAF_T,wo=class{constructor(t,e,i,s,r,o){Object.assign(this,{x0:t,y0:e,z0:i,sx:s,sy:r,sz:o}),this.d=new Uint8Array(s*r*o),this.plants=[],this.tint=new Map}idx(t,e,i){let s=t-this.x0,r=e-this.y0,o=i-this.z0;return s<0||r<0||o<0||s>=this.sx||r>=this.sy||o>=this.sz?-1:(r*this.sz+o)*this.sx+s}get(t,e,i){let s=this.idx(t,e,i);return s<0?0:this.d[s]}set(t,e,i,s){let r=this.idx(t,e,i);r>=0&&(this.d[r]=s)}top(t,e){for(let i=this.y0+this.sy-1;i>=this.y0;i--){let s=this.get(t,i,e);if(s&&s!==It.WATER)return i}return null}plant(t,e,i,s,r){this.plants.push([t,e,i,s,r||1])}build(t){let e={p:[],n:[],u:[],c:[]},i={p:[],n:[],u:[],c:[]},s=[{d:[1,0,0],v:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],s:1,b:.84},{d:[-1,0,0],v:[[0,0,1],[0,1,1],[0,1,0],[0,0,0]],s:1,b:.84},{d:[0,1,0],v:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],s:0,b:1},{d:[0,-1,0],v:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],s:2,b:.62},{d:[0,0,1],v:[[1,0,1],[1,1,1],[0,1,1],[0,0,1]],s:1,b:.92},{d:[0,0,-1],v:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],s:1,b:.76}],r=t==null?.88:t;for(let f=0;f<this.sy;f++)for(let d=0;d<this.sz;d++)for(let g=0;g<this.sx;g++){let _=this.d[(f*this.sz+d)*this.sx+g];if(!_)continue;let x=this.x0+g,m=this.y0+f,T=this.z0+d,E=Ye[_];if(!E)continue;let v=this.tint.get((f*this.sz+d)*this.sx+g)||1;s.forEach(V=>{let L=this.get(x+V.d[0],m+V.d[1],T+V.d[2]);if(_===It.WATER){if(L!==It.AIR)return}else if(L&&L!==It.WATER&&!(Za(L)&&!Za(_)))return;if(Za(_)&&Za(L))return;let I=_===It.WATER?i:e,[O,A,w,F]=nd(E[V.s]),j=V.v.map(([q,Y,xt])=>[x+q,m+(_===It.WATER&&Y===1?r:Y),T+xt]),B=V.b*v,G=V.d[1]!==0?[[O,A],[w,A],[w,F],[O,F]]:[[O,A],[O,F],[w,F],[w,A]];[0,1,2,0,2,3].forEach(q=>{I.p.push(...j[q]),I.n.push(...V.d),I.u.push(...G[q]),I.c.push(B,B,B)})})}let o=f=>{let d=new Oe;return d.setAttribute("position",new ue(f.p,3)),d.setAttribute("normal",new ue(f.n,3)),d.setAttribute("uv",new ue(f.u,2)),d.setAttribute("color",new ue(f.c,3)),d},a=Ly(),c=new At(o(e),new xe({map:a,vertexColors:!0}));c.castShadow=!0,c.receiveShadow=!0,c.userData.keepBatch=!0;let l=new At(o(i),new xe({map:a,vertexColors:!0,transparent:!0,opacity:.8,depthWrite:!1}));l.receiveShadow=!0,l.userData.keepBatch=!0,l.renderOrder=1;let h={p:[],n:[],u:[],c:[]};this.plants.forEach(([f,d,g,_,x])=>{let[m,T,E,v]=nd(_),V=.9*x,L=.45*x;[[[-L,-L],[L,L]],[[-L,L],[L,-L]]].forEach(([[I,O],[A,w]])=>{let F=[[f+I,d,g+O],[f+A,d,g+w],[f+A,d+V,g+w],[f+I,d+V,g+O]],j=[[m,T],[E,T],[E,v],[m,v]];[0,1,2,0,2,3].forEach(B=>{h.p.push(...F[B]),h.n.push(0,1,0),h.u.push(...j[B]),h.c.push(1,1,1)})})});let u=new At(o(h),new xe({map:a,vertexColors:!0,alphaTest:.5,side:gn}));return u.userData.keepBatch=!0,{solid:c,water:l,plants:u}}};function Mr(n,t,e,i,s,r){let o={oak:[It.LEAF_G,It.LEAF_L][r()*2|0],birch:It.LEAF_L,mint:It.LEAF_M,cherry:It.LEAF_P,pine:It.LEAF_T}[s]||It.LEAF_G,a=s==="birch"?It.BIRCH:It.LOG,c=(h,u,f,d)=>{n.get(h,u,f)||n.set(h,u,f,d)};if(s==="pine"){let h=6+(r()*3|0);for(let f=0;f<h;f++)n.set(t,e+f,i,It.LOG);let u=2;for(let f=2;f<=h;f++){let d=f===h?0:(h-f)%2===0?Math.max(1,u-1):u;for(let g=-d;g<=d;g++)for(let _=-d;_<=d;_++)Math.abs(g)+Math.abs(_)<=d+(d>1?0:1)&&!(g===0&&_===0&&f<h)&&c(t+g,e+f,i+_,o);f%2===0&&u>1&&f>h/2&&u--}c(t,e+h,i,o),c(t,e+h+1,i,o);return}let l=(s==="birch"?5:4)+(r()*2|0);for(let h=0;h<l;h++)n.set(t,e+h,i,a);for(let h=l-2;h<=l+1;h++){let u=h>=l?1:2;for(let f=-u;f<=u;f++)for(let d=-u;d<=u;d++)u===2&&Math.abs(f)===2&&Math.abs(d)===2&&r()<.75||h===l+1&&Math.abs(f)+Math.abs(d)>1||c(t+f,e+h,i+d,o)}}function rd(n,t,e,i){let s=n.attributes.uv,r=[[i,e],[i,e],[t,i],[t,i],[t,e],[t,e]];for(let o=0;o<6;o++)for(let a=0;a<4;a++){let c=o*4+a;s.setXY(c,s.getX(c)*r[o][0],s.getY(c)*r[o][1])}return s.needsUpdate=!0,n}var vr=16,To=n=>{if(typeof n=="number")return n;if(!n)return 16777215;if(n[0]==="#")return parseInt(n.length===4?n.slice(1).split("").map(e=>e+e).join(""):n.slice(1,7),16);let t=n.match(/(\d+)\D+(\d+)\D+(\d+)/);return t?+t[1]<<16|+t[2]<<8|+t[3]:16777215},_i=(n,t)=>{n=To(n);let e=i=>Math.max(0,Math.min(255,Math.round(i*t)));return e(n>>16&255)<<16|e(n>>8&255)<<8|e(n&255)},es=(n,t,e)=>{let i=n*374761393+t*668265263+e*2147483647|0;return i=(i^i>>>13)*1274126177,((i^i>>>16)>>>0)/4294967296};function Uy(){let n=new Map,t=new Map,e=(s,r,o)=>s+","+r+","+o,i={S:n,G:t,put(s,r,o,a,c){s=Math.round(s),r=Math.round(r),o=Math.round(o),!(r<0)&&(c&&n.has(e(s,r,o))||((c?t:n).set(e(s,r,o),To(a)),c||t.delete(e(s,r,o))))},del(s,r,o){n.delete(e(s,r,o)),t.delete(e(s,r,o))},has(s,r,o){return n.has(e(s,r,o))},each(s){for(let r=0;r<20;r++)for(let o=-2;o<vr+2;o++)for(let a=-2;a<vr+2;a++)s(a,r,o)},fill(s,r,o){i.each((a,c,l)=>{s(a+.5,c+.5,l+.5)&&i.put(a,c,l,typeof r=="function"?r(a,c,l):r,o)})},cuboid(s,r,o,a,c,l,h,u){for(let f=r;f<c;f++)for(let d=o;d<l;d++)for(let g=s;g<a;g++)i.put(g,f,d,typeof h=="function"?h(g,f,d):h,u)},cyl(s,r,o,a,c,l,h,u,f){h=h==null?o:h;for(let d=a;d<c;d++){let g=c-a<=1?o:o+(h-o)*(d-a)/(c-a-1);for(let _=-2;_<vr+2;_++)for(let x=-2;x<vr+2;x++){let m=Math.hypot(x+.5-s,_+.5-r);m<=g&&(!u||m>g-u)&&i.put(x,d,_,typeof l=="function"?l(x,d,_):l,f)}}},ell(s,r,o,a,c,l,h,u){i.fill((f,d,g)=>{let _=(f-s)/a,x=(d-r)/c,m=(g-o)/l;return _*_+x*x+m*m<=1&&(!u||u(f,d,g))},h)},log(s,r,o,a,c,l){for(let h=s;h<r;h++)for(let u=0;u<20;u++)for(let f=-2;f<vr+2;f++)Math.hypot(u+.5-o,f+.5-a)<=c&&i.put(h,u,f,typeof l=="function"?l(h,u,f):l)},top(s,r){for(let o=19;o>=0;o--)if(i.has(s,o,r))return o;return-1},sprinkle(s,r,o,a){s.forEach(([c,l],h)=>{let u=r[h%r.length];if(!u)return;let f=-1;for(let d=0;d<(a||o||1);d++)for(let g=0;g<(o||1);g++)f=Math.max(f,i.top(c+g,l+d));for(let d=0;d<(a||o||1);d++)for(let g=0;g<(o||1);g++)i.put(c+g,f+1,l+d,u)})}};return i}var lt=8,Lh=[[4,5],[9,4],[6,9],[10,9],[3,8],[8,11],[11,6],[5,12]],od={bowl(n,t){n.cyl(lt,lt,3.2,0,1,14930886),n.cyl(lt,lt,3.2,1,2,16777215),n.cyl(lt,lt,3.8,2,6,t.soup||"#f3d9a8",6.2),n.cyl(lt,lt,4.2,1,7,(e,i)=>i===6?16165309:_i(16777215,.93+i*.012),7.6,1.2),t.noodle&&n.fill((e,i,s)=>i>5&&i<6.9&&Math.hypot(e-lt,s-lt)<5.6&&(Math.floor(e)+Math.floor(s)*2)%5===0,t.noodle),n.sprinkle(Lh.slice(0,6),t.top||[],2,2),t.egg&&(n.cuboid(9,6,9,12,7,11,16777215),n.put(10,7,10,16761402))},pot(n,t){n.cyl(lt,lt,6.8,0,6,(e,i)=>i===5?10132136:9079448,6.8,1.1),n.cyl(lt,lt,6,0,1,7631999),n.cyl(lt,lt,5.8,1,5,t.soup||"#e8603f"),n.cuboid(0,4,7,1,5,9,7631999),n.cuboid(15,4,7,16,5,9,7631999),n.sprinkle(Lh,t.top||[],2,1)},plate(n,t){n.cyl(lt,lt,6.4,0,1,15260879),n.cyl(lt,lt,7.8,1,2,16777215),n.cyl(lt,lt,6.2,1,2,16183014),t.rice&&n.ell(t.main?5.5:lt,2,lt,t.main?3.6:5,2.8,t.main?4.2:4.6,(e,i,s)=>_i(t.rice,.94+es(e,i,s)*.1),(e,i)=>i>=2),t.sauce&&n.cyl(t.rice?10.5:lt,lt,t.rice?3.4:5.2,2,3,t.sauce),t.main&&(n.cuboid(8,2,5,13,4,11,t.main),n.cuboid(8,4,5,13,5,11,_i(t.main,1.2))),t.egg&&(n.cyl(4.5,11.5,2.4,2,3,16777215),n.put(4,3,11,16761402)),t.veg&&(n.cuboid(11,2,11,14,3,13,t.veg),n.put(12,3,12,_i(t.veg,.8))),n.sprinkle(Lh,t.dots||[],2,2)},bread(n){n.ell(lt,2.6,lt,7.2,2.6,2.8,15250538,(t,e)=>e>=0);for(let t=3;t<13;t++)for(let e=3;e<6;e++)for(let i=7;i<9;i++)n.del(t,e,i);for(let t=3;t<13;t++)n.put(t,3,7,["#ff8f7a","#7fc46a","#b5654a","#ffb3a3"][(t>>1)%4]),n.put(t,3,8,t%2?"#7fc46a":"#f6e0b8");[3,6,9,12].forEach(t=>{let e=n.top(t,6);n.put(t,e,6,13208126)})},xeo(n){n.fill((t,e,i)=>e<3&&i>=lt&&Math.hypot(t-lt,i-lt)<=7.2-(e>2?1:0),(t,e,i)=>Math.hypot(t-lt,i-lt)>6.3?14262842:e===2?16767338:16172618),[[5,"#ff9f8f"],[7,"#7fc46a"],[9,"#ffffff"],[11,"#7fc46a"]].forEach(([t,e])=>{n.put(t,0,7,e),n.put(t,1,7,e)})},rolls(n,t){n.cyl(lt,lt,7.6,0,1,16777215),[4,8,12].forEach(e=>n.log(2,14,2.6,e,1.7,(i,s,r)=>i===13||i===2?To(t.edge):t.fill&&es(i,s,r)>.86?To(t.fill[(i+s)%2]):_i(t.roll,.95+es(i,s,r)*.12)))},bun(n,t){n.ell(lt,0,lt,6.2,6,6.2,(e,i,s)=>i>4&&Math.hypot(e-lt,s-lt)<1.8?14204580:t.bun,(e,i)=>i>=0),n.cyl(lt,lt,5,0,1,14930886)},skewer(n,t){n.cuboid(0,3,7,16,4,8,12883572),(t.bits||[]).forEach((e,i)=>n.cuboid(2+i*3,1,5,4+i*3+i%2,6,10,(s,r)=>r===5?_i(e,1.2):e))},corn(n){n.log(2,13,2.8,lt,2.4,(t,e,i)=>(t+e+i)%2?16765803:15906874),n.cuboid(13,1,7,16,4,9,12883572),n.cuboid(5,0,3,13,1,6,8373354),n.cuboid(5,0,10,13,1,13,8373354),n.cuboid(6,1,4,11,2,5,6989914)},potato(n){n.ell(lt,2.4,lt,6.5,2.6,3.6,10111578,(t,e)=>e>=0);for(let t=4;t<13;t++)for(let e=7;e<10;e++){let i=n.top(t,e);n.put(t,i,e,16167770)}n.put(4,3,6,6961728),n.put(12,2,10,6961728)},sushi(n,t){[[2,4],[9,9]].forEach(([e,i])=>{n.cuboid(e,0,i,e+5,3,i+3,(s,r,o)=>_i(16777215,.93+es(s,r,o)*.08)),n.cuboid(e-1,3,i,e+6,4,i+3,t.fish||"#ff9f80"),n.cuboid(e,4,i,e+5,5,i+3,_i(t.fish||"#ff9f80",1.12)),n.cuboid(e+2,0,i-1,e+3,5,i+4,3820090),n.cuboid(e+2,5,i,e+3,6,i+3,3820090)})},onigiri(n){n.fill((t,e,i)=>e<11&&i>5&&i<11&&Math.abs(t-lt)<=(11.5-e)*.55,(t,e,i)=>_i(16777215,.94+es(t,e,i)*.07)),n.cuboid(5,0,5,11,4,12,3820090)},balls(n,t){n.cyl(lt,lt,7.4,0,1,16777215),[[4,6],[9,5],[12,10],[6,11],[9,9]].forEach(([e,i])=>{n.ell(e,2.6,i,2.3,2.1,2.3,t.ball||"#d99a4e",(s,r)=>r>=1),n.put(e,4,i,t.sauce||"#7a3f2c"),n.put(e-1,4,i,t.sauce||"#7a3f2c"),n.put(e,5,i,8373354)})},kimbap(n){n.cyl(lt,lt,7.4,0,1,16777215),[[4,5],[11,6],[7,11]].forEach(([t,e])=>{n.cyl(t,e,2.8,1,4,3095088),n.cyl(t,e,2.1,1,4,16777215),n.put(t,3,e,16765803),n.put(t-1,3,e,16748378),n.put(t,3,e-1,8373354)})},dumpling(n){[[4,5],[11,6],[7,11]].forEach(([t,e],i)=>{n.ell(t,.5,e,3.6,2.6,2.4,(s,r)=>r===0?14921834:r>=2&&(s+i)%2?15259320:16313560,(s,r)=>r>=0)})},pizza(n){n.fill((t,e,i)=>e<2&&i>2&&Math.abs(t-lt)<=(15-i)*.55,(t,e)=>e===1?16765803:15250538),n.cuboid(1,0,1,15,3,3,14260814),n.cuboid(2,3,1,14,4,3,15250538),[[6,5],[9,6],[7,9],[8,12]].forEach(([t,e])=>n.cuboid(t,2,e,t+2,3,e+2,14241850)),[[5,7],[10,9],[8,4]].forEach(([t,e])=>n.put(t,2,e,8373354))},burger(n){n.cyl(lt,lt,6.2,0,2,15246666),n.cyl(lt,lt,6.6,2,3,8373354),n.cyl(lt,lt,6.4,3,5,8011564),n.cuboid(2,5,2,14,6,14,16765803),n.cyl(lt,lt,5.6,6,7,15224895),n.ell(lt,7,lt,6.4,4.6,6.4,15246666,(t,e)=>e>=7),[[5,6],[9,5],[7,9],[10,9],[6,11]].forEach(([t,e])=>n.put(t,n.top(t,e)+1,e,16774102))},fries(n){[[4,6],[6,8],[8,6],[10,8],[5,9],[9,9],[7,7],[11,6]].forEach(([t,e],i)=>n.cuboid(t,4,e,t+1,11+i%3,e+1,(s,r)=>r>=10+i%3?15906874:16765803)),n.cyl(lt,lt,4.6,0,9,15224895,5.4),n.cuboid(6,3,12,10,6,13,16777215)},drumstick(n){n.ell(6,3.6,lt,4.8,3.6,3.8,(t,e)=>e>5?15250538:14260814,(t,e)=>e>=0),n.log(10,14,3,lt,1.1,16775406),n.ell(14.2,3.4,7,1.4,1.4,1.4,16775406),n.ell(14.2,3.4,9,1.4,1.4,1.4,16775406)},hotdog(n){n.ell(lt,2,lt,7.2,2.4,3.4,15250538,(t,e,i)=>e>=0&&!(e>2&&Math.abs(i-lt)<1.2)),n.log(0,16,3.2,lt,1.6,14241850);for(let t=2;t<14;t++)n.put(t,5,lt-1+(t>>1)%2,16765803)},flan(n){n.cyl(lt,lt,7.4,0,1,16777215),n.cyl(lt,lt,5.4,1,7,(t,e)=>e===6?9062954:16767114,4.2),[[4,8],[11,7],[8,4],[7,12]].forEach(([t,e])=>{n.put(t,5,e,9062954),n.put(t,4,e,9062954)})},glass(n,t){n.cyl(lt,lt,3.6,0,13,15267583,3.6,.9,!0),n.cyl(lt,lt,3.6,0,1,13165810);let e=1;(t.layers||[]).forEach(i=>{n.cyl(lt,lt,2.8,e,e+3,i),e+=3}),n.cyl(lt,lt,2.8,e,e+1,t.top||"#ffffff"),n.cuboid(9,6,8,10,16,9,16748464)},cone(n,t){n.cyl(lt,lt,.8,0,8,(e,i,s)=>(e+i+s)%2?15250538:14260814,3.4),n.ell(lt,10.5,lt,4.4,4,4.4,t.scoop||"#ffb6d0"),n.put(lt,15,lt,15224895),n.put(lt,14,lt,15224895)},cake(n){n.cyl(lt,lt,6.2,0,6,(t,e,i)=>Math.hypot(t+.5-lt,i+.5-lt)>5.3&&(e===2||e===4)?16752575:16774112),n.cyl(lt,lt,6.4,6,7,16777215);for(let t=0;t<8;t++){let e=t/8*Math.PI*2;n.put(lt+Math.cos(e)*5,7,lt+Math.sin(e)*5,16777215)}n.cuboid(7,7,7,9,9,9,15224895),n.put(8,9,8,8373354)},donut(n){n.fill((t,e,i)=>{let s=Math.hypot(t-lt,i-lt);return e<4&&(s-4.4)**2+(e-1.6)**2<=2.9**2},(t,e)=>e>=2?16752575:15250538),[[4,6,16777215],[11,6,10473471],[6,11,16765803],[11,10,16777215],[8,3,10473471]].forEach(([t,e,i])=>n.put(t,n.top(t,e)+1,e,i))},cookie(n){n.cyl(lt,lt,6.6,0,2,(t,e,i)=>_i(15250538,.95+es(t,e,i)*.1)),n.cyl(lt,lt,5,2,3,15250538),[[5,6],[9,5],[7,9],[11,9],[5,11],[9,12]].forEach(([t,e])=>n.put(t,n.top(t,e),e,6961706))},mochi(n){n.cuboid(1,0,3,15,1,13,14207160),[[5,9,16765414],[11,9,13495501],[8,5,16774880]].forEach(([t,e,i])=>n.ell(t,1,e,3.2,3,3.2,i,(s,r)=>r>=1))},cup(n,t){n.cyl(lt,lt,3.2,0,12,15792383,3.9,.9,!0),n.cyl(lt,lt,3.2,0,1,13690610),n.cyl(lt,lt,2.4,1,10,t.drink||"#d9b08a",3),t.cream&&n.cyl(lt,lt,3,10,12,16777215),t.boba&&[[6,7],[8,9],[10,8],[7,10],[9,6]].forEach(([e,i])=>n.put(e,1,i,3811882)),t.ice&&[[6,7],[9,9]].forEach(([e,i])=>n.cuboid(e,9,i,e+2,11,i+2,16777215,!0)),t.slice&&n.fill((e,i,s)=>e>11&&e<13&&Math.hypot(i-11,s-lt)<2.4,(e,i,s)=>Math.hypot(i-11,s-lt)>1.6?16777215:To(t.slice)),n.cyl(lt,lt,4.2,12,13,14215410,4.2,.9,!0),n.cuboid(9,6,8,10,17,9,16748464)},coconut(n){n.ell(lt,4.6,lt,5.8,5,5.8,(t,e,i)=>es(t,e,i)>.85?6989914:8373354,(t,e)=>e>=0&&e<9),n.cyl(lt,lt,3.2,8,9,16775920),n.cuboid(9,8,8,10,14,9,16748464)},mug(n,t){n.cyl(lt-1,lt,4.2,0,9,16777215,4.2,1),n.cyl(lt-1,lt,4.2,0,1,15128780),n.cyl(lt-1,lt,3.2,1,8,t.drink||"#c98a4a"),n.cuboid(11,2,7,13,3,9,16777215),n.cuboid(11,6,7,13,7,9,16777215),n.cuboid(12,3,7,13,6,9,16777215),[[6,10],[8,12],[7,14]].forEach(([e,i])=>n.put(e,i,lt,16777215,!0))}},Ny=[[[1,0,0],[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],.86],[[-1,0,0],[[0,0,1],[0,1,1],[0,1,0],[0,0,0]],.86],[[0,1,0],[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],1],[[0,-1,0],[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],.6],[[0,0,1],[[1,0,1],[1,1,1],[0,1,1],[0,0,1]],.93],[[0,0,-1],[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],.93]];function ad(n,t,e,i){let s=[],r=[],o=[],a=[],c=new se;n.forEach((h,u)=>{let[f,d,g]=u.split(",").map(Number),_=.94+es(f,d,g)*.1;Ny.forEach(([x,m,T])=>{let E=f+x[0]+","+(d+x[1])+","+(g+x[2]);if(n.has(E)||t&&t.has(E))return;c.setHex(h,Pe);let v=s.length/3;m.forEach(([V,L,I])=>{s.push((f+V-lt)*e,(d+L)*e,(g+I-lt)*e),r.push(x[0],x[1],x[2]),o.push(c.r*T*_,c.g*T*_,c.b*T*_)}),a.push(v,v+1,v+2,v,v+2,v+3)})});let l=new Oe;return l.setAttribute("position",new ue(s,3)),l.setAttribute("normal",new ue(r,3)),l.setAttribute("color",new ue(o,3)),l.setIndex(a),new At(l,i)}var Oy=new xe({vertexColors:!0}),Fy=new xe({vertexColors:!0,transparent:!0,opacity:.42,depthWrite:!1}),Dh={};function Ao(n,t,e){let i=n+JSON.stringify(t||{});if(!Dh[i]){let c=Uy();(od[n]||od.bowl)(c,t||{}),Dh[i]=c}let s=Dh[i],r=(e||.4)/vr,o=new Zt,a=ad(s.S,null,r,Oy);if(a.castShadow=!0,o.add(a),s.G.size){let c=ad(s.G,s.S,r,Fy);c.renderOrder=2,o.add(c)}return o}var By={land:{W:320,H:236,houses:[[16,116],[52,116],[88,116],[124,116],[172,116],[208,116],[244,116],[16,150],[52,150],[192,23],[66,24],[88,150],[124,150],[16,186],[52,186],[88,186],[124,187],[180,152]],hall:[134,38],pond:[264,206],pondR:[8,4],hill:{x:160,y:46,w:216,h:74,r:12,height:3},ramp:{x:160,from:83,to:110.5},lot:{house:9,x0:172,y0:12,x1:258,y1:66,car:[226,54.4],swing:[186,40]},roads:[[8,110.5,312,110.5],[8,144.5,312,144.5],[8,180.5,206,180.5],[8,214.5,170,214.5],[46,110.5,46,214.5],[160,110.5,160,214.5],[64,70,258,70],[160,70,160,110.5]],river:[[292,30],[296,70],[292,110.5],[288,144.5],[282,175],[272,194]],mountains:[[-22,-32.5,5,11],[-8,-34.5,6,14],[8,-34.5,5.5,12],[22,-32,5,11],[33,-26,4.5,9]]},port:{W:200,H:360,houses:[[8,132],[8,184],[8,236],[8,288],[168,132],[168,184],[168,236],[168,288],[56,134],[132,51],[16,56],[88,134],[120,134],[56,186],[88,186],[120,186],[60,239],[116,239]],hall:[68,30],pond:[100,318],pondR:[6.5,3.6],hill:{x:100,y:52,w:184,h:96,r:12,height:3},ramp:{x:100,from:100,to:124.5},lot:{house:9,x0:110,y0:40,x1:186,y1:90,car:[166,81.6],swing:[122,66]},roads:[[44.5,124.5,155.5,124.5],[44.5,124.5,44.5,330],[155.5,124.5,155.5,312],[44.5,162.5,155.5,162.5],[44.5,214.5,155.5,214.5],[44.5,274.5,155.5,274.5],[16,94,186,94],[100,94,100,124.5]],river:[[206,24],[210,120],[206,230],[200,300],[170,330],[128,322]],mountains:[[-16,-48.5,4.5,10],[-2,-49.5,5,12],[12,-49,4.5,11],[24,-45.5,4,9]]}},Ne,je,Tn,ne,zn,yn,Ds,Jn,Zn,Is,Sr,Rn,Bn;function gd(n){Ne=By[n];let t=(o,a)=>[(o-Ne.W/2)/4,(a-Ne.H/2)/4];je=Ne.houses.map(([o,a])=>t(o+12,a+11)),Tn=t(Ne.hall[0],Ne.hall[1]);let e=t(Ne.pond[0],Ne.pond[1]);ne={x:e[0],z:e[1],rx:Ne.pondR[0],rz:Ne.pondR[1]},zn=Ne.roads.map(([o,a,c,l])=>t(o,a).concat(t(c,l)));let i=t(Ne.hill.x,Ne.hill.y);Ds={x:i[0],z:i[1],hw:Ne.hill.w/8,hd:Ne.hill.h/8,r:Ne.hill.r/4,h:Ne.hill.height},Jn={x:t(Ne.ramp.x,0)[0],z0:t(0,Ne.ramp.from)[1],z1:t(0,Ne.ramp.to)[1],hw:1.1},Zn=Ne.river.map(([o,a])=>{let c=t(o,a);return{x:c[0],z:c[1]}}),Is=Ne.mountains.map(o=>[o[0],o[1],o[2]*1.25,o[3]*1.5]);{let o=Zn[0],a=0,c=1e9;Is.forEach(([g,_],x)=>{let m=Math.hypot(g-o.x,_-o.z);m<c&&(c=m,a=x)});let l=Is[a],h=Zn[1].x-l[0],u=Zn[1].z-l[1],f=Math.hypot(h,u)||1;Bn={i:a,x:l[0],z:l[1],r:l[2],h:l[3],dx:h/f,dz:u/f},Zn[0]={x:l[0]+Bn.dx*l[2]*.45,z:l[1]+Bn.dz*l[2]*.45};let d=Zn[Zn.length-1];Math.hypot(d.x-ne.x,d.z-ne.z)<22&&Zn.push({x:ne.x+(d.x-ne.x)*.25,z:ne.z+(d.z-ne.z)*.25})}if(Sr=je.map((o,a)=>Ne.faces&&Ne.faces[a]||0),Rn=null,Ne.lot){let o=Ne.lot,a=t(o.x0,o.y0),c=t(o.x1,o.y1);Rn={house:o.house,x0:a[0],z0:a[1],x1:c[0],z1:c[1],car:t(o.car[0],o.car[1]),swing:t(o.swing[0],o.swing[1])}}let s=Ne.W/8+11,r=Ne.H/8+11;yn={a:s,b:r,n:2.6,w:s*2,d:r*2}}function Qa(n,t){let e=Ds,i=Math.abs(n-e.x)-(e.hw-e.r),s=Math.abs(t-e.z)-(e.hd-e.r);return Math.hypot(Math.max(i,0),Math.max(s,0))+Math.min(Math.max(i,s),0)-e.r}var Co=(n,t)=>Math.abs(n-Jn.x)<Jn.hw&&t>=Jn.z0-.4&&t<=Jn.z1;function An(n,t){return Qa(n,t)<=0?Ds.h:Co(n,t)?Ds.h*Math.max(0,Math.min(1,1-(t-Jn.z0)/(Jn.z1-Jn.z0))):0}var Uh=(n,t,e)=>{let i=Qa(n,t);return i>-.5-(e||0)&&i<.9+(e||0)&&!Co(n,t)};function Ls(n,t){let e=1e9;for(let i=1;i<Zn.length;i++){let s=Zn[i-1],r=Zn[i],o=r.x-s.x,a=r.z-s.z,c=o*o+a*a,l=Math.max(0,Math.min(1,((n-s.x)*o+(t-s.z)*a)/(c||1)));e=Math.min(e,Math.hypot(n-(s.x+o*l),t-(s.z+a*l)))}return e}var cd=(n,t,e)=>!!Rn&&n>Rn.x0-(e||0)&&n<Rn.x1+(e||0)&&t>Rn.z0-(e||0)&&t<Rn.z1+(e||0),xd=3,zy=2.1,Hy=xd,yi=Hy/2;function wr(n,t){let e=yn,i=Math.abs(Math.cos(n)),s=Math.abs(Math.sin(n));return Math.pow(Math.pow(i/e.a,e.n)+Math.pow(s/e.b,e.n),-1/e.n)*(1+.035*Math.sin(3*n+.7)+.025*Math.sin(5*n+2.1)+.015*Math.sin(8*n))*(t||1)}function Ps(n,t,e){return Math.hypot(n,t)<wr(Math.atan2(t,n))-(e||0)}gd("land");var Mi={grass:12576420,grassSide:10474377,dirt:13214334,dirt2:11569768,road:15983293,wall:16774888,wall2:15785156,door:12882799,frame:15323828,trunk:11042910,leaf:[10147472,8834176,11460768],water:9425898,sand:15983549,lily:8701828,roof:{pink:16165309,peach:16368540,blue:10473444,lav:13219054,mint:10738109,yellow:16111752,hall:15834032},flower:[16758465,16777215,16375946,14273008,16763304]},Nh=new Map;function le(n,t){let e=n+JSON.stringify(t||{});if(!Nh.has(e)){let i=Object.assign({color:n},t||{});!("map"in i)&&!i.noMap&&(i.map=oi(dt.PLASTER)),delete i.noMap,Nh.set(e,new xe(i))}return Nh.get(e)}var Oh=new Map;function We(n,t,e){let i=n+":"+(t==null?"x":t)+JSON.stringify(e||{});return Oh.has(i)||Oh.set(i,new xe(Object.assign({map:oi(n),color:t==null?16777215:t},e||{}))),Oh.get(i)}var Fh=new Map;function _d(n,t,e){let i=n.toFixed(3)+","+t.toFixed(3)+","+e.toFixed(3);return Fh.has(i)||Fh.set(i,rd(new Be(n,t,e),n,t,e)),Fh.get(i)}function D(n,t,e,i,s=0,r=0,o=0,a){let c=new At(_d(n,t,e),a&&a.isMaterial?a:le(i,a));return c.position.set(s,r,o),c.castShadow=!0,c.receiveShadow=!0,c}function hn(n,t,e,i,s=0,r=0,o=0,a){let c=new At(new Be(n,t,e),a&&a.isMaterial?a:le(i,a));return c.position.set(s,r,o),c.castShadow=!0,c.receiveShadow=!0,c}function Bh(n){return()=>(n=n*1664525+1013904223>>>0,n/4294967296)}var Vt=(n,t)=>n+Math.random()*(t-n),Dn=(n,t,e)=>n+(t-n)*e,Fi=(n,t,e=0)=>((n-ne.x)/(ne.rx+e))**2+((t-ne.z)/(ne.rz+e))**2<1;var Wh=new $e({transparent:!0,opacity:0,depthWrite:!1}),Xh=[],tc=[];function nc(){let n=new xe({color:12576498,emissive:16765562,emissiveIntensity:0});return Xh.push(n),n}function ns(n){let t=new uo;t.moveTo(0,-.5),t.bezierCurveTo(-.9,.1,-.5,.75,0,.35),t.bezierCurveTo(.5,.75,.9,.1,0,-.5);let e=new Na(t,{depth:.18,bevelEnabled:!1,curveSegments:10});return new At(e,le(n,{emissive:n,emissiveIntensity:.25}))}function ky(n,t,e){let i=new Zt,s=We(dt.SHINGLE,e),r=We(dt.SPRUCE_PLANK),o=t+1.6,a=0;for(;;a++){let c=o-a,l=a*.5+.25;if(c<=.6)break;i.add(D(n+1,.5,1,0,0,l,c/2-.5,s)),i.add(D(n+1,.5,1,0,0,l,-c/2+.5,s)),c>2.2&&i.add(D(n+.2,.5,c-2,0,0,l,0,r))}return i.add(D(n+1.2,.35,.6,0,0,a*.5+.1,0,r)),i.userData.h=a*.5+.3,i}function Hh(){let n=new xe({color:16773576,emissive:16761963,emissiveIntensity:0,map:oi(dt.PLASTER)});tc.push(n);let t=new Zt;return t.add(D(.3,.32,.3,0,0,0,0,n)),t.add(D(.34,.08,.34,4864564,0,.2,0)),t.add(D(.08,.12,.08,4864564,0,.3,0)),t}function ld(n,t){let e=new Zt,i=t?10:5,s=t?7:4,r=t?4:3,o=t?Mi.roof.hall:Mi.roof[n.roof]||Mi.roof.pink,a=We(dt.STONE_BRICK),c=We(dt.COBBLE),l=We(dt.LOG),h=We(dt.PLANKS),u=We(dt.SPRUCE_PLANK);e.add(D(i+.5,.3,s+.5,0,0,.15,0,a)),e.add(D(i,.9,s,0,0,.3+.45,0,c)),e.add(D(i-.02,r-.9,s-.02,0,0,.3+.9+(r-.9)/2,0,t?We(dt.PLASTER,16774114):h));let f=t?[-i/2+.25,-2.6,2.6,i/2-.25]:[-i/2+.25,i/2-.25];[-1,1].forEach(I=>f.forEach(O=>e.add(D(.5,r,.5,0,O,.3+r/2,I*(s/2-.15),l)))),e.add(D(i+.3,.4,s+.3,0,0,.3+r-.2,0,u));let d=ky(i,s,o);d.position.y=.3+r,e.add(d);let g=d.userData.h,_=t?2:1,x=t?2.6:2,m=new Zt;m.position.set(-_/2,.3,s/2+.02),e.add(m),m.add(D(_,x,.12,0,_/2,x/2,0,u)),m.add(D(.12,.12,.08,16375946,_-.2,x/2,.08)),e.add(D(_-.04,x-.04,.05,4864560,0,.3+x/2,s/2-.02)),e.userData.hinge=m,e.add(D(_+1,.3,1,0,0,.15,s/2+.7,a)),e.add(D(_+1.2,.2,1,0,0,.3+x+.35,s/2+.5,u)),[-1,1].forEach(I=>{let O=Hh();O.position.set(I*(_/2+.4),.3+x-.2,s/2+.2),e.add(O)});let T=nc();T.map=oi(dt.GLASS),e.userData.wm=T;let E=.3+(t?2.3:1.75),v=t?[-3.6,-1.5,1.5,3.6]:[-1.55,1.55];if(v.forEach(I=>{e.add(D(1.2,1.1,.12,0,I,E,s/2+.02,u)),e.add(D(1,.9,.14,0,I,E,s/2+.04,T))}),[-1,1].forEach(I=>{e.add(D(.12,1.1,1.2,0,I*(i/2+.02),E,0,u)),e.add(D(.14,.9,1,0,I*(i/2+.04),E,0,T))}),t||(v.forEach(I=>{e.add(D(1.2,.3,.4,0,I,E-.7,s/2+.22,u)),[-.35,0,.35].forEach((O,A)=>e.add(D(.22,.22,.22,Mi.flower[A],I+O,E-.45,s/2+.22)))}),e.add(D(1,2,1,0,i/4,.3+r+g*.45,-s/5,c)),e.userData.chimney=new U(i/4,.3+r+g*.45+1.2,-s/5)),n&&n.heart){let I=ns(16744350);I.scale.setScalar(.9),I.position.set(0,.3+r+g*.42,s/2+.42),e.add(I),e.userData.heart=I}let V=null;if(t){[-1.5,1.5].forEach(A=>e.add(D(.6,r,.6,0,A,.3+r/2,s/2+.35,a))),e.add(D(i+.4,.4,1,0,0,.3+r+.1,s/2+.35,a)),e.add(D(.2,3,.2,0,0,.3+r+g+1.4,0,l));let I=D(1.4,.8,.08,16751536,.75,.3+r+g+2.4,0);e.add(I),e.userData.flag=I;let O=new xe({color:16375946,emissive:16739179,emissiveIntensity:0,map:oi(dt.PLASTER)});V=new At(_d(.7,.7,.7),O),V.position.set(0,.3+r+g*.42,s/2+.95),e.add(V),e.add(D(1.4,1.4,.1,0,0,.3+r+g*.42,s/2+.8,u))}e.userData.top=.3+r+g+(t?3.2:.6);let L=new At(new Be(i+.6,r+g+.3,s+.6),Wh);return L.position.y=(r+g+.3)/2,e.add(L),e.userData.pick=L,e.userData.bell=V,e.userData.doorZ=s/2+1.3,e}function kh(n,t,e){let i=document.createElement("canvas");i.width=t,i.height=e,n(i.getContext("2d"),t,e);let s=new cn(i);return s.colorSpace=Pe,s.anisotropy=4,s}function Yh(n,t,e,i,s,r){r=r||0,n.userData.wm=s,n.userData.top=i+.9,n.userData.size={cx:r,hw:t/2+.4,hd:e/2+.3};let o=new At(new Be(t+.6,i+.3,e+.6),Wh);return o.position.set(r,(i+.3)/2,0),n.add(o),n.userData.pick=o,n.userData.doorZ=e/2+1.3,n}function qh(n,t,e,i,s){let r=new Zt;r.position.set(-t/2,.3,i),n.add(r),r.add(D(t,e,.1,s,t/2,e/2,0)),r.add(D(.06,.5,.06,14278115,t-.2,e/2,.07)),n.add(D(t-.04,e-.04,.05,3814720,0,.3+e/2,i-.04)),n.userData.hinge=r}function Vy(){let n=new Zt,t=6.4,e=5.2,i=3,s=2.8,r=nc();n.add(D(t+5.4,.25,e+.6,15328478,2.3,.12,0)),n.add(D(t,i,e,16513784,0,.25+i/2,0)),[-2.15,2.15].forEach(_=>{n.add(D(1.7,2.45,.08,3814720,_,.25+1.3,e/2+.01)),n.add(D(1.55,2.3,.1,0,_,.25+1.3,e/2+.03,r))}),qh(n,1.15,2.3,e/2+.03,9067068),n.add(D(t+.3,.18,e+.3,4867664,0,.25+i+.09,0));let o=.25+i+.18,a=kh((_,x,m)=>{for(let T=0;T<x;T+=4)_.fillStyle=T%8?"#c99166":"#bb8358",_.fillRect(T,0,4,m)},64,16),c=new xe({map:a}),l=new At(new Be(t-.6,s,e-.4),c);l.position.set(-.3,o+s/2,-.4),l.castShadow=!0,l.receiveShadow=!0,n.add(l),n.add(D(t-.3,.16,e-.1,4867664,-.3,o+s+.08,-.4));let h=e/2-.4+.01-.2;n.add(D(2.9,2.35,.08,3814720,-.3,o+1.2,h+.02));let u=new At(new Be(2.7,2.2,.06),new xe({color:12576498,transparent:!0,opacity:.6,emissive:16765562,emissiveIntensity:0}));u.position.set(-.3,o+1.2,h+.06),n.add(u),Xh.push(u.material),n.add(D(.05,2.2,.08,3814720,-.3,o+1.2,h+.08)),n.add(D(t-.4,.14,1.5,15328478,-.2,o+.07,e/2+.55));let f=new At(new Be(t-.5,.75,.04),new xe({color:14217722,transparent:!0,opacity:.45}));f.position.set(-.2,o+.52,e/2+1.28),n.add(f),n.add(D(t-.5,.05,.07,3814720,-.2,o+.92,e/2+1.28)),[-2.5,-1.95,1.75,2.3].forEach((_,x)=>{n.add(D(.34,.32,.34,[15921906,9080729][x%2],_,o+.3,e/2+.95));let m=new At(new Oa(.26,2),le(Mi.leaf[x%3],{}));m.position.set(_,o+.62,e/2+.95),m.castShadow=!0,n.add(m)});let d=ns(16744350);d.scale.setScalar(.55),d.material=new xe({color:16744350,emissive:16732030,emissiveIntensity:.25}),d.position.set(-2.2,o+2.05,e/2-.55),n.add(d),n.userData.heart=d;let g=t/2+2.3;n.add(D(4.6,2.9,e,16513784,g,.25+1.45,0)),n.add(D(4.8,.16,e+.2,4867664,g,.25+2.98,0)),n.add(D(3.7,2.3,.08,5592926,g,.25+1.15,e/2+.02));for(let _=0;_<6;_++)n.add(D(3.7,.03,.1,7040630,g,.45+_*.38,e/2+.05));return n.add(D(.5,.05,.05,16777215,g+1.4,2.95,e/2+.12)),[-1,1].forEach(_=>n.add(D(.12,.85,.85,0,_*(t/2+.01)-(_>0,0),.25+1.6,-1.2,r))),n.userData.vip=!0,Yh(n,t+4.6,e,o+s+.2,r,2.3)}function Gy(){let n=new Zt,t=9.2,e=6.6,i=3.8,s=nc();n.add(D(t+.6,.25,e+.6,15326447,0,.12,0)),n.add(D(t,i,e,14273008,0,.25+i/2,0)),n.add(D(t+.4,.3,e+.4,16165309,0,.25+i+.15,0)),[-2.8,2.8].forEach(o=>{n.add(D(2.6,2,.1,16777215,o,1.5,e/2+.01)),n.add(D(2.4,1.8,.12,0,o,1.5,e/2+.03,s))}),qh(n,1.8,2.4,e/2+.03,15834032),[[-1.4,16773544],[0,16758465],[1.4,10934504]].forEach(([o,a])=>{let c=ns(a);c.scale.setScalar(.45),c.position.set(o,.25+i-.55,e/2+.02),n.add(c)});let r=new At(new ln(.55,20,14),le(16027569));return r.position.set(3.2,.25+i+2.2,-1.5),r.castShadow=!0,n.add(r),n.add(D(.18,1.6,.18,3814720,3.2,.25+i+1.2,-1.5)),n.add(D(1.6,.3,1.6,3814720,3.2,.25+i+.45,-1.5)),Yh(n,t,e,i+2.4,s)}function Wy(){let n=new Zt,t=9.2,e=7,i=3.5,s=nc();n.add(D(t+.8,.22,e+.8,14605012,0,.11,0)),n.add(D(t,i,e,16513784,0,.22+i/2,0)),[[15895592,0],[3055195,.22],[14826299,.44]].forEach(([l,h])=>{n.add(D(t+.06,.2,e+.06,l,0,.22+i-.55-h,0))}),n.add(D(t+.5,.25,e+.5,15921906,0,.22+i+.12,0));let r=kh((l,h,u)=>{l.fillStyle="#d8f1fa",l.fillRect(0,0,h,u);let f=["#ffb6c1","#f5d888","#a3d9bd","#a6d8e8","#f9c39c","#d9c9f0"];for(let d=0;d<4;d++){l.fillStyle="#c9e7f2",l.fillRect(0,12+d*28,h,3);for(let g=0;g<26;g++)l.fillStyle=f[(g+d)%f.length],l.fillRect(6+g*10,15+d*28,7,10+g%3*3)}},256,128),o=new xe({map:r,emissive:16773836,emissiveMap:r,emissiveIntensity:.1});[-2.65,2.65].forEach(l=>{n.add(D(3.4,2,.08,14605012,l,1.35,e/2+.01));let h=new At(new Be(3.2,1.85,.1),o);h.position.set(l,1.35,e/2+.03),n.add(h)}),qh(n,1.7,2.3,e/2+.03,12576498);let a=kh((l,h,u)=>{l.fillStyle="#ffffff",l.fillRect(0,0,h,u),l.fillStyle="#2e9e5b",l.fillRect(10,18,108,16),l.fillStyle="#f28c28",l.fillRect(10,40,108,16),l.fillStyle="#e23b3b",l.font="bold 86px sans-serif",l.textAlign="center",l.fillText("7",64,98),l.font="bold 20px sans-serif",l.fillText("ELEVEn",64,122)},128,128),c=new At(new Be(1.5,1.5,.14),[le(16777215),le(16777215),le(16777215),le(16777215),new xe({map:a}),le(16777215)]);return c.position.set(t/2-1.1,.22+i+1.05,e/2-.3),c.castShadow=!0,n.add(c),n.add(D(.12,.8,.12,14605012,t/2-1.1,.22+i+.35,e/2-.3)),[[15226446,-.5],[6131664,.45]].forEach(([l,h])=>{n.add(D(.8,1.8,.75,l,t/2+.45,1.12,e/2-1.2+h));let u=D(.04,.9,.55,0,t/2+.86,1.4,e/2-1.2+h,new xe({color:16775126,emissive:16773808,emissiveIntensity:.25}));n.add(u)}),[-4,-3.2].forEach(l=>n.add(D(.5,.5,.5,15895592,l,.47,e/2+.9))),n.userData.alwaysLit=!0,Yh(n,t,e,i+1.9,s)}function Xy(){let n=new Zt,t=2500653,e=14278115,i=5202805;n.add(D(1.9,1,4.4,t,0,.95,0)),n.add(D(1.75,.78,2.7,t,0,1.85,-.35)),[[-1,0],[1,0]].forEach(([o])=>n.add(D(.03,.55,2.4,i,o*.885,1.9,-.35))),n.add(D(1.6,.55,.03,i,0,1.9,1.01)),n.add(D(1.6,.55,.03,i,0,1.9,-1.71)),n.add(D(1.92,.06,4.42,e,0,1.46,0)),n.add(D(1.3,.35,.05,1776672,0,1.05,2.21));for(let o=-2;o<=2;o++)n.add(D(.03,.3,.06,e,o*.22,1.05,2.22));[-1,1].forEach(o=>{let a=new At(new He(.17,.17,.08,14),le(16775126,{emissive:16773808,emissiveIntensity:.35}));a.rotation.x=Math.PI/2,a.position.set(o*.72,1.12,2.22),n.add(a),n.add(D(.12,.12,.12,16754253,o*.95,1.5,1.95)),n.add(D(.22,.35,.05,14703183,o*.78,1,-2.22))}),n.add(D(1.94,.18,.2,1776672,0,.5,2.25)),n.add(D(1.94,.18,.2,1776672,0,.5,-2.25));let s=new At(new He(.4,.4,.24,16),le(1776672));s.rotation.x=Math.PI/2,s.position.set(0,1.15,-2.35),n.add(s);let r=new At(new He(.22,.22,.26,12),le(e));return r.rotation.x=Math.PI/2,r.position.set(0,1.15,-2.36),n.add(r),[[-.95,1.45],[.95,1.45],[-.95,-1.4],[.95,-1.4]].forEach(([o,a])=>{let c=new At(new He(.42,.42,.34,14),le(1776672));c.rotation.z=Math.PI/2,c.position.set(o,.42,a),c.castShadow=!0,n.add(c);let l=new At(new He(.22,.22,.36,10),le(e));l.rotation.z=Math.PI/2,l.position.set(o,.42,a),n.add(l)}),n.add(D(1.5,.05,2.2,3816514,0,2.27,-.35)),n}function Yy(n,t){if(!Rn)return{posts:[],blocks:[]};let e=Rn,i={posts:[],blocks:[]},[s,r]=je[e.house],[o,a]=e.car,c=t===Math.PI?e.z0:e.z1,l=An(s,r),h=[[s-1.2,s+1.2],[o-1.6,o+1.6]],u=(x,m)=>Math.abs(m-c)<.01&&h.some(([T,E])=>x>T&&x<E),f=(x,m,T,E)=>{let v=Math.hypot(T-x,E-m),V=Math.max(1,Math.round(v/1));for(let L=0;L<V;L++){let I=Dn(x,T,(L+.5)/V),O=Dn(m,E,(L+.5)/V);if(u(I,O))continue;let A=D(v/V+.02,.55,.22,16052716,I,l+.27,O);A.rotation.y=Math.atan2(T-x,E-m)+Math.PI/2,n.add(A);let w=D(v/V,.32,.3,8831614,I,l+.68,O);w.rotation.y=A.rotation.y,n.add(w),i.posts.push({x:I,z:O,r:.45})}};f(e.x0,e.z0,e.x1,e.z0),f(e.x1,e.z0,e.x1,e.z1),f(e.x1,e.z1,e.x0,e.z1),f(e.x0,e.z1,e.x0,e.z0),i.blocks.push({x:s+5.5,z:r,hw:2.5,hd:2.8});let d=Math.min(c,a)-1.5,g=Math.max(c,a)+.5;n.add(D(3.4,.05,Math.abs(g-d)+1.5,14144203,o,l+.025,(d+g)/2-.5));let _=Xy();return _.position.set(o,l,a),_.rotation.y=t,n.add(_),i.blocks.push({x:o,z:a,hw:1.2,hd:2.4}),i.car=_,i.exit={x:o,z:c+(t===Math.PI?-1.6:1.6)},n.add(D(1.3,.05,Math.abs(r-c),15392719,s,l+.03,(r+c)/2)),i}function qy(){let n=new Zt;n.add(D(.16,2.2,.16,9206379,0,1.1,0));let t=new xe({color:16774351,emissive:16765562,emissiveIntensity:0});return tc.push(t),n.add(D(.5,.5,.5,0,0,2.45,0,t)),n.add(D(.62,.12,.62,9206379,0,2.76,0)),n}var Zy=new xe({vertexColors:!0});function yd(n,t){let e=[];n.traverse(i=>{i.isMesh||e.push(i)}),e.forEach(i=>{let s=i.children.filter(c=>c.isMesh&&!(t&&t.includes(c))&&!c.material.transparent&&!c.material.map);if(s.length<2)return;let r=s.map(c=>{let l=c.geometry.clone();Object.keys(l.attributes).forEach(d=>{d!=="position"&&d!=="normal"&&l.deleteAttribute(d)}),l.index&&(l=l.toNonIndexed()),l.clearGroups(),c.updateMatrix(),l.applyMatrix4(c.matrix);let h=c.material.color,u=l.attributes.position.count,f=new Float32Array(u*3);for(let d=0;d<u;d++)f[d*3]=h.r,f[d*3+1]=h.g,f[d*3+2]=h.b;return l.setAttribute("color",new un(f,3)),l}),o=qa(r,!1);if(r.forEach(c=>c.dispose()),!o)return;s.forEach(c=>i.remove(c));let a=new At(o,Zy);a.castShadow=!0,a.receiveShadow=!0,i.add(a)})}function $a(n,t,e,i,s,r,o){let a=new Zt;a.position.set(s,r,o);let c=D(n,t,e,i,0,-t/2,0);return a.add(c),a}var ja=[{hair:5914688,skin:16768198,shirt:12824814,pants:6253194,style:"short",uniform:!0},{hair:3878703,skin:15976614,shirt:12824814,pants:6253194,style:"long",uniform:!0},{hair:11039050,skin:16769744,shirt:12824814,pants:6253194,style:"short",uniform:!0},{hair:3025462,skin:15580570,shirt:10738109,pants:6253178,style:"short"},{hair:2038564,skin:16768198,shirt:16758465,pants:9080760,style:"twin"},{hair:9067068,skin:16175024,shirt:16111752,pants:7170698,style:"cap",cap:15834032},{hair:4864570,skin:15317140,shirt:12824814,pants:6253194,style:"short",glasses:!0,uniform:!0},{hair:13208410,skin:16769744,shirt:10147472,pants:8161960,style:"long"},{hair:3878703,skin:15976614,shirt:12824814,pants:6253194,style:"bun",glasses:!0,uniform:!0},null,{hair:5914688,skin:15580570,shirt:14273008,pants:7170698,style:"long"},{hair:3025462,skin:16768198,shirt:16111752,pants:8161960,style:"bun"},{hair:9067068,skin:15976614,shirt:10473444,pants:6253178,style:"short",glasses:!0},{hair:3878703,skin:15317140,shirt:10738109,pants:7170698,style:"cap",cap:10738109},{hair:13208410,skin:16769744,shirt:13482478,pants:9080760,style:"twin"},{hair:2367010,skin:16175024,shirt:16368540,pants:8161960,style:"short"},{hair:5914688,skin:16768198,shirt:16758465,pants:7170698,style:"long"},{hair:2038564,skin:15580570,shirt:9226408,pants:5196378,style:"cap",cap:16165309},{hair:11039050,skin:16769744,shirt:16111752,pants:9075306,style:"bun"}],Vh={her:{hair:3877418,skin:16768198,shirt:16758465,pants:16758465,style:"long",dress:16165309},him:{hair:2367010,skin:15778976,shirt:10473444,pants:6253194,style:"short"}},hd=[{hair:3878703,skin:15976614,shirt:12824814,pants:6253194,style:"short",uniform:!0},{hair:9067068,skin:16769744,shirt:12824814,pants:6253194,style:"long",uniform:!0},{hair:2367010,skin:15317140,shirt:12824814,pants:6253194,style:"bun",uniform:!0}],Ie=1.75/32,Gh=12*Ie;function Er(n,t){let e=new se(n);return t&&(e.r=Math.min(1,e.r*t),e.g=Math.min(1,e.g*t),e.b=Math.min(1,e.b*t)),"#"+e.getHexString()}function Md(n,t){let e=document.createElement("canvas");e.width=e.height=64;let i=e.getContext("2d"),s=(n.hair^n.shirt^n.skin)>>>0,r=()=>(s=s*1664525+1013904223>>>0,s/4294967296),o=(_,x,m,T,E,v)=>{for(let V=0;V<T;V++)for(let L=0;L<m;L++)i.fillStyle=Er(E,1+(r()-.5)*(v==null?.1:v)),i.fillRect(_+L,x+V,1,1)},a=(_,x,m)=>{i.fillStyle=typeof m=="string"?m:Er(m),i.fillRect(_,x,1,1)},c=5981750,l=n.skin,h=n.hair,u=n.shirt,f=n.pants,d=n.style==="long"||n.style==="twin"||n.dress;o(0,0,32,16,l,.06),o(8,0,8,8,h),o(24,8,8,d?8:6,h),[0,16].forEach(_=>{o(_,8,8,d?7:4,h),o(_+(_?6:0),12,2,d?4:2,h)}),o(8,8,8,2,h),a(8,10,h),a(15,10,h),a(9,10,h),n.style==="cap"&&(o(8,0,8,8,n.cap),o(8,8,8,2,n.cap),o(0,8,8,2,n.cap),o(16,8,8,2,n.cap),o(24,8,8,2,n.cap)),[[9,12],[13,12]].forEach(([_,x])=>{if(t){a(_,x+1,"#3a2e33"),a(_+1,x+1,"#3a2e33");return}a(_,x,"#ffffff"),a(_+1,x,"#3a2e33"),a(_,x+1,"#ffffff"),a(_+1,x+1,"#3a2e33")}),a(9,14,"#ffa3b5"),a(14,14,"#ffa3b5"),a(11,14,Er(l,.78)),a(12,14,Er(l,.78)),a(11,15,"#c9707c"),a(12,15,"#c9707c"),n.glasses&&([9,13].forEach(_=>{["#6b5a4e"].forEach(x=>{a(_-1,12,x),a(_+2,12,x),a(_-1,13,x),a(_+2,13,x)})}),a(11,12,"#6b5a4e"),a(12,12,"#6b5a4e")),o(16,16,24,16,u),o(20,16,8,4,u,.05),o(23,20,2,1,l),n.uniform&&(o(22,20,4,1,16777215),o(21,22,2,2,16373355),o(20,31,8,1,9403592)),n.dress?(o(16,26,24,6,n.dress),o(20,25,8,1,Er(n.dress,.9)&&n.dress)):o(16,30,24,2,Er(f,.85)&&f,.05),o(20,22,8,1,u,.25),[[40,16],[32,48]].forEach(([_,x])=>{o(_,x,16,16,u),o(_,x+4+5,16,7,l,.06),o(_+4,x,4,4,u),o(_+8,x,4,4,l)}),[[0,16],[16,48]].forEach(([_,x])=>{o(_,x,16,16,n.dress?l:f),n.dress&&o(_,x+4,16,3,n.dress),o(_,x+4+10,16,2,c,.05),o(_+8,x,4,4,c)});let g=new cn(e);return g.magFilter=qe,g.minFilter=qe,g.generateMipmaps=!1,g.colorSpace=Pe,g}function br(n,t,e,i,s){let r=new Be(n*Ie,t*Ie,e*Ie),o=64,a=(h,u,f,d,g)=>{let _=h/o,x=(h+f)/o,m=1-u/o,T=1-(u+d)/o;return g?[x,m,_,m,x,T,_,T]:[_,m,x,m,_,T,x,T]},c=[a(i+e+n,s+e,e,t),a(i,s+e,e,t),a(i+e,s,n,e),a(i+e+n,s,n,e,!0),a(i+e,s+e,n,t),a(i+2*e+n,s+e,n,t)],l=r.attributes.uv;return c.forEach((h,u)=>{for(let f=0;f<4;f++)l.setXY(u*4+f,h[f*2],h[f*2+1])}),l.needsUpdate=!0,r}function vd(n){let t=new Zt,e={},i=new xe({map:Md(n)});e.mat=i,e.look=n;let s=(c,l,h,u)=>{let f=new At(c,i);return f.position.set(l,h,u),f.castShadow=!0,f.receiveShadow=!0,f},r=(c,l,h,u)=>{let f=new Zt;return f.position.set(c,l,h),f.add(u),f};e.legR=r(-2*Ie,12*Ie,0,s(br(4,12,4,0,16),0,-6*Ie,0)),t.add(e.legR),e.legL=r(2*Ie,12*Ie,0,s(br(4,12,4,16,48),0,-6*Ie,0)),t.add(e.legL),e.body=s(br(8,12,4,16,16),0,18*Ie,0),t.add(e.body),e.armR=r(-6*Ie,23.5*Ie,0,s(br(4,12,4,40,16),0,-5.5*Ie,0)),t.add(e.armR),e.armL=r(6*Ie,23.5*Ie,0,s(br(4,12,4,32,48),0,-5.5*Ie,0)),t.add(e.armL);let o=new Zt;o.position.y=24*Ie,t.add(o),e.head=o,o.add(s(br(8,8,8,0,0),0,4*Ie,0));let a=(c,l,h,u,f,d,g)=>{let _=hn(l*Ie,h*Ie,u*Ie,c,f*Ie,d*Ie,g*Ie);o.add(_)};if(n.style==="bun"&&a(n.hair,3,3,3,0,9.3,-2),n.style==="twin"&&(a(n.hair,2,4,2,-4.6,3.5,-1.5),a(n.hair,2,4,2,4.6,3.5,-1.5)),n.style==="cap"&&a(n.cap,8,1,3,0,6.5,5),n.style==="long"&&a(n.hair,8,5,1,0,-1.5,-4.5),n.dress){let c=hn(9*Ie,4*Ie,5*Ie,n.dress,0,12.5*Ie,0);t.add(c)}return{g:t,parts:e}}function Ky(){let n=new Zt,t={},e=16236938,i=14720350,s=16774118;n.add(hn(.46,.4,.8,e,0,.5,0)),[-.12,.1].forEach(l=>n.add(hn(.48,.06,.12,i,0,.71,l))),n.add(hn(.36,.2,.5,s,0,.34,.05)),t.legs=[[-.14,.28],[.14,.28],[-.14,-.28],[.14,-.28]].map(([l,h])=>{let u=$a(.13,.32,.13,e,l,.34,h);return n.add(u),u});let r=new Zt;r.position.set(0,.78,.48),n.add(r),t.head=r,r.add(hn(.5,.42,.42,e,0,0,0)),r.add(hn(.3,.16,.06,s,0,-.1,.21)),[-.15,.15].forEach(l=>{let h=new At(new ho(.11,.2,4),le(i));h.position.set(l,.29,-.02),h.rotation.y=Math.PI/4,r.add(h);let u=hn(.08,.1,.03,4010032,l*.8,.04,.215);r.add(u),(t.eyes=t.eyes||[]).push(u)}),r.add(hn(.07,.05,.03,16752048,0,-.04,.23));let o=new Zt;o.position.set(0,.62,-.38),n.add(o),t.tail=o;let a=hn(.1,.1,.4,e,0,.05,-.18);o.add(a);let c=new Zt;return c.position.set(0,.05,-.36),o.add(c),c.add(hn(.1,.4,.1,i,0,.18,0)),o.rotation.x=.5,n.scale.setScalar(.6),yd(n,t.eyes),{g:n,parts:t}}function Jy(){let n=new Zt,t={},e=16774374,i=13211247;n.add(hn(.56,.5,.95,e,0,.62,0)),n.add(hn(.58,.3,.4,i,0,.76,-.15)),t.legs=[[-.17,.33],[.17,.33],[-.17,-.33],[.17,-.33]].map(([o,a])=>{let c=$a(.16,.4,.16,e,o,.42,a);return n.add(c),c});let s=new Zt;s.position.set(0,.98,.55),n.add(s),t.head=s,s.add(hn(.56,.52,.5,e,0,0,0)),s.add(hn(.3,.24,.26,e,0,-.1,.34)),s.add(hn(.13,.1,.06,4010032,0,-.02,.48)),s.add(hn(.1,.12,.06,16748451,.05,-.24,.42)),[-.3,.3].forEach(o=>{let a=$a(.12,.42,.26,i,o,.2,-.02);a.rotation.z=o>0?-.15:.15,s.add(a);let c=hn(.08,.11,.03,4010032,o*.45,.08,.26);s.add(c),(t.eyes=t.eyes||[]).push(c)});let r=$a(.12,.42,.12,i,0,.82,-.47);return r.rotation.x=-.9,n.add(r),t.tail=r,n.scale.setScalar(.62),yd(n,t.eyes),{g:n,parts:t}}function $y(n){let t=new Zt,e=[16751211,16777215,16757575][n%3],i=new At(new ln(.28,10,8),le(e));if(i.scale.set(.7,.6,1.4),t.add(i),n%3===1){let r=new At(new ln(.16,8,6),le(16744272));r.position.set(0,.1,.05),r.scale.set(1,.6,1.4),t.add(r)}let s=new At(new ho(.22,.35,4),le(e===16777215?16751211:e));return s.rotation.x=Math.PI/2,s.position.z=-.5,t.add(s),t.userData.tail=s,t}function jy(n){let t=new Zt,e=new xe({color:n,side:gn}),i=()=>{let o=new At(new $i(.32,.26),e);o.position.x=.17;let a=new Zt;return a.add(o),a},s=i(),r=i();return r.scale.x=-1,t.add(s,r),t.userData.l=s,t.userData.r=r,t}function ud(){let n=new Zt,t=15392715,e=3.5,i=We(dt.LOG),s=We(dt.LEAF_P);n.add(D(1,e+1.5,1,0,-2,(e+1.5)/2,-.2,i)),n.add(D(3.2,.5,.5,0,-.4,e+.05,0,i)),[[-2,e+2.5,-.3,4,2,3],[-2,e+3.5,-.3,2,1,2],[-.6,e+1.6,-.6,2,1,2],[-3.4,e+1.6,-.2,1,1,2]].forEach(([c,l,h,u,f,d])=>n.add(D(u,f,d,0,c,l,h,s)));let r=new Zt;r.position.set(0,e-.2,0),n.add(r);let o=e-.2-.56;[-.72,.72].forEach(c=>r.add(D(.06,o,.06,t,c,-o/2,0)));let a=D(1.65,.12,.5,0,0,-o,0,We(dt.PLANK_GREY,16165309));return r.add(a),n.userData.pivot=r,n.userData.seat=a,n}var Zh=[];function fd(n,t){let e=document.createElement("canvas");e.width=e.height=16;let i=e.getContext("2d"),s=(h,u,f)=>{i.fillStyle=f,i.fillRect(h,u,1,1)},r=[];for(let h=0;h<9;h++)r.push([3+h,12-h]);let o=[];r.forEach(([h,u])=>{o.push([h,u,"#9a6a3e"],[h+1,u,"#6b4526"])}),[[12,2],[13,2],[13,3],[11,1],[12,1],[13,1],[14,1],[14,2],[14,3],[14,4],[10,2],[13,5]].forEach(([h,u])=>o.push([h,u,"#e6e6ee"])),[[12,3],[12,4],[11,3]].forEach(([h,u])=>o.push([h,u,"#b8b8c6"])),[[1,12],[2,11],[1,13],[2,14],[3,14],[1,11],[2,13],[4,14],[0,12],[3,15]].forEach(([h,u])=>o.push([h,u,"#ffffff"])),[[2,12],[3,13]].forEach(([h,u])=>o.push([h,u,"#f6a9bd"])),o.forEach(([h,u])=>{[[-1,0],[1,0],[0,-1],[0,1]].forEach(([f,d])=>s(h+f,u+d,"#4a3020"))}),o.forEach(([h,u,f])=>s(h,u,f));let a=new cn(e);a.magFilter=qe,a.minFilter=qe,a.colorSpace=Pe;let c=new ji(new Oi({map:a,transparent:!0,depthWrite:!1,depthTest:!1,rotation:n}));c.scale.set(t,t,1),c.renderOrder=5;let l=new U(Math.cos(n+Math.PI/4),Math.sin(n+Math.PI/4),0);return Zh.push({sp:c,dir:l,base:null}),c}function Qy(n){Zh.forEach(t=>{t.base||(t.base=t.sp.position.clone());let e=(Math.sin(n*4)*.5+.5)*.12;t.sp.position.set(t.base.x+t.dir.x*e,t.base.y+t.dir.y*e,t.base.z)})}function t1(n,t,e){let s=document.createElement("canvas"),r=s.getContext("2d");r.font="800 64px Nunito, sans-serif";let o=Math.ceil(r.measureText(n).width)+40;s.width=o,s.height=100;let a=s.getContext("2d");a.font="800 64px Nunito, sans-serif",a.textAlign="center",a.textBaseline="middle",a.lineJoin="round",a.fillStyle=t,a.fillText(n,o/2,s.height/2);let c=new cn(s);c.colorSpace=Pe;let l=new ji(new Oi({map:c,transparent:!0,depthWrite:!1,depthTest:!1}));return l.scale.set(e*o/s.height,e,1),l.renderOrder=5,l}function Ed(n,t,e,i){let s=document.createElement("canvas");s.width=128,s.height=64;let r=s.getContext("2d");r.font="bold 48px sans-serif",r.fillStyle=t,r.textAlign="center",r.fillText(n,64,50);let o=new ji(new Oi({map:new cn(s),transparent:!0,depthWrite:!1}));return o.scale.set(e,i,1),o.visible=!1,o}function dd(n,t){return Math.hypot((n-ne.x)/(ne.rx+4.4),(t-ne.z)/(ne.rz+4.4))<1&&!Fi(n,t,.4)}function e1(n){let t=new lo(Zn.map(o=>new U(o.x,0,o.z))),e=90,i=t.getSpacedPoints(e),s=new _n,r=[];return zn.forEach(([o,a,c,l])=>{let h=o===c;for(let u=0;u<i.length;u++){let f=i[u];!(h?Math.abs(f.x-o)<.95&&f.z>=Math.min(a,l)-.9&&f.z<=Math.max(a,l)+.9:Math.abs(f.z-a)<.95&&f.x>=Math.min(o,c)-.9&&f.x<=Math.max(o,c)+.9)||r.some(g=>Math.hypot(g.x-f.x,g.z-f.z)<3)||r.push({x:h?o:f.x,z:h?f.z:a,rot:h?0:Math.PI/2})}}),r.forEach(o=>n.add(bd(o.x,o.z,o.rot,3))),{curve:t,glints:[],ftex:s,foam:[],bridges:r,src:i[0]}}function bd(n,t,e,i){let s=new Zt;s.position.set(n,0,t),s.rotation.y=e;let r=We(dt.PLANKS),o=We(dt.LOG);return[0,.25,.5,.25,0].forEach((a,c)=>s.add(D(i,.5,1,0,0,a-.15,c-2,r))),[-1,1].forEach(a=>{[0,.25,.5,.25,0].forEach((c,l)=>{s.add(D(.25,.9,.25,0,a*(i/2-.12),c+.55,l-2,o)),l<4&&s.add(D(.12,.12,1,0,a*(i/2-.12),c+.85+(l<2?.12:-.12),l-1.5,r))})}),s}function n1(n,t){let e=ne,i=e.rx+2.6,s=e.rz+2.6,r=80,o=[],a=[],c={benches:[],ducks:[],posts:[]};for(let l=0;l<=r;l++){let h=l/r*Math.PI*2,u=Math.cos(h),f=Math.sin(h),d=e.x+u*(i-.75),g=e.z+f*(s-.75),_=e.x+u*(i+.75),x=e.z+f*(s+.75);if(o.push(d,.025,g,_,.025,x),l){let m=l*2;a.push(m-2,m,m-1,m-1,m,m+1)}}for(let l=0;l<r;l++){let h=l/r*Math.PI*2,u=e.x+Math.cos(h)*i,f=e.z+Math.sin(h)*s;if(Ls(u,f)<.6){n.add(bd(u,f,-h+Math.PI/2+Math.PI/2,1.5));break}}[.6,2.2,3.6,5].forEach((l,h)=>{let u=e.x+Math.cos(l)*(i+1.6),f=e.z+Math.sin(l)*(s+1.6);if(Ls(u,f)<2.2||!Ps(u,f,1.5))return;let d=new Zt;d.position.set(u,0,f),d.rotation.y=Math.atan2(e.x-u,e.z-f),d.add(D(1.5,.08,.45,12883572,0,.45,0)),d.add(D(1.5,.4,.07,12883572,0,.7,-.22)),[-.65,.65].forEach(g=>{d.add(D(.08,.45,.4,9206379,g,.22,0))}),n.add(d),c.posts.push({x:u,z:f,r:.9})});for(let l=0;l<7;l++){let h=l/7*Math.PI*2+.3,u=e.x+Math.cos(h)*(i+3.1),f=e.z+Math.sin(h)*(s+3.1);if(!(Ls(u,f)<2.4||!Ps(u,f,1.8))){n.add(D(2,.5,1,0,Math.floor(u)+.5,.25,Math.floor(f)+.5,We(dt.PLANKS)));for(let d=0;d<4;d++){let g=Math.floor(u)+.5+(d-1.5)*.45,_=Math.floor(f)+.5+(d%2?.15:-.15);n.add(D(.06,.35,.06,8173679,g,.65,_)),n.add(D(.22,.22,.22,Mi.flower[(l+d)%Mi.flower.length],g,.9,_))}c.posts.push({x:u,z:f,r:1})}}for(let l=0;l<2;l++){let h=new Zt;h.add(D(.5,.3,.7,16777215,0,.18,0)),h.add(D(.32,.3,.3,l?16777215:7317610,0,.45,.32)),h.add(D(.18,.08,.16,16098123,0,.42,.53)),[-.12,.12].forEach(u=>h.add(D(.05,.06,.03,3025462,u,.5,.47))),h.add(D(.2,.12,.2,15658734,0,.32,-.38)),h.scale.setScalar(.8),n.add(h),c.ducks.push({g:h,a:l*2.5,sp:l?-.12:.09})}return c}function i1(n){let t=[],e=[],i=(u,f)=>u.toFixed(2)+","+f.toFixed(2),s=new Map,r=(u,f)=>{let d=i(u,f);return s.has(d)||(s.set(d,t.length),t.push({x:u,z:f}),e.push([])),s.get(d)},o=(u,f)=>{if(u===f)return;let d=Math.hypot(t[u].x-t[f].x,t[u].z-t[f].z);e[u].push([f,d]),e[f].push([u,d])},a=zn.map(()=>[]);zn.forEach((u,f)=>{a[f].push([u[0],u[1]],[u[2],u[3]])}),zn.forEach((u,f)=>zn.forEach((d,g)=>{if(f>=g)return;let _=u[0]===u[2],x=d[0]===d[2];if(_===x)return;let m=_?u:d,T=_?d:u,E=m[0],v=T[1];E>=Math.min(T[0],T[2])-.01&&E<=Math.max(T[0],T[2])+.01&&v>=Math.min(m[1],m[3])-.01&&v<=Math.max(m[1],m[3])+.01&&(a[f].push([E,v]),a[g].push([E,v]))}));let c=n.map(u=>{let f=null;zn.forEach((g,_)=>{let x=g[0]===g[2],m=x?g[0]:Math.max(Math.min(g[0],g[2]),Math.min(Math.max(g[0],g[2]),u.x)),T=x?Math.max(Math.min(g[1],g[3]),Math.min(Math.max(g[1],g[3]),u.z)):g[1],E=Math.hypot(m-u.x,T-u.z);(!f||E<f.dist)&&(f={i:_,x:m,z:T,dist:E})}),a[f.i].push([f.x,f.z]);let d=r(u.x,u.z);return o(d,r(f.x,f.z)),d});a.forEach((u,f)=>{let d=zn[f][0]===zn[f][2];u.sort((g,_)=>d?g[1]-_[1]:g[0]-_[0]);for(let g=1;g<u.length;g++)o(r(u[g-1][0],u[g-1][1]),r(u[g][0],u[g][1]))});function l(u,f){let d=t.map(()=>1/0),g=t.map(()=>-1),_=t.map(()=>!1);for(d[u]=0;;){let m=-1;for(let T=0;T<t.length;T++)!_[T]&&(m<0||d[T]<d[m])&&(m=T);if(m<0||d[m]===1/0||m===f)break;_[m]=!0,e[m].forEach(([T,E])=>{d[m]+E<d[T]&&(d[T]=d[m]+E,g[T]=m)})}let x=[];for(let m=f;m>=0;m=g[m])x.unshift(t[m]);return x.length&&x[0]===t[u]?x:[t[f]]}function h(u,f){let d=0,g=1/0;return t.forEach((_,x)=>{let m=Math.hypot(_.x-u,_.z-f);m<g&&(g=m,d=x)}),d}return{nodes:t,doorNodes:c,path:l,nearest:h}}var Ka=[[0,4870304,12633855,.8,1.35,1],[5,5199526,12633855,.8,1.35,1],[6,16305590,16763296,1.3,1.1,.4],[7.5,12575733,16774374,2.3,1.55,0],[16.5,12575733,16774374,2.3,1.55,0],[18,16236724,16760470,1.3,1.1,.4],[19.2,5265318,12633855,.8,1.35,1],[24,4870304,12633855,.8,1.35,1]];function Sd(n){let t=0;for(;t<Ka.length-2&&Ka[t+1][0]<=n;)t++;let e=Ka[t],i=Ka[t+1],s=(n-e[0])/(i[0]-e[0]||1),r=new se(e[1]),o=new se(i[1]),a=new se(e[2]),c=new se(i[2]);return{sky:r.lerp(o,s),sun:a.lerp(c,s),power:Dn(e[3],i[3],s),amb:Dn(e[4],i[4],s),night:Dn(e[5],i[5],s)}}function s1(n,t){t=t||{};let e=(n.clientWidth||innerWidth)<(n.clientHeight||innerHeight)*.9?"port":"land";gd(e),Xh=[],tc=[];let i=(()=>{let p=/[?&]hour=([\d.]+)/.exec(location.search);return p?Number(p[1]):null})();i==null&&t.timeMode==="day"&&(i=11),i==null&&t.timeMode==="night"&&(i=22);let s=new ro({antialias:!0});s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.shadowMap.enabled=!0,s.shadowMap.type=Ha,s.domElement.className="village-3d",n.appendChild(s.domElement);let r=new oo;r.fog=new Aa(12575733,320,760);let o=new an(26,1,.5,1400),a=new Ya(o,s.domElement);a.enableDamping=!0,a.dampingFactor=.08,a.minDistance=18,a.maxDistance=520,a.minPolarAngle=.15,a.maxPolarAngle=1.32,a.target.set(0,0,1.5),a.screenSpacePanning=!1,a.rotateSpeed=.7,a.panSpeed=1.1,a.keyPanSpeed=22,a.touches={ONE:xi.PAN,TWO:xi.DOLLY_PAN};{let p=s.domElement,y=new Map,S=null,P=!1,k=new U,z=new ws,M=new U,H=new U,ct=()=>{let it=Array.from(y.values());return{a:it[0],b:it[1],mx:(it[0].x+it[1].x)/2,my:(it[0].y+it[1].y)/2,d:Math.hypot(it[1].x-it[0].x,it[1].y-it[0].y),ang:Math.atan2(it[1].y-it[0].y,it[1].x-it[0].x)}};p.addEventListener("pointerdown",it=>{if(!(P||it.pointerType!=="touch"))if(it.isPrimary&&(y.clear(),S=null),y.set(it.pointerId,{x:it.clientX,y:it.clientY}),y.size===2){it.stopImmediatePropagation();let Tt=Array.from(y.entries()).find(([_e])=>_e!==it.pointerId);if(Tt){P=!0;try{p.dispatchEvent(new PointerEvent("pointerup",{pointerId:Tt[0],pointerType:"touch",isPrimary:!0,clientX:Tt[1].x,clientY:Tt[1].y,bubbles:!0}))}catch{}P=!1}let ee=ct();S={last:ee,moved:0,mode:"",y0a:ee.a.y,y0b:ee.b.y,x0:ee.mx,d0:ee.d}}else y.size>2&&it.stopImmediatePropagation()},{capture:!0}),p.addEventListener("pointermove",it=>{if(P||it.pointerType!=="touch"||!y.has(it.pointerId)||(y.get(it.pointerId).x=it.clientX,y.get(it.pointerId).y=it.clientY,!S||y.size<2)||(it.stopImmediatePropagation(),!a.enabled))return;let Tt=ct(),ee=S.last;if(S.moved+=Math.hypot(Tt.mx-ee.mx,Tt.my-ee.my)+Math.abs(Tt.d-ee.d),!S.mode&&S.moved>22){let _e=Tt.a.y-S.y0a,Qe=Tt.b.y-S.y0b,Gn=(_e+Qe)/2,Wn=_e*Qe>0&&Math.min(Math.abs(_e),Math.abs(Qe))>.3*Math.max(Math.abs(_e),Math.abs(Qe));S.mode=Wn&&Math.abs(Tt.mx-S.x0)<Math.abs(Gn)*.7&&Math.abs(Tt.d-S.d0)<Math.max(24,Math.abs(Gn)*.6)?"tilt":"free"}if(k.copy(o.position).sub(a.target),S.mode==="tilt")z.setFromVector3(k),z.phi=Math.max(a.minPolarAngle,Math.min(a.maxPolarAngle,z.phi-(Tt.my-ee.my)*.006)),k.setFromSpherical(z),o.position.copy(a.target).add(k);else if(S.mode==="free"){let _e=Tt.ang-ee.ang;_e>Math.PI&&(_e-=Math.PI*2),_e<-Math.PI&&(_e+=Math.PI*2),k.applyAxisAngle(Ve.DEFAULT_UP,_e);let Qe=Math.max(a.minDistance,Math.min(a.maxDistance,k.length()*(ee.d/Math.max(1,Tt.d))));k.setLength(Qe),o.position.copy(a.target).add(k),o.getWorldDirection(H),H.y=0,H.normalize(),M.crossVectors(H,o.up).normalize();let Gn=2*Qe*Math.tan(o.fov*Math.PI/360)/(p.clientHeight||innerHeight);c.copy(M).multiplyScalar(-(Tt.mx-ee.mx)*Gn).addScaledVector(H,(Tt.my-ee.my)*Gn*1.4),a.target.add(c),o.position.add(c)}S.last=Tt,a.update()},{capture:!0});let ot=it=>{P||it.pointerType!=="touch"||(S&&y.has(it.pointerId)&&it.stopImmediatePropagation(),y.delete(it.pointerId),y.size<2&&(S=null))};p.addEventListener("pointerup",ot,{capture:!0}),p.addEventListener("pointercancel",ot,{capture:!0});let Ft=it=>{it.pointerType==="touch"&&it.target!==p&&(y.delete(it.pointerId),y.size<2&&(S=null))};window.addEventListener("pointerup",Ft,!0),window.addEventListener("pointercancel",Ft,!0)}s.domElement.tabIndex=0,s.domElement.style.outline="none",a.listenToKeyEvents(s.domElement);let c=new U,l=new U,h=new U;function u(p,y){o.getWorldDirection(h),h.y=0,h.normalize(),l.crossVectors(h,o.up).normalize();let S=o.position.distanceTo(a.target)*.0016;c.copy(l).multiplyScalar(p*S).addScaledVector(h,-y*S),a.target.add(c),o.position.add(c)}s.domElement.addEventListener("wheel",p=>{!p.ctrlKey&&p.deltaMode===0&&(Math.abs(p.deltaX)>.01||Math.abs(p.deltaY)<40)&&(p.preventDefault(),p.stopImmediatePropagation(),u(p.deltaX,p.deltaY))},{capture:!0,passive:!1});function f(){let p=a.target,y=yn.w/2,S=yn.d/2,P=Math.max(-y,Math.min(y,p.x)),k=Math.max(-S,Math.min(S,p.z));(P!==p.x||k!==p.z||p.y!==0)&&(c.set(P-p.x,-p.y,k-p.z),p.add(c),o.position.add(c))}a.addEventListener("change",f);let d=new Mo(16777215,12048288,1);r.add(d);let g=new Eo(16777215,1.5);g.castShadow=!0,g.shadow.mapSize.set(2048,2048),Object.assign(g.shadow.camera,{left:-yn.a-6,right:yn.a+6,top:yn.b+10,bottom:-yn.b-10,near:1,far:260}),g.shadow.bias=-6e-4,g.shadow.normalBias=.03,r.add(g),r.add(g.target);let _=[],x=new Yn({uniforms:{top:{value:new se(9356778)},bottom:{value:new se(14216952)}},vertexShader:"varying float vY; void main(){ vY = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 bottom; varying float vY; void main(){ float k = smoothstep(-0.15, 0.75, vY); gl_FragColor = vec4(mix(bottom, top, k), 1.0); }",side:xn,depthWrite:!1,fog:!1}),m=new At(new ln(480,24,14),x);m.renderOrder=-1,r.add(m);let T=new At(new Be(7,7,7),new $e({color:16771496,fog:!1})),E=new At(new Be(5,5,5),new $e({color:16052735,fog:!1}));r.add(T,E);let v=new Oe,V=[];for(let p=0;p<700;p++){let y=Math.random()*Math.PI*2,S=Math.random()*1.55;V.push(Math.cos(y)*Math.sin(S)*450,Math.cos(S)*450+20,Math.sin(y)*Math.sin(S)*450)}v.setAttribute("position",new ue(V,3));let L=new Ms(v,new Qi({color:16777215,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1}));r.add(L);let I=[];for(let p=0;p<6;p++){let y=new Zt,S=new xe({color:16777215,transparent:!0,opacity:.92});for(let P=0;P<5;P++){let k=new At(new Be(Vt(3,6),1.5,Vt(3,5)),S);k.position.set(P*2.6-5,0,Vt(-1.5,1.5)),y.add(k)}y.position.set(Vt(-90,90),Vt(34,46),Vt(-90,-40)),y.userData.speed=Vt(.6,1.4),y.userData.mat=S,I.push(y),r.add(y)}let O=new Zt;O.mat=new xe({color:16777215,transparent:!0,opacity:.9,fog:!1});for(let p=0;p<11;p++){let y=p/11*Math.PI*2+Vt(-.15,.15),S=wr(y)+Vt(1,7),P=[];for(let z=0;z<5;z++){let M=new Be(Math.round(Vt(2,5)),1,Math.round(Vt(2,4)));M.translate(Math.round(z*2.2-4.4),0,Math.round(Vt(-1,1))),P.push(M)}let k=new At(qa(P,!1),O.mat);P.forEach(z=>z.dispose()),k.position.set(Math.cos(y)*S,Vt(-9,-3),-Math.sin(y)*S),k.rotation.y=y+Math.PI/2,k.scale.setScalar(Vt(.9,1.5)),O.add(k)}r.add(O);let A=[];[{t:Math.PI*.97,gap:9,r:4.5,y:-3,deco:(y,S,P)=>{Mr(y,-1,1,-1,"oak",S),Mr(y,2,1,1,"pine",S),y.set(-2,1,2,It.LEAF_M),y.plant(.5,1,2.5,dt.FL_PINK)}},{t:.06,gap:10,r:4,y:-2,deco:(y,S,P)=>{for(let k=0;k<18;k++){let z=S()*6.28,M=Math.sqrt(S())*3;y.plant(Math.floor(Math.cos(z)*M)+.5,1,Math.floor(Math.sin(z)*M)+.5,[dt.FL_PINK,dt.FL_WHITE,dt.FL_YELLOW,dt.FL_BLUE][k%4],.9)}P(D(2,.25,.6,0,.5,1.5,-.7,We(dt.PLANKS))),P(D(2,.6,.15,0,.5,1.85,-1,We(dt.PLANKS))),[-.35,1.35].forEach(k=>P(D(.2,.5,.6,0,k,1.25,-.7,We(dt.LOG))))}},{t:Math.PI*.62,gap:7,r:2.5,y:4.5,deco:(y,S)=>{Mr(y,0,1,0,"pine",S),y.set(1,1,1,It.MOSSY)}},{t:-Math.PI*.3,gap:8,r:2.3,y:2.2,deco:(y,S,P)=>{[[0,0,15231594],[1,1,16757611]].forEach(([k,z,M])=>{P(D(.35,.6,.35,16774888,k+.5,1.3,z+.5)),P(D(.9,.35,.9,M,k+.5,1.75,z+.5))}),y.set(-1,1,0,It.LEAF_G)}}].forEach((y,S)=>{let P=Bh(31+S*7),k=y.r,z=Math.ceil(k)+2,M=new wo(-z,-Math.ceil(k*2.4)-3,-z,z*2,Math.ceil(k*2.4)+16,z*2);for(let Ft=-z;Ft<z;Ft++)for(let it=-z;it<z;it++){let Tt=Math.hypot(Ft+.5,it+.5)/k;if(Tt>1)continue;let ee=-Math.round(1+k*1.9*Math.pow(1-Tt,.7)+P()*1.2);for(let _e=ee;_e<1;_e++)M.set(Ft,_e,it,_e===0?It.GRASS:_e>-3?It.DIRT:It.STONE)}let H=new Zt;y.deco(M,P,Ft=>H.add(Ft));let ct=M.build();H.add(ct.solid,ct.water,ct.plants);let ot=wr(y.t)+y.r+y.gap;H.position.set(Math.cos(y.t)*ot,y.y,-Math.sin(y.t)*ot),H.userData.y0=y.y,H.userData.ph=S*1.7,r.add(H),A.push(H)});let w=(()=>{let p=document.createElement("canvas");p.width=p.height=64;let y=p.getContext("2d"),S=y.createRadialGradient(32,32,0,32,32,32);S.addColorStop(0,"rgba(255,255,255,0.85)"),S.addColorStop(.3,"rgba(255,255,255,0.22)"),S.addColorStop(1,"rgba(255,255,255,0)"),y.fillStyle=S,y.fillRect(0,0,64,64),y.fillStyle="#ffffff",y.beginPath();for(let k=0;k<10;k++){let z=k/10*Math.PI*2-Math.PI/2,M=k%2?8:20;y.lineTo(32+Math.cos(z)*M,32+Math.sin(z)*M)}y.closePath(),y.fill();let P=new cn(p);return P.colorSpace=Pe,P})(),F=(()=>{let p=document.createElement("canvas");p.width=p.height=32;let y=p.getContext("2d");y.fillStyle="#ffffff",y.beginPath();for(let P=0;P<8;P++){let k=P/8*Math.PI*2,z=P%2?2.5:15;y.lineTo(16+Math.cos(k)*z,16+Math.sin(k)*z)}y.closePath(),y.fill();let S=new cn(p);return S.colorSpace=Pe,S})(),j=[0,1,2].map(p=>{let y=[],S=[],P=new se,k=[16773544,16762076,14273791,12905727];for(let H=0;H<34;H++){let ct=Math.random()*Math.PI*2,ot=.15+Math.random()*1.2;y.push(Math.cos(ct)*Math.sin(ot)*440,Math.cos(ot)*440+20,Math.sin(ct)*Math.sin(ot)*440),P.set(k[(H+p)%4]),S.push(P.r,P.g,P.b)}let z=new Oe;z.setAttribute("position",new ue(y,3)),z.setAttribute("color",new ue(S,3));let M=new Ms(z,new Qi({size:11+p*3,map:w,vertexColors:!0,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,fog:!1}));return M.userData={base:0,ph:p*2.1},r.add(M),M}),B=new ji(new Oi({map:(()=>{let p=document.createElement("canvas");p.width=128,p.height=16;let y=p.getContext("2d"),S=y.createLinearGradient(0,0,128,0);return S.addColorStop(0,"rgba(255,255,255,0)"),S.addColorStop(1,"rgba(255,248,220,1)"),y.fillStyle=S,y.beginPath(),y.moveTo(0,8),y.lineTo(120,4),y.arc(120,8,4,-Math.PI/2,Math.PI/2),y.closePath(),y.fill(),new cn(p)})(),transparent:!0,opacity:0,depthWrite:!1,fog:!1}));B.scale.set(36,4.5,1),r.add(B);let G={t:-1,wait:6,from:new U,dir:new U},q=new Zt;r.add(q);let Y=Bh(5),xt=new Ve,Q=Math.ceil(yn.a)+2,Et=Math.ceil(yn.b)+2,gt=new wo(-Q,-26,-Et,Q*2,54,Et*2),zt=p=>(p[0]===p[2]?Math.abs(p[3]-p[1]):Math.abs(p[2]-p[0]))>=40,oe=(p,y)=>zn.some(S=>{let[P,k,z,M]=S,H=(zt(S)?xd:zy)/2;return p>=Math.min(P,z)-H&&p<=Math.max(P,z)+H&&y>=Math.min(k,M)-H&&y<=Math.max(k,M)+H}),Me=(p,y)=>{let S=Math.hypot((p-ne.x)/(ne.rx+2.6),(y-ne.z)/(ne.rz+2.6));return Math.abs(S-1)*(ne.rx+2.6)<.8},ft=(p,y)=>Math.sin(p*.83+y*.37)*Math.cos(y*.71-p*.29)+.5*Math.sin(p*1.9-y*1.3),bt=(p,y)=>{let S=0,P=-1;return Qa(p,y)<1?{h:0,i:-1}:(Is.forEach(([k,z,M,H],ct)=>{let ot=Math.hypot(p-k,y-z);if(ot<M){let Ft=H*Math.pow(1-ot/M,1.1)*(.88+.12*ft(p,y))+(ot/M<.9?.8*ft(p*1.7,y*1.7):0);Ft>S&&(S=Ft,P=ct)}}),{h:S,i:P})},Xt=(p,y)=>1.4+1.3*Math.min(1,Math.hypot(p-Bn.x,y-Bn.z)/22),Mt=new Map;for(let p=-Q;p<Q;p++)for(let y=-Et;y<Et;y++){let S=p+.5,P=y+.5;if(!Ps(S,P,.2))continue;let k=Math.round(An(S,P)),z="grass",M=bt(S,P);if(M.h>k+.6){let ot=Is[M.i][3];k=Math.max(k,Math.round(M.h-.2)),z=k>ot*(.58+.08*ft(S*2,P*2))?"snow":k>ot*.22?"rock":"grass"}let H=Math.max(0,1-Math.hypot(S,P)/wr(Math.atan2(P,S))),ct=-1-Math.round(2+17*Math.pow(H,.55)+(Y()-.5)*2.4);for(let ot=ct;ot<k;ot++){let Ft=k-1-ot;if(k>=Ds.h&&Qa(S,P)<=0&&ot>=0&&Ft>0){gt.set(p,ot,y,Y()<.7?It.BRICK:Y()<.5?It.MOSSY:It.COBBLE);continue}let Tt=Ft===0?z==="snow"?It.SNOW:z==="rock"?Y()<.2?It.MOSSY:Y()<.12?It.GRAVEL:It.STONE:It.GRASS:Ft<3&&z==="grass"?It.DIRT:ot<ct+3?Y()<.55?It.DEEP:It.STONE:Y()<.12?It.CLAY:Y()<.08?It.GRAVEL:It.STONE;gt.set(p,ot,y,Tt)}if(z==="grass"&&gt.tint.set(gt.idx(p,k-1,y),.94+.08*Math.sin(S*.21+P*.13)*Math.cos(P*.17-S*.05)+Y()*.03),Mt.set(p+","+y,k),k<=0){let ot=Ls(S,P),Ft=Xt(S,P);if(Fi(S,P,0)||ot<Ft/2){let it=Fi(S,P,-1.2)?2:1;for(let Tt=1;Tt<=it;Tt++)gt.set(p,-Tt,y,It.WATER);gt.set(p,-it-1,y,It.SAND),gt.set(p,-it-2,y,It.SAND),Mt.set(p+","+y,-1);continue}if((Fi(S,P,1.2)||ot<Ft/2+.9)&&!oe(S,P)){gt.set(p,-1,y,It.SAND),gt.set(p,-2,y,It.SAND);continue}}Co(S,P)?gt.set(p,k-1,y,It.BRICK):(oe(S,P)||Me(S,P))&&gt.set(p,k-1,y,It.PATH)}let Qt=(p,y)=>{let S=Mt.get(Math.floor(p)+","+Math.floor(y));return S==null?0:S},ie=[];{let p=Bn,y=-p.dz,S=p.dx,P=p.r*.45,k=new Set;for(let z=P;z<p.r+2;z+=.4)for(let M=-1.4;M<=1.4;M+=.4){let H=Math.floor(p.x+p.dx*z+y*M),ct=Math.floor(p.z+p.dz*z+S*M),ot=H+","+ct;if(k.has(ot)||!Mt.has(ot))continue;k.add(ot);let Ft=Mt.get(ot);for(let it=-1;it<Ft;it++)gt.set(H,it,ct,It.AIR);gt.set(H,-1,ct,It.WATER),gt.set(H,-2,ct,It.WATER),gt.set(H,-3,ct,It.SAND),Mt.set(ot,-1)}for(let z=-1;z<=1;z++){let M=Math.floor(p.x+p.dx*(P+.3)+y*z),H=Math.floor(p.z+p.dz*(P+.3)+S*z),ct=Math.round(bt(p.x+p.dx*(P-.8)+y*z,p.z+p.dz*(P-.8)+S*z).h-.2);for(let ot=-1;ot<Math.max(2,ct-1);ot++)gt.set(M,ot,H,It.WATER);ie.push([M+.5,H+.5])}}{let p=Bh(77);Mt.forEach((y,S)=>{let[P,k]=S.split(",").map(Number),z=bt(P+.5,k+.5);z.i<0||y<1||y>Is[z.i][3]*.32||p()>.035||Math.hypot(P-Bn.x,k-Bn.z)<Bn.r*.9&&Math.abs((P-Bn.x)*-Bn.dz+(k-Bn.z)*Bn.dx)<3||gt.get(P,y,k)||Mr(gt,P,y,k,"pine",p)})}let te=e1(q,!0),de=-1+.88,mt=new At(new He(1,1,.1,32),Wh);mt.scale.set(ne.rx,1,ne.rz),mt.position.set(ne.x,de,ne.z),q.add(mt);{let p=new xe({map:oi(dt.LILY),transparent:!0,alphaTest:.5,side:gn});[[-4.5,1],[3.5,-1.6],[5.2,1.2],[-2.6,-1.4]].forEach(([y,S])=>{let P=new At(new $i(1,1),p);P.rotation.x=-Math.PI/2,P.rotation.z=y,P.position.set(ne.x+y*ne.rz/4,de+.02,ne.z+S*ne.rz/4),q.add(P)})}for(let p=0;p<14;p++){let y=Y()*6.28,S=ne.x+Math.cos(y)*(ne.rx+.7),P=ne.z+Math.sin(y)*(ne.rz+.7);gt.plant(S,0,P,dt.REED,1.1)}let St=(()=>{let p=new Zt;p.position.set(Math.floor(ne.x)+.5,0,Math.floor(ne.z)+.5),q.add(p);let y=new xe({map:oi(dt.COBBLE)}),S=new xe({map:oi(dt.WATER),transparent:!0,opacity:.85});for(let H=-1;H<=1;H++)for(let ct=-1;ct<=1;ct++)(H||ct)&&p.add(D(1,.5,1,0,H,-.25+.1,ct,y));p.add(D(1,1.6,1,0,0,.3,0,y)),p.add(D(1.6,.3,1.6,0,0,1.15,0,y));let P=D(1.2,.08,1.2,0,0,1.33,0,S);p.add(P);let k=new $e({color:14677247,transparent:!0,opacity:.85,depthWrite:!1}),z=new At(new Be(.18,.8,.18),k);z.position.y=1.75,p.add(z);let M=[];for(let H=0;H<14;H++){let ct=new At(new Be(.1,.1,.1),k);p.add(ct),M.push({m:ct,a:H/14*Math.PI*2,t:H/14})}return{g:p,jet:z,drops:M,rimR:1.3}})(),N=n1(q,Y,!0),Yt=[],vt=(p,y)=>Yt.some(S=>p>S.x0-1&&p<S.x1+1&&y>S.z0-1&&y<S.z1+1),Nt=(p,y)=>!vt(p,y)&&Ps(p,y,2.2)&&!Fi(p,y,1.5)&&!cd(p,y,.8)&&!Uh(p,y,.6)&&Ls(p,y)>2.4&&!dd(p,y)&&!Co(p,y)&&!zn.some(([S,P,k,z])=>p>=Math.min(S,k)-yi-.3&&p<=Math.max(S,k)+yi+.3&&y>=Math.min(P,z)-yi-.3&&y<=Math.max(P,z)+yi+.3)&&!je.some(([S,P])=>Math.abs(p-S)<3.6&&Math.abs(y-P)<3.8)&&!(Math.abs(p-Tn[0])<6&&Math.abs(y-Tn[1])<5.4)&&bt(p,y).h<.5,$=(t.houses||[]).findIndex(p=>p.id==="love"),pt=(p,y)=>{if(Rn)return cd(p,y,1.2);if($<0||!je[$])return!1;let[S,P]=je[$];return Math.abs(p-S)<7&&y>P+2.5&&y<P+12||Math.abs(y-P)<3.5&&Math.abs(p-S)<8.5||Math.abs(p-S)<3.5&&y<P&&y>P-8};{let S=(z,M)=>Mt.get(z+","+M),P=(z,M)=>{for(let H=z-1;H<=z+11;H++)for(let ct=M-1;ct<=M+7;ct++)if(S(H,ct)!==0||!Nt(H+.5,ct+.5)||pt(H+.5,ct+.5))return!1;return!0},k=[];for(let z=-Et+4;z<Et-7-4;z+=2)for(let M=-Q+4;M<Q-11-4;M+=2)P(M,z)&&k.push([M,z]);k.sort((z,M)=>M[1]-z[1]||Math.abs(z[0])-Math.abs(M[0]));for(let[z,M]of k){if(Yt.length>=2)break;if(Yt.some(Tt=>Math.hypot(Tt.x0-z,Tt.z0-M)<18)||!P(z,M))continue;Yt.push({x0:z,z0:M,x1:z+11,z1:M+7});let H=[dt.WHEAT,dt.CARROT,dt.SPROUT];for(let Tt=z+1;Tt<z+11-1;Tt++)for(let ee=M+1;ee<M+7-1;ee++){if(ee===M+Math.floor(3.5)){gt.set(Tt,-1,ee,It.WATER);continue}gt.set(Tt,-1,ee,It.FARM),gt.tint.set(gt.idx(Tt,-1,ee),1),gt.plant(Tt+.5,0,ee+.5,H[(ee<M+7/2?0:1)+(Tt>z+11-4?1:0)],.95)}let ct=We(dt.PLANKS),ot=We(dt.LOG),Ft=z+Math.floor(11/2),it=(Tt,ee,_e,Qe)=>{let Gn=Math.hypot(_e-Tt,Qe-ee),Wn=Math.round(Gn);for(let Nr=0;Nr<=Wn;Nr++){let Or=Tt+(_e-Tt)*Nr/Wn,ac=ee+(Qe-ee)*Nr/Wn;if(ee===Qe&&ee===M+7&&Math.abs(Or-Ft-.5)<.6)continue;q.add(D(.25,1,.25,0,Or,.5,ac,ot));let cc=new Ve;cc.position.set(Or,0,ac),cc.userData.post=.7,q.add(cc),Nr<Wn&&!(ee===Qe&&ee===M+7&&Math.abs(Or+(_e-Tt)/Wn/2-Ft-.5)<1)&&[.4,.8].forEach(Nd=>{let Od=D(ee===Qe?1:.1,.1,ee===Qe?.1:1,0,Or+(_e-Tt)/Wn/2,Nd,ac+(Qe-ee)/Wn/2,ct);q.add(Od)})}};it(z,M,z+11,M),it(z+11,M,z+11,M+7),it(z,M+7,z+11,M+7),it(z,M,z,M+7),[[z,M],[z+11,M],[z,M+7],[z+11,M+7]].forEach(([Tt,ee])=>{let _e=Hh();_e.position.set(Tt,1.2,ee),q.add(_e)})}}[[Jn.z1+.4,0],[Jn.z0-.6,Ds.h]].forEach(([p,y])=>[-1,1].forEach(S=>{let P=Jn.x+S*(Jn.hw+.7);q.add(D(.25,1.4,.25,0,P,y+.7,p,We(dt.LOG)));let k=Hh();k.position.set(P,y+1.6,p),q.add(k)}));let ht=[],C=(p,y)=>{let S=p+","+y,P=Mt.get(S);P!=null&&(gt.set(p,P-1,y,It.DIRT),gt.set(p,P,y,It.GRASS),gt.tint.set(gt.idx(p,P,y),.97+Y()*.05),Mt.set(S,P+1))},b=(p,y,S)=>{let P=Math.floor(p),k=Math.floor(y);if(!Nt(P+.5,k+.5)||pt(P+.5,k+.5)||ht.some(([H,ct])=>Math.hypot(H-P,ct-k)<3.2))return!1;let z=S||(Y()<.1?"cherry":["oak","oak","birch","mint","pine"][Y()*5|0]);Mr(gt,P,Mt.get(P+","+k)||0,k,z,Y);let M=new Ve;return M.position.set(P+.5,0,k+.5),M.userData.post=1.2,q.add(M),ht.push([P,k]),!0};for(let y=0;y<20;y++){let S=(y+.5+(Y()-.5)*.35)/20*Math.PI*2,P=wr(S)-5.5-Y()*2,k=Math.cos(S)*P,z=Math.sin(S)*P,M=2.5+Y()*1.5;if(Nt(k,z)&&!pt(k,z)){for(let ot=Math.floor(k-M);ot<=k+M;ot++)for(let Ft=Math.floor(z-M);Ft<=z+M;Ft++)Math.hypot(ot+.5-k,(Ft+.5-z)*1.2)<M&&Nt(ot+.5,Ft+.5)&&!pt(ot+.5,Ft+.5)&&C(ot,Ft);let ct=new Ve;ct.position.set(k,0,z),ct.userData.post=M,q.add(ct)}let H=2+(Y()*3|0);for(let ct=0;ct<H*4&&H>0;ct++){let ot=Y()*6.28,Ft=Y()*3.4;b(k+Math.cos(ot)*Ft,z+Math.sin(ot)*Ft)&&H--}for(let ct=0;ct<3;ct++){let ot=Y()*6.28,Ft=2.2+Y()*2,it=Math.floor(k+Math.cos(ot)*Ft),Tt=Math.floor(z+Math.sin(ot)*Ft);if(!Nt(it+.5,Tt+.5)||pt(it+.5,Tt+.5)||gt.get(it,Qt(it,Tt),Tt))continue;let ee=Qt(it,Tt);gt.set(it,ee,Tt,Y()<.5?It.LEAF_G:It.LEAF_M),Y()<.4&&gt.plant(it+.5,ee+1,Tt+.5,[dt.FL_PINK,dt.FL_WHITE,dt.FL_YELLOW][Y()*3|0],.8)}}for(let p=0,y=0;p<600&&y<10;p++)b((Y()-.5)*yn.w,(Y()-.5)*yn.d,["oak","birch","mint"][Y()*3|0])&&y++;{let p=[dt.FL_PINK,dt.FL_WHITE,dt.FL_YELLOW,dt.FL_BLUE,dt.FL_LAV];for(let y=0,S=0;y<6e3&&S<520;y++){let P=(Y()-.5)*(yn.w-4),k=(Y()-.5)*(yn.d-4);if(!Nt(P,k)||pt(P,k))continue;let z=Math.floor(P),M=Math.floor(k),H=Qt(z,M);gt.get(z,H,M)||(gt.plant(z+.5,H,M+.5,Y()<.32?p[Y()*p.length|0]:dt.TUFT,.8+Y()*.3),S++)}for(let y=0,S=0;y<800&&S<9;y++){let P=Math.floor((Y()-.5)*(yn.w-8)),k=Math.floor((Y()-.5)*(yn.d-8));if(!Nt(P+.5,k+.5)||pt(P+.5,k+.5))continue;let z=Qt(P,k),M=Y()<.5?It.COBBLE:It.MOSSY;gt.set(P,z,k,M),Y()<.6&&gt.set(P+1,z,k,It.STONE),Y()<.4&&gt.set(P,z+1,k,M);let H=new Ve;H.position.set(P+1,0,k+.5),H.userData.post=1.2,q.add(H),S++}}{let p=gt.build(.88);q.add(p.solid,p.water,p.plants)}let W=[];{let p=new $e({color:16777215,transparent:!0,opacity:.5,depthWrite:!1});ie.forEach(([y,S])=>{for(let P=0;P<4;P++){let k=new At(new Be(.5,.5,.5),p.clone());k.position.set(y+Vt(-.6,.6),0,S+Vt(0,1.2)),q.add(k),W.push({m:k,t:Math.random(),x:k.position.x,z:k.position.z})}})}let J=[0,1,2].map(p=>{let y=[];for(let k=0;k<9;k++){let z=Math.random()*6.283,M=Math.sqrt(Math.random())*.85;y.push(ne.x+Math.cos(z)*ne.rx*M,de+.15,ne.z+Math.sin(z)*ne.rz*M)}for(let k=0;k<7;k++){let z=te.curve.getPointAt(Math.random());y.push(z.x+(Math.random()-.5)*1.2,de+.12,z.z+(Math.random()-.5)*1.2)}let S=new Oe;S.setAttribute("position",new ue(y,3));let P=new Ms(S,new Qi({size:.9,map:F,color:[16777215,16774072,16766698][p],transparent:!0,opacity:0,depthWrite:!1}));return P.userData={base:.6,ph:p*2.1},q.add(P),P}),rt=[];zn.forEach(([p,y,S,P])=>[.3,.72].forEach(k=>{let z=p===S,M=Dn(p,S,k)+(z?yi+.6:0),H=Dn(y,P,k)+(z?0:yi+.6);je.some(([ct,ot])=>Math.abs(M-ct)<3.6&&Math.abs(H-ot)<4.2)||Math.abs(M-Tn[0])<6.2&&Math.abs(H-Tn[1])<6||Fi(M,H,1.5)||pt(M,H)||!Ps(M,H,2)||Uh(M,H,.5)||Ls(M,H)<2||Co(M,H)||dd(M,H)||rt.push([M,H])})),rt.slice(0,7).forEach(([p,y],S)=>{let P=qy();if(P.position.set(p,An(p,y),y),P.userData.post=.3,q.add(P),S%2===0&&_.length<3){let k=new vo(16763255,0,12,1.6);k.position.set(p,An(p,y)+2.7,y),q.add(k),_.push(k)}});let tt=[],Ct=[];(t.houses||[]).forEach((p,y)=>{if(!je[y])return;let S=p.id==="love"?Vy():p.special==="arcade"?Gy():p.special==="store"?Wy():ld(p,!1);S.position.set(je[y][0],An(je[y][0],je[y][1]),je[y][1]),S.rotation.y=Sr[y]||0,S.userData.face=Sr[y]||0,S.userData.id=p.id,q.add(S),tt.push(S);let P=S.userData.face;Ct.push({x:je[y][0]+Math.sin(P)*S.userData.doorZ,z:je[y][1]+Math.cos(P)*S.userData.doorZ})});let ut=Yy(q,Rn&&Sr[Rn.house]||0),Pt=ld(null,!0);Pt.position.set(Tn[0],An(Tn[0],Tn[1]),Tn[1]),Pt.userData.id="hall",q.add(Pt),tt.push(Pt);let Lt={x:Tn[0],z:Tn[1]+Pt.userData.doorZ};Ct.push(Lt);let st=i1(Ct),Ht=st.doorNodes[st.doorNodes.length-1];(function(){q.updateMatrixWorld(!0);let y=new Set,S=z=>{z&&z.traverse(M=>y.add(M))};S(mt),N.ducks.forEach(z=>S(z.g)),tt.forEach(z=>{S(z.userData.hinge),S(z.userData.flag),S(z.userData.bell)}),S(ut.car),S(St.jet),St.drops.forEach(z=>S(z.m));let P=new Map,k=[];q.traverse(z=>{if(!z.isMesh||z.isInstancedMesh||y.has(z)||z.userData.keepBatch||Array.isArray(z.material)||z.material.transparent)return;let M=z.geometry.clone();Object.keys(M.attributes).forEach(H=>{H!=="position"&&H!=="normal"&&H!=="uv"&&M.deleteAttribute(H)}),M.attributes.uv&&(M.index&&(M=M.toNonIndexed()),M.clearGroups(),M.applyMatrix4(z.matrixWorld),P.has(z.material)||P.set(z.material,[]),P.get(z.material).push(M),k.push(z))}),k.forEach(z=>z.parent.remove(z)),P.forEach((z,M)=>{let H=qa(z,!1);if(z.forEach(ot=>ot.dispose()),!H)return;let ct=new At(H,M);ct.castShadow=!0,ct.receiveShadow=!0,q.add(ct)})})();let Wt=[],wt={her:null,him:null,home:null,kiss:0},Gt=p=>st.nodes[st.doorNodes[p]],ye={},ae=p=>ye[p]||0;function Se(p,y,S){let P=vd(p);q.add(P.g);let k=Gt(y);return P.g.position.set(k.x+Vt(-.6,.6),0,k.z+Vt(0,.4)),Object.assign(P,{kind:"person",i:Wt.length,home:y,path:[],speed:Vt(1.35,1.75),wait:Vt(0,3),t:Vt(0,6),v:0,goal:"",inside:!1},S||{}),Wt.push(P),P}(t.houses||[]).forEach((p,y)=>{if(!(y>=je.length))if(p.id==="love")wt.home=y,wt.her=Se(Vh.her,y,{love:"her"}),wt.him=Se(Vh.him,y,{love:"him"});else{let S=ja[y]||ja[y%9]||ja[0];Se(S,y,{hallReg:!!S.uniform})}});let X=Object.assign(Ky(),{kind:"cat",path:[],speed:1.1,wait:2,t:0,sit:!0}),Dt=Object.assign(Jy(),{kind:"dog",path:[],speed:2.2,wait:1,t:0,buddy:0});{let p=st.nodes[st.doorNodes[2]],y=st.nodes[st.doorNodes[st.doorNodes.length-1]];X.g.position.set(p.x+1.5,0,p.z+.6),Dt.g.position.set(y.x+3,0,y.z+.8)}q.add(X.g,Dt.g);let at=[0,1,2,3].map(p=>{let y=$y(p);return q.add(y),{g:y,a:Vt(0,6.28),r:Vt(.62,.92),sp:Vt(.25,.5)*(p%2?1:-1),jump:0,jx:0,jz:0}});function _t(){let p=document.createElement("canvas");p.width=128,p.height=64;let y=p.getContext("2d");y.font="bold 34px sans-serif",y.fillStyle="#7a6a9a",y.fillText("z",18,52),y.font="bold 26px sans-serif",y.fillText("z",52,36),y.font="bold 20px sans-serif",y.fillText("z",82,22);let S=new ji(new Oi({map:new cn(p),transparent:!0,depthWrite:!1}));return S.scale.set(1.1,.55,1),S.visible=!1,q.add(S),S}X.zzz=_t(),Dt.zzz=_t();let Ot=Ed("\u2665","#ff6f91",.9,.45);q.add(Ot);let Ut=new U,he=0,we=[],sn=new ln(.09,6,5);function Te(p,y){for(let S=0;S<7;S++){let P=Math.random()*6.28,k=Math.random()*.8,z=p+Math.cos(P)*k,M=y+Math.sin(P)*k*.7;if(!Fi(z,M,-.8))continue;let H=new At(sn,le(S%2?13208410:14723437));H.position.set(z,1.6+Math.random()*.6,M),q.add(H),we.push({m:H,vy:0,life:25})}}let fn=[];function Hn(p,y,S){let P=new At(new go(.15,.25,18),new $e({color:16777215,transparent:!0,opacity:.8,side:gn}));P.rotation.x=-Math.PI/2,P.position.set(p,-.105,y),P.userData.size=S,q.add(P),fn.push(P)}let En=new At(new go(.3,.45,20),new $e({color:16777215,transparent:!0,opacity:0,side:gn}));En.rotation.x=-Math.PI/2,q.add(En);let Tr=[16758465,14273008,16375946,11591910].map((p,y)=>{let S=jy(p);return q.add(S),{g:S,ph:y*1.7,cx:Vt(-25,25),cz:Vt(-15,15)}}),li=new Oe,Us=[];for(let p=0;p<40;p++)Us.push(Vt(-30,30),Vt(1,3),Vt(-20,20));li.setAttribute("position",new ue(Us,3));let Ns=new Ms(li,new Qi({color:16773792,size:.35,transparent:!0,opacity:0}));q.add(Ns);let hi=0;function ui(){let p=new Date;return p.getHours()+p.getMinutes()/60}function is(p){return p>=23||p<6.5?"sleep":p<7?"morning":p<11.5?"work":p<13?"lunch":p<16.5?"work":p<21?"evening":"home"}function vi(p){let y=p%18,S=Math.floor(y/6),P=y%6;return{x:Lt.x+(P-2.5)*1.2+S%2*.6,z:Lt.z+1.3+S*1.1}}function bn(p,y,S){if(p.goal=S,p.path=Jh(p,y),!p.path.length){let P=st.nearest(p.g.position.x,p.g.position.z),k=st.nearest(y.x,y.z);p.path=st.path(P,k).concat([y])}}function Os(p){let y=Gt(p),S=Sr[p]||0;return{x:y.x-Math.sin(S)*.9,z:y.z-Math.cos(S)*.9,f:S}}function fi(p){let y=Os(p.home);p.inside=!1,p.g.visible=!0,p.g.position.set(y.x+Vt(-.3,.3),0,y.z),p.g.rotation.set(0,y.f,0)}function ss(p,y){let S=Os(p.home);bn(p,{x:S.x,z:S.z},"in"),p.stay=y}let Po=tt.findIndex(p=>p.userData.alwaysLit),R=null,Z=null;function et(){if(!R){R=je.map((p,y)=>{let S=Gt(y);return[[-1.7,-.5],[1.7,-.5],[-.9,.2],[.9,.2]].map(([P,k])=>({x:S.x+P,z:S.z+k})).filter(P=>!Ee(P.x,P.z,.15))}),Z=[];for(let p=0;p<18;p++){let y={x:ne.x+Math.cos(p/18*6.283)*(ne.rx+2.2),z:ne.z+Math.sin(p/18*6.283)*(ne.rz+1.9)};Ee(y.x,y.z,.2)||Z.push(y)}}}let nt=p=>p[Math.floor(Math.random()*p.length)];function K(p){et();let y=R[p.home];return y.length?nt(y):Gt(p.home)}function Rt(p,y){et();let S=Math.random();if(y==="lunch"&&Po>=0&&S<.6){let P=Gt(Po);return{x:P.x+Vt(-2.6,2.6),z:P.z+Vt(0,.8)}}if(y==="lunch"&&S<.75)return vi(Math.floor(Vt(0,18)));if(S<.4&&Z.length)return nt(Z);if(S<.85){let P=Gt(Math.floor(Vt(0,je.length)));return{x:P.x+Vt(-1,1),z:P.z+Vt(0,.5)}}return vi(Math.floor(Vt(0,18)))}function kt(p){if(p.love==="him")return;let y=is(ui());if(p.love==="her")return jt(p,y);let S=ae(p.home)>0;if(p.helper&&ae(p.home)<p.helper){p.inside&&fi(p),bn(p,{x:Lt.x,z:Lt.z},"leave");return}if(hi&&!S&&y!=="sleep"&&y!=="home"&&!p.helper){p.inside&&fi(p),(p.goal!=="hall"||p.path.length)&&bn(p,vi(p.i),"hall"),p.wait=Vt(3,6);return}if(p.hallReg&&y==="work"&&!S&&!p.helper){if(p.inside&&fi(p),p.goal==="hallwork"){bn(p,K(p),"work"),p.wait=Vt(6,14);return}if(p.goal==="work"&&Math.random()<.5){ss(p,Vt(4,8));return}bn(p,vi(p.i),"hallwork"),p.wait=Vt(10,22);return}if(S||y==="work"){if(p.inside){fi(p),bn(p,K(p),"work");return}if(p.goal==="work"){ss(p,Vt(3,S?6:10));return}bn(p,K(p),"work");return}if(y==="sleep"||y==="home"){if(p.inside){p.wait=Vt(20,40);return}ss(p,Vt(20,40));return}if(p.inside)fi(p);else if(Math.random()<.15){ss(p,Vt(5,12));return}bn(p,Rt(p,y),"stroll"),p.wait=Vt(2,6)}function jt(p,y){let S=wt.him;if(y==="sleep"||y==="home"||ui()>=20.5){if(Jt(),p.inside){p.wait=Vt(30,60);return}ss(p,Vt(30,60));return}if(p.inside&&(fi(p),fi(S),S.g.position.x+=.7),p.sitting){Jt(),bn(p,Rt(p,y),"stroll"),p.wait=Vt(2,5);return}if(re&&Math.random()<.55){bn(p,re.userData.front,"swing");return}bn(p,Rt(p,y),"stroll"),p.wait=Vt(2,5)}function Jt(){[wt.her,wt.him].forEach(p=>{!p||!p.sitting||(p.sitting=!1,p.g.position.set(re.userData.front.x+(p.love==="her"?-.4:.4),0,re.userData.front.z),p.g.rotation.set(0,re.rotation.y,0))})}function ce(p){p.goal==="in"?(p.inside=!0,p.g.visible=!1,p.wait=p.stay||10):p.goal==="work"?p.wait=Vt(6,12):p.goal==="swing"?(p.sitting=!0,p.wait=Vt(15,30)):p.goal==="leave"&&(q.remove(p.g),Wt.splice(Wt.indexOf(p),1))}function fe(p,y){let S=wt.her;if(S.inside){if(p.inside)return!1;let ee=Os(p.home),_e=ee.x-p.g.position.x,Qe=ee.z-p.g.position.z,Gn=Math.hypot(_e,Qe);if(Gn<.15)return p.inside=!0,p.g.visible=!1,!1;let Wn=Math.min(Gn,S.speed*1.2*y);return p.g.position.x+=_e/Gn*Wn,p.g.position.z+=Qe/Gn*Wn,p.g.rotation.y=Math.atan2(_e,Qe),p.v=S.speed,!0}if(p.inside&&(fi(p),p.g.position.x+=.7),S.sitting)return p.sitting=!0,!1;p.sitting=!1;let P=S.g.rotation.y,k=S.g.position.x-Math.cos(P)*.72,z=S.g.position.z+Math.sin(P)*.72,M=k-p.g.position.x,H=z-p.g.position.z,ct=Math.hypot(M,H);if(ct<.05){p.v=0;let ee=P-p.g.rotation.y;return ee=Math.atan2(Math.sin(ee),Math.cos(ee)),p.g.rotation.y+=ee*Math.min(1,y*6),!1}let ot=Math.min(S.speed*1.35,ct*4);p.v=(p.v||0)+(ot-(p.v||0))*Math.min(1,y*5);let Ft=Math.min(ct,p.v*y);p.g.position.x+=M/ct*Ft,p.g.position.z+=H/ct*Ft;let Tt=(ct>.35?Math.atan2(M,H):P)-p.g.rotation.y;return Tt=Math.atan2(Math.sin(Tt),Math.cos(Tt)),p.g.rotation.y+=Tt*Math.min(1,y*7),p.v>.15}{let p=is(ui());(p==="sleep"||p==="home")&&Wt.forEach(y=>{y.inside=!0,y.g.visible=!1,y.wait=Vt(5,30)})}let qt=tt.filter(p=>p.userData.id!=="hall").map(p=>{let y=p.userData.size,S=p.userData.face||0,P=Math.abs(Math.sin(S))>.5;if(!y)return{x:p.position.x,z:p.position.z,hw:3.3,hd:2.6};let k=Math.cos(S)*y.cx,z=-Math.sin(S)*y.cx;return{x:p.position.x+k,z:p.position.z+z,hw:P?y.hd:y.hw,hd:P?y.hw:y.hd}}).concat([{x:Tn[0],z:Tn[1],hw:5.8,hd:4.1}]),ge=[];q.children.forEach(p=>{p.userData.post&&ge.push({x:p.position.x,z:p.position.z,r:p.userData.post})}),N.posts.forEach(p=>ge.push(p));function Ee(p,y,S){return S=S||.5,!Ps(p,y,2.5)||Uh(p,y,0)||Ls(p,y)<1.8&&!te.bridges.some(P=>Math.hypot(P.x-p,P.z-y)<2.4)||Fi(p,y,.9+S)||qt.some(P=>Math.abs(p-P.x)<P.hw+S&&Math.abs(y-P.z)<P.hd+S)?!0:ge.some(P=>Math.hypot(p-P.x,y-P.z)<P.r+S*.6)}function Re(p,y){let S=Math.ceil(Math.hypot(y.x-p.x,y.z-p.z)/.4);for(let P=1;P<=S;P++){let k=P/S;if(Ee(Dn(p.x,y.x,k),Dn(p.z,y.z,k),.45))return!1}return!0}let dn=(p,y,S)=>zn.some(([P,k,z,M])=>p>=Math.min(P,z)-yi-S&&p<=Math.max(P,z)+yi+S&&y>=Math.min(k,M)-yi-S&&y<=Math.max(k,M)+yi+S),re=null;if(ut.blocks.forEach(p=>qt.push(p)),ut.posts.forEach(p=>ge.push(p)),wt.home!=null&&Rn&&Rn.house===wt.home){let[p,y]=Rn.swing,S=Sr[wt.home]||0;re=ud(),re.position.set(p,An(p,y),y),re.rotation.y=S,q.add(re),re.userData.front={x:p+Math.sin(S)*1.25,z:y+Math.cos(S)*1.25},qt.push({x:p,z:y,hw:1.55,hd:1.55}),qt.push({x:p-Math.cos(S)*2,z:y+Math.sin(S)*2,hw:.8,hd:.8})}else if(wt.home!=null){let[p,y]=je[wt.home],S=[[0,7.2],[0,6.4],[-2.2,7.2],[2.2,7.2],[0,8.4],[4.6,.8],[-4.6,.8],[0,-5.2]],P=(k,z)=>!Ps(k,z,2.5)||Fi(k,z,1)||qt.some(M=>Math.abs(k-M.x)<M.hw+.1&&Math.abs(z-M.z)<M.hd+.1)||dn(k,z,0);for(let[k,z]of S){let M=p+k,H=y+z;if([[-1.6,-.9],[1.6,-.9],[-1.6,.9],[1.6,.9],[0,0],[0,1.6],[-.5,1.6],[.5,1.6]].every(([ot,Ft])=>!P(M+ot,H+Ft))){q.children.slice().forEach(ot=>{if(ot.userData.post&&Math.abs(ot.position.x-M)<2.6&&Math.abs(ot.position.z-H)<2.2){q.remove(ot);let Ft=ge.findIndex(it=>it.x===ot.position.x&&it.z===ot.position.z);Ft>=0&&ge.splice(Ft,1)}}),re=ud(),re.position.set(M,An(M,H),H),q.add(re),re.userData.front={x:M,z:H+1.25},qt.push({x:M,z:H,hw:1.55,hd:.75});break}}}let $t=[],$n=new ln(.28,8,6);function be(p){let y=new At($n,new xe({color:16777215,transparent:!0,opacity:.75,depthWrite:!1})),S=p.userData.chimney;y.position.set(p.position.x+S.x+Vt(-.1,.1),S.y,p.position.z+S.z+Vt(-.1,.1)),q.add(y),$t.push({m:y,life:0})}let Cn=[3,6,10],Un=document.createElement("div");Un.className="v3d-names",n.appendChild(Un);let Ze=null,zi=!1,Ae=new Map,Ke=new U;function rs(p){if(!Ze)return"";if(p.love==="her")return Ze.her||"namu";if(p.love==="him")return Ze.him||"hunf";if(p.helper)return"";let y=(t.houses||[])[p.home];return!y||!y.pub&&!zi?"":Ze.people&&Ze.people[y.id]||""}function Pn(){Wt.forEach(p=>{let y=rs(p),S=Ae.get(p);if(!y){S&&(S.remove(),Ae.delete(p));return}S||(S=document.createElement("span"),Un.appendChild(S),Ae.set(p,S)),S.textContent=y})}function kn(){let p=o.position.distanceTo(a.target),y=p<175&&Ae.size>0;if(Un.style.display=y?"":"none",!y)return;let S=n.clientWidth||innerWidth,P=n.clientHeight||innerHeight,k=P*1.8/(2*p*Math.tan(o.fov*Math.PI/360));Un.style.fontSize=Math.max(7,Math.min(12,k*.24)).toFixed(1)+"px",Un.classList.toggle("night",Rr>.5);let z=performance.now(),M=z-(kn.t||0)>300;M&&(kn.t=z);let H=[];Ae.forEach((ct,ot)=>{if(!ot.g.visible||ot.inside||Wt.indexOf(ot)<0){ct.style.display="none";return}if(ot.g.getWorldPosition(Ke),Ke.y+=2.05,M){let Tt=Ke.clone().sub(o.position),ee=Tt.length();Vn.set(o.position,Tt.normalize()),Vn.far=ee-.3,ot.hidden=Vn.intersectObjects(Io,!1).length>0}if(ot.hidden){ct.style.display="none";return}if(Ke.project(o),Ke.z>1||Math.abs(Ke.x)>1.1||Math.abs(Ke.y)>1.1){ct.style.display="none";return}let Ft=(Ke.x+1)/2*S,it=(1-Ke.y)/2*P;for(let Tt=0;Tt<4;Tt++){let ee=H.find(_e=>Math.abs(_e[0]-Ft)<34&&Math.abs(_e[1]-it)<12);if(!ee)break;it=ee[1]-13}H.push([Ft,it]),ct.style.display="",ct.style.transform="translate("+Ft.toFixed(1)+"px,"+it.toFixed(1)+"px) translate(-50%,-100%)"})}let Vn=new xr,Io=tt.map(p=>p.userData.pick).filter(Boolean);function Kh(){je.forEach((p,y)=>{if(y===wt.home)return;let S=Cn.filter(k=>ae(y)>=k).length,P=Wt.filter(k=>k.helper&&k.home===y&&k.goal!=="leave");for(let k=P.length;k<S;k++){let z=Se(hd[k%hd.length],y,{helper:Cn[k]});z.g.position.set(Lt.x+Vt(-1,1),0,Lt.z+Vt(0,.6)),bn(z,K(z),"work")}})}function Jh(p,y){let S={x:p.g.position.x,z:p.g.position.z};if(Re(S,y))return[y];let P=st.nearest(S.x,S.z),k=st.nearest(y.x,y.z),z=st.path(P,k);if(!Re(S,z[0]))return[];let M=z[z.length-1];return Re(M,y)&&z.push(y),z}function wd(p){if(p.kind==="dog"&&Math.random()<.65){let S=Wt[p.buddy%Wt.length];for(let z=0;z<Wt.length&&(!S.g.visible||S.sitting);z++)S=Wt[++p.buddy%Wt.length];let P=S.g.position,k={x:P.x+Vt(-1.5,1.5),z:P.z+Vt(.8,1.6)};if(Math.random()<.15&&p.buddy++,!Ee(k.x,k.z)&&(p.path=Jh(p,k),p.path.length))return}for(let S=0;S<30;S++){let P={x:p.g.position.x+Vt(-9,9),z:p.g.position.z+Vt(-7,7)};if(!Ee(P.x,P.z,.8)&&Re(p.g.position,P)){p.path=[P];return}}let y=st.nodes[st.nearest(p.g.position.x,p.g.position.z)];p.path=[{x:y.x,z:y.z}]}function $h(p,y){let S=p.g.position;if(p.sleep>0)return p.v=0,!1;if(!p.path.length){if(p.v=0,p.wait-=y,p.wait<=0){if(p.kind==="person")return p.wait=Vt(1.5,4),kt(p),!1;wd(p),p.wait=Vt(2,6),p.kind==="cat"&&(p.sit=Math.random()<.45,p.sit&&(p.path=[]))}return!1}let P=p.path[0],k=P.x-S.x,z=P.z-S.z,M=Math.hypot(k,z);if(M<.08)return p.path.shift(),!p.path.length&&p.kind==="person"&&ce(p),!0;let ct=Math.atan2(k,z)-p.g.rotation.y;ct=Math.atan2(Math.sin(ct),Math.cos(ct)),p.g.rotation.y+=ct*Math.min(1,y*7);let ot=M+(p.path.length>1?99:0),Ft=Math.abs(ct)>1.1?p.speed*.15:p.speed*Math.min(1,ot/1.2+.25);p.v=(p.v||0)+(Ft-(p.v||0))*Math.min(1,y*4);let it=Math.min(M,p.v*y);return S.x+=Math.sin(p.g.rotation.y)*it*.35+k/M*it*.65,S.z+=Math.cos(p.g.rotation.y)*it*.35+z/M*it*.65,!0}function Td(p,y){if(Wt.slice().forEach(M=>{let H=M.love==="him"?fe(M,p):$h(M,p);if(M.inside||!M.g.visible)return;if(M.sitting&&re){let it=M.love==="her"?-.4:.4;Ut.set(it,.06,0),re.userData.seat.localToWorld(Ut),q.worldToLocal(Ut),M.g.position.set(Ut.x,Ut.y-Gh,Ut.z),M.g.rotation.set(re.userData.pivot.rotation.x*.9,re.rotation.y,0),M.parts.legL.rotation.x=M.parts.legR.rotation.x=-1.45+Math.sin(y*1.7)*.25,M.parts.armL.rotation.x=M.parts.armR.rotation.x=-.5,M.parts.head.rotation.set(0,0,0);return}let ct=Math.min(1,(M.v||0)/M.speed);M.t+=p*(H?3+7*ct:2);let ot=H?Math.sin(M.t)*.75*ct:0;M.parts.legL.rotation.x=ot,M.parts.legR.rotation.x=-ot,M.parts.armL.rotation.x=-ot*.8,M.parts.armR.rotation.x=ot*.8,M.g.rotation.x=0,M.parts.head.rotation.x=0,M.parts.head.rotation.z=0;let Ft=An(M.g.position.x,M.g.position.z);if(M.g.position.y=Ft+(H?Math.abs(Math.sin(M.t))*.06:0),!H&&!M.path.length){if(M.goal==="hall"){let it=Math.PI-M.g.rotation.y;it=Math.atan2(Math.sin(it),Math.cos(it)),M.g.rotation.y+=it*Math.min(1,p*6),M.g.position.y=Ft+Math.max(0,Math.sin(y*4+M.i))*.1,M.parts.armR.rotation.x=-2.6+Math.sin(y*6+M.i)*.3}else if(M.goal==="work"){let it=Math.PI-M.g.rotation.y;it=Math.atan2(Math.sin(it),Math.cos(it)),M.g.rotation.y+=it*Math.min(1,p*6),M.parts.armR.rotation.x=-1.3+Math.sin(y*9+M.i)*.55,M.parts.armL.rotation.x=-.9+Math.sin(y*9+M.i+1.6)*.35,M.parts.head.rotation.x=.25}M.parts.head.rotation.y=M.goal==="work"?0:Math.sin(y*.7+M.i)*.4}else M.parts.head.rotation.y=0}),wt.kiss>0&&wt.him&&wt.him.g.visible){wt.kiss-=p;let M=wt.her,H=wt.him,ct=Math.min(1,Math.sin(Math.min(1,(2.4-wt.kiss)/2.4)*Math.PI)*1.6),ot=M.g.position.x-H.g.position.x,Ft=M.g.position.z-H.g.position.z;if(H.sitting)H.parts.head.rotation.y=.9*ct,H.parts.head.rotation.z=.25*ct,M.parts.head.rotation.z=-.15*ct;else{let it=Math.atan2(ot,Ft)-H.g.rotation.y;it=Math.atan2(Math.sin(it),Math.cos(it)),H.g.rotation.y+=it*Math.min(1,p*8);let Tt=Math.atan2(-ot,-Ft)-M.g.rotation.y;Tt=Math.atan2(Math.sin(Tt),Math.cos(Tt)),M.g.rotation.y+=Tt*Math.min(1,p*3)*.5,H.g.rotation.x=.2*ct}Ot.visible=!0,Ot.position.set((M.g.position.x+H.g.position.x)/2,2+(2.4-wt.kiss)*.35,(M.g.position.z+H.g.position.z)/2),Ot.material.opacity=Math.min(1,wt.kiss*1.5),wt.kiss<=0&&(Ot.visible=!1,H.g.rotation.x=0)}if(re){let M=re.userData.pivot,H=wt.her&&wt.her.sitting;M.rotation.x=H?Math.sin(y*1.7)*(wt.kiss>0?.12:.32):M.rotation.x*Math.max(0,1-p*1.5)}let S=is(ui());tt.forEach((M,H)=>{if(!M.userData.wm)return;let ct=0;if(H===wt.home?ct=0:(ae(H)>0||M.userData.alwaysLit||S!=="sleep"&&Wt.some(ot=>ot.home===H&&ot.inside))&&(ct=1),M.userData.lit=Dn(M.userData.lit||0,ct,Math.min(1,p*2)),M.userData.wm.emissiveIntensity=Rr*(.28+.7*M.userData.lit),M.userData.heart){let ot=wt.her&&wt.her.inside&&wt.him.inside;M.userData.heart.material.emissiveIntensity=ot?.5+Math.max(0,Math.sin(y*5))*1.3:.2}ae(H)>0&&M.userData.chimney&&Math.random()<p*2.2&&be(M)});for(let M=$t.length-1;M>=0;M--){let H=$t[M];H.life+=p,H.m.position.y+=p*.9,H.m.position.x+=p*.25,H.m.scale.setScalar(1+H.life*.9),H.m.material.opacity=Math.max(0,.75-H.life*.3),H.life>2.5&&(q.remove(H.m),H.m.material.dispose(),$t.splice(M,1))}he+=p,he>2&&(he=0,Kh()),[X,Dt].forEach(M=>{if(M.sleep>0){M.sleep-=p;let Ft=Math.min(1,M.sleepIn+=p*3);M.parts.legs.forEach((it,Tt)=>{it.rotation.x=(Tt<2?-1.45:1.45)*Ft}),M.g.position.y=An(M.g.position.x,M.g.position.z)-.22*Ft*M.g.scale.y,M.parts.head.rotation.x=.35*Ft,M.parts.head.rotation.y=0,M.parts.eyes.forEach(it=>{it.scale.y=1-.8*Ft}),M.parts.tail.rotation.z=Math.sin(y*.8)*.15,M.zzz.visible=!0,M.zzz.position.set(M.g.position.x,.95+y*.6%1*.45,M.g.position.z),M.zzz.material.opacity=.9-y*.6%1*.6,M.sleep<=0&&(M.zzz.visible=!1,M.parts.eyes.forEach(it=>{it.scale.y=1}),M.parts.head.rotation.x=0,M.wait=Vt(.3,1));return}let H=$h(M,p),ct=Math.min(1,(M.v||0)/M.speed);M.t+=p*(H?4+8*ct:2);let ot=H?Math.sin(M.t)*.6*ct:0;M.parts.legs.forEach((Ft,it)=>{Ft.rotation.x=it===0||it===3?ot:-ot}),M.kind==="cat"?(M.parts.tail.rotation.z=Math.sin(y*2)*.35,M.parts.tail.rotation.x=M.sit&&!H?.9:.5,M.g.children[0].rotation.x=0,M.parts.head.rotation.y=H?0:Math.sin(y*.5)*.5,M.g.position.y=An(M.g.position.x,M.g.position.z)):(M.parts.tail.rotation.z=Math.sin(y*(H?18:10))*.6,M.parts.head.rotation.x=H?0:Math.sin(y*1.3)*.1,M.g.position.y=An(M.g.position.x,M.g.position.z)+(H?Math.abs(Math.sin(M.t))*.07:0))});for(let M=we.length-1;M>=0;M--){let H=we[M];H.m.position.y>-.08?(H.vy-=p*9,H.m.position.y=Math.max(-.08,H.m.position.y+H.vy*p),H.m.position.y===-.08&&Hn(H.m.position.x,H.m.position.z,.5)):H.m.position.y=-.08+Math.sin(y*3+M)*.015,H.life-=p,H.life<=0&&(q.remove(H.m),we.splice(M,1))}at.forEach(M=>{M.a+=M.sp*p;let H=ne.x+Math.cos(M.a)*(ne.rx-1.6)*M.r,ct=ne.z+Math.sin(M.a)*(ne.rz-1)*M.r,ot=null,Ft=1e9;if(we.forEach(it=>{if(it.m.position.y<=-.02){let Tt=Math.hypot(it.m.position.x-M.g.position.x,it.m.position.z-M.g.position.z);Tt<Ft&&(Ft=Tt,ot=it)}}),ot&&!M.jump){let it=ot.m.position.x-M.g.position.x,Tt=ot.m.position.z-M.g.position.z,ee=Math.hypot(it,Tt),_e=Math.min(ee,2.6*p);M.g.position.x+=it/(ee||1)*_e,M.g.position.z+=Tt/(ee||1)*_e,M.g.position.y=-.3,M.g.rotation.y=Math.atan2(it,Tt),ee<.25&&(q.remove(ot.m),we.splice(we.indexOf(ot),1),Hn(ot.m.position.x,ot.m.position.z,.6)),M.a=Math.atan2((M.g.position.z-ne.z)/(ne.rz-1),(M.g.position.x-ne.x)/(ne.rx-1.6)),M.r=Math.min(.85,Math.max(.2,Math.hypot((M.g.position.x-ne.x)/(ne.rx-1.6),(M.g.position.z-ne.z)/(ne.rz-1)))),M.g.userData.tail.rotation.y=Math.sin(y*16+M.a)*.6;return}if(M.jump>0){M.jump+=p*.9;let it=Math.sin(M.jump*Math.PI)*1.8;M.g.position.set(Dn(M.jx,H,M.jump),-.34+it,Dn(M.jz,ct,M.jump)),M.g.rotation.x=-Math.cos(M.jump*Math.PI)*1.1,M.jump>=1&&(M.jump=0,M.g.rotation.x=0,En.position.set(H,-.1,ct),En.material.opacity=.8,En.scale.setScalar(1))}else{let it=H-M.g.position.x,Tt=ct-M.g.position.z;M.g.position.set(Dn(M.g.position.x,H,Math.min(1,p*6)),-.34,Dn(M.g.position.z,ct,Math.min(1,p*6))),(it||Tt)&&(M.g.rotation.y=Math.atan2(it,Tt)),Math.random()<p*.05&&(M.jump=.001,M.jx=H,M.jz=ct,En.position.set(H,-.1,ct),En.material.opacity=.8,En.scale.setScalar(1))}M.g.userData.tail.rotation.y=Math.sin(y*8+M.a)*.5}),te.glints.forEach(M=>{M.t=(M.t+M.sp*p*6)%1;let H=te.curve.getPointAt(M.t),ct=te.curve.getTangentAt(M.t);M.m.position.set(H.x-ct.z*M.side,.06,H.z+ct.x*M.side),M.m.rotation.z=-Math.atan2(ct.z,ct.x),M.m.material.opacity=.35+Math.abs(Math.sin(y*3+M.side*9))*.5}),te.ftex.offset.y=(te.ftex.offset.y+p*1.6)%1,St.jet.scale.y=1+Math.sin(y*6)*.08,W.forEach(M=>{M.t=(M.t+p*.35)%1,M.m.position.set(M.x+Math.sin(M.t*6+M.z)*.3,-.1+M.t*1.8,M.z+M.t*.8),M.m.material.opacity=.55*(1-M.t),M.m.scale.setScalar(.6+M.t*1.2)}),St.drops.forEach(M=>{M.t=(M.t+p*.7)%1;let H=.15+M.t*.95,ct=2.25+M.t*.6-M.t*M.t*2.35;M.m.position.set(Math.cos(M.a)*H,ct,Math.sin(M.a)*H)}),te.foam.forEach((M,H)=>{let ct=.8+Math.abs(Math.sin(y*5+H))*.5;M.scale.setScalar(ct)}),N.ducks.forEach(M=>{M.a+=M.sp*p;let H=ne.x+Math.cos(M.a)*(ne.rx-2),ct=ne.z+Math.sin(M.a)*(ne.rz-1.2);M.g.rotation.y=Math.atan2(H-M.g.position.x,ct-M.g.position.z)||M.g.rotation.y,M.g.position.set(H,-.2+Math.sin(y*2+M.a)*.03,ct)});for(let M=fn.length-1;M>=0;M--){let H=fn[M];H.material.opacity-=p*1.2,H.scale.multiplyScalar(1+p*2.5*H.userData.size),H.material.opacity<=0&&(q.remove(H),H.geometry.dispose(),fn.splice(M,1))}En.material.opacity>0&&(En.material.opacity=Math.max(0,En.material.opacity-p*.8),En.scale.multiplyScalar(1+p*1.8)),Tr.forEach(M=>{M.ph+=p,M.g.position.set(M.cx+Math.sin(M.ph*.4)*6,1.6+Math.sin(M.ph*1.3)*.5,M.cz+Math.cos(M.ph*.33)*4),M.g.rotation.y=M.ph*.4+Math.PI/2;let H=Math.sin(M.ph*18)*1.1;M.g.userData.l.rotation.y=H,M.g.userData.r.rotation.y=-H});let P=Ns.geometry.attributes.position;for(let M=0;M<P.count;M++)P.setY(M,1.5+Math.sin(y*.8+M)*.8),P.setX(M,P.getX(M)+Math.sin(y*.5+M*3)*p*.4);if(P.needsUpdate=!0,I.forEach(M=>{M.position.x+=M.userData.speed*p,M.position.x>90&&(M.position.x=-90)}),Ar&&Ad(p),O.rotation.y+=p*.012,A.forEach(M=>{M.position.y=M.userData.y0+Math.sin(y*.5+M.userData.ph)*.3}),J.forEach(M=>{M.material.opacity=M.userData.base*Math.max(0,Math.sin(y*1.8+M.userData.ph))}),j.forEach(M=>{M.material.opacity=M.userData.base*(.55+.45*Math.sin(y*1.3+M.userData.ph))}),Rr>.6)if(G.t<0){if(G.wait-=p,G.wait<=0){let M=Vt(0,Math.PI*2);G.from.set(Math.cos(M)*180,Vt(110,170),Math.sin(M)*180-40),G.dir.set(Vt(-1,1),Vt(-.55,-.35),Vt(-.3,.3)).normalize(),G.t=0}}else{G.t+=p/1.1,B.position.copy(G.from).addScaledVector(G.dir,G.t*120);let M=B.position.clone().project(o),H=B.position.clone().addScaledVector(G.dir,10).project(o);B.material.rotation=Math.atan2(H.y-M.y,H.x-M.x),B.material.opacity=Math.sin(Math.min(1,G.t)*Math.PI)*.95,G.t>=1&&(G.t=-1,G.wait=Vt(7,16),B.material.opacity=0)}else B.material.opacity=0;let k=Pt.userData.flag;k.rotation.y=Math.sin(y*3)*.25;let z=Pt.userData.bell;z.material.emissiveIntensity=hi?.6+Math.sin(y*6)*.4:0,z.rotation.z=hi?Math.sin(y*7)*.35:0}let Ar=null;function jh(p){if(!ut.car||Ar)return!1;let y=ut.car,S={x:y.position.x,z:y.position.z,ry:y.rotation.y},P=st.nearest(ut.exit.x,ut.exit.z),k=new Set(st.doorNodes),M=st.nodes.map((it,Tt)=>Tt).filter(it=>!k.has(it)&&Math.abs(An(st.nodes[it].x,st.nodes[it].z))<.2).filter(it=>Math.hypot(st.nodes[it].x-S.x,st.nodes[it].z-S.z)>30),H=it=>it[Math.floor(Math.random()*it.length)],ct=M.length?[H(M),H(M)]:[],ot=[{x:S.x,z:S.z},{x:ut.exit.x,z:ut.exit.z}],Ft=P;return ct.concat([P]).forEach(it=>{st.path(Ft,it).forEach(Tt=>ot.push({x:Tt.x,z:Tt.z})),Ft=it}),ot.push({x:ut.exit.x,z:ut.exit.z},{x:S.x,z:S.z-Math.cos(S.ry)*.01}),ot=ot.filter((it,Tt)=>!Tt||Math.hypot(it.x-ot[Tt-1].x,it.z-ot[Tt-1].z)>.3),Ar={pts:ot,i:1,home:S,done:p,v:0,last:0},!0}function Ad(p){let y=ut.car,S=Ar,P=S.pts[S.i],k=S.i===S.pts.length-1,z=P.x-y.position.x,M=P.z-y.position.z,H=Math.hypot(z,M);if(S.v=Math.min(k?2:6.5,S.v+p*3),H<.35){if(S.i++,S.i>=S.pts.length){y.position.set(S.home.x,An(S.home.x,S.home.z),S.home.z),y.rotation.y=S.home.ry;let it=S.done;Ar=null,it&&it();return}return}let ct=Math.min(H,S.v*p);y.position.x+=z/H*ct,y.position.z+=M/H*ct,y.position.y=An(y.position.x,y.position.z);let ot=Math.atan2(z,M)+(k?Math.PI:0),Ft=y.rotation.y;for(;ot-Ft>Math.PI;)ot-=Math.PI*2;for(;ot-Ft<-Math.PI;)ot+=Math.PI*2;y.rotation.y=Ft+(ot-Ft)*Math.min(1,p*5)}let Rr=0;function Cr(){let p=new Date,y=i!=null?i:p.getHours()+p.getMinutes()/60,S=Sd(y);Rr=S.night,r.background=S.sky,r.fog.color.copy(S.sky),x.uniforms.bottom.value.copy(S.sky).lerp(new se(16777215),.18*(1-S.night)).lerp(new se(10324950),.4*S.night),x.uniforms.top.value.copy(S.sky).lerp(new se(S.night>.5?2501490:7320547),.5),d.intensity=S.amb,d.color.set(S.night>.5?13158143:16777215),d.groundColor.set(S.night>.5?8160432:12048288),g.color.copy(S.sun),g.intensity=S.power;let P=(y-6)/12*Math.PI,z=y>=5.5&&y<=18.6?P:((y+12)%24-6)/12*Math.PI,M=Math.cos(z)*70,H=Math.max(Math.sin(z),.25)*70;g.position.set(M,H,40),g.target.position.set(0,0,0),T.position.set(Math.cos(P)*200,Math.sin(P)*160,-120),T.visible=Math.sin(P)>-.05;let ct=((y+12)%24-6)/12*Math.PI;E.position.set(Math.cos(ct)*200,Math.sin(ct)*160,-120),E.visible=S.night>.3&&Math.sin(ct)>0,L.material.opacity=S.night,j.forEach(ot=>{ot.userData.base=S.night}),O.mat.color.set(S.night>.5?10131656:16777215),J.forEach(ot=>{ot.userData.base=.55+S.night*.45}),Ns.material.opacity=S.night*.95,tc.forEach(ot=>{ot.emissiveIntensity=S.night*.95}),_.forEach(ot=>{ot.intensity=S.night*18}),I.forEach(ot=>{ot.userData.mat.color.set(S.night>.5?8029096:16777215)}),Tr.forEach(ot=>{ot.g.visible=S.night<.5})}let Lo=1,Do=1;function Uo(){Lo=n.clientWidth||window.innerWidth,Do=n.clientHeight||window.innerHeight,s.setSize(Lo,Do,!1),o.aspect=Lo/Do,o.updateProjectionMatrix()}let Ei=new an;function Rd(p,y){Ei.fov=o.fov,Ei.aspect=o.aspect,Ei.near=.5,Ei.far=1e3,Ei.updateProjectionMatrix();let S=[];for(let M=0;M<48;M++){let H=M/48*Math.PI*2,ct=wr(H);S.push(new U(Math.cos(H)*ct,0,Math.sin(H)*ct))}S.push(new U(Tn[0],9+Ds.h,Tn[1])),Is.forEach(([M,H,ct,ot])=>S.push(new U(M,ot,H))),je.forEach(([M,H])=>S.push(new U(M,6.5,H)));let P=M=>{Ei.position.set(0,Math.cos(p)*M,Math.sin(p)*M).add(y),Ei.lookAt(y),Ei.updateMatrixWorld();let H=new U;return S.every(ct=>(H.copy(ct).project(Ei),Math.abs(H.x)<.97&&H.y>-.97&&H.y<.86))},k=10,z=600;for(let M=0;M<30;M++){let H=(k+z)/2;P(H)?z=H:k=H}return z}function ic(){Uo();let p=e==="port"?.6:.88,y=new U(0,0,1.5),S=Rd(p,y);return{p:new U(0,Math.cos(p)*S,Math.sin(p)*S).add(y),t:y}}function Qh(){let p=ic();a.target.copy(p.t),o.position.copy(p.p),a.update()}let Cd=1800,Pd=1900,ze=null,Pr=!1,Ir=null,sc=p=>p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;function tu(p){let y=p.userData.face||0,S=Math.sin(y),P=Math.cos(y),k=p.userData.doorZ-1.3,z=p.position.y,M=(H,ct)=>new U(p.position.x+S*(k+H),z+ct,p.position.z+P*(k+H));return{near:M(3.2,1.75),nearT:M(-1,1.45),inside:M(.35,1.6),insideT:M(-2,1.4)}}function eu(p,y,S,P){if(!S)return p.clone().lerp(y,P);let k=p.clone().lerp(y,P),z=y.clone().lerp(S,P);return k.lerp(z,P)}function Id(p,y,S){let P=tt.find(z=>z.userData.id===p);if(!P){y&&y();return}let k=tu(P);Ir={p:o.position.clone(),t:a.target.clone()},ze={mode:"in",start:performance.now(),dur:Cd,h:P,done:y,at:S&&S.at,atFired:!1,p:[Ir.p,k.near,k.inside],t:[Ir.t,k.nearT,k.insideT]},a.enabled=!1,Pr=!0}function Ld(p,y){let S=tt.find(z=>z.userData.id===p);if(!S){nu(),y&&y();return}let P=tu(S),k=Ir||ic();S.userData.hinge&&(S.userData.hinge.rotation.y=-1.7),o.position.copy(P.inside),a.target.copy(P.insideT),o.lookAt(a.target),ze={mode:"out",start:performance.now(),dur:Pd,h:S,done:y,p:[P.inside,P.near,k.p],t:[P.insideT,P.nearT,k.t]},a.enabled=!1,Pr=!0}function Dd(){if(!ze)return;let p=Math.min(1,(performance.now()-ze.start)/ze.dur),y=sc(p);o.position.copy(eu(ze.p[0],ze.p[1],ze.p[2],y)),a.target.copy(eu(ze.t[0],ze.t[1],ze.t[2],y)),o.lookAt(a.target);let S=ze.h.userData.hinge;if(S&&(ze.mode==="in"?S.rotation.y=-1.7*sc(Math.min(1,Math.max(0,(p-.25)/.45))):S.rotation.y=-1.7*(1-sc(Math.min(1,Math.max(0,(p-.2)/.5))))),ze.at&&!ze.atFired&&p>=ze.at.k&&(ze.atFired=!0,ze.at.fn()),p>=1){let P=ze.done,k=ze.mode;ze=null,k==="out"&&(Pr=!1,a.enabled=!0,a.update()),P&&P()}}function nu(){if(!Pr||ze&&ze.mode==="out")return;Pr=!1,ze=null,a.enabled=!0,tt.forEach(y=>{y.userData.hinge&&(y.userData.hinge.rotation.y=0)});let p=Ir||ic();o.position.copy(p.p),a.target.copy(p.t),a.update()}let Lr=new xr,iu=new yt,Fs=null;s.domElement.addEventListener("pointerdown",p=>{Fs={x:p.clientX,y:p.clientY}}),s.domElement.addEventListener("pointerup",p=>{if(!Fs||Math.hypot(p.clientX-Fs.x,p.clientY-Fs.y)>6){Fs=null;return}Fs=null;let y=s.domElement.getBoundingClientRect();if(iu.set((p.clientX-y.left)/y.width*2-1,-((p.clientY-y.top)/y.height)*2+1),Lr.setFromCamera(iu,o),wt.her&&wt.her.g.visible&&wt.him.g.visible&&Lr.intersectObjects([wt.her.g,wt.him.g],!0)[0]){wt.kiss>0||(wt.kiss=2.4,wt.her.sitting||(wt.her.path=[],wt.her.wait=Math.max(wt.her.wait,2.8)));return}let S=Lr.intersectObjects([X.g,Dt.g],!0)[0];if(S){let M=X.g.getObjectById(S.object.id)?X:Dt;M.sleep>0||(M.sleep=3,M.sleepIn=0,M.path=[]);return}let P=Lr.intersectObject(mt)[0];if(P){Te(P.point.x-q.position.x,P.point.z-q.position.z);return}let k=Lr.intersectObjects(tt,!0)[0];if(!k)return;let z=k.object;for(;z&&!z.userData.id;)z=z.parent;z&&t.onPick(z.userData.id)});let Dr=new U;function Ud(p){let y=tt.find(S=>S.userData.id===p);return y?(Dr.set(y.position.x,y.position.y+y.userData.top,y.position.z),Dr.project(o),{x:(Dr.x+1)/2*Lo,y:(1-Dr.y)/2*Do,visible:Dr.z<1}):null}let rc=new bo,Ur=!1,Bs=!0,su=0,ru=[];function ou(){if(!Ur)return;if(!Bs||document.hidden){Ur=!1;return}requestAnimationFrame(ou);let p=Math.min(.12,rc.getDelta()),y=rc.elapsedTime;y-su>20&&(Cr(),su=y),Td(p,y),ze?Dd():a.update(),s.render(r,o),ru.forEach(S=>S()),kn()}function oc(){Ur||(Ur=!0,rc.getDelta(),requestAnimationFrame(ou))}let au=()=>{!document.hidden&&Bs&&(Cr(),oc())},cu=()=>{Bs&&Uo()};return document.addEventListener("visibilitychange",au),window.addEventListener("resize",cu),Cr(),Qh(),oc(),/[?&]debug3d/.test(location.search)&&(window.__v3d={drive:p=>jh(p),get car(){return ut.car},renderer:s,people:Wt,couple:wt,get swing(){return re},graph:st,cat:X,dog:Dt,routine:is,realHour:ui,camera:o,controls:a,water:mt,food:we,get urgent(){return hi}}),{setUrgent(p){let y=hi;hi=p||0,!!y!=!!hi&&Wt.forEach(S=>{!S.love&&!S.helper&&(S.path=[],S.wait=Vt(0,1.5))})},setBusy(p){let y={};(t.houses||[]).forEach((S,P)=>{p&&p[S.id]>0&&(y[P]=p[S.id])}),ye=y,Kh()},anchor:Ud,onFrame(p){ru.push(p)},night(){return Rr},setTimeMode(p){i=p==="day"?11:p==="night"?22:null,Cr()},show(p){Bs=!!p,Bs&&(nu(),Uo(),Cr(),oc())},enterHouse:Id,exitHouse:Ld,drive:jh,setNames(p,y){Ze=p||null,zi=!!y,Pn()},resize:Uo,recenter:Qh,layout:e,destroy(){Ur=!1,Bs=!1,document.removeEventListener("visibilitychange",au),window.removeEventListener("resize",cu),a.dispose(),r.traverse(p=>{p.geometry&&p.geometry.dispose()}),s.dispose(),s.domElement.remove()}}}var vn=9,Kn=7,Mn=4.4,ec=7;function Ja(n,t){return new se(n).lerp(new se(16777215),t).getHex()}function ai(n,t,e,i,s){let r=new Zt;return r.position.set(t,0,e),r.rotation.y=i||0,n.add(r),r.add(D(2.2,.08,1,s||14267535,0,.78,0)),[[-1,-.42],[1,-.42],[-1,.42],[1,.42]].forEach(([o,a])=>r.add(D(.08,.78,.08,11569768,o,.39,a))),r}function Fn(n,t,e,i){let s=new Zt;return s.position.set(t,0,e),s.rotation.y=i||0,n.add(s),s.add(D(.55,.08,.55,16165309,0,.5,0)),s.add(D(.55,.6,.08,16165309,0,.82,-.26)),[[-.22,-.22],[.22,-.22],[-.22,.22],[.22,.22]].forEach(([r,o])=>s.add(D(.06,.5,.06,9206379,r,.25,o))),s}function Cs(n,t,e){n.add(D(.7,.04,.48,14211296,t,.84,e));let i=D(.7,.46,.04,14211296,t,1.07,e-.24);i.rotation.x=-.25,n.add(i);let s=D(.62,.38,.02,0,t,1.07,e-.215,new $e({color:12576498}));s.rotation.x=-.25,n.add(s)}function ci(n,t,e,i,s){let r=new Zt;r.position.set(t,0,e),r.rotation.y=i||0,n.add(r),r.add(D(1.8,2.4,.4,12883572,0,1.2,0));for(let o=0;o<4;o++){r.add(D(1.7,.06,.36,14862765,0,.3+o*.55,.03));for(let a=0;a<(s||6);a++){let c=Mi.flower[(a+o)%Mi.flower.length],l=.3+(a*7+o*3)%4*.04;r.add(D(.16,l,.28,c===16777215?10934504:c,-.7+a*.24,.33+o*.55+l/2,.05))}}return r}function Ln(n,t,e){n.add(D(.5,.5,.5,0,t,.25,e,We(dt.CLAY,16368540))),[[0,.78,0,.56],[.2,1.18,.1,.36],[-.18,1.12,-.12,.34]].forEach(([i,s,r,o],a)=>n.add(D(o,o,o,0,t+i,s,e+r,We([dt.LEAF_G,dt.LEAF_L,dt.LEAF_M][a]))))}function Bi(n,t,e,i,s,r,o,a,c){let l=new Zt;return l.position.set(t,e,i),l.rotation.y=s,n.add(l),l.add(D(r+.12,o+.12,.05,12883572,0,0,0)),l.add(D(r,o,.06,a,0,0,.01)),(c||[]).forEach(([h,u,f,d])=>l.add(D(d||.32,d||.32,.03,f,h,u,.06))),l}function Ro(n,t,e,i,s){let r=[[-.45,.25],[-.15,.45],[.15,.35],[.45,.6]],o=Bi(n,t,e,i,s,1.4,1.1,16775920);return r.forEach(([a,c],l)=>o.add(D(.2,c,.03,[16758465,10934504,14542964,14273008][l],a,-.4+c/2,.06))),o}function pd(n,t,e,i,s,r){let o=r?2.2:1.1,a=r?1.6:.9,c=Bi(n,t,e,i,s,o,a,16777215);c.add(D(o,a*.18,.04,16751536,0,a*.41,.05));for(let l=0;l<4;l++)for(let h=0;h<7;h++){let u=(l*7+h)%9===3;c.add(D(o/9,a/7,.02,u?16766687:15985894,-o/2+(h+1)*o/8,a*.2-l*a/5.5,.06))}return c}function r1(n,t,e,i,s){let r=new Zt;r.position.set(t,e,i),r.rotation.y=s,n.add(r);let o=new At(new He(.35,.35,.06,20),le(16775920));o.rotation.x=Math.PI/2,r.add(o);let a=new At(new Es(.36,.04,6,20),le(16165309));r.add(a);let c=D(.04,.18,.02,4865855,0,.08,.05),l=D(.03,.27,.02,4865855,0,.12,.06);return r.add(c,l),r.userData.hands=[c,l],r}function o1(n,t,e){let i=new At(new ln(.28,12,10),le(16758465));i.scale.set(1.3,1,1),i.position.set(t,1.1,e),n.add(i),n.add(D(.12,.1,.1,16751536,t+.38,1.1,e)),[[-.15,-.12],[.15,-.12],[-.15,.12],[.15,.12]].forEach(([s,r])=>n.add(D(.07,.12,.07,16751536,t+s,.86,e+r))),n.add(D(.12,.02,.03,9202282,t,1.38,e));for(let s=0;s<3;s++)for(let r=0;r<2+s;r++){let o=new At(new He(.09,.09,.03,12),le(16111752));o.position.set(t-.7+s*.22,.84+r*.035,e+.1),n.add(o)}}function md(n,t,e,i){let s=new Zt;s.position.set(t,0,e),s.rotation.y=i||0,n.add(s),s.add(D(1,1.1,.9,10135480,0,.55,0));let r=new At(new He(.14,.14,.05,14),le(16111752));return r.rotation.x=Math.PI/2,r.position.set(.15,.6,.46),s.add(r),s.add(D(.06,.3,.05,16111752,-.3,.6,.46)),s}function a1(n,t,e,i){let s=new Zt;return s.position.set(t,0,e),s.rotation.y=i||0,n.add(s),s.add(D(2,.08,.45,12883572,0,1.3,0)),s.add(D(2,.08,.45,12883572,0,.6,0)),[-1,1].forEach(r=>s.add(D(.08,1.4,.45,11569768,r*.96,.7,0))),[.6,1.3].forEach((r,o)=>[-.65,-.2,.25,.7].forEach((a,c)=>{let l=new At(new He(.15,.15,.4,12),new xe({color:15136507,transparent:!0,opacity:.7}));l.position.set(a,r+.24,0),s.add(l);let h=.08+(c+o*2)%4*.08,u=new At(new He(.12,.12,h,12),le(16111752));u.position.set(a,r+.06+h/2,0),s.add(u)})),s}function c1(n,t,e,i){let s=new Zt;return s.position.set(t,0,e),s.rotation.y=i||0,n.add(s),s.add(D(.9,1.5,.7,10934504,0,.75,0)),[.35,.8,1.25].forEach(r=>{s.add(D(.8,.38,.04,12576498,0,r,.36)),s.add(D(.25,.05,.05,16775920,0,r+.08,.39))}),s}function l1(n,t,e){[0,2.1,4.2].forEach(r=>{let o=D(.04,1.4,.04,7035470,t+Math.cos(r)*.25,.65,e+Math.sin(r)*.25);o.rotation.set(Math.sin(r)*.3,0,-Math.cos(r)*.3),n.add(o)}),n.add(D(.4,.28,.25,4865855,t,1.45,e));let i=new At(new He(.09,.09,.15,12),le(3025462));i.rotation.x=Math.PI/2,i.position.set(t,1.45,e+.18),n.add(i);let s=new At(new Es(.4,.05,6,24),new $e({color:16774351}));s.position.set(t-.9,1.7,e-.3),n.add(s),n.add(D(.04,1.7,.04,7035470,t-.9,.85,e-.3))}function h1(n,t,e,i,s){let r=Bi(n,t,e,i,s,1.2,.7,15785156);[-.4,-.13,.13,.4].forEach((o,a)=>{r.add(D(.05,.05,.08,9206379,o,.18,.08)),r.add(D(.1,.22,.03,[16111752,10934504,16758465,10738109][a],o,-.02,.08))})}var zh={work:{first:"list",build(n,t){let e=ai(n,-1.6,-2.4);Cs(e,.2,0),e.add(D(.3,.2,.22,16777215,-.75,.92,.1)),Fn(n,-1.4,-1.55,Math.PI),t.seat={x:-1.4,z:-1.6,ry:Math.PI,y:.54},Bi(n,-4.45,1.8,.4,Math.PI/2,2.6,1.4,16777215,[[-.9,.35,16773544],[-.4,.4,16758465],[.1,.3,10934504],[.6,.38,10738109],[-.8,-.2,16758465],[-.2,-.25,16773544],[.5,-.2,14273008]]),ci(n,4.25,-.6,-Math.PI/2),Ro(n,4.44,2.2,1.6,-Math.PI/2),l1(n,3.4,4.6),Ln(n,-3.9,-3)},corners:{list:[.8,2.9,5.8,-1.3,1,-2.2],board:[2.4,2.7,4.2,-4.3,1.6,.3],stats:[-2.4,2.7,4.2,4.3,1.5,.3],posts:[-.6,2.5,8.6,3.2,1.3,4.4]}},money:{first:"overview",build(n,t){let e=ai(n,0,-2.3,0,16368540);o1(e,.4,0),e.add(D(.35,.05,.45,9417689,-.5,.84,.1)),Fn(n,.2,-1.45,Math.PI),t.seat={x:.2,z:-1.5,ry:Math.PI,y:.54},pd(n,-4.44,1.9,-.8,Math.PI/2,!0),Ro(n,-4.44,1.9,2.1,Math.PI/2),a1(n,4.2,-1,-Math.PI/2),c1(n,3.6,-3,0),md(n,3.6,2,-Math.PI/2.5),Ln(n,-3.9,-3),t.windowX=-1.9},corners:{overview:[.6,2.9,5.8,0,1,-2.3],calendar:[2.6,2.7,3.6,-4.3,1.8,-.8],stats:[2.6,2.7,5.4,-4.3,1.8,1.8],budget:[-2.4,2.7,3.6,4.2,1.1,-1.2],history:[-1.6,2.7,3.8,3.4,1,-3],categories:[-1.6,2.5,6.2,3.6,.7,2]}},calendar:{first:"main",build(n,t){pd(n,-.1,2.05,-3.44,0,!0),r1(n,-2.6,2.5,-3.44,0),t.windowX=2.9;let e=ai(n,-1.2,-1.6);e.add(D(.5,.06,.36,16773544,.3,.84,0)),e.add(D(.04,.04,.3,15834032,.65,.88,0)),Fn(n,-1,-.75,Math.PI),t.seat={x:-1,z:-.8,ry:Math.PI,y:.54},ci(n,4.25,.2,-Math.PI/2,5),Ln(n,3.8,2.6)},corners:{main:[-.2,2.9,5.8,-.4,1.5,-2.8]}},account:{first:"main",build(n,t){md(n,3.7,-2.6,-.3),h1(n,-.5,2,-3.44,0),t.windowX=1.7;let e=ai(n,-1.8,-1.8,.2);Cs(e,0,0),Fn(n,-1.75,-.95,Math.PI+.2),t.seat={x:-1.72,z:-1,ry:Math.PI+.2,y:.54},ci(n,-4.25,.6,Math.PI/2,5),Ln(n,3.9,1.8)},corners:{main:[-.2,2.9,5.8,-.9,1.2,-2.4]}},love:{first:"main",build(n,t){let i=new Zt;i.position.set(.5,0,-2.4),n.add(i),i.add(D(2.6,.45,.9,16165309,0,.32,0)),i.add(D(2.6,.75,.25,15834032,0,.8,-.35)),[-1,1].forEach(B=>i.add(D(.25,.65,.9,15834032,B*1.3,.45,0)));let s=ns(16744350);s.scale.setScalar(.4),s.position.set(1,.75,-.15),i.add(s),t.seats=[{x:.05,z:-2.25,ry:0,y:.56},{x:.95,z:-2.25,ry:0,y:.56}],t.sofa=!0,t.couple=!0,[[1.1,2.95,.55,3095915],[1.4,2.95,-.55,15230251]].forEach(([B,G,q,Y])=>{let xt=new Zt;xt.position.set(B,G,-3.44+.06),xt.rotation.z=q,n.add(xt),xt.add(D(.06,.34,.05,16777215,0,-.5,0)),xt.add(D(.025,.34,.025,10135480,0,-.17,0));let Q=new At(new Es(.17,.02,6,22),le(Y));Q.scale.y=1.3,Q.position.y=.2,xt.add(Q);for(let Et=-3;Et<=3;Et++)xt.add(D(.004,.42,.004,16777215,Et*.045,.2,0)),xt.add(D(.32,.004,.004,16777215,0,.2+Et*.055,0))});{let B=document.createElement("canvas");B.width=128,B.height=64;let G=B.getContext("2d");G.fillStyle="#ffffff",G.fillRect(0,0,128,64),G.fillStyle="#e8652b",G.fillRect(0,8,128,16),G.fillStyle="#26305a",G.beginPath(),G.moveTo(0,64),G.lineTo(0,24),G.lineTo(14,24),G.lineTo(30,64),G.fill(),G.fillStyle="#26305a",G.fillRect(0,6,128,2),G.fillRect(26,28,102,2),G.font="bold 13px sans-serif",G.fillText("YONEX",74,54),G.beginPath(),G.arc(60,49,3,0,7),G.arc(67,49,3,0,7),G.lineWidth=2,G.strokeStyle="#26305a",G.stroke();let q=new cn(B);q.colorSpace=Pe;let Y=le(16777215),xt=new xe({map:q}),Q=new At(new Be(1.15,.58,.36),[Y,Y,le(15230251),Y,xt,xt]);Q.position.set(1.25,1.62,-3.44+.22),Q.castShadow=!0,n.add(Q),[-.28,.28].forEach(Et=>{n.add(D(.06,.5,.03,16777215,1.25+Et*.9,2.02,-3.44+.2))}),n.add(D(.5,.06,.06,2502746,1.25,2.28,-3.44+.2)),n.add(D(.06,.06,.16,9206379,1.25,2.32,-3.44+.1))}n.add(D(1.42,1.08,.06,12883572,-.4,2.55,-3.44+.02)),n.add(D(1.28,.94,.07,16775920,-.4,2.55,-3.44+.03));let r=new At(new $i(1.1,.78),new $e({color:16766687}));r.position.set(-.4,2.55,-3.44+.075),r.userData.pick="frame",n.add(r),t.frames=[r];for(let B=0;B<14;B++){let G=new At(new ln(.05,6,5),new $e({color:[16773544,16758465][B%2]}));G.position.set(-4+B*.62,3.45-Math.sin(B*.9)*.08,-3.38),n.add(G)}let o=new Zt;o.position.set(2.45,0,-2.4),n.add(o);let a=new At(new He(.42,.42,.06,18),le(14861214));a.position.y=.6,o.add(a),o.add(D(.07,.6,.07,11569768,0,.3,0));let c=new At(new He(.22,.25,.04,14),le(11569768));c.position.y=.02,o.add(c);let l=new At(new ln(.13,16,12),le(13231096));l.scale.y=1.3,l.position.y=.8,o.add(l),[[0,1.08,0,16758465],[.08,1.02,.05,16773544],[-.08,1.04,-.03,16165309]].forEach(([B,G,q,Y])=>{o.add(D(.015,.25,.015,8173679,B*.6,.95,q*.6));let xt=new At(new ln(.06,10,8),le(Y));xt.position.set(B,G,q),o.add(xt)});let h=new Zt;h.userData.pick="up",n.add(h);let u=We(dt.PLANKS),f=We(dt.PLANK_GREY,16165309);for(let B=0;B<10;B++){let G=-1.35-B*.32,q=(B+1)*.44;h.add(D(.32,q,.95,0,G,q/2,-2.95,u)),h.add(D(.32,.04,.6,0,G,q+.02,-2.95,f)),B%3===0&&h.add(D(.06,.8,.06,16777215,G,q+.4,-2.45))}{let B=Math.hypot(3.2,4.4),G=D(B,.08,.08,16777215,-1.35-1.6+.16,2.2+.8+.22,-2.45);G.rotation.z=-Math.atan2(4.4,3.2),h.add(G)}let d=fd(Math.PI/2,.8);d.position.set(-1.85,1.75,-2.35),h.add(d);let g=new Zt;g.position.set(1.3,0,1.25),n.add(g),g.add(D(1.5,.06,.95,14861214,0,.76,0)),[[-.65,-.38],[.65,-.38],[-.65,.38],[.65,.38]].forEach(([B,G])=>g.add(D(.06,.76,.06,11569768,B,.38,G))),[-1,1].forEach(B=>{let G=Ao("bowl",{soup:"#f6efe0",noodle:"#fffaf0"},.3);G.position.set(B*.4-.16,.79,-.18),g.add(G);let q=Ao("bowl",{soup:"#d98c4a",top:["#8a5233","#8a5233","#a86a40","#7fc46a"]},.3);q.position.set(B*.4+.16,.79,-.18),g.add(q),g.add(D(.32,.012,.012,12883572,B*.4,.8,.05)),g.add(D(.32,.012,.012,12883572,B*.4,.8,.08))});let _=Ao("plate",{dots:["#6fb85a","#8fcc7c","#6fb85a","#8fcc7c","#6fb85a","#8fcc7c","#6fb85a","#8fcc7c"]},.4);_.position.set(0,.79,-.05),g.add(_),Fn(n,1.3-.4,1.25-.85,0),Fn(n,1.3+.4,1.25-.85,0),t.dining=[{x:1.3-.4,z:1.25-.8,ry:0,y:.54},{x:1.3+.4,z:1.25-.8,ry:0,y:.54}],t.windowX=3.1,Ln(n,3.95,-2.9),t.dinner=g,t.defaultDishes=g.children.slice(5);let x=14,m=new Zt;m.position.x=x,n.add(m);let T=Kn+ec,E=ec/2;for(let B=0;B<12;B++){let G=D(vn/12,.1,T,B%2?15981768:15651517,-vn/2+(B+.5)*vn/12,-.05,E);G.castShadow=!1,m.add(G)}let v=D(vn,Mn,.12,t.wall,0,Mn/2,-Kn/2);v.castShadow=!1,m.add(v),[-1,1].forEach(B=>{let G=D(.12,Mn,T,t.wall2,B*vn/2,Mn/2,E);G.castShadow=!1,m.add(G)});let V=D(vn,.12,T,0,0,Mn+.06,E,new xe({color:t.ceil,emissive:t.ceil,emissiveIntensity:.3}));V.castShadow=!1,m.add(V),m.add(D(1.9,1.5,.08,16777215,2.9,2.3,-Kn/2+.06)),m.add(D(1.7,1.3,.09,0,2.9,2.3,-Kn/2+.07,t.skyMat)),[-1,1].forEach(B=>m.add(D(.26,1.8,.05,16762063,2.9+B*1.08,2.25,-Kn/2+.2))),m.add(D(2.8,.4,3.4,15918810,0,.28,-1.85)),m.add(D(2.6,.22,3.2,16777215,0,.58,-1.85)),m.add(D(3,1.5,.22,16171471,0,1,-3.48)),m.add(D(2.7,.18,.1,16372702,0,1.6,-3.36)),[-.62,.62].forEach(B=>m.add(D(1,.2,.55,16775925,B,.8,-3))),m.add(D(2.72,.12,2.35,16368595,0,.98,-1.25)),m.add(D(2.74,.14,.32,16777215,0,.99,-2.3)),[-1.4,1.4].forEach(B=>m.add(D(.12,.5,2.3,16368595,B,.75,-1.25)));let L=ns(16748465);L.scale.setScalar(.32),L.position.set(0,1.25,-3.3),m.add(L),[-1.95,1.95].forEach(B=>{m.add(D(.75,.62,.6,14861214,B,.31,-3.05)),m.add(D(.79,.05,.64,15785156,B,.64,-3.05)),m.add(D(.5,.05,.02,12883572,B,.42,-2.74))}),m.add(D(.22,.22,.22,16171471,-1.95,.77,-3.05));let I=new At(new Be(.4,.3,.4),new xe({color:16773590,emissive:16765562,emissiveIntensity:0,map:oi(dt.PLASTER)}));I.position.set(-1.95,1.02,-3.05),m.add(I),t.bedLamp=I;let O=new Zt;O.position.set(1.95,.7,-3),O.rotation.y=-.3,O.userData.pick="album",m.add(O),O.add(D(.5,.08,.38,13231096,0,0,0)),O.add(D(.04,.085,.38,11127784,-.25,0,0));let A=ns(16027569);A.scale.setScalar(.15),A.rotation.x=-Math.PI/2,A.position.set(.02,.045,.06),O.add(A),t.album=O;let w=new Zt;w.userData.pick="down",m.add(w),w.add(D(1.3,.04,2.6,12098694,-3.75,.005,1.2)),[.1,.6,1.1,1.6,2.1].forEach((B,G)=>w.add(D(1.2,.03,.42,10257008,-3.75,.02,.05+B-G*.02)));for(let B=0;B<6;B++)w.add(D(.06,.85,.06,16777215,-3.05,.42,-.05+B*.5));w.add(D(.08,.08,2.6,16777215,-3.05,.86,1.2));let F=fd(-Math.PI*3/4,.45);F.position.set(-3.75,.75,1.2),w.add(F);let j=new At(new He(1,1,.03,32),le(14281207));j.scale.set(1.8,1,1.1),j.position.set(.6,.02,1),m.add(j),Ln(m,3.95,.4);for(let B=0;B<14;B++){let G=new At(new ln(.05,6,5),new $e({color:[16773544,16758465][B%2]}));G.position.set(-4+B*.62,3.45-Math.sin(B*.9)*.08,-3.38),m.add(G)}t.bedSpots=[{x:x-.45,z:-1.42},{x:x+.45,z:-1.42}]},corners:{main:[.2,2.8,6.6,0,1.3,-1.9],bed:[14.2,2.6,3.4,14,.9,-2.3],meal:[1,2.6,5.6,1.2,1,-.6],album:[15.75,1.75,-1.85,15.9,.55,-3.05]}},game:{first:"main",build(n,t){n.add(D(2.6,.6,.6,12883572,0,.3,-3.05)),n.add(D(2.2,1.3,.1,3025462,0,1.35,-3.15));let e=D(2.05,1.15,.02,0,0,1.35,-3.09,new $e({color:10934504}));n.add(e),[[-.6,1.55,16758465],[.1,1.2,16111752],[.6,1.6,10738109]].forEach(([s,r,o])=>n.add(D(.3,.3,.01,0,s,r,-3.075,new $e({color:o})))),n.add(D(.5,.12,.35,16777215,.8,.66,-2.95));let i=new At(new ln(.7,14,10),le(16165309));i.scale.set(1.1,.6,1),i.position.set(.2,.4,-.4),i.castShadow=!0,n.add(i),t.seats=[{x:.2,z:-.45,ry:Math.PI,y:.78}],t.gamer=!0,Ro(n,-4.44,2.2,-.8,Math.PI/2),Bi(n,4.44,2.2,-.4,-Math.PI/2,1.2,1.5,14273008,[[0,.3,16758465,.5],[0,-.35,16111752,.4]]),ci(n,-4.25,1.8,Math.PI/2,5),Ln(n,3.9,-3),t.windowX=2.9},corners:{main:[.4,2.8,5.6,0,1.1,-2.6]}},language:{first:"main",build(n,t){let e=ai(n,-1.2,-2.3,0,16171471);e.add(D(.5,.05,.36,16777215,-.2,.83,0)),e.add(D(.5,.05,.36,16774888,.32,.83,0)),e.add(D(.02,.06,.36,12883572,.06,.84,0)),[10934504,16758465,16111752].forEach((s,r)=>e.add(D(.4,.07,.28,s,.85,.83+r*.075,-.05)));let i=new At(new ln(.18,20,14),le(10473444));i.position.set(-.8,1.08,0),e.add(i),e.add(D(.05,.25,.05,12883572,-.8,.9,0)),Fn(n,-1,-1.45,Math.PI),t.seat={x:-1,z:-1.5,ry:Math.PI,y:.54},Bi(n,-4.45,1.9,.2,Math.PI/2,2.4,1.4,16777215,[[-.75,.35,16758465],[-.25,.35,16773544],[.25,.35,10934504],[.75,.35,10738109],[-.5,-.25,14273008],[0,-.25,16758465],[.5,-.25,16773544]]),ci(n,4.25,-.4,-Math.PI/2,5),Ro(n,4.44,2.3,1.8,-Math.PI/2),Ln(n,3.9,-3),t.windowX=2.2},corners:{main:[-.3,2.9,5.8,-.9,1.1,-2.3]}},skills:{first:"main",build(n,t){let e=ai(n,-.6,-2.3,0,16111752);Cs(e,-.3,0),e.add(D(.45,.04,.32,16777215,.45,.83,.05)),e.add(D(.02,.02,.3,15235487,.62,.86,.05));let i=D(.6,.3,.32,15035243,3.4,.15,-2.6);n.add(i),n.add(D(.3,.05,.05,3814720,3.4,.35,-2.6)),Fn(n,-.4,-1.45,Math.PI),t.seat={x:-.4,z:-1.5,ry:Math.PI,y:.54};let s=new Zt;s.position.set(-3.3,0,-1.6),s.rotation.y=.5,n.add(s),[-.4,.4].forEach(r=>{let o=D(.07,1.9,.07,12883572,r,.95,0);o.rotation.z=-r*.15,s.add(o)}),s.add(D(1,.8,.05,16777215,0,1.35,.06)),s.add(D(.5,.3,.06,10934504,-.15,1.45,.08)),s.add(D(.25,.25,.06,16758465,.25,1.2,.08)),Bi(n,4.44,2,-.5,-Math.PI/2,1.6,1.2,16777215,[[-.5,-.25,10738109,.3],[-.15,-.1,16111752,.3],[.2,.05,16758465,.3],[.55,.2,10934504,.3]]),ci(n,-4.25,1.4,Math.PI/2,5),Ln(n,3.9,2.4),t.windowX=2.4},corners:{main:[0,2.9,5.8,-.3,1.1,-2.2]}},notes:{first:"main",build(n,t){let e=ai(n,-.8,-2.3,0,16111752);Cs(e,.4,0),[16758465,10934504,16773544].forEach((i,s)=>e.add(D(.36,.05,.48,i,-.5,.83+s*.055,.02+s*.03))),Fn(n,-.6,-1.45,Math.PI),t.seat={x:-.6,z:-1.5,ry:Math.PI,y:.54},Bi(n,-.6,2.2,-3.44,0,2.6,1.3,14267535,[[-1,.35,16773544],[-.55,.3,16758465],[-.1,.38,10934504],[.35,.32,10738109],[.85,.36,16773544],[-.8,-.25,14273008],[-.3,-.22,16773544],[.2,-.28,16758465],[.7,-.24,10934504]]),ci(n,4.25,-.4,-Math.PI/2,5),Ln(n,-3.9,-3),t.windowX=2.8},corners:{main:[-.2,2.9,5.8,-.6,1.3,-2.4]}},goals:{first:"main",build(n,t){Bi(n,0,2.15,-3.44,0,3,1.6,16777215,[[-1.1,.35,10934504,.45],[-.45,.4,16758465,.4],[.55,.38,10738109,.45],[1.15,.3,16111752,.4],[-.9,-.35,14273008,.45],[.95,-.35,16758465,.4]]);let e=ns(16765803);e.scale.setScalar(.5),e.position.set(0,2.1,-3.3),n.add(e);let i=ai(n,-1.8,-1.9,.25,14273008);Cs(i,0,0),Fn(n,-1.7,-1.05,Math.PI+.25),t.seat={x:-1.68,z:-1.1,ry:Math.PI+.25,y:.54};let s=new At(new He(.22,.12,.36,18),le(16107596));s.position.set(3.7,1.28,-2.7),n.add(s),n.add(D(.5,.9,.5,15785156,3.7,.45,-2.7)),n.add(D(.2,.12,.2,16107596,3.7,1,-2.7)),Ln(n,-3.9,-3),t.windowX=3.2},corners:{main:[.2,2.8,5.8,-.2,1.4,-2.4]}},health:{first:"main",build(n,t){let e=D(1,.04,2,10738109,-1.6,.03,-.6);e.castShadow=!1,n.add(e),[[-.7,-1.4],[-.45,-1.4]].forEach(([o,a])=>{n.add(D(.36,.05,.05,9080729,o,.12,a)),[-.16,.16].forEach(c=>{let l=new At(new He(.1,.1,.08,16),le(15834032));l.rotation.z=Math.PI/2,l.position.set(o+c,.12,a),n.add(l)})}),n.add(D(.9,1.6,.8,16777215,3.6,.8,-2.9)),n.add(D(.05,.4,.05,12633806,3.2,1,-2.48)),n.add(D(.9,.04,.82,15328478,3.6,1.1,-2.9));let i=ai(n,1.2,-2.4,0,16766665),s=new At(new ln(.25,20,12,0,Math.PI*2,Math.PI/2,Math.PI/2),le(16777215));s.position.set(0,1.04,0),i.add(s),[[16744319,-.08,0],[16765803,.08,.04],[10147472,0,-.08]].forEach(([o,a,c])=>{let l=new At(new ln(.09,14,10),le(o));l.position.set(a,1.04,c),i.add(l)});let r=new At(new He(.07,.07,.3,14),le(10473444));r.position.set(.5,.98,.1),i.add(r),Fn(n,1.4,-1.55,Math.PI),t.seat={x:1.4,z:-1.6,ry:Math.PI,y:.54},Ro(n,-4.44,2.2,-.6,Math.PI/2),Ln(n,-3.9,-3),t.windowX=-.6},corners:{main:[.4,2.8,5.8,.2,1,-2]}},law:{first:"main",build(n,t){ci(n,-4.25,-.8,Math.PI/2,5),ci(n,-4.25,1.4,Math.PI/2,5),ci(n,4.25,-.4,-Math.PI/2,5);let e=ai(n,.2,-2.3,0,12883572);Cs(e,-.4,0);let i=new Zt;i.position.set(.55,.83,0),e.add(i),i.add(D(.04,.5,.04,14267466,0,.25,0)),i.add(D(.5,.03,.03,14267466,0,.48,0)),[-.24,.24].forEach(s=>{let r=new At(new He(.09,.06,.03,16),le(14267466));r.position.set(s,.3,0),i.add(r),i.add(D(.01,.18,.01,14267466,s,.39,0))}),Fn(n,.4,-1.45,Math.PI),t.seat={x:.4,z:-1.5,ry:Math.PI,y:.54},Ln(n,3.9,2.4),t.windowX=2.4},corners:{main:[.2,2.9,5.8,.1,1.2,-2.3]}},other:{first:"main",build(n,t){let e=ai(n,-1,-2.3);Cs(e,0,0),Fn(n,-.8,-1.45,Math.PI),t.seat={x:-.8,z:-1.5,ry:Math.PI,y:.54},ci(n,4.25,-.6,-Math.PI/2),Ln(n,-3.9,-3)},corners:{main:[0,2.9,5.8,0,1.1,-2]}}};function u1(n,t){Zh.length=0,t=t||{};let e=zh[t.house]||(t.kind==="game"?zh.game:zh.other),i=new ro({antialias:!0});i.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),i.shadowMap.enabled=!0,i.shadowMap.type=Ha,n.appendChild(i.domElement);let s=new oo,r=new an(48,1,.1,100),o=Ja(t.roof||16165309,.72),a=Ja(t.roof||16165309,.55);s.background=new se(Ja(t.roof||16165309,.82));let c=new Zt;s.add(c);let l=Kn+ec,h=ec/2;for(let $=0;$<12;$++){let pt=D(vn/12,.1,l,$%2?15323054:14861214,-vn/2+($+.5)*vn/12,-.05,h);pt.castShadow=!1,c.add(pt)}let u=D(vn,Mn,.12,o,0,Mn/2,-Kn/2);u.castShadow=!1,c.add(u),[-1,1].forEach($=>{let pt=D(.12,Mn,l,a,$*vn/2,Mn/2,h);pt.castShadow=!1,pt.receiveShadow=!0,c.add(pt)});let f=Ja(t.roof||16165309,.9),d=D(vn,.12,l,0,0,Mn+.06,h,new xe({color:f,emissive:f,emissiveIntensity:.3}));d.castShadow=!1,c.add(d);let g=$=>{$.castShadow=!1,c.add($)};g(D(vn,.16,.12,16777215,0,Mn-.08,-Kn/2+.1)),[-1,1].forEach($=>g(D(.12,.16,l,16777215,$*(vn/2-.1),Mn-.08,h))),g(D(vn,.14,.04,16777215,0,.07,-Kn/2+.08)),[-1,1].forEach($=>g(D(.04,.14,l,16777215,$*(vn/2-.08),.07,h)));let _=new $e({color:12575733}),x=new At(new He(1,1,.03,32),le(16176348));x.scale.set(2,1,1.3),x.position.set(.3,.02,.6),x.receiveShadow=!0,c.add(x);let m=D(.03,.55,.03,9206379,.3,Mn-.27,.3);m.castShadow=!1,c.add(m);let T=new At(new Be(.6,.4,.6),new xe({color:16773544,emissive:16765562,emissiveIntensity:0,map:oi(dt.PLASTER)}));T.position.set(.3,Mn-.72,.3),T.castShadow=!1,c.add(T);let E={wall:o,wall2:a,ceil:f,skyMat:_};e.build(c,E);{let $=E.windowX!=null?E.windowX:2.2,pt=2.1,ht=-Kn/2;c.add(D(1.9,1.5,.08,16777215,$,pt,ht+.06)),c.add(D(1.7,1.3,.09,0,$,pt,ht+.07,_)),c.add(D(.05,1.3,.1,16777215,$,pt,ht+.1)),c.add(D(1.7,.05,.1,16777215,$,pt,ht+.1));let C=D(2.5,.05,.05,12883572,$,pt+.9,ht+.2);C.castShadow=!1,c.add(C),[-1,1].forEach(b=>{let W=D(.24,1.75,.05,16762063,$+b*1.08,pt+0,ht+.2);W.castShadow=!1,c.add(W);let J=D(.28,.06,.07,16165309,$+b*1.08,pt-.25,ht+.22);J.castShadow=!1,c.add(J)})}let v=[];c.traverse($=>{$.userData.hands&&(v=$.userData.hands)});let V=E.seats||(E.seat?[E.seat]:[]),L=t.looks||(t.look?[t.look]:[]),I=V.slice(0,L.length).map(($,pt)=>{let ht=vd(L[pt]);return c.add(ht.g),ht.g.position.set($.x,$.y-Gh,$.z),ht.g.rotation.y=$.ry,ht.parts.legL.rotation.x=ht.parts.legR.rotation.x=-1.45,ht}),O=E.sofa||E.gamer?null:I[0]||null,A="",w=[];E.couple&&I.forEach(($,pt)=>{$.g.userData.pick="couple";let ht=t.names&&(pt===0?t.names.her:t.names.him)||(pt===0?"namu":"hunf"),C=t1(ht,pt===0?"#d4618c":"#4f7fb8",.19);c.add(C),w.push(C)});let F=(()=>{let $=ns(16744350);return $.scale.setScalar(.16),$.visible=!1,c.add($),$})(),j=-1,B="",G=!1,q=!1,Y=()=>B==="bed"?"bed":A==="lunch"||A==="dinner"?"meal":e.corners[t.corner]?t.corner:e.first;function xt($,pt){B=$,ie(Y(),pt)}let Q=Ed("z Z z","#7a6a9a",.9,.45);if(c.add(Q),t.onPick){let $=new xr,pt=new yt,ht=null,C=0,b=!1,W=0,J=i.domElement,rt=(ut,Pt)=>{let Lt=J.getBoundingClientRect();pt.set((ut-Lt.left)/Lt.width*2-1,-((Pt-Lt.top)/Lt.height)*2+1),$.setFromCamera(pt,r);let st=$.intersectObjects(c.children,!0).find(Wt=>{if(Wt.object.isSprite)return!1;let wt=Wt.object;for(;wt&&!wt.userData.pick;)wt=wt.parent;return!!wt});if(!st)return"";let Ht=st.object;for(;Ht&&!Ht.userData.pick;)Ht=Ht.parent;return Ht.userData.pick},tt=()=>{let ut=new U;w[0].getWorldPosition(ut);let Pt=new U;w[1].getWorldPosition(Pt),ut.add(Pt).multiplyScalar(.5).project(r);let Lt=J.getBoundingClientRect();t.onPick("couple-menu",{x:Lt.left+(ut.x+1)/2*Lt.width,y:Lt.top+(1-ut.y)/2*Lt.height})},Ct=ut=>{if(ut==="couple"){j<0&&(j=0);return}if(ut==="up"||ut==="down"){G=!0,xt(ut==="up"?"bed":"main");return}if(ut==="album"){q=!0,ie("album"),setTimeout(()=>t.onPick("album"),750);return}t.onPick(ut)};J.addEventListener("contextmenu",ut=>ut.preventDefault()),J.addEventListener("pointerdown",ut=>{ht={x:ut.clientX,y:ut.clientY,type:ut.pointerType},b=!1,clearTimeout(C),ut.pointerType!=="mouse"&&E.couple&&rt(ut.clientX,ut.clientY)==="couple"&&(C=setTimeout(()=>{b=!0,tt()},520))}),J.addEventListener("pointermove",ut=>{ht&&Math.hypot(ut.clientX-ht.x,ut.clientY-ht.y)>8&&clearTimeout(C)}),J.addEventListener("pointerup",ut=>{if(clearTimeout(C),!ht||b||Math.hypot(ut.clientX-ht.x,ut.clientY-ht.y)>8){ht=null;return}let Pt=ht.type;ht=null;let Lt=rt(ut.clientX,ut.clientY);if(Lt){if(Lt==="couple"&&Pt==="mouse"){clearTimeout(W),W=setTimeout(()=>Ct("couple"),260);return}Ct(Lt)}}),J.addEventListener("dblclick",ut=>{!E.couple||rt(ut.clientX,ut.clientY)!=="couple"||(clearTimeout(W),tt())})}let Et=E.gamer?I[0]:null,gt=new Mo(16777215,14861214,1.4);s.add(gt);let zt=new Eo(16774374,1.6);zt.position.set(2.5,Mn-.3,8),zt.target.position.set(0,0,-2),s.add(zt.target),zt.castShadow=!0,zt.shadow.mapSize.set(1024,1024),Object.assign(zt.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:.5,far:25}),zt.shadow.bias=-.001,s.add(zt);let oe=new vo(16767392,0,12,1.3);oe.position.set(.3,Mn-1.1,.3),s.add(oe);function Me(){let $=new Date,pt=t.timeMode==="day"?11:t.timeMode==="night"?22:$.getHours()+$.getMinutes()/60,ht=Sd(pt);_.color.copy(ht.sky),gt.intensity=1.5-ht.night*.7,zt.intensity=1.6*(1-ht.night)+.2,oe.intensity=ht.night*8,T.material.emissiveIntensity=ht.night,v.length&&(v[0].rotation.z=-($.getHours()%12)/12*Math.PI*2,v[1].rotation.z=-$.getMinutes()/60*Math.PI*2)}let ft=new U,bt=new U,Xt=new U,Mt=new U;function Qt($){return e.corners[$]||e.corners[e.first]}function ie($,pt){let ht=Qt($);Xt.set(ht[0],ht[1],ht[2]),Mt.set(ht[3],ht[4],ht[5]),pt&&(ft.copy(Xt),bt.copy(Mt))}ie(t.corner,!0),t.walkIn&&(ft.set(0,1.7,Kn/2+3.2),bt.set(0,1.4,-Kn/2));function te(){let $=n.clientWidth||innerWidth,pt=n.clientHeight||innerHeight;i.setSize($,pt,!1),r.aspect=$/pt,r.fov=$/pt<.9?64:50,$/pt<.9?r.setViewOffset($,pt,0,-pt*.2,$,pt):r.clearViewOffset(),r.updateProjectionMatrix()}te();let de=()=>te();window.addEventListener("resize",de);let mt=new bo,St=new U,N=!0,Yt=0;function vt(){if(!N||(requestAnimationFrame(vt),document.hidden))return;let $=Math.min(.1,mt.getDelta()),pt=mt.elapsedTime;if(ft.lerp(Xt,Math.min(1,$*1.6)),bt.lerp(Mt,Math.min(1,$*1.6)),r.position.copy(ft),r.lookAt(bt),Qy(pt),E.couple){let ht=new Date,C=ht.getHours()+ht.getMinutes()/60,b=C>=22||C<6.5?"sleep":C>=11.5&&C<13?"lunch":C>=18.5&&C<19.75?"dinner":"sofa";if(b!==A){A=b,!G&&!q&&xt(b==="sleep"?"bed":"main",!B&&!t.walkIn);let W=b==="lunch"||b==="dinner"?E.dining:E.seats;I.forEach((J,rt)=>{if(b==="sleep"){let tt=E.bedSpots[rt];J.g.position.set(tt.x,.9,tt.z),J.g.rotation.set(-Math.PI/2,0,0),J.parts.legL.rotation.x=J.parts.legR.rotation.x=0}else J.g.position.set(W[rt].x,W[rt].y-Gh,W[rt].z),J.g.rotation.set(0,W[rt].ry,0),J.parts.legL.rotation.x=J.parts.legR.rotation.x=-1.45;J.sleepMap||(J.sleepMap=Md(J.parts.look,!0)),J.awakeMap||(J.awakeMap=J.parts.mat.map),J.parts.mat.map=b==="sleep"?J.sleepMap:J.awakeMap,J.parts.mat.needsUpdate=!0}),Q.visible=b==="sleep"}if(I.forEach((W,J)=>{let rt=J===0?-1:1;A==="lunch"||A==="dinner"?(W.parts.armL.rotation.x=-.9,W.parts.armR.rotation.x=-1.35+Math.sin(pt*2.6+J*1.7)*.45,W.parts.head.rotation.set(.12+Math.max(0,Math.sin(pt*2.6+J*1.7))*.12,0,0)):A==="sleep"?(W.parts.armL.rotation.x=W.parts.armR.rotation.x=0,W.parts.head.rotation.set(.6,-rt*(.35+Math.sin(pt*.9)*.03),0)):(W.parts.armL.rotation.x=W.parts.armR.rotation.x=-.6,W.parts.head.rotation.set(0,-rt*.25,-rt*(.18+Math.sin(pt*.8)*.04)))}),Q.visible&&(Q.position.set(14,1.6+pt*.25%.4,-3),Q.material.opacity=.9-pt*.25%.4*1.5),I.forEach((W,J)=>{W.parts.head.getWorldPosition(w[J].position),w[J].position.y+=A==="sleep"?.62:.55}),j>=0){j+=$;let W=I[1],J=I[0],rt=Math.sin(Math.min(1,j/1.6)*Math.PI);W.parts.head.rotation.y+=(A==="sleep"?-.5:-.9)*rt,W.parts.head.rotation.z+=.25*rt,J.parts.head.rotation.z-=.2*rt,A!=="sleep"&&(W.g.rotation.z=.16*rt);let tt=new U;J.parts.head.getWorldPosition(tt);let Ct=new U;W.parts.head.getWorldPosition(Ct),F.visible=j>.5,F.position.copy(tt).lerp(Ct,.5),F.position.y+=.35+(j-.5)*.35,F.scale.setScalar(.12+Math.min(1,(j-.5)*2)*.06),F.rotation.y=r.rotation.y,j>2.1&&(j=-1,F.visible=!1,W.g.rotation.z=0)}E.bedLamp&&(E.bedLamp.material.emissiveIntensity=A==="sleep"?.15:.6*oe.intensity/8)}else E.sofa&&I.forEach((ht,C)=>{ht.parts.armL.rotation.x=ht.parts.armR.rotation.x=-.6,ht.parts.head.rotation.z=(C===0?-1:1)*(.18+Math.sin(pt*.8)*.04),ht.parts.head.rotation.y=(C===0?1:-1)*.25});Et&&(Et.parts.armL.rotation.x=Et.parts.armR.rotation.x=-1.1+Math.sin(pt*14)*.05,Et.parts.head.rotation.x=-.05,Et.parts.head.rotation.y=Math.sin(pt*.5)*.08),O&&(O.parts.armL.rotation.x=-1.2+Math.sin(pt*9)*.12,O.parts.armR.rotation.x=-1.2+Math.sin(pt*9+1.8)*.12,O.parts.head.rotation.x=.15+Math.sin(pt*.6)*.05,O.parts.head.rotation.y=Math.sin(pt*.35)*.25),(pt-Yt>20||Yt===0)&&(Me(),Yt=pt||.001),i.render(s,r),St.set(.3,.05,.6).project(r),document.documentElement.style.setProperty("--rug-x",((St.x+1)/2*100).toFixed(1)+"vw"),document.documentElement.style.setProperty("--rug-y",((1-St.y)/2*100).toFixed(1)+"vh")}Me(),requestAnimationFrame(vt),/[?&]debug3d/.test(location.search)&&(window.__room={camera:r,R:E,renderer:i,sitters:I});function Nt($){if(!E.dinner)return;(E.foodMeshes||[]).forEach(C=>{E.dinner.remove(C)}),E.foodMeshes=[],$=($||[]).filter(C=>C&&C.name).slice(0,4),E.defaultDishes.forEach(C=>{C.visible=!$.length});let pt=[[0],[-.33,.33],[-.48,0,.48],[-.54,-.18,.18,.54]][Math.max(0,$.length-1)]||[],ht=new _o;ht.setCrossOrigin("anonymous"),$.forEach((C,b)=>{let W=new Zt;W.position.set(pt[b],.8,-.12+b%2*.06),E.dinner.add(W),E.foodMeshes.push(W);let J=new At(new He(.2,.15,.05,24),le(16777215));W.add(J);let rt=new At(new Es(.19,.015,8,24),le([16171471,13231096,16773544,13495501][b]));rt.rotation.x=Math.PI/2,rt.position.y=.025,W.add(rt);let tt=C.key&&window.FoodArt&&window.FoodArt.spec&&window.FoodArt.spec(C.key);if(tt){W.remove(J),W.remove(rt),W.add(D(.46,.02,.46,[16171471,13231096,16773544,13495501][b],0,-.01,0));let Lt=Ao(tt.tpl,tt.o,.4);Lt.position.y=0,Lt.rotation.y=(b-1.5)*.25,W.add(Lt);return}let Ct=new xe({color:16777215}),ut=new At(new Ua(.16,28),Ct);ut.rotation.x=-Math.PI/2,ut.position.y=.03,W.add(ut);let Pt=()=>{let Lt=document.createElement("canvas");Lt.width=Lt.height=128;let st=Lt.getContext("2d");st.fillStyle=["#ffe1e9","#e1f0fb","#fff6cf","#e3f5e1"][b],st.fillRect(0,0,128,128),st.font="64px sans-serif",st.textAlign="center",st.fillText("\u{1F372}",64,76),st.font="800 16px Nunito, sans-serif",st.fillStyle="#8a5a6a",st.fillText(C.name.slice(0,14),64,112),Ct.map=new cn(Lt),Ct.map.colorSpace=Pe,Ct.needsUpdate=!0};if(!C.img){Pt();return}if(/^data:image\/svg/.test(C.img)){let Lt=new Image;Lt.onload=()=>{let st=document.createElement("canvas");st.width=st.height=256;let Ht=st.getContext("2d");Ht.fillStyle="#fffaf5",Ht.fillRect(0,0,256,256),Ht.drawImage(Lt,0,0,256,256),Ct.map=new cn(st),Ct.map.colorSpace=Pe,Ct.needsUpdate=!0},Lt.onerror=Pt,Lt.src=C.img;return}ht.load(C.img,Lt=>{Lt.colorSpace=Pe;let st=Lt.image.width/Lt.image.height;st>1?(Lt.repeat.set(1/st,1),Lt.offset.set((1-1/st)/2,0)):(Lt.repeat.set(1,st),Lt.offset.set(0,(1-st)/2)),Ct.map=Lt,Ct.needsUpdate=!0},void 0,Pt)})}return{house:t.house,setCorner($){if(E.couple){t.corner=$,q||ie(Y(),!1);return}ie($,!1)},back(){q=!1,ie(Y(),!1)},setFood:Nt,get floor(){return B},setPhotos($){if(!E.frames)return;let pt=new _o;E.frames.forEach((ht,C)=>{$[C]&&pt.load($[C],b=>{b.colorSpace=Pe;let W=b.image,J=ht.geometry.parameters.width,rt=ht.geometry.parameters.height,tt=W.width/W.height,Ct=J/rt;tt>Ct?(b.repeat.set(Ct/tt,1),b.offset.set((1-Ct/tt)/2,0)):(b.repeat.set(1,tt/Ct),b.offset.set(0,(1-tt/Ct)/2)),ht.material.map=b,ht.material.color.set(16777215),ht.material.needsUpdate=!0})})},setTimeMode($){t.timeMode=$,Me()},destroy(){N=!1,window.removeEventListener("resize",de),s.traverse($=>{$.geometry&&$.geometry.dispose()}),i.dispose(),i.domElement.remove()}}}window.Village3D={create:s1,room:u1,LOOKS:ja,LOVE:Vh,ROOF:Mi.roof};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
