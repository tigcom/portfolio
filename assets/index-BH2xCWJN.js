(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function sp(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ot={},ma=[],wr=()=>{},Y_=()=>!1,Yu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),op=n=>n.startsWith("onUpdate:"),xn=Object.assign,ap=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},PS=Object.prototype.hasOwnProperty,Ct=(n,e)=>PS.call(n,e),tt=Array.isArray,ga=n=>lc(n)==="[object Map]",Ku=n=>lc(n)==="[object Set]",hm=n=>lc(n)==="[object Date]",ot=n=>typeof n=="function",tn=n=>typeof n=="string",Dr=n=>typeof n=="symbol",Dt=n=>n!==null&&typeof n=="object",K_=n=>(Dt(n)||ot(n))&&ot(n.then)&&ot(n.catch),j_=Object.prototype.toString,lc=n=>j_.call(n),DS=n=>lc(n).slice(8,-1),Z_=n=>lc(n)==="[object Object]",lp=n=>tn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,yl=sp(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ju=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},LS=/-\w/g,$i=ju(n=>n.replace(LS,e=>e.slice(1).toUpperCase())),IS=/\B([A-Z])/g,Oo=ju(n=>n.replace(IS,"-$1").toLowerCase()),Zu=ju(n=>n.charAt(0).toUpperCase()+n.slice(1)),vf=ju(n=>n?`on${Zu(n)}`:""),Fs=(n,e)=>!Object.is(n,e),iu=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},J_=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},cp=n=>{const e=parseFloat(n);return isNaN(e)?n:e},NS=n=>{const e=tn(n)?Number(n):NaN;return isNaN(e)?n:e};let dm;const Ju=()=>dm||(dm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Lo(n){if(tt(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=tn(i)?kS(i):Lo(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(tn(n)||Dt(n))return n}const US=/;(?![^(]*\))/g,FS=/:([^]+)/,OS=/\/\*[^]*?\*\//g;function kS(n){const e={};return n.replace(OS,"").split(US).forEach(t=>{if(t){const i=t.split(FS);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Xn(n){let e="";if(tn(n))e=n;else if(tt(n))for(let t=0;t<n.length;t++){const i=Xn(n[t]);i&&(e+=i+" ")}else if(Dt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const BS="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zS=sp(BS);function Q_(n){return!!n||n===""}function VS(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=cc(n[i],e[i]);return t}function cc(n,e){if(n===e)return!0;let t=hm(n),i=hm(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Dr(n),i=Dr(e),t||i)return n===e;if(t=tt(n),i=tt(e),t||i)return t&&i?VS(n,e):!1;if(t=Dt(n),i=Dt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!cc(n[o],e[o]))return!1}}return String(n)===String(e)}function e0(n,e){return n.findIndex(t=>cc(t,e))}const t0=n=>!!(n&&n.__v_isRef===!0),ce=n=>tn(n)?n:n==null?"":tt(n)||Dt(n)&&(n.toString===j_||!ot(n.toString))?t0(n)?ce(n.value):JSON.stringify(n,n0,2):String(n),n0=(n,e)=>t0(e)?n0(n,e.value):ga(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[xf(i,s)+" =>"]=r,t),{})}:Ku(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>xf(t))}:Dr(e)?xf(e):Dt(e)&&!tt(e)&&!Z_(e)?String(e):e,xf=(n,e="")=>{var t;return Dr(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let ci;class HS{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=ci,!e&&ci&&(this.index=(ci.scopes||(ci.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=ci;try{return ci=this,e()}finally{ci=t}}}on(){++this._on===1&&(this.prevScope=ci,ci=this)}off(){this._on>0&&--this._on===0&&(ci=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function GS(){return ci}let Gt;const Sf=new WeakSet;class i0{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ci&&ci.active&&ci.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Sf.has(this)&&(Sf.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||s0(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,pm(this),o0(this);const e=Gt,t=ir;Gt=this,ir=!0;try{return this.fn()}finally{a0(this),Gt=e,ir=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)hp(e);this.deps=this.depsTail=void 0,pm(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Sf.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ah(this)&&this.run()}get dirty(){return Ah(this)}}let r0=0,bl,Ml;function s0(n,e=!1){if(n.flags|=8,e){n.next=Ml,Ml=n;return}n.next=bl,bl=n}function up(){r0++}function fp(){if(--r0>0)return;if(Ml){let e=Ml;for(Ml=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;bl;){let e=bl;for(bl=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function o0(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function a0(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),hp(i),WS(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Ah(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(l0(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function l0(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Hl)||(n.globalVersion=Hl,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Ah(n))))return;n.flags|=2;const e=n.dep,t=Gt,i=ir;Gt=n,ir=!0;try{o0(n);const r=n.fn(n._value);(e.version===0||Fs(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Gt=t,ir=i,a0(n),n.flags&=-3}}function hp(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)hp(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function WS(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let ir=!0;const c0=[];function rs(){c0.push(ir),ir=!1}function ss(){const n=c0.pop();ir=n===void 0?!0:n}function pm(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Gt;Gt=void 0;try{e()}finally{Gt=t}}}let Hl=0;class XS{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class dp{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Gt||!ir||Gt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Gt)t=this.activeLink=new XS(Gt,this),Gt.deps?(t.prevDep=Gt.depsTail,Gt.depsTail.nextDep=t,Gt.depsTail=t):Gt.deps=Gt.depsTail=t,u0(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Gt.depsTail,t.nextDep=void 0,Gt.depsTail.nextDep=t,Gt.depsTail=t,Gt.deps===t&&(Gt.deps=i)}return t}trigger(e){this.version++,Hl++,this.notify(e)}notify(e){up();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{fp()}}}function u0(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)u0(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ch=new WeakMap,bo=Symbol(""),Rh=Symbol(""),Gl=Symbol("");function zn(n,e,t){if(ir&&Gt){let i=Ch.get(n);i||Ch.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new dp),r.map=i,r.key=t),r.track()}}function Yr(n,e,t,i,r,s){const o=Ch.get(n);if(!o){Hl++;return}const a=l=>{l&&l.trigger()};if(up(),e==="clear")o.forEach(a);else{const l=tt(n),c=l&&lp(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===Gl||!Dr(f)&&f>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Gl)),e){case"add":l?c&&a(o.get("length")):(a(o.get(bo)),ga(n)&&a(o.get(Rh)));break;case"delete":l||(a(o.get(bo)),ga(n)&&a(o.get(Rh)));break;case"set":ga(n)&&a(o.get(bo));break}}fp()}function Wo(n){const e=Et(n);return e===n?e:(zn(e,"iterate",Gl),Xi(n)?e:e.map(sr))}function Qu(n){return zn(n=Et(n),"iterate",Gl),n}function ws(n,e){return os(n)?Pa(Mo(n)?sr(e):e):sr(e)}const qS={__proto__:null,[Symbol.iterator](){return yf(this,Symbol.iterator,n=>ws(this,n))},concat(...n){return Wo(this).concat(...n.map(e=>tt(e)?Wo(e):e))},entries(){return yf(this,"entries",n=>(n[1]=ws(this,n[1]),n))},every(n,e){return Fr(this,"every",n,e,void 0,arguments)},filter(n,e){return Fr(this,"filter",n,e,t=>t.map(i=>ws(this,i)),arguments)},find(n,e){return Fr(this,"find",n,e,t=>ws(this,t),arguments)},findIndex(n,e){return Fr(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Fr(this,"findLast",n,e,t=>ws(this,t),arguments)},findLastIndex(n,e){return Fr(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Fr(this,"forEach",n,e,void 0,arguments)},includes(...n){return bf(this,"includes",n)},indexOf(...n){return bf(this,"indexOf",n)},join(n){return Wo(this).join(n)},lastIndexOf(...n){return bf(this,"lastIndexOf",n)},map(n,e){return Fr(this,"map",n,e,void 0,arguments)},pop(){return Za(this,"pop")},push(...n){return Za(this,"push",n)},reduce(n,...e){return mm(this,"reduce",n,e)},reduceRight(n,...e){return mm(this,"reduceRight",n,e)},shift(){return Za(this,"shift")},some(n,e){return Fr(this,"some",n,e,void 0,arguments)},splice(...n){return Za(this,"splice",n)},toReversed(){return Wo(this).toReversed()},toSorted(n){return Wo(this).toSorted(n)},toSpliced(...n){return Wo(this).toSpliced(...n)},unshift(...n){return Za(this,"unshift",n)},values(){return yf(this,"values",n=>ws(this,n))}};function yf(n,e,t){const i=Qu(n),r=i[e]();return i!==n&&!Xi(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const $S=Array.prototype;function Fr(n,e,t,i,r,s){const o=Qu(n),a=o!==n&&!Xi(n),l=o[e];if(l!==$S[e]){const h=l.apply(n,s);return a?sr(h):h}let c=t;o!==n&&(a?c=function(h,f){return t.call(this,ws(n,h),f,n)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function mm(n,e,t,i){const r=Qu(n);let s=t;return r!==n&&(Xi(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,ws(n,a),l,n)}),r[e](s,...i)}function bf(n,e,t){const i=Et(n);zn(i,"iterate",Gl);const r=i[e](...t);return(r===-1||r===!1)&&gp(t[0])?(t[0]=Et(t[0]),i[e](...t)):r}function Za(n,e,t=[]){rs(),up();const i=Et(n)[e].apply(n,t);return fp(),ss(),i}const YS=sp("__proto__,__v_isRef,__isVue"),f0=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Dr));function KS(n){Dr(n)||(n=String(n));const e=Et(this);return zn(e,"has",n),e.hasOwnProperty(n)}class h0{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?sy:g0:s?m0:p0).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=tt(e);if(!r){let l;if(o&&(l=qS[t]))return l;if(t==="hasOwnProperty")return KS}const a=Reflect.get(e,t,qn(e)?e:i);if((Dr(t)?f0.has(t):YS(t))||(r||zn(e,"get",t),s))return a;if(qn(a)){const l=o&&lp(t)?a:a.value;return r&&Dt(l)?Mu(l):l}return Dt(a)?r?Mu(a):qa(a):a}}class d0 extends h0{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=tt(e)&&lp(t);if(!this._isShallow){const c=os(s);if(!Xi(i)&&!os(i)&&(s=Et(s),i=Et(i)),!o&&qn(s)&&!qn(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:Ct(e,t),l=Reflect.set(e,t,i,qn(e)?e:r);return e===Et(r)&&(a?Fs(i,s)&&Yr(e,"set",t,i):Yr(e,"add",t,i)),l}deleteProperty(e,t){const i=Ct(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Yr(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Dr(t)||!f0.has(t))&&zn(e,"has",t),i}ownKeys(e){return zn(e,"iterate",tt(e)?"length":bo),Reflect.ownKeys(e)}}class jS extends h0{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const ZS=new d0,JS=new jS,QS=new d0(!0);const Ph=n=>n,_c=n=>Reflect.getPrototypeOf(n);function ey(n,e,t){return function(...i){const r=this.__v_raw,s=Et(r),o=ga(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Ph:e?Pa:sr;return!e&&zn(s,"iterate",l?Rh:bo),xn(Object.create(c),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}}})}}function vc(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function ty(n,e){const t={get(r){const s=this.__v_raw,o=Et(s),a=Et(r);n||(Fs(r,a)&&zn(o,"get",r),zn(o,"get",a));const{has:l}=_c(o),c=e?Ph:n?Pa:sr;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&zn(Et(r),"iterate",bo),r.size},has(r){const s=this.__v_raw,o=Et(s),a=Et(r);return n||(Fs(r,a)&&zn(o,"has",r),zn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Et(a),c=e?Ph:n?Pa:sr;return!n&&zn(l,"iterate",bo),a.forEach((u,h)=>r.call(s,c(u),c(h),o))}};return xn(t,n?{add:vc("add"),set:vc("set"),delete:vc("delete"),clear:vc("clear")}:{add(r){!e&&!Xi(r)&&!os(r)&&(r=Et(r));const s=Et(this);return _c(s).has.call(s,r)||(s.add(r),Yr(s,"add",r,r)),this},set(r,s){!e&&!Xi(s)&&!os(s)&&(s=Et(s));const o=Et(this),{has:a,get:l}=_c(o);let c=a.call(o,r);c||(r=Et(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Fs(s,u)&&Yr(o,"set",r,s):Yr(o,"add",r,s),this},delete(r){const s=Et(this),{has:o,get:a}=_c(s);let l=o.call(s,r);l||(r=Et(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Yr(s,"delete",r,void 0),c},clear(){const r=Et(this),s=r.size!==0,o=r.clear();return s&&Yr(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=ey(r,n,e)}),t}function pp(n,e){const t=ty(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ct(t,r)&&r in i?t:i,r,s)}const ny={get:pp(!1,!1)},iy={get:pp(!1,!0)},ry={get:pp(!0,!1)};const p0=new WeakMap,m0=new WeakMap,g0=new WeakMap,sy=new WeakMap;function oy(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ay(n){return n.__v_skip||!Object.isExtensible(n)?0:oy(DS(n))}function qa(n){return os(n)?n:mp(n,!1,ZS,ny,p0)}function _0(n){return mp(n,!1,QS,iy,m0)}function Mu(n){return mp(n,!0,JS,ry,g0)}function mp(n,e,t,i,r){if(!Dt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=ay(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function Mo(n){return os(n)?Mo(n.__v_raw):!!(n&&n.__v_isReactive)}function os(n){return!!(n&&n.__v_isReadonly)}function Xi(n){return!!(n&&n.__v_isShallow)}function gp(n){return n?!!n.__v_raw:!1}function Et(n){const e=n&&n.__v_raw;return e?Et(e):n}function ly(n){return!Ct(n,"__v_skip")&&Object.isExtensible(n)&&J_(n,"__v_skip",!0),n}const sr=n=>Dt(n)?qa(n):n,Pa=n=>Dt(n)?Mu(n):n;function qn(n){return n?n.__v_isRef===!0:!1}function qe(n){return v0(n,!1)}function fo(n){return v0(n,!0)}function v0(n,e){return qn(n)?n:new cy(n,e)}class cy{constructor(e,t){this.dep=new dp,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Et(e),this._value=t?e:sr(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Xi(e)||os(e);e=i?e:Et(e),Fs(e,t)&&(this._rawValue=e,this._value=i?e:sr(e),this.dep.trigger())}}function Se(n){return qn(n)?n.value:n}const uy={get:(n,e,t)=>e==="__v_raw"?n:Se(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return qn(r)&&!qn(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function x0(n){return Mo(n)?n:new Proxy(n,uy)}class fy{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new dp(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Hl-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Gt!==this)return s0(this,!0),!0}get value(){const e=this.dep.track();return l0(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function hy(n,e,t=!1){let i,r;return ot(n)?i=n:(i=n.get,r=n.set),new fy(i,r,t)}const xc={},Eu=new WeakMap;let oo;function dy(n,e=!1,t=oo){if(t){let i=Eu.get(t);i||Eu.set(t,i=[]),i.push(n)}}function py(n,e,t=Ot){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=S=>r?S:Xi(S)||r===!1||r===0?Kr(S,1):Kr(S);let u,h,f,d,m=!1,_=!1;if(qn(n)?(h=()=>n.value,m=Xi(n)):Mo(n)?(h=()=>c(n),m=!0):tt(n)?(_=!0,m=n.some(S=>Mo(S)||Xi(S)),h=()=>n.map(S=>{if(qn(S))return S.value;if(Mo(S))return c(S);if(ot(S))return l?l(S,2):S()})):ot(n)?e?h=l?()=>l(n,2):n:h=()=>{if(f){rs();try{f()}finally{ss()}}const S=oo;oo=u;try{return l?l(n,3,[d]):n(d)}finally{oo=S}}:h=wr,e&&r){const S=h,w=r===!0?1/0:r;h=()=>Kr(S(),w)}const p=GS(),g=()=>{u.stop(),p&&p.active&&ap(p.effects,u)};if(s&&e){const S=e;e=(...w)=>{S(...w),g()}}let y=_?new Array(n.length).fill(xc):xc;const M=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const w=u.run();if(r||m||(_?w.some((T,E)=>Fs(T,y[E])):Fs(w,y))){f&&f();const T=oo;oo=u;try{const E=[w,y===xc?void 0:_&&y[0]===xc?[]:y,d];y=w,l?l(e,3,E):e(...E)}finally{oo=T}}}else u.run()};return a&&a(M),u=new i0(h),u.scheduler=o?()=>o(M,!1):M,d=S=>dy(S,!1,u),f=u.onStop=()=>{const S=Eu.get(u);if(S){if(l)l(S,4);else for(const w of S)w();Eu.delete(u)}},e?i?M(!0):y=u.run():o?o(M.bind(null,!0),!0):u.run(),g.pause=u.pause.bind(u),g.resume=u.resume.bind(u),g.stop=g,g}function Kr(n,e=1/0,t){if(e<=0||!Dt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,qn(n))Kr(n.value,e,t);else if(tt(n))for(let i=0;i<n.length;i++)Kr(n[i],e,t);else if(Ku(n)||ga(n))n.forEach(i=>{Kr(i,e,t)});else if(Z_(n)){for(const i in n)Kr(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Kr(n[i],e,t)}return n}function uc(n,e,t,i){try{return i?n(...i):n()}catch(r){ef(r,e,t)}}function or(n,e,t,i){if(ot(n)){const r=uc(n,e,t,i);return r&&K_(r)&&r.catch(s=>{ef(s,e,t)}),r}if(tt(n)){const r=[];for(let s=0;s<n.length;s++)r.push(or(n[s],e,t,i));return r}}function ef(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ot;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(s){rs(),uc(s,null,10,[n,l,c]),ss();return}}my(n,t,r,i,o)}function my(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const ni=[];let pr=-1;const _a=[];let As=null,la=0;const S0=Promise.resolve();let Tu=null;function tf(n){const e=Tu||S0;return n?e.then(this?n.bind(this):n):e}function gy(n){let e=pr+1,t=ni.length;for(;e<t;){const i=e+t>>>1,r=ni[i],s=Wl(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function _p(n){if(!(n.flags&1)){const e=Wl(n),t=ni[ni.length-1];!t||!(n.flags&2)&&e>=Wl(t)?ni.push(n):ni.splice(gy(e),0,n),n.flags|=1,y0()}}function y0(){Tu||(Tu=S0.then(M0))}function _y(n){tt(n)?_a.push(...n):As&&n.id===-1?As.splice(la+1,0,n):n.flags&1||(_a.push(n),n.flags|=1),y0()}function gm(n,e,t=pr+1){for(;t<ni.length;t++){const i=ni[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;ni.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function b0(n){if(_a.length){const e=[...new Set(_a)].sort((t,i)=>Wl(t)-Wl(i));if(_a.length=0,As){As.push(...e);return}for(As=e,la=0;la<As.length;la++){const t=As[la];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}As=null,la=0}}const Wl=n=>n.id==null?n.flags&2?-1:1/0:n.id;function M0(n){try{for(pr=0;pr<ni.length;pr++){const e=ni[pr];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),uc(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;pr<ni.length;pr++){const e=ni[pr];e&&(e.flags&=-2)}pr=-1,ni.length=0,b0(),Tu=null,(ni.length||_a.length)&&M0()}}let wi=null,E0=null;function wu(n){const e=wi;return wi=n,E0=n&&n.type.__scopeId||null,e}function Qt(n,e=wi,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Ru(-1);const s=wu(e);let o;try{o=n(...r)}finally{wu(s),i._d&&Ru(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function on(n,e){if(wi===null)return n;const t=af(wi),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=Ot]=e[r];s&&(ot(s)&&(s={mounted:s,updated:s}),s.deep&&Kr(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ys(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(rs(),or(l,t,8,[n.el,a,n,e]),ss())}}function ru(n,e){if(Vn){let t=Vn.provides;const i=Vn.parent&&Vn.parent.provides;i===t&&(t=Vn.provides=Object.create(i)),t[n]=e}}function rr(n,e,t=!1){const i=Mp();if(i||va){let r=va?va._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ot(e)?e.call(i&&i.proxy):e}}const vy=Symbol.for("v-scx"),xy=()=>rr(vy);function Eo(n,e,t){return T0(n,e,t)}function T0(n,e,t=Ot){const{immediate:i,deep:r,flush:s,once:o}=t,a=xn({},t),l=e&&i||!e&&s!=="post";let c;if($l){if(s==="sync"){const d=xy();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=wr,d.resume=wr,d.pause=wr,d}}const u=Vn;a.call=(d,m,_)=>or(d,u,m,_);let h=!1;s==="post"?a.scheduler=d=>{li(d,u&&u.suspense)}:s!=="sync"&&(h=!0,a.scheduler=(d,m)=>{m?d():_p(d)}),a.augmentJob=d=>{e&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=py(n,e,a);return $l&&(c?c.push(f):l&&f()),f}function Sy(n,e,t){const i=this.proxy,r=tn(n)?n.includes(".")?w0(i,n):()=>i[n]:n.bind(i,i);let s;ot(e)?s=e:(s=e.handler,t=e);const o=fc(this),a=T0(r,s.bind(i),t);return o(),a}function w0(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const yy=Symbol("_vte"),A0=n=>n.__isTeleport,mr=Symbol("_leaveCb"),Ja=Symbol("_enterCb");function by(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ni(()=>{n.isMounted=!0}),xp(()=>{n.isUnmounting=!0}),n}const Fi=[Function,Array],C0={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Fi,onEnter:Fi,onAfterEnter:Fi,onEnterCancelled:Fi,onBeforeLeave:Fi,onLeave:Fi,onAfterLeave:Fi,onLeaveCancelled:Fi,onBeforeAppear:Fi,onAppear:Fi,onAfterAppear:Fi,onAppearCancelled:Fi},R0=n=>{const e=n.subTree;return e.component?R0(e.component):e},My={name:"BaseTransition",props:C0,setup(n,{slots:e}){const t=Mp(),i=by();return()=>{const r=e.default&&L0(e.default(),!0);if(!r||!r.length)return;const s=P0(r),o=Et(n),{mode:a}=o;if(i.isLeaving)return Mf(s);const l=_m(s);if(!l)return Mf(s);let c=Dh(l,o,i,t,h=>c=h);l.type!==ii&&Xl(l,c);let u=t.subTree&&_m(t.subTree);if(u&&u.type!==ii&&!ho(u,l)&&R0(t).type!==ii){let h=Dh(u,o,i,t);if(Xl(u,h),a==="out-in"&&l.type!==ii)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete h.afterLeave,u=void 0},Mf(s);a==="in-out"&&l.type!==ii?h.delayLeave=(f,d,m)=>{const _=D0(i,u);_[String(u.key)]=u,f[mr]=()=>{d(),f[mr]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{m(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function P0(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==ii){e=t;break}}return e}const Ey=My;function D0(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Dh(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:f,onLeave:d,onAfterLeave:m,onLeaveCancelled:_,onBeforeAppear:p,onAppear:g,onAfterAppear:y,onAppearCancelled:M}=e,S=String(n.key),w=D0(t,n),T=(x,D)=>{x&&or(x,i,9,D)},E=(x,D)=>{const P=D[1];T(x,D),tt(x)?x.every(I=>I.length<=1)&&P():x.length<=1&&P()},v={mode:o,persisted:a,beforeEnter(x){let D=l;if(!t.isMounted)if(s)D=p||l;else return;x[mr]&&x[mr](!0);const P=w[S];P&&ho(n,P)&&P.el[mr]&&P.el[mr](),T(D,[x])},enter(x){if(w[S]===n)return;let D=c,P=u,I=h;if(!t.isMounted)if(s)D=g||c,P=y||u,I=M||h;else return;let G=!1;x[Ja]=X=>{G||(G=!0,X?T(I,[x]):T(P,[x]),v.delayedLeave&&v.delayedLeave(),x[Ja]=void 0)};const $=x[Ja].bind(null,!1);D?E(D,[x,$]):$()},leave(x,D){const P=String(n.key);if(x[Ja]&&x[Ja](!0),t.isUnmounting)return D();T(f,[x]);let I=!1;x[mr]=$=>{I||(I=!0,D(),$?T(_,[x]):T(m,[x]),x[mr]=void 0,w[P]===n&&delete w[P])};const G=x[mr].bind(null,!1);w[P]=n,d?E(d,[x,G]):G()},clone(x){const D=Dh(x,e,t,i,r);return r&&r(D),D}};return v}function Mf(n){if(nf(n))return n=zs(n),n.children=null,n}function _m(n){if(!nf(n))return A0(n.type)&&n.children?P0(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&ot(t.default))return t.default()}}function Xl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Xl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function L0(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===St?(o.patchFlag&128&&r++,i=i.concat(L0(o.children,e,a))):(e||o.type!==ii)&&i.push(a!=null?zs(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function vp(n,e){return ot(n)?xn({name:n.name},e,{setup:n}):n}function I0(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ty(n){const e=Mp(),t=fo(null);if(e){const r=e.refs===Ot?e.refs={}:e.refs;Object.defineProperty(r,n,{enumerable:!0,get:()=>t.value,set:s=>t.value=s})}return t}function vm(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Au=new WeakMap;function El(n,e,t,i,r=!1){if(tt(n)){n.forEach((_,p)=>El(_,e&&(tt(e)?e[p]:e),t,i,r));return}if(Tl(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&El(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?af(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Ot?a.refs={}:a.refs,h=a.setupState,f=Et(h),d=h===Ot?Y_:_=>vm(u,_)?!1:Ct(f,_),m=(_,p)=>!(p&&vm(u,p));if(c!=null&&c!==l){if(xm(e),tn(c))u[c]=null,d(c)&&(h[c]=null);else if(qn(c)){const _=e;m(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(ot(l))uc(l,a,12,[o,u]);else{const _=tn(l),p=qn(l);if(_||p){const g=()=>{if(n.f){const y=_?d(l)?h[l]:u[l]:m()||!n.k?l.value:u[n.k];if(r)tt(y)&&ap(y,s);else if(tt(y))y.includes(s)||y.push(s);else if(_)u[l]=[s],d(l)&&(h[l]=u[l]);else{const M=[s];m(l,n.k)&&(l.value=M),n.k&&(u[n.k]=M)}}else _?(u[l]=o,d(l)&&(h[l]=o)):p&&(m(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const y=()=>{g(),Au.delete(n)};y.id=-1,Au.set(n,y),li(y,t)}else xm(n),g()}}}function xm(n){const e=Au.get(n);e&&(e.flags|=8,Au.delete(n))}Ju().requestIdleCallback;Ju().cancelIdleCallback;const Tl=n=>!!n.type.__asyncLoader,nf=n=>n.type.__isKeepAlive;function wy(n,e){N0(n,"a",e)}function Ay(n,e){N0(n,"da",e)}function N0(n,e,t=Vn){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(rf(e,i,t),t){let r=t.parent;for(;r&&r.parent;)nf(r.parent.vnode)&&Cy(i,e,t,r),r=r.parent}}function Cy(n,e,t,i){const r=rf(e,n,i,!0);$a(()=>{ap(i[e],r)},t)}function rf(n,e,t=Vn,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{rs();const a=fc(t),l=or(e,t,n,o);return a(),ss(),l});return i?r.unshift(s):r.push(s),s}}const hs=n=>(e,t=Vn)=>{(!$l||n==="sp")&&rf(n,(...i)=>e(...i),t)},U0=hs("bm"),Ni=hs("m"),Ry=hs("bu"),Py=hs("u"),xp=hs("bum"),$a=hs("um"),Dy=hs("sp"),Ly=hs("rtg"),Iy=hs("rtc");function Ny(n,e=Vn){rf("ec",n,e)}const F0="components";function ko(n,e){return B0(F0,n,!0,e)||n}const O0=Symbol.for("v-ndc");function k0(n){return tn(n)?B0(F0,n,!1)||n:n||O0}function B0(n,e,t=!0,i=!1){const r=wi||Vn;if(r){const s=r.type;{const a=vb(s,!1);if(a&&(a===e||a===$i(e)||a===Zu($i(e))))return s}const o=Sm(r[n]||s[n],e)||Sm(r.appContext[n],e);return!o&&i?s:o}}function Sm(n,e){return n&&(n[e]||n[$i(e)]||n[Zu($i(e))])}function Kt(n,e,t,i){let r;const s=t,o=tt(n);if(o||tn(n)){const a=o&&Mo(n);let l=!1,c=!1;a&&(l=!Xi(n),c=os(n),n=Qu(n)),r=new Array(n.length);for(let u=0,h=n.length;u<h;u++)r[u]=e(l?c?Pa(sr(n[u])):sr(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(Dt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const Lh=n=>n?sv(n)?af(n):Lh(n.parent):null,wl=xn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Lh(n.parent),$root:n=>Lh(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>V0(n),$forceUpdate:n=>n.f||(n.f=()=>{_p(n.update)}),$nextTick:n=>n.n||(n.n=tf.bind(n.proxy)),$watch:n=>Sy.bind(n)}),Ef=(n,e)=>n!==Ot&&!n.__isScriptSetup&&Ct(n,e),Uy={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Ef(i,e))return o[e]=1,i[e];if(r!==Ot&&Ct(r,e))return o[e]=2,r[e];if(Ct(s,e))return o[e]=3,s[e];if(t!==Ot&&Ct(t,e))return o[e]=4,t[e];Ih&&(o[e]=0)}}const c=wl[e];let u,h;if(c)return e==="$attrs"&&zn(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==Ot&&Ct(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Ct(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Ef(r,e)?(r[e]=t,!0):i!==Ot&&Ct(i,e)?(i[e]=t,!0):Ct(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==Ot&&a[0]!=="$"&&Ct(n,a)||Ef(e,a)||Ct(s,a)||Ct(i,a)||Ct(wl,a)||Ct(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ct(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function ym(n){return tt(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ih=!0;function Fy(n){const e=V0(n),t=n.proxy,i=n.ctx;Ih=!1,e.beforeCreate&&bm(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:m,activated:_,deactivated:p,beforeDestroy:g,beforeUnmount:y,destroyed:M,unmounted:S,render:w,renderTracked:T,renderTriggered:E,errorCaptured:v,serverPrefetch:x,expose:D,inheritAttrs:P,components:I,directives:G,filters:$}=e;if(c&&Oy(c,i,null),o)for(const B in o){const te=o[B];ot(te)&&(i[B]=te.bind(t))}if(r){const B=r.call(t,t);Dt(B)&&(n.data=qa(B))}if(Ih=!0,s)for(const B in s){const te=s[B],le=ot(te)?te.bind(t,t):ot(te.get)?te.get.bind(t,t):wr,k=!ot(te)&&ot(te.set)?te.set.bind(t):wr,xe=An({get:le,set:k});Object.defineProperty(i,B,{enumerable:!0,configurable:!0,get:()=>xe.value,set:de=>xe.value=de})}if(a)for(const B in a)z0(a[B],i,t,B);if(l){const B=ot(l)?l.call(t):l;Reflect.ownKeys(B).forEach(te=>{ru(te,B[te])})}u&&bm(u,n,"c");function W(B,te){tt(te)?te.forEach(le=>B(le.bind(t))):te&&B(te.bind(t))}if(W(U0,h),W(Ni,f),W(Ry,d),W(Py,m),W(wy,_),W(Ay,p),W(Ny,v),W(Iy,T),W(Ly,E),W(xp,y),W($a,S),W(Dy,x),tt(D))if(D.length){const B=n.exposed||(n.exposed={});D.forEach(te=>{Object.defineProperty(B,te,{get:()=>t[te],set:le=>t[te]=le,enumerable:!0})})}else n.exposed||(n.exposed={});w&&n.render===wr&&(n.render=w),P!=null&&(n.inheritAttrs=P),I&&(n.components=I),G&&(n.directives=G),x&&I0(n)}function Oy(n,e,t=wr){tt(n)&&(n=Nh(n));for(const i in n){const r=n[i];let s;Dt(r)?"default"in r?s=rr(r.from||i,r.default,!0):s=rr(r.from||i):s=rr(r),qn(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function bm(n,e,t){or(tt(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function z0(n,e,t,i){let r=i.includes(".")?w0(t,i):()=>t[i];if(tn(n)){const s=e[n];ot(s)&&Eo(r,s)}else if(ot(n))Eo(r,n.bind(t));else if(Dt(n))if(tt(n))n.forEach(s=>z0(s,e,t,i));else{const s=ot(n.handler)?n.handler.bind(t):e[n.handler];ot(s)&&Eo(r,s,n)}}function V0(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Cu(l,c,o,!0)),Cu(l,e,o)),Dt(e)&&s.set(e,l),l}function Cu(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Cu(n,s,t,!0),r&&r.forEach(o=>Cu(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=ky[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const ky={data:Mm,props:Em,emits:Em,methods:fl,computed:fl,beforeCreate:Kn,created:Kn,beforeMount:Kn,mounted:Kn,beforeUpdate:Kn,updated:Kn,beforeDestroy:Kn,beforeUnmount:Kn,destroyed:Kn,unmounted:Kn,activated:Kn,deactivated:Kn,errorCaptured:Kn,serverPrefetch:Kn,components:fl,directives:fl,watch:zy,provide:Mm,inject:By};function Mm(n,e){return e?n?function(){return xn(ot(n)?n.call(this,this):n,ot(e)?e.call(this,this):e)}:e:n}function By(n,e){return fl(Nh(n),Nh(e))}function Nh(n){if(tt(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Kn(n,e){return n?[...new Set([].concat(n,e))]:e}function fl(n,e){return n?xn(Object.create(null),n,e):e}function Em(n,e){return n?tt(n)&&tt(e)?[...new Set([...n,...e])]:xn(Object.create(null),ym(n),ym(e??{})):e}function zy(n,e){if(!n)return e;if(!e)return n;const t=xn(Object.create(null),n);for(const i in e)t[i]=Kn(n[i],e[i]);return t}function H0(){return{app:null,config:{isNativeTag:Y_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vy=0;function Hy(n,e){return function(i,r=null){ot(i)||(i=xn({},i)),r!=null&&!Dt(r)&&(r=null);const s=H0(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Vy++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Sb,get config(){return s.config},set config(u){},use(u,...h){return o.has(u)||(u&&ot(u.install)?(o.add(u),u.install(c,...h)):ot(u)&&(o.add(u),u(c,...h))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,h){return h?(s.components[u]=h,c):s.components[u]},directive(u,h){return h?(s.directives[u]=h,c):s.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||ft(i,r);return d.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),n(d,u,f),l=!0,c._container=u,u.__vue_app__=c,af(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(or(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return s.provides[u]=h,c},runWithContext(u){const h=va;va=c;try{return u()}finally{va=h}}};return c}}let va=null;const Gy=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${$i(e)}Modifiers`]||n[`${Oo(e)}Modifiers`];function Wy(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Ot;let r=t;const s=e.startsWith("update:"),o=s&&Gy(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>tn(u)?u.trim():u)),o.number&&(r=t.map(cp)));let a,l=i[a=vf(e)]||i[a=vf($i(e))];!l&&s&&(l=i[a=vf(Oo(e))]),l&&or(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,or(c,n,6,r)}}const Xy=new WeakMap;function G0(n,e,t=!1){const i=t?Xy:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!ot(n)){const l=c=>{const u=G0(c,e,!0);u&&(a=!0,xn(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(Dt(n)&&i.set(n,null),null):(tt(s)?s.forEach(l=>o[l]=null):xn(o,s),Dt(n)&&i.set(n,o),o)}function sf(n,e){return!n||!Yu(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ct(n,e[0].toLowerCase()+e.slice(1))||Ct(n,Oo(e))||Ct(n,e))}function Tm(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:m,inheritAttrs:_}=n,p=wu(n);let g,y;try{if(t.shapeFlag&4){const S=r||i,w=S;g=vr(c.call(w,S,u,h,d,f,m)),y=a}else{const S=e;g=vr(S.length>1?S(h,{attrs:a,slots:o,emit:l}):S(h,null)),y=e.props?a:qy(a)}}catch(S){Al.length=0,ef(S,n,1),g=ft(ii)}let M=g;if(y&&_!==!1){const S=Object.keys(y),{shapeFlag:w}=M;S.length&&w&7&&(s&&S.some(op)&&(y=$y(y,s)),M=zs(M,y,!1,!0))}return t.dirs&&(M=zs(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&Xl(M,t.transition),g=M,wu(p),g}const qy=n=>{let e;for(const t in n)(t==="class"||t==="style"||Yu(t))&&((e||(e={}))[t]=n[t]);return e},$y=(n,e)=>{const t={};for(const i in n)(!op(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Yy(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?wm(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(W0(o,i,f)&&!sf(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?wm(i,o,c):!0:!!o;return!1}function wm(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(W0(e,n,s)&&!sf(t,s))return!0}return!1}function W0(n,e,t){const i=n[t],r=e[t];return t==="style"&&Dt(i)&&Dt(r)?!cc(i,r):i!==r}function Ky({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const X0={},q0=()=>Object.create(X0),$0=n=>Object.getPrototypeOf(n)===X0;function jy(n,e,t,i=!1){const r={},s=q0();n.propsDefaults=Object.create(null),Y0(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:_0(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Zy(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Et(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(sf(n.emitsOptions,f))continue;const d=e[f];if(l)if(Ct(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const m=$i(f);r[m]=Uh(l,a,m,d,n,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{Y0(n,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!Ct(e,h)&&((u=Oo(h))===h||!Ct(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=Uh(l,a,h,void 0,n,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!Ct(e,h))&&(delete s[h],c=!0)}c&&Yr(n.attrs,"set","")}function Y0(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(yl(l))continue;const c=e[l];let u;r&&Ct(r,u=$i(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:sf(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Et(t),c=a||Ot;for(let u=0;u<s.length;u++){const h=s[u];t[h]=Uh(r,l,h,c[h],n,!Ct(c,h))}}return o}function Uh(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Ct(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ot(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=fc(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Oo(t))&&(i=!0))}return i}const Jy=new WeakMap;function K0(n,e,t=!1){const i=t?Jy:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!ot(n)){const u=h=>{l=!0;const[f,d]=K0(h,e,!0);xn(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return Dt(n)&&i.set(n,ma),ma;if(tt(s))for(let u=0;u<s.length;u++){const h=$i(s[u]);Am(h)&&(o[h]=Ot)}else if(s)for(const u in s){const h=$i(u);if(Am(h)){const f=s[u],d=o[h]=tt(f)||ot(f)?{type:f}:xn({},f),m=d.type;let _=!1,p=!0;if(tt(m))for(let g=0;g<m.length;++g){const y=m[g],M=ot(y)&&y.name;if(M==="Boolean"){_=!0;break}else M==="String"&&(p=!1)}else _=ot(m)&&m.name==="Boolean";d[0]=_,d[1]=p,(_||Ct(d,"default"))&&a.push(h)}}const c=[o,a];return Dt(n)&&i.set(n,c),c}function Am(n){return n[0]!=="$"&&!yl(n)}const Sp=n=>n==="_"||n==="_ctx"||n==="$stable",yp=n=>tt(n)?n.map(vr):[vr(n)],Qy=(n,e,t)=>{if(e._n)return e;const i=Qt((...r)=>yp(e(...r)),t);return i._c=!1,i},j0=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Sp(r))continue;const s=n[r];if(ot(s))e[r]=Qy(r,s,i);else if(s!=null){const o=yp(s);e[r]=()=>o}}},Z0=(n,e)=>{const t=yp(e);n.slots.default=()=>t},J0=(n,e,t)=>{for(const i in e)(t||!Sp(i))&&(n[i]=e[i])},eb=(n,e,t)=>{const i=n.slots=q0();if(n.vnode.shapeFlag&32){const r=e._;r?(J0(i,e,t),t&&J_(i,"_",r,!0)):j0(e,i)}else e&&Z0(n,e)},tb=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=Ot;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:J0(r,e,t):(s=!e.$stable,j0(e,r)),o=e}else e&&(Z0(n,e),o={default:1});if(s)for(const a in r)!Sp(a)&&o[a]==null&&delete r[a]},li=ob;function nb(n){return ib(n)}function ib(n,e){const t=Ju();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=wr,insertStaticContent:m}=n,_=(U,N,V,J=null,Z=null,F=null,L=void 0,me=null,fe=!!N.dynamicChildren)=>{if(U===N)return;U&&!ho(U,N)&&(J=H(U),de(U,Z,F,!0),U=null),N.patchFlag===-2&&(fe=!1,N.dynamicChildren=null);const{type:se,ref:he,shapeFlag:C}=N;switch(se){case of:p(U,N,V,J);break;case ii:g(U,N,V,J);break;case su:U==null&&y(N,V,J,L);break;case St:I(U,N,V,J,Z,F,L,me,fe);break;default:C&1?w(U,N,V,J,Z,F,L,me,fe):C&6?G(U,N,V,J,Z,F,L,me,fe):(C&64||C&128)&&se.process(U,N,V,J,Z,F,L,me,fe,pe)}he!=null&&Z?El(he,U&&U.ref,F,N||U,!N):he==null&&U&&U.ref!=null&&El(U.ref,null,F,U,!0)},p=(U,N,V,J)=>{if(U==null)i(N.el=a(N.children),V,J);else{const Z=N.el=U.el;N.children!==U.children&&c(Z,N.children)}},g=(U,N,V,J)=>{U==null?i(N.el=l(N.children||""),V,J):N.el=U.el},y=(U,N,V,J)=>{[U.el,U.anchor]=m(U.children,N,V,J,U.el,U.anchor)},M=({el:U,anchor:N},V,J)=>{let Z;for(;U&&U!==N;)Z=f(U),i(U,V,J),U=Z;i(N,V,J)},S=({el:U,anchor:N})=>{let V;for(;U&&U!==N;)V=f(U),r(U),U=V;r(N)},w=(U,N,V,J,Z,F,L,me,fe)=>{if(N.type==="svg"?L="svg":N.type==="math"&&(L="mathml"),U==null)T(N,V,J,Z,F,L,me,fe);else{const se=U.el&&U.el._isVueCE?U.el:null;try{se&&se._beginPatch(),x(U,N,Z,F,L,me,fe)}finally{se&&se._endPatch()}}},T=(U,N,V,J,Z,F,L,me)=>{let fe,se;const{props:he,shapeFlag:C,transition:b,dirs:O}=U;if(fe=U.el=o(U.type,F,he&&he.is,he),C&8?u(fe,U.children):C&16&&v(U.children,fe,null,J,Z,Tf(U,F),L,me),O&&Ys(U,null,J,"created"),E(fe,U,U.scopeId,L,J),he){for(const ne in he)ne!=="value"&&!yl(ne)&&s(fe,ne,null,he[ne],F,J);"value"in he&&s(fe,"value",null,he.value,F),(se=he.onVnodeBeforeMount)&&fr(se,J,U)}O&&Ys(U,null,J,"beforeMount");const K=rb(Z,b);K&&b.beforeEnter(fe),i(fe,N,V),((se=he&&he.onVnodeMounted)||K||O)&&li(()=>{se&&fr(se,J,U),K&&b.enter(fe),O&&Ys(U,null,J,"mounted")},Z)},E=(U,N,V,J,Z)=>{if(V&&d(U,V),J)for(let F=0;F<J.length;F++)d(U,J[F]);if(Z){let F=Z.subTree;if(N===F||nv(F.type)&&(F.ssContent===N||F.ssFallback===N)){const L=Z.vnode;E(U,L,L.scopeId,L.slotScopeIds,Z.parent)}}},v=(U,N,V,J,Z,F,L,me,fe=0)=>{for(let se=fe;se<U.length;se++){const he=U[se]=me?qr(U[se]):vr(U[se]);_(null,he,N,V,J,Z,F,L,me)}},x=(U,N,V,J,Z,F,L)=>{const me=N.el=U.el;let{patchFlag:fe,dynamicChildren:se,dirs:he}=N;fe|=U.patchFlag&16;const C=U.props||Ot,b=N.props||Ot;let O;if(V&&Ks(V,!1),(O=b.onVnodeBeforeUpdate)&&fr(O,V,N,U),he&&Ys(N,U,V,"beforeUpdate"),V&&Ks(V,!0),(C.innerHTML&&b.innerHTML==null||C.textContent&&b.textContent==null)&&u(me,""),se?D(U.dynamicChildren,se,me,V,J,Tf(N,Z),F):L||te(U,N,me,null,V,J,Tf(N,Z),F,!1),fe>0){if(fe&16)P(me,C,b,V,Z);else if(fe&2&&C.class!==b.class&&s(me,"class",null,b.class,Z),fe&4&&s(me,"style",C.style,b.style,Z),fe&8){const K=N.dynamicProps;for(let ne=0;ne<K.length;ne++){const Y=K[ne],Ee=C[Y],ge=b[Y];(ge!==Ee||Y==="value")&&s(me,Y,Ee,ge,Z,V)}}fe&1&&U.children!==N.children&&u(me,N.children)}else!L&&se==null&&P(me,C,b,V,Z);((O=b.onVnodeUpdated)||he)&&li(()=>{O&&fr(O,V,N,U),he&&Ys(N,U,V,"updated")},J)},D=(U,N,V,J,Z,F,L)=>{for(let me=0;me<N.length;me++){const fe=U[me],se=N[me],he=fe.el&&(fe.type===St||!ho(fe,se)||fe.shapeFlag&198)?h(fe.el):V;_(fe,se,he,null,J,Z,F,L,!0)}},P=(U,N,V,J,Z)=>{if(N!==V){if(N!==Ot)for(const F in N)!yl(F)&&!(F in V)&&s(U,F,N[F],null,Z,J);for(const F in V){if(yl(F))continue;const L=V[F],me=N[F];L!==me&&F!=="value"&&s(U,F,me,L,Z,J)}"value"in V&&s(U,"value",N.value,V.value,Z)}},I=(U,N,V,J,Z,F,L,me,fe)=>{const se=N.el=U?U.el:a(""),he=N.anchor=U?U.anchor:a("");let{patchFlag:C,dynamicChildren:b,slotScopeIds:O}=N;O&&(me=me?me.concat(O):O),U==null?(i(se,V,J),i(he,V,J),v(N.children||[],V,he,Z,F,L,me,fe)):C>0&&C&64&&b&&U.dynamicChildren&&U.dynamicChildren.length===b.length?(D(U.dynamicChildren,b,V,Z,F,L,me),(N.key!=null||Z&&N===Z.subTree)&&Q0(U,N,!0)):te(U,N,V,he,Z,F,L,me,fe)},G=(U,N,V,J,Z,F,L,me,fe)=>{N.slotScopeIds=me,U==null?N.shapeFlag&512?Z.ctx.activate(N,V,J,L,fe):$(N,V,J,Z,F,L,fe):X(U,N,fe)},$=(U,N,V,J,Z,F,L)=>{const me=U.component=db(U,J,Z);if(nf(U)&&(me.ctx.renderer=pe),pb(me,!1,L),me.asyncDep){if(Z&&Z.registerDep(me,W,L),!U.el){const fe=me.subTree=ft(ii);g(null,fe,N,V),U.placeholder=fe.el}}else W(me,U,N,V,Z,F,L)},X=(U,N,V)=>{const J=N.component=U.component;if(Yy(U,N,V))if(J.asyncDep&&!J.asyncResolved){B(J,N,V);return}else J.next=N,J.update();else N.el=U.el,J.vnode=N},W=(U,N,V,J,Z,F,L)=>{const me=()=>{if(U.isMounted){let{next:C,bu:b,u:O,parent:K,vnode:ne}=U;{const Ce=ev(U);if(Ce){C&&(C.el=ne.el,B(U,C,L)),Ce.asyncDep.then(()=>{li(()=>{U.isUnmounted||se()},Z)});return}}let Y=C,Ee;Ks(U,!1),C?(C.el=ne.el,B(U,C,L)):C=ne,b&&iu(b),(Ee=C.props&&C.props.onVnodeBeforeUpdate)&&fr(Ee,K,C,ne),Ks(U,!0);const ge=Tm(U),ze=U.subTree;U.subTree=ge,_(ze,ge,h(ze.el),H(ze),U,Z,F),C.el=ge.el,Y===null&&Ky(U,ge.el),O&&li(O,Z),(Ee=C.props&&C.props.onVnodeUpdated)&&li(()=>fr(Ee,K,C,ne),Z)}else{let C;const{el:b,props:O}=N,{bm:K,m:ne,parent:Y,root:Ee,type:ge}=U,ze=Tl(N);Ks(U,!1),K&&iu(K),!ze&&(C=O&&O.onVnodeBeforeMount)&&fr(C,Y,N),Ks(U,!0);{Ee.ce&&Ee.ce._hasShadowRoot()&&Ee.ce._injectChildStyle(ge);const Ce=U.subTree=Tm(U);_(null,Ce,V,J,U,Z,F),N.el=Ce.el}if(ne&&li(ne,Z),!ze&&(C=O&&O.onVnodeMounted)){const Ce=N;li(()=>fr(C,Y,Ce),Z)}(N.shapeFlag&256||Y&&Tl(Y.vnode)&&Y.vnode.shapeFlag&256)&&U.a&&li(U.a,Z),U.isMounted=!0,N=V=J=null}};U.scope.on();const fe=U.effect=new i0(me);U.scope.off();const se=U.update=fe.run.bind(fe),he=U.job=fe.runIfDirty.bind(fe);he.i=U,he.id=U.uid,fe.scheduler=()=>_p(he),Ks(U,!0),se()},B=(U,N,V)=>{N.component=U;const J=U.vnode.props;U.vnode=N,U.next=null,Zy(U,N.props,J,V),tb(U,N.children,V),rs(),gm(U),ss()},te=(U,N,V,J,Z,F,L,me,fe=!1)=>{const se=U&&U.children,he=U?U.shapeFlag:0,C=N.children,{patchFlag:b,shapeFlag:O}=N;if(b>0){if(b&128){k(se,C,V,J,Z,F,L,me,fe);return}else if(b&256){le(se,C,V,J,Z,F,L,me,fe);return}}O&8?(he&16&&re(se,Z,F),C!==se&&u(V,C)):he&16?O&16?k(se,C,V,J,Z,F,L,me,fe):re(se,Z,F,!0):(he&8&&u(V,""),O&16&&v(C,V,J,Z,F,L,me,fe))},le=(U,N,V,J,Z,F,L,me,fe)=>{U=U||ma,N=N||ma;const se=U.length,he=N.length,C=Math.min(se,he);let b;for(b=0;b<C;b++){const O=N[b]=fe?qr(N[b]):vr(N[b]);_(U[b],O,V,null,Z,F,L,me,fe)}se>he?re(U,Z,F,!0,!1,C):v(N,V,J,Z,F,L,me,fe,C)},k=(U,N,V,J,Z,F,L,me,fe)=>{let se=0;const he=N.length;let C=U.length-1,b=he-1;for(;se<=C&&se<=b;){const O=U[se],K=N[se]=fe?qr(N[se]):vr(N[se]);if(ho(O,K))_(O,K,V,null,Z,F,L,me,fe);else break;se++}for(;se<=C&&se<=b;){const O=U[C],K=N[b]=fe?qr(N[b]):vr(N[b]);if(ho(O,K))_(O,K,V,null,Z,F,L,me,fe);else break;C--,b--}if(se>C){if(se<=b){const O=b+1,K=O<he?N[O].el:J;for(;se<=b;)_(null,N[se]=fe?qr(N[se]):vr(N[se]),V,K,Z,F,L,me,fe),se++}}else if(se>b)for(;se<=C;)de(U[se],Z,F,!0),se++;else{const O=se,K=se,ne=new Map;for(se=K;se<=b;se++){const Ae=N[se]=fe?qr(N[se]):vr(N[se]);Ae.key!=null&&ne.set(Ae.key,se)}let Y,Ee=0;const ge=b-K+1;let ze=!1,Ce=0;const _e=new Array(ge);for(se=0;se<ge;se++)_e[se]=0;for(se=O;se<=C;se++){const Ae=U[se];if(Ee>=ge){de(Ae,Z,F,!0);continue}let Le;if(Ae.key!=null)Le=ne.get(Ae.key);else for(Y=K;Y<=b;Y++)if(_e[Y-K]===0&&ho(Ae,N[Y])){Le=Y;break}Le===void 0?de(Ae,Z,F,!0):(_e[Le-K]=se+1,Le>=Ce?Ce=Le:ze=!0,_(Ae,N[Le],V,null,Z,F,L,me,fe),Ee++)}const ye=ze?sb(_e):ma;for(Y=ye.length-1,se=ge-1;se>=0;se--){const Ae=K+se,Le=N[Ae],Re=N[Ae+1],nt=Ae+1<he?Re.el||tv(Re):J;_e[se]===0?_(null,Le,V,nt,Z,F,L,me,fe):ze&&(Y<0||se!==ye[Y]?xe(Le,V,nt,2):Y--)}}},xe=(U,N,V,J,Z=null)=>{const{el:F,type:L,transition:me,children:fe,shapeFlag:se}=U;if(se&6){xe(U.component.subTree,N,V,J);return}if(se&128){U.suspense.move(N,V,J);return}if(se&64){L.move(U,N,V,pe);return}if(L===St){i(F,N,V);for(let C=0;C<fe.length;C++)xe(fe[C],N,V,J);i(U.anchor,N,V);return}if(L===su){M(U,N,V);return}if(J!==2&&se&1&&me)if(J===0)me.beforeEnter(F),i(F,N,V),li(()=>me.enter(F),Z);else{const{leave:C,delayLeave:b,afterLeave:O}=me,K=()=>{U.ctx.isUnmounted?r(F):i(F,N,V)},ne=()=>{F._isLeaving&&F[mr](!0),C(F,()=>{K(),O&&O()})};b?b(F,K,ne):ne()}else i(F,N,V)},de=(U,N,V,J=!1,Z=!1)=>{const{type:F,props:L,ref:me,children:fe,dynamicChildren:se,shapeFlag:he,patchFlag:C,dirs:b,cacheIndex:O}=U;if(C===-2&&(Z=!1),me!=null&&(rs(),El(me,null,V,U,!0),ss()),O!=null&&(N.renderCache[O]=void 0),he&256){N.ctx.deactivate(U);return}const K=he&1&&b,ne=!Tl(U);let Y;if(ne&&(Y=L&&L.onVnodeBeforeUnmount)&&fr(Y,N,U),he&6)je(U.component,V,J);else{if(he&128){U.suspense.unmount(V,J);return}K&&Ys(U,null,N,"beforeUnmount"),he&64?U.type.remove(U,N,V,pe,J):se&&!se.hasOnce&&(F!==St||C>0&&C&64)?re(se,N,V,!1,!0):(F===St&&C&384||!Z&&he&16)&&re(fe,N,V),J&&ke(U)}(ne&&(Y=L&&L.onVnodeUnmounted)||K)&&li(()=>{Y&&fr(Y,N,U),K&&Ys(U,null,N,"unmounted")},V)},ke=U=>{const{type:N,el:V,anchor:J,transition:Z}=U;if(N===St){$e(V,J);return}if(N===su){S(U);return}const F=()=>{r(V),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(U.shapeFlag&1&&Z&&!Z.persisted){const{leave:L,delayLeave:me}=Z,fe=()=>L(V,F);me?me(U.el,F,fe):fe()}else F()},$e=(U,N)=>{let V;for(;U!==N;)V=f(U),r(U),U=V;r(N)},je=(U,N,V)=>{const{bum:J,scope:Z,job:F,subTree:L,um:me,m:fe,a:se}=U;Cm(fe),Cm(se),J&&iu(J),Z.stop(),F&&(F.flags|=8,de(L,U,N,V)),me&&li(me,N),li(()=>{U.isUnmounted=!0},N)},re=(U,N,V,J=!1,Z=!1,F=0)=>{for(let L=F;L<U.length;L++)de(U[L],N,V,J,Z)},H=U=>{if(U.shapeFlag&6)return H(U.component.subTree);if(U.shapeFlag&128)return U.suspense.next();const N=f(U.anchor||U.el),V=N&&N[yy];return V?f(V):N};let j=!1;const ue=(U,N,V)=>{let J;U==null?N._vnode&&(de(N._vnode,null,null,!0),J=N._vnode.component):_(N._vnode||null,U,N,null,null,null,V),N._vnode=U,j||(j=!0,gm(J),b0(),j=!1)},pe={p:_,um:de,m:xe,r:ke,mt:$,mc:v,pc:te,pbc:D,n:H,o:n};return{render:ue,hydrate:void 0,createApp:Hy(ue)}}function Tf({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ks({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function rb(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Q0(n,e,t=!1){const i=n.children,r=e.children;if(tt(i)&&tt(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=qr(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Q0(o,a)),a.type===of&&(a.patchFlag===-1&&(a=r[s]=qr(a)),a.el=o.el),a.type===ii&&!a.el&&(a.el=o.el)}}function sb(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function ev(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ev(e)}function Cm(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function tv(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?tv(e.subTree):null}const nv=n=>n.__isSuspense;function ob(n,e){e&&e.pendingBranch?tt(n)?e.effects.push(...n):e.effects.push(n):_y(n)}const St=Symbol.for("v-fgt"),of=Symbol.for("v-txt"),ii=Symbol.for("v-cmt"),su=Symbol.for("v-stc"),Al=[];let Ai=null;function Fe(n=!1){Al.push(Ai=n?null:[])}function ab(){Al.pop(),Ai=Al[Al.length-1]||null}let ql=1;function Ru(n,e=!1){ql+=n,n<0&&Ai&&e&&(Ai.hasOnce=!0)}function iv(n){return n.dynamicChildren=ql>0?Ai||ma:null,ab(),ql>0&&Ai&&Ai.push(n),n}function Ge(n,e,t,i,r,s){return iv(R(n,e,t,i,r,s,!0))}function yr(n,e,t,i,r){return iv(ft(n,e,t,i,r,!0))}function Pu(n){return n?n.__v_isVNode===!0:!1}function ho(n,e){return n.type===e.type&&n.key===e.key}const rv=({key:n})=>n??null,ou=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?tn(n)||qn(n)||ot(n)?{i:wi,r:n,k:e,f:!!t}:n:null);function R(n,e=null,t=null,i=0,r=null,s=n===St?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&rv(e),ref:e&&ou(e),scopeId:E0,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:wi};return a?(bp(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=tn(t)?8:16),ql>0&&!o&&Ai&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ai.push(l),l}const ft=lb;function lb(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===O0)&&(n=ii),Pu(n)){const a=zs(n,e,!0);return t&&bp(a,t),ql>0&&!s&&Ai&&(a.shapeFlag&6?Ai[Ai.indexOf(n)]=a:Ai.push(a)),a.patchFlag=-2,a}if(xb(n)&&(n=n.__vccOpts),e){e=cb(e);let{class:a,style:l}=e;a&&!tn(a)&&(e.class=Xn(a)),Dt(l)&&(gp(l)&&!tt(l)&&(l=xn({},l)),e.style=Lo(l))}const o=tn(n)?1:nv(n)?128:A0(n)?64:Dt(n)?4:ot(n)?2:0;return R(n,e,t,i,r,o,s,!0)}function cb(n){return n?gp(n)||$0(n)?xn({},n):n:null}function zs(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?ub(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&rv(c),ref:e&&e.ref?t&&s?tt(s)?s.concat(ou(e)):[s,ou(e)]:ou(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==St?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&zs(n.ssContent),ssFallback:n.ssFallback&&zs(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Xl(u,l.clone(u)),u}function Rt(n=" ",e=0){return ft(of,null,n,e)}function Da(n,e){const t=ft(su,null,n);return t.staticCount=e,t}function er(n="",e=!1){return e?(Fe(),yr(ii,null,n)):ft(ii,null,n)}function vr(n){return n==null||typeof n=="boolean"?ft(ii):tt(n)?ft(St,null,n.slice()):Pu(n)?qr(n):ft(of,null,String(n))}function qr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:zs(n)}function bp(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(tt(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),bp(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!$0(e)?e._ctx=wi:r===3&&wi&&(wi.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ot(e)?(e={default:e,_ctx:wi},t=32):(e=String(e),i&64?(t=16,e=[Rt(e)]):t=8);n.children=e,n.shapeFlag|=t}function ub(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Xn([e.class,i.class]));else if(r==="style")e.style=Lo([e.style,i.style]);else if(Yu(r)){const s=e[r],o=i[r];o&&s!==o&&!(tt(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function fr(n,e,t,i=null){or(n,e,7,[t,i])}const fb=H0();let hb=0;function db(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||fb,s={uid:hb++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new HS(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:K0(i,r),emitsOptions:G0(i,r),emit:null,emitted:null,propsDefaults:Ot,inheritAttrs:i.inheritAttrs,ctx:Ot,data:Ot,props:Ot,attrs:Ot,slots:Ot,refs:Ot,setupState:Ot,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Wy.bind(null,s),n.ce&&n.ce(s),s}let Vn=null;const Mp=()=>Vn||wi;let Du,Fh;{const n=Ju(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Du=e("__VUE_INSTANCE_SETTERS__",t=>Vn=t),Fh=e("__VUE_SSR_SETTERS__",t=>$l=t)}const fc=n=>{const e=Vn;return Du(n),n.scope.on(),()=>{n.scope.off(),Du(e)}},Rm=()=>{Vn&&Vn.scope.off(),Du(null)};function sv(n){return n.vnode.shapeFlag&4}let $l=!1;function pb(n,e=!1,t=!1){e&&Fh(e);const{props:i,children:r}=n.vnode,s=sv(n);jy(n,i,s,e),eb(n,r,t||e);const o=s?mb(n,e):void 0;return e&&Fh(!1),o}function mb(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Uy);const{setup:i}=t;if(i){rs();const r=n.setupContext=i.length>1?_b(n):null,s=fc(n),o=uc(i,n,0,[n.props,r]),a=K_(o);if(ss(),s(),(a||n.sp)&&!Tl(n)&&I0(n),a){if(o.then(Rm,Rm),e)return o.then(l=>{Pm(n,l)}).catch(l=>{ef(l,n,0)});n.asyncDep=o}else Pm(n,o)}else ov(n)}function Pm(n,e,t){ot(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Dt(e)&&(n.setupState=x0(e)),ov(n)}function ov(n,e,t){const i=n.type;n.render||(n.render=i.render||wr);{const r=fc(n);rs();try{Fy(n)}finally{ss(),r()}}}const gb={get(n,e){return zn(n,"get",""),n[e]}};function _b(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,gb),slots:n.slots,emit:n.emit,expose:e}}function af(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(x0(ly(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in wl)return wl[t](n)},has(e,t){return t in e||t in wl}})):n.proxy}function vb(n,e=!0){return ot(n)?n.displayName||n.name:n.name||e&&n.__name}function xb(n){return ot(n)&&"__vccOpts"in n}const An=(n,e)=>hy(n,e,$l);function Ep(n,e,t){try{Ru(-1);const i=arguments.length;return i===2?Dt(e)&&!tt(e)?Pu(e)?ft(n,null,[e]):ft(n,e):ft(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Pu(t)&&(t=[t]),ft(n,e,t))}finally{Ru(1)}}const Sb="3.5.29";let Oh;const Dm=typeof window<"u"&&window.trustedTypes;if(Dm)try{Oh=Dm.createPolicy("vue",{createHTML:n=>n})}catch{}const av=Oh?n=>Oh.createHTML(n):n=>n,yb="http://www.w3.org/2000/svg",bb="http://www.w3.org/1998/Math/MathML",Wr=typeof document<"u"?document:null,Lm=Wr&&Wr.createElement("template"),Mb={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Wr.createElementNS(yb,n):e==="mathml"?Wr.createElementNS(bb,n):t?Wr.createElement(n,{is:t}):Wr.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Wr.createTextNode(n),createComment:n=>Wr.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Wr.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Lm.innerHTML=av(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Lm.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},gs="transition",Qa="animation",Yl=Symbol("_vtc"),lv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Eb=xn({},C0,lv),Tb=n=>(n.displayName="Transition",n.props=Eb,n),cv=Tb((n,{slots:e})=>Ep(Ey,wb(n),e)),js=(n,e=[])=>{tt(n)?n.forEach(t=>t(...e)):n&&n(...e)},Im=n=>n?tt(n)?n.some(e=>e.length>1):n.length>1:!1;function wb(n){const e={};for(const I in n)I in lv||(e[I]=n[I]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=n,m=Ab(r),_=m&&m[0],p=m&&m[1],{onBeforeEnter:g,onEnter:y,onEnterCancelled:M,onLeave:S,onLeaveCancelled:w,onBeforeAppear:T=g,onAppear:E=y,onAppearCancelled:v=M}=e,x=(I,G,$,X)=>{I._enterCancelled=X,Zs(I,G?u:a),Zs(I,G?c:o),$&&$()},D=(I,G)=>{I._isLeaving=!1,Zs(I,h),Zs(I,d),Zs(I,f),G&&G()},P=I=>(G,$)=>{const X=I?E:y,W=()=>x(G,I,$);js(X,[G,W]),Nm(()=>{Zs(G,I?l:s),Or(G,I?u:a),Im(X)||Um(G,i,_,W)})};return xn(e,{onBeforeEnter(I){js(g,[I]),Or(I,s),Or(I,o)},onBeforeAppear(I){js(T,[I]),Or(I,l),Or(I,c)},onEnter:P(!1),onAppear:P(!0),onLeave(I,G){I._isLeaving=!0;const $=()=>D(I,G);Or(I,h),I._enterCancelled?(Or(I,f),km(I)):(km(I),Or(I,f)),Nm(()=>{I._isLeaving&&(Zs(I,h),Or(I,d),Im(S)||Um(I,i,p,$))}),js(S,[I,$])},onEnterCancelled(I){x(I,!1,void 0,!0),js(M,[I])},onAppearCancelled(I){x(I,!0,void 0,!0),js(v,[I])},onLeaveCancelled(I){D(I),js(w,[I])}})}function Ab(n){if(n==null)return null;if(Dt(n))return[wf(n.enter),wf(n.leave)];{const e=wf(n);return[e,e]}}function wf(n){return NS(n)}function Or(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Yl]||(n[Yl]=new Set)).add(e)}function Zs(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Yl];t&&(t.delete(e),t.size||(n[Yl]=void 0))}function Nm(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Cb=0;function Um(n,e,t,i){const r=n._endId=++Cb,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=Rb(n,e);if(!o)return i();const c=o+"end";let u=0;const h=()=>{n.removeEventListener(c,f),s()},f=d=>{d.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),n.addEventListener(c,f)}function Rb(n,e){const t=window.getComputedStyle(n),i=m=>(t[m]||"").split(", "),r=i(`${gs}Delay`),s=i(`${gs}Duration`),o=Fm(r,s),a=i(`${Qa}Delay`),l=i(`${Qa}Duration`),c=Fm(a,l);let u=null,h=0,f=0;e===gs?o>0&&(u=gs,h=o,f=s.length):e===Qa?c>0&&(u=Qa,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?gs:Qa:null,f=u?u===gs?s.length:l.length:0);const d=u===gs&&/\b(?:transform|all)(?:,|$)/.test(i(`${gs}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function Fm(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Om(t)+Om(n[i])))}function Om(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function km(n){return(n?n.ownerDocument:document).body.offsetHeight}function Pb(n,e,t){const i=n[Yl];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Bm=Symbol("_vod"),Db=Symbol("_vsh"),Lb=Symbol(""),Ib=/(?:^|;)\s*display\s*:/;function Nb(n,e,t){const i=n.style,r=tn(t);let s=!1;if(t&&!r){if(e)if(tn(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&au(i,a,"")}else for(const o in e)t[o]==null&&au(i,o,"");for(const o in t)o==="display"&&(s=!0),au(i,o,t[o])}else if(r){if(e!==t){const o=i[Lb];o&&(t+=";"+o),i.cssText=t,s=Ib.test(t)}}else e&&n.removeAttribute("style");Bm in n&&(n[Bm]=s?i.display:"",n[Db]&&(i.display="none"))}const zm=/\s*!important$/;function au(n,e,t){if(tt(t))t.forEach(i=>au(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Ub(n,e);zm.test(t)?n.setProperty(Oo(i),t.replace(zm,""),"important"):n[i]=t}}const Vm=["Webkit","Moz","ms"],Af={};function Ub(n,e){const t=Af[e];if(t)return t;let i=$i(e);if(i!=="filter"&&i in n)return Af[e]=i;i=Zu(i);for(let r=0;r<Vm.length;r++){const s=Vm[r]+i;if(s in n)return Af[e]=s}return e}const Hm="http://www.w3.org/1999/xlink";function Gm(n,e,t,i,r,s=zS(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Hm,e.slice(6,e.length)):n.setAttributeNS(Hm,e,t):t==null||s&&!Q_(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Dr(t)?String(t):t)}function Wm(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?av(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Q_(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function po(n,e,t,i){n.addEventListener(e,t,i)}function Fb(n,e,t,i){n.removeEventListener(e,t,i)}const Xm=Symbol("_vei");function Ob(n,e,t,i,r=null){const s=n[Xm]||(n[Xm]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=kb(e);if(i){const c=s[e]=Vb(i,r);po(n,a,c,l)}else o&&(Fb(n,a,o,l),s[e]=void 0)}}const qm=/(?:Once|Passive|Capture)$/;function kb(n){let e;if(qm.test(n)){e={};let i;for(;i=n.match(qm);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Oo(n.slice(2)),e]}let Cf=0;const Bb=Promise.resolve(),zb=()=>Cf||(Bb.then(()=>Cf=0),Cf=Date.now());function Vb(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;or(Hb(i,t.value),e,5,[i])};return t.value=n,t.attached=zb(),t}function Hb(n,e){if(tt(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const $m=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Gb=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?Pb(n,i,o):e==="style"?Nb(n,t,i):Yu(e)?op(e)||Ob(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Wb(n,e,i,o))?(Wm(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Gm(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!tn(i))?Wm(n,$i(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Gm(n,e,i,o))};function Wb(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&$m(e)&&ot(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return $m(e)&&tn(t)?!1:e in n}const Lu=n=>{const e=n.props["onUpdate:modelValue"]||!1;return tt(e)?t=>iu(e,t):e};function Xb(n){n.target.composing=!0}function Ym(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const xa=Symbol("_assign");function Km(n,e,t){return e&&(n=n.trim()),t&&(n=cp(n)),n}const Sc={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[xa]=Lu(r);const s=i||r.props&&r.props.type==="number";po(n,e?"change":"input",o=>{o.target.composing||n[xa](Km(n.value,t,s))}),(t||s)&&po(n,"change",()=>{n.value=Km(n.value,t,s)}),e||(po(n,"compositionstart",Xb),po(n,"compositionend",Ym),po(n,"change",Ym))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[xa]=Lu(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?cp(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},qb={deep:!0,created(n,e,t){n[xa]=Lu(t),po(n,"change",()=>{const i=n._modelValue,r=$b(n),s=n.checked,o=n[xa];if(tt(i)){const a=e0(i,r),l=a!==-1;if(s&&!l)o(i.concat(r));else if(!s&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Ku(i)){const a=new Set(i);s?a.add(r):a.delete(r),o(a)}else o(uv(n,s))})},mounted:jm,beforeUpdate(n,e,t){n[xa]=Lu(t),jm(n,e,t)}};function jm(n,{value:e,oldValue:t},i){n._modelValue=e;let r;if(tt(e))r=e0(e,i.props.value)>-1;else if(Ku(e))r=e.has(i.props.value);else{if(e===t)return;r=cc(e,uv(n,!0))}n.checked!==r&&(n.checked=r)}function $b(n){return"_value"in n?n._value:n.value}function uv(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const Yb=["ctrl","shift","alt","meta"],Kb={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Yb.some(t=>n[`${t}Key`]&&!e.includes(t))},jb=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((r,...s)=>{for(let o=0;o<e.length;o++){const a=Kb[e[o]];if(a&&a(r,e))return}return n(r,...s)}))},Zb=xn({patchProp:Gb},Mb);let Zm;function Jb(){return Zm||(Zm=nb(Zb))}const Qb=((...n)=>{const e=Jb().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=tM(i);if(!r)return;const s=e._component;!ot(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,eM(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function eM(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function tM(n){return tn(n)?document.querySelector(n):n}const ca=typeof document<"u";function fv(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function nM(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&fv(n.default)}const wt=Object.assign;function Rf(n,e){const t={};for(const i in e){const r=e[i];t[i]=ar(r)?r.map(n):n(r)}return t}const Cl=()=>{},ar=Array.isArray;function Jm(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}const hv=/#/g,iM=/&/g,rM=/\//g,sM=/=/g,oM=/\?/g,dv=/\+/g,aM=/%5B/g,lM=/%5D/g,pv=/%5E/g,cM=/%60/g,mv=/%7B/g,uM=/%7C/g,gv=/%7D/g,fM=/%20/g;function Tp(n){return n==null?"":encodeURI(""+n).replace(uM,"|").replace(aM,"[").replace(lM,"]")}function hM(n){return Tp(n).replace(mv,"{").replace(gv,"}").replace(pv,"^")}function kh(n){return Tp(n).replace(dv,"%2B").replace(fM,"+").replace(hv,"%23").replace(iM,"%26").replace(cM,"`").replace(mv,"{").replace(gv,"}").replace(pv,"^")}function dM(n){return kh(n).replace(sM,"%3D")}function pM(n){return Tp(n).replace(hv,"%23").replace(oM,"%3F")}function mM(n){return pM(n).replace(rM,"%2F")}function Kl(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const gM=/\/$/,_M=n=>n.replace(gM,"");function Pf(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,a>0?a:e.length),r=n(s.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=yM(i??e,t),{fullPath:i+s+o,path:i,query:r,hash:Kl(o)}}function vM(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Qm(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function xM(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&La(e.matched[i],t.matched[r])&&_v(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function La(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function _v(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var t in n)if(!SM(n[t],e[t]))return!1;return!0}function SM(n,e){return ar(n)?eg(n,e):ar(e)?eg(e,n):n?.valueOf()===e?.valueOf()}function eg(n,e){return ar(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function yM(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const _s={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Bh=(function(n){return n.pop="pop",n.push="push",n})({}),Df=(function(n){return n.back="back",n.forward="forward",n.unknown="",n})({});function bM(n){if(!n)if(ca){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),_M(n)}const MM=/^[^#]+#/;function EM(n,e){return n.replace(MM,"#")+e}function TM(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const lf=()=>({left:window.scrollX,top:window.scrollY});function wM(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=TM(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function tg(n,e){return(history.state?history.state.position-e:-1)+n}const zh=new Map;function AM(n,e){zh.set(n,e)}function CM(n){const e=zh.get(n);return zh.delete(n),e}function RM(n){return typeof n=="string"||n&&typeof n=="object"}function vv(n){return typeof n=="string"||typeof n=="symbol"}let Jt=(function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n})({});const xv=Symbol("");Jt.MATCHER_NOT_FOUND+"",Jt.NAVIGATION_GUARD_REDIRECT+"",Jt.NAVIGATION_ABORTED+"",Jt.NAVIGATION_CANCELLED+"",Jt.NAVIGATION_DUPLICATED+"";function Ia(n,e){return wt(new Error,{type:n,[xv]:!0},e)}function kr(n,e){return n instanceof Error&&xv in n&&(e==null||!!(n.type&e))}const PM=["params","query","hash"];function DM(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of PM)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}function LM(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<t.length;++i){const r=t[i].replace(dv," "),s=r.indexOf("="),o=Kl(s<0?r:r.slice(0,s)),a=s<0?null:Kl(r.slice(s+1));if(o in e){let l=e[o];ar(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function ng(n){let e="";for(let t in n){const i=n[t];if(t=dM(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(ar(i)?i.map(r=>r&&kh(r)):[i&&kh(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function IM(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=ar(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const NM=Symbol(""),ig=Symbol(""),cf=Symbol(""),wp=Symbol(""),Vh=Symbol("");function el(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Cs(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(Ia(Jt.NAVIGATION_ABORTED,{from:t,to:e})):f instanceof Error?l(f):RM(f)?l(Ia(Jt.NAVIGATION_GUARD_REDIRECT,{from:e,to:f})):(o&&i.enterCallbacks[r]===o&&typeof f=="function"&&o.push(f),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let h=Promise.resolve(u);n.length<3&&(h=h.then(c)),h.catch(f=>l(f))})}function Lf(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(fv(l)){const c=(l.__vccOpts||l)[e];c&&s.push(Cs(c,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=nM(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const f=(h.__vccOpts||h)[e];return f&&Cs(f,t,i,o,a,r)()}))}}return s}function UM(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>La(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>La(c,l))||r.push(l))}return[t,i,r]}let FM=()=>location.protocol+"//"+location.host;function Sv(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,a=r.slice(o);return a[0]!=="/"&&(a="/"+a),Qm(a,"")}return Qm(t,n)+i+r}function OM(n,e,t,i){let r=[],s=[],o=null;const a=({state:f})=>{const d=Sv(n,location),m=t.value,_=e.value;let p=0;if(f){if(t.value=d,e.value=f,o&&o===m){o=null;return}p=_?f.position-_.position:0}else i(d);r.forEach(g=>{g(t.value,m,{delta:p,type:Bh.pop,direction:p?p>0?Df.forward:Df.back:Df.unknown})})};function l(){o=t.value}function c(f){r.push(f);const d=()=>{const m=r.indexOf(f);m>-1&&r.splice(m,1)};return s.push(d),d}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(wt({},f.state,{scroll:lf()}),"")}}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:h}}function rg(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?lf():null}}function kM(n){const{history:e,location:t}=window,i={value:Sv(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=n.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+l:FM()+n+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](f)}}function o(l,c){s(l,wt({},e.state,rg(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function a(l,c){const u=wt({},r.value,e.state,{forward:l,scroll:lf()});s(u.current,u,!0),s(l,wt({},rg(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function BM(n){n=bM(n);const e=kM(n),t=OM(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=wt({location:"",base:n,go:i,createHref:EM.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function zM(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),BM(n)}let _o=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n})({});var gn=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n})(gn||{});const VM={type:_o.Static,value:""},HM=/[a-zA-Z0-9_]/;function GM(n){if(!n)return[[]];if(n==="/")return[[VM]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=gn.Static,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function h(){c&&(t===gn.Static?s.push({type:_o.Static,value:c}):t===gn.Param||t===gn.ParamRegExp||t===gn.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:_o.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==gn.ParamRegExp){i=t,t=gn.EscapeNext;continue}switch(t){case gn.Static:l==="/"?(c&&h(),o()):l===":"?(h(),t=gn.Param):f();break;case gn.EscapeNext:f(),t=i;break;case gn.Param:l==="("?t=gn.ParamRegExp:HM.test(l)?f():(h(),t=gn.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case gn.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=gn.ParamRegExpEnd:u+=l;break;case gn.ParamRegExpEnd:h(),t=gn.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===gn.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}const sg="[^/]+?",WM={sensitive:!1,strict:!1,start:!0,end:!0};var Jn=(function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n})(Jn||{});const XM=/[.+*?^${}()[\]/\\]/g;function qM(n,e){const t=wt({},WM,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[Jn.Root];t.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=Jn.Segment+(t.sensitive?Jn.BonusCaseSensitive:0);if(f.type===_o.Static)h||(r+="/"),r+=f.value.replace(XM,"\\$&"),d+=Jn.Static;else if(f.type===_o.Param){const{value:m,repeatable:_,optional:p,regexp:g}=f;s.push({name:m,repeatable:_,optional:p});const y=g||sg;if(y!==sg){d+=Jn.BonusCustomRegExp;try{`${y}`}catch(S){throw new Error(`Invalid custom RegExp for param "${m}" (${y}): `+S.message)}}let M=_?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;h||(M=p&&c.length<2?`(?:/${M})`:"/"+M),p&&(M+="?"),r+=M,d+=Jn.Dynamic,p&&(d+=Jn.BonusOptional),_&&(d+=Jn.BonusRepeatable),y===".*"&&(d+=Jn.BonusWildcard)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=Jn.BonusStrict}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",m=s[f-1];h[m.name]=d&&m.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===_o.Static)u+=d.value;else if(d.type===_o.Param){const{value:m,repeatable:_,optional:p}=d,g=m in c?c[m]:"";if(ar(g)&&!_)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const y=ar(g)?g.join("/"):g;if(!y)if(p)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=y}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function $M(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===Jn.Static+Jn.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===Jn.Static+Jn.Segment?1:-1:0}function yv(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=$M(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(og(i))return 1;if(og(r))return-1}return r.length-i.length}function og(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const YM={strict:!1,end:!0,sensitive:!1};function KM(n,e,t){const i=qM(GM(n.path),t),r=wt(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function jM(n,e){const t=[],i=new Map;e=Jm(YM,e);function r(h){return i.get(h)}function s(h,f,d){const m=!d,_=lg(h);_.aliasOf=d&&d.record;const p=Jm(e,h),g=[_];if("alias"in h){const S=typeof h.alias=="string"?[h.alias]:h.alias;for(const w of S)g.push(lg(wt({},_,{components:d?d.record.components:_.components,path:w,aliasOf:d?d.record:_})))}let y,M;for(const S of g){const{path:w}=S;if(f&&w[0]!=="/"){const T=f.record.path,E=T[T.length-1]==="/"?"":"/";S.path=f.record.path+(w&&E+w)}if(y=KM(S,f,p),d?d.alias.push(y):(M=M||y,M!==y&&M.alias.push(y),m&&h.name&&!cg(y)&&o(h.name)),bv(y)&&l(y),_.children){const T=_.children;for(let E=0;E<T.length;E++)s(T[E],y,d&&d.children[E])}d=d||y}return M?()=>{o(M)}:Cl}function o(h){if(vv(h)){const f=i.get(h);f&&(i.delete(h),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(h);f>-1&&(t.splice(f,1),h.record.name&&i.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return t}function l(h){const f=QM(h,t);t.splice(f,0,h),h.record.name&&!cg(h)&&i.set(h.record.name,h)}function c(h,f){let d,m={},_,p;if("name"in h&&h.name){if(d=i.get(h.name),!d)throw Ia(Jt.MATCHER_NOT_FOUND,{location:h});p=d.record.name,m=wt(ag(f.params,d.keys.filter(M=>!M.optional).concat(d.parent?d.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),h.params&&ag(h.params,d.keys.map(M=>M.name))),_=d.stringify(m)}else if(h.path!=null)_=h.path,d=t.find(M=>M.re.test(_)),d&&(m=d.parse(_),p=d.record.name);else{if(d=f.name?i.get(f.name):t.find(M=>M.re.test(f.path)),!d)throw Ia(Jt.MATCHER_NOT_FOUND,{location:h,currentLocation:f});p=d.record.name,m=wt({},f.params,h.params),_=d.stringify(m)}const g=[];let y=d;for(;y;)g.unshift(y.record),y=y.parent;return{name:p,path:_,params:m,matched:g,meta:JM(g)}}n.forEach(h=>s(h));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function ag(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function lg(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:ZM(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function ZM(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function cg(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function JM(n){return n.reduce((e,t)=>wt(e,t.meta),{})}function QM(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;yv(n,e[s])<0?i=s:t=s+1}const r=e1(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function e1(n){let e=n;for(;e=e.parent;)if(bv(e)&&yv(n,e)===0)return e}function bv({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function ug(n){const e=rr(cf),t=rr(wp),i=An(()=>{const l=Se(n.to);return e.resolve(l)}),r=An(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex(La.bind(null,u));if(f>-1)return f;const d=fg(l[c-2]);return c>1&&fg(u)===d&&h[h.length-1].path!==d?h.findIndex(La.bind(null,l[c-2])):f}),s=An(()=>r.value>-1&&s1(t.params,i.value.params)),o=An(()=>r.value>-1&&r.value===t.matched.length-1&&_v(t.params,i.value.params));function a(l={}){if(r1(l)){const c=e[Se(n.replace)?"replace":"push"](Se(n.to)).catch(Cl);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:An(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function t1(n){return n.length===1?n[0]:n}const n1=vp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ug,setup(n,{slots:e}){const t=qa(ug(n)),{options:i}=rr(cf),r=An(()=>({[hg(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[hg(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&t1(e.default(t));return n.custom?s:Ep("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),i1=n1;function r1(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function s1(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!ar(r)||r.length!==i.length||i.some((s,o)=>s.valueOf()!==r[o].valueOf()))return!1}return!0}function fg(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const hg=(n,e,t)=>n??e??t,o1=vp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=rr(Vh),r=An(()=>n.route||i.value),s=rr(ig,0),o=An(()=>{let c=Se(s);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=An(()=>r.value.matched[o.value]);ru(ig,An(()=>o.value+1)),ru(NM,a),ru(Vh,r);const l=qe();return Eo(()=>[l.value,a.value,n.name],([c,u,h],[f,d,m])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!La(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,h=a.value,f=h&&h.components[u];if(!f)return dg(t.default,{Component:f,route:c});const d=h.props[u],m=d?d===!0?c.params:typeof d=="function"?d(c):d:null,p=Ep(f,wt({},m,e,{onVnodeUnmounted:g=>{g.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return dg(t.default,{Component:p,route:c})||p}}});function dg(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const a1=o1;function l1(n){const e=jM(n.routes,n),t=n.parseQuery||LM,i=n.stringifyQuery||ng,r=n.history,s=el(),o=el(),a=el(),l=fo(_s);let c=_s;ca&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Rf.bind(null,H=>""+H),h=Rf.bind(null,mM),f=Rf.bind(null,Kl);function d(H,j){let ue,pe;return vv(H)?(ue=e.getRecordMatcher(H),pe=j):pe=H,e.addRoute(pe,ue)}function m(H){const j=e.getRecordMatcher(H);j&&e.removeRoute(j)}function _(){return e.getRoutes().map(H=>H.record)}function p(H){return!!e.getRecordMatcher(H)}function g(H,j){if(j=wt({},j||l.value),typeof H=="string"){const V=Pf(t,H,j.path),J=e.resolve({path:V.path},j),Z=r.createHref(V.fullPath);return wt(V,J,{params:f(J.params),hash:Kl(V.hash),redirectedFrom:void 0,href:Z})}let ue;if(H.path!=null)ue=wt({},H,{path:Pf(t,H.path,j.path).path});else{const V=wt({},H.params);for(const J in V)V[J]==null&&delete V[J];ue=wt({},H,{params:h(V)}),j.params=h(j.params)}const pe=e.resolve(ue,j),Me=H.hash||"";pe.params=u(f(pe.params));const U=vM(i,wt({},H,{hash:hM(Me),path:pe.path})),N=r.createHref(U);return wt({fullPath:U,hash:Me,query:i===ng?IM(H.query):H.query||{}},pe,{redirectedFrom:void 0,href:N})}function y(H){return typeof H=="string"?Pf(t,H,l.value.path):wt({},H)}function M(H,j){if(c!==H)return Ia(Jt.NAVIGATION_CANCELLED,{from:j,to:H})}function S(H){return E(H)}function w(H){return S(wt(y(H),{replace:!0}))}function T(H,j){const ue=H.matched[H.matched.length-1];if(ue&&ue.redirect){const{redirect:pe}=ue;let Me=typeof pe=="function"?pe(H,j):pe;return typeof Me=="string"&&(Me=Me.includes("?")||Me.includes("#")?Me=y(Me):{path:Me},Me.params={}),wt({query:H.query,hash:H.hash,params:Me.path!=null?{}:H.params},Me)}}function E(H,j){const ue=c=g(H),pe=l.value,Me=H.state,U=H.force,N=H.replace===!0,V=T(ue,pe);if(V)return E(wt(y(V),{state:typeof V=="object"?wt({},Me,V.state):Me,force:U,replace:N}),j||ue);const J=ue;J.redirectedFrom=j;let Z;return!U&&xM(i,pe,ue)&&(Z=Ia(Jt.NAVIGATION_DUPLICATED,{to:J,from:pe}),xe(pe,pe,!0,!1)),(Z?Promise.resolve(Z):D(J,pe)).catch(F=>kr(F)?kr(F,Jt.NAVIGATION_GUARD_REDIRECT)?F:k(F):te(F,J,pe)).then(F=>{if(F){if(kr(F,Jt.NAVIGATION_GUARD_REDIRECT))return E(wt({replace:N},y(F.to),{state:typeof F.to=="object"?wt({},Me,F.to.state):Me,force:U}),j||J)}else F=I(J,pe,!0,N,Me);return P(J,pe,F),F})}function v(H,j){const ue=M(H,j);return ue?Promise.reject(ue):Promise.resolve()}function x(H){const j=$e.values().next().value;return j&&typeof j.runWithContext=="function"?j.runWithContext(H):H()}function D(H,j){let ue;const[pe,Me,U]=UM(H,j);ue=Lf(pe.reverse(),"beforeRouteLeave",H,j);for(const V of pe)V.leaveGuards.forEach(J=>{ue.push(Cs(J,H,j))});const N=v.bind(null,H,j);return ue.push(N),re(ue).then(()=>{ue=[];for(const V of s.list())ue.push(Cs(V,H,j));return ue.push(N),re(ue)}).then(()=>{ue=Lf(Me,"beforeRouteUpdate",H,j);for(const V of Me)V.updateGuards.forEach(J=>{ue.push(Cs(J,H,j))});return ue.push(N),re(ue)}).then(()=>{ue=[];for(const V of U)if(V.beforeEnter)if(ar(V.beforeEnter))for(const J of V.beforeEnter)ue.push(Cs(J,H,j));else ue.push(Cs(V.beforeEnter,H,j));return ue.push(N),re(ue)}).then(()=>(H.matched.forEach(V=>V.enterCallbacks={}),ue=Lf(U,"beforeRouteEnter",H,j,x),ue.push(N),re(ue))).then(()=>{ue=[];for(const V of o.list())ue.push(Cs(V,H,j));return ue.push(N),re(ue)}).catch(V=>kr(V,Jt.NAVIGATION_CANCELLED)?V:Promise.reject(V))}function P(H,j,ue){a.list().forEach(pe=>x(()=>pe(H,j,ue)))}function I(H,j,ue,pe,Me){const U=M(H,j);if(U)return U;const N=j===_s,V=ca?history.state:{};ue&&(pe||N?r.replace(H.fullPath,wt({scroll:N&&V&&V.scroll},Me)):r.push(H.fullPath,Me)),l.value=H,xe(H,j,ue,N),k()}let G;function $(){G||(G=r.listen((H,j,ue)=>{if(!je.listening)return;const pe=g(H),Me=T(pe,je.currentRoute.value);if(Me){E(wt(Me,{replace:!0,force:!0}),pe).catch(Cl);return}c=pe;const U=l.value;ca&&AM(tg(U.fullPath,ue.delta),lf()),D(pe,U).catch(N=>kr(N,Jt.NAVIGATION_ABORTED|Jt.NAVIGATION_CANCELLED)?N:kr(N,Jt.NAVIGATION_GUARD_REDIRECT)?(E(wt(y(N.to),{force:!0}),pe).then(V=>{kr(V,Jt.NAVIGATION_ABORTED|Jt.NAVIGATION_DUPLICATED)&&!ue.delta&&ue.type===Bh.pop&&r.go(-1,!1)}).catch(Cl),Promise.reject()):(ue.delta&&r.go(-ue.delta,!1),te(N,pe,U))).then(N=>{N=N||I(pe,U,!1),N&&(ue.delta&&!kr(N,Jt.NAVIGATION_CANCELLED)?r.go(-ue.delta,!1):ue.type===Bh.pop&&kr(N,Jt.NAVIGATION_ABORTED|Jt.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),P(pe,U,N)}).catch(Cl)}))}let X=el(),W=el(),B;function te(H,j,ue){k(H);const pe=W.list();return pe.length?pe.forEach(Me=>Me(H,j,ue)):console.error(H),Promise.reject(H)}function le(){return B&&l.value!==_s?Promise.resolve():new Promise((H,j)=>{X.add([H,j])})}function k(H){return B||(B=!H,$(),X.list().forEach(([j,ue])=>H?ue(H):j()),X.reset()),H}function xe(H,j,ue,pe){const{scrollBehavior:Me}=n;if(!ca||!Me)return Promise.resolve();const U=!ue&&CM(tg(H.fullPath,0))||(pe||!ue)&&history.state&&history.state.scroll||null;return tf().then(()=>Me(H,j,U)).then(N=>N&&wM(N)).catch(N=>te(N,H,j))}const de=H=>r.go(H);let ke;const $e=new Set,je={currentRoute:l,listening:!0,addRoute:d,removeRoute:m,clearRoutes:e.clearRoutes,hasRoute:p,getRoutes:_,resolve:g,options:n,push:S,replace:w,go:de,back:()=>de(-1),forward:()=>de(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:W.add,isReady:le,install(H){H.component("RouterLink",i1),H.component("RouterView",a1),H.config.globalProperties.$router=je,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>Se(l)}),ca&&!ke&&l.value===_s&&(ke=!0,S(r.location).catch(pe=>{}));const j={};for(const pe in _s)Object.defineProperty(j,pe,{get:()=>l.value[pe],enumerable:!0});H.provide(cf,je),H.provide(wp,_0(j)),H.provide(Vh,l);const ue=H.unmount;$e.add(H),H.unmount=function(){$e.delete(H),$e.size<1&&(c=_s,G&&G(),G=null,l.value=_s,ke=!1,B=!1),ue()}}};function re(H){return H.reduce((j,ue)=>j.then(()=>x(ue)),Promise.resolve())}return je}function c1(){return rr(cf)}function Mv(n){return rr(wp)}function Xr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Ev(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}var Pi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Na={duration:.5,overwrite:!1,delay:0},Ap,Ln,qt,Gi=1e8,zt=1/Gi,Hh=Math.PI*2,u1=Hh/4,f1=0,Tv=Math.sqrt,h1=Math.cos,d1=Math.sin,Cn=function(e){return typeof e=="string"},en=function(e){return typeof e=="function"},as=function(e){return typeof e=="number"},Cp=function(e){return typeof e>"u"},Lr=function(e){return typeof e=="object"},fi=function(e){return e!==!1},Rp=function(){return typeof window<"u"},yc=function(e){return en(e)||Cn(e)},wv=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},$n=Array.isArray,p1=/random\([^)]+\)/g,m1=/,\s*/g,pg=/(?:-?\.?\d|\.)+/gi,Av=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ha=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,If=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Cv=/[+-]=-?[.\d]+/,g1=/[^,'"\[\]\s]+/gi,_1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Yt,gr,Gh,Pp,Li={},Iu={},Rv,Pv=function(e){return(Iu=Ua(e,Li))&&gi},Dp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},jl=function(e,t){return!t&&console.warn(e)},Dv=function(e,t){return e&&(Li[e]=t)&&Iu&&(Iu[e]=t)||Li},Zl=function(){return 0},v1={suppressEvents:!0,isStart:!0,kill:!1},lu={suppressEvents:!0,kill:!1},x1={suppressEvents:!0},Lp={},Os=[],Wh={},Lv,bi={},Nf={},mg=30,cu=[],Ip="",Np=function(e){var t=e[0],i,r;if(Lr(t)||en(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=cu.length;r--&&!cu[r].targetTest(t););i=cu[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new nx(e[r],i)))||e.splice(r,1);return e},To=function(e){return e._gsap||Np(Wi(e))[0]._gsap},Iv=function(e,t,i){return(i=e[t])&&en(i)?e[t]():Cp(i)&&e.getAttribute&&e.getAttribute(t)||i},hi=function(e,t){return(e=e.split(",")).forEach(t)||e},sn=function(e){return Math.round(e*1e5)/1e5||0},$t=function(e){return Math.round(e*1e7)/1e7||0},Sa=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},S1=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Nu=function(){var e=Os.length,t=Os.slice(0),i,r;for(Wh={},Os.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Up=function(e){return!!(e._initted||e._startAt||e.add)},Nv=function(e,t,i,r){Os.length&&!Ln&&Nu(),e.render(t,i,!!(Ln&&t<0&&Up(e))),Os.length&&!Ln&&Nu()},Uv=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(g1).length<2?t:Cn(e)?e.trim():e},Fv=function(e){return e},Ii=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},y1=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ua=function(e,t){for(var i in t)e[i]=t[i];return e},gg=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Lr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Uu=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Rl=function(e){var t=e.parent||Yt,i=e.keyframes?y1($n(e.keyframes)):Ii;if(fi(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},b1=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Ov=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},uf=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Vs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},wo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},M1=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Xh=function(e,t,i,r){return e._startAt&&(Ln?e._startAt.revert(lu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},E1=function n(e){return!e||e._ts&&n(e.parent)},_g=function(e){return e._repeat?Fa(e._tTime,e=e.duration()+e._rDelay)*e:0},Fa=function(e,t){var i=Math.floor(e=$t(e/t));return e&&i===e?i-1:i},Fu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ff=function(e){return e._end=$t(e._start+(e._tDur/Math.abs(e._ts||e._rts||zt)||0))},hf=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=$t(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ff(e),i._dirty||wo(i,e)),e},kv=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Fu(e.rawTime(),t),(!t._dur||hc(0,t.totalDuration(),i)-t._tTime>zt)&&t.render(i,!0)),wo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-zt}},Sr=function(e,t,i,r){return t.parent&&Vs(t),t._start=$t((as(i)?i:i||e!==Yt?ki(e,i,t):e._time)+t._delay),t._end=$t(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Ov(e,t,"_first","_last",e._sort?"_start":0),qh(t)||(e._recent=t),r||kv(e,t),e._ts<0&&hf(e,e._tTime),e},Bv=function(e,t){return(Li.ScrollTrigger||Dp("scrollTrigger",t))&&Li.ScrollTrigger.create(t,e)},zv=function(e,t,i,r,s){if(Op(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Ln&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Lv!==Ei.frame)return Os.push(e),e._lazy=[s,r],1},T1=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},qh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},w1=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&T1(e)&&!(!e._initted&&qh(e))||(e._ts<0||e._dp._ts<0)&&!qh(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=hc(0,e._tDur,t),u=Fa(l,a),e._yoyo&&u&1&&(o=1-o),u!==Fa(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Ln||r||e._zTime===zt||!t&&e._zTime){if(!e._initted&&zv(e,t,r,i,l))return;for(h=e._zTime,e._zTime=t||(i?zt:0),i||(i=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Xh(e,t,i,!0),e._onUpdate&&!i&&Ci(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Ci(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Vs(e,1),!i&&!Ln&&(Ci(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},A1=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Oa=function(e,t,i,r){var s=e._repeat,o=$t(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:$t(o*(s+1)+e._rDelay*s):o,a>0&&!r&&hf(e,e._tTime=e._tDur*a),e.parent&&ff(e),i||wo(e.parent,e),e},vg=function(e){return e instanceof ri?wo(e):Oa(e,e._dur)},C1={_start:0,endTime:Zl,totalDuration:Zl},ki=function n(e,t,i){var r=e.labels,s=e._recent||C1,o=e.duration()>=Gi?s.endTime(!1):e._dur,a,l,c;return Cn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*($n(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Pl=function(e,t,i){var r=as(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=fi(l.vars.inherit)&&l.parent;o.immediateRender=fi(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new fn(t[0],o,t[s+1])},qs=function(e,t){return e||e===0?t(e):t},hc=function(e,t,i){return i<e?e:i>t?t:i},Hn=function(e,t){return!Cn(e)||!(t=_1.exec(e))?"":t[1]},R1=function(e,t,i){return qs(i,function(r){return hc(e,t,r)})},$h=[].slice,Vv=function(e,t){return e&&Lr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Lr(e[0]))&&!e.nodeType&&e!==gr},P1=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Cn(r)&&!t||Vv(r,1)?(s=i).push.apply(s,Wi(r)):i.push(r)})||i},Wi=function(e,t,i){return qt&&!t&&qt.selector?qt.selector(e):Cn(e)&&!i&&(Gh||!ka())?$h.call((t||Pp).querySelectorAll(e),0):$n(e)?P1(e,i):Vv(e)?$h.call(e,0):e?[e]:[]},Yh=function(e){return e=Wi(e)[0]||jl("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Wi(t,i.querySelectorAll?i:i===e?jl("Invalid scope")||Pp.createElement("div"):e)}},Hv=function(e){return e.sort(function(){return .5-Math.random()})},Gv=function(e){if(en(e))return e;var t=Lr(e)?e:{each:e},i=Ao(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,h=r;return Cn(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],h=r[1]),function(f,d,m){var _=(m||t).length,p=o[_],g,y,M,S,w,T,E,v,x;if(!p){if(x=t.grid==="auto"?0:(t.grid||[1,Gi])[1],!x){for(E=-Gi;E<(E=m[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(p=o[_]=[],g=l?Math.min(x,_)*u-.5:r%x,y=x===Gi?0:l?_*h/x-.5:r/x|0,E=0,v=Gi,T=0;T<_;T++)M=T%x-g,S=y-(T/x|0),p[T]=w=c?Math.abs(c==="y"?S:M):Tv(M*M+S*S),w>E&&(E=w),w<v&&(v=w);r==="random"&&Hv(p),p.max=E-v,p.min=v,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(r==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Hn(t.amount||t.each)||0,i=i&&_<0?Qv(i):i}return _=(p[f]-p.min)/p.max||0,$t(p.b+(i?i(_):_)*p.v)+p.u}},Kh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=$t(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(as(i)?0:Hn(i))}},Wv=function(e,t){var i=$n(e),r,s;return!i&&Lr(e)&&(r=i=e.radius||Gi,e.values?(e=Wi(e.values),(s=!as(e[0]))&&(r*=r)):e=Kh(e.increment)),qs(t,i?en(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Gi,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!r||c<=r?e[u]:o,s||u===o||as(o)?u:u+Hn(o)}:Kh(e))},Xv=function(e,t,i,r){return qs($n(e)?!t:i===!0?!!(i=0):!r,function(){return $n(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},D1=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},L1=function(e,t){return function(i){return e(parseFloat(i))+(t||Hn(i))}},I1=function(e,t,i){return $v(e,t,0,1,i)},qv=function(e,t,i){return qs(i,function(r){return e[~~t(r)]})},N1=function n(e,t,i){var r=t-e;return $n(e)?qv(e,n(0,e.length),t):qs(i,function(s){return(r+(s-e)%r)%r+e})},U1=function n(e,t,i){var r=t-e,s=r*2;return $n(e)?qv(e,n(0,e.length-1),t):qs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Jl=function(e){return e.replace(p1,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(m1);return Xv(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},$v=function(e,t,i,r,s){var o=t-e,a=r-i;return qs(s,function(l){return i+((l-e)/o*a||0)})},F1=function n(e,t,i,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=Cn(e),a={},l,c,u,h,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if($n(e)&&!$n(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(n(e[c-1],e[c]));h--,s=function(m){m*=h;var _=Math.min(f,~~m);return u[_](m-_)},i=t}else r||(e=Ua($n(e)?[]:{},e));if(!u){for(l in t)Fp.call(a,e,l,"get",t[l]);s=function(m){return zp(m,a)||(o?e.p:e)}}}return qs(i,s)},xg=function(e,t,i){var r=e.labels,s=Gi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ci=function(e,t,i){var r=e.vars,s=r[t],o=qt,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&Os.length&&Nu(),a&&(qt=a),u=l?s.apply(c,l):s.call(c),qt=o,u},hl=function(e){return Vs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ln),e.progress()<1&&Ci(e,"onInterrupt"),e},da,Yv=[],Kv=function(e){if(e)if(e=!e.name&&e.default||e,Rp()||e.headless){var t=e.name,i=en(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Zl,render:zp,add:Fp,kill:J1,modifier:Z1,rawVars:0},o={targetTest:0,get:0,getSetter:Bp,aliases:{},register:0};if(ka(),e!==r){if(bi[t])return;Ii(r,Ii(Uu(e,s),o)),Ua(r.prototype,Ua(s,Uu(e,o))),bi[r.prop=t]=r,e.targetTest&&(cu.push(r),Lp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Dv(t,r),e.register&&e.register(gi,r,di)}else Yv.push(e)},Bt=255,dl={aqua:[0,Bt,Bt],lime:[0,Bt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Bt],navy:[0,0,128],white:[Bt,Bt,Bt],olive:[128,128,0],yellow:[Bt,Bt,0],orange:[Bt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Bt,0,0],pink:[Bt,192,203],cyan:[0,Bt,Bt],transparent:[Bt,Bt,Bt,0]},Uf=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Bt+.5|0},jv=function(e,t,i){var r=e?as(e)?[e>>16,e>>8&Bt,e&Bt]:0:dl.black,s,o,a,l,c,u,h,f,d,m;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),dl[e])r=dl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Bt,r&Bt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Bt,e&Bt]}else if(e.substr(0,3)==="hsl"){if(r=m=e.match(pg),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Uf(l+1/3,s,o),r[1]=Uf(l,s,o),r[2]=Uf(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Av),i&&r.length<4&&(r[3]=1),r}else r=e.match(pg)||dl.transparent;r=r.map(Number)}return t&&!m&&(s=r[0]/Bt,o=r[1]/Bt,a=r[2]/Bt,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},Zv=function(e){var t=[],i=[],r=-1;return e.split(ks).forEach(function(s){var o=s.match(ha)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},Sg=function(e,t,i){var r="",s=(e+r).match(ks),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=jv(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(u=Zv(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(ks,"1").split(ha),h=c.length-1;a<h;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(ks),h=c.length-1;a<h;a++)r+=c[a]+s[a];return r+c[h]},ks=(function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in dl)n+="|"+e+"\\b";return new RegExp(n+")","gi")})(),O1=/hsl[a]?\(/,Jv=function(e){var t=e.join(" "),i;if(ks.lastIndex=0,ks.test(t))return i=O1.test(t),e[1]=Sg(e[1],i),e[0]=Sg(e[0],i,Zv(e[1])),!0},Ql,Ei=(function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,h,f,d,m=function _(p){var g=n()-r,y=p===!0,M,S,w,T;if((g>e||g<0)&&(i+=g-t),r+=g,w=r-i,M=w-o,(M>0||y)&&(T=++h.frame,f=w-h.time*1e3,h.time=w=w/1e3,o+=M+(M>=s?4:s-M),S=1),y||(l=c(_)),S)for(d=0;d<a.length;d++)a[d](w,f,T,p)};return h={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Rv&&(!Gh&&Rp()&&(gr=Gh=window,Pp=gr.document||{},Li.gsap=gi,(gr.gsapVersions||(gr.gsapVersions=[])).push(gi.version),Pv(Iu||gr.GreenSockGlobals||!gr.gsap&&gr||{}),Yv.forEach(Kv)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},Ql=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ql=0,c=Zl},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){s=1e3/(p||240),o=h.time*1e3+s},add:function(p,g,y){var M=g?function(S,w,T,E){p(S,w,T,E),h.remove(M)}:p;return h.remove(p),a[y?"unshift":"push"](M),ka(),M},remove:function(p,g){~(g=a.indexOf(p))&&a.splice(g,1)&&d>=g&&d--},_listeners:a},h})(),ka=function(){return!Ql&&Ei.wake()},vt={},k1=/^[\d.\-M][\d.\-,\s]/,B1=/["']/g,z1=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(B1,"").trim():+c,r=l.substr(a+1).trim();return t},V1=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},H1=function(e){var t=(e+"").split("("),i=vt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[z1(t[1])]:V1(e).split(",").map(Uv)):vt._CE&&k1.test(e)?vt._CE("",e):i},Qv=function(e){return function(t){return 1-e(1-t)}},ex=function n(e,t){for(var i=e._first,r;i;)i instanceof ri?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},Ao=function(e,t){return e&&(en(e)?e:vt[e]||H1(e))||t},Bo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return hi(e,function(a){vt[a]=Li[a]=s,vt[o=a.toLowerCase()]=i;for(var l in s)vt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=vt[a+"."+l]=s[l]}),s},tx=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ff=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Hh*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*d1((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:tx(a);return s=Hh/s,l.config=function(c,u){return n(e,c,u)},l},Of=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:tx(i);return r.config=function(s){return n(e,s)},r};hi("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Bo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});vt.Linear.easeNone=vt.none=vt.Linear.easeIn;Bo("Elastic",Ff("in"),Ff("out"),Ff());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Bo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Bo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Bo("Circ",function(n){return-(Tv(1-n*n)-1)});Bo("Sine",function(n){return n===1?1:-h1(n*u1)+1});Bo("Back",Of("in"),Of("out"),Of());vt.SteppedEase=vt.steps=Li.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-zt;return function(a){return((r*hc(0,o,a)|0)+s)*i}}};Na.ease=vt["quad.out"];hi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Ip+=n+","+n+"Params,"});var nx=function(e,t){this.id=f1++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Iv,this.set=t?t.getSetter:Bp},ec=(function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Oa(this,+t.duration,1,1),this.data=t.data,qt&&(this._ctx=qt,qt.data.push(this)),Ql||Ei.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Oa(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(ka(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(hf(this,i),!s._dp||s.parent||kv(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Sr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===zt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Nv(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+_g(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+_g(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Fa(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-zt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Fu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-zt?0:this._rts,this.totalTime(hc(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),ff(this),M1(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ka(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==zt&&(this._tTime-=zt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=$t(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Sr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(fi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Fu(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=x1);var r=Ln;return Ln=i,Up(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Ln=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,vg(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,vg(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(ki(this,i),fi(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,fi(r)),this._dur||(this._zTime=-zt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-zt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-zt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-zt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=en(i)?i:Fv,l=function(){var u=r.then;r.then=null,s&&s(),en(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){hl(this)},n})();Ii(ec.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-zt,_prom:0,_ps:!1,_rts:1});var ri=(function(n){Ev(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=fi(i.sortChildren),Yt&&Sr(i.parent||Yt,Xr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Bv(Xr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Pl(0,arguments,this),this},t.from=function(r,s,o){return Pl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Pl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Rl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new fn(r,s,ki(this,o),1),this},t.call=function(r,s,o){return Sr(this,fn.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new fn(r,o,ki(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Rl(o).immediateRender=fi(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,h){return a.startAt=o,Rl(a).immediateRender=fi(a.immediateRender),this.staggerTo(r,s,a,l,c,u,h)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:$t(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,d,m,_,p,g,y,M,S,w,T,E;if(this!==Yt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,S=this._start,M=this._ts,g=!M,h&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(f=$t(u%p),u===l?(_=this._repeat,f=c):(w=$t(u/p),_=~~w,_&&_===w&&(f=c,_--),f>c&&(f=c)),w=Fa(this._tTime,p),!a&&this._tTime&&w!==_&&this._tTime-w*p-this._dur<=0&&(w=_),T&&_&1&&(f=c-f,E=1),_!==w&&!this._lock){var v=T&&w&1,x=v===(T&&_&1);if(_<w&&(v=!v),a=v?0:u%c?c:u,this._lock=1,this.render(a||(E?0:$t(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Ci(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,w=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=v?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;ex(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=A1(this,$t(a),$t(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!w&&(Ci(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(d=this._first;d;){if(m=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!g){y=0,m&&(u+=this._zTime=-zt);break}}d=m}else{d=this._last;for(var D=r<0?r:f;d;){if(m=d._prev,(d._act||D<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(D-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(D-d._start)*d._ts,s,o||Ln&&Up(d)),f!==this._time||!this._ts&&!g){y=0,m&&(u+=this._zTime=D?-zt:zt);break}}d=m}}if(y&&!s&&(this.pause(),y.render(f>=a?0:-zt)._zTime=f>=a?1:-1,this._ts))return this._start=S,ff(this),this.render(r,s,o);this._onUpdate&&!s&&Ci(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Vs(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Ci(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(as(s)||(s=ki(this,s,r)),!(r instanceof ec)){if($n(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Cn(r))return this.addLabel(r,s);if(en(r))r=fn.delayedCall(0,r);else return this}return this!==r?Sr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Gi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof fn?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Cn(r)?this.removeLabel(r):en(r)?this.killTweensOf(r):(r.parent===this&&uf(this,r),r===this._recent&&(this._recent=this._last),wo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=$t(Ei.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=ki(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=fn.delayedCall(0,s||Zl,o);return a.data="isPause",this._hasPause=1,Sr(this,a,ki(this,r))},t.removePause=function(r){var s=this._first;for(r=ki(this,r);s;)s._start===r&&s.data==="isPause"&&Vs(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Ps!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Wi(r),l=this._first,c=as(s),u;l;)l instanceof fn?S1(l._targets,a)&&(c?(!Ps||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=ki(o,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,m=fn.to(o,Ii({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||zt,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==p&&Oa(m,p,0,1).render(m._time,!0,!0),d=1}u&&u.apply(m,h||[])}},s));return f?m.render(0):m},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Ii({startAt:{time:ki(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),xg(this,ki(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),xg(this,ki(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+zt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=$t(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return wo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),wo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Gi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Sr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=$t(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Oa(o,o===Yt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Yt._ts&&(Nv(Yt,Fu(r,Yt)),Lv=Ei.frame),Ei.frame>=mg){mg+=Pi.autoSleep||120;var s=Yt._first;if((!s||!s._ts)&&Pi.autoSleep&&Ei._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ei.sleep()}}},e})(ec);Ii(ri.prototype,{_lock:0,_hasPause:0,_forcing:0});var G1=function(e,t,i,r,s,o,a){var l=new di(this._pt,e,t,0,1,lx,null,s),c=0,u=0,h,f,d,m,_,p,g,y;for(l.b=i,l.e=r,i+="",r+="",(g=~r.indexOf("random("))&&(r=Jl(r)),o&&(y=[i,r],o(y,e,t),i=y[0],r=y[1]),f=i.match(If)||[];h=If.exec(r);)m=h[0],_=r.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),m!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:m.charAt(1)==="="?Sa(p,m)-p:parseFloat(m)-p,m:d&&d<4?Math.round:0},c=If.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Cv.test(r)||g)&&(l.e=0),this._pt=l,l},Fp=function(e,t,i,r,s,o,a,l,c,u){en(r)&&(r=r(s||0,e,o));var h=e[t],f=i!=="get"?i:en(h)?c?e[t.indexOf("set")||!en(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=en(h)?c?Y1:ox:kp,m;if(Cn(r)&&(~r.indexOf("random(")&&(r=Jl(r)),r.charAt(1)==="="&&(m=Sa(f,r)+(Hn(f)||0),(m||m===0)&&(r=m))),!u||f!==r||jh)return!isNaN(f*r)&&r!==""?(m=new di(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?j1:ax,0,d),c&&(m.fp=c),a&&m.modifier(a,this,e),this._pt=m):(!h&&!(t in e)&&Dp(t,r),G1.call(this,e,t,f,r,d,l||Pi.stringFilter,c))},W1=function(e,t,i,r,s){if(en(e)&&(e=Dl(e,s,t,i,r)),!Lr(e)||e.style&&e.nodeType||$n(e)||wv(e))return Cn(e)?Dl(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Dl(e[a],s,t,i,r);return o},ix=function(e,t,i,r,s,o){var a,l,c,u;if(bi[e]&&(a=new bi[e]).init(s,a.rawVars?t[e]:W1(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new di(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==da))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Ps,jh,Op=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,f=r.keyframes,d=r.autoRevert,m=e._dur,_=e._startAt,p=e._targets,g=e.parent,y=g&&g.data==="nested"?g.vars.targets:p,M=e._overwrite==="auto"&&!Ap,S=e.timeline,w,T,E,v,x,D,P,I,G,$,X,W,B;if(S&&(!f||!s)&&(s="none"),e._ease=Ao(s,Na.ease),e._yEase=h?Qv(Ao(h===!0?s:h,Na.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!S&&!!r.runBackwards,!S||f&&!r.stagger){if(I=p[0]?To(p[0]).harness:0,W=I&&r[I.prop],w=Uu(r,Lp),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&m?lu:v1),_._lazy=0),o){if(Vs(e._startAt=fn.set(p,Ii({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&fi(l),startAt:null,delay:0,onUpdate:c&&function(){return Ci(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ln||!a&&!d)&&e._startAt.revert(lu),a&&m&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&m&&!_){if(t&&(a=!1),E=Ii({overwrite:!1,data:"isFromStart",lazy:a&&!_&&fi(l),immediateRender:a,stagger:0,parent:g},w),W&&(E[I.prop]=W),Vs(e._startAt=fn.set(p,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ln?e._startAt.revert(lu):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,zt,zt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&fi(l)||l&&!m,T=0;T<p.length;T++){if(x=p[T],P=x._gsap||Np(p)[T]._gsap,e._ptLookup[T]=$={},Wh[P.id]&&Os.length&&Nu(),X=y===p?T:y.indexOf(x),I&&(G=new I).init(x,W||w,e,X,y)!==!1&&(e._pt=v=new di(e._pt,x,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(te){$[te]=v}),G.priority&&(D=1)),!I||W)for(E in w)bi[E]&&(G=ix(E,w,e,X,x,y))?G.priority&&(D=1):$[E]=v=Fp.call(e,x,E,"get",w[E],X,y,0,r.stringFilter);e._op&&e._op[T]&&e.kill(x,e._op[T]),M&&e._pt&&(Ps=e,Yt.killTweensOf(x,$,e.globalTime(t)),B=!e.parent,Ps=0),e._pt&&l&&(Wh[P.id]=1)}D&&cx(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!B,f&&t<=0&&S.render(Gi,!0,!0)},X1=function(e,t,i,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return jh=1,e.vars[t]="+=0",Op(e,a),jh=0,l?jl(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,h.e&&(h.e=sn(i)+Hn(h.e)),h.b&&(h.b=u.s+Hn(h.b))},q1=function(e,t){var i=e[0]?To(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Ua({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},$1=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if($n(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Dl=function(e,t,i,r,s){return en(e)?e.call(t,i,r,s):Cn(e)&&~e.indexOf("random(")?Jl(e):e},rx=Ip+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",sx={};hi(rx+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return sx[n]=1});var fn=(function(n){Ev(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Rl(r))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,m=l.keyframes,_=l.defaults,p=l.scrollTrigger,g=l.yoyoEase,y=r.parent||Yt,M=($n(i)||wv(i)?as(i[0]):"length"in r)?[i]:Wi(i),S,w,T,E,v,x,D,P;if(a._targets=M.length?Np(M):jl("GSAP target "+i+" not found. https://gsap.com",!Pi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,m||f||yc(c)||yc(u)){if(r=a.vars,S=a.timeline=new ri({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:M}),S.kill(),S.parent=S._dp=Xr(a),S._start=0,f||yc(c)||yc(u)){if(E=M.length,D=f&&Gv(f),Lr(f))for(v in f)~rx.indexOf(v)&&(P||(P={}),P[v]=f[v]);for(w=0;w<E;w++)T=Uu(r,sx),T.stagger=0,g&&(T.yoyoEase=g),P&&Ua(T,P),x=M[w],T.duration=+Dl(c,Xr(a),w,x,M),T.delay=(+Dl(u,Xr(a),w,x,M)||0)-a._delay,!f&&E===1&&T.delay&&(a._delay=u=T.delay,a._start+=u,T.delay=0),S.to(x,T,D?D(w,x,M):0),S._ease=vt.none;S.duration()?c=u=0:a.timeline=0}else if(m){Rl(Ii(S.vars.defaults,{ease:"none"})),S._ease=Ao(m.ease||r.ease||"none");var I=0,G,$,X;if($n(m))m.forEach(function(W){return S.to(M,W,">")}),S.duration();else{T={};for(v in m)v==="ease"||v==="easeEach"||$1(v,m[v],T,m.easeEach);for(v in T)for(G=T[v].sort(function(W,B){return W.t-B.t}),I=0,w=0;w<G.length;w++)$=G[w],X={ease:$.e,duration:($.t-(w?G[w-1].t:0))/100*c},X[v]=$.v,S.to(M,X,I),I+=X.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return d===!0&&!Ap&&(Ps=Xr(a),Yt.killTweensOf(M),Ps=0),Sr(y,Xr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!c&&!m&&a._start===$t(y._time)&&fi(h)&&E1(Xr(a))&&y.data!=="nested")&&(a._tTime=-zt,a.render(Math.max(0,-u)||0)),p&&Bv(Xr(a),p),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-zt&&!u?l:r<zt?0:r,f,d,m,_,p,g,y,M,S;if(!c)w1(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(f=$t(h%_),h===l?(m=this._repeat,f=c):(p=$t(h/_),m=~~p,m&&m===p?(f=c,m--):f>c&&(f=c)),g=this._yoyo&&m&1,g&&(S=this._yEase,f=c-f),p=Fa(this._tTime,_),f===a&&!o&&this._initted&&m===p)return this._tTime=h,this;m!==p&&(M&&this._yEase&&ex(M,g),this.vars.repeatRefresh&&!g&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render($t(_*m),!0).invalidate()._lock=0))}if(!this._initted){if(zv(this,u?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(S||this._ease)(f/c),this._from&&(this.ratio=y=1-y),!a&&h&&!s&&!p&&(Ci(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;M&&M.render(r<0?r:M._dur*M._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Xh(this,r,s,o),Ci(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!s&&this.parent&&Ci(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Xh(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Vs(this,1),!s&&!(u&&!a)&&(h||a||g)&&(Ci(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Ql||Ei.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Op(this,c),u=this._ease(c/this._dur),X1(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(hf(this,0),this.parent||Ov(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?hl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ln),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Ps&&Ps.vars.overwrite!==!0)._first||hl(this),this.parent&&o!==this.timeline.totalDuration()&&Oa(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Wi(r):a,c=this._ptLookup,u=this._pt,h,f,d,m,_,p,g;if((!s||s==="all")&&b1(a,l))return s==="all"&&(this._pt=0),hl(this);for(h=this._op=this._op||[],s!=="all"&&(Cn(s)&&(_={},hi(s,function(y){return _[y]=1}),s=_),s=q1(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){f=c[g],s==="all"?(h[g]=s,m=f,d={}):(d=h[g]=h[g]||{},m=s);for(_ in m)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&uf(this,p,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&hl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Pl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Pl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Yt.killTweensOf(r,s,o)},e})(ec);Ii(fn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});hi("staggerTo,staggerFrom,staggerFromTo",function(n){fn[n]=function(){var e=new ri,t=$h.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var kp=function(e,t,i){return e[t]=i},ox=function(e,t,i){return e[t](i)},Y1=function(e,t,i,r){return e[t](r.fp,i)},K1=function(e,t,i){return e.setAttribute(t,i)},Bp=function(e,t){return en(e[t])?ox:Cp(e[t])&&e.setAttribute?K1:kp},ax=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},j1=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},lx=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},zp=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Z1=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},J1=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?uf(this,t,"_pt"):t.dep||(i=1),t=r;return!i},Q1=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},cx=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},di=(function(){function n(t,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||ax,this.d=l||this,this.set=c||kp,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=Q1,this.m=i,this.mt=s,this.tween=r},n})();hi(Ip+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Lp[n]=1});Li.TweenMax=Li.TweenLite=fn;Li.TimelineLite=Li.TimelineMax=ri;Yt=new ri({sortChildren:!1,defaults:Na,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Pi.stringFilter=Jv;var Co=[],uu={},eE=[],yg=0,tE=0,kf=function(e){return(uu[e]||eE).map(function(t){return t()})},Zh=function(){var e=Date.now(),t=[];e-yg>2&&(kf("matchMediaInit"),Co.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=gr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),kf("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),yg=e,kf("matchMedia"))},ux=(function(){function n(t,i){this.selector=i&&Yh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=tE++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){en(i)&&(s=r,r=i,i=en);var o=this,a=function(){var c=qt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Yh(s)),qt=o,h=r.apply(o,arguments),en(h)&&o._r.push(h),qt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,i===en?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=qt;qt=null,i(this),qt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof fn&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof ri?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof fn)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Co.length;o--;)Co[o].id===this.id&&Co.splice(o,1)},e.revert=function(i){this.kill(i||{})},n})(),nE=(function(){function n(t){this.contexts=[],this.scope=t,qt&&qt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Lr(i)||(i={matches:i});var o=new ux(0,s||this.scope),a=o.conditions={},l,c,u;qt&&!o.selector&&(o.selector=qt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=gr.matchMedia(i[c]),l&&(Co.indexOf(o)<0&&Co.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Zh):l.addEventListener("change",Zh)));return u&&r(o,function(h){return o.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n})(),Ou={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return Kv(r)})},timeline:function(e){return new ri(e)},getTweensOf:function(e,t){return Yt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Cn(e)&&(e=Wi(e)[0]);var s=To(e||{}).get,o=i?Fv:Uv;return i==="native"&&(i=""),e&&(t?o((bi[t]&&bi[t].get||s)(e,t,i,r)):function(a,l,c){return o((bi[a]&&bi[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=Wi(e),e.length>1){var r=e.map(function(u){return gi.quickSetter(u,t,i)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var o=bi[t],a=To(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;da._pt=0,h.init(e,i?u+i:u,da,0,[e]),h.render(1,h),da._pt&&zp(1,da)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var r,s=gi.to(e,Ii((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Yt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ao(e.ease,Na.ease)),gg(Na,e||{})},config:function(e){return gg(Pi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!bi[a]&&!Li[a]&&jl(t+" effect requires "+a+" plugin.")}),Nf[t]=function(a,l,c){return i(Wi(a),Ii(l||{},s),c)},o&&(ri.prototype[t]=function(a,l,c){return this.add(Nf[t](a,Lr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){vt[e]=Ao(t)},parseEase:function(e,t){return arguments.length?Ao(e,t):vt},getById:function(e){return Yt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new ri(e),r,s;for(i.smoothChildTiming=fi(e.smoothChildTiming),Yt.remove(i),i._dp=0,i._time=i._tTime=Yt._time,r=Yt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof fn&&r.vars.onComplete===r._targets[0]))&&Sr(i,r,r._start-r._delay),r=s;return Sr(Yt,i,0),i},context:function(e,t){return e?new ux(e,t):qt},matchMedia:function(e){return new nE(e)},matchMediaRefresh:function(){return Co.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Zh()},addEventListener:function(e,t){var i=uu[e]||(uu[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=uu[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:N1,wrapYoyo:U1,distribute:Gv,random:Xv,snap:Wv,normalize:I1,getUnit:Hn,clamp:R1,splitColor:jv,toArray:Wi,selector:Yh,mapRange:$v,pipe:D1,unitize:L1,interpolate:F1,shuffle:Hv},install:Pv,effects:Nf,ticker:Ei,updateRoot:ri.updateRoot,plugins:bi,globalTimeline:Yt,core:{PropTween:di,globals:Dv,Tween:fn,Timeline:ri,Animation:ec,getCache:To,_removeLinkedListItem:uf,reverting:function(){return Ln},context:function(e){return e&&qt&&(qt.data.push(e),e._ctx=qt),qt},suppressOverwrites:function(e){return Ap=e}}};hi("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Ou[n]=fn[n]});Ei.add(ri.updateRoot);da=Ou.to({},{duration:0});var iE=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},rE=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=iE(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Bf=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Cn(s)&&(l={},hi(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}rE(a,s)}}}},gi=Ou.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Ln?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Bf("roundProps",Kh),Bf("modifiers"),Bf("snap",Wv))||Ou;fn.version=ri.version=gi.version="3.14.2";Rv=1;Rp()&&ka();vt.Power0;vt.Power1;vt.Power2;vt.Power3;vt.Power4;vt.Linear;vt.Quad;vt.Cubic;vt.Quart;vt.Quint;vt.Strong;vt.Elastic;vt.Back;vt.SteppedEase;vt.Bounce;vt.Sine;vt.Expo;vt.Circ;var bg,Ds,ya,Vp,vo,Mg,Hp,sE=function(){return typeof window<"u"},ls={},ao=180/Math.PI,ba=Math.PI/180,Xo=Math.atan2,Eg=1e8,Gp=/([A-Z])/g,oE=/(left|right|width|margin|padding|x)/i,aE=/[\s,\(]\S/,br={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Jh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},lE=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},cE=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},uE=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},fE=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},fx=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},hx=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},hE=function(e,t,i){return e.style[t]=i},dE=function(e,t,i){return e.style.setProperty(t,i)},pE=function(e,t,i){return e._gsap[t]=i},mE=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},gE=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},_E=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},jt="transform",pi=jt+"Origin",vE=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in ls&&s){if(this.tfm=this.tfm||{},e!=="transform")e=br[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=$r(r,a)}):this.tfm[e]=o.x?o[e]:$r(r,e),e===pi&&(this.tfm.zOrigin=o.zOrigin);else return br.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(jt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(pi,t,"")),e=jt}(s||t)&&this.props.push(e,t,s[e])},dx=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},xE=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Gp,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Hp(),(!s||!s.isStart)&&!i[jt]&&(dx(i),r.zOrigin&&i[pi]&&(i[pi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},px=function(e,t){var i={target:e,props:[],revert:xE,save:vE};return e._gsap||gi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},mx,Qh=function(e,t){var i=Ds.createElementNS?Ds.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ds.createElement(e);return i&&i.style?i:Ds.createElement(e)},Ri=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Gp,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Ba(t)||t,1)||""},Tg="O,Moz,ms,Ms,Webkit".split(","),Ba=function(e,t,i){var r=t||vo,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Tg[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Tg[o]:"")+e},ed=function(){sE()&&window.document&&(bg=window,Ds=bg.document,ya=Ds.documentElement,vo=Qh("div")||{style:{}},Qh("div"),jt=Ba(jt),pi=jt+"Origin",vo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",mx=!!Ba("perspective"),Hp=gi.core.reverting,Vp=1)},wg=function(e){var t=e.ownerSVGElement,i=Qh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),ya.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),ya.removeChild(i),s},Ag=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},gx=function(e){var t,i;try{t=e.getBBox()}catch{t=wg(e),i=1}return t&&(t.width||t.height)||i||(t=wg(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ag(e,["x","cx","x1"])||0,y:+Ag(e,["y","cy","y1"])||0,width:0,height:0}:t},_x=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&gx(e))},Hs=function(e,t){if(t){var i=e.style,r;t in ls&&t!==pi&&(t=jt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Gp,"-$1").toLowerCase())):i.removeAttribute(t)}},Ls=function(e,t,i,r,s,o){var a=new di(e._pt,t,i,0,1,o?hx:fx);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},Cg={deg:1,rad:1,turn:1},SE={grid:1,flex:1},Gs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=vo.style,l=oE.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",d=r==="%",m,_,p,g;if(r===o||!s||Cg[r]||Cg[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),g=e.getCTM&&_x(e),(d||o==="%")&&(ls[t]||~t.indexOf("adius")))return m=g?e.getBBox()[l?"width":"height"]:e[u],sn(d?s/m*h:s/100*m);if(a[l?"width":"height"]=h+(f?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ds||!_.appendChild)&&(_=Ds.body),p=_._gsap,p&&d&&p.width&&l&&p.time===Ei.time&&!p.uncache)return sn(s/p.width*h);if(d&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=h+r,m=e[u],y?e.style[t]=y:Hs(e,t)}else(d||o==="%")&&!SE[Ri(_,"display")]&&(a.position=Ri(e,"position")),_===e&&(a.position="static"),_.appendChild(vo),m=vo[u],_.removeChild(vo),a.position="absolute";return l&&d&&(p=To(_),p.time=Ei.time,p.width=_[u]),sn(f?m*s/h:m&&s?h/m*s:0)},$r=function(e,t,i,r){var s;return Vp||ed(),t in br&&t!=="transform"&&(t=br[t],~t.indexOf(",")&&(t=t.split(",")[0])),ls[t]&&t!=="transform"?(s=nc(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Bu(Ri(e,pi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ku[t]&&ku[t](e,t,i)||Ri(e,t)||Iv(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Gs(e,t,s,i)+i:s},yE=function(e,t,i,r){if(!i||i==="none"){var s=Ba(t,e,1),o=s&&Ri(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Ri(e,"borderTopColor"))}var a=new di(this._pt,e.style,t,0,1,lx),l=0,c=0,u,h,f,d,m,_,p,g,y,M,S,w;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Ri(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=Ri(e,t)||r,_?e.style[t]=_:Hs(e,t)),u=[i,r],Jv(u),i=u[0],r=u[1],f=i.match(ha)||[],w=r.match(ha)||[],w.length){for(;h=ha.exec(r);)p=h[0],y=r.substring(l,h.index),m?m=(m+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(m=1),p!==(_=f[c++]||"")&&(d=parseFloat(_)||0,S=_.substr((d+"").length),p.charAt(1)==="="&&(p=Sa(d,p)+S),g=parseFloat(p),M=p.substr((g+"").length),l=ha.lastIndex-M.length,M||(M=M||Pi.units[t]||S,l===r.length&&(r+=M,a.e+=M)),S!==M&&(d=Gs(e,t,_,M)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:g-d,m:m&&m<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?hx:fx;return Cv.test(r)&&(a.e=0),this._pt=a,a},Rg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},bE=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Rg[i]||i,t[1]=Rg[r]||r,t.join(" ")},ME=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ls[a]&&(l=1,a=a==="transformOrigin"?pi:jt),Hs(i,a);l&&(Hs(i,jt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",nc(i,1),o.uncache=1,dx(r)))}},ku={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new di(e._pt,t,i,0,0,ME);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},tc=[1,0,0,1,0,0],vx={},xx=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Pg=function(e){var t=Ri(e,jt);return xx(t)?tc:t.substr(7).match(Av).map(sn)},Wp=function(e,t){var i=e._gsap||To(e),r=e.style,s=Pg(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?tc:s):(s===tc&&!e.offsetParent&&e!==ya&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,ya.appendChild(e)),s=Pg(e),l?r.display=l:Hs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ya.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},td=function(e,t,i,r,s,o){var a=e._gsap,l=s||Wp(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],m=l[1],_=l[2],p=l[3],g=l[4],y=l[5],M=t.split(" "),S=parseFloat(M[0])||0,w=parseFloat(M[1])||0,T,E,v,x;i?l!==tc&&(E=d*p-m*_)&&(v=S*(p/E)+w*(-_/E)+(_*y-p*g)/E,x=S*(-m/E)+w*(d/E)-(d*y-m*g)/E,S=v,w=x):(T=gx(e),S=T.x+(~M[0].indexOf("%")?S/100*T.width:S),w=T.y+(~(M[1]||M[0]).indexOf("%")?w/100*T.height:w)),r||r!==!1&&a.smooth?(g=S-c,y=w-u,a.xOffset=h+(g*d+y*_)-g,a.yOffset=f+(g*m+y*p)-y):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=w,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[pi]="0px 0px",o&&(Ls(o,a,"xOrigin",c,S),Ls(o,a,"yOrigin",u,w),Ls(o,a,"xOffset",h,a.xOffset),Ls(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+w)},nc=function(e,t){var i=e._gsap||new nx(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ri(e,pi)||"0",u,h,f,d,m,_,p,g,y,M,S,w,T,E,v,x,D,P,I,G,$,X,W,B,te,le,k,xe,de,ke,$e,je;return u=h=f=_=p=g=y=M=S=0,d=m=1,i.svg=!!(e.getCTM&&_x(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[jt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[jt]!=="none"?l[jt]:"")),r.scale=r.rotate=r.translate="none"),E=Wp(e,i.svg),i.svg&&(i.uncache?(te=e.getBBox(),c=i.xOrigin-te.x+"px "+(i.yOrigin-te.y)+"px",B=""):B=!t&&e.getAttribute("data-svg-origin"),td(e,B||c,!!B||i.originIsAbsolute,i.smooth!==!1,E)),w=i.xOrigin||0,T=i.yOrigin||0,E!==tc&&(P=E[0],I=E[1],G=E[2],$=E[3],u=X=E[4],h=W=E[5],E.length===6?(d=Math.sqrt(P*P+I*I),m=Math.sqrt($*$+G*G),_=P||I?Xo(I,P)*ao:0,y=G||$?Xo(G,$)*ao+_:0,y&&(m*=Math.abs(Math.cos(y*ba))),i.svg&&(u-=w-(w*P+T*G),h-=T-(w*I+T*$))):(je=E[6],ke=E[7],k=E[8],xe=E[9],de=E[10],$e=E[11],u=E[12],h=E[13],f=E[14],v=Xo(je,de),p=v*ao,v&&(x=Math.cos(-v),D=Math.sin(-v),B=X*x+k*D,te=W*x+xe*D,le=je*x+de*D,k=X*-D+k*x,xe=W*-D+xe*x,de=je*-D+de*x,$e=ke*-D+$e*x,X=B,W=te,je=le),v=Xo(-G,de),g=v*ao,v&&(x=Math.cos(-v),D=Math.sin(-v),B=P*x-k*D,te=I*x-xe*D,le=G*x-de*D,$e=$*D+$e*x,P=B,I=te,G=le),v=Xo(I,P),_=v*ao,v&&(x=Math.cos(v),D=Math.sin(v),B=P*x+I*D,te=X*x+W*D,I=I*x-P*D,W=W*x-X*D,P=B,X=te),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),d=sn(Math.sqrt(P*P+I*I+G*G)),m=sn(Math.sqrt(W*W+je*je)),v=Xo(X,W),y=Math.abs(v)>2e-4?v*ao:0,S=$e?1/($e<0?-$e:$e):0),i.svg&&(B=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!xx(Ri(e,jt)),B&&e.setAttribute("transform",B))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,y+=y<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=sn(d),i.scaleY=sn(m),i.rotation=sn(_)+a,i.rotationX=sn(p)+a,i.rotationY=sn(g)+a,i.skewX=y+a,i.skewY=M+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[pi]=Bu(c)),i.xOffset=i.yOffset=0,i.force3D=Pi.force3D,i.renderTransform=i.svg?TE:mx?Sx:EE,i.uncache=0,i},Bu=function(e){return(e=e.split(" "))[0]+" "+e[1]},zf=function(e,t,i){var r=Hn(t);return sn(parseFloat(t)+parseFloat(Gs(e,"x",i+"px",r)))+r},EE=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Sx(e,t)},Js="0deg",tl="0px",Qs=") ",Sx=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,h=i.rotationX,f=i.skewX,d=i.skewY,m=i.scaleX,_=i.scaleY,p=i.transformPerspective,g=i.force3D,y=i.target,M=i.zOrigin,S="",w=g==="auto"&&e&&e!==1||g===!0;if(M&&(h!==Js||u!==Js)){var T=parseFloat(u)*ba,E=Math.sin(T),v=Math.cos(T),x;T=parseFloat(h)*ba,x=Math.cos(T),o=zf(y,o,E*x*-M),a=zf(y,a,-Math.sin(T)*-M),l=zf(y,l,v*x*-M+M)}p!==tl&&(S+="perspective("+p+Qs),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(w||o!==tl||a!==tl||l!==tl)&&(S+=l!==tl||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Qs),c!==Js&&(S+="rotate("+c+Qs),u!==Js&&(S+="rotateY("+u+Qs),h!==Js&&(S+="rotateX("+h+Qs),(f!==Js||d!==Js)&&(S+="skew("+f+", "+d+Qs),(m!==1||_!==1)&&(S+="scale("+m+", "+_+Qs),y.style[jt]=S||"translate(0, 0)"},TE=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,h=i.scaleX,f=i.scaleY,d=i.target,m=i.xOrigin,_=i.yOrigin,p=i.xOffset,g=i.yOffset,y=i.forceCSS,M=parseFloat(o),S=parseFloat(a),w,T,E,v,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ba,c*=ba,w=Math.cos(l)*h,T=Math.sin(l)*h,E=Math.sin(l-c)*-f,v=Math.cos(l-c)*f,c&&(u*=ba,x=Math.tan(c-u),x=Math.sqrt(1+x*x),E*=x,v*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),w*=x,T*=x)),w=sn(w),T=sn(T),E=sn(E),v=sn(v)):(w=h,v=f,T=E=0),(M&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(M=Gs(d,"x",o,"px"),S=Gs(d,"y",a,"px")),(m||_||p||g)&&(M=sn(M+m-(m*w+_*E)+p),S=sn(S+_-(m*T+_*v)+g)),(r||s)&&(x=d.getBBox(),M=sn(M+r/100*x.width),S=sn(S+s/100*x.height)),x="matrix("+w+","+T+","+E+","+v+","+M+","+S+")",d.setAttribute("transform",x),y&&(d.style[jt]=x)},wE=function(e,t,i,r,s){var o=360,a=Cn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ao:1),c=l-r,u=r+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Eg)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Eg)%o-~~(c/o)*o)),e._pt=f=new di(e._pt,t,i,r,c,lE),f.e=u,f.u="deg",e._props.push(i),f},Dg=function(e,t){for(var i in t)e[i]=t[i];return e},AE=function(e,t,i){var r=Dg({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,h,f,d,m;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[jt]=t,a=nc(i,1),Hs(i,jt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[jt],o[jt]=t,a=nc(i,1),o[jt]=c);for(l in ls)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Hn(c),m=Hn(u),h=d!==m?Gs(i,l,c,m):parseFloat(c),f=parseFloat(u),e._pt=new di(e._pt,a,l,h,f-h,Jh),e._pt.u=m||0,e._props.push(l));Dg(a,r)};hi("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});ku[e>1?"border"+n:n]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(m){return $r(a,m,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(m,_){return d[m]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var yx={name:"css",register:ed,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,c,u,h,f,d,m,_,p,g,y,M,S,w,T,E,v,x;Vp||ed(),this.styles=this.styles||px(e),v=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(bi[_]&&ix(_,t,i,r,e,s)))){if(d=typeof u,m=ku[_],d==="function"&&(u=u.call(i,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Jl(u)),m)m(this,e,_,u,i)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",ks.lastIndex=0,ks.test(c)||(p=Hn(c),g=Hn(u),g?p!==g&&(c=Gs(e,_,c,g)+g):p&&(u+=p)),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),v.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],Cn(c)&&~c.indexOf("random(")&&(c=Jl(c)),Hn(c+"")||c==="auto"||(c+=Pi.units[_]||Hn($r(e,_))||""),(c+"").charAt(1)==="="&&(c=$r(e,_))):c=$r(e,_),f=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),_ in br&&(_==="autoAlpha"&&(f===1&&$r(e,"visibility")==="hidden"&&h&&(f=0),v.push("visibility",0,a.visibility),Ls(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=br[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in ls,M){if(this.styles.save(_),x=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Ri(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var D=e.style.perspective;e.style.perspective=u,u=Ri(e,"perspective"),D?e.style.perspective=D:Hs(e,"perspective")}h=parseFloat(u)}if(S||(w=e._gsap,w.renderTransform&&!t.parseTransform||nc(e,t.parseTransform),T=t.smoothOrigin!==!1&&w.smooth,S=this._pt=new di(this._pt,a,jt,0,1,w.renderTransform,w,0,-1),S.dep=1),_==="scale")this._pt=new di(this._pt,w,"scaleY",w.scaleY,(y?Sa(w.scaleY,y+h):h)-w.scaleY||0,Jh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(pi,0,a[pi]),u=bE(u),w.svg?td(e,u,0,T,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==w.zOrigin&&Ls(this,w,"zOrigin",w.zOrigin,g),Ls(this,a,_,Bu(c),Bu(u)));continue}else if(_==="svgOrigin"){td(e,u,1,T,0,this);continue}else if(_ in vx){wE(this,w,_,f,y?Sa(f,y+u):u);continue}else if(_==="smoothOrigin"){Ls(this,w,"smooth",w.smooth,u);continue}else if(_==="force3D"){w[_]=u;continue}else if(_==="transform"){AE(this,u,e);continue}}else _ in a||(_=Ba(_)||_);if(M||(h||h===0)&&(f||f===0)&&!aE.test(u)&&_ in a)p=(c+"").substr((f+"").length),h||(h=0),g=Hn(u)||(_ in Pi.units?Pi.units[_]:p),p!==g&&(f=Gs(e,_,c,g)),this._pt=new di(this._pt,M?w:a,_,f,(y?Sa(f,y+h):h)-f,!M&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?fE:Jh),this._pt.u=g||0,M&&x!==u?(this._pt.b=c,this._pt.e=x,this._pt.r=uE):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=cE);else if(_ in a)yE.call(this,e,_,c,y?y+u:u);else if(_ in e)this.add(e,_,c||e[_],y?y+u:u,r,s);else if(_!=="parseTransform"){Dp(_,u);continue}M||(_ in a?v.push(_,0,a[_]):typeof e[_]=="function"?v.push(_,2,e[_]()):v.push(_,1,c||e[_])),o.push(_)}}E&&cx(this)},render:function(e,t){if(t.tween._time||!Hp())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:$r,aliases:br,getSetter:function(e,t,i){var r=br[t];return r&&r.indexOf(",")<0&&(t=r),t in ls&&t!==pi&&(e._gsap.x||$r(e,"x"))?i&&Mg===i?t==="scale"?mE:pE:(Mg=i||{})&&(t==="scale"?gE:_E):e.style&&!Cp(e.style[t])?hE:~t.indexOf("-")?dE:Bp(e,t)},core:{_removeProperty:Hs,_getMatrix:Wp}};gi.utils.checkPrefix=Ba;gi.core.getStyleSaver=px;(function(n,e,t,i){var r=hi(n+","+e+","+t,function(s){ls[s]=1});hi(e,function(s){Pi.units[s]="deg",vx[s]=1}),br[r[13]]=n+","+e,hi(i,function(s){var o=s.split(":");br[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");hi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Pi.units[n]="px"});gi.registerPlugin(yx);var we=gi.registerPlugin(yx)||gi;we.core.Tween;function CE(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function RE(n,e,t){return e&&CE(n.prototype,e),n}var Pn,fu,Ti,Is,Ns,Ma,bx,lo,Ll,Mx,Jr,Ji,Ex,Tx=function(){return Pn||typeof window<"u"&&(Pn=window.gsap)&&Pn.registerPlugin&&Pn},wx=1,pa=[],gt=[],Ar=[],Il=Date.now,nd=function(e,t){return t},PE=function(){var e=Ll.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,gt),r.push.apply(r,Ar),gt=i,Ar=r,nd=function(o,a){return t[o](a)}},Bs=function(e,t){return~Ar.indexOf(e)&&Ar[Ar.indexOf(e)+1][t]},Nl=function(e){return!!~Mx.indexOf(e)},jn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Yn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},bc="scrollLeft",Mc="scrollTop",id=function(){return Jr&&Jr.isPressed||gt.cache++},zu=function(e,t){var i=function r(s){if(s||s===0){wx&&(Ti.history.scrollRestoration="manual");var o=Jr&&Jr.isPressed;s=r.v=Math.round(s)||(Jr&&Jr.iOS?1:0),e(s),r.cacheID=gt.cache,o&&nd("ss",s)}else(t||gt.cache!==r.cacheID||nd("ref"))&&(r.cacheID=gt.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},si={s:bc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:zu(function(n){return arguments.length?Ti.scrollTo(n,vn.sc()):Ti.pageXOffset||Is[bc]||Ns[bc]||Ma[bc]||0})},vn={s:Mc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:si,sc:zu(function(n){return arguments.length?Ti.scrollTo(si.sc(),n):Ti.pageYOffset||Is[Mc]||Ns[Mc]||Ma[Mc]||0})},ui=function(e,t){return(t&&t._ctx&&t._ctx.selector||Pn.utils.toArray)(e)[0]||(typeof e=="string"&&Pn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},DE=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Ws=function(e,t){var i=t.s,r=t.sc;Nl(e)&&(e=Is.scrollingElement||Ns);var s=gt.indexOf(e),o=r===vn.sc?1:2;!~s&&(s=gt.push(e)-1),gt[s+o]||jn(e,"scroll",id);var a=gt[s+o],l=a||(gt[s+o]=zu(Bs(e,i),!0)||(Nl(e)?r:zu(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,a||(l.smooth=Pn.getProperty(e,"scrollBehavior")==="smooth"),l},rd=function(e,t,i){var r=e,s=e,o=Il(),a=o,l=t||50,c=Math.max(500,l*3),u=function(m,_){var p=Il();_||p-o>l?(s=r,r=m,a=o,o=p):i?r+=m:r=s+(m-s)/(p-a)*(o-a)},h=function(){s=r=i?0:r,a=o=0},f=function(m){var _=a,p=s,g=Il();return(m||m===0)&&m!==r&&u(m),o===a||g-a>c?0:(r+(i?p:-p))/((i?g:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},nl=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Lg=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},Ax=function(){Ll=Pn.core.globals().ScrollTrigger,Ll&&Ll.core&&PE()},Cx=function(e){return Pn=e||Tx(),!fu&&Pn&&typeof document<"u"&&document.body&&(Ti=window,Is=document,Ns=Is.documentElement,Ma=Is.body,Mx=[Ti,Is,Ns,Ma],Pn.utils.clamp,Ex=Pn.core.context||function(){},lo="onpointerenter"in Ma?"pointer":"mouse",bx=ln.isTouch=Ti.matchMedia&&Ti.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ti||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ji=ln.eventTypes=("ontouchstart"in Ns?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ns?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return wx=0},500),Ax(),fu=1),fu};si.op=vn;gt.cache=0;var ln=(function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){fu||Cx(Pn)||console.warn("Please gsap.registerPlugin(Observer)"),Ll||Ax();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,h=i.onStop,f=i.onStopDelay,d=i.ignore,m=i.wheelSpeed,_=i.event,p=i.onDragStart,g=i.onDragEnd,y=i.onDrag,M=i.onPress,S=i.onRelease,w=i.onRight,T=i.onLeft,E=i.onUp,v=i.onDown,x=i.onChangeX,D=i.onChangeY,P=i.onChange,I=i.onToggleX,G=i.onToggleY,$=i.onHover,X=i.onHoverEnd,W=i.onMove,B=i.ignoreCheck,te=i.isNormalizer,le=i.onGestureStart,k=i.onGestureEnd,xe=i.onWheel,de=i.onEnable,ke=i.onDisable,$e=i.onClick,je=i.scrollSpeed,re=i.capture,H=i.allowClicks,j=i.lockAxis,ue=i.onLockAxis;this.target=a=ui(a)||Ns,this.vars=i,d&&(d=Pn.utils.toArray(d)),r=r||1e-9,s=s||0,m=m||1,je=je||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Ti.getComputedStyle(Ma).lineHeight)||22);var pe,Me,U,N,V,J,Z,F=this,L=0,me=0,fe=i.passive||!u&&i.passive!==!1,se=Ws(a,si),he=Ws(a,vn),C=se(),b=he(),O=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ji[0]==="pointerdown",K=Nl(a),ne=a.ownerDocument||Is,Y=[0,0,0],Ee=[0,0,0],ge=0,ze=function(){return ge=Il()},Ce=function(Ye,ct){return(F.event=Ye)&&d&&DE(Ye.target,d)||ct&&O&&Ye.pointerType!=="touch"||B&&B(Ye,ct)},_e=function(){F._vx.reset(),F._vy.reset(),Me.pause(),h&&h(F)},ye=function(){var Ye=F.deltaX=Lg(Y),ct=F.deltaY=Lg(Ee),Ue=Math.abs(Ye)>=r,it=Math.abs(ct)>=r;P&&(Ue||it)&&P(F,Ye,ct,Y,Ee),Ue&&(w&&F.deltaX>0&&w(F),T&&F.deltaX<0&&T(F),x&&x(F),I&&F.deltaX<0!=L<0&&I(F),L=F.deltaX,Y[0]=Y[1]=Y[2]=0),it&&(v&&F.deltaY>0&&v(F),E&&F.deltaY<0&&E(F),D&&D(F),G&&F.deltaY<0!=me<0&&G(F),me=F.deltaY,Ee[0]=Ee[1]=Ee[2]=0),(N||U)&&(W&&W(F),U&&(p&&U===1&&p(F),y&&y(F),U=0),N=!1),J&&!(J=!1)&&ue&&ue(F),V&&(xe(F),V=!1),pe=0},Ae=function(Ye,ct,Ue){Y[Ue]+=Ye,Ee[Ue]+=ct,F._vx.update(Ye),F._vy.update(ct),c?pe||(pe=requestAnimationFrame(ye)):ye()},Le=function(Ye,ct){j&&!Z&&(F.axis=Z=Math.abs(Ye)>Math.abs(ct)?"x":"y",J=!0),Z!=="y"&&(Y[2]+=Ye,F._vx.update(Ye,!0)),Z!=="x"&&(Ee[2]+=ct,F._vy.update(ct,!0)),c?pe||(pe=requestAnimationFrame(ye)):ye()},Re=function(Ye){if(!Ce(Ye,1)){Ye=nl(Ye,u);var ct=Ye.clientX,Ue=Ye.clientY,it=ct-F.x,Qe=Ue-F.y,rt=F.isDragging;F.x=ct,F.y=Ue,(rt||(it||Qe)&&(Math.abs(F.startX-ct)>=s||Math.abs(F.startY-Ue)>=s))&&(U||(U=rt?2:1),rt||(F.isDragging=!0),Le(it,Qe))}},nt=F.onPress=function(Be){Ce(Be,1)||Be&&Be.button||(F.axis=Z=null,Me.pause(),F.isPressed=!0,Be=nl(Be),L=me=0,F.startX=F.x=Be.clientX,F.startY=F.y=Be.clientY,F._vx.reset(),F._vy.reset(),jn(te?a:ne,Ji[1],Re,fe,!0),F.deltaX=F.deltaY=0,M&&M(F))},z=F.onRelease=function(Be){if(!Ce(Be,1)){Yn(te?a:ne,Ji[1],Re,!0);var Ye=!isNaN(F.y-F.startY),ct=F.isDragging,Ue=ct&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),it=nl(Be);!Ue&&Ye&&(F._vx.reset(),F._vy.reset(),u&&H&&Pn.delayedCall(.08,function(){if(Il()-ge>300&&!Be.defaultPrevented){if(Be.target.click)Be.target.click();else if(ne.createEvent){var Qe=ne.createEvent("MouseEvents");Qe.initMouseEvent("click",!0,!0,Ti,1,it.screenX,it.screenY,it.clientX,it.clientY,!1,!1,!1,!1,0,null),Be.target.dispatchEvent(Qe)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,h&&ct&&!te&&Me.restart(!0),U&&ye(),g&&ct&&g(F),S&&S(F,Ue)}},Te=function(Ye){return Ye.touches&&Ye.touches.length>1&&(F.isGesturing=!0)&&le(Ye,F.isDragging)},be=function(){return(F.isGesturing=!1)||k(F)},Ie=function(Ye){if(!Ce(Ye)){var ct=se(),Ue=he();Ae((ct-C)*je,(Ue-b)*je,1),C=ct,b=Ue,h&&Me.restart(!0)}},ve=function(Ye){if(!Ce(Ye)){Ye=nl(Ye,u),xe&&(V=!0);var ct=(Ye.deltaMode===1?l:Ye.deltaMode===2?Ti.innerHeight:1)*m;Ae(Ye.deltaX*ct,Ye.deltaY*ct,0),h&&!te&&Me.restart(!0)}},ae=function(Ye){if(!Ce(Ye)){var ct=Ye.clientX,Ue=Ye.clientY,it=ct-F.x,Qe=Ue-F.y;F.x=ct,F.y=Ue,N=!0,h&&Me.restart(!0),(it||Qe)&&Le(it,Qe)}},Ve=function(Ye){F.event=Ye,$(F)},Je=function(Ye){F.event=Ye,X(F)},yt=function(Ye){return Ce(Ye)||nl(Ye,u)&&$e(F)};Me=F._dc=Pn.delayedCall(f||.25,_e).pause(),F.deltaX=F.deltaY=0,F._vx=rd(0,50,!0),F._vy=rd(0,50,!0),F.scrollX=se,F.scrollY=he,F.isDragging=F.isGesturing=F.isPressed=!1,Ex(this),F.enable=function(Be){return F.isEnabled||(jn(K?ne:a,"scroll",id),o.indexOf("scroll")>=0&&jn(K?ne:a,"scroll",Ie,fe,re),o.indexOf("wheel")>=0&&jn(a,"wheel",ve,fe,re),(o.indexOf("touch")>=0&&bx||o.indexOf("pointer")>=0)&&(jn(a,Ji[0],nt,fe,re),jn(ne,Ji[2],z),jn(ne,Ji[3],z),H&&jn(a,"click",ze,!0,!0),$e&&jn(a,"click",yt),le&&jn(ne,"gesturestart",Te),k&&jn(ne,"gestureend",be),$&&jn(a,lo+"enter",Ve),X&&jn(a,lo+"leave",Je),W&&jn(a,lo+"move",ae)),F.isEnabled=!0,F.isDragging=F.isGesturing=F.isPressed=N=U=!1,F._vx.reset(),F._vy.reset(),C=se(),b=he(),Be&&Be.type&&nt(Be),de&&de(F)),F},F.disable=function(){F.isEnabled&&(pa.filter(function(Be){return Be!==F&&Nl(Be.target)}).length||Yn(K?ne:a,"scroll",id),F.isPressed&&(F._vx.reset(),F._vy.reset(),Yn(te?a:ne,Ji[1],Re,!0)),Yn(K?ne:a,"scroll",Ie,re),Yn(a,"wheel",ve,re),Yn(a,Ji[0],nt,re),Yn(ne,Ji[2],z),Yn(ne,Ji[3],z),Yn(a,"click",ze,!0),Yn(a,"click",yt),Yn(ne,"gesturestart",Te),Yn(ne,"gestureend",be),Yn(a,lo+"enter",Ve),Yn(a,lo+"leave",Je),Yn(a,lo+"move",ae),F.isEnabled=F.isPressed=F.isDragging=!1,ke&&ke(F))},F.kill=F.revert=function(){F.disable();var Be=pa.indexOf(F);Be>=0&&pa.splice(Be,1),Jr===F&&(Jr=0)},pa.push(F),te&&Nl(a)&&(Jr=F),F.enable(_)},RE(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n})();ln.version="3.14.2";ln.create=function(n){return new ln(n)};ln.register=Cx;ln.getAll=function(){return pa.slice()};ln.getById=function(n){return pa.filter(function(e){return e.vars.id===n})[0]};Tx()&&Pn.registerPlugin(ln);var Xe,ua,mt,Ht,Mi,At,Xp,Vu,ic,Ul,pl,Ec,kn,df,sd,ei,Ig,Ng,fa,Rx,Vf,Px,Qn,od,Dx,Lx,Ts,ad,qp,Ea,$p,Fl,ld,Hf,Tc=1,Bn=Date.now,Gf=Bn(),qi=0,ml=0,Ug=function(e,t,i){var r=yi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Fg=function(e,t){return t&&(!yi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},LE=function n(){return ml&&requestAnimationFrame(n)},Og=function(){return df=1},kg=function(){return df=0},_r=function(e){return e},gl=function(e){return Math.round(e*1e5)/1e5||0},Ix=function(){return typeof window<"u"},Nx=function(){return Xe||Ix()&&(Xe=window.gsap)&&Xe.registerPlugin&&Xe},Io=function(e){return!!~Xp.indexOf(e)},Ux=function(e){return(e==="Height"?$p:mt["inner"+e])||Mi["client"+e]||At["client"+e]},Fx=function(e){return Bs(e,"getBoundingClientRect")||(Io(e)?function(){return gu.width=mt.innerWidth,gu.height=$p,gu}:function(){return jr(e)})},IE=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Bs(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?Ux(s):e["client"+s])||0}},NE=function(e,t){return!t||~Ar.indexOf(e)?Fx(e):function(){return gu}},Mr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Bs(e,i))?o()-Fx(e)()[s]:Io(e)?(Mi[i]||At[i])-Ux(r):e[i]-e["offset"+r])},wc=function(e,t){for(var i=0;i<fa.length;i+=3)(!t||~t.indexOf(fa[i+1]))&&e(fa[i],fa[i+1],fa[i+2])},yi=function(e){return typeof e=="string"},Gn=function(e){return typeof e=="function"},_l=function(e){return typeof e=="number"},co=function(e){return typeof e=="object"},il=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Wf=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},qo=Math.abs,Ox="left",kx="top",Yp="right",Kp="bottom",Ro="width",Po="height",Ol="Right",kl="Left",Bl="Top",zl="Bottom",un="padding",zi="margin",za="Width",jp="Height",_n="px",Vi=function(e){return mt.getComputedStyle(e)},UE=function(e){var t=Vi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Bg=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},jr=function(e,t){var i=t&&Vi(e)[sd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Xe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},Hu=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},Bx=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},FE=function(e){return function(t){return Xe.utils.snap(Bx(e),t)}},Zp=function(e){var t=Xe.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},OE=function(e){return function(t,i){return Zp(Bx(e))(t,i.direction)}},Ac=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},wn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},Tn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Cc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},zg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Rc={toggleActions:"play",anticipatePin:0},Gu={top:0,left:0,center:.5,bottom:1,right:1},hu=function(e,t){if(yi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in Gu?Gu[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Pc=function(e,t,i,r,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,m=Ht.createElement("div"),_=Io(i)||Bs(i,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,g=_?At:i,y=e.indexOf("start")!==-1,M=y?c:u,S="border-color:"+M+";font-size:"+h+";color:"+M+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(S+=(r===vn?Yp:Kp)+":"+(o+parseFloat(f))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=y,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=S,m.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+r.op.d2],du(m,0,r,y),m},du=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+za]=1,s["border"+a+za]=0,s[i.p]=t+"px",Xe.set(e,s)},pt=[],cd={},rc,Vg=function(){return Bn()-qi>34&&(rc||(rc=requestAnimationFrame(es)))},$o=function(){(!Qn||!Qn.isPressed||Qn.startX>At.clientWidth)&&(gt.cache++,Qn?rc||(rc=requestAnimationFrame(es)):es(),qi||Uo("scrollStart"),qi=Bn())},Xf=function(){Lx=mt.innerWidth,Dx=mt.innerHeight},vl=function(e){gt.cache++,(e===!0||!kn&&!Px&&!Ht.fullscreenElement&&!Ht.webkitFullscreenElement&&(!od||Lx!==mt.innerWidth||Math.abs(mt.innerHeight-Dx)>mt.innerHeight*.25))&&Vu.restart(!0)},No={},kE=[],zx=function n(){return Tn(et,"scrollEnd",n)||xo(!0)},Uo=function(e){return No[e]&&No[e].map(function(t){return t()})||kE},Si=[],Vx=function(e){for(var t=0;t<Si.length;t+=5)(!e||Si[t+4]&&Si[t+4].query===e)&&(Si[t].style.cssText=Si[t+1],Si[t].getBBox&&Si[t].setAttribute("transform",Si[t+2]||""),Si[t+3].uncache=1)},Hx=function(){return gt.forEach(function(e){return Gn(e)&&++e.cacheID&&(e.rec=e())})},Jp=function(e,t){var i;for(ei=0;ei<pt.length;ei++)i=pt[ei],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Fl=!0,t&&Vx(t),t||Uo("revert")},Gx=function(e,t){gt.cache++,(t||!ti)&&gt.forEach(function(i){return Gn(i)&&i.cacheID++&&(i.rec=0)}),yi(e)&&(mt.history.scrollRestoration=qp=e)},ti,Do=0,Hg,BE=function(){if(Hg!==Do){var e=Hg=Do;requestAnimationFrame(function(){return e===Do&&xo(!0)})}},Wx=function(){At.appendChild(Ea),$p=!Qn&&Ea.offsetHeight||mt.innerHeight,At.removeChild(Ea)},Gg=function(e){return ic(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},xo=function(e,t){if(Mi=Ht.documentElement,At=Ht.body,Xp=[mt,Ht,Mi,At],qi&&!e&&!Fl){wn(et,"scrollEnd",zx);return}Wx(),ti=et.isRefreshing=!0,Fl||Hx();var i=Uo("refreshInit");Rx&&et.sort(),t||Jp(),gt.forEach(function(r){Gn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),pt.slice(0).forEach(function(r){return r.refresh()}),Fl=!1,pt.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),ld=1,Gg(!0),pt.forEach(function(r){var s=Mr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),Gg(!1),ld=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),gt.forEach(function(r){Gn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Gx(qp,1),Vu.pause(),Do++,ti=2,es(2),pt.forEach(function(r){return Gn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),ti=et.isRefreshing=!1,Uo("refresh")},ud=0,pu=1,Vl,es=function(e){if(e===2||!ti&&!Fl){et.isUpdating=!0,Vl&&Vl.update(0);var t=pt.length,i=Bn(),r=i-Gf>=50,s=t&&pt[0].scroll();if(pu=ud>s?-1:1,ti||(ud=s),r&&(qi&&!df&&i-qi>200&&(qi=0,Uo("scrollEnd")),pl=Gf,Gf=i),pu<0){for(ei=t;ei-- >0;)pt[ei]&&pt[ei].update(0,r);pu=1}else for(ei=0;ei<t;ei++)pt[ei]&&pt[ei].update(0,r);et.isUpdating=!1}rc=0},fd=[Ox,kx,Kp,Yp,zi+zl,zi+Ol,zi+Bl,zi+kl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],mu=fd.concat([Ro,Po,"boxSizing","max"+za,"max"+jp,"position",zi,un,un+Bl,un+Ol,un+zl,un+kl]),zE=function(e,t,i){Ta(i);var r=e._gsap;if(r.spacerIsNative)Ta(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},qf=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=fd.length,o=t.style,a=e.style,l;s--;)l=fd[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[Kp]=a[Yp]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ro]=Hu(e,si)+_n,o[Po]=Hu(e,vn)+_n,o[un]=a[zi]=a[kx]=a[Ox]="0",Ta(r),a[Ro]=a["max"+za]=i[Ro],a[Po]=a["max"+jp]=i[Po],a[un]=i[un],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},VE=/([A-Z])/g,Ta=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Xe.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(VE,"-$1").toLowerCase())}},Dc=function(e){for(var t=mu.length,i=e.style,r=[],s=0;s<t;s++)r.push(mu[s],i[mu[s]]);return r.t=e,r},HE=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},gu={left:0,top:0},Wg=function(e,t,i,r,s,o,a,l,c,u,h,f,d,m){Gn(e)&&(e=e(l)),yi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?hu("0"+e.substr(3),i):0));var _=d?d.time():0,p,g,y;if(d&&d.seek(0),isNaN(e)||(e=+e),_l(e))d&&(e=Xe.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&du(a,i,r,!0);else{Gn(t)&&(t=t(l));var M=(e||"0").split(" "),S,w,T,E;y=ui(t,l)||At,S=jr(y)||{},(!S||!S.left&&!S.top)&&Vi(y).display==="none"&&(E=y.style.display,y.style.display="block",S=jr(y),E?y.style.display=E:y.style.removeProperty("display")),w=hu(M[0],S[r.d]),T=hu(M[1]||"0",i),e=S[r.p]-c[r.p]-u+w+s-T,a&&du(a,T,r,i-T<20||a._isStart&&T>20),i-=i-T}if(m&&(l[m]=e||-.001,e<0&&(e=0)),o){var v=e+i,x=o._isStart;p="scroll"+r.d2,du(o,v,r,x&&v>20||!x&&(h?Math.max(At[p],Mi[p]):o.parentNode[p])<=v+1),h&&(c=jr(a),h&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+_n))}return d&&y&&(p=jr(y),d.seek(f),g=jr(y),d._caScrollDist=p[r.p]-g[r.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},GE=/(webkit|moz|length|cssText|inset)/i,Xg=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===At){e._stOrig=s.cssText,a=Vi(e);for(o in a)!+o&&!GE.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Xe.core.getCache(e).uncache=1,t.appendChild(e)}},Xx=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},Lc=function(e,t,i){var r={};r[t.p]="+="+i,Xe.set(e,r)},qg=function(e,t){var i=Ws(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,m={};c=c||i();var _=Xx(i,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=m,m[r]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){gt.cache++,o.tween&&es()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Xe.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},wn(e,"wheel",i.wheelHandler),et.isTouch&&wn(e,"touchmove",i.wheelHandler),s},et=(function(){function n(t,i){ua||n.register(Xe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),ad(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ml){this.update=this.refresh=this.kill=_r;return}i=Bg(yi(i)||_l(i)||i.nodeType?{trigger:i}:i,Rc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,m=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,g=s.onScrubComplete,y=s.onSnapComplete,M=s.once,S=s.snap,w=s.pinReparent,T=s.pinSpacer,E=s.containerAnimation,v=s.fastScrollEnd,x=s.preventOverlaps,D=i.horizontal||i.containerAnimation&&i.horizontal!==!1?si:vn,P=!h&&h!==0,I=ui(i.scroller||mt),G=Xe.core.getCache(I),$=Io(I),X=("pinType"in i?i.pinType:Bs(I,"pinType")||$&&"fixed")==="fixed",W=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],B=P&&i.toggleActions.split(" "),te="markers"in i?i.markers:Rc.markers,le=$?0:parseFloat(Vi(I)["border"+D.p2+za])||0,k=this,xe=i.onRefreshInit&&function(){return i.onRefreshInit(k)},de=IE(I,$,D),ke=NE(I,$),$e=0,je=0,re=0,H=Ws(I,D),j,ue,pe,Me,U,N,V,J,Z,F,L,me,fe,se,he,C,b,O,K,ne,Y,Ee,ge,ze,Ce,_e,ye,Ae,Le,Re,nt,z,Te,be,Ie,ve,ae,Ve,Je;if(k._startClamp=k._endClamp=!1,k._dir=D,p*=45,k.scroller=I,k.scroll=E?E.time.bind(E):H,Me=H(),k.vars=i,r=r||i.animation,"refreshPriority"in i&&(Rx=1,i.refreshPriority===-9999&&(Vl=k)),G.tweenScroll=G.tweenScroll||{top:qg(I,vn),left:qg(I,si)},k.tweenTo=j=G.tweenScroll[D.p],k.scrubDuration=function(Ue){Te=_l(Ue)&&Ue,Te?z?z.duration(Ue):z=Xe.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Te,paused:!0,onComplete:function(){return g&&g(k)}}):(z&&z.progress(1).kill(),z=0)},r&&(r.vars.lazy=!1,r._initted&&!k.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),k.animation=r.pause(),r.scrollTrigger=k,k.scrubDuration(h),Re=0,l||(l=r.vars.id)),S&&((!co(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in At.style&&Xe.set($?[At,Mi]:I,{scrollBehavior:"auto"}),gt.forEach(function(Ue){return Gn(Ue)&&Ue.target===($?Ht.scrollingElement||Mi:I)&&(Ue.smooth=!1)}),pe=Gn(S.snapTo)?S.snapTo:S.snapTo==="labels"?FE(r):S.snapTo==="labelsDirectional"?OE(r):S.directional!==!1?function(Ue,it){return Zp(S.snapTo)(Ue,Bn()-je<500?0:it.direction)}:Xe.utils.snap(S.snapTo),be=S.duration||{min:.1,max:2},be=co(be)?Ul(be.min,be.max):Ul(be,be),Ie=Xe.delayedCall(S.delay||Te/2||.1,function(){var Ue=H(),it=Bn()-je<500,Qe=j.tween;if((it||Math.abs(k.getVelocity())<10)&&!Qe&&!df&&$e!==Ue){var rt=(Ue-N)/se,nn=r&&!P?r.totalProgress():rt,at=it?0:(nn-nt)/(Bn()-pl)*1e3||0,Wt=Xe.utils.clamp(-rt,1-rt,qo(at/2)*at/.185),dn=rt+(S.inertia===!1?0:Wt),Xt,Lt,Tt=S,In=Tt.onStart,Vt=Tt.onInterrupt,Nn=Tt.onComplete;if(Xt=pe(dn,k),_l(Xt)||(Xt=dn),Lt=Math.max(0,Math.round(N+Xt*se)),Ue<=V&&Ue>=N&&Lt!==Ue){if(Qe&&!Qe._initted&&Qe.data<=qo(Lt-Ue))return;S.inertia===!1&&(Wt=Xt-rt),j(Lt,{duration:be(qo(Math.max(qo(dn-nn),qo(Xt-nn))*.185/at/.05||0)),ease:S.ease||"power3",data:qo(Lt-Ue),onInterrupt:function(){return Ie.restart(!0)&&Vt&&Vt(k)},onComplete:function(){k.update(),$e=H(),r&&!P&&(z?z.resetTo("totalProgress",Xt,r._tTime/r._tDur):r.progress(Xt)),Re=nt=r&&!P?r.totalProgress():k.progress,y&&y(k),Nn&&Nn(k)}},Ue,Wt*se,Lt-Ue-Wt*se),In&&In(k,j.tween)}}else k.isActive&&$e!==Ue&&Ie.restart(!0)}).pause()),l&&(cd[l]=k),f=k.trigger=ui(f||d!==!0&&d),Je=f&&f._gsap&&f._gsap.stRevert,Je&&(Je=Je(k)),d=d===!0?f:ui(d),yi(a)&&(a={targets:f,className:a}),d&&(m===!1||m===zi||(m=!m&&d.parentNode&&d.parentNode.style&&Vi(d.parentNode).display==="flex"?!1:un),k.pin=d,ue=Xe.core.getCache(d),ue.spacer?he=ue.pinState:(T&&(T=ui(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),ue.spacerIsNative=!!T,T&&(ue.spacerState=Dc(T))),ue.spacer=O=T||Ht.createElement("div"),O.classList.add("pin-spacer"),l&&O.classList.add("pin-spacer-"+l),ue.pinState=he=Dc(d)),i.force3D!==!1&&Xe.set(d,{force3D:!0}),k.spacer=O=ue.spacer,Le=Vi(d),ze=Le[m+D.os2],ne=Xe.getProperty(d),Y=Xe.quickSetter(d,D.a,_n),qf(d,O,Le),b=Dc(d)),te){me=co(te)?Bg(te,zg):zg,F=Pc("scroller-start",l,I,D,me,0),L=Pc("scroller-end",l,I,D,me,0,F),K=F["offset"+D.op.d2];var yt=ui(Bs(I,"content")||I);J=this.markerStart=Pc("start",l,yt,D,me,K,0,E),Z=this.markerEnd=Pc("end",l,yt,D,me,K,0,E),E&&(Ve=Xe.quickSetter([J,Z],D.a,_n)),!X&&!(Ar.length&&Bs(I,"fixedMarkers")===!0)&&(UE($?At:I),Xe.set([F,L],{force3D:!0}),_e=Xe.quickSetter(F,D.a,_n),Ae=Xe.quickSetter(L,D.a,_n))}if(E){var Be=E.vars.onUpdate,Ye=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){k.update(0,0,1),Be&&Be.apply(E,Ye||[])})}if(k.previous=function(){return pt[pt.indexOf(k)-1]},k.next=function(){return pt[pt.indexOf(k)+1]},k.revert=function(Ue,it){if(!it)return k.kill(!0);var Qe=Ue!==!1||!k.enabled,rt=kn;Qe!==k.isReverted&&(Qe&&(ve=Math.max(H(),k.scroll.rec||0),re=k.progress,ae=r&&r.progress()),J&&[J,Z,F,L].forEach(function(nn){return nn.style.display=Qe?"none":"block"}),Qe&&(kn=k,k.update(Qe)),d&&(!w||!k.isActive)&&(Qe?zE(d,O,he):qf(d,O,Vi(d),Ce)),Qe||k.update(Qe),kn=rt,k.isReverted=Qe)},k.refresh=function(Ue,it,Qe,rt){if(!((kn||!k.enabled)&&!it)){if(d&&Ue&&qi){wn(n,"scrollEnd",zx);return}!ti&&xe&&xe(k),kn=k,j.tween&&!Qe&&(j.tween.kill(),j.tween=0),z&&z.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(He){return He.vars.immediateRender&&He.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),k.isReverted||k.revert(!0,!0),k._subPinOffset=!1;var nn=de(),at=ke(),Wt=E?E.duration():Mr(I,D),dn=se<=.01||!se,Xt=0,Lt=rt||0,Tt=co(Qe)?Qe.end:i.end,In=i.endTrigger||f,Vt=co(Qe)?Qe.start:i.start||(i.start===0||!f?0:d?"0 0":"0 100%"),Nn=k.pinnedContainer=i.pinnedContainer&&ui(i.pinnedContainer,k),Ui=f&&Math.max(0,pt.indexOf(k))||0,pn=Ui,mn,bn,Ur,Vo,A,q,ie,ee,Q,Pe,Ne,De,We;for(te&&co(Qe)&&(De=Xe.getProperty(F,D.p),We=Xe.getProperty(L,D.p));pn-- >0;)q=pt[pn],q.end||q.refresh(0,1)||(kn=k),ie=q.pin,ie&&(ie===f||ie===d||ie===Nn)&&!q.isReverted&&(Pe||(Pe=[]),Pe.unshift(q),q.revert(!0,!0)),q!==pt[pn]&&(Ui--,pn--);for(Gn(Vt)&&(Vt=Vt(k)),Vt=Ug(Vt,"start",k),N=Wg(Vt,f,nn,D,H(),J,F,k,at,le,X,Wt,E,k._startClamp&&"_startClamp")||(d?-.001:0),Gn(Tt)&&(Tt=Tt(k)),yi(Tt)&&!Tt.indexOf("+=")&&(~Tt.indexOf(" ")?Tt=(yi(Vt)?Vt.split(" ")[0]:"")+Tt:(Xt=hu(Tt.substr(2),nn),Tt=yi(Vt)?Vt:(E?Xe.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,N):N)+Xt,In=f)),Tt=Ug(Tt,"end",k),V=Math.max(N,Wg(Tt||(In?"100% 0":Wt),In,nn,D,H()+Xt,Z,L,k,at,le,X,Wt,E,k._endClamp&&"_endClamp"))||-.001,Xt=0,pn=Ui;pn--;)q=pt[pn]||{},ie=q.pin,ie&&q.start-q._pinPush<=N&&!E&&q.end>0&&(mn=q.end-(k._startClamp?Math.max(0,q.start):q.start),(ie===f&&q.start-q._pinPush<N||ie===Nn)&&isNaN(Vt)&&(Xt+=mn*(1-q.progress)),ie===d&&(Lt+=mn));if(N+=Xt,V+=Xt,k._startClamp&&(k._startClamp+=Xt),k._endClamp&&!ti&&(k._endClamp=V||-.001,V=Math.min(V,Mr(I,D))),se=V-N||(N-=.01)&&.001,dn&&(re=Xe.utils.clamp(0,1,Xe.utils.normalize(N,V,ve))),k._pinPush=Lt,J&&Xt&&(mn={},mn[D.a]="+="+Xt,Nn&&(mn[D.p]="-="+H()),Xe.set([J,Z],mn)),d&&!(ld&&k.end>=Mr(I,D)))mn=Vi(d),Vo=D===vn,Ur=H(),Ee=parseFloat(ne(D.a))+Lt,!Wt&&V>1&&(Ne=($?Ht.scrollingElement||Mi:I).style,Ne={style:Ne,value:Ne["overflow"+D.a.toUpperCase()]},$&&Vi(At)["overflow"+D.a.toUpperCase()]!=="scroll"&&(Ne.style["overflow"+D.a.toUpperCase()]="scroll")),qf(d,O,mn),b=Dc(d),bn=jr(d,!0),ee=X&&Ws(I,Vo?si:vn)(),m?(Ce=[m+D.os2,se+Lt+_n],Ce.t=O,pn=m===un?Hu(d,D)+se+Lt:0,pn&&(Ce.push(D.d,pn+_n),O.style.flexBasis!=="auto"&&(O.style.flexBasis=pn+_n)),Ta(Ce),Nn&&pt.forEach(function(He){He.pin===Nn&&He.vars.pinSpacing!==!1&&(He._subPinOffset=!0)}),X&&H(ve)):(pn=Hu(d,D),pn&&O.style.flexBasis!=="auto"&&(O.style.flexBasis=pn+_n)),X&&(A={top:bn.top+(Vo?Ur-N:ee)+_n,left:bn.left+(Vo?ee:Ur-N)+_n,boxSizing:"border-box",position:"fixed"},A[Ro]=A["max"+za]=Math.ceil(bn.width)+_n,A[Po]=A["max"+jp]=Math.ceil(bn.height)+_n,A[zi]=A[zi+Bl]=A[zi+Ol]=A[zi+zl]=A[zi+kl]="0",A[un]=mn[un],A[un+Bl]=mn[un+Bl],A[un+Ol]=mn[un+Ol],A[un+zl]=mn[un+zl],A[un+kl]=mn[un+kl],C=HE(he,A,w),ti&&H(0)),r?(Q=r._initted,Vf(1),r.render(r.duration(),!0,!0),ge=ne(D.a)-Ee+se+Lt,ye=Math.abs(se-ge)>1,X&&ye&&C.splice(C.length-2,2),r.render(0,!0,!0),Q||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Vf(0)):ge=se,Ne&&(Ne.value?Ne.style["overflow"+D.a.toUpperCase()]=Ne.value:Ne.style.removeProperty("overflow-"+D.a));else if(f&&H()&&!E)for(bn=f.parentNode;bn&&bn!==At;)bn._pinOffset&&(N-=bn._pinOffset,V-=bn._pinOffset),bn=bn.parentNode;Pe&&Pe.forEach(function(He){return He.revert(!1,!0)}),k.start=N,k.end=V,Me=U=ti?ve:H(),!E&&!ti&&(Me<ve&&H(ve),k.scroll.rec=0),k.revert(!1,!0),je=Bn(),Ie&&($e=-1,Ie.restart(!0)),kn=0,r&&P&&(r._initted||ae)&&r.progress()!==ae&&r.progress(ae||0,!0).render(r.time(),!0,!0),(dn||re!==k.progress||E||_||r&&!r._initted)&&(r&&!P&&(r._initted||re||r.vars.immediateRender!==!1)&&r.totalProgress(E&&N<-.001&&!re?Xe.utils.normalize(N,V,0):re,!0),k.progress=dn||(Me-N)/se===re?0:re),d&&m&&(O._pinOffset=Math.round(k.progress*ge)),z&&z.invalidate(),isNaN(De)||(De-=Xe.getProperty(F,D.p),We-=Xe.getProperty(L,D.p),Lc(F,D,De),Lc(J,D,De-(rt||0)),Lc(L,D,We),Lc(Z,D,We-(rt||0))),dn&&!ti&&k.update(),u&&!ti&&!fe&&(fe=!0,u(k),fe=!1)}},k.getVelocity=function(){return(H()-U)/(Bn()-pl)*1e3||0},k.endAnimation=function(){il(k.callbackAnimation),r&&(z?z.progress(1):r.paused()?P||il(r,k.direction<0,1):il(r,r.reversed()))},k.labelToScroll=function(Ue){return r&&r.labels&&(N||k.refresh()||N)+r.labels[Ue]/r.duration()*se||0},k.getTrailing=function(Ue){var it=pt.indexOf(k),Qe=k.direction>0?pt.slice(0,it).reverse():pt.slice(it+1);return(yi(Ue)?Qe.filter(function(rt){return rt.vars.preventOverlaps===Ue}):Qe).filter(function(rt){return k.direction>0?rt.end<=N:rt.start>=V})},k.update=function(Ue,it,Qe){if(!(E&&!Qe&&!Ue)){var rt=ti===!0?ve:k.scroll(),nn=Ue?0:(rt-N)/se,at=nn<0?0:nn>1?1:nn||0,Wt=k.progress,dn,Xt,Lt,Tt,In,Vt,Nn,Ui;if(it&&(U=Me,Me=E?H():rt,S&&(nt=Re,Re=r&&!P?r.totalProgress():at)),p&&d&&!kn&&!Tc&&qi&&(!at&&N<rt+(rt-U)/(Bn()-pl)*p?at=1e-4:at===1&&V>rt+(rt-U)/(Bn()-pl)*p&&(at=.9999)),at!==Wt&&k.enabled){if(dn=k.isActive=!!at&&at<1,Xt=!!Wt&&Wt<1,Vt=dn!==Xt,In=Vt||!!at!=!!Wt,k.direction=at>Wt?1:-1,k.progress=at,In&&!kn&&(Lt=at&&!Wt?0:at===1?1:Wt===1?2:3,P&&(Tt=!Vt&&B[Lt+1]!=="none"&&B[Lt+1]||B[Lt],Ui=r&&(Tt==="complete"||Tt==="reset"||Tt in r))),x&&(Vt||Ui)&&(Ui||h||!r)&&(Gn(x)?x(k):k.getTrailing(x).forEach(function(Ur){return Ur.endAnimation()})),P||(z&&!kn&&!Tc?(z._dp._time-z._start!==z._time&&z.render(z._dp._time-z._start),z.resetTo?z.resetTo("totalProgress",at,r._tTime/r._tDur):(z.vars.totalProgress=at,z.invalidate().restart())):r&&r.totalProgress(at,!!(kn&&(je||Ue)))),d){if(Ue&&m&&(O.style[m+D.os2]=ze),!X)Y(gl(Ee+ge*at));else if(In){if(Nn=!Ue&&at>Wt&&V+1>rt&&rt+1>=Mr(I,D),w)if(!Ue&&(dn||Nn)){var pn=jr(d,!0),mn=rt-N;Xg(d,At,pn.top+(D===vn?mn:0)+_n,pn.left+(D===vn?0:mn)+_n)}else Xg(d,O);Ta(dn||Nn?C:b),ye&&at<1&&dn||Y(Ee+(at===1&&!Nn?ge:0))}}S&&!j.tween&&!kn&&!Tc&&Ie.restart(!0),a&&(Vt||M&&at&&(at<1||!Hf))&&ic(a.targets).forEach(function(Ur){return Ur.classList[dn||M?"add":"remove"](a.className)}),o&&!P&&!Ue&&o(k),In&&!kn?(P&&(Ui&&(Tt==="complete"?r.pause().totalProgress(1):Tt==="reset"?r.restart(!0).pause():Tt==="restart"?r.restart(!0):r[Tt]()),o&&o(k)),(Vt||!Hf)&&(c&&Vt&&Wf(k,c),W[Lt]&&Wf(k,W[Lt]),M&&(at===1?k.kill(!1,1):W[Lt]=0),Vt||(Lt=at===1?1:3,W[Lt]&&Wf(k,W[Lt]))),v&&!dn&&Math.abs(k.getVelocity())>(_l(v)?v:2500)&&(il(k.callbackAnimation),z?z.progress(1):il(r,Tt==="reverse"?1:!at,1))):P&&o&&!kn&&o(k)}if(Ae){var bn=E?rt/E.duration()*(E._caScrollDist||0):rt;_e(bn+(F._isFlipped?1:0)),Ae(bn)}Ve&&Ve(-rt/E.duration()*(E._caScrollDist||0))}},k.enable=function(Ue,it){k.enabled||(k.enabled=!0,wn(I,"resize",vl),$||wn(I,"scroll",$o),xe&&wn(n,"refreshInit",xe),Ue!==!1&&(k.progress=re=0,Me=U=$e=H()),it!==!1&&k.refresh())},k.getTween=function(Ue){return Ue&&j?j.tween:z},k.setPositions=function(Ue,it,Qe,rt){if(E){var nn=E.scrollTrigger,at=E.duration(),Wt=nn.end-nn.start;Ue=nn.start+Wt*Ue/at,it=nn.start+Wt*it/at}k.refresh(!1,!1,{start:Fg(Ue,Qe&&!!k._startClamp),end:Fg(it,Qe&&!!k._endClamp)},rt),k.update()},k.adjustPinSpacing=function(Ue){if(Ce&&Ue){var it=Ce.indexOf(D.d)+1;Ce[it]=parseFloat(Ce[it])+Ue+_n,Ce[1]=parseFloat(Ce[1])+Ue+_n,Ta(Ce)}},k.disable=function(Ue,it){if(Ue!==!1&&k.revert(!0,!0),k.enabled&&(k.enabled=k.isActive=!1,it||z&&z.pause(),ve=0,ue&&(ue.uncache=1),xe&&Tn(n,"refreshInit",xe),Ie&&(Ie.pause(),j.tween&&j.tween.kill()&&(j.tween=0)),!$)){for(var Qe=pt.length;Qe--;)if(pt[Qe].scroller===I&&pt[Qe]!==k)return;Tn(I,"resize",vl),$||Tn(I,"scroll",$o)}},k.kill=function(Ue,it){k.disable(Ue,it),z&&!it&&z.kill(),l&&delete cd[l];var Qe=pt.indexOf(k);Qe>=0&&pt.splice(Qe,1),Qe===ei&&pu>0&&ei--,Qe=0,pt.forEach(function(rt){return rt.scroller===k.scroller&&(Qe=1)}),Qe||ti||(k.scroll.rec=0),r&&(r.scrollTrigger=null,Ue&&r.revert({kill:!1}),it||r.kill()),J&&[J,Z,F,L].forEach(function(rt){return rt.parentNode&&rt.parentNode.removeChild(rt)}),Vl===k&&(Vl=0),d&&(ue&&(ue.uncache=1),Qe=0,pt.forEach(function(rt){return rt.pin===d&&Qe++}),Qe||(ue.spacer=0)),i.onKill&&i.onKill(k)},pt.push(k),k.enable(!1,!1),Je&&Je(k),r&&r.add&&!se){var ct=k.update;k.update=function(){k.update=ct,gt.cache++,N||V||k.refresh()},Xe.delayedCall(.01,k.update),se=.01,N=V=0}else k.refresh();d&&BE()},n.register=function(i){return ua||(Xe=i||Nx(),Ix()&&window.document&&n.enable(),ua=ml),ua},n.defaults=function(i){if(i)for(var r in i)Rc[r]=i[r];return Rc},n.disable=function(i,r){ml=0,pt.forEach(function(o){return o[r?"kill":"disable"](i)}),Tn(mt,"wheel",$o),Tn(Ht,"scroll",$o),clearInterval(Ec),Tn(Ht,"touchcancel",_r),Tn(At,"touchstart",_r),Ac(Tn,Ht,"pointerdown,touchstart,mousedown",Og),Ac(Tn,Ht,"pointerup,touchend,mouseup",kg),Vu.kill(),wc(Tn);for(var s=0;s<gt.length;s+=3)Cc(Tn,gt[s],gt[s+1]),Cc(Tn,gt[s],gt[s+2])},n.enable=function(){if(mt=window,Ht=document,Mi=Ht.documentElement,At=Ht.body,Xe&&(ic=Xe.utils.toArray,Ul=Xe.utils.clamp,ad=Xe.core.context||_r,Vf=Xe.core.suppressOverwrites||_r,qp=mt.history.scrollRestoration||"auto",ud=mt.pageYOffset||0,Xe.core.globals("ScrollTrigger",n),At)){ml=1,Ea=document.createElement("div"),Ea.style.height="100vh",Ea.style.position="absolute",Wx(),LE(),ln.register(Xe),n.isTouch=ln.isTouch,Ts=ln.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),od=ln.isTouch===1,wn(mt,"wheel",$o),Xp=[mt,Ht,Mi,At],Xe.matchMedia?(n.matchMedia=function(c){var u=Xe.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},Xe.addEventListener("matchMediaInit",function(){Hx(),Jp()}),Xe.addEventListener("matchMediaRevert",function(){return Vx()}),Xe.addEventListener("matchMedia",function(){xo(0,1),Uo("matchMedia")}),Xe.matchMedia().add("(orientation: portrait)",function(){return Xf(),Xf})):console.warn("Requires GSAP 3.11.0 or later"),Xf(),wn(Ht,"scroll",$o);var i=At.hasAttribute("style"),r=At.style,s=r.borderTopStyle,o=Xe.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=jr(At),vn.m=Math.round(a.top+vn.sc())||0,si.m=Math.round(a.left+si.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(At.setAttribute("style",""),At.removeAttribute("style")),Ec=setInterval(Vg,250),Xe.delayedCall(.5,function(){return Tc=0}),wn(Ht,"touchcancel",_r),wn(At,"touchstart",_r),Ac(wn,Ht,"pointerdown,touchstart,mousedown",Og),Ac(wn,Ht,"pointerup,touchend,mouseup",kg),sd=Xe.utils.checkPrefix("transform"),mu.push(sd),ua=Bn(),Vu=Xe.delayedCall(.2,xo).pause(),fa=[Ht,"visibilitychange",function(){var c=mt.innerWidth,u=mt.innerHeight;Ht.hidden?(Ig=c,Ng=u):(Ig!==c||Ng!==u)&&vl()},Ht,"DOMContentLoaded",xo,mt,"load",xo,mt,"resize",vl],wc(wn),pt.forEach(function(c){return c.enable(0,1)}),l=0;l<gt.length;l+=3)Cc(Tn,gt[l],gt[l+1]),Cc(Tn,gt[l],gt[l+2])}},n.config=function(i){"limitCallbacks"in i&&(Hf=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Ec)||(Ec=r)&&setInterval(Vg,r),"ignoreMobileResize"in i&&(od=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(wc(Tn)||wc(wn,i.autoRefreshEvents||"none"),Px=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=ui(i),o=gt.indexOf(s),a=Io(s);~o&&gt.splice(o,a?6:2),r&&(a?Ar.unshift(mt,r,At,r,Mi,r):Ar.unshift(s,r))},n.clearMatchMedia=function(i){pt.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(yi(i)?ui(i):i).getBoundingClientRect(),a=o[s?Ro:Po]*r||0;return s?o.right-a>0&&o.left+a<mt.innerWidth:o.bottom-a>0&&o.top+a<mt.innerHeight},n.positionInViewport=function(i,r,s){yi(i)&&(i=ui(i));var o=i.getBoundingClientRect(),a=o[s?Ro:Po],l=r==null?a/2:r in Gu?Gu[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/mt.innerWidth:(o.top+l)/mt.innerHeight},n.killAll=function(i){if(pt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=No.killAll||[];No={},r.forEach(function(s){return s()})}},n})();et.version="3.14.2";et.saveStyles=function(n){return n?ic(n).forEach(function(e){if(e&&e.style){var t=Si.indexOf(e);t>=0&&Si.splice(t,5),Si.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Xe.core.getCache(e),ad())}}):Si};et.revert=function(n,e){return Jp(!n,e)};et.create=function(n,e){return new et(n,e)};et.refresh=function(n){return n?vl(!0):(ua||et.register())&&xo(!0)};et.update=function(n){return++gt.cache&&es(n===!0?2:0)};et.clearScrollMemory=Gx;et.maxScroll=function(n,e){return Mr(n,e?si:vn)};et.getScrollFunc=function(n,e){return Ws(ui(n),e?si:vn)};et.getById=function(n){return cd[n]};et.getAll=function(){return pt.filter(function(n){return n.vars.id!=="ScrollSmoother"})};et.isScrolling=function(){return!!qi};et.snapDirectional=Zp;et.addEventListener=function(n,e){var t=No[n]||(No[n]=[]);~t.indexOf(e)||t.push(e)};et.removeEventListener=function(n,e){var t=No[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};et.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Xe.delayedCall(r,function(){u(h,f),h=[],f=[]}).pause();return function(m){h.length||d.restart(!0),h.push(m.trigger),f.push(m),s<=h.length&&d.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Gn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Gn(s)&&(s=s(),wn(et,"refresh",function(){return s=e.batchMax()})),ic(n).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,t.push(et.create(c))}),t};var $g=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},$f=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(ln.isTouch?" pinch-zoom":""):"none",e===Mi&&n(At,t)},Ic={auto:1,scroll:1},WE=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Xe.core.getCache(s),a=Bn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==At&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Ic[(l=Vi(s)).overflowY]||Ic[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Io(s)&&(Ic[(l=Vi(s)).overflowY]||Ic[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},qx=function(e,t,i,r){return ln.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&WE,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&wn(Ht,ln.eventTypes[0],Kg,!1,!0)},onDisable:function(){return Tn(Ht,ln.eventTypes[0],Kg,!0)}})},XE=/(input|label|select|textarea)/i,Yg,Kg=function(e){var t=XE.test(e.target.tagName);(t||Yg)&&(e._gsapAllow=!0,Yg=t)},qE=function(e){co(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=ui(e.target)||Mi,u=Xe.core.globals().ScrollSmoother,h=u&&u.get(),f=Ts&&(e.content&&ui(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Ws(c,vn),m=Ws(c,si),_=1,p=(ln.isTouch&&mt.visualViewport?mt.visualViewport.scale*mt.visualViewport.width:mt.outerWidth)/mt.innerWidth,g=0,y=Gn(r)?function(){return r(a)}:function(){return r||2.8},M,S,w=qx(c,e.type,!0,s),T=function(){return S=!1},E=_r,v=_r,x=function(){l=Mr(c,vn),v=Ul(Ts?1:0,l),i&&(E=Ul(0,Mr(c,si))),M=Do},D=function(){f._gsap.y=gl(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},P=function(){if(S){requestAnimationFrame(T);var te=gl(a.deltaY/2),le=v(d.v-te);if(f&&le!==d.v+d.offset){d.offset=le-d.v;var k=gl((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+k+", 0, 1)",f._gsap.y=k+"px",d.cacheID=gt.cache,es()}return!0}d.offset&&D(),S=!0},I,G,$,X,W=function(){x(),I.isActive()&&I.vars.scrollY>l&&(d()>l?I.progress(1)&&d(l):I.resetTo("scrollY",l))};return f&&Xe.set(f,{y:"+=0"}),e.ignoreCheck=function(B){return Ts&&B.type==="touchmove"&&P()||_>1.05&&B.type!=="touchstart"||a.isGesturing||B.touches&&B.touches.length>1},e.onPress=function(){S=!1;var B=_;_=gl((mt.visualViewport&&mt.visualViewport.scale||1)/p),I.pause(),B!==_&&$f(c,_>1.01?!0:i?!1:"x"),G=m(),$=d(),x(),M=Do},e.onRelease=e.onGestureStart=function(B,te){if(d.offset&&D(),!te)X.restart(!0);else{gt.cache++;var le=y(),k,xe;i&&(k=m(),xe=k+le*.05*-B.velocityX/.227,le*=$g(m,k,xe,Mr(c,si)),I.vars.scrollX=E(xe)),k=d(),xe=k+le*.05*-B.velocityY/.227,le*=$g(d,k,xe,Mr(c,vn)),I.vars.scrollY=v(xe),I.invalidate().duration(le).play(.01),(Ts&&I.vars.scrollY>=l||k>=l-1)&&Xe.to({},{onUpdate:W,duration:le})}o&&o(B)},e.onWheel=function(){I._ts&&I.pause(),Bn()-g>1e3&&(M=0,g=Bn())},e.onChange=function(B,te,le,k,xe){if(Do!==M&&x(),te&&i&&m(E(k[2]===te?G+(B.startX-B.x):m()+te-k[1])),le){d.offset&&D();var de=xe[2]===le,ke=de?$+B.startY-B.y:d()+le-xe[1],$e=v(ke);de&&ke!==$e&&($+=$e-ke),d($e)}(le||te)&&es()},e.onEnable=function(){$f(c,i?!1:"x"),et.addEventListener("refresh",W),wn(mt,"resize",W),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=m.smooth=!1),w.enable()},e.onDisable=function(){$f(c,!0),Tn(mt,"resize",W),et.removeEventListener("refresh",W),w.kill()},e.lockAxis=e.lockAxis!==!1,a=new ln(e),a.iOS=Ts,Ts&&!d()&&d(1),Ts&&Xe.ticker.add(_r),X=a._dc,I=Xe.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Xx(d,d(),function(){return I.pause()})},onUpdate:es,onComplete:X.vars.onComplete}),a};et.sort=function(n){if(Gn(n))return pt.sort(n);var e=mt.pageYOffset||0;return et.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+mt.innerHeight}),pt.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};et.observe=function(n){return new ln(n)};et.normalizeScroll=function(n){if(typeof n>"u")return Qn;if(n===!0&&Qn)return Qn.enable();if(n===!1){Qn&&Qn.kill(),Qn=n;return}var e=n instanceof ln?n:qE(n);return Qn&&Qn.target===e.target&&Qn.kill(),Io(e.target)&&(Qn=e),e};et.core={_getVelocityProp:rd,_inputObserver:qx,_scrollers:gt,_proxies:Ar,bridge:{ss:function(){qi||Uo("scrollStart"),qi=Bn()},ref:function(){return kn}}};Nx()&&Xe.registerPlugin(et);var jg="1.3.19";function $x(n,e,t){return Math.max(n,Math.min(e,t))}function $E(n,e,t){return(1-t)*n+t*e}function YE(n,e,t,i){return $E(n,e,1-Math.exp(-t*i))}function KE(n,e){return(n%e+e)%e}var jE=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(n){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=n;const t=$x(0,this.currentTime/this.duration,1);e=t>=1;const i=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=YE(this.value,this.to,this.lerp*60,n),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(n,e,{lerp:t,duration:i,easing:r,onStart:s,onUpdate:o}){this.from=this.value=n,this.to=e,this.lerp=t,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function ZE(n,e){let t;return function(...i){clearTimeout(t),t=setTimeout(()=>{t=void 0,n.apply(this,i)},e)}}var JE=class{constructor(n,e,{autoResize:t=!0,debounce:i=250}={}){this.wrapper=n,this.content=e,t&&(this.debouncedResize=ZE(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Yx=class{events={};emit(n,...e){const t=this.events[n]||[];for(let i=0,r=t.length;i<r;i++)t[i]?.(...e)}on(n,e){return this.events[n]?this.events[n].push(e):this.events[n]=[e],()=>{this.events[n]=this.events[n]?.filter(t=>e!==t)}}off(n,e){this.events[n]=this.events[n]?.filter(t=>e!==t)}destroy(){this.events={}}},QE=100/6,vs={passive:!1};function Zg(n,e){return n===1?QE:n===2?e:1}var eT=class{constructor(n,e={wheelMultiplier:1,touchMultiplier:1}){this.element=n,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,vs),this.element.addEventListener("touchstart",this.onTouchStart,vs),this.element.addEventListener("touchmove",this.onTouchMove,vs),this.element.addEventListener("touchend",this.onTouchEnd,vs)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new Yx;on(n,e){return this.emitter.on(n,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,vs),this.element.removeEventListener("touchstart",this.onTouchStart,vs),this.element.removeEventListener("touchmove",this.onTouchMove,vs),this.element.removeEventListener("touchend",this.onTouchEnd,vs)}onTouchStart=n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})};onTouchMove=n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n,i=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:r},this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:n})};onTouchEnd=n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})};onWheel=n=>{let{deltaX:e,deltaY:t,deltaMode:i}=n;const r=Zg(i,this.window.width),s=Zg(i,this.window.height);e*=r,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:n})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},Jg=n=>Math.min(1,1.001-2**(-10*n)),tT=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new jE;emitter=new Yx;dimensions;virtualScroll;constructor({wrapper:n=window,content:e=document.documentElement,eventsTarget:t=n,smoothWheel:i=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f=h==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:m=1,autoResize:_=!0,prevent:p,virtualScroll:g,overscroll:y=!0,autoRaf:M=!1,anchors:S=!1,autoToggle:w=!1,allowNestedScroll:T=!1,__experimental__naiveDimensions:E=!1,naiveDimensions:v=E,stopInertiaOnNavigate:x=!1}={}){window.lenisVersion=jg,window.lenis||(window.lenis={}),window.lenis.version=jg,h==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),(!n||n===document.documentElement)&&(n=window),typeof a=="number"&&typeof l!="function"?l=Jg:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:n,content:e,eventsTarget:t,smoothWheel:i,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:d,wheelMultiplier:m,autoResize:_,prevent:p,virtualScroll:g,overscroll:y,autoRaf:M,anchors:S,autoToggle:w,allowNestedScroll:T,naiveDimensions:v,stopInertiaOnNavigate:x},this.dimensions=new JE(n,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new eT(t,{touchMultiplier:d,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(n,e){return this.emitter.on(n,e)}off(n,e){return this.emitter.off(n,e)}onScrollEnd=n=>{n instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&n.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const n=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[n]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=n=>{n.propertyName.includes("overflow")&&this.checkOverflow()};setScroll(n){this.isHorizontal?this.options.wrapper.scrollTo({left:n,behavior:"instant"}):this.options.wrapper.scrollTo({top:n,behavior:"instant"})}onClick=n=>{const i=n.composedPath().filter(s=>s instanceof HTMLAnchorElement&&s.href).map(s=>new URL(s.href)),r=new URL(window.location.href);if(this.options.anchors){const s=i.find(o=>r.host===o.host&&r.pathname===o.pathname&&o.hash);if(s){const o=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,a=`#${s.hash.split("#")[1]}`;this.scrollTo(a,o);return}}if(this.options.stopInertiaOnNavigate&&i.some(o=>r.host===o.host&&r.pathname!==o.pathname)){this.reset();return}};onPointerDown=n=>{n.button===1&&this.reset()};onVirtualScroll=n=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(n)===!1)return;const{deltaX:e,deltaY:t,event:i}=n;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const r=i.type.includes("touch"),s=i.type.includes("wheel");this.isTouching=i.type==="touchstart"||i.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&r&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=i.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent,h=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(c.find(g=>g instanceof HTMLElement&&(typeof u=="function"&&u?.(g)||g.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&g.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&g.hasAttribute?.("data-lenis-prevent-horizontal")||r&&g.hasAttribute?.("data-lenis-prevent-touch")||s&&g.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const m=r&&this.options.syncTouch,p=r&&i.type==="touchend";p&&(d=Math.sign(this.velocity)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...m?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const n=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-n,this.direction=Math.sign(this.animatedScroll-n),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=n=>{const e=n-(this.time||n);this.time=n,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(n,{offset:e=0,immediate:t=!1,lock:i=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:o=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:h}={}){if((this.isStopped||this.isLocked)&&!u)return;let f=n,d=e;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let m=null;if(typeof f=="string"?(m=document.querySelector(f),m||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof HTMLElement&&f?.nodeType&&(m=f),m){if(this.options.wrapper!==window){const p=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?p.left:p.top}const _=m.getBoundingClientRect();f=(this.isHorizontal?_.left:_.top)+this.animatedScroll}}if(typeof f=="number"){if(f+=d,f=Math.round(f),this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const m=f-this.animatedScroll;m>this.limit/2?f-=this.limit:m<-this.limit/2&&(f+=this.limit)}}else f=$x(0,f,this.limit);if(f===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=f),typeof o=="number"&&typeof a!="function"?a=Jg:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:a,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(m,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),r&&(this.targetScroll=m),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(n,{deltaX:e,deltaY:t}){const i=Date.now();n._lenis||(n._lenis={});const r=n._lenis;let s,o,a,l,c,u,h,f,d,m;if(i-(r.time??0)>2e3){r.time=Date.now();const E=window.getComputedStyle(n);if(r.computedStyle=E,s=["auto","overlay","scroll"].includes(E.overflowX),o=["auto","overlay","scroll"].includes(E.overflowY),c=["auto"].includes(E.overscrollBehaviorX),u=["auto"].includes(E.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=o,!(s||o))return!1;h=n.scrollWidth,f=n.scrollHeight,d=n.clientWidth,m=n.clientHeight,a=h>d,l=f>m,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=h,r.scrollHeight=f,r.clientWidth=d,r.clientHeight=m,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=u}else a=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,h=r.scrollWidth,f=r.scrollHeight,d=r.clientWidth,m=r.clientHeight,c=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const _=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let p,g,y,M,S,w;if(_==="horizontal")p=Math.round(n.scrollLeft),g=h-d,y=e,M=s,S=a,w=c;else if(_==="vertical")p=Math.round(n.scrollTop),g=f-m,y=t,M=o,S=l,w=u;else return!1;return!w&&(p>=g||p<=0)?!0:(y>0?p<g:p>0)&&M&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const n=this.options.wrapper;return this.isHorizontal?n.scrollX??n.scrollLeft:n.scrollY??n.scrollTop}get scroll(){return this.options.infinite?KE(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(n){this._isScrolling!==n&&(this._isScrolling=n,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(n){this._isStopped!==n&&(this._isStopped=n,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(n){this._isLocked!==n&&(this._isLocked=n,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let n="lenis";return this.options.autoToggle&&(n+=" lenis-autoToggle"),this.isStopped&&(n+=" lenis-stopped"),this.isLocked&&(n+=" lenis-locked"),this.isScrolling&&(n+=" lenis-scrolling"),this.isScrolling==="smooth"&&(n+=" lenis-smooth"),n}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};const cr=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},nT={class:"loader-bar-wrapper"},iT={__name:"PageLoader",emits:["loaded"],setup(n,{emit:e}){const t=e,i=qe(null),r=qe(null);return Ni(()=>{we.timeline({onComplete:()=>{t("loaded")}}).to(r.value,{width:"100%",duration:1.2,ease:"power2.inOut"}).to(i.value,{yPercent:-100,duration:.7,ease:"power3.inOut",delay:.15})}),(s,o)=>(Fe(),Ge("div",{class:"page-loader",ref_key:"loaderEl",ref:i},[o[0]||(o[0]=R("div",{class:"loader-logo"},"PK",-1)),R("div",nT,[R("div",{class:"loader-bar",ref_key:"barEl",ref:r},null,512)])],512))}},rT=cr(iT,[["__scopeId","data-v-eaf8bf1c"]]),hd=qa({lang:localStorage.getItem("lang")||"vi"}),sT={en:{nav:{home:"Home",projects:"Projects",about:"About",contact:"Contact"},home:{heroLabel:"Software Developer / Full-Stack Developer",heroTitleLine1:"Building",heroTitleHighlight:"Microservices",heroTitleLine3:"Systems & Seamless",heroTitleLine4:"User Experiences.",heroDesc:"Hi, I'm Phuc Khang (tigcom). I specialize in building large-scale backend systems with Java Spring Boot Microservices and modern, high-performance user interfaces.",viewProjects:"View Projects",knowMe:"Know me better →",gpa:"GPA Achievement",excellentSems:"Excellent Sems",bankExp:"Bank Experience",selectedProjects:"Selected Projects",selectedProjectsDesc:"Here's a curated selection showcasing my expertise and the achieved results.",viewAllProjects:"View All Projects",areasOfExpertise:"Areas of Expertise",whatIDoBest:"What I do best",whatOthersSay:"What others say",amazingPeople:"I've worked with some amazing people over the years."},about:{aboutMe:"About Me",im:"I'm",creativeDev:"Full-Stack Developer",bio:"With a systematic programming mindset and hands-on experience in Microservices, I focus on building high-performance, secure, and scalable web applications. Currently, I am contributing to financial projects at Kien Long Bank and continuously improving my Full-Stack skills.",yearsExp:"Years Experience",projectsDone:"Projects Done",happyClients:"Happy Clients",awardsWon:"Awards Won",experience:"Experience",workHistory:"Work History",myProcess:"My Process",howIWork:"How I Work",education:"Education",gpaAchievement:"GPA Achievement",excellentSems:"Excellent Semesters",coreServices:"Core Services Built",yearExpShort:"Year Experience",readArticle:"Read Article"},contact:{getInTouch:"Get in Touch",letsWork:"Let's work",together:"together",contactDesc:"Have a project in mind? I'd love to hear about it. Send me a message and let's start a conversation.",sendMessage:"Send a message",yourName:"Your Name",emailAddress:"Email Address",subject:"Subject",typeOfInquiry:"Type of Inquiry",message:"Message",sendBtn:"Send Message",sendingBtn:"Sending...",messageSent:"Message sent! I'll get back to you soon.",contactInfo:"Contact Info",location:"Location",phone:"Phone",responseTime:"Response Time",within24h:"Within 24 hours",faqs:"FAQs",haveQuestions:"Have Questions?"},common:{year:"Year",category:"Category",role:"Role",overview:"Overview",problem:"Problem Statement",process:"My Process",results:"Key Results",previous:"Previous",next:"Next",backToProjects:"Back to Projects",github:"GitHub",liveDemo:"Live Demo"}},vi:{nav:{home:"Trang chủ",projects:"Dự án",about:"Giới thiệu",contact:"Liên hệ"},home:{heroLabel:"Nhà phát triển Phần mềm / Full-Stack Developer",heroTitleLine1:"Xây dựng",heroTitleHighlight:"Microservices",heroTitleLine3:"Hệ thống & Trải nghiệm",heroTitleLine4:"Người dùng liền mạch.",heroDesc:"Chào bạn, mình là Phúc Khang (tigcom). Mình chuyên xây dựng các hệ thống Backend quy mô lớn với Java Spring Boot Microservices và giao diện người dùng hiện đại, tối ưu hiệu năng.",viewProjects:"Xem dự án",knowMe:"Tìm hiểu về mình →",gpa:"GPA tích lũy",excellentSems:"Học kỳ Xuất sắc",bankExp:"Bank coder",selectedProjects:"Dự án Tiêu biểu",selectedProjectsDesc:"Dưới đây là danh sách các dự án tiêu biểu thể hiện chuyên môn và kết quả tôi đã đạt được.",viewAllProjects:"Xem tất cả dự án",areasOfExpertise:"Lĩnh vực Chuyên môn",whatIDoBest:"Thế mạnh của tôi",whatOthersSay:"Mọi người nói gì",amazingPeople:"Tôi đã có cơ hội làm việc với những đồng nghiệp và khách hàng tuyệt vời."},about:{aboutMe:"Giới thiệu",im:"Mình là",creativeDev:"Full-Stack Developer",bio:"Với tư duy lập trình hệ thống và kinh nghiệm thực chiến về Microservices, mình tập trung vào việc xây dựng các ứng dụng web hiệu năng cao, bảo mật và dễ mở rộng. Hiện tại, mình đang đóng góp vào các dự án tài chính tại ngân hàng Kiên Long và không ngừng nâng cao kỹ năng Full-Stack của bản thân.",yearsExp:"Năm kinh nghiệm",projectsDone:"Dự án hoàn thành",happyClients:"Khách hàng hài lòng",awardsWon:"Giải thưởng",experience:"Kinh nghiệm",workHistory:"Lịch sử làm việc",myProcess:"Quy trình",howIWork:"Cách tôi làm việc",education:"Học vấn",gpaAchievement:"Điểm GPA tích lũy",excellentSems:"Học kỳ Xuất sắc",coreServices:"Dịch vụ lõi đã xây dựng",yearExpShort:"Năm kinh nghiệm",readArticle:"Xem bài viết"},contact:{getInTouch:"Liên hệ",letsWork:"Cùng nhau",together:"hợp tác",contactDesc:"Bạn có ý tưởng cho một dự án? Mình rất sẵn lòng lắng nghe. Hãy gửi tin nhắn cho mình và bắt đầu cuộc trò chuyện nhé.",sendMessage:"Gửi tin nhắn",yourName:"Họ tên của bạn",emailAddress:"Địa chỉ Email",subject:"Tiêu đề",typeOfInquiry:"Loại yêu cầu",message:"Nội dung tin nhắn",sendBtn:"Gửi tin nhắn",sendingBtn:"Đang gửi...",messageSent:"Tin nhắn đã được gửi! Mình sẽ phản hồi bạn sớm nhất có thể.",contactInfo:"Thông tin liên hệ",location:"Địa điểm",phone:"Số điện thoại",responseTime:"Thời gian phản hồi",within24h:"Trong vòng 24 giờ",faqs:"Hỏi đáp",haveQuestions:"Bạn có thắc mắc?"},common:{year:"Năm",category:"Lĩnh vực",role:"Vai trò",overview:"Tổng quan",problem:"Vấn đề & Thách thức",process:"Quy trình thực hiện",results:"Kết quả đạt được",previous:"Trước đó",next:"Tiếp theo",backToProjects:"Quay lại danh mục",github:"GitHub",liveDemo:"Xem Demo"}}},oT=n=>{hd.lang=n,localStorage.setItem("lang",n)},zo=()=>({state:Mu(hd),t:n=>{const e=n.split(".");let t=sT[hd.lang];for(const i of e)if(t&&t[i])t=t[i];else return n;return t},setLang:oT}),aT={class:"nav-links"},lT={class:"nav-link-content"},cT={class:"link-text-top"},uT={class:"link-text-bottom"},fT={class:"nav-actions"},hT=["title"],dT=["aria-label","title"],pT={key:0,class:"theme-icon",xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},mT={key:1,class:"theme-icon",xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},gT={__name:"AppNavbar",setup(n){we.registerPlugin(et);const{state:e,t,setLang:i}=zo(),r=Mv(),s=qe(!1),o=qe(!0),a=qe(null),l=[{path:"/",label:"nav.home"},{path:"/about",label:"nav.about"},{path:"/projects",label:"nav.projects"},{path:"/contact",label:"nav.contact"}];function c(f){return f==="/"?r.path==="/":r.path.startsWith(f)}function u(f){const d=o.value?"light":"dark",m=d==="light",_=document.createElement("div");_.className="theme-ripple";const p=Math.hypot(window.innerWidth,window.innerHeight)*2.2,g=f.clientX,y=f.clientY;Object.assign(_.style,{width:`${p}px`,height:`${p}px`,left:`${g-p/2}px`,top:`${y-p/2}px`,background:m?"#f8f8f6":"#0a0a0a"}),document.body.appendChild(_),we.timeline({onComplete:()=>_.remove()}).to(_,{scale:1,duration:.55,ease:"power3.out",onComplete:()=>{document.documentElement.setAttribute("data-theme",d),o.value=!o.value,localStorage.setItem("portfolio-theme",d)}}).to(_,{opacity:0,duration:.35,ease:"power2.in"},"+=0.05"),we.fromTo(".theme-icon",{rotate:0,scale:1},{rotate:360,scale:0,duration:.3,ease:"power3.in",onComplete:()=>{we.fromTo(".theme-icon",{rotate:-90,scale:0},{rotate:0,scale:1,duration:.4,ease:"back.out(1.7)"})}})}function h(){s.value=window.scrollY>60}return Ni(()=>{const f=localStorage.getItem("portfolio-theme")||"dark";document.documentElement.setAttribute("data-theme",f),o.value=f==="dark",we.fromTo("#navbar",{yPercent:-100,opacity:0},{yPercent:0,opacity:1,duration:.7,ease:"power3.out",delay:.1}),tf(()=>{const d=a.value;if(!d)return;d.style.width="41%",d.style.maxWidth="none";const m=d.offsetWidth;d.style.width="100%",d.style.backgroundColor="var(--bg-900)",d.style.borderColor="transparent",d.style.boxShadow="none",we.to(d,{width:`${m}px`,backgroundColor:"var(--backdrop-scrolled)",borderColor:"var(--border-strong)",boxShadow:"none",ease:"none",scrollTrigger:{trigger:"body",start:"top top",end:"+=500",scrub:!0,invalidateOnRefresh:!0}})}),window.addEventListener("scroll",h,{passive:!0})}),$a(()=>{window.removeEventListener("scroll",h)}),(f,d)=>{const m=ko("router-link");return Fe(),Ge("header",{id:"navbar",class:Xn({scrolled:s.value})},[R("nav",{class:"nav-inner",ref_key:"navInnerRef",ref:a},[ft(m,{to:"/",class:"nav-logo"},{default:Qt(()=>[...d[1]||(d[1]=[Rt("PK",-1)])]),_:1}),R("ul",aT,[(Fe(),Ge(St,null,Kt(l,_=>R("li",{key:_.path},[ft(m,{to:_.path,class:Xn({active:c(_.path)})},{default:Qt(()=>[R("div",lT,[R("span",cT,ce(Se(t)(_.label)),1),R("span",uT,ce(Se(t)(_.label)),1)]),d[2]||(d[2]=R("div",{class:"nav-active-indicator"},null,-1))]),_:2},1032,["to","class"])])),64))]),R("div",fT,[R("button",{class:"nav-lang-btn",onClick:d[0]||(d[0]=_=>Se(i)(Se(e).lang==="en"?"vi":"en")),title:Se(e).lang==="en"?"Tiếng Việt":"English"},ce(Se(e).lang==="en"?"EN":"VI"),9,hT),R("button",{class:"nav-theme-btn",onClick:u,"aria-label":o.value?"Switch to light mode":"Switch to dark mode",title:o.value?"Light Mode":"Dark Mode"},[o.value?(Fe(),Ge("svg",pT,[...d[3]||(d[3]=[R("path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"},null,-1)])])):(Fe(),Ge("svg",mT,[...d[4]||(d[4]=[R("circle",{cx:"12",cy:"12",r:"4"},null,-1),R("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"},null,-1)])]))],8,dT)])],512)],2)}}},_T=cr(gT,[["__scopeId","data-v-c88ef52b"]]);const Qp="183",vT=0,Qg=1,xT=2,_u=1,ST=2,xl=3,Xs=0,mi=1,Zr=2,ts=0,wa=1,e_=2,t_=3,n_=4,yT=5,mo=100,bT=101,MT=102,ET=103,TT=104,wT=200,AT=201,CT=202,RT=203,dd=204,pd=205,PT=206,DT=207,LT=208,IT=209,NT=210,UT=211,FT=212,OT=213,kT=214,md=0,gd=1,_d=2,Va=3,vd=4,xd=5,Sd=6,yd=7,Kx=0,BT=1,zT=2,Cr=0,jx=1,Zx=2,Jx=3,Qx=4,eS=5,tS=6,nS=7,iS=300,Fo=301,Ha=302,Yf=303,Kf=304,pf=306,bd=1e3,Qr=1001,Md=1002,Dn=1003,VT=1004,Nc=1005,Wn=1006,jf=1007,So=1008,Hi=1009,rS=1010,sS=1011,sc=1012,em=1013,Ir=1014,Er=1015,cs=1016,tm=1017,nm=1018,oc=1020,oS=35902,aS=35899,lS=1021,cS=1022,nr=1023,us=1026,yo=1027,uS=1028,im=1029,Ga=1030,rm=1031,sm=1033,vu=33776,xu=33777,Su=33778,yu=33779,Ed=35840,Td=35841,wd=35842,Ad=35843,Cd=36196,Rd=37492,Pd=37496,Dd=37488,Ld=37489,Id=37490,Nd=37491,Ud=37808,Fd=37809,Od=37810,kd=37811,Bd=37812,zd=37813,Vd=37814,Hd=37815,Gd=37816,Wd=37817,Xd=37818,qd=37819,$d=37820,Yd=37821,Kd=36492,jd=36494,Zd=36495,Jd=36283,Qd=36284,ep=36285,tp=36286,HT=3200,GT=0,WT=1,Rs="",Bi="srgb",Wa="srgb-linear",Wu="linear",It="srgb",Yo=7680,i_=519,XT=512,qT=513,$T=514,om=515,YT=516,KT=517,am=518,jT=519,r_=35044,s_="300 es",Tr=2e3,Xu=2001;function ZT(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function JT(){const n=qu("canvas");return n.style.display="block",n}const o_={};function a_(...n){const e="THREE."+n.shift();console.log(e,...n)}function fS(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function st(...n){n=fS(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Mt(...n){n=fS(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function $u(...n){const e=n.join(" ");e in o_||(o_[e]=!0,st(...n))}function QT(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const ew={[md]:gd,[_d]:Sd,[vd]:yd,[Va]:xd,[gd]:md,[Sd]:_d,[yd]:vd,[xd]:Va};class Ya{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zf=Math.PI/180,np=180/Math.PI;function dc(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Fn[n&255]+Fn[n>>8&255]+Fn[n>>16&255]+Fn[n>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[t&63|128]+Fn[t>>8&255]+"-"+Fn[t>>16&255]+Fn[t>>24&255]+Fn[i&255]+Fn[i>>8&255]+Fn[i>>16&255]+Fn[i>>24&255]).toLowerCase()}function _t(n,e,t){return Math.max(e,Math.min(t,n))}function tw(n,e){return(n%e+e)%e}function Jf(n,e,t){return(1-t)*n+t*e}function rl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ai(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Pt{constructor(e=0,t=0){Pt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_t(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ka{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],f=s[o+0],d=s[o+1],m=s[o+2],_=s[o+3];if(h!==_||l!==f||c!==d||u!==m){let p=l*f+c*d+u*m+h*_;p<0&&(f=-f,d=-d,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){const y=Math.acos(p),M=Math.sin(y);g=Math.sin(g*y)/M,a=Math.sin(a*y)/M,l=l*g+f*a,c=c*g+d*a,u=u*g+m*a,h=h*g+_*a}else{l=l*g+f*a,c=c*g+d*a,u=u*g+m*a,h=h*g+_*a;const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],d=s[o+2],m=s[o+3];return e[t]=a*m+u*h+l*d-c*f,e[t+1]=l*m+u*f+c*h-a*d,e[t+2]=c*m+u*d+a*f-l*h,e[t+3]=u*m-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),d=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(e=0,t=0,i=0){oe.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(l_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(l_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_t(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qf.copy(this).projectOnVector(e),this.sub(Qf)}reflect(e){return this.sub(Qf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qf=new oe,l_=new Ka;class ut{constructor(e,t,i,r,s,o,a,l,c){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],m=i[8],_=r[0],p=r[3],g=r[6],y=r[1],M=r[4],S=r[7],w=r[2],T=r[5],E=r[8];return s[0]=o*_+a*y+l*w,s[3]=o*p+a*M+l*T,s[6]=o*g+a*S+l*E,s[1]=c*_+u*y+h*w,s[4]=c*p+u*M+h*T,s[7]=c*g+u*S+h*E,s[2]=f*_+d*y+m*w,s[5]=f*p+d*M+m*T,s[8]=f*g+d*S+m*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,m=t*h+i*f+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=h*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(eh.makeScale(e,t)),this}rotate(e){return this.premultiply(eh.makeRotation(-e)),this}translate(e,t){return this.premultiply(eh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const eh=new ut,c_=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),u_=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nw(){const n={enabled:!0,workingColorSpace:Wa,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===It&&(r.r=ns(r.r),r.g=ns(r.g),r.b=ns(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===It&&(r.r=Aa(r.r),r.g=Aa(r.g),r.b=Aa(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Rs?Wu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return $u("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return $u("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Wa]:{primaries:e,whitePoint:i,transfer:Wu,toXYZ:c_,fromXYZ:u_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bi},outputColorSpaceConfig:{drawingBufferColorSpace:Bi}},[Bi]:{primaries:e,whitePoint:i,transfer:It,toXYZ:c_,fromXYZ:u_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bi}}}),n}const xt=nw();function ns(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Aa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ko;class iw{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ko===void 0&&(Ko=qu("canvas")),Ko.width=e.width,Ko.height=e.height;const r=Ko.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ko}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ns(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ns(t[i]/255)*255):t[i]=ns(t[i]);return{data:t,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rw=0;class lm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rw++}),this.uuid=dc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(th(r[o].image)):s.push(th(r[o]))}else s=th(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function th(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?iw.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let sw=0;const nh=new oe;class oi extends Ya{constructor(e=oi.DEFAULT_IMAGE,t=oi.DEFAULT_MAPPING,i=Qr,r=Qr,s=Wn,o=So,a=nr,l=Hi,c=oi.DEFAULT_ANISOTROPY,u=Rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sw++}),this.uuid=dc(),this.name="",this.source=new lm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(nh).x}get height(){return this.source.getSize(nh).y}get depth(){return this.source.getSize(nh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){st(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){st(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==iS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bd:e.x=e.x-Math.floor(e.x);break;case Qr:e.x=e.x<0?0:1;break;case Md:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bd:e.y=e.y-Math.floor(e.y);break;case Qr:e.y=e.y<0?0:1;break;case Md:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}oi.DEFAULT_IMAGE=null;oi.DEFAULT_MAPPING=iS;oi.DEFAULT_ANISOTROPY=1;class an{constructor(e=0,t=0,i=0,r=1){an.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,S=(d+1)/2,w=(g+1)/2,T=(u+f)/4,E=(h+_)/4,v=(m+p)/4;return M>S&&M>w?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=T/i,s=E/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=v/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=E/s,r=v/s),this.set(i,r,s,t),this}let y=Math.sqrt((p-m)*(p-m)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(p-m)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_t(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ow extends Ya{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new an(0,0,e,t),this.scissorTest=!1,this.viewport=new an(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new oi(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new lm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rr extends ow{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class hS extends oi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class aw extends oi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hn{constructor(e,t,i,r,s,o,a,l,c,u,h,f,d,m,_,p){hn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,f,d,m,_,p)}set(e,t,i,r,s,o,a,l,c,u,h,f,d,m,_,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/jo.setFromMatrixColumn(e,0).length(),s=1/jo.setFromMatrixColumn(e,1).length(),o=1/jo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,m=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+m*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,m=c*u,_=c*h;t[0]=f+_*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,m=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,m=a*u,_=a*h;t[0]=l*u,t[4]=m*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=m*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+m,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lw,e,cw)}lookAt(e,t,i){const r=this.elements;return vi.subVectors(e,t),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),xs.crossVectors(i,vi),xs.lengthSq()===0&&(Math.abs(i.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),xs.crossVectors(i,vi)),xs.normalize(),Uc.crossVectors(vi,xs),r[0]=xs.x,r[4]=Uc.x,r[8]=vi.x,r[1]=xs.y,r[5]=Uc.y,r[9]=vi.y,r[2]=xs.z,r[6]=Uc.z,r[10]=vi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],m=i[2],_=i[6],p=i[10],g=i[14],y=i[3],M=i[7],S=i[11],w=i[15],T=r[0],E=r[4],v=r[8],x=r[12],D=r[1],P=r[5],I=r[9],G=r[13],$=r[2],X=r[6],W=r[10],B=r[14],te=r[3],le=r[7],k=r[11],xe=r[15];return s[0]=o*T+a*D+l*$+c*te,s[4]=o*E+a*P+l*X+c*le,s[8]=o*v+a*I+l*W+c*k,s[12]=o*x+a*G+l*B+c*xe,s[1]=u*T+h*D+f*$+d*te,s[5]=u*E+h*P+f*X+d*le,s[9]=u*v+h*I+f*W+d*k,s[13]=u*x+h*G+f*B+d*xe,s[2]=m*T+_*D+p*$+g*te,s[6]=m*E+_*P+p*X+g*le,s[10]=m*v+_*I+p*W+g*k,s[14]=m*x+_*G+p*B+g*xe,s[3]=y*T+M*D+S*$+w*te,s[7]=y*E+M*P+S*X+w*le,s[11]=y*v+M*I+S*W+w*k,s[15]=y*x+M*G+S*B+w*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],_=e[7],p=e[11],g=e[15],y=l*d-c*f,M=a*d-c*h,S=a*f-l*h,w=o*d-c*u,T=o*f-l*u,E=o*h-a*u;return t*(_*y-p*M+g*S)-i*(m*y-p*w+g*T)+r*(m*M-_*w+g*E)-s*(m*S-_*T+p*E)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],_=e[13],p=e[14],g=e[15],y=t*a-i*o,M=t*l-r*o,S=t*c-s*o,w=i*l-r*a,T=i*c-s*a,E=r*c-s*l,v=u*_-h*m,x=u*p-f*m,D=u*g-d*m,P=h*p-f*_,I=h*g-d*_,G=f*g-d*p,$=y*G-M*I+S*P+w*D-T*x+E*v;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/$;return e[0]=(a*G-l*I+c*P)*X,e[1]=(r*I-i*G-s*P)*X,e[2]=(_*E-p*T+g*w)*X,e[3]=(f*T-h*E-d*w)*X,e[4]=(l*D-o*G-c*x)*X,e[5]=(t*G-r*D+s*x)*X,e[6]=(p*S-m*E-g*M)*X,e[7]=(u*E-f*S+d*M)*X,e[8]=(o*I-a*D+c*v)*X,e[9]=(i*D-t*I-s*v)*X,e[10]=(m*T-_*S+g*y)*X,e[11]=(h*S-u*T-d*y)*X,e[12]=(a*x-o*P-l*v)*X,e[13]=(t*P-i*x+r*v)*X,e[14]=(_*M-m*w-p*y)*X,e[15]=(u*w-h*M+f*y)*X,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,m=s*h,_=o*u,p=o*h,g=a*h,y=l*c,M=l*u,S=l*h,w=i.x,T=i.y,E=i.z;return r[0]=(1-(_+g))*w,r[1]=(d+S)*w,r[2]=(m-M)*w,r[3]=0,r[4]=(d-S)*T,r[5]=(1-(f+g))*T,r[6]=(p+y)*T,r[7]=0,r[8]=(m+M)*E,r[9]=(p-y)*E,r[10]=(1-(f+_))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let o=jo.set(r[0],r[1],r[2]).length();const a=jo.set(r[4],r[5],r[6]).length(),l=jo.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Ki.copy(this);const c=1/o,u=1/a,h=1/l;return Ki.elements[0]*=c,Ki.elements[1]*=c,Ki.elements[2]*=c,Ki.elements[4]*=u,Ki.elements[5]*=u,Ki.elements[6]*=u,Ki.elements[8]*=h,Ki.elements[9]*=h,Ki.elements[10]*=h,t.setFromRotationMatrix(Ki),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,o,a=Tr,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let m,_;if(l)m=s/(o-s),_=o*s/(o-s);else if(a===Tr)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Xu)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Tr,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-r),f=-(t+e)/(t-e),d=-(i+r)/(i-r);let m,_;if(l)m=1/(o-s),_=o/(o-s);else if(a===Tr)m=-2/(o-s),_=-(o+s)/(o-s);else if(a===Xu)m=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const jo=new oe,Ki=new hn,lw=new oe(0,0,0),cw=new oe(1,1,1),xs=new oe,Uc=new oe,vi=new oe,f_=new hn,h_=new Ka;class fs{constructor(e=0,t=0,i=0,r=fs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(_t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return f_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(f_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return h_.setFromEuler(this),this.setFromQuaternion(h_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fs.DEFAULT_ORDER="XYZ";class dS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uw=0;const d_=new oe,Zo=new Ka,Br=new hn,Fc=new oe,sl=new oe,fw=new oe,hw=new Ka,p_=new oe(1,0,0),m_=new oe(0,1,0),g_=new oe(0,0,1),__={type:"added"},dw={type:"removed"},Jo={type:"childadded",child:null},ih={type:"childremoved",child:null};class Di extends Ya{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uw++}),this.uuid=dc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Di.DEFAULT_UP.clone();const e=new oe,t=new fs,i=new Ka,r=new oe(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new hn},normalMatrix:{value:new ut}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=Di.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Di.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zo.setFromAxisAngle(e,t),this.quaternion.multiply(Zo),this}rotateOnWorldAxis(e,t){return Zo.setFromAxisAngle(e,t),this.quaternion.premultiply(Zo),this}rotateX(e){return this.rotateOnAxis(p_,e)}rotateY(e){return this.rotateOnAxis(m_,e)}rotateZ(e){return this.rotateOnAxis(g_,e)}translateOnAxis(e,t){return d_.copy(e).applyQuaternion(this.quaternion),this.position.add(d_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(p_,e)}translateY(e){return this.translateOnAxis(m_,e)}translateZ(e){return this.translateOnAxis(g_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Br.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fc.copy(e):Fc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Br.lookAt(sl,Fc,this.up):Br.lookAt(Fc,sl,this.up),this.quaternion.setFromRotationMatrix(Br),r&&(Br.extractRotation(r.matrixWorld),Zo.setFromRotationMatrix(Br),this.quaternion.premultiply(Zo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(__),Jo.child=e,this.dispatchEvent(Jo),Jo.child=null):Mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dw),ih.child=e,this.dispatchEvent(ih),ih.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Br.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Br.multiply(e.parent.matrixWorld)),e.applyMatrix4(Br),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(__),Jo.child=e,this.dispatchEvent(Jo),Jo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,e,fw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,hw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Di.DEFAULT_UP=new oe(0,1,0);Di.DEFAULT_MATRIX_AUTO_UPDATE=!0;Di.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Oc extends Di{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pw={type:"move"};class rh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Oc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const pS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ss={h:0,s:0,l:0},kc={h:0,s:0,l:0};function sh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=xt.workingColorSpace){if(e=tw(e,1),t=_t(t,0,1),i=_t(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=sh(o,s,e+1/3),this.g=sh(o,s,e),this.b=sh(o,s,e-1/3)}return xt.colorSpaceToWorking(this,r),this}setStyle(e,t=Bi){function i(s){s!==void 0&&parseFloat(s)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:st("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bi){const i=pS[e.toLowerCase()];return i!==void 0?this.setHex(i,t):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}copyLinearToSRGB(e){return this.r=Aa(e.r),this.g=Aa(e.g),this.b=Aa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bi){return xt.workingToColorSpace(On.copy(this),e),Math.round(_t(On.r*255,0,255))*65536+Math.round(_t(On.g*255,0,255))*256+Math.round(_t(On.b*255,0,255))}getHexString(e=Bi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(On.copy(this),t);const i=On.r,r=On.g,s=On.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(On.copy(this),t),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=Bi){xt.workingToColorSpace(On.copy(this),e);const t=On.r,i=On.g,r=On.b;return e!==Bi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ss),this.setHSL(Ss.h+e,Ss.s+t,Ss.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ss),e.getHSL(kc);const i=Jf(Ss.h,kc.h,t),r=Jf(Ss.s,kc.s,t),s=Jf(Ss.l,kc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Nt;Nt.NAMES=pS;class mw extends Di{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fs,this.environmentIntensity=1,this.environmentRotation=new fs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ji=new oe,zr=new oe,oh=new oe,Vr=new oe,Qo=new oe,ea=new oe,v_=new oe,ah=new oe,lh=new oe,ch=new oe,uh=new an,fh=new an,hh=new an;class tr{constructor(e=new oe,t=new oe,i=new oe){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ji.subVectors(e,t),r.cross(ji);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ji.subVectors(r,t),zr.subVectors(i,t),oh.subVectors(e,t);const o=ji.dot(ji),a=ji.dot(zr),l=ji.dot(oh),c=zr.dot(zr),u=zr.dot(oh),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,m=(o*u-a*l)*f;return s.set(1-d-m,m,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Vr)===null?!1:Vr.x>=0&&Vr.y>=0&&Vr.x+Vr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Vr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vr.x),l.addScaledVector(o,Vr.y),l.addScaledVector(a,Vr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return uh.setScalar(0),fh.setScalar(0),hh.setScalar(0),uh.fromBufferAttribute(e,t),fh.fromBufferAttribute(e,i),hh.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(uh,s.x),o.addScaledVector(fh,s.y),o.addScaledVector(hh,s.z),o}static isFrontFacing(e,t,i,r){return ji.subVectors(i,t),zr.subVectors(e,t),ji.cross(zr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ji.subVectors(this.c,this.b),zr.subVectors(this.a,this.b),ji.cross(zr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return tr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return tr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Qo.subVectors(r,i),ea.subVectors(s,i),ah.subVectors(e,i);const l=Qo.dot(ah),c=ea.dot(ah);if(l<=0&&c<=0)return t.copy(i);lh.subVectors(e,r);const u=Qo.dot(lh),h=ea.dot(lh);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Qo,o);ch.subVectors(e,s);const d=Qo.dot(ch),m=ea.dot(ch);if(m>=0&&d<=m)return t.copy(s);const _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(ea,a);const p=u*m-d*h;if(p<=0&&h-u>=0&&d-m>=0)return v_.subVectors(s,r),a=(h-u)/(h-u+(d-m)),t.copy(r).addScaledVector(v_,a);const g=1/(p+_+f);return o=_*g,a=f*g,t.copy(i).addScaledVector(Qo,o).addScaledVector(ea,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class pc{constructor(e=new oe(1/0,1/0,1/0),t=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zi):Zi.fromBufferAttribute(s,o),Zi.applyMatrix4(e.matrixWorld),this.expandByPoint(Zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Bc.copy(i.boundingBox)),Bc.applyMatrix4(e.matrixWorld),this.union(Bc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zi),Zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ol),zc.subVectors(this.max,ol),ta.subVectors(e.a,ol),na.subVectors(e.b,ol),ia.subVectors(e.c,ol),ys.subVectors(na,ta),bs.subVectors(ia,na),eo.subVectors(ta,ia);let t=[0,-ys.z,ys.y,0,-bs.z,bs.y,0,-eo.z,eo.y,ys.z,0,-ys.x,bs.z,0,-bs.x,eo.z,0,-eo.x,-ys.y,ys.x,0,-bs.y,bs.x,0,-eo.y,eo.x,0];return!dh(t,ta,na,ia,zc)||(t=[1,0,0,0,1,0,0,0,1],!dh(t,ta,na,ia,zc))?!1:(Vc.crossVectors(ys,bs),t=[Vc.x,Vc.y,Vc.z],dh(t,ta,na,ia,zc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Hr=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],Zi=new oe,Bc=new pc,ta=new oe,na=new oe,ia=new oe,ys=new oe,bs=new oe,eo=new oe,ol=new oe,zc=new oe,Vc=new oe,to=new oe;function dh(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){to.fromArray(n,s);const a=r.x*Math.abs(to.x)+r.y*Math.abs(to.y)+r.z*Math.abs(to.z),l=e.dot(to),c=t.dot(to),u=i.dot(to);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const cn=new oe,Hc=new Pt;let gw=0;class Pr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gw++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=r_,this.updateRanges=[],this.gpuType=Er,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Hc.fromBufferAttribute(this,t),Hc.applyMatrix3(e),this.setXY(t,Hc.x,Hc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=rl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ai(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rl(t,this.array)),t}setX(e,t){return this.normalized&&(t=ai(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rl(t,this.array)),t}setY(e,t){return this.normalized&&(t=ai(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ai(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rl(t,this.array)),t}setW(e,t){return this.normalized&&(t=ai(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ai(t,this.array),i=ai(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ai(t,this.array),i=ai(i,this.array),r=ai(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ai(t,this.array),i=ai(i,this.array),r=ai(r,this.array),s=ai(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==r_&&(e.usage=this.usage),e}}class mS extends Pr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class gS extends Pr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class is extends Pr{constructor(e,t,i){super(new Float32Array(e),t,i)}}const _w=new pc,al=new oe,ph=new oe;class cm{constructor(e=new oe,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_w.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;al.subVectors(e,this.center);const t=al.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(al,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ph.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(al.copy(e.center).add(ph)),this.expandByPoint(al.copy(e.center).sub(ph))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let vw=0;const Oi=new hn,mh=new Di,ra=new oe,xi=new pc,ll=new pc,En=new oe;class ds extends Ya{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vw++}),this.uuid=dc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ZT(e)?gS:mS)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ut().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Oi.makeRotationFromQuaternion(e),this.applyMatrix4(Oi),this}rotateX(e){return Oi.makeRotationX(e),this.applyMatrix4(Oi),this}rotateY(e){return Oi.makeRotationY(e),this.applyMatrix4(Oi),this}rotateZ(e){return Oi.makeRotationZ(e),this.applyMatrix4(Oi),this}translate(e,t,i){return Oi.makeTranslation(e,t,i),this.applyMatrix4(Oi),this}scale(e,t,i){return Oi.makeScale(e,t,i),this.applyMatrix4(Oi),this}lookAt(e){return mh.lookAt(e),mh.updateMatrix(),this.applyMatrix4(mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ra).negate(),this.translate(ra.x,ra.y,ra.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new is(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];xi.setFromBufferAttribute(s),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cm);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const i=this.boundingSphere.center;if(xi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ll.setFromBufferAttribute(a),this.morphTargetsRelative?(En.addVectors(xi.min,ll.min),xi.expandByPoint(En),En.addVectors(xi.max,ll.max),xi.expandByPoint(En)):(xi.expandByPoint(ll.min),xi.expandByPoint(ll.max))}xi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)En.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(En));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)En.fromBufferAttribute(a,c),l&&(ra.fromBufferAttribute(e,c),En.add(ra)),r=Math.max(r,i.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new oe,l[v]=new oe;const c=new oe,u=new oe,h=new oe,f=new Pt,d=new Pt,m=new Pt,_=new oe,p=new oe;function g(v,x,D){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,x),h.fromBufferAttribute(i,D),f.fromBufferAttribute(s,v),d.fromBufferAttribute(s,x),m.fromBufferAttribute(s,D),u.sub(c),h.sub(c),d.sub(f),m.sub(f);const P=1/(d.x*m.y-m.x*d.y);isFinite(P)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(P),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(P),a[v].add(_),a[x].add(_),a[D].add(_),l[v].add(p),l[x].add(p),l[D].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let v=0,x=y.length;v<x;++v){const D=y[v],P=D.start,I=D.count;for(let G=P,$=P+I;G<$;G+=3)g(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const M=new oe,S=new oe,w=new oe,T=new oe;function E(v){w.fromBufferAttribute(r,v),T.copy(w);const x=a[v];M.copy(x),M.sub(w.multiplyScalar(w.dot(x))).normalize(),S.crossVectors(T,x);const P=S.dot(l[v])<0?-1:1;o.setXYZW(v,M.x,M.y,M.z,P)}for(let v=0,x=y.length;v<x;++v){const D=y[v],P=D.start,I=D.count;for(let G=P,$=P+I;G<$;G+=3)E(e.getX(G+0)),E(e.getX(G+1)),E(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new oe,s=new oe,o=new oe,a=new oe,l=new oe,c=new oe,u=new oe,h=new oe;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let g=0;g<u;g++)f[m++]=c[d++]}return new Pr(f,u,h)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ds,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let xw=0;class mf extends Ya{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xw++}),this.uuid=dc(),this.name="",this.type="Material",this.blending=wa,this.side=Xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dd,this.blendDst=pd,this.blendEquation=mo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=Va,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=i_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yo,this.stencilZFail=Yo,this.stencilZPass=Yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){st(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){st(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==wa&&(i.blending=this.blending),this.side!==Xs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==dd&&(i.blendSrc=this.blendSrc),this.blendDst!==pd&&(i.blendDst=this.blendDst),this.blendEquation!==mo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Va&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==i_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Gr=new oe,gh=new oe,Gc=new oe,Ms=new oe,_h=new oe,Wc=new oe,vh=new oe;class Sw{constructor(e=new oe,t=new oe(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gr.copy(this.origin).addScaledVector(this.direction,t),Gr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){gh.copy(e).add(t).multiplyScalar(.5),Gc.copy(t).sub(e).normalize(),Ms.copy(this.origin).sub(gh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Gc),a=Ms.dot(this.direction),l=-Ms.dot(Gc),c=Ms.lengthSq(),u=Math.abs(1-o*o);let h,f,d,m;if(u>0)if(h=o*l-a,f=o*a-l,m=s*u,h>=0)if(f>=-m)if(f<=m){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(gh).addScaledVector(Gc,f),d}intersectSphere(e,t){Gr.subVectors(e.center,this.origin);const i=Gr.dot(this.direction),r=Gr.dot(Gr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Gr)!==null}intersectTriangle(e,t,i,r,s){_h.subVectors(t,e),Wc.subVectors(i,e),vh.crossVectors(_h,Wc);let o=this.direction.dot(vh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ms.subVectors(this.origin,e);const l=a*this.direction.dot(Wc.crossVectors(Ms,Wc));if(l<0)return null;const c=a*this.direction.dot(_h.cross(Ms));if(c<0||l+c>o)return null;const u=-a*Ms.dot(vh);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _S extends mf{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fs,this.combine=Kx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const x_=new hn,no=new Sw,Xc=new cm,S_=new oe,qc=new oe,$c=new oe,Yc=new oe,xh=new oe,Kc=new oe,y_=new oe,jc=new oe;class Nr extends Di{constructor(e=new ds,t=new _S){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Kc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(xh.fromBufferAttribute(h,e),o?Kc.addScaledVector(xh,u):Kc.addScaledVector(xh.sub(t),u))}t.add(Kc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xc.copy(i.boundingSphere),Xc.applyMatrix4(s),no.copy(e.ray).recast(e.near),!(Xc.containsPoint(no.origin)===!1&&(no.intersectSphere(Xc,S_)===null||no.origin.distanceToSquared(S_)>(e.far-e.near)**2))&&(x_.copy(s).invert(),no.copy(e.ray).applyMatrix4(x_),!(i.boundingBox!==null&&no.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,no)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const p=f[m],g=o[p.materialIndex],y=Math.max(p.start,d.start),M=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let S=y,w=M;S<w;S+=3){const T=a.getX(S),E=a.getX(S+1),v=a.getX(S+2);r=Zc(this,g,e,i,c,u,h,T,E,v),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=m,g=_;p<g;p+=3){const y=a.getX(p),M=a.getX(p+1),S=a.getX(p+2);r=Zc(this,o,e,i,c,u,h,y,M,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const p=f[m],g=o[p.materialIndex],y=Math.max(p.start,d.start),M=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let S=y,w=M;S<w;S+=3){const T=S,E=S+1,v=S+2;r=Zc(this,g,e,i,c,u,h,T,E,v),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=m,g=_;p<g;p+=3){const y=p,M=p+1,S=p+2;r=Zc(this,o,e,i,c,u,h,y,M,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function yw(n,e,t,i,r,s,o,a){let l;if(e.side===mi?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Xs,a),l===null)return null;jc.copy(a),jc.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(jc);return c<t.near||c>t.far?null:{distance:c,point:jc.clone(),object:n}}function Zc(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,qc),n.getVertexPosition(l,$c),n.getVertexPosition(c,Yc);const u=yw(n,e,t,i,qc,$c,Yc,y_);if(u){const h=new oe;tr.getBarycoord(y_,qc,$c,Yc,h),r&&(u.uv=tr.getInterpolatedAttribute(r,a,l,c,h,new Pt)),s&&(u.uv1=tr.getInterpolatedAttribute(s,a,l,c,h,new Pt)),o&&(u.normal=tr.getInterpolatedAttribute(o,a,l,c,h,new oe),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new oe,materialIndex:0};tr.getNormal(qc,$c,Yc,f.normal),u.face=f,u.barycoord=h}return u}class bw extends oi{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Dn,u=Dn,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sh=new oe,Mw=new oe,Ew=new ut;class uo{constructor(e=new oe(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Sh.subVectors(i,t).cross(Mw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Sh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ew.getNormalMatrix(e),r=this.coplanarPoint(Sh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const io=new cm,Tw=new Pt(.5,.5),Jc=new oe;class vS{constructor(e=new uo,t=new uo,i=new uo,r=new uo,s=new uo,o=new uo){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Tr,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],m=s[8],_=s[9],p=s[10],g=s[11],y=s[12],M=s[13],S=s[14],w=s[15];if(r[0].setComponents(c-o,d-u,g-m,w-y).normalize(),r[1].setComponents(c+o,d+u,g+m,w+y).normalize(),r[2].setComponents(c+a,d+h,g+_,w+M).normalize(),r[3].setComponents(c-a,d-h,g-_,w-M).normalize(),i)r[4].setComponents(l,f,p,S).normalize(),r[5].setComponents(c-l,d-f,g-p,w-S).normalize();else if(r[4].setComponents(c-l,d-f,g-p,w-S).normalize(),t===Tr)r[5].setComponents(c+l,d+f,g+p,w+S).normalize();else if(t===Xu)r[5].setComponents(l,f,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),io.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),io.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(io)}intersectsSprite(e){io.center.set(0,0,0);const t=Tw.distanceTo(e.center);return io.radius=.7071067811865476+t,io.applyMatrix4(e.matrixWorld),this.intersectsSphere(io)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Jc.x=r.normal.x>0?e.max.x:e.min.x,Jc.y=r.normal.y>0?e.max.y:e.min.y,Jc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Jc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xS extends oi{constructor(e=[],t=Fo,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ac extends oi{constructor(e,t,i=Ir,r,s,o,a=Dn,l=Dn,c,u=us,h=1){if(u!==us&&u!==yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ww extends ac{constructor(e,t=Ir,i=Fo,r,s,o=Dn,a=Dn,l,c=us){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class SS extends oi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class mc extends ds{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new is(c,3)),this.setAttribute("normal",new is(u,3)),this.setAttribute("uv",new is(h,2));function m(_,p,g,y,M,S,w,T,E,v,x){const D=S/E,P=w/v,I=S/2,G=w/2,$=T/2,X=E+1,W=v+1;let B=0,te=0;const le=new oe;for(let k=0;k<W;k++){const xe=k*P-G;for(let de=0;de<X;de++){const ke=de*D-I;le[_]=ke*y,le[p]=xe*M,le[g]=$,c.push(le.x,le.y,le.z),le[_]=0,le[p]=0,le[g]=T>0?1:-1,u.push(le.x,le.y,le.z),h.push(de/E),h.push(1-k/v),B+=1}}for(let k=0;k<v;k++)for(let xe=0;xe<E;xe++){const de=f+xe+X*k,ke=f+xe+X*(k+1),$e=f+(xe+1)+X*(k+1),je=f+(xe+1)+X*k;l.push(de,ke,je),l.push(ke,$e,je),te+=6}a.addGroup(d,te,x),d+=te,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class gc extends ds{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,d=[],m=[],_=[],p=[];for(let g=0;g<u;g++){const y=g*f-o;for(let M=0;M<c;M++){const S=M*h-s;m.push(S,-y,0),_.push(0,0,1),p.push(M/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){const M=y+c*g,S=y+c*(g+1),w=y+1+c*(g+1),T=y+1+c*g;d.push(M,S,T),d.push(S,w,T)}this.setIndex(d),this.setAttribute("position",new is(m,3)),this.setAttribute("normal",new is(_,3)),this.setAttribute("uv",new is(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gc(e.width,e.height,e.widthSegments,e.heightSegments)}}function Xa(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Zn(n){const e={};for(let t=0;t<n.length;t++){const i=Xa(n[t]);for(const r in i)e[r]=i[r]}return e}function Aw(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function yS(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const Cw={clone:Xa,merge:Zn};var Rw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class lr extends mf{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rw,this.fragmentShader=Pw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xa(e.uniforms),this.uniformsGroups=Aw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Dw extends lr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Lw extends mf{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=HT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Iw extends mf{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Qc=new oe,eu=new Ka,hr=new oe;class bS extends Di{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=Tr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qc,eu,hr),hr.x===1&&hr.y===1&&hr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qc,eu,hr.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Qc,eu,hr),hr.x===1&&hr.y===1&&hr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qc,eu,hr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Es=new oe,b_=new Pt,M_=new Pt;class Qi extends bS{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=np*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return np*2*Math.atan(Math.tan(Zf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Es.x,Es.y).multiplyScalar(-e/Es.z),Es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Es.x,Es.y).multiplyScalar(-e/Es.z)}getViewSize(e,t){return this.getViewBounds(e,b_,M_),t.subVectors(M_,b_)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zf*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class um extends bS{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const sa=-90,oa=1;class Nw extends Di{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qi(sa,oa,e,t);r.layers=this.layers,this.add(r);const s=new Qi(sa,oa,e,t);s.layers=this.layers,this.add(s);const o=new Qi(sa,oa,e,t);o.layers=this.layers,this.add(o);const a=new Qi(sa,oa,e,t);a.layers=this.layers,this.add(a);const l=new Qi(sa,oa,e,t);l.layers=this.layers,this.add(l);const c=new Qi(sa,oa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Tr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Uw extends Qi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function E_(n,e,t,i){const r=Fw(i);switch(t){case lS:return n*e;case uS:return n*e/r.components*r.byteLength;case im:return n*e/r.components*r.byteLength;case Ga:return n*e*2/r.components*r.byteLength;case rm:return n*e*2/r.components*r.byteLength;case cS:return n*e*3/r.components*r.byteLength;case nr:return n*e*4/r.components*r.byteLength;case sm:return n*e*4/r.components*r.byteLength;case vu:case xu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Su:case yu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Td:case Ad:return Math.max(n,16)*Math.max(e,8)/4;case Ed:case wd:return Math.max(n,8)*Math.max(e,8)/2;case Cd:case Rd:case Dd:case Ld:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Pd:case Id:case Nd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Od:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case kd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case zd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Gd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Wd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Xd:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case qd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case $d:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Yd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Kd:case jd:case Zd:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Jd:case Qd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ep:case tp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fw(n){switch(n){case Hi:case rS:return{byteLength:1,components:1};case sc:case sS:case cs:return{byteLength:2,components:1};case tm:case nm:return{byteLength:2,components:4};case Ir:case em:case Er:return{byteLength:4,components:1};case oS:case aS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qp}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qp);function MS(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Ow(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){const m=h[f],_=h[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){const _=h[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var kw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bw=`#ifdef USE_ALPHAHASH
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
#endif`,zw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ww=`#ifdef USE_AOMAP
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
#endif`,Xw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qw=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,$w=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zw=`#ifdef USE_IRIDESCENCE
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
#endif`,Jw=`#ifdef USE_BUMPMAP
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
#endif`,Qw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,oA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,aA=`#define PI 3.141592653589793
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
} // validated`,lA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cA=`vec3 transformedNormal = objectNormal;
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
#endif`,uA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pA="gl_FragColor = linearToOutputTexel( gl_FragColor );",mA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gA=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,_A=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vA=`#ifdef USE_ENVMAP
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
#endif`,xA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SA=`#ifdef USE_ENVMAP
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
#endif`,yA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,MA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,EA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TA=`#ifdef USE_GRADIENTMAP
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
}`,wA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RA=`uniform bool receiveShadow;
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
#endif`,PA=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,DA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,FA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,OA=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,kA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,BA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$A=`#if defined( USE_POINTS_UV )
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
#endif`,YA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ZA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QA=`#ifdef USE_MORPHTARGETS
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
#endif`,eC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oC=`#ifdef USE_NORMALMAP
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
#endif`,aC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,dC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_C=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,SC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bC=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,MC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,EC=`#ifdef USE_SKINNING
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
#endif`,TC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wC=`#ifdef USE_SKINNING
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
#endif`,AC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,DC=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,LC=`#ifdef USE_TRANSMISSION
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
#endif`,IC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kC=`uniform sampler2D t2D;
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
}`,BC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zC=`#ifdef ENVMAP_TYPE_CUBE
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
}`,VC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GC=`#include <common>
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
}`,WC=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,XC=`#define DISTANCE
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
}`,qC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,$C=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KC=`uniform float scale;
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
}`,jC=`uniform vec3 diffuse;
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
}`,ZC=`#include <common>
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
}`,JC=`uniform vec3 diffuse;
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
}`,QC=`#define LAMBERT
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
}`,eR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,tR=`#define MATCAP
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
}`,nR=`#define MATCAP
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
}`,iR=`#define NORMAL
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
}`,rR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sR=`#define PHONG
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
}`,oR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,aR=`#define STANDARD
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
}`,lR=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,cR=`#define TOON
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
}`,uR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,fR=`uniform float size;
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
}`,hR=`uniform vec3 diffuse;
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
}`,dR=`#include <common>
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
}`,pR=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,mR=`uniform float rotation;
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
}`,gR=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:kw,alphahash_pars_fragment:Bw,alphamap_fragment:zw,alphamap_pars_fragment:Vw,alphatest_fragment:Hw,alphatest_pars_fragment:Gw,aomap_fragment:Ww,aomap_pars_fragment:Xw,batching_pars_vertex:qw,batching_vertex:$w,begin_vertex:Yw,beginnormal_vertex:Kw,bsdfs:jw,iridescence_fragment:Zw,bumpmap_pars_fragment:Jw,clipping_planes_fragment:Qw,clipping_planes_pars_fragment:eA,clipping_planes_pars_vertex:tA,clipping_planes_vertex:nA,color_fragment:iA,color_pars_fragment:rA,color_pars_vertex:sA,color_vertex:oA,common:aA,cube_uv_reflection_fragment:lA,defaultnormal_vertex:cA,displacementmap_pars_vertex:uA,displacementmap_vertex:fA,emissivemap_fragment:hA,emissivemap_pars_fragment:dA,colorspace_fragment:pA,colorspace_pars_fragment:mA,envmap_fragment:gA,envmap_common_pars_fragment:_A,envmap_pars_fragment:vA,envmap_pars_vertex:xA,envmap_physical_pars_fragment:PA,envmap_vertex:SA,fog_vertex:yA,fog_pars_vertex:bA,fog_fragment:MA,fog_pars_fragment:EA,gradientmap_pars_fragment:TA,lightmap_pars_fragment:wA,lights_lambert_fragment:AA,lights_lambert_pars_fragment:CA,lights_pars_begin:RA,lights_toon_fragment:DA,lights_toon_pars_fragment:LA,lights_phong_fragment:IA,lights_phong_pars_fragment:NA,lights_physical_fragment:UA,lights_physical_pars_fragment:FA,lights_fragment_begin:OA,lights_fragment_maps:kA,lights_fragment_end:BA,logdepthbuf_fragment:zA,logdepthbuf_pars_fragment:VA,logdepthbuf_pars_vertex:HA,logdepthbuf_vertex:GA,map_fragment:WA,map_pars_fragment:XA,map_particle_fragment:qA,map_particle_pars_fragment:$A,metalnessmap_fragment:YA,metalnessmap_pars_fragment:KA,morphinstance_vertex:jA,morphcolor_vertex:ZA,morphnormal_vertex:JA,morphtarget_pars_vertex:QA,morphtarget_vertex:eC,normal_fragment_begin:tC,normal_fragment_maps:nC,normal_pars_fragment:iC,normal_pars_vertex:rC,normal_vertex:sC,normalmap_pars_fragment:oC,clearcoat_normal_fragment_begin:aC,clearcoat_normal_fragment_maps:lC,clearcoat_pars_fragment:cC,iridescence_pars_fragment:uC,opaque_fragment:fC,packing:hC,premultiplied_alpha_fragment:dC,project_vertex:pC,dithering_fragment:mC,dithering_pars_fragment:gC,roughnessmap_fragment:_C,roughnessmap_pars_fragment:vC,shadowmap_pars_fragment:xC,shadowmap_pars_vertex:SC,shadowmap_vertex:yC,shadowmask_pars_fragment:bC,skinbase_vertex:MC,skinning_pars_vertex:EC,skinning_vertex:TC,skinnormal_vertex:wC,specularmap_fragment:AC,specularmap_pars_fragment:CC,tonemapping_fragment:RC,tonemapping_pars_fragment:PC,transmission_fragment:DC,transmission_pars_fragment:LC,uv_pars_fragment:IC,uv_pars_vertex:NC,uv_vertex:UC,worldpos_vertex:FC,background_vert:OC,background_frag:kC,backgroundCube_vert:BC,backgroundCube_frag:zC,cube_vert:VC,cube_frag:HC,depth_vert:GC,depth_frag:WC,distance_vert:XC,distance_frag:qC,equirect_vert:$C,equirect_frag:YC,linedashed_vert:KC,linedashed_frag:jC,meshbasic_vert:ZC,meshbasic_frag:JC,meshlambert_vert:QC,meshlambert_frag:eR,meshmatcap_vert:tR,meshmatcap_frag:nR,meshnormal_vert:iR,meshnormal_frag:rR,meshphong_vert:sR,meshphong_frag:oR,meshphysical_vert:aR,meshphysical_frag:lR,meshtoon_vert:cR,meshtoon_frag:uR,points_vert:fR,points_frag:hR,shadow_vert:dR,shadow_frag:pR,sprite_vert:mR,sprite_frag:gR},Oe={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},xr={basic:{uniforms:Zn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Zn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Nt(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Zn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Zn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Zn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Nt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Zn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Zn([Oe.points,Oe.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Zn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Zn([Oe.common,Oe.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Zn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Zn([Oe.sprite,Oe.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Zn([Oe.common,Oe.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Zn([Oe.lights,Oe.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};xr.physical={uniforms:Zn([xr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const tu={r:0,b:0,g:0},ro=new fs,_R=new hn;function vR(n,e,t,i,r,s){const o=new Nt(0);let a=r===!0?0:1,l,c,u=null,h=0,f=null;function d(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){const S=y.backgroundBlurriness>0;M=e.get(M,S)}return M}function m(y){let M=!1;const S=d(y);S===null?p(o,a):S&&S.isColor&&(p(S,1),M=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(y,M){const S=d(M);S&&(S.isCubeTexture||S.mapping===pf)?(c===void 0&&(c=new Nr(new mc(1,1,1),new lr({name:"BackgroundCubeMaterial",uniforms:Xa(xr.backgroundCube.uniforms),vertexShader:xr.backgroundCube.vertexShader,fragmentShader:xr.backgroundCube.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),ro.copy(M.backgroundRotation),ro.x*=-1,ro.y*=-1,ro.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ro.y*=-1,ro.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_R.makeRotationFromEuler(ro)),c.material.toneMapped=xt.getTransfer(S.colorSpace)!==It,(u!==S||h!==S.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,h=S.version,f=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Nr(new gc(2,2),new lr({name:"BackgroundMaterial",uniforms:Xa(xr.background.uniforms),vertexShader:xr.background.vertexShader,fragmentShader:xr.background.fragmentShader,side:Xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=xt.getTransfer(S.colorSpace)!==It,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,h=S.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,M){y.getRGB(tu,yS(n)),t.buffers.color.setClear(tu.r,tu.g,tu.b,M,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),a=M,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,p(o,a)},render:m,addToRenderList:_,dispose:g}}function xR(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(P,I,G,$,X){let W=!1;const B=h(P,$,G,I);s!==B&&(s=B,c(s.object)),W=d(P,$,G,X),W&&m(P,$,G,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,S(P,I,G,$),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function u(P){return n.deleteVertexArray(P)}function h(P,I,G,$){const X=$.wireframe===!0;let W=i[I.id];W===void 0&&(W={},i[I.id]=W);const B=P.isInstancedMesh===!0?P.id:0;let te=W[B];te===void 0&&(te={},W[B]=te);let le=te[G.id];le===void 0&&(le={},te[G.id]=le);let k=le[X];return k===void 0&&(k=f(l()),le[X]=k),k}function f(P){const I=[],G=[],$=[];for(let X=0;X<t;X++)I[X]=0,G[X]=0,$[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:G,attributeDivisors:$,object:P,attributes:{},index:null}}function d(P,I,G,$){const X=s.attributes,W=I.attributes;let B=0;const te=G.getAttributes();for(const le in te)if(te[le].location>=0){const xe=X[le];let de=W[le];if(de===void 0&&(le==="instanceMatrix"&&P.instanceMatrix&&(de=P.instanceMatrix),le==="instanceColor"&&P.instanceColor&&(de=P.instanceColor)),xe===void 0||xe.attribute!==de||de&&xe.data!==de.data)return!0;B++}return s.attributesNum!==B||s.index!==$}function m(P,I,G,$){const X={},W=I.attributes;let B=0;const te=G.getAttributes();for(const le in te)if(te[le].location>=0){let xe=W[le];xe===void 0&&(le==="instanceMatrix"&&P.instanceMatrix&&(xe=P.instanceMatrix),le==="instanceColor"&&P.instanceColor&&(xe=P.instanceColor));const de={};de.attribute=xe,xe&&xe.data&&(de.data=xe.data),X[le]=de,B++}s.attributes=X,s.attributesNum=B,s.index=$}function _(){const P=s.newAttributes;for(let I=0,G=P.length;I<G;I++)P[I]=0}function p(P){g(P,0)}function g(P,I){const G=s.newAttributes,$=s.enabledAttributes,X=s.attributeDivisors;G[P]=1,$[P]===0&&(n.enableVertexAttribArray(P),$[P]=1),X[P]!==I&&(n.vertexAttribDivisor(P,I),X[P]=I)}function y(){const P=s.newAttributes,I=s.enabledAttributes;for(let G=0,$=I.length;G<$;G++)I[G]!==P[G]&&(n.disableVertexAttribArray(G),I[G]=0)}function M(P,I,G,$,X,W,B){B===!0?n.vertexAttribIPointer(P,I,G,X,W):n.vertexAttribPointer(P,I,G,$,X,W)}function S(P,I,G,$){_();const X=$.attributes,W=G.getAttributes(),B=I.defaultAttributeValues;for(const te in W){const le=W[te];if(le.location>=0){let k=X[te];if(k===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(k=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(k=P.instanceColor)),k!==void 0){const xe=k.normalized,de=k.itemSize,ke=e.get(k);if(ke===void 0)continue;const $e=ke.buffer,je=ke.type,re=ke.bytesPerElement,H=je===n.INT||je===n.UNSIGNED_INT||k.gpuType===em;if(k.isInterleavedBufferAttribute){const j=k.data,ue=j.stride,pe=k.offset;if(j.isInstancedInterleavedBuffer){for(let Me=0;Me<le.locationSize;Me++)g(le.location+Me,j.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Me=0;Me<le.locationSize;Me++)p(le.location+Me);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let Me=0;Me<le.locationSize;Me++)M(le.location+Me,de/le.locationSize,je,xe,ue*re,(pe+de/le.locationSize*Me)*re,H)}else{if(k.isInstancedBufferAttribute){for(let j=0;j<le.locationSize;j++)g(le.location+j,k.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let j=0;j<le.locationSize;j++)p(le.location+j);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let j=0;j<le.locationSize;j++)M(le.location+j,de/le.locationSize,je,xe,de*re,de/le.locationSize*j*re,H)}}else if(B!==void 0){const xe=B[te];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(le.location,xe);break;case 3:n.vertexAttrib3fv(le.location,xe);break;case 4:n.vertexAttrib4fv(le.location,xe);break;default:n.vertexAttrib1fv(le.location,xe)}}}}y()}function w(){x();for(const P in i){const I=i[P];for(const G in I){const $=I[G];for(const X in $){const W=$[X];for(const B in W)u(W[B].object),delete W[B];delete $[X]}}delete i[P]}}function T(P){if(i[P.id]===void 0)return;const I=i[P.id];for(const G in I){const $=I[G];for(const X in $){const W=$[X];for(const B in W)u(W[B].object),delete W[B];delete $[X]}}delete i[P.id]}function E(P){for(const I in i){const G=i[I];for(const $ in G){const X=G[$];if(X[P.id]===void 0)continue;const W=X[P.id];for(const B in W)u(W[B].object),delete W[B];delete X[P.id]}}}function v(P){for(const I in i){const G=i[I],$=P.isInstancedMesh===!0?P.id:0,X=G[$];if(X!==void 0){for(const W in X){const B=X[W];for(const te in B)u(B[te].object),delete B[te];delete X[W]}delete G[$],Object.keys(G).length===0&&delete i[I]}}}function x(){D(),o=!0,s!==r&&(s=r,c(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:x,resetDefaultState:D,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function SR(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],u[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_]*f[_];t.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function yR(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==nr&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const v=E===cs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Hi&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Er&&!v)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(st("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:S,maxSamples:w,samples:T}}function bR(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new uo,a=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const m=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,g=n.get(h);if(!r||m===null||m.length===0||s&&!p)s?u(null):c();else{const y=s?0:i,M=y*4;let S=g.clippingState||null;l.value=S,S=u(m,f,M,d);for(let w=0;w!==M;++w)S[w]=t[w];g.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,m){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,m!==!0||p===null){const g=d+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<g)&&(p=new Float32Array(g));for(let M=0,S=d;M!==_;++M,S+=4)o.copy(h[M]).applyMatrix4(y,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}const Us=4,T_=[.125,.215,.35,.446,.526,.582],go=20,MR=256,cl=new um,w_=new Nt;let yh=null,bh=0,Mh=0,Eh=!1;const ER=new oe;class A_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=ER}=s;yh=this._renderer.getRenderTarget(),bh=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),Eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=P_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=R_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yh,bh,Mh),this._renderer.xr.enabled=Eh,e.scissorTest=!1,aa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fo||e.mapping===Ha?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yh=this._renderer.getRenderTarget(),bh=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),Eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:cs,format:nr,colorSpace:Wa,depthBuffer:!1},r=C_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=C_(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=TR(s)),this._blurMaterial=AR(s,e,t),this._ggxMaterial=wR(s,e,t)}return r}_compileMaterial(e){const t=new Nr(new ds,e);this._renderer.compile(t,cl)}_sceneToCubeUV(e,t,i,r,s){const l=new Qi(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(w_),h.toneMapping=Cr,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Nr(new mc,new _S({name:"PMREM.Background",side:mi,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let g=!1;const y=e.background;y?y.isColor&&(p.color.copy(y),e.background=null,g=!0):(p.color.copy(w_),g=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):S===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));const w=this._cubeSize;aa(r,S*w,M>2?w:0,w,w),h.setRenderTarget(r),g&&h.render(_,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Fo||e.mapping===Ha;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=P_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=R_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;aa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,cl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,d=h*f,{_lodMax:m}=this,_=this._sizeLods[i],p=3*_*(i>m-Us?i-m+Us:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=m-t,aa(s,p,g,3*_,2*_),r.setRenderTarget(s),r.render(a,cl),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,aa(e,p,g,3*_,2*_),r.setRenderTarget(e),r.render(a,cl)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Mt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=c;const f=c.uniforms,d=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*go-1),_=s/m,p=isFinite(s)?1+Math.floor(u*_):go;p>go&&st(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${go}`);const g=[];let y=0;for(let E=0;E<go;++E){const v=E/_,x=Math.exp(-v*v/2);g.push(x),E===0?y+=x:E<p&&(y+=2*x)}for(let E=0;E<g.length;E++)g[E]=g[E]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=m,f.mipInt.value=M-i;const S=this._sizeLods[r],w=3*S*(r>M-Us?r-M+Us:0),T=4*(this._cubeSize-S);aa(t,w,T,3*S,2*S),l.setRenderTarget(t),l.render(h,cl)}}function TR(n){const e=[],t=[],i=[];let r=n;const s=n-Us+1+T_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Us?l=T_[o-n+Us-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,_=3,p=2,g=1,y=new Float32Array(_*m*d),M=new Float32Array(p*m*d),S=new Float32Array(g*m*d);for(let T=0;T<d;T++){const E=T%3*2/3-1,v=T>2?0:-1,x=[E,v,0,E+2/3,v,0,E+2/3,v+1,0,E,v,0,E+2/3,v+1,0,E,v+1,0];y.set(x,_*m*T),M.set(f,p*m*T);const D=[T,T,T,T,T,T];S.set(D,g*m*T)}const w=new ds;w.setAttribute("position",new Pr(y,_)),w.setAttribute("uv",new Pr(M,p)),w.setAttribute("faceIndex",new Pr(S,g)),i.push(new Nr(w,null)),r>Us&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function C_(n,e,t){const i=new Rr(n,e,t);return i.texture.mapping=pf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function aa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function wR(n,e,t){return new lr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:MR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ts,depthTest:!1,depthWrite:!1})}function AR(n,e,t){const i=new Float32Array(go),r=new oe(0,1,0);return new lr({name:"SphericalGaussianBlur",defines:{n:go,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:gf(),fragmentShader:`

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
		`,blending:ts,depthTest:!1,depthWrite:!1})}function R_(){return new lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gf(),fragmentShader:`

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
		`,blending:ts,depthTest:!1,depthWrite:!1})}function P_(){return new lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ts,depthTest:!1,depthWrite:!1})}function gf(){return`

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
	`}class ES extends Rr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new xS(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new mc(5,5,5),s=new lr({name:"CubemapFromEquirect",uniforms:Xa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mi,blending:ts});s.uniforms.tEquirect.value=t;const o=new Nr(r,s),a=t.minFilter;return t.minFilter===So&&(t.minFilter=Wn),new Nw(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}function CR(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===Yf||d===Kf)if(e.has(f)){const m=e.get(f).texture;return a(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const _=new ES(m.height);return _.fromEquirectangularTexture(n,f),e.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const d=f.mapping,m=d===Yf||d===Kf,_=d===Fo||d===Ha;if(m||_){let p=t.get(f);const g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return i===null&&(i=new A_(n)),p=m?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{const y=f.image;return m&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new A_(n)),p=m?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function a(f,d){return d===Yf?f.mapping=Fo:d===Kf&&(f.mapping=Ha),f}function l(f){let d=0;const m=6;for(let _=0;_<m;_++)f[_]!==void 0&&d++;return d===m}function c(f){const d=f.target;d.removeEventListener("dispose",c);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(f){const d=f.target;d.removeEventListener("dispose",u);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function RR(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&$u("WebGLRenderer: "+i+" extension not supported."),r}}}function PR(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],n.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,m=h.attributes.position;let _=0;if(m===void 0)return;if(d!==null){const y=d.array;_=d.version;for(let M=0,S=y.length;M<S;M+=3){const w=y[M+0],T=y[M+1],E=y[M+2];f.push(w,T,T,E,E,w)}}else{const y=m.array;_=m.version;for(let M=0,S=y.length/3-1;M<S;M+=3){const w=M+0,T=M+1,E=M+2;f.push(w,T,T,E,E,w)}}const p=new(m.count>=65535?gS:mS)(f,1);p.version=_;const g=s.get(h);g&&e.remove(g),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function DR(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,s,f*o),t.update(d,i,1)}function c(f,d,m){m!==0&&(n.drawElementsInstanced(i,d,s,f*o,m),t.update(d,i,m))}function u(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,m);let p=0;for(let g=0;g<m;g++)p+=d[g];t.update(p,i,1)}function h(f,d,m,_){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f.length;g++)c(f[g]/o,d[g],_[g]);else{p.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,_,0,m);let g=0;for(let y=0;y<m;y++)g+=d[y]*_[y];t.update(g,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function LR(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:Mt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function IR(n,e,t){const i=new WeakMap,r=new an;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let D=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",D)};var d=D;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let S=0;m===!0&&(S=1),_===!0&&(S=2),p===!0&&(S=3);let w=a.attributes.position.count*S,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const E=new Float32Array(w*T*4*h),v=new hS(E,w,T,h);v.type=Er,v.needsUpdate=!0;const x=S*4;for(let P=0;P<h;P++){const I=g[P],G=y[P],$=M[P],X=w*T*4*P;for(let W=0;W<I.count;W++){const B=W*x;m===!0&&(r.fromBufferAttribute(I,W),E[X+B+0]=r.x,E[X+B+1]=r.y,E[X+B+2]=r.z,E[X+B+3]=0),_===!0&&(r.fromBufferAttribute(G,W),E[X+B+4]=r.x,E[X+B+5]=r.y,E[X+B+6]=r.z,E[X+B+7]=0),p===!0&&(r.fromBufferAttribute($,W),E[X+B+8]=r.x,E[X+B+9]=r.y,E[X+B+10]=r.z,E[X+B+11]=$.itemSize===4?r.w:1)}}f={count:h,texture:v,size:new Pt(w,T)},i.set(a,f),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function NR(n,e,t,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const UR={[jx]:"LINEAR_TONE_MAPPING",[Zx]:"REINHARD_TONE_MAPPING",[Jx]:"CINEON_TONE_MAPPING",[Qx]:"ACES_FILMIC_TONE_MAPPING",[tS]:"AGX_TONE_MAPPING",[nS]:"NEUTRAL_TONE_MAPPING",[eS]:"CUSTOM_TONE_MAPPING"};function FR(n,e,t,i,r){const s=new Rr(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),o=new Rr(e,t,{type:cs,depthBuffer:!1,stencilBuffer:!1}),a=new ds;a.setAttribute("position",new is([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new is([0,2,0,0,2,0],2));const l=new Dw({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Nr(a,l),u=new um(-1,1,1,-1,0,1);let h=null,f=null,d=!1,m,_=null,p=[],g=!1;this.setSize=function(y,M){s.setSize(y,M),o.setSize(y,M);for(let S=0;S<p.length;S++){const w=p[S];w.setSize&&w.setSize(y,M)}},this.setEffects=function(y){p=y,g=p.length>0&&p[0].isRenderPass===!0;const M=s.width,S=s.height;for(let w=0;w<p.length;w++){const T=p[w];T.setSize&&T.setSize(M,S)}},this.begin=function(y,M){if(d||y.toneMapping===Cr&&p.length===0)return!1;if(_=M,M!==null){const S=M.width,w=M.height;(s.width!==S||s.height!==w)&&this.setSize(S,w)}return g===!1&&y.setRenderTarget(s),m=y.toneMapping,y.toneMapping=Cr,!0},this.hasRenderPass=function(){return g},this.end=function(y,M){y.toneMapping=m,d=!0;let S=s,w=o;for(let T=0;T<p.length;T++){const E=p[T];if(E.enabled!==!1&&(E.render(y,w,S,M),E.needsSwap!==!1)){const v=S;S=w,w=v}}if(h!==y.outputColorSpace||f!==y.toneMapping){h=y.outputColorSpace,f=y.toneMapping,l.defines={},xt.getTransfer(h)===It&&(l.defines.SRGB_TRANSFER="");const T=UR[f];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,y.setRenderTarget(_),y.render(c,u),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const TS=new oi,ip=new ac(1,1),wS=new hS,AS=new aw,CS=new xS,D_=[],L_=[],I_=new Float32Array(16),N_=new Float32Array(9),U_=new Float32Array(4);function ja(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=D_[r];if(s===void 0&&(s=new Float32Array(r),D_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Sn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function _f(n,e){let t=L_[e];t===void 0&&(t=new Int32Array(e),L_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function OR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function kR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;n.uniform2fv(this.addr,e),yn(t,e)}}function BR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Sn(t,e))return;n.uniform3fv(this.addr,e),yn(t,e)}}function zR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;n.uniform4fv(this.addr,e),yn(t,e)}}function VR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Sn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yn(t,e)}else{if(Sn(t,i))return;U_.set(i),n.uniformMatrix2fv(this.addr,!1,U_),yn(t,i)}}function HR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Sn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yn(t,e)}else{if(Sn(t,i))return;N_.set(i),n.uniformMatrix3fv(this.addr,!1,N_),yn(t,i)}}function GR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Sn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yn(t,e)}else{if(Sn(t,i))return;I_.set(i),n.uniformMatrix4fv(this.addr,!1,I_),yn(t,i)}}function WR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function XR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;n.uniform2iv(this.addr,e),yn(t,e)}}function qR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;n.uniform3iv(this.addr,e),yn(t,e)}}function $R(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;n.uniform4iv(this.addr,e),yn(t,e)}}function YR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function KR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;n.uniform2uiv(this.addr,e),yn(t,e)}}function jR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;n.uniform3uiv(this.addr,e),yn(t,e)}}function ZR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;n.uniform4uiv(this.addr,e),yn(t,e)}}function JR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(ip.compareFunction=t.isReversedDepthBuffer()?am:om,s=ip):s=TS,t.setTexture2D(e||s,r)}function QR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||AS,r)}function eP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||CS,r)}function tP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||wS,r)}function nP(n){switch(n){case 5126:return OR;case 35664:return kR;case 35665:return BR;case 35666:return zR;case 35674:return VR;case 35675:return HR;case 35676:return GR;case 5124:case 35670:return WR;case 35667:case 35671:return XR;case 35668:case 35672:return qR;case 35669:case 35673:return $R;case 5125:return YR;case 36294:return KR;case 36295:return jR;case 36296:return ZR;case 35678:case 36198:case 36298:case 36306:case 35682:return JR;case 35679:case 36299:case 36307:return QR;case 35680:case 36300:case 36308:case 36293:return eP;case 36289:case 36303:case 36311:case 36292:return tP}}function iP(n,e){n.uniform1fv(this.addr,e)}function rP(n,e){const t=ja(e,this.size,2);n.uniform2fv(this.addr,t)}function sP(n,e){const t=ja(e,this.size,3);n.uniform3fv(this.addr,t)}function oP(n,e){const t=ja(e,this.size,4);n.uniform4fv(this.addr,t)}function aP(n,e){const t=ja(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function lP(n,e){const t=ja(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function cP(n,e){const t=ja(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function uP(n,e){n.uniform1iv(this.addr,e)}function fP(n,e){n.uniform2iv(this.addr,e)}function hP(n,e){n.uniform3iv(this.addr,e)}function dP(n,e){n.uniform4iv(this.addr,e)}function pP(n,e){n.uniform1uiv(this.addr,e)}function mP(n,e){n.uniform2uiv(this.addr,e)}function gP(n,e){n.uniform3uiv(this.addr,e)}function _P(n,e){n.uniform4uiv(this.addr,e)}function vP(n,e,t){const i=this.cache,r=e.length,s=_f(t,r);Sn(i,s)||(n.uniform1iv(this.addr,s),yn(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=ip:o=TS;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function xP(n,e,t){const i=this.cache,r=e.length,s=_f(t,r);Sn(i,s)||(n.uniform1iv(this.addr,s),yn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||AS,s[o])}function SP(n,e,t){const i=this.cache,r=e.length,s=_f(t,r);Sn(i,s)||(n.uniform1iv(this.addr,s),yn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||CS,s[o])}function yP(n,e,t){const i=this.cache,r=e.length,s=_f(t,r);Sn(i,s)||(n.uniform1iv(this.addr,s),yn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||wS,s[o])}function bP(n){switch(n){case 5126:return iP;case 35664:return rP;case 35665:return sP;case 35666:return oP;case 35674:return aP;case 35675:return lP;case 35676:return cP;case 5124:case 35670:return uP;case 35667:case 35671:return fP;case 35668:case 35672:return hP;case 35669:case 35673:return dP;case 5125:return pP;case 36294:return mP;case 36295:return gP;case 36296:return _P;case 35678:case 36198:case 36298:case 36306:case 35682:return vP;case 35679:case 36299:case 36307:return xP;case 35680:case 36300:case 36308:case 36293:return SP;case 36289:case 36303:case 36311:case 36292:return yP}}class MP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=nP(t.type)}}class EP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bP(t.type)}}class TP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Th=/(\w+)(\])?(\[|\.)?/g;function F_(n,e){n.seq.push(e),n.map[e.id]=e}function wP(n,e,t){const i=n.name,r=i.length;for(Th.lastIndex=0;;){const s=Th.exec(i),o=Th.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){F_(t,c===void 0?new MP(a,n,e):new EP(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new TP(a),F_(t,h)),t=h}}}class bu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);wP(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function O_(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const AP=37297;let CP=0;function RP(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const k_=new ut;function PP(n){xt._getMatrix(k_,xt.workingColorSpace,n);const e=`mat3( ${k_.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(n)){case Wu:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function B_(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+RP(n.getShaderSource(e),a)}else return s}function DP(n,e){const t=PP(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const LP={[jx]:"Linear",[Zx]:"Reinhard",[Jx]:"Cineon",[Qx]:"ACESFilmic",[tS]:"AgX",[nS]:"Neutral",[eS]:"Custom"};function IP(n,e){const t=LP[e];return t===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nu=new oe;function NP(){xt.getLuminanceCoefficients(nu);const n=nu.x.toFixed(4),e=nu.y.toFixed(4),t=nu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function UP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sl).join(`
`)}function FP(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function OP(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Sl(n){return n!==""}function z_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function V_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kP=/^[ \t]*#include +<([\w\d./]+)>/gm;function rp(n){return n.replace(kP,zP)}const BP=new Map;function zP(n,e){let t=ht[e];if(t===void 0){const i=BP.get(e);if(i!==void 0)t=ht[i],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return rp(t)}const VP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function H_(n){return n.replace(VP,HP)}function HP(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function G_(n){let e=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const GP={[_u]:"SHADOWMAP_TYPE_PCF",[xl]:"SHADOWMAP_TYPE_VSM"};function WP(n){return GP[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const XP={[Fo]:"ENVMAP_TYPE_CUBE",[Ha]:"ENVMAP_TYPE_CUBE",[pf]:"ENVMAP_TYPE_CUBE_UV"};function qP(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":XP[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const $P={[Ha]:"ENVMAP_MODE_REFRACTION"};function YP(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":$P[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const KP={[Kx]:"ENVMAP_BLENDING_MULTIPLY",[BT]:"ENVMAP_BLENDING_MIX",[zT]:"ENVMAP_BLENDING_ADD"};function jP(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":KP[n.combine]||"ENVMAP_BLENDING_NONE"}function ZP(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function JP(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=WP(t),c=qP(t),u=YP(t),h=jP(t),f=ZP(t),d=UP(t),m=FP(s),_=r.createProgram();let p,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Sl).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Sl).join(`
`),g.length>0&&(g+=`
`)):(p=[G_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sl).join(`
`),g=[G_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cr?"#define TONE_MAPPING":"",t.toneMapping!==Cr?ht.tonemapping_pars_fragment:"",t.toneMapping!==Cr?IP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,DP("linearToOutputTexel",t.outputColorSpace),NP(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sl).join(`
`)),o=rp(o),o=z_(o,t),o=V_(o,t),a=rp(a),a=z_(a,t),a=V_(a,t),o=H_(o),a=H_(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===s_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===s_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=y+p+o,S=y+g+a,w=O_(r,r.VERTEX_SHADER,M),T=O_(r,r.FRAGMENT_SHADER,S);r.attachShader(_,w),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function E(P){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(_)||"",G=r.getShaderInfoLog(w)||"",$=r.getShaderInfoLog(T)||"",X=I.trim(),W=G.trim(),B=$.trim();let te=!0,le=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,w,T);else{const k=B_(r,w,"vertex"),xe=B_(r,T,"fragment");Mt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+X+`
`+k+`
`+xe)}else X!==""?st("WebGLProgram: Program Info Log:",X):(W===""||B==="")&&(le=!1);le&&(P.diagnostics={runnable:te,programLog:X,vertexShader:{log:W,prefix:p},fragmentShader:{log:B,prefix:g}})}r.deleteShader(w),r.deleteShader(T),v=new bu(r,_),x=OP(r,_)}let v;this.getUniforms=function(){return v===void 0&&E(this),v};let x;this.getAttributes=function(){return x===void 0&&E(this),x};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(_,AP)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=CP++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=T,this}let QP=0;class e2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new t2(e),t.set(e,i)),i}}class t2{constructor(e){this.id=QP++,this.code=e,this.usedTimes=0}}function n2(n,e,t,i,r,s){const o=new dS,a=new e2,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,x,D,P,I){const G=P.fog,$=I.geometry,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,B=e.get(v.envMap||X,W),te=B&&B.mapping===pf?B.image.height:null,le=d[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&st("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const k=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,xe=k!==void 0?k.length:0;let de=0;$.morphAttributes.position!==void 0&&(de=1),$.morphAttributes.normal!==void 0&&(de=2),$.morphAttributes.color!==void 0&&(de=3);let ke,$e,je,re;if(le){const Be=xr[le];ke=Be.vertexShader,$e=Be.fragmentShader}else ke=v.vertexShader,$e=v.fragmentShader,a.update(v),je=a.getVertexShaderID(v),re=a.getFragmentShaderID(v);const H=n.getRenderTarget(),j=n.state.buffers.depth.getReversed(),ue=I.isInstancedMesh===!0,pe=I.isBatchedMesh===!0,Me=!!v.map,U=!!v.matcap,N=!!B,V=!!v.aoMap,J=!!v.lightMap,Z=!!v.bumpMap,F=!!v.normalMap,L=!!v.displacementMap,me=!!v.emissiveMap,fe=!!v.metalnessMap,se=!!v.roughnessMap,he=v.anisotropy>0,C=v.clearcoat>0,b=v.dispersion>0,O=v.iridescence>0,K=v.sheen>0,ne=v.transmission>0,Y=he&&!!v.anisotropyMap,Ee=C&&!!v.clearcoatMap,ge=C&&!!v.clearcoatNormalMap,ze=C&&!!v.clearcoatRoughnessMap,Ce=O&&!!v.iridescenceMap,_e=O&&!!v.iridescenceThicknessMap,ye=K&&!!v.sheenColorMap,Ae=K&&!!v.sheenRoughnessMap,Le=!!v.specularMap,Re=!!v.specularColorMap,nt=!!v.specularIntensityMap,z=ne&&!!v.transmissionMap,Te=ne&&!!v.thicknessMap,be=!!v.gradientMap,Ie=!!v.alphaMap,ve=v.alphaTest>0,ae=!!v.alphaHash,Ve=!!v.extensions;let Je=Cr;v.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Je=n.toneMapping);const yt={shaderID:le,shaderType:v.type,shaderName:v.name,vertexShader:ke,fragmentShader:$e,defines:v.defines,customVertexShaderID:je,customFragmentShaderID:re,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:pe,batchingColor:pe&&I._colorsTexture!==null,instancing:ue,instancingColor:ue&&I.instanceColor!==null,instancingMorph:ue&&I.morphTexture!==null,outputColorSpace:H===null?n.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Wa,alphaToCoverage:!!v.alphaToCoverage,map:Me,matcap:U,envMap:N,envMapMode:N&&B.mapping,envMapCubeUVHeight:te,aoMap:V,lightMap:J,bumpMap:Z,normalMap:F,displacementMap:L,emissiveMap:me,normalMapObjectSpace:F&&v.normalMapType===WT,normalMapTangentSpace:F&&v.normalMapType===GT,metalnessMap:fe,roughnessMap:se,anisotropy:he,anisotropyMap:Y,clearcoat:C,clearcoatMap:Ee,clearcoatNormalMap:ge,clearcoatRoughnessMap:ze,dispersion:b,iridescence:O,iridescenceMap:Ce,iridescenceThicknessMap:_e,sheen:K,sheenColorMap:ye,sheenRoughnessMap:Ae,specularMap:Le,specularColorMap:Re,specularIntensityMap:nt,transmission:ne,transmissionMap:z,thicknessMap:Te,gradientMap:be,opaque:v.transparent===!1&&v.blending===wa&&v.alphaToCoverage===!1,alphaMap:Ie,alphaTest:ve,alphaHash:ae,combine:v.combine,mapUv:Me&&m(v.map.channel),aoMapUv:V&&m(v.aoMap.channel),lightMapUv:J&&m(v.lightMap.channel),bumpMapUv:Z&&m(v.bumpMap.channel),normalMapUv:F&&m(v.normalMap.channel),displacementMapUv:L&&m(v.displacementMap.channel),emissiveMapUv:me&&m(v.emissiveMap.channel),metalnessMapUv:fe&&m(v.metalnessMap.channel),roughnessMapUv:se&&m(v.roughnessMap.channel),anisotropyMapUv:Y&&m(v.anisotropyMap.channel),clearcoatMapUv:Ee&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ge&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&m(v.sheenRoughnessMap.channel),specularMapUv:Le&&m(v.specularMap.channel),specularColorMapUv:Re&&m(v.specularColorMap.channel),specularIntensityMapUv:nt&&m(v.specularIntensityMap.channel),transmissionMapUv:z&&m(v.transmissionMap.channel),thicknessMapUv:Te&&m(v.thicknessMap.channel),alphaMapUv:Ie&&m(v.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(F||he),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!$.attributes.uv&&(Me||Ie),fog:!!G,useFog:v.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||$.attributes.normal===void 0&&F===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:j,skinning:I.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:de,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Je,decodeVideoTexture:Me&&v.map.isVideoTexture===!0&&xt.getTransfer(v.map.colorSpace)===It,decodeVideoTextureEmissive:me&&v.emissiveMap.isVideoTexture===!0&&xt.getTransfer(v.emissiveMap.colorSpace)===It,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Zr,flipSided:v.side===mi,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ve&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&v.extensions.multiDraw===!0||pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return yt.vertexUv1s=l.has(1),yt.vertexUv2s=l.has(2),yt.vertexUv3s=l.has(3),l.clear(),yt}function p(v){const x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)x.push(D),x.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(g(x,v),y(x,v),x.push(n.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function g(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function y(v,x){o.disableAll(),x.instancing&&o.enable(0),x.instancingColor&&o.enable(1),x.instancingMorph&&o.enable(2),x.matcap&&o.enable(3),x.envMap&&o.enable(4),x.normalMapObjectSpace&&o.enable(5),x.normalMapTangentSpace&&o.enable(6),x.clearcoat&&o.enable(7),x.iridescence&&o.enable(8),x.alphaTest&&o.enable(9),x.vertexColors&&o.enable(10),x.vertexAlphas&&o.enable(11),x.vertexUv1s&&o.enable(12),x.vertexUv2s&&o.enable(13),x.vertexUv3s&&o.enable(14),x.vertexTangents&&o.enable(15),x.anisotropy&&o.enable(16),x.alphaHash&&o.enable(17),x.batching&&o.enable(18),x.dispersion&&o.enable(19),x.batchingColor&&o.enable(20),x.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),v.push(o.mask)}function M(v){const x=d[v.type];let D;if(x){const P=xr[x];D=Cw.clone(P.uniforms)}else D=v.uniforms;return D}function S(v,x){let D=u.get(x);return D!==void 0?++D.usedTimes:(D=new JP(n,x,v,r),c.push(D),u.set(x,D)),D}function w(v){if(--v.usedTimes===0){const x=c.indexOf(v);c[x]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function T(v){a.remove(v)}function E(){a.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:M,acquireProgram:S,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:E}}function i2(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function r2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function W_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function X_(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,_,p,g){let y=n[e];return y===void 0?(y={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:g},n[e]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=m,y.materialVariant=o(f),y.groupOrder=_,y.renderOrder=f.renderOrder,y.z=p,y.group=g),e++,y}function l(f,d,m,_,p,g){const y=a(f,d,m,_,p,g);m.transmission>0?i.push(y):m.transparent===!0?r.push(y):t.push(y)}function c(f,d,m,_,p,g){const y=a(f,d,m,_,p,g);m.transmission>0?i.unshift(y):m.transparent===!0?r.unshift(y):t.unshift(y)}function u(f,d){t.length>1&&t.sort(f||r2),i.length>1&&i.sort(d||W_),r.length>1&&r.sort(d||W_)}function h(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function s2(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new X_,n.set(i,[o])):r>=s.length?(o=new X_,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function o2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new oe,color:new Nt};break;case"SpotLight":t={position:new oe,direction:new oe,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new oe,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new oe,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":t={color:new Nt,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return n[e.id]=t,t}}}function a2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let l2=0;function c2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function u2(n){const e=new o2,t=a2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new oe);const r=new oe,s=new hn,o=new hn;function a(c){let u=0,h=0,f=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let d=0,m=0,_=0,p=0,g=0,y=0,M=0,S=0,w=0,T=0,E=0;c.sort(c2);for(let x=0,D=c.length;x<D;x++){const P=c[x],I=P.color,G=P.intensity,$=P.distance;let X=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ga?X=P.shadow.map.texture:X=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=I.r*G,h+=I.g*G,f+=I.b*G;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],G);E++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const B=P.shadow,te=t.get(P);te.shadowIntensity=B.intensity,te.shadowBias=B.bias,te.shadowNormalBias=B.normalBias,te.shadowRadius=B.radius,te.shadowMapSize=B.mapSize,i.directionalShadow[d]=te,i.directionalShadowMap[d]=X,i.directionalShadowMatrix[d]=P.shadow.matrix,y++}i.directional[d]=W,d++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(I).multiplyScalar(G),W.distance=$,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[_]=W;const B=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,B.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[_]=B.matrix,P.castShadow){const te=t.get(P);te.shadowIntensity=B.intensity,te.shadowBias=B.bias,te.shadowNormalBias=B.normalBias,te.shadowRadius=B.radius,te.shadowMapSize=B.mapSize,i.spotShadow[_]=te,i.spotShadowMap[_]=X,S++}_++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(I).multiplyScalar(G),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[p]=W,p++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const B=P.shadow,te=t.get(P);te.shadowIntensity=B.intensity,te.shadowBias=B.bias,te.shadowNormalBias=B.normalBias,te.shadowRadius=B.radius,te.shadowMapSize=B.mapSize,te.shadowCameraNear=B.camera.near,te.shadowCameraFar=B.camera.far,i.pointShadow[m]=te,i.pointShadowMap[m]=X,i.pointShadowMatrix[m]=P.shadow.matrix,M++}i.point[m]=W,m++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(G),W.groundColor.copy(P.groundColor).multiplyScalar(G),i.hemi[g]=W,g++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Oe.LTC_FLOAT_1,i.rectAreaLTC2=Oe.LTC_FLOAT_2):(i.rectAreaLTC1=Oe.LTC_HALF_1,i.rectAreaLTC2=Oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const v=i.hash;(v.directionalLength!==d||v.pointLength!==m||v.spotLength!==_||v.rectAreaLength!==p||v.hemiLength!==g||v.numDirectionalShadows!==y||v.numPointShadows!==M||v.numSpotShadows!==S||v.numSpotMaps!==w||v.numLightProbes!==E)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=p,i.point.length=m,i.hemi.length=g,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+w-T,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=E,v.directionalLength=d,v.pointLength=m,v.spotLength=_,v.rectAreaLength=p,v.hemiLength=g,v.numDirectionalShadows=y,v.numPointShadows=M,v.numSpotShadows=S,v.numSpotMaps=w,v.numLightProbes=E,i.version=l2++)}function l(c,u){let h=0,f=0,d=0,m=0,_=0;const p=u.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){const M=c[g];if(M.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),h++}else if(M.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),d++}else if(M.isRectAreaLight){const S=i.rectArea[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(M.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function q_(n){const e=new u2(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function f2(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new q_(n),e.set(r,[a])):s>=o.length?(a=new q_(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const h2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,p2=[new oe(1,0,0),new oe(-1,0,0),new oe(0,1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1)],m2=[new oe(0,-1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1),new oe(0,-1,0),new oe(0,-1,0)],$_=new hn,ul=new oe,wh=new oe;function g2(n,e,t){let i=new vS;const r=new Pt,s=new Pt,o=new an,a=new Lw,l=new Iw,c={},u=t.maxTextureSize,h={[Xs]:mi,[mi]:Xs,[Zr]:Zr},f=new lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:h2,fragmentShader:d2}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new ds;m.setAttribute("position",new Pr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Nr(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_u;let g=this.type;this.render=function(T,E,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===ST&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=_u);const x=n.getRenderTarget(),D=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),I=n.state;I.setBlending(ts),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const G=g!==this.type;G&&E.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(X=>X.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,X=T.length;$<X;$++){const W=T[$],B=W.shadow;if(B===void 0){st("WebGLShadowMap:",W,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const te=B.getFrameExtents();r.multiply(te),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/te.x),r.x=s.x*te.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/te.y),r.y=s.y*te.y,B.mapSize.y=s.y));const le=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=le,B.map===null||G===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===xl){if(W.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Rr(r.x,r.y,{format:Ga,type:cs,minFilter:Wn,magFilter:Wn,generateMipmaps:!1}),B.map.texture.name=W.name+".shadowMap",B.map.depthTexture=new ac(r.x,r.y,Er),B.map.depthTexture.name=W.name+".shadowMapDepth",B.map.depthTexture.format=us,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Dn,B.map.depthTexture.magFilter=Dn}else W.isPointLight?(B.map=new ES(r.x),B.map.depthTexture=new ww(r.x,Ir)):(B.map=new Rr(r.x,r.y),B.map.depthTexture=new ac(r.x,r.y,Ir)),B.map.depthTexture.name=W.name+".shadowMap",B.map.depthTexture.format=us,this.type===_u?(B.map.depthTexture.compareFunction=le?am:om,B.map.depthTexture.minFilter=Wn,B.map.depthTexture.magFilter=Wn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Dn,B.map.depthTexture.magFilter=Dn);B.camera.updateProjectionMatrix()}const k=B.map.isWebGLCubeRenderTarget?6:1;for(let xe=0;xe<k;xe++){if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,xe),n.clear();else{xe===0&&(n.setRenderTarget(B.map),n.clear());const de=B.getViewport(xe);o.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),I.viewport(o)}if(W.isPointLight){const de=B.camera,ke=B.matrix,$e=W.distance||de.far;$e!==de.far&&(de.far=$e,de.updateProjectionMatrix()),ul.setFromMatrixPosition(W.matrixWorld),de.position.copy(ul),wh.copy(de.position),wh.add(p2[xe]),de.up.copy(m2[xe]),de.lookAt(wh),de.updateMatrixWorld(),ke.makeTranslation(-ul.x,-ul.y,-ul.z),$_.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),B._frustum.setFromProjectionMatrix($_,de.coordinateSystem,de.reversedDepth)}else B.updateMatrices(W);i=B.getFrustum(),S(E,v,B.camera,W,this.type)}B.isPointLightShadow!==!0&&this.type===xl&&y(B,v),B.needsUpdate=!1}g=this.type,p.needsUpdate=!1,n.setRenderTarget(x,D,P)};function y(T,E){const v=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Rr(r.x,r.y,{format:Ga,type:cs})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(E,null,v,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(E,null,v,d,_,null)}function M(T,E,v,x){let D=null;const P=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)D=P;else if(D=v.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const I=D.uuid,G=E.uuid;let $=c[I];$===void 0&&($={},c[I]=$);let X=$[G];X===void 0&&(X=D.clone(),$[G]=X,E.addEventListener("dispose",w)),D=X}if(D.visible=E.visible,D.wireframe=E.wireframe,x===xl?D.side=E.shadowSide!==null?E.shadowSide:E.side:D.side=E.shadowSide!==null?E.shadowSide:h[E.side],D.alphaMap=E.alphaMap,D.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,D.map=E.map,D.clipShadows=E.clipShadows,D.clippingPlanes=E.clippingPlanes,D.clipIntersection=E.clipIntersection,D.displacementMap=E.displacementMap,D.displacementScale=E.displacementScale,D.displacementBias=E.displacementBias,D.wireframeLinewidth=E.wireframeLinewidth,D.linewidth=E.linewidth,v.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const I=n.properties.get(D);I.light=v}return D}function S(T,E,v,x,D){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===xl)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const G=e.update(T),$=T.material;if(Array.isArray($)){const X=G.groups;for(let W=0,B=X.length;W<B;W++){const te=X[W],le=$[te.materialIndex];if(le&&le.visible){const k=M(T,le,x,D);T.onBeforeShadow(n,T,E,v,G,k,te),n.renderBufferDirect(v,null,G,k,T,te),T.onAfterShadow(n,T,E,v,G,k,te)}}}else if($.visible){const X=M(T,$,x,D);T.onBeforeShadow(n,T,E,v,G,X,null),n.renderBufferDirect(v,null,G,X,T,null),T.onAfterShadow(n,T,E,v,G,X,null)}}const I=T.children;for(let G=0,$=I.length;G<$;G++)S(I[G],E,v,x,D)}function w(T){T.target.removeEventListener("dispose",w);for(const v in c){const x=c[v],D=T.target.uuid;D in x&&(x[D].dispose(),delete x[D])}}}function _2(n,e){function t(){let z=!1;const Te=new an;let be=null;const Ie=new an(0,0,0,0);return{setMask:function(ve){be!==ve&&!z&&(n.colorMask(ve,ve,ve,ve),be=ve)},setLocked:function(ve){z=ve},setClear:function(ve,ae,Ve,Je,yt){yt===!0&&(ve*=Je,ae*=Je,Ve*=Je),Te.set(ve,ae,Ve,Je),Ie.equals(Te)===!1&&(n.clearColor(ve,ae,Ve,Je),Ie.copy(Te))},reset:function(){z=!1,be=null,Ie.set(-1,0,0,0)}}}function i(){let z=!1,Te=!1,be=null,Ie=null,ve=null;return{setReversed:function(ae){if(Te!==ae){const Ve=e.get("EXT_clip_control");ae?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),Te=ae;const Je=ve;ve=null,this.setClear(Je)}},getReversed:function(){return Te},setTest:function(ae){ae?H(n.DEPTH_TEST):j(n.DEPTH_TEST)},setMask:function(ae){be!==ae&&!z&&(n.depthMask(ae),be=ae)},setFunc:function(ae){if(Te&&(ae=ew[ae]),Ie!==ae){switch(ae){case md:n.depthFunc(n.NEVER);break;case gd:n.depthFunc(n.ALWAYS);break;case _d:n.depthFunc(n.LESS);break;case Va:n.depthFunc(n.LEQUAL);break;case vd:n.depthFunc(n.EQUAL);break;case xd:n.depthFunc(n.GEQUAL);break;case Sd:n.depthFunc(n.GREATER);break;case yd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=ae}},setLocked:function(ae){z=ae},setClear:function(ae){ve!==ae&&(ve=ae,Te&&(ae=1-ae),n.clearDepth(ae))},reset:function(){z=!1,be=null,Ie=null,ve=null,Te=!1}}}function r(){let z=!1,Te=null,be=null,Ie=null,ve=null,ae=null,Ve=null,Je=null,yt=null;return{setTest:function(Be){z||(Be?H(n.STENCIL_TEST):j(n.STENCIL_TEST))},setMask:function(Be){Te!==Be&&!z&&(n.stencilMask(Be),Te=Be)},setFunc:function(Be,Ye,ct){(be!==Be||Ie!==Ye||ve!==ct)&&(n.stencilFunc(Be,Ye,ct),be=Be,Ie=Ye,ve=ct)},setOp:function(Be,Ye,ct){(ae!==Be||Ve!==Ye||Je!==ct)&&(n.stencilOp(Be,Ye,ct),ae=Be,Ve=Ye,Je=ct)},setLocked:function(Be){z=Be},setClear:function(Be){yt!==Be&&(n.clearStencil(Be),yt=Be)},reset:function(){z=!1,Te=null,be=null,Ie=null,ve=null,ae=null,Ve=null,Je=null,yt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],m=null,_=!1,p=null,g=null,y=null,M=null,S=null,w=null,T=null,E=new Nt(0,0,0),v=0,x=!1,D=null,P=null,I=null,G=null,$=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,B=0;const te=n.getParameter(n.VERSION);te.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(te)[1]),W=B>=1):te.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),W=B>=2);let le=null,k={};const xe=n.getParameter(n.SCISSOR_BOX),de=n.getParameter(n.VIEWPORT),ke=new an().fromArray(xe),$e=new an().fromArray(de);function je(z,Te,be,Ie){const ve=new Uint8Array(4),ae=n.createTexture();n.bindTexture(z,ae),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<be;Ve++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(Te+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return ae}const re={};re[n.TEXTURE_2D]=je(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=je(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=je(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=je(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),H(n.DEPTH_TEST),o.setFunc(Va),Z(!1),F(Qg),H(n.CULL_FACE),V(ts);function H(z){u[z]!==!0&&(n.enable(z),u[z]=!0)}function j(z){u[z]!==!1&&(n.disable(z),u[z]=!1)}function ue(z,Te){return h[z]!==Te?(n.bindFramebuffer(z,Te),h[z]=Te,z===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Te),z===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function pe(z,Te){let be=d,Ie=!1;if(z){be=f.get(Te),be===void 0&&(be=[],f.set(Te,be));const ve=z.textures;if(be.length!==ve.length||be[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,Ve=ve.length;ae<Ve;ae++)be[ae]=n.COLOR_ATTACHMENT0+ae;be.length=ve.length,Ie=!0}}else be[0]!==n.BACK&&(be[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(be)}function Me(z){return m!==z?(n.useProgram(z),m=z,!0):!1}const U={[mo]:n.FUNC_ADD,[bT]:n.FUNC_SUBTRACT,[MT]:n.FUNC_REVERSE_SUBTRACT};U[ET]=n.MIN,U[TT]=n.MAX;const N={[wT]:n.ZERO,[AT]:n.ONE,[CT]:n.SRC_COLOR,[dd]:n.SRC_ALPHA,[NT]:n.SRC_ALPHA_SATURATE,[LT]:n.DST_COLOR,[PT]:n.DST_ALPHA,[RT]:n.ONE_MINUS_SRC_COLOR,[pd]:n.ONE_MINUS_SRC_ALPHA,[IT]:n.ONE_MINUS_DST_COLOR,[DT]:n.ONE_MINUS_DST_ALPHA,[UT]:n.CONSTANT_COLOR,[FT]:n.ONE_MINUS_CONSTANT_COLOR,[OT]:n.CONSTANT_ALPHA,[kT]:n.ONE_MINUS_CONSTANT_ALPHA};function V(z,Te,be,Ie,ve,ae,Ve,Je,yt,Be){if(z===ts){_===!0&&(j(n.BLEND),_=!1);return}if(_===!1&&(H(n.BLEND),_=!0),z!==yT){if(z!==p||Be!==x){if((g!==mo||S!==mo)&&(n.blendEquation(n.FUNC_ADD),g=mo,S=mo),Be)switch(z){case wa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case e_:n.blendFunc(n.ONE,n.ONE);break;case t_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case n_:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Mt("WebGLState: Invalid blending: ",z);break}else switch(z){case wa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case e_:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case t_:Mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case n_:Mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Mt("WebGLState: Invalid blending: ",z);break}y=null,M=null,w=null,T=null,E.set(0,0,0),v=0,p=z,x=Be}return}ve=ve||Te,ae=ae||be,Ve=Ve||Ie,(Te!==g||ve!==S)&&(n.blendEquationSeparate(U[Te],U[ve]),g=Te,S=ve),(be!==y||Ie!==M||ae!==w||Ve!==T)&&(n.blendFuncSeparate(N[be],N[Ie],N[ae],N[Ve]),y=be,M=Ie,w=ae,T=Ve),(Je.equals(E)===!1||yt!==v)&&(n.blendColor(Je.r,Je.g,Je.b,yt),E.copy(Je),v=yt),p=z,x=!1}function J(z,Te){z.side===Zr?j(n.CULL_FACE):H(n.CULL_FACE);let be=z.side===mi;Te&&(be=!be),Z(be),z.blending===wa&&z.transparent===!1?V(ts):V(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);const Ie=z.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),me(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?H(n.SAMPLE_ALPHA_TO_COVERAGE):j(n.SAMPLE_ALPHA_TO_COVERAGE)}function Z(z){D!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),D=z)}function F(z){z!==vT?(H(n.CULL_FACE),z!==P&&(z===Qg?n.cullFace(n.BACK):z===xT?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):j(n.CULL_FACE),P=z}function L(z){z!==I&&(W&&n.lineWidth(z),I=z)}function me(z,Te,be){z?(H(n.POLYGON_OFFSET_FILL),(G!==Te||$!==be)&&(G=Te,$=be,o.getReversed()&&(Te=-Te),n.polygonOffset(Te,be))):j(n.POLYGON_OFFSET_FILL)}function fe(z){z?H(n.SCISSOR_TEST):j(n.SCISSOR_TEST)}function se(z){z===void 0&&(z=n.TEXTURE0+X-1),le!==z&&(n.activeTexture(z),le=z)}function he(z,Te,be){be===void 0&&(le===null?be=n.TEXTURE0+X-1:be=le);let Ie=k[be];Ie===void 0&&(Ie={type:void 0,texture:void 0},k[be]=Ie),(Ie.type!==z||Ie.texture!==Te)&&(le!==be&&(n.activeTexture(be),le=be),n.bindTexture(z,Te||re[z]),Ie.type=z,Ie.texture=Te)}function C(){const z=k[le];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function b(){try{n.compressedTexImage2D(...arguments)}catch(z){Mt("WebGLState:",z)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(z){Mt("WebGLState:",z)}}function K(){try{n.texSubImage2D(...arguments)}catch(z){Mt("WebGLState:",z)}}function ne(){try{n.texSubImage3D(...arguments)}catch(z){Mt("WebGLState:",z)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(z){Mt("WebGLState:",z)}}function Ee(){try{n.compressedTexSubImage3D(...arguments)}catch(z){Mt("WebGLState:",z)}}function ge(){try{n.texStorage2D(...arguments)}catch(z){Mt("WebGLState:",z)}}function ze(){try{n.texStorage3D(...arguments)}catch(z){Mt("WebGLState:",z)}}function Ce(){try{n.texImage2D(...arguments)}catch(z){Mt("WebGLState:",z)}}function _e(){try{n.texImage3D(...arguments)}catch(z){Mt("WebGLState:",z)}}function ye(z){ke.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),ke.copy(z))}function Ae(z){$e.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),$e.copy(z))}function Le(z,Te){let be=c.get(Te);be===void 0&&(be=new WeakMap,c.set(Te,be));let Ie=be.get(z);Ie===void 0&&(Ie=n.getUniformBlockIndex(Te,z.name),be.set(z,Ie))}function Re(z,Te){const Ie=c.get(Te).get(z);l.get(Te)!==Ie&&(n.uniformBlockBinding(Te,Ie,z.__bindingPointIndex),l.set(Te,Ie))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},le=null,k={},h={},f=new WeakMap,d=[],m=null,_=!1,p=null,g=null,y=null,M=null,S=null,w=null,T=null,E=new Nt(0,0,0),v=0,x=!1,D=null,P=null,I=null,G=null,$=null,ke.set(0,0,n.canvas.width,n.canvas.height),$e.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:H,disable:j,bindFramebuffer:ue,drawBuffers:pe,useProgram:Me,setBlending:V,setMaterial:J,setFlipSided:Z,setCullFace:F,setLineWidth:L,setPolygonOffset:me,setScissorTest:fe,activeTexture:se,bindTexture:he,unbindTexture:C,compressedTexImage2D:b,compressedTexImage3D:O,texImage2D:Ce,texImage3D:_e,updateUBOMapping:Le,uniformBlockBinding:Re,texStorage2D:ge,texStorage3D:ze,texSubImage2D:K,texSubImage3D:ne,compressedTexSubImage2D:Y,compressedTexSubImage3D:Ee,scissor:ye,viewport:Ae,reset:nt}}function v2(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,b){return d?new OffscreenCanvas(C,b):qu("canvas")}function _(C,b,O){let K=1;const ne=he(C);if((ne.width>O||ne.height>O)&&(K=O/Math.max(ne.width,ne.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor(K*ne.width),Ee=Math.floor(K*ne.height);h===void 0&&(h=m(Y,Ee));const ge=b?m(Y,Ee):h;return ge.width=Y,ge.height=Ee,ge.getContext("2d").drawImage(C,0,0,Y,Ee),st("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Y+"x"+Ee+")."),ge}else return"data"in C&&st("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),C;return C}function p(C){return C.generateMipmaps}function g(C){n.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(C,b,O,K,ne=!1){if(C!==null){if(n[C]!==void 0)return n[C];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=b;if(b===n.RED&&(O===n.FLOAT&&(Y=n.R32F),O===n.HALF_FLOAT&&(Y=n.R16F),O===n.UNSIGNED_BYTE&&(Y=n.R8)),b===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.R8UI),O===n.UNSIGNED_SHORT&&(Y=n.R16UI),O===n.UNSIGNED_INT&&(Y=n.R32UI),O===n.BYTE&&(Y=n.R8I),O===n.SHORT&&(Y=n.R16I),O===n.INT&&(Y=n.R32I)),b===n.RG&&(O===n.FLOAT&&(Y=n.RG32F),O===n.HALF_FLOAT&&(Y=n.RG16F),O===n.UNSIGNED_BYTE&&(Y=n.RG8)),b===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RG8UI),O===n.UNSIGNED_SHORT&&(Y=n.RG16UI),O===n.UNSIGNED_INT&&(Y=n.RG32UI),O===n.BYTE&&(Y=n.RG8I),O===n.SHORT&&(Y=n.RG16I),O===n.INT&&(Y=n.RG32I)),b===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),O===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),O===n.UNSIGNED_INT&&(Y=n.RGB32UI),O===n.BYTE&&(Y=n.RGB8I),O===n.SHORT&&(Y=n.RGB16I),O===n.INT&&(Y=n.RGB32I)),b===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),O===n.UNSIGNED_INT&&(Y=n.RGBA32UI),O===n.BYTE&&(Y=n.RGBA8I),O===n.SHORT&&(Y=n.RGBA16I),O===n.INT&&(Y=n.RGBA32I)),b===n.RGB&&(O===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),b===n.RGBA){const Ee=ne?Wu:xt.getTransfer(K);O===n.FLOAT&&(Y=n.RGBA32F),O===n.HALF_FLOAT&&(Y=n.RGBA16F),O===n.UNSIGNED_BYTE&&(Y=Ee===It?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function S(C,b){let O;return C?b===null||b===Ir||b===oc?O=n.DEPTH24_STENCIL8:b===Er?O=n.DEPTH32F_STENCIL8:b===sc&&(O=n.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ir||b===oc?O=n.DEPTH_COMPONENT24:b===Er?O=n.DEPTH_COMPONENT32F:b===sc&&(O=n.DEPTH_COMPONENT16),O}function w(C,b){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Dn&&C.minFilter!==Wn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function T(C){const b=C.target;b.removeEventListener("dispose",T),v(b),b.isVideoTexture&&u.delete(b)}function E(C){const b=C.target;b.removeEventListener("dispose",E),D(b)}function v(C){const b=i.get(C);if(b.__webglInit===void 0)return;const O=C.source,K=f.get(O);if(K){const ne=K[b.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&x(C),Object.keys(K).length===0&&f.delete(O)}i.remove(C)}function x(C){const b=i.get(C);n.deleteTexture(b.__webglTexture);const O=C.source,K=f.get(O);delete K[b.__cacheKey],o.memory.textures--}function D(C){const b=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let ne=0;ne<b.__webglFramebuffer[K].length;ne++)n.deleteFramebuffer(b.__webglFramebuffer[K][ne]);else n.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)n.deleteFramebuffer(b.__webglFramebuffer[K]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const O=C.textures;for(let K=0,ne=O.length;K<ne;K++){const Y=i.get(O[K]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(O[K])}i.remove(C)}let P=0;function I(){P=0}function G(){const C=P;return C>=r.maxTextures&&st("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),P+=1,C}function $(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function X(C,b){const O=i.get(C);if(C.isVideoTexture&&fe(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){const K=C.image;if(K===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{re(O,C,b);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+b)}function W(C,b){const O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){re(O,C,b);return}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+b)}function B(C,b){const O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){re(O,C,b);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+b)}function te(C,b){const O=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&O.__version!==C.version){H(O,C,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+b)}const le={[bd]:n.REPEAT,[Qr]:n.CLAMP_TO_EDGE,[Md]:n.MIRRORED_REPEAT},k={[Dn]:n.NEAREST,[VT]:n.NEAREST_MIPMAP_NEAREST,[Nc]:n.NEAREST_MIPMAP_LINEAR,[Wn]:n.LINEAR,[jf]:n.LINEAR_MIPMAP_NEAREST,[So]:n.LINEAR_MIPMAP_LINEAR},xe={[XT]:n.NEVER,[jT]:n.ALWAYS,[qT]:n.LESS,[om]:n.LEQUAL,[$T]:n.EQUAL,[am]:n.GEQUAL,[YT]:n.GREATER,[KT]:n.NOTEQUAL};function de(C,b){if(b.type===Er&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Wn||b.magFilter===jf||b.magFilter===Nc||b.magFilter===So||b.minFilter===Wn||b.minFilter===jf||b.minFilter===Nc||b.minFilter===So)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,le[b.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,le[b.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,le[b.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,k[b.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,k[b.minFilter]),b.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,xe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Dn||b.minFilter!==Nc&&b.minFilter!==So||b.type===Er&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function ke(C,b){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",T));const K=b.source;let ne=f.get(K);ne===void 0&&(ne={},f.set(K,ne));const Y=$(b);if(Y!==C.__cacheKey){ne[Y]===void 0&&(ne[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ne[Y].usedTimes++;const Ee=ne[C.__cacheKey];Ee!==void 0&&(ne[C.__cacheKey].usedTimes--,Ee.usedTimes===0&&x(b)),C.__cacheKey=Y,C.__webglTexture=ne[Y].texture}return O}function $e(C,b,O){return Math.floor(Math.floor(C/O)/b)}function je(C,b,O,K){const Y=C.updateRanges;if(Y.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,O,K,b.data);else{Y.sort((_e,ye)=>_e.start-ye.start);let Ee=0;for(let _e=1;_e<Y.length;_e++){const ye=Y[Ee],Ae=Y[_e],Le=ye.start+ye.count,Re=$e(Ae.start,b.width,4),nt=$e(ye.start,b.width,4);Ae.start<=Le+1&&Re===nt&&$e(Ae.start+Ae.count-1,b.width,4)===Re?ye.count=Math.max(ye.count,Ae.start+Ae.count-ye.start):(++Ee,Y[Ee]=Ae)}Y.length=Ee+1;const ge=n.getParameter(n.UNPACK_ROW_LENGTH),ze=n.getParameter(n.UNPACK_SKIP_PIXELS),Ce=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let _e=0,ye=Y.length;_e<ye;_e++){const Ae=Y[_e],Le=Math.floor(Ae.start/4),Re=Math.ceil(Ae.count/4),nt=Le%b.width,z=Math.floor(Le/b.width),Te=Re,be=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,nt),n.pixelStorei(n.UNPACK_SKIP_ROWS,z),t.texSubImage2D(n.TEXTURE_2D,0,nt,z,Te,be,O,K,b.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ge),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ce)}}function re(C,b,O){let K=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=n.TEXTURE_3D);const ne=ke(C,b),Y=b.source;t.bindTexture(K,C.__webglTexture,n.TEXTURE0+O);const Ee=i.get(Y);if(Y.version!==Ee.__version||ne===!0){t.activeTexture(n.TEXTURE0+O);const ge=xt.getPrimaries(xt.workingColorSpace),ze=b.colorSpace===Rs?null:xt.getPrimaries(b.colorSpace),Ce=b.colorSpace===Rs||ge===ze?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let _e=_(b.image,!1,r.maxTextureSize);_e=se(b,_e);const ye=s.convert(b.format,b.colorSpace),Ae=s.convert(b.type);let Le=M(b.internalFormat,ye,Ae,b.colorSpace,b.isVideoTexture);de(K,b);let Re;const nt=b.mipmaps,z=b.isVideoTexture!==!0,Te=Ee.__version===void 0||ne===!0,be=Y.dataReady,Ie=w(b,_e);if(b.isDepthTexture)Le=S(b.format===yo,b.type),Te&&(z?t.texStorage2D(n.TEXTURE_2D,1,Le,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,Le,_e.width,_e.height,0,ye,Ae,null));else if(b.isDataTexture)if(nt.length>0){z&&Te&&t.texStorage2D(n.TEXTURE_2D,Ie,Le,nt[0].width,nt[0].height);for(let ve=0,ae=nt.length;ve<ae;ve++)Re=nt[ve],z?be&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Re.width,Re.height,ye,Ae,Re.data):t.texImage2D(n.TEXTURE_2D,ve,Le,Re.width,Re.height,0,ye,Ae,Re.data);b.generateMipmaps=!1}else z?(Te&&t.texStorage2D(n.TEXTURE_2D,Ie,Le,_e.width,_e.height),be&&je(b,_e,ye,Ae)):t.texImage2D(n.TEXTURE_2D,0,Le,_e.width,_e.height,0,ye,Ae,_e.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){z&&Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Le,nt[0].width,nt[0].height,_e.depth);for(let ve=0,ae=nt.length;ve<ae;ve++)if(Re=nt[ve],b.format!==nr)if(ye!==null)if(z){if(be)if(b.layerUpdates.size>0){const Ve=E_(Re.width,Re.height,b.format,b.type);for(const Je of b.layerUpdates){const yt=Re.data.subarray(Je*Ve/Re.data.BYTES_PER_ELEMENT,(Je+1)*Ve/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,Je,Re.width,Re.height,1,ye,yt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Re.width,Re.height,_e.depth,ye,Re.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ve,Le,Re.width,Re.height,_e.depth,0,Re.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?be&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Re.width,Re.height,_e.depth,ye,Ae,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ve,Le,Re.width,Re.height,_e.depth,0,ye,Ae,Re.data)}else{z&&Te&&t.texStorage2D(n.TEXTURE_2D,Ie,Le,nt[0].width,nt[0].height);for(let ve=0,ae=nt.length;ve<ae;ve++)Re=nt[ve],b.format!==nr?ye!==null?z?be&&t.compressedTexSubImage2D(n.TEXTURE_2D,ve,0,0,Re.width,Re.height,ye,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,ve,Le,Re.width,Re.height,0,Re.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?be&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Re.width,Re.height,ye,Ae,Re.data):t.texImage2D(n.TEXTURE_2D,ve,Le,Re.width,Re.height,0,ye,Ae,Re.data)}else if(b.isDataArrayTexture)if(z){if(Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Le,_e.width,_e.height,_e.depth),be)if(b.layerUpdates.size>0){const ve=E_(_e.width,_e.height,b.format,b.type);for(const ae of b.layerUpdates){const Ve=_e.data.subarray(ae*ve/_e.data.BYTES_PER_ELEMENT,(ae+1)*ve/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ae,_e.width,_e.height,1,ye,Ae,Ve)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,ye,Ae,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,_e.width,_e.height,_e.depth,0,ye,Ae,_e.data);else if(b.isData3DTexture)z?(Te&&t.texStorage3D(n.TEXTURE_3D,Ie,Le,_e.width,_e.height,_e.depth),be&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,ye,Ae,_e.data)):t.texImage3D(n.TEXTURE_3D,0,Le,_e.width,_e.height,_e.depth,0,ye,Ae,_e.data);else if(b.isFramebufferTexture){if(Te)if(z)t.texStorage2D(n.TEXTURE_2D,Ie,Le,_e.width,_e.height);else{let ve=_e.width,ae=_e.height;for(let Ve=0;Ve<Ie;Ve++)t.texImage2D(n.TEXTURE_2D,Ve,Le,ve,ae,0,ye,Ae,null),ve>>=1,ae>>=1}}else if(nt.length>0){if(z&&Te){const ve=he(nt[0]);t.texStorage2D(n.TEXTURE_2D,Ie,Le,ve.width,ve.height)}for(let ve=0,ae=nt.length;ve<ae;ve++)Re=nt[ve],z?be&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,ye,Ae,Re):t.texImage2D(n.TEXTURE_2D,ve,Le,ye,Ae,Re);b.generateMipmaps=!1}else if(z){if(Te){const ve=he(_e);t.texStorage2D(n.TEXTURE_2D,Ie,Le,ve.width,ve.height)}be&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Ae,_e)}else t.texImage2D(n.TEXTURE_2D,0,Le,ye,Ae,_e);p(b)&&g(K),Ee.__version=Y.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function H(C,b,O){if(b.image.length!==6)return;const K=ke(C,b),ne=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+O);const Y=i.get(ne);if(ne.version!==Y.__version||K===!0){t.activeTexture(n.TEXTURE0+O);const Ee=xt.getPrimaries(xt.workingColorSpace),ge=b.colorSpace===Rs?null:xt.getPrimaries(b.colorSpace),ze=b.colorSpace===Rs||Ee===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const Ce=b.isCompressedTexture||b.image[0].isCompressedTexture,_e=b.image[0]&&b.image[0].isDataTexture,ye=[];for(let ae=0;ae<6;ae++)!Ce&&!_e?ye[ae]=_(b.image[ae],!0,r.maxCubemapSize):ye[ae]=_e?b.image[ae].image:b.image[ae],ye[ae]=se(b,ye[ae]);const Ae=ye[0],Le=s.convert(b.format,b.colorSpace),Re=s.convert(b.type),nt=M(b.internalFormat,Le,Re,b.colorSpace),z=b.isVideoTexture!==!0,Te=Y.__version===void 0||K===!0,be=ne.dataReady;let Ie=w(b,Ae);de(n.TEXTURE_CUBE_MAP,b);let ve;if(Ce){z&&Te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,nt,Ae.width,Ae.height);for(let ae=0;ae<6;ae++){ve=ye[ae].mipmaps;for(let Ve=0;Ve<ve.length;Ve++){const Je=ve[Ve];b.format!==nr?Le!==null?z?be&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve,0,0,Je.width,Je.height,Le,Je.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve,nt,Je.width,Je.height,0,Je.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve,0,0,Je.width,Je.height,Le,Re,Je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve,nt,Je.width,Je.height,0,Le,Re,Je.data)}}}else{if(ve=b.mipmaps,z&&Te){ve.length>0&&Ie++;const ae=he(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,nt,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(_e){z?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ye[ae].width,ye[ae].height,Le,Re,ye[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,nt,ye[ae].width,ye[ae].height,0,Le,Re,ye[ae].data);for(let Ve=0;Ve<ve.length;Ve++){const yt=ve[Ve].image[ae].image;z?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve+1,0,0,yt.width,yt.height,Le,Re,yt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve+1,nt,yt.width,yt.height,0,Le,Re,yt.data)}}else{z?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Le,Re,ye[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,nt,Le,Re,ye[ae]);for(let Ve=0;Ve<ve.length;Ve++){const Je=ve[Ve];z?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve+1,0,0,Le,Re,Je.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve+1,nt,Le,Re,Je.image[ae])}}}p(b)&&g(n.TEXTURE_CUBE_MAP),Y.__version=ne.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function j(C,b,O,K,ne,Y){const Ee=s.convert(O.format,O.colorSpace),ge=s.convert(O.type),ze=M(O.internalFormat,Ee,ge,O.colorSpace),Ce=i.get(b),_e=i.get(O);if(_e.__renderTarget=b,!Ce.__hasExternalTextures){const ye=Math.max(1,b.width>>Y),Ae=Math.max(1,b.height>>Y);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,Y,ze,ye,Ae,b.depth,0,Ee,ge,null):t.texImage2D(ne,Y,ze,ye,Ae,0,Ee,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),me(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,ne,_e.__webglTexture,0,L(b)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,ne,_e.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(C,b,O){if(n.bindRenderbuffer(n.RENDERBUFFER,C),b.depthBuffer){const K=b.depthTexture,ne=K&&K.isDepthTexture?K.type:null,Y=S(b.stencilBuffer,ne),Ee=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;me(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,L(b),Y,b.width,b.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,L(b),Y,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Y,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,C)}else{const K=b.textures;for(let ne=0;ne<K.length;ne++){const Y=K[ne],Ee=s.convert(Y.format,Y.colorSpace),ge=s.convert(Y.type),ze=M(Y.internalFormat,Ee,ge,Y.colorSpace);me(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,L(b),ze,b.width,b.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,L(b),ze,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ze,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pe(C,b,O){const K=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(b.depthTexture);if(ne.__renderTarget=b,(!ne.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),K){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,b.depthTexture.addEventListener("dispose",T)),ne.__webglTexture===void 0){ne.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),de(n.TEXTURE_CUBE_MAP,b.depthTexture);const Ce=s.convert(b.depthTexture.format),_e=s.convert(b.depthTexture.type);let ye;b.depthTexture.format===us?ye=n.DEPTH_COMPONENT24:b.depthTexture.format===yo&&(ye=n.DEPTH24_STENCIL8);for(let Ae=0;Ae<6;Ae++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ye,b.width,b.height,0,Ce,_e,null)}}else X(b.depthTexture,0);const Y=ne.__webglTexture,Ee=L(b),ge=K?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,ze=b.depthTexture.format===yo?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===us)me(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ze,ge,Y,0,Ee):n.framebufferTexture2D(n.FRAMEBUFFER,ze,ge,Y,0);else if(b.depthTexture.format===yo)me(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ze,ge,Y,0,Ee):n.framebufferTexture2D(n.FRAMEBUFFER,ze,ge,Y,0);else throw new Error("Unknown depthTexture format")}function Me(C){const b=i.get(C),O=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){const ne=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",ne)};K.addEventListener("dispose",ne),b.__depthDisposeCallback=ne}b.__boundDepthTexture=K}if(C.depthTexture&&!b.__autoAllocateDepthBuffer)if(O)for(let K=0;K<6;K++)pe(b.__webglFramebuffer[K],C,K);else{const K=C.texture.mipmaps;K&&K.length>0?pe(b.__webglFramebuffer[0],C,0):pe(b.__webglFramebuffer,C,0)}else if(O){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=n.createRenderbuffer(),ue(b.__webglDepthbuffer[K],C,!1);else{const ne=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,Y)}}else{const K=C.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),ue(b.__webglDepthbuffer,C,!1);else{const ne=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,Y)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function U(C,b,O){const K=i.get(C);b!==void 0&&j(K.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Me(C)}function N(C){const b=C.texture,O=i.get(C),K=i.get(b);C.addEventListener("dispose",E);const ne=C.textures,Y=C.isWebGLCubeRenderTarget===!0,Ee=ne.length>1;if(Ee||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=b.version,o.memory.textures++),Y){O.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer[ge]=[];for(let ze=0;ze<b.mipmaps.length;ze++)O.__webglFramebuffer[ge][ze]=n.createFramebuffer()}else O.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer=[];for(let ge=0;ge<b.mipmaps.length;ge++)O.__webglFramebuffer[ge]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let ge=0,ze=ne.length;ge<ze;ge++){const Ce=i.get(ne[ge]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&me(C)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ge=0;ge<ne.length;ge++){const ze=ne[ge];O.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ge]);const Ce=s.convert(ze.format,ze.colorSpace),_e=s.convert(ze.type),ye=M(ze.internalFormat,Ce,_e,ze.colorSpace,C.isXRRenderTarget===!0),Ae=L(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,ye,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,O.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),ue(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),de(n.TEXTURE_CUBE_MAP,b);for(let ge=0;ge<6;ge++)if(b.mipmaps&&b.mipmaps.length>0)for(let ze=0;ze<b.mipmaps.length;ze++)j(O.__webglFramebuffer[ge][ze],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze);else j(O.__webglFramebuffer[ge],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);p(b)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ge=0,ze=ne.length;ge<ze;ge++){const Ce=ne[ge],_e=i.get(Ce);let ye=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ye=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ye,_e.__webglTexture),de(ye,Ce),j(O.__webglFramebuffer,C,Ce,n.COLOR_ATTACHMENT0+ge,ye,0),p(Ce)&&g(ye)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ge=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,K.__webglTexture),de(ge,b),b.mipmaps&&b.mipmaps.length>0)for(let ze=0;ze<b.mipmaps.length;ze++)j(O.__webglFramebuffer[ze],C,b,n.COLOR_ATTACHMENT0,ge,ze);else j(O.__webglFramebuffer,C,b,n.COLOR_ATTACHMENT0,ge,0);p(b)&&g(ge),t.unbindTexture()}C.depthBuffer&&Me(C)}function V(C){const b=C.textures;for(let O=0,K=b.length;O<K;O++){const ne=b[O];if(p(ne)){const Y=y(C),Ee=i.get(ne).__webglTexture;t.bindTexture(Y,Ee),g(Y),t.unbindTexture()}}}const J=[],Z=[];function F(C){if(C.samples>0){if(me(C)===!1){const b=C.textures,O=C.width,K=C.height;let ne=n.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(C),ge=b.length>1;if(ge)for(let Ce=0;Ce<b.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const ze=C.texture.mipmaps;ze&&ze.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Ce=0;Ce<b.length;Ce++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),ge){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ce]);const _e=i.get(b[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_e,0)}n.blitFramebuffer(0,0,O,K,0,0,O,K,ne,n.NEAREST),l===!0&&(J.length=0,Z.length=0,J.push(n.COLOR_ATTACHMENT0+Ce),C.depthBuffer&&C.resolveDepthBuffer===!1&&(J.push(Y),Z.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let Ce=0;Ce<b.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ce]);const _e=i.get(b[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,_e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const b=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function L(C){return Math.min(r.maxSamples,C.samples)}function me(C){const b=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function fe(C){const b=o.render.frame;u.get(C)!==b&&(u.set(C,b),C.update())}function se(C,b){const O=C.colorSpace,K=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==Wa&&O!==Rs&&(xt.getTransfer(O)===It?(K!==nr||ne!==Hi)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Mt("WebGLTextures: Unsupported texture color space:",O)),b}function he(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=I,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=B,this.setTextureCube=te,this.rebindTextures=U,this.setupRenderTarget=N,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=j,this.useMultisampledRTT=me,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function x2(n,e){function t(i,r=Rs){let s;const o=xt.getTransfer(r);if(i===Hi)return n.UNSIGNED_BYTE;if(i===tm)return n.UNSIGNED_SHORT_4_4_4_4;if(i===nm)return n.UNSIGNED_SHORT_5_5_5_1;if(i===oS)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===aS)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===rS)return n.BYTE;if(i===sS)return n.SHORT;if(i===sc)return n.UNSIGNED_SHORT;if(i===em)return n.INT;if(i===Ir)return n.UNSIGNED_INT;if(i===Er)return n.FLOAT;if(i===cs)return n.HALF_FLOAT;if(i===lS)return n.ALPHA;if(i===cS)return n.RGB;if(i===nr)return n.RGBA;if(i===us)return n.DEPTH_COMPONENT;if(i===yo)return n.DEPTH_STENCIL;if(i===uS)return n.RED;if(i===im)return n.RED_INTEGER;if(i===Ga)return n.RG;if(i===rm)return n.RG_INTEGER;if(i===sm)return n.RGBA_INTEGER;if(i===vu||i===xu||i===Su||i===yu)if(o===It)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===vu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Su)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===vu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Su)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ed||i===Td||i===wd||i===Ad)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ed)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Td)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ad)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Cd||i===Rd||i===Pd||i===Dd||i===Ld||i===Id||i===Nd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Cd||i===Rd)return o===It?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Pd)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Dd)return s.COMPRESSED_R11_EAC;if(i===Ld)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Id)return s.COMPRESSED_RG11_EAC;if(i===Nd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ud||i===Fd||i===Od||i===kd||i===Bd||i===zd||i===Vd||i===Hd||i===Gd||i===Wd||i===Xd||i===qd||i===$d||i===Yd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ud)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fd)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Od)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kd)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bd)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zd)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vd)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hd)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gd)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wd)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xd)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qd)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$d)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yd)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kd||i===jd||i===Zd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Kd)return o===It?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jd||i===Qd||i===ep||i===tp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Jd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Qd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ep)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===tp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===oc?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const S2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y2=`
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

}`;class b2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new SS(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new lr({vertexShader:S2,fragmentShader:y2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nr(new gc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class M2 extends Ya{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null;const _=typeof XRWebGLBinding<"u",p=new b2,g={},y=t.getContextAttributes();let M=null,S=null;const w=[],T=[],E=new Pt;let v=null;const x=new Qi;x.viewport=new an;const D=new Qi;D.viewport=new an;const P=[x,D],I=new Uw;let G=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let H=w[re];return H===void 0&&(H=new rh,w[re]=H),H.getTargetRaySpace()},this.getControllerGrip=function(re){let H=w[re];return H===void 0&&(H=new rh,w[re]=H),H.getGripSpace()},this.getHand=function(re){let H=w[re];return H===void 0&&(H=new rh,w[re]=H),H.getHandSpace()};function X(re){const H=T.indexOf(re.inputSource);if(H===-1)return;const j=w[H];j!==void 0&&(j.update(re.inputSource,re.frame,c||o),j.dispatchEvent({type:re.type,data:re.inputSource}))}function W(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",B);for(let re=0;re<w.length;re++){const H=T[re];H!==null&&(T[re]=null,w[re].disconnect(H))}G=null,$=null,p.reset();for(const re in g)delete g[re];e.setRenderTarget(M),d=null,f=null,h=null,r=null,S=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",W),r.addEventListener("inputsourceschange",B),y.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,ue=null,pe=null;y.depth&&(pe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=y.stencil?yo:us,ue=y.stencil?oc:Ir);const Me={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Me),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Rr(f.textureWidth,f.textureHeight,{format:nr,type:Hi,depthTexture:new ac(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const j={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,j),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Rr(d.framebufferWidth,d.framebufferHeight,{format:nr,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function B(re){for(let H=0;H<re.removed.length;H++){const j=re.removed[H],ue=T.indexOf(j);ue>=0&&(T[ue]=null,w[ue].disconnect(j))}for(let H=0;H<re.added.length;H++){const j=re.added[H];let ue=T.indexOf(j);if(ue===-1){for(let Me=0;Me<w.length;Me++)if(Me>=T.length){T.push(j),ue=Me;break}else if(T[Me]===null){T[Me]=j,ue=Me;break}if(ue===-1)break}const pe=w[ue];pe&&pe.connect(j)}}const te=new oe,le=new oe;function k(re,H,j){te.setFromMatrixPosition(H.matrixWorld),le.setFromMatrixPosition(j.matrixWorld);const ue=te.distanceTo(le),pe=H.projectionMatrix.elements,Me=j.projectionMatrix.elements,U=pe[14]/(pe[10]-1),N=pe[14]/(pe[10]+1),V=(pe[9]+1)/pe[5],J=(pe[9]-1)/pe[5],Z=(pe[8]-1)/pe[0],F=(Me[8]+1)/Me[0],L=U*Z,me=U*F,fe=ue/(-Z+F),se=fe*-Z;if(H.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(se),re.translateZ(fe),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),pe[10]===-1)re.projectionMatrix.copy(H.projectionMatrix),re.projectionMatrixInverse.copy(H.projectionMatrixInverse);else{const he=U+fe,C=N+fe,b=L-se,O=me+(ue-se),K=V*N/C*he,ne=J*N/C*he;re.projectionMatrix.makePerspective(b,O,K,ne,he,C),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function xe(re,H){H===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(H.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let H=re.near,j=re.far;p.texture!==null&&(p.depthNear>0&&(H=p.depthNear),p.depthFar>0&&(j=p.depthFar)),I.near=D.near=x.near=H,I.far=D.far=x.far=j,(G!==I.near||$!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),G=I.near,$=I.far),I.layers.mask=re.layers.mask|6,x.layers.mask=I.layers.mask&-5,D.layers.mask=I.layers.mask&-3;const ue=re.parent,pe=I.cameras;xe(I,ue);for(let Me=0;Me<pe.length;Me++)xe(pe[Me],ue);pe.length===2?k(I,x,D):I.projectionMatrix.copy(x.projectionMatrix),de(re,I,ue)};function de(re,H,j){j===null?re.matrix.copy(H.matrixWorld):(re.matrix.copy(j.matrixWorld),re.matrix.invert(),re.matrix.multiply(H.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(H.projectionMatrix),re.projectionMatrixInverse.copy(H.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=np*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(re){l=re,f!==null&&(f.fixedFoveation=re),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=re)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(I)},this.getCameraTexture=function(re){return g[re]};let ke=null;function $e(re,H){if(u=H.getViewerPose(c||o),m=H,u!==null){const j=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let ue=!1;j.length!==I.cameras.length&&(I.cameras.length=0,ue=!0);for(let N=0;N<j.length;N++){const V=j[N];let J=null;if(d!==null)J=d.getViewport(V);else{const F=h.getViewSubImage(f,V);J=F.viewport,N===0&&(e.setRenderTargetTextures(S,F.colorTexture,F.depthStencilTexture),e.setRenderTarget(S))}let Z=P[N];Z===void 0&&(Z=new Qi,Z.layers.enable(N),Z.viewport=new an,P[N]=Z),Z.matrix.fromArray(V.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(V.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(J.x,J.y,J.width,J.height),N===0&&(I.matrix.copy(Z.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),ue===!0&&I.cameras.push(Z)}const pe=r.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){h=i.getBinding();const N=h.getDepthInformation(j[0]);N&&N.isValid&&N.texture&&p.init(N,r.renderState)}if(pe&&pe.includes("camera-access")&&_){e.state.unbindTexture(),h=i.getBinding();for(let N=0;N<j.length;N++){const V=j[N].camera;if(V){let J=g[V];J||(J=new SS,g[V]=J);const Z=h.getCameraImage(V);J.sourceTexture=Z}}}}for(let j=0;j<w.length;j++){const ue=T[j],pe=w[j];ue!==null&&pe!==void 0&&pe.update(ue,H,c||o)}ke&&ke(re,H),H.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:H}),m=null}const je=new MS;je.setAnimationLoop($e),this.setAnimationLoop=function(re){ke=re},this.dispose=function(){}}}const so=new fs,E2=new hn;function T2(n,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,yS(n)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function r(p,g,y,M,S){g.isMeshBasicMaterial?s(p,g):g.isMeshLambertMaterial?(s(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(p,g),h(p,g)):g.isMeshPhongMaterial?(s(p,g),u(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(p,g),f(p,g),g.isMeshPhysicalMaterial&&d(p,g,S)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),_(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,y,M):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===mi&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===mi&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const y=e.get(g),M=y.envMap,S=y.envMapRotation;M&&(p.envMap.value=M,so.copy(S),so.x*=-1,so.y*=-1,so.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(so.y*=-1,so.z*=-1),p.envMapRotation.value.setFromMatrix4(E2.makeRotationFromEuler(so)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,y,M){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*y,p.scale.value=M*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function h(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,y){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===mi&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const y=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function w2(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const S=M.program;i.uniformBlockBinding(y,S)}function c(y,M){let S=r[y.id];S===void 0&&(m(y),S=u(y),r[y.id]=S,y.addEventListener("dispose",p));const w=M.program;i.updateUBOMapping(y,w);const T=e.render.frame;s[y.id]!==T&&(f(y),s[y.id]=T)}function u(y){const M=h();y.__bindingPointIndex=M;const S=n.createBuffer(),w=y.__size,T=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,w,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,S),S}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const M=r[y.id],S=y.uniforms,w=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let T=0,E=S.length;T<E;T++){const v=Array.isArray(S[T])?S[T]:[S[T]];for(let x=0,D=v.length;x<D;x++){const P=v[x];if(d(P,T,x,w)===!0){const I=P.__offset,G=Array.isArray(P.value)?P.value:[P.value];let $=0;for(let X=0;X<G.length;X++){const W=G[X],B=_(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,I+$,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,$),$+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,M,S,w){const T=y.value,E=M+"_"+S;if(w[E]===void 0)return typeof T=="number"||typeof T=="boolean"?w[E]=T:w[E]=T.clone(),!0;{const v=w[E];if(typeof T=="number"||typeof T=="boolean"){if(v!==T)return w[E]=T,!0}else if(v.equals(T)===!1)return v.copy(T),!0}return!1}function m(y){const M=y.uniforms;let S=0;const w=16;for(let E=0,v=M.length;E<v;E++){const x=Array.isArray(M[E])?M[E]:[M[E]];for(let D=0,P=x.length;D<P;D++){const I=x[D],G=Array.isArray(I.value)?I.value:[I.value];for(let $=0,X=G.length;$<X;$++){const W=G[$],B=_(W),te=S%w,le=te%B.boundary,k=te+le;S+=le,k!==0&&w-k<B.storage&&(S+=w-k),I.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=B.storage}}}const T=S%w;return T>0&&(S+=w-T),y.__size=S,y.__cache={},this}function _(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):st("WebGLRenderer: Unsupported uniform value type.",y),M}function p(y){const M=y.target;M.removeEventListener("dispose",p);const S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function g(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:g}}const A2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let dr=null;function C2(){return dr===null&&(dr=new bw(A2,16,16,Ga,cs),dr.name="DFG_LUT",dr.minFilter=Wn,dr.magFilter=Wn,dr.wrapS=Qr,dr.wrapT=Qr,dr.generateMipmaps=!1,dr.needsUpdate=!0),dr}class R2{constructor(e={}){const{canvas:t=JT(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Hi}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const _=d,p=new Set([sm,rm,im]),g=new Set([Hi,Ir,sc,oc,tm,nm]),y=new Uint32Array(4),M=new Int32Array(4);let S=null,w=null;const T=[],E=[];let v=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let D=!1;this._outputColorSpace=Bi;let P=0,I=0,G=null,$=-1,X=null;const W=new an,B=new an;let te=null;const le=new Nt(0);let k=0,xe=t.width,de=t.height,ke=1,$e=null,je=null;const re=new an(0,0,xe,de),H=new an(0,0,xe,de);let j=!1;const ue=new vS;let pe=!1,Me=!1;const U=new hn,N=new oe,V=new an,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Z=!1;function F(){return G===null?ke:1}let L=i;function me(A,q){return t.getContext(A,q)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qp}`),t.addEventListener("webglcontextlost",Ve,!1),t.addEventListener("webglcontextrestored",Je,!1),t.addEventListener("webglcontextcreationerror",yt,!1),L===null){const q="webgl2";if(L=me(q,A),L===null)throw me(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Mt("WebGLRenderer: "+A.message),A}let fe,se,he,C,b,O,K,ne,Y,Ee,ge,ze,Ce,_e,ye,Ae,Le,Re,nt,z,Te,be,Ie;function ve(){fe=new RR(L),fe.init(),Te=new x2(L,fe),se=new yR(L,fe,e,Te),he=new _2(L,fe),se.reversedDepthBuffer&&f&&he.buffers.depth.setReversed(!0),C=new LR(L),b=new i2,O=new v2(L,fe,he,b,se,Te,C),K=new CR(x),ne=new Ow(L),be=new xR(L,ne),Y=new PR(L,ne,C,be),Ee=new NR(L,Y,ne,be,C),Re=new IR(L,se,O),ye=new bR(b),ge=new n2(x,K,fe,se,be,ye),ze=new T2(x,b),Ce=new s2,_e=new f2(fe),Le=new vR(x,K,he,Ee,m,l),Ae=new g2(x,Ee,se),Ie=new w2(L,C,se,he),nt=new SR(L,fe,C),z=new DR(L,fe,C),C.programs=ge.programs,x.capabilities=se,x.extensions=fe,x.properties=b,x.renderLists=Ce,x.shadowMap=Ae,x.state=he,x.info=C}ve(),_!==Hi&&(v=new FR(_,t.width,t.height,r,s));const ae=new M2(x,L);this.xr=ae,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=fe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=fe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ke},this.setPixelRatio=function(A){A!==void 0&&(ke=A,this.setSize(xe,de,!1))},this.getSize=function(A){return A.set(xe,de)},this.setSize=function(A,q,ie=!0){if(ae.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=A,de=q,t.width=Math.floor(A*ke),t.height=Math.floor(q*ke),ie===!0&&(t.style.width=A+"px",t.style.height=q+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(xe*ke,de*ke).floor()},this.setDrawingBufferSize=function(A,q,ie){xe=A,de=q,ke=ie,t.width=Math.floor(A*ie),t.height=Math.floor(q*ie),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(_===Hi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(W)},this.getViewport=function(A){return A.copy(re)},this.setViewport=function(A,q,ie,ee){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,q,ie,ee),he.viewport(W.copy(re).multiplyScalar(ke).round())},this.getScissor=function(A){return A.copy(H)},this.setScissor=function(A,q,ie,ee){A.isVector4?H.set(A.x,A.y,A.z,A.w):H.set(A,q,ie,ee),he.scissor(B.copy(H).multiplyScalar(ke).round())},this.getScissorTest=function(){return j},this.setScissorTest=function(A){he.setScissorTest(j=A)},this.setOpaqueSort=function(A){$e=A},this.setTransparentSort=function(A){je=A},this.getClearColor=function(A){return A.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,ie=!0){let ee=0;if(A){let Q=!1;if(G!==null){const Pe=G.texture.format;Q=p.has(Pe)}if(Q){const Pe=G.texture.type,Ne=g.has(Pe),De=Le.getClearColor(),We=Le.getClearAlpha(),He=De.r,lt=De.g,dt=De.b;Ne?(y[0]=He,y[1]=lt,y[2]=dt,y[3]=We,L.clearBufferuiv(L.COLOR,0,y)):(M[0]=He,M[1]=lt,M[2]=dt,M[3]=We,L.clearBufferiv(L.COLOR,0,M))}else ee|=L.COLOR_BUFFER_BIT}q&&(ee|=L.DEPTH_BUFFER_BIT),ie&&(ee|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&L.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",yt,!1),Le.dispose(),Ce.dispose(),_e.dispose(),b.dispose(),K.dispose(),Ee.dispose(),be.dispose(),Ie.dispose(),ge.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",rt),ae.removeEventListener("sessionend",nn),at.stop()};function Ve(A){A.preventDefault(),a_("WebGLRenderer: Context Lost."),D=!0}function Je(){a_("WebGLRenderer: Context Restored."),D=!1;const A=C.autoReset,q=Ae.enabled,ie=Ae.autoUpdate,ee=Ae.needsUpdate,Q=Ae.type;ve(),C.autoReset=A,Ae.enabled=q,Ae.autoUpdate=ie,Ae.needsUpdate=ee,Ae.type=Q}function yt(A){Mt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Be(A){const q=A.target;q.removeEventListener("dispose",Be),Ye(q)}function Ye(A){ct(A),b.remove(A)}function ct(A){const q=b.get(A).programs;q!==void 0&&(q.forEach(function(ie){ge.releaseProgram(ie)}),A.isShaderMaterial&&ge.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,ie,ee,Q,Pe){q===null&&(q=J);const Ne=Q.isMesh&&Q.matrixWorld.determinant()<0,De=Ui(A,q,ie,ee,Q);he.setMaterial(ee,Ne);let We=ie.index,He=1;if(ee.wireframe===!0){if(We=Y.getWireframeAttribute(ie),We===void 0)return;He=2}const lt=ie.drawRange,dt=ie.attributes.position;let Ze=lt.start*He,Ut=(lt.start+lt.count)*He;Pe!==null&&(Ze=Math.max(Ze,Pe.start*He),Ut=Math.min(Ut,(Pe.start+Pe.count)*He)),We!==null?(Ze=Math.max(Ze,0),Ut=Math.min(Ut,We.count)):dt!=null&&(Ze=Math.max(Ze,0),Ut=Math.min(Ut,dt.count));const rn=Ut-Ze;if(rn<0||rn===1/0)return;be.setup(Q,ee,De,ie,We);let Zt,Ft=nt;if(We!==null&&(Zt=ne.get(We),Ft=z,Ft.setIndex(Zt)),Q.isMesh)ee.wireframe===!0?(he.setLineWidth(ee.wireframeLinewidth*F()),Ft.setMode(L.LINES)):Ft.setMode(L.TRIANGLES);else if(Q.isLine){let Un=ee.linewidth;Un===void 0&&(Un=1),he.setLineWidth(Un*F()),Q.isLineSegments?Ft.setMode(L.LINES):Q.isLineLoop?Ft.setMode(L.LINE_LOOP):Ft.setMode(L.LINE_STRIP)}else Q.isPoints?Ft.setMode(L.POINTS):Q.isSprite&&Ft.setMode(L.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)$u("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ft.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(fe.get("WEBGL_multi_draw"))Ft.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Un=Q._multiDrawStarts,Ke=Q._multiDrawCounts,_i=Q._multiDrawCount,bt=We?ne.get(We).bytesPerElement:1,Yi=b.get(ee).currentProgram.getUniforms();for(let ur=0;ur<_i;ur++)Yi.setValue(L,"_gl_DrawID",ur),Ft.render(Un[ur]/bt,Ke[ur])}else if(Q.isInstancedMesh)Ft.renderInstances(Ze,rn,Q.count);else if(ie.isInstancedBufferGeometry){const Un=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Ke=Math.min(ie.instanceCount,Un);Ft.renderInstances(Ze,rn,Ke)}else Ft.render(Ze,rn)};function Ue(A,q,ie){A.transparent===!0&&A.side===Zr&&A.forceSinglePass===!1?(A.side=mi,A.needsUpdate=!0,In(A,q,ie),A.side=Xs,A.needsUpdate=!0,In(A,q,ie),A.side=Zr):In(A,q,ie)}this.compile=function(A,q,ie=null){ie===null&&(ie=A),w=_e.get(ie),w.init(q),E.push(w),ie.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(w.pushLight(Q),Q.castShadow&&w.pushShadow(Q))}),A!==ie&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(w.pushLight(Q),Q.castShadow&&w.pushShadow(Q))}),w.setupLights();const ee=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Pe=Q.material;if(Pe)if(Array.isArray(Pe))for(let Ne=0;Ne<Pe.length;Ne++){const De=Pe[Ne];Ue(De,ie,Q),ee.add(De)}else Ue(Pe,ie,Q),ee.add(Pe)}),w=E.pop(),ee},this.compileAsync=function(A,q,ie=null){const ee=this.compile(A,q,ie);return new Promise(Q=>{function Pe(){if(ee.forEach(function(Ne){b.get(Ne).currentProgram.isReady()&&ee.delete(Ne)}),ee.size===0){Q(A);return}setTimeout(Pe,10)}fe.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let it=null;function Qe(A){it&&it(A)}function rt(){at.stop()}function nn(){at.start()}const at=new MS;at.setAnimationLoop(Qe),typeof self<"u"&&at.setContext(self),this.setAnimationLoop=function(A){it=A,ae.setAnimationLoop(A),A===null?at.stop():at.start()},ae.addEventListener("sessionstart",rt),ae.addEventListener("sessionend",nn),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){Mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const ie=ae.enabled===!0&&ae.isPresenting===!0,ee=v!==null&&(G===null||ie)&&v.begin(x,G);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(q),q=ae.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,q,G),w=_e.get(A,E.length),w.init(q),E.push(w),U.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ue.setFromProjectionMatrix(U,Tr,q.reversedDepth),Me=this.localClippingEnabled,pe=ye.init(this.clippingPlanes,Me),S=Ce.get(A,T.length),S.init(),T.push(S),ae.enabled===!0&&ae.isPresenting===!0){const Ne=x.xr.getDepthSensingMesh();Ne!==null&&Wt(Ne,q,-1/0,x.sortObjects)}Wt(A,q,0,x.sortObjects),S.finish(),x.sortObjects===!0&&S.sort($e,je),Z=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Z&&Le.addToRenderList(S,A),this.info.render.frame++,pe===!0&&ye.beginShadows();const Q=w.state.shadowsArray;if(Ae.render(Q,A,q),pe===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ee&&v.hasRenderPass())===!1){const Ne=S.opaque,De=S.transmissive;if(w.setupLights(),q.isArrayCamera){const We=q.cameras;if(De.length>0)for(let He=0,lt=We.length;He<lt;He++){const dt=We[He];Xt(Ne,De,A,dt)}Z&&Le.render(A);for(let He=0,lt=We.length;He<lt;He++){const dt=We[He];dn(S,A,dt,dt.viewport)}}else De.length>0&&Xt(Ne,De,A,q),Z&&Le.render(A),dn(S,A,q)}G!==null&&I===0&&(O.updateMultisampleRenderTarget(G),O.updateRenderTargetMipmap(G)),ee&&v.end(x),A.isScene===!0&&A.onAfterRender(x,A,q),be.resetDefaultState(),$=-1,X=null,E.pop(),E.length>0?(w=E[E.length-1],pe===!0&&ye.setGlobalState(x.clippingPlanes,w.state.camera)):w=null,T.pop(),T.length>0?S=T[T.length-1]:S=null};function Wt(A,q,ie,ee){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ue.intersectsSprite(A)){ee&&V.setFromMatrixPosition(A.matrixWorld).applyMatrix4(U);const Ne=Ee.update(A),De=A.material;De.visible&&S.push(A,Ne,De,ie,V.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ue.intersectsObject(A))){const Ne=Ee.update(A),De=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),V.copy(A.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),V.copy(Ne.boundingSphere.center)),V.applyMatrix4(A.matrixWorld).applyMatrix4(U)),Array.isArray(De)){const We=Ne.groups;for(let He=0,lt=We.length;He<lt;He++){const dt=We[He],Ze=De[dt.materialIndex];Ze&&Ze.visible&&S.push(A,Ne,Ze,ie,V.z,dt)}}else De.visible&&S.push(A,Ne,De,ie,V.z,null)}}const Pe=A.children;for(let Ne=0,De=Pe.length;Ne<De;Ne++)Wt(Pe[Ne],q,ie,ee)}function dn(A,q,ie,ee){const{opaque:Q,transmissive:Pe,transparent:Ne}=A;w.setupLightsView(ie),pe===!0&&ye.setGlobalState(x.clippingPlanes,ie),ee&&he.viewport(W.copy(ee)),Q.length>0&&Lt(Q,q,ie),Pe.length>0&&Lt(Pe,q,ie),Ne.length>0&&Lt(Ne,q,ie),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Xt(A,q,ie,ee){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[ee.id]===void 0){const Ze=fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[ee.id]=new Rr(1,1,{generateMipmaps:!0,type:Ze?cs:Hi,minFilter:So,samples:Math.max(4,se.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace})}const Pe=w.state.transmissionRenderTarget[ee.id],Ne=ee.viewport||W;Pe.setSize(Ne.z*x.transmissionResolutionScale,Ne.w*x.transmissionResolutionScale);const De=x.getRenderTarget(),We=x.getActiveCubeFace(),He=x.getActiveMipmapLevel();x.setRenderTarget(Pe),x.getClearColor(le),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),x.clear(),Z&&Le.render(ie);const lt=x.toneMapping;x.toneMapping=Cr;const dt=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),w.setupLightsView(ee),pe===!0&&ye.setGlobalState(x.clippingPlanes,ee),Lt(A,ie,ee),O.updateMultisampleRenderTarget(Pe),O.updateRenderTargetMipmap(Pe),fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Ut=0,rn=q.length;Ut<rn;Ut++){const Zt=q[Ut],{object:Ft,geometry:Un,material:Ke,group:_i}=Zt;if(Ke.side===Zr&&Ft.layers.test(ee.layers)){const bt=Ke.side;Ke.side=mi,Ke.needsUpdate=!0,Tt(Ft,ie,ee,Un,Ke,_i),Ke.side=bt,Ke.needsUpdate=!0,Ze=!0}}Ze===!0&&(O.updateMultisampleRenderTarget(Pe),O.updateRenderTargetMipmap(Pe))}x.setRenderTarget(De,We,He),x.setClearColor(le,k),dt!==void 0&&(ee.viewport=dt),x.toneMapping=lt}function Lt(A,q,ie){const ee=q.isScene===!0?q.overrideMaterial:null;for(let Q=0,Pe=A.length;Q<Pe;Q++){const Ne=A[Q],{object:De,geometry:We,group:He}=Ne;let lt=Ne.material;lt.allowOverride===!0&&ee!==null&&(lt=ee),De.layers.test(ie.layers)&&Tt(De,q,ie,We,lt,He)}}function Tt(A,q,ie,ee,Q,Pe){A.onBeforeRender(x,q,ie,ee,Q,Pe),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(x,q,ie,ee,A,Pe),Q.transparent===!0&&Q.side===Zr&&Q.forceSinglePass===!1?(Q.side=mi,Q.needsUpdate=!0,x.renderBufferDirect(ie,q,ee,Q,A,Pe),Q.side=Xs,Q.needsUpdate=!0,x.renderBufferDirect(ie,q,ee,Q,A,Pe),Q.side=Zr):x.renderBufferDirect(ie,q,ee,Q,A,Pe),A.onAfterRender(x,q,ie,ee,Q,Pe)}function In(A,q,ie){q.isScene!==!0&&(q=J);const ee=b.get(A),Q=w.state.lights,Pe=w.state.shadowsArray,Ne=Q.state.version,De=ge.getParameters(A,Q.state,Pe,q,ie),We=ge.getProgramCacheKey(De);let He=ee.programs;ee.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,ee.fog=q.fog;const lt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ee.envMap=K.get(A.envMap||ee.environment,lt),ee.envMapRotation=ee.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,He===void 0&&(A.addEventListener("dispose",Be),He=new Map,ee.programs=He);let dt=He.get(We);if(dt!==void 0){if(ee.currentProgram===dt&&ee.lightsStateVersion===Ne)return Nn(A,De),dt}else De.uniforms=ge.getUniforms(A),A.onBeforeCompile(De,x),dt=ge.acquireProgram(De,We),He.set(We,dt),ee.uniforms=De.uniforms;const Ze=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=ye.uniform),Nn(A,De),ee.needsLights=mn(A),ee.lightsStateVersion=Ne,ee.needsLights&&(Ze.ambientLightColor.value=Q.state.ambient,Ze.lightProbe.value=Q.state.probe,Ze.directionalLights.value=Q.state.directional,Ze.directionalLightShadows.value=Q.state.directionalShadow,Ze.spotLights.value=Q.state.spot,Ze.spotLightShadows.value=Q.state.spotShadow,Ze.rectAreaLights.value=Q.state.rectArea,Ze.ltc_1.value=Q.state.rectAreaLTC1,Ze.ltc_2.value=Q.state.rectAreaLTC2,Ze.pointLights.value=Q.state.point,Ze.pointLightShadows.value=Q.state.pointShadow,Ze.hemisphereLights.value=Q.state.hemi,Ze.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ze.spotLightMatrix.value=Q.state.spotLightMatrix,Ze.spotLightMap.value=Q.state.spotLightMap,Ze.pointShadowMatrix.value=Q.state.pointShadowMatrix),ee.currentProgram=dt,ee.uniformsList=null,dt}function Vt(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=bu.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function Nn(A,q){const ie=b.get(A);ie.outputColorSpace=q.outputColorSpace,ie.batching=q.batching,ie.batchingColor=q.batchingColor,ie.instancing=q.instancing,ie.instancingColor=q.instancingColor,ie.instancingMorph=q.instancingMorph,ie.skinning=q.skinning,ie.morphTargets=q.morphTargets,ie.morphNormals=q.morphNormals,ie.morphColors=q.morphColors,ie.morphTargetsCount=q.morphTargetsCount,ie.numClippingPlanes=q.numClippingPlanes,ie.numIntersection=q.numClipIntersection,ie.vertexAlphas=q.vertexAlphas,ie.vertexTangents=q.vertexTangents,ie.toneMapping=q.toneMapping}function Ui(A,q,ie,ee,Q){q.isScene!==!0&&(q=J),O.resetTextureUnits();const Pe=q.fog,Ne=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?q.environment:null,De=G===null?x.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Wa,We=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,He=K.get(ee.envMap||Ne,We),lt=ee.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,dt=!!ie.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ze=!!ie.morphAttributes.position,Ut=!!ie.morphAttributes.normal,rn=!!ie.morphAttributes.color;let Zt=Cr;ee.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Zt=x.toneMapping);const Ft=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Un=Ft!==void 0?Ft.length:0,Ke=b.get(ee),_i=w.state.lights;if(pe===!0&&(Me===!0||A!==X)){const Mn=A===X&&ee.id===$;ye.setState(ee,A,Mn)}let bt=!1;ee.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==_i.state.version||Ke.outputColorSpace!==De||Q.isBatchedMesh&&Ke.batching===!1||!Q.isBatchedMesh&&Ke.batching===!0||Q.isBatchedMesh&&Ke.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Ke.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Ke.instancing===!1||!Q.isInstancedMesh&&Ke.instancing===!0||Q.isSkinnedMesh&&Ke.skinning===!1||!Q.isSkinnedMesh&&Ke.skinning===!0||Q.isInstancedMesh&&Ke.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ke.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ke.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ke.instancingMorph===!1&&Q.morphTexture!==null||Ke.envMap!==He||ee.fog===!0&&Ke.fog!==Pe||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==ye.numPlanes||Ke.numIntersection!==ye.numIntersection)||Ke.vertexAlphas!==lt||Ke.vertexTangents!==dt||Ke.morphTargets!==Ze||Ke.morphNormals!==Ut||Ke.morphColors!==rn||Ke.toneMapping!==Zt||Ke.morphTargetsCount!==Un)&&(bt=!0):(bt=!0,Ke.__version=ee.version);let Yi=Ke.currentProgram;bt===!0&&(Yi=In(ee,q,Q));let ur=!1,$s=!1,Ho=!1;const kt=Yi.getUniforms(),Rn=Ke.uniforms;if(he.useProgram(Yi.program)&&(ur=!0,$s=!0,Ho=!0),ee.id!==$&&($=ee.id,$s=!0),ur||X!==A){he.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),kt.setValue(L,"projectionMatrix",A.projectionMatrix),kt.setValue(L,"viewMatrix",A.matrixWorldInverse);const ms=kt.map.cameraPosition;ms!==void 0&&ms.setValue(L,N.setFromMatrixPosition(A.matrixWorld)),se.logarithmicDepthBuffer&&kt.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&kt.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),X!==A&&(X=A,$s=!0,Ho=!0)}if(Ke.needsLights&&(_i.state.directionalShadowMap.length>0&&kt.setValue(L,"directionalShadowMap",_i.state.directionalShadowMap,O),_i.state.spotShadowMap.length>0&&kt.setValue(L,"spotShadowMap",_i.state.spotShadowMap,O),_i.state.pointShadowMap.length>0&&kt.setValue(L,"pointShadowMap",_i.state.pointShadowMap,O)),Q.isSkinnedMesh){kt.setOptional(L,Q,"bindMatrix"),kt.setOptional(L,Q,"bindMatrixInverse");const Mn=Q.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),kt.setValue(L,"boneTexture",Mn.boneTexture,O))}Q.isBatchedMesh&&(kt.setOptional(L,Q,"batchingTexture"),kt.setValue(L,"batchingTexture",Q._matricesTexture,O),kt.setOptional(L,Q,"batchingIdTexture"),kt.setValue(L,"batchingIdTexture",Q._indirectTexture,O),kt.setOptional(L,Q,"batchingColorTexture"),Q._colorsTexture!==null&&kt.setValue(L,"batchingColorTexture",Q._colorsTexture,O));const ps=ie.morphAttributes;if((ps.position!==void 0||ps.normal!==void 0||ps.color!==void 0)&&Re.update(Q,ie,Yi),($s||Ke.receiveShadow!==Q.receiveShadow)&&(Ke.receiveShadow=Q.receiveShadow,kt.setValue(L,"receiveShadow",Q.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&q.environment!==null&&(Rn.envMapIntensity.value=q.environmentIntensity),Rn.dfgLUT!==void 0&&(Rn.dfgLUT.value=C2()),$s&&(kt.setValue(L,"toneMappingExposure",x.toneMappingExposure),Ke.needsLights&&pn(Rn,Ho),Pe&&ee.fog===!0&&ze.refreshFogUniforms(Rn,Pe),ze.refreshMaterialUniforms(Rn,ee,ke,de,w.state.transmissionRenderTarget[A.id]),bu.upload(L,Vt(Ke),Rn,O)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(bu.upload(L,Vt(Ke),Rn,O),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&kt.setValue(L,"center",Q.center),kt.setValue(L,"modelViewMatrix",Q.modelViewMatrix),kt.setValue(L,"normalMatrix",Q.normalMatrix),kt.setValue(L,"modelMatrix",Q.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Mn=ee.uniformsGroups;for(let ms=0,Go=Mn.length;ms<Go;ms++){const fm=Mn[ms];Ie.update(fm,Yi),Ie.bind(fm,Yi)}}return Yi}function pn(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function mn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(A,q,ie){const ee=b.get(A);ee.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),b.get(A.texture).__webglTexture=q,b.get(A.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:ie,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const ie=b.get(A);ie.__webglFramebuffer=q,ie.__useDefaultFramebuffer=q===void 0};const bn=L.createFramebuffer();this.setRenderTarget=function(A,q=0,ie=0){G=A,P=q,I=ie;let ee=null,Q=!1,Pe=!1;if(A){const De=b.get(A);if(De.__useDefaultFramebuffer!==void 0){he.bindFramebuffer(L.FRAMEBUFFER,De.__webglFramebuffer),W.copy(A.viewport),B.copy(A.scissor),te=A.scissorTest,he.viewport(W),he.scissor(B),he.setScissorTest(te),$=-1;return}else if(De.__webglFramebuffer===void 0)O.setupRenderTarget(A);else if(De.__hasExternalTextures)O.rebindTextures(A,b.get(A.texture).__webglTexture,b.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const lt=A.depthTexture;if(De.__boundDepthTexture!==lt){if(lt!==null&&b.has(lt)&&(A.width!==lt.image.width||A.height!==lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(A)}}const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Pe=!0);const He=b.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(He[q])?ee=He[q][ie]:ee=He[q],Q=!0):A.samples>0&&O.useMultisampledRTT(A)===!1?ee=b.get(A).__webglMultisampledFramebuffer:Array.isArray(He)?ee=He[ie]:ee=He,W.copy(A.viewport),B.copy(A.scissor),te=A.scissorTest}else W.copy(re).multiplyScalar(ke).floor(),B.copy(H).multiplyScalar(ke).floor(),te=j;if(ie!==0&&(ee=bn),he.bindFramebuffer(L.FRAMEBUFFER,ee)&&he.drawBuffers(A,ee),he.viewport(W),he.scissor(B),he.setScissorTest(te),Q){const De=b.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+q,De.__webglTexture,ie)}else if(Pe){const De=q;for(let We=0;We<A.textures.length;We++){const He=b.get(A.textures[We]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+We,He.__webglTexture,ie,De)}}else if(A!==null&&ie!==0){const De=b.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,De.__webglTexture,ie)}$=-1},this.readRenderTargetPixels=function(A,q,ie,ee,Q,Pe,Ne,De=0){if(!(A&&A.isWebGLRenderTarget)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=b.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(We=We[Ne]),We){he.bindFramebuffer(L.FRAMEBUFFER,We);try{const He=A.textures[De],lt=He.format,dt=He.type;if(A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+De),!se.textureFormatReadable(lt)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(dt)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-ee&&ie>=0&&ie<=A.height-Q&&L.readPixels(q,ie,ee,Q,Te.convert(lt),Te.convert(dt),Pe)}finally{const He=G!==null?b.get(G).__webglFramebuffer:null;he.bindFramebuffer(L.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(A,q,ie,ee,Q,Pe,Ne,De=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=b.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(We=We[Ne]),We)if(q>=0&&q<=A.width-ee&&ie>=0&&ie<=A.height-Q){he.bindFramebuffer(L.FRAMEBUFFER,We);const He=A.textures[De],lt=He.format,dt=He.type;if(A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+De),!se.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ze),L.bufferData(L.PIXEL_PACK_BUFFER,Pe.byteLength,L.STREAM_READ),L.readPixels(q,ie,ee,Q,Te.convert(lt),Te.convert(dt),0);const Ut=G!==null?b.get(G).__webglFramebuffer:null;he.bindFramebuffer(L.FRAMEBUFFER,Ut);const rn=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await QT(L,rn,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ze),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Pe),L.deleteBuffer(Ze),L.deleteSync(rn),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,ie=0){const ee=Math.pow(2,-ie),Q=Math.floor(A.image.width*ee),Pe=Math.floor(A.image.height*ee),Ne=q!==null?q.x:0,De=q!==null?q.y:0;O.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,ie,0,0,Ne,De,Q,Pe),he.unbindTexture()};const Ur=L.createFramebuffer(),Vo=L.createFramebuffer();this.copyTextureToTexture=function(A,q,ie=null,ee=null,Q=0,Pe=0){let Ne,De,We,He,lt,dt,Ze,Ut,rn;const Zt=A.isCompressedTexture?A.mipmaps[Pe]:A.image;if(ie!==null)Ne=ie.max.x-ie.min.x,De=ie.max.y-ie.min.y,We=ie.isBox3?ie.max.z-ie.min.z:1,He=ie.min.x,lt=ie.min.y,dt=ie.isBox3?ie.min.z:0;else{const Rn=Math.pow(2,-Q);Ne=Math.floor(Zt.width*Rn),De=Math.floor(Zt.height*Rn),A.isDataArrayTexture?We=Zt.depth:A.isData3DTexture?We=Math.floor(Zt.depth*Rn):We=1,He=0,lt=0,dt=0}ee!==null?(Ze=ee.x,Ut=ee.y,rn=ee.z):(Ze=0,Ut=0,rn=0);const Ft=Te.convert(q.format),Un=Te.convert(q.type);let Ke;q.isData3DTexture?(O.setTexture3D(q,0),Ke=L.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(O.setTexture2DArray(q,0),Ke=L.TEXTURE_2D_ARRAY):(O.setTexture2D(q,0),Ke=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,q.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,q.unpackAlignment);const _i=L.getParameter(L.UNPACK_ROW_LENGTH),bt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Yi=L.getParameter(L.UNPACK_SKIP_PIXELS),ur=L.getParameter(L.UNPACK_SKIP_ROWS),$s=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Zt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Zt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,He),L.pixelStorei(L.UNPACK_SKIP_ROWS,lt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,dt);const Ho=A.isDataArrayTexture||A.isData3DTexture,kt=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const Rn=b.get(A),ps=b.get(q),Mn=b.get(Rn.__renderTarget),ms=b.get(ps.__renderTarget);he.bindFramebuffer(L.READ_FRAMEBUFFER,Mn.__webglFramebuffer),he.bindFramebuffer(L.DRAW_FRAMEBUFFER,ms.__webglFramebuffer);for(let Go=0;Go<We;Go++)Ho&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,b.get(A).__webglTexture,Q,dt+Go),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,b.get(q).__webglTexture,Pe,rn+Go)),L.blitFramebuffer(He,lt,Ne,De,Ze,Ut,Ne,De,L.DEPTH_BUFFER_BIT,L.NEAREST);he.bindFramebuffer(L.READ_FRAMEBUFFER,null),he.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||b.has(A)){const Rn=b.get(A),ps=b.get(q);he.bindFramebuffer(L.READ_FRAMEBUFFER,Ur),he.bindFramebuffer(L.DRAW_FRAMEBUFFER,Vo);for(let Mn=0;Mn<We;Mn++)Ho?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Rn.__webglTexture,Q,dt+Mn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Rn.__webglTexture,Q),kt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ps.__webglTexture,Pe,rn+Mn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ps.__webglTexture,Pe),Q!==0?L.blitFramebuffer(He,lt,Ne,De,Ze,Ut,Ne,De,L.COLOR_BUFFER_BIT,L.NEAREST):kt?L.copyTexSubImage3D(Ke,Pe,Ze,Ut,rn+Mn,He,lt,Ne,De):L.copyTexSubImage2D(Ke,Pe,Ze,Ut,He,lt,Ne,De);he.bindFramebuffer(L.READ_FRAMEBUFFER,null),he.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else kt?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(Ke,Pe,Ze,Ut,rn,Ne,De,We,Ft,Un,Zt.data):q.isCompressedArrayTexture?L.compressedTexSubImage3D(Ke,Pe,Ze,Ut,rn,Ne,De,We,Ft,Zt.data):L.texSubImage3D(Ke,Pe,Ze,Ut,rn,Ne,De,We,Ft,Un,Zt):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Pe,Ze,Ut,Ne,De,Ft,Un,Zt.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Pe,Ze,Ut,Zt.width,Zt.height,Ft,Zt.data):L.texSubImage2D(L.TEXTURE_2D,Pe,Ze,Ut,Ne,De,Ft,Un,Zt);L.pixelStorei(L.UNPACK_ROW_LENGTH,_i),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,bt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Yi),L.pixelStorei(L.UNPACK_SKIP_ROWS,ur),L.pixelStorei(L.UNPACK_SKIP_IMAGES,$s),Pe===0&&q.generateMipmaps&&L.generateMipmap(Ke),he.unbindTexture()},this.initRenderTarget=function(A){b.get(A).__webglFramebuffer===void 0&&O.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?O.setTextureCube(A,0):A.isData3DTexture?O.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?O.setTexture2DArray(A,0):O.setTexture2D(A,0),he.unbindTexture()},this.resetState=function(){P=0,I=0,G=null,he.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}const P2=vp({__name:"LightPillar",props:{topColor:{default:"#48FF28"},bottomColor:{default:"#9EF19E"},intensity:{default:1},rotationSpeed:{default:.3},interactive:{type:Boolean,default:!1},className:{default:""},glowAmount:{default:.005},pillarWidth:{default:3},pillarHeight:{default:.4},noiseIntensity:{default:.5},mixBlendMode:{default:"screen"},pillarRotation:{default:0},resolutionScale:{default:.5},targetFPS:{default:30}},setup(n){const e=n,t=Ty("containerRef"),i=qe(null),r=fo(null),s=fo(null),o=fo(null),a=fo(null),l=fo(null),c=qe(new Pt(0,0)),u=qe(0),h=qe(!0),f=qe(!0);U0(()=>{const _=document.createElement("canvas");_.getContext("webgl2")||_.getContext("webgl")||_.getContext("experimental-webgl")||(h.value=!1,console.warn("WebGL is not supported in this browser")),_.remove()});let d=null;const m=()=>{if(!t.value||!h.value)return;const _=t.value,p=_.clientWidth,g=_.clientHeight;if(p===0||g===0)return;const y=new mw;o.value=y;const M=new um(-1,1,1,-1,0,1);a.value=M;let S;try{S=new R2({antialias:!1,alpha:!0,powerPreference:"low-power",precision:"lowp",stencil:!1,depth:!1})}catch(de){console.error("Failed to create WebGL renderer:",de),h.value=!1;return}const w=Math.max(.15,Math.min(1,e.resolutionScale)),T=Math.round(p*w),E=Math.round(g*w);S.setPixelRatio(1),S.setSize(T,E,!1);const v=S.domElement;v.style.width="100%",v.style.height="100%",v.style.display="block",_.appendChild(v),r.value=S;const x=de=>{const ke=new Nt(de);return new oe(ke.r,ke.g,ke.b)},D=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,P=`
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      uniform vec3 uTopColor;
      uniform vec3 uBottomColor;
      uniform float uIntensity;
      uniform bool uInteractive;
      uniform float uGlowAmount;
      uniform float uPillarWidth;
      uniform float uPillarHeight;
      uniform float uNoiseIntensity;
      uniform float uPillarRotation;
      varying vec2 vUv;

      const float PI = 3.141592653589793;
      const float EPSILON = 0.001;
      const float E = 2.71828182845904523536;
      const float HALF = 0.5;

      mat2 rot(float angle) {
        float s = sin(angle);
        float c = cos(angle);
        return mat2(c, -s, s, c);
      }

      // Procedural noise function
      float noise(vec2 coord) {
        float G = E;
        vec2 r = (G * sin(G * coord));
        return fract(r.x * r.y * (1.0 + coord.x));
      }

      // Apply layered wave deformation to position
      vec3 applyWaveDeformation(vec3 pos, float timeOffset) {
        float frequency = 1.0;
        float amplitude = 1.0;
        vec3 deformed = pos;

        for(float i = 0.0; i < 4.0; i++) {
          deformed.xz *= rot(0.4);
          float phase = timeOffset * i * 2.0;
          vec3 oscillation = cos(deformed.zxy * frequency - phase);
          deformed += oscillation * amplitude;
          frequency *= 2.0;
          amplitude *= HALF;
        }
        return deformed;
      }

      // Polynomial smooth blending between two values
      float blendMin(float a, float b, float k) {
        float scaledK = k * 4.0;
        float h = max(scaledK - abs(a - b), 0.0);
        return min(a, b) - h * h * 0.25 / scaledK;
      }

      float blendMax(float a, float b, float k) {
        return -blendMin(-a, -b, k);
      }

      void main() {
        vec2 fragCoord = vUv * uResolution;
        vec2 uv = (fragCoord * 2.0 - uResolution) / uResolution.y;

        // Apply 2D rotation to UV coordinates
        float rotAngle = uPillarRotation * PI / 180.0;
        uv *= rot(rotAngle);

        vec3 origin = vec3(0.0, 0.0, -10.0);
        vec3 direction = normalize(vec3(uv, 1.0));

        float maxDepth = 50.0;
        float depth = 0.1;

        mat2 rotX = rot(uTime * 0.3);
        if(uInteractive && length(uMouse) > 0.0) {
          rotX = rot(uMouse.x * PI * 2.0);
        }

        vec3 color = vec3(0.0);

        for(float i = 0.0; i < 100.0; i++) {
          vec3 pos = origin + direction * depth;
          pos.xz *= rotX;

          // Apply vertical scaling and wave deformation
          vec3 deformed = pos;
          deformed.y *= uPillarHeight;
          deformed = applyWaveDeformation(deformed + vec3(0.0, uTime, 0.0), uTime);

          // Calculate distance field using cosine pattern
          vec2 cosinePair = cos(deformed.xz);
          float fieldDistance = length(cosinePair) - 0.2;

          // Radial boundary constraint
          float radialBound = length(pos.xz) - uPillarWidth;
          fieldDistance = blendMax(radialBound, fieldDistance, 1.0);
          fieldDistance = abs(fieldDistance) * 0.15 + 0.01;

          vec3 gradient = mix(uBottomColor, uTopColor, smoothstep(15.0, -15.0, pos.y));
          color += gradient * pow(1.0 / fieldDistance, 1.0);

          if(fieldDistance < EPSILON || depth > maxDepth) break;
          depth += fieldDistance;
        }

        // Normalize by pillar width to maintain consistent glow regardless of size
        float widthNormalization = uPillarWidth / 3.0;
        color = tanh(color * uGlowAmount / widthNormalization);

        // Add noise postprocessing
        float rnd = noise(gl_FragCoord.xy);
        color -= rnd / 15.0 * uNoiseIntensity;

        gl_FragColor = vec4(color * uIntensity, 1.0);
      }
    `,I=new lr({vertexShader:D,fragmentShader:P,uniforms:{uTime:{value:0},uResolution:{value:new Pt(T,E)},uMouse:{value:c.value},uTopColor:{value:x(e.topColor)},uBottomColor:{value:x(e.bottomColor)},uIntensity:{value:e.intensity},uInteractive:{value:e.interactive},uGlowAmount:{value:e.glowAmount},uPillarWidth:{value:e.pillarWidth},uPillarHeight:{value:e.pillarHeight},uNoiseIntensity:{value:e.noiseIntensity},uPillarRotation:{value:e.pillarRotation}},transparent:!0,depthWrite:!1,depthTest:!1});s.value=I;const G=new gc(2,2);l.value=G;const $=new Nr(G,I);y.add($);let X=null;const W=de=>{if(!e.interactive||X)return;X=window.setTimeout(()=>{X=null},32);const ke=_.getBoundingClientRect(),$e=(de.clientX-ke.left)/ke.width*2-1,je=-((de.clientY-ke.top)/ke.height)*2+1;c.value.set($e,je)};e.interactive&&_.addEventListener("mousemove",W,{passive:!0});const B=new IntersectionObserver(de=>{f.value=de[0]?.isIntersecting??!0},{threshold:.01});B.observe(_);let te=performance.now();const le=1e3/e.targetFPS,k=de=>{if(i.value=requestAnimationFrame(k),!s.value||!r.value||!o.value||!a.value||!f.value)return;const ke=de-te;ke>=le&&(u.value+=.016*e.rotationSpeed,s.value.uniforms.uTime.value=u.value,r.value.render(o.value,a.value),te=de-ke%le)};i.value=requestAnimationFrame(k);const xe=new ResizeObserver(de=>{if(!de.length||!r.value||!s.value)return;const{width:ke,height:$e}=de[0].contentRect;if(ke===0||$e===0)return;const je=Math.round(ke*w),re=Math.round($e*w);r.value.setSize(je,re,!1),s.value.uniforms.uResolution.value.set(je,re)});xe.observe(_),d=()=>{B.disconnect(),xe.disconnect(),e.interactive&&_.removeEventListener("mousemove",W),i.value&&cancelAnimationFrame(i.value),r.value&&(r.value.dispose(),r.value.forceContextLoss(),_.contains(r.value.domElement)&&_.removeChild(r.value.domElement)),s.value&&s.value.dispose(),l.value&&l.value.dispose(),r.value=null,s.value=null,o.value=null,a.value=null,l.value=null,i.value=null}};return Ni(()=>{m()}),xp(()=>{d?.()}),Eo(()=>[e.topColor,e.bottomColor,e.intensity,e.rotationSpeed,e.interactive,e.glowAmount,e.pillarWidth,e.pillarHeight,e.noiseIntensity,e.pillarRotation,e.resolutionScale,e.targetFPS,h.value],()=>{d?.(),m()},{deep:!0}),(_,p)=>h.value?(Fe(),Ge("div",{key:1,ref_key:"containerRef",ref:t,class:Xn(["light-pillar-container",n.className]),style:Lo({mixBlendMode:n.mixBlendMode})},null,6)):(Fe(),Ge("div",{key:0,class:"light-pillar-fallback",style:Lo({mixBlendMode:n.mixBlendMode})}," WebGL not supported ",4))}}),D2=cr(P2,[["__scopeId","data-v-af8fa38a"]]),L2={id:"footer"},I2={class:"container"},N2={class:"footer-cta-content"},U2={class:"availability-badge"},F2={class:"footer-bottom"},O2={class:"footer-nav"},k2={__name:"AppFooter",setup(n){const{t:e}=zo();we.registerPlugin(et);const t=qe(null),i=qe(document.documentElement.getAttribute("data-theme")||"dark");let r=null;Ni(()=>{we.from(t.value,{scrollTrigger:{trigger:t.value,start:"top 88%"},y:50,opacity:0,duration:.9,ease:"power3.out"}),r=new MutationObserver(()=>{i.value=document.documentElement.getAttribute("data-theme")||"dark"}),r.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})}),$a(()=>{r?.disconnect()});const s=An(()=>i.value==="light"?"#c1c3cb":"#48FF28"),o=An(()=>i.value==="light"?"#c1c3cb":"#9EF19E"),a=An(()=>i.value==="light"?.8:.7);return(l,c)=>{const u=ko("router-link");return Fe(),Ge("footer",L2,[R("div",I2,[R("div",{class:"footer-cta",ref_key:"ctaEl",ref:t},[ft(D2,{topColor:s.value,bottomColor:o.value,intensity:a.value,rotationSpeed:.8,glowAmount:.002,pillarWidth:3.3,pillarHeight:.4,noiseIntensity:0,pillarRotation:25,interactive:!0,resolutionScale:100,targetFPS:60,mixBlendMode:"screen"},null,8,["topColor","bottomColor","intensity"]),R("div",N2,[R("div",U2,[c[0]||(c[0]=R("span",{class:"availability-dot"},null,-1)),Rt(" "+ce(Se(e)("contact.letsWork"))+" "+ce(Se(e)("contact.together")),1)]),R("h2",null,[Rt(ce(Se(e)("contact.letsWork")),1),c[1]||(c[1]=R("br",null,null,-1)),Rt(ce(Se(e)("contact.together"))+".",1)]),ft(u,{to:"/contact",class:"btn btn-outline"},{default:Qt(()=>[Rt(ce(Se(e)("nav.contact")),1)]),_:1}),c[2]||(c[2]=Da('<div class="social-links" style="justify-content:center;margin-top:32px;" data-v-180ae6c5><a href="https://github.com/tigcom" class="social-link" aria-label="GitHub" target="_blank" data-v-180ae6c5><i class="fab fa-github" data-v-180ae6c5></i></a><a href="https://www.linkedin.com/in/phuc-khang-5744b62a4/" class="social-link" aria-label="LinkedIn" target="_blank" data-v-180ae6c5><i class="fab fa-linkedin" data-v-180ae6c5></i></a></div>',1))])],512),R("div",F2,[c[3]||(c[3]=R("p",{class:"footer-copyright"},"© 2026 Phuc Khang. All rights reserved.",-1)),R("nav",O2,[ft(u,{to:"/"},{default:Qt(()=>[Rt(ce(Se(e)("nav.home")),1)]),_:1}),ft(u,{to:"/about"},{default:Qt(()=>[Rt(ce(Se(e)("nav.about")),1)]),_:1}),ft(u,{to:"/projects"},{default:Qt(()=>[Rt(ce(Se(e)("nav.projects")),1)]),_:1}),ft(u,{to:"/contact"},{default:Qt(()=>[Rt(ce(Se(e)("nav.contact")),1)]),_:1})])])])])}}},B2=cr(k2,[["__scopeId","data-v-180ae6c5"]]),z2={class:"app-wrapper"},V2={__name:"App",setup(n){we.registerPlugin(et);const e=qe(!0),t=qe(!1),i=qe(null);(function(){const g=localStorage.getItem("portfolio-theme")||"dark";document.documentElement.setAttribute("data-theme",g)})();let r=null;function s(){e.value=!1}function o(){r&&r.scrollTo(0,{duration:1.2,easing:p=>Math.min(1,1.001-Math.pow(2,-10*p))})}let a=0,l=0,c=0,u=0,h=null;function f(p){a=p.clientX,l=p.clientY}function d(){i.value&&(c+=(a-c)*.07,u+=(l-u)*.07,i.value.style.transform=`translate(${c-200}px, ${u-200}px)`),h=requestAnimationFrame(d)}function m({scroll:p}){t.value=p>400}return c1().afterEach(()=>{r?.scrollTo(0,{immediate:!0}),setTimeout(()=>et.refresh(),150)}),Ni(()=>{r=new tT({duration:1.25,easing:g=>Math.min(1,1.001-Math.pow(2,-10*g)),smoothWheel:!0,touchMultiplier:1.8,infinite:!1}),we.ticker.add(g=>{r.raf(g*1e3)}),we.ticker.lagSmoothing(0),r.on("scroll",et.update),r.on("scroll",m),document.addEventListener("mousemove",f,{passive:!0}),d();const p=we.timeline({scrollTrigger:{trigger:"body",start:"top top",end:"bottom bottom",scrub:!0,invalidateOnRefresh:!0}});p.fromTo("#app",{"--f-top":"0px","--f-top-blur":"0px"},{"--f-top":"100px","--f-top-blur":"50px",duration:1}),p.to({},{duration:8}),p.to("#app",{"--f-bottom":"0px","--f-bottom-blur":"0px",duration:1},">")}),$a(()=>{r&&(r.destroy(),r=null),we.ticker.remove(p=>r?.raf(p*1e3)),document.removeEventListener("mousemove",f),cancelAnimationFrame(h)}),(p,g)=>{const y=ko("router-view");return Fe(),Ge("div",z2,[R("div",{class:"cursor-glow",ref_key:"cursorGlow",ref:i},null,512),e.value?(Fe(),yr(rT,{key:0,onLoaded:s})):er("",!0),e.value?er("",!0):(Fe(),yr(_T,{key:1})),ft(y,null,{default:Qt(({Component:M})=>[ft(cv,{name:"page",mode:"out-in"},{default:Qt(()=>[(Fe(),yr(k0(M)))]),_:2},1024)]),_:1}),e.value?er("",!0):(Fe(),yr(B2,{key:2})),R("button",{class:Xn(["scroll-top-btn",{visible:t.value}]),onClick:o,"aria-label":"Scroll to top"},[...g[0]||(g[0]=[R("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"none",stroke:"currentColor","stroke-width":"2.5",viewBox:"0 0 24 24"},[R("path",{d:"m18 15-6-6-6 6"})],-1)])],2)])}}},H2=JSON.parse('[{"slug":"internet-banking","num":"01","title":{"en":"Internet Banking System","vi":"Hệ thống Internet Banking"},"subtitle":{"en":"Microservices-based Financial Platform","vi":"Nền tảng Tài chính Microservices"},"category":"development","tags":["Microservices","Spring Boot 3.x","Angular"],"year":"2025","img":"/portfolio/image/bank.png","colorBackgound":"#99f6e4","heroImg":"https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=85","galleryImgs":["https://images.unsplash.com/photo-1550565118-3d1428df732f?w=600&q=80","https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80","https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=600&q=80"],"techStack":["Spring Boot 3.x","Spring Security","Angular","MySQL","Kafka","Dubbo","Docker","Prometheus","Grafana","Redis"],"role":{"en":"Java Developer Collaborator (Kien Long Bank)","vi":"Cộng tác viên Phát triển Java (Kien Long Bank)"},"overview":{"en":"Modern Internet Banking system built on Microservices architecture with separate services: Account, Customer, Transaction, Loan, Notification. Focused on high security, scalability, and real-time monitoring.","vi":"Hệ thống Internet Banking hiện đại được xây dựng trên kiến trúc Microservices với các dịch vụ tách biệt: Account, Customer, Transaction, Loan, Notification. Dự án tập trung vào tính bảo mật cao, khả năng mở rộng và giám sát hệ thống thời gian thực."},"problem":{"en":"Building a secure financial system capable of handling thousands of concurrent transactions, ensuring Data Consistency and Resilience across services.","vi":"Xây dựng một hệ thống tài chính an toàn có khả năng xử lý hàng nghìn giao dịch đồng thời, đảm bảo tính nhất quán dữ liệu (Data Consistency) và khả năng phục hồi (Resilience) khi có sự cố dịch vụ."},"processSteps":[{"title":{"en":"Microservices Architecture","vi":"Kiến trúc Microservices"},"description":{"en":"Implemented independent services communicating via REST, gRPC, and Kafka for asynchronous tasks.","vi":"Triển khai các dịch vụ độc lập giao tiếp qua REST, gRPC và Kafka cho các tác vụ bất đồng bộ."}},{"title":{"en":"Loan Service System","vi":"Hệ thống Loan Service"},"description":{"en":"Developed features for loan application, approval, disbursement, and automated monthly installment calculation.","vi":"Phát triển tính năng đăng ký khoản vay, duyệt giải ngân và tự động tính toán kỳ hạn thanh toán hàng tháng."}},{"title":{"en":"Observability & Monitoring","vi":"Giám sát hệ thống"},"description":{"en":"Integrated OpenTelemetry, Zipkin for tracing and Prometheus + Grafana for performance monitoring.","vi":"Tích hợp OpenTelemetry, Zipkin để tracing và Prometheus + Grafana để giám sát hiệu năng hệ thống."}}],"results":[{"value":100,"suffix":"%","label":{"en":"Gateway Security","vi":"Bảo mật API Gateway"}},{"value":200,"suffix":"ms","label":{"en":"Avg Response Time","vi":"Tốc độ phản hồi trung bình"}},{"value":5,"suffix":"Services","label":{"en":"Core Services","vi":"Hệ thống lõi"}},{"value":99.9,"suffix":"%","label":{"en":"Uptime Monitoring","vi":"Uptime giám sát"}}],"githubLink":"","prevSlug":"youtube-clone","prevTitle":{"en":"Youtube Clone","vi":"Youtube Clone"},"nextSlug":"traveloka-clone","nextTitle":{"en":"Traveloka Clone","vi":"Traveloka Clone"}},{"slug":"traveloka-clone","num":"02","title":{"en":"Traveloka Clone (DATN)","vi":"Traveloka Clone (Đồ án tốt nghiệp)"},"subtitle":{"en":"Travel Super App Booking System","vi":"Hệ thống Booking Super App"},"category":"development","tags":["Microservices","Spring Boot 3.x","Vue 3"],"year":"2025","img":"/portfolio/image/travel.png","colorBackgound":"#92c5fc","heroImg":"https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?w=1200&q=85","galleryImgs":["https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80","https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=600&q=80","https://images.unsplash.com/photo-1570126618953-d437176e8c79?w=600&q=80"],"techStack":["Java Spring Boot 3.x","Vue.js","Tailwind CSS","MySQL","Redis","Kafka","Socket.io","Docker"],"role":{"en":"Full Stack Developer","vi":"Nhà phát triển Full Stack"},"overview":{"en":"An online airline and tour booking platform, focusing on complex booking flows, seat holding (TTL), payments, and automated refund/cancellation policies.","vi":"Nền tảng đặt vé máy bay và tour du lịch trực tuyến, tập trung vào luồng booking phức tạp, giữ chỗ (Seat Hold), thanh toán và tự động hoàn vé/hủy vé theo chính sách."},"problem":{"en":"Handling real-time seat synchronization, designing TTL-based auto-cancellation for unpaid orders, and ensuring transparency in the refund process.","vi":"Xử lý đồng bộ trạng thái ghế ngồi theo thời gian thực, thiết kế hệ thống tự động hủy đơn hàng khi quá hạn thanh toán (TTL-based) và đảm bảo tính minh bạch trong quy trình hoàn tiền."},"processSteps":[{"title":{"en":"Core Booking Flow","vi":"Luồng Booking lõi"},"description":{"en":"Built the search, fare selection, seat holding, and ticket issuance process.","vi":"Xây dựng quy trình tìm kiếm, chọn hạng vé, giữ chỗ (TTL) và phát hành vé sau khi thanh toán."}},{"title":{"en":"Seat Hold System","vi":"Hệ thống giữ chỗ"},"description":{"en":"Designed a seat holding system using Redis with Scheduler/Consumer to safely release inventory.","vi":"Thiết kế hệ thống giữ chỗ sử dụng Redis kết hợp Scheduler/Consumer để giải phóng inventory an toàn."}},{"title":{"en":"Real-time Dashboard","vi":"Dashboard thời gian thực"},"description":{"en":"Used Socket.io to provide real-time status updates for orders and flights to the Admin panel.","vi":"Sử dụng Socket.io để cập nhật trạng thái đơn hàng và chuyến bay theo thời gian thực cho Admin."}}],"results":[{"value":100,"suffix":"%","label":{"en":"Auto-cancel accuracy","vi":"Tự động hủy vé quá hạn"}},{"value":50,"suffix":"ms","label":{"en":"Socket latency","vi":"Độ trễ cập nhật Socket"}},{"value":98,"suffix":"%","label":{"en":"Inventory accuracy","vi":"Chính xác Inventory"}}],"githubLink":"https://github.com/thanhlam2802/DATN","prevSlug":"internet-banking","prevTitle":{"en":"Internet Banking","vi":"Internet Banking"},"nextSlug":"sixdo-ecommerce","nextTitle":{"en":"Sixdo E-commerce","vi":"Sixdo E-commerce"}},{"slug":"sixdo-ecommerce","num":"03","title":{"en":"Sixdo E-commerce Platform","vi":"Nền tảng Thương mại điện tử Sixdo"},"subtitle":{"en":"Modern Fullstack Shopping Solution","vi":"Giải pháp Mua sắm Fullstack Hiện đại"},"category":"development","tags":["Spring Boot","Next.js","PostgreSQL"],"year":"2025","img":"/portfolio/image/siso.png","colorBackgound":"#fef3c6","heroImg":"https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=85","galleryImgs":[],"techStack":["Java Spring Boot","Next.js","React","PostgreSQL","Flyway","Spring Security","Tailwind CSS"],"role":{"en":"Full Stack Developer","vi":"Nhà phát triển Full Stack"},"overview":{"en":"A modern e-commerce platform synchronized between Backend (Spring Boot) and Frontend (Next.js), focusing on performance and a smooth user experience.","vi":"Nền tảng thương mại điện tử hiện đại đồng bộ giữa Backend (Spring Boot) và Frontend (Next.js), tập trung vào hiệu năng và trải nghiệm người dùng mượt mà."},"problem":{"en":"Synchronizing data across different platforms, managing shopping cart states, and securing APIs with Spring Security.","vi":"Xử lý đồng bộ dữ liệu giữa hai nền tảng khác nhau, quản lý trạng thái giỏ hàng và bảo mật API với Spring Security."},"processSteps":[{"title":{"en":"RESTful API Design","vi":"Thiết kế API RESTful"},"description":{"en":"Standardized API endpoints for products and categories management.","vi":"Chuẩn hóa các endpoint API để quản lý sản phẩm và danh mục."}},{"title":{"en":"Database Migration","vi":"Di cư dữ liệu"},"description":{"en":"Implemented Flyway to manage database schema versions consistently.","vi":"Triển khai Flyway để quản lý các phiên bản cấu trúc cơ sở dữ liệu một cách nhất quán."}},{"title":{"en":"Next.js Integration","vi":"Tích hợp Next.js"},"description":{"en":"Leveraged Next.js App Router and Server Components for optimal frontend performance.","vi":"Tận dụng App Router và Server Components của Next.js để tối ưu hiệu năng frontend."}}],"results":[],"githubLink":"https://github.com/tigcom/cloneSixdo","prevSlug":"traveloka-clone","prevTitle":{"en":"Traveloka Clone","vi":"Traveloka Clone"},"nextSlug":"motorbike-sales-system","nextTitle":{"en":"Motorbike Sales System","vi":"Motorbike Sales System"}},{"slug":"motorbike-sales-system","num":"04","title":{"en":"Motorbike Sales & Management System","vi":"Hệ thống Quản lý Bán xe máy"},"subtitle":{"en":"Multi-branch Desktop Solution","vi":"Giải pháp Desktop Quản lý Đa chi nhánh"},"category":"development","tags":["Desktop App","Java Swing","SQL Server"],"year":"2024","img":"/portfolio/image/byke.png","colorBackgound":"#a7c5c7","heroImg":"https://images.unsplash.com/photo-1558981403-c5f91cbba527?w=1200&q=85","galleryImgs":[],"techStack":["Java (Swing/AWT)","JDBC","SQL Server","Apache POI"],"role":{"en":"Full Stack Developer","vi":"Nhà phát triển Full Stack"},"overview":{"en":"A comprehensive desktop application for large-scale motorbike dealers, handling inventory, sales, employees, and maintenance across multiple branches.","vi":"Hệ thống quản lý kinh doanh xe máy toàn diện dành cho các đại lý có quy mô lớn với nhiều chi nhánh, tích hợp từ khâu nhập hàng, bán hàng đến bảo hành."},"problem":{"en":"Synchronizing inventory across multiple branches, managing periodic maintenance schedules, and automating revenue reports.","vi":"Đồng bộ hóa dữ liệu tồn kho giữa nhiều chi nhánh khác nhau, quản lý lịch bảo dưỡng định kỳ và tự động hóa báo cáo doanh thu."},"processSteps":[{"title":{"en":"Multi-branch Logic","vi":"Nghiệp vụ Đa chi nhánh"},"description":{"en":"Designed a database schema to isolate and aggregate data across different physical locations.","vi":"Thiết kế cấu trúc cơ sở dữ liệu để tách biệt và tổng hợp dữ liệu giữa các chi nhánh vật lý khác nhau."}},{"title":{"en":"Maintenance Scheduler","vi":"Quản lý Bảo dưỡng"},"description":{"en":"Built a notification system for customer service staff to track and remind maintenance schedules.","vi":"Xây dựng hệ thống theo dõi và nhắc nhở lịch bảo dưỡng định kỳ cho nhân viên chăm sóc khách hàng."}},{"title":{"en":"Export Reporting","vi":"Xuất báo cáo tự động"},"description":{"en":"Integrated Apache POI to export professional Excel reports for sales and inventory tracking.","vi":"Tích hợp Apache POI để xuất các báo cáo Excel chuyên nghiệp cho việc theo dõi doanh thu và kho hàng."}}],"results":[],"githubLink":"https://github.com/tigcom/MotorbikeSalesSystem","prevSlug":"sixdo-ecommerce","prevTitle":{"en":"Sixdo E-commerce","vi":"Sixdo E-commerce"},"nextSlug":"phong-vu-clone","nextTitle":{"en":"Phong Vu Shop Clone","vi":"Phong Vu Shop Clone"}},{"slug":"phong-vu-clone","num":"05","title":{"en":"Phong Vu Shop Clone","vi":"Clone Cửa hàng Phong Vũ"},"subtitle":{"en":"E-commerce Electronics Store","vi":"Cửa hàng Điện tử E-commerce"},"category":"development","tags":["Spring Boot","Thymeleaf","SQL Server"],"year":"2025","img":"/portfolio/image/phongvu.png","colorBackgound":"#121317","heroImg":"https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&q=85","galleryImgs":[],"techStack":["Spring Boot","Thymeleaf","Tailwind CSS","JPA","SQL Server"],"role":{"en":"Backend Developer","vi":"Nhà phát triển Backend"},"overview":{"en":"A clone project of the Phong Vu e-commerce website, featuring a complete flow from product management, shopping cart, to checkout and automated email confirmations.","vi":"Dự án mô phỏng website thương mại điện tử Phong Vũ, tích hợp đầy đủ quy trình từ quản lý sản phẩm, giỏ hàng đến đặt hàng và gửi email xác nhận tự động."},"problem":{"en":"Efficiently managing shopping cart state (session-based) and automating order confirmation notifications to customers via email.","vi":"Quản lý trạng thái giỏ hàng hiệu quả (Session-based) và tự động hóa quy trình thông báo đơn hàng cho khách hàng qua email."},"processSteps":[{"title":{"en":"Product Management","vi":"Quản lý sản phẩm"},"description":{"en":"Designed a flexible CRUD system for products with advanced categorization and search.","vi":"Thiết kế hệ thống CRUD sản phẩm linh hoạt với phân loại và tìm kiếm nâng cao."}},{"title":{"en":"Automated Email","vi":"Email tự động"},"description":{"en":"Used @Scheduled tasks to automatically send order confirmation emails and status updates.","vi":"Sử dụng @Scheduled tasks để tự động gửi email xác nhận đơn hàng và cập nhật trạng thái."}}],"results":[],"githubLink":"","prevSlug":"motorbike-sales-system","prevTitle":{"en":"Motorbike Sales System","vi":"Motorbike Sales System"},"nextSlug":"youtube-clone","nextTitle":{"en":"Youtube Clone","vi":"Youtube Clone"}},{"slug":"youtube-clone","num":"06","title":{"en":"Youtube Clone Website","vi":"Clone Website Youtube"},"subtitle":{"en":"Video Sharing Platform","vi":"Nền tảng Chia sẻ Video"},"category":"development","tags":["Java Servlet","JSP","SQL Server"],"year":"2024","img":"/portfolio/image/ytu.png","colorBackgound":"#fbcfe8","heroImg":"https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=1200&q=85","galleryImgs":[],"techStack":["Java Servlet","JSP","Bootstrap","JavaScript","SQL Server"],"role":{"en":"Full Stack Developer","vi":"Nhà phát triển Full Stack"},"overview":{"en":"An online video sharing website with real-time interactive features, video management, and traffic statistics for the Admin.","vi":"Website chia sẻ video trực tuyến với các tính năng tương tác thời gian thực, quản lý video và thống kê lưu lượng truy cập cho Admin."},"problem":{"en":"Handling user interactions (Like, Comment, Subscribe) smoothly and implementing voice search for videos.","vi":"Xử lý các tương tác người dùng (Like, Comment, Subscribe) mượt mà và tìm kiếm video bằng giọng nói."},"processSteps":[{"title":{"en":"Voice Search","vi":"Tìm kiếm bằng giọng nói"},"description":{"en":"Integrated Web Speech API to support voice-based video search.","vi":"Tích hợp Web Speech API để hỗ trợ người dùng tìm kiếm video bằng giọng nói."}},{"title":{"en":"Real-time Stats","vi":"Thống kê thời gian thực"},"description":{"en":"Tracked live viewer counts and traffic statistics for the admin panel.","vi":"Theo dõi số lượng người xem trực tiếp và thống kê truy cập cho trang quản trị."}}],"results":[],"githubLink":"","prevSlug":"phong-vu-clone","prevTitle":{"en":"Phong Vu Shop Clone","vi":"Phong Vu Shop Clone"},"nextSlug":"internet-banking","nextTitle":{"en":"Internet Banking","vi":"Internet Banking"}}]'),Ca=H2,Ra=!1;function G2(n,e="vi"){const t=Ca.find(r=>r.slug===n)||Ca[0],i=r=>r&&typeof r=="object"&&r[e]?r[e]:r;return{...t,title:i(t.title),subtitle:i(t.subtitle),role:i(t.role),overview:i(t.overview),problem:i(t.problem),prevTitle:i(t.prevTitle),nextTitle:i(t.nextTitle),processSteps:t.processSteps.map(r=>({title:i(r.title),description:i(r.description)})),results:t.results.map(r=>({...r,label:i(r.label)}))}}const W2={class:"home-view"},X2={class:"container"},q2={class:"home-hero-inner"},$2={class:"home-hero-content"},Y2={class:"title-line"},K2={class:"title-line hero-highlight"},j2={class:"title-line"},Z2={class:"title-line"},J2={class:"hero-card-stack"},Q2={class:"hero-stat-card hero-stat-card--1"},e3={class:"hero-stat-label"},t3={class:"hero-stat-card hero-stat-card--2"},n3={class:"hero-stat-label"},i3={class:"hero-stat-card hero-stat-card--3"},r3={class:"hero-stat-label"},s3={class:"marquee-section"},o3={class:"marquee-track"},a3={class:"tech-badge-icon"},l3={class:"section selected-projects-section"},c3={class:"container"},u3={class:"sp-header"},f3={class:"shimmer"},h3=["src","alt"],d3={class:"sp-card-info"},p3={class:"sp-card-meta"},m3={class:"sp-card-title"},g3={class:"sp-card-subtitle"},_3={class:"sp-year"},v3={class:"sp-footer"},x3={class:"btn-inner"},S3={class:"btn-label-default"},y3={class:"btn-label-hover","aria-hidden":"true"},b3={class:"section expertise-section"},M3={class:"container"},E3={class:"section-label"},T3={class:"shimmer"},w3={class:"section-heading"},A3={class:"expertise-grid"},C3=["data-delay"],R3={class:"expertise-num"},P3={class:"expertise-icon"},D3={class:"expertise-tags"},L3={class:"section testimonials-section"},I3={class:"container"},N3={class:"section-label"},U3={class:"shimmer"},F3={class:"section-heading"},O3={class:"testimonials-wrapper"},k3={class:"testi-row testi-row--ltr"},B3={class:"testi-text"},z3={class:"testi-author"},V3={class:"testi-avatar"},H3={class:"testi-row testi-row--rtl"},G3={class:"testi-text"},W3={class:"testi-author"},X3={class:"testi-avatar"},q3={__name:"HomeView",setup(n){const{state:e,t}=zo();we.registerPlugin(et);const i={template:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>'},r={mounted(E){we.set(E,{opacity:0,y:40}),et.create({trigger:E,start:"top 88%",once:!0,onEnter:()=>we.to(E,{opacity:1,y:0,duration:.8,ease:"power3.out"})})}},s=Ca.slice(0,4),o=[{icon:"fab fa-java",name:"Java"},{icon:"fas fa-leaf",name:"Spring Boot"},{icon:"fas fa-database",name:"Hibernate/JPA"},{icon:"fas fa-microchip",name:"Microservices"},{icon:"fas fa-stream",name:"Kafka"},{icon:"fas fa-sync",name:"gRPC/Dubbo"},{icon:"fab fa-vuejs",name:"Vue 3"},{icon:"fab fa-angular",name:"Angular"},{icon:"fab fa-docker",name:"Docker"},{icon:"fas fa-server",name:"MySQL/SQL"},{icon:"fas fa-bolt",name:"Redis"},{icon:"fas fa-key",name:"OAuth2/JWT"}],a=[{num:"01",icon:"fas fa-server",title:"Backend Development",desc:"Xây dựng hệ thống Microservices mạnh mẽ với Spring Boot, tối ưu hóa hiệu năng và khả năng mở rộng.",tags:["Java","Spring Boot","Kafka"]},{num:"02",icon:"fas fa-laptop-code",title:"Full-Stack Integration",desc:"Kết nối liền mạch giữa Backend Microservices và Frontend hiện đại (Vue.js/Angular).",tags:["Vue","Angular","REST API"]},{num:"03",icon:"fas fa-shield-alt",title:"Security & Observability",desc:"Triển khai bảo mật JWT/OAuth2 và giám sát hệ thống với Prometheus, Grafana, OpenTelemetry.",tags:["Spring Security","Monitoring","Tracing"]},{num:"04",icon:"fab fa-docker",title:"DevOps & Infrastructure",desc:"Quản lý cấu hình và triển khai ứng dụng mượt mà với Docker, Docker Compose và HashiCorp Vault.",tags:["Docker","Vault","CI/CD"]}],l=[{initials:"GV",name:"Giảng viên FPT",role:"FPT Polytechnic",text:"Phúc Khang là một sinh viên xuất sắc, khả năng tự học và nắm bắt công nghệ mới rất nhanh. GPA 9.0 là minh chứng cho sự nỗ lực của em."},{initials:"ĐN",name:"Đồng nghiệp Kien Long",role:"Java Developer",text:"Khang làm việc rất trách nhiệm, các service trong hệ thống Internet Banking do Khang đảm nhiệm luôn ổn định và đạt hiệu năng tốt."},{initials:"BB",name:"Bạn cùng team DATN",role:"Full-Stack Developer",text:"Tư duy hệ thống của Khang rất tốt, đặc biệt là phần kiến trúc Microservices. Rất vui khi được cùng thực hiện đồ án tốt nghiệp với bạn."},{initials:"KH",name:"Khách hàng Freelance",role:"Project Owner",text:"Giao diện website Khang làm rất hiện đại, hiệu ứng mượt mà và đúng yêu cầu. Khả năng tích hợp Backend của bạn rất chuyên nghiệp."},{initials:"ĐN",name:"Trưởng nhóm Backend",role:"Senior Developer",text:"Khang có khả năng giải quyết vấn đề logic rất tốt, các luồng API phức tạp đều được bạn xử lý gọn gàng và dễ bảo trì."},{initials:"GV",name:"Giảng viên hướng dẫn",role:"Software Major",text:"Đồ án tốt nghiệp của Khang đạt độ hoàn thiện cao, quy trình triển khai Microservices và Docker rất chuẩn chỉ."},{initials:"BB",name:"Bạn học FPT",role:"Mobile Developer",text:"Luôn ngưỡng mộ cách Khang quản lý thời gian để vừa học vừa đi làm cộng tác viên tại ngân hàng mà vẫn giữ được thành tích top đầu."},{initials:"KH",name:"Đối tác dự án",role:"Tech Lead",text:"Phúc Khang là một Full-Stack Developer có tiềm năng lớn, thái độ cầu tiến và luôn chủ động trong công việc."}],c=qe(-1);function u(E){c.value=E;const v=S.value?.querySelectorAll(".sp-card");v?.length&&v.forEach((x,D)=>{const P=x.querySelector(".sp-card-img");D===E?(we.to(P,{scale:1.05,duration:.55,ease:"cubic-bezier(0.45, 0, 0.55, 1)"}),we.to(x,{opacity:1,duration:.4,ease:"cubic-bezier(0.25, 0.8, 0.25, 1)"})):(we.to(P,{scale:1,duration:.55,ease:"cubic-bezier(0.45, 0, 0.55, 1)"}),we.to(x,{opacity:.38,duration:.4,ease:"cubic-bezier(0.25, 0.8, 0.25, 1)"}))})}function h(){c.value=-1;const E=S.value?.querySelectorAll(".sp-card");E?.length&&E.forEach(v=>{const x=v.querySelector(".sp-card-img");we.to(x,{scale:1,duration:.55,ease:"cubic-bezier(0.45, 0, 0.55, 1)"}),we.to(v,{opacity:1,duration:.4,ease:"cubic-bezier(0.25, 0.8, 0.25, 1)"})})}const f=qe(null),d=qe(null),m=qe(null),_=qe(null),p=qe(null),g=qe(null),y=qe(null),M=qe(null),S=qe(null),w=qe(null);function T(){const E=w.value?.$el;E&&(we.killTweensOf(E),we.timeline().to(E,{scale:1.07,duration:.2,ease:"power2.out"}).to(E,{scale:.96,duration:.16,ease:"power2.inOut"}).to(E,{scale:1,duration:.24,ease:"back.out(2.5)"}))}return Ni(()=>{const E=we.timeline({delay:.1,defaults:{ease:"power3.out"}});E.fromTo(d.value,{opacity:0,x:-30},{opacity:1,x:0,duration:.6},0),E.fromTo(m.value.querySelectorAll(".title-line"),{yPercent:110,opacity:0},{yPercent:0,opacity:1,stagger:.08,duration:.85},.2),E.fromTo(_.value,{opacity:0,y:20},{opacity:1,y:0,duration:.6},.7),E.fromTo(p.value,{opacity:0,y:20},{opacity:1,y:0,duration:.5},.85),E.fromTo(g.value,{opacity:0,x:60,scale:.95},{opacity:1,x:0,scale:1,duration:1},.25),E.fromTo(".hero-stat-card",{opacity:0,scale:.6,y:20},{opacity:1,scale:1,y:0,stagger:.15,duration:.5,ease:"back.out(1.7)"},.95),we.to(".hero-stat-card--1",{y:-10,duration:2.5,repeat:-1,yoyo:!0,ease:"sine.inOut"}),we.to(".hero-stat-card--2",{y:8,duration:2.2,repeat:-1,yoyo:!0,ease:"sine.inOut",delay:.5}),we.to(".hero-stat-card--3",{y:-6,duration:3,repeat:-1,yoyo:!0,ease:"sine.inOut",delay:1}),et.create({trigger:y.value,start:"top 88%",once:!0,onEnter:()=>{we.timeline({defaults:{ease:"power3.out"}}).fromTo(y.value,{opacity:0,x:-20},{opacity:1,x:0,duration:.5}).fromTo(M.value,{opacity:0,y:24},{opacity:1,y:0,duration:.65},.2)}});const v=S.value?.querySelectorAll(".sp-card");v?.length&&(we.set(v,{opacity:0,y:64}),et.create({trigger:S.value,start:"top 82%",once:!0,onEnter:()=>{we.to(v,{opacity:1,y:0,duration:.85,stagger:{each:.13,from:"start"},ease:"power3.out",onComplete:()=>we.set(v,{clearProps:"opacity,transform"})})}}))}),(E,v)=>{const x=ko("router-link");return Fe(),Ge("main",W2,[R("section",{class:"home-hero section",ref_key:"heroSection",ref:f},[R("div",X2,[R("div",q2,[R("div",$2,[R("div",{class:"hero-label",ref_key:"heroLabel",ref:d},[v[1]||(v[1]=R("span",{class:"status-dot"},null,-1)),R("span",null,ce(Se(t)("home.heroLabel")),1)],512),R("h1",{class:"home-hero-title",ref_key:"heroTitle",ref:m},[R("span",Y2,ce(Se(t)("home.heroTitleLine1")),1),R("span",K2,ce(Se(t)("home.heroTitleHighlight")),1),R("span",j2,ce(Se(t)("home.heroTitleLine3")),1),R("span",Z2,ce(Se(t)("home.heroTitleLine4")),1)],512),R("p",{class:"home-hero-desc",ref_key:"heroDesc",ref:_},ce(Se(t)("home.heroDesc")),513),R("div",{class:"home-hero-btns",ref_key:"heroBtns",ref:p},[ft(x,{to:"/projects",class:"btn btn-outline"},{default:Qt(()=>[Rt(ce(Se(t)("home.viewProjects")),1)]),_:1}),ft(x,{to:"/about",class:"btn btn-ghost"},{default:Qt(()=>[Rt(ce(Se(t)("home.knowMe")),1)]),_:1})],512)]),R("div",{class:"home-hero-visual",ref_key:"heroVisual",ref:g},[R("div",J2,[v[8]||(v[8]=R("div",{class:"hero-card hero-card--main"},[R("img",{src:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&q=85",alt:"Workspace",class:"hero-card-img"}),R("div",{class:"hero-card-overlay"},[R("span",{class:"hero-card-tag"},"Full-Stack Dev")])],-1)),R("div",Q2,[v[3]||(v[3]=R("div",{class:"hero-stat-icon"},[R("i",{class:"fas fa-graduation-cap"})],-1)),R("div",null,[v[2]||(v[2]=R("div",{class:"hero-stat-num"},"3.8/4",-1)),R("div",e3,ce(Se(t)("home.gpa")),1)])]),R("div",t3,[v[5]||(v[5]=R("div",{class:"hero-stat-icon"},[R("i",{class:"fas fa-bolt"})],-1)),R("div",null,[v[4]||(v[4]=R("div",{class:"hero-stat-num"},"3+",-1)),R("div",n3,ce(Se(t)("home.excellentSems")),1)])]),R("div",i3,[v[7]||(v[7]=R("div",{class:"hero-stat-icon"},[R("i",{class:"fas fa-university"})],-1)),R("div",null,[v[6]||(v[6]=R("div",{class:"hero-stat-num"},"Kien Long",-1)),R("div",r3,ce(Se(t)("home.bankExp")),1)])])])],512)])]),v[9]||(v[9]=R("div",{class:"scroll-indicator"},[R("div",{class:"scroll-indicator-line"}),R("span",null,"Scroll")],-1))],512),R("div",s3,[v[10]||(v[10]=R("div",{class:"marquee-fade-left"},null,-1)),v[11]||(v[11]=R("div",{class:"marquee-fade-right"},null,-1)),R("div",o3,[(Fe(!0),Ge(St,null,Kt([...o,...o],(D,P)=>(Fe(),Ge("span",{key:P,class:"tech-badge"},[R("span",a3,[R("i",{class:Xn(D.icon)},null,2)]),Rt(" "+ce(D.name),1)]))),128))])]),R("section",l3,[R("div",c3,[R("div",u3,[R("div",{class:"section-label",ref_key:"spLabel",ref:y},[ft(i),R("span",f3,ce(Se(t)("home.selectedProjects")),1)],512),R("h2",{class:"sp-title",ref_key:"spTitle",ref:M},ce(Se(t)("home.selectedProjectsDesc")),513)]),R("div",{class:"sp-grid",ref_key:"spGrid",ref:S,onMouseleave:h},[(Fe(!0),Ge(St,null,Kt(Se(s),(D,P)=>(Fe(),yr(x,{key:D.slug,to:Se(Ra)?`/projects/${D.slug}`:"",class:Xn(["sp-card",{"sp-card--stagger":P%2===1,"sp-card--disabled":!Se(Ra)}]),onMouseenter:I=>u(P),onClick:v[0]||(v[0]=I=>!Se(Ra)&&I.preventDefault())},{default:Qt(()=>[R("div",{class:"sp-card-img-wrap",style:Lo({backgroundColor:D.colorBackgound})},[R("img",{src:D.img,alt:D.title[Se(e).lang],class:"sp-card-img",loading:"lazy"},null,8,h3)],4),R("div",d3,[R("div",p3,[R("div",null,[R("h3",m3,ce(D.title[Se(e).lang]),1),R("p",g3,ce(D.subtitle[Se(e).lang]),1)]),R("span",_3,ce(D.year),1)])])]),_:2},1032,["to","class","onMouseenter"]))),128))],544),R("div",v3,[ft(x,{to:"/projects",class:"view-all-btn",ref_key:"viewAllBtn",ref:w,onMouseenter:T},{default:Qt(()=>[R("span",x3,[R("span",S3,ce(Se(t)("home.viewAllProjects")),1),R("span",y3,ce(Se(t)("home.viewAllProjects")),1)])]),_:1},512)])])]),R("section",b3,[R("div",M3,[on((Fe(),Ge("div",E3,[ft(i),R("span",T3,ce(Se(t)("home.areasOfExpertise")),1)])),[[r]]),on((Fe(),Ge("h2",w3,[Rt(ce(Se(t)("home.whatIDoBest")),1)])),[[r]]),R("div",A3,[(Fe(),Ge(St,null,Kt(a,(D,P)=>on(R("div",{key:D.title,class:"expertise-card","data-delay":P*.1},[R("div",R3,ce(D.num),1),R("div",P3,[R("i",{class:Xn(D.icon)},null,2)]),R("h3",null,ce(D.title),1),R("p",null,ce(D.desc),1),R("div",D3,[(Fe(!0),Ge(St,null,Kt(D.tags,I=>(Fe(),Ge("span",{key:I,class:"tag"},ce(I),1))),128))])],8,C3),[[r]])),64))])])]),R("section",L3,[R("div",I3,[on((Fe(),Ge("div",N3,[ft(i),R("span",U3,ce(Se(t)("home.whatOthersSay")),1)])),[[r]]),on((Fe(),Ge("h2",F3,[Rt(ce(Se(t)("home.amazingPeople")),1)])),[[r]])]),R("div",O3,[R("div",k3,[(Fe(!0),Ge(St,null,Kt([...l.slice(0,4),...l.slice(0,4)],(D,P)=>(Fe(),Ge("div",{key:P,class:"testi-card"},[R("p",B3,'"'+ce(D.text)+'"',1),R("div",z3,[R("div",V3,ce(D.initials),1),R("div",null,[R("strong",null,ce(D.name),1),R("span",null,ce(D.role),1)])])]))),128))]),R("div",H3,[(Fe(!0),Ge(St,null,Kt([...l.slice(4),...l.slice(4)],(D,P)=>(Fe(),Ge("div",{key:P,class:"testi-card"},[R("p",G3,'"'+ce(D.text)+'"',1),R("div",W3,[R("div",X3,ce(D.initials),1),R("div",null,[R("strong",null,ce(D.name),1),R("span",null,ce(D.role),1)])])]))),128))])])])])}}},$3=cr(q3,[["__scopeId","data-v-812459f4"]]),Y3="/portfolio/assets/khang-BFEabWvn.png",K3="/portfolio/assets/CV_EN-1%20(2)-BXUISa5O.pdf",j3={class:"about-view"},Z3={class:"about-hero section"},J3={class:"container"},Q3={class:"ab-hero-inner"},eD={class:"ab-hero-img-wrapper"},tD=["src"],nD={class:"about-cta-wrap"},iD=["href"],rD={class:"ab-exp-badge"},sD={class:"ab-exp-text"},oD={class:"shimmer"},aD={class:"ab-stat-num"},lD={class:"ab-stat-label"},cD={class:"marquee-section"},uD={class:"marquee-track"},fD={class:"tech-badge-icon"},hD={class:"section experience-section"},dD={class:"container"},pD={class:"section-label"},mD={class:"shimmer"},gD={class:"section-heading"},_D={class:"accordion-list"},vD=["onClick"],xD={class:"acc-left"},SD={class:"acc-num"},yD={class:"acc-right"},bD={class:"acc-period"},MD={class:"acc-tags"},ED={class:"section awards-section"},TD={class:"container"},wD={class:"section-label"},AD={class:"shimmer"},CD={class:"section-heading"},RD={class:"awards-list"},PD={class:"award-left"},DD={class:"award-num"},LD={key:0,href:"https://caodang.fpt.edu.vn/tin-tuc-poly/sinh-vien-fpt-polytechnic-tp-hcm-xay-dung-thanh-cong-website-bang-javascript-du-moi-hoc-nam-nhat.html",target:"_blank",class:"award-feature-link"},ID={class:"award-year"},ND={__name:"AboutView",setup(n){const{state:e,t}=zo();we.registerPlugin(et);const i={template:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>'},r={mounted(M){we.set(M,{opacity:0,y:40}),et.create({trigger:M,start:"top 88%",once:!0,onEnter:()=>we.to(M,{opacity:1,y:0,duration:.8,ease:"power3.out"})})}},s=[{icon:"fab fa-java",name:"Java"},{icon:"fas fa-leaf",name:"Spring Boot"},{icon:"fas fa-database",name:"Hibernate/JPA"},{icon:"fas fa-microchip",name:"Microservices"},{icon:"fas fa-stream",name:"Kafka"},{icon:"fas fa-sync",name:"gRPC/Dubbo"},{icon:"fab fa-vuejs",name:"Vue 3"},{icon:"fab fa-angular",name:"Angular"},{icon:"fab fa-docker",name:"Docker"},{icon:"fas fa-server",name:"MySQL/SQL"},{icon:"fas fa-bolt",name:"Redis"},{icon:"fas fa-key",name:"OAuth2/JWT"}],o=[{value:"3.8/4",label:"about.gpaAchievement"},{value:"3",label:"about.excellentSems"},{value:"5+",label:"about.coreServices"},{value:"2+",label:"about.yearExpShort"}],a=[{num:"01",company:"Kien Long Bank",role:{en:"Java Developer Collaborator",vi:"Cộng tác viên Phát triển Java"},period:"03/2025 — Present",desc:{en:"Participated in building an Internet Banking system based on Microservices architecture. Responsible for the Loan Service (Loan application, approval, disbursement, monthly installment calculation) and Notification Service.",vi:"Tham gia xây dựng hệ thống Internet Banking dựa trên kiến trúc Microservices. Chịu trách nhiệm chính trong phân hệ Loan Service (Xử lý đơn vay, giải ngân, tính toán kỳ hạn) và Notification Service."},tags:["Spring Boot 3.x","Microservices","Kafka","Temporal","Resilience4j"]},{num:"02",company:"Graduation Project (DATN)",role:{en:"Full-Stack Developer",vi:"Nhà phát triển Full-Stack"},period:"05/2025 — 09/2025",desc:{en:"Built an airline and tour booking platform (Traveloka Clone). Designed the booking flow, real-time seat holding, and integrated a simulated payment gateway.",vi:"Xây dựng nền tảng đặt vé máy bay và tour du lịch (Traveloka Clone). Thiết kế luồng đặt vé, giữ chỗ thời gian thực và tích hợp cổng thanh toán mô phỏng."},tags:["Spring Boot","Vue.js","Redis","Socket.io","Docker"]},{num:"03",company:"Personal Projects",role:{en:"Java Backend Developer",vi:"Nhà phát triển Backend Java"},period:"2024 — 2025",desc:{en:"Developed clone projects like Phong Vu Shop (Java 5) and Youtube (Java 4), focusing on MVC architecture, security, and data processing.",vi:"Phát triển các dự án mô phỏng như Phong Vu Shop Clone (Java 5) và Youtube Clone (Java 4), tập trung vào kiến trúc MVC, bảo mật và xử lý dữ liệu."},tags:["Java Servlet","JSP","Thymeleaf","SQL Server"]}],l=[{num:"01",title:{en:"Software Development Major",vi:"Chuyên ngành Phát triển Phần mềm"},org:{en:"FPT Polytechnic HCMC",vi:"FPT Polytechnic TP.HCM"},year:"2023 — 2025"},{num:"02",title:{en:"Featured on School Newspaper",vi:"Hạng mục sản phẩm SV"},org:{en:"FPT Education Media",vi:"Truyền thông hệ giáo dục FPT"},year:"2024"},{num:"03",title:{en:"Excellent Student Award",vi:"Sinh viên Xuất sắc"},org:{en:"3 Semesters Achievement",vi:"Thành tích 3 học kỳ liên tiếp"},year:"2024"},{num:"04",title:{en:"GPA 9.0/10",vi:"Điểm trung bình 9.0/10"},org:{en:"Academic Excellence",vi:"Học lực Xuất sắc"},year:"2025"}],c=qe(0),u=qe([]);function h(M,S){const w=u.value[M];if(w)if(c.value===M)c.value=null,we.to(w,{maxHeight:0,duration:.4,ease:"power2.inOut"}),we.to(S.currentTarget.querySelector(".acc-chevron"),{rotation:0,duration:.3});else{if(c.value!==null&&u.value[c.value]){we.to(u.value[c.value],{maxHeight:0,duration:.35});const T=document.querySelectorAll(".accordion-header")[c.value];T&&we.to(T.querySelector(".acc-chevron"),{rotation:0,duration:.3})}c.value=M,we.to(w,{maxHeight:w.scrollHeight+60,duration:.5,ease:"power3.out"}),we.to(S.currentTarget.querySelector(".acc-chevron"),{rotation:180,duration:.4})}}const f=qe(null),d=qe(null),m=qe(null),_=qe(null),p=qe(null),g=qe(null),y=qe(null);return Ni(()=>{if(u.value[0]){u.value.forEach((w,T)=>{w&&(w.style.maxHeight=T===0?w.scrollHeight+"px":"0px")});const S=document.querySelector(".accordion-header .acc-chevron");S&&we.set(S,{rotation:180})}const M=we.timeline({delay:.1,defaults:{ease:"power3.out"}});M.fromTo(f.value,{opacity:0,x:-60,scale:.95},{opacity:1,x:0,scale:1,duration:1},0),M.fromTo(m.value,{opacity:0,x:-20},{opacity:1,x:0,duration:.5},.3),M.fromTo(_.value,{opacity:0,y:30},{opacity:1,y:0,duration:.8},.4),M.fromTo(p.value,{opacity:0,y:20},{opacity:1,y:0,duration:.6},.65),M.fromTo(g.value.querySelectorAll(".ab-stat"),{opacity:0,y:20},{opacity:1,y:0,stagger:.08,duration:.5},.85),M.fromTo(y.value,{opacity:0,y:20},{opacity:1,y:0,duration:.5},1.05),we.to(".about-cta-svg",{rotation:360,duration:15,repeat:-1,ease:"linear",transformOrigin:"center"})}),(M,S)=>{const w=ko("router-link");return Fe(),Ge("main",j3,[R("section",Z3,[R("div",J3,[R("div",Q3,[R("div",{class:"ab-hero-img-col",ref_key:"imgColEl",ref:f},[R("div",eD,[R("img",{src:Se(Y3),alt:"Phuc Khang",class:"ab-hero-img"},null,8,tD),R("div",nD,[R("a",{href:Se(K3),download:"Phuc_Khang_CV.pdf",class:"about-cta-circle"},[...S[0]||(S[0]=[Da('<svg viewBox="0 0 200 200" class="about-cta-svg" data-v-d90d0fdc><path id="aboutCurvePath" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" fill="none" data-v-d90d0fdc></path><text data-v-d90d0fdc><textPath href="#aboutCurvePath" data-v-d90d0fdc>VIEW RESUME • DOWNLOAD CV • CONTACT ME • </textPath></text></svg><div class="cta-arrow" data-v-d90d0fdc><i class="fas fa-arrow-up icon-arrow" data-v-d90d0fdc></i><i class="fa-solid fa-fan icon-fan" data-v-d90d0fdc></i></div>',2)])],8,iD)]),R("div",rD,[S[1]||(S[1]=R("span",{class:"ab-exp-num"},"2+",-1)),R("span",sD,ce(Se(t)("about.yearExpShort")),1)])])],512),R("div",{class:"ab-hero-content",ref_key:"contentEl",ref:d},[R("div",{class:"section-label",ref_key:"labelEl",ref:m},[ft(i),R("span",oD,ce(Se(t)("about.aboutMe")),1)],512),R("h1",{ref_key:"titleEl",ref:_},[Rt(ce(Se(t)("about.im"))+" ",1),S[2]||(S[2]=R("span",{class:"hero-highlight"},"Phúc Khang",-1)),Rt(", "+ce(Se(t)("about.creativeDev"))+".",1)],512),R("p",{ref_key:"descEl",ref:p},ce(Se(t)("about.bio")),513),R("div",{class:"ab-stats",ref_key:"statsEl",ref:g},[(Fe(),Ge(St,null,Kt(o,T=>R("div",{key:T.label,class:"ab-stat"},[R("span",aD,ce(T.value),1),R("span",lD,ce(Se(t)(T.label)),1)])),64))],512),R("div",{class:"ab-hero-btns",ref_key:"btnsEl",ref:y},[ft(w,{to:"/contact",class:"btn btn-outline"},{default:Qt(()=>[Rt(ce(Se(t)("nav.contact")),1)]),_:1}),S[3]||(S[3]=Da('<div class="social-links" data-v-d90d0fdc><a href="https://github.com/tigcom" class="social-link" aria-label="GitHub" target="_blank" data-v-d90d0fdc><i class="fab fa-github" data-v-d90d0fdc></i></a><a href="https://www.linkedin.com/in/phuc-khang-5744b62a4/" class="social-link" aria-label="LinkedIn" target="_blank" data-v-d90d0fdc><i class="fab fa-linkedin" data-v-d90d0fdc></i></a></div>',1))],512)],512)])])]),R("div",cD,[S[4]||(S[4]=R("div",{class:"marquee-fade-left"},null,-1)),S[5]||(S[5]=R("div",{class:"marquee-fade-right"},null,-1)),R("div",uD,[(Fe(!0),Ge(St,null,Kt([...s,...s],(T,E)=>(Fe(),Ge("span",{key:E,class:"tech-badge"},[R("span",fD,[R("i",{class:Xn(T.icon)},null,2)]),Rt(" "+ce(T.name),1)]))),128))])]),R("section",hD,[R("div",dD,[on((Fe(),Ge("div",pD,[ft(i),R("span",mD,ce(Se(t)("about.experience")),1)])),[[r]]),on((Fe(),Ge("h2",gD,[Rt(ce(Se(t)("about.workHistory")),1)])),[[r]]),R("div",_D,[(Fe(),Ge(St,null,Kt(a,(T,E)=>on(R("div",{key:E,class:Xn(["accordion-item",{open:c.value===E}])},[R("button",{class:"accordion-header",onClick:v=>h(E,v)},[R("div",xD,[R("span",SD,ce(T.num),1),R("div",null,[R("h3",null,ce(T.company),1),R("p",null,ce(T.role[Se(e).lang]),1)])]),R("div",yD,[R("span",bD,ce(T.period),1),S[6]||(S[6]=R("i",{class:"fas fa-chevron-down acc-chevron"},null,-1))])],8,vD),R("div",{class:"accordion-body",ref_for:!0,ref:v=>u.value[E]=v},[R("p",null,ce(T.desc[Se(e).lang]),1),R("div",MD,[(Fe(!0),Ge(St,null,Kt(T.tags,v=>(Fe(),Ge("span",{key:v,class:"tag"},ce(v),1))),128))])],512)],2),[[r]])),64))])])]),R("section",ED,[R("div",TD,[on((Fe(),Ge("div",wD,[ft(i),R("span",AD,ce(Se(t)("about.education")),1)])),[[r]]),on((Fe(),Ge("h2",CD,[Rt(ce(Se(t)("about.education")),1)])),[[r]]),R("div",RD,[(Fe(),Ge(St,null,Kt(l,(T,E)=>on(R("div",{key:E,class:"award-item"},[R("div",PD,[R("span",DD,ce(T.num),1),R("div",null,[R("h4",null,ce(T.title[Se(e).lang]),1),R("p",null,ce(T.org[Se(e).lang]),1)]),T.num==="02"?(Fe(),Ge("a",LD,[Rt(ce(Se(t)("about.readArticle")||"Read Article")+" ",1),S[7]||(S[7]=R("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},[R("path",{d:"M7 17L17 7M7 7h10v10"})],-1))])):er("",!0)]),R("span",ID,ce(T.year),1)]),[[r]])),64))])])])])}}},UD=cr(ND,[["__scopeId","data-v-d90d0fdc"]]),FD={class:"projects-view"},OD={class:"container"},kD={class:"projects-header"},BD={class:"shimmer"},zD={class:"title-word-inner"},VD=["onClick"],HD=["src","alt"],GD={class:"card-info"},WD={class:"card-meta"},XD={class:"card-num"},qD={class:"card-year"},$D={class:"card-title"},YD={class:"card-subtitle"},KD={class:"card-tags"},jD={key:0,class:"empty-state"},ZD={class:"cta-label"},JD={class:"cta-heading"},QD={__name:"ProjectsView",setup(n){we.registerPlugin(et);const{state:e,t}=zo(),i=T=>T&&typeof T=="object"?T[e.lang]??T.en??T:T,r=An(()=>t("home.selectedProjects").split(" ")),s=["Vue","React","Next.js","Angular","Nuxt","Svelte"],o=qe("all"),a=An(()=>[{value:"all",label:e.lang==="vi"?"Tất cả":"All"},{value:"fullstack",label:"Fullstack"},{value:"backend",label:"Backend"}]),l=An(()=>o.value==="all"?Ca:o.value==="fullstack"?Ca.filter(T=>T.tags.some(E=>s.some(v=>E.includes(v)))):Ca.filter(T=>!T.tags.some(E=>s.some(v=>E.includes(v)))));function c(T){o.value=T}const u=qe(null),h=qe(null),f=qe(null),d=qe(null),m=qe(null),_=qe(null),p=qe(null),g=qe(-1);function y(){const T=p.value?.$el||p.value;T&&(we.killTweensOf(T),we.timeline().to(T,{scale:1.05,duration:.2,ease:"power2.out"}).to(T,{scale:.97,duration:.15,ease:"power2.inOut"}).to(T,{scale:1,duration:.25,ease:"back.out(2.5)"}))}function M(T){g.value=T;const E=m.value?.querySelectorAll(".project-card");E?.length&&E.forEach((v,x)=>{const D=v.querySelector(".card-img"),P=v.querySelector(".card-title");x===T?(we.to(D,{scale:1.05,duration:.55,ease:"cubic-bezier(0.45, 0, 0.55, 1)"}),we.to(P,{color:"var(--highlight)",duration:.28,ease:"power2.out"}),we.to(v,{opacity:1,duration:.4,ease:"cubic-bezier(0.25, 0.8, 0.25, 1)"})):(we.to(D,{scale:1,duration:.55,ease:"cubic-bezier(0.45, 0, 0.55, 1)"}),we.to(P,{color:"var(--text-primary)",duration:.28,ease:"power2.out"}),we.to(v,{opacity:.38,duration:.4,ease:"cubic-bezier(0.25, 0.8, 0.25, 1)"}))})}function S(){g.value=-1;const T=m.value?.querySelectorAll(".project-card");T?.length&&T.forEach(E=>{const v=E.querySelector(".card-img"),x=E.querySelector(".card-title");we.to(v,{scale:1,duration:.55,ease:"cubic-bezier(0.45, 0, 0.55, 1)"}),we.to(x,{color:"var(--text-primary)",duration:.28,ease:"power2.out"}),we.to(E,{opacity:1,duration:.4,ease:"cubic-bezier(0.25, 0.8, 0.25, 1)"})})}Eo(l,()=>{tf(()=>{const T=m.value?.querySelectorAll(".project-card");T?.length&&(we.killTweensOf(T),we.fromTo(T,{opacity:0,y:36},{opacity:1,y:0,duration:.55,stagger:.09,ease:"power3.out"}))})});const w=[];return Ni(()=>{we.timeline({delay:.08,defaults:{ease:"power3.out"}}).fromTo(u.value,{opacity:0,x:-18},{opacity:1,x:0,duration:.5}).fromTo(h.value.querySelectorAll(".title-word-inner"),{yPercent:115,skewY:5},{yPercent:0,skewY:0,duration:.85,stagger:.11},.22).fromTo(f.value,{opacity:0,y:18},{opacity:1,y:0,duration:.6},.68).fromTo(d.value.querySelectorAll(".filter-tab"),{opacity:0,y:12},{opacity:1,y:0,duration:.45,stagger:.09},.85);const E=m.value?.querySelectorAll(".project-card");E?.length&&(we.set(E,{opacity:0,y:64}),w.push(et.create({trigger:m.value,start:"top 82%",once:!0,onEnter:()=>{we.to(E,{opacity:1,y:0,duration:.82,stagger:{each:.12,from:"start"},ease:"power3.out"})}}))),_.value&&(we.set(Array.from(_.value.children),{opacity:0,y:28}),w.push(et.create({trigger:_.value,start:"top 88%",once:!0,onEnter:()=>{we.to(Array.from(_.value.children),{opacity:1,y:0,duration:.7,stagger:.13,ease:"power3.out"})}})))}),$a(()=>{w.forEach(T=>T.kill()),w.length=0}),(T,E)=>{const v=ko("router-link");return Fe(),Ge("main",FD,[R("div",OD,[R("section",kD,[R("div",{class:"projects-badge",ref_key:"badgeEl",ref:u},[E[1]||(E[1]=R("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"13",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24","aria-hidden":"true"},[R("path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"})],-1)),R("span",BD,ce(Se(t)("nav.projects")),1)],512),R("h1",{class:"projects-title",ref_key:"titleEl",ref:h},[(Fe(!0),Ge(St,null,Kt(r.value,(x,D)=>(Fe(),Ge("span",{key:D,class:"title-word"},[R("span",zD,ce(x),1)]))),128))],512),R("p",{class:"projects-subtitle",ref_key:"subtitleEl",ref:f},ce(Se(t)("home.selectedProjectsDesc")),513),R("div",{class:"filter-tabs",ref_key:"filterTabsEl",ref:d},[(Fe(!0),Ge(St,null,Kt(a.value,x=>(Fe(),Ge("button",{key:x.value,class:Xn(["filter-tab",{active:o.value===x.value}]),onClick:D=>c(x.value)},ce(x.label),11,VD))),128))],512)]),R("section",{class:"projects-grid",ref_key:"gridEl",ref:m,onMouseleave:S},[(Fe(!0),Ge(St,null,Kt(l.value,(x,D)=>(Fe(),yr(v,{key:x.slug,to:Se(Ra)?`/projects/${x.slug}`:"",class:Xn(["project-card",{"card-stagger":D%2===1,"project-card--disabled":!Se(Ra)}]),onMouseenter:P=>M(D),onClick:E[0]||(E[0]=P=>!Se(Ra)&&P.preventDefault())},{default:Qt(()=>[R("div",{class:"card-img-wrapper",style:Lo({backgroundColor:x.colorBackgound})},[R("img",{src:x.img,alt:i(x.title),class:"card-img",loading:"lazy"},null,8,HD)],4),R("div",GD,[R("div",WD,[R("span",XD,ce(x.num),1),R("span",qD,ce(x.year),1)]),R("h3",$D,ce(i(x.title)),1),R("p",YD,ce(i(x.subtitle)),1),R("div",KD,[(Fe(!0),Ge(St,null,Kt(x.tags.slice(0,3),P=>(Fe(),Ge("span",{key:P,class:"tag"},ce(P),1))),128))])])]),_:2},1032,["to","class","onMouseenter"]))),128)),l.value.length===0?(Fe(),Ge("p",jD,ce(Se(e).lang==="vi"?"Chưa có dự án trong danh mục này.":"No projects in this category yet."),1)):er("",!0)],544),R("section",{class:"projects-cta",ref_key:"ctaEl",ref:_},[R("p",ZD,[E[2]||(E[2]=R("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"13",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24","aria-hidden":"true"},[R("path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"})],-1)),Rt(" "+ce(Se(t)("contact.getInTouch")),1)]),R("h2",JD,ce(Se(e).lang==="vi"?"Hãy cùng tạo ra ý tưởng lớn tiếp theo.":"Let's create your next big idea."),1),ft(v,{to:"/contact",class:"cta-btn",ref_key:"ctaBtn",ref:p,onMouseenter:y},{default:Qt(()=>[Rt(ce(Se(t)("contact.sendMessage"))+" ↗ ",1)]),_:1},512)],512)])])}}},eL=cr(QD,[["__scopeId","data-v-6dea5652"]]),tL={},nL={class:"banking-mockup"};function iL(n,e){return Fe(),Ge("div",nL,[...e[0]||(e[0]=[Da('<div class="browser-header" data-v-6ea8f471><div class="browser-dots" data-v-6ea8f471><span data-v-6ea8f471></span><span data-v-6ea8f471></span><span data-v-6ea8f471></span></div><div class="browser-url" data-v-6ea8f471>tigbank.com/dashboard</div></div><div class="app-container" data-v-6ea8f471><aside class="sidebar" data-v-6ea8f471><div class="logo-area" data-v-6ea8f471><div class="logo-circle" data-v-6ea8f471><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-v-6ea8f471><rect x="2" y="5" width="20" height="14" rx="2" data-v-6ea8f471></rect><line x1="2" y1="10" x2="22" y2="10" data-v-6ea8f471></line></svg></div><span class="logo-text" data-v-6ea8f471>TigBank</span></div><nav class="side-nav" data-v-6ea8f471><div class="nav-item active" data-v-6ea8f471>🏠 Home</div><div class="nav-item" data-v-6ea8f471>💸 Transfer</div><div class="nav-item" data-v-6ea8f471>💳 Cards</div><div class="nav-item" data-v-6ea8f471>📊 Reports</div><div class="nav-item" data-v-6ea8f471>⚙️ Settings</div></nav></aside><main class="main-content" data-v-6ea8f471><header class="top-nav" data-v-6ea8f471><div class="welcome" data-v-6ea8f471><span class="greet" data-v-6ea8f471>Good morning,</span><span class="name" data-v-6ea8f471>Dailé</span></div><div class="user-actions" data-v-6ea8f471><div class="search-icon" data-v-6ea8f471>🔍</div><div class="avatar" data-v-6ea8f471>D</div></div></header><div class="dashboard-content" data-v-6ea8f471><div class="balance-grid" data-v-6ea8f471><div class="card main-card" data-v-6ea8f471><span class="label" data-v-6ea8f471>Total Balance</span><span class="amount" data-v-6ea8f471>$24,500.00</span><div class="card-footer" data-v-6ea8f471><span class="account-num" data-v-6ea8f471>**** 4290</span><span class="visa" data-v-6ea8f471>VISA</span></div></div><div class="card secondary-card" data-v-6ea8f471><span class="label" data-v-6ea8f471>Savings</span><span class="amount" data-v-6ea8f471>$8,240.50</span><span class="growth" data-v-6ea8f471>+2.4%</span></div></div><div class="transactions-section" data-v-6ea8f471><div class="section-header" data-v-6ea8f471><h3 data-v-6ea8f471>Recent Transactions</h3><span class="view-all" data-v-6ea8f471>See all</span></div><div class="transaction-list" data-v-6ea8f471><div class="transaction-item" data-v-6ea8f471><div class="t-icon shopping" data-v-6ea8f471>🛒</div><div class="t-info" data-v-6ea8f471><span class="t-name" data-v-6ea8f471>Apple Store</span><span class="t-date" data-v-6ea8f471>Mar 15, 2025</span></div><span class="t-amount negative" data-v-6ea8f471>-$999.00</span></div><div class="transaction-item" data-v-6ea8f471><div class="t-icon salary" data-v-6ea8f471>💰</div><div class="t-info" data-v-6ea8f471><span class="t-name" data-v-6ea8f471>Salary Deposit</span><span class="t-date" data-v-6ea8f471>Mar 12, 2025</span></div><span class="t-amount positive" data-v-6ea8f471>+$4,200.00</span></div><div class="transaction-item" data-v-6ea8f471><div class="t-icon food" data-v-6ea8f471>🍕</div><div class="t-info" data-v-6ea8f471><span class="t-name" data-v-6ea8f471>Pizza Hut</span><span class="t-date" data-v-6ea8f471>Mar 10, 2025</span></div><span class="t-amount negative" data-v-6ea8f471>-$32.50</span></div></div></div></div></main></div>',2)])])}const rL=cr(tL,[["render",iL],["__scopeId","data-v-6ea8f471"]]),sL={class:"traveloka-mockup"},oL={class:"mockup-results"},aL={__name:"TravelokaMockup",setup(n){return Ni(()=>{we.from(".traveloka-mockup",{opacity:0,y:20,duration:.8,ease:"power3.out"}),we.from(".result-card",{opacity:0,x:-20,stagger:.2,duration:.6,delay:.4,ease:"power2.out"})}),(e,t)=>(Fe(),Ge("div",sL,[t[1]||(t[1]=Da('<div class="mockup-header" data-v-11af4f43><div class="mockup-logo" data-v-11af4f43>Traveloka</div><div class="mockup-nav" data-v-11af4f43><span class="active" data-v-11af4f43>Flights</span><span data-v-11af4f43>Hotels</span><span data-v-11af4f43>Tours</span><span data-v-11af4f43>Buses</span></div></div><div class="mockup-search" data-v-11af4f43><div class="search-grid" data-v-11af4f43><div class="search-item" data-v-11af4f43><label data-v-11af4f43>From</label><div class="search-input" data-v-11af4f43>SGN (Ho Chi Minh City)</div></div><div class="search-item" data-v-11af4f43><label data-v-11af4f43>To</label><div class="search-input" data-v-11af4f43>HAN (Ha Noi)</div></div><div class="search-item" data-v-11af4f43><label data-v-11af4f43>Departure Date</label><div class="search-input" data-v-11af4f43>Thu, 19 Mar 2026</div></div><div class="search-item" data-v-11af4f43><label data-v-11af4f43>Passengers</label><div class="search-input" data-v-11af4f43>1 Adult, Economy</div></div></div><button class="search-btn" data-v-11af4f43>Search Flights</button></div>',2)),R("div",oL,[(Fe(),Ge(St,null,Kt(2,i=>R("div",{class:"result-card",key:i},[...t[0]||(t[0]=[Da('<div class="airline-info" data-v-11af4f43><div class="airline-logo" data-v-11af4f43>✈️</div><div data-v-11af4f43><div class="airline-name" data-v-11af4f43>Vietnam Airlines</div><div class="flight-type" data-v-11af4f43>Direct</div></div></div><div class="flight-time" data-v-11af4f43><div data-v-11af4f43><div class="time" data-v-11af4f43>08:00</div><div class="city" data-v-11af4f43>SGN</div></div><div class="duration" data-v-11af4f43><div class="line" data-v-11af4f43></div><span data-v-11af4f43>2h 10m</span></div><div data-v-11af4f43><div class="time" data-v-11af4f43>10:10</div><div class="city" data-v-11af4f43>HAN</div></div></div><div class="flight-price" data-v-11af4f43><div class="price" data-v-11af4f43>1,250,000 VND</div><button class="select-btn" data-v-11af4f43>Select</button></div>',3)])])),64))]),t[2]||(t[2]=R("div",{class:"mockup-overlay"},[R("div",{class:"badge"},"Microservices Integrated"),R("div",{class:"badge"},"Core Banking Ready")],-1))]))}},lL=cr(aL,[["__scopeId","data-v-11af4f43"]]),cL={key:0,class:"project-detail-view"},uL={class:"container pd-back"},fL={class:"pd-hero section"},hL={class:"container"},dL={class:"pd-hero-grid"},pL={class:"pd-hero-content"},mL={class:"pd-num"},gL={class:"pd-category"},_L={class:"pd-info-item"},vL={class:"label"},xL={class:"val"},SL={class:"pd-info-item"},yL={class:"pd-tech-tags"},bL=["href"],ML=["src","alt"],EL={class:"pd-content-section section"},TL={class:"container"},wL={class:"pd-content-grid"},AL={class:"pd-text-block"},CL={class:"section-subtitle"},RL={class:"pd-text-block"},PL={class:"section-subtitle"},DL={key:0,class:"pd-mockup-section",ref:"fullImgEl"},LL={class:"section-subtitle",style:{"text-align":"center","margin-bottom":"40px"}},IL={class:"pd-process-section section"},NL={class:"container"},UL={class:"section-heading"},FL={class:"pd-process-steps"},OL=["data-delay"],kL={class:"step-num"},BL={class:"pd-results-section section"},zL={class:"container"},VL={class:"pd-results-grid"},HL={class:"pd-result-val"},GL={class:"pd-result-label"},WL={class:"pd-nav section"},XL={class:"container"},qL={class:"pd-nav-inner"},$L={class:"label"},YL={class:"title"},KL={class:"label"},jL={class:"title"},ZL={__name:"ProjectDetailView",setup(n){const{state:e,t}=zo(),i=Mv();we.registerPlugin(et);const r=An(()=>G2(i.params.slug,e.lang)),s={mounted(d){const m=parseFloat(d.dataset.delay||0);we.set(d,{opacity:0,y:30}),et.create({trigger:d,start:"top 88%",once:!0,onEnter:()=>we.to(d,{opacity:1,y:0,duration:.8,delay:m,ease:"power3.out"})})}},o=qe(null),a=qe(null),l=qe(null),c=qe(null),u=qe(null),h=qe(null),f=()=>{const d=we.timeline({delay:.1,defaults:{ease:"power3.out"}});d.fromTo(o.value,{opacity:0,x:-20},{opacity:1,x:0,duration:.5},0),d.fromTo(a.value,{opacity:0,y:30},{opacity:1,y:0,duration:.8},.15),d.fromTo(l.value,{opacity:0,y:20},{opacity:1,y:0,duration:.6},.3),d.fromTo(c.value,{opacity:0,y:20},{opacity:1,y:0,duration:.6},.45),d.fromTo(u.value,{opacity:0,y:20},{opacity:1,y:0,duration:.5},.6),d.fromTo(h.value,{opacity:0,scale:.95,y:40},{opacity:1,scale:1,y:0,duration:1},.2)};return Ni(()=>{f()}),Eo(()=>i.params.slug,()=>{setTimeout(f,100),window.scrollTo(0,0)}),(d,m)=>{const _=ko("router-link");return r.value?(Fe(),Ge("main",cL,[R("div",uL,[ft(_,{to:"/projects",class:"pd-back-link"},{default:Qt(()=>[m[0]||(m[0]=R("i",{class:"fas fa-arrow-left"},null,-1)),R("span",null,ce(Se(t)("common.backToProjects")),1)]),_:1})]),R("section",fL,[R("div",hL,[R("div",dL,[R("div",pL,[R("div",{class:"pd-meta",ref_key:"metaEl",ref:o},[R("span",mL,ce(r.value.num),1),R("span",gL,ce(r.value.category)+" · "+ce(r.value.year),1)],512),R("h1",{class:"pd-title",ref_key:"titleEl",ref:a},ce(r.value.title),513),R("p",{class:"pd-subtitle",ref_key:"subtitleEl",ref:l},ce(r.value.subtitle),513),R("div",{class:"pd-info-grid",ref_key:"infoEl",ref:c},[R("div",_L,[R("span",vL,ce(Se(t)("common.role")),1),R("span",xL,ce(r.value.role),1)]),R("div",SL,[m[1]||(m[1]=R("span",{class:"label"},"Tech Stack",-1)),R("div",yL,[(Fe(!0),Ge(St,null,Kt(r.value.techStack,p=>(Fe(),Ge("span",{key:p,class:"tag"},ce(p),1))),128))])])],512),R("div",{class:"pd-hero-btns",ref_key:"btnsEl",ref:u},[r.value.githubLink?(Fe(),Ge("a",{key:0,href:r.value.githubLink,target:"_blank",class:"btn btn-outline"},[Rt(ce(Se(t)("common.github"))+" ",1),m[2]||(m[2]=R("i",{class:"fab fa-github"},null,-1))],8,bL)):er("",!0)],512)]),R("div",{class:"pd-hero-img-wrapper",ref_key:"heroImgEl",ref:h},[R("img",{src:r.value.heroImg,alt:r.value.title,class:"pd-hero-img"},null,8,ML)],512)])])]),R("section",EL,[R("div",TL,[R("div",wL,[on((Fe(),Ge("div",AL,[R("h2",CL,ce(Se(t)("common.overview")),1),R("p",null,ce(r.value.overview),1)])),[[s]]),on((Fe(),Ge("div",RL,[R("h2",PL,ce(Se(t)("common.problem")),1),R("p",null,ce(r.value.problem),1)])),[[s]])])])]),["clean-hub","banking-system","traveloka-clone","internet-banking"].includes(r.value.slug)?(Fe(),Ge("div",DL,[R("h2",LL,ce(r.value.slug==="internet-banking"?Se(e).lang==="en"?"Core Banking Interface":"Giao diện Core Banking":Se(e).lang==="en"?"System Interface":"Giao diện hệ thống"),1),r.value.slug==="internet-banking"||r.value.slug==="banking-system"?(Fe(),yr(rL,{key:0})):er("",!0),r.value.slug==="traveloka-clone"?(Fe(),yr(lL,{key:1})):er("",!0)],512)):er("",!0),R("section",IL,[R("div",NL,[on((Fe(),Ge("h2",UL,[Rt(ce(Se(t)("common.process")),1)])),[[s]]),R("div",FL,[(Fe(!0),Ge(St,null,Kt(r.value.processSteps,(p,g)=>on((Fe(),Ge("div",{key:g,class:"pd-step","data-delay":g*.1},[R("span",kL,"0"+ce(g+1),1),R("h3",null,ce(p.title),1),R("p",null,ce(p.description),1)],8,OL)),[[s]])),128))])])]),R("section",BL,[R("div",zL,[R("div",VL,[(Fe(!0),Ge(St,null,Kt(r.value.results,p=>on((Fe(),Ge("div",{key:p.label,class:"pd-result-card"},[R("div",HL,ce(p.value)+ce(p.suffix),1),R("div",GL,ce(p.label),1)])),[[s]])),128))])])]),R("section",WL,[R("div",XL,[R("div",qL,[ft(_,{to:`/projects/${r.value.prevSlug}`,class:"pd-nav-btn prev"},{default:Qt(()=>[R("span",$L,[m[3]||(m[3]=R("i",{class:"fas fa-arrow-left"},null,-1)),Rt(" "+ce(Se(t)("common.previous")),1)]),R("span",YL,ce(r.value.prevTitle),1)]),_:1},8,["to"]),ft(_,{to:`/projects/${r.value.nextSlug}`,class:"pd-nav-btn next"},{default:Qt(()=>[R("span",KL,[Rt(ce(Se(t)("common.next"))+" ",1),m[4]||(m[4]=R("i",{class:"fas fa-arrow-right"},null,-1))]),R("span",jL,ce(r.value.nextTitle),1)]),_:1},8,["to"])])])])])):er("",!0)}}},JL=cr(ZL,[["__scopeId","data-v-892e3c66"]]),QL={class:"contact-view"},eI={class:"contact-hero section"},tI={class:"container"},nI={class:"shimmer"},iI={class:"title-word"},rI={class:"title-word hero-highlight"},sI={class:"contact-main-section section"},oI={class:"container"},aI={class:"contact-grid"},lI={class:"form-row"},cI={class:"form-group"},uI={for:"name"},fI={class:"input-wrapper"},hI={class:"form-group"},dI={for:"email"},pI={class:"input-wrapper"},mI={class:"form-group"},gI={for:"subject"},_I={class:"input-wrapper"},vI={class:"form-group"},xI={class:"checkbox-group"},SI=["value"],yI={class:"form-group"},bI={for:"message"},MI={class:"input-wrapper"},EI=["disabled"],TI={key:0,class:"form-success"},wI={class:"contact-info-card"},AI={class:"contact-info-items"},CI={class:"contact-info-icon"},RI={class:"contact-info-label"},PI={class:"faq-section"},DI={class:"section-label",style:{"margin-bottom":"24px"}},LI={class:"shimmer"},II={class:"faq-list"},NI=["onClick"],UI={__name:"ContactView",setup(n){const{state:e,t}=zo();we.registerPlugin(et);const i={template:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>'},r=qa({name:"",email:"",subject:"",inquiry:[],message:""}),s=qe(!1),o=qe(!1),a=[{label:{en:"Full-time Role",vi:"Vị trí Full-time"},value:"fulltime"},{label:{en:"Freelance Project",vi:"Dự án Freelance"},value:"freelance"},{label:{en:"Collaboration",vi:"Hợp tác"},value:"collab"},{label:{en:"Other",vi:"Khác"},value:"other"}];async function l(){s.value=!0,await new Promise(v=>setTimeout(v,1500)),s.value=!1,o.value=!0,Object.assign(r,{name:"",email:"",subject:"",inquiry:[],message:""})}function c(v){const x=v.target.nextElementSibling;x&&we.to(x,{width:"100%",duration:.4,ease:"power2.out"})}function u(v){if(!v.target.value){const x=v.target.nextElementSibling;x&&we.to(x,{width:"0%",duration:.3})}}const h=qe(null);function f(v){const x=h.value.getBoundingClientRect(),D=(v.clientX-x.left-x.width/2)*.2,P=(v.clientY-x.top-x.height/2)*.3;we.to(h.value,{x:D,y:P,duration:.4,ease:"power2.out"}),we.to(".email-arrow",{rotate:45,duration:.3})}function d(){we.to(h.value,{x:0,y:0,duration:.5,ease:"elastic.out(1, 0.5)"}),we.to(".email-arrow",{rotate:0,duration:.3})}const m=qe(null),_=qe([]);function p(v,x){const D=_.value[v];D&&(m.value===v?(m.value=null,we.to(D,{maxHeight:0,duration:.4,ease:"power2.inOut"}),we.to(x.currentTarget.querySelector(".faq-chevron"),{rotation:0,duration:.3})):(m.value!==null&&_.value[m.value]&&we.to(_.value[m.value],{maxHeight:0,duration:.35}),m.value=v,we.to(D,{maxHeight:D.scrollHeight+40,duration:.5,ease:"power3.out"}),we.to(x.currentTarget.querySelector(".faq-chevron"),{rotation:180,duration:.4})))}const g=[{q:"01. Định hướng phát triển của bạn là gì?",a:"Mình đang tập trung trở thành một Full-Stack Developer chuyên nghiệp, có khả năng xây dựng các hệ thống Backend quy mô lớn (Microservices) và giao diện Frontend tối ưu."},{q:"02. Bạn có kinh nghiệm làm việc thực tế chưa?",a:"Có, mình hiện đang là Java Developer Collaborator tại ngân hàng Kiên Long, tham gia trực tiếp vào các dự án Microservices tài chính thực tế."},{q:"03. Bạn sử dụng Tech Stack nào chính?",a:"Về Backend mình sử dụng Java Spring Boot, Microservices, Kafka, Redis. Về Frontend mình sử dụng Vue.js, Angular và Tailwind CSS."},{q:"04. Bạn có sẵn sàng cho các cơ hội Full-time?",a:"Chắc chắn rồi! Mình luôn tìm kiếm các cơ hội làm việc Full-time tại các công ty công nghệ chuyên nghiệp để đóng góp và phát triển bản thân."}],y=[{label:"contact.emailAddress",value:"khang2611200@gmail.com",href:"mailto:khang2611200@gmail.com",icon:"fas fa-envelope"},{label:"contact.location",value:"Binh Thanh, Ho Chi Minh City",icon:"fas fa-map-marker-alt"},{label:"contact.phone",value:"0949 468 591",href:"tel:0949468591",icon:"fas fa-phone-alt"}],M=qe(null),S=qe(null),w=qe(null),T=qe(null),E=qe(null);return Ni(()=>{_.value.forEach(x=>{x&&(x.style.maxHeight="0px")});const v=we.timeline({delay:.05,defaults:{ease:"power3.out"}});v.fromTo(M.value,{opacity:0,x:-20},{opacity:1,x:0,duration:.5}),v.fromTo(S.value.querySelectorAll(".title-word"),{yPercent:110,opacity:0},{yPercent:0,opacity:1,stagger:.08,duration:.9},"<0.1"),v.fromTo(w.value,{opacity:0,y:20},{opacity:1,y:0,duration:.6},"<0.2"),v.fromTo(h.value,{opacity:0,y:30},{opacity:1,y:0,duration:.7},"<0.1"),we.from(T.value,{scrollTrigger:{trigger:T.value,start:"top 87%"},x:-60,opacity:0,duration:.9,ease:"power3.out"}),we.from(E.value,{scrollTrigger:{trigger:E.value,start:"top 87%"},x:60,opacity:0,duration:.9,ease:"power3.out"})}),(v,x)=>(Fe(),Ge("main",QL,[R("section",eI,[R("div",tI,[R("div",{class:"section-label",ref_key:"labelEl",ref:M},[ft(i),R("span",nI,ce(Se(t)("contact.getInTouch")),1)],512),R("h1",{class:"contact-title",ref_key:"titleEl",ref:S},[R("span",iI,ce(Se(t)("contact.letsWork")),1),R("span",rI,ce(Se(t)("contact.together")),1)],512),R("p",{class:"contact-subtitle",ref_key:"subtitleEl",ref:w},ce(Se(t)("contact.contactDesc")),513),R("a",{href:"mailto:khang2611200@gmail.com",class:"contact-big-email",ref_key:"emailEl",ref:h,onMousemove:f,onMouseleave:d},[...x[5]||(x[5]=[R("span",{class:"email-text"},"khang2611200@gmail.com",-1),R("svg",{class:"email-arrow",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"none",stroke:"currentColor","stroke-width":"1.5",viewBox:"0 0 24 24"},[R("path",{d:"M7 7h10v10"}),R("path",{d:"M7 17 17 7"})],-1)])],544)])]),R("section",sI,[R("div",oI,[R("div",aI,[R("div",{class:"contact-form-wrapper",ref_key:"formWrapperEl",ref:T},[R("h2",null,ce(Se(t)("contact.sendMessage")),1),R("form",{class:"contact-form",onSubmit:jb(l,["prevent"]),novalidate:""},[R("div",lI,[R("div",cI,[R("label",uI,ce(Se(t)("contact.yourName")),1),R("div",fI,[on(R("input",{type:"text",id:"name","onUpdate:modelValue":x[0]||(x[0]=D=>r.name=D),placeholder:"Phuc Khang",onFocus:c,onBlur:u},null,544),[[Sc,r.name]]),x[6]||(x[6]=R("div",{class:"input-line"},null,-1))])]),R("div",hI,[R("label",dI,ce(Se(t)("contact.emailAddress")),1),R("div",pI,[on(R("input",{type:"email",id:"email","onUpdate:modelValue":x[1]||(x[1]=D=>r.email=D),placeholder:"khang2611200@gmail.com",onFocus:c,onBlur:u},null,544),[[Sc,r.email]]),x[7]||(x[7]=R("div",{class:"input-line"},null,-1))])])]),R("div",mI,[R("label",gI,ce(Se(t)("contact.subject")),1),R("div",_I,[on(R("input",{type:"text",id:"subject","onUpdate:modelValue":x[2]||(x[2]=D=>r.subject=D),placeholder:"Project Collaboration",onFocus:c,onBlur:u},null,544),[[Sc,r.subject]]),x[8]||(x[8]=R("div",{class:"input-line"},null,-1))])]),R("div",vI,[R("label",null,ce(Se(t)("contact.typeOfInquiry")),1),R("div",xI,[(Fe(),Ge(St,null,Kt(a,D=>R("label",{key:D.value,class:"checkbox-label"},[on(R("input",{type:"checkbox",value:D.value,"onUpdate:modelValue":x[3]||(x[3]=P=>r.inquiry=P)},null,8,SI),[[qb,r.inquiry]]),x[9]||(x[9]=R("span",{class:"checkbox-custom"},null,-1)),Rt(" "+ce(D.label[Se(e).lang]),1)])),64))])]),R("div",yI,[R("label",bI,ce(Se(t)("contact.message")),1),R("div",MI,[on(R("textarea",{id:"message","onUpdate:modelValue":x[4]||(x[4]=D=>r.message=D),rows:"5",placeholder:"...",onFocus:c,onBlur:u},null,544),[[Sc,r.message]]),x[10]||(x[10]=R("div",{class:"input-line"},null,-1))])]),R("button",{type:"submit",class:"btn btn-outline btn-submit",disabled:s.value},[R("span",null,ce(s.value?Se(t)("contact.sendingBtn"):Se(t)("contact.sendBtn")),1),x[11]||(x[11]=R("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},[R("path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}),R("polyline",{points:"14 2 14 8 20 8"})],-1))],8,EI),ft(cv,{name:"fade-up"},{default:Qt(()=>[o.value?(Fe(),Ge("div",TI,[x[12]||(x[12]=R("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},[R("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),R("polyline",{points:"22 4 12 14.01 9 11.01"})],-1)),R("span",null,ce(Se(t)("contact.messageSent")),1)])):er("",!0)]),_:1})],32)],512),R("div",{class:"contact-info-wrapper",ref_key:"infoWrapperEl",ref:E},[R("div",wI,[R("h3",null,ce(Se(t)("contact.contactInfo")),1),R("div",AI,[(Fe(),Ge(St,null,Kt(y,D=>R("div",{class:"contact-info-item",key:D.label},[R("div",CI,[R("i",{class:Xn(D.icon)},null,2)]),R("div",null,[R("span",RI,ce(Se(t)(D.label)),1),(Fe(),yr(k0(D.href?"a":"span"),{href:D.href,class:"contact-info-value"},{default:Qt(()=>[Rt(ce(D.value),1)]),_:2},1032,["href"]))])])),64))])]),R("div",PI,[R("div",DI,[ft(i),R("span",LI,ce(Se(t)("contact.faqs")),1)]),R("h3",null,ce(Se(t)("contact.haveQuestions")),1),R("div",II,[(Fe(),Ge(St,null,Kt(g,(D,P)=>R("div",{key:P,class:Xn(["faq-item",{open:m.value===P}])},[R("button",{class:"faq-header",onClick:I=>p(P,I)},[R("span",null,ce(D.q),1),x[13]||(x[13]=R("svg",{class:"faq-chevron",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},[R("path",{d:"m6 9 6 6 6-6"})],-1))],8,NI),R("div",{class:"faq-body",ref_for:!0,ref:I=>_.value[P]=I},[R("p",null,ce(D.a),1)],512)],2)),64))])])],512)])])])]))}},FI=cr(UI,[["__scopeId","data-v-1fcc242b"]]),RS=l1({history:zM(),routes:[{path:"/",name:"home",component:$3},{path:"/about",name:"about",component:UD},{path:"/projects",name:"projects",component:eL},{path:"/projects/:slug",name:"project-detail",component:JL},{path:"/contact",name:"contact",component:FI}],scrollBehavior(){return!1}});RS.afterEach(n=>{const e={home:"Phuc Khang — Creative Developer",about:"About | Phuc Khang",projects:"Projects | Phuc Khang","project-detail":"Project | Phuc Khang",contact:"Contact | Phuc Khang"};document.title=e[n.name]||"Phuc Khang"});Qb(V2).use(RS).mount("#app");
