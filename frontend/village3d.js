(()=>{var nh="170",Ms={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pd=0,Wh=1,md=2;var of=1,La=2,vi=3,Yi=0,dn=1,ln=2,Wi=0,js=1,Xh=2,Yh=3,qh=4,gd=5,as=100,xd=101,_d=102,yd=103,vd=104,Md=200,Ed=201,bd=202,Sd=203,Ic=204,Lc=205,wd=206,Td=207,Ad=208,Rd=209,Cd=210,Pd=211,Id=212,Ld=213,Dd=214,Dc=0,Uc=1,Nc=2,nr=3,Oc=4,Fc=5,zc=6,Bc=7,ih=0,Ud=1,Nd=2,Xi=0,Od=1,Fd=2,zd=3,Bd=4,Hd=5,kd=6,Vd=7;var af=300,ir=301,sr=302,Hc=303,kc=304,Da=306,Gr=1e3,ls=1001,Vc=1002,Xe=1003,Gd=1004;var Ao=1005;var oi=1006,$a=1007;var hs=1008;var Si=1009,cf=1010,lf=1011,Wr=1012,sh=1013,us=1014,Mi=1015,po=1016,rh=1017,oh=1018,rr=1020,hf=35902,uf=1021,ff=1022,$n=1023,df=1024,pf=1025,Qs=1026,or=1027,mf=1028,ah=1029,gf=1030,ch=1031;var lh=1033,ia=33776,sa=33777,ra=33778,oa=33779,Gc=35840,Wc=35841,Xc=35842,Yc=35843,qc=36196,Zc=37492,Jc=37496,Kc=37808,$c=37809,jc=37810,Qc=37811,tl=37812,el=37813,nl=37814,il=37815,sl=37816,rl=37817,ol=37818,al=37819,cl=37820,ll=37821,aa=36492,hl=36494,ul=36495,xf=36283,fl=36284,dl=36285,pl=36286;var ca=2300,ml=2301,ja=2302,Zh=2400,Jh=2401,Kh=2402;var Wd=3200,Xd=3201;var _f=0,Yd=1,Vi="",Ue="srgb",ur="srgb-linear",Ua="linear",Re="srgb";var Ls=7680;var $h=519,qd=512,Zd=513,Jd=514,yf=515,Kd=516,$d=517,jd=518,Qd=519,gl=35044;var jh="300 es",Ei=2e3,la=2001,wi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qh=1234567,Fr=Math.PI/180,Xr=180/Math.PI;function ai(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[e&63|128]+un[e>>8&255]+"-"+un[e>>16&255]+un[e>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function nn(i,t,e){return Math.max(t,Math.min(e,i))}function hh(i,t){return(i%t+t)%t}function tp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ep(i,t,e){return i!==t?(e-i)/(t-i):0}function zr(i,t,e){return(1-e)*i+e*t}function np(i,t,e,n){return zr(i,t,1-Math.exp(-e*n))}function ip(i,t=1){return t-Math.abs(hh(i,t*2)-t)}function sp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function rp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function op(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ap(i,t){return i+Math.random()*(t-i)}function cp(i){return i*(.5-Math.random())}function lp(i){i!==void 0&&(Qh=i);let t=Qh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function hp(i){return i*Fr}function up(i){return i*Xr}function fp(i){return(i&i-1)===0&&i!==0}function dp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function pp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function mp(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),f=r((t-n)/2),u=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*f,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*f,a*l);break;case"ZXZ":i.set(c*f,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Kn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function we(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var vf={DEG2RAD:Fr,RAD2DEG:Xr,generateUUID:ai,clamp:nn,euclideanModulo:hh,mapLinear:tp,inverseLerp:ep,lerp:zr,damp:np,pingpong:ip,smoothstep:sp,smootherstep:rp,randInt:op,randFloat:ap,randFloatSpread:cp,seededRandom:lp,degToRad:hp,radToDeg:up,isPowerOfTwo:fp,ceilPowerOfTwo:dp,floorPowerOfTwo:pp,setQuaternionFromProperEuler:mp,normalize:we,denormalize:Kn},xt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(nn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},he=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],_=s[0],x=s[3],p=s[6],T=s[1],b=s[4],M=s[7],B=s[2],P=s[5],D=s[8];return r[0]=o*_+a*T+c*B,r[3]=o*x+a*b+c*P,r[6]=o*p+a*M+c*D,r[1]=l*_+h*T+f*B,r[4]=l*x+h*b+f*P,r[7]=l*p+h*M+f*D,r[2]=u*_+d*T+g*B,r[5]=u*x+d*b+g*P,r[8]=u*p+d*M+g*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=h*o-a*l,u=a*c-h*r,d=l*r-o*c,g=e*f+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=f*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=u*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Qa.makeScale(t,e)),this}rotate(t){return this.premultiply(Qa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Qa=new he;function Mf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gp(){let i=Yr("canvas");return i.style.display="block",i}var tu={};function Nr(i){i in tu||(tu[i]=!0,console.warn(i))}function xp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function _p(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function yp(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Me={enabled:!0,workingColorSpace:ur,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Re&&(i.r=bi(i.r),i.g=bi(i.g),i.b=bi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Re&&(i.r=tr(i.r),i.g=tr(i.g),i.b=tr(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Vi?Ua:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function tr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var eu=[.64,.33,.3,.6,.15,.06],nu=[.2126,.7152,.0722],iu=[.3127,.329],su=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ru=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Me.define({[ur]:{primaries:eu,whitePoint:iu,transfer:Ua,toXYZ:su,fromXYZ:ru,luminanceCoefficients:nu,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:eu,whitePoint:iu,transfer:Re,toXYZ:su,fromXYZ:ru,luminanceCoefficients:nu,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}});var Ds,xl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ds===void 0&&(Ds=Yr("canvas")),Ds.width=t.width,Ds.height=t.height;let n=Ds.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ds}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Yr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bi(e[n]/255)*255):e[n]=bi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},vp=0,ha=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=ai(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(tc(s[o].image)):r.push(tc(s[o]))}else r=tc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function tc(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?xl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Mp=0,pn=class i extends wi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ls,s=ls,r=oi,o=hs,a=$n,c=Si,l=i.DEFAULT_ANISOTROPY,h=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=ai(),this.name="",this.source=new ha(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==af)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gr:t.x=t.x-Math.floor(t.x);break;case ls:t.x=t.x<0?0:1;break;case Vc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gr:t.y=t.y-Math.floor(t.y);break;case ls:t.y=t.y<0?0:1;break;case Vc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=af;pn.DEFAULT_ANISOTROPY=1;var Ce=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],g=c[9],_=c[2],x=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(g+x)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(l+1)/2,M=(d+1)/2,B=(p+1)/2,P=(h+u)/4,D=(f+_)/4,F=(g+x)/4;return b>M&&b>B?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=P/n,r=D/n):M>B?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=P/s,r=F/s):B<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(B),n=D/r,s=F/r),this.set(n,s,r,e),this}let T=Math.sqrt((x-g)*(x-g)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(x-g)/T,this.y=(f-_)/T,this.z=(u-h)/T,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_l=class extends wi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new pn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ha(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ti=class extends _l{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ua=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var yl=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],u=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=u,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f!==_||c!==u||l!==d||h!==g){let x=1-a,p=c*u+l*d+h*g+f*_,T=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let B=Math.sqrt(b),P=Math.atan2(B,p*T);x=Math.sin(x*P)/B,a=Math.sin(a*P)/B}let M=a*T;if(c=c*x+u*M,l=l*x+d*M,h=h*x+g*M,f=f*x+_*M,x===1-a){let B=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=B,l*=B,h*=B,f*=B}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[o],u=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*f+c*d-l*u,t[e+1]=c*g+h*u+l*f-a*d,t[e+2]=l*g+h*d+a*u-c*f,t[e+3]=h*g-a*f-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),f=a(r/2),u=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"YZX":this._x=u*h*f+l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f-u*d*g;break;case"XZY":this._x=u*h*f-l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(nn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ou.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ou.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+c*l+o*f-a*h,this.y=n+c*h+a*l-r*f,this.z=s+c*f+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ec.copy(this).projectOnVector(t),this.sub(ec)}reflect(t){return this.sub(ec.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(nn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ec=new L,ou=new jn,fs=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Yn):Yn.fromBufferAttribute(r,o),Yn.applyMatrix4(t.matrixWorld),this.expandByPoint(Yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ro.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ro.copy(n.boundingBox)),Ro.applyMatrix4(t.matrixWorld),this.union(Ro)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Yn),Yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ar),Co.subVectors(this.max,Ar),Us.subVectors(t.a,Ar),Ns.subVectors(t.b,Ar),Os.subVectors(t.c,Ar),Oi.subVectors(Ns,Us),Fi.subVectors(Os,Ns),ts.subVectors(Us,Os);let e=[0,-Oi.z,Oi.y,0,-Fi.z,Fi.y,0,-ts.z,ts.y,Oi.z,0,-Oi.x,Fi.z,0,-Fi.x,ts.z,0,-ts.x,-Oi.y,Oi.x,0,-Fi.y,Fi.x,0,-ts.y,ts.x,0];return!nc(e,Us,Ns,Os,Co)||(e=[1,0,0,0,1,0,0,0,1],!nc(e,Us,Ns,Os,Co))?!1:(Po.crossVectors(Oi,Fi),e=[Po.x,Po.y,Po.z],nc(e,Us,Ns,Os,Co))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},mi=[new L,new L,new L,new L,new L,new L,new L,new L],Yn=new L,Ro=new fs,Us=new L,Ns=new L,Os=new L,Oi=new L,Fi=new L,ts=new L,Ar=new L,Co=new L,Po=new L,es=new L;function nc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){es.fromArray(i,r);let a=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),c=t.dot(es),l=e.dot(es),h=n.dot(es);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Ep=new fs,Rr=new L,ic=new L,ar=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ep.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rr.subVectors(t,this.center);let e=Rr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Rr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ic.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rr.copy(t.center).add(ic)),this.expandByPoint(Rr.copy(t.center).sub(ic))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},gi=new L,sc=new L,Io=new L,zi=new L,rc=new L,Lo=new L,oc=new L,ds=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=gi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gi.copy(this.origin).addScaledVector(this.direction,e),gi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){sc.copy(t).add(e).multiplyScalar(.5),Io.copy(e).sub(t).normalize(),zi.copy(this.origin).sub(sc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Io),a=zi.dot(this.direction),c=-zi.dot(Io),l=zi.lengthSq(),h=Math.abs(1-o*o),f,u,d,g;if(h>0)if(f=o*c-a,u=o*a-c,g=r*h,f>=0)if(u>=-g)if(u<=g){let _=1/h;f*=_,u*=_,d=f*(f+o*u+2*a)+u*(o*f+u+2*c)+l}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(sc).addScaledVector(Io,u),d}intersectSphere(t,e){gi.subVectors(t.center,this.origin);let n=gi.dot(this.direction),s=gi.dot(gi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,gi)!==null}intersectTriangle(t,e,n,s,r){rc.subVectors(e,t),Lo.subVectors(n,t),oc.crossVectors(rc,Lo);let o=this.direction.dot(oc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,t);let c=a*this.direction.dot(Lo.crossVectors(zi,Lo));if(c<0)return null;let l=a*this.direction.dot(rc.cross(zi));if(l<0||c+l>o)return null;let h=-a*zi.dot(oc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Oe=class i{constructor(t,e,n,s,r,o,a,c,l,h,f,u,d,g,_,x){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,f,u,d,g,_,x)}set(t,e,n,s,r,o,a,c,l,h,f,u,d,g,_,x){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=_,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Fs.setFromMatrixColumn(t,0).length(),r=1/Fs.setFromMatrixColumn(t,1).length(),o=1/Fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=o*h,d=o*f,g=a*h,_=a*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=u-_*l,e[9]=-a*c,e[2]=_-u*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let u=c*h,d=c*f,g=l*h,_=l*f;e[0]=u+_*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+u*a,e[10]=o*c}else if(t.order==="ZXY"){let u=c*h,d=c*f,g=l*h,_=l*f;e[0]=u-_*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let u=o*h,d=o*f,g=a*h,_=a*f;e[0]=c*h,e[4]=g*l-d,e[8]=u*l+_,e[1]=c*f,e[5]=_*l+u,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let u=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-u*f,e[8]=g*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*f+g,e[10]=u-_*f}else if(t.order==="XZY"){let u=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+_,e[5]=o*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*h,e[10]=_*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bp,t,Sp)}lookAt(t,e,n){let s=this.elements;return Ln.subVectors(t,e),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Bi.crossVectors(n,Ln),Bi.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Bi.crossVectors(n,Ln)),Bi.normalize(),Do.crossVectors(Ln,Bi),s[0]=Bi.x,s[4]=Do.x,s[8]=Ln.x,s[1]=Bi.y,s[5]=Do.y,s[9]=Ln.y,s[2]=Bi.z,s[6]=Do.z,s[10]=Ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],_=n[6],x=n[10],p=n[14],T=n[3],b=n[7],M=n[11],B=n[15],P=s[0],D=s[4],F=s[8],A=s[12],S=s[1],z=s[5],Q=s[9],O=s[13],V=s[2],q=s[6],X=s[10],ut=s[14],tt=s[3],Mt=s[7],yt=s[11],Nt=s[15];return r[0]=o*P+a*S+c*V+l*tt,r[4]=o*D+a*z+c*q+l*Mt,r[8]=o*F+a*Q+c*X+l*yt,r[12]=o*A+a*O+c*ut+l*Nt,r[1]=h*P+f*S+u*V+d*tt,r[5]=h*D+f*z+u*q+d*Mt,r[9]=h*F+f*Q+u*X+d*yt,r[13]=h*A+f*O+u*ut+d*Nt,r[2]=g*P+_*S+x*V+p*tt,r[6]=g*D+_*z+x*q+p*Mt,r[10]=g*F+_*Q+x*X+p*yt,r[14]=g*A+_*O+x*ut+p*Nt,r[3]=T*P+b*S+M*V+B*tt,r[7]=T*D+b*z+M*q+B*Mt,r[11]=T*F+b*Q+M*X+B*yt,r[15]=T*A+b*O+M*ut+B*Nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],_=t[7],x=t[11],p=t[15];return g*(+r*c*f-s*l*f-r*a*u+n*l*u+s*a*d-n*c*d)+_*(+e*c*d-e*l*u+r*o*u-s*o*d+s*l*h-r*c*h)+x*(+e*l*f-e*a*d-r*o*f+n*o*d+r*a*h-n*l*h)+p*(-s*a*h-e*c*f+e*a*u+s*o*f-n*o*u+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],_=t[13],x=t[14],p=t[15],T=f*x*l-_*u*l+_*c*d-a*x*d-f*c*p+a*u*p,b=g*u*l-h*x*l-g*c*d+o*x*d+h*c*p-o*u*p,M=h*_*l-g*f*l+g*a*d-o*_*d-h*a*p+o*f*p,B=g*f*c-h*_*c-g*a*u+o*_*u+h*a*x-o*f*x,P=e*T+n*b+s*M+r*B;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/P;return t[0]=T*D,t[1]=(_*u*r-f*x*r-_*s*d+n*x*d+f*s*p-n*u*p)*D,t[2]=(a*x*r-_*c*r+_*s*l-n*x*l-a*s*p+n*c*p)*D,t[3]=(f*c*r-a*u*r-f*s*l+n*u*l+a*s*d-n*c*d)*D,t[4]=b*D,t[5]=(h*x*r-g*u*r+g*s*d-e*x*d-h*s*p+e*u*p)*D,t[6]=(g*c*r-o*x*r-g*s*l+e*x*l+o*s*p-e*c*p)*D,t[7]=(o*u*r-h*c*r+h*s*l-e*u*l-o*s*d+e*c*d)*D,t[8]=M*D,t[9]=(g*f*r-h*_*r-g*n*d+e*_*d+h*n*p-e*f*p)*D,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*D,t[11]=(h*a*r-o*f*r-h*n*l+e*f*l+o*n*d-e*a*d)*D,t[12]=B*D,t[13]=(h*_*s-g*f*s+g*n*u-e*_*u-h*n*x+e*f*x)*D,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*x-e*a*x)*D,t[15]=(o*f*s-h*a*s+h*n*c-e*f*c-o*n*u+e*a*u)*D,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,f=a+a,u=r*l,d=r*h,g=r*f,_=o*h,x=o*f,p=a*f,T=c*l,b=c*h,M=c*f,B=n.x,P=n.y,D=n.z;return s[0]=(1-(_+p))*B,s[1]=(d+M)*B,s[2]=(g-b)*B,s[3]=0,s[4]=(d-M)*P,s[5]=(1-(u+p))*P,s[6]=(x+T)*P,s[7]=0,s[8]=(g+b)*D,s[9]=(x-T)*D,s[10]=(1-(u+_))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Fs.set(s[0],s[1],s[2]).length(),o=Fs.set(s[4],s[5],s[6]).length(),a=Fs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],qn.copy(this);let l=1/r,h=1/o,f=1/a;return qn.elements[0]*=l,qn.elements[1]*=l,qn.elements[2]*=l,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=f,qn.elements[9]*=f,qn.elements[10]*=f,e.setFromRotationMatrix(qn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Ei){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s),d,g;if(a===Ei)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===la)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Ei){let c=this.elements,l=1/(e-t),h=1/(n-s),f=1/(o-r),u=(e+t)*l,d=(n+s)*h,g,_;if(a===Ei)g=(o+r)*f,_=-2*f;else if(a===la)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Fs=new L,qn=new Oe,bp=new L(0,0,0),Sp=new L(1,1,1),Bi=new L,Do=new L,Ln=new L,au=new Oe,cu=new jn,ci=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-nn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(nn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return au.makeRotationFromQuaternion(t),this.setFromRotationMatrix(au,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cu.setFromEuler(this),this.setFromQuaternion(cu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ci.DEFAULT_ORDER="XYZ";var qr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},wp=0,lu=new L,zs=new jn,xi=new Oe,Uo=new L,Cr=new L,Tp=new L,Ap=new jn,hu=new L(1,0,0),uu=new L(0,1,0),fu=new L(0,0,1),du={type:"added"},Rp={type:"removed"},Bs={type:"childadded",child:null},ac={type:"childremoved",child:null},Ve=class i extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new ci,n=new jn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Oe},normalMatrix:{value:new he}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.multiply(zs),this}rotateOnWorldAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.premultiply(zs),this}rotateX(t){return this.rotateOnAxis(hu,t)}rotateY(t){return this.rotateOnAxis(uu,t)}rotateZ(t){return this.rotateOnAxis(fu,t)}translateOnAxis(t,e){return lu.copy(t).applyQuaternion(this.quaternion),this.position.add(lu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hu,t)}translateY(t){return this.translateOnAxis(uu,t)}translateZ(t){return this.translateOnAxis(fu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Uo.copy(t):Uo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Cr,Uo,this.up):xi.lookAt(Uo,Cr,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),zs.setFromRotationMatrix(xi),this.quaternion.premultiply(zs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(du),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rp),ac.child=t,this.dispatchEvent(ac),ac.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(du),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,t,Tp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,Ap,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ve.DEFAULT_UP=new L(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zn=new L,_i=new L,cc=new L,yi=new L,Hs=new L,ks=new L,pu=new L,lc=new L,hc=new L,uc=new L,fc=new Ce,dc=new Ce,pc=new Ce,Gi=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Zn.subVectors(t,e),s.cross(Zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Zn.subVectors(s,e),_i.subVectors(n,e),cc.subVectors(t,e);let o=Zn.dot(Zn),a=Zn.dot(_i),c=Zn.dot(cc),l=_i.dot(_i),h=_i.dot(cc),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,yi.x),c.addScaledVector(o,yi.y),c.addScaledVector(a,yi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return fc.setScalar(0),dc.setScalar(0),pc.setScalar(0),fc.fromBufferAttribute(t,e),dc.fromBufferAttribute(t,n),pc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(fc,r.x),o.addScaledVector(dc,r.y),o.addScaledVector(pc,r.z),o}static isFrontFacing(t,e,n,s){return Zn.subVectors(n,e),_i.subVectors(t,e),Zn.cross(_i).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Zn.cross(_i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Hs.subVectors(s,n),ks.subVectors(r,n),lc.subVectors(t,n);let c=Hs.dot(lc),l=ks.dot(lc);if(c<=0&&l<=0)return e.copy(n);hc.subVectors(t,s);let h=Hs.dot(hc),f=ks.dot(hc);if(h>=0&&f<=h)return e.copy(s);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Hs,o);uc.subVectors(t,r);let d=Hs.dot(uc),g=ks.dot(uc);if(g>=0&&d<=g)return e.copy(r);let _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ks,a);let x=h*g-d*f;if(x<=0&&f-h>=0&&d-g>=0)return pu.subVectors(r,s),a=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(pu,a);let p=1/(x+_+u);return o=_*p,a=u*p,e.copy(n).addScaledVector(Hs,o).addScaledVector(ks,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},No={h:0,s:0,l:0};function mc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ne=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Me.workingColorSpace){return this.r=t,this.g=e,this.b=n,Me.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Me.workingColorSpace){if(t=hh(t,1),e=nn(e,0,1),n=nn(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=mc(o,r,t+1/3),this.g=mc(o,r,t),this.b=mc(o,r,t-1/3)}return Me.toWorkingColorSpace(this,s),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){let n=Ef[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=tr(t.r),this.g=tr(t.g),this.b=tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return Me.fromWorkingColorSpace(fn.copy(this),t),Math.round(nn(fn.r*255,0,255))*65536+Math.round(nn(fn.g*255,0,255))*256+Math.round(nn(fn.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Me.workingColorSpace){Me.fromWorkingColorSpace(fn.copy(this),e);let n=fn.r,s=fn.g,r=fn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Me.workingColorSpace){return Me.fromWorkingColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=Ue){Me.fromWorkingColorSpace(fn.copy(this),t);let e=fn.r,n=fn.g,s=fn.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Hi),this.setHSL(Hi.h+t,Hi.s+e,Hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hi),t.getHSL(No);let n=zr(Hi.h,No.h,e),s=zr(Hi.s,No.s,e),r=zr(Hi.l,No.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new ne;ne.NAMES=Ef;var Cp=0,Ai=class extends wi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=ai(),this.name="",this.blending=js,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ic,this.blendDst=Lc,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(n.blending=this.blending),this.side!==Yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ic&&(n.blendSrc=this.blendSrc),this.blendDst!==Lc&&(n.blendDst=this.blendDst),this.blendEquation!==as&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==nr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$h&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},$e=class extends Ai{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var qe=new L,Oo=new xt,hn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=gl,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Oo.fromBufferAttribute(this,e),Oo.applyMatrix3(t),this.setXY(e,Oo.x,Oo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Kn(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Kn(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Kn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Kn(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array),r=we(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==gl&&(t.usage=this.usage),t}};var fa=class extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var da=class extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ue=class extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Pp=0,Bn=new Oe,gc=new Ve,Vs=new L,Dn=new fs,Pr=new fs,en=new L,ze=class i extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mf(t)?da:fa)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new he().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Bn.makeRotationFromQuaternion(t),this.applyMatrix4(Bn),this}rotateX(t){return Bn.makeRotationX(t),this.applyMatrix4(Bn),this}rotateY(t){return Bn.makeRotationY(t),this.applyMatrix4(Bn),this}rotateZ(t){return Bn.makeRotationZ(t),this.applyMatrix4(Bn),this}translate(t,e,n){return Bn.makeTranslation(t,e,n),this.applyMatrix4(Bn),this}scale(t,e,n){return Bn.makeScale(t,e,n),this.applyMatrix4(Bn),this}lookAt(t){return gc.lookAt(t),gc.updateMatrix(),this.applyMatrix4(gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ar);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Pr.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Dn.min,Pr.min),Dn.expandByPoint(en),en.addVectors(Dn.max,Pr.max),Dn.expandByPoint(en)):(Dn.expandByPoint(Pr.min),Dn.expandByPoint(Pr.max))}Dn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)en.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(en));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)en.fromBufferAttribute(a,l),c&&(Vs.fromBufferAttribute(t,l),en.add(Vs)),s=Math.max(s,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let F=0;F<n.count;F++)a[F]=new L,c[F]=new L;let l=new L,h=new L,f=new L,u=new xt,d=new xt,g=new xt,_=new L,x=new L;function p(F,A,S){l.fromBufferAttribute(n,F),h.fromBufferAttribute(n,A),f.fromBufferAttribute(n,S),u.fromBufferAttribute(r,F),d.fromBufferAttribute(r,A),g.fromBufferAttribute(r,S),h.sub(l),f.sub(l),d.sub(u),g.sub(u);let z=1/(d.x*g.y-g.x*d.y);isFinite(z)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(z),x.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(z),a[F].add(_),a[A].add(_),a[S].add(_),c[F].add(x),c[A].add(x),c[S].add(x))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let F=0,A=T.length;F<A;++F){let S=T[F],z=S.start,Q=S.count;for(let O=z,V=z+Q;O<V;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let b=new L,M=new L,B=new L,P=new L;function D(F){B.fromBufferAttribute(s,F),P.copy(B);let A=a[F];b.copy(A),b.sub(B.multiplyScalar(B.dot(A))).normalize(),M.crossVectors(P,A);let z=M.dot(c[F])<0?-1:1;o.setXYZW(F,b.x,b.y,b.z,z)}for(let F=0,A=T.length;F<A;++F){let S=T[F],z=S.start,Q=S.count;for(let O=z,V=z+Q;O<V;O+=3)D(t.getX(O+0)),D(t.getX(O+1)),D(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,f=new L;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),_=t.getX(u+1),x=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,x),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,f=a.normalized,u=new l.constructor(c.length*h),d=0,g=0;for(let _=0,x=c.length;_<x;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let p=0;p<h;p++)u[g++]=l[d++]}return new hn(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){let u=l[h],d=t(u,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],f=r[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},mu=new Oe,ns=new ds,Fo=new ar,gu=new L,zo=new L,Bo=new L,Ho=new L,xc=new L,ko=new L,xu=new L,Vo=new L,St=class extends Ve{constructor(t=new ze,e=new $e){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ko.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],f=r[c];h!==0&&(xc.fromBufferAttribute(f,t),o?ko.addScaledVector(xc,h):ko.addScaledVector(xc.sub(e),h))}e.add(ko)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(r),ns.copy(t.ray).recast(t.near),!(Fo.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Fo,gu)===null||ns.origin.distanceToSquared(gu)>(t.far-t.near)**2))&&(mu.copy(r).invert(),ns.copy(t.ray).applyMatrix4(mu),!(n.boundingBox!==null&&ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ns)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let x=u[g],p=o[x.materialIndex],T=Math.max(x.start,d.start),b=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let M=T,B=b;M<B;M+=3){let P=a.getX(M),D=a.getX(M+1),F=a.getX(M+2);s=Go(this,p,t,n,l,h,f,P,D,F),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let x=g,p=_;x<p;x+=3){let T=a.getX(x),b=a.getX(x+1),M=a.getX(x+2);s=Go(this,o,t,n,l,h,f,T,b,M),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let x=u[g],p=o[x.materialIndex],T=Math.max(x.start,d.start),b=Math.min(c.count,Math.min(x.start+x.count,d.start+d.count));for(let M=T,B=b;M<B;M+=3){let P=M,D=M+1,F=M+2;s=Go(this,p,t,n,l,h,f,P,D,F),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let x=g,p=_;x<p;x+=3){let T=x,b=x+1,M=x+2;s=Go(this,o,t,n,l,h,f,T,b,M),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function Ip(i,t,e,n,s,r,o,a){let c;if(t.side===dn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Yi,a),c===null)return null;Vo.copy(a),Vo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Vo);return l<e.near||l>e.far?null:{distance:l,point:Vo.clone(),object:i}}function Go(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,zo),i.getVertexPosition(c,Bo),i.getVertexPosition(l,Ho);let h=Ip(i,t,e,n,zo,Bo,Ho,xu);if(h){let f=new L;Gi.getBarycoord(xu,zo,Bo,Ho,f),s&&(h.uv=Gi.getInterpolatedAttribute(s,a,c,l,f,new xt)),r&&(h.uv1=Gi.getInterpolatedAttribute(r,a,c,l,f,new xt)),o&&(h.normal=Gi.getInterpolatedAttribute(o,a,c,l,f,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new L,materialIndex:0};Gi.getNormal(zo,Bo,Ho,u.normal),h.face=u,h.barycoord=f}return h}var Be=class i extends ze{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(f,2));function g(_,x,p,T,b,M,B,P,D,F,A){let S=M/D,z=B/F,Q=M/2,O=B/2,V=P/2,q=D+1,X=F+1,ut=0,tt=0,Mt=new L;for(let yt=0;yt<X;yt++){let Nt=yt*z-O;for(let ie=0;ie<q;ie++){let me=ie*S-Q;Mt[_]=me*T,Mt[x]=Nt*b,Mt[p]=V,l.push(Mt.x,Mt.y,Mt.z),Mt[_]=0,Mt[x]=0,Mt[p]=P>0?1:-1,h.push(Mt.x,Mt.y,Mt.z),f.push(ie/D),f.push(1-yt/F),ut+=1}}for(let yt=0;yt<F;yt++)for(let Nt=0;Nt<D;Nt++){let ie=u+Nt+q*yt,me=u+Nt+q*(yt+1),lt=u+(Nt+1)+q*(yt+1),bt=u+(Nt+1)+q*yt;c.push(ie,me,bt),c.push(me,lt,bt),tt+=6}a.addGroup(d,tt,A),d+=tt,u+=ut}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function cr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function En(i){let t={};for(let e=0;e<i.length;e++){let n=cr(i[e]);for(let s in n)t[s]=n[s]}return t}function Lp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function bf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Me.workingColorSpace}var Dp={clone:cr,merge:En},Up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Np=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Hn=class extends Ai{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Up,this.fragmentShader=Np,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cr(t.uniforms),this.uniformsGroups=Lp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},pa=class extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=Ei}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ki=new L,_u=new xt,yu=new xt,sn=class extends pa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ki.x,ki.y).multiplyScalar(-t/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-t/ki.z)}getViewSize(t,e){return this.getViewBounds(t,_u,yu),e.subVectors(yu,_u)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Fr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Gs=-90,Ws=1,vl=class extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new sn(Gs,Ws,t,e);s.layers=this.layers,this.add(s);let r=new sn(Gs,Ws,t,e);r.layers=this.layers,this.add(r);let o=new sn(Gs,Ws,t,e);o.layers=this.layers,this.add(o);let a=new sn(Gs,Ws,t,e);a.layers=this.layers,this.add(a);let c=new sn(Gs,Ws,t,e);c.layers=this.layers,this.add(c);let l=new sn(Gs,Ws,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===la)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ma=class extends pn{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ir,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ml=class extends Ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ma(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:oi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Be(5,5,5),r=new Hn({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:Wi});r.uniforms.tEquirect.value=e;let o=new St(s,r),a=e.minFilter;return e.minFilter===hs&&(e.minFilter=oi),new vl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},_c=new L,Op=new L,Fp=new he,Jn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=_c.subVectors(n,e).cross(Op.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(_c),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Fp.getNormalMatrix(t),s=this.coplanarPoint(_c).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},is=new ar,Wo=new L,Zr=class{constructor(t=new Jn,e=new Jn,n=new Jn,s=new Jn,r=new Jn,o=new Jn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ei){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],f=s[6],u=s[7],d=s[8],g=s[9],_=s[10],x=s[11],p=s[12],T=s[13],b=s[14],M=s[15];if(n[0].setComponents(c-r,u-l,x-d,M-p).normalize(),n[1].setComponents(c+r,u+l,x+d,M+p).normalize(),n[2].setComponents(c+o,u+h,x+g,M+T).normalize(),n[3].setComponents(c-o,u-h,x-g,M-T).normalize(),n[4].setComponents(c-a,u-f,x-_,M-b).normalize(),e===Ei)n[5].setComponents(c+a,u+f,x+_,M+b).normalize();else if(e===la)n[5].setComponents(a,f,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(t){return is.center.set(0,0,0),is.radius=.7071067811865476,is.applyMatrix4(t.matrixWorld),this.intersectsSphere(is)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Wo.x=s.normal.x>0?t.max.x:t.min.x,Wo.y=s.normal.y>0?t.max.y:t.min.y,Wo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Wo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Sf(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function zp(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let _=f[d];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Ri=class i extends ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,f=t/a,u=e/c,d=[],g=[],_=[],x=[];for(let p=0;p<h;p++){let T=p*u-o;for(let b=0;b<l;b++){let M=b*f-r;g.push(M,-T,0),_.push(0,0,1),x.push(b/a),x.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<a;T++){let b=T+l*p,M=T+l*(p+1),B=T+1+l*(p+1),P=T+1+l*p;d.push(b,M,P),d.push(M,B,P)}this.setIndex(d),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Bp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hp=`#ifdef USE_ALPHAHASH
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
#endif`,kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xp=`#ifdef USE_AOMAP
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
#endif`,Yp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qp=`#ifdef USE_BATCHING
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
#endif`,Zp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$p=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jp=`#ifdef USE_IRIDESCENCE
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
#endif`,Qp=`#ifdef USE_BUMPMAP
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
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,r0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,o0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,a0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,c0=`#define PI 3.141592653589793
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
} // validated`,l0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,h0=`vec3 transformedNormal = objectNormal;
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
#endif`,u0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,f0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,p0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,m0="gl_FragColor = linearToOutputTexel( gl_FragColor );",g0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x0=`#ifdef USE_ENVMAP
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
#endif`,_0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,y0=`#ifdef USE_ENVMAP
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
#endif`,v0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,M0=`#ifdef USE_ENVMAP
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
#endif`,E0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T0=`#ifdef USE_GRADIENTMAP
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
}`,A0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P0=`uniform bool receiveShadow;
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
#endif`,I0=`#ifdef USE_ENVMAP
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
#endif`,L0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,O0=`PhysicalMaterial material;
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
#endif`,F0=`struct PhysicalMaterial {
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
}`,z0=`
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
#endif`,B0=`#if defined( RE_IndirectDiffuse )
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
#endif`,H0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,k0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,V0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,X0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Z0=`#if defined( USE_POINTS_UV )
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
#endif`,J0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tm=`#ifdef USE_MORPHTARGETS
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
#endif`,em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,im=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,om=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,am=`#ifdef USE_NORMALMAP
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
#endif`,cm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_m=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ym=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Em=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bm=`float getShadowMask() {
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
}`,Sm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wm=`#ifdef USE_SKINNING
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
#endif`,Tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Am=`#ifdef USE_SKINNING
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
#endif`,Rm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Im=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lm=`#ifdef USE_TRANSMISSION
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
#endif`,Dm=`#ifdef USE_TRANSMISSION
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
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bm=`uniform sampler2D t2D;
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
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,km=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`#include <common>
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
}`,Xm=`#if DEPTH_PACKING == 3200
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
}`,Ym=`#define DISTANCE
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
}`,qm=`#define DISTANCE
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
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`uniform float scale;
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
}`,$m=`uniform vec3 diffuse;
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
}`,jm=`#include <common>
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
}`,Qm=`uniform vec3 diffuse;
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
}`,tg=`#define LAMBERT
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
}`,eg=`#define LAMBERT
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
}`,ng=`#define MATCAP
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
}`,ig=`#define MATCAP
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
}`,sg=`#define NORMAL
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
}`,rg=`#define NORMAL
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
}`,og=`#define PHONG
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
}`,ag=`#define PHONG
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
}`,cg=`#define STANDARD
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
}`,lg=`#define STANDARD
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
}`,hg=`#define TOON
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
}`,ug=`#define TOON
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
}`,fg=`uniform float size;
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
}`,dg=`uniform vec3 diffuse;
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
}`,pg=`#include <common>
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
}`,mg=`uniform vec3 color;
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
}`,gg=`uniform float rotation;
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
}`,xg=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:Bp,alphahash_pars_fragment:Hp,alphamap_fragment:kp,alphamap_pars_fragment:Vp,alphatest_fragment:Gp,alphatest_pars_fragment:Wp,aomap_fragment:Xp,aomap_pars_fragment:Yp,batching_pars_vertex:qp,batching_vertex:Zp,begin_vertex:Jp,beginnormal_vertex:Kp,bsdfs:$p,iridescence_fragment:jp,bumpmap_pars_fragment:Qp,clipping_planes_fragment:t0,clipping_planes_pars_fragment:e0,clipping_planes_pars_vertex:n0,clipping_planes_vertex:i0,color_fragment:s0,color_pars_fragment:r0,color_pars_vertex:o0,color_vertex:a0,common:c0,cube_uv_reflection_fragment:l0,defaultnormal_vertex:h0,displacementmap_pars_vertex:u0,displacementmap_vertex:f0,emissivemap_fragment:d0,emissivemap_pars_fragment:p0,colorspace_fragment:m0,colorspace_pars_fragment:g0,envmap_fragment:x0,envmap_common_pars_fragment:_0,envmap_pars_fragment:y0,envmap_pars_vertex:v0,envmap_physical_pars_fragment:I0,envmap_vertex:M0,fog_vertex:E0,fog_pars_vertex:b0,fog_fragment:S0,fog_pars_fragment:w0,gradientmap_pars_fragment:T0,lightmap_pars_fragment:A0,lights_lambert_fragment:R0,lights_lambert_pars_fragment:C0,lights_pars_begin:P0,lights_toon_fragment:L0,lights_toon_pars_fragment:D0,lights_phong_fragment:U0,lights_phong_pars_fragment:N0,lights_physical_fragment:O0,lights_physical_pars_fragment:F0,lights_fragment_begin:z0,lights_fragment_maps:B0,lights_fragment_end:H0,logdepthbuf_fragment:k0,logdepthbuf_pars_fragment:V0,logdepthbuf_pars_vertex:G0,logdepthbuf_vertex:W0,map_fragment:X0,map_pars_fragment:Y0,map_particle_fragment:q0,map_particle_pars_fragment:Z0,metalnessmap_fragment:J0,metalnessmap_pars_fragment:K0,morphinstance_vertex:$0,morphcolor_vertex:j0,morphnormal_vertex:Q0,morphtarget_pars_vertex:tm,morphtarget_vertex:em,normal_fragment_begin:nm,normal_fragment_maps:im,normal_pars_fragment:sm,normal_pars_vertex:rm,normal_vertex:om,normalmap_pars_fragment:am,clearcoat_normal_fragment_begin:cm,clearcoat_normal_fragment_maps:lm,clearcoat_pars_fragment:hm,iridescence_pars_fragment:um,opaque_fragment:fm,packing:dm,premultiplied_alpha_fragment:pm,project_vertex:mm,dithering_fragment:gm,dithering_pars_fragment:xm,roughnessmap_fragment:_m,roughnessmap_pars_fragment:ym,shadowmap_pars_fragment:vm,shadowmap_pars_vertex:Mm,shadowmap_vertex:Em,shadowmask_pars_fragment:bm,skinbase_vertex:Sm,skinning_pars_vertex:wm,skinning_vertex:Tm,skinnormal_vertex:Am,specularmap_fragment:Rm,specularmap_pars_fragment:Cm,tonemapping_fragment:Pm,tonemapping_pars_fragment:Im,transmission_fragment:Lm,transmission_pars_fragment:Dm,uv_pars_fragment:Um,uv_pars_vertex:Nm,uv_vertex:Om,worldpos_vertex:Fm,background_vert:zm,background_frag:Bm,backgroundCube_vert:Hm,backgroundCube_frag:km,cube_vert:Vm,cube_frag:Gm,depth_vert:Wm,depth_frag:Xm,distanceRGBA_vert:Ym,distanceRGBA_frag:qm,equirect_vert:Zm,equirect_frag:Jm,linedashed_vert:Km,linedashed_frag:$m,meshbasic_vert:jm,meshbasic_frag:Qm,meshlambert_vert:tg,meshlambert_frag:eg,meshmatcap_vert:ng,meshmatcap_frag:ig,meshnormal_vert:sg,meshnormal_frag:rg,meshphong_vert:og,meshphong_frag:ag,meshphysical_vert:cg,meshphysical_frag:lg,meshtoon_vert:hg,meshtoon_frag:ug,points_vert:fg,points_frag:dg,shadow_vert:pg,shadow_frag:mg,sprite_vert:gg,sprite_frag:xg},Ut={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},ri={basic:{uniforms:En([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:En([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new ne(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:En([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:En([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:En([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new ne(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:En([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:En([Ut.points,Ut.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:En([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:En([Ut.common,Ut.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:En([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:En([Ut.sprite,Ut.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:En([Ut.common,Ut.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:En([Ut.lights,Ut.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};ri.physical={uniforms:En([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};var Xo={r:0,b:0,g:0},ss=new ci,_g=new Oe;function yg(i,t,e,n,s,r,o){let a=new ne(0),c=r===!0?0:1,l,h,f=null,u=0,d=null;function g(T){let b=T.isScene===!0?T.background:null;return b&&b.isTexture&&(b=(T.backgroundBlurriness>0?e:t).get(b)),b}function _(T){let b=!1,M=g(T);M===null?p(a,c):M&&M.isColor&&(p(M,1),b=!0);let B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,o):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(T,b){let M=g(b);M&&(M.isCubeTexture||M.mapping===Da)?(h===void 0&&(h=new St(new Be(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:cr(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ss.copy(b.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_g.makeRotationFromEuler(ss)),h.material.toneMapped=Me.getTransfer(M.colorSpace)!==Re,(f!==M||u!==M.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=M,u=M.version,d=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new St(new Ri(2,2),new Hn({name:"BackgroundMaterial",uniforms:cr(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Me.getTransfer(M.colorSpace)!==Re,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||u!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,f=M,u=M.version,d=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,b){T.getRGB(Xo,bf(i)),n.buffers.color.setClear(Xo.r,Xo.g,Xo.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(T,b=1){a.set(T),c=b,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,p(a,c)},render:_,addToRenderList:x}}function vg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(S,z,Q,O,V){let q=!1,X=f(O,Q,z);r!==X&&(r=X,l(r.object)),q=d(S,O,Q,V),q&&g(S,O,Q,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,M(S,z,Q,O),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function f(S,z,Q){let O=Q.wireframe===!0,V=n[S.id];V===void 0&&(V={},n[S.id]=V);let q=V[z.id];q===void 0&&(q={},V[z.id]=q);let X=q[O];return X===void 0&&(X=u(c()),q[O]=X),X}function u(S){let z=[],Q=[],O=[];for(let V=0;V<e;V++)z[V]=0,Q[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Q,attributeDivisors:O,object:S,attributes:{},index:null}}function d(S,z,Q,O){let V=r.attributes,q=z.attributes,X=0,ut=Q.getAttributes();for(let tt in ut)if(ut[tt].location>=0){let yt=V[tt],Nt=q[tt];if(Nt===void 0&&(tt==="instanceMatrix"&&S.instanceMatrix&&(Nt=S.instanceMatrix),tt==="instanceColor"&&S.instanceColor&&(Nt=S.instanceColor)),yt===void 0||yt.attribute!==Nt||Nt&&yt.data!==Nt.data)return!0;X++}return r.attributesNum!==X||r.index!==O}function g(S,z,Q,O){let V={},q=z.attributes,X=0,ut=Q.getAttributes();for(let tt in ut)if(ut[tt].location>=0){let yt=q[tt];yt===void 0&&(tt==="instanceMatrix"&&S.instanceMatrix&&(yt=S.instanceMatrix),tt==="instanceColor"&&S.instanceColor&&(yt=S.instanceColor));let Nt={};Nt.attribute=yt,yt&&yt.data&&(Nt.data=yt.data),V[tt]=Nt,X++}r.attributes=V,r.attributesNum=X,r.index=O}function _(){let S=r.newAttributes;for(let z=0,Q=S.length;z<Q;z++)S[z]=0}function x(S){p(S,0)}function p(S,z){let Q=r.newAttributes,O=r.enabledAttributes,V=r.attributeDivisors;Q[S]=1,O[S]===0&&(i.enableVertexAttribArray(S),O[S]=1),V[S]!==z&&(i.vertexAttribDivisor(S,z),V[S]=z)}function T(){let S=r.newAttributes,z=r.enabledAttributes;for(let Q=0,O=z.length;Q<O;Q++)z[Q]!==S[Q]&&(i.disableVertexAttribArray(Q),z[Q]=0)}function b(S,z,Q,O,V,q,X){X===!0?i.vertexAttribIPointer(S,z,Q,V,q):i.vertexAttribPointer(S,z,Q,O,V,q)}function M(S,z,Q,O){_();let V=O.attributes,q=Q.getAttributes(),X=z.defaultAttributeValues;for(let ut in q){let tt=q[ut];if(tt.location>=0){let Mt=V[ut];if(Mt===void 0&&(ut==="instanceMatrix"&&S.instanceMatrix&&(Mt=S.instanceMatrix),ut==="instanceColor"&&S.instanceColor&&(Mt=S.instanceColor)),Mt!==void 0){let yt=Mt.normalized,Nt=Mt.itemSize,ie=t.get(Mt);if(ie===void 0)continue;let me=ie.buffer,lt=ie.type,bt=ie.bytesPerElement,Ft=lt===i.INT||lt===i.UNSIGNED_INT||Mt.gpuType===sh;if(Mt.isInterleavedBufferAttribute){let wt=Mt.data,qt=wt.stride,Qt=Mt.offset;if(wt.isInstancedInterleavedBuffer){for(let jt=0;jt<tt.locationSize;jt++)p(tt.location+jt,wt.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let jt=0;jt<tt.locationSize;jt++)x(tt.location+jt);i.bindBuffer(i.ARRAY_BUFFER,me);for(let jt=0;jt<tt.locationSize;jt++)b(tt.location+jt,Nt/tt.locationSize,lt,yt,qt*bt,(Qt+Nt/tt.locationSize*jt)*bt,Ft)}else{if(Mt.isInstancedBufferAttribute){for(let wt=0;wt<tt.locationSize;wt++)p(tt.location+wt,Mt.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let wt=0;wt<tt.locationSize;wt++)x(tt.location+wt);i.bindBuffer(i.ARRAY_BUFFER,me);for(let wt=0;wt<tt.locationSize;wt++)b(tt.location+wt,Nt/tt.locationSize,lt,yt,Nt*bt,Nt/tt.locationSize*wt*bt,Ft)}}else if(X!==void 0){let yt=X[ut];if(yt!==void 0)switch(yt.length){case 2:i.vertexAttrib2fv(tt.location,yt);break;case 3:i.vertexAttrib3fv(tt.location,yt);break;case 4:i.vertexAttrib4fv(tt.location,yt);break;default:i.vertexAttrib1fv(tt.location,yt)}}}}T()}function B(){F();for(let S in n){let z=n[S];for(let Q in z){let O=z[Q];for(let V in O)h(O[V].object),delete O[V];delete z[Q]}delete n[S]}}function P(S){if(n[S.id]===void 0)return;let z=n[S.id];for(let Q in z){let O=z[Q];for(let V in O)h(O[V].object),delete O[V];delete z[Q]}delete n[S.id]}function D(S){for(let z in n){let Q=n[z];if(Q[S.id]===void 0)continue;let O=Q[S.id];for(let V in O)h(O[V].object),delete O[V];delete Q[S.id]}}function F(){A(),o=!0,r!==s&&(r=s,l(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:A,dispose:B,releaseStatesOfGeometry:P,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:x,disableUnusedAttributes:T}}function Mg(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,f){f!==0&&(i.drawArraysInstanced(n,l,h,f),e.update(h,n,f))}function a(l,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];e.update(d,n,1)}function c(l,h,f,u){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_]*u[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Eg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==$n&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let F=D===po&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Si&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Mi&&!F)}function c(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:B,maxSamples:P}}function bg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Jn,a=new he,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,_=f.clipIntersection,x=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!x)r?h(null):l();else{let T=r?0:n,b=T*4,M=p.clippingState||null;c.value=M,M=h(g,u,b,d);for(let B=0;B!==b;++B)M[B]=e[B];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){let _=f!==null?f.length:0,x=null;if(_!==0){if(x=c.value,g!==!0||x===null){let p=d+_*4,T=u.matrixWorldInverse;a.getNormalMatrix(T),(x===null||x.length<p)&&(x=new Float32Array(p));for(let b=0,M=d;b!==_;++b,M+=4)o.copy(f[b]).applyMatrix4(T,a),o.normal.toArray(x,M),x[M+3]=o.constant}c.value=x,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,x}}function Sg(i){let t=new WeakMap;function e(o,a){return a===Hc?o.mapping=ir:a===kc&&(o.mapping=sr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Hc||a===kc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ml(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ga=class extends pa{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ks=4,vu=[.125,.215,.35,.446,.526,.582],cs=20,yc=new ga,Mu=new ne,vc=null,Mc=0,Ec=0,bc=!1,os=(1+Math.sqrt(5))/2,Xs=1/os,Eu=[new L(-os,Xs,0),new L(os,Xs,0),new L(-Xs,0,os),new L(Xs,0,os),new L(0,os,-Xs),new L(0,os,Xs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],xa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){vc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vc,Mc,Ec),this._renderer.xr.enabled=bc,t.scissorTest=!1,Yo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ir||t.mapping===sr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:po,format:$n,colorSpace:ur,depthBuffer:!1},s=bu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wg(r)),this._blurMaterial=Tg(r,t,e)}return s}_compileMaterial(t){let e=new St(this._lodPlanes[0],t);this._renderer.compile(e,yc)}_sceneToCubeUV(t,e,n,s){let a=new sn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Mu),h.toneMapping=Xi,h.autoClear=!1;let d=new $e({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),g=new St(new Be,d),_=!1,x=t.background;x?x.isColor&&(d.color.copy(x),t.background=null,_=!0):(d.color.copy(Mu),_=!0);for(let p=0;p<6;p++){let T=p%3;T===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):T===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let b=this._cubeSize;Yo(s,T*b,p>2?b:0,b,b),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ir||t.mapping===sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Su());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new St(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Yo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,yc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Eu[(s-r-1)%Eu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new St(this._lodPlanes[s],l),u=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*cs-1),_=r/g,x=isFinite(r)?1+Math.floor(h*_):cs;x>cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${cs}`);let p=[],T=0;for(let D=0;D<cs;++D){let F=D/_,A=Math.exp(-F*F/2);p.push(A),D===0?T+=A:D<x&&(T+=2*A)}for(let D=0;D<p.length;D++)p[D]=p[D]/T;u.envMap.value=t.texture,u.samples.value=x,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-n;let M=this._sizeLods[s],B=3*M*(s>b-Ks?s-b+Ks:0),P=4*(this._cubeSize-M);Yo(e,B,P,3*M,2*M),c.setRenderTarget(e),c.render(f,yc)}};function wg(i){let t=[],e=[],n=[],s=i,r=i-Ks+1+vu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ks?c=vu[o-i+Ks-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,_=3,x=2,p=1,T=new Float32Array(_*g*d),b=new Float32Array(x*g*d),M=new Float32Array(p*g*d);for(let P=0;P<d;P++){let D=P%3*2/3-1,F=P>2?0:-1,A=[D,F,0,D+2/3,F,0,D+2/3,F+1,0,D,F,0,D+2/3,F+1,0,D,F+1,0];T.set(A,_*g*P),b.set(u,x*g*P);let S=[P,P,P,P,P,P];M.set(S,p*g*P)}let B=new ze;B.setAttribute("position",new hn(T,_)),B.setAttribute("uv",new hn(b,x)),B.setAttribute("faceIndex",new hn(M,p)),t.push(B),s>Ks&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function bu(i,t,e){let n=new Ti(i,t,e);return n.texture.mapping=Da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Tg(i,t,e){let n=new Float32Array(cs),s=new L(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:uh(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Su(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uh(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function wu(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function uh(){return`

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
	`}function Ag(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Hc||c===kc,h=c===ir||c===sr;if(l||h){let f=t.get(a),u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new xa(i)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new xa(i)),f=l?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Rg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Nr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Cg(i,t,e,n){let s={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let _=u.morphAttributes[g];for(let x=0,p=_.length;x<p;x++)t.remove(_[x])}u.removeEventListener("dispose",o),delete s[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(f){let u=f.attributes;for(let g in u)t.update(u[g],i.ARRAY_BUFFER);let d=f.morphAttributes;for(let g in d){let _=d[g];for(let x=0,p=_.length;x<p;x++)t.update(_[x],i.ARRAY_BUFFER)}}function l(f){let u=[],d=f.index,g=f.attributes.position,_=0;if(d!==null){let T=d.array;_=d.version;for(let b=0,M=T.length;b<M;b+=3){let B=T[b+0],P=T[b+1],D=T[b+2];u.push(B,P,P,D,D,B)}}else if(g!==void 0){let T=g.array;_=g.version;for(let b=0,M=T.length/3-1;b<M;b+=3){let B=b+0,P=b+1,D=b+2;u.push(B,P,P,D,D,B)}}else return;let x=new(Mf(u)?da:fa)(u,1);x.version=_;let p=r.get(f);p&&t.remove(p),r.set(f,x)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function Pg(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*o),e.update(d,n,1)}function l(u,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,u*o,g),e.update(d,n,g))}function h(u,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,g);let x=0;for(let p=0;p<g;p++)x+=d[p];e.update(x,n,1)}function f(u,d,g,_){if(g===0)return;let x=t.get("WEBGL_multi_draw");if(x===null)for(let p=0;p<u.length;p++)l(u[p]/o,d[p],_[p]);else{x.multiDrawElementsInstancedWEBGL(n,d,0,r,u,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=d[T]*_[T];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Ig(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Lg(i,t,e){let n=new WeakMap,s=new Ce;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let A=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],b=0;d===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let M=a.attributes.position.count*b,B=1;M>t.maxTextureSize&&(B=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let P=new Float32Array(M*B*4*f),D=new ua(P,M,B,f);D.type=Mi,D.needsUpdate=!0;let F=b*4;for(let S=0;S<f;S++){let z=x[S],Q=p[S],O=T[S],V=M*B*4*S;for(let q=0;q<z.count;q++){let X=q*F;d===!0&&(s.fromBufferAttribute(z,q),P[V+X+0]=s.x,P[V+X+1]=s.y,P[V+X+2]=s.z,P[V+X+3]=0),g===!0&&(s.fromBufferAttribute(Q,q),P[V+X+4]=s.x,P[V+X+5]=s.y,P[V+X+6]=s.z,P[V+X+7]=0),_===!0&&(s.fromBufferAttribute(O,q),P[V+X+8]=s.x,P[V+X+9]=s.y,P[V+X+10]=s.z,P[V+X+11]=O.itemSize===4?s.w:1)}}u={count:f,texture:D,size:new xt(M,B)},n.set(a,u),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Dg(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,f=t.get(c,h);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return f}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var _a=class extends pn{constructor(t,e,n,s,r,o,a,c,l,h=Qs){if(h!==Qs&&h!==or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Qs&&(n=us),n===void 0&&h===or&&(n=rr),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Xe,this.minFilter=c!==void 0?c:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},wf=new pn,Tu=new _a(1,1),Tf=new ua,Af=new yl,Rf=new ma,Au=[],Ru=[],Cu=new Float32Array(16),Pu=new Float32Array(9),Iu=new Float32Array(4);function fr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Au[s];if(r===void 0&&(r=new Float32Array(s),Au[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function je(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Na(i,t){let e=Ru[t];e===void 0&&(e=new Int32Array(t),Ru[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ug(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2fv(this.addr,t),Qe(e,t)}}function Og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(je(e,t))return;i.uniform3fv(this.addr,t),Qe(e,t)}}function Fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4fv(this.addr,t),Qe(e,t)}}function zg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,n))return;Iu.set(n),i.uniformMatrix2fv(this.addr,!1,Iu),Qe(e,n)}}function Bg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,n))return;Pu.set(n),i.uniformMatrix3fv(this.addr,!1,Pu),Qe(e,n)}}function Hg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,n))return;Cu.set(n),i.uniformMatrix4fv(this.addr,!1,Cu),Qe(e,n)}}function kg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2iv(this.addr,t),Qe(e,t)}}function Gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;i.uniform3iv(this.addr,t),Qe(e,t)}}function Wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4iv(this.addr,t),Qe(e,t)}}function Xg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2uiv(this.addr,t),Qe(e,t)}}function qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;i.uniform3uiv(this.addr,t),Qe(e,t)}}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4uiv(this.addr,t),Qe(e,t)}}function Jg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Tu.compareFunction=yf,r=Tu):r=wf,e.setTexture2D(t||r,s)}function Kg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Af,s)}function $g(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Rf,s)}function jg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Tf,s)}function Qg(i){switch(i){case 5126:return Ug;case 35664:return Ng;case 35665:return Og;case 35666:return Fg;case 35674:return zg;case 35675:return Bg;case 35676:return Hg;case 5124:case 35670:return kg;case 35667:case 35671:return Vg;case 35668:case 35672:return Gg;case 35669:case 35673:return Wg;case 5125:return Xg;case 36294:return Yg;case 36295:return qg;case 36296:return Zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Jg;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return $g;case 36289:case 36303:case 36311:case 36292:return jg}}function tx(i,t){i.uniform1fv(this.addr,t)}function ex(i,t){let e=fr(t,this.size,2);i.uniform2fv(this.addr,e)}function nx(i,t){let e=fr(t,this.size,3);i.uniform3fv(this.addr,e)}function ix(i,t){let e=fr(t,this.size,4);i.uniform4fv(this.addr,e)}function sx(i,t){let e=fr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function rx(i,t){let e=fr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ox(i,t){let e=fr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ax(i,t){i.uniform1iv(this.addr,t)}function cx(i,t){i.uniform2iv(this.addr,t)}function lx(i,t){i.uniform3iv(this.addr,t)}function hx(i,t){i.uniform4iv(this.addr,t)}function ux(i,t){i.uniform1uiv(this.addr,t)}function fx(i,t){i.uniform2uiv(this.addr,t)}function dx(i,t){i.uniform3uiv(this.addr,t)}function px(i,t){i.uniform4uiv(this.addr,t)}function mx(i,t,e){let n=this.cache,s=t.length,r=Na(e,s);je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||wf,r[o])}function gx(i,t,e){let n=this.cache,s=t.length,r=Na(e,s);je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Af,r[o])}function xx(i,t,e){let n=this.cache,s=t.length,r=Na(e,s);je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Rf,r[o])}function _x(i,t,e){let n=this.cache,s=t.length,r=Na(e,s);je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Tf,r[o])}function yx(i){switch(i){case 5126:return tx;case 35664:return ex;case 35665:return nx;case 35666:return ix;case 35674:return sx;case 35675:return rx;case 35676:return ox;case 5124:case 35670:return ax;case 35667:case 35671:return cx;case 35668:case 35672:return lx;case 35669:case 35673:return hx;case 5125:return ux;case 36294:return fx;case 36295:return dx;case 36296:return px;case 35678:case 36198:case 36298:case 36306:case 35682:return mx;case 35679:case 36299:case 36307:return gx;case 35680:case 36300:case 36308:case 36293:return xx;case 36289:case 36303:case 36311:case 36292:return _x}}var El=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Qg(e.type)}},bl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=yx(e.type)}},Sl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Sc=/(\w+)(\])?(\[|\.)?/g;function Lu(i,t){i.seq.push(t),i.map[t.id]=t}function vx(i,t,e){let n=i.name,s=n.length;for(Sc.lastIndex=0;;){let r=Sc.exec(n),o=Sc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Lu(e,l===void 0?new El(a,i,t):new bl(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Sl(a),Lu(e,f)),e=f}}}var er=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);vx(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Du(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Mx=37297,Ex=0;function bx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Uu=new he;function Sx(i){Me._getMatrix(Uu,Me.workingColorSpace,i);let t=`mat3( ${Uu.elements.map(e=>e.toFixed(4))} )`;switch(Me.getTransfer(i)){case Ua:return[t,"LinearTransferOETF"];case Re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Nu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+bx(i.getShaderSource(t),o)}else return s}function wx(i,t){let e=Sx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Tx(i,t){let e;switch(t){case Od:e="Linear";break;case Fd:e="Reinhard";break;case zd:e="Cineon";break;case Bd:e="ACESFilmic";break;case kd:e="AgX";break;case Vd:e="Neutral";break;case Hd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var qo=new L;function Ax(){Me.getLuminanceCoefficients(qo);let i=qo.x.toFixed(4),t=qo.y.toFixed(4),e=qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function Cx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Px(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Or(i){return i!==""}function Ou(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ix=/^[ \t]*#include +<([\w\d./]+)>/gm;function wl(i){return i.replace(Ix,Dx)}var Lx=new Map;function Dx(i,t){let e=fe[t];if(e===void 0){let n=Lx.get(t);if(n!==void 0)e=fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return wl(e)}var Ux=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zu(i){return i.replace(Ux,Nx)}function Nx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Ox(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===of?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===La?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vi&&(t="SHADOWMAP_TYPE_VSM"),t}function Fx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ir:case sr:t="ENVMAP_TYPE_CUBE";break;case Da:t="ENVMAP_TYPE_CUBE_UV";break}return t}function zx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case sr:t="ENVMAP_MODE_REFRACTION";break}return t}function Bx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ih:t="ENVMAP_BLENDING_MULTIPLY";break;case Ud:t="ENVMAP_BLENDING_MIX";break;case Nd:t="ENVMAP_BLENDING_ADD";break}return t}function Hx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function kx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Ox(e),l=Fx(e),h=zx(e),f=Bx(e),u=Hx(e),d=Rx(e),g=Cx(r),_=s.createProgram(),x,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Or).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Or).join(`
`),p.length>0&&(p+=`
`)):(x=[Bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),p=[Bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xi?"#define TONE_MAPPING":"",e.toneMapping!==Xi?fe.tonemapping_pars_fragment:"",e.toneMapping!==Xi?Tx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,wx("linearToOutputTexel",e.outputColorSpace),Ax(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Or).join(`
`)),o=wl(o),o=Ou(o,e),o=Fu(o,e),a=wl(a),a=Ou(a,e),a=Fu(a,e),o=zu(o),a=zu(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",e.glslVersion===jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=T+x+o,M=T+p+a,B=Du(s,s.VERTEX_SHADER,b),P=Du(s,s.FRAGMENT_SHADER,M);s.attachShader(_,B),s.attachShader(_,P),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function D(z){if(i.debug.checkShaderErrors){let Q=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(B).trim(),V=s.getShaderInfoLog(P).trim(),q=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,B,P);else{let ut=Nu(s,B,"vertex"),tt=Nu(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+Q+`
`+ut+`
`+tt)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(O===""||V==="")&&(X=!1);X&&(z.diagnostics={runnable:q,programLog:Q,vertexShader:{log:O,prefix:x},fragmentShader:{log:V,prefix:p}})}s.deleteShader(B),s.deleteShader(P),F=new er(s,_),A=Px(s,_)}let F;this.getUniforms=function(){return F===void 0&&D(this),F};let A;this.getAttributes=function(){return A===void 0&&D(this),A};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,Mx)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ex++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=B,this.fragmentShader=P,this}var Vx=0,Tl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Al(t),e.set(t,n)),n}},Al=class{constructor(t){this.id=Vx++,this.code=t,this.usedTimes=0}};function Gx(i,t,e,n,s,r,o){let a=new qr,c=new Tl,l=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(A){return l.add(A),A===0?"uv":`uv${A}`}function x(A,S,z,Q,O){let V=Q.fog,q=O.geometry,X=A.isMeshStandardMaterial?Q.environment:null,ut=(A.isMeshStandardMaterial?e:t).get(A.envMap||X),tt=ut&&ut.mapping===Da?ut.image.height:null,Mt=g[A.type];A.precision!==null&&(d=s.getMaxPrecision(A.precision),d!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",d,"instead."));let yt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Nt=yt!==void 0?yt.length:0,ie=0;q.morphAttributes.position!==void 0&&(ie=1),q.morphAttributes.normal!==void 0&&(ie=2),q.morphAttributes.color!==void 0&&(ie=3);let me,lt,bt,Ft;if(Mt){let be=ri[Mt];me=be.vertexShader,lt=be.fragmentShader}else me=A.vertexShader,lt=A.fragmentShader,c.update(A),bt=c.getVertexShaderID(A),Ft=c.getFragmentShaderID(A);let wt=i.getRenderTarget(),qt=i.state.buffers.depth.getReversed(),Qt=O.isInstancedMesh===!0,jt=O.isBatchedMesh===!0,le=!!A.map,ft=!!A.matcap,Et=!!ut,N=!!A.aoMap,kt=!!A.lightMap,vt=!!A.bumpMap,Vt=!!A.normalMap,j=!!A.displacementMap,pt=!!A.emissiveMap,ct=!!A.metalnessMap,R=!!A.roughnessMap,E=A.anisotropy>0,k=A.clearcoat>0,K=A.dispersion>0,st=A.iridescence>0,$=A.sheen>0,Pt=A.transmission>0,at=E&&!!A.anisotropyMap,it=k&&!!A.clearcoatMap,At=k&&!!A.clearcoatNormalMap,_t=k&&!!A.clearcoatRoughnessMap,Lt=st&&!!A.iridescenceMap,te=st&&!!A.iridescenceThicknessMap,Jt=$&&!!A.sheenColorMap,zt=$&&!!A.sheenRoughnessMap,ge=!!A.specularMap,ae=!!A.specularColorMap,Ee=!!A.specularIntensityMap,W=Pt&&!!A.transmissionMap,It=Pt&&!!A.thicknessMap,rt=!!A.gradientMap,mt=!!A.alphaMap,Bt=A.alphaTest>0,Dt=!!A.alphaHash,oe=!!A.extensions,ye=Xi;A.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(ye=i.toneMapping);let Ke={shaderID:Mt,shaderType:A.type,shaderName:A.name,vertexShader:me,fragmentShader:lt,defines:A.defines,customVertexShaderID:bt,customFragmentShaderID:Ft,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:d,batching:jt,batchingColor:jt&&O._colorsTexture!==null,instancing:Qt,instancingColor:Qt&&O.instanceColor!==null,instancingMorph:Qt&&O.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:wt===null?i.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:ur,alphaToCoverage:!!A.alphaToCoverage,map:le,matcap:ft,envMap:Et,envMapMode:Et&&ut.mapping,envMapCubeUVHeight:tt,aoMap:N,lightMap:kt,bumpMap:vt,normalMap:Vt,displacementMap:u&&j,emissiveMap:pt,normalMapObjectSpace:Vt&&A.normalMapType===Yd,normalMapTangentSpace:Vt&&A.normalMapType===_f,metalnessMap:ct,roughnessMap:R,anisotropy:E,anisotropyMap:at,clearcoat:k,clearcoatMap:it,clearcoatNormalMap:At,clearcoatRoughnessMap:_t,dispersion:K,iridescence:st,iridescenceMap:Lt,iridescenceThicknessMap:te,sheen:$,sheenColorMap:Jt,sheenRoughnessMap:zt,specularMap:ge,specularColorMap:ae,specularIntensityMap:Ee,transmission:Pt,transmissionMap:W,thicknessMap:It,gradientMap:rt,opaque:A.transparent===!1&&A.blending===js&&A.alphaToCoverage===!1,alphaMap:mt,alphaTest:Bt,alphaHash:Dt,combine:A.combine,mapUv:le&&_(A.map.channel),aoMapUv:N&&_(A.aoMap.channel),lightMapUv:kt&&_(A.lightMap.channel),bumpMapUv:vt&&_(A.bumpMap.channel),normalMapUv:Vt&&_(A.normalMap.channel),displacementMapUv:j&&_(A.displacementMap.channel),emissiveMapUv:pt&&_(A.emissiveMap.channel),metalnessMapUv:ct&&_(A.metalnessMap.channel),roughnessMapUv:R&&_(A.roughnessMap.channel),anisotropyMapUv:at&&_(A.anisotropyMap.channel),clearcoatMapUv:it&&_(A.clearcoatMap.channel),clearcoatNormalMapUv:At&&_(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&_(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&_(A.iridescenceMap.channel),iridescenceThicknessMapUv:te&&_(A.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&_(A.sheenColorMap.channel),sheenRoughnessMapUv:zt&&_(A.sheenRoughnessMap.channel),specularMapUv:ge&&_(A.specularMap.channel),specularColorMapUv:ae&&_(A.specularColorMap.channel),specularIntensityMapUv:Ee&&_(A.specularIntensityMap.channel),transmissionMapUv:W&&_(A.transmissionMap.channel),thicknessMapUv:It&&_(A.thicknessMap.channel),alphaMapUv:mt&&_(A.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Vt||E),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!q.attributes.uv&&(le||mt),fog:!!V,useFog:A.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:qt,skinning:O.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Nt,morphTextureStride:ie,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:ye,decodeVideoTexture:le&&A.map.isVideoTexture===!0&&Me.getTransfer(A.map.colorSpace)===Re,decodeVideoTextureEmissive:pt&&A.emissiveMap.isVideoTexture===!0&&Me.getTransfer(A.emissiveMap.colorSpace)===Re,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ln,flipSided:A.side===dn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:oe&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&A.extensions.multiDraw===!0||jt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ke.vertexUv1s=l.has(1),Ke.vertexUv2s=l.has(2),Ke.vertexUv3s=l.has(3),l.clear(),Ke}function p(A){let S=[];if(A.shaderID?S.push(A.shaderID):(S.push(A.customVertexShaderID),S.push(A.customFragmentShaderID)),A.defines!==void 0)for(let z in A.defines)S.push(z),S.push(A.defines[z]);return A.isRawShaderMaterial===!1&&(T(S,A),b(S,A),S.push(i.outputColorSpace)),S.push(A.customProgramCacheKey),S.join()}function T(A,S){A.push(S.precision),A.push(S.outputColorSpace),A.push(S.envMapMode),A.push(S.envMapCubeUVHeight),A.push(S.mapUv),A.push(S.alphaMapUv),A.push(S.lightMapUv),A.push(S.aoMapUv),A.push(S.bumpMapUv),A.push(S.normalMapUv),A.push(S.displacementMapUv),A.push(S.emissiveMapUv),A.push(S.metalnessMapUv),A.push(S.roughnessMapUv),A.push(S.anisotropyMapUv),A.push(S.clearcoatMapUv),A.push(S.clearcoatNormalMapUv),A.push(S.clearcoatRoughnessMapUv),A.push(S.iridescenceMapUv),A.push(S.iridescenceThicknessMapUv),A.push(S.sheenColorMapUv),A.push(S.sheenRoughnessMapUv),A.push(S.specularMapUv),A.push(S.specularColorMapUv),A.push(S.specularIntensityMapUv),A.push(S.transmissionMapUv),A.push(S.thicknessMapUv),A.push(S.combine),A.push(S.fogExp2),A.push(S.sizeAttenuation),A.push(S.morphTargetsCount),A.push(S.morphAttributeCount),A.push(S.numDirLights),A.push(S.numPointLights),A.push(S.numSpotLights),A.push(S.numSpotLightMaps),A.push(S.numHemiLights),A.push(S.numRectAreaLights),A.push(S.numDirLightShadows),A.push(S.numPointLightShadows),A.push(S.numSpotLightShadows),A.push(S.numSpotLightShadowsWithMaps),A.push(S.numLightProbes),A.push(S.shadowMapType),A.push(S.toneMapping),A.push(S.numClippingPlanes),A.push(S.numClipIntersection),A.push(S.depthPacking)}function b(A,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),A.push(a.mask)}function M(A){let S=g[A.type],z;if(S){let Q=ri[S];z=Dp.clone(Q.uniforms)}else z=A.uniforms;return z}function B(A,S){let z;for(let Q=0,O=h.length;Q<O;Q++){let V=h[Q];if(V.cacheKey===S){z=V,++z.usedTimes;break}}return z===void 0&&(z=new kx(i,S,A,r),h.push(z)),z}function P(A){if(--A.usedTimes===0){let S=h.indexOf(A);h[S]=h[h.length-1],h.pop(),A.destroy()}}function D(A){c.remove(A)}function F(){c.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:M,acquireProgram:B,releaseProgram:P,releaseShaderCache:D,programs:h,dispose:F}}function Wx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Xx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Hu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ku(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,u,d,g,_,x){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:x},i[t]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=x),t++,p}function a(f,u,d,g,_,x){let p=o(f,u,d,g,_,x);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(f,u,d,g,_,x){let p=o(f,u,d,g,_,x);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(f,u){e.length>1&&e.sort(f||Xx),n.length>1&&n.sort(u||Hu),s.length>1&&s.sort(u||Hu)}function h(){for(let f=t,u=i.length;f<u;f++){let d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Yx(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new ku,i.set(n,[o])):s>=r.length?(o=new ku,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function qx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new ne};break;case"SpotLight":e={position:new L,direction:new L,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function Zx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Jx=0;function Kx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function $x(i){let t=new qx,e=Zx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new Oe,o=new Oe;function a(l){let h=0,f=0,u=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let d=0,g=0,_=0,x=0,p=0,T=0,b=0,M=0,B=0,P=0,D=0;l.sort(Kx);for(let A=0,S=l.length;A<S;A++){let z=l[A],Q=z.color,O=z.intensity,V=z.distance,q=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=Q.r*O,f+=Q.g*O,u+=Q.b*O;else if(z.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(z.sh.coefficients[X],O);D++}else if(z.isDirectionalLight){let X=t.get(z);if(X.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let ut=z.shadow,tt=e.get(z);tt.shadowIntensity=ut.intensity,tt.shadowBias=ut.bias,tt.shadowNormalBias=ut.normalBias,tt.shadowRadius=ut.radius,tt.shadowMapSize=ut.mapSize,n.directionalShadow[d]=tt,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=z.shadow.matrix,T++}n.directional[d]=X,d++}else if(z.isSpotLight){let X=t.get(z);X.position.setFromMatrixPosition(z.matrixWorld),X.color.copy(Q).multiplyScalar(O),X.distance=V,X.coneCos=Math.cos(z.angle),X.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),X.decay=z.decay,n.spot[_]=X;let ut=z.shadow;if(z.map&&(n.spotLightMap[B]=z.map,B++,ut.updateMatrices(z),z.castShadow&&P++),n.spotLightMatrix[_]=ut.matrix,z.castShadow){let tt=e.get(z);tt.shadowIntensity=ut.intensity,tt.shadowBias=ut.bias,tt.shadowNormalBias=ut.normalBias,tt.shadowRadius=ut.radius,tt.shadowMapSize=ut.mapSize,n.spotShadow[_]=tt,n.spotShadowMap[_]=q,M++}_++}else if(z.isRectAreaLight){let X=t.get(z);X.color.copy(Q).multiplyScalar(O),X.halfWidth.set(z.width*.5,0,0),X.halfHeight.set(0,z.height*.5,0),n.rectArea[x]=X,x++}else if(z.isPointLight){let X=t.get(z);if(X.color.copy(z.color).multiplyScalar(z.intensity),X.distance=z.distance,X.decay=z.decay,z.castShadow){let ut=z.shadow,tt=e.get(z);tt.shadowIntensity=ut.intensity,tt.shadowBias=ut.bias,tt.shadowNormalBias=ut.normalBias,tt.shadowRadius=ut.radius,tt.shadowMapSize=ut.mapSize,tt.shadowCameraNear=ut.camera.near,tt.shadowCameraFar=ut.camera.far,n.pointShadow[g]=tt,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=z.shadow.matrix,b++}n.point[g]=X,g++}else if(z.isHemisphereLight){let X=t.get(z);X.skyColor.copy(z.color).multiplyScalar(O),X.groundColor.copy(z.groundColor).multiplyScalar(O),n.hemi[p]=X,p++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ut.LTC_FLOAT_1,n.rectAreaLTC2=Ut.LTC_FLOAT_2):(n.rectAreaLTC1=Ut.LTC_HALF_1,n.rectAreaLTC2=Ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let F=n.hash;(F.directionalLength!==d||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==x||F.hemiLength!==p||F.numDirectionalShadows!==T||F.numPointShadows!==b||F.numSpotShadows!==M||F.numSpotMaps!==B||F.numLightProbes!==D)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=x,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+B-P,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=D,F.directionalLength=d,F.pointLength=g,F.spotLength=_,F.rectAreaLength=x,F.hemiLength=p,F.numDirectionalShadows=T,F.numPointShadows=b,F.numSpotShadows=M,F.numSpotMaps=B,F.numLightProbes=D,n.version=Jx++)}function c(l,h){let f=0,u=0,d=0,g=0,_=0,x=h.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){let b=l[p];if(b.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),f++}else if(b.isSpotLight){let M=n.spot[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),d++}else if(b.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(x),o.identity(),r.copy(b.matrixWorld),r.premultiply(x),o.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let M=n.point[u];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(x),u++}else if(b.isHemisphereLight){let M=n.hemi[_];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(x),_++}}}return{setup:a,setupView:c,state:n}}function Vu(i){let t=new $x(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function jx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Vu(i),t.set(s,[a])):r>=o.length?(a=new Vu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Rl=class extends Ai{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Cl=class extends Ai{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Qx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t_=`uniform sampler2D shadow_pass;
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
}`;function e_(i,t,e){let n=new Zr,s=new xt,r=new xt,o=new Ce,a=new Rl({depthPacking:Xd}),c=new Cl,l={},h=e.maxTextureSize,f={[Yi]:dn,[dn]:Yi,[ln]:ln},u=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:Qx,fragmentShader:t_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new ze;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new St(g,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=of;let p=this.type;this.render=function(P,D,F){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||P.length===0)return;let A=i.getRenderTarget(),S=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),Q=i.state;Q.setBlending(Wi),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);let O=p!==vi&&this.type===vi,V=p===vi&&this.type!==vi;for(let q=0,X=P.length;q<X;q++){let ut=P[q],tt=ut.shadow;if(tt===void 0){console.warn("THREE.WebGLShadowMap:",ut,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;s.copy(tt.mapSize);let Mt=tt.getFrameExtents();if(s.multiply(Mt),r.copy(tt.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Mt.x),s.x=r.x*Mt.x,tt.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Mt.y),s.y=r.y*Mt.y,tt.mapSize.y=r.y)),tt.map===null||O===!0||V===!0){let Nt=this.type!==vi?{minFilter:Xe,magFilter:Xe}:{};tt.map!==null&&tt.map.dispose(),tt.map=new Ti(s.x,s.y,Nt),tt.map.texture.name=ut.name+".shadowMap",tt.camera.updateProjectionMatrix()}i.setRenderTarget(tt.map),i.clear();let yt=tt.getViewportCount();for(let Nt=0;Nt<yt;Nt++){let ie=tt.getViewport(Nt);o.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),Q.viewport(o),tt.updateMatrices(ut,Nt),n=tt.getFrustum(),M(D,F,tt.camera,ut,this.type)}tt.isPointLightShadow!==!0&&this.type===vi&&T(tt,F),tt.needsUpdate=!1}p=this.type,x.needsUpdate=!1,i.setRenderTarget(A,S,z)};function T(P,D){let F=t.update(_);u.defines.VSM_SAMPLES!==P.blurSamples&&(u.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ti(s.x,s.y)),u.uniforms.shadow_pass.value=P.map.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(D,null,F,u,_,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(D,null,F,d,_,null)}function b(P,D,F,A){let S=null,z=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(z!==void 0)S=z;else if(S=F.isPointLight===!0?c:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let Q=S.uuid,O=D.uuid,V=l[Q];V===void 0&&(V={},l[Q]=V);let q=V[O];q===void 0&&(q=S.clone(),V[O]=q,D.addEventListener("dispose",B)),S=q}if(S.visible=D.visible,S.wireframe=D.wireframe,A===vi?S.side=D.shadowSide!==null?D.shadowSide:D.side:S.side=D.shadowSide!==null?D.shadowSide:f[D.side],S.alphaMap=D.alphaMap,S.alphaTest=D.alphaTest,S.map=D.map,S.clipShadows=D.clipShadows,S.clippingPlanes=D.clippingPlanes,S.clipIntersection=D.clipIntersection,S.displacementMap=D.displacementMap,S.displacementScale=D.displacementScale,S.displacementBias=D.displacementBias,S.wireframeLinewidth=D.wireframeLinewidth,S.linewidth=D.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let Q=i.properties.get(S);Q.light=F}return S}function M(P,D,F,A,S){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===vi)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);let O=t.update(P),V=P.material;if(Array.isArray(V)){let q=O.groups;for(let X=0,ut=q.length;X<ut;X++){let tt=q[X],Mt=V[tt.materialIndex];if(Mt&&Mt.visible){let yt=b(P,Mt,A,S);P.onBeforeShadow(i,P,D,F,O,yt,tt),i.renderBufferDirect(F,null,O,yt,P,tt),P.onAfterShadow(i,P,D,F,O,yt,tt)}}}else if(V.visible){let q=b(P,V,A,S);P.onBeforeShadow(i,P,D,F,O,q,null),i.renderBufferDirect(F,null,O,q,P,null),P.onAfterShadow(i,P,D,F,O,q,null)}}let Q=P.children;for(let O=0,V=Q.length;O<V;O++)M(Q[O],D,F,A,S)}function B(P){P.target.removeEventListener("dispose",B);for(let F in l){let A=l[F],S=P.target.uuid;S in A&&(A[S].dispose(),delete A[S])}}}var n_={[Dc]:Uc,[Nc]:zc,[Oc]:Bc,[nr]:Fc,[Uc]:Dc,[zc]:Nc,[Bc]:Oc,[Fc]:nr};function i_(i,t){function e(){let W=!1,It=new Ce,rt=null,mt=new Ce(0,0,0,0);return{setMask:function(Bt){rt!==Bt&&!W&&(i.colorMask(Bt,Bt,Bt,Bt),rt=Bt)},setLocked:function(Bt){W=Bt},setClear:function(Bt,Dt,oe,ye,Ke){Ke===!0&&(Bt*=ye,Dt*=ye,oe*=ye),It.set(Bt,Dt,oe,ye),mt.equals(It)===!1&&(i.clearColor(Bt,Dt,oe,ye),mt.copy(It))},reset:function(){W=!1,rt=null,mt.set(-1,0,0,0)}}}function n(){let W=!1,It=!1,rt=null,mt=null,Bt=null;return{setReversed:function(Dt){if(It!==Dt){let oe=t.get("EXT_clip_control");It?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT);let ye=Bt;Bt=null,this.setClear(ye)}It=Dt},getReversed:function(){return It},setTest:function(Dt){Dt?wt(i.DEPTH_TEST):qt(i.DEPTH_TEST)},setMask:function(Dt){rt!==Dt&&!W&&(i.depthMask(Dt),rt=Dt)},setFunc:function(Dt){if(It&&(Dt=n_[Dt]),mt!==Dt){switch(Dt){case Dc:i.depthFunc(i.NEVER);break;case Uc:i.depthFunc(i.ALWAYS);break;case Nc:i.depthFunc(i.LESS);break;case nr:i.depthFunc(i.LEQUAL);break;case Oc:i.depthFunc(i.EQUAL);break;case Fc:i.depthFunc(i.GEQUAL);break;case zc:i.depthFunc(i.GREATER);break;case Bc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=Dt}},setLocked:function(Dt){W=Dt},setClear:function(Dt){Bt!==Dt&&(It&&(Dt=1-Dt),i.clearDepth(Dt),Bt=Dt)},reset:function(){W=!1,rt=null,mt=null,Bt=null,It=!1}}}function s(){let W=!1,It=null,rt=null,mt=null,Bt=null,Dt=null,oe=null,ye=null,Ke=null;return{setTest:function(be){W||(be?wt(i.STENCIL_TEST):qt(i.STENCIL_TEST))},setMask:function(be){It!==be&&!W&&(i.stencilMask(be),It=be)},setFunc:function(be,Tn,Pn){(rt!==be||mt!==Tn||Bt!==Pn)&&(i.stencilFunc(be,Tn,Pn),rt=be,mt=Tn,Bt=Pn)},setOp:function(be,Tn,Pn){(Dt!==be||oe!==Tn||ye!==Pn)&&(i.stencilOp(be,Tn,Pn),Dt=be,oe=Tn,ye=Pn)},setLocked:function(be){W=be},setClear:function(be){Ke!==be&&(i.clearStencil(be),Ke=be)},reset:function(){W=!1,It=null,rt=null,mt=null,Bt=null,Dt=null,oe=null,ye=null,Ke=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},f={},u=new WeakMap,d=[],g=null,_=!1,x=null,p=null,T=null,b=null,M=null,B=null,P=null,D=new ne(0,0,0),F=0,A=!1,S=null,z=null,Q=null,O=null,V=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ut=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(tt)[1]),X=ut>=1):tt.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),X=ut>=2);let Mt=null,yt={},Nt=i.getParameter(i.SCISSOR_BOX),ie=i.getParameter(i.VIEWPORT),me=new Ce().fromArray(Nt),lt=new Ce().fromArray(ie);function bt(W,It,rt,mt){let Bt=new Uint8Array(4),Dt=i.createTexture();i.bindTexture(W,Dt),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let oe=0;oe<rt;oe++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(It,0,i.RGBA,1,1,mt,0,i.RGBA,i.UNSIGNED_BYTE,Bt):i.texImage2D(It+oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Bt);return Dt}let Ft={};Ft[i.TEXTURE_2D]=bt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ft[i.TEXTURE_CUBE_MAP]=bt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ft[i.TEXTURE_2D_ARRAY]=bt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ft[i.TEXTURE_3D]=bt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),wt(i.DEPTH_TEST),o.setFunc(nr),vt(!1),Vt(Wh),wt(i.CULL_FACE),N(Wi);function wt(W){h[W]!==!0&&(i.enable(W),h[W]=!0)}function qt(W){h[W]!==!1&&(i.disable(W),h[W]=!1)}function Qt(W,It){return f[W]!==It?(i.bindFramebuffer(W,It),f[W]=It,W===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=It),W===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=It),!0):!1}function jt(W,It){let rt=d,mt=!1;if(W){rt=u.get(It),rt===void 0&&(rt=[],u.set(It,rt));let Bt=W.textures;if(rt.length!==Bt.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let Dt=0,oe=Bt.length;Dt<oe;Dt++)rt[Dt]=i.COLOR_ATTACHMENT0+Dt;rt.length=Bt.length,mt=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,mt=!0);mt&&i.drawBuffers(rt)}function le(W){return g!==W?(i.useProgram(W),g=W,!0):!1}let ft={[as]:i.FUNC_ADD,[xd]:i.FUNC_SUBTRACT,[_d]:i.FUNC_REVERSE_SUBTRACT};ft[yd]=i.MIN,ft[vd]=i.MAX;let Et={[Md]:i.ZERO,[Ed]:i.ONE,[bd]:i.SRC_COLOR,[Ic]:i.SRC_ALPHA,[Cd]:i.SRC_ALPHA_SATURATE,[Ad]:i.DST_COLOR,[wd]:i.DST_ALPHA,[Sd]:i.ONE_MINUS_SRC_COLOR,[Lc]:i.ONE_MINUS_SRC_ALPHA,[Rd]:i.ONE_MINUS_DST_COLOR,[Td]:i.ONE_MINUS_DST_ALPHA,[Pd]:i.CONSTANT_COLOR,[Id]:i.ONE_MINUS_CONSTANT_COLOR,[Ld]:i.CONSTANT_ALPHA,[Dd]:i.ONE_MINUS_CONSTANT_ALPHA};function N(W,It,rt,mt,Bt,Dt,oe,ye,Ke,be){if(W===Wi){_===!0&&(qt(i.BLEND),_=!1);return}if(_===!1&&(wt(i.BLEND),_=!0),W!==gd){if(W!==x||be!==A){if((p!==as||M!==as)&&(i.blendEquation(i.FUNC_ADD),p=as,M=as),be)switch(W){case js:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xh:i.blendFunc(i.ONE,i.ONE);break;case Yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case js:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}T=null,b=null,B=null,P=null,D.set(0,0,0),F=0,x=W,A=be}return}Bt=Bt||It,Dt=Dt||rt,oe=oe||mt,(It!==p||Bt!==M)&&(i.blendEquationSeparate(ft[It],ft[Bt]),p=It,M=Bt),(rt!==T||mt!==b||Dt!==B||oe!==P)&&(i.blendFuncSeparate(Et[rt],Et[mt],Et[Dt],Et[oe]),T=rt,b=mt,B=Dt,P=oe),(ye.equals(D)===!1||Ke!==F)&&(i.blendColor(ye.r,ye.g,ye.b,Ke),D.copy(ye),F=Ke),x=W,A=!1}function kt(W,It){W.side===ln?qt(i.CULL_FACE):wt(i.CULL_FACE);let rt=W.side===dn;It&&(rt=!rt),vt(rt),W.blending===js&&W.transparent===!1?N(Wi):N(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let mt=W.stencilWrite;a.setTest(mt),mt&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),pt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?wt(i.SAMPLE_ALPHA_TO_COVERAGE):qt(i.SAMPLE_ALPHA_TO_COVERAGE)}function vt(W){S!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),S=W)}function Vt(W){W!==pd?(wt(i.CULL_FACE),W!==z&&(W===Wh?i.cullFace(i.BACK):W===md?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):qt(i.CULL_FACE),z=W}function j(W){W!==Q&&(X&&i.lineWidth(W),Q=W)}function pt(W,It,rt){W?(wt(i.POLYGON_OFFSET_FILL),(O!==It||V!==rt)&&(i.polygonOffset(It,rt),O=It,V=rt)):qt(i.POLYGON_OFFSET_FILL)}function ct(W){W?wt(i.SCISSOR_TEST):qt(i.SCISSOR_TEST)}function R(W){W===void 0&&(W=i.TEXTURE0+q-1),Mt!==W&&(i.activeTexture(W),Mt=W)}function E(W,It,rt){rt===void 0&&(Mt===null?rt=i.TEXTURE0+q-1:rt=Mt);let mt=yt[rt];mt===void 0&&(mt={type:void 0,texture:void 0},yt[rt]=mt),(mt.type!==W||mt.texture!==It)&&(Mt!==rt&&(i.activeTexture(rt),Mt=rt),i.bindTexture(W,It||Ft[W]),mt.type=W,mt.texture=It)}function k(){let W=yt[Mt];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function st(){try{i.compressedTexImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Pt(){try{i.texSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function it(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function At(){try{i.texStorage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _t(){try{i.texStorage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Lt(){try{i.texImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function te(){try{i.texImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Jt(W){me.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),me.copy(W))}function zt(W){lt.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),lt.copy(W))}function ge(W,It){let rt=l.get(It);rt===void 0&&(rt=new WeakMap,l.set(It,rt));let mt=rt.get(W);mt===void 0&&(mt=i.getUniformBlockIndex(It,W.name),rt.set(W,mt))}function ae(W,It){let mt=l.get(It).get(W);c.get(It)!==mt&&(i.uniformBlockBinding(It,mt,W.__bindingPointIndex),c.set(It,mt))}function Ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Mt=null,yt={},f={},u=new WeakMap,d=[],g=null,_=!1,x=null,p=null,T=null,b=null,M=null,B=null,P=null,D=new ne(0,0,0),F=0,A=!1,S=null,z=null,Q=null,O=null,V=null,me.set(0,0,i.canvas.width,i.canvas.height),lt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:wt,disable:qt,bindFramebuffer:Qt,drawBuffers:jt,useProgram:le,setBlending:N,setMaterial:kt,setFlipSided:vt,setCullFace:Vt,setLineWidth:j,setPolygonOffset:pt,setScissorTest:ct,activeTexture:R,bindTexture:E,unbindTexture:k,compressedTexImage2D:K,compressedTexImage3D:st,texImage2D:Lt,texImage3D:te,updateUBOMapping:ge,uniformBlockBinding:ae,texStorage2D:At,texStorage3D:_t,texSubImage2D:$,texSubImage3D:Pt,compressedTexSubImage2D:at,compressedTexSubImage3D:it,scissor:Jt,viewport:zt,reset:Ee}}function Gu(i,t,e,n){let s=s_(n);switch(e){case uf:return i*t;case df:return i*t;case pf:return i*t*2;case mf:return i*t/s.components*s.byteLength;case ah:return i*t/s.components*s.byteLength;case gf:return i*t*2/s.components*s.byteLength;case ch:return i*t*2/s.components*s.byteLength;case ff:return i*t*3/s.components*s.byteLength;case $n:return i*t*4/s.components*s.byteLength;case lh:return i*t*4/s.components*s.byteLength;case ia:case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ra:case oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wc:case Yc:return Math.max(i,16)*Math.max(t,8)/4;case Gc:case Xc:return Math.max(i,8)*Math.max(t,8)/2;case qc:case Zc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Jc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Kc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $c:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case jc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Qc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case el:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case nl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case il:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case sl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case rl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ol:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case al:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case cl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ll:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case aa:case hl:case ul:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xf:case fl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case dl:case pl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function s_(i){switch(i){case Si:case cf:return{byteLength:1,components:1};case Wr:case lf:case po:return{byteLength:2,components:1};case rh:case oh:return{byteLength:2,components:4};case us:case sh:case Mi:return{byteLength:4,components:1};case hf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function r_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new xt,h=new WeakMap,f,u=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return d?new OffscreenCanvas(R,E):Yr("canvas")}function _(R,E,k){let K=1,st=ct(R);if((st.width>k||st.height>k)&&(K=k/Math.max(st.width,st.height)),K<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){let $=Math.floor(K*st.width),Pt=Math.floor(K*st.height);f===void 0&&(f=g($,Pt));let at=E?g($,Pt):f;return at.width=$,at.height=Pt,at.getContext("2d").drawImage(R,0,0,$,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+$+"x"+Pt+")."),at}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),R;return R}function x(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(R,E,k,K,st=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=E;if(E===i.RED&&(k===i.FLOAT&&($=i.R32F),k===i.HALF_FLOAT&&($=i.R16F),k===i.UNSIGNED_BYTE&&($=i.R8)),E===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.R8UI),k===i.UNSIGNED_SHORT&&($=i.R16UI),k===i.UNSIGNED_INT&&($=i.R32UI),k===i.BYTE&&($=i.R8I),k===i.SHORT&&($=i.R16I),k===i.INT&&($=i.R32I)),E===i.RG&&(k===i.FLOAT&&($=i.RG32F),k===i.HALF_FLOAT&&($=i.RG16F),k===i.UNSIGNED_BYTE&&($=i.RG8)),E===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RG8UI),k===i.UNSIGNED_SHORT&&($=i.RG16UI),k===i.UNSIGNED_INT&&($=i.RG32UI),k===i.BYTE&&($=i.RG8I),k===i.SHORT&&($=i.RG16I),k===i.INT&&($=i.RG32I)),E===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RGB8UI),k===i.UNSIGNED_SHORT&&($=i.RGB16UI),k===i.UNSIGNED_INT&&($=i.RGB32UI),k===i.BYTE&&($=i.RGB8I),k===i.SHORT&&($=i.RGB16I),k===i.INT&&($=i.RGB32I)),E===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RGBA8UI),k===i.UNSIGNED_SHORT&&($=i.RGBA16UI),k===i.UNSIGNED_INT&&($=i.RGBA32UI),k===i.BYTE&&($=i.RGBA8I),k===i.SHORT&&($=i.RGBA16I),k===i.INT&&($=i.RGBA32I)),E===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),E===i.RGBA){let Pt=st?Ua:Me.getTransfer(K);k===i.FLOAT&&($=i.RGBA32F),k===i.HALF_FLOAT&&($=i.RGBA16F),k===i.UNSIGNED_BYTE&&($=Pt===Re?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function M(R,E){let k;return R?E===null||E===us||E===rr?k=i.DEPTH24_STENCIL8:E===Mi?k=i.DEPTH32F_STENCIL8:E===Wr&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===us||E===rr?k=i.DEPTH_COMPONENT24:E===Mi?k=i.DEPTH_COMPONENT32F:E===Wr&&(k=i.DEPTH_COMPONENT16),k}function B(R,E){return x(R)===!0||R.isFramebufferTexture&&R.minFilter!==Xe&&R.minFilter!==oi?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function P(R){let E=R.target;E.removeEventListener("dispose",P),F(E),E.isVideoTexture&&h.delete(E)}function D(R){let E=R.target;E.removeEventListener("dispose",D),S(E)}function F(R){let E=n.get(R);if(E.__webglInit===void 0)return;let k=R.source,K=u.get(k);if(K){let st=K[E.__cacheKey];st.usedTimes--,st.usedTimes===0&&A(R),Object.keys(K).length===0&&u.delete(k)}n.remove(R)}function A(R){let E=n.get(R);i.deleteTexture(E.__webglTexture);let k=R.source,K=u.get(k);delete K[E.__cacheKey],o.memory.textures--}function S(R){let E=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(E.__webglFramebuffer[K]))for(let st=0;st<E.__webglFramebuffer[K].length;st++)i.deleteFramebuffer(E.__webglFramebuffer[K][st]);else i.deleteFramebuffer(E.__webglFramebuffer[K]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[K])}else{if(Array.isArray(E.__webglFramebuffer))for(let K=0;K<E.__webglFramebuffer.length;K++)i.deleteFramebuffer(E.__webglFramebuffer[K]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let K=0;K<E.__webglColorRenderbuffer.length;K++)E.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[K]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let k=R.textures;for(let K=0,st=k.length;K<st;K++){let $=n.get(k[K]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(k[K])}n.remove(R)}let z=0;function Q(){z=0}function O(){let R=z;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),z+=1,R}function V(R){let E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function q(R,E){let k=n.get(R);if(R.isVideoTexture&&j(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){let K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(k,R,E);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+E)}function X(R,E){let k=n.get(R);if(R.version>0&&k.__version!==R.version){lt(k,R,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+E)}function ut(R,E){let k=n.get(R);if(R.version>0&&k.__version!==R.version){lt(k,R,E);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+E)}function tt(R,E){let k=n.get(R);if(R.version>0&&k.__version!==R.version){bt(k,R,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+E)}let Mt={[Gr]:i.REPEAT,[ls]:i.CLAMP_TO_EDGE,[Vc]:i.MIRRORED_REPEAT},yt={[Xe]:i.NEAREST,[Gd]:i.NEAREST_MIPMAP_NEAREST,[Ao]:i.NEAREST_MIPMAP_LINEAR,[oi]:i.LINEAR,[$a]:i.LINEAR_MIPMAP_NEAREST,[hs]:i.LINEAR_MIPMAP_LINEAR},Nt={[qd]:i.NEVER,[Qd]:i.ALWAYS,[Zd]:i.LESS,[yf]:i.LEQUAL,[Jd]:i.EQUAL,[jd]:i.GEQUAL,[Kd]:i.GREATER,[$d]:i.NOTEQUAL};function ie(R,E){if(E.type===Mi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===oi||E.magFilter===$a||E.magFilter===Ao||E.magFilter===hs||E.minFilter===oi||E.minFilter===$a||E.minFilter===Ao||E.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Mt[E.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Mt[E.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Mt[E.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,yt[E.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,yt[E.minFilter]),E.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Nt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Xe||E.minFilter!==Ao&&E.minFilter!==hs||E.type===Mi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function me(R,E){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",P));let K=E.source,st=u.get(K);st===void 0&&(st={},u.set(K,st));let $=V(E);if($!==R.__cacheKey){st[$]===void 0&&(st[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),st[$].usedTimes++;let Pt=st[R.__cacheKey];Pt!==void 0&&(st[R.__cacheKey].usedTimes--,Pt.usedTimes===0&&A(E)),R.__cacheKey=$,R.__webglTexture=st[$].texture}return k}function lt(R,E,k){let K=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(K=i.TEXTURE_3D);let st=me(R,E),$=E.source;e.bindTexture(K,R.__webglTexture,i.TEXTURE0+k);let Pt=n.get($);if($.version!==Pt.__version||st===!0){e.activeTexture(i.TEXTURE0+k);let at=Me.getPrimaries(Me.workingColorSpace),it=E.colorSpace===Vi?null:Me.getPrimaries(E.colorSpace),At=E.colorSpace===Vi||at===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let _t=_(E.image,!1,s.maxTextureSize);_t=pt(E,_t);let Lt=r.convert(E.format,E.colorSpace),te=r.convert(E.type),Jt=b(E.internalFormat,Lt,te,E.colorSpace,E.isVideoTexture);ie(K,E);let zt,ge=E.mipmaps,ae=E.isVideoTexture!==!0,Ee=Pt.__version===void 0||st===!0,W=$.dataReady,It=B(E,_t);if(E.isDepthTexture)Jt=M(E.format===or,E.type),Ee&&(ae?e.texStorage2D(i.TEXTURE_2D,1,Jt,_t.width,_t.height):e.texImage2D(i.TEXTURE_2D,0,Jt,_t.width,_t.height,0,Lt,te,null));else if(E.isDataTexture)if(ge.length>0){ae&&Ee&&e.texStorage2D(i.TEXTURE_2D,It,Jt,ge[0].width,ge[0].height);for(let rt=0,mt=ge.length;rt<mt;rt++)zt=ge[rt],ae?W&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,zt.width,zt.height,Lt,te,zt.data):e.texImage2D(i.TEXTURE_2D,rt,Jt,zt.width,zt.height,0,Lt,te,zt.data);E.generateMipmaps=!1}else ae?(Ee&&e.texStorage2D(i.TEXTURE_2D,It,Jt,_t.width,_t.height),W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t.width,_t.height,Lt,te,_t.data)):e.texImage2D(i.TEXTURE_2D,0,Jt,_t.width,_t.height,0,Lt,te,_t.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ae&&Ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Jt,ge[0].width,ge[0].height,_t.depth);for(let rt=0,mt=ge.length;rt<mt;rt++)if(zt=ge[rt],E.format!==$n)if(Lt!==null)if(ae){if(W)if(E.layerUpdates.size>0){let Bt=Gu(zt.width,zt.height,E.format,E.type);for(let Dt of E.layerUpdates){let oe=zt.data.subarray(Dt*Bt/zt.data.BYTES_PER_ELEMENT,(Dt+1)*Bt/zt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,Dt,zt.width,zt.height,1,Lt,oe)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,zt.width,zt.height,_t.depth,Lt,zt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,Jt,zt.width,zt.height,_t.depth,0,zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?W&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,zt.width,zt.height,_t.depth,Lt,te,zt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,Jt,zt.width,zt.height,_t.depth,0,Lt,te,zt.data)}else{ae&&Ee&&e.texStorage2D(i.TEXTURE_2D,It,Jt,ge[0].width,ge[0].height);for(let rt=0,mt=ge.length;rt<mt;rt++)zt=ge[rt],E.format!==$n?Lt!==null?ae?W&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,zt.width,zt.height,Lt,zt.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,Jt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?W&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,zt.width,zt.height,Lt,te,zt.data):e.texImage2D(i.TEXTURE_2D,rt,Jt,zt.width,zt.height,0,Lt,te,zt.data)}else if(E.isDataArrayTexture)if(ae){if(Ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Jt,_t.width,_t.height,_t.depth),W)if(E.layerUpdates.size>0){let rt=Gu(_t.width,_t.height,E.format,E.type);for(let mt of E.layerUpdates){let Bt=_t.data.subarray(mt*rt/_t.data.BYTES_PER_ELEMENT,(mt+1)*rt/_t.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,mt,_t.width,_t.height,1,Lt,te,Bt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,Lt,te,_t.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Jt,_t.width,_t.height,_t.depth,0,Lt,te,_t.data);else if(E.isData3DTexture)ae?(Ee&&e.texStorage3D(i.TEXTURE_3D,It,Jt,_t.width,_t.height,_t.depth),W&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,Lt,te,_t.data)):e.texImage3D(i.TEXTURE_3D,0,Jt,_t.width,_t.height,_t.depth,0,Lt,te,_t.data);else if(E.isFramebufferTexture){if(Ee)if(ae)e.texStorage2D(i.TEXTURE_2D,It,Jt,_t.width,_t.height);else{let rt=_t.width,mt=_t.height;for(let Bt=0;Bt<It;Bt++)e.texImage2D(i.TEXTURE_2D,Bt,Jt,rt,mt,0,Lt,te,null),rt>>=1,mt>>=1}}else if(ge.length>0){if(ae&&Ee){let rt=ct(ge[0]);e.texStorage2D(i.TEXTURE_2D,It,Jt,rt.width,rt.height)}for(let rt=0,mt=ge.length;rt<mt;rt++)zt=ge[rt],ae?W&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Lt,te,zt):e.texImage2D(i.TEXTURE_2D,rt,Jt,Lt,te,zt);E.generateMipmaps=!1}else if(ae){if(Ee){let rt=ct(_t);e.texStorage2D(i.TEXTURE_2D,It,Jt,rt.width,rt.height)}W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Lt,te,_t)}else e.texImage2D(i.TEXTURE_2D,0,Jt,Lt,te,_t);x(E)&&p(K),Pt.__version=$.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function bt(R,E,k){if(E.image.length!==6)return;let K=me(R,E),st=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+k);let $=n.get(st);if(st.version!==$.__version||K===!0){e.activeTexture(i.TEXTURE0+k);let Pt=Me.getPrimaries(Me.workingColorSpace),at=E.colorSpace===Vi?null:Me.getPrimaries(E.colorSpace),it=E.colorSpace===Vi||Pt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let At=E.isCompressedTexture||E.image[0].isCompressedTexture,_t=E.image[0]&&E.image[0].isDataTexture,Lt=[];for(let mt=0;mt<6;mt++)!At&&!_t?Lt[mt]=_(E.image[mt],!0,s.maxCubemapSize):Lt[mt]=_t?E.image[mt].image:E.image[mt],Lt[mt]=pt(E,Lt[mt]);let te=Lt[0],Jt=r.convert(E.format,E.colorSpace),zt=r.convert(E.type),ge=b(E.internalFormat,Jt,zt,E.colorSpace),ae=E.isVideoTexture!==!0,Ee=$.__version===void 0||K===!0,W=st.dataReady,It=B(E,te);ie(i.TEXTURE_CUBE_MAP,E);let rt;if(At){ae&&Ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,It,ge,te.width,te.height);for(let mt=0;mt<6;mt++){rt=Lt[mt].mipmaps;for(let Bt=0;Bt<rt.length;Bt++){let Dt=rt[Bt];E.format!==$n?Jt!==null?ae?W&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Bt,0,0,Dt.width,Dt.height,Jt,Dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Bt,ge,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Bt,0,0,Dt.width,Dt.height,Jt,zt,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Bt,ge,Dt.width,Dt.height,0,Jt,zt,Dt.data)}}}else{if(rt=E.mipmaps,ae&&Ee){rt.length>0&&It++;let mt=ct(Lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,It,ge,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(_t){ae?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Lt[mt].width,Lt[mt].height,Jt,zt,Lt[mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ge,Lt[mt].width,Lt[mt].height,0,Jt,zt,Lt[mt].data);for(let Bt=0;Bt<rt.length;Bt++){let oe=rt[Bt].image[mt].image;ae?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Bt+1,0,0,oe.width,oe.height,Jt,zt,oe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Bt+1,ge,oe.width,oe.height,0,Jt,zt,oe.data)}}else{ae?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Jt,zt,Lt[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ge,Jt,zt,Lt[mt]);for(let Bt=0;Bt<rt.length;Bt++){let Dt=rt[Bt];ae?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Bt+1,0,0,Jt,zt,Dt.image[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Bt+1,ge,Jt,zt,Dt.image[mt])}}}x(E)&&p(i.TEXTURE_CUBE_MAP),$.__version=st.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Ft(R,E,k,K,st,$){let Pt=r.convert(k.format,k.colorSpace),at=r.convert(k.type),it=b(k.internalFormat,Pt,at,k.colorSpace),At=n.get(E),_t=n.get(k);if(_t.__renderTarget=E,!At.__hasExternalTextures){let Lt=Math.max(1,E.width>>$),te=Math.max(1,E.height>>$);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,$,it,Lt,te,E.depth,0,Pt,at,null):e.texImage2D(st,$,it,Lt,te,0,Pt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Vt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,st,_t.__webglTexture,0,vt(E)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,st,_t.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(R,E,k){if(i.bindRenderbuffer(i.RENDERBUFFER,R),E.depthBuffer){let K=E.depthTexture,st=K&&K.isDepthTexture?K.type:null,$=M(E.stencilBuffer,st),Pt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=vt(E);Vt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,$,E.width,E.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,$,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,$,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,R)}else{let K=E.textures;for(let st=0;st<K.length;st++){let $=K[st],Pt=r.convert($.format,$.colorSpace),at=r.convert($.type),it=b($.internalFormat,Pt,at,$.colorSpace),At=vt(E);k&&Vt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,it,E.width,E.height):Vt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,it,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,it,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function qt(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(E.depthTexture);K.__renderTarget=E,(!K.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),q(E.depthTexture,0);let st=K.__webglTexture,$=vt(E);if(E.depthTexture.format===Qs)Vt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(E.depthTexture.format===or)Vt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function Qt(R){let E=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){let K=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),K){let st=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,K.removeEventListener("dispose",st)};K.addEventListener("dispose",st),E.__depthDisposeCallback=st}E.__boundDepthTexture=K}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");qt(E.__webglFramebuffer,R)}else if(k){E.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[K]),E.__webglDepthbuffer[K]===void 0)E.__webglDepthbuffer[K]=i.createRenderbuffer(),wt(E.__webglDepthbuffer[K],R,!1);else{let st=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=E.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),wt(E.__webglDepthbuffer,R,!1);else{let K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,st)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function jt(R,E,k){let K=n.get(R);E!==void 0&&Ft(K.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Qt(R)}function le(R){let E=R.texture,k=n.get(R),K=n.get(E);R.addEventListener("dispose",D);let st=R.textures,$=R.isWebGLCubeRenderTarget===!0,Pt=st.length>1;if(Pt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=E.version,o.memory.textures++),$){k.__webglFramebuffer=[];for(let at=0;at<6;at++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[at]=[];for(let it=0;it<E.mipmaps.length;it++)k.__webglFramebuffer[at][it]=i.createFramebuffer()}else k.__webglFramebuffer[at]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let at=0;at<E.mipmaps.length;at++)k.__webglFramebuffer[at]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let at=0,it=st.length;at<it;at++){let At=n.get(st[at]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Vt(R)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let at=0;at<st.length;at++){let it=st[at];k.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[at]);let At=r.convert(it.format,it.colorSpace),_t=r.convert(it.type),Lt=b(it.internalFormat,At,_t,it.colorSpace,R.isXRRenderTarget===!0),te=vt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,te,Lt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,k.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),wt(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ie(i.TEXTURE_CUBE_MAP,E);for(let at=0;at<6;at++)if(E.mipmaps&&E.mipmaps.length>0)for(let it=0;it<E.mipmaps.length;it++)Ft(k.__webglFramebuffer[at][it],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,it);else Ft(k.__webglFramebuffer[at],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);x(E)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let at=0,it=st.length;at<it;at++){let At=st[at],_t=n.get(At);e.bindTexture(i.TEXTURE_2D,_t.__webglTexture),ie(i.TEXTURE_2D,At),Ft(k.__webglFramebuffer,R,At,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),x(At)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(at=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,K.__webglTexture),ie(at,E),E.mipmaps&&E.mipmaps.length>0)for(let it=0;it<E.mipmaps.length;it++)Ft(k.__webglFramebuffer[it],R,E,i.COLOR_ATTACHMENT0,at,it);else Ft(k.__webglFramebuffer,R,E,i.COLOR_ATTACHMENT0,at,0);x(E)&&p(at),e.unbindTexture()}R.depthBuffer&&Qt(R)}function ft(R){let E=R.textures;for(let k=0,K=E.length;k<K;k++){let st=E[k];if(x(st)){let $=T(R),Pt=n.get(st).__webglTexture;e.bindTexture($,Pt),p($),e.unbindTexture()}}}let Et=[],N=[];function kt(R){if(R.samples>0){if(Vt(R)===!1){let E=R.textures,k=R.width,K=R.height,st=i.COLOR_BUFFER_BIT,$=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(R),at=E.length>1;if(at)for(let it=0;it<E.length;it++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let it=0;it<E.length;it++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[it]);let At=n.get(E[it]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,At,0)}i.blitFramebuffer(0,0,k,K,0,0,k,K,st,i.NEAREST),c===!0&&(Et.length=0,N.length=0,Et.push(i.COLOR_ATTACHMENT0+it),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Et.push($),N.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let it=0;it<E.length;it++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[it]);let At=n.get(E[it]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.TEXTURE_2D,At,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let E=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function vt(R){return Math.min(s.maxSamples,R.samples)}function Vt(R){let E=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function j(R){let E=o.render.frame;h.get(R)!==E&&(h.set(R,E),R.update())}function pt(R,E){let k=R.colorSpace,K=R.format,st=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==ur&&k!==Vi&&(Me.getTransfer(k)===Re?(K!==$n||st!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}function ct(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=Q,this.setTexture2D=q,this.setTexture2DArray=X,this.setTexture3D=ut,this.setTextureCube=tt,this.rebindTextures=jt,this.setupRenderTarget=le,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=Vt}function o_(i,t){function e(n,s=Vi){let r,o=Me.getTransfer(s);if(n===Si)return i.UNSIGNED_BYTE;if(n===rh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cf)return i.BYTE;if(n===lf)return i.SHORT;if(n===Wr)return i.UNSIGNED_SHORT;if(n===sh)return i.INT;if(n===us)return i.UNSIGNED_INT;if(n===Mi)return i.FLOAT;if(n===po)return i.HALF_FLOAT;if(n===uf)return i.ALPHA;if(n===ff)return i.RGB;if(n===$n)return i.RGBA;if(n===df)return i.LUMINANCE;if(n===pf)return i.LUMINANCE_ALPHA;if(n===Qs)return i.DEPTH_COMPONENT;if(n===or)return i.DEPTH_STENCIL;if(n===mf)return i.RED;if(n===ah)return i.RED_INTEGER;if(n===gf)return i.RG;if(n===ch)return i.RG_INTEGER;if(n===lh)return i.RGBA_INTEGER;if(n===ia||n===sa||n===ra||n===oa)if(o===Re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gc||n===Wc||n===Xc||n===Yc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Gc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qc||n===Zc||n===Jc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qc||n===Zc)return o===Re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Jc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Kc||n===$c||n===jc||n===Qc||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===cl||n===ll)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Kc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$c)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===jc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===el)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===il)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ol)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===al)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ll)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===aa||n===hl||n===ul)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===aa)return o===Re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xf||n===fl||n===dl||n===pl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===aa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Pl=class extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Kt=class extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},a_={type:"move"},Br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let x=e.getJointPose(_,n),p=this._getHandJoint(l,_);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&u>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(a_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Kt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},c_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l_=`
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

}`,Il=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new pn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Hn({vertexShader:c_,fragmentShader:l_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new St(new Ri(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ll=class extends wi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,g=null,_=new Il,x=e.getContextAttributes(),p=null,T=null,b=[],M=[],B=new xt,P=null,D=new sn;D.viewport=new Ce;let F=new sn;F.viewport=new Ce;let A=[D,F],S=new Pl,z=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(lt){let bt=b[lt];return bt===void 0&&(bt=new Br,b[lt]=bt),bt.getTargetRaySpace()},this.getControllerGrip=function(lt){let bt=b[lt];return bt===void 0&&(bt=new Br,b[lt]=bt),bt.getGripSpace()},this.getHand=function(lt){let bt=b[lt];return bt===void 0&&(bt=new Br,b[lt]=bt),bt.getHandSpace()};function O(lt){let bt=M.indexOf(lt.inputSource);if(bt===-1)return;let Ft=b[bt];Ft!==void 0&&(Ft.update(lt.inputSource,lt.frame,l||o),Ft.dispatchEvent({type:lt.type,data:lt.inputSource}))}function V(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",q);for(let lt=0;lt<b.length;lt++){let bt=M[lt];bt!==null&&(M[lt]=null,b[lt].disconnect(bt))}z=null,Q=null,_.reset(),t.setRenderTarget(p),d=null,u=null,f=null,s=null,T=null,me.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(lt){r=lt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(lt){a=lt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(lt){l=lt},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(lt){if(s=lt,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",V),s.addEventListener("inputsourceschange",q),x.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(B),s.renderState.layers===void 0){let bt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,bt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new Ti(d.framebufferWidth,d.framebufferHeight,{format:$n,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let bt=null,Ft=null,wt=null;x.depth&&(wt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=x.stencil?or:Qs,Ft=x.stencil?rr:us);let qt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};f=new XRWebGLBinding(s,e),u=f.createProjectionLayer(qt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),T=new Ti(u.textureWidth,u.textureHeight,{format:$n,type:Si,depthTexture:new _a(u.textureWidth,u.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),me.setContext(s),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(lt){for(let bt=0;bt<lt.removed.length;bt++){let Ft=lt.removed[bt],wt=M.indexOf(Ft);wt>=0&&(M[wt]=null,b[wt].disconnect(Ft))}for(let bt=0;bt<lt.added.length;bt++){let Ft=lt.added[bt],wt=M.indexOf(Ft);if(wt===-1){for(let Qt=0;Qt<b.length;Qt++)if(Qt>=M.length){M.push(Ft),wt=Qt;break}else if(M[Qt]===null){M[Qt]=Ft,wt=Qt;break}if(wt===-1)break}let qt=b[wt];qt&&qt.connect(Ft)}}let X=new L,ut=new L;function tt(lt,bt,Ft){X.setFromMatrixPosition(bt.matrixWorld),ut.setFromMatrixPosition(Ft.matrixWorld);let wt=X.distanceTo(ut),qt=bt.projectionMatrix.elements,Qt=Ft.projectionMatrix.elements,jt=qt[14]/(qt[10]-1),le=qt[14]/(qt[10]+1),ft=(qt[9]+1)/qt[5],Et=(qt[9]-1)/qt[5],N=(qt[8]-1)/qt[0],kt=(Qt[8]+1)/Qt[0],vt=jt*N,Vt=jt*kt,j=wt/(-N+kt),pt=j*-N;if(bt.matrixWorld.decompose(lt.position,lt.quaternion,lt.scale),lt.translateX(pt),lt.translateZ(j),lt.matrixWorld.compose(lt.position,lt.quaternion,lt.scale),lt.matrixWorldInverse.copy(lt.matrixWorld).invert(),qt[10]===-1)lt.projectionMatrix.copy(bt.projectionMatrix),lt.projectionMatrixInverse.copy(bt.projectionMatrixInverse);else{let ct=jt+j,R=le+j,E=vt-pt,k=Vt+(wt-pt),K=ft*le/R*ct,st=Et*le/R*ct;lt.projectionMatrix.makePerspective(E,k,K,st,ct,R),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert()}}function Mt(lt,bt){bt===null?lt.matrixWorld.copy(lt.matrix):lt.matrixWorld.multiplyMatrices(bt.matrixWorld,lt.matrix),lt.matrixWorldInverse.copy(lt.matrixWorld).invert()}this.updateCamera=function(lt){if(s===null)return;let bt=lt.near,Ft=lt.far;_.texture!==null&&(_.depthNear>0&&(bt=_.depthNear),_.depthFar>0&&(Ft=_.depthFar)),S.near=F.near=D.near=bt,S.far=F.far=D.far=Ft,(z!==S.near||Q!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),z=S.near,Q=S.far),D.layers.mask=lt.layers.mask|2,F.layers.mask=lt.layers.mask|4,S.layers.mask=D.layers.mask|F.layers.mask;let wt=lt.parent,qt=S.cameras;Mt(S,wt);for(let Qt=0;Qt<qt.length;Qt++)Mt(qt[Qt],wt);qt.length===2?tt(S,D,F):S.projectionMatrix.copy(D.projectionMatrix),yt(lt,S,wt)};function yt(lt,bt,Ft){Ft===null?lt.matrix.copy(bt.matrixWorld):(lt.matrix.copy(Ft.matrixWorld),lt.matrix.invert(),lt.matrix.multiply(bt.matrixWorld)),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.updateMatrixWorld(!0),lt.projectionMatrix.copy(bt.projectionMatrix),lt.projectionMatrixInverse.copy(bt.projectionMatrixInverse),lt.isPerspectiveCamera&&(lt.fov=Xr*2*Math.atan(1/lt.projectionMatrix.elements[5]),lt.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(lt){c=lt,u!==null&&(u.fixedFoveation=lt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=lt)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let Nt=null;function ie(lt,bt){if(h=bt.getViewerPose(l||o),g=bt,h!==null){let Ft=h.views;d!==null&&(t.setRenderTargetFramebuffer(T,d.framebuffer),t.setRenderTarget(T));let wt=!1;Ft.length!==S.cameras.length&&(S.cameras.length=0,wt=!0);for(let Qt=0;Qt<Ft.length;Qt++){let jt=Ft[Qt],le=null;if(d!==null)le=d.getViewport(jt);else{let Et=f.getViewSubImage(u,jt);le=Et.viewport,Qt===0&&(t.setRenderTargetTextures(T,Et.colorTexture,u.ignoreDepthValues?void 0:Et.depthStencilTexture),t.setRenderTarget(T))}let ft=A[Qt];ft===void 0&&(ft=new sn,ft.layers.enable(Qt),ft.viewport=new Ce,A[Qt]=ft),ft.matrix.fromArray(jt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(jt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(le.x,le.y,le.width,le.height),Qt===0&&(S.matrix.copy(ft.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),wt===!0&&S.cameras.push(ft)}let qt=s.enabledFeatures;if(qt&&qt.includes("depth-sensing")){let Qt=f.getDepthInformation(Ft[0]);Qt&&Qt.isValid&&Qt.texture&&_.init(t,Qt,s.renderState)}}for(let Ft=0;Ft<b.length;Ft++){let wt=M[Ft],qt=b[Ft];wt!==null&&qt!==void 0&&qt.update(wt,bt,l||o)}Nt&&Nt(lt,bt),bt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:bt}),g=null}let me=new Sf;me.setAnimationLoop(ie),this.setAnimationLoop=function(lt){Nt=lt},this.dispose=function(){}}},rs=new ci,h_=new Oe;function u_(i,t){function e(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function n(x,p){p.color.getRGB(x.fogColor.value,bf(i)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function s(x,p,T,b,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(x,p):p.isMeshToonMaterial?(r(x,p),f(x,p)):p.isMeshPhongMaterial?(r(x,p),h(x,p)):p.isMeshStandardMaterial?(r(x,p),u(x,p),p.isMeshPhysicalMaterial&&d(x,p,M)):p.isMeshMatcapMaterial?(r(x,p),g(x,p)):p.isMeshDepthMaterial?r(x,p):p.isMeshDistanceMaterial?(r(x,p),_(x,p)):p.isMeshNormalMaterial?r(x,p):p.isLineBasicMaterial?(o(x,p),p.isLineDashedMaterial&&a(x,p)):p.isPointsMaterial?c(x,p,T,b):p.isSpriteMaterial?l(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,e(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,e(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===dn&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,e(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===dn&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,e(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,e(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);let T=t.get(p),b=T.envMap,M=T.envMapRotation;b&&(x.envMap.value=b,rs.copy(M),rs.x*=-1,rs.y*=-1,rs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),x.envMapRotation.value.setFromMatrix4(h_.makeRotationFromEuler(rs)),x.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,x.aoMapTransform))}function o(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,e(p.map,x.mapTransform))}function a(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function c(x,p,T,b){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*T,x.scale.value=b*.5,p.map&&(x.map.value=p.map,e(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function l(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,e(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function h(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function f(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function u(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function d(x,p,T){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===dn&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=T.texture,x.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,p){p.matcap&&(x.matcap.value=p.matcap)}function _(x,p){let T=t.get(p).light;x.referencePosition.value.setFromMatrixPosition(T.matrixWorld),x.nearDistance.value=T.shadow.camera.near,x.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function f_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,b){let M=b.program;n.uniformBlockBinding(T,M)}function l(T,b){let M=s[T.id];M===void 0&&(g(T),M=h(T),s[T.id]=M,T.addEventListener("dispose",x));let B=b.program;n.updateUBOMapping(T,B);let P=t.render.frame;r[T.id]!==P&&(u(T),r[T.id]=P)}function h(T){let b=f();T.__bindingPointIndex=b;let M=i.createBuffer(),B=T.__size,P=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,B,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,M),M}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(T){let b=s[T.id],M=T.uniforms,B=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let P=0,D=M.length;P<D;P++){let F=Array.isArray(M[P])?M[P]:[M[P]];for(let A=0,S=F.length;A<S;A++){let z=F[A];if(d(z,P,A,B)===!0){let Q=z.__offset,O=Array.isArray(z.value)?z.value:[z.value],V=0;for(let q=0;q<O.length;q++){let X=O[q],ut=_(X);typeof X=="number"||typeof X=="boolean"?(z.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,Q+V,z.__data)):X.isMatrix3?(z.__data[0]=X.elements[0],z.__data[1]=X.elements[1],z.__data[2]=X.elements[2],z.__data[3]=0,z.__data[4]=X.elements[3],z.__data[5]=X.elements[4],z.__data[6]=X.elements[5],z.__data[7]=0,z.__data[8]=X.elements[6],z.__data[9]=X.elements[7],z.__data[10]=X.elements[8],z.__data[11]=0):(X.toArray(z.__data,V),V+=ut.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Q,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(T,b,M,B){let P=T.value,D=b+"_"+M;if(B[D]===void 0)return typeof P=="number"||typeof P=="boolean"?B[D]=P:B[D]=P.clone(),!0;{let F=B[D];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return B[D]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function g(T){let b=T.uniforms,M=0,B=16;for(let D=0,F=b.length;D<F;D++){let A=Array.isArray(b[D])?b[D]:[b[D]];for(let S=0,z=A.length;S<z;S++){let Q=A[S],O=Array.isArray(Q.value)?Q.value:[Q.value];for(let V=0,q=O.length;V<q;V++){let X=O[V],ut=_(X),tt=M%B,Mt=tt%ut.boundary,yt=tt+Mt;M+=Mt,yt!==0&&B-yt<ut.storage&&(M+=B-yt),Q.__data=new Float32Array(ut.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=M,M+=ut.storage}}}let P=M%B;return P>0&&(M+=B-P),T.__size=M,T.__cache={},this}function _(T){let b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function x(T){let b=T.target;b.removeEventListener("dispose",x);let M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(let T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Jr=class{constructor(t={}){let{canvas:e=gp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),_=new Int32Array(4),x=null,p=null,T=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ue,this.toneMapping=Xi,this.toneMappingExposure=1;let M=this,B=!1,P=0,D=0,F=null,A=-1,S=null,z=new Ce,Q=new Ce,O=null,V=new ne(0),q=0,X=e.width,ut=e.height,tt=1,Mt=null,yt=null,Nt=new Ce(0,0,X,ut),ie=new Ce(0,0,X,ut),me=!1,lt=new Zr,bt=!1,Ft=!1,wt=new Oe,qt=new Oe,Qt=new L,jt=new Ce,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ft=!1;function Et(){return F===null?tt:1}let N=n;function kt(C,Z){return e.getContext(C,Z)}try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nh}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",Bt,!1),e.addEventListener("webglcontextcreationerror",Dt,!1),N===null){let Z="webgl2";if(N=kt(Z,C),N===null)throw kt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let vt,Vt,j,pt,ct,R,E,k,K,st,$,Pt,at,it,At,_t,Lt,te,Jt,zt,ge,ae,Ee,W;function It(){vt=new Rg(N),vt.init(),ae=new o_(N,vt),Vt=new Eg(N,vt,t,ae),j=new i_(N,vt),Vt.reverseDepthBuffer&&u&&j.buffers.depth.setReversed(!0),pt=new Ig(N),ct=new Wx,R=new r_(N,vt,j,ct,Vt,ae,pt),E=new Sg(M),k=new Ag(M),K=new zp(N),Ee=new vg(N,K),st=new Cg(N,K,pt,Ee),$=new Dg(N,st,K,pt),Jt=new Lg(N,Vt,R),_t=new bg(ct),Pt=new Gx(M,E,k,vt,Vt,Ee,_t),at=new u_(M,ct),it=new Yx,At=new jx(vt),te=new yg(M,E,k,j,$,d,c),Lt=new e_(M,$,Vt),W=new f_(N,pt,Vt,j),zt=new Mg(N,vt,pt),ge=new Pg(N,vt,pt),pt.programs=Pt.programs,M.capabilities=Vt,M.extensions=vt,M.properties=ct,M.renderLists=it,M.shadowMap=Lt,M.state=j,M.info=pt}It();let rt=new Ll(M,N);this.xr=rt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let C=vt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=vt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(C){C!==void 0&&(tt=C,this.setSize(X,ut,!1))},this.getSize=function(C){return C.set(X,ut)},this.setSize=function(C,Z,et=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=C,ut=Z,e.width=Math.floor(C*tt),e.height=Math.floor(Z*tt),et===!0&&(e.style.width=C+"px",e.style.height=Z+"px"),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(X*tt,ut*tt).floor()},this.setDrawingBufferSize=function(C,Z,et){X=C,ut=Z,tt=et,e.width=Math.floor(C*et),e.height=Math.floor(Z*et),this.setViewport(0,0,C,Z)},this.getCurrentViewport=function(C){return C.copy(z)},this.getViewport=function(C){return C.copy(Nt)},this.setViewport=function(C,Z,et,nt){C.isVector4?Nt.set(C.x,C.y,C.z,C.w):Nt.set(C,Z,et,nt),j.viewport(z.copy(Nt).multiplyScalar(tt).round())},this.getScissor=function(C){return C.copy(ie)},this.setScissor=function(C,Z,et,nt){C.isVector4?ie.set(C.x,C.y,C.z,C.w):ie.set(C,Z,et,nt),j.scissor(Q.copy(ie).multiplyScalar(tt).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(C){j.setScissorTest(me=C)},this.setOpaqueSort=function(C){Mt=C},this.setTransparentSort=function(C){yt=C},this.getClearColor=function(C){return C.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(C=!0,Z=!0,et=!0){let nt=0;if(C){let J=!1;if(F!==null){let Tt=F.texture.format;J=Tt===lh||Tt===ch||Tt===ah}if(J){let Tt=F.texture.type,Ct=Tt===Si||Tt===us||Tt===Wr||Tt===rr||Tt===rh||Tt===oh,Xt=te.getClearColor(),Yt=te.getClearAlpha(),se=Xt.r,ce=Xt.g,Rt=Xt.b;Ct?(g[0]=se,g[1]=ce,g[2]=Rt,g[3]=Yt,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=se,_[1]=ce,_[2]=Rt,_[3]=Yt,N.clearBufferiv(N.COLOR,0,_))}else nt|=N.COLOR_BUFFER_BIT}Z&&(nt|=N.DEPTH_BUFFER_BIT),et&&(nt|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",Bt,!1),e.removeEventListener("webglcontextcreationerror",Dt,!1),it.dispose(),At.dispose(),ct.dispose(),E.dispose(),k.dispose(),$.dispose(),Ee.dispose(),W.dispose(),Pt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",ni),rt.removeEventListener("sessionend",Ii),On.stop()};function mt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;let C=pt.autoReset,Z=Lt.enabled,et=Lt.autoUpdate,nt=Lt.needsUpdate,J=Lt.type;It(),pt.autoReset=C,Lt.enabled=Z,Lt.autoUpdate=et,Lt.needsUpdate=nt,Lt.type=J}function Dt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function oe(C){let Z=C.target;Z.removeEventListener("dispose",oe),ye(Z)}function ye(C){Ke(C),ct.remove(C)}function Ke(C){let Z=ct.get(C).programs;Z!==void 0&&(Z.forEach(function(et){Pt.releaseProgram(et)}),C.isShaderMaterial&&Pt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,et,nt,J,Tt){Z===null&&(Z=le);let Ct=J.isMesh&&J.matrixWorld.determinant()<0,Xt=vo(C,Z,et,nt,J);j.setMaterial(nt,Ct);let Yt=et.index,se=1;if(nt.wireframe===!0){if(Yt=st.getWireframeAttribute(et),Yt===void 0)return;se=2}let ce=et.drawRange,Rt=et.attributes.position,de=ce.start*se,Ae=(ce.start+ce.count)*se;Tt!==null&&(de=Math.max(de,Tt.start*se),Ae=Math.min(Ae,(Tt.start+Tt.count)*se)),Yt!==null?(de=Math.max(de,0),Ae=Math.min(Ae,Yt.count)):Rt!=null&&(de=Math.max(de,0),Ae=Math.min(Ae,Rt.count));let De=Ae-de;if(De<0||De===1/0)return;Ee.setup(J,nt,Xt,et,Yt);let cn,pe=zt;if(Yt!==null&&(cn=K.get(Yt),pe=ge,pe.setIndex(cn)),J.isMesh)nt.wireframe===!0?(j.setLineWidth(nt.wireframeLinewidth*Et()),pe.setMode(N.LINES)):pe.setMode(N.TRIANGLES);else if(J.isLine){let Zt=nt.linewidth;Zt===void 0&&(Zt=1),j.setLineWidth(Zt*Et()),J.isLineSegments?pe.setMode(N.LINES):J.isLineLoop?pe.setMode(N.LINE_LOOP):pe.setMode(N.LINE_STRIP)}else J.isPoints?pe.setMode(N.POINTS):J.isSprite&&pe.setMode(N.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)pe.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))pe.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let Zt=J._multiDrawStarts,Fn=J._multiDrawCounts,xe=J._multiDrawCount,We=Yt?K.get(Yt).bytesPerElement:1,Ui=ct.get(nt).currentProgram.getUniforms();for(let yn=0;yn<xe;yn++)Ui.setValue(N,"_gl_DrawID",yn),pe.render(Zt[yn]/We,Fn[yn])}else if(J.isInstancedMesh)pe.renderInstances(de,De,J.count);else if(et.isInstancedBufferGeometry){let Zt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Fn=Math.min(et.instanceCount,Zt);pe.renderInstances(de,De,Fn)}else pe.render(de,De)};function be(C,Z,et){C.transparent===!0&&C.side===ln&&C.forceSinglePass===!1?(C.side=dn,C.needsUpdate=!0,ji(C,Z,et),C.side=Yi,C.needsUpdate=!0,ji(C,Z,et),C.side=ln):ji(C,Z,et)}this.compile=function(C,Z,et=null){et===null&&(et=C),p=At.get(et),p.init(Z),b.push(p),et.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(p.pushLight(J),J.castShadow&&p.pushShadow(J))}),C!==et&&C.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(p.pushLight(J),J.castShadow&&p.pushShadow(J))}),p.setupLights();let nt=new Set;return C.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Tt=J.material;if(Tt)if(Array.isArray(Tt))for(let Ct=0;Ct<Tt.length;Ct++){let Xt=Tt[Ct];be(Xt,et,J),nt.add(Xt)}else be(Tt,et,J),nt.add(Tt)}),b.pop(),p=null,nt},this.compileAsync=function(C,Z,et=null){let nt=this.compile(C,Z,et);return new Promise(J=>{function Tt(){if(nt.forEach(function(Ct){ct.get(Ct).currentProgram.isReady()&&nt.delete(Ct)}),nt.size===0){J(C);return}setTimeout(Tt,10)}vt.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Tn=null;function Pn(C){Tn&&Tn(C)}function ni(){On.stop()}function Ii(){On.start()}let On=new Sf;On.setAnimationLoop(Pn),typeof self!="undefined"&&On.setContext(self),this.setAnimationLoop=function(C){Tn=C,rt.setAnimationLoop(C),C===null?On.stop():On.start()},rt.addEventListener("sessionstart",ni),rt.addEventListener("sessionend",Ii),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(Z),Z=rt.getCamera()),C.isScene===!0&&C.onBeforeRender(M,C,Z,F),p=At.get(C,b.length),p.init(Z),b.push(p),qt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),lt.setFromProjectionMatrix(qt),Ft=this.localClippingEnabled,bt=_t.init(this.clippingPlanes,Ft),x=it.get(C,T.length),x.init(),T.push(x),rt.enabled===!0&&rt.isPresenting===!0){let Tt=M.xr.getDepthSensingMesh();Tt!==null&&Li(Tt,Z,-1/0,M.sortObjects)}Li(C,Z,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(Mt,yt),ft=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,ft&&te.addToRenderList(x,C),this.info.render.frame++,bt===!0&&_t.beginShadows();let et=p.state.shadowsArray;Lt.render(et,C,Z),bt===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();let nt=x.opaque,J=x.transmissive;if(p.setupLights(),Z.isArrayCamera){let Tt=Z.cameras;if(J.length>0)for(let Ct=0,Xt=Tt.length;Ct<Xt;Ct++){let Yt=Tt[Ct];As(nt,J,C,Yt)}ft&&te.render(C);for(let Ct=0,Xt=Tt.length;Ct<Xt;Ct++){let Yt=Tt[Ct];_n(x,C,Yt,Yt.viewport)}}else J.length>0&&As(nt,J,C,Z),ft&&te.render(C),_n(x,C,Z);F!==null&&(R.updateMultisampleRenderTarget(F),R.updateRenderTargetMipmap(F)),C.isScene===!0&&C.onAfterRender(M,C,Z),Ee.resetDefaultState(),A=-1,S=null,b.pop(),b.length>0?(p=b[b.length-1],bt===!0&&_t.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?x=T[T.length-1]:x=null};function Li(C,Z,et,nt){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)et=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||lt.intersectsSprite(C)){nt&&jt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(qt);let Ct=$.update(C),Xt=C.material;Xt.visible&&x.push(C,Ct,Xt,et,jt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||lt.intersectsObject(C))){let Ct=$.update(C),Xt=C.material;if(nt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),jt.copy(C.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),jt.copy(Ct.boundingSphere.center)),jt.applyMatrix4(C.matrixWorld).applyMatrix4(qt)),Array.isArray(Xt)){let Yt=Ct.groups;for(let se=0,ce=Yt.length;se<ce;se++){let Rt=Yt[se],de=Xt[Rt.materialIndex];de&&de.visible&&x.push(C,Ct,de,et,jt.z,Rt)}}else Xt.visible&&x.push(C,Ct,Xt,et,jt.z,null)}}let Tt=C.children;for(let Ct=0,Xt=Tt.length;Ct<Xt;Ct++)Li(Tt[Ct],Z,et,nt)}function _n(C,Z,et,nt){let J=C.opaque,Tt=C.transmissive,Ct=C.transparent;p.setupLightsView(et),bt===!0&&_t.setGlobalState(M.clippingPlanes,et),nt&&j.viewport(z.copy(nt)),J.length>0&&In(J,Z,et),Tt.length>0&&In(Tt,Z,et),Ct.length>0&&In(Ct,Z,et),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function As(C,Z,et,nt){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[nt.id]===void 0&&(p.state.transmissionRenderTarget[nt.id]=new Ti(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float")?po:Si,minFilter:hs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Me.workingColorSpace}));let Tt=p.state.transmissionRenderTarget[nt.id],Ct=nt.viewport||z;Tt.setSize(Ct.z,Ct.w);let Xt=M.getRenderTarget();M.setRenderTarget(Tt),M.getClearColor(V),q=M.getClearAlpha(),q<1&&M.setClearColor(16777215,.5),M.clear(),ft&&te.render(et);let Yt=M.toneMapping;M.toneMapping=Xi;let se=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),p.setupLightsView(nt),bt===!0&&_t.setGlobalState(M.clippingPlanes,nt),In(C,et,nt),R.updateMultisampleRenderTarget(Tt),R.updateRenderTargetMipmap(Tt),vt.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let Rt=0,de=Z.length;Rt<de;Rt++){let Ae=Z[Rt],De=Ae.object,cn=Ae.geometry,pe=Ae.material,Zt=Ae.group;if(pe.side===ln&&De.layers.test(nt.layers)){let Fn=pe.side;pe.side=dn,pe.needsUpdate=!0,Di(De,et,nt,cn,pe,Zt),pe.side=Fn,pe.needsUpdate=!0,ce=!0}}ce===!0&&(R.updateMultisampleRenderTarget(Tt),R.updateRenderTargetMipmap(Tt))}M.setRenderTarget(Xt),M.setClearColor(V,q),se!==void 0&&(nt.viewport=se),M.toneMapping=Yt}function In(C,Z,et){let nt=Z.isScene===!0?Z.overrideMaterial:null;for(let J=0,Tt=C.length;J<Tt;J++){let Ct=C[J],Xt=Ct.object,Yt=Ct.geometry,se=nt===null?Ct.material:nt,ce=Ct.group;Xt.layers.test(et.layers)&&Di(Xt,Z,et,Yt,se,ce)}}function Di(C,Z,et,nt,J,Tt){C.onBeforeRender(M,Z,et,nt,J,Tt),C.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(M,Z,et,nt,C,Tt),J.transparent===!0&&J.side===ln&&J.forceSinglePass===!1?(J.side=dn,J.needsUpdate=!0,M.renderBufferDirect(et,Z,nt,J,C,Tt),J.side=Yi,J.needsUpdate=!0,M.renderBufferDirect(et,Z,nt,J,C,Tt),J.side=ln):M.renderBufferDirect(et,Z,nt,J,C,Tt),C.onAfterRender(M,Z,et,nt,J,Tt)}function ji(C,Z,et){Z.isScene!==!0&&(Z=le);let nt=ct.get(C),J=p.state.lights,Tt=p.state.shadowsArray,Ct=J.state.version,Xt=Pt.getParameters(C,J.state,Tt,Z,et),Yt=Pt.getProgramCacheKey(Xt),se=nt.programs;nt.environment=C.isMeshStandardMaterial?Z.environment:null,nt.fog=Z.fog,nt.envMap=(C.isMeshStandardMaterial?k:E).get(C.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,se===void 0&&(C.addEventListener("dispose",oe),se=new Map,nt.programs=se);let ce=se.get(Yt);if(ce!==void 0){if(nt.currentProgram===ce&&nt.lightsStateVersion===Ct)return Qi(C,Xt),ce}else Xt.uniforms=Pt.getUniforms(C),C.onBeforeCompile(Xt,M),ce=Pt.acquireProgram(Xt,Yt),se.set(Yt,ce),nt.uniforms=Xt.uniforms;let Rt=nt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Rt.clippingPlanes=_t.uniform),Qi(C,Xt),nt.needsLights=Cs(C),nt.lightsStateVersion=Ct,nt.needsLights&&(Rt.ambientLightColor.value=J.state.ambient,Rt.lightProbe.value=J.state.probe,Rt.directionalLights.value=J.state.directional,Rt.directionalLightShadows.value=J.state.directionalShadow,Rt.spotLights.value=J.state.spot,Rt.spotLightShadows.value=J.state.spotShadow,Rt.rectAreaLights.value=J.state.rectArea,Rt.ltc_1.value=J.state.rectAreaLTC1,Rt.ltc_2.value=J.state.rectAreaLTC2,Rt.pointLights.value=J.state.point,Rt.pointLightShadows.value=J.state.pointShadow,Rt.hemisphereLights.value=J.state.hemi,Rt.directionalShadowMap.value=J.state.directionalShadowMap,Rt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Rt.spotShadowMap.value=J.state.spotShadowMap,Rt.spotLightMatrix.value=J.state.spotLightMatrix,Rt.spotLightMap.value=J.state.spotLightMap,Rt.pointShadowMap.value=J.state.pointShadowMap,Rt.pointShadowMatrix.value=J.state.pointShadowMatrix),nt.currentProgram=ce,nt.uniformsList=null,ce}function Rs(C){if(C.uniformsList===null){let Z=C.currentProgram.getUniforms();C.uniformsList=er.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function Qi(C,Z){let et=ct.get(C);et.outputColorSpace=Z.outputColorSpace,et.batching=Z.batching,et.batchingColor=Z.batchingColor,et.instancing=Z.instancing,et.instancingColor=Z.instancingColor,et.instancingMorph=Z.instancingMorph,et.skinning=Z.skinning,et.morphTargets=Z.morphTargets,et.morphNormals=Z.morphNormals,et.morphColors=Z.morphColors,et.morphTargetsCount=Z.morphTargetsCount,et.numClippingPlanes=Z.numClippingPlanes,et.numIntersection=Z.numClipIntersection,et.vertexAlphas=Z.vertexAlphas,et.vertexTangents=Z.vertexTangents,et.toneMapping=Z.toneMapping}function vo(C,Z,et,nt,J){Z.isScene!==!0&&(Z=le),R.resetTextureUnits();let Tt=Z.fog,Ct=nt.isMeshStandardMaterial?Z.environment:null,Xt=F===null?M.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ur,Yt=(nt.isMeshStandardMaterial?k:E).get(nt.envMap||Ct),se=nt.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,ce=!!et.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Rt=!!et.morphAttributes.position,de=!!et.morphAttributes.normal,Ae=!!et.morphAttributes.color,De=Xi;nt.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(De=M.toneMapping);let cn=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,pe=cn!==void 0?cn.length:0,Zt=ct.get(nt),Fn=p.state.lights;if(bt===!0&&(Ft===!0||C!==S)){let vn=C===S&&nt.id===A;_t.setState(nt,C,vn)}let xe=!1;nt.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Fn.state.version||Zt.outputColorSpace!==Xt||J.isBatchedMesh&&Zt.batching===!1||!J.isBatchedMesh&&Zt.batching===!0||J.isBatchedMesh&&Zt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Zt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Zt.instancing===!1||!J.isInstancedMesh&&Zt.instancing===!0||J.isSkinnedMesh&&Zt.skinning===!1||!J.isSkinnedMesh&&Zt.skinning===!0||J.isInstancedMesh&&Zt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Zt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Zt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Zt.instancingMorph===!1&&J.morphTexture!==null||Zt.envMap!==Yt||nt.fog===!0&&Zt.fog!==Tt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==_t.numPlanes||Zt.numIntersection!==_t.numIntersection)||Zt.vertexAlphas!==se||Zt.vertexTangents!==ce||Zt.morphTargets!==Rt||Zt.morphNormals!==de||Zt.morphColors!==Ae||Zt.toneMapping!==De||Zt.morphTargetsCount!==pe)&&(xe=!0):(xe=!0,Zt.__version=nt.version);let We=Zt.currentProgram;xe===!0&&(We=ji(nt,Z,J));let Ui=!1,yn=!1,di=!1,Se=We.getUniforms(),zn=Zt.uniforms;if(j.useProgram(We.program)&&(Ui=!0,yn=!0,di=!0),nt.id!==A&&(A=nt.id,yn=!0),Ui||S!==C){j.buffers.depth.getReversed()?(wt.copy(C.projectionMatrix),_p(wt),yp(wt),Se.setValue(N,"projectionMatrix",wt)):Se.setValue(N,"projectionMatrix",C.projectionMatrix),Se.setValue(N,"viewMatrix",C.matrixWorldInverse);let ii=Se.map.cameraPosition;ii!==void 0&&ii.setValue(N,Qt.setFromMatrixPosition(C.matrixWorld)),Vt.logarithmicDepthBuffer&&Se.setValue(N,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Se.setValue(N,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,yn=!0,di=!0)}if(J.isSkinnedMesh){Se.setOptional(N,J,"bindMatrix"),Se.setOptional(N,J,"bindMatrixInverse");let vn=J.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Se.setValue(N,"boneTexture",vn.boneTexture,R))}J.isBatchedMesh&&(Se.setOptional(N,J,"batchingTexture"),Se.setValue(N,"batchingTexture",J._matricesTexture,R),Se.setOptional(N,J,"batchingIdTexture"),Se.setValue(N,"batchingIdTexture",J._indirectTexture,R),Se.setOptional(N,J,"batchingColorTexture"),J._colorsTexture!==null&&Se.setValue(N,"batchingColorTexture",J._colorsTexture,R));let Ni=et.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&Jt.update(J,et,We),(yn||Zt.receiveShadow!==J.receiveShadow)&&(Zt.receiveShadow=J.receiveShadow,Se.setValue(N,"receiveShadow",J.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(zn.envMap.value=Yt,zn.flipEnvMap.value=Yt.isCubeTexture&&Yt.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&Z.environment!==null&&(zn.envMapIntensity.value=Z.environmentIntensity),yn&&(Se.setValue(N,"toneMappingExposure",M.toneMappingExposure),Zt.needsLights&&Mo(zn,di),Tt&&nt.fog===!0&&at.refreshFogUniforms(zn,Tt),at.refreshMaterialUniforms(zn,nt,tt,ut,p.state.transmissionRenderTarget[C.id]),er.upload(N,Rs(Zt),zn,R)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(er.upload(N,Rs(Zt),zn,R),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Se.setValue(N,"center",J.center),Se.setValue(N,"modelViewMatrix",J.modelViewMatrix),Se.setValue(N,"normalMatrix",J.normalMatrix),Se.setValue(N,"modelMatrix",J.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){let vn=nt.uniformsGroups;for(let ii=0,Wn=vn.length;ii<Wn;ii++){let Eo=vn[ii];W.update(Eo,We),W.bind(Eo,We)}}return We}function Mo(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function Cs(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(C,Z,et){ct.get(C.texture).__webglTexture=Z,ct.get(C.depthTexture).__webglTexture=et;let nt=ct.get(C);nt.__hasExternalTextures=!0,nt.__autoAllocateDepthBuffer=et===void 0,nt.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,Z){let et=ct.get(C);et.__webglFramebuffer=Z,et.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(C,Z=0,et=0){F=C,P=Z,D=et;let nt=!0,J=null,Tt=!1,Ct=!1;if(C){let Yt=ct.get(C);if(Yt.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(N.FRAMEBUFFER,null),nt=!1;else if(Yt.__webglFramebuffer===void 0)R.setupRenderTarget(C);else if(Yt.__hasExternalTextures)R.rebindTextures(C,ct.get(C.texture).__webglTexture,ct.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Rt=C.depthTexture;if(Yt.__boundDepthTexture!==Rt){if(Rt!==null&&ct.has(Rt)&&(C.width!==Rt.image.width||C.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(C)}}let se=C.texture;(se.isData3DTexture||se.isDataArrayTexture||se.isCompressedArrayTexture)&&(Ct=!0);let ce=ct.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ce[Z])?J=ce[Z][et]:J=ce[Z],Tt=!0):C.samples>0&&R.useMultisampledRTT(C)===!1?J=ct.get(C).__webglMultisampledFramebuffer:Array.isArray(ce)?J=ce[et]:J=ce,z.copy(C.viewport),Q.copy(C.scissor),O=C.scissorTest}else z.copy(Nt).multiplyScalar(tt).floor(),Q.copy(ie).multiplyScalar(tt).floor(),O=me;if(j.bindFramebuffer(N.FRAMEBUFFER,J)&&nt&&j.drawBuffers(C,J),j.viewport(z),j.scissor(Q),j.setScissorTest(O),Tt){let Yt=ct.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Yt.__webglTexture,et)}else if(Ct){let Yt=ct.get(C.texture),se=Z||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Yt.__webglTexture,et||0,se)}A=-1},this.readRenderTargetPixels=function(C,Z,et,nt,J,Tt,Ct){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=ct.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ct!==void 0&&(Xt=Xt[Ct]),Xt){j.bindFramebuffer(N.FRAMEBUFFER,Xt);try{let Yt=C.texture,se=Yt.format,ce=Yt.type;if(!Vt.textureFormatReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-nt&&et>=0&&et<=C.height-J&&N.readPixels(Z,et,nt,J,ae.convert(se),ae.convert(ce),Tt)}finally{let Yt=F!==null?ct.get(F).__webglFramebuffer:null;j.bindFramebuffer(N.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(C,Z,et,nt,J,Tt,Ct){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=ct.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ct!==void 0&&(Xt=Xt[Ct]),Xt){let Yt=C.texture,se=Yt.format,ce=Yt.type;if(!Vt.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=C.width-nt&&et>=0&&et<=C.height-J){j.bindFramebuffer(N.FRAMEBUFFER,Xt);let Rt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Rt),N.bufferData(N.PIXEL_PACK_BUFFER,Tt.byteLength,N.STREAM_READ),N.readPixels(Z,et,nt,J,ae.convert(se),ae.convert(ce),0);let de=F!==null?ct.get(F).__webglFramebuffer:null;j.bindFramebuffer(N.FRAMEBUFFER,de);let Ae=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await xp(N,Ae,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Rt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Tt),N.deleteBuffer(Rt),N.deleteSync(Ae),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,Z=null,et=0){C.isTexture!==!0&&(Nr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,C=arguments[1]);let nt=Math.pow(2,-et),J=Math.floor(C.image.width*nt),Tt=Math.floor(C.image.height*nt),Ct=Z!==null?Z.x:0,Xt=Z!==null?Z.y:0;R.setTexture2D(C,0),N.copyTexSubImage2D(N.TEXTURE_2D,et,0,0,Ct,Xt,J,Tt),j.unbindTexture()},this.copyTextureToTexture=function(C,Z,et=null,nt=null,J=0){C.isTexture!==!0&&(Nr("WebGLRenderer: copyTextureToTexture function signature has changed."),nt=arguments[0]||null,C=arguments[1],Z=arguments[2],J=arguments[3]||0,et=null);let Tt,Ct,Xt,Yt,se,ce,Rt,de,Ae,De=C.isCompressedTexture?C.mipmaps[J]:C.image;et!==null?(Tt=et.max.x-et.min.x,Ct=et.max.y-et.min.y,Xt=et.isBox3?et.max.z-et.min.z:1,Yt=et.min.x,se=et.min.y,ce=et.isBox3?et.min.z:0):(Tt=De.width,Ct=De.height,Xt=De.depth||1,Yt=0,se=0,ce=0),nt!==null?(Rt=nt.x,de=nt.y,Ae=nt.z):(Rt=0,de=0,Ae=0);let cn=ae.convert(Z.format),pe=ae.convert(Z.type),Zt;Z.isData3DTexture?(R.setTexture3D(Z,0),Zt=N.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(R.setTexture2DArray(Z,0),Zt=N.TEXTURE_2D_ARRAY):(R.setTexture2D(Z,0),Zt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,Z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,Z.unpackAlignment);let Fn=N.getParameter(N.UNPACK_ROW_LENGTH),xe=N.getParameter(N.UNPACK_IMAGE_HEIGHT),We=N.getParameter(N.UNPACK_SKIP_PIXELS),Ui=N.getParameter(N.UNPACK_SKIP_ROWS),yn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,De.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,De.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Yt),N.pixelStorei(N.UNPACK_SKIP_ROWS,se),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ce);let di=C.isDataArrayTexture||C.isData3DTexture,Se=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let zn=ct.get(C),Ni=ct.get(Z),vn=ct.get(zn.__renderTarget),ii=ct.get(Ni.__renderTarget);j.bindFramebuffer(N.READ_FRAMEBUFFER,vn.__webglFramebuffer),j.bindFramebuffer(N.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let Wn=0;Wn<Xt;Wn++)di&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ct.get(C).__webglTexture,J,ce+Wn),C.isDepthTexture?(Se&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ct.get(Z).__webglTexture,J,Ae+Wn),N.blitFramebuffer(Yt,se,Tt,Ct,Rt,de,Tt,Ct,N.DEPTH_BUFFER_BIT,N.NEAREST)):Se?N.copyTexSubImage3D(Zt,J,Rt,de,Ae+Wn,Yt,se,Tt,Ct):N.copyTexSubImage2D(Zt,J,Rt,de,Ae+Wn,Yt,se,Tt,Ct);j.bindFramebuffer(N.READ_FRAMEBUFFER,null),j.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Se?C.isDataTexture||C.isData3DTexture?N.texSubImage3D(Zt,J,Rt,de,Ae,Tt,Ct,Xt,cn,pe,De.data):Z.isCompressedArrayTexture?N.compressedTexSubImage3D(Zt,J,Rt,de,Ae,Tt,Ct,Xt,cn,De.data):N.texSubImage3D(Zt,J,Rt,de,Ae,Tt,Ct,Xt,cn,pe,De):C.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,J,Rt,de,Tt,Ct,cn,pe,De.data):C.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,J,Rt,de,De.width,De.height,cn,De.data):N.texSubImage2D(N.TEXTURE_2D,J,Rt,de,Tt,Ct,cn,pe,De);N.pixelStorei(N.UNPACK_ROW_LENGTH,Fn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,xe),N.pixelStorei(N.UNPACK_SKIP_PIXELS,We),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ui),N.pixelStorei(N.UNPACK_SKIP_IMAGES,yn),J===0&&Z.generateMipmaps&&N.generateMipmap(Zt),j.unbindTexture()},this.copyTextureToTexture3D=function(C,Z,et=null,nt=null,J=0){return C.isTexture!==!0&&(Nr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,nt=arguments[1]||null,C=arguments[2],Z=arguments[3],J=arguments[4]||0),Nr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,Z,et,nt,J)},this.initRenderTarget=function(C){ct.get(C).__webglFramebuffer===void 0&&R.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),j.unbindTexture()},this.resetState=function(){P=0,D=0,F=null,j.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Me._getDrawingBufferColorSpace(t),e.unpackColorSpace=Me._getUnpackColorSpace()}};var ya=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ne(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Kr=class extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},va=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=gl,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Mn=new L,$r=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.applyMatrix4(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.applyNormalMatrix(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.transformDirection(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Kn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Kn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Kn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Kn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array),r=we(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new hn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},qi=class extends Ai{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ys,Ir=new L,qs=new L,Zs=new L,Js=new xt,Lr=new xt,Cf=new Oe,Zo=new L,Dr=new L,Jo=new L,Wu=new xt,wc=new xt,Xu=new xt,ps=class extends Ve{constructor(t=new qi){if(super(),this.isSprite=!0,this.type="Sprite",Ys===void 0){Ys=new ze;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new va(e,5);Ys.setIndex([0,1,2,0,2,3]),Ys.setAttribute("position",new $r(n,3,0,!1)),Ys.setAttribute("uv",new $r(n,2,3,!1))}this.geometry=Ys,this.material=t,this.center=new xt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qs.setFromMatrixScale(this.matrixWorld),Cf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Zs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qs.multiplyScalar(-Zs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Ko(Zo.set(-.5,-.5,0),Zs,o,qs,s,r),Ko(Dr.set(.5,-.5,0),Zs,o,qs,s,r),Ko(Jo.set(.5,.5,0),Zs,o,qs,s,r),Wu.set(0,0),wc.set(1,0),Xu.set(1,1);let a=t.ray.intersectTriangle(Zo,Dr,Jo,!1,Ir);if(a===null&&(Ko(Dr.set(-.5,.5,0),Zs,o,qs,s,r),wc.set(0,1),a=t.ray.intersectTriangle(Zo,Jo,Dr,!1,Ir),a===null))return;let c=t.ray.origin.distanceTo(Ir);c<t.near||c>t.far||e.push({distance:c,point:Ir.clone(),uv:Gi.getInterpolation(Ir,Zo,Dr,Jo,Wu,wc,Xu,new xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ko(i,t,e,n,s,r){Js.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Lr.x=r*Js.x-s*Js.y,Lr.y=s*Js.x+r*Js.y):Lr.copy(Js),i.copy(t),i.x+=Lr.x,i.y+=Lr.y,i.applyMatrix4(Cf)}var Zi=class extends Ai{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Yu=new Oe,Dl=new ds,$o=new ar,jo=new L,ms=class extends Ve{constructor(t=new ze,e=new Zi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(s),$o.radius+=r,t.ray.intersectsSphere($o)===!1)return;Yu.copy(s).invert(),Dl.copy(t.ray).applyMatrix4(Yu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=u,_=d;g<_;g++){let x=l.getX(g);jo.fromBufferAttribute(f,x),qu(jo,x,c,s,t,e,this)}}else{let u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=u,_=d;g<_;g++)jo.fromBufferAttribute(f,g),qu(jo,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function qu(i,t,e,n,s,r,o){let a=Dl.distanceSqToPoint(i);if(a<e){let c=new L;Dl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var rn=class extends pn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new xt:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,s=[],r=[],o=[],a=new L,c=new Oe;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(nn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(nn(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},jr=class extends kn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new xt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,d=l-this.aY;c=u*h-d*f+this.aX,l=u*f+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ul=class extends jr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function fh(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,f){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+f)+(c-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Qo=new L,Tc=new fh,Ac=new fh,Rc=new fh,Qr=class extends kn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Qo.subVectors(s[0],s[1]).add(s[0]),l=Qo);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Qo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Qo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),x<1e-4&&(x=_),Tc.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,g,_,x),Ac.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,g,_,x),Rc.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,g,_,x)}else this.curveType==="catmullrom"&&(Tc.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),Ac.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),Rc.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return n.set(Tc.calc(c),Ac.calc(c),Rc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Zu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function d_(i,t){let e=1-i;return e*e*t}function p_(i,t){return 2*(1-i)*i*t}function m_(i,t){return i*i*t}function Hr(i,t,e,n){return d_(i,t)+p_(i,e)+m_(i,n)}function g_(i,t){let e=1-i;return e*e*e*t}function x_(i,t){let e=1-i;return 3*e*e*i*t}function __(i,t){return 3*(1-i)*i*i*t}function y_(i,t){return i*i*i*t}function kr(i,t,e,n,s){return g_(i,t)+x_(i,e)+__(i,n)+y_(i,s)}var Ma=class extends kn{constructor(t=new xt,e=new xt,n=new xt,s=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new xt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(kr(t,s.x,r.x,o.x,a.x),kr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Nl=class extends kn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(kr(t,s.x,r.x,o.x,a.x),kr(t,s.y,r.y,o.y,a.y),kr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ea=class extends kn{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ol=class extends kn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ba=class extends kn{constructor(t=new xt,e=new xt,n=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new xt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Hr(t,s.x,r.x,o.x),Hr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fl=class extends kn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Hr(t,s.x,r.x,o.x),Hr(t,s.y,r.y,o.y),Hr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sa=class extends kn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Zu(a,c.x,l.x,h.x,f.x),Zu(a,c.y,l.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new xt().fromArray(s))}return this}},zl=Object.freeze({__proto__:null,ArcCurve:Ul,CatmullRomCurve3:Qr,CubicBezierCurve:Ma,CubicBezierCurve3:Nl,EllipseCurve:jr,LineCurve:Ea,LineCurve3:Ol,QuadraticBezierCurve:ba,QuadraticBezierCurve3:Fl,SplineCurve:Sa}),Bl=class extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new zl[s.type]().fromJSON(s))}return this}},wa=class extends Bl{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ea(this.currentPoint.clone(),new xt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ba(this.currentPoint.clone(),new xt(t,e),new xt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Ma(this.currentPoint.clone(),new xt(t,e),new xt(n,s),new xt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Sa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new jr(t,e,n,s,r,o,a,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Ta=class i extends ze{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new L,h=new xt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let d=n+f/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,c.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("normal",new ue(a,3)),this.setAttribute("uv",new ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Pe=class i extends ze{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],g=0,_=[],x=n/2,p=0;T(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ue(f,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(d,2));function T(){let M=new L,B=new L,P=0,D=(e-t)/n;for(let F=0;F<=r;F++){let A=[],S=F/r,z=S*(e-t)+t;for(let Q=0;Q<=s;Q++){let O=Q/s,V=O*c+a,q=Math.sin(V),X=Math.cos(V);B.x=z*q,B.y=-S*n+x,B.z=z*X,f.push(B.x,B.y,B.z),M.set(q,D,X).normalize(),u.push(M.x,M.y,M.z),d.push(O,1-S),A.push(g++)}_.push(A)}for(let F=0;F<s;F++)for(let A=0;A<r;A++){let S=_[A][F],z=_[A+1][F],Q=_[A+1][F+1],O=_[A][F+1];(t>0||A!==0)&&(h.push(S,z,O),P+=3),(e>0||A!==r-1)&&(h.push(z,Q,O),P+=3)}l.addGroup(p,P,0),p+=P}function b(M){let B=g,P=new xt,D=new L,F=0,A=M===!0?t:e,S=M===!0?1:-1;for(let Q=1;Q<=s;Q++)f.push(0,x*S,0),u.push(0,S,0),d.push(.5,.5),g++;let z=g;for(let Q=0;Q<=s;Q++){let V=Q/s*c+a,q=Math.cos(V),X=Math.sin(V);D.x=A*X,D.y=x*S,D.z=A*q,f.push(D.x,D.y,D.z),u.push(0,S,0),P.x=q*.5+.5,P.y=X*.5*S+.5,d.push(P.x,P.y),g++}for(let Q=0;Q<s;Q++){let O=B+Q,V=z+Q;M===!0?h.push(V,V+1,O):h.push(V+1,V,O),F+=3}l.addGroup(p,F,M===!0?1:2),p+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},to=class i extends Pe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Hl=class i extends ze{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ue(r,3)),this.setAttribute("normal",new ue(r.slice(),3)),this.setAttribute("uv",new ue(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(T){let b=new L,M=new L,B=new L;for(let P=0;P<e.length;P+=3)d(e[P+0],b),d(e[P+1],M),d(e[P+2],B),c(b,M,B,T)}function c(T,b,M,B){let P=B+1,D=[];for(let F=0;F<=P;F++){D[F]=[];let A=T.clone().lerp(M,F/P),S=b.clone().lerp(M,F/P),z=P-F;for(let Q=0;Q<=z;Q++)Q===0&&F===P?D[F][Q]=A:D[F][Q]=A.clone().lerp(S,Q/z)}for(let F=0;F<P;F++)for(let A=0;A<2*(P-F)-1;A++){let S=Math.floor(A/2);A%2===0?(u(D[F][S+1]),u(D[F+1][S]),u(D[F][S])):(u(D[F][S+1]),u(D[F+1][S+1]),u(D[F+1][S]))}}function l(T){let b=new L;for(let M=0;M<r.length;M+=3)b.x=r[M+0],b.y=r[M+1],b.z=r[M+2],b.normalize().multiplyScalar(T),r[M+0]=b.x,r[M+1]=b.y,r[M+2]=b.z}function h(){let T=new L;for(let b=0;b<r.length;b+=3){T.x=r[b+0],T.y=r[b+1],T.z=r[b+2];let M=x(T)/2/Math.PI+.5,B=p(T)/Math.PI+.5;o.push(M,1-B)}g(),f()}function f(){for(let T=0;T<o.length;T+=6){let b=o[T+0],M=o[T+2],B=o[T+4],P=Math.max(b,M,B),D=Math.min(b,M,B);P>.9&&D<.1&&(b<.2&&(o[T+0]+=1),M<.2&&(o[T+2]+=1),B<.2&&(o[T+4]+=1))}}function u(T){r.push(T.x,T.y,T.z)}function d(T,b){let M=T*3;b.x=t[M+0],b.y=t[M+1],b.z=t[M+2]}function g(){let T=new L,b=new L,M=new L,B=new L,P=new xt,D=new xt,F=new xt;for(let A=0,S=0;A<r.length;A+=9,S+=6){T.set(r[A+0],r[A+1],r[A+2]),b.set(r[A+3],r[A+4],r[A+5]),M.set(r[A+6],r[A+7],r[A+8]),P.set(o[S+0],o[S+1]),D.set(o[S+2],o[S+3]),F.set(o[S+4],o[S+5]),B.copy(T).add(b).add(M).divideScalar(3);let z=x(B);_(P,S+0,T,z),_(D,S+2,b,z),_(F,S+4,M,z)}}function _(T,b,M,B){B<0&&T.x===1&&(o[b]=T.x-1),M.x===0&&M.z===0&&(o[b]=B/2/Math.PI+.5)}function x(T){return Math.atan2(T.z,-T.x)}function p(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var eo=class extends wa{constructor(t){super(t),this.uuid=ai(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new wa().fromJSON(s))}return this}},v_={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Pf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,f,u,d;if(n&&(r=w_(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)f=i[g],u=i[g+1],f<a&&(a=f),u<c&&(c=u),f>l&&(l=f),u>h&&(h=u);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return no(r,o,e,a,c,d,0),o}};function Pf(i,t,e,n,s){let r,o;if(s===O_(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Ju(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Ju(r,i[r],i[r+1],o);return o&&Oa(o,o.next)&&(so(o),o=o.next),o}function gs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Oa(e,e.next)||ke(e.prev,e,e.next)===0)){if(so(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function no(i,t,e,n,s,r,o){if(!i)return;!o&&r&&P_(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?E_(i,n,s,r):M_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),so(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=b_(gs(i),t,e),no(i,t,e,n,s,r,2)):o===2&&S_(i,t,e,n,s,r):no(gs(i),t,e,n,s,r,1);break}}}function M_(i){let t=i.prev,e=i,n=i.next;if(ke(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,f=a<c?a<l?a:l:c<l?c:l,u=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&$s(s,a,r,c,o,l,g.x,g.y)&&ke(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function E_(i,t,e,n){let s=i.prev,r=i,o=i.next;if(ke(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,f=r.y,u=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<f?h<u?h:u:f<u?f:u,_=a>c?a>l?a:l:c>l?c:l,x=h>f?h>u?h:u:f>u?f:u,p=kl(d,g,t,e,n),T=kl(_,x,t,e,n),b=i.prevZ,M=i.nextZ;for(;b&&b.z>=p&&M&&M.z<=T;){if(b.x>=d&&b.x<=_&&b.y>=g&&b.y<=x&&b!==s&&b!==o&&$s(a,h,c,f,l,u,b.x,b.y)&&ke(b.prev,b,b.next)>=0||(b=b.prevZ,M.x>=d&&M.x<=_&&M.y>=g&&M.y<=x&&M!==s&&M!==o&&$s(a,h,c,f,l,u,M.x,M.y)&&ke(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;b&&b.z>=p;){if(b.x>=d&&b.x<=_&&b.y>=g&&b.y<=x&&b!==s&&b!==o&&$s(a,h,c,f,l,u,b.x,b.y)&&ke(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;M&&M.z<=T;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=x&&M!==s&&M!==o&&$s(a,h,c,f,l,u,M.x,M.y)&&ke(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function b_(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Oa(s,r)&&If(s,n,n.next,r)&&io(s,r)&&io(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),so(n),so(n.next),n=i=r),n=n.next}while(n!==i);return gs(n)}function S_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&D_(o,a)){let c=Lf(o,a);o=gs(o,o.next),c=gs(c,c.next),no(o,t,e,n,s,r,0),no(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function w_(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Pf(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(L_(l));for(s.sort(T_),r=0;r<s.length;r++)e=A_(s[r],e);return e}function T_(i,t){return i.x-t.x}function A_(i,t){let e=R_(i,t);if(!e)return t;let n=Lf(e,i);return gs(n,n.next),gs(e,e.next)}function R_(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,f;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&$s(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(r-e.x),io(e,i)&&(f<h||f===h&&(e.x>s.x||e.x===s.x&&C_(s,e)))&&(s=e,h=f)),e=e.next;while(e!==a);return s}function C_(i,t){return ke(i.prev,i,t.prev)<0&&ke(t.next,i,i.next)<0}function P_(i,t,e,n){let s=i;do s.z===0&&(s.z=kl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,I_(s)}function I_(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function kl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function L_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function $s(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function D_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!U_(i,t)&&(io(i,t)&&io(t,i)&&N_(i,t)&&(ke(i.prev,i,t.prev)||ke(i,t.prev,t))||Oa(i,t)&&ke(i.prev,i,i.next)>0&&ke(t.prev,t,t.next)>0)}function ke(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Oa(i,t){return i.x===t.x&&i.y===t.y}function If(i,t,e,n){let s=ea(ke(i,t,e)),r=ea(ke(i,t,n)),o=ea(ke(e,n,i)),a=ea(ke(e,n,t));return!!(s!==r&&o!==a||s===0&&ta(i,e,t)||r===0&&ta(i,n,t)||o===0&&ta(e,i,n)||a===0&&ta(e,t,n))}function ta(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ea(i){return i>0?1:i<0?-1:0}function U_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&If(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function io(i,t){return ke(i.prev,i,i.next)<0?ke(i,t,i.next)>=0&&ke(i,i.prev,t)>=0:ke(i,t,i.prev)<0||ke(i,i.next,t)<0}function N_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Lf(i,t){let e=new Vl(i.i,i.x,i.y),n=new Vl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ju(i,t,e,n){let s=new Vl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function so(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Vl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function O_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Vr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Ku(t),$u(n,t);let o=t.length;e.forEach(Ku);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,$u(n,e[c]);let a=v_.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Ku(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function $u(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Aa=class i extends ze{constructor(t=new eo([new xt(.5,.5),new xt(-.5,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new ue(s,3)),this.setAttribute("uv",new ue(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:F_,b,M=!1,B,P,D,F;p&&(b=p.getSpacedPoints(h),M=!0,u=!1,B=p.computeFrenetFrames(h,!1),P=new L,D=new L,F=new L),u||(x=0,d=0,g=0,_=0);let A=a.extractPoints(l),S=A.shape,z=A.holes;if(!Vr.isClockWise(S)){S=S.reverse();for(let ft=0,Et=z.length;ft<Et;ft++){let N=z[ft];Vr.isClockWise(N)&&(z[ft]=N.reverse())}}let O=Vr.triangulateShape(S,z),V=S;for(let ft=0,Et=z.length;ft<Et;ft++){let N=z[ft];S=S.concat(N)}function q(ft,Et,N){return Et||console.error("THREE.ExtrudeGeometry: vec does not exist"),ft.clone().addScaledVector(Et,N)}let X=S.length,ut=O.length;function tt(ft,Et,N){let kt,vt,Vt,j=ft.x-Et.x,pt=ft.y-Et.y,ct=N.x-ft.x,R=N.y-ft.y,E=j*j+pt*pt,k=j*R-pt*ct;if(Math.abs(k)>Number.EPSILON){let K=Math.sqrt(E),st=Math.sqrt(ct*ct+R*R),$=Et.x-pt/K,Pt=Et.y+j/K,at=N.x-R/st,it=N.y+ct/st,At=((at-$)*R-(it-Pt)*ct)/(j*R-pt*ct);kt=$+j*At-ft.x,vt=Pt+pt*At-ft.y;let _t=kt*kt+vt*vt;if(_t<=2)return new xt(kt,vt);Vt=Math.sqrt(_t/2)}else{let K=!1;j>Number.EPSILON?ct>Number.EPSILON&&(K=!0):j<-Number.EPSILON?ct<-Number.EPSILON&&(K=!0):Math.sign(pt)===Math.sign(R)&&(K=!0),K?(kt=-pt,vt=j,Vt=Math.sqrt(E)):(kt=j,vt=pt,Vt=Math.sqrt(E/2))}return new xt(kt/Vt,vt/Vt)}let Mt=[];for(let ft=0,Et=V.length,N=Et-1,kt=ft+1;ft<Et;ft++,N++,kt++)N===Et&&(N=0),kt===Et&&(kt=0),Mt[ft]=tt(V[ft],V[N],V[kt]);let yt=[],Nt,ie=Mt.concat();for(let ft=0,Et=z.length;ft<Et;ft++){let N=z[ft];Nt=[];for(let kt=0,vt=N.length,Vt=vt-1,j=kt+1;kt<vt;kt++,Vt++,j++)Vt===vt&&(Vt=0),j===vt&&(j=0),Nt[kt]=tt(N[kt],N[Vt],N[j]);yt.push(Nt),ie=ie.concat(Nt)}for(let ft=0;ft<x;ft++){let Et=ft/x,N=d*Math.cos(Et*Math.PI/2),kt=g*Math.sin(Et*Math.PI/2)+_;for(let vt=0,Vt=V.length;vt<Vt;vt++){let j=q(V[vt],Mt[vt],kt);wt(j.x,j.y,-N)}for(let vt=0,Vt=z.length;vt<Vt;vt++){let j=z[vt];Nt=yt[vt];for(let pt=0,ct=j.length;pt<ct;pt++){let R=q(j[pt],Nt[pt],kt);wt(R.x,R.y,-N)}}}let me=g+_;for(let ft=0;ft<X;ft++){let Et=u?q(S[ft],ie[ft],me):S[ft];M?(D.copy(B.normals[0]).multiplyScalar(Et.x),P.copy(B.binormals[0]).multiplyScalar(Et.y),F.copy(b[0]).add(D).add(P),wt(F.x,F.y,F.z)):wt(Et.x,Et.y,0)}for(let ft=1;ft<=h;ft++)for(let Et=0;Et<X;Et++){let N=u?q(S[Et],ie[Et],me):S[Et];M?(D.copy(B.normals[ft]).multiplyScalar(N.x),P.copy(B.binormals[ft]).multiplyScalar(N.y),F.copy(b[ft]).add(D).add(P),wt(F.x,F.y,F.z)):wt(N.x,N.y,f/h*ft)}for(let ft=x-1;ft>=0;ft--){let Et=ft/x,N=d*Math.cos(Et*Math.PI/2),kt=g*Math.sin(Et*Math.PI/2)+_;for(let vt=0,Vt=V.length;vt<Vt;vt++){let j=q(V[vt],Mt[vt],kt);wt(j.x,j.y,f+N)}for(let vt=0,Vt=z.length;vt<Vt;vt++){let j=z[vt];Nt=yt[vt];for(let pt=0,ct=j.length;pt<ct;pt++){let R=q(j[pt],Nt[pt],kt);M?wt(R.x,R.y+b[h-1].y,b[h-1].x+N):wt(R.x,R.y,f+N)}}}lt(),bt();function lt(){let ft=s.length/3;if(u){let Et=0,N=X*Et;for(let kt=0;kt<ut;kt++){let vt=O[kt];qt(vt[2]+N,vt[1]+N,vt[0]+N)}Et=h+x*2,N=X*Et;for(let kt=0;kt<ut;kt++){let vt=O[kt];qt(vt[0]+N,vt[1]+N,vt[2]+N)}}else{for(let Et=0;Et<ut;Et++){let N=O[Et];qt(N[2],N[1],N[0])}for(let Et=0;Et<ut;Et++){let N=O[Et];qt(N[0]+X*h,N[1]+X*h,N[2]+X*h)}}n.addGroup(ft,s.length/3-ft,0)}function bt(){let ft=s.length/3,Et=0;Ft(V,Et),Et+=V.length;for(let N=0,kt=z.length;N<kt;N++){let vt=z[N];Ft(vt,Et),Et+=vt.length}n.addGroup(ft,s.length/3-ft,1)}function Ft(ft,Et){let N=ft.length;for(;--N>=0;){let kt=N,vt=N-1;vt<0&&(vt=ft.length-1);for(let Vt=0,j=h+x*2;Vt<j;Vt++){let pt=X*Vt,ct=X*(Vt+1),R=Et+kt+pt,E=Et+vt+pt,k=Et+vt+ct,K=Et+kt+ct;Qt(R,E,k,K)}}}function wt(ft,Et,N){c.push(ft),c.push(Et),c.push(N)}function qt(ft,Et,N){jt(ft),jt(Et),jt(N);let kt=s.length/3,vt=T.generateTopUV(n,s,kt-3,kt-2,kt-1);le(vt[0]),le(vt[1]),le(vt[2])}function Qt(ft,Et,N,kt){jt(ft),jt(Et),jt(kt),jt(Et),jt(N),jt(kt);let vt=s.length/3,Vt=T.generateSideWallUV(n,s,vt-6,vt-3,vt-2,vt-1);le(Vt[0]),le(Vt[1]),le(Vt[3]),le(Vt[1]),le(Vt[2]),le(Vt[3])}function jt(ft){s.push(c[ft*3+0]),s.push(c[ft*3+1]),s.push(c[ft*3+2])}function le(ft){r.push(ft.x),r.push(ft.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return z_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new zl[s.type]().fromJSON(s)),new i(n,t.options)}},F_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new xt(r,o),new xt(a,c),new xt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],d=t[s*3+1],g=t[s*3+2],_=t[r*3],x=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new xt(o,1-c),new xt(l,1-f),new xt(u,1-g),new xt(_,1-p)]:[new xt(a,1-c),new xt(h,1-f),new xt(d,1-g),new xt(x,1-p)]}};function z_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ra=class i extends Hl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var ro=class i extends ze{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],f=t,u=(e-t)/s,d=new L,g=new xt;for(let _=0;_<=s;_++){for(let x=0;x<=n;x++){let p=r+x/n*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}f+=u}for(let _=0;_<s;_++){let x=_*(n+1);for(let p=0;p<n;p++){let T=p+x,b=T,M=T+n+1,B=T+n+2,P=T+1;a.push(b,M,P),a.push(M,B,P)}}this.setIndex(a),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(l,3)),this.setAttribute("uv",new ue(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var on=class i extends ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],f=new L,u=new L,d=[],g=[],_=[],x=[];for(let p=0;p<=n;p++){let T=[],b=p/n,M=0;p===0&&o===0?M=.5/e:p===n&&c===Math.PI&&(M=-.5/e);for(let B=0;B<=e;B++){let P=B/e;f.x=-t*Math.cos(s+P*r)*Math.sin(o+b*a),f.y=t*Math.cos(o+b*a),f.z=t*Math.sin(s+P*r)*Math.sin(o+b*a),g.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),x.push(P+M,1-b),T.push(l++)}h.push(T)}for(let p=0;p<n;p++)for(let T=0;T<e;T++){let b=h[p][T+1],M=h[p][T],B=h[p+1][T],P=h[p+1][T+1];(p!==0||o>0)&&d.push(b,M,P),(p!==n-1||c<Math.PI)&&d.push(M,B,P)}this.setIndex(d),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var xs=class i extends ze{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new L,f=new L,u=new L;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let _=g/s*r,x=d/n*Math.PI*2;f.x=(t+e*Math.cos(x))*Math.cos(_),f.y=(t+e*Math.cos(x))*Math.sin(_),f.z=e*Math.sin(x),a.push(f.x,f.y,f.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(f,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let _=(s+1)*d+g-1,x=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,T=(s+1)*d+g;o.push(_,x,T),o.push(x,p,T)}this.setIndex(o),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var _e=class extends Ai{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_f,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function na(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function B_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var lr=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Gl=class extends lr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zh,endingEnd:Zh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Jh:r=t,a=2*e-n;break;case Kh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Jh:o=t,c=2*n-e;break;case Kh:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),_=g*g,x=_*g,p=-u*x+2*u*_-u*g,T=(1+u)*x+(-1.5-2*u)*_+(-.5+u)*g+1,b=(-1-d)*x+(1.5+d)*_+.5*g,M=d*x-d*_;for(let B=0;B!==a;++B)r[B]=p*o[h+B]+T*o[l+B]+b*o[c+B]+M*o[f+B];return r}},Wl=class extends lr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*f+o[c+u]*h;return r}},Xl=class extends lr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Qn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=na(e,this.TimeBufferType),this.values=na(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:na(t.times,Array),values:na(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Xl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Wl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Gl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ca:e=this.InterpolantFactoryMethodDiscrete;break;case ml:e=this.InterpolantFactoryMethodLinear;break;case ja:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ca;case this.InterpolantFactoryMethodLinear:return ml;case this.InterpolantFactoryMethodSmooth:return ja}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&B_(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ja,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let f=a*n,u=f-n,d=f+n;for(let g=0;g!==n;++g){let _=e[f+g];if(_!==e[u+g]||_!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=ml;var _s=class extends Qn{constructor(t,e,n){super(t,e,n)}};_s.prototype.ValueTypeName="bool";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=ca;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var Yl=class extends Qn{};Yl.prototype.ValueTypeName="color";var ql=class extends Qn{};ql.prototype.ValueTypeName="number";var Zl=class extends lr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)jn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ca=class extends Qn{InterpolantFactoryMethodLinear(t){return new Zl(this.times,this.values,this.getValueSize(),t)}};Ca.prototype.ValueTypeName="quaternion";Ca.prototype.InterpolantFactoryMethodSmooth=void 0;var ys=class extends Qn{constructor(t,e,n){super(t,e,n)}};ys.prototype.ValueTypeName="string";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=ca;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;var Jl=class extends Qn{};Jl.prototype.ValueTypeName="vector";var ju={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Kl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let d=l[f],g=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},H_=new Kl,oo=class{constructor(t){this.manager=t!==void 0?t:H_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};oo.DEFAULT_MATERIAL_NAME="__DEFAULT";var $l=class extends oo{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=ju.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=Yr("img");function c(){h(),ju.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(f){h(),s&&s(f),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var ao=class extends oo{constructor(t){super(t)}load(t,e,n,s){let r=new pn,o=new $l(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},co=class extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},lo=class extends co{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ne(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Cc=new Oe,Qu=new L,tf=new L,Pa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zr,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Qu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qu),tf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(tf),e.updateMatrixWorld(),Cc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Cc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ef=new Oe,Ur=new L,Pc=new L,jl=class extends Pa{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xt(4,2),this._viewportCount=6,this._viewports=[new Ce(2,1,1,1),new Ce(0,1,1,1),new Ce(3,1,1,1),new Ce(1,1,1,1),new Ce(3,0,1,1),new Ce(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ur.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ur),Pc.copy(n.position),Pc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Pc),n.updateMatrixWorld(),s.makeTranslation(-Ur.x,-Ur.y,-Ur.z),ef.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ef)}},ho=class extends co{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new jl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Ql=class extends Pa{constructor(){super(new ga(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},uo=class extends co{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new Ql}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var fo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=nf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function nf(){return performance.now()}var dh="\\[\\]\\.:\\/",k_=new RegExp("["+dh+"]","g"),ph="[^"+dh+"]",V_="[^"+dh.replace("\\.","")+"]",G_=/((?:WC+[\/:])*)/.source.replace("WC",ph),W_=/(WCOD+)?/.source.replace("WCOD",V_),X_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ph),Y_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ph),q_=new RegExp("^"+G_+W_+X_+Y_+"$"),Z_=["material","materials","bones","map"],th=class{constructor(t,e,n){let s=n||He.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},He=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(k_,"")}static parseTrackName(t){let e=q_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Z_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};He.Composite=th;He.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};He.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};He.prototype.GetterByBindingType=[He.prototype._getValue_direct,He.prototype._getValue_array,He.prototype._getValue_arrayElement,He.prototype._getValue_toArray];He.prototype.SetterByBindingTypeAndVersioning=[[He.prototype._setValue_direct,He.prototype._setValue_direct_setNeedsUpdate,He.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[He.prototype._setValue_array,He.prototype._setValue_array_setNeedsUpdate,He.prototype._setValue_array_setMatrixWorldNeedsUpdate],[He.prototype._setValue_arrayElement,He.prototype._setValue_arrayElement_setNeedsUpdate,He.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[He.prototype._setValue_fromArray,He.prototype._setValue_fromArray_setNeedsUpdate,He.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fy=new Float32Array(1);var sf=new Oe,hr=class{constructor(t,e,n=0,s=1/0){this.ray=new ds(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new qr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return sf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sf),this}intersectObject(t,e=!0,n=[]){return eh(t,this,n,e),n.sort(rf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)eh(t[s],this,n,e);return n.sort(rf),n}};function rf(i,t){return i.distance-t.distance}function eh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)eh(r[o],t,e,!0)}}var vs=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(nn(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ia=class extends wi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nh}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nh);var Uf={type:"change"},gh={type:"start"},Of={type:"end"},Fa=new ds,Nf=new Jn,J_=Math.cos(70*vf.DEG2RAD),tn=new L,An=2*Math.PI,Ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},mh=1e-6,za=class extends Ia{constructor(t,e=null){super(t,e),this.state=Ie.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ms.ROTATE,MIDDLE:Ms.DOLLY,RIGHT:Ms.PAN},this.touches={ONE:li.ROTATE,TWO:li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new jn,this._lastTargetPosition=new L,this._quat=new jn().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new vs,this._sphericalDelta=new vs,this._scale=1,this._panOffset=new L,this._rotateStart=new xt,this._rotateEnd=new xt,this._rotateDelta=new xt,this._panStart=new xt,this._panEnd=new xt,this._panDelta=new xt,this._dollyStart=new xt,this._dollyEnd=new xt,this._dollyDelta=new xt,this._dollyDirection=new L,this._mouse=new xt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$_.bind(this),this._onPointerDown=K_.bind(this),this._onPointerUp=j_.bind(this),this._onContextMenu=ry.bind(this),this._onMouseWheel=ey.bind(this),this._onKeyDown=ny.bind(this),this._onTouchStart=iy.bind(this),this._onTouchMove=sy.bind(this),this._onMouseDown=Q_.bind(this),this._onMouseMove=ty.bind(this),this._interceptControlDown=oy.bind(this),this._interceptControlUp=ay.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Uf),this.update(),this.state=Ie.NONE}update(t=null){let e=this.object.position;tn.copy(e).sub(this.target),tn.applyQuaternion(this._quat),this._spherical.setFromVector3(tn),this.autoRotate&&this.state===Ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=An:n>Math.PI&&(n-=An),s<-Math.PI?s+=An:s>Math.PI&&(s-=An),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(tn.setFromSpherical(this._spherical),tn.applyQuaternion(this._quatInverse),e.copy(this.target).add(tn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=tn.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new L(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=tn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Fa.origin.copy(this.object.position),Fa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Fa.direction))<J_?this.object.lookAt(this.target):(Nf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Fa.intersectPlane(Nf,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>mh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>mh||this._lastTargetPosition.distanceToSquared(this.target)>mh?(this.dispatchEvent(Uf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?An/60*this.autoRotateSpeed*t:An/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){tn.setFromMatrixColumn(e,0),tn.multiplyScalar(-t),this._panOffset.add(tn)}_panUp(t,e){this.screenSpacePanning===!0?tn.setFromMatrixColumn(e,1):(tn.setFromMatrixColumn(e,0),tn.crossVectors(this.object.up,tn)),tn.multiplyScalar(t),this._panOffset.add(tn)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;tn.copy(s).sub(this.target);let r=tn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(An*this._rotateDelta.x/e.clientHeight),this._rotateUp(An*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(An*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-An*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(An*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-An*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(An*this._rotateDelta.x/e.clientHeight),this._rotateUp(An*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new xt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function K_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function $_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function j_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Of),this.state=Ie.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Q_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ms.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ie.DOLLY;break;case Ms.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ie.ROTATE}break;case Ms.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ie.PAN}break;default:this.state=Ie.NONE}this.state!==Ie.NONE&&this.dispatchEvent(gh)}function ty(i){switch(this.state){case Ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function ey(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ie.NONE||(i.preventDefault(),this.dispatchEvent(gh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Of))}function ny(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function iy(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case li.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ie.TOUCH_ROTATE;break;case li.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ie.TOUCH_PAN;break;default:this.state=Ie.NONE}break;case 2:switch(this.touches.TWO){case li.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ie.TOUCH_DOLLY_PAN;break;case li.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ie.TOUCH_DOLLY_ROTATE;break;default:this.state=Ie.NONE}break;default:this.state=Ie.NONE}this.state!==Ie.NONE&&this.dispatchEvent(gh)}function sy(i){switch(this._trackPointer(i),this.state){case Ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ie.NONE}}function ry(i){this.enabled!==!1&&i.preventDefault()}function oy(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ay(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ba(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new ze,l=0;for(let h=0;h<i.length;++h){let f=i[h],u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0,f=[];for(let u=0;u<i.length;++u){let d=i[u].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+h);h+=i[u].attributes.position.count}c.setIndex(f)}for(let h in r){let f=Ff(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][u]);let g=Ff(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Ff(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new hn(o,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let f=c/e;for(let u=0,d=h.count;u<d;u++)for(let g=0;g<e;g++){let _=h.getComponent(u,g);a.setComponent(u+f,g,_)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Es=16,bs=8,_h=5;function Bf(i){return()=>(i=i*1664525+1013904223>>>0,i/4294967296)}var cy=i=>"#"+("00000"+i.toString(16)).slice(-6);function Ge(i,t){let e=Math.min(255,Math.max(0,(i>>16&255)*t)),n=Math.min(255,Math.max(0,(i>>8&255)*t)),s=Math.min(255,Math.max(0,(i&255)*t));return"rgb("+(e|0)+","+(n|0)+","+(s|0)+")"}var ee={noise:(i,t)=>(e,n)=>{for(let s=0;s<16;s++)for(let r=0;r<16;r++)e.fillStyle=Ge(i,1-t/2+n()*t),e.fillRect(s,r,1,1)},grassTop:(i,t)=>{ee.noise(11132046,.16)(i,t);for(let e=0;e<14;e++)i.fillStyle=Ge(9423992,.95+t()*.1),i.fillRect(t()*16|0,t()*16|0,1,1)},grassSide:(i,t)=>{ee.dirt(i,t);for(let e=0;e<16;e++){let n=3+(t()*2.2|0);for(let s=0;s<n;s++)i.fillStyle=Ge(11132046,.9+t()*.15),i.fillRect(e,s,1,1)}},dirt:(i,t)=>{ee.noise(12094050,.18)(i,t);for(let e=0;e<10;e++)i.fillStyle=Ge(10121296,1),i.fillRect(t()*16|0,t()*16|0,1,1)},stone:(i,t)=>{ee.noise(11842232,.12)(i,t);for(let e=0;e<6;e++){i.fillStyle=Ge(10263202,1);let n=t()*14|0,s=t()*16|0;i.fillRect(n,s,2+(t()*3|0),1)}},sand:(i,t)=>ee.noise(15983286,.1)(i,t),pathTop:(i,t)=>{ee.noise(15324068,.14)(i,t);for(let e=0;e<12;e++)i.fillStyle=Ge(13810058,1),i.fillRect(t()*16|0,t()*16|0,1,1)},pathSide:(i,t)=>{ee.dirt(i,t),i.fillStyle=Ge(15324068,1),i.fillRect(0,0,16,2)},snowTop:(i,t)=>ee.noise(16514047,.05)(i,t),snowSide:(i,t)=>{ee.stone(i,t);for(let e=0;e<16;e++){let n=3+(t()*3|0);i.fillStyle=Ge(16514047,.97+t()*.03),i.fillRect(e,0,1,n)}},logSide:(i,t)=>{for(let e=0;e<16;e++){let n=e%4===0?8215104:10121298;for(let s=0;s<16;s++)i.fillStyle=Ge(n,.9+t()*.2),i.fillRect(e,s,1,1)}},logTop:(i,t)=>{ee.noise(14267267,.08)(i,t),i.strokeStyle=Ge(11569760,1),i.lineWidth=1,[6,3].forEach(e=>{i.strokeRect(8-e+.5,8-e+.5,e*2-1,e*2-1)}),i.strokeStyle=Ge(9071180,1),i.strokeRect(.5,.5,15,15)},leaves:i=>(t,e)=>{ee.noise(i,.22)(t,e);for(let n=0;n<22;n++)t.fillStyle=Ge(i,.72),t.fillRect(e()*16|0,e()*16|0,1,1);for(let n=0;n<10;n++)t.fillStyle=Ge(i,1.12),t.fillRect(e()*16|0,e()*16|0,1,1)},water:(i,t)=>{ee.noise(9425898,.08)(i,t);for(let e=0;e<7;e++)i.fillStyle="rgba(255,255,255,0.55)",i.fillRect(t()*13|0,t()*16|0,2+(t()*3|0),1)},birch:(i,t)=>{ee.noise(16052454,.06)(i,t);for(let e=0;e<8;e++)i.fillStyle="#5a5050",i.fillRect(t()*14|0,t()*16|0,2+(t()*2|0),1)},cobble:(i,t)=>{ee.noise(11052718,.1)(i,t),i.fillStyle=Ge(8684172,1);for(let e=0;e<16;e+=4){i.fillRect(0,e,16,1);for(let n=e/4%2*3;n<16;n+=6)i.fillRect(n,e,1,4)}},deep:(i,t)=>ee.noise(9341592,.16)(i,t),clay:(i,t)=>{ee.noise(12950138,.12)(i,t);for(let e=3;e<16;e+=5)i.fillStyle=Ge(11765610,1),i.fillRect(0,e,16,1)},gravel:(i,t)=>{for(let e=0;e<16;e++)for(let n=0;n<16;n++)i.fillStyle=Ge([12433068,11051414,13814720][t()*3|0],1),i.fillRect(e,n,1,1)},planks:(i,t)=>{for(let e=0;e<16;e++){let n=e%4===3;for(let s=0;s<16;s++)i.fillStyle=n?"#9a7254":Ge(13936760,.92+t()*.12),i.fillRect(s,e,1,1)}for(let e=0;e<16;e+=4)i.fillStyle="#9a7254",i.fillRect(e*3%16,e,1,3)},mossy:(i,t)=>{ee.cobble(i,t);for(let e=0;e<40;e++)i.fillStyle=Ge(9423992,.9+t()*.2),i.fillRect(t()*16|0,t()*16|0,1,1)},shingle:(i,t)=>{for(let e=0;e<16;e++)for(let n=0;n<16;n++){let s=e>>2,r=e%4===3||(n+s*4)%8===0;i.fillStyle=Ge(16777215,r?.78:.94+t()*.06),i.fillRect(n,e,1,1)}},plaster:(i,t)=>ee.noise(16777215,.07)(i,t),plankGrey:(i,t)=>{for(let e=0;e<16;e++){let n=e%4===3;for(let s=0;s<16;s++)i.fillStyle=Ge(16777215,n?.72:.9+t()*.1),i.fillRect(s,e,1,1)}},glass:(i,t)=>{i.fillStyle="#d8f1fa",i.fillRect(0,0,16,16),i.fillStyle="#ffffff",i.fillRect(3,3,1,4),i.fillRect(4,3,1,2),i.fillRect(10,9,1,3),i.fillStyle="#bcd9e6",i.fillRect(0,0,16,1),i.fillRect(0,15,16,1),i.fillRect(0,0,1,16),i.fillRect(15,0,1,16),i.fillRect(7,0,2,16),i.fillRect(0,7,16,2)},bricks:(i,t)=>{for(let e=0;e<16;e++)for(let n=0;n<16;n++){let s=e%4===3||(n+(e>>2)%2*4)%8===7;i.fillStyle=s?"#e9e2d6":Ge(16777215,.86+t()*.08),i.fillRect(n,e,1,1)}},tuft:(i,t)=>{for(let e=1;e<15;e+=2){let n=5+(t()*7|0);i.fillStyle=Ge(9423992,.85+t()*.25),i.fillRect(e,16-n,1,n)}},flower:i=>(t,e)=>{t.fillStyle="#6faa5e",t.fillRect(7,8,2,8),t.fillRect(5,11,2,1),t.fillRect(9,13,2,1),t.fillStyle=cy(i),t.fillRect(6,4,4,3),t.fillRect(5,5,6,1),t.fillStyle="#fff6b0",t.fillRect(7,5,2,1)},reed:(i,t)=>{i.fillStyle="#7cb86f";for(let e=3;e<14;e+=3)i.fillRect(e,2+(t()*4|0),1,14);i.fillStyle="#a77a52",i.fillRect(6,2,2,4)},lily:(i,t)=>{i.fillStyle="#84c784",i.beginPath(),i.arc(8,8,6.5,.3,Math.PI*2-.3),i.lineTo(8,8),i.fill(),i.fillStyle="#ffb6c1",i.fillRect(9,6,2,2)}},gt={GRASS_TOP:0,GRASS_SIDE:1,DIRT:2,STONE:3,SAND:4,PATH_TOP:5,PATH_SIDE:6,SNOW_TOP:7,SNOW_SIDE:8,LOG:9,LOG_TOP:10,LEAF_G:11,LEAF_M:12,LEAF_L:13,LEAF_P:14,WATER:15,BIRCH:16,COBBLE:17,DEEP:18,CLAY:19,GRAVEL:20,PLANKS:21,MOSSY:22,LEAF_T:23,TUFT:24,FL_PINK:25,FL_WHITE:26,FL_YELLOW:27,FL_BLUE:28,FL_LAV:29,REED:30,LILY:31,SHINGLE:32,PLASTER:33,PLANK_GREY:34,GLASS:35,BRICKS:36},Hf=[ee.grassTop,ee.grassSide,ee.dirt,ee.stone,ee.sand,ee.pathTop,ee.pathSide,ee.snowTop,ee.snowSide,ee.logSide,ee.logTop,ee.leaves(8834168),ee.leaves(8178084),ee.leaves(11196796),ee.leaves(16167880),ee.water,ee.birch,ee.cobble,ee.deep,ee.clay,ee.gravel,ee.planks,ee.mossy,ee.leaves(7320465),ee.tuft,ee.flower(16752575),ee.flower(16777215),ee.flower(16769658),ee.flower(10473471),ee.flower(13809919),ee.reed,ee.lily,ee.shingle,ee.plaster,ee.plankGrey,ee.glass,ee.bricks],Ji=null;function ly(){if(Ji)return Ji;let i=document.createElement("canvas");i.width=Es*bs,i.height=Es*_h;let t=i.getContext("2d");return Hf.forEach((e,n)=>{t.save(),t.translate(n%bs*Es,Math.floor(n/bs)*Es),t.beginPath(),t.rect(0,0,Es,Es),t.clip(),e(t,Bf(101+n*7)),t.restore()}),Ji=new rn(i),Ji.magFilter=Xe,Ji.minFilter=Xe,Ji.generateMipmaps=!1,Ji.colorSpace=Ue,Ji}var xh=new Map;function hi(i){if(xh.has(i))return xh.get(i);let t=document.createElement("canvas");t.width=t.height=Es,Hf[i](t.getContext("2d"),Bf(101+i*7));let e=new rn(t);return e.magFilter=Xe,e.minFilter=Xe,e.generateMipmaps=!1,e.wrapS=e.wrapT=Gr,e.colorSpace=Ue,xh.set(i,e),e}var zf=i=>{let t=i%bs/bs,e=1-(Math.floor(i/bs)+1)/_h,n=8e-4;return[t+n,e+n,t+1/bs-n,e+1/_h-n]},Ot={AIR:0,GRASS:1,DIRT:2,STONE:3,SAND:4,PATH:5,SNOW:6,LOG:7,LEAF_G:8,LEAF_M:9,LEAF_L:10,LEAF_P:11,WATER:12,BIRCH:13,COBBLE:14,DEEP:15,CLAY:16,GRAVEL:17,LEAF_T:18,MOSSY:19,PLANKS:20},Ye=[];Ye[Ot.GRASS]=[gt.GRASS_TOP,gt.GRASS_SIDE,gt.DIRT];Ye[Ot.DIRT]=[gt.DIRT,gt.DIRT,gt.DIRT];Ye[Ot.STONE]=[gt.STONE,gt.STONE,gt.STONE];Ye[Ot.SAND]=[gt.SAND,gt.SAND,gt.SAND];Ye[Ot.PATH]=[gt.PATH_TOP,gt.PATH_SIDE,gt.DIRT];Ye[Ot.SNOW]=[gt.SNOW_TOP,gt.SNOW_SIDE,gt.STONE];Ye[Ot.LOG]=[gt.LOG_TOP,gt.LOG,gt.LOG_TOP];Ye[Ot.BIRCH]=[gt.LOG_TOP,gt.BIRCH,gt.LOG_TOP];Ye[Ot.LEAF_G]=[gt.LEAF_G,gt.LEAF_G,gt.LEAF_G];Ye[Ot.LEAF_M]=[gt.LEAF_M,gt.LEAF_M,gt.LEAF_M];Ye[Ot.LEAF_L]=[gt.LEAF_L,gt.LEAF_L,gt.LEAF_L];Ye[Ot.LEAF_P]=[gt.LEAF_P,gt.LEAF_P,gt.LEAF_P];Ye[Ot.LEAF_T]=[gt.LEAF_T,gt.LEAF_T,gt.LEAF_T];Ye[Ot.WATER]=[gt.WATER,gt.WATER,gt.WATER];Ye[Ot.COBBLE]=[gt.COBBLE,gt.COBBLE,gt.COBBLE];Ye[Ot.DEEP]=[gt.DEEP,gt.DEEP,gt.DEEP];Ye[Ot.CLAY]=[gt.CLAY,gt.CLAY,gt.CLAY];Ye[Ot.GRAVEL]=[gt.GRAVEL,gt.GRAVEL,gt.GRAVEL];Ye[Ot.MOSSY]=[gt.MOSSY,gt.MOSSY,gt.MOSSY];Ye[Ot.PLANKS]=[gt.PLANKS,gt.PLANKS,gt.PLANKS];var Ha=i=>i===Ot.LEAF_G||i===Ot.LEAF_M||i===Ot.LEAF_L||i===Ot.LEAF_P||i===Ot.LEAF_T,mo=class{constructor(t,e,n,s,r,o){Object.assign(this,{x0:t,y0:e,z0:n,sx:s,sy:r,sz:o}),this.d=new Uint8Array(s*r*o),this.plants=[],this.tint=new Map}idx(t,e,n){let s=t-this.x0,r=e-this.y0,o=n-this.z0;return s<0||r<0||o<0||s>=this.sx||r>=this.sy||o>=this.sz?-1:(r*this.sz+o)*this.sx+s}get(t,e,n){let s=this.idx(t,e,n);return s<0?0:this.d[s]}set(t,e,n,s){let r=this.idx(t,e,n);r>=0&&(this.d[r]=s)}top(t,e){for(let n=this.y0+this.sy-1;n>=this.y0;n--){let s=this.get(t,n,e);if(s&&s!==Ot.WATER)return n}return null}plant(t,e,n,s,r){this.plants.push([t,e,n,s,r||1])}build(t){let e={p:[],n:[],u:[],c:[]},n={p:[],n:[],u:[],c:[]},s=[{d:[1,0,0],v:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],s:1,b:.84},{d:[-1,0,0],v:[[0,0,1],[0,1,1],[0,1,0],[0,0,0]],s:1,b:.84},{d:[0,1,0],v:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],s:0,b:1},{d:[0,-1,0],v:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],s:2,b:.62},{d:[0,0,1],v:[[1,0,1],[1,1,1],[0,1,1],[0,0,1]],s:1,b:.92},{d:[0,0,-1],v:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],s:1,b:.76}],r=t==null?.88:t;for(let u=0;u<this.sy;u++)for(let d=0;d<this.sz;d++)for(let g=0;g<this.sx;g++){let _=this.d[(u*this.sz+d)*this.sx+g];if(!_)continue;let x=this.x0+g,p=this.y0+u,T=this.z0+d,b=Ye[_];if(!b)continue;let M=this.tint.get((u*this.sz+d)*this.sx+g)||1;s.forEach(B=>{let P=this.get(x+B.d[0],p+B.d[1],T+B.d[2]);if(_===Ot.WATER){if(P!==Ot.AIR)return}else if(P&&P!==Ot.WATER&&!(Ha(P)&&!Ha(_)))return;if(Ha(_)&&Ha(P))return;let D=_===Ot.WATER?n:e,[F,A,S,z]=zf(b[B.s]),Q=B.v.map(([q,X,ut])=>[x+q,p+(_===Ot.WATER&&X===1?r:X),T+ut]),O=B.b*M,V=B.d[1]!==0?[[F,A],[S,A],[S,z],[F,z]]:[[F,A],[F,z],[S,z],[S,A]];[0,1,2,0,2,3].forEach(q=>{D.p.push(...Q[q]),D.n.push(...B.d),D.u.push(...V[q]),D.c.push(O,O,O)})})}let o=u=>{let d=new ze;return d.setAttribute("position",new ue(u.p,3)),d.setAttribute("normal",new ue(u.n,3)),d.setAttribute("uv",new ue(u.u,2)),d.setAttribute("color",new ue(u.c,3)),d},a=ly(),c=new St(o(e),new _e({map:a,vertexColors:!0}));c.castShadow=!0,c.receiveShadow=!0,c.userData.keepBatch=!0;let l=new St(o(n),new _e({map:a,vertexColors:!0,transparent:!0,opacity:.8,depthWrite:!1}));l.receiveShadow=!0,l.userData.keepBatch=!0,l.renderOrder=1;let h={p:[],n:[],u:[],c:[]};this.plants.forEach(([u,d,g,_,x])=>{let[p,T,b,M]=zf(_),B=.9*x,P=.45*x;[[[-P,-P],[P,P]],[[-P,P],[P,-P]]].forEach(([[D,F],[A,S]])=>{let z=[[u+D,d,g+F],[u+A,d,g+S],[u+A,d+B,g+S],[u+D,d+B,g+F]],Q=[[p,T],[b,T],[b,M],[p,M]];[0,1,2,0,2,3].forEach(O=>{h.p.push(...z[O]),h.n.push(0,1,0),h.u.push(...Q[O]),h.c.push(1,1,1)})})});let f=new St(o(h),new _e({map:a,vertexColors:!0,alphaTest:.5,side:ln}));return f.userData.keepBatch=!0,{solid:c,water:l,plants:f}}};function go(i,t,e,n,s,r){let o={oak:[Ot.LEAF_G,Ot.LEAF_L][r()*2|0],birch:Ot.LEAF_L,mint:Ot.LEAF_M,cherry:Ot.LEAF_P,pine:Ot.LEAF_T}[s]||Ot.LEAF_G,a=s==="birch"?Ot.BIRCH:Ot.LOG,c=(h,f,u,d)=>{i.get(h,f,u)||i.set(h,f,u,d)};if(s==="pine"){let h=6+(r()*3|0);for(let u=0;u<h;u++)i.set(t,e+u,n,Ot.LOG);let f=2;for(let u=2;u<=h;u++){let d=u===h?0:(h-u)%2===0?Math.max(1,f-1):f;for(let g=-d;g<=d;g++)for(let _=-d;_<=d;_++)Math.abs(g)+Math.abs(_)<=d+(d>1?0:1)&&!(g===0&&_===0&&u<h)&&c(t+g,e+u,n+_,o);u%2===0&&f>1&&u>h/2&&f--}c(t,e+h,n,o),c(t,e+h+1,n,o);return}let l=(s==="birch"?5:4)+(r()*2|0);for(let h=0;h<l;h++)i.set(t,e+h,n,a);for(let h=l-2;h<=l+1;h++){let f=h>=l?1:2;for(let u=-f;u<=f;u++)for(let d=-f;d<=f;d++)f===2&&Math.abs(u)===2&&Math.abs(d)===2&&r()<.75||h===l+1&&Math.abs(u)+Math.abs(d)>1||c(t+u,e+h,n+d,o)}}function kf(i,t,e,n){let s=i.attributes.uv,r=[[n,e],[n,e],[t,n],[t,n],[t,e],[t,e]];for(let o=0;o<6;o++)for(let a=0;a<4;a++){let c=o*4+a;s.setXY(c,s.getX(c)*r[o][0],s.getY(c)*r[o][1])}return s.needsUpdate=!0,i}var uy={land:{W:320,H:236,houses:[[16,116],[52,116],[88,116],[124,116],[172,116],[208,116],[244,116],[16,150],[52,150],[192,23],[66,24],[88,150],[124,150],[16,186],[52,186],[88,186],[124,187],[180,152]],hall:[134,38],pond:[264,206],pondR:[8,4],hill:{x:160,y:46,w:216,h:74,r:12,height:3},ramp:{x:160,from:83,to:110.5},lot:{house:9,x0:172,y0:12,x1:258,y1:66,car:[226,54.4],swing:[186,40]},roads:[[8,110.5,312,110.5],[8,144.5,312,144.5],[8,180.5,206,180.5],[8,214.5,170,214.5],[46,110.5,46,214.5],[160,110.5,160,214.5],[64,70,258,70],[160,70,160,110.5]],river:[[292,30],[296,70],[292,110.5],[288,144.5],[282,175],[272,194]],mountains:[[-22,-32.5,5,11],[-8,-34.5,6,14],[8,-34.5,5.5,12],[22,-32,5,11],[33,-26,4.5,9]]},port:{W:200,H:360,houses:[[8,132],[8,184],[8,236],[8,288],[168,132],[168,184],[168,236],[168,288],[56,134],[132,51],[16,56],[88,134],[120,134],[56,186],[88,186],[120,186],[60,239],[116,239]],hall:[68,30],pond:[100,318],pondR:[6.5,3.6],hill:{x:100,y:52,w:184,h:96,r:12,height:3},ramp:{x:100,from:100,to:124.5},lot:{house:9,x0:110,y0:40,x1:186,y1:90,car:[166,81.6],swing:[122,66]},roads:[[44.5,124.5,155.5,124.5],[44.5,124.5,44.5,330],[155.5,124.5,155.5,312],[44.5,162.5,155.5,162.5],[44.5,214.5,155.5,214.5],[44.5,274.5,155.5,274.5],[16,94,186,94],[100,94,100,124.5]],river:[[206,24],[210,120],[206,230],[200,300],[170,330],[128,322]],mountains:[[-16,-48.5,4.5,10],[-2,-49.5,5,12],[12,-49,4.5,11],[24,-45.5,4,9]]}},Le,Ze,bn,$t,Nn,mn,yo,Ki,Vn,xr,mr,wn,_r;function Kf(i){Le=uy[i];let t=(o,a)=>[(o-Le.W/2)/4,(a-Le.H/2)/4];Ze=Le.houses.map(([o,a])=>t(o+12,a+11)),bn=t(Le.hall[0],Le.hall[1]);let e=t(Le.pond[0],Le.pond[1]);$t={x:e[0],z:e[1],rx:Le.pondR[0],rz:Le.pondR[1]},Nn=Le.roads.map(([o,a,c,l])=>t(o,a).concat(t(c,l)));let n=t(Le.hill.x,Le.hill.y);yo={x:n[0],z:n[1],hw:Le.hill.w/8,hd:Le.hill.h/8,r:Le.hill.r/4,h:Le.hill.height},Ki={x:t(Le.ramp.x,0)[0],z0:t(0,Le.ramp.from)[1],z1:t(0,Le.ramp.to)[1],hw:1.1},Vn=Le.river.map(([o,a])=>{let c=t(o,a);return{x:c[0],z:c[1]}}),xr=Le.mountains.map(o=>o.slice());{let o=Vn[0],a=0,c=1e9;xr.forEach(([g,_],x)=>{let p=Math.hypot(g-o.x,_-o.z);p<c&&(c=p,a=x)});let l=xr[a],h=Vn[1].x-l[0],f=Vn[1].z-l[1],u=Math.hypot(h,f)||1;_r={i:a,x:l[0],z:l[1],r:l[2],h:l[3],dx:h/u,dz:f/u},Vn[0]={x:l[0]+_r.dx*(l[2]-.2),z:l[1]+_r.dz*(l[2]-.2)};let d=Vn[Vn.length-1];Math.hypot(d.x-$t.x,d.z-$t.z)<22&&Vn.push({x:$t.x+(d.x-$t.x)*.25,z:$t.z+(d.z-$t.z)*.25})}if(mr=Ze.map((o,a)=>Le.faces&&Le.faces[a]||0),wn=null,Le.lot){let o=Le.lot,a=t(o.x0,o.y0),c=t(o.x1,o.y1);wn={house:o.house,x0:a[0],z0:a[1],x1:c[0],z1:c[1],car:t(o.car[0],o.car[1]),swing:t(o.swing[0],o.swing[1])}}let s=Le.W/8+11,r=Le.H/8+11;mn={a:s,b:r,n:2.6,w:s*2,d:r*2}}function $f(i,t){let e=yo,n=Math.abs(i-e.x)-(e.hw-e.r),s=Math.abs(t-e.z)-(e.hd-e.r);return Math.hypot(Math.max(n,0),Math.max(s,0))+Math.min(Math.max(n,s),0)-e.r}var _o=(i,t)=>Math.abs(i-Ki.x)<Ki.hw&&t>=Ki.z0-.4&&t<=Ki.z1;function Sn(i,t){return $f(i,t)<=0?yo.h:_o(i,t)?yo.h*Math.max(0,Math.min(1,1-(t-Ki.z0)/(Ki.z1-Ki.z0))):0}var yh=(i,t,e)=>{let n=$f(i,t);return n>-.5-(e||0)&&n<.9+(e||0)&&!_o(i,t)};function Ts(i,t){let e=1e9;for(let n=1;n<Vn.length;n++){let s=Vn[n-1],r=Vn[n],o=r.x-s.x,a=r.z-s.z,c=o*o+a*a,l=Math.max(0,Math.min(1,((i-s.x)*o+(t-s.z)*a)/(c||1)));e=Math.min(e,Math.hypot(i-(s.x+o*l),t-(s.z+a*l)))}return e}var Vf=(i,t,e)=>!!wn&&i>wn.x0-(e||0)&&i<wn.x1+(e||0)&&t>wn.z0-(e||0)&&t<wn.z1+(e||0),jf=3,fy=2.1,dy=jf,ui=dy/2;function gr(i,t){let e=mn,n=Math.abs(Math.cos(i)),s=Math.abs(Math.sin(i));return Math.pow(Math.pow(n/e.a,e.n)+Math.pow(s/e.b,e.n),-1/e.n)*(1+.035*Math.sin(3*i+.7)+.025*Math.sin(5*i+2.1)+.015*Math.sin(8*i))*(t||1)}function ws(i,t,e){return Math.hypot(i,t)<gr(Math.atan2(t,i))-(e||0)}Kf("land");var fi={grass:12576420,grassSide:10474377,dirt:13214334,dirt2:11569768,road:15983293,wall:16774888,wall2:15785156,door:12882799,frame:15323828,trunk:11042910,leaf:[10147472,8834176,11460768],water:9425898,sand:15983549,lily:8701828,roof:{pink:16165309,peach:16368540,blue:10473444,lav:13219054,mint:10738109,yellow:16111752,hall:15834032},flower:[16758465,16777215,16375946,14273008,16763304]},vh=new Map;function re(i,t){let e=i+JSON.stringify(t||{});if(!vh.has(e)){let n=Object.assign({color:i},t||{});!("map"in n)&&!n.noMap&&(n.map=hi(gt.PLASTER)),delete n.noMap,vh.set(e,new _e(n))}return vh.get(e)}var Mh=new Map;function Je(i,t,e){let n=i+":"+(t==null?"x":t)+JSON.stringify(e||{});return Mh.has(n)||Mh.set(n,new _e(Object.assign({map:hi(i),color:t==null?16777215:t},e||{}))),Mh.get(n)}var Eh=new Map;function Qf(i,t,e){let n=i.toFixed(3)+","+t.toFixed(3)+","+e.toFixed(3);return Eh.has(n)||Eh.set(n,kf(new Be(i,t,e),i,t,e)),Eh.get(n)}function U(i,t,e,n,s=0,r=0,o=0,a){let c=new St(Qf(i,t,e),a&&a.isMaterial?a:re(n,a));return c.position.set(s,r,o),c.castShadow=!0,c.receiveShadow=!0,c}function an(i,t,e,n,s=0,r=0,o=0,a){let c=new St(new Be(i,t,e),a&&a.isMaterial?a:re(n,a));return c.position.set(s,r,o),c.castShadow=!0,c.receiveShadow=!0,c}function Gf(i){return()=>(i=i*1664525+1013904223>>>0,i/4294967296)}var Wt=(i,t)=>i+Math.random()*(t-i),Cn=(i,t,e)=>i+(t-i)*e,Ci=(i,t,e=0)=>((i-$t.x)/($t.rx+e))**2+((t-$t.z)/($t.rz+e))**2<1;var Ch=new $e({transparent:!0,opacity:0,depthWrite:!1}),Ph=[],Sh=[];function Ya(){let i=new _e({color:12576498,emissive:16765562,emissiveIntensity:0});return Ph.push(i),i}function $i(i){let t=new eo;t.moveTo(0,-.5),t.bezierCurveTo(-.9,.1,-.5,.75,0,.35),t.bezierCurveTo(.5,.75,.9,.1,0,-.5);let e=new Aa(t,{depth:.18,bevelEnabled:!1,curveSegments:10});return new St(e,re(i,{emissive:i,emissiveIntensity:.25}))}function py(i,t,e){let n=new Kt,s=Je(gt.SHINGLE,e),r=t+1,o=Math.ceil(r/1);for(let a=0;a<o;a++){let c=r-a,l=a*.5+.25;if(c<=.2)break;n.add(U(i+.8,.5,c,0,0,l,0,s))}return n.userData.h=o*.5,n}function Wf(i,t){let e=new Kt,n=t?10:5,s=t?7:4,r=t?4:3,o=t?fi.roof.hall:fi.roof[i.roof]||fi.roof.pink,a=Je(gt.COBBLE),c=Je(gt.LOG),l=Je(gt.PLASTER,t?16774114:16774888),h=Je(gt.PLANK_GREY,14264440);e.add(U(n+.4,.3,s+.4,0,0,.15,0,a)),e.add(U(n,r,s,0,0,.3+r/2,0,l)),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([B,P])=>e.add(U(.5,r,.5,0,B*(n/2-.15),.3+r/2,P*(s/2-.15),c))),e.add(U(n+.12,.35,s+.12,0,0,.3+r-.17,0,c));let f=py(n,s,o);f.position.y=.3+r,e.add(f);let u=f.userData.h,d=t?2:1,g=t?2.6:2,_=new Kt;_.position.set(-d/2,.3,s/2+.02),e.add(_),_.add(U(d,g,.12,0,d/2,g/2,0,Je(gt.PLANK_GREY,11565650))),_.add(U(.12,.12,.08,16375946,d-.2,g/2,.08)),e.add(U(d-.04,g-.04,.05,5916214,0,.3+g/2,s/2-.02)),e.userData.hinge=_,e.add(U(d+1,.3,1,0,0,.15,s/2+.7,a));let x=Ya();x.map=hi(gt.GLASS),e.userData.wm=x;let p=.3+(t?2.2:1.6),T=t?[-3.5,-2,2,3.5]:[-1.6,1.6];if(T.forEach(B=>{e.add(U(1.2,1.2,.12,0,B,p,s/2+.02,h)),e.add(U(1,1,.14,0,B,p,s/2+.04,x))}),[-1,1].forEach(B=>{e.add(U(.12,1.2,1.2,0,B*(n/2+.02),p,0,h)),e.add(U(.14,1,1,0,B*(n/2+.04),p,0,x))}),t||(T.forEach(B=>{e.add(U(1.2,.3,.4,0,B,p-.75,s/2+.22,h)),[-.35,0,.35].forEach((P,D)=>e.add(U(.22,.22,.22,fi.flower[D],B+P,p-.5,s/2+.22)))}),e.add(U(1,1.5,1,0,n/4,.3+r+u*.55,-s/5,a)),e.userData.chimney=new L(n/4,.3+r+u*.55+1,-s/5),e.add(U(.25,1,.25,0,n/2+.4,.5,s/2+1.4,c)),e.add(U(.45,.35,.55,o,n/2+.4,1.15,s/2+1.4))),i&&i.heart){let B=$i(16744350);B.scale.setScalar(.9),B.position.set(0,.3+r+u*.42,s/2+.42),e.add(B),e.userData.heart=B}let b=null;if(t){let B=Je(gt.BRICKS,15656668);[-1.5,1.5].forEach(F=>e.add(U(.6,r,.6,0,F,.3+r/2,s/2+.35,B))),e.add(U(n+.4,.4,1,0,0,.3+r+.1,s/2+.35,B)),e.add(U(.2,3,.2,0,0,.3+r+u+1.4,0,c));let P=U(1.4,.8,.08,16751536,.75,.3+r+u+2.4,0);e.add(P),e.userData.flag=P;let D=new _e({color:16375946,emissive:16739179,emissiveIntensity:0,map:hi(gt.PLASTER)});b=new St(Qf(.7,.7,.7),D),b.position.set(0,.3+r+u*.42,s/2+.45),e.add(b),e.add(U(1.4,1.4,.1,0,0,.3+r+u*.42,s/2+.3,h))}e.userData.top=.3+r+u+(t?3.2:.6);let M=new St(new Be(n+.6,r+u+.3,s+.6),Ch);return M.position.y=(r+u+.3)/2,e.add(M),e.userData.pick=M,e.userData.bell=b,e.userData.doorZ=s/2+1.3,e}function wh(i,t,e){let n=document.createElement("canvas");n.width=t,n.height=e,i(n.getContext("2d"),t,e);let s=new rn(n);return s.colorSpace=Ue,s.anisotropy=4,s}function Ih(i,t,e,n,s,r){r=r||0,i.userData.wm=s,i.userData.top=n+.9,i.userData.size={cx:r,hw:t/2+.4,hd:e/2+.3};let o=new St(new Be(t+.6,n+.3,e+.6),Ch);return o.position.set(r,(n+.3)/2,0),i.add(o),i.userData.pick=o,i.userData.doorZ=e/2+1.3,i}function Lh(i,t,e,n,s){let r=new Kt;r.position.set(-t/2,.3,n),i.add(r),r.add(U(t,e,.1,s,t/2,e/2,0)),r.add(U(.06,.5,.06,14278115,t-.2,e/2,.07)),i.add(U(t-.04,e-.04,.05,3814720,0,.3+e/2,n-.04)),i.userData.hinge=r}function my(){let i=new Kt,t=6.4,e=5.2,n=3,s=2.8,r=Ya();i.add(U(t+5.4,.25,e+.6,15328478,2.3,.12,0)),i.add(U(t,n,e,16513784,0,.25+n/2,0)),[-2.15,2.15].forEach(_=>{i.add(U(1.7,2.45,.08,3814720,_,.25+1.3,e/2+.01)),i.add(U(1.55,2.3,.1,0,_,.25+1.3,e/2+.03,r))}),Lh(i,1.15,2.3,e/2+.03,9067068),i.add(U(t+.3,.18,e+.3,4867664,0,.25+n+.09,0));let o=.25+n+.18,a=wh((_,x,p)=>{for(let T=0;T<x;T+=4)_.fillStyle=T%8?"#c99166":"#bb8358",_.fillRect(T,0,4,p)},64,16),c=new _e({map:a}),l=new St(new Be(t-.6,s,e-.4),c);l.position.set(-.3,o+s/2,-.4),l.castShadow=!0,l.receiveShadow=!0,i.add(l),i.add(U(t-.3,.16,e-.1,4867664,-.3,o+s+.08,-.4));let h=e/2-.4+.01-.2;i.add(U(2.9,2.35,.08,3814720,-.3,o+1.2,h+.02));let f=new St(new Be(2.7,2.2,.06),new _e({color:12576498,transparent:!0,opacity:.6,emissive:16765562,emissiveIntensity:0}));f.position.set(-.3,o+1.2,h+.06),i.add(f),Ph.push(f.material),i.add(U(.05,2.2,.08,3814720,-.3,o+1.2,h+.08)),i.add(U(t-.4,.14,1.5,15328478,-.2,o+.07,e/2+.55));let u=new St(new Be(t-.5,.75,.04),new _e({color:14217722,transparent:!0,opacity:.45}));u.position.set(-.2,o+.52,e/2+1.28),i.add(u),i.add(U(t-.5,.05,.07,3814720,-.2,o+.92,e/2+1.28)),[-2.5,-1.95,1.75,2.3].forEach((_,x)=>{i.add(U(.34,.32,.34,[15921906,9080729][x%2],_,o+.3,e/2+.95));let p=new St(new Ra(.26,2),re(fi.leaf[x%3],{}));p.position.set(_,o+.62,e/2+.95),p.castShadow=!0,i.add(p)});let d=$i(16744350);d.scale.setScalar(.55),d.material=new _e({color:16744350,emissive:16732030,emissiveIntensity:.25}),d.position.set(-2.2,o+2.05,e/2-.55),i.add(d),i.userData.heart=d;let g=t/2+2.3;i.add(U(4.6,2.9,e,16513784,g,.25+1.45,0)),i.add(U(4.8,.16,e+.2,4867664,g,.25+2.98,0)),i.add(U(3.7,2.3,.08,5592926,g,.25+1.15,e/2+.02));for(let _=0;_<6;_++)i.add(U(3.7,.03,.1,7040630,g,.45+_*.38,e/2+.05));return i.add(U(.5,.05,.05,16777215,g+1.4,2.95,e/2+.12)),[-1,1].forEach(_=>i.add(U(.12,.85,.85,0,_*(t/2+.01)-(_>0,0),.25+1.6,-1.2,r))),i.userData.vip=!0,Ih(i,t+4.6,e,o+s+.2,r,2.3)}function gy(){let i=new Kt,t=9.2,e=6.6,n=3.8,s=Ya();i.add(U(t+.6,.25,e+.6,15326447,0,.12,0)),i.add(U(t,n,e,14273008,0,.25+n/2,0)),i.add(U(t+.4,.3,e+.4,16165309,0,.25+n+.15,0)),[-2.8,2.8].forEach(o=>{i.add(U(2.6,2,.1,16777215,o,1.5,e/2+.01)),i.add(U(2.4,1.8,.12,0,o,1.5,e/2+.03,s))}),Lh(i,1.8,2.4,e/2+.03,15834032),[[-1.4,16773544],[0,16758465],[1.4,10934504]].forEach(([o,a])=>{let c=$i(a);c.scale.setScalar(.45),c.position.set(o,.25+n-.55,e/2+.02),i.add(c)});let r=new St(new on(.55,20,14),re(16027569));return r.position.set(3.2,.25+n+2.2,-1.5),r.castShadow=!0,i.add(r),i.add(U(.18,1.6,.18,3814720,3.2,.25+n+1.2,-1.5)),i.add(U(1.6,.3,1.6,3814720,3.2,.25+n+.45,-1.5)),Ih(i,t,e,n+2.4,s)}function xy(){let i=new Kt,t=9.2,e=7,n=3.5,s=Ya();i.add(U(t+.8,.22,e+.8,14605012,0,.11,0)),i.add(U(t,n,e,16513784,0,.22+n/2,0)),[[15895592,0],[3055195,.22],[14826299,.44]].forEach(([l,h])=>{i.add(U(t+.06,.2,e+.06,l,0,.22+n-.55-h,0))}),i.add(U(t+.5,.25,e+.5,15921906,0,.22+n+.12,0));let r=wh((l,h,f)=>{l.fillStyle="#d8f1fa",l.fillRect(0,0,h,f);let u=["#ffb6c1","#f5d888","#a3d9bd","#a6d8e8","#f9c39c","#d9c9f0"];for(let d=0;d<4;d++){l.fillStyle="#c9e7f2",l.fillRect(0,12+d*28,h,3);for(let g=0;g<26;g++)l.fillStyle=u[(g+d)%u.length],l.fillRect(6+g*10,15+d*28,7,10+g%3*3)}},256,128),o=new _e({map:r,emissive:16773836,emissiveMap:r,emissiveIntensity:.1});[-2.65,2.65].forEach(l=>{i.add(U(3.4,2,.08,14605012,l,1.35,e/2+.01));let h=new St(new Be(3.2,1.85,.1),o);h.position.set(l,1.35,e/2+.03),i.add(h)}),Lh(i,1.7,2.3,e/2+.03,12576498);let a=wh((l,h,f)=>{l.fillStyle="#ffffff",l.fillRect(0,0,h,f),l.fillStyle="#2e9e5b",l.fillRect(10,18,108,16),l.fillStyle="#f28c28",l.fillRect(10,40,108,16),l.fillStyle="#e23b3b",l.font="bold 86px sans-serif",l.textAlign="center",l.fillText("7",64,98),l.font="bold 20px sans-serif",l.fillText("ELEVEn",64,122)},128,128),c=new St(new Be(1.5,1.5,.14),[re(16777215),re(16777215),re(16777215),re(16777215),new _e({map:a}),re(16777215)]);return c.position.set(t/2-1.1,.22+n+1.05,e/2-.3),c.castShadow=!0,i.add(c),i.add(U(.12,.8,.12,14605012,t/2-1.1,.22+n+.35,e/2-.3)),[[15226446,-.5],[6131664,.45]].forEach(([l,h])=>{i.add(U(.8,1.8,.75,l,t/2+.45,1.12,e/2-1.2+h));let f=U(.04,.9,.55,0,t/2+.86,1.4,e/2-1.2+h,new _e({color:16775126,emissive:16773808,emissiveIntensity:.25}));i.add(f)}),[-4,-3.2].forEach(l=>i.add(U(.5,.5,.5,15895592,l,.47,e/2+.9))),i.userData.alwaysLit=!0,Ih(i,t,e,n+1.9,s)}function _y(){let i=new Kt,t=2500653,e=14278115,n=5202805;i.add(U(1.9,1,4.4,t,0,.95,0)),i.add(U(1.75,.78,2.7,t,0,1.85,-.35)),[[-1,0],[1,0]].forEach(([o])=>i.add(U(.03,.55,2.4,n,o*.885,1.9,-.35))),i.add(U(1.6,.55,.03,n,0,1.9,1.01)),i.add(U(1.6,.55,.03,n,0,1.9,-1.71)),i.add(U(1.92,.06,4.42,e,0,1.46,0)),i.add(U(1.3,.35,.05,1776672,0,1.05,2.21));for(let o=-2;o<=2;o++)i.add(U(.03,.3,.06,e,o*.22,1.05,2.22));[-1,1].forEach(o=>{let a=new St(new Pe(.17,.17,.08,14),re(16775126,{emissive:16773808,emissiveIntensity:.35}));a.rotation.x=Math.PI/2,a.position.set(o*.72,1.12,2.22),i.add(a),i.add(U(.12,.12,.12,16754253,o*.95,1.5,1.95)),i.add(U(.22,.35,.05,14703183,o*.78,1,-2.22))}),i.add(U(1.94,.18,.2,1776672,0,.5,2.25)),i.add(U(1.94,.18,.2,1776672,0,.5,-2.25));let s=new St(new Pe(.4,.4,.24,16),re(1776672));s.rotation.x=Math.PI/2,s.position.set(0,1.15,-2.35),i.add(s);let r=new St(new Pe(.22,.22,.26,12),re(e));return r.rotation.x=Math.PI/2,r.position.set(0,1.15,-2.36),i.add(r),[[-.95,1.45],[.95,1.45],[-.95,-1.4],[.95,-1.4]].forEach(([o,a])=>{let c=new St(new Pe(.42,.42,.34,14),re(1776672));c.rotation.z=Math.PI/2,c.position.set(o,.42,a),c.castShadow=!0,i.add(c);let l=new St(new Pe(.22,.22,.36,10),re(e));l.rotation.z=Math.PI/2,l.position.set(o,.42,a),i.add(l)}),i.add(U(1.5,.05,2.2,3816514,0,2.27,-.35)),i}function yy(i,t){if(!wn)return{posts:[],blocks:[]};let e=wn,n={posts:[],blocks:[]},[s,r]=Ze[e.house],[o,a]=e.car,c=t===Math.PI?e.z0:e.z1,l=Sn(s,r),h=[[s-1.2,s+1.2],[o-1.6,o+1.6]],f=(x,p)=>Math.abs(p-c)<.01&&h.some(([T,b])=>x>T&&x<b),u=(x,p,T,b)=>{let M=Math.hypot(T-x,b-p),B=Math.max(1,Math.round(M/1));for(let P=0;P<B;P++){let D=Cn(x,T,(P+.5)/B),F=Cn(p,b,(P+.5)/B);if(f(D,F))continue;let A=U(M/B+.02,.55,.22,16052716,D,l+.27,F);A.rotation.y=Math.atan2(T-x,b-p)+Math.PI/2,i.add(A);let S=U(M/B,.32,.3,8831614,D,l+.68,F);S.rotation.y=A.rotation.y,i.add(S),n.posts.push({x:D,z:F,r:.45})}};u(e.x0,e.z0,e.x1,e.z0),u(e.x1,e.z0,e.x1,e.z1),u(e.x1,e.z1,e.x0,e.z1),u(e.x0,e.z1,e.x0,e.z0),n.blocks.push({x:s+5.5,z:r,hw:2.5,hd:2.8});let d=Math.min(c,a)-1.5,g=Math.max(c,a)+.5;i.add(U(3.4,.05,Math.abs(g-d)+1.5,14144203,o,l+.025,(d+g)/2-.5));let _=_y();return _.position.set(o,l,a),_.rotation.y=t,i.add(_),n.blocks.push({x:o,z:a,hw:1.2,hd:2.4}),n.car=_,n.exit={x:o,z:c+(t===Math.PI?-1.6:1.6)},i.add(U(1.3,.05,Math.abs(r-c),15392719,s,l+.03,(r+c)/2)),n}function vy(){let i=new Kt;i.add(U(.16,2.2,.16,9206379,0,1.1,0));let t=new _e({color:16774351,emissive:16765562,emissiveIntensity:0});return Sh.push(t),i.add(U(.5,.5,.5,0,0,2.45,0,t)),i.add(U(.62,.12,.62,9206379,0,2.76,0)),i}var My=new _e({vertexColors:!0});function td(i,t){let e=[];i.traverse(n=>{n.isMesh||e.push(n)}),e.forEach(n=>{let s=n.children.filter(c=>c.isMesh&&!(t&&t.includes(c))&&!c.material.transparent&&!c.material.map);if(s.length<2)return;let r=s.map(c=>{let l=c.geometry.clone();Object.keys(l.attributes).forEach(d=>{d!=="position"&&d!=="normal"&&l.deleteAttribute(d)}),l.index&&(l=l.toNonIndexed()),l.clearGroups(),c.updateMatrix(),l.applyMatrix4(c.matrix);let h=c.material.color,f=l.attributes.position.count,u=new Float32Array(f*3);for(let d=0;d<f;d++)u[d*3]=h.r,u[d*3+1]=h.g,u[d*3+2]=h.b;return l.setAttribute("color",new hn(u,3)),l}),o=Ba(r,!1);if(r.forEach(c=>c.dispose()),!o)return;s.forEach(c=>n.remove(c));let a=new St(o,My);a.castShadow=!0,a.receiveShadow=!0,n.add(a)})}function Ga(i,t,e,n,s,r,o){let a=new Kt;a.position.set(s,r,o);let c=U(i,t,e,n,0,-t/2,0);return a.add(c),a}var Wa=[{hair:5914688,skin:16768198,shirt:12824814,pants:6253194,style:"short",uniform:!0},{hair:3878703,skin:15976614,shirt:12824814,pants:6253194,style:"long",uniform:!0},{hair:11039050,skin:16769744,shirt:12824814,pants:6253194,style:"short",uniform:!0},{hair:3025462,skin:15580570,shirt:10738109,pants:6253178,style:"short"},{hair:2038564,skin:16768198,shirt:16758465,pants:9080760,style:"twin"},{hair:9067068,skin:16175024,shirt:16111752,pants:7170698,style:"cap",cap:15834032},{hair:4864570,skin:15317140,shirt:12824814,pants:6253194,style:"short",glasses:!0,uniform:!0},{hair:13208410,skin:16769744,shirt:10147472,pants:8161960,style:"long"},{hair:3878703,skin:15976614,shirt:12824814,pants:6253194,style:"bun",glasses:!0,uniform:!0},null,{hair:5914688,skin:15580570,shirt:14273008,pants:7170698,style:"long"},{hair:3025462,skin:16768198,shirt:16111752,pants:8161960,style:"bun"},{hair:9067068,skin:15976614,shirt:10473444,pants:6253178,style:"short",glasses:!0},{hair:3878703,skin:15317140,shirt:10738109,pants:7170698,style:"cap",cap:10738109},{hair:13208410,skin:16769744,shirt:13482478,pants:9080760,style:"twin"},{hair:2367010,skin:16175024,shirt:16368540,pants:8161960,style:"short"},{hair:5914688,skin:16768198,shirt:16758465,pants:7170698,style:"long"},{hair:2038564,skin:15580570,shirt:9226408,pants:5196378,style:"cap",cap:16165309},{hair:11039050,skin:16769744,shirt:16111752,pants:9075306,style:"bun"}],Th={her:{hair:3877418,skin:16768198,shirt:16758465,pants:16758465,style:"long",dress:16165309},him:{hair:2367010,skin:15778976,shirt:10473444,pants:6253194,style:"short"}},Xf=[{hair:3878703,skin:15976614,shirt:12824814,pants:6253194,style:"short",uniform:!0},{hair:9067068,skin:16769744,shirt:12824814,pants:6253194,style:"long",uniform:!0},{hair:2367010,skin:15317140,shirt:12824814,pants:6253194,style:"bun",uniform:!0}],Te=1.75/32,Ah=12*Te;function dr(i,t){let e=new ne(i);return t&&(e.r=Math.min(1,e.r*t),e.g=Math.min(1,e.g*t),e.b=Math.min(1,e.b*t)),"#"+e.getHexString()}function ed(i,t){let e=document.createElement("canvas");e.width=e.height=64;let n=e.getContext("2d"),s=(i.hair^i.shirt^i.skin)>>>0,r=()=>(s=s*1664525+1013904223>>>0,s/4294967296),o=(_,x,p,T,b,M)=>{for(let B=0;B<T;B++)for(let P=0;P<p;P++)n.fillStyle=dr(b,1+(r()-.5)*(M==null?.1:M)),n.fillRect(_+P,x+B,1,1)},a=(_,x,p)=>{n.fillStyle=typeof p=="string"?p:dr(p),n.fillRect(_,x,1,1)},c=5981750,l=i.skin,h=i.hair,f=i.shirt,u=i.pants,d=i.style==="long"||i.style==="twin"||i.dress;o(0,0,32,16,l,.06),o(8,0,8,8,h),o(24,8,8,d?8:6,h),[0,16].forEach(_=>{o(_,8,8,d?7:4,h),o(_+(_?6:0),12,2,d?4:2,h)}),o(8,8,8,2,h),a(8,10,h),a(15,10,h),a(9,10,h),i.style==="cap"&&(o(8,0,8,8,i.cap),o(8,8,8,2,i.cap),o(0,8,8,2,i.cap),o(16,8,8,2,i.cap),o(24,8,8,2,i.cap)),[[9,12],[13,12]].forEach(([_,x])=>{if(t){a(_,x+1,"#3a2e33"),a(_+1,x+1,"#3a2e33");return}a(_,x,"#ffffff"),a(_+1,x,"#3a2e33"),a(_,x+1,"#ffffff"),a(_+1,x+1,"#3a2e33")}),a(9,14,"#ffa3b5"),a(14,14,"#ffa3b5"),a(11,14,dr(l,.78)),a(12,14,dr(l,.78)),a(11,15,"#c9707c"),a(12,15,"#c9707c"),i.glasses&&([9,13].forEach(_=>{["#6b5a4e"].forEach(x=>{a(_-1,12,x),a(_+2,12,x),a(_-1,13,x),a(_+2,13,x)})}),a(11,12,"#6b5a4e"),a(12,12,"#6b5a4e")),o(16,16,24,16,f),o(20,16,8,4,f,.05),o(23,20,2,1,l),i.uniform&&(o(22,20,4,1,16777215),o(21,22,2,2,16373355),o(20,31,8,1,9403592)),i.dress?(o(16,26,24,6,i.dress),o(20,25,8,1,dr(i.dress,.9)&&i.dress)):o(16,30,24,2,dr(u,.85)&&u,.05),o(20,22,8,1,f,.25),[[40,16],[32,48]].forEach(([_,x])=>{o(_,x,16,16,f),o(_,x+4+5,16,7,l,.06),o(_+4,x,4,4,f),o(_+8,x,4,4,l)}),[[0,16],[16,48]].forEach(([_,x])=>{o(_,x,16,16,i.dress?l:u),i.dress&&o(_,x+4,16,3,i.dress),o(_,x+4+10,16,2,c,.05),o(_+8,x,4,4,c)});let g=new rn(e);return g.magFilter=Xe,g.minFilter=Xe,g.generateMipmaps=!1,g.colorSpace=Ue,g}function pr(i,t,e,n,s){let r=new Be(i*Te,t*Te,e*Te),o=64,a=(h,f,u,d,g)=>{let _=h/o,x=(h+u)/o,p=1-f/o,T=1-(f+d)/o;return g?[x,p,_,p,x,T,_,T]:[_,p,x,p,_,T,x,T]},c=[a(n+e+i,s+e,e,t),a(n,s+e,e,t),a(n+e,s,i,e),a(n+e+i,s,i,e,!0),a(n+e,s+e,i,t),a(n+2*e+i,s+e,i,t)],l=r.attributes.uv;return c.forEach((h,f)=>{for(let u=0;u<4;u++)l.setXY(f*4+u,h[u*2],h[u*2+1])}),l.needsUpdate=!0,r}function nd(i){let t=new Kt,e={},n=new _e({map:ed(i)});e.mat=n,e.look=i;let s=(c,l,h,f)=>{let u=new St(c,n);return u.position.set(l,h,f),u.castShadow=!0,u.receiveShadow=!0,u},r=(c,l,h,f)=>{let u=new Kt;return u.position.set(c,l,h),u.add(f),u};e.legR=r(-2*Te,12*Te,0,s(pr(4,12,4,0,16),0,-6*Te,0)),t.add(e.legR),e.legL=r(2*Te,12*Te,0,s(pr(4,12,4,16,48),0,-6*Te,0)),t.add(e.legL),e.body=s(pr(8,12,4,16,16),0,18*Te,0),t.add(e.body),e.armR=r(-6*Te,23.5*Te,0,s(pr(4,12,4,40,16),0,-5.5*Te,0)),t.add(e.armR),e.armL=r(6*Te,23.5*Te,0,s(pr(4,12,4,32,48),0,-5.5*Te,0)),t.add(e.armL);let o=new Kt;o.position.y=24*Te,t.add(o),e.head=o,o.add(s(pr(8,8,8,0,0),0,4*Te,0));let a=(c,l,h,f,u,d,g)=>{let _=an(l*Te,h*Te,f*Te,c,u*Te,d*Te,g*Te);o.add(_)};if(i.style==="bun"&&a(i.hair,3,3,3,0,9.3,-2),i.style==="twin"&&(a(i.hair,2,4,2,-4.6,3.5,-1.5),a(i.hair,2,4,2,4.6,3.5,-1.5)),i.style==="cap"&&a(i.cap,8,1,3,0,6.5,5),i.style==="long"&&a(i.hair,8,5,1,0,-1.5,-4.5),i.dress){let c=an(9*Te,4*Te,5*Te,i.dress,0,12.5*Te,0);t.add(c)}return{g:t,parts:e}}function Ey(){let i=new Kt,t={},e=16236938,n=14720350,s=16774118;i.add(an(.46,.4,.8,e,0,.5,0)),[-.12,.1].forEach(l=>i.add(an(.48,.06,.12,n,0,.71,l))),i.add(an(.36,.2,.5,s,0,.34,.05)),t.legs=[[-.14,.28],[.14,.28],[-.14,-.28],[.14,-.28]].map(([l,h])=>{let f=Ga(.13,.32,.13,e,l,.34,h);return i.add(f),f});let r=new Kt;r.position.set(0,.78,.48),i.add(r),t.head=r,r.add(an(.5,.42,.42,e,0,0,0)),r.add(an(.3,.16,.06,s,0,-.1,.21)),[-.15,.15].forEach(l=>{let h=new St(new to(.11,.2,4),re(n));h.position.set(l,.29,-.02),h.rotation.y=Math.PI/4,r.add(h);let f=an(.08,.1,.03,4010032,l*.8,.04,.215);r.add(f),(t.eyes=t.eyes||[]).push(f)}),r.add(an(.07,.05,.03,16752048,0,-.04,.23));let o=new Kt;o.position.set(0,.62,-.38),i.add(o),t.tail=o;let a=an(.1,.1,.4,e,0,.05,-.18);o.add(a);let c=new Kt;return c.position.set(0,.05,-.36),o.add(c),c.add(an(.1,.4,.1,n,0,.18,0)),o.rotation.x=.5,i.scale.setScalar(.6),td(i,t.eyes),{g:i,parts:t}}function by(){let i=new Kt,t={},e=16774374,n=13211247;i.add(an(.56,.5,.95,e,0,.62,0)),i.add(an(.58,.3,.4,n,0,.76,-.15)),t.legs=[[-.17,.33],[.17,.33],[-.17,-.33],[.17,-.33]].map(([o,a])=>{let c=Ga(.16,.4,.16,e,o,.42,a);return i.add(c),c});let s=new Kt;s.position.set(0,.98,.55),i.add(s),t.head=s,s.add(an(.56,.52,.5,e,0,0,0)),s.add(an(.3,.24,.26,e,0,-.1,.34)),s.add(an(.13,.1,.06,4010032,0,-.02,.48)),s.add(an(.1,.12,.06,16748451,.05,-.24,.42)),[-.3,.3].forEach(o=>{let a=Ga(.12,.42,.26,n,o,.2,-.02);a.rotation.z=o>0?-.15:.15,s.add(a);let c=an(.08,.11,.03,4010032,o*.45,.08,.26);s.add(c),(t.eyes=t.eyes||[]).push(c)});let r=Ga(.12,.42,.12,n,0,.82,-.47);return r.rotation.x=-.9,i.add(r),t.tail=r,i.scale.setScalar(.62),td(i,t.eyes),{g:i,parts:t}}function Sy(i){let t=new Kt,e=[16751211,16777215,16757575][i%3],n=new St(new on(.28,10,8),re(e));if(n.scale.set(.7,.6,1.4),t.add(n),i%3===1){let r=new St(new on(.16,8,6),re(16744272));r.position.set(0,.1,.05),r.scale.set(1,.6,1.4),t.add(r)}let s=new St(new to(.22,.35,4),re(e===16777215?16751211:e));return s.rotation.x=Math.PI/2,s.position.z=-.5,t.add(s),t.userData.tail=s,t}function wy(i){let t=new Kt,e=new _e({color:i,side:ln}),n=()=>{let o=new St(new Ri(.32,.26),e);o.position.x=.17;let a=new Kt;return a.add(o),a},s=n(),r=n();return r.scale.x=-1,t.add(s,r),t.userData.l=s,t.userData.r=r,t}function Yf(){let i=new Kt,t=15392715,e=3.5,n=Je(gt.LOG),s=Je(gt.LEAF_P);i.add(U(1,e+1.5,1,0,-2,(e+1.5)/2,-.2,n)),i.add(U(3.2,.5,.5,0,-.4,e+.05,0,n)),[[-2,e+2.5,-.3,4,2,3],[-2,e+3.5,-.3,2,1,2],[-.6,e+1.6,-.6,2,1,2],[-3.4,e+1.6,-.2,1,1,2]].forEach(([c,l,h,f,u,d])=>i.add(U(f,u,d,0,c,l,h,s)));let r=new Kt;r.position.set(0,e-.2,0),i.add(r);let o=e-.2-.56;[-.72,.72].forEach(c=>r.add(U(.06,o,.06,t,c,-o/2,0)));let a=U(1.65,.12,.5,0,0,-o,0,Je(gt.PLANK_GREY,16165309));return r.add(a),i.userData.pivot=r,i.userData.seat=a,i}function Rh(i,t,e){let s=document.createElement("canvas"),r=s.getContext("2d");r.font="800 64px Nunito, sans-serif";let o=Math.ceil(r.measureText(i).width)+40;s.width=o,s.height=100;let a=s.getContext("2d");a.font="800 64px Nunito, sans-serif",a.textAlign="center",a.textBaseline="middle",a.lineJoin="round",a.fillStyle=t,a.fillText(i,o/2,s.height/2);let c=new rn(s);c.colorSpace=Ue;let l=new ps(new qi({map:c,transparent:!0,depthWrite:!1,depthTest:!1}));return l.scale.set(e*o/s.height,e,1),l.renderOrder=5,l}function id(i,t,e,n){let s=document.createElement("canvas");s.width=128,s.height=64;let r=s.getContext("2d");r.font="bold 48px sans-serif",r.fillStyle=t,r.textAlign="center",r.fillText(i,64,50);let o=new ps(new qi({map:new rn(s),transparent:!0,depthWrite:!1}));return o.scale.set(e,n,1),o.visible=!1,o}function qf(i,t){return Math.hypot((i-$t.x)/($t.rx+4.4),(t-$t.z)/($t.rz+4.4))<1&&!Ci(i,t,.4)}function Ty(i){let t=new Qr(Vn.map(o=>new L(o.x,0,o.z))),e=90,n=t.getSpacedPoints(e),s=new pn,r=[];return Nn.forEach(([o,a,c,l])=>{let h=o===c;for(let f=0;f<n.length;f++){let u=n[f];!(h?Math.abs(u.x-o)<.95&&u.z>=Math.min(a,l)-.9&&u.z<=Math.max(a,l)+.9:Math.abs(u.z-a)<.95&&u.x>=Math.min(o,c)-.9&&u.x<=Math.max(o,c)+.9)||r.some(g=>Math.hypot(g.x-u.x,g.z-u.z)<3)||r.push({x:h?o:u.x,z:h?u.z:a,rot:h?0:Math.PI/2})}}),r.forEach(o=>i.add(sd(o.x,o.z,o.rot,3))),{curve:t,glints:[],ftex:s,foam:[],bridges:r,src:n[0]}}function sd(i,t,e,n){let s=new Kt;s.position.set(i,0,t),s.rotation.y=e;let r=Je(gt.PLANKS),o=Je(gt.LOG);return[0,.25,.5,.25,0].forEach((a,c)=>s.add(U(n,.5,1,0,0,a-.15,c-2,r))),[-1,1].forEach(a=>{[0,.25,.5,.25,0].forEach((c,l)=>{s.add(U(.25,.9,.25,0,a*(n/2-.12),c+.55,l-2,o)),l<4&&s.add(U(.12,.12,1,0,a*(n/2-.12),c+.85+(l<2?.12:-.12),l-1.5,r))})}),s}function Ay(i,t){let e=$t,n=e.rx+2.6,s=e.rz+2.6,r=80,o=[],a=[],c={benches:[],ducks:[],posts:[]};for(let l=0;l<=r;l++){let h=l/r*Math.PI*2,f=Math.cos(h),u=Math.sin(h),d=e.x+f*(n-.75),g=e.z+u*(s-.75),_=e.x+f*(n+.75),x=e.z+u*(s+.75);if(o.push(d,.025,g,_,.025,x),l){let p=l*2;a.push(p-2,p,p-1,p-1,p,p+1)}}for(let l=0;l<r;l++){let h=l/r*Math.PI*2,f=e.x+Math.cos(h)*n,u=e.z+Math.sin(h)*s;if(Ts(f,u)<.6){i.add(sd(f,u,-h+Math.PI/2+Math.PI/2,1.5));break}}[.6,2.2,3.6,5].forEach((l,h)=>{let f=e.x+Math.cos(l)*(n+1.6),u=e.z+Math.sin(l)*(s+1.6);if(Ts(f,u)<2.2||!ws(f,u,1.5))return;let d=new Kt;d.position.set(f,0,u),d.rotation.y=Math.atan2(e.x-f,e.z-u),d.add(U(1.5,.08,.45,12883572,0,.45,0)),d.add(U(1.5,.4,.07,12883572,0,.7,-.22)),[-.65,.65].forEach(g=>{d.add(U(.08,.45,.4,9206379,g,.22,0))}),i.add(d),c.posts.push({x:f,z:u,r:.9})});for(let l=0;l<7;l++){let h=l/7*Math.PI*2+.3,f=e.x+Math.cos(h)*(n+3.1),u=e.z+Math.sin(h)*(s+3.1);if(!(Ts(f,u)<2.4||!ws(f,u,1.8))){i.add(U(2,.5,1,0,Math.floor(f)+.5,.25,Math.floor(u)+.5,Je(gt.PLANKS)));for(let d=0;d<4;d++){let g=Math.floor(f)+.5+(d-1.5)*.45,_=Math.floor(u)+.5+(d%2?.15:-.15);i.add(U(.06,.35,.06,8173679,g,.65,_)),i.add(U(.22,.22,.22,fi.flower[(l+d)%fi.flower.length],g,.9,_))}c.posts.push({x:f,z:u,r:1})}}for(let l=0;l<2;l++){let h=new Kt;h.add(U(.5,.3,.7,16777215,0,.18,0)),h.add(U(.32,.3,.3,l?16777215:7317610,0,.45,.32)),h.add(U(.18,.08,.16,16098123,0,.42,.53)),[-.12,.12].forEach(f=>h.add(U(.05,.06,.03,3025462,f,.5,.47))),h.add(U(.2,.12,.2,15658734,0,.32,-.38)),h.scale.setScalar(.8),i.add(h),c.ducks.push({g:h,a:l*2.5,sp:l?-.12:.09})}return c}function Ry(i){let t=[],e=[],n=(f,u)=>f.toFixed(2)+","+u.toFixed(2),s=new Map,r=(f,u)=>{let d=n(f,u);return s.has(d)||(s.set(d,t.length),t.push({x:f,z:u}),e.push([])),s.get(d)},o=(f,u)=>{if(f===u)return;let d=Math.hypot(t[f].x-t[u].x,t[f].z-t[u].z);e[f].push([u,d]),e[u].push([f,d])},a=Nn.map(()=>[]);Nn.forEach((f,u)=>{a[u].push([f[0],f[1]],[f[2],f[3]])}),Nn.forEach((f,u)=>Nn.forEach((d,g)=>{if(u>=g)return;let _=f[0]===f[2],x=d[0]===d[2];if(_===x)return;let p=_?f:d,T=_?d:f,b=p[0],M=T[1];b>=Math.min(T[0],T[2])-.01&&b<=Math.max(T[0],T[2])+.01&&M>=Math.min(p[1],p[3])-.01&&M<=Math.max(p[1],p[3])+.01&&(a[u].push([b,M]),a[g].push([b,M]))}));let c=i.map(f=>{let u=null;Nn.forEach((g,_)=>{let x=g[0]===g[2],p=x?g[0]:Math.max(Math.min(g[0],g[2]),Math.min(Math.max(g[0],g[2]),f.x)),T=x?Math.max(Math.min(g[1],g[3]),Math.min(Math.max(g[1],g[3]),f.z)):g[1],b=Math.hypot(p-f.x,T-f.z);(!u||b<u.dist)&&(u={i:_,x:p,z:T,dist:b})}),a[u.i].push([u.x,u.z]);let d=r(f.x,f.z);return o(d,r(u.x,u.z)),d});a.forEach((f,u)=>{let d=Nn[u][0]===Nn[u][2];f.sort((g,_)=>d?g[1]-_[1]:g[0]-_[0]);for(let g=1;g<f.length;g++)o(r(f[g-1][0],f[g-1][1]),r(f[g][0],f[g][1]))});function l(f,u){let d=t.map(()=>1/0),g=t.map(()=>-1),_=t.map(()=>!1);for(d[f]=0;;){let p=-1;for(let T=0;T<t.length;T++)!_[T]&&(p<0||d[T]<d[p])&&(p=T);if(p<0||d[p]===1/0||p===u)break;_[p]=!0,e[p].forEach(([T,b])=>{d[p]+b<d[T]&&(d[T]=d[p]+b,g[T]=p)})}let x=[];for(let p=u;p>=0;p=g[p])x.unshift(t[p]);return x.length&&x[0]===t[f]?x:[t[u]]}function h(f,u){let d=0,g=1/0;return t.forEach((_,x)=>{let p=Math.hypot(_.x-f,_.z-u);p<g&&(g=p,d=x)}),d}return{nodes:t,doorNodes:c,path:l,nearest:h}}var ka=[[0,4870304,12633855,.8,1.35,1],[5,5199526,12633855,.8,1.35,1],[6,16305590,16763296,1.3,1.1,.4],[7.5,12575733,16774374,2.3,1.55,0],[16.5,12575733,16774374,2.3,1.55,0],[18,16236724,16760470,1.3,1.1,.4],[19.2,5265318,12633855,.8,1.35,1],[24,4870304,12633855,.8,1.35,1]];function rd(i){let t=0;for(;t<ka.length-2&&ka[t+1][0]<=i;)t++;let e=ka[t],n=ka[t+1],s=(i-e[0])/(n[0]-e[0]||1),r=new ne(e[1]),o=new ne(n[1]),a=new ne(e[2]),c=new ne(n[2]);return{sky:r.lerp(o,s),sun:a.lerp(c,s),power:Cn(e[3],n[3],s),amb:Cn(e[4],n[4],s),night:Cn(e[5],n[5],s)}}function Cy(i,t){t=t||{};let e=(i.clientWidth||innerWidth)<(i.clientHeight||innerHeight)*.9?"port":"land";Kf(e),Ph=[],Sh=[];let n=(()=>{let m=/[?&]hour=([\d.]+)/.exec(location.search);return m?Number(m[1]):null})();n==null&&t.timeMode==="day"&&(n=11),n==null&&t.timeMode==="night"&&(n=22);let s=new Jr({antialias:!0});s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.shadowMap.enabled=!0,s.shadowMap.type=La,s.domElement.className="village-3d",i.appendChild(s.domElement);let r=new Kr;r.fog=new ya(12575733,320,760);let o=new sn(26,1,.5,1400),a=new za(o,s.domElement);a.enableDamping=!0,a.dampingFactor=.08,a.minDistance=18,a.maxDistance=520,a.minPolarAngle=.15,a.maxPolarAngle=1.32,a.target.set(0,0,1.5),a.screenSpacePanning=!1,a.rotateSpeed=.7,a.panSpeed=1.1,a.keyPanSpeed=22,a.touches={ONE:li.PAN,TWO:li.DOLLY_PAN};{let m=s.domElement,y=new Map,w=null,I=!1,G=new L,Y=new vs,v=new L,H=new L,ht=()=>{let ot=Array.from(y.values());return{a:ot[0],b:ot[1],mx:(ot[0].x+ot[1].x)/2,my:(ot[0].y+ot[1].y)/2,d:Math.hypot(ot[1].x-ot[0].x,ot[1].y-ot[0].y),ang:Math.atan2(ot[1].y-ot[0].y,ot[1].x-ot[0].x)}};m.addEventListener("pointerdown",ot=>{if(!(I||ot.pointerType!=="touch"))if(ot.isPrimary&&(y.clear(),w=null),y.set(ot.pointerId,{x:ot.clientX,y:ot.clientY}),y.size===2){ot.stopImmediatePropagation();let Gt=Array.from(y.entries()).find(([Ne])=>Ne!==ot.pointerId);if(Gt){I=!0;try{m.dispatchEvent(new PointerEvent("pointerup",{pointerId:Gt[0],pointerType:"touch",isPrimary:!0,clientX:Gt[1].x,clientY:Gt[1].y,bubbles:!0}))}catch{}I=!1}let ve=ht();w={last:ve,moved:0,mode:"",y0a:ve.a.y,y0b:ve.b.y,x0:ve.mx,d0:ve.d}}else y.size>2&&ot.stopImmediatePropagation()},{capture:!0}),m.addEventListener("pointermove",ot=>{if(I||ot.pointerType!=="touch"||!y.has(ot.pointerId)||(y.get(ot.pointerId).x=ot.clientX,y.get(ot.pointerId).y=ot.clientY,!w||y.size<2)||(ot.stopImmediatePropagation(),!a.enabled))return;let Gt=ht(),ve=w.last;if(w.moved+=Math.hypot(Gt.mx-ve.mx,Gt.my-ve.my)+Math.abs(Gt.d-ve.d),!w.mode&&w.moved>22){let Ne=Gt.a.y-w.y0a,Xn=Gt.b.y-w.y0b,si=(Ne+Xn)/2,To=Ne*Xn>0&&Math.min(Math.abs(Ne),Math.abs(Xn))>.3*Math.max(Math.abs(Ne),Math.abs(Xn));w.mode=To&&Math.abs(Gt.mx-w.x0)<Math.abs(si)*.7&&Math.abs(Gt.d-w.d0)<Math.max(24,Math.abs(si)*.6)?"tilt":"free"}if(G.copy(o.position).sub(a.target),w.mode==="tilt")Y.setFromVector3(G),Y.phi=Math.max(a.minPolarAngle,Math.min(a.maxPolarAngle,Y.phi-(Gt.my-ve.my)*.006)),G.setFromSpherical(Y),o.position.copy(a.target).add(G);else if(w.mode==="free"){let Ne=Gt.ang-ve.ang;Ne>Math.PI&&(Ne-=Math.PI*2),Ne<-Math.PI&&(Ne+=Math.PI*2),G.applyAxisAngle(Ve.DEFAULT_UP,Ne);let Xn=Math.max(a.minDistance,Math.min(a.maxDistance,G.length()*(ve.d/Math.max(1,Gt.d))));G.setLength(Xn),o.position.copy(a.target).add(G),o.getWorldDirection(H),H.y=0,H.normalize(),v.crossVectors(H,o.up).normalize();let si=2*Xn*Math.tan(o.fov*Math.PI/360)/(m.clientHeight||innerHeight);c.copy(v).multiplyScalar(-(Gt.mx-ve.mx)*si).addScaledVector(H,(Gt.my-ve.my)*si*1.4),a.target.add(c),o.position.add(c)}w.last=Gt,a.update()},{capture:!0});let dt=ot=>{I||ot.pointerType!=="touch"||(w&&y.has(ot.pointerId)&&ot.stopImmediatePropagation(),y.delete(ot.pointerId),y.size<2&&(w=null))};m.addEventListener("pointerup",dt,{capture:!0}),m.addEventListener("pointercancel",dt,{capture:!0});let Ht=ot=>{ot.pointerType==="touch"&&ot.target!==m&&(y.delete(ot.pointerId),y.size<2&&(w=null))};window.addEventListener("pointerup",Ht,!0),window.addEventListener("pointercancel",Ht,!0)}s.domElement.tabIndex=0,s.domElement.style.outline="none",a.listenToKeyEvents(s.domElement);let c=new L,l=new L,h=new L;function f(m,y){o.getWorldDirection(h),h.y=0,h.normalize(),l.crossVectors(h,o.up).normalize();let w=o.position.distanceTo(a.target)*.0016;c.copy(l).multiplyScalar(m*w).addScaledVector(h,-y*w),a.target.add(c),o.position.add(c)}s.domElement.addEventListener("wheel",m=>{!m.ctrlKey&&m.deltaMode===0&&(Math.abs(m.deltaX)>.01||Math.abs(m.deltaY)<40)&&(m.preventDefault(),m.stopImmediatePropagation(),f(m.deltaX,m.deltaY))},{capture:!0,passive:!1});function u(){let m=a.target,y=mn.w/2,w=mn.d/2,I=Math.max(-y,Math.min(y,m.x)),G=Math.max(-w,Math.min(w,m.z));(I!==m.x||G!==m.z||m.y!==0)&&(c.set(I-m.x,-m.y,G-m.z),m.add(c),o.position.add(c))}a.addEventListener("change",u);let d=new lo(16777215,12048288,1);r.add(d);let g=new uo(16777215,1.5);g.castShadow=!0,g.shadow.mapSize.set(2048,2048),Object.assign(g.shadow.camera,{left:-mn.a-6,right:mn.a+6,top:mn.b+10,bottom:-mn.b-10,near:1,far:260}),g.shadow.bias=-6e-4,g.shadow.normalBias=.03,r.add(g),r.add(g.target);let _=[],x=new Hn({uniforms:{top:{value:new ne(9356778)},bottom:{value:new ne(14216952)}},vertexShader:"varying float vY; void main(){ vY = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 bottom; varying float vY; void main(){ float k = smoothstep(-0.15, 0.75, vY); gl_FragColor = vec4(mix(bottom, top, k), 1.0); }",side:dn,depthWrite:!1,fog:!1}),p=new St(new on(480,24,14),x);p.renderOrder=-1,r.add(p);let T=new St(new Be(7,7,7),new $e({color:16771496,fog:!1})),b=new St(new Be(5,5,5),new $e({color:16052735,fog:!1}));r.add(T,b);let M=new ze,B=[];for(let m=0;m<700;m++){let y=Math.random()*Math.PI*2,w=Math.random()*1.55;B.push(Math.cos(y)*Math.sin(w)*450,Math.cos(w)*450+20,Math.sin(y)*Math.sin(w)*450)}M.setAttribute("position",new ue(B,3));let P=new ms(M,new Zi({color:16777215,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1}));r.add(P);let D=[];for(let m=0;m<6;m++){let y=new Kt,w=new _e({color:16777215,transparent:!0,opacity:.92});for(let I=0;I<5;I++){let G=new St(new Be(Wt(3,6),1.5,Wt(3,5)),w);G.position.set(I*2.6-5,0,Wt(-1.5,1.5)),y.add(G)}y.position.set(Wt(-90,90),Wt(34,46),Wt(-90,-40)),y.userData.speed=Wt(.6,1.4),y.userData.mat=w,D.push(y),r.add(y)}let F=new Kt;F.mat=new _e({color:16777215,transparent:!0,opacity:.9,fog:!1});for(let m=0;m<11;m++){let y=m/11*Math.PI*2+Wt(-.15,.15),w=gr(y)+Wt(1,7),I=[];for(let Y=0;Y<5;Y++){let v=new Be(Math.round(Wt(2,5)),1,Math.round(Wt(2,4)));v.translate(Math.round(Y*2.2-4.4),0,Math.round(Wt(-1,1))),I.push(v)}let G=new St(Ba(I,!1),F.mat);I.forEach(Y=>Y.dispose()),G.position.set(Math.cos(y)*w,Wt(-9,-3),-Math.sin(y)*w),G.rotation.y=y+Math.PI/2,G.scale.setScalar(Wt(.9,1.5)),F.add(G)}r.add(F);let A=[];[{t:Math.PI*.97,gap:9,r:4.5,y:-3,deco:(y,w,I)=>{go(y,-1,1,-1,"oak",w),go(y,2,1,1,"pine",w),y.set(-2,1,2,Ot.LEAF_M),y.plant(.5,1,2.5,gt.FL_PINK)}},{t:.06,gap:10,r:4,y:-2,deco:(y,w,I)=>{for(let G=0;G<18;G++){let Y=w()*6.28,v=Math.sqrt(w())*3;y.plant(Math.floor(Math.cos(Y)*v)+.5,1,Math.floor(Math.sin(Y)*v)+.5,[gt.FL_PINK,gt.FL_WHITE,gt.FL_YELLOW,gt.FL_BLUE][G%4],.9)}I(U(2,.25,.6,0,.5,1.5,-.7,Je(gt.PLANKS))),I(U(2,.6,.15,0,.5,1.85,-1,Je(gt.PLANKS))),[-.35,1.35].forEach(G=>I(U(.2,.5,.6,0,G,1.25,-.7,Je(gt.LOG))))}},{t:Math.PI*.62,gap:7,r:2.5,y:4.5,deco:(y,w)=>{go(y,0,1,0,"pine",w),y.set(1,1,1,Ot.MOSSY)}},{t:-Math.PI*.3,gap:8,r:2.3,y:2.2,deco:(y,w,I)=>{[[0,0,15231594],[1,1,16757611]].forEach(([G,Y,v])=>{I(U(.35,.6,.35,16774888,G+.5,1.3,Y+.5)),I(U(.9,.35,.9,v,G+.5,1.75,Y+.5))}),y.set(-1,1,0,Ot.LEAF_G)}}].forEach((y,w)=>{let I=Gf(31+w*7),G=y.r,Y=Math.ceil(G)+2,v=new mo(-Y,-Math.ceil(G*2.4)-3,-Y,Y*2,Math.ceil(G*2.4)+16,Y*2);for(let Ht=-Y;Ht<Y;Ht++)for(let ot=-Y;ot<Y;ot++){let Gt=Math.hypot(Ht+.5,ot+.5)/G;if(Gt>1)continue;let ve=-Math.round(1+G*1.9*Math.pow(1-Gt,.7)+I()*1.2);for(let Ne=ve;Ne<1;Ne++)v.set(Ht,Ne,ot,Ne===0?Ot.GRASS:Ne>-3?Ot.DIRT:Ot.STONE)}let H=new Kt;y.deco(v,I,Ht=>H.add(Ht));let ht=v.build();H.add(ht.solid,ht.water,ht.plants);let dt=gr(y.t)+y.r+y.gap;H.position.set(Math.cos(y.t)*dt,y.y,-Math.sin(y.t)*dt),H.userData.y0=y.y,H.userData.ph=w*1.7,r.add(H),A.push(H)});let S=(()=>{let m=document.createElement("canvas");m.width=m.height=64;let y=m.getContext("2d"),w=y.createRadialGradient(32,32,0,32,32,32);w.addColorStop(0,"rgba(255,255,255,0.85)"),w.addColorStop(.3,"rgba(255,255,255,0.22)"),w.addColorStop(1,"rgba(255,255,255,0)"),y.fillStyle=w,y.fillRect(0,0,64,64),y.fillStyle="#ffffff",y.beginPath();for(let G=0;G<10;G++){let Y=G/10*Math.PI*2-Math.PI/2,v=G%2?8:20;y.lineTo(32+Math.cos(Y)*v,32+Math.sin(Y)*v)}y.closePath(),y.fill();let I=new rn(m);return I.colorSpace=Ue,I})(),z=(()=>{let m=document.createElement("canvas");m.width=m.height=32;let y=m.getContext("2d");y.fillStyle="#ffffff",y.beginPath();for(let I=0;I<8;I++){let G=I/8*Math.PI*2,Y=I%2?2.5:15;y.lineTo(16+Math.cos(G)*Y,16+Math.sin(G)*Y)}y.closePath(),y.fill();let w=new rn(m);return w.colorSpace=Ue,w})(),Q=[0,1,2].map(m=>{let y=[],w=[],I=new ne,G=[16773544,16762076,14273791,12905727];for(let H=0;H<34;H++){let ht=Math.random()*Math.PI*2,dt=.15+Math.random()*1.2;y.push(Math.cos(ht)*Math.sin(dt)*440,Math.cos(dt)*440+20,Math.sin(ht)*Math.sin(dt)*440),I.set(G[(H+m)%4]),w.push(I.r,I.g,I.b)}let Y=new ze;Y.setAttribute("position",new ue(y,3)),Y.setAttribute("color",new ue(w,3));let v=new ms(Y,new Zi({size:11+m*3,map:S,vertexColors:!0,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,fog:!1}));return v.userData={base:0,ph:m*2.1},r.add(v),v}),O=new ps(new qi({map:(()=>{let m=document.createElement("canvas");m.width=128,m.height=16;let y=m.getContext("2d"),w=y.createLinearGradient(0,0,128,0);return w.addColorStop(0,"rgba(255,255,255,0)"),w.addColorStop(1,"rgba(255,248,220,1)"),y.fillStyle=w,y.beginPath(),y.moveTo(0,8),y.lineTo(120,4),y.arc(120,8,4,-Math.PI/2,Math.PI/2),y.closePath(),y.fill(),new rn(m)})(),transparent:!0,opacity:0,depthWrite:!1,fog:!1}));O.scale.set(36,4.5,1),r.add(O);let V={t:-1,wait:6,from:new L,dir:new L},q=new Kt;r.add(q);let X=Gf(5),ut=new Ve,tt=Math.ceil(mn.a)+2,Mt=Math.ceil(mn.b)+2,yt=new mo(-tt,-26,-Mt,tt*2,48,Mt*2),Nt=m=>(m[0]===m[2]?Math.abs(m[3]-m[1]):Math.abs(m[2]-m[0]))>=40,ie=(m,y)=>Nn.some(w=>{let[I,G,Y,v]=w,H=(Nt(w)?jf:fy)/2;return m>=Math.min(I,Y)-H&&m<=Math.max(I,Y)+H&&y>=Math.min(G,v)-H&&y<=Math.max(G,v)+H}),me=(m,y)=>{let w=Math.hypot((m-$t.x)/($t.rx+2.6),(y-$t.z)/($t.rz+2.6));return Math.abs(w-1)*($t.rx+2.6)<.8},lt=(m,y)=>{let w=0,I=-1;return xr.forEach(([G,Y,v,H],ht)=>{let dt=Math.hypot(m-G,y-Y);if(dt<v){let Ht=H*Math.pow(Math.max(0,1-Math.pow(dt/v,1.6129032258064517)),.5882352941176471);Ht>w&&(w=Ht,I=ht)}}),{h:w,i:I}},bt=(m,y)=>1.4+1.3*Math.min(1,Math.hypot(m-_r.x,y-_r.z)/22),Ft=new Map;for(let m=-tt;m<tt;m++)for(let y=-Mt;y<Mt;y++){let w=m+.5,I=y+.5;if(!ws(w,I,.2))continue;let G=Math.round(Sn(w,I)),Y="grass",v=lt(w,I);if(v.h>G+.6){let dt=xr[v.i][3];G=Math.max(G,Math.round(v.h-.2)),Y=G>dt*.66?"snow":G>dt*.25?"rock":"grass"}let H=Math.max(0,1-Math.hypot(w,I)/gr(Math.atan2(I,w))),ht=-1-Math.round(2+17*Math.pow(H,.55)+(X()-.5)*2.4);for(let dt=ht;dt<G;dt++){let Ht=G-1-dt,ot=Ht===0?Y==="snow"?Ot.SNOW:Y==="rock"?X()<.25?Ot.MOSSY:Ot.STONE:Ot.GRASS:Ht<3&&Y==="grass"?Ot.DIRT:dt<ht+3?X()<.55?Ot.DEEP:Ot.STONE:X()<.12?Ot.CLAY:X()<.08?Ot.GRAVEL:Ot.STONE;yt.set(m,dt,y,ot)}if(Y==="grass"&&yt.tint.set(yt.idx(m,G-1,y),.94+.08*Math.sin(w*.21+I*.13)*Math.cos(I*.17-w*.05)+X()*.03),Ft.set(m+","+y,G),G<=0){let dt=Ts(w,I),Ht=bt(w,I);if(Ci(w,I,0)||dt<Ht/2){let ot=Ci(w,I,-1.2)?2:1;for(let Gt=1;Gt<=ot;Gt++)yt.set(m,-Gt,y,Ot.WATER);yt.set(m,-ot-1,y,Ot.SAND),yt.set(m,-ot-2,y,Ot.SAND),Ft.set(m+","+y,-1);continue}if((Ci(w,I,1.2)||dt<Ht/2+.9)&&!ie(w,I)){yt.set(m,-1,y,Ot.SAND),yt.set(m,-2,y,Ot.SAND);continue}}(ie(w,I)||me(w,I)||_o(w,I))&&yt.set(m,G-1,y,Ot.PATH)}let wt=(m,y)=>{let w=Ft.get(Math.floor(m)+","+Math.floor(y));return w==null?0:w};{let m=_r,y=-m.dz,w=m.dx;for(let I=m.r-.5;I>.5;I-=.5)for(let G=-.5;G<=.5;G+=1){let Y=Math.floor(m.x+m.dx*I+y*G),v=Math.floor(m.z+m.dz*I+w*G),H=Ft.get(Y+","+v);H==null||H<=0||H>m.h*.7||(yt.set(Y,H-1,v,Ot.WATER),yt.set(Y,H-2,v,Ot.WATER))}}let qt=Ty(q,!0),Qt=-1+.88,jt=new St(new Pe(1,1,.1,32),Ch);jt.scale.set($t.rx,1,$t.rz),jt.position.set($t.x,Qt,$t.z),q.add(jt);{let m=new _e({map:hi(gt.LILY),transparent:!0,alphaTest:.5,side:ln});[[-4.5,1],[3.5,-1.6],[5.2,1.2],[-2.6,-1.4]].forEach(([y,w])=>{let I=new St(new Ri(1,1),m);I.rotation.x=-Math.PI/2,I.rotation.z=y,I.position.set($t.x+y*$t.rz/4,Qt+.02,$t.z+w*$t.rz/4),q.add(I)})}for(let m=0;m<14;m++){let y=X()*6.28,w=$t.x+Math.cos(y)*($t.rx+.7),I=$t.z+Math.sin(y)*($t.rz+.7);yt.plant(w,0,I,gt.REED,1.1)}let le=(()=>{let m=new Kt;m.position.set(Math.floor($t.x)+.5,0,Math.floor($t.z)+.5),q.add(m);let y=new _e({map:hi(gt.COBBLE)}),w=new _e({map:hi(gt.WATER),transparent:!0,opacity:.85});for(let H=-1;H<=1;H++)for(let ht=-1;ht<=1;ht++)(H||ht)&&m.add(U(1,.5,1,0,H,-.25+.1,ht,y));m.add(U(1,1.6,1,0,0,.3,0,y)),m.add(U(1.6,.3,1.6,0,0,1.15,0,y));let I=U(1.2,.08,1.2,0,0,1.33,0,w);m.add(I);let G=new $e({color:14677247,transparent:!0,opacity:.85,depthWrite:!1}),Y=new St(new Be(.18,.8,.18),G);Y.position.y=1.75,m.add(Y);let v=[];for(let H=0;H<14;H++){let ht=new St(new Be(.1,.1,.1),G);m.add(ht),v.push({m:ht,a:H/14*Math.PI*2,t:H/14})}return{g:m,jet:Y,drops:v,rimR:1.3}})(),ft=Ay(q,X,!0),Et=(m,y)=>ws(m,y,2.2)&&!Ci(m,y,1.5)&&!Vf(m,y,.8)&&!yh(m,y,.6)&&Ts(m,y)>2.4&&!qf(m,y)&&!_o(m,y)&&!Nn.some(([w,I,G,Y])=>m>=Math.min(w,G)-ui-.3&&m<=Math.max(w,G)+ui+.3&&y>=Math.min(I,Y)-ui-.3&&y<=Math.max(I,Y)+ui+.3)&&!Ze.some(([w,I])=>Math.abs(m-w)<3.6&&Math.abs(y-I)<3.8)&&!(Math.abs(m-bn[0])<6&&Math.abs(y-bn[1])<5.4)&&lt(m,y).h<.5,N=(t.houses||[]).findIndex(m=>m.id==="love"),kt=(m,y)=>{if(wn)return Vf(m,y,1.2);if(N<0||!Ze[N])return!1;let[w,I]=Ze[N];return Math.abs(m-w)<7&&y>I+2.5&&y<I+12||Math.abs(y-I)<3.5&&Math.abs(m-w)<8.5||Math.abs(m-w)<3.5&&y<I&&y>I-8},vt=[],Vt=(m,y)=>{let w=m+","+y,I=Ft.get(w);I!=null&&(yt.set(m,I-1,y,Ot.DIRT),yt.set(m,I,y,Ot.GRASS),yt.tint.set(yt.idx(m,I,y),.97+X()*.05),Ft.set(w,I+1))},j=(m,y,w)=>{let I=Math.floor(m),G=Math.floor(y);if(!Et(I+.5,G+.5)||kt(I+.5,G+.5)||vt.some(([H,ht])=>Math.hypot(H-I,ht-G)<3.2))return!1;let Y=w||(X()<.1?"cherry":["oak","oak","birch","mint","pine"][X()*5|0]);go(yt,I,Ft.get(I+","+G)||0,G,Y,X);let v=new Ve;return v.position.set(I+.5,0,G+.5),v.userData.post=1.2,q.add(v),vt.push([I,G]),!0};for(let y=0;y<20;y++){let w=(y+.5+(X()-.5)*.35)/20*Math.PI*2,I=gr(w)-5.5-X()*2,G=Math.cos(w)*I,Y=Math.sin(w)*I,v=2.5+X()*1.5;if(Et(G,Y)&&!kt(G,Y)){for(let dt=Math.floor(G-v);dt<=G+v;dt++)for(let Ht=Math.floor(Y-v);Ht<=Y+v;Ht++)Math.hypot(dt+.5-G,(Ht+.5-Y)*1.2)<v&&Et(dt+.5,Ht+.5)&&!kt(dt+.5,Ht+.5)&&Vt(dt,Ht);let ht=new Ve;ht.position.set(G,0,Y),ht.userData.post=v,q.add(ht)}let H=2+(X()*3|0);for(let ht=0;ht<H*4&&H>0;ht++){let dt=X()*6.28,Ht=X()*3.4;j(G+Math.cos(dt)*Ht,Y+Math.sin(dt)*Ht)&&H--}for(let ht=0;ht<3;ht++){let dt=X()*6.28,Ht=2.2+X()*2,ot=Math.floor(G+Math.cos(dt)*Ht),Gt=Math.floor(Y+Math.sin(dt)*Ht);if(!Et(ot+.5,Gt+.5)||kt(ot+.5,Gt+.5)||yt.get(ot,wt(ot,Gt),Gt))continue;let ve=wt(ot,Gt);yt.set(ot,ve,Gt,X()<.5?Ot.LEAF_G:Ot.LEAF_M),X()<.4&&yt.plant(ot+.5,ve+1,Gt+.5,[gt.FL_PINK,gt.FL_WHITE,gt.FL_YELLOW][X()*3|0],.8)}}for(let m=0,y=0;m<600&&y<10;m++)j((X()-.5)*mn.w,(X()-.5)*mn.d,["oak","birch","mint"][X()*3|0])&&y++;{let m=[gt.FL_PINK,gt.FL_WHITE,gt.FL_YELLOW,gt.FL_BLUE,gt.FL_LAV];for(let y=0,w=0;y<6e3&&w<520;y++){let I=(X()-.5)*(mn.w-4),G=(X()-.5)*(mn.d-4);if(!Et(I,G)||kt(I,G))continue;let Y=Math.floor(I),v=Math.floor(G),H=wt(Y,v);yt.get(Y,H,v)||(yt.plant(Y+.5,H,v+.5,X()<.32?m[X()*m.length|0]:gt.TUFT,.8+X()*.3),w++)}for(let y=0,w=0;y<800&&w<9;y++){let I=Math.floor((X()-.5)*(mn.w-8)),G=Math.floor((X()-.5)*(mn.d-8));if(!Et(I+.5,G+.5)||kt(I+.5,G+.5))continue;let Y=wt(I,G),v=X()<.5?Ot.COBBLE:Ot.MOSSY;yt.set(I,Y,G,v),X()<.6&&yt.set(I+1,Y,G,Ot.STONE),X()<.4&&yt.set(I,Y+1,G,v);let H=new Ve;H.position.set(I+1,0,G+.5),H.userData.post=1.2,q.add(H),w++}}{let m=yt.build(.88);q.add(m.solid,m.water,m.plants)}let pt=[0,1,2].map(m=>{let y=[];for(let G=0;G<9;G++){let Y=Math.random()*6.283,v=Math.sqrt(Math.random())*.85;y.push($t.x+Math.cos(Y)*$t.rx*v,Qt+.15,$t.z+Math.sin(Y)*$t.rz*v)}for(let G=0;G<7;G++){let Y=qt.curve.getPointAt(Math.random());y.push(Y.x+(Math.random()-.5)*1.2,Qt+.12,Y.z+(Math.random()-.5)*1.2)}let w=new ze;w.setAttribute("position",new ue(y,3));let I=new ms(w,new Zi({size:.9,map:z,color:[16777215,16774072,16766698][m],transparent:!0,opacity:0,depthWrite:!1}));return I.userData={base:.6,ph:m*2.1},q.add(I),I}),ct=[];Nn.forEach(([m,y,w,I])=>[.3,.72].forEach(G=>{let Y=m===w,v=Cn(m,w,G)+(Y?ui+.6:0),H=Cn(y,I,G)+(Y?0:ui+.6);Ze.some(([ht,dt])=>Math.abs(v-ht)<3.6&&Math.abs(H-dt)<4.2)||Math.abs(v-bn[0])<6.2&&Math.abs(H-bn[1])<6||Ci(v,H,1.5)||kt(v,H)||!ws(v,H,2)||yh(v,H,.5)||Ts(v,H)<2||_o(v,H)||qf(v,H)||ct.push([v,H])})),ct.slice(0,7).forEach(([m,y],w)=>{let I=vy();if(I.position.set(m,Sn(m,y),y),I.userData.post=.3,q.add(I),w%2===0&&_.length<3){let G=new ho(16763255,0,12,1.6);G.position.set(m,Sn(m,y)+2.7,y),q.add(G),_.push(G)}});let R=[],E=[];(t.houses||[]).forEach((m,y)=>{if(!Ze[y])return;let w=m.id==="love"?my():m.special==="arcade"?gy():m.special==="store"?xy():Wf(m,!1);w.position.set(Ze[y][0],Sn(Ze[y][0],Ze[y][1]),Ze[y][1]),w.rotation.y=mr[y]||0,w.userData.face=mr[y]||0,w.userData.id=m.id,q.add(w),R.push(w);let I=w.userData.face;E.push({x:Ze[y][0]+Math.sin(I)*w.userData.doorZ,z:Ze[y][1]+Math.cos(I)*w.userData.doorZ})});let k=yy(q,wn&&mr[wn.house]||0),K=Wf(null,!0);K.position.set(bn[0],Sn(bn[0],bn[1]),bn[1]),K.userData.id="hall",q.add(K),R.push(K);let st={x:bn[0],z:bn[1]+K.userData.doorZ};E.push(st);let $=Ry(E),Pt=$.doorNodes[$.doorNodes.length-1];(function(){q.updateMatrixWorld(!0);let y=new Set,w=Y=>{Y&&Y.traverse(v=>y.add(v))};w(jt),ft.ducks.forEach(Y=>w(Y.g)),R.forEach(Y=>{w(Y.userData.hinge),w(Y.userData.flag),w(Y.userData.bell)}),w(k.car),w(le.jet),le.drops.forEach(Y=>w(Y.m));let I=new Map,G=[];q.traverse(Y=>{if(!Y.isMesh||Y.isInstancedMesh||y.has(Y)||Y.userData.keepBatch||Array.isArray(Y.material)||Y.material.transparent)return;let v=Y.geometry.clone();Object.keys(v.attributes).forEach(H=>{H!=="position"&&H!=="normal"&&H!=="uv"&&v.deleteAttribute(H)}),v.attributes.uv&&(v.index&&(v=v.toNonIndexed()),v.clearGroups(),v.applyMatrix4(Y.matrixWorld),I.has(Y.material)||I.set(Y.material,[]),I.get(Y.material).push(v),G.push(Y))}),G.forEach(Y=>Y.parent.remove(Y)),I.forEach((Y,v)=>{let H=Ba(Y,!1);if(Y.forEach(dt=>dt.dispose()),!H)return;let ht=new St(H,v);ht.castShadow=!0,ht.receiveShadow=!0,q.add(ht)})})();let at=[],it={her:null,him:null,home:null,kiss:0},At=m=>$.nodes[$.doorNodes[m]],_t={},Lt=m=>_t[m]||0;function te(m,y,w){let I=nd(m);q.add(I.g);let G=At(y);return I.g.position.set(G.x+Wt(-.6,.6),0,G.z+Wt(0,.4)),Object.assign(I,{kind:"person",i:at.length,home:y,path:[],speed:Wt(1.35,1.75),wait:Wt(0,3),t:Wt(0,6),v:0,goal:"",inside:!1},w||{}),at.push(I),I}(t.houses||[]).forEach((m,y)=>{if(!(y>=Ze.length))if(m.id==="love")it.home=y,it.her=te(Th.her,y,{love:"her"}),it.him=te(Th.him,y,{love:"him"});else{let w=Wa[y]||Wa[y%9]||Wa[0];te(w,y,{hallReg:!!w.uniform})}});let Jt=Object.assign(Ey(),{kind:"cat",path:[],speed:1.1,wait:2,t:0,sit:!0}),zt=Object.assign(by(),{kind:"dog",path:[],speed:2.2,wait:1,t:0,buddy:0});{let m=$.nodes[$.doorNodes[2]],y=$.nodes[$.doorNodes[$.doorNodes.length-1]];Jt.g.position.set(m.x+1.5,0,m.z+.6),zt.g.position.set(y.x+3,0,y.z+.8)}q.add(Jt.g,zt.g);let ge=[0,1,2,3].map(m=>{let y=Sy(m);return q.add(y),{g:y,a:Wt(0,6.28),r:Wt(.62,.92),sp:Wt(.25,.5)*(m%2?1:-1),jump:0,jx:0,jz:0}});function ae(){let m=document.createElement("canvas");m.width=128,m.height=64;let y=m.getContext("2d");y.font="bold 34px sans-serif",y.fillStyle="#7a6a9a",y.fillText("z",18,52),y.font="bold 26px sans-serif",y.fillText("z",52,36),y.font="bold 20px sans-serif",y.fillText("z",82,22);let w=new ps(new qi({map:new rn(m),transparent:!0,depthWrite:!1}));return w.scale.set(1.1,.55,1),w.visible=!1,q.add(w),w}Jt.zzz=ae(),zt.zzz=ae();let Ee=id("\u2665","#ff6f91",.9,.45);q.add(Ee);let W=new L,It=0,rt=[],mt=new on(.09,6,5);function Bt(m,y){for(let w=0;w<7;w++){let I=Math.random()*6.28,G=Math.random()*.8,Y=m+Math.cos(I)*G,v=y+Math.sin(I)*G*.7;if(!Ci(Y,v,-.8))continue;let H=new St(mt,re(w%2?13208410:14723437));H.position.set(Y,1.6+Math.random()*.6,v),q.add(H),rt.push({m:H,vy:0,life:25})}}let Dt=[];function oe(m,y,w){let I=new St(new ro(.15,.25,18),new $e({color:16777215,transparent:!0,opacity:.8,side:ln}));I.rotation.x=-Math.PI/2,I.position.set(m,-.105,y),I.userData.size=w,q.add(I),Dt.push(I)}let ye=new St(new ro(.3,.45,20),new $e({color:16777215,transparent:!0,opacity:0,side:ln}));ye.rotation.x=-Math.PI/2,q.add(ye);let Ke=[16758465,14273008,16375946,11591910].map((m,y)=>{let w=wy(m);return q.add(w),{g:w,ph:y*1.7,cx:Wt(-25,25),cz:Wt(-15,15)}}),be=new ze,Tn=[];for(let m=0;m<40;m++)Tn.push(Wt(-30,30),Wt(1,3),Wt(-20,20));be.setAttribute("position",new ue(Tn,3));let Pn=new ms(be,new Zi({color:16773792,size:.35,transparent:!0,opacity:0}));q.add(Pn);let ni=0;function Ii(){let m=new Date;return m.getHours()+m.getMinutes()/60}function On(m){return m>=23||m<6.5?"sleep":m<7?"morning":m<11.5?"work":m<13?"lunch":m<16.5?"work":m<21?"evening":"home"}function Li(m){let y=m%18,w=Math.floor(y/6),I=y%6;return{x:st.x+(I-2.5)*1.2+w%2*.6,z:st.z+1.3+w*1.1}}function _n(m,y,w){if(m.goal=w,m.path=vn(m,y),!m.path.length){let I=$.nearest(m.g.position.x,m.g.position.z),G=$.nearest(y.x,y.z);m.path=$.path(I,G).concat([y])}}function As(m){let y=At(m),w=mr[m]||0;return{x:y.x-Math.sin(w)*.9,z:y.z-Math.cos(w)*.9,f:w}}function In(m){let y=As(m.home);m.inside=!1,m.g.visible=!0,m.g.position.set(y.x+Wt(-.3,.3),0,y.z),m.g.rotation.set(0,y.f,0)}function Di(m,y){let w=As(m.home);_n(m,{x:w.x,z:w.z},"in"),m.stay=y}let ji=R.findIndex(m=>m.userData.alwaysLit),Rs=null,Qi=null;function vo(){if(!Rs){Rs=Ze.map((m,y)=>{let w=At(y);return[[-1.7,-.5],[1.7,-.5],[-.9,.2],[.9,.2]].map(([I,G])=>({x:w.x+I,z:w.z+G})).filter(I=>!Yt(I.x,I.z,.15))}),Qi=[];for(let m=0;m<18;m++){let y={x:$t.x+Math.cos(m/18*6.283)*($t.rx+2.2),z:$t.z+Math.sin(m/18*6.283)*($t.rz+1.9)};Yt(y.x,y.z,.2)||Qi.push(y)}}}let Mo=m=>m[Math.floor(Math.random()*m.length)];function Cs(m){vo();let y=Rs[m.home];return y.length?Mo(y):At(m.home)}function C(m,y){vo();let w=Math.random();if(y==="lunch"&&ji>=0&&w<.6){let I=At(ji);return{x:I.x+Wt(-2.6,2.6),z:I.z+Wt(0,.8)}}if(y==="lunch"&&w<.75)return Li(Math.floor(Wt(0,18)));if(w<.4&&Qi.length)return Mo(Qi);if(w<.85){let I=At(Math.floor(Wt(0,Ze.length)));return{x:I.x+Wt(-1,1),z:I.z+Wt(0,.5)}}return Li(Math.floor(Wt(0,18)))}function Z(m){if(m.love==="him")return;let y=On(Ii());if(m.love==="her")return et(m,y);let w=Lt(m.home)>0;if(m.helper&&Lt(m.home)<m.helper){m.inside&&In(m),_n(m,{x:st.x,z:st.z},"leave");return}if(ni&&!w&&y!=="sleep"&&y!=="home"&&!m.helper){m.inside&&In(m),(m.goal!=="hall"||m.path.length)&&_n(m,Li(m.i),"hall"),m.wait=Wt(3,6);return}if(m.hallReg&&y==="work"&&!w&&!m.helper){if(m.inside&&In(m),m.goal==="hallwork"){_n(m,Cs(m),"work"),m.wait=Wt(6,14);return}if(m.goal==="work"&&Math.random()<.5){Di(m,Wt(4,8));return}_n(m,Li(m.i),"hallwork"),m.wait=Wt(10,22);return}if(w||y==="work"){if(m.inside){In(m),_n(m,Cs(m),"work");return}if(m.goal==="work"){Di(m,Wt(3,w?6:10));return}_n(m,Cs(m),"work");return}if(y==="sleep"||y==="home"){if(m.inside){m.wait=Wt(20,40);return}Di(m,Wt(20,40));return}if(m.inside)In(m);else if(Math.random()<.15){Di(m,Wt(5,12));return}_n(m,C(m,y),"stroll"),m.wait=Wt(2,6)}function et(m,y){let w=it.him;if(y==="sleep"||y==="home"||Ii()>=20.5){if(nt(),m.inside){m.wait=Wt(30,60);return}Di(m,Wt(30,60));return}if(m.inside&&(In(m),In(w),w.g.position.x+=.7),m.sitting){nt(),_n(m,C(m,y),"stroll"),m.wait=Wt(2,5);return}if(Rt&&Math.random()<.55){_n(m,Rt.userData.front,"swing");return}_n(m,C(m,y),"stroll"),m.wait=Wt(2,5)}function nt(){[it.her,it.him].forEach(m=>{!m||!m.sitting||(m.sitting=!1,m.g.position.set(Rt.userData.front.x+(m.love==="her"?-.4:.4),0,Rt.userData.front.z),m.g.rotation.set(0,Rt.rotation.y,0))})}function J(m){m.goal==="in"?(m.inside=!0,m.g.visible=!1,m.wait=m.stay||10):m.goal==="work"?m.wait=Wt(6,12):m.goal==="swing"?(m.sitting=!0,m.wait=Wt(15,30)):m.goal==="leave"&&(q.remove(m.g),at.splice(at.indexOf(m),1))}function Tt(m,y){let w=it.her;if(w.inside){if(m.inside)return!1;let ve=As(m.home),Ne=ve.x-m.g.position.x,Xn=ve.z-m.g.position.z,si=Math.hypot(Ne,Xn);if(si<.15)return m.inside=!0,m.g.visible=!1,!1;let To=Math.min(si,w.speed*1.2*y);return m.g.position.x+=Ne/si*To,m.g.position.z+=Xn/si*To,m.g.rotation.y=Math.atan2(Ne,Xn),m.v=w.speed,!0}if(m.inside&&(In(m),m.g.position.x+=.7),w.sitting)return m.sitting=!0,!1;m.sitting=!1;let I=w.g.rotation.y,G=w.g.position.x-Math.cos(I)*.72,Y=w.g.position.z+Math.sin(I)*.72,v=G-m.g.position.x,H=Y-m.g.position.z,ht=Math.hypot(v,H);if(ht<.05){m.v=0;let ve=I-m.g.rotation.y;return ve=Math.atan2(Math.sin(ve),Math.cos(ve)),m.g.rotation.y+=ve*Math.min(1,y*6),!1}let dt=Math.min(w.speed*1.35,ht*4);m.v=(m.v||0)+(dt-(m.v||0))*Math.min(1,y*5);let Ht=Math.min(ht,m.v*y);m.g.position.x+=v/ht*Ht,m.g.position.z+=H/ht*Ht;let Gt=(ht>.35?Math.atan2(v,H):I)-m.g.rotation.y;return Gt=Math.atan2(Math.sin(Gt),Math.cos(Gt)),m.g.rotation.y+=Gt*Math.min(1,y*7),m.v>.15}{let m=On(Ii());(m==="sleep"||m==="home")&&at.forEach(y=>{y.inside=!0,y.g.visible=!1,y.wait=Wt(5,30)})}let Ct=R.filter(m=>m.userData.id!=="hall").map(m=>{let y=m.userData.size,w=m.userData.face||0,I=Math.abs(Math.sin(w))>.5;if(!y)return{x:m.position.x,z:m.position.z,hw:3.3,hd:2.6};let G=Math.cos(w)*y.cx,Y=-Math.sin(w)*y.cx;return{x:m.position.x+G,z:m.position.z+Y,hw:I?y.hd:y.hw,hd:I?y.hw:y.hd}}).concat([{x:bn[0],z:bn[1],hw:5.8,hd:4.1}]),Xt=[];q.children.forEach(m=>{m.userData.post&&Xt.push({x:m.position.x,z:m.position.z,r:m.userData.post})}),ft.posts.forEach(m=>Xt.push(m));function Yt(m,y,w){return w=w||.5,!ws(m,y,2.5)||yh(m,y,0)||Ts(m,y)<1.8&&!qt.bridges.some(I=>Math.hypot(I.x-m,I.z-y)<2.4)||Ci(m,y,.9+w)||Ct.some(I=>Math.abs(m-I.x)<I.hw+w&&Math.abs(y-I.z)<I.hd+w)?!0:Xt.some(I=>Math.hypot(m-I.x,y-I.z)<I.r+w*.6)}function se(m,y){let w=Math.ceil(Math.hypot(y.x-m.x,y.z-m.z)/.4);for(let I=1;I<=w;I++){let G=I/w;if(Yt(Cn(m.x,y.x,G),Cn(m.z,y.z,G),.45))return!1}return!0}let ce=(m,y,w)=>Nn.some(([I,G,Y,v])=>m>=Math.min(I,Y)-ui-w&&m<=Math.max(I,Y)+ui+w&&y>=Math.min(G,v)-ui-w&&y<=Math.max(G,v)+ui+w),Rt=null;if(k.blocks.forEach(m=>Ct.push(m)),k.posts.forEach(m=>Xt.push(m)),it.home!=null&&wn&&wn.house===it.home){let[m,y]=wn.swing,w=mr[it.home]||0;Rt=Yf(),Rt.position.set(m,Sn(m,y),y),Rt.rotation.y=w,q.add(Rt),Rt.userData.front={x:m+Math.sin(w)*1.25,z:y+Math.cos(w)*1.25},Ct.push({x:m,z:y,hw:1.55,hd:1.55}),Ct.push({x:m-Math.cos(w)*2,z:y+Math.sin(w)*2,hw:.8,hd:.8})}else if(it.home!=null){let[m,y]=Ze[it.home],w=[[0,7.2],[0,6.4],[-2.2,7.2],[2.2,7.2],[0,8.4],[4.6,.8],[-4.6,.8],[0,-5.2]],I=(G,Y)=>!ws(G,Y,2.5)||Ci(G,Y,1)||Ct.some(v=>Math.abs(G-v.x)<v.hw+.1&&Math.abs(Y-v.z)<v.hd+.1)||ce(G,Y,0);for(let[G,Y]of w){let v=m+G,H=y+Y;if([[-1.6,-.9],[1.6,-.9],[-1.6,.9],[1.6,.9],[0,0],[0,1.6],[-.5,1.6],[.5,1.6]].every(([dt,Ht])=>!I(v+dt,H+Ht))){q.children.slice().forEach(dt=>{if(dt.userData.post&&Math.abs(dt.position.x-v)<2.6&&Math.abs(dt.position.z-H)<2.2){q.remove(dt);let Ht=Xt.findIndex(ot=>ot.x===dt.position.x&&ot.z===dt.position.z);Ht>=0&&Xt.splice(Ht,1)}}),Rt=Yf(),Rt.position.set(v,Sn(v,H),H),q.add(Rt),Rt.userData.front={x:v,z:H+1.25},Ct.push({x:v,z:H,hw:1.55,hd:.75});break}}}let de=[],Ae=new on(.28,8,6);function De(m){let y=new St(Ae,new _e({color:16777215,transparent:!0,opacity:.75,depthWrite:!1})),w=m.userData.chimney;y.position.set(m.position.x+w.x+Wt(-.1,.1),w.y,m.position.z+w.z+Wt(-.1,.1)),q.add(y),de.push({m:y,life:0})}let cn=[3,6,10],pe=document.createElement("div");pe.className="v3d-names",i.appendChild(pe);let Zt=null,Fn=!1,xe=new Map,We=new L;function Ui(m){if(!Zt)return"";if(m.love==="her")return Zt.her||"namu";if(m.love==="him")return Zt.him||"hunf";if(m.helper)return"";let y=(t.houses||[])[m.home];return!y||!y.pub&&!Fn?"":Zt.people&&Zt.people[y.id]||""}function yn(){at.forEach(m=>{let y=Ui(m),w=xe.get(m);if(!y){w&&(w.remove(),xe.delete(m));return}w||(w=document.createElement("span"),pe.appendChild(w),xe.set(m,w)),w.textContent=y})}function di(){let m=o.position.distanceTo(a.target),y=m<175&&xe.size>0;if(pe.style.display=y?"":"none",!y)return;let w=i.clientWidth||innerWidth,I=i.clientHeight||innerHeight;pe.style.fontSize=Math.max(9,Math.min(15,1500/m)).toFixed(1)+"px",pe.classList.toggle("night",vr>.5);let G=performance.now(),Y=G-(di.t||0)>300;Y&&(di.t=G);let v=[];xe.forEach((H,ht)=>{if(!ht.g.visible||ht.inside||at.indexOf(ht)<0){H.style.display="none";return}if(ht.g.getWorldPosition(We),We.y+=2.05,Y){let ot=We.clone().sub(o.position),Gt=ot.length();Se.set(o.position,ot.normalize()),Se.far=Gt-.3,ht.hidden=Se.intersectObjects(zn,!1).length>0}if(ht.hidden){H.style.display="none";return}if(We.project(o),We.z>1||Math.abs(We.x)>1.1||Math.abs(We.y)>1.1){H.style.display="none";return}let dt=(We.x+1)/2*w,Ht=(1-We.y)/2*I;for(let ot=0;ot<4;ot++){let Gt=v.find(ve=>Math.abs(ve[0]-dt)<34&&Math.abs(ve[1]-Ht)<12);if(!Gt)break;Ht=Gt[1]-13}v.push([dt,Ht]),H.style.display="",H.style.transform="translate("+dt.toFixed(1)+"px,"+Ht.toFixed(1)+"px) translate(-50%,-100%)"})}let Se=new hr,zn=R.map(m=>m.userData.pick).filter(Boolean);function Ni(){Ze.forEach((m,y)=>{if(y===it.home)return;let w=cn.filter(G=>Lt(y)>=G).length,I=at.filter(G=>G.helper&&G.home===y&&G.goal!=="leave");for(let G=I.length;G<w;G++){let Y=te(Xf[G%Xf.length],y,{helper:cn[G]});Y.g.position.set(st.x+Wt(-1,1),0,st.z+Wt(0,.6)),_n(Y,Cs(Y),"work")}})}function vn(m,y){let w={x:m.g.position.x,z:m.g.position.z};if(se(w,y))return[y];let I=$.nearest(w.x,w.z),G=$.nearest(y.x,y.z),Y=$.path(I,G);if(!se(w,Y[0]))return[];let v=Y[Y.length-1];return se(v,y)&&Y.push(y),Y}function ii(m){if(m.kind==="dog"&&Math.random()<.65){let w=at[m.buddy%at.length];for(let Y=0;Y<at.length&&(!w.g.visible||w.sitting);Y++)w=at[++m.buddy%at.length];let I=w.g.position,G={x:I.x+Wt(-1.5,1.5),z:I.z+Wt(.8,1.6)};if(Math.random()<.15&&m.buddy++,!Yt(G.x,G.z)&&(m.path=vn(m,G),m.path.length))return}for(let w=0;w<30;w++){let I={x:m.g.position.x+Wt(-9,9),z:m.g.position.z+Wt(-7,7)};if(!Yt(I.x,I.z,.8)&&se(m.g.position,I)){m.path=[I];return}}let y=$.nodes[$.nearest(m.g.position.x,m.g.position.z)];m.path=[{x:y.x,z:y.z}]}function Wn(m,y){let w=m.g.position;if(m.sleep>0)return m.v=0,!1;if(!m.path.length){if(m.v=0,m.wait-=y,m.wait<=0){if(m.kind==="person")return m.wait=Wt(1.5,4),Z(m),!1;ii(m),m.wait=Wt(2,6),m.kind==="cat"&&(m.sit=Math.random()<.45,m.sit&&(m.path=[]))}return!1}let I=m.path[0],G=I.x-w.x,Y=I.z-w.z,v=Math.hypot(G,Y);if(v<.08)return m.path.shift(),!m.path.length&&m.kind==="person"&&J(m),!0;let ht=Math.atan2(G,Y)-m.g.rotation.y;ht=Math.atan2(Math.sin(ht),Math.cos(ht)),m.g.rotation.y+=ht*Math.min(1,y*7);let dt=v+(m.path.length>1?99:0),Ht=Math.abs(ht)>1.1?m.speed*.15:m.speed*Math.min(1,dt/1.2+.25);m.v=(m.v||0)+(Ht-(m.v||0))*Math.min(1,y*4);let ot=Math.min(v,m.v*y);return w.x+=Math.sin(m.g.rotation.y)*ot*.35+G/v*ot*.65,w.z+=Math.cos(m.g.rotation.y)*ot*.35+Y/v*ot*.65,!0}function Eo(m,y){if(at.slice().forEach(v=>{let H=v.love==="him"?Tt(v,m):Wn(v,m);if(v.inside||!v.g.visible)return;if(v.sitting&&Rt){let ot=v.love==="her"?-.4:.4;W.set(ot,.06,0),Rt.userData.seat.localToWorld(W),q.worldToLocal(W),v.g.position.set(W.x,W.y-Ah,W.z),v.g.rotation.set(Rt.userData.pivot.rotation.x*.9,Rt.rotation.y,0),v.parts.legL.rotation.x=v.parts.legR.rotation.x=-1.45+Math.sin(y*1.7)*.25,v.parts.armL.rotation.x=v.parts.armR.rotation.x=-.5,v.parts.head.rotation.set(0,0,0);return}let ht=Math.min(1,(v.v||0)/v.speed);v.t+=m*(H?3+7*ht:2);let dt=H?Math.sin(v.t)*.75*ht:0;v.parts.legL.rotation.x=dt,v.parts.legR.rotation.x=-dt,v.parts.armL.rotation.x=-dt*.8,v.parts.armR.rotation.x=dt*.8,v.g.rotation.x=0,v.parts.head.rotation.x=0,v.parts.head.rotation.z=0;let Ht=Sn(v.g.position.x,v.g.position.z);if(v.g.position.y=Ht+(H?Math.abs(Math.sin(v.t))*.06:0),!H&&!v.path.length){if(v.goal==="hall"){let ot=Math.PI-v.g.rotation.y;ot=Math.atan2(Math.sin(ot),Math.cos(ot)),v.g.rotation.y+=ot*Math.min(1,m*6),v.g.position.y=Ht+Math.max(0,Math.sin(y*4+v.i))*.1,v.parts.armR.rotation.x=-2.6+Math.sin(y*6+v.i)*.3}else if(v.goal==="work"){let ot=Math.PI-v.g.rotation.y;ot=Math.atan2(Math.sin(ot),Math.cos(ot)),v.g.rotation.y+=ot*Math.min(1,m*6),v.parts.armR.rotation.x=-1.3+Math.sin(y*9+v.i)*.55,v.parts.armL.rotation.x=-.9+Math.sin(y*9+v.i+1.6)*.35,v.parts.head.rotation.x=.25}v.parts.head.rotation.y=v.goal==="work"?0:Math.sin(y*.7+v.i)*.4}else v.parts.head.rotation.y=0}),it.kiss>0&&it.him&&it.him.g.visible){it.kiss-=m;let v=it.her,H=it.him,ht=Math.min(1,Math.sin(Math.min(1,(2.4-it.kiss)/2.4)*Math.PI)*1.6),dt=v.g.position.x-H.g.position.x,Ht=v.g.position.z-H.g.position.z;if(H.sitting)H.parts.head.rotation.y=.9*ht,H.parts.head.rotation.z=.25*ht,v.parts.head.rotation.z=-.15*ht;else{let ot=Math.atan2(dt,Ht)-H.g.rotation.y;ot=Math.atan2(Math.sin(ot),Math.cos(ot)),H.g.rotation.y+=ot*Math.min(1,m*8);let Gt=Math.atan2(-dt,-Ht)-v.g.rotation.y;Gt=Math.atan2(Math.sin(Gt),Math.cos(Gt)),v.g.rotation.y+=Gt*Math.min(1,m*3)*.5,H.g.rotation.x=.2*ht}Ee.visible=!0,Ee.position.set((v.g.position.x+H.g.position.x)/2,2+(2.4-it.kiss)*.35,(v.g.position.z+H.g.position.z)/2),Ee.material.opacity=Math.min(1,it.kiss*1.5),it.kiss<=0&&(Ee.visible=!1,H.g.rotation.x=0)}if(Rt){let v=Rt.userData.pivot,H=it.her&&it.her.sitting;v.rotation.x=H?Math.sin(y*1.7)*(it.kiss>0?.12:.32):v.rotation.x*Math.max(0,1-m*1.5)}let w=On(Ii());R.forEach((v,H)=>{if(!v.userData.wm)return;let ht=0;if(H===it.home?ht=0:(Lt(H)>0||v.userData.alwaysLit||w!=="sleep"&&at.some(dt=>dt.home===H&&dt.inside))&&(ht=1),v.userData.lit=Cn(v.userData.lit||0,ht,Math.min(1,m*2)),v.userData.wm.emissiveIntensity=vr*(.28+.7*v.userData.lit),v.userData.heart){let dt=it.her&&it.her.inside&&it.him.inside;v.userData.heart.material.emissiveIntensity=dt?.5+Math.max(0,Math.sin(y*5))*1.3:.2}Lt(H)>0&&v.userData.chimney&&Math.random()<m*2.2&&De(v)});for(let v=de.length-1;v>=0;v--){let H=de[v];H.life+=m,H.m.position.y+=m*.9,H.m.position.x+=m*.25,H.m.scale.setScalar(1+H.life*.9),H.m.material.opacity=Math.max(0,.75-H.life*.3),H.life>2.5&&(q.remove(H.m),H.m.material.dispose(),de.splice(v,1))}It+=m,It>2&&(It=0,Ni()),[Jt,zt].forEach(v=>{if(v.sleep>0){v.sleep-=m;let Ht=Math.min(1,v.sleepIn+=m*3);v.parts.legs.forEach((ot,Gt)=>{ot.rotation.x=(Gt<2?-1.45:1.45)*Ht}),v.g.position.y=Sn(v.g.position.x,v.g.position.z)-.22*Ht*v.g.scale.y,v.parts.head.rotation.x=.35*Ht,v.parts.head.rotation.y=0,v.parts.eyes.forEach(ot=>{ot.scale.y=1-.8*Ht}),v.parts.tail.rotation.z=Math.sin(y*.8)*.15,v.zzz.visible=!0,v.zzz.position.set(v.g.position.x,.95+y*.6%1*.45,v.g.position.z),v.zzz.material.opacity=.9-y*.6%1*.6,v.sleep<=0&&(v.zzz.visible=!1,v.parts.eyes.forEach(ot=>{ot.scale.y=1}),v.parts.head.rotation.x=0,v.wait=Wt(.3,1));return}let H=Wn(v,m),ht=Math.min(1,(v.v||0)/v.speed);v.t+=m*(H?4+8*ht:2);let dt=H?Math.sin(v.t)*.6*ht:0;v.parts.legs.forEach((Ht,ot)=>{Ht.rotation.x=ot===0||ot===3?dt:-dt}),v.kind==="cat"?(v.parts.tail.rotation.z=Math.sin(y*2)*.35,v.parts.tail.rotation.x=v.sit&&!H?.9:.5,v.g.children[0].rotation.x=0,v.parts.head.rotation.y=H?0:Math.sin(y*.5)*.5,v.g.position.y=Sn(v.g.position.x,v.g.position.z)):(v.parts.tail.rotation.z=Math.sin(y*(H?18:10))*.6,v.parts.head.rotation.x=H?0:Math.sin(y*1.3)*.1,v.g.position.y=Sn(v.g.position.x,v.g.position.z)+(H?Math.abs(Math.sin(v.t))*.07:0))});for(let v=rt.length-1;v>=0;v--){let H=rt[v];H.m.position.y>-.08?(H.vy-=m*9,H.m.position.y=Math.max(-.08,H.m.position.y+H.vy*m),H.m.position.y===-.08&&oe(H.m.position.x,H.m.position.z,.5)):H.m.position.y=-.08+Math.sin(y*3+v)*.015,H.life-=m,H.life<=0&&(q.remove(H.m),rt.splice(v,1))}ge.forEach(v=>{v.a+=v.sp*m;let H=$t.x+Math.cos(v.a)*($t.rx-1.6)*v.r,ht=$t.z+Math.sin(v.a)*($t.rz-1)*v.r,dt=null,Ht=1e9;if(rt.forEach(ot=>{if(ot.m.position.y<=-.02){let Gt=Math.hypot(ot.m.position.x-v.g.position.x,ot.m.position.z-v.g.position.z);Gt<Ht&&(Ht=Gt,dt=ot)}}),dt&&!v.jump){let ot=dt.m.position.x-v.g.position.x,Gt=dt.m.position.z-v.g.position.z,ve=Math.hypot(ot,Gt),Ne=Math.min(ve,2.6*m);v.g.position.x+=ot/(ve||1)*Ne,v.g.position.z+=Gt/(ve||1)*Ne,v.g.position.y=-.3,v.g.rotation.y=Math.atan2(ot,Gt),ve<.25&&(q.remove(dt.m),rt.splice(rt.indexOf(dt),1),oe(dt.m.position.x,dt.m.position.z,.6)),v.a=Math.atan2((v.g.position.z-$t.z)/($t.rz-1),(v.g.position.x-$t.x)/($t.rx-1.6)),v.r=Math.min(.85,Math.max(.2,Math.hypot((v.g.position.x-$t.x)/($t.rx-1.6),(v.g.position.z-$t.z)/($t.rz-1)))),v.g.userData.tail.rotation.y=Math.sin(y*16+v.a)*.6;return}if(v.jump>0){v.jump+=m*.9;let ot=Math.sin(v.jump*Math.PI)*1.8;v.g.position.set(Cn(v.jx,H,v.jump),-.34+ot,Cn(v.jz,ht,v.jump)),v.g.rotation.x=-Math.cos(v.jump*Math.PI)*1.1,v.jump>=1&&(v.jump=0,v.g.rotation.x=0,ye.position.set(H,-.1,ht),ye.material.opacity=.8,ye.scale.setScalar(1))}else{let ot=H-v.g.position.x,Gt=ht-v.g.position.z;v.g.position.set(Cn(v.g.position.x,H,Math.min(1,m*6)),-.34,Cn(v.g.position.z,ht,Math.min(1,m*6))),(ot||Gt)&&(v.g.rotation.y=Math.atan2(ot,Gt)),Math.random()<m*.05&&(v.jump=.001,v.jx=H,v.jz=ht,ye.position.set(H,-.1,ht),ye.material.opacity=.8,ye.scale.setScalar(1))}v.g.userData.tail.rotation.y=Math.sin(y*8+v.a)*.5}),qt.glints.forEach(v=>{v.t=(v.t+v.sp*m*6)%1;let H=qt.curve.getPointAt(v.t),ht=qt.curve.getTangentAt(v.t);v.m.position.set(H.x-ht.z*v.side,.06,H.z+ht.x*v.side),v.m.rotation.z=-Math.atan2(ht.z,ht.x),v.m.material.opacity=.35+Math.abs(Math.sin(y*3+v.side*9))*.5}),qt.ftex.offset.y=(qt.ftex.offset.y+m*1.6)%1,le.jet.scale.y=1+Math.sin(y*6)*.08,le.drops.forEach(v=>{v.t=(v.t+m*.7)%1;let H=.15+v.t*.95,ht=2.25+v.t*.6-v.t*v.t*2.35;v.m.position.set(Math.cos(v.a)*H,ht,Math.sin(v.a)*H)}),qt.foam.forEach((v,H)=>{let ht=.8+Math.abs(Math.sin(y*5+H))*.5;v.scale.setScalar(ht)}),ft.ducks.forEach(v=>{v.a+=v.sp*m;let H=$t.x+Math.cos(v.a)*($t.rx-2),ht=$t.z+Math.sin(v.a)*($t.rz-1.2);v.g.rotation.y=Math.atan2(H-v.g.position.x,ht-v.g.position.z)||v.g.rotation.y,v.g.position.set(H,-.2+Math.sin(y*2+v.a)*.03,ht)});for(let v=Dt.length-1;v>=0;v--){let H=Dt[v];H.material.opacity-=m*1.2,H.scale.multiplyScalar(1+m*2.5*H.userData.size),H.material.opacity<=0&&(q.remove(H),H.geometry.dispose(),Dt.splice(v,1))}ye.material.opacity>0&&(ye.material.opacity=Math.max(0,ye.material.opacity-m*.8),ye.scale.multiplyScalar(1+m*1.8)),Ke.forEach(v=>{v.ph+=m,v.g.position.set(v.cx+Math.sin(v.ph*.4)*6,1.6+Math.sin(v.ph*1.3)*.5,v.cz+Math.cos(v.ph*.33)*4),v.g.rotation.y=v.ph*.4+Math.PI/2;let H=Math.sin(v.ph*18)*1.1;v.g.userData.l.rotation.y=H,v.g.userData.r.rotation.y=-H});let I=Pn.geometry.attributes.position;for(let v=0;v<I.count;v++)I.setY(v,1.5+Math.sin(y*.8+v)*.8),I.setX(v,I.getX(v)+Math.sin(y*.5+v*3)*m*.4);if(I.needsUpdate=!0,D.forEach(v=>{v.position.x+=v.userData.speed*m,v.position.x>90&&(v.position.x=-90)}),yr&&od(m),F.rotation.y+=m*.012,A.forEach(v=>{v.position.y=v.userData.y0+Math.sin(y*.5+v.userData.ph)*.3}),pt.forEach(v=>{v.material.opacity=v.userData.base*Math.max(0,Math.sin(y*1.8+v.userData.ph))}),Q.forEach(v=>{v.material.opacity=v.userData.base*(.55+.45*Math.sin(y*1.3+v.userData.ph))}),vr>.6)if(V.t<0){if(V.wait-=m,V.wait<=0){let v=Wt(0,Math.PI*2);V.from.set(Math.cos(v)*180,Wt(110,170),Math.sin(v)*180-40),V.dir.set(Wt(-1,1),Wt(-.55,-.35),Wt(-.3,.3)).normalize(),V.t=0}}else{V.t+=m/1.1,O.position.copy(V.from).addScaledVector(V.dir,V.t*120);let v=O.position.clone().project(o),H=O.position.clone().addScaledVector(V.dir,10).project(o);O.material.rotation=Math.atan2(H.y-v.y,H.x-v.x),O.material.opacity=Math.sin(Math.min(1,V.t)*Math.PI)*.95,V.t>=1&&(V.t=-1,V.wait=Wt(7,16),O.material.opacity=0)}else O.material.opacity=0;let G=K.userData.flag;G.rotation.y=Math.sin(y*3)*.25;let Y=K.userData.bell;Y.material.emissiveIntensity=ni?.6+Math.sin(y*6)*.4:0,Y.rotation.z=ni?Math.sin(y*7)*.35:0}let yr=null;function Dh(m){if(!k.car||yr)return!1;let y=k.car,w={x:y.position.x,z:y.position.z,ry:y.rotation.y},I=$.nearest(k.exit.x,k.exit.z),G=new Set($.doorNodes),v=$.nodes.map((ot,Gt)=>Gt).filter(ot=>!G.has(ot)&&Math.abs(Sn($.nodes[ot].x,$.nodes[ot].z))<.2).filter(ot=>Math.hypot($.nodes[ot].x-w.x,$.nodes[ot].z-w.z)>30),H=ot=>ot[Math.floor(Math.random()*ot.length)],ht=v.length?[H(v),H(v)]:[],dt=[{x:w.x,z:w.z},{x:k.exit.x,z:k.exit.z}],Ht=I;return ht.concat([I]).forEach(ot=>{$.path(Ht,ot).forEach(Gt=>dt.push({x:Gt.x,z:Gt.z})),Ht=ot}),dt.push({x:k.exit.x,z:k.exit.z},{x:w.x,z:w.z-Math.cos(w.ry)*.01}),dt=dt.filter((ot,Gt)=>!Gt||Math.hypot(ot.x-dt[Gt-1].x,ot.z-dt[Gt-1].z)>.3),yr={pts:dt,i:1,home:w,done:m,v:0,last:0},!0}function od(m){let y=k.car,w=yr,I=w.pts[w.i],G=w.i===w.pts.length-1,Y=I.x-y.position.x,v=I.z-y.position.z,H=Math.hypot(Y,v);if(w.v=Math.min(G?2:6.5,w.v+m*3),H<.35){if(w.i++,w.i>=w.pts.length){y.position.set(w.home.x,Sn(w.home.x,w.home.z),w.home.z),y.rotation.y=w.home.ry;let ot=w.done;yr=null,ot&&ot();return}return}let ht=Math.min(H,w.v*m);y.position.x+=Y/H*ht,y.position.z+=v/H*ht,y.position.y=Sn(y.position.x,y.position.z);let dt=Math.atan2(Y,v)+(G?Math.PI:0),Ht=y.rotation.y;for(;dt-Ht>Math.PI;)dt-=Math.PI*2;for(;dt-Ht<-Math.PI;)dt+=Math.PI*2;y.rotation.y=Ht+(dt-Ht)*Math.min(1,m*5)}let vr=0;function Mr(){let m=new Date,y=n!=null?n:m.getHours()+m.getMinutes()/60,w=rd(y);vr=w.night,r.background=w.sky,r.fog.color.copy(w.sky),x.uniforms.bottom.value.copy(w.sky).lerp(new ne(16777215),.18*(1-w.night)).lerp(new ne(10324950),.4*w.night),x.uniforms.top.value.copy(w.sky).lerp(new ne(w.night>.5?2501490:7320547),.5),d.intensity=w.amb,d.color.set(w.night>.5?13158143:16777215),d.groundColor.set(w.night>.5?8160432:12048288),g.color.copy(w.sun),g.intensity=w.power;let I=(y-6)/12*Math.PI,Y=y>=5.5&&y<=18.6?I:((y+12)%24-6)/12*Math.PI,v=Math.cos(Y)*70,H=Math.max(Math.sin(Y),.25)*70;g.position.set(v,H,40),g.target.position.set(0,0,0),T.position.set(Math.cos(I)*200,Math.sin(I)*160,-120),T.visible=Math.sin(I)>-.05;let ht=((y+12)%24-6)/12*Math.PI;b.position.set(Math.cos(ht)*200,Math.sin(ht)*160,-120),b.visible=w.night>.3&&Math.sin(ht)>0,P.material.opacity=w.night,Q.forEach(dt=>{dt.userData.base=w.night}),F.mat.color.set(w.night>.5?10131656:16777215),pt.forEach(dt=>{dt.userData.base=.55+w.night*.45}),Pn.material.opacity=w.night*.95,Sh.forEach(dt=>{dt.emissiveIntensity=w.night*.95}),_.forEach(dt=>{dt.intensity=w.night*18}),D.forEach(dt=>{dt.userData.mat.color.set(w.night>.5?8029096:16777215)}),Ke.forEach(dt=>{dt.g.visible=w.night<.5})}let bo=1,So=1;function wo(){bo=i.clientWidth||window.innerWidth,So=i.clientHeight||window.innerHeight,s.setSize(bo,So,!1),o.aspect=bo/So,o.updateProjectionMatrix()}let pi=new sn;function ad(m,y){pi.fov=o.fov,pi.aspect=o.aspect,pi.near=.5,pi.far=1e3,pi.updateProjectionMatrix();let w=[];for(let v=0;v<48;v++){let H=v/48*Math.PI*2,ht=gr(H);w.push(new L(Math.cos(H)*ht,0,Math.sin(H)*ht))}w.push(new L(bn[0],9+yo.h,bn[1])),xr.forEach(([v,H,ht,dt])=>w.push(new L(v,dt,H))),Ze.forEach(([v,H])=>w.push(new L(v,6.5,H)));let I=v=>{pi.position.set(0,Math.cos(m)*v,Math.sin(m)*v).add(y),pi.lookAt(y),pi.updateMatrixWorld();let H=new L;return w.every(ht=>(H.copy(ht).project(pi),Math.abs(H.x)<.97&&H.y>-.97&&H.y<.86))},G=10,Y=600;for(let v=0;v<30;v++){let H=(G+Y)/2;I(H)?Y=H:G=H}return Y}function qa(){wo();let m=e==="port"?.6:.88,y=new L(0,0,1.5),w=ad(m,y);return{p:new L(0,Math.cos(m)*w,Math.sin(m)*w).add(y),t:y}}function Uh(){let m=qa();a.target.copy(m.t),o.position.copy(m.p),a.update()}let cd=1800,ld=1900,Fe=null,Er=!1,br=null,Za=m=>m<.5?4*m*m*m:1-Math.pow(-2*m+2,3)/2;function Nh(m){let y=m.userData.face||0,w=Math.sin(y),I=Math.cos(y),G=m.userData.doorZ-1.3,Y=m.position.y,v=(H,ht)=>new L(m.position.x+w*(G+H),Y+ht,m.position.z+I*(G+H));return{near:v(3.2,1.75),nearT:v(-1,1.45),inside:v(.35,1.6),insideT:v(-2,1.4)}}function Oh(m,y,w,I){if(!w)return m.clone().lerp(y,I);let G=m.clone().lerp(y,I),Y=y.clone().lerp(w,I);return G.lerp(Y,I)}function hd(m,y,w){let I=R.find(Y=>Y.userData.id===m);if(!I){y&&y();return}let G=Nh(I);br={p:o.position.clone(),t:a.target.clone()},Fe={mode:"in",start:performance.now(),dur:cd,h:I,done:y,at:w&&w.at,atFired:!1,p:[br.p,G.near,G.inside],t:[br.t,G.nearT,G.insideT]},a.enabled=!1,Er=!0}function ud(m,y){let w=R.find(Y=>Y.userData.id===m);if(!w){Fh(),y&&y();return}let I=Nh(w),G=br||qa();w.userData.hinge&&(w.userData.hinge.rotation.y=-1.7),o.position.copy(I.inside),a.target.copy(I.insideT),o.lookAt(a.target),Fe={mode:"out",start:performance.now(),dur:ld,h:w,done:y,p:[I.inside,I.near,G.p],t:[I.insideT,I.nearT,G.t]},a.enabled=!1,Er=!0}function fd(){if(!Fe)return;let m=Math.min(1,(performance.now()-Fe.start)/Fe.dur),y=Za(m);o.position.copy(Oh(Fe.p[0],Fe.p[1],Fe.p[2],y)),a.target.copy(Oh(Fe.t[0],Fe.t[1],Fe.t[2],y)),o.lookAt(a.target);let w=Fe.h.userData.hinge;if(w&&(Fe.mode==="in"?w.rotation.y=-1.7*Za(Math.min(1,Math.max(0,(m-.25)/.45))):w.rotation.y=-1.7*(1-Za(Math.min(1,Math.max(0,(m-.2)/.5))))),Fe.at&&!Fe.atFired&&m>=Fe.at.k&&(Fe.atFired=!0,Fe.at.fn()),m>=1){let I=Fe.done,G=Fe.mode;Fe=null,G==="out"&&(Er=!1,a.enabled=!0,a.update()),I&&I()}}function Fh(){if(!Er||Fe&&Fe.mode==="out")return;Er=!1,Fe=null,a.enabled=!0,R.forEach(y=>{y.userData.hinge&&(y.userData.hinge.rotation.y=0)});let m=br||qa();o.position.copy(m.p),a.target.copy(m.t),a.update()}let Sr=new hr,zh=new xt,Ps=null;s.domElement.addEventListener("pointerdown",m=>{Ps={x:m.clientX,y:m.clientY}}),s.domElement.addEventListener("pointerup",m=>{if(!Ps||Math.hypot(m.clientX-Ps.x,m.clientY-Ps.y)>6){Ps=null;return}Ps=null;let y=s.domElement.getBoundingClientRect();if(zh.set((m.clientX-y.left)/y.width*2-1,-((m.clientY-y.top)/y.height)*2+1),Sr.setFromCamera(zh,o),it.her&&it.her.g.visible&&it.him.g.visible&&Sr.intersectObjects([it.her.g,it.him.g],!0)[0]){it.kiss>0||(it.kiss=2.4,it.her.sitting||(it.her.path=[],it.her.wait=Math.max(it.her.wait,2.8)));return}let w=Sr.intersectObjects([Jt.g,zt.g],!0)[0];if(w){let v=Jt.g.getObjectById(w.object.id)?Jt:zt;v.sleep>0||(v.sleep=3,v.sleepIn=0,v.path=[]);return}let I=Sr.intersectObject(jt)[0];if(I){Bt(I.point.x-q.position.x,I.point.z-q.position.z);return}let G=Sr.intersectObjects(R,!0)[0];if(!G)return;let Y=G.object;for(;Y&&!Y.userData.id;)Y=Y.parent;Y&&t.onPick(Y.userData.id)});let wr=new L;function dd(m){let y=R.find(w=>w.userData.id===m);return y?(wr.set(y.position.x,y.position.y+y.userData.top,y.position.z),wr.project(o),{x:(wr.x+1)/2*bo,y:(1-wr.y)/2*So,visible:wr.z<1}):null}let Ja=new fo,Tr=!1,Is=!0,Bh=0,Hh=[];function kh(){if(!Tr)return;if(!Is||document.hidden){Tr=!1;return}requestAnimationFrame(kh);let m=Math.min(.12,Ja.getDelta()),y=Ja.elapsedTime;y-Bh>20&&(Mr(),Bh=y),Eo(m,y),Fe?fd():a.update(),s.render(r,o),Hh.forEach(w=>w()),di()}function Ka(){Tr||(Tr=!0,Ja.getDelta(),requestAnimationFrame(kh))}let Vh=()=>{!document.hidden&&Is&&(Mr(),Ka())},Gh=()=>{Is&&wo()};return document.addEventListener("visibilitychange",Vh),window.addEventListener("resize",Gh),Mr(),Uh(),Ka(),/[?&]debug3d/.test(location.search)&&(window.__v3d={drive:m=>Dh(m),get car(){return k.car},renderer:s,people:at,couple:it,get swing(){return Rt},graph:$,cat:Jt,dog:zt,routine:On,realHour:Ii,camera:o,controls:a,water:jt,food:rt,get urgent(){return ni}}),{setUrgent(m){let y=ni;ni=m||0,!!y!=!!ni&&at.forEach(w=>{!w.love&&!w.helper&&(w.path=[],w.wait=Wt(0,1.5))})},setBusy(m){let y={};(t.houses||[]).forEach((w,I)=>{m&&m[w.id]>0&&(y[I]=m[w.id])}),_t=y,Ni()},anchor:dd,onFrame(m){Hh.push(m)},night(){return vr},setTimeMode(m){n=m==="day"?11:m==="night"?22:null,Mr()},show(m){Is=!!m,Is&&(Fh(),wo(),Mr(),Ka())},enterHouse:hd,exitHouse:ud,drive:Dh,setNames(m,y){Zt=m||null,Fn=!!y,yn()},resize:wo,recenter:Uh,layout:e,destroy(){Tr=!1,Is=!1,document.removeEventListener("visibilitychange",Vh),window.removeEventListener("resize",Gh),a.dispose(),r.traverse(m=>{m.geometry&&m.geometry.dispose()}),s.dispose(),s.domElement.remove()}}}var xn=9,Gn=7,gn=4.4,Xa=7;function Va(i,t){return new ne(i).lerp(new ne(16777215),t).getHex()}function ti(i,t,e,n,s){let r=new Kt;return r.position.set(t,0,e),r.rotation.y=n||0,i.add(r),r.add(U(2.2,.08,1,s||14267535,0,.78,0)),[[-1,-.42],[1,-.42],[-1,.42],[1,.42]].forEach(([o,a])=>r.add(U(.08,.78,.08,11569768,o,.39,a))),r}function Un(i,t,e,n){let s=new Kt;return s.position.set(t,0,e),s.rotation.y=n||0,i.add(s),s.add(U(.55,.08,.55,16165309,0,.5,0)),s.add(U(.55,.6,.08,16165309,0,.82,-.26)),[[-.22,-.22],[.22,-.22],[-.22,.22],[.22,.22]].forEach(([r,o])=>s.add(U(.06,.5,.06,9206379,r,.25,o))),s}function Ss(i,t,e){i.add(U(.7,.04,.48,14211296,t,.84,e));let n=U(.7,.46,.04,14211296,t,1.07,e-.24);n.rotation.x=-.25,i.add(n);let s=U(.62,.38,.02,0,t,1.07,e-.215,new $e({color:12576498}));s.rotation.x=-.25,i.add(s)}function ei(i,t,e,n,s){let r=new Kt;r.position.set(t,0,e),r.rotation.y=n||0,i.add(r),r.add(U(1.8,2.4,.4,12883572,0,1.2,0));for(let o=0;o<4;o++){r.add(U(1.7,.06,.36,14862765,0,.3+o*.55,.03));for(let a=0;a<(s||6);a++){let c=fi.flower[(a+o)%fi.flower.length],l=.3+(a*7+o*3)%4*.04;r.add(U(.16,l,.28,c===16777215?10934504:c,-.7+a*.24,.33+o*.55+l/2,.05))}}return r}function Rn(i,t,e){i.add(U(.5,.5,.5,0,t,.25,e,Je(gt.CLAY,16368540))),[[0,.78,0,.56],[.2,1.18,.1,.36],[-.18,1.12,-.12,.34]].forEach(([n,s,r,o],a)=>i.add(U(o,o,o,0,t+n,s,e+r,Je([gt.LEAF_G,gt.LEAF_L,gt.LEAF_M][a]))))}function Pi(i,t,e,n,s,r,o,a,c){let l=new Kt;return l.position.set(t,e,n),l.rotation.y=s,i.add(l),l.add(U(r+.12,o+.12,.05,12883572,0,0,0)),l.add(U(r,o,.06,a,0,0,.01)),(c||[]).forEach(([h,f,u,d])=>l.add(U(d||.32,d||.32,.03,u,h,f,.06))),l}function xo(i,t,e,n,s){let r=[[-.45,.25],[-.15,.45],[.15,.35],[.45,.6]],o=Pi(i,t,e,n,s,1.4,1.1,16775920);return r.forEach(([a,c],l)=>o.add(U(.2,c,.03,[16758465,10934504,14542964,14273008][l],a,-.4+c/2,.06))),o}function Zf(i,t,e,n,s,r){let o=r?2.2:1.1,a=r?1.6:.9,c=Pi(i,t,e,n,s,o,a,16777215);c.add(U(o,a*.18,.04,16751536,0,a*.41,.05));for(let l=0;l<4;l++)for(let h=0;h<7;h++){let f=(l*7+h)%9===3;c.add(U(o/9,a/7,.02,f?16766687:15985894,-o/2+(h+1)*o/8,a*.2-l*a/5.5,.06))}return c}function Py(i,t,e,n,s){let r=new Kt;r.position.set(t,e,n),r.rotation.y=s,i.add(r);let o=new St(new Pe(.35,.35,.06,20),re(16775920));o.rotation.x=Math.PI/2,r.add(o);let a=new St(new xs(.36,.04,6,20),re(16165309));r.add(a);let c=U(.04,.18,.02,4865855,0,.08,.05),l=U(.03,.27,.02,4865855,0,.12,.06);return r.add(c,l),r.userData.hands=[c,l],r}function Iy(i,t,e){let n=new St(new on(.28,12,10),re(16758465));n.scale.set(1.3,1,1),n.position.set(t,1.1,e),i.add(n),i.add(U(.12,.1,.1,16751536,t+.38,1.1,e)),[[-.15,-.12],[.15,-.12],[-.15,.12],[.15,.12]].forEach(([s,r])=>i.add(U(.07,.12,.07,16751536,t+s,.86,e+r))),i.add(U(.12,.02,.03,9202282,t,1.38,e));for(let s=0;s<3;s++)for(let r=0;r<2+s;r++){let o=new St(new Pe(.09,.09,.03,12),re(16111752));o.position.set(t-.7+s*.22,.84+r*.035,e+.1),i.add(o)}}function Jf(i,t,e,n){let s=new Kt;s.position.set(t,0,e),s.rotation.y=n||0,i.add(s),s.add(U(1,1.1,.9,10135480,0,.55,0));let r=new St(new Pe(.14,.14,.05,14),re(16111752));return r.rotation.x=Math.PI/2,r.position.set(.15,.6,.46),s.add(r),s.add(U(.06,.3,.05,16111752,-.3,.6,.46)),s}function Ly(i,t,e,n){let s=new Kt;return s.position.set(t,0,e),s.rotation.y=n||0,i.add(s),s.add(U(2,.08,.45,12883572,0,1.3,0)),s.add(U(2,.08,.45,12883572,0,.6,0)),[-1,1].forEach(r=>s.add(U(.08,1.4,.45,11569768,r*.96,.7,0))),[.6,1.3].forEach((r,o)=>[-.65,-.2,.25,.7].forEach((a,c)=>{let l=new St(new Pe(.15,.15,.4,12),new _e({color:15136507,transparent:!0,opacity:.7}));l.position.set(a,r+.24,0),s.add(l);let h=.08+(c+o*2)%4*.08,f=new St(new Pe(.12,.12,h,12),re(16111752));f.position.set(a,r+.06+h/2,0),s.add(f)})),s}function Dy(i,t,e,n){let s=new Kt;return s.position.set(t,0,e),s.rotation.y=n||0,i.add(s),s.add(U(.9,1.5,.7,10934504,0,.75,0)),[.35,.8,1.25].forEach(r=>{s.add(U(.8,.38,.04,12576498,0,r,.36)),s.add(U(.25,.05,.05,16775920,0,r+.08,.39))}),s}function Uy(i,t,e){[0,2.1,4.2].forEach(r=>{let o=U(.04,1.4,.04,7035470,t+Math.cos(r)*.25,.65,e+Math.sin(r)*.25);o.rotation.set(Math.sin(r)*.3,0,-Math.cos(r)*.3),i.add(o)}),i.add(U(.4,.28,.25,4865855,t,1.45,e));let n=new St(new Pe(.09,.09,.15,12),re(3025462));n.rotation.x=Math.PI/2,n.position.set(t,1.45,e+.18),i.add(n);let s=new St(new xs(.4,.05,6,24),new $e({color:16774351}));s.position.set(t-.9,1.7,e-.3),i.add(s),i.add(U(.04,1.7,.04,7035470,t-.9,.85,e-.3))}function Ny(i,t,e,n,s){let r=Pi(i,t,e,n,s,1.2,.7,15785156);[-.4,-.13,.13,.4].forEach((o,a)=>{r.add(U(.05,.05,.08,9206379,o,.18,.08)),r.add(U(.1,.22,.03,[16111752,10934504,16758465,10738109][a],o,-.02,.08))})}var bh={work:{first:"list",build(i,t){let e=ti(i,-1.6,-2.4);Ss(e,.2,0),e.add(U(.3,.2,.22,16777215,-.75,.92,.1)),Un(i,-1.4,-1.55,Math.PI),t.seat={x:-1.4,z:-1.6,ry:Math.PI,y:.54},Pi(i,-4.45,1.8,.4,Math.PI/2,2.6,1.4,16777215,[[-.9,.35,16773544],[-.4,.4,16758465],[.1,.3,10934504],[.6,.38,10738109],[-.8,-.2,16758465],[-.2,-.25,16773544],[.5,-.2,14273008]]),ei(i,4.25,-.6,-Math.PI/2),xo(i,4.44,2.2,1.6,-Math.PI/2),Uy(i,3.4,4.6),Rn(i,-3.9,-3)},corners:{list:[.8,2.9,5.8,-1.3,1,-2.2],board:[2.4,2.7,4.2,-4.3,1.6,.3],stats:[-2.4,2.7,4.2,4.3,1.5,.3],posts:[-.6,2.5,8.6,3.2,1.3,4.4]}},money:{first:"overview",build(i,t){let e=ti(i,0,-2.3,0,16368540);Iy(e,.4,0),e.add(U(.35,.05,.45,9417689,-.5,.84,.1)),Un(i,.2,-1.45,Math.PI),t.seat={x:.2,z:-1.5,ry:Math.PI,y:.54},Zf(i,-4.44,1.9,-.8,Math.PI/2,!0),xo(i,-4.44,1.9,2.1,Math.PI/2),Ly(i,4.2,-1,-Math.PI/2),Dy(i,3.6,-3,0),Jf(i,3.6,2,-Math.PI/2.5),Rn(i,-3.9,-3),t.windowX=-1.9},corners:{overview:[.6,2.9,5.8,0,1,-2.3],calendar:[2.6,2.7,3.6,-4.3,1.8,-.8],stats:[2.6,2.7,5.4,-4.3,1.8,1.8],budget:[-2.4,2.7,3.6,4.2,1.1,-1.2],history:[-1.6,2.7,3.8,3.4,1,-3],categories:[-1.6,2.5,6.2,3.6,.7,2]}},calendar:{first:"main",build(i,t){Zf(i,-.1,2.05,-3.44,0,!0),Py(i,-2.6,2.5,-3.44,0),t.windowX=2.9;let e=ti(i,-1.2,-1.6);e.add(U(.5,.06,.36,16773544,.3,.84,0)),e.add(U(.04,.04,.3,15834032,.65,.88,0)),Un(i,-1,-.75,Math.PI),t.seat={x:-1,z:-.8,ry:Math.PI,y:.54},ei(i,4.25,.2,-Math.PI/2,5),Rn(i,3.8,2.6)},corners:{main:[-.2,2.9,5.8,-.4,1.5,-2.8]}},account:{first:"main",build(i,t){Jf(i,3.7,-2.6,-.3),Ny(i,-.5,2,-3.44,0),t.windowX=1.7;let e=ti(i,-1.8,-1.8,.2);Ss(e,0,0),Un(i,-1.75,-.95,Math.PI+.2),t.seat={x:-1.72,z:-1,ry:Math.PI+.2,y:.54},ei(i,-4.25,.6,Math.PI/2,5),Rn(i,3.9,1.8)},corners:{main:[-.2,2.9,5.8,-.9,1.2,-2.4]}},love:{first:"main",build(i,t){let n=new Kt;n.position.set(.5,0,-2.4),i.add(n),n.add(U(2.6,.45,.9,16165309,0,.32,0)),n.add(U(2.6,.75,.25,15834032,0,.8,-.35)),[-1,1].forEach(O=>n.add(U(.25,.65,.9,15834032,O*1.3,.45,0)));let s=$i(16744350);s.scale.setScalar(.4),s.position.set(1,.75,-.15),n.add(s),t.seats=[{x:.05,z:-2.25,ry:0,y:.56},{x:.95,z:-2.25,ry:0,y:.56}],t.sofa=!0,t.couple=!0,[[1.1,2.95,.55,3095915],[1.4,2.95,-.55,15230251]].forEach(([O,V,q,X])=>{let ut=new Kt;ut.position.set(O,V,-3.44+.06),ut.rotation.z=q,i.add(ut),ut.add(U(.06,.34,.05,16777215,0,-.5,0)),ut.add(U(.025,.34,.025,10135480,0,-.17,0));let tt=new St(new xs(.17,.02,6,22),re(X));tt.scale.y=1.3,tt.position.y=.2,ut.add(tt);for(let Mt=-3;Mt<=3;Mt++)ut.add(U(.004,.42,.004,16777215,Mt*.045,.2,0)),ut.add(U(.32,.004,.004,16777215,0,.2+Mt*.055,0))});{let O=document.createElement("canvas");O.width=128,O.height=64;let V=O.getContext("2d");V.fillStyle="#ffffff",V.fillRect(0,0,128,64),V.fillStyle="#e8652b",V.fillRect(0,8,128,16),V.fillStyle="#26305a",V.beginPath(),V.moveTo(0,64),V.lineTo(0,24),V.lineTo(14,24),V.lineTo(30,64),V.fill(),V.fillStyle="#26305a",V.fillRect(0,6,128,2),V.fillRect(26,28,102,2),V.font="bold 13px sans-serif",V.fillText("YONEX",74,54),V.beginPath(),V.arc(60,49,3,0,7),V.arc(67,49,3,0,7),V.lineWidth=2,V.strokeStyle="#26305a",V.stroke();let q=new rn(O);q.colorSpace=Ue;let X=re(16777215),ut=new _e({map:q}),tt=new St(new Be(1.15,.58,.36),[X,X,re(15230251),X,ut,ut]);tt.position.set(1.25,1.62,-3.44+.22),tt.castShadow=!0,i.add(tt),[-.28,.28].forEach(Mt=>{i.add(U(.06,.5,.03,16777215,1.25+Mt*.9,2.02,-3.44+.2))}),i.add(U(.5,.06,.06,2502746,1.25,2.28,-3.44+.2)),i.add(U(.06,.06,.16,9206379,1.25,2.32,-3.44+.1))}i.add(U(1.42,1.08,.06,12883572,-.4,2.55,-3.44+.02)),i.add(U(1.28,.94,.07,16775920,-.4,2.55,-3.44+.03));let r=new St(new Ri(1.1,.78),new $e({color:16766687}));r.position.set(-.4,2.55,-3.44+.075),r.userData.pick="frame",i.add(r),t.frames=[r];for(let O=0;O<14;O++){let V=new St(new on(.05,6,5),new $e({color:[16773544,16758465][O%2]}));V.position.set(-4+O*.62,3.45-Math.sin(O*.9)*.08,-3.38),i.add(V)}let o=new Kt;o.position.set(2.45,0,-2.4),i.add(o);let a=new St(new Pe(.42,.42,.06,18),re(14861214));a.position.y=.6,o.add(a),o.add(U(.07,.6,.07,11569768,0,.3,0));let c=new St(new Pe(.22,.25,.04,14),re(11569768));c.position.y=.02,o.add(c);let l=new St(new on(.13,16,12),re(13231096));l.scale.y=1.3,l.position.y=.8,o.add(l),[[0,1.08,0,16758465],[.08,1.02,.05,16773544],[-.08,1.04,-.03,16165309]].forEach(([O,V,q,X])=>{o.add(U(.015,.25,.015,8173679,O*.6,.95,q*.6));let ut=new St(new on(.06,10,8),re(X));ut.position.set(O,V,q),o.add(ut)});let h=new Kt;h.userData.pick="up",i.add(h);let f=Je(gt.PLANKS),u=Je(gt.PLANK_GREY,16165309);for(let O=0;O<10;O++){let V=-1.35-O*.32,q=(O+1)*.44;h.add(U(.32,q,.95,0,V,q/2,-2.95,f)),h.add(U(.32,.04,.6,0,V,q+.02,-2.95,u)),O%3===0&&h.add(U(.06,.8,.06,16777215,V,q+.4,-2.45))}{let O=Math.hypot(3.2,4.4),V=U(O,.08,.08,16777215,-1.35-1.6+.16,2.2+.8+.22,-2.45);V.rotation.z=-Math.atan2(4.4,3.2),h.add(V)}let d=Rh("up to the bedroom","#c0587a",.2);d.position.set(-2.1,2.1,-2.2),h.add(d);let g=new Kt;g.position.set(1.3,0,1.25),i.add(g),g.add(U(1.5,.06,.95,14861214,0,.76,0)),[[-.65,-.38],[.65,-.38],[-.65,.38],[.65,.38]].forEach(([O,V])=>g.add(U(.06,.76,.06,11569768,O,.38,V))),[-1,1].forEach(O=>{let V=(q,X,ut)=>{let tt=new St(new Pe(.15,.1,.1,12),re(16777215));tt.position.set(q,.84,X),g.add(tt);let Mt=new St(new Pe(.135,.135,.02,12),re(ut));Mt.position.set(q,.88,X),g.add(Mt)};V(O*.4-.16,-.18,16183264),V(O*.4+.16,-.18,14257226),[[-.05,-.2],[.05,-.14],[0,-.24]].forEach(([q,X])=>g.add(U(.07,.03,.05,9065011,O*.4+.16+q,.9,X))),g.add(U(.32,.012,.012,12883572,O*.4,.8,.05)),g.add(U(.32,.012,.012,12883572,O*.4,.8,.08))});let _=new St(new Pe(.2,.2,.03,12),re(16777215));_.position.set(0,.8,-.05),g.add(_);for(let O=0;O<7;O++)g.add(U(.07,.04,.05,[7321690,9423996][O%2],(O%3-1)*.08,.83,(Math.floor(O/3)-1)*.07-.05));Un(i,1.3-.4,1.25-.85,0),Un(i,1.3+.4,1.25-.85,0),t.dining=[{x:1.3-.4,z:1.25-.8,ry:0,y:.54},{x:1.3+.4,z:1.25-.8,ry:0,y:.54}],t.windowX=3.1,Rn(i,3.95,-2.9),t.dinner=g,t.defaultDishes=g.children.slice(5);let x=14,p=new Kt;p.position.x=x,i.add(p);let T=Gn+Xa,b=Xa/2;for(let O=0;O<12;O++){let V=U(xn/12,.1,T,O%2?15981768:15651517,-xn/2+(O+.5)*xn/12,-.05,b);V.castShadow=!1,p.add(V)}let M=U(xn,gn,.12,t.wall,0,gn/2,-Gn/2);M.castShadow=!1,p.add(M),[-1,1].forEach(O=>{let V=U(.12,gn,T,t.wall2,O*xn/2,gn/2,b);V.castShadow=!1,p.add(V)});let B=U(xn,.12,T,0,0,gn+.06,b,new _e({color:t.ceil,emissive:t.ceil,emissiveIntensity:.3}));B.castShadow=!1,p.add(B),p.add(U(1.9,1.5,.08,16777215,2.9,2.3,-Gn/2+.06)),p.add(U(1.7,1.3,.09,0,2.9,2.3,-Gn/2+.07,t.skyMat)),[-1,1].forEach(O=>p.add(U(.26,1.8,.05,16762063,2.9+O*1.08,2.25,-Gn/2+.2))),p.add(U(2.8,.4,3.4,15918810,0,.28,-1.85)),p.add(U(2.6,.22,3.2,16777215,0,.58,-1.85)),p.add(U(3,1.5,.22,16171471,0,1,-3.48)),p.add(U(2.7,.18,.1,16372702,0,1.6,-3.36)),[-.62,.62].forEach(O=>p.add(U(1,.2,.55,16775925,O,.8,-3))),p.add(U(2.72,.12,2.35,16368595,0,.98,-1.25)),p.add(U(2.74,.14,.32,16777215,0,.99,-2.3)),[-1.4,1.4].forEach(O=>p.add(U(.12,.5,2.3,16368595,O,.75,-1.25)));let P=$i(16748465);P.scale.setScalar(.32),P.position.set(0,1.25,-3.3),p.add(P),[-1.95,1.95].forEach(O=>{p.add(U(.75,.62,.6,14861214,O,.31,-3.05)),p.add(U(.79,.05,.64,15785156,O,.64,-3.05)),p.add(U(.5,.05,.02,12883572,O,.42,-2.74))}),p.add(U(.22,.22,.22,16171471,-1.95,.77,-3.05));let D=new St(new Be(.4,.3,.4),new _e({color:16773590,emissive:16765562,emissiveIntensity:0,map:hi(gt.PLASTER)}));D.position.set(-1.95,1.02,-3.05),p.add(D),t.bedLamp=D;let F=new Kt;F.position.set(1.95,.7,-3),F.rotation.y=-.3,F.userData.pick="album",p.add(F),F.add(U(.5,.08,.38,13231096,0,0,0)),F.add(U(.04,.085,.38,11127784,-.25,0,0));let A=$i(16027569);A.scale.setScalar(.15),A.rotation.x=-Math.PI/2,A.position.set(.02,.045,.06),F.add(A),t.album=F;let S=new Kt;S.userData.pick="down",p.add(S),S.add(U(1.3,.04,2.6,12098694,-3.75,.005,1.2)),[.1,.6,1.1,1.6,2.1].forEach((O,V)=>S.add(U(1.2,.03,.42,10257008,-3.75,.02,.05+O-V*.02)));for(let O=0;O<6;O++)S.add(U(.06,.85,.06,16777215,-3.05,.42,-.05+O*.5));S.add(U(.08,.08,2.6,16777215,-3.05,.86,1.2));let z=Rh("down to the living room","#c0587a",.16);z.position.set(-3,1.35,.6),S.add(z);let Q=new St(new Pe(1,1,.03,32),re(14281207));Q.scale.set(1.8,1,1.1),Q.position.set(.6,.02,1),p.add(Q),Rn(p,3.95,.4);for(let O=0;O<14;O++){let V=new St(new on(.05,6,5),new $e({color:[16773544,16758465][O%2]}));V.position.set(-4+O*.62,3.45-Math.sin(O*.9)*.08,-3.38),p.add(V)}t.bedSpots=[{x:x-.45,z:-1.42},{x:x+.45,z:-1.42}]},corners:{main:[.2,2.8,6.6,0,1.3,-1.9],bed:[14.2,2.6,3.4,14,.9,-2.3],meal:[1,2.6,5.6,1.2,1,-.6],album:[15.75,1.75,-1.85,15.9,.55,-3.05]}},game:{first:"main",build(i,t){i.add(U(2.6,.6,.6,12883572,0,.3,-3.05)),i.add(U(2.2,1.3,.1,3025462,0,1.35,-3.15));let e=U(2.05,1.15,.02,0,0,1.35,-3.09,new $e({color:10934504}));i.add(e),[[-.6,1.55,16758465],[.1,1.2,16111752],[.6,1.6,10738109]].forEach(([s,r,o])=>i.add(U(.3,.3,.01,0,s,r,-3.075,new $e({color:o})))),i.add(U(.5,.12,.35,16777215,.8,.66,-2.95));let n=new St(new on(.7,14,10),re(16165309));n.scale.set(1.1,.6,1),n.position.set(.2,.4,-.4),n.castShadow=!0,i.add(n),t.seats=[{x:.2,z:-.45,ry:Math.PI,y:.78}],t.gamer=!0,xo(i,-4.44,2.2,-.8,Math.PI/2),Pi(i,4.44,2.2,-.4,-Math.PI/2,1.2,1.5,14273008,[[0,.3,16758465,.5],[0,-.35,16111752,.4]]),ei(i,-4.25,1.8,Math.PI/2,5),Rn(i,3.9,-3),t.windowX=2.9},corners:{main:[.4,2.8,5.6,0,1.1,-2.6]}},language:{first:"main",build(i,t){let e=ti(i,-1.2,-2.3,0,16171471);e.add(U(.5,.05,.36,16777215,-.2,.83,0)),e.add(U(.5,.05,.36,16774888,.32,.83,0)),e.add(U(.02,.06,.36,12883572,.06,.84,0)),[10934504,16758465,16111752].forEach((s,r)=>e.add(U(.4,.07,.28,s,.85,.83+r*.075,-.05)));let n=new St(new on(.18,20,14),re(10473444));n.position.set(-.8,1.08,0),e.add(n),e.add(U(.05,.25,.05,12883572,-.8,.9,0)),Un(i,-1,-1.45,Math.PI),t.seat={x:-1,z:-1.5,ry:Math.PI,y:.54},Pi(i,-4.45,1.9,.2,Math.PI/2,2.4,1.4,16777215,[[-.75,.35,16758465],[-.25,.35,16773544],[.25,.35,10934504],[.75,.35,10738109],[-.5,-.25,14273008],[0,-.25,16758465],[.5,-.25,16773544]]),ei(i,4.25,-.4,-Math.PI/2,5),xo(i,4.44,2.3,1.8,-Math.PI/2),Rn(i,3.9,-3),t.windowX=2.2},corners:{main:[-.3,2.9,5.8,-.9,1.1,-2.3]}},skills:{first:"main",build(i,t){let e=ti(i,-.6,-2.3,0,16111752);Ss(e,-.3,0),e.add(U(.45,.04,.32,16777215,.45,.83,.05)),e.add(U(.02,.02,.3,15235487,.62,.86,.05));let n=U(.6,.3,.32,15035243,3.4,.15,-2.6);i.add(n),i.add(U(.3,.05,.05,3814720,3.4,.35,-2.6)),Un(i,-.4,-1.45,Math.PI),t.seat={x:-.4,z:-1.5,ry:Math.PI,y:.54};let s=new Kt;s.position.set(-3.3,0,-1.6),s.rotation.y=.5,i.add(s),[-.4,.4].forEach(r=>{let o=U(.07,1.9,.07,12883572,r,.95,0);o.rotation.z=-r*.15,s.add(o)}),s.add(U(1,.8,.05,16777215,0,1.35,.06)),s.add(U(.5,.3,.06,10934504,-.15,1.45,.08)),s.add(U(.25,.25,.06,16758465,.25,1.2,.08)),Pi(i,4.44,2,-.5,-Math.PI/2,1.6,1.2,16777215,[[-.5,-.25,10738109,.3],[-.15,-.1,16111752,.3],[.2,.05,16758465,.3],[.55,.2,10934504,.3]]),ei(i,-4.25,1.4,Math.PI/2,5),Rn(i,3.9,2.4),t.windowX=2.4},corners:{main:[0,2.9,5.8,-.3,1.1,-2.2]}},notes:{first:"main",build(i,t){let e=ti(i,-.8,-2.3,0,16111752);Ss(e,.4,0),[16758465,10934504,16773544].forEach((n,s)=>e.add(U(.36,.05,.48,n,-.5,.83+s*.055,.02+s*.03))),Un(i,-.6,-1.45,Math.PI),t.seat={x:-.6,z:-1.5,ry:Math.PI,y:.54},Pi(i,-.6,2.2,-3.44,0,2.6,1.3,14267535,[[-1,.35,16773544],[-.55,.3,16758465],[-.1,.38,10934504],[.35,.32,10738109],[.85,.36,16773544],[-.8,-.25,14273008],[-.3,-.22,16773544],[.2,-.28,16758465],[.7,-.24,10934504]]),ei(i,4.25,-.4,-Math.PI/2,5),Rn(i,-3.9,-3),t.windowX=2.8},corners:{main:[-.2,2.9,5.8,-.6,1.3,-2.4]}},goals:{first:"main",build(i,t){Pi(i,0,2.15,-3.44,0,3,1.6,16777215,[[-1.1,.35,10934504,.45],[-.45,.4,16758465,.4],[.55,.38,10738109,.45],[1.15,.3,16111752,.4],[-.9,-.35,14273008,.45],[.95,-.35,16758465,.4]]);let e=$i(16765803);e.scale.setScalar(.5),e.position.set(0,2.1,-3.3),i.add(e);let n=ti(i,-1.8,-1.9,.25,14273008);Ss(n,0,0),Un(i,-1.7,-1.05,Math.PI+.25),t.seat={x:-1.68,z:-1.1,ry:Math.PI+.25,y:.54};let s=new St(new Pe(.22,.12,.36,18),re(16107596));s.position.set(3.7,1.28,-2.7),i.add(s),i.add(U(.5,.9,.5,15785156,3.7,.45,-2.7)),i.add(U(.2,.12,.2,16107596,3.7,1,-2.7)),Rn(i,-3.9,-3),t.windowX=3.2},corners:{main:[.2,2.8,5.8,-.2,1.4,-2.4]}},health:{first:"main",build(i,t){let e=U(1,.04,2,10738109,-1.6,.03,-.6);e.castShadow=!1,i.add(e),[[-.7,-1.4],[-.45,-1.4]].forEach(([o,a])=>{i.add(U(.36,.05,.05,9080729,o,.12,a)),[-.16,.16].forEach(c=>{let l=new St(new Pe(.1,.1,.08,16),re(15834032));l.rotation.z=Math.PI/2,l.position.set(o+c,.12,a),i.add(l)})}),i.add(U(.9,1.6,.8,16777215,3.6,.8,-2.9)),i.add(U(.05,.4,.05,12633806,3.2,1,-2.48)),i.add(U(.9,.04,.82,15328478,3.6,1.1,-2.9));let n=ti(i,1.2,-2.4,0,16766665),s=new St(new on(.25,20,12,0,Math.PI*2,Math.PI/2,Math.PI/2),re(16777215));s.position.set(0,1.04,0),n.add(s),[[16744319,-.08,0],[16765803,.08,.04],[10147472,0,-.08]].forEach(([o,a,c])=>{let l=new St(new on(.09,14,10),re(o));l.position.set(a,1.04,c),n.add(l)});let r=new St(new Pe(.07,.07,.3,14),re(10473444));r.position.set(.5,.98,.1),n.add(r),Un(i,1.4,-1.55,Math.PI),t.seat={x:1.4,z:-1.6,ry:Math.PI,y:.54},xo(i,-4.44,2.2,-.6,Math.PI/2),Rn(i,-3.9,-3),t.windowX=-.6},corners:{main:[.4,2.8,5.8,.2,1,-2]}},law:{first:"main",build(i,t){ei(i,-4.25,-.8,Math.PI/2,5),ei(i,-4.25,1.4,Math.PI/2,5),ei(i,4.25,-.4,-Math.PI/2,5);let e=ti(i,.2,-2.3,0,12883572);Ss(e,-.4,0);let n=new Kt;n.position.set(.55,.83,0),e.add(n),n.add(U(.04,.5,.04,14267466,0,.25,0)),n.add(U(.5,.03,.03,14267466,0,.48,0)),[-.24,.24].forEach(s=>{let r=new St(new Pe(.09,.06,.03,16),re(14267466));r.position.set(s,.3,0),n.add(r),n.add(U(.01,.18,.01,14267466,s,.39,0))}),Un(i,.4,-1.45,Math.PI),t.seat={x:.4,z:-1.5,ry:Math.PI,y:.54},Rn(i,3.9,2.4),t.windowX=2.4},corners:{main:[.2,2.9,5.8,.1,1.2,-2.3]}},other:{first:"main",build(i,t){let e=ti(i,-1,-2.3);Ss(e,0,0),Un(i,-.8,-1.45,Math.PI),t.seat={x:-.8,z:-1.5,ry:Math.PI,y:.54},ei(i,4.25,-.6,-Math.PI/2),Rn(i,-3.9,-3)},corners:{main:[0,2.9,5.8,0,1.1,-2]}}};function Oy(i,t){t=t||{};let e=bh[t.house]||(t.kind==="game"?bh.game:bh.other),n=new Jr({antialias:!0});n.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),n.shadowMap.enabled=!0,n.shadowMap.type=La,i.appendChild(n.domElement);let s=new Kr,r=new sn(48,1,.1,100),o=Va(t.roof||16165309,.72),a=Va(t.roof||16165309,.55);s.background=new ne(Va(t.roof||16165309,.82));let c=new Kt;s.add(c);let l=Gn+Xa,h=Xa/2;for(let j=0;j<12;j++){let pt=U(xn/12,.1,l,j%2?15323054:14861214,-xn/2+(j+.5)*xn/12,-.05,h);pt.castShadow=!1,c.add(pt)}let f=U(xn,gn,.12,o,0,gn/2,-Gn/2);f.castShadow=!1,c.add(f),[-1,1].forEach(j=>{let pt=U(.12,gn,l,a,j*xn/2,gn/2,h);pt.castShadow=!1,pt.receiveShadow=!0,c.add(pt)});let u=Va(t.roof||16165309,.9),d=U(xn,.12,l,0,0,gn+.06,h,new _e({color:u,emissive:u,emissiveIntensity:.3}));d.castShadow=!1,c.add(d);let g=j=>{j.castShadow=!1,c.add(j)};g(U(xn,.16,.12,16777215,0,gn-.08,-Gn/2+.1)),[-1,1].forEach(j=>g(U(.12,.16,l,16777215,j*(xn/2-.1),gn-.08,h))),g(U(xn,.14,.04,16777215,0,.07,-Gn/2+.08)),[-1,1].forEach(j=>g(U(.04,.14,l,16777215,j*(xn/2-.08),.07,h)));let _=new $e({color:12575733}),x=new St(new Pe(1,1,.03,32),re(16176348));x.scale.set(2,1,1.3),x.position.set(.3,.02,.6),x.receiveShadow=!0,c.add(x);let p=U(.03,.55,.03,9206379,.3,gn-.27,.3);p.castShadow=!1,c.add(p);let T=new St(new Be(.6,.4,.6),new _e({color:16773544,emissive:16765562,emissiveIntensity:0,map:hi(gt.PLASTER)}));T.position.set(.3,gn-.72,.3),T.castShadow=!1,c.add(T);let b={wall:o,wall2:a,ceil:u,skyMat:_};e.build(c,b);{let j=b.windowX!=null?b.windowX:2.2,pt=2.1,ct=-Gn/2;c.add(U(1.9,1.5,.08,16777215,j,pt,ct+.06)),c.add(U(1.7,1.3,.09,0,j,pt,ct+.07,_)),c.add(U(.05,1.3,.1,16777215,j,pt,ct+.1)),c.add(U(1.7,.05,.1,16777215,j,pt,ct+.1));let R=U(2.5,.05,.05,12883572,j,pt+.9,ct+.2);R.castShadow=!1,c.add(R),[-1,1].forEach(E=>{let k=U(.24,1.75,.05,16762063,j+E*1.08,pt+0,ct+.2);k.castShadow=!1,c.add(k);let K=U(.28,.06,.07,16165309,j+E*1.08,pt-.25,ct+.22);K.castShadow=!1,c.add(K)})}let M=[];c.traverse(j=>{j.userData.hands&&(M=j.userData.hands)});let B=b.seats||(b.seat?[b.seat]:[]),P=t.looks||(t.look?[t.look]:[]),D=B.slice(0,P.length).map((j,pt)=>{let ct=nd(P[pt]);return c.add(ct.g),ct.g.position.set(j.x,j.y-Ah,j.z),ct.g.rotation.y=j.ry,ct.parts.legL.rotation.x=ct.parts.legR.rotation.x=-1.45,ct}),F=b.sofa||b.gamer?null:D[0]||null,A="",S=[];b.couple&&D.forEach((j,pt)=>{j.g.userData.pick="couple";let ct=t.names&&(pt===0?t.names.her:t.names.him)||(pt===0?"namu":"hunf"),R=Rh(ct,pt===0?"#d4618c":"#4f7fb8",.19);c.add(R),S.push(R)});let z=(()=>{let j=$i(16744350);return j.scale.setScalar(.16),j.visible=!1,c.add(j),j})(),Q=-1,O="",V=!1,q=!1,X=()=>O==="bed"?"bed":A==="lunch"||A==="dinner"?"meal":e.corners[t.corner]?t.corner:e.first;function ut(j,pt){O=j,Qt(X(),pt)}let tt=id("z Z z","#7a6a9a",.9,.45);if(c.add(tt),t.onPick){let j=new hr,pt=new xt,ct=null,R=0,E=!1,k=0,K=n.domElement,st=(at,it)=>{let At=K.getBoundingClientRect();pt.set((at-At.left)/At.width*2-1,-((it-At.top)/At.height)*2+1),j.setFromCamera(pt,r);let _t=j.intersectObjects(c.children,!0).find(te=>{if(te.object.isSprite)return!1;let Jt=te.object;for(;Jt&&!Jt.userData.pick;)Jt=Jt.parent;return!!Jt});if(!_t)return"";let Lt=_t.object;for(;Lt&&!Lt.userData.pick;)Lt=Lt.parent;return Lt.userData.pick},$=()=>{let at=new L;S[0].getWorldPosition(at);let it=new L;S[1].getWorldPosition(it),at.add(it).multiplyScalar(.5).project(r);let At=K.getBoundingClientRect();t.onPick("couple-menu",{x:At.left+(at.x+1)/2*At.width,y:At.top+(1-at.y)/2*At.height})},Pt=at=>{if(at==="couple"){Q<0&&(Q=0);return}if(at==="up"||at==="down"){V=!0,ut(at==="up"?"bed":"main");return}if(at==="album"){q=!0,Qt("album"),setTimeout(()=>t.onPick("album"),750);return}t.onPick(at)};K.addEventListener("contextmenu",at=>at.preventDefault()),K.addEventListener("pointerdown",at=>{ct={x:at.clientX,y:at.clientY,type:at.pointerType},E=!1,clearTimeout(R),at.pointerType!=="mouse"&&b.couple&&st(at.clientX,at.clientY)==="couple"&&(R=setTimeout(()=>{E=!0,$()},520))}),K.addEventListener("pointermove",at=>{ct&&Math.hypot(at.clientX-ct.x,at.clientY-ct.y)>8&&clearTimeout(R)}),K.addEventListener("pointerup",at=>{if(clearTimeout(R),!ct||E||Math.hypot(at.clientX-ct.x,at.clientY-ct.y)>8){ct=null;return}let it=ct.type;ct=null;let At=st(at.clientX,at.clientY);if(At){if(At==="couple"&&it==="mouse"){clearTimeout(k),k=setTimeout(()=>Pt("couple"),260);return}Pt(At)}}),K.addEventListener("dblclick",at=>{!b.couple||st(at.clientX,at.clientY)!=="couple"||(clearTimeout(k),$())})}let Mt=b.gamer?D[0]:null,yt=new lo(16777215,14861214,1.4);s.add(yt);let Nt=new uo(16774374,1.6);Nt.position.set(2.5,gn-.3,8),Nt.target.position.set(0,0,-2),s.add(Nt.target),Nt.castShadow=!0,Nt.shadow.mapSize.set(1024,1024),Object.assign(Nt.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:.5,far:25}),Nt.shadow.bias=-.001,s.add(Nt);let ie=new ho(16767392,0,12,1.3);ie.position.set(.3,gn-1.1,.3),s.add(ie);function me(){let j=new Date,pt=t.timeMode==="day"?11:t.timeMode==="night"?22:j.getHours()+j.getMinutes()/60,ct=rd(pt);_.color.copy(ct.sky),yt.intensity=1.5-ct.night*.7,Nt.intensity=1.6*(1-ct.night)+.2,ie.intensity=ct.night*8,T.material.emissiveIntensity=ct.night,M.length&&(M[0].rotation.z=-(j.getHours()%12)/12*Math.PI*2,M[1].rotation.z=-j.getMinutes()/60*Math.PI*2)}let lt=new L,bt=new L,Ft=new L,wt=new L;function qt(j){return e.corners[j]||e.corners[e.first]}function Qt(j,pt){let ct=qt(j);Ft.set(ct[0],ct[1],ct[2]),wt.set(ct[3],ct[4],ct[5]),pt&&(lt.copy(Ft),bt.copy(wt))}Qt(t.corner,!0),t.walkIn&&(lt.set(0,1.7,Gn/2+3.2),bt.set(0,1.4,-Gn/2));function jt(){let j=i.clientWidth||innerWidth,pt=i.clientHeight||innerHeight;n.setSize(j,pt,!1),r.aspect=j/pt,r.fov=j/pt<.9?64:50,j/pt<.9?r.setViewOffset(j,pt,0,-pt*.2,j,pt):r.clearViewOffset(),r.updateProjectionMatrix()}jt();let le=()=>jt();window.addEventListener("resize",le);let ft=new fo,Et=new L,N=!0,kt=0;function vt(){if(!N||(requestAnimationFrame(vt),document.hidden))return;let j=Math.min(.1,ft.getDelta()),pt=ft.elapsedTime;if(lt.lerp(Ft,Math.min(1,j*1.6)),bt.lerp(wt,Math.min(1,j*1.6)),r.position.copy(lt),r.lookAt(bt),b.couple){let ct=new Date,R=ct.getHours()+ct.getMinutes()/60,E=R>=22||R<6.5?"sleep":R>=11.5&&R<13?"lunch":R>=18.5&&R<19.75?"dinner":"sofa";if(E!==A){A=E,!V&&!q&&ut(E==="sleep"?"bed":"main",!O&&!t.walkIn);let k=E==="lunch"||E==="dinner"?b.dining:b.seats;D.forEach((K,st)=>{if(E==="sleep"){let $=b.bedSpots[st];K.g.position.set($.x,.9,$.z),K.g.rotation.set(-Math.PI/2,0,0),K.parts.legL.rotation.x=K.parts.legR.rotation.x=0}else K.g.position.set(k[st].x,k[st].y-Ah,k[st].z),K.g.rotation.set(0,k[st].ry,0),K.parts.legL.rotation.x=K.parts.legR.rotation.x=-1.45;K.sleepMap||(K.sleepMap=ed(K.parts.look,!0)),K.awakeMap||(K.awakeMap=K.parts.mat.map),K.parts.mat.map=E==="sleep"?K.sleepMap:K.awakeMap,K.parts.mat.needsUpdate=!0}),tt.visible=E==="sleep"}if(D.forEach((k,K)=>{let st=K===0?-1:1;A==="lunch"||A==="dinner"?(k.parts.armL.rotation.x=-.9,k.parts.armR.rotation.x=-1.35+Math.sin(pt*2.6+K*1.7)*.45,k.parts.head.rotation.set(.12+Math.max(0,Math.sin(pt*2.6+K*1.7))*.12,0,0)):A==="sleep"?(k.parts.armL.rotation.x=k.parts.armR.rotation.x=0,k.parts.head.rotation.set(.6,-st*(.35+Math.sin(pt*.9)*.03),0)):(k.parts.armL.rotation.x=k.parts.armR.rotation.x=-.6,k.parts.head.rotation.set(0,-st*.25,-st*(.18+Math.sin(pt*.8)*.04)))}),tt.visible&&(tt.position.set(14,1.6+pt*.25%.4,-3),tt.material.opacity=.9-pt*.25%.4*1.5),D.forEach((k,K)=>{k.parts.head.getWorldPosition(S[K].position),S[K].position.y+=A==="sleep"?.62:.55}),Q>=0){Q+=j;let k=D[1],K=D[0],st=Math.sin(Math.min(1,Q/1.6)*Math.PI);k.parts.head.rotation.y+=(A==="sleep"?-.5:-.9)*st,k.parts.head.rotation.z+=.25*st,K.parts.head.rotation.z-=.2*st,A!=="sleep"&&(k.g.rotation.z=.16*st);let $=new L;K.parts.head.getWorldPosition($);let Pt=new L;k.parts.head.getWorldPosition(Pt),z.visible=Q>.5,z.position.copy($).lerp(Pt,.5),z.position.y+=.35+(Q-.5)*.35,z.scale.setScalar(.12+Math.min(1,(Q-.5)*2)*.06),z.rotation.y=r.rotation.y,Q>2.1&&(Q=-1,z.visible=!1,k.g.rotation.z=0)}b.bedLamp&&(b.bedLamp.material.emissiveIntensity=A==="sleep"?.15:.6*ie.intensity/8)}else b.sofa&&D.forEach((ct,R)=>{ct.parts.armL.rotation.x=ct.parts.armR.rotation.x=-.6,ct.parts.head.rotation.z=(R===0?-1:1)*(.18+Math.sin(pt*.8)*.04),ct.parts.head.rotation.y=(R===0?1:-1)*.25});Mt&&(Mt.parts.armL.rotation.x=Mt.parts.armR.rotation.x=-1.1+Math.sin(pt*14)*.05,Mt.parts.head.rotation.x=-.05,Mt.parts.head.rotation.y=Math.sin(pt*.5)*.08),F&&(F.parts.armL.rotation.x=-1.2+Math.sin(pt*9)*.12,F.parts.armR.rotation.x=-1.2+Math.sin(pt*9+1.8)*.12,F.parts.head.rotation.x=.15+Math.sin(pt*.6)*.05,F.parts.head.rotation.y=Math.sin(pt*.35)*.25),(pt-kt>20||kt===0)&&(me(),kt=pt||.001),n.render(s,r),Et.set(.3,.05,.6).project(r),document.documentElement.style.setProperty("--rug-x",((Et.x+1)/2*100).toFixed(1)+"vw"),document.documentElement.style.setProperty("--rug-y",((1-Et.y)/2*100).toFixed(1)+"vh")}me(),requestAnimationFrame(vt),/[?&]debug3d/.test(location.search)&&(window.__room={camera:r,R:b,renderer:n,sitters:D});function Vt(j){if(!b.dinner)return;(b.foodMeshes||[]).forEach(R=>{b.dinner.remove(R)}),b.foodMeshes=[],j=(j||[]).filter(R=>R&&R.name).slice(0,4),b.defaultDishes.forEach(R=>{R.visible=!j.length});let pt=[[0],[-.33,.33],[-.48,0,.48],[-.54,-.18,.18,.54]][Math.max(0,j.length-1)]||[],ct=new ao;ct.setCrossOrigin("anonymous"),j.forEach((R,E)=>{let k=new Kt;k.position.set(pt[E],.8,-.12+E%2*.06),b.dinner.add(k),b.foodMeshes.push(k);let K=new St(new Pe(.2,.15,.05,24),re(16777215));k.add(K);let st=new St(new xs(.19,.015,8,24),re([16171471,13231096,16773544,13495501][E]));if(st.rotation.x=Math.PI/2,st.position.y=.025,k.add(st),R.key&&window.FoodArt){k.remove(K),k.remove(st),k.add(U(.42,.04,.42,16777215,0,0,0)),k.add(U(.46,.02,.46,[16171471,13231096,16773544,13495501][E],0,-.02,0));let it=new rn(window.FoodArt.draw(document.createElement("canvas"),R.key,4));it.magFilter=Xe,it.minFilter=Xe,it.colorSpace=Ue;let At=new St(new Ri(.42,.42),new _e({map:it,transparent:!0,alphaTest:.3,side:ln}));At.position.set(0,.2,0),At.rotation.x=-.25,k.add(At);return}let $=new _e({color:16777215}),Pt=new St(new Ta(.16,28),$);Pt.rotation.x=-Math.PI/2,Pt.position.y=.03,k.add(Pt);let at=()=>{let it=document.createElement("canvas");it.width=it.height=128;let At=it.getContext("2d");At.fillStyle=["#ffe1e9","#e1f0fb","#fff6cf","#e3f5e1"][E],At.fillRect(0,0,128,128),At.font="64px sans-serif",At.textAlign="center",At.fillText("\u{1F372}",64,76),At.font="800 16px Nunito, sans-serif",At.fillStyle="#8a5a6a",At.fillText(R.name.slice(0,14),64,112),$.map=new rn(it),$.map.colorSpace=Ue,$.needsUpdate=!0};if(!R.img){at();return}if(/^data:image\/svg/.test(R.img)){let it=new Image;it.onload=()=>{let At=document.createElement("canvas");At.width=At.height=256;let _t=At.getContext("2d");_t.fillStyle="#fffaf5",_t.fillRect(0,0,256,256),_t.drawImage(it,0,0,256,256),$.map=new rn(At),$.map.colorSpace=Ue,$.needsUpdate=!0},it.onerror=at,it.src=R.img;return}ct.load(R.img,it=>{it.colorSpace=Ue;let At=it.image.width/it.image.height;At>1?(it.repeat.set(1/At,1),it.offset.set((1-1/At)/2,0)):(it.repeat.set(1,At),it.offset.set(0,(1-At)/2)),$.map=it,$.needsUpdate=!0},void 0,at)})}return{house:t.house,setCorner(j){if(b.couple){t.corner=j,q||Qt(X(),!1);return}Qt(j,!1)},back(){q=!1,Qt(X(),!1)},setFood:Vt,get floor(){return O},setPhotos(j){if(!b.frames)return;let pt=new ao;b.frames.forEach((ct,R)=>{j[R]&&pt.load(j[R],E=>{E.colorSpace=Ue;let k=E.image,K=ct.geometry.parameters.width,st=ct.geometry.parameters.height,$=k.width/k.height,Pt=K/st;$>Pt?(E.repeat.set(Pt/$,1),E.offset.set((1-Pt/$)/2,0)):(E.repeat.set(1,$/Pt),E.offset.set(0,(1-$/Pt)/2)),ct.material.map=E,ct.material.color.set(16777215),ct.material.needsUpdate=!0})})},setTimeMode(j){t.timeMode=j,me()},destroy(){N=!1,window.removeEventListener("resize",le),s.traverse(j=>{j.geometry&&j.geometry.dispose()}),n.dispose(),n.domElement.remove()}}}window.Village3D={create:Cy,room:Oy,LOOKS:Wa,LOVE:Th,ROOF:fi.roof};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
