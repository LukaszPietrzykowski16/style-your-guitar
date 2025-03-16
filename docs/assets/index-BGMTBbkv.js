var Mf=Object.defineProperty;var Bc=s=>{throw TypeError(s)};var Sf=(s,e,t)=>e in s?Mf(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Ve=(s,e,t)=>Sf(s,typeof e!="symbol"?e+"":e,t),Tf=(s,e,t)=>e.has(s)||Bc("Cannot "+t);var Jo=(s,e,t)=>(Tf(s,e,"read from private field"),t?t.call(s):e.get(s)),kc=(s,e,t)=>e.has(s)?Bc("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jl="167",tr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},nr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ef=0,zc=1,bf=2,Lh=1,Af=2,Xn=3,Jn=0,Wt=1,Cn=2,Mi=0,br=1,Ga=2,Hc=3,Vc=4,wf=5,zi=100,Rf=101,Cf=102,Pf=103,Lf=104,If=200,Df=201,Nf=202,Uf=203,ja=204,Wa=205,Of=206,Ff=207,Bf=208,kf=209,zf=210,Hf=211,Vf=212,Gf=213,jf=214,Wf=0,Xf=1,Yf=2,Ao=3,Kf=4,qf=5,Zf=6,$f=7,Wl=0,Jf=1,Qf=2,Si=0,ep=1,tp=2,np=3,ip=4,rp=5,sp=6,op=7,Gc="attached",ap="detached",Ih=300,Dr=301,Nr=302,Xa=303,Ya=304,Vo=306,Ur=1e3,mi=1001,wo=1002,jt=1003,Dh=1004,hs=1005,rn=1006,go=1007,Zn=1008,Qn=1009,Nh=1010,Uh=1011,Ms=1012,Xl=1013,Ki=1014,Tn=1015,Ds=1016,Yl=1017,Kl=1018,Or=1020,Oh=35902,Fh=1021,Bh=1022,pn=1023,kh=1024,zh=1025,Ar=1026,Fr=1027,ql=1028,Zl=1029,Hh=1030,$l=1031,Jl=1033,_o=33776,xo=33777,yo=33778,vo=33779,Ka=35840,qa=35841,Za=35842,$a=35843,Ja=36196,Qa=37492,el=37496,tl=37808,nl=37809,il=37810,rl=37811,sl=37812,ol=37813,al=37814,ll=37815,cl=37816,ul=37817,hl=37818,dl=37819,fl=37820,pl=37821,Mo=36492,ml=36494,gl=36495,Vh=36283,_l=36284,xl=36285,yl=36286,Ss=2300,Ts=2301,Qo=2302,jc=2400,Wc=2401,Xc=2402,lp=2500,cp=0,Gh=1,vl=2,up=3200,hp=3201,Ql=0,dp=1,pi="",Ht="srgb",It="srgb-linear",ec="display-p3",Go="display-p3-linear",Ro="linear",it="srgb",Co="rec709",Po="p3",ir=7680,Yc=519,fp=512,pp=513,mp=514,jh=515,gp=516,_p=517,xp=518,yp=519,Ml=35044,Kc="300 es",$n=2e3,Lo=2001;class Ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qc=1234567;const ms=Math.PI/180,Br=180/Math.PI;function En(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[s&255]+Dt[s>>8&255]+Dt[s>>16&255]+Dt[s>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function Pt(s,e,t){return Math.max(e,Math.min(t,s))}function tc(s,e){return(s%e+e)%e}function vp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Mp(s,e,t){return s!==e?(t-s)/(e-s):0}function gs(s,e,t){return(1-t)*s+t*e}function Sp(s,e,t,n){return gs(s,e,1-Math.exp(-t*n))}function Tp(s,e=1){return e-Math.abs(tc(s,e*2)-e)}function Ep(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function bp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Ap(s,e){return s+Math.floor(Math.random()*(e-s+1))}function wp(s,e){return s+Math.random()*(e-s)}function Rp(s){return s*(.5-Math.random())}function Cp(s){s!==void 0&&(qc=s);let e=qc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Pp(s){return s*ms}function Lp(s){return s*Br}function Ip(s){return(s&s-1)===0&&s!==0}function Dp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Np(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Up(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*d,a*c);break;case"YZY":s.set(l*d,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*d,a*u,a*c);break;case"XZX":s.set(a*u,l*_,l*f,a*c);break;case"YXY":s.set(l*f,a*u,l*_,a*c);break;case"ZYZ":s.set(l*_,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Sn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function $e(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const nc={DEG2RAD:ms,RAD2DEG:Br,generateUUID:En,clamp:Pt,euclideanModulo:tc,mapLinear:vp,inverseLerp:Mp,lerp:gs,damp:Sp,pingpong:Tp,smoothstep:Ep,smootherstep:bp,randInt:Ap,randFloat:wp,randFloatSpread:Rp,seededRandom:Cp,degToRad:Pp,radToDeg:Lp,isPowerOfTwo:Ip,ceilPowerOfTwo:Dp,floorPowerOfTwo:Np,setQuaternionFromProperEuler:Up,normalize:$e,denormalize:Sn};class ve{constructor(e=0,t=0){ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,t,n,i,r,o,a,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],_=n[8],m=i[0],g=i[3],p=i[6],y=i[1],x=i[4],v=i[7],w=i[2],T=i[5],E=i[8];return r[0]=o*m+a*y+l*w,r[3]=o*g+a*x+l*T,r[6]=o*p+a*v+l*E,r[1]=c*m+u*y+h*w,r[4]=c*g+u*x+h*T,r[7]=c*p+u*v+h*E,r[2]=d*m+f*y+_*w,r[5]=d*g+f*x+_*T,r[8]=d*p+f*v+_*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,_=t*h+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/_;return e[0]=h*m,e[1]=(i*c-u*n)*m,e[2]=(a*n-i*o)*m,e[3]=d*m,e[4]=(u*t-i*l)*m,e[5]=(i*r-a*t)*m,e[6]=f*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ea.makeScale(e,t)),this}rotate(e){return this.premultiply(ea.makeRotation(-e)),this}translate(e,t){return this.premultiply(ea.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ea=new Fe;function Wh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Es(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Op(){const s=Es("canvas");return s.style.display="block",s}const Zc={};function wr(s){s in Zc||(Zc[s]=!0,console.warn(s))}function Fp(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const $c=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jc=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),es={[It]:{transfer:Ro,primaries:Co,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[Ht]:{transfer:it,primaries:Co,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Go]:{transfer:Ro,primaries:Po,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Jc),fromReference:s=>s.applyMatrix3($c)},[ec]:{transfer:it,primaries:Po,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Jc),fromReference:s=>s.applyMatrix3($c).convertLinearToSRGB()}},Bp=new Set([It,Go]),Xe={enabled:!0,_workingColorSpace:It,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Bp.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=es[e].toReference,i=es[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return es[s].primaries},getTransfer:function(s){return s===pi?Ro:es[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(es[e].luminanceCoefficients)}};function Rr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ta(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let rr;class kp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rr===void 0&&(rr=Es("canvas")),rr.width=e.width,rr.height=e.height;const n=rr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=rr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Es("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Rr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Rr(t[n]/255)*255):t[n]=Rr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zp=0;class Xh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=En(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(na(i[o].image)):r.push(na(i[o]))}else r=na(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function na(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?kp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hp=0;class At extends Ji{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=mi,i=mi,r=rn,o=Zn,a=pn,l=Qn,c=At.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=En(),this.name="",this.source=new Xh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ih)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ur:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ur:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=Ih;At.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,i=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],_=l[9],m=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-m)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+m)<.1&&Math.abs(_+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(f+1)/2,w=(p+1)/2,T=(u+d)/4,E=(h+m)/4,C=(_+g)/4;return x>v&&x>w?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=T/n,r=E/n):v>w?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=T/i,r=C/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=E/r,i=C/r),this.set(n,i,r,t),this}let y=Math.sqrt((g-_)*(g-_)+(h-m)*(h-m)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(g-_)/y,this.y=(h-m)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vp extends Ji{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new At(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Xh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends Vp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Yh extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gp extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],f=r[o+1],_=r[o+2],m=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=m;return}if(h!==m||l!==d||c!==f||u!==_){let g=1-a;const p=l*d+c*f+u*_+h*m,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const w=Math.sqrt(x),T=Math.atan2(w,p*y);g=Math.sin(g*T)/w,a=Math.sin(a*T)/w}const v=a*y;if(l=l*g+d*v,c=c*g+f*v,u=u*g+_*v,h=h*g+m*v,g===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],_=r[o+3];return e[t]=a*_+u*h+l*f-c*d,e[t+1]=l*_+u*d+c*h-a*f,e[t+2]=c*_+u*f+a*d-l*h,e[t+3]=u*_-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),d=l(n/2),f=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"YZX":this._x=d*u*h+c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h-d*f*_;break;case"XZY":this._x=d*u*h-c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ia.copy(this).projectOnVector(e),this.sub(ia)}reflect(e){return this.sub(ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ia=new D,Qc=new Nn;class ii{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,yn):yn.fromBufferAttribute(r,o),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ks.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox)),ks.applyMatrix4(e.matrixWorld),this.union(ks)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ts),zs.subVectors(this.max,ts),sr.subVectors(e.a,ts),or.subVectors(e.b,ts),ar.subVectors(e.c,ts),oi.subVectors(or,sr),ai.subVectors(ar,or),Ci.subVectors(sr,ar);let t=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Ci.z,Ci.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Ci.z,0,-Ci.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Ci.y,Ci.x,0];return!ra(t,sr,or,ar,zs)||(t=[1,0,0,0,1,0,0,0,1],!ra(t,sr,or,ar,zs))?!1:(Hs.crossVectors(oi,ai),t=[Hs.x,Hs.y,Hs.z],ra(t,sr,or,ar,zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zn=[new D,new D,new D,new D,new D,new D,new D,new D],yn=new D,ks=new ii,sr=new D,or=new D,ar=new D,oi=new D,ai=new D,Ci=new D,ts=new D,zs=new D,Hs=new D,Pi=new D;function ra(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Pi.fromArray(s,r);const a=i.x*Math.abs(Pi.x)+i.y*Math.abs(Pi.y)+i.z*Math.abs(Pi.z),l=e.dot(Pi),c=t.dot(Pi),u=n.dot(Pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const jp=new ii,ns=new D,sa=new D;class On{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):jp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ns.subVectors(e,this.center);const t=ns.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ns,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ns.copy(e.center).add(sa)),this.expandByPoint(ns.copy(e.center).sub(sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hn=new D,oa=new D,Vs=new D,li=new D,aa=new D,Gs=new D,la=new D;class Kr{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){oa.copy(e).add(t).multiplyScalar(.5),Vs.copy(t).sub(e).normalize(),li.copy(this.origin).sub(oa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Vs),a=li.dot(this.direction),l=-li.dot(Vs),c=li.lengthSq(),u=Math.abs(1-o*o);let h,d,f,_;if(u>0)if(h=o*l-a,d=o*a-l,_=r*u,h>=0)if(d>=-_)if(d<=_){const m=1/u;h*=m,d*=m,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(oa).addScaledVector(Vs,d),f}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const n=Hn.dot(this.direction),i=Hn.dot(Hn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,i,r){aa.subVectors(t,e),Gs.subVectors(n,e),la.crossVectors(aa,Gs);let o=this.direction.dot(la),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;li.subVectors(this.origin,e);const l=a*this.direction.dot(Gs.crossVectors(li,Gs));if(l<0)return null;const c=a*this.direction.dot(aa.cross(li));if(c<0||l+c>o)return null;const u=-a*li.dot(la);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ne{constructor(e,t,n,i,r,o,a,l,c,u,h,d,f,_,m,g){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,d,f,_,m,g)}set(e,t,n,i,r,o,a,l,c,u,h,d,f,_,m,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=_,p[11]=m,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ne().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/lr.setFromMatrixColumn(e,0).length(),r=1/lr.setFromMatrixColumn(e,1).length(),o=1/lr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,_=a*u,m=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+_*c,t[5]=d-m*c,t[9]=-a*l,t[2]=m-d*c,t[6]=_+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,_=c*u,m=c*h;t[0]=d+m*a,t[4]=_*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-_,t[6]=m+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,_=c*u,m=c*h;t[0]=d-m*a,t[4]=-o*h,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*u,t[9]=m-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,_=a*u,m=a*h;t[0]=l*u,t[4]=_*c-f,t[8]=d*c+m,t[1]=l*h,t[5]=m*c+d,t[9]=f*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,_=a*l,m=a*c;t[0]=l*u,t[4]=m-d*h,t[8]=_*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+_,t[10]=d-m*h}else if(e.order==="XZY"){const d=o*l,f=o*c,_=a*l,m=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+m,t[5]=o*u,t[9]=f*h-_,t[2]=_*h-f,t[6]=a*u,t[10]=m*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wp,e,Xp)}lookAt(e,t,n){const i=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),ci.crossVectors(n,en),ci.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ci.crossVectors(n,en)),ci.normalize(),js.crossVectors(en,ci),i[0]=ci.x,i[4]=js.x,i[8]=en.x,i[1]=ci.y,i[5]=js.y,i[9]=en.y,i[2]=ci.z,i[6]=js.z,i[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],_=n[2],m=n[6],g=n[10],p=n[14],y=n[3],x=n[7],v=n[11],w=n[15],T=i[0],E=i[4],C=i[8],S=i[12],b=i[1],L=i[5],B=i[9],U=i[13],K=i[2],q=i[6],H=i[10],W=i[14],G=i[3],ne=i[7],re=i[11],ae=i[15];return r[0]=o*T+a*b+l*K+c*G,r[4]=o*E+a*L+l*q+c*ne,r[8]=o*C+a*B+l*H+c*re,r[12]=o*S+a*U+l*W+c*ae,r[1]=u*T+h*b+d*K+f*G,r[5]=u*E+h*L+d*q+f*ne,r[9]=u*C+h*B+d*H+f*re,r[13]=u*S+h*U+d*W+f*ae,r[2]=_*T+m*b+g*K+p*G,r[6]=_*E+m*L+g*q+p*ne,r[10]=_*C+m*B+g*H+p*re,r[14]=_*S+m*U+g*W+p*ae,r[3]=y*T+x*b+v*K+w*G,r[7]=y*E+x*L+v*q+w*ne,r[11]=y*C+x*B+v*H+w*re,r[15]=y*S+x*U+v*W+w*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],_=e[3],m=e[7],g=e[11],p=e[15];return _*(+r*l*h-i*c*h-r*a*d+n*c*d+i*a*f-n*l*f)+m*(+t*l*f-t*c*d+r*o*d-i*o*f+i*c*u-r*l*u)+g*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],_=e[12],m=e[13],g=e[14],p=e[15],y=h*g*c-m*d*c+m*l*f-a*g*f-h*l*p+a*d*p,x=_*d*c-u*g*c-_*l*f+o*g*f+u*l*p-o*d*p,v=u*m*c-_*h*c+_*a*f-o*m*f-u*a*p+o*h*p,w=_*h*l-u*m*l-_*a*d+o*m*d+u*a*g-o*h*g,T=t*y+n*x+i*v+r*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=y*E,e[1]=(m*d*r-h*g*r-m*i*f+n*g*f+h*i*p-n*d*p)*E,e[2]=(a*g*r-m*l*r+m*i*c-n*g*c-a*i*p+n*l*p)*E,e[3]=(h*l*r-a*d*r-h*i*c+n*d*c+a*i*f-n*l*f)*E,e[4]=x*E,e[5]=(u*g*r-_*d*r+_*i*f-t*g*f-u*i*p+t*d*p)*E,e[6]=(_*l*r-o*g*r-_*i*c+t*g*c+o*i*p-t*l*p)*E,e[7]=(o*d*r-u*l*r+u*i*c-t*d*c-o*i*f+t*l*f)*E,e[8]=v*E,e[9]=(_*h*r-u*m*r-_*n*f+t*m*f+u*n*p-t*h*p)*E,e[10]=(o*m*r-_*a*r+_*n*c-t*m*c-o*n*p+t*a*p)*E,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*E,e[12]=w*E,e[13]=(u*m*i-_*h*i+_*n*d-t*m*d-u*n*g+t*h*g)*E,e[14]=(_*a*i-o*m*i-_*n*l+t*m*l+o*n*g-t*a*g)*E,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,_=r*h,m=o*u,g=o*h,p=a*h,y=l*c,x=l*u,v=l*h,w=n.x,T=n.y,E=n.z;return i[0]=(1-(m+p))*w,i[1]=(f+v)*w,i[2]=(_-x)*w,i[3]=0,i[4]=(f-v)*T,i[5]=(1-(d+p))*T,i[6]=(g+y)*T,i[7]=0,i[8]=(_+x)*E,i[9]=(g-y)*E,i[10]=(1-(d+m))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=lr.set(i[0],i[1],i[2]).length();const o=lr.set(i[4],i[5],i[6]).length(),a=lr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],vn.copy(this);const c=1/r,u=1/o,h=1/a;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=h,vn.elements[9]*=h,vn.elements[10]*=h,t.setFromRotationMatrix(vn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=$n){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,_;if(a===$n)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Lo)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=$n){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-r),d=(t+e)*c,f=(n+i)*u;let _,m;if(a===$n)_=(o+r)*h,m=-2*h;else if(a===Lo)_=r*h,m=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=m,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const lr=new D,vn=new Ne,Wp=new D(0,0,0),Xp=new D(1,1,1),ci=new D,js=new D,en=new D,eu=new Ne,tu=new Nn;class An{constructor(e=0,t=0,n=0,i=An.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return eu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tu.setFromEuler(this),this.setFromQuaternion(tu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class ic{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yp=0;const nu=new D,cr=new Nn,Vn=new Ne,Ws=new D,is=new D,Kp=new D,qp=new Nn,iu=new D(1,0,0),ru=new D(0,1,0),su=new D(0,0,1),ou={type:"added"},Zp={type:"removed"},ur={type:"childadded",child:null},ca={type:"childremoved",child:null};class ot extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=En(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ot.DEFAULT_UP.clone();const e=new D,t=new An,n=new Nn,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Fe}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ic,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(iu,e)}rotateY(e){return this.rotateOnAxis(ru,e)}rotateZ(e){return this.rotateOnAxis(su,e)}translateOnAxis(e,t){return nu.copy(e).applyQuaternion(this.quaternion),this.position.add(nu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(iu,e)}translateY(e){return this.translateOnAxis(ru,e)}translateZ(e){return this.translateOnAxis(su,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ws.copy(e):Ws.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(is,Ws,this.up):Vn.lookAt(Ws,is,this.up),this.quaternion.setFromRotationMatrix(Vn),i&&(Vn.extractRotation(i.matrixWorld),cr.setFromRotationMatrix(Vn),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ou),ur.child=e,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zp),ca.child=e,this.dispatchEvent(ca),ca.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ou),ur.child=e,this.dispatchEvent(ur),ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,e,Kp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,qp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ot.DEFAULT_UP=new D(0,1,0);ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new D,Gn=new D,ua=new D,jn=new D,hr=new D,dr=new D,au=new D,ha=new D,da=new D,fa=new D;class Pn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Mn.subVectors(e,t),i.cross(Mn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Mn.subVectors(i,t),Gn.subVectors(n,t),ua.subVectors(e,t);const o=Mn.dot(Mn),a=Mn.dot(Gn),l=Mn.dot(ua),c=Gn.dot(Gn),u=Gn.dot(ua),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,_=(o*u-a*l)*d;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(o,jn.y),l.addScaledVector(a,jn.z),l)}static isFrontFacing(e,t,n,i){return Mn.subVectors(n,t),Gn.subVectors(e,t),Mn.cross(Gn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),Mn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Pn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;hr.subVectors(i,n),dr.subVectors(r,n),ha.subVectors(e,n);const l=hr.dot(ha),c=dr.dot(ha);if(l<=0&&c<=0)return t.copy(n);da.subVectors(e,i);const u=hr.dot(da),h=dr.dot(da);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(hr,o);fa.subVectors(e,r);const f=hr.dot(fa),_=dr.dot(fa);if(_>=0&&f<=_)return t.copy(r);const m=f*c-l*_;if(m<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(dr,a);const g=u*_-f*h;if(g<=0&&h-u>=0&&f-_>=0)return au.subVectors(r,i),a=(h-u)/(h-u+(f-_)),t.copy(i).addScaledVector(au,a);const p=1/(g+m+d);return o=m*p,a=d*p,t.copy(n).addScaledVector(hr,o).addScaledVector(dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Xs={h:0,s:0,l:0};function pa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=tc(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=pa(o,r,e+1/3),this.g=pa(o,r,e),this.b=pa(o,r,e-1/3)}return Xe.toWorkingColorSpace(this,i),this}setStyle(e,t=Ht){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const n=Kh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}copyLinearToSRGB(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return Xe.fromWorkingColorSpace(Nt.copy(this),e),Math.round(Pt(Nt.r*255,0,255))*65536+Math.round(Pt(Nt.g*255,0,255))*256+Math.round(Pt(Nt.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(Nt.copy(this),t);const n=Nt.r,i=Nt.g,r=Nt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Ht){Xe.fromWorkingColorSpace(Nt.copy(this),e);const t=Nt.r,n=Nt.g,i=Nt.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(Xs);const n=gs(ui.h,Xs.h,t),i=gs(ui.s,Xs.s,t),r=gs(ui.l,Xs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new Te;Te.NAMES=Kh;let $p=0;class bn extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=En(),this.name="",this.type="Material",this.blending=br,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ja,this.blendDst=Wa,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ja&&(n.blendSrc=this.blendSrc),this.blendDst!==Wa&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ao&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class gi extends bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new D,Ys=new ve;class Xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ml,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return wr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ys.fromBufferAttribute(this,t),Ys.applyMatrix3(e),this.setXY(t,Ys.x,Ys.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$e(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array),r=$e(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ml&&(e.usage=this.usage),e}}class qh extends Xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Zh extends Xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Lt extends Xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Jp=0;const hn=new Ne,ma=new ot,fr=new D,tn=new ii,rs=new ii,Et=new D;class cn extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=En(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wh(e)?Zh:qh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return ma.lookAt(e),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];rs.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(tn.min,rs.min),tn.expandByPoint(Et),Et.addVectors(tn.max,rs.max),tn.expandByPoint(Et)):(tn.expandByPoint(rs.min),tn.expandByPoint(rs.max))}tn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Et.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Et));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Et.fromBufferAttribute(a,c),l&&(fr.fromBufferAttribute(e,c),Et.add(fr)),i=Math.max(i,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new D,l[C]=new D;const c=new D,u=new D,h=new D,d=new ve,f=new ve,_=new ve,m=new D,g=new D;function p(C,S,b){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,b),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,S),_.fromBufferAttribute(r,b),u.sub(c),h.sub(c),f.sub(d),_.sub(d);const L=1/(f.x*_.y-_.x*f.y);isFinite(L)&&(m.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(L),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(L),a[C].add(m),a[S].add(m),a[b].add(m),l[C].add(g),l[S].add(g),l[b].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,S=y.length;C<S;++C){const b=y[C],L=b.start,B=b.count;for(let U=L,K=L+B;U<K;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const x=new D,v=new D,w=new D,T=new D;function E(C){w.fromBufferAttribute(i,C),T.copy(w);const S=a[C];x.copy(S),x.sub(w.multiplyScalar(w.dot(S))).normalize(),v.crossVectors(T,S);const L=v.dot(l[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,L)}for(let C=0,S=y.length;C<S;++C){const b=y[C],L=b.start,B=b.count;for(let U=L,K=L+B;U<K;U+=3)E(e.getX(U+0)),E(e.getX(U+1)),E(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new D,r=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),m=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,m),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,_=0;for(let m=0,g=l.length;m<g;m++){a.isInterleavedBufferAttribute?f=l[m]*a.data.stride+a.offset:f=l[m]*u;for(let p=0;p<u;p++)d[_++]=c[f++]}return new Xt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lu=new Ne,Li=new Kr,Ks=new On,cu=new D,pr=new D,mr=new D,gr=new D,ga=new D,qs=new D,Zs=new ve,$s=new ve,Js=new ve,uu=new D,hu=new D,du=new D,Qs=new D,eo=new D;class Ot extends ot{constructor(e=new cn,t=new gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){qs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(ga.fromBufferAttribute(h,e),o?qs.addScaledVector(ga,u):qs.addScaledVector(ga.sub(t),u))}t.add(qs)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(r),Li.copy(e.ray).recast(e.near),!(Ks.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Ks,cu)===null||Li.origin.distanceToSquared(cu)>(e.far-e.near)**2))&&(lu.copy(r).invert(),Li.copy(e.ray).applyMatrix4(lu),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,m=d.length;_<m;_++){const g=d[_],p=o[g.materialIndex],y=Math.max(g.start,f.start),x=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,w=x;v<w;v+=3){const T=a.getX(v),E=a.getX(v+1),C=a.getX(v+2);i=to(this,p,e,n,c,u,h,T,E,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),m=Math.min(a.count,f.start+f.count);for(let g=_,p=m;g<p;g+=3){const y=a.getX(g),x=a.getX(g+1),v=a.getX(g+2);i=to(this,o,e,n,c,u,h,y,x,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,m=d.length;_<m;_++){const g=d[_],p=o[g.materialIndex],y=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,w=x;v<w;v+=3){const T=v,E=v+1,C=v+2;i=to(this,p,e,n,c,u,h,T,E,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),m=Math.min(l.count,f.start+f.count);for(let g=_,p=m;g<p;g+=3){const y=g,x=g+1,v=g+2;i=to(this,o,e,n,c,u,h,y,x,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function Qp(s,e,t,n,i,r,o,a){let l;if(e.side===Wt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Jn,a),l===null)return null;eo.copy(a),eo.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(eo);return c<t.near||c>t.far?null:{distance:c,point:eo.clone(),object:s}}function to(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,pr),s.getVertexPosition(l,mr),s.getVertexPosition(c,gr);const u=Qp(s,e,t,n,pr,mr,gr,Qs);if(u){i&&(Zs.fromBufferAttribute(i,a),$s.fromBufferAttribute(i,l),Js.fromBufferAttribute(i,c),u.uv=Pn.getInterpolation(Qs,pr,mr,gr,Zs,$s,Js,new ve)),r&&(Zs.fromBufferAttribute(r,a),$s.fromBufferAttribute(r,l),Js.fromBufferAttribute(r,c),u.uv1=Pn.getInterpolation(Qs,pr,mr,gr,Zs,$s,Js,new ve)),o&&(uu.fromBufferAttribute(o,a),hu.fromBufferAttribute(o,l),du.fromBufferAttribute(o,c),u.normal=Pn.getInterpolation(Qs,pr,mr,gr,uu,hu,du,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new D,materialIndex:0};Pn.getNormal(pr,mr,gr,h.normal),u.face=h}return u}class Ns extends cn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(u,3)),this.setAttribute("uv",new Lt(h,2));function _(m,g,p,y,x,v,w,T,E,C,S){const b=v/E,L=w/C,B=v/2,U=w/2,K=T/2,q=E+1,H=C+1;let W=0,G=0;const ne=new D;for(let re=0;re<H;re++){const ae=re*L-U;for(let Me=0;Me<q;Me++){const Be=Me*b-B;ne[m]=Be*y,ne[g]=ae*x,ne[p]=K,c.push(ne.x,ne.y,ne.z),ne[m]=0,ne[g]=0,ne[p]=T>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(Me/E),h.push(1-re/C),W+=1}}for(let re=0;re<C;re++)for(let ae=0;ae<E;ae++){const Me=d+ae+q*re,Be=d+ae+q*(re+1),X=d+(ae+1)+q*(re+1),$=d+(ae+1)+q*re;l.push(Me,Be,$),l.push(Be,X,$),G+=6}a.addGroup(f,G,S),f+=G,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function kr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function zt(s){const e={};for(let t=0;t<s.length;t++){const n=kr(s[t]);for(const i in n)e[i]=n[i]}return e}function em(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function $h(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const tm={clone:kr,merge:zt};var nm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,im=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nm,this.fragmentShader=im,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=kr(e.uniforms),this.uniformsGroups=em(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let Jh=class extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=$n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const hi=new D,fu=new ve,pu=new ve;class Vt extends Jh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Br*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Br*2*Math.atan(Math.tan(ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,fu,pu),t.subVectors(pu,fu)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ms*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _r=-90,xr=1;class rm extends ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Vt(_r,xr,e,t);i.layers=this.layers,this.add(i);const r=new Vt(_r,xr,e,t);r.layers=this.layers,this.add(r);const o=new Vt(_r,xr,e,t);o.layers=this.layers,this.add(o);const a=new Vt(_r,xr,e,t);a.layers=this.layers,this.add(a);const l=new Vt(_r,xr,e,t);l.layers=this.layers,this.add(l);const c=new Vt(_r,xr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===$n)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Qh extends At{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Dr,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sm extends qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Qh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ns(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:kr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:Mi});r.uniforms.tEquirect.value=t;const o=new Ot(i,r),a=t.minFilter;return t.minFilter===Zn&&(t.minFilter=rn),new rm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const _a=new D,om=new D,am=new Fe;class fi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=_a.subVectors(n,t).cross(om.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_a),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||am.getNormalMatrix(e),i=this.coplanarPoint(_a).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new On,no=new D;class rc{constructor(e=new fi,t=new fi,n=new fi,i=new fi,r=new fi,o=new fi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$n){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],_=i[9],m=i[10],g=i[11],p=i[12],y=i[13],x=i[14],v=i[15];if(n[0].setComponents(l-r,d-c,g-f,v-p).normalize(),n[1].setComponents(l+r,d+c,g+f,v+p).normalize(),n[2].setComponents(l+o,d+u,g+_,v+y).normalize(),n[3].setComponents(l-o,d-u,g-_,v-y).normalize(),n[4].setComponents(l-a,d-h,g-m,v-x).normalize(),t===$n)n[5].setComponents(l+a,d+h,g+m,v+x).normalize();else if(t===Lo)n[5].setComponents(a,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(no.x=i.normal.x>0?e.max.x:e.min.x,no.y=i.normal.y>0?e.max.y:e.min.y,no.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(no)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ed(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function lm(s){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l._updateRange,d=l.updateRanges;if(s.bindBuffer(c,a),h.count===-1&&d.length===0&&s.bufferSubData(c,0,u),d.length!==0){for(let f=0,_=d.length;f<_;f++){const m=d[f];s.bufferSubData(c,m.start*u.BYTES_PER_ELEMENT,u,m.start,m.count)}l.clearUpdateRanges()}h.count!==-1&&(s.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class jo extends cn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],_=[],m=[],g=[];for(let p=0;p<u;p++){const y=p*d-o;for(let x=0;x<c;x++){const v=x*h-r;_.push(v,-y,0),m.push(0,0,1),g.push(x/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const x=y+c*p,v=y+c*(p+1),w=y+1+c*(p+1),T=y+1+c*p;f.push(x,v,T),f.push(v,w,T)}this.setIndex(f),this.setAttribute("position",new Lt(_,3)),this.setAttribute("normal",new Lt(m,3)),this.setAttribute("uv",new Lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.width,e.height,e.widthSegments,e.heightSegments)}}var cm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,um=`#ifdef USE_ALPHAHASH
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
#endif`,hm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mm=`#ifdef USE_AOMAP
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
#endif`,gm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_m=`#ifdef USE_BATCHING
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
#endif`,xm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ym=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sm=`#ifdef USE_IRIDESCENCE
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
#endif`,Tm=`#ifdef USE_BUMPMAP
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
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Im=`#define PI 3.141592653589793
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
} // validated`,Dm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nm=`vec3 transformedNormal = objectNormal;
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
#endif`,Um=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Om=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,km="gl_FragColor = linearToOutputTexel( gl_FragColor );",zm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hm=`#ifdef USE_ENVMAP
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
#endif`,Vm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,jm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
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
#endif`,Xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ym=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Km=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zm=`#ifdef USE_GRADIENTMAP
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
}`,$m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eg=`uniform bool receiveShadow;
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
#endif`,tg=`#ifdef USE_ENVMAP
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
#endif`,ng=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,og=`PhysicalMaterial material;
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
#endif`,ag=`struct PhysicalMaterial {
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
}`,lg=`
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
#endif`,cg=`#if defined( RE_IndirectDiffuse )
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
#endif`,ug=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_g=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xg=`#if defined( USE_POINTS_UV )
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
#endif`,yg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eg=`#ifdef USE_MORPHTARGETS
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
#endif`,bg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lg=`#ifdef USE_NORMALMAP
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
#endif`,Ig=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ug=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Og=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yg=`float getShadowMask() {
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
}`,Kg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qg=`#ifdef USE_SKINNING
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
#endif`,Zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$g=`#ifdef USE_SKINNING
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
#endif`,Jg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t0=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,n0=`#ifdef USE_TRANSMISSION
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
#endif`,i0=`#ifdef USE_TRANSMISSION
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
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const l0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,c0=`uniform sampler2D t2D;
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
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`#include <common>
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
}`,m0=`#if DEPTH_PACKING == 3200
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
}`,g0=`#define DISTANCE
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
}`,_0=`#define DISTANCE
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
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v0=`uniform float scale;
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
}`,M0=`uniform vec3 diffuse;
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
}`,S0=`#include <common>
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
}`,T0=`uniform vec3 diffuse;
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
}`,E0=`#define LAMBERT
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
}`,b0=`#define LAMBERT
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
}`,A0=`#define MATCAP
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
}`,w0=`#define MATCAP
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
}`,R0=`#define NORMAL
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
}`,C0=`#define NORMAL
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
}`,P0=`#define PHONG
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
}`,L0=`#define PHONG
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
}`,I0=`#define STANDARD
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
}`,D0=`#define STANDARD
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
}`,N0=`#define TOON
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
}`,U0=`#define TOON
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
}`,O0=`uniform float size;
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
}`,F0=`uniform vec3 diffuse;
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
}`,B0=`#include <common>
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
}`,k0=`uniform vec3 color;
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
}`,z0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,H0=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:cm,alphahash_pars_fragment:um,alphamap_fragment:hm,alphamap_pars_fragment:dm,alphatest_fragment:fm,alphatest_pars_fragment:pm,aomap_fragment:mm,aomap_pars_fragment:gm,batching_pars_vertex:_m,batching_vertex:xm,begin_vertex:ym,beginnormal_vertex:vm,bsdfs:Mm,iridescence_fragment:Sm,bumpmap_pars_fragment:Tm,clipping_planes_fragment:Em,clipping_planes_pars_fragment:bm,clipping_planes_pars_vertex:Am,clipping_planes_vertex:wm,color_fragment:Rm,color_pars_fragment:Cm,color_pars_vertex:Pm,color_vertex:Lm,common:Im,cube_uv_reflection_fragment:Dm,defaultnormal_vertex:Nm,displacementmap_pars_vertex:Um,displacementmap_vertex:Om,emissivemap_fragment:Fm,emissivemap_pars_fragment:Bm,colorspace_fragment:km,colorspace_pars_fragment:zm,envmap_fragment:Hm,envmap_common_pars_fragment:Vm,envmap_pars_fragment:Gm,envmap_pars_vertex:jm,envmap_physical_pars_fragment:tg,envmap_vertex:Wm,fog_vertex:Xm,fog_pars_vertex:Ym,fog_fragment:Km,fog_pars_fragment:qm,gradientmap_pars_fragment:Zm,lightmap_pars_fragment:$m,lights_lambert_fragment:Jm,lights_lambert_pars_fragment:Qm,lights_pars_begin:eg,lights_toon_fragment:ng,lights_toon_pars_fragment:ig,lights_phong_fragment:rg,lights_phong_pars_fragment:sg,lights_physical_fragment:og,lights_physical_pars_fragment:ag,lights_fragment_begin:lg,lights_fragment_maps:cg,lights_fragment_end:ug,logdepthbuf_fragment:hg,logdepthbuf_pars_fragment:dg,logdepthbuf_pars_vertex:fg,logdepthbuf_vertex:pg,map_fragment:mg,map_pars_fragment:gg,map_particle_fragment:_g,map_particle_pars_fragment:xg,metalnessmap_fragment:yg,metalnessmap_pars_fragment:vg,morphinstance_vertex:Mg,morphcolor_vertex:Sg,morphnormal_vertex:Tg,morphtarget_pars_vertex:Eg,morphtarget_vertex:bg,normal_fragment_begin:Ag,normal_fragment_maps:wg,normal_pars_fragment:Rg,normal_pars_vertex:Cg,normal_vertex:Pg,normalmap_pars_fragment:Lg,clearcoat_normal_fragment_begin:Ig,clearcoat_normal_fragment_maps:Dg,clearcoat_pars_fragment:Ng,iridescence_pars_fragment:Ug,opaque_fragment:Og,packing:Fg,premultiplied_alpha_fragment:Bg,project_vertex:kg,dithering_fragment:zg,dithering_pars_fragment:Hg,roughnessmap_fragment:Vg,roughnessmap_pars_fragment:Gg,shadowmap_pars_fragment:jg,shadowmap_pars_vertex:Wg,shadowmap_vertex:Xg,shadowmask_pars_fragment:Yg,skinbase_vertex:Kg,skinning_pars_vertex:qg,skinning_vertex:Zg,skinnormal_vertex:$g,specularmap_fragment:Jg,specularmap_pars_fragment:Qg,tonemapping_fragment:e0,tonemapping_pars_fragment:t0,transmission_fragment:n0,transmission_pars_fragment:i0,uv_pars_fragment:r0,uv_pars_vertex:s0,uv_vertex:o0,worldpos_vertex:a0,background_vert:l0,background_frag:c0,backgroundCube_vert:u0,backgroundCube_frag:h0,cube_vert:d0,cube_frag:f0,depth_vert:p0,depth_frag:m0,distanceRGBA_vert:g0,distanceRGBA_frag:_0,equirect_vert:x0,equirect_frag:y0,linedashed_vert:v0,linedashed_frag:M0,meshbasic_vert:S0,meshbasic_frag:T0,meshlambert_vert:E0,meshlambert_frag:b0,meshmatcap_vert:A0,meshmatcap_frag:w0,meshnormal_vert:R0,meshnormal_frag:C0,meshphong_vert:P0,meshphong_frag:L0,meshphysical_vert:I0,meshphysical_frag:D0,meshtoon_vert:N0,meshtoon_frag:U0,points_vert:O0,points_frag:F0,shadow_vert:B0,shadow_frag:k0,sprite_vert:z0,sprite_frag:H0},oe={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Rn={basic:{uniforms:zt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:zt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Te(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:zt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:zt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:zt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Te(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:zt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:zt([oe.points,oe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:zt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:zt([oe.common,oe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:zt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:zt([oe.sprite,oe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:zt([oe.common,oe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:zt([oe.lights,oe.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Rn.physical={uniforms:zt([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const io={r:0,b:0,g:0},Di=new An,V0=new Ne;function G0(s,e,t,n,i,r,o){const a=new Te(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function _(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function m(y){let x=!1;const v=_(y);v===null?p(a,l):v&&v.isColor&&(p(v,1),x=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(y,x){const v=_(x);v&&(v.isCubeTexture||v.mapping===Vo)?(u===void 0&&(u=new Ot(new Ns(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:kr(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Di.copy(x.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(V0.makeRotationFromEuler(Di)),u.material.toneMapped=Xe.getTransfer(v.colorSpace)!==it,(h!==v||d!==v.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ot(new jo(2,2),new ei({name:"BackgroundMaterial",uniforms:kr(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(v.colorSpace)!==it,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,x){y.getRGB(io,$h(s)),n.buffers.color.setClear(io.r,io.g,io.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:m,addToRenderList:g}}function j0(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(b,L,B,U,K){let q=!1;const H=h(U,B,L);r!==H&&(r=H,c(r.object)),q=f(b,U,B,K),q&&_(b,U,B,K),K!==null&&e.update(K,s.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(b,L,B,U),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function u(b){return s.deleteVertexArray(b)}function h(b,L,B){const U=B.wireframe===!0;let K=n[b.id];K===void 0&&(K={},n[b.id]=K);let q=K[L.id];q===void 0&&(q={},K[L.id]=q);let H=q[U];return H===void 0&&(H=d(l()),q[U]=H),H}function d(b){const L=[],B=[],U=[];for(let K=0;K<t;K++)L[K]=0,B[K]=0,U[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:U,object:b,attributes:{},index:null}}function f(b,L,B,U){const K=r.attributes,q=L.attributes;let H=0;const W=B.getAttributes();for(const G in W)if(W[G].location>=0){const re=K[G];let ae=q[G];if(ae===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(ae=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(ae=b.instanceColor)),re===void 0||re.attribute!==ae||ae&&re.data!==ae.data)return!0;H++}return r.attributesNum!==H||r.index!==U}function _(b,L,B,U){const K={},q=L.attributes;let H=0;const W=B.getAttributes();for(const G in W)if(W[G].location>=0){let re=q[G];re===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(re=b.instanceColor));const ae={};ae.attribute=re,re&&re.data&&(ae.data=re.data),K[G]=ae,H++}r.attributes=K,r.attributesNum=H,r.index=U}function m(){const b=r.newAttributes;for(let L=0,B=b.length;L<B;L++)b[L]=0}function g(b){p(b,0)}function p(b,L){const B=r.newAttributes,U=r.enabledAttributes,K=r.attributeDivisors;B[b]=1,U[b]===0&&(s.enableVertexAttribArray(b),U[b]=1),K[b]!==L&&(s.vertexAttribDivisor(b,L),K[b]=L)}function y(){const b=r.newAttributes,L=r.enabledAttributes;for(let B=0,U=L.length;B<U;B++)L[B]!==b[B]&&(s.disableVertexAttribArray(B),L[B]=0)}function x(b,L,B,U,K,q,H){H===!0?s.vertexAttribIPointer(b,L,B,K,q):s.vertexAttribPointer(b,L,B,U,K,q)}function v(b,L,B,U){m();const K=U.attributes,q=B.getAttributes(),H=L.defaultAttributeValues;for(const W in q){const G=q[W];if(G.location>=0){let ne=K[W];if(ne===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(ne=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(ne=b.instanceColor)),ne!==void 0){const re=ne.normalized,ae=ne.itemSize,Me=e.get(ne);if(Me===void 0)continue;const Be=Me.buffer,X=Me.type,$=Me.bytesPerElement,fe=X===s.INT||X===s.UNSIGNED_INT||ne.gpuType===Xl;if(ne.isInterleavedBufferAttribute){const he=ne.data,Ie=he.stride,Ue=ne.offset;if(he.isInstancedInterleavedBuffer){for(let ke=0;ke<G.locationSize;ke++)p(G.location+ke,he.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ke=0;ke<G.locationSize;ke++)g(G.location+ke);s.bindBuffer(s.ARRAY_BUFFER,Be);for(let ke=0;ke<G.locationSize;ke++)x(G.location+ke,ae/G.locationSize,X,re,Ie*$,(Ue+ae/G.locationSize*ke)*$,fe)}else{if(ne.isInstancedBufferAttribute){for(let he=0;he<G.locationSize;he++)p(G.location+he,ne.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let he=0;he<G.locationSize;he++)g(G.location+he);s.bindBuffer(s.ARRAY_BUFFER,Be);for(let he=0;he<G.locationSize;he++)x(G.location+he,ae/G.locationSize,X,re,ae*$,ae/G.locationSize*he*$,fe)}}else if(H!==void 0){const re=H[W];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(G.location,re);break;case 3:s.vertexAttrib3fv(G.location,re);break;case 4:s.vertexAttrib4fv(G.location,re);break;default:s.vertexAttrib1fv(G.location,re)}}}}y()}function w(){C();for(const b in n){const L=n[b];for(const B in L){const U=L[B];for(const K in U)u(U[K].object),delete U[K];delete L[B]}delete n[b]}}function T(b){if(n[b.id]===void 0)return;const L=n[b.id];for(const B in L){const U=L[B];for(const K in U)u(U[K].object),delete U[K];delete L[B]}delete n[b.id]}function E(b){for(const L in n){const B=n[L];if(B[b.id]===void 0)continue;const U=B[b.id];for(const K in U)u(U[K].object),delete U[K];delete B[b.id]}}function C(){S(),o=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:m,enableAttribute:g,disableUnusedAttributes:y}}function W0(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let _=0;for(let m=0;m<h;m++)_+=u[m];for(let m=0;m<d.length;m++)t.update(_,n,d[m])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function X0(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==pn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const E=T===Ds&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Qn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Tn&&!E)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:p,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:v,maxSamples:w}}function Y0(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new fi,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,m=h.clipIntersection,g=h.clipShadows,p=s.get(h);if(!i||_===null||_.length===0||r&&!g)r?u(null):c();else{const y=r?0:n,x=y*4;let v=p.clippingState||null;l.value=v,v=u(_,d,x,f);for(let w=0;w!==x;++w)v[w]=t[w];p.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,_){const m=h!==null?h.length:0;let g=null;if(m!==0){if(g=l.value,_!==!0||g===null){const p=f+m*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,v=f;x!==m;++x,v+=4)o.copy(h[x]).applyMatrix4(y,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}}function K0(s){let e=new WeakMap;function t(o,a){return a===Xa?o.mapping=Dr:a===Ya&&(o.mapping=Nr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xa||a===Ya)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new sm(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class sc extends Jh{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Sr=4,mu=[.125,.215,.35,.446,.526,.582],Hi=20,xa=new sc,gu=new Te;let ya=null,va=0,Ma=0,Sa=!1;const Bi=(1+Math.sqrt(5))/2,yr=1/Bi,_u=[new D(-Bi,yr,0),new D(Bi,yr,0),new D(-yr,0,Bi),new D(yr,0,Bi),new D(0,Bi,-yr),new D(0,Bi,yr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class xu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ya=this._renderer.getRenderTarget(),va=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ya,va,Ma),this._renderer.xr.enabled=Sa,e.scissorTest=!1,ro(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Dr||e.mapping===Nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ya=this._renderer.getRenderTarget(),va=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Ds,format:pn,colorSpace:It,depthBuffer:!1},i=yu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=q0(r)),this._blurMaterial=Z0(r,e,t)}return i}_compileMaterial(e){const t=new Ot(this._lodPlanes[0],e);this._renderer.compile(t,xa)}_sceneToCubeUV(e,t,n,i){const a=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(gu),u.toneMapping=Si,u.autoClear=!1;const f=new gi({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),_=new Ot(new Ns,f);let m=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,m=!0):(f.color.copy(gu),m=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;ro(i,y*x,p>2?x:0,x,x),u.setRenderTarget(i),m&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Dr||e.mapping===Nr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vu());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ot(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ro(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,xa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=_u[(i-r-1)%_u.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ot(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Hi-1),m=r/_,g=isFinite(r)?1+Math.floor(u*m):Hi;g>Hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Hi}`);const p=[];let y=0;for(let E=0;E<Hi;++E){const C=E/m,S=Math.exp(-C*C/2);p.push(S),E===0?y+=S:E<g&&(y+=2*S)}for(let E=0;E<p.length;E++)p[E]=p[E]/y;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-n;const v=this._sizeLods[i],w=3*v*(i>x-Sr?i-x+Sr:0),T=4*(this._cubeSize-v);ro(t,w,T,3*v,2*v),l.setRenderTarget(t),l.render(h,xa)}}function q0(s){const e=[],t=[],n=[];let i=s;const r=s-Sr+1+mu.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Sr?l=mu[o-s+Sr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,m=3,g=2,p=1,y=new Float32Array(m*_*f),x=new Float32Array(g*_*f),v=new Float32Array(p*_*f);for(let T=0;T<f;T++){const E=T%3*2/3-1,C=T>2?0:-1,S=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];y.set(S,m*_*T),x.set(d,g*_*T);const b=[T,T,T,T,T,T];v.set(b,p*_*T)}const w=new cn;w.setAttribute("position",new Xt(y,m)),w.setAttribute("uv",new Xt(x,g)),w.setAttribute("faceIndex",new Xt(v,p)),e.push(w),i>Sr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function yu(s,e,t){const n=new qi(s,e,t);return n.texture.mapping=Vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ro(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Z0(s,e,t){const n=new Float32Array(Hi),i=new D(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:oc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function vu(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Mu(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function oc(){return`

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
	`}function $0(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Xa||l===Ya,u=l===Dr||l===Nr;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new xu(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new xu(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function J0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&wr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Q0(s,e,t,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const m=d.morphAttributes[_];for(let g=0,p=m.length;g<p;g++)e.remove(m[g])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],s.ARRAY_BUFFER);const f=h.morphAttributes;for(const _ in f){const m=f[_];for(let g=0,p=m.length;g<p;g++)e.update(m[g],s.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,_=h.attributes.position;let m=0;if(f!==null){const y=f.array;m=f.version;for(let x=0,v=y.length;x<v;x+=3){const w=y[x+0],T=y[x+1],E=y[x+2];d.push(w,T,T,E,E,w)}}else if(_!==void 0){const y=_.array;m=_.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const w=x+0,T=x+1,E=x+2;d.push(w,T,T,E,E,w)}}else return;const g=new(Wh(d)?Zh:qh)(d,1);g.version=m;const p=r.get(h);p&&e.remove(p),r.set(h,g)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function e1(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,_){_!==0&&(s.drawElementsInstanced(n,f,r,d*o,_),t.update(f,n,_))}function u(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,_);let g=0;for(let p=0;p<_;p++)g+=f[p];t.update(g,n,1)}function h(d,f,_,m){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],m[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,m,0,_);let p=0;for(let y=0;y<_;y++)p+=f[y];for(let y=0;y<m.length;y++)t.update(p,n,m[y])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function t1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function n1(s,e,t){const n=new WeakMap,i=new Qe;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let b=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;_===!0&&(v=1),m===!0&&(v=2),g===!0&&(v=3);let w=a.attributes.position.count*v,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const E=new Float32Array(w*T*4*h),C=new Yh(E,w,T,h);C.type=Tn,C.needsUpdate=!0;const S=v*4;for(let L=0;L<h;L++){const B=p[L],U=y[L],K=x[L],q=w*T*4*L;for(let H=0;H<B.count;H++){const W=H*S;_===!0&&(i.fromBufferAttribute(B,H),E[q+W+0]=i.x,E[q+W+1]=i.y,E[q+W+2]=i.z,E[q+W+3]=0),m===!0&&(i.fromBufferAttribute(U,H),E[q+W+4]=i.x,E[q+W+5]=i.y,E[q+W+6]=i.z,E[q+W+7]=0),g===!0&&(i.fromBufferAttribute(K,H),E[q+W+8]=i.x,E[q+W+9]=i.y,E[q+W+10]=i.z,E[q+W+11]=K.itemSize===4?i.w:1)}}d={count:h,texture:C,size:new ve(w,T)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const m=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function i1(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class td extends At{constructor(e,t,n,i,r,o,a,l,c,u=Ar){if(u!==Ar&&u!==Fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ar&&(n=Ki),n===void 0&&u===Fr&&(n=Or),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const nd=new At,Su=new td(1,1),id=new Yh,rd=new Gp,sd=new Qh,Tu=[],Eu=[],bu=new Float32Array(16),Au=new Float32Array(9),wu=new Float32Array(4);function qr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Tu[i];if(r===void 0&&(r=new Float32Array(i),Tu[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function St(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Tt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Wo(s,e){let t=Eu[e];t===void 0&&(t=new Int32Array(e),Eu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function r1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function s1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2fv(this.addr,e),Tt(t,e)}}function o1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;s.uniform3fv(this.addr,e),Tt(t,e)}}function a1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4fv(this.addr,e),Tt(t,e)}}function l1(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(St(t,n))return;wu.set(n),s.uniformMatrix2fv(this.addr,!1,wu),Tt(t,n)}}function c1(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(St(t,n))return;Au.set(n),s.uniformMatrix3fv(this.addr,!1,Au),Tt(t,n)}}function u1(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(St(t,n))return;bu.set(n),s.uniformMatrix4fv(this.addr,!1,bu),Tt(t,n)}}function h1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function d1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2iv(this.addr,e),Tt(t,e)}}function f1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;s.uniform3iv(this.addr,e),Tt(t,e)}}function p1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4iv(this.addr,e),Tt(t,e)}}function m1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function g1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2uiv(this.addr,e),Tt(t,e)}}function _1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;s.uniform3uiv(this.addr,e),Tt(t,e)}}function x1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4uiv(this.addr,e),Tt(t,e)}}function y1(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Su.compareFunction=jh,r=Su):r=nd,t.setTexture2D(e||r,i)}function v1(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||rd,i)}function M1(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||sd,i)}function S1(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||id,i)}function T1(s){switch(s){case 5126:return r1;case 35664:return s1;case 35665:return o1;case 35666:return a1;case 35674:return l1;case 35675:return c1;case 35676:return u1;case 5124:case 35670:return h1;case 35667:case 35671:return d1;case 35668:case 35672:return f1;case 35669:case 35673:return p1;case 5125:return m1;case 36294:return g1;case 36295:return _1;case 36296:return x1;case 35678:case 36198:case 36298:case 36306:case 35682:return y1;case 35679:case 36299:case 36307:return v1;case 35680:case 36300:case 36308:case 36293:return M1;case 36289:case 36303:case 36311:case 36292:return S1}}function E1(s,e){s.uniform1fv(this.addr,e)}function b1(s,e){const t=qr(e,this.size,2);s.uniform2fv(this.addr,t)}function A1(s,e){const t=qr(e,this.size,3);s.uniform3fv(this.addr,t)}function w1(s,e){const t=qr(e,this.size,4);s.uniform4fv(this.addr,t)}function R1(s,e){const t=qr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function C1(s,e){const t=qr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function P1(s,e){const t=qr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function L1(s,e){s.uniform1iv(this.addr,e)}function I1(s,e){s.uniform2iv(this.addr,e)}function D1(s,e){s.uniform3iv(this.addr,e)}function N1(s,e){s.uniform4iv(this.addr,e)}function U1(s,e){s.uniform1uiv(this.addr,e)}function O1(s,e){s.uniform2uiv(this.addr,e)}function F1(s,e){s.uniform3uiv(this.addr,e)}function B1(s,e){s.uniform4uiv(this.addr,e)}function k1(s,e,t){const n=this.cache,i=e.length,r=Wo(t,i);St(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||nd,r[o])}function z1(s,e,t){const n=this.cache,i=e.length,r=Wo(t,i);St(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||rd,r[o])}function H1(s,e,t){const n=this.cache,i=e.length,r=Wo(t,i);St(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||sd,r[o])}function V1(s,e,t){const n=this.cache,i=e.length,r=Wo(t,i);St(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||id,r[o])}function G1(s){switch(s){case 5126:return E1;case 35664:return b1;case 35665:return A1;case 35666:return w1;case 35674:return R1;case 35675:return C1;case 35676:return P1;case 5124:case 35670:return L1;case 35667:case 35671:return I1;case 35668:case 35672:return D1;case 35669:case 35673:return N1;case 5125:return U1;case 36294:return O1;case 36295:return F1;case 36296:return B1;case 35678:case 36198:case 36298:case 36306:case 35682:return k1;case 35679:case 36299:case 36307:return z1;case 35680:case 36300:case 36308:case 36293:return H1;case 36289:case 36303:case 36311:case 36292:return V1}}class j1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=T1(t.type)}}class W1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=G1(t.type)}}class X1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Ta=/(\w+)(\])?(\[|\.)?/g;function Ru(s,e){s.seq.push(e),s.map[e.id]=e}function Y1(s,e,t){const n=s.name,i=n.length;for(Ta.lastIndex=0;;){const r=Ta.exec(n),o=Ta.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ru(t,c===void 0?new j1(a,s,e):new W1(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new X1(a),Ru(t,h)),t=h}}}class So{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Y1(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Cu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const K1=37297;let q1=0;function Z1(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function $1(s){const e=Xe.getPrimaries(Xe.workingColorSpace),t=Xe.getPrimaries(s);let n;switch(e===t?n="":e===Po&&t===Co?n="LinearDisplayP3ToLinearSRGB":e===Co&&t===Po&&(n="LinearSRGBToLinearDisplayP3"),s){case It:case Go:return[n,"LinearTransferOETF"];case Ht:case ec:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Pu(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Z1(s.getShaderSource(e),o)}else return i}function J1(s,e){const t=$1(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Q1(s,e){let t;switch(e){case ep:t="Linear";break;case tp:t="Reinhard";break;case np:t="OptimizedCineon";break;case ip:t="ACESFilmic";break;case sp:t="AgX";break;case op:t="Neutral";break;case rp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const so=new D;function e_(){Xe.getLuminanceCoefficients(so);const s=so.x.toFixed(4),e=so.y.toFixed(4),t=so.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ds).join(`
`)}function n_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function i_(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ds(s){return s!==""}function Lu(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Iu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const r_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sl(s){return s.replace(r_,o_)}const s_=new Map;function o_(s,e){let t=Oe[e];if(t===void 0){const n=s_.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Sl(t)}const a_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Du(s){return s.replace(a_,l_)}function l_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Nu(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function c_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Lh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Af?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Xn&&(e="SHADOWMAP_TYPE_VSM"),e}function u_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Dr:case Nr:e="ENVMAP_TYPE_CUBE";break;case Vo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function h_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Nr:e="ENVMAP_MODE_REFRACTION";break}return e}function d_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Wl:e="ENVMAP_BLENDING_MULTIPLY";break;case Jf:e="ENVMAP_BLENDING_MIX";break;case Qf:e="ENVMAP_BLENDING_ADD";break}return e}function f_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function p_(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=c_(t),c=u_(t),u=h_(t),h=d_(t),d=f_(t),f=t_(t),_=n_(r),m=i.createProgram();let g,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ds).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ds).join(`
`),p.length>0&&(p+=`
`)):(g=[Nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),p=[Nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Si?Q1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,J1("linearToOutputTexel",t.outputColorSpace),e_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ds).join(`
`)),o=Sl(o),o=Lu(o,t),o=Iu(o,t),a=Sl(a),a=Lu(a,t),a=Iu(a,t),o=Du(o),a=Du(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+g+o,v=y+p+a,w=Cu(i,i.VERTEX_SHADER,x),T=Cu(i,i.FRAGMENT_SHADER,v);i.attachShader(m,w),i.attachShader(m,T),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function E(L){if(s.debug.checkShaderErrors){const B=i.getProgramInfoLog(m).trim(),U=i.getShaderInfoLog(w).trim(),K=i.getShaderInfoLog(T).trim();let q=!0,H=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,w,T);else{const W=Pu(i,w,"vertex"),G=Pu(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+W+`
`+G)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(U===""||K==="")&&(H=!1);H&&(L.diagnostics={runnable:q,programLog:B,vertexShader:{log:U,prefix:g},fragmentShader:{log:K,prefix:p}})}i.deleteShader(w),i.deleteShader(T),C=new So(i,m),S=i_(i,m)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(m,K1)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=q1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=T,this}let m_=0;class g_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new __(e),t.set(e,n)),n}}class __{constructor(e){this.id=m_++,this.code=e,this.usedTimes=0}}function x_(s,e,t,n,i,r,o){const a=new ic,l=new g_,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,b,L,B,U){const K=B.fog,q=U.geometry,H=S.isMeshStandardMaterial?B.environment:null,W=(S.isMeshStandardMaterial?t:e).get(S.envMap||H),G=W&&W.mapping===Vo?W.image.height:null,ne=_[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const re=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ae=re!==void 0?re.length:0;let Me=0;q.morphAttributes.position!==void 0&&(Me=1),q.morphAttributes.normal!==void 0&&(Me=2),q.morphAttributes.color!==void 0&&(Me=3);let Be,X,$,fe;if(ne){const je=Rn[ne];Be=je.vertexShader,X=je.fragmentShader}else Be=S.vertexShader,X=S.fragmentShader,l.update(S),$=l.getVertexShaderID(S),fe=l.getFragmentShaderID(S);const he=s.getRenderTarget(),Ie=U.isInstancedMesh===!0,Ue=U.isBatchedMesh===!0,ke=!!S.map,nt=!!S.matcap,I=!!W,ct=!!S.aoMap,We=!!S.lightMap,Ye=!!S.bumpMap,ge=!!S.normalMap,ut=!!S.displacementMap,Ce=!!S.emissiveMap,Le=!!S.metalnessMap,P=!!S.roughnessMap,A=S.anisotropy>0,j=S.clearcoat>0,J=S.dispersion>0,ee=S.iridescence>0,Z=S.sheen>0,ye=S.transmission>0,se=A&&!!S.anisotropyMap,ce=j&&!!S.clearcoatMap,De=j&&!!S.clearcoatNormalMap,te=j&&!!S.clearcoatRoughnessMap,ue=ee&&!!S.iridescenceMap,He=ee&&!!S.iridescenceThicknessMap,Ee=Z&&!!S.sheenColorMap,de=Z&&!!S.sheenRoughnessMap,Ae=!!S.specularMap,Pe=!!S.specularColorMap,rt=!!S.specularIntensityMap,M=ye&&!!S.transmissionMap,F=ye&&!!S.thicknessMap,k=!!S.gradientMap,Y=!!S.alphaMap,Q=S.alphaTest>0,_e=!!S.alphaHash,we=!!S.extensions;let pt=Si;S.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(pt=s.toneMapping);const vt={shaderID:ne,shaderType:S.type,shaderName:S.name,vertexShader:Be,fragmentShader:X,defines:S.defines,customVertexShaderID:$,customFragmentShaderID:fe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ue,batchingColor:Ue&&U._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&U.instanceColor!==null,instancingMorph:Ie&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:he===null?s.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:It,alphaToCoverage:!!S.alphaToCoverage,map:ke,matcap:nt,envMap:I,envMapMode:I&&W.mapping,envMapCubeUVHeight:G,aoMap:ct,lightMap:We,bumpMap:Ye,normalMap:ge,displacementMap:d&&ut,emissiveMap:Ce,normalMapObjectSpace:ge&&S.normalMapType===dp,normalMapTangentSpace:ge&&S.normalMapType===Ql,metalnessMap:Le,roughnessMap:P,anisotropy:A,anisotropyMap:se,clearcoat:j,clearcoatMap:ce,clearcoatNormalMap:De,clearcoatRoughnessMap:te,dispersion:J,iridescence:ee,iridescenceMap:ue,iridescenceThicknessMap:He,sheen:Z,sheenColorMap:Ee,sheenRoughnessMap:de,specularMap:Ae,specularColorMap:Pe,specularIntensityMap:rt,transmission:ye,transmissionMap:M,thicknessMap:F,gradientMap:k,opaque:S.transparent===!1&&S.blending===br&&S.alphaToCoverage===!1,alphaMap:Y,alphaTest:Q,alphaHash:_e,combine:S.combine,mapUv:ke&&m(S.map.channel),aoMapUv:ct&&m(S.aoMap.channel),lightMapUv:We&&m(S.lightMap.channel),bumpMapUv:Ye&&m(S.bumpMap.channel),normalMapUv:ge&&m(S.normalMap.channel),displacementMapUv:ut&&m(S.displacementMap.channel),emissiveMapUv:Ce&&m(S.emissiveMap.channel),metalnessMapUv:Le&&m(S.metalnessMap.channel),roughnessMapUv:P&&m(S.roughnessMap.channel),anisotropyMapUv:se&&m(S.anisotropyMap.channel),clearcoatMapUv:ce&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:De&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:He&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:de&&m(S.sheenRoughnessMap.channel),specularMapUv:Ae&&m(S.specularMap.channel),specularColorMapUv:Pe&&m(S.specularColorMap.channel),specularIntensityMapUv:rt&&m(S.specularIntensityMap.channel),transmissionMapUv:M&&m(S.transmissionMap.channel),thicknessMapUv:F&&m(S.thicknessMap.channel),alphaMapUv:Y&&m(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ge||A),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!q.attributes.uv&&(ke||Y),fog:!!K,useFog:S.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:U.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Me,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:pt,decodeVideoTexture:ke&&S.map.isVideoTexture===!0&&Xe.getTransfer(S.map.colorSpace)===it,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Cn,flipSided:S.side===Wt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:we&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&S.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return vt.vertexUv1s=c.has(1),vt.vertexUv2s=c.has(2),vt.vertexUv3s=c.has(3),c.clear(),vt}function p(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)b.push(L),b.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(y(b,S),x(b,S),b.push(s.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function y(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function x(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.doubleSided&&a.enable(10),b.flipSided&&a.enable(11),b.useDepthPacking&&a.enable(12),b.dithering&&a.enable(13),b.transmission&&a.enable(14),b.sheen&&a.enable(15),b.opaque&&a.enable(16),b.pointsUvs&&a.enable(17),b.decodeVideoTexture&&a.enable(18),b.alphaToCoverage&&a.enable(19),S.push(a.mask)}function v(S){const b=_[S.type];let L;if(b){const B=Rn[b];L=tm.clone(B.uniforms)}else L=S.uniforms;return L}function w(S,b){let L;for(let B=0,U=u.length;B<U;B++){const K=u[B];if(K.cacheKey===b){L=K,++L.usedTimes;break}}return L===void 0&&(L=new p_(s,b,S,r),u.push(L)),L}function T(S){if(--S.usedTimes===0){const b=u.indexOf(S);u[b]=u[u.length-1],u.pop(),S.destroy()}}function E(S){l.remove(S)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:w,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:C}}function y_(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function v_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Uu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ou(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,_,m,g){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:m,group:g},s[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=m,p.group=g),e++,p}function a(h,d,f,_,m,g){const p=o(h,d,f,_,m,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,d,f,_,m,g){const p=o(h,d,f,_,m,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||v_),n.length>1&&n.sort(d||Uu),i.length>1&&i.sort(d||Uu)}function u(){for(let h=e,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function M_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Ou,s.set(n,[o])):i>=r.length?(o=new Ou,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function S_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Te};break;case"SpotLight":t={position:new D,direction:new D,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function T_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let E_=0;function b_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function A_(s){const e=new S_,t=T_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,r=new Ne,o=new Ne;function a(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,_=0,m=0,g=0,p=0,y=0,x=0,v=0,w=0,T=0,E=0;c.sort(b_);for(let S=0,b=c.length;S<b;S++){const L=c[S],B=L.color,U=L.intensity,K=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=B.r*U,h+=B.g*U,d+=B.b*U;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],U);E++}else if(L.isDirectionalLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const W=L.shadow,G=t.get(L);G.shadowIntensity=W.intensity,G.shadowBias=W.bias,G.shadowNormalBias=W.normalBias,G.shadowRadius=W.radius,G.shadowMapSize=W.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=L.shadow.matrix,y++}n.directional[f]=H,f++}else if(L.isSpotLight){const H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(B).multiplyScalar(U),H.distance=K,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[m]=H;const W=L.shadow;if(L.map&&(n.spotLightMap[w]=L.map,w++,W.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[m]=W.matrix,L.castShadow){const G=t.get(L);G.shadowIntensity=W.intensity,G.shadowBias=W.bias,G.shadowNormalBias=W.normalBias,G.shadowRadius=W.radius,G.shadowMapSize=W.mapSize,n.spotShadow[m]=G,n.spotShadowMap[m]=q,v++}m++}else if(L.isRectAreaLight){const H=e.get(L);H.color.copy(B).multiplyScalar(U),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=H,g++}else if(L.isPointLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const W=L.shadow,G=t.get(L);G.shadowIntensity=W.intensity,G.shadowBias=W.bias,G.shadowNormalBias=W.normalBias,G.shadowRadius=W.radius,G.shadowMapSize=W.mapSize,G.shadowCameraNear=W.camera.near,G.shadowCameraFar=W.camera.far,n.pointShadow[_]=G,n.pointShadowMap[_]=q,n.pointShadowMatrix[_]=L.shadow.matrix,x++}n.point[_]=H,_++}else if(L.isHemisphereLight){const H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(U),H.groundColor.copy(L.groundColor).multiplyScalar(U),n.hemi[p]=H,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==_||C.spotLength!==m||C.rectAreaLength!==g||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==x||C.numSpotShadows!==v||C.numSpotMaps!==w||C.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=m,n.rectArea.length=g,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,C.directionalLength=f,C.pointLength=_,C.spotLength=m,C.rectAreaLength=g,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=x,C.numSpotShadows=v,C.numSpotMaps=w,C.numLightProbes=E,n.version=E_++)}function l(c,u){let h=0,d=0,f=0,_=0,m=0;const g=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const x=c[p];if(x.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),h++}else if(x.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),f++}else if(x.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(x.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){const v=n.hemi[m];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Fu(s){const e=new A_(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function w_(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Fu(s),e.set(i,[a])):r>=o.length?(a=new Fu(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class R_ extends bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=up,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class C_ extends bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const P_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L_=`uniform sampler2D shadow_pass;
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
}`;function I_(s,e,t){let n=new rc;const i=new ve,r=new ve,o=new Qe,a=new R_({depthPacking:hp}),l=new C_,c={},u=t.maxTextureSize,h={[Jn]:Wt,[Wt]:Jn,[Cn]:Cn},d=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:P_,fragmentShader:L_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new cn;_.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Ot(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lh;let p=this.type;this.render=function(T,E,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const S=s.getRenderTarget(),b=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),B=s.state;B.setBlending(Mi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const U=p!==Xn&&this.type===Xn,K=p===Xn&&this.type!==Xn;for(let q=0,H=T.length;q<H;q++){const W=T[q],G=W.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const ne=G.getFrameExtents();if(i.multiply(ne),r.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/ne.x),i.x=r.x*ne.x,G.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/ne.y),i.y=r.y*ne.y,G.mapSize.y=r.y)),G.map===null||U===!0||K===!0){const ae=this.type!==Xn?{minFilter:jt,magFilter:jt}:{};G.map!==null&&G.map.dispose(),G.map=new qi(i.x,i.y,ae),G.map.texture.name=W.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const re=G.getViewportCount();for(let ae=0;ae<re;ae++){const Me=G.getViewport(ae);o.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),B.viewport(o),G.updateMatrices(W,ae),n=G.getFrustum(),v(E,C,G.camera,W,this.type)}G.isPointLightShadow!==!0&&this.type===Xn&&y(G,C),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(S,b,L)};function y(T,E){const C=e.update(m);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new qi(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(E,null,C,d,m,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(E,null,C,f,m,null)}function x(T,E,C,S){let b=null;const L=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)b=L;else if(b=C.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const B=b.uuid,U=E.uuid;let K=c[B];K===void 0&&(K={},c[B]=K);let q=K[U];q===void 0&&(q=b.clone(),K[U]=q,E.addEventListener("dispose",w)),b=q}if(b.visible=E.visible,b.wireframe=E.wireframe,S===Xn?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:h[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const B=s.properties.get(b);B.light=C}return b}function v(T,E,C,S,b){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Xn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const U=e.update(T),K=T.material;if(Array.isArray(K)){const q=U.groups;for(let H=0,W=q.length;H<W;H++){const G=q[H],ne=K[G.materialIndex];if(ne&&ne.visible){const re=x(T,ne,S,b);T.onBeforeShadow(s,T,E,C,U,re,G),s.renderBufferDirect(C,null,U,re,T,G),T.onAfterShadow(s,T,E,C,U,re,G)}}}else if(K.visible){const q=x(T,K,S,b);T.onBeforeShadow(s,T,E,C,U,q,null),s.renderBufferDirect(C,null,U,q,T,null),T.onAfterShadow(s,T,E,C,U,q,null)}}const B=T.children;for(let U=0,K=B.length;U<K;U++)v(B[U],E,C,S,b)}function w(T){T.target.removeEventListener("dispose",w);for(const C in c){const S=c[C],b=T.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}function D_(s){function e(){let M=!1;const F=new Qe;let k=null;const Y=new Qe(0,0,0,0);return{setMask:function(Q){k!==Q&&!M&&(s.colorMask(Q,Q,Q,Q),k=Q)},setLocked:function(Q){M=Q},setClear:function(Q,_e,we,pt,vt){vt===!0&&(Q*=pt,_e*=pt,we*=pt),F.set(Q,_e,we,pt),Y.equals(F)===!1&&(s.clearColor(Q,_e,we,pt),Y.copy(F))},reset:function(){M=!1,k=null,Y.set(-1,0,0,0)}}}function t(){let M=!1,F=null,k=null,Y=null;return{setTest:function(Q){Q?fe(s.DEPTH_TEST):he(s.DEPTH_TEST)},setMask:function(Q){F!==Q&&!M&&(s.depthMask(Q),F=Q)},setFunc:function(Q){if(k!==Q){switch(Q){case Wf:s.depthFunc(s.NEVER);break;case Xf:s.depthFunc(s.ALWAYS);break;case Yf:s.depthFunc(s.LESS);break;case Ao:s.depthFunc(s.LEQUAL);break;case Kf:s.depthFunc(s.EQUAL);break;case qf:s.depthFunc(s.GEQUAL);break;case Zf:s.depthFunc(s.GREATER);break;case $f:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}k=Q}},setLocked:function(Q){M=Q},setClear:function(Q){Y!==Q&&(s.clearDepth(Q),Y=Q)},reset:function(){M=!1,F=null,k=null,Y=null}}}function n(){let M=!1,F=null,k=null,Y=null,Q=null,_e=null,we=null,pt=null,vt=null;return{setTest:function(je){M||(je?fe(s.STENCIL_TEST):he(s.STENCIL_TEST))},setMask:function(je){F!==je&&!M&&(s.stencilMask(je),F=je)},setFunc:function(je,Mt,gt){(k!==je||Y!==Mt||Q!==gt)&&(s.stencilFunc(je,Mt,gt),k=je,Y=Mt,Q=gt)},setOp:function(je,Mt,gt){(_e!==je||we!==Mt||pt!==gt)&&(s.stencilOp(je,Mt,gt),_e=je,we=Mt,pt=gt)},setLocked:function(je){M=je},setClear:function(je){vt!==je&&(s.clearStencil(je),vt=je)},reset:function(){M=!1,F=null,k=null,Y=null,Q=null,_e=null,we=null,pt=null,vt=null}}}const i=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],f=null,_=!1,m=null,g=null,p=null,y=null,x=null,v=null,w=null,T=new Te(0,0,0),E=0,C=!1,S=null,b=null,L=null,B=null,U=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,H=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(W)[1]),q=H>=1):W.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),q=H>=2);let G=null,ne={};const re=s.getParameter(s.SCISSOR_BOX),ae=s.getParameter(s.VIEWPORT),Me=new Qe().fromArray(re),Be=new Qe().fromArray(ae);function X(M,F,k,Y){const Q=new Uint8Array(4),_e=s.createTexture();s.bindTexture(M,_e),s.texParameteri(M,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(M,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let we=0;we<k;we++)M===s.TEXTURE_3D||M===s.TEXTURE_2D_ARRAY?s.texImage3D(F,0,s.RGBA,1,1,Y,0,s.RGBA,s.UNSIGNED_BYTE,Q):s.texImage2D(F+we,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Q);return _e}const $={};$[s.TEXTURE_2D]=X(s.TEXTURE_2D,s.TEXTURE_2D,1),$[s.TEXTURE_CUBE_MAP]=X(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[s.TEXTURE_2D_ARRAY]=X(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$[s.TEXTURE_3D]=X(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),fe(s.DEPTH_TEST),r.setFunc(Ao),Ye(!1),ge(zc),fe(s.CULL_FACE),ct(Mi);function fe(M){c[M]!==!0&&(s.enable(M),c[M]=!0)}function he(M){c[M]!==!1&&(s.disable(M),c[M]=!1)}function Ie(M,F){return u[M]!==F?(s.bindFramebuffer(M,F),u[M]=F,M===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=F),M===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=F),!0):!1}function Ue(M,F){let k=d,Y=!1;if(M){k=h.get(F),k===void 0&&(k=[],h.set(F,k));const Q=M.textures;if(k.length!==Q.length||k[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,we=Q.length;_e<we;_e++)k[_e]=s.COLOR_ATTACHMENT0+_e;k.length=Q.length,Y=!0}}else k[0]!==s.BACK&&(k[0]=s.BACK,Y=!0);Y&&s.drawBuffers(k)}function ke(M){return f!==M?(s.useProgram(M),f=M,!0):!1}const nt={[zi]:s.FUNC_ADD,[Rf]:s.FUNC_SUBTRACT,[Cf]:s.FUNC_REVERSE_SUBTRACT};nt[Pf]=s.MIN,nt[Lf]=s.MAX;const I={[If]:s.ZERO,[Df]:s.ONE,[Nf]:s.SRC_COLOR,[ja]:s.SRC_ALPHA,[zf]:s.SRC_ALPHA_SATURATE,[Bf]:s.DST_COLOR,[Of]:s.DST_ALPHA,[Uf]:s.ONE_MINUS_SRC_COLOR,[Wa]:s.ONE_MINUS_SRC_ALPHA,[kf]:s.ONE_MINUS_DST_COLOR,[Ff]:s.ONE_MINUS_DST_ALPHA,[Hf]:s.CONSTANT_COLOR,[Vf]:s.ONE_MINUS_CONSTANT_COLOR,[Gf]:s.CONSTANT_ALPHA,[jf]:s.ONE_MINUS_CONSTANT_ALPHA};function ct(M,F,k,Y,Q,_e,we,pt,vt,je){if(M===Mi){_===!0&&(he(s.BLEND),_=!1);return}if(_===!1&&(fe(s.BLEND),_=!0),M!==wf){if(M!==m||je!==C){if((g!==zi||x!==zi)&&(s.blendEquation(s.FUNC_ADD),g=zi,x=zi),je)switch(M){case br:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ga:s.blendFunc(s.ONE,s.ONE);break;case Hc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}else switch(M){case br:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ga:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Hc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}p=null,y=null,v=null,w=null,T.set(0,0,0),E=0,m=M,C=je}return}Q=Q||F,_e=_e||k,we=we||Y,(F!==g||Q!==x)&&(s.blendEquationSeparate(nt[F],nt[Q]),g=F,x=Q),(k!==p||Y!==y||_e!==v||we!==w)&&(s.blendFuncSeparate(I[k],I[Y],I[_e],I[we]),p=k,y=Y,v=_e,w=we),(pt.equals(T)===!1||vt!==E)&&(s.blendColor(pt.r,pt.g,pt.b,vt),T.copy(pt),E=vt),m=M,C=!1}function We(M,F){M.side===Cn?he(s.CULL_FACE):fe(s.CULL_FACE);let k=M.side===Wt;F&&(k=!k),Ye(k),M.blending===br&&M.transparent===!1?ct(Mi):ct(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),r.setFunc(M.depthFunc),r.setTest(M.depthTest),r.setMask(M.depthWrite),i.setMask(M.colorWrite);const Y=M.stencilWrite;o.setTest(Y),Y&&(o.setMask(M.stencilWriteMask),o.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),o.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),Ce(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):he(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(M){S!==M&&(M?s.frontFace(s.CW):s.frontFace(s.CCW),S=M)}function ge(M){M!==Ef?(fe(s.CULL_FACE),M!==b&&(M===zc?s.cullFace(s.BACK):M===bf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):he(s.CULL_FACE),b=M}function ut(M){M!==L&&(q&&s.lineWidth(M),L=M)}function Ce(M,F,k){M?(fe(s.POLYGON_OFFSET_FILL),(B!==F||U!==k)&&(s.polygonOffset(F,k),B=F,U=k)):he(s.POLYGON_OFFSET_FILL)}function Le(M){M?fe(s.SCISSOR_TEST):he(s.SCISSOR_TEST)}function P(M){M===void 0&&(M=s.TEXTURE0+K-1),G!==M&&(s.activeTexture(M),G=M)}function A(M,F,k){k===void 0&&(G===null?k=s.TEXTURE0+K-1:k=G);let Y=ne[k];Y===void 0&&(Y={type:void 0,texture:void 0},ne[k]=Y),(Y.type!==M||Y.texture!==F)&&(G!==k&&(s.activeTexture(k),G=k),s.bindTexture(M,F||$[M]),Y.type=M,Y.texture=F)}function j(){const M=ne[G];M!==void 0&&M.type!==void 0&&(s.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ee(){try{s.compressedTexImage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ye(){try{s.texSubImage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function se(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ce(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function De(){try{s.texStorage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function te(){try{s.texStorage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ue(){try{s.texImage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function He(){try{s.texImage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Ee(M){Me.equals(M)===!1&&(s.scissor(M.x,M.y,M.z,M.w),Me.copy(M))}function de(M){Be.equals(M)===!1&&(s.viewport(M.x,M.y,M.z,M.w),Be.copy(M))}function Ae(M,F){let k=l.get(F);k===void 0&&(k=new WeakMap,l.set(F,k));let Y=k.get(M);Y===void 0&&(Y=s.getUniformBlockIndex(F,M.name),k.set(M,Y))}function Pe(M,F){const Y=l.get(F).get(M);a.get(F)!==Y&&(s.uniformBlockBinding(F,Y,M.__bindingPointIndex),a.set(F,Y))}function rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},G=null,ne={},u={},h=new WeakMap,d=[],f=null,_=!1,m=null,g=null,p=null,y=null,x=null,v=null,w=null,T=new Te(0,0,0),E=0,C=!1,S=null,b=null,L=null,B=null,U=null,Me.set(0,0,s.canvas.width,s.canvas.height),Be.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:fe,disable:he,bindFramebuffer:Ie,drawBuffers:Ue,useProgram:ke,setBlending:ct,setMaterial:We,setFlipSided:Ye,setCullFace:ge,setLineWidth:ut,setPolygonOffset:Ce,setScissorTest:Le,activeTexture:P,bindTexture:A,unbindTexture:j,compressedTexImage2D:J,compressedTexImage3D:ee,texImage2D:ue,texImage3D:He,updateUBOMapping:Ae,uniformBlockBinding:Pe,texStorage2D:De,texStorage3D:te,texSubImage2D:Z,texSubImage3D:ye,compressedTexSubImage2D:se,compressedTexSubImage3D:ce,scissor:Ee,viewport:de,reset:rt}}function Bu(s,e,t,n){const i=N_(n);switch(t){case Fh:return s*e;case kh:return s*e;case zh:return s*e*2;case ql:return s*e/i.components*i.byteLength;case Zl:return s*e/i.components*i.byteLength;case Hh:return s*e*2/i.components*i.byteLength;case $l:return s*e*2/i.components*i.byteLength;case Bh:return s*e*3/i.components*i.byteLength;case pn:return s*e*4/i.components*i.byteLength;case Jl:return s*e*4/i.components*i.byteLength;case _o:case xo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case yo:case vo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qa:case $a:return Math.max(s,16)*Math.max(e,8)/4;case Ka:case Za:return Math.max(s,8)*Math.max(e,8)/2;case Ja:case Qa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case el:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case tl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case nl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case il:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case rl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case sl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ol:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case al:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ll:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case cl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ul:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case hl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case dl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case fl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case pl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Mo:case ml:case gl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Vh:case _l:return Math.ceil(s/4)*Math.ceil(e/4)*8;case xl:case yl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function N_(s){switch(s){case Qn:case Nh:return{byteLength:1,components:1};case Ms:case Uh:case Ds:return{byteLength:2,components:1};case Yl:case Kl:return{byteLength:2,components:4};case Ki:case Xl:case Tn:return{byteLength:4,components:1};case Oh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function U_(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ve,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,A){return f?new OffscreenCanvas(P,A):Es("canvas")}function m(P,A,j){let J=1;const ee=Le(P);if((ee.width>j||ee.height>j)&&(J=j/Math.max(ee.width,ee.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Z=Math.floor(J*ee.width),ye=Math.floor(J*ee.height);h===void 0&&(h=_(Z,ye));const se=A?_(Z,ye):h;return se.width=Z,se.height=ye,se.getContext("2d").drawImage(P,0,0,Z,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Z+"x"+ye+")."),se}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),P;return P}function g(P){return P.generateMipmaps&&P.minFilter!==jt&&P.minFilter!==rn}function p(P){s.generateMipmap(P)}function y(P,A,j,J,ee=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Z=A;if(A===s.RED&&(j===s.FLOAT&&(Z=s.R32F),j===s.HALF_FLOAT&&(Z=s.R16F),j===s.UNSIGNED_BYTE&&(Z=s.R8)),A===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(Z=s.R8UI),j===s.UNSIGNED_SHORT&&(Z=s.R16UI),j===s.UNSIGNED_INT&&(Z=s.R32UI),j===s.BYTE&&(Z=s.R8I),j===s.SHORT&&(Z=s.R16I),j===s.INT&&(Z=s.R32I)),A===s.RG&&(j===s.FLOAT&&(Z=s.RG32F),j===s.HALF_FLOAT&&(Z=s.RG16F),j===s.UNSIGNED_BYTE&&(Z=s.RG8)),A===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(Z=s.RG8UI),j===s.UNSIGNED_SHORT&&(Z=s.RG16UI),j===s.UNSIGNED_INT&&(Z=s.RG32UI),j===s.BYTE&&(Z=s.RG8I),j===s.SHORT&&(Z=s.RG16I),j===s.INT&&(Z=s.RG32I)),A===s.RGB&&j===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),A===s.RGBA){const ye=ee?Ro:Xe.getTransfer(J);j===s.FLOAT&&(Z=s.RGBA32F),j===s.HALF_FLOAT&&(Z=s.RGBA16F),j===s.UNSIGNED_BYTE&&(Z=ye===it?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(P,A){let j;return P?A===null||A===Ki||A===Or?j=s.DEPTH24_STENCIL8:A===Tn?j=s.DEPTH32F_STENCIL8:A===Ms&&(j=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ki||A===Or?j=s.DEPTH_COMPONENT24:A===Tn?j=s.DEPTH_COMPONENT32F:A===Ms&&(j=s.DEPTH_COMPONENT16),j}function v(P,A){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==jt&&P.minFilter!==rn?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function w(P){const A=P.target;A.removeEventListener("dispose",w),E(A),A.isVideoTexture&&u.delete(A)}function T(P){const A=P.target;A.removeEventListener("dispose",T),S(A)}function E(P){const A=n.get(P);if(A.__webglInit===void 0)return;const j=P.source,J=d.get(j);if(J){const ee=J[A.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&C(P),Object.keys(J).length===0&&d.delete(j)}n.remove(P)}function C(P){const A=n.get(P);s.deleteTexture(A.__webglTexture);const j=P.source,J=d.get(j);delete J[A.__cacheKey],o.memory.textures--}function S(P){const A=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(A.__webglFramebuffer[J]))for(let ee=0;ee<A.__webglFramebuffer[J].length;ee++)s.deleteFramebuffer(A.__webglFramebuffer[J][ee]);else s.deleteFramebuffer(A.__webglFramebuffer[J]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[J])}else{if(Array.isArray(A.__webglFramebuffer))for(let J=0;J<A.__webglFramebuffer.length;J++)s.deleteFramebuffer(A.__webglFramebuffer[J]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let J=0;J<A.__webglColorRenderbuffer.length;J++)A.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[J]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const j=P.textures;for(let J=0,ee=j.length;J<ee;J++){const Z=n.get(j[J]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(j[J])}n.remove(P)}let b=0;function L(){b=0}function B(){const P=b;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),b+=1,P}function U(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function K(P,A){const j=n.get(P);if(P.isVideoTexture&&ut(P),P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){const J=P.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(j,P,A);return}}t.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+A)}function q(P,A){const j=n.get(P);if(P.version>0&&j.__version!==P.version){Be(j,P,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+A)}function H(P,A){const j=n.get(P);if(P.version>0&&j.__version!==P.version){Be(j,P,A);return}t.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+A)}function W(P,A){const j=n.get(P);if(P.version>0&&j.__version!==P.version){X(j,P,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+A)}const G={[Ur]:s.REPEAT,[mi]:s.CLAMP_TO_EDGE,[wo]:s.MIRRORED_REPEAT},ne={[jt]:s.NEAREST,[Dh]:s.NEAREST_MIPMAP_NEAREST,[hs]:s.NEAREST_MIPMAP_LINEAR,[rn]:s.LINEAR,[go]:s.LINEAR_MIPMAP_NEAREST,[Zn]:s.LINEAR_MIPMAP_LINEAR},re={[fp]:s.NEVER,[yp]:s.ALWAYS,[pp]:s.LESS,[jh]:s.LEQUAL,[mp]:s.EQUAL,[xp]:s.GEQUAL,[gp]:s.GREATER,[_p]:s.NOTEQUAL};function ae(P,A){if(A.type===Tn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===rn||A.magFilter===go||A.magFilter===hs||A.magFilter===Zn||A.minFilter===rn||A.minFilter===go||A.minFilter===hs||A.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,G[A.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,G[A.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,G[A.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,ne[A.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,ne[A.minFilter]),A.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,re[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===jt||A.minFilter!==hs&&A.minFilter!==Zn||A.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Me(P,A){let j=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",w));const J=A.source;let ee=d.get(J);ee===void 0&&(ee={},d.set(J,ee));const Z=U(A);if(Z!==P.__cacheKey){ee[Z]===void 0&&(ee[Z]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ee[Z].usedTimes++;const ye=ee[P.__cacheKey];ye!==void 0&&(ee[P.__cacheKey].usedTimes--,ye.usedTimes===0&&C(A)),P.__cacheKey=Z,P.__webglTexture=ee[Z].texture}return j}function Be(P,A,j){let J=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(J=s.TEXTURE_3D);const ee=Me(P,A),Z=A.source;t.bindTexture(J,P.__webglTexture,s.TEXTURE0+j);const ye=n.get(Z);if(Z.version!==ye.__version||ee===!0){t.activeTexture(s.TEXTURE0+j);const se=Xe.getPrimaries(Xe.workingColorSpace),ce=A.colorSpace===pi?null:Xe.getPrimaries(A.colorSpace),De=A.colorSpace===pi||se===ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let te=m(A.image,!1,i.maxTextureSize);te=Ce(A,te);const ue=r.convert(A.format,A.colorSpace),He=r.convert(A.type);let Ee=y(A.internalFormat,ue,He,A.colorSpace,A.isVideoTexture);ae(J,A);let de;const Ae=A.mipmaps,Pe=A.isVideoTexture!==!0,rt=ye.__version===void 0||ee===!0,M=Z.dataReady,F=v(A,te);if(A.isDepthTexture)Ee=x(A.format===Fr,A.type),rt&&(Pe?t.texStorage2D(s.TEXTURE_2D,1,Ee,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,Ee,te.width,te.height,0,ue,He,null));else if(A.isDataTexture)if(Ae.length>0){Pe&&rt&&t.texStorage2D(s.TEXTURE_2D,F,Ee,Ae[0].width,Ae[0].height);for(let k=0,Y=Ae.length;k<Y;k++)de=Ae[k],Pe?M&&t.texSubImage2D(s.TEXTURE_2D,k,0,0,de.width,de.height,ue,He,de.data):t.texImage2D(s.TEXTURE_2D,k,Ee,de.width,de.height,0,ue,He,de.data);A.generateMipmaps=!1}else Pe?(rt&&t.texStorage2D(s.TEXTURE_2D,F,Ee,te.width,te.height),M&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,te.width,te.height,ue,He,te.data)):t.texImage2D(s.TEXTURE_2D,0,Ee,te.width,te.height,0,ue,He,te.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Pe&&rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,F,Ee,Ae[0].width,Ae[0].height,te.depth);for(let k=0,Y=Ae.length;k<Y;k++)if(de=Ae[k],A.format!==pn)if(ue!==null)if(Pe){if(M)if(A.layerUpdates.size>0){const Q=Bu(de.width,de.height,A.format,A.type);for(const _e of A.layerUpdates){const we=de.data.subarray(_e*Q/de.data.BYTES_PER_ELEMENT,(_e+1)*Q/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,k,0,0,_e,de.width,de.height,1,ue,we,0,0)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,k,0,0,0,de.width,de.height,te.depth,ue,de.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,k,Ee,de.width,de.height,te.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?M&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,k,0,0,0,de.width,de.height,te.depth,ue,He,de.data):t.texImage3D(s.TEXTURE_2D_ARRAY,k,Ee,de.width,de.height,te.depth,0,ue,He,de.data)}else{Pe&&rt&&t.texStorage2D(s.TEXTURE_2D,F,Ee,Ae[0].width,Ae[0].height);for(let k=0,Y=Ae.length;k<Y;k++)de=Ae[k],A.format!==pn?ue!==null?Pe?M&&t.compressedTexSubImage2D(s.TEXTURE_2D,k,0,0,de.width,de.height,ue,de.data):t.compressedTexImage2D(s.TEXTURE_2D,k,Ee,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?M&&t.texSubImage2D(s.TEXTURE_2D,k,0,0,de.width,de.height,ue,He,de.data):t.texImage2D(s.TEXTURE_2D,k,Ee,de.width,de.height,0,ue,He,de.data)}else if(A.isDataArrayTexture)if(Pe){if(rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,F,Ee,te.width,te.height,te.depth),M)if(A.layerUpdates.size>0){const k=Bu(te.width,te.height,A.format,A.type);for(const Y of A.layerUpdates){const Q=te.data.subarray(Y*k/te.data.BYTES_PER_ELEMENT,(Y+1)*k/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Y,te.width,te.height,1,ue,He,Q)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ue,He,te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ee,te.width,te.height,te.depth,0,ue,He,te.data);else if(A.isData3DTexture)Pe?(rt&&t.texStorage3D(s.TEXTURE_3D,F,Ee,te.width,te.height,te.depth),M&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ue,He,te.data)):t.texImage3D(s.TEXTURE_3D,0,Ee,te.width,te.height,te.depth,0,ue,He,te.data);else if(A.isFramebufferTexture){if(rt)if(Pe)t.texStorage2D(s.TEXTURE_2D,F,Ee,te.width,te.height);else{let k=te.width,Y=te.height;for(let Q=0;Q<F;Q++)t.texImage2D(s.TEXTURE_2D,Q,Ee,k,Y,0,ue,He,null),k>>=1,Y>>=1}}else if(Ae.length>0){if(Pe&&rt){const k=Le(Ae[0]);t.texStorage2D(s.TEXTURE_2D,F,Ee,k.width,k.height)}for(let k=0,Y=Ae.length;k<Y;k++)de=Ae[k],Pe?M&&t.texSubImage2D(s.TEXTURE_2D,k,0,0,ue,He,de):t.texImage2D(s.TEXTURE_2D,k,Ee,ue,He,de);A.generateMipmaps=!1}else if(Pe){if(rt){const k=Le(te);t.texStorage2D(s.TEXTURE_2D,F,Ee,k.width,k.height)}M&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ue,He,te)}else t.texImage2D(s.TEXTURE_2D,0,Ee,ue,He,te);g(A)&&p(J),ye.__version=Z.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function X(P,A,j){if(A.image.length!==6)return;const J=Me(P,A),ee=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+j);const Z=n.get(ee);if(ee.version!==Z.__version||J===!0){t.activeTexture(s.TEXTURE0+j);const ye=Xe.getPrimaries(Xe.workingColorSpace),se=A.colorSpace===pi?null:Xe.getPrimaries(A.colorSpace),ce=A.colorSpace===pi||ye===se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const De=A.isCompressedTexture||A.image[0].isCompressedTexture,te=A.image[0]&&A.image[0].isDataTexture,ue=[];for(let Y=0;Y<6;Y++)!De&&!te?ue[Y]=m(A.image[Y],!0,i.maxCubemapSize):ue[Y]=te?A.image[Y].image:A.image[Y],ue[Y]=Ce(A,ue[Y]);const He=ue[0],Ee=r.convert(A.format,A.colorSpace),de=r.convert(A.type),Ae=y(A.internalFormat,Ee,de,A.colorSpace),Pe=A.isVideoTexture!==!0,rt=Z.__version===void 0||J===!0,M=ee.dataReady;let F=v(A,He);ae(s.TEXTURE_CUBE_MAP,A);let k;if(De){Pe&&rt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,F,Ae,He.width,He.height);for(let Y=0;Y<6;Y++){k=ue[Y].mipmaps;for(let Q=0;Q<k.length;Q++){const _e=k[Q];A.format!==pn?Ee!==null?Pe?M&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Q,0,0,_e.width,_e.height,Ee,_e.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Q,Ae,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?M&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Q,0,0,_e.width,_e.height,Ee,de,_e.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Q,Ae,_e.width,_e.height,0,Ee,de,_e.data)}}}else{if(k=A.mipmaps,Pe&&rt){k.length>0&&F++;const Y=Le(ue[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,F,Ae,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(te){Pe?M&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ue[Y].width,ue[Y].height,Ee,de,ue[Y].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ae,ue[Y].width,ue[Y].height,0,Ee,de,ue[Y].data);for(let Q=0;Q<k.length;Q++){const we=k[Q].image[Y].image;Pe?M&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Q+1,0,0,we.width,we.height,Ee,de,we.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Q+1,Ae,we.width,we.height,0,Ee,de,we.data)}}else{Pe?M&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ee,de,ue[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ae,Ee,de,ue[Y]);for(let Q=0;Q<k.length;Q++){const _e=k[Q];Pe?M&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Q+1,0,0,Ee,de,_e.image[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Q+1,Ae,Ee,de,_e.image[Y])}}}g(A)&&p(s.TEXTURE_CUBE_MAP),Z.__version=ee.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function $(P,A,j,J,ee,Z){const ye=r.convert(j.format,j.colorSpace),se=r.convert(j.type),ce=y(j.internalFormat,ye,se,j.colorSpace);if(!n.get(A).__hasExternalTextures){const te=Math.max(1,A.width>>Z),ue=Math.max(1,A.height>>Z);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,Z,ce,te,ue,A.depth,0,ye,se,null):t.texImage2D(ee,Z,ce,te,ue,0,ye,se,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),ge(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,ee,n.get(j).__webglTexture,0,Ye(A)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,ee,n.get(j).__webglTexture,Z),t.bindFramebuffer(s.FRAMEBUFFER,null)}function fe(P,A,j){if(s.bindRenderbuffer(s.RENDERBUFFER,P),A.depthBuffer){const J=A.depthTexture,ee=J&&J.isDepthTexture?J.type:null,Z=x(A.stencilBuffer,ee),ye=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=Ye(A);ge(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,se,Z,A.width,A.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,se,Z,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Z,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,P)}else{const J=A.textures;for(let ee=0;ee<J.length;ee++){const Z=J[ee],ye=r.convert(Z.format,Z.colorSpace),se=r.convert(Z.type),ce=y(Z.internalFormat,ye,se,Z.colorSpace),De=Ye(A);j&&ge(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,De,ce,A.width,A.height):ge(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,De,ce,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ce,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function he(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),K(A.depthTexture,0);const J=n.get(A.depthTexture).__webglTexture,ee=Ye(A);if(A.depthTexture.format===Ar)ge(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(A.depthTexture.format===Fr)ge(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ie(P){const A=n.get(P),j=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");he(A.__webglFramebuffer,P)}else if(j){A.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[J]),A.__webglDepthbuffer[J]=s.createRenderbuffer(),fe(A.__webglDepthbuffer[J],P,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),fe(A.__webglDepthbuffer,P,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(P,A,j){const J=n.get(P);A!==void 0&&$(J.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&Ie(P)}function ke(P){const A=P.texture,j=n.get(P),J=n.get(A);P.addEventListener("dispose",T);const ee=P.textures,Z=P.isWebGLCubeRenderTarget===!0,ye=ee.length>1;if(ye||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=A.version,o.memory.textures++),Z){j.__webglFramebuffer=[];for(let se=0;se<6;se++)if(A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer[se]=[];for(let ce=0;ce<A.mipmaps.length;ce++)j.__webglFramebuffer[se][ce]=s.createFramebuffer()}else j.__webglFramebuffer[se]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer=[];for(let se=0;se<A.mipmaps.length;se++)j.__webglFramebuffer[se]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(ye)for(let se=0,ce=ee.length;se<ce;se++){const De=n.get(ee[se]);De.__webglTexture===void 0&&(De.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&ge(P)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let se=0;se<ee.length;se++){const ce=ee[se];j.__webglColorRenderbuffer[se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[se]);const De=r.convert(ce.format,ce.colorSpace),te=r.convert(ce.type),ue=y(ce.internalFormat,De,te,ce.colorSpace,P.isXRRenderTarget===!0),He=Ye(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,He,ue,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.RENDERBUFFER,j.__webglColorRenderbuffer[se])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),fe(j.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),ae(s.TEXTURE_CUBE_MAP,A);for(let se=0;se<6;se++)if(A.mipmaps&&A.mipmaps.length>0)for(let ce=0;ce<A.mipmaps.length;ce++)$(j.__webglFramebuffer[se][ce],P,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ce);else $(j.__webglFramebuffer[se],P,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);g(A)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let se=0,ce=ee.length;se<ce;se++){const De=ee[se],te=n.get(De);t.bindTexture(s.TEXTURE_2D,te.__webglTexture),ae(s.TEXTURE_2D,De),$(j.__webglFramebuffer,P,De,s.COLOR_ATTACHMENT0+se,s.TEXTURE_2D,0),g(De)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let se=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(se=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(se,J.__webglTexture),ae(se,A),A.mipmaps&&A.mipmaps.length>0)for(let ce=0;ce<A.mipmaps.length;ce++)$(j.__webglFramebuffer[ce],P,A,s.COLOR_ATTACHMENT0,se,ce);else $(j.__webglFramebuffer,P,A,s.COLOR_ATTACHMENT0,se,0);g(A)&&p(se),t.unbindTexture()}P.depthBuffer&&Ie(P)}function nt(P){const A=P.textures;for(let j=0,J=A.length;j<J;j++){const ee=A[j];if(g(ee)){const Z=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ye=n.get(ee).__webglTexture;t.bindTexture(Z,ye),p(Z),t.unbindTexture()}}}const I=[],ct=[];function We(P){if(P.samples>0){if(ge(P)===!1){const A=P.textures,j=P.width,J=P.height;let ee=s.COLOR_BUFFER_BIT;const Z=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=n.get(P),se=A.length>1;if(se)for(let ce=0;ce<A.length;ce++)t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let ce=0;ce<A.length;ce++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),se){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ye.__webglColorRenderbuffer[ce]);const De=n.get(A[ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,De,0)}s.blitFramebuffer(0,0,j,J,0,0,j,J,ee,s.NEAREST),l===!0&&(I.length=0,ct.length=0,I.push(s.COLOR_ATTACHMENT0+ce),P.depthBuffer&&P.resolveDepthBuffer===!1&&(I.push(Z),ct.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ct)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,I))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),se)for(let ce=0;ce<A.length;ce++){t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,ye.__webglColorRenderbuffer[ce]);const De=n.get(A[ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,De,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const A=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function Ye(P){return Math.min(i.maxSamples,P.samples)}function ge(P){const A=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ut(P){const A=o.render.frame;u.get(P)!==A&&(u.set(P,A),P.update())}function Ce(P,A){const j=P.colorSpace,J=P.format,ee=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||j!==It&&j!==pi&&(Xe.getTransfer(j)===it?(J!==pn||ee!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),A}function Le(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=L,this.setTexture2D=K,this.setTexture2DArray=q,this.setTexture3D=H,this.setTextureCube=W,this.rebindTextures=Ue,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=$,this.useMultisampledRTT=ge}function O_(s,e){function t(n,i=pi){let r;const o=Xe.getTransfer(i);if(n===Qn)return s.UNSIGNED_BYTE;if(n===Yl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Kl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Oh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Nh)return s.BYTE;if(n===Uh)return s.SHORT;if(n===Ms)return s.UNSIGNED_SHORT;if(n===Xl)return s.INT;if(n===Ki)return s.UNSIGNED_INT;if(n===Tn)return s.FLOAT;if(n===Ds)return s.HALF_FLOAT;if(n===Fh)return s.ALPHA;if(n===Bh)return s.RGB;if(n===pn)return s.RGBA;if(n===kh)return s.LUMINANCE;if(n===zh)return s.LUMINANCE_ALPHA;if(n===Ar)return s.DEPTH_COMPONENT;if(n===Fr)return s.DEPTH_STENCIL;if(n===ql)return s.RED;if(n===Zl)return s.RED_INTEGER;if(n===Hh)return s.RG;if(n===$l)return s.RG_INTEGER;if(n===Jl)return s.RGBA_INTEGER;if(n===_o||n===xo||n===yo||n===vo)if(o===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ka||n===qa||n===Za||n===$a)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ja||n===Qa||n===el)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ja||n===Qa)return o===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===el)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===tl||n===nl||n===il||n===rl||n===sl||n===ol||n===al||n===ll||n===cl||n===ul||n===hl||n===dl||n===fl||n===pl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tl)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nl)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===il)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rl)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sl)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ol)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===al)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ll)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cl)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ul)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hl)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dl)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fl)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pl)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mo||n===ml||n===gl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Mo)return o===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vh||n===_l||n===xl||n===yl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Mo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_l)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Or?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class F_ extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vi extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const B_={type:"move"};class Ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const g=t.getJointPose(m,n),p=this._getHandJoint(c,m);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(B_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const k_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z_=`
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

}`;class H_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new At,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ei({vertexShader:k_,fragmentShader:z_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ot(new jo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class V_ extends Ji{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,_=null;const m=new H_,g=t.getContextAttributes();let p=null,y=null;const x=[],v=[],w=new ve;let T=null;const E=new Vt;E.layers.enable(1),E.viewport=new Qe;const C=new Vt;C.layers.enable(2),C.viewport=new Qe;const S=[E,C],b=new F_;b.layers.enable(1),b.layers.enable(2);let L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let $=x[X];return $===void 0&&($=new Ea,x[X]=$),$.getTargetRaySpace()},this.getControllerGrip=function(X){let $=x[X];return $===void 0&&($=new Ea,x[X]=$),$.getGripSpace()},this.getHand=function(X){let $=x[X];return $===void 0&&($=new Ea,x[X]=$),$.getHandSpace()};function U(X){const $=v.indexOf(X.inputSource);if($===-1)return;const fe=x[$];fe!==void 0&&(fe.update(X.inputSource,X.frame,c||o),fe.dispatchEvent({type:X.type,data:X.inputSource}))}function K(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",q);for(let X=0;X<x.length;X++){const $=v[X];$!==null&&(v[X]=null,x[X].disconnect($))}L=null,B=null,m.reset(),e.setRenderTarget(p),f=null,d=null,h=null,i=null,y=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",K),i.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),i.renderState.layers===void 0){const $={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new qi(f.framebufferWidth,f.framebufferHeight,{format:pn,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let $=null,fe=null,he=null;g.depth&&(he=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=g.stencil?Fr:Ar,fe=g.stencil?Or:Ki);const Ie={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(Ie),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new qi(d.textureWidth,d.textureHeight,{format:pn,type:Qn,depthTexture:new td(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Be.setContext(i),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(X){for(let $=0;$<X.removed.length;$++){const fe=X.removed[$],he=v.indexOf(fe);he>=0&&(v[he]=null,x[he].disconnect(fe))}for(let $=0;$<X.added.length;$++){const fe=X.added[$];let he=v.indexOf(fe);if(he===-1){for(let Ue=0;Ue<x.length;Ue++)if(Ue>=v.length){v.push(fe),he=Ue;break}else if(v[Ue]===null){v[Ue]=fe,he=Ue;break}if(he===-1)break}const Ie=x[he];Ie&&Ie.connect(fe)}}const H=new D,W=new D;function G(X,$,fe){H.setFromMatrixPosition($.matrixWorld),W.setFromMatrixPosition(fe.matrixWorld);const he=H.distanceTo(W),Ie=$.projectionMatrix.elements,Ue=fe.projectionMatrix.elements,ke=Ie[14]/(Ie[10]-1),nt=Ie[14]/(Ie[10]+1),I=(Ie[9]+1)/Ie[5],ct=(Ie[9]-1)/Ie[5],We=(Ie[8]-1)/Ie[0],Ye=(Ue[8]+1)/Ue[0],ge=ke*We,ut=ke*Ye,Ce=he/(-We+Ye),Le=Ce*-We;$.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Le),X.translateZ(Ce),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const P=ke+Ce,A=nt+Ce,j=ge-Le,J=ut+(he-Le),ee=I*nt/A*P,Z=ct*nt/A*P;X.projectionMatrix.makePerspective(j,J,ee,Z,P,A),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function ne(X,$){$===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices($.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;m.texture!==null&&(X.near=m.depthNear,X.far=m.depthFar),b.near=C.near=E.near=X.near,b.far=C.far=E.far=X.far,(L!==b.near||B!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,B=b.far,E.near=L,E.far=B,C.near=L,C.far=B,E.updateProjectionMatrix(),C.updateProjectionMatrix(),X.updateProjectionMatrix());const $=X.parent,fe=b.cameras;ne(b,$);for(let he=0;he<fe.length;he++)ne(fe[he],$);fe.length===2?G(b,E,C):b.projectionMatrix.copy(E.projectionMatrix),re(X,b,$)};function re(X,$,fe){fe===null?X.matrix.copy($.matrixWorld):(X.matrix.copy(fe.matrixWorld),X.matrix.invert(),X.matrix.multiply($.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Br*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(b)};let ae=null;function Me(X,$){if(u=$.getViewerPose(c||o),_=$,u!==null){const fe=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let he=!1;fe.length!==b.cameras.length&&(b.cameras.length=0,he=!0);for(let Ue=0;Ue<fe.length;Ue++){const ke=fe[Ue];let nt=null;if(f!==null)nt=f.getViewport(ke);else{const ct=h.getViewSubImage(d,ke);nt=ct.viewport,Ue===0&&(e.setRenderTargetTextures(y,ct.colorTexture,d.ignoreDepthValues?void 0:ct.depthStencilTexture),e.setRenderTarget(y))}let I=S[Ue];I===void 0&&(I=new Vt,I.layers.enable(Ue),I.viewport=new Qe,S[Ue]=I),I.matrix.fromArray(ke.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(ke.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(nt.x,nt.y,nt.width,nt.height),Ue===0&&(b.matrix.copy(I.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),he===!0&&b.cameras.push(I)}const Ie=i.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Ue=h.getDepthInformation(fe[0]);Ue&&Ue.isValid&&Ue.texture&&m.init(e,Ue,i.renderState)}}for(let fe=0;fe<x.length;fe++){const he=v[fe],Ie=x[fe];he!==null&&Ie!==void 0&&Ie.update(he,$,c||o)}ae&&ae(X,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),_=null}const Be=new ed;Be.setAnimationLoop(Me),this.setAnimationLoop=function(X){ae=X},this.dispose=function(){}}}const Ni=new An,G_=new Ne;function j_(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,$h(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,y,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),_(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),m(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,y,x):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Wt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Wt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const y=e.get(p),x=y.envMap,v=y.envMapRotation;x&&(g.envMap.value=x,Ni.copy(v),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),g.envMapRotation.value.setFromMatrix4(G_.makeRotationFromEuler(Ni)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=x*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function m(g,p){const y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function W_(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const v=x.program;n.uniformBlockBinding(y,v)}function c(y,x){let v=i[y.id];v===void 0&&(_(y),v=u(y),i[y.id]=v,y.addEventListener("dispose",g));const w=x.program;n.updateUBOMapping(y,w);const T=e.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function u(y){const x=h();y.__bindingPointIndex=x;const v=s.createBuffer(),w=y.__size,T=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,w,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,v),v}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=i[y.id],v=y.uniforms,w=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let T=0,E=v.length;T<E;T++){const C=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,b=C.length;S<b;S++){const L=C[S];if(f(L,T,S,w)===!0){const B=L.__offset,U=Array.isArray(L.value)?L.value:[L.value];let K=0;for(let q=0;q<U.length;q++){const H=U[q],W=m(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,B+K,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,K),K+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,x,v,w){const T=y.value,E=x+"_"+v;if(w[E]===void 0)return typeof T=="number"||typeof T=="boolean"?w[E]=T:w[E]=T.clone(),!0;{const C=w[E];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return w[E]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function _(y){const x=y.uniforms;let v=0;const w=16;for(let E=0,C=x.length;E<C;E++){const S=Array.isArray(x[E])?x[E]:[x[E]];for(let b=0,L=S.length;b<L;b++){const B=S[b],U=Array.isArray(B.value)?B.value:[B.value];for(let K=0,q=U.length;K<q;K++){const H=U[K],W=m(H),G=v%w,ne=G%W.boundary,re=G+ne;v+=ne,re!==0&&w-re<W.storage&&(v+=w-re),B.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=W.storage}}}const T=v%w;return T>0&&(v+=w-T),y.__size=v,y.__cache={},this}function m(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function g(y){const x=y.target;x.removeEventListener("dispose",g);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class X_{constructor(e={}){const{canvas:t=Op(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),_=new Int32Array(4);let m=null,g=null;const p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ht,this.toneMapping=Si,this.toneMappingExposure=1;const x=this;let v=!1,w=0,T=0,E=null,C=-1,S=null;const b=new Qe,L=new Qe;let B=null;const U=new Te(0);let K=0,q=t.width,H=t.height,W=1,G=null,ne=null;const re=new Qe(0,0,q,H),ae=new Qe(0,0,q,H);let Me=!1;const Be=new rc;let X=!1,$=!1;const fe=new Ne,he=new D,Ie=new Qe,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function nt(){return E===null?W:1}let I=n;function ct(R,N){return t.getContext(R,N)}try{const R={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jl}`),t.addEventListener("webglcontextlost",k,!1),t.addEventListener("webglcontextrestored",Y,!1),t.addEventListener("webglcontextcreationerror",Q,!1),I===null){const N="webgl2";if(I=ct(N,R),I===null)throw ct(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let We,Ye,ge,ut,Ce,Le,P,A,j,J,ee,Z,ye,se,ce,De,te,ue,He,Ee,de,Ae,Pe,rt;function M(){We=new J0(I),We.init(),Ae=new O_(I,We),Ye=new X0(I,We,e,Ae),ge=new D_(I),ut=new t1(I),Ce=new y_,Le=new U_(I,We,ge,Ce,Ye,Ae,ut),P=new K0(x),A=new $0(x),j=new lm(I),Pe=new j0(I,j),J=new Q0(I,j,ut,Pe),ee=new i1(I,J,j,ut),He=new n1(I,Ye,Le),De=new Y0(Ce),Z=new x_(x,P,A,We,Ye,Pe,De),ye=new j_(x,Ce),se=new M_,ce=new w_(We),ue=new G0(x,P,A,ge,ee,d,l),te=new I_(x,ee,Ye),rt=new W_(I,ut,Ye,ge),Ee=new W0(I,We,ut),de=new e1(I,We,ut),ut.programs=Z.programs,x.capabilities=Ye,x.extensions=We,x.properties=Ce,x.renderLists=se,x.shadowMap=te,x.state=ge,x.info=ut}M();const F=new V_(x,I);this.xr=F,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=We.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=We.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(q,H,!1))},this.getSize=function(R){return R.set(q,H)},this.setSize=function(R,N,z=!0){if(F.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=R,H=N,t.width=Math.floor(R*W),t.height=Math.floor(N*W),z===!0&&(t.style.width=R+"px",t.style.height=N+"px"),this.setViewport(0,0,R,N)},this.getDrawingBufferSize=function(R){return R.set(q*W,H*W).floor()},this.setDrawingBufferSize=function(R,N,z){q=R,H=N,W=z,t.width=Math.floor(R*z),t.height=Math.floor(N*z),this.setViewport(0,0,R,N)},this.getCurrentViewport=function(R){return R.copy(b)},this.getViewport=function(R){return R.copy(re)},this.setViewport=function(R,N,z,V){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,N,z,V),ge.viewport(b.copy(re).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(ae)},this.setScissor=function(R,N,z,V){R.isVector4?ae.set(R.x,R.y,R.z,R.w):ae.set(R,N,z,V),ge.scissor(L.copy(ae).multiplyScalar(W).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(R){ge.setScissorTest(Me=R)},this.setOpaqueSort=function(R){G=R},this.setTransparentSort=function(R){ne=R},this.getClearColor=function(R){return R.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(R=!0,N=!0,z=!0){let V=0;if(R){let O=!1;if(E!==null){const ie=E.texture.format;O=ie===Jl||ie===$l||ie===Zl}if(O){const ie=E.texture.type,le=ie===Qn||ie===Ki||ie===Ms||ie===Or||ie===Yl||ie===Kl,pe=ue.getClearColor(),me=ue.getClearAlpha(),be=pe.r,Re=pe.g,Se=pe.b;le?(f[0]=be,f[1]=Re,f[2]=Se,f[3]=me,I.clearBufferuiv(I.COLOR,0,f)):(_[0]=be,_[1]=Re,_[2]=Se,_[3]=me,I.clearBufferiv(I.COLOR,0,_))}else V|=I.COLOR_BUFFER_BIT}N&&(V|=I.DEPTH_BUFFER_BIT),z&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",k,!1),t.removeEventListener("webglcontextrestored",Y,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),se.dispose(),ce.dispose(),Ce.dispose(),P.dispose(),A.dispose(),ee.dispose(),Pe.dispose(),rt.dispose(),Z.dispose(),F.dispose(),F.removeEventListener("sessionstart",gt),F.removeEventListener("sessionend",ri),Rt.stop()};function k(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const R=ut.autoReset,N=te.enabled,z=te.autoUpdate,V=te.needsUpdate,O=te.type;M(),ut.autoReset=R,te.enabled=N,te.autoUpdate=z,te.needsUpdate=V,te.type=O}function Q(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function _e(R){const N=R.target;N.removeEventListener("dispose",_e),we(N)}function we(R){pt(R),Ce.remove(R)}function pt(R){const N=Ce.get(R).programs;N!==void 0&&(N.forEach(function(z){Z.releaseProgram(z)}),R.isShaderMaterial&&Z.releaseShaderCache(R))}this.renderBufferDirect=function(R,N,z,V,O,ie){N===null&&(N=Ue);const le=O.isMesh&&O.matrixWorld.determinant()<0,pe=_f(R,N,z,V,O);ge.setMaterial(V,le);let me=z.index,be=1;if(V.wireframe===!0){if(me=J.getWireframeAttribute(z),me===void 0)return;be=2}const Re=z.drawRange,Se=z.attributes.position;let Ke=Re.start*be,ht=(Re.start+Re.count)*be;ie!==null&&(Ke=Math.max(Ke,ie.start*be),ht=Math.min(ht,(ie.start+ie.count)*be)),me!==null?(Ke=Math.max(Ke,0),ht=Math.min(ht,me.count)):Se!=null&&(Ke=Math.max(Ke,0),ht=Math.min(ht,Se.count));const dt=ht-Ke;if(dt<0||dt===1/0)return;Pe.setup(O,V,pe,z,me);let Jt,qe=Ee;if(me!==null&&(Jt=j.get(me),qe=de,qe.setIndex(Jt)),O.isMesh)V.wireframe===!0?(ge.setLineWidth(V.wireframeLinewidth*nt()),qe.setMode(I.LINES)):qe.setMode(I.TRIANGLES);else if(O.isLine){let xe=V.linewidth;xe===void 0&&(xe=1),ge.setLineWidth(xe*nt()),O.isLineSegments?qe.setMode(I.LINES):O.isLineLoop?qe.setMode(I.LINE_LOOP):qe.setMode(I.LINE_STRIP)}else O.isPoints?qe.setMode(I.POINTS):O.isSprite&&qe.setMode(I.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)qe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))qe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const xe=O._multiDrawStarts,Ct=O._multiDrawCounts,Ze=O._multiDrawCount,xn=me?j.get(me).bytesPerElement:1,er=Ce.get(V).currentProgram.getUniforms();for(let Qt=0;Qt<Ze;Qt++)er.setValue(I,"_gl_DrawID",Qt),qe.render(xe[Qt]/xn,Ct[Qt])}else if(O.isInstancedMesh)qe.renderInstances(Ke,dt,O.count);else if(z.isInstancedBufferGeometry){const xe=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ct=Math.min(z.instanceCount,xe);qe.renderInstances(Ke,dt,Ct)}else qe.render(Ke,dt)};function vt(R,N,z){R.transparent===!0&&R.side===Cn&&R.forceSinglePass===!1?(R.side=Wt,R.needsUpdate=!0,Bs(R,N,z),R.side=Jn,R.needsUpdate=!0,Bs(R,N,z),R.side=Cn):Bs(R,N,z)}this.compile=function(R,N,z=null){z===null&&(z=R),g=ce.get(z),g.init(N),y.push(g),z.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),R!==z&&R.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),g.setupLights();const V=new Set;return R.traverse(function(O){const ie=O.material;if(ie)if(Array.isArray(ie))for(let le=0;le<ie.length;le++){const pe=ie[le];vt(pe,z,O),V.add(pe)}else vt(ie,z,O),V.add(ie)}),y.pop(),g=null,V},this.compileAsync=function(R,N,z=null){const V=this.compile(R,N,z);return new Promise(O=>{function ie(){if(V.forEach(function(le){Ce.get(le).currentProgram.isReady()&&V.delete(le)}),V.size===0){O(R);return}setTimeout(ie,10)}We.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let je=null;function Mt(R){je&&je(R)}function gt(){Rt.stop()}function ri(){Rt.start()}const Rt=new ed;Rt.setAnimationLoop(Mt),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(R){je=R,F.setAnimationLoop(R),R===null?Rt.stop():Rt.start()},F.addEventListener("sessionstart",gt),F.addEventListener("sessionend",ri),this.render=function(R,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(F.cameraAutoUpdate===!0&&F.updateCamera(N),N=F.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,N,E),g=ce.get(R,y.length),g.init(N),y.push(g),fe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Be.setFromProjectionMatrix(fe),$=this.localClippingEnabled,X=De.init(this.clippingPlanes,$),m=se.get(R,p.length),m.init(),p.push(m),F.enabled===!0&&F.isPresenting===!0){const ie=x.xr.getDepthSensingMesh();ie!==null&&kn(ie,N,-1/0,x.sortObjects)}kn(R,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(G,ne),ke=F.enabled===!1||F.isPresenting===!1||F.hasDepthSensing()===!1,ke&&ue.addToRenderList(m,R),this.info.render.frame++,X===!0&&De.beginShadows();const z=g.state.shadowsArray;te.render(z,R,N),X===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,O=m.transmissive;if(g.setupLights(),N.isArrayCamera){const ie=N.cameras;if(O.length>0)for(let le=0,pe=ie.length;le<pe;le++){const me=ie[le];Qr(V,O,R,me)}ke&&ue.render(R);for(let le=0,pe=ie.length;le<pe;le++){const me=ie[le];Ri(m,R,me,me.viewport)}}else O.length>0&&Qr(V,O,R,N),ke&&ue.render(R),Ri(m,R,N);E!==null&&(Le.updateMultisampleRenderTarget(E),Le.updateRenderTargetMipmap(E)),R.isScene===!0&&R.onAfterRender(x,R,N),Pe.resetDefaultState(),C=-1,S=null,y.pop(),y.length>0?(g=y[y.length-1],X===!0&&De.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,p.pop(),p.length>0?m=p[p.length-1]:m=null};function kn(R,N,z,V){if(R.visible===!1)return;if(R.layers.test(N.layers)){if(R.isGroup)z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(N);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Be.intersectsSprite(R)){V&&Ie.setFromMatrixPosition(R.matrixWorld).applyMatrix4(fe);const le=ee.update(R),pe=R.material;pe.visible&&m.push(R,le,pe,z,Ie.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Be.intersectsObject(R))){const le=ee.update(R),pe=R.material;if(V&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ie.copy(R.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Ie.copy(le.boundingSphere.center)),Ie.applyMatrix4(R.matrixWorld).applyMatrix4(fe)),Array.isArray(pe)){const me=le.groups;for(let be=0,Re=me.length;be<Re;be++){const Se=me[be],Ke=pe[Se.materialIndex];Ke&&Ke.visible&&m.push(R,le,Ke,z,Ie.z,Se)}}else pe.visible&&m.push(R,le,pe,z,Ie.z,null)}}const ie=R.children;for(let le=0,pe=ie.length;le<pe;le++)kn(ie[le],N,z,V)}function Ri(R,N,z,V){const O=R.opaque,ie=R.transmissive,le=R.transparent;g.setupLightsView(z),X===!0&&De.setGlobalState(x.clippingPlanes,z),V&&ge.viewport(b.copy(V)),O.length>0&&Fs(O,N,z),ie.length>0&&Fs(ie,N,z),le.length>0&&Fs(le,N,z),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Qr(R,N,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[V.id]===void 0&&(g.state.transmissionRenderTarget[V.id]=new qi(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?Ds:Qn,minFilter:Zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const ie=g.state.transmissionRenderTarget[V.id],le=V.viewport||b;ie.setSize(le.z,le.w);const pe=x.getRenderTarget();x.setRenderTarget(ie),x.getClearColor(U),K=x.getClearAlpha(),K<1&&x.setClearColor(16777215,.5),x.clear(),ke&&ue.render(z);const me=x.toneMapping;x.toneMapping=Si;const be=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),g.setupLightsView(V),X===!0&&De.setGlobalState(x.clippingPlanes,V),Fs(R,z,V),Le.updateMultisampleRenderTarget(ie),Le.updateRenderTargetMipmap(ie),We.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Se=0,Ke=N.length;Se<Ke;Se++){const ht=N[Se],dt=ht.object,Jt=ht.geometry,qe=ht.material,xe=ht.group;if(qe.side===Cn&&dt.layers.test(V.layers)){const Ct=qe.side;qe.side=Wt,qe.needsUpdate=!0,Nc(dt,z,V,Jt,qe,xe),qe.side=Ct,qe.needsUpdate=!0,Re=!0}}Re===!0&&(Le.updateMultisampleRenderTarget(ie),Le.updateRenderTargetMipmap(ie))}x.setRenderTarget(pe),x.setClearColor(U,K),be!==void 0&&(V.viewport=be),x.toneMapping=me}function Fs(R,N,z){const V=N.isScene===!0?N.overrideMaterial:null;for(let O=0,ie=R.length;O<ie;O++){const le=R[O],pe=le.object,me=le.geometry,be=V===null?le.material:V,Re=le.group;pe.layers.test(z.layers)&&Nc(pe,N,z,me,be,Re)}}function Nc(R,N,z,V,O,ie){R.onBeforeRender(x,N,z,V,O,ie),R.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),O.transparent===!0&&O.side===Cn&&O.forceSinglePass===!1?(O.side=Wt,O.needsUpdate=!0,x.renderBufferDirect(z,N,V,O,R,ie),O.side=Jn,O.needsUpdate=!0,x.renderBufferDirect(z,N,V,O,R,ie),O.side=Cn):x.renderBufferDirect(z,N,V,O,R,ie),R.onAfterRender(x,N,z,V,O,ie)}function Bs(R,N,z){N.isScene!==!0&&(N=Ue);const V=Ce.get(R),O=g.state.lights,ie=g.state.shadowsArray,le=O.state.version,pe=Z.getParameters(R,O.state,ie,N,z),me=Z.getProgramCacheKey(pe);let be=V.programs;V.environment=R.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(R.isMeshStandardMaterial?A:P).get(R.envMap||V.environment),V.envMapRotation=V.environment!==null&&R.envMap===null?N.environmentRotation:R.envMapRotation,be===void 0&&(R.addEventListener("dispose",_e),be=new Map,V.programs=be);let Re=be.get(me);if(Re!==void 0){if(V.currentProgram===Re&&V.lightsStateVersion===le)return Oc(R,pe),Re}else pe.uniforms=Z.getUniforms(R),R.onBeforeCompile(pe,x),Re=Z.acquireProgram(pe,me),be.set(me,Re),V.uniforms=pe.uniforms;const Se=V.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Se.clippingPlanes=De.uniform),Oc(R,pe),V.needsLights=yf(R),V.lightsStateVersion=le,V.needsLights&&(Se.ambientLightColor.value=O.state.ambient,Se.lightProbe.value=O.state.probe,Se.directionalLights.value=O.state.directional,Se.directionalLightShadows.value=O.state.directionalShadow,Se.spotLights.value=O.state.spot,Se.spotLightShadows.value=O.state.spotShadow,Se.rectAreaLights.value=O.state.rectArea,Se.ltc_1.value=O.state.rectAreaLTC1,Se.ltc_2.value=O.state.rectAreaLTC2,Se.pointLights.value=O.state.point,Se.pointLightShadows.value=O.state.pointShadow,Se.hemisphereLights.value=O.state.hemi,Se.directionalShadowMap.value=O.state.directionalShadowMap,Se.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Se.spotShadowMap.value=O.state.spotShadowMap,Se.spotLightMatrix.value=O.state.spotLightMatrix,Se.spotLightMap.value=O.state.spotLightMap,Se.pointShadowMap.value=O.state.pointShadowMap,Se.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Re,V.uniformsList=null,Re}function Uc(R){if(R.uniformsList===null){const N=R.currentProgram.getUniforms();R.uniformsList=So.seqWithValue(N.seq,R.uniforms)}return R.uniformsList}function Oc(R,N){const z=Ce.get(R);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function _f(R,N,z,V,O){N.isScene!==!0&&(N=Ue),Le.resetTextureUnits();const ie=N.fog,le=V.isMeshStandardMaterial?N.environment:null,pe=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:It,me=(V.isMeshStandardMaterial?A:P).get(V.envMap||le),be=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Re=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Se=!!z.morphAttributes.position,Ke=!!z.morphAttributes.normal,ht=!!z.morphAttributes.color;let dt=Si;V.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(dt=x.toneMapping);const Jt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,qe=Jt!==void 0?Jt.length:0,xe=Ce.get(V),Ct=g.state.lights;if(X===!0&&($===!0||R!==S)){const un=R===S&&V.id===C;De.setState(V,R,un)}let Ze=!1;V.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==Ct.state.version||xe.outputColorSpace!==pe||O.isBatchedMesh&&xe.batching===!1||!O.isBatchedMesh&&xe.batching===!0||O.isBatchedMesh&&xe.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&xe.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&xe.instancing===!1||!O.isInstancedMesh&&xe.instancing===!0||O.isSkinnedMesh&&xe.skinning===!1||!O.isSkinnedMesh&&xe.skinning===!0||O.isInstancedMesh&&xe.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&xe.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&xe.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&xe.instancingMorph===!1&&O.morphTexture!==null||xe.envMap!==me||V.fog===!0&&xe.fog!==ie||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==De.numPlanes||xe.numIntersection!==De.numIntersection)||xe.vertexAlphas!==be||xe.vertexTangents!==Re||xe.morphTargets!==Se||xe.morphNormals!==Ke||xe.morphColors!==ht||xe.toneMapping!==dt||xe.morphTargetsCount!==qe)&&(Ze=!0):(Ze=!0,xe.__version=V.version);let xn=xe.currentProgram;Ze===!0&&(xn=Bs(V,N,O));let er=!1,Qt=!1,qo=!1;const _t=xn.getUniforms(),si=xe.uniforms;if(ge.useProgram(xn.program)&&(er=!0,Qt=!0,qo=!0),V.id!==C&&(C=V.id,Qt=!0),er||S!==R){_t.setValue(I,"projectionMatrix",R.projectionMatrix),_t.setValue(I,"viewMatrix",R.matrixWorldInverse);const un=_t.map.cameraPosition;un!==void 0&&un.setValue(I,he.setFromMatrixPosition(R.matrixWorld)),Ye.logarithmicDepthBuffer&&_t.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&_t.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,Qt=!0,qo=!0)}if(O.isSkinnedMesh){_t.setOptional(I,O,"bindMatrix"),_t.setOptional(I,O,"bindMatrixInverse");const un=O.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),_t.setValue(I,"boneTexture",un.boneTexture,Le))}O.isBatchedMesh&&(_t.setOptional(I,O,"batchingTexture"),_t.setValue(I,"batchingTexture",O._matricesTexture,Le),_t.setOptional(I,O,"batchingIdTexture"),_t.setValue(I,"batchingIdTexture",O._indirectTexture,Le),_t.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&_t.setValue(I,"batchingColorTexture",O._colorsTexture,Le));const Zo=z.morphAttributes;if((Zo.position!==void 0||Zo.normal!==void 0||Zo.color!==void 0)&&He.update(O,z,xn),(Qt||xe.receiveShadow!==O.receiveShadow)&&(xe.receiveShadow=O.receiveShadow,_t.setValue(I,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(si.envMap.value=me,si.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(si.envMapIntensity.value=N.environmentIntensity),Qt&&(_t.setValue(I,"toneMappingExposure",x.toneMappingExposure),xe.needsLights&&xf(si,qo),ie&&V.fog===!0&&ye.refreshFogUniforms(si,ie),ye.refreshMaterialUniforms(si,V,W,H,g.state.transmissionRenderTarget[R.id]),So.upload(I,Uc(xe),si,Le)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(So.upload(I,Uc(xe),si,Le),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&_t.setValue(I,"center",O.center),_t.setValue(I,"modelViewMatrix",O.modelViewMatrix),_t.setValue(I,"normalMatrix",O.normalMatrix),_t.setValue(I,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const un=V.uniformsGroups;for(let $o=0,vf=un.length;$o<vf;$o++){const Fc=un[$o];rt.update(Fc,xn),rt.bind(Fc,xn)}}return xn}function xf(R,N){R.ambientLightColor.needsUpdate=N,R.lightProbe.needsUpdate=N,R.directionalLights.needsUpdate=N,R.directionalLightShadows.needsUpdate=N,R.pointLights.needsUpdate=N,R.pointLightShadows.needsUpdate=N,R.spotLights.needsUpdate=N,R.spotLightShadows.needsUpdate=N,R.rectAreaLights.needsUpdate=N,R.hemisphereLights.needsUpdate=N}function yf(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(R,N,z){Ce.get(R.texture).__webglTexture=N,Ce.get(R.depthTexture).__webglTexture=z;const V=Ce.get(R);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,N){const z=Ce.get(R);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(R,N=0,z=0){E=R,w=N,T=z;let V=!0,O=null,ie=!1,le=!1;if(R){const me=Ce.get(R);me.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(I.FRAMEBUFFER,null),V=!1):me.__webglFramebuffer===void 0?Le.setupRenderTarget(R):me.__hasExternalTextures&&Le.rebindTextures(R,Ce.get(R.texture).__webglTexture,Ce.get(R.depthTexture).__webglTexture);const be=R.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(le=!0);const Re=Ce.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Re[N])?O=Re[N][z]:O=Re[N],ie=!0):R.samples>0&&Le.useMultisampledRTT(R)===!1?O=Ce.get(R).__webglMultisampledFramebuffer:Array.isArray(Re)?O=Re[z]:O=Re,b.copy(R.viewport),L.copy(R.scissor),B=R.scissorTest}else b.copy(re).multiplyScalar(W).floor(),L.copy(ae).multiplyScalar(W).floor(),B=Me;if(ge.bindFramebuffer(I.FRAMEBUFFER,O)&&V&&ge.drawBuffers(R,O),ge.viewport(b),ge.scissor(L),ge.setScissorTest(B),ie){const me=Ce.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,me.__webglTexture,z)}else if(le){const me=Ce.get(R.texture),be=N||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,me.__webglTexture,z||0,be)}C=-1},this.readRenderTargetPixels=function(R,N,z,V,O,ie,le){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Ce.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&le!==void 0&&(pe=pe[le]),pe){ge.bindFramebuffer(I.FRAMEBUFFER,pe);try{const me=R.texture,be=me.format,Re=me.type;if(!Ye.textureFormatReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=R.width-V&&z>=0&&z<=R.height-O&&I.readPixels(N,z,V,O,Ae.convert(be),Ae.convert(Re),ie)}finally{const me=E!==null?Ce.get(E).__webglFramebuffer:null;ge.bindFramebuffer(I.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(R,N,z,V,O,ie,le){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Ce.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&le!==void 0&&(pe=pe[le]),pe){ge.bindFramebuffer(I.FRAMEBUFFER,pe);try{const me=R.texture,be=me.format,Re=me.type;if(!Ye.textureFormatReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=R.width-V&&z>=0&&z<=R.height-O){const Se=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Se),I.bufferData(I.PIXEL_PACK_BUFFER,ie.byteLength,I.STREAM_READ),I.readPixels(N,z,V,O,Ae.convert(be),Ae.convert(Re),0),I.flush();const Ke=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await Fp(I,Ke,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,Se),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ie)}finally{I.deleteBuffer(Se),I.deleteSync(Ke)}return ie}}finally{const me=E!==null?Ce.get(E).__webglFramebuffer:null;ge.bindFramebuffer(I.FRAMEBUFFER,me)}}},this.copyFramebufferToTexture=function(R,N=null,z=0){R.isTexture!==!0&&(wr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,R=arguments[1]);const V=Math.pow(2,-z),O=Math.floor(R.image.width*V),ie=Math.floor(R.image.height*V),le=N!==null?N.x:0,pe=N!==null?N.y:0;Le.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,z,0,0,le,pe,O,ie),ge.unbindTexture()},this.copyTextureToTexture=function(R,N,z=null,V=null,O=0){R.isTexture!==!0&&(wr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,R=arguments[1],N=arguments[2],O=arguments[3]||0,z=null);let ie,le,pe,me,be,Re;z!==null?(ie=z.max.x-z.min.x,le=z.max.y-z.min.y,pe=z.min.x,me=z.min.y):(ie=R.image.width,le=R.image.height,pe=0,me=0),V!==null?(be=V.x,Re=V.y):(be=0,Re=0);const Se=Ae.convert(N.format),Ke=Ae.convert(N.type);Le.setTexture2D(N,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const ht=I.getParameter(I.UNPACK_ROW_LENGTH),dt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Jt=I.getParameter(I.UNPACK_SKIP_PIXELS),qe=I.getParameter(I.UNPACK_SKIP_ROWS),xe=I.getParameter(I.UNPACK_SKIP_IMAGES),Ct=R.isCompressedTexture?R.mipmaps[O]:R.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Ct.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ct.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,pe),I.pixelStorei(I.UNPACK_SKIP_ROWS,me),R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,O,be,Re,ie,le,Se,Ke,Ct.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,O,be,Re,Ct.width,Ct.height,Se,Ct.data):I.texSubImage2D(I.TEXTURE_2D,O,be,Re,ie,le,Se,Ke,Ct),I.pixelStorei(I.UNPACK_ROW_LENGTH,ht),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,dt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Jt),I.pixelStorei(I.UNPACK_SKIP_ROWS,qe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,xe),O===0&&N.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(R,N,z=null,V=null,O=0){R.isTexture!==!0&&(wr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,V=arguments[1]||null,R=arguments[2],N=arguments[3],O=arguments[4]||0);let ie,le,pe,me,be,Re,Se,Ke,ht;const dt=R.isCompressedTexture?R.mipmaps[O]:R.image;z!==null?(ie=z.max.x-z.min.x,le=z.max.y-z.min.y,pe=z.max.z-z.min.z,me=z.min.x,be=z.min.y,Re=z.min.z):(ie=dt.width,le=dt.height,pe=dt.depth,me=0,be=0,Re=0),V!==null?(Se=V.x,Ke=V.y,ht=V.z):(Se=0,Ke=0,ht=0);const Jt=Ae.convert(N.format),qe=Ae.convert(N.type);let xe;if(N.isData3DTexture)Le.setTexture3D(N,0),xe=I.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)Le.setTexture2DArray(N,0),xe=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const Ct=I.getParameter(I.UNPACK_ROW_LENGTH),Ze=I.getParameter(I.UNPACK_IMAGE_HEIGHT),xn=I.getParameter(I.UNPACK_SKIP_PIXELS),er=I.getParameter(I.UNPACK_SKIP_ROWS),Qt=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,dt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,dt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,me),I.pixelStorei(I.UNPACK_SKIP_ROWS,be),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Re),R.isDataTexture||R.isData3DTexture?I.texSubImage3D(xe,O,Se,Ke,ht,ie,le,pe,Jt,qe,dt.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(xe,O,Se,Ke,ht,ie,le,pe,Jt,dt.data):I.texSubImage3D(xe,O,Se,Ke,ht,ie,le,pe,Jt,qe,dt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ct),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ze),I.pixelStorei(I.UNPACK_SKIP_PIXELS,xn),I.pixelStorei(I.UNPACK_SKIP_ROWS,er),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Qt),O===0&&N.generateMipmaps&&I.generateMipmap(xe),ge.unbindTexture()},this.initRenderTarget=function(R){Ce.get(R).__webglFramebuffer===void 0&&Le.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Le.setTextureCube(R,0):R.isData3DTexture?Le.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Le.setTexture2DArray(R,0):Le.setTexture2D(R,0),ge.unbindTexture()},this.resetState=function(){w=0,T=0,E=null,ge.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ec?"display-p3":"srgb",t.unpackColorSpace=Xe.workingColorSpace===Go?"display-p3":"srgb"}}class Y_ extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class K_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ml,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=En()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return wr("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new D;class ac{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$e(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Sn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array),r=$e(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ac(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ku=new D,zu=new Qe,Hu=new Qe,q_=new D,Vu=new Ne,oo=new D,ba=new On,Gu=new Ne,Aa=new Kr;class Z_ extends Ot{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gc,this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ii),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,oo),this.boundingBox.expandByPoint(oo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new On),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,oo),this.boundingSphere.expandByPoint(oo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ba.copy(this.boundingSphere),ba.applyMatrix4(i),e.ray.intersectsSphere(ba)!==!1&&(Gu.copy(i).invert(),Aa.copy(e.ray).applyMatrix4(Gu),!(this.boundingBox!==null&&Aa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Aa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Qe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Gc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ap?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;zu.fromBufferAttribute(i.attributes.skinIndex,e),Hu.fromBufferAttribute(i.attributes.skinWeight,e),ku.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Hu.getComponent(r);if(o!==0){const a=zu.getComponent(r);Vu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(q_.copy(ku).applyMatrix4(Vu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class od extends ot{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ad extends At{constructor(e=null,t=1,n=1,i,r,o,a,l,c=jt,u=jt,h,d){super(null,o,a,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ju=new Ne,$_=new Ne;class lc{constructor(e=[],t=[]){this.uuid=En(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ne;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:$_;ju.multiplyMatrices(a,t[r]),ju.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new lc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ad(t,e,e,pn,Tn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new od),this.bones.push(o),this.boneInverses.push(new Ne().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Tl extends Xt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const vr=new Ne,Wu=new Ne,ao=[],Xu=new ii,J_=new Ne,ss=new Ot,os=new On;class Q_ extends Ot{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Tl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,J_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vr),Xu.copy(e.boundingBox).applyMatrix4(vr),this.boundingBox.union(Xu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vr),os.copy(e.boundingSphere).applyMatrix4(vr),this.boundingSphere.union(os)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ss.geometry=this.geometry,ss.material=this.material,ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),os.copy(this.boundingSphere),os.applyMatrix4(n),e.ray.intersectsSphere(os)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,vr),Wu.multiplyMatrices(n,vr),ss.matrixWorld=Wu,ss.raycast(e,ao);for(let o=0,a=ao.length;o<a;o++){const l=ao[o];l.instanceId=r,l.object=this,t.push(l)}ao.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Tl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ad(new Float32Array(i*this.count),i,this.count,ql,Tn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class cc extends bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Io=new D,Do=new D,Yu=new Ne,as=new Kr,lo=new On,wa=new D,Ku=new D;class uc extends ot{constructor(e=new cn,t=new cc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Io.fromBufferAttribute(t,i-1),Do.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Io.distanceTo(Do);e.setAttribute("lineDistance",new Lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(i),lo.radius+=r,e.ray.intersectsSphere(lo)===!1)return;Yu.copy(i).invert(),as.copy(e.ray).applyMatrix4(Yu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let m=f,g=_-1;m<g;m+=c){const p=u.getX(m),y=u.getX(m+1),x=co(this,e,as,l,p,y);x&&t.push(x)}if(this.isLineLoop){const m=u.getX(_-1),g=u.getX(f),p=co(this,e,as,l,m,g);p&&t.push(p)}}else{const f=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let m=f,g=_-1;m<g;m+=c){const p=co(this,e,as,l,m,m+1);p&&t.push(p)}if(this.isLineLoop){const m=co(this,e,as,l,_-1,f);m&&t.push(m)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function co(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(Io.fromBufferAttribute(o,i),Do.fromBufferAttribute(o,r),t.distanceSqToSegment(Io,Do,wa,Ku)>n)return;wa.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(wa);if(!(l<e.near||l>e.far))return{distance:l,point:Ku.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}const qu=new D,Zu=new D;class ld extends uc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)qu.fromBufferAttribute(t,i),Zu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+qu.distanceTo(Zu);e.setAttribute("lineDistance",new Lt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ex extends uc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class cd extends bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $u=new Ne,El=new Kr,uo=new On,ho=new D;class tx extends ot{constructor(e=new cn,t=new cd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(i),uo.radius+=r,e.ray.intersectsSphere(uo)===!1)return;$u.copy(i).invert(),El.copy(e.ray).applyMatrix4($u);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let _=d,m=f;_<m;_++){const g=c.getX(_);ho.fromBufferAttribute(h,g),Ju(ho,g,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let _=d,m=f;_<m;_++)ho.fromBufferAttribute(h,_),Ju(ho,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ju(s,e,t,n,i,r,o){const a=El.distanceSqToPoint(s);if(a<t){const l=new D;El.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class hc extends cn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new D,d=new D,f=[],_=[],m=[],g=[];for(let p=0;p<=n;p++){const y=[],x=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let w=0;w<=t;w++){const T=w/t;h.x=-e*Math.cos(i+T*r)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(i+T*r)*Math.sin(o+x*a),_.push(h.x,h.y,h.z),d.copy(h).normalize(),m.push(d.x,d.y,d.z),g.push(T+v,1-x),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const x=u[p][y+1],v=u[p][y],w=u[p+1][y],T=u[p+1][y+1];(p!==0||o>0)&&f.push(x,v,T),(p!==n-1||l<Math.PI)&&f.push(v,w,T)}this.setIndex(f),this.setAttribute("position",new Lt(_,3)),this.setAttribute("normal",new Lt(m,3)),this.setAttribute("uv",new Lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class dc extends bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ql,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fn extends dc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class nx extends bn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Te(16777215),this.specular=new Te(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ql,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function fo(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function ix(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function rx(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Qu(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function ud(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Us{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class sx extends Us{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jc,endingEnd:jc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Wc:r=e,a=2*t-n;break;case Xc:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Wc:o=e,l=2*n-t;break;case Xc:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-t)/(i-t),m=_*_,g=m*_,p=-d*g+2*d*m-d*_,y=(1+d)*g+(-1.5-2*d)*m+(-.5+d)*_+1,x=(-1-f)*g+(1.5+f)*m+.5*_,v=f*g-f*m;for(let w=0;w!==a;++w)r[w]=p*o[u+w]+y*o[c+w]+x*o[l+w]+v*o[h+w];return r}}class ox extends Us{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}}class ax extends Us{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Bn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fo(t,this.TimeBufferType),this.values=fo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fo(e.times,Array),values:fo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ax(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ox(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ss:t=this.InterpolantFactoryMethodDiscrete;break;case Ts:t=this.InterpolantFactoryMethodLinear;break;case Qo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ss;case this.InterpolantFactoryMethodLinear:return Ts;case this.InterpolantFactoryMethodSmooth:return Qo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&ix(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Qo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let _=0;_!==n;++_){const m=t[h+_];if(m!==t[d+_]||m!==t[f+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=Ts;class Zr extends Bn{constructor(e,t,n){super(e,t,n)}}Zr.prototype.ValueTypeName="bool";Zr.prototype.ValueBufferType=Array;Zr.prototype.DefaultInterpolation=Ss;Zr.prototype.InterpolantFactoryMethodLinear=void 0;Zr.prototype.InterpolantFactoryMethodSmooth=void 0;class hd extends Bn{}hd.prototype.ValueTypeName="color";class zr extends Bn{}zr.prototype.ValueTypeName="number";class lx extends Us{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Nn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Hr extends Bn{InterpolantFactoryMethodLinear(e){return new lx(this.times,this.values,this.getValueSize(),e)}}Hr.prototype.ValueTypeName="quaternion";Hr.prototype.InterpolantFactoryMethodSmooth=void 0;class $r extends Bn{constructor(e,t,n){super(e,t,n)}}$r.prototype.ValueTypeName="string";$r.prototype.ValueBufferType=Array;$r.prototype.DefaultInterpolation=Ss;$r.prototype.InterpolantFactoryMethodLinear=void 0;$r.prototype.InterpolantFactoryMethodSmooth=void 0;class Vr extends Bn{}Vr.prototype.ValueTypeName="vector";class cx{constructor(e="",t=-1,n=[],i=lp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=En(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(hx(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Bn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=rx(l);l=Qu(l,1,u),c=Qu(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new zr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,_,m){if(f.length!==0){const g=[],p=[];ud(f,g,p,_),g.length!==0&&m.push(new h(d,g,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let m=0;m<d[_].morphTargets.length;m++)f[d[_].morphTargets[m]]=-1;for(const m in f){const g=[],p=[];for(let y=0;y!==d[_].morphTargets.length;++y){const x=d[_];g.push(x.time),p.push(x.morphTarget===m?1:0)}i.push(new zr(".morphTargetInfluence["+m+"]",g,p))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(Vr,f+".position",d,"pos",i),n(Hr,f+".quaternion",d,"rot",i),n(Vr,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ux(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return zr;case"vector":case"vector2":case"vector3":case"vector4":return Vr;case"color":return hd;case"quaternion":return Hr;case"bool":case"boolean":return Zr;case"string":return $r}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function hx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ux(s.type);if(s.times===void 0){const t=[],n=[];ud(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const _i={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class dx{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],_=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null}}}const fx=new dx;class Jr{constructor(e){this.manager=e!==void 0?e:fx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Jr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wn={};class px extends Error{constructor(e,t){super(e),this.response=t}}class dd extends Jr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=_i.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Wn[e]!==void 0){Wn[e].push({onLoad:t,onProgress:n,onError:i});return}Wn[e]=[],Wn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Wn[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let m=0;const g=new ReadableStream({start(p){y();function y(){h.read().then(({done:x,value:v})=>{if(x)p.close();else{m+=v.byteLength;const w=new ProgressEvent("progress",{lengthComputable:_,loaded:m,total:f});for(let T=0,E=u.length;T<E;T++){const C=u[T];C.onProgress&&C.onProgress(w)}p.enqueue(v),y()}},x=>{p.error(x)})}}});return new Response(g)}else throw new px(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{_i.add(e,c);const u=Wn[e];delete Wn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Wn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Wn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class mx extends Jr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=_i.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Es("img");function l(){u(),_i.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class No extends Jr{constructor(e){super(e)}load(e,t,n,i){const r=new At,o=new mx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}let fc=class extends ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};const Ra=new Ne,eh=new D,th=new D;class pc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rc,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;eh.setFromMatrixPosition(e.matrixWorld),t.position.copy(eh),th.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(th),t.updateMatrixWorld(),Ra.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ra),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ra)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class gx extends pc{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Br*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class _x extends fc{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new gx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const nh=new Ne,ls=new D,Ca=new D;class xx extends pc{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ls.setFromMatrixPosition(e.matrixWorld),n.position.copy(ls),Ca.copy(n.position),Ca.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ca),n.updateMatrixWorld(),i.makeTranslation(-ls.x,-ls.y,-ls.z),nh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nh)}}class yx extends fc{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new xx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class vx extends pc{constructor(){super(new sc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fd extends fc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.shadow=new vx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class _s{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Mx extends Jr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=_i.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return _i.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),_i.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});_i.add(e,l),r.manager.itemStart(e)}}const mc="\\[\\]\\.:\\/",Sx=new RegExp("["+mc+"]","g"),gc="[^"+mc+"]",Tx="[^"+mc.replace("\\.","")+"]",Ex=/((?:WC+[\/:])*)/.source.replace("WC",gc),bx=/(WCOD+)?/.source.replace("WCOD",Tx),Ax=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gc),wx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gc),Rx=new RegExp("^"+Ex+bx+Ax+wx+"$"),Cx=["material","materials","bones","map"];class Px{constructor(e,t,n){const i=n||Je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Je{constructor(e,t,n){this.path=t,this.parsedPath=n||Je.parseTrackName(t),this.node=Je.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Je.Composite(e,t,n):new Je(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Sx,"")}static parseTrackName(e){const t=Rx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Cx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Je.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Je.Composite=Px;Je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Je.prototype.GetterByBindingType=[Je.prototype._getValue_direct,Je.prototype._getValue_array,Je.prototype._getValue_arrayElement,Je.prototype._getValue_toArray];Je.prototype.SetterByBindingTypeAndVersioning=[[Je.prototype._setValue_direct,Je.prototype._setValue_direct_setNeedsUpdate,Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_array,Je.prototype._setValue_array_setNeedsUpdate,Je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_arrayElement,Je.prototype._setValue_arrayElement_setNeedsUpdate,Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_fromArray,Je.prototype._setValue_fromArray_setNeedsUpdate,Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const ih=new Ne;class Lx{constructor(e,t,n=0,i=1/0){this.ray=new Kr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ic,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ih.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ih),this}intersectObject(e,t=!0,n=[]){return bl(e,this,n,t),n.sort(rh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)bl(e[i],this,n,t);return n.sort(rh),n}}function rh(s,e){return s.distance-e.distance}function bl(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)bl(r[o],e,t,!0)}}class sh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ix extends ld{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new cn;i.setAttribute("position",new Lt(t,3)),i.setAttribute("color",new Lt(n,3));const r=new cc({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new Te,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jl);function Dx(){const s=new Vt(75,window.innerWidth/window.innerHeight,.1,1e3);return s.position.set(0,0,10),s}const oh={type:"change"},Pa={type:"start"},ah={type:"end"},po=new Kr,lh=new fi,Nx=Math.cos(70*nc.DEG2RAD);class Ux extends Ji{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:tr.ROTATE,MIDDLE:tr.DOLLY,RIGHT:tr.PAN},this.touches={ONE:nr.ROTATE,TWO:nr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(M){M.addEventListener("keydown",ce),this._domElementKeyEvents=M},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ce),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(oh),n.update(),r=i.NONE},this.update=function(){const M=new D,F=new Nn().setFromUnitVectors(e.up,new D(0,1,0)),k=F.clone().invert(),Y=new D,Q=new Nn,_e=new D,we=2*Math.PI;return function(vt=null){const je=n.object.position;M.copy(je).sub(n.target),M.applyQuaternion(F),a.setFromVector3(M),n.autoRotate&&r===i.NONE&&B(b(vt)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Mt=n.minAzimuthAngle,gt=n.maxAzimuthAngle;isFinite(Mt)&&isFinite(gt)&&(Mt<-Math.PI?Mt+=we:Mt>Math.PI&&(Mt-=we),gt<-Math.PI?gt+=we:gt>Math.PI&&(gt-=we),Mt<=gt?a.theta=Math.max(Mt,Math.min(gt,a.theta)):a.theta=a.theta>(Mt+gt)/2?Math.max(Mt,a.theta):Math.min(gt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let ri=!1;if(n.zoomToCursor&&T||n.object.isOrthographicCamera)a.radius=re(a.radius);else{const Rt=a.radius;a.radius=re(a.radius*c),ri=Rt!=a.radius}if(M.setFromSpherical(a),M.applyQuaternion(k),je.copy(n.target).add(M),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&T){let Rt=null;if(n.object.isPerspectiveCamera){const kn=M.length();Rt=re(kn*c);const Ri=kn-Rt;n.object.position.addScaledVector(v,Ri),n.object.updateMatrixWorld(),ri=!!Ri}else if(n.object.isOrthographicCamera){const kn=new D(w.x,w.y,0);kn.unproject(n.object);const Ri=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ri=Ri!==n.object.zoom;const Qr=new D(w.x,w.y,0);Qr.unproject(n.object),n.object.position.sub(Qr).add(kn),n.object.updateMatrixWorld(),Rt=M.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Rt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Rt).add(n.object.position):(po.origin.copy(n.object.position),po.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(po.direction))<Nx?e.lookAt(n.target):(lh.setFromNormalAndCoplanarPoint(n.object.up,n.target),po.intersectPlane(lh,n.target))))}else if(n.object.isOrthographicCamera){const Rt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),Rt!==n.object.zoom&&(n.object.updateProjectionMatrix(),ri=!0)}return c=1,T=!1,ri||Y.distanceToSquared(n.object.position)>o||8*(1-Q.dot(n.object.quaternion))>o||_e.distanceToSquared(n.target)>o?(n.dispatchEvent(oh),Y.copy(n.object.position),Q.copy(n.object.quaternion),_e.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ue),n.domElement.removeEventListener("pointerdown",Le),n.domElement.removeEventListener("pointercancel",A),n.domElement.removeEventListener("wheel",ee),n.domElement.removeEventListener("pointermove",P),n.domElement.removeEventListener("pointerup",A),n.domElement.getRootNode().removeEventListener("keydown",ye,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ce),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new sh,l=new sh;let c=1;const u=new D,h=new ve,d=new ve,f=new ve,_=new ve,m=new ve,g=new ve,p=new ve,y=new ve,x=new ve,v=new D,w=new ve;let T=!1;const E=[],C={};let S=!1;function b(M){return M!==null?2*Math.PI/60*n.autoRotateSpeed*M:2*Math.PI/60/60*n.autoRotateSpeed}function L(M){const F=Math.abs(M*.01);return Math.pow(.95,n.zoomSpeed*F)}function B(M){l.theta-=M}function U(M){l.phi-=M}const K=function(){const M=new D;return function(k,Y){M.setFromMatrixColumn(Y,0),M.multiplyScalar(-k),u.add(M)}}(),q=function(){const M=new D;return function(k,Y){n.screenSpacePanning===!0?M.setFromMatrixColumn(Y,1):(M.setFromMatrixColumn(Y,0),M.crossVectors(n.object.up,M)),M.multiplyScalar(k),u.add(M)}}(),H=function(){const M=new D;return function(k,Y){const Q=n.domElement;if(n.object.isPerspectiveCamera){const _e=n.object.position;M.copy(_e).sub(n.target);let we=M.length();we*=Math.tan(n.object.fov/2*Math.PI/180),K(2*k*we/Q.clientHeight,n.object.matrix),q(2*Y*we/Q.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(K(k*(n.object.right-n.object.left)/n.object.zoom/Q.clientWidth,n.object.matrix),q(Y*(n.object.top-n.object.bottom)/n.object.zoom/Q.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function W(M){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(M){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ne(M,F){if(!n.zoomToCursor)return;T=!0;const k=n.domElement.getBoundingClientRect(),Y=M-k.left,Q=F-k.top,_e=k.width,we=k.height;w.x=Y/_e*2-1,w.y=-(Q/we)*2+1,v.set(w.x,w.y,1).unproject(n.object).sub(n.object.position).normalize()}function re(M){return Math.max(n.minDistance,Math.min(n.maxDistance,M))}function ae(M){h.set(M.clientX,M.clientY)}function Me(M){ne(M.clientX,M.clientX),p.set(M.clientX,M.clientY)}function Be(M){_.set(M.clientX,M.clientY)}function X(M){d.set(M.clientX,M.clientY),f.subVectors(d,h).multiplyScalar(n.rotateSpeed);const F=n.domElement;B(2*Math.PI*f.x/F.clientHeight),U(2*Math.PI*f.y/F.clientHeight),h.copy(d),n.update()}function $(M){y.set(M.clientX,M.clientY),x.subVectors(y,p),x.y>0?W(L(x.y)):x.y<0&&G(L(x.y)),p.copy(y),n.update()}function fe(M){m.set(M.clientX,M.clientY),g.subVectors(m,_).multiplyScalar(n.panSpeed),H(g.x,g.y),_.copy(m),n.update()}function he(M){ne(M.clientX,M.clientY),M.deltaY<0?G(L(M.deltaY)):M.deltaY>0&&W(L(M.deltaY)),n.update()}function Ie(M){let F=!1;switch(M.code){case n.keys.UP:M.ctrlKey||M.metaKey||M.shiftKey?U(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,n.keyPanSpeed),F=!0;break;case n.keys.BOTTOM:M.ctrlKey||M.metaKey||M.shiftKey?U(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,-n.keyPanSpeed),F=!0;break;case n.keys.LEFT:M.ctrlKey||M.metaKey||M.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(n.keyPanSpeed,0),F=!0;break;case n.keys.RIGHT:M.ctrlKey||M.metaKey||M.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(-n.keyPanSpeed,0),F=!0;break}F&&(M.preventDefault(),n.update())}function Ue(M){if(E.length===1)h.set(M.pageX,M.pageY);else{const F=Pe(M),k=.5*(M.pageX+F.x),Y=.5*(M.pageY+F.y);h.set(k,Y)}}function ke(M){if(E.length===1)_.set(M.pageX,M.pageY);else{const F=Pe(M),k=.5*(M.pageX+F.x),Y=.5*(M.pageY+F.y);_.set(k,Y)}}function nt(M){const F=Pe(M),k=M.pageX-F.x,Y=M.pageY-F.y,Q=Math.sqrt(k*k+Y*Y);p.set(0,Q)}function I(M){n.enableZoom&&nt(M),n.enablePan&&ke(M)}function ct(M){n.enableZoom&&nt(M),n.enableRotate&&Ue(M)}function We(M){if(E.length==1)d.set(M.pageX,M.pageY);else{const k=Pe(M),Y=.5*(M.pageX+k.x),Q=.5*(M.pageY+k.y);d.set(Y,Q)}f.subVectors(d,h).multiplyScalar(n.rotateSpeed);const F=n.domElement;B(2*Math.PI*f.x/F.clientHeight),U(2*Math.PI*f.y/F.clientHeight),h.copy(d)}function Ye(M){if(E.length===1)m.set(M.pageX,M.pageY);else{const F=Pe(M),k=.5*(M.pageX+F.x),Y=.5*(M.pageY+F.y);m.set(k,Y)}g.subVectors(m,_).multiplyScalar(n.panSpeed),H(g.x,g.y),_.copy(m)}function ge(M){const F=Pe(M),k=M.pageX-F.x,Y=M.pageY-F.y,Q=Math.sqrt(k*k+Y*Y);y.set(0,Q),x.set(0,Math.pow(y.y/p.y,n.zoomSpeed)),W(x.y),p.copy(y);const _e=(M.pageX+F.x)*.5,we=(M.pageY+F.y)*.5;ne(_e,we)}function ut(M){n.enableZoom&&ge(M),n.enablePan&&Ye(M)}function Ce(M){n.enableZoom&&ge(M),n.enableRotate&&We(M)}function Le(M){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(M.pointerId),n.domElement.addEventListener("pointermove",P),n.domElement.addEventListener("pointerup",A)),!de(M)&&(He(M),M.pointerType==="touch"?De(M):j(M)))}function P(M){n.enabled!==!1&&(M.pointerType==="touch"?te(M):J(M))}function A(M){switch(Ee(M),E.length){case 0:n.domElement.releasePointerCapture(M.pointerId),n.domElement.removeEventListener("pointermove",P),n.domElement.removeEventListener("pointerup",A),n.dispatchEvent(ah),r=i.NONE;break;case 1:const F=E[0],k=C[F];De({pointerId:F,pageX:k.x,pageY:k.y});break}}function j(M){let F;switch(M.button){case 0:F=n.mouseButtons.LEFT;break;case 1:F=n.mouseButtons.MIDDLE;break;case 2:F=n.mouseButtons.RIGHT;break;default:F=-1}switch(F){case tr.DOLLY:if(n.enableZoom===!1)return;Me(M),r=i.DOLLY;break;case tr.ROTATE:if(M.ctrlKey||M.metaKey||M.shiftKey){if(n.enablePan===!1)return;Be(M),r=i.PAN}else{if(n.enableRotate===!1)return;ae(M),r=i.ROTATE}break;case tr.PAN:if(M.ctrlKey||M.metaKey||M.shiftKey){if(n.enableRotate===!1)return;ae(M),r=i.ROTATE}else{if(n.enablePan===!1)return;Be(M),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Pa)}function J(M){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;X(M);break;case i.DOLLY:if(n.enableZoom===!1)return;$(M);break;case i.PAN:if(n.enablePan===!1)return;fe(M);break}}function ee(M){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(M.preventDefault(),n.dispatchEvent(Pa),he(Z(M)),n.dispatchEvent(ah))}function Z(M){const F=M.deltaMode,k={clientX:M.clientX,clientY:M.clientY,deltaY:M.deltaY};switch(F){case 1:k.deltaY*=16;break;case 2:k.deltaY*=100;break}return M.ctrlKey&&!S&&(k.deltaY*=10),k}function ye(M){M.key==="Control"&&(S=!0,n.domElement.getRootNode().addEventListener("keyup",se,{passive:!0,capture:!0}))}function se(M){M.key==="Control"&&(S=!1,n.domElement.getRootNode().removeEventListener("keyup",se,{passive:!0,capture:!0}))}function ce(M){n.enabled===!1||n.enablePan===!1||Ie(M)}function De(M){switch(Ae(M),E.length){case 1:switch(n.touches.ONE){case nr.ROTATE:if(n.enableRotate===!1)return;Ue(M),r=i.TOUCH_ROTATE;break;case nr.PAN:if(n.enablePan===!1)return;ke(M),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case nr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;I(M),r=i.TOUCH_DOLLY_PAN;break;case nr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ct(M),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Pa)}function te(M){switch(Ae(M),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;We(M),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Ye(M),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ut(M),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ce(M),n.update();break;default:r=i.NONE}}function ue(M){n.enabled!==!1&&M.preventDefault()}function He(M){E.push(M.pointerId)}function Ee(M){delete C[M.pointerId];for(let F=0;F<E.length;F++)if(E[F]==M.pointerId){E.splice(F,1);return}}function de(M){for(let F=0;F<E.length;F++)if(E[F]==M.pointerId)return!0;return!1}function Ae(M){let F=C[M.pointerId];F===void 0&&(F=new ve,C[M.pointerId]=F),F.set(M.pageX,M.pageY)}function Pe(M){const F=M.pointerId===E[0]?E[1]:E[0];return C[F]}n.domElement.addEventListener("contextmenu",ue),n.domElement.addEventListener("pointerdown",Le),n.domElement.addEventListener("pointercancel",A),n.domElement.addEventListener("wheel",ee,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",ye,{passive:!0,capture:!0}),this.update()}}const Ox=(s,e)=>{const t=new Ix(5),n=new Ux(s,e.domElement);return n.enablePan=!1,n.minDistance=5,n.maxDistance=30,{axesHelper:t,controls:n}},Fx=()=>{const s=new X_({antialias:!0});return s.setPixelRatio(window.devicePixelRatio),s.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(s.domElement),s};var Is;class Bx{constructor(){kc(this,Is,new fd(16777215,1))}initDirectionalLight(e,t,n){return Jo(this,Is).position.set(e,t,n),Jo(this,Is)}}Is=new WeakMap;function ch(s,e){if(e===cp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===vl||e===Gh){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===vl)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class kx extends Jr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new jx(t)}),this.register(function(t){return new Wx(t)}),this.register(function(t){return new ey(t)}),this.register(function(t){return new ty(t)}),this.register(function(t){return new ny(t)}),this.register(function(t){return new Yx(t)}),this.register(function(t){return new Kx(t)}),this.register(function(t){return new qx(t)}),this.register(function(t){return new Zx(t)}),this.register(function(t){return new Gx(t)}),this.register(function(t){return new $x(t)}),this.register(function(t){return new Xx(t)}),this.register(function(t){return new Qx(t)}),this.register(function(t){return new Jx(t)}),this.register(function(t){return new Hx(t)}),this.register(function(t){return new iy(t)}),this.register(function(t){return new ry(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=_s.extractUrlBase(e);o=_s.resolveURL(c,this.path)}else o=_s.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new dd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===pd){try{o[ze.KHR_BINARY_GLTF]=new sy(e)}catch(h){i&&i(h);return}r=JSON.parse(o[ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new xy(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case ze.KHR_MATERIALS_UNLIT:o[h]=new Vx;break;case ze.KHR_DRACO_MESH_COMPRESSION:o[h]=new oy(r,this.dracoLoader);break;case ze.KHR_TEXTURE_TRANSFORM:o[h]=new ay;break;case ze.KHR_MESH_QUANTIZATION:o[h]=new ly;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function zx(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Hx{constructor(e){this.parser=e,this.name=ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Te(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],It);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new fd(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new yx(u),c.distance=h;break;case"spot":c=new _x(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Yn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Vx{constructor(){this.name=ze.KHR_MATERIALS_UNLIT}getMaterialType(){return gi}extendParams(e,t,n){const i=[];e.color=new Te(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],It),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ht))}return Promise.all(i)}}class Gx{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class jx{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ve(a,a)}return Promise.all(r)}}class Wx{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Xx{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Yx{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],It)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ht)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Kx{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class qx{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(a[0],a[1],a[2],It),Promise.all(r)}}class Zx{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class $x{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(a[0],a[1],a[2],It),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ht)),Promise.all(r)}}class Jx{constructor(e){this.parser=e,this.name=ze.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Qx{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class ey{constructor(e){this.parser=e,this.name=ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class ty{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ny{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class iy{constructor(e){this.name=ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class ry{constructor(e){this.name=ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==fn.TRIANGLES&&c.mode!==fn.TRIANGLE_STRIP&&c.mode!==fn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const _ of h){const m=new Ne,g=new D,p=new Nn,y=new D(1,1,1),x=new Q_(_.geometry,_.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&y.fromBufferAttribute(l.SCALE,v),x.setMatrixAt(v,m.compose(g,p,y));for(const v in l)if(v==="_COLOR_0"){const w=l[v];x.instanceColor=new Tl(w.array,w.itemSize,w.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&_.geometry.setAttribute(v,l[v]);ot.prototype.copy.call(x,_),this.parser.assignFinalMaterial(x),f.push(x)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const pd="glTF",cs=12,uh={JSON:1313821514,BIN:5130562};class sy{constructor(e){this.name=ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,cs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==pd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-cs,r=new DataView(e,cs);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===uh.JSON){const c=new Uint8Array(e,cs+o,a);this.content=n.decode(c)}else if(l===uh.BIN){const c=cs+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class oy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Al[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Al[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Cr[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const _ in f.attributes){const m=f.attributes[_],g=l[_];g!==void 0&&(m.normalized=g)}h(f)},a,c,It,d)})})}}class ay{constructor(){this.name=ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ly{constructor(){this.name=ze.KHR_MESH_QUANTIZATION}}class md extends Us{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,_=e*c,m=_-c,g=-2*f+3*d,p=f-d,y=1-g,x=p-d+h;for(let v=0;v!==a;v++){const w=o[m+v+a],T=o[m+v+l]*u,E=o[_+v+a],C=o[_+v]*u;r[v]=y*w+x*T+g*E+p*C}return r}}const cy=new Nn;class uy extends md{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return cy.fromArray(r).normalize().toArray(r),r}}const fn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Cr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},hh={9728:jt,9729:rn,9984:Dh,9985:go,9986:hs,9987:Zn},dh={33071:mi,33648:wo,10497:Ur},La={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Al={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},di={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},hy={CUBICSPLINE:void 0,LINEAR:Ts,STEP:Ss},Ia={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function dy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new dc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Jn})),s.DefaultMaterial}function Ui(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Yn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function fy(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function py(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function my(s){let e;const t=s.extensions&&s.extensions[ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Da(t.attributes):e=s.indices+":"+Da(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Da(s.targets[n]);return e}function Da(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function wl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function gy(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const _y=new Ne;class xy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new zx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new No(this.options.manager):this.textureLoader=new Mx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new dd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ui(r,a,i),Yn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ze.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(_s.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=La[i.type],a=Cr[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Xt(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=La[i.type],c=Cr[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let m,g;if(f&&f!==h){const p=Math.floor(d/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=t.cache.get(y);x||(m=new c(a,p*f,i.count*f/u),x=new K_(m,f/u),t.cache.add(y,x)),g=new ac(x,l,d%f/u,_)}else a===null?m=new c(i.count*l):m=new c(a,d,i.count*l),g=new Xt(m,l,_);if(i.sparse!==void 0){const p=La.SCALAR,y=Cr[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,w=new y(o[1],x,i.sparse.count*p),T=new c(o[2],v,i.sparse.count*l);a!==null&&(g=new Xt(g.array.slice(),g.itemSize,g.normalized));for(let E=0,C=w.length;E<C;E++){const S=w[E];if(g.setX(S,T[E*l]),l>=2&&g.setY(S,T[E*l+1]),l>=3&&g.setZ(S,T[E*l+2]),l>=4&&g.setW(S,T[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=hh[d.magFilter]||rn,u.minFilter=hh[d.minFilter]||Zn,u.wrapS=dh[d.wrapS]||Ur,u.wrapT=dh[d.wrapT]||Ur,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let _=d;t.isImageBitmapLoader===!0&&(_=function(m){const g=new At(m);g.needsUpdate=!0,d(g)}),t.load(_s.resolveURL(h,r.path),_,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Yn(h,o),h.userData.mimeType=o.mimeType||gy(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ze.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new cd,bn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new cc,bn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return dc}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[ze.KHR_MATERIALS_UNLIT]){const h=i[ze.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Te(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],It),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Ht)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Cn);const u=r.alphaMode||Ia.OPAQUE;if(u===Ia.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ia.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==gi&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ve(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==gi&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==gi){const h=r.emissiveFactor;a.emissive=new Te().setRGB(h[0],h[1],h[2],It)}return r.emissiveTexture!==void 0&&o!==gi&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ht)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Yn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ui(i,h,r),h})}createUniqueName(e){const t=Je.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return fh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=my(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[ze.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=fh(new cn,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?dy(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,_=u.length;f<_;f++){const m=u[f],g=o[f];let p;const y=c[f];if(g.mode===fn.TRIANGLES||g.mode===fn.TRIANGLE_STRIP||g.mode===fn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new Z_(m,y):new Ot(m,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===fn.TRIANGLE_STRIP?p.geometry=ch(p.geometry,Gh):g.mode===fn.TRIANGLE_FAN&&(p.geometry=ch(p.geometry,vl));else if(g.mode===fn.LINES)p=new ld(m,y);else if(g.mode===fn.LINE_STRIP)p=new uc(m,y);else if(g.mode===fn.LINE_LOOP)p=new ex(m,y);else if(g.mode===fn.POINTS)p=new tx(m,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&py(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Yn(p,r),g.extensions&&Ui(i,p,g),t.assignFinalMaterial(p),h.push(p)}for(let f=0,_=h.length;f<_;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Ui(i,h[0],r),h[0];const d=new Vi;r.extensions&&Ui(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,_=h.length;f<_;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Vt(nc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new sc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Yn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new Ne;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new lc(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],_=i.samplers[f.sampler],m=f.target,g=m.node,p=i.parameters!==void 0?i.parameters[_.input]:_.input,y=i.parameters!==void 0?i.parameters[_.output]:_.output;m.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(_),u.push(m))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],_=h[2],m=h[3],g=h[4],p=[];for(let y=0,x=d.length;y<x;y++){const v=d[y],w=f[y],T=_[y],E=m[y],C=g[y];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const S=n._createAnimationTracks(v,w,T,E,C);if(S)for(let b=0;b<S.length;b++)p.push(S[b])}return new cx(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,_y)});for(let f=0,_=h.length;f<_;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new od:c.length>1?u=new Vi:c.length===1?u=c[0]:u=new ot,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Yn(u,r),r.extensions&&Ui(n,u,r),r.matrix!==void 0){const h=new Ne;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Vi;n.name&&(r.name=i.createUniqueName(n.name)),Yn(r,n),n.extensions&&Ui(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof bn||d instanceof At)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];di[r.path]===di.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(di[r.path]){case di.weights:c=zr;break;case di.rotation:c=Hr;break;case di.position:case di.scale:c=Vr;break;default:switch(n.itemSize){case 1:c=zr;break;case 2:case 3:default:c=Vr;break}break}const u=i.interpolation!==void 0?hy[i.interpolation]:Ts,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const _=new c(l[d]+"."+di[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=wl(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Hr?uy:md;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function yy(s,e,t){const n=e.attributes,i=new ii;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),a.normalized){const u=wl(Cr[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new D,l=new D;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,_=d.max;if(f!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(_[2]))),d.normalized){const m=wl(Cr[d.componentType]);l.multiplyScalar(m)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new On;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function fh(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=Al[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Xe.workingColorSpace!==It&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`),Yn(s,e),yy(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?fy(s,e.targets,t):s})}function vy(s,e){new kx().load("./guitar-extra-gltf.gltf",n=>{const i=n.scene,r="GUITAR",a=new No().load("texture-default.png");i.traverse(c=>{c.name===r&&(c.material.map=a,c.material.needsUpdate=!0,c.material.color.set(16711680)),c.isMesh&&(c.geometry.rotateX(1.5),c.geometry.rotateY(0),c.geometry.rotateZ(1.555)),c.isMesh&&c.name===r&&c.geometry.computeVertexNormals()}),s.add(i);const l=i.getObjectByName(r);l&&e.lookAt(l.getWorldPosition(new D))},n=>{},void 0,n=>{console.error(n)})}class My extends cn{constructor(e,t,n,i){super();const r=[],o=[],a=[],l=new D,c=new Ne;c.makeRotationFromEuler(n),c.setPosition(t);const u=new Ne;u.copy(c).invert(),h(),this.setAttribute("position",new Lt(r,3)),this.setAttribute("normal",new Lt(o,3)),this.setAttribute("uv",new Lt(a,2));function h(){let m=[];const g=new D,p=new D,y=e.geometry,x=y.attributes.position,v=y.attributes.normal;if(y.index!==null){const w=y.index;for(let T=0;T<w.count;T++)g.fromBufferAttribute(x,w.getX(T)),p.fromBufferAttribute(v,w.getX(T)),d(m,g,p)}else for(let w=0;w<x.count;w++)g.fromBufferAttribute(x,w),p.fromBufferAttribute(v,w),d(m,g,p);m=f(m,l.set(1,0,0)),m=f(m,l.set(-1,0,0)),m=f(m,l.set(0,1,0)),m=f(m,l.set(0,-1,0)),m=f(m,l.set(0,0,1)),m=f(m,l.set(0,0,-1));for(let w=0;w<m.length;w++){const T=m[w];a.push(.5+T.position.x/i.x,.5+T.position.y/i.y),T.position.applyMatrix4(c),r.push(T.position.x,T.position.y,T.position.z),o.push(T.normal.x,T.normal.y,T.normal.z)}}function d(m,g,p){g.applyMatrix4(e.matrixWorld),g.applyMatrix4(u),p.transformDirection(e.matrixWorld),m.push(new ph(g.clone(),p.clone()))}function f(m,g){const p=[],y=.5*Math.abs(i.dot(g));for(let x=0;x<m.length;x+=3){let v=0,w,T,E,C;const S=m[x+0].position.dot(g)-y,b=m[x+1].position.dot(g)-y,L=m[x+2].position.dot(g)-y,B=S>0,U=b>0,K=L>0;switch(v=(B?1:0)+(U?1:0)+(K?1:0),v){case 0:{p.push(m[x]),p.push(m[x+1]),p.push(m[x+2]);break}case 1:{if(B&&(w=m[x+1],T=m[x+2],E=_(m[x],w,g,y),C=_(m[x],T,g,y)),U){w=m[x],T=m[x+2],E=_(m[x+1],w,g,y),C=_(m[x+1],T,g,y),p.push(E),p.push(T.clone()),p.push(w.clone()),p.push(T.clone()),p.push(E.clone()),p.push(C);break}K&&(w=m[x],T=m[x+1],E=_(m[x+2],w,g,y),C=_(m[x+2],T,g,y)),p.push(w.clone()),p.push(T.clone()),p.push(E),p.push(C),p.push(E.clone()),p.push(T.clone());break}case 2:{B||(w=m[x].clone(),T=_(w,m[x+1],g,y),E=_(w,m[x+2],g,y),p.push(w),p.push(T),p.push(E)),U||(w=m[x+1].clone(),T=_(w,m[x+2],g,y),E=_(w,m[x],g,y),p.push(w),p.push(T),p.push(E)),K||(w=m[x+2].clone(),T=_(w,m[x],g,y),E=_(w,m[x+1],g,y),p.push(w),p.push(T),p.push(E));break}}}return p}function _(m,g,p,y){const x=m.position.dot(p)-y,v=g.position.dot(p)-y,w=x/(x-v);return new ph(new D(m.position.x+w*(g.position.x-m.position.x),m.position.y+w*(g.position.y-m.position.y),m.position.z+w*(g.position.z-m.position.z)),new D(m.normal.x+w*(g.normal.x-m.normal.x),m.normal.y+w*(g.normal.y-m.normal.y),m.normal.z+w*(g.normal.z-m.normal.z)))}}}class ph{constructor(e,t){this.position=e,this.normal=t}clone(){return new this.constructor(this.position.clone(),this.normal.clone())}}class Sy{constructor(e,t){Ve(this,"raycaster",new Lx);Ve(this,"mouse",new ve);Ve(this,"textureLoader",new No);Ve(this,"helper",new ot);Ve(this,"color",new Te(6381921));Ve(this,"camera",{});Ve(this,"scene",{});Ve(this,"intersectedObject",{});Ve(this,"selectedSticker",{});Ve(this,"isStickerOn",!1);Ve(this,"lastRotate",0);this.camera=t,this.scene=e,vy(e,t)}addHaloGlow(e,t,n,i){const r=e.geometry.clone(),o=new gi({color:t,transparent:!0,opacity:i,blending:Ga,depthTest:!1}),a=new Ot(r,o);return a.scale.multiplyScalar(n),a.position.copy(e.position),a.rotation.copy(e.rotation),a.position.y=.1,a}changeIntersectedObject(e){this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const t=this.raycaster.intersectObjects(this.scene.children,!0);if(!t)return;const n=t[0].point;if(this.intersectedObject={...this.intersectedObject,...t[0].object},this.isStickerOn){this.isStickerOn=!1,this.applySticker(n,t[0].face.normal,this.intersectedObject);return}this.addTemporaryGlow()}addTemporaryGlow(){const e=this.addHaloGlow(this.intersectedObject,16777215,1,8);this.scene.add(e),this.fadeOutGlow(e,800)}fadeOutGlow(e,t){const n=performance.now(),i=()=>{const o=(performance.now()-n)/t;o<1?(e.material.opacity=.5*(1-o),requestAnimationFrame(i)):(this.scene.remove(e),e.geometry.dispose(),e.material.dispose())};i()}changeIntersectedObjectMaterialColor(e){this.intersectedObject.material.color.set(e)}changeIntersectedObjectMaterialRoughness(e){this.intersectedObject.material.roughness=e}changeIntersectedObjectMaterialMetalness(e){this.intersectedObject.material.metalness=e}updateIntersectedObject(e){this.intersectedObject={intersectedObject:e,...searchedelement}}updateIntersectedObjectTexture(e){const t=this.textureLoader.load(e);this.intersectedObject.material.map=t}updateIntersectedObjectTextureFromFile(e){const t=new FileReader;t.onload=n=>{const r=new No().load(n.target.result,o=>{o.needsUpdate=!0});this.intersectedObject.material.map=r},t.readAsDataURL(e)}rotateTexture(e){const t=this.intersectedObject.material.map;if(t){const n=e-this.lastRotate;t.rotation+=nc.degToRad(n),t.needsUpdate=!0,this.lastRotate=e}}moveX(e){const t=this.intersectedObject.material.map;t&&(t.offset.x=e,t.needsUpdate=!0)}moveY(e){const t=this.intersectedObject.material.map;t&&(t.offset.y=e,t.needsUpdate=!0)}zoomInOutTexture(e){this.intersectedObject.originalRepeat||(this.intersectedObject.originalRepeat=this.intersectedObject.material.map.repeat.clone());const t=this.intersectedObject.material.map;t&&(t.repeat.copy(this.intersectedObject.originalRepeat).multiplyScalar(e),t.needsUpdate=!0)}applySticker(e,t,n){const i=new nx({color:16777215,depthWrite:!1,depthTest:!0,polygonOffset:!0,polygonOffsetFactor:-1,transparent:!0,map:this.selectedSticker,specular:4473924,wireframe:!1}),r=new My(this.intersectedObject,e,this.helper.rotation,new D(.5,.5,.5)),o=new Ot(r,i);this.scene.add(o)}putStickerOnTheGuitar(e){const t=this.textureLoader.load(e);this.selectedSticker=t,this.isStickerOn=!0}}class Ty{constructor(e){Ve(this,"guitar",{});Ve(this,"guitarElements",document.querySelectorAll("#guitar-elements"));Ve(this,"appereanceControl",document.querySelector("#appearence-control"));Ve(this,"appereanceControlIcon",document.querySelector(".appearence-control-icon"));Ve(this,"stickerControl",document.querySelector("#sticker-control"));Ve(this,"refresh",document.querySelector("#refresh"));Ve(this,"loaderContainer",document.querySelector(".loader-container"));Ve(this,"canvas",document.querySelector("canvas"));Ve(this,"closeStickerIcon",document.querySelector(".close-icon-sticker"));Ve(this,"stickerControlIcon",document.querySelector(".sticker-control-icon"));Ve(this,"stickerContainer",document.querySelector(".sticker-container"));Ve(this,"isApperanceControlMenuGenerated",!1);Ve(this,"isStickerControlMenuGenerated",!1);this.guitar=e,this.init()}init(){this.initLoader(),this.mapGuitarElements(),this.initListingForIcons(),this.initMutationObserver(),this.initMutationObserverSticker(),this.initListningForClickOnModel()}initMutationObserver(){this.observer=new MutationObserver(()=>this.checkElements()),this.observer.observe(this.appereanceControl,{childList:!0,subtree:!0})}initMutationObserverSticker(){this.observer=new MutationObserver(()=>this.checkElementsSticker()),this.observer.observe(this.stickerControl,{childList:!0,subtree:!0})}checkElementsSticker(){const e=document.querySelector(".sticker-container"),t=document.querySelector(".close-icon-sticker");e.childNodes.forEach(n=>{n.addEventListener("click",i=>{const r=i.target,l=window.getComputedStyle(r).backgroundImage.match(/url\(["']?(https?:\/\/[^\/]+\/)?(.*?)["']?\)/);l[2]&&this.guitar.putStickerOnTheGuitar(l[2])})}),t.addEventListener("click",()=>{this.hideStickerControlMenu()})}checkElements(){const e=document.querySelector(".close-icon"),t=document.querySelector("#color-picker"),n=document.querySelector("#roughness"),i=document.querySelector("#metalness"),r=document.querySelector(".colors-container"),o=document.querySelector(".texture-container"),a=document.querySelector("#rotate"),l=document.querySelector("#zoom"),c=document.querySelector("#moveX"),u=document.querySelector("#moveY"),h=document.querySelector("#textureInput");e.addEventListener("click",()=>{this.hideApperenaceControlMenu()}),t.addEventListener("input",d=>{this.guitar.changeIntersectedObjectMaterialColor(d.target.value)}),n.addEventListener("input",d=>{this.guitar.changeIntersectedObjectMaterialRoughness(d.target.value)}),i.addEventListener("input",d=>{this.guitar.changeIntersectedObjectMaterialMetalness(d.target.value)}),a.addEventListener("input",d=>{this.guitar.rotateTexture(d.target.value)}),l.addEventListener("input",d=>{this.guitar.zoomInOutTexture(d.target.value)}),c.addEventListener("input",d=>{this.guitar.moveX(d.target.value)}),u.addEventListener("input",d=>{this.guitar.moveY(d.target.value)}),r.childNodes.forEach(d=>{d.addEventListener("click",f=>{const _=f.target.getAttribute("data-color");this.guitar.changeIntersectedObjectMaterialColor(_)})}),o.childNodes.forEach(d=>{d.addEventListener("click",f=>{const _=f.target,p=window.getComputedStyle(_).backgroundImage.match(/url\(["']?(https?:\/\/[^\/]+\/)?(.*?)["']?\)/),y=`${p[1]}${p[2]}`;y&&this.guitar.updateIntersectedObjectTexture(y)})}),h.addEventListener("change",d=>{const f=d.target.files[0];f&&this.guitar.updateIntersectedObjectTextureFromFile(f)})}updateActiveElement(){this.guitar.changeIntersectedObjectMaterialColor(colorInput.value),this.guitar.changeIntersectedObjectMaterialMetalness(metalnessInput.value),this.guitar.changeIntersectedObjectMaterialRoughness(roughnessInput.value)}mapGuitarElements(){this.guitarElements.forEach(e=>{e.addEventListener("click",t=>{const n=this.scene.getObjectByName(t.target.id);this.guitar.updateIntersectedObject({...this.intersectedObject,...n}),updateActiveElement(this.intersectedObject.name)})})}initLoader(){setTimeout(()=>{this.loaderContainer.animate([{clipPath:"circle(100% at center)",opacity:1},{clipPath:"circle(5% at center)",opacity:0,display:"none"}],{duration:1e3,easing:"ease-in-out",fill:"forwards"})},700)}initListingForIcons(){this.appereanceControlIcon.addEventListener("click",()=>{this.isApperanceControlMenuGenerated||this.generateApperanceControlMenu(),this.showApperenaceControlMenu()}),this.stickerControlIcon.addEventListener("click",()=>{this.isStickerControlMenuGenerated||this.generateStickerControlMenu(),this.showStickerControlMenu()}),this.refresh.addEventListener("click",()=>{location.reload()})}hideApperenaceControlMenu(){this.appereanceControl.style.display="none",this.appereanceControlIcon.style.display="flex"}generateApperanceControlMenu(){this.isApperanceControlMenuGenerated=!0;const e=[{name:"red",hex:"#ff0000"},{name:"blue",hex:"#0000ff"},{name:"green",hex:"#008000"},{name:"yellow",hex:"#ffff00"},{name:"purple",hex:"#800080"},{name:"white",hex:"#ffffff"},{name:"black",hex:"#000000"}],t=[{name:"Default",url:"texture-default.png"},{name:"Custom",url:""},{name:"Pastel",url:"texture0.PNG"},{name:"Rusty",url:"texture1.jpg"},{name:"Chaotic",url:"texture2.PNG"}];for(let n=4;n<=21;n++)t.push({name:"Scratches",url:`texture${n}.PNG`});this.appereanceControl.innerHTML=`
      <div id="active-element" style="display: none"></div>
      <h1 style="font-size: 18px; text-align: left; width: 100%; padding-left: 16px;">
        Change Color
      </h1>
      <div class="close-icon"><i data-feather="x"></i>X</div>
      <div class="colors-container">
  
        ${e.map(n=>`<span class="color-dot-${n.name}" data-color="${n.hex}"></span>`).join("")}
      <input type="color" id="color-picker" name="color-picker" value="" />
      </div>
      <h1 style="font-size: 18px; text-align: left; width: 100%; padding-left: 16px;">
        Change Texture
      </h1>

      <div class="texture-container">
         
        ${t.map(n=>`
          <div class="texture-card" style="${n.url?`background-image: url('${n.url}')`:""}">
            <span>${n.name==="Custom"?'Custom <input type="file" id="textureInput" accept="image/*">':n.name}</span>
          </div>
        `).join("")}
      </div>
      <div style="display: flex; gap: 10px">
      <div>
      <p>Roughness</p>
      <input type="range" min="0" max="2" step="0.01" value="" id="roughness" />
      </div>
      <div>
      <p>Metalness</p>
      <input type="range" min="0" max="2" step="0.01" value="" id="metalness" />
      </div>
      </div>

      <div style="display: flex; gap: 10px">
          <div>
   <p> Rotate </p>
      <input type="range" min="0" max="360" step="1" value="0" id="rotate" />

      
          </div>
         <div>
 <p> Zoom in / Zoom out</p>
      <input type="range" min="0.5" max="2.5" step="0.01" value="1.0" id="zoom" />
         </div>

      
      </div>
            <div style="display: flex; gap: 10px">
      <div>
        <p> MoveX </p>
        <input type="range" min="0" max="1" step="0.001" value="0.5" id="moveX" />
      </div>
      <div>
  <p> MoveY </p>
            <input type="range" min="0" max="1" step="0.001" value="0.5" id="moveY" />
      </div>
       
      </div>
      </div>


 
   
    `}generateStickerControlMenu(){this.isStickerControlMenuGenerated=!0,this.stickerControl.innerHTML=`
       <h1
        style="
          font-size: 18px;
          text-align: left;
          width: 100%;
          padding-top: 8px;
          padding-left: 16px;
        "
      >
        Add sticker
      </h1>
      <div class="close-icon-sticker">X</div>
      <div class="sticker-container">
        <div class="texture-card">
          <span> Custom </span>
        </div>
        <div
          class="texture-card"
          style="background-image: url('stop.jpg')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker0.PNG')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker1.PNG')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker2.PNG')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker3.PNG')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker4.PNG')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker5.PNG')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker6.PNG')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker7.PNG')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker8.PNG')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker9.PNG')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker10.PNG')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker11.PNG')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker12.PNG')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker13.PNG')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker14.PNG')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker15.PNG')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker16.PNG')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker17.PNG')"
        ></div>
              <div
          class="texture-card"
          style="background-image: url('test.png')"
        ></div>
      </div>
    `}showApperenaceControlMenu(){this.appereanceControl.style.display="flex",this.appereanceControlIcon.style.display="none"}hideStickerControlMenu(){this.stickerControl.style.display="none",this.stickerControlIcon.style.display="flex"}showStickerControlMenu(){this.stickerControl.style.display="flex",this.stickerControlIcon.style.display="none"}initListningForClickOnModel(){this.canvas.addEventListener("click",e=>{this.guitar.changeIntersectedObject(e),this.isApperanceControlMenuGenerated||this.generateApperanceControlMenu(),this.showApperenaceControlMenu()},!1)}}function Kn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function gd(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var an={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Gr={duration:.5,overwrite:!1,delay:0},_c,Ft,st,mn=1e8,tt=1/mn,Rl=Math.PI*2,Ey=Rl/4,by=0,_d=Math.sqrt,Ay=Math.cos,wy=Math.sin,wt=function(e){return typeof e=="string"},ft=function(e){return typeof e=="function"},ti=function(e){return typeof e=="number"},xc=function(e){return typeof e>"u"},Un=function(e){return typeof e=="object"},Yt=function(e){return e!==!1},yc=function(){return typeof window<"u"},mo=function(e){return ft(e)||wt(e)},xd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Bt=Array.isArray,Cl=/(?:-?\.?\d|\.)+/gi,yd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Tr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Na=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,vd=/[+-]=-?[.\d]+/,Md=/[^,'"\[\]\s]+/gi,Ry=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,at,wn,Pl,vc,ln={},Uo={},Sd,Td=function(e){return(Uo=Zi(e,ln))&&$t},Mc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},bs=function(e,t){return!t&&console.warn(e)},Ed=function(e,t){return e&&(ln[e]=t)&&Uo&&(Uo[e]=t)||ln},As=function(){return 0},Cy={suppressEvents:!0,isStart:!0,kill:!1},To={suppressEvents:!0,kill:!1},Py={suppressEvents:!0},Sc={},Ti=[],Ll={},bd,nn={},Ua={},mh=30,Eo=[],Tc="",Ec=function(e){var t=e[0],n,i;if(Un(t)||ft(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Eo.length;i--&&!Eo[i].targetTest(t););n=Eo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new qd(e[i],n)))||e.splice(i,1);return e},ji=function(e){return e._gsap||Ec(gn(e))[0]._gsap},Ad=function(e,t,n){return(n=e[t])&&ft(n)?e[t]():xc(n)&&e.getAttribute&&e.getAttribute(t)||n},Kt=function(e,t){return(e=e.split(",")).forEach(t)||e},mt=function(e){return Math.round(e*1e5)/1e5||0},bt=function(e){return Math.round(e*1e7)/1e7||0},Pr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Ly=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Oo=function(){var e=Ti.length,t=Ti.slice(0),n,i;for(Ll={},Ti.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},wd=function(e,t,n,i){Ti.length&&!Ft&&Oo(),e.render(t,n,Ft&&t<0&&(e._initted||e._startAt)),Ti.length&&!Ft&&Oo()},Rd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Md).length<2?t:wt(e)?e.trim():e},Cd=function(e){return e},_n=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Iy=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Zi=function(e,t){for(var n in t)e[n]=t[n];return e},gh=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Un(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Fo=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},xs=function(e){var t=e.parent||at,n=e.keyframes?Iy(Bt(e.keyframes)):_n;if(Yt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Dy=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Pd=function(e,t,n,i,r){var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Xo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},bi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Wi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Ny=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Il=function(e,t,n,i){return e._startAt&&(Ft?e._startAt.revert(To):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Uy=function s(e){return!e||e._ts&&s(e.parent)},_h=function(e){return e._repeat?jr(e._tTime,e=e.duration()+e._rDelay)*e:0},jr=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Bo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Yo=function(e){return e._end=bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||tt)||0))},Ko=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=bt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Yo(e),n._dirty||Wi(n,e)),e},Ld=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Bo(e.rawTime(),t),(!t._dur||Os(0,t.totalDuration(),n)-t._tTime>tt)&&t.render(n,!0)),Wi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-tt}},Ln=function(e,t,n,i){return t.parent&&bi(t),t._start=bt((ti(n)?n:n||e!==at?dn(e,n,t):e._time)+t._delay),t._end=bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Pd(e,t,"_first","_last",e._sort?"_start":0),Dl(t)||(e._recent=t),i||Ld(e,t),e._ts<0&&Ko(e,e._tTime),e},Id=function(e,t){return(ln.ScrollTrigger||Mc("scrollTrigger",t))&&ln.ScrollTrigger.create(t,e)},Dd=function(e,t,n,i,r){if(Ac(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Ft&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&bd!==sn.frame)return Ti.push(e),e._lazy=[r,i],1},Oy=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Dl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Fy=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&Oy(e)&&!(!e._initted&&Dl(e))||(e._ts<0||e._dp._ts<0)&&!Dl(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Os(0,e._tDur,t),u=jr(l,a),e._yoyo&&u&1&&(o=1-o),u!==jr(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||Ft||i||e._zTime===tt||!t&&e._zTime){if(!e._initted&&Dd(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?tt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Il(e,t,n,!0),e._onUpdate&&!n&&on(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&on(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&bi(e,1),!n&&!Ft&&(on(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},By=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Wr=function(e,t,n,i){var r=e._repeat,o=bt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:bt(o*(r+1)+e._rDelay*r):o,a>0&&!i&&Ko(e,e._tTime=e._tDur*a),e.parent&&Yo(e),n||Wi(e.parent,e),e},xh=function(e){return e instanceof Gt?Wi(e):Wr(e,e._dur)},ky={_start:0,endTime:As,totalDuration:As},dn=function s(e,t,n){var i=e.labels,r=e._recent||ky,o=e.duration()>=mn?r.endTime(!1):e._dur,a,l,c;return wt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Bt(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ys=function(e,t,n){var i=ti(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Yt(l.vars.inherit)&&l.parent;o.immediateRender=Yt(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new yt(t[0],o,t[r+1])},wi=function(e,t){return e||e===0?t(e):t},Os=function(e,t,n){return n<e?e:n>t?t:n},Ut=function(e,t){return!wt(e)||!(t=Ry.exec(e))?"":t[1]},zy=function(e,t,n){return wi(n,function(i){return Os(e,t,i)})},Nl=[].slice,Nd=function(e,t){return e&&Un(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Un(e[0]))&&!e.nodeType&&e!==wn},Hy=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return wt(i)&&!t||Nd(i,1)?(r=n).push.apply(r,gn(i)):n.push(i)})||n},gn=function(e,t,n){return st&&!t&&st.selector?st.selector(e):wt(e)&&!n&&(Pl||!Xr())?Nl.call((t||vc).querySelectorAll(e),0):Bt(e)?Hy(e,n):Nd(e)?Nl.call(e,0):e?[e]:[]},Ul=function(e){return e=gn(e)[0]||bs("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return gn(t,n.querySelectorAll?n:n===e?bs("Invalid scope")||vc.createElement("div"):e)}},Ud=function(e){return e.sort(function(){return .5-Math.random()})},Od=function(e){if(ft(e))return e;var t=Un(e)?e:{each:e},n=Xi(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return wt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(d,f,_){var m=(_||t).length,g=o[m],p,y,x,v,w,T,E,C,S;if(!g){if(S=t.grid==="auto"?0:(t.grid||[1,mn])[1],!S){for(E=-mn;E<(E=_[S++].getBoundingClientRect().left)&&S<m;);S<m&&S--}for(g=o[m]=[],p=l?Math.min(S,m)*u-.5:i%S,y=S===mn?0:l?m*h/S-.5:i/S|0,E=0,C=mn,T=0;T<m;T++)x=T%S-p,v=y-(T/S|0),g[T]=w=c?Math.abs(c==="y"?v:x):_d(x*x+v*v),w>E&&(E=w),w<C&&(C=w);i==="random"&&Ud(g),g.max=E-C,g.min=C,g.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(S>m?m-1:c?c==="y"?m/S:S:Math.max(S,m/S))||0)*(i==="edges"?-1:1),g.b=m<0?r-m:r,g.u=Ut(t.amount||t.each)||0,n=n&&m<0?Xd(n):n}return m=(g[d]-g.min)/g.max||0,bt(g.b+(n?n(m):m)*g.v)+g.u}},Ol=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=bt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ti(n)?0:Ut(n))}},Fd=function(e,t){var n=Bt(e),i,r;return!n&&Un(e)&&(i=n=e.radius||mn,e.values?(e=gn(e.values),(r=!ti(e[0]))&&(i*=i)):e=Ol(e.increment)),wi(t,n?ft(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=mn,u=0,h=e.length,d,f;h--;)r?(d=e[h].x-a,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-a),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:o,r||u===o||ti(o)?u:u+Ut(o)}:Ol(e))},Bd=function(e,t,n,i){return wi(Bt(e)?!t:n===!0?!!(n=0):!i,function(){return Bt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Vy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},Gy=function(e,t){return function(n){return e(parseFloat(n))+(t||Ut(n))}},jy=function(e,t,n){return zd(e,t,0,1,n)},kd=function(e,t,n){return wi(n,function(i){return e[~~t(i)]})},Wy=function s(e,t,n){var i=t-e;return Bt(e)?kd(e,s(0,e.length),t):wi(n,function(r){return(i+(r-e)%i)%i+e})},Xy=function s(e,t,n){var i=t-e,r=i*2;return Bt(e)?kd(e,s(0,e.length-1),t):wi(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},ws=function(e){for(var t=0,n="",i,r,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,o-i-7).match(a?Md:Cl),n+=e.substr(t,i-t)+Bd(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},zd=function(e,t,n,i,r){var o=t-e,a=i-n;return wi(r,function(l){return n+((l-e)/o*a||0)})},Yy=function s(e,t,n,i){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var o=wt(e),a={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Bt(e)&&!Bt(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(_){_*=h;var m=Math.min(d,~~_);return u[m](_-m)},n=t}else i||(e=Zi(Bt(e)?[]:{},e));if(!u){for(l in t)bc.call(a,e,l,"get",t[l]);r=function(_){return Cc(_,a)||(o?e.p:e)}}}return wi(n,r)},yh=function(e,t,n){var i=e.labels,r=mn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},on=function(e,t,n){var i=e.vars,r=i[t],o=st,a=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Ti.length&&Oo(),a&&(st=a),u=l?r.apply(c,l):r.call(c),st=o,u},fs=function(e){return bi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ft),e.progress()<1&&on(e,"onInterrupt"),e},Er,Hd=[],Vd=function(e){if(e)if(e=!e.name&&e.default||e,yc()||e.headless){var t=e.name,n=ft(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:As,render:Cc,add:bc,kill:cv,modifier:lv,rawVars:0},o={targetTest:0,get:0,getSetter:Rc,aliases:{},register:0};if(Xr(),e!==i){if(nn[t])return;_n(i,_n(Fo(e,r),o)),Zi(i.prototype,Zi(r,Fo(e,o))),nn[i.prop=t]=i,e.targetTest&&(Eo.push(i),Sc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ed(t,i),e.register&&e.register($t,i,qt)}else Hd.push(e)},et=255,ps={aqua:[0,et,et],lime:[0,et,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,et],navy:[0,0,128],white:[et,et,et],olive:[128,128,0],yellow:[et,et,0],orange:[et,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[et,0,0],pink:[et,192,203],cyan:[0,et,et],transparent:[et,et,et,0]},Oa=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*et+.5|0},Gd=function(e,t,n){var i=e?ti(e)?[e>>16,e>>8&et,e&et]:0:ps.black,r,o,a,l,c,u,h,d,f,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ps[e])i=ps[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&et,i&et,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&et,e&et]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Cl),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=Oa(l+1/3,r,o),i[1]=Oa(l,r,o),i[2]=Oa(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(yd),n&&i.length<4&&(i[3]=1),i}else i=e.match(Cl)||ps.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/et,o=i[1]/et,a=i[2]/et,h=Math.max(r,o,a),d=Math.min(r,o,a),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===r?(o-a)/f+(o<a?6:0):h===o?(a-r)/f+2:(r-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},jd=function(e){var t=[],n=[],i=-1;return e.split(Ei).forEach(function(r){var o=r.match(Tr)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},vh=function(e,t,n){var i="",r=(e+i).match(Ei),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!r)return e;if(r=r.map(function(d){return(d=Gd(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=jd(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Ei,"1").split(Tr),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Ei),h=c.length-1;a<h;a++)i+=c[a]+r[a];return i+c[h]},Ei=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ps)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),Ky=/hsl[a]?\(/,Wd=function(e){var t=e.join(" "),n;if(Ei.lastIndex=0,Ei.test(t))return n=Ky.test(t),e[1]=vh(e[1],n),e[0]=vh(e[0],n,jd(e[1])),!0},Rs,sn=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,u,h,d,f,_=function m(g){var p=s()-i,y=g===!0,x,v,w,T;if((p>e||p<0)&&(n+=p-t),i+=p,w=i-n,x=w-o,(x>0||y)&&(T=++h.frame,d=w-h.time*1e3,h.time=w=w/1e3,o+=x+(x>=r?4:r-x),v=1),y||(l=c(m)),v)for(f=0;f<a.length;f++)a[f](w,d,T,g)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return d/(1e3/(g||60))},wake:function(){Sd&&(!Pl&&yc()&&(wn=Pl=window,vc=wn.document||{},ln.gsap=$t,(wn.gsapVersions||(wn.gsapVersions=[])).push($t.version),Td(Uo||wn.GreenSockGlobals||!wn.gsap&&wn||{}),Hd.forEach(Vd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(g){return setTimeout(g,o-h.time*1e3+1|0)},Rs=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Rs=0,c=As},lagSmoothing:function(g,p){e=g||1/0,t=Math.min(p||33,e)},fps:function(g){r=1e3/(g||240),o=h.time*1e3+r},add:function(g,p,y){var x=p?function(v,w,T,E){g(v,w,T,E),h.remove(x)}:g;return h.remove(g),a[y?"unshift":"push"](x),Xr(),x},remove:function(g,p){~(p=a.indexOf(g))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},h}(),Xr=function(){return!Rs&&sn.wake()},Ge={},qy=/^[\d.\-M][\d.\-,\s]/,Zy=/["']/g,$y=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(Zy,"").trim():+c,i=l.substr(a+1).trim();return t},Jy=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Qy=function(e){var t=(e+"").split("("),n=Ge[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[$y(t[1])]:Jy(e).split(",").map(Rd)):Ge._CE&&qy.test(e)?Ge._CE("",e):n},Xd=function(e){return function(t){return 1-e(1-t)}},Yd=function s(e,t){for(var n=e._first,i;n;)n instanceof Gt?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Xi=function(e,t){return e&&(ft(e)?e:Ge[e]||Qy(e))||t},Qi=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return Kt(e,function(a){Ge[a]=ln[a]=r,Ge[o=a.toLowerCase()]=n;for(var l in r)Ge[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ge[a+"."+l]=r[l]}),r},Kd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Fa=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/Rl*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*wy((u-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Kd(a);return r=Rl/r,l.config=function(c,u){return s(e,c,u)},l},Ba=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Kd(n);return i.config=function(r){return s(e,r)},i};Kt("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Qi(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ge.Linear.easeNone=Ge.none=Ge.Linear.easeIn;Qi("Elastic",Fa("in"),Fa("out"),Fa());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};Qi("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Qi("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});Qi("Circ",function(s){return-(_d(1-s*s)-1)});Qi("Sine",function(s){return s===1?1:-Ay(s*Ey)+1});Qi("Back",Ba("in"),Ba("out"),Ba());Ge.SteppedEase=Ge.steps=ln.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-tt;return function(a){return((i*Os(0,o,a)|0)+r)*n}}};Gr.ease=Ge["quad.out"];Kt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Tc+=s+","+s+"Params,"});var qd=function(e,t){this.id=by++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ad,this.set=t?t.getSetter:Rc},Cs=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Wr(this,+t.duration,1,1),this.data=t.data,st&&(this._ctx=st,st.data.push(this)),Rs||sn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Wr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Xr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ko(this,n),!r._dp||r.parent||Ld(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ln(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===tt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),wd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+_h(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+_h(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?jr(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-tt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Bo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-tt?0:this._rts,this.totalTime(Os(-Math.abs(this._delay),this._tDur,r),i!==!1),Yo(this),Ny(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Xr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==tt&&(this._tTime-=tt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ln(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Yt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Bo(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Py);var i=Ft;return Ft=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ft=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,xh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,xh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(dn(this,n),Yt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Yt(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-tt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-tt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-tt)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(r){var o=ft(n)?n:Cd,a=function(){var c=i.then;i.then=null,ft(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){fs(this)},s}();_n(Cs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-tt,_prom:0,_ps:!1,_rts:1});var Gt=function(s){gd(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Yt(n.sortChildren),at&&Ln(n.parent||at,Kn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Id(Kn(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return ys(0,arguments,this),this},t.from=function(i,r,o){return ys(1,arguments,this),this},t.fromTo=function(i,r,o,a){return ys(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,xs(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new yt(i,r,dn(this,o),1),this},t.call=function(i,r,o){return Ln(this,yt.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new yt(i,o,dn(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,u){return o.runBackwards=1,xs(o).immediateRender=Yt(o.immediateRender),this.staggerTo(i,r,o,a,l,c,u)},t.staggerFromTo=function(i,r,o,a,l,c,u,h){return a.startAt=o,xs(a).immediateRender=Yt(a.immediateRender),this.staggerTo(i,r,a,l,c,u,h)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:bt(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,_,m,g,p,y,x,v,w,T,E;if(this!==at&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,v=this._start,x=this._ts,p=!x,h&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,r,o);if(d=bt(u%g),u===l?(m=this._repeat,d=c):(m=~~(u/g),m&&m===u/g&&(d=c,m--),d>c&&(d=c)),w=jr(this._tTime,g),!a&&this._tTime&&w!==m&&this._tTime-w*g-this._dur<=0&&(w=m),T&&m&1&&(d=c-d,E=1),m!==w&&!this._lock){var C=T&&w&1,S=C===(T&&m&1);if(m<w&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(E?0:bt(m*g)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&on(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Yd(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=By(this,bt(a),bt(d)),y&&(u-=d-(d=y._start))),this._tTime=u,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!r&&!m&&(on(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,o),d!==this._time||!this._ts&&!p){y=0,_&&(u+=this._zTime=-tt);break}}f=_}else{f=this._last;for(var b=i<0?i:d;f;){if(_=f._prev,(f._act||b<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(b-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(b-f._start)*f._ts,r,o||Ft&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!p){y=0,_&&(u+=this._zTime=b?-tt:tt);break}}f=_}}if(y&&!r&&(this.pause(),y.render(d>=a?0:-tt)._zTime=d>=a?1:-1,this._ts))return this._start=v,Yo(this),this.render(i,r,o);this._onUpdate&&!r&&on(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&bi(this,1),!r&&!(i<0&&!a)&&(u||a||!l)&&(on(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(ti(r)||(r=dn(this,r,i)),!(i instanceof Cs)){if(Bt(i))return i.forEach(function(a){return o.add(a,r)}),this;if(wt(i))return this.addLabel(i,r);if(ft(i))i=yt.delayedCall(0,i);else return this}return this!==i?Ln(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-mn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof yt?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return wt(i)?this.removeLabel(i):ft(i)?this.killTweensOf(i):(Xo(this,i),i===this._recent&&(this._recent=this._last),Wi(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=bt(sn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=dn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=yt.delayedCall(0,r||As,o);return a.data="isPause",this._hasPause=1,Ln(this,a,dn(this,i))},t.removePause=function(i){var r=this._first;for(i=dn(this,i);r;)r._start===i&&r.data==="isPause"&&bi(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)xi!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=gn(i),l=this._first,c=ti(r),u;l;)l instanceof yt?Ly(l._targets,a)&&(c?(!xi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(a,r)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=dn(o,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,_=yt.to(o,_n({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||tt,onStart:function(){if(o.pause(),!f){var g=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==g&&Wr(_,g,0,1).render(_._time,!0,!0),f=1}u&&u.apply(_,h||[])}},r));return d?_.render(0):_},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,_n({startAt:{time:dn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),yh(this,dn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),yh(this,dn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+tt)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return Wi(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Wi(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=mn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ln(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Wr(o,o===at&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(at._ts&&(wd(at,Bo(i,at)),bd=sn.frame),sn.frame>=mh){mh+=an.autoSleep||120;var r=at._first;if((!r||!r._ts)&&an.autoSleep&&sn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||sn.sleep()}}},e}(Cs);_n(Gt.prototype,{_lock:0,_hasPause:0,_forcing:0});var ev=function(e,t,n,i,r,o,a){var l=new qt(this._pt,e,t,0,1,tf,null,r),c=0,u=0,h,d,f,_,m,g,p,y;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=ws(i)),o&&(y=[n,i],o(y,e,t),n=y[0],i=y[1]),d=n.match(Na)||[];h=Na.exec(i);)_=h[0],m=i.substring(c,h.index),f?f=(f+1)%5:m.substr(-5)==="rgba("&&(f=1),_!==d[u++]&&(g=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:m||u===1?m:",",s:g,c:_.charAt(1)==="="?Pr(g,_)-g:parseFloat(_)-g,m:f&&f<4?Math.round:0},c=Na.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(vd.test(i)||p)&&(l.e=0),this._pt=l,l},bc=function(e,t,n,i,r,o,a,l,c,u){ft(i)&&(i=i(r||0,e,o));var h=e[t],d=n!=="get"?n:ft(h)?c?e[t.indexOf("set")||!ft(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=ft(h)?c?sv:Qd:wc,_;if(wt(i)&&(~i.indexOf("random(")&&(i=ws(i)),i.charAt(1)==="="&&(_=Pr(d,i)+(Ut(d)||0),(_||_===0)&&(i=_))),!u||d!==i||Fl)return!isNaN(d*i)&&i!==""?(_=new qt(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?av:ef,0,f),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&Mc(t,i),ev.call(this,e,t,d,i,f,l||an.stringFilter,c))},tv=function(e,t,n,i,r){if(ft(e)&&(e=vs(e,r,t,n,i)),!Un(e)||e.style&&e.nodeType||Bt(e)||xd(e))return wt(e)?vs(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=vs(e[a],r,t,n,i);return o},Zd=function(e,t,n,i,r,o){var a,l,c,u;if(nn[e]&&(a=new nn[e]).init(r,a.rawVars?t[e]:tv(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new qt(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==Er))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},xi,Fl,Ac=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=e._dur,m=e._startAt,g=e._targets,p=e.parent,y=p&&p.data==="nested"?p.vars.targets:g,x=e._overwrite==="auto"&&!_c,v=e.timeline,w,T,E,C,S,b,L,B,U,K,q,H,W;if(v&&(!d||!r)&&(r="none"),e._ease=Xi(r,Gr.ease),e._yEase=h?Xd(Xi(h===!0?r:h,Gr.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!v&&!!i.runBackwards,!v||d&&!i.stagger){if(B=g[0]?ji(g[0]).harness:0,H=B&&i[B.prop],w=Fo(i,Sc),m&&(m._zTime<0&&m.progress(1),t<0&&u&&a&&!f?m.render(-1,!0):m.revert(u&&_?To:Cy),m._lazy=0),o){if(bi(e._startAt=yt.set(g,_n({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!m&&Yt(l),startAt:null,delay:0,onUpdate:c&&function(){return on(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ft||!a&&!f)&&e._startAt.revert(To),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!m){if(t&&(a=!1),E=_n({overwrite:!1,data:"isFromStart",lazy:a&&!m&&Yt(l),immediateRender:a,stagger:0,parent:p},w),H&&(E[B.prop]=H),bi(e._startAt=yt.set(g,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ft?e._startAt.revert(To):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,tt,tt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Yt(l)||l&&!_,T=0;T<g.length;T++){if(S=g[T],L=S._gsap||Ec(g)[T]._gsap,e._ptLookup[T]=K={},Ll[L.id]&&Ti.length&&Oo(),q=y===g?T:y.indexOf(S),B&&(U=new B).init(S,H||w,e,q,y)!==!1&&(e._pt=C=new qt(e._pt,S,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(G){K[G]=C}),U.priority&&(b=1)),!B||H)for(E in w)nn[E]&&(U=Zd(E,w,e,q,S,y))?U.priority&&(b=1):K[E]=C=bc.call(e,S,E,"get",w[E],q,y,0,i.stringFilter);e._op&&e._op[T]&&e.kill(S,e._op[T]),x&&e._pt&&(xi=e,at.killTweensOf(S,K,e.globalTime(t)),W=!e.parent,xi=0),e._pt&&l&&(Ll[L.id]=1)}b&&nf(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!W,d&&t<=0&&v.render(mn,!0,!0)},nv=function(e,t,n,i,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Fl=1,e.vars[t]="+=0",Ac(e,a),Fl=0,l?bs(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=mt(n)+Ut(h.e)),h.b&&(h.b=u.s+Ut(h.b))},iv=function(e,t){var n=e[0]?ji(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=Zi({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},rv=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(Bt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},vs=function(e,t,n,i,r){return ft(e)?e.call(t,n,i,r):wt(e)&&~e.indexOf("random(")?ws(e):e},$d=Tc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Jd={};Kt($d+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Jd[s]=1});var yt=function(s){gd(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:xs(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,m=l.defaults,g=l.scrollTrigger,p=l.yoyoEase,y=i.parent||at,x=(Bt(n)||xd(n)?ti(n[0]):"length"in i)?[n]:gn(n),v,w,T,E,C,S,b,L;if(a._targets=x.length?Ec(x):bs("GSAP target "+n+" not found. https://gsap.com",!an.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||d||mo(c)||mo(u)){if(i=a.vars,v=a.timeline=new Gt({data:"nested",defaults:m||{},targets:y&&y.data==="nested"?y.vars.targets:x}),v.kill(),v.parent=v._dp=Kn(a),v._start=0,d||mo(c)||mo(u)){if(E=x.length,b=d&&Od(d),Un(d))for(C in d)~$d.indexOf(C)&&(L||(L={}),L[C]=d[C]);for(w=0;w<E;w++)T=Fo(i,Jd),T.stagger=0,p&&(T.yoyoEase=p),L&&Zi(T,L),S=x[w],T.duration=+vs(c,Kn(a),w,S,x),T.delay=(+vs(u,Kn(a),w,S,x)||0)-a._delay,!d&&E===1&&T.delay&&(a._delay=u=T.delay,a._start+=u,T.delay=0),v.to(S,T,b?b(w,S,x):0),v._ease=Ge.none;v.duration()?c=u=0:a.timeline=0}else if(_){xs(_n(v.vars.defaults,{ease:"none"})),v._ease=Xi(_.ease||i.ease||"none");var B=0,U,K,q;if(Bt(_))_.forEach(function(H){return v.to(x,H,">")}),v.duration();else{T={};for(C in _)C==="ease"||C==="easeEach"||rv(C,_[C],T,_.easeEach);for(C in T)for(U=T[C].sort(function(H,W){return H.t-W.t}),B=0,w=0;w<U.length;w++)K=U[w],q={ease:K.e,duration:(K.t-(w?U[w-1].t:0))/100*c},q[C]=K.v,v.to(x,q,B),B+=q.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return f===!0&&!_c&&(xi=Kn(a),at.killTweensOf(x),xi=0),Ln(y,Kn(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!_&&a._start===bt(y._time)&&Yt(h)&&Uy(Kn(a))&&y.data!=="nested")&&(a._tTime=-tt,a.render(Math.max(0,-u)||0)),g&&Id(Kn(a),g),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-tt&&!u?l:i<tt?0:i,d,f,_,m,g,p,y,x,v;if(!c)Fy(this,i,r,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,x=this.timeline,this._repeat){if(m=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(m*100+i,r,o);if(d=bt(h%m),h===l?(_=this._repeat,d=c):(_=~~(h/m),_&&_===bt(h/m)&&(d=c,_--),d>c&&(d=c)),p=this._yoyo&&_&1,p&&(v=this._yEase,d=c-d),g=jr(this._tTime,m),d===a&&!o&&this._initted&&_===g)return this._tTime=h,this;_!==g&&(x&&this._yEase&&Yd(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==m&&this._initted&&(this._lock=o=1,this.render(bt(m*_),!0).invalidate()._lock=0))}if(!this._initted){if(Dd(this,u?i:d,o,r,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==g))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(v||this._ease)(d/c),this._from&&(this.ratio=y=1-y),d&&!a&&!r&&!_&&(on(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;x&&x.render(i<0?i:x._dur*x._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Il(this,i,r,o),on(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!r&&this.parent&&on(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Il(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&bi(this,1),!r&&!(u&&!a)&&(h||a||p)&&(on(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,l){Rs||sn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ac(this,c),u=this._ease(c/this._dur),nv(this,i,r,o,a,u,c,l)?this.resetTo(i,r,o,a,1):(Ko(this,0),this.parent||Pd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?fs(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,xi&&xi.vars.overwrite!==!0)._first||fs(this),this.parent&&o!==this.timeline.totalDuration()&&Wr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?gn(i):a,c=this._ptLookup,u=this._pt,h,d,f,_,m,g,p;if((!r||r==="all")&&Dy(a,l))return r==="all"&&(this._pt=0),fs(this);for(h=this._op=this._op||[],r!=="all"&&(wt(r)&&(m={},Kt(r,function(y){return m[y]=1}),r=m),r=iv(a,r)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],r==="all"?(h[p]=r,_=d,f={}):(f=h[p]=h[p]||{},_=r);for(m in _)g=d&&d[m],g&&((!("kill"in g.d)||g.d.kill(m)===!0)&&Xo(this,g,"_pt"),delete d[m]),f!=="all"&&(f[m]=1)}return this._initted&&!this._pt&&u&&fs(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return ys(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return ys(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return at.killTweensOf(i,r,o)},e}(Cs);_n(yt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Kt("staggerTo,staggerFrom,staggerFromTo",function(s){yt[s]=function(){var e=new Gt,t=Nl.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var wc=function(e,t,n){return e[t]=n},Qd=function(e,t,n){return e[t](n)},sv=function(e,t,n,i){return e[t](i.fp,n)},ov=function(e,t,n){return e.setAttribute(t,n)},Rc=function(e,t){return ft(e[t])?Qd:xc(e[t])&&e.setAttribute?ov:wc},ef=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},av=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},tf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Cc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},lv=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},cv=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Xo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},uv=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},nf=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},qt=function(){function s(t,n,i,r,o,a,l,c,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||ef,this.d=l||this,this.set=c||wc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=uv,this.m=n,this.mt=r,this.tween=i},s}();Kt(Tc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Sc[s]=1});ln.TweenMax=ln.TweenLite=yt;ln.TimelineLite=ln.TimelineMax=Gt;at=new Gt({sortChildren:!1,defaults:Gr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});an.stringFilter=Wd;var Yi=[],bo={},hv=[],Mh=0,dv=0,ka=function(e){return(bo[e]||hv).map(function(t){return t()})},Bl=function(){var e=Date.now(),t=[];e-Mh>2&&(ka("matchMediaInit"),Yi.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=wn.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),ka("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Mh=e,ka("matchMedia"))},rf=function(){function s(t,n){this.selector=n&&Ul(n),this.data=[],this._r=[],this.isReverted=!1,this.id=dv++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){ft(n)&&(r=i,i=n,n=ft);var o=this,a=function(){var c=st,u=o.selector,h;return c&&c!==o&&c.data.push(o),r&&(o.selector=Ul(r)),st=o,h=i.apply(o,arguments),ft(h)&&o._r.push(h),st=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===ft?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=st;st=null,n(this),st=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof yt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Gt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof yt)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Yi.length;o--;)Yi[o].id===this.id&&Yi.splice(o,1)},e.revert=function(n){this.kill(n||{})},s}(),fv=function(){function s(t){this.contexts=[],this.scope=t,st&&st.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){Un(n)||(n={matches:n});var o=new rf(0,r||this.scope),a=o.conditions={},l,c,u;st&&!o.selector&&(o.selector=st.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=wn.matchMedia(n[c]),l&&(Yi.indexOf(o)<0&&Yi.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Bl):l.addEventListener("change",Bl)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),ko={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Vd(i)})},timeline:function(e){return new Gt(e)},getTweensOf:function(e,t){return at.getTweensOf(e,t)},getProperty:function(e,t,n,i){wt(e)&&(e=gn(e)[0]);var r=ji(e||{}).get,o=n?Cd:Rd;return n==="native"&&(n=""),e&&(t?o((nn[t]&&nn[t].get||r)(e,t,n,i)):function(a,l,c){return o((nn[a]&&nn[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=gn(e),e.length>1){var i=e.map(function(u){return $t.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var o=nn[t],a=ji(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Er._pt=0,h.init(e,n?u+n:u,Er,0,[e]),h.render(1,h),Er._pt&&Cc(1,Er)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,r=$t.to(e,Zi((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return r.resetTo(t,l,c,u)};return o.tween=r,o},isTweening:function(e){return at.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Xi(e.ease,Gr.ease)),gh(Gr,e||{})},config:function(e){return gh(an,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!nn[a]&&!ln[a]&&bs(t+" effect requires "+a+" plugin.")}),Ua[t]=function(a,l,c){return n(gn(a),_n(l||{},r),c)},o&&(Gt.prototype[t]=function(a,l,c){return this.add(Ua[t](a,Un(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ge[e]=Xi(t)},parseEase:function(e,t){return arguments.length?Xi(e,t):Ge},getById:function(e){return at.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Gt(e),i,r;for(n.smoothChildTiming=Yt(e.smoothChildTiming),at.remove(n),n._dp=0,n._time=n._tTime=at._time,i=at._first;i;)r=i._next,(t||!(!i._dur&&i instanceof yt&&i.vars.onComplete===i._targets[0]))&&Ln(n,i,i._start-i._delay),i=r;return Ln(at,n,0),n},context:function(e,t){return e?new rf(e,t):st},matchMedia:function(e){return new fv(e)},matchMediaRefresh:function(){return Yi.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Bl()},addEventListener:function(e,t){var n=bo[e]||(bo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=bo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Wy,wrapYoyo:Xy,distribute:Od,random:Bd,snap:Fd,normalize:jy,getUnit:Ut,clamp:zy,splitColor:Gd,toArray:gn,selector:Ul,mapRange:zd,pipe:Vy,unitize:Gy,interpolate:Yy,shuffle:Ud},install:Td,effects:Ua,ticker:sn,updateRoot:Gt.updateRoot,plugins:nn,globalTimeline:at,core:{PropTween:qt,globals:Ed,Tween:yt,Timeline:Gt,Animation:Cs,getCache:ji,_removeLinkedListItem:Xo,reverting:function(){return Ft},context:function(e){return e&&st&&(st.data.push(e),e._ctx=st),st},suppressOverwrites:function(e){return _c=e}}};Kt("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return ko[s]=yt[s]});sn.add(Gt.updateRoot);Er=ko.to({},{duration:0});var pv=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},mv=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=pv(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},za=function(e,t){return{name:e,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(wt(r)&&(l={},Kt(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}mv(a,r)}}}},$t=ko.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Ft?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},za("roundProps",Ol),za("modifiers"),za("snap",Fd))||ko;yt.version=Gt.version=$t.version="3.12.5";Sd=1;yc()&&Xr();Ge.Power0;Ge.Power1;Ge.Power2;Ge.Power3;Ge.Power4;Ge.Linear;Ge.Quad;Ge.Cubic;Ge.Quart;Ge.Quint;Ge.Strong;Ge.Elastic;Ge.Back;Ge.SteppedEase;Ge.Bounce;Ge.Sine;Ge.Expo;Ge.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Sh,yi,Lr,Pc,Gi,Th,Lc,gv=function(){return typeof window<"u"},ni={},ki=180/Math.PI,Ir=Math.PI/180,Mr=Math.atan2,Eh=1e8,Ic=/([A-Z])/g,_v=/(left|right|width|margin|padding|x)/i,xv=/[\s,\(]\S/,In={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},kl=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},yv=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},vv=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Mv=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},sf=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},of=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Sv=function(e,t,n){return e.style[t]=n},Tv=function(e,t,n){return e.style.setProperty(t,n)},Ev=function(e,t,n){return e._gsap[t]=n},bv=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Av=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},wv=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},lt="transform",Zt=lt+"Origin",Rv=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in ni&&r){if(this.tfm=this.tfm||{},e!=="transform")e=In[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=qn(i,a)}):this.tfm[e]=o.x?o[e]:qn(i,e),e===Zt&&(this.tfm.zOrigin=o.zOrigin);else return In.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(lt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Zt,t,"")),e=lt}(r||t)&&this.props.push(e,t,r[e])},af=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Cv=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Ic,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Lc(),(!r||!r.isStart)&&!n[lt]&&(af(n),i.zOrigin&&n[Zt]&&(n[Zt]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},lf=function(e,t){var n={target:e,props:[],revert:Cv,save:Rv};return e._gsap||$t.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},cf,zl=function(e,t){var n=yi.createElementNS?yi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):yi.createElement(e);return n&&n.style?n:yi.createElement(e)},Dn=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Ic,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Yr(t)||t,1)||""},bh="O,Moz,ms,Ms,Webkit".split(","),Yr=function(e,t,n){var i=t||Gi,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(bh[o]+e in r););return o<0?null:(o===3?"ms":o>=0?bh[o]:"")+e},Hl=function(){gv()&&window.document&&(Sh=window,yi=Sh.document,Lr=yi.documentElement,Gi=zl("div")||{style:{}},zl("div"),lt=Yr(lt),Zt=lt+"Origin",Gi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",cf=!!Yr("perspective"),Lc=$t.core.reverting,Pc=1)},Ha=function s(e){var t=zl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(Lr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Lr.removeChild(t),this.style.cssText=r,o},Ah=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},uf=function(e){var t;try{t=e.getBBox()}catch{t=Ha.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Ha||(t=Ha.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Ah(e,["x","cx","x1"])||0,y:+Ah(e,["y","cy","y1"])||0,width:0,height:0}:t},hf=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&uf(e))},$i=function(e,t){if(t){var n=e.style,i;t in ni&&t!==Zt&&(t=lt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Ic,"-$1").toLowerCase())):n.removeAttribute(t)}},vi=function(e,t,n,i,r,o){var a=new qt(e._pt,t,n,0,1,o?of:sf);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},wh={deg:1,rad:1,turn:1},Pv={grid:1,flex:1},Ai=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Gi.style,l=_v.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",_,m,g,p;if(i===o||!r||wh[i]||wh[o])return r;if(o!=="px"&&!d&&(r=s(e,t,n,"px")),p=e.getCTM&&hf(e),(f||o==="%")&&(ni[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],mt(f?r/_*h:r/100*_);if(a[l?"width":"height"]=h+(d?o:i),m=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===yi||!m.appendChild)&&(m=yi.body),g=m._gsap,g&&f&&g.width&&l&&g.time===sn.time&&!g.uncache)return mt(r/g.width*h);if(f&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=h+i,_=e[u],y?e.style[t]=y:$i(e,t)}else(f||o==="%")&&!Pv[Dn(m,"display")]&&(a.position=Dn(e,"position")),m===e&&(a.position="static"),m.appendChild(Gi),_=Gi[u],m.removeChild(Gi),a.position="absolute";return l&&f&&(g=ji(m),g.time=sn.time,g.width=m[u]),mt(d?_*r/h:_&&r?h/_*r:0)},qn=function(e,t,n,i){var r;return Pc||Hl(),t in In&&t!=="transform"&&(t=In[t],~t.indexOf(",")&&(t=t.split(",")[0])),ni[t]&&t!=="transform"?(r=Ls(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Ho(Dn(e,Zt))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=zo[t]&&zo[t](e,t,n)||Dn(e,t)||Ad(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ai(e,t,r,n)+n:r},Lv=function(e,t,n,i){if(!n||n==="none"){var r=Yr(t,e,1),o=r&&Dn(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=Dn(e,"borderTopColor"))}var a=new qt(this._pt,e.style,t,0,1,tf),l=0,c=0,u,h,d,f,_,m,g,p,y,x,v,w;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(m=e.style[t],e.style[t]=i,i=Dn(e,t)||i,m?e.style[t]=m:$i(e,t)),u=[n,i],Wd(u),n=u[0],i=u[1],d=n.match(Tr)||[],w=i.match(Tr)||[],w.length){for(;h=Tr.exec(i);)g=h[0],y=i.substring(l,h.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),g!==(m=d[c++]||"")&&(f=parseFloat(m)||0,v=m.substr((f+"").length),g.charAt(1)==="="&&(g=Pr(f,g)+v),p=parseFloat(g),x=g.substr((p+"").length),l=Tr.lastIndex-x.length,x||(x=x||an.units[t]||v,l===i.length&&(i+=x,a.e+=x)),v!==x&&(f=Ai(e,t,m,x)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:f,c:p-f,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?of:sf;return vd.test(i)&&(a.e=0),this._pt=a,a},Rh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Iv=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Rh[n]||n,t[1]=Rh[i]||i,t.join(" ")},Dv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],ni[a]&&(l=1,a=a==="transformOrigin"?Zt:lt),$i(n,a);l&&($i(n,lt),o&&(o.svg&&n.removeAttribute("transform"),Ls(n,1),o.uncache=1,af(i)))}},zo={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new qt(e._pt,t,n,0,0,Dv);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},Ps=[1,0,0,1,0,0],df={},ff=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ch=function(e){var t=Dn(e,lt);return ff(t)?Ps:t.substr(7).match(yd).map(mt)},Dc=function(e,t){var n=e._gsap||ji(e),i=e.style,r=Ch(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ps:r):(r===Ps&&!e.offsetParent&&e!==Lr&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,Lr.appendChild(e)),r=Ch(e),l?i.display=l:$i(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Lr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Vl=function(e,t,n,i,r,o){var a=e._gsap,l=r||Dc(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=l[0],_=l[1],m=l[2],g=l[3],p=l[4],y=l[5],x=t.split(" "),v=parseFloat(x[0])||0,w=parseFloat(x[1])||0,T,E,C,S;n?l!==Ps&&(E=f*g-_*m)&&(C=v*(g/E)+w*(-m/E)+(m*y-g*p)/E,S=v*(-_/E)+w*(f/E)-(f*y-_*p)/E,v=C,w=S):(T=uf(e),v=T.x+(~x[0].indexOf("%")?v/100*T.width:v),w=T.y+(~(x[1]||x[0]).indexOf("%")?w/100*T.height:w)),i||i!==!1&&a.smooth?(p=v-c,y=w-u,a.xOffset=h+(p*f+y*m)-p,a.yOffset=d+(p*_+y*g)-y):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=w,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Zt]="0px 0px",o&&(vi(o,a,"xOrigin",c,v),vi(o,a,"yOrigin",u,w),vi(o,a,"xOffset",h,a.xOffset),vi(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+w)},Ls=function(e,t){var n=e._gsap||new qd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Dn(e,Zt)||"0",u,h,d,f,_,m,g,p,y,x,v,w,T,E,C,S,b,L,B,U,K,q,H,W,G,ne,re,ae,Me,Be,X,$;return u=h=d=m=g=p=y=x=v=0,f=_=1,n.svg=!!(e.getCTM&&hf(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[lt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[lt]!=="none"?l[lt]:"")),i.scale=i.rotate=i.translate="none"),E=Dc(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),Vl(e,W||c,!!W||n.originIsAbsolute,n.smooth!==!1,E)),w=n.xOrigin||0,T=n.yOrigin||0,E!==Ps&&(L=E[0],B=E[1],U=E[2],K=E[3],u=q=E[4],h=H=E[5],E.length===6?(f=Math.sqrt(L*L+B*B),_=Math.sqrt(K*K+U*U),m=L||B?Mr(B,L)*ki:0,y=U||K?Mr(U,K)*ki+m:0,y&&(_*=Math.abs(Math.cos(y*Ir))),n.svg&&(u-=w-(w*L+T*U),h-=T-(w*B+T*K))):($=E[6],Be=E[7],re=E[8],ae=E[9],Me=E[10],X=E[11],u=E[12],h=E[13],d=E[14],C=Mr($,Me),g=C*ki,C&&(S=Math.cos(-C),b=Math.sin(-C),W=q*S+re*b,G=H*S+ae*b,ne=$*S+Me*b,re=q*-b+re*S,ae=H*-b+ae*S,Me=$*-b+Me*S,X=Be*-b+X*S,q=W,H=G,$=ne),C=Mr(-U,Me),p=C*ki,C&&(S=Math.cos(-C),b=Math.sin(-C),W=L*S-re*b,G=B*S-ae*b,ne=U*S-Me*b,X=K*b+X*S,L=W,B=G,U=ne),C=Mr(B,L),m=C*ki,C&&(S=Math.cos(C),b=Math.sin(C),W=L*S+B*b,G=q*S+H*b,B=B*S-L*b,H=H*S-q*b,L=W,q=G),g&&Math.abs(g)+Math.abs(m)>359.9&&(g=m=0,p=180-p),f=mt(Math.sqrt(L*L+B*B+U*U)),_=mt(Math.sqrt(H*H+$*$)),C=Mr(q,H),y=Math.abs(C)>2e-4?C*ki:0,v=X?1/(X<0?-X:X):0),n.svg&&(W=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!ff(Dn(e,lt)),W&&e.setAttribute("transform",W))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(f*=-1,y+=m<=0?180:-180,m+=m<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=mt(f),n.scaleY=mt(_),n.rotation=mt(m)+a,n.rotationX=mt(g)+a,n.rotationY=mt(p)+a,n.skewX=y+a,n.skewY=x+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Zt]=Ho(c)),n.xOffset=n.yOffset=0,n.force3D=an.force3D,n.renderTransform=n.svg?Uv:cf?pf:Nv,n.uncache=0,n},Ho=function(e){return(e=e.split(" "))[0]+" "+e[1]},Va=function(e,t,n){var i=Ut(t);return mt(parseFloat(t)+parseFloat(Ai(e,"x",n+"px",i)))+i},Nv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,pf(e,t)},Oi="0deg",us="0px",Fi=") ",pf=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,m=n.scaleY,g=n.transformPerspective,p=n.force3D,y=n.target,x=n.zOrigin,v="",w=p==="auto"&&e&&e!==1||p===!0;if(x&&(h!==Oi||u!==Oi)){var T=parseFloat(u)*Ir,E=Math.sin(T),C=Math.cos(T),S;T=parseFloat(h)*Ir,S=Math.cos(T),o=Va(y,o,E*S*-x),a=Va(y,a,-Math.sin(T)*-x),l=Va(y,l,C*S*-x+x)}g!==us&&(v+="perspective("+g+Fi),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(w||o!==us||a!==us||l!==us)&&(v+=l!==us||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Fi),c!==Oi&&(v+="rotate("+c+Fi),u!==Oi&&(v+="rotateY("+u+Fi),h!==Oi&&(v+="rotateX("+h+Fi),(d!==Oi||f!==Oi)&&(v+="skew("+d+", "+f+Fi),(_!==1||m!==1)&&(v+="scale("+_+", "+m+Fi),y.style[lt]=v||"translate(0, 0)"},Uv=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,m=n.yOrigin,g=n.xOffset,p=n.yOffset,y=n.forceCSS,x=parseFloat(o),v=parseFloat(a),w,T,E,C,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ir,c*=Ir,w=Math.cos(l)*h,T=Math.sin(l)*h,E=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(u*=Ir,S=Math.tan(c-u),S=Math.sqrt(1+S*S),E*=S,C*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),w*=S,T*=S)),w=mt(w),T=mt(T),E=mt(E),C=mt(C)):(w=h,C=d,T=E=0),(x&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(x=Ai(f,"x",o,"px"),v=Ai(f,"y",a,"px")),(_||m||g||p)&&(x=mt(x+_-(_*w+m*E)+g),v=mt(v+m-(_*T+m*C)+p)),(i||r)&&(S=f.getBBox(),x=mt(x+i/100*S.width),v=mt(v+r/100*S.height)),S="matrix("+w+","+T+","+E+","+C+","+x+","+v+")",f.setAttribute("transform",S),y&&(f.style[lt]=S)},Ov=function(e,t,n,i,r){var o=360,a=wt(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?ki:1),c=l-i,u=i+c+"deg",h,d;return a&&(h=r.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Eh)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Eh)%o-~~(c/o)*o)),e._pt=d=new qt(e._pt,t,n,i,c,yv),d.e=u,d.u="deg",e._props.push(n),d},Ph=function(e,t){for(var n in t)e[n]=t[n];return e},Fv=function(e,t,n){var i=Ph({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,d,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[lt]=t,a=Ls(n,1),$i(n,lt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[lt],o[lt]=t,a=Ls(n,1),o[lt]=c);for(l in ni)c=i[l],u=a[l],c!==u&&r.indexOf(l)<0&&(f=Ut(c),_=Ut(u),h=f!==_?Ai(n,l,c,_):parseFloat(c),d=parseFloat(u),e._pt=new qt(e._pt,a,l,h,d-h,kl),e._pt.u=_||0,e._props.push(l));Ph(a,i)};Kt("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});zo[e>1?"border"+s:s]=function(a,l,c,u,h){var d,f;if(arguments.length<4)return d=o.map(function(_){return qn(a,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},o.forEach(function(_,m){return f[_]=d[m]=d[m]||d[(m-1)/2|0]}),a.init(l,f,h)}});var mf={name:"css",register:Hl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,d,f,_,m,g,p,y,x,v,w,T,E,C;Pc||Hl(),this.styles=this.styles||lf(e),C=this.styles.props,this.tween=n;for(m in t)if(m!=="autoRound"&&(u=t[m],!(nn[m]&&Zd(m,t,n,i,e,r)))){if(f=typeof u,_=zo[m],f==="function"&&(u=u.call(n,i,e,r),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=ws(u)),_)_(this,e,m,u,n)&&(E=1);else if(m.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(m)+"").trim(),u+="",Ei.lastIndex=0,Ei.test(c)||(g=Ut(c),p=Ut(u)),p?g!==p&&(c=Ai(e,m,c,p)+p):g&&(u+=g),this.add(a,"setProperty",c,u,i,r,0,0,m),o.push(m),C.push(m,0,a[m]);else if(f!=="undefined"){if(l&&m in l?(c=typeof l[m]=="function"?l[m].call(n,i,e,r):l[m],wt(c)&&~c.indexOf("random(")&&(c=ws(c)),Ut(c+"")||c==="auto"||(c+=an.units[m]||Ut(qn(e,m))||""),(c+"").charAt(1)==="="&&(c=qn(e,m))):c=qn(e,m),d=parseFloat(c),y=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),m in In&&(m==="autoAlpha"&&(d===1&&qn(e,"visibility")==="hidden"&&h&&(d=0),C.push("visibility",0,a.visibility),vi(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),m!=="scale"&&m!=="transform"&&(m=In[m],~m.indexOf(",")&&(m=m.split(",")[0]))),x=m in ni,x){if(this.styles.save(m),v||(w=e._gsap,w.renderTransform&&!t.parseTransform||Ls(e,t.parseTransform),T=t.smoothOrigin!==!1&&w.smooth,v=this._pt=new qt(this._pt,a,lt,0,1,w.renderTransform,w,0,-1),v.dep=1),m==="scale")this._pt=new qt(this._pt,w,"scaleY",w.scaleY,(y?Pr(w.scaleY,y+h):h)-w.scaleY||0,kl),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){C.push(Zt,0,a[Zt]),u=Iv(u),w.svg?Vl(e,u,0,T,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==w.zOrigin&&vi(this,w,"zOrigin",w.zOrigin,p),vi(this,a,m,Ho(c),Ho(u)));continue}else if(m==="svgOrigin"){Vl(e,u,1,T,0,this);continue}else if(m in df){Ov(this,w,m,d,y?Pr(d,y+u):u);continue}else if(m==="smoothOrigin"){vi(this,w,"smooth",w.smooth,u);continue}else if(m==="force3D"){w[m]=u;continue}else if(m==="transform"){Fv(this,u,e);continue}}else m in a||(m=Yr(m)||m);if(x||(h||h===0)&&(d||d===0)&&!xv.test(u)&&m in a)g=(c+"").substr((d+"").length),h||(h=0),p=Ut(u)||(m in an.units?an.units[m]:g),g!==p&&(d=Ai(e,m,c,p)),this._pt=new qt(this._pt,x?w:a,m,d,(y?Pr(d,y+h):h)-d,!x&&(p==="px"||m==="zIndex")&&t.autoRound!==!1?Mv:kl),this._pt.u=p||0,g!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=vv);else if(m in a)Lv.call(this,e,m,c,y?y+u:u);else if(m in e)this.add(e,m,c||e[m],y?y+u:u,i,r);else if(m!=="parseTransform"){Mc(m,u);continue}x||(m in a?C.push(m,0,a[m]):C.push(m,1,c||e[m])),o.push(m)}}E&&nf(this)},render:function(e,t){if(t.tween._time||!Lc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:qn,aliases:In,getSetter:function(e,t,n){var i=In[t];return i&&i.indexOf(",")<0&&(t=i),t in ni&&t!==Zt&&(e._gsap.x||qn(e,"x"))?n&&Th===n?t==="scale"?bv:Ev:(Th=n||{})&&(t==="scale"?Av:wv):e.style&&!xc(e.style[t])?Sv:~t.indexOf("-")?Tv:Rc(e,t)},core:{_removeProperty:$i,_getMatrix:Dc}};$t.utils.checkPrefix=Yr;$t.core.getStyleSaver=lf;(function(s,e,t,n){var i=Kt(s+","+e+","+t,function(r){ni[r]=1});Kt(e,function(r){an.units[r]="deg",df[r]=1}),In[i[13]]=s+","+e,Kt(n,function(r){var o=r.split(":");In[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Kt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){an.units[s]="px"});$t.registerPlugin(mf);var Gl=$t.registerPlugin(mf)||$t;Gl.core.Tween;const Bv=s=>{const e=document.querySelector("#front"),t=document.querySelector("#back"),n=document.querySelector("#left"),i=document.querySelector("#right"),r=document.querySelector("#body"),o=document.querySelector("#head");e.addEventListener("click",()=>{a(-.6314954594490563,.6306999065581489,9.286856107569474,1)}),t.addEventListener("click",()=>{a(-.5490899696241803,1.2921433022964555,-7.945298722141956,1)}),n.addEventListener("click",()=>{a(-6.910456907684895,-.3007518968785895,-.09388359602681749,1)}),i.addEventListener("click",()=>{a(9.899425237887076,-.20431908945524174,1.3998691614463707,1)}),r.addEventListener("click",()=>{a(.31616102219759334,-4.585210236552844,3.335984298295238,1)}),o.addEventListener("click",()=>{a(.30968940109422394,6.669334261965599,2.0398495711876268,1)});function a(l,c,u,h){Gl.to(s.position,{x:l,y:c,z:u,duration:2,ease:"power2.inOut",onUpdate:()=>{s.updateProjectionMatrix()}}),Gl.to(s,{zoom:h,duration:2,ease:"power2.inOut",onUpdate:()=>{s.updateProjectionMatrix()}})}};class kv{constructor(){Ve(this,"scene",new Y_);Ve(this,"camera",Dx());Ve(this,"renderer",Fx());Ve(this,"helpers",Ox(this.camera,this.renderer));Ve(this,"guitar",new Sy(this.scene,this.camera));Ve(this,"uiControler",new Ty(this.guitar));Ve(this,"isLoading",!1);Ve(this,"lightPositions",[[0,0,8],[0,0,-8],[-9.947420066907123,-1.019879765564146,-.09316263352782056],[9.981306658855566,-.4765927811330809,.3825920841538427],[-.1268484876457273,-5.6404379973057175,.7229959592571308]]);Ve(this,"geometry",new hc(30,30,30));Ve(this,"material",new ei({fragmentShader:`
      #ifdef GL_ES
      precision mediump float;
      #endif
  
      uniform float iTime;
      uniform vec2 iResolution;
      uniform vec3 uColor;
  
      const mat2 m = mat2( 0.80,  0.60, -0.60,  0.80 );
  
      float noise( in vec2 p )
      {
          return sin(p.x)*sin(p.y);
      }
  
      float fbm4( vec2 p )
      {
          float f = 0.0;
          f += 0.5000 * noise( p ); p = m * p * 2.02;
          f += 0.2500 * noise( p ); p = m * p * 2.02;
          f += 0.1250 * noise( p ); p = m * p * 2.02;
          f += 0.0625 * noise( p );
          return f / 0.9375;
      }
  
      float fbm6( vec2 p )
      {
          float f = 0.0;
          f += 0.500000 * ( 0.4 + 0.3 * noise( p ) ); p = m * p * 2.02;
          f += 0.500000 * ( 0.4 + 0.3 * noise( p ) ); p = m * p * 2.02;
          f += 0.500000 * ( 0.4 + 0.3 * noise( p ) ); p = m * p * 2.02;
          f += 0.250000 * ( 0.4 + 0.3 * noise( p ) ); p = m * p * 2.02;
          return f / 0.96875;
      }
  
      vec2 fbm4_2( vec2 p )
      {
          return vec2(fbm4(p), fbm4(p + vec2(7.8)));
      }
  
      vec2 fbm6_2( vec2 p )
      {
          return vec2(fbm6(p + vec2(16.8)), fbm6(p + vec2(11.5)));
      }
  
      float func( vec2 q )
      {
          q += 0.03 * sin( vec2(0.2, 0.1) * iTime + length(q) * vec2(4.1, 4.3));
  
          vec2 o = fbm4_2( 0.6 * q );
          o += 0.04 * sin( vec2(0.12, 0.14) * iTime + length(o));
  
          vec2 n = fbm6_2( 3.0 * o );
  
          float f = 0.5 + 0.5 * fbm4( 1.8 * q + 6.0 * n );
          return mix( f, f * f * f * 3.5, f * abs(n.x) );
      }
  
      void main() 
      {
          vec2 uv = gl_FragCoord.xy / iResolution.xy;
          vec2 p = (2.0 * uv - 1.0) * (iResolution.x / iResolution.y);
  
          float f = func(p);
  
          f = clamp(f, 0.0, 1.0);
  
          gl_FragColor = vec4(f * uColor, 1.0);

      }
      `,uniforms:{iTime:{value:0},uColor:{value:this.guitar.color},iResolution:{value:new ve(window.innerWidth,window.innerHeight)},side:Wt,depthWrite:!1}}));this.initLight(),this.initAppResize(),this.initCameraControls(),this.initBackground(),this.animate=this.animate.bind(this),this.animate()}initLight(){this.lightPositions.forEach(([e,t,n])=>{const i=new Bx().initDirectionalLight(e,t,n);this.scene.add(i)})}initCameraControls(){Bv(this.camera)}render(){this.renderer.setClearColor(2829099,1),this.renderer.render(this.scene,this.camera)}initAppResize(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.render()},!1)}initBackground(){this.geometry.scale(-1,1,1);const e=new Ot(this.geometry,this.material);e.raycast=()=>{},this.scene.add(e)}animate(){requestAnimationFrame(this.animate),this.material.uniforms.iTime.value+=.05,this.helpers.controls.update(),this.render()}}document.addEventListener("DOMContentLoaded",()=>{zv()});function zv(){new kv}var Hv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Vv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var gf={exports:{}};(function(s,e){(function(n,i){s.exports=i()})(typeof self<"u"?self:Hv,function(){return function(t){var n={};function i(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=n,i.d=function(r,o,a){i.o(r,o)||Object.defineProperty(r,o,{configurable:!1,enumerable:!0,get:a})},i.r=function(r){Object.defineProperty(r,"__esModule",{value:!0})},i.n=function(r){var o=r&&r.__esModule?function(){return r.default}:function(){return r};return i.d(o,"a",o),o},i.o=function(r,o){return Object.prototype.hasOwnProperty.call(r,o)},i.p="",i(i.s=0)}({"./dist/icons.json":function(t){t.exports={activity:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',airplay:'<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',"alert-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',"alert-octagon":'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',"alert-triangle":'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',"align-center":'<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',"align-justify":'<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',"align-left":'<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',"align-right":'<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',anchor:'<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',aperture:'<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',archive:'<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',"arrow-down-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',"arrow-down-left":'<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',"arrow-down-right":'<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',"arrow-down":'<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',"arrow-left-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',"arrow-left":'<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',"arrow-right-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',"arrow-right":'<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',"arrow-up-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',"arrow-up-left":'<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',"arrow-up-right":'<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',"arrow-up":'<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',"at-sign":'<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',award:'<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',"bar-chart-2":'<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',"bar-chart":'<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',"battery-charging":'<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',battery:'<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',"bell-off":'<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',bell:'<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',bluetooth:'<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',bold:'<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',"book-open":'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',bookmark:'<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',box:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',briefcase:'<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',"camera-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',camera:'<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',cast:'<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',"check-circle":'<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',"check-square":'<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',check:'<polyline points="20 6 9 17 4 12"></polyline>',"chevron-down":'<polyline points="6 9 12 15 18 9"></polyline>',"chevron-left":'<polyline points="15 18 9 12 15 6"></polyline>',"chevron-right":'<polyline points="9 18 15 12 9 6"></polyline>',"chevron-up":'<polyline points="18 15 12 9 6 15"></polyline>',"chevrons-down":'<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',"chevrons-left":'<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',"chevrons-right":'<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',"chevrons-up":'<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',chrome:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',circle:'<circle cx="12" cy="12" r="10"></circle>',clipboard:'<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',clock:'<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',"cloud-drizzle":'<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',"cloud-lightning":'<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',"cloud-off":'<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',"cloud-rain":'<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',"cloud-snow":'<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',cloud:'<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',code:'<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',codepen:'<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',codesandbox:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',coffee:'<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',columns:'<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',command:'<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',compass:'<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',copy:'<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',"corner-down-left":'<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',"corner-down-right":'<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',"corner-left-down":'<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',"corner-left-up":'<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',"corner-right-down":'<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',"corner-right-up":'<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',"corner-up-left":'<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',"corner-up-right":'<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',"credit-card":'<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',crop:'<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',crosshair:'<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',database:'<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',delete:'<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',disc:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',"divide-circle":'<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>',"divide-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>',divide:'<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>',"dollar-sign":'<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',"download-cloud":'<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',dribbble:'<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>',droplet:'<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',"edit-2":'<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',"edit-3":'<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',"external-link":'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',"eye-off":'<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',facebook:'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',"fast-forward":'<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',feather:'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',figma:'<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',"file-minus":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',"file-plus":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',"file-text":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',file:'<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',film:'<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',filter:'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',flag:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',"folder-minus":'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',"folder-plus":'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',folder:'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',framer:'<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',frown:'<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',gift:'<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',"git-branch":'<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',"git-commit":'<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',"git-merge":'<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',"git-pull-request":'<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',gitlab:'<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',globe:'<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',grid:'<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',"hard-drive":'<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',hash:'<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',headphones:'<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',heart:'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',"help-circle":'<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',hexagon:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',home:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',image:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',inbox:'<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',info:'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',instagram:'<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',italic:'<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',key:'<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',layers:'<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',layout:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',"life-buoy":'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',"link-2":'<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',linkedin:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',list:'<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',loader:'<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',lock:'<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',"log-in":'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',mail:'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',"map-pin":'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',map:'<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',"maximize-2":'<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',maximize:'<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',meh:'<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',menu:'<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',"message-circle":'<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',"message-square":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',"mic-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',mic:'<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',"minimize-2":'<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',minimize:'<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',"minus-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',"minus-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',minus:'<line x1="5" y1="12" x2="19" y2="12"></line>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',moon:'<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',"more-horizontal":'<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',"more-vertical":'<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',"mouse-pointer":'<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',move:'<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',music:'<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',"navigation-2":'<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',navigation:'<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',octagon:'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',package:'<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',paperclip:'<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',"pause-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',pause:'<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',"pen-tool":'<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',percent:'<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',"phone-call":'<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-forwarded":'<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-incoming":'<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-missed":'<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-off":'<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',"phone-outgoing":'<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"pie-chart":'<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',"play-circle":'<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',play:'<polygon points="5 3 19 12 5 21 5 3"></polygon>',"plus-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',"plus-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',plus:'<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',pocket:'<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',power:'<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',printer:'<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',radio:'<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',"refresh-ccw":'<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',"refresh-cw":'<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',repeat:'<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',rewind:'<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',"rotate-ccw":'<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',"rotate-cw":'<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',rss:'<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',scissors:'<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',search:'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',send:'<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',server:'<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',settings:'<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',"share-2":'<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',share:'<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',"shield-off":'<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',"shopping-bag":'<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',"shopping-cart":'<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',shuffle:'<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',sidebar:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',"skip-back":'<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',"skip-forward":'<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',slack:'<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',slash:'<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',sliders:'<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',smartphone:'<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',smile:'<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',speaker:'<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',star:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',"stop-circle":'<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',sun:'<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',sunrise:'<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',sunset:'<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',table:'<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>',tablet:'<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',tag:'<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',target:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',terminal:'<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',thermometer:'<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',"thumbs-down":'<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',"thumbs-up":'<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',"toggle-left":'<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',"toggle-right":'<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',tool:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',"trash-2":'<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',trash:'<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',trello:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',"trending-down":'<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',"trending-up":'<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',triangle:'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',truck:'<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',tv:'<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',twitch:'<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>',twitter:'<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',type:'<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',umbrella:'<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',underline:'<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',unlock:'<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',"upload-cloud":'<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',"user-check":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',"user-minus":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',"user-plus":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',"user-x":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',"video-off":'<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',video:'<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',voicemail:'<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',"volume-1":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',"volume-2":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',"volume-x":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',volume:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',watch:'<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',"wifi-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',wifi:'<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',wind:'<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',"x-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',"x-octagon":'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',"x-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',x:'<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',youtube:'<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',"zap-off":'<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',zap:'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',"zoom-in":'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',"zoom-out":'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>'}},"./node_modules/classnames/dedupe.js":function(t,n,i){var r,o;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){var a=function(){function l(){}l.prototype=Object.create(null);function c(p,y){for(var x=y.length,v=0;v<x;++v)m(p,y[v])}var u={}.hasOwnProperty;function h(p,y){p[y]=!0}function d(p,y){for(var x in y)u.call(y,x)&&(p[x]=!!y[x])}var f=/\s+/;function _(p,y){for(var x=y.split(f),v=x.length,w=0;w<v;++w)p[x[w]]=!0}function m(p,y){if(y){var x=typeof y;x==="string"?_(p,y):Array.isArray(y)?c(p,y):x==="object"?d(p,y):x==="number"&&h(p,y)}}function g(){for(var p=arguments.length,y=Array(p),x=0;x<p;x++)y[x]=arguments[x];var v=new l;c(v,y);var w=[];for(var T in v)v[T]&&w.push(T);return w.join(" ")}return g}();typeof t<"u"&&t.exports?t.exports=a:(r=[],o=(function(){return a}).apply(n,r),o!==void 0&&(t.exports=o))})()},"./node_modules/core-js/es/array/from.js":function(t,n,i){i("./node_modules/core-js/modules/es.string.iterator.js"),i("./node_modules/core-js/modules/es.array.from.js");var r=i("./node_modules/core-js/internals/path.js");t.exports=r.Array.from},"./node_modules/core-js/internals/a-function.js":function(t,n){t.exports=function(i){if(typeof i!="function")throw TypeError(String(i)+" is not a function");return i}},"./node_modules/core-js/internals/an-object.js":function(t,n,i){var r=i("./node_modules/core-js/internals/is-object.js");t.exports=function(o){if(!r(o))throw TypeError(String(o)+" is not an object");return o}},"./node_modules/core-js/internals/array-from.js":function(t,n,i){var r=i("./node_modules/core-js/internals/bind-context.js"),o=i("./node_modules/core-js/internals/to-object.js"),a=i("./node_modules/core-js/internals/call-with-safe-iteration-closing.js"),l=i("./node_modules/core-js/internals/is-array-iterator-method.js"),c=i("./node_modules/core-js/internals/to-length.js"),u=i("./node_modules/core-js/internals/create-property.js"),h=i("./node_modules/core-js/internals/get-iterator-method.js");t.exports=function(f){var _=o(f),m=typeof this=="function"?this:Array,g=arguments.length,p=g>1?arguments[1]:void 0,y=p!==void 0,x=0,v=h(_),w,T,E,C;if(y&&(p=r(p,g>2?arguments[2]:void 0,2)),v!=null&&!(m==Array&&l(v)))for(C=v.call(_),T=new m;!(E=C.next()).done;x++)u(T,x,y?a(C,p,[E.value,x],!0):E.value);else for(w=c(_.length),T=new m(w);w>x;x++)u(T,x,y?p(_[x],x):_[x]);return T.length=x,T}},"./node_modules/core-js/internals/array-includes.js":function(t,n,i){var r=i("./node_modules/core-js/internals/to-indexed-object.js"),o=i("./node_modules/core-js/internals/to-length.js"),a=i("./node_modules/core-js/internals/to-absolute-index.js");t.exports=function(l){return function(c,u,h){var d=r(c),f=o(d.length),_=a(h,f),m;if(l&&u!=u){for(;f>_;)if(m=d[_++],m!=m)return!0}else for(;f>_;_++)if((l||_ in d)&&d[_]===u)return l||_||0;return!l&&-1}}},"./node_modules/core-js/internals/bind-context.js":function(t,n,i){var r=i("./node_modules/core-js/internals/a-function.js");t.exports=function(o,a,l){if(r(o),a===void 0)return o;switch(l){case 0:return function(){return o.call(a)};case 1:return function(c){return o.call(a,c)};case 2:return function(c,u){return o.call(a,c,u)};case 3:return function(c,u,h){return o.call(a,c,u,h)}}return function(){return o.apply(a,arguments)}}},"./node_modules/core-js/internals/call-with-safe-iteration-closing.js":function(t,n,i){var r=i("./node_modules/core-js/internals/an-object.js");t.exports=function(o,a,l,c){try{return c?a(r(l)[0],l[1]):a(l)}catch(h){var u=o.return;throw u!==void 0&&r(u.call(o)),h}}},"./node_modules/core-js/internals/check-correctness-of-iteration.js":function(t,n,i){var r=i("./node_modules/core-js/internals/well-known-symbol.js"),o=r("iterator"),a=!1;try{var l=0,c={next:function(){return{done:!!l++}},return:function(){a=!0}};c[o]=function(){return this},Array.from(c,function(){throw 2})}catch{}t.exports=function(u,h){if(!h&&!a)return!1;var d=!1;try{var f={};f[o]=function(){return{next:function(){return{done:d=!0}}}},u(f)}catch{}return d}},"./node_modules/core-js/internals/classof-raw.js":function(t,n){var i={}.toString;t.exports=function(r){return i.call(r).slice(8,-1)}},"./node_modules/core-js/internals/classof.js":function(t,n,i){var r=i("./node_modules/core-js/internals/classof-raw.js"),o=i("./node_modules/core-js/internals/well-known-symbol.js"),a=o("toStringTag"),l=r(function(){return arguments}())=="Arguments",c=function(u,h){try{return u[h]}catch{}};t.exports=function(u){var h,d,f;return u===void 0?"Undefined":u===null?"Null":typeof(d=c(h=Object(u),a))=="string"?d:l?r(h):(f=r(h))=="Object"&&typeof h.callee=="function"?"Arguments":f}},"./node_modules/core-js/internals/copy-constructor-properties.js":function(t,n,i){var r=i("./node_modules/core-js/internals/has.js"),o=i("./node_modules/core-js/internals/own-keys.js"),a=i("./node_modules/core-js/internals/object-get-own-property-descriptor.js"),l=i("./node_modules/core-js/internals/object-define-property.js");t.exports=function(c,u){for(var h=o(u),d=l.f,f=a.f,_=0;_<h.length;_++){var m=h[_];r(c,m)||d(c,m,f(u,m))}}},"./node_modules/core-js/internals/correct-prototype-getter.js":function(t,n,i){var r=i("./node_modules/core-js/internals/fails.js");t.exports=!r(function(){function o(){}return o.prototype.constructor=null,Object.getPrototypeOf(new o)!==o.prototype})},"./node_modules/core-js/internals/create-iterator-constructor.js":function(t,n,i){var r=i("./node_modules/core-js/internals/iterators-core.js").IteratorPrototype,o=i("./node_modules/core-js/internals/object-create.js"),a=i("./node_modules/core-js/internals/create-property-descriptor.js"),l=i("./node_modules/core-js/internals/set-to-string-tag.js"),c=i("./node_modules/core-js/internals/iterators.js"),u=function(){return this};t.exports=function(h,d,f){var _=d+" Iterator";return h.prototype=o(r,{next:a(1,f)}),l(h,_,!1,!0),c[_]=u,h}},"./node_modules/core-js/internals/create-property-descriptor.js":function(t,n){t.exports=function(i,r){return{enumerable:!(i&1),configurable:!(i&2),writable:!(i&4),value:r}}},"./node_modules/core-js/internals/create-property.js":function(t,n,i){var r=i("./node_modules/core-js/internals/to-primitive.js"),o=i("./node_modules/core-js/internals/object-define-property.js"),a=i("./node_modules/core-js/internals/create-property-descriptor.js");t.exports=function(l,c,u){var h=r(c);h in l?o.f(l,h,a(0,u)):l[h]=u}},"./node_modules/core-js/internals/define-iterator.js":function(t,n,i){var r=i("./node_modules/core-js/internals/export.js"),o=i("./node_modules/core-js/internals/create-iterator-constructor.js"),a=i("./node_modules/core-js/internals/object-get-prototype-of.js"),l=i("./node_modules/core-js/internals/object-set-prototype-of.js"),c=i("./node_modules/core-js/internals/set-to-string-tag.js"),u=i("./node_modules/core-js/internals/hide.js"),h=i("./node_modules/core-js/internals/redefine.js"),d=i("./node_modules/core-js/internals/well-known-symbol.js"),f=i("./node_modules/core-js/internals/is-pure.js"),_=i("./node_modules/core-js/internals/iterators.js"),m=i("./node_modules/core-js/internals/iterators-core.js"),g=m.IteratorPrototype,p=m.BUGGY_SAFARI_ITERATORS,y=d("iterator"),x="keys",v="values",w="entries",T=function(){return this};t.exports=function(E,C,S,b,L,B,U){o(S,C,b);var K=function(X){if(X===L&&ne)return ne;if(!p&&X in W)return W[X];switch(X){case x:return function(){return new S(this,X)};case v:return function(){return new S(this,X)};case w:return function(){return new S(this,X)}}return function(){return new S(this)}},q=C+" Iterator",H=!1,W=E.prototype,G=W[y]||W["@@iterator"]||L&&W[L],ne=!p&&G||K(L),re=C=="Array"&&W.entries||G,ae,Me,Be;if(re&&(ae=a(re.call(new E)),g!==Object.prototype&&ae.next&&(!f&&a(ae)!==g&&(l?l(ae,g):typeof ae[y]!="function"&&u(ae,y,T)),c(ae,q,!0,!0),f&&(_[q]=T))),L==v&&G&&G.name!==v&&(H=!0,ne=function(){return G.call(this)}),(!f||U)&&W[y]!==ne&&u(W,y,ne),_[C]=ne,L)if(Me={values:K(v),keys:B?ne:K(x),entries:K(w)},U)for(Be in Me)(p||H||!(Be in W))&&h(W,Be,Me[Be]);else r({target:C,proto:!0,forced:p||H},Me);return Me}},"./node_modules/core-js/internals/descriptors.js":function(t,n,i){var r=i("./node_modules/core-js/internals/fails.js");t.exports=!r(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7})},"./node_modules/core-js/internals/document-create-element.js":function(t,n,i){var r=i("./node_modules/core-js/internals/global.js"),o=i("./node_modules/core-js/internals/is-object.js"),a=r.document,l=o(a)&&o(a.createElement);t.exports=function(c){return l?a.createElement(c):{}}},"./node_modules/core-js/internals/enum-bug-keys.js":function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"./node_modules/core-js/internals/export.js":function(t,n,i){var r=i("./node_modules/core-js/internals/global.js"),o=i("./node_modules/core-js/internals/object-get-own-property-descriptor.js").f,a=i("./node_modules/core-js/internals/hide.js"),l=i("./node_modules/core-js/internals/redefine.js"),c=i("./node_modules/core-js/internals/set-global.js"),u=i("./node_modules/core-js/internals/copy-constructor-properties.js"),h=i("./node_modules/core-js/internals/is-forced.js");t.exports=function(d,f){var _=d.target,m=d.global,g=d.stat,p,y,x,v,w,T;if(m?y=r:g?y=r[_]||c(_,{}):y=(r[_]||{}).prototype,y)for(x in f){if(w=f[x],d.noTargetGet?(T=o(y,x),v=T&&T.value):v=y[x],p=h(m?x:_+(g?".":"#")+x,d.forced),!p&&v!==void 0){if(typeof w==typeof v)continue;u(w,v)}(d.sham||v&&v.sham)&&a(w,"sham",!0),l(y,x,w,d)}}},"./node_modules/core-js/internals/fails.js":function(t,n){t.exports=function(i){try{return!!i()}catch{return!0}}},"./node_modules/core-js/internals/function-to-string.js":function(t,n,i){var r=i("./node_modules/core-js/internals/shared.js");t.exports=r("native-function-to-string",Function.toString)},"./node_modules/core-js/internals/get-iterator-method.js":function(t,n,i){var r=i("./node_modules/core-js/internals/classof.js"),o=i("./node_modules/core-js/internals/iterators.js"),a=i("./node_modules/core-js/internals/well-known-symbol.js"),l=a("iterator");t.exports=function(c){if(c!=null)return c[l]||c["@@iterator"]||o[r(c)]}},"./node_modules/core-js/internals/global.js":function(t,n,i){(function(r){var o="object",a=function(l){return l&&l.Math==Math&&l};t.exports=a(typeof globalThis==o&&globalThis)||a(typeof window==o&&window)||a(typeof self==o&&self)||a(typeof r==o&&r)||Function("return this")()}).call(this,i("./node_modules/webpack/buildin/global.js"))},"./node_modules/core-js/internals/has.js":function(t,n){var i={}.hasOwnProperty;t.exports=function(r,o){return i.call(r,o)}},"./node_modules/core-js/internals/hidden-keys.js":function(t,n){t.exports={}},"./node_modules/core-js/internals/hide.js":function(t,n,i){var r=i("./node_modules/core-js/internals/descriptors.js"),o=i("./node_modules/core-js/internals/object-define-property.js"),a=i("./node_modules/core-js/internals/create-property-descriptor.js");t.exports=r?function(l,c,u){return o.f(l,c,a(1,u))}:function(l,c,u){return l[c]=u,l}},"./node_modules/core-js/internals/html.js":function(t,n,i){var r=i("./node_modules/core-js/internals/global.js"),o=r.document;t.exports=o&&o.documentElement},"./node_modules/core-js/internals/ie8-dom-define.js":function(t,n,i){var r=i("./node_modules/core-js/internals/descriptors.js"),o=i("./node_modules/core-js/internals/fails.js"),a=i("./node_modules/core-js/internals/document-create-element.js");t.exports=!r&&!o(function(){return Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a!=7})},"./node_modules/core-js/internals/indexed-object.js":function(t,n,i){var r=i("./node_modules/core-js/internals/fails.js"),o=i("./node_modules/core-js/internals/classof-raw.js"),a="".split;t.exports=r(function(){return!Object("z").propertyIsEnumerable(0)})?function(l){return o(l)=="String"?a.call(l,""):Object(l)}:Object},"./node_modules/core-js/internals/internal-state.js":function(t,n,i){var r=i("./node_modules/core-js/internals/native-weak-map.js"),o=i("./node_modules/core-js/internals/global.js"),a=i("./node_modules/core-js/internals/is-object.js"),l=i("./node_modules/core-js/internals/hide.js"),c=i("./node_modules/core-js/internals/has.js"),u=i("./node_modules/core-js/internals/shared-key.js"),h=i("./node_modules/core-js/internals/hidden-keys.js"),d=o.WeakMap,f,_,m,g=function(E){return m(E)?_(E):f(E,{})},p=function(E){return function(C){var S;if(!a(C)||(S=_(C)).type!==E)throw TypeError("Incompatible receiver, "+E+" required");return S}};if(r){var y=new d,x=y.get,v=y.has,w=y.set;f=function(E,C){return w.call(y,E,C),C},_=function(E){return x.call(y,E)||{}},m=function(E){return v.call(y,E)}}else{var T=u("state");h[T]=!0,f=function(E,C){return l(E,T,C),C},_=function(E){return c(E,T)?E[T]:{}},m=function(E){return c(E,T)}}t.exports={set:f,get:_,has:m,enforce:g,getterFor:p}},"./node_modules/core-js/internals/is-array-iterator-method.js":function(t,n,i){var r=i("./node_modules/core-js/internals/well-known-symbol.js"),o=i("./node_modules/core-js/internals/iterators.js"),a=r("iterator"),l=Array.prototype;t.exports=function(c){return c!==void 0&&(o.Array===c||l[a]===c)}},"./node_modules/core-js/internals/is-forced.js":function(t,n,i){var r=i("./node_modules/core-js/internals/fails.js"),o=/#|\.prototype\./,a=function(d,f){var _=c[l(d)];return _==h?!0:_==u?!1:typeof f=="function"?r(f):!!f},l=a.normalize=function(d){return String(d).replace(o,".").toLowerCase()},c=a.data={},u=a.NATIVE="N",h=a.POLYFILL="P";t.exports=a},"./node_modules/core-js/internals/is-object.js":function(t,n){t.exports=function(i){return typeof i=="object"?i!==null:typeof i=="function"}},"./node_modules/core-js/internals/is-pure.js":function(t,n){t.exports=!1},"./node_modules/core-js/internals/iterators-core.js":function(t,n,i){var r=i("./node_modules/core-js/internals/object-get-prototype-of.js"),o=i("./node_modules/core-js/internals/hide.js"),a=i("./node_modules/core-js/internals/has.js"),l=i("./node_modules/core-js/internals/well-known-symbol.js"),c=i("./node_modules/core-js/internals/is-pure.js"),u=l("iterator"),h=!1,d=function(){return this},f,_,m;[].keys&&(m=[].keys(),"next"in m?(_=r(r(m)),_!==Object.prototype&&(f=_)):h=!0),f==null&&(f={}),!c&&!a(f,u)&&o(f,u,d),t.exports={IteratorPrototype:f,BUGGY_SAFARI_ITERATORS:h}},"./node_modules/core-js/internals/iterators.js":function(t,n){t.exports={}},"./node_modules/core-js/internals/native-symbol.js":function(t,n,i){var r=i("./node_modules/core-js/internals/fails.js");t.exports=!!Object.getOwnPropertySymbols&&!r(function(){return!String(Symbol())})},"./node_modules/core-js/internals/native-weak-map.js":function(t,n,i){var r=i("./node_modules/core-js/internals/global.js"),o=i("./node_modules/core-js/internals/function-to-string.js"),a=r.WeakMap;t.exports=typeof a=="function"&&/native code/.test(o.call(a))},"./node_modules/core-js/internals/object-create.js":function(t,n,i){var r=i("./node_modules/core-js/internals/an-object.js"),o=i("./node_modules/core-js/internals/object-define-properties.js"),a=i("./node_modules/core-js/internals/enum-bug-keys.js"),l=i("./node_modules/core-js/internals/hidden-keys.js"),c=i("./node_modules/core-js/internals/html.js"),u=i("./node_modules/core-js/internals/document-create-element.js"),h=i("./node_modules/core-js/internals/shared-key.js"),d=h("IE_PROTO"),f="prototype",_=function(){},m=function(){var g=u("iframe"),p=a.length,y="<",x="script",v=">",w="java"+x+":",T;for(g.style.display="none",c.appendChild(g),g.src=String(w),T=g.contentWindow.document,T.open(),T.write(y+x+v+"document.F=Object"+y+"/"+x+v),T.close(),m=T.F;p--;)delete m[f][a[p]];return m()};t.exports=Object.create||function(p,y){var x;return p!==null?(_[f]=r(p),x=new _,_[f]=null,x[d]=p):x=m(),y===void 0?x:o(x,y)},l[d]=!0},"./node_modules/core-js/internals/object-define-properties.js":function(t,n,i){var r=i("./node_modules/core-js/internals/descriptors.js"),o=i("./node_modules/core-js/internals/object-define-property.js"),a=i("./node_modules/core-js/internals/an-object.js"),l=i("./node_modules/core-js/internals/object-keys.js");t.exports=r?Object.defineProperties:function(u,h){a(u);for(var d=l(h),f=d.length,_=0,m;f>_;)o.f(u,m=d[_++],h[m]);return u}},"./node_modules/core-js/internals/object-define-property.js":function(t,n,i){var r=i("./node_modules/core-js/internals/descriptors.js"),o=i("./node_modules/core-js/internals/ie8-dom-define.js"),a=i("./node_modules/core-js/internals/an-object.js"),l=i("./node_modules/core-js/internals/to-primitive.js"),c=Object.defineProperty;n.f=r?c:function(h,d,f){if(a(h),d=l(d,!0),a(f),o)try{return c(h,d,f)}catch{}if("get"in f||"set"in f)throw TypeError("Accessors not supported");return"value"in f&&(h[d]=f.value),h}},"./node_modules/core-js/internals/object-get-own-property-descriptor.js":function(t,n,i){var r=i("./node_modules/core-js/internals/descriptors.js"),o=i("./node_modules/core-js/internals/object-property-is-enumerable.js"),a=i("./node_modules/core-js/internals/create-property-descriptor.js"),l=i("./node_modules/core-js/internals/to-indexed-object.js"),c=i("./node_modules/core-js/internals/to-primitive.js"),u=i("./node_modules/core-js/internals/has.js"),h=i("./node_modules/core-js/internals/ie8-dom-define.js"),d=Object.getOwnPropertyDescriptor;n.f=r?d:function(_,m){if(_=l(_),m=c(m,!0),h)try{return d(_,m)}catch{}if(u(_,m))return a(!o.f.call(_,m),_[m])}},"./node_modules/core-js/internals/object-get-own-property-names.js":function(t,n,i){var r=i("./node_modules/core-js/internals/object-keys-internal.js"),o=i("./node_modules/core-js/internals/enum-bug-keys.js"),a=o.concat("length","prototype");n.f=Object.getOwnPropertyNames||function(c){return r(c,a)}},"./node_modules/core-js/internals/object-get-own-property-symbols.js":function(t,n){n.f=Object.getOwnPropertySymbols},"./node_modules/core-js/internals/object-get-prototype-of.js":function(t,n,i){var r=i("./node_modules/core-js/internals/has.js"),o=i("./node_modules/core-js/internals/to-object.js"),a=i("./node_modules/core-js/internals/shared-key.js"),l=i("./node_modules/core-js/internals/correct-prototype-getter.js"),c=a("IE_PROTO"),u=Object.prototype;t.exports=l?Object.getPrototypeOf:function(h){return h=o(h),r(h,c)?h[c]:typeof h.constructor=="function"&&h instanceof h.constructor?h.constructor.prototype:h instanceof Object?u:null}},"./node_modules/core-js/internals/object-keys-internal.js":function(t,n,i){var r=i("./node_modules/core-js/internals/has.js"),o=i("./node_modules/core-js/internals/to-indexed-object.js"),a=i("./node_modules/core-js/internals/array-includes.js"),l=i("./node_modules/core-js/internals/hidden-keys.js"),c=a(!1);t.exports=function(u,h){var d=o(u),f=0,_=[],m;for(m in d)!r(l,m)&&r(d,m)&&_.push(m);for(;h.length>f;)r(d,m=h[f++])&&(~c(_,m)||_.push(m));return _}},"./node_modules/core-js/internals/object-keys.js":function(t,n,i){var r=i("./node_modules/core-js/internals/object-keys-internal.js"),o=i("./node_modules/core-js/internals/enum-bug-keys.js");t.exports=Object.keys||function(l){return r(l,o)}},"./node_modules/core-js/internals/object-property-is-enumerable.js":function(t,n,i){var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,a=o&&!r.call({1:2},1);n.f=a?function(c){var u=o(this,c);return!!u&&u.enumerable}:r},"./node_modules/core-js/internals/object-set-prototype-of.js":function(t,n,i){var r=i("./node_modules/core-js/internals/validate-set-prototype-of-arguments.js");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var o=!1,a={},l;try{l=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,l.call(a,[]),o=a instanceof Array}catch{}return function(u,h){return r(u,h),o?l.call(u,h):u.__proto__=h,u}}():void 0)},"./node_modules/core-js/internals/own-keys.js":function(t,n,i){var r=i("./node_modules/core-js/internals/global.js"),o=i("./node_modules/core-js/internals/object-get-own-property-names.js"),a=i("./node_modules/core-js/internals/object-get-own-property-symbols.js"),l=i("./node_modules/core-js/internals/an-object.js"),c=r.Reflect;t.exports=c&&c.ownKeys||function(h){var d=o.f(l(h)),f=a.f;return f?d.concat(f(h)):d}},"./node_modules/core-js/internals/path.js":function(t,n,i){t.exports=i("./node_modules/core-js/internals/global.js")},"./node_modules/core-js/internals/redefine.js":function(t,n,i){var r=i("./node_modules/core-js/internals/global.js"),o=i("./node_modules/core-js/internals/shared.js"),a=i("./node_modules/core-js/internals/hide.js"),l=i("./node_modules/core-js/internals/has.js"),c=i("./node_modules/core-js/internals/set-global.js"),u=i("./node_modules/core-js/internals/function-to-string.js"),h=i("./node_modules/core-js/internals/internal-state.js"),d=h.get,f=h.enforce,_=String(u).split("toString");o("inspectSource",function(m){return u.call(m)}),(t.exports=function(m,g,p,y){var x=y?!!y.unsafe:!1,v=y?!!y.enumerable:!1,w=y?!!y.noTargetGet:!1;if(typeof p=="function"&&(typeof g=="string"&&!l(p,"name")&&a(p,"name",g),f(p).source=_.join(typeof g=="string"?g:"")),m===r){v?m[g]=p:c(g,p);return}else x?!w&&m[g]&&(v=!0):delete m[g];v?m[g]=p:a(m,g,p)})(Function.prototype,"toString",function(){return typeof this=="function"&&d(this).source||u.call(this)})},"./node_modules/core-js/internals/require-object-coercible.js":function(t,n){t.exports=function(i){if(i==null)throw TypeError("Can't call method on "+i);return i}},"./node_modules/core-js/internals/set-global.js":function(t,n,i){var r=i("./node_modules/core-js/internals/global.js"),o=i("./node_modules/core-js/internals/hide.js");t.exports=function(a,l){try{o(r,a,l)}catch{r[a]=l}return l}},"./node_modules/core-js/internals/set-to-string-tag.js":function(t,n,i){var r=i("./node_modules/core-js/internals/object-define-property.js").f,o=i("./node_modules/core-js/internals/has.js"),a=i("./node_modules/core-js/internals/well-known-symbol.js"),l=a("toStringTag");t.exports=function(c,u,h){c&&!o(c=h?c:c.prototype,l)&&r(c,l,{configurable:!0,value:u})}},"./node_modules/core-js/internals/shared-key.js":function(t,n,i){var r=i("./node_modules/core-js/internals/shared.js"),o=i("./node_modules/core-js/internals/uid.js"),a=r("keys");t.exports=function(l){return a[l]||(a[l]=o(l))}},"./node_modules/core-js/internals/shared.js":function(t,n,i){var r=i("./node_modules/core-js/internals/global.js"),o=i("./node_modules/core-js/internals/set-global.js"),a=i("./node_modules/core-js/internals/is-pure.js"),l="__core-js_shared__",c=r[l]||o(l,{});(t.exports=function(u,h){return c[u]||(c[u]=h!==void 0?h:{})})("versions",[]).push({version:"3.1.3",mode:a?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},"./node_modules/core-js/internals/string-at.js":function(t,n,i){var r=i("./node_modules/core-js/internals/to-integer.js"),o=i("./node_modules/core-js/internals/require-object-coercible.js");t.exports=function(a,l,c){var u=String(o(a)),h=r(l),d=u.length,f,_;return h<0||h>=d?c?"":void 0:(f=u.charCodeAt(h),f<55296||f>56319||h+1===d||(_=u.charCodeAt(h+1))<56320||_>57343?c?u.charAt(h):f:c?u.slice(h,h+2):(f-55296<<10)+(_-56320)+65536)}},"./node_modules/core-js/internals/to-absolute-index.js":function(t,n,i){var r=i("./node_modules/core-js/internals/to-integer.js"),o=Math.max,a=Math.min;t.exports=function(l,c){var u=r(l);return u<0?o(u+c,0):a(u,c)}},"./node_modules/core-js/internals/to-indexed-object.js":function(t,n,i){var r=i("./node_modules/core-js/internals/indexed-object.js"),o=i("./node_modules/core-js/internals/require-object-coercible.js");t.exports=function(a){return r(o(a))}},"./node_modules/core-js/internals/to-integer.js":function(t,n){var i=Math.ceil,r=Math.floor;t.exports=function(o){return isNaN(o=+o)?0:(o>0?r:i)(o)}},"./node_modules/core-js/internals/to-length.js":function(t,n,i){var r=i("./node_modules/core-js/internals/to-integer.js"),o=Math.min;t.exports=function(a){return a>0?o(r(a),9007199254740991):0}},"./node_modules/core-js/internals/to-object.js":function(t,n,i){var r=i("./node_modules/core-js/internals/require-object-coercible.js");t.exports=function(o){return Object(r(o))}},"./node_modules/core-js/internals/to-primitive.js":function(t,n,i){var r=i("./node_modules/core-js/internals/is-object.js");t.exports=function(o,a){if(!r(o))return o;var l,c;if(a&&typeof(l=o.toString)=="function"&&!r(c=l.call(o))||typeof(l=o.valueOf)=="function"&&!r(c=l.call(o))||!a&&typeof(l=o.toString)=="function"&&!r(c=l.call(o)))return c;throw TypeError("Can't convert object to primitive value")}},"./node_modules/core-js/internals/uid.js":function(t,n){var i=0,r=Math.random();t.exports=function(o){return"Symbol(".concat(o===void 0?"":o,")_",(++i+r).toString(36))}},"./node_modules/core-js/internals/validate-set-prototype-of-arguments.js":function(t,n,i){var r=i("./node_modules/core-js/internals/is-object.js"),o=i("./node_modules/core-js/internals/an-object.js");t.exports=function(a,l){if(o(a),!r(l)&&l!==null)throw TypeError("Can't set "+String(l)+" as a prototype")}},"./node_modules/core-js/internals/well-known-symbol.js":function(t,n,i){var r=i("./node_modules/core-js/internals/global.js"),o=i("./node_modules/core-js/internals/shared.js"),a=i("./node_modules/core-js/internals/uid.js"),l=i("./node_modules/core-js/internals/native-symbol.js"),c=r.Symbol,u=o("wks");t.exports=function(h){return u[h]||(u[h]=l&&c[h]||(l?c:a)("Symbol."+h))}},"./node_modules/core-js/modules/es.array.from.js":function(t,n,i){var r=i("./node_modules/core-js/internals/export.js"),o=i("./node_modules/core-js/internals/array-from.js"),a=i("./node_modules/core-js/internals/check-correctness-of-iteration.js"),l=!a(function(c){Array.from(c)});r({target:"Array",stat:!0,forced:l},{from:o})},"./node_modules/core-js/modules/es.string.iterator.js":function(t,n,i){var r=i("./node_modules/core-js/internals/string-at.js"),o=i("./node_modules/core-js/internals/internal-state.js"),a=i("./node_modules/core-js/internals/define-iterator.js"),l="String Iterator",c=o.set,u=o.getterFor(l);a(String,"String",function(h){c(this,{type:l,string:String(h),index:0})},function(){var d=u(this),f=d.string,_=d.index,m;return _>=f.length?{value:void 0,done:!0}:(m=r(f,_,!0),d.index+=m.length,{value:m,done:!1})})},"./node_modules/webpack/buildin/global.js":function(t,n){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch{typeof window=="object"&&(i=window)}t.exports=i},"./src/default-attrs.json":function(t){t.exports={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"}},"./src/icon.js":function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0});var r=Object.assign||function(m){for(var g=1;g<arguments.length;g++){var p=arguments[g];for(var y in p)Object.prototype.hasOwnProperty.call(p,y)&&(m[y]=p[y])}return m},o=function(){function m(g,p){for(var y=0;y<p.length;y++){var x=p[y];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(g,x.key,x)}}return function(g,p,y){return p&&m(g.prototype,p),y&&m(g,y),g}}(),a=i("./node_modules/classnames/dedupe.js"),l=h(a),c=i("./src/default-attrs.json"),u=h(c);function h(m){return m&&m.__esModule?m:{default:m}}function d(m,g){if(!(m instanceof g))throw new TypeError("Cannot call a class as a function")}var f=function(){function m(g,p){var y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];d(this,m),this.name=g,this.contents=p,this.tags=y,this.attrs=r({},u.default,{class:"feather feather-"+g})}return o(m,[{key:"toSvg",value:function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},y=r({},this.attrs,p,{class:(0,l.default)(this.attrs.class,p.class)});return"<svg "+_(y)+">"+this.contents+"</svg>"}},{key:"toString",value:function(){return this.contents}}]),m}();function _(m){return Object.keys(m).map(function(g){return g+'="'+m[g]+'"'}).join(" ")}n.default=f},"./src/icons.js":function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0});var r=i("./src/icon.js"),o=h(r),a=i("./dist/icons.json"),l=h(a),c=i("./src/tags.json"),u=h(c);function h(d){return d&&d.__esModule?d:{default:d}}n.default=Object.keys(l.default).map(function(d){return new o.default(d,l.default[d],u.default[d])}).reduce(function(d,f){return d[f.name]=f,d},{})},"./src/index.js":function(t,n,i){var r=i("./src/icons.js"),o=h(r),a=i("./src/to-svg.js"),l=h(a),c=i("./src/replace.js"),u=h(c);function h(d){return d&&d.__esModule?d:{default:d}}t.exports={icons:o.default,toSvg:l.default,replace:u.default}},"./src/replace.js":function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0});var r=Object.assign||function(_){for(var m=1;m<arguments.length;m++){var g=arguments[m];for(var p in g)Object.prototype.hasOwnProperty.call(g,p)&&(_[p]=g[p])}return _},o=i("./node_modules/classnames/dedupe.js"),a=u(o),l=i("./src/icons.js"),c=u(l);function u(_){return _&&_.__esModule?_:{default:_}}function h(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(typeof document>"u")throw new Error("`feather.replace()` only works in a browser environment.");var m=document.querySelectorAll("[data-feather]");Array.from(m).forEach(function(g){return d(g,_)})}function d(_){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},g=f(_),p=g["data-feather"];if(delete g["data-feather"],c.default[p]===void 0){console.warn("feather: '"+p+"' is not a valid icon");return}var y=c.default[p].toSvg(r({},m,g,{class:(0,a.default)(m.class,g.class)})),x=new DOMParser().parseFromString(y,"image/svg+xml"),v=x.querySelector("svg");_.parentNode.replaceChild(v,_)}function f(_){return Array.from(_.attributes).reduce(function(m,g){return m[g.name]=g.value,m},{})}n.default=h},"./src/tags.json":function(t){t.exports={activity:["pulse","health","action","motion"],airplay:["stream","cast","mirroring"],"alert-circle":["warning","alert","danger"],"alert-octagon":["warning","alert","danger"],"alert-triangle":["warning","alert","danger"],"align-center":["text alignment","center"],"align-justify":["text alignment","justified"],"align-left":["text alignment","left"],"align-right":["text alignment","right"],anchor:[],archive:["index","box"],"at-sign":["mention","at","email","message"],award:["achievement","badge"],aperture:["camera","photo"],"bar-chart":["statistics","diagram","graph"],"bar-chart-2":["statistics","diagram","graph"],battery:["power","electricity"],"battery-charging":["power","electricity"],bell:["alarm","notification","sound"],"bell-off":["alarm","notification","silent"],bluetooth:["wireless"],"book-open":["read","library"],book:["read","dictionary","booklet","magazine","library"],bookmark:["read","clip","marker","tag"],box:["cube"],briefcase:["work","bag","baggage","folder"],calendar:["date"],camera:["photo"],cast:["chromecast","airplay"],"chevron-down":["expand"],"chevron-up":["collapse"],circle:["off","zero","record"],clipboard:["copy"],clock:["time","watch","alarm"],"cloud-drizzle":["weather","shower"],"cloud-lightning":["weather","bolt"],"cloud-rain":["weather"],"cloud-snow":["weather","blizzard"],cloud:["weather"],codepen:["logo"],codesandbox:["logo"],code:["source","programming"],coffee:["drink","cup","mug","tea","cafe","hot","beverage"],columns:["layout"],command:["keyboard","cmd","terminal","prompt"],compass:["navigation","safari","travel","direction"],copy:["clone","duplicate"],"corner-down-left":["arrow","return"],"corner-down-right":["arrow"],"corner-left-down":["arrow"],"corner-left-up":["arrow"],"corner-right-down":["arrow"],"corner-right-up":["arrow"],"corner-up-left":["arrow"],"corner-up-right":["arrow"],cpu:["processor","technology"],"credit-card":["purchase","payment","cc"],crop:["photo","image"],crosshair:["aim","target"],database:["storage","memory"],delete:["remove"],disc:["album","cd","dvd","music"],"dollar-sign":["currency","money","payment"],droplet:["water"],edit:["pencil","change"],"edit-2":["pencil","change"],"edit-3":["pencil","change"],eye:["view","watch"],"eye-off":["view","watch","hide","hidden"],"external-link":["outbound"],facebook:["logo","social"],"fast-forward":["music"],figma:["logo","design","tool"],"file-minus":["delete","remove","erase"],"file-plus":["add","create","new"],"file-text":["data","txt","pdf"],film:["movie","video"],filter:["funnel","hopper"],flag:["report"],"folder-minus":["directory"],"folder-plus":["directory"],folder:["directory"],framer:["logo","design","tool"],frown:["emoji","face","bad","sad","emotion"],gift:["present","box","birthday","party"],"git-branch":["code","version control"],"git-commit":["code","version control"],"git-merge":["code","version control"],"git-pull-request":["code","version control"],github:["logo","version control"],gitlab:["logo","version control"],globe:["world","browser","language","translate"],"hard-drive":["computer","server","memory","data"],hash:["hashtag","number","pound"],headphones:["music","audio","sound"],heart:["like","love","emotion"],"help-circle":["question mark"],hexagon:["shape","node.js","logo"],home:["house","living"],image:["picture"],inbox:["email"],instagram:["logo","camera"],key:["password","login","authentication","secure"],layers:["stack"],layout:["window","webpage"],"life-buoy":["help","life ring","support"],link:["chain","url"],"link-2":["chain","url"],linkedin:["logo","social media"],list:["options"],lock:["security","password","secure"],"log-in":["sign in","arrow","enter"],"log-out":["sign out","arrow","exit"],mail:["email","message"],"map-pin":["location","navigation","travel","marker"],map:["location","navigation","travel"],maximize:["fullscreen"],"maximize-2":["fullscreen","arrows","expand"],meh:["emoji","face","neutral","emotion"],menu:["bars","navigation","hamburger"],"message-circle":["comment","chat"],"message-square":["comment","chat"],"mic-off":["record","sound","mute"],mic:["record","sound","listen"],minimize:["exit fullscreen","close"],"minimize-2":["exit fullscreen","arrows","close"],minus:["subtract"],monitor:["tv","screen","display"],moon:["dark","night"],"more-horizontal":["ellipsis"],"more-vertical":["ellipsis"],"mouse-pointer":["arrow","cursor"],move:["arrows"],music:["note"],navigation:["location","travel"],"navigation-2":["location","travel"],octagon:["stop"],package:["box","container"],paperclip:["attachment"],pause:["music","stop"],"pause-circle":["music","audio","stop"],"pen-tool":["vector","drawing"],percent:["discount"],"phone-call":["ring"],"phone-forwarded":["call"],"phone-incoming":["call"],"phone-missed":["call"],"phone-off":["call","mute"],"phone-outgoing":["call"],phone:["call"],play:["music","start"],"pie-chart":["statistics","diagram"],"play-circle":["music","start"],plus:["add","new"],"plus-circle":["add","new"],"plus-square":["add","new"],pocket:["logo","save"],power:["on","off"],printer:["fax","office","device"],radio:["signal"],"refresh-cw":["synchronise","arrows"],"refresh-ccw":["arrows"],repeat:["loop","arrows"],rewind:["music"],"rotate-ccw":["arrow"],"rotate-cw":["arrow"],rss:["feed","subscribe"],save:["floppy disk"],scissors:["cut"],search:["find","magnifier","magnifying glass"],send:["message","mail","email","paper airplane","paper aeroplane"],settings:["cog","edit","gear","preferences"],"share-2":["network","connections"],shield:["security","secure"],"shield-off":["security","insecure"],"shopping-bag":["ecommerce","cart","purchase","store"],"shopping-cart":["ecommerce","cart","purchase","store"],shuffle:["music"],"skip-back":["music"],"skip-forward":["music"],slack:["logo"],slash:["ban","no"],sliders:["settings","controls"],smartphone:["cellphone","device"],smile:["emoji","face","happy","good","emotion"],speaker:["audio","music"],star:["bookmark","favorite","like"],"stop-circle":["media","music"],sun:["brightness","weather","light"],sunrise:["weather","time","morning","day"],sunset:["weather","time","evening","night"],tablet:["device"],tag:["label"],target:["logo","bullseye"],terminal:["code","command line","prompt"],thermometer:["temperature","celsius","fahrenheit","weather"],"thumbs-down":["dislike","bad","emotion"],"thumbs-up":["like","good","emotion"],"toggle-left":["on","off","switch"],"toggle-right":["on","off","switch"],tool:["settings","spanner"],trash:["garbage","delete","remove","bin"],"trash-2":["garbage","delete","remove","bin"],triangle:["delta"],truck:["delivery","van","shipping","transport","lorry"],tv:["television","stream"],twitch:["logo"],twitter:["logo","social"],type:["text"],umbrella:["rain","weather"],unlock:["security"],"user-check":["followed","subscribed"],"user-minus":["delete","remove","unfollow","unsubscribe"],"user-plus":["new","add","create","follow","subscribe"],"user-x":["delete","remove","unfollow","unsubscribe","unavailable"],user:["person","account"],users:["group"],"video-off":["camera","movie","film"],video:["camera","movie","film"],voicemail:["phone"],volume:["music","sound","mute"],"volume-1":["music","sound"],"volume-2":["music","sound"],"volume-x":["music","sound","mute"],watch:["clock","time"],"wifi-off":["disabled"],wifi:["connection","signal","wireless"],wind:["weather","air"],"x-circle":["cancel","close","delete","remove","times","clear"],"x-octagon":["delete","stop","alert","warning","times","clear"],"x-square":["cancel","close","delete","remove","times","clear"],x:["cancel","close","delete","remove","times","clear"],youtube:["logo","video","play"],"zap-off":["flash","camera","lightning"],zap:["flash","camera","lightning"],"zoom-in":["magnifying glass"],"zoom-out":["magnifying glass"]}},"./src/to-svg.js":function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0});var r=i("./src/icons.js"),o=a(r);function a(c){return c&&c.__esModule?c:{default:c}}function l(c){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."),!c)throw new Error("The required `key` (icon name) parameter is missing.");if(!o.default[c])throw new Error("No icon matching '"+c+"'. See the complete list of icons at https://feathericons.com");return o.default[c].toSvg(u)}n.default=l},0:function(t,n,i){i("./node_modules/core-js/es/array/from.js"),t.exports=i("./src/index.js")}})})})(gf);var Gv=gf.exports;const jv=Vv(Gv);jv.replace();
