(()=>{var _h="170",Us={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xd=0,mu=1,Yd=2;var If=1,Ga=2,Ni=3,is=0,yn=1,_n=2,es=0,dr=1,gu=2,xu=3,_u=4,qd=5,vs=100,Zd=101,Kd=102,Jd=103,$d=104,jd=200,Qd=201,tp=202,ep=203,qc=204,Zc=205,np=206,ip=207,sp=208,rp=209,op=210,ap=211,cp=212,lp=213,hp=214,Kc=0,Jc=1,$c=2,xr=3,jc=4,Qc=5,tl=6,el=7,yh=0,up=1,fp=2,ns=0,dp=1,pp=2,mp=3,gp=4,xp=5,_p=6,yp=7;var Lf=300,_r=301,yr=302,nl=303,il=304,Wa=306,ro=1e3,bs=1001,sl=1002,$e=1003,Mp=1004;var Bo=1005;var gi=1006,dc=1007;var Ss=1008;var zi=1009,Df=1010,Uf=1011,oo=1012,Mh=1013,ws=1014,Oi=1015,Po=1016,vh=1017,Eh=1018,Mr=1020,Nf=35902,Of=1021,Ff=1022,ri=1023,Bf=1024,zf=1025,pr=1026,vr=1027,Hf=1028,bh=1029,kf=1030,Sh=1031;var wh=1033,pa=33776,ma=33777,ga=33778,xa=33779,rl=35840,ol=35841,al=35842,cl=35843,ll=36196,hl=37492,ul=37496,fl=37808,dl=37809,pl=37810,ml=37811,gl=37812,xl=37813,_l=37814,yl=37815,Ml=37816,vl=37817,El=37818,bl=37819,Sl=37820,wl=37821,_a=36492,Tl=36494,Al=36495,Vf=36283,Rl=36284,Cl=36285,Pl=36286;var ya=2300,Il=2301,pc=2302,yu=2400,Mu=2401,vu=2402;var vp=3200,Ep=3201;var Gf=0,bp=1,Qi="",Ce="srgb",Tr="srgb-linear",Xa="linear",Le="srgb";var qs=7680;var Eu=519,Sp=512,wp=513,Tp=514,Wf=515,Ap=516,Rp=517,Cp=518,Pp=519,Ll=35044;var bu="300 es",Fi=2e3,Ma=2001,Hi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Su=1234567,Qr=Math.PI/180,ao=180/Math.PI;function xi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]+"-"+gn[t&255]+gn[t>>8&255]+"-"+gn[t>>16&15|64]+gn[t>>24&255]+"-"+gn[e&63|128]+gn[e>>8&255]+"-"+gn[e>>16&255]+gn[e>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function an(n,t,e){return Math.max(t,Math.min(e,n))}function Th(n,t){return(n%t+t)%t}function Ip(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Lp(n,t,e){return n!==t?(e-n)/(t-n):0}function to(n,t,e){return(1-e)*n+e*t}function Dp(n,t,e,i){return to(n,t,1-Math.exp(-e*i))}function Up(n,t=1){return t-Math.abs(Th(n,t*2)-t)}function Np(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Op(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Fp(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Bp(n,t){return n+Math.random()*(t-n)}function zp(n){return n*(.5-Math.random())}function Hp(n){n!==void 0&&(Su=n);let t=Su+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kp(n){return n*Qr}function Vp(n){return n*ao}function Gp(n){return(n&n-1)===0&&n!==0}function Wp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Xp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Yp(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),f=o((t-i)/2),d=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,c*u,c*f,a*l);break;case"YZY":n.set(c*f,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*f,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*d,a*l);break;case"YXY":n.set(c*d,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function si(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Re(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Xf={DEG2RAD:Qr,RAD2DEG:ao,generateUUID:xi,clamp:an,euclideanModulo:Th,mapLinear:Ip,inverseLerp:Lp,lerp:to,damp:Dp,pingpong:Up,smoothstep:Np,smootherstep:Op,randInt:Fp,randFloat:Bp,randFloatSpread:zp,seededRandom:Hp,degToRad:kp,radToDeg:Vp,isPowerOfTwo:Gp,ceilPowerOfTwo:Wp,floorPowerOfTwo:Xp,setQuaternionFromProperEuler:Yp,normalize:Re,denormalize:si},vt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(an(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ge=class n{constructor(t,e,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],M=s[0],x=s[3],m=s[6],T=s[1],b=s[4],E=s[7],V=s[2],I=s[5],L=s[8];return r[0]=o*M+a*T+c*V,r[3]=o*x+a*b+c*I,r[6]=o*m+a*E+c*L,r[1]=l*M+h*T+u*V,r[4]=l*x+h*b+u*I,r[7]=l*m+h*E+u*L,r[2]=f*M+d*T+g*V,r[5]=f*x+d*b+g*I,r[8]=f*m+d*E+g*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=e*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return t[0]=u*M,t[1]=(s*l-h*i)*M,t[2]=(a*i-s*o)*M,t[3]=f*M,t[4]=(h*e-s*c)*M,t[5]=(s*r-a*e)*M,t[6]=d*M,t[7]=(i*c-l*e)*M,t[8]=(o*e-i*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(mc.makeScale(t,e)),this}rotate(t){return this.premultiply(mc.makeRotation(-t)),this}translate(t,e){return this.premultiply(mc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},mc=new ge;function Yf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function co(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qp(){let n=co("canvas");return n.style.display="block",n}var wu={};function $r(n){n in wu||(wu[n]=!0,console.warn(n))}function Zp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Kp(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Jp(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var be={enabled:!0,workingColorSpace:Tr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Le&&(n.r=Bi(n.r),n.g=Bi(n.g),n.b=Bi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Le&&(n.r=mr(n.r),n.g=mr(n.g),n.b=mr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Qi?Xa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Bi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function mr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Tu=[.64,.33,.3,.6,.15,.06],Au=[.2126,.7152,.0722],Ru=[.3127,.329],Cu=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pu=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);be.define({[Tr]:{primaries:Tu,whitePoint:Ru,transfer:Xa,toXYZ:Cu,fromXYZ:Pu,luminanceCoefficients:Au,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:Tu,whitePoint:Ru,transfer:Le,toXYZ:Cu,fromXYZ:Pu,luminanceCoefficients:Au,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}});var Zs,Dl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zs===void 0&&(Zs=co("canvas")),Zs.width=t.width,Zs.height=t.height;let i=Zs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Zs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=co("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Bi(e[i]/255)*255):e[i]=Bi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},$p=0,va=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=xi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(gc(s[o].image)):r.push(gc(s[o]))}else r=gc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function gc(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Dl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var jp=0,Mn=class n extends Hi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=bs,s=bs,r=gi,o=Ss,a=ri,c=zi,l=n.DEFAULT_ANISOTROPY,h=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=xi(),this.name="",this.source=new va(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ro:t.x=t.x-Math.floor(t.x);break;case bs:t.x=t.x<0?0:1;break;case sl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ro:t.y=t.y-Math.floor(t.y);break;case bs:t.y=t.y<0?0:1;break;case sl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=Lf;Mn.DEFAULT_ANISOTROPY=1;var De=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],M=c[2],x=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-M)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+M)<.1&&Math.abs(g+x)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(l+1)/2,E=(d+1)/2,V=(m+1)/2,I=(h+f)/4,L=(u+M)/4,O=(g+x)/4;return b>E&&b>V?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=I/i,r=L/i):E>V?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=I/s,r=O/s):V<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(V),i=L/r,s=O/r),this.set(i,s,r,e),this}let T=Math.sqrt((x-g)*(x-g)+(u-M)*(u-M)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(x-g)/T,this.y=(u-M)/T,this.z=(f-h)/T,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ul=class extends Hi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Mn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new va(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ki=class extends Ul{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ea=class extends Mn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Nl=class extends Mn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var oi=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],g=r[o+2],M=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=M;return}if(u!==M||c!==f||l!==d||h!==g){let x=1-a,m=c*f+l*d+h*g+u*M,T=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){let V=Math.sqrt(b),I=Math.atan2(V,m*T);x=Math.sin(x*I)/V,a=Math.sin(a*I)/V}let E=a*T;if(c=c*x+f*E,l=l*x+d*E,h=h*x+g*E,u=u*x+M*E,x===1-a){let V=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=V,l*=V,h*=V,u*=V}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-a*d,t[e+2]=l*g+h*d+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),f=c(i/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(an(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Iu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Iu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return xc.copy(this).projectOnVector(t),this.sub(xc)}reflect(t){return this.sub(xc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(an(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xc=new U,Iu=new oi,Ts=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ti):ti.fromBufferAttribute(r,o),ti.applyMatrix4(t.matrixWorld),this.expandByPoint(ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zo.copy(i.boundingBox)),zo.applyMatrix4(t.matrixWorld),this.union(zo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ti),ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gr),Ho.subVectors(this.max,Gr),Ks.subVectors(t.a,Gr),Js.subVectors(t.b,Gr),$s.subVectors(t.c,Gr),qi.subVectors(Js,Ks),Zi.subVectors($s,Js),ps.subVectors(Ks,$s);let e=[0,-qi.z,qi.y,0,-Zi.z,Zi.y,0,-ps.z,ps.y,qi.z,0,-qi.x,Zi.z,0,-Zi.x,ps.z,0,-ps.x,-qi.y,qi.x,0,-Zi.y,Zi.x,0,-ps.y,ps.x,0];return!_c(e,Ks,Js,$s,Ho)||(e=[1,0,0,0,1,0,0,0,1],!_c(e,Ks,Js,$s,Ho))?!1:(ko.crossVectors(qi,Zi),e=[ko.x,ko.y,ko.z],_c(e,Ks,Js,$s,Ho))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Pi=[new U,new U,new U,new U,new U,new U,new U,new U],ti=new U,zo=new Ts,Ks=new U,Js=new U,$s=new U,qi=new U,Zi=new U,ps=new U,Gr=new U,Ho=new U,ko=new U,ms=new U;function _c(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ms.fromArray(n,r);let a=s.x*Math.abs(ms.x)+s.y*Math.abs(ms.y)+s.z*Math.abs(ms.z),c=t.dot(ms),l=e.dot(ms),h=i.dot(ms);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Qp=new Ts,Wr=new U,yc=new U,Er=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Qp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wr.subVectors(t,this.center);let e=Wr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Wr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wr.copy(t.center).add(yc)),this.expandByPoint(Wr.copy(t.center).sub(yc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ii=new U,Mc=new U,Vo=new U,Ki=new U,vc=new U,Go=new U,Ec=new U,As=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ii.copy(this.origin).addScaledVector(this.direction,e),Ii.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Mc.copy(t).add(e).multiplyScalar(.5),Vo.copy(e).sub(t).normalize(),Ki.copy(this.origin).sub(Mc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Vo),a=Ki.dot(this.direction),c=-Ki.dot(Vo),l=Ki.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let M=1/h;u*=M,f*=M,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Mc).addScaledVector(Vo,f),d}intersectSphere(t,e){Ii.subVectors(t.center,this.origin);let i=Ii.dot(this.direction),s=Ii.dot(Ii)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ii)!==null}intersectTriangle(t,e,i,s,r){vc.subVectors(e,t),Go.subVectors(i,t),Ec.crossVectors(vc,Go);let o=this.direction.dot(Ec),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,t);let c=a*this.direction.dot(Go.crossVectors(Ki,Go));if(c<0)return null;let l=a*this.direction.dot(vc.cross(Ki));if(l<0||c+l>o)return null;let h=-a*Ki.dot(Ec);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ze=class n{constructor(t,e,i,s,r,o,a,c,l,h,u,f,d,g,M,x){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,h,u,f,d,g,M,x)}set(t,e,i,s,r,o,a,c,l,h,u,f,d,g,M,x){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=M,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/js.setFromMatrixColumn(t,0).length(),r=1/js.setFromMatrixColumn(t,1).length(),o=1/js.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,M=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-M*l,e[9]=-a*c,e[2]=M-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,g=l*h,M=l*u;e[0]=f+M*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=M+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,g=l*h,M=l*u;e[0]=f-M*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=M-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,M=a*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+M,e[1]=c*u,e[5]=M*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,g=a*c,M=a*l;e[0]=c*h,e[4]=M-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-M*u}else if(t.order==="XZY"){let f=o*c,d=o*l,g=a*c,M=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+M,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=M*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(t0,t,e0)}lookAt(t,e,i){let s=this.elements;return Vn.subVectors(t,e),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),Ji.crossVectors(i,Vn),Ji.lengthSq()===0&&(Math.abs(i.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),Ji.crossVectors(i,Vn)),Ji.normalize(),Wo.crossVectors(Vn,Ji),s[0]=Ji.x,s[4]=Wo.x,s[8]=Vn.x,s[1]=Ji.y,s[5]=Wo.y,s[9]=Vn.y,s[2]=Ji.z,s[6]=Wo.z,s[10]=Vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],M=i[6],x=i[10],m=i[14],T=i[3],b=i[7],E=i[11],V=i[15],I=s[0],L=s[4],O=s[8],A=s[12],S=s[1],B=s[5],tt=s[9],F=s[13],G=s[2],Z=s[6],q=s[10],mt=s[14],j=s[3],yt=s[7],rt=s[11],Xt=s[15];return r[0]=o*I+a*S+c*G+l*j,r[4]=o*L+a*B+c*Z+l*yt,r[8]=o*O+a*tt+c*q+l*rt,r[12]=o*A+a*F+c*mt+l*Xt,r[1]=h*I+u*S+f*G+d*j,r[5]=h*L+u*B+f*Z+d*yt,r[9]=h*O+u*tt+f*q+d*rt,r[13]=h*A+u*F+f*mt+d*Xt,r[2]=g*I+M*S+x*G+m*j,r[6]=g*L+M*B+x*Z+m*yt,r[10]=g*O+M*tt+x*q+m*rt,r[14]=g*A+M*F+x*mt+m*Xt,r[3]=T*I+b*S+E*G+V*j,r[7]=T*L+b*B+E*Z+V*yt,r[11]=T*O+b*tt+E*q+V*rt,r[15]=T*A+b*F+E*mt+V*Xt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],M=t[7],x=t[11],m=t[15];return g*(+r*c*u-s*l*u-r*a*f+i*l*f+s*a*d-i*c*d)+M*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+x*(+e*l*u-e*a*d-r*o*u+i*o*d+r*a*h-i*l*h)+m*(-s*a*h-e*c*u+e*a*f+s*o*u-i*o*f+i*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],M=t[13],x=t[14],m=t[15],T=u*x*l-M*f*l+M*c*d-a*x*d-u*c*m+a*f*m,b=g*f*l-h*x*l-g*c*d+o*x*d+h*c*m-o*f*m,E=h*M*l-g*u*l+g*a*d-o*M*d-h*a*m+o*u*m,V=g*u*c-h*M*c-g*a*f+o*M*f+h*a*x-o*u*x,I=e*T+i*b+s*E+r*V;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/I;return t[0]=T*L,t[1]=(M*f*r-u*x*r-M*s*d+i*x*d+u*s*m-i*f*m)*L,t[2]=(a*x*r-M*c*r+M*s*l-i*x*l-a*s*m+i*c*m)*L,t[3]=(u*c*r-a*f*r-u*s*l+i*f*l+a*s*d-i*c*d)*L,t[4]=b*L,t[5]=(h*x*r-g*f*r+g*s*d-e*x*d-h*s*m+e*f*m)*L,t[6]=(g*c*r-o*x*r-g*s*l+e*x*l+o*s*m-e*c*m)*L,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*d+e*c*d)*L,t[8]=E*L,t[9]=(g*u*r-h*M*r-g*i*d+e*M*d+h*i*m-e*u*m)*L,t[10]=(o*M*r-g*a*r+g*i*l-e*M*l-o*i*m+e*a*m)*L,t[11]=(h*a*r-o*u*r-h*i*l+e*u*l+o*i*d-e*a*d)*L,t[12]=V*L,t[13]=(h*M*s-g*u*s+g*i*f-e*M*f-h*i*x+e*u*x)*L,t[14]=(g*a*s-o*M*s-g*i*c+e*M*c+o*i*x-e*a*x)*L,t[15]=(o*u*s-h*a*s+h*i*c-e*u*c-o*i*f+e*a*f)*L,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,M=o*h,x=o*u,m=a*u,T=c*l,b=c*h,E=c*u,V=i.x,I=i.y,L=i.z;return s[0]=(1-(M+m))*V,s[1]=(d+E)*V,s[2]=(g-b)*V,s[3]=0,s[4]=(d-E)*I,s[5]=(1-(f+m))*I,s[6]=(x+T)*I,s[7]=0,s[8]=(g+b)*L,s[9]=(x-T)*L,s[10]=(1-(f+M))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=js.set(s[0],s[1],s[2]).length(),o=js.set(s[4],s[5],s[6]).length(),a=js.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ei.copy(this);let l=1/r,h=1/o,u=1/a;return ei.elements[0]*=l,ei.elements[1]*=l,ei.elements[2]*=l,ei.elements[4]*=h,ei.elements[5]*=h,ei.elements[6]*=h,ei.elements[8]*=u,ei.elements[9]*=u,ei.elements[10]*=u,e.setFromRotationMatrix(ei),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Fi){let c=this.elements,l=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),d,g;if(a===Fi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ma)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Fi){let c=this.elements,l=1/(e-t),h=1/(i-s),u=1/(o-r),f=(e+t)*l,d=(i+s)*h,g,M;if(a===Fi)g=(o+r)*u,M=-2*u;else if(a===Ma)g=r*u,M=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=M,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},js=new U,ei=new ze,t0=new U(0,0,0),e0=new U(1,1,1),Ji=new U,Wo=new U,Vn=new U,Lu=new ze,Du=new oi,_i=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-an(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(an(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(an(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Lu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Du.setFromEuler(this),this.setFromQuaternion(Du,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_i.DEFAULT_ORDER="XYZ";var lo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},n0=0,Uu=new U,Qs=new oi,Li=new ze,Xo=new U,Xr=new U,i0=new U,s0=new oi,Nu=new U(1,0,0),Ou=new U(0,1,0),Fu=new U(0,0,1),Bu={type:"added"},r0={type:"removed"},tr={type:"childadded",child:null},bc={type:"childremoved",child:null},Xe=class n extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new U,e=new _i,i=new oi,s=new U(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ze},normalMatrix:{value:new ge}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qs.setFromAxisAngle(t,e),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(t,e){return Qs.setFromAxisAngle(t,e),this.quaternion.premultiply(Qs),this}rotateX(t){return this.rotateOnAxis(Nu,t)}rotateY(t){return this.rotateOnAxis(Ou,t)}rotateZ(t){return this.rotateOnAxis(Fu,t)}translateOnAxis(t,e){return Uu.copy(t).applyQuaternion(this.quaternion),this.position.add(Uu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nu,t)}translateY(t){return this.translateOnAxis(Ou,t)}translateZ(t){return this.translateOnAxis(Fu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Xo.copy(t):Xo.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Xr,Xo,this.up):Li.lookAt(Xo,Xr,this.up),this.quaternion.setFromRotationMatrix(Li),s&&(Li.extractRotation(s.matrixWorld),Qs.setFromRotationMatrix(Li),this.quaternion.premultiply(Qs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bu),tr.child=t,this.dispatchEvent(tr),tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(r0),bc.child=t,this.dispatchEvent(bc),bc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Li.multiply(t.parent.matrixWorld)),t.applyMatrix4(Li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bu),tr.child=t,this.dispatchEvent(tr),tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,t,i0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,s0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Xe.DEFAULT_UP=new U(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ni=new U,Di=new U,Sc=new U,Ui=new U,er=new U,nr=new U,zu=new U,wc=new U,Tc=new U,Ac=new U,Rc=new De,Cc=new De,Pc=new De,ts=class n{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ni.subVectors(t,e),s.cross(ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ni.subVectors(s,e),Di.subVectors(i,e),Sc.subVectors(t,e);let o=ni.dot(ni),a=ni.dot(Di),c=ni.dot(Sc),l=Di.dot(Di),h=Di.dot(Sc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ui.x),c.addScaledVector(o,Ui.y),c.addScaledVector(a,Ui.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return Rc.setScalar(0),Cc.setScalar(0),Pc.setScalar(0),Rc.fromBufferAttribute(t,e),Cc.fromBufferAttribute(t,i),Pc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Rc,r.x),o.addScaledVector(Cc,r.y),o.addScaledVector(Pc,r.z),o}static isFrontFacing(t,e,i,s){return ni.subVectors(i,e),Di.subVectors(t,e),ni.cross(Di).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ni.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ni.cross(Di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;er.subVectors(s,i),nr.subVectors(r,i),wc.subVectors(t,i);let c=er.dot(wc),l=nr.dot(wc);if(c<=0&&l<=0)return e.copy(i);Tc.subVectors(t,s);let h=er.dot(Tc),u=nr.dot(Tc);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(er,o);Ac.subVectors(t,r);let d=er.dot(Ac),g=nr.dot(Ac);if(g>=0&&d<=g)return e.copy(r);let M=d*l-c*g;if(M<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(nr,a);let x=h*g-d*u;if(x<=0&&u-h>=0&&d-g>=0)return zu.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(zu,a);let m=1/(x+M+f);return o=M*m,a=f*m,e.copy(i).addScaledVector(er,o).addScaledVector(nr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},qf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Yo={h:0,s:0,l:0};function Ic(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var re=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=be.workingColorSpace){return this.r=t,this.g=e,this.b=i,be.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=be.workingColorSpace){if(t=Th(t,1),e=an(e,0,1),i=an(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ic(o,r,t+1/3),this.g=Ic(o,r,t),this.b=Ic(o,r,t-1/3)}return be.toWorkingColorSpace(this,s),this}setStyle(t,e=Ce){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let i=qf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}copyLinearToSRGB(t){return this.r=mr(t.r),this.g=mr(t.g),this.b=mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return be.fromWorkingColorSpace(xn.copy(this),t),Math.round(an(xn.r*255,0,255))*65536+Math.round(an(xn.g*255,0,255))*256+Math.round(an(xn.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=be.workingColorSpace){be.fromWorkingColorSpace(xn.copy(this),e);let i=xn.r,s=xn.g,r=xn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=be.workingColorSpace){return be.fromWorkingColorSpace(xn.copy(this),e),t.r=xn.r,t.g=xn.g,t.b=xn.b,t}getStyle(t=Ce){be.fromWorkingColorSpace(xn.copy(this),t);let e=xn.r,i=xn.g,s=xn.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL($i),this.setHSL($i.h+t,$i.s+e,$i.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL($i),t.getHSL(Yo);let i=to($i.h,Yo.h,e),s=to($i.s,Yo.s,e),r=to($i.l,Yo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new re;re.NAMES=qf;var o0=0,Vi=class extends Hi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=xi(),this.name="",this.blending=dr,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qc,this.blendDst=Zc,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(i.blending=this.blending),this.side!==is&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qc&&(i.blendSrc=this.blendSrc),this.blendDst!==Zc&&(i.blendDst=this.blendDst),this.blendEquation!==vs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Je=class extends Vi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Qe=new U,qo=new vt,dn=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ll,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)qo.fromBufferAttribute(this,e),qo.applyMatrix3(t),this.setXY(e,qo.x,qo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix3(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=si(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Re(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=si(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=si(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=si(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array),s=Re(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array),s=Re(s,this.array),r=Re(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ll&&(t.usage=this.usage),t}};var ba=class extends dn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Sa=class extends dn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var de=class extends dn{constructor(t,e,i){super(new Float32Array(t),e,i)}},a0=0,Zn=new ze,Lc=new Xe,ir=new U,Gn=new Ts,Yr=new Ts,on=new U,Oe=class n extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yf(t)?Sa:ba)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ge().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Zn.makeRotationFromQuaternion(t),this.applyMatrix4(Zn),this}rotateX(t){return Zn.makeRotationX(t),this.applyMatrix4(Zn),this}rotateY(t){return Zn.makeRotationY(t),this.applyMatrix4(Zn),this}rotateZ(t){return Zn.makeRotationZ(t),this.applyMatrix4(Zn),this}translate(t,e,i){return Zn.makeTranslation(t,e,i),this.applyMatrix4(Zn),this}scale(t,e,i){return Zn.makeScale(t,e,i),this.applyMatrix4(Zn),this}lookAt(t){return Lc.lookAt(t),Lc.updateMatrix(),this.applyMatrix4(Lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new de(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ts);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Gn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Er);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let i=this.boundingSphere.center;if(Gn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Yr.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Gn.min,Yr.min),Gn.expandByPoint(on),on.addVectors(Gn.max,Yr.max),Gn.expandByPoint(on)):(Gn.expandByPoint(Yr.min),Gn.expandByPoint(Yr.max))}Gn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)on.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(on));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)on.fromBufferAttribute(a,l),c&&(ir.fromBufferAttribute(t,l),on.add(ir)),s=Math.max(s,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let O=0;O<i.count;O++)a[O]=new U,c[O]=new U;let l=new U,h=new U,u=new U,f=new vt,d=new vt,g=new vt,M=new U,x=new U;function m(O,A,S){l.fromBufferAttribute(i,O),h.fromBufferAttribute(i,A),u.fromBufferAttribute(i,S),f.fromBufferAttribute(r,O),d.fromBufferAttribute(r,A),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),d.sub(f),g.sub(f);let B=1/(d.x*g.y-g.x*d.y);isFinite(B)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(B),x.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(B),a[O].add(M),a[A].add(M),a[S].add(M),c[O].add(x),c[A].add(x),c[S].add(x))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let O=0,A=T.length;O<A;++O){let S=T[O],B=S.start,tt=S.count;for(let F=B,G=B+tt;F<G;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let b=new U,E=new U,V=new U,I=new U;function L(O){V.fromBufferAttribute(s,O),I.copy(V);let A=a[O];b.copy(A),b.sub(V.multiplyScalar(V.dot(A))).normalize(),E.crossVectors(I,A);let B=E.dot(c[O])<0?-1:1;o.setXYZW(O,b.x,b.y,b.z,B)}for(let O=0,A=T.length;O<A;++O){let S=T[O],B=S.start,tt=S.count;for(let F=B,G=B+tt;F<G;F+=3)L(t.getX(F+0)),L(t.getX(F+1)),L(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,h=new U,u=new U;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),M=t.getX(f+1),x=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,x),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,M),l.fromBufferAttribute(i,x),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(x,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)on.fromBufferAttribute(t,e),on.normalize(),t.setXYZ(e,on.x,on.y,on.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let M=0,x=c.length;M<x;M++){a.isInterleavedBufferAttribute?d=c[M]*a.data.stride+a.offset:d=c[M]*h;for(let m=0;m<h;m++)f[g++]=l[d++]}return new dn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,i);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hu=new ze,gs=new As,Zo=new Er,ku=new U,Ko=new U,Jo=new U,$o=new U,Dc=new U,jo=new U,Vu=new U,Qo=new U,Rt=class extends Xe{constructor(t=new Oe,e=new Je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){jo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Dc.fromBufferAttribute(u,t),o?jo.addScaledVector(Dc,h):jo.addScaledVector(Dc.sub(e),h))}e.add(jo)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zo.copy(i.boundingSphere),Zo.applyMatrix4(r),gs.copy(t.ray).recast(t.near),!(Zo.containsPoint(gs.origin)===!1&&(gs.intersectSphere(Zo,ku)===null||gs.origin.distanceToSquared(ku)>(t.far-t.near)**2))&&(Hu.copy(r).invert(),gs.copy(t.ray).applyMatrix4(Hu),!(i.boundingBox!==null&&gs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,gs)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=f.length;g<M;g++){let x=f[g],m=o[x.materialIndex],T=Math.max(x.start,d.start),b=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let E=T,V=b;E<V;E+=3){let I=a.getX(E),L=a.getX(E+1),O=a.getX(E+2);s=ta(this,m,t,i,l,h,u,I,L,O),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),M=Math.min(a.count,d.start+d.count);for(let x=g,m=M;x<m;x+=3){let T=a.getX(x),b=a.getX(x+1),E=a.getX(x+2);s=ta(this,o,t,i,l,h,u,T,b,E),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,M=f.length;g<M;g++){let x=f[g],m=o[x.materialIndex],T=Math.max(x.start,d.start),b=Math.min(c.count,Math.min(x.start+x.count,d.start+d.count));for(let E=T,V=b;E<V;E+=3){let I=E,L=E+1,O=E+2;s=ta(this,m,t,i,l,h,u,I,L,O),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),M=Math.min(c.count,d.start+d.count);for(let x=g,m=M;x<m;x+=3){let T=x,b=x+1,E=x+2;s=ta(this,o,t,i,l,h,u,T,b,E),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function c0(n,t,e,i,s,r,o,a){let c;if(t.side===yn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===is,a),c===null)return null;Qo.copy(a),Qo.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Qo);return l<e.near||l>e.far?null:{distance:l,point:Qo.clone(),object:n}}function ta(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,Ko),n.getVertexPosition(c,Jo),n.getVertexPosition(l,$o);let h=c0(n,t,e,i,Ko,Jo,$o,Vu);if(h){let u=new U;ts.getBarycoord(Vu,Ko,Jo,$o,u),s&&(h.uv=ts.getInterpolatedAttribute(s,a,c,l,u,new vt)),r&&(h.uv1=ts.getInterpolatedAttribute(r,a,c,l,u,new vt)),o&&(h.normal=ts.getInterpolatedAttribute(o,a,c,l,u,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new U,materialIndex:0};ts.getNormal(Ko,Jo,$o,f.normal),h.face=f,h.barycoord=u}return h}var He=class n extends Oe{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(u,2));function g(M,x,m,T,b,E,V,I,L,O,A){let S=E/L,B=V/O,tt=E/2,F=V/2,G=I/2,Z=L+1,q=O+1,mt=0,j=0,yt=new U;for(let rt=0;rt<q;rt++){let Xt=rt*B-F;for(let oe=0;oe<Z;oe++){let Me=oe*S-tt;yt[M]=Me*T,yt[x]=Xt*b,yt[m]=G,l.push(yt.x,yt.y,yt.z),yt[M]=0,yt[x]=0,yt[m]=I>0?1:-1,h.push(yt.x,yt.y,yt.z),u.push(oe/L),u.push(1-rt/O),mt+=1}}for(let rt=0;rt<O;rt++)for(let Xt=0;Xt<L;Xt++){let oe=f+Xt+Z*rt,Me=f+Xt+Z*(rt+1),ht=f+(Xt+1)+Z*(rt+1),Tt=f+(Xt+1)+Z*rt;c.push(oe,Me,Tt),c.push(Me,ht,Tt),j+=6}a.addGroup(d,j,A),d+=j,f+=mt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function br(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function An(n){let t={};for(let e=0;e<n.length;e++){let i=br(n[e]);for(let s in i)t[s]=i[s]}return t}function l0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Zf(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}var h0={clone:br,merge:An},u0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kn=class extends Vi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u0,this.fragmentShader=f0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=br(t.uniforms),this.uniformsGroups=l0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},wa=class extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=Fi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ji=new U,Gu=new vt,Wu=new vt,cn=class extends wa{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ao*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Qr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ao*2*Math.atan(Math.tan(Qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ji.x,ji.y).multiplyScalar(-t/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-t/ji.z)}getViewSize(t,e){return this.getViewBounds(t,Gu,Wu),e.subVectors(Wu,Gu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Qr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},sr=-90,rr=1,Ol=class extends Xe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new cn(sr,rr,t,e);s.layers=this.layers,this.add(s);let r=new cn(sr,rr,t,e);r.layers=this.layers,this.add(r);let o=new cn(sr,rr,t,e);o.layers=this.layers,this.add(o);let a=new cn(sr,rr,t,e);a.layers=this.layers,this.add(a);let c=new cn(sr,rr,t,e);c.layers=this.layers,this.add(c);let l=new cn(sr,rr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Fi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ta=class extends Mn{constructor(t,e,i,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:_r,super(t,e,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Fl=class extends ki{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ta(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new He(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:es});r.uniforms.tEquirect.value=e;let o=new Rt(s,r),a=e.minFilter;return e.minFilter===Ss&&(e.minFilter=gi),new Ol(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Uc=new U,d0=new U,p0=new ge,ii=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Uc.subVectors(i,e).cross(d0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Uc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||p0.getNormalMatrix(t),s=this.coplanarPoint(Uc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},xs=new Er,ea=new U,ho=class{constructor(t=new ii,e=new ii,i=new ii,s=new ii,r=new ii,o=new ii){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Fi){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],M=s[10],x=s[11],m=s[12],T=s[13],b=s[14],E=s[15];if(i[0].setComponents(c-r,f-l,x-d,E-m).normalize(),i[1].setComponents(c+r,f+l,x+d,E+m).normalize(),i[2].setComponents(c+o,f+h,x+g,E+T).normalize(),i[3].setComponents(c-o,f-h,x-g,E-T).normalize(),i[4].setComponents(c-a,f-u,x-M,E-b).normalize(),e===Fi)i[5].setComponents(c+a,f+u,x+M,E+b).normalize();else if(e===Ma)i[5].setComponents(a,u,M,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(t){return xs.center.set(0,0,0),xs.radius=.7071067811865476,xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(ea.x=s.normal.x>0?t.max.x:t.min.x,ea.y=s.normal.y>0?t.max.y:t.min.y,ea.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ea)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Kf(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function m0(n){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],M=u[d];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++f,u[f]=M)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let M=u[d];n.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var ss=class n extends Oe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],g=[],M=[],x=[];for(let m=0;m<h;m++){let T=m*f-o;for(let b=0;b<l;b++){let E=b*u-r;g.push(E,-T,0),M.push(0,0,1),x.push(b/a),x.push(1-m/c)}}for(let m=0;m<c;m++)for(let T=0;T<a;T++){let b=T+l*m,E=T+l*(m+1),V=T+1+l*(m+1),I=T+1+l*m;d.push(b,E,I),d.push(E,V,I)}this.setIndex(d),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(M,3)),this.setAttribute("uv",new de(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},g0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,x0=`#ifdef USE_ALPHAHASH
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
#endif`,_0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E0=`#ifdef USE_AOMAP
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
#endif`,b0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S0=`#ifdef USE_BATCHING
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
#endif`,w0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,T0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,A0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,R0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,C0=`#ifdef USE_IRIDESCENCE
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
#endif`,P0=`#ifdef USE_BUMPMAP
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
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,N0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,F0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,z0=`#define PI 3.141592653589793
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
} // validated`,H0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,k0=`vec3 transformedNormal = objectNormal;
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
#endif`,V0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,G0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,W0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,X0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y0="gl_FragColor = linearToOutputTexel( gl_FragColor );",q0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Z0=`#ifdef USE_ENVMAP
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
#endif`,K0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,J0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
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
#endif`,Q0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,em=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,im=`#ifdef USE_GRADIENTMAP
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
}`,sm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,am=`uniform bool receiveShadow;
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
#endif`,cm=`#ifdef USE_ENVMAP
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
#endif`,lm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dm=`PhysicalMaterial material;
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
#endif`,pm=`struct PhysicalMaterial {
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
}`,mm=`
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
#endif`,gm=`#if defined( RE_IndirectDiffuse )
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
#endif`,xm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_m=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ym=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Em=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wm=`#if defined( USE_POINTS_UV )
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
#endif`,Tm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Am=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Im=`#ifdef USE_MORPHTARGETS
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
#endif`,Lm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Um=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bm=`#ifdef USE_NORMALMAP
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
#endif`,zm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,km=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ym=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tg=`float getShadowMask() {
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
}`,eg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ng=`#ifdef USE_SKINNING
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
#endif`,ig=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sg=`#ifdef USE_SKINNING
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
#endif`,rg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,og=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ag=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lg=`#ifdef USE_TRANSMISSION
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
#endif`,hg=`#ifdef USE_TRANSMISSION
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
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gg=`uniform sampler2D t2D;
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
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_g=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vg=`#include <common>
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
}`,Eg=`#if DEPTH_PACKING == 3200
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
}`,bg=`#define DISTANCE
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
}`,Sg=`#define DISTANCE
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
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`uniform float scale;
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Cg=`#include <common>
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Ig=`#define LAMBERT
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
}`,Lg=`#define LAMBERT
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
}`,Dg=`#define MATCAP
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
}`,Ug=`#define MATCAP
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
}`,Ng=`#define NORMAL
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
}`,Og=`#define NORMAL
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
}`,Fg=`#define PHONG
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
}`,Bg=`#define PHONG
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
}`,zg=`#define STANDARD
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
}`,Hg=`#define STANDARD
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
}`,kg=`#define TOON
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
}`,Vg=`#define TOON
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
}`,Gg=`uniform float size;
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
}`,Wg=`uniform vec3 diffuse;
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
}`,Xg=`#include <common>
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
}`,Yg=`uniform vec3 color;
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
}`,qg=`uniform float rotation;
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
}`,Zg=`uniform vec3 diffuse;
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
}`,xe={alphahash_fragment:g0,alphahash_pars_fragment:x0,alphamap_fragment:_0,alphamap_pars_fragment:y0,alphatest_fragment:M0,alphatest_pars_fragment:v0,aomap_fragment:E0,aomap_pars_fragment:b0,batching_pars_vertex:S0,batching_vertex:w0,begin_vertex:T0,beginnormal_vertex:A0,bsdfs:R0,iridescence_fragment:C0,bumpmap_pars_fragment:P0,clipping_planes_fragment:I0,clipping_planes_pars_fragment:L0,clipping_planes_pars_vertex:D0,clipping_planes_vertex:U0,color_fragment:N0,color_pars_fragment:O0,color_pars_vertex:F0,color_vertex:B0,common:z0,cube_uv_reflection_fragment:H0,defaultnormal_vertex:k0,displacementmap_pars_vertex:V0,displacementmap_vertex:G0,emissivemap_fragment:W0,emissivemap_pars_fragment:X0,colorspace_fragment:Y0,colorspace_pars_fragment:q0,envmap_fragment:Z0,envmap_common_pars_fragment:K0,envmap_pars_fragment:J0,envmap_pars_vertex:$0,envmap_physical_pars_fragment:cm,envmap_vertex:j0,fog_vertex:Q0,fog_pars_vertex:tm,fog_fragment:em,fog_pars_fragment:nm,gradientmap_pars_fragment:im,lightmap_pars_fragment:sm,lights_lambert_fragment:rm,lights_lambert_pars_fragment:om,lights_pars_begin:am,lights_toon_fragment:lm,lights_toon_pars_fragment:hm,lights_phong_fragment:um,lights_phong_pars_fragment:fm,lights_physical_fragment:dm,lights_physical_pars_fragment:pm,lights_fragment_begin:mm,lights_fragment_maps:gm,lights_fragment_end:xm,logdepthbuf_fragment:_m,logdepthbuf_pars_fragment:ym,logdepthbuf_pars_vertex:Mm,logdepthbuf_vertex:vm,map_fragment:Em,map_pars_fragment:bm,map_particle_fragment:Sm,map_particle_pars_fragment:wm,metalnessmap_fragment:Tm,metalnessmap_pars_fragment:Am,morphinstance_vertex:Rm,morphcolor_vertex:Cm,morphnormal_vertex:Pm,morphtarget_pars_vertex:Im,morphtarget_vertex:Lm,normal_fragment_begin:Dm,normal_fragment_maps:Um,normal_pars_fragment:Nm,normal_pars_vertex:Om,normal_vertex:Fm,normalmap_pars_fragment:Bm,clearcoat_normal_fragment_begin:zm,clearcoat_normal_fragment_maps:Hm,clearcoat_pars_fragment:km,iridescence_pars_fragment:Vm,opaque_fragment:Gm,packing:Wm,premultiplied_alpha_fragment:Xm,project_vertex:Ym,dithering_fragment:qm,dithering_pars_fragment:Zm,roughnessmap_fragment:Km,roughnessmap_pars_fragment:Jm,shadowmap_pars_fragment:$m,shadowmap_pars_vertex:jm,shadowmap_vertex:Qm,shadowmask_pars_fragment:tg,skinbase_vertex:eg,skinning_pars_vertex:ng,skinning_vertex:ig,skinnormal_vertex:sg,specularmap_fragment:rg,specularmap_pars_fragment:og,tonemapping_fragment:ag,tonemapping_pars_fragment:cg,transmission_fragment:lg,transmission_pars_fragment:hg,uv_pars_fragment:ug,uv_pars_vertex:fg,uv_vertex:dg,worldpos_vertex:pg,background_vert:mg,background_frag:gg,backgroundCube_vert:xg,backgroundCube_frag:_g,cube_vert:yg,cube_frag:Mg,depth_vert:vg,depth_frag:Eg,distanceRGBA_vert:bg,distanceRGBA_frag:Sg,equirect_vert:wg,equirect_frag:Tg,linedashed_vert:Ag,linedashed_frag:Rg,meshbasic_vert:Cg,meshbasic_frag:Pg,meshlambert_vert:Ig,meshlambert_frag:Lg,meshmatcap_vert:Dg,meshmatcap_frag:Ug,meshnormal_vert:Ng,meshnormal_frag:Og,meshphong_vert:Fg,meshphong_frag:Bg,meshphysical_vert:zg,meshphysical_frag:Hg,meshtoon_vert:kg,meshtoon_frag:Vg,points_vert:Gg,points_frag:Wg,shadow_vert:Xg,shadow_frag:Yg,sprite_vert:qg,sprite_frag:Zg},zt={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},mi={basic:{uniforms:An([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:An([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new re(0)}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:An([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:An([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:An([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new re(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:An([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:An([zt.points,zt.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:An([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:An([zt.common,zt.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:An([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:An([zt.sprite,zt.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distanceRGBA:{uniforms:An([zt.common,zt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distanceRGBA_vert,fragmentShader:xe.distanceRGBA_frag},shadow:{uniforms:An([zt.lights,zt.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};mi.physical={uniforms:An([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};var na={r:0,b:0,g:0},_s=new _i,Kg=new ze;function Jg(n,t,e,i,s,r,o){let a=new re(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(T){let b=T.isScene===!0?T.background:null;return b&&b.isTexture&&(b=(T.backgroundBlurriness>0?e:t).get(b)),b}function M(T){let b=!1,E=g(T);E===null?m(a,c):E&&E.isColor&&(m(E,1),b=!0);let V=n.xr.getEnvironmentBlendMode();V==="additive"?i.buffers.color.setClear(0,0,0,1,o):V==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(T,b){let E=g(b);E&&(E.isCubeTexture||E.mapping===Wa)?(h===void 0&&(h=new Rt(new He(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:br(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(V,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),_s.copy(b.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Kg.makeRotationFromEuler(_s)),h.material.toneMapped=be.getTransfer(E.colorSpace)!==Le,(u!==E||f!==E.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=E,f=E.version,d=n.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Rt(new ss(2,2),new Kn({name:"BackgroundMaterial",uniforms:br(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=be.getTransfer(E.colorSpace)!==Le,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=E,f=E.version,d=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,b){T.getRGB(na,Zf(n)),i.buffers.color.setClear(na.r,na.g,na.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(T,b=1){a.set(T),c=b,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,m(a,c)},render:M,addToRenderList:x}}function $g(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(S,B,tt,F,G){let Z=!1,q=u(F,tt,B);r!==q&&(r=q,l(r.object)),Z=d(S,F,tt,G),Z&&g(S,F,tt,G),G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,E(S,B,tt,F),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function h(S){return n.deleteVertexArray(S)}function u(S,B,tt){let F=tt.wireframe===!0,G=i[S.id];G===void 0&&(G={},i[S.id]=G);let Z=G[B.id];Z===void 0&&(Z={},G[B.id]=Z);let q=Z[F];return q===void 0&&(q=f(c()),Z[F]=q),q}function f(S){let B=[],tt=[],F=[];for(let G=0;G<e;G++)B[G]=0,tt[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:tt,attributeDivisors:F,object:S,attributes:{},index:null}}function d(S,B,tt,F){let G=r.attributes,Z=B.attributes,q=0,mt=tt.getAttributes();for(let j in mt)if(mt[j].location>=0){let rt=G[j],Xt=Z[j];if(Xt===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(Xt=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(Xt=S.instanceColor)),rt===void 0||rt.attribute!==Xt||Xt&&rt.data!==Xt.data)return!0;q++}return r.attributesNum!==q||r.index!==F}function g(S,B,tt,F){let G={},Z=B.attributes,q=0,mt=tt.getAttributes();for(let j in mt)if(mt[j].location>=0){let rt=Z[j];rt===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(rt=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(rt=S.instanceColor));let Xt={};Xt.attribute=rt,rt&&rt.data&&(Xt.data=rt.data),G[j]=Xt,q++}r.attributes=G,r.attributesNum=q,r.index=F}function M(){let S=r.newAttributes;for(let B=0,tt=S.length;B<tt;B++)S[B]=0}function x(S){m(S,0)}function m(S,B){let tt=r.newAttributes,F=r.enabledAttributes,G=r.attributeDivisors;tt[S]=1,F[S]===0&&(n.enableVertexAttribArray(S),F[S]=1),G[S]!==B&&(n.vertexAttribDivisor(S,B),G[S]=B)}function T(){let S=r.newAttributes,B=r.enabledAttributes;for(let tt=0,F=B.length;tt<F;tt++)B[tt]!==S[tt]&&(n.disableVertexAttribArray(tt),B[tt]=0)}function b(S,B,tt,F,G,Z,q){q===!0?n.vertexAttribIPointer(S,B,tt,G,Z):n.vertexAttribPointer(S,B,tt,F,G,Z)}function E(S,B,tt,F){M();let G=F.attributes,Z=tt.getAttributes(),q=B.defaultAttributeValues;for(let mt in Z){let j=Z[mt];if(j.location>=0){let yt=G[mt];if(yt===void 0&&(mt==="instanceMatrix"&&S.instanceMatrix&&(yt=S.instanceMatrix),mt==="instanceColor"&&S.instanceColor&&(yt=S.instanceColor)),yt!==void 0){let rt=yt.normalized,Xt=yt.itemSize,oe=t.get(yt);if(oe===void 0)continue;let Me=oe.buffer,ht=oe.type,Tt=oe.bytesPerElement,Jt=ht===n.INT||ht===n.UNSIGNED_INT||yt.gpuType===Mh;if(yt.isInterleavedBufferAttribute){let gt=yt.data,jt=gt.stride,ae=yt.offset;if(gt.isInstancedInterleavedBuffer){for(let qt=0;qt<j.locationSize;qt++)m(j.location+qt,gt.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let qt=0;qt<j.locationSize;qt++)x(j.location+qt);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let qt=0;qt<j.locationSize;qt++)b(j.location+qt,Xt/j.locationSize,ht,rt,jt*Tt,(ae+Xt/j.locationSize*qt)*Tt,Jt)}else{if(yt.isInstancedBufferAttribute){for(let gt=0;gt<j.locationSize;gt++)m(j.location+gt,yt.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let gt=0;gt<j.locationSize;gt++)x(j.location+gt);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let gt=0;gt<j.locationSize;gt++)b(j.location+gt,Xt/j.locationSize,ht,rt,Xt*Tt,Xt/j.locationSize*gt*Tt,Jt)}}else if(q!==void 0){let rt=q[mt];if(rt!==void 0)switch(rt.length){case 2:n.vertexAttrib2fv(j.location,rt);break;case 3:n.vertexAttrib3fv(j.location,rt);break;case 4:n.vertexAttrib4fv(j.location,rt);break;default:n.vertexAttrib1fv(j.location,rt)}}}}T()}function V(){O();for(let S in i){let B=i[S];for(let tt in B){let F=B[tt];for(let G in F)h(F[G].object),delete F[G];delete B[tt]}delete i[S]}}function I(S){if(i[S.id]===void 0)return;let B=i[S.id];for(let tt in B){let F=B[tt];for(let G in F)h(F[G].object),delete F[G];delete B[tt]}delete i[S.id]}function L(S){for(let B in i){let tt=i[B];if(tt[S.id]===void 0)continue;let F=tt[S.id];for(let G in F)h(F[G].object),delete F[G];delete tt[S.id]}}function O(){A(),o=!0,r!==s&&(r=s,l(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:A,dispose:V,releaseStatesOfGeometry:I,releaseStatesOfProgram:L,initAttributes:M,enableAttribute:x,disableUnusedAttributes:T}}function jg(n,t,e){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,i,1)}function c(l,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,u);let g=0;for(let M=0;M<u;M++)g+=h[M]*f[M];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Qg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==ri&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){let O=L===Po&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==zi&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Oi&&!O)}function c(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),V=g>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:V,maxSamples:I}}function tx(n){let t=this,e=null,i=0,s=!1,r=!1,o=new ii,a=new ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,M=u.clipIntersection,x=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!x)r?h(null):l();else{let T=r?0:i,b=T*4,E=m.clippingState||null;c.value=E,E=h(g,f,b,d);for(let V=0;V!==b;++V)E[V]=e[V];m.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,g){let M=u!==null?u.length:0,x=null;if(M!==0){if(x=c.value,g!==!0||x===null){let m=d+M*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(x===null||x.length<m)&&(x=new Float32Array(m));for(let b=0,E=d;b!==M;++b,E+=4)o.copy(u[b]).applyMatrix4(T,a),o.normal.toArray(x,E),x[E+3]=o.constant}c.value=x,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,x}}function ex(n){let t=new WeakMap;function e(o,a){return a===nl?o.mapping=_r:a===il&&(o.mapping=yr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===nl||a===il)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Fl(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Aa=class extends wa{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ur=4,Xu=[.125,.215,.35,.446,.526,.582],Es=20,Nc=new Aa,Yu=new re,Oc=null,Fc=0,Bc=0,zc=!1,Ms=(1+Math.sqrt(5))/2,or=1/Ms,qu=[new U(-Ms,or,0),new U(Ms,or,0),new U(-or,0,Ms),new U(or,0,Ms),new U(0,Ms,-or),new U(0,Ms,or),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Ra=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Oc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),Bc=this._renderer.getActiveMipmapLevel(),zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Oc,Fc,Bc),this._renderer.xr.enabled=zc,t.scissorTest=!1,ia(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_r||t.mapping===yr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),Bc=this._renderer.getActiveMipmapLevel(),zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:Po,format:ri,colorSpace:Tr,depthBuffer:!1},s=Zu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zu(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nx(r)),this._blurMaterial=ix(r,t,e)}return s}_compileMaterial(t){let e=new Rt(this._lodPlanes[0],t);this._renderer.compile(e,Nc)}_sceneToCubeUV(t,e,i,s){let a=new cn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Yu),h.toneMapping=ns,h.autoClear=!1;let d=new Je({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),g=new Rt(new He,d),M=!1,x=t.background;x?x.isColor&&(d.color.copy(x),t.background=null,M=!0):(d.color.copy(Yu),M=!0);for(let m=0;m<6;m++){let T=m%3;T===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):T===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let b=this._cubeSize;ia(s,T*b,m>2?b:0,b,b),h.setRenderTarget(s),M&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=x}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===_r||t.mapping===yr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ku());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Rt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;ia(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Nc)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=qu[(s-r-1)%qu.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Rt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Es-1),M=r/g,x=isFinite(r)?1+Math.floor(h*M):Es;x>Es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Es}`);let m=[],T=0;for(let L=0;L<Es;++L){let O=L/M,A=Math.exp(-O*O/2);m.push(A),L===0?T+=A:L<x&&(T+=2*A)}for(let L=0;L<m.length;L++)m[L]=m[L]/T;f.envMap.value=t.texture,f.samples.value=x,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;let E=this._sizeLods[s],V=3*E*(s>b-ur?s-b+ur:0),I=4*(this._cubeSize-E);ia(e,V,I,3*E,2*E),c.setRenderTarget(e),c.render(u,Nc)}};function nx(n){let t=[],e=[],i=[],s=n,r=n-ur+1+Xu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>n-ur?c=Xu[o-n+ur-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,M=3,x=2,m=1,T=new Float32Array(M*g*d),b=new Float32Array(x*g*d),E=new Float32Array(m*g*d);for(let I=0;I<d;I++){let L=I%3*2/3-1,O=I>2?0:-1,A=[L,O,0,L+2/3,O,0,L+2/3,O+1,0,L,O,0,L+2/3,O+1,0,L,O+1,0];T.set(A,M*g*I),b.set(f,x*g*I);let S=[I,I,I,I,I,I];E.set(S,m*g*I)}let V=new Oe;V.setAttribute("position",new dn(T,M)),V.setAttribute("uv",new dn(b,x)),V.setAttribute("faceIndex",new dn(E,m)),t.push(V),s>ur&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Zu(n,t,e){let i=new ki(n,t,e);return i.texture.mapping=Wa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ia(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function ix(n,t,e){let i=new Float32Array(Es),s=new U(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ah(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function Ku(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ah(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function Ju(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function Ah(){return`

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
	`}function sx(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===nl||c===il,h=c===_r||c===yr;if(l||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Ra(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Ra(n)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function rx(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&$r("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function ox(n,t,e,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let M=f.morphAttributes[g];for(let x=0,m=M.length;x<m;x++)t.remove(M[x])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)t.update(f[g],n.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let M=d[g];for(let x=0,m=M.length;x<m;x++)t.update(M[x],n.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,g=u.attributes.position,M=0;if(d!==null){let T=d.array;M=d.version;for(let b=0,E=T.length;b<E;b+=3){let V=T[b+0],I=T[b+1],L=T[b+2];f.push(V,I,I,L,L,V)}}else if(g!==void 0){let T=g.array;M=g.version;for(let b=0,E=T.length/3-1;b<E;b+=3){let V=b+0,I=b+1,L=b+2;f.push(V,I,I,L,L,V)}}else return;let x=new(Yf(f)?Sa:ba)(f,1);x.version=M;let m=r.get(u);m&&t.remove(m),r.set(u,x)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function ax(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function l(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),e.update(d,i,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let x=0;for(let m=0;m<g;m++)x+=d[m];e.update(x,i,1)}function u(f,d,g,M){if(g===0)return;let x=t.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<f.length;m++)l(f[m]/o,d[m],M[m]);else{x.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,M,0,g);let m=0;for(let T=0;T<g;T++)m+=d[T]*M[T];e.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function cx(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function lx(n,t,e){let i=new WeakMap,s=new De;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let A=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],b=0;d===!0&&(b=1),g===!0&&(b=2),M===!0&&(b=3);let E=a.attributes.position.count*b,V=1;E>t.maxTextureSize&&(V=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let I=new Float32Array(E*V*4*u),L=new Ea(I,E,V,u);L.type=Oi,L.needsUpdate=!0;let O=b*4;for(let S=0;S<u;S++){let B=x[S],tt=m[S],F=T[S],G=E*V*4*S;for(let Z=0;Z<B.count;Z++){let q=Z*O;d===!0&&(s.fromBufferAttribute(B,Z),I[G+q+0]=s.x,I[G+q+1]=s.y,I[G+q+2]=s.z,I[G+q+3]=0),g===!0&&(s.fromBufferAttribute(tt,Z),I[G+q+4]=s.x,I[G+q+5]=s.y,I[G+q+6]=s.z,I[G+q+7]=0),M===!0&&(s.fromBufferAttribute(F,Z),I[G+q+8]=s.x,I[G+q+9]=s.y,I[G+q+10]=s.z,I[G+q+11]=F.itemSize===4?s.w:1)}}f={count:u,texture:L,size:new vt(E,V)},i.set(a,f),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let M=0;M<l.length;M++)d+=l[M];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function hx(n,t,e,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Ca=class extends Mn{constructor(t,e,i,s,r,o,a,c,l,h=pr){if(h!==pr&&h!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===pr&&(i=ws),i===void 0&&h===vr&&(i=Mr),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:$e,this.minFilter=c!==void 0?c:$e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Jf=new Mn,$u=new Ca(1,1),$f=new Ea,jf=new Nl,Qf=new Ta,ju=[],Qu=[],tf=new Float32Array(16),ef=new Float32Array(9),nf=new Float32Array(4);function Ar(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=ju[s];if(r===void 0&&(r=new Float32Array(s),ju[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function nn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function sn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ya(n,t){let e=Qu[t];e===void 0&&(e=new Int32Array(t),Qu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function ux(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function fx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;n.uniform2fv(this.addr,t),sn(e,t)}}function dx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;n.uniform3fv(this.addr,t),sn(e,t)}}function px(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;n.uniform4fv(this.addr,t),sn(e,t)}}function mx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(nn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,i))return;nf.set(i),n.uniformMatrix2fv(this.addr,!1,nf),sn(e,i)}}function gx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(nn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,i))return;ef.set(i),n.uniformMatrix3fv(this.addr,!1,ef),sn(e,i)}}function xx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(nn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,i))return;tf.set(i),n.uniformMatrix4fv(this.addr,!1,tf),sn(e,i)}}function _x(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function yx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;n.uniform2iv(this.addr,t),sn(e,t)}}function Mx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;n.uniform3iv(this.addr,t),sn(e,t)}}function vx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;n.uniform4iv(this.addr,t),sn(e,t)}}function Ex(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function bx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;n.uniform2uiv(this.addr,t),sn(e,t)}}function Sx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;n.uniform3uiv(this.addr,t),sn(e,t)}}function wx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;n.uniform4uiv(this.addr,t),sn(e,t)}}function Tx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?($u.compareFunction=Wf,r=$u):r=Jf,e.setTexture2D(t||r,s)}function Ax(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||jf,s)}function Rx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Qf,s)}function Cx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||$f,s)}function Px(n){switch(n){case 5126:return ux;case 35664:return fx;case 35665:return dx;case 35666:return px;case 35674:return mx;case 35675:return gx;case 35676:return xx;case 5124:case 35670:return _x;case 35667:case 35671:return yx;case 35668:case 35672:return Mx;case 35669:case 35673:return vx;case 5125:return Ex;case 36294:return bx;case 36295:return Sx;case 36296:return wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Tx;case 35679:case 36299:case 36307:return Ax;case 35680:case 36300:case 36308:case 36293:return Rx;case 36289:case 36303:case 36311:case 36292:return Cx}}function Ix(n,t){n.uniform1fv(this.addr,t)}function Lx(n,t){let e=Ar(t,this.size,2);n.uniform2fv(this.addr,e)}function Dx(n,t){let e=Ar(t,this.size,3);n.uniform3fv(this.addr,e)}function Ux(n,t){let e=Ar(t,this.size,4);n.uniform4fv(this.addr,e)}function Nx(n,t){let e=Ar(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Ox(n,t){let e=Ar(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Fx(n,t){let e=Ar(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Bx(n,t){n.uniform1iv(this.addr,t)}function zx(n,t){n.uniform2iv(this.addr,t)}function Hx(n,t){n.uniform3iv(this.addr,t)}function kx(n,t){n.uniform4iv(this.addr,t)}function Vx(n,t){n.uniform1uiv(this.addr,t)}function Gx(n,t){n.uniform2uiv(this.addr,t)}function Wx(n,t){n.uniform3uiv(this.addr,t)}function Xx(n,t){n.uniform4uiv(this.addr,t)}function Yx(n,t,e){let i=this.cache,s=t.length,r=Ya(e,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Jf,r[o])}function qx(n,t,e){let i=this.cache,s=t.length,r=Ya(e,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||jf,r[o])}function Zx(n,t,e){let i=this.cache,s=t.length,r=Ya(e,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Qf,r[o])}function Kx(n,t,e){let i=this.cache,s=t.length,r=Ya(e,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||$f,r[o])}function Jx(n){switch(n){case 5126:return Ix;case 35664:return Lx;case 35665:return Dx;case 35666:return Ux;case 35674:return Nx;case 35675:return Ox;case 35676:return Fx;case 5124:case 35670:return Bx;case 35667:case 35671:return zx;case 35668:case 35672:return Hx;case 35669:case 35673:return kx;case 5125:return Vx;case 36294:return Gx;case 36295:return Wx;case 36296:return Xx;case 35678:case 36198:case 36298:case 36306:case 35682:return Yx;case 35679:case 36299:case 36307:return qx;case 35680:case 36300:case 36308:case 36293:return Zx;case 36289:case 36303:case 36311:case 36292:return Kx}}var Bl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Px(e.type)}},zl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jx(e.type)}},Hl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Hc=/(\w+)(\])?(\[|\.)?/g;function sf(n,t){n.seq.push(t),n.map[t.id]=t}function $x(n,t,e){let i=n.name,s=i.length;for(Hc.lastIndex=0;;){let r=Hc.exec(i),o=Hc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){sf(e,l===void 0?new Bl(a,n,t):new zl(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Hl(a),sf(e,u)),e=u}}}var gr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);$x(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function rf(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var jx=37297,Qx=0;function t_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var of=new ge;function e_(n){be._getMatrix(of,be.workingColorSpace,n);let t=`mat3( ${of.elements.map(e=>e.toFixed(4))} )`;switch(be.getTransfer(n)){case Xa:return[t,"LinearTransferOETF"];case Le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function af(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+t_(n.getShaderSource(t),o)}else return s}function n_(n,t){let e=e_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function i_(n,t){let e;switch(t){case dp:e="Linear";break;case pp:e="Reinhard";break;case mp:e="Cineon";break;case gp:e="ACESFilmic";break;case _p:e="AgX";break;case yp:e="Neutral";break;case xp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var sa=new U;function s_(){be.getLuminanceCoefficients(sa);let n=sa.x.toFixed(4),t=sa.y.toFixed(4),e=sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jr).join(`
`)}function o_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function a_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function jr(n){return n!==""}function cf(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var c_=/^[ \t]*#include +<([\w\d./]+)>/gm;function kl(n){return n.replace(c_,h_)}var l_=new Map;function h_(n,t){let e=xe[t];if(e===void 0){let i=l_.get(t);if(i!==void 0)e=xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return kl(e)}var u_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hf(n){return n.replace(u_,f_)}function f_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function d_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===If?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ga?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ni&&(t="SHADOWMAP_TYPE_VSM"),t}function p_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _r:case yr:t="ENVMAP_TYPE_CUBE";break;case Wa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function m_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case yr:t="ENVMAP_MODE_REFRACTION";break}return t}function g_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case yh:t="ENVMAP_BLENDING_MULTIPLY";break;case up:t="ENVMAP_BLENDING_MIX";break;case fp:t="ENVMAP_BLENDING_ADD";break}return t}function x_(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function __(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=d_(e),l=p_(e),h=m_(e),u=g_(e),f=x_(e),d=r_(e),g=o_(r),M=s.createProgram(),x,m,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(jr).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(jr).join(`
`),m.length>0&&(m+=`
`)):(x=[uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jr).join(`
`),m=[uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ns?"#define TONE_MAPPING":"",e.toneMapping!==ns?xe.tonemapping_pars_fragment:"",e.toneMapping!==ns?i_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,n_("linearToOutputTexel",e.outputColorSpace),s_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(jr).join(`
`)),o=kl(o),o=cf(o,e),o=lf(o,e),a=kl(a),a=cf(a,e),a=lf(a,e),o=hf(o),a=hf(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=T+x+o,E=T+m+a,V=rf(s,s.VERTEX_SHADER,b),I=rf(s,s.FRAGMENT_SHADER,E);s.attachShader(M,V),s.attachShader(M,I),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function L(B){if(n.debug.checkShaderErrors){let tt=s.getProgramInfoLog(M).trim(),F=s.getShaderInfoLog(V).trim(),G=s.getShaderInfoLog(I).trim(),Z=!0,q=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,V,I);else{let mt=af(s,V,"vertex"),j=af(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+tt+`
`+mt+`
`+j)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(F===""||G==="")&&(q=!1);q&&(B.diagnostics={runnable:Z,programLog:tt,vertexShader:{log:F,prefix:x},fragmentShader:{log:G,prefix:m}})}s.deleteShader(V),s.deleteShader(I),O=new gr(s,M),A=a_(s,M)}let O;this.getUniforms=function(){return O===void 0&&L(this),O};let A;this.getAttributes=function(){return A===void 0&&L(this),A};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(M,jx)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qx++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=V,this.fragmentShader=I,this}var y_=0,Vl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Gl(t),e.set(t,i)),i}},Gl=class{constructor(t){this.id=y_++,this.code=t,this.usedTimes=0}};function M_(n,t,e,i,s,r,o){let a=new lo,c=new Vl,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(A){return l.add(A),A===0?"uv":`uv${A}`}function x(A,S,B,tt,F){let G=tt.fog,Z=F.geometry,q=A.isMeshStandardMaterial?tt.environment:null,mt=(A.isMeshStandardMaterial?e:t).get(A.envMap||q),j=mt&&mt.mapping===Wa?mt.image.height:null,yt=g[A.type];A.precision!==null&&(d=s.getMaxPrecision(A.precision),d!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",d,"instead."));let rt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Xt=rt!==void 0?rt.length:0,oe=0;Z.morphAttributes.position!==void 0&&(oe=1),Z.morphAttributes.normal!==void 0&&(oe=2),Z.morphAttributes.color!==void 0&&(oe=3);let Me,ht,Tt,Jt;if(yt){let Te=mi[yt];Me=Te.vertexShader,ht=Te.fragmentShader}else Me=A.vertexShader,ht=A.fragmentShader,c.update(A),Tt=c.getVertexShaderID(A),Jt=c.getFragmentShaderID(A);let gt=n.getRenderTarget(),jt=n.state.buffers.depth.getReversed(),ae=F.isInstancedMesh===!0,qt=F.isBatchedMesh===!0,le=!!A.map,dt=!!A.matcap,wt=!!mt,N=!!A.aoMap,Yt=!!A.lightMap,St=!!A.bumpMap,Ft=!!A.normalMap,Lt=!!A.displacementMap,te=!!A.emissiveMap,Vt=!!A.metalnessMap,P=!!A.roughnessMap,w=A.anisotropy>0,Q=A.clearcoat>0,W=A.dispersion>0,K=A.iridescence>0,X=A.sheen>0,xt=A.transmission>0,ft=w&&!!A.anisotropyMap,pt=Q&&!!A.clearcoatMap,Mt=Q&&!!A.clearcoatNormalMap,et=Q&&!!A.clearcoatRoughnessMap,Dt=K&&!!A.iridescenceMap,Ct=K&&!!A.iridescenceThicknessMap,Et=X&&!!A.sheenColorMap,Ot=X&&!!A.sheenRoughnessMap,Zt=!!A.specularMap,Kt=!!A.specularColorMap,ve=!!A.specularIntensityMap,Y=xt&&!!A.transmissionMap,Ut=xt&&!!A.thicknessMap,at=!!A.gradientMap,_t=!!A.alphaMap,Gt=A.alphaTest>0,Bt=!!A.alphaHash,he=!!A.extensions,Fe=ns;A.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(Fe=n.toneMapping);let ke={shaderID:yt,shaderType:A.type,shaderName:A.name,vertexShader:Me,fragmentShader:ht,defines:A.defines,customVertexShaderID:Tt,customFragmentShaderID:Jt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:d,batching:qt,batchingColor:qt&&F._colorsTexture!==null,instancing:ae,instancingColor:ae&&F.instanceColor!==null,instancingMorph:ae&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:gt===null?n.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Tr,alphaToCoverage:!!A.alphaToCoverage,map:le,matcap:dt,envMap:wt,envMapMode:wt&&mt.mapping,envMapCubeUVHeight:j,aoMap:N,lightMap:Yt,bumpMap:St,normalMap:Ft,displacementMap:f&&Lt,emissiveMap:te,normalMapObjectSpace:Ft&&A.normalMapType===bp,normalMapTangentSpace:Ft&&A.normalMapType===Gf,metalnessMap:Vt,roughnessMap:P,anisotropy:w,anisotropyMap:ft,clearcoat:Q,clearcoatMap:pt,clearcoatNormalMap:Mt,clearcoatRoughnessMap:et,dispersion:W,iridescence:K,iridescenceMap:Dt,iridescenceThicknessMap:Ct,sheen:X,sheenColorMap:Et,sheenRoughnessMap:Ot,specularMap:Zt,specularColorMap:Kt,specularIntensityMap:ve,transmission:xt,transmissionMap:Y,thicknessMap:Ut,gradientMap:at,opaque:A.transparent===!1&&A.blending===dr&&A.alphaToCoverage===!1,alphaMap:_t,alphaTest:Gt,alphaHash:Bt,combine:A.combine,mapUv:le&&M(A.map.channel),aoMapUv:N&&M(A.aoMap.channel),lightMapUv:Yt&&M(A.lightMap.channel),bumpMapUv:St&&M(A.bumpMap.channel),normalMapUv:Ft&&M(A.normalMap.channel),displacementMapUv:Lt&&M(A.displacementMap.channel),emissiveMapUv:te&&M(A.emissiveMap.channel),metalnessMapUv:Vt&&M(A.metalnessMap.channel),roughnessMapUv:P&&M(A.roughnessMap.channel),anisotropyMapUv:ft&&M(A.anisotropyMap.channel),clearcoatMapUv:pt&&M(A.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&M(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&M(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&M(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&M(A.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&M(A.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&M(A.sheenRoughnessMap.channel),specularMapUv:Zt&&M(A.specularMap.channel),specularColorMapUv:Kt&&M(A.specularColorMap.channel),specularIntensityMapUv:ve&&M(A.specularIntensityMap.channel),transmissionMapUv:Y&&M(A.transmissionMap.channel),thicknessMapUv:Ut&&M(A.thicknessMap.channel),alphaMapUv:_t&&M(A.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ft||w),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Z.attributes.uv&&(le||_t),fog:!!G,useFog:A.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:jt,skinning:F.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Xt,morphTextureStride:oe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:Fe,decodeVideoTexture:le&&A.map.isVideoTexture===!0&&be.getTransfer(A.map.colorSpace)===Le,decodeVideoTextureEmissive:te&&A.emissiveMap.isVideoTexture===!0&&be.getTransfer(A.emissiveMap.colorSpace)===Le,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===_n,flipSided:A.side===yn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:he&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&A.extensions.multiDraw===!0||qt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return ke.vertexUv1s=l.has(1),ke.vertexUv2s=l.has(2),ke.vertexUv3s=l.has(3),l.clear(),ke}function m(A){let S=[];if(A.shaderID?S.push(A.shaderID):(S.push(A.customVertexShaderID),S.push(A.customFragmentShaderID)),A.defines!==void 0)for(let B in A.defines)S.push(B),S.push(A.defines[B]);return A.isRawShaderMaterial===!1&&(T(S,A),b(S,A),S.push(n.outputColorSpace)),S.push(A.customProgramCacheKey),S.join()}function T(A,S){A.push(S.precision),A.push(S.outputColorSpace),A.push(S.envMapMode),A.push(S.envMapCubeUVHeight),A.push(S.mapUv),A.push(S.alphaMapUv),A.push(S.lightMapUv),A.push(S.aoMapUv),A.push(S.bumpMapUv),A.push(S.normalMapUv),A.push(S.displacementMapUv),A.push(S.emissiveMapUv),A.push(S.metalnessMapUv),A.push(S.roughnessMapUv),A.push(S.anisotropyMapUv),A.push(S.clearcoatMapUv),A.push(S.clearcoatNormalMapUv),A.push(S.clearcoatRoughnessMapUv),A.push(S.iridescenceMapUv),A.push(S.iridescenceThicknessMapUv),A.push(S.sheenColorMapUv),A.push(S.sheenRoughnessMapUv),A.push(S.specularMapUv),A.push(S.specularColorMapUv),A.push(S.specularIntensityMapUv),A.push(S.transmissionMapUv),A.push(S.thicknessMapUv),A.push(S.combine),A.push(S.fogExp2),A.push(S.sizeAttenuation),A.push(S.morphTargetsCount),A.push(S.morphAttributeCount),A.push(S.numDirLights),A.push(S.numPointLights),A.push(S.numSpotLights),A.push(S.numSpotLightMaps),A.push(S.numHemiLights),A.push(S.numRectAreaLights),A.push(S.numDirLightShadows),A.push(S.numPointLightShadows),A.push(S.numSpotLightShadows),A.push(S.numSpotLightShadowsWithMaps),A.push(S.numLightProbes),A.push(S.shadowMapType),A.push(S.toneMapping),A.push(S.numClippingPlanes),A.push(S.numClipIntersection),A.push(S.depthPacking)}function b(A,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),A.push(a.mask)}function E(A){let S=g[A.type],B;if(S){let tt=mi[S];B=h0.clone(tt.uniforms)}else B=A.uniforms;return B}function V(A,S){let B;for(let tt=0,F=h.length;tt<F;tt++){let G=h[tt];if(G.cacheKey===S){B=G,++B.usedTimes;break}}return B===void 0&&(B=new __(n,S,A,r),h.push(B)),B}function I(A){if(--A.usedTimes===0){let S=h.indexOf(A);h[S]=h[h.length-1],h.pop(),A.destroy()}}function L(A){c.remove(A)}function O(){c.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:E,acquireProgram:V,releaseProgram:I,releaseShaderCache:L,programs:h,dispose:O}}function v_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function E_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function ff(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function df(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,f,d,g,M,x){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:M,group:x},n[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=M,m.group=x),t++,m}function a(u,f,d,g,M,x){let m=o(u,f,d,g,M,x);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):e.push(m)}function c(u,f,d,g,M,x){let m=o(u,f,d,g,M,x);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function l(u,f){e.length>1&&e.sort(u||E_),i.length>1&&i.sort(f||ff),s.length>1&&s.sort(f||ff)}function h(){for(let u=t,f=n.length;u<f;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function b_(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new df,n.set(i,[o])):s>=r.length?(o=new df,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function S_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new re};break;case"SpotLight":e={position:new U,direction:new U,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new re,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new re,groundColor:new re};break;case"RectAreaLight":e={color:new re,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function w_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var T_=0;function A_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function R_(n){let t=new S_,e=w_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);let s=new U,r=new ze,o=new ze;function a(l){let h=0,u=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let d=0,g=0,M=0,x=0,m=0,T=0,b=0,E=0,V=0,I=0,L=0;l.sort(A_);for(let A=0,S=l.length;A<S;A++){let B=l[A],tt=B.color,F=B.intensity,G=B.distance,Z=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)h+=tt.r*F,u+=tt.g*F,f+=tt.b*F;else if(B.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(B.sh.coefficients[q],F);L++}else if(B.isDirectionalLight){let q=t.get(B);if(q.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let mt=B.shadow,j=e.get(B);j.shadowIntensity=mt.intensity,j.shadowBias=mt.bias,j.shadowNormalBias=mt.normalBias,j.shadowRadius=mt.radius,j.shadowMapSize=mt.mapSize,i.directionalShadow[d]=j,i.directionalShadowMap[d]=Z,i.directionalShadowMatrix[d]=B.shadow.matrix,T++}i.directional[d]=q,d++}else if(B.isSpotLight){let q=t.get(B);q.position.setFromMatrixPosition(B.matrixWorld),q.color.copy(tt).multiplyScalar(F),q.distance=G,q.coneCos=Math.cos(B.angle),q.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),q.decay=B.decay,i.spot[M]=q;let mt=B.shadow;if(B.map&&(i.spotLightMap[V]=B.map,V++,mt.updateMatrices(B),B.castShadow&&I++),i.spotLightMatrix[M]=mt.matrix,B.castShadow){let j=e.get(B);j.shadowIntensity=mt.intensity,j.shadowBias=mt.bias,j.shadowNormalBias=mt.normalBias,j.shadowRadius=mt.radius,j.shadowMapSize=mt.mapSize,i.spotShadow[M]=j,i.spotShadowMap[M]=Z,E++}M++}else if(B.isRectAreaLight){let q=t.get(B);q.color.copy(tt).multiplyScalar(F),q.halfWidth.set(B.width*.5,0,0),q.halfHeight.set(0,B.height*.5,0),i.rectArea[x]=q,x++}else if(B.isPointLight){let q=t.get(B);if(q.color.copy(B.color).multiplyScalar(B.intensity),q.distance=B.distance,q.decay=B.decay,B.castShadow){let mt=B.shadow,j=e.get(B);j.shadowIntensity=mt.intensity,j.shadowBias=mt.bias,j.shadowNormalBias=mt.normalBias,j.shadowRadius=mt.radius,j.shadowMapSize=mt.mapSize,j.shadowCameraNear=mt.camera.near,j.shadowCameraFar=mt.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=B.shadow.matrix,b++}i.point[g]=q,g++}else if(B.isHemisphereLight){let q=t.get(B);q.skyColor.copy(B.color).multiplyScalar(F),q.groundColor.copy(B.groundColor).multiplyScalar(F),i.hemi[m]=q,m++}}x>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=zt.LTC_FLOAT_1,i.rectAreaLTC2=zt.LTC_FLOAT_2):(i.rectAreaLTC1=zt.LTC_HALF_1,i.rectAreaLTC2=zt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let O=i.hash;(O.directionalLength!==d||O.pointLength!==g||O.spotLength!==M||O.rectAreaLength!==x||O.hemiLength!==m||O.numDirectionalShadows!==T||O.numPointShadows!==b||O.numSpotShadows!==E||O.numSpotMaps!==V||O.numLightProbes!==L)&&(i.directional.length=d,i.spot.length=M,i.rectArea.length=x,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+V-I,i.spotLightMap.length=V,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=L,O.directionalLength=d,O.pointLength=g,O.spotLength=M,O.rectAreaLength=x,O.hemiLength=m,O.numDirectionalShadows=T,O.numPointShadows=b,O.numSpotShadows=E,O.numSpotMaps=V,O.numLightProbes=L,i.version=T_++)}function c(l,h){let u=0,f=0,d=0,g=0,M=0,x=h.matrixWorldInverse;for(let m=0,T=l.length;m<T;m++){let b=l[m];if(b.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(x),u++}else if(b.isSpotLight){let E=i.spot[d];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(x),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(x),d++}else if(b.isRectAreaLight){let E=i.rectArea[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(x),o.identity(),r.copy(b.matrixWorld),r.premultiply(x),o.extractRotation(r),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(x),f++}else if(b.isHemisphereLight){let E=i.hemi[M];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(x),M++}}}return{setup:a,setupView:c,state:i}}function pf(n){let t=new R_(n),e=[],i=[];function s(h){l.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function C_(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new pf(n),t.set(s,[a])):r>=o.length?(a=new pf(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Wl=class extends Vi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=vp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xl=class extends Vi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},P_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I_=`uniform sampler2D shadow_pass;
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
}`;function L_(n,t,e){let i=new ho,s=new vt,r=new vt,o=new De,a=new Wl({depthPacking:Ep}),c=new Xl,l={},h=e.maxTextureSize,u={[is]:yn,[yn]:is,[_n]:_n},f=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:P_,fragmentShader:I_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Oe;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Rt(g,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=If;let m=this.type;this.render=function(I,L,O){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;let A=n.getRenderTarget(),S=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),tt=n.state;tt.setBlending(es),tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);let F=m!==Ni&&this.type===Ni,G=m===Ni&&this.type!==Ni;for(let Z=0,q=I.length;Z<q;Z++){let mt=I[Z],j=mt.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",mt,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let yt=j.getFrameExtents();if(s.multiply(yt),r.copy(j.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/yt.x),s.x=r.x*yt.x,j.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/yt.y),s.y=r.y*yt.y,j.mapSize.y=r.y)),j.map===null||F===!0||G===!0){let Xt=this.type!==Ni?{minFilter:$e,magFilter:$e}:{};j.map!==null&&j.map.dispose(),j.map=new ki(s.x,s.y,Xt),j.map.texture.name=mt.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();let rt=j.getViewportCount();for(let Xt=0;Xt<rt;Xt++){let oe=j.getViewport(Xt);o.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),tt.viewport(o),j.updateMatrices(mt,Xt),i=j.getFrustum(),E(L,O,j.camera,mt,this.type)}j.isPointLightShadow!==!0&&this.type===Ni&&T(j,O),j.needsUpdate=!1}m=this.type,x.needsUpdate=!1,n.setRenderTarget(A,S,B)};function T(I,L){let O=t.update(M);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,d.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new ki(s.x,s.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(L,null,O,f,M,null),d.uniforms.shadow_pass.value=I.mapPass.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(L,null,O,d,M,null)}function b(I,L,O,A){let S=null,B=O.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(B!==void 0)S=B;else if(S=O.isPointLight===!0?c:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let tt=S.uuid,F=L.uuid,G=l[tt];G===void 0&&(G={},l[tt]=G);let Z=G[F];Z===void 0&&(Z=S.clone(),G[F]=Z,L.addEventListener("dispose",V)),S=Z}if(S.visible=L.visible,S.wireframe=L.wireframe,A===Ni?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:u[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,O.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let tt=n.properties.get(S);tt.light=O}return S}function E(I,L,O,A,S){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&S===Ni)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,I.matrixWorld);let F=t.update(I),G=I.material;if(Array.isArray(G)){let Z=F.groups;for(let q=0,mt=Z.length;q<mt;q++){let j=Z[q],yt=G[j.materialIndex];if(yt&&yt.visible){let rt=b(I,yt,A,S);I.onBeforeShadow(n,I,L,O,F,rt,j),n.renderBufferDirect(O,null,F,rt,I,j),I.onAfterShadow(n,I,L,O,F,rt,j)}}}else if(G.visible){let Z=b(I,G,A,S);I.onBeforeShadow(n,I,L,O,F,Z,null),n.renderBufferDirect(O,null,F,Z,I,null),I.onAfterShadow(n,I,L,O,F,Z,null)}}let tt=I.children;for(let F=0,G=tt.length;F<G;F++)E(tt[F],L,O,A,S)}function V(I){I.target.removeEventListener("dispose",V);for(let O in l){let A=l[O],S=I.target.uuid;S in A&&(A[S].dispose(),delete A[S])}}}var D_={[Kc]:Jc,[$c]:tl,[jc]:el,[xr]:Qc,[Jc]:Kc,[tl]:$c,[el]:jc,[Qc]:xr};function U_(n,t){function e(){let Y=!1,Ut=new De,at=null,_t=new De(0,0,0,0);return{setMask:function(Gt){at!==Gt&&!Y&&(n.colorMask(Gt,Gt,Gt,Gt),at=Gt)},setLocked:function(Gt){Y=Gt},setClear:function(Gt,Bt,he,Fe,ke){ke===!0&&(Gt*=Fe,Bt*=Fe,he*=Fe),Ut.set(Gt,Bt,he,Fe),_t.equals(Ut)===!1&&(n.clearColor(Gt,Bt,he,Fe),_t.copy(Ut))},reset:function(){Y=!1,at=null,_t.set(-1,0,0,0)}}}function i(){let Y=!1,Ut=!1,at=null,_t=null,Gt=null;return{setReversed:function(Bt){if(Ut!==Bt){let he=t.get("EXT_clip_control");Ut?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT);let Fe=Gt;Gt=null,this.setClear(Fe)}Ut=Bt},getReversed:function(){return Ut},setTest:function(Bt){Bt?gt(n.DEPTH_TEST):jt(n.DEPTH_TEST)},setMask:function(Bt){at!==Bt&&!Y&&(n.depthMask(Bt),at=Bt)},setFunc:function(Bt){if(Ut&&(Bt=D_[Bt]),_t!==Bt){switch(Bt){case Kc:n.depthFunc(n.NEVER);break;case Jc:n.depthFunc(n.ALWAYS);break;case $c:n.depthFunc(n.LESS);break;case xr:n.depthFunc(n.LEQUAL);break;case jc:n.depthFunc(n.EQUAL);break;case Qc:n.depthFunc(n.GEQUAL);break;case tl:n.depthFunc(n.GREATER);break;case el:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_t=Bt}},setLocked:function(Bt){Y=Bt},setClear:function(Bt){Gt!==Bt&&(Ut&&(Bt=1-Bt),n.clearDepth(Bt),Gt=Bt)},reset:function(){Y=!1,at=null,_t=null,Gt=null,Ut=!1}}}function s(){let Y=!1,Ut=null,at=null,_t=null,Gt=null,Bt=null,he=null,Fe=null,ke=null;return{setTest:function(Te){Y||(Te?gt(n.STENCIL_TEST):jt(n.STENCIL_TEST))},setMask:function(Te){Ut!==Te&&!Y&&(n.stencilMask(Te),Ut=Te)},setFunc:function(Te,Hn,Ln){(at!==Te||_t!==Hn||Gt!==Ln)&&(n.stencilFunc(Te,Hn,Ln),at=Te,_t=Hn,Gt=Ln)},setOp:function(Te,Hn,Ln){(Bt!==Te||he!==Hn||Fe!==Ln)&&(n.stencilOp(Te,Hn,Ln),Bt=Te,he=Hn,Fe=Ln)},setLocked:function(Te){Y=Te},setClear:function(Te){ke!==Te&&(n.clearStencil(Te),ke=Te)},reset:function(){Y=!1,Ut=null,at=null,_t=null,Gt=null,Bt=null,he=null,Fe=null,ke=null}}}let r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,M=!1,x=null,m=null,T=null,b=null,E=null,V=null,I=null,L=new re(0,0,0),O=0,A=!1,S=null,B=null,tt=null,F=null,G=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,mt=0,j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(mt=parseFloat(/^WebGL (\d)/.exec(j)[1]),q=mt>=1):j.indexOf("OpenGL ES")!==-1&&(mt=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),q=mt>=2);let yt=null,rt={},Xt=n.getParameter(n.SCISSOR_BOX),oe=n.getParameter(n.VIEWPORT),Me=new De().fromArray(Xt),ht=new De().fromArray(oe);function Tt(Y,Ut,at,_t){let Gt=new Uint8Array(4),Bt=n.createTexture();n.bindTexture(Y,Bt),n.texParameteri(Y,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(Y,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let he=0;he<at;he++)Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?n.texImage3D(Ut,0,n.RGBA,1,1,_t,0,n.RGBA,n.UNSIGNED_BYTE,Gt):n.texImage2D(Ut+he,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Gt);return Bt}let Jt={};Jt[n.TEXTURE_2D]=Tt(n.TEXTURE_2D,n.TEXTURE_2D,1),Jt[n.TEXTURE_CUBE_MAP]=Tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Jt[n.TEXTURE_2D_ARRAY]=Tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Jt[n.TEXTURE_3D]=Tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),gt(n.DEPTH_TEST),o.setFunc(xr),St(!1),Ft(mu),gt(n.CULL_FACE),N(es);function gt(Y){h[Y]!==!0&&(n.enable(Y),h[Y]=!0)}function jt(Y){h[Y]!==!1&&(n.disable(Y),h[Y]=!1)}function ae(Y,Ut){return u[Y]!==Ut?(n.bindFramebuffer(Y,Ut),u[Y]=Ut,Y===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Ut),Y===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Ut),!0):!1}function qt(Y,Ut){let at=d,_t=!1;if(Y){at=f.get(Ut),at===void 0&&(at=[],f.set(Ut,at));let Gt=Y.textures;if(at.length!==Gt.length||at[0]!==n.COLOR_ATTACHMENT0){for(let Bt=0,he=Gt.length;Bt<he;Bt++)at[Bt]=n.COLOR_ATTACHMENT0+Bt;at.length=Gt.length,_t=!0}}else at[0]!==n.BACK&&(at[0]=n.BACK,_t=!0);_t&&n.drawBuffers(at)}function le(Y){return g!==Y?(n.useProgram(Y),g=Y,!0):!1}let dt={[vs]:n.FUNC_ADD,[Zd]:n.FUNC_SUBTRACT,[Kd]:n.FUNC_REVERSE_SUBTRACT};dt[Jd]=n.MIN,dt[$d]=n.MAX;let wt={[jd]:n.ZERO,[Qd]:n.ONE,[tp]:n.SRC_COLOR,[qc]:n.SRC_ALPHA,[op]:n.SRC_ALPHA_SATURATE,[sp]:n.DST_COLOR,[np]:n.DST_ALPHA,[ep]:n.ONE_MINUS_SRC_COLOR,[Zc]:n.ONE_MINUS_SRC_ALPHA,[rp]:n.ONE_MINUS_DST_COLOR,[ip]:n.ONE_MINUS_DST_ALPHA,[ap]:n.CONSTANT_COLOR,[cp]:n.ONE_MINUS_CONSTANT_COLOR,[lp]:n.CONSTANT_ALPHA,[hp]:n.ONE_MINUS_CONSTANT_ALPHA};function N(Y,Ut,at,_t,Gt,Bt,he,Fe,ke,Te){if(Y===es){M===!0&&(jt(n.BLEND),M=!1);return}if(M===!1&&(gt(n.BLEND),M=!0),Y!==qd){if(Y!==x||Te!==A){if((m!==vs||E!==vs)&&(n.blendEquation(n.FUNC_ADD),m=vs,E=vs),Te)switch(Y){case dr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gu:n.blendFunc(n.ONE,n.ONE);break;case xu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _u:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case dr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _u:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}T=null,b=null,V=null,I=null,L.set(0,0,0),O=0,x=Y,A=Te}return}Gt=Gt||Ut,Bt=Bt||at,he=he||_t,(Ut!==m||Gt!==E)&&(n.blendEquationSeparate(dt[Ut],dt[Gt]),m=Ut,E=Gt),(at!==T||_t!==b||Bt!==V||he!==I)&&(n.blendFuncSeparate(wt[at],wt[_t],wt[Bt],wt[he]),T=at,b=_t,V=Bt,I=he),(Fe.equals(L)===!1||ke!==O)&&(n.blendColor(Fe.r,Fe.g,Fe.b,ke),L.copy(Fe),O=ke),x=Y,A=!1}function Yt(Y,Ut){Y.side===_n?jt(n.CULL_FACE):gt(n.CULL_FACE);let at=Y.side===yn;Ut&&(at=!at),St(at),Y.blending===dr&&Y.transparent===!1?N(es):N(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),r.setMask(Y.colorWrite);let _t=Y.stencilWrite;a.setTest(_t),_t&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),te(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?gt(n.SAMPLE_ALPHA_TO_COVERAGE):jt(n.SAMPLE_ALPHA_TO_COVERAGE)}function St(Y){S!==Y&&(Y?n.frontFace(n.CW):n.frontFace(n.CCW),S=Y)}function Ft(Y){Y!==Xd?(gt(n.CULL_FACE),Y!==B&&(Y===mu?n.cullFace(n.BACK):Y===Yd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):jt(n.CULL_FACE),B=Y}function Lt(Y){Y!==tt&&(q&&n.lineWidth(Y),tt=Y)}function te(Y,Ut,at){Y?(gt(n.POLYGON_OFFSET_FILL),(F!==Ut||G!==at)&&(n.polygonOffset(Ut,at),F=Ut,G=at)):jt(n.POLYGON_OFFSET_FILL)}function Vt(Y){Y?gt(n.SCISSOR_TEST):jt(n.SCISSOR_TEST)}function P(Y){Y===void 0&&(Y=n.TEXTURE0+Z-1),yt!==Y&&(n.activeTexture(Y),yt=Y)}function w(Y,Ut,at){at===void 0&&(yt===null?at=n.TEXTURE0+Z-1:at=yt);let _t=rt[at];_t===void 0&&(_t={type:void 0,texture:void 0},rt[at]=_t),(_t.type!==Y||_t.texture!==Ut)&&(yt!==at&&(n.activeTexture(at),yt=at),n.bindTexture(Y,Ut||Jt[Y]),_t.type=Y,_t.texture=Ut)}function Q(){let Y=rt[yt];Y!==void 0&&Y.type!==void 0&&(n.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function W(){try{n.compressedTexImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function K(){try{n.compressedTexImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function X(){try{n.texSubImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function xt(){try{n.texSubImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ft(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Mt(){try{n.texStorage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function et(){try{n.texStorage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Dt(){try{n.texImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ct(){try{n.texImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Et(Y){Me.equals(Y)===!1&&(n.scissor(Y.x,Y.y,Y.z,Y.w),Me.copy(Y))}function Ot(Y){ht.equals(Y)===!1&&(n.viewport(Y.x,Y.y,Y.z,Y.w),ht.copy(Y))}function Zt(Y,Ut){let at=l.get(Ut);at===void 0&&(at=new WeakMap,l.set(Ut,at));let _t=at.get(Y);_t===void 0&&(_t=n.getUniformBlockIndex(Ut,Y.name),at.set(Y,_t))}function Kt(Y,Ut){let _t=l.get(Ut).get(Y);c.get(Ut)!==_t&&(n.uniformBlockBinding(Ut,_t,Y.__bindingPointIndex),c.set(Ut,_t))}function ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},yt=null,rt={},u={},f=new WeakMap,d=[],g=null,M=!1,x=null,m=null,T=null,b=null,E=null,V=null,I=null,L=new re(0,0,0),O=0,A=!1,S=null,B=null,tt=null,F=null,G=null,Me.set(0,0,n.canvas.width,n.canvas.height),ht.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:gt,disable:jt,bindFramebuffer:ae,drawBuffers:qt,useProgram:le,setBlending:N,setMaterial:Yt,setFlipSided:St,setCullFace:Ft,setLineWidth:Lt,setPolygonOffset:te,setScissorTest:Vt,activeTexture:P,bindTexture:w,unbindTexture:Q,compressedTexImage2D:W,compressedTexImage3D:K,texImage2D:Dt,texImage3D:Ct,updateUBOMapping:Zt,uniformBlockBinding:Kt,texStorage2D:Mt,texStorage3D:et,texSubImage2D:X,texSubImage3D:xt,compressedTexSubImage2D:ft,compressedTexSubImage3D:pt,scissor:Et,viewport:Ot,reset:ve}}function mf(n,t,e,i){let s=N_(i);switch(e){case Of:return n*t;case Bf:return n*t;case zf:return n*t*2;case Hf:return n*t/s.components*s.byteLength;case bh:return n*t/s.components*s.byteLength;case kf:return n*t*2/s.components*s.byteLength;case Sh:return n*t*2/s.components*s.byteLength;case Ff:return n*t*3/s.components*s.byteLength;case ri:return n*t*4/s.components*s.byteLength;case wh:return n*t*4/s.components*s.byteLength;case pa:case ma:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ga:case xa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ol:case cl:return Math.max(n,16)*Math.max(t,8)/4;case rl:case al:return Math.max(n,8)*Math.max(t,8)/2;case ll:case hl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ul:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case dl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case pl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ml:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case gl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case xl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case _l:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case yl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ml:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case vl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case El:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case bl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Sl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case wl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case _a:case Tl:case Al:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Vf:case Rl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Cl:case Pl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function N_(n){switch(n){case zi:case Df:return{byteLength:1,components:1};case oo:case Uf:case Po:return{byteLength:2,components:1};case vh:case Eh:return{byteLength:2,components:4};case ws:case Mh:case Oi:return{byteLength:4,components:1};case Nf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function O_(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new vt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,w){return d?new OffscreenCanvas(P,w):co("canvas")}function M(P,w,Q){let W=1,K=Vt(P);if((K.width>Q||K.height>Q)&&(W=Q/Math.max(K.width,K.height)),W<1)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap||typeof VideoFrame!="undefined"&&P instanceof VideoFrame){let X=Math.floor(W*K.width),xt=Math.floor(W*K.height);u===void 0&&(u=g(X,xt));let ft=w?g(X,xt):u;return ft.width=X,ft.height=xt,ft.getContext("2d").drawImage(P,0,0,X,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+X+"x"+xt+")."),ft}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),P;return P}function x(P){return P.generateMipmaps}function m(P){n.generateMipmap(P)}function T(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(P,w,Q,W,K=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let X=w;if(w===n.RED&&(Q===n.FLOAT&&(X=n.R32F),Q===n.HALF_FLOAT&&(X=n.R16F),Q===n.UNSIGNED_BYTE&&(X=n.R8)),w===n.RED_INTEGER&&(Q===n.UNSIGNED_BYTE&&(X=n.R8UI),Q===n.UNSIGNED_SHORT&&(X=n.R16UI),Q===n.UNSIGNED_INT&&(X=n.R32UI),Q===n.BYTE&&(X=n.R8I),Q===n.SHORT&&(X=n.R16I),Q===n.INT&&(X=n.R32I)),w===n.RG&&(Q===n.FLOAT&&(X=n.RG32F),Q===n.HALF_FLOAT&&(X=n.RG16F),Q===n.UNSIGNED_BYTE&&(X=n.RG8)),w===n.RG_INTEGER&&(Q===n.UNSIGNED_BYTE&&(X=n.RG8UI),Q===n.UNSIGNED_SHORT&&(X=n.RG16UI),Q===n.UNSIGNED_INT&&(X=n.RG32UI),Q===n.BYTE&&(X=n.RG8I),Q===n.SHORT&&(X=n.RG16I),Q===n.INT&&(X=n.RG32I)),w===n.RGB_INTEGER&&(Q===n.UNSIGNED_BYTE&&(X=n.RGB8UI),Q===n.UNSIGNED_SHORT&&(X=n.RGB16UI),Q===n.UNSIGNED_INT&&(X=n.RGB32UI),Q===n.BYTE&&(X=n.RGB8I),Q===n.SHORT&&(X=n.RGB16I),Q===n.INT&&(X=n.RGB32I)),w===n.RGBA_INTEGER&&(Q===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),Q===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),Q===n.UNSIGNED_INT&&(X=n.RGBA32UI),Q===n.BYTE&&(X=n.RGBA8I),Q===n.SHORT&&(X=n.RGBA16I),Q===n.INT&&(X=n.RGBA32I)),w===n.RGB&&Q===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),w===n.RGBA){let xt=K?Xa:be.getTransfer(W);Q===n.FLOAT&&(X=n.RGBA32F),Q===n.HALF_FLOAT&&(X=n.RGBA16F),Q===n.UNSIGNED_BYTE&&(X=xt===Le?n.SRGB8_ALPHA8:n.RGBA8),Q===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),Q===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function E(P,w){let Q;return P?w===null||w===ws||w===Mr?Q=n.DEPTH24_STENCIL8:w===Oi?Q=n.DEPTH32F_STENCIL8:w===oo&&(Q=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ws||w===Mr?Q=n.DEPTH_COMPONENT24:w===Oi?Q=n.DEPTH_COMPONENT32F:w===oo&&(Q=n.DEPTH_COMPONENT16),Q}function V(P,w){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==$e&&P.minFilter!==gi?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function I(P){let w=P.target;w.removeEventListener("dispose",I),O(w),w.isVideoTexture&&h.delete(w)}function L(P){let w=P.target;w.removeEventListener("dispose",L),S(w)}function O(P){let w=i.get(P);if(w.__webglInit===void 0)return;let Q=P.source,W=f.get(Q);if(W){let K=W[w.__cacheKey];K.usedTimes--,K.usedTimes===0&&A(P),Object.keys(W).length===0&&f.delete(Q)}i.remove(P)}function A(P){let w=i.get(P);n.deleteTexture(w.__webglTexture);let Q=P.source,W=f.get(Q);delete W[w.__cacheKey],o.memory.textures--}function S(P){let w=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(w.__webglFramebuffer[W]))for(let K=0;K<w.__webglFramebuffer[W].length;K++)n.deleteFramebuffer(w.__webglFramebuffer[W][K]);else n.deleteFramebuffer(w.__webglFramebuffer[W]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[W])}else{if(Array.isArray(w.__webglFramebuffer))for(let W=0;W<w.__webglFramebuffer.length;W++)n.deleteFramebuffer(w.__webglFramebuffer[W]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let W=0;W<w.__webglColorRenderbuffer.length;W++)w.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[W]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let Q=P.textures;for(let W=0,K=Q.length;W<K;W++){let X=i.get(Q[W]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(Q[W])}i.remove(P)}let B=0;function tt(){B=0}function F(){let P=B;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),B+=1,P}function G(P){let w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function Z(P,w){let Q=i.get(P);if(P.isVideoTexture&&Lt(P),P.isRenderTargetTexture===!1&&P.version>0&&Q.__version!==P.version){let W=P.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(Q,P,w);return}}e.bindTexture(n.TEXTURE_2D,Q.__webglTexture,n.TEXTURE0+w)}function q(P,w){let Q=i.get(P);if(P.version>0&&Q.__version!==P.version){ht(Q,P,w);return}e.bindTexture(n.TEXTURE_2D_ARRAY,Q.__webglTexture,n.TEXTURE0+w)}function mt(P,w){let Q=i.get(P);if(P.version>0&&Q.__version!==P.version){ht(Q,P,w);return}e.bindTexture(n.TEXTURE_3D,Q.__webglTexture,n.TEXTURE0+w)}function j(P,w){let Q=i.get(P);if(P.version>0&&Q.__version!==P.version){Tt(Q,P,w);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture,n.TEXTURE0+w)}let yt={[ro]:n.REPEAT,[bs]:n.CLAMP_TO_EDGE,[sl]:n.MIRRORED_REPEAT},rt={[$e]:n.NEAREST,[Mp]:n.NEAREST_MIPMAP_NEAREST,[Bo]:n.NEAREST_MIPMAP_LINEAR,[gi]:n.LINEAR,[dc]:n.LINEAR_MIPMAP_NEAREST,[Ss]:n.LINEAR_MIPMAP_LINEAR},Xt={[Sp]:n.NEVER,[Pp]:n.ALWAYS,[wp]:n.LESS,[Wf]:n.LEQUAL,[Tp]:n.EQUAL,[Cp]:n.GEQUAL,[Ap]:n.GREATER,[Rp]:n.NOTEQUAL};function oe(P,w){if(w.type===Oi&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===gi||w.magFilter===dc||w.magFilter===Bo||w.magFilter===Ss||w.minFilter===gi||w.minFilter===dc||w.minFilter===Bo||w.minFilter===Ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,yt[w.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,yt[w.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,yt[w.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,rt[w.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,rt[w.minFilter]),w.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Xt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===$e||w.minFilter!==Bo&&w.minFilter!==Ss||w.type===Oi&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let Q=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Me(P,w){let Q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",I));let W=w.source,K=f.get(W);K===void 0&&(K={},f.set(W,K));let X=G(w);if(X!==P.__cacheKey){K[X]===void 0&&(K[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),K[X].usedTimes++;let xt=K[P.__cacheKey];xt!==void 0&&(K[P.__cacheKey].usedTimes--,xt.usedTimes===0&&A(w)),P.__cacheKey=X,P.__webglTexture=K[X].texture}return Q}function ht(P,w,Q){let W=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(W=n.TEXTURE_3D);let K=Me(P,w),X=w.source;e.bindTexture(W,P.__webglTexture,n.TEXTURE0+Q);let xt=i.get(X);if(X.version!==xt.__version||K===!0){e.activeTexture(n.TEXTURE0+Q);let ft=be.getPrimaries(be.workingColorSpace),pt=w.colorSpace===Qi?null:be.getPrimaries(w.colorSpace),Mt=w.colorSpace===Qi||ft===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let et=M(w.image,!1,s.maxTextureSize);et=te(w,et);let Dt=r.convert(w.format,w.colorSpace),Ct=r.convert(w.type),Et=b(w.internalFormat,Dt,Ct,w.colorSpace,w.isVideoTexture);oe(W,w);let Ot,Zt=w.mipmaps,Kt=w.isVideoTexture!==!0,ve=xt.__version===void 0||K===!0,Y=X.dataReady,Ut=V(w,et);if(w.isDepthTexture)Et=E(w.format===vr,w.type),ve&&(Kt?e.texStorage2D(n.TEXTURE_2D,1,Et,et.width,et.height):e.texImage2D(n.TEXTURE_2D,0,Et,et.width,et.height,0,Dt,Ct,null));else if(w.isDataTexture)if(Zt.length>0){Kt&&ve&&e.texStorage2D(n.TEXTURE_2D,Ut,Et,Zt[0].width,Zt[0].height);for(let at=0,_t=Zt.length;at<_t;at++)Ot=Zt[at],Kt?Y&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,Ot.width,Ot.height,Dt,Ct,Ot.data):e.texImage2D(n.TEXTURE_2D,at,Et,Ot.width,Ot.height,0,Dt,Ct,Ot.data);w.generateMipmaps=!1}else Kt?(ve&&e.texStorage2D(n.TEXTURE_2D,Ut,Et,et.width,et.height),Y&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,et.width,et.height,Dt,Ct,et.data)):e.texImage2D(n.TEXTURE_2D,0,Et,et.width,et.height,0,Dt,Ct,et.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Kt&&ve&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ut,Et,Zt[0].width,Zt[0].height,et.depth);for(let at=0,_t=Zt.length;at<_t;at++)if(Ot=Zt[at],w.format!==ri)if(Dt!==null)if(Kt){if(Y)if(w.layerUpdates.size>0){let Gt=mf(Ot.width,Ot.height,w.format,w.type);for(let Bt of w.layerUpdates){let he=Ot.data.subarray(Bt*Gt/Ot.data.BYTES_PER_ELEMENT,(Bt+1)*Gt/Ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,Bt,Ot.width,Ot.height,1,Dt,he)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,Ot.width,Ot.height,et.depth,Dt,Ot.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,at,Et,Ot.width,Ot.height,et.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?Y&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,Ot.width,Ot.height,et.depth,Dt,Ct,Ot.data):e.texImage3D(n.TEXTURE_2D_ARRAY,at,Et,Ot.width,Ot.height,et.depth,0,Dt,Ct,Ot.data)}else{Kt&&ve&&e.texStorage2D(n.TEXTURE_2D,Ut,Et,Zt[0].width,Zt[0].height);for(let at=0,_t=Zt.length;at<_t;at++)Ot=Zt[at],w.format!==ri?Dt!==null?Kt?Y&&e.compressedTexSubImage2D(n.TEXTURE_2D,at,0,0,Ot.width,Ot.height,Dt,Ot.data):e.compressedTexImage2D(n.TEXTURE_2D,at,Et,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?Y&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,Ot.width,Ot.height,Dt,Ct,Ot.data):e.texImage2D(n.TEXTURE_2D,at,Et,Ot.width,Ot.height,0,Dt,Ct,Ot.data)}else if(w.isDataArrayTexture)if(Kt){if(ve&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ut,Et,et.width,et.height,et.depth),Y)if(w.layerUpdates.size>0){let at=mf(et.width,et.height,w.format,w.type);for(let _t of w.layerUpdates){let Gt=et.data.subarray(_t*at/et.data.BYTES_PER_ELEMENT,(_t+1)*at/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,_t,et.width,et.height,1,Dt,Ct,Gt)}w.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,Dt,Ct,et.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Et,et.width,et.height,et.depth,0,Dt,Ct,et.data);else if(w.isData3DTexture)Kt?(ve&&e.texStorage3D(n.TEXTURE_3D,Ut,Et,et.width,et.height,et.depth),Y&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,Dt,Ct,et.data)):e.texImage3D(n.TEXTURE_3D,0,Et,et.width,et.height,et.depth,0,Dt,Ct,et.data);else if(w.isFramebufferTexture){if(ve)if(Kt)e.texStorage2D(n.TEXTURE_2D,Ut,Et,et.width,et.height);else{let at=et.width,_t=et.height;for(let Gt=0;Gt<Ut;Gt++)e.texImage2D(n.TEXTURE_2D,Gt,Et,at,_t,0,Dt,Ct,null),at>>=1,_t>>=1}}else if(Zt.length>0){if(Kt&&ve){let at=Vt(Zt[0]);e.texStorage2D(n.TEXTURE_2D,Ut,Et,at.width,at.height)}for(let at=0,_t=Zt.length;at<_t;at++)Ot=Zt[at],Kt?Y&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,Dt,Ct,Ot):e.texImage2D(n.TEXTURE_2D,at,Et,Dt,Ct,Ot);w.generateMipmaps=!1}else if(Kt){if(ve){let at=Vt(et);e.texStorage2D(n.TEXTURE_2D,Ut,Et,at.width,at.height)}Y&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Dt,Ct,et)}else e.texImage2D(n.TEXTURE_2D,0,Et,Dt,Ct,et);x(w)&&m(W),xt.__version=X.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Tt(P,w,Q){if(w.image.length!==6)return;let W=Me(P,w),K=w.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+Q);let X=i.get(K);if(K.version!==X.__version||W===!0){e.activeTexture(n.TEXTURE0+Q);let xt=be.getPrimaries(be.workingColorSpace),ft=w.colorSpace===Qi?null:be.getPrimaries(w.colorSpace),pt=w.colorSpace===Qi||xt===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Mt=w.isCompressedTexture||w.image[0].isCompressedTexture,et=w.image[0]&&w.image[0].isDataTexture,Dt=[];for(let _t=0;_t<6;_t++)!Mt&&!et?Dt[_t]=M(w.image[_t],!0,s.maxCubemapSize):Dt[_t]=et?w.image[_t].image:w.image[_t],Dt[_t]=te(w,Dt[_t]);let Ct=Dt[0],Et=r.convert(w.format,w.colorSpace),Ot=r.convert(w.type),Zt=b(w.internalFormat,Et,Ot,w.colorSpace),Kt=w.isVideoTexture!==!0,ve=X.__version===void 0||W===!0,Y=K.dataReady,Ut=V(w,Ct);oe(n.TEXTURE_CUBE_MAP,w);let at;if(Mt){Kt&&ve&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ut,Zt,Ct.width,Ct.height);for(let _t=0;_t<6;_t++){at=Dt[_t].mipmaps;for(let Gt=0;Gt<at.length;Gt++){let Bt=at[Gt];w.format!==ri?Et!==null?Kt?Y&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt,0,0,Bt.width,Bt.height,Et,Bt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt,Zt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt,0,0,Bt.width,Bt.height,Et,Ot,Bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt,Zt,Bt.width,Bt.height,0,Et,Ot,Bt.data)}}}else{if(at=w.mipmaps,Kt&&ve){at.length>0&&Ut++;let _t=Vt(Dt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ut,Zt,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(et){Kt?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Dt[_t].width,Dt[_t].height,Et,Ot,Dt[_t].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Zt,Dt[_t].width,Dt[_t].height,0,Et,Ot,Dt[_t].data);for(let Gt=0;Gt<at.length;Gt++){let he=at[Gt].image[_t].image;Kt?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt+1,0,0,he.width,he.height,Et,Ot,he.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt+1,Zt,he.width,he.height,0,Et,Ot,he.data)}}else{Kt?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Et,Ot,Dt[_t]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Zt,Et,Ot,Dt[_t]);for(let Gt=0;Gt<at.length;Gt++){let Bt=at[Gt];Kt?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt+1,0,0,Et,Ot,Bt.image[_t]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt+1,Zt,Et,Ot,Bt.image[_t])}}}x(w)&&m(n.TEXTURE_CUBE_MAP),X.__version=K.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Jt(P,w,Q,W,K,X){let xt=r.convert(Q.format,Q.colorSpace),ft=r.convert(Q.type),pt=b(Q.internalFormat,xt,ft,Q.colorSpace),Mt=i.get(w),et=i.get(Q);if(et.__renderTarget=w,!Mt.__hasExternalTextures){let Dt=Math.max(1,w.width>>X),Ct=Math.max(1,w.height>>X);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?e.texImage3D(K,X,pt,Dt,Ct,w.depth,0,xt,ft,null):e.texImage2D(K,X,pt,Dt,Ct,0,xt,ft,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),Ft(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,K,et.__webglTexture,0,St(w)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,K,et.__webglTexture,X),e.bindFramebuffer(n.FRAMEBUFFER,null)}function gt(P,w,Q){if(n.bindRenderbuffer(n.RENDERBUFFER,P),w.depthBuffer){let W=w.depthTexture,K=W&&W.isDepthTexture?W.type:null,X=E(w.stencilBuffer,K),xt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=St(w);Ft(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ft,X,w.width,w.height):Q?n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,X,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,X,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xt,n.RENDERBUFFER,P)}else{let W=w.textures;for(let K=0;K<W.length;K++){let X=W[K],xt=r.convert(X.format,X.colorSpace),ft=r.convert(X.type),pt=b(X.internalFormat,xt,ft,X.colorSpace),Mt=St(w);Q&&Ft(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt,pt,w.width,w.height):Ft(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Mt,pt,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,pt,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function jt(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=i.get(w.depthTexture);W.__renderTarget=w,(!W.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Z(w.depthTexture,0);let K=W.__webglTexture,X=St(w);if(w.depthTexture.format===pr)Ft(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(w.depthTexture.format===vr)Ft(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function ae(P){let w=i.get(P),Q=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){let W=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),W){let K=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,W.removeEventListener("dispose",K)};W.addEventListener("dispose",K),w.__depthDisposeCallback=K}w.__boundDepthTexture=W}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");jt(w.__webglFramebuffer,P)}else if(Q){w.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[W]),w.__webglDepthbuffer[W]===void 0)w.__webglDepthbuffer[W]=n.createRenderbuffer(),gt(w.__webglDepthbuffer[W],P,!1);else{let K=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=w.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,X)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),gt(w.__webglDepthbuffer,P,!1);else{let W=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,K)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function qt(P,w,Q){let W=i.get(P);w!==void 0&&Jt(W.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Q!==void 0&&ae(P)}function le(P){let w=P.texture,Q=i.get(P),W=i.get(w);P.addEventListener("dispose",L);let K=P.textures,X=P.isWebGLCubeRenderTarget===!0,xt=K.length>1;if(xt||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=w.version,o.memory.textures++),X){Q.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer[ft]=[];for(let pt=0;pt<w.mipmaps.length;pt++)Q.__webglFramebuffer[ft][pt]=n.createFramebuffer()}else Q.__webglFramebuffer[ft]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ft=0;ft<w.mipmaps.length;ft++)Q.__webglFramebuffer[ft]=n.createFramebuffer()}else Q.__webglFramebuffer=n.createFramebuffer();if(xt)for(let ft=0,pt=K.length;ft<pt;ft++){let Mt=i.get(K[ft]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&Ft(P)===!1){Q.__webglMultisampledFramebuffer=n.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ft=0;ft<K.length;ft++){let pt=K[ft];Q.__webglColorRenderbuffer[ft]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Q.__webglColorRenderbuffer[ft]);let Mt=r.convert(pt.format,pt.colorSpace),et=r.convert(pt.type),Dt=b(pt.internalFormat,Mt,et,pt.colorSpace,P.isXRRenderTarget===!0),Ct=St(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct,Dt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,Q.__webglColorRenderbuffer[ft])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(Q.__webglDepthRenderbuffer=n.createRenderbuffer(),gt(Q.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),oe(n.TEXTURE_CUBE_MAP,w);for(let ft=0;ft<6;ft++)if(w.mipmaps&&w.mipmaps.length>0)for(let pt=0;pt<w.mipmaps.length;pt++)Jt(Q.__webglFramebuffer[ft][pt],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,pt);else Jt(Q.__webglFramebuffer[ft],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);x(w)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let ft=0,pt=K.length;ft<pt;ft++){let Mt=K[ft],et=i.get(Mt);e.bindTexture(n.TEXTURE_2D,et.__webglTexture),oe(n.TEXTURE_2D,Mt),Jt(Q.__webglFramebuffer,P,Mt,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,0),x(Mt)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let ft=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ft=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ft,W.__webglTexture),oe(ft,w),w.mipmaps&&w.mipmaps.length>0)for(let pt=0;pt<w.mipmaps.length;pt++)Jt(Q.__webglFramebuffer[pt],P,w,n.COLOR_ATTACHMENT0,ft,pt);else Jt(Q.__webglFramebuffer,P,w,n.COLOR_ATTACHMENT0,ft,0);x(w)&&m(ft),e.unbindTexture()}P.depthBuffer&&ae(P)}function dt(P){let w=P.textures;for(let Q=0,W=w.length;Q<W;Q++){let K=w[Q];if(x(K)){let X=T(P),xt=i.get(K).__webglTexture;e.bindTexture(X,xt),m(X),e.unbindTexture()}}}let wt=[],N=[];function Yt(P){if(P.samples>0){if(Ft(P)===!1){let w=P.textures,Q=P.width,W=P.height,K=n.COLOR_BUFFER_BIT,X=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=i.get(P),ft=w.length>1;if(ft)for(let pt=0;pt<w.length;pt++)e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let pt=0;pt<w.length;pt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),ft){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xt.__webglColorRenderbuffer[pt]);let Mt=i.get(w[pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Mt,0)}n.blitFramebuffer(0,0,Q,W,0,0,Q,W,K,n.NEAREST),c===!0&&(wt.length=0,N.length=0,wt.push(n.COLOR_ATTACHMENT0+pt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(wt.push(X),N.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,wt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ft)for(let pt=0;pt<w.length;pt++){e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,xt.__webglColorRenderbuffer[pt]);let Mt=i.get(w[pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,Mt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let w=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function St(P){return Math.min(s.maxSamples,P.samples)}function Ft(P){let w=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Lt(P){let w=o.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function te(P,w){let Q=P.colorSpace,W=P.format,K=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Q!==Tr&&Q!==Qi&&(be.getTransfer(Q)===Le?(W!==ri||K!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),w}function Vt(P){return typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame!="undefined"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=tt,this.setTexture2D=Z,this.setTexture2DArray=q,this.setTexture3D=mt,this.setTextureCube=j,this.rebindTextures=qt,this.setupRenderTarget=le,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=Jt,this.useMultisampledRTT=Ft}function F_(n,t){function e(i,s=Qi){let r,o=be.getTransfer(s);if(i===zi)return n.UNSIGNED_BYTE;if(i===vh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Eh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Nf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Df)return n.BYTE;if(i===Uf)return n.SHORT;if(i===oo)return n.UNSIGNED_SHORT;if(i===Mh)return n.INT;if(i===ws)return n.UNSIGNED_INT;if(i===Oi)return n.FLOAT;if(i===Po)return n.HALF_FLOAT;if(i===Of)return n.ALPHA;if(i===Ff)return n.RGB;if(i===ri)return n.RGBA;if(i===Bf)return n.LUMINANCE;if(i===zf)return n.LUMINANCE_ALPHA;if(i===pr)return n.DEPTH_COMPONENT;if(i===vr)return n.DEPTH_STENCIL;if(i===Hf)return n.RED;if(i===bh)return n.RED_INTEGER;if(i===kf)return n.RG;if(i===Sh)return n.RG_INTEGER;if(i===wh)return n.RGBA_INTEGER;if(i===pa||i===ma||i===ga||i===xa)if(o===Le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===pa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===pa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ma)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ga)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rl||i===ol||i===al||i===cl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===rl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ll||i===hl||i===ul)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ll||i===hl)return o===Le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ul)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fl||i===dl||i===pl||i===ml||i===gl||i===xl||i===_l||i===yl||i===Ml||i===vl||i===El||i===bl||i===Sl||i===wl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===fl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ml)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_l)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ml)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===El)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_a||i===Tl||i===Al)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===_a)return o===Le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Tl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vf||i===Rl||i===Cl||i===Pl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===_a)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Rl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Cl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Mr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Yl=class extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},$t=class extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},B_={type:"move"},eo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let M of t.hand.values()){let x=e.getJointPose(M,i),m=this._getHandJoint(l,M);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(B_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new $t;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},z_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H_=`
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

}`,ql=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new Mn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Kn({vertexShader:z_,fragmentShader:H_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Rt(new ss(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zl=class extends Hi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,M=new ql,x=e.getContextAttributes(),m=null,T=null,b=[],E=[],V=new vt,I=null,L=new cn;L.viewport=new De;let O=new cn;O.viewport=new De;let A=[L,O],S=new Yl,B=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ht){let Tt=b[ht];return Tt===void 0&&(Tt=new eo,b[ht]=Tt),Tt.getTargetRaySpace()},this.getControllerGrip=function(ht){let Tt=b[ht];return Tt===void 0&&(Tt=new eo,b[ht]=Tt),Tt.getGripSpace()},this.getHand=function(ht){let Tt=b[ht];return Tt===void 0&&(Tt=new eo,b[ht]=Tt),Tt.getHandSpace()};function F(ht){let Tt=E.indexOf(ht.inputSource);if(Tt===-1)return;let Jt=b[Tt];Jt!==void 0&&(Jt.update(ht.inputSource,ht.frame,l||o),Jt.dispatchEvent({type:ht.type,data:ht.inputSource}))}function G(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Z);for(let ht=0;ht<b.length;ht++){let Tt=E[ht];Tt!==null&&(E[ht]=null,b[ht].disconnect(Tt))}B=null,tt=null,M.reset(),t.setRenderTarget(m),d=null,f=null,u=null,s=null,T=null,Me.stop(),i.isPresenting=!1,t.setPixelRatio(I),t.setSize(V.width,V.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ht){r=ht,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ht){a=ht,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ht){l=ht},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ht){if(s=ht,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Z),x.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(V),s.renderState.layers===void 0){let Tt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Tt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new ki(d.framebufferWidth,d.framebufferHeight,{format:ri,type:zi,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let Tt=null,Jt=null,gt=null;x.depth&&(gt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=x.stencil?vr:pr,Jt=x.stencil?Mr:ws);let jt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(jt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),T=new ki(f.textureWidth,f.textureHeight,{format:ri,type:zi,depthTexture:new Ca(f.textureWidth,f.textureHeight,Jt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Me.setContext(s),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Z(ht){for(let Tt=0;Tt<ht.removed.length;Tt++){let Jt=ht.removed[Tt],gt=E.indexOf(Jt);gt>=0&&(E[gt]=null,b[gt].disconnect(Jt))}for(let Tt=0;Tt<ht.added.length;Tt++){let Jt=ht.added[Tt],gt=E.indexOf(Jt);if(gt===-1){for(let ae=0;ae<b.length;ae++)if(ae>=E.length){E.push(Jt),gt=ae;break}else if(E[ae]===null){E[ae]=Jt,gt=ae;break}if(gt===-1)break}let jt=b[gt];jt&&jt.connect(Jt)}}let q=new U,mt=new U;function j(ht,Tt,Jt){q.setFromMatrixPosition(Tt.matrixWorld),mt.setFromMatrixPosition(Jt.matrixWorld);let gt=q.distanceTo(mt),jt=Tt.projectionMatrix.elements,ae=Jt.projectionMatrix.elements,qt=jt[14]/(jt[10]-1),le=jt[14]/(jt[10]+1),dt=(jt[9]+1)/jt[5],wt=(jt[9]-1)/jt[5],N=(jt[8]-1)/jt[0],Yt=(ae[8]+1)/ae[0],St=qt*N,Ft=qt*Yt,Lt=gt/(-N+Yt),te=Lt*-N;if(Tt.matrixWorld.decompose(ht.position,ht.quaternion,ht.scale),ht.translateX(te),ht.translateZ(Lt),ht.matrixWorld.compose(ht.position,ht.quaternion,ht.scale),ht.matrixWorldInverse.copy(ht.matrixWorld).invert(),jt[10]===-1)ht.projectionMatrix.copy(Tt.projectionMatrix),ht.projectionMatrixInverse.copy(Tt.projectionMatrixInverse);else{let Vt=qt+Lt,P=le+Lt,w=St-te,Q=Ft+(gt-te),W=dt*le/P*Vt,K=wt*le/P*Vt;ht.projectionMatrix.makePerspective(w,Q,W,K,Vt,P),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert()}}function yt(ht,Tt){Tt===null?ht.matrixWorld.copy(ht.matrix):ht.matrixWorld.multiplyMatrices(Tt.matrixWorld,ht.matrix),ht.matrixWorldInverse.copy(ht.matrixWorld).invert()}this.updateCamera=function(ht){if(s===null)return;let Tt=ht.near,Jt=ht.far;M.texture!==null&&(M.depthNear>0&&(Tt=M.depthNear),M.depthFar>0&&(Jt=M.depthFar)),S.near=O.near=L.near=Tt,S.far=O.far=L.far=Jt,(B!==S.near||tt!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),B=S.near,tt=S.far),L.layers.mask=ht.layers.mask|2,O.layers.mask=ht.layers.mask|4,S.layers.mask=L.layers.mask|O.layers.mask;let gt=ht.parent,jt=S.cameras;yt(S,gt);for(let ae=0;ae<jt.length;ae++)yt(jt[ae],gt);jt.length===2?j(S,L,O):S.projectionMatrix.copy(L.projectionMatrix),rt(ht,S,gt)};function rt(ht,Tt,Jt){Jt===null?ht.matrix.copy(Tt.matrixWorld):(ht.matrix.copy(Jt.matrixWorld),ht.matrix.invert(),ht.matrix.multiply(Tt.matrixWorld)),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.updateMatrixWorld(!0),ht.projectionMatrix.copy(Tt.projectionMatrix),ht.projectionMatrixInverse.copy(Tt.projectionMatrixInverse),ht.isPerspectiveCamera&&(ht.fov=ao*2*Math.atan(1/ht.projectionMatrix.elements[5]),ht.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(ht){c=ht,f!==null&&(f.fixedFoveation=ht),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ht)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(S)};let Xt=null;function oe(ht,Tt){if(h=Tt.getViewerPose(l||o),g=Tt,h!==null){let Jt=h.views;d!==null&&(t.setRenderTargetFramebuffer(T,d.framebuffer),t.setRenderTarget(T));let gt=!1;Jt.length!==S.cameras.length&&(S.cameras.length=0,gt=!0);for(let ae=0;ae<Jt.length;ae++){let qt=Jt[ae],le=null;if(d!==null)le=d.getViewport(qt);else{let wt=u.getViewSubImage(f,qt);le=wt.viewport,ae===0&&(t.setRenderTargetTextures(T,wt.colorTexture,f.ignoreDepthValues?void 0:wt.depthStencilTexture),t.setRenderTarget(T))}let dt=A[ae];dt===void 0&&(dt=new cn,dt.layers.enable(ae),dt.viewport=new De,A[ae]=dt),dt.matrix.fromArray(qt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(qt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(le.x,le.y,le.width,le.height),ae===0&&(S.matrix.copy(dt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),gt===!0&&S.cameras.push(dt)}let jt=s.enabledFeatures;if(jt&&jt.includes("depth-sensing")){let ae=u.getDepthInformation(Jt[0]);ae&&ae.isValid&&ae.texture&&M.init(t,ae,s.renderState)}}for(let Jt=0;Jt<b.length;Jt++){let gt=E[Jt],jt=b[Jt];gt!==null&&jt!==void 0&&jt.update(gt,Tt,l||o)}Xt&&Xt(ht,Tt),Tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Tt}),g=null}let Me=new Kf;Me.setAnimationLoop(oe),this.setAnimationLoop=function(ht){Xt=ht},this.dispose=function(){}}},ys=new _i,k_=new ze;function V_(n,t){function e(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function i(x,m){m.color.getRGB(x.fogColor.value,Zf(n)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function s(x,m,T,b,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(x,m):m.isMeshToonMaterial?(r(x,m),u(x,m)):m.isMeshPhongMaterial?(r(x,m),h(x,m)):m.isMeshStandardMaterial?(r(x,m),f(x,m),m.isMeshPhysicalMaterial&&d(x,m,E)):m.isMeshMatcapMaterial?(r(x,m),g(x,m)):m.isMeshDepthMaterial?r(x,m):m.isMeshDistanceMaterial?(r(x,m),M(x,m)):m.isMeshNormalMaterial?r(x,m):m.isLineBasicMaterial?(o(x,m),m.isLineDashedMaterial&&a(x,m)):m.isPointsMaterial?c(x,m,T,b):m.isSpriteMaterial?l(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,e(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===yn&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,e(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===yn&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,e(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,e(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);let T=t.get(m),b=T.envMap,E=T.envMapRotation;b&&(x.envMap.value=b,ys.copy(E),ys.x*=-1,ys.y*=-1,ys.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),x.envMapRotation.value.setFromMatrix4(k_.makeRotationFromEuler(ys)),x.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,x.aoMapTransform))}function o(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform))}function a(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function c(x,m,T,b){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*T,x.scale.value=b*.5,m.map&&(x.map.value=m.map,e(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function l(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function h(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function u(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function f(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function d(x,m,T){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===yn&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=T.texture,x.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,m){m.matcap&&(x.matcap.value=m.matcap)}function M(x,m){let T=t.get(m).light;x.referencePosition.value.setFromMatrixPosition(T.matrixWorld),x.nearDistance.value=T.shadow.camera.near,x.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function G_(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,b){let E=b.program;i.uniformBlockBinding(T,E)}function l(T,b){let E=s[T.id];E===void 0&&(g(T),E=h(T),s[T.id]=E,T.addEventListener("dispose",x));let V=b.program;i.updateUBOMapping(T,V);let I=t.render.frame;r[T.id]!==I&&(f(T),r[T.id]=I)}function h(T){let b=u();T.__bindingPointIndex=b;let E=n.createBuffer(),V=T.__size,I=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,V,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){let b=s[T.id],E=T.uniforms,V=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let I=0,L=E.length;I<L;I++){let O=Array.isArray(E[I])?E[I]:[E[I]];for(let A=0,S=O.length;A<S;A++){let B=O[A];if(d(B,I,A,V)===!0){let tt=B.__offset,F=Array.isArray(B.value)?B.value:[B.value],G=0;for(let Z=0;Z<F.length;Z++){let q=F[Z],mt=M(q);typeof q=="number"||typeof q=="boolean"?(B.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,tt+G,B.__data)):q.isMatrix3?(B.__data[0]=q.elements[0],B.__data[1]=q.elements[1],B.__data[2]=q.elements[2],B.__data[3]=0,B.__data[4]=q.elements[3],B.__data[5]=q.elements[4],B.__data[6]=q.elements[5],B.__data[7]=0,B.__data[8]=q.elements[6],B.__data[9]=q.elements[7],B.__data[10]=q.elements[8],B.__data[11]=0):(q.toArray(B.__data,G),G+=mt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,tt,B.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(T,b,E,V){let I=T.value,L=b+"_"+E;if(V[L]===void 0)return typeof I=="number"||typeof I=="boolean"?V[L]=I:V[L]=I.clone(),!0;{let O=V[L];if(typeof I=="number"||typeof I=="boolean"){if(O!==I)return V[L]=I,!0}else if(O.equals(I)===!1)return O.copy(I),!0}return!1}function g(T){let b=T.uniforms,E=0,V=16;for(let L=0,O=b.length;L<O;L++){let A=Array.isArray(b[L])?b[L]:[b[L]];for(let S=0,B=A.length;S<B;S++){let tt=A[S],F=Array.isArray(tt.value)?tt.value:[tt.value];for(let G=0,Z=F.length;G<Z;G++){let q=F[G],mt=M(q),j=E%V,yt=j%mt.boundary,rt=j+yt;E+=yt,rt!==0&&V-rt<mt.storage&&(E+=V-rt),tt.__data=new Float32Array(mt.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=E,E+=mt.storage}}}let I=E%V;return I>0&&(E+=V-I),T.__size=E,T.__cache={},this}function M(T){let b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function x(T){let b=T.target;b.removeEventListener("dispose",x);let E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(let T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}var uo=class{constructor(t={}){let{canvas:e=qp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),M=new Int32Array(4),x=null,m=null,T=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ce,this.toneMapping=ns,this.toneMappingExposure=1;let E=this,V=!1,I=0,L=0,O=null,A=-1,S=null,B=new De,tt=new De,F=null,G=new re(0),Z=0,q=e.width,mt=e.height,j=1,yt=null,rt=null,Xt=new De(0,0,q,mt),oe=new De(0,0,q,mt),Me=!1,ht=new ho,Tt=!1,Jt=!1,gt=new ze,jt=new ze,ae=new U,qt=new De,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},dt=!1;function wt(){return O===null?j:1}let N=i;function Yt(R,J){return e.getContext(R,J)}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_h}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",Gt,!1),e.addEventListener("webglcontextcreationerror",Bt,!1),N===null){let J="webgl2";if(N=Yt(J,R),N===null)throw Yt(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let St,Ft,Lt,te,Vt,P,w,Q,W,K,X,xt,ft,pt,Mt,et,Dt,Ct,Et,Ot,Zt,Kt,ve,Y;function Ut(){St=new rx(N),St.init(),Kt=new F_(N,St),Ft=new Qg(N,St,t,Kt),Lt=new U_(N,St),Ft.reverseDepthBuffer&&f&&Lt.buffers.depth.setReversed(!0),te=new cx(N),Vt=new v_,P=new O_(N,St,Lt,Vt,Ft,Kt,te),w=new ex(E),Q=new sx(E),W=new m0(N),ve=new $g(N,W),K=new ox(N,W,te,ve),X=new hx(N,K,W,te),Et=new lx(N,Ft,P),et=new tx(Vt),xt=new M_(E,w,Q,St,Ft,ve,et),ft=new V_(E,Vt),pt=new b_,Mt=new C_(St),Ct=new Jg(E,w,Q,Lt,X,d,c),Dt=new L_(E,X,Ft),Y=new G_(N,te,Ft,Lt),Ot=new jg(N,St,te),Zt=new ax(N,St,te),te.programs=xt.programs,E.capabilities=Ft,E.extensions=St,E.properties=Vt,E.renderLists=pt,E.shadowMap=Dt,E.state=Lt,E.info=te}Ut();let at=new Zl(E,N);this.xr=at,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let R=St.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=St.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(q,mt,!1))},this.getSize=function(R){return R.set(q,mt)},this.setSize=function(R,J,nt=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=R,mt=J,e.width=Math.floor(R*j),e.height=Math.floor(J*j),nt===!0&&(e.style.width=R+"px",e.style.height=J+"px"),this.setViewport(0,0,R,J)},this.getDrawingBufferSize=function(R){return R.set(q*j,mt*j).floor()},this.setDrawingBufferSize=function(R,J,nt){q=R,mt=J,j=nt,e.width=Math.floor(R*nt),e.height=Math.floor(J*nt),this.setViewport(0,0,R,J)},this.getCurrentViewport=function(R){return R.copy(B)},this.getViewport=function(R){return R.copy(Xt)},this.setViewport=function(R,J,nt,it){R.isVector4?Xt.set(R.x,R.y,R.z,R.w):Xt.set(R,J,nt,it),Lt.viewport(B.copy(Xt).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(oe)},this.setScissor=function(R,J,nt,it){R.isVector4?oe.set(R.x,R.y,R.z,R.w):oe.set(R,J,nt,it),Lt.scissor(tt.copy(oe).multiplyScalar(j).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(R){Lt.setScissorTest(Me=R)},this.setOpaqueSort=function(R){yt=R},this.setTransparentSort=function(R){rt=R},this.getClearColor=function(R){return R.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(R=!0,J=!0,nt=!0){let it=0;if(R){let $=!1;if(O!==null){let Pt=O.texture.format;$=Pt===wh||Pt===Sh||Pt===bh}if($){let Pt=O.texture.type,Ht=Pt===zi||Pt===ws||Pt===oo||Pt===Mr||Pt===vh||Pt===Eh,ee=Ct.getClearColor(),ne=Ct.getClearAlpha(),ue=ee.r,pe=ee.g,ie=ee.b;Ht?(g[0]=ue,g[1]=pe,g[2]=ie,g[3]=ne,N.clearBufferuiv(N.COLOR,0,g)):(M[0]=ue,M[1]=pe,M[2]=ie,M[3]=ne,N.clearBufferiv(N.COLOR,0,M))}else it|=N.COLOR_BUFFER_BIT}J&&(it|=N.DEPTH_BUFFER_BIT),nt&&(it|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",Bt,!1),pt.dispose(),Mt.dispose(),Vt.dispose(),w.dispose(),Q.dispose(),X.dispose(),ve.dispose(),Y.dispose(),xt.dispose(),at.dispose(),at.removeEventListener("sessionstart",Ur),at.removeEventListener("sessionend",pn),ui.stop()};function _t(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Gt(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;let R=te.autoReset,J=Dt.enabled,nt=Dt.autoUpdate,it=Dt.needsUpdate,$=Dt.type;Ut(),te.autoReset=R,Dt.enabled=J,Dt.autoUpdate=nt,Dt.needsUpdate=it,Dt.type=$}function Bt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function he(R){let J=R.target;J.removeEventListener("dispose",he),Fe(J)}function Fe(R){ke(R),Vt.remove(R)}function ke(R){let J=Vt.get(R).programs;J!==void 0&&(J.forEach(function(nt){xt.releaseProgram(nt)}),R.isShaderMaterial&&xt.releaseShaderCache(R))}this.renderBufferDirect=function(R,J,nt,it,$,Pt){J===null&&(J=le);let Ht=$.isMesh&&$.matrixWorld.determinant()<0,ee=Or(R,J,nt,it,$);Lt.setMaterial(it,Ht);let ne=nt.index,ue=1;if(it.wireframe===!0){if(ne=K.getWireframeAttribute(nt),ne===void 0)return;ue=2}let pe=nt.drawRange,ie=nt.attributes.position,_e=pe.start*ue,Ee=(pe.start+pe.count)*ue;Pt!==null&&(_e=Math.max(_e,Pt.start*ue),Ee=Math.min(Ee,(Pt.start+Pt.count)*ue)),ne!==null?(_e=Math.max(_e,0),Ee=Math.min(Ee,ne.count)):ie!=null&&(_e=Math.max(_e,0),Ee=Math.min(Ee,ie.count));let Ae=Ee-_e;if(Ae<0||Ae===1/0)return;ve.setup($,it,ee,nt,ne);let en,Se=Ot;if(ne!==null&&(en=W.get(ne),Se=Zt,Se.setIndex(en)),$.isMesh)it.wireframe===!0?(Lt.setLineWidth(it.wireframeLinewidth*wt()),Se.setMode(N.LINES)):Se.setMode(N.TRIANGLES);else if($.isLine){let Nt=it.linewidth;Nt===void 0&&(Nt=1),Lt.setLineWidth(Nt*wt()),$.isLineSegments?Se.setMode(N.LINES):$.isLineLoop?Se.setMode(N.LINE_LOOP):Se.setMode(N.LINE_STRIP)}else $.isPoints?Se.setMode(N.POINTS):$.isSprite&&Se.setMode(N.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Se.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(St.get("WEBGL_multi_draw"))Se.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Nt=$._multiDrawStarts,Dn=$._multiDrawCounts,we=$._multiDrawCount,kn=ne?W.get(ne).bytesPerElement:1,wi=Vt.get(it).currentProgram.getUniforms();for(let je=0;je<we;je++)wi.setValue(N,"_gl_DrawID",je),Se.render(Nt[je]/kn,Dn[je])}else if($.isInstancedMesh)Se.renderInstances(_e,Ae,$.count);else if(nt.isInstancedBufferGeometry){let Nt=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,Dn=Math.min(nt.instanceCount,Nt);Se.renderInstances(_e,Ae,Dn)}else Se.render(_e,Ae)};function Te(R,J,nt){R.transparent===!0&&R.side===_n&&R.forceSinglePass===!1?(R.side=yn,R.needsUpdate=!0,Si(R,J,nt),R.side=is,R.needsUpdate=!0,Si(R,J,nt),R.side=_n):Si(R,J,nt)}this.compile=function(R,J,nt=null){nt===null&&(nt=R),m=Mt.get(nt),m.init(J),b.push(m),nt.traverseVisible(function($){$.isLight&&$.layers.test(J.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),R!==nt&&R.traverseVisible(function($){$.isLight&&$.layers.test(J.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights();let it=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Pt=$.material;if(Pt)if(Array.isArray(Pt))for(let Ht=0;Ht<Pt.length;Ht++){let ee=Pt[Ht];Te(ee,nt,$),it.add(ee)}else Te(Pt,nt,$),it.add(Pt)}),b.pop(),m=null,it},this.compileAsync=function(R,J,nt=null){let it=this.compile(R,J,nt);return new Promise($=>{function Pt(){if(it.forEach(function(Ht){Vt.get(Ht).currentProgram.isReady()&&it.delete(Ht)}),it.size===0){$(R);return}setTimeout(Pt,10)}St.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let Hn=null;function Ln(R){Hn&&Hn(R)}function Ur(){ui.stop()}function pn(){ui.start()}let ui=new Kf;ui.setAnimationLoop(Ln),typeof self!="undefined"&&ui.setContext(self),this.setAnimationLoop=function(R){Hn=R,at.setAnimationLoop(R),R===null?ui.stop():ui.start()},at.addEventListener("sessionstart",Ur),at.addEventListener("sessionend",pn),this.render=function(R,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(J),J=at.getCamera()),R.isScene===!0&&R.onBeforeRender(E,R,J,O),m=Mt.get(R,b.length),m.init(J),b.push(m),jt.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),ht.setFromProjectionMatrix(jt),Jt=this.localClippingEnabled,Tt=et.init(this.clippingPlanes,Jt),x=pt.get(R,T.length),x.init(),T.push(x),at.enabled===!0&&at.isPresenting===!0){let Pt=E.xr.getDepthSensingMesh();Pt!==null&&ks(Pt,J,-1/0,E.sortObjects)}ks(R,J,0,E.sortObjects),x.finish(),E.sortObjects===!0&&x.sort(yt,rt),dt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,dt&&Ct.addToRenderList(x,R),this.info.render.frame++,Tt===!0&&et.beginShadows();let nt=m.state.shadowsArray;Dt.render(nt,R,J),Tt===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();let it=x.opaque,$=x.transmissive;if(m.setupLights(),J.isArrayCamera){let Pt=J.cameras;if($.length>0)for(let Ht=0,ee=Pt.length;Ht<ee;Ht++){let ne=Pt[Ht];Vs(it,$,R,ne)}dt&&Ct.render(R);for(let Ht=0,ee=Pt.length;Ht<ee;Ht++){let ne=Pt[Ht];Nr(x,R,ne,ne.viewport)}}else $.length>0&&Vs(it,$,R,J),dt&&Ct.render(R),Nr(x,R,J);O!==null&&(P.updateMultisampleRenderTarget(O),P.updateRenderTargetMipmap(O)),R.isScene===!0&&R.onAfterRender(E,R,J),ve.resetDefaultState(),A=-1,S=null,b.pop(),b.length>0?(m=b[b.length-1],Tt===!0&&et.setGlobalState(E.clippingPlanes,m.state.camera)):m=null,T.pop(),T.length>0?x=T[T.length-1]:x=null};function ks(R,J,nt,it){if(R.visible===!1)return;if(R.layers.test(J.layers)){if(R.isGroup)nt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(J);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ht.intersectsSprite(R)){it&&qt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(jt);let Ht=X.update(R),ee=R.material;ee.visible&&x.push(R,Ht,ee,nt,qt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ht.intersectsObject(R))){let Ht=X.update(R),ee=R.material;if(it&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),qt.copy(R.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),qt.copy(Ht.boundingSphere.center)),qt.applyMatrix4(R.matrixWorld).applyMatrix4(jt)),Array.isArray(ee)){let ne=Ht.groups;for(let ue=0,pe=ne.length;ue<pe;ue++){let ie=ne[ue],_e=ee[ie.materialIndex];_e&&_e.visible&&x.push(R,Ht,_e,nt,qt.z,ie)}}else ee.visible&&x.push(R,Ht,ee,nt,qt.z,null)}}let Pt=R.children;for(let Ht=0,ee=Pt.length;Ht<ee;Ht++)ks(Pt[Ht],J,nt,it)}function Nr(R,J,nt,it){let $=R.opaque,Pt=R.transmissive,Ht=R.transparent;m.setupLightsView(nt),Tt===!0&&et.setGlobalState(E.clippingPlanes,nt),it&&Lt.viewport(B.copy(it)),$.length>0&&Yn($,J,nt),Pt.length>0&&Yn(Pt,J,nt),Ht.length>0&&Yn(Ht,J,nt),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function Vs(R,J,nt,it){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[it.id]===void 0&&(m.state.transmissionRenderTarget[it.id]=new ki(1,1,{generateMipmaps:!0,type:St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float")?Po:zi,minFilter:Ss,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));let Pt=m.state.transmissionRenderTarget[it.id],Ht=it.viewport||B;Pt.setSize(Ht.z,Ht.w);let ee=E.getRenderTarget();E.setRenderTarget(Pt),E.getClearColor(G),Z=E.getClearAlpha(),Z<1&&E.setClearColor(16777215,.5),E.clear(),dt&&Ct.render(nt);let ne=E.toneMapping;E.toneMapping=ns;let ue=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),m.setupLightsView(it),Tt===!0&&et.setGlobalState(E.clippingPlanes,it),Yn(R,nt,it),P.updateMultisampleRenderTarget(Pt),P.updateRenderTargetMipmap(Pt),St.has("WEBGL_multisampled_render_to_texture")===!1){let pe=!1;for(let ie=0,_e=J.length;ie<_e;ie++){let Ee=J[ie],Ae=Ee.object,en=Ee.geometry,Se=Ee.material,Nt=Ee.group;if(Se.side===_n&&Ae.layers.test(it.layers)){let Dn=Se.side;Se.side=yn,Se.needsUpdate=!0,Yi(Ae,nt,it,en,Se,Nt),Se.side=Dn,Se.needsUpdate=!0,pe=!0}}pe===!0&&(P.updateMultisampleRenderTarget(Pt),P.updateRenderTargetMipmap(Pt))}E.setRenderTarget(ee),E.setClearColor(G,Z),ue!==void 0&&(it.viewport=ue),E.toneMapping=ne}function Yn(R,J,nt){let it=J.isScene===!0?J.overrideMaterial:null;for(let $=0,Pt=R.length;$<Pt;$++){let Ht=R[$],ee=Ht.object,ne=Ht.geometry,ue=it===null?Ht.material:it,pe=Ht.group;ee.layers.test(nt.layers)&&Yi(ee,J,nt,ne,ue,pe)}}function Yi(R,J,nt,it,$,Pt){R.onBeforeRender(E,J,nt,it,$,Pt),R.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(E,J,nt,it,R,Pt),$.transparent===!0&&$.side===_n&&$.forceSinglePass===!1?($.side=yn,$.needsUpdate=!0,E.renderBufferDirect(nt,J,it,$,R,Pt),$.side=is,$.needsUpdate=!0,E.renderBufferDirect(nt,J,it,$,R,Pt),$.side=_n):E.renderBufferDirect(nt,J,it,$,R,Pt),R.onAfterRender(E,J,nt,it,$,Pt)}function Si(R,J,nt){J.isScene!==!0&&(J=le);let it=Vt.get(R),$=m.state.lights,Pt=m.state.shadowsArray,Ht=$.state.version,ee=xt.getParameters(R,$.state,Pt,J,nt),ne=xt.getProgramCacheKey(ee),ue=it.programs;it.environment=R.isMeshStandardMaterial?J.environment:null,it.fog=J.fog,it.envMap=(R.isMeshStandardMaterial?Q:w).get(R.envMap||it.environment),it.envMapRotation=it.environment!==null&&R.envMap===null?J.environmentRotation:R.envMapRotation,ue===void 0&&(R.addEventListener("dispose",he),ue=new Map,it.programs=ue);let pe=ue.get(ne);if(pe!==void 0){if(it.currentProgram===pe&&it.lightsStateVersion===Ht)return Sn(R,ee),pe}else ee.uniforms=xt.getUniforms(R),R.onBeforeCompile(ee,E),pe=xt.acquireProgram(ee,ne),ue.set(ne,pe),it.uniforms=ee.uniforms;let ie=it.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ie.clippingPlanes=et.uniform),Sn(R,ee),it.needsLights=fs(R),it.lightsStateVersion=Ht,it.needsLights&&(ie.ambientLightColor.value=$.state.ambient,ie.lightProbe.value=$.state.probe,ie.directionalLights.value=$.state.directional,ie.directionalLightShadows.value=$.state.directionalShadow,ie.spotLights.value=$.state.spot,ie.spotLightShadows.value=$.state.spotShadow,ie.rectAreaLights.value=$.state.rectArea,ie.ltc_1.value=$.state.rectAreaLTC1,ie.ltc_2.value=$.state.rectAreaLTC2,ie.pointLights.value=$.state.point,ie.pointLightShadows.value=$.state.pointShadow,ie.hemisphereLights.value=$.state.hemi,ie.directionalShadowMap.value=$.state.directionalShadowMap,ie.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ie.spotShadowMap.value=$.state.spotShadowMap,ie.spotLightMatrix.value=$.state.spotLightMatrix,ie.spotLightMap.value=$.state.spotLightMap,ie.pointShadowMap.value=$.state.pointShadowMap,ie.pointShadowMatrix.value=$.state.pointShadowMatrix),it.currentProgram=pe,it.uniformsList=null,pe}function us(R){if(R.uniformsList===null){let J=R.currentProgram.getUniforms();R.uniformsList=gr.seqWithValue(J.seq,R.uniforms)}return R.uniformsList}function Sn(R,J){let nt=Vt.get(R);nt.outputColorSpace=J.outputColorSpace,nt.batching=J.batching,nt.batchingColor=J.batchingColor,nt.instancing=J.instancing,nt.instancingColor=J.instancingColor,nt.instancingMorph=J.instancingMorph,nt.skinning=J.skinning,nt.morphTargets=J.morphTargets,nt.morphNormals=J.morphNormals,nt.morphColors=J.morphColors,nt.morphTargetsCount=J.morphTargetsCount,nt.numClippingPlanes=J.numClippingPlanes,nt.numIntersection=J.numClipIntersection,nt.vertexAlphas=J.vertexAlphas,nt.vertexTangents=J.vertexTangents,nt.toneMapping=J.toneMapping}function Or(R,J,nt,it,$){J.isScene!==!0&&(J=le),P.resetTextureUnits();let Pt=J.fog,Ht=it.isMeshStandardMaterial?J.environment:null,ee=O===null?E.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Tr,ne=(it.isMeshStandardMaterial?Q:w).get(it.envMap||Ht),ue=it.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pe=!!nt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),ie=!!nt.morphAttributes.position,_e=!!nt.morphAttributes.normal,Ee=!!nt.morphAttributes.color,Ae=ns;it.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ae=E.toneMapping);let en=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,Se=en!==void 0?en.length:0,Nt=Vt.get(it),Dn=m.state.lights;if(Tt===!0&&(Jt===!0||R!==S)){let Nn=R===S&&it.id===A;et.setState(it,R,Nn)}let we=!1;it.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Dn.state.version||Nt.outputColorSpace!==ee||$.isBatchedMesh&&Nt.batching===!1||!$.isBatchedMesh&&Nt.batching===!0||$.isBatchedMesh&&Nt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Nt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Nt.instancing===!1||!$.isInstancedMesh&&Nt.instancing===!0||$.isSkinnedMesh&&Nt.skinning===!1||!$.isSkinnedMesh&&Nt.skinning===!0||$.isInstancedMesh&&Nt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Nt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Nt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Nt.instancingMorph===!1&&$.morphTexture!==null||Nt.envMap!==ne||it.fog===!0&&Nt.fog!==Pt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==et.numPlanes||Nt.numIntersection!==et.numIntersection)||Nt.vertexAlphas!==ue||Nt.vertexTangents!==pe||Nt.morphTargets!==ie||Nt.morphNormals!==_e||Nt.morphColors!==Ee||Nt.toneMapping!==Ae||Nt.morphTargetsCount!==Se)&&(we=!0):(we=!0,Nt.__version=it.version);let kn=Nt.currentProgram;we===!0&&(kn=Si(it,J,$));let wi=!1,je=!1,Un=!1,Ie=kn.getUniforms(),mn=Nt.uniforms;if(Lt.useProgram(kn.program)&&(wi=!0,je=!0,Un=!0),it.id!==A&&(A=it.id,je=!0),wi||S!==R){Lt.buffers.depth.getReversed()?(gt.copy(R.projectionMatrix),Kp(gt),Jp(gt),Ie.setValue(N,"projectionMatrix",gt)):Ie.setValue(N,"projectionMatrix",R.projectionMatrix),Ie.setValue(N,"viewMatrix",R.matrixWorldInverse);let di=Ie.map.cameraPosition;di!==void 0&&di.setValue(N,ae.setFromMatrixPosition(R.matrixWorld)),Ft.logarithmicDepthBuffer&&Ie.setValue(N,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Ie.setValue(N,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,je=!0,Un=!0)}if($.isSkinnedMesh){Ie.setOptional(N,$,"bindMatrix"),Ie.setOptional(N,$,"bindMatrixInverse");let Nn=$.skeleton;Nn&&(Nn.boneTexture===null&&Nn.computeBoneTexture(),Ie.setValue(N,"boneTexture",Nn.boneTexture,P))}$.isBatchedMesh&&(Ie.setOptional(N,$,"batchingTexture"),Ie.setValue(N,"batchingTexture",$._matricesTexture,P),Ie.setOptional(N,$,"batchingIdTexture"),Ie.setValue(N,"batchingIdTexture",$._indirectTexture,P),Ie.setOptional(N,$,"batchingColorTexture"),$._colorsTexture!==null&&Ie.setValue(N,"batchingColorTexture",$._colorsTexture,P));let wn=nt.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&Et.update($,nt,kn),(je||Nt.receiveShadow!==$.receiveShadow)&&(Nt.receiveShadow=$.receiveShadow,Ie.setValue(N,"receiveShadow",$.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(mn.envMap.value=ne,mn.flipEnvMap.value=ne.isCubeTexture&&ne.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&J.environment!==null&&(mn.envMapIntensity.value=J.environmentIntensity),je&&(Ie.setValue(N,"toneMappingExposure",E.toneMappingExposure),Nt.needsLights&&fi(mn,Un),Pt&&it.fog===!0&&ft.refreshFogUniforms(mn,Pt),ft.refreshMaterialUniforms(mn,it,j,mt,m.state.transmissionRenderTarget[R.id]),gr.upload(N,us(Nt),mn,P)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(gr.upload(N,us(Nt),mn,P),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Ie.setValue(N,"center",$.center),Ie.setValue(N,"modelViewMatrix",$.modelViewMatrix),Ie.setValue(N,"normalMatrix",$.normalMatrix),Ie.setValue(N,"modelMatrix",$.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){let Nn=it.uniformsGroups;for(let di=0,pi=Nn.length;di<pi;di++){let Gs=Nn[di];Y.update(Gs,kn),Y.bind(Gs,kn)}}return kn}function fi(R,J){R.ambientLightColor.needsUpdate=J,R.lightProbe.needsUpdate=J,R.directionalLights.needsUpdate=J,R.directionalLightShadows.needsUpdate=J,R.pointLights.needsUpdate=J,R.pointLightShadows.needsUpdate=J,R.spotLights.needsUpdate=J,R.spotLightShadows.needsUpdate=J,R.rectAreaLights.needsUpdate=J,R.hemisphereLights.needsUpdate=J}function fs(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(R,J,nt){Vt.get(R.texture).__webglTexture=J,Vt.get(R.depthTexture).__webglTexture=nt;let it=Vt.get(R);it.__hasExternalTextures=!0,it.__autoAllocateDepthBuffer=nt===void 0,it.__autoAllocateDepthBuffer||St.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,J){let nt=Vt.get(R);nt.__webglFramebuffer=J,nt.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(R,J=0,nt=0){O=R,I=J,L=nt;let it=!0,$=null,Pt=!1,Ht=!1;if(R){let ne=Vt.get(R);if(ne.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(N.FRAMEBUFFER,null),it=!1;else if(ne.__webglFramebuffer===void 0)P.setupRenderTarget(R);else if(ne.__hasExternalTextures)P.rebindTextures(R,Vt.get(R.texture).__webglTexture,Vt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ie=R.depthTexture;if(ne.__boundDepthTexture!==ie){if(ie!==null&&Vt.has(ie)&&(R.width!==ie.image.width||R.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(R)}}let ue=R.texture;(ue.isData3DTexture||ue.isDataArrayTexture||ue.isCompressedArrayTexture)&&(Ht=!0);let pe=Vt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(pe[J])?$=pe[J][nt]:$=pe[J],Pt=!0):R.samples>0&&P.useMultisampledRTT(R)===!1?$=Vt.get(R).__webglMultisampledFramebuffer:Array.isArray(pe)?$=pe[nt]:$=pe,B.copy(R.viewport),tt.copy(R.scissor),F=R.scissorTest}else B.copy(Xt).multiplyScalar(j).floor(),tt.copy(oe).multiplyScalar(j).floor(),F=Me;if(Lt.bindFramebuffer(N.FRAMEBUFFER,$)&&it&&Lt.drawBuffers(R,$),Lt.viewport(B),Lt.scissor(tt),Lt.setScissorTest(F),Pt){let ne=Vt.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne.__webglTexture,nt)}else if(Ht){let ne=Vt.get(R.texture),ue=J||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,ne.__webglTexture,nt||0,ue)}A=-1},this.readRenderTargetPixels=function(R,J,nt,it,$,Pt,Ht){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ee=Vt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ht!==void 0&&(ee=ee[Ht]),ee){Lt.bindFramebuffer(N.FRAMEBUFFER,ee);try{let ne=R.texture,ue=ne.format,pe=ne.type;if(!Ft.textureFormatReadable(ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=R.width-it&&nt>=0&&nt<=R.height-$&&N.readPixels(J,nt,it,$,Kt.convert(ue),Kt.convert(pe),Pt)}finally{let ne=O!==null?Vt.get(O).__webglFramebuffer:null;Lt.bindFramebuffer(N.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(R,J,nt,it,$,Pt,Ht){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ee=Vt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ht!==void 0&&(ee=ee[Ht]),ee){let ne=R.texture,ue=ne.format,pe=ne.type;if(!Ft.textureFormatReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(J>=0&&J<=R.width-it&&nt>=0&&nt<=R.height-$){Lt.bindFramebuffer(N.FRAMEBUFFER,ee);let ie=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ie),N.bufferData(N.PIXEL_PACK_BUFFER,Pt.byteLength,N.STREAM_READ),N.readPixels(J,nt,it,$,Kt.convert(ue),Kt.convert(pe),0);let _e=O!==null?Vt.get(O).__webglFramebuffer:null;Lt.bindFramebuffer(N.FRAMEBUFFER,_e);let Ee=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Zp(N,Ee,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ie),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Pt),N.deleteBuffer(ie),N.deleteSync(Ee),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,J=null,nt=0){R.isTexture!==!0&&($r("WebGLRenderer: copyFramebufferToTexture function signature has changed."),J=arguments[0]||null,R=arguments[1]);let it=Math.pow(2,-nt),$=Math.floor(R.image.width*it),Pt=Math.floor(R.image.height*it),Ht=J!==null?J.x:0,ee=J!==null?J.y:0;P.setTexture2D(R,0),N.copyTexSubImage2D(N.TEXTURE_2D,nt,0,0,Ht,ee,$,Pt),Lt.unbindTexture()},this.copyTextureToTexture=function(R,J,nt=null,it=null,$=0){R.isTexture!==!0&&($r("WebGLRenderer: copyTextureToTexture function signature has changed."),it=arguments[0]||null,R=arguments[1],J=arguments[2],$=arguments[3]||0,nt=null);let Pt,Ht,ee,ne,ue,pe,ie,_e,Ee,Ae=R.isCompressedTexture?R.mipmaps[$]:R.image;nt!==null?(Pt=nt.max.x-nt.min.x,Ht=nt.max.y-nt.min.y,ee=nt.isBox3?nt.max.z-nt.min.z:1,ne=nt.min.x,ue=nt.min.y,pe=nt.isBox3?nt.min.z:0):(Pt=Ae.width,Ht=Ae.height,ee=Ae.depth||1,ne=0,ue=0,pe=0),it!==null?(ie=it.x,_e=it.y,Ee=it.z):(ie=0,_e=0,Ee=0);let en=Kt.convert(J.format),Se=Kt.convert(J.type),Nt;J.isData3DTexture?(P.setTexture3D(J,0),Nt=N.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(P.setTexture2DArray(J,0),Nt=N.TEXTURE_2D_ARRAY):(P.setTexture2D(J,0),Nt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,J.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,J.unpackAlignment);let Dn=N.getParameter(N.UNPACK_ROW_LENGTH),we=N.getParameter(N.UNPACK_IMAGE_HEIGHT),kn=N.getParameter(N.UNPACK_SKIP_PIXELS),wi=N.getParameter(N.UNPACK_SKIP_ROWS),je=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ae.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ae.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ne),N.pixelStorei(N.UNPACK_SKIP_ROWS,ue),N.pixelStorei(N.UNPACK_SKIP_IMAGES,pe);let Un=R.isDataArrayTexture||R.isData3DTexture,Ie=J.isDataArrayTexture||J.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let mn=Vt.get(R),wn=Vt.get(J),Nn=Vt.get(mn.__renderTarget),di=Vt.get(wn.__renderTarget);Lt.bindFramebuffer(N.READ_FRAMEBUFFER,Nn.__webglFramebuffer),Lt.bindFramebuffer(N.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let pi=0;pi<ee;pi++)Un&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Vt.get(R).__webglTexture,$,pe+pi),R.isDepthTexture?(Ie&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Vt.get(J).__webglTexture,$,Ee+pi),N.blitFramebuffer(ne,ue,Pt,Ht,ie,_e,Pt,Ht,N.DEPTH_BUFFER_BIT,N.NEAREST)):Ie?N.copyTexSubImage3D(Nt,$,ie,_e,Ee+pi,ne,ue,Pt,Ht):N.copyTexSubImage2D(Nt,$,ie,_e,Ee+pi,ne,ue,Pt,Ht);Lt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ie?R.isDataTexture||R.isData3DTexture?N.texSubImage3D(Nt,$,ie,_e,Ee,Pt,Ht,ee,en,Se,Ae.data):J.isCompressedArrayTexture?N.compressedTexSubImage3D(Nt,$,ie,_e,Ee,Pt,Ht,ee,en,Ae.data):N.texSubImage3D(Nt,$,ie,_e,Ee,Pt,Ht,ee,en,Se,Ae):R.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,$,ie,_e,Pt,Ht,en,Se,Ae.data):R.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,$,ie,_e,Ae.width,Ae.height,en,Ae.data):N.texSubImage2D(N.TEXTURE_2D,$,ie,_e,Pt,Ht,en,Se,Ae);N.pixelStorei(N.UNPACK_ROW_LENGTH,Dn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,we),N.pixelStorei(N.UNPACK_SKIP_PIXELS,kn),N.pixelStorei(N.UNPACK_SKIP_ROWS,wi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,je),$===0&&J.generateMipmaps&&N.generateMipmap(Nt),Lt.unbindTexture()},this.copyTextureToTexture3D=function(R,J,nt=null,it=null,$=0){return R.isTexture!==!0&&($r("WebGLRenderer: copyTextureToTexture3D function signature has changed."),nt=arguments[0]||null,it=arguments[1]||null,R=arguments[2],J=arguments[3],$=arguments[4]||0),$r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,J,nt,it,$)},this.initRenderTarget=function(R){Vt.get(R).__webglFramebuffer===void 0&&P.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),Lt.unbindTexture()},this.resetState=function(){I=0,L=0,O=null,Lt.reset(),ve.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=be._getDrawingBufferColorSpace(t),e.unpackColorSpace=be._getUnpackColorSpace()}};var Pa=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new re(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},fo=class extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ia=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ll,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Tn=new U,po=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Tn.fromBufferAttribute(this,e),Tn.applyMatrix4(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Tn.fromBufferAttribute(this,e),Tn.applyNormalMatrix(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Tn.fromBufferAttribute(this,e),Tn.transformDirection(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=si(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Re(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=si(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=si(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=si(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=si(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array),s=Re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array),s=Re(s,this.array),r=Re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new dn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Gi=class extends Vi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ar,qr=new U,cr=new U,lr=new U,hr=new vt,Zr=new vt,td=new ze,ra=new U,Kr=new U,oa=new U,gf=new vt,kc=new vt,xf=new vt,rs=class extends Xe{constructor(t=new Gi){if(super(),this.isSprite=!0,this.type="Sprite",ar===void 0){ar=new Oe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ia(e,5);ar.setIndex([0,1,2,0,2,3]),ar.setAttribute("position",new po(i,3,0,!1)),ar.setAttribute("uv",new po(i,2,3,!1))}this.geometry=ar,this.material=t,this.center=new vt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cr.setFromMatrixScale(this.matrixWorld),td.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),lr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cr.multiplyScalar(-lr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;aa(ra.set(-.5,-.5,0),lr,o,cr,s,r),aa(Kr.set(.5,-.5,0),lr,o,cr,s,r),aa(oa.set(.5,.5,0),lr,o,cr,s,r),gf.set(0,0),kc.set(1,0),xf.set(1,1);let a=t.ray.intersectTriangle(ra,Kr,oa,!1,qr);if(a===null&&(aa(Kr.set(-.5,.5,0),lr,o,cr,s,r),kc.set(0,1),a=t.ray.intersectTriangle(ra,oa,Kr,!1,qr),a===null))return;let c=t.ray.origin.distanceTo(qr);c<t.near||c>t.far||e.push({distance:c,point:qr.clone(),uv:ts.getInterpolation(qr,ra,Kr,oa,gf,kc,xf,new vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function aa(n,t,e,i,s,r){hr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Zr.x=r*hr.x-s*hr.y,Zr.y=s*hr.x+r*hr.y):Zr.copy(hr),n.copy(t),n.x+=Zr.x,n.y+=Zr.y,n.applyMatrix4(td)}var os=class extends Vi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},_f=new ze,Kl=new As,ca=new Er,la=new U,Rs=class extends Xe{constructor(t=new Oe,e=new os){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ca.copy(i.boundingSphere),ca.applyMatrix4(s),ca.radius+=r,t.ray.intersectsSphere(ca)===!1)return;_f.copy(s).invert(),Kl.copy(t.ray).applyMatrix4(_f);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,M=d;g<M;g++){let x=l.getX(g);la.fromBufferAttribute(u,x),yf(la,x,c,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,M=d;g<M;g++)la.fromBufferAttribute(u,g),yf(la,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function yf(n,t,e,i,s,r,o){let a=Kl.distanceSqToPoint(n);if(a<e){let c=new U;Kl.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ln=class extends Mn{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Jn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new vt:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new U,s=[],r=[],o=[],a=new U,c=new ze;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(an(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(an(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},mo=class extends Jn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new vt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Jl=class extends mo{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Rh(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var ha=new U,Vc=new Rh,Gc=new Rh,Wc=new Rh,go=class extends Jn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new U){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(ha.subVectors(s[0],s[1]).add(s[0]),l=ha);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ha.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ha),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),d),M=Math.pow(u.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d);M<1e-4&&(M=1),g<1e-4&&(g=M),x<1e-4&&(x=M),Vc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,M,x),Gc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,M,x),Wc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,M,x)}else this.curveType==="catmullrom"&&(Vc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Gc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Wc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return i.set(Vc.calc(c),Gc.calc(c),Wc.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Mf(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function W_(n,t){let e=1-n;return e*e*t}function X_(n,t){return 2*(1-n)*n*t}function Y_(n,t){return n*n*t}function no(n,t,e,i){return W_(n,t)+X_(n,e)+Y_(n,i)}function q_(n,t){let e=1-n;return e*e*e*t}function Z_(n,t){let e=1-n;return 3*e*e*n*t}function K_(n,t){return 3*(1-n)*n*n*t}function J_(n,t){return n*n*n*t}function io(n,t,e,i,s){return q_(n,t)+Z_(n,e)+K_(n,i)+J_(n,s)}var La=class extends Jn{constructor(t=new vt,e=new vt,i=new vt,s=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new vt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(io(t,s.x,r.x,o.x,a.x),io(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$l=class extends Jn{constructor(t=new U,e=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new U){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(io(t,s.x,r.x,o.x,a.x),io(t,s.y,r.y,o.y,a.y),io(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Da=class extends Jn{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jl=class extends Jn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ua=class extends Jn{constructor(t=new vt,e=new vt,i=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new vt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(no(t,s.x,r.x,o.x),no(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ql=class extends Jn{constructor(t=new U,e=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new U){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(no(t,s.x,r.x,o.x),no(t,s.y,r.y,o.y),no(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Na=class extends Jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Mf(a,c.x,l.x,h.x,u.x),Mf(a,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new vt().fromArray(s))}return this}},th=Object.freeze({__proto__:null,ArcCurve:Jl,CatmullRomCurve3:go,CubicBezierCurve:La,CubicBezierCurve3:$l,EllipseCurve:mo,LineCurve:Da,LineCurve3:jl,QuadraticBezierCurve:Ua,QuadraticBezierCurve3:Ql,SplineCurve:Na}),eh=class extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new th[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new th[s.type]().fromJSON(s))}return this}},Oa=class extends eh{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Da(this.currentPoint.clone(),new vt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Ua(this.currentPoint.clone(),new vt(t,e),new vt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new La(this.currentPoint.clone(),new vt(t,e),new vt(i,s),new vt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Na(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,r,o,a,c),this}absellipse(t,e,i,s,r,o,a,c){let l=new mo(t,e,i,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Fa=class n extends Oe{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new U,h=new vt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=i+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(a,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ge=class n extends Oe{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,M=[],x=i/2,m=0;T(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new de(u,3)),this.setAttribute("normal",new de(f,3)),this.setAttribute("uv",new de(d,2));function T(){let E=new U,V=new U,I=0,L=(e-t)/i;for(let O=0;O<=r;O++){let A=[],S=O/r,B=S*(e-t)+t;for(let tt=0;tt<=s;tt++){let F=tt/s,G=F*c+a,Z=Math.sin(G),q=Math.cos(G);V.x=B*Z,V.y=-S*i+x,V.z=B*q,u.push(V.x,V.y,V.z),E.set(Z,L,q).normalize(),f.push(E.x,E.y,E.z),d.push(F,1-S),A.push(g++)}M.push(A)}for(let O=0;O<s;O++)for(let A=0;A<r;A++){let S=M[A][O],B=M[A+1][O],tt=M[A+1][O+1],F=M[A][O+1];(t>0||A!==0)&&(h.push(S,B,F),I+=3),(e>0||A!==r-1)&&(h.push(B,tt,F),I+=3)}l.addGroup(m,I,0),m+=I}function b(E){let V=g,I=new vt,L=new U,O=0,A=E===!0?t:e,S=E===!0?1:-1;for(let tt=1;tt<=s;tt++)u.push(0,x*S,0),f.push(0,S,0),d.push(.5,.5),g++;let B=g;for(let tt=0;tt<=s;tt++){let G=tt/s*c+a,Z=Math.cos(G),q=Math.sin(G);L.x=A*q,L.y=x*S,L.z=A*Z,u.push(L.x,L.y,L.z),f.push(0,S,0),I.x=Z*.5+.5,I.y=q*.5*S+.5,d.push(I.x,I.y),g++}for(let tt=0;tt<s;tt++){let F=V+tt,G=B+tt;E===!0?h.push(G,G+1,F):h.push(G+1,G,F),O+=3}l.addGroup(m,O,E===!0?1:2),m+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},xo=class n extends Ge{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},nh=class n extends Oe{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new de(r,3)),this.setAttribute("normal",new de(r.slice(),3)),this.setAttribute("uv",new de(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(T){let b=new U,E=new U,V=new U;for(let I=0;I<e.length;I+=3)d(e[I+0],b),d(e[I+1],E),d(e[I+2],V),c(b,E,V,T)}function c(T,b,E,V){let I=V+1,L=[];for(let O=0;O<=I;O++){L[O]=[];let A=T.clone().lerp(E,O/I),S=b.clone().lerp(E,O/I),B=I-O;for(let tt=0;tt<=B;tt++)tt===0&&O===I?L[O][tt]=A:L[O][tt]=A.clone().lerp(S,tt/B)}for(let O=0;O<I;O++)for(let A=0;A<2*(I-O)-1;A++){let S=Math.floor(A/2);A%2===0?(f(L[O][S+1]),f(L[O+1][S]),f(L[O][S])):(f(L[O][S+1]),f(L[O+1][S+1]),f(L[O+1][S]))}}function l(T){let b=new U;for(let E=0;E<r.length;E+=3)b.x=r[E+0],b.y=r[E+1],b.z=r[E+2],b.normalize().multiplyScalar(T),r[E+0]=b.x,r[E+1]=b.y,r[E+2]=b.z}function h(){let T=new U;for(let b=0;b<r.length;b+=3){T.x=r[b+0],T.y=r[b+1],T.z=r[b+2];let E=x(T)/2/Math.PI+.5,V=m(T)/Math.PI+.5;o.push(E,1-V)}g(),u()}function u(){for(let T=0;T<o.length;T+=6){let b=o[T+0],E=o[T+2],V=o[T+4],I=Math.max(b,E,V),L=Math.min(b,E,V);I>.9&&L<.1&&(b<.2&&(o[T+0]+=1),E<.2&&(o[T+2]+=1),V<.2&&(o[T+4]+=1))}}function f(T){r.push(T.x,T.y,T.z)}function d(T,b){let E=T*3;b.x=t[E+0],b.y=t[E+1],b.z=t[E+2]}function g(){let T=new U,b=new U,E=new U,V=new U,I=new vt,L=new vt,O=new vt;for(let A=0,S=0;A<r.length;A+=9,S+=6){T.set(r[A+0],r[A+1],r[A+2]),b.set(r[A+3],r[A+4],r[A+5]),E.set(r[A+6],r[A+7],r[A+8]),I.set(o[S+0],o[S+1]),L.set(o[S+2],o[S+3]),O.set(o[S+4],o[S+5]),V.copy(T).add(b).add(E).divideScalar(3);let B=x(V);M(I,S+0,T,B),M(L,S+2,b,B),M(O,S+4,E,B)}}function M(T,b,E,V){V<0&&T.x===1&&(o[b]=T.x-1),E.x===0&&E.z===0&&(o[b]=V/2/Math.PI+.5)}function x(T){return Math.atan2(T.z,-T.x)}function m(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var _o=class extends Oa{constructor(t){super(t),this.uuid=xi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Oa().fromJSON(s))}return this}},$_={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=ed(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(i&&(r=ny(n,t,r,e)),n.length>80*e){a=l=n[0],c=h=n[1];for(let g=e;g<s;g+=e)u=n[g],f=n[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return yo(r,o,e,a,c,d,0),o}};function ed(n,t,e,i,s){let r,o;if(s===dy(n,t,e,i)>0)for(r=t;r<e;r+=i)o=vf(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=vf(r,n[r],n[r+1],o);return o&&qa(o,o.next)&&(vo(o),o=o.next),o}function Cs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(qa(e,e.next)||Ze(e.prev,e,e.next)===0)){if(vo(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function yo(n,t,e,i,s,r,o){if(!n)return;!o&&r&&ay(n,i,s,r);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?Q_(n,i,s,r):j_(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),vo(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=ty(Cs(n),t,e),yo(n,t,e,i,s,r,2)):o===2&&ey(n,t,e,i,s,r):yo(Cs(n),t,e,i,s,r,1);break}}}function j_(n){let t=n.prev,e=n,i=n.next;if(Ze(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&fr(s,a,r,c,o,l,g.x,g.y)&&Ze(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Q_(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Ze(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,M=a>c?a>l?a:l:c>l?c:l,x=h>u?h>f?h:f:u>f?u:f,m=ih(d,g,t,e,i),T=ih(M,x,t,e,i),b=n.prevZ,E=n.nextZ;for(;b&&b.z>=m&&E&&E.z<=T;){if(b.x>=d&&b.x<=M&&b.y>=g&&b.y<=x&&b!==s&&b!==o&&fr(a,h,c,u,l,f,b.x,b.y)&&Ze(b.prev,b,b.next)>=0||(b=b.prevZ,E.x>=d&&E.x<=M&&E.y>=g&&E.y<=x&&E!==s&&E!==o&&fr(a,h,c,u,l,f,E.x,E.y)&&Ze(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;b&&b.z>=m;){if(b.x>=d&&b.x<=M&&b.y>=g&&b.y<=x&&b!==s&&b!==o&&fr(a,h,c,u,l,f,b.x,b.y)&&Ze(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;E&&E.z<=T;){if(E.x>=d&&E.x<=M&&E.y>=g&&E.y<=x&&E!==s&&E!==o&&fr(a,h,c,u,l,f,E.x,E.y)&&Ze(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function ty(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!qa(s,r)&&nd(s,i,i.next,r)&&Mo(s,r)&&Mo(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),vo(i),vo(i.next),i=n=r),i=i.next}while(i!==n);return Cs(i)}function ey(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&hy(o,a)){let c=id(o,a);o=Cs(o,o.next),c=Cs(c,c.next),yo(o,t,e,i,s,r,0),yo(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function ny(n,t,e,i){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=ed(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(ly(l));for(s.sort(iy),r=0;r<s.length;r++)e=sy(s[r],e);return e}function iy(n,t){return n.x-t.x}function sy(n,t){let e=ry(n,t);if(!e)return t;let i=id(e,n);return Cs(i,i.next),Cs(e,e.next)}function ry(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&fr(o<l?r:i,o,c,l,o<l?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Mo(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&oy(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function oy(n,t){return Ze(n.prev,n,t.prev)<0&&Ze(t.next,n,n.next)<0}function ay(n,t,e,i){let s=n;do s.z===0&&(s.z=ih(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,cy(s)}function cy(n){let t,e,i,s,r,o,a,c,l=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,l*=2}while(o>1);return n}function ih(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function ly(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function fr(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function hy(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!uy(n,t)&&(Mo(n,t)&&Mo(t,n)&&fy(n,t)&&(Ze(n.prev,n,t.prev)||Ze(n,t.prev,t))||qa(n,t)&&Ze(n.prev,n,n.next)>0&&Ze(t.prev,t,t.next)>0)}function Ze(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function qa(n,t){return n.x===t.x&&n.y===t.y}function nd(n,t,e,i){let s=fa(Ze(n,t,e)),r=fa(Ze(n,t,i)),o=fa(Ze(e,i,n)),a=fa(Ze(e,i,t));return!!(s!==r&&o!==a||s===0&&ua(n,e,t)||r===0&&ua(n,i,t)||o===0&&ua(e,n,i)||a===0&&ua(e,t,i))}function ua(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function fa(n){return n>0?1:n<0?-1:0}function uy(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&nd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Mo(n,t){return Ze(n.prev,n,n.next)<0?Ze(n,t,n.next)>=0&&Ze(n,n.prev,t)>=0:Ze(n,t,n.prev)<0||Ze(n,n.next,t)<0}function fy(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function id(n,t){let e=new sh(n.i,n.x,n.y),i=new sh(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function vf(n,t,e,i){let s=new sh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function vo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function sh(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function dy(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var so=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Ef(t),bf(i,t);let o=t.length;e.forEach(Ef);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,bf(i,e[c]);let a=$_.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Ef(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function bf(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Ba=class n extends Oe{constructor(t=new _o([new vt(.5,.5),new vt(-.5,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new de(s,3)),this.setAttribute("uv",new de(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:py,b,E=!1,V,I,L,O;m&&(b=m.getSpacedPoints(h),E=!0,f=!1,V=m.computeFrenetFrames(h,!1),I=new U,L=new U,O=new U),f||(x=0,d=0,g=0,M=0);let A=a.extractPoints(l),S=A.shape,B=A.holes;if(!so.isClockWise(S)){S=S.reverse();for(let dt=0,wt=B.length;dt<wt;dt++){let N=B[dt];so.isClockWise(N)&&(B[dt]=N.reverse())}}let F=so.triangulateShape(S,B),G=S;for(let dt=0,wt=B.length;dt<wt;dt++){let N=B[dt];S=S.concat(N)}function Z(dt,wt,N){return wt||console.error("THREE.ExtrudeGeometry: vec does not exist"),dt.clone().addScaledVector(wt,N)}let q=S.length,mt=F.length;function j(dt,wt,N){let Yt,St,Ft,Lt=dt.x-wt.x,te=dt.y-wt.y,Vt=N.x-dt.x,P=N.y-dt.y,w=Lt*Lt+te*te,Q=Lt*P-te*Vt;if(Math.abs(Q)>Number.EPSILON){let W=Math.sqrt(w),K=Math.sqrt(Vt*Vt+P*P),X=wt.x-te/W,xt=wt.y+Lt/W,ft=N.x-P/K,pt=N.y+Vt/K,Mt=((ft-X)*P-(pt-xt)*Vt)/(Lt*P-te*Vt);Yt=X+Lt*Mt-dt.x,St=xt+te*Mt-dt.y;let et=Yt*Yt+St*St;if(et<=2)return new vt(Yt,St);Ft=Math.sqrt(et/2)}else{let W=!1;Lt>Number.EPSILON?Vt>Number.EPSILON&&(W=!0):Lt<-Number.EPSILON?Vt<-Number.EPSILON&&(W=!0):Math.sign(te)===Math.sign(P)&&(W=!0),W?(Yt=-te,St=Lt,Ft=Math.sqrt(w)):(Yt=Lt,St=te,Ft=Math.sqrt(w/2))}return new vt(Yt/Ft,St/Ft)}let yt=[];for(let dt=0,wt=G.length,N=wt-1,Yt=dt+1;dt<wt;dt++,N++,Yt++)N===wt&&(N=0),Yt===wt&&(Yt=0),yt[dt]=j(G[dt],G[N],G[Yt]);let rt=[],Xt,oe=yt.concat();for(let dt=0,wt=B.length;dt<wt;dt++){let N=B[dt];Xt=[];for(let Yt=0,St=N.length,Ft=St-1,Lt=Yt+1;Yt<St;Yt++,Ft++,Lt++)Ft===St&&(Ft=0),Lt===St&&(Lt=0),Xt[Yt]=j(N[Yt],N[Ft],N[Lt]);rt.push(Xt),oe=oe.concat(Xt)}for(let dt=0;dt<x;dt++){let wt=dt/x,N=d*Math.cos(wt*Math.PI/2),Yt=g*Math.sin(wt*Math.PI/2)+M;for(let St=0,Ft=G.length;St<Ft;St++){let Lt=Z(G[St],yt[St],Yt);gt(Lt.x,Lt.y,-N)}for(let St=0,Ft=B.length;St<Ft;St++){let Lt=B[St];Xt=rt[St];for(let te=0,Vt=Lt.length;te<Vt;te++){let P=Z(Lt[te],Xt[te],Yt);gt(P.x,P.y,-N)}}}let Me=g+M;for(let dt=0;dt<q;dt++){let wt=f?Z(S[dt],oe[dt],Me):S[dt];E?(L.copy(V.normals[0]).multiplyScalar(wt.x),I.copy(V.binormals[0]).multiplyScalar(wt.y),O.copy(b[0]).add(L).add(I),gt(O.x,O.y,O.z)):gt(wt.x,wt.y,0)}for(let dt=1;dt<=h;dt++)for(let wt=0;wt<q;wt++){let N=f?Z(S[wt],oe[wt],Me):S[wt];E?(L.copy(V.normals[dt]).multiplyScalar(N.x),I.copy(V.binormals[dt]).multiplyScalar(N.y),O.copy(b[dt]).add(L).add(I),gt(O.x,O.y,O.z)):gt(N.x,N.y,u/h*dt)}for(let dt=x-1;dt>=0;dt--){let wt=dt/x,N=d*Math.cos(wt*Math.PI/2),Yt=g*Math.sin(wt*Math.PI/2)+M;for(let St=0,Ft=G.length;St<Ft;St++){let Lt=Z(G[St],yt[St],Yt);gt(Lt.x,Lt.y,u+N)}for(let St=0,Ft=B.length;St<Ft;St++){let Lt=B[St];Xt=rt[St];for(let te=0,Vt=Lt.length;te<Vt;te++){let P=Z(Lt[te],Xt[te],Yt);E?gt(P.x,P.y+b[h-1].y,b[h-1].x+N):gt(P.x,P.y,u+N)}}}ht(),Tt();function ht(){let dt=s.length/3;if(f){let wt=0,N=q*wt;for(let Yt=0;Yt<mt;Yt++){let St=F[Yt];jt(St[2]+N,St[1]+N,St[0]+N)}wt=h+x*2,N=q*wt;for(let Yt=0;Yt<mt;Yt++){let St=F[Yt];jt(St[0]+N,St[1]+N,St[2]+N)}}else{for(let wt=0;wt<mt;wt++){let N=F[wt];jt(N[2],N[1],N[0])}for(let wt=0;wt<mt;wt++){let N=F[wt];jt(N[0]+q*h,N[1]+q*h,N[2]+q*h)}}i.addGroup(dt,s.length/3-dt,0)}function Tt(){let dt=s.length/3,wt=0;Jt(G,wt),wt+=G.length;for(let N=0,Yt=B.length;N<Yt;N++){let St=B[N];Jt(St,wt),wt+=St.length}i.addGroup(dt,s.length/3-dt,1)}function Jt(dt,wt){let N=dt.length;for(;--N>=0;){let Yt=N,St=N-1;St<0&&(St=dt.length-1);for(let Ft=0,Lt=h+x*2;Ft<Lt;Ft++){let te=q*Ft,Vt=q*(Ft+1),P=wt+Yt+te,w=wt+St+te,Q=wt+St+Vt,W=wt+Yt+Vt;ae(P,w,Q,W)}}}function gt(dt,wt,N){c.push(dt),c.push(wt),c.push(N)}function jt(dt,wt,N){qt(dt),qt(wt),qt(N);let Yt=s.length/3,St=T.generateTopUV(i,s,Yt-3,Yt-2,Yt-1);le(St[0]),le(St[1]),le(St[2])}function ae(dt,wt,N,Yt){qt(dt),qt(wt),qt(Yt),qt(wt),qt(N),qt(Yt);let St=s.length/3,Ft=T.generateSideWallUV(i,s,St-6,St-3,St-2,St-1);le(Ft[0]),le(Ft[1]),le(Ft[3]),le(Ft[1]),le(Ft[2]),le(Ft[3])}function qt(dt){s.push(c[dt*3+0]),s.push(c[dt*3+1]),s.push(c[dt*3+2])}function le(dt){r.push(dt.x),r.push(dt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return my(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new th[s.type]().fromJSON(s)),new n(i,t.options)}},py={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],h=t[s*3+1];return[new vt(r,o),new vt(a,c),new vt(l,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],h=t[i*3+1],u=t[i*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],M=t[r*3],x=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new vt(o,1-c),new vt(l,1-u),new vt(f,1-g),new vt(M,1-m)]:[new vt(a,1-c),new vt(h,1-u),new vt(d,1-g),new vt(x,1-m)]}};function my(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var za=class n extends nh{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var Eo=class n extends Oe{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,f=(e-t)/s,d=new U,g=new vt;for(let M=0;M<=s;M++){for(let x=0;x<=i;x++){let m=r+x/i*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let M=0;M<s;M++){let x=M*(i+1);for(let m=0;m<i;m++){let T=m+x,b=T,E=T+i+1,V=T+i+2,I=T+1;a.push(b,E,I),a.push(E,V,I)}}this.setIndex(a),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(l,3)),this.setAttribute("uv",new de(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var hn=class n extends Oe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new U,f=new U,d=[],g=[],M=[],x=[];for(let m=0;m<=i;m++){let T=[],b=m/i,E=0;m===0&&o===0?E=.5/e:m===i&&c===Math.PI&&(E=-.5/e);for(let V=0;V<=e;V++){let I=V/e;u.x=-t*Math.cos(s+I*r)*Math.sin(o+b*a),u.y=t*Math.cos(o+b*a),u.z=t*Math.sin(s+I*r)*Math.sin(o+b*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),M.push(f.x,f.y,f.z),x.push(I+E,1-b),T.push(l++)}h.push(T)}for(let m=0;m<i;m++)for(let T=0;T<e;T++){let b=h[m][T+1],E=h[m][T],V=h[m+1][T],I=h[m+1][T+1];(m!==0||o>0)&&d.push(b,E,I),(m!==i-1||c<Math.PI)&&d.push(E,V,I)}this.setIndex(d),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(M,3)),this.setAttribute("uv",new de(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ps=class n extends Oe{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new U,u=new U,f=new U;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){let M=g/s*r,x=d/i*Math.PI*2;u.x=(t+e*Math.cos(x))*Math.cos(M),u.y=(t+e*Math.cos(x))*Math.sin(M),u.z=e*Math.sin(x),a.push(u.x,u.y,u.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){let M=(s+1)*d+g-1,x=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,T=(s+1)*d+g;o.push(M,x,T),o.push(x,m,T)}this.setIndex(o),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ye=class extends Vi{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gf,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function da(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function gy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Sr=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},rh=class extends Sr{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yu,endingEnd:yu}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Mu:r=t,a=2*e-i;break;case vu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Mu:o=t,c=2*i-e;break;case vu:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-e)/(s-e),M=g*g,x=M*g,m=-f*x+2*f*M-f*g,T=(1+f)*x+(-1.5-2*f)*M+(-.5+f)*g+1,b=(-1-d)*x+(1.5+d)*M+.5*g,E=d*x-d*M;for(let V=0;V!==a;++V)r[V]=m*o[h+V]+T*o[l+V]+b*o[c+V]+E*o[u+V];return r}},oh=class extends Sr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(i-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},ah=class extends Sr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ai=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=da(e,this.TimeBufferType),this.values=da(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:da(t.times,Array),values:da(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ah(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new oh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new rh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ya:e=this.InterpolantFactoryMethodDiscrete;break;case Il:e=this.InterpolantFactoryMethodLinear;break;case pc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ya;case this.InterpolantFactoryMethodLinear:return Il;case this.InterpolantFactoryMethodSmooth:return pc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&gy(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===pc,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let M=e[u+g];if(M!==e[f+g]||M!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};ai.prototype.TimeBufferType=Float32Array;ai.prototype.ValueBufferType=Float32Array;ai.prototype.DefaultInterpolation=Il;var Is=class extends ai{constructor(t,e,i){super(t,e,i)}};Is.prototype.ValueTypeName="bool";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=ya;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;var ch=class extends ai{};ch.prototype.ValueTypeName="color";var lh=class extends ai{};lh.prototype.ValueTypeName="number";var hh=class extends Sr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)oi.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ha=class extends ai{InterpolantFactoryMethodLinear(t){return new hh(this.times,this.values,this.getValueSize(),t)}};Ha.prototype.ValueTypeName="quaternion";Ha.prototype.InterpolantFactoryMethodSmooth=void 0;var Ls=class extends ai{constructor(t,e,i){super(t,e,i)}};Ls.prototype.ValueTypeName="string";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=ya;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var uh=class extends ai{};uh.prototype.ValueTypeName="vector";var Sf={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},fh=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},xy=new fh,bo=class{constructor(t){this.manager=t!==void 0?t:xy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};bo.DEFAULT_MATERIAL_NAME="__DEFAULT";var dh=class extends bo{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Sf.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=co("img");function c(){h(),Sf.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var So=class extends bo{constructor(t){super(t)}load(t,e,i,s){let r=new Mn,o=new dh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}},wo=class extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new re(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},To=class extends wo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Xc=new ze,wf=new U,Tf=new U,ka=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ho,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;wf.setFromMatrixPosition(t.matrixWorld),e.position.copy(wf),Tf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Tf),e.updateMatrixWorld(),Xc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Af=new ze,Jr=new U,Yc=new U,ph=class extends ka{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new vt(4,2),this._viewportCount=6,this._viewports=[new De(2,1,1,1),new De(0,1,1,1),new De(3,1,1,1),new De(1,1,1,1),new De(3,0,1,1),new De(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Jr.setFromMatrixPosition(t.matrixWorld),i.position.copy(Jr),Yc.copy(i.position),Yc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Yc),i.updateMatrixWorld(),s.makeTranslation(-Jr.x,-Jr.y,-Jr.z),Af.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Af)}},Ao=class extends wo{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ph}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},mh=class extends ka{constructor(){super(new Aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ro=class extends wo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new mh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Co=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Rf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Rf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Rf(){return performance.now()}var Ch="\\[\\]\\.:\\/",_y=new RegExp("["+Ch+"]","g"),Ph="[^"+Ch+"]",yy="[^"+Ch.replace("\\.","")+"]",My=/((?:WC+[\/:])*)/.source.replace("WC",Ph),vy=/(WCOD+)?/.source.replace("WCOD",yy),Ey=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ph),by=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ph),Sy=new RegExp("^"+My+vy+Ey+by+"$"),wy=["material","materials","bones","map"],gh=class{constructor(t,e,i){let s=i||We.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},We=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_y,"")}static parseTrackName(t){let e=Sy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);wy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};We.Composite=gh;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var M1=new Float32Array(1);var Cf=new ze,wr=class{constructor(t,e,i=0,s=1/0){this.ray=new As(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new lo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Cf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cf),this}intersectObject(t,e=!0,i=[]){return xh(t,this,i,e),i.sort(Pf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)xh(t[s],this,i,e);return i.sort(Pf),i}};function Pf(n,t){return n.distance-t.distance}function xh(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)xh(r[o],t,e,!0)}}var Ds=class{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(an(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Va=class extends Hi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_h}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_h);var sd={type:"change"},Dh={type:"start"},od={type:"end"},Za=new As,rd=new ii,Ty=Math.cos(70*Xf.DEG2RAD),rn=new U,On=2*Math.PI,Ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Lh=1e-6,Ka=class extends Va{constructor(t,e=null){super(t,e),this.state=Ue.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Us.ROTATE,MIDDLE:Us.DOLLY,RIGHT:Us.PAN},this.touches={ONE:yi.ROTATE,TWO:yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new oi,this._lastTargetPosition=new U,this._quat=new oi().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ds,this._sphericalDelta=new Ds,this._scale=1,this._panOffset=new U,this._rotateStart=new vt,this._rotateEnd=new vt,this._rotateDelta=new vt,this._panStart=new vt,this._panEnd=new vt,this._panDelta=new vt,this._dollyStart=new vt,this._dollyEnd=new vt,this._dollyDelta=new vt,this._dollyDirection=new U,this._mouse=new vt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ry.bind(this),this._onPointerDown=Ay.bind(this),this._onPointerUp=Cy.bind(this),this._onContextMenu=Oy.bind(this),this._onMouseWheel=Ly.bind(this),this._onKeyDown=Dy.bind(this),this._onTouchStart=Uy.bind(this),this._onTouchMove=Ny.bind(this),this._onMouseDown=Py.bind(this),this._onMouseMove=Iy.bind(this),this._interceptControlDown=Fy.bind(this),this._interceptControlUp=By.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(sd),this.update(),this.state=Ue.NONE}update(t=null){let e=this.object.position;rn.copy(e).sub(this.target),rn.applyQuaternion(this._quat),this._spherical.setFromVector3(rn),this.autoRotate&&this.state===Ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=On:i>Math.PI&&(i-=On),s<-Math.PI?s+=On:s>Math.PI&&(s-=On),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(rn.setFromSpherical(this._spherical),rn.applyQuaternion(this._quatInverse),e.copy(this.target).add(rn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=rn.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new U(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=rn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Za.origin.copy(this.object.position),Za.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Za.direction))<Ty?this.object.lookAt(this.target):(rd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Za.intersectPlane(rd,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Lh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Lh||this._lastTargetPosition.distanceToSquared(this.target)>Lh?(this.dispatchEvent(sd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?On/60*this.autoRotateSpeed*t:On/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){rn.setFromMatrixColumn(e,0),rn.multiplyScalar(-t),this._panOffset.add(rn)}_panUp(t,e){this.screenSpacePanning===!0?rn.setFromMatrixColumn(e,1):(rn.setFromMatrixColumn(e,0),rn.crossVectors(this.object.up,rn)),rn.multiplyScalar(t),this._panOffset.add(rn)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;rn.copy(s).sub(this.target);let r=rn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(On*this._rotateDelta.x/e.clientHeight),this._rotateUp(On*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(On*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-On*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(On*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-On*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(On*this._rotateDelta.x/e.clientHeight),this._rotateUp(On*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new vt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Ay(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Ry(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Cy(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(od),this.state=Ue.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Py(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Us.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ue.DOLLY;break;case Us.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ue.ROTATE}break;case Us.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ue.PAN}break;default:this.state=Ue.NONE}this.state!==Ue.NONE&&this.dispatchEvent(Dh)}function Iy(n){switch(this.state){case Ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Ly(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ue.NONE||(n.preventDefault(),this.dispatchEvent(Dh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(od))}function Dy(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function Uy(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case yi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Ue.TOUCH_ROTATE;break;case yi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Ue.TOUCH_PAN;break;default:this.state=Ue.NONE}break;case 2:switch(this.touches.TWO){case yi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ue.TOUCH_DOLLY_PAN;break;case yi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ue.TOUCH_DOLLY_ROTATE;break;default:this.state=Ue.NONE}break;default:this.state=Ue.NONE}this.state!==Ue.NONE&&this.dispatchEvent(Dh)}function Ny(n){switch(this._trackPointer(n),this.state){case Ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ue.NONE}}function Oy(n){this.enabled!==!1&&n.preventDefault()}function Fy(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function By(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ja(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new Oe,l=0;for(let h=0;h<n.length;++h){let u=n[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0,u=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=n[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=ad(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let M=0;M<o[h].length;++M)d.push(o[h][M][f]);let g=ad(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function ad(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){let h=n[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new dn(o,e,i),c=0;for(let l=0;l<n.length;++l){let h=n[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){let M=h.getComponent(f,g);a.setComponent(f+u,g,M)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Ns=16,Os=8,Nh=6;function ld(n){return()=>(n=n*1664525+1013904223>>>0,n/4294967296)}var zy=n=>"#"+("00000"+n.toString(16)).slice(-6);function Ye(n,t){let e=Math.min(255,Math.max(0,(n>>16&255)*t)),i=Math.min(255,Math.max(0,(n>>8&255)*t)),s=Math.min(255,Math.max(0,(n&255)*t));return"rgb("+(e|0)+","+(i|0)+","+(s|0)+")"}var Qt={noise:(n,t)=>(e,i)=>{for(let s=0;s<16;s++)for(let r=0;r<16;r++)e.fillStyle=Ye(n,1-t/2+i()*t),e.fillRect(s,r,1,1)},grassTop:(n,t)=>{Qt.noise(11132046,.16)(n,t);for(let e=0;e<14;e++)n.fillStyle=Ye(9423992,.95+t()*.1),n.fillRect(t()*16|0,t()*16|0,1,1)},grassSide:(n,t)=>{Qt.dirt(n,t);for(let e=0;e<16;e++){let i=3+(t()*2.2|0);for(let s=0;s<i;s++)n.fillStyle=Ye(11132046,.9+t()*.15),n.fillRect(e,s,1,1)}},dirt:(n,t)=>{Qt.noise(12094050,.18)(n,t);for(let e=0;e<10;e++)n.fillStyle=Ye(10121296,1),n.fillRect(t()*16|0,t()*16|0,1,1)},stone:(n,t)=>{Qt.noise(11842232,.12)(n,t);for(let e=0;e<6;e++){n.fillStyle=Ye(10263202,1);let i=t()*14|0,s=t()*16|0;n.fillRect(i,s,2+(t()*3|0),1)}},sand:(n,t)=>Qt.noise(15983286,.1)(n,t),pathTop:(n,t)=>{Qt.noise(15324068,.14)(n,t);for(let e=0;e<12;e++)n.fillStyle=Ye(13810058,1),n.fillRect(t()*16|0,t()*16|0,1,1)},pathSide:(n,t)=>{Qt.dirt(n,t),n.fillStyle=Ye(15324068,1),n.fillRect(0,0,16,2)},snowTop:(n,t)=>Qt.noise(16514047,.05)(n,t),snowSide:(n,t)=>{Qt.stone(n,t);for(let e=0;e<16;e++){let i=3+(t()*3|0);n.fillStyle=Ye(16514047,.97+t()*.03),n.fillRect(e,0,1,i)}},logSide:(n,t)=>{for(let e=0;e<16;e++){let i=e%4===0?8215104:10121298;for(let s=0;s<16;s++)n.fillStyle=Ye(i,.9+t()*.2),n.fillRect(e,s,1,1)}},logTop:(n,t)=>{Qt.noise(14267267,.08)(n,t),n.strokeStyle=Ye(11569760,1),n.lineWidth=1,[6,3].forEach(e=>{n.strokeRect(8-e+.5,8-e+.5,e*2-1,e*2-1)}),n.strokeStyle=Ye(9071180,1),n.strokeRect(.5,.5,15,15)},leaves:n=>(t,e)=>{Qt.noise(n,.22)(t,e);for(let i=0;i<22;i++)t.fillStyle=Ye(n,.72),t.fillRect(e()*16|0,e()*16|0,1,1);for(let i=0;i<10;i++)t.fillStyle=Ye(n,1.12),t.fillRect(e()*16|0,e()*16|0,1,1)},water:(n,t)=>{Qt.noise(6991592,.08)(n,t);for(let e=0;e<7;e++)n.fillStyle="rgba(255,255,255,0.55)",n.fillRect(t()*13|0,t()*16|0,2+(t()*3|0),1)},birch:(n,t)=>{Qt.noise(16052454,.06)(n,t);for(let e=0;e<8;e++)n.fillStyle="#5a5050",n.fillRect(t()*14|0,t()*16|0,2+(t()*2|0),1)},cobble:(n,t)=>{Qt.noise(11052718,.1)(n,t),n.fillStyle=Ye(8684172,1);for(let e=0;e<16;e+=4){n.fillRect(0,e,16,1);for(let i=e/4%2*3;i<16;i+=6)n.fillRect(i,e,1,4)}},deep:(n,t)=>Qt.noise(9341592,.16)(n,t),clay:(n,t)=>{Qt.noise(12950138,.12)(n,t);for(let e=3;e<16;e+=5)n.fillStyle=Ye(11765610,1),n.fillRect(0,e,16,1)},gravel:(n,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++)n.fillStyle=Ye([12433068,11051414,13814720][t()*3|0],1),n.fillRect(e,i,1,1)},planks:(n,t)=>{for(let e=0;e<16;e++){let i=e%4===3;for(let s=0;s<16;s++)n.fillStyle=i?"#9a7254":Ye(13936760,.92+t()*.12),n.fillRect(s,e,1,1)}for(let e=0;e<16;e+=4)n.fillStyle="#9a7254",n.fillRect(e*3%16,e,1,3)},mossy:(n,t)=>{Qt.cobble(n,t);for(let e=0;e<40;e++)n.fillStyle=Ye(9423992,.9+t()*.2),n.fillRect(t()*16|0,t()*16|0,1,1)},shingle:(n,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=e>>2,r=e%4===3||(i+s*4)%8===0;n.fillStyle=Ye(16777215,r?.78:.94+t()*.06),n.fillRect(i,e,1,1)}},plaster:(n,t)=>Qt.noise(16777215,.07)(n,t),plankGrey:(n,t)=>{for(let e=0;e<16;e++){let i=e%4===3;for(let s=0;s<16;s++)n.fillStyle=Ye(16777215,i?.72:.9+t()*.1),n.fillRect(s,e,1,1)}},glass:(n,t)=>{n.fillStyle="#d8f1fa",n.fillRect(0,0,16,16),n.fillStyle="#ffffff",n.fillRect(3,3,1,4),n.fillRect(4,3,1,2),n.fillRect(10,9,1,3),n.fillStyle="#bcd9e6",n.fillRect(0,0,16,1),n.fillRect(0,15,16,1),n.fillRect(0,0,1,16),n.fillRect(15,0,1,16),n.fillRect(7,0,2,16),n.fillRect(0,7,16,2)},bricks:(n,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=e%4===3||(i+(e>>2)%2*4)%8===7;n.fillStyle=s?"#e9e2d6":Ye(16777215,.86+t()*.08),n.fillRect(i,e,1,1)}},stoneBrick:(n,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=e%8===7||(i+(e>>3)*8)%16===15;n.fillStyle=s?"#8c8a94":Ye(11973820,.9+t()*.12),n.fillRect(i,e,1,1)}},farmland:(n,t)=>{Qt.noise(8018496,.14)(n,t);for(let e=1;e<16;e+=4)n.fillStyle="#5e4430",n.fillRect(0,e,16,1)},sprucePlank:(n,t)=>{for(let e=0;e<16;e++){let i=e%4===3;for(let s=0;s<16;s++)n.fillStyle=i?"#5e4430":Ye(9069640,.9+t()*.12),n.fillRect(s,e,1,1)}for(let e=0;e<16;e+=4)n.fillStyle="#5e4430",n.fillRect(e*5%16,e,1,3)},wheat:(n,t)=>{for(let e=1;e<15;e+=2){let i=9+(t()*5|0);n.fillStyle="#c9b45a",n.fillRect(e,16-i,1,i),n.fillStyle="#f2d36b",n.fillRect(e,16-i,1,4)}},carrot:(n,t)=>{for(let e=2;e<14;e+=3)n.fillStyle="#6faa5e",n.fillRect(e,7,1,6),n.fillRect(e+1,8,1,3),n.fillStyle="#f2963a",n.fillRect(e,13,2,3)},sprout:(n,t)=>{for(let e=1;e<15;e+=3)n.fillStyle="#7fc46a",n.fillRect(e+1,10,1,6),n.fillRect(e,10,3,1),n.fillRect(e+2,12,1,1)},tuft:(n,t)=>{for(let e=1;e<15;e+=2){let i=5+(t()*7|0);n.fillStyle=Ye(9423992,.85+t()*.25),n.fillRect(e,16-i,1,i)}},flower:n=>(t,e)=>{t.fillStyle="#6faa5e",t.fillRect(7,8,2,8),t.fillRect(5,11,2,1),t.fillRect(9,13,2,1),t.fillStyle=zy(n),t.fillRect(6,4,4,3),t.fillRect(5,5,6,1),t.fillStyle="#fff6b0",t.fillRect(7,5,2,1)},reed:(n,t)=>{n.fillStyle="#7cb86f";for(let e=3;e<14;e+=3)n.fillRect(e,2+(t()*4|0),1,14);n.fillStyle="#a77a52",n.fillRect(6,2,2,4)},lily:(n,t)=>{n.fillStyle="#84c784",n.beginPath(),n.arc(8,8,6.5,.3,Math.PI*2-.3),n.lineTo(8,8),n.fill(),n.fillStyle="#ffb6c1",n.fillRect(9,6,2,2)}},ut={GRASS_TOP:0,GRASS_SIDE:1,DIRT:2,STONE:3,SAND:4,PATH_TOP:5,PATH_SIDE:6,SNOW_TOP:7,SNOW_SIDE:8,LOG:9,LOG_TOP:10,LEAF_G:11,LEAF_M:12,LEAF_L:13,LEAF_P:14,WATER:15,BIRCH:16,COBBLE:17,DEEP:18,CLAY:19,GRAVEL:20,PLANKS:21,MOSSY:22,LEAF_T:23,TUFT:24,FL_PINK:25,FL_WHITE:26,FL_YELLOW:27,FL_BLUE:28,FL_LAV:29,REED:30,LILY:31,SHINGLE:32,PLASTER:33,PLANK_GREY:34,GLASS:35,BRICKS:36,STONE_BRICK:37,FARMLAND:38,SPRUCE_PLANK:39,WHEAT:40,CARROT:41,SPROUT:42},hd=[Qt.grassTop,Qt.grassSide,Qt.dirt,Qt.stone,Qt.sand,Qt.pathTop,Qt.pathSide,Qt.snowTop,Qt.snowSide,Qt.logSide,Qt.logTop,Qt.leaves(8834168),Qt.leaves(8178084),Qt.leaves(11196796),Qt.leaves(16167880),Qt.water,Qt.birch,Qt.cobble,Qt.deep,Qt.clay,Qt.gravel,Qt.planks,Qt.mossy,Qt.leaves(7320465),Qt.tuft,Qt.flower(16752575),Qt.flower(16777215),Qt.flower(16769658),Qt.flower(10473471),Qt.flower(13809919),Qt.reed,Qt.lily,Qt.shingle,Qt.plaster,Qt.plankGrey,Qt.glass,Qt.bricks,Qt.stoneBrick,Qt.farmland,Qt.sprucePlank,Qt.wheat,Qt.carrot,Qt.sprout],as=null;function Hy(){if(as)return as;let n=document.createElement("canvas");n.width=Ns*Os,n.height=Ns*Nh;let t=n.getContext("2d");return hd.forEach((e,i)=>{t.save(),t.translate(i%Os*Ns,Math.floor(i/Os)*Ns),t.beginPath(),t.rect(0,0,Ns,Ns),t.clip(),e(t,ld(101+i*7)),t.restore()}),as=new ln(n),as.magFilter=$e,as.minFilter=$e,as.generateMipmaps=!1,as.colorSpace=Ce,as}var Uh=new Map;function ci(n){if(Uh.has(n))return Uh.get(n);let t=document.createElement("canvas");t.width=t.height=Ns,hd[n](t.getContext("2d"),ld(101+n*7));let e=new ln(t);return e.magFilter=$e,e.minFilter=$e,e.generateMipmaps=!1,e.wrapS=e.wrapT=ro,e.colorSpace=Ce,Uh.set(n,e),e}var cd=n=>{let t=n%Os/Os,e=1-(Math.floor(n/Os)+1)/Nh,i=8e-4;return[t+i,e+i,t+1/Os-i,e+1/Nh-i]},At={AIR:0,GRASS:1,DIRT:2,STONE:3,SAND:4,PATH:5,SNOW:6,LOG:7,LEAF_G:8,LEAF_M:9,LEAF_L:10,LEAF_P:11,WATER:12,BIRCH:13,COBBLE:14,DEEP:15,CLAY:16,GRAVEL:17,LEAF_T:18,MOSSY:19,PLANKS:20,BRICK:21,FARM:22},Ke=[];Ke[At.GRASS]=[ut.GRASS_TOP,ut.GRASS_SIDE,ut.DIRT];Ke[At.DIRT]=[ut.DIRT,ut.DIRT,ut.DIRT];Ke[At.STONE]=[ut.STONE,ut.STONE,ut.STONE];Ke[At.SAND]=[ut.SAND,ut.SAND,ut.SAND];Ke[At.PATH]=[ut.PATH_TOP,ut.PATH_SIDE,ut.DIRT];Ke[At.SNOW]=[ut.SNOW_TOP,ut.SNOW_SIDE,ut.STONE];Ke[At.LOG]=[ut.LOG_TOP,ut.LOG,ut.LOG_TOP];Ke[At.BIRCH]=[ut.LOG_TOP,ut.BIRCH,ut.LOG_TOP];Ke[At.LEAF_G]=[ut.LEAF_G,ut.LEAF_G,ut.LEAF_G];Ke[At.LEAF_M]=[ut.LEAF_M,ut.LEAF_M,ut.LEAF_M];Ke[At.LEAF_L]=[ut.LEAF_L,ut.LEAF_L,ut.LEAF_L];Ke[At.LEAF_P]=[ut.LEAF_P,ut.LEAF_P,ut.LEAF_P];Ke[At.LEAF_T]=[ut.LEAF_T,ut.LEAF_T,ut.LEAF_T];Ke[At.WATER]=[ut.WATER,ut.WATER,ut.WATER];Ke[At.COBBLE]=[ut.COBBLE,ut.COBBLE,ut.COBBLE];Ke[At.DEEP]=[ut.DEEP,ut.DEEP,ut.DEEP];Ke[At.CLAY]=[ut.CLAY,ut.CLAY,ut.CLAY];Ke[At.GRAVEL]=[ut.GRAVEL,ut.GRAVEL,ut.GRAVEL];Ke[At.BRICK]=[ut.STONE_BRICK,ut.STONE_BRICK,ut.STONE_BRICK];Ke[At.FARM]=[ut.FARMLAND,ut.DIRT,ut.DIRT];Ke[At.MOSSY]=[ut.MOSSY,ut.MOSSY,ut.MOSSY];Ke[At.PLANKS]=[ut.PLANKS,ut.PLANKS,ut.PLANKS];var $a=n=>n===At.LEAF_G||n===At.LEAF_M||n===At.LEAF_L||n===At.LEAF_P||n===At.LEAF_T,Io=class{constructor(t,e,i,s,r,o){Object.assign(this,{x0:t,y0:e,z0:i,sx:s,sy:r,sz:o}),this.d=new Uint8Array(s*r*o),this.plants=[],this.tint=new Map}idx(t,e,i){let s=t-this.x0,r=e-this.y0,o=i-this.z0;return s<0||r<0||o<0||s>=this.sx||r>=this.sy||o>=this.sz?-1:(r*this.sz+o)*this.sx+s}get(t,e,i){let s=this.idx(t,e,i);return s<0?0:this.d[s]}set(t,e,i,s){let r=this.idx(t,e,i);r>=0&&(this.d[r]=s)}top(t,e){for(let i=this.y0+this.sy-1;i>=this.y0;i--){let s=this.get(t,i,e);if(s&&s!==At.WATER)return i}return null}plant(t,e,i,s,r){this.plants.push([t,e,i,s,r||1])}build(t){let e={p:[],n:[],u:[],c:[]},i={p:[],n:[],u:[],c:[]},s=[{d:[1,0,0],v:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],s:1,b:.84},{d:[-1,0,0],v:[[0,0,1],[0,1,1],[0,1,0],[0,0,0]],s:1,b:.84},{d:[0,1,0],v:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],s:0,b:1},{d:[0,-1,0],v:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],s:2,b:.62},{d:[0,0,1],v:[[1,0,1],[1,1,1],[0,1,1],[0,0,1]],s:1,b:.92},{d:[0,0,-1],v:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],s:1,b:.76}],r=t==null?.88:t;for(let f=0;f<this.sy;f++)for(let d=0;d<this.sz;d++)for(let g=0;g<this.sx;g++){let M=this.d[(f*this.sz+d)*this.sx+g];if(!M)continue;let x=this.x0+g,m=this.y0+f,T=this.z0+d,b=Ke[M];if(!b)continue;let E=this.tint.get((f*this.sz+d)*this.sx+g)||1;s.forEach(V=>{let I=this.get(x+V.d[0],m+V.d[1],T+V.d[2]);if(M===At.WATER){if(I!==At.AIR)return}else if(I&&I!==At.WATER&&!($a(I)&&!$a(M)))return;if($a(M)&&$a(I))return;let L=M===At.WATER?i:e,[O,A,S,B]=cd(b[V.s]),tt=M===At.WATER&&this.get(x,m+1,T)!==At.WATER,F=V.v.map(([yt,rt,Xt])=>[x+yt,m+(tt&&rt===1?r:rt),T+Xt]),G=V.b*E,Z=G,q=G,mt=G;if(M!==At.WATER&&I===At.WATER){let yt=0,rt=x+V.d[0],Xt=T+V.d[2];for(let Me=m+V.d[1];this.get(rt,Me,Xt)===At.WATER&&yt<6;Me++)yt++;let oe=Math.max(.32,1-.2*yt);Z=G*oe*.62,q=G*oe*.82,mt=G*Math.min(1,oe*1.05)}let j=V.d[1]!==0?[[O,A],[S,A],[S,B],[O,B]]:[[O,A],[O,B],[S,B],[S,A]];[0,1,2,0,2,3].forEach(yt=>{L.p.push(...F[yt]),L.n.push(...V.d),L.u.push(...j[yt]),L.c.push(Z,q,mt)})})}let o=f=>{let d=new Oe;return d.setAttribute("position",new de(f.p,3)),d.setAttribute("normal",new de(f.n,3)),d.setAttribute("uv",new de(f.u,2)),d.setAttribute("color",new de(f.c,3)),d},a=Hy(),c=new Rt(o(e),new ye({map:a,vertexColors:!0}));c.castShadow=!0,c.receiveShadow=!0,c.userData.keepBatch=!0;let l=new Rt(o(i),new ye({map:a,vertexColors:!0,transparent:!0,opacity:.84,depthWrite:!1}));l.receiveShadow=!0,l.userData.keepBatch=!0,l.renderOrder=1;let h={p:[],n:[],u:[],c:[]};this.plants.forEach(([f,d,g,M,x])=>{let[m,T,b,E]=cd(M),V=.9*x,I=.45*x;[[[-I,-I],[I,I]],[[-I,I],[I,-I]]].forEach(([[L,O],[A,S]])=>{let B=[[f+L,d,g+O],[f+A,d,g+S],[f+A,d+V,g+S],[f+L,d+V,g+O]],tt=[[m,T],[b,T],[b,E],[m,E]];[0,1,2,0,2,3].forEach(F=>{h.p.push(...B[F]),h.n.push(0,1,0),h.u.push(...tt[F]),h.c.push(1,1,1)})})});let u=new Rt(o(h),new ye({map:a,vertexColors:!0,alphaTest:.5,side:_n}));return u.userData.keepBatch=!0,{solid:c,water:l,plants:u}}};function Rr(n,t,e,i,s,r){let o={oak:[At.LEAF_G,At.LEAF_L][r()*2|0],birch:At.LEAF_L,mint:At.LEAF_M,cherry:At.LEAF_P,pine:At.LEAF_T}[s]||At.LEAF_G,a=s==="birch"?At.BIRCH:At.LOG,c=(h,u,f,d)=>{n.get(h,u,f)||n.set(h,u,f,d)};if(s==="pine"){let h=6+(r()*3|0);for(let f=0;f<h;f++)n.set(t,e+f,i,At.LOG);let u=2;for(let f=2;f<=h;f++){let d=f===h?0:(h-f)%2===0?Math.max(1,u-1):u;for(let g=-d;g<=d;g++)for(let M=-d;M<=d;M++)Math.abs(g)+Math.abs(M)<=d+(d>1?0:1)&&!(g===0&&M===0&&f<h)&&c(t+g,e+f,i+M,o);f%2===0&&u>1&&f>h/2&&u--}c(t,e+h,i,o),c(t,e+h+1,i,o);return}let l=(s==="birch"?5:4)+(r()*2|0);for(let h=0;h<l;h++)n.set(t,e+h,i,a);for(let h=l-2;h<=l+1;h++){let u=h>=l?1:2;for(let f=-u;f<=u;f++)for(let d=-u;d<=u;d++)u===2&&Math.abs(f)===2&&Math.abs(d)===2&&r()<.75||h===l+1&&Math.abs(f)+Math.abs(d)>1||c(t+f,e+h,i+d,o)}}function ud(n,t,e,i){let s=n.attributes.uv,r=[[i,e],[i,e],[t,i],[t,i],[t,e],[t,e]];for(let o=0;o<6;o++)for(let a=0;a<4;a++){let c=o*4+a;s.setXY(c,s.getX(c)*r[o][0],s.getY(c)*r[o][1])}return s.needsUpdate=!0,n}var Cr=16,Lo=n=>{if(typeof n=="number")return n;if(!n)return 16777215;if(n[0]==="#")return parseInt(n.length===4?n.slice(1).split("").map(e=>e+e).join(""):n.slice(1,7),16);let t=n.match(/(\d+)\D+(\d+)\D+(\d+)/);return t?+t[1]<<16|+t[2]<<8|+t[3]:16777215},Mi=(n,t)=>{n=Lo(n);let e=i=>Math.max(0,Math.min(255,Math.round(i*t)));return e(n>>16&255)<<16|e(n>>8&255)<<8|e(n&255)},cs=(n,t,e)=>{let i=n*374761393+t*668265263+e*2147483647|0;return i=(i^i>>>13)*1274126177,((i^i>>>16)>>>0)/4294967296};function Vy(){let n=new Map,t=new Map,e=(s,r,o)=>s+","+r+","+o,i={S:n,G:t,put(s,r,o,a,c){s=Math.round(s),r=Math.round(r),o=Math.round(o),!(r<0)&&(c&&n.has(e(s,r,o))||((c?t:n).set(e(s,r,o),Lo(a)),c||t.delete(e(s,r,o))))},del(s,r,o){n.delete(e(s,r,o)),t.delete(e(s,r,o))},has(s,r,o){return n.has(e(s,r,o))},each(s){for(let r=0;r<20;r++)for(let o=-2;o<Cr+2;o++)for(let a=-2;a<Cr+2;a++)s(a,r,o)},fill(s,r,o){i.each((a,c,l)=>{s(a+.5,c+.5,l+.5)&&i.put(a,c,l,typeof r=="function"?r(a,c,l):r,o)})},cuboid(s,r,o,a,c,l,h,u){for(let f=r;f<c;f++)for(let d=o;d<l;d++)for(let g=s;g<a;g++)i.put(g,f,d,typeof h=="function"?h(g,f,d):h,u)},cyl(s,r,o,a,c,l,h,u,f){h=h==null?o:h;for(let d=a;d<c;d++){let g=c-a<=1?o:o+(h-o)*(d-a)/(c-a-1);for(let M=-2;M<Cr+2;M++)for(let x=-2;x<Cr+2;x++){let m=Math.hypot(x+.5-s,M+.5-r);m<=g&&(!u||m>g-u)&&i.put(x,d,M,typeof l=="function"?l(x,d,M):l,f)}}},ell(s,r,o,a,c,l,h,u){i.fill((f,d,g)=>{let M=(f-s)/a,x=(d-r)/c,m=(g-o)/l;return M*M+x*x+m*m<=1&&(!u||u(f,d,g))},h)},log(s,r,o,a,c,l){for(let h=s;h<r;h++)for(let u=0;u<20;u++)for(let f=-2;f<Cr+2;f++)Math.hypot(u+.5-o,f+.5-a)<=c&&i.put(h,u,f,typeof l=="function"?l(h,u,f):l)},top(s,r){for(let o=19;o>=0;o--)if(i.has(s,o,r))return o;return-1},sprinkle(s,r,o,a){s.forEach(([c,l],h)=>{let u=r[h%r.length];if(!u)return;let f=-1;for(let d=0;d<(a||o||1);d++)for(let g=0;g<(o||1);g++)f=Math.max(f,i.top(c+g,l+d));for(let d=0;d<(a||o||1);d++)for(let g=0;g<(o||1);g++)i.put(c+g,f+1,l+d,u)})}};return i}var ct=8,Oh=[[4,5],[9,4],[6,9],[10,9],[3,8],[8,11],[11,6],[5,12]],fd={bowl(n,t){n.cyl(ct,ct,3.2,0,1,14930886),n.cyl(ct,ct,3.2,1,2,16777215),n.cyl(ct,ct,3.8,2,6,t.soup||"#f3d9a8",6.2),n.cyl(ct,ct,4.2,1,7,(e,i)=>i===6?16165309:Mi(16777215,.93+i*.012),7.6,1.2),t.noodle&&n.fill((e,i,s)=>i>5&&i<6.9&&Math.hypot(e-ct,s-ct)<5.6&&(Math.floor(e)+Math.floor(s)*2)%5===0,t.noodle),n.sprinkle(Oh.slice(0,6),t.top||[],2,2),t.egg&&(n.cuboid(9,6,9,12,7,11,16777215),n.put(10,7,10,16761402))},pot(n,t){n.cyl(ct,ct,6.8,0,6,(e,i)=>i===5?10132136:9079448,6.8,1.1),n.cyl(ct,ct,6,0,1,7631999),n.cyl(ct,ct,5.8,1,5,t.soup||"#e8603f"),n.cuboid(0,4,7,1,5,9,7631999),n.cuboid(15,4,7,16,5,9,7631999),n.sprinkle(Oh,t.top||[],2,1)},plate(n,t){n.cyl(ct,ct,6.4,0,1,15260879),n.cyl(ct,ct,7.8,1,2,16777215),n.cyl(ct,ct,6.2,1,2,16183014),t.rice&&n.ell(t.main?5.5:ct,2,ct,t.main?3.6:5,2.8,t.main?4.2:4.6,(e,i,s)=>Mi(t.rice,.94+cs(e,i,s)*.1),(e,i)=>i>=2),t.sauce&&n.cyl(t.rice?10.5:ct,ct,t.rice?3.4:5.2,2,3,t.sauce),t.main&&(n.cuboid(8,2,5,13,4,11,t.main),n.cuboid(8,4,5,13,5,11,Mi(t.main,1.2))),t.egg&&(n.cyl(4.5,11.5,2.4,2,3,16777215),n.put(4,3,11,16761402)),t.veg&&(n.cuboid(11,2,11,14,3,13,t.veg),n.put(12,3,12,Mi(t.veg,.8))),n.sprinkle(Oh,t.dots||[],2,2)},bread(n){n.ell(ct,2.6,ct,7.2,2.6,2.8,15250538,(t,e)=>e>=0);for(let t=3;t<13;t++)for(let e=3;e<6;e++)for(let i=7;i<9;i++)n.del(t,e,i);for(let t=3;t<13;t++)n.put(t,3,7,["#ff8f7a","#7fc46a","#b5654a","#ffb3a3"][(t>>1)%4]),n.put(t,3,8,t%2?"#7fc46a":"#f6e0b8");[3,6,9,12].forEach(t=>{let e=n.top(t,6);n.put(t,e,6,13208126)})},xeo(n){n.fill((t,e,i)=>e<3&&i>=ct&&Math.hypot(t-ct,i-ct)<=7.2-(e>2?1:0),(t,e,i)=>Math.hypot(t-ct,i-ct)>6.3?14262842:e===2?16767338:16172618),[[5,"#ff9f8f"],[7,"#7fc46a"],[9,"#ffffff"],[11,"#7fc46a"]].forEach(([t,e])=>{n.put(t,0,7,e),n.put(t,1,7,e)})},rolls(n,t){n.cyl(ct,ct,7.6,0,1,16777215),[4,8,12].forEach(e=>n.log(2,14,2.6,e,1.7,(i,s,r)=>i===13||i===2?Lo(t.edge):t.fill&&cs(i,s,r)>.86?Lo(t.fill[(i+s)%2]):Mi(t.roll,.95+cs(i,s,r)*.12)))},bun(n,t){n.ell(ct,0,ct,6.2,6,6.2,(e,i,s)=>i>4&&Math.hypot(e-ct,s-ct)<1.8?14204580:t.bun,(e,i)=>i>=0),n.cyl(ct,ct,5,0,1,14930886)},skewer(n,t){n.cuboid(0,3,7,16,4,8,12883572),(t.bits||[]).forEach((e,i)=>n.cuboid(2+i*3,1,5,4+i*3+i%2,6,10,(s,r)=>r===5?Mi(e,1.2):e))},corn(n){n.log(2,13,2.8,ct,2.4,(t,e,i)=>(t+e+i)%2?16765803:15906874),n.cuboid(13,1,7,16,4,9,12883572),n.cuboid(5,0,3,13,1,6,8373354),n.cuboid(5,0,10,13,1,13,8373354),n.cuboid(6,1,4,11,2,5,6989914)},potato(n){n.ell(ct,2.4,ct,6.5,2.6,3.6,10111578,(t,e)=>e>=0);for(let t=4;t<13;t++)for(let e=7;e<10;e++){let i=n.top(t,e);n.put(t,i,e,16167770)}n.put(4,3,6,6961728),n.put(12,2,10,6961728)},sushi(n,t){[[2,4],[9,9]].forEach(([e,i])=>{n.cuboid(e,0,i,e+5,3,i+3,(s,r,o)=>Mi(16777215,.93+cs(s,r,o)*.08)),n.cuboid(e-1,3,i,e+6,4,i+3,t.fish||"#ff9f80"),n.cuboid(e,4,i,e+5,5,i+3,Mi(t.fish||"#ff9f80",1.12)),n.cuboid(e+2,0,i-1,e+3,5,i+4,3820090),n.cuboid(e+2,5,i,e+3,6,i+3,3820090)})},onigiri(n){n.fill((t,e,i)=>e<11&&i>5&&i<11&&Math.abs(t-ct)<=(11.5-e)*.55,(t,e,i)=>Mi(16777215,.94+cs(t,e,i)*.07)),n.cuboid(5,0,5,11,4,12,3820090)},balls(n,t){n.cyl(ct,ct,7.4,0,1,16777215),[[4,6],[9,5],[12,10],[6,11],[9,9]].forEach(([e,i])=>{n.ell(e,2.6,i,2.3,2.1,2.3,t.ball||"#d99a4e",(s,r)=>r>=1),n.put(e,4,i,t.sauce||"#7a3f2c"),n.put(e-1,4,i,t.sauce||"#7a3f2c"),n.put(e,5,i,8373354)})},kimbap(n){n.cyl(ct,ct,7.4,0,1,16777215),[[4,5],[11,6],[7,11]].forEach(([t,e])=>{n.cyl(t,e,2.8,1,4,3095088),n.cyl(t,e,2.1,1,4,16777215),n.put(t,3,e,16765803),n.put(t-1,3,e,16748378),n.put(t,3,e-1,8373354)})},dumpling(n){[[4,5],[11,6],[7,11]].forEach(([t,e],i)=>{n.ell(t,.5,e,3.6,2.6,2.4,(s,r)=>r===0?14921834:r>=2&&(s+i)%2?15259320:16313560,(s,r)=>r>=0)})},pizza(n){n.fill((t,e,i)=>e<2&&i>2&&Math.abs(t-ct)<=(15-i)*.55,(t,e)=>e===1?16765803:15250538),n.cuboid(1,0,1,15,3,3,14260814),n.cuboid(2,3,1,14,4,3,15250538),[[6,5],[9,6],[7,9],[8,12]].forEach(([t,e])=>n.cuboid(t,2,e,t+2,3,e+2,14241850)),[[5,7],[10,9],[8,4]].forEach(([t,e])=>n.put(t,2,e,8373354))},burger(n){n.cyl(ct,ct,6.2,0,2,15246666),n.cyl(ct,ct,6.6,2,3,8373354),n.cyl(ct,ct,6.4,3,5,8011564),n.cuboid(2,5,2,14,6,14,16765803),n.cyl(ct,ct,5.6,6,7,15224895),n.ell(ct,7,ct,6.4,4.6,6.4,15246666,(t,e)=>e>=7),[[5,6],[9,5],[7,9],[10,9],[6,11]].forEach(([t,e])=>n.put(t,n.top(t,e)+1,e,16774102))},fries(n){[[4,6],[6,8],[8,6],[10,8],[5,9],[9,9],[7,7],[11,6]].forEach(([t,e],i)=>n.cuboid(t,4,e,t+1,11+i%3,e+1,(s,r)=>r>=10+i%3?15906874:16765803)),n.cyl(ct,ct,4.6,0,9,15224895,5.4),n.cuboid(6,3,12,10,6,13,16777215)},drumstick(n){n.ell(6,3.6,ct,4.8,3.6,3.8,(t,e)=>e>5?15250538:14260814,(t,e)=>e>=0),n.log(10,14,3,ct,1.1,16775406),n.ell(14.2,3.4,7,1.4,1.4,1.4,16775406),n.ell(14.2,3.4,9,1.4,1.4,1.4,16775406)},hotdog(n){n.ell(ct,2,ct,7.2,2.4,3.4,15250538,(t,e,i)=>e>=0&&!(e>2&&Math.abs(i-ct)<1.2)),n.log(0,16,3.2,ct,1.6,14241850);for(let t=2;t<14;t++)n.put(t,5,ct-1+(t>>1)%2,16765803)},flan(n){n.cyl(ct,ct,7.4,0,1,16777215),n.cyl(ct,ct,5.4,1,7,(t,e)=>e===6?9062954:16767114,4.2),[[4,8],[11,7],[8,4],[7,12]].forEach(([t,e])=>{n.put(t,5,e,9062954),n.put(t,4,e,9062954)})},glass(n,t){n.cyl(ct,ct,3.6,0,13,15267583,3.6,.9,!0),n.cyl(ct,ct,3.6,0,1,13165810);let e=1;(t.layers||[]).forEach(i=>{n.cyl(ct,ct,2.8,e,e+3,i),e+=3}),n.cyl(ct,ct,2.8,e,e+1,t.top||"#ffffff"),n.cuboid(9,6,8,10,16,9,16748464)},cone(n,t){n.cyl(ct,ct,.8,0,8,(e,i,s)=>(e+i+s)%2?15250538:14260814,3.4),n.ell(ct,10.5,ct,4.4,4,4.4,t.scoop||"#ffb6d0"),n.put(ct,15,ct,15224895),n.put(ct,14,ct,15224895)},cake(n){n.cyl(ct,ct,6.2,0,6,(t,e,i)=>Math.hypot(t+.5-ct,i+.5-ct)>5.3&&(e===2||e===4)?16752575:16774112),n.cyl(ct,ct,6.4,6,7,16777215);for(let t=0;t<8;t++){let e=t/8*Math.PI*2;n.put(ct+Math.cos(e)*5,7,ct+Math.sin(e)*5,16777215)}n.cuboid(7,7,7,9,9,9,15224895),n.put(8,9,8,8373354)},donut(n){n.fill((t,e,i)=>{let s=Math.hypot(t-ct,i-ct);return e<4&&(s-4.4)**2+(e-1.6)**2<=2.9**2},(t,e)=>e>=2?16752575:15250538),[[4,6,16777215],[11,6,10473471],[6,11,16765803],[11,10,16777215],[8,3,10473471]].forEach(([t,e,i])=>n.put(t,n.top(t,e)+1,e,i))},cookie(n){n.cyl(ct,ct,6.6,0,2,(t,e,i)=>Mi(15250538,.95+cs(t,e,i)*.1)),n.cyl(ct,ct,5,2,3,15250538),[[5,6],[9,5],[7,9],[11,9],[5,11],[9,12]].forEach(([t,e])=>n.put(t,n.top(t,e),e,6961706))},mochi(n){n.cuboid(1,0,3,15,1,13,14207160),[[5,9,16765414],[11,9,13495501],[8,5,16774880]].forEach(([t,e,i])=>n.ell(t,1,e,3.2,3,3.2,i,(s,r)=>r>=1))},cup(n,t){n.cyl(ct,ct,3.2,0,12,15792383,3.9,.9,!0),n.cyl(ct,ct,3.2,0,1,13690610),n.cyl(ct,ct,2.4,1,10,t.drink||"#d9b08a",3),t.cream&&n.cyl(ct,ct,3,10,12,16777215),t.boba&&[[6,7],[8,9],[10,8],[7,10],[9,6]].forEach(([e,i])=>n.put(e,1,i,3811882)),t.ice&&[[6,7],[9,9]].forEach(([e,i])=>n.cuboid(e,9,i,e+2,11,i+2,16777215,!0)),t.slice&&n.fill((e,i,s)=>e>11&&e<13&&Math.hypot(i-11,s-ct)<2.4,(e,i,s)=>Math.hypot(i-11,s-ct)>1.6?16777215:Lo(t.slice)),n.cyl(ct,ct,4.2,12,13,14215410,4.2,.9,!0),n.cuboid(9,6,8,10,17,9,16748464)},coconut(n){n.ell(ct,4.6,ct,5.8,5,5.8,(t,e,i)=>cs(t,e,i)>.85?6989914:8373354,(t,e)=>e>=0&&e<9),n.cyl(ct,ct,3.2,8,9,16775920),n.cuboid(9,8,8,10,14,9,16748464)},mug(n,t){n.cyl(ct-1,ct,4.2,0,9,16777215,4.2,1),n.cyl(ct-1,ct,4.2,0,1,15128780),n.cyl(ct-1,ct,3.2,1,8,t.drink||"#c98a4a"),n.cuboid(11,2,7,13,3,9,16777215),n.cuboid(11,6,7,13,7,9,16777215),n.cuboid(12,3,7,13,6,9,16777215),[[6,10],[8,12],[7,14]].forEach(([e,i])=>n.put(e,i,ct,16777215,!0))}},Gy=[[[1,0,0],[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],.86],[[-1,0,0],[[0,0,1],[0,1,1],[0,1,0],[0,0,0]],.86],[[0,1,0],[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],1],[[0,-1,0],[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],.6],[[0,0,1],[[1,0,1],[1,1,1],[0,1,1],[0,0,1]],.93],[[0,0,-1],[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],.93]];function dd(n,t,e,i){let s=[],r=[],o=[],a=[],c=new re;n.forEach((h,u)=>{let[f,d,g]=u.split(",").map(Number),M=.94+cs(f,d,g)*.1;Gy.forEach(([x,m,T])=>{let b=f+x[0]+","+(d+x[1])+","+(g+x[2]);if(n.has(b)||t&&t.has(b))return;c.setHex(h,Ce);let E=s.length/3;m.forEach(([V,I,L])=>{s.push((f+V-ct)*e,(d+I)*e,(g+L-ct)*e),r.push(x[0],x[1],x[2]),o.push(c.r*T*M,c.g*T*M,c.b*T*M)}),a.push(E,E+1,E+2,E,E+2,E+3)})});let l=new Oe;return l.setAttribute("position",new de(s,3)),l.setAttribute("normal",new de(r,3)),l.setAttribute("color",new de(o,3)),l.setIndex(a),new Rt(l,i)}var Wy=new ye({vertexColors:!0}),Xy=new ye({vertexColors:!0,transparent:!0,opacity:.42,depthWrite:!1}),Fh={};function Wi(n,t,e){let i=n+JSON.stringify(t||{});if(!Fh[i]){let c=Vy();(fd[n]||fd.bowl)(c,t||{}),Fh[i]=c}let s=Fh[i],r=(e||.4)/Cr,o=new $t,a=dd(s.S,null,r,Wy);if(a.castShadow=!0,o.add(a),s.G.size){let c=dd(s.G,s.S,r,Xy);c.renderOrder=2,o.add(c)}return o}var Yy={land:{W:320,H:236,houses:[[16,116],[52,116],[88,116],[124,116],[172,116],[208,116],[244,116],[16,150],[52,150],[192,23],[66,24],[88,150],[124,150],[16,186],[52,186],[88,186],[124,187],[180,152]],hall:[134,38],pond:[264,206],pondR:[8,4],hill:{x:160,y:46,w:216,h:74,r:12,height:3},ramp:{x:160,from:83,to:110.5},lot:{house:9,x0:172,y0:12,x1:258,y1:66,car:[226,54.4],swing:[186,40]},roads:[[8,110.5,312,110.5],[8,144.5,312,144.5],[8,180.5,206,180.5],[8,214.5,170,214.5],[46,110.5,46,214.5],[160,110.5,160,214.5],[64,70,258,70],[160,70,160,110.5]],river:[[292,30],[296,70],[292,110.5],[288,144.5],[282,175],[272,194]],mountains:[[-22,-32.5,5,11],[-8,-34.5,6,14],[8,-34.5,5.5,12],[22,-32,5,11],[33,-26,4.5,9]]},port:{W:200,H:360,houses:[[8,132],[8,184],[8,236],[8,288],[168,132],[168,184],[168,236],[168,288],[56,134],[132,51],[16,56],[88,134],[120,134],[56,186],[88,186],[120,186],[60,239],[116,239]],hall:[68,30],pond:[100,318],pondR:[6.5,3.6],hill:{x:100,y:52,w:184,h:96,r:12,height:3},ramp:{x:100,from:100,to:124.5},lot:{house:9,x0:110,y0:40,x1:186,y1:90,car:[166,81.6],swing:[122,66]},roads:[[44.5,124.5,155.5,124.5],[44.5,124.5,44.5,330],[155.5,124.5,155.5,312],[44.5,162.5,155.5,162.5],[44.5,214.5,155.5,214.5],[44.5,274.5,155.5,274.5],[16,94,186,94],[100,94,100,124.5]],river:[[206,24],[210,120],[206,230],[200,300],[170,330],[128,322]],mountains:[[-16,-48.5,4.5,10],[-2,-49.5,5,12],[12,-49,4.5,11],[24,-45.5,4,9]]}},Ne,tn,Cn,se,Xn,vn,Hs,jn,Bn,ls,Lr,In,Fn;function bd(n){Ne=Yy[n];let t=(o,a)=>[(o-Ne.W/2)/4,(a-Ne.H/2)/4];tn=Ne.houses.map(([o,a])=>t(o+12,a+11)),Cn=t(Ne.hall[0],Ne.hall[1]);let e=t(Ne.pond[0],Ne.pond[1]);se={x:e[0],z:e[1],rx:Ne.pondR[0],rz:Ne.pondR[1]},Xn=Ne.roads.map(([o,a,c,l])=>t(o,a).concat(t(c,l)));let i=t(Ne.hill.x,Ne.hill.y);Hs={x:i[0],z:i[1],hw:Ne.hill.w/8,hd:Ne.hill.h/8,r:Ne.hill.r/4,h:Ne.hill.height},jn={x:t(Ne.ramp.x,0)[0],z0:t(0,Ne.ramp.from)[1],z1:t(0,Ne.ramp.to)[1],hw:1.1},Bn=Ne.river.map(([o,a])=>{let c=t(o,a);return{x:c[0],z:c[1]}}),ls=Ne.mountains.map(o=>[o[0],o[1],o[2]*1.25,o[3]*1.5]);{let o=Bn[0],a=0,c=1e9;ls.forEach(([g,M],x)=>{let m=Math.hypot(g-o.x,M-o.z);m<c&&(c=m,a=x)});let l=ls[a],h=Bn[1].x-l[0],u=Bn[1].z-l[1],f=Math.hypot(h,u)||1;l=ls[a]=[l[0]+h/f*1.5,l[1]+u/f*1.5,Math.max(l[2],8),Math.max(l[3],18)],h=Bn[1].x-l[0],u=Bn[1].z-l[1],f=Math.hypot(h,u)||1,Fn={i:a,x:l[0],z:l[1],r:l[2],h:l[3],dx:h/f,dz:u/f},Bn[0]={x:l[0]+Fn.dx*l[2]*.45,z:l[1]+Fn.dz*l[2]*.45};let d=Bn[Bn.length-1];Math.hypot(d.x-se.x,d.z-se.z)<22&&Bn.push({x:se.x+(d.x-se.x)*.25,z:se.z+(d.z-se.z)*.25})}if(Lr=tn.map((o,a)=>Ne.faces&&Ne.faces[a]||0),In=null,Ne.lot){let o=Ne.lot,a=t(o.x0,o.y0),c=t(o.x1,o.y1);In={house:o.house,x0:a[0],z0:a[1],x1:c[0],z1:c[1],car:t(o.car[0],o.car[1]),swing:t(o.swing[0],o.swing[1])}}let s=Ne.W/8+11,r=Ne.H/8+11;vn={a:s,b:r,n:2.6,w:s*2,d:r*2}}function nc(n,t){let e=Hs,i=Math.abs(n-e.x)-(e.hw-e.r),s=Math.abs(t-e.z)-(e.hd-e.r);return Math.hypot(Math.max(i,0),Math.max(s,0))+Math.min(Math.max(i,s),0)-e.r}var Uo=(n,t)=>Math.abs(n-jn.x)<jn.hw&&t>=jn.z0-.4&&t<=jn.z1;function Pn(n,t){return nc(n,t)<=0?Hs.h:Uo(n,t)?Hs.h*Math.max(0,Math.min(1,1-(t-jn.z0)/(jn.z1-jn.z0))):0}var Bh=(n,t,e)=>{let i=nc(n,t);return i>-.5-(e||0)&&i<.9+(e||0)&&!Uo(n,t)};function zs(n,t){let e=1e9;for(let i=1;i<Bn.length;i++){let s=Bn[i-1],r=Bn[i],o=r.x-s.x,a=r.z-s.z,c=o*o+a*a,l=Math.max(0,Math.min(1,((n-s.x)*o+(t-s.z)*a)/(c||1)));e=Math.min(e,Math.hypot(n-(s.x+o*l),t-(s.z+a*l)))}return e}var pd=(n,t,e)=>!!In&&n>In.x0-(e||0)&&n<In.x1+(e||0)&&t>In.z0-(e||0)&&t<In.z1+(e||0),Sd=3,qy=2.1,Zy=Sd,vi=Zy/2;function Dr(n,t){let e=vn,i=Math.abs(Math.cos(n)),s=Math.abs(Math.sin(n));return Math.pow(Math.pow(i/e.a,e.n)+Math.pow(s/e.b,e.n),-1/e.n)*(1+.035*Math.sin(3*n+.7)+.025*Math.sin(5*n+2.1)+.015*Math.sin(8*n))*(t||1)}function Bs(n,t,e){return Math.hypot(n,t)<Dr(Math.atan2(t,n))-(e||0)}bd("land");var bi={grass:12576420,grassSide:10474377,dirt:13214334,dirt2:11569768,road:15983293,wall:16774888,wall2:15785156,door:12882799,frame:15323828,trunk:11042910,leaf:[10147472,8834176,11460768],water:9425898,sand:15983549,lily:8701828,roof:{pink:16165309,peach:16368540,blue:10473444,lav:13219054,mint:10738109,yellow:16111752,hall:15834032},flower:[16758465,16777215,16375946,14273008,16763304]},zh=new Map;function fe(n,t){let e=n+JSON.stringify(t||{});if(!zh.has(e)){let i=Object.assign({color:n},t||{});!("map"in i)&&!i.noMap&&(i.map=ci(ut.PLASTER)),delete i.noMap,zh.set(e,new ye(i))}return zh.get(e)}var Hh=new Map;function qe(n,t,e){let i=n+":"+(t==null?"x":t)+JSON.stringify(e||{});return Hh.has(i)||Hh.set(i,new ye(Object.assign({map:ci(n),color:t==null?16777215:t},e||{}))),Hh.get(i)}var kh=new Map;function wd(n,t,e){let i=n.toFixed(3)+","+t.toFixed(3)+","+e.toFixed(3);return kh.has(i)||kh.set(i,ud(new He(n,t,e),n,t,e)),kh.get(i)}function D(n,t,e,i,s=0,r=0,o=0,a){let c=new Rt(wd(n,t,e),a&&a.isMaterial?a:fe(i,a));return c.position.set(s,r,o),c.castShadow=!0,c.receiveShadow=!0,c}function un(n,t,e,i,s=0,r=0,o=0,a){let c=new Rt(new He(n,t,e),a&&a.isMaterial?a:fe(i,a));return c.position.set(s,r,o),c.castShadow=!0,c.receiveShadow=!0,c}function Vh(n){return()=>(n=n*1664525+1013904223>>>0,n/4294967296)}var kt=(n,t)=>n+Math.random()*(t-n),zn=(n,t,e)=>n+(t-n)*e,Ei=(n,t,e=0)=>((n-se.x)/(se.rx+e))**2+((t-se.z)/(se.rz+e))**2<1;var Zh=new Je({transparent:!0,opacity:0,depthWrite:!1}),Kh=[],ic=[];function oc(){let n=new ye({color:12576498,emissive:16765562,emissiveIntensity:0});return Kh.push(n),n}function hs(n){let t=new _o;t.moveTo(0,-.5),t.bezierCurveTo(-.9,.1,-.5,.75,0,.35),t.bezierCurveTo(.5,.75,.9,.1,0,-.5);let e=new Ba(t,{depth:.18,bevelEnabled:!1,curveSegments:10});return new Rt(e,fe(n,{emissive:n,emissiveIntensity:.25}))}function Ky(n,t,e){let i=new $t,s=qe(ut.SHINGLE,e),r=qe(ut.SPRUCE_PLANK),o=t+1.6,a=0;for(;;a++){let c=o-a,l=a*.5+.25;if(c<=.6)break;i.add(D(n+1,.5,1,0,0,l,c/2-.5,s)),i.add(D(n+1,.5,1,0,0,l,-c/2+.5,s)),c>2.2&&i.add(D(n+.2,.5,c-2,0,0,l,0,r))}return i.add(D(n+1.2,.35,.6,0,0,a*.5+.1,0,r)),i.userData.h=a*.5+.3,i}function Wh(){let n=new ye({color:16773576,emissive:16761963,emissiveIntensity:0,map:ci(ut.PLASTER)});ic.push(n);let t=new $t;return t.add(D(.3,.32,.3,0,0,0,0,n)),t.add(D(.34,.08,.34,4864564,0,.2,0)),t.add(D(.08,.12,.08,4864564,0,.3,0)),t}function md(n,t){let e=new $t,i=t?10:5,s=t?7:4,r=t?4:3,o=t?bi.roof.hall:bi.roof[n.roof]||bi.roof.pink,a=qe(ut.STONE_BRICK),c=qe(ut.COBBLE),l=qe(ut.LOG),h=qe(ut.PLANKS),u=qe(ut.SPRUCE_PLANK);e.add(D(i+.5,.3,s+.5,0,0,.15,0,a)),e.add(D(i,.9,s,0,0,.3+.45,0,c)),e.add(D(i-.02,r-.9,s-.02,0,0,.3+.9+(r-.9)/2,0,t?qe(ut.PLASTER,16774114):h));let f=t?[-i/2+.25,-2.6,2.6,i/2-.25]:[-i/2+.25,i/2-.25];[-1,1].forEach(L=>f.forEach(O=>e.add(D(.5,r,.5,0,O,.3+r/2,L*(s/2-.15),l)))),e.add(D(i+.3,.4,s+.3,0,0,.3+r-.2,0,u));let d=Ky(i,s,o);d.position.y=.3+r,e.add(d);let g=d.userData.h,M=t?2:1,x=t?2.6:2,m=new $t;m.position.set(-M/2,.3,s/2+.02),e.add(m),m.add(D(M,x,.12,0,M/2,x/2,0,u)),m.add(D(.12,.12,.08,16375946,M-.2,x/2,.08)),e.add(D(M-.04,x-.04,.05,4864560,0,.3+x/2,s/2-.02)),e.userData.hinge=m,e.add(D(M+1,.3,1,0,0,.15,s/2+.7,a)),e.add(D(M+1.2,.2,1,0,0,.3+x+.35,s/2+.5,u)),[-1,1].forEach(L=>{let O=Wh();O.position.set(L*(M/2+.4),.3+x-.2,s/2+.2),e.add(O)});let T=oc();T.map=ci(ut.GLASS),e.userData.wm=T;let b=.3+(t?2.3:1.75),E=t?[-3.6,-1.5,1.5,3.6]:[-1.55,1.55];if(E.forEach(L=>{e.add(D(1.2,1.1,.12,0,L,b,s/2+.02,u)),e.add(D(1,.9,.14,0,L,b,s/2+.04,T))}),[-1,1].forEach(L=>{e.add(D(.12,1.1,1.2,0,L*(i/2+.02),b,0,u)),e.add(D(.14,.9,1,0,L*(i/2+.04),b,0,T))}),t||(E.forEach(L=>{e.add(D(1.2,.3,.4,0,L,b-.7,s/2+.22,u)),[-.35,0,.35].forEach((O,A)=>e.add(D(.22,.22,.22,bi.flower[A],L+O,b-.45,s/2+.22)))}),e.add(D(1,2,1,0,i/4,.3+r+g*.45,-s/5,c)),e.userData.chimney=new U(i/4,.3+r+g*.45+1.2,-s/5)),n&&n.heart){let L=hs(16744350);L.scale.setScalar(.9),L.position.set(0,.3+r+g*.42,s/2+.42),e.add(L),e.userData.heart=L}let V=null;if(t){[-1.5,1.5].forEach(A=>e.add(D(.6,r,.6,0,A,.3+r/2,s/2+.35,a))),e.add(D(i+.4,.4,1,0,0,.3+r+.1,s/2+.35,a)),e.add(D(.2,3,.2,0,0,.3+r+g+1.4,0,l));let L=D(1.4,.8,.08,16751536,.75,.3+r+g+2.4,0);e.add(L),e.userData.flag=L;let O=new ye({color:16375946,emissive:16739179,emissiveIntensity:0,map:ci(ut.PLASTER)});V=new Rt(wd(.7,.7,.7),O),V.position.set(0,.3+r+g*.42,s/2+.95),e.add(V),e.add(D(1.4,1.4,.1,0,0,.3+r+g*.42,s/2+.8,u))}e.userData.top=.3+r+g+(t?3.2:.6);let I=new Rt(new He(i+.6,r+g+.3,s+.6),Zh);return I.position.y=(r+g+.3)/2,e.add(I),e.userData.pick=I,e.userData.bell=V,e.userData.doorZ=s/2+1.3,e}function Xh(n,t,e){let i=document.createElement("canvas");i.width=t,i.height=e,n(i.getContext("2d"),t,e);let s=new ln(i);return s.colorSpace=Ce,s.anisotropy=4,s}function Jh(n,t,e,i,s,r){r=r||0,n.userData.wm=s,n.userData.top=i+.9,n.userData.size={cx:r,hw:t/2+.4,hd:e/2+.3};let o=new Rt(new He(t+.6,i+.3,e+.6),Zh);return o.position.set(r,(i+.3)/2,0),n.add(o),n.userData.pick=o,n.userData.doorZ=e/2+1.3,n}function $h(n,t,e,i,s){let r=new $t;r.position.set(-t/2,.3,i),n.add(r),r.add(D(t,e,.1,s,t/2,e/2,0)),r.add(D(.06,.5,.06,14278115,t-.2,e/2,.07)),n.add(D(t-.04,e-.04,.05,3814720,0,.3+e/2,i-.04)),n.userData.hinge=r}function Jy(){let n=new $t,t=6.4,e=5.2,i=3,s=2.8,r=oc();n.add(D(t+5.4,.25,e+.6,15328478,2.3,.12,0)),n.add(D(t,i,e,16513784,0,.25+i/2,0)),[-2.15,2.15].forEach(M=>{n.add(D(1.7,2.45,.08,3814720,M,.25+1.3,e/2+.01)),n.add(D(1.55,2.3,.1,0,M,.25+1.3,e/2+.03,r))}),$h(n,1.15,2.3,e/2+.03,9067068),n.add(D(t+.3,.18,e+.3,4867664,0,.25+i+.09,0));let o=.25+i+.18,a=Xh((M,x,m)=>{for(let T=0;T<x;T+=4)M.fillStyle=T%8?"#c99166":"#bb8358",M.fillRect(T,0,4,m)},64,16),c=new ye({map:a}),l=new Rt(new He(t-.6,s,e-.4),c);l.position.set(-.3,o+s/2,-.4),l.castShadow=!0,l.receiveShadow=!0,n.add(l),n.add(D(t-.3,.16,e-.1,4867664,-.3,o+s+.08,-.4));let h=e/2-.4+.01-.2;n.add(D(2.9,2.35,.08,3814720,-.3,o+1.2,h+.02));let u=new Rt(new He(2.7,2.2,.06),new ye({color:12576498,transparent:!0,opacity:.6,emissive:16765562,emissiveIntensity:0}));u.position.set(-.3,o+1.2,h+.06),n.add(u),Kh.push(u.material),n.add(D(.05,2.2,.08,3814720,-.3,o+1.2,h+.08)),n.add(D(t-.4,.14,1.5,15328478,-.2,o+.07,e/2+.55));let f=new Rt(new He(t-.5,.75,.04),new ye({color:14217722,transparent:!0,opacity:.45}));f.position.set(-.2,o+.52,e/2+1.28),n.add(f),n.add(D(t-.5,.05,.07,3814720,-.2,o+.92,e/2+1.28)),[-2.5,-1.95,1.75,2.3].forEach((M,x)=>{n.add(D(.34,.32,.34,[15921906,9080729][x%2],M,o+.3,e/2+.95));let m=new Rt(new za(.26,2),fe(bi.leaf[x%3],{}));m.position.set(M,o+.62,e/2+.95),m.castShadow=!0,n.add(m)});let d=hs(16744350);d.scale.setScalar(.55),d.material=new ye({color:16744350,emissive:16732030,emissiveIntensity:.25}),d.position.set(-2.2,o+2.05,e/2-.55),n.add(d),n.userData.heart=d;let g=t/2+2.3;n.add(D(4.6,2.9,e,16513784,g,.25+1.45,0)),n.add(D(4.8,.16,e+.2,4867664,g,.25+2.98,0)),n.add(D(3.7,2.3,.08,5592926,g,.25+1.15,e/2+.02));for(let M=0;M<6;M++)n.add(D(3.7,.03,.1,7040630,g,.45+M*.38,e/2+.05));return n.add(D(.5,.05,.05,16777215,g+1.4,2.95,e/2+.12)),[-1,1].forEach(M=>n.add(D(.12,.85,.85,0,M*(t/2+.01)-(M>0,0),.25+1.6,-1.2,r))),n.userData.vip=!0,Jh(n,t+4.6,e,o+s+.2,r,2.3)}function $y(){let n=new $t,t=9.2,e=6.6,i=3.8,s=oc();n.add(D(t+.6,.25,e+.6,15326447,0,.12,0)),n.add(D(t,i,e,14273008,0,.25+i/2,0)),n.add(D(t+.4,.3,e+.4,16165309,0,.25+i+.15,0)),[-2.8,2.8].forEach(o=>{n.add(D(2.6,2,.1,16777215,o,1.5,e/2+.01)),n.add(D(2.4,1.8,.12,0,o,1.5,e/2+.03,s))}),$h(n,1.8,2.4,e/2+.03,15834032),[[-1.4,16773544],[0,16758465],[1.4,10934504]].forEach(([o,a])=>{let c=hs(a);c.scale.setScalar(.45),c.position.set(o,.25+i-.55,e/2+.02),n.add(c)});let r=new Rt(new hn(.55,20,14),fe(16027569));return r.position.set(3.2,.25+i+2.2,-1.5),r.castShadow=!0,n.add(r),n.add(D(.18,1.6,.18,3814720,3.2,.25+i+1.2,-1.5)),n.add(D(1.6,.3,1.6,3814720,3.2,.25+i+.45,-1.5)),Jh(n,t,e,i+2.4,s)}function jy(){let n=new $t,t=9.2,e=7,i=3.5,s=oc();n.add(D(t+.8,.22,e+.8,14605012,0,.11,0)),n.add(D(t,i,e,16513784,0,.22+i/2,0)),[[15895592,0],[3055195,.22],[14826299,.44]].forEach(([l,h])=>{n.add(D(t+.06,.2,e+.06,l,0,.22+i-.55-h,0))}),n.add(D(t+.5,.25,e+.5,15921906,0,.22+i+.12,0));let r=Xh((l,h,u)=>{l.fillStyle="#d8f1fa",l.fillRect(0,0,h,u);let f=["#ffb6c1","#f5d888","#a3d9bd","#a6d8e8","#f9c39c","#d9c9f0"];for(let d=0;d<4;d++){l.fillStyle="#c9e7f2",l.fillRect(0,12+d*28,h,3);for(let g=0;g<26;g++)l.fillStyle=f[(g+d)%f.length],l.fillRect(6+g*10,15+d*28,7,10+g%3*3)}},256,128),o=new ye({map:r,emissive:16773836,emissiveMap:r,emissiveIntensity:.1});[-2.65,2.65].forEach(l=>{n.add(D(3.4,2,.08,14605012,l,1.35,e/2+.01));let h=new Rt(new He(3.2,1.85,.1),o);h.position.set(l,1.35,e/2+.03),n.add(h)}),$h(n,1.7,2.3,e/2+.03,12576498);let a=Xh((l,h,u)=>{l.fillStyle="#ffffff",l.fillRect(0,0,h,u),l.fillStyle="#2e9e5b",l.fillRect(10,18,108,16),l.fillStyle="#f28c28",l.fillRect(10,40,108,16),l.fillStyle="#e23b3b",l.font="bold 86px sans-serif",l.textAlign="center",l.fillText("7",64,98),l.font="bold 20px sans-serif",l.fillText("ELEVEn",64,122)},128,128),c=new Rt(new He(1.5,1.5,.14),[fe(16777215),fe(16777215),fe(16777215),fe(16777215),new ye({map:a}),fe(16777215)]);return c.position.set(t/2-1.1,.22+i+1.05,e/2-.3),c.castShadow=!0,n.add(c),n.add(D(.12,.8,.12,14605012,t/2-1.1,.22+i+.35,e/2-.3)),[[15226446,-.5],[6131664,.45]].forEach(([l,h])=>{n.add(D(.8,1.8,.75,l,t/2+.45,1.12,e/2-1.2+h));let u=D(.04,.9,.55,0,t/2+.86,1.4,e/2-1.2+h,new ye({color:16775126,emissive:16773808,emissiveIntensity:.25}));n.add(u)}),[-4,-3.2].forEach(l=>n.add(D(.5,.5,.5,15895592,l,.47,e/2+.9))),n.userData.alwaysLit=!0,Jh(n,t,e,i+1.9,s)}function Qy(){let n=new $t,t=2500653,e=14278115,i=5202805;n.add(D(1.9,1,4.4,t,0,.95,0)),n.add(D(1.75,.78,2.7,t,0,1.85,-.35)),[[-1,0],[1,0]].forEach(([o])=>n.add(D(.03,.55,2.4,i,o*.885,1.9,-.35))),n.add(D(1.6,.55,.03,i,0,1.9,1.01)),n.add(D(1.6,.55,.03,i,0,1.9,-1.71)),n.add(D(1.92,.06,4.42,e,0,1.46,0)),n.add(D(1.3,.35,.05,1776672,0,1.05,2.21));for(let o=-2;o<=2;o++)n.add(D(.03,.3,.06,e,o*.22,1.05,2.22));[-1,1].forEach(o=>{let a=new Rt(new Ge(.17,.17,.08,14),fe(16775126,{emissive:16773808,emissiveIntensity:.35}));a.rotation.x=Math.PI/2,a.position.set(o*.72,1.12,2.22),n.add(a),n.add(D(.12,.12,.12,16754253,o*.95,1.5,1.95)),n.add(D(.22,.35,.05,14703183,o*.78,1,-2.22))}),n.add(D(1.94,.18,.2,1776672,0,.5,2.25)),n.add(D(1.94,.18,.2,1776672,0,.5,-2.25));let s=new Rt(new Ge(.4,.4,.24,16),fe(1776672));s.rotation.x=Math.PI/2,s.position.set(0,1.15,-2.35),n.add(s);let r=new Rt(new Ge(.22,.22,.26,12),fe(e));return r.rotation.x=Math.PI/2,r.position.set(0,1.15,-2.36),n.add(r),[[-.95,1.45],[.95,1.45],[-.95,-1.4],[.95,-1.4]].forEach(([o,a])=>{let c=new Rt(new Ge(.42,.42,.34,14),fe(1776672));c.rotation.z=Math.PI/2,c.position.set(o,.42,a),c.castShadow=!0,n.add(c);let l=new Rt(new Ge(.22,.22,.36,10),fe(e));l.rotation.z=Math.PI/2,l.position.set(o,.42,a),n.add(l)}),n.add(D(1.5,.05,2.2,3816514,0,2.27,-.35)),n}function t1(n,t){if(!In)return{posts:[],blocks:[]};let e=In,i={posts:[],blocks:[]},[s,r]=tn[e.house],[o,a]=e.car,c=t===Math.PI?e.z0:e.z1,l=Pn(s,r),h=[[s-1.2,s+1.2],[o-1.6,o+1.6]],u=(x,m)=>Math.abs(m-c)<.01&&h.some(([T,b])=>x>T&&x<b),f=(x,m,T,b)=>{let E=Math.hypot(T-x,b-m),V=Math.max(1,Math.round(E/1));for(let I=0;I<V;I++){let L=zn(x,T,(I+.5)/V),O=zn(m,b,(I+.5)/V);if(u(L,O))continue;let A=D(E/V+.02,.55,.22,16052716,L,l+.27,O);A.rotation.y=Math.atan2(T-x,b-m)+Math.PI/2,n.add(A);let S=D(E/V,.32,.3,8831614,L,l+.68,O);S.rotation.y=A.rotation.y,n.add(S),i.posts.push({x:L,z:O,r:.45})}};f(e.x0,e.z0,e.x1,e.z0),f(e.x1,e.z0,e.x1,e.z1),f(e.x1,e.z1,e.x0,e.z1),f(e.x0,e.z1,e.x0,e.z0),i.blocks.push({x:s+5.5,z:r,hw:2.5,hd:2.8});let d=Math.min(c,a)-1.5,g=Math.max(c,a)+.5;n.add(D(3.4,.05,Math.abs(g-d)+1.5,14144203,o,l+.025,(d+g)/2-.5));let M=Qy();return M.position.set(o,l,a),M.rotation.y=t,n.add(M),i.blocks.push({x:o,z:a,hw:1.2,hd:2.4}),i.car=M,i.exit={x:o,z:c+(t===Math.PI?-1.6:1.6)},n.add(D(1.3,.05,Math.abs(r-c),15392719,s,l+.03,(r+c)/2)),i}function e1(){let n=new $t;n.add(D(.16,2.2,.16,9206379,0,1.1,0));let t=new ye({color:16774351,emissive:16765562,emissiveIntensity:0});return ic.push(t),n.add(D(.5,.5,.5,0,0,2.45,0,t)),n.add(D(.62,.12,.62,9206379,0,2.76,0)),n}var n1=new ye({vertexColors:!0});function Td(n,t){let e=[];n.traverse(i=>{i.isMesh||e.push(i)}),e.forEach(i=>{let s=i.children.filter(c=>c.isMesh&&!(t&&t.includes(c))&&!c.material.transparent&&!c.material.map);if(s.length<2)return;let r=s.map(c=>{let l=c.geometry.clone();Object.keys(l.attributes).forEach(d=>{d!=="position"&&d!=="normal"&&l.deleteAttribute(d)}),l.index&&(l=l.toNonIndexed()),l.clearGroups(),c.updateMatrix(),l.applyMatrix4(c.matrix);let h=c.material.color,u=l.attributes.position.count,f=new Float32Array(u*3);for(let d=0;d<u;d++)f[d*3]=h.r,f[d*3+1]=h.g,f[d*3+2]=h.b;return l.setAttribute("color",new dn(f,3)),l}),o=Ja(r,!1);if(r.forEach(c=>c.dispose()),!o)return;s.forEach(c=>i.remove(c));let a=new Rt(o,n1);a.castShadow=!0,a.receiveShadow=!0,i.add(a)})}function tc(n,t,e,i,s,r,o){let a=new $t;a.position.set(s,r,o);let c=D(n,t,e,i,0,-t/2,0);return a.add(c),a}var ec=[{hair:5914688,skin:16768198,shirt:12824814,pants:6253194,style:"short",uniform:!0},{hair:3878703,skin:15976614,shirt:12824814,pants:6253194,style:"long",uniform:!0},{hair:11039050,skin:16769744,shirt:12824814,pants:6253194,style:"short",uniform:!0},{hair:3025462,skin:15580570,shirt:10738109,pants:6253178,style:"short"},{hair:2038564,skin:16768198,shirt:16758465,pants:9080760,style:"twin"},{hair:9067068,skin:16175024,shirt:16111752,pants:7170698,style:"cap",cap:15834032},{hair:4864570,skin:15317140,shirt:12824814,pants:6253194,style:"short",glasses:!0,uniform:!0},{hair:13208410,skin:16769744,shirt:10147472,pants:8161960,style:"long"},{hair:3878703,skin:15976614,shirt:12824814,pants:6253194,style:"bun",glasses:!0,uniform:!0},null,{hair:5914688,skin:15580570,shirt:14273008,pants:7170698,style:"long"},{hair:3025462,skin:16768198,shirt:16111752,pants:8161960,style:"bun"},{hair:9067068,skin:15976614,shirt:10473444,pants:6253178,style:"short",glasses:!0},{hair:3878703,skin:15317140,shirt:10738109,pants:7170698,style:"cap",cap:10738109},{hair:13208410,skin:16769744,shirt:13482478,pants:9080760,style:"twin"},{hair:2367010,skin:16175024,shirt:16368540,pants:8161960,style:"short"},{hair:5914688,skin:16768198,shirt:16758465,pants:7170698,style:"long"},{hair:2038564,skin:15580570,shirt:9226408,pants:5196378,style:"cap",cap:16165309},{hair:11039050,skin:16769744,shirt:16111752,pants:9075306,style:"bun"}],Yh={her:{hair:3877418,skin:16768198,shirt:16758465,pants:16758465,style:"long",dress:16165309},him:{hair:2367010,skin:15778976,shirt:10473444,pants:6253194,style:"short"}},gd=[{hair:3878703,skin:15976614,shirt:12824814,pants:6253194,style:"short",uniform:!0},{hair:9067068,skin:16769744,shirt:12824814,pants:6253194,style:"long",uniform:!0},{hair:2367010,skin:15317140,shirt:12824814,pants:6253194,style:"bun",uniform:!0}],Pe=1.75/32,qh=12*Pe;function Pr(n,t){let e=new re(n);return t&&(e.r=Math.min(1,e.r*t),e.g=Math.min(1,e.g*t),e.b=Math.min(1,e.b*t)),"#"+e.getHexString()}function Ad(n,t){let e=document.createElement("canvas");e.width=e.height=64;let i=e.getContext("2d"),s=(n.hair^n.shirt^n.skin)>>>0,r=()=>(s=s*1664525+1013904223>>>0,s/4294967296),o=(M,x,m,T,b,E)=>{for(let V=0;V<T;V++)for(let I=0;I<m;I++)i.fillStyle=Pr(b,1+(r()-.5)*(E==null?.1:E)),i.fillRect(M+I,x+V,1,1)},a=(M,x,m)=>{i.fillStyle=typeof m=="string"?m:Pr(m),i.fillRect(M,x,1,1)},c=5981750,l=n.skin,h=n.hair,u=n.shirt,f=n.pants,d=n.style==="long"||n.style==="twin"||n.dress;o(0,0,32,16,l,.06),o(8,0,8,8,h),o(24,8,8,d?8:6,h),[0,16].forEach(M=>{o(M,8,8,d?7:4,h),o(M+(M?6:0),12,2,d?4:2,h)}),o(8,8,8,2,h),a(8,10,h),a(15,10,h),a(9,10,h),n.style==="cap"&&(o(8,0,8,8,n.cap),o(8,8,8,2,n.cap),o(0,8,8,2,n.cap),o(16,8,8,2,n.cap),o(24,8,8,2,n.cap)),[[9,12],[13,12]].forEach(([M,x])=>{if(t){a(M,x+1,"#3a2e33"),a(M+1,x+1,"#3a2e33");return}a(M,x,"#ffffff"),a(M+1,x,"#3a2e33"),a(M,x+1,"#ffffff"),a(M+1,x+1,"#3a2e33")}),a(9,14,"#ffa3b5"),a(14,14,"#ffa3b5"),a(11,14,Pr(l,.78)),a(12,14,Pr(l,.78)),a(11,15,"#c9707c"),a(12,15,"#c9707c"),n.glasses&&([9,13].forEach(M=>{["#6b5a4e"].forEach(x=>{a(M-1,12,x),a(M+2,12,x),a(M-1,13,x),a(M+2,13,x)})}),a(11,12,"#6b5a4e"),a(12,12,"#6b5a4e")),o(16,16,24,16,u),o(20,16,8,4,u,.05),o(23,20,2,1,l),n.uniform&&(o(22,20,4,1,16777215),o(21,22,2,2,16373355),o(20,31,8,1,9403592)),n.dress?(o(16,26,24,6,n.dress),o(20,25,8,1,Pr(n.dress,.9)&&n.dress)):o(16,30,24,2,Pr(f,.85)&&f,.05),o(20,22,8,1,u,.25),[[40,16],[32,48]].forEach(([M,x])=>{o(M,x,16,16,u),o(M,x+4+5,16,7,l,.06),o(M+4,x,4,4,u),o(M+8,x,4,4,l)}),[[0,16],[16,48]].forEach(([M,x])=>{o(M,x,16,16,n.dress?l:f),n.dress&&o(M,x+4,16,3,n.dress),o(M,x+4+10,16,2,c,.05),o(M+8,x,4,4,c)});let g=new ln(e);return g.magFilter=$e,g.minFilter=$e,g.generateMipmaps=!1,g.colorSpace=Ce,g}function Ir(n,t,e,i,s){let r=new He(n*Pe,t*Pe,e*Pe),o=64,a=(h,u,f,d,g)=>{let M=h/o,x=(h+f)/o,m=1-u/o,T=1-(u+d)/o;return g?[x,m,M,m,x,T,M,T]:[M,m,x,m,M,T,x,T]},c=[a(i+e+n,s+e,e,t),a(i,s+e,e,t),a(i+e,s,n,e),a(i+e+n,s,n,e,!0),a(i+e,s+e,n,t),a(i+2*e+n,s+e,n,t)],l=r.attributes.uv;return c.forEach((h,u)=>{for(let f=0;f<4;f++)l.setXY(u*4+f,h[f*2],h[f*2+1])}),l.needsUpdate=!0,r}function sc(n){let t=new $t,e={},i=new ye({map:Ad(n)});e.mat=i,e.look=n;let s=(c,l,h,u)=>{let f=new Rt(c,i);return f.position.set(l,h,u),f.castShadow=!0,f.receiveShadow=!0,f},r=(c,l,h,u)=>{let f=new $t;return f.position.set(c,l,h),f.add(u),f};e.legR=r(-2*Pe,12*Pe,0,s(Ir(4,12,4,0,16),0,-6*Pe,0)),t.add(e.legR),e.legL=r(2*Pe,12*Pe,0,s(Ir(4,12,4,16,48),0,-6*Pe,0)),t.add(e.legL),e.body=s(Ir(8,12,4,16,16),0,18*Pe,0),t.add(e.body),e.armR=r(-6*Pe,23.5*Pe,0,s(Ir(4,12,4,40,16),0,-5.5*Pe,0)),t.add(e.armR),e.armL=r(6*Pe,23.5*Pe,0,s(Ir(4,12,4,32,48),0,-5.5*Pe,0)),t.add(e.armL);let o=new $t;o.position.y=24*Pe,t.add(o),e.head=o,o.add(s(Ir(8,8,8,0,0),0,4*Pe,0));let a=(c,l,h,u,f,d,g)=>{let M=un(l*Pe,h*Pe,u*Pe,c,f*Pe,d*Pe,g*Pe);o.add(M)};if(n.style==="bun"&&a(n.hair,3,3,3,0,9.3,-2),n.style==="twin"&&(a(n.hair,2,4,2,-4.6,3.5,-1.5),a(n.hair,2,4,2,4.6,3.5,-1.5)),n.style==="cap"&&a(n.cap,8,1,3,0,6.5,5),n.style==="long"&&a(n.hair,8,5,1,0,-1.5,-4.5),n.dress){let c=un(9*Pe,4*Pe,5*Pe,n.dress,0,12.5*Pe,0);t.add(c)}return e.kids=t.children.slice(),{g:t,parts:e}}var Rd=n=>n.style==="long"||n.style==="twin"||n.style==="bun";function Cd(n,t){return!n||!t||t==="f"===Rd(n)?n:Object.assign({},n,{style:(t==="f"?{short:"long",cap:"twin"}:{long:"short",twin:"cap",bun:"short"})[n.style]||(t==="f"?"long":"short"),cap:n.cap||n.shirt})}function i1(n,t){let e=sc(t);(n.parts.kids||[]).forEach(s=>n.g.remove(s)),e.parts.kids.forEach(s=>n.g.add(s));let i={};Object.keys(n.parts).forEach(s=>{s in e.parts||(i[s]=n.parts[s])}),n.parts=Object.assign(e.parts,i)}function s1(){let n=new $t,t={},e=16236938,i=14720350,s=16774118;n.add(un(.46,.4,.8,e,0,.5,0)),[-.12,.1].forEach(l=>n.add(un(.48,.06,.12,i,0,.71,l))),n.add(un(.36,.2,.5,s,0,.34,.05)),t.legs=[[-.14,.28],[.14,.28],[-.14,-.28],[.14,-.28]].map(([l,h])=>{let u=tc(.13,.32,.13,e,l,.34,h);return n.add(u),u});let r=new $t;r.position.set(0,.78,.48),n.add(r),t.head=r,r.add(un(.5,.42,.42,e,0,0,0)),r.add(un(.3,.16,.06,s,0,-.1,.21)),[-.15,.15].forEach(l=>{let h=new Rt(new xo(.11,.2,4),fe(i));h.position.set(l,.29,-.02),h.rotation.y=Math.PI/4,r.add(h);let u=un(.08,.1,.03,4010032,l*.8,.04,.215);r.add(u),(t.eyes=t.eyes||[]).push(u)}),r.add(un(.07,.05,.03,16752048,0,-.04,.23));let o=new $t;o.position.set(0,.62,-.38),n.add(o),t.tail=o;let a=un(.1,.1,.4,e,0,.05,-.18);o.add(a);let c=new $t;return c.position.set(0,.05,-.36),o.add(c),c.add(un(.1,.4,.1,i,0,.18,0)),o.rotation.x=.5,n.scale.setScalar(.6),Td(n,t.eyes),{g:n,parts:t}}function r1(){let n=new $t,t={},e=16774374,i=13211247;n.add(un(.56,.5,.95,e,0,.62,0)),n.add(un(.58,.3,.4,i,0,.76,-.15)),t.legs=[[-.17,.33],[.17,.33],[-.17,-.33],[.17,-.33]].map(([o,a])=>{let c=tc(.16,.4,.16,e,o,.42,a);return n.add(c),c});let s=new $t;s.position.set(0,.98,.55),n.add(s),t.head=s,s.add(un(.56,.52,.5,e,0,0,0)),s.add(un(.3,.24,.26,e,0,-.1,.34)),s.add(un(.13,.1,.06,4010032,0,-.02,.48)),s.add(un(.1,.12,.06,16748451,.05,-.24,.42)),[-.3,.3].forEach(o=>{let a=tc(.12,.42,.26,i,o,.2,-.02);a.rotation.z=o>0?-.15:.15,s.add(a);let c=un(.08,.11,.03,4010032,o*.45,.08,.26);s.add(c),(t.eyes=t.eyes||[]).push(c)});let r=tc(.12,.42,.12,i,0,.82,-.47);return r.rotation.x=-.9,n.add(r),t.tail=r,n.scale.setScalar(.62),Td(n,t.eyes),{g:n,parts:t}}function xd(n){let t=new $t,e=[16751211,16777215,16757575][n%3],i=new Rt(new hn(.28,10,8),fe(e));if(i.scale.set(.7,.6,1.4),t.add(i),n%3===1){let r=new Rt(new hn(.16,8,6),fe(16744272));r.position.set(0,.1,.05),r.scale.set(1,.6,1.4),t.add(r)}let s=new Rt(new xo(.22,.35,4),fe(e===16777215?16751211:e));return s.rotation.x=Math.PI/2,s.position.z=-.5,t.add(s),t.userData.tail=s,t}function o1(n){let t=new $t,e=new ye({color:n,side:_n}),i=()=>{let o=new Rt(new ss(.32,.26),e);o.position.x=.17;let a=new $t;return a.add(o),a},s=i(),r=i();return r.scale.x=-1,t.add(s,r),t.userData.l=s,t.userData.r=r,t}function _d(){let n=new $t,t=15392715,e=3.5,i=qe(ut.LOG),s=qe(ut.LEAF_P);n.add(D(1,e+1.5,1,0,-2,(e+1.5)/2,-.2,i)),n.add(D(3.2,.5,.5,0,-.4,e+.05,0,i)),[[-2,e+2.5,-.3,4,2,3],[-2,e+3.5,-.3,2,1,2],[-.6,e+1.6,-.6,2,1,2],[-3.4,e+1.6,-.2,1,1,2]].forEach(([c,l,h,u,f,d])=>n.add(D(u,f,d,0,c,l,h,s)));let r=new $t;r.position.set(0,e-.2,0),n.add(r);let o=e-.2-.56;[-.72,.72].forEach(c=>r.add(D(.06,o,.06,t,c,-o/2,0)));let a=D(1.65,.12,.5,0,0,-o,0,qe(ut.PLANK_GREY,16165309));return r.add(a),n.userData.pivot=r,n.userData.seat=a,n}var jh=[];function yd(n,t){let e=document.createElement("canvas");e.width=e.height=16;let i=e.getContext("2d"),s=(h,u,f)=>{i.fillStyle=f,i.fillRect(h,u,1,1)},r=[];for(let h=0;h<9;h++)r.push([3+h,12-h]);let o=[];r.forEach(([h,u])=>{o.push([h,u,"#9a6a3e"],[h+1,u,"#6b4526"])}),[[12,2],[13,2],[13,3],[11,1],[12,1],[13,1],[14,1],[14,2],[14,3],[14,4],[10,2],[13,5]].forEach(([h,u])=>o.push([h,u,"#e6e6ee"])),[[12,3],[12,4],[11,3]].forEach(([h,u])=>o.push([h,u,"#b8b8c6"])),[[1,12],[2,11],[1,13],[2,14],[3,14],[1,11],[2,13],[4,14],[0,12],[3,15]].forEach(([h,u])=>o.push([h,u,"#ffffff"])),[[2,12],[3,13]].forEach(([h,u])=>o.push([h,u,"#f6a9bd"])),o.forEach(([h,u])=>{[[-1,0],[1,0],[0,-1],[0,1]].forEach(([f,d])=>s(h+f,u+d,"#4a3020"))}),o.forEach(([h,u,f])=>s(h,u,f));let a=new ln(e);a.magFilter=$e,a.minFilter=$e,a.colorSpace=Ce;let c=new rs(new Gi({map:a,transparent:!0,depthWrite:!1,depthTest:!1,rotation:n}));c.scale.set(t,t,1),c.renderOrder=5;let l=new U(Math.cos(n+Math.PI/4),Math.sin(n+Math.PI/4),0);return jh.push({sp:c,dir:l,base:null}),c}function a1(n){jh.forEach(t=>{t.base||(t.base=t.sp.position.clone());let e=(Math.sin(n*4)*.5+.5)*.12;t.sp.position.set(t.base.x+t.dir.x*e,t.base.y+t.dir.y*e,t.base.z)})}function c1(n,t,e){let s=document.createElement("canvas"),r=s.getContext("2d");r.font="800 64px Nunito, sans-serif";let o=Math.ceil(r.measureText(n).width)+40;s.width=o,s.height=100;let a=s.getContext("2d");a.font="800 64px Nunito, sans-serif",a.textAlign="center",a.textBaseline="middle",a.lineJoin="round",t==="#ffffff"&&(a.shadowColor="rgba(40,30,40,.45)",a.shadowBlur=6,a.shadowOffsetY=3),a.fillStyle=t,a.fillText(n,o/2,s.height/2);let c=new ln(s);c.colorSpace=Ce;let l=new rs(new Gi({map:c,transparent:!0,depthWrite:!1,depthTest:!1}));return l.scale.set(e*o/s.height,e,1),l.renderOrder=5,l}function Pd(n,t,e,i){let s=document.createElement("canvas");s.width=128,s.height=64;let r=s.getContext("2d");r.font="bold 48px sans-serif",r.fillStyle=t,r.textAlign="center",r.fillText(n,64,50);let o=new rs(new Gi({map:new ln(s),transparent:!0,depthWrite:!1}));return o.scale.set(e,i,1),o.visible=!1,o}function Md(n,t){return Math.hypot((n-se.x)/(se.rx+4.4),(t-se.z)/(se.rz+4.4))<1&&!Ei(n,t,.4)}function l1(n){let t=new go(Bn.map(o=>new U(o.x,0,o.z))),e=90,i=t.getSpacedPoints(e),s=new Mn,r=[];return Xn.forEach(([o,a,c,l])=>{let h=o===c;for(let u=0;u<i.length;u++){let f=i[u];!(h?Math.abs(f.x-o)<.95&&f.z>=Math.min(a,l)-.9&&f.z<=Math.max(a,l)+.9:Math.abs(f.z-a)<.95&&f.x>=Math.min(o,c)-.9&&f.x<=Math.max(o,c)+.9)||r.some(g=>Math.hypot(g.x-f.x,g.z-f.z)<3)||r.push({x:h?o:f.x,z:h?f.z:a,rot:h?0:Math.PI/2})}}),r.forEach(o=>n.add(Id(o.x,o.z,o.rot,3))),{curve:t,glints:[],ftex:s,foam:[],bridges:r,src:i[0]}}function Id(n,t,e,i){let s=new $t;s.position.set(n,0,t),s.rotation.y=e;let r=qe(ut.PLANKS),o=qe(ut.LOG);return[0,.25,.5,.25,0].forEach((a,c)=>s.add(D(i,.5,1,0,0,a-.15,c-2,r))),[-1,1].forEach(a=>{[0,.25,.5,.25,0].forEach((c,l)=>{s.add(D(.25,.9,.25,0,a*(i/2-.12),c+.55,l-2,o)),l<4&&s.add(D(.12,.12,1,0,a*(i/2-.12),c+.85+(l<2?.12:-.12),l-1.5,r))})}),s}function h1(n,t){let e=se,i=e.rx+2.6,s=e.rz+2.6,r=80,o=[],a=[],c={benches:[],ducks:[],posts:[]};for(let l=0;l<=r;l++){let h=l/r*Math.PI*2,u=Math.cos(h),f=Math.sin(h),d=e.x+u*(i-.75),g=e.z+f*(s-.75),M=e.x+u*(i+.75),x=e.z+f*(s+.75);if(o.push(d,.025,g,M,.025,x),l){let m=l*2;a.push(m-2,m,m-1,m-1,m,m+1)}}for(let l=0;l<r;l++){let h=l/r*Math.PI*2,u=e.x+Math.cos(h)*i,f=e.z+Math.sin(h)*s;if(zs(u,f)<.6){n.add(Id(u,f,-h+Math.PI/2+Math.PI/2,1.5));break}}[.6,2.2,3.6,5].forEach((l,h)=>{let u=e.x+Math.cos(l)*(i+1.6),f=e.z+Math.sin(l)*(s+1.6);if(zs(u,f)<2.2||!Bs(u,f,1.5))return;let d=new $t;d.position.set(u,0,f),d.rotation.y=Math.atan2(e.x-u,e.z-f),d.add(D(1.5,.08,.45,12883572,0,.45,0)),d.add(D(1.5,.4,.07,12883572,0,.7,-.22)),[-.65,.65].forEach(g=>{d.add(D(.08,.45,.4,9206379,g,.22,0))}),n.add(d),c.posts.push({x:u,z:f,r:.9})});for(let l=0;l<7;l++){let h=l/7*Math.PI*2+.3,u=e.x+Math.cos(h)*(i+3.1),f=e.z+Math.sin(h)*(s+3.1);if(!(zs(u,f)<2.4||!Bs(u,f,1.8))){n.add(D(2,.5,1,0,Math.floor(u)+.5,.25,Math.floor(f)+.5,qe(ut.PLANKS)));for(let d=0;d<4;d++){let g=Math.floor(u)+.5+(d-1.5)*.45,M=Math.floor(f)+.5+(d%2?.15:-.15);n.add(D(.06,.35,.06,8173679,g,.65,M)),n.add(D(.22,.22,.22,bi.flower[(l+d)%bi.flower.length],g,.9,M))}c.posts.push({x:u,z:f,r:1})}}for(let l=0;l<2;l++){let h=new $t;h.add(D(.5,.3,.7,16777215,0,.18,0)),h.add(D(.32,.3,.3,l?16777215:7317610,0,.45,.32)),h.add(D(.18,.08,.16,16098123,0,.42,.53)),[-.12,.12].forEach(u=>h.add(D(.05,.06,.03,3025462,u,.5,.47))),h.add(D(.2,.12,.2,15658734,0,.32,-.38)),h.scale.setScalar(.8),n.add(h),c.ducks.push({g:h,a:l*2.5,sp:l?-.12:.09})}return c}function u1(n){let t=[],e=[],i=(u,f)=>u.toFixed(2)+","+f.toFixed(2),s=new Map,r=(u,f)=>{let d=i(u,f);return s.has(d)||(s.set(d,t.length),t.push({x:u,z:f}),e.push([])),s.get(d)},o=(u,f)=>{if(u===f)return;let d=Math.hypot(t[u].x-t[f].x,t[u].z-t[f].z);e[u].push([f,d]),e[f].push([u,d])},a=Xn.map(()=>[]);Xn.forEach((u,f)=>{a[f].push([u[0],u[1]],[u[2],u[3]])}),Xn.forEach((u,f)=>Xn.forEach((d,g)=>{if(f>=g)return;let M=u[0]===u[2],x=d[0]===d[2];if(M===x)return;let m=M?u:d,T=M?d:u,b=m[0],E=T[1];b>=Math.min(T[0],T[2])-.01&&b<=Math.max(T[0],T[2])+.01&&E>=Math.min(m[1],m[3])-.01&&E<=Math.max(m[1],m[3])+.01&&(a[f].push([b,E]),a[g].push([b,E]))}));let c=n.map(u=>{let f=null;Xn.forEach((g,M)=>{let x=g[0]===g[2],m=x?g[0]:Math.max(Math.min(g[0],g[2]),Math.min(Math.max(g[0],g[2]),u.x)),T=x?Math.max(Math.min(g[1],g[3]),Math.min(Math.max(g[1],g[3]),u.z)):g[1],b=Math.hypot(m-u.x,T-u.z);(!f||b<f.dist)&&(f={i:M,x:m,z:T,dist:b})}),a[f.i].push([f.x,f.z]);let d=r(u.x,u.z);return o(d,r(f.x,f.z)),d});a.forEach((u,f)=>{let d=Xn[f][0]===Xn[f][2];u.sort((g,M)=>d?g[1]-M[1]:g[0]-M[0]);for(let g=1;g<u.length;g++)o(r(u[g-1][0],u[g-1][1]),r(u[g][0],u[g][1]))});function l(u,f){let d=t.map(()=>1/0),g=t.map(()=>-1),M=t.map(()=>!1);for(d[u]=0;;){let m=-1;for(let T=0;T<t.length;T++)!M[T]&&(m<0||d[T]<d[m])&&(m=T);if(m<0||d[m]===1/0||m===f)break;M[m]=!0,e[m].forEach(([T,b])=>{d[m]+b<d[T]&&(d[T]=d[m]+b,g[T]=m)})}let x=[];for(let m=f;m>=0;m=g[m])x.unshift(t[m]);return x.length&&x[0]===t[u]?x:[t[f]]}function h(u,f,d){let g=0,M=1/0,x=d?new Set(c):null;return t.forEach((m,T)=>{if(x&&x.has(T))return;let b=Math.hypot(m.x-u,m.z-f);b<M&&(M=b,g=T)}),g}return{nodes:t,doorNodes:c,path:l,nearest:h}}var ja=[[0,4870304,12633855,.8,1.35,1],[5,5199526,12633855,.8,1.35,1],[6,16305590,16763296,1.3,1.1,.4],[7.5,12575733,16774374,2.3,1.55,0],[16.5,12575733,16774374,2.3,1.55,0],[18,16236724,16760470,1.3,1.1,.4],[19.2,5265318,12633855,.8,1.35,1],[24,4870304,12633855,.8,1.35,1]];function Ld(n){let t=0;for(;t<ja.length-2&&ja[t+1][0]<=n;)t++;let e=ja[t],i=ja[t+1],s=(n-e[0])/(i[0]-e[0]||1),r=new re(e[1]),o=new re(i[1]),a=new re(e[2]),c=new re(i[2]);return{sky:r.lerp(o,s),sun:a.lerp(c,s),power:zn(e[3],i[3],s),amb:zn(e[4],i[4],s),night:zn(e[5],i[5],s)}}function f1(n,t){t=t||{};let e=(n.clientWidth||innerWidth)<(n.clientHeight||innerHeight)*.9?"port":"land";bd(e),Kh=[],ic=[];let i=(()=>{let p=/[?&]hour=([\d.]+)/.exec(location.search);return p?Number(p[1]):null})();i==null&&t.timeMode==="day"&&(i=11),i==null&&t.timeMode==="night"&&(i=22);let s=new uo({antialias:!0});s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.shadowMap.enabled=!0,s.shadowMap.type=Ga,s.domElement.className="village-3d",n.appendChild(s.domElement);let r=new fo;r.fog=new Pa(12575733,320,760);let o=new cn(26,1,.5,1400),a=new Ka(o,s.domElement);a.enableDamping=!0,a.dampingFactor=.08,a.minDistance=18,a.maxDistance=520,a.minPolarAngle=.15,a.maxPolarAngle=1.32,a.target.set(0,0,1.5),a.screenSpacePanning=!1,a.rotateSpeed=.7,a.panSpeed=1.1,a.keyPanSpeed=22,a.touches={ONE:yi.PAN,TWO:yi.DOLLY_PAN};{let p=s.domElement,_=new Map,v=null,C=!1,k=new U,H=new Ds,y=new U,z=new U,st=()=>{let lt=Array.from(_.values());return{a:lt[0],b:lt[1],mx:(lt[0].x+lt[1].x)/2,my:(lt[0].y+lt[1].y)/2,d:Math.hypot(lt[1].x-lt[0].x,lt[1].y-lt[0].y),ang:Math.atan2(lt[1].y-lt[0].y,lt[1].x-lt[0].x)}};p.addEventListener("pointerdown",lt=>{if(!(C||lt.pointerType!=="touch"))if(lt.isPrimary&&(_.clear(),v=null),_.set(lt.pointerId,{x:lt.clientX,y:lt.clientY}),_.size===2){lt.stopImmediatePropagation();let bt=Array.from(_.entries()).find(([ce])=>ce!==lt.pointerId);if(bt){C=!0;try{p.dispatchEvent(new PointerEvent("pointerup",{pointerId:bt[0],pointerType:"touch",isPrimary:!0,clientX:bt[1].x,clientY:bt[1].y,bubbles:!0}))}catch{}C=!1}let Wt=st();v={last:Wt,moved:0,mode:"",y0a:Wt.a.y,y0b:Wt.b.y,x0:Wt.mx,d0:Wt.d}}else _.size>2&&lt.stopImmediatePropagation()},{capture:!0}),p.addEventListener("pointermove",lt=>{if(C||lt.pointerType!=="touch"||!_.has(lt.pointerId)||(_.get(lt.pointerId).x=lt.clientX,_.get(lt.pointerId).y=lt.clientY,!v||_.size<2)||(lt.stopImmediatePropagation(),!a.enabled))return;let bt=st(),Wt=v.last;if(v.moved+=Math.hypot(bt.mx-Wt.mx,bt.my-Wt.my)+Math.abs(bt.d-Wt.d),!v.mode&&v.moved>22){let ce=bt.a.y-v.y0a,me=bt.b.y-v.y0b,Be=(ce+me)/2,fn=ce*me>0&&Math.min(Math.abs(ce),Math.abs(me))>.3*Math.max(Math.abs(ce),Math.abs(me));v.mode=fn&&Math.abs(bt.mx-v.x0)<Math.abs(Be)*.7&&Math.abs(bt.d-v.d0)<Math.max(24,Math.abs(Be)*.6)?"tilt":"free"}if(k.copy(o.position).sub(a.target),v.mode==="tilt")H.setFromVector3(k),H.phi=Math.max(a.minPolarAngle,Math.min(a.maxPolarAngle,H.phi-(bt.my-Wt.my)*.006)),k.setFromSpherical(H),o.position.copy(a.target).add(k);else if(v.mode==="free"){let ce=bt.ang-Wt.ang;ce>Math.PI&&(ce-=Math.PI*2),ce<-Math.PI&&(ce+=Math.PI*2),k.applyAxisAngle(Xe.DEFAULT_UP,ce);let me=Math.max(a.minDistance,Math.min(a.maxDistance,k.length()*(Wt.d/Math.max(1,bt.d))));k.setLength(me),o.position.copy(a.target).add(k),o.getWorldDirection(z),z.y=0,z.normalize(),y.crossVectors(z,o.up).normalize();let Be=2*me*Math.tan(o.fov*Math.PI/360)/(p.clientHeight||innerHeight);c.copy(y).multiplyScalar(-(bt.mx-Wt.mx)*Be).addScaledVector(z,(bt.my-Wt.my)*Be*1.4),a.target.add(c),o.position.add(c)}v.last=bt,a.update()},{capture:!0});let ot=lt=>{C||lt.pointerType!=="touch"||(v&&_.has(lt.pointerId)&&lt.stopImmediatePropagation(),_.delete(lt.pointerId),_.size<2&&(v=null))};p.addEventListener("pointerup",ot,{capture:!0}),p.addEventListener("pointercancel",ot,{capture:!0});let It=lt=>{lt.pointerType==="touch"&&lt.target!==p&&(_.delete(lt.pointerId),_.size<2&&(v=null))};window.addEventListener("pointerup",It,!0),window.addEventListener("pointercancel",It,!0)}s.domElement.tabIndex=0,s.domElement.style.outline="none",a.listenToKeyEvents(s.domElement);let c=new U,l=new U,h=new U;function u(p,_){o.getWorldDirection(h),h.y=0,h.normalize(),l.crossVectors(h,o.up).normalize();let v=o.position.distanceTo(a.target)*.0016;c.copy(l).multiplyScalar(p*v).addScaledVector(h,-_*v),a.target.add(c),o.position.add(c)}s.domElement.addEventListener("wheel",p=>{!p.ctrlKey&&p.deltaMode===0&&(Math.abs(p.deltaX)>.01||Math.abs(p.deltaY)<40)&&(p.preventDefault(),p.stopImmediatePropagation(),u(p.deltaX,p.deltaY))},{capture:!0,passive:!1});function f(){let p=a.target,_=vn.w/2,v=vn.d/2,C=Math.max(-_,Math.min(_,p.x)),k=Math.max(-v,Math.min(v,p.z));(C!==p.x||k!==p.z||p.y!==0)&&(c.set(C-p.x,-p.y,k-p.z),p.add(c),o.position.add(c))}a.addEventListener("change",f);let d=new To(16777215,12048288,1);r.add(d);let g=new Ro(16777215,1.5);g.castShadow=!0,g.shadow.mapSize.set(2048,2048),Object.assign(g.shadow.camera,{left:-vn.a-6,right:vn.a+6,top:vn.b+10,bottom:-vn.b-10,near:1,far:260}),g.shadow.bias=-6e-4,g.shadow.normalBias=.03,r.add(g),r.add(g.target);let M=[],x=new Kn({uniforms:{top:{value:new re(9356778)},bottom:{value:new re(14216952)}},vertexShader:"varying float vY; void main(){ vY = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 bottom; varying float vY; void main(){ float k = smoothstep(-0.15, 0.75, vY); gl_FragColor = vec4(mix(bottom, top, k), 1.0); }",side:yn,depthWrite:!1,fog:!1}),m=new Rt(new hn(480,24,14),x);m.renderOrder=-1,r.add(m);let T=new Rt(new He(7,7,7),new Je({color:16771496,fog:!1})),b=new Rt(new He(5,5,5),new Je({color:16052735,fog:!1}));r.add(T,b);let E=new Oe,V=[];for(let p=0;p<700;p++){let _=Math.random()*Math.PI*2,v=Math.random()*1.55;V.push(Math.cos(_)*Math.sin(v)*450,Math.cos(v)*450+20,Math.sin(_)*Math.sin(v)*450)}E.setAttribute("position",new de(V,3));let I=new Rs(E,new os({color:16777215,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1}));r.add(I);let L=[];for(let p=0;p<6;p++){let _=new $t,v=new ye({color:16777215,transparent:!0,opacity:.92});for(let C=0;C<5;C++){let k=new Rt(new He(kt(3,6),1.5,kt(3,5)),v);k.position.set(C*2.6-5,0,kt(-1.5,1.5)),_.add(k)}_.position.set(kt(-90,90),kt(34,46),kt(-90,-40)),_.userData.speed=kt(.6,1.4),_.userData.mat=v,L.push(_),r.add(_)}let O=new $t;O.mat=new ye({color:16777215,transparent:!0,opacity:.9,fog:!1});for(let p=0;p<11;p++){let _=p/11*Math.PI*2+kt(-.15,.15),v=Dr(_)+kt(1,7),C=[];for(let H=0;H<5;H++){let y=new He(Math.round(kt(2,5)),1,Math.round(kt(2,4)));y.translate(Math.round(H*2.2-4.4),0,Math.round(kt(-1,1))),C.push(y)}let k=new Rt(Ja(C,!1),O.mat);C.forEach(H=>H.dispose()),k.position.set(Math.cos(_)*v,kt(-9,-3),-Math.sin(_)*v),k.rotation.y=_+Math.PI/2,k.scale.setScalar(kt(.9,1.5)),O.add(k)}r.add(O);let A=[];[{t:Math.PI*.97,gap:9,r:4.5,y:-3,deco:(_,v,C)=>{Rr(_,-1,1,-1,"oak",v),Rr(_,2,1,1,"pine",v),_.set(-2,1,2,At.LEAF_M),_.plant(.5,1,2.5,ut.FL_PINK)}},{t:.06,gap:10,r:4,y:-2,deco:(_,v,C)=>{for(let k=0;k<18;k++){let H=v()*6.28,y=Math.sqrt(v())*3;_.plant(Math.floor(Math.cos(H)*y)+.5,1,Math.floor(Math.sin(H)*y)+.5,[ut.FL_PINK,ut.FL_WHITE,ut.FL_YELLOW,ut.FL_BLUE][k%4],.9)}C(D(2,.25,.6,0,.5,1.5,-.7,qe(ut.PLANKS))),C(D(2,.6,.15,0,.5,1.85,-1,qe(ut.PLANKS))),[-.35,1.35].forEach(k=>C(D(.2,.5,.6,0,k,1.25,-.7,qe(ut.LOG))))}},{t:Math.PI*.62,gap:7,r:2.5,y:4.5,deco:(_,v)=>{Rr(_,0,1,0,"pine",v),_.set(1,1,1,At.MOSSY)}},{t:-Math.PI*.3,gap:8,r:2.3,y:2.2,deco:(_,v,C)=>{[[0,0,15231594],[1,1,16757611]].forEach(([k,H,y])=>{C(D(.35,.6,.35,16774888,k+.5,1.3,H+.5)),C(D(.9,.35,.9,y,k+.5,1.75,H+.5))}),_.set(-1,1,0,At.LEAF_G)}}].forEach((_,v)=>{let C=Vh(31+v*7),k=_.r,H=Math.ceil(k)+2,y=new Io(-H,-Math.ceil(k*2.4)-3,-H,H*2,Math.ceil(k*2.4)+16,H*2);for(let It=-H;It<H;It++)for(let lt=-H;lt<H;lt++){let bt=Math.hypot(It+.5,lt+.5)/k;if(bt>1)continue;let Wt=-Math.round(1+k*1.9*Math.pow(1-bt,.7)+C()*1.2);for(let ce=Wt;ce<1;ce++)y.set(It,ce,lt,ce===0?At.GRASS:ce>-3?At.DIRT:At.STONE)}let z=new $t;_.deco(y,C,It=>z.add(It));let st=y.build();z.add(st.solid,st.water,st.plants);let ot=Dr(_.t)+_.r+_.gap;z.position.set(Math.cos(_.t)*ot,_.y,-Math.sin(_.t)*ot),z.userData.y0=_.y,z.userData.ph=v*1.7,r.add(z),A.push(z)});let S=(()=>{let p=document.createElement("canvas");p.width=p.height=64;let _=p.getContext("2d"),v=_.createRadialGradient(32,32,0,32,32,32);v.addColorStop(0,"rgba(255,255,255,0.85)"),v.addColorStop(.3,"rgba(255,255,255,0.22)"),v.addColorStop(1,"rgba(255,255,255,0)"),_.fillStyle=v,_.fillRect(0,0,64,64),_.fillStyle="#ffffff",_.beginPath();for(let k=0;k<10;k++){let H=k/10*Math.PI*2-Math.PI/2,y=k%2?8:20;_.lineTo(32+Math.cos(H)*y,32+Math.sin(H)*y)}_.closePath(),_.fill();let C=new ln(p);return C.colorSpace=Ce,C})(),B=(()=>{let p=document.createElement("canvas");p.width=p.height=32;let _=p.getContext("2d");_.fillStyle="#ffffff",_.beginPath();for(let C=0;C<8;C++){let k=C/8*Math.PI*2,H=C%2?2.5:15;_.lineTo(16+Math.cos(k)*H,16+Math.sin(k)*H)}_.closePath(),_.fill();let v=new ln(p);return v.colorSpace=Ce,v})(),tt=[0,1,2].map(p=>{let _=[],v=[],C=new re,k=[16773544,16762076,14273791,12905727];for(let z=0;z<34;z++){let st=Math.random()*Math.PI*2,ot=.15+Math.random()*1.2;_.push(Math.cos(st)*Math.sin(ot)*440,Math.cos(ot)*440+20,Math.sin(st)*Math.sin(ot)*440),C.set(k[(z+p)%4]),v.push(C.r,C.g,C.b)}let H=new Oe;H.setAttribute("position",new de(_,3)),H.setAttribute("color",new de(v,3));let y=new Rs(H,new os({size:11+p*3,map:S,vertexColors:!0,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,fog:!1}));return y.userData={base:0,ph:p*2.1},r.add(y),y}),F=new rs(new Gi({map:(()=>{let p=document.createElement("canvas");p.width=128,p.height=16;let _=p.getContext("2d"),v=_.createLinearGradient(0,0,128,0);return v.addColorStop(0,"rgba(255,255,255,0)"),v.addColorStop(1,"rgba(255,248,220,1)"),_.fillStyle=v,_.beginPath(),_.moveTo(0,8),_.lineTo(120,4),_.arc(120,8,4,-Math.PI/2,Math.PI/2),_.closePath(),_.fill(),new ln(p)})(),transparent:!0,opacity:0,depthWrite:!1,fog:!1}));F.scale.set(36,4.5,1),r.add(F);let G={t:-1,wait:6,from:new U,dir:new U},Z=new $t;r.add(Z);let q=Vh(5),mt=new Xe,j=Math.ceil(vn.a)+2,yt=Math.ceil(vn.b)+2,rt=new Io(-j,-26,-yt,j*2,54,yt*2),Xt=p=>(p[0]===p[2]?Math.abs(p[3]-p[1]):Math.abs(p[2]-p[0]))>=40,oe=(p,_)=>Xn.some(v=>{let[C,k,H,y]=v,z=(Xt(v)?Sd:qy)/2;return p>=Math.min(C,H)-z&&p<=Math.max(C,H)+z&&_>=Math.min(k,y)-z&&_<=Math.max(k,y)+z}),Me=(p,_)=>{let v=Math.hypot((p-se.x)/(se.rx+2.6),(_-se.z)/(se.rz+2.6));return Math.abs(v-1)*(se.rx+2.6)<.8},ht=(p,_)=>Math.sin(p*.83+_*.37)*Math.cos(_*.71-p*.29)+.5*Math.sin(p*1.9-_*1.3),Tt=(p,_)=>{let v=0,C=-1;return nc(p,_)<1?{h:0,i:-1}:(ls.forEach(([k,H,y,z],st)=>{let ot=Math.hypot(p-k,_-H);if(ot<y){let It=z*Math.pow(1-ot/y,1.1)*(.88+.12*ht(p,_))+(ot/y<.9?.8*ht(p*1.7,_*1.7):0);It>v&&(v=It,C=st)}}),{h:v,i:C})},Jt=(p,_)=>1.4+1.3*Math.min(1,Math.hypot(p-Fn.x,_-Fn.z)/22),gt=new Map;for(let p=-j;p<j;p++)for(let _=-yt;_<yt;_++){let v=p+.5,C=_+.5;if(!Bs(v,C,.2))continue;let k=Math.round(Pn(v,C)),H="grass",y=Tt(v,C);if(y.h>k+.6){let ot=ls[y.i][3];k=Math.max(k,Math.round(y.h-.2)),H=k>ot*(.58+.08*ht(v*2,C*2))?"snow":k>ot*.22?"rock":"grass"}let z=Math.max(0,1-Math.hypot(v,C)/Dr(Math.atan2(C,v))),st=-1-Math.round(2+17*Math.pow(z,.55)+(q()-.5)*2.4);for(let ot=st;ot<k;ot++){let It=k-1-ot;if(k>=Hs.h&&nc(v,C)<=0&&ot>=0&&It>0){rt.set(p,ot,_,q()<.7?At.BRICK:q()<.5?At.MOSSY:At.COBBLE);continue}let bt=It===0?H==="snow"?At.SNOW:H==="rock"?q()<.2?At.MOSSY:q()<.12?At.GRAVEL:At.STONE:At.GRASS:It<3&&H==="grass"?At.DIRT:ot<st+3?q()<.55?At.DEEP:At.STONE:q()<.12?At.CLAY:q()<.08?At.GRAVEL:At.STONE;rt.set(p,ot,_,bt)}if(H==="grass"&&rt.tint.set(rt.idx(p,k-1,_),.94+.08*Math.sin(v*.21+C*.13)*Math.cos(C*.17-v*.05)+q()*.03),gt.set(p+","+_,k),k<=0){let ot=zs(v,C),It=Jt(v,C);if(Ei(v,C,0)||ot<It/2){let lt=Ei(v,C,-2.6)?3:Ei(v,C,-1.2)?2:1;for(let bt=1;bt<=lt;bt++)rt.set(p,-bt,_,At.WATER);rt.set(p,-lt-1,_,At.SAND),rt.set(p,-lt-2,_,At.SAND),gt.set(p+","+_,-1);continue}if((Ei(v,C,1.2)||ot<It/2+.9)&&!oe(v,C)){rt.set(p,-1,_,At.SAND),rt.set(p,-2,_,At.SAND);continue}}Uo(v,C)?rt.set(p,k-1,_,At.BRICK):(oe(v,C)||Me(v,C))&&rt.set(p,k-1,_,At.PATH)}let jt=(p,_)=>{let v=gt.get(Math.floor(p)+","+Math.floor(_));return v==null?0:v},ae=[];{let p=Fn,_=-p.dz,v=p.dx,C=p.r*.95,k=new Set;for(let y=C;y<p.r+2;y+=.4)for(let z=-1.4;z<=1.4;z+=.4){let st=Math.floor(p.x+p.dx*y+_*z),ot=Math.floor(p.z+p.dz*y+v*z),It=st+","+ot;if(k.has(It)||!gt.has(It))continue;k.add(It);let lt=gt.get(It);for(let bt=-1;bt<lt;bt++)rt.set(st,bt,ot,At.AIR);rt.set(st,-1,ot,At.WATER),rt.set(st,-2,ot,At.WATER),rt.set(st,-3,ot,At.SAND),gt.set(It,-1)}let H=new Map;for(let y=C;y>-.6;y-=.3)for(let z=-1.2;z<=1.2;z+=.35){let st=Math.floor(p.x+p.dx*y+_*z),ot=Math.floor(p.z+p.dz*y+v*z),It=st+","+ot;if(k.has(It)||H.has(It)||!gt.has(It))continue;let lt=gt.get(It),bt=C-y,Wt=Math.min(lt-2,Math.floor(bt/.95)*2);if(!(Wt<0)){H.set(It,Wt);for(let ce=Wt+1;ce<lt;ce++)rt.set(st,ce,ot,At.AIR);rt.set(st,Wt,ot,At.WATER),rt.set(st,Wt-1,ot,At.WATER),rt.set(st,Wt-2,ot,At.STONE),gt.set(It,Wt+1),[[_,v],[-_,-v]].forEach(([ce,me])=>{let Be=Math.floor(p.x+p.dx*y+_*z+ce*1.6),fn=Math.floor(p.z+p.dz*y+v*z+me*1.6),Qn=Be+","+fn;if(H.has(Qn)||k.has(Qn)||!gt.has(Qn))return;let Ri=gt.get(Qn),Ci=Math.min(Ri,Wt+3);if(Ci<Ri){for(let ds=Ci;ds<Ri;ds++)rt.set(Be,ds,fn,At.AIR);gt.set(Qn,Ci)}rt.set(Be,Ci-1,fn,q()<.6?At.GRASS:At.MOSSY),q()<.35&&rt.plant(Be+.5,Ci,fn+.5,q()<.6?ut.TUFT:q()<.5?ut.FL_BLUE:ut.FL_WHITE,.8)})}}for(let y=-1;y<=1;y++)ae.push([Math.floor(p.x+p.dx*(C+.3)+_*y)+.5,Math.floor(p.z+p.dz*(C+.3)+v*y)+.5])}{let p=Vh(77);gt.forEach((_,v)=>{let[C,k]=v.split(",").map(Number),H=Tt(C+.5,k+.5);H.i<0||_<1||_>ls[H.i][3]*.32||p()>.035||Math.hypot(C-Fn.x,k-Fn.z)<Fn.r*.9&&Math.abs((C-Fn.x)*-Fn.dz+(k-Fn.z)*Fn.dx)<3||rt.get(C,_,k)||Rr(rt,C,_,k,"pine",p)})}let qt=l1(Z,!0),le=-1+.88,dt=new Rt(new Ge(1,1,.1,32),Zh);dt.scale.set(se.rx,1,se.rz),dt.position.set(se.x,le,se.z),Z.add(dt);{let p=new ye({map:ci(ut.LILY),transparent:!0,alphaTest:.5,side:_n});[[-4.5,1],[3.5,-1.6],[5.2,1.2],[-2.6,-1.4]].forEach(([_,v])=>{let C=new Rt(new ss(1,1),p);C.rotation.x=-Math.PI/2,C.rotation.z=_,C.position.set(se.x+_*se.rz/4,le+.02,se.z+v*se.rz/4),Z.add(C)})}for(let p=0;p<14;p++){let _=q()*6.28,v=se.x+Math.cos(_)*(se.rx+.7),C=se.z+Math.sin(_)*(se.rz+.7);rt.plant(v,0,C,ut.REED,1.1)}let wt=(()=>{let p=new $t;p.position.set(Math.floor(se.x)+.5,0,Math.floor(se.z)+.5),Z.add(p);let _=new ye({map:ci(ut.COBBLE)}),v=new ye({map:ci(ut.WATER),transparent:!0,opacity:.85});for(let z=-1;z<=1;z++)for(let st=-1;st<=1;st++)(z||st)&&p.add(D(1,.5,1,0,z,-.25+.1,st,_));p.add(D(1,1.6,1,0,0,.3,0,_)),p.add(D(1.6,.3,1.6,0,0,1.15,0,_));let C=D(1.2,.08,1.2,0,0,1.33,0,v);p.add(C);let k=new Je({color:14677247,transparent:!0,opacity:.85,depthWrite:!1}),H=new Rt(new He(.18,.8,.18),k);H.position.y=1.75,p.add(H);let y=[];for(let z=0;z<14;z++){let st=new Rt(new He(.1,.1,.1),k);p.add(st),y.push({m:st,a:z/14*Math.PI*2,t:z/14})}return{g:p,jet:H,drops:y,rimR:1.3}})(),N=h1(Z,q,!0),Yt=[],St=(p,_)=>Yt.some(v=>p>v.x0-1&&p<v.x1+1&&_>v.z0-1&&_<v.z1+1),Ft=(p,_)=>!St(p,_)&&Bs(p,_,2.2)&&!Ei(p,_,1.5)&&!pd(p,_,.8)&&!Bh(p,_,.6)&&zs(p,_)>2.4&&!Md(p,_)&&!Uo(p,_)&&!Xn.some(([v,C,k,H])=>p>=Math.min(v,k)-vi-.3&&p<=Math.max(v,k)+vi+.3&&_>=Math.min(C,H)-vi-.3&&_<=Math.max(C,H)+vi+.3)&&!tn.some(([v,C])=>Math.abs(p-v)<3.6&&Math.abs(_-C)<3.8)&&!(Math.abs(p-Cn[0])<6&&Math.abs(_-Cn[1])<5.4)&&Tt(p,_).h<.5,Lt=(t.houses||[]).findIndex(p=>p.id==="love"),te=(p,_)=>{if(In)return pd(p,_,1.2);if(Lt<0||!tn[Lt])return!1;let[v,C]=tn[Lt];return Math.abs(p-v)<7&&_>C+2.5&&_<C+12||Math.abs(_-C)<3.5&&Math.abs(p-v)<8.5||Math.abs(p-v)<3.5&&_<C&&_>C-8};{let v=(H,y)=>gt.get(H+","+y),C=(H,y)=>{for(let z=H-1;z<=H+11;z++)for(let st=y-1;st<=y+7;st++)if(v(z,st)!==0||!Ft(z+.5,st+.5)||te(z+.5,st+.5))return!1;return!0},k=[];for(let H=-yt+4;H<yt-7-4;H+=2)for(let y=-j+4;y<j-11-4;y+=2)C(y,H)&&k.push([y,H]);k.sort((H,y)=>y[1]-H[1]||Math.abs(H[0])-Math.abs(y[0]));for(let[H,y]of k){if(Yt.length>=2)break;if(Yt.some(bt=>Math.hypot(bt.x0-H,bt.z0-y)<18)||!C(H,y))continue;Yt.push({x0:H,z0:y,x1:H+11,z1:y+7});let z=[ut.WHEAT,ut.CARROT,ut.SPROUT];for(let bt=H+1;bt<H+11-1;bt++)for(let Wt=y+1;Wt<y+7-1;Wt++){if(Wt===y+Math.floor(3.5)){rt.set(bt,-1,Wt,At.WATER);continue}rt.set(bt,-1,Wt,At.FARM),rt.tint.set(rt.idx(bt,-1,Wt),1),rt.plant(bt+.5,0,Wt+.5,z[(Wt<y+7/2?0:1)+(bt>H+11-4?1:0)],.95)}let st=qe(ut.PLANKS),ot=qe(ut.LOG),It=H+Math.floor(11/2),lt=(bt,Wt,ce,me)=>{let Be=Math.hypot(ce-bt,me-Wt),fn=Math.round(Be);for(let Qn=0;Qn<=fn;Qn++){let Ri=bt+(ce-bt)*Qn/fn,Ci=Wt+(me-Wt)*Qn/fn;if(Wt===me&&Wt===y+7&&Math.abs(Ri-It-.5)<.6)continue;Z.add(D(.25,1,.25,0,Ri,.5,Ci,ot));let ds=new Xe;ds.position.set(Ri,0,Ci),ds.userData.post=.7,Z.add(ds),Qn<fn&&!(Wt===me&&Wt===y+7&&Math.abs(Ri+(ce-bt)/fn/2-It-.5)<1)&&[.4,.8].forEach(Gd=>{let Wd=D(Wt===me?1:.1,.1,Wt===me?.1:1,0,Ri+(ce-bt)/fn/2,Gd,Ci+(me-Wt)/fn/2,st);Z.add(Wd)})}};lt(H,y,H+11,y),lt(H+11,y,H+11,y+7),lt(H,y+7,H+11,y+7),lt(H,y,H,y+7),[[H,y],[H+11,y],[H,y+7],[H+11,y+7]].forEach(([bt,Wt])=>{let ce=Wh();ce.position.set(bt,1.2,Wt),Z.add(ce)})}}[[jn.z1+.4,0],[jn.z0-.6,Hs.h]].forEach(([p,_])=>[-1,1].forEach(v=>{let C=jn.x+v*(jn.hw+.7);Z.add(D(.25,1.4,.25,0,C,_+.7,p,qe(ut.LOG)));let k=Wh();k.position.set(C,_+1.6,p),Z.add(k)}));let Vt=[],P=(p,_)=>{let v=p+","+_,C=gt.get(v);C!=null&&(rt.set(p,C-1,_,At.DIRT),rt.set(p,C,_,At.GRASS),rt.tint.set(rt.idx(p,C,_),.97+q()*.05),gt.set(v,C+1))},w=(p,_,v)=>{let C=Math.floor(p),k=Math.floor(_);if(!Ft(C+.5,k+.5)||te(C+.5,k+.5)||Vt.some(([z,st])=>Math.hypot(z-C,st-k)<3.2))return!1;let H=v||(q()<.1?"cherry":["oak","oak","birch","mint","pine"][q()*5|0]);Rr(rt,C,gt.get(C+","+k)||0,k,H,q);let y=new Xe;return y.position.set(C+.5,0,k+.5),y.userData.post=1.2,Z.add(y),Vt.push([C,k]),!0};for(let _=0;_<20;_++){let v=(_+.5+(q()-.5)*.35)/20*Math.PI*2,C=Dr(v)-5.5-q()*2,k=Math.cos(v)*C,H=Math.sin(v)*C,y=2.5+q()*1.5;if(Ft(k,H)&&!te(k,H)){for(let ot=Math.floor(k-y);ot<=k+y;ot++)for(let It=Math.floor(H-y);It<=H+y;It++)Math.hypot(ot+.5-k,(It+.5-H)*1.2)<y&&Ft(ot+.5,It+.5)&&!te(ot+.5,It+.5)&&P(ot,It);let st=new Xe;st.position.set(k,0,H),st.userData.post=y,Z.add(st)}let z=2+(q()*3|0);for(let st=0;st<z*4&&z>0;st++){let ot=q()*6.28,It=q()*3.4;w(k+Math.cos(ot)*It,H+Math.sin(ot)*It)&&z--}for(let st=0;st<3;st++){let ot=q()*6.28,It=2.2+q()*2,lt=Math.floor(k+Math.cos(ot)*It),bt=Math.floor(H+Math.sin(ot)*It);if(!Ft(lt+.5,bt+.5)||te(lt+.5,bt+.5)||rt.get(lt,jt(lt,bt),bt))continue;let Wt=jt(lt,bt);rt.set(lt,Wt,bt,q()<.5?At.LEAF_G:At.LEAF_M),q()<.4&&rt.plant(lt+.5,Wt+1,bt+.5,[ut.FL_PINK,ut.FL_WHITE,ut.FL_YELLOW][q()*3|0],.8)}}for(let p=0,_=0;p<600&&_<10;p++)w((q()-.5)*vn.w,(q()-.5)*vn.d,["oak","birch","mint"][q()*3|0])&&_++;{let p=[ut.FL_PINK,ut.FL_WHITE,ut.FL_YELLOW,ut.FL_BLUE,ut.FL_LAV];for(let _=0,v=0;_<6e3&&v<520;_++){let C=(q()-.5)*(vn.w-4),k=(q()-.5)*(vn.d-4);if(!Ft(C,k)||te(C,k))continue;let H=Math.floor(C),y=Math.floor(k),z=jt(H,y);rt.get(H,z,y)||(rt.plant(H+.5,z,y+.5,q()<.32?p[q()*p.length|0]:ut.TUFT,.8+q()*.3),v++)}for(let _=0,v=0;_<800&&v<9;_++){let C=Math.floor((q()-.5)*(vn.w-8)),k=Math.floor((q()-.5)*(vn.d-8));if(!Ft(C+.5,k+.5)||te(C+.5,k+.5))continue;let H=jt(C,k),y=q()<.5?At.COBBLE:At.MOSSY;rt.set(C,H,k,y),q()<.6&&rt.set(C+1,H,k,At.STONE),q()<.4&&rt.set(C,H+1,k,y);let z=new Xe;z.position.set(C+1,0,k+.5),z.userData.post=1.2,Z.add(z),v++}}{let p=rt.build(.88);Z.add(p.solid,p.water,p.plants)}let Q=[];{let p=new Je({color:16777215,transparent:!0,opacity:.5,depthWrite:!1});ae.forEach(([_,v])=>{for(let C=0;C<4;C++){let k=new Rt(new He(.5,.5,.5),p.clone());k.position.set(_+kt(-.6,.6),0,v+kt(0,1.2)),Z.add(k),Q.push({m:k,t:Math.random(),x:k.position.x,z:k.position.z})}})}let W=[0,1,2].map(p=>{let _=[];for(let k=0;k<9;k++){let H=Math.random()*6.283,y=Math.sqrt(Math.random())*.85;_.push(se.x+Math.cos(H)*se.rx*y,le+.15,se.z+Math.sin(H)*se.rz*y)}for(let k=0;k<7;k++){let H=qt.curve.getPointAt(Math.random());_.push(H.x+(Math.random()-.5)*1.2,le+.12,H.z+(Math.random()-.5)*1.2)}let v=new Oe;v.setAttribute("position",new de(_,3));let C=new Rs(v,new os({size:.9,map:B,color:[16777215,16774072,16766698][p],transparent:!0,opacity:0,depthWrite:!1}));return C.userData={base:.6,ph:p*2.1},Z.add(C),C}),K=[];Xn.forEach(([p,_,v,C])=>[.3,.72].forEach(k=>{let H=p===v,y=zn(p,v,k)+(H?vi+.6:0),z=zn(_,C,k)+(H?0:vi+.6);tn.some(([st,ot])=>Math.abs(y-st)<3.6&&Math.abs(z-ot)<4.2)||Math.abs(y-Cn[0])<6.2&&Math.abs(z-Cn[1])<6||Ei(y,z,1.5)||te(y,z)||!Bs(y,z,2)||Bh(y,z,.5)||zs(y,z)<2||Uo(y,z)||Md(y,z)||K.push([y,z])})),K.slice(0,7).forEach(([p,_],v)=>{let C=e1();if(C.position.set(p,Pn(p,_),_),C.userData.post=.3,Z.add(C),v%2===0&&M.length<3){let k=new Ao(16763255,0,12,1.6);k.position.set(p,Pn(p,_)+2.7,_),Z.add(k),M.push(k)}});let X=[],xt=[];(t.houses||[]).forEach((p,_)=>{if(!tn[_])return;let v=p.id==="love"?Jy():p.special==="arcade"?$y():p.special==="store"?jy():md(p,!1);v.position.set(tn[_][0],Pn(tn[_][0],tn[_][1]),tn[_][1]),v.rotation.y=Lr[_]||0,v.userData.face=Lr[_]||0,v.userData.id=p.id,Z.add(v),X.push(v);let C=v.userData.face;xt.push({x:tn[_][0]+Math.sin(C)*v.userData.doorZ,z:tn[_][1]+Math.cos(C)*v.userData.doorZ})});let ft=t1(Z,In&&Lr[In.house]||0),pt=md(null,!0);pt.position.set(Cn[0],Pn(Cn[0],Cn[1]),Cn[1]),pt.userData.id="hall",Z.add(pt),X.push(pt);let Mt={x:Cn[0],z:Cn[1]+pt.userData.doorZ};xt.push(Mt);let et=u1(xt),Dt=et.doorNodes[et.doorNodes.length-1];(function(){Z.updateMatrixWorld(!0);let _=new Set,v=H=>{H&&H.traverse(y=>_.add(y))};v(dt),N.ducks.forEach(H=>v(H.g)),X.forEach(H=>{v(H.userData.hinge),v(H.userData.flag),v(H.userData.bell)}),v(ft.car),v(wt.jet),wt.drops.forEach(H=>v(H.m));let C=new Map,k=[];Z.traverse(H=>{if(!H.isMesh||H.isInstancedMesh||_.has(H)||H.userData.keepBatch||Array.isArray(H.material)||H.material.transparent)return;let y=H.geometry.clone();Object.keys(y.attributes).forEach(z=>{z!=="position"&&z!=="normal"&&z!=="uv"&&y.deleteAttribute(z)}),y.attributes.uv&&(y.index&&(y=y.toNonIndexed()),y.clearGroups(),y.applyMatrix4(H.matrixWorld),C.has(H.material)||C.set(H.material,[]),C.get(H.material).push(y),k.push(H))}),k.forEach(H=>H.parent.remove(H)),C.forEach((H,y)=>{let z=Ja(H,!1);if(H.forEach(ot=>ot.dispose()),!z)return;let st=new Rt(z,y);st.castShadow=!0,st.receiveShadow=!0,Z.add(st)})})();let Ct=[],Et={her:null,him:null,home:null,kiss:0},Ot=p=>et.nodes[et.doorNodes[p]],Zt={},Kt=p=>Zt[p]||0;function ve(p,_,v){let C=sc(p);Z.add(C.g);let k=Ot(_);return C.g.position.set(k.x+kt(-.6,.6),0,k.z+kt(0,.4)),Object.assign(C,{kind:"person",i:Ct.length,home:_,path:[],speed:kt(1.35,1.75),wait:kt(0,3),t:kt(0,6),v:0,goal:"",inside:!1},v||{}),Ct.push(C),C}(t.houses||[]).forEach((p,_)=>{if(!(_>=tn.length))if(p.id==="love")Et.home=_,Et.her=ve(Yh.her,_,{love:"her"}),Et.him=ve(Yh.him,_,{love:"him"});else{let v=ec[_]||ec[_%9]||ec[0];ve(v,_,{hallReg:!!v.uniform})}});let Y=Object.assign(s1(),{kind:"cat",path:[],speed:1.1,wait:2,t:0,sit:!0}),Ut=Object.assign(r1(),{kind:"dog",path:[],speed:2.2,wait:1,t:0,buddy:0});{let p=et.nodes[et.doorNodes[2]],_=et.nodes[et.doorNodes[et.doorNodes.length-1]];Y.g.position.set(p.x+1.5,0,p.z+.6),Ut.g.position.set(_.x+3,0,_.z+.8)}Z.add(Y.g,Ut.g);let at=[0,1,2,0,1].map((p,_)=>{let v=xd(p);return v.scale.setScalar(.8),Z.add(v),{g:v,t:.15+_*.16,dir:_%2?1:-1,sp:kt(.012,.022),side:kt(-.35,.35),ph:kt(0,6)}}),_t=[0,1,2,3].map(p=>{let _=xd(p);return Z.add(_),{g:_,a:kt(0,6.28),r:kt(.62,.92),sp:kt(.25,.5)*(p%2?1:-1),jump:0,jx:0,jz:0}});function Gt(){let p=document.createElement("canvas");p.width=128,p.height=64;let _=p.getContext("2d");_.font="bold 34px sans-serif",_.fillStyle="#7a6a9a",_.fillText("z",18,52),_.font="bold 26px sans-serif",_.fillText("z",52,36),_.font="bold 20px sans-serif",_.fillText("z",82,22);let v=new rs(new Gi({map:new ln(p),transparent:!0,depthWrite:!1}));return v.scale.set(1.1,.55,1),v.visible=!1,Z.add(v),v}Y.zzz=Gt(),Ut.zzz=Gt();let Bt=Pd("\u2665","#ff6f91",.9,.45);Z.add(Bt);let he=new U,Fe=0,ke=[],Te=new hn(.09,6,5);function Hn(p,_){for(let v=0;v<7;v++){let C=Math.random()*6.28,k=Math.random()*.8,H=p+Math.cos(C)*k,y=_+Math.sin(C)*k*.7;if(!Ei(H,y,-.8))continue;let z=new Rt(Te,fe(v%2?13208410:14723437));z.position.set(H,1.6+Math.random()*.6,y),Z.add(z),ke.push({m:z,vy:0,life:25})}}let Ln=[];function Ur(p,_,v){let C=new Rt(new Eo(.18,.24,18),new Je({color:15399167,transparent:!0,opacity:.6,side:_n,depthWrite:!1}));C.rotation.x=-Math.PI/2,C.position.set(p,-.09,_),C.renderOrder=3,C.userData.size=v,Z.add(C),Ln.push(C)}let pn=new Rt(new Eo(.34,.42,24),new Je({color:15399167,transparent:!0,opacity:0,side:_n,depthWrite:!1}));pn.rotation.x=-Math.PI/2,pn.renderOrder=3,Z.add(pn);let ui=[16758465,14273008,16375946,11591910].map((p,_)=>{let v=o1(p);return Z.add(v),{g:v,ph:_*1.7,cx:kt(-25,25),cz:kt(-15,15)}}),ks=new Oe,Nr=[];for(let p=0;p<40;p++)Nr.push(kt(-30,30),kt(1,3),kt(-20,20));ks.setAttribute("position",new de(Nr,3));let Vs=new Rs(ks,new os({color:16773792,size:.35,transparent:!0,opacity:0}));Z.add(Vs);let Yn=0;function Yi(){let p=new Date;return p.getHours()+p.getMinutes()/60}function Si(p){return p>=23||p<6.5?"sleep":p<7?"morning":p<11.5?"work":p<13?"lunch":p<16.5?"work":p<21?"evening":"home"}function us(p){let _=p%18,v=Math.floor(_/6),C=_%6;return{x:Mt.x+(C-2.5)*1.2+v%2*.6,z:Mt.z+1.3+v*1.1}}function Sn(p,_,v){if(p.goal=v,p.path=tu(p,_),!p.path.length){let C=et.nearest(p.g.position.x,p.g.position.z),k=et.nearest(_.x,_.z);p.path=et.path(C,k).concat([_])}}function Or(p){let _=Ot(p),v=Lr[p]||0;return{x:_.x-Math.sin(v)*.9,z:_.z-Math.cos(v)*.9,f:v}}function fi(p){let _=Or(p.home);p.inside=!1,p.g.visible=!0,p.g.position.set(_.x+kt(-.3,.3),0,_.z),p.g.rotation.set(0,_.f,0)}function fs(p,_){let v=Or(p.home);Sn(p,{x:v.x,z:v.z},"in"),p.stay=_}let R=X.findIndex(p=>p.userData.alwaysLit),J=null,nt=null;function it(){if(!J){J=tn.map((p,_)=>{let v=Ot(_);return[[-1.7,-.5],[1.7,-.5],[-.9,.2],[.9,.2]].map(([C,k])=>({x:v.x+C,z:v.z+k})).filter(C=>!Ae(C.x,C.z,.15))}),nt=[];for(let p=0;p<18;p++){let _={x:se.x+Math.cos(p/18*6.283)*(se.rx+2.2),z:se.z+Math.sin(p/18*6.283)*(se.rz+1.9)};Ae(_.x,_.z,.2)||nt.push(_)}}}let $=p=>p[Math.floor(Math.random()*p.length)];function Pt(p){it();let _=J[p.home];return _.length?$(_):Ot(p.home)}function Ht(p,_){it();let v=Math.random();if(_==="lunch"&&R>=0&&v<.6){let C=Ot(R);return{x:C.x+kt(-2.6,2.6),z:C.z+kt(0,.8)}}if(_==="lunch"&&v<.75)return us(Math.floor(kt(0,18)));if(v<.4&&nt.length)return $(nt);if(v<.85){let C=Ot(Math.floor(kt(0,tn.length)));return{x:C.x+kt(-1,1),z:C.z+kt(0,.5)}}return us(Math.floor(kt(0,18)))}function ee(p){if(p.love==="him")return;let _=Si(Yi());if(p.love==="her")return ne(p,_);let v=Kt(p.home)>0;if(p.helper&&Kt(p.home)<p.helper){p.inside&&fi(p),Sn(p,{x:Mt.x,z:Mt.z},"leave");return}if(Yn&&!v&&_!=="sleep"&&_!=="home"&&!p.helper){p.inside&&fi(p),(p.goal!=="hall"||p.path.length)&&Sn(p,us(p.i),"hall"),p.wait=kt(3,6);return}if(p.hallReg&&_==="work"&&!v&&!p.helper){if(p.inside&&fi(p),p.goal==="hallwork"){Sn(p,Pt(p),"work"),p.wait=kt(6,14);return}if(p.goal==="work"&&Math.random()<.5){fs(p,kt(4,8));return}Sn(p,us(p.i),"hallwork"),p.wait=kt(10,22);return}if(v||_==="work"){if(p.inside){fi(p),Sn(p,Pt(p),"work");return}if(p.goal==="work"){fs(p,kt(3,v?6:10));return}Sn(p,Pt(p),"work");return}if(_==="sleep"||_==="home"){if(p.inside){p.wait=kt(20,40);return}fs(p,kt(20,40));return}if(p.inside)fi(p);else if(Math.random()<.15){fs(p,kt(5,12));return}Sn(p,Ht(p,_),"stroll"),p.wait=kt(2,6)}function ne(p,_){let v=Et.him;if(_==="sleep"||_==="home"||Yi()>=20.5){if(ue(),p.inside){p.wait=kt(30,60);return}fs(p,kt(30,60));return}if(p.inside&&(fi(p),fi(v),v.g.position.x+=.7),p.sitting){ue(),Sn(p,Ht(p,_),"stroll"),p.wait=kt(2,5);return}if(Nt&&Math.random()<.55){Sn(p,Nt.userData.front,"swing");return}Sn(p,Ht(p,_),"stroll"),p.wait=kt(2,5)}function ue(){[Et.her,Et.him].forEach(p=>{!p||!p.sitting||(p.sitting=!1,p.g.position.set(Nt.userData.front.x+(p.love==="her"?-.4:.4),0,Nt.userData.front.z),p.g.rotation.set(0,Nt.rotation.y,0))})}function pe(p){p.goal==="in"?(p.inside=!0,p.g.visible=!1,p.wait=p.stay||10):p.goal==="work"?p.wait=kt(6,12):p.goal==="swing"?(p.sitting=!0,p.wait=kt(15,30)):p.goal==="leave"&&(Z.remove(p.g),Ct.splice(Ct.indexOf(p),1))}function ie(p,_){let v=Et.her;if(v.inside){if(p.inside)return!1;let Wt=Or(p.home),ce=Wt.x-p.g.position.x,me=Wt.z-p.g.position.z,Be=Math.hypot(ce,me);if(Be<.15)return p.inside=!0,p.g.visible=!1,!1;let fn=Math.min(Be,v.speed*1.2*_);return p.g.position.x+=ce/Be*fn,p.g.position.z+=me/Be*fn,p.g.rotation.y=Math.atan2(ce,me),p.v=v.speed,!0}if(p.inside&&(fi(p),p.g.position.x+=.7),v.sitting)return p.sitting=!0,!1;p.sitting=!1;let C=v.g.rotation.y,k=v.g.position.x-Math.cos(C)*.72,H=v.g.position.z+Math.sin(C)*.72,y=k-p.g.position.x,z=H-p.g.position.z,st=Math.hypot(y,z);if(st<.05){p.v=0;let Wt=C-p.g.rotation.y;return Wt=Math.atan2(Math.sin(Wt),Math.cos(Wt)),p.g.rotation.y+=Wt*Math.min(1,_*6),!1}let ot=Math.min(v.speed*1.35,st*4);p.v=(p.v||0)+(ot-(p.v||0))*Math.min(1,_*5);let It=Math.min(st,p.v*_);p.g.position.x+=y/st*It,p.g.position.z+=z/st*It;let bt=(st>.35?Math.atan2(y,z):C)-p.g.rotation.y;return bt=Math.atan2(Math.sin(bt),Math.cos(bt)),p.g.rotation.y+=bt*Math.min(1,_*7),p.v>.15}{let p=Si(Yi());(p==="sleep"||p==="home")&&Ct.forEach(_=>{_.inside=!0,_.g.visible=!1,_.wait=kt(5,30)})}let _e=X.filter(p=>p.userData.id!=="hall").map(p=>{let _=p.userData.size,v=p.userData.face||0,C=Math.abs(Math.sin(v))>.5;if(!_)return{x:p.position.x,z:p.position.z,hw:3.3,hd:2.6};let k=Math.cos(v)*_.cx,H=-Math.sin(v)*_.cx;return{x:p.position.x+k,z:p.position.z+H,hw:C?_.hd:_.hw,hd:C?_.hw:_.hd}}).concat([{x:Cn[0],z:Cn[1],hw:5.8,hd:4.1}]),Ee=[];Z.children.forEach(p=>{p.userData.post&&Ee.push({x:p.position.x,z:p.position.z,r:p.userData.post})}),N.posts.forEach(p=>Ee.push(p));function Ae(p,_,v){return v=v||.5,!Bs(p,_,2.5)||Bh(p,_,0)||zs(p,_)<1.8&&!qt.bridges.some(C=>Math.hypot(C.x-p,C.z-_)<2.4)||Ei(p,_,.9+v)||_e.some(C=>Math.abs(p-C.x)<C.hw+v&&Math.abs(_-C.z)<C.hd+v)?!0:Ee.some(C=>Math.hypot(p-C.x,_-C.z)<C.r+v*.6)}function en(p,_){let v=Math.ceil(Math.hypot(_.x-p.x,_.z-p.z)/.4);for(let C=1;C<=v;C++){let k=C/v;if(Ae(zn(p.x,_.x,k),zn(p.z,_.z,k),.45))return!1}return!0}let Se=(p,_,v)=>Xn.some(([C,k,H,y])=>p>=Math.min(C,H)-vi-v&&p<=Math.max(C,H)+vi+v&&_>=Math.min(k,y)-vi-v&&_<=Math.max(k,y)+vi+v),Nt=null;if(ft.blocks.forEach(p=>_e.push(p)),ft.posts.forEach(p=>Ee.push(p)),Et.home!=null&&In&&In.house===Et.home){let[p,_]=In.swing,v=Lr[Et.home]||0;Nt=_d(),Nt.position.set(p,Pn(p,_),_),Nt.rotation.y=v,Z.add(Nt),Nt.userData.front={x:p+Math.sin(v)*1.25,z:_+Math.cos(v)*1.25},_e.push({x:p,z:_,hw:1.55,hd:1.55}),_e.push({x:p-Math.cos(v)*2,z:_+Math.sin(v)*2,hw:.8,hd:.8})}else if(Et.home!=null){let[p,_]=tn[Et.home],v=[[0,7.2],[0,6.4],[-2.2,7.2],[2.2,7.2],[0,8.4],[4.6,.8],[-4.6,.8],[0,-5.2]],C=(k,H)=>!Bs(k,H,2.5)||Ei(k,H,1)||_e.some(y=>Math.abs(k-y.x)<y.hw+.1&&Math.abs(H-y.z)<y.hd+.1)||Se(k,H,0);for(let[k,H]of v){let y=p+k,z=_+H;if([[-1.6,-.9],[1.6,-.9],[-1.6,.9],[1.6,.9],[0,0],[0,1.6],[-.5,1.6],[.5,1.6]].every(([ot,It])=>!C(y+ot,z+It))){Z.children.slice().forEach(ot=>{if(ot.userData.post&&Math.abs(ot.position.x-y)<2.6&&Math.abs(ot.position.z-z)<2.2){Z.remove(ot);let It=Ee.findIndex(lt=>lt.x===ot.position.x&&lt.z===ot.position.z);It>=0&&Ee.splice(It,1)}}),Nt=_d(),Nt.position.set(y,Pn(y,z),z),Z.add(Nt),Nt.userData.front={x:y,z:z+1.25},_e.push({x:y,z,hw:1.55,hd:.75});break}}}let Dn=[],we=new hn(.28,8,6);function kn(p){let _=new Rt(we,new ye({color:16777215,transparent:!0,opacity:.75,depthWrite:!1})),v=p.userData.chimney;_.position.set(p.position.x+v.x+kt(-.1,.1),v.y,p.position.z+v.z+kt(-.1,.1)),Z.add(_),Dn.push({m:_,life:0})}let wi=[3,6,10],je=document.createElement("div");je.className="v3d-names",n.appendChild(je);let Un=null,Ie=!1,mn=new Map,wn=new U;function Nn(){let p=Un&&Un.genders||{};Ct.forEach(_=>{if(_.love||_.helper)return;let v=(t.houses||[])[_.home];if(!v)return;_.baseLook||(_.baseLook=_.parts.look);let C=p[v.id]?Cd(_.baseLook,p[v.id]):_.baseLook;C!==_.parts.look&&i1(_,C)})}function di(p){if(!Un)return"";if(p.love==="her")return Un.her||"namu";if(p.love==="him")return Un.him||"hunf";if(p.helper)return"";let _=(t.houses||[])[p.home];return!_||!_.pub&&!Ie?"":Un.people&&Un.people[_.id]||""}function pi(){Ct.forEach(p=>{let _=di(p),v=mn.get(p);if(!_){v&&(v.remove(),mn.delete(p));return}v||(v=document.createElement("span"),je.appendChild(v),mn.set(p,v)),v.textContent=_})}function Gs(){let p=o.position.distanceTo(a.target),_=p<175&&mn.size>0;if(je.style.display=_?"":"none",!_)return;let v=n.clientWidth||innerWidth,C=n.clientHeight||innerHeight,k=C*1.8/(2*p*Math.tan(o.fov*Math.PI/360));je.style.fontSize=Math.max(7,Math.min(12,k*.24)).toFixed(1)+"px",je.classList.toggle("night",Fr>.5);let H=performance.now(),y=H-(Gs.t||0)>300;y&&(Gs.t=H);let z=[];mn.forEach((st,ot)=>{if(!ot.g.visible||ot.inside||Ct.indexOf(ot)<0){st.style.display="none";return}if(ot.g.getWorldPosition(wn),wn.y+=2.05,y){let bt=wn.clone().sub(o.position),Wt=bt.length();ac.set(o.position,bt.normalize()),ac.far=Wt-.3,ot.hidden=ac.intersectObjects(Dd,!1).length>0}if(ot.hidden){st.style.display="none";return}if(wn.project(o),wn.z>1||Math.abs(wn.x)>1.1||Math.abs(wn.y)>1.1){st.style.display="none";return}let It=(wn.x+1)/2*v,lt=(1-wn.y)/2*C;for(let bt=0;bt<4;bt++){let Wt=z.find(ce=>Math.abs(ce[0]-It)<34&&Math.abs(ce[1]-lt)<12);if(!Wt)break;lt=Wt[1]-13}z.push([It,lt]),st.style.display="",st.style.transform="translate("+It.toFixed(1)+"px,"+lt.toFixed(1)+"px) translate(-50%,-100%)"})}let ac=new wr,Dd=X.map(p=>p.userData.pick).filter(Boolean);function Qh(){tn.forEach((p,_)=>{if(_===Et.home)return;let v=wi.filter(k=>Kt(_)>=k).length,C=Ct.filter(k=>k.helper&&k.home===_&&k.goal!=="leave");for(let k=C.length;k<v;k++){let H=ve(gd[k%gd.length],_,{helper:wi[k]});H.g.position.set(Mt.x+kt(-1,1),0,Mt.z+kt(0,.6)),Sn(H,Pt(H),"work")}})}function tu(p,_){let v={x:p.g.position.x,z:p.g.position.z};if(en(v,_))return[_];let C=et.nearest(v.x,v.z),k=et.nearest(_.x,_.z),H=et.path(C,k);if(!en(v,H[0]))return[];let y=H[H.length-1];return en(y,_)&&H.push(_),H}function Ud(p){if(p.kind==="dog"&&Math.random()<.65){let v=Ct[p.buddy%Ct.length];for(let H=0;H<Ct.length&&(!v.g.visible||v.sitting);H++)v=Ct[++p.buddy%Ct.length];let C=v.g.position,k={x:C.x+kt(-1.5,1.5),z:C.z+kt(.8,1.6)};if(Math.random()<.15&&p.buddy++,!Ae(k.x,k.z)&&(p.path=tu(p,k),p.path.length))return}for(let v=0;v<30;v++){let C={x:p.g.position.x+kt(-9,9),z:p.g.position.z+kt(-7,7)};if(!Ae(C.x,C.z,.8)&&en(p.g.position,C)){p.path=[C];return}}let _=et.nodes[et.nearest(p.g.position.x,p.g.position.z)];p.path=[{x:_.x,z:_.z}]}function eu(p,_){let v=p.g.position;if(p.sleep>0)return p.v=0,!1;if(!p.path.length){if(p.v=0,p.wait-=_,p.wait<=0){if(p.kind==="person")return p.wait=kt(1.5,4),ee(p),!1;Ud(p),p.wait=kt(2,6),p.kind==="cat"&&(p.sit=Math.random()<.45,p.sit&&(p.path=[]))}return!1}let C=p.path[0],k=C.x-v.x,H=C.z-v.z,y=Math.hypot(k,H);if(y<.08)return p.path.shift(),!p.path.length&&p.kind==="person"&&pe(p),!0;let st=Math.atan2(k,H)-p.g.rotation.y;st=Math.atan2(Math.sin(st),Math.cos(st)),p.g.rotation.y+=st*Math.min(1,_*7);let ot=y+(p.path.length>1?99:0),It=Math.abs(st)>1.1?p.speed*.15:p.speed*Math.min(1,ot/1.2+.25);p.v=(p.v||0)+(It-(p.v||0))*Math.min(1,_*4);let lt=Math.min(y,p.v*_);return v.x+=Math.sin(p.g.rotation.y)*lt*.35+k/y*lt*.65,v.z+=Math.cos(p.g.rotation.y)*lt*.35+H/y*lt*.65,!0}function Nd(p,_){if(Ct.slice().forEach(y=>{let z=y.love==="him"?ie(y,p):eu(y,p);if(y.inside||!y.g.visible)return;if(y.sitting&&Nt){let lt=y.love==="her"?-.4:.4;he.set(lt,.06,0),Nt.userData.seat.localToWorld(he),Z.worldToLocal(he),y.g.position.set(he.x,he.y-qh,he.z),y.g.rotation.set(Nt.userData.pivot.rotation.x*.9,Nt.rotation.y,0),y.parts.legL.rotation.x=y.parts.legR.rotation.x=-1.45+Math.sin(_*1.7)*.25,y.parts.armL.rotation.x=y.parts.armR.rotation.x=-.5,y.parts.head.rotation.set(0,0,0);return}let st=Math.min(1,(y.v||0)/y.speed);y.t+=p*(z?3+7*st:2);let ot=z?Math.sin(y.t)*.75*st:0;y.parts.legL.rotation.x=ot,y.parts.legR.rotation.x=-ot,y.parts.armL.rotation.x=-ot*.8,y.parts.armR.rotation.x=ot*.8,y.g.rotation.x=0,y.parts.head.rotation.x=0,y.parts.head.rotation.z=0;let It=Pn(y.g.position.x,y.g.position.z);if(y.g.position.y=It+(z?Math.abs(Math.sin(y.t))*.06:0),!z&&!y.path.length){if(y.goal==="hall"){let lt=Math.PI-y.g.rotation.y;lt=Math.atan2(Math.sin(lt),Math.cos(lt)),y.g.rotation.y+=lt*Math.min(1,p*6),y.g.position.y=It+Math.max(0,Math.sin(_*4+y.i))*.1,y.parts.armR.rotation.x=-2.6+Math.sin(_*6+y.i)*.3}else if(y.goal==="work"){let lt=Math.PI-y.g.rotation.y;lt=Math.atan2(Math.sin(lt),Math.cos(lt)),y.g.rotation.y+=lt*Math.min(1,p*6),y.parts.armR.rotation.x=-1.3+Math.sin(_*9+y.i)*.55,y.parts.armL.rotation.x=-.9+Math.sin(_*9+y.i+1.6)*.35,y.parts.head.rotation.x=.25}y.parts.head.rotation.y=y.goal==="work"?0:Math.sin(_*.7+y.i)*.4}else y.parts.head.rotation.y=0}),Et.kiss>0&&Et.him&&Et.him.g.visible){Et.kiss-=p;let y=Et.her,z=Et.him,st=Math.min(1,Math.sin(Math.min(1,(2.4-Et.kiss)/2.4)*Math.PI)*1.6),ot=y.g.position.x-z.g.position.x,It=y.g.position.z-z.g.position.z;if(z.sitting)z.parts.head.rotation.y=.9*st,z.parts.head.rotation.z=.25*st,y.parts.head.rotation.z=-.15*st;else{let lt=Math.atan2(ot,It)-z.g.rotation.y;lt=Math.atan2(Math.sin(lt),Math.cos(lt)),z.g.rotation.y+=lt*Math.min(1,p*8);let bt=Math.atan2(-ot,-It)-y.g.rotation.y;bt=Math.atan2(Math.sin(bt),Math.cos(bt)),y.g.rotation.y+=bt*Math.min(1,p*3)*.5,z.g.rotation.x=.2*st}Bt.visible=!0,Bt.position.set((y.g.position.x+z.g.position.x)/2,2+(2.4-Et.kiss)*.35,(y.g.position.z+z.g.position.z)/2),Bt.material.opacity=Math.min(1,Et.kiss*1.5),Et.kiss<=0&&(Bt.visible=!1,z.g.rotation.x=0)}if(Nt){let y=Nt.userData.pivot,z=Et.her&&Et.her.sitting;y.rotation.x=z?Math.sin(_*1.7)*(Et.kiss>0?.12:.32):y.rotation.x*Math.max(0,1-p*1.5)}let v=Si(Yi());X.forEach((y,z)=>{if(!y.userData.wm)return;let st=0;if(z===Et.home?st=0:(Kt(z)>0||y.userData.alwaysLit||v!=="sleep"&&Ct.some(ot=>ot.home===z&&ot.inside))&&(st=1),y.userData.lit=zn(y.userData.lit||0,st,Math.min(1,p*2)),y.userData.wm.emissiveIntensity=Fr*(.28+.7*y.userData.lit),y.userData.heart){let ot=Et.her&&Et.her.inside&&Et.him.inside;y.userData.heart.material.emissiveIntensity=ot?.5+Math.max(0,Math.sin(_*5))*1.3:.2}Kt(z)>0&&y.userData.chimney&&Math.random()<p*2.2&&kn(y)});for(let y=Dn.length-1;y>=0;y--){let z=Dn[y];z.life+=p,z.m.position.y+=p*.9,z.m.position.x+=p*.25,z.m.scale.setScalar(1+z.life*.9),z.m.material.opacity=Math.max(0,.75-z.life*.3),z.life>2.5&&(Z.remove(z.m),z.m.material.dispose(),Dn.splice(y,1))}Fe+=p,Fe>2&&(Fe=0,Qh()),[Y,Ut].forEach(y=>{if(y.sleep>0){y.sleep-=p;let It=Math.min(1,y.sleepIn+=p*3);y.parts.legs.forEach((lt,bt)=>{lt.rotation.x=(bt<2?-1.45:1.45)*It}),y.g.position.y=Pn(y.g.position.x,y.g.position.z)-.22*It*y.g.scale.y,y.parts.head.rotation.x=.35*It,y.parts.head.rotation.y=0,y.parts.eyes.forEach(lt=>{lt.scale.y=1-.8*It}),y.parts.tail.rotation.z=Math.sin(_*.8)*.15,y.zzz.visible=!0,y.zzz.position.set(y.g.position.x,.95+_*.6%1*.45,y.g.position.z),y.zzz.material.opacity=.9-_*.6%1*.6,y.sleep<=0&&(y.zzz.visible=!1,y.parts.eyes.forEach(lt=>{lt.scale.y=1}),y.parts.head.rotation.x=0,y.wait=kt(.3,1));return}let z=eu(y,p),st=Math.min(1,(y.v||0)/y.speed);y.t+=p*(z?4+8*st:2);let ot=z?Math.sin(y.t)*.6*st:0;y.parts.legs.forEach((It,lt)=>{It.rotation.x=lt===0||lt===3?ot:-ot}),y.kind==="cat"?(y.parts.tail.rotation.z=Math.sin(_*2)*.35,y.parts.tail.rotation.x=y.sit&&!z?.9:.5,y.g.children[0].rotation.x=0,y.parts.head.rotation.y=z?0:Math.sin(_*.5)*.5,y.g.position.y=Pn(y.g.position.x,y.g.position.z)):(y.parts.tail.rotation.z=Math.sin(_*(z?18:10))*.6,y.parts.head.rotation.x=z?0:Math.sin(_*1.3)*.1,y.g.position.y=Pn(y.g.position.x,y.g.position.z)+(z?Math.abs(Math.sin(y.t))*.07:0))});for(let y=ke.length-1;y>=0;y--){let z=ke[y];z.m.position.y>-.08?(z.vy-=p*9,z.m.position.y=Math.max(-.08,z.m.position.y+z.vy*p),z.m.position.y===-.08&&Ur(z.m.position.x,z.m.position.z,.5)):z.m.position.y=-.08+Math.sin(_*3+y)*.015,z.life-=p,z.life<=0&&(Z.remove(z.m),ke.splice(y,1))}at.forEach(y=>{y.t+=y.dir*y.sp*p,(y.t>.93||y.t<.12)&&(y.dir*=-1,y.t=Math.max(.12,Math.min(.93,y.t)));let z=qt.curve.getPointAt(y.t),st=qt.curve.getTangentAt(y.t),ot=y.side+Math.sin(_*.7+y.ph)*.2;y.g.position.set(z.x-st.z*ot,-.36,z.z+st.x*ot),y.g.rotation.y=Math.atan2(st.x*y.dir,st.z*y.dir),y.g.userData.tail.rotation.y=Math.sin(_*9+y.ph)*.5}),_t.forEach(y=>{y.a+=y.sp*p;let z=se.x+Math.cos(y.a)*(se.rx-1.6)*y.r,st=se.z+Math.sin(y.a)*(se.rz-1)*y.r,ot=null,It=1e9;if(ke.forEach(lt=>{if(lt.m.position.y<=-.02){let bt=Math.hypot(lt.m.position.x-y.g.position.x,lt.m.position.z-y.g.position.z);bt<It&&(It=bt,ot=lt)}}),ot&&!y.jump){let lt=ot.m.position.x-y.g.position.x,bt=ot.m.position.z-y.g.position.z,Wt=Math.hypot(lt,bt),ce=Math.min(Wt,2.6*p);y.g.position.x+=lt/(Wt||1)*ce,y.g.position.z+=bt/(Wt||1)*ce,y.g.position.y=-.3,y.g.rotation.y=Math.atan2(lt,bt),Wt<.25&&(Z.remove(ot.m),ke.splice(ke.indexOf(ot),1),Ur(ot.m.position.x,ot.m.position.z,.6)),y.a=Math.atan2((y.g.position.z-se.z)/(se.rz-1),(y.g.position.x-se.x)/(se.rx-1.6)),y.r=Math.min(.85,Math.max(.2,Math.hypot((y.g.position.x-se.x)/(se.rx-1.6),(y.g.position.z-se.z)/(se.rz-1)))),y.g.userData.tail.rotation.y=Math.sin(_*16+y.a)*.6;return}if(y.jump>0){y.jump+=p*.9;let lt=Math.sin(y.jump*Math.PI)*1.8;y.g.position.set(zn(y.jx,z,y.jump),-.34+lt,zn(y.jz,st,y.jump)),y.g.rotation.x=-Math.cos(y.jump*Math.PI)*1.1,y.jump>=1&&(y.jump=0,y.g.rotation.x=0,pn.position.set(z,-.09,st),pn.material.opacity=.55,pn.scale.setScalar(1))}else{let lt=z-y.g.position.x,bt=st-y.g.position.z;y.g.position.set(zn(y.g.position.x,z,Math.min(1,p*6)),-.34,zn(y.g.position.z,st,Math.min(1,p*6))),(lt||bt)&&(y.g.rotation.y=Math.atan2(lt,bt)),Math.random()<p*.05&&(y.jump=.001,y.jx=z,y.jz=st,pn.position.set(z,-.09,st),pn.material.opacity=.55,pn.scale.setScalar(1))}y.g.userData.tail.rotation.y=Math.sin(_*8+y.a)*.5}),qt.glints.forEach(y=>{y.t=(y.t+y.sp*p*6)%1;let z=qt.curve.getPointAt(y.t),st=qt.curve.getTangentAt(y.t);y.m.position.set(z.x-st.z*y.side,.06,z.z+st.x*y.side),y.m.rotation.z=-Math.atan2(st.z,st.x),y.m.material.opacity=.35+Math.abs(Math.sin(_*3+y.side*9))*.5}),qt.ftex.offset.y=(qt.ftex.offset.y+p*1.6)%1,wt.jet.scale.y=1+Math.sin(_*6)*.08,Q.forEach(y=>{y.t=(y.t+p*.35)%1,y.m.position.set(y.x+Math.sin(y.t*6+y.z)*.3,-.1+y.t*1.8,y.z+y.t*.8),y.m.material.opacity=.55*(1-y.t),y.m.scale.setScalar(.6+y.t*1.2)}),wt.drops.forEach(y=>{y.t=(y.t+p*.7)%1;let z=.15+y.t*.95,st=2.25+y.t*.6-y.t*y.t*2.35;y.m.position.set(Math.cos(y.a)*z,st,Math.sin(y.a)*z)}),qt.foam.forEach((y,z)=>{let st=.8+Math.abs(Math.sin(_*5+z))*.5;y.scale.setScalar(st)}),N.ducks.forEach(y=>{y.a+=y.sp*p;let z=se.x+Math.cos(y.a)*(se.rx-2),st=se.z+Math.sin(y.a)*(se.rz-1.2);y.g.rotation.y=Math.atan2(z-y.g.position.x,st-y.g.position.z)||y.g.rotation.y,y.g.position.set(z,-.2+Math.sin(_*2+y.a)*.03,st)});for(let y=Ln.length-1;y>=0;y--){let z=Ln[y];z.material.opacity-=p*1.2,z.scale.multiplyScalar(1+p*2.5*z.userData.size),z.material.opacity<=0&&(Z.remove(z),z.geometry.dispose(),Ln.splice(y,1))}pn.material.opacity>0&&(pn.material.opacity=Math.max(0,pn.material.opacity-p*.8),pn.scale.multiplyScalar(1+p*1.8)),ui.forEach(y=>{y.ph+=p,y.g.position.set(y.cx+Math.sin(y.ph*.4)*6,1.6+Math.sin(y.ph*1.3)*.5,y.cz+Math.cos(y.ph*.33)*4),y.g.rotation.y=y.ph*.4+Math.PI/2;let z=Math.sin(y.ph*18)*1.1;y.g.userData.l.rotation.y=z,y.g.userData.r.rotation.y=-z});let C=Vs.geometry.attributes.position;for(let y=0;y<C.count;y++)C.setY(y,1.5+Math.sin(_*.8+y)*.8),C.setX(y,C.getX(y)+Math.sin(_*.5+y*3)*p*.4);if(C.needsUpdate=!0,L.forEach(y=>{y.position.x+=y.userData.speed*p,y.position.x>90&&(y.position.x=-90)}),qn&&iu(p),O.rotation.y+=p*.012,A.forEach(y=>{y.position.y=y.userData.y0+Math.sin(_*.5+y.userData.ph)*.3}),W.forEach(y=>{y.material.opacity=y.userData.base*Math.max(0,Math.sin(_*1.8+y.userData.ph))}),tt.forEach(y=>{y.material.opacity=y.userData.base*(.55+.45*Math.sin(_*1.3+y.userData.ph))}),Fr>.6)if(G.t<0){if(G.wait-=p,G.wait<=0){let y=kt(0,Math.PI*2);G.from.set(Math.cos(y)*180,kt(110,170),Math.sin(y)*180-40),G.dir.set(kt(-1,1),kt(-.55,-.35),kt(-.3,.3)).normalize(),G.t=0}}else{G.t+=p/1.1,F.position.copy(G.from).addScaledVector(G.dir,G.t*120);let y=F.position.clone().project(o),z=F.position.clone().addScaledVector(G.dir,10).project(o);F.material.rotation=Math.atan2(z.y-y.y,z.x-y.x),F.material.opacity=Math.sin(Math.min(1,G.t)*Math.PI)*.95,G.t>=1&&(G.t=-1,G.wait=kt(7,16),F.material.opacity=0)}else F.material.opacity=0;let k=pt.userData.flag;k.rotation.y=Math.sin(_*3)*.25;let H=pt.userData.bell;H.material.emissiveIntensity=Yn?.6+Math.sin(_*6)*.4:0,H.rotation.z=Yn?Math.sin(_*7)*.35:0}let qn=null;function nu(p,_){if(!ft.car||qn)return!1;_=_||{};let v=ft.car,C={x:v.position.x,z:v.position.z,ry:v.rotation.y},k=et.nearest(ft.exit.x,ft.exit.z),H=new Set(et.doorNodes),z=et.nodes.map((me,Be)=>Be).filter(me=>!H.has(me)&&Math.abs(Pn(et.nodes[me].x,et.nodes[me].z))<.2).filter(me=>Math.hypot(et.nodes[me].x-C.x,et.nodes[me].z-C.z)>30),st=me=>me[Math.floor(Math.random()*me.length)],ot=(t.houses||[]).findIndex(me=>me.id==="store"),It=_.onShop&&ot>=0?et.nearest(et.nodes[et.doorNodes[ot]].x,et.nodes[et.doorNodes[ot]].z,!0):-1,lt=(It>=0?[It]:[]).concat(z.length?[st(z)]:[]),bt=[{x:C.x,z:C.z},{x:ft.exit.x,z:ft.exit.z}],Wt=k,ce=-1;return lt.concat([k]).forEach(me=>{et.path(Wt,me).forEach(Be=>bt.push({x:Be.x,z:Be.z})),Wt=me,me===It&&ce<0&&(ce=bt.length-1)}),bt.push({x:ft.exit.x,z:ft.exit.z},{x:C.x,z:C.z-Math.cos(C.ry)*.01}),ce>=0&&(bt[ce].shop=!0),bt=bt.filter((me,Be)=>me.shop||!Be||Math.hypot(me.x-bt[Be-1].x,me.z-bt[Be-1].z)>.3),qn={pts:bt,i:1,home:C,done:p,v:0,last:0,onShop:_.onShop,wait:!1},!0}function iu(p){let _=ft.car,v=qn,C=v.pts[v.i];if(v.wait)return;let k=v.i===v.pts.length-1,H=C.x-_.position.x,y=C.z-_.position.z,z=Math.hypot(H,y);if(v.v=Math.min(k?2:6.5,v.v+p*3),z<.35){if(C.shop&&v.onShop){C.shop=!1,v.wait=!0,v.v=0,v.onShop(()=>{qn===v&&(v.wait=!1)});return}if(v.i++,v.i>=v.pts.length){_.position.set(v.home.x,Pn(v.home.x,v.home.z),v.home.z),_.rotation.y=v.home.ry;let lt=v.done;qn=null,lt&&lt();return}return}let st=Math.min(z,v.v*p);_.position.x+=H/z*st,_.position.z+=y/z*st,_.position.y=Pn(_.position.x,_.position.z);let ot=Math.atan2(H,y)+(k?Math.PI:0),It=_.rotation.y;for(;ot-It>Math.PI;)ot-=Math.PI*2;for(;ot-It<-Math.PI;)ot+=Math.PI*2;_.rotation.y=It+(ot-It)*Math.min(1,p*5)}let Fr=0;function Br(){let p=new Date,_=i!=null?i:p.getHours()+p.getMinutes()/60,v=Ld(_);Fr=v.night,r.background=v.sky,r.fog.color.copy(v.sky),x.uniforms.bottom.value.copy(v.sky).lerp(new re(16777215),.18*(1-v.night)).lerp(new re(10324950),.4*v.night),x.uniforms.top.value.copy(v.sky).lerp(new re(v.night>.5?2501490:7320547),.5),d.intensity=v.amb,d.color.set(v.night>.5?13158143:16777215),d.groundColor.set(v.night>.5?8160432:12048288),g.color.copy(v.sun),g.intensity=v.power;let C=(_-6)/12*Math.PI,H=_>=5.5&&_<=18.6?C:((_+12)%24-6)/12*Math.PI,y=Math.cos(H)*70,z=Math.max(Math.sin(H),.25)*70;g.position.set(y,z,40),g.target.position.set(0,0,0),T.position.set(Math.cos(C)*200,Math.sin(C)*160,-120),T.visible=Math.sin(C)>-.05;let st=((_+12)%24-6)/12*Math.PI;b.position.set(Math.cos(st)*200,Math.sin(st)*160,-120),b.visible=v.night>.3&&Math.sin(st)>0,I.material.opacity=v.night,tt.forEach(ot=>{ot.userData.base=v.night}),O.mat.color.set(v.night>.5?10131656:16777215),W.forEach(ot=>{ot.userData.base=.55+v.night*.45}),Vs.material.opacity=v.night*.95,ic.forEach(ot=>{ot.emissiveIntensity=v.night*.95}),M.forEach(ot=>{ot.intensity=v.night*18}),L.forEach(ot=>{ot.userData.mat.color.set(v.night>.5?8029096:16777215)}),ui.forEach(ot=>{ot.g.visible=v.night<.5})}let No=1,Oo=1;function Fo(){No=n.clientWidth||window.innerWidth,Oo=n.clientHeight||window.innerHeight,s.setSize(No,Oo,!1),o.aspect=No/Oo,o.updateProjectionMatrix()}let Ti=new cn;function Od(p,_){Ti.fov=o.fov,Ti.aspect=o.aspect,Ti.near=.5,Ti.far=1e3,Ti.updateProjectionMatrix();let v=[];for(let y=0;y<48;y++){let z=y/48*Math.PI*2,st=Dr(z);v.push(new U(Math.cos(z)*st,0,Math.sin(z)*st))}v.push(new U(Cn[0],9+Hs.h,Cn[1])),ls.forEach(([y,z,st,ot])=>v.push(new U(y,ot,z))),tn.forEach(([y,z])=>v.push(new U(y,6.5,z)));let C=y=>{Ti.position.set(0,Math.cos(p)*y,Math.sin(p)*y).add(_),Ti.lookAt(_),Ti.updateMatrixWorld();let z=new U;return v.every(st=>(z.copy(st).project(Ti),Math.abs(z.x)<.97&&z.y>-.97&&z.y<.86))},k=10,H=600;for(let y=0;y<30;y++){let z=(k+H)/2;C(z)?H=z:k=z}return H}function cc(){Fo();let p=e==="port"?.6:.88,_=new U(0,0,1.5),v=Od(p,_);return{p:new U(0,Math.cos(p)*v,Math.sin(p)*v).add(_),t:_}}function su(){let p=cc();a.target.copy(p.t),o.position.copy(p.p),a.update()}let Fd=1800,Bd=1900,Ve=null,zr=!1,Hr=null,lc=p=>p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;function ru(p){let _=p.userData.face||0,v=Math.sin(_),C=Math.cos(_),k=p.userData.doorZ-1.3,H=p.position.y,y=(z,st)=>new U(p.position.x+v*(k+z),H+st,p.position.z+C*(k+z));return{near:y(3.2,1.75),nearT:y(-1,1.45),inside:y(.35,1.6),insideT:y(-2,1.4)}}function ou(p,_,v,C){if(!v)return p.clone().lerp(_,C);let k=p.clone().lerp(_,C),H=_.clone().lerp(v,C);return k.lerp(H,C)}function zd(p,_,v){let C=X.find(H=>H.userData.id===p);if(!C){_&&_();return}let k=ru(C);Hr={p:o.position.clone(),t:a.target.clone()},Ve={mode:"in",start:performance.now(),dur:Fd,h:C,done:_,at:v&&v.at,atFired:!1,p:[Hr.p,k.near,k.inside],t:[Hr.t,k.nearT,k.insideT]},a.enabled=!1,zr=!0}function Hd(p,_){let v=X.find(H=>H.userData.id===p);if(!v){au(),_&&_();return}let C=ru(v),k=Hr||cc();v.userData.hinge&&(v.userData.hinge.rotation.y=-1.7),o.position.copy(C.inside),a.target.copy(C.insideT),o.lookAt(a.target),Ve={mode:"out",start:performance.now(),dur:Bd,h:v,done:_,p:[C.inside,C.near,k.p],t:[C.insideT,C.nearT,k.t]},a.enabled=!1,zr=!0}function kd(){if(!Ve)return;let p=Math.min(1,(performance.now()-Ve.start)/Ve.dur),_=lc(p);o.position.copy(ou(Ve.p[0],Ve.p[1],Ve.p[2],_)),a.target.copy(ou(Ve.t[0],Ve.t[1],Ve.t[2],_)),o.lookAt(a.target);let v=Ve.h.userData.hinge;if(v&&(Ve.mode==="in"?v.rotation.y=-1.7*lc(Math.min(1,Math.max(0,(p-.25)/.45))):v.rotation.y=-1.7*(1-lc(Math.min(1,Math.max(0,(p-.2)/.5))))),Ve.at&&!Ve.atFired&&p>=Ve.at.k&&(Ve.atFired=!0,Ve.at.fn()),p>=1){let C=Ve.done,k=Ve.mode;Ve=null,k==="out"&&(zr=!1,a.enabled=!0,a.update()),C&&C()}}function au(){if(!zr||Ve&&Ve.mode==="out")return;zr=!1,Ve=null,a.enabled=!0,X.forEach(_=>{_.userData.hinge&&(_.userData.hinge.rotation.y=0)});let p=Hr||cc();o.position.copy(p.p),a.target.copy(p.t),a.update()}let Ws=new wr,cu=new vt,Ai=null,Xs=0,hc=!1;window.addEventListener("pointerdown",p=>{!p.isTrusted||p.pointerType!=="touch"||(p.isPrimary&&(Xs=0,hc=!1),Xs++,Xs>1&&(hc=!0))},!0);let lu=p=>{p.isTrusted&&p.pointerType==="touch"&&(Xs=Math.max(0,Xs-1))};window.addEventListener("pointerup",lu,!0),window.addEventListener("pointercancel",lu,!0),s.domElement.addEventListener("pointerdown",p=>{(p.isPrimary||p.pointerType!=="touch")&&(Ai={x:p.clientX,y:p.clientY,t:performance.now()})}),s.domElement.addEventListener("pointercancel",()=>{Ai=null}),s.domElement.addEventListener("pointerup",p=>{if(!p.isTrusted||p.pointerType==="touch"&&(hc||Xs>0)){Ai=null;return}if(!Ai||Math.hypot(p.clientX-Ai.x,p.clientY-Ai.y)>8||performance.now()-Ai.t>600){Ai=null;return}Ai=null;let _=s.domElement.getBoundingClientRect();if(cu.set((p.clientX-_.left)/_.width*2-1,-((p.clientY-_.top)/_.height)*2+1),Ws.setFromCamera(cu,o),Et.her&&Et.her.g.visible&&Et.him.g.visible&&Ws.intersectObjects([Et.her.g,Et.him.g],!0)[0]){Et.kiss>0||(Et.kiss=2.4,Et.her.sitting||(Et.her.path=[],Et.her.wait=Math.max(Et.her.wait,2.8)));return}if(ft.car&&!qn&&t.onCar&&Ws.intersectObject(ft.car,!0)[0]){t.onCar();return}let v=Ws.intersectObjects([Y.g,Ut.g],!0)[0];if(v){let y=Y.g.getObjectById(v.object.id)?Y:Ut;y.sleep>0||(y.sleep=3,y.sleepIn=0,y.path=[]);return}let C=Ws.intersectObject(dt)[0];if(C){Hn(C.point.x-Z.position.x,C.point.z-Z.position.z);return}let k=Ws.intersectObjects(X,!0)[0];if(!k)return;let H=k.object;for(;H&&!H.userData.id;)H=H.parent;H&&t.onPick(H.userData.id)});let kr=new U;function Vd(p){let _=X.find(v=>v.userData.id===p);return _?(kr.set(_.position.x,_.position.y+_.userData.top,_.position.z),kr.project(o),{x:(kr.x+1)/2*No,y:(1-kr.y)/2*Oo,visible:kr.z<1}):null}let uc=new Co,Vr=!1,Ys=!0,hu=0,uu=[];function fu(){if(!Vr)return;if(!Ys||document.hidden){Vr=!1;return}requestAnimationFrame(fu);let p=Math.min(.12,uc.getDelta()),_=uc.elapsedTime;_-hu>20&&(Br(),hu=_),Nd(p,_),Ve?kd():a.update(),s.render(r,o),uu.forEach(v=>v()),Gs()}function fc(){Vr||(Vr=!0,uc.getDelta(),requestAnimationFrame(fu))}let du=()=>{!document.hidden&&Ys&&(Br(),fc())},pu=()=>{Ys&&Fo()};return document.addEventListener("visibilitychange",du),window.addEventListener("resize",pu),Br(),su(),fc(),/[?&]debug3d/.test(location.search)&&(window.__v3d={SOURCE:Fn,POND:se,drive:(p,_)=>nu(p,_),driveFF:p=>{for(let _=0;_<p&&qn;_++)iu(.1);return qn?qn.i+"/"+qn.pts.length+(qn.wait?" wait":""):"home"},get car(){return ft.car},renderer:s,people:Ct,couple:Et,get swing(){return Nt},graph:et,cat:Y,dog:Ut,routine:Si,realHour:Yi,camera:o,controls:a,water:dt,food:ke,get urgent(){return Yn}}),{setUrgent(p){let _=Yn;Yn=p||0,!!_!=!!Yn&&Ct.forEach(v=>{!v.love&&!v.helper&&(v.path=[],v.wait=kt(0,1.5))})},setBusy(p){let _={};(t.houses||[]).forEach((v,C)=>{p&&p[v.id]>0&&(_[C]=p[v.id])}),Zt=_,Qh()},anchor:Vd,onFrame(p){uu.push(p)},night(){return Fr},setTimeMode(p){i=p==="day"?11:p==="night"?22:null,Br()},show(p){Ys=!!p,Ys&&(au(),Fo(),Br(),fc())},enterHouse:zd,exitHouse:Hd,drive:nu,setNames(p,_){Un=p||null,Ie=!!_,Nn(),pi()},genderOf(p){let _=Ct.find(v=>!v.love&&!v.helper&&(t.houses||[])[v.home]&&t.houses[v.home].id===p);return _?Rd(_.parts.look)?"f":"m":""},resize:Fo,recenter:su,layout:e,destroy(){Vr=!1,Ys=!1,document.removeEventListener("visibilitychange",du),window.removeEventListener("resize",pu),a.dispose(),r.traverse(p=>{p.geometry&&p.geometry.dispose()}),s.dispose(),s.domElement.remove()}}}var bn=9,$n=7,En=4.4,rc=7;function Qa(n,t){return new re(n).lerp(new re(16777215),t).getHex()}function li(n,t,e,i,s){let r=new $t;return r.position.set(t,0,e),r.rotation.y=i||0,n.add(r),r.add(D(2.2,.08,1,s||14267535,0,.78,0)),[[-1,-.42],[1,-.42],[-1,.42],[1,.42]].forEach(([o,a])=>r.add(D(.08,.78,.08,11569768,o,.39,a))),r}function Wn(n,t,e,i){let s=new $t;return s.position.set(t,0,e),s.rotation.y=i||0,n.add(s),s.add(D(.55,.08,.55,16165309,0,.5,0)),s.add(D(.55,.6,.08,16165309,0,.82,-.26)),[[-.22,-.22],[.22,-.22],[-.22,.22],[.22,.22]].forEach(([r,o])=>s.add(D(.06,.5,.06,9206379,r,.25,o))),s}function Fs(n,t,e){n.add(D(.7,.04,.48,14211296,t,.84,e));let i=D(.7,.46,.04,14211296,t,1.07,e-.24);i.rotation.x=-.25,n.add(i);let s=D(.62,.38,.02,0,t,1.07,e-.215,new Je({color:12576498}));s.rotation.x=-.25,n.add(s)}function hi(n,t,e,i,s){let r=new $t;r.position.set(t,0,e),r.rotation.y=i||0,n.add(r),r.add(D(1.8,2.4,.4,12883572,0,1.2,0));for(let o=0;o<4;o++){r.add(D(1.7,.06,.36,14862765,0,.3+o*.55,.03));for(let a=0;a<(s||6);a++){let c=bi.flower[(a+o)%bi.flower.length],l=.3+(a*7+o*3)%4*.04;r.add(D(.16,l,.28,c===16777215?10934504:c,-.7+a*.24,.33+o*.55+l/2,.05))}}return r}function Rn(n,t,e){n.add(D(.5,.5,.5,0,t,.25,e,qe(ut.CLAY,16368540))),[[0,.78,0,.56],[.2,1.18,.1,.36],[-.18,1.12,-.12,.34]].forEach(([i,s,r,o],a)=>n.add(D(o,o,o,0,t+i,s,e+r,qe([ut.LEAF_G,ut.LEAF_L,ut.LEAF_M][a]))))}function Xi(n,t,e,i,s,r,o,a,c){let l=new $t;return l.position.set(t,e,i),l.rotation.y=s,n.add(l),l.add(D(r+.12,o+.12,.05,12883572,0,0,0)),l.add(D(r,o,.06,a,0,0,.01)),(c||[]).forEach(([h,u,f,d])=>l.add(D(d||.32,d||.32,.03,f,h,u,.06))),l}function Do(n,t,e,i,s){let r=[[-.45,.25],[-.15,.45],[.15,.35],[.45,.6]],o=Xi(n,t,e,i,s,1.4,1.1,16775920);return r.forEach(([a,c],l)=>o.add(D(.2,c,.03,[16758465,10934504,14542964,14273008][l],a,-.4+c/2,.06))),o}function vd(n,t,e,i,s,r){let o=r?2.2:1.1,a=r?1.6:.9,c=Xi(n,t,e,i,s,o,a,16777215);c.add(D(o,a*.18,.04,16751536,0,a*.41,.05));for(let l=0;l<4;l++)for(let h=0;h<7;h++){let u=(l*7+h)%9===3;c.add(D(o/9,a/7,.02,u?16766687:15985894,-o/2+(h+1)*o/8,a*.2-l*a/5.5,.06))}return c}function d1(n,t,e,i,s){let r=new $t;r.position.set(t,e,i),r.rotation.y=s,n.add(r);let o=new Rt(new Ge(.35,.35,.06,20),fe(16775920));o.rotation.x=Math.PI/2,r.add(o);let a=new Rt(new Ps(.36,.04,6,20),fe(16165309));r.add(a);let c=D(.04,.18,.02,4865855,0,.08,.05),l=D(.03,.27,.02,4865855,0,.12,.06);return r.add(c,l),r.userData.hands=[c,l],r}function p1(n,t,e){let i=new Rt(new hn(.28,12,10),fe(16758465));i.scale.set(1.3,1,1),i.position.set(t,1.1,e),n.add(i),n.add(D(.12,.1,.1,16751536,t+.38,1.1,e)),[[-.15,-.12],[.15,-.12],[-.15,.12],[.15,.12]].forEach(([s,r])=>n.add(D(.07,.12,.07,16751536,t+s,.86,e+r))),n.add(D(.12,.02,.03,9202282,t,1.38,e));for(let s=0;s<3;s++)for(let r=0;r<2+s;r++){let o=new Rt(new Ge(.09,.09,.03,12),fe(16111752));o.position.set(t-.7+s*.22,.84+r*.035,e+.1),n.add(o)}}function Ed(n,t,e,i){let s=new $t;s.position.set(t,0,e),s.rotation.y=i||0,n.add(s),s.add(D(1,1.1,.9,10135480,0,.55,0));let r=new Rt(new Ge(.14,.14,.05,14),fe(16111752));return r.rotation.x=Math.PI/2,r.position.set(.15,.6,.46),s.add(r),s.add(D(.06,.3,.05,16111752,-.3,.6,.46)),s}function m1(n,t,e,i){let s=new $t;return s.position.set(t,0,e),s.rotation.y=i||0,n.add(s),s.add(D(2,.08,.45,12883572,0,1.3,0)),s.add(D(2,.08,.45,12883572,0,.6,0)),[-1,1].forEach(r=>s.add(D(.08,1.4,.45,11569768,r*.96,.7,0))),[.6,1.3].forEach((r,o)=>[-.65,-.2,.25,.7].forEach((a,c)=>{let l=new Rt(new Ge(.15,.15,.4,12),new ye({color:15136507,transparent:!0,opacity:.7}));l.position.set(a,r+.24,0),s.add(l);let h=.08+(c+o*2)%4*.08,u=new Rt(new Ge(.12,.12,h,12),fe(16111752));u.position.set(a,r+.06+h/2,0),s.add(u)})),s}function g1(n,t,e,i){let s=new $t;return s.position.set(t,0,e),s.rotation.y=i||0,n.add(s),s.add(D(.9,1.5,.7,10934504,0,.75,0)),[.35,.8,1.25].forEach(r=>{s.add(D(.8,.38,.04,12576498,0,r,.36)),s.add(D(.25,.05,.05,16775920,0,r+.08,.39))}),s}function x1(n,t,e){[0,2.1,4.2].forEach(r=>{let o=D(.04,1.4,.04,7035470,t+Math.cos(r)*.25,.65,e+Math.sin(r)*.25);o.rotation.set(Math.sin(r)*.3,0,-Math.cos(r)*.3),n.add(o)}),n.add(D(.4,.28,.25,4865855,t,1.45,e));let i=new Rt(new Ge(.09,.09,.15,12),fe(3025462));i.rotation.x=Math.PI/2,i.position.set(t,1.45,e+.18),n.add(i);let s=new Rt(new Ps(.4,.05,6,24),new Je({color:16774351}));s.position.set(t-.9,1.7,e-.3),n.add(s),n.add(D(.04,1.7,.04,7035470,t-.9,.85,e-.3))}function _1(n,t,e,i,s){let r=Xi(n,t,e,i,s,1.2,.7,15785156);[-.4,-.13,.13,.4].forEach((o,a)=>{r.add(D(.05,.05,.08,9206379,o,.18,.08)),r.add(D(.1,.22,.03,[16111752,10934504,16758465,10738109][a],o,-.02,.08))})}var Gh={work:{first:"list",build(n,t){let e=li(n,-1.6,-2.4);Fs(e,.2,0),e.add(D(.3,.2,.22,16777215,-.75,.92,.1)),Wn(n,-1.4,-1.55,Math.PI),t.seat={x:-1.4,z:-1.6,ry:Math.PI,y:.54},Xi(n,-4.45,1.8,.4,Math.PI/2,2.6,1.4,16777215,[[-.9,.35,16773544],[-.4,.4,16758465],[.1,.3,10934504],[.6,.38,10738109],[-.8,-.2,16758465],[-.2,-.25,16773544],[.5,-.2,14273008]]),hi(n,4.25,-.6,-Math.PI/2),Do(n,4.44,2.2,1.6,-Math.PI/2),x1(n,3.4,4.6),Rn(n,-3.9,-3)},corners:{list:[.8,2.9,5.8,-1.3,1,-2.2],board:[2.4,2.7,4.2,-4.3,1.6,.3],stats:[-2.4,2.7,4.2,4.3,1.5,.3],posts:[-.6,2.5,8.6,3.2,1.3,4.4]}},money:{first:"overview",build(n,t){let e=li(n,0,-2.3,0,16368540);p1(e,.4,0),e.add(D(.35,.05,.45,9417689,-.5,.84,.1)),Wn(n,.2,-1.45,Math.PI),t.seat={x:.2,z:-1.5,ry:Math.PI,y:.54},vd(n,-4.44,1.9,-.8,Math.PI/2,!0),Do(n,-4.44,1.9,2.1,Math.PI/2),m1(n,4.2,-1,-Math.PI/2),g1(n,3.6,-3,0),Ed(n,3.6,2,-Math.PI/2.5),Rn(n,-3.9,-3),t.windowX=-1.9},corners:{overview:[.6,2.9,5.8,0,1,-2.3],calendar:[2.6,2.7,3.6,-4.3,1.8,-.8],stats:[2.6,2.7,5.4,-4.3,1.8,1.8],budget:[-2.4,2.7,3.6,4.2,1.1,-1.2],history:[-1.6,2.7,3.8,3.4,1,-3],categories:[-1.6,2.5,6.2,3.6,.7,2]}},calendar:{first:"main",build(n,t){vd(n,-.1,2.05,-3.44,0,!0),d1(n,-2.6,2.5,-3.44,0),t.windowX=2.9;let e=li(n,-1.2,-1.6);e.add(D(.5,.06,.36,16773544,.3,.84,0)),e.add(D(.04,.04,.3,15834032,.65,.88,0)),Wn(n,-1,-.75,Math.PI),t.seat={x:-1,z:-.8,ry:Math.PI,y:.54},hi(n,4.25,.2,-Math.PI/2,5),Rn(n,3.8,2.6)},corners:{main:[-.2,2.9,5.8,-.4,1.5,-2.8]}},account:{first:"main",build(n,t){Ed(n,3.7,-2.6,-.3),_1(n,-.5,2,-3.44,0),t.windowX=1.7;let e=li(n,-1.8,-1.8,.2);Fs(e,0,0),Wn(n,-1.75,-.95,Math.PI+.2),t.seat={x:-1.72,z:-1,ry:Math.PI+.2,y:.54},hi(n,-4.25,.6,Math.PI/2,5),Rn(n,3.9,1.8)},corners:{main:[-.2,2.9,5.8,-.9,1.2,-2.4]}},love:{first:"main",build(n,t){let i=new $t;i.position.set(.5,0,-2.4),n.add(i),i.add(D(2.6,.45,.9,16165309,0,.32,0)),i.add(D(2.6,.75,.25,15834032,0,.8,-.35)),[-1,1].forEach(F=>i.add(D(.25,.65,.9,15834032,F*1.3,.45,0)));let s=hs(16744350);s.scale.setScalar(.4),s.position.set(1,.75,-.15),i.add(s),t.seats=[{x:.05,z:-2.25,ry:0,y:.56},{x:.95,z:-2.25,ry:0,y:.56}],t.sofa=!0,t.couple=!0,[[1.1,2.95,.55,3095915],[1.4,2.95,-.55,15230251]].forEach(([F,G,Z,q])=>{let mt=new $t;mt.position.set(F,G,-3.44+.06),mt.rotation.z=Z,n.add(mt),mt.add(D(.06,.34,.05,16777215,0,-.5,0)),mt.add(D(.025,.34,.025,10135480,0,-.17,0));let j=new Rt(new Ps(.17,.02,6,22),fe(q));j.scale.y=1.3,j.position.y=.2,mt.add(j);for(let yt=-3;yt<=3;yt++)mt.add(D(.004,.42,.004,16777215,yt*.045,.2,0)),mt.add(D(.32,.004,.004,16777215,0,.2+yt*.055,0))});{let F=document.createElement("canvas");F.width=128,F.height=64;let G=F.getContext("2d");G.fillStyle="#ffffff",G.fillRect(0,0,128,64),G.fillStyle="#e8652b",G.fillRect(0,8,128,16),G.fillStyle="#26305a",G.beginPath(),G.moveTo(0,64),G.lineTo(0,24),G.lineTo(14,24),G.lineTo(30,64),G.fill(),G.fillStyle="#26305a",G.fillRect(0,6,128,2),G.fillRect(26,28,102,2),G.font="bold 13px sans-serif",G.fillText("YONEX",74,54),G.beginPath(),G.arc(60,49,3,0,7),G.arc(67,49,3,0,7),G.lineWidth=2,G.strokeStyle="#26305a",G.stroke();let Z=new ln(F);Z.colorSpace=Ce;let q=fe(16777215),mt=new ye({map:Z}),j=new Rt(new He(1.15,.58,.36),[q,q,fe(15230251),q,mt,mt]);j.position.set(1.25,1.62,-3.44+.22),j.castShadow=!0,n.add(j),[-.28,.28].forEach(yt=>{n.add(D(.06,.5,.03,16777215,1.25+yt*.9,2.02,-3.44+.2))}),n.add(D(.5,.06,.06,2502746,1.25,2.28,-3.44+.2)),n.add(D(.06,.06,.16,9206379,1.25,2.32,-3.44+.1))}n.add(D(1.42,1.08,.06,12883572,-.4,2.55,-3.44+.02)),n.add(D(1.28,.94,.07,16775920,-.4,2.55,-3.44+.03));let r=new Rt(new ss(1.1,.78),new Je({color:16766687}));r.position.set(-.4,2.55,-3.44+.075),r.userData.pick="frame",n.add(r),t.frames=[r];for(let F=0;F<14;F++){let G=new Rt(new hn(.05,6,5),new Je({color:[16773544,16758465][F%2]}));G.position.set(-4+F*.62,3.45-Math.sin(F*.9)*.08,-3.38),n.add(G)}let o=new $t;o.position.set(2.45,0,-2.4),n.add(o);let a=new Rt(new Ge(.42,.42,.06,18),fe(14861214));a.position.y=.6,o.add(a),o.add(D(.07,.6,.07,11569768,0,.3,0));let c=new Rt(new Ge(.22,.25,.04,14),fe(11569768));c.position.y=.02,o.add(c);let l=new Rt(new hn(.13,16,12),fe(13231096));l.scale.y=1.3,l.position.y=.8,o.add(l),[[0,1.08,0,16758465],[.08,1.02,.05,16773544],[-.08,1.04,-.03,16165309]].forEach(([F,G,Z,q])=>{o.add(D(.015,.25,.015,8173679,F*.6,.95,Z*.6));let mt=new Rt(new hn(.06,10,8),fe(q));mt.position.set(F,G,Z),o.add(mt)});let h=new $t;h.userData.pick="up",n.add(h);let u=qe(ut.PLANKS),f=qe(ut.PLANK_GREY,16165309);for(let F=0;F<10;F++){let G=-1.35-F*.32,Z=(F+1)*.44;h.add(D(.32,Z,.95,0,G,Z/2,-2.95,u)),h.add(D(.32,.04,.6,0,G,Z+.02,-2.95,f)),F%3===0&&h.add(D(.06,.8,.06,16777215,G,Z+.4,-2.45))}{let F=Math.hypot(3.2,4.4),G=D(F,.08,.08,16777215,-1.35-1.6+.16,2.2+.8+.22,-2.45);G.rotation.z=-Math.atan2(4.4,3.2),h.add(G)}let d=yd(Math.PI/2,.8);d.position.set(-1.85,1.75,-2.35),h.add(d);let g=new $t;g.position.set(1.3,0,1.25),n.add(g),g.add(D(1.5,.06,.95,14861214,0,.76,0)),[[-.65,-.38],[.65,-.38],[-.65,.38],[.65,.38]].forEach(([F,G])=>g.add(D(.06,.76,.06,11569768,F,.38,G))),[-1,1].forEach(F=>{let G=Wi("bowl",{soup:"#f6efe0",noodle:"#fffaf0"},.3);G.position.set(F*.4-.16,.79,-.18),g.add(G);let Z=Wi("bowl",{soup:"#d98c4a",top:["#8a5233","#8a5233","#a86a40","#7fc46a"]},.3);Z.position.set(F*.4+.16,.79,-.18),g.add(Z),g.add(D(.32,.012,.012,12883572,F*.4,.8,.05)),g.add(D(.32,.012,.012,12883572,F*.4,.8,.08))});let M=Wi("plate",{dots:["#6fb85a","#8fcc7c","#6fb85a","#8fcc7c","#6fb85a","#8fcc7c","#6fb85a","#8fcc7c"]},.4);M.position.set(0,.79,-.05),g.add(M),Wn(n,1.3-.4,1.25-.85,0),Wn(n,1.3+.4,1.25-.85,0),t.dining=[{x:1.3-.4,z:1.25-.8,ry:0,y:.54},{x:1.3+.4,z:1.25-.8,ry:0,y:.54}],t.windowX=3.1,Rn(n,3.95,-2.9),t.dinner=g,t.defaultDishes=g.children.slice(5);let x=14,m=new $t;m.position.x=x,n.add(m);let T=$n+rc,b=rc/2;for(let F=0;F<12;F++){let G=D(bn/12,.1,T,F%2?15981768:15651517,-bn/2+(F+.5)*bn/12,-.05,b);G.castShadow=!1,m.add(G)}let E=D(bn,En,.12,t.wall,0,En/2,-$n/2);E.castShadow=!1,m.add(E),[-1,1].forEach(F=>{let G=D(.12,En,T,t.wall2,F*bn/2,En/2,b);G.castShadow=!1,m.add(G)});let V=D(bn,.12,T,0,0,En+.06,b,new ye({color:t.ceil,emissive:t.ceil,emissiveIntensity:.3}));V.castShadow=!1,m.add(V),m.add(D(1.9,1.5,.08,16777215,2.9,2.3,-$n/2+.06)),m.add(D(1.7,1.3,.09,0,2.9,2.3,-$n/2+.07,t.skyMat)),[-1,1].forEach(F=>m.add(D(.26,1.8,.05,16762063,2.9+F*1.08,2.25,-$n/2+.2))),m.add(D(2.8,.4,3.4,15918810,0,.28,-1.85)),m.add(D(2.6,.22,3.2,16777215,0,.58,-1.85)),m.add(D(3,1.5,.22,16171471,0,1,-3.48)),m.add(D(2.7,.18,.1,16372702,0,1.6,-3.36)),[-.62,.62].forEach(F=>m.add(D(1,.2,.55,16775925,F,.8,-3))),m.add(D(2.72,.12,2.35,16368595,0,.98,-1.25)),m.add(D(2.74,.14,.32,16777215,0,.99,-2.3)),[-1.4,1.4].forEach(F=>m.add(D(.12,.5,2.3,16368595,F,.75,-1.25)));let I=hs(16748465);I.scale.setScalar(.32),I.position.set(0,1.25,-3.3),m.add(I),[-1.95,1.95].forEach(F=>{m.add(D(.75,.62,.6,14861214,F,.31,-3.05)),m.add(D(.79,.05,.64,15785156,F,.64,-3.05)),m.add(D(.5,.05,.02,12883572,F,.42,-2.74))}),m.add(D(.22,.22,.22,16171471,-1.95,.77,-3.05));let L=new Rt(new He(.4,.3,.4),new ye({color:16773590,emissive:16765562,emissiveIntensity:0,map:ci(ut.PLASTER)}));L.position.set(-1.95,1.02,-3.05),m.add(L),t.bedLamp=L;let O=new $t;O.position.set(1.95,.7,-3),O.rotation.y=-.3,O.userData.pick="album",m.add(O),O.add(D(.5,.08,.38,13231096,0,0,0)),O.add(D(.04,.085,.38,11127784,-.25,0,0));let A=hs(16027569);A.scale.setScalar(.15),A.rotation.x=-Math.PI/2,A.position.set(.02,.045,.06),O.add(A),t.album=O;let S=new $t;S.userData.pick="down",m.add(S),S.add(D(1.3,.04,2.6,12098694,-3.75,.005,1.2)),[.1,.6,1.1,1.6,2.1].forEach((F,G)=>S.add(D(1.2,.03,.42,10257008,-3.75,.02,.05+F-G*.02)));for(let F=0;F<6;F++)S.add(D(.06,.85,.06,16777215,-3.05,.42,-.05+F*.5));S.add(D(.08,.08,2.6,16777215,-3.05,.86,1.2));let B=yd(-Math.PI*3/4,.45);B.position.set(-3.75,.75,1.2),S.add(B);let tt=new Rt(new Ge(1,1,.03,32),fe(14281207));tt.scale.set(1.8,1,1.1),tt.position.set(.6,.02,1),m.add(tt),Rn(m,3.95,.4);for(let F=0;F<14;F++){let G=new Rt(new hn(.05,6,5),new Je({color:[16773544,16758465][F%2]}));G.position.set(-4+F*.62,3.45-Math.sin(F*.9)*.08,-3.38),m.add(G)}t.bedSpots=[{x:x-.45,z:-1.42},{x:x+.45,z:-1.42}]},corners:{main:[.2,2.8,6.6,0,1.3,-1.9],bed:[14.2,2.6,3.4,14,.9,-2.3],meal:[1,2.6,5.6,1.2,1,-.6],album:[15.75,1.75,-1.85,15.9,.55,-3.05]}},game:{first:"main",build(n,t){n.add(D(2.6,.6,.6,12883572,0,.3,-3.05)),n.add(D(2.2,1.3,.1,3025462,0,1.35,-3.15));let e=D(2.05,1.15,.02,0,0,1.35,-3.09,new Je({color:10934504}));n.add(e),[[-.6,1.55,16758465],[.1,1.2,16111752],[.6,1.6,10738109]].forEach(([s,r,o])=>n.add(D(.3,.3,.01,0,s,r,-3.075,new Je({color:o})))),n.add(D(.5,.12,.35,16777215,.8,.66,-2.95));let i=new Rt(new hn(.7,14,10),fe(16165309));i.scale.set(1.1,.6,1),i.position.set(.2,.4,-.4),i.castShadow=!0,n.add(i),t.seats=[{x:.2,z:-.45,ry:Math.PI,y:.78}],t.gamer=!0,Do(n,-4.44,2.2,-.8,Math.PI/2),Xi(n,4.44,2.2,-.4,-Math.PI/2,1.2,1.5,14273008,[[0,.3,16758465,.5],[0,-.35,16111752,.4]]),hi(n,-4.25,1.8,Math.PI/2,5),Rn(n,3.9,-3),t.windowX=2.9},corners:{main:[.4,2.8,5.6,0,1.1,-2.6]}},language:{first:"main",build(n,t){let e=li(n,-1.2,-2.3,0,16171471);e.add(D(.5,.05,.36,16777215,-.2,.83,0)),e.add(D(.5,.05,.36,16774888,.32,.83,0)),e.add(D(.02,.06,.36,12883572,.06,.84,0)),[10934504,16758465,16111752].forEach((s,r)=>e.add(D(.4,.07,.28,s,.85,.83+r*.075,-.05)));let i=new Rt(new hn(.18,20,14),fe(10473444));i.position.set(-.8,1.08,0),e.add(i),e.add(D(.05,.25,.05,12883572,-.8,.9,0)),Wn(n,-1,-1.45,Math.PI),t.seat={x:-1,z:-1.5,ry:Math.PI,y:.54},Xi(n,-4.45,1.9,.2,Math.PI/2,2.4,1.4,16777215,[[-.75,.35,16758465],[-.25,.35,16773544],[.25,.35,10934504],[.75,.35,10738109],[-.5,-.25,14273008],[0,-.25,16758465],[.5,-.25,16773544]]),hi(n,4.25,-.4,-Math.PI/2,5),Do(n,4.44,2.3,1.8,-Math.PI/2),Rn(n,3.9,-3),t.windowX=2.2},corners:{main:[-.3,2.9,5.8,-.9,1.1,-2.3]}},skills:{first:"main",build(n,t){let e=li(n,-.6,-2.3,0,16111752);Fs(e,-.3,0),e.add(D(.45,.04,.32,16777215,.45,.83,.05)),e.add(D(.02,.02,.3,15235487,.62,.86,.05));let i=D(.6,.3,.32,15035243,3.4,.15,-2.6);n.add(i),n.add(D(.3,.05,.05,3814720,3.4,.35,-2.6)),Wn(n,-.4,-1.45,Math.PI),t.seat={x:-.4,z:-1.5,ry:Math.PI,y:.54};let s=new $t;s.position.set(-3.3,0,-1.6),s.rotation.y=.5,n.add(s),[-.4,.4].forEach(r=>{let o=D(.07,1.9,.07,12883572,r,.95,0);o.rotation.z=-r*.15,s.add(o)}),s.add(D(1,.8,.05,16777215,0,1.35,.06)),s.add(D(.5,.3,.06,10934504,-.15,1.45,.08)),s.add(D(.25,.25,.06,16758465,.25,1.2,.08)),Xi(n,4.44,2,-.5,-Math.PI/2,1.6,1.2,16777215,[[-.5,-.25,10738109,.3],[-.15,-.1,16111752,.3],[.2,.05,16758465,.3],[.55,.2,10934504,.3]]),hi(n,-4.25,1.4,Math.PI/2,5),Rn(n,3.9,2.4),t.windowX=2.4},corners:{main:[0,2.9,5.8,-.3,1.1,-2.2]}},notes:{first:"main",build(n,t){let e=li(n,-.8,-2.3,0,16111752);Fs(e,.4,0),[16758465,10934504,16773544].forEach((i,s)=>e.add(D(.36,.05,.48,i,-.5,.83+s*.055,.02+s*.03))),Wn(n,-.6,-1.45,Math.PI),t.seat={x:-.6,z:-1.5,ry:Math.PI,y:.54},Xi(n,-.6,2.2,-3.44,0,2.6,1.3,14267535,[[-1,.35,16773544],[-.55,.3,16758465],[-.1,.38,10934504],[.35,.32,10738109],[.85,.36,16773544],[-.8,-.25,14273008],[-.3,-.22,16773544],[.2,-.28,16758465],[.7,-.24,10934504]]),hi(n,4.25,-.4,-Math.PI/2,5),Rn(n,-3.9,-3),t.windowX=2.8},corners:{main:[-.2,2.9,5.8,-.6,1.3,-2.4]}},goals:{first:"main",build(n,t){Xi(n,0,2.15,-3.44,0,3,1.6,16777215,[[-1.1,.35,10934504,.45],[-.45,.4,16758465,.4],[.55,.38,10738109,.45],[1.15,.3,16111752,.4],[-.9,-.35,14273008,.45],[.95,-.35,16758465,.4]]);let e=hs(16765803);e.scale.setScalar(.5),e.position.set(0,2.1,-3.3),n.add(e);let i=li(n,-1.8,-1.9,.25,14273008);Fs(i,0,0),Wn(n,-1.7,-1.05,Math.PI+.25),t.seat={x:-1.68,z:-1.1,ry:Math.PI+.25,y:.54};let s=new Rt(new Ge(.22,.12,.36,18),fe(16107596));s.position.set(3.7,1.28,-2.7),n.add(s),n.add(D(.5,.9,.5,15785156,3.7,.45,-2.7)),n.add(D(.2,.12,.2,16107596,3.7,1,-2.7)),Rn(n,-3.9,-3),t.windowX=3.2},corners:{main:[.2,2.8,5.8,-.2,1.4,-2.4]}},health:{first:"main",build(n,t){let e=D(1,.04,2,10738109,-1.6,.03,-.6);e.castShadow=!1,n.add(e),[[-.7,-1.4],[-.45,-1.4]].forEach(([o,a])=>{n.add(D(.36,.05,.05,9080729,o,.12,a)),[-.16,.16].forEach(c=>{let l=new Rt(new Ge(.1,.1,.08,16),fe(15834032));l.rotation.z=Math.PI/2,l.position.set(o+c,.12,a),n.add(l)})}),n.add(D(.9,1.6,.8,16777215,3.6,.8,-2.9)),n.add(D(.05,.4,.05,12633806,3.2,1,-2.48)),n.add(D(.9,.04,.82,15328478,3.6,1.1,-2.9));let i=li(n,1.2,-2.4,0,16766665),s=new Rt(new hn(.25,20,12,0,Math.PI*2,Math.PI/2,Math.PI/2),fe(16777215));s.position.set(0,1.04,0),i.add(s),[[16744319,-.08,0],[16765803,.08,.04],[10147472,0,-.08]].forEach(([o,a,c])=>{let l=new Rt(new hn(.09,14,10),fe(o));l.position.set(a,1.04,c),i.add(l)});let r=new Rt(new Ge(.07,.07,.3,14),fe(10473444));r.position.set(.5,.98,.1),i.add(r),Wn(n,1.4,-1.55,Math.PI),t.seat={x:1.4,z:-1.6,ry:Math.PI,y:.54},Do(n,-4.44,2.2,-.6,Math.PI/2),Rn(n,-3.9,-3),t.windowX=-.6},corners:{main:[.4,2.8,5.8,.2,1,-2]}},law:{first:"main",build(n,t){hi(n,-4.25,-.8,Math.PI/2,5),hi(n,-4.25,1.4,Math.PI/2,5),hi(n,4.25,-.4,-Math.PI/2,5);let e=li(n,.2,-2.3,0,12883572);Fs(e,-.4,0);let i=new $t;i.position.set(.55,.83,0),e.add(i),i.add(D(.04,.5,.04,14267466,0,.25,0)),i.add(D(.5,.03,.03,14267466,0,.48,0)),[-.24,.24].forEach(s=>{let r=new Rt(new Ge(.09,.06,.03,16),fe(14267466));r.position.set(s,.3,0),i.add(r),i.add(D(.01,.18,.01,14267466,s,.39,0))}),Wn(n,.4,-1.45,Math.PI),t.seat={x:.4,z:-1.5,ry:Math.PI,y:.54},Rn(n,3.9,2.4),t.windowX=2.4},corners:{main:[.2,2.9,5.8,.1,1.2,-2.3]}},store:{first:"main",build(n,t){n.add(D(2.6,1,.7,10147520,-.2,.5,-1.15)),n.add(D(2.7,.06,.8,16777215,-.2,1.03,-1.15));for(let f=0;f<5;f++)n.add(D(.3,.6,.02,8372906,-1.2+f*.5,.5,-.79));let s=new $t;s.position.set(.55,1.06,-1.2),n.add(s),s.add(D(.5,.14,.4,5591134,0,.07,0));let r=D(.4,.28,.04,5591134,0,.32,-.12);r.rotation.x=-.3,s.add(r);let o=D(.34,.22,.02,0,0,.32,-.095,new Je({color:12579544}));o.rotation.x=-.3,s.add(o);for(let f=0;f<3;f++)for(let d=0;d<3;d++)s.add(D(.07,.02,.06,15394544,-.1+d*.1,.15,.04+f*.06));let a=Wi("onigiri",{},.26);a.position.set(-.9,1.06,-1.1),n.add(a);let c=Wi("cup",{drink:"#d9b08a",boba:!0},.3);c.position.set(-.55,1.06,-1.05),n.add(c);let l=Wi("bun",{bun:"#fff8ee"},.26);l.position.set(-1.25,1.06,-1.15),n.add(l);let h=[["cup",{drink:"#ff8fb0",cream:!0}],["cookie",{}],["donut",{}],["onigiri",{}],["mochi",{}],["cup",{drink:"#8a5a3a",ice:!0}],["kimbap",{}],["flan",{}]];[-2.6,2.2].forEach((f,d)=>{let g=new $t;g.position.set(f,0,-3.15),n.add(g),g.add(D(1.9,2.3,.5,15920614,0,1.15,0));for(let M=0;M<4;M++){g.add(D(1.8,.05,.46,14208964,0,.32+M*.52,.04));for(let x=0;x<5;x++){let[m,T]=h[(x+M*2+d*3)%h.length],b=Wi(m,T,.3);b.position.set(-.72+x*.36,.35+M*.52,.06),g.add(b)}}g.add(D(1.9,.18,.52,d?16165309:16765803,0,2.2,.02))});let u=new $t;u.position.set(4,0,-.6),u.rotation.y=-Math.PI/2,n.add(u),u.add(D(1.6,2.3,.7,15266552,0,1.15,0)),u.add(D(1.44,2,.02,0,0,1.15,.36,new Je({color:14677247,transparent:!0,opacity:.35})));for(let f=0;f<4;f++)for(let d=0;d<5;d++){let g=[16748410,10147472,16765803,10473471,16752575][(d+f)%5];u.add(D(.14,.32,.14,g,-.56+d*.28,.36+f*.48,.12)),u.add(D(.1,.06,.1,16777215,-.56+d*.28,.55+f*.48,.12))}u.add(D(1.6,.2,.72,10147520,0,2.2,0)),Rn(n,-4,2.4),t.seat={x:-.1,z:-1.85,ry:0,y:0,stand:!0},t.windowX=-3.2},corners:{main:[.1,1.9,5,-.1,1.45,-2.2]}},other:{first:"main",build(n,t){let e=li(n,-1,-2.3);Fs(e,0,0),Wn(n,-.8,-1.45,Math.PI),t.seat={x:-.8,z:-1.5,ry:Math.PI,y:.54},hi(n,4.25,-.6,-Math.PI/2),Rn(n,-3.9,-3)},corners:{main:[0,2.9,5.8,0,1.1,-2]}}};function y1(n,t){jh.length=0,t=t||{};let e=Gh[t.house]||(t.kind==="game"?Gh.game:Gh.other),i=new uo({antialias:!0});i.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),i.shadowMap.enabled=!0,i.shadowMap.type=Ga,n.appendChild(i.domElement);let s=new fo,r=new cn(48,1,.1,100),o=Qa(t.roof||16165309,.72),a=Qa(t.roof||16165309,.55);s.background=new re(Qa(t.roof||16165309,.82));let c=new $t;s.add(c);let l=$n+rc,h=rc/2;for(let W=0;W<12;W++){let K=D(bn/12,.1,l,W%2?15323054:14861214,-bn/2+(W+.5)*bn/12,-.05,h);K.castShadow=!1,c.add(K)}let u=D(bn,En,.12,o,0,En/2,-$n/2);u.castShadow=!1,c.add(u),[-1,1].forEach(W=>{let K=D(.12,En,l,a,W*bn/2,En/2,h);K.castShadow=!1,K.receiveShadow=!0,c.add(K)});let f=Qa(t.roof||16165309,.9),d=D(bn,.12,l,0,0,En+.06,h,new ye({color:f,emissive:f,emissiveIntensity:.3}));d.castShadow=!1,c.add(d);let g=W=>{W.castShadow=!1,c.add(W)};g(D(bn,.16,.12,16777215,0,En-.08,-$n/2+.1)),[-1,1].forEach(W=>g(D(.12,.16,l,16777215,W*(bn/2-.1),En-.08,h))),g(D(bn,.14,.04,16777215,0,.07,-$n/2+.08)),[-1,1].forEach(W=>g(D(.04,.14,l,16777215,W*(bn/2-.08),.07,h)));let M=new Je({color:12575733}),x=new Rt(new Ge(1,1,.03,32),fe(16176348));x.scale.set(2,1,1.3),x.position.set(.3,.02,.6),x.receiveShadow=!0,c.add(x);let m=D(.03,.55,.03,9206379,.3,En-.27,.3);m.castShadow=!1,c.add(m);let T=new Rt(new He(.6,.4,.6),new ye({color:16773544,emissive:16765562,emissiveIntensity:0,map:ci(ut.PLASTER)}));T.position.set(.3,En-.72,.3),T.castShadow=!1,c.add(T);let b={wall:o,wall2:a,ceil:f,skyMat:M};e.build(c,b);{let W=b.windowX!=null?b.windowX:2.2,K=2.1,X=-$n/2;c.add(D(1.9,1.5,.08,16777215,W,K,X+.06)),c.add(D(1.7,1.3,.09,0,W,K,X+.07,M)),c.add(D(.05,1.3,.1,16777215,W,K,X+.1)),c.add(D(1.7,.05,.1,16777215,W,K,X+.1));let xt=D(2.5,.05,.05,12883572,W,K+.9,X+.2);xt.castShadow=!1,c.add(xt),[-1,1].forEach(ft=>{let pt=D(.24,1.75,.05,16762063,W+ft*1.08,K+0,X+.2);pt.castShadow=!1,c.add(pt);let Mt=D(.28,.06,.07,16165309,W+ft*1.08,K-.25,X+.22);Mt.castShadow=!1,c.add(Mt)})}let E=[];c.traverse(W=>{W.userData.hands&&(E=W.userData.hands)});let V=b.seats||(b.seat?[b.seat]:[]),I=t.looks||(t.look?[t.look]:[]),L=V.slice(0,I.length).map((W,K)=>{let X=sc(I[K]);return c.add(X.g),W.stand?(X.g.position.set(W.x,0,W.z),X.g.rotation.y=W.ry,X.standing=!0,X):(X.g.position.set(W.x,W.y-qh,W.z),X.g.rotation.y=W.ry,X.parts.legL.rotation.x=X.parts.legR.rotation.x=-1.45,X)}),O=(t.guests||[]).map((W,K)=>{let X=sc(W);return c.add(X.g),X.g.position.set(K?1:-1.25,0,-.25),X.g.rotation.y=Math.PI+(K?.25:-.25),X}),A=b.sofa||b.gamer?null:L[0]||null,S="",B=[];b.couple&&L.forEach((W,K)=>{W.g.userData.pick="couple";let X=t.names&&(K===0?t.names.her:t.names.him)||(K===0?"namu":"hunf"),xt=c1(X,"#ffffff",.19);c.add(xt),B.push(xt)});let tt=(()=>{let W=hs(16744350);return W.scale.setScalar(.16),W.visible=!1,c.add(W),W})(),F=-1,G="",Z=!1,q=!1,mt=()=>G==="bed"?"bed":S==="lunch"||S==="dinner"?"meal":e.corners[t.corner]?t.corner:e.first,j=null,yt=document.createElement("div");yt.style.cssText="position:absolute;inset:0;background:#fff6ee;opacity:0;pointer-events:none;transition:opacity .45s ease;z-index:2",getComputedStyle(n).position==="static"&&(n.style.position="relative"),n.appendChild(yt);let rt=(W,K,X)=>new U(W,K,X),Xt={up:{legs:[[rt(-.5,1.7,.6),rt(-3.2,3,-2.95),.9],[rt(-2.7,3.7,-2),rt(-5.4,5.6,-2.95),.9,!0]],out:[rt(10.7,1.7,2.9),rt(12.8,1.2,-1.2)]},down:{legs:[[rt(11.2,1.75,2.4),rt(10.25,.1,.9),.8],[rt(10.6,1.05,1.5),rt(10.2,-.8,.2),.7,!0]],out:[rt(-3.7,4.3,-2.1),rt(-.6,1.6,-2.95)]}};function oe(W,K){let X=G&&W!==G;if(G=W,K||!X){j=null,yt.style.opacity=0,Yt(mt(),K);return}j={def:Xt[W==="bed"?"up":"down"],leg:0,t:0,p0:qt.clone(),t0:le.clone()}}function Me(W){let K=j.def.legs[j.leg];j.t+=W/K[2],K[3]&&yt.style.opacity!=="1"&&(yt.style.opacity=1);let X=Math.min(1,j.t),xt=X*X*(3-2*X);if(qt.lerpVectors(j.p0,K[0],xt),le.lerpVectors(j.t0,K[1],xt),dt.copy(qt),wt.copy(le),!(X<1)){if(++j.leg<j.def.legs.length){j.t=0,j.p0=qt.clone(),j.t0=le.clone();return}qt.copy(j.def.out[0]),le.copy(j.def.out[1]),j=null,Yt(mt(),!1),setTimeout(()=>{yt.style.opacity=0},120)}}let ht=Pd("z Z z","#7a6a9a",.9,.45);if(c.add(ht),t.onPick){let W=new wr,K=new vt,X=null,xt=i.domElement,ft=(Mt,et)=>{let Dt=xt.getBoundingClientRect();K.set((Mt-Dt.left)/Dt.width*2-1,-((et-Dt.top)/Dt.height)*2+1),W.setFromCamera(K,r);let Ct=W.intersectObjects(c.children,!0).find(Ot=>{if(Ot.object.isSprite)return!1;let Zt=Ot.object;for(;Zt&&!Zt.userData.pick;)Zt=Zt.parent;return!!Zt});if(!Ct)return"";let Et=Ct.object;for(;Et&&!Et.userData.pick;)Et=Et.parent;return Et.userData.pick},pt=Mt=>{if(Mt==="couple"){F<0&&(F=0);return}if(Mt==="up"||Mt==="down"){Z=!0,oe(Mt==="up"?"bed":"main");return}if(Mt==="album"){q=!0,Yt("album"),setTimeout(()=>t.onPick("album"),750);return}t.onPick(Mt)};xt.addEventListener("contextmenu",Mt=>Mt.preventDefault()),xt.addEventListener("pointerdown",Mt=>{X={x:Mt.clientX,y:Mt.clientY,type:Mt.pointerType}}),xt.addEventListener("pointerup",Mt=>{if(!X||Math.hypot(Mt.clientX-X.x,Mt.clientY-X.y)>8){X=null;return}X=null;let et=ft(Mt.clientX,Mt.clientY);et&&pt(et)})}let Tt=b.gamer?L[0]:null,Jt=new To(16777215,14861214,1.4);s.add(Jt);let gt=new Ro(16774374,1.6);gt.position.set(2.5,En-.3,8),gt.target.position.set(0,0,-2),s.add(gt.target),gt.castShadow=!0,gt.shadow.mapSize.set(1024,1024),Object.assign(gt.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:.5,far:25}),gt.shadow.bias=-.001,s.add(gt);let jt=new Ao(16767392,0,12,1.3);jt.position.set(.3,En-1.1,.3),s.add(jt);function ae(){let W=new Date,K=t.timeMode==="day"?11:t.timeMode==="night"?22:W.getHours()+W.getMinutes()/60,X=Ld(K);M.color.copy(X.sky),Jt.intensity=1.5-X.night*.7,gt.intensity=1.6*(1-X.night)+.2,jt.intensity=X.night*8,T.material.emissiveIntensity=X.night,E.length&&(E[0].rotation.z=-(W.getHours()%12)/12*Math.PI*2,E[1].rotation.z=-W.getMinutes()/60*Math.PI*2)}let qt=new U,le=new U,dt=new U,wt=new U;function N(W){return e.corners[W]||e.corners[e.first]}function Yt(W,K){let X=N(W);dt.set(X[0],X[1],X[2]),wt.set(X[3],X[4],X[5]),K&&(qt.copy(dt),le.copy(wt))}Yt(t.corner,!0),t.walkIn&&(qt.set(0,1.7,$n/2+3.2),le.set(0,1.4,-$n/2));function St(){let W=n.clientWidth||innerWidth,K=n.clientHeight||innerHeight;i.setSize(W,K,!1),r.aspect=W/K,r.fov=W/K<.9?64:50,W/K<.9?r.setViewOffset(W,K,0,-K*.2,W,K):r.clearViewOffset(),r.updateProjectionMatrix()}St();let Ft=()=>St();window.addEventListener("resize",Ft);let Lt=new Co,te=new U,Vt=!0,P=0;function w(){if(!Vt||(requestAnimationFrame(w),document.hidden))return;let W=Math.min(.1,Lt.getDelta()),K=Lt.elapsedTime;if(j?Me(W):(qt.lerp(dt,Math.min(1,W*1.6)),le.lerp(wt,Math.min(1,W*1.6))),r.position.copy(qt),r.lookAt(le),a1(K),b.couple){let X=new Date,xt=X.getHours()+X.getMinutes()/60,ft=xt>=22||xt<6.5?"sleep":xt>=11.5&&xt<13?"lunch":xt>=18.5&&xt<19.75?"dinner":"sofa";if(ft!==S){S=ft,!Z&&!q&&oe(ft==="sleep"?"bed":"main",!G&&!t.walkIn);let pt=ft==="lunch"||ft==="dinner"?b.dining:b.seats;L.forEach((Mt,et)=>{if(ft==="sleep"){let Dt=b.bedSpots[et];Mt.g.position.set(Dt.x,.9,Dt.z),Mt.g.rotation.set(-Math.PI/2,0,0),Mt.parts.legL.rotation.x=Mt.parts.legR.rotation.x=0}else Mt.g.position.set(pt[et].x,pt[et].y-qh,pt[et].z),Mt.g.rotation.set(0,pt[et].ry,0),Mt.parts.legL.rotation.x=Mt.parts.legR.rotation.x=-1.45;Mt.sleepMap||(Mt.sleepMap=Ad(Mt.parts.look,!0)),Mt.awakeMap||(Mt.awakeMap=Mt.parts.mat.map),Mt.parts.mat.map=ft==="sleep"?Mt.sleepMap:Mt.awakeMap,Mt.parts.mat.needsUpdate=!0}),ht.visible=ft==="sleep"}if(L.forEach((pt,Mt)=>{let et=Mt===0?-1:1;S==="lunch"||S==="dinner"?(pt.parts.armL.rotation.x=-.9,pt.parts.armR.rotation.x=-1.35+Math.sin(K*2.6+Mt*1.7)*.45,pt.parts.head.rotation.set(.12+Math.max(0,Math.sin(K*2.6+Mt*1.7))*.12,0,0)):S==="sleep"?(pt.parts.armL.rotation.x=pt.parts.armR.rotation.x=0,pt.parts.head.rotation.set(.6,-et*(.35+Math.sin(K*.9)*.03),0)):(pt.parts.armL.rotation.x=pt.parts.armR.rotation.x=-.6,pt.parts.head.rotation.set(0,-et*.25,-et*(.18+Math.sin(K*.8)*.04)))}),ht.visible&&(ht.position.set(14,1.6+K*.25%.4,-3),ht.material.opacity=.9-K*.25%.4*1.5),L.forEach((pt,Mt)=>{pt.parts.head.getWorldPosition(B[Mt].position),B[Mt].position.y+=S==="sleep"?.62:.55}),F>=0){F+=W;let pt=L[1],Mt=L[0],et=Math.sin(Math.min(1,F/1.6)*Math.PI);pt.parts.head.rotation.y+=(S==="sleep"?-.5:-.9)*et,pt.parts.head.rotation.z+=.25*et,Mt.parts.head.rotation.z-=.2*et,S!=="sleep"&&(pt.g.rotation.z=.16*et);let Dt=new U;Mt.parts.head.getWorldPosition(Dt);let Ct=new U;pt.parts.head.getWorldPosition(Ct),tt.visible=F>.5,tt.position.copy(Dt).lerp(Ct,.5),tt.position.y+=.35+(F-.5)*.35,tt.scale.setScalar(.12+Math.min(1,(F-.5)*2)*.06),tt.rotation.y=r.rotation.y,F>2.1&&(F=-1,tt.visible=!1,pt.g.rotation.z=0)}b.bedLamp&&(b.bedLamp.material.emissiveIntensity=S==="sleep"?.15:.6*jt.intensity/8)}else b.sofa&&L.forEach((X,xt)=>{X.parts.armL.rotation.x=X.parts.armR.rotation.x=-.6,X.parts.head.rotation.z=(xt===0?-1:1)*(.18+Math.sin(K*.8)*.04),X.parts.head.rotation.y=(xt===0?1:-1)*.25});if(Tt&&(Tt.parts.armL.rotation.x=Tt.parts.armR.rotation.x=-1.1+Math.sin(K*14)*.05,Tt.parts.head.rotation.x=-.05,Tt.parts.head.rotation.y=Math.sin(K*.5)*.08),O.forEach((X,xt)=>{X.parts.head.rotation.y=Math.sin(K*.5+xt*2)*.3,X.parts.armL.rotation.x=Math.sin(K*.8+xt)*.06}),A&&A.standing){let X=K%9<1.4;A.parts.armL.rotation.x=-.35+Math.sin(K*1.3)*.05,A.parts.armR.rotation.x=X?-2.6:-.35+Math.sin(K*1.3+1)*.05,A.parts.armR.rotation.z=X?-.3+Math.sin(K*14)*.25:0,A.parts.head.rotation.y=Math.sin(K*.4)*.2,A.parts.head.rotation.x=0}else A&&(A.parts.armL.rotation.x=-1.2+Math.sin(K*9)*.12,A.parts.armR.rotation.x=-1.2+Math.sin(K*9+1.8)*.12,A.parts.head.rotation.x=.15+Math.sin(K*.6)*.05,A.parts.head.rotation.y=Math.sin(K*.35)*.25);(K-P>20||P===0)&&(ae(),P=K||.001),i.render(s,r),te.set(.3,.05,.6).project(r),document.documentElement.style.setProperty("--rug-x",((te.x+1)/2*100).toFixed(1)+"vw"),document.documentElement.style.setProperty("--rug-y",((1-te.y)/2*100).toFixed(1)+"vh")}ae(),requestAnimationFrame(w),/[?&]debug3d/.test(location.search)&&(window.__room={camera:r,R:b,renderer:i,sitters:L});function Q(W){if(!b.dinner)return;(b.foodMeshes||[]).forEach(xt=>{b.dinner.remove(xt)}),b.foodMeshes=[],W=(W||[]).filter(xt=>xt&&xt.name).slice(0,4),b.defaultDishes.forEach(xt=>{xt.visible=!W.length});let K=[[0],[-.33,.33],[-.48,0,.48],[-.54,-.18,.18,.54]][Math.max(0,W.length-1)]||[],X=new So;X.setCrossOrigin("anonymous"),W.forEach((xt,ft)=>{let pt=new $t;pt.position.set(K[ft],.8,-.12+ft%2*.06),b.dinner.add(pt),b.foodMeshes.push(pt);let Mt=new Rt(new Ge(.2,.15,.05,24),fe(16777215));pt.add(Mt);let et=new Rt(new Ps(.19,.015,8,24),fe([16171471,13231096,16773544,13495501][ft]));et.rotation.x=Math.PI/2,et.position.y=.025,pt.add(et);let Dt=xt.key&&window.FoodArt&&window.FoodArt.spec&&window.FoodArt.spec(xt.key);if(Dt){pt.remove(Mt),pt.remove(et),pt.add(D(.46,.02,.46,[16171471,13231096,16773544,13495501][ft],0,-.01,0));let Zt=Wi(Dt.tpl,Dt.o,.4);Zt.position.y=0,Zt.rotation.y=(ft-1.5)*.25,pt.add(Zt);return}let Ct=new ye({color:16777215}),Et=new Rt(new Fa(.16,28),Ct);Et.rotation.x=-Math.PI/2,Et.position.y=.03,pt.add(Et);let Ot=()=>{let Zt=document.createElement("canvas");Zt.width=Zt.height=128;let Kt=Zt.getContext("2d");Kt.fillStyle=["#ffe1e9","#e1f0fb","#fff6cf","#e3f5e1"][ft],Kt.fillRect(0,0,128,128),Kt.font="64px sans-serif",Kt.textAlign="center",Kt.fillText("\u{1F372}",64,76),Kt.font="800 16px Nunito, sans-serif",Kt.fillStyle="#8a5a6a",Kt.fillText(xt.name.slice(0,14),64,112),Ct.map=new ln(Zt),Ct.map.colorSpace=Ce,Ct.needsUpdate=!0};if(!xt.img){Ot();return}if(/^data:image\/svg/.test(xt.img)){let Zt=new Image;Zt.onload=()=>{let Kt=document.createElement("canvas");Kt.width=Kt.height=256;let ve=Kt.getContext("2d");ve.fillStyle="#fffaf5",ve.fillRect(0,0,256,256),ve.drawImage(Zt,0,0,256,256),Ct.map=new ln(Kt),Ct.map.colorSpace=Ce,Ct.needsUpdate=!0},Zt.onerror=Ot,Zt.src=xt.img;return}X.load(xt.img,Zt=>{Zt.colorSpace=Ce;let Kt=Zt.image.width/Zt.image.height;Kt>1?(Zt.repeat.set(1/Kt,1),Zt.offset.set((1-1/Kt)/2,0)):(Zt.repeat.set(1,Kt),Zt.offset.set(0,(1-Kt)/2)),Ct.map=Zt,Ct.needsUpdate=!0},void 0,Ot)})}return{house:t.house,setCorner(W){if(b.couple){t.corner=W,q||Yt(mt(),!1);return}Yt(W,!1)},back(){q=!1,Yt(mt(),!1)},setFood:Q,get floor(){return G},setPhotos(W){if(!b.frames)return;let K=new So;b.frames.forEach((X,xt)=>{W[xt]&&K.load(W[xt],ft=>{ft.colorSpace=Ce;let pt=ft.image,Mt=X.geometry.parameters.width,et=X.geometry.parameters.height,Dt=pt.width/pt.height,Ct=Mt/et;Dt>Ct?(ft.repeat.set(Ct/Dt,1),ft.offset.set((1-Ct/Dt)/2,0)):(ft.repeat.set(1,Dt/Ct),ft.offset.set(0,(1-Dt/Ct)/2)),X.material.map=ft,X.material.color.set(16777215),X.material.needsUpdate=!0})})},setTimeMode(W){t.timeMode=W,ae()},destroy(){Vt=!1,window.removeEventListener("resize",Ft),s.traverse(W=>{W.geometry&&W.geometry.dispose()}),i.dispose(),i.domElement.remove(),yt.remove()}}}window.Village3D={create:f1,room:y1,LOOKS:ec,LOVE:Yh,ROOF:bi.roof,lookAs:Cd};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
