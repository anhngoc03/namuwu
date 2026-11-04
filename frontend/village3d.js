(()=>{var xh="170",Cs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gd=0,du=1,Wd=2;var Cf=1,ka=2,Ci=3,ji=0,_n=1,xn=2,Ji=0,hr=1,pu=2,mu=3,gu=4,Xd=5,gs=100,Yd=101,qd=102,Zd=103,Kd=104,Jd=200,$d=201,jd=202,Qd=203,Yc=204,qc=205,tp=206,ep=207,np=208,ip=209,sp=210,rp=211,op=212,ap=213,cp=214,Zc=0,Kc=1,Jc=2,pr=3,$c=4,jc=5,Qc=6,tl=7,_h=0,lp=1,hp=2,$i=0,up=1,fp=2,dp=3,pp=4,mp=5,gp=6,xp=7;var Pf=300,mr=301,gr=302,el=303,nl=304,Va=306,no=1e3,_s=1001,il=1002,$e=1003,_p=1004;var Oo=1005;var pi=1006,fc=1007;var ys=1008;var Di=1009,If=1010,Lf=1011,io=1012,yh=1013,Ms=1014,Pi=1015,Ao=1016,Mh=1017,vh=1018,xr=1020,Df=35902,Uf=1021,Nf=1022,ni=1023,Of=1024,Ff=1025,ur=1026,_r=1027,Bf=1028,Eh=1029,zf=1030,bh=1031;var Sh=1033,fa=33776,da=33777,pa=33778,ma=33779,sl=35840,rl=35841,ol=35842,al=35843,cl=36196,ll=37492,hl=37496,ul=37808,fl=37809,dl=37810,pl=37811,ml=37812,gl=37813,xl=37814,_l=37815,yl=37816,Ml=37817,vl=37818,El=37819,bl=37820,Sl=37821,ga=36492,wl=36494,Tl=36495,Hf=36283,Al=36284,Rl=36285,Cl=36286;var xa=2300,Pl=2301,dc=2302,xu=2400,_u=2401,yu=2402;var yp=3200,Mp=3201;var kf=0,vp=1,Zi="",Ie="srgb",br="srgb-linear",Ga="linear",De="srgb";var Ws=7680;var Mu=519,Ep=512,bp=513,Sp=514,Vf=515,wp=516,Tp=517,Ap=518,Rp=519,Il=35044;var vu="300 es",Ii=2e3,_a=2001,Ui=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Eu=1234567,Jr=Math.PI/180,so=180/Math.PI;function mi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[e&63|128]+mn[e>>8&255]+"-"+mn[e>>16&255]+mn[e>>24&255]+mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]).toLowerCase()}function an(n,t,e){return Math.max(t,Math.min(e,n))}function wh(n,t){return(n%t+t)%t}function Cp(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Pp(n,t,e){return n!==t?(e-n)/(t-n):0}function $r(n,t,e){return(1-e)*n+e*t}function Ip(n,t,e,i){return $r(n,t,1-Math.exp(-e*i))}function Lp(n,t=1){return t-Math.abs(wh(n,t*2)-t)}function Dp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Up(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Np(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Op(n,t){return n+Math.random()*(t-n)}function Fp(n){return n*(.5-Math.random())}function Bp(n){n!==void 0&&(Eu=n);let t=Eu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function zp(n){return n*Jr}function Hp(n){return n*so}function kp(n){return(n&n-1)===0&&n!==0}function Vp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Gp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Wp(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),f=o((t-i)/2),d=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,c*u,c*f,a*l);break;case"YZY":n.set(c*f,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*f,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*d,a*l);break;case"YXY":n.set(c*d,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ei(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Pe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Gf={DEG2RAD:Jr,RAD2DEG:so,generateUUID:mi,clamp:an,euclideanModulo:wh,mapLinear:Cp,inverseLerp:Pp,lerp:$r,damp:Ip,pingpong:Lp,smoothstep:Dp,smootherstep:Up,randInt:Np,randFloat:Op,randFloatSpread:Fp,seededRandom:Bp,degToRad:zp,radToDeg:Hp,isPowerOfTwo:kp,ceilPowerOfTwo:Vp,floorPowerOfTwo:Gp,setQuaternionFromProperEuler:Wp,normalize:Pe,denormalize:ei},Mt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(an(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ge=class n{constructor(t,e,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],y=s[0],x=s[3],m=s[6],T=s[1],b=s[4],E=s[7],V=s[2],D=s[5],I=s[8];return r[0]=o*y+a*T+c*V,r[3]=o*x+a*b+c*D,r[6]=o*m+a*E+c*I,r[1]=l*y+h*T+u*V,r[4]=l*x+h*b+u*D,r[7]=l*m+h*E+u*I,r[2]=f*y+d*T+g*V,r[5]=f*x+d*b+g*D,r[8]=f*m+d*E+g*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=e*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(s*l-h*i)*y,t[2]=(a*i-s*o)*y,t[3]=f*y,t[4]=(h*e-s*c)*y,t[5]=(s*r-a*e)*y,t[6]=d*y,t[7]=(i*c-l*e)*y,t[8]=(o*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(pc.makeScale(t,e)),this}rotate(t){return this.premultiply(pc.makeRotation(-t)),this}translate(t,e){return this.premultiply(pc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},pc=new ge;function Wf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ro(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Xp(){let n=ro("canvas");return n.style.display="block",n}var bu={};function Zr(n){n in bu||(bu[n]=!0,console.warn(n))}function Yp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function qp(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Zp(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var be={enabled:!0,workingColorSpace:br,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===De&&(n.r=Li(n.r),n.g=Li(n.g),n.b=Li(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===De&&(n.r=fr(n.r),n.g=fr(n.g),n.b=fr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Zi?Ga:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function fr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Su=[.64,.33,.3,.6,.15,.06],wu=[.2126,.7152,.0722],Tu=[.3127,.329],Au=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ru=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);be.define({[br]:{primaries:Su,whitePoint:Tu,transfer:Ga,toXYZ:Au,fromXYZ:Ru,luminanceCoefficients:wu,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:Su,whitePoint:Tu,transfer:De,toXYZ:Au,fromXYZ:Ru,luminanceCoefficients:wu,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}});var Xs,Ll=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xs===void 0&&(Xs=ro("canvas")),Xs.width=t.width,Xs.height=t.height;let i=Xs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Xs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=ro("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Li(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Li(e[i]/255)*255):e[i]=Li(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Kp=0,ya=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=mi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(mc(s[o].image)):r.push(mc(s[o]))}else r=mc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function mc(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Ll.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Jp=0,yn=class n extends Ui{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=_s,s=_s,r=pi,o=ys,a=ni,c=Di,l=n.DEFAULT_ANISOTROPY,h=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=mi(),this.name="",this.source=new ya(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case no:t.x=t.x-Math.floor(t.x);break;case _s:t.x=t.x<0?0:1;break;case il:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case no:t.y=t.y-Math.floor(t.y);break;case _s:t.y=t.y<0?0:1;break;case il:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Pf;yn.DEFAULT_ANISOTROPY=1;var Ue=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],y=c[2],x=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(g+x)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(l+1)/2,E=(d+1)/2,V=(m+1)/2,D=(h+f)/4,I=(u+y)/4,O=(g+x)/4;return b>E&&b>V?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=D/i,r=I/i):E>V?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=D/s,r=O/s):V<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(V),i=I/r,s=O/r),this.set(i,s,r,e),this}let T=Math.sqrt((x-g)*(x-g)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(x-g)/T,this.y=(u-y)/T,this.z=(f-h)/T,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Dl=class extends Ui{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new yn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ya(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ni=class extends Dl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ma=class extends yn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ul=class extends yn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ii=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=y;return}if(u!==y||c!==f||l!==d||h!==g){let x=1-a,m=c*f+l*d+h*g+u*y,T=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){let V=Math.sqrt(b),D=Math.atan2(V,m*T);x=Math.sin(x*D)/V,a=Math.sin(a*D)/V}let E=a*T;if(c=c*x+f*E,l=l*x+d*E,h=h*x+g*E,u=u*x+y*E,x===1-a){let V=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=V,l*=V,h*=V,u*=V}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-a*d,t[e+2]=l*g+h*d+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),f=c(i/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(an(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return gc.copy(this).projectOnVector(t),this.sub(gc)}reflect(t){return this.sub(gc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(an(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},gc=new U,Cu=new ii,vs=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint($n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint($n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=$n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,$n):$n.fromBufferAttribute(r,o),$n.applyMatrix4(t.matrixWorld),this.expandByPoint($n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fo.copy(i.boundingBox)),Fo.applyMatrix4(t.matrixWorld),this.union(Fo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$n),$n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hr),Bo.subVectors(this.max,Hr),Ys.subVectors(t.a,Hr),qs.subVectors(t.b,Hr),Zs.subVectors(t.c,Hr),Vi.subVectors(qs,Ys),Gi.subVectors(Zs,qs),ls.subVectors(Ys,Zs);let e=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-ls.z,ls.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,ls.z,0,-ls.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-ls.y,ls.x,0];return!xc(e,Ys,qs,Zs,Bo)||(e=[1,0,0,0,1,0,0,0,1],!xc(e,Ys,qs,Zs,Bo))?!1:(zo.crossVectors(Vi,Gi),e=[zo.x,zo.y,zo.z],xc(e,Ys,qs,Zs,Bo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Si=[new U,new U,new U,new U,new U,new U,new U,new U],$n=new U,Fo=new vs,Ys=new U,qs=new U,Zs=new U,Vi=new U,Gi=new U,ls=new U,Hr=new U,Bo=new U,zo=new U,hs=new U;function xc(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){hs.fromArray(n,r);let a=s.x*Math.abs(hs.x)+s.y*Math.abs(hs.y)+s.z*Math.abs(hs.z),c=t.dot(hs),l=e.dot(hs),h=i.dot(hs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var $p=new vs,kr=new U,_c=new U,yr=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):$p.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;kr.subVectors(t,this.center);let e=kr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(kr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_c.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(kr.copy(t.center).add(_c)),this.expandByPoint(kr.copy(t.center).sub(_c))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},wi=new U,yc=new U,Ho=new U,Wi=new U,Mc=new U,ko=new U,vc=new U,Es=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wi.copy(this.origin).addScaledVector(this.direction,e),wi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){yc.copy(t).add(e).multiplyScalar(.5),Ho.copy(e).sub(t).normalize(),Wi.copy(this.origin).sub(yc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ho),a=Wi.dot(this.direction),c=-Wi.dot(Ho),l=Wi.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let y=1/h;u*=y,f*=y,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(yc).addScaledVector(Ho,f),d}intersectSphere(t,e){wi.subVectors(t.center,this.origin);let i=wi.dot(this.direction),s=wi.dot(wi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,wi)!==null}intersectTriangle(t,e,i,s,r){Mc.subVectors(e,t),ko.subVectors(i,t),vc.crossVectors(Mc,ko);let o=this.direction.dot(vc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,t);let c=a*this.direction.dot(ko.crossVectors(Wi,ko));if(c<0)return null;let l=a*this.direction.dot(Mc.cross(Wi));if(l<0||c+l>o)return null;let h=-a*Wi.dot(vc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Be=class n{constructor(t,e,i,s,r,o,a,c,l,h,u,f,d,g,y,x){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,h,u,f,d,g,y,x)}set(t,e,i,s,r,o,a,c,l,h,u,f,d,g,y,x){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=y,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Ks.setFromMatrixColumn(t,0).length(),r=1/Ks.setFromMatrixColumn(t,1).length(),o=1/Ks.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,y=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-y*l,e[9]=-a*c,e[2]=y-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,g=l*h,y=l*u;e[0]=f+y*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=y+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,g=l*h,y=l*u;e[0]=f-y*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=y-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,y=a*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+y,e[1]=c*u,e[5]=y*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,g=a*c,y=a*l;e[0]=c*h,e[4]=y-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-y*u}else if(t.order==="XZY"){let f=o*c,d=o*l,g=a*c,y=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+y,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=y*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jp,t,Qp)}lookAt(t,e,i){let s=this.elements;return On.subVectors(t,e),On.lengthSq()===0&&(On.z=1),On.normalize(),Xi.crossVectors(i,On),Xi.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Xi.crossVectors(i,On)),Xi.normalize(),Vo.crossVectors(On,Xi),s[0]=Xi.x,s[4]=Vo.x,s[8]=On.x,s[1]=Xi.y,s[5]=Vo.y,s[9]=On.y,s[2]=Xi.z,s[6]=Vo.z,s[10]=On.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],y=i[6],x=i[10],m=i[14],T=i[3],b=i[7],E=i[11],V=i[15],D=s[0],I=s[4],O=s[8],A=s[12],S=s[1],B=s[5],tt=s[9],F=s[13],G=s[2],Z=s[6],q=s[10],mt=s[14],j=s[3],vt=s[7],ht=s[11],Wt=s[15];return r[0]=o*D+a*S+c*G+l*j,r[4]=o*I+a*B+c*Z+l*vt,r[8]=o*O+a*tt+c*q+l*ht,r[12]=o*A+a*F+c*mt+l*Wt,r[1]=h*D+u*S+f*G+d*j,r[5]=h*I+u*B+f*Z+d*vt,r[9]=h*O+u*tt+f*q+d*ht,r[13]=h*A+u*F+f*mt+d*Wt,r[2]=g*D+y*S+x*G+m*j,r[6]=g*I+y*B+x*Z+m*vt,r[10]=g*O+y*tt+x*q+m*ht,r[14]=g*A+y*F+x*mt+m*Wt,r[3]=T*D+b*S+E*G+V*j,r[7]=T*I+b*B+E*Z+V*vt,r[11]=T*O+b*tt+E*q+V*ht,r[15]=T*A+b*F+E*mt+V*Wt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],y=t[7],x=t[11],m=t[15];return g*(+r*c*u-s*l*u-r*a*f+i*l*f+s*a*d-i*c*d)+y*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+x*(+e*l*u-e*a*d-r*o*u+i*o*d+r*a*h-i*l*h)+m*(-s*a*h-e*c*u+e*a*f+s*o*u-i*o*f+i*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],y=t[13],x=t[14],m=t[15],T=u*x*l-y*f*l+y*c*d-a*x*d-u*c*m+a*f*m,b=g*f*l-h*x*l-g*c*d+o*x*d+h*c*m-o*f*m,E=h*y*l-g*u*l+g*a*d-o*y*d-h*a*m+o*u*m,V=g*u*c-h*y*c-g*a*f+o*y*f+h*a*x-o*u*x,D=e*T+i*b+s*E+r*V;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/D;return t[0]=T*I,t[1]=(y*f*r-u*x*r-y*s*d+i*x*d+u*s*m-i*f*m)*I,t[2]=(a*x*r-y*c*r+y*s*l-i*x*l-a*s*m+i*c*m)*I,t[3]=(u*c*r-a*f*r-u*s*l+i*f*l+a*s*d-i*c*d)*I,t[4]=b*I,t[5]=(h*x*r-g*f*r+g*s*d-e*x*d-h*s*m+e*f*m)*I,t[6]=(g*c*r-o*x*r-g*s*l+e*x*l+o*s*m-e*c*m)*I,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*d+e*c*d)*I,t[8]=E*I,t[9]=(g*u*r-h*y*r-g*i*d+e*y*d+h*i*m-e*u*m)*I,t[10]=(o*y*r-g*a*r+g*i*l-e*y*l-o*i*m+e*a*m)*I,t[11]=(h*a*r-o*u*r-h*i*l+e*u*l+o*i*d-e*a*d)*I,t[12]=V*I,t[13]=(h*y*s-g*u*s+g*i*f-e*y*f-h*i*x+e*u*x)*I,t[14]=(g*a*s-o*y*s-g*i*c+e*y*c+o*i*x-e*a*x)*I,t[15]=(o*u*s-h*a*s+h*i*c-e*u*c-o*i*f+e*a*f)*I,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,y=o*h,x=o*u,m=a*u,T=c*l,b=c*h,E=c*u,V=i.x,D=i.y,I=i.z;return s[0]=(1-(y+m))*V,s[1]=(d+E)*V,s[2]=(g-b)*V,s[3]=0,s[4]=(d-E)*D,s[5]=(1-(f+m))*D,s[6]=(x+T)*D,s[7]=0,s[8]=(g+b)*I,s[9]=(x-T)*I,s[10]=(1-(f+y))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Ks.set(s[0],s[1],s[2]).length(),o=Ks.set(s[4],s[5],s[6]).length(),a=Ks.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],jn.copy(this);let l=1/r,h=1/o,u=1/a;return jn.elements[0]*=l,jn.elements[1]*=l,jn.elements[2]*=l,jn.elements[4]*=h,jn.elements[5]*=h,jn.elements[6]*=h,jn.elements[8]*=u,jn.elements[9]*=u,jn.elements[10]*=u,e.setFromRotationMatrix(jn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Ii){let c=this.elements,l=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),d,g;if(a===Ii)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===_a)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Ii){let c=this.elements,l=1/(e-t),h=1/(i-s),u=1/(o-r),f=(e+t)*l,d=(i+s)*h,g,y;if(a===Ii)g=(o+r)*u,y=-2*u;else if(a===_a)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Ks=new U,jn=new Be,jp=new U(0,0,0),Qp=new U(1,1,1),Xi=new U,Vo=new U,On=new U,Pu=new Be,Iu=new ii,gi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-an(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(an(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(an(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Pu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Iu.setFromEuler(this),this.setFromQuaternion(Iu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gi.DEFAULT_ORDER="XYZ";var oo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},t0=0,Lu=new U,Js=new ii,Ti=new Be,Go=new U,Vr=new U,e0=new U,n0=new ii,Du=new U(1,0,0),Uu=new U(0,1,0),Nu=new U(0,0,1),Ou={type:"added"},i0={type:"removed"},$s={type:"childadded",child:null},Ec={type:"childremoved",child:null},Ge=class n extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new U,e=new gi,i=new ii,s=new U(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Be},normalMatrix:{value:new ge}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.multiply(Js),this}rotateOnWorldAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.premultiply(Js),this}rotateX(t){return this.rotateOnAxis(Du,t)}rotateY(t){return this.rotateOnAxis(Uu,t)}rotateZ(t){return this.rotateOnAxis(Nu,t)}translateOnAxis(t,e){return Lu.copy(t).applyQuaternion(this.quaternion),this.position.add(Lu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Du,t)}translateY(t){return this.translateOnAxis(Uu,t)}translateZ(t){return this.translateOnAxis(Nu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Go.copy(t):Go.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Vr,Go,this.up):Ti.lookAt(Go,Vr,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),Js.setFromRotationMatrix(Ti),this.quaternion.premultiply(Js.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ou),$s.child=t,this.dispatchEvent($s),$s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(i0),Ec.child=t,this.dispatchEvent(Ec),Ec.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ou),$s.child=t,this.dispatchEvent($s),$s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,t,e0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,n0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Ge.DEFAULT_UP=new U(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qn=new U,Ai=new U,bc=new U,Ri=new U,js=new U,Qs=new U,Fu=new U,Sc=new U,wc=new U,Tc=new U,Ac=new Ue,Rc=new Ue,Cc=new Ue,Ki=class n{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Qn.subVectors(t,e),s.cross(Qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Qn.subVectors(s,e),Ai.subVectors(i,e),bc.subVectors(t,e);let o=Qn.dot(Qn),a=Qn.dot(Ai),c=Qn.dot(bc),l=Ai.dot(Ai),h=Ai.dot(bc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ri.x),c.addScaledVector(o,Ri.y),c.addScaledVector(a,Ri.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return Ac.setScalar(0),Rc.setScalar(0),Cc.setScalar(0),Ac.fromBufferAttribute(t,e),Rc.fromBufferAttribute(t,i),Cc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ac,r.x),o.addScaledVector(Rc,r.y),o.addScaledVector(Cc,r.z),o}static isFrontFacing(t,e,i,s){return Qn.subVectors(i,e),Ai.subVectors(t,e),Qn.cross(Ai).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Qn.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;js.subVectors(s,i),Qs.subVectors(r,i),Sc.subVectors(t,i);let c=js.dot(Sc),l=Qs.dot(Sc);if(c<=0&&l<=0)return e.copy(i);wc.subVectors(t,s);let h=js.dot(wc),u=Qs.dot(wc);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(js,o);Tc.subVectors(t,r);let d=js.dot(Tc),g=Qs.dot(Tc);if(g>=0&&d<=g)return e.copy(r);let y=d*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(Qs,a);let x=h*g-d*u;if(x<=0&&u-h>=0&&d-g>=0)return Fu.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Fu,a);let m=1/(x+y+f);return o=y*m,a=f*m,e.copy(i).addScaledVector(js,o).addScaledVector(Qs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Wo={h:0,s:0,l:0};function Pc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var re=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=be.workingColorSpace){return this.r=t,this.g=e,this.b=i,be.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=be.workingColorSpace){if(t=wh(t,1),e=an(e,0,1),i=an(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Pc(o,r,t+1/3),this.g=Pc(o,r,t),this.b=Pc(o,r,t-1/3)}return be.toWorkingColorSpace(this,s),this}setStyle(t,e=Ie){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let i=Xf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}copyLinearToSRGB(t){return this.r=fr(t.r),this.g=fr(t.g),this.b=fr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return be.fromWorkingColorSpace(gn.copy(this),t),Math.round(an(gn.r*255,0,255))*65536+Math.round(an(gn.g*255,0,255))*256+Math.round(an(gn.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=be.workingColorSpace){be.fromWorkingColorSpace(gn.copy(this),e);let i=gn.r,s=gn.g,r=gn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=be.workingColorSpace){return be.fromWorkingColorSpace(gn.copy(this),e),t.r=gn.r,t.g=gn.g,t.b=gn.b,t}getStyle(t=Ie){be.fromWorkingColorSpace(gn.copy(this),t);let e=gn.r,i=gn.g,s=gn.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Yi),this.setHSL(Yi.h+t,Yi.s+e,Yi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Yi),t.getHSL(Wo);let i=$r(Yi.h,Wo.h,e),s=$r(Yi.s,Wo.s,e),r=$r(Yi.l,Wo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new re;re.NAMES=Xf;var s0=0,Oi=class extends Ui{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=mi(),this.name="",this.blending=hr,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yc,this.blendDst=qc,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hr&&(i.blending=this.blending),this.side!==ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yc&&(i.blendSrc=this.blendSrc),this.blendDst!==qc&&(i.blendDst=this.blendDst),this.blendEquation!==gs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==pr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ke=class extends Oi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=_h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Qe=new U,Xo=new Mt,fn=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Il,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Xo.fromBufferAttribute(this,e),Xo.applyMatrix3(t),this.setXY(e,Xo.x,Xo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix3(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ei(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Pe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ei(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ei(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ei(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ei(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Il&&(t.usage=this.usage),t}};var va=class extends fn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ea=class extends fn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var de=class extends fn{constructor(t,e,i){super(new Float32Array(t),e,i)}},r0=0,Wn=new Be,Ic=new Ge,tr=new U,Fn=new vs,Gr=new vs,on=new U,Fe=class n extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wf(t)?Ea:va)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ge().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Wn.makeRotationFromQuaternion(t),this.applyMatrix4(Wn),this}rotateX(t){return Wn.makeRotationX(t),this.applyMatrix4(Wn),this}rotateY(t){return Wn.makeRotationY(t),this.applyMatrix4(Wn),this}rotateZ(t){return Wn.makeRotationZ(t),this.applyMatrix4(Wn),this}translate(t,e,i){return Wn.makeTranslation(t,e,i),this.applyMatrix4(Wn),this}scale(t,e,i){return Wn.makeScale(t,e,i),this.applyMatrix4(Wn),this}lookAt(t){return Ic.lookAt(t),Ic.updateMatrix(),this.applyMatrix4(Ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new de(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Gr.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Fn.min,Gr.min),Fn.expandByPoint(on),on.addVectors(Fn.max,Gr.max),Fn.expandByPoint(on)):(Fn.expandByPoint(Gr.min),Fn.expandByPoint(Gr.max))}Fn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)on.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(on));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)on.fromBufferAttribute(a,l),c&&(tr.fromBufferAttribute(t,l),on.add(tr)),s=Math.max(s,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let O=0;O<i.count;O++)a[O]=new U,c[O]=new U;let l=new U,h=new U,u=new U,f=new Mt,d=new Mt,g=new Mt,y=new U,x=new U;function m(O,A,S){l.fromBufferAttribute(i,O),h.fromBufferAttribute(i,A),u.fromBufferAttribute(i,S),f.fromBufferAttribute(r,O),d.fromBufferAttribute(r,A),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),d.sub(f),g.sub(f);let B=1/(d.x*g.y-g.x*d.y);isFinite(B)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(B),x.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(B),a[O].add(y),a[A].add(y),a[S].add(y),c[O].add(x),c[A].add(x),c[S].add(x))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let O=0,A=T.length;O<A;++O){let S=T[O],B=S.start,tt=S.count;for(let F=B,G=B+tt;F<G;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let b=new U,E=new U,V=new U,D=new U;function I(O){V.fromBufferAttribute(s,O),D.copy(V);let A=a[O];b.copy(A),b.sub(V.multiplyScalar(V.dot(A))).normalize(),E.crossVectors(D,A);let B=E.dot(c[O])<0?-1:1;o.setXYZW(O,b.x,b.y,b.z,B)}for(let O=0,A=T.length;O<A;++O){let S=T[O],B=S.start,tt=S.count;for(let F=B,G=B+tt;F<G;F+=3)I(t.getX(F+0)),I(t.getX(F+1)),I(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,h=new U,u=new U;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),y=t.getX(f+1),x=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,x),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,x),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(x,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)on.fromBufferAttribute(t,e),on.normalize(),t.setXYZ(e,on.x,on.y,on.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let y=0,x=c.length;y<x;y++){a.isInterleavedBufferAttribute?d=c[y]*a.data.stride+a.offset:d=c[y]*h;for(let m=0;m<h;m++)f[g++]=l[d++]}return new fn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,i);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bu=new Be,us=new Es,Yo=new yr,zu=new U,qo=new U,Zo=new U,Ko=new U,Lc=new U,Jo=new U,Hu=new U,$o=new U,At=class extends Ge{constructor(t=new Fe,e=new Ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Jo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Lc.fromBufferAttribute(u,t),o?Jo.addScaledVector(Lc,h):Jo.addScaledVector(Lc.sub(e),h))}e.add(Jo)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Yo.copy(i.boundingSphere),Yo.applyMatrix4(r),us.copy(t.ray).recast(t.near),!(Yo.containsPoint(us.origin)===!1&&(us.intersectSphere(Yo,zu)===null||us.origin.distanceToSquared(zu)>(t.far-t.near)**2))&&(Bu.copy(r).invert(),us.copy(t.ray).applyMatrix4(Bu),!(i.boundingBox!==null&&us.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,us)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let x=f[g],m=o[x.materialIndex],T=Math.max(x.start,d.start),b=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let E=T,V=b;E<V;E+=3){let D=a.getX(E),I=a.getX(E+1),O=a.getX(E+2);s=jo(this,m,t,i,l,h,u,D,I,O),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let x=g,m=y;x<m;x+=3){let T=a.getX(x),b=a.getX(x+1),E=a.getX(x+2);s=jo(this,o,t,i,l,h,u,T,b,E),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let x=f[g],m=o[x.materialIndex],T=Math.max(x.start,d.start),b=Math.min(c.count,Math.min(x.start+x.count,d.start+d.count));for(let E=T,V=b;E<V;E+=3){let D=E,I=E+1,O=E+2;s=jo(this,m,t,i,l,h,u,D,I,O),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let x=g,m=y;x<m;x+=3){let T=x,b=x+1,E=x+2;s=jo(this,o,t,i,l,h,u,T,b,E),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function o0(n,t,e,i,s,r,o,a){let c;if(t.side===_n?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===ji,a),c===null)return null;$o.copy(a),$o.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo($o);return l<e.near||l>e.far?null:{distance:l,point:$o.clone(),object:n}}function jo(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,qo),n.getVertexPosition(c,Zo),n.getVertexPosition(l,Ko);let h=o0(n,t,e,i,qo,Zo,Ko,Hu);if(h){let u=new U;Ki.getBarycoord(Hu,qo,Zo,Ko,u),s&&(h.uv=Ki.getInterpolatedAttribute(s,a,c,l,u,new Mt)),r&&(h.uv1=Ki.getInterpolatedAttribute(r,a,c,l,u,new Mt)),o&&(h.normal=Ki.getInterpolatedAttribute(o,a,c,l,u,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new U,materialIndex:0};Ki.getNormal(qo,Zo,Ko,f.normal),h.face=f,h.barycoord=u}return h}var ze=class n extends Fe{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(u,2));function g(y,x,m,T,b,E,V,D,I,O,A){let S=E/I,B=V/O,tt=E/2,F=V/2,G=D/2,Z=I+1,q=O+1,mt=0,j=0,vt=new U;for(let ht=0;ht<q;ht++){let Wt=ht*B-F;for(let ce=0;ce<Z;ce++){let Ee=ce*S-tt;vt[y]=Ee*T,vt[x]=Wt*b,vt[m]=G,l.push(vt.x,vt.y,vt.z),vt[y]=0,vt[x]=0,vt[m]=D>0?1:-1,h.push(vt.x,vt.y,vt.z),u.push(ce/I),u.push(1-ht/O),mt+=1}}for(let ht=0;ht<O;ht++)for(let Wt=0;Wt<I;Wt++){let ce=f+Wt+Z*ht,Ee=f+Wt+Z*(ht+1),lt=f+(Wt+1)+Z*(ht+1),St=f+(Wt+1)+Z*ht;c.push(ce,Ee,St),c.push(Ee,lt,St),j+=6}a.addGroup(d,j,A),d+=j,f+=mt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Mr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Tn(n){let t={};for(let e=0;e<n.length;e++){let i=Mr(n[e]);for(let s in i)t[s]=i[s]}return t}function a0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Yf(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}var c0={clone:Mr,merge:Tn},l0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,h0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xn=class extends Oi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=l0,this.fragmentShader=h0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mr(t.uniforms),this.uniformsGroups=a0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},ba=class extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Ii}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},qi=new U,ku=new Mt,Vu=new Mt,cn=class extends ba{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=so*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return so*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qi.x,qi.y).multiplyScalar(-t/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-t/qi.z)}getViewSize(t,e){return this.getViewBounds(t,ku,Vu),e.subVectors(Vu,ku)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Jr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},er=-90,nr=1,Nl=class extends Ge{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new cn(er,nr,t,e);s.layers=this.layers,this.add(s);let r=new cn(er,nr,t,e);r.layers=this.layers,this.add(r);let o=new cn(er,nr,t,e);o.layers=this.layers,this.add(o);let a=new cn(er,nr,t,e);a.layers=this.layers,this.add(a);let c=new cn(er,nr,t,e);c.layers=this.layers,this.add(c);let l=new cn(er,nr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===_a)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Sa=class extends yn{constructor(t,e,i,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:mr,super(t,e,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ol=class extends Ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Sa(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:pi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ze(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:Mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Ji});r.uniforms.tEquirect.value=e;let o=new At(s,r),a=e.minFilter;return e.minFilter===ys&&(e.minFilter=pi),new Nl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Dc=new U,u0=new U,f0=new ge,ti=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Dc.subVectors(i,e).cross(u0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Dc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||f0.getNormalMatrix(t),s=this.coplanarPoint(Dc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},fs=new yr,Qo=new U,ao=class{constructor(t=new ti,e=new ti,i=new ti,s=new ti,r=new ti,o=new ti){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ii){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],y=s[10],x=s[11],m=s[12],T=s[13],b=s[14],E=s[15];if(i[0].setComponents(c-r,f-l,x-d,E-m).normalize(),i[1].setComponents(c+r,f+l,x+d,E+m).normalize(),i[2].setComponents(c+o,f+h,x+g,E+T).normalize(),i[3].setComponents(c-o,f-h,x-g,E-T).normalize(),i[4].setComponents(c-a,f-u,x-y,E-b).normalize(),e===Ii)i[5].setComponents(c+a,f+u,x+y,E+b).normalize();else if(e===_a)i[5].setComponents(a,u,y,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(t){return fs.center.set(0,0,0),fs.radius=.7071067811865476,fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Qo.x=s.normal.x>0?t.max.x:t.min.x,Qo.y=s.normal.y>0?t.max.y:t.min.y,Qo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Qo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function qf(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function d0(n){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],y=u[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,u[f]=y)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let y=u[d];n.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Qi=class n extends Fe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],g=[],y=[],x=[];for(let m=0;m<h;m++){let T=m*f-o;for(let b=0;b<l;b++){let E=b*u-r;g.push(E,-T,0),y.push(0,0,1),x.push(b/a),x.push(1-m/c)}}for(let m=0;m<c;m++)for(let T=0;T<a;T++){let b=T+l*m,E=T+l*(m+1),V=T+1+l*(m+1),D=T+1+l*m;d.push(b,E,D),d.push(E,V,D)}this.setIndex(d),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(y,3)),this.setAttribute("uv",new de(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},p0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,m0=`#ifdef USE_ALPHAHASH
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
#endif`,g0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,x0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,y0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,M0=`#ifdef USE_AOMAP
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
#endif`,v0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,E0=`#ifdef USE_BATCHING
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
#endif`,b0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,S0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,w0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,A0=`#ifdef USE_IRIDESCENCE
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
#endif`,R0=`#ifdef USE_BUMPMAP
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
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,N0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,F0=`#define PI 3.141592653589793
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
} // validated`,B0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,z0=`vec3 transformedNormal = objectNormal;
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
#endif`,H0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,V0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,W0="gl_FragColor = linearToOutputTexel( gl_FragColor );",X0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Y0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Z0=`#ifdef USE_ENVMAP
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
#endif`,K0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Q0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,em=`#ifdef USE_GRADIENTMAP
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
}`,nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,im=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rm=`uniform bool receiveShadow;
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
#endif`,om=`#ifdef USE_ENVMAP
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
#endif`,am=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,um=`PhysicalMaterial material;
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
#endif`,fm=`struct PhysicalMaterial {
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
}`,dm=`
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
#endif`,pm=`#if defined( RE_IndirectDiffuse )
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
#endif`,mm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_m=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ym=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bm=`#if defined( USE_POINTS_UV )
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
#endif`,Sm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Am=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cm=`#ifdef USE_MORPHTARGETS
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
#endif`,Pm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Im=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Om=`#ifdef USE_NORMALMAP
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
#endif`,Fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,km=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ym=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Km=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jm=`float getShadowMask() {
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
}`,Qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tg=`#ifdef USE_SKINNING
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
#endif`,eg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ng=`#ifdef USE_SKINNING
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
#endif`,ig=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,og=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ag=`#ifdef USE_TRANSMISSION
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
#endif`,cg=`#ifdef USE_TRANSMISSION
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
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pg=`uniform sampler2D t2D;
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
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_g=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`#include <common>
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
}`,Mg=`#if DEPTH_PACKING == 3200
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
}`,vg=`#define DISTANCE
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
}`,Eg=`#define DISTANCE
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
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`uniform float scale;
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
}`,Tg=`uniform vec3 diffuse;
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
}`,Ag=`#include <common>
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Cg=`#define LAMBERT
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
}`,Pg=`#define LAMBERT
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
}`,Ig=`#define MATCAP
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
}`,Lg=`#define MATCAP
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
}`,Dg=`#define NORMAL
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
}`,Ug=`#define NORMAL
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
}`,Ng=`#define PHONG
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
}`,Og=`#define PHONG
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
}`,Fg=`#define STANDARD
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
}`,Bg=`#define STANDARD
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
}`,zg=`#define TOON
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
}`,Hg=`#define TOON
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
}`,kg=`uniform float size;
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
}`,Vg=`uniform vec3 diffuse;
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
}`,Gg=`#include <common>
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
}`,Wg=`uniform vec3 color;
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
}`,Xg=`uniform float rotation;
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
}`,Yg=`uniform vec3 diffuse;
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
}`,_e={alphahash_fragment:p0,alphahash_pars_fragment:m0,alphamap_fragment:g0,alphamap_pars_fragment:x0,alphatest_fragment:_0,alphatest_pars_fragment:y0,aomap_fragment:M0,aomap_pars_fragment:v0,batching_pars_vertex:E0,batching_vertex:b0,begin_vertex:S0,beginnormal_vertex:w0,bsdfs:T0,iridescence_fragment:A0,bumpmap_pars_fragment:R0,clipping_planes_fragment:C0,clipping_planes_pars_fragment:P0,clipping_planes_pars_vertex:I0,clipping_planes_vertex:L0,color_fragment:D0,color_pars_fragment:U0,color_pars_vertex:N0,color_vertex:O0,common:F0,cube_uv_reflection_fragment:B0,defaultnormal_vertex:z0,displacementmap_pars_vertex:H0,displacementmap_vertex:k0,emissivemap_fragment:V0,emissivemap_pars_fragment:G0,colorspace_fragment:W0,colorspace_pars_fragment:X0,envmap_fragment:Y0,envmap_common_pars_fragment:q0,envmap_pars_fragment:Z0,envmap_pars_vertex:K0,envmap_physical_pars_fragment:om,envmap_vertex:J0,fog_vertex:$0,fog_pars_vertex:j0,fog_fragment:Q0,fog_pars_fragment:tm,gradientmap_pars_fragment:em,lightmap_pars_fragment:nm,lights_lambert_fragment:im,lights_lambert_pars_fragment:sm,lights_pars_begin:rm,lights_toon_fragment:am,lights_toon_pars_fragment:cm,lights_phong_fragment:lm,lights_phong_pars_fragment:hm,lights_physical_fragment:um,lights_physical_pars_fragment:fm,lights_fragment_begin:dm,lights_fragment_maps:pm,lights_fragment_end:mm,logdepthbuf_fragment:gm,logdepthbuf_pars_fragment:xm,logdepthbuf_pars_vertex:_m,logdepthbuf_vertex:ym,map_fragment:Mm,map_pars_fragment:vm,map_particle_fragment:Em,map_particle_pars_fragment:bm,metalnessmap_fragment:Sm,metalnessmap_pars_fragment:wm,morphinstance_vertex:Tm,morphcolor_vertex:Am,morphnormal_vertex:Rm,morphtarget_pars_vertex:Cm,morphtarget_vertex:Pm,normal_fragment_begin:Im,normal_fragment_maps:Lm,normal_pars_fragment:Dm,normal_pars_vertex:Um,normal_vertex:Nm,normalmap_pars_fragment:Om,clearcoat_normal_fragment_begin:Fm,clearcoat_normal_fragment_maps:Bm,clearcoat_pars_fragment:zm,iridescence_pars_fragment:Hm,opaque_fragment:km,packing:Vm,premultiplied_alpha_fragment:Gm,project_vertex:Wm,dithering_fragment:Xm,dithering_pars_fragment:Ym,roughnessmap_fragment:qm,roughnessmap_pars_fragment:Zm,shadowmap_pars_fragment:Km,shadowmap_pars_vertex:Jm,shadowmap_vertex:$m,shadowmask_pars_fragment:jm,skinbase_vertex:Qm,skinning_pars_vertex:tg,skinning_vertex:eg,skinnormal_vertex:ng,specularmap_fragment:ig,specularmap_pars_fragment:sg,tonemapping_fragment:rg,tonemapping_pars_fragment:og,transmission_fragment:ag,transmission_pars_fragment:cg,uv_pars_fragment:lg,uv_pars_vertex:hg,uv_vertex:ug,worldpos_vertex:fg,background_vert:dg,background_frag:pg,backgroundCube_vert:mg,backgroundCube_frag:gg,cube_vert:xg,cube_frag:_g,depth_vert:yg,depth_frag:Mg,distanceRGBA_vert:vg,distanceRGBA_frag:Eg,equirect_vert:bg,equirect_frag:Sg,linedashed_vert:wg,linedashed_frag:Tg,meshbasic_vert:Ag,meshbasic_frag:Rg,meshlambert_vert:Cg,meshlambert_frag:Pg,meshmatcap_vert:Ig,meshmatcap_frag:Lg,meshnormal_vert:Dg,meshnormal_frag:Ug,meshphong_vert:Ng,meshphong_frag:Og,meshphysical_vert:Fg,meshphysical_frag:Bg,meshtoon_vert:zg,meshtoon_frag:Hg,points_vert:kg,points_frag:Vg,shadow_vert:Gg,shadow_frag:Wg,sprite_vert:Xg,sprite_frag:Yg},zt={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},di={basic:{uniforms:Tn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:Tn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new re(0)}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:Tn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:Tn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:Tn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new re(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:Tn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:Tn([zt.points,zt.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:Tn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:Tn([zt.common,zt.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:Tn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:Tn([zt.sprite,zt.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distanceRGBA:{uniforms:Tn([zt.common,zt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distanceRGBA_vert,fragmentShader:_e.distanceRGBA_frag},shadow:{uniforms:Tn([zt.lights,zt.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};di.physical={uniforms:Tn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};var ta={r:0,b:0,g:0},ds=new gi,qg=new Be;function Zg(n,t,e,i,s,r,o){let a=new re(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(T){let b=T.isScene===!0?T.background:null;return b&&b.isTexture&&(b=(T.backgroundBlurriness>0?e:t).get(b)),b}function y(T){let b=!1,E=g(T);E===null?m(a,c):E&&E.isColor&&(m(E,1),b=!0);let V=n.xr.getEnvironmentBlendMode();V==="additive"?i.buffers.color.setClear(0,0,0,1,o):V==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(T,b){let E=g(b);E&&(E.isCubeTexture||E.mapping===Va)?(h===void 0&&(h=new At(new ze(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Mr(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(V,D,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ds.copy(b.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qg.makeRotationFromEuler(ds)),h.material.toneMapped=be.getTransfer(E.colorSpace)!==De,(u!==E||f!==E.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=E,f=E.version,d=n.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new At(new Qi(2,2),new Xn({name:"BackgroundMaterial",uniforms:Mr(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=be.getTransfer(E.colorSpace)!==De,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=E,f=E.version,d=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,b){T.getRGB(ta,Yf(n)),i.buffers.color.setClear(ta.r,ta.g,ta.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(T,b=1){a.set(T),c=b,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,m(a,c)},render:y,addToRenderList:x}}function Kg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(S,B,tt,F,G){let Z=!1,q=u(F,tt,B);r!==q&&(r=q,l(r.object)),Z=d(S,F,tt,G),Z&&g(S,F,tt,G),G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,E(S,B,tt,F),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function h(S){return n.deleteVertexArray(S)}function u(S,B,tt){let F=tt.wireframe===!0,G=i[S.id];G===void 0&&(G={},i[S.id]=G);let Z=G[B.id];Z===void 0&&(Z={},G[B.id]=Z);let q=Z[F];return q===void 0&&(q=f(c()),Z[F]=q),q}function f(S){let B=[],tt=[],F=[];for(let G=0;G<e;G++)B[G]=0,tt[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:tt,attributeDivisors:F,object:S,attributes:{},index:null}}function d(S,B,tt,F){let G=r.attributes,Z=B.attributes,q=0,mt=tt.getAttributes();for(let j in mt)if(mt[j].location>=0){let ht=G[j],Wt=Z[j];if(Wt===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(Wt=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(Wt=S.instanceColor)),ht===void 0||ht.attribute!==Wt||Wt&&ht.data!==Wt.data)return!0;q++}return r.attributesNum!==q||r.index!==F}function g(S,B,tt,F){let G={},Z=B.attributes,q=0,mt=tt.getAttributes();for(let j in mt)if(mt[j].location>=0){let ht=Z[j];ht===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(ht=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(ht=S.instanceColor));let Wt={};Wt.attribute=ht,ht&&ht.data&&(Wt.data=ht.data),G[j]=Wt,q++}r.attributes=G,r.attributesNum=q,r.index=F}function y(){let S=r.newAttributes;for(let B=0,tt=S.length;B<tt;B++)S[B]=0}function x(S){m(S,0)}function m(S,B){let tt=r.newAttributes,F=r.enabledAttributes,G=r.attributeDivisors;tt[S]=1,F[S]===0&&(n.enableVertexAttribArray(S),F[S]=1),G[S]!==B&&(n.vertexAttribDivisor(S,B),G[S]=B)}function T(){let S=r.newAttributes,B=r.enabledAttributes;for(let tt=0,F=B.length;tt<F;tt++)B[tt]!==S[tt]&&(n.disableVertexAttribArray(tt),B[tt]=0)}function b(S,B,tt,F,G,Z,q){q===!0?n.vertexAttribIPointer(S,B,tt,G,Z):n.vertexAttribPointer(S,B,tt,F,G,Z)}function E(S,B,tt,F){y();let G=F.attributes,Z=tt.getAttributes(),q=B.defaultAttributeValues;for(let mt in Z){let j=Z[mt];if(j.location>=0){let vt=G[mt];if(vt===void 0&&(mt==="instanceMatrix"&&S.instanceMatrix&&(vt=S.instanceMatrix),mt==="instanceColor"&&S.instanceColor&&(vt=S.instanceColor)),vt!==void 0){let ht=vt.normalized,Wt=vt.itemSize,ce=t.get(vt);if(ce===void 0)continue;let Ee=ce.buffer,lt=ce.type,St=ce.bytesPerElement,Zt=lt===n.INT||lt===n.UNSIGNED_INT||vt.gpuType===yh;if(vt.isInterleavedBufferAttribute){let _t=vt.data,$t=_t.stride,ae=vt.offset;if(_t.isInstancedInterleavedBuffer){for(let Xt=0;Xt<j.locationSize;Xt++)m(j.location+Xt,_t.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Xt=0;Xt<j.locationSize;Xt++)x(j.location+Xt);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let Xt=0;Xt<j.locationSize;Xt++)b(j.location+Xt,Wt/j.locationSize,lt,ht,$t*St,(ae+Wt/j.locationSize*Xt)*St,Zt)}else{if(vt.isInstancedBufferAttribute){for(let _t=0;_t<j.locationSize;_t++)m(j.location+_t,vt.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let _t=0;_t<j.locationSize;_t++)x(j.location+_t);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let _t=0;_t<j.locationSize;_t++)b(j.location+_t,Wt/j.locationSize,lt,ht,Wt*St,Wt/j.locationSize*_t*St,Zt)}}else if(q!==void 0){let ht=q[mt];if(ht!==void 0)switch(ht.length){case 2:n.vertexAttrib2fv(j.location,ht);break;case 3:n.vertexAttrib3fv(j.location,ht);break;case 4:n.vertexAttrib4fv(j.location,ht);break;default:n.vertexAttrib1fv(j.location,ht)}}}}T()}function V(){O();for(let S in i){let B=i[S];for(let tt in B){let F=B[tt];for(let G in F)h(F[G].object),delete F[G];delete B[tt]}delete i[S]}}function D(S){if(i[S.id]===void 0)return;let B=i[S.id];for(let tt in B){let F=B[tt];for(let G in F)h(F[G].object),delete F[G];delete B[tt]}delete i[S.id]}function I(S){for(let B in i){let tt=i[B];if(tt[S.id]===void 0)continue;let F=tt[S.id];for(let G in F)h(F[G].object),delete F[G];delete tt[S.id]}}function O(){A(),o=!0,r!==s&&(r=s,l(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:A,dispose:V,releaseStatesOfGeometry:D,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:x,disableUnusedAttributes:T}}function Jg(n,t,e){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,i,1)}function c(l,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y]*f[y];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function $g(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==ni&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let O=I===Ao&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Di&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Pi&&!O)}function c(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),V=g>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:V,maxSamples:D}}function jg(n){let t=this,e=null,i=0,s=!1,r=!1,o=new ti,a=new ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,y=u.clipIntersection,x=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!x)r?h(null):l();else{let T=r?0:i,b=T*4,E=m.clippingState||null;c.value=E,E=h(g,f,b,d);for(let V=0;V!==b;++V)E[V]=e[V];m.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,g){let y=u!==null?u.length:0,x=null;if(y!==0){if(x=c.value,g!==!0||x===null){let m=d+y*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(x===null||x.length<m)&&(x=new Float32Array(m));for(let b=0,E=d;b!==y;++b,E+=4)o.copy(u[b]).applyMatrix4(T,a),o.normal.toArray(x,E),x[E+3]=o.constant}c.value=x,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,x}}function Qg(n){let t=new WeakMap;function e(o,a){return a===el?o.mapping=mr:a===nl&&(o.mapping=gr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===el||a===nl)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ol(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var wa=class extends ba{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},cr=4,Gu=[.125,.215,.35,.446,.526,.582],xs=20,Uc=new wa,Wu=new re,Nc=null,Oc=0,Fc=0,Bc=!1,ms=(1+Math.sqrt(5))/2,ir=1/ms,Xu=[new U(-ms,ir,0),new U(ms,ir,0),new U(-ir,0,ms),new U(ir,0,ms),new U(0,ms,-ir),new U(0,ms,ir),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Ta=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Nc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),Fc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Nc,Oc,Fc),this._renderer.xr.enabled=Bc,t.scissorTest=!1,ea(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===mr||t.mapping===gr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Nc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),Fc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:Ao,format:ni,colorSpace:br,depthBuffer:!1},s=Yu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yu(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tx(r)),this._blurMaterial=ex(r,t,e)}return s}_compileMaterial(t){let e=new At(this._lodPlanes[0],t);this._renderer.compile(e,Uc)}_sceneToCubeUV(t,e,i,s){let a=new cn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Wu),h.toneMapping=$i,h.autoClear=!1;let d=new Ke({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),g=new At(new ze,d),y=!1,x=t.background;x?x.isColor&&(d.color.copy(x),t.background=null,y=!0):(d.color.copy(Wu),y=!0);for(let m=0;m<6;m++){let T=m%3;T===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):T===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let b=this._cubeSize;ea(s,T*b,m>2?b:0,b,b),h.setRenderTarget(s),y&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=x}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===mr||t.mapping===gr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new At(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;ea(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Uc)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Xu[(s-r-1)%Xu.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new At(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*xs-1),y=r/g,x=isFinite(r)?1+Math.floor(h*y):xs;x>xs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${xs}`);let m=[],T=0;for(let I=0;I<xs;++I){let O=I/y,A=Math.exp(-O*O/2);m.push(A),I===0?T+=A:I<x&&(T+=2*A)}for(let I=0;I<m.length;I++)m[I]=m[I]/T;f.envMap.value=t.texture,f.samples.value=x,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;let E=this._sizeLods[s],V=3*E*(s>b-cr?s-b+cr:0),D=4*(this._cubeSize-E);ea(e,V,D,3*E,2*E),c.setRenderTarget(e),c.render(u,Uc)}};function tx(n){let t=[],e=[],i=[],s=n,r=n-cr+1+Gu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>n-cr?c=Gu[o-n+cr-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,y=3,x=2,m=1,T=new Float32Array(y*g*d),b=new Float32Array(x*g*d),E=new Float32Array(m*g*d);for(let D=0;D<d;D++){let I=D%3*2/3-1,O=D>2?0:-1,A=[I,O,0,I+2/3,O,0,I+2/3,O+1,0,I,O,0,I+2/3,O+1,0,I,O+1,0];T.set(A,y*g*D),b.set(f,x*g*D);let S=[D,D,D,D,D,D];E.set(S,m*g*D)}let V=new Fe;V.setAttribute("position",new fn(T,y)),V.setAttribute("uv",new fn(b,x)),V.setAttribute("faceIndex",new fn(E,m)),t.push(V),s>cr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Yu(n,t,e){let i=new Ni(n,t,e);return i.texture.mapping=Va,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ea(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function ex(n,t,e){let i=new Float32Array(xs),s=new U(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Th(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function qu(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Th(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Zu(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Th(){return`

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
	`}function nx(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===el||c===nl,h=c===mr||c===gr;if(l||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Ta(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Ta(n)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function ix(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Zr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function sx(n,t,e,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let y=f.morphAttributes[g];for(let x=0,m=y.length;x<m;x++)t.remove(y[x])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)t.update(f[g],n.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let y=d[g];for(let x=0,m=y.length;x<m;x++)t.update(y[x],n.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,g=u.attributes.position,y=0;if(d!==null){let T=d.array;y=d.version;for(let b=0,E=T.length;b<E;b+=3){let V=T[b+0],D=T[b+1],I=T[b+2];f.push(V,D,D,I,I,V)}}else if(g!==void 0){let T=g.array;y=g.version;for(let b=0,E=T.length/3-1;b<E;b+=3){let V=b+0,D=b+1,I=b+2;f.push(V,D,D,I,I,V)}}else return;let x=new(Wf(f)?Ea:va)(f,1);x.version=y;let m=r.get(u);m&&t.remove(m),r.set(u,x)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function rx(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function l(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),e.update(d,i,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let x=0;for(let m=0;m<g;m++)x+=d[m];e.update(x,i,1)}function u(f,d,g,y){if(g===0)return;let x=t.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<f.length;m++)l(f[m]/o,d[m],y[m]);else{x.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,y,0,g);let m=0;for(let T=0;T<g;T++)m+=d[T]*y[T];e.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ox(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function ax(n,t,e){let i=new WeakMap,s=new Ue;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let A=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],b=0;d===!0&&(b=1),g===!0&&(b=2),y===!0&&(b=3);let E=a.attributes.position.count*b,V=1;E>t.maxTextureSize&&(V=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let D=new Float32Array(E*V*4*u),I=new Ma(D,E,V,u);I.type=Pi,I.needsUpdate=!0;let O=b*4;for(let S=0;S<u;S++){let B=x[S],tt=m[S],F=T[S],G=E*V*4*S;for(let Z=0;Z<B.count;Z++){let q=Z*O;d===!0&&(s.fromBufferAttribute(B,Z),D[G+q+0]=s.x,D[G+q+1]=s.y,D[G+q+2]=s.z,D[G+q+3]=0),g===!0&&(s.fromBufferAttribute(tt,Z),D[G+q+4]=s.x,D[G+q+5]=s.y,D[G+q+6]=s.z,D[G+q+7]=0),y===!0&&(s.fromBufferAttribute(F,Z),D[G+q+8]=s.x,D[G+q+9]=s.y,D[G+q+10]=s.z,D[G+q+11]=F.itemSize===4?s.w:1)}}f={count:u,texture:I,size:new Mt(E,V)},i.set(a,f),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let y=0;y<l.length;y++)d+=l[y];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function cx(n,t,e,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Aa=class extends yn{constructor(t,e,i,s,r,o,a,c,l,h=ur){if(h!==ur&&h!==_r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ur&&(i=Ms),i===void 0&&h===_r&&(i=xr),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:$e,this.minFilter=c!==void 0?c:$e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Zf=new yn,Ku=new Aa(1,1),Kf=new Ma,Jf=new Ul,$f=new Sa,Ju=[],$u=[],ju=new Float32Array(16),Qu=new Float32Array(9),tf=new Float32Array(4);function Sr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Ju[s];if(r===void 0&&(r=new Float32Array(s),Ju[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function en(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function nn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Wa(n,t){let e=$u[t];e===void 0&&(e=new Int32Array(t),$u[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function lx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function hx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;n.uniform2fv(this.addr,t),nn(e,t)}}function ux(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(en(e,t))return;n.uniform3fv(this.addr,t),nn(e,t)}}function fx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;n.uniform4fv(this.addr,t),nn(e,t)}}function dx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(en(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),nn(e,t)}else{if(en(e,i))return;tf.set(i),n.uniformMatrix2fv(this.addr,!1,tf),nn(e,i)}}function px(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(en(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),nn(e,t)}else{if(en(e,i))return;Qu.set(i),n.uniformMatrix3fv(this.addr,!1,Qu),nn(e,i)}}function mx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(en(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),nn(e,t)}else{if(en(e,i))return;ju.set(i),n.uniformMatrix4fv(this.addr,!1,ju),nn(e,i)}}function gx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function xx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;n.uniform2iv(this.addr,t),nn(e,t)}}function _x(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;n.uniform3iv(this.addr,t),nn(e,t)}}function yx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;n.uniform4iv(this.addr,t),nn(e,t)}}function Mx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function vx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;n.uniform2uiv(this.addr,t),nn(e,t)}}function Ex(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;n.uniform3uiv(this.addr,t),nn(e,t)}}function bx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;n.uniform4uiv(this.addr,t),nn(e,t)}}function Sx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ku.compareFunction=Vf,r=Ku):r=Zf,e.setTexture2D(t||r,s)}function wx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Jf,s)}function Tx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||$f,s)}function Ax(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Kf,s)}function Rx(n){switch(n){case 5126:return lx;case 35664:return hx;case 35665:return ux;case 35666:return fx;case 35674:return dx;case 35675:return px;case 35676:return mx;case 5124:case 35670:return gx;case 35667:case 35671:return xx;case 35668:case 35672:return _x;case 35669:case 35673:return yx;case 5125:return Mx;case 36294:return vx;case 36295:return Ex;case 36296:return bx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return wx;case 35680:case 36300:case 36308:case 36293:return Tx;case 36289:case 36303:case 36311:case 36292:return Ax}}function Cx(n,t){n.uniform1fv(this.addr,t)}function Px(n,t){let e=Sr(t,this.size,2);n.uniform2fv(this.addr,e)}function Ix(n,t){let e=Sr(t,this.size,3);n.uniform3fv(this.addr,e)}function Lx(n,t){let e=Sr(t,this.size,4);n.uniform4fv(this.addr,e)}function Dx(n,t){let e=Sr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Ux(n,t){let e=Sr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Nx(n,t){let e=Sr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Ox(n,t){n.uniform1iv(this.addr,t)}function Fx(n,t){n.uniform2iv(this.addr,t)}function Bx(n,t){n.uniform3iv(this.addr,t)}function zx(n,t){n.uniform4iv(this.addr,t)}function Hx(n,t){n.uniform1uiv(this.addr,t)}function kx(n,t){n.uniform2uiv(this.addr,t)}function Vx(n,t){n.uniform3uiv(this.addr,t)}function Gx(n,t){n.uniform4uiv(this.addr,t)}function Wx(n,t,e){let i=this.cache,s=t.length,r=Wa(e,s);en(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Zf,r[o])}function Xx(n,t,e){let i=this.cache,s=t.length,r=Wa(e,s);en(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Jf,r[o])}function Yx(n,t,e){let i=this.cache,s=t.length,r=Wa(e,s);en(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||$f,r[o])}function qx(n,t,e){let i=this.cache,s=t.length,r=Wa(e,s);en(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Kf,r[o])}function Zx(n){switch(n){case 5126:return Cx;case 35664:return Px;case 35665:return Ix;case 35666:return Lx;case 35674:return Dx;case 35675:return Ux;case 35676:return Nx;case 5124:case 35670:return Ox;case 35667:case 35671:return Fx;case 35668:case 35672:return Bx;case 35669:case 35673:return zx;case 5125:return Hx;case 36294:return kx;case 36295:return Vx;case 36296:return Gx;case 35678:case 36198:case 36298:case 36306:case 35682:return Wx;case 35679:case 36299:case 36307:return Xx;case 35680:case 36300:case 36308:case 36293:return Yx;case 36289:case 36303:case 36311:case 36292:return qx}}var Fl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Rx(e.type)}},Bl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zx(e.type)}},zl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},zc=/(\w+)(\])?(\[|\.)?/g;function ef(n,t){n.seq.push(t),n.map[t.id]=t}function Kx(n,t,e){let i=n.name,s=i.length;for(zc.lastIndex=0;;){let r=zc.exec(i),o=zc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ef(e,l===void 0?new Fl(a,n,t):new Bl(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new zl(a),ef(e,u)),e=u}}}var dr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Kx(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function nf(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Jx=37297,$x=0;function jx(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var sf=new ge;function Qx(n){be._getMatrix(sf,be.workingColorSpace,n);let t=`mat3( ${sf.elements.map(e=>e.toFixed(4))} )`;switch(be.getTransfer(n)){case Ga:return[t,"LinearTransferOETF"];case De:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function rf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+jx(n.getShaderSource(t),o)}else return s}function t_(n,t){let e=Qx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function e_(n,t){let e;switch(t){case up:e="Linear";break;case fp:e="Reinhard";break;case dp:e="Cineon";break;case pp:e="ACESFilmic";break;case gp:e="AgX";break;case xp:e="Neutral";break;case mp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var na=new U;function n_(){be.getLuminanceCoefficients(na);let n=na.x.toFixed(4),t=na.y.toFixed(4),e=na.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function s_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function r_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Kr(n){return n!==""}function of(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function af(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var o_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hl(n){return n.replace(o_,c_)}var a_=new Map;function c_(n,t){let e=_e[t];if(e===void 0){let i=a_.get(t);if(i!==void 0)e=_e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Hl(e)}var l_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cf(n){return n.replace(l_,h_)}function h_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function u_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Cf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===ka?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ci&&(t="SHADOWMAP_TYPE_VSM"),t}function f_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case mr:case gr:t="ENVMAP_TYPE_CUBE";break;case Va:t="ENVMAP_TYPE_CUBE_UV";break}return t}function d_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case gr:t="ENVMAP_MODE_REFRACTION";break}return t}function p_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case _h:t="ENVMAP_BLENDING_MULTIPLY";break;case lp:t="ENVMAP_BLENDING_MIX";break;case hp:t="ENVMAP_BLENDING_ADD";break}return t}function m_(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function g_(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=u_(e),l=f_(e),h=d_(e),u=p_(e),f=m_(e),d=i_(e),g=s_(r),y=s.createProgram(),x,m,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Kr).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Kr).join(`
`),m.length>0&&(m+=`
`)):(x=[lf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),m=[lf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$i?"#define TONE_MAPPING":"",e.toneMapping!==$i?_e.tonemapping_pars_fragment:"",e.toneMapping!==$i?e_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,t_("linearToOutputTexel",e.outputColorSpace),n_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Kr).join(`
`)),o=Hl(o),o=of(o,e),o=af(o,e),a=Hl(a),a=of(a,e),a=af(a,e),o=cf(o),a=cf(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=T+x+o,E=T+m+a,V=nf(s,s.VERTEX_SHADER,b),D=nf(s,s.FRAGMENT_SHADER,E);s.attachShader(y,V),s.attachShader(y,D),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function I(B){if(n.debug.checkShaderErrors){let tt=s.getProgramInfoLog(y).trim(),F=s.getShaderInfoLog(V).trim(),G=s.getShaderInfoLog(D).trim(),Z=!0,q=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,V,D);else{let mt=rf(s,V,"vertex"),j=rf(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+tt+`
`+mt+`
`+j)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(F===""||G==="")&&(q=!1);q&&(B.diagnostics={runnable:Z,programLog:tt,vertexShader:{log:F,prefix:x},fragmentShader:{log:G,prefix:m}})}s.deleteShader(V),s.deleteShader(D),O=new dr(s,y),A=r_(s,y)}let O;this.getUniforms=function(){return O===void 0&&I(this),O};let A;this.getAttributes=function(){return A===void 0&&I(this),A};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(y,Jx)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$x++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=V,this.fragmentShader=D,this}var x_=0,kl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Vl(t),e.set(t,i)),i}},Vl=class{constructor(t){this.id=x_++,this.code=t,this.usedTimes=0}};function __(n,t,e,i,s,r,o){let a=new oo,c=new kl,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(A){return l.add(A),A===0?"uv":`uv${A}`}function x(A,S,B,tt,F){let G=tt.fog,Z=F.geometry,q=A.isMeshStandardMaterial?tt.environment:null,mt=(A.isMeshStandardMaterial?e:t).get(A.envMap||q),j=mt&&mt.mapping===Va?mt.image.height:null,vt=g[A.type];A.precision!==null&&(d=s.getMaxPrecision(A.precision),d!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",d,"instead."));let ht=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Wt=ht!==void 0?ht.length:0,ce=0;Z.morphAttributes.position!==void 0&&(ce=1),Z.morphAttributes.normal!==void 0&&(ce=2),Z.morphAttributes.color!==void 0&&(ce=3);let Ee,lt,St,Zt;if(vt){let Ae=di[vt];Ee=Ae.vertexShader,lt=Ae.fragmentShader}else Ee=A.vertexShader,lt=A.fragmentShader,c.update(A),St=c.getVertexShaderID(A),Zt=c.getFragmentShaderID(A);let _t=n.getRenderTarget(),$t=n.state.buffers.depth.getReversed(),ae=F.isInstancedMesh===!0,Xt=F.isBatchedMesh===!0,le=!!A.map,dt=!!A.matcap,wt=!!mt,N=!!A.aoMap,Gt=!!A.lightMap,bt=!!A.bumpMap,Ot=!!A.normalMap,Pt=!!A.displacementMap,te=!!A.emissiveMap,Ht=!!A.metalnessMap,P=!!A.roughnessMap,w=A.anisotropy>0,Q=A.clearcoat>0,W=A.dispersion>0,J=A.iridescence>0,X=A.sheen>0,xt=A.transmission>0,ft=w&&!!A.anisotropyMap,pt=Q&&!!A.clearcoatMap,yt=Q&&!!A.clearcoatNormalMap,et=Q&&!!A.clearcoatRoughnessMap,It=J&&!!A.iridescenceMap,Rt=J&&!!A.iridescenceThicknessMap,Et=X&&!!A.sheenColorMap,Ut=X&&!!A.sheenRoughnessMap,Yt=!!A.specularMap,qt=!!A.specularColorMap,ve=!!A.specularIntensityMap,Y=xt&&!!A.transmissionMap,Dt=xt&&!!A.thicknessMap,st=!!A.gradientMap,gt=!!A.alphaMap,Bt=A.alphaTest>0,Nt=!!A.alphaHash,fe=!!A.extensions,Te=$i;A.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(Te=n.toneMapping);let rn={shaderID:vt,shaderType:A.type,shaderName:A.name,vertexShader:Ee,fragmentShader:lt,defines:A.defines,customVertexShaderID:St,customFragmentShaderID:Zt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:d,batching:Xt,batchingColor:Xt&&F._colorsTexture!==null,instancing:ae,instancingColor:ae&&F.instanceColor!==null,instancingMorph:ae&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:_t===null?n.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:br,alphaToCoverage:!!A.alphaToCoverage,map:le,matcap:dt,envMap:wt,envMapMode:wt&&mt.mapping,envMapCubeUVHeight:j,aoMap:N,lightMap:Gt,bumpMap:bt,normalMap:Ot,displacementMap:f&&Pt,emissiveMap:te,normalMapObjectSpace:Ot&&A.normalMapType===vp,normalMapTangentSpace:Ot&&A.normalMapType===kf,metalnessMap:Ht,roughnessMap:P,anisotropy:w,anisotropyMap:ft,clearcoat:Q,clearcoatMap:pt,clearcoatNormalMap:yt,clearcoatRoughnessMap:et,dispersion:W,iridescence:J,iridescenceMap:It,iridescenceThicknessMap:Rt,sheen:X,sheenColorMap:Et,sheenRoughnessMap:Ut,specularMap:Yt,specularColorMap:qt,specularIntensityMap:ve,transmission:xt,transmissionMap:Y,thicknessMap:Dt,gradientMap:st,opaque:A.transparent===!1&&A.blending===hr&&A.alphaToCoverage===!1,alphaMap:gt,alphaTest:Bt,alphaHash:Nt,combine:A.combine,mapUv:le&&y(A.map.channel),aoMapUv:N&&y(A.aoMap.channel),lightMapUv:Gt&&y(A.lightMap.channel),bumpMapUv:bt&&y(A.bumpMap.channel),normalMapUv:Ot&&y(A.normalMap.channel),displacementMapUv:Pt&&y(A.displacementMap.channel),emissiveMapUv:te&&y(A.emissiveMap.channel),metalnessMapUv:Ht&&y(A.metalnessMap.channel),roughnessMapUv:P&&y(A.roughnessMap.channel),anisotropyMapUv:ft&&y(A.anisotropyMap.channel),clearcoatMapUv:pt&&y(A.clearcoatMap.channel),clearcoatNormalMapUv:yt&&y(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&y(A.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&y(A.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&y(A.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&y(A.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&y(A.sheenRoughnessMap.channel),specularMapUv:Yt&&y(A.specularMap.channel),specularColorMapUv:qt&&y(A.specularColorMap.channel),specularIntensityMapUv:ve&&y(A.specularIntensityMap.channel),transmissionMapUv:Y&&y(A.transmissionMap.channel),thicknessMapUv:Dt&&y(A.thicknessMap.channel),alphaMapUv:gt&&y(A.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ot||w),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Z.attributes.uv&&(le||gt),fog:!!G,useFog:A.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:$t,skinning:F.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Wt,morphTextureStride:ce,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:Te,decodeVideoTexture:le&&A.map.isVideoTexture===!0&&be.getTransfer(A.map.colorSpace)===De,decodeVideoTextureEmissive:te&&A.emissiveMap.isVideoTexture===!0&&be.getTransfer(A.emissiveMap.colorSpace)===De,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===xn,flipSided:A.side===_n,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:fe&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&A.extensions.multiDraw===!0||Xt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return rn.vertexUv1s=l.has(1),rn.vertexUv2s=l.has(2),rn.vertexUv3s=l.has(3),l.clear(),rn}function m(A){let S=[];if(A.shaderID?S.push(A.shaderID):(S.push(A.customVertexShaderID),S.push(A.customFragmentShaderID)),A.defines!==void 0)for(let B in A.defines)S.push(B),S.push(A.defines[B]);return A.isRawShaderMaterial===!1&&(T(S,A),b(S,A),S.push(n.outputColorSpace)),S.push(A.customProgramCacheKey),S.join()}function T(A,S){A.push(S.precision),A.push(S.outputColorSpace),A.push(S.envMapMode),A.push(S.envMapCubeUVHeight),A.push(S.mapUv),A.push(S.alphaMapUv),A.push(S.lightMapUv),A.push(S.aoMapUv),A.push(S.bumpMapUv),A.push(S.normalMapUv),A.push(S.displacementMapUv),A.push(S.emissiveMapUv),A.push(S.metalnessMapUv),A.push(S.roughnessMapUv),A.push(S.anisotropyMapUv),A.push(S.clearcoatMapUv),A.push(S.clearcoatNormalMapUv),A.push(S.clearcoatRoughnessMapUv),A.push(S.iridescenceMapUv),A.push(S.iridescenceThicknessMapUv),A.push(S.sheenColorMapUv),A.push(S.sheenRoughnessMapUv),A.push(S.specularMapUv),A.push(S.specularColorMapUv),A.push(S.specularIntensityMapUv),A.push(S.transmissionMapUv),A.push(S.thicknessMapUv),A.push(S.combine),A.push(S.fogExp2),A.push(S.sizeAttenuation),A.push(S.morphTargetsCount),A.push(S.morphAttributeCount),A.push(S.numDirLights),A.push(S.numPointLights),A.push(S.numSpotLights),A.push(S.numSpotLightMaps),A.push(S.numHemiLights),A.push(S.numRectAreaLights),A.push(S.numDirLightShadows),A.push(S.numPointLightShadows),A.push(S.numSpotLightShadows),A.push(S.numSpotLightShadowsWithMaps),A.push(S.numLightProbes),A.push(S.shadowMapType),A.push(S.toneMapping),A.push(S.numClippingPlanes),A.push(S.numClipIntersection),A.push(S.depthPacking)}function b(A,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),A.push(a.mask)}function E(A){let S=g[A.type],B;if(S){let tt=di[S];B=c0.clone(tt.uniforms)}else B=A.uniforms;return B}function V(A,S){let B;for(let tt=0,F=h.length;tt<F;tt++){let G=h[tt];if(G.cacheKey===S){B=G,++B.usedTimes;break}}return B===void 0&&(B=new g_(n,S,A,r),h.push(B)),B}function D(A){if(--A.usedTimes===0){let S=h.indexOf(A);h[S]=h[h.length-1],h.pop(),A.destroy()}}function I(A){c.remove(A)}function O(){c.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:E,acquireProgram:V,releaseProgram:D,releaseShaderCache:I,programs:h,dispose:O}}function y_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function M_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function hf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function uf(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,f,d,g,y,x){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:y,group:x},n[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=y,m.group=x),t++,m}function a(u,f,d,g,y,x){let m=o(u,f,d,g,y,x);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):e.push(m)}function c(u,f,d,g,y,x){let m=o(u,f,d,g,y,x);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function l(u,f){e.length>1&&e.sort(u||M_),i.length>1&&i.sort(f||hf),s.length>1&&s.sort(f||hf)}function h(){for(let u=t,f=n.length;u<f;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function v_(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new uf,n.set(i,[o])):s>=r.length?(o=new uf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function E_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new re};break;case"SpotLight":e={position:new U,direction:new U,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new re,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new re,groundColor:new re};break;case"RectAreaLight":e={color:new re,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function b_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var S_=0;function w_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function T_(n){let t=new E_,e=b_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);let s=new U,r=new Be,o=new Be;function a(l){let h=0,u=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let d=0,g=0,y=0,x=0,m=0,T=0,b=0,E=0,V=0,D=0,I=0;l.sort(w_);for(let A=0,S=l.length;A<S;A++){let B=l[A],tt=B.color,F=B.intensity,G=B.distance,Z=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)h+=tt.r*F,u+=tt.g*F,f+=tt.b*F;else if(B.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(B.sh.coefficients[q],F);I++}else if(B.isDirectionalLight){let q=t.get(B);if(q.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let mt=B.shadow,j=e.get(B);j.shadowIntensity=mt.intensity,j.shadowBias=mt.bias,j.shadowNormalBias=mt.normalBias,j.shadowRadius=mt.radius,j.shadowMapSize=mt.mapSize,i.directionalShadow[d]=j,i.directionalShadowMap[d]=Z,i.directionalShadowMatrix[d]=B.shadow.matrix,T++}i.directional[d]=q,d++}else if(B.isSpotLight){let q=t.get(B);q.position.setFromMatrixPosition(B.matrixWorld),q.color.copy(tt).multiplyScalar(F),q.distance=G,q.coneCos=Math.cos(B.angle),q.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),q.decay=B.decay,i.spot[y]=q;let mt=B.shadow;if(B.map&&(i.spotLightMap[V]=B.map,V++,mt.updateMatrices(B),B.castShadow&&D++),i.spotLightMatrix[y]=mt.matrix,B.castShadow){let j=e.get(B);j.shadowIntensity=mt.intensity,j.shadowBias=mt.bias,j.shadowNormalBias=mt.normalBias,j.shadowRadius=mt.radius,j.shadowMapSize=mt.mapSize,i.spotShadow[y]=j,i.spotShadowMap[y]=Z,E++}y++}else if(B.isRectAreaLight){let q=t.get(B);q.color.copy(tt).multiplyScalar(F),q.halfWidth.set(B.width*.5,0,0),q.halfHeight.set(0,B.height*.5,0),i.rectArea[x]=q,x++}else if(B.isPointLight){let q=t.get(B);if(q.color.copy(B.color).multiplyScalar(B.intensity),q.distance=B.distance,q.decay=B.decay,B.castShadow){let mt=B.shadow,j=e.get(B);j.shadowIntensity=mt.intensity,j.shadowBias=mt.bias,j.shadowNormalBias=mt.normalBias,j.shadowRadius=mt.radius,j.shadowMapSize=mt.mapSize,j.shadowCameraNear=mt.camera.near,j.shadowCameraFar=mt.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=B.shadow.matrix,b++}i.point[g]=q,g++}else if(B.isHemisphereLight){let q=t.get(B);q.skyColor.copy(B.color).multiplyScalar(F),q.groundColor.copy(B.groundColor).multiplyScalar(F),i.hemi[m]=q,m++}}x>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=zt.LTC_FLOAT_1,i.rectAreaLTC2=zt.LTC_FLOAT_2):(i.rectAreaLTC1=zt.LTC_HALF_1,i.rectAreaLTC2=zt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let O=i.hash;(O.directionalLength!==d||O.pointLength!==g||O.spotLength!==y||O.rectAreaLength!==x||O.hemiLength!==m||O.numDirectionalShadows!==T||O.numPointShadows!==b||O.numSpotShadows!==E||O.numSpotMaps!==V||O.numLightProbes!==I)&&(i.directional.length=d,i.spot.length=y,i.rectArea.length=x,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+V-D,i.spotLightMap.length=V,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=I,O.directionalLength=d,O.pointLength=g,O.spotLength=y,O.rectAreaLength=x,O.hemiLength=m,O.numDirectionalShadows=T,O.numPointShadows=b,O.numSpotShadows=E,O.numSpotMaps=V,O.numLightProbes=I,i.version=S_++)}function c(l,h){let u=0,f=0,d=0,g=0,y=0,x=h.matrixWorldInverse;for(let m=0,T=l.length;m<T;m++){let b=l[m];if(b.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(x),u++}else if(b.isSpotLight){let E=i.spot[d];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(x),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(x),d++}else if(b.isRectAreaLight){let E=i.rectArea[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(x),o.identity(),r.copy(b.matrixWorld),r.premultiply(x),o.extractRotation(r),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(x),f++}else if(b.isHemisphereLight){let E=i.hemi[y];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(x),y++}}}return{setup:a,setupView:c,state:i}}function ff(n){let t=new T_(n),e=[],i=[];function s(h){l.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function A_(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new ff(n),t.set(s,[a])):r>=o.length?(a=new ff(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Gl=class extends Oi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=yp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Wl=class extends Oi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},R_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C_=`uniform sampler2D shadow_pass;
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
}`;function P_(n,t,e){let i=new ao,s=new Mt,r=new Mt,o=new Ue,a=new Gl({depthPacking:Mp}),c=new Wl,l={},h=e.maxTextureSize,u={[ji]:_n,[_n]:ji,[xn]:xn},f=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:R_,fragmentShader:C_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Fe;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new At(g,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cf;let m=this.type;this.render=function(D,I,O){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||D.length===0)return;let A=n.getRenderTarget(),S=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),tt=n.state;tt.setBlending(Ji),tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);let F=m!==Ci&&this.type===Ci,G=m===Ci&&this.type!==Ci;for(let Z=0,q=D.length;Z<q;Z++){let mt=D[Z],j=mt.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",mt,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let vt=j.getFrameExtents();if(s.multiply(vt),r.copy(j.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/vt.x),s.x=r.x*vt.x,j.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/vt.y),s.y=r.y*vt.y,j.mapSize.y=r.y)),j.map===null||F===!0||G===!0){let Wt=this.type!==Ci?{minFilter:$e,magFilter:$e}:{};j.map!==null&&j.map.dispose(),j.map=new Ni(s.x,s.y,Wt),j.map.texture.name=mt.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();let ht=j.getViewportCount();for(let Wt=0;Wt<ht;Wt++){let ce=j.getViewport(Wt);o.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),tt.viewport(o),j.updateMatrices(mt,Wt),i=j.getFrustum(),E(I,O,j.camera,mt,this.type)}j.isPointLightShadow!==!0&&this.type===Ci&&T(j,O),j.needsUpdate=!1}m=this.type,x.needsUpdate=!1,n.setRenderTarget(A,S,B)};function T(D,I){let O=t.update(y);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,d.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Ni(s.x,s.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(I,null,O,f,y,null),d.uniforms.shadow_pass.value=D.mapPass.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(I,null,O,d,y,null)}function b(D,I,O,A){let S=null,B=O.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(B!==void 0)S=B;else if(S=O.isPointLight===!0?c:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let tt=S.uuid,F=I.uuid,G=l[tt];G===void 0&&(G={},l[tt]=G);let Z=G[F];Z===void 0&&(Z=S.clone(),G[F]=Z,I.addEventListener("dispose",V)),S=Z}if(S.visible=I.visible,S.wireframe=I.wireframe,A===Ci?S.side=I.shadowSide!==null?I.shadowSide:I.side:S.side=I.shadowSide!==null?I.shadowSide:u[I.side],S.alphaMap=I.alphaMap,S.alphaTest=I.alphaTest,S.map=I.map,S.clipShadows=I.clipShadows,S.clippingPlanes=I.clippingPlanes,S.clipIntersection=I.clipIntersection,S.displacementMap=I.displacementMap,S.displacementScale=I.displacementScale,S.displacementBias=I.displacementBias,S.wireframeLinewidth=I.wireframeLinewidth,S.linewidth=I.linewidth,O.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let tt=n.properties.get(S);tt.light=O}return S}function E(D,I,O,A,S){if(D.visible===!1)return;if(D.layers.test(I.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&S===Ci)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,D.matrixWorld);let F=t.update(D),G=D.material;if(Array.isArray(G)){let Z=F.groups;for(let q=0,mt=Z.length;q<mt;q++){let j=Z[q],vt=G[j.materialIndex];if(vt&&vt.visible){let ht=b(D,vt,A,S);D.onBeforeShadow(n,D,I,O,F,ht,j),n.renderBufferDirect(O,null,F,ht,D,j),D.onAfterShadow(n,D,I,O,F,ht,j)}}}else if(G.visible){let Z=b(D,G,A,S);D.onBeforeShadow(n,D,I,O,F,Z,null),n.renderBufferDirect(O,null,F,Z,D,null),D.onAfterShadow(n,D,I,O,F,Z,null)}}let tt=D.children;for(let F=0,G=tt.length;F<G;F++)E(tt[F],I,O,A,S)}function V(D){D.target.removeEventListener("dispose",V);for(let O in l){let A=l[O],S=D.target.uuid;S in A&&(A[S].dispose(),delete A[S])}}}var I_={[Zc]:Kc,[Jc]:Qc,[$c]:tl,[pr]:jc,[Kc]:Zc,[Qc]:Jc,[tl]:$c,[jc]:pr};function L_(n,t){function e(){let Y=!1,Dt=new Ue,st=null,gt=new Ue(0,0,0,0);return{setMask:function(Bt){st!==Bt&&!Y&&(n.colorMask(Bt,Bt,Bt,Bt),st=Bt)},setLocked:function(Bt){Y=Bt},setClear:function(Bt,Nt,fe,Te,rn){rn===!0&&(Bt*=Te,Nt*=Te,fe*=Te),Dt.set(Bt,Nt,fe,Te),gt.equals(Dt)===!1&&(n.clearColor(Bt,Nt,fe,Te),gt.copy(Dt))},reset:function(){Y=!1,st=null,gt.set(-1,0,0,0)}}}function i(){let Y=!1,Dt=!1,st=null,gt=null,Bt=null;return{setReversed:function(Nt){if(Dt!==Nt){let fe=t.get("EXT_clip_control");Dt?fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.ZERO_TO_ONE_EXT):fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.NEGATIVE_ONE_TO_ONE_EXT);let Te=Bt;Bt=null,this.setClear(Te)}Dt=Nt},getReversed:function(){return Dt},setTest:function(Nt){Nt?_t(n.DEPTH_TEST):$t(n.DEPTH_TEST)},setMask:function(Nt){st!==Nt&&!Y&&(n.depthMask(Nt),st=Nt)},setFunc:function(Nt){if(Dt&&(Nt=I_[Nt]),gt!==Nt){switch(Nt){case Zc:n.depthFunc(n.NEVER);break;case Kc:n.depthFunc(n.ALWAYS);break;case Jc:n.depthFunc(n.LESS);break;case pr:n.depthFunc(n.LEQUAL);break;case $c:n.depthFunc(n.EQUAL);break;case jc:n.depthFunc(n.GEQUAL);break;case Qc:n.depthFunc(n.GREATER);break;case tl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}gt=Nt}},setLocked:function(Nt){Y=Nt},setClear:function(Nt){Bt!==Nt&&(Dt&&(Nt=1-Nt),n.clearDepth(Nt),Bt=Nt)},reset:function(){Y=!1,st=null,gt=null,Bt=null,Dt=!1}}}function s(){let Y=!1,Dt=null,st=null,gt=null,Bt=null,Nt=null,fe=null,Te=null,rn=null;return{setTest:function(Ae){Y||(Ae?_t(n.STENCIL_TEST):$t(n.STENCIL_TEST))},setMask:function(Ae){Dt!==Ae&&!Y&&(n.stencilMask(Ae),Dt=Ae)},setFunc:function(Ae,dn,kn){(st!==Ae||gt!==dn||Bt!==kn)&&(n.stencilFunc(Ae,dn,kn),st=Ae,gt=dn,Bt=kn)},setOp:function(Ae,dn,kn){(Nt!==Ae||fe!==dn||Te!==kn)&&(n.stencilOp(Ae,dn,kn),Nt=Ae,fe=dn,Te=kn)},setLocked:function(Ae){Y=Ae},setClear:function(Ae){rn!==Ae&&(n.clearStencil(Ae),rn=Ae)},reset:function(){Y=!1,Dt=null,st=null,gt=null,Bt=null,Nt=null,fe=null,Te=null,rn=null}}}let r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,y=!1,x=null,m=null,T=null,b=null,E=null,V=null,D=null,I=new re(0,0,0),O=0,A=!1,S=null,B=null,tt=null,F=null,G=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,mt=0,j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(mt=parseFloat(/^WebGL (\d)/.exec(j)[1]),q=mt>=1):j.indexOf("OpenGL ES")!==-1&&(mt=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),q=mt>=2);let vt=null,ht={},Wt=n.getParameter(n.SCISSOR_BOX),ce=n.getParameter(n.VIEWPORT),Ee=new Ue().fromArray(Wt),lt=new Ue().fromArray(ce);function St(Y,Dt,st,gt){let Bt=new Uint8Array(4),Nt=n.createTexture();n.bindTexture(Y,Nt),n.texParameteri(Y,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(Y,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let fe=0;fe<st;fe++)Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?n.texImage3D(Dt,0,n.RGBA,1,1,gt,0,n.RGBA,n.UNSIGNED_BYTE,Bt):n.texImage2D(Dt+fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Bt);return Nt}let Zt={};Zt[n.TEXTURE_2D]=St(n.TEXTURE_2D,n.TEXTURE_2D,1),Zt[n.TEXTURE_CUBE_MAP]=St(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Zt[n.TEXTURE_2D_ARRAY]=St(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Zt[n.TEXTURE_3D]=St(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),_t(n.DEPTH_TEST),o.setFunc(pr),bt(!1),Ot(du),_t(n.CULL_FACE),N(Ji);function _t(Y){h[Y]!==!0&&(n.enable(Y),h[Y]=!0)}function $t(Y){h[Y]!==!1&&(n.disable(Y),h[Y]=!1)}function ae(Y,Dt){return u[Y]!==Dt?(n.bindFramebuffer(Y,Dt),u[Y]=Dt,Y===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Dt),Y===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Dt),!0):!1}function Xt(Y,Dt){let st=d,gt=!1;if(Y){st=f.get(Dt),st===void 0&&(st=[],f.set(Dt,st));let Bt=Y.textures;if(st.length!==Bt.length||st[0]!==n.COLOR_ATTACHMENT0){for(let Nt=0,fe=Bt.length;Nt<fe;Nt++)st[Nt]=n.COLOR_ATTACHMENT0+Nt;st.length=Bt.length,gt=!0}}else st[0]!==n.BACK&&(st[0]=n.BACK,gt=!0);gt&&n.drawBuffers(st)}function le(Y){return g!==Y?(n.useProgram(Y),g=Y,!0):!1}let dt={[gs]:n.FUNC_ADD,[Yd]:n.FUNC_SUBTRACT,[qd]:n.FUNC_REVERSE_SUBTRACT};dt[Zd]=n.MIN,dt[Kd]=n.MAX;let wt={[Jd]:n.ZERO,[$d]:n.ONE,[jd]:n.SRC_COLOR,[Yc]:n.SRC_ALPHA,[sp]:n.SRC_ALPHA_SATURATE,[np]:n.DST_COLOR,[tp]:n.DST_ALPHA,[Qd]:n.ONE_MINUS_SRC_COLOR,[qc]:n.ONE_MINUS_SRC_ALPHA,[ip]:n.ONE_MINUS_DST_COLOR,[ep]:n.ONE_MINUS_DST_ALPHA,[rp]:n.CONSTANT_COLOR,[op]:n.ONE_MINUS_CONSTANT_COLOR,[ap]:n.CONSTANT_ALPHA,[cp]:n.ONE_MINUS_CONSTANT_ALPHA};function N(Y,Dt,st,gt,Bt,Nt,fe,Te,rn,Ae){if(Y===Ji){y===!0&&($t(n.BLEND),y=!1);return}if(y===!1&&(_t(n.BLEND),y=!0),Y!==Xd){if(Y!==x||Ae!==A){if((m!==gs||E!==gs)&&(n.blendEquation(n.FUNC_ADD),m=gs,E=gs),Ae)switch(Y){case hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pu:n.blendFunc(n.ONE,n.ONE);break;case mu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case mu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}T=null,b=null,V=null,D=null,I.set(0,0,0),O=0,x=Y,A=Ae}return}Bt=Bt||Dt,Nt=Nt||st,fe=fe||gt,(Dt!==m||Bt!==E)&&(n.blendEquationSeparate(dt[Dt],dt[Bt]),m=Dt,E=Bt),(st!==T||gt!==b||Nt!==V||fe!==D)&&(n.blendFuncSeparate(wt[st],wt[gt],wt[Nt],wt[fe]),T=st,b=gt,V=Nt,D=fe),(Te.equals(I)===!1||rn!==O)&&(n.blendColor(Te.r,Te.g,Te.b,rn),I.copy(Te),O=rn),x=Y,A=!1}function Gt(Y,Dt){Y.side===xn?$t(n.CULL_FACE):_t(n.CULL_FACE);let st=Y.side===_n;Dt&&(st=!st),bt(st),Y.blending===hr&&Y.transparent===!1?N(Ji):N(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),r.setMask(Y.colorWrite);let gt=Y.stencilWrite;a.setTest(gt),gt&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),te(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?_t(n.SAMPLE_ALPHA_TO_COVERAGE):$t(n.SAMPLE_ALPHA_TO_COVERAGE)}function bt(Y){S!==Y&&(Y?n.frontFace(n.CW):n.frontFace(n.CCW),S=Y)}function Ot(Y){Y!==Gd?(_t(n.CULL_FACE),Y!==B&&(Y===du?n.cullFace(n.BACK):Y===Wd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):$t(n.CULL_FACE),B=Y}function Pt(Y){Y!==tt&&(q&&n.lineWidth(Y),tt=Y)}function te(Y,Dt,st){Y?(_t(n.POLYGON_OFFSET_FILL),(F!==Dt||G!==st)&&(n.polygonOffset(Dt,st),F=Dt,G=st)):$t(n.POLYGON_OFFSET_FILL)}function Ht(Y){Y?_t(n.SCISSOR_TEST):$t(n.SCISSOR_TEST)}function P(Y){Y===void 0&&(Y=n.TEXTURE0+Z-1),vt!==Y&&(n.activeTexture(Y),vt=Y)}function w(Y,Dt,st){st===void 0&&(vt===null?st=n.TEXTURE0+Z-1:st=vt);let gt=ht[st];gt===void 0&&(gt={type:void 0,texture:void 0},ht[st]=gt),(gt.type!==Y||gt.texture!==Dt)&&(vt!==st&&(n.activeTexture(st),vt=st),n.bindTexture(Y,Dt||Zt[Y]),gt.type=Y,gt.texture=Dt)}function Q(){let Y=ht[vt];Y!==void 0&&Y.type!==void 0&&(n.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function W(){try{n.compressedTexImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function X(){try{n.texSubImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function xt(){try{n.texSubImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ft(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function yt(){try{n.texStorage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function et(){try{n.texStorage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function It(){try{n.texImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Rt(){try{n.texImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Et(Y){Ee.equals(Y)===!1&&(n.scissor(Y.x,Y.y,Y.z,Y.w),Ee.copy(Y))}function Ut(Y){lt.equals(Y)===!1&&(n.viewport(Y.x,Y.y,Y.z,Y.w),lt.copy(Y))}function Yt(Y,Dt){let st=l.get(Dt);st===void 0&&(st=new WeakMap,l.set(Dt,st));let gt=st.get(Y);gt===void 0&&(gt=n.getUniformBlockIndex(Dt,Y.name),st.set(Y,gt))}function qt(Y,Dt){let gt=l.get(Dt).get(Y);c.get(Dt)!==gt&&(n.uniformBlockBinding(Dt,gt,Y.__bindingPointIndex),c.set(Dt,gt))}function ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},vt=null,ht={},u={},f=new WeakMap,d=[],g=null,y=!1,x=null,m=null,T=null,b=null,E=null,V=null,D=null,I=new re(0,0,0),O=0,A=!1,S=null,B=null,tt=null,F=null,G=null,Ee.set(0,0,n.canvas.width,n.canvas.height),lt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:_t,disable:$t,bindFramebuffer:ae,drawBuffers:Xt,useProgram:le,setBlending:N,setMaterial:Gt,setFlipSided:bt,setCullFace:Ot,setLineWidth:Pt,setPolygonOffset:te,setScissorTest:Ht,activeTexture:P,bindTexture:w,unbindTexture:Q,compressedTexImage2D:W,compressedTexImage3D:J,texImage2D:It,texImage3D:Rt,updateUBOMapping:Yt,uniformBlockBinding:qt,texStorage2D:yt,texStorage3D:et,texSubImage2D:X,texSubImage3D:xt,compressedTexSubImage2D:ft,compressedTexSubImage3D:pt,scissor:Et,viewport:Ut,reset:ve}}function df(n,t,e,i){let s=D_(i);switch(e){case Uf:return n*t;case Of:return n*t;case Ff:return n*t*2;case Bf:return n*t/s.components*s.byteLength;case Eh:return n*t/s.components*s.byteLength;case zf:return n*t*2/s.components*s.byteLength;case bh:return n*t*2/s.components*s.byteLength;case Nf:return n*t*3/s.components*s.byteLength;case ni:return n*t*4/s.components*s.byteLength;case Sh:return n*t*4/s.components*s.byteLength;case fa:case da:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case pa:case ma:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case rl:case al:return Math.max(n,16)*Math.max(t,8)/4;case sl:case ol:return Math.max(n,8)*Math.max(t,8)/2;case cl:case ll:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case hl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ul:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case dl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case pl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ml:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case gl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case xl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case _l:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case yl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case vl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case El:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case bl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Sl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ga:case wl:case Tl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Hf:case Al:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Rl:case Cl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function D_(n){switch(n){case Di:case If:return{byteLength:1,components:1};case io:case Lf:case Ao:return{byteLength:2,components:1};case Mh:case vh:return{byteLength:2,components:4};case Ms:case yh:case Pi:return{byteLength:4,components:1};case Df:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function U_(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Mt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,w){return d?new OffscreenCanvas(P,w):ro("canvas")}function y(P,w,Q){let W=1,J=Ht(P);if((J.width>Q||J.height>Q)&&(W=Q/Math.max(J.width,J.height)),W<1)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap||typeof VideoFrame!="undefined"&&P instanceof VideoFrame){let X=Math.floor(W*J.width),xt=Math.floor(W*J.height);u===void 0&&(u=g(X,xt));let ft=w?g(X,xt):u;return ft.width=X,ft.height=xt,ft.getContext("2d").drawImage(P,0,0,X,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+xt+")."),ft}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),P;return P}function x(P){return P.generateMipmaps}function m(P){n.generateMipmap(P)}function T(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(P,w,Q,W,J=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let X=w;if(w===n.RED&&(Q===n.FLOAT&&(X=n.R32F),Q===n.HALF_FLOAT&&(X=n.R16F),Q===n.UNSIGNED_BYTE&&(X=n.R8)),w===n.RED_INTEGER&&(Q===n.UNSIGNED_BYTE&&(X=n.R8UI),Q===n.UNSIGNED_SHORT&&(X=n.R16UI),Q===n.UNSIGNED_INT&&(X=n.R32UI),Q===n.BYTE&&(X=n.R8I),Q===n.SHORT&&(X=n.R16I),Q===n.INT&&(X=n.R32I)),w===n.RG&&(Q===n.FLOAT&&(X=n.RG32F),Q===n.HALF_FLOAT&&(X=n.RG16F),Q===n.UNSIGNED_BYTE&&(X=n.RG8)),w===n.RG_INTEGER&&(Q===n.UNSIGNED_BYTE&&(X=n.RG8UI),Q===n.UNSIGNED_SHORT&&(X=n.RG16UI),Q===n.UNSIGNED_INT&&(X=n.RG32UI),Q===n.BYTE&&(X=n.RG8I),Q===n.SHORT&&(X=n.RG16I),Q===n.INT&&(X=n.RG32I)),w===n.RGB_INTEGER&&(Q===n.UNSIGNED_BYTE&&(X=n.RGB8UI),Q===n.UNSIGNED_SHORT&&(X=n.RGB16UI),Q===n.UNSIGNED_INT&&(X=n.RGB32UI),Q===n.BYTE&&(X=n.RGB8I),Q===n.SHORT&&(X=n.RGB16I),Q===n.INT&&(X=n.RGB32I)),w===n.RGBA_INTEGER&&(Q===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),Q===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),Q===n.UNSIGNED_INT&&(X=n.RGBA32UI),Q===n.BYTE&&(X=n.RGBA8I),Q===n.SHORT&&(X=n.RGBA16I),Q===n.INT&&(X=n.RGBA32I)),w===n.RGB&&Q===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),w===n.RGBA){let xt=J?Ga:be.getTransfer(W);Q===n.FLOAT&&(X=n.RGBA32F),Q===n.HALF_FLOAT&&(X=n.RGBA16F),Q===n.UNSIGNED_BYTE&&(X=xt===De?n.SRGB8_ALPHA8:n.RGBA8),Q===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),Q===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function E(P,w){let Q;return P?w===null||w===Ms||w===xr?Q=n.DEPTH24_STENCIL8:w===Pi?Q=n.DEPTH32F_STENCIL8:w===io&&(Q=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ms||w===xr?Q=n.DEPTH_COMPONENT24:w===Pi?Q=n.DEPTH_COMPONENT32F:w===io&&(Q=n.DEPTH_COMPONENT16),Q}function V(P,w){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==$e&&P.minFilter!==pi?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function D(P){let w=P.target;w.removeEventListener("dispose",D),O(w),w.isVideoTexture&&h.delete(w)}function I(P){let w=P.target;w.removeEventListener("dispose",I),S(w)}function O(P){let w=i.get(P);if(w.__webglInit===void 0)return;let Q=P.source,W=f.get(Q);if(W){let J=W[w.__cacheKey];J.usedTimes--,J.usedTimes===0&&A(P),Object.keys(W).length===0&&f.delete(Q)}i.remove(P)}function A(P){let w=i.get(P);n.deleteTexture(w.__webglTexture);let Q=P.source,W=f.get(Q);delete W[w.__cacheKey],o.memory.textures--}function S(P){let w=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(w.__webglFramebuffer[W]))for(let J=0;J<w.__webglFramebuffer[W].length;J++)n.deleteFramebuffer(w.__webglFramebuffer[W][J]);else n.deleteFramebuffer(w.__webglFramebuffer[W]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[W])}else{if(Array.isArray(w.__webglFramebuffer))for(let W=0;W<w.__webglFramebuffer.length;W++)n.deleteFramebuffer(w.__webglFramebuffer[W]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let W=0;W<w.__webglColorRenderbuffer.length;W++)w.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[W]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let Q=P.textures;for(let W=0,J=Q.length;W<J;W++){let X=i.get(Q[W]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(Q[W])}i.remove(P)}let B=0;function tt(){B=0}function F(){let P=B;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),B+=1,P}function G(P){let w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function Z(P,w){let Q=i.get(P);if(P.isVideoTexture&&Pt(P),P.isRenderTargetTexture===!1&&P.version>0&&Q.__version!==P.version){let W=P.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(Q,P,w);return}}e.bindTexture(n.TEXTURE_2D,Q.__webglTexture,n.TEXTURE0+w)}function q(P,w){let Q=i.get(P);if(P.version>0&&Q.__version!==P.version){lt(Q,P,w);return}e.bindTexture(n.TEXTURE_2D_ARRAY,Q.__webglTexture,n.TEXTURE0+w)}function mt(P,w){let Q=i.get(P);if(P.version>0&&Q.__version!==P.version){lt(Q,P,w);return}e.bindTexture(n.TEXTURE_3D,Q.__webglTexture,n.TEXTURE0+w)}function j(P,w){let Q=i.get(P);if(P.version>0&&Q.__version!==P.version){St(Q,P,w);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture,n.TEXTURE0+w)}let vt={[no]:n.REPEAT,[_s]:n.CLAMP_TO_EDGE,[il]:n.MIRRORED_REPEAT},ht={[$e]:n.NEAREST,[_p]:n.NEAREST_MIPMAP_NEAREST,[Oo]:n.NEAREST_MIPMAP_LINEAR,[pi]:n.LINEAR,[fc]:n.LINEAR_MIPMAP_NEAREST,[ys]:n.LINEAR_MIPMAP_LINEAR},Wt={[Ep]:n.NEVER,[Rp]:n.ALWAYS,[bp]:n.LESS,[Vf]:n.LEQUAL,[Sp]:n.EQUAL,[Ap]:n.GEQUAL,[wp]:n.GREATER,[Tp]:n.NOTEQUAL};function ce(P,w){if(w.type===Pi&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===pi||w.magFilter===fc||w.magFilter===Oo||w.magFilter===ys||w.minFilter===pi||w.minFilter===fc||w.minFilter===Oo||w.minFilter===ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,vt[w.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,vt[w.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,vt[w.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,ht[w.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,ht[w.minFilter]),w.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Wt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===$e||w.minFilter!==Oo&&w.minFilter!==ys||w.type===Pi&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let Q=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Ee(P,w){let Q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",D));let W=w.source,J=f.get(W);J===void 0&&(J={},f.set(W,J));let X=G(w);if(X!==P.__cacheKey){J[X]===void 0&&(J[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),J[X].usedTimes++;let xt=J[P.__cacheKey];xt!==void 0&&(J[P.__cacheKey].usedTimes--,xt.usedTimes===0&&A(w)),P.__cacheKey=X,P.__webglTexture=J[X].texture}return Q}function lt(P,w,Q){let W=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(W=n.TEXTURE_3D);let J=Ee(P,w),X=w.source;e.bindTexture(W,P.__webglTexture,n.TEXTURE0+Q);let xt=i.get(X);if(X.version!==xt.__version||J===!0){e.activeTexture(n.TEXTURE0+Q);let ft=be.getPrimaries(be.workingColorSpace),pt=w.colorSpace===Zi?null:be.getPrimaries(w.colorSpace),yt=w.colorSpace===Zi||ft===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let et=y(w.image,!1,s.maxTextureSize);et=te(w,et);let It=r.convert(w.format,w.colorSpace),Rt=r.convert(w.type),Et=b(w.internalFormat,It,Rt,w.colorSpace,w.isVideoTexture);ce(W,w);let Ut,Yt=w.mipmaps,qt=w.isVideoTexture!==!0,ve=xt.__version===void 0||J===!0,Y=X.dataReady,Dt=V(w,et);if(w.isDepthTexture)Et=E(w.format===_r,w.type),ve&&(qt?e.texStorage2D(n.TEXTURE_2D,1,Et,et.width,et.height):e.texImage2D(n.TEXTURE_2D,0,Et,et.width,et.height,0,It,Rt,null));else if(w.isDataTexture)if(Yt.length>0){qt&&ve&&e.texStorage2D(n.TEXTURE_2D,Dt,Et,Yt[0].width,Yt[0].height);for(let st=0,gt=Yt.length;st<gt;st++)Ut=Yt[st],qt?Y&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,Ut.width,Ut.height,It,Rt,Ut.data):e.texImage2D(n.TEXTURE_2D,st,Et,Ut.width,Ut.height,0,It,Rt,Ut.data);w.generateMipmaps=!1}else qt?(ve&&e.texStorage2D(n.TEXTURE_2D,Dt,Et,et.width,et.height),Y&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,et.width,et.height,It,Rt,et.data)):e.texImage2D(n.TEXTURE_2D,0,Et,et.width,et.height,0,It,Rt,et.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){qt&&ve&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Dt,Et,Yt[0].width,Yt[0].height,et.depth);for(let st=0,gt=Yt.length;st<gt;st++)if(Ut=Yt[st],w.format!==ni)if(It!==null)if(qt){if(Y)if(w.layerUpdates.size>0){let Bt=df(Ut.width,Ut.height,w.format,w.type);for(let Nt of w.layerUpdates){let fe=Ut.data.subarray(Nt*Bt/Ut.data.BYTES_PER_ELEMENT,(Nt+1)*Bt/Ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,Nt,Ut.width,Ut.height,1,It,fe)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,Ut.width,Ut.height,et.depth,It,Ut.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,st,Et,Ut.width,Ut.height,et.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?Y&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,Ut.width,Ut.height,et.depth,It,Rt,Ut.data):e.texImage3D(n.TEXTURE_2D_ARRAY,st,Et,Ut.width,Ut.height,et.depth,0,It,Rt,Ut.data)}else{qt&&ve&&e.texStorage2D(n.TEXTURE_2D,Dt,Et,Yt[0].width,Yt[0].height);for(let st=0,gt=Yt.length;st<gt;st++)Ut=Yt[st],w.format!==ni?It!==null?qt?Y&&e.compressedTexSubImage2D(n.TEXTURE_2D,st,0,0,Ut.width,Ut.height,It,Ut.data):e.compressedTexImage2D(n.TEXTURE_2D,st,Et,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?Y&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,Ut.width,Ut.height,It,Rt,Ut.data):e.texImage2D(n.TEXTURE_2D,st,Et,Ut.width,Ut.height,0,It,Rt,Ut.data)}else if(w.isDataArrayTexture)if(qt){if(ve&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Dt,Et,et.width,et.height,et.depth),Y)if(w.layerUpdates.size>0){let st=df(et.width,et.height,w.format,w.type);for(let gt of w.layerUpdates){let Bt=et.data.subarray(gt*st/et.data.BYTES_PER_ELEMENT,(gt+1)*st/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,gt,et.width,et.height,1,It,Rt,Bt)}w.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,It,Rt,et.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Et,et.width,et.height,et.depth,0,It,Rt,et.data);else if(w.isData3DTexture)qt?(ve&&e.texStorage3D(n.TEXTURE_3D,Dt,Et,et.width,et.height,et.depth),Y&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,It,Rt,et.data)):e.texImage3D(n.TEXTURE_3D,0,Et,et.width,et.height,et.depth,0,It,Rt,et.data);else if(w.isFramebufferTexture){if(ve)if(qt)e.texStorage2D(n.TEXTURE_2D,Dt,Et,et.width,et.height);else{let st=et.width,gt=et.height;for(let Bt=0;Bt<Dt;Bt++)e.texImage2D(n.TEXTURE_2D,Bt,Et,st,gt,0,It,Rt,null),st>>=1,gt>>=1}}else if(Yt.length>0){if(qt&&ve){let st=Ht(Yt[0]);e.texStorage2D(n.TEXTURE_2D,Dt,Et,st.width,st.height)}for(let st=0,gt=Yt.length;st<gt;st++)Ut=Yt[st],qt?Y&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,It,Rt,Ut):e.texImage2D(n.TEXTURE_2D,st,Et,It,Rt,Ut);w.generateMipmaps=!1}else if(qt){if(ve){let st=Ht(et);e.texStorage2D(n.TEXTURE_2D,Dt,Et,st.width,st.height)}Y&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,It,Rt,et)}else e.texImage2D(n.TEXTURE_2D,0,Et,It,Rt,et);x(w)&&m(W),xt.__version=X.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function St(P,w,Q){if(w.image.length!==6)return;let W=Ee(P,w),J=w.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+Q);let X=i.get(J);if(J.version!==X.__version||W===!0){e.activeTexture(n.TEXTURE0+Q);let xt=be.getPrimaries(be.workingColorSpace),ft=w.colorSpace===Zi?null:be.getPrimaries(w.colorSpace),pt=w.colorSpace===Zi||xt===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let yt=w.isCompressedTexture||w.image[0].isCompressedTexture,et=w.image[0]&&w.image[0].isDataTexture,It=[];for(let gt=0;gt<6;gt++)!yt&&!et?It[gt]=y(w.image[gt],!0,s.maxCubemapSize):It[gt]=et?w.image[gt].image:w.image[gt],It[gt]=te(w,It[gt]);let Rt=It[0],Et=r.convert(w.format,w.colorSpace),Ut=r.convert(w.type),Yt=b(w.internalFormat,Et,Ut,w.colorSpace),qt=w.isVideoTexture!==!0,ve=X.__version===void 0||W===!0,Y=J.dataReady,Dt=V(w,Rt);ce(n.TEXTURE_CUBE_MAP,w);let st;if(yt){qt&&ve&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Dt,Yt,Rt.width,Rt.height);for(let gt=0;gt<6;gt++){st=It[gt].mipmaps;for(let Bt=0;Bt<st.length;Bt++){let Nt=st[Bt];w.format!==ni?Et!==null?qt?Y&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt,0,0,Nt.width,Nt.height,Et,Nt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt,Yt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt,0,0,Nt.width,Nt.height,Et,Ut,Nt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt,Yt,Nt.width,Nt.height,0,Et,Ut,Nt.data)}}}else{if(st=w.mipmaps,qt&&ve){st.length>0&&Dt++;let gt=Ht(It[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Dt,Yt,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(et){qt?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,It[gt].width,It[gt].height,Et,Ut,It[gt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Yt,It[gt].width,It[gt].height,0,Et,Ut,It[gt].data);for(let Bt=0;Bt<st.length;Bt++){let fe=st[Bt].image[gt].image;qt?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt+1,0,0,fe.width,fe.height,Et,Ut,fe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt+1,Yt,fe.width,fe.height,0,Et,Ut,fe.data)}}else{qt?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Et,Ut,It[gt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Yt,Et,Ut,It[gt]);for(let Bt=0;Bt<st.length;Bt++){let Nt=st[Bt];qt?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt+1,0,0,Et,Ut,Nt.image[gt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt+1,Yt,Et,Ut,Nt.image[gt])}}}x(w)&&m(n.TEXTURE_CUBE_MAP),X.__version=J.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Zt(P,w,Q,W,J,X){let xt=r.convert(Q.format,Q.colorSpace),ft=r.convert(Q.type),pt=b(Q.internalFormat,xt,ft,Q.colorSpace),yt=i.get(w),et=i.get(Q);if(et.__renderTarget=w,!yt.__hasExternalTextures){let It=Math.max(1,w.width>>X),Rt=Math.max(1,w.height>>X);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,X,pt,It,Rt,w.depth,0,xt,ft,null):e.texImage2D(J,X,pt,It,Rt,0,xt,ft,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),Ot(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,J,et.__webglTexture,0,bt(w)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,J,et.__webglTexture,X),e.bindFramebuffer(n.FRAMEBUFFER,null)}function _t(P,w,Q){if(n.bindRenderbuffer(n.RENDERBUFFER,P),w.depthBuffer){let W=w.depthTexture,J=W&&W.isDepthTexture?W.type:null,X=E(w.stencilBuffer,J),xt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=bt(w);Ot(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ft,X,w.width,w.height):Q?n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,X,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,X,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xt,n.RENDERBUFFER,P)}else{let W=w.textures;for(let J=0;J<W.length;J++){let X=W[J],xt=r.convert(X.format,X.colorSpace),ft=r.convert(X.type),pt=b(X.internalFormat,xt,ft,X.colorSpace),yt=bt(w);Q&&Ot(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,yt,pt,w.width,w.height):Ot(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,yt,pt,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,pt,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function $t(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=i.get(w.depthTexture);W.__renderTarget=w,(!W.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Z(w.depthTexture,0);let J=W.__webglTexture,X=bt(w);if(w.depthTexture.format===ur)Ot(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(w.depthTexture.format===_r)Ot(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function ae(P){let w=i.get(P),Q=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){let W=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),W){let J=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,W.removeEventListener("dispose",J)};W.addEventListener("dispose",J),w.__depthDisposeCallback=J}w.__boundDepthTexture=W}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");$t(w.__webglFramebuffer,P)}else if(Q){w.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[W]),w.__webglDepthbuffer[W]===void 0)w.__webglDepthbuffer[W]=n.createRenderbuffer(),_t(w.__webglDepthbuffer[W],P,!1);else{let J=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=w.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,X)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),_t(w.__webglDepthbuffer,P,!1);else{let W=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,J)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Xt(P,w,Q){let W=i.get(P);w!==void 0&&Zt(W.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Q!==void 0&&ae(P)}function le(P){let w=P.texture,Q=i.get(P),W=i.get(w);P.addEventListener("dispose",I);let J=P.textures,X=P.isWebGLCubeRenderTarget===!0,xt=J.length>1;if(xt||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=w.version,o.memory.textures++),X){Q.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer[ft]=[];for(let pt=0;pt<w.mipmaps.length;pt++)Q.__webglFramebuffer[ft][pt]=n.createFramebuffer()}else Q.__webglFramebuffer[ft]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ft=0;ft<w.mipmaps.length;ft++)Q.__webglFramebuffer[ft]=n.createFramebuffer()}else Q.__webglFramebuffer=n.createFramebuffer();if(xt)for(let ft=0,pt=J.length;ft<pt;ft++){let yt=i.get(J[ft]);yt.__webglTexture===void 0&&(yt.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&Ot(P)===!1){Q.__webglMultisampledFramebuffer=n.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ft=0;ft<J.length;ft++){let pt=J[ft];Q.__webglColorRenderbuffer[ft]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Q.__webglColorRenderbuffer[ft]);let yt=r.convert(pt.format,pt.colorSpace),et=r.convert(pt.type),It=b(pt.internalFormat,yt,et,pt.colorSpace,P.isXRRenderTarget===!0),Rt=bt(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt,It,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,Q.__webglColorRenderbuffer[ft])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(Q.__webglDepthRenderbuffer=n.createRenderbuffer(),_t(Q.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),ce(n.TEXTURE_CUBE_MAP,w);for(let ft=0;ft<6;ft++)if(w.mipmaps&&w.mipmaps.length>0)for(let pt=0;pt<w.mipmaps.length;pt++)Zt(Q.__webglFramebuffer[ft][pt],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,pt);else Zt(Q.__webglFramebuffer[ft],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);x(w)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let ft=0,pt=J.length;ft<pt;ft++){let yt=J[ft],et=i.get(yt);e.bindTexture(n.TEXTURE_2D,et.__webglTexture),ce(n.TEXTURE_2D,yt),Zt(Q.__webglFramebuffer,P,yt,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,0),x(yt)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let ft=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ft=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ft,W.__webglTexture),ce(ft,w),w.mipmaps&&w.mipmaps.length>0)for(let pt=0;pt<w.mipmaps.length;pt++)Zt(Q.__webglFramebuffer[pt],P,w,n.COLOR_ATTACHMENT0,ft,pt);else Zt(Q.__webglFramebuffer,P,w,n.COLOR_ATTACHMENT0,ft,0);x(w)&&m(ft),e.unbindTexture()}P.depthBuffer&&ae(P)}function dt(P){let w=P.textures;for(let Q=0,W=w.length;Q<W;Q++){let J=w[Q];if(x(J)){let X=T(P),xt=i.get(J).__webglTexture;e.bindTexture(X,xt),m(X),e.unbindTexture()}}}let wt=[],N=[];function Gt(P){if(P.samples>0){if(Ot(P)===!1){let w=P.textures,Q=P.width,W=P.height,J=n.COLOR_BUFFER_BIT,X=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=i.get(P),ft=w.length>1;if(ft)for(let pt=0;pt<w.length;pt++)e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let pt=0;pt<w.length;pt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ft){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xt.__webglColorRenderbuffer[pt]);let yt=i.get(w[pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,yt,0)}n.blitFramebuffer(0,0,Q,W,0,0,Q,W,J,n.NEAREST),c===!0&&(wt.length=0,N.length=0,wt.push(n.COLOR_ATTACHMENT0+pt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(wt.push(X),N.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,wt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ft)for(let pt=0;pt<w.length;pt++){e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,xt.__webglColorRenderbuffer[pt]);let yt=i.get(w[pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,yt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let w=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function bt(P){return Math.min(s.maxSamples,P.samples)}function Ot(P){let w=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Pt(P){let w=o.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function te(P,w){let Q=P.colorSpace,W=P.format,J=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Q!==br&&Q!==Zi&&(be.getTransfer(Q)===De?(W!==ni||J!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),w}function Ht(P){return typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame!="undefined"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=tt,this.setTexture2D=Z,this.setTexture2DArray=q,this.setTexture3D=mt,this.setTextureCube=j,this.rebindTextures=Xt,this.setupRenderTarget=le,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=Zt,this.useMultisampledRTT=Ot}function N_(n,t){function e(i,s=Zi){let r,o=be.getTransfer(s);if(i===Di)return n.UNSIGNED_BYTE;if(i===Mh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===vh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Df)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===If)return n.BYTE;if(i===Lf)return n.SHORT;if(i===io)return n.UNSIGNED_SHORT;if(i===yh)return n.INT;if(i===Ms)return n.UNSIGNED_INT;if(i===Pi)return n.FLOAT;if(i===Ao)return n.HALF_FLOAT;if(i===Uf)return n.ALPHA;if(i===Nf)return n.RGB;if(i===ni)return n.RGBA;if(i===Of)return n.LUMINANCE;if(i===Ff)return n.LUMINANCE_ALPHA;if(i===ur)return n.DEPTH_COMPONENT;if(i===_r)return n.DEPTH_STENCIL;if(i===Bf)return n.RED;if(i===Eh)return n.RED_INTEGER;if(i===zf)return n.RG;if(i===bh)return n.RG_INTEGER;if(i===Sh)return n.RGBA_INTEGER;if(i===fa||i===da||i===pa||i===ma)if(o===De)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===fa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===fa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sl||i===rl||i===ol||i===al)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cl||i===ll||i===hl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===cl||i===ll)return o===De?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===hl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ul||i===fl||i===dl||i===pl||i===ml||i===gl||i===xl||i===_l||i===yl||i===Ml||i===vl||i===El||i===bl||i===Sl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ul)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ml)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_l)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ml)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===El)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ga||i===wl||i===Tl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ga)return o===De?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hf||i===Al||i===Rl||i===Cl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ga)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Al)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Rl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Xl=class extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Jt=class extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},O_={type:"move"},jr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let x=e.getJointPose(y,i),m=this._getHandJoint(l,y);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(O_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Jt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},F_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B_=`
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

}`,Yl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new yn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Xn({vertexShader:F_,fragmentShader:B_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new At(new Qi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ql=class extends Ui{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,y=new Yl,x=e.getContextAttributes(),m=null,T=null,b=[],E=[],V=new Mt,D=null,I=new cn;I.viewport=new Ue;let O=new cn;O.viewport=new Ue;let A=[I,O],S=new Xl,B=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(lt){let St=b[lt];return St===void 0&&(St=new jr,b[lt]=St),St.getTargetRaySpace()},this.getControllerGrip=function(lt){let St=b[lt];return St===void 0&&(St=new jr,b[lt]=St),St.getGripSpace()},this.getHand=function(lt){let St=b[lt];return St===void 0&&(St=new jr,b[lt]=St),St.getHandSpace()};function F(lt){let St=E.indexOf(lt.inputSource);if(St===-1)return;let Zt=b[St];Zt!==void 0&&(Zt.update(lt.inputSource,lt.frame,l||o),Zt.dispatchEvent({type:lt.type,data:lt.inputSource}))}function G(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Z);for(let lt=0;lt<b.length;lt++){let St=E[lt];St!==null&&(E[lt]=null,b[lt].disconnect(St))}B=null,tt=null,y.reset(),t.setRenderTarget(m),d=null,f=null,u=null,s=null,T=null,Ee.stop(),i.isPresenting=!1,t.setPixelRatio(D),t.setSize(V.width,V.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(lt){r=lt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(lt){a=lt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(lt){l=lt},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(lt){if(s=lt,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Z),x.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(V),s.renderState.layers===void 0){let St={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,St),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new Ni(d.framebufferWidth,d.framebufferHeight,{format:ni,type:Di,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let St=null,Zt=null,_t=null;x.depth&&(_t=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=x.stencil?_r:ur,Zt=x.stencil?xr:Ms);let $t={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer($t),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),T=new Ni(f.textureWidth,f.textureHeight,{format:ni,type:Di,depthTexture:new Aa(f.textureWidth,f.textureHeight,Zt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ee.setContext(s),Ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z(lt){for(let St=0;St<lt.removed.length;St++){let Zt=lt.removed[St],_t=E.indexOf(Zt);_t>=0&&(E[_t]=null,b[_t].disconnect(Zt))}for(let St=0;St<lt.added.length;St++){let Zt=lt.added[St],_t=E.indexOf(Zt);if(_t===-1){for(let ae=0;ae<b.length;ae++)if(ae>=E.length){E.push(Zt),_t=ae;break}else if(E[ae]===null){E[ae]=Zt,_t=ae;break}if(_t===-1)break}let $t=b[_t];$t&&$t.connect(Zt)}}let q=new U,mt=new U;function j(lt,St,Zt){q.setFromMatrixPosition(St.matrixWorld),mt.setFromMatrixPosition(Zt.matrixWorld);let _t=q.distanceTo(mt),$t=St.projectionMatrix.elements,ae=Zt.projectionMatrix.elements,Xt=$t[14]/($t[10]-1),le=$t[14]/($t[10]+1),dt=($t[9]+1)/$t[5],wt=($t[9]-1)/$t[5],N=($t[8]-1)/$t[0],Gt=(ae[8]+1)/ae[0],bt=Xt*N,Ot=Xt*Gt,Pt=_t/(-N+Gt),te=Pt*-N;if(St.matrixWorld.decompose(lt.position,lt.quaternion,lt.scale),lt.translateX(te),lt.translateZ(Pt),lt.matrixWorld.compose(lt.position,lt.quaternion,lt.scale),lt.matrixWorldInverse.copy(lt.matrixWorld).invert(),$t[10]===-1)lt.projectionMatrix.copy(St.projectionMatrix),lt.projectionMatrixInverse.copy(St.projectionMatrixInverse);else{let Ht=Xt+Pt,P=le+Pt,w=bt-te,Q=Ot+(_t-te),W=dt*le/P*Ht,J=wt*le/P*Ht;lt.projectionMatrix.makePerspective(w,Q,W,J,Ht,P),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert()}}function vt(lt,St){St===null?lt.matrixWorld.copy(lt.matrix):lt.matrixWorld.multiplyMatrices(St.matrixWorld,lt.matrix),lt.matrixWorldInverse.copy(lt.matrixWorld).invert()}this.updateCamera=function(lt){if(s===null)return;let St=lt.near,Zt=lt.far;y.texture!==null&&(y.depthNear>0&&(St=y.depthNear),y.depthFar>0&&(Zt=y.depthFar)),S.near=O.near=I.near=St,S.far=O.far=I.far=Zt,(B!==S.near||tt!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),B=S.near,tt=S.far),I.layers.mask=lt.layers.mask|2,O.layers.mask=lt.layers.mask|4,S.layers.mask=I.layers.mask|O.layers.mask;let _t=lt.parent,$t=S.cameras;vt(S,_t);for(let ae=0;ae<$t.length;ae++)vt($t[ae],_t);$t.length===2?j(S,I,O):S.projectionMatrix.copy(I.projectionMatrix),ht(lt,S,_t)};function ht(lt,St,Zt){Zt===null?lt.matrix.copy(St.matrixWorld):(lt.matrix.copy(Zt.matrixWorld),lt.matrix.invert(),lt.matrix.multiply(St.matrixWorld)),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.updateMatrixWorld(!0),lt.projectionMatrix.copy(St.projectionMatrix),lt.projectionMatrixInverse.copy(St.projectionMatrixInverse),lt.isPerspectiveCamera&&(lt.fov=so*2*Math.atan(1/lt.projectionMatrix.elements[5]),lt.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(lt){c=lt,f!==null&&(f.fixedFoveation=lt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=lt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let Wt=null;function ce(lt,St){if(h=St.getViewerPose(l||o),g=St,h!==null){let Zt=h.views;d!==null&&(t.setRenderTargetFramebuffer(T,d.framebuffer),t.setRenderTarget(T));let _t=!1;Zt.length!==S.cameras.length&&(S.cameras.length=0,_t=!0);for(let ae=0;ae<Zt.length;ae++){let Xt=Zt[ae],le=null;if(d!==null)le=d.getViewport(Xt);else{let wt=u.getViewSubImage(f,Xt);le=wt.viewport,ae===0&&(t.setRenderTargetTextures(T,wt.colorTexture,f.ignoreDepthValues?void 0:wt.depthStencilTexture),t.setRenderTarget(T))}let dt=A[ae];dt===void 0&&(dt=new cn,dt.layers.enable(ae),dt.viewport=new Ue,A[ae]=dt),dt.matrix.fromArray(Xt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(Xt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(le.x,le.y,le.width,le.height),ae===0&&(S.matrix.copy(dt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),_t===!0&&S.cameras.push(dt)}let $t=s.enabledFeatures;if($t&&$t.includes("depth-sensing")){let ae=u.getDepthInformation(Zt[0]);ae&&ae.isValid&&ae.texture&&y.init(t,ae,s.renderState)}}for(let Zt=0;Zt<b.length;Zt++){let _t=E[Zt],$t=b[Zt];_t!==null&&$t!==void 0&&$t.update(_t,St,l||o)}Wt&&Wt(lt,St),St.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:St}),g=null}let Ee=new qf;Ee.setAnimationLoop(ce),this.setAnimationLoop=function(lt){Wt=lt},this.dispose=function(){}}},ps=new gi,z_=new Be;function H_(n,t){function e(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function i(x,m){m.color.getRGB(x.fogColor.value,Yf(n)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function s(x,m,T,b,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(x,m):m.isMeshToonMaterial?(r(x,m),u(x,m)):m.isMeshPhongMaterial?(r(x,m),h(x,m)):m.isMeshStandardMaterial?(r(x,m),f(x,m),m.isMeshPhysicalMaterial&&d(x,m,E)):m.isMeshMatcapMaterial?(r(x,m),g(x,m)):m.isMeshDepthMaterial?r(x,m):m.isMeshDistanceMaterial?(r(x,m),y(x,m)):m.isMeshNormalMaterial?r(x,m):m.isLineBasicMaterial?(o(x,m),m.isLineDashedMaterial&&a(x,m)):m.isPointsMaterial?c(x,m,T,b):m.isSpriteMaterial?l(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,e(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===_n&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,e(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===_n&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,e(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,e(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);let T=t.get(m),b=T.envMap,E=T.envMapRotation;b&&(x.envMap.value=b,ps.copy(E),ps.x*=-1,ps.y*=-1,ps.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),x.envMapRotation.value.setFromMatrix4(z_.makeRotationFromEuler(ps)),x.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,x.aoMapTransform))}function o(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform))}function a(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function c(x,m,T,b){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*T,x.scale.value=b*.5,m.map&&(x.map.value=m.map,e(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function l(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function h(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function u(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function f(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function d(x,m,T){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===_n&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=T.texture,x.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,m){m.matcap&&(x.matcap.value=m.matcap)}function y(x,m){let T=t.get(m).light;x.referencePosition.value.setFromMatrixPosition(T.matrixWorld),x.nearDistance.value=T.shadow.camera.near,x.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function k_(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,b){let E=b.program;i.uniformBlockBinding(T,E)}function l(T,b){let E=s[T.id];E===void 0&&(g(T),E=h(T),s[T.id]=E,T.addEventListener("dispose",x));let V=b.program;i.updateUBOMapping(T,V);let D=t.render.frame;r[T.id]!==D&&(f(T),r[T.id]=D)}function h(T){let b=u();T.__bindingPointIndex=b;let E=n.createBuffer(),V=T.__size,D=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,V,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){let b=s[T.id],E=T.uniforms,V=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let D=0,I=E.length;D<I;D++){let O=Array.isArray(E[D])?E[D]:[E[D]];for(let A=0,S=O.length;A<S;A++){let B=O[A];if(d(B,D,A,V)===!0){let tt=B.__offset,F=Array.isArray(B.value)?B.value:[B.value],G=0;for(let Z=0;Z<F.length;Z++){let q=F[Z],mt=y(q);typeof q=="number"||typeof q=="boolean"?(B.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,tt+G,B.__data)):q.isMatrix3?(B.__data[0]=q.elements[0],B.__data[1]=q.elements[1],B.__data[2]=q.elements[2],B.__data[3]=0,B.__data[4]=q.elements[3],B.__data[5]=q.elements[4],B.__data[6]=q.elements[5],B.__data[7]=0,B.__data[8]=q.elements[6],B.__data[9]=q.elements[7],B.__data[10]=q.elements[8],B.__data[11]=0):(q.toArray(B.__data,G),G+=mt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,tt,B.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(T,b,E,V){let D=T.value,I=b+"_"+E;if(V[I]===void 0)return typeof D=="number"||typeof D=="boolean"?V[I]=D:V[I]=D.clone(),!0;{let O=V[I];if(typeof D=="number"||typeof D=="boolean"){if(O!==D)return V[I]=D,!0}else if(O.equals(D)===!1)return O.copy(D),!0}return!1}function g(T){let b=T.uniforms,E=0,V=16;for(let I=0,O=b.length;I<O;I++){let A=Array.isArray(b[I])?b[I]:[b[I]];for(let S=0,B=A.length;S<B;S++){let tt=A[S],F=Array.isArray(tt.value)?tt.value:[tt.value];for(let G=0,Z=F.length;G<Z;G++){let q=F[G],mt=y(q),j=E%V,vt=j%mt.boundary,ht=j+vt;E+=vt,ht!==0&&V-ht<mt.storage&&(E+=V-ht),tt.__data=new Float32Array(mt.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=E,E+=mt.storage}}}let D=E%V;return D>0&&(E+=V-D),T.__size=E,T.__cache={},this}function y(T){let b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function x(T){let b=T.target;b.removeEventListener("dispose",x);let E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(let T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}var co=class{constructor(t={}){let{canvas:e=Xp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),y=new Int32Array(4),x=null,m=null,T=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this.toneMapping=$i,this.toneMappingExposure=1;let E=this,V=!1,D=0,I=0,O=null,A=-1,S=null,B=new Ue,tt=new Ue,F=null,G=new re(0),Z=0,q=e.width,mt=e.height,j=1,vt=null,ht=null,Wt=new Ue(0,0,q,mt),ce=new Ue(0,0,q,mt),Ee=!1,lt=new ao,St=!1,Zt=!1,_t=new Be,$t=new Be,ae=new U,Xt=new Ue,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},dt=!1;function wt(){return O===null?j:1}let N=i;function Gt(R,K){return e.getContext(R,K)}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xh}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",Bt,!1),e.addEventListener("webglcontextcreationerror",Nt,!1),N===null){let K="webgl2";if(N=Gt(K,R),N===null)throw Gt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let bt,Ot,Pt,te,Ht,P,w,Q,W,J,X,xt,ft,pt,yt,et,It,Rt,Et,Ut,Yt,qt,ve,Y;function Dt(){bt=new ix(N),bt.init(),qt=new N_(N,bt),Ot=new $g(N,bt,t,qt),Pt=new L_(N,bt),Ot.reverseDepthBuffer&&f&&Pt.buffers.depth.setReversed(!0),te=new ox(N),Ht=new y_,P=new U_(N,bt,Pt,Ht,Ot,qt,te),w=new Qg(E),Q=new nx(E),W=new d0(N),ve=new Kg(N,W),J=new sx(N,W,te,ve),X=new cx(N,J,W,te),Et=new ax(N,Ot,P),et=new jg(Ht),xt=new __(E,w,Q,bt,Ot,ve,et),ft=new H_(E,Ht),pt=new v_,yt=new A_(bt),Rt=new Zg(E,w,Q,Pt,X,d,c),It=new P_(E,X,Ot),Y=new k_(N,te,Ot,Pt),Ut=new Jg(N,bt,te),Yt=new rx(N,bt,te),te.programs=xt.programs,E.capabilities=Ot,E.extensions=bt,E.properties=Ht,E.renderLists=pt,E.shadowMap=It,E.state=Pt,E.info=te}Dt();let st=new ql(E,N);this.xr=st,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let R=bt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=bt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(q,mt,!1))},this.getSize=function(R){return R.set(q,mt)},this.setSize=function(R,K,nt=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=R,mt=K,e.width=Math.floor(R*j),e.height=Math.floor(K*j),nt===!0&&(e.style.width=R+"px",e.style.height=K+"px"),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(q*j,mt*j).floor()},this.setDrawingBufferSize=function(R,K,nt){q=R,mt=K,j=nt,e.width=Math.floor(R*nt),e.height=Math.floor(K*nt),this.setViewport(0,0,R,K)},this.getCurrentViewport=function(R){return R.copy(B)},this.getViewport=function(R){return R.copy(Wt)},this.setViewport=function(R,K,nt,it){R.isVector4?Wt.set(R.x,R.y,R.z,R.w):Wt.set(R,K,nt,it),Pt.viewport(B.copy(Wt).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(ce)},this.setScissor=function(R,K,nt,it){R.isVector4?ce.set(R.x,R.y,R.z,R.w):ce.set(R,K,nt,it),Pt.scissor(tt.copy(ce).multiplyScalar(j).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(R){Pt.setScissorTest(Ee=R)},this.setOpaqueSort=function(R){vt=R},this.setTransparentSort=function(R){ht=R},this.getClearColor=function(R){return R.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(R=!0,K=!0,nt=!0){let it=0;if(R){let $=!1;if(O!==null){let Ct=O.texture.format;$=Ct===Sh||Ct===bh||Ct===Eh}if($){let Ct=O.texture.type,kt=Ct===Di||Ct===Ms||Ct===io||Ct===xr||Ct===Mh||Ct===vh,ie=Rt.getClearColor(),ee=Rt.getClearAlpha(),he=ie.r,pe=ie.g,Kt=ie.b;kt?(g[0]=he,g[1]=pe,g[2]=Kt,g[3]=ee,N.clearBufferuiv(N.COLOR,0,g)):(y[0]=he,y[1]=pe,y[2]=Kt,y[3]=ee,N.clearBufferiv(N.COLOR,0,y))}else it|=N.COLOR_BUFFER_BIT}K&&(it|=N.DEPTH_BUFFER_BIT),nt&&(it|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",Bt,!1),e.removeEventListener("webglcontextcreationerror",Nt,!1),pt.dispose(),yt.dispose(),Ht.dispose(),w.dispose(),Q.dispose(),X.dispose(),ve.dispose(),Y.dispose(),xt.dispose(),st.dispose(),st.removeEventListener("sessionstart",bn),st.removeEventListener("sessionend",Ir),ci.stop()};function gt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;let R=te.autoReset,K=It.enabled,nt=It.autoUpdate,it=It.needsUpdate,$=It.type;Dt(),te.autoReset=R,It.enabled=K,It.autoUpdate=nt,It.needsUpdate=it,It.type=$}function Nt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function fe(R){let K=R.target;K.removeEventListener("dispose",fe),Te(K)}function Te(R){rn(R),Ht.remove(R)}function rn(R){let K=Ht.get(R).programs;K!==void 0&&(K.forEach(function(nt){xt.releaseProgram(nt)}),R.isShaderMaterial&&xt.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,nt,it,$,Ct){K===null&&(K=le);let kt=$.isMesh&&$.matrixWorld.determinant()<0,ie=ui(R,K,nt,it,$);Pt.setMaterial(it,kt);let ee=nt.index,he=1;if(it.wireframe===!0){if(ee=J.getWireframeAttribute(nt),ee===void 0)return;he=2}let pe=nt.drawRange,Kt=nt.attributes.position,ye=pe.start*he,Se=(pe.start+pe.count)*he;Ct!==null&&(ye=Math.max(ye,Ct.start*he),Se=Math.min(Se,(Ct.start+Ct.count)*he)),ee!==null?(ye=Math.max(ye,0),Se=Math.min(Se,ee.count)):Kt!=null&&(ye=Math.max(ye,0),Se=Math.min(Se,Kt.count));let Ce=Se-ye;if(Ce<0||Ce===1/0)return;ve.setup($,it,ie,nt,ee);let pn,oe=Ut;if(ee!==null&&(pn=W.get(ee),oe=Yt,oe.setIndex(pn)),$.isMesh)it.wireframe===!0?(Pt.setLineWidth(it.wireframeLinewidth*wt()),oe.setMode(N.LINES)):oe.setMode(N.TRIANGLES);else if($.isLine){let ne=it.linewidth;ne===void 0&&(ne=1),Pt.setLineWidth(ne*wt()),$.isLineSegments?oe.setMode(N.LINES):$.isLineLoop?oe.setMode(N.LINE_LOOP):oe.setMode(N.LINE_STRIP)}else $.isPoints?oe.setMode(N.POINTS):$.isSprite&&oe.setMode(N.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)oe.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(bt.get("WEBGL_multi_draw"))oe.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let ne=$._multiDrawStarts,Jn=$._multiDrawCounts,we=$._multiDrawCount,In=ee?W.get(ee).bytesPerElement:1,Nn=Ht.get(it).currentProgram.getUniforms();for(let Ze=0;Ze<we;Ze++)Nn.setValue(N,"_gl_DrawID",Ze),oe.render(ne[Ze]/In,Jn[Ze])}else if($.isInstancedMesh)oe.renderInstances(ye,Ce,$.count);else if(nt.isInstancedBufferGeometry){let ne=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,Jn=Math.min(nt.instanceCount,ne);oe.renderInstances(ye,Ce,Jn)}else oe.render(ye,Ce)};function Ae(R,K,nt){R.transparent===!0&&R.side===xn&&R.forceSinglePass===!1?(R.side=_n,R.needsUpdate=!0,vi(R,K,nt),R.side=ji,R.needsUpdate=!0,vi(R,K,nt),R.side=xn):vi(R,K,nt)}this.compile=function(R,K,nt=null){nt===null&&(nt=R),m=yt.get(nt),m.init(K),b.push(m),nt.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),R!==nt&&R.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights();let it=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Ct=$.material;if(Ct)if(Array.isArray(Ct))for(let kt=0;kt<Ct.length;kt++){let ie=Ct[kt];Ae(ie,nt,$),it.add(ie)}else Ae(Ct,nt,$),it.add(Ct)}),b.pop(),m=null,it},this.compileAsync=function(R,K,nt=null){let it=this.compile(R,K,nt);return new Promise($=>{function Ct(){if(it.forEach(function(kt){Ht.get(kt).currentProgram.isReady()&&it.delete(kt)}),it.size===0){$(R);return}setTimeout(Ct,10)}bt.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let dn=null;function kn(R){dn&&dn(R)}function bn(){ci.stop()}function Ir(){ci.start()}let ci=new qf;ci.setAnimationLoop(kn),typeof self!="undefined"&&ci.setContext(self),this.setAnimationLoop=function(R){dn=R,st.setAnimationLoop(R),R===null?ci.stop():ci.start()},st.addEventListener("sessionstart",bn),st.addEventListener("sessionend",Ir),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(K),K=st.getCamera()),R.isScene===!0&&R.onBeforeRender(E,R,K,O),m=yt.get(R,b.length),m.init(K),b.push(m),$t.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),lt.setFromProjectionMatrix($t),Zt=this.localClippingEnabled,St=et.init(this.clippingPlanes,Zt),x=pt.get(R,T.length),x.init(),T.push(x),st.enabled===!0&&st.isPresenting===!0){let Ct=E.xr.getDepthSensingMesh();Ct!==null&&Fs(Ct,K,-1/0,E.sortObjects)}Fs(R,K,0,E.sortObjects),x.finish(),E.sortObjects===!0&&x.sort(vt,ht),dt=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,dt&&Rt.addToRenderList(x,R),this.info.render.frame++,St===!0&&et.beginShadows();let nt=m.state.shadowsArray;It.render(nt,R,K),St===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();let it=x.opaque,$=x.transmissive;if(m.setupLights(),K.isArrayCamera){let Ct=K.cameras;if($.length>0)for(let kt=0,ie=Ct.length;kt<ie;kt++){let ee=Ct[kt];li(it,$,R,ee)}dt&&Rt.render(R);for(let kt=0,ie=Ct.length;kt<ie;kt++){let ee=Ct[kt];Bs(x,R,ee,ee.viewport)}}else $.length>0&&li(it,$,R,K),dt&&Rt.render(R),Bs(x,R,K);O!==null&&(P.updateMultisampleRenderTarget(O),P.updateRenderTargetMipmap(O)),R.isScene===!0&&R.onAfterRender(E,R,K),ve.resetDefaultState(),A=-1,S=null,b.pop(),b.length>0?(m=b[b.length-1],St===!0&&et.setGlobalState(E.clippingPlanes,m.state.camera)):m=null,T.pop(),T.length>0?x=T[T.length-1]:x=null};function Fs(R,K,nt,it){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)nt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||lt.intersectsSprite(R)){it&&Xt.setFromMatrixPosition(R.matrixWorld).applyMatrix4($t);let kt=X.update(R),ie=R.material;ie.visible&&x.push(R,kt,ie,nt,Xt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||lt.intersectsObject(R))){let kt=X.update(R),ie=R.material;if(it&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Xt.copy(R.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),Xt.copy(kt.boundingSphere.center)),Xt.applyMatrix4(R.matrixWorld).applyMatrix4($t)),Array.isArray(ie)){let ee=kt.groups;for(let he=0,pe=ee.length;he<pe;he++){let Kt=ee[he],ye=ie[Kt.materialIndex];ye&&ye.visible&&x.push(R,kt,ye,nt,Xt.z,Kt)}}else ie.visible&&x.push(R,kt,ie,nt,Xt.z,null)}}let Ct=R.children;for(let kt=0,ie=Ct.length;kt<ie;kt++)Fs(Ct[kt],K,nt,it)}function Bs(R,K,nt,it){let $=R.opaque,Ct=R.transmissive,kt=R.transparent;m.setupLightsView(nt),St===!0&&et.setGlobalState(E.clippingPlanes,nt),it&&Pt.viewport(B.copy(it)),$.length>0&&hi($,K,nt),Ct.length>0&&hi(Ct,K,nt),kt.length>0&&hi(kt,K,nt),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function li(R,K,nt,it){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[it.id]===void 0&&(m.state.transmissionRenderTarget[it.id]=new Ni(1,1,{generateMipmaps:!0,type:bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float")?Ao:Di,minFilter:ys,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));let Ct=m.state.transmissionRenderTarget[it.id],kt=it.viewport||B;Ct.setSize(kt.z,kt.w);let ie=E.getRenderTarget();E.setRenderTarget(Ct),E.getClearColor(G),Z=E.getClearAlpha(),Z<1&&E.setClearColor(16777215,.5),E.clear(),dt&&Rt.render(nt);let ee=E.toneMapping;E.toneMapping=$i;let he=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),m.setupLightsView(it),St===!0&&et.setGlobalState(E.clippingPlanes,it),hi(R,nt,it),P.updateMultisampleRenderTarget(Ct),P.updateRenderTargetMipmap(Ct),bt.has("WEBGL_multisampled_render_to_texture")===!1){let pe=!1;for(let Kt=0,ye=K.length;Kt<ye;Kt++){let Se=K[Kt],Ce=Se.object,pn=Se.geometry,oe=Se.material,ne=Se.group;if(oe.side===xn&&Ce.layers.test(it.layers)){let Jn=oe.side;oe.side=_n,oe.needsUpdate=!0,rs(Ce,nt,it,pn,oe,ne),oe.side=Jn,oe.needsUpdate=!0,pe=!0}}pe===!0&&(P.updateMultisampleRenderTarget(Ct),P.updateRenderTargetMipmap(Ct))}E.setRenderTarget(ie),E.setClearColor(G,Z),he!==void 0&&(it.viewport=he),E.toneMapping=ee}function hi(R,K,nt){let it=K.isScene===!0?K.overrideMaterial:null;for(let $=0,Ct=R.length;$<Ct;$++){let kt=R[$],ie=kt.object,ee=kt.geometry,he=it===null?kt.material:it,pe=kt.group;ie.layers.test(nt.layers)&&rs(ie,K,nt,ee,he,pe)}}function rs(R,K,nt,it,$,Ct){R.onBeforeRender(E,K,nt,it,$,Ct),R.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(E,K,nt,it,R,Ct),$.transparent===!0&&$.side===xn&&$.forceSinglePass===!1?($.side=_n,$.needsUpdate=!0,E.renderBufferDirect(nt,K,it,$,R,Ct),$.side=ji,$.needsUpdate=!0,E.renderBufferDirect(nt,K,it,$,R,Ct),$.side=xn):E.renderBufferDirect(nt,K,it,$,R,Ct),R.onAfterRender(E,K,nt,it,$,Ct)}function vi(R,K,nt){K.isScene!==!0&&(K=le);let it=Ht.get(R),$=m.state.lights,Ct=m.state.shadowsArray,kt=$.state.version,ie=xt.getParameters(R,$.state,Ct,K,nt),ee=xt.getProgramCacheKey(ie),he=it.programs;it.environment=R.isMeshStandardMaterial?K.environment:null,it.fog=K.fog,it.envMap=(R.isMeshStandardMaterial?Q:w).get(R.envMap||it.environment),it.envMapRotation=it.environment!==null&&R.envMap===null?K.environmentRotation:R.envMapRotation,he===void 0&&(R.addEventListener("dispose",fe),he=new Map,it.programs=he);let pe=he.get(ee);if(pe!==void 0){if(it.currentProgram===pe&&it.lightsStateVersion===kt)return zs(R,ie),pe}else ie.uniforms=xt.getUniforms(R),R.onBeforeCompile(ie,E),pe=xt.acquireProgram(ie,ee),he.set(ee,pe),it.uniforms=ie.uniforms;let Kt=it.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Kt.clippingPlanes=et.uniform),zs(R,ie),it.needsLights=Lo(R),it.lightsStateVersion=kt,it.needsLights&&(Kt.ambientLightColor.value=$.state.ambient,Kt.lightProbe.value=$.state.probe,Kt.directionalLights.value=$.state.directional,Kt.directionalLightShadows.value=$.state.directionalShadow,Kt.spotLights.value=$.state.spot,Kt.spotLightShadows.value=$.state.spotShadow,Kt.rectAreaLights.value=$.state.rectArea,Kt.ltc_1.value=$.state.rectAreaLTC1,Kt.ltc_2.value=$.state.rectAreaLTC2,Kt.pointLights.value=$.state.point,Kt.pointLightShadows.value=$.state.pointShadow,Kt.hemisphereLights.value=$.state.hemi,Kt.directionalShadowMap.value=$.state.directionalShadowMap,Kt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Kt.spotShadowMap.value=$.state.spotShadowMap,Kt.spotLightMatrix.value=$.state.spotLightMatrix,Kt.spotLightMap.value=$.state.spotLightMap,Kt.pointShadowMap.value=$.state.pointShadowMap,Kt.pointShadowMatrix.value=$.state.pointShadowMatrix),it.currentProgram=pe,it.uniformsList=null,pe}function Sn(R){if(R.uniformsList===null){let K=R.currentProgram.getUniforms();R.uniformsList=dr.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function zs(R,K){let nt=Ht.get(R);nt.outputColorSpace=K.outputColorSpace,nt.batching=K.batching,nt.batchingColor=K.batchingColor,nt.instancing=K.instancing,nt.instancingColor=K.instancingColor,nt.instancingMorph=K.instancingMorph,nt.skinning=K.skinning,nt.morphTargets=K.morphTargets,nt.morphNormals=K.morphNormals,nt.morphColors=K.morphColors,nt.morphTargetsCount=K.morphTargetsCount,nt.numClippingPlanes=K.numClippingPlanes,nt.numIntersection=K.numClipIntersection,nt.vertexAlphas=K.vertexAlphas,nt.vertexTangents=K.vertexTangents,nt.toneMapping=K.toneMapping}function ui(R,K,nt,it,$){K.isScene!==!0&&(K=le),P.resetTextureUnits();let Ct=K.fog,kt=it.isMeshStandardMaterial?K.environment:null,ie=O===null?E.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:br,ee=(it.isMeshStandardMaterial?Q:w).get(it.envMap||kt),he=it.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pe=!!nt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Kt=!!nt.morphAttributes.position,ye=!!nt.morphAttributes.normal,Se=!!nt.morphAttributes.color,Ce=$i;it.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ce=E.toneMapping);let pn=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,oe=pn!==void 0?pn.length:0,ne=Ht.get(it),Jn=m.state.lights;if(St===!0&&(Zt===!0||R!==S)){let Ln=R===S&&it.id===A;et.setState(it,R,Ln)}let we=!1;it.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==Jn.state.version||ne.outputColorSpace!==ie||$.isBatchedMesh&&ne.batching===!1||!$.isBatchedMesh&&ne.batching===!0||$.isBatchedMesh&&ne.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&ne.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&ne.instancing===!1||!$.isInstancedMesh&&ne.instancing===!0||$.isSkinnedMesh&&ne.skinning===!1||!$.isSkinnedMesh&&ne.skinning===!0||$.isInstancedMesh&&ne.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&ne.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&ne.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&ne.instancingMorph===!1&&$.morphTexture!==null||ne.envMap!==ee||it.fog===!0&&ne.fog!==Ct||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==et.numPlanes||ne.numIntersection!==et.numIntersection)||ne.vertexAlphas!==he||ne.vertexTangents!==pe||ne.morphTargets!==Kt||ne.morphNormals!==ye||ne.morphColors!==Se||ne.toneMapping!==Ce||ne.morphTargetsCount!==oe)&&(we=!0):(we=!0,ne.__version=it.version);let In=ne.currentProgram;we===!0&&(In=vi(it,K,$));let Nn=!1,Ze=!1,ki=!1,Re=In.getUniforms(),je=ne.uniforms;if(Pt.useProgram(In.program)&&(Nn=!0,Ze=!0,ki=!0),it.id!==A&&(A=it.id,Ze=!0),Nn||S!==R){Pt.buffers.depth.getReversed()?(_t.copy(R.projectionMatrix),qp(_t),Zp(_t),Re.setValue(N,"projectionMatrix",_t)):Re.setValue(N,"projectionMatrix",R.projectionMatrix),Re.setValue(N,"viewMatrix",R.matrixWorldInverse);let fi=Re.map.cameraPosition;fi!==void 0&&fi.setValue(N,ae.setFromMatrixPosition(R.matrixWorld)),Ot.logarithmicDepthBuffer&&Re.setValue(N,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Re.setValue(N,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,Ze=!0,ki=!0)}if($.isSkinnedMesh){Re.setOptional(N,$,"bindMatrix"),Re.setOptional(N,$,"bindMatrixInverse");let Ln=$.skeleton;Ln&&(Ln.boneTexture===null&&Ln.computeBoneTexture(),Re.setValue(N,"boneTexture",Ln.boneTexture,P))}$.isBatchedMesh&&(Re.setOptional(N,$,"batchingTexture"),Re.setValue(N,"batchingTexture",$._matricesTexture,P),Re.setOptional(N,$,"batchingIdTexture"),Re.setValue(N,"batchingIdTexture",$._indirectTexture,P),Re.setOptional(N,$,"batchingColorTexture"),$._colorsTexture!==null&&Re.setValue(N,"batchingColorTexture",$._colorsTexture,P));let as=nt.morphAttributes;if((as.position!==void 0||as.normal!==void 0||as.color!==void 0)&&Et.update($,nt,In),(Ze||ne.receiveShadow!==$.receiveShadow)&&(ne.receiveShadow=$.receiveShadow,Re.setValue(N,"receiveShadow",$.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(je.envMap.value=ee,je.flipEnvMap.value=ee.isCubeTexture&&ee.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&K.environment!==null&&(je.envMapIntensity.value=K.environmentIntensity),Ze&&(Re.setValue(N,"toneMappingExposure",E.toneMappingExposure),ne.needsLights&&os(je,ki),Ct&&it.fog===!0&&ft.refreshFogUniforms(je,Ct),ft.refreshMaterialUniforms(je,it,j,mt,m.state.transmissionRenderTarget[R.id]),dr.upload(N,Sn(ne),je,P)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(dr.upload(N,Sn(ne),je,P),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Re.setValue(N,"center",$.center),Re.setValue(N,"modelViewMatrix",$.modelViewMatrix),Re.setValue(N,"normalMatrix",$.normalMatrix),Re.setValue(N,"modelMatrix",$.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){let Ln=it.uniformsGroups;for(let fi=0,Vn=Ln.length;fi<Vn;fi++){let Hs=Ln[fi];Y.update(Hs,In),Y.bind(Hs,In)}}return In}function os(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function Lo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(R,K,nt){Ht.get(R.texture).__webglTexture=K,Ht.get(R.depthTexture).__webglTexture=nt;let it=Ht.get(R);it.__hasExternalTextures=!0,it.__autoAllocateDepthBuffer=nt===void 0,it.__autoAllocateDepthBuffer||bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,K){let nt=Ht.get(R);nt.__webglFramebuffer=K,nt.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(R,K=0,nt=0){O=R,D=K,I=nt;let it=!0,$=null,Ct=!1,kt=!1;if(R){let ee=Ht.get(R);if(ee.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(N.FRAMEBUFFER,null),it=!1;else if(ee.__webglFramebuffer===void 0)P.setupRenderTarget(R);else if(ee.__hasExternalTextures)P.rebindTextures(R,Ht.get(R.texture).__webglTexture,Ht.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Kt=R.depthTexture;if(ee.__boundDepthTexture!==Kt){if(Kt!==null&&Ht.has(Kt)&&(R.width!==Kt.image.width||R.height!==Kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(R)}}let he=R.texture;(he.isData3DTexture||he.isDataArrayTexture||he.isCompressedArrayTexture)&&(kt=!0);let pe=Ht.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(pe[K])?$=pe[K][nt]:$=pe[K],Ct=!0):R.samples>0&&P.useMultisampledRTT(R)===!1?$=Ht.get(R).__webglMultisampledFramebuffer:Array.isArray(pe)?$=pe[nt]:$=pe,B.copy(R.viewport),tt.copy(R.scissor),F=R.scissorTest}else B.copy(Wt).multiplyScalar(j).floor(),tt.copy(ce).multiplyScalar(j).floor(),F=Ee;if(Pt.bindFramebuffer(N.FRAMEBUFFER,$)&&it&&Pt.drawBuffers(R,$),Pt.viewport(B),Pt.scissor(tt),Pt.setScissorTest(F),Ct){let ee=Ht.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+K,ee.__webglTexture,nt)}else if(kt){let ee=Ht.get(R.texture),he=K||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,ee.__webglTexture,nt||0,he)}A=-1},this.readRenderTargetPixels=function(R,K,nt,it,$,Ct,kt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ie=Ht.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&kt!==void 0&&(ie=ie[kt]),ie){Pt.bindFramebuffer(N.FRAMEBUFFER,ie);try{let ee=R.texture,he=ee.format,pe=ee.type;if(!Ot.textureFormatReadable(he)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-it&&nt>=0&&nt<=R.height-$&&N.readPixels(K,nt,it,$,qt.convert(he),qt.convert(pe),Ct)}finally{let ee=O!==null?Ht.get(O).__webglFramebuffer:null;Pt.bindFramebuffer(N.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(R,K,nt,it,$,Ct,kt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ie=Ht.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&kt!==void 0&&(ie=ie[kt]),ie){let ee=R.texture,he=ee.format,pe=ee.type;if(!Ot.textureFormatReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=R.width-it&&nt>=0&&nt<=R.height-$){Pt.bindFramebuffer(N.FRAMEBUFFER,ie);let Kt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Kt),N.bufferData(N.PIXEL_PACK_BUFFER,Ct.byteLength,N.STREAM_READ),N.readPixels(K,nt,it,$,qt.convert(he),qt.convert(pe),0);let ye=O!==null?Ht.get(O).__webglFramebuffer:null;Pt.bindFramebuffer(N.FRAMEBUFFER,ye);let Se=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Yp(N,Se,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Kt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Ct),N.deleteBuffer(Kt),N.deleteSync(Se),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,K=null,nt=0){R.isTexture!==!0&&(Zr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,R=arguments[1]);let it=Math.pow(2,-nt),$=Math.floor(R.image.width*it),Ct=Math.floor(R.image.height*it),kt=K!==null?K.x:0,ie=K!==null?K.y:0;P.setTexture2D(R,0),N.copyTexSubImage2D(N.TEXTURE_2D,nt,0,0,kt,ie,$,Ct),Pt.unbindTexture()},this.copyTextureToTexture=function(R,K,nt=null,it=null,$=0){R.isTexture!==!0&&(Zr("WebGLRenderer: copyTextureToTexture function signature has changed."),it=arguments[0]||null,R=arguments[1],K=arguments[2],$=arguments[3]||0,nt=null);let Ct,kt,ie,ee,he,pe,Kt,ye,Se,Ce=R.isCompressedTexture?R.mipmaps[$]:R.image;nt!==null?(Ct=nt.max.x-nt.min.x,kt=nt.max.y-nt.min.y,ie=nt.isBox3?nt.max.z-nt.min.z:1,ee=nt.min.x,he=nt.min.y,pe=nt.isBox3?nt.min.z:0):(Ct=Ce.width,kt=Ce.height,ie=Ce.depth||1,ee=0,he=0,pe=0),it!==null?(Kt=it.x,ye=it.y,Se=it.z):(Kt=0,ye=0,Se=0);let pn=qt.convert(K.format),oe=qt.convert(K.type),ne;K.isData3DTexture?(P.setTexture3D(K,0),ne=N.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(P.setTexture2DArray(K,0),ne=N.TEXTURE_2D_ARRAY):(P.setTexture2D(K,0),ne=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,K.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,K.unpackAlignment);let Jn=N.getParameter(N.UNPACK_ROW_LENGTH),we=N.getParameter(N.UNPACK_IMAGE_HEIGHT),In=N.getParameter(N.UNPACK_SKIP_PIXELS),Nn=N.getParameter(N.UNPACK_SKIP_ROWS),Ze=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ce.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ce.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ee),N.pixelStorei(N.UNPACK_SKIP_ROWS,he),N.pixelStorei(N.UNPACK_SKIP_IMAGES,pe);let ki=R.isDataArrayTexture||R.isData3DTexture,Re=K.isDataArrayTexture||K.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let je=Ht.get(R),as=Ht.get(K),Ln=Ht.get(je.__renderTarget),fi=Ht.get(as.__renderTarget);Pt.bindFramebuffer(N.READ_FRAMEBUFFER,Ln.__webglFramebuffer),Pt.bindFramebuffer(N.DRAW_FRAMEBUFFER,fi.__webglFramebuffer);for(let Vn=0;Vn<ie;Vn++)ki&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ht.get(R).__webglTexture,$,pe+Vn),R.isDepthTexture?(Re&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ht.get(K).__webglTexture,$,Se+Vn),N.blitFramebuffer(ee,he,Ct,kt,Kt,ye,Ct,kt,N.DEPTH_BUFFER_BIT,N.NEAREST)):Re?N.copyTexSubImage3D(ne,$,Kt,ye,Se+Vn,ee,he,Ct,kt):N.copyTexSubImage2D(ne,$,Kt,ye,Se+Vn,ee,he,Ct,kt);Pt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Re?R.isDataTexture||R.isData3DTexture?N.texSubImage3D(ne,$,Kt,ye,Se,Ct,kt,ie,pn,oe,Ce.data):K.isCompressedArrayTexture?N.compressedTexSubImage3D(ne,$,Kt,ye,Se,Ct,kt,ie,pn,Ce.data):N.texSubImage3D(ne,$,Kt,ye,Se,Ct,kt,ie,pn,oe,Ce):R.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,$,Kt,ye,Ct,kt,pn,oe,Ce.data):R.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,$,Kt,ye,Ce.width,Ce.height,pn,Ce.data):N.texSubImage2D(N.TEXTURE_2D,$,Kt,ye,Ct,kt,pn,oe,Ce);N.pixelStorei(N.UNPACK_ROW_LENGTH,Jn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,we),N.pixelStorei(N.UNPACK_SKIP_PIXELS,In),N.pixelStorei(N.UNPACK_SKIP_ROWS,Nn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ze),$===0&&K.generateMipmaps&&N.generateMipmap(ne),Pt.unbindTexture()},this.copyTextureToTexture3D=function(R,K,nt=null,it=null,$=0){return R.isTexture!==!0&&(Zr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),nt=arguments[0]||null,it=arguments[1]||null,R=arguments[2],K=arguments[3],$=arguments[4]||0),Zr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,K,nt,it,$)},this.initRenderTarget=function(R){Ht.get(R).__webglFramebuffer===void 0&&P.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),Pt.unbindTexture()},this.resetState=function(){D=0,I=0,O=null,Pt.reset(),ve.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=be._getDrawingBufferColorSpace(t),e.unpackColorSpace=be._getUnpackColorSpace()}};var Ra=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new re(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},lo=class extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ca=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Il,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},wn=new U,ho=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)wn.fromBufferAttribute(this,e),wn.applyMatrix4(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)wn.fromBufferAttribute(this,e),wn.applyNormalMatrix(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)wn.fromBufferAttribute(this,e),wn.transformDirection(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ei(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Pe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ei(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ei(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ei(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ei(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),s=Pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new fn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Fi=class extends Oi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},sr,Wr=new U,rr=new U,or=new U,ar=new Mt,Xr=new Mt,jf=new Be,ia=new U,Yr=new U,sa=new U,pf=new Mt,Hc=new Mt,mf=new Mt,ts=class extends Ge{constructor(t=new Fi){if(super(),this.isSprite=!0,this.type="Sprite",sr===void 0){sr=new Fe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ca(e,5);sr.setIndex([0,1,2,0,2,3]),sr.setAttribute("position",new ho(i,3,0,!1)),sr.setAttribute("uv",new ho(i,2,3,!1))}this.geometry=sr,this.material=t,this.center=new Mt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rr.setFromMatrixScale(this.matrixWorld),jf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),or.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rr.multiplyScalar(-or.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;ra(ia.set(-.5,-.5,0),or,o,rr,s,r),ra(Yr.set(.5,-.5,0),or,o,rr,s,r),ra(sa.set(.5,.5,0),or,o,rr,s,r),pf.set(0,0),Hc.set(1,0),mf.set(1,1);let a=t.ray.intersectTriangle(ia,Yr,sa,!1,Wr);if(a===null&&(ra(Yr.set(-.5,.5,0),or,o,rr,s,r),Hc.set(0,1),a=t.ray.intersectTriangle(ia,sa,Yr,!1,Wr),a===null))return;let c=t.ray.origin.distanceTo(Wr);c<t.near||c>t.far||e.push({distance:c,point:Wr.clone(),uv:Ki.getInterpolation(Wr,ia,Yr,sa,pf,Hc,mf,new Mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ra(n,t,e,i,s,r){ar.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Xr.x=r*ar.x-s*ar.y,Xr.y=s*ar.x+r*ar.y):Xr.copy(ar),n.copy(t),n.x+=Xr.x,n.y+=Xr.y,n.applyMatrix4(jf)}var es=class extends Oi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},gf=new Be,Zl=new Es,oa=new yr,aa=new U,bs=class extends Ge{constructor(t=new Fe,e=new es){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(s),oa.radius+=r,t.ray.intersectsSphere(oa)===!1)return;gf.copy(s).invert(),Zl.copy(t.ray).applyMatrix4(gf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,y=d;g<y;g++){let x=l.getX(g);aa.fromBufferAttribute(u,x),xf(aa,x,c,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,y=d;g<y;g++)aa.fromBufferAttribute(u,g),xf(aa,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function xf(n,t,e,i,s,r,o){let a=Zl.distanceSqToPoint(n);if(a<e){let c=new U;Zl.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ln=class extends yn{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Mt:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new U,s=[],r=[],o=[],a=new U,c=new Be;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(an(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(an(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},uo=class extends Yn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Mt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Kl=class extends uo{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ah(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var ca=new U,kc=new Ah,Vc=new Ah,Gc=new Ah,fo=class extends Yn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new U){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(ca.subVectors(s[0],s[1]).add(s[0]),l=ca);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ca.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ca),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),d),y=Math.pow(u.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d);y<1e-4&&(y=1),g<1e-4&&(g=y),x<1e-4&&(x=y),kc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,y,x),Vc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,y,x),Gc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,y,x)}else this.curveType==="catmullrom"&&(kc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Vc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Gc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return i.set(kc.calc(c),Vc.calc(c),Gc.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function _f(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function V_(n,t){let e=1-n;return e*e*t}function G_(n,t){return 2*(1-n)*n*t}function W_(n,t){return n*n*t}function Qr(n,t,e,i){return V_(n,t)+G_(n,e)+W_(n,i)}function X_(n,t){let e=1-n;return e*e*e*t}function Y_(n,t){let e=1-n;return 3*e*e*n*t}function q_(n,t){return 3*(1-n)*n*n*t}function Z_(n,t){return n*n*n*t}function to(n,t,e,i,s){return X_(n,t)+Y_(n,e)+q_(n,i)+Z_(n,s)}var Pa=class extends Yn{constructor(t=new Mt,e=new Mt,i=new Mt,s=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Mt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(to(t,s.x,r.x,o.x,a.x),to(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Jl=class extends Yn{constructor(t=new U,e=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new U){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(to(t,s.x,r.x,o.x,a.x),to(t,s.y,r.y,o.y,a.y),to(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ia=class extends Yn{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$l=class extends Yn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},La=class extends Yn{constructor(t=new Mt,e=new Mt,i=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Mt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Qr(t,s.x,r.x,o.x),Qr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jl=class extends Yn{constructor(t=new U,e=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new U){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Qr(t,s.x,r.x,o.x),Qr(t,s.y,r.y,o.y),Qr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Da=class extends Yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(_f(a,c.x,l.x,h.x,u.x),_f(a,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new Mt().fromArray(s))}return this}},Ql=Object.freeze({__proto__:null,ArcCurve:Kl,CatmullRomCurve3:fo,CubicBezierCurve:Pa,CubicBezierCurve3:Jl,EllipseCurve:uo,LineCurve:Ia,LineCurve3:$l,QuadraticBezierCurve:La,QuadraticBezierCurve3:jl,SplineCurve:Da}),th=class extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ql[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Ql[s.type]().fromJSON(s))}return this}},Ua=class extends th{constructor(t){super(),this.type="Path",this.currentPoint=new Mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Ia(this.currentPoint.clone(),new Mt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new La(this.currentPoint.clone(),new Mt(t,e),new Mt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Pa(this.currentPoint.clone(),new Mt(t,e),new Mt(i,s),new Mt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Da(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,r,o,a,c),this}absellipse(t,e,i,s,r,o,a,c){let l=new uo(t,e,i,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Na=class n extends Fe{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new U,h=new Mt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=i+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(a,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ke=class n extends Fe{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,y=[],x=i/2,m=0;T(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new de(u,3)),this.setAttribute("normal",new de(f,3)),this.setAttribute("uv",new de(d,2));function T(){let E=new U,V=new U,D=0,I=(e-t)/i;for(let O=0;O<=r;O++){let A=[],S=O/r,B=S*(e-t)+t;for(let tt=0;tt<=s;tt++){let F=tt/s,G=F*c+a,Z=Math.sin(G),q=Math.cos(G);V.x=B*Z,V.y=-S*i+x,V.z=B*q,u.push(V.x,V.y,V.z),E.set(Z,I,q).normalize(),f.push(E.x,E.y,E.z),d.push(F,1-S),A.push(g++)}y.push(A)}for(let O=0;O<s;O++)for(let A=0;A<r;A++){let S=y[A][O],B=y[A+1][O],tt=y[A+1][O+1],F=y[A][O+1];(t>0||A!==0)&&(h.push(S,B,F),D+=3),(e>0||A!==r-1)&&(h.push(B,tt,F),D+=3)}l.addGroup(m,D,0),m+=D}function b(E){let V=g,D=new Mt,I=new U,O=0,A=E===!0?t:e,S=E===!0?1:-1;for(let tt=1;tt<=s;tt++)u.push(0,x*S,0),f.push(0,S,0),d.push(.5,.5),g++;let B=g;for(let tt=0;tt<=s;tt++){let G=tt/s*c+a,Z=Math.cos(G),q=Math.sin(G);I.x=A*q,I.y=x*S,I.z=A*Z,u.push(I.x,I.y,I.z),f.push(0,S,0),D.x=Z*.5+.5,D.y=q*.5*S+.5,d.push(D.x,D.y),g++}for(let tt=0;tt<s;tt++){let F=V+tt,G=B+tt;E===!0?h.push(G,G+1,F):h.push(G+1,G,F),O+=3}l.addGroup(m,O,E===!0?1:2),m+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},po=class n extends ke{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},eh=class n extends Fe{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new de(r,3)),this.setAttribute("normal",new de(r.slice(),3)),this.setAttribute("uv",new de(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(T){let b=new U,E=new U,V=new U;for(let D=0;D<e.length;D+=3)d(e[D+0],b),d(e[D+1],E),d(e[D+2],V),c(b,E,V,T)}function c(T,b,E,V){let D=V+1,I=[];for(let O=0;O<=D;O++){I[O]=[];let A=T.clone().lerp(E,O/D),S=b.clone().lerp(E,O/D),B=D-O;for(let tt=0;tt<=B;tt++)tt===0&&O===D?I[O][tt]=A:I[O][tt]=A.clone().lerp(S,tt/B)}for(let O=0;O<D;O++)for(let A=0;A<2*(D-O)-1;A++){let S=Math.floor(A/2);A%2===0?(f(I[O][S+1]),f(I[O+1][S]),f(I[O][S])):(f(I[O][S+1]),f(I[O+1][S+1]),f(I[O+1][S]))}}function l(T){let b=new U;for(let E=0;E<r.length;E+=3)b.x=r[E+0],b.y=r[E+1],b.z=r[E+2],b.normalize().multiplyScalar(T),r[E+0]=b.x,r[E+1]=b.y,r[E+2]=b.z}function h(){let T=new U;for(let b=0;b<r.length;b+=3){T.x=r[b+0],T.y=r[b+1],T.z=r[b+2];let E=x(T)/2/Math.PI+.5,V=m(T)/Math.PI+.5;o.push(E,1-V)}g(),u()}function u(){for(let T=0;T<o.length;T+=6){let b=o[T+0],E=o[T+2],V=o[T+4],D=Math.max(b,E,V),I=Math.min(b,E,V);D>.9&&I<.1&&(b<.2&&(o[T+0]+=1),E<.2&&(o[T+2]+=1),V<.2&&(o[T+4]+=1))}}function f(T){r.push(T.x,T.y,T.z)}function d(T,b){let E=T*3;b.x=t[E+0],b.y=t[E+1],b.z=t[E+2]}function g(){let T=new U,b=new U,E=new U,V=new U,D=new Mt,I=new Mt,O=new Mt;for(let A=0,S=0;A<r.length;A+=9,S+=6){T.set(r[A+0],r[A+1],r[A+2]),b.set(r[A+3],r[A+4],r[A+5]),E.set(r[A+6],r[A+7],r[A+8]),D.set(o[S+0],o[S+1]),I.set(o[S+2],o[S+3]),O.set(o[S+4],o[S+5]),V.copy(T).add(b).add(E).divideScalar(3);let B=x(V);y(D,S+0,T,B),y(I,S+2,b,B),y(O,S+4,E,B)}}function y(T,b,E,V){V<0&&T.x===1&&(o[b]=T.x-1),E.x===0&&E.z===0&&(o[b]=V/2/Math.PI+.5)}function x(T){return Math.atan2(T.z,-T.x)}function m(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var mo=class extends Ua{constructor(t){super(t),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Ua().fromJSON(s))}return this}},K_={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Qf(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(i&&(r=ty(n,t,r,e)),n.length>80*e){a=l=n[0],c=h=n[1];for(let g=e;g<s;g+=e)u=n[g],f=n[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return go(r,o,e,a,c,d,0),o}};function Qf(n,t,e,i,s){let r,o;if(s===uy(n,t,e,i)>0)for(r=t;r<e;r+=i)o=yf(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=yf(r,n[r],n[r+1],o);return o&&Xa(o,o.next)&&(_o(o),o=o.next),o}function Ss(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Xa(e,e.next)||Ye(e.prev,e,e.next)===0)){if(_o(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function go(n,t,e,i,s,r,o){if(!n)return;!o&&r&&ry(n,i,s,r);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?$_(n,i,s,r):J_(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),_o(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=j_(Ss(n),t,e),go(n,t,e,i,s,r,2)):o===2&&Q_(n,t,e,i,s,r):go(Ss(n),t,e,i,s,r,1);break}}}function J_(n){let t=n.prev,e=n,i=n.next;if(Ye(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&lr(s,a,r,c,o,l,g.x,g.y)&&Ye(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function $_(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Ye(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,y=a>c?a>l?a:l:c>l?c:l,x=h>u?h>f?h:f:u>f?u:f,m=nh(d,g,t,e,i),T=nh(y,x,t,e,i),b=n.prevZ,E=n.nextZ;for(;b&&b.z>=m&&E&&E.z<=T;){if(b.x>=d&&b.x<=y&&b.y>=g&&b.y<=x&&b!==s&&b!==o&&lr(a,h,c,u,l,f,b.x,b.y)&&Ye(b.prev,b,b.next)>=0||(b=b.prevZ,E.x>=d&&E.x<=y&&E.y>=g&&E.y<=x&&E!==s&&E!==o&&lr(a,h,c,u,l,f,E.x,E.y)&&Ye(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;b&&b.z>=m;){if(b.x>=d&&b.x<=y&&b.y>=g&&b.y<=x&&b!==s&&b!==o&&lr(a,h,c,u,l,f,b.x,b.y)&&Ye(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;E&&E.z<=T;){if(E.x>=d&&E.x<=y&&E.y>=g&&E.y<=x&&E!==s&&E!==o&&lr(a,h,c,u,l,f,E.x,E.y)&&Ye(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function j_(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!Xa(s,r)&&td(s,i,i.next,r)&&xo(s,r)&&xo(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),_o(i),_o(i.next),i=n=r),i=i.next}while(i!==n);return Ss(i)}function Q_(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&cy(o,a)){let c=ed(o,a);o=Ss(o,o.next),c=Ss(c,c.next),go(o,t,e,i,s,r,0),go(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function ty(n,t,e,i){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=Qf(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(ay(l));for(s.sort(ey),r=0;r<s.length;r++)e=ny(s[r],e);return e}function ey(n,t){return n.x-t.x}function ny(n,t){let e=iy(n,t);if(!e)return t;let i=ed(e,n);return Ss(i,i.next),Ss(e,e.next)}function iy(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&lr(o<l?r:i,o,c,l,o<l?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),xo(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&sy(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function sy(n,t){return Ye(n.prev,n,t.prev)<0&&Ye(t.next,n,n.next)<0}function ry(n,t,e,i){let s=n;do s.z===0&&(s.z=nh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,oy(s)}function oy(n){let t,e,i,s,r,o,a,c,l=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,l*=2}while(o>1);return n}function nh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function ay(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function lr(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function cy(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!ly(n,t)&&(xo(n,t)&&xo(t,n)&&hy(n,t)&&(Ye(n.prev,n,t.prev)||Ye(n,t.prev,t))||Xa(n,t)&&Ye(n.prev,n,n.next)>0&&Ye(t.prev,t,t.next)>0)}function Ye(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Xa(n,t){return n.x===t.x&&n.y===t.y}function td(n,t,e,i){let s=ha(Ye(n,t,e)),r=ha(Ye(n,t,i)),o=ha(Ye(e,i,n)),a=ha(Ye(e,i,t));return!!(s!==r&&o!==a||s===0&&la(n,e,t)||r===0&&la(n,i,t)||o===0&&la(e,n,i)||a===0&&la(e,t,i))}function la(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ha(n){return n>0?1:n<0?-1:0}function ly(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&td(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function xo(n,t){return Ye(n.prev,n,n.next)<0?Ye(n,t,n.next)>=0&&Ye(n,n.prev,t)>=0:Ye(n,t,n.prev)<0||Ye(n,n.next,t)<0}function hy(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function ed(n,t){let e=new ih(n.i,n.x,n.y),i=new ih(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function yf(n,t,e,i){let s=new ih(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function _o(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ih(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function uy(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var eo=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Mf(t),vf(i,t);let o=t.length;e.forEach(Mf);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,vf(i,e[c]);let a=K_.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Mf(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function vf(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Oa=class n extends Fe{constructor(t=new mo([new Mt(.5,.5),new Mt(-.5,.5),new Mt(-.5,-.5),new Mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new de(s,3)),this.setAttribute("uv",new de(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:fy,b,E=!1,V,D,I,O;m&&(b=m.getSpacedPoints(h),E=!0,f=!1,V=m.computeFrenetFrames(h,!1),D=new U,I=new U,O=new U),f||(x=0,d=0,g=0,y=0);let A=a.extractPoints(l),S=A.shape,B=A.holes;if(!eo.isClockWise(S)){S=S.reverse();for(let dt=0,wt=B.length;dt<wt;dt++){let N=B[dt];eo.isClockWise(N)&&(B[dt]=N.reverse())}}let F=eo.triangulateShape(S,B),G=S;for(let dt=0,wt=B.length;dt<wt;dt++){let N=B[dt];S=S.concat(N)}function Z(dt,wt,N){return wt||console.error("THREE.ExtrudeGeometry: vec does not exist"),dt.clone().addScaledVector(wt,N)}let q=S.length,mt=F.length;function j(dt,wt,N){let Gt,bt,Ot,Pt=dt.x-wt.x,te=dt.y-wt.y,Ht=N.x-dt.x,P=N.y-dt.y,w=Pt*Pt+te*te,Q=Pt*P-te*Ht;if(Math.abs(Q)>Number.EPSILON){let W=Math.sqrt(w),J=Math.sqrt(Ht*Ht+P*P),X=wt.x-te/W,xt=wt.y+Pt/W,ft=N.x-P/J,pt=N.y+Ht/J,yt=((ft-X)*P-(pt-xt)*Ht)/(Pt*P-te*Ht);Gt=X+Pt*yt-dt.x,bt=xt+te*yt-dt.y;let et=Gt*Gt+bt*bt;if(et<=2)return new Mt(Gt,bt);Ot=Math.sqrt(et/2)}else{let W=!1;Pt>Number.EPSILON?Ht>Number.EPSILON&&(W=!0):Pt<-Number.EPSILON?Ht<-Number.EPSILON&&(W=!0):Math.sign(te)===Math.sign(P)&&(W=!0),W?(Gt=-te,bt=Pt,Ot=Math.sqrt(w)):(Gt=Pt,bt=te,Ot=Math.sqrt(w/2))}return new Mt(Gt/Ot,bt/Ot)}let vt=[];for(let dt=0,wt=G.length,N=wt-1,Gt=dt+1;dt<wt;dt++,N++,Gt++)N===wt&&(N=0),Gt===wt&&(Gt=0),vt[dt]=j(G[dt],G[N],G[Gt]);let ht=[],Wt,ce=vt.concat();for(let dt=0,wt=B.length;dt<wt;dt++){let N=B[dt];Wt=[];for(let Gt=0,bt=N.length,Ot=bt-1,Pt=Gt+1;Gt<bt;Gt++,Ot++,Pt++)Ot===bt&&(Ot=0),Pt===bt&&(Pt=0),Wt[Gt]=j(N[Gt],N[Ot],N[Pt]);ht.push(Wt),ce=ce.concat(Wt)}for(let dt=0;dt<x;dt++){let wt=dt/x,N=d*Math.cos(wt*Math.PI/2),Gt=g*Math.sin(wt*Math.PI/2)+y;for(let bt=0,Ot=G.length;bt<Ot;bt++){let Pt=Z(G[bt],vt[bt],Gt);_t(Pt.x,Pt.y,-N)}for(let bt=0,Ot=B.length;bt<Ot;bt++){let Pt=B[bt];Wt=ht[bt];for(let te=0,Ht=Pt.length;te<Ht;te++){let P=Z(Pt[te],Wt[te],Gt);_t(P.x,P.y,-N)}}}let Ee=g+y;for(let dt=0;dt<q;dt++){let wt=f?Z(S[dt],ce[dt],Ee):S[dt];E?(I.copy(V.normals[0]).multiplyScalar(wt.x),D.copy(V.binormals[0]).multiplyScalar(wt.y),O.copy(b[0]).add(I).add(D),_t(O.x,O.y,O.z)):_t(wt.x,wt.y,0)}for(let dt=1;dt<=h;dt++)for(let wt=0;wt<q;wt++){let N=f?Z(S[wt],ce[wt],Ee):S[wt];E?(I.copy(V.normals[dt]).multiplyScalar(N.x),D.copy(V.binormals[dt]).multiplyScalar(N.y),O.copy(b[dt]).add(I).add(D),_t(O.x,O.y,O.z)):_t(N.x,N.y,u/h*dt)}for(let dt=x-1;dt>=0;dt--){let wt=dt/x,N=d*Math.cos(wt*Math.PI/2),Gt=g*Math.sin(wt*Math.PI/2)+y;for(let bt=0,Ot=G.length;bt<Ot;bt++){let Pt=Z(G[bt],vt[bt],Gt);_t(Pt.x,Pt.y,u+N)}for(let bt=0,Ot=B.length;bt<Ot;bt++){let Pt=B[bt];Wt=ht[bt];for(let te=0,Ht=Pt.length;te<Ht;te++){let P=Z(Pt[te],Wt[te],Gt);E?_t(P.x,P.y+b[h-1].y,b[h-1].x+N):_t(P.x,P.y,u+N)}}}lt(),St();function lt(){let dt=s.length/3;if(f){let wt=0,N=q*wt;for(let Gt=0;Gt<mt;Gt++){let bt=F[Gt];$t(bt[2]+N,bt[1]+N,bt[0]+N)}wt=h+x*2,N=q*wt;for(let Gt=0;Gt<mt;Gt++){let bt=F[Gt];$t(bt[0]+N,bt[1]+N,bt[2]+N)}}else{for(let wt=0;wt<mt;wt++){let N=F[wt];$t(N[2],N[1],N[0])}for(let wt=0;wt<mt;wt++){let N=F[wt];$t(N[0]+q*h,N[1]+q*h,N[2]+q*h)}}i.addGroup(dt,s.length/3-dt,0)}function St(){let dt=s.length/3,wt=0;Zt(G,wt),wt+=G.length;for(let N=0,Gt=B.length;N<Gt;N++){let bt=B[N];Zt(bt,wt),wt+=bt.length}i.addGroup(dt,s.length/3-dt,1)}function Zt(dt,wt){let N=dt.length;for(;--N>=0;){let Gt=N,bt=N-1;bt<0&&(bt=dt.length-1);for(let Ot=0,Pt=h+x*2;Ot<Pt;Ot++){let te=q*Ot,Ht=q*(Ot+1),P=wt+Gt+te,w=wt+bt+te,Q=wt+bt+Ht,W=wt+Gt+Ht;ae(P,w,Q,W)}}}function _t(dt,wt,N){c.push(dt),c.push(wt),c.push(N)}function $t(dt,wt,N){Xt(dt),Xt(wt),Xt(N);let Gt=s.length/3,bt=T.generateTopUV(i,s,Gt-3,Gt-2,Gt-1);le(bt[0]),le(bt[1]),le(bt[2])}function ae(dt,wt,N,Gt){Xt(dt),Xt(wt),Xt(Gt),Xt(wt),Xt(N),Xt(Gt);let bt=s.length/3,Ot=T.generateSideWallUV(i,s,bt-6,bt-3,bt-2,bt-1);le(Ot[0]),le(Ot[1]),le(Ot[3]),le(Ot[1]),le(Ot[2]),le(Ot[3])}function Xt(dt){s.push(c[dt*3+0]),s.push(c[dt*3+1]),s.push(c[dt*3+2])}function le(dt){r.push(dt.x),r.push(dt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return dy(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ql[s.type]().fromJSON(s)),new n(i,t.options)}},fy={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],h=t[s*3+1];return[new Mt(r,o),new Mt(a,c),new Mt(l,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],h=t[i*3+1],u=t[i*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],y=t[r*3],x=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Mt(o,1-c),new Mt(l,1-u),new Mt(f,1-g),new Mt(y,1-m)]:[new Mt(a,1-c),new Mt(h,1-u),new Mt(d,1-g),new Mt(x,1-m)]}};function dy(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Fa=class n extends eh{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var yo=class n extends Fe{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,f=(e-t)/s,d=new U,g=new Mt;for(let y=0;y<=s;y++){for(let x=0;x<=i;x++){let m=r+x/i*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let y=0;y<s;y++){let x=y*(i+1);for(let m=0;m<i;m++){let T=m+x,b=T,E=T+i+1,V=T+i+2,D=T+1;a.push(b,E,D),a.push(E,V,D)}}this.setIndex(a),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(l,3)),this.setAttribute("uv",new de(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var hn=class n extends Fe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new U,f=new U,d=[],g=[],y=[],x=[];for(let m=0;m<=i;m++){let T=[],b=m/i,E=0;m===0&&o===0?E=.5/e:m===i&&c===Math.PI&&(E=-.5/e);for(let V=0;V<=e;V++){let D=V/e;u.x=-t*Math.cos(s+D*r)*Math.sin(o+b*a),u.y=t*Math.cos(o+b*a),u.z=t*Math.sin(s+D*r)*Math.sin(o+b*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),x.push(D+E,1-b),T.push(l++)}h.push(T)}for(let m=0;m<i;m++)for(let T=0;T<e;T++){let b=h[m][T+1],E=h[m][T],V=h[m+1][T],D=h[m+1][T+1];(m!==0||o>0)&&d.push(b,E,D),(m!==i-1||c<Math.PI)&&d.push(E,V,D)}this.setIndex(d),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(y,3)),this.setAttribute("uv",new de(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ws=class n extends Fe{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new U,u=new U,f=new U;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){let y=g/s*r,x=d/i*Math.PI*2;u.x=(t+e*Math.cos(x))*Math.cos(y),u.y=(t+e*Math.cos(x))*Math.sin(y),u.z=e*Math.sin(x),a.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){let y=(s+1)*d+g-1,x=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,T=(s+1)*d+g;o.push(y,x,T),o.push(x,m,T)}this.setIndex(o),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Me=class extends Oi{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kf,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=_h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ua(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function py(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var vr=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},sh=class extends vr{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xu,endingEnd:xu}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case _u:r=t,a=2*e-i;break;case yu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case _u:o=t,c=2*i-e;break;case yu:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-e)/(s-e),y=g*g,x=y*g,m=-f*x+2*f*y-f*g,T=(1+f)*x+(-1.5-2*f)*y+(-.5+f)*g+1,b=(-1-d)*x+(1.5+d)*y+.5*g,E=d*x-d*y;for(let V=0;V!==a;++V)r[V]=m*o[h+V]+T*o[l+V]+b*o[c+V]+E*o[u+V];return r}},rh=class extends vr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(i-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},oh=class extends vr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},si=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ua(e,this.TimeBufferType),this.values=ua(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ua(t.times,Array),values:ua(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new oh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new rh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new sh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case xa:e=this.InterpolantFactoryMethodDiscrete;break;case Pl:e=this.InterpolantFactoryMethodLinear;break;case dc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xa;case this.InterpolantFactoryMethodLinear:return Pl;case this.InterpolantFactoryMethodSmooth:return dc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&py(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===dc,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let y=e[u+g];if(y!==e[f+g]||y!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=Pl;var Ts=class extends si{constructor(t,e,i){super(t,e,i)}};Ts.prototype.ValueTypeName="bool";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=xa;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var ah=class extends si{};ah.prototype.ValueTypeName="color";var ch=class extends si{};ch.prototype.ValueTypeName="number";var lh=class extends vr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)ii.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ba=class extends si{InterpolantFactoryMethodLinear(t){return new lh(this.times,this.values,this.getValueSize(),t)}};Ba.prototype.ValueTypeName="quaternion";Ba.prototype.InterpolantFactoryMethodSmooth=void 0;var As=class extends si{constructor(t,e,i){super(t,e,i)}};As.prototype.ValueTypeName="string";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=xa;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;var hh=class extends si{};hh.prototype.ValueTypeName="vector";var Ef={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},uh=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},my=new uh,Mo=class{constructor(t){this.manager=t!==void 0?t:my,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Mo.DEFAULT_MATERIAL_NAME="__DEFAULT";var fh=class extends Mo{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Ef.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=ro("img");function c(){h(),Ef.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var vo=class extends Mo{constructor(t){super(t)}load(t,e,i,s){let r=new yn,o=new fh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}},Eo=class extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new re(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},bo=class extends Eo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Wc=new Be,bf=new U,Sf=new U,za=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ao,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;bf.setFromMatrixPosition(t.matrixWorld),e.position.copy(bf),Sf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sf),e.updateMatrixWorld(),Wc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var wf=new Be,qr=new U,Xc=new U,dh=class extends za{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Mt(4,2),this._viewportCount=6,this._viewports=[new Ue(2,1,1,1),new Ue(0,1,1,1),new Ue(3,1,1,1),new Ue(1,1,1,1),new Ue(3,0,1,1),new Ue(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),qr.setFromMatrixPosition(t.matrixWorld),i.position.copy(qr),Xc.copy(i.position),Xc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Xc),i.updateMatrixWorld(),s.makeTranslation(-qr.x,-qr.y,-qr.z),wf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wf)}},So=class extends Eo{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new dh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},ph=class extends za{constructor(){super(new wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wo=class extends Eo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new ph}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var To=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Tf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Tf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Tf(){return performance.now()}var Rh="\\[\\]\\.:\\/",gy=new RegExp("["+Rh+"]","g"),Ch="[^"+Rh+"]",xy="[^"+Rh.replace("\\.","")+"]",_y=/((?:WC+[\/:])*)/.source.replace("WC",Ch),yy=/(WCOD+)?/.source.replace("WCOD",xy),My=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ch),vy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ch),Ey=new RegExp("^"+_y+yy+My+vy+"$"),by=["material","materials","bones","map"],mh=class{constructor(t,e,i){let s=i||Ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ve=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(gy,"")}static parseTrackName(t){let e=Ey.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);by.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ve.Composite=mh;Ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ve.prototype.GetterByBindingType=[Ve.prototype._getValue_direct,Ve.prototype._getValue_array,Ve.prototype._getValue_arrayElement,Ve.prototype._getValue_toArray];Ve.prototype.SetterByBindingTypeAndVersioning=[[Ve.prototype._setValue_direct,Ve.prototype._setValue_direct_setNeedsUpdate,Ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_array,Ve.prototype._setValue_array_setNeedsUpdate,Ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_arrayElement,Ve.prototype._setValue_arrayElement_setNeedsUpdate,Ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_fromArray,Ve.prototype._setValue_fromArray_setNeedsUpdate,Ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var y1=new Float32Array(1);var Af=new Be,Er=class{constructor(t,e,i=0,s=1/0){this.ray=new Es(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new oo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Af.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Af),this}intersectObject(t,e=!0,i=[]){return gh(t,this,i,e),i.sort(Rf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)gh(t[s],this,i,e);return i.sort(Rf),i}};function Rf(n,t){return n.distance-t.distance}function gh(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)gh(r[o],t,e,!0)}}var Rs=class{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(an(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ha=class extends Ui{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xh}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xh);var nd={type:"change"},Lh={type:"start"},sd={type:"end"},Ya=new Es,id=new ti,Sy=Math.cos(70*Gf.DEG2RAD),sn=new U,Dn=2*Math.PI,Ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ih=1e-6,qa=class extends Ha{constructor(t,e=null){super(t,e),this.state=Ne.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Cs.ROTATE,MIDDLE:Cs.DOLLY,RIGHT:Cs.PAN},this.touches={ONE:xi.ROTATE,TWO:xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new ii,this._lastTargetPosition=new U,this._quat=new ii().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Rs,this._sphericalDelta=new Rs,this._scale=1,this._panOffset=new U,this._rotateStart=new Mt,this._rotateEnd=new Mt,this._rotateDelta=new Mt,this._panStart=new Mt,this._panEnd=new Mt,this._panDelta=new Mt,this._dollyStart=new Mt,this._dollyEnd=new Mt,this._dollyDelta=new Mt,this._dollyDirection=new U,this._mouse=new Mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ty.bind(this),this._onPointerDown=wy.bind(this),this._onPointerUp=Ay.bind(this),this._onContextMenu=Uy.bind(this),this._onMouseWheel=Py.bind(this),this._onKeyDown=Iy.bind(this),this._onTouchStart=Ly.bind(this),this._onTouchMove=Dy.bind(this),this._onMouseDown=Ry.bind(this),this._onMouseMove=Cy.bind(this),this._interceptControlDown=Ny.bind(this),this._interceptControlUp=Oy.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(nd),this.update(),this.state=Ne.NONE}update(t=null){let e=this.object.position;sn.copy(e).sub(this.target),sn.applyQuaternion(this._quat),this._spherical.setFromVector3(sn),this.autoRotate&&this.state===Ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Dn:i>Math.PI&&(i-=Dn),s<-Math.PI?s+=Dn:s>Math.PI&&(s-=Dn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(sn.setFromSpherical(this._spherical),sn.applyQuaternion(this._quatInverse),e.copy(this.target).add(sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=sn.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new U(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ya.origin.copy(this.object.position),Ya.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ya.direction))<Sy?this.object.lookAt(this.target):(id.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ya.intersectPlane(id,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ih||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ih||this._lastTargetPosition.distanceToSquared(this.target)>Ih?(this.dispatchEvent(nd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Dn/60*this.autoRotateSpeed*t:Dn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){sn.setFromMatrixColumn(e,0),sn.multiplyScalar(-t),this._panOffset.add(sn)}_panUp(t,e){this.screenSpacePanning===!0?sn.setFromMatrixColumn(e,1):(sn.setFromMatrixColumn(e,0),sn.crossVectors(this.object.up,sn)),sn.multiplyScalar(t),this._panOffset.add(sn)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;sn.copy(s).sub(this.target);let r=sn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Dn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Dn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Dn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Dn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Dn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Dn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Dn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Dn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Mt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function wy(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Ty(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Ay(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sd),this.state=Ne.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Ry(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Cs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ne.DOLLY;break;case Cs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ne.ROTATE}break;case Cs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ne.PAN}break;default:this.state=Ne.NONE}this.state!==Ne.NONE&&this.dispatchEvent(Lh)}function Cy(n){switch(this.state){case Ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Py(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ne.NONE||(n.preventDefault(),this.dispatchEvent(Lh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(sd))}function Iy(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function Ly(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case xi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Ne.TOUCH_ROTATE;break;case xi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Ne.TOUCH_PAN;break;default:this.state=Ne.NONE}break;case 2:switch(this.touches.TWO){case xi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ne.TOUCH_DOLLY_PAN;break;case xi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ne.TOUCH_DOLLY_ROTATE;break;default:this.state=Ne.NONE}break;default:this.state=Ne.NONE}this.state!==Ne.NONE&&this.dispatchEvent(Lh)}function Dy(n){switch(this._trackPointer(n),this.state){case Ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ne.NONE}}function Uy(n){this.enabled!==!1&&n.preventDefault()}function Ny(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Oy(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Za(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new Fe,l=0;for(let h=0;h<n.length;++h){let u=n[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0,u=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=n[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=rd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let y=0;y<o[h].length;++y)d.push(o[h][y][f]);let g=rd(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function rd(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){let h=n[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new fn(o,e,i),c=0;for(let l=0;l<n.length;++l){let h=n[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){let y=h.getComponent(f,g);a.setComponent(f+u,g,y)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Ps=16,Is=8,Uh=6;function ad(n){return()=>(n=n*1664525+1013904223>>>0,n/4294967296)}var Fy=n=>"#"+("00000"+n.toString(16)).slice(-6);function We(n,t){let e=Math.min(255,Math.max(0,(n>>16&255)*t)),i=Math.min(255,Math.max(0,(n>>8&255)*t)),s=Math.min(255,Math.max(0,(n&255)*t));return"rgb("+(e|0)+","+(i|0)+","+(s|0)+")"}var Qt={noise:(n,t)=>(e,i)=>{for(let s=0;s<16;s++)for(let r=0;r<16;r++)e.fillStyle=We(n,1-t/2+i()*t),e.fillRect(s,r,1,1)},grassTop:(n,t)=>{Qt.noise(11132046,.16)(n,t);for(let e=0;e<14;e++)n.fillStyle=We(9423992,.95+t()*.1),n.fillRect(t()*16|0,t()*16|0,1,1)},grassSide:(n,t)=>{Qt.dirt(n,t);for(let e=0;e<16;e++){let i=3+(t()*2.2|0);for(let s=0;s<i;s++)n.fillStyle=We(11132046,.9+t()*.15),n.fillRect(e,s,1,1)}},dirt:(n,t)=>{Qt.noise(12094050,.18)(n,t);for(let e=0;e<10;e++)n.fillStyle=We(10121296,1),n.fillRect(t()*16|0,t()*16|0,1,1)},stone:(n,t)=>{Qt.noise(11842232,.12)(n,t);for(let e=0;e<6;e++){n.fillStyle=We(10263202,1);let i=t()*14|0,s=t()*16|0;n.fillRect(i,s,2+(t()*3|0),1)}},sand:(n,t)=>Qt.noise(15983286,.1)(n,t),pathTop:(n,t)=>{Qt.noise(15324068,.14)(n,t);for(let e=0;e<12;e++)n.fillStyle=We(13810058,1),n.fillRect(t()*16|0,t()*16|0,1,1)},pathSide:(n,t)=>{Qt.dirt(n,t),n.fillStyle=We(15324068,1),n.fillRect(0,0,16,2)},snowTop:(n,t)=>Qt.noise(16514047,.05)(n,t),snowSide:(n,t)=>{Qt.stone(n,t);for(let e=0;e<16;e++){let i=3+(t()*3|0);n.fillStyle=We(16514047,.97+t()*.03),n.fillRect(e,0,1,i)}},logSide:(n,t)=>{for(let e=0;e<16;e++){let i=e%4===0?8215104:10121298;for(let s=0;s<16;s++)n.fillStyle=We(i,.9+t()*.2),n.fillRect(e,s,1,1)}},logTop:(n,t)=>{Qt.noise(14267267,.08)(n,t),n.strokeStyle=We(11569760,1),n.lineWidth=1,[6,3].forEach(e=>{n.strokeRect(8-e+.5,8-e+.5,e*2-1,e*2-1)}),n.strokeStyle=We(9071180,1),n.strokeRect(.5,.5,15,15)},leaves:n=>(t,e)=>{Qt.noise(n,.22)(t,e);for(let i=0;i<22;i++)t.fillStyle=We(n,.72),t.fillRect(e()*16|0,e()*16|0,1,1);for(let i=0;i<10;i++)t.fillStyle=We(n,1.12),t.fillRect(e()*16|0,e()*16|0,1,1)},water:(n,t)=>{Qt.noise(9425898,.08)(n,t);for(let e=0;e<7;e++)n.fillStyle="rgba(255,255,255,0.55)",n.fillRect(t()*13|0,t()*16|0,2+(t()*3|0),1)},birch:(n,t)=>{Qt.noise(16052454,.06)(n,t);for(let e=0;e<8;e++)n.fillStyle="#5a5050",n.fillRect(t()*14|0,t()*16|0,2+(t()*2|0),1)},cobble:(n,t)=>{Qt.noise(11052718,.1)(n,t),n.fillStyle=We(8684172,1);for(let e=0;e<16;e+=4){n.fillRect(0,e,16,1);for(let i=e/4%2*3;i<16;i+=6)n.fillRect(i,e,1,4)}},deep:(n,t)=>Qt.noise(9341592,.16)(n,t),clay:(n,t)=>{Qt.noise(12950138,.12)(n,t);for(let e=3;e<16;e+=5)n.fillStyle=We(11765610,1),n.fillRect(0,e,16,1)},gravel:(n,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++)n.fillStyle=We([12433068,11051414,13814720][t()*3|0],1),n.fillRect(e,i,1,1)},planks:(n,t)=>{for(let e=0;e<16;e++){let i=e%4===3;for(let s=0;s<16;s++)n.fillStyle=i?"#9a7254":We(13936760,.92+t()*.12),n.fillRect(s,e,1,1)}for(let e=0;e<16;e+=4)n.fillStyle="#9a7254",n.fillRect(e*3%16,e,1,3)},mossy:(n,t)=>{Qt.cobble(n,t);for(let e=0;e<40;e++)n.fillStyle=We(9423992,.9+t()*.2),n.fillRect(t()*16|0,t()*16|0,1,1)},shingle:(n,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=e>>2,r=e%4===3||(i+s*4)%8===0;n.fillStyle=We(16777215,r?.78:.94+t()*.06),n.fillRect(i,e,1,1)}},plaster:(n,t)=>Qt.noise(16777215,.07)(n,t),plankGrey:(n,t)=>{for(let e=0;e<16;e++){let i=e%4===3;for(let s=0;s<16;s++)n.fillStyle=We(16777215,i?.72:.9+t()*.1),n.fillRect(s,e,1,1)}},glass:(n,t)=>{n.fillStyle="#d8f1fa",n.fillRect(0,0,16,16),n.fillStyle="#ffffff",n.fillRect(3,3,1,4),n.fillRect(4,3,1,2),n.fillRect(10,9,1,3),n.fillStyle="#bcd9e6",n.fillRect(0,0,16,1),n.fillRect(0,15,16,1),n.fillRect(0,0,1,16),n.fillRect(15,0,1,16),n.fillRect(7,0,2,16),n.fillRect(0,7,16,2)},bricks:(n,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=e%4===3||(i+(e>>2)%2*4)%8===7;n.fillStyle=s?"#e9e2d6":We(16777215,.86+t()*.08),n.fillRect(i,e,1,1)}},stoneBrick:(n,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=e%8===7||(i+(e>>3)*8)%16===15;n.fillStyle=s?"#8c8a94":We(11973820,.9+t()*.12),n.fillRect(i,e,1,1)}},farmland:(n,t)=>{Qt.noise(8018496,.14)(n,t);for(let e=1;e<16;e+=4)n.fillStyle="#5e4430",n.fillRect(0,e,16,1)},sprucePlank:(n,t)=>{for(let e=0;e<16;e++){let i=e%4===3;for(let s=0;s<16;s++)n.fillStyle=i?"#5e4430":We(9069640,.9+t()*.12),n.fillRect(s,e,1,1)}for(let e=0;e<16;e+=4)n.fillStyle="#5e4430",n.fillRect(e*5%16,e,1,3)},wheat:(n,t)=>{for(let e=1;e<15;e+=2){let i=9+(t()*5|0);n.fillStyle="#c9b45a",n.fillRect(e,16-i,1,i),n.fillStyle="#f2d36b",n.fillRect(e,16-i,1,4)}},carrot:(n,t)=>{for(let e=2;e<14;e+=3)n.fillStyle="#6faa5e",n.fillRect(e,7,1,6),n.fillRect(e+1,8,1,3),n.fillStyle="#f2963a",n.fillRect(e,13,2,3)},sprout:(n,t)=>{for(let e=1;e<15;e+=3)n.fillStyle="#7fc46a",n.fillRect(e+1,10,1,6),n.fillRect(e,10,3,1),n.fillRect(e+2,12,1,1)},tuft:(n,t)=>{for(let e=1;e<15;e+=2){let i=5+(t()*7|0);n.fillStyle=We(9423992,.85+t()*.25),n.fillRect(e,16-i,1,i)}},flower:n=>(t,e)=>{t.fillStyle="#6faa5e",t.fillRect(7,8,2,8),t.fillRect(5,11,2,1),t.fillRect(9,13,2,1),t.fillStyle=Fy(n),t.fillRect(6,4,4,3),t.fillRect(5,5,6,1),t.fillStyle="#fff6b0",t.fillRect(7,5,2,1)},reed:(n,t)=>{n.fillStyle="#7cb86f";for(let e=3;e<14;e+=3)n.fillRect(e,2+(t()*4|0),1,14);n.fillStyle="#a77a52",n.fillRect(6,2,2,4)},lily:(n,t)=>{n.fillStyle="#84c784",n.beginPath(),n.arc(8,8,6.5,.3,Math.PI*2-.3),n.lineTo(8,8),n.fill(),n.fillStyle="#ffb6c1",n.fillRect(9,6,2,2)}},ut={GRASS_TOP:0,GRASS_SIDE:1,DIRT:2,STONE:3,SAND:4,PATH_TOP:5,PATH_SIDE:6,SNOW_TOP:7,SNOW_SIDE:8,LOG:9,LOG_TOP:10,LEAF_G:11,LEAF_M:12,LEAF_L:13,LEAF_P:14,WATER:15,BIRCH:16,COBBLE:17,DEEP:18,CLAY:19,GRAVEL:20,PLANKS:21,MOSSY:22,LEAF_T:23,TUFT:24,FL_PINK:25,FL_WHITE:26,FL_YELLOW:27,FL_BLUE:28,FL_LAV:29,REED:30,LILY:31,SHINGLE:32,PLASTER:33,PLANK_GREY:34,GLASS:35,BRICKS:36,STONE_BRICK:37,FARMLAND:38,SPRUCE_PLANK:39,WHEAT:40,CARROT:41,SPROUT:42},cd=[Qt.grassTop,Qt.grassSide,Qt.dirt,Qt.stone,Qt.sand,Qt.pathTop,Qt.pathSide,Qt.snowTop,Qt.snowSide,Qt.logSide,Qt.logTop,Qt.leaves(8834168),Qt.leaves(8178084),Qt.leaves(11196796),Qt.leaves(16167880),Qt.water,Qt.birch,Qt.cobble,Qt.deep,Qt.clay,Qt.gravel,Qt.planks,Qt.mossy,Qt.leaves(7320465),Qt.tuft,Qt.flower(16752575),Qt.flower(16777215),Qt.flower(16769658),Qt.flower(10473471),Qt.flower(13809919),Qt.reed,Qt.lily,Qt.shingle,Qt.plaster,Qt.plankGrey,Qt.glass,Qt.bricks,Qt.stoneBrick,Qt.farmland,Qt.sprucePlank,Qt.wheat,Qt.carrot,Qt.sprout],ns=null;function By(){if(ns)return ns;let n=document.createElement("canvas");n.width=Ps*Is,n.height=Ps*Uh;let t=n.getContext("2d");return cd.forEach((e,i)=>{t.save(),t.translate(i%Is*Ps,Math.floor(i/Is)*Ps),t.beginPath(),t.rect(0,0,Ps,Ps),t.clip(),e(t,ad(101+i*7)),t.restore()}),ns=new ln(n),ns.magFilter=$e,ns.minFilter=$e,ns.generateMipmaps=!1,ns.colorSpace=Ie,ns}var Dh=new Map;function ri(n){if(Dh.has(n))return Dh.get(n);let t=document.createElement("canvas");t.width=t.height=Ps,cd[n](t.getContext("2d"),ad(101+n*7));let e=new ln(t);return e.magFilter=$e,e.minFilter=$e,e.generateMipmaps=!1,e.wrapS=e.wrapT=no,e.colorSpace=Ie,Dh.set(n,e),e}var od=n=>{let t=n%Is/Is,e=1-(Math.floor(n/Is)+1)/Uh,i=8e-4;return[t+i,e+i,t+1/Is-i,e+1/Uh-i]},Lt={AIR:0,GRASS:1,DIRT:2,STONE:3,SAND:4,PATH:5,SNOW:6,LOG:7,LEAF_G:8,LEAF_M:9,LEAF_L:10,LEAF_P:11,WATER:12,BIRCH:13,COBBLE:14,DEEP:15,CLAY:16,GRAVEL:17,LEAF_T:18,MOSSY:19,PLANKS:20,BRICK:21,FARM:22},qe=[];qe[Lt.GRASS]=[ut.GRASS_TOP,ut.GRASS_SIDE,ut.DIRT];qe[Lt.DIRT]=[ut.DIRT,ut.DIRT,ut.DIRT];qe[Lt.STONE]=[ut.STONE,ut.STONE,ut.STONE];qe[Lt.SAND]=[ut.SAND,ut.SAND,ut.SAND];qe[Lt.PATH]=[ut.PATH_TOP,ut.PATH_SIDE,ut.DIRT];qe[Lt.SNOW]=[ut.SNOW_TOP,ut.SNOW_SIDE,ut.STONE];qe[Lt.LOG]=[ut.LOG_TOP,ut.LOG,ut.LOG_TOP];qe[Lt.BIRCH]=[ut.LOG_TOP,ut.BIRCH,ut.LOG_TOP];qe[Lt.LEAF_G]=[ut.LEAF_G,ut.LEAF_G,ut.LEAF_G];qe[Lt.LEAF_M]=[ut.LEAF_M,ut.LEAF_M,ut.LEAF_M];qe[Lt.LEAF_L]=[ut.LEAF_L,ut.LEAF_L,ut.LEAF_L];qe[Lt.LEAF_P]=[ut.LEAF_P,ut.LEAF_P,ut.LEAF_P];qe[Lt.LEAF_T]=[ut.LEAF_T,ut.LEAF_T,ut.LEAF_T];qe[Lt.WATER]=[ut.WATER,ut.WATER,ut.WATER];qe[Lt.COBBLE]=[ut.COBBLE,ut.COBBLE,ut.COBBLE];qe[Lt.DEEP]=[ut.DEEP,ut.DEEP,ut.DEEP];qe[Lt.CLAY]=[ut.CLAY,ut.CLAY,ut.CLAY];qe[Lt.GRAVEL]=[ut.GRAVEL,ut.GRAVEL,ut.GRAVEL];qe[Lt.BRICK]=[ut.STONE_BRICK,ut.STONE_BRICK,ut.STONE_BRICK];qe[Lt.FARM]=[ut.FARMLAND,ut.DIRT,ut.DIRT];qe[Lt.MOSSY]=[ut.MOSSY,ut.MOSSY,ut.MOSSY];qe[Lt.PLANKS]=[ut.PLANKS,ut.PLANKS,ut.PLANKS];var Ka=n=>n===Lt.LEAF_G||n===Lt.LEAF_M||n===Lt.LEAF_L||n===Lt.LEAF_P||n===Lt.LEAF_T,Ro=class{constructor(t,e,i,s,r,o){Object.assign(this,{x0:t,y0:e,z0:i,sx:s,sy:r,sz:o}),this.d=new Uint8Array(s*r*o),this.plants=[],this.tint=new Map}idx(t,e,i){let s=t-this.x0,r=e-this.y0,o=i-this.z0;return s<0||r<0||o<0||s>=this.sx||r>=this.sy||o>=this.sz?-1:(r*this.sz+o)*this.sx+s}get(t,e,i){let s=this.idx(t,e,i);return s<0?0:this.d[s]}set(t,e,i,s){let r=this.idx(t,e,i);r>=0&&(this.d[r]=s)}top(t,e){for(let i=this.y0+this.sy-1;i>=this.y0;i--){let s=this.get(t,i,e);if(s&&s!==Lt.WATER)return i}return null}plant(t,e,i,s,r){this.plants.push([t,e,i,s,r||1])}build(t){let e={p:[],n:[],u:[],c:[]},i={p:[],n:[],u:[],c:[]},s=[{d:[1,0,0],v:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],s:1,b:.84},{d:[-1,0,0],v:[[0,0,1],[0,1,1],[0,1,0],[0,0,0]],s:1,b:.84},{d:[0,1,0],v:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],s:0,b:1},{d:[0,-1,0],v:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],s:2,b:.62},{d:[0,0,1],v:[[1,0,1],[1,1,1],[0,1,1],[0,0,1]],s:1,b:.92},{d:[0,0,-1],v:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],s:1,b:.76}],r=t==null?.88:t;for(let f=0;f<this.sy;f++)for(let d=0;d<this.sz;d++)for(let g=0;g<this.sx;g++){let y=this.d[(f*this.sz+d)*this.sx+g];if(!y)continue;let x=this.x0+g,m=this.y0+f,T=this.z0+d,b=qe[y];if(!b)continue;let E=this.tint.get((f*this.sz+d)*this.sx+g)||1;s.forEach(V=>{let D=this.get(x+V.d[0],m+V.d[1],T+V.d[2]);if(y===Lt.WATER){if(D!==Lt.AIR)return}else if(D&&D!==Lt.WATER&&!(Ka(D)&&!Ka(y)))return;if(Ka(y)&&Ka(D))return;let I=y===Lt.WATER?i:e,[O,A,S,B]=od(b[V.s]),tt=V.v.map(([Z,q,mt])=>[x+Z,m+(y===Lt.WATER&&q===1?r:q),T+mt]),F=V.b*E,G=V.d[1]!==0?[[O,A],[S,A],[S,B],[O,B]]:[[O,A],[O,B],[S,B],[S,A]];[0,1,2,0,2,3].forEach(Z=>{I.p.push(...tt[Z]),I.n.push(...V.d),I.u.push(...G[Z]),I.c.push(F,F,F)})})}let o=f=>{let d=new Fe;return d.setAttribute("position",new de(f.p,3)),d.setAttribute("normal",new de(f.n,3)),d.setAttribute("uv",new de(f.u,2)),d.setAttribute("color",new de(f.c,3)),d},a=By(),c=new At(o(e),new Me({map:a,vertexColors:!0}));c.castShadow=!0,c.receiveShadow=!0,c.userData.keepBatch=!0;let l=new At(o(i),new Me({map:a,vertexColors:!0,transparent:!0,opacity:.8,depthWrite:!1}));l.receiveShadow=!0,l.userData.keepBatch=!0,l.renderOrder=1;let h={p:[],n:[],u:[],c:[]};this.plants.forEach(([f,d,g,y,x])=>{let[m,T,b,E]=od(y),V=.9*x,D=.45*x;[[[-D,-D],[D,D]],[[-D,D],[D,-D]]].forEach(([[I,O],[A,S]])=>{let B=[[f+I,d,g+O],[f+A,d,g+S],[f+A,d+V,g+S],[f+I,d+V,g+O]],tt=[[m,T],[b,T],[b,E],[m,E]];[0,1,2,0,2,3].forEach(F=>{h.p.push(...B[F]),h.n.push(0,1,0),h.u.push(...tt[F]),h.c.push(1,1,1)})})});let u=new At(o(h),new Me({map:a,vertexColors:!0,alphaTest:.5,side:xn}));return u.userData.keepBatch=!0,{solid:c,water:l,plants:u}}};function wr(n,t,e,i,s,r){let o={oak:[Lt.LEAF_G,Lt.LEAF_L][r()*2|0],birch:Lt.LEAF_L,mint:Lt.LEAF_M,cherry:Lt.LEAF_P,pine:Lt.LEAF_T}[s]||Lt.LEAF_G,a=s==="birch"?Lt.BIRCH:Lt.LOG,c=(h,u,f,d)=>{n.get(h,u,f)||n.set(h,u,f,d)};if(s==="pine"){let h=6+(r()*3|0);for(let f=0;f<h;f++)n.set(t,e+f,i,Lt.LOG);let u=2;for(let f=2;f<=h;f++){let d=f===h?0:(h-f)%2===0?Math.max(1,u-1):u;for(let g=-d;g<=d;g++)for(let y=-d;y<=d;y++)Math.abs(g)+Math.abs(y)<=d+(d>1?0:1)&&!(g===0&&y===0&&f<h)&&c(t+g,e+f,i+y,o);f%2===0&&u>1&&f>h/2&&u--}c(t,e+h,i,o),c(t,e+h+1,i,o);return}let l=(s==="birch"?5:4)+(r()*2|0);for(let h=0;h<l;h++)n.set(t,e+h,i,a);for(let h=l-2;h<=l+1;h++){let u=h>=l?1:2;for(let f=-u;f<=u;f++)for(let d=-u;d<=u;d++)u===2&&Math.abs(f)===2&&Math.abs(d)===2&&r()<.75||h===l+1&&Math.abs(f)+Math.abs(d)>1||c(t+f,e+h,i+d,o)}}function ld(n,t,e,i){let s=n.attributes.uv,r=[[i,e],[i,e],[t,i],[t,i],[t,e],[t,e]];for(let o=0;o<6;o++)for(let a=0;a<4;a++){let c=o*4+a;s.setXY(c,s.getX(c)*r[o][0],s.getY(c)*r[o][1])}return s.needsUpdate=!0,n}var Tr=16,Co=n=>{if(typeof n=="number")return n;if(!n)return 16777215;if(n[0]==="#")return parseInt(n.length===4?n.slice(1).split("").map(e=>e+e).join(""):n.slice(1,7),16);let t=n.match(/(\d+)\D+(\d+)\D+(\d+)/);return t?+t[1]<<16|+t[2]<<8|+t[3]:16777215},_i=(n,t)=>{n=Co(n);let e=i=>Math.max(0,Math.min(255,Math.round(i*t)));return e(n>>16&255)<<16|e(n>>8&255)<<8|e(n&255)},is=(n,t,e)=>{let i=n*374761393+t*668265263+e*2147483647|0;return i=(i^i>>>13)*1274126177,((i^i>>>16)>>>0)/4294967296};function Hy(){let n=new Map,t=new Map,e=(s,r,o)=>s+","+r+","+o,i={S:n,G:t,put(s,r,o,a,c){s=Math.round(s),r=Math.round(r),o=Math.round(o),!(r<0)&&(c&&n.has(e(s,r,o))||((c?t:n).set(e(s,r,o),Co(a)),c||t.delete(e(s,r,o))))},del(s,r,o){n.delete(e(s,r,o)),t.delete(e(s,r,o))},has(s,r,o){return n.has(e(s,r,o))},each(s){for(let r=0;r<20;r++)for(let o=-2;o<Tr+2;o++)for(let a=-2;a<Tr+2;a++)s(a,r,o)},fill(s,r,o){i.each((a,c,l)=>{s(a+.5,c+.5,l+.5)&&i.put(a,c,l,typeof r=="function"?r(a,c,l):r,o)})},cuboid(s,r,o,a,c,l,h,u){for(let f=r;f<c;f++)for(let d=o;d<l;d++)for(let g=s;g<a;g++)i.put(g,f,d,typeof h=="function"?h(g,f,d):h,u)},cyl(s,r,o,a,c,l,h,u,f){h=h==null?o:h;for(let d=a;d<c;d++){let g=c-a<=1?o:o+(h-o)*(d-a)/(c-a-1);for(let y=-2;y<Tr+2;y++)for(let x=-2;x<Tr+2;x++){let m=Math.hypot(x+.5-s,y+.5-r);m<=g&&(!u||m>g-u)&&i.put(x,d,y,typeof l=="function"?l(x,d,y):l,f)}}},ell(s,r,o,a,c,l,h,u){i.fill((f,d,g)=>{let y=(f-s)/a,x=(d-r)/c,m=(g-o)/l;return y*y+x*x+m*m<=1&&(!u||u(f,d,g))},h)},log(s,r,o,a,c,l){for(let h=s;h<r;h++)for(let u=0;u<20;u++)for(let f=-2;f<Tr+2;f++)Math.hypot(u+.5-o,f+.5-a)<=c&&i.put(h,u,f,typeof l=="function"?l(h,u,f):l)},top(s,r){for(let o=19;o>=0;o--)if(i.has(s,o,r))return o;return-1},sprinkle(s,r,o,a){s.forEach(([c,l],h)=>{let u=r[h%r.length];if(!u)return;let f=-1;for(let d=0;d<(a||o||1);d++)for(let g=0;g<(o||1);g++)f=Math.max(f,i.top(c+g,l+d));for(let d=0;d<(a||o||1);d++)for(let g=0;g<(o||1);g++)i.put(c+g,f+1,l+d,u)})}};return i}var ot=8,Nh=[[4,5],[9,4],[6,9],[10,9],[3,8],[8,11],[11,6],[5,12]],hd={bowl(n,t){n.cyl(ot,ot,3.2,0,1,14930886),n.cyl(ot,ot,3.2,1,2,16777215),n.cyl(ot,ot,3.8,2,6,t.soup||"#f3d9a8",6.2),n.cyl(ot,ot,4.2,1,7,(e,i)=>i===6?16165309:_i(16777215,.93+i*.012),7.6,1.2),t.noodle&&n.fill((e,i,s)=>i>5&&i<6.9&&Math.hypot(e-ot,s-ot)<5.6&&(Math.floor(e)+Math.floor(s)*2)%5===0,t.noodle),n.sprinkle(Nh.slice(0,6),t.top||[],2,2),t.egg&&(n.cuboid(9,6,9,12,7,11,16777215),n.put(10,7,10,16761402))},pot(n,t){n.cyl(ot,ot,6.8,0,6,(e,i)=>i===5?10132136:9079448,6.8,1.1),n.cyl(ot,ot,6,0,1,7631999),n.cyl(ot,ot,5.8,1,5,t.soup||"#e8603f"),n.cuboid(0,4,7,1,5,9,7631999),n.cuboid(15,4,7,16,5,9,7631999),n.sprinkle(Nh,t.top||[],2,1)},plate(n,t){n.cyl(ot,ot,6.4,0,1,15260879),n.cyl(ot,ot,7.8,1,2,16777215),n.cyl(ot,ot,6.2,1,2,16183014),t.rice&&n.ell(t.main?5.5:ot,2,ot,t.main?3.6:5,2.8,t.main?4.2:4.6,(e,i,s)=>_i(t.rice,.94+is(e,i,s)*.1),(e,i)=>i>=2),t.sauce&&n.cyl(t.rice?10.5:ot,ot,t.rice?3.4:5.2,2,3,t.sauce),t.main&&(n.cuboid(8,2,5,13,4,11,t.main),n.cuboid(8,4,5,13,5,11,_i(t.main,1.2))),t.egg&&(n.cyl(4.5,11.5,2.4,2,3,16777215),n.put(4,3,11,16761402)),t.veg&&(n.cuboid(11,2,11,14,3,13,t.veg),n.put(12,3,12,_i(t.veg,.8))),n.sprinkle(Nh,t.dots||[],2,2)},bread(n){n.ell(ot,2.6,ot,7.2,2.6,2.8,15250538,(t,e)=>e>=0);for(let t=3;t<13;t++)for(let e=3;e<6;e++)for(let i=7;i<9;i++)n.del(t,e,i);for(let t=3;t<13;t++)n.put(t,3,7,["#ff8f7a","#7fc46a","#b5654a","#ffb3a3"][(t>>1)%4]),n.put(t,3,8,t%2?"#7fc46a":"#f6e0b8");[3,6,9,12].forEach(t=>{let e=n.top(t,6);n.put(t,e,6,13208126)})},xeo(n){n.fill((t,e,i)=>e<3&&i>=ot&&Math.hypot(t-ot,i-ot)<=7.2-(e>2?1:0),(t,e,i)=>Math.hypot(t-ot,i-ot)>6.3?14262842:e===2?16767338:16172618),[[5,"#ff9f8f"],[7,"#7fc46a"],[9,"#ffffff"],[11,"#7fc46a"]].forEach(([t,e])=>{n.put(t,0,7,e),n.put(t,1,7,e)})},rolls(n,t){n.cyl(ot,ot,7.6,0,1,16777215),[4,8,12].forEach(e=>n.log(2,14,2.6,e,1.7,(i,s,r)=>i===13||i===2?Co(t.edge):t.fill&&is(i,s,r)>.86?Co(t.fill[(i+s)%2]):_i(t.roll,.95+is(i,s,r)*.12)))},bun(n,t){n.ell(ot,0,ot,6.2,6,6.2,(e,i,s)=>i>4&&Math.hypot(e-ot,s-ot)<1.8?14204580:t.bun,(e,i)=>i>=0),n.cyl(ot,ot,5,0,1,14930886)},skewer(n,t){n.cuboid(0,3,7,16,4,8,12883572),(t.bits||[]).forEach((e,i)=>n.cuboid(2+i*3,1,5,4+i*3+i%2,6,10,(s,r)=>r===5?_i(e,1.2):e))},corn(n){n.log(2,13,2.8,ot,2.4,(t,e,i)=>(t+e+i)%2?16765803:15906874),n.cuboid(13,1,7,16,4,9,12883572),n.cuboid(5,0,3,13,1,6,8373354),n.cuboid(5,0,10,13,1,13,8373354),n.cuboid(6,1,4,11,2,5,6989914)},potato(n){n.ell(ot,2.4,ot,6.5,2.6,3.6,10111578,(t,e)=>e>=0);for(let t=4;t<13;t++)for(let e=7;e<10;e++){let i=n.top(t,e);n.put(t,i,e,16167770)}n.put(4,3,6,6961728),n.put(12,2,10,6961728)},sushi(n,t){[[2,4],[9,9]].forEach(([e,i])=>{n.cuboid(e,0,i,e+5,3,i+3,(s,r,o)=>_i(16777215,.93+is(s,r,o)*.08)),n.cuboid(e-1,3,i,e+6,4,i+3,t.fish||"#ff9f80"),n.cuboid(e,4,i,e+5,5,i+3,_i(t.fish||"#ff9f80",1.12)),n.cuboid(e+2,0,i-1,e+3,5,i+4,3820090),n.cuboid(e+2,5,i,e+3,6,i+3,3820090)})},onigiri(n){n.fill((t,e,i)=>e<11&&i>5&&i<11&&Math.abs(t-ot)<=(11.5-e)*.55,(t,e,i)=>_i(16777215,.94+is(t,e,i)*.07)),n.cuboid(5,0,5,11,4,12,3820090)},balls(n,t){n.cyl(ot,ot,7.4,0,1,16777215),[[4,6],[9,5],[12,10],[6,11],[9,9]].forEach(([e,i])=>{n.ell(e,2.6,i,2.3,2.1,2.3,t.ball||"#d99a4e",(s,r)=>r>=1),n.put(e,4,i,t.sauce||"#7a3f2c"),n.put(e-1,4,i,t.sauce||"#7a3f2c"),n.put(e,5,i,8373354)})},kimbap(n){n.cyl(ot,ot,7.4,0,1,16777215),[[4,5],[11,6],[7,11]].forEach(([t,e])=>{n.cyl(t,e,2.8,1,4,3095088),n.cyl(t,e,2.1,1,4,16777215),n.put(t,3,e,16765803),n.put(t-1,3,e,16748378),n.put(t,3,e-1,8373354)})},dumpling(n){[[4,5],[11,6],[7,11]].forEach(([t,e],i)=>{n.ell(t,.5,e,3.6,2.6,2.4,(s,r)=>r===0?14921834:r>=2&&(s+i)%2?15259320:16313560,(s,r)=>r>=0)})},pizza(n){n.fill((t,e,i)=>e<2&&i>2&&Math.abs(t-ot)<=(15-i)*.55,(t,e)=>e===1?16765803:15250538),n.cuboid(1,0,1,15,3,3,14260814),n.cuboid(2,3,1,14,4,3,15250538),[[6,5],[9,6],[7,9],[8,12]].forEach(([t,e])=>n.cuboid(t,2,e,t+2,3,e+2,14241850)),[[5,7],[10,9],[8,4]].forEach(([t,e])=>n.put(t,2,e,8373354))},burger(n){n.cyl(ot,ot,6.2,0,2,15246666),n.cyl(ot,ot,6.6,2,3,8373354),n.cyl(ot,ot,6.4,3,5,8011564),n.cuboid(2,5,2,14,6,14,16765803),n.cyl(ot,ot,5.6,6,7,15224895),n.ell(ot,7,ot,6.4,4.6,6.4,15246666,(t,e)=>e>=7),[[5,6],[9,5],[7,9],[10,9],[6,11]].forEach(([t,e])=>n.put(t,n.top(t,e)+1,e,16774102))},fries(n){[[4,6],[6,8],[8,6],[10,8],[5,9],[9,9],[7,7],[11,6]].forEach(([t,e],i)=>n.cuboid(t,4,e,t+1,11+i%3,e+1,(s,r)=>r>=10+i%3?15906874:16765803)),n.cyl(ot,ot,4.6,0,9,15224895,5.4),n.cuboid(6,3,12,10,6,13,16777215)},drumstick(n){n.ell(6,3.6,ot,4.8,3.6,3.8,(t,e)=>e>5?15250538:14260814,(t,e)=>e>=0),n.log(10,14,3,ot,1.1,16775406),n.ell(14.2,3.4,7,1.4,1.4,1.4,16775406),n.ell(14.2,3.4,9,1.4,1.4,1.4,16775406)},hotdog(n){n.ell(ot,2,ot,7.2,2.4,3.4,15250538,(t,e,i)=>e>=0&&!(e>2&&Math.abs(i-ot)<1.2)),n.log(0,16,3.2,ot,1.6,14241850);for(let t=2;t<14;t++)n.put(t,5,ot-1+(t>>1)%2,16765803)},flan(n){n.cyl(ot,ot,7.4,0,1,16777215),n.cyl(ot,ot,5.4,1,7,(t,e)=>e===6?9062954:16767114,4.2),[[4,8],[11,7],[8,4],[7,12]].forEach(([t,e])=>{n.put(t,5,e,9062954),n.put(t,4,e,9062954)})},glass(n,t){n.cyl(ot,ot,3.6,0,13,15267583,3.6,.9,!0),n.cyl(ot,ot,3.6,0,1,13165810);let e=1;(t.layers||[]).forEach(i=>{n.cyl(ot,ot,2.8,e,e+3,i),e+=3}),n.cyl(ot,ot,2.8,e,e+1,t.top||"#ffffff"),n.cuboid(9,6,8,10,16,9,16748464)},cone(n,t){n.cyl(ot,ot,.8,0,8,(e,i,s)=>(e+i+s)%2?15250538:14260814,3.4),n.ell(ot,10.5,ot,4.4,4,4.4,t.scoop||"#ffb6d0"),n.put(ot,15,ot,15224895),n.put(ot,14,ot,15224895)},cake(n){n.cyl(ot,ot,6.2,0,6,(t,e,i)=>Math.hypot(t+.5-ot,i+.5-ot)>5.3&&(e===2||e===4)?16752575:16774112),n.cyl(ot,ot,6.4,6,7,16777215);for(let t=0;t<8;t++){let e=t/8*Math.PI*2;n.put(ot+Math.cos(e)*5,7,ot+Math.sin(e)*5,16777215)}n.cuboid(7,7,7,9,9,9,15224895),n.put(8,9,8,8373354)},donut(n){n.fill((t,e,i)=>{let s=Math.hypot(t-ot,i-ot);return e<4&&(s-4.4)**2+(e-1.6)**2<=2.9**2},(t,e)=>e>=2?16752575:15250538),[[4,6,16777215],[11,6,10473471],[6,11,16765803],[11,10,16777215],[8,3,10473471]].forEach(([t,e,i])=>n.put(t,n.top(t,e)+1,e,i))},cookie(n){n.cyl(ot,ot,6.6,0,2,(t,e,i)=>_i(15250538,.95+is(t,e,i)*.1)),n.cyl(ot,ot,5,2,3,15250538),[[5,6],[9,5],[7,9],[11,9],[5,11],[9,12]].forEach(([t,e])=>n.put(t,n.top(t,e),e,6961706))},mochi(n){n.cuboid(1,0,3,15,1,13,14207160),[[5,9,16765414],[11,9,13495501],[8,5,16774880]].forEach(([t,e,i])=>n.ell(t,1,e,3.2,3,3.2,i,(s,r)=>r>=1))},cup(n,t){n.cyl(ot,ot,3.2,0,12,15792383,3.9,.9,!0),n.cyl(ot,ot,3.2,0,1,13690610),n.cyl(ot,ot,2.4,1,10,t.drink||"#d9b08a",3),t.cream&&n.cyl(ot,ot,3,10,12,16777215),t.boba&&[[6,7],[8,9],[10,8],[7,10],[9,6]].forEach(([e,i])=>n.put(e,1,i,3811882)),t.ice&&[[6,7],[9,9]].forEach(([e,i])=>n.cuboid(e,9,i,e+2,11,i+2,16777215,!0)),t.slice&&n.fill((e,i,s)=>e>11&&e<13&&Math.hypot(i-11,s-ot)<2.4,(e,i,s)=>Math.hypot(i-11,s-ot)>1.6?16777215:Co(t.slice)),n.cyl(ot,ot,4.2,12,13,14215410,4.2,.9,!0),n.cuboid(9,6,8,10,17,9,16748464)},coconut(n){n.ell(ot,4.6,ot,5.8,5,5.8,(t,e,i)=>is(t,e,i)>.85?6989914:8373354,(t,e)=>e>=0&&e<9),n.cyl(ot,ot,3.2,8,9,16775920),n.cuboid(9,8,8,10,14,9,16748464)},mug(n,t){n.cyl(ot-1,ot,4.2,0,9,16777215,4.2,1),n.cyl(ot-1,ot,4.2,0,1,15128780),n.cyl(ot-1,ot,3.2,1,8,t.drink||"#c98a4a"),n.cuboid(11,2,7,13,3,9,16777215),n.cuboid(11,6,7,13,7,9,16777215),n.cuboid(12,3,7,13,6,9,16777215),[[6,10],[8,12],[7,14]].forEach(([e,i])=>n.put(e,i,ot,16777215,!0))}},ky=[[[1,0,0],[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],.86],[[-1,0,0],[[0,0,1],[0,1,1],[0,1,0],[0,0,0]],.86],[[0,1,0],[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],1],[[0,-1,0],[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],.6],[[0,0,1],[[1,0,1],[1,1,1],[0,1,1],[0,0,1]],.93],[[0,0,-1],[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],.93]];function ud(n,t,e,i){let s=[],r=[],o=[],a=[],c=new re;n.forEach((h,u)=>{let[f,d,g]=u.split(",").map(Number),y=.94+is(f,d,g)*.1;ky.forEach(([x,m,T])=>{let b=f+x[0]+","+(d+x[1])+","+(g+x[2]);if(n.has(b)||t&&t.has(b))return;c.setHex(h,Ie);let E=s.length/3;m.forEach(([V,D,I])=>{s.push((f+V-ot)*e,(d+D)*e,(g+I-ot)*e),r.push(x[0],x[1],x[2]),o.push(c.r*T*y,c.g*T*y,c.b*T*y)}),a.push(E,E+1,E+2,E,E+2,E+3)})});let l=new Fe;return l.setAttribute("position",new de(s,3)),l.setAttribute("normal",new de(r,3)),l.setAttribute("color",new de(o,3)),l.setIndex(a),new At(l,i)}var Vy=new Me({vertexColors:!0}),Gy=new Me({vertexColors:!0,transparent:!0,opacity:.42,depthWrite:!1}),Oh={};function Bi(n,t,e){let i=n+JSON.stringify(t||{});if(!Oh[i]){let c=Hy();(hd[n]||hd.bowl)(c,t||{}),Oh[i]=c}let s=Oh[i],r=(e||.4)/Tr,o=new Jt,a=ud(s.S,null,r,Vy);if(a.castShadow=!0,o.add(a),s.G.size){let c=ud(s.G,s.S,r,Gy);c.renderOrder=2,o.add(c)}return o}var Wy={land:{W:320,H:236,houses:[[16,116],[52,116],[88,116],[124,116],[172,116],[208,116],[244,116],[16,150],[52,150],[192,23],[66,24],[88,150],[124,150],[16,186],[52,186],[88,186],[124,187],[180,152]],hall:[134,38],pond:[264,206],pondR:[8,4],hill:{x:160,y:46,w:216,h:74,r:12,height:3},ramp:{x:160,from:83,to:110.5},lot:{house:9,x0:172,y0:12,x1:258,y1:66,car:[226,54.4],swing:[186,40]},roads:[[8,110.5,312,110.5],[8,144.5,312,144.5],[8,180.5,206,180.5],[8,214.5,170,214.5],[46,110.5,46,214.5],[160,110.5,160,214.5],[64,70,258,70],[160,70,160,110.5]],river:[[292,30],[296,70],[292,110.5],[288,144.5],[282,175],[272,194]],mountains:[[-22,-32.5,5,11],[-8,-34.5,6,14],[8,-34.5,5.5,12],[22,-32,5,11],[33,-26,4.5,9]]},port:{W:200,H:360,houses:[[8,132],[8,184],[8,236],[8,288],[168,132],[168,184],[168,236],[168,288],[56,134],[132,51],[16,56],[88,134],[120,134],[56,186],[88,186],[120,186],[60,239],[116,239]],hall:[68,30],pond:[100,318],pondR:[6.5,3.6],hill:{x:100,y:52,w:184,h:96,r:12,height:3},ramp:{x:100,from:100,to:124.5},lot:{house:9,x0:110,y0:40,x1:186,y1:90,car:[166,81.6],swing:[122,66]},roads:[[44.5,124.5,155.5,124.5],[44.5,124.5,44.5,330],[155.5,124.5,155.5,312],[44.5,162.5,155.5,162.5],[44.5,214.5,155.5,214.5],[44.5,274.5,155.5,274.5],[16,94,186,94],[100,94,100,124.5]],river:[[206,24],[210,120],[206,230],[200,300],[170,330],[128,322]],mountains:[[-16,-48.5,4.5,10],[-2,-49.5,5,12],[12,-49,4.5,11],[24,-45.5,4,9]]}},Oe,tn,Rn,se,Hn,Mn,Os,Kn,qn,Us,Cr,Pn,zn;function Md(n){Oe=Wy[n];let t=(o,a)=>[(o-Oe.W/2)/4,(a-Oe.H/2)/4];tn=Oe.houses.map(([o,a])=>t(o+12,a+11)),Rn=t(Oe.hall[0],Oe.hall[1]);let e=t(Oe.pond[0],Oe.pond[1]);se={x:e[0],z:e[1],rx:Oe.pondR[0],rz:Oe.pondR[1]},Hn=Oe.roads.map(([o,a,c,l])=>t(o,a).concat(t(c,l)));let i=t(Oe.hill.x,Oe.hill.y);Os={x:i[0],z:i[1],hw:Oe.hill.w/8,hd:Oe.hill.h/8,r:Oe.hill.r/4,h:Oe.hill.height},Kn={x:t(Oe.ramp.x,0)[0],z0:t(0,Oe.ramp.from)[1],z1:t(0,Oe.ramp.to)[1],hw:1.1},qn=Oe.river.map(([o,a])=>{let c=t(o,a);return{x:c[0],z:c[1]}}),Us=Oe.mountains.map(o=>[o[0],o[1],o[2]*1.25,o[3]*1.5]);{let o=qn[0],a=0,c=1e9;Us.forEach(([g,y],x)=>{let m=Math.hypot(g-o.x,y-o.z);m<c&&(c=m,a=x)});let l=Us[a],h=qn[1].x-l[0],u=qn[1].z-l[1],f=Math.hypot(h,u)||1;zn={i:a,x:l[0],z:l[1],r:l[2],h:l[3],dx:h/f,dz:u/f},qn[0]={x:l[0]+zn.dx*l[2]*.45,z:l[1]+zn.dz*l[2]*.45};let d=qn[qn.length-1];Math.hypot(d.x-se.x,d.z-se.z)<22&&qn.push({x:se.x+(d.x-se.x)*.25,z:se.z+(d.z-se.z)*.25})}if(Cr=tn.map((o,a)=>Oe.faces&&Oe.faces[a]||0),Pn=null,Oe.lot){let o=Oe.lot,a=t(o.x0,o.y0),c=t(o.x1,o.y1);Pn={house:o.house,x0:a[0],z0:a[1],x1:c[0],z1:c[1],car:t(o.car[0],o.car[1]),swing:t(o.swing[0],o.swing[1])}}let s=Oe.W/8+11,r=Oe.H/8+11;Mn={a:s,b:r,n:2.6,w:s*2,d:r*2}}function tc(n,t){let e=Os,i=Math.abs(n-e.x)-(e.hw-e.r),s=Math.abs(t-e.z)-(e.hd-e.r);return Math.hypot(Math.max(i,0),Math.max(s,0))+Math.min(Math.max(i,s),0)-e.r}var Io=(n,t)=>Math.abs(n-Kn.x)<Kn.hw&&t>=Kn.z0-.4&&t<=Kn.z1;function Cn(n,t){return tc(n,t)<=0?Os.h:Io(n,t)?Os.h*Math.max(0,Math.min(1,1-(t-Kn.z0)/(Kn.z1-Kn.z0))):0}var Fh=(n,t,e)=>{let i=tc(n,t);return i>-.5-(e||0)&&i<.9+(e||0)&&!Io(n,t)};function Ns(n,t){let e=1e9;for(let i=1;i<qn.length;i++){let s=qn[i-1],r=qn[i],o=r.x-s.x,a=r.z-s.z,c=o*o+a*a,l=Math.max(0,Math.min(1,((n-s.x)*o+(t-s.z)*a)/(c||1)));e=Math.min(e,Math.hypot(n-(s.x+o*l),t-(s.z+a*l)))}return e}var fd=(n,t,e)=>!!Pn&&n>Pn.x0-(e||0)&&n<Pn.x1+(e||0)&&t>Pn.z0-(e||0)&&t<Pn.z1+(e||0),vd=3,Xy=2.1,Yy=vd,yi=Yy/2;function Pr(n,t){let e=Mn,i=Math.abs(Math.cos(n)),s=Math.abs(Math.sin(n));return Math.pow(Math.pow(i/e.a,e.n)+Math.pow(s/e.b,e.n),-1/e.n)*(1+.035*Math.sin(3*n+.7)+.025*Math.sin(5*n+2.1)+.015*Math.sin(8*n))*(t||1)}function Ds(n,t,e){return Math.hypot(n,t)<Pr(Math.atan2(t,n))-(e||0)}Md("land");var Mi={grass:12576420,grassSide:10474377,dirt:13214334,dirt2:11569768,road:15983293,wall:16774888,wall2:15785156,door:12882799,frame:15323828,trunk:11042910,leaf:[10147472,8834176,11460768],water:9425898,sand:15983549,lily:8701828,roof:{pink:16165309,peach:16368540,blue:10473444,lav:13219054,mint:10738109,yellow:16111752,hall:15834032},flower:[16758465,16777215,16375946,14273008,16763304]},Bh=new Map;function ue(n,t){let e=n+JSON.stringify(t||{});if(!Bh.has(e)){let i=Object.assign({color:n},t||{});!("map"in i)&&!i.noMap&&(i.map=ri(ut.PLASTER)),delete i.noMap,Bh.set(e,new Me(i))}return Bh.get(e)}var zh=new Map;function Xe(n,t,e){let i=n+":"+(t==null?"x":t)+JSON.stringify(e||{});return zh.has(i)||zh.set(i,new Me(Object.assign({map:ri(n),color:t==null?16777215:t},e||{}))),zh.get(i)}var Hh=new Map;function Ed(n,t,e){let i=n.toFixed(3)+","+t.toFixed(3)+","+e.toFixed(3);return Hh.has(i)||Hh.set(i,ld(new ze(n,t,e),n,t,e)),Hh.get(i)}function L(n,t,e,i,s=0,r=0,o=0,a){let c=new At(Ed(n,t,e),a&&a.isMaterial?a:ue(i,a));return c.position.set(s,r,o),c.castShadow=!0,c.receiveShadow=!0,c}function un(n,t,e,i,s=0,r=0,o=0,a){let c=new At(new ze(n,t,e),a&&a.isMaterial?a:ue(i,a));return c.position.set(s,r,o),c.castShadow=!0,c.receiveShadow=!0,c}function kh(n){return()=>(n=n*1664525+1013904223>>>0,n/4294967296)}var Vt=(n,t)=>n+Math.random()*(t-n),Un=(n,t,e)=>n+(t-n)*e,zi=(n,t,e=0)=>((n-se.x)/(se.rx+e))**2+((t-se.z)/(se.rz+e))**2<1;var qh=new Ke({transparent:!0,opacity:0,depthWrite:!1}),Zh=[],ec=[];function sc(){let n=new Me({color:12576498,emissive:16765562,emissiveIntensity:0});return Zh.push(n),n}function ss(n){let t=new mo;t.moveTo(0,-.5),t.bezierCurveTo(-.9,.1,-.5,.75,0,.35),t.bezierCurveTo(.5,.75,.9,.1,0,-.5);let e=new Oa(t,{depth:.18,bevelEnabled:!1,curveSegments:10});return new At(e,ue(n,{emissive:n,emissiveIntensity:.25}))}function qy(n,t,e){let i=new Jt,s=Xe(ut.SHINGLE,e),r=Xe(ut.SPRUCE_PLANK),o=t+1.6,a=0;for(;;a++){let c=o-a,l=a*.5+.25;if(c<=.6)break;i.add(L(n+1,.5,1,0,0,l,c/2-.5,s)),i.add(L(n+1,.5,1,0,0,l,-c/2+.5,s)),c>2.2&&i.add(L(n+.2,.5,c-2,0,0,l,0,r))}return i.add(L(n+1.2,.35,.6,0,0,a*.5+.1,0,r)),i.userData.h=a*.5+.3,i}function Gh(){let n=new Me({color:16773576,emissive:16761963,emissiveIntensity:0,map:ri(ut.PLASTER)});ec.push(n);let t=new Jt;return t.add(L(.3,.32,.3,0,0,0,0,n)),t.add(L(.34,.08,.34,4864564,0,.2,0)),t.add(L(.08,.12,.08,4864564,0,.3,0)),t}function dd(n,t){let e=new Jt,i=t?10:5,s=t?7:4,r=t?4:3,o=t?Mi.roof.hall:Mi.roof[n.roof]||Mi.roof.pink,a=Xe(ut.STONE_BRICK),c=Xe(ut.COBBLE),l=Xe(ut.LOG),h=Xe(ut.PLANKS),u=Xe(ut.SPRUCE_PLANK);e.add(L(i+.5,.3,s+.5,0,0,.15,0,a)),e.add(L(i,.9,s,0,0,.3+.45,0,c)),e.add(L(i-.02,r-.9,s-.02,0,0,.3+.9+(r-.9)/2,0,t?Xe(ut.PLASTER,16774114):h));let f=t?[-i/2+.25,-2.6,2.6,i/2-.25]:[-i/2+.25,i/2-.25];[-1,1].forEach(I=>f.forEach(O=>e.add(L(.5,r,.5,0,O,.3+r/2,I*(s/2-.15),l)))),e.add(L(i+.3,.4,s+.3,0,0,.3+r-.2,0,u));let d=qy(i,s,o);d.position.y=.3+r,e.add(d);let g=d.userData.h,y=t?2:1,x=t?2.6:2,m=new Jt;m.position.set(-y/2,.3,s/2+.02),e.add(m),m.add(L(y,x,.12,0,y/2,x/2,0,u)),m.add(L(.12,.12,.08,16375946,y-.2,x/2,.08)),e.add(L(y-.04,x-.04,.05,4864560,0,.3+x/2,s/2-.02)),e.userData.hinge=m,e.add(L(y+1,.3,1,0,0,.15,s/2+.7,a)),e.add(L(y+1.2,.2,1,0,0,.3+x+.35,s/2+.5,u)),[-1,1].forEach(I=>{let O=Gh();O.position.set(I*(y/2+.4),.3+x-.2,s/2+.2),e.add(O)});let T=sc();T.map=ri(ut.GLASS),e.userData.wm=T;let b=.3+(t?2.3:1.75),E=t?[-3.6,-1.5,1.5,3.6]:[-1.55,1.55];if(E.forEach(I=>{e.add(L(1.2,1.1,.12,0,I,b,s/2+.02,u)),e.add(L(1,.9,.14,0,I,b,s/2+.04,T))}),[-1,1].forEach(I=>{e.add(L(.12,1.1,1.2,0,I*(i/2+.02),b,0,u)),e.add(L(.14,.9,1,0,I*(i/2+.04),b,0,T))}),t||(E.forEach(I=>{e.add(L(1.2,.3,.4,0,I,b-.7,s/2+.22,u)),[-.35,0,.35].forEach((O,A)=>e.add(L(.22,.22,.22,Mi.flower[A],I+O,b-.45,s/2+.22)))}),e.add(L(1,2,1,0,i/4,.3+r+g*.45,-s/5,c)),e.userData.chimney=new U(i/4,.3+r+g*.45+1.2,-s/5)),n&&n.heart){let I=ss(16744350);I.scale.setScalar(.9),I.position.set(0,.3+r+g*.42,s/2+.42),e.add(I),e.userData.heart=I}let V=null;if(t){[-1.5,1.5].forEach(A=>e.add(L(.6,r,.6,0,A,.3+r/2,s/2+.35,a))),e.add(L(i+.4,.4,1,0,0,.3+r+.1,s/2+.35,a)),e.add(L(.2,3,.2,0,0,.3+r+g+1.4,0,l));let I=L(1.4,.8,.08,16751536,.75,.3+r+g+2.4,0);e.add(I),e.userData.flag=I;let O=new Me({color:16375946,emissive:16739179,emissiveIntensity:0,map:ri(ut.PLASTER)});V=new At(Ed(.7,.7,.7),O),V.position.set(0,.3+r+g*.42,s/2+.95),e.add(V),e.add(L(1.4,1.4,.1,0,0,.3+r+g*.42,s/2+.8,u))}e.userData.top=.3+r+g+(t?3.2:.6);let D=new At(new ze(i+.6,r+g+.3,s+.6),qh);return D.position.y=(r+g+.3)/2,e.add(D),e.userData.pick=D,e.userData.bell=V,e.userData.doorZ=s/2+1.3,e}function Wh(n,t,e){let i=document.createElement("canvas");i.width=t,i.height=e,n(i.getContext("2d"),t,e);let s=new ln(i);return s.colorSpace=Ie,s.anisotropy=4,s}function Kh(n,t,e,i,s,r){r=r||0,n.userData.wm=s,n.userData.top=i+.9,n.userData.size={cx:r,hw:t/2+.4,hd:e/2+.3};let o=new At(new ze(t+.6,i+.3,e+.6),qh);return o.position.set(r,(i+.3)/2,0),n.add(o),n.userData.pick=o,n.userData.doorZ=e/2+1.3,n}function Jh(n,t,e,i,s){let r=new Jt;r.position.set(-t/2,.3,i),n.add(r),r.add(L(t,e,.1,s,t/2,e/2,0)),r.add(L(.06,.5,.06,14278115,t-.2,e/2,.07)),n.add(L(t-.04,e-.04,.05,3814720,0,.3+e/2,i-.04)),n.userData.hinge=r}function Zy(){let n=new Jt,t=6.4,e=5.2,i=3,s=2.8,r=sc();n.add(L(t+5.4,.25,e+.6,15328478,2.3,.12,0)),n.add(L(t,i,e,16513784,0,.25+i/2,0)),[-2.15,2.15].forEach(y=>{n.add(L(1.7,2.45,.08,3814720,y,.25+1.3,e/2+.01)),n.add(L(1.55,2.3,.1,0,y,.25+1.3,e/2+.03,r))}),Jh(n,1.15,2.3,e/2+.03,9067068),n.add(L(t+.3,.18,e+.3,4867664,0,.25+i+.09,0));let o=.25+i+.18,a=Wh((y,x,m)=>{for(let T=0;T<x;T+=4)y.fillStyle=T%8?"#c99166":"#bb8358",y.fillRect(T,0,4,m)},64,16),c=new Me({map:a}),l=new At(new ze(t-.6,s,e-.4),c);l.position.set(-.3,o+s/2,-.4),l.castShadow=!0,l.receiveShadow=!0,n.add(l),n.add(L(t-.3,.16,e-.1,4867664,-.3,o+s+.08,-.4));let h=e/2-.4+.01-.2;n.add(L(2.9,2.35,.08,3814720,-.3,o+1.2,h+.02));let u=new At(new ze(2.7,2.2,.06),new Me({color:12576498,transparent:!0,opacity:.6,emissive:16765562,emissiveIntensity:0}));u.position.set(-.3,o+1.2,h+.06),n.add(u),Zh.push(u.material),n.add(L(.05,2.2,.08,3814720,-.3,o+1.2,h+.08)),n.add(L(t-.4,.14,1.5,15328478,-.2,o+.07,e/2+.55));let f=new At(new ze(t-.5,.75,.04),new Me({color:14217722,transparent:!0,opacity:.45}));f.position.set(-.2,o+.52,e/2+1.28),n.add(f),n.add(L(t-.5,.05,.07,3814720,-.2,o+.92,e/2+1.28)),[-2.5,-1.95,1.75,2.3].forEach((y,x)=>{n.add(L(.34,.32,.34,[15921906,9080729][x%2],y,o+.3,e/2+.95));let m=new At(new Fa(.26,2),ue(Mi.leaf[x%3],{}));m.position.set(y,o+.62,e/2+.95),m.castShadow=!0,n.add(m)});let d=ss(16744350);d.scale.setScalar(.55),d.material=new Me({color:16744350,emissive:16732030,emissiveIntensity:.25}),d.position.set(-2.2,o+2.05,e/2-.55),n.add(d),n.userData.heart=d;let g=t/2+2.3;n.add(L(4.6,2.9,e,16513784,g,.25+1.45,0)),n.add(L(4.8,.16,e+.2,4867664,g,.25+2.98,0)),n.add(L(3.7,2.3,.08,5592926,g,.25+1.15,e/2+.02));for(let y=0;y<6;y++)n.add(L(3.7,.03,.1,7040630,g,.45+y*.38,e/2+.05));return n.add(L(.5,.05,.05,16777215,g+1.4,2.95,e/2+.12)),[-1,1].forEach(y=>n.add(L(.12,.85,.85,0,y*(t/2+.01)-(y>0,0),.25+1.6,-1.2,r))),n.userData.vip=!0,Kh(n,t+4.6,e,o+s+.2,r,2.3)}function Ky(){let n=new Jt,t=9.2,e=6.6,i=3.8,s=sc();n.add(L(t+.6,.25,e+.6,15326447,0,.12,0)),n.add(L(t,i,e,14273008,0,.25+i/2,0)),n.add(L(t+.4,.3,e+.4,16165309,0,.25+i+.15,0)),[-2.8,2.8].forEach(o=>{n.add(L(2.6,2,.1,16777215,o,1.5,e/2+.01)),n.add(L(2.4,1.8,.12,0,o,1.5,e/2+.03,s))}),Jh(n,1.8,2.4,e/2+.03,15834032),[[-1.4,16773544],[0,16758465],[1.4,10934504]].forEach(([o,a])=>{let c=ss(a);c.scale.setScalar(.45),c.position.set(o,.25+i-.55,e/2+.02),n.add(c)});let r=new At(new hn(.55,20,14),ue(16027569));return r.position.set(3.2,.25+i+2.2,-1.5),r.castShadow=!0,n.add(r),n.add(L(.18,1.6,.18,3814720,3.2,.25+i+1.2,-1.5)),n.add(L(1.6,.3,1.6,3814720,3.2,.25+i+.45,-1.5)),Kh(n,t,e,i+2.4,s)}function Jy(){let n=new Jt,t=9.2,e=7,i=3.5,s=sc();n.add(L(t+.8,.22,e+.8,14605012,0,.11,0)),n.add(L(t,i,e,16513784,0,.22+i/2,0)),[[15895592,0],[3055195,.22],[14826299,.44]].forEach(([l,h])=>{n.add(L(t+.06,.2,e+.06,l,0,.22+i-.55-h,0))}),n.add(L(t+.5,.25,e+.5,15921906,0,.22+i+.12,0));let r=Wh((l,h,u)=>{l.fillStyle="#d8f1fa",l.fillRect(0,0,h,u);let f=["#ffb6c1","#f5d888","#a3d9bd","#a6d8e8","#f9c39c","#d9c9f0"];for(let d=0;d<4;d++){l.fillStyle="#c9e7f2",l.fillRect(0,12+d*28,h,3);for(let g=0;g<26;g++)l.fillStyle=f[(g+d)%f.length],l.fillRect(6+g*10,15+d*28,7,10+g%3*3)}},256,128),o=new Me({map:r,emissive:16773836,emissiveMap:r,emissiveIntensity:.1});[-2.65,2.65].forEach(l=>{n.add(L(3.4,2,.08,14605012,l,1.35,e/2+.01));let h=new At(new ze(3.2,1.85,.1),o);h.position.set(l,1.35,e/2+.03),n.add(h)}),Jh(n,1.7,2.3,e/2+.03,12576498);let a=Wh((l,h,u)=>{l.fillStyle="#ffffff",l.fillRect(0,0,h,u),l.fillStyle="#2e9e5b",l.fillRect(10,18,108,16),l.fillStyle="#f28c28",l.fillRect(10,40,108,16),l.fillStyle="#e23b3b",l.font="bold 86px sans-serif",l.textAlign="center",l.fillText("7",64,98),l.font="bold 20px sans-serif",l.fillText("ELEVEn",64,122)},128,128),c=new At(new ze(1.5,1.5,.14),[ue(16777215),ue(16777215),ue(16777215),ue(16777215),new Me({map:a}),ue(16777215)]);return c.position.set(t/2-1.1,.22+i+1.05,e/2-.3),c.castShadow=!0,n.add(c),n.add(L(.12,.8,.12,14605012,t/2-1.1,.22+i+.35,e/2-.3)),[[15226446,-.5],[6131664,.45]].forEach(([l,h])=>{n.add(L(.8,1.8,.75,l,t/2+.45,1.12,e/2-1.2+h));let u=L(.04,.9,.55,0,t/2+.86,1.4,e/2-1.2+h,new Me({color:16775126,emissive:16773808,emissiveIntensity:.25}));n.add(u)}),[-4,-3.2].forEach(l=>n.add(L(.5,.5,.5,15895592,l,.47,e/2+.9))),n.userData.alwaysLit=!0,Kh(n,t,e,i+1.9,s)}function $y(){let n=new Jt,t=2500653,e=14278115,i=5202805;n.add(L(1.9,1,4.4,t,0,.95,0)),n.add(L(1.75,.78,2.7,t,0,1.85,-.35)),[[-1,0],[1,0]].forEach(([o])=>n.add(L(.03,.55,2.4,i,o*.885,1.9,-.35))),n.add(L(1.6,.55,.03,i,0,1.9,1.01)),n.add(L(1.6,.55,.03,i,0,1.9,-1.71)),n.add(L(1.92,.06,4.42,e,0,1.46,0)),n.add(L(1.3,.35,.05,1776672,0,1.05,2.21));for(let o=-2;o<=2;o++)n.add(L(.03,.3,.06,e,o*.22,1.05,2.22));[-1,1].forEach(o=>{let a=new At(new ke(.17,.17,.08,14),ue(16775126,{emissive:16773808,emissiveIntensity:.35}));a.rotation.x=Math.PI/2,a.position.set(o*.72,1.12,2.22),n.add(a),n.add(L(.12,.12,.12,16754253,o*.95,1.5,1.95)),n.add(L(.22,.35,.05,14703183,o*.78,1,-2.22))}),n.add(L(1.94,.18,.2,1776672,0,.5,2.25)),n.add(L(1.94,.18,.2,1776672,0,.5,-2.25));let s=new At(new ke(.4,.4,.24,16),ue(1776672));s.rotation.x=Math.PI/2,s.position.set(0,1.15,-2.35),n.add(s);let r=new At(new ke(.22,.22,.26,12),ue(e));return r.rotation.x=Math.PI/2,r.position.set(0,1.15,-2.36),n.add(r),[[-.95,1.45],[.95,1.45],[-.95,-1.4],[.95,-1.4]].forEach(([o,a])=>{let c=new At(new ke(.42,.42,.34,14),ue(1776672));c.rotation.z=Math.PI/2,c.position.set(o,.42,a),c.castShadow=!0,n.add(c);let l=new At(new ke(.22,.22,.36,10),ue(e));l.rotation.z=Math.PI/2,l.position.set(o,.42,a),n.add(l)}),n.add(L(1.5,.05,2.2,3816514,0,2.27,-.35)),n}function jy(n,t){if(!Pn)return{posts:[],blocks:[]};let e=Pn,i={posts:[],blocks:[]},[s,r]=tn[e.house],[o,a]=e.car,c=t===Math.PI?e.z0:e.z1,l=Cn(s,r),h=[[s-1.2,s+1.2],[o-1.6,o+1.6]],u=(x,m)=>Math.abs(m-c)<.01&&h.some(([T,b])=>x>T&&x<b),f=(x,m,T,b)=>{let E=Math.hypot(T-x,b-m),V=Math.max(1,Math.round(E/1));for(let D=0;D<V;D++){let I=Un(x,T,(D+.5)/V),O=Un(m,b,(D+.5)/V);if(u(I,O))continue;let A=L(E/V+.02,.55,.22,16052716,I,l+.27,O);A.rotation.y=Math.atan2(T-x,b-m)+Math.PI/2,n.add(A);let S=L(E/V,.32,.3,8831614,I,l+.68,O);S.rotation.y=A.rotation.y,n.add(S),i.posts.push({x:I,z:O,r:.45})}};f(e.x0,e.z0,e.x1,e.z0),f(e.x1,e.z0,e.x1,e.z1),f(e.x1,e.z1,e.x0,e.z1),f(e.x0,e.z1,e.x0,e.z0),i.blocks.push({x:s+5.5,z:r,hw:2.5,hd:2.8});let d=Math.min(c,a)-1.5,g=Math.max(c,a)+.5;n.add(L(3.4,.05,Math.abs(g-d)+1.5,14144203,o,l+.025,(d+g)/2-.5));let y=$y();return y.position.set(o,l,a),y.rotation.y=t,n.add(y),i.blocks.push({x:o,z:a,hw:1.2,hd:2.4}),i.car=y,i.exit={x:o,z:c+(t===Math.PI?-1.6:1.6)},n.add(L(1.3,.05,Math.abs(r-c),15392719,s,l+.03,(r+c)/2)),i}function Qy(){let n=new Jt;n.add(L(.16,2.2,.16,9206379,0,1.1,0));let t=new Me({color:16774351,emissive:16765562,emissiveIntensity:0});return ec.push(t),n.add(L(.5,.5,.5,0,0,2.45,0,t)),n.add(L(.62,.12,.62,9206379,0,2.76,0)),n}var t1=new Me({vertexColors:!0});function bd(n,t){let e=[];n.traverse(i=>{i.isMesh||e.push(i)}),e.forEach(i=>{let s=i.children.filter(c=>c.isMesh&&!(t&&t.includes(c))&&!c.material.transparent&&!c.material.map);if(s.length<2)return;let r=s.map(c=>{let l=c.geometry.clone();Object.keys(l.attributes).forEach(d=>{d!=="position"&&d!=="normal"&&l.deleteAttribute(d)}),l.index&&(l=l.toNonIndexed()),l.clearGroups(),c.updateMatrix(),l.applyMatrix4(c.matrix);let h=c.material.color,u=l.attributes.position.count,f=new Float32Array(u*3);for(let d=0;d<u;d++)f[d*3]=h.r,f[d*3+1]=h.g,f[d*3+2]=h.b;return l.setAttribute("color",new fn(f,3)),l}),o=Za(r,!1);if(r.forEach(c=>c.dispose()),!o)return;s.forEach(c=>i.remove(c));let a=new At(o,t1);a.castShadow=!0,a.receiveShadow=!0,i.add(a)})}function ja(n,t,e,i,s,r,o){let a=new Jt;a.position.set(s,r,o);let c=L(n,t,e,i,0,-t/2,0);return a.add(c),a}var Qa=[{hair:5914688,skin:16768198,shirt:12824814,pants:6253194,style:"short",uniform:!0},{hair:3878703,skin:15976614,shirt:12824814,pants:6253194,style:"long",uniform:!0},{hair:11039050,skin:16769744,shirt:12824814,pants:6253194,style:"short",uniform:!0},{hair:3025462,skin:15580570,shirt:10738109,pants:6253178,style:"short"},{hair:2038564,skin:16768198,shirt:16758465,pants:9080760,style:"twin"},{hair:9067068,skin:16175024,shirt:16111752,pants:7170698,style:"cap",cap:15834032},{hair:4864570,skin:15317140,shirt:12824814,pants:6253194,style:"short",glasses:!0,uniform:!0},{hair:13208410,skin:16769744,shirt:10147472,pants:8161960,style:"long"},{hair:3878703,skin:15976614,shirt:12824814,pants:6253194,style:"bun",glasses:!0,uniform:!0},null,{hair:5914688,skin:15580570,shirt:14273008,pants:7170698,style:"long"},{hair:3025462,skin:16768198,shirt:16111752,pants:8161960,style:"bun"},{hair:9067068,skin:15976614,shirt:10473444,pants:6253178,style:"short",glasses:!0},{hair:3878703,skin:15317140,shirt:10738109,pants:7170698,style:"cap",cap:10738109},{hair:13208410,skin:16769744,shirt:13482478,pants:9080760,style:"twin"},{hair:2367010,skin:16175024,shirt:16368540,pants:8161960,style:"short"},{hair:5914688,skin:16768198,shirt:16758465,pants:7170698,style:"long"},{hair:2038564,skin:15580570,shirt:9226408,pants:5196378,style:"cap",cap:16165309},{hair:11039050,skin:16769744,shirt:16111752,pants:9075306,style:"bun"}],Xh={her:{hair:3877418,skin:16768198,shirt:16758465,pants:16758465,style:"long",dress:16165309},him:{hair:2367010,skin:15778976,shirt:10473444,pants:6253194,style:"short"}},pd=[{hair:3878703,skin:15976614,shirt:12824814,pants:6253194,style:"short",uniform:!0},{hair:9067068,skin:16769744,shirt:12824814,pants:6253194,style:"long",uniform:!0},{hair:2367010,skin:15317140,shirt:12824814,pants:6253194,style:"bun",uniform:!0}],Le=1.75/32,Yh=12*Le;function Ar(n,t){let e=new re(n);return t&&(e.r=Math.min(1,e.r*t),e.g=Math.min(1,e.g*t),e.b=Math.min(1,e.b*t)),"#"+e.getHexString()}function Sd(n,t){let e=document.createElement("canvas");e.width=e.height=64;let i=e.getContext("2d"),s=(n.hair^n.shirt^n.skin)>>>0,r=()=>(s=s*1664525+1013904223>>>0,s/4294967296),o=(y,x,m,T,b,E)=>{for(let V=0;V<T;V++)for(let D=0;D<m;D++)i.fillStyle=Ar(b,1+(r()-.5)*(E==null?.1:E)),i.fillRect(y+D,x+V,1,1)},a=(y,x,m)=>{i.fillStyle=typeof m=="string"?m:Ar(m),i.fillRect(y,x,1,1)},c=5981750,l=n.skin,h=n.hair,u=n.shirt,f=n.pants,d=n.style==="long"||n.style==="twin"||n.dress;o(0,0,32,16,l,.06),o(8,0,8,8,h),o(24,8,8,d?8:6,h),[0,16].forEach(y=>{o(y,8,8,d?7:4,h),o(y+(y?6:0),12,2,d?4:2,h)}),o(8,8,8,2,h),a(8,10,h),a(15,10,h),a(9,10,h),n.style==="cap"&&(o(8,0,8,8,n.cap),o(8,8,8,2,n.cap),o(0,8,8,2,n.cap),o(16,8,8,2,n.cap),o(24,8,8,2,n.cap)),[[9,12],[13,12]].forEach(([y,x])=>{if(t){a(y,x+1,"#3a2e33"),a(y+1,x+1,"#3a2e33");return}a(y,x,"#ffffff"),a(y+1,x,"#3a2e33"),a(y,x+1,"#ffffff"),a(y+1,x+1,"#3a2e33")}),a(9,14,"#ffa3b5"),a(14,14,"#ffa3b5"),a(11,14,Ar(l,.78)),a(12,14,Ar(l,.78)),a(11,15,"#c9707c"),a(12,15,"#c9707c"),n.glasses&&([9,13].forEach(y=>{["#6b5a4e"].forEach(x=>{a(y-1,12,x),a(y+2,12,x),a(y-1,13,x),a(y+2,13,x)})}),a(11,12,"#6b5a4e"),a(12,12,"#6b5a4e")),o(16,16,24,16,u),o(20,16,8,4,u,.05),o(23,20,2,1,l),n.uniform&&(o(22,20,4,1,16777215),o(21,22,2,2,16373355),o(20,31,8,1,9403592)),n.dress?(o(16,26,24,6,n.dress),o(20,25,8,1,Ar(n.dress,.9)&&n.dress)):o(16,30,24,2,Ar(f,.85)&&f,.05),o(20,22,8,1,u,.25),[[40,16],[32,48]].forEach(([y,x])=>{o(y,x,16,16,u),o(y,x+4+5,16,7,l,.06),o(y+4,x,4,4,u),o(y+8,x,4,4,l)}),[[0,16],[16,48]].forEach(([y,x])=>{o(y,x,16,16,n.dress?l:f),n.dress&&o(y,x+4,16,3,n.dress),o(y,x+4+10,16,2,c,.05),o(y+8,x,4,4,c)});let g=new ln(e);return g.magFilter=$e,g.minFilter=$e,g.generateMipmaps=!1,g.colorSpace=Ie,g}function Rr(n,t,e,i,s){let r=new ze(n*Le,t*Le,e*Le),o=64,a=(h,u,f,d,g)=>{let y=h/o,x=(h+f)/o,m=1-u/o,T=1-(u+d)/o;return g?[x,m,y,m,x,T,y,T]:[y,m,x,m,y,T,x,T]},c=[a(i+e+n,s+e,e,t),a(i,s+e,e,t),a(i+e,s,n,e),a(i+e+n,s,n,e,!0),a(i+e,s+e,n,t),a(i+2*e+n,s+e,n,t)],l=r.attributes.uv;return c.forEach((h,u)=>{for(let f=0;f<4;f++)l.setXY(u*4+f,h[f*2],h[f*2+1])}),l.needsUpdate=!0,r}function nc(n){let t=new Jt,e={},i=new Me({map:Sd(n)});e.mat=i,e.look=n;let s=(c,l,h,u)=>{let f=new At(c,i);return f.position.set(l,h,u),f.castShadow=!0,f.receiveShadow=!0,f},r=(c,l,h,u)=>{let f=new Jt;return f.position.set(c,l,h),f.add(u),f};e.legR=r(-2*Le,12*Le,0,s(Rr(4,12,4,0,16),0,-6*Le,0)),t.add(e.legR),e.legL=r(2*Le,12*Le,0,s(Rr(4,12,4,16,48),0,-6*Le,0)),t.add(e.legL),e.body=s(Rr(8,12,4,16,16),0,18*Le,0),t.add(e.body),e.armR=r(-6*Le,23.5*Le,0,s(Rr(4,12,4,40,16),0,-5.5*Le,0)),t.add(e.armR),e.armL=r(6*Le,23.5*Le,0,s(Rr(4,12,4,32,48),0,-5.5*Le,0)),t.add(e.armL);let o=new Jt;o.position.y=24*Le,t.add(o),e.head=o,o.add(s(Rr(8,8,8,0,0),0,4*Le,0));let a=(c,l,h,u,f,d,g)=>{let y=un(l*Le,h*Le,u*Le,c,f*Le,d*Le,g*Le);o.add(y)};if(n.style==="bun"&&a(n.hair,3,3,3,0,9.3,-2),n.style==="twin"&&(a(n.hair,2,4,2,-4.6,3.5,-1.5),a(n.hair,2,4,2,4.6,3.5,-1.5)),n.style==="cap"&&a(n.cap,8,1,3,0,6.5,5),n.style==="long"&&a(n.hair,8,5,1,0,-1.5,-4.5),n.dress){let c=un(9*Le,4*Le,5*Le,n.dress,0,12.5*Le,0);t.add(c)}return e.kids=t.children.slice(),{g:t,parts:e}}var wd=n=>n.style==="long"||n.style==="twin"||n.style==="bun";function Td(n,t){return!n||!t||t==="f"===wd(n)?n:Object.assign({},n,{style:(t==="f"?{short:"long",cap:"twin"}:{long:"short",twin:"cap",bun:"short"})[n.style]||(t==="f"?"long":"short"),cap:n.cap||n.shirt})}function e1(n,t){let e=nc(t);(n.parts.kids||[]).forEach(s=>n.g.remove(s)),e.parts.kids.forEach(s=>n.g.add(s));let i={};Object.keys(n.parts).forEach(s=>{s in e.parts||(i[s]=n.parts[s])}),n.parts=Object.assign(e.parts,i)}function n1(){let n=new Jt,t={},e=16236938,i=14720350,s=16774118;n.add(un(.46,.4,.8,e,0,.5,0)),[-.12,.1].forEach(l=>n.add(un(.48,.06,.12,i,0,.71,l))),n.add(un(.36,.2,.5,s,0,.34,.05)),t.legs=[[-.14,.28],[.14,.28],[-.14,-.28],[.14,-.28]].map(([l,h])=>{let u=ja(.13,.32,.13,e,l,.34,h);return n.add(u),u});let r=new Jt;r.position.set(0,.78,.48),n.add(r),t.head=r,r.add(un(.5,.42,.42,e,0,0,0)),r.add(un(.3,.16,.06,s,0,-.1,.21)),[-.15,.15].forEach(l=>{let h=new At(new po(.11,.2,4),ue(i));h.position.set(l,.29,-.02),h.rotation.y=Math.PI/4,r.add(h);let u=un(.08,.1,.03,4010032,l*.8,.04,.215);r.add(u),(t.eyes=t.eyes||[]).push(u)}),r.add(un(.07,.05,.03,16752048,0,-.04,.23));let o=new Jt;o.position.set(0,.62,-.38),n.add(o),t.tail=o;let a=un(.1,.1,.4,e,0,.05,-.18);o.add(a);let c=new Jt;return c.position.set(0,.05,-.36),o.add(c),c.add(un(.1,.4,.1,i,0,.18,0)),o.rotation.x=.5,n.scale.setScalar(.6),bd(n,t.eyes),{g:n,parts:t}}function i1(){let n=new Jt,t={},e=16774374,i=13211247;n.add(un(.56,.5,.95,e,0,.62,0)),n.add(un(.58,.3,.4,i,0,.76,-.15)),t.legs=[[-.17,.33],[.17,.33],[-.17,-.33],[.17,-.33]].map(([o,a])=>{let c=ja(.16,.4,.16,e,o,.42,a);return n.add(c),c});let s=new Jt;s.position.set(0,.98,.55),n.add(s),t.head=s,s.add(un(.56,.52,.5,e,0,0,0)),s.add(un(.3,.24,.26,e,0,-.1,.34)),s.add(un(.13,.1,.06,4010032,0,-.02,.48)),s.add(un(.1,.12,.06,16748451,.05,-.24,.42)),[-.3,.3].forEach(o=>{let a=ja(.12,.42,.26,i,o,.2,-.02);a.rotation.z=o>0?-.15:.15,s.add(a);let c=un(.08,.11,.03,4010032,o*.45,.08,.26);s.add(c),(t.eyes=t.eyes||[]).push(c)});let r=ja(.12,.42,.12,i,0,.82,-.47);return r.rotation.x=-.9,n.add(r),t.tail=r,n.scale.setScalar(.62),bd(n,t.eyes),{g:n,parts:t}}function s1(n){let t=new Jt,e=[16751211,16777215,16757575][n%3],i=new At(new hn(.28,10,8),ue(e));if(i.scale.set(.7,.6,1.4),t.add(i),n%3===1){let r=new At(new hn(.16,8,6),ue(16744272));r.position.set(0,.1,.05),r.scale.set(1,.6,1.4),t.add(r)}let s=new At(new po(.22,.35,4),ue(e===16777215?16751211:e));return s.rotation.x=Math.PI/2,s.position.z=-.5,t.add(s),t.userData.tail=s,t}function r1(n){let t=new Jt,e=new Me({color:n,side:xn}),i=()=>{let o=new At(new Qi(.32,.26),e);o.position.x=.17;let a=new Jt;return a.add(o),a},s=i(),r=i();return r.scale.x=-1,t.add(s,r),t.userData.l=s,t.userData.r=r,t}function md(){let n=new Jt,t=15392715,e=3.5,i=Xe(ut.LOG),s=Xe(ut.LEAF_P);n.add(L(1,e+1.5,1,0,-2,(e+1.5)/2,-.2,i)),n.add(L(3.2,.5,.5,0,-.4,e+.05,0,i)),[[-2,e+2.5,-.3,4,2,3],[-2,e+3.5,-.3,2,1,2],[-.6,e+1.6,-.6,2,1,2],[-3.4,e+1.6,-.2,1,1,2]].forEach(([c,l,h,u,f,d])=>n.add(L(u,f,d,0,c,l,h,s)));let r=new Jt;r.position.set(0,e-.2,0),n.add(r);let o=e-.2-.56;[-.72,.72].forEach(c=>r.add(L(.06,o,.06,t,c,-o/2,0)));let a=L(1.65,.12,.5,0,0,-o,0,Xe(ut.PLANK_GREY,16165309));return r.add(a),n.userData.pivot=r,n.userData.seat=a,n}var $h=[];function gd(n,t){let e=document.createElement("canvas");e.width=e.height=16;let i=e.getContext("2d"),s=(h,u,f)=>{i.fillStyle=f,i.fillRect(h,u,1,1)},r=[];for(let h=0;h<9;h++)r.push([3+h,12-h]);let o=[];r.forEach(([h,u])=>{o.push([h,u,"#9a6a3e"],[h+1,u,"#6b4526"])}),[[12,2],[13,2],[13,3],[11,1],[12,1],[13,1],[14,1],[14,2],[14,3],[14,4],[10,2],[13,5]].forEach(([h,u])=>o.push([h,u,"#e6e6ee"])),[[12,3],[12,4],[11,3]].forEach(([h,u])=>o.push([h,u,"#b8b8c6"])),[[1,12],[2,11],[1,13],[2,14],[3,14],[1,11],[2,13],[4,14],[0,12],[3,15]].forEach(([h,u])=>o.push([h,u,"#ffffff"])),[[2,12],[3,13]].forEach(([h,u])=>o.push([h,u,"#f6a9bd"])),o.forEach(([h,u])=>{[[-1,0],[1,0],[0,-1],[0,1]].forEach(([f,d])=>s(h+f,u+d,"#4a3020"))}),o.forEach(([h,u,f])=>s(h,u,f));let a=new ln(e);a.magFilter=$e,a.minFilter=$e,a.colorSpace=Ie;let c=new ts(new Fi({map:a,transparent:!0,depthWrite:!1,depthTest:!1,rotation:n}));c.scale.set(t,t,1),c.renderOrder=5;let l=new U(Math.cos(n+Math.PI/4),Math.sin(n+Math.PI/4),0);return $h.push({sp:c,dir:l,base:null}),c}function o1(n){$h.forEach(t=>{t.base||(t.base=t.sp.position.clone());let e=(Math.sin(n*4)*.5+.5)*.12;t.sp.position.set(t.base.x+t.dir.x*e,t.base.y+t.dir.y*e,t.base.z)})}function a1(n,t,e){let s=document.createElement("canvas"),r=s.getContext("2d");r.font="800 64px Nunito, sans-serif";let o=Math.ceil(r.measureText(n).width)+40;s.width=o,s.height=100;let a=s.getContext("2d");a.font="800 64px Nunito, sans-serif",a.textAlign="center",a.textBaseline="middle",a.lineJoin="round",t==="#ffffff"&&(a.shadowColor="rgba(40,30,40,.45)",a.shadowBlur=6,a.shadowOffsetY=3),a.fillStyle=t,a.fillText(n,o/2,s.height/2);let c=new ln(s);c.colorSpace=Ie;let l=new ts(new Fi({map:c,transparent:!0,depthWrite:!1,depthTest:!1}));return l.scale.set(e*o/s.height,e,1),l.renderOrder=5,l}function Ad(n,t,e,i){let s=document.createElement("canvas");s.width=128,s.height=64;let r=s.getContext("2d");r.font="bold 48px sans-serif",r.fillStyle=t,r.textAlign="center",r.fillText(n,64,50);let o=new ts(new Fi({map:new ln(s),transparent:!0,depthWrite:!1}));return o.scale.set(e,i,1),o.visible=!1,o}function xd(n,t){return Math.hypot((n-se.x)/(se.rx+4.4),(t-se.z)/(se.rz+4.4))<1&&!zi(n,t,.4)}function c1(n){let t=new fo(qn.map(o=>new U(o.x,0,o.z))),e=90,i=t.getSpacedPoints(e),s=new yn,r=[];return Hn.forEach(([o,a,c,l])=>{let h=o===c;for(let u=0;u<i.length;u++){let f=i[u];!(h?Math.abs(f.x-o)<.95&&f.z>=Math.min(a,l)-.9&&f.z<=Math.max(a,l)+.9:Math.abs(f.z-a)<.95&&f.x>=Math.min(o,c)-.9&&f.x<=Math.max(o,c)+.9)||r.some(g=>Math.hypot(g.x-f.x,g.z-f.z)<3)||r.push({x:h?o:f.x,z:h?f.z:a,rot:h?0:Math.PI/2})}}),r.forEach(o=>n.add(Rd(o.x,o.z,o.rot,3))),{curve:t,glints:[],ftex:s,foam:[],bridges:r,src:i[0]}}function Rd(n,t,e,i){let s=new Jt;s.position.set(n,0,t),s.rotation.y=e;let r=Xe(ut.PLANKS),o=Xe(ut.LOG);return[0,.25,.5,.25,0].forEach((a,c)=>s.add(L(i,.5,1,0,0,a-.15,c-2,r))),[-1,1].forEach(a=>{[0,.25,.5,.25,0].forEach((c,l)=>{s.add(L(.25,.9,.25,0,a*(i/2-.12),c+.55,l-2,o)),l<4&&s.add(L(.12,.12,1,0,a*(i/2-.12),c+.85+(l<2?.12:-.12),l-1.5,r))})}),s}function l1(n,t){let e=se,i=e.rx+2.6,s=e.rz+2.6,r=80,o=[],a=[],c={benches:[],ducks:[],posts:[]};for(let l=0;l<=r;l++){let h=l/r*Math.PI*2,u=Math.cos(h),f=Math.sin(h),d=e.x+u*(i-.75),g=e.z+f*(s-.75),y=e.x+u*(i+.75),x=e.z+f*(s+.75);if(o.push(d,.025,g,y,.025,x),l){let m=l*2;a.push(m-2,m,m-1,m-1,m,m+1)}}for(let l=0;l<r;l++){let h=l/r*Math.PI*2,u=e.x+Math.cos(h)*i,f=e.z+Math.sin(h)*s;if(Ns(u,f)<.6){n.add(Rd(u,f,-h+Math.PI/2+Math.PI/2,1.5));break}}[.6,2.2,3.6,5].forEach((l,h)=>{let u=e.x+Math.cos(l)*(i+1.6),f=e.z+Math.sin(l)*(s+1.6);if(Ns(u,f)<2.2||!Ds(u,f,1.5))return;let d=new Jt;d.position.set(u,0,f),d.rotation.y=Math.atan2(e.x-u,e.z-f),d.add(L(1.5,.08,.45,12883572,0,.45,0)),d.add(L(1.5,.4,.07,12883572,0,.7,-.22)),[-.65,.65].forEach(g=>{d.add(L(.08,.45,.4,9206379,g,.22,0))}),n.add(d),c.posts.push({x:u,z:f,r:.9})});for(let l=0;l<7;l++){let h=l/7*Math.PI*2+.3,u=e.x+Math.cos(h)*(i+3.1),f=e.z+Math.sin(h)*(s+3.1);if(!(Ns(u,f)<2.4||!Ds(u,f,1.8))){n.add(L(2,.5,1,0,Math.floor(u)+.5,.25,Math.floor(f)+.5,Xe(ut.PLANKS)));for(let d=0;d<4;d++){let g=Math.floor(u)+.5+(d-1.5)*.45,y=Math.floor(f)+.5+(d%2?.15:-.15);n.add(L(.06,.35,.06,8173679,g,.65,y)),n.add(L(.22,.22,.22,Mi.flower[(l+d)%Mi.flower.length],g,.9,y))}c.posts.push({x:u,z:f,r:1})}}for(let l=0;l<2;l++){let h=new Jt;h.add(L(.5,.3,.7,16777215,0,.18,0)),h.add(L(.32,.3,.3,l?16777215:7317610,0,.45,.32)),h.add(L(.18,.08,.16,16098123,0,.42,.53)),[-.12,.12].forEach(u=>h.add(L(.05,.06,.03,3025462,u,.5,.47))),h.add(L(.2,.12,.2,15658734,0,.32,-.38)),h.scale.setScalar(.8),n.add(h),c.ducks.push({g:h,a:l*2.5,sp:l?-.12:.09})}return c}function h1(n){let t=[],e=[],i=(u,f)=>u.toFixed(2)+","+f.toFixed(2),s=new Map,r=(u,f)=>{let d=i(u,f);return s.has(d)||(s.set(d,t.length),t.push({x:u,z:f}),e.push([])),s.get(d)},o=(u,f)=>{if(u===f)return;let d=Math.hypot(t[u].x-t[f].x,t[u].z-t[f].z);e[u].push([f,d]),e[f].push([u,d])},a=Hn.map(()=>[]);Hn.forEach((u,f)=>{a[f].push([u[0],u[1]],[u[2],u[3]])}),Hn.forEach((u,f)=>Hn.forEach((d,g)=>{if(f>=g)return;let y=u[0]===u[2],x=d[0]===d[2];if(y===x)return;let m=y?u:d,T=y?d:u,b=m[0],E=T[1];b>=Math.min(T[0],T[2])-.01&&b<=Math.max(T[0],T[2])+.01&&E>=Math.min(m[1],m[3])-.01&&E<=Math.max(m[1],m[3])+.01&&(a[f].push([b,E]),a[g].push([b,E]))}));let c=n.map(u=>{let f=null;Hn.forEach((g,y)=>{let x=g[0]===g[2],m=x?g[0]:Math.max(Math.min(g[0],g[2]),Math.min(Math.max(g[0],g[2]),u.x)),T=x?Math.max(Math.min(g[1],g[3]),Math.min(Math.max(g[1],g[3]),u.z)):g[1],b=Math.hypot(m-u.x,T-u.z);(!f||b<f.dist)&&(f={i:y,x:m,z:T,dist:b})}),a[f.i].push([f.x,f.z]);let d=r(u.x,u.z);return o(d,r(f.x,f.z)),d});a.forEach((u,f)=>{let d=Hn[f][0]===Hn[f][2];u.sort((g,y)=>d?g[1]-y[1]:g[0]-y[0]);for(let g=1;g<u.length;g++)o(r(u[g-1][0],u[g-1][1]),r(u[g][0],u[g][1]))});function l(u,f){let d=t.map(()=>1/0),g=t.map(()=>-1),y=t.map(()=>!1);for(d[u]=0;;){let m=-1;for(let T=0;T<t.length;T++)!y[T]&&(m<0||d[T]<d[m])&&(m=T);if(m<0||d[m]===1/0||m===f)break;y[m]=!0,e[m].forEach(([T,b])=>{d[m]+b<d[T]&&(d[T]=d[m]+b,g[T]=m)})}let x=[];for(let m=f;m>=0;m=g[m])x.unshift(t[m]);return x.length&&x[0]===t[u]?x:[t[f]]}function h(u,f,d){let g=0,y=1/0,x=d?new Set(c):null;return t.forEach((m,T)=>{if(x&&x.has(T))return;let b=Math.hypot(m.x-u,m.z-f);b<y&&(y=b,g=T)}),g}return{nodes:t,doorNodes:c,path:l,nearest:h}}var Ja=[[0,4870304,12633855,.8,1.35,1],[5,5199526,12633855,.8,1.35,1],[6,16305590,16763296,1.3,1.1,.4],[7.5,12575733,16774374,2.3,1.55,0],[16.5,12575733,16774374,2.3,1.55,0],[18,16236724,16760470,1.3,1.1,.4],[19.2,5265318,12633855,.8,1.35,1],[24,4870304,12633855,.8,1.35,1]];function Cd(n){let t=0;for(;t<Ja.length-2&&Ja[t+1][0]<=n;)t++;let e=Ja[t],i=Ja[t+1],s=(n-e[0])/(i[0]-e[0]||1),r=new re(e[1]),o=new re(i[1]),a=new re(e[2]),c=new re(i[2]);return{sky:r.lerp(o,s),sun:a.lerp(c,s),power:Un(e[3],i[3],s),amb:Un(e[4],i[4],s),night:Un(e[5],i[5],s)}}function u1(n,t){t=t||{};let e=(n.clientWidth||innerWidth)<(n.clientHeight||innerHeight)*.9?"port":"land";Md(e),Zh=[],ec=[];let i=(()=>{let p=/[?&]hour=([\d.]+)/.exec(location.search);return p?Number(p[1]):null})();i==null&&t.timeMode==="day"&&(i=11),i==null&&t.timeMode==="night"&&(i=22);let s=new co({antialias:!0});s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.shadowMap.enabled=!0,s.shadowMap.type=ka,s.domElement.className="village-3d",n.appendChild(s.domElement);let r=new lo;r.fog=new Ra(12575733,320,760);let o=new cn(26,1,.5,1400),a=new qa(o,s.domElement);a.enableDamping=!0,a.dampingFactor=.08,a.minDistance=18,a.maxDistance=520,a.minPolarAngle=.15,a.maxPolarAngle=1.32,a.target.set(0,0,1.5),a.screenSpacePanning=!1,a.rotateSpeed=.7,a.panSpeed=1.1,a.keyPanSpeed=22,a.touches={ONE:xi.PAN,TWO:xi.DOLLY_PAN};{let p=s.domElement,_=new Map,v=null,C=!1,k=new U,z=new Rs,M=new U,H=new U,rt=()=>{let at=Array.from(_.values());return{a:at[0],b:at[1],mx:(at[0].x+at[1].x)/2,my:(at[0].y+at[1].y)/2,d:Math.hypot(at[1].x-at[0].x,at[1].y-at[0].y),ang:Math.atan2(at[1].y-at[0].y,at[1].x-at[0].x)}};p.addEventListener("pointerdown",at=>{if(!(C||at.pointerType!=="touch"))if(at.isPrimary&&(_.clear(),v=null),_.set(at.pointerId,{x:at.clientX,y:at.clientY}),_.size===2){at.stopImmediatePropagation();let Tt=Array.from(_.entries()).find(([me])=>me!==at.pointerId);if(Tt){C=!0;try{p.dispatchEvent(new PointerEvent("pointerup",{pointerId:Tt[0],pointerType:"touch",isPrimary:!0,clientX:Tt[1].x,clientY:Tt[1].y,bubbles:!0}))}catch{}C=!1}let jt=rt();v={last:jt,moved:0,mode:"",y0a:jt.a.y,y0b:jt.b.y,x0:jt.mx,d0:jt.d}}else _.size>2&&at.stopImmediatePropagation()},{capture:!0}),p.addEventListener("pointermove",at=>{if(C||at.pointerType!=="touch"||!_.has(at.pointerId)||(_.get(at.pointerId).x=at.clientX,_.get(at.pointerId).y=at.clientY,!v||_.size<2)||(at.stopImmediatePropagation(),!a.enabled))return;let Tt=rt(),jt=v.last;if(v.moved+=Math.hypot(Tt.mx-jt.mx,Tt.my-jt.my)+Math.abs(Tt.d-jt.d),!v.mode&&v.moved>22){let me=Tt.a.y-v.y0a,xe=Tt.b.y-v.y0b,Je=(me+xe)/2,Gn=me*xe>0&&Math.min(Math.abs(me),Math.abs(xe))>.3*Math.max(Math.abs(me),Math.abs(xe));v.mode=Gn&&Math.abs(Tt.mx-v.x0)<Math.abs(Je)*.7&&Math.abs(Tt.d-v.d0)<Math.max(24,Math.abs(Je)*.6)?"tilt":"free"}if(k.copy(o.position).sub(a.target),v.mode==="tilt")z.setFromVector3(k),z.phi=Math.max(a.minPolarAngle,Math.min(a.maxPolarAngle,z.phi-(Tt.my-jt.my)*.006)),k.setFromSpherical(z),o.position.copy(a.target).add(k);else if(v.mode==="free"){let me=Tt.ang-jt.ang;me>Math.PI&&(me-=Math.PI*2),me<-Math.PI&&(me+=Math.PI*2),k.applyAxisAngle(Ge.DEFAULT_UP,me);let xe=Math.max(a.minDistance,Math.min(a.maxDistance,k.length()*(jt.d/Math.max(1,Tt.d))));k.setLength(xe),o.position.copy(a.target).add(k),o.getWorldDirection(H),H.y=0,H.normalize(),M.crossVectors(H,o.up).normalize();let Je=2*xe*Math.tan(o.fov*Math.PI/360)/(p.clientHeight||innerHeight);c.copy(M).multiplyScalar(-(Tt.mx-jt.mx)*Je).addScaledVector(H,(Tt.my-jt.my)*Je*1.4),a.target.add(c),o.position.add(c)}v.last=Tt,a.update()},{capture:!0});let ct=at=>{C||at.pointerType!=="touch"||(v&&_.has(at.pointerId)&&at.stopImmediatePropagation(),_.delete(at.pointerId),_.size<2&&(v=null))};p.addEventListener("pointerup",ct,{capture:!0}),p.addEventListener("pointercancel",ct,{capture:!0});let Ft=at=>{at.pointerType==="touch"&&at.target!==p&&(_.delete(at.pointerId),_.size<2&&(v=null))};window.addEventListener("pointerup",Ft,!0),window.addEventListener("pointercancel",Ft,!0)}s.domElement.tabIndex=0,s.domElement.style.outline="none",a.listenToKeyEvents(s.domElement);let c=new U,l=new U,h=new U;function u(p,_){o.getWorldDirection(h),h.y=0,h.normalize(),l.crossVectors(h,o.up).normalize();let v=o.position.distanceTo(a.target)*.0016;c.copy(l).multiplyScalar(p*v).addScaledVector(h,-_*v),a.target.add(c),o.position.add(c)}s.domElement.addEventListener("wheel",p=>{!p.ctrlKey&&p.deltaMode===0&&(Math.abs(p.deltaX)>.01||Math.abs(p.deltaY)<40)&&(p.preventDefault(),p.stopImmediatePropagation(),u(p.deltaX,p.deltaY))},{capture:!0,passive:!1});function f(){let p=a.target,_=Mn.w/2,v=Mn.d/2,C=Math.max(-_,Math.min(_,p.x)),k=Math.max(-v,Math.min(v,p.z));(C!==p.x||k!==p.z||p.y!==0)&&(c.set(C-p.x,-p.y,k-p.z),p.add(c),o.position.add(c))}a.addEventListener("change",f);let d=new bo(16777215,12048288,1);r.add(d);let g=new wo(16777215,1.5);g.castShadow=!0,g.shadow.mapSize.set(2048,2048),Object.assign(g.shadow.camera,{left:-Mn.a-6,right:Mn.a+6,top:Mn.b+10,bottom:-Mn.b-10,near:1,far:260}),g.shadow.bias=-6e-4,g.shadow.normalBias=.03,r.add(g),r.add(g.target);let y=[],x=new Xn({uniforms:{top:{value:new re(9356778)},bottom:{value:new re(14216952)}},vertexShader:"varying float vY; void main(){ vY = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 bottom; varying float vY; void main(){ float k = smoothstep(-0.15, 0.75, vY); gl_FragColor = vec4(mix(bottom, top, k), 1.0); }",side:_n,depthWrite:!1,fog:!1}),m=new At(new hn(480,24,14),x);m.renderOrder=-1,r.add(m);let T=new At(new ze(7,7,7),new Ke({color:16771496,fog:!1})),b=new At(new ze(5,5,5),new Ke({color:16052735,fog:!1}));r.add(T,b);let E=new Fe,V=[];for(let p=0;p<700;p++){let _=Math.random()*Math.PI*2,v=Math.random()*1.55;V.push(Math.cos(_)*Math.sin(v)*450,Math.cos(v)*450+20,Math.sin(_)*Math.sin(v)*450)}E.setAttribute("position",new de(V,3));let D=new bs(E,new es({color:16777215,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1}));r.add(D);let I=[];for(let p=0;p<6;p++){let _=new Jt,v=new Me({color:16777215,transparent:!0,opacity:.92});for(let C=0;C<5;C++){let k=new At(new ze(Vt(3,6),1.5,Vt(3,5)),v);k.position.set(C*2.6-5,0,Vt(-1.5,1.5)),_.add(k)}_.position.set(Vt(-90,90),Vt(34,46),Vt(-90,-40)),_.userData.speed=Vt(.6,1.4),_.userData.mat=v,I.push(_),r.add(_)}let O=new Jt;O.mat=new Me({color:16777215,transparent:!0,opacity:.9,fog:!1});for(let p=0;p<11;p++){let _=p/11*Math.PI*2+Vt(-.15,.15),v=Pr(_)+Vt(1,7),C=[];for(let z=0;z<5;z++){let M=new ze(Math.round(Vt(2,5)),1,Math.round(Vt(2,4)));M.translate(Math.round(z*2.2-4.4),0,Math.round(Vt(-1,1))),C.push(M)}let k=new At(Za(C,!1),O.mat);C.forEach(z=>z.dispose()),k.position.set(Math.cos(_)*v,Vt(-9,-3),-Math.sin(_)*v),k.rotation.y=_+Math.PI/2,k.scale.setScalar(Vt(.9,1.5)),O.add(k)}r.add(O);let A=[];[{t:Math.PI*.97,gap:9,r:4.5,y:-3,deco:(_,v,C)=>{wr(_,-1,1,-1,"oak",v),wr(_,2,1,1,"pine",v),_.set(-2,1,2,Lt.LEAF_M),_.plant(.5,1,2.5,ut.FL_PINK)}},{t:.06,gap:10,r:4,y:-2,deco:(_,v,C)=>{for(let k=0;k<18;k++){let z=v()*6.28,M=Math.sqrt(v())*3;_.plant(Math.floor(Math.cos(z)*M)+.5,1,Math.floor(Math.sin(z)*M)+.5,[ut.FL_PINK,ut.FL_WHITE,ut.FL_YELLOW,ut.FL_BLUE][k%4],.9)}C(L(2,.25,.6,0,.5,1.5,-.7,Xe(ut.PLANKS))),C(L(2,.6,.15,0,.5,1.85,-1,Xe(ut.PLANKS))),[-.35,1.35].forEach(k=>C(L(.2,.5,.6,0,k,1.25,-.7,Xe(ut.LOG))))}},{t:Math.PI*.62,gap:7,r:2.5,y:4.5,deco:(_,v)=>{wr(_,0,1,0,"pine",v),_.set(1,1,1,Lt.MOSSY)}},{t:-Math.PI*.3,gap:8,r:2.3,y:2.2,deco:(_,v,C)=>{[[0,0,15231594],[1,1,16757611]].forEach(([k,z,M])=>{C(L(.35,.6,.35,16774888,k+.5,1.3,z+.5)),C(L(.9,.35,.9,M,k+.5,1.75,z+.5))}),_.set(-1,1,0,Lt.LEAF_G)}}].forEach((_,v)=>{let C=kh(31+v*7),k=_.r,z=Math.ceil(k)+2,M=new Ro(-z,-Math.ceil(k*2.4)-3,-z,z*2,Math.ceil(k*2.4)+16,z*2);for(let Ft=-z;Ft<z;Ft++)for(let at=-z;at<z;at++){let Tt=Math.hypot(Ft+.5,at+.5)/k;if(Tt>1)continue;let jt=-Math.round(1+k*1.9*Math.pow(1-Tt,.7)+C()*1.2);for(let me=jt;me<1;me++)M.set(Ft,me,at,me===0?Lt.GRASS:me>-3?Lt.DIRT:Lt.STONE)}let H=new Jt;_.deco(M,C,Ft=>H.add(Ft));let rt=M.build();H.add(rt.solid,rt.water,rt.plants);let ct=Pr(_.t)+_.r+_.gap;H.position.set(Math.cos(_.t)*ct,_.y,-Math.sin(_.t)*ct),H.userData.y0=_.y,H.userData.ph=v*1.7,r.add(H),A.push(H)});let S=(()=>{let p=document.createElement("canvas");p.width=p.height=64;let _=p.getContext("2d"),v=_.createRadialGradient(32,32,0,32,32,32);v.addColorStop(0,"rgba(255,255,255,0.85)"),v.addColorStop(.3,"rgba(255,255,255,0.22)"),v.addColorStop(1,"rgba(255,255,255,0)"),_.fillStyle=v,_.fillRect(0,0,64,64),_.fillStyle="#ffffff",_.beginPath();for(let k=0;k<10;k++){let z=k/10*Math.PI*2-Math.PI/2,M=k%2?8:20;_.lineTo(32+Math.cos(z)*M,32+Math.sin(z)*M)}_.closePath(),_.fill();let C=new ln(p);return C.colorSpace=Ie,C})(),B=(()=>{let p=document.createElement("canvas");p.width=p.height=32;let _=p.getContext("2d");_.fillStyle="#ffffff",_.beginPath();for(let C=0;C<8;C++){let k=C/8*Math.PI*2,z=C%2?2.5:15;_.lineTo(16+Math.cos(k)*z,16+Math.sin(k)*z)}_.closePath(),_.fill();let v=new ln(p);return v.colorSpace=Ie,v})(),tt=[0,1,2].map(p=>{let _=[],v=[],C=new re,k=[16773544,16762076,14273791,12905727];for(let H=0;H<34;H++){let rt=Math.random()*Math.PI*2,ct=.15+Math.random()*1.2;_.push(Math.cos(rt)*Math.sin(ct)*440,Math.cos(ct)*440+20,Math.sin(rt)*Math.sin(ct)*440),C.set(k[(H+p)%4]),v.push(C.r,C.g,C.b)}let z=new Fe;z.setAttribute("position",new de(_,3)),z.setAttribute("color",new de(v,3));let M=new bs(z,new es({size:11+p*3,map:S,vertexColors:!0,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,fog:!1}));return M.userData={base:0,ph:p*2.1},r.add(M),M}),F=new ts(new Fi({map:(()=>{let p=document.createElement("canvas");p.width=128,p.height=16;let _=p.getContext("2d"),v=_.createLinearGradient(0,0,128,0);return v.addColorStop(0,"rgba(255,255,255,0)"),v.addColorStop(1,"rgba(255,248,220,1)"),_.fillStyle=v,_.beginPath(),_.moveTo(0,8),_.lineTo(120,4),_.arc(120,8,4,-Math.PI/2,Math.PI/2),_.closePath(),_.fill(),new ln(p)})(),transparent:!0,opacity:0,depthWrite:!1,fog:!1}));F.scale.set(36,4.5,1),r.add(F);let G={t:-1,wait:6,from:new U,dir:new U},Z=new Jt;r.add(Z);let q=kh(5),mt=new Ge,j=Math.ceil(Mn.a)+2,vt=Math.ceil(Mn.b)+2,ht=new Ro(-j,-26,-vt,j*2,54,vt*2),Wt=p=>(p[0]===p[2]?Math.abs(p[3]-p[1]):Math.abs(p[2]-p[0]))>=40,ce=(p,_)=>Hn.some(v=>{let[C,k,z,M]=v,H=(Wt(v)?vd:Xy)/2;return p>=Math.min(C,z)-H&&p<=Math.max(C,z)+H&&_>=Math.min(k,M)-H&&_<=Math.max(k,M)+H}),Ee=(p,_)=>{let v=Math.hypot((p-se.x)/(se.rx+2.6),(_-se.z)/(se.rz+2.6));return Math.abs(v-1)*(se.rx+2.6)<.8},lt=(p,_)=>Math.sin(p*.83+_*.37)*Math.cos(_*.71-p*.29)+.5*Math.sin(p*1.9-_*1.3),St=(p,_)=>{let v=0,C=-1;return tc(p,_)<1?{h:0,i:-1}:(Us.forEach(([k,z,M,H],rt)=>{let ct=Math.hypot(p-k,_-z);if(ct<M){let Ft=H*Math.pow(1-ct/M,1.1)*(.88+.12*lt(p,_))+(ct/M<.9?.8*lt(p*1.7,_*1.7):0);Ft>v&&(v=Ft,C=rt)}}),{h:v,i:C})},Zt=(p,_)=>1.4+1.3*Math.min(1,Math.hypot(p-zn.x,_-zn.z)/22),_t=new Map;for(let p=-j;p<j;p++)for(let _=-vt;_<vt;_++){let v=p+.5,C=_+.5;if(!Ds(v,C,.2))continue;let k=Math.round(Cn(v,C)),z="grass",M=St(v,C);if(M.h>k+.6){let ct=Us[M.i][3];k=Math.max(k,Math.round(M.h-.2)),z=k>ct*(.58+.08*lt(v*2,C*2))?"snow":k>ct*.22?"rock":"grass"}let H=Math.max(0,1-Math.hypot(v,C)/Pr(Math.atan2(C,v))),rt=-1-Math.round(2+17*Math.pow(H,.55)+(q()-.5)*2.4);for(let ct=rt;ct<k;ct++){let Ft=k-1-ct;if(k>=Os.h&&tc(v,C)<=0&&ct>=0&&Ft>0){ht.set(p,ct,_,q()<.7?Lt.BRICK:q()<.5?Lt.MOSSY:Lt.COBBLE);continue}let Tt=Ft===0?z==="snow"?Lt.SNOW:z==="rock"?q()<.2?Lt.MOSSY:q()<.12?Lt.GRAVEL:Lt.STONE:Lt.GRASS:Ft<3&&z==="grass"?Lt.DIRT:ct<rt+3?q()<.55?Lt.DEEP:Lt.STONE:q()<.12?Lt.CLAY:q()<.08?Lt.GRAVEL:Lt.STONE;ht.set(p,ct,_,Tt)}if(z==="grass"&&ht.tint.set(ht.idx(p,k-1,_),.94+.08*Math.sin(v*.21+C*.13)*Math.cos(C*.17-v*.05)+q()*.03),_t.set(p+","+_,k),k<=0){let ct=Ns(v,C),Ft=Zt(v,C);if(zi(v,C,0)||ct<Ft/2){let at=zi(v,C,-1.2)?2:1;for(let Tt=1;Tt<=at;Tt++)ht.set(p,-Tt,_,Lt.WATER);ht.set(p,-at-1,_,Lt.SAND),ht.set(p,-at-2,_,Lt.SAND),_t.set(p+","+_,-1);continue}if((zi(v,C,1.2)||ct<Ft/2+.9)&&!ce(v,C)){ht.set(p,-1,_,Lt.SAND),ht.set(p,-2,_,Lt.SAND);continue}}Io(v,C)?ht.set(p,k-1,_,Lt.BRICK):(ce(v,C)||Ee(v,C))&&ht.set(p,k-1,_,Lt.PATH)}let $t=(p,_)=>{let v=_t.get(Math.floor(p)+","+Math.floor(_));return v==null?0:v},ae=[];{let p=zn,_=-p.dz,v=p.dx,C=p.r*.45,k=new Set;for(let z=C;z<p.r+2;z+=.4)for(let M=-1.4;M<=1.4;M+=.4){let H=Math.floor(p.x+p.dx*z+_*M),rt=Math.floor(p.z+p.dz*z+v*M),ct=H+","+rt;if(k.has(ct)||!_t.has(ct))continue;k.add(ct);let Ft=_t.get(ct);for(let at=-1;at<Ft;at++)ht.set(H,at,rt,Lt.AIR);ht.set(H,-1,rt,Lt.WATER),ht.set(H,-2,rt,Lt.WATER),ht.set(H,-3,rt,Lt.SAND),_t.set(ct,-1)}for(let z=-1;z<=1;z++){let M=Math.floor(p.x+p.dx*(C+.3)+_*z),H=Math.floor(p.z+p.dz*(C+.3)+v*z),rt=Math.round(St(p.x+p.dx*(C-.8)+_*z,p.z+p.dz*(C-.8)+v*z).h-.2);for(let ct=-1;ct<Math.max(2,rt-1);ct++)ht.set(M,ct,H,Lt.WATER);ae.push([M+.5,H+.5])}}{let p=kh(77);_t.forEach((_,v)=>{let[C,k]=v.split(",").map(Number),z=St(C+.5,k+.5);z.i<0||_<1||_>Us[z.i][3]*.32||p()>.035||Math.hypot(C-zn.x,k-zn.z)<zn.r*.9&&Math.abs((C-zn.x)*-zn.dz+(k-zn.z)*zn.dx)<3||ht.get(C,_,k)||wr(ht,C,_,k,"pine",p)})}let Xt=c1(Z,!0),le=-1+.88,dt=new At(new ke(1,1,.1,32),qh);dt.scale.set(se.rx,1,se.rz),dt.position.set(se.x,le,se.z),Z.add(dt);{let p=new Me({map:ri(ut.LILY),transparent:!0,alphaTest:.5,side:xn});[[-4.5,1],[3.5,-1.6],[5.2,1.2],[-2.6,-1.4]].forEach(([_,v])=>{let C=new At(new Qi(1,1),p);C.rotation.x=-Math.PI/2,C.rotation.z=_,C.position.set(se.x+_*se.rz/4,le+.02,se.z+v*se.rz/4),Z.add(C)})}for(let p=0;p<14;p++){let _=q()*6.28,v=se.x+Math.cos(_)*(se.rx+.7),C=se.z+Math.sin(_)*(se.rz+.7);ht.plant(v,0,C,ut.REED,1.1)}let wt=(()=>{let p=new Jt;p.position.set(Math.floor(se.x)+.5,0,Math.floor(se.z)+.5),Z.add(p);let _=new Me({map:ri(ut.COBBLE)}),v=new Me({map:ri(ut.WATER),transparent:!0,opacity:.85});for(let H=-1;H<=1;H++)for(let rt=-1;rt<=1;rt++)(H||rt)&&p.add(L(1,.5,1,0,H,-.25+.1,rt,_));p.add(L(1,1.6,1,0,0,.3,0,_)),p.add(L(1.6,.3,1.6,0,0,1.15,0,_));let C=L(1.2,.08,1.2,0,0,1.33,0,v);p.add(C);let k=new Ke({color:14677247,transparent:!0,opacity:.85,depthWrite:!1}),z=new At(new ze(.18,.8,.18),k);z.position.y=1.75,p.add(z);let M=[];for(let H=0;H<14;H++){let rt=new At(new ze(.1,.1,.1),k);p.add(rt),M.push({m:rt,a:H/14*Math.PI*2,t:H/14})}return{g:p,jet:z,drops:M,rimR:1.3}})(),N=l1(Z,q,!0),Gt=[],bt=(p,_)=>Gt.some(v=>p>v.x0-1&&p<v.x1+1&&_>v.z0-1&&_<v.z1+1),Ot=(p,_)=>!bt(p,_)&&Ds(p,_,2.2)&&!zi(p,_,1.5)&&!fd(p,_,.8)&&!Fh(p,_,.6)&&Ns(p,_)>2.4&&!xd(p,_)&&!Io(p,_)&&!Hn.some(([v,C,k,z])=>p>=Math.min(v,k)-yi-.3&&p<=Math.max(v,k)+yi+.3&&_>=Math.min(C,z)-yi-.3&&_<=Math.max(C,z)+yi+.3)&&!tn.some(([v,C])=>Math.abs(p-v)<3.6&&Math.abs(_-C)<3.8)&&!(Math.abs(p-Rn[0])<6&&Math.abs(_-Rn[1])<5.4)&&St(p,_).h<.5,Pt=(t.houses||[]).findIndex(p=>p.id==="love"),te=(p,_)=>{if(Pn)return fd(p,_,1.2);if(Pt<0||!tn[Pt])return!1;let[v,C]=tn[Pt];return Math.abs(p-v)<7&&_>C+2.5&&_<C+12||Math.abs(_-C)<3.5&&Math.abs(p-v)<8.5||Math.abs(p-v)<3.5&&_<C&&_>C-8};{let v=(z,M)=>_t.get(z+","+M),C=(z,M)=>{for(let H=z-1;H<=z+11;H++)for(let rt=M-1;rt<=M+7;rt++)if(v(H,rt)!==0||!Ot(H+.5,rt+.5)||te(H+.5,rt+.5))return!1;return!0},k=[];for(let z=-vt+4;z<vt-7-4;z+=2)for(let M=-j+4;M<j-11-4;M+=2)C(M,z)&&k.push([M,z]);k.sort((z,M)=>M[1]-z[1]||Math.abs(z[0])-Math.abs(M[0]));for(let[z,M]of k){if(Gt.length>=2)break;if(Gt.some(Tt=>Math.hypot(Tt.x0-z,Tt.z0-M)<18)||!C(z,M))continue;Gt.push({x0:z,z0:M,x1:z+11,z1:M+7});let H=[ut.WHEAT,ut.CARROT,ut.SPROUT];for(let Tt=z+1;Tt<z+11-1;Tt++)for(let jt=M+1;jt<M+7-1;jt++){if(jt===M+Math.floor(3.5)){ht.set(Tt,-1,jt,Lt.WATER);continue}ht.set(Tt,-1,jt,Lt.FARM),ht.tint.set(ht.idx(Tt,-1,jt),1),ht.plant(Tt+.5,0,jt+.5,H[(jt<M+7/2?0:1)+(Tt>z+11-4?1:0)],.95)}let rt=Xe(ut.PLANKS),ct=Xe(ut.LOG),Ft=z+Math.floor(11/2),at=(Tt,jt,me,xe)=>{let Je=Math.hypot(me-Tt,xe-jt),Gn=Math.round(Je);for(let Br=0;Br<=Gn;Br++){let zr=Tt+(me-Tt)*Br/Gn,hc=jt+(xe-jt)*Br/Gn;if(jt===xe&&jt===M+7&&Math.abs(zr-Ft-.5)<.6)continue;Z.add(L(.25,1,.25,0,zr,.5,hc,ct));let uc=new Ge;uc.position.set(zr,0,hc),uc.userData.post=.7,Z.add(uc),Br<Gn&&!(jt===xe&&jt===M+7&&Math.abs(zr+(me-Tt)/Gn/2-Ft-.5)<1)&&[.4,.8].forEach(kd=>{let Vd=L(jt===xe?1:.1,.1,jt===xe?.1:1,0,zr+(me-Tt)/Gn/2,kd,hc+(xe-jt)/Gn/2,rt);Z.add(Vd)})}};at(z,M,z+11,M),at(z+11,M,z+11,M+7),at(z,M+7,z+11,M+7),at(z,M,z,M+7),[[z,M],[z+11,M],[z,M+7],[z+11,M+7]].forEach(([Tt,jt])=>{let me=Gh();me.position.set(Tt,1.2,jt),Z.add(me)})}}[[Kn.z1+.4,0],[Kn.z0-.6,Os.h]].forEach(([p,_])=>[-1,1].forEach(v=>{let C=Kn.x+v*(Kn.hw+.7);Z.add(L(.25,1.4,.25,0,C,_+.7,p,Xe(ut.LOG)));let k=Gh();k.position.set(C,_+1.6,p),Z.add(k)}));let Ht=[],P=(p,_)=>{let v=p+","+_,C=_t.get(v);C!=null&&(ht.set(p,C-1,_,Lt.DIRT),ht.set(p,C,_,Lt.GRASS),ht.tint.set(ht.idx(p,C,_),.97+q()*.05),_t.set(v,C+1))},w=(p,_,v)=>{let C=Math.floor(p),k=Math.floor(_);if(!Ot(C+.5,k+.5)||te(C+.5,k+.5)||Ht.some(([H,rt])=>Math.hypot(H-C,rt-k)<3.2))return!1;let z=v||(q()<.1?"cherry":["oak","oak","birch","mint","pine"][q()*5|0]);wr(ht,C,_t.get(C+","+k)||0,k,z,q);let M=new Ge;return M.position.set(C+.5,0,k+.5),M.userData.post=1.2,Z.add(M),Ht.push([C,k]),!0};for(let _=0;_<20;_++){let v=(_+.5+(q()-.5)*.35)/20*Math.PI*2,C=Pr(v)-5.5-q()*2,k=Math.cos(v)*C,z=Math.sin(v)*C,M=2.5+q()*1.5;if(Ot(k,z)&&!te(k,z)){for(let ct=Math.floor(k-M);ct<=k+M;ct++)for(let Ft=Math.floor(z-M);Ft<=z+M;Ft++)Math.hypot(ct+.5-k,(Ft+.5-z)*1.2)<M&&Ot(ct+.5,Ft+.5)&&!te(ct+.5,Ft+.5)&&P(ct,Ft);let rt=new Ge;rt.position.set(k,0,z),rt.userData.post=M,Z.add(rt)}let H=2+(q()*3|0);for(let rt=0;rt<H*4&&H>0;rt++){let ct=q()*6.28,Ft=q()*3.4;w(k+Math.cos(ct)*Ft,z+Math.sin(ct)*Ft)&&H--}for(let rt=0;rt<3;rt++){let ct=q()*6.28,Ft=2.2+q()*2,at=Math.floor(k+Math.cos(ct)*Ft),Tt=Math.floor(z+Math.sin(ct)*Ft);if(!Ot(at+.5,Tt+.5)||te(at+.5,Tt+.5)||ht.get(at,$t(at,Tt),Tt))continue;let jt=$t(at,Tt);ht.set(at,jt,Tt,q()<.5?Lt.LEAF_G:Lt.LEAF_M),q()<.4&&ht.plant(at+.5,jt+1,Tt+.5,[ut.FL_PINK,ut.FL_WHITE,ut.FL_YELLOW][q()*3|0],.8)}}for(let p=0,_=0;p<600&&_<10;p++)w((q()-.5)*Mn.w,(q()-.5)*Mn.d,["oak","birch","mint"][q()*3|0])&&_++;{let p=[ut.FL_PINK,ut.FL_WHITE,ut.FL_YELLOW,ut.FL_BLUE,ut.FL_LAV];for(let _=0,v=0;_<6e3&&v<520;_++){let C=(q()-.5)*(Mn.w-4),k=(q()-.5)*(Mn.d-4);if(!Ot(C,k)||te(C,k))continue;let z=Math.floor(C),M=Math.floor(k),H=$t(z,M);ht.get(z,H,M)||(ht.plant(z+.5,H,M+.5,q()<.32?p[q()*p.length|0]:ut.TUFT,.8+q()*.3),v++)}for(let _=0,v=0;_<800&&v<9;_++){let C=Math.floor((q()-.5)*(Mn.w-8)),k=Math.floor((q()-.5)*(Mn.d-8));if(!Ot(C+.5,k+.5)||te(C+.5,k+.5))continue;let z=$t(C,k),M=q()<.5?Lt.COBBLE:Lt.MOSSY;ht.set(C,z,k,M),q()<.6&&ht.set(C+1,z,k,Lt.STONE),q()<.4&&ht.set(C,z+1,k,M);let H=new Ge;H.position.set(C+1,0,k+.5),H.userData.post=1.2,Z.add(H),v++}}{let p=ht.build(.88);Z.add(p.solid,p.water,p.plants)}let Q=[];{let p=new Ke({color:16777215,transparent:!0,opacity:.5,depthWrite:!1});ae.forEach(([_,v])=>{for(let C=0;C<4;C++){let k=new At(new ze(.5,.5,.5),p.clone());k.position.set(_+Vt(-.6,.6),0,v+Vt(0,1.2)),Z.add(k),Q.push({m:k,t:Math.random(),x:k.position.x,z:k.position.z})}})}let W=[0,1,2].map(p=>{let _=[];for(let k=0;k<9;k++){let z=Math.random()*6.283,M=Math.sqrt(Math.random())*.85;_.push(se.x+Math.cos(z)*se.rx*M,le+.15,se.z+Math.sin(z)*se.rz*M)}for(let k=0;k<7;k++){let z=Xt.curve.getPointAt(Math.random());_.push(z.x+(Math.random()-.5)*1.2,le+.12,z.z+(Math.random()-.5)*1.2)}let v=new Fe;v.setAttribute("position",new de(_,3));let C=new bs(v,new es({size:.9,map:B,color:[16777215,16774072,16766698][p],transparent:!0,opacity:0,depthWrite:!1}));return C.userData={base:.6,ph:p*2.1},Z.add(C),C}),J=[];Hn.forEach(([p,_,v,C])=>[.3,.72].forEach(k=>{let z=p===v,M=Un(p,v,k)+(z?yi+.6:0),H=Un(_,C,k)+(z?0:yi+.6);tn.some(([rt,ct])=>Math.abs(M-rt)<3.6&&Math.abs(H-ct)<4.2)||Math.abs(M-Rn[0])<6.2&&Math.abs(H-Rn[1])<6||zi(M,H,1.5)||te(M,H)||!Ds(M,H,2)||Fh(M,H,.5)||Ns(M,H)<2||Io(M,H)||xd(M,H)||J.push([M,H])})),J.slice(0,7).forEach(([p,_],v)=>{let C=Qy();if(C.position.set(p,Cn(p,_),_),C.userData.post=.3,Z.add(C),v%2===0&&y.length<3){let k=new So(16763255,0,12,1.6);k.position.set(p,Cn(p,_)+2.7,_),Z.add(k),y.push(k)}});let X=[],xt=[];(t.houses||[]).forEach((p,_)=>{if(!tn[_])return;let v=p.id==="love"?Zy():p.special==="arcade"?Ky():p.special==="store"?Jy():dd(p,!1);v.position.set(tn[_][0],Cn(tn[_][0],tn[_][1]),tn[_][1]),v.rotation.y=Cr[_]||0,v.userData.face=Cr[_]||0,v.userData.id=p.id,Z.add(v),X.push(v);let C=v.userData.face;xt.push({x:tn[_][0]+Math.sin(C)*v.userData.doorZ,z:tn[_][1]+Math.cos(C)*v.userData.doorZ})});let ft=jy(Z,Pn&&Cr[Pn.house]||0),pt=dd(null,!0);pt.position.set(Rn[0],Cn(Rn[0],Rn[1]),Rn[1]),pt.userData.id="hall",Z.add(pt),X.push(pt);let yt={x:Rn[0],z:Rn[1]+pt.userData.doorZ};xt.push(yt);let et=h1(xt),It=et.doorNodes[et.doorNodes.length-1];(function(){Z.updateMatrixWorld(!0);let _=new Set,v=z=>{z&&z.traverse(M=>_.add(M))};v(dt),N.ducks.forEach(z=>v(z.g)),X.forEach(z=>{v(z.userData.hinge),v(z.userData.flag),v(z.userData.bell)}),v(ft.car),v(wt.jet),wt.drops.forEach(z=>v(z.m));let C=new Map,k=[];Z.traverse(z=>{if(!z.isMesh||z.isInstancedMesh||_.has(z)||z.userData.keepBatch||Array.isArray(z.material)||z.material.transparent)return;let M=z.geometry.clone();Object.keys(M.attributes).forEach(H=>{H!=="position"&&H!=="normal"&&H!=="uv"&&M.deleteAttribute(H)}),M.attributes.uv&&(M.index&&(M=M.toNonIndexed()),M.clearGroups(),M.applyMatrix4(z.matrixWorld),C.has(z.material)||C.set(z.material,[]),C.get(z.material).push(M),k.push(z))}),k.forEach(z=>z.parent.remove(z)),C.forEach((z,M)=>{let H=Za(z,!1);if(z.forEach(ct=>ct.dispose()),!H)return;let rt=new At(H,M);rt.castShadow=!0,rt.receiveShadow=!0,Z.add(rt)})})();let Rt=[],Et={her:null,him:null,home:null,kiss:0},Ut=p=>et.nodes[et.doorNodes[p]],Yt={},qt=p=>Yt[p]||0;function ve(p,_,v){let C=nc(p);Z.add(C.g);let k=Ut(_);return C.g.position.set(k.x+Vt(-.6,.6),0,k.z+Vt(0,.4)),Object.assign(C,{kind:"person",i:Rt.length,home:_,path:[],speed:Vt(1.35,1.75),wait:Vt(0,3),t:Vt(0,6),v:0,goal:"",inside:!1},v||{}),Rt.push(C),C}(t.houses||[]).forEach((p,_)=>{if(!(_>=tn.length))if(p.id==="love")Et.home=_,Et.her=ve(Xh.her,_,{love:"her"}),Et.him=ve(Xh.him,_,{love:"him"});else{let v=Qa[_]||Qa[_%9]||Qa[0];ve(v,_,{hallReg:!!v.uniform})}});let Y=Object.assign(n1(),{kind:"cat",path:[],speed:1.1,wait:2,t:0,sit:!0}),Dt=Object.assign(i1(),{kind:"dog",path:[],speed:2.2,wait:1,t:0,buddy:0});{let p=et.nodes[et.doorNodes[2]],_=et.nodes[et.doorNodes[et.doorNodes.length-1]];Y.g.position.set(p.x+1.5,0,p.z+.6),Dt.g.position.set(_.x+3,0,_.z+.8)}Z.add(Y.g,Dt.g);let st=[0,1,2,3].map(p=>{let _=s1(p);return Z.add(_),{g:_,a:Vt(0,6.28),r:Vt(.62,.92),sp:Vt(.25,.5)*(p%2?1:-1),jump:0,jx:0,jz:0}});function gt(){let p=document.createElement("canvas");p.width=128,p.height=64;let _=p.getContext("2d");_.font="bold 34px sans-serif",_.fillStyle="#7a6a9a",_.fillText("z",18,52),_.font="bold 26px sans-serif",_.fillText("z",52,36),_.font="bold 20px sans-serif",_.fillText("z",82,22);let v=new ts(new Fi({map:new ln(p),transparent:!0,depthWrite:!1}));return v.scale.set(1.1,.55,1),v.visible=!1,Z.add(v),v}Y.zzz=gt(),Dt.zzz=gt();let Bt=Ad("\u2665","#ff6f91",.9,.45);Z.add(Bt);let Nt=new U,fe=0,Te=[],rn=new hn(.09,6,5);function Ae(p,_){for(let v=0;v<7;v++){let C=Math.random()*6.28,k=Math.random()*.8,z=p+Math.cos(C)*k,M=_+Math.sin(C)*k*.7;if(!zi(z,M,-.8))continue;let H=new At(rn,ue(v%2?13208410:14723437));H.position.set(z,1.6+Math.random()*.6,M),Z.add(H),Te.push({m:H,vy:0,life:25})}}let dn=[];function kn(p,_,v){let C=new At(new yo(.15,.25,18),new Ke({color:16777215,transparent:!0,opacity:.8,side:xn}));C.rotation.x=-Math.PI/2,C.position.set(p,-.105,_),C.userData.size=v,Z.add(C),dn.push(C)}let bn=new At(new yo(.3,.45,20),new Ke({color:16777215,transparent:!0,opacity:0,side:xn}));bn.rotation.x=-Math.PI/2,Z.add(bn);let Ir=[16758465,14273008,16375946,11591910].map((p,_)=>{let v=r1(p);return Z.add(v),{g:v,ph:_*1.7,cx:Vt(-25,25),cz:Vt(-15,15)}}),ci=new Fe,Fs=[];for(let p=0;p<40;p++)Fs.push(Vt(-30,30),Vt(1,3),Vt(-20,20));ci.setAttribute("position",new de(Fs,3));let Bs=new bs(ci,new es({color:16773792,size:.35,transparent:!0,opacity:0}));Z.add(Bs);let li=0;function hi(){let p=new Date;return p.getHours()+p.getMinutes()/60}function rs(p){return p>=23||p<6.5?"sleep":p<7?"morning":p<11.5?"work":p<13?"lunch":p<16.5?"work":p<21?"evening":"home"}function vi(p){let _=p%18,v=Math.floor(_/6),C=_%6;return{x:yt.x+(C-2.5)*1.2+v%2*.6,z:yt.z+1.3+v*1.1}}function Sn(p,_,v){if(p.goal=v,p.path=Qh(p,_),!p.path.length){let C=et.nearest(p.g.position.x,p.g.position.z),k=et.nearest(_.x,_.z);p.path=et.path(C,k).concat([_])}}function zs(p){let _=Ut(p),v=Cr[p]||0;return{x:_.x-Math.sin(v)*.9,z:_.z-Math.cos(v)*.9,f:v}}function ui(p){let _=zs(p.home);p.inside=!1,p.g.visible=!0,p.g.position.set(_.x+Vt(-.3,.3),0,_.z),p.g.rotation.set(0,_.f,0)}function os(p,_){let v=zs(p.home);Sn(p,{x:v.x,z:v.z},"in"),p.stay=_}let Lo=X.findIndex(p=>p.userData.alwaysLit),R=null,K=null;function nt(){if(!R){R=tn.map((p,_)=>{let v=Ut(_);return[[-1.7,-.5],[1.7,-.5],[-.9,.2],[.9,.2]].map(([C,k])=>({x:v.x+C,z:v.z+k})).filter(C=>!Se(C.x,C.z,.15))}),K=[];for(let p=0;p<18;p++){let _={x:se.x+Math.cos(p/18*6.283)*(se.rx+2.2),z:se.z+Math.sin(p/18*6.283)*(se.rz+1.9)};Se(_.x,_.z,.2)||K.push(_)}}}let it=p=>p[Math.floor(Math.random()*p.length)];function $(p){nt();let _=R[p.home];return _.length?it(_):Ut(p.home)}function Ct(p,_){nt();let v=Math.random();if(_==="lunch"&&Lo>=0&&v<.6){let C=Ut(Lo);return{x:C.x+Vt(-2.6,2.6),z:C.z+Vt(0,.8)}}if(_==="lunch"&&v<.75)return vi(Math.floor(Vt(0,18)));if(v<.4&&K.length)return it(K);if(v<.85){let C=Ut(Math.floor(Vt(0,tn.length)));return{x:C.x+Vt(-1,1),z:C.z+Vt(0,.5)}}return vi(Math.floor(Vt(0,18)))}function kt(p){if(p.love==="him")return;let _=rs(hi());if(p.love==="her")return ie(p,_);let v=qt(p.home)>0;if(p.helper&&qt(p.home)<p.helper){p.inside&&ui(p),Sn(p,{x:yt.x,z:yt.z},"leave");return}if(li&&!v&&_!=="sleep"&&_!=="home"&&!p.helper){p.inside&&ui(p),(p.goal!=="hall"||p.path.length)&&Sn(p,vi(p.i),"hall"),p.wait=Vt(3,6);return}if(p.hallReg&&_==="work"&&!v&&!p.helper){if(p.inside&&ui(p),p.goal==="hallwork"){Sn(p,$(p),"work"),p.wait=Vt(6,14);return}if(p.goal==="work"&&Math.random()<.5){os(p,Vt(4,8));return}Sn(p,vi(p.i),"hallwork"),p.wait=Vt(10,22);return}if(v||_==="work"){if(p.inside){ui(p),Sn(p,$(p),"work");return}if(p.goal==="work"){os(p,Vt(3,v?6:10));return}Sn(p,$(p),"work");return}if(_==="sleep"||_==="home"){if(p.inside){p.wait=Vt(20,40);return}os(p,Vt(20,40));return}if(p.inside)ui(p);else if(Math.random()<.15){os(p,Vt(5,12));return}Sn(p,Ct(p,_),"stroll"),p.wait=Vt(2,6)}function ie(p,_){let v=Et.him;if(_==="sleep"||_==="home"||hi()>=20.5){if(ee(),p.inside){p.wait=Vt(30,60);return}os(p,Vt(30,60));return}if(p.inside&&(ui(p),ui(v),v.g.position.x+=.7),p.sitting){ee(),Sn(p,Ct(p,_),"stroll"),p.wait=Vt(2,5);return}if(oe&&Math.random()<.55){Sn(p,oe.userData.front,"swing");return}Sn(p,Ct(p,_),"stroll"),p.wait=Vt(2,5)}function ee(){[Et.her,Et.him].forEach(p=>{!p||!p.sitting||(p.sitting=!1,p.g.position.set(oe.userData.front.x+(p.love==="her"?-.4:.4),0,oe.userData.front.z),p.g.rotation.set(0,oe.rotation.y,0))})}function he(p){p.goal==="in"?(p.inside=!0,p.g.visible=!1,p.wait=p.stay||10):p.goal==="work"?p.wait=Vt(6,12):p.goal==="swing"?(p.sitting=!0,p.wait=Vt(15,30)):p.goal==="leave"&&(Z.remove(p.g),Rt.splice(Rt.indexOf(p),1))}function pe(p,_){let v=Et.her;if(v.inside){if(p.inside)return!1;let jt=zs(p.home),me=jt.x-p.g.position.x,xe=jt.z-p.g.position.z,Je=Math.hypot(me,xe);if(Je<.15)return p.inside=!0,p.g.visible=!1,!1;let Gn=Math.min(Je,v.speed*1.2*_);return p.g.position.x+=me/Je*Gn,p.g.position.z+=xe/Je*Gn,p.g.rotation.y=Math.atan2(me,xe),p.v=v.speed,!0}if(p.inside&&(ui(p),p.g.position.x+=.7),v.sitting)return p.sitting=!0,!1;p.sitting=!1;let C=v.g.rotation.y,k=v.g.position.x-Math.cos(C)*.72,z=v.g.position.z+Math.sin(C)*.72,M=k-p.g.position.x,H=z-p.g.position.z,rt=Math.hypot(M,H);if(rt<.05){p.v=0;let jt=C-p.g.rotation.y;return jt=Math.atan2(Math.sin(jt),Math.cos(jt)),p.g.rotation.y+=jt*Math.min(1,_*6),!1}let ct=Math.min(v.speed*1.35,rt*4);p.v=(p.v||0)+(ct-(p.v||0))*Math.min(1,_*5);let Ft=Math.min(rt,p.v*_);p.g.position.x+=M/rt*Ft,p.g.position.z+=H/rt*Ft;let Tt=(rt>.35?Math.atan2(M,H):C)-p.g.rotation.y;return Tt=Math.atan2(Math.sin(Tt),Math.cos(Tt)),p.g.rotation.y+=Tt*Math.min(1,_*7),p.v>.15}{let p=rs(hi());(p==="sleep"||p==="home")&&Rt.forEach(_=>{_.inside=!0,_.g.visible=!1,_.wait=Vt(5,30)})}let Kt=X.filter(p=>p.userData.id!=="hall").map(p=>{let _=p.userData.size,v=p.userData.face||0,C=Math.abs(Math.sin(v))>.5;if(!_)return{x:p.position.x,z:p.position.z,hw:3.3,hd:2.6};let k=Math.cos(v)*_.cx,z=-Math.sin(v)*_.cx;return{x:p.position.x+k,z:p.position.z+z,hw:C?_.hd:_.hw,hd:C?_.hw:_.hd}}).concat([{x:Rn[0],z:Rn[1],hw:5.8,hd:4.1}]),ye=[];Z.children.forEach(p=>{p.userData.post&&ye.push({x:p.position.x,z:p.position.z,r:p.userData.post})}),N.posts.forEach(p=>ye.push(p));function Se(p,_,v){return v=v||.5,!Ds(p,_,2.5)||Fh(p,_,0)||Ns(p,_)<1.8&&!Xt.bridges.some(C=>Math.hypot(C.x-p,C.z-_)<2.4)||zi(p,_,.9+v)||Kt.some(C=>Math.abs(p-C.x)<C.hw+v&&Math.abs(_-C.z)<C.hd+v)?!0:ye.some(C=>Math.hypot(p-C.x,_-C.z)<C.r+v*.6)}function Ce(p,_){let v=Math.ceil(Math.hypot(_.x-p.x,_.z-p.z)/.4);for(let C=1;C<=v;C++){let k=C/v;if(Se(Un(p.x,_.x,k),Un(p.z,_.z,k),.45))return!1}return!0}let pn=(p,_,v)=>Hn.some(([C,k,z,M])=>p>=Math.min(C,z)-yi-v&&p<=Math.max(C,z)+yi+v&&_>=Math.min(k,M)-yi-v&&_<=Math.max(k,M)+yi+v),oe=null;if(ft.blocks.forEach(p=>Kt.push(p)),ft.posts.forEach(p=>ye.push(p)),Et.home!=null&&Pn&&Pn.house===Et.home){let[p,_]=Pn.swing,v=Cr[Et.home]||0;oe=md(),oe.position.set(p,Cn(p,_),_),oe.rotation.y=v,Z.add(oe),oe.userData.front={x:p+Math.sin(v)*1.25,z:_+Math.cos(v)*1.25},Kt.push({x:p,z:_,hw:1.55,hd:1.55}),Kt.push({x:p-Math.cos(v)*2,z:_+Math.sin(v)*2,hw:.8,hd:.8})}else if(Et.home!=null){let[p,_]=tn[Et.home],v=[[0,7.2],[0,6.4],[-2.2,7.2],[2.2,7.2],[0,8.4],[4.6,.8],[-4.6,.8],[0,-5.2]],C=(k,z)=>!Ds(k,z,2.5)||zi(k,z,1)||Kt.some(M=>Math.abs(k-M.x)<M.hw+.1&&Math.abs(z-M.z)<M.hd+.1)||pn(k,z,0);for(let[k,z]of v){let M=p+k,H=_+z;if([[-1.6,-.9],[1.6,-.9],[-1.6,.9],[1.6,.9],[0,0],[0,1.6],[-.5,1.6],[.5,1.6]].every(([ct,Ft])=>!C(M+ct,H+Ft))){Z.children.slice().forEach(ct=>{if(ct.userData.post&&Math.abs(ct.position.x-M)<2.6&&Math.abs(ct.position.z-H)<2.2){Z.remove(ct);let Ft=ye.findIndex(at=>at.x===ct.position.x&&at.z===ct.position.z);Ft>=0&&ye.splice(Ft,1)}}),oe=md(),oe.position.set(M,Cn(M,H),H),Z.add(oe),oe.userData.front={x:M,z:H+1.25},Kt.push({x:M,z:H,hw:1.55,hd:.75});break}}}let ne=[],Jn=new hn(.28,8,6);function we(p){let _=new At(Jn,new Me({color:16777215,transparent:!0,opacity:.75,depthWrite:!1})),v=p.userData.chimney;_.position.set(p.position.x+v.x+Vt(-.1,.1),v.y,p.position.z+v.z+Vt(-.1,.1)),Z.add(_),ne.push({m:_,life:0})}let In=[3,6,10],Nn=document.createElement("div");Nn.className="v3d-names",n.appendChild(Nn);let Ze=null,ki=!1,Re=new Map,je=new U;function as(){let p=Ze&&Ze.genders||{};Rt.forEach(_=>{if(_.love||_.helper)return;let v=(t.houses||[])[_.home];if(!v)return;_.baseLook||(_.baseLook=_.parts.look);let C=p[v.id]?Td(_.baseLook,p[v.id]):_.baseLook;C!==_.parts.look&&e1(_,C)})}function Ln(p){if(!Ze)return"";if(p.love==="her")return Ze.her||"namu";if(p.love==="him")return Ze.him||"hunf";if(p.helper)return"";let _=(t.houses||[])[p.home];return!_||!_.pub&&!ki?"":Ze.people&&Ze.people[_.id]||""}function fi(){Rt.forEach(p=>{let _=Ln(p),v=Re.get(p);if(!_){v&&(v.remove(),Re.delete(p));return}v||(v=document.createElement("span"),Nn.appendChild(v),Re.set(p,v)),v.textContent=_})}function Vn(){let p=o.position.distanceTo(a.target),_=p<175&&Re.size>0;if(Nn.style.display=_?"":"none",!_)return;let v=n.clientWidth||innerWidth,C=n.clientHeight||innerHeight,k=C*1.8/(2*p*Math.tan(o.fov*Math.PI/360));Nn.style.fontSize=Math.max(7,Math.min(12,k*.24)).toFixed(1)+"px",Nn.classList.toggle("night",Lr>.5);let z=performance.now(),M=z-(Vn.t||0)>300;M&&(Vn.t=z);let H=[];Re.forEach((rt,ct)=>{if(!ct.g.visible||ct.inside||Rt.indexOf(ct)<0){rt.style.display="none";return}if(ct.g.getWorldPosition(je),je.y+=2.05,M){let Tt=je.clone().sub(o.position),jt=Tt.length();Hs.set(o.position,Tt.normalize()),Hs.far=jt-.3,ct.hidden=Hs.intersectObjects(Pd,!1).length>0}if(ct.hidden){rt.style.display="none";return}if(je.project(o),je.z>1||Math.abs(je.x)>1.1||Math.abs(je.y)>1.1){rt.style.display="none";return}let Ft=(je.x+1)/2*v,at=(1-je.y)/2*C;for(let Tt=0;Tt<4;Tt++){let jt=H.find(me=>Math.abs(me[0]-Ft)<34&&Math.abs(me[1]-at)<12);if(!jt)break;at=jt[1]-13}H.push([Ft,at]),rt.style.display="",rt.style.transform="translate("+Ft.toFixed(1)+"px,"+at.toFixed(1)+"px) translate(-50%,-100%)"})}let Hs=new Er,Pd=X.map(p=>p.userData.pick).filter(Boolean);function jh(){tn.forEach((p,_)=>{if(_===Et.home)return;let v=In.filter(k=>qt(_)>=k).length,C=Rt.filter(k=>k.helper&&k.home===_&&k.goal!=="leave");for(let k=C.length;k<v;k++){let z=ve(pd[k%pd.length],_,{helper:In[k]});z.g.position.set(yt.x+Vt(-1,1),0,yt.z+Vt(0,.6)),Sn(z,$(z),"work")}})}function Qh(p,_){let v={x:p.g.position.x,z:p.g.position.z};if(Ce(v,_))return[_];let C=et.nearest(v.x,v.z),k=et.nearest(_.x,_.z),z=et.path(C,k);if(!Ce(v,z[0]))return[];let M=z[z.length-1];return Ce(M,_)&&z.push(_),z}function Id(p){if(p.kind==="dog"&&Math.random()<.65){let v=Rt[p.buddy%Rt.length];for(let z=0;z<Rt.length&&(!v.g.visible||v.sitting);z++)v=Rt[++p.buddy%Rt.length];let C=v.g.position,k={x:C.x+Vt(-1.5,1.5),z:C.z+Vt(.8,1.6)};if(Math.random()<.15&&p.buddy++,!Se(k.x,k.z)&&(p.path=Qh(p,k),p.path.length))return}for(let v=0;v<30;v++){let C={x:p.g.position.x+Vt(-9,9),z:p.g.position.z+Vt(-7,7)};if(!Se(C.x,C.z,.8)&&Ce(p.g.position,C)){p.path=[C];return}}let _=et.nodes[et.nearest(p.g.position.x,p.g.position.z)];p.path=[{x:_.x,z:_.z}]}function tu(p,_){let v=p.g.position;if(p.sleep>0)return p.v=0,!1;if(!p.path.length){if(p.v=0,p.wait-=_,p.wait<=0){if(p.kind==="person")return p.wait=Vt(1.5,4),kt(p),!1;Id(p),p.wait=Vt(2,6),p.kind==="cat"&&(p.sit=Math.random()<.45,p.sit&&(p.path=[]))}return!1}let C=p.path[0],k=C.x-v.x,z=C.z-v.z,M=Math.hypot(k,z);if(M<.08)return p.path.shift(),!p.path.length&&p.kind==="person"&&he(p),!0;let rt=Math.atan2(k,z)-p.g.rotation.y;rt=Math.atan2(Math.sin(rt),Math.cos(rt)),p.g.rotation.y+=rt*Math.min(1,_*7);let ct=M+(p.path.length>1?99:0),Ft=Math.abs(rt)>1.1?p.speed*.15:p.speed*Math.min(1,ct/1.2+.25);p.v=(p.v||0)+(Ft-(p.v||0))*Math.min(1,_*4);let at=Math.min(M,p.v*_);return v.x+=Math.sin(p.g.rotation.y)*at*.35+k/M*at*.65,v.z+=Math.cos(p.g.rotation.y)*at*.35+z/M*at*.65,!0}function Ld(p,_){if(Rt.slice().forEach(M=>{let H=M.love==="him"?pe(M,p):tu(M,p);if(M.inside||!M.g.visible)return;if(M.sitting&&oe){let at=M.love==="her"?-.4:.4;Nt.set(at,.06,0),oe.userData.seat.localToWorld(Nt),Z.worldToLocal(Nt),M.g.position.set(Nt.x,Nt.y-Yh,Nt.z),M.g.rotation.set(oe.userData.pivot.rotation.x*.9,oe.rotation.y,0),M.parts.legL.rotation.x=M.parts.legR.rotation.x=-1.45+Math.sin(_*1.7)*.25,M.parts.armL.rotation.x=M.parts.armR.rotation.x=-.5,M.parts.head.rotation.set(0,0,0);return}let rt=Math.min(1,(M.v||0)/M.speed);M.t+=p*(H?3+7*rt:2);let ct=H?Math.sin(M.t)*.75*rt:0;M.parts.legL.rotation.x=ct,M.parts.legR.rotation.x=-ct,M.parts.armL.rotation.x=-ct*.8,M.parts.armR.rotation.x=ct*.8,M.g.rotation.x=0,M.parts.head.rotation.x=0,M.parts.head.rotation.z=0;let Ft=Cn(M.g.position.x,M.g.position.z);if(M.g.position.y=Ft+(H?Math.abs(Math.sin(M.t))*.06:0),!H&&!M.path.length){if(M.goal==="hall"){let at=Math.PI-M.g.rotation.y;at=Math.atan2(Math.sin(at),Math.cos(at)),M.g.rotation.y+=at*Math.min(1,p*6),M.g.position.y=Ft+Math.max(0,Math.sin(_*4+M.i))*.1,M.parts.armR.rotation.x=-2.6+Math.sin(_*6+M.i)*.3}else if(M.goal==="work"){let at=Math.PI-M.g.rotation.y;at=Math.atan2(Math.sin(at),Math.cos(at)),M.g.rotation.y+=at*Math.min(1,p*6),M.parts.armR.rotation.x=-1.3+Math.sin(_*9+M.i)*.55,M.parts.armL.rotation.x=-.9+Math.sin(_*9+M.i+1.6)*.35,M.parts.head.rotation.x=.25}M.parts.head.rotation.y=M.goal==="work"?0:Math.sin(_*.7+M.i)*.4}else M.parts.head.rotation.y=0}),Et.kiss>0&&Et.him&&Et.him.g.visible){Et.kiss-=p;let M=Et.her,H=Et.him,rt=Math.min(1,Math.sin(Math.min(1,(2.4-Et.kiss)/2.4)*Math.PI)*1.6),ct=M.g.position.x-H.g.position.x,Ft=M.g.position.z-H.g.position.z;if(H.sitting)H.parts.head.rotation.y=.9*rt,H.parts.head.rotation.z=.25*rt,M.parts.head.rotation.z=-.15*rt;else{let at=Math.atan2(ct,Ft)-H.g.rotation.y;at=Math.atan2(Math.sin(at),Math.cos(at)),H.g.rotation.y+=at*Math.min(1,p*8);let Tt=Math.atan2(-ct,-Ft)-M.g.rotation.y;Tt=Math.atan2(Math.sin(Tt),Math.cos(Tt)),M.g.rotation.y+=Tt*Math.min(1,p*3)*.5,H.g.rotation.x=.2*rt}Bt.visible=!0,Bt.position.set((M.g.position.x+H.g.position.x)/2,2+(2.4-Et.kiss)*.35,(M.g.position.z+H.g.position.z)/2),Bt.material.opacity=Math.min(1,Et.kiss*1.5),Et.kiss<=0&&(Bt.visible=!1,H.g.rotation.x=0)}if(oe){let M=oe.userData.pivot,H=Et.her&&Et.her.sitting;M.rotation.x=H?Math.sin(_*1.7)*(Et.kiss>0?.12:.32):M.rotation.x*Math.max(0,1-p*1.5)}let v=rs(hi());X.forEach((M,H)=>{if(!M.userData.wm)return;let rt=0;if(H===Et.home?rt=0:(qt(H)>0||M.userData.alwaysLit||v!=="sleep"&&Rt.some(ct=>ct.home===H&&ct.inside))&&(rt=1),M.userData.lit=Un(M.userData.lit||0,rt,Math.min(1,p*2)),M.userData.wm.emissiveIntensity=Lr*(.28+.7*M.userData.lit),M.userData.heart){let ct=Et.her&&Et.her.inside&&Et.him.inside;M.userData.heart.material.emissiveIntensity=ct?.5+Math.max(0,Math.sin(_*5))*1.3:.2}qt(H)>0&&M.userData.chimney&&Math.random()<p*2.2&&we(M)});for(let M=ne.length-1;M>=0;M--){let H=ne[M];H.life+=p,H.m.position.y+=p*.9,H.m.position.x+=p*.25,H.m.scale.setScalar(1+H.life*.9),H.m.material.opacity=Math.max(0,.75-H.life*.3),H.life>2.5&&(Z.remove(H.m),H.m.material.dispose(),ne.splice(M,1))}fe+=p,fe>2&&(fe=0,jh()),[Y,Dt].forEach(M=>{if(M.sleep>0){M.sleep-=p;let Ft=Math.min(1,M.sleepIn+=p*3);M.parts.legs.forEach((at,Tt)=>{at.rotation.x=(Tt<2?-1.45:1.45)*Ft}),M.g.position.y=Cn(M.g.position.x,M.g.position.z)-.22*Ft*M.g.scale.y,M.parts.head.rotation.x=.35*Ft,M.parts.head.rotation.y=0,M.parts.eyes.forEach(at=>{at.scale.y=1-.8*Ft}),M.parts.tail.rotation.z=Math.sin(_*.8)*.15,M.zzz.visible=!0,M.zzz.position.set(M.g.position.x,.95+_*.6%1*.45,M.g.position.z),M.zzz.material.opacity=.9-_*.6%1*.6,M.sleep<=0&&(M.zzz.visible=!1,M.parts.eyes.forEach(at=>{at.scale.y=1}),M.parts.head.rotation.x=0,M.wait=Vt(.3,1));return}let H=tu(M,p),rt=Math.min(1,(M.v||0)/M.speed);M.t+=p*(H?4+8*rt:2);let ct=H?Math.sin(M.t)*.6*rt:0;M.parts.legs.forEach((Ft,at)=>{Ft.rotation.x=at===0||at===3?ct:-ct}),M.kind==="cat"?(M.parts.tail.rotation.z=Math.sin(_*2)*.35,M.parts.tail.rotation.x=M.sit&&!H?.9:.5,M.g.children[0].rotation.x=0,M.parts.head.rotation.y=H?0:Math.sin(_*.5)*.5,M.g.position.y=Cn(M.g.position.x,M.g.position.z)):(M.parts.tail.rotation.z=Math.sin(_*(H?18:10))*.6,M.parts.head.rotation.x=H?0:Math.sin(_*1.3)*.1,M.g.position.y=Cn(M.g.position.x,M.g.position.z)+(H?Math.abs(Math.sin(M.t))*.07:0))});for(let M=Te.length-1;M>=0;M--){let H=Te[M];H.m.position.y>-.08?(H.vy-=p*9,H.m.position.y=Math.max(-.08,H.m.position.y+H.vy*p),H.m.position.y===-.08&&kn(H.m.position.x,H.m.position.z,.5)):H.m.position.y=-.08+Math.sin(_*3+M)*.015,H.life-=p,H.life<=0&&(Z.remove(H.m),Te.splice(M,1))}st.forEach(M=>{M.a+=M.sp*p;let H=se.x+Math.cos(M.a)*(se.rx-1.6)*M.r,rt=se.z+Math.sin(M.a)*(se.rz-1)*M.r,ct=null,Ft=1e9;if(Te.forEach(at=>{if(at.m.position.y<=-.02){let Tt=Math.hypot(at.m.position.x-M.g.position.x,at.m.position.z-M.g.position.z);Tt<Ft&&(Ft=Tt,ct=at)}}),ct&&!M.jump){let at=ct.m.position.x-M.g.position.x,Tt=ct.m.position.z-M.g.position.z,jt=Math.hypot(at,Tt),me=Math.min(jt,2.6*p);M.g.position.x+=at/(jt||1)*me,M.g.position.z+=Tt/(jt||1)*me,M.g.position.y=-.3,M.g.rotation.y=Math.atan2(at,Tt),jt<.25&&(Z.remove(ct.m),Te.splice(Te.indexOf(ct),1),kn(ct.m.position.x,ct.m.position.z,.6)),M.a=Math.atan2((M.g.position.z-se.z)/(se.rz-1),(M.g.position.x-se.x)/(se.rx-1.6)),M.r=Math.min(.85,Math.max(.2,Math.hypot((M.g.position.x-se.x)/(se.rx-1.6),(M.g.position.z-se.z)/(se.rz-1)))),M.g.userData.tail.rotation.y=Math.sin(_*16+M.a)*.6;return}if(M.jump>0){M.jump+=p*.9;let at=Math.sin(M.jump*Math.PI)*1.8;M.g.position.set(Un(M.jx,H,M.jump),-.34+at,Un(M.jz,rt,M.jump)),M.g.rotation.x=-Math.cos(M.jump*Math.PI)*1.1,M.jump>=1&&(M.jump=0,M.g.rotation.x=0,bn.position.set(H,-.1,rt),bn.material.opacity=.8,bn.scale.setScalar(1))}else{let at=H-M.g.position.x,Tt=rt-M.g.position.z;M.g.position.set(Un(M.g.position.x,H,Math.min(1,p*6)),-.34,Un(M.g.position.z,rt,Math.min(1,p*6))),(at||Tt)&&(M.g.rotation.y=Math.atan2(at,Tt)),Math.random()<p*.05&&(M.jump=.001,M.jx=H,M.jz=rt,bn.position.set(H,-.1,rt),bn.material.opacity=.8,bn.scale.setScalar(1))}M.g.userData.tail.rotation.y=Math.sin(_*8+M.a)*.5}),Xt.glints.forEach(M=>{M.t=(M.t+M.sp*p*6)%1;let H=Xt.curve.getPointAt(M.t),rt=Xt.curve.getTangentAt(M.t);M.m.position.set(H.x-rt.z*M.side,.06,H.z+rt.x*M.side),M.m.rotation.z=-Math.atan2(rt.z,rt.x),M.m.material.opacity=.35+Math.abs(Math.sin(_*3+M.side*9))*.5}),Xt.ftex.offset.y=(Xt.ftex.offset.y+p*1.6)%1,wt.jet.scale.y=1+Math.sin(_*6)*.08,Q.forEach(M=>{M.t=(M.t+p*.35)%1,M.m.position.set(M.x+Math.sin(M.t*6+M.z)*.3,-.1+M.t*1.8,M.z+M.t*.8),M.m.material.opacity=.55*(1-M.t),M.m.scale.setScalar(.6+M.t*1.2)}),wt.drops.forEach(M=>{M.t=(M.t+p*.7)%1;let H=.15+M.t*.95,rt=2.25+M.t*.6-M.t*M.t*2.35;M.m.position.set(Math.cos(M.a)*H,rt,Math.sin(M.a)*H)}),Xt.foam.forEach((M,H)=>{let rt=.8+Math.abs(Math.sin(_*5+H))*.5;M.scale.setScalar(rt)}),N.ducks.forEach(M=>{M.a+=M.sp*p;let H=se.x+Math.cos(M.a)*(se.rx-2),rt=se.z+Math.sin(M.a)*(se.rz-1.2);M.g.rotation.y=Math.atan2(H-M.g.position.x,rt-M.g.position.z)||M.g.rotation.y,M.g.position.set(H,-.2+Math.sin(_*2+M.a)*.03,rt)});for(let M=dn.length-1;M>=0;M--){let H=dn[M];H.material.opacity-=p*1.2,H.scale.multiplyScalar(1+p*2.5*H.userData.size),H.material.opacity<=0&&(Z.remove(H),H.geometry.dispose(),dn.splice(M,1))}bn.material.opacity>0&&(bn.material.opacity=Math.max(0,bn.material.opacity-p*.8),bn.scale.multiplyScalar(1+p*1.8)),Ir.forEach(M=>{M.ph+=p,M.g.position.set(M.cx+Math.sin(M.ph*.4)*6,1.6+Math.sin(M.ph*1.3)*.5,M.cz+Math.cos(M.ph*.33)*4),M.g.rotation.y=M.ph*.4+Math.PI/2;let H=Math.sin(M.ph*18)*1.1;M.g.userData.l.rotation.y=H,M.g.userData.r.rotation.y=-H});let C=Bs.geometry.attributes.position;for(let M=0;M<C.count;M++)C.setY(M,1.5+Math.sin(_*.8+M)*.8),C.setX(M,C.getX(M)+Math.sin(_*.5+M*3)*p*.4);if(C.needsUpdate=!0,I.forEach(M=>{M.position.x+=M.userData.speed*p,M.position.x>90&&(M.position.x=-90)}),cs&&Dd(p),O.rotation.y+=p*.012,A.forEach(M=>{M.position.y=M.userData.y0+Math.sin(_*.5+M.userData.ph)*.3}),W.forEach(M=>{M.material.opacity=M.userData.base*Math.max(0,Math.sin(_*1.8+M.userData.ph))}),tt.forEach(M=>{M.material.opacity=M.userData.base*(.55+.45*Math.sin(_*1.3+M.userData.ph))}),Lr>.6)if(G.t<0){if(G.wait-=p,G.wait<=0){let M=Vt(0,Math.PI*2);G.from.set(Math.cos(M)*180,Vt(110,170),Math.sin(M)*180-40),G.dir.set(Vt(-1,1),Vt(-.55,-.35),Vt(-.3,.3)).normalize(),G.t=0}}else{G.t+=p/1.1,F.position.copy(G.from).addScaledVector(G.dir,G.t*120);let M=F.position.clone().project(o),H=F.position.clone().addScaledVector(G.dir,10).project(o);F.material.rotation=Math.atan2(H.y-M.y,H.x-M.x),F.material.opacity=Math.sin(Math.min(1,G.t)*Math.PI)*.95,G.t>=1&&(G.t=-1,G.wait=Vt(7,16),F.material.opacity=0)}else F.material.opacity=0;let k=pt.userData.flag;k.rotation.y=Math.sin(_*3)*.25;let z=pt.userData.bell;z.material.emissiveIntensity=li?.6+Math.sin(_*6)*.4:0,z.rotation.z=li?Math.sin(_*7)*.35:0}let cs=null;function eu(p,_){if(!ft.car||cs)return!1;_=_||{};let v=ft.car,C={x:v.position.x,z:v.position.z,ry:v.rotation.y},k=et.nearest(ft.exit.x,ft.exit.z),z=new Set(et.doorNodes),H=et.nodes.map((xe,Je)=>Je).filter(xe=>!z.has(xe)&&Math.abs(Cn(et.nodes[xe].x,et.nodes[xe].z))<.2).filter(xe=>Math.hypot(et.nodes[xe].x-C.x,et.nodes[xe].z-C.z)>30),rt=xe=>xe[Math.floor(Math.random()*xe.length)],ct=(t.houses||[]).findIndex(xe=>xe.id==="store"),Ft=_.onShop&&ct>=0?et.nearest(et.nodes[et.doorNodes[ct]].x,et.nodes[et.doorNodes[ct]].z,!0):-1,at=(Ft>=0?[Ft]:[]).concat(H.length?[rt(H)]:[]),Tt=[{x:C.x,z:C.z},{x:ft.exit.x,z:ft.exit.z}],jt=k,me=-1;return at.concat([k]).forEach(xe=>{et.path(jt,xe).forEach(Je=>Tt.push({x:Je.x,z:Je.z})),jt=xe,xe===Ft&&me<0&&(me=Tt.length-1)}),Tt.push({x:ft.exit.x,z:ft.exit.z},{x:C.x,z:C.z-Math.cos(C.ry)*.01}),me>=0&&(Tt[me].shop=!0),Tt=Tt.filter((xe,Je)=>xe.shop||!Je||Math.hypot(xe.x-Tt[Je-1].x,xe.z-Tt[Je-1].z)>.3),cs={pts:Tt,i:1,home:C,done:p,v:0,last:0,onShop:_.onShop,wait:!1},!0}function Dd(p){let _=ft.car,v=cs,C=v.pts[v.i];if(v.wait)return;let k=v.i===v.pts.length-1,z=C.x-_.position.x,M=C.z-_.position.z,H=Math.hypot(z,M);if(v.v=Math.min(k?2:6.5,v.v+p*3),H<.35){if(C.shop&&v.onShop){C.shop=!1,v.wait=!0,v.v=0,v.onShop(()=>{cs===v&&(v.wait=!1)});return}if(v.i++,v.i>=v.pts.length){_.position.set(v.home.x,Cn(v.home.x,v.home.z),v.home.z),_.rotation.y=v.home.ry;let at=v.done;cs=null,at&&at();return}return}let rt=Math.min(H,v.v*p);_.position.x+=z/H*rt,_.position.z+=M/H*rt,_.position.y=Cn(_.position.x,_.position.z);let ct=Math.atan2(z,M)+(k?Math.PI:0),Ft=_.rotation.y;for(;ct-Ft>Math.PI;)ct-=Math.PI*2;for(;ct-Ft<-Math.PI;)ct+=Math.PI*2;_.rotation.y=Ft+(ct-Ft)*Math.min(1,p*5)}let Lr=0;function Dr(){let p=new Date,_=i!=null?i:p.getHours()+p.getMinutes()/60,v=Cd(_);Lr=v.night,r.background=v.sky,r.fog.color.copy(v.sky),x.uniforms.bottom.value.copy(v.sky).lerp(new re(16777215),.18*(1-v.night)).lerp(new re(10324950),.4*v.night),x.uniforms.top.value.copy(v.sky).lerp(new re(v.night>.5?2501490:7320547),.5),d.intensity=v.amb,d.color.set(v.night>.5?13158143:16777215),d.groundColor.set(v.night>.5?8160432:12048288),g.color.copy(v.sun),g.intensity=v.power;let C=(_-6)/12*Math.PI,z=_>=5.5&&_<=18.6?C:((_+12)%24-6)/12*Math.PI,M=Math.cos(z)*70,H=Math.max(Math.sin(z),.25)*70;g.position.set(M,H,40),g.target.position.set(0,0,0),T.position.set(Math.cos(C)*200,Math.sin(C)*160,-120),T.visible=Math.sin(C)>-.05;let rt=((_+12)%24-6)/12*Math.PI;b.position.set(Math.cos(rt)*200,Math.sin(rt)*160,-120),b.visible=v.night>.3&&Math.sin(rt)>0,D.material.opacity=v.night,tt.forEach(ct=>{ct.userData.base=v.night}),O.mat.color.set(v.night>.5?10131656:16777215),W.forEach(ct=>{ct.userData.base=.55+v.night*.45}),Bs.material.opacity=v.night*.95,ec.forEach(ct=>{ct.emissiveIntensity=v.night*.95}),y.forEach(ct=>{ct.intensity=v.night*18}),I.forEach(ct=>{ct.userData.mat.color.set(v.night>.5?8029096:16777215)}),Ir.forEach(ct=>{ct.g.visible=v.night<.5})}let Do=1,Uo=1;function No(){Do=n.clientWidth||window.innerWidth,Uo=n.clientHeight||window.innerHeight,s.setSize(Do,Uo,!1),o.aspect=Do/Uo,o.updateProjectionMatrix()}let Ei=new cn;function Ud(p,_){Ei.fov=o.fov,Ei.aspect=o.aspect,Ei.near=.5,Ei.far=1e3,Ei.updateProjectionMatrix();let v=[];for(let M=0;M<48;M++){let H=M/48*Math.PI*2,rt=Pr(H);v.push(new U(Math.cos(H)*rt,0,Math.sin(H)*rt))}v.push(new U(Rn[0],9+Os.h,Rn[1])),Us.forEach(([M,H,rt,ct])=>v.push(new U(M,ct,H))),tn.forEach(([M,H])=>v.push(new U(M,6.5,H)));let C=M=>{Ei.position.set(0,Math.cos(p)*M,Math.sin(p)*M).add(_),Ei.lookAt(_),Ei.updateMatrixWorld();let H=new U;return v.every(rt=>(H.copy(rt).project(Ei),Math.abs(H.x)<.97&&H.y>-.97&&H.y<.86))},k=10,z=600;for(let M=0;M<30;M++){let H=(k+z)/2;C(H)?z=H:k=H}return z}function rc(){No();let p=e==="port"?.6:.88,_=new U(0,0,1.5),v=Ud(p,_);return{p:new U(0,Math.cos(p)*v,Math.sin(p)*v).add(_),t:_}}function nu(){let p=rc();a.target.copy(p.t),o.position.copy(p.p),a.update()}let Nd=1800,Od=1900,He=null,Ur=!1,Nr=null,oc=p=>p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;function iu(p){let _=p.userData.face||0,v=Math.sin(_),C=Math.cos(_),k=p.userData.doorZ-1.3,z=p.position.y,M=(H,rt)=>new U(p.position.x+v*(k+H),z+rt,p.position.z+C*(k+H));return{near:M(3.2,1.75),nearT:M(-1,1.45),inside:M(.35,1.6),insideT:M(-2,1.4)}}function su(p,_,v,C){if(!v)return p.clone().lerp(_,C);let k=p.clone().lerp(_,C),z=_.clone().lerp(v,C);return k.lerp(z,C)}function Fd(p,_,v){let C=X.find(z=>z.userData.id===p);if(!C){_&&_();return}let k=iu(C);Nr={p:o.position.clone(),t:a.target.clone()},He={mode:"in",start:performance.now(),dur:Nd,h:C,done:_,at:v&&v.at,atFired:!1,p:[Nr.p,k.near,k.inside],t:[Nr.t,k.nearT,k.insideT]},a.enabled=!1,Ur=!0}function Bd(p,_){let v=X.find(z=>z.userData.id===p);if(!v){ru(),_&&_();return}let C=iu(v),k=Nr||rc();v.userData.hinge&&(v.userData.hinge.rotation.y=-1.7),o.position.copy(C.inside),a.target.copy(C.insideT),o.lookAt(a.target),He={mode:"out",start:performance.now(),dur:Od,h:v,done:_,p:[C.inside,C.near,k.p],t:[C.insideT,C.nearT,k.t]},a.enabled=!1,Ur=!0}function zd(){if(!He)return;let p=Math.min(1,(performance.now()-He.start)/He.dur),_=oc(p);o.position.copy(su(He.p[0],He.p[1],He.p[2],_)),a.target.copy(su(He.t[0],He.t[1],He.t[2],_)),o.lookAt(a.target);let v=He.h.userData.hinge;if(v&&(He.mode==="in"?v.rotation.y=-1.7*oc(Math.min(1,Math.max(0,(p-.25)/.45))):v.rotation.y=-1.7*(1-oc(Math.min(1,Math.max(0,(p-.2)/.5))))),He.at&&!He.atFired&&p>=He.at.k&&(He.atFired=!0,He.at.fn()),p>=1){let C=He.done,k=He.mode;He=null,k==="out"&&(Ur=!1,a.enabled=!0,a.update()),C&&C()}}function ru(){if(!Ur||He&&He.mode==="out")return;Ur=!1,He=null,a.enabled=!0,X.forEach(_=>{_.userData.hinge&&(_.userData.hinge.rotation.y=0)});let p=Nr||rc();o.position.copy(p.p),a.target.copy(p.t),a.update()}let ks=new Er,ou=new Mt,bi=null,Vs=0,ac=!1;window.addEventListener("pointerdown",p=>{!p.isTrusted||p.pointerType!=="touch"||(p.isPrimary&&(Vs=0,ac=!1),Vs++,Vs>1&&(ac=!0))},!0);let au=p=>{p.isTrusted&&p.pointerType==="touch"&&(Vs=Math.max(0,Vs-1))};window.addEventListener("pointerup",au,!0),window.addEventListener("pointercancel",au,!0),s.domElement.addEventListener("pointerdown",p=>{(p.isPrimary||p.pointerType!=="touch")&&(bi={x:p.clientX,y:p.clientY,t:performance.now()})}),s.domElement.addEventListener("pointercancel",()=>{bi=null}),s.domElement.addEventListener("pointerup",p=>{if(!p.isTrusted||p.pointerType==="touch"&&(ac||Vs>0)){bi=null;return}if(!bi||Math.hypot(p.clientX-bi.x,p.clientY-bi.y)>8||performance.now()-bi.t>600){bi=null;return}bi=null;let _=s.domElement.getBoundingClientRect();if(ou.set((p.clientX-_.left)/_.width*2-1,-((p.clientY-_.top)/_.height)*2+1),ks.setFromCamera(ou,o),Et.her&&Et.her.g.visible&&Et.him.g.visible&&ks.intersectObjects([Et.her.g,Et.him.g],!0)[0]){Et.kiss>0||(Et.kiss=2.4,Et.her.sitting||(Et.her.path=[],Et.her.wait=Math.max(Et.her.wait,2.8)));return}if(ft.car&&!cs&&t.onCar&&ks.intersectObject(ft.car,!0)[0]){t.onCar();return}let v=ks.intersectObjects([Y.g,Dt.g],!0)[0];if(v){let M=Y.g.getObjectById(v.object.id)?Y:Dt;M.sleep>0||(M.sleep=3,M.sleepIn=0,M.path=[]);return}let C=ks.intersectObject(dt)[0];if(C){Ae(C.point.x-Z.position.x,C.point.z-Z.position.z);return}let k=ks.intersectObjects(X,!0)[0];if(!k)return;let z=k.object;for(;z&&!z.userData.id;)z=z.parent;z&&t.onPick(z.userData.id)});let Or=new U;function Hd(p){let _=X.find(v=>v.userData.id===p);return _?(Or.set(_.position.x,_.position.y+_.userData.top,_.position.z),Or.project(o),{x:(Or.x+1)/2*Do,y:(1-Or.y)/2*Uo,visible:Or.z<1}):null}let cc=new To,Fr=!1,Gs=!0,cu=0,lu=[];function hu(){if(!Fr)return;if(!Gs||document.hidden){Fr=!1;return}requestAnimationFrame(hu);let p=Math.min(.12,cc.getDelta()),_=cc.elapsedTime;_-cu>20&&(Dr(),cu=_),Ld(p,_),He?zd():a.update(),s.render(r,o),lu.forEach(v=>v()),Vn()}function lc(){Fr||(Fr=!0,cc.getDelta(),requestAnimationFrame(hu))}let uu=()=>{!document.hidden&&Gs&&(Dr(),lc())},fu=()=>{Gs&&No()};return document.addEventListener("visibilitychange",uu),window.addEventListener("resize",fu),Dr(),nu(),lc(),/[?&]debug3d/.test(location.search)&&(window.__v3d={drive:p=>eu(p),get car(){return ft.car},renderer:s,people:Rt,couple:Et,get swing(){return oe},graph:et,cat:Y,dog:Dt,routine:rs,realHour:hi,camera:o,controls:a,water:dt,food:Te,get urgent(){return li}}),{setUrgent(p){let _=li;li=p||0,!!_!=!!li&&Rt.forEach(v=>{!v.love&&!v.helper&&(v.path=[],v.wait=Vt(0,1.5))})},setBusy(p){let _={};(t.houses||[]).forEach((v,C)=>{p&&p[v.id]>0&&(_[C]=p[v.id])}),Yt=_,jh()},anchor:Hd,onFrame(p){lu.push(p)},night(){return Lr},setTimeMode(p){i=p==="day"?11:p==="night"?22:null,Dr()},show(p){Gs=!!p,Gs&&(ru(),No(),Dr(),lc())},enterHouse:Fd,exitHouse:Bd,drive:eu,setNames(p,_){Ze=p||null,ki=!!_,as(),fi()},genderOf(p){let _=Rt.find(v=>!v.love&&!v.helper&&(t.houses||[])[v.home]&&t.houses[v.home].id===p);return _?wd(_.parts.look)?"f":"m":""},resize:No,recenter:nu,layout:e,destroy(){Fr=!1,Gs=!1,document.removeEventListener("visibilitychange",uu),window.removeEventListener("resize",fu),a.dispose(),r.traverse(p=>{p.geometry&&p.geometry.dispose()}),s.dispose(),s.domElement.remove()}}}var En=9,Zn=7,vn=4.4,ic=7;function $a(n,t){return new re(n).lerp(new re(16777215),t).getHex()}function oi(n,t,e,i,s){let r=new Jt;return r.position.set(t,0,e),r.rotation.y=i||0,n.add(r),r.add(L(2.2,.08,1,s||14267535,0,.78,0)),[[-1,-.42],[1,-.42],[-1,.42],[1,.42]].forEach(([o,a])=>r.add(L(.08,.78,.08,11569768,o,.39,a))),r}function Bn(n,t,e,i){let s=new Jt;return s.position.set(t,0,e),s.rotation.y=i||0,n.add(s),s.add(L(.55,.08,.55,16165309,0,.5,0)),s.add(L(.55,.6,.08,16165309,0,.82,-.26)),[[-.22,-.22],[.22,-.22],[-.22,.22],[.22,.22]].forEach(([r,o])=>s.add(L(.06,.5,.06,9206379,r,.25,o))),s}function Ls(n,t,e){n.add(L(.7,.04,.48,14211296,t,.84,e));let i=L(.7,.46,.04,14211296,t,1.07,e-.24);i.rotation.x=-.25,n.add(i);let s=L(.62,.38,.02,0,t,1.07,e-.215,new Ke({color:12576498}));s.rotation.x=-.25,n.add(s)}function ai(n,t,e,i,s){let r=new Jt;r.position.set(t,0,e),r.rotation.y=i||0,n.add(r),r.add(L(1.8,2.4,.4,12883572,0,1.2,0));for(let o=0;o<4;o++){r.add(L(1.7,.06,.36,14862765,0,.3+o*.55,.03));for(let a=0;a<(s||6);a++){let c=Mi.flower[(a+o)%Mi.flower.length],l=.3+(a*7+o*3)%4*.04;r.add(L(.16,l,.28,c===16777215?10934504:c,-.7+a*.24,.33+o*.55+l/2,.05))}}return r}function An(n,t,e){n.add(L(.5,.5,.5,0,t,.25,e,Xe(ut.CLAY,16368540))),[[0,.78,0,.56],[.2,1.18,.1,.36],[-.18,1.12,-.12,.34]].forEach(([i,s,r,o],a)=>n.add(L(o,o,o,0,t+i,s,e+r,Xe([ut.LEAF_G,ut.LEAF_L,ut.LEAF_M][a]))))}function Hi(n,t,e,i,s,r,o,a,c){let l=new Jt;return l.position.set(t,e,i),l.rotation.y=s,n.add(l),l.add(L(r+.12,o+.12,.05,12883572,0,0,0)),l.add(L(r,o,.06,a,0,0,.01)),(c||[]).forEach(([h,u,f,d])=>l.add(L(d||.32,d||.32,.03,f,h,u,.06))),l}function Po(n,t,e,i,s){let r=[[-.45,.25],[-.15,.45],[.15,.35],[.45,.6]],o=Hi(n,t,e,i,s,1.4,1.1,16775920);return r.forEach(([a,c],l)=>o.add(L(.2,c,.03,[16758465,10934504,14542964,14273008][l],a,-.4+c/2,.06))),o}function _d(n,t,e,i,s,r){let o=r?2.2:1.1,a=r?1.6:.9,c=Hi(n,t,e,i,s,o,a,16777215);c.add(L(o,a*.18,.04,16751536,0,a*.41,.05));for(let l=0;l<4;l++)for(let h=0;h<7;h++){let u=(l*7+h)%9===3;c.add(L(o/9,a/7,.02,u?16766687:15985894,-o/2+(h+1)*o/8,a*.2-l*a/5.5,.06))}return c}function f1(n,t,e,i,s){let r=new Jt;r.position.set(t,e,i),r.rotation.y=s,n.add(r);let o=new At(new ke(.35,.35,.06,20),ue(16775920));o.rotation.x=Math.PI/2,r.add(o);let a=new At(new ws(.36,.04,6,20),ue(16165309));r.add(a);let c=L(.04,.18,.02,4865855,0,.08,.05),l=L(.03,.27,.02,4865855,0,.12,.06);return r.add(c,l),r.userData.hands=[c,l],r}function d1(n,t,e){let i=new At(new hn(.28,12,10),ue(16758465));i.scale.set(1.3,1,1),i.position.set(t,1.1,e),n.add(i),n.add(L(.12,.1,.1,16751536,t+.38,1.1,e)),[[-.15,-.12],[.15,-.12],[-.15,.12],[.15,.12]].forEach(([s,r])=>n.add(L(.07,.12,.07,16751536,t+s,.86,e+r))),n.add(L(.12,.02,.03,9202282,t,1.38,e));for(let s=0;s<3;s++)for(let r=0;r<2+s;r++){let o=new At(new ke(.09,.09,.03,12),ue(16111752));o.position.set(t-.7+s*.22,.84+r*.035,e+.1),n.add(o)}}function yd(n,t,e,i){let s=new Jt;s.position.set(t,0,e),s.rotation.y=i||0,n.add(s),s.add(L(1,1.1,.9,10135480,0,.55,0));let r=new At(new ke(.14,.14,.05,14),ue(16111752));return r.rotation.x=Math.PI/2,r.position.set(.15,.6,.46),s.add(r),s.add(L(.06,.3,.05,16111752,-.3,.6,.46)),s}function p1(n,t,e,i){let s=new Jt;return s.position.set(t,0,e),s.rotation.y=i||0,n.add(s),s.add(L(2,.08,.45,12883572,0,1.3,0)),s.add(L(2,.08,.45,12883572,0,.6,0)),[-1,1].forEach(r=>s.add(L(.08,1.4,.45,11569768,r*.96,.7,0))),[.6,1.3].forEach((r,o)=>[-.65,-.2,.25,.7].forEach((a,c)=>{let l=new At(new ke(.15,.15,.4,12),new Me({color:15136507,transparent:!0,opacity:.7}));l.position.set(a,r+.24,0),s.add(l);let h=.08+(c+o*2)%4*.08,u=new At(new ke(.12,.12,h,12),ue(16111752));u.position.set(a,r+.06+h/2,0),s.add(u)})),s}function m1(n,t,e,i){let s=new Jt;return s.position.set(t,0,e),s.rotation.y=i||0,n.add(s),s.add(L(.9,1.5,.7,10934504,0,.75,0)),[.35,.8,1.25].forEach(r=>{s.add(L(.8,.38,.04,12576498,0,r,.36)),s.add(L(.25,.05,.05,16775920,0,r+.08,.39))}),s}function g1(n,t,e){[0,2.1,4.2].forEach(r=>{let o=L(.04,1.4,.04,7035470,t+Math.cos(r)*.25,.65,e+Math.sin(r)*.25);o.rotation.set(Math.sin(r)*.3,0,-Math.cos(r)*.3),n.add(o)}),n.add(L(.4,.28,.25,4865855,t,1.45,e));let i=new At(new ke(.09,.09,.15,12),ue(3025462));i.rotation.x=Math.PI/2,i.position.set(t,1.45,e+.18),n.add(i);let s=new At(new ws(.4,.05,6,24),new Ke({color:16774351}));s.position.set(t-.9,1.7,e-.3),n.add(s),n.add(L(.04,1.7,.04,7035470,t-.9,.85,e-.3))}function x1(n,t,e,i,s){let r=Hi(n,t,e,i,s,1.2,.7,15785156);[-.4,-.13,.13,.4].forEach((o,a)=>{r.add(L(.05,.05,.08,9206379,o,.18,.08)),r.add(L(.1,.22,.03,[16111752,10934504,16758465,10738109][a],o,-.02,.08))})}var Vh={work:{first:"list",build(n,t){let e=oi(n,-1.6,-2.4);Ls(e,.2,0),e.add(L(.3,.2,.22,16777215,-.75,.92,.1)),Bn(n,-1.4,-1.55,Math.PI),t.seat={x:-1.4,z:-1.6,ry:Math.PI,y:.54},Hi(n,-4.45,1.8,.4,Math.PI/2,2.6,1.4,16777215,[[-.9,.35,16773544],[-.4,.4,16758465],[.1,.3,10934504],[.6,.38,10738109],[-.8,-.2,16758465],[-.2,-.25,16773544],[.5,-.2,14273008]]),ai(n,4.25,-.6,-Math.PI/2),Po(n,4.44,2.2,1.6,-Math.PI/2),g1(n,3.4,4.6),An(n,-3.9,-3)},corners:{list:[.8,2.9,5.8,-1.3,1,-2.2],board:[2.4,2.7,4.2,-4.3,1.6,.3],stats:[-2.4,2.7,4.2,4.3,1.5,.3],posts:[-.6,2.5,8.6,3.2,1.3,4.4]}},money:{first:"overview",build(n,t){let e=oi(n,0,-2.3,0,16368540);d1(e,.4,0),e.add(L(.35,.05,.45,9417689,-.5,.84,.1)),Bn(n,.2,-1.45,Math.PI),t.seat={x:.2,z:-1.5,ry:Math.PI,y:.54},_d(n,-4.44,1.9,-.8,Math.PI/2,!0),Po(n,-4.44,1.9,2.1,Math.PI/2),p1(n,4.2,-1,-Math.PI/2),m1(n,3.6,-3,0),yd(n,3.6,2,-Math.PI/2.5),An(n,-3.9,-3),t.windowX=-1.9},corners:{overview:[.6,2.9,5.8,0,1,-2.3],calendar:[2.6,2.7,3.6,-4.3,1.8,-.8],stats:[2.6,2.7,5.4,-4.3,1.8,1.8],budget:[-2.4,2.7,3.6,4.2,1.1,-1.2],history:[-1.6,2.7,3.8,3.4,1,-3],categories:[-1.6,2.5,6.2,3.6,.7,2]}},calendar:{first:"main",build(n,t){_d(n,-.1,2.05,-3.44,0,!0),f1(n,-2.6,2.5,-3.44,0),t.windowX=2.9;let e=oi(n,-1.2,-1.6);e.add(L(.5,.06,.36,16773544,.3,.84,0)),e.add(L(.04,.04,.3,15834032,.65,.88,0)),Bn(n,-1,-.75,Math.PI),t.seat={x:-1,z:-.8,ry:Math.PI,y:.54},ai(n,4.25,.2,-Math.PI/2,5),An(n,3.8,2.6)},corners:{main:[-.2,2.9,5.8,-.4,1.5,-2.8]}},account:{first:"main",build(n,t){yd(n,3.7,-2.6,-.3),x1(n,-.5,2,-3.44,0),t.windowX=1.7;let e=oi(n,-1.8,-1.8,.2);Ls(e,0,0),Bn(n,-1.75,-.95,Math.PI+.2),t.seat={x:-1.72,z:-1,ry:Math.PI+.2,y:.54},ai(n,-4.25,.6,Math.PI/2,5),An(n,3.9,1.8)},corners:{main:[-.2,2.9,5.8,-.9,1.2,-2.4]}},love:{first:"main",build(n,t){let i=new Jt;i.position.set(.5,0,-2.4),n.add(i),i.add(L(2.6,.45,.9,16165309,0,.32,0)),i.add(L(2.6,.75,.25,15834032,0,.8,-.35)),[-1,1].forEach(F=>i.add(L(.25,.65,.9,15834032,F*1.3,.45,0)));let s=ss(16744350);s.scale.setScalar(.4),s.position.set(1,.75,-.15),i.add(s),t.seats=[{x:.05,z:-2.25,ry:0,y:.56},{x:.95,z:-2.25,ry:0,y:.56}],t.sofa=!0,t.couple=!0,[[1.1,2.95,.55,3095915],[1.4,2.95,-.55,15230251]].forEach(([F,G,Z,q])=>{let mt=new Jt;mt.position.set(F,G,-3.44+.06),mt.rotation.z=Z,n.add(mt),mt.add(L(.06,.34,.05,16777215,0,-.5,0)),mt.add(L(.025,.34,.025,10135480,0,-.17,0));let j=new At(new ws(.17,.02,6,22),ue(q));j.scale.y=1.3,j.position.y=.2,mt.add(j);for(let vt=-3;vt<=3;vt++)mt.add(L(.004,.42,.004,16777215,vt*.045,.2,0)),mt.add(L(.32,.004,.004,16777215,0,.2+vt*.055,0))});{let F=document.createElement("canvas");F.width=128,F.height=64;let G=F.getContext("2d");G.fillStyle="#ffffff",G.fillRect(0,0,128,64),G.fillStyle="#e8652b",G.fillRect(0,8,128,16),G.fillStyle="#26305a",G.beginPath(),G.moveTo(0,64),G.lineTo(0,24),G.lineTo(14,24),G.lineTo(30,64),G.fill(),G.fillStyle="#26305a",G.fillRect(0,6,128,2),G.fillRect(26,28,102,2),G.font="bold 13px sans-serif",G.fillText("YONEX",74,54),G.beginPath(),G.arc(60,49,3,0,7),G.arc(67,49,3,0,7),G.lineWidth=2,G.strokeStyle="#26305a",G.stroke();let Z=new ln(F);Z.colorSpace=Ie;let q=ue(16777215),mt=new Me({map:Z}),j=new At(new ze(1.15,.58,.36),[q,q,ue(15230251),q,mt,mt]);j.position.set(1.25,1.62,-3.44+.22),j.castShadow=!0,n.add(j),[-.28,.28].forEach(vt=>{n.add(L(.06,.5,.03,16777215,1.25+vt*.9,2.02,-3.44+.2))}),n.add(L(.5,.06,.06,2502746,1.25,2.28,-3.44+.2)),n.add(L(.06,.06,.16,9206379,1.25,2.32,-3.44+.1))}n.add(L(1.42,1.08,.06,12883572,-.4,2.55,-3.44+.02)),n.add(L(1.28,.94,.07,16775920,-.4,2.55,-3.44+.03));let r=new At(new Qi(1.1,.78),new Ke({color:16766687}));r.position.set(-.4,2.55,-3.44+.075),r.userData.pick="frame",n.add(r),t.frames=[r];for(let F=0;F<14;F++){let G=new At(new hn(.05,6,5),new Ke({color:[16773544,16758465][F%2]}));G.position.set(-4+F*.62,3.45-Math.sin(F*.9)*.08,-3.38),n.add(G)}let o=new Jt;o.position.set(2.45,0,-2.4),n.add(o);let a=new At(new ke(.42,.42,.06,18),ue(14861214));a.position.y=.6,o.add(a),o.add(L(.07,.6,.07,11569768,0,.3,0));let c=new At(new ke(.22,.25,.04,14),ue(11569768));c.position.y=.02,o.add(c);let l=new At(new hn(.13,16,12),ue(13231096));l.scale.y=1.3,l.position.y=.8,o.add(l),[[0,1.08,0,16758465],[.08,1.02,.05,16773544],[-.08,1.04,-.03,16165309]].forEach(([F,G,Z,q])=>{o.add(L(.015,.25,.015,8173679,F*.6,.95,Z*.6));let mt=new At(new hn(.06,10,8),ue(q));mt.position.set(F,G,Z),o.add(mt)});let h=new Jt;h.userData.pick="up",n.add(h);let u=Xe(ut.PLANKS),f=Xe(ut.PLANK_GREY,16165309);for(let F=0;F<10;F++){let G=-1.35-F*.32,Z=(F+1)*.44;h.add(L(.32,Z,.95,0,G,Z/2,-2.95,u)),h.add(L(.32,.04,.6,0,G,Z+.02,-2.95,f)),F%3===0&&h.add(L(.06,.8,.06,16777215,G,Z+.4,-2.45))}{let F=Math.hypot(3.2,4.4),G=L(F,.08,.08,16777215,-1.35-1.6+.16,2.2+.8+.22,-2.45);G.rotation.z=-Math.atan2(4.4,3.2),h.add(G)}let d=gd(Math.PI/2,.8);d.position.set(-1.85,1.75,-2.35),h.add(d);let g=new Jt;g.position.set(1.3,0,1.25),n.add(g),g.add(L(1.5,.06,.95,14861214,0,.76,0)),[[-.65,-.38],[.65,-.38],[-.65,.38],[.65,.38]].forEach(([F,G])=>g.add(L(.06,.76,.06,11569768,F,.38,G))),[-1,1].forEach(F=>{let G=Bi("bowl",{soup:"#f6efe0",noodle:"#fffaf0"},.3);G.position.set(F*.4-.16,.79,-.18),g.add(G);let Z=Bi("bowl",{soup:"#d98c4a",top:["#8a5233","#8a5233","#a86a40","#7fc46a"]},.3);Z.position.set(F*.4+.16,.79,-.18),g.add(Z),g.add(L(.32,.012,.012,12883572,F*.4,.8,.05)),g.add(L(.32,.012,.012,12883572,F*.4,.8,.08))});let y=Bi("plate",{dots:["#6fb85a","#8fcc7c","#6fb85a","#8fcc7c","#6fb85a","#8fcc7c","#6fb85a","#8fcc7c"]},.4);y.position.set(0,.79,-.05),g.add(y),Bn(n,1.3-.4,1.25-.85,0),Bn(n,1.3+.4,1.25-.85,0),t.dining=[{x:1.3-.4,z:1.25-.8,ry:0,y:.54},{x:1.3+.4,z:1.25-.8,ry:0,y:.54}],t.windowX=3.1,An(n,3.95,-2.9),t.dinner=g,t.defaultDishes=g.children.slice(5);let x=14,m=new Jt;m.position.x=x,n.add(m);let T=Zn+ic,b=ic/2;for(let F=0;F<12;F++){let G=L(En/12,.1,T,F%2?15981768:15651517,-En/2+(F+.5)*En/12,-.05,b);G.castShadow=!1,m.add(G)}let E=L(En,vn,.12,t.wall,0,vn/2,-Zn/2);E.castShadow=!1,m.add(E),[-1,1].forEach(F=>{let G=L(.12,vn,T,t.wall2,F*En/2,vn/2,b);G.castShadow=!1,m.add(G)});let V=L(En,.12,T,0,0,vn+.06,b,new Me({color:t.ceil,emissive:t.ceil,emissiveIntensity:.3}));V.castShadow=!1,m.add(V),m.add(L(1.9,1.5,.08,16777215,2.9,2.3,-Zn/2+.06)),m.add(L(1.7,1.3,.09,0,2.9,2.3,-Zn/2+.07,t.skyMat)),[-1,1].forEach(F=>m.add(L(.26,1.8,.05,16762063,2.9+F*1.08,2.25,-Zn/2+.2))),m.add(L(2.8,.4,3.4,15918810,0,.28,-1.85)),m.add(L(2.6,.22,3.2,16777215,0,.58,-1.85)),m.add(L(3,1.5,.22,16171471,0,1,-3.48)),m.add(L(2.7,.18,.1,16372702,0,1.6,-3.36)),[-.62,.62].forEach(F=>m.add(L(1,.2,.55,16775925,F,.8,-3))),m.add(L(2.72,.12,2.35,16368595,0,.98,-1.25)),m.add(L(2.74,.14,.32,16777215,0,.99,-2.3)),[-1.4,1.4].forEach(F=>m.add(L(.12,.5,2.3,16368595,F,.75,-1.25)));let D=ss(16748465);D.scale.setScalar(.32),D.position.set(0,1.25,-3.3),m.add(D),[-1.95,1.95].forEach(F=>{m.add(L(.75,.62,.6,14861214,F,.31,-3.05)),m.add(L(.79,.05,.64,15785156,F,.64,-3.05)),m.add(L(.5,.05,.02,12883572,F,.42,-2.74))}),m.add(L(.22,.22,.22,16171471,-1.95,.77,-3.05));let I=new At(new ze(.4,.3,.4),new Me({color:16773590,emissive:16765562,emissiveIntensity:0,map:ri(ut.PLASTER)}));I.position.set(-1.95,1.02,-3.05),m.add(I),t.bedLamp=I;let O=new Jt;O.position.set(1.95,.7,-3),O.rotation.y=-.3,O.userData.pick="album",m.add(O),O.add(L(.5,.08,.38,13231096,0,0,0)),O.add(L(.04,.085,.38,11127784,-.25,0,0));let A=ss(16027569);A.scale.setScalar(.15),A.rotation.x=-Math.PI/2,A.position.set(.02,.045,.06),O.add(A),t.album=O;let S=new Jt;S.userData.pick="down",m.add(S),S.add(L(1.3,.04,2.6,12098694,-3.75,.005,1.2)),[.1,.6,1.1,1.6,2.1].forEach((F,G)=>S.add(L(1.2,.03,.42,10257008,-3.75,.02,.05+F-G*.02)));for(let F=0;F<6;F++)S.add(L(.06,.85,.06,16777215,-3.05,.42,-.05+F*.5));S.add(L(.08,.08,2.6,16777215,-3.05,.86,1.2));let B=gd(-Math.PI*3/4,.45);B.position.set(-3.75,.75,1.2),S.add(B);let tt=new At(new ke(1,1,.03,32),ue(14281207));tt.scale.set(1.8,1,1.1),tt.position.set(.6,.02,1),m.add(tt),An(m,3.95,.4);for(let F=0;F<14;F++){let G=new At(new hn(.05,6,5),new Ke({color:[16773544,16758465][F%2]}));G.position.set(-4+F*.62,3.45-Math.sin(F*.9)*.08,-3.38),m.add(G)}t.bedSpots=[{x:x-.45,z:-1.42},{x:x+.45,z:-1.42}]},corners:{main:[.2,2.8,6.6,0,1.3,-1.9],bed:[14.2,2.6,3.4,14,.9,-2.3],meal:[1,2.6,5.6,1.2,1,-.6],album:[15.75,1.75,-1.85,15.9,.55,-3.05]}},game:{first:"main",build(n,t){n.add(L(2.6,.6,.6,12883572,0,.3,-3.05)),n.add(L(2.2,1.3,.1,3025462,0,1.35,-3.15));let e=L(2.05,1.15,.02,0,0,1.35,-3.09,new Ke({color:10934504}));n.add(e),[[-.6,1.55,16758465],[.1,1.2,16111752],[.6,1.6,10738109]].forEach(([s,r,o])=>n.add(L(.3,.3,.01,0,s,r,-3.075,new Ke({color:o})))),n.add(L(.5,.12,.35,16777215,.8,.66,-2.95));let i=new At(new hn(.7,14,10),ue(16165309));i.scale.set(1.1,.6,1),i.position.set(.2,.4,-.4),i.castShadow=!0,n.add(i),t.seats=[{x:.2,z:-.45,ry:Math.PI,y:.78}],t.gamer=!0,Po(n,-4.44,2.2,-.8,Math.PI/2),Hi(n,4.44,2.2,-.4,-Math.PI/2,1.2,1.5,14273008,[[0,.3,16758465,.5],[0,-.35,16111752,.4]]),ai(n,-4.25,1.8,Math.PI/2,5),An(n,3.9,-3),t.windowX=2.9},corners:{main:[.4,2.8,5.6,0,1.1,-2.6]}},language:{first:"main",build(n,t){let e=oi(n,-1.2,-2.3,0,16171471);e.add(L(.5,.05,.36,16777215,-.2,.83,0)),e.add(L(.5,.05,.36,16774888,.32,.83,0)),e.add(L(.02,.06,.36,12883572,.06,.84,0)),[10934504,16758465,16111752].forEach((s,r)=>e.add(L(.4,.07,.28,s,.85,.83+r*.075,-.05)));let i=new At(new hn(.18,20,14),ue(10473444));i.position.set(-.8,1.08,0),e.add(i),e.add(L(.05,.25,.05,12883572,-.8,.9,0)),Bn(n,-1,-1.45,Math.PI),t.seat={x:-1,z:-1.5,ry:Math.PI,y:.54},Hi(n,-4.45,1.9,.2,Math.PI/2,2.4,1.4,16777215,[[-.75,.35,16758465],[-.25,.35,16773544],[.25,.35,10934504],[.75,.35,10738109],[-.5,-.25,14273008],[0,-.25,16758465],[.5,-.25,16773544]]),ai(n,4.25,-.4,-Math.PI/2,5),Po(n,4.44,2.3,1.8,-Math.PI/2),An(n,3.9,-3),t.windowX=2.2},corners:{main:[-.3,2.9,5.8,-.9,1.1,-2.3]}},skills:{first:"main",build(n,t){let e=oi(n,-.6,-2.3,0,16111752);Ls(e,-.3,0),e.add(L(.45,.04,.32,16777215,.45,.83,.05)),e.add(L(.02,.02,.3,15235487,.62,.86,.05));let i=L(.6,.3,.32,15035243,3.4,.15,-2.6);n.add(i),n.add(L(.3,.05,.05,3814720,3.4,.35,-2.6)),Bn(n,-.4,-1.45,Math.PI),t.seat={x:-.4,z:-1.5,ry:Math.PI,y:.54};let s=new Jt;s.position.set(-3.3,0,-1.6),s.rotation.y=.5,n.add(s),[-.4,.4].forEach(r=>{let o=L(.07,1.9,.07,12883572,r,.95,0);o.rotation.z=-r*.15,s.add(o)}),s.add(L(1,.8,.05,16777215,0,1.35,.06)),s.add(L(.5,.3,.06,10934504,-.15,1.45,.08)),s.add(L(.25,.25,.06,16758465,.25,1.2,.08)),Hi(n,4.44,2,-.5,-Math.PI/2,1.6,1.2,16777215,[[-.5,-.25,10738109,.3],[-.15,-.1,16111752,.3],[.2,.05,16758465,.3],[.55,.2,10934504,.3]]),ai(n,-4.25,1.4,Math.PI/2,5),An(n,3.9,2.4),t.windowX=2.4},corners:{main:[0,2.9,5.8,-.3,1.1,-2.2]}},notes:{first:"main",build(n,t){let e=oi(n,-.8,-2.3,0,16111752);Ls(e,.4,0),[16758465,10934504,16773544].forEach((i,s)=>e.add(L(.36,.05,.48,i,-.5,.83+s*.055,.02+s*.03))),Bn(n,-.6,-1.45,Math.PI),t.seat={x:-.6,z:-1.5,ry:Math.PI,y:.54},Hi(n,-.6,2.2,-3.44,0,2.6,1.3,14267535,[[-1,.35,16773544],[-.55,.3,16758465],[-.1,.38,10934504],[.35,.32,10738109],[.85,.36,16773544],[-.8,-.25,14273008],[-.3,-.22,16773544],[.2,-.28,16758465],[.7,-.24,10934504]]),ai(n,4.25,-.4,-Math.PI/2,5),An(n,-3.9,-3),t.windowX=2.8},corners:{main:[-.2,2.9,5.8,-.6,1.3,-2.4]}},goals:{first:"main",build(n,t){Hi(n,0,2.15,-3.44,0,3,1.6,16777215,[[-1.1,.35,10934504,.45],[-.45,.4,16758465,.4],[.55,.38,10738109,.45],[1.15,.3,16111752,.4],[-.9,-.35,14273008,.45],[.95,-.35,16758465,.4]]);let e=ss(16765803);e.scale.setScalar(.5),e.position.set(0,2.1,-3.3),n.add(e);let i=oi(n,-1.8,-1.9,.25,14273008);Ls(i,0,0),Bn(n,-1.7,-1.05,Math.PI+.25),t.seat={x:-1.68,z:-1.1,ry:Math.PI+.25,y:.54};let s=new At(new ke(.22,.12,.36,18),ue(16107596));s.position.set(3.7,1.28,-2.7),n.add(s),n.add(L(.5,.9,.5,15785156,3.7,.45,-2.7)),n.add(L(.2,.12,.2,16107596,3.7,1,-2.7)),An(n,-3.9,-3),t.windowX=3.2},corners:{main:[.2,2.8,5.8,-.2,1.4,-2.4]}},health:{first:"main",build(n,t){let e=L(1,.04,2,10738109,-1.6,.03,-.6);e.castShadow=!1,n.add(e),[[-.7,-1.4],[-.45,-1.4]].forEach(([o,a])=>{n.add(L(.36,.05,.05,9080729,o,.12,a)),[-.16,.16].forEach(c=>{let l=new At(new ke(.1,.1,.08,16),ue(15834032));l.rotation.z=Math.PI/2,l.position.set(o+c,.12,a),n.add(l)})}),n.add(L(.9,1.6,.8,16777215,3.6,.8,-2.9)),n.add(L(.05,.4,.05,12633806,3.2,1,-2.48)),n.add(L(.9,.04,.82,15328478,3.6,1.1,-2.9));let i=oi(n,1.2,-2.4,0,16766665),s=new At(new hn(.25,20,12,0,Math.PI*2,Math.PI/2,Math.PI/2),ue(16777215));s.position.set(0,1.04,0),i.add(s),[[16744319,-.08,0],[16765803,.08,.04],[10147472,0,-.08]].forEach(([o,a,c])=>{let l=new At(new hn(.09,14,10),ue(o));l.position.set(a,1.04,c),i.add(l)});let r=new At(new ke(.07,.07,.3,14),ue(10473444));r.position.set(.5,.98,.1),i.add(r),Bn(n,1.4,-1.55,Math.PI),t.seat={x:1.4,z:-1.6,ry:Math.PI,y:.54},Po(n,-4.44,2.2,-.6,Math.PI/2),An(n,-3.9,-3),t.windowX=-.6},corners:{main:[.4,2.8,5.8,.2,1,-2]}},law:{first:"main",build(n,t){ai(n,-4.25,-.8,Math.PI/2,5),ai(n,-4.25,1.4,Math.PI/2,5),ai(n,4.25,-.4,-Math.PI/2,5);let e=oi(n,.2,-2.3,0,12883572);Ls(e,-.4,0);let i=new Jt;i.position.set(.55,.83,0),e.add(i),i.add(L(.04,.5,.04,14267466,0,.25,0)),i.add(L(.5,.03,.03,14267466,0,.48,0)),[-.24,.24].forEach(s=>{let r=new At(new ke(.09,.06,.03,16),ue(14267466));r.position.set(s,.3,0),i.add(r),i.add(L(.01,.18,.01,14267466,s,.39,0))}),Bn(n,.4,-1.45,Math.PI),t.seat={x:.4,z:-1.5,ry:Math.PI,y:.54},An(n,3.9,2.4),t.windowX=2.4},corners:{main:[.2,2.9,5.8,.1,1.2,-2.3]}},store:{first:"main",build(n,t){n.add(L(2.6,1,.7,10147520,-.2,.5,-1.15)),n.add(L(2.7,.06,.8,16777215,-.2,1.03,-1.15));for(let f=0;f<5;f++)n.add(L(.3,.6,.02,8372906,-1.2+f*.5,.5,-.79));let s=new Jt;s.position.set(.55,1.06,-1.2),n.add(s),s.add(L(.5,.14,.4,5591134,0,.07,0));let r=L(.4,.28,.04,5591134,0,.32,-.12);r.rotation.x=-.3,s.add(r);let o=L(.34,.22,.02,0,0,.32,-.095,new Ke({color:12579544}));o.rotation.x=-.3,s.add(o);for(let f=0;f<3;f++)for(let d=0;d<3;d++)s.add(L(.07,.02,.06,15394544,-.1+d*.1,.15,.04+f*.06));let a=Bi("onigiri",{},.26);a.position.set(-.9,1.06,-1.1),n.add(a);let c=Bi("cup",{drink:"#d9b08a",boba:!0},.3);c.position.set(-.55,1.06,-1.05),n.add(c);let l=Bi("bun",{bun:"#fff8ee"},.26);l.position.set(-1.25,1.06,-1.15),n.add(l);let h=[["cup",{drink:"#ff8fb0",cream:!0}],["cookie",{}],["donut",{}],["onigiri",{}],["mochi",{}],["cup",{drink:"#8a5a3a",ice:!0}],["kimbap",{}],["flan",{}]];[-2.6,2.2].forEach((f,d)=>{let g=new Jt;g.position.set(f,0,-3.15),n.add(g),g.add(L(1.9,2.3,.5,15920614,0,1.15,0));for(let y=0;y<4;y++){g.add(L(1.8,.05,.46,14208964,0,.32+y*.52,.04));for(let x=0;x<5;x++){let[m,T]=h[(x+y*2+d*3)%h.length],b=Bi(m,T,.3);b.position.set(-.72+x*.36,.35+y*.52,.06),g.add(b)}}g.add(L(1.9,.18,.52,d?16165309:16765803,0,2.2,.02))});let u=new Jt;u.position.set(4,0,-.6),u.rotation.y=-Math.PI/2,n.add(u),u.add(L(1.6,2.3,.7,15266552,0,1.15,0)),u.add(L(1.44,2,.02,0,0,1.15,.36,new Ke({color:14677247,transparent:!0,opacity:.35})));for(let f=0;f<4;f++)for(let d=0;d<5;d++){let g=[16748410,10147472,16765803,10473471,16752575][(d+f)%5];u.add(L(.14,.32,.14,g,-.56+d*.28,.36+f*.48,.12)),u.add(L(.1,.06,.1,16777215,-.56+d*.28,.55+f*.48,.12))}u.add(L(1.6,.2,.72,10147520,0,2.2,0)),An(n,-4,2.4),t.seat={x:-.1,z:-1.85,ry:0,y:0,stand:!0},t.windowX=-3.2},corners:{main:[.1,1.9,5,-.1,1.45,-2.2]}},other:{first:"main",build(n,t){let e=oi(n,-1,-2.3);Ls(e,0,0),Bn(n,-.8,-1.45,Math.PI),t.seat={x:-.8,z:-1.5,ry:Math.PI,y:.54},ai(n,4.25,-.6,-Math.PI/2),An(n,-3.9,-3)},corners:{main:[0,2.9,5.8,0,1.1,-2]}}};function _1(n,t){$h.length=0,t=t||{};let e=Vh[t.house]||(t.kind==="game"?Vh.game:Vh.other),i=new co({antialias:!0});i.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),i.shadowMap.enabled=!0,i.shadowMap.type=ka,n.appendChild(i.domElement);let s=new lo,r=new cn(48,1,.1,100),o=$a(t.roof||16165309,.72),a=$a(t.roof||16165309,.55);s.background=new re($a(t.roof||16165309,.82));let c=new Jt;s.add(c);let l=Zn+ic,h=ic/2;for(let W=0;W<12;W++){let J=L(En/12,.1,l,W%2?15323054:14861214,-En/2+(W+.5)*En/12,-.05,h);J.castShadow=!1,c.add(J)}let u=L(En,vn,.12,o,0,vn/2,-Zn/2);u.castShadow=!1,c.add(u),[-1,1].forEach(W=>{let J=L(.12,vn,l,a,W*En/2,vn/2,h);J.castShadow=!1,J.receiveShadow=!0,c.add(J)});let f=$a(t.roof||16165309,.9),d=L(En,.12,l,0,0,vn+.06,h,new Me({color:f,emissive:f,emissiveIntensity:.3}));d.castShadow=!1,c.add(d);let g=W=>{W.castShadow=!1,c.add(W)};g(L(En,.16,.12,16777215,0,vn-.08,-Zn/2+.1)),[-1,1].forEach(W=>g(L(.12,.16,l,16777215,W*(En/2-.1),vn-.08,h))),g(L(En,.14,.04,16777215,0,.07,-Zn/2+.08)),[-1,1].forEach(W=>g(L(.04,.14,l,16777215,W*(En/2-.08),.07,h)));let y=new Ke({color:12575733}),x=new At(new ke(1,1,.03,32),ue(16176348));x.scale.set(2,1,1.3),x.position.set(.3,.02,.6),x.receiveShadow=!0,c.add(x);let m=L(.03,.55,.03,9206379,.3,vn-.27,.3);m.castShadow=!1,c.add(m);let T=new At(new ze(.6,.4,.6),new Me({color:16773544,emissive:16765562,emissiveIntensity:0,map:ri(ut.PLASTER)}));T.position.set(.3,vn-.72,.3),T.castShadow=!1,c.add(T);let b={wall:o,wall2:a,ceil:f,skyMat:y};e.build(c,b);{let W=b.windowX!=null?b.windowX:2.2,J=2.1,X=-Zn/2;c.add(L(1.9,1.5,.08,16777215,W,J,X+.06)),c.add(L(1.7,1.3,.09,0,W,J,X+.07,y)),c.add(L(.05,1.3,.1,16777215,W,J,X+.1)),c.add(L(1.7,.05,.1,16777215,W,J,X+.1));let xt=L(2.5,.05,.05,12883572,W,J+.9,X+.2);xt.castShadow=!1,c.add(xt),[-1,1].forEach(ft=>{let pt=L(.24,1.75,.05,16762063,W+ft*1.08,J+0,X+.2);pt.castShadow=!1,c.add(pt);let yt=L(.28,.06,.07,16165309,W+ft*1.08,J-.25,X+.22);yt.castShadow=!1,c.add(yt)})}let E=[];c.traverse(W=>{W.userData.hands&&(E=W.userData.hands)});let V=b.seats||(b.seat?[b.seat]:[]),D=t.looks||(t.look?[t.look]:[]),I=V.slice(0,D.length).map((W,J)=>{let X=nc(D[J]);return c.add(X.g),W.stand?(X.g.position.set(W.x,0,W.z),X.g.rotation.y=W.ry,X.standing=!0,X):(X.g.position.set(W.x,W.y-Yh,W.z),X.g.rotation.y=W.ry,X.parts.legL.rotation.x=X.parts.legR.rotation.x=-1.45,X)}),O=(t.guests||[]).map((W,J)=>{let X=nc(W);return c.add(X.g),X.g.position.set(J?1:-1.25,0,-.25),X.g.rotation.y=Math.PI+(J?.25:-.25),X}),A=b.sofa||b.gamer?null:I[0]||null,S="",B=[];b.couple&&I.forEach((W,J)=>{W.g.userData.pick="couple";let X=t.names&&(J===0?t.names.her:t.names.him)||(J===0?"namu":"hunf"),xt=a1(X,"#ffffff",.19);c.add(xt),B.push(xt)});let tt=(()=>{let W=ss(16744350);return W.scale.setScalar(.16),W.visible=!1,c.add(W),W})(),F=-1,G="",Z=!1,q=!1,mt=()=>G==="bed"?"bed":S==="lunch"||S==="dinner"?"meal":e.corners[t.corner]?t.corner:e.first,j=null,vt=document.createElement("div");vt.style.cssText="position:absolute;inset:0;background:#fff6ee;opacity:0;pointer-events:none;transition:opacity .45s ease;z-index:2",getComputedStyle(n).position==="static"&&(n.style.position="relative"),n.appendChild(vt);let ht=(W,J,X)=>new U(W,J,X),Wt={up:{legs:[[ht(-.5,1.7,.6),ht(-3.2,3,-2.95),.9],[ht(-2.7,3.7,-2),ht(-5.4,5.6,-2.95),.9,!0]],out:[ht(10.7,1.7,2.9),ht(12.8,1.2,-1.2)]},down:{legs:[[ht(11.2,1.75,2.4),ht(10.25,.1,.9),.8],[ht(10.6,1.05,1.5),ht(10.2,-.8,.2),.7,!0]],out:[ht(-3.7,4.3,-2.1),ht(-.6,1.6,-2.95)]}};function ce(W,J){let X=G&&W!==G;if(G=W,J||!X){j=null,vt.style.opacity=0,Gt(mt(),J);return}j={def:Wt[W==="bed"?"up":"down"],leg:0,t:0,p0:Xt.clone(),t0:le.clone()}}function Ee(W){let J=j.def.legs[j.leg];j.t+=W/J[2],J[3]&&vt.style.opacity!=="1"&&(vt.style.opacity=1);let X=Math.min(1,j.t),xt=X*X*(3-2*X);if(Xt.lerpVectors(j.p0,J[0],xt),le.lerpVectors(j.t0,J[1],xt),dt.copy(Xt),wt.copy(le),!(X<1)){if(++j.leg<j.def.legs.length){j.t=0,j.p0=Xt.clone(),j.t0=le.clone();return}Xt.copy(j.def.out[0]),le.copy(j.def.out[1]),j=null,Gt(mt(),!1),setTimeout(()=>{vt.style.opacity=0},120)}}let lt=Ad("z Z z","#7a6a9a",.9,.45);if(c.add(lt),t.onPick){let W=new Er,J=new Mt,X=null,xt=i.domElement,ft=(yt,et)=>{let It=xt.getBoundingClientRect();J.set((yt-It.left)/It.width*2-1,-((et-It.top)/It.height)*2+1),W.setFromCamera(J,r);let Rt=W.intersectObjects(c.children,!0).find(Ut=>{if(Ut.object.isSprite)return!1;let Yt=Ut.object;for(;Yt&&!Yt.userData.pick;)Yt=Yt.parent;return!!Yt});if(!Rt)return"";let Et=Rt.object;for(;Et&&!Et.userData.pick;)Et=Et.parent;return Et.userData.pick},pt=yt=>{if(yt==="couple"){F<0&&(F=0);return}if(yt==="up"||yt==="down"){Z=!0,ce(yt==="up"?"bed":"main");return}if(yt==="album"){q=!0,Gt("album"),setTimeout(()=>t.onPick("album"),750);return}t.onPick(yt)};xt.addEventListener("contextmenu",yt=>yt.preventDefault()),xt.addEventListener("pointerdown",yt=>{X={x:yt.clientX,y:yt.clientY,type:yt.pointerType}}),xt.addEventListener("pointerup",yt=>{if(!X||Math.hypot(yt.clientX-X.x,yt.clientY-X.y)>8){X=null;return}X=null;let et=ft(yt.clientX,yt.clientY);et&&pt(et)})}let St=b.gamer?I[0]:null,Zt=new bo(16777215,14861214,1.4);s.add(Zt);let _t=new wo(16774374,1.6);_t.position.set(2.5,vn-.3,8),_t.target.position.set(0,0,-2),s.add(_t.target),_t.castShadow=!0,_t.shadow.mapSize.set(1024,1024),Object.assign(_t.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:.5,far:25}),_t.shadow.bias=-.001,s.add(_t);let $t=new So(16767392,0,12,1.3);$t.position.set(.3,vn-1.1,.3),s.add($t);function ae(){let W=new Date,J=t.timeMode==="day"?11:t.timeMode==="night"?22:W.getHours()+W.getMinutes()/60,X=Cd(J);y.color.copy(X.sky),Zt.intensity=1.5-X.night*.7,_t.intensity=1.6*(1-X.night)+.2,$t.intensity=X.night*8,T.material.emissiveIntensity=X.night,E.length&&(E[0].rotation.z=-(W.getHours()%12)/12*Math.PI*2,E[1].rotation.z=-W.getMinutes()/60*Math.PI*2)}let Xt=new U,le=new U,dt=new U,wt=new U;function N(W){return e.corners[W]||e.corners[e.first]}function Gt(W,J){let X=N(W);dt.set(X[0],X[1],X[2]),wt.set(X[3],X[4],X[5]),J&&(Xt.copy(dt),le.copy(wt))}Gt(t.corner,!0),t.walkIn&&(Xt.set(0,1.7,Zn/2+3.2),le.set(0,1.4,-Zn/2));function bt(){let W=n.clientWidth||innerWidth,J=n.clientHeight||innerHeight;i.setSize(W,J,!1),r.aspect=W/J,r.fov=W/J<.9?64:50,W/J<.9?r.setViewOffset(W,J,0,-J*.2,W,J):r.clearViewOffset(),r.updateProjectionMatrix()}bt();let Ot=()=>bt();window.addEventListener("resize",Ot);let Pt=new To,te=new U,Ht=!0,P=0;function w(){if(!Ht||(requestAnimationFrame(w),document.hidden))return;let W=Math.min(.1,Pt.getDelta()),J=Pt.elapsedTime;if(j?Ee(W):(Xt.lerp(dt,Math.min(1,W*1.6)),le.lerp(wt,Math.min(1,W*1.6))),r.position.copy(Xt),r.lookAt(le),o1(J),b.couple){let X=new Date,xt=X.getHours()+X.getMinutes()/60,ft=xt>=22||xt<6.5?"sleep":xt>=11.5&&xt<13?"lunch":xt>=18.5&&xt<19.75?"dinner":"sofa";if(ft!==S){S=ft,!Z&&!q&&ce(ft==="sleep"?"bed":"main",!G&&!t.walkIn);let pt=ft==="lunch"||ft==="dinner"?b.dining:b.seats;I.forEach((yt,et)=>{if(ft==="sleep"){let It=b.bedSpots[et];yt.g.position.set(It.x,.9,It.z),yt.g.rotation.set(-Math.PI/2,0,0),yt.parts.legL.rotation.x=yt.parts.legR.rotation.x=0}else yt.g.position.set(pt[et].x,pt[et].y-Yh,pt[et].z),yt.g.rotation.set(0,pt[et].ry,0),yt.parts.legL.rotation.x=yt.parts.legR.rotation.x=-1.45;yt.sleepMap||(yt.sleepMap=Sd(yt.parts.look,!0)),yt.awakeMap||(yt.awakeMap=yt.parts.mat.map),yt.parts.mat.map=ft==="sleep"?yt.sleepMap:yt.awakeMap,yt.parts.mat.needsUpdate=!0}),lt.visible=ft==="sleep"}if(I.forEach((pt,yt)=>{let et=yt===0?-1:1;S==="lunch"||S==="dinner"?(pt.parts.armL.rotation.x=-.9,pt.parts.armR.rotation.x=-1.35+Math.sin(J*2.6+yt*1.7)*.45,pt.parts.head.rotation.set(.12+Math.max(0,Math.sin(J*2.6+yt*1.7))*.12,0,0)):S==="sleep"?(pt.parts.armL.rotation.x=pt.parts.armR.rotation.x=0,pt.parts.head.rotation.set(.6,-et*(.35+Math.sin(J*.9)*.03),0)):(pt.parts.armL.rotation.x=pt.parts.armR.rotation.x=-.6,pt.parts.head.rotation.set(0,-et*.25,-et*(.18+Math.sin(J*.8)*.04)))}),lt.visible&&(lt.position.set(14,1.6+J*.25%.4,-3),lt.material.opacity=.9-J*.25%.4*1.5),I.forEach((pt,yt)=>{pt.parts.head.getWorldPosition(B[yt].position),B[yt].position.y+=S==="sleep"?.62:.55}),F>=0){F+=W;let pt=I[1],yt=I[0],et=Math.sin(Math.min(1,F/1.6)*Math.PI);pt.parts.head.rotation.y+=(S==="sleep"?-.5:-.9)*et,pt.parts.head.rotation.z+=.25*et,yt.parts.head.rotation.z-=.2*et,S!=="sleep"&&(pt.g.rotation.z=.16*et);let It=new U;yt.parts.head.getWorldPosition(It);let Rt=new U;pt.parts.head.getWorldPosition(Rt),tt.visible=F>.5,tt.position.copy(It).lerp(Rt,.5),tt.position.y+=.35+(F-.5)*.35,tt.scale.setScalar(.12+Math.min(1,(F-.5)*2)*.06),tt.rotation.y=r.rotation.y,F>2.1&&(F=-1,tt.visible=!1,pt.g.rotation.z=0)}b.bedLamp&&(b.bedLamp.material.emissiveIntensity=S==="sleep"?.15:.6*$t.intensity/8)}else b.sofa&&I.forEach((X,xt)=>{X.parts.armL.rotation.x=X.parts.armR.rotation.x=-.6,X.parts.head.rotation.z=(xt===0?-1:1)*(.18+Math.sin(J*.8)*.04),X.parts.head.rotation.y=(xt===0?1:-1)*.25});if(St&&(St.parts.armL.rotation.x=St.parts.armR.rotation.x=-1.1+Math.sin(J*14)*.05,St.parts.head.rotation.x=-.05,St.parts.head.rotation.y=Math.sin(J*.5)*.08),O.forEach((X,xt)=>{X.parts.head.rotation.y=Math.sin(J*.5+xt*2)*.3,X.parts.armL.rotation.x=Math.sin(J*.8+xt)*.06}),A&&A.standing){let X=J%9<1.4;A.parts.armL.rotation.x=-.35+Math.sin(J*1.3)*.05,A.parts.armR.rotation.x=X?-2.6:-.35+Math.sin(J*1.3+1)*.05,A.parts.armR.rotation.z=X?-.3+Math.sin(J*14)*.25:0,A.parts.head.rotation.y=Math.sin(J*.4)*.2,A.parts.head.rotation.x=0}else A&&(A.parts.armL.rotation.x=-1.2+Math.sin(J*9)*.12,A.parts.armR.rotation.x=-1.2+Math.sin(J*9+1.8)*.12,A.parts.head.rotation.x=.15+Math.sin(J*.6)*.05,A.parts.head.rotation.y=Math.sin(J*.35)*.25);(J-P>20||P===0)&&(ae(),P=J||.001),i.render(s,r),te.set(.3,.05,.6).project(r),document.documentElement.style.setProperty("--rug-x",((te.x+1)/2*100).toFixed(1)+"vw"),document.documentElement.style.setProperty("--rug-y",((1-te.y)/2*100).toFixed(1)+"vh")}ae(),requestAnimationFrame(w),/[?&]debug3d/.test(location.search)&&(window.__room={camera:r,R:b,renderer:i,sitters:I});function Q(W){if(!b.dinner)return;(b.foodMeshes||[]).forEach(xt=>{b.dinner.remove(xt)}),b.foodMeshes=[],W=(W||[]).filter(xt=>xt&&xt.name).slice(0,4),b.defaultDishes.forEach(xt=>{xt.visible=!W.length});let J=[[0],[-.33,.33],[-.48,0,.48],[-.54,-.18,.18,.54]][Math.max(0,W.length-1)]||[],X=new vo;X.setCrossOrigin("anonymous"),W.forEach((xt,ft)=>{let pt=new Jt;pt.position.set(J[ft],.8,-.12+ft%2*.06),b.dinner.add(pt),b.foodMeshes.push(pt);let yt=new At(new ke(.2,.15,.05,24),ue(16777215));pt.add(yt);let et=new At(new ws(.19,.015,8,24),ue([16171471,13231096,16773544,13495501][ft]));et.rotation.x=Math.PI/2,et.position.y=.025,pt.add(et);let It=xt.key&&window.FoodArt&&window.FoodArt.spec&&window.FoodArt.spec(xt.key);if(It){pt.remove(yt),pt.remove(et),pt.add(L(.46,.02,.46,[16171471,13231096,16773544,13495501][ft],0,-.01,0));let Yt=Bi(It.tpl,It.o,.4);Yt.position.y=0,Yt.rotation.y=(ft-1.5)*.25,pt.add(Yt);return}let Rt=new Me({color:16777215}),Et=new At(new Na(.16,28),Rt);Et.rotation.x=-Math.PI/2,Et.position.y=.03,pt.add(Et);let Ut=()=>{let Yt=document.createElement("canvas");Yt.width=Yt.height=128;let qt=Yt.getContext("2d");qt.fillStyle=["#ffe1e9","#e1f0fb","#fff6cf","#e3f5e1"][ft],qt.fillRect(0,0,128,128),qt.font="64px sans-serif",qt.textAlign="center",qt.fillText("\u{1F372}",64,76),qt.font="800 16px Nunito, sans-serif",qt.fillStyle="#8a5a6a",qt.fillText(xt.name.slice(0,14),64,112),Rt.map=new ln(Yt),Rt.map.colorSpace=Ie,Rt.needsUpdate=!0};if(!xt.img){Ut();return}if(/^data:image\/svg/.test(xt.img)){let Yt=new Image;Yt.onload=()=>{let qt=document.createElement("canvas");qt.width=qt.height=256;let ve=qt.getContext("2d");ve.fillStyle="#fffaf5",ve.fillRect(0,0,256,256),ve.drawImage(Yt,0,0,256,256),Rt.map=new ln(qt),Rt.map.colorSpace=Ie,Rt.needsUpdate=!0},Yt.onerror=Ut,Yt.src=xt.img;return}X.load(xt.img,Yt=>{Yt.colorSpace=Ie;let qt=Yt.image.width/Yt.image.height;qt>1?(Yt.repeat.set(1/qt,1),Yt.offset.set((1-1/qt)/2,0)):(Yt.repeat.set(1,qt),Yt.offset.set(0,(1-qt)/2)),Rt.map=Yt,Rt.needsUpdate=!0},void 0,Ut)})}return{house:t.house,setCorner(W){if(b.couple){t.corner=W,q||Gt(mt(),!1);return}Gt(W,!1)},back(){q=!1,Gt(mt(),!1)},setFood:Q,get floor(){return G},setPhotos(W){if(!b.frames)return;let J=new vo;b.frames.forEach((X,xt)=>{W[xt]&&J.load(W[xt],ft=>{ft.colorSpace=Ie;let pt=ft.image,yt=X.geometry.parameters.width,et=X.geometry.parameters.height,It=pt.width/pt.height,Rt=yt/et;It>Rt?(ft.repeat.set(Rt/It,1),ft.offset.set((1-Rt/It)/2,0)):(ft.repeat.set(1,It/Rt),ft.offset.set(0,(1-It/Rt)/2)),X.material.map=ft,X.material.color.set(16777215),X.material.needsUpdate=!0})})},setTimeMode(W){t.timeMode=W,ae()},destroy(){Ht=!1,window.removeEventListener("resize",Ot),s.traverse(W=>{W.geometry&&W.geometry.dispose()}),i.dispose(),i.domElement.remove(),vt.remove()}}}window.Village3D={create:u1,room:_1,LOOKS:Qa,LOVE:Xh,ROOF:Mi.roof,lookAs:Td};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
