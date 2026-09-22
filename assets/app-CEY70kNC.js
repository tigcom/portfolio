const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomeView-BK-ROYEa.js","assets/projects-CxyotXB5.js","assets/useThemeVar-Bo5fq1-w.js","assets/Mesh-uU8OXhrh.js","assets/Camera-DfGT3RLO.js","assets/HomeView-mWVijzN3.css","assets/AboutView-BvnJGWBV.js","assets/AboutView-wYR1ejyf.css","assets/ProjectsView-BrPukOHm.js","assets/ProjectsView-CCWmN6Sk.css","assets/ProjectDetailView-CmLNQOm5.js","assets/ProjectDetailView-Coe4Gtrq.css","assets/ContactView-BQ4xpzwj.js","assets/ContactView-BgjS0Mel.css","assets/MarketplaceView-CAkJdJMj.js","assets/templates-xXb5L4Ll.js","assets/MarketplaceView-cWjlHIUv.css","assets/MarketplaceDetailView-CA3nRG1r.js","assets/MarketplaceDetailView-CDsSotQO.css","assets/MarketplaceDemoView-dU921_w_.js","assets/MarketplaceDemoView-BDR1ZYW2.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const FS="modulepreload",BS=function(n){return"/"+n},zm={},ms=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let l=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");r=l(t.map(c=>{if(c=BS(c),c in zm)return;zm[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":FS,u||(f.as="script"),f.crossOrigin="",f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),u)return new Promise((h,p)=>{f.addEventListener("load",h),f.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};function Vh(n,e={},t){for(const i in n){const r=n[i],s=t?`${t}:${i}`:i;typeof r=="object"&&r!==null?Vh(r,e,s):typeof r=="function"&&(e[s]=r)}return e}const B0=(()=>{if(console.createTask)return console.createTask;const n={run:e=>e()};return()=>n})();function k0(n,e,t,i){for(let r=t;r<n.length;r+=1)try{const s=i?i.run(()=>n[r](...e)):n[r](...e);if(s&&typeof s.then=="function")return Promise.resolve(s).then(()=>k0(n,e,r+1,i))}catch(s){return Promise.reject(s)}}function kS(n,e,t){if(n.length>0)return k0(n,e,0,B0(t))}function zS(n,e,t){if(n.length>0){const i=B0(t);return Promise.all(n.map(r=>i.run(()=>r(...e))))}}function Df(n,e){for(const t of[...n])t(e)}var HS=class{_hooks;_before;_after;_deprecatedHooks;_deprecatedMessages;constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(n,e,t={}){if(!n||typeof e!="function")return()=>{};const i=n;let r;for(;this._deprecatedHooks[n];)r=this._deprecatedHooks[n],n=r.to;if(r&&!t.allowDeprecated){let s=r.message;s||(s=`${i} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(s)||(console.warn(s),this._deprecatedMessages.add(s))}if(!e.name)try{Object.defineProperty(e,"name",{get:()=>"_"+n.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[n]=this._hooks[n]||[],this._hooks[n].push(e),()=>{e&&(this.removeHook(n,e),e=void 0)}}hookOnce(n,e){let t,i=(...r)=>(typeof t=="function"&&t(),t=void 0,i=void 0,e(...r));return t=this.hook(n,i),t}removeHook(n,e){const t=this._hooks[n];if(t){const i=t.indexOf(e);i!==-1&&t.splice(i,1),t.length===0&&(this._hooks[n]=void 0)}}clearHook(n){this._hooks[n]=void 0}deprecateHook(n,e){this._deprecatedHooks[n]=typeof e=="string"?{to:e}:e;const t=this._hooks[n]||[];this._hooks[n]=void 0;for(const i of t)this.hook(n,i)}deprecateHooks(n){for(const e in n)this.deprecateHook(e,n[e])}addHooks(n){const e=Vh(n),t=Object.keys(e).map(i=>this.hook(i,e[i]));return()=>{for(const i of t)i();t.length=0}}removeHooks(n){const e=Vh(n);for(const t in e)this.removeHook(t,e[t])}removeAllHooks(){this._hooks={}}callHook(n,...e){return this.callHookWith(kS,n,e)}callHookParallel(n,...e){return this.callHookWith(zS,n,e)}callHookWith(n,e,t){const i=this._before||this._after?{name:e,args:t,context:{}}:void 0;this._before&&Df(this._before,i);const r=n(this._hooks[e]?[...this._hooks[e]]:[],t,e);return r instanceof Promise?r.finally(()=>{this._after&&i&&Df(this._after,i)}):(this._after&&i&&Df(this._after,i),r)}beforeEach(n){return this._before=this._before||[],this._before.push(n),()=>{if(this._before!==void 0){const e=this._before.indexOf(n);e!==-1&&this._before.splice(e,1)}}}afterEach(n){return this._after=this._after||[],this._after.push(n),()=>{if(this._after!==void 0){const e=this._after.indexOf(n);e!==-1&&this._after.splice(e,1)}}}};function VS(){return new HS}const GS=new Set(["link","style","script","noscript"]),WS=new Set(["title","titleTemplate","script","style","noscript"]),Gh=new Set(["base","meta","link","style","script","noscript"]),XS=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),qS=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),Hm=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),YS=new Set(["templateParams","htmlAttrs","bodyAttrs"]),$S=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]),Lf=n=>typeof n=="number"?Number.isFinite(n):n;function z0(n){return n==="__proto__"||n==="constructor"||n==="prototype"}const Vm=(n,e)=>n._w===e._w?n._p-e._p:n._w-e._w,Gm={base:-10,title:10},jS={critical:-8,high:-1,low:2},Wm={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},KS=/@import/,Ka=n=>n===""||n===!0;function ZS(n,e){if(typeof e.tagPriority=="number")return e.tagPriority;let t=100;const i=jS[e.tagPriority]||0,r=n.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:Wm;if(e.tag in Gm)t=Gm[e.tag];else if(e.tag==="meta"){const s=e.props["http-equiv"]==="content-security-policy"?"content-security-policy":e.props.charset?"charset":e.props.name==="viewport"?"viewport":null;s&&(t=Wm.meta[s])}else if(e.tag==="link"&&e.props.rel)t=r.link[e.props.rel];else if(e.tag==="script"){const s=String(e.props.type);Ka(e.props.async)?t=r.script.async:e.props.src&&!Ka(e.props.defer)&&!Ka(e.props.async)&&s!=="module"&&!s.endsWith("json")||e.innerHTML&&!s.endsWith("json")?t=r.script.sync:(Ka(e.props.defer)&&e.props.src&&!Ka(e.props.async)||s==="module")&&(t=r.script.defer)}else e.tag==="style"&&(t=e.innerHTML&&KS.test(e.innerHTML)?r.style.imported:r.style.sync);return(t||100)+i}const JS=["name","property","http-equiv"],QS=new Set(["viewport","description","keywords","robots"]);function H0(n){const e=n.indexOf(":");if(e===-1)return!1;const t=n.indexOf(":",e+1),i=n.slice(e+1,t===-1?n.length:t);return i==="twitter"?n==="meta:twitter:image"||n.startsWith("meta:twitter:image:"):$S.has(i)}function Wh(n){const{props:e,tag:t}=n;if(qS.has(t))return t;if(t==="link"&&e.rel==="canonical")return"canonical";if(t==="link"&&e.rel==="alternate"){if(e.hreflang)return`alternate:${e.hreflang}`;if(e.type)return`alternate:${e.type}:${e.href||""}`}if(e.charset)return"charset";if(n.tag==="meta"){for(const i of JS)if(e[i]!==void 0){const r=e[i],s=r&&typeof r=="string"&&r.includes(":"),o=r&&QS.has(r),l=!(s||o)&&n.key?`:key:${n.key}`:"";return`${t}:${r}${l}`}}if(n.key)return`${t}:key:${n.key}`;if(e.id)return`${t}:id:${e.id}`;if(t==="link"&&e.rel==="alternate")return`alternate:${e.href||""}`;if(WS.has(t)){const i=n.textContent||n.innerHTML;if(i)return`${t}:content:${i}`}}function V0(n){const e=n._h||n._d;if(e)return e;const t=n.textContent||n.innerHTML;if(t)return t;const i=Object.keys(n.props).sort();return`${n.tag}:${i.map(r=>`${r}:${String(n.props[r])}`).join(",")}`}function Xh(n,e,t){typeof n==="function"&&(!t||t!=="titleTemplate"&&!(t[0]==="o"&&t[1]==="n"))&&(n=n());const r=e?e(t,n):n;if(Array.isArray(r)){let s;for(let o=0;o<r.length;o++){const a=Xh(r[o],e);s?s[o]=a:a!==r[o]&&(s=r.slice(0,o),s[o]=a)}return s||r}if(r?.constructor===Object){let s;for(const o in r){const a=z0(o),l=a?void 0:Xh(r[o],e,o);if(!s&&(a||o==="_resolver"||l!==r[o])){s={};for(const u in r){if(u===o)break;s[u]=r[u]}}s&&!a&&(s[o]=l)}return s||r}return r}const eM=/[\s"'<>/=\x00-\x1F\x7F]/;function tM(n,e){const t=n==="style"?new Map:new Set;function i(r){if(r==null||r===void 0)return;const s=String(r).trim();if(s)if(n==="style"){const[o,...a]=s.split(":").map(l=>l?l.trim():"");o&&a.length&&t.set(o,a.join(":"))}else s.split(" ").filter(Boolean).forEach(o=>t.add(o))}return typeof e=="string"?n==="style"?e.split(";").forEach(i):i(e):Array.isArray(e)?e.forEach(r=>i(r)):e&&typeof e=="object"&&Object.entries(e).forEach(([r,s])=>{s&&s!=="false"&&(n==="style"?t.set(String(r).trim(),String(s)):i(r))}),t}function G0(n,e){if(n.props=n.props||{},!e)return n;if(n.tag==="templateParams")return n.props=e,n;const t=Gh.has(n.tag)||n.tag==="htmlAttrs"||n.tag==="bodyAttrs";for(const i of Object.keys(e)){if(z0(i))continue;const r=i.startsWith("data-"),s=t&&!Hm.has(i),o=s&&!r?i.toLowerCase():i;if(s&&(!o||eM.test(o)))continue;const a=e[i];if(a===null){n.props[o]=null;continue}if(i==="class"||i==="style"){n.props[i]=tM(i,a);continue}if(Hm.has(i)){if((i==="textContent"||i==="innerHTML")&&typeof a=="object"){let u=e.type;if(e.type||(u="application/json"),!u?.endsWith("json")&&u!=="speculationrules")continue;e.type=u,n.props.type=u,n[i]=JSON.stringify(a)}else n[i]=a;continue}const l=String(a),c=n.tag==="meta"&&o==="content";l==="true"||l===""?n.props[o]=r||c?l:!0:!a&&r&&l==="false"?n.props[o]="false":a!==void 0&&(n.props[o]=a)}return n}function nM(n,e){const t=typeof e=="object"&&typeof e!="function"?e:{[n==="script"||n==="noscript"||n==="style"?"innerHTML":"textContent"]:e},i=G0({tag:n,props:{}},t);return i.key&&GS.has(i.tag)&&(i.props["data-hid"]=i._h=i.key),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(r=>({...i,props:{...i.props,content:r}})):i}function iM(n,e){if(!n)return[];typeof n=="function"&&(n=n());const t=(r,s)=>{for(let o=0;o<e.length;o++)s=e[o](r,s);return s};n=t(void 0,n);const i=[];return n=Xh(n,t),Object.entries(n||{}).forEach(([r,s])=>{if(s!==void 0)for(const o of Array.isArray(s)?s:[s])i.push(nM(r,o))}),i.flat()}function Xm(n,e){const t=typeof e=="function"?e(n):e,i=t.key||String(n.plugins.size+1);n.plugins.get(i)||(n.plugins.set(i,t),n.hooks.addHooks(t.hooks||{}))}function rM(n={}){const e=VS();e.addHooks(n.hooks||{});const t=!n.document,i=new Map,r=new Map,s=new Set,o={_entryCount:1,plugins:r,dirty:!1,resolvedOptions:n,hooks:e,ssr:t,entries:i,headEntries(){return[...i.values()]},use:a=>Xm(o,a),push(a,l){const c={...l||{}};delete c.head;const u=c._index??o._entryCount++,d={_i:u,input:a,options:c},f={_poll(h=!1){o.dirty=!0,!h&&s.add(u),e.callHook("entries:updated",o)},dispose(){i.delete(u)&&o.invalidate()},patch(h){(!c.mode||c.mode==="server"&&t||c.mode==="client"&&!t)&&(d.input=h,i.set(u,d),f._poll())}};return f.patch(a),f},async resolveTags(){const a={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await e.callHook("entries:resolve",a);s.size;){const f=s.values().next().value;s.delete(f);const h=i.get(f);if(h){const p={tags:iM(h.input,n.propResolvers||[]).map(m=>Object.assign(m,h.options)),entry:h};await e.callHook("entries:normalize",p),h._tags=p.tags.map((m,_)=>(m._w=ZS(o,m),m._p=(h._i<<10)+_,m._d=Wh(m),m._d||(m._h=V0(m)),m))}}let l=!1;a.entries.flatMap(f=>(f._tags||[]).map(h=>({...h,props:{...h.props}}))).sort(Vm).reduce((f,h)=>{const p=h._d||h._h;if(!f.has(p))return f.set(p,h);const m=f.get(p);if((h?.tagDuplicateStrategy||(YS.has(h.tag)?"merge":null)||(h.key&&h.key===m.key?"merge":null))==="merge"){const g={...m.props};Object.entries(h.props).forEach(([v,y])=>g[v]=v==="style"?new Map([...m.props.style||new Map,...y]):v==="class"?new Set([...m.props.class||new Set,...y]):y),f.set(p,{...h,props:g})}else h._p>>10===m._p>>10&&h.tag==="meta"&&H0(p)?(f.set(p,Object.assign([...Array.isArray(m)?m:[m],h],h)),l=!0):(h._w===m._w?h._p>m._p:h?._w<m?._w)&&f.set(p,h);return f},a.tagMap);const c=a.tagMap.get("title"),u=a.tagMap.get("titleTemplate");if(o._title=c?.textContent,u){const f=u?.textContent;if(o._titleTemplate=f,f){let h=typeof f=="function"?f(c?.textContent):f;typeof h=="string"&&!o.plugins.has("template-params")&&(h=h.replace("%s",c?.textContent||"")),c?h===null?a.tagMap.delete("title"):a.tagMap.set("title",{...c,textContent:h}):(u.tag="title",u.textContent=h)}}a.tags=Array.from(a.tagMap.values()),l&&(a.tags=a.tags.flat().sort(Vm)),await e.callHook("tags:beforeResolve",a),await e.callHook("tags:resolve",a),await e.callHook("tags:afterResolve",a);const d=[];for(const f of a.tags){const{innerHTML:h,tag:p,props:m}=f;if(XS.has(p)&&!(Object.keys(m).length===0&&!Lf(f.innerHTML)&&!Lf(f.textContent))&&!(p==="meta"&&!Lf(m.content)&&!m["http-equiv"]&&!m.charset)){if(p==="script"&&h){if(String(m.type).endsWith("json")){const _=typeof h=="string"?h:JSON.stringify(h);f.innerHTML=_.replace(/</g,"\\u003C")}else typeof h=="string"&&(f.innerHTML=h.replace(new RegExp(`</${p}`,"g"),`<\\/${p}`));f._d=Wh(f)}d.push(f)}}return d},invalidate(){for(const a of i.values())s.add(a._i);o.dirty=!0,e.callHook("entries:updated",o)}};return(n?.plugins||[]).forEach(a=>Xm(o,a)),o.hooks.callHook("init",o),n.init?.forEach(a=>a&&o.push(a)),o}async function W0(n,e={}){const t=e.document||n.resolvedOptions.document;if(!t||!n.dirty)return;const i={shouldRender:!0,tags:[]};if(await n.hooks.callHook("dom:beforeRender",i),!!i.shouldRender)return n._domUpdatePromise||(n._domUpdatePromise=new Promise(async r=>{const s=new Map,o=new Promise(h=>{n.resolveTags().then(p=>{h(p.map(m=>{const _=s.get(m._d)||0,g={tag:m,id:(_?`${m._d}:${_}`:m._d)||m._h,shouldRender:!0};return m._d&&H0(m._d)&&s.set(m._d,_+1),g}))})});let a=n._dom;if(!a){a={title:t.title,elMap:new Map().set("htmlAttrs",t.documentElement).set("bodyAttrs",t.body)};for(const h of["body","head"]){const p=t[h]?.children;for(const m of p){const _=m.tagName.toLowerCase();if(!Gh.has(_))continue;const g=G0({tag:_,props:{}},{innerHTML:m.innerHTML,...m.getAttributeNames().reduce((v,y)=>(v[y]=m.getAttribute(y),v),{})||{}});if(g.key=m.getAttribute("data-hid")||void 0,g._d=Wh(g)||V0(g),a.elMap.has(g._d)){let v=1,y=g._d;for(;a.elMap.has(y);)y=`${g._d}:${v++}`;a.elMap.set(y,m)}else a.elMap.set(g._d,m)}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function l(h,p,m){const _=`${h}:${p}`;a.sideEffects[_]=m,delete a.pendingSideEffects[_]}function c({id:h,$el:p,tag:m}){const _=m.tag.endsWith("Attrs");a.elMap.set(h,p),_||(m.textContent&&m.textContent!==p.textContent&&(p.textContent=m.textContent),m.innerHTML&&m.innerHTML!==p.innerHTML&&(p.innerHTML=m.innerHTML),l(h,"el",()=>{p?.remove(),a.elMap.delete(h)}));for(const g in m.props){if(!Object.prototype.hasOwnProperty.call(m.props,g))continue;const v=m.props[g];if(g.startsWith("on")&&typeof v=="function"){const x=p?.dataset;if(x&&x[`${g}fired`]){const E=g.slice(0,-5);v.call(p,new Event(E.substring(2)))}p.getAttribute(`data-${g}`)!==""&&((m.tag==="bodyAttrs"?t.defaultView:p).addEventListener(g.substring(2),v.bind(p)),p.setAttribute(`data-${g}`,""));continue}const y=`attr:${g}`;if(g==="class"){if(!v)continue;for(const x of v)_&&l(h,`${y}:${x}`,()=>p.classList.remove(x)),!p.classList.contains(x)&&p.classList.add(x)}else if(g==="style"){if(!v)continue;for(const[x,E]of v)l(h,`${y}:${x}`,()=>{p.style.removeProperty(x)}),p.style.setProperty(x,E)}else v!==!1&&v!==null&&(p.getAttribute(g)!==v&&p.setAttribute(g,v===!0?"":String(v)),_&&l(h,y,()=>p.removeAttribute(g)))}}const u=[],d={bodyClose:void 0,bodyOpen:void 0,head:void 0},f=await o;for(const h of f){const{tag:p,shouldRender:m,id:_}=h;if(m){if(p.tag==="title"){t.title=p.textContent,l("title","",()=>t.title=a.title);continue}h.$el=h.$el||a.elMap.get(_),h.$el?c(h):Gh.has(p.tag)&&u.push(h)}}for(const h of u){const p=h.tag.tagPosition||"head";h.$el=t.createElement(h.tag.tag),c(h),d[p]=d[p]||t.createDocumentFragment(),d[p].appendChild(h.$el)}for(const h of f)await n.hooks.callHook("dom:renderTag",h,t,l);d.head&&t.head.appendChild(d.head),d.bodyOpen&&t.body.insertBefore(d.bodyOpen,t.body.firstChild),d.bodyClose&&t.body.appendChild(d.bodyClose);for(const h in a.pendingSideEffects)a.pendingSideEffects[h]();n._dom=a,await n.hooks.callHook("dom:rendered",{renders:f}),r()}).finally(()=>{n._domUpdatePromise=void 0,n.dirty=!1})),n._domUpdatePromise}function sM(n={}){const e=n.domOptions?.render||W0;n.document=n.document||(typeof window<"u"?document:void 0);const t=n.document?.head.querySelector('script[id="unhead:payload"]')?.innerHTML||!1,i=rM({...n,plugins:[...n.plugins||[],{key:"client",hooks:{"entries:updated":e}}],init:[t?JSON.parse(t):!1,...n.init||[]]});return i.ssr=!1,i}function oM(n,e){let t=0;return()=>{const i=++t;e(()=>{t===i&&n()})}}function Rp(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const It={},ga=[],rr=()=>{},X0=()=>!1,uf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Pp=n=>n.startsWith("onUpdate:"),gn=Object.assign,Dp=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},aM=Object.prototype.hasOwnProperty,wt=(n,e)=>aM.call(n,e),$e=Array.isArray,_a=n=>hc(n)==="[object Map]",ff=n=>hc(n)==="[object Set]",qm=n=>hc(n)==="[object Date]",Qe=n=>typeof n=="function",Yt=n=>typeof n=="string",lr=n=>typeof n=="symbol",At=n=>n!==null&&typeof n=="object",q0=n=>(At(n)||Qe(n))&&Qe(n.then)&&Qe(n.catch),Y0=Object.prototype.toString,hc=n=>Y0.call(n),lM=n=>hc(n).slice(8,-1),$0=n=>hc(n)==="[object Object]",Lp=n=>Yt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,El=Rp(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hf=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},cM=/-\w/g,Xi=hf(n=>n.replace(cM,e=>e.slice(1).toUpperCase())),uM=/\B([A-Z])/g,qs=hf(n=>n.replace(uM,"-$1").toLowerCase()),df=hf(n=>n.charAt(0).toUpperCase()+n.slice(1)),If=hf(n=>n?`on${df(n)}`:""),Us=(n,e)=>!Object.is(n,e),gu=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},j0=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Ip=n=>{const e=parseFloat(n);return isNaN(e)?n:e},fM=n=>{const e=Yt(n)?Number(n):NaN;return isNaN(e)?n:e};let Ym;const pf=()=>Ym||(Ym=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function wr(n){if($e(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Yt(i)?mM(i):wr(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Yt(n)||At(n))return n}const hM=/;(?![^(]*\))/g,dM=/:([^]+)/,pM=/\/\*[^]*?\*\//g;function mM(n){const e={};return n.replace(pM,"").split(hM).forEach(t=>{if(t){const i=t.split(dM);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ir(n){let e="";if(Yt(n))e=n;else if($e(n))for(let t=0;t<n.length;t++){const i=Ir(n[t]);i&&(e+=i+" ")}else if(At(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const gM="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_M=Rp(gM);function K0(n){return!!n||n===""}function vM(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=dc(n[i],e[i]);return t}function dc(n,e){if(n===e)return!0;let t=qm(n),i=qm(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=lr(n),i=lr(e),t||i)return n===e;if(t=$e(n),i=$e(e),t||i)return t&&i?vM(n,e):!1;if(t=At(n),i=At(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!dc(n[o],e[o]))return!1}}return String(n)===String(e)}function Z0(n,e){return n.findIndex(t=>dc(t,e))}const J0=n=>!!(n&&n.__v_isRef===!0),dn=n=>Yt(n)?n:n==null?"":$e(n)||At(n)&&(n.toString===Y0||!Qe(n.toString))?J0(n)?dn(n.value):JSON.stringify(n,Q0,2):String(n),Q0=(n,e)=>J0(e)?Q0(n,e.value):_a(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Nf(i,s)+" =>"]=r,t),{})}:ff(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Nf(t))}:lr(e)?Nf(e):At(e)&&!$e(e)&&!$0(e)?String(e):e,Nf=(n,e="")=>{var t;return lr(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};function xM(n){return n==null?"initial":typeof n=="string"?n===""?" ":n:String(n)}let oi;class yM{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=oi,!e&&oi&&(this.index=(oi.scopes||(oi.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=oi;try{return oi=this,e()}finally{oi=t}}}on(){++this._on===1&&(this.prevScope=oi,oi=this)}off(){this._on>0&&--this._on===0&&(oi=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function SM(){return oi}let kt;const Of=new WeakSet;class ev{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,oi&&oi.active&&oi.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Of.has(this)&&(Of.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||nv(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,$m(this),iv(this);const e=kt,t=sr;kt=this,sr=!0;try{return this.fn()}finally{rv(this),kt=e,sr=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Up(e);this.deps=this.depsTail=void 0,$m(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Of.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){qh(this)&&this.run()}get dirty(){return qh(this)}}let tv=0,Tl,wl;function nv(n,e=!1){if(n.flags|=8,e){n.next=wl,wl=n;return}n.next=Tl,Tl=n}function Np(){tv++}function Op(){if(--tv>0)return;if(wl){let e=wl;for(wl=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Tl;){let e=Tl;for(Tl=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function iv(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function rv(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Up(i),MM(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function qh(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(sv(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function sv(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ql)||(n.globalVersion=ql,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!qh(n))))return;n.flags|=2;const e=n.dep,t=kt,i=sr;kt=n,sr=!0;try{iv(n);const r=n.fn(n._value);(e.version===0||Us(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{kt=t,sr=i,rv(n),n.flags&=-3}}function Up(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Up(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function MM(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let sr=!0;const ov=[];function rs(){ov.push(sr),sr=!1}function ss(){const n=ov.pop();sr=n===void 0?!0:n}function $m(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=kt;kt=void 0;try{e()}finally{kt=t}}}let ql=0;class bM{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Fp{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!kt||!sr||kt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==kt)t=this.activeLink=new bM(kt,this),kt.deps?(t.prevDep=kt.depsTail,kt.depsTail.nextDep=t,kt.depsTail=t):kt.deps=kt.depsTail=t,av(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=kt.depsTail,t.nextDep=void 0,kt.depsTail.nextDep=t,kt.depsTail=t,kt.deps===t&&(kt.deps=i)}return t}trigger(e){this.version++,ql++,this.notify(e)}notify(e){Np();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Op()}}}function av(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)av(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Yh=new WeakMap,bo=Symbol(""),$h=Symbol(""),Yl=Symbol("");function zn(n,e,t){if(sr&&kt){let i=Yh.get(n);i||Yh.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Fp),r.map=i,r.key=t),r.track()}}function jr(n,e,t,i,r,s){const o=Yh.get(n);if(!o){ql++;return}const a=l=>{l&&l.trigger()};if(Np(),e==="clear")o.forEach(a);else{const l=$e(n),c=l&&Lp(t);if(l&&t==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===Yl||!lr(f)&&f>=u)&&a(d)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Yl)),e){case"add":l?c&&a(o.get("length")):(a(o.get(bo)),_a(n)&&a(o.get($h)));break;case"delete":l||(a(o.get(bo)),_a(n)&&a(o.get($h)));break;case"set":_a(n)&&a(o.get(bo));break}}Op()}function Wo(n){const e=St(n);return e===n?e:(zn(e,"iterate",Yl),Vi(n)?e:e.map(cr))}function mf(n){return zn(n=St(n),"iterate",Yl),n}function ws(n,e){return os(n)?Da(Eo(n)?cr(e):e):cr(e)}const EM={__proto__:null,[Symbol.iterator](){return Uf(this,Symbol.iterator,n=>ws(this,n))},concat(...n){return Wo(this).concat(...n.map(e=>$e(e)?Wo(e):e))},entries(){return Uf(this,"entries",n=>(n[1]=ws(this,n[1]),n))},every(n,e){return Fr(this,"every",n,e,void 0,arguments)},filter(n,e){return Fr(this,"filter",n,e,t=>t.map(i=>ws(this,i)),arguments)},find(n,e){return Fr(this,"find",n,e,t=>ws(this,t),arguments)},findIndex(n,e){return Fr(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Fr(this,"findLast",n,e,t=>ws(this,t),arguments)},findLastIndex(n,e){return Fr(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Fr(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ff(this,"includes",n)},indexOf(...n){return Ff(this,"indexOf",n)},join(n){return Wo(this).join(n)},lastIndexOf(...n){return Ff(this,"lastIndexOf",n)},map(n,e){return Fr(this,"map",n,e,void 0,arguments)},pop(){return Za(this,"pop")},push(...n){return Za(this,"push",n)},reduce(n,...e){return jm(this,"reduce",n,e)},reduceRight(n,...e){return jm(this,"reduceRight",n,e)},shift(){return Za(this,"shift")},some(n,e){return Fr(this,"some",n,e,void 0,arguments)},splice(...n){return Za(this,"splice",n)},toReversed(){return Wo(this).toReversed()},toSorted(n){return Wo(this).toSorted(n)},toSpliced(...n){return Wo(this).toSpliced(...n)},unshift(...n){return Za(this,"unshift",n)},values(){return Uf(this,"values",n=>ws(this,n))}};function Uf(n,e,t){const i=mf(n),r=i[e]();return i!==n&&!Vi(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const TM=Array.prototype;function Fr(n,e,t,i,r,s){const o=mf(n),a=o!==n&&!Vi(n),l=o[e];if(l!==TM[e]){const d=l.apply(n,s);return a?cr(d):d}let c=t;o!==n&&(a?c=function(d,f){return t.call(this,ws(n,d),f,n)}:t.length>2&&(c=function(d,f){return t.call(this,d,f,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function jm(n,e,t,i){const r=mf(n);let s=t;return r!==n&&(Vi(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,ws(n,a),l,n)}),r[e](s,...i)}function Ff(n,e,t){const i=St(n);zn(i,"iterate",Yl);const r=i[e](...t);return(r===-1||r===!1)&&zp(t[0])?(t[0]=St(t[0]),i[e](...t)):r}function Za(n,e,t=[]){rs(),Np();const i=St(n)[e].apply(n,t);return Op(),ss(),i}const wM=Rp("__proto__,__v_isRef,__isVue"),lv=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(lr));function AM(n){lr(n)||(n=String(n));const e=St(this);return zn(e,"has",n),e.hasOwnProperty(n)}class cv{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?FM:dv:s?hv:fv).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=$e(e);if(!r){let l;if(o&&(l=EM[t]))return l;if(t==="hasOwnProperty")return AM}const a=Reflect.get(e,t,Xn(e)?e:i);if((lr(t)?lv.has(t):wM(t))||(r||zn(e,"get",t),s))return a;if(Xn(a)){const l=o&&Lp(t)?a:a.value;return r&&At(l)?Uu(l):l}return At(a)?r?Uu(a):pc(a):a}}class uv extends cv{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=$e(e)&&Lp(t);if(!this._isShallow){const c=os(s);if(!Vi(i)&&!os(i)&&(s=St(s),i=St(i)),!o&&Xn(s)&&!Xn(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:wt(e,t),l=Reflect.set(e,t,i,Xn(e)?e:r);return e===St(r)&&(a?Us(i,s)&&jr(e,"set",t,i):jr(e,"add",t,i)),l}deleteProperty(e,t){const i=wt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&jr(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!lr(t)||!lv.has(t))&&zn(e,"has",t),i}ownKeys(e){return zn(e,"iterate",$e(e)?"length":bo),Reflect.ownKeys(e)}}class CM extends cv{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const RM=new uv,PM=new CM,DM=new uv(!0);const jh=n=>n,Cc=n=>Reflect.getPrototypeOf(n);function LM(n,e,t){return function(...i){const r=this.__v_raw,s=St(r),o=_a(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?jh:e?Da:cr;return!e&&zn(s,"iterate",l?$h:bo),gn(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function Rc(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function IM(n,e){const t={get(r){const s=this.__v_raw,o=St(s),a=St(r);n||(Us(r,a)&&zn(o,"get",r),zn(o,"get",a));const{has:l}=Cc(o),c=e?jh:n?Da:cr;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&zn(St(r),"iterate",bo),r.size},has(r){const s=this.__v_raw,o=St(s),a=St(r);return n||(Us(r,a)&&zn(o,"has",r),zn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=St(a),c=e?jh:n?Da:cr;return!n&&zn(l,"iterate",bo),a.forEach((u,d)=>r.call(s,c(u),c(d),o))}};return gn(t,n?{add:Rc("add"),set:Rc("set"),delete:Rc("delete"),clear:Rc("clear")}:{add(r){!e&&!Vi(r)&&!os(r)&&(r=St(r));const s=St(this);return Cc(s).has.call(s,r)||(s.add(r),jr(s,"add",r,r)),this},set(r,s){!e&&!Vi(s)&&!os(s)&&(s=St(s));const o=St(this),{has:a,get:l}=Cc(o);let c=a.call(o,r);c||(r=St(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Us(s,u)&&jr(o,"set",r,s):jr(o,"add",r,s),this},delete(r){const s=St(this),{has:o,get:a}=Cc(s);let l=o.call(s,r);l||(r=St(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&jr(s,"delete",r,void 0),c},clear(){const r=St(this),s=r.size!==0,o=r.clear();return s&&jr(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=LM(r,n,e)}),t}function Bp(n,e){const t=IM(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(wt(t,r)&&r in i?t:i,r,s)}const NM={get:Bp(!1,!1)},OM={get:Bp(!1,!0)},UM={get:Bp(!0,!1)};const fv=new WeakMap,hv=new WeakMap,dv=new WeakMap,FM=new WeakMap;function BM(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function kM(n){return n.__v_skip||!Object.isExtensible(n)?0:BM(lM(n))}function pc(n){return os(n)?n:kp(n,!1,RM,NM,fv)}function pv(n){return kp(n,!1,DM,OM,hv)}function Uu(n){return kp(n,!0,PM,UM,dv)}function kp(n,e,t,i,r){if(!At(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=kM(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function Eo(n){return os(n)?Eo(n.__v_raw):!!(n&&n.__v_isReactive)}function os(n){return!!(n&&n.__v_isReadonly)}function Vi(n){return!!(n&&n.__v_isShallow)}function zp(n){return n?!!n.__v_raw:!1}function St(n){const e=n&&n.__v_raw;return e?St(e):n}function zM(n){return!wt(n,"__v_skip")&&Object.isExtensible(n)&&j0(n,"__v_skip",!0),n}const cr=n=>At(n)?pc(n):n,Da=n=>At(n)?Uu(n):n;function Xn(n){return n?n.__v_isRef===!0:!1}function nt(n){return mv(n,!1)}function ho(n){return mv(n,!0)}function mv(n,e){return Xn(n)?n:new HM(n,e)}class HM{constructor(e,t){this.dep=new Fp,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:St(e),this._value=t?e:cr(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Vi(e)||os(e);e=i?e:St(e),Us(e,t)&&(this._rawValue=e,this._value=i?e:cr(e),this.dep.trigger())}}function ht(n){return Xn(n)?n.value:n}const VM={get:(n,e,t)=>e==="__v_raw"?n:ht(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Xn(r)&&!Xn(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function gv(n){return Eo(n)?n:new Proxy(n,VM)}class GM{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Fp(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ql-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&kt!==this)return nv(this,!0),!0}get value(){const e=this.dep.track();return sv(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function WM(n,e,t=!1){let i,r;return Qe(n)?i=n:(i=n.get,r=n.set),new GM(i,r,t)}const Pc={},Fu=new WeakMap;let ao;function XM(n,e=!1,t=ao){if(t){let i=Fu.get(t);i||Fu.set(t,i=[]),i.push(n)}}function qM(n,e,t=It){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=x=>r?x:Vi(x)||r===!1||r===0?Kr(x,1):Kr(x);let u,d,f,h,p=!1,m=!1;if(Xn(n)?(d=()=>n.value,p=Vi(n)):Eo(n)?(d=()=>c(n),p=!0):$e(n)?(m=!0,p=n.some(x=>Eo(x)||Vi(x)),d=()=>n.map(x=>{if(Xn(x))return x.value;if(Eo(x))return c(x);if(Qe(x))return l?l(x,2):x()})):Qe(n)?e?d=l?()=>l(n,2):n:d=()=>{if(f){rs();try{f()}finally{ss()}}const x=ao;ao=u;try{return l?l(n,3,[h]):n(h)}finally{ao=x}}:d=rr,e&&r){const x=d,E=r===!0?1/0:r;d=()=>Kr(x(),E)}const _=SM(),g=()=>{u.stop(),_&&_.active&&Dp(_.effects,u)};if(s&&e){const x=e;e=(...E)=>{x(...E),g()}}let v=m?new Array(n.length).fill(Pc):Pc;const y=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const E=u.run();if(r||p||(m?E.some((T,w)=>Us(T,v[w])):Us(E,v))){f&&f();const T=ao;ao=u;try{const w=[E,v===Pc?void 0:m&&v[0]===Pc?[]:v,h];v=E,l?l(e,3,w):e(...w)}finally{ao=T}}}else u.run()};return a&&a(y),u=new ev(d),u.scheduler=o?()=>o(y,!1):y,h=x=>XM(x,!1,u),f=u.onStop=()=>{const x=Fu.get(u);if(x){if(l)l(x,4);else for(const E of x)E();Fu.delete(u)}},e?i?y(!0):v=u.run():o?o(y.bind(null,!0),!0):u.run(),g.pause=u.pause.bind(u),g.resume=u.resume.bind(u),g.stop=g,g}function Kr(n,e=1/0,t){if(e<=0||!At(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Xn(n))Kr(n.value,e,t);else if($e(n))for(let i=0;i<n.length;i++)Kr(n[i],e,t);else if(ff(n)||_a(n))n.forEach(i=>{Kr(i,e,t)});else if($0(n)){for(const i in n)Kr(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Kr(n[i],e,t)}return n}function mc(n,e,t,i){try{return i?n(...i):n()}catch(r){gc(r,e,t)}}function ur(n,e,t,i){if(Qe(n)){const r=mc(n,e,t,i);return r&&q0(r)&&r.catch(s=>{gc(s,e,t)}),r}if($e(n)){const r=[];for(let s=0;s<n.length;s++)r.push(ur(n[s],e,t,i));return r}}function gc(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||It;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(s){rs(),mc(s,null,10,[n,l,c]),ss();return}}YM(n,t,r,i,o)}function YM(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const ti=[];let vr=-1;const va=[];let As=null,ca=0;const _v=Promise.resolve();let Bu=null;function xa(n){const e=Bu||_v;return n?e.then(this?n.bind(this):n):e}function $M(n){let e=vr+1,t=ti.length;for(;e<t;){const i=e+t>>>1,r=ti[i],s=$l(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Hp(n){if(!(n.flags&1)){const e=$l(n),t=ti[ti.length-1];!t||!(n.flags&2)&&e>=$l(t)?ti.push(n):ti.splice($M(e),0,n),n.flags|=1,vv()}}function vv(){Bu||(Bu=_v.then(Sv))}function xv(n){$e(n)?va.push(...n):As&&n.id===-1?As.splice(ca+1,0,n):n.flags&1||(va.push(n),n.flags|=1),vv()}function Km(n,e,t=vr+1){for(;t<ti.length;t++){const i=ti[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;ti.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function yv(n){if(va.length){const e=[...new Set(va)].sort((t,i)=>$l(t)-$l(i));if(va.length=0,As){As.push(...e);return}for(As=e,ca=0;ca<As.length;ca++){const t=As[ca];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}As=null,ca=0}}const $l=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Sv(n){try{for(vr=0;vr<ti.length;vr++){const e=ti[vr];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),mc(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;vr<ti.length;vr++){const e=ti[vr];e&&(e.flags&=-2)}vr=-1,ti.length=0,yv(),Bu=null,(ti.length||va.length)&&Sv()}}let Cn=null,Mv=null;function ku(n){const e=Cn;return Cn=n,Mv=n&&n.type.__scopeId||null,e}function Bi(n,e=Cn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Gu(-1);const s=ku(e);let o;try{o=n(...r)}finally{ku(s),i._d&&Gu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Kh(n,e){if(Cn===null)return n;const t=yf(Cn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=It]=e[r];s&&(Qe(s)&&(s={mounted:s,updated:s}),s.deep&&Kr(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function js(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(rs(),ur(l,t,8,[n.el,a,n,e]),ss())}}function _u(n,e){if(An){let t=An.provides;const i=An.parent&&An.parent.provides;i===t&&(t=An.provides=Object.create(i)),t[n]=e}}function Gi(n,e,t=!1){const i=Fo();if(i||Sa){let r=Sa?Sa._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Qe(e)?e.call(i&&i.proxy):e}}const jM=Symbol.for("v-scx"),KM=()=>Gi(jM);function ZM(n,e){return Vp(n,null,e)}function or(n,e,t){return Vp(n,e,t)}function Vp(n,e,t=It){const{immediate:i,deep:r,flush:s,once:o}=t,a=gn({},t),l=e&&i||!e&&s!=="post";let c;if(La){if(s==="sync"){const h=KM();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=rr,h.resume=rr,h.pause=rr,h}}const u=An;a.call=(h,p,m)=>ur(h,u,p,m);let d=!1;s==="post"?a.scheduler=h=>{Bn(h,u&&u.suspense)}:s!=="sync"&&(d=!0,a.scheduler=(h,p)=>{p?h():Hp(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=qM(n,e,a);return La&&(c?c.push(f):l&&f()),f}function JM(n,e,t){const i=this.proxy,r=Yt(n)?n.includes(".")?bv(i,n):()=>i[n]:n.bind(i,i);let s;Qe(e)?s=e:(s=e.handler,t=e);const o=yc(this),a=Vp(r,s.bind(i),t);return o(),a}function bv(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Ev=Symbol("_vte"),Tv=n=>n.__isTeleport,Al=n=>n&&(n.disabled||n.disabled===""),Zm=n=>n&&(n.defer||n.defer===""),Jm=n=>typeof SVGElement<"u"&&n instanceof SVGElement,Qm=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,Zh=(n,e)=>{const t=n&&n.to;return Yt(t)?e?e(t):null:t},wv={name:"Teleport",__isTeleport:!0,process(n,e,t,i,r,s,o,a,l,c){const{mc:u,pc:d,pbc:f,o:{insert:h,querySelector:p,createText:m,createComment:_}}=c,g=Al(e.props);let{shapeFlag:v,children:y,dynamicChildren:x}=e;if(n==null){const E=e.el=m(""),T=e.anchor=m("");h(E,t,i),h(T,t,i);const w=(M,P)=>{v&16&&u(y,M,P,r,s,o,a,l)},S=()=>{const M=e.target=Zh(e.props,p),P=Jh(M,e,m,h);M&&(o!=="svg"&&Jm(M)?o="svg":o!=="mathml"&&Qm(M)&&(o="mathml"),r&&r.isCE&&(r.ce._teleportTargets||(r.ce._teleportTargets=new Set)).add(M),g||(w(M,P),vu(e,!1)))};g&&(w(t,T),vu(e,!0)),Zm(e.props)?(e.el.__isMounted=!1,Bn(()=>{S(),delete e.el.__isMounted},s)):S()}else{if(Zm(e.props)&&n.el.__isMounted===!1){Bn(()=>{wv.process(n,e,t,i,r,s,o,a,l,c)},s);return}e.el=n.el,e.targetStart=n.targetStart;const E=e.anchor=n.anchor,T=e.target=n.target,w=e.targetAnchor=n.targetAnchor,S=Al(n.props),M=S?t:T,P=S?E:w;if(o==="svg"||Jm(T)?o="svg":(o==="mathml"||Qm(T))&&(o="mathml"),x?(f(n.dynamicChildren,x,M,r,s,o,a),$p(n,e,!0)):l||d(n,e,M,P,r,s,o,a,!1),g)S?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):Dc(e,t,E,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const L=e.target=Zh(e.props,p);L&&Dc(e,L,null,c,0)}else S&&Dc(e,T,w,c,1);vu(e,g)}},remove(n,e,t,{um:i,o:{remove:r}},s){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:d,props:f}=n;if(d&&(r(c),r(u)),s&&r(l),o&16){const h=s||!Al(f);for(let p=0;p<a.length;p++){const m=a[p];i(m,e,t,h,!!m.dynamicChildren)}}},move:Dc,hydrate:QM};function Dc(n,e,t,{o:{insert:i},m:r},s=2){s===0&&i(n.targetAnchor,e,t);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=n,d=s===2;if(d&&i(o,e,t),(!d||Al(u))&&l&16)for(let f=0;f<c.length;f++)r(c[f],e,t,2);d&&i(a,e,t)}function QM(n,e,t,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},d){function f(_,g){let v=g;for(;v;){if(v&&v.nodeType===8){if(v.data==="teleport start anchor")e.targetStart=v;else if(v.data==="teleport anchor"){e.targetAnchor=v,_._lpa=e.targetAnchor&&o(e.targetAnchor);break}}v=o(v)}}function h(_,g){g.anchor=d(o(_),g,a(_),t,i,r,s)}const p=e.target=Zh(e.props,l),m=Al(e.props);if(p){const _=p._lpa||p.firstChild;e.shapeFlag&16&&(m?(h(n,e),f(p,_),e.targetAnchor||Jh(p,e,u,c,a(n)===p?n:null)):(e.anchor=o(n),f(p,_),e.targetAnchor||Jh(p,e,u,c),d(_&&o(_),e,p,t,i,r,s))),vu(e,m)}else m&&e.shapeFlag&16&&(h(n,e),e.targetStart=n,e.targetAnchor=o(n));return e.anchor&&o(e.anchor)}const eb=wv;function vu(n,e){const t=n.ctx;if(t&&t.ut){let i,r;for(e?(i=n.el,r=n.anchor):(i=n.targetStart,r=n.targetAnchor);i&&i!==r;)i.nodeType===1&&i.setAttribute("data-v-owner",t.uid),i=i.nextSibling;t.ut()}}function Jh(n,e,t,i,r=null){const s=e.targetStart=t(""),o=e.targetAnchor=t("");return s[Ev]=o,n&&(i(s,n,r),i(o,n,r)),o}const yr=Symbol("_leaveCb"),Ja=Symbol("_enterCb");function tb(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return dr(()=>{n.isMounted=!0}),xc(()=>{n.isUnmounting=!0}),n}const Li=[Function,Array],Av={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Li,onEnter:Li,onAfterEnter:Li,onEnterCancelled:Li,onBeforeLeave:Li,onLeave:Li,onAfterLeave:Li,onLeaveCancelled:Li,onBeforeAppear:Li,onAppear:Li,onAfterAppear:Li,onAppearCancelled:Li},Cv=n=>{const e=n.subTree;return e.component?Cv(e.component):e},nb={name:"BaseTransition",props:Av,setup(n,{slots:e}){const t=Fo(),i=tb();return()=>{const r=e.default&&Dv(e.default(),!0);if(!r||!r.length)return;const s=Rv(r),o=St(n),{mode:a}=o;if(i.isLeaving)return Bf(s);const l=eg(s);if(!l)return Bf(s);let c=Qh(l,o,i,t,d=>c=d);l.type!==Hn&&jl(l,c);let u=t.subTree&&eg(t.subTree);if(u&&u.type!==Hn&&!po(u,l)&&Cv(t).type!==Hn){let d=Qh(u,o,i,t);if(jl(u,d),a==="out-in"&&l.type!==Hn)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,u=void 0},Bf(s);a==="in-out"&&l.type!==Hn?d.delayLeave=(f,h,p)=>{const m=Pv(i,u);m[String(u.key)]=u,f[yr]=()=>{h(),f[yr]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{p(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function Rv(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Hn){e=t;break}}return e}const ib=nb;function Pv(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Qh(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:_,onAppear:g,onAfterAppear:v,onAppearCancelled:y}=e,x=String(n.key),E=Pv(t,n),T=(M,P)=>{M&&ur(M,i,9,P)},w=(M,P)=>{const L=P[1];T(M,P),$e(M)?M.every(R=>R.length<=1)&&L():M.length<=1&&L()},S={mode:o,persisted:a,beforeEnter(M){let P=l;if(!t.isMounted)if(s)P=_||l;else return;M[yr]&&M[yr](!0);const L=E[x];L&&po(n,L)&&L.el[yr]&&L.el[yr](),T(P,[M])},enter(M){if(E[x]===n)return;let P=c,L=u,R=d;if(!t.isMounted)if(s)P=g||c,L=v||u,R=y||d;else return;let O=!1;M[Ja]=X=>{O||(O=!0,X?T(R,[M]):T(L,[M]),S.delayedLeave&&S.delayedLeave(),M[Ja]=void 0)};const V=M[Ja].bind(null,!1);P?w(P,[M,V]):V()},leave(M,P){const L=String(n.key);if(M[Ja]&&M[Ja](!0),t.isUnmounting)return P();T(f,[M]);let R=!1;M[yr]=V=>{R||(R=!0,P(),V?T(m,[M]):T(p,[M]),M[yr]=void 0,E[L]===n&&delete E[L])};const O=M[yr].bind(null,!1);E[L]=n,h?w(h,[M,O]):O()},clone(M){const P=Qh(M,e,t,i,r);return r&&r(P),P}};return S}function Bf(n){if(vc(n))return n=zs(n),n.children=null,n}function eg(n){if(!vc(n))return Tv(n.type)&&n.children?Rv(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Qe(t.default))return t.default()}}function jl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,jl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Dv(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===mn?(o.patchFlag&128&&r++,i=i.concat(Dv(o.children,e,a))):(e||o.type!==Hn)&&i.push(a!=null?zs(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function _c(n,e){return Qe(n)?gn({name:n.name},e,{setup:n}):n}function LI(){const n=Fo();return n?(n.appContext.config.idPrefix||"v")+"-"+n.ids[0]+n.ids[1]++:""}function Gp(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function rb(n){const e=Fo(),t=ho(null);if(e){const r=e.refs===It?e.refs={}:e.refs;Object.defineProperty(r,n,{enumerable:!0,get:()=>t.value,set:s=>t.value=s})}return t}function tg(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const zu=new WeakMap;function Cl(n,e,t,i,r=!1){if($e(n)){n.forEach((m,_)=>Cl(m,e&&($e(e)?e[_]:e),t,i,r));return}if(ya(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Cl(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?yf(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===It?a.refs={}:a.refs,d=a.setupState,f=St(d),h=d===It?X0:m=>tg(u,m)?!1:wt(f,m),p=(m,_)=>!(_&&tg(u,_));if(c!=null&&c!==l){if(ng(e),Yt(c))u[c]=null,h(c)&&(d[c]=null);else if(Xn(c)){const m=e;p(c,m.k)&&(c.value=null),m.k&&(u[m.k]=null)}}if(Qe(l))mc(l,a,12,[o,u]);else{const m=Yt(l),_=Xn(l);if(m||_){const g=()=>{if(n.f){const v=m?h(l)?d[l]:u[l]:p()||!n.k?l.value:u[n.k];if(r)$e(v)&&Dp(v,s);else if($e(v))v.includes(s)||v.push(s);else if(m)u[l]=[s],h(l)&&(d[l]=u[l]);else{const y=[s];p(l,n.k)&&(l.value=y),n.k&&(u[n.k]=y)}}else m?(u[l]=o,h(l)&&(d[l]=o)):_&&(p(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const v=()=>{g(),zu.delete(n)};v.id=-1,zu.set(n,v),Bn(v,t)}else ng(n),g()}}}function ng(n){const e=zu.get(n);e&&(e.flags|=8,zu.delete(n))}const ig=n=>n.nodeType===8;pf().requestIdleCallback;pf().cancelIdleCallback;function sb(n,e){if(ig(n)&&n.data==="["){let t=1,i=n.nextSibling;for(;i;){if(i.nodeType===1){if(e(i)===!1)break}else if(ig(i))if(i.data==="]"){if(--t===0)break}else i.data==="["&&t++;i=i.nextSibling}}else e(n)}const ya=n=>!!n.type.__asyncLoader;function II(n){Qe(n)&&(n={loader:n});const{loader:e,loadingComponent:t,errorComponent:i,delay:r=200,hydrate:s,timeout:o,suspensible:a=!0,onError:l}=n;let c=null,u,d=0;const f=()=>(d++,c=null,h()),h=()=>{let p;return c||(p=c=e().catch(m=>{if(m=m instanceof Error?m:new Error(String(m)),l)return new Promise((_,g)=>{l(m,()=>_(f()),()=>g(m),d+1)});throw m}).then(m=>p!==c&&c?c:(m&&(m.__esModule||m[Symbol.toStringTag]==="Module")&&(m=m.default),u=m,m)))};return _c({name:"AsyncComponentWrapper",__asyncLoader:h,__asyncHydrate(p,m,_){let g=!1;(m.bu||(m.bu=[])).push(()=>g=!0);const v=()=>{g||_()},y=s?()=>{const x=s(v,E=>sb(p,E));x&&(m.bum||(m.bum=[])).push(x)}:v;u?y():h().then(()=>!m.isUnmounted&&y())},get __asyncResolved(){return u},setup(){const p=An;if(Gp(p),u)return()=>Lc(u,p);const m=y=>{c=null,gc(y,p,13,!i)};if(a&&p.suspense||La)return h().then(y=>()=>Lc(y,p)).catch(y=>(m(y),()=>i?Mt(i,{error:y}):null));const _=nt(!1),g=nt(),v=nt(!!r);return r&&setTimeout(()=>{v.value=!1},r),o!=null&&setTimeout(()=>{if(!_.value&&!g.value){const y=new Error(`Async component timed out after ${o}ms.`);m(y),g.value=y}},o),h().then(()=>{_.value=!0,p.parent&&vc(p.parent.vnode)&&p.parent.update()}).catch(y=>{m(y),g.value=y}),()=>{if(_.value&&u)return Lc(u,p);if(g.value&&i)return Mt(i,{error:g.value});if(t&&!v.value)return Lc(t,p)}}})}function Lc(n,e){const{ref:t,props:i,children:r,ce:s}=e.vnode,o=Mt(n,i,r);return o.ref=t,o.ce=s,delete e.vnode.ce,o}const vc=n=>n.type.__isKeepAlive;function Lv(n,e){Nv(n,"a",e)}function Iv(n,e){Nv(n,"da",e)}function Nv(n,e,t=An){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(gf(e,i,t),t){let r=t.parent;for(;r&&r.parent;)vc(r.parent.vnode)&&ob(i,e,t,r),r=r.parent}}function ob(n,e,t,i){const r=gf(e,n,i,!0);Uo(()=>{Dp(i[e],r)},t)}function gf(n,e,t=An,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{rs();const a=yc(t),l=ur(e,t,n,o);return a(),ss(),l});return i?r.unshift(s):r.push(s),s}}const hs=n=>(e,t=An)=>{(!La||n==="sp")&&gf(n,(...i)=>e(...i),t)},Ov=hs("bm"),dr=hs("m"),Uv=hs("bu"),ab=hs("u"),xc=hs("bum"),Uo=hs("um"),lb=hs("sp"),cb=hs("rtg"),ub=hs("rtc");function fb(n,e=An){gf("ec",n,e)}const Wp="components",hb="directives";function _f(n,e){return Xp(Wp,n,!0,e)||n}const Fv=Symbol.for("v-ndc");function db(n){return Yt(n)?Xp(Wp,n,!1)||n:n||Fv}function NI(n){return Xp(hb,n)}function Xp(n,e,t=!0,i=!1){const r=Cn||An;if(r){const s=r.type;if(n===Wp){const a=Kb(s,!1);if(a&&(a===e||a===Xi(e)||a===df(Xi(e))))return s}const o=rg(r[n]||s[n],e)||rg(r.appContext[n],e);return!o&&i?s:o}}function rg(n,e){return n&&(n[e]||n[Xi(e)]||n[df(Xi(e))])}function Hu(n,e,t,i){let r;const s=t,o=$e(n);if(o||Yt(n)){const a=o&&Eo(n);let l=!1,c=!1;a&&(l=!Vi(n),c=os(n),n=mf(n)),r=new Array(n.length);for(let u=0,d=n.length;u<d;u++)r[u]=e(l?c?Da(cr(n[u])):cr(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(At(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}function OI(n,e,t={},i,r){if(Cn.ce||Cn.parent&&ya(Cn.parent)&&Cn.parent.ce){const c=Object.keys(t).length>0;return e!=="default"&&(t.name=e),tt(),Qi(mn,null,[Mt("slot",t,i)],c?-2:64)}let s=n[e];s&&s._c&&(s._d=!1),tt();const o=s&&Bv(s(t)),a=t.key||o&&o.key,l=Qi(mn,{key:(a&&!lr(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&n._===1?64:-2);return!r&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function Bv(n){return n.some(e=>Zl(e)?!(e.type===Hn||e.type===mn&&!Bv(e.children)):!0)?n:null}const ed=n=>n?sx(n)?yf(n):ed(n.parent):null,Rl=gn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ed(n.parent),$root:n=>ed(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Hv(n),$forceUpdate:n=>n.f||(n.f=()=>{Hp(n.update)}),$nextTick:n=>n.n||(n.n=xa.bind(n.proxy)),$watch:n=>JM.bind(n)}),kf=(n,e)=>n!==It&&!n.__isScriptSetup&&wt(n,e),pb={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(kf(i,e))return o[e]=1,i[e];if(r!==It&&wt(r,e))return o[e]=2,r[e];if(wt(s,e))return o[e]=3,s[e];if(t!==It&&wt(t,e))return o[e]=4,t[e];td&&(o[e]=0)}}const c=Rl[e];let u,d;if(c)return e==="$attrs"&&zn(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==It&&wt(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,wt(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return kf(r,e)?(r[e]=t,!0):i!==It&&wt(i,e)?(i[e]=t,!0):wt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==It&&a[0]!=="$"&&wt(n,a)||kf(e,a)||wt(s,a)||wt(i,a)||wt(Rl,a)||wt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:wt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function UI(){return kv().slots}function FI(){return kv().attrs}function kv(n){const e=Fo();return e.setupContext||(e.setupContext=ax(e))}function sg(n){return $e(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let td=!0;function mb(n){const e=Hv(n),t=n.proxy,i=n.ctx;td=!1,e.beforeCreate&&og(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:p,activated:m,deactivated:_,beforeDestroy:g,beforeUnmount:v,destroyed:y,unmounted:x,render:E,renderTracked:T,renderTriggered:w,errorCaptured:S,serverPrefetch:M,expose:P,inheritAttrs:L,components:R,directives:O,filters:V}=e;if(c&&gb(c,i,null),o)for(const k in o){const Y=o[k];Qe(Y)&&(i[k]=Y.bind(t))}if(r){const k=r.call(t,t);At(k)&&(n.data=pc(k))}if(td=!0,s)for(const k in s){const Y=s[k],oe=Qe(Y)?Y.bind(t,t):Qe(Y.get)?Y.get.bind(t,t):rr,F=!Qe(Y)&&Qe(Y.set)?Y.set.bind(t):rr,de=Kt({get:oe,set:F});Object.defineProperty(i,k,{enumerable:!0,configurable:!0,get:()=>de.value,set:fe=>de.value=fe})}if(a)for(const k in a)zv(a[k],i,t,k);if(l){const k=Qe(l)?l.call(t):l;Reflect.ownKeys(k).forEach(Y=>{_u(Y,k[Y])})}u&&og(u,n,"c");function z(k,Y){$e(Y)?Y.forEach(oe=>k(oe.bind(t))):Y&&k(Y.bind(t))}if(z(Ov,d),z(dr,f),z(Uv,h),z(ab,p),z(Lv,m),z(Iv,_),z(fb,S),z(ub,T),z(cb,w),z(xc,v),z(Uo,x),z(lb,M),$e(P))if(P.length){const k=n.exposed||(n.exposed={});P.forEach(Y=>{Object.defineProperty(k,Y,{get:()=>t[Y],set:oe=>t[Y]=oe,enumerable:!0})})}else n.exposed||(n.exposed={});E&&n.render===rr&&(n.render=E),L!=null&&(n.inheritAttrs=L),R&&(n.components=R),O&&(n.directives=O),M&&Gp(n)}function gb(n,e,t=rr){$e(n)&&(n=nd(n));for(const i in n){const r=n[i];let s;At(r)?"default"in r?s=Gi(r.from||i,r.default,!0):s=Gi(r.from||i):s=Gi(r),Xn(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function og(n,e,t){ur($e(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function zv(n,e,t,i){let r=i.includes(".")?bv(t,i):()=>t[i];if(Yt(n)){const s=e[n];Qe(s)&&or(r,s)}else if(Qe(n))or(r,n.bind(t));else if(At(n))if($e(n))n.forEach(s=>zv(s,e,t,i));else{const s=Qe(n.handler)?n.handler.bind(t):e[n.handler];Qe(s)&&or(r,s,n)}}function Hv(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Vu(l,c,o,!0)),Vu(l,e,o)),At(e)&&s.set(e,l),l}function Vu(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Vu(n,s,t,!0),r&&r.forEach(o=>Vu(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=_b[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const _b={data:ag,props:lg,emits:lg,methods:pl,computed:pl,beforeCreate:$n,created:$n,beforeMount:$n,mounted:$n,beforeUpdate:$n,updated:$n,beforeDestroy:$n,beforeUnmount:$n,destroyed:$n,unmounted:$n,activated:$n,deactivated:$n,errorCaptured:$n,serverPrefetch:$n,components:pl,directives:pl,watch:xb,provide:ag,inject:vb};function ag(n,e){return e?n?function(){return gn(Qe(n)?n.call(this,this):n,Qe(e)?e.call(this,this):e)}:e:n}function vb(n,e){return pl(nd(n),nd(e))}function nd(n){if($e(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function $n(n,e){return n?[...new Set([].concat(n,e))]:e}function pl(n,e){return n?gn(Object.create(null),n,e):e}function lg(n,e){return n?$e(n)&&$e(e)?[...new Set([...n,...e])]:gn(Object.create(null),sg(n),sg(e??{})):e}function xb(n,e){if(!n)return e;if(!e)return n;const t=gn(Object.create(null),n);for(const i in e)t[i]=$n(n[i],e[i]);return t}function Vv(){return{app:null,config:{isNativeTag:X0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yb=0;function Sb(n,e){return function(i,r=null){Qe(i)||(i=gn({},i)),r!=null&&!At(r)&&(r=null);const s=Vv(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:yb++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Jb,get config(){return s.config},set config(u){},use(u,...d){return o.has(u)||(u&&Qe(u.install)?(o.add(u),u.install(c,...d)):Qe(u)&&(o.add(u),u(c,...d))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,d){return d?(s.components[u]=d,c):s.components[u]},directive(u,d){return d?(s.directives[u]=d,c):s.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||Mt(i,r);return h.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),n(h,u,f),l=!0,c._container=u,u.__vue_app__=c,yf(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ur(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return s.provides[u]=d,c},runWithContext(u){const d=Sa;Sa=c;try{return u()}finally{Sa=d}}};return c}}let Sa=null;const Mb=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Xi(e)}Modifiers`]||n[`${qs(e)}Modifiers`];function bb(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||It;let r=t;const s=e.startsWith("update:"),o=s&&Mb(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Yt(u)?u.trim():u)),o.number&&(r=t.map(Ip)));let a,l=i[a=If(e)]||i[a=If(Xi(e))];!l&&s&&(l=i[a=If(qs(e))]),l&&ur(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ur(c,n,6,r)}}const Eb=new WeakMap;function Gv(n,e,t=!1){const i=t?Eb:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Qe(n)){const l=c=>{const u=Gv(c,e,!0);u&&(a=!0,gn(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(At(n)&&i.set(n,null),null):($e(s)?s.forEach(l=>o[l]=null):gn(o,s),At(n)&&i.set(n,o),o)}function vf(n,e){return!n||!uf(e)?!1:(e=e.slice(2).replace(/Once$/,""),wt(n,e[0].toLowerCase()+e.slice(1))||wt(n,qs(e))||wt(n,e))}function cg(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:p,inheritAttrs:m}=n,_=ku(n);let g,v;try{if(t.shapeFlag&4){const x=r||i,E=x;g=br(c.call(E,x,u,d,h,f,p)),v=a}else{const x=e;g=br(x.length>1?x(d,{attrs:a,slots:o,emit:l}):x(d,null)),v=e.props?a:Tb(a)}}catch(x){Dl.length=0,gc(x,n,1),g=Mt(Hn)}let y=g;if(v&&m!==!1){const x=Object.keys(v),{shapeFlag:E}=y;x.length&&E&7&&(s&&x.some(Pp)&&(v=wb(v,s)),y=zs(y,v,!1,!0))}return t.dirs&&(y=zs(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&jl(y,t.transition),g=y,ku(_),g}const Tb=n=>{let e;for(const t in n)(t==="class"||t==="style"||uf(t))&&((e||(e={}))[t]=n[t]);return e},wb=(n,e)=>{const t={};for(const i in n)(!Pp(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Ab(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?ug(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(Wv(o,i,f)&&!vf(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?ug(i,o,c):!0:!!o;return!1}function ug(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(Wv(e,n,s)&&!vf(t,s))return!0}return!1}function Wv(n,e,t){const i=n[t],r=e[t];return t==="style"&&At(i)&&At(r)?!dc(i,r):i!==r}function Cb({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Xv={},qv=()=>Object.create(Xv),Yv=n=>Object.getPrototypeOf(n)===Xv;function Rb(n,e,t,i=!1){const r={},s=qv();n.propsDefaults=Object.create(null),$v(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:pv(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Pb(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=St(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(vf(n.emitsOptions,f))continue;const h=e[f];if(l)if(wt(s,f))h!==s[f]&&(s[f]=h,c=!0);else{const p=Xi(f);r[p]=id(l,a,p,h,n,!1)}else h!==s[f]&&(s[f]=h,c=!0)}}}else{$v(n,e,r,s)&&(c=!0);let u;for(const d in a)(!e||!wt(e,d)&&((u=qs(d))===d||!wt(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(r[d]=id(l,a,d,void 0,n,!0)):delete r[d]);if(s!==a)for(const d in s)(!e||!wt(e,d))&&(delete s[d],c=!0)}c&&jr(n.attrs,"set","")}function $v(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(El(l))continue;const c=e[l];let u;r&&wt(r,u=Xi(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:vf(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=St(t),c=a||It;for(let u=0;u<s.length;u++){const d=s[u];t[d]=id(r,l,d,c[d],n,!wt(c,d))}}return o}function id(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=wt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Qe(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=yc(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===qs(t))&&(i=!0))}return i}const Db=new WeakMap;function jv(n,e,t=!1){const i=t?Db:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Qe(n)){const u=d=>{l=!0;const[f,h]=jv(d,e,!0);gn(o,f),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return At(n)&&i.set(n,ga),ga;if($e(s))for(let u=0;u<s.length;u++){const d=Xi(s[u]);fg(d)&&(o[d]=It)}else if(s)for(const u in s){const d=Xi(u);if(fg(d)){const f=s[u],h=o[d]=$e(f)||Qe(f)?{type:f}:gn({},f),p=h.type;let m=!1,_=!0;if($e(p))for(let g=0;g<p.length;++g){const v=p[g],y=Qe(v)&&v.name;if(y==="Boolean"){m=!0;break}else y==="String"&&(_=!1)}else m=Qe(p)&&p.name==="Boolean";h[0]=m,h[1]=_,(m||wt(h,"default"))&&a.push(d)}}const c=[o,a];return At(n)&&i.set(n,c),c}function fg(n){return n[0]!=="$"&&!El(n)}const qp=n=>n==="_"||n==="_ctx"||n==="$stable",Yp=n=>$e(n)?n.map(br):[br(n)],Lb=(n,e,t)=>{if(e._n)return e;const i=Bi((...r)=>Yp(e(...r)),t);return i._c=!1,i},Kv=(n,e,t)=>{const i=n._ctx;for(const r in n){if(qp(r))continue;const s=n[r];if(Qe(s))e[r]=Lb(r,s,i);else if(s!=null){const o=Yp(s);e[r]=()=>o}}},Zv=(n,e)=>{const t=Yp(e);n.slots.default=()=>t},Jv=(n,e,t)=>{for(const i in e)(t||!qp(i))&&(n[i]=e[i])},Ib=(n,e,t)=>{const i=n.slots=qv();if(n.vnode.shapeFlag&32){const r=e._;r?(Jv(i,e,t),t&&j0(i,"_",r,!0)):Kv(e,i)}else e&&Zv(n,e)},Nb=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=It;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Jv(r,e,t):(s=!e.$stable,Kv(e,r)),o=e}else e&&(Zv(n,e),o={default:1});if(s)for(const a in r)!qp(a)&&o[a]==null&&delete r[a]},Bn=kb;function Ob(n){return Ub(n)}function Ub(n,e){const t=pf();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=rr,insertStaticContent:p}=n,m=(N,I,G,Q=null,Z=null,U=null,D=void 0,pe=null,ce=!!I.dynamicChildren)=>{if(N===I)return;N&&!po(N,I)&&(Q=W(N),fe(N,Z,U,!0),N=null),I.patchFlag===-2&&(ce=!1,I.dynamicChildren=null);const{type:se,ref:ue,shapeFlag:C}=I;switch(se){case xf:_(N,I,G,Q);break;case Hn:g(N,I,G,Q);break;case Pl:N==null&&v(I,G,Q,D);break;case mn:R(N,I,G,Q,Z,U,D,pe,ce);break;default:C&1?E(N,I,G,Q,Z,U,D,pe,ce):C&6?O(N,I,G,Q,Z,U,D,pe,ce):(C&64||C&128)&&se.process(N,I,G,Q,Z,U,D,pe,ce,he)}ue!=null&&Z?Cl(ue,N&&N.ref,U,I||N,!I):ue==null&&N&&N.ref!=null&&Cl(N.ref,null,U,N,!0)},_=(N,I,G,Q)=>{if(N==null)i(I.el=a(I.children),G,Q);else{const Z=I.el=N.el;I.children!==N.children&&c(Z,I.children)}},g=(N,I,G,Q)=>{N==null?i(I.el=l(I.children||""),G,Q):I.el=N.el},v=(N,I,G,Q)=>{[N.el,N.anchor]=p(N.children,I,G,Q,N.el,N.anchor)},y=({el:N,anchor:I},G,Q)=>{let Z;for(;N&&N!==I;)Z=f(N),i(N,G,Q),N=Z;i(I,G,Q)},x=({el:N,anchor:I})=>{let G;for(;N&&N!==I;)G=f(N),r(N),N=G;r(I)},E=(N,I,G,Q,Z,U,D,pe,ce)=>{if(I.type==="svg"?D="svg":I.type==="math"&&(D="mathml"),N==null)T(I,G,Q,Z,U,D,pe,ce);else{const se=N.el&&N.el._isVueCE?N.el:null;try{se&&se._beginPatch(),M(N,I,Z,U,D,pe,ce)}finally{se&&se._endPatch()}}},T=(N,I,G,Q,Z,U,D,pe)=>{let ce,se;const{props:ue,shapeFlag:C,transition:b,dirs:B}=N;if(ce=N.el=o(N.type,U,ue&&ue.is,ue),C&8?u(ce,N.children):C&16&&S(N.children,ce,null,Q,Z,zf(N,U),D,pe),B&&js(N,null,Q,"created"),w(ce,N,N.scopeId,D,Q),ue){for(const ne in ue)ne!=="value"&&!El(ne)&&s(ce,ne,null,ue[ne],U,Q);"value"in ue&&s(ce,"value",null,ue.value,U),(se=ue.onVnodeBeforeMount)&&mr(se,Q,N)}B&&js(N,null,Q,"beforeMount");const j=Fb(Z,b);j&&b.beforeEnter(ce),i(ce,I,G),((se=ue&&ue.onVnodeMounted)||j||B)&&Bn(()=>{se&&mr(se,Q,N),j&&b.enter(ce),B&&js(N,null,Q,"mounted")},Z)},w=(N,I,G,Q,Z)=>{if(G&&h(N,G),Q)for(let U=0;U<Q.length;U++)h(N,Q[U]);if(Z){let U=Z.subTree;if(I===U||tx(U.type)&&(U.ssContent===I||U.ssFallback===I)){const D=Z.vnode;w(N,D,D.scopeId,D.slotScopeIds,Z.parent)}}},S=(N,I,G,Q,Z,U,D,pe,ce=0)=>{for(let se=ce;se<N.length;se++){const ue=N[se]=pe?Yr(N[se]):br(N[se]);m(null,ue,I,G,Q,Z,U,D,pe)}},M=(N,I,G,Q,Z,U,D)=>{const pe=I.el=N.el;let{patchFlag:ce,dynamicChildren:se,dirs:ue}=I;ce|=N.patchFlag&16;const C=N.props||It,b=I.props||It;let B;if(G&&Ks(G,!1),(B=b.onVnodeBeforeUpdate)&&mr(B,G,I,N),ue&&js(I,N,G,"beforeUpdate"),G&&Ks(G,!0),(C.innerHTML&&b.innerHTML==null||C.textContent&&b.textContent==null)&&u(pe,""),se?P(N.dynamicChildren,se,pe,G,Q,zf(I,Z),U):D||Y(N,I,pe,null,G,Q,zf(I,Z),U,!1),ce>0){if(ce&16)L(pe,C,b,G,Z);else if(ce&2&&C.class!==b.class&&s(pe,"class",null,b.class,Z),ce&4&&s(pe,"style",C.style,b.style,Z),ce&8){const j=I.dynamicProps;for(let ne=0;ne<j.length;ne++){const $=j[ne],Me=C[$],me=b[$];(me!==Me||$==="value")&&s(pe,$,Me,me,Z,G)}}ce&1&&N.children!==I.children&&u(pe,I.children)}else!D&&se==null&&L(pe,C,b,G,Z);((B=b.onVnodeUpdated)||ue)&&Bn(()=>{B&&mr(B,G,I,N),ue&&js(I,N,G,"updated")},Q)},P=(N,I,G,Q,Z,U,D)=>{for(let pe=0;pe<I.length;pe++){const ce=N[pe],se=I[pe],ue=ce.el&&(ce.type===mn||!po(ce,se)||ce.shapeFlag&198)?d(ce.el):G;m(ce,se,ue,null,Q,Z,U,D,!0)}},L=(N,I,G,Q,Z)=>{if(I!==G){if(I!==It)for(const U in I)!El(U)&&!(U in G)&&s(N,U,I[U],null,Z,Q);for(const U in G){if(El(U))continue;const D=G[U],pe=I[U];D!==pe&&U!=="value"&&s(N,U,pe,D,Z,Q)}"value"in G&&s(N,"value",I.value,G.value,Z)}},R=(N,I,G,Q,Z,U,D,pe,ce)=>{const se=I.el=N?N.el:a(""),ue=I.anchor=N?N.anchor:a("");let{patchFlag:C,dynamicChildren:b,slotScopeIds:B}=I;B&&(pe=pe?pe.concat(B):B),N==null?(i(se,G,Q),i(ue,G,Q),S(I.children||[],G,ue,Z,U,D,pe,ce)):C>0&&C&64&&b&&N.dynamicChildren&&N.dynamicChildren.length===b.length?(P(N.dynamicChildren,b,G,Z,U,D,pe),(I.key!=null||Z&&I===Z.subTree)&&$p(N,I,!0)):Y(N,I,G,ue,Z,U,D,pe,ce)},O=(N,I,G,Q,Z,U,D,pe,ce)=>{I.slotScopeIds=pe,N==null?I.shapeFlag&512?Z.ctx.activate(I,G,Q,D,ce):V(I,G,Q,Z,U,D,ce):X(N,I,ce)},V=(N,I,G,Q,Z,U,D)=>{const pe=N.component=qb(N,Q,Z);if(vc(N)&&(pe.ctx.renderer=he),Yb(pe,!1,D),pe.asyncDep){if(Z&&Z.registerDep(pe,z,D),!N.el){const ce=pe.subTree=Mt(Hn);g(null,ce,I,G),N.placeholder=ce.el}}else z(pe,N,I,G,Z,U,D)},X=(N,I,G)=>{const Q=I.component=N.component;if(Ab(N,I,G))if(Q.asyncDep&&!Q.asyncResolved){k(Q,I,G);return}else Q.next=I,Q.update();else I.el=N.el,Q.vnode=I},z=(N,I,G,Q,Z,U,D)=>{const pe=()=>{if(N.isMounted){let{next:C,bu:b,u:B,parent:j,vnode:ne}=N;{const Te=Qv(N);if(Te){C&&(C.el=ne.el,k(N,C,D)),Te.asyncDep.then(()=>{Bn(()=>{N.isUnmounted||se()},Z)});return}}let $=C,Me;Ks(N,!1),C?(C.el=ne.el,k(N,C,D)):C=ne,b&&gu(b),(Me=C.props&&C.props.onVnodeBeforeUpdate)&&mr(Me,j,C,ne),Ks(N,!0);const me=cg(N),Ue=N.subTree;N.subTree=me,m(Ue,me,d(Ue.el),W(Ue),N,Z,U),C.el=me.el,$===null&&Cb(N,me.el),B&&Bn(B,Z),(Me=C.props&&C.props.onVnodeUpdated)&&Bn(()=>mr(Me,j,C,ne),Z)}else{let C;const{el:b,props:B}=I,{bm:j,m:ne,parent:$,root:Me,type:me}=N,Ue=ya(I);Ks(N,!1),j&&gu(j),!Ue&&(C=B&&B.onVnodeBeforeMount)&&mr(C,$,I),Ks(N,!0);{Me.ce&&Me.ce._hasShadowRoot()&&Me.ce._injectChildStyle(me);const Te=N.subTree=cg(N);m(null,Te,G,Q,N,Z,U),I.el=Te.el}if(ne&&Bn(ne,Z),!Ue&&(C=B&&B.onVnodeMounted)){const Te=I;Bn(()=>mr(C,$,Te),Z)}(I.shapeFlag&256||$&&ya($.vnode)&&$.vnode.shapeFlag&256)&&N.a&&Bn(N.a,Z),N.isMounted=!0,I=G=Q=null}};N.scope.on();const ce=N.effect=new ev(pe);N.scope.off();const se=N.update=ce.run.bind(ce),ue=N.job=ce.runIfDirty.bind(ce);ue.i=N,ue.id=N.uid,ce.scheduler=()=>Hp(ue),Ks(N,!0),se()},k=(N,I,G)=>{I.component=N;const Q=N.vnode.props;N.vnode=I,N.next=null,Pb(N,I.props,Q,G),Nb(N,I.children,G),rs(),Km(N),ss()},Y=(N,I,G,Q,Z,U,D,pe,ce=!1)=>{const se=N&&N.children,ue=N?N.shapeFlag:0,C=I.children,{patchFlag:b,shapeFlag:B}=I;if(b>0){if(b&128){F(se,C,G,Q,Z,U,D,pe,ce);return}else if(b&256){oe(se,C,G,Q,Z,U,D,pe,ce);return}}B&8?(ue&16&&re(se,Z,U),C!==se&&u(G,C)):ue&16?B&16?F(se,C,G,Q,Z,U,D,pe,ce):re(se,Z,U,!0):(ue&8&&u(G,""),B&16&&S(C,G,Q,Z,U,D,pe,ce))},oe=(N,I,G,Q,Z,U,D,pe,ce)=>{N=N||ga,I=I||ga;const se=N.length,ue=I.length,C=Math.min(se,ue);let b;for(b=0;b<C;b++){const B=I[b]=ce?Yr(I[b]):br(I[b]);m(N[b],B,G,null,Z,U,D,pe,ce)}se>ue?re(N,Z,U,!0,!1,C):S(I,G,Q,Z,U,D,pe,ce,C)},F=(N,I,G,Q,Z,U,D,pe,ce)=>{let se=0;const ue=I.length;let C=N.length-1,b=ue-1;for(;se<=C&&se<=b;){const B=N[se],j=I[se]=ce?Yr(I[se]):br(I[se]);if(po(B,j))m(B,j,G,null,Z,U,D,pe,ce);else break;se++}for(;se<=C&&se<=b;){const B=N[C],j=I[b]=ce?Yr(I[b]):br(I[b]);if(po(B,j))m(B,j,G,null,Z,U,D,pe,ce);else break;C--,b--}if(se>C){if(se<=b){const B=b+1,j=B<ue?I[B].el:Q;for(;se<=b;)m(null,I[se]=ce?Yr(I[se]):br(I[se]),G,j,Z,U,D,pe,ce),se++}}else if(se>b)for(;se<=C;)fe(N[se],Z,U,!0),se++;else{const B=se,j=se,ne=new Map;for(se=j;se<=b;se++){const Ee=I[se]=ce?Yr(I[se]):br(I[se]);Ee.key!=null&&ne.set(Ee.key,se)}let $,Me=0;const me=b-j+1;let Ue=!1,Te=0;const ge=new Array(me);for(se=0;se<me;se++)ge[se]=0;for(se=B;se<=C;se++){const Ee=N[se];if(Me>=me){fe(Ee,Z,U,!0);continue}let Re;if(Ee.key!=null)Re=ne.get(Ee.key);else for($=j;$<=b;$++)if(ge[$-j]===0&&po(Ee,I[$])){Re=$;break}Re===void 0?fe(Ee,Z,U,!0):(ge[Re-j]=se+1,Re>=Te?Te=Re:Ue=!0,m(Ee,I[Re],G,null,Z,U,D,pe,ce),Me++)}const ve=Ue?Bb(ge):ga;for($=ve.length-1,se=me-1;se>=0;se--){const Ee=j+se,Re=I[Ee],we=I[Ee+1],je=Ee+1<ue?we.el||ex(we):Q;ge[se]===0?m(null,Re,G,je,Z,U,D,pe,ce):Ue&&($<0||se!==ve[$]?de(Re,G,je,2):$--)}}},de=(N,I,G,Q,Z=null)=>{const{el:U,type:D,transition:pe,children:ce,shapeFlag:se}=N;if(se&6){de(N.component.subTree,I,G,Q);return}if(se&128){N.suspense.move(I,G,Q);return}if(se&64){D.move(N,I,G,he);return}if(D===mn){i(U,I,G);for(let C=0;C<ce.length;C++)de(ce[C],I,G,Q);i(N.anchor,I,G);return}if(D===Pl){y(N,I,G);return}if(Q!==2&&se&1&&pe)if(Q===0)pe.beforeEnter(U),i(U,I,G),Bn(()=>pe.enter(U),Z);else{const{leave:C,delayLeave:b,afterLeave:B}=pe,j=()=>{N.ctx.isUnmounted?r(U):i(U,I,G)},ne=()=>{U._isLeaving&&U[yr](!0),C(U,()=>{j(),B&&B()})};b?b(U,j,ne):ne()}else i(U,I,G)},fe=(N,I,G,Q=!1,Z=!1)=>{const{type:U,props:D,ref:pe,children:ce,dynamicChildren:se,shapeFlag:ue,patchFlag:C,dirs:b,cacheIndex:B}=N;if(C===-2&&(Z=!1),pe!=null&&(rs(),Cl(pe,null,G,N,!0),ss()),B!=null&&(I.renderCache[B]=void 0),ue&256){I.ctx.deactivate(N);return}const j=ue&1&&b,ne=!ya(N);let $;if(ne&&($=D&&D.onVnodeBeforeUnmount)&&mr($,I,N),ue&6)We(N.component,G,Q);else{if(ue&128){N.suspense.unmount(G,Q);return}j&&js(N,null,I,"beforeUnmount"),ue&64?N.type.remove(N,I,G,he,Q):se&&!se.hasOnce&&(U!==mn||C>0&&C&64)?re(se,I,G,!1,!0):(U===mn&&C&384||!Z&&ue&16)&&re(ce,I,G),Q&&Ie(N)}(ne&&($=D&&D.onVnodeUnmounted)||j)&&Bn(()=>{$&&mr($,I,N),j&&js(N,null,I,"unmounted")},G)},Ie=N=>{const{type:I,el:G,anchor:Q,transition:Z}=N;if(I===mn){He(G,Q);return}if(I===Pl){x(N);return}const U=()=>{r(G),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(N.shapeFlag&1&&Z&&!Z.persisted){const{leave:D,delayLeave:pe}=Z,ce=()=>D(G,U);pe?pe(N.el,U,ce):ce()}else U()},He=(N,I)=>{let G;for(;N!==I;)G=f(N),r(N),N=G;r(I)},We=(N,I,G)=>{const{bum:Q,scope:Z,job:U,subTree:D,um:pe,m:ce,a:se}=N;hg(ce),hg(se),Q&&gu(Q),Z.stop(),U&&(U.flags|=8,fe(D,N,I,G)),pe&&Bn(pe,I),Bn(()=>{N.isUnmounted=!0},I)},re=(N,I,G,Q=!1,Z=!1,U=0)=>{for(let D=U;D<N.length;D++)fe(N[D],I,G,Q,Z)},W=N=>{if(N.shapeFlag&6)return W(N.component.subTree);if(N.shapeFlag&128)return N.suspense.next();const I=f(N.anchor||N.el),G=I&&I[Ev];return G?f(G):I};let K=!1;const le=(N,I,G)=>{let Q;N==null?I._vnode&&(fe(I._vnode,null,null,!0),Q=I._vnode.component):m(I._vnode||null,N,I,null,null,null,G),I._vnode=N,K||(K=!0,Km(Q),yv(),K=!1)},he={p:m,um:fe,m:de,r:Ie,mt:V,mc:S,pc:Y,pbc:P,n:W,o:n};return{render:le,hydrate:void 0,createApp:Sb(le)}}function zf({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ks({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Fb(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function $p(n,e,t=!1){const i=n.children,r=e.children;if($e(i)&&$e(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Yr(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&$p(o,a)),a.type===xf&&(a.patchFlag===-1&&(a=r[s]=Yr(a)),a.el=o.el),a.type===Hn&&!a.el&&(a.el=o.el)}}function Bb(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Qv(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Qv(e)}function hg(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function ex(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?ex(e.subTree):null}const tx=n=>n.__isSuspense;function kb(n,e){e&&e.pendingBranch?$e(n)?e.effects.push(...n):e.effects.push(n):xv(n)}const mn=Symbol.for("v-fgt"),xf=Symbol.for("v-txt"),Hn=Symbol.for("v-cmt"),Pl=Symbol.for("v-stc"),Dl=[];let Ei=null;function tt(n=!1){Dl.push(Ei=n?null:[])}function zb(){Dl.pop(),Ei=Dl[Dl.length-1]||null}let Kl=1;function Gu(n,e=!1){Kl+=n,n<0&&Ei&&e&&(Ei.hasOnce=!0)}function nx(n){return n.dynamicChildren=Kl>0?Ei||ga:null,zb(),Kl>0&&Ei&&Ei.push(n),n}function yt(n,e,t,i,r,s){return nx(Se(n,e,t,i,r,s,!0))}function Qi(n,e,t,i,r){return nx(Mt(n,e,t,i,r,!0))}function Zl(n){return n?n.__v_isVNode===!0:!1}function po(n,e){return n.type===e.type&&n.key===e.key}const ix=({key:n})=>n??null,xu=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Yt(n)||Xn(n)||Qe(n)?{i:Cn,r:n,k:e,f:!!t}:n:null);function Se(n,e=null,t=null,i=0,r=null,s=n===mn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&ix(e),ref:e&&xu(e),scopeId:Mv,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Cn};return a?(jp(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Yt(t)?8:16),Kl>0&&!o&&Ei&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ei.push(l),l}const Mt=Hb;function Hb(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Fv)&&(n=Hn),Zl(n)){const a=zs(n,e,!0);return t&&jp(a,t),Kl>0&&!s&&Ei&&(a.shapeFlag&6?Ei[Ei.indexOf(n)]=a:Ei.push(a)),a.patchFlag=-2,a}if(Zb(n)&&(n=n.__vccOpts),e){e=Vb(e);let{class:a,style:l}=e;a&&!Yt(a)&&(e.class=Ir(a)),At(l)&&(zp(l)&&!$e(l)&&(l=gn({},l)),e.style=wr(l))}const o=Yt(n)?1:tx(n)?128:Tv(n)?64:At(n)?4:Qe(n)?2:0;return Se(n,e,t,i,r,o,s,!0)}function Vb(n){return n?zp(n)||Yv(n)?gn({},n):n:null}function zs(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Gb(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&ix(c),ref:e&&e.ref?t&&s?$e(s)?s.concat(xu(e)):[s,xu(e)]:xu(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==mn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&zs(n.ssContent),ssFallback:n.ssFallback&&zs(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&jl(u,l.clone(u)),u}function xr(n=" ",e=0){return Mt(xf,null,n,e)}function rx(n,e){const t=Mt(Pl,null,n);return t.staticCount=e,t}function xi(n="",e=!1){return e?(tt(),Qi(Hn,null,n)):Mt(Hn,null,n)}function br(n){return n==null||typeof n=="boolean"?Mt(Hn):$e(n)?Mt(mn,null,n.slice()):Zl(n)?Yr(n):Mt(xf,null,String(n))}function Yr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:zs(n)}function jp(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if($e(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),jp(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Yv(e)?e._ctx=Cn:r===3&&Cn&&(Cn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Qe(e)?(e={default:e,_ctx:Cn},t=32):(e=String(e),i&64?(t=16,e=[xr(e)]):t=8);n.children=e,n.shapeFlag|=t}function Gb(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ir([e.class,i.class]));else if(r==="style")e.style=wr([e.style,i.style]);else if(uf(r)){const s=e[r],o=i[r];o&&s!==o&&!($e(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function mr(n,e,t,i=null){ur(n,e,7,[t,i])}const Wb=Vv();let Xb=0;function qb(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Wb,s={uid:Xb++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new yM(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jv(i,r),emitsOptions:Gv(i,r),emit:null,emitted:null,propsDefaults:It,inheritAttrs:i.inheritAttrs,ctx:It,data:It,props:It,attrs:It,slots:It,refs:It,setupState:It,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=bb.bind(null,s),n.ce&&n.ce(s),s}let An=null;const Fo=()=>An||Cn;let Wu,rd;{const n=pf(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Wu=e("__VUE_INSTANCE_SETTERS__",t=>An=t),rd=e("__VUE_SSR_SETTERS__",t=>La=t)}const yc=n=>{const e=An;return Wu(n),n.scope.on(),()=>{n.scope.off(),Wu(e)}},dg=()=>{An&&An.scope.off(),Wu(null)};function sx(n){return n.vnode.shapeFlag&4}let La=!1;function Yb(n,e=!1,t=!1){e&&rd(e);const{props:i,children:r}=n.vnode,s=sx(n);Rb(n,i,s,e),Ib(n,r,t||e);const o=s?$b(n,e):void 0;return e&&rd(!1),o}function $b(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,pb);const{setup:i}=t;if(i){rs();const r=n.setupContext=i.length>1?ax(n):null,s=yc(n),o=mc(i,n,0,[n.props,r]),a=q0(o);if(ss(),s(),(a||n.sp)&&!ya(n)&&Gp(n),a){if(o.then(dg,dg),e)return o.then(l=>{pg(n,l)}).catch(l=>{gc(l,n,0)});n.asyncDep=o}else pg(n,o)}else ox(n)}function pg(n,e,t){Qe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:At(e)&&(n.setupState=gv(e)),ox(n)}function ox(n,e,t){const i=n.type;n.render||(n.render=i.render||rr);{const r=yc(n);rs();try{mb(n)}finally{ss(),r()}}}const jb={get(n,e){return zn(n,"get",""),n[e]}};function ax(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,jb),slots:n.slots,emit:n.emit,expose:e}}function yf(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(gv(zM(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Rl)return Rl[t](n)},has(e,t){return t in e||t in Rl}})):n.proxy}function Kb(n,e=!0){return Qe(n)?n.displayName||n.name:n.name||e&&n.__name}function Zb(n){return Qe(n)&&"__vccOpts"in n}const Kt=(n,e)=>WM(n,e,La);function Kp(n,e,t){try{Gu(-1);const i=arguments.length;return i===2?At(e)&&!$e(e)?Zl(e)?Mt(n,null,[e]):Mt(n,e):Mt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Zl(t)&&(t=[t]),Mt(n,e,t))}finally{Gu(1)}}const Jb="3.5.29";let sd;const mg=typeof window<"u"&&window.trustedTypes;if(mg)try{sd=mg.createPolicy("vue",{createHTML:n=>n})}catch{}const lx=sd?n=>sd.createHTML(n):n=>n,Qb="http://www.w3.org/2000/svg",eE="http://www.w3.org/1998/Math/MathML",Xr=typeof document<"u"?document:null,gg=Xr&&Xr.createElement("template"),tE={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Xr.createElementNS(Qb,n):e==="mathml"?Xr.createElementNS(eE,n):t?Xr.createElement(n,{is:t}):Xr.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Xr.createTextNode(n),createComment:n=>Xr.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Xr.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{gg.innerHTML=lx(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=gg.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},gs="transition",Qa="animation",Jl=Symbol("_vtc"),cx={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},nE=gn({},Av,cx),iE=n=>(n.displayName="Transition",n.props=nE,n),ux=iE((n,{slots:e})=>Kp(ib,rE(n),e)),Zs=(n,e=[])=>{$e(n)?n.forEach(t=>t(...e)):n&&n(...e)},_g=n=>n?$e(n)?n.some(e=>e.length>1):n.length>1:!1;function rE(n){const e={};for(const R in n)R in cx||(e[R]=n[R]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=n,p=sE(r),m=p&&p[0],_=p&&p[1],{onBeforeEnter:g,onEnter:v,onEnterCancelled:y,onLeave:x,onLeaveCancelled:E,onBeforeAppear:T=g,onAppear:w=v,onAppearCancelled:S=y}=e,M=(R,O,V,X)=>{R._enterCancelled=X,Js(R,O?u:a),Js(R,O?c:o),V&&V()},P=(R,O)=>{R._isLeaving=!1,Js(R,d),Js(R,h),Js(R,f),O&&O()},L=R=>(O,V)=>{const X=R?w:v,z=()=>M(O,R,V);Zs(X,[O,z]),vg(()=>{Js(O,R?l:s),Br(O,R?u:a),_g(X)||xg(O,i,m,z)})};return gn(e,{onBeforeEnter(R){Zs(g,[R]),Br(R,s),Br(R,o)},onBeforeAppear(R){Zs(T,[R]),Br(R,l),Br(R,c)},onEnter:L(!1),onAppear:L(!0),onLeave(R,O){R._isLeaving=!0;const V=()=>P(R,O);Br(R,d),R._enterCancelled?(Br(R,f),Mg(R)):(Mg(R),Br(R,f)),vg(()=>{R._isLeaving&&(Js(R,d),Br(R,h),_g(x)||xg(R,i,_,V))}),Zs(x,[R,V])},onEnterCancelled(R){M(R,!1,void 0,!0),Zs(y,[R])},onAppearCancelled(R){M(R,!0,void 0,!0),Zs(S,[R])},onLeaveCancelled(R){P(R),Zs(E,[R])}})}function sE(n){if(n==null)return null;if(At(n))return[Hf(n.enter),Hf(n.leave)];{const e=Hf(n);return[e,e]}}function Hf(n){return fM(n)}function Br(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Jl]||(n[Jl]=new Set)).add(e)}function Js(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Jl];t&&(t.delete(e),t.size||(n[Jl]=void 0))}function vg(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let oE=0;function xg(n,e,t,i){const r=n._endId=++oE,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=aE(n,e);if(!o)return i();const c=o+"end";let u=0;const d=()=>{n.removeEventListener(c,f),s()},f=h=>{h.target===n&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),n.addEventListener(c,f)}function aE(n,e){const t=window.getComputedStyle(n),i=p=>(t[p]||"").split(", "),r=i(`${gs}Delay`),s=i(`${gs}Duration`),o=yg(r,s),a=i(`${Qa}Delay`),l=i(`${Qa}Duration`),c=yg(a,l);let u=null,d=0,f=0;e===gs?o>0&&(u=gs,d=o,f=s.length):e===Qa?c>0&&(u=Qa,d=c,f=l.length):(d=Math.max(o,c),u=d>0?o>c?gs:Qa:null,f=u?u===gs?s.length:l.length:0);const h=u===gs&&/\b(?:transform|all)(?:,|$)/.test(i(`${gs}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:h}}function yg(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Sg(t)+Sg(n[i])))}function Sg(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Mg(n){return(n?n.ownerDocument:document).body.offsetHeight}function lE(n,e,t){const i=n[Jl];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Xu=Symbol("_vod"),fx=Symbol("_vsh"),bg={name:"show",beforeMount(n,{value:e},{transition:t}){n[Xu]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):el(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),el(n,!0),i.enter(n)):i.leave(n,()=>{el(n,!1)}):el(n,e))},beforeUnmount(n,{value:e}){el(n,e)}};function el(n,e){n.style.display=e?n[Xu]:"none",n[fx]=!e}const hx=Symbol("");function BI(n){const e=Fo();if(!e)return;const t=e.ut=(r=n(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(s=>qu(s,r))},i=()=>{const r=n(e.proxy);e.ce?qu(e.ce,r):od(e.subTree,r),t(r)};Uv(()=>{xv(i)}),dr(()=>{or(i,rr,{flush:"post"});const r=new MutationObserver(i);r.observe(e.subTree.el.parentNode,{childList:!0}),Uo(()=>r.disconnect())})}function od(n,e){if(n.shapeFlag&128){const t=n.suspense;n=t.activeBranch,t.pendingBranch&&!t.isHydrating&&t.effects.push(()=>{od(t.activeBranch,e)})}for(;n.component;)n=n.component.subTree;if(n.shapeFlag&1&&n.el)qu(n.el,e);else if(n.type===mn)n.children.forEach(t=>od(t,e));else if(n.type===Pl){let{el:t,anchor:i}=n;for(;t&&(qu(t,e),t!==i);)t=t.nextSibling}}function qu(n,e){if(n.nodeType===1){const t=n.style;let i="";for(const r in e){const s=xM(e[r]);t.setProperty(`--${r}`,s),i+=`--${r}: ${s};`}t[hx]=i}}const cE=/(?:^|;)\s*display\s*:/;function uE(n,e,t){const i=n.style,r=Yt(t);let s=!1;if(t&&!r){if(e)if(Yt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&yu(i,a,"")}else for(const o in e)t[o]==null&&yu(i,o,"");for(const o in t)o==="display"&&(s=!0),yu(i,o,t[o])}else if(r){if(e!==t){const o=i[hx];o&&(t+=";"+o),i.cssText=t,s=cE.test(t)}}else e&&n.removeAttribute("style");Xu in n&&(n[Xu]=s?i.display:"",n[fx]&&(i.display="none"))}const Eg=/\s*!important$/;function yu(n,e,t){if($e(t))t.forEach(i=>yu(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=fE(n,e);Eg.test(t)?n.setProperty(qs(i),t.replace(Eg,""),"important"):n[i]=t}}const Tg=["Webkit","Moz","ms"],Vf={};function fE(n,e){const t=Vf[e];if(t)return t;let i=Xi(e);if(i!=="filter"&&i in n)return Vf[e]=i;i=df(i);for(let r=0;r<Tg.length;r++){const s=Tg[r]+i;if(s in n)return Vf[e]=s}return e}const wg="http://www.w3.org/1999/xlink";function Ag(n,e,t,i,r,s=_M(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(wg,e.slice(6,e.length)):n.setAttributeNS(wg,e,t):t==null||s&&!K0(t)?n.removeAttribute(e):n.setAttribute(e,s?"":lr(t)?String(t):t)}function Cg(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?lx(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=K0(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function mo(n,e,t,i){n.addEventListener(e,t,i)}function hE(n,e,t,i){n.removeEventListener(e,t,i)}const Rg=Symbol("_vei");function dE(n,e,t,i,r=null){const s=n[Rg]||(n[Rg]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=pE(e);if(i){const c=s[e]=_E(i,r);mo(n,a,c,l)}else o&&(hE(n,a,o,l),s[e]=void 0)}}const Pg=/(?:Once|Passive|Capture)$/;function pE(n){let e;if(Pg.test(n)){e={};let i;for(;i=n.match(Pg);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):qs(n.slice(2)),e]}let Gf=0;const mE=Promise.resolve(),gE=()=>Gf||(mE.then(()=>Gf=0),Gf=Date.now());function _E(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;ur(vE(i,t.value),e,5,[i])};return t.value=n,t.attached=gE(),t}function vE(n,e){if($e(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Dg=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,xE=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?lE(n,i,o):e==="style"?uE(n,t,i):uf(e)?Pp(e)||dE(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yE(n,e,i,o))?(Cg(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ag(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Yt(i))?Cg(n,Xi(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Ag(n,e,i,o))};function yE(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Dg(e)&&Qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Dg(e)&&Yt(t)?!1:e in n}const Yu=n=>{const e=n.props["onUpdate:modelValue"]||!1;return $e(e)?t=>gu(e,t):e};function SE(n){n.target.composing=!0}function Lg(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ma=Symbol("_assign");function Ig(n,e,t){return e&&(n=n.trim()),t&&(n=Ip(n)),n}const ME={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[Ma]=Yu(r);const s=i||r.props&&r.props.type==="number";mo(n,e?"change":"input",o=>{o.target.composing||n[Ma](Ig(n.value,t,s))}),(t||s)&&mo(n,"change",()=>{n.value=Ig(n.value,t,s)}),e||(mo(n,"compositionstart",SE),mo(n,"compositionend",Lg),mo(n,"change",Lg))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[Ma]=Yu(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?Ip(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},kI={deep:!0,created(n,e,t){n[Ma]=Yu(t),mo(n,"change",()=>{const i=n._modelValue,r=bE(n),s=n.checked,o=n[Ma];if($e(i)){const a=Z0(i,r),l=a!==-1;if(s&&!l)o(i.concat(r));else if(!s&&l){const c=[...i];c.splice(a,1),o(c)}}else if(ff(i)){const a=new Set(i);s?a.add(r):a.delete(r),o(a)}else o(dx(n,s))})},mounted:Ng,beforeUpdate(n,e,t){n[Ma]=Yu(t),Ng(n,e,t)}};function Ng(n,{value:e,oldValue:t},i){n._modelValue=e;let r;if($e(e))r=Z0(e,i.props.value)>-1;else if(ff(e))r=e.has(i.props.value);else{if(e===t)return;r=dc(e,dx(n,!0))}n.checked!==r&&(n.checked=r)}function bE(n){return"_value"in n?n._value:n.value}function dx(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const EE=["ctrl","shift","alt","meta"],TE={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>EE.some(t=>n[`${t}Key`]&&!e.includes(t))},wE=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((r,...s)=>{for(let o=0;o<e.length;o++){const a=TE[e[o]];if(a&&a(r,e))return}return n(r,...s)}))},AE={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},CE=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(r=>{if(!("key"in r))return;const s=qs(r.key);if(e.some(o=>o===s||AE[o]===s))return n(r)}))},RE=gn({patchProp:xE},tE);let Og;function PE(){return Og||(Og=Ob(RE))}const DE=((...n)=>{const e=PE().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=IE(i);if(!r)return;const s=e._component;!Qe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,LE(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function LE(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function IE(n){return Yt(n)?document.querySelector(n):n}const NE="usehead";function OE(n){return{install(t){t.config.globalProperties.$unhead=n,t.config.globalProperties.$head=n,t.provide(NE,n)}}.install}function UE(n={}){const e=sM({domOptions:{render:oM(()=>W0(e),t=>setTimeout(t,0))},...n});return e.install=OE(e),e}const ua=typeof document<"u";function px(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function FE(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&px(n.default)}const Et=Object.assign;function Wf(n,e){const t={};for(const i in e){const r=e[i];t[i]=fr(r)?r.map(n):n(r)}return t}const Ll=()=>{},fr=Array.isArray;function Ug(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}const mx=/#/g,BE=/&/g,kE=/\//g,zE=/=/g,HE=/\?/g,gx=/\+/g,VE=/%5B/g,GE=/%5D/g,_x=/%5E/g,WE=/%60/g,vx=/%7B/g,XE=/%7C/g,xx=/%7D/g,qE=/%20/g;function Zp(n){return n==null?"":encodeURI(""+n).replace(XE,"|").replace(VE,"[").replace(GE,"]")}function YE(n){return Zp(n).replace(vx,"{").replace(xx,"}").replace(_x,"^")}function ad(n){return Zp(n).replace(gx,"%2B").replace(qE,"+").replace(mx,"%23").replace(BE,"%26").replace(WE,"`").replace(vx,"{").replace(xx,"}").replace(_x,"^")}function $E(n){return ad(n).replace(zE,"%3D")}function jE(n){return Zp(n).replace(mx,"%23").replace(HE,"%3F")}function KE(n){return jE(n).replace(kE,"%2F")}function Ql(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const ZE=/\/$/,JE=n=>n.replace(ZE,"");function Xf(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,a>0?a:e.length),r=n(s.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=nT(i??e,t),{fullPath:i+s+o,path:i,query:r,hash:Ql(o)}}function QE(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Fg(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function eT(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Ia(e.matched[i],t.matched[r])&&yx(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Ia(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function yx(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var t in n)if(!tT(n[t],e[t]))return!1;return!0}function tT(n,e){return fr(n)?Bg(n,e):fr(e)?Bg(e,n):n?.valueOf()===e?.valueOf()}function Bg(n,e){return fr(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function nT(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const _s={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let ld=(function(n){return n.pop="pop",n.push="push",n})({}),qf=(function(n){return n.back="back",n.forward="forward",n.unknown="",n})({});function iT(n){if(!n)if(ua){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),JE(n)}const rT=/^[^#]+#/;function sT(n,e){return n.replace(rT,"#")+e}function oT(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Sf=()=>({left:window.scrollX,top:window.scrollY});function aT(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=oT(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function kg(n,e){return(history.state?history.state.position-e:-1)+n}const cd=new Map;function lT(n,e){cd.set(n,e)}function cT(n){const e=cd.get(n);return cd.delete(n),e}function uT(n){return typeof n=="string"||n&&typeof n=="object"}function Sx(n){return typeof n=="string"||typeof n=="symbol"}let jt=(function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n})({});const Mx=Symbol("");jt.MATCHER_NOT_FOUND+"",jt.NAVIGATION_GUARD_REDIRECT+"",jt.NAVIGATION_ABORTED+"",jt.NAVIGATION_CANCELLED+"",jt.NAVIGATION_DUPLICATED+"";function Na(n,e){return Et(new Error,{type:n,[Mx]:!0},e)}function kr(n,e){return n instanceof Error&&Mx in n&&(e==null||!!(n.type&e))}const fT=["params","query","hash"];function hT(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of fT)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}function dT(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<t.length;++i){const r=t[i].replace(gx," "),s=r.indexOf("="),o=Ql(s<0?r:r.slice(0,s)),a=s<0?null:Ql(r.slice(s+1));if(o in e){let l=e[o];fr(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function zg(n){let e="";for(let t in n){const i=n[t];if(t=$E(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(fr(i)?i.map(r=>r&&ad(r)):[i&&ad(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function pT(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=fr(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const mT=Symbol(""),Hg=Symbol(""),Mf=Symbol(""),Jp=Symbol(""),ud=Symbol("");function tl(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Cs(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(Na(jt.NAVIGATION_ABORTED,{from:t,to:e})):f instanceof Error?l(f):uT(f)?l(Na(jt.NAVIGATION_GUARD_REDIRECT,{from:e,to:f})):(o&&i.enterCallbacks[r]===o&&typeof f=="function"&&o.push(f),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let d=Promise.resolve(u);n.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function Yf(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(px(l)){const c=(l.__vccOpts||l)[e];c&&s.push(Cs(c,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=FE(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const f=(d.__vccOpts||d)[e];return f&&Cs(f,t,i,o,a,r)()}))}}return s}function gT(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>Ia(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Ia(c,l))||r.push(l))}return[t,i,r]}let _T=()=>location.protocol+"//"+location.host;function bx(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,a=r.slice(o);return a[0]!=="/"&&(a="/"+a),Fg(a,"")}return Fg(t,n)+i+r}function vT(n,e,t,i){let r=[],s=[],o=null;const a=({state:f})=>{const h=bx(n,location),p=t.value,m=e.value;let _=0;if(f){if(t.value=h,e.value=f,o&&o===p){o=null;return}_=m?f.position-m.position:0}else i(h);r.forEach(g=>{g(t.value,p,{delta:_,type:ld.pop,direction:_?_>0?qf.forward:qf.back:qf.unknown})})};function l(){o=t.value}function c(f){r.push(f);const h=()=>{const p=r.indexOf(f);p>-1&&r.splice(p,1)};return s.push(h),h}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(Et({},f.state,{scroll:Sf()}),"")}}function d(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:d}}function Vg(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Sf():null}}function xT(n){const{history:e,location:t}=window,i={value:bx(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const d=n.indexOf("#"),f=d>-1?(t.host&&document.querySelector("base")?n:n.slice(d))+l:_T()+n+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(h){console.error(h),t[u?"replace":"assign"](f)}}function o(l,c){s(l,Et({},e.state,Vg(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function a(l,c){const u=Et({},r.value,e.state,{forward:l,scroll:Sf()});s(u.current,u,!0),s(l,Et({},Vg(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function yT(n){n=iT(n);const e=xT(n),t=vT(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=Et({location:"",base:n,go:i,createHref:sT.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}let vo=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n})({});var fn=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n})(fn||{});const ST={type:vo.Static,value:""},MT=/[a-zA-Z0-9_]/;function bT(n){if(!n)return[[]];if(n==="/")return[[ST]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(h){throw new Error(`ERR (${t})/"${c}": ${h}`)}let t=fn.Static,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function d(){c&&(t===fn.Static?s.push({type:vo.Static,value:c}):t===fn.Param||t===fn.ParamRegExp||t===fn.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:vo.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==fn.ParamRegExp){i=t,t=fn.EscapeNext;continue}switch(t){case fn.Static:l==="/"?(c&&d(),o()):l===":"?(d(),t=fn.Param):f();break;case fn.EscapeNext:f(),t=i;break;case fn.Param:l==="("?t=fn.ParamRegExp:MT.test(l)?f():(d(),t=fn.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case fn.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=fn.ParamRegExpEnd:u+=l;break;case fn.ParamRegExpEnd:d(),t=fn.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===fn.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),r}const Gg="[^/]+?",ET={sensitive:!1,strict:!1,start:!0,end:!0};var Zn=(function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n})(Zn||{});const TT=/[.+*?^${}()[\]/\\]/g;function wT(n,e){const t=Et({},ET,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[Zn.Root];t.strict&&!c.length&&(r+="/");for(let d=0;d<c.length;d++){const f=c[d];let h=Zn.Segment+(t.sensitive?Zn.BonusCaseSensitive:0);if(f.type===vo.Static)d||(r+="/"),r+=f.value.replace(TT,"\\$&"),h+=Zn.Static;else if(f.type===vo.Param){const{value:p,repeatable:m,optional:_,regexp:g}=f;s.push({name:p,repeatable:m,optional:_});const v=g||Gg;if(v!==Gg){h+=Zn.BonusCustomRegExp;try{`${v}`}catch(x){throw new Error(`Invalid custom RegExp for param "${p}" (${v}): `+x.message)}}let y=m?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;d||(y=_&&c.length<2?`(?:/${y})`:"/"+y),_&&(y+="?"),r+=y,h+=Zn.Dynamic,_&&(h+=Zn.BonusOptional),m&&(h+=Zn.BonusRepeatable),v===".*"&&(h+=Zn.BonusWildcard)}u.push(h)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=Zn.BonusStrict}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",p=s[f-1];d[p.name]=h&&p.repeatable?h.split("/"):h}return d}function l(c){let u="",d=!1;for(const f of n){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===vo.Static)u+=h.value;else if(h.type===vo.Param){const{value:p,repeatable:m,optional:_}=h,g=p in c?c[p]:"";if(fr(g)&&!m)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const v=fr(g)?g.join("/"):g;if(!v)if(_)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${p}"`);u+=v}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function AT(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===Zn.Static+Zn.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===Zn.Static+Zn.Segment?1:-1:0}function Ex(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=AT(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Wg(i))return 1;if(Wg(r))return-1}return r.length-i.length}function Wg(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const CT={strict:!1,end:!0,sensitive:!1};function RT(n,e,t){const i=wT(bT(n.path),t),r=Et(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function PT(n,e){const t=[],i=new Map;e=Ug(CT,e);function r(d){return i.get(d)}function s(d,f,h){const p=!h,m=qg(d);m.aliasOf=h&&h.record;const _=Ug(e,d),g=[m];if("alias"in d){const x=typeof d.alias=="string"?[d.alias]:d.alias;for(const E of x)g.push(qg(Et({},m,{components:h?h.record.components:m.components,path:E,aliasOf:h?h.record:m})))}let v,y;for(const x of g){const{path:E}=x;if(f&&E[0]!=="/"){const T=f.record.path,w=T[T.length-1]==="/"?"":"/";x.path=f.record.path+(E&&w+E)}if(v=RT(x,f,_),h?h.alias.push(v):(y=y||v,y!==v&&y.alias.push(v),p&&d.name&&!Yg(v)&&o(d.name)),Tx(v)&&l(v),m.children){const T=m.children;for(let w=0;w<T.length;w++)s(T[w],v,h&&h.children[w])}h=h||v}return y?()=>{o(y)}:Ll}function o(d){if(Sx(d)){const f=i.get(d);f&&(i.delete(d),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(d);f>-1&&(t.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return t}function l(d){const f=IT(d,t);t.splice(f,0,d),d.record.name&&!Yg(d)&&i.set(d.record.name,d)}function c(d,f){let h,p={},m,_;if("name"in d&&d.name){if(h=i.get(d.name),!h)throw Na(jt.MATCHER_NOT_FOUND,{location:d});_=h.record.name,p=Et(Xg(f.params,h.keys.filter(y=>!y.optional).concat(h.parent?h.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),d.params&&Xg(d.params,h.keys.map(y=>y.name))),m=h.stringify(p)}else if(d.path!=null)m=d.path,h=t.find(y=>y.re.test(m)),h&&(p=h.parse(m),_=h.record.name);else{if(h=f.name?i.get(f.name):t.find(y=>y.re.test(f.path)),!h)throw Na(jt.MATCHER_NOT_FOUND,{location:d,currentLocation:f});_=h.record.name,p=Et({},f.params,d.params),m=h.stringify(p)}const g=[];let v=h;for(;v;)g.unshift(v.record),v=v.parent;return{name:_,path:m,params:p,matched:g,meta:LT(g)}}n.forEach(d=>s(d));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function Xg(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function qg(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:DT(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function DT(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Yg(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function LT(n){return n.reduce((e,t)=>Et(e,t.meta),{})}function IT(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;Ex(n,e[s])<0?i=s:t=s+1}const r=NT(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function NT(n){let e=n;for(;e=e.parent;)if(Tx(e)&&Ex(n,e)===0)return e}function Tx({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function $g(n){const e=Gi(Mf),t=Gi(Jp),i=Kt(()=>{const l=ht(n.to);return e.resolve(l)}),r=Kt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=t.matched;if(!u||!d.length)return-1;const f=d.findIndex(Ia.bind(null,u));if(f>-1)return f;const h=jg(l[c-2]);return c>1&&jg(u)===h&&d[d.length-1].path!==h?d.findIndex(Ia.bind(null,l[c-2])):f}),s=Kt(()=>r.value>-1&&kT(t.params,i.value.params)),o=Kt(()=>r.value>-1&&r.value===t.matched.length-1&&yx(t.params,i.value.params));function a(l={}){if(BT(l)){const c=e[ht(n.replace)?"replace":"push"](ht(n.to)).catch(Ll);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Kt(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function OT(n){return n.length===1?n[0]:n}const UT=_c({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:$g,setup(n,{slots:e}){const t=pc($g(n)),{options:i}=Gi(Mf),r=Kt(()=>({[Kg(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Kg(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&OT(e.default(t));return n.custom?s:Kp("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),FT=UT;function BT(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function kT(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!fr(r)||r.length!==i.length||i.some((s,o)=>s.valueOf()!==r[o].valueOf()))return!1}return!0}function jg(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Kg=(n,e,t)=>n??e??t,zT=_c({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Gi(ud),r=Kt(()=>n.route||i.value),s=Gi(Hg,0),o=Kt(()=>{let c=ht(s);const{matched:u}=r.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=Kt(()=>r.value.matched[o.value]);_u(Hg,Kt(()=>o.value+1)),_u(mT,a),_u(ud,r);const l=nt();return or(()=>[l.value,a.value,n.name],([c,u,d],[f,h,p])=>{u&&(u.instances[d]=c,h&&h!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!Ia(u,h)||!f)&&(u.enterCallbacks[d]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,d=a.value,f=d&&d.components[u];if(!f)return Zg(t.default,{Component:f,route:c});const h=d.props[u],p=h?h===!0?c.params:typeof h=="function"?h(c):h:null,_=Kp(f,Et({},p,e,{onVnodeUnmounted:g=>{g.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Zg(t.default,{Component:_,route:c})||_}}});function Zg(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const HT=zT;function VT(n){const e=PT(n.routes,n),t=n.parseQuery||dT,i=n.stringifyQuery||zg,r=n.history,s=tl(),o=tl(),a=tl(),l=ho(_s);let c=_s;ua&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Wf.bind(null,W=>""+W),d=Wf.bind(null,KE),f=Wf.bind(null,Ql);function h(W,K){let le,he;return Sx(W)?(le=e.getRecordMatcher(W),he=K):he=W,e.addRoute(he,le)}function p(W){const K=e.getRecordMatcher(W);K&&e.removeRoute(K)}function m(){return e.getRoutes().map(W=>W.record)}function _(W){return!!e.getRecordMatcher(W)}function g(W,K){if(K=Et({},K||l.value),typeof W=="string"){const G=Xf(t,W,K.path),Q=e.resolve({path:G.path},K),Z=r.createHref(G.fullPath);return Et(G,Q,{params:f(Q.params),hash:Ql(G.hash),redirectedFrom:void 0,href:Z})}let le;if(W.path!=null)le=Et({},W,{path:Xf(t,W.path,K.path).path});else{const G=Et({},W.params);for(const Q in G)G[Q]==null&&delete G[Q];le=Et({},W,{params:d(G)}),K.params=d(K.params)}const he=e.resolve(le,K),ye=W.hash||"";he.params=u(f(he.params));const N=QE(i,Et({},W,{hash:YE(ye),path:he.path})),I=r.createHref(N);return Et({fullPath:N,hash:ye,query:i===zg?pT(W.query):W.query||{}},he,{redirectedFrom:void 0,href:I})}function v(W){return typeof W=="string"?Xf(t,W,l.value.path):Et({},W)}function y(W,K){if(c!==W)return Na(jt.NAVIGATION_CANCELLED,{from:K,to:W})}function x(W){return w(W)}function E(W){return x(Et(v(W),{replace:!0}))}function T(W,K){const le=W.matched[W.matched.length-1];if(le&&le.redirect){const{redirect:he}=le;let ye=typeof he=="function"?he(W,K):he;return typeof ye=="string"&&(ye=ye.includes("?")||ye.includes("#")?ye=v(ye):{path:ye},ye.params={}),Et({query:W.query,hash:W.hash,params:ye.path!=null?{}:W.params},ye)}}function w(W,K){const le=c=g(W),he=l.value,ye=W.state,N=W.force,I=W.replace===!0,G=T(le,he);if(G)return w(Et(v(G),{state:typeof G=="object"?Et({},ye,G.state):ye,force:N,replace:I}),K||le);const Q=le;Q.redirectedFrom=K;let Z;return!N&&eT(i,he,le)&&(Z=Na(jt.NAVIGATION_DUPLICATED,{to:Q,from:he}),de(he,he,!0,!1)),(Z?Promise.resolve(Z):P(Q,he)).catch(U=>kr(U)?kr(U,jt.NAVIGATION_GUARD_REDIRECT)?U:F(U):Y(U,Q,he)).then(U=>{if(U){if(kr(U,jt.NAVIGATION_GUARD_REDIRECT))return w(Et({replace:I},v(U.to),{state:typeof U.to=="object"?Et({},ye,U.to.state):ye,force:N}),K||Q)}else U=R(Q,he,!0,I,ye);return L(Q,he,U),U})}function S(W,K){const le=y(W,K);return le?Promise.reject(le):Promise.resolve()}function M(W){const K=He.values().next().value;return K&&typeof K.runWithContext=="function"?K.runWithContext(W):W()}function P(W,K){let le;const[he,ye,N]=gT(W,K);le=Yf(he.reverse(),"beforeRouteLeave",W,K);for(const G of he)G.leaveGuards.forEach(Q=>{le.push(Cs(Q,W,K))});const I=S.bind(null,W,K);return le.push(I),re(le).then(()=>{le=[];for(const G of s.list())le.push(Cs(G,W,K));return le.push(I),re(le)}).then(()=>{le=Yf(ye,"beforeRouteUpdate",W,K);for(const G of ye)G.updateGuards.forEach(Q=>{le.push(Cs(Q,W,K))});return le.push(I),re(le)}).then(()=>{le=[];for(const G of N)if(G.beforeEnter)if(fr(G.beforeEnter))for(const Q of G.beforeEnter)le.push(Cs(Q,W,K));else le.push(Cs(G.beforeEnter,W,K));return le.push(I),re(le)}).then(()=>(W.matched.forEach(G=>G.enterCallbacks={}),le=Yf(N,"beforeRouteEnter",W,K,M),le.push(I),re(le))).then(()=>{le=[];for(const G of o.list())le.push(Cs(G,W,K));return le.push(I),re(le)}).catch(G=>kr(G,jt.NAVIGATION_CANCELLED)?G:Promise.reject(G))}function L(W,K,le){a.list().forEach(he=>M(()=>he(W,K,le)))}function R(W,K,le,he,ye){const N=y(W,K);if(N)return N;const I=K===_s,G=ua?history.state:{};le&&(he||I?r.replace(W.fullPath,Et({scroll:I&&G&&G.scroll},ye)):r.push(W.fullPath,ye)),l.value=W,de(W,K,le,I),F()}let O;function V(){O||(O=r.listen((W,K,le)=>{if(!We.listening)return;const he=g(W),ye=T(he,We.currentRoute.value);if(ye){w(Et(ye,{replace:!0,force:!0}),he).catch(Ll);return}c=he;const N=l.value;ua&&lT(kg(N.fullPath,le.delta),Sf()),P(he,N).catch(I=>kr(I,jt.NAVIGATION_ABORTED|jt.NAVIGATION_CANCELLED)?I:kr(I,jt.NAVIGATION_GUARD_REDIRECT)?(w(Et(v(I.to),{force:!0}),he).then(G=>{kr(G,jt.NAVIGATION_ABORTED|jt.NAVIGATION_DUPLICATED)&&!le.delta&&le.type===ld.pop&&r.go(-1,!1)}).catch(Ll),Promise.reject()):(le.delta&&r.go(-le.delta,!1),Y(I,he,N))).then(I=>{I=I||R(he,N,!1),I&&(le.delta&&!kr(I,jt.NAVIGATION_CANCELLED)?r.go(-le.delta,!1):le.type===ld.pop&&kr(I,jt.NAVIGATION_ABORTED|jt.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),L(he,N,I)}).catch(Ll)}))}let X=tl(),z=tl(),k;function Y(W,K,le){F(W);const he=z.list();return he.length?he.forEach(ye=>ye(W,K,le)):console.error(W),Promise.reject(W)}function oe(){return k&&l.value!==_s?Promise.resolve():new Promise((W,K)=>{X.add([W,K])})}function F(W){return k||(k=!W,V(),X.list().forEach(([K,le])=>W?le(W):K()),X.reset()),W}function de(W,K,le,he){const{scrollBehavior:ye}=n;if(!ua||!ye)return Promise.resolve();const N=!le&&cT(kg(W.fullPath,0))||(he||!le)&&history.state&&history.state.scroll||null;return xa().then(()=>ye(W,K,N)).then(I=>I&&aT(I)).catch(I=>Y(I,W,K))}const fe=W=>r.go(W);let Ie;const He=new Set,We={currentRoute:l,listening:!0,addRoute:h,removeRoute:p,clearRoutes:e.clearRoutes,hasRoute:_,getRoutes:m,resolve:g,options:n,push:x,replace:E,go:fe,back:()=>fe(-1),forward:()=>fe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:z.add,isReady:oe,install(W){W.component("RouterLink",FT),W.component("RouterView",HT),W.config.globalProperties.$router=We,Object.defineProperty(W.config.globalProperties,"$route",{enumerable:!0,get:()=>ht(l)}),ua&&!Ie&&l.value===_s&&(Ie=!0,x(r.location).catch(he=>{}));const K={};for(const he in _s)Object.defineProperty(K,he,{get:()=>l.value[he],enumerable:!0});W.provide(Mf,We),W.provide(Jp,pv(K)),W.provide(ud,l);const le=W.unmount;He.add(W),W.unmount=function(){He.delete(W),He.size<1&&(c=_s,O&&O(),O=null,l.value=_s,Ie=!1,k=!1),le()}}};function re(W){return W.reduce((K,le)=>K.then(()=>M(le)),Promise.resolve())}return We}function GT(){return Gi(Mf)}function Qp(n){return Gi(Jp)}function WT(n){return document.readyState==="loading"?new Promise(e=>{document.addEventListener("DOMContentLoaded",()=>e(n))}):Promise.resolve(n)}const XT=_c({setup(n,{slots:e}){const t=nt(!1);return dr(()=>t.value=!0),()=>t.value?e.default&&e.default({}):e.placeholder&&e.placeholder({})}});function qT(n){try{return JSON.parse(n||"{}")}catch(e){return console.error("[SSG] On state deserialization -",e,n),{}}}function YT(n,e,t,i){const{transformState:r,registerComponents:s=!0,useHead:o=!0,rootContainer:a="#app"}={};async function l(c){const u=DE(n);let d;o&&u.use(d=UE());const f=VT({history:yT(e.base),...e}),{routes:h}=e;s&&u.component("ClientOnly",XT);const p=[],g={app:u,head:d,isClient:!0,router:f,routes:h,onSSRAppRendered:()=>{},triggerOnSSRAppRendered:()=>Promise.all(p.map(E=>E())),initialState:{},transformState:r,routePath:c};await WT(),g.initialState=r?.(window.__INITIAL_STATE__||{})||qT(window.__INITIAL_STATE__),await t?.(g),u.use(f);let v,y=!0;f.beforeEach((E,T,w)=>{(y||v&&v===E.path)&&(y=!1,v=E.path,E.meta.state=g.initialState),w()});const x=g.initialState;return{...g,initialState:x}}return(async()=>{const{app:c,router:u}=await l();await u.isReady(),c.mount(a,!0)})(),l}let $T;function jT(){return $T}function KT(n){return typeof n=="function"?n():ht(n)}function fd(n){if(n instanceof Promise||n instanceof Date||n instanceof RegExp)return n;const e=KT(n);if(!n||!e)return e;if(Array.isArray(e))return e.map(t=>fd(t));if(typeof e=="object"){const t={};for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)){if(i==="titleTemplate"||i[0]==="o"&&i[1]==="n"){t[i]=ht(e[i]);continue}t[i]=fd(e[i])}return t}return e}const ZT="usehead",Jg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Qg="__unhead_injection_handler__";function JT(){return Qg in Jg?Jg[Qg]():Gi(ZT)||jT()}function QT(n,e={}){const t=e.head||JT();if(t)return t.ssr?t.push(n,e):ew(t,n,e)}function ew(n,e,t={}){const i=nt(!1),r=nt({});ZM(()=>{r.value=i.value?{}:fd(e)});const s=n.push(r.value,t);return or(r,a=>{s.patch(a)}),Fo()&&(xc(()=>{s.dispose()}),Iv(()=>{i.value=!0}),Lv(()=>{i.value=!1})),s}function qr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function wx(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}var Ai={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Oa={duration:.5,overwrite:!1,delay:0},em,Dn,Vt,zi=1e8,Ut=1/zi,hd=Math.PI*2,tw=hd/4,nw=0,Ax=Math.sqrt,iw=Math.cos,rw=Math.sin,Tn=function(e){return typeof e=="string"},Zt=function(e){return typeof e=="function"},as=function(e){return typeof e=="number"},tm=function(e){return typeof e>"u"},Nr=function(e){return typeof e=="object"},li=function(e){return e!==!1},nm=function(){return typeof window<"u"},Ic=function(e){return Zt(e)||Tn(e)},Cx=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},qn=Array.isArray,sw=/random\([^)]+\)/g,ow=/,\s*/g,e_=/(?:-?\.?\d|\.)+/gi,Rx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,da=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,$f=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Px=/[+-]=-?[.\d]+/,aw=/[^,'"\[\]\s]+/gi,lw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Wt,Sr,dd,im,Ri={},$u={},Dx,Lx=function(e){return($u=Ua(e,Ri))&&di},rm=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ec=function(e,t){return!t&&console.warn(e)},Ix=function(e,t){return e&&(Ri[e]=t)&&$u&&($u[e]=t)||Ri},tc=function(){return 0},cw={suppressEvents:!0,isStart:!0,kill:!1},Su={suppressEvents:!0,kill:!1},uw={suppressEvents:!0},sm={},Fs=[],pd={},Nx,yi={},jf={},t_=30,Mu=[],om="",am=function(e){var t=e[0],i,r;if(Nr(t)||Zt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Mu.length;r--&&!Mu[r].targetTest(t););i=Mu[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new ry(e[r],i)))||e.splice(r,1);return e},To=function(e){return e._gsap||am(Hi(e))[0]._gsap},Ox=function(e,t,i){return(i=e[t])&&Zt(i)?e[t]():tm(i)&&e.getAttribute&&e.getAttribute(t)||i},ci=function(e,t){return(e=e.split(",")).forEach(t)||e},en=function(e){return Math.round(e*1e5)/1e5||0},Gt=function(e){return Math.round(e*1e7)/1e7||0},ba=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},fw=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},ju=function(){var e=Fs.length,t=Fs.slice(0),i,r;for(pd={},Fs.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},lm=function(e){return!!(e._initted||e._startAt||e.add)},Ux=function(e,t,i,r){Fs.length&&!Dn&&ju(),e.render(t,i,!!(Dn&&t<0&&lm(e))),Fs.length&&!Dn&&ju()},Fx=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(aw).length<2?t:Tn(e)?e.trim():e},Bx=function(e){return e},Pi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},hw=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ua=function(e,t){for(var i in t)e[i]=t[i];return e},n_=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Nr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Ku=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Il=function(e){var t=e.parent||Wt,i=e.keyframes?hw(qn(e.keyframes)):Pi;if(li(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},dw=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},kx=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},bf=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Hs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},wo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},pw=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},md=function(e,t,i,r){return e._startAt&&(Dn?e._startAt.revert(Su):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},mw=function n(e){return!e||e._ts&&n(e.parent)},i_=function(e){return e._repeat?Fa(e._tTime,e=e.duration()+e._rDelay)*e:0},Fa=function(e,t){var i=Math.floor(e=Gt(e/t));return e&&i===e?i-1:i},Zu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ef=function(e){return e._end=Gt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ut)||0))},Tf=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Gt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ef(e),i._dirty||wo(i,e)),e},zx=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Zu(e.rawTime(),t),(!t._dur||Sc(0,t.totalDuration(),i)-t._tTime>Ut)&&t.render(i,!0)),wo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Ut}},Tr=function(e,t,i,r){return t.parent&&Hs(t),t._start=Gt((as(i)?i:i||e!==Wt?Ni(e,i,t):e._time)+t._delay),t._end=Gt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),kx(e,t,"_first","_last",e._sort?"_start":0),gd(t)||(e._recent=t),r||zx(e,t),e._ts<0&&Tf(e,e._tTime),e},Hx=function(e,t){return(Ri.ScrollTrigger||rm("scrollTrigger",t))&&Ri.ScrollTrigger.create(t,e)},Vx=function(e,t,i,r,s){if(um(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Dn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Nx!==Mi.frame)return Fs.push(e),e._lazy=[s,r],1},gw=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},gd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},_w=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&gw(e)&&!(!e._initted&&gd(e))||(e._ts<0||e._dp._ts<0)&&!gd(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=Sc(0,e._tDur,t),u=Fa(l,a),e._yoyo&&u&1&&(o=1-o),u!==Fa(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Dn||r||e._zTime===Ut||!t&&e._zTime){if(!e._initted&&Vx(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?Ut:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&md(e,t,i,!0),e._onUpdate&&!i&&Ti(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Ti(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Hs(e,1),!i&&!Dn&&(Ti(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},vw=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ba=function(e,t,i,r){var s=e._repeat,o=Gt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Gt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Tf(e,e._tTime=e._tDur*a),e.parent&&Ef(e),i||wo(e.parent,e),e},r_=function(e){return e instanceof ni?wo(e):Ba(e,e._dur)},xw={_start:0,endTime:tc,totalDuration:tc},Ni=function n(e,t,i){var r=e.labels,s=e._recent||xw,o=e.duration()>=zi?s.endTime(!1):e._dur,a,l,c;return Tn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(qn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Nl=function(e,t,i){var r=as(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=li(l.vars.inherit)&&l.parent;o.immediateRender=li(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new on(t[0],o,t[s+1])},Ys=function(e,t){return e||e===0?t(e):t},Sc=function(e,t,i){return i<e?e:i>t?t:i},Vn=function(e,t){return!Tn(e)||!(t=lw.exec(e))?"":t[1]},yw=function(e,t,i){return Ys(i,function(r){return Sc(e,t,r)})},_d=[].slice,Gx=function(e,t){return e&&Nr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Nr(e[0]))&&!e.nodeType&&e!==Sr},Sw=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Tn(r)&&!t||Gx(r,1)?(s=i).push.apply(s,Hi(r)):i.push(r)})||i},Hi=function(e,t,i){return Vt&&!t&&Vt.selector?Vt.selector(e):Tn(e)&&!i&&(dd||!ka())?_d.call((t||im).querySelectorAll(e),0):qn(e)?Sw(e,i):Gx(e)?_d.call(e,0):e?[e]:[]},vd=function(e){return e=Hi(e)[0]||ec("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Hi(t,i.querySelectorAll?i:i===e?ec("Invalid scope")||im.createElement("div"):e)}},Wx=function(e){return e.sort(function(){return .5-Math.random()})},Xx=function(e){if(Zt(e))return e;var t=Nr(e)?e:{each:e},i=Ao(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,d=r;return Tn(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],d=r[1]),function(f,h,p){var m=(p||t).length,_=o[m],g,v,y,x,E,T,w,S,M;if(!_){if(M=t.grid==="auto"?0:(t.grid||[1,zi])[1],!M){for(w=-zi;w<(w=p[M++].getBoundingClientRect().left)&&M<m;);M<m&&M--}for(_=o[m]=[],g=l?Math.min(M,m)*u-.5:r%M,v=M===zi?0:l?m*d/M-.5:r/M|0,w=0,S=zi,T=0;T<m;T++)y=T%M-g,x=v-(T/M|0),_[T]=E=c?Math.abs(c==="y"?x:y):Ax(y*y+x*x),E>w&&(w=E),E<S&&(S=E);r==="random"&&Wx(_),_.max=w-S,_.min=S,_.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(M>m?m-1:c?c==="y"?m/M:M:Math.max(M,m/M))||0)*(r==="edges"?-1:1),_.b=m<0?s-m:s,_.u=Vn(t.amount||t.each)||0,i=i&&m<0?ty(i):i}return m=(_[f]-_.min)/_.max||0,Gt(_.b+(i?i(m):m)*_.v)+_.u}},xd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Gt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(as(i)?0:Vn(i))}},qx=function(e,t){var i=qn(e),r,s;return!i&&Nr(e)&&(r=i=e.radius||zi,e.values?(e=Hi(e.values),(s=!as(e[0]))&&(r*=r)):e=xd(e.increment)),Ys(t,i?Zt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=zi,u=0,d=e.length,f,h;d--;)s?(f=e[d].x-a,h=e[d].y-l,f=f*f+h*h):f=Math.abs(e[d]-a),f<c&&(c=f,u=d);return u=!r||c<=r?e[u]:o,s||u===o||as(o)?u:u+Vn(o)}:xd(e))},Yx=function(e,t,i,r){return Ys(qn(e)?!t:i===!0?!!(i=0):!r,function(){return qn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},Mw=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},bw=function(e,t){return function(i){return e(parseFloat(i))+(t||Vn(i))}},Ew=function(e,t,i){return jx(e,t,0,1,i)},$x=function(e,t,i){return Ys(i,function(r){return e[~~t(r)]})},Tw=function n(e,t,i){var r=t-e;return qn(e)?$x(e,n(0,e.length),t):Ys(i,function(s){return(r+(s-e)%r)%r+e})},ww=function n(e,t,i){var r=t-e,s=r*2;return qn(e)?$x(e,n(0,e.length-1),t):Ys(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},nc=function(e){return e.replace(sw,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(ow);return Yx(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},jx=function(e,t,i,r,s){var o=t-e,a=r-i;return Ys(s,function(l){return i+((l-e)/o*a||0)})},Aw=function n(e,t,i,r){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var o=Tn(e),a={},l,c,u,d,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(qn(e)&&!qn(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(n(e[c-1],e[c]));d--,s=function(p){p*=d;var m=Math.min(f,~~p);return u[m](p-m)},i=t}else r||(e=Ua(qn(e)?[]:{},e));if(!u){for(l in t)cm.call(a,e,l,"get",t[l]);s=function(p){return dm(p,a)||(o?e.p:e)}}}return Ys(i,s)},s_=function(e,t,i){var r=e.labels,s=zi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ti=function(e,t,i){var r=e.vars,s=r[t],o=Vt,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&Fs.length&&ju(),a&&(Vt=a),u=l?s.apply(c,l):s.call(c),Vt=o,u},ml=function(e){return Hs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Dn),e.progress()<1&&Ti(e,"onInterrupt"),e},pa,Kx=[],Zx=function(e){if(e)if(e=!e.name&&e.default||e,nm()||e.headless){var t=e.name,i=Zt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:tc,render:dm,add:cm,kill:Gw,modifier:Vw,rawVars:0},o={targetTest:0,get:0,getSetter:hm,aliases:{},register:0};if(ka(),e!==r){if(yi[t])return;Pi(r,Pi(Ku(e,s),o)),Ua(r.prototype,Ua(s,Ku(e,o))),yi[r.prop=t]=r,e.targetTest&&(Mu.push(r),sm[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ix(t,r),e.register&&e.register(di,r,ui)}else Kx.push(e)},Ot=255,gl={aqua:[0,Ot,Ot],lime:[0,Ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ot],navy:[0,0,128],white:[Ot,Ot,Ot],olive:[128,128,0],yellow:[Ot,Ot,0],orange:[Ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ot,0,0],pink:[Ot,192,203],cyan:[0,Ot,Ot],transparent:[Ot,Ot,Ot,0]},Kf=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Ot+.5|0},Jx=function(e,t,i){var r=e?as(e)?[e>>16,e>>8&Ot,e&Ot]:0:gl.black,s,o,a,l,c,u,d,f,h,p;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),gl[e])r=gl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Ot,r&Ot,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Ot,e&Ot]}else if(e.substr(0,3)==="hsl"){if(r=p=e.match(e_),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Kf(l+1/3,s,o),r[1]=Kf(l,s,o),r[2]=Kf(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Rx),i&&r.length<4&&(r[3]=1),r}else r=e.match(e_)||gl.transparent;r=r.map(Number)}return t&&!p&&(s=r[0]/Ot,o=r[1]/Ot,a=r[2]/Ot,d=Math.max(s,o,a),f=Math.min(s,o,a),u=(d+f)/2,d===f?l=c=0:(h=d-f,c=u>.5?h/(2-d-f):h/(d+f),l=d===s?(o-a)/h+(o<a?6:0):d===o?(a-s)/h+2:(s-o)/h+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},Qx=function(e){var t=[],i=[],r=-1;return e.split(Bs).forEach(function(s){var o=s.match(da)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},o_=function(e,t,i){var r="",s=(e+r).match(Bs),o=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!s)return e;if(s=s.map(function(f){return(f=Jx(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(u=Qx(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Bs,"1").split(da),d=c.length-1;a<d;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Bs),d=c.length-1;a<d;a++)r+=c[a]+s[a];return r+c[d]},Bs=(function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in gl)n+="|"+e+"\\b";return new RegExp(n+")","gi")})(),Cw=/hsl[a]?\(/,ey=function(e){var t=e.join(" "),i;if(Bs.lastIndex=0,Bs.test(t))return i=Cw.test(t),e[1]=o_(e[1],i),e[0]=o_(e[0],i,Qx(e[1])),!0},ic,Mi=(function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,d,f,h,p=function m(_){var g=n()-r,v=_===!0,y,x,E,T;if((g>e||g<0)&&(i+=g-t),r+=g,E=r-i,y=E-o,(y>0||v)&&(T=++d.frame,f=E-d.time*1e3,d.time=E=E/1e3,o+=y+(y>=s?4:s-y),x=1),v||(l=c(m)),x)for(h=0;h<a.length;h++)a[h](E,f,T,_)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(_){return f/(1e3/(_||60))},wake:function(){Dx&&(!dd&&nm()&&(Sr=dd=window,im=Sr.document||{},Ri.gsap=di,(Sr.gsapVersions||(Sr.gsapVersions=[])).push(di.version),Lx($u||Sr.GreenSockGlobals||!Sr.gsap&&Sr||{}),Kx.forEach(Zx)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(_){return setTimeout(_,o-d.time*1e3+1|0)},ic=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ic=0,c=tc},lagSmoothing:function(_,g){e=_||1/0,t=Math.min(g||33,e)},fps:function(_){s=1e3/(_||240),o=d.time*1e3+s},add:function(_,g,v){var y=g?function(x,E,T,w){_(x,E,T,w),d.remove(y)}:_;return d.remove(_),a[v?"unshift":"push"](y),ka(),y},remove:function(_,g){~(g=a.indexOf(_))&&a.splice(g,1)&&h>=g&&h--},_listeners:a},d})(),ka=function(){return!ic&&Mi.wake()},pt={},Rw=/^[\d.\-M][\d.\-,\s]/,Pw=/["']/g,Dw=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(Pw,"").trim():+c,r=l.substr(a+1).trim();return t},Lw=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},Iw=function(e){var t=(e+"").split("("),i=pt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Dw(t[1])]:Lw(e).split(",").map(Fx)):pt._CE&&Rw.test(e)?pt._CE("",e):i},ty=function(e){return function(t){return 1-e(1-t)}},ny=function n(e,t){for(var i=e._first,r;i;)i instanceof ni?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},Ao=function(e,t){return e&&(Zt(e)?e:pt[e]||Iw(e))||t},Bo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return ci(e,function(a){pt[a]=Ri[a]=s,pt[o=a.toLowerCase()]=i;for(var l in s)pt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=pt[a+"."+l]=s[l]}),s},iy=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Zf=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/hd*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*rw((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:iy(a);return s=hd/s,l.config=function(c,u){return n(e,c,u)},l},Jf=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:iy(i);return r.config=function(s){return n(e,s)},r};ci("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Bo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});pt.Linear.easeNone=pt.none=pt.Linear.easeIn;Bo("Elastic",Zf("in"),Zf("out"),Zf());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Bo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Bo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Bo("Circ",function(n){return-(Ax(1-n*n)-1)});Bo("Sine",function(n){return n===1?1:-iw(n*tw)+1});Bo("Back",Jf("in"),Jf("out"),Jf());pt.SteppedEase=pt.steps=Ri.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Ut;return function(a){return((r*Sc(0,o,a)|0)+s)*i}}};Oa.ease=pt["quad.out"];ci("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return om+=n+","+n+"Params,"});var ry=function(e,t){this.id=nw++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ox,this.set=t?t.getSetter:hm},rc=(function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ba(this,+t.duration,1,1),this.data=t.data,Vt&&(this._ctx=Vt,Vt.data.push(this)),ic||Mi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ba(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(ka(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Tf(this,i),!s._dp||s.parent||zx(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Tr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ut||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Ux(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+i_(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+i_(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Fa(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Ut?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Zu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Ut?0:this._rts,this.totalTime(Sc(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Ef(this),pw(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ka(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ut&&(this._tTime-=Ut)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Gt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Tr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(li(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Zu(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=uw);var r=Dn;return Dn=i,lm(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Dn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,r_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,r_(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Ni(this,i),li(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,li(r)),this._dur||(this._zTime=-Ut),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Ut:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ut,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Ut)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Zt(i)?i:Bx,l=function(){var u=r.then;r.then=null,s&&s(),Zt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){ml(this)},n})();Pi(rc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ut,_prom:0,_ps:!1,_rts:1});var ni=(function(n){wx(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=li(i.sortChildren),Wt&&Tr(i.parent||Wt,qr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Hx(qr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Nl(0,arguments,this),this},t.from=function(r,s,o){return Nl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Nl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Il(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new on(r,s,Ni(this,o),1),this},t.call=function(r,s,o){return Tr(this,on.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new on(r,o,Ni(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Il(o).immediateRender=li(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,d){return a.startAt=o,Il(a).immediateRender=li(a.immediateRender),this.staggerTo(r,s,a,l,c,u,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Gt(r),d=this._zTime<0!=r<0&&(this._initted||!c),f,h,p,m,_,g,v,y,x,E,T,w;if(this!==Wt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||d){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,x=this._start,y=this._ts,g=!y,d&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,_=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,s,o);if(f=Gt(u%_),u===l?(m=this._repeat,f=c):(E=Gt(u/_),m=~~E,m&&m===E&&(f=c,m--),f>c&&(f=c)),E=Fa(this._tTime,_),!a&&this._tTime&&E!==m&&this._tTime-E*_-this._dur<=0&&(E=m),T&&m&1&&(f=c-f,w=1),m!==E&&!this._lock){var S=T&&E&1,M=S===(T&&m&1);if(m<E&&(S=!S),a=S?0:u%c?c:u,this._lock=1,this.render(a||(w?0:Gt(m*_)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Ti(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,E=m),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=S?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;ny(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=vw(this,Gt(a),Gt(f)),v&&(u-=f-(f=v._start))),this._tTime=u,this._time=f,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!E&&(Ti(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(h=this._first;h;){if(p=h._next,(h._act||f>=h._start)&&h._ts&&v!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,s,o),f!==this._time||!this._ts&&!g){v=0,p&&(u+=this._zTime=-Ut);break}}h=p}else{h=this._last;for(var P=r<0?r:f;h;){if(p=h._prev,(h._act||P<=h._end)&&h._ts&&v!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(P-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(P-h._start)*h._ts,s,o||Dn&&lm(h)),f!==this._time||!this._ts&&!g){v=0,p&&(u+=this._zTime=P?-Ut:Ut);break}}h=p}}if(v&&!s&&(this.pause(),v.render(f>=a?0:-Ut)._zTime=f>=a?1:-1,this._ts))return this._start=x,Ef(this),this.render(r,s,o);this._onUpdate&&!s&&Ti(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Hs(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Ti(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(as(s)||(s=Ni(this,s,r)),!(r instanceof rc)){if(qn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Tn(r))return this.addLabel(r,s);if(Zt(r))r=on.delayedCall(0,r);else return this}return this!==r?Tr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-zi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof on?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Tn(r)?this.removeLabel(r):Zt(r)?this.killTweensOf(r):(r.parent===this&&bf(this,r),r===this._recent&&(this._recent=this._last),wo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Gt(Mi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Ni(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=on.delayedCall(0,s||tc,o);return a.data="isPause",this._hasPause=1,Tr(this,a,Ni(this,r))},t.removePause=function(r){var s=this._first;for(r=Ni(this,r);s;)s._start===r&&s.data==="isPause"&&Hs(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Ps!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Hi(r),l=this._first,c=as(s),u;l;)l instanceof on?fw(l._targets,a)&&(c?(!Ps||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Ni(o,r),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,h,p=on.to(o,Pi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ut,onStart:function(){if(o.pause(),!h){var _=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==_&&Ba(p,_,0,1).render(p._time,!0,!0),h=1}u&&u.apply(p,d||[])}},s));return f?p.render(0):p},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Pi({startAt:{time:Ni(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),s_(this,Ni(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),s_(this,Ni(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ut)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=Gt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return wo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),wo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=zi,c,u,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Tr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Gt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ba(o,o===Wt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Wt._ts&&(Ux(Wt,Zu(r,Wt)),Nx=Mi.frame),Mi.frame>=t_){t_+=Ai.autoSleep||120;var s=Wt._first;if((!s||!s._ts)&&Ai.autoSleep&&Mi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Mi.sleep()}}},e})(rc);Pi(ni.prototype,{_lock:0,_hasPause:0,_forcing:0});var Nw=function(e,t,i,r,s,o,a){var l=new ui(this._pt,e,t,0,1,uy,null,s),c=0,u=0,d,f,h,p,m,_,g,v;for(l.b=i,l.e=r,i+="",r+="",(g=~r.indexOf("random("))&&(r=nc(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),f=i.match($f)||[];d=$f.exec(r);)p=d[0],m=r.substring(c,d.index),h?h=(h+1)%5:m.substr(-5)==="rgba("&&(h=1),p!==f[u++]&&(_=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:m||u===1?m:",",s:_,c:p.charAt(1)==="="?ba(_,p)-_:parseFloat(p)-_,m:h&&h<4?Math.round:0},c=$f.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Px.test(r)||g)&&(l.e=0),this._pt=l,l},cm=function(e,t,i,r,s,o,a,l,c,u){Zt(r)&&(r=r(s||0,e,o));var d=e[t],f=i!=="get"?i:Zt(d)?c?e[t.indexOf("set")||!Zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,h=Zt(d)?c?kw:ly:fm,p;if(Tn(r)&&(~r.indexOf("random(")&&(r=nc(r)),r.charAt(1)==="="&&(p=ba(f,r)+(Vn(f)||0),(p||p===0)&&(r=p))),!u||f!==r||yd)return!isNaN(f*r)&&r!==""?(p=new ui(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?Hw:cy,0,h),c&&(p.fp=c),a&&p.modifier(a,this,e),this._pt=p):(!d&&!(t in e)&&rm(t,r),Nw.call(this,e,t,f,r,h,l||Ai.stringFilter,c))},Ow=function(e,t,i,r,s){if(Zt(e)&&(e=Ol(e,s,t,i,r)),!Nr(e)||e.style&&e.nodeType||qn(e)||Cx(e))return Tn(e)?Ol(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Ol(e[a],s,t,i,r);return o},sy=function(e,t,i,r,s,o){var a,l,c,u;if(yi[e]&&(a=new yi[e]).init(s,a.rawVars?t[e]:Ow(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new ui(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==pa))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Ps,yd,um=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,f=r.keyframes,h=r.autoRevert,p=e._dur,m=e._startAt,_=e._targets,g=e.parent,v=g&&g.data==="nested"?g.vars.targets:_,y=e._overwrite==="auto"&&!em,x=e.timeline,E,T,w,S,M,P,L,R,O,V,X,z,k;if(x&&(!f||!s)&&(s="none"),e._ease=Ao(s,Oa.ease),e._yEase=d?ty(Ao(d===!0?s:d,Oa.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!x&&!!r.runBackwards,!x||f&&!r.stagger){if(R=_[0]?To(_[0]).harness:0,z=R&&r[R.prop],E=Ku(r,sm),m&&(m._zTime<0&&m.progress(1),t<0&&u&&a&&!h?m.render(-1,!0):m.revert(u&&p?Su:cw),m._lazy=0),o){if(Hs(e._startAt=on.set(_,Pi({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!m&&li(l),startAt:null,delay:0,onUpdate:c&&function(){return Ti(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Dn||!a&&!h)&&e._startAt.revert(Su),a&&p&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&p&&!m){if(t&&(a=!1),w=Pi({overwrite:!1,data:"isFromStart",lazy:a&&!m&&li(l),immediateRender:a,stagger:0,parent:g},E),z&&(w[R.prop]=z),Hs(e._startAt=on.set(_,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Dn?e._startAt.revert(Su):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Ut,Ut);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&li(l)||l&&!p,T=0;T<_.length;T++){if(M=_[T],L=M._gsap||am(_)[T]._gsap,e._ptLookup[T]=V={},pd[L.id]&&Fs.length&&ju(),X=v===_?T:v.indexOf(M),R&&(O=new R).init(M,z||E,e,X,v)!==!1&&(e._pt=S=new ui(e._pt,M,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(Y){V[Y]=S}),O.priority&&(P=1)),!R||z)for(w in E)yi[w]&&(O=sy(w,E,e,X,M,v))?O.priority&&(P=1):V[w]=S=cm.call(e,M,w,"get",E[w],X,v,0,r.stringFilter);e._op&&e._op[T]&&e.kill(M,e._op[T]),y&&e._pt&&(Ps=e,Wt.killTweensOf(M,V,e.globalTime(t)),k=!e.parent,Ps=0),e._pt&&l&&(pd[L.id]=1)}P&&fy(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!k,f&&t<=0&&x.render(zi,!0,!0)},Uw=function(e,t,i,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,f,h;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(u=f[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return yd=1,e.vars[t]="+=0",um(e,a),yd=0,l?ec(t+" not eligible for reset"):1;c.push(u)}for(h=c.length;h--;)d=c[h],u=d._pt||d,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,d.e&&(d.e=en(i)+Vn(d.e)),d.b&&(d.b=u.s+Vn(d.b))},Fw=function(e,t){var i=e[0]?To(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Ua({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Bw=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(qn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ol=function(e,t,i,r,s){return Zt(e)?e.call(t,i,r,s):Tn(e)&&~e.indexOf("random(")?nc(e):e},oy=om+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ay={};ci(oy+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return ay[n]=1});var on=(function(n){wx(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Il(r))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,p=l.keyframes,m=l.defaults,_=l.scrollTrigger,g=l.yoyoEase,v=r.parent||Wt,y=(qn(i)||Cx(i)?as(i[0]):"length"in r)?[i]:Hi(i),x,E,T,w,S,M,P,L;if(a._targets=y.length?am(y):ec("GSAP target "+i+" not found. https://gsap.com",!Ai.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,p||f||Ic(c)||Ic(u)){if(r=a.vars,x=a.timeline=new ni({data:"nested",defaults:m||{},targets:v&&v.data==="nested"?v.vars.targets:y}),x.kill(),x.parent=x._dp=qr(a),x._start=0,f||Ic(c)||Ic(u)){if(w=y.length,P=f&&Xx(f),Nr(f))for(S in f)~oy.indexOf(S)&&(L||(L={}),L[S]=f[S]);for(E=0;E<w;E++)T=Ku(r,ay),T.stagger=0,g&&(T.yoyoEase=g),L&&Ua(T,L),M=y[E],T.duration=+Ol(c,qr(a),E,M,y),T.delay=(+Ol(u,qr(a),E,M,y)||0)-a._delay,!f&&w===1&&T.delay&&(a._delay=u=T.delay,a._start+=u,T.delay=0),x.to(M,T,P?P(E,M,y):0),x._ease=pt.none;x.duration()?c=u=0:a.timeline=0}else if(p){Il(Pi(x.vars.defaults,{ease:"none"})),x._ease=Ao(p.ease||r.ease||"none");var R=0,O,V,X;if(qn(p))p.forEach(function(z){return x.to(y,z,">")}),x.duration();else{T={};for(S in p)S==="ease"||S==="easeEach"||Bw(S,p[S],T,p.easeEach);for(S in T)for(O=T[S].sort(function(z,k){return z.t-k.t}),R=0,E=0;E<O.length;E++)V=O[E],X={ease:V.e,duration:(V.t-(E?O[E-1].t:0))/100*c},X[S]=V.v,x.to(y,X,R),R+=X.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return h===!0&&!em&&(Ps=qr(a),Wt.killTweensOf(y),Ps=0),Tr(v,qr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!c&&!p&&a._start===Gt(v._time)&&li(d)&&mw(qr(a))&&v.data!=="nested")&&(a._tTime=-Ut,a.render(Math.max(0,-u)||0)),_&&Hx(qr(a),_),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,d=r>l-Ut&&!u?l:r<Ut?0:r,f,h,p,m,_,g,v,y,x;if(!c)_w(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,y=this.timeline,this._repeat){if(m=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(m*100+r,s,o);if(f=Gt(d%m),d===l?(p=this._repeat,f=c):(_=Gt(d/m),p=~~_,p&&p===_?(f=c,p--):f>c&&(f=c)),g=this._yoyo&&p&1,g&&(x=this._yEase,f=c-f),_=Fa(this._tTime,m),f===a&&!o&&this._initted&&p===_)return this._tTime=d,this;p!==_&&(y&&this._yEase&&ny(y,g),this.vars.repeatRefresh&&!g&&!this._lock&&f!==m&&this._initted&&(this._lock=o=1,this.render(Gt(m*p),!0).invalidate()._lock=0))}if(!this._initted){if(Vx(this,u?r:f,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==_))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(x||this._ease)(f/c),this._from&&(this.ratio=v=1-v),!a&&d&&!s&&!_&&(Ti(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(v,h.d),h=h._next;y&&y.render(r<0?r:y._dur*y._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&md(this,r,s,o),Ti(this,"onUpdate")),this._repeat&&p!==_&&this.vars.onRepeat&&!s&&this.parent&&Ti(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&md(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Hs(this,1),!s&&!(u&&!a)&&(d||a||g)&&(Ti(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){ic||Mi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||um(this,c),u=this._ease(c/this._dur),Uw(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(Tf(this,0),this.parent||kx(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ml(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Dn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Ps&&Ps.vars.overwrite!==!0)._first||ml(this),this.parent&&o!==this.timeline.totalDuration()&&Ba(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Hi(r):a,c=this._ptLookup,u=this._pt,d,f,h,p,m,_,g;if((!s||s==="all")&&dw(a,l))return s==="all"&&(this._pt=0),ml(this);for(d=this._op=this._op||[],s!=="all"&&(Tn(s)&&(m={},ci(s,function(v){return m[v]=1}),s=m),s=Fw(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){f=c[g],s==="all"?(d[g]=s,p=f,h={}):(h=d[g]=d[g]||{},p=s);for(m in p)_=f&&f[m],_&&((!("kill"in _.d)||_.d.kill(m)===!0)&&bf(this,_,"_pt"),delete f[m]),h!=="all"&&(h[m]=1)}return this._initted&&!this._pt&&u&&ml(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Nl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Nl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Wt.killTweensOf(r,s,o)},e})(rc);Pi(on.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ci("staggerTo,staggerFrom,staggerFromTo",function(n){on[n]=function(){var e=new ni,t=_d.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var fm=function(e,t,i){return e[t]=i},ly=function(e,t,i){return e[t](i)},kw=function(e,t,i,r){return e[t](r.fp,i)},zw=function(e,t,i){return e.setAttribute(t,i)},hm=function(e,t){return Zt(e[t])?ly:tm(e[t])&&e.setAttribute?zw:fm},cy=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Hw=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},uy=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},dm=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Vw=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},Gw=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?bf(this,t,"_pt"):t.dep||(i=1),t=r;return!i},Ww=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},fy=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},ui=(function(){function n(t,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||cy,this.d=l||this,this.set=c||fm,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=Ww,this.m=i,this.mt=s,this.tween=r},n})();ci(om+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return sm[n]=1});Ri.TweenMax=Ri.TweenLite=on;Ri.TimelineLite=Ri.TimelineMax=ni;Wt=new ni({sortChildren:!1,defaults:Oa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ai.stringFilter=ey;var Co=[],bu={},Xw=[],a_=0,qw=0,Qf=function(e){return(bu[e]||Xw).map(function(t){return t()})},Sd=function(){var e=Date.now(),t=[];e-a_>2&&(Qf("matchMediaInit"),Co.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=Sr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),Qf("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),a_=e,Qf("matchMedia"))},hy=(function(){function n(t,i){this.selector=i&&vd(i),this.data=[],this._r=[],this.isReverted=!1,this.id=qw++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Zt(i)&&(s=r,r=i,i=Zt);var o=this,a=function(){var c=Vt,u=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=vd(s)),Vt=o,d=r.apply(o,arguments),Zt(d)&&o._r.push(d),Vt=c,o.selector=u,o.isReverted=!1,d};return o.last=a,i===Zt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Vt;Vt=null,i(this),Vt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof on&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof ni?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof on)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Co.length;o--;)Co[o].id===this.id&&Co.splice(o,1)},e.revert=function(i){this.kill(i||{})},n})(),Yw=(function(){function n(t){this.contexts=[],this.scope=t,Vt&&Vt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Nr(i)||(i={matches:i});var o=new hy(0,s||this.scope),a=o.conditions={},l,c,u;Vt&&!o.selector&&(o.selector=Vt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=Sr.matchMedia(i[c]),l&&(Co.indexOf(o)<0&&Co.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Sd):l.addEventListener("change",Sd)));return u&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n})(),Ju={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return Zx(r)})},timeline:function(e){return new ni(e)},getTweensOf:function(e,t){return Wt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Tn(e)&&(e=Hi(e)[0]);var s=To(e||{}).get,o=i?Bx:Fx;return i==="native"&&(i=""),e&&(t?o((yi[t]&&yi[t].get||s)(e,t,i,r)):function(a,l,c){return o((yi[a]&&yi[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=Hi(e),e.length>1){var r=e.map(function(u){return di.quickSetter(u,t,i)}),s=r.length;return function(u){for(var d=s;d--;)r[d](u)}}e=e[0]||{};var o=yi[t],a=To(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var d=new o;pa._pt=0,d.init(e,i?u+i:u,pa,0,[e]),d.render(1,d),pa._pt&&dm(1,pa)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var r,s=di.to(e,Pi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Wt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ao(e.ease,Oa.ease)),n_(Oa,e||{})},config:function(e){return n_(Ai,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!yi[a]&&!Ri[a]&&ec(t+" effect requires "+a+" plugin.")}),jf[t]=function(a,l,c){return i(Hi(a),Pi(l||{},s),c)},o&&(ni.prototype[t]=function(a,l,c){return this.add(jf[t](a,Nr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){pt[e]=Ao(t)},parseEase:function(e,t){return arguments.length?Ao(e,t):pt},getById:function(e){return Wt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new ni(e),r,s;for(i.smoothChildTiming=li(e.smoothChildTiming),Wt.remove(i),i._dp=0,i._time=i._tTime=Wt._time,r=Wt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof on&&r.vars.onComplete===r._targets[0]))&&Tr(i,r,r._start-r._delay),r=s;return Tr(Wt,i,0),i},context:function(e,t){return e?new hy(e,t):Vt},matchMedia:function(e){return new Yw(e)},matchMediaRefresh:function(){return Co.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Sd()},addEventListener:function(e,t){var i=bu[e]||(bu[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=bu[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:Tw,wrapYoyo:ww,distribute:Xx,random:Yx,snap:qx,normalize:Ew,getUnit:Vn,clamp:yw,splitColor:Jx,toArray:Hi,selector:vd,mapRange:jx,pipe:Mw,unitize:bw,interpolate:Aw,shuffle:Wx},install:Lx,effects:jf,ticker:Mi,updateRoot:ni.updateRoot,plugins:yi,globalTimeline:Wt,core:{PropTween:ui,globals:Ix,Tween:on,Timeline:ni,Animation:rc,getCache:To,_removeLinkedListItem:bf,reverting:function(){return Dn},context:function(e){return e&&Vt&&(Vt.data.push(e),e._ctx=Vt),Vt},suppressOverwrites:function(e){return em=e}}};ci("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Ju[n]=on[n]});Mi.add(ni.updateRoot);pa=Ju.to({},{duration:0});var $w=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},jw=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=$w(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},eh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Tn(s)&&(l={},ci(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}jw(a,s)}}}},di=Ju.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Dn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},eh("roundProps",xd),eh("modifiers"),eh("snap",qx))||Ju;on.version=ni.version=di.version="3.14.2";Dx=1;nm()&&ka();pt.Power0;pt.Power1;pt.Power2;pt.Power3;pt.Power4;pt.Linear;pt.Quad;pt.Cubic;pt.Quart;pt.Quint;pt.Strong;pt.Elastic;pt.Back;pt.SteppedEase;pt.Bounce;pt.Sine;pt.Expo;pt.Circ;var l_,Ds,Ea,pm,xo,c_,mm,Kw=function(){return typeof window<"u"},ls={},lo=180/Math.PI,Ta=Math.PI/180,Xo=Math.atan2,u_=1e8,gm=/([A-Z])/g,Zw=/(left|right|width|margin|padding|x)/i,Jw=/[\s,\(]\S/,Ar={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Md=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Qw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},e1=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},t1=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},n1=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},dy=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},py=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},i1=function(e,t,i){return e.style[t]=i},r1=function(e,t,i){return e.style.setProperty(t,i)},s1=function(e,t,i){return e._gsap[t]=i},o1=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},a1=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},l1=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Xt="transform",fi=Xt+"Origin",c1=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in ls&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ar[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=$r(r,a)}):this.tfm[e]=o.x?o[e]:$r(r,e),e===fi&&(this.tfm.zOrigin=o.zOrigin);else return Ar.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Xt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(fi,t,"")),e=Xt}(s||t)&&this.props.push(e,t,s[e])},my=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},u1=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(gm,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=mm(),(!s||!s.isStart)&&!i[Xt]&&(my(i),r.zOrigin&&i[fi]&&(i[fi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},gy=function(e,t){var i={target:e,props:[],revert:u1,save:c1};return e._gsap||di.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},_y,bd=function(e,t){var i=Ds.createElementNS?Ds.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ds.createElement(e);return i&&i.style?i:Ds.createElement(e)},wi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(gm,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,za(t)||t,1)||""},f_="O,Moz,ms,Ms,Webkit".split(","),za=function(e,t,i){var r=t||xo,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(f_[o]+e in s););return o<0?null:(o===3?"ms":o>=0?f_[o]:"")+e},Ed=function(){Kw()&&window.document&&(l_=window,Ds=l_.document,Ea=Ds.documentElement,xo=bd("div")||{style:{}},bd("div"),Xt=za(Xt),fi=Xt+"Origin",xo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",_y=!!za("perspective"),mm=di.core.reverting,pm=1)},h_=function(e){var t=e.ownerSVGElement,i=bd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Ea.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Ea.removeChild(i),s},d_=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},vy=function(e){var t,i;try{t=e.getBBox()}catch{t=h_(e),i=1}return t&&(t.width||t.height)||i||(t=h_(e)),t&&!t.width&&!t.x&&!t.y?{x:+d_(e,["x","cx","x1"])||0,y:+d_(e,["y","cy","y1"])||0,width:0,height:0}:t},xy=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&vy(e))},Vs=function(e,t){if(t){var i=e.style,r;t in ls&&t!==fi&&(t=Xt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(gm,"-$1").toLowerCase())):i.removeAttribute(t)}},Ls=function(e,t,i,r,s,o){var a=new ui(e._pt,t,i,0,1,o?py:dy);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},p_={deg:1,rad:1,turn:1},f1={grid:1,flex:1},Gs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=xo.style,l=Zw.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",h=r==="%",p,m,_,g;if(r===o||!s||p_[r]||p_[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),g=e.getCTM&&xy(e),(h||o==="%")&&(ls[t]||~t.indexOf("adius")))return p=g?e.getBBox()[l?"width":"height"]:e[u],en(h?s/p*d:s/100*p);if(a[l?"width":"height"]=d+(f?o:r),m=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===Ds||!m.appendChild)&&(m=Ds.body),_=m._gsap,_&&h&&_.width&&l&&_.time===Mi.time&&!_.uncache)return en(s/_.width*d);if(h&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+r,p=e[u],v?e.style[t]=v:Vs(e,t)}else(h||o==="%")&&!f1[wi(m,"display")]&&(a.position=wi(e,"position")),m===e&&(a.position="static"),m.appendChild(xo),p=xo[u],m.removeChild(xo),a.position="absolute";return l&&h&&(_=To(m),_.time=Mi.time,_.width=m[u]),en(f?p*s/d:p&&s?d/p*s:0)},$r=function(e,t,i,r){var s;return pm||Ed(),t in Ar&&t!=="transform"&&(t=Ar[t],~t.indexOf(",")&&(t=t.split(",")[0])),ls[t]&&t!=="transform"?(s=oc(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ef(wi(e,fi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Qu[t]&&Qu[t](e,t,i)||wi(e,t)||Ox(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Gs(e,t,s,i)+i:s},h1=function(e,t,i,r){if(!i||i==="none"){var s=za(t,e,1),o=s&&wi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=wi(e,"borderTopColor"))}var a=new ui(this._pt,e.style,t,0,1,uy),l=0,c=0,u,d,f,h,p,m,_,g,v,y,x,E;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=wi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(m=e.style[t],e.style[t]=r,r=wi(e,t)||r,m?e.style[t]=m:Vs(e,t)),u=[i,r],ey(u),i=u[0],r=u[1],f=i.match(da)||[],E=r.match(da)||[],E.length){for(;d=da.exec(r);)_=d[0],v=r.substring(l,d.index),p?p=(p+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(p=1),_!==(m=f[c++]||"")&&(h=parseFloat(m)||0,x=m.substr((h+"").length),_.charAt(1)==="="&&(_=ba(h,_)+x),g=parseFloat(_),y=_.substr((g+"").length),l=da.lastIndex-y.length,y||(y=y||Ai.units[t]||x,l===r.length&&(r+=y,a.e+=y)),x!==y&&(h=Gs(e,t,m,y)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:h,c:g-h,m:p&&p<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?py:dy;return Px.test(r)&&(a.e=0),this._pt=a,a},m_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},d1=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=m_[i]||i,t[1]=m_[r]||r,t.join(" ")},p1=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ls[a]&&(l=1,a=a==="transformOrigin"?fi:Xt),Vs(i,a);l&&(Vs(i,Xt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",oc(i,1),o.uncache=1,my(r)))}},Qu={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new ui(e._pt,t,i,0,0,p1);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},sc=[1,0,0,1,0,0],yy={},Sy=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},g_=function(e){var t=wi(e,Xt);return Sy(t)?sc:t.substr(7).match(Rx).map(en)},_m=function(e,t){var i=e._gsap||To(e),r=e.style,s=g_(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?sc:s):(s===sc&&!e.offsetParent&&e!==Ea&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Ea.appendChild(e)),s=g_(e),l?r.display=l:Vs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ea.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Td=function(e,t,i,r,s,o){var a=e._gsap,l=s||_m(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,h=l[0],p=l[1],m=l[2],_=l[3],g=l[4],v=l[5],y=t.split(" "),x=parseFloat(y[0])||0,E=parseFloat(y[1])||0,T,w,S,M;i?l!==sc&&(w=h*_-p*m)&&(S=x*(_/w)+E*(-m/w)+(m*v-_*g)/w,M=x*(-p/w)+E*(h/w)-(h*v-p*g)/w,x=S,E=M):(T=vy(e),x=T.x+(~y[0].indexOf("%")?x/100*T.width:x),E=T.y+(~(y[1]||y[0]).indexOf("%")?E/100*T.height:E)),r||r!==!1&&a.smooth?(g=x-c,v=E-u,a.xOffset=d+(g*h+v*m)-g,a.yOffset=f+(g*p+v*_)-v):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=E,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[fi]="0px 0px",o&&(Ls(o,a,"xOrigin",c,x),Ls(o,a,"yOrigin",u,E),Ls(o,a,"xOffset",d,a.xOffset),Ls(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+E)},oc=function(e,t){var i=e._gsap||new ry(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=wi(e,fi)||"0",u,d,f,h,p,m,_,g,v,y,x,E,T,w,S,M,P,L,R,O,V,X,z,k,Y,oe,F,de,fe,Ie,He,We;return u=d=f=m=_=g=v=y=x=0,h=p=1,i.svg=!!(e.getCTM&&xy(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Xt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Xt]!=="none"?l[Xt]:"")),r.scale=r.rotate=r.translate="none"),w=_m(e,i.svg),i.svg&&(i.uncache?(Y=e.getBBox(),c=i.xOrigin-Y.x+"px "+(i.yOrigin-Y.y)+"px",k=""):k=!t&&e.getAttribute("data-svg-origin"),Td(e,k||c,!!k||i.originIsAbsolute,i.smooth!==!1,w)),E=i.xOrigin||0,T=i.yOrigin||0,w!==sc&&(L=w[0],R=w[1],O=w[2],V=w[3],u=X=w[4],d=z=w[5],w.length===6?(h=Math.sqrt(L*L+R*R),p=Math.sqrt(V*V+O*O),m=L||R?Xo(R,L)*lo:0,v=O||V?Xo(O,V)*lo+m:0,v&&(p*=Math.abs(Math.cos(v*Ta))),i.svg&&(u-=E-(E*L+T*O),d-=T-(E*R+T*V))):(We=w[6],Ie=w[7],F=w[8],de=w[9],fe=w[10],He=w[11],u=w[12],d=w[13],f=w[14],S=Xo(We,fe),_=S*lo,S&&(M=Math.cos(-S),P=Math.sin(-S),k=X*M+F*P,Y=z*M+de*P,oe=We*M+fe*P,F=X*-P+F*M,de=z*-P+de*M,fe=We*-P+fe*M,He=Ie*-P+He*M,X=k,z=Y,We=oe),S=Xo(-O,fe),g=S*lo,S&&(M=Math.cos(-S),P=Math.sin(-S),k=L*M-F*P,Y=R*M-de*P,oe=O*M-fe*P,He=V*P+He*M,L=k,R=Y,O=oe),S=Xo(R,L),m=S*lo,S&&(M=Math.cos(S),P=Math.sin(S),k=L*M+R*P,Y=X*M+z*P,R=R*M-L*P,z=z*M-X*P,L=k,X=Y),_&&Math.abs(_)+Math.abs(m)>359.9&&(_=m=0,g=180-g),h=en(Math.sqrt(L*L+R*R+O*O)),p=en(Math.sqrt(z*z+We*We)),S=Xo(X,z),v=Math.abs(S)>2e-4?S*lo:0,x=He?1/(He<0?-He:He):0),i.svg&&(k=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Sy(wi(e,Xt)),k&&e.setAttribute("transform",k))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(h*=-1,v+=m<=0?180:-180,m+=m<=0?180:-180):(p*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=en(h),i.scaleY=en(p),i.rotation=en(m)+a,i.rotationX=en(_)+a,i.rotationY=en(g)+a,i.skewX=v+a,i.skewY=y+a,i.transformPerspective=x+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[fi]=ef(c)),i.xOffset=i.yOffset=0,i.force3D=Ai.force3D,i.renderTransform=i.svg?g1:_y?My:m1,i.uncache=0,i},ef=function(e){return(e=e.split(" "))[0]+" "+e[1]},th=function(e,t,i){var r=Vn(t);return en(parseFloat(t)+parseFloat(Gs(e,"x",i+"px",r)))+r},m1=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,My(e,t)},Qs="0deg",nl="0px",eo=") ",My=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,d=i.rotationX,f=i.skewX,h=i.skewY,p=i.scaleX,m=i.scaleY,_=i.transformPerspective,g=i.force3D,v=i.target,y=i.zOrigin,x="",E=g==="auto"&&e&&e!==1||g===!0;if(y&&(d!==Qs||u!==Qs)){var T=parseFloat(u)*Ta,w=Math.sin(T),S=Math.cos(T),M;T=parseFloat(d)*Ta,M=Math.cos(T),o=th(v,o,w*M*-y),a=th(v,a,-Math.sin(T)*-y),l=th(v,l,S*M*-y+y)}_!==nl&&(x+="perspective("+_+eo),(r||s)&&(x+="translate("+r+"%, "+s+"%) "),(E||o!==nl||a!==nl||l!==nl)&&(x+=l!==nl||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+eo),c!==Qs&&(x+="rotate("+c+eo),u!==Qs&&(x+="rotateY("+u+eo),d!==Qs&&(x+="rotateX("+d+eo),(f!==Qs||h!==Qs)&&(x+="skew("+f+", "+h+eo),(p!==1||m!==1)&&(x+="scale("+p+", "+m+eo),v.style[Xt]=x||"translate(0, 0)"},g1=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,d=i.scaleX,f=i.scaleY,h=i.target,p=i.xOrigin,m=i.yOrigin,_=i.xOffset,g=i.yOffset,v=i.forceCSS,y=parseFloat(o),x=parseFloat(a),E,T,w,S,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ta,c*=Ta,E=Math.cos(l)*d,T=Math.sin(l)*d,w=Math.sin(l-c)*-f,S=Math.cos(l-c)*f,c&&(u*=Ta,M=Math.tan(c-u),M=Math.sqrt(1+M*M),w*=M,S*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),E*=M,T*=M)),E=en(E),T=en(T),w=en(w),S=en(S)):(E=d,S=f,T=w=0),(y&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(y=Gs(h,"x",o,"px"),x=Gs(h,"y",a,"px")),(p||m||_||g)&&(y=en(y+p-(p*E+m*w)+_),x=en(x+m-(p*T+m*S)+g)),(r||s)&&(M=h.getBBox(),y=en(y+r/100*M.width),x=en(x+s/100*M.height)),M="matrix("+E+","+T+","+w+","+S+","+y+","+x+")",h.setAttribute("transform",M),v&&(h.style[Xt]=M)},_1=function(e,t,i,r,s){var o=360,a=Tn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?lo:1),c=l-r,u=r+c+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*u_)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*u_)%o-~~(c/o)*o)),e._pt=f=new ui(e._pt,t,i,r,c,Qw),f.e=u,f.u="deg",e._props.push(i),f},__=function(e,t){for(var i in t)e[i]=t[i];return e},v1=function(e,t,i){var r=__({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,d,f,h,p;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[Xt]=t,a=oc(i,1),Vs(i,Xt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Xt],o[Xt]=t,a=oc(i,1),o[Xt]=c);for(l in ls)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(h=Vn(c),p=Vn(u),d=h!==p?Gs(i,l,c,p):parseFloat(c),f=parseFloat(u),e._pt=new ui(e._pt,a,l,d,f-d,Md),e._pt.u=p||0,e._props.push(l));__(a,r)};ci("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Qu[e>1?"border"+n:n]=function(a,l,c,u,d){var f,h;if(arguments.length<4)return f=o.map(function(p){return $r(a,p,c)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(u+"").split(" "),h={},o.forEach(function(p,m){return h[p]=f[m]=f[m]||f[(m-1)/2|0]}),a.init(l,h,d)}});var by={name:"css",register:Ed,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,c,u,d,f,h,p,m,_,g,v,y,x,E,T,w,S,M;pm||Ed(),this.styles=this.styles||gy(e),S=this.styles.props,this.tween=i;for(m in t)if(m!=="autoRound"&&(u=t[m],!(yi[m]&&sy(m,t,i,r,e,s)))){if(h=typeof u,p=Qu[m],h==="function"&&(u=u.call(i,r,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=nc(u)),p)p(this,e,m,u,i)&&(w=1);else if(m.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(m)+"").trim(),u+="",Bs.lastIndex=0,Bs.test(c)||(_=Vn(c),g=Vn(u),g?_!==g&&(c=Gs(e,m,c,g)+g):_&&(u+=_)),this.add(a,"setProperty",c,u,r,s,0,0,m),o.push(m),S.push(m,0,a[m]);else if(h!=="undefined"){if(l&&m in l?(c=typeof l[m]=="function"?l[m].call(i,r,e,s):l[m],Tn(c)&&~c.indexOf("random(")&&(c=nc(c)),Vn(c+"")||c==="auto"||(c+=Ai.units[m]||Vn($r(e,m))||""),(c+"").charAt(1)==="="&&(c=$r(e,m))):c=$r(e,m),f=parseFloat(c),v=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),d=parseFloat(u),m in Ar&&(m==="autoAlpha"&&(f===1&&$r(e,"visibility")==="hidden"&&d&&(f=0),S.push("visibility",0,a.visibility),Ls(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),m!=="scale"&&m!=="transform"&&(m=Ar[m],~m.indexOf(",")&&(m=m.split(",")[0]))),y=m in ls,y){if(this.styles.save(m),M=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=wi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var P=e.style.perspective;e.style.perspective=u,u=wi(e,"perspective"),P?e.style.perspective=P:Vs(e,"perspective")}d=parseFloat(u)}if(x||(E=e._gsap,E.renderTransform&&!t.parseTransform||oc(e,t.parseTransform),T=t.smoothOrigin!==!1&&E.smooth,x=this._pt=new ui(this._pt,a,Xt,0,1,E.renderTransform,E,0,-1),x.dep=1),m==="scale")this._pt=new ui(this._pt,E,"scaleY",E.scaleY,(v?ba(E.scaleY,v+d):d)-E.scaleY||0,Md),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){S.push(fi,0,a[fi]),u=d1(u),E.svg?Td(e,u,0,T,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==E.zOrigin&&Ls(this,E,"zOrigin",E.zOrigin,g),Ls(this,a,m,ef(c),ef(u)));continue}else if(m==="svgOrigin"){Td(e,u,1,T,0,this);continue}else if(m in yy){_1(this,E,m,f,v?ba(f,v+u):u);continue}else if(m==="smoothOrigin"){Ls(this,E,"smooth",E.smooth,u);continue}else if(m==="force3D"){E[m]=u;continue}else if(m==="transform"){v1(this,u,e);continue}}else m in a||(m=za(m)||m);if(y||(d||d===0)&&(f||f===0)&&!Jw.test(u)&&m in a)_=(c+"").substr((f+"").length),d||(d=0),g=Vn(u)||(m in Ai.units?Ai.units[m]:_),_!==g&&(f=Gs(e,m,c,g)),this._pt=new ui(this._pt,y?E:a,m,f,(v?ba(f,v+d):d)-f,!y&&(g==="px"||m==="zIndex")&&t.autoRound!==!1?n1:Md),this._pt.u=g||0,y&&M!==u?(this._pt.b=c,this._pt.e=M,this._pt.r=t1):_!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=e1);else if(m in a)h1.call(this,e,m,c,v?v+u:u);else if(m in e)this.add(e,m,c||e[m],v?v+u:u,r,s);else if(m!=="parseTransform"){rm(m,u);continue}y||(m in a?S.push(m,0,a[m]):typeof e[m]=="function"?S.push(m,2,e[m]()):S.push(m,1,c||e[m])),o.push(m)}}w&&fy(this)},render:function(e,t){if(t.tween._time||!mm())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:$r,aliases:Ar,getSetter:function(e,t,i){var r=Ar[t];return r&&r.indexOf(",")<0&&(t=r),t in ls&&t!==fi&&(e._gsap.x||$r(e,"x"))?i&&c_===i?t==="scale"?o1:s1:(c_=i||{})&&(t==="scale"?a1:l1):e.style&&!tm(e.style[t])?i1:~t.indexOf("-")?r1:hm(e,t)},core:{_removeProperty:Vs,_getMatrix:_m}};di.utils.checkPrefix=za;di.core.getStyleSaver=gy;(function(n,e,t,i){var r=ci(n+","+e+","+t,function(s){ls[s]=1});ci(e,function(s){Ai.units[s]="deg",yy[s]=1}),Ar[r[13]]=n+","+e,ci(i,function(s){var o=s.split(":");Ar[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ci("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ai.units[n]="px"});di.registerPlugin(by);var an=di.registerPlugin(by)||di;an.core.Tween;function x1(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function y1(n,e,t){return e&&x1(n.prototype,e),n}var Rn,Eu,bi,Is,Ns,wa,Ey,co,Ul,Ty,Qr,Ji,wy,Ay=function(){return Rn||typeof window<"u"&&(Rn=window.gsap)&&Rn.registerPlugin&&Rn},Cy=1,ma=[],ft=[],Pr=[],Fl=Date.now,wd=function(e,t){return t},S1=function(){var e=Ul.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,ft),r.push.apply(r,Pr),ft=i,Pr=r,wd=function(o,a){return t[o](a)}},ks=function(e,t){return~Pr.indexOf(e)&&Pr[Pr.indexOf(e)+1][t]},Bl=function(e){return!!~Ty.indexOf(e)},jn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Yn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Nc="scrollLeft",Oc="scrollTop",Ad=function(){return Qr&&Qr.isPressed||ft.cache++},tf=function(e,t){var i=function r(s){if(s||s===0){Cy&&(bi.history.scrollRestoration="manual");var o=Qr&&Qr.isPressed;s=r.v=Math.round(s)||(Qr&&Qr.iOS?1:0),e(s),r.cacheID=ft.cache,o&&wd("ss",s)}else(t||ft.cache!==r.cacheID||wd("ref"))&&(r.cacheID=ft.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},ii={s:Nc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:tf(function(n){return arguments.length?bi.scrollTo(n,pn.sc()):bi.pageXOffset||Is[Nc]||Ns[Nc]||wa[Nc]||0})},pn={s:Oc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ii,sc:tf(function(n){return arguments.length?bi.scrollTo(ii.sc(),n):bi.pageYOffset||Is[Oc]||Ns[Oc]||wa[Oc]||0})},ai=function(e,t){return(t&&t._ctx&&t._ctx.selector||Rn.utils.toArray)(e)[0]||(typeof e=="string"&&Rn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},M1=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Ws=function(e,t){var i=t.s,r=t.sc;Bl(e)&&(e=Is.scrollingElement||Ns);var s=ft.indexOf(e),o=r===pn.sc?1:2;!~s&&(s=ft.push(e)-1),ft[s+o]||jn(e,"scroll",Ad);var a=ft[s+o],l=a||(ft[s+o]=tf(ks(e,i),!0)||(Bl(e)?r:tf(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,a||(l.smooth=Rn.getProperty(e,"scrollBehavior")==="smooth"),l},Cd=function(e,t,i){var r=e,s=e,o=Fl(),a=o,l=t||50,c=Math.max(500,l*3),u=function(p,m){var _=Fl();m||_-o>l?(s=r,r=p,a=o,o=_):i?r+=p:r=s+(p-s)/(_-a)*(o-a)},d=function(){s=r=i?0:r,a=o=0},f=function(p){var m=a,_=s,g=Fl();return(p||p===0)&&p!==r&&u(p),o===a||g-a>c?0:(r+(i?_:-_))/((i?g:o)-m)*1e3};return{update:u,reset:d,getVelocity:f}},il=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},v_=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},Ry=function(){Ul=Rn.core.globals().ScrollTrigger,Ul&&Ul.core&&S1()},Py=function(e){return Rn=e||Ay(),!Eu&&Rn&&typeof document<"u"&&document.body&&(bi=window,Is=document,Ns=Is.documentElement,wa=Is.body,Ty=[bi,Is,Ns,wa],Rn.utils.clamp,wy=Rn.core.context||function(){},co="onpointerenter"in wa?"pointer":"mouse",Ey=nn.isTouch=bi.matchMedia&&bi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in bi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ji=nn.eventTypes=("ontouchstart"in Ns?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ns?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Cy=0},500),Ry(),Eu=1),Eu};ii.op=pn;ft.cache=0;var nn=(function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){Eu||Py(Rn)||console.warn("Please gsap.registerPlugin(Observer)"),Ul||Ry();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,d=i.onStop,f=i.onStopDelay,h=i.ignore,p=i.wheelSpeed,m=i.event,_=i.onDragStart,g=i.onDragEnd,v=i.onDrag,y=i.onPress,x=i.onRelease,E=i.onRight,T=i.onLeft,w=i.onUp,S=i.onDown,M=i.onChangeX,P=i.onChangeY,L=i.onChange,R=i.onToggleX,O=i.onToggleY,V=i.onHover,X=i.onHoverEnd,z=i.onMove,k=i.ignoreCheck,Y=i.isNormalizer,oe=i.onGestureStart,F=i.onGestureEnd,de=i.onWheel,fe=i.onEnable,Ie=i.onDisable,He=i.onClick,We=i.scrollSpeed,re=i.capture,W=i.allowClicks,K=i.lockAxis,le=i.onLockAxis;this.target=a=ai(a)||Ns,this.vars=i,h&&(h=Rn.utils.toArray(h)),r=r||1e-9,s=s||0,p=p||1,We=We||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(bi.getComputedStyle(wa).lineHeight)||22);var he,ye,N,I,G,Q,Z,U=this,D=0,pe=0,ce=i.passive||!u&&i.passive!==!1,se=Ws(a,ii),ue=Ws(a,pn),C=se(),b=ue(),B=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ji[0]==="pointerdown",j=Bl(a),ne=a.ownerDocument||Is,$=[0,0,0],Me=[0,0,0],me=0,Ue=function(){return me=Fl()},Te=function(Ve,st){return(U.event=Ve)&&h&&M1(Ve.target,h)||st&&B&&Ve.pointerType!=="touch"||k&&k(Ve,st)},ge=function(){U._vx.reset(),U._vy.reset(),ye.pause(),d&&d(U)},ve=function(){var Ve=U.deltaX=v_($),st=U.deltaY=v_(Me),Le=Math.abs(Ve)>=r,Ke=Math.abs(st)>=r;L&&(Le||Ke)&&L(U,Ve,st,$,Me),Le&&(E&&U.deltaX>0&&E(U),T&&U.deltaX<0&&T(U),M&&M(U),R&&U.deltaX<0!=D<0&&R(U),D=U.deltaX,$[0]=$[1]=$[2]=0),Ke&&(S&&U.deltaY>0&&S(U),w&&U.deltaY<0&&w(U),P&&P(U),O&&U.deltaY<0!=pe<0&&O(U),pe=U.deltaY,Me[0]=Me[1]=Me[2]=0),(I||N)&&(z&&z(U),N&&(_&&N===1&&_(U),v&&v(U),N=0),I=!1),Q&&!(Q=!1)&&le&&le(U),G&&(de(U),G=!1),he=0},Ee=function(Ve,st,Le){$[Le]+=Ve,Me[Le]+=st,U._vx.update(Ve),U._vy.update(st),c?he||(he=requestAnimationFrame(ve)):ve()},Re=function(Ve,st){K&&!Z&&(U.axis=Z=Math.abs(Ve)>Math.abs(st)?"x":"y",Q=!0),Z!=="y"&&($[2]+=Ve,U._vx.update(Ve,!0)),Z!=="x"&&(Me[2]+=st,U._vy.update(st,!0)),c?he||(he=requestAnimationFrame(ve)):ve()},we=function(Ve){if(!Te(Ve,1)){Ve=il(Ve,u);var st=Ve.clientX,Le=Ve.clientY,Ke=st-U.x,Ye=Le-U.y,Ze=U.isDragging;U.x=st,U.y=Le,(Ze||(Ke||Ye)&&(Math.abs(U.startX-st)>=s||Math.abs(U.startY-Le)>=s))&&(N||(N=Ze?2:1),Ze||(U.isDragging=!0),Re(Ke,Ye))}},je=U.onPress=function(Oe){Te(Oe,1)||Oe&&Oe.button||(U.axis=Z=null,ye.pause(),U.isPressed=!0,Oe=il(Oe),D=pe=0,U.startX=U.x=Oe.clientX,U.startY=U.y=Oe.clientY,U._vx.reset(),U._vy.reset(),jn(Y?a:ne,Ji[1],we,ce,!0),U.deltaX=U.deltaY=0,y&&y(U))},H=U.onRelease=function(Oe){if(!Te(Oe,1)){Yn(Y?a:ne,Ji[1],we,!0);var Ve=!isNaN(U.y-U.startY),st=U.isDragging,Le=st&&(Math.abs(U.x-U.startX)>3||Math.abs(U.y-U.startY)>3),Ke=il(Oe);!Le&&Ve&&(U._vx.reset(),U._vy.reset(),u&&W&&Rn.delayedCall(.08,function(){if(Fl()-me>300&&!Oe.defaultPrevented){if(Oe.target.click)Oe.target.click();else if(ne.createEvent){var Ye=ne.createEvent("MouseEvents");Ye.initMouseEvent("click",!0,!0,bi,1,Ke.screenX,Ke.screenY,Ke.clientX,Ke.clientY,!1,!1,!1,!1,0,null),Oe.target.dispatchEvent(Ye)}}})),U.isDragging=U.isGesturing=U.isPressed=!1,d&&st&&!Y&&ye.restart(!0),N&&ve(),g&&st&&g(U),x&&x(U,Le)}},be=function(Ve){return Ve.touches&&Ve.touches.length>1&&(U.isGesturing=!0)&&oe(Ve,U.isDragging)},xe=function(){return(U.isGesturing=!1)||F(U)},Pe=function(Ve){if(!Te(Ve)){var st=se(),Le=ue();Ee((st-C)*We,(Le-b)*We,1),C=st,b=Le,d&&ye.restart(!0)}},_e=function(Ve){if(!Te(Ve)){Ve=il(Ve,u),de&&(G=!0);var st=(Ve.deltaMode===1?l:Ve.deltaMode===2?bi.innerHeight:1)*p;Ee(Ve.deltaX*st,Ve.deltaY*st,0),d&&!Y&&ye.restart(!0)}},ae=function(Ve){if(!Te(Ve)){var st=Ve.clientX,Le=Ve.clientY,Ke=st-U.x,Ye=Le-U.y;U.x=st,U.y=Le,I=!0,d&&ye.restart(!0),(Ke||Ye)&&Re(Ke,Ye)}},Fe=function(Ve){U.event=Ve,V(U)},qe=function(Ve){U.event=Ve,X(U)},_t=function(Ve){return Te(Ve)||il(Ve,u)&&He(U)};ye=U._dc=Rn.delayedCall(f||.25,ge).pause(),U.deltaX=U.deltaY=0,U._vx=Cd(0,50,!0),U._vy=Cd(0,50,!0),U.scrollX=se,U.scrollY=ue,U.isDragging=U.isGesturing=U.isPressed=!1,wy(this),U.enable=function(Oe){return U.isEnabled||(jn(j?ne:a,"scroll",Ad),o.indexOf("scroll")>=0&&jn(j?ne:a,"scroll",Pe,ce,re),o.indexOf("wheel")>=0&&jn(a,"wheel",_e,ce,re),(o.indexOf("touch")>=0&&Ey||o.indexOf("pointer")>=0)&&(jn(a,Ji[0],je,ce,re),jn(ne,Ji[2],H),jn(ne,Ji[3],H),W&&jn(a,"click",Ue,!0,!0),He&&jn(a,"click",_t),oe&&jn(ne,"gesturestart",be),F&&jn(ne,"gestureend",xe),V&&jn(a,co+"enter",Fe),X&&jn(a,co+"leave",qe),z&&jn(a,co+"move",ae)),U.isEnabled=!0,U.isDragging=U.isGesturing=U.isPressed=I=N=!1,U._vx.reset(),U._vy.reset(),C=se(),b=ue(),Oe&&Oe.type&&je(Oe),fe&&fe(U)),U},U.disable=function(){U.isEnabled&&(ma.filter(function(Oe){return Oe!==U&&Bl(Oe.target)}).length||Yn(j?ne:a,"scroll",Ad),U.isPressed&&(U._vx.reset(),U._vy.reset(),Yn(Y?a:ne,Ji[1],we,!0)),Yn(j?ne:a,"scroll",Pe,re),Yn(a,"wheel",_e,re),Yn(a,Ji[0],je,re),Yn(ne,Ji[2],H),Yn(ne,Ji[3],H),Yn(a,"click",Ue,!0),Yn(a,"click",_t),Yn(ne,"gesturestart",be),Yn(ne,"gestureend",xe),Yn(a,co+"enter",Fe),Yn(a,co+"leave",qe),Yn(a,co+"move",ae),U.isEnabled=U.isPressed=U.isDragging=!1,Ie&&Ie(U))},U.kill=U.revert=function(){U.disable();var Oe=ma.indexOf(U);Oe>=0&&ma.splice(Oe,1),Qr===U&&(Qr=0)},ma.push(U),Y&&Bl(a)&&(Qr=U),U.enable(m)},y1(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n})();nn.version="3.14.2";nn.create=function(n){return new nn(n)};nn.register=Py;nn.getAll=function(){return ma.slice()};nn.getById=function(n){return ma.filter(function(e){return e.vars.id===n})[0]};Ay()&&Rn.registerPlugin(nn);var ze,fa,ut,Bt,Si,Tt,vm,nf,ac,kl,_l,Uc,Fn,wf,Rd,Qn,x_,y_,ha,Dy,nh,Ly,Jn,Pd,Iy,Ny,Ts,Dd,xm,Aa,ym,zl,Ld,ih,Fc=1,kn=Date.now,rh=kn(),Wi=0,vl=0,S_=function(e,t,i){var r=vi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},M_=function(e,t){return t&&(!vi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},b1=function n(){return vl&&requestAnimationFrame(n)},b_=function(){return wf=1},E_=function(){return wf=0},Mr=function(e){return e},xl=function(e){return Math.round(e*1e5)/1e5||0},Oy=function(){return typeof window<"u"},Uy=function(){return ze||Oy()&&(ze=window.gsap)&&ze.registerPlugin&&ze},Lo=function(e){return!!~vm.indexOf(e)},Fy=function(e){return(e==="Height"?ym:ut["inner"+e])||Si["client"+e]||Tt["client"+e]},By=function(e){return ks(e,"getBoundingClientRect")||(Lo(e)?function(){return Ru.width=ut.innerWidth,Ru.height=ym,Ru}:function(){return Zr(e)})},E1=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=ks(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?Fy(s):e["client"+s])||0}},T1=function(e,t){return!t||~Pr.indexOf(e)?By(e):function(){return Ru}},Cr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=ks(e,i))?o()-By(e)()[s]:Lo(e)?(Si[i]||Tt[i])-Fy(r):e[i]-e["offset"+r])},Bc=function(e,t){for(var i=0;i<ha.length;i+=3)(!t||~t.indexOf(ha[i+1]))&&e(ha[i],ha[i+1],ha[i+2])},vi=function(e){return typeof e=="string"},Gn=function(e){return typeof e=="function"},yl=function(e){return typeof e=="number"},uo=function(e){return typeof e=="object"},rl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},sh=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},qo=Math.abs,ky="left",zy="top",Sm="right",Mm="bottom",Ro="width",Po="height",Hl="Right",Vl="Left",Gl="Top",Wl="Bottom",sn="padding",Ui="margin",Ha="Width",bm="Height",hn="px",Fi=function(e){return ut.getComputedStyle(e)},w1=function(e){var t=Fi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},T_=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Zr=function(e,t){var i=t&&Fi(e)[Rd]!=="matrix(1, 0, 0, 1, 0, 0)"&&ze.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},rf=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},Hy=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},A1=function(e){return function(t){return ze.utils.snap(Hy(e),t)}},Em=function(e){var t=ze.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},C1=function(e){return function(t,i){return Em(Hy(e))(t,i.direction)}},kc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},bn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},Mn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},zc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},w_={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Hc={toggleActions:"play",anticipatePin:0},sf={top:0,left:0,center:.5,bottom:1,right:1},Tu=function(e,t){if(vi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in sf?sf[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Vc=function(e,t,i,r,s,o,a,l){var c=s.startColor,u=s.endColor,d=s.fontSize,f=s.indent,h=s.fontWeight,p=Bt.createElement("div"),m=Lo(i)||ks(i,"pinType")==="fixed",_=e.indexOf("scroller")!==-1,g=m?Tt:i,v=e.indexOf("start")!==-1,y=v?c:u,x="border-color:"+y+";font-size:"+d+";color:"+y+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((_||l)&&m?"fixed;":"absolute;"),(_||l||!m)&&(x+=(r===pn?Sm:Mm)+":"+(o+parseFloat(f))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=v,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=x,p.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+r.op.d2],wu(p,0,r,v),p},wu=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+Ha]=1,s["border"+a+Ha]=0,s[i.p]=t+"px",ze.set(e,s)},ct=[],Id={},lc,A_=function(){return kn()-Wi>34&&(lc||(lc=requestAnimationFrame(ts)))},Yo=function(){(!Jn||!Jn.isPressed||Jn.startX>Tt.clientWidth)&&(ft.cache++,Jn?lc||(lc=requestAnimationFrame(ts)):ts(),Wi||No("scrollStart"),Wi=kn())},oh=function(){Ny=ut.innerWidth,Iy=ut.innerHeight},Sl=function(e){ft.cache++,(e===!0||!Fn&&!Ly&&!Bt.fullscreenElement&&!Bt.webkitFullscreenElement&&(!Pd||Ny!==ut.innerWidth||Math.abs(ut.innerHeight-Iy)>ut.innerHeight*.25))&&nf.restart(!0)},Io={},R1=[],Vy=function n(){return Mn(it,"scrollEnd",n)||yo(!0)},No=function(e){return Io[e]&&Io[e].map(function(t){return t()})||R1},_i=[],Gy=function(e){for(var t=0;t<_i.length;t+=5)(!e||_i[t+4]&&_i[t+4].query===e)&&(_i[t].style.cssText=_i[t+1],_i[t].getBBox&&_i[t].setAttribute("transform",_i[t+2]||""),_i[t+3].uncache=1)},Wy=function(){return ft.forEach(function(e){return Gn(e)&&++e.cacheID&&(e.rec=e())})},Tm=function(e,t){var i;for(Qn=0;Qn<ct.length;Qn++)i=ct[Qn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));zl=!0,t&&Gy(t),t||No("revert")},Xy=function(e,t){ft.cache++,(t||!ei)&&ft.forEach(function(i){return Gn(i)&&i.cacheID++&&(i.rec=0)}),vi(e)&&(ut.history.scrollRestoration=xm=e)},ei,Do=0,C_,P1=function(){if(C_!==Do){var e=C_=Do;requestAnimationFrame(function(){return e===Do&&yo(!0)})}},qy=function(){Tt.appendChild(Aa),ym=!Jn&&Aa.offsetHeight||ut.innerHeight,Tt.removeChild(Aa)},R_=function(e){return ac(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},yo=function(e,t){if(Si=Bt.documentElement,Tt=Bt.body,vm=[ut,Bt,Si,Tt],Wi&&!e&&!zl){bn(it,"scrollEnd",Vy);return}qy(),ei=it.isRefreshing=!0,zl||Wy();var i=No("refreshInit");Dy&&it.sort(),t||Tm(),ft.forEach(function(r){Gn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),ct.slice(0).forEach(function(r){return r.refresh()}),zl=!1,ct.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),Ld=1,R_(!0),ct.forEach(function(r){var s=Cr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),R_(!1),Ld=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),ft.forEach(function(r){Gn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Xy(xm,1),nf.pause(),Do++,ei=2,ts(2),ct.forEach(function(r){return Gn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),ei=it.isRefreshing=!1,No("refresh")},Nd=0,Au=1,Xl,ts=function(e){if(e===2||!ei&&!zl){it.isUpdating=!0,Xl&&Xl.update(0);var t=ct.length,i=kn(),r=i-rh>=50,s=t&&ct[0].scroll();if(Au=Nd>s?-1:1,ei||(Nd=s),r&&(Wi&&!wf&&i-Wi>200&&(Wi=0,No("scrollEnd")),_l=rh,rh=i),Au<0){for(Qn=t;Qn-- >0;)ct[Qn]&&ct[Qn].update(0,r);Au=1}else for(Qn=0;Qn<t;Qn++)ct[Qn]&&ct[Qn].update(0,r);it.isUpdating=!1}lc=0},Od=[ky,zy,Mm,Sm,Ui+Wl,Ui+Hl,Ui+Gl,Ui+Vl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Cu=Od.concat([Ro,Po,"boxSizing","max"+Ha,"max"+bm,"position",Ui,sn,sn+Gl,sn+Hl,sn+Wl,sn+Vl]),D1=function(e,t,i){Ca(i);var r=e._gsap;if(r.spacerIsNative)Ca(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},ah=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=Od.length,o=t.style,a=e.style,l;s--;)l=Od[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[Mm]=a[Sm]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ro]=rf(e,ii)+hn,o[Po]=rf(e,pn)+hn,o[sn]=a[Ui]=a[zy]=a[ky]="0",Ca(r),a[Ro]=a["max"+Ha]=i[Ro],a[Po]=a["max"+bm]=i[Po],a[sn]=i[sn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},L1=/([A-Z])/g,Ca=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||ze.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(L1,"-$1").toLowerCase())}},Gc=function(e){for(var t=Cu.length,i=e.style,r=[],s=0;s<t;s++)r.push(Cu[s],i[Cu[s]]);return r.t=e,r},I1=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Ru={left:0,top:0},P_=function(e,t,i,r,s,o,a,l,c,u,d,f,h,p){Gn(e)&&(e=e(l)),vi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Tu("0"+e.substr(3),i):0));var m=h?h.time():0,_,g,v;if(h&&h.seek(0),isNaN(e)||(e=+e),yl(e))h&&(e=ze.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,e)),a&&wu(a,i,r,!0);else{Gn(t)&&(t=t(l));var y=(e||"0").split(" "),x,E,T,w;v=ai(t,l)||Tt,x=Zr(v)||{},(!x||!x.left&&!x.top)&&Fi(v).display==="none"&&(w=v.style.display,v.style.display="block",x=Zr(v),w?v.style.display=w:v.style.removeProperty("display")),E=Tu(y[0],x[r.d]),T=Tu(y[1]||"0",i),e=x[r.p]-c[r.p]-u+E+s-T,a&&wu(a,T,r,i-T<20||a._isStart&&T>20),i-=i-T}if(p&&(l[p]=e||-.001,e<0&&(e=0)),o){var S=e+i,M=o._isStart;_="scroll"+r.d2,wu(o,S,r,M&&S>20||!M&&(d?Math.max(Tt[_],Si[_]):o.parentNode[_])<=S+1),d&&(c=Zr(a),d&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+hn))}return h&&v&&(_=Zr(v),h.seek(f),g=Zr(v),h._caScrollDist=_[r.p]-g[r.p],e=e/h._caScrollDist*f),h&&h.seek(m),h?e:Math.round(e)},N1=/(webkit|moz|length|cssText|inset)/i,D_=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===Tt){e._stOrig=s.cssText,a=Fi(e);for(o in a)!+o&&!N1.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;ze.core.getCache(e).uncache=1,t.appendChild(e)}},Yy=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},Wc=function(e,t,i){var r={};r[t.p]="+="+i,ze.set(e,r)},L_=function(e,t){var i=Ws(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,d){var f=o.tween,h=l.onComplete,p={};c=c||i();var m=Yy(i,c,function(){f.kill(),o.tween=0});return d=u&&d||0,u=u||a-c,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=p,p[r]=function(){return m(c+u*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){ft.cache++,o.tween&&ts()},l.onComplete=function(){o.tween=0,h&&h.call(f)},f=o.tween=ze.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},bn(e,"wheel",i.wheelHandler),it.isTouch&&bn(e,"touchmove",i.wheelHandler),s},it=(function(){function n(t,i){fa||n.register(ze)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Dd(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!vl){this.update=this.refresh=this.kill=Mr;return}i=T_(vi(i)||yl(i)||i.nodeType?{trigger:i}:i,Hc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,f=s.trigger,h=s.pin,p=s.pinSpacing,m=s.invalidateOnRefresh,_=s.anticipatePin,g=s.onScrubComplete,v=s.onSnapComplete,y=s.once,x=s.snap,E=s.pinReparent,T=s.pinSpacer,w=s.containerAnimation,S=s.fastScrollEnd,M=s.preventOverlaps,P=i.horizontal||i.containerAnimation&&i.horizontal!==!1?ii:pn,L=!d&&d!==0,R=ai(i.scroller||ut),O=ze.core.getCache(R),V=Lo(R),X=("pinType"in i?i.pinType:ks(R,"pinType")||V&&"fixed")==="fixed",z=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],k=L&&i.toggleActions.split(" "),Y="markers"in i?i.markers:Hc.markers,oe=V?0:parseFloat(Fi(R)["border"+P.p2+Ha])||0,F=this,de=i.onRefreshInit&&function(){return i.onRefreshInit(F)},fe=E1(R,V,P),Ie=T1(R,V),He=0,We=0,re=0,W=Ws(R,P),K,le,he,ye,N,I,G,Q,Z,U,D,pe,ce,se,ue,C,b,B,j,ne,$,Me,me,Ue,Te,ge,ve,Ee,Re,we,je,H,be,xe,Pe,_e,ae,Fe,qe;if(F._startClamp=F._endClamp=!1,F._dir=P,_*=45,F.scroller=R,F.scroll=w?w.time.bind(w):W,ye=W(),F.vars=i,r=r||i.animation,"refreshPriority"in i&&(Dy=1,i.refreshPriority===-9999&&(Xl=F)),O.tweenScroll=O.tweenScroll||{top:L_(R,pn),left:L_(R,ii)},F.tweenTo=K=O.tweenScroll[P.p],F.scrubDuration=function(Le){be=yl(Le)&&Le,be?H?H.duration(Le):H=ze.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:be,paused:!0,onComplete:function(){return g&&g(F)}}):(H&&H.progress(1).kill(),H=0)},r&&(r.vars.lazy=!1,r._initted&&!F.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),F.animation=r.pause(),r.scrollTrigger=F,F.scrubDuration(d),we=0,l||(l=r.vars.id)),x&&((!uo(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in Tt.style&&ze.set(V?[Tt,Si]:R,{scrollBehavior:"auto"}),ft.forEach(function(Le){return Gn(Le)&&Le.target===(V?Bt.scrollingElement||Si:R)&&(Le.smooth=!1)}),he=Gn(x.snapTo)?x.snapTo:x.snapTo==="labels"?A1(r):x.snapTo==="labelsDirectional"?C1(r):x.directional!==!1?function(Le,Ke){return Em(x.snapTo)(Le,kn()-We<500?0:Ke.direction)}:ze.utils.snap(x.snapTo),xe=x.duration||{min:.1,max:2},xe=uo(xe)?kl(xe.min,xe.max):kl(xe,xe),Pe=ze.delayedCall(x.delay||be/2||.1,function(){var Le=W(),Ke=kn()-We<500,Ye=K.tween;if((Ke||Math.abs(F.getVelocity())<10)&&!Ye&&!wf&&He!==Le){var Ze=(Le-I)/se,Jt=r&&!L?r.totalProgress():Ze,et=Ke?0:(Jt-je)/(kn()-_l)*1e3||0,zt=ze.utils.clamp(-Ze,1-Ze,qo(et/2)*et/.185),ln=Ze+(x.inertia===!1?0:zt),Ht,Ct,bt=x,Ln=bt.onStart,Ft=bt.onInterrupt,In=bt.onComplete;if(Ht=he(ln,F),yl(Ht)||(Ht=ln),Ct=Math.max(0,Math.round(I+Ht*se)),Le<=G&&Le>=I&&Ct!==Le){if(Ye&&!Ye._initted&&Ye.data<=qo(Ct-Le))return;x.inertia===!1&&(zt=Ht-Ze),K(Ct,{duration:xe(qo(Math.max(qo(ln-Jt),qo(Ht-Jt))*.185/et/.05||0)),ease:x.ease||"power3",data:qo(Ct-Le),onInterrupt:function(){return Pe.restart(!0)&&Ft&&Ft(F)},onComplete:function(){F.update(),He=W(),r&&!L&&(H?H.resetTo("totalProgress",Ht,r._tTime/r._tDur):r.progress(Ht)),we=je=r&&!L?r.totalProgress():F.progress,v&&v(F),In&&In(F)}},Le,zt*se,Ct-Le-zt*se),Ln&&Ln(F,K.tween)}}else F.isActive&&He!==Le&&Pe.restart(!0)}).pause()),l&&(Id[l]=F),f=F.trigger=ai(f||h!==!0&&h),qe=f&&f._gsap&&f._gsap.stRevert,qe&&(qe=qe(F)),h=h===!0?f:ai(h),vi(a)&&(a={targets:f,className:a}),h&&(p===!1||p===Ui||(p=!p&&h.parentNode&&h.parentNode.style&&Fi(h.parentNode).display==="flex"?!1:sn),F.pin=h,le=ze.core.getCache(h),le.spacer?ue=le.pinState:(T&&(T=ai(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),le.spacerIsNative=!!T,T&&(le.spacerState=Gc(T))),le.spacer=B=T||Bt.createElement("div"),B.classList.add("pin-spacer"),l&&B.classList.add("pin-spacer-"+l),le.pinState=ue=Gc(h)),i.force3D!==!1&&ze.set(h,{force3D:!0}),F.spacer=B=le.spacer,Re=Fi(h),Ue=Re[p+P.os2],ne=ze.getProperty(h),$=ze.quickSetter(h,P.a,hn),ah(h,B,Re),b=Gc(h)),Y){pe=uo(Y)?T_(Y,w_):w_,U=Vc("scroller-start",l,R,P,pe,0),D=Vc("scroller-end",l,R,P,pe,0,U),j=U["offset"+P.op.d2];var _t=ai(ks(R,"content")||R);Q=this.markerStart=Vc("start",l,_t,P,pe,j,0,w),Z=this.markerEnd=Vc("end",l,_t,P,pe,j,0,w),w&&(Fe=ze.quickSetter([Q,Z],P.a,hn)),!X&&!(Pr.length&&ks(R,"fixedMarkers")===!0)&&(w1(V?Tt:R),ze.set([U,D],{force3D:!0}),ge=ze.quickSetter(U,P.a,hn),Ee=ze.quickSetter(D,P.a,hn))}if(w){var Oe=w.vars.onUpdate,Ve=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){F.update(0,0,1),Oe&&Oe.apply(w,Ve||[])})}if(F.previous=function(){return ct[ct.indexOf(F)-1]},F.next=function(){return ct[ct.indexOf(F)+1]},F.revert=function(Le,Ke){if(!Ke)return F.kill(!0);var Ye=Le!==!1||!F.enabled,Ze=Fn;Ye!==F.isReverted&&(Ye&&(_e=Math.max(W(),F.scroll.rec||0),re=F.progress,ae=r&&r.progress()),Q&&[Q,Z,U,D].forEach(function(Jt){return Jt.style.display=Ye?"none":"block"}),Ye&&(Fn=F,F.update(Ye)),h&&(!E||!F.isActive)&&(Ye?D1(h,B,ue):ah(h,B,Fi(h),Te)),Ye||F.update(Ye),Fn=Ze,F.isReverted=Ye)},F.refresh=function(Le,Ke,Ye,Ze){if(!((Fn||!F.enabled)&&!Ke)){if(h&&Le&&Wi){bn(n,"scrollEnd",Vy);return}!ei&&de&&de(F),Fn=F,K.tween&&!Ye&&(K.tween.kill(),K.tween=0),H&&H.pause(),m&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Be){return Be.vars.immediateRender&&Be.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),F.isReverted||F.revert(!0,!0),F._subPinOffset=!1;var Jt=fe(),et=Ie(),zt=w?w.duration():Cr(R,P),ln=se<=.01||!se,Ht=0,Ct=Ze||0,bt=uo(Ye)?Ye.end:i.end,Ln=i.endTrigger||f,Ft=uo(Ye)?Ye.start:i.start||(i.start===0||!f?0:h?"0 0":"0 100%"),In=F.pinnedContainer=i.pinnedContainer&&ai(i.pinnedContainer,F),Di=f&&Math.max(0,ct.indexOf(F))||0,cn=Di,un,xn,Ur,Ho,A,q,ie,te,ee,Ae,De,Ce,ke;for(Y&&uo(Ye)&&(Ce=ze.getProperty(U,P.p),ke=ze.getProperty(D,P.p));cn-- >0;)q=ct[cn],q.end||q.refresh(0,1)||(Fn=F),ie=q.pin,ie&&(ie===f||ie===h||ie===In)&&!q.isReverted&&(Ae||(Ae=[]),Ae.unshift(q),q.revert(!0,!0)),q!==ct[cn]&&(Di--,cn--);for(Gn(Ft)&&(Ft=Ft(F)),Ft=S_(Ft,"start",F),I=P_(Ft,f,Jt,P,W(),Q,U,F,et,oe,X,zt,w,F._startClamp&&"_startClamp")||(h?-.001:0),Gn(bt)&&(bt=bt(F)),vi(bt)&&!bt.indexOf("+=")&&(~bt.indexOf(" ")?bt=(vi(Ft)?Ft.split(" ")[0]:"")+bt:(Ht=Tu(bt.substr(2),Jt),bt=vi(Ft)?Ft:(w?ze.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,I):I)+Ht,Ln=f)),bt=S_(bt,"end",F),G=Math.max(I,P_(bt||(Ln?"100% 0":zt),Ln,Jt,P,W()+Ht,Z,D,F,et,oe,X,zt,w,F._endClamp&&"_endClamp"))||-.001,Ht=0,cn=Di;cn--;)q=ct[cn]||{},ie=q.pin,ie&&q.start-q._pinPush<=I&&!w&&q.end>0&&(un=q.end-(F._startClamp?Math.max(0,q.start):q.start),(ie===f&&q.start-q._pinPush<I||ie===In)&&isNaN(Ft)&&(Ht+=un*(1-q.progress)),ie===h&&(Ct+=un));if(I+=Ht,G+=Ht,F._startClamp&&(F._startClamp+=Ht),F._endClamp&&!ei&&(F._endClamp=G||-.001,G=Math.min(G,Cr(R,P))),se=G-I||(I-=.01)&&.001,ln&&(re=ze.utils.clamp(0,1,ze.utils.normalize(I,G,_e))),F._pinPush=Ct,Q&&Ht&&(un={},un[P.a]="+="+Ht,In&&(un[P.p]="-="+W()),ze.set([Q,Z],un)),h&&!(Ld&&F.end>=Cr(R,P)))un=Fi(h),Ho=P===pn,Ur=W(),Me=parseFloat(ne(P.a))+Ct,!zt&&G>1&&(De=(V?Bt.scrollingElement||Si:R).style,De={style:De,value:De["overflow"+P.a.toUpperCase()]},V&&Fi(Tt)["overflow"+P.a.toUpperCase()]!=="scroll"&&(De.style["overflow"+P.a.toUpperCase()]="scroll")),ah(h,B,un),b=Gc(h),xn=Zr(h,!0),te=X&&Ws(R,Ho?ii:pn)(),p?(Te=[p+P.os2,se+Ct+hn],Te.t=B,cn=p===sn?rf(h,P)+se+Ct:0,cn&&(Te.push(P.d,cn+hn),B.style.flexBasis!=="auto"&&(B.style.flexBasis=cn+hn)),Ca(Te),In&&ct.forEach(function(Be){Be.pin===In&&Be.vars.pinSpacing!==!1&&(Be._subPinOffset=!0)}),X&&W(_e)):(cn=rf(h,P),cn&&B.style.flexBasis!=="auto"&&(B.style.flexBasis=cn+hn)),X&&(A={top:xn.top+(Ho?Ur-I:te)+hn,left:xn.left+(Ho?te:Ur-I)+hn,boxSizing:"border-box",position:"fixed"},A[Ro]=A["max"+Ha]=Math.ceil(xn.width)+hn,A[Po]=A["max"+bm]=Math.ceil(xn.height)+hn,A[Ui]=A[Ui+Gl]=A[Ui+Hl]=A[Ui+Wl]=A[Ui+Vl]="0",A[sn]=un[sn],A[sn+Gl]=un[sn+Gl],A[sn+Hl]=un[sn+Hl],A[sn+Wl]=un[sn+Wl],A[sn+Vl]=un[sn+Vl],C=I1(ue,A,E),ei&&W(0)),r?(ee=r._initted,nh(1),r.render(r.duration(),!0,!0),me=ne(P.a)-Me+se+Ct,ve=Math.abs(se-me)>1,X&&ve&&C.splice(C.length-2,2),r.render(0,!0,!0),ee||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),nh(0)):me=se,De&&(De.value?De.style["overflow"+P.a.toUpperCase()]=De.value:De.style.removeProperty("overflow-"+P.a));else if(f&&W()&&!w)for(xn=f.parentNode;xn&&xn!==Tt;)xn._pinOffset&&(I-=xn._pinOffset,G-=xn._pinOffset),xn=xn.parentNode;Ae&&Ae.forEach(function(Be){return Be.revert(!1,!0)}),F.start=I,F.end=G,ye=N=ei?_e:W(),!w&&!ei&&(ye<_e&&W(_e),F.scroll.rec=0),F.revert(!1,!0),We=kn(),Pe&&(He=-1,Pe.restart(!0)),Fn=0,r&&L&&(r._initted||ae)&&r.progress()!==ae&&r.progress(ae||0,!0).render(r.time(),!0,!0),(ln||re!==F.progress||w||m||r&&!r._initted)&&(r&&!L&&(r._initted||re||r.vars.immediateRender!==!1)&&r.totalProgress(w&&I<-.001&&!re?ze.utils.normalize(I,G,0):re,!0),F.progress=ln||(ye-I)/se===re?0:re),h&&p&&(B._pinOffset=Math.round(F.progress*me)),H&&H.invalidate(),isNaN(Ce)||(Ce-=ze.getProperty(U,P.p),ke-=ze.getProperty(D,P.p),Wc(U,P,Ce),Wc(Q,P,Ce-(Ze||0)),Wc(D,P,ke),Wc(Z,P,ke-(Ze||0))),ln&&!ei&&F.update(),u&&!ei&&!ce&&(ce=!0,u(F),ce=!1)}},F.getVelocity=function(){return(W()-N)/(kn()-_l)*1e3||0},F.endAnimation=function(){rl(F.callbackAnimation),r&&(H?H.progress(1):r.paused()?L||rl(r,F.direction<0,1):rl(r,r.reversed()))},F.labelToScroll=function(Le){return r&&r.labels&&(I||F.refresh()||I)+r.labels[Le]/r.duration()*se||0},F.getTrailing=function(Le){var Ke=ct.indexOf(F),Ye=F.direction>0?ct.slice(0,Ke).reverse():ct.slice(Ke+1);return(vi(Le)?Ye.filter(function(Ze){return Ze.vars.preventOverlaps===Le}):Ye).filter(function(Ze){return F.direction>0?Ze.end<=I:Ze.start>=G})},F.update=function(Le,Ke,Ye){if(!(w&&!Ye&&!Le)){var Ze=ei===!0?_e:F.scroll(),Jt=Le?0:(Ze-I)/se,et=Jt<0?0:Jt>1?1:Jt||0,zt=F.progress,ln,Ht,Ct,bt,Ln,Ft,In,Di;if(Ke&&(N=ye,ye=w?W():Ze,x&&(je=we,we=r&&!L?r.totalProgress():et)),_&&h&&!Fn&&!Fc&&Wi&&(!et&&I<Ze+(Ze-N)/(kn()-_l)*_?et=1e-4:et===1&&G>Ze+(Ze-N)/(kn()-_l)*_&&(et=.9999)),et!==zt&&F.enabled){if(ln=F.isActive=!!et&&et<1,Ht=!!zt&&zt<1,Ft=ln!==Ht,Ln=Ft||!!et!=!!zt,F.direction=et>zt?1:-1,F.progress=et,Ln&&!Fn&&(Ct=et&&!zt?0:et===1?1:zt===1?2:3,L&&(bt=!Ft&&k[Ct+1]!=="none"&&k[Ct+1]||k[Ct],Di=r&&(bt==="complete"||bt==="reset"||bt in r))),M&&(Ft||Di)&&(Di||d||!r)&&(Gn(M)?M(F):F.getTrailing(M).forEach(function(Ur){return Ur.endAnimation()})),L||(H&&!Fn&&!Fc?(H._dp._time-H._start!==H._time&&H.render(H._dp._time-H._start),H.resetTo?H.resetTo("totalProgress",et,r._tTime/r._tDur):(H.vars.totalProgress=et,H.invalidate().restart())):r&&r.totalProgress(et,!!(Fn&&(We||Le)))),h){if(Le&&p&&(B.style[p+P.os2]=Ue),!X)$(xl(Me+me*et));else if(Ln){if(In=!Le&&et>zt&&G+1>Ze&&Ze+1>=Cr(R,P),E)if(!Le&&(ln||In)){var cn=Zr(h,!0),un=Ze-I;D_(h,Tt,cn.top+(P===pn?un:0)+hn,cn.left+(P===pn?0:un)+hn)}else D_(h,B);Ca(ln||In?C:b),ve&&et<1&&ln||$(Me+(et===1&&!In?me:0))}}x&&!K.tween&&!Fn&&!Fc&&Pe.restart(!0),a&&(Ft||y&&et&&(et<1||!ih))&&ac(a.targets).forEach(function(Ur){return Ur.classList[ln||y?"add":"remove"](a.className)}),o&&!L&&!Le&&o(F),Ln&&!Fn?(L&&(Di&&(bt==="complete"?r.pause().totalProgress(1):bt==="reset"?r.restart(!0).pause():bt==="restart"?r.restart(!0):r[bt]()),o&&o(F)),(Ft||!ih)&&(c&&Ft&&sh(F,c),z[Ct]&&sh(F,z[Ct]),y&&(et===1?F.kill(!1,1):z[Ct]=0),Ft||(Ct=et===1?1:3,z[Ct]&&sh(F,z[Ct]))),S&&!ln&&Math.abs(F.getVelocity())>(yl(S)?S:2500)&&(rl(F.callbackAnimation),H?H.progress(1):rl(r,bt==="reverse"?1:!et,1))):L&&o&&!Fn&&o(F)}if(Ee){var xn=w?Ze/w.duration()*(w._caScrollDist||0):Ze;ge(xn+(U._isFlipped?1:0)),Ee(xn)}Fe&&Fe(-Ze/w.duration()*(w._caScrollDist||0))}},F.enable=function(Le,Ke){F.enabled||(F.enabled=!0,bn(R,"resize",Sl),V||bn(R,"scroll",Yo),de&&bn(n,"refreshInit",de),Le!==!1&&(F.progress=re=0,ye=N=He=W()),Ke!==!1&&F.refresh())},F.getTween=function(Le){return Le&&K?K.tween:H},F.setPositions=function(Le,Ke,Ye,Ze){if(w){var Jt=w.scrollTrigger,et=w.duration(),zt=Jt.end-Jt.start;Le=Jt.start+zt*Le/et,Ke=Jt.start+zt*Ke/et}F.refresh(!1,!1,{start:M_(Le,Ye&&!!F._startClamp),end:M_(Ke,Ye&&!!F._endClamp)},Ze),F.update()},F.adjustPinSpacing=function(Le){if(Te&&Le){var Ke=Te.indexOf(P.d)+1;Te[Ke]=parseFloat(Te[Ke])+Le+hn,Te[1]=parseFloat(Te[1])+Le+hn,Ca(Te)}},F.disable=function(Le,Ke){if(Le!==!1&&F.revert(!0,!0),F.enabled&&(F.enabled=F.isActive=!1,Ke||H&&H.pause(),_e=0,le&&(le.uncache=1),de&&Mn(n,"refreshInit",de),Pe&&(Pe.pause(),K.tween&&K.tween.kill()&&(K.tween=0)),!V)){for(var Ye=ct.length;Ye--;)if(ct[Ye].scroller===R&&ct[Ye]!==F)return;Mn(R,"resize",Sl),V||Mn(R,"scroll",Yo)}},F.kill=function(Le,Ke){F.disable(Le,Ke),H&&!Ke&&H.kill(),l&&delete Id[l];var Ye=ct.indexOf(F);Ye>=0&&ct.splice(Ye,1),Ye===Qn&&Au>0&&Qn--,Ye=0,ct.forEach(function(Ze){return Ze.scroller===F.scroller&&(Ye=1)}),Ye||ei||(F.scroll.rec=0),r&&(r.scrollTrigger=null,Le&&r.revert({kill:!1}),Ke||r.kill()),Q&&[Q,Z,U,D].forEach(function(Ze){return Ze.parentNode&&Ze.parentNode.removeChild(Ze)}),Xl===F&&(Xl=0),h&&(le&&(le.uncache=1),Ye=0,ct.forEach(function(Ze){return Ze.pin===h&&Ye++}),Ye||(le.spacer=0)),i.onKill&&i.onKill(F)},ct.push(F),F.enable(!1,!1),qe&&qe(F),r&&r.add&&!se){var st=F.update;F.update=function(){F.update=st,ft.cache++,I||G||F.refresh()},ze.delayedCall(.01,F.update),se=.01,I=G=0}else F.refresh();h&&P1()},n.register=function(i){return fa||(ze=i||Uy(),Oy()&&window.document&&n.enable(),fa=vl),fa},n.defaults=function(i){if(i)for(var r in i)Hc[r]=i[r];return Hc},n.disable=function(i,r){vl=0,ct.forEach(function(o){return o[r?"kill":"disable"](i)}),Mn(ut,"wheel",Yo),Mn(Bt,"scroll",Yo),clearInterval(Uc),Mn(Bt,"touchcancel",Mr),Mn(Tt,"touchstart",Mr),kc(Mn,Bt,"pointerdown,touchstart,mousedown",b_),kc(Mn,Bt,"pointerup,touchend,mouseup",E_),nf.kill(),Bc(Mn);for(var s=0;s<ft.length;s+=3)zc(Mn,ft[s],ft[s+1]),zc(Mn,ft[s],ft[s+2])},n.enable=function(){if(ut=window,Bt=document,Si=Bt.documentElement,Tt=Bt.body,ze&&(ac=ze.utils.toArray,kl=ze.utils.clamp,Dd=ze.core.context||Mr,nh=ze.core.suppressOverwrites||Mr,xm=ut.history.scrollRestoration||"auto",Nd=ut.pageYOffset||0,ze.core.globals("ScrollTrigger",n),Tt)){vl=1,Aa=document.createElement("div"),Aa.style.height="100vh",Aa.style.position="absolute",qy(),b1(),nn.register(ze),n.isTouch=nn.isTouch,Ts=nn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Pd=nn.isTouch===1,bn(ut,"wheel",Yo),vm=[ut,Bt,Si,Tt],ze.matchMedia?(n.matchMedia=function(c){var u=ze.matchMedia(),d;for(d in c)u.add(d,c[d]);return u},ze.addEventListener("matchMediaInit",function(){Wy(),Tm()}),ze.addEventListener("matchMediaRevert",function(){return Gy()}),ze.addEventListener("matchMedia",function(){yo(0,1),No("matchMedia")}),ze.matchMedia().add("(orientation: portrait)",function(){return oh(),oh})):console.warn("Requires GSAP 3.11.0 or later"),oh(),bn(Bt,"scroll",Yo);var i=Tt.hasAttribute("style"),r=Tt.style,s=r.borderTopStyle,o=ze.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Zr(Tt),pn.m=Math.round(a.top+pn.sc())||0,ii.m=Math.round(a.left+ii.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(Tt.setAttribute("style",""),Tt.removeAttribute("style")),Uc=setInterval(A_,250),ze.delayedCall(.5,function(){return Fc=0}),bn(Bt,"touchcancel",Mr),bn(Tt,"touchstart",Mr),kc(bn,Bt,"pointerdown,touchstart,mousedown",b_),kc(bn,Bt,"pointerup,touchend,mouseup",E_),Rd=ze.utils.checkPrefix("transform"),Cu.push(Rd),fa=kn(),nf=ze.delayedCall(.2,yo).pause(),ha=[Bt,"visibilitychange",function(){var c=ut.innerWidth,u=ut.innerHeight;Bt.hidden?(x_=c,y_=u):(x_!==c||y_!==u)&&Sl()},Bt,"DOMContentLoaded",yo,ut,"load",yo,ut,"resize",Sl],Bc(bn),ct.forEach(function(c){return c.enable(0,1)}),l=0;l<ft.length;l+=3)zc(Mn,ft[l],ft[l+1]),zc(Mn,ft[l],ft[l+2])}},n.config=function(i){"limitCallbacks"in i&&(ih=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Uc)||(Uc=r)&&setInterval(A_,r),"ignoreMobileResize"in i&&(Pd=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Bc(Mn)||Bc(bn,i.autoRefreshEvents||"none"),Ly=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=ai(i),o=ft.indexOf(s),a=Lo(s);~o&&ft.splice(o,a?6:2),r&&(a?Pr.unshift(ut,r,Tt,r,Si,r):Pr.unshift(s,r))},n.clearMatchMedia=function(i){ct.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(vi(i)?ai(i):i).getBoundingClientRect(),a=o[s?Ro:Po]*r||0;return s?o.right-a>0&&o.left+a<ut.innerWidth:o.bottom-a>0&&o.top+a<ut.innerHeight},n.positionInViewport=function(i,r,s){vi(i)&&(i=ai(i));var o=i.getBoundingClientRect(),a=o[s?Ro:Po],l=r==null?a/2:r in sf?sf[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/ut.innerWidth:(o.top+l)/ut.innerHeight},n.killAll=function(i){if(ct.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Io.killAll||[];Io={},r.forEach(function(s){return s()})}},n})();it.version="3.14.2";it.saveStyles=function(n){return n?ac(n).forEach(function(e){if(e&&e.style){var t=_i.indexOf(e);t>=0&&_i.splice(t,5),_i.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ze.core.getCache(e),Dd())}}):_i};it.revert=function(n,e){return Tm(!n,e)};it.create=function(n,e){return new it(n,e)};it.refresh=function(n){return n?Sl(!0):(fa||it.register())&&yo(!0)};it.update=function(n){return++ft.cache&&ts(n===!0?2:0)};it.clearScrollMemory=Xy;it.maxScroll=function(n,e){return Cr(n,e?ii:pn)};it.getScrollFunc=function(n,e){return Ws(ai(n),e?ii:pn)};it.getById=function(n){return Id[n]};it.getAll=function(){return ct.filter(function(n){return n.vars.id!=="ScrollSmoother"})};it.isScrolling=function(){return!!Wi};it.snapDirectional=Em;it.addEventListener=function(n,e){var t=Io[n]||(Io[n]=[]);~t.indexOf(e)||t.push(e)};it.removeEventListener=function(n,e){var t=Io[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};it.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var d=[],f=[],h=ze.delayedCall(r,function(){u(d,f),d=[],f=[]}).pause();return function(p){d.length||h.restart(!0),d.push(p.trigger),f.push(p),s<=d.length&&h.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Gn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Gn(s)&&(s=s(),bn(it,"refresh",function(){return s=e.batchMax()})),ac(n).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,t.push(it.create(c))}),t};var I_=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},lh=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(nn.isTouch?" pinch-zoom":""):"none",e===Si&&n(Tt,t)},Xc={auto:1,scroll:1},O1=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||ze.core.getCache(s),a=kn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Tt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Xc[(l=Fi(s)).overflowY]||Xc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Lo(s)&&(Xc[(l=Fi(s)).overflowY]||Xc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},$y=function(e,t,i,r){return nn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&O1,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&bn(Bt,nn.eventTypes[0],O_,!1,!0)},onDisable:function(){return Mn(Bt,nn.eventTypes[0],O_,!0)}})},U1=/(input|label|select|textarea)/i,N_,O_=function(e){var t=U1.test(e.target.tagName);(t||N_)&&(e._gsapAllow=!0,N_=t)},F1=function(e){uo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=ai(e.target)||Si,u=ze.core.globals().ScrollSmoother,d=u&&u.get(),f=Ts&&(e.content&&ai(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),h=Ws(c,pn),p=Ws(c,ii),m=1,_=(nn.isTouch&&ut.visualViewport?ut.visualViewport.scale*ut.visualViewport.width:ut.outerWidth)/ut.innerWidth,g=0,v=Gn(r)?function(){return r(a)}:function(){return r||2.8},y,x,E=$y(c,e.type,!0,s),T=function(){return x=!1},w=Mr,S=Mr,M=function(){l=Cr(c,pn),S=kl(Ts?1:0,l),i&&(w=kl(0,Cr(c,ii))),y=Do},P=function(){f._gsap.y=xl(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},L=function(){if(x){requestAnimationFrame(T);var Y=xl(a.deltaY/2),oe=S(h.v-Y);if(f&&oe!==h.v+h.offset){h.offset=oe-h.v;var F=xl((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+F+", 0, 1)",f._gsap.y=F+"px",h.cacheID=ft.cache,ts()}return!0}h.offset&&P(),x=!0},R,O,V,X,z=function(){M(),R.isActive()&&R.vars.scrollY>l&&(h()>l?R.progress(1)&&h(l):R.resetTo("scrollY",l))};return f&&ze.set(f,{y:"+=0"}),e.ignoreCheck=function(k){return Ts&&k.type==="touchmove"&&L()||m>1.05&&k.type!=="touchstart"||a.isGesturing||k.touches&&k.touches.length>1},e.onPress=function(){x=!1;var k=m;m=xl((ut.visualViewport&&ut.visualViewport.scale||1)/_),R.pause(),k!==m&&lh(c,m>1.01?!0:i?!1:"x"),O=p(),V=h(),M(),y=Do},e.onRelease=e.onGestureStart=function(k,Y){if(h.offset&&P(),!Y)X.restart(!0);else{ft.cache++;var oe=v(),F,de;i&&(F=p(),de=F+oe*.05*-k.velocityX/.227,oe*=I_(p,F,de,Cr(c,ii)),R.vars.scrollX=w(de)),F=h(),de=F+oe*.05*-k.velocityY/.227,oe*=I_(h,F,de,Cr(c,pn)),R.vars.scrollY=S(de),R.invalidate().duration(oe).play(.01),(Ts&&R.vars.scrollY>=l||F>=l-1)&&ze.to({},{onUpdate:z,duration:oe})}o&&o(k)},e.onWheel=function(){R._ts&&R.pause(),kn()-g>1e3&&(y=0,g=kn())},e.onChange=function(k,Y,oe,F,de){if(Do!==y&&M(),Y&&i&&p(w(F[2]===Y?O+(k.startX-k.x):p()+Y-F[1])),oe){h.offset&&P();var fe=de[2]===oe,Ie=fe?V+k.startY-k.y:h()+oe-de[1],He=S(Ie);fe&&Ie!==He&&(V+=He-Ie),h(He)}(oe||Y)&&ts()},e.onEnable=function(){lh(c,i?!1:"x"),it.addEventListener("refresh",z),bn(ut,"resize",z),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=p.smooth=!1),E.enable()},e.onDisable=function(){lh(c,!0),Mn(ut,"resize",z),it.removeEventListener("refresh",z),E.kill()},e.lockAxis=e.lockAxis!==!1,a=new nn(e),a.iOS=Ts,Ts&&!h()&&h(1),Ts&&ze.ticker.add(Mr),X=a._dc,R=ze.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Yy(h,h(),function(){return R.pause()})},onUpdate:ts,onComplete:X.vars.onComplete}),a};it.sort=function(n){if(Gn(n))return ct.sort(n);var e=ut.pageYOffset||0;return it.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ut.innerHeight}),ct.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};it.observe=function(n){return new nn(n)};it.normalizeScroll=function(n){if(typeof n>"u")return Jn;if(n===!0&&Jn)return Jn.enable();if(n===!1){Jn&&Jn.kill(),Jn=n;return}var e=n instanceof nn?n:F1(n);return Jn&&Jn.target===e.target&&Jn.kill(),Lo(e.target)&&(Jn=e),e};it.core={_getVelocityProp:Cd,_inputObserver:$y,_scrollers:ft,_proxies:Pr,bridge:{ss:function(){Wi||No("scrollStart"),Wi=kn()},ref:function(){return Fn}}};Uy()&&ze.registerPlugin(it);var U_="1.3.19";function jy(n,e,t){return Math.max(n,Math.min(e,t))}function B1(n,e,t){return(1-t)*n+t*e}function k1(n,e,t,i){return B1(n,e,1-Math.exp(-t*i))}function z1(n,e){return(n%e+e)%e}var H1=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(n){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=n;const t=jy(0,this.currentTime/this.duration,1);e=t>=1;const i=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=k1(this.value,this.to,this.lerp*60,n),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(n,e,{lerp:t,duration:i,easing:r,onStart:s,onUpdate:o}){this.from=this.value=n,this.to=e,this.lerp=t,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function V1(n,e){let t;return function(...i){clearTimeout(t),t=setTimeout(()=>{t=void 0,n.apply(this,i)},e)}}var G1=class{constructor(n,e,{autoResize:t=!0,debounce:i=250}={}){this.wrapper=n,this.content=e,t&&(this.debouncedResize=V1(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Ky=class{events={};emit(n,...e){const t=this.events[n]||[];for(let i=0,r=t.length;i<r;i++)t[i]?.(...e)}on(n,e){return this.events[n]?this.events[n].push(e):this.events[n]=[e],()=>{this.events[n]=this.events[n]?.filter(t=>e!==t)}}off(n,e){this.events[n]=this.events[n]?.filter(t=>e!==t)}destroy(){this.events={}}},W1=100/6,vs={passive:!1};function F_(n,e){return n===1?W1:n===2?e:1}var X1=class{constructor(n,e={wheelMultiplier:1,touchMultiplier:1}){this.element=n,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,vs),this.element.addEventListener("touchstart",this.onTouchStart,vs),this.element.addEventListener("touchmove",this.onTouchMove,vs),this.element.addEventListener("touchend",this.onTouchEnd,vs)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new Ky;on(n,e){return this.emitter.on(n,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,vs),this.element.removeEventListener("touchstart",this.onTouchStart,vs),this.element.removeEventListener("touchmove",this.onTouchMove,vs),this.element.removeEventListener("touchend",this.onTouchEnd,vs)}onTouchStart=n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})};onTouchMove=n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n,i=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:r},this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:n})};onTouchEnd=n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})};onWheel=n=>{let{deltaX:e,deltaY:t,deltaMode:i}=n;const r=F_(i,this.window.width),s=F_(i,this.window.height);e*=r,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:n})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},B_=n=>Math.min(1,1.001-2**(-10*n)),q1=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new H1;emitter=new Ky;dimensions;virtualScroll;constructor({wrapper:n=window,content:e=document.documentElement,eventsTarget:t=n,smoothWheel:i=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:f=d==="horizontal"?"both":"vertical",touchMultiplier:h=1,wheelMultiplier:p=1,autoResize:m=!0,prevent:_,virtualScroll:g,overscroll:v=!0,autoRaf:y=!1,anchors:x=!1,autoToggle:E=!1,allowNestedScroll:T=!1,__experimental__naiveDimensions:w=!1,naiveDimensions:S=w,stopInertiaOnNavigate:M=!1}={}){window.lenisVersion=U_,window.lenis||(window.lenis={}),window.lenis.version=U_,d==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),(!n||n===document.documentElement)&&(n=window),typeof a=="number"&&typeof l!="function"?l=B_:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:n,content:e,eventsTarget:t,smoothWheel:i,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:d,touchMultiplier:h,wheelMultiplier:p,autoResize:m,prevent:_,virtualScroll:g,overscroll:v,autoRaf:y,anchors:x,autoToggle:E,allowNestedScroll:T,naiveDimensions:S,stopInertiaOnNavigate:M},this.dimensions=new G1(n,e,{autoResize:m}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new X1(t,{touchMultiplier:h,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(n,e){return this.emitter.on(n,e)}off(n,e){return this.emitter.off(n,e)}onScrollEnd=n=>{n instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&n.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const n=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[n]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=n=>{n.propertyName.includes("overflow")&&this.checkOverflow()};setScroll(n){this.isHorizontal?this.options.wrapper.scrollTo({left:n,behavior:"instant"}):this.options.wrapper.scrollTo({top:n,behavior:"instant"})}onClick=n=>{const i=n.composedPath().filter(s=>s instanceof HTMLAnchorElement&&s.href).map(s=>new URL(s.href)),r=new URL(window.location.href);if(this.options.anchors){const s=i.find(o=>r.host===o.host&&r.pathname===o.pathname&&o.hash);if(s){const o=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,a=`#${s.hash.split("#")[1]}`;this.scrollTo(a,o);return}}if(this.options.stopInertiaOnNavigate&&i.some(o=>r.host===o.host&&r.pathname!==o.pathname)){this.reset();return}};onPointerDown=n=>{n.button===1&&this.reset()};onVirtualScroll=n=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(n)===!1)return;const{deltaX:e,deltaY:t,event:i}=n;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const r=i.type.includes("touch"),s=i.type.includes("wheel");this.isTouching=i.type==="touchstart"||i.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&r&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=i.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent,d=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(c.find(g=>g instanceof HTMLElement&&(typeof u=="function"&&u?.(g)||g.hasAttribute?.("data-lenis-prevent")||d==="vertical"&&g.hasAttribute?.("data-lenis-prevent-vertical")||d==="horizontal"&&g.hasAttribute?.("data-lenis-prevent-horizontal")||r&&g.hasAttribute?.("data-lenis-prevent-touch")||s&&g.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let h=t;this.options.gestureOrientation==="both"?h=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(h=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const p=r&&this.options.syncTouch,_=r&&i.type==="touchend";_&&(h=Math.sign(this.velocity)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+h,{programmatic:!1,...p?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const n=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-n,this.direction=Math.sign(this.animatedScroll-n),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=n=>{const e=n-(this.time||n);this.time=n,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(n,{offset:e=0,immediate:t=!1,lock:i=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:o=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:d}={}){if((this.isStopped||this.isLocked)&&!u)return;let f=n,h=e;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let p=null;if(typeof f=="string"?(p=document.querySelector(f),p||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof HTMLElement&&f?.nodeType&&(p=f),p){if(this.options.wrapper!==window){const _=this.rootElement.getBoundingClientRect();h-=this.isHorizontal?_.left:_.top}const m=p.getBoundingClientRect();f=(this.isHorizontal?m.left:m.top)+this.animatedScroll}}if(typeof f=="number"){if(f+=h,f=Math.round(f),this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const p=f-this.animatedScroll;p>this.limit/2?f-=this.limit:p<-this.limit/2&&(f+=this.limit)}}else f=jy(0,f,this.limit);if(f===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=f),typeof o=="number"&&typeof a!="function"?a=B_:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:a,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(p,m)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),r&&(this.targetScroll=p),m||this.emit(),m&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(n,{deltaX:e,deltaY:t}){const i=Date.now();n._lenis||(n._lenis={});const r=n._lenis;let s,o,a,l,c,u,d,f,h,p;if(i-(r.time??0)>2e3){r.time=Date.now();const w=window.getComputedStyle(n);if(r.computedStyle=w,s=["auto","overlay","scroll"].includes(w.overflowX),o=["auto","overlay","scroll"].includes(w.overflowY),c=["auto"].includes(w.overscrollBehaviorX),u=["auto"].includes(w.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=o,!(s||o))return!1;d=n.scrollWidth,f=n.scrollHeight,h=n.clientWidth,p=n.clientHeight,a=d>h,l=f>p,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=d,r.scrollHeight=f,r.clientWidth=h,r.clientHeight=p,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=u}else a=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,d=r.scrollWidth,f=r.scrollHeight,h=r.clientWidth,p=r.clientHeight,c=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const m=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let _,g,v,y,x,E;if(m==="horizontal")_=Math.round(n.scrollLeft),g=d-h,v=e,y=s,x=a,E=c;else if(m==="vertical")_=Math.round(n.scrollTop),g=f-p,v=t,y=o,x=l,E=u;else return!1;return!E&&(_>=g||_<=0)?!0:(v>0?_<g:_>0)&&y&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const n=this.options.wrapper;return this.isHorizontal?n.scrollX??n.scrollLeft:n.scrollY??n.scrollTop}get scroll(){return this.options.infinite?z1(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(n){this._isScrolling!==n&&(this._isScrolling=n,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(n){this._isStopped!==n&&(this._isStopped=n,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(n){this._isLocked!==n&&(this._isLocked=n,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let n="lenis";return this.options.autoToggle&&(n+=" lenis-autoToggle"),this.isStopped&&(n+=" lenis-stopped"),this.isLocked&&(n+=" lenis-locked"),this.isScrolling&&(n+=" lenis-scrolling"),this.isScrolling==="smooth"&&(n+=" lenis-smooth"),n}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};const ko=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Y1={class:"loader-bar-wrapper"},$1={__name:"PageLoader",emits:["loaded"],setup(n,{emit:e}){const t=e,i=nt(null),r=nt(null);return dr(()=>{an.timeline({onComplete:()=>{t("loaded")}}).to(r.value,{width:"100%",duration:1.2,ease:"power2.inOut"}).to(i.value,{yPercent:-100,duration:.7,ease:"power3.inOut",delay:.15})}),(s,o)=>(tt(),yt("div",{class:"page-loader",ref_key:"loaderEl",ref:i},[o[0]||(o[0]=Se("div",{class:"loader-logo"},"PK",-1)),Se("div",Y1,[Se("div",{class:"loader-bar",ref_key:"barEl",ref:r},null,512)])],512))}},j1=ko($1,[["__scopeId","data-v-272c3bd1"]]),Ud=pc({lang:typeof window<"u"&&window.localStorage&&localStorage.getItem("lang")||"vi"}),K1={en:{nav:{home:"Home",projects:"Projects",about:"About",contact:"Contact",marketplace:"Marketplace",enableEffects:"Enable Effects",disableEffects:"Disable Effects",effectsEnabledMsg:"Effects Enabled",effectsDisabledMsg:"Effects Disabled",openMenu:"Open menu"},marketplace:{badge:"Template Marketplace",title:"Website Templates",subtitle:"Ready-to-deploy website templates for every industry. Pick a template, collaborate with us, and launch faster.",filterAll:"All",demoBadge:"Demo",viewDemo:"View Demo",viewTemplate:"View Template",ctaLabel:"Ready to collaborate?",ctaHeading:"Let's build your website together.",ctaBtn:"Start a Project ↗",backToMarketplace:"Back to Marketplace",overview:"Template Overview",features:"Key Features",about:"About This Template",collaborate:"Collaborate / Contact",collaborateDesc:"Interested in this template? Let's discuss your project and customize it for your needs.",collaborateBtn:"Get in Touch ↗",previous:"Previous",next:"Next",previewLabel:"Live Preview",featuresLabel:"Features & Components",templateNum:"Template"},home:{heroLabel:"Software Developer / Full-Stack Developer",heroTitleLine1:"Building",heroTitleHighlight:"Microservices",heroTitleLine3:"Systems & Seamless",heroTitleLine4:"User Experiences.",heroDesc:"Hi, I'm Phuc Khang (tigcom). I specialize in building large-scale backend systems with Java Spring Boot Microservices and modern, high-performance user interfaces.",viewProjects:"View Projects",knowMe:"Know me better →",microservices:"Microservices Built",productsShipped:"Products Shipped",enterpriseClient:"Enterprise Client",selectedProjects:"Selected Projects",selectedProjectsDesc:"Here's a curated selection showcasing my expertise and the achieved results.",viewAllProjects:"View All Projects",areasOfExpertise:"Areas of Expertise",whatIDoBest:"What I do best",whatOthersSay:"What others say",amazingPeople:"I've worked with some amazing people over the years."},about:{aboutMe:"About Me",im:"I'm",creativeDev:"Full-Stack Developer",bio:"With a systematic programming mindset and hands-on experience in Microservices, I focus on building high-performance, secure, and scalable web applications. Currently, I am contributing to financial projects at Kien Long Bank and continuously improving my Full-Stack skills.",yearsExp:"Years Experience",projectsDone:"Projects Done",happyClients:"Happy Clients",awardsWon:"Awards Won",experience:"Experience",workHistory:"Work History",myProcess:"My Process",howIWork:"How I Work",education:"Education",gpaAchievement:"GPA Achievement",excellentSems:"Excellent Semesters",coreServices:"Core Services Built",yearExpShort:"Year Experience",readArticle:"Read Article"},contact:{getInTouch:"Get in Touch",letsWork:"Let's work",together:"together",contactDesc:"Have a project in mind? I'd love to hear about it. Send me a message and let's start a conversation.",sendMessage:"Send a message",yourName:"Your Name",emailAddress:"Email Address",subject:"Subject",typeOfInquiry:"Type of Inquiry",message:"Message",sendBtn:"Send Message",sendingBtn:"Sending...",messageSent:"Message sent! I'll get back to you soon.",sendError:"Something went wrong. Please try again or email me directly.",rateLimited:"You're sending too fast. Please wait 2 minutes before trying again.",contactInfo:"Contact Info",location:"Location",phone:"Phone",responseTime:"Response Time",within24h:"Within 24 hours",faqs:"FAQs",haveQuestions:"Have Questions?"},common:{year:"Year",category:"Category",role:"Role",overview:"Overview",problem:"Problem Statement",process:"My Process",results:"Key Results",previous:"Previous",next:"Next",backToProjects:"Back to Projects",github:"GitHub",liveDemo:"Live Demo",interface:"User Interface",onThisPage:"On this page",shareProject:"Share this project",copyLink:"Copy link",linkCopied:"Link copied",shareTwitter:"Share on Twitter",shareLinkedIn:"Share on LinkedIn",shareEmail:"Share via email",checkItOut:"Check it out",client:"Client",previousPage:"Previous project",nextPage:"Next project",viewHighRes:"View at full resolution"},chatbot:{title:"Chat with Khang",placeholder:"Type a message...",send:"Send",close:"Close",thinking:"Thinking...",error:"Something went wrong. Please try again.",retry:"Try again",newChat:"New conversation",greeting:"Hi there! I'm Khang — a Full-Stack Developer specializing in building web systems from Landing Pages to Microservices. What brings you here?",optExplore:"Just browsing",optFreelance:"I need a web developer",optRecruiter:"I'm recruiting",optLanding:"Landing Page / Business website",optEcommerce:"E-commerce website",optCRM:"Management system (CRM/ERP)",optCustom:"Custom web application",optUnsure:"Not sure, need advice",optViewProjects:"View real projects",optTechStack:"Detailed Tech Stack",optDownloadCV:"Download CV",optInterview:"Ask interview questions",optShowProjects:"View projects",optShowTemplates:"View website templates",optWantWebsite:"I want a website",optSkills:"Skills & technologies",optContact:"Contact details",optViewDemo:"View related demo",optAskProcess:"Ask about the process"}},vi:{nav:{home:"Trang chủ",projects:"Dự án",about:"Giới thiệu",contact:"Liên hệ",marketplace:"Mẫu Web",enableEffects:"Bật hiệu ứng",disableEffects:"Tắt hiệu ứng",effectsEnabledMsg:"Đã bật hiệu ứng",effectsDisabledMsg:"Đã tắt hiệu ứng",openMenu:"Mở menu"},marketplace:{badge:"Kho Mẫu Website",title:"Mẫu Website",subtitle:"Các mẫu website sẵn sàng triển khai cho mọi ngành nghề. Chọn mẫu, hợp tác với chúng tôi và ra mắt nhanh hơn.",filterAll:"Tất cả",demoBadge:"Demo",viewDemo:"Xem Demo",viewTemplate:"Xem mẫu",ctaLabel:"Sẵn sàng hợp tác?",ctaHeading:"Hãy cùng xây dựng website của bạn.",ctaBtn:"Bắt đầu dự án ↗",backToMarketplace:"Quay lại Marketplace",overview:"Tổng quan mẫu",features:"Tính năng chính",about:"Về mẫu này",collaborate:"Hợp tác / Liên hệ",collaborateDesc:"Bạn quan tâm đến mẫu này? Hãy thảo luận về dự án và tùy chỉnh theo nhu cầu của bạn.",collaborateBtn:"Liên hệ ngay ↗",previous:"Trước đó",next:"Tiếp theo",previewLabel:"Xem trước trực tiếp",featuresLabel:"Tính năng & Thành phần",templateNum:"Mẫu"},home:{heroLabel:"Nhà phát triển Phần mềm / Full-Stack Developer",heroTitleLine1:"Xây dựng",heroTitleHighlight:"Microservices",heroTitleLine3:"Hệ thống & Trải nghiệm",heroTitleLine4:"Người dùng liền mạch.",heroDesc:"Chào bạn, mình là Phúc Khang (tigcom). Mình chuyên xây dựng các hệ thống Backend quy mô lớn với Java Spring Boot Microservices và giao diện người dùng hiện đại, tối ưu hiệu năng.",viewProjects:"Xem dự án",knowMe:"Tìm hiểu về mình →",microservices:"Microservices đã xây",productsShipped:"Sản phẩm đã ra mắt",enterpriseClient:"Khách hàng doanh nghiệp",selectedProjects:"Dự án Tiêu biểu",selectedProjectsDesc:"Dưới đây là danh sách các dự án tiêu biểu thể hiện chuyên môn và kết quả tôi đã đạt được.",viewAllProjects:"Xem tất cả dự án",areasOfExpertise:"Lĩnh vực Chuyên môn",whatIDoBest:"Thế mạnh của tôi",whatOthersSay:"Mọi người nói gì",amazingPeople:"Tôi đã có cơ hội làm việc với những đồng nghiệp và khách hàng tuyệt vời."},about:{aboutMe:"Giới thiệu",im:"Mình là",creativeDev:"Full-Stack Developer",bio:"Với tư duy lập trình hệ thống và kinh nghiệm thực chiến về Microservices, mình tập trung vào việc xây dựng các ứng dụng web hiệu năng cao, bảo mật và dễ mở rộng. Hiện tại, mình đang đóng góp vào các dự án tài chính tại ngân hàng Kiên Long và không ngừng nâng cao kỹ năng Full-Stack của bản thân.",yearsExp:"Năm kinh nghiệm",projectsDone:"Dự án hoàn thành",happyClients:"Khách hàng hài lòng",awardsWon:"Giải thưởng",experience:"Kinh nghiệm",workHistory:"Lịch sử làm việc",myProcess:"Quy trình",howIWork:"Cách tôi làm việc",education:"Học vấn",gpaAchievement:"Điểm GPA tích lũy",excellentSems:"Học kỳ Xuất sắc",coreServices:"Dịch vụ lõi đã xây dựng",yearExpShort:"Năm kinh nghiệm",readArticle:"Xem bài viết"},contact:{getInTouch:"Liên hệ",letsWork:"Cùng nhau",together:"hợp tác",contactDesc:"Bạn có ý tưởng cho một dự án? Mình rất sẵn lòng lắng nghe. Hãy gửi tin nhắn cho mình và bắt đầu cuộc trò chuyện nhé.",sendMessage:"Gửi tin nhắn",yourName:"Họ tên của bạn",emailAddress:"Địa chỉ Email",subject:"Tiêu đề",typeOfInquiry:"Loại yêu cầu",message:"Nội dung tin nhắn",sendBtn:"Gửi tin nhắn",sendingBtn:"Đang gửi...",messageSent:"Tin nhắn đã được gửi! Mình sẽ phản hồi bạn sớm nhất có thể.",sendError:"Có lỗi xảy ra. Vui lòng thử lại hoặc gửi email trực tiếp cho mình.",rateLimited:"Bạn gửi quá nhanh. Vui lòng đợi 2 phút trước khi gửi lại.",contactInfo:"Thông tin liên hệ",location:"Địa điểm",phone:"Số điện thoại",responseTime:"Thời gian phản hồi",within24h:"Trong vòng 24 giờ",faqs:"Hỏi đáp",haveQuestions:"Bạn có thắc mắc?"},common:{year:"Năm",category:"Lĩnh vực",role:"Vai trò",overview:"Tổng quan",problem:"Vấn đề & Thách thức",process:"Quy trình thực hiện",results:"Kết quả đạt được",previous:"Trước đó",next:"Tiếp theo",backToProjects:"Quay lại danh mục",github:"GitHub",liveDemo:"Xem Demo",interface:"Giao diện",onThisPage:"Trong trang này",shareProject:"Chia sẻ dự án",copyLink:"Sao chép liên kết",linkCopied:"Đã sao chép",shareTwitter:"Chia sẻ lên Twitter",shareLinkedIn:"Chia sẻ lên LinkedIn",shareEmail:"Chia sẻ qua email",checkItOut:"Xem thử",client:"Khách hàng",previousPage:"Dự án trước",nextPage:"Dự án tiếp theo",viewHighRes:"Xem ở kích thước đầy đủ"},chatbot:{title:"Chat với Khang",placeholder:"Nhập tin nhắn...",send:"Gửi",close:"Đóng",thinking:"Đang suy nghĩ...",error:"Có lỗi xảy ra. Vui lòng thử lại.",retry:"Thử lại",newChat:"Cuộc trò chuyện mới",greeting:"Xin chào! Tôi là Khang — Full-Stack Developer chuyên xây dựng hệ thống web từ Landing Page đến Microservices. Bạn đến đây với mục đích gì?",optExplore:"Tôi đang tìm hiểu",optFreelance:"Tôi cần tìm người làm web",optRecruiter:"Tôi đang tuyển dụng",optLanding:"Landing Page / Web giới thiệu",optEcommerce:"Website thương mại điện tử",optCRM:"Hệ thống quản lý (CRM/ERP)",optCustom:"Ứng dụng web theo yêu cầu",optUnsure:"Tôi chưa rõ, cần tư vấn",optViewProjects:"Xem dự án thực tế",optTechStack:"Tech Stack chi tiết",optDownloadCV:"Tải CV",optInterview:"Hỏi phỏng vấn",optShowProjects:"Xem các dự án",optShowTemplates:"Xem các mẫu website",optWantWebsite:"Tôi muốn có website",optSkills:"Kỹ năng & công nghệ",optContact:"Liên hệ chi tiết",optViewDemo:"Xem demo mẫu liên quan",optAskProcess:"Hỏi thêm về quy trình"}}},Z1=n=>{Ud.lang=n,localStorage.setItem("lang",n)},Mc=()=>({state:Uu(Ud),t:n=>{const e=n.split(".");let t=K1[Ud.lang];for(const i of e)if(t&&t[i])t=t[i];else return n;return t},setLang:Z1}),bc=nt(!0);let k_=!1;function J1(){k_||typeof window>"u"||(k_=!0,bc.value=localStorage.getItem("portfolio-effects")!=="off",Zy())}function Zy(){bc.value?document.documentElement.removeAttribute("data-effects"):document.documentElement.setAttribute("data-effects","off")}function Jy(n){bc.value=!!n,localStorage.setItem("portfolio-effects",n?"on":"off"),Zy()}function Q1(){Jy(!bc.value)}J1();function eA(){return{enabled:bc,setEffectsEnabled:Jy,toggleEffects:Q1}}const tA={class:"nav-links"},nA={class:"nav-link-content"},iA={class:"link-text-top"},rA={class:"link-text-bottom"},sA={class:"nav-actions"},oA=["title"],aA=["aria-label","title"],lA={key:0,class:"theme-icon",xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},cA={key:1,class:"theme-icon",xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},uA={__name:"AppNavbar",setup(n){an.registerPlugin(it);const{state:e,t,setLang:i}=Mc(),r=Qp(),s=nt(!1),o=nt(!0),a=nt(null),l=[{path:"/",label:"nav.home"},{path:"/about",label:"nav.about"},{path:"/marketplace",label:"nav.marketplace"},{path:"/projects",label:"nav.projects"},{path:"/contact",label:"nav.contact"}];function c(f){return f==="/"?r.path==="/":r.path.startsWith(f)}function u(f){const h=o.value?"light":"dark",p=h==="light",m=document.createElement("div");m.className="theme-ripple";const _=Math.hypot(window.innerWidth,window.innerHeight)*2.2,g=f.clientX,v=f.clientY;Object.assign(m.style,{width:`${_}px`,height:`${_}px`,left:`${g-_/2}px`,top:`${v-_/2}px`,background:p?"#f8f8f6":"#0a0a0a"}),document.body.appendChild(m),an.timeline({onComplete:()=>m.remove()}).to(m,{scale:1,duration:.55,ease:"power3.out",onComplete:()=>{document.documentElement.setAttribute("data-theme",h),o.value=!o.value,localStorage.setItem("portfolio-theme",h)}}).to(m,{opacity:0,duration:.35,ease:"power2.in"},"+=0.05"),an.fromTo(".theme-icon",{rotate:0,scale:1},{rotate:360,scale:0,duration:.3,ease:"power3.in",onComplete:()=>{an.fromTo(".theme-icon",{rotate:-90,scale:0},{rotate:0,scale:1,duration:.4,ease:"back.out(1.7)"})}})}function d(){s.value=window.scrollY>60}return dr(()=>{const f=localStorage.getItem("portfolio-theme")||"dark";document.documentElement.setAttribute("data-theme",f),o.value=f==="dark",an.fromTo("#navbar",{yPercent:-100,opacity:0},{yPercent:0,opacity:1,duration:.7,ease:"power3.out",delay:.1}),xa(()=>{const h=a.value;if(!h)return;h.style.width="auto",h.style.maxWidth="none";const p=h.offsetWidth;h.style.width="100%",an.to(h,{width:`${p}px`,ease:"none",scrollTrigger:{trigger:"body",start:"top top",end:"+=500",scrub:!0,invalidateOnRefresh:!0}})}),window.addEventListener("scroll",d,{passive:!0})}),Uo(()=>{window.removeEventListener("scroll",d)}),(f,h)=>{const p=_f("router-link");return tt(),yt("header",{id:"navbar",class:Ir({scrolled:s.value})},[Se("nav",{class:"nav-inner",ref_key:"navInnerRef",ref:a},[Mt(p,{to:"/",class:"nav-logo"},{default:Bi(()=>[...h[1]||(h[1]=[xr("PK",-1)])]),_:1}),Se("ul",tA,[(tt(),yt(mn,null,Hu(l,m=>Se("li",{key:m.path},[Mt(p,{to:m.path,class:Ir({active:c(m.path)})},{default:Bi(()=>[Se("div",nA,[Se("span",iA,dn(ht(t)(m.label)),1),Se("span",rA,dn(ht(t)(m.label)),1)]),h[2]||(h[2]=Se("div",{class:"nav-active-indicator"},null,-1))]),_:2},1032,["to","class"])])),64))]),Se("div",sA,[Se("button",{class:"nav-lang-btn",onClick:h[0]||(h[0]=m=>ht(i)(ht(e).lang==="en"?"vi":"en")),title:ht(e).lang==="en"?"Tiếng Việt":"English"},dn(ht(e).lang==="en"?"EN":"VI"),9,oA),Se("button",{class:"nav-theme-btn",onClick:u,"aria-label":o.value?"Switch to light mode":"Switch to dark mode",title:o.value?"Light Mode":"Dark Mode"},[o.value?(tt(),yt("svg",lA,[...h[3]||(h[3]=[Se("path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"},null,-1)])])):(tt(),yt("svg",cA,[...h[4]||(h[4]=[Se("circle",{cx:"12",cy:"12",r:"4"},null,-1),Se("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"},null,-1)])]))],8,aA)])],512)],2)}}},fA=ko(uA,[["__scopeId","data-v-1192edd2"]]);const wm="183",hA=0,z_=1,dA=2,Pu=1,pA=2,Ml=3,Xs=0,hi=1,Jr=2,ns=0,Ra=1,H_=2,V_=3,G_=4,mA=5,go=100,gA=101,_A=102,vA=103,xA=104,yA=200,SA=201,MA=202,bA=203,Fd=204,Bd=205,EA=206,TA=207,wA=208,AA=209,CA=210,RA=211,PA=212,DA=213,LA=214,kd=0,zd=1,Hd=2,Va=3,Vd=4,Gd=5,Wd=6,Xd=7,Qy=0,IA=1,NA=2,Dr=0,eS=1,tS=2,nS=3,iS=4,rS=5,sS=6,oS=7,aS=300,Oo=301,Ga=302,ch=303,uh=304,Af=306,qd=1e3,es=1001,Yd=1002,Pn=1003,OA=1004,qc=1005,Wn=1006,fh=1007,So=1008,ki=1009,lS=1010,cS=1011,cc=1012,Am=1013,Or=1014,nr=1015,cs=1016,Cm=1017,Rm=1018,uc=1020,uS=35902,fS=35899,hS=1021,dS=1022,ir=1023,us=1026,Mo=1027,Pm=1028,Dm=1029,Wa=1030,Lm=1031,Im=1033,Du=33776,Lu=33777,Iu=33778,Nu=33779,$d=35840,jd=35841,Kd=35842,Zd=35843,Jd=36196,Qd=37492,ep=37496,tp=37488,np=37489,ip=37490,rp=37491,sp=37808,op=37809,ap=37810,lp=37811,cp=37812,up=37813,fp=37814,hp=37815,dp=37816,pp=37817,mp=37818,gp=37819,_p=37820,vp=37821,xp=36492,yp=36494,Sp=36495,Mp=36283,bp=36284,Ep=36285,Tp=36286,UA=3200,FA=0,BA=1,Rs="",Oi="srgb",Xa="srgb-linear",of="linear",Rt="srgb",$o=7680,W_=519,kA=512,zA=513,HA=514,Nm=515,VA=516,GA=517,Om=518,WA=519,X_=35044,q_="300 es",Rr=2e3,af=2001;function XA(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function lf(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qA(){const n=lf("canvas");return n.style.display="block",n}const Y_={};function $_(...n){const e="THREE."+n.shift();console.log(e,...n)}function pS(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Je(...n){n=pS(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function xt(...n){n=pS(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function cf(...n){const e=n.join(" ");e in Y_||(Y_[e]=!0,Je(...n))}function YA(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const $A={[kd]:zd,[Hd]:Wd,[Vd]:Xd,[Va]:Gd,[zd]:kd,[Wd]:Hd,[Xd]:Vd,[Gd]:Va};class Ya{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hh=Math.PI/180,wp=180/Math.PI;function Ec(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(On[n&255]+On[n>>8&255]+On[n>>16&255]+On[n>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[t&63|128]+On[t>>8&255]+"-"+On[t>>16&255]+On[t>>24&255]+On[i&255]+On[i>>8&255]+On[i>>16&255]+On[i>>24&255]).toLowerCase()}function dt(n,e,t){return Math.max(e,Math.min(t,n))}function jA(n,e){return(n%e+e)%e}function dh(n,e,t){return(1-t)*n+t*e}function sl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function si(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class gt{constructor(e=0,t=0){gt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $a{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],p=s[o+2],m=s[o+3];if(d!==m||l!==f||c!==h||u!==p){let _=l*f+c*h+u*p+d*m;_<0&&(f=-f,h=-h,p=-p,m=-m,_=-_);let g=1-a;if(_<.9995){const v=Math.acos(_),y=Math.sin(v);g=Math.sin(g*v)/y,a=Math.sin(a*v)/y,l=l*g+f*a,c=c*g+h*a,u=u*g+p*a,d=d*g+m*a}else{l=l*g+f*a,c=c*g+h*a,u=u*g+p*a,d=d*g+m*a;const v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],p=s[o+3];return e[t]=a*p+u*d+l*h-c*f,e[t+1]=l*p+u*f+c*d-a*h,e[t+2]=c*p+u*h+a*f-l*d,e[t+3]=u*p-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),h=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"YXZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"ZXY":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"ZYX":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"YZX":this._x=f*u*d+c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d-f*h*p;break;case"XZY":this._x=f*u*d-c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d+f*h*p;break;default:Je("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,i=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(j_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(j_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ph.copy(this).projectOnVector(e),this.sub(ph)}reflect(e){return this.sub(ph.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ph=new J,j_=new $a;class ot{constructor(e,t,i,r,s,o,a,l,c){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],p=i[8],m=r[0],_=r[3],g=r[6],v=r[1],y=r[4],x=r[7],E=r[2],T=r[5],w=r[8];return s[0]=o*m+a*v+l*E,s[3]=o*_+a*y+l*T,s[6]=o*g+a*x+l*w,s[1]=c*m+u*v+d*E,s[4]=c*_+u*y+d*T,s[7]=c*g+u*x+d*w,s[2]=f*m+h*v+p*E,s[5]=f*_+h*y+p*T,s[8]=f*g+h*x+p*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,h=c*s-o*l,p=t*d+i*f+r*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/p;return e[0]=d*m,e[1]=(r*c-u*i)*m,e[2]=(a*i-r*o)*m,e[3]=f*m,e[4]=(u*t-r*l)*m,e[5]=(r*s-a*t)*m,e[6]=h*m,e[7]=(i*l-c*t)*m,e[8]=(o*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(mh.makeScale(e,t)),this}rotate(e){return this.premultiply(mh.makeRotation(-e)),this}translate(e,t){return this.premultiply(mh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mh=new ot,K_=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Z_=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function KA(){const n={enabled:!0,workingColorSpace:Xa,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Rt&&(r.r=is(r.r),r.g=is(r.g),r.b=is(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Rt&&(r.r=Pa(r.r),r.g=Pa(r.g),r.b=Pa(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Rs?of:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return cf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return cf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Xa]:{primaries:e,whitePoint:i,transfer:of,toXYZ:K_,fromXYZ:Z_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Oi},outputColorSpaceConfig:{drawingBufferColorSpace:Oi}},[Oi]:{primaries:e,whitePoint:i,transfer:Rt,toXYZ:K_,fromXYZ:Z_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Oi}}}),n}const mt=KA();function is(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Pa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let jo;class ZA{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{jo===void 0&&(jo=lf("canvas")),jo.width=e.width,jo.height=e.height;const r=jo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=jo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lf("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=is(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(is(t[i]/255)*255):t[i]=is(t[i]);return{data:t,width:e.width,height:e.height}}else return Je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let JA=0;class Um{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JA++}),this.uuid=Ec(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(gh(r[o].image)):s.push(gh(r[o]))}else s=gh(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function gh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ZA.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Je("Texture: Unable to serialize Texture."),{})}let QA=0;const _h=new J;class ri extends Ya{constructor(e=ri.DEFAULT_IMAGE,t=ri.DEFAULT_MAPPING,i=es,r=es,s=Wn,o=So,a=ir,l=ki,c=ri.DEFAULT_ANISOTROPY,u=Rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:QA++}),this.uuid=Ec(),this.name="",this.source=new Um(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_h).x}get height(){return this.source.getSize(_h).y}get depth(){return this.source.getSize(_h).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Je(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==aS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qd:e.x=e.x-Math.floor(e.x);break;case es:e.x=e.x<0?0:1;break;case Yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qd:e.y=e.y-Math.floor(e.y);break;case es:e.y=e.y<0?0:1;break;case Yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ri.DEFAULT_IMAGE=null;ri.DEFAULT_MAPPING=aS;ri.DEFAULT_ANISOTROPY=1;class tn{constructor(e=0,t=0,i=0,r=1){tn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],p=l[9],m=l[2],_=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-m)<.01&&Math.abs(p-_)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+m)<.1&&Math.abs(p+_)<.1&&Math.abs(c+h+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(h+1)/2,E=(g+1)/2,T=(u+f)/4,w=(d+m)/4,S=(p+_)/4;return y>x&&y>E?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=w/i):x>E?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=T/r,s=S/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=w/s,r=S/s),this.set(i,r,s,t),this}let v=Math.sqrt((_-p)*(_-p)+(d-m)*(d-m)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(_-p)/v,this.y=(d-m)/v,this.z=(f-u)/v,this.w=Math.acos((c+h+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eC extends Ya{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new ri(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Um(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lr extends eC{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class mS extends ri{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tC extends ri{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qt{constructor(e,t,i,r,s,o,a,l,c,u,d,f,h,p,m,_){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,f,h,p,m,_)}set(e,t,i,r,s,o,a,l,c,u,d,f,h,p,m,_){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=f,g[3]=h,g[7]=p,g[11]=m,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Ko.setFromMatrixColumn(e,0).length(),s=1/Ko.setFromMatrixColumn(e,1).length(),o=1/Ko.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,h=o*d,p=a*u,m=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+p*c,t[5]=f-m*c,t[9]=-a*l,t[2]=m-f*c,t[6]=p+h*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,p=c*u,m=c*d;t[0]=f+m*a,t[4]=p*a-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-p,t[6]=m+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,p=c*u,m=c*d;t[0]=f-m*a,t[4]=-o*d,t[8]=p+h*a,t[1]=h+p*a,t[5]=o*u,t[9]=m-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,h=o*d,p=a*u,m=a*d;t[0]=l*u,t[4]=p*c-h,t[8]=f*c+m,t[1]=l*d,t[5]=m*c+f,t[9]=h*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,p=a*l,m=a*c;t[0]=l*u,t[4]=m-f*d,t[8]=p*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+p,t[10]=f-m*d}else if(e.order==="XZY"){const f=o*l,h=o*c,p=a*l,m=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+m,t[5]=o*u,t[9]=h*d-p,t[2]=p*d-h,t[6]=a*u,t[10]=m*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nC,e,iC)}lookAt(e,t,i){const r=this.elements;return mi.subVectors(e,t),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),xs.crossVectors(i,mi),xs.lengthSq()===0&&(Math.abs(i.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),xs.crossVectors(i,mi)),xs.normalize(),Yc.crossVectors(mi,xs),r[0]=xs.x,r[4]=Yc.x,r[8]=mi.x,r[1]=xs.y,r[5]=Yc.y,r[9]=mi.y,r[2]=xs.z,r[6]=Yc.z,r[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],p=i[2],m=i[6],_=i[10],g=i[14],v=i[3],y=i[7],x=i[11],E=i[15],T=r[0],w=r[4],S=r[8],M=r[12],P=r[1],L=r[5],R=r[9],O=r[13],V=r[2],X=r[6],z=r[10],k=r[14],Y=r[3],oe=r[7],F=r[11],de=r[15];return s[0]=o*T+a*P+l*V+c*Y,s[4]=o*w+a*L+l*X+c*oe,s[8]=o*S+a*R+l*z+c*F,s[12]=o*M+a*O+l*k+c*de,s[1]=u*T+d*P+f*V+h*Y,s[5]=u*w+d*L+f*X+h*oe,s[9]=u*S+d*R+f*z+h*F,s[13]=u*M+d*O+f*k+h*de,s[2]=p*T+m*P+_*V+g*Y,s[6]=p*w+m*L+_*X+g*oe,s[10]=p*S+m*R+_*z+g*F,s[14]=p*M+m*O+_*k+g*de,s[3]=v*T+y*P+x*V+E*Y,s[7]=v*w+y*L+x*X+E*oe,s[11]=v*S+y*R+x*z+E*F,s[15]=v*M+y*O+x*k+E*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],p=e[3],m=e[7],_=e[11],g=e[15],v=l*h-c*f,y=a*h-c*d,x=a*f-l*d,E=o*h-c*u,T=o*f-l*u,w=o*d-a*u;return t*(m*v-_*y+g*x)-i*(p*v-_*E+g*T)+r*(p*y-m*E+g*w)-s*(p*x-m*T+_*w)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],p=e[12],m=e[13],_=e[14],g=e[15],v=t*a-i*o,y=t*l-r*o,x=t*c-s*o,E=i*l-r*a,T=i*c-s*a,w=r*c-s*l,S=u*m-d*p,M=u*_-f*p,P=u*g-h*p,L=d*_-f*m,R=d*g-h*m,O=f*g-h*_,V=v*O-y*R+x*L+E*P-T*M+w*S;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/V;return e[0]=(a*O-l*R+c*L)*X,e[1]=(r*R-i*O-s*L)*X,e[2]=(m*w-_*T+g*E)*X,e[3]=(f*T-d*w-h*E)*X,e[4]=(l*P-o*O-c*M)*X,e[5]=(t*O-r*P+s*M)*X,e[6]=(_*x-p*w-g*y)*X,e[7]=(u*w-f*x+h*y)*X,e[8]=(o*R-a*P+c*S)*X,e[9]=(i*P-t*R-s*S)*X,e[10]=(p*T-m*x+g*v)*X,e[11]=(d*x-u*T-h*v)*X,e[12]=(a*M-o*L-l*S)*X,e[13]=(t*L-i*M+r*S)*X,e[14]=(m*y-p*E-_*v)*X,e[15]=(u*E-d*y+f*v)*X,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,h=s*u,p=s*d,m=o*u,_=o*d,g=a*d,v=l*c,y=l*u,x=l*d,E=i.x,T=i.y,w=i.z;return r[0]=(1-(m+g))*E,r[1]=(h+x)*E,r[2]=(p-y)*E,r[3]=0,r[4]=(h-x)*T,r[5]=(1-(f+g))*T,r[6]=(_+v)*T,r[7]=0,r[8]=(p+y)*w,r[9]=(_-v)*w,r[10]=(1-(f+m))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let o=Ko.set(r[0],r[1],r[2]).length();const a=Ko.set(r[4],r[5],r[6]).length(),l=Ko.set(r[8],r[9],r[10]).length();s<0&&(o=-o),ji.copy(this);const c=1/o,u=1/a,d=1/l;return ji.elements[0]*=c,ji.elements[1]*=c,ji.elements[2]*=c,ji.elements[4]*=u,ji.elements[5]*=u,ji.elements[6]*=u,ji.elements[8]*=d,ji.elements[9]*=d,ji.elements[10]*=d,t.setFromRotationMatrix(ji),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,o,a=Rr,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,m;if(l)p=s/(o-s),m=o*s/(o-s);else if(a===Rr)p=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===af)p=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Rr,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r);let p,m;if(l)p=1/(o-s),m=o/(o-s);else if(a===Rr)p=-2/(o-s),m=-(o+s)/(o-s);else if(a===af)p=-1/(o-s),m=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ko=new J,ji=new qt,nC=new J(0,0,0),iC=new J(1,1,1),xs=new J,Yc=new J,mi=new J,J_=new qt,Q_=new $a;class fs{constructor(e=0,t=0,i=0,r=fs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(dt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return J_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(J_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Q_.setFromEuler(this),this.setFromQuaternion(Q_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fs.DEFAULT_ORDER="XYZ";class gS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rC=0;const e0=new J,Zo=new $a,zr=new qt,$c=new J,ol=new J,sC=new J,oC=new $a,t0=new J(1,0,0),n0=new J(0,1,0),i0=new J(0,0,1),r0={type:"added"},aC={type:"removed"},Jo={type:"childadded",child:null},vh={type:"childremoved",child:null};class Ci extends Ya{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rC++}),this.uuid=Ec(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ci.DEFAULT_UP.clone();const e=new J,t=new fs,i=new $a,r=new J(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qt},normalMatrix:{value:new ot}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=Ci.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zo.setFromAxisAngle(e,t),this.quaternion.multiply(Zo),this}rotateOnWorldAxis(e,t){return Zo.setFromAxisAngle(e,t),this.quaternion.premultiply(Zo),this}rotateX(e){return this.rotateOnAxis(t0,e)}rotateY(e){return this.rotateOnAxis(n0,e)}rotateZ(e){return this.rotateOnAxis(i0,e)}translateOnAxis(e,t){return e0.copy(e).applyQuaternion(this.quaternion),this.position.add(e0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(t0,e)}translateY(e){return this.translateOnAxis(n0,e)}translateZ(e){return this.translateOnAxis(i0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$c.copy(e):$c.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ol.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zr.lookAt(ol,$c,this.up):zr.lookAt($c,ol,this.up),this.quaternion.setFromRotationMatrix(zr),r&&(zr.extractRotation(r.matrixWorld),Zo.setFromRotationMatrix(zr),this.quaternion.premultiply(Zo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(xt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(r0),Jo.child=e,this.dispatchEvent(Jo),Jo.child=null):xt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(aC),vh.child=e,this.dispatchEvent(vh),vh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zr.multiply(e.parent.matrixWorld)),e.applyMatrix4(zr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(r0),Jo.child=e,this.dispatchEvent(Jo),Jo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,e,sC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,oC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),p.length>0&&(i.nodes=p)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ci.DEFAULT_UP=new J(0,1,0);Ci.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class jc extends Ci{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lC={type:"move"};class xh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const _=t.getJointPose(m,i),g=this._getHandJoint(c,m);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,p=.005;c.inputState.pinching&&f>h+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new jc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const _S={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ys={h:0,s:0,l:0},Kc={h:0,s:0,l:0};function yh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Pt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,mt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=mt.workingColorSpace){if(e=jA(e,1),t=dt(t,0,1),i=dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=yh(o,s,e+1/3),this.g=yh(o,s,e),this.b=yh(o,s,e-1/3)}return mt.colorSpaceToWorking(this,r),this}setStyle(e,t=Oi){function i(s){s!==void 0&&parseFloat(s)<1&&Je("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Je("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Oi){const i=_S[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}copyLinearToSRGB(e){return this.r=Pa(e.r),this.g=Pa(e.g),this.b=Pa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Oi){return mt.workingToColorSpace(Un.copy(this),e),Math.round(dt(Un.r*255,0,255))*65536+Math.round(dt(Un.g*255,0,255))*256+Math.round(dt(Un.b*255,0,255))}getHexString(e=Oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(Un.copy(this),t);const i=Un.r,r=Un.g,s=Un.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(Un.copy(this),t),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=Oi){mt.workingToColorSpace(Un.copy(this),e);const t=Un.r,i=Un.g,r=Un.b;return e!==Oi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ys),this.setHSL(ys.h+e,ys.s+t,ys.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ys),e.getHSL(Kc);const i=dh(ys.h,Kc.h,t),r=dh(ys.s,Kc.s,t),s=dh(ys.l,Kc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Pt;Pt.NAMES=_S;class cC extends Ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fs,this.environmentIntensity=1,this.environmentRotation=new fs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ki=new J,Hr=new J,Sh=new J,Vr=new J,Qo=new J,ea=new J,s0=new J,Mh=new J,bh=new J,Eh=new J,Th=new tn,wh=new tn,Ah=new tn;class tr{constructor(e=new J,t=new J,i=new J){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ki.subVectors(e,t),r.cross(Ki);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Ki.subVectors(r,t),Hr.subVectors(i,t),Sh.subVectors(e,t);const o=Ki.dot(Ki),a=Ki.dot(Hr),l=Ki.dot(Sh),c=Hr.dot(Hr),u=Hr.dot(Sh),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,p=(o*u-a*l)*f;return s.set(1-h-p,p,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Vr)===null?!1:Vr.x>=0&&Vr.y>=0&&Vr.x+Vr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Vr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vr.x),l.addScaledVector(o,Vr.y),l.addScaledVector(a,Vr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Th.setScalar(0),wh.setScalar(0),Ah.setScalar(0),Th.fromBufferAttribute(e,t),wh.fromBufferAttribute(e,i),Ah.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Th,s.x),o.addScaledVector(wh,s.y),o.addScaledVector(Ah,s.z),o}static isFrontFacing(e,t,i,r){return Ki.subVectors(i,t),Hr.subVectors(e,t),Ki.cross(Hr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ki.subVectors(this.c,this.b),Hr.subVectors(this.a,this.b),Ki.cross(Hr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return tr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return tr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Qo.subVectors(r,i),ea.subVectors(s,i),Mh.subVectors(e,i);const l=Qo.dot(Mh),c=ea.dot(Mh);if(l<=0&&c<=0)return t.copy(i);bh.subVectors(e,r);const u=Qo.dot(bh),d=ea.dot(bh);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Qo,o);Eh.subVectors(e,s);const h=Qo.dot(Eh),p=ea.dot(Eh);if(p>=0&&h<=p)return t.copy(s);const m=h*c-l*p;if(m<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(ea,a);const _=u*p-h*d;if(_<=0&&d-u>=0&&h-p>=0)return s0.subVectors(s,r),a=(d-u)/(d-u+(h-p)),t.copy(r).addScaledVector(s0,a);const g=1/(_+m+f);return o=m*g,a=f*g,t.copy(i).addScaledVector(Qo,o).addScaledVector(ea,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class zo{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zi):Zi.fromBufferAttribute(s,o),Zi.applyMatrix4(e.matrixWorld),this.expandByPoint(Zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zc.copy(i.boundingBox)),Zc.applyMatrix4(e.matrixWorld),this.union(Zc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zi),Zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(al),Jc.subVectors(this.max,al),ta.subVectors(e.a,al),na.subVectors(e.b,al),ia.subVectors(e.c,al),Ss.subVectors(na,ta),Ms.subVectors(ia,na),to.subVectors(ta,ia);let t=[0,-Ss.z,Ss.y,0,-Ms.z,Ms.y,0,-to.z,to.y,Ss.z,0,-Ss.x,Ms.z,0,-Ms.x,to.z,0,-to.x,-Ss.y,Ss.x,0,-Ms.y,Ms.x,0,-to.y,to.x,0];return!Ch(t,ta,na,ia,Jc)||(t=[1,0,0,0,1,0,0,0,1],!Ch(t,ta,na,ia,Jc))?!1:(Qc.crossVectors(Ss,Ms),t=[Qc.x,Qc.y,Qc.z],Ch(t,ta,na,ia,Jc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Gr=[new J,new J,new J,new J,new J,new J,new J,new J],Zi=new J,Zc=new zo,ta=new J,na=new J,ia=new J,Ss=new J,Ms=new J,to=new J,al=new J,Jc=new J,Qc=new J,no=new J;function Ch(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){no.fromArray(n,s);const a=r.x*Math.abs(no.x)+r.y*Math.abs(no.y)+r.z*Math.abs(no.z),l=e.dot(no),c=t.dot(no),u=i.dot(no);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const rn=new J,eu=new gt;let uC=0;class ar{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uC++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=X_,this.updateRanges=[],this.gpuType=nr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)eu.fromBufferAttribute(this,t),eu.applyMatrix3(e),this.setXY(t,eu.x,eu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=sl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=si(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=sl(t,this.array)),t}setX(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=sl(t,this.array)),t}setY(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=sl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=sl(t,this.array)),t}setW(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),i=si(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),i=si(i,this.array),r=si(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),i=si(i,this.array),r=si(r,this.array),s=si(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==X_&&(e.usage=this.usage),e}}class vS extends ar{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class xS extends ar{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class En extends ar{constructor(e,t,i){super(new Float32Array(e),t,i)}}const fC=new zo,ll=new J,Rh=new J;class Tc{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):fC.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ll.subVectors(e,this.center);const t=ll.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ll,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ll.copy(e.center).add(Rh)),this.expandByPoint(ll.copy(e.center).sub(Rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let hC=0;const Ii=new qt,Ph=new Ci,ra=new J,gi=new zo,cl=new zo,Sn=new J;class Yi extends Ya{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hC++}),this.uuid=Ec(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(XA(e)?xS:vS)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ot().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ii.makeRotationFromQuaternion(e),this.applyMatrix4(Ii),this}rotateX(e){return Ii.makeRotationX(e),this.applyMatrix4(Ii),this}rotateY(e){return Ii.makeRotationY(e),this.applyMatrix4(Ii),this}rotateZ(e){return Ii.makeRotationZ(e),this.applyMatrix4(Ii),this}translate(e,t,i){return Ii.makeTranslation(e,t,i),this.applyMatrix4(Ii),this}scale(e,t,i){return Ii.makeScale(e,t,i),this.applyMatrix4(Ii),this}lookAt(e){return Ph.lookAt(e),Ph.updateMatrix(),this.applyMatrix4(Ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ra).negate(),this.translate(ra.x,ra.y,ra.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new En(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];gi.setFromBufferAttribute(s),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const i=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];cl.setFromBufferAttribute(a),this.morphTargetsRelative?(Sn.addVectors(gi.min,cl.min),gi.expandByPoint(Sn),Sn.addVectors(gi.max,cl.max),gi.expandByPoint(Sn)):(gi.expandByPoint(cl.min),gi.expandByPoint(cl.max))}gi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Sn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Sn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Sn.fromBufferAttribute(a,c),l&&(ra.fromBufferAttribute(e,c),Sn.add(ra)),r=Math.max(r,i.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ar(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<i.count;S++)a[S]=new J,l[S]=new J;const c=new J,u=new J,d=new J,f=new gt,h=new gt,p=new gt,m=new J,_=new J;function g(S,M,P){c.fromBufferAttribute(i,S),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,P),f.fromBufferAttribute(s,S),h.fromBufferAttribute(s,M),p.fromBufferAttribute(s,P),u.sub(c),d.sub(c),h.sub(f),p.sub(f);const L=1/(h.x*p.y-p.x*h.y);isFinite(L)&&(m.copy(u).multiplyScalar(p.y).addScaledVector(d,-h.y).multiplyScalar(L),_.copy(d).multiplyScalar(h.x).addScaledVector(u,-p.x).multiplyScalar(L),a[S].add(m),a[M].add(m),a[P].add(m),l[S].add(_),l[M].add(_),l[P].add(_))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let S=0,M=v.length;S<M;++S){const P=v[S],L=P.start,R=P.count;for(let O=L,V=L+R;O<V;O+=3)g(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const y=new J,x=new J,E=new J,T=new J;function w(S){E.fromBufferAttribute(r,S),T.copy(E);const M=a[S];y.copy(M),y.sub(E.multiplyScalar(E.dot(M))).normalize(),x.crossVectors(T,M);const L=x.dot(l[S])<0?-1:1;o.setXYZW(S,y.x,y.y,y.z,L)}for(let S=0,M=v.length;S<M;++S){const P=v[S],L=P.start,R=P.count;for(let O=L,V=L+R;O<V;O+=3)w(e.getX(O+0)),w(e.getX(O+1)),w(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ar(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const r=new J,s=new J,o=new J,a=new J,l=new J,c=new J,u=new J,d=new J;if(e)for(let f=0,h=e.count;f<h;f+=3){const p=e.getX(f+0),m=e.getX(f+1),_=e.getX(f+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,_),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,_),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Sn.fromBufferAttribute(e,t),Sn.normalize(),e.setXYZ(t,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,p=0;for(let m=0,_=l.length;m<_;m++){a.isInterleavedBufferAttribute?h=l[m]*a.data.stride+a.offset:h=l[m]*u;for(let g=0;g<u;g++)f[p++]=c[h++]}return new ar(f,u,d)}if(this.index===null)return Je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let dC=0;class Cf extends Ya{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dC++}),this.uuid=Ec(),this.name="",this.type="Material",this.blending=Ra,this.side=Xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fd,this.blendDst=Bd,this.blendEquation=go,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Va,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=W_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$o,this.stencilZFail=$o,this.stencilZPass=$o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Je(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ra&&(i.blending=this.blending),this.side!==Xs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fd&&(i.blendSrc=this.blendSrc),this.blendDst!==Bd&&(i.blendDst=this.blendDst),this.blendEquation!==go&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Va&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==W_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$o&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$o&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$o&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Wr=new J,Dh=new J,tu=new J,bs=new J,Lh=new J,nu=new J,Ih=new J;class pC{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wr.copy(this.origin).addScaledVector(this.direction,t),Wr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Dh.copy(e).add(t).multiplyScalar(.5),tu.copy(t).sub(e).normalize(),bs.copy(this.origin).sub(Dh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(tu),a=bs.dot(this.direction),l=-bs.dot(tu),c=bs.lengthSq(),u=Math.abs(1-o*o);let d,f,h,p;if(u>0)if(d=o*l-a,f=o*a-l,p=s*u,d>=0)if(f>=-p)if(f<=p){const m=1/u;d*=m,f*=m,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Dh).addScaledVector(tu,f),h}intersectSphere(e,t){Wr.subVectors(e.center,this.origin);const i=Wr.dot(this.direction),r=Wr.dot(Wr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Wr)!==null}intersectTriangle(e,t,i,r,s){Lh.subVectors(t,e),nu.subVectors(i,e),Ih.crossVectors(Lh,nu);let o=this.direction.dot(Ih),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bs.subVectors(this.origin,e);const l=a*this.direction.dot(nu.crossVectors(bs,nu));if(l<0)return null;const c=a*this.direction.dot(Lh.cross(bs));if(c<0||l+c>o)return null;const u=-a*bs.dot(Ih);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yS extends Cf{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fs,this.combine=Qy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const o0=new qt,io=new pC,iu=new Tc,a0=new J,ru=new J,su=new J,ou=new J,Nh=new J,au=new J,l0=new J,lu=new J;class qi extends Ci{constructor(e=new Yi,t=new yS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){au.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Nh.fromBufferAttribute(d,e),o?au.addScaledVector(Nh,u):au.addScaledVector(Nh.sub(t),u))}t.add(au)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),iu.copy(i.boundingSphere),iu.applyMatrix4(s),io.copy(e.ray).recast(e.near),!(iu.containsPoint(io.origin)===!1&&(io.intersectSphere(iu,a0)===null||io.origin.distanceToSquared(a0)>(e.far-e.near)**2))&&(o0.copy(s).invert(),io.copy(e.ray).applyMatrix4(o0),!(i.boundingBox!==null&&io.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,io)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,m=f.length;p<m;p++){const _=f[p],g=o[_.materialIndex],v=Math.max(_.start,h.start),y=Math.min(a.count,Math.min(_.start+_.count,h.start+h.count));for(let x=v,E=y;x<E;x+=3){const T=a.getX(x),w=a.getX(x+1),S=a.getX(x+2);r=cu(this,g,e,i,c,u,d,T,w,S),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const p=Math.max(0,h.start),m=Math.min(a.count,h.start+h.count);for(let _=p,g=m;_<g;_+=3){const v=a.getX(_),y=a.getX(_+1),x=a.getX(_+2);r=cu(this,o,e,i,c,u,d,v,y,x),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,m=f.length;p<m;p++){const _=f[p],g=o[_.materialIndex],v=Math.max(_.start,h.start),y=Math.min(l.count,Math.min(_.start+_.count,h.start+h.count));for(let x=v,E=y;x<E;x+=3){const T=x,w=x+1,S=x+2;r=cu(this,g,e,i,c,u,d,T,w,S),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const p=Math.max(0,h.start),m=Math.min(l.count,h.start+h.count);for(let _=p,g=m;_<g;_+=3){const v=_,y=_+1,x=_+2;r=cu(this,o,e,i,c,u,d,v,y,x),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function mC(n,e,t,i,r,s,o,a){let l;if(e.side===hi?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Xs,a),l===null)return null;lu.copy(a),lu.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(lu);return c<t.near||c>t.far?null:{distance:c,point:lu.clone(),object:n}}function cu(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ru),n.getVertexPosition(l,su),n.getVertexPosition(c,ou);const u=mC(n,e,t,i,ru,su,ou,l0);if(u){const d=new J;tr.getBarycoord(l0,ru,su,ou,d),r&&(u.uv=tr.getInterpolatedAttribute(r,a,l,c,d,new gt)),s&&(u.uv1=tr.getInterpolatedAttribute(s,a,l,c,d,new gt)),o&&(u.normal=tr.getInterpolatedAttribute(o,a,l,c,d,new J),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new J,materialIndex:0};tr.getNormal(ru,su,ou,f.normal),u.face=f,u.barycoord=d}return u}class SS extends ri{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Pn,u=Pn,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class c0 extends ar{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const sa=new qt,u0=new qt,uu=[],f0=new zo,gC=new qt,ul=new qi,fl=new Tc;class zI extends qi{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new c0(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,gC)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zo),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,sa),f0.copy(e.boundingBox).applyMatrix4(sa),this.boundingBox.union(f0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tc),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,sa),fl.copy(e.boundingSphere).applyMatrix4(sa),this.boundingSphere.union(fl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(ul.geometry=this.geometry,ul.material=this.material,ul.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fl.copy(this.boundingSphere),fl.applyMatrix4(i),e.ray.intersectsSphere(fl)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,sa),u0.multiplyMatrices(i,sa),ul.matrixWorld=u0,ul.raycast(e,uu);for(let o=0,a=uu.length;o<a;o++){const l=uu[o];l.instanceId=s,l.object=this,t.push(l)}uu.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new c0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new SS(new Float32Array(r*this.count),r,this.count,Pm,nr));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Oh=new J,_C=new J,vC=new ot;class fo{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Oh.subVectors(i,t).cross(_C.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Oh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||vC.getNormalMatrix(e),r=this.coplanarPoint(Oh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ro=new Tc,xC=new gt(.5,.5),fu=new J;class MS{constructor(e=new fo,t=new fo,i=new fo,r=new fo,s=new fo,o=new fo){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Rr,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],h=s[7],p=s[8],m=s[9],_=s[10],g=s[11],v=s[12],y=s[13],x=s[14],E=s[15];if(r[0].setComponents(c-o,h-u,g-p,E-v).normalize(),r[1].setComponents(c+o,h+u,g+p,E+v).normalize(),r[2].setComponents(c+a,h+d,g+m,E+y).normalize(),r[3].setComponents(c-a,h-d,g-m,E-y).normalize(),i)r[4].setComponents(l,f,_,x).normalize(),r[5].setComponents(c-l,h-f,g-_,E-x).normalize();else if(r[4].setComponents(c-l,h-f,g-_,E-x).normalize(),t===Rr)r[5].setComponents(c+l,h+f,g+_,E+x).normalize();else if(t===af)r[5].setComponents(l,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ro.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ro.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ro)}intersectsSprite(e){ro.center.set(0,0,0);const t=xC.distanceTo(e.center);return ro.radius=.7071067811865476+t,ro.applyMatrix4(e.matrixWorld),this.intersectsSphere(ro)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(fu.x=r.normal.x>0?e.max.x:e.min.x,fu.y=r.normal.y>0?e.max.y:e.min.y,fu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bS extends ri{constructor(e=[],t=Oo,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fc extends ri{constructor(e,t,i=Or,r,s,o,a=Pn,l=Pn,c,u=us,d=1){if(u!==us&&u!==Mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Um(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class yC extends fc{constructor(e,t=Or,i=Oo,r,s,o=Pn,a=Pn,l,c=us){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ES extends ri{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wc extends Yi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;p("z","y","x",-1,-1,i,t,e,o,s,0),p("z","y","x",1,-1,i,t,-e,o,s,1),p("x","z","y",1,1,e,i,t,r,o,2),p("x","z","y",1,-1,e,i,-t,r,o,3),p("x","y","z",1,-1,e,t,i,r,s,4),p("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new En(c,3)),this.setAttribute("normal",new En(u,3)),this.setAttribute("uv",new En(d,2));function p(m,_,g,v,y,x,E,T,w,S,M){const P=x/w,L=E/S,R=x/2,O=E/2,V=T/2,X=w+1,z=S+1;let k=0,Y=0;const oe=new J;for(let F=0;F<z;F++){const de=F*L-O;for(let fe=0;fe<X;fe++){const Ie=fe*P-R;oe[m]=Ie*v,oe[_]=de*y,oe[g]=V,c.push(oe.x,oe.y,oe.z),oe[m]=0,oe[_]=0,oe[g]=T>0?1:-1,u.push(oe.x,oe.y,oe.z),d.push(fe/w),d.push(1-F/S),k+=1}}for(let F=0;F<S;F++)for(let de=0;de<w;de++){const fe=f+de+X*F,Ie=f+de+X*(F+1),He=f+(de+1)+X*(F+1),We=f+(de+1)+X*F;l.push(fe,Ie,We),l.push(Ie,He,We),Y+=6}a.addGroup(h,Y,M),h+=Y,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class TS extends Yi{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],u=t/2,d=Math.PI/2*e,f=t,h=2*d+f,p=i*2+s,m=r+1,_=new J,g=new J;for(let v=0;v<=p;v++){let y=0,x=0,E=0,T=0;if(v<=i){const M=v/i,P=M*Math.PI/2;x=-u-e*Math.cos(P),E=e*Math.sin(P),T=-e*Math.cos(P),y=M*d}else if(v<=i+s){const M=(v-i)/s;x=-u+M*t,E=e,T=0,y=d+M*f}else{const M=(v-i-s)/i,P=M*Math.PI/2;x=u+e*Math.sin(P),E=e*Math.cos(P),T=e*Math.sin(P),y=d+f+M*d}const w=Math.max(0,Math.min(1,y/h));let S=0;v===0?S=.5/r:v===p&&(S=-.5/r);for(let M=0;M<=r;M++){const P=M/r,L=P*Math.PI*2,R=Math.sin(L),O=Math.cos(L);g.x=-E*O,g.y=x,g.z=E*R,a.push(g.x,g.y,g.z),_.set(-E*O,T,E*R),_.normalize(),l.push(_.x,_.y,_.z),c.push(P+S,w)}if(v>0){const M=(v-1)*m;for(let P=0;P<r;P++){const L=M+P,R=M+P+1,O=v*m+P,V=v*m+P+1;o.push(L,R,O),o.push(R,V,O)}}}this.setIndex(o),this.setAttribute("position",new En(a,3)),this.setAttribute("normal",new En(l,3)),this.setAttribute("uv",new En(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new TS(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Fm extends Yi{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new En(s,3)),this.setAttribute("normal",new En(s.slice(),3)),this.setAttribute("uv",new En(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new J,x=new J,E=new J;for(let T=0;T<t.length;T+=3)h(t[T+0],y),h(t[T+1],x),h(t[T+2],E),l(y,x,E,v)}function l(v,y,x,E){const T=E+1,w=[];for(let S=0;S<=T;S++){w[S]=[];const M=v.clone().lerp(x,S/T),P=y.clone().lerp(x,S/T),L=T-S;for(let R=0;R<=L;R++)R===0&&S===T?w[S][R]=M:w[S][R]=M.clone().lerp(P,R/L)}for(let S=0;S<T;S++)for(let M=0;M<2*(T-S)-1;M++){const P=Math.floor(M/2);M%2===0?(f(w[S][P+1]),f(w[S+1][P]),f(w[S][P])):(f(w[S][P+1]),f(w[S+1][P+1]),f(w[S+1][P]))}}function c(v){const y=new J;for(let x=0;x<s.length;x+=3)y.x=s[x+0],y.y=s[x+1],y.z=s[x+2],y.normalize().multiplyScalar(v),s[x+0]=y.x,s[x+1]=y.y,s[x+2]=y.z}function u(){const v=new J;for(let y=0;y<s.length;y+=3){v.x=s[y+0],v.y=s[y+1],v.z=s[y+2];const x=_(v)/2/Math.PI+.5,E=g(v)/Math.PI+.5;o.push(x,1-E)}p(),d()}function d(){for(let v=0;v<o.length;v+=6){const y=o[v+0],x=o[v+2],E=o[v+4],T=Math.max(y,x,E),w=Math.min(y,x,E);T>.9&&w<.1&&(y<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),E<.2&&(o[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function h(v,y){const x=v*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function p(){const v=new J,y=new J,x=new J,E=new J,T=new gt,w=new gt,S=new gt;for(let M=0,P=0;M<s.length;M+=9,P+=6){v.set(s[M+0],s[M+1],s[M+2]),y.set(s[M+3],s[M+4],s[M+5]),x.set(s[M+6],s[M+7],s[M+8]),T.set(o[P+0],o[P+1]),w.set(o[P+2],o[P+3]),S.set(o[P+4],o[P+5]),E.copy(v).add(y).add(x).divideScalar(3);const L=_(E);m(T,P+0,v,L),m(w,P+2,y,L),m(S,P+4,x,L)}}function m(v,y,x,E){E<0&&v.x===1&&(o[y]=v.x-1),x.x===0&&x.z===0&&(o[y]=E/2/Math.PI+.5)}function _(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fm(e.vertices,e.indices,e.radius,e.detail)}}class Ac extends Yi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,h=[],p=[],m=[],_=[];for(let g=0;g<u;g++){const v=g*f-o;for(let y=0;y<c;y++){const x=y*d-s;p.push(x,-v,0),m.push(0,0,1),_.push(y/a),_.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){const y=v+c*g,x=v+c*(g+1),E=v+1+c*(g+1),T=v+1+c*g;h.push(y,x,T),h.push(x,E,T)}this.setIndex(h),this.setAttribute("position",new En(p,3)),this.setAttribute("normal",new En(m,3)),this.setAttribute("uv",new En(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.width,e.height,e.widthSegments,e.heightSegments)}}class wS extends Yi{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new J,f=new J,h=[],p=[],m=[],_=[];for(let g=0;g<=i;g++){const v=[],y=g/i;let x=0;g===0&&o===0?x=.5/t:g===i&&l===Math.PI&&(x=-.5/t);for(let E=0;E<=t;E++){const T=E/t;d.x=-e*Math.cos(r+T*s)*Math.sin(o+y*a),d.y=e*Math.cos(o+y*a),d.z=e*Math.sin(r+T*s)*Math.sin(o+y*a),p.push(d.x,d.y,d.z),f.copy(d).normalize(),m.push(f.x,f.y,f.z),_.push(T+x,1-y),v.push(c++)}u.push(v)}for(let g=0;g<i;g++)for(let v=0;v<t;v++){const y=u[g][v+1],x=u[g][v],E=u[g+1][v],T=u[g+1][v+1];(g!==0||o>0)&&h.push(y,x,T),(g!==i-1||l<Math.PI)&&h.push(x,E,T)}this.setIndex(h),this.setAttribute("position",new En(p,3)),this.setAttribute("normal",new En(m,3)),this.setAttribute("uv",new En(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wS(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class AS extends Fm{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new AS(e.radius,e.detail)}}function qa(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Kn(n){const e={};for(let t=0;t<n.length;t++){const i=qa(n[t]);for(const r in i)e[r]=i[r]}return e}function SC(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function CS(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const MC={clone:qa,merge:Kn};var bC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,EC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hr extends Cf{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bC,this.fragmentShader=EC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qa(e.uniforms),this.uniformsGroups=SC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class TC extends hr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wC extends Cf{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=UA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class AC extends Cf{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hu=new J,du=new $a,gr=new J;class RS extends Ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Rr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(hu,du,gr),gr.x===1&&gr.y===1&&gr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hu,du,gr.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(hu,du,gr),gr.x===1&&gr.y===1&&gr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hu,du,gr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Es=new J,h0=new gt,d0=new gt;class er extends RS{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wp*2*Math.atan(Math.tan(hh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Es.x,Es.y).multiplyScalar(-e/Es.z),Es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Es.x,Es.y).multiplyScalar(-e/Es.z)}getViewSize(e,t){return this.getViewBounds(e,h0,d0),t.subVectors(d0,h0)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hh*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Bm extends RS{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const oa=-90,aa=1;class CC extends Ci{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new er(oa,aa,e,t);r.layers=this.layers,this.add(r);const s=new er(oa,aa,e,t);s.layers=this.layers,this.add(s);const o=new er(oa,aa,e,t);o.layers=this.layers,this.add(o);const a=new er(oa,aa,e,t);a.layers=this.layers,this.add(a);const l=new er(oa,aa,e,t);l.layers=this.layers,this.add(l);const c=new er(oa,aa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Rr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===af)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class RC extends er{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class HI{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Je("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function p0(n,e,t,i){const r=PC(i);switch(t){case hS:return n*e;case Pm:return n*e/r.components*r.byteLength;case Dm:return n*e/r.components*r.byteLength;case Wa:return n*e*2/r.components*r.byteLength;case Lm:return n*e*2/r.components*r.byteLength;case dS:return n*e*3/r.components*r.byteLength;case ir:return n*e*4/r.components*r.byteLength;case Im:return n*e*4/r.components*r.byteLength;case Du:case Lu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Iu:case Nu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jd:case Zd:return Math.max(n,16)*Math.max(e,8)/4;case $d:case Kd:return Math.max(n,8)*Math.max(e,8)/2;case Jd:case Qd:case tp:case np:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ep:case ip:case rp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case op:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ap:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case lp:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case cp:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case up:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case fp:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case hp:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case dp:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case pp:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case mp:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case gp:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case _p:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case vp:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case xp:case yp:case Sp:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Mp:case bp:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ep:case Tp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function PC(n){switch(n){case ki:case lS:return{byteLength:1,components:1};case cc:case cS:case cs:return{byteLength:2,components:1};case Cm:case Rm:return{byteLength:2,components:4};case Or:case Am:case nr:return{byteLength:4,components:1};case uS:case fS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wm}}));typeof window<"u"&&(window.__THREE__?Je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wm);function PS(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function DC(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,p)=>h.start-p.start);let f=0;for(let h=1;h<d.length;h++){const p=d[f],m=d[h];m.start<=p.start+p.count+1?p.count=Math.max(p.count,m.start+m.count-p.start):(++f,d[f]=m)}d.length=f+1;for(let h=0,p=d.length;h<p;h++){const m=d[h];n.bufferSubData(c,m.start*u.BYTES_PER_ELEMENT,u,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var LC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,IC=`#ifdef USE_ALPHAHASH
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
#endif`,NC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,OC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,FC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,BC=`#ifdef USE_AOMAP
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
#endif`,kC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zC=`#ifdef USE_BATCHING
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
#endif`,HC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,VC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,GC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,XC=`#ifdef USE_IRIDESCENCE
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
#endif`,qC=`#ifdef USE_BUMPMAP
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
#endif`,YC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$C=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,JC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,QC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,eR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,tR=`#define PI 3.141592653589793
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
} // validated`,nR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,iR=`vec3 transformedNormal = objectNormal;
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
#endif`,rR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lR="gl_FragColor = linearToOutputTexel( gl_FragColor );",cR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uR=`#ifdef USE_ENVMAP
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
#endif`,fR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hR=`#ifdef USE_ENVMAP
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
#endif`,dR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pR=`#ifdef USE_ENVMAP
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
#endif`,mR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_R=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xR=`#ifdef USE_GRADIENTMAP
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
}`,yR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,SR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,MR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bR=`uniform bool receiveShadow;
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
#endif`,ER=`#ifdef USE_ENVMAP
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
#endif`,TR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RR=`PhysicalMaterial material;
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
#endif`,PR=`uniform sampler2D dfgLUT;
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
}`,DR=`
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
#endif`,LR=`#if defined( RE_IndirectDiffuse )
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
#endif`,IR=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,BR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,HR=`#if defined( USE_POINTS_UV )
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
#endif`,VR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YR=`#ifdef USE_MORPHTARGETS
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
#endif`,$R=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,KR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ZR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eP=`#ifdef USE_NORMALMAP
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
#endif`,tP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oP=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,aP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gP=`float getShadowMask() {
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
}`,_P=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vP=`#ifdef USE_SKINNING
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
#endif`,xP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yP=`#ifdef USE_SKINNING
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
#endif`,SP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,MP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EP=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,TP=`#ifdef USE_TRANSMISSION
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
#endif`,wP=`#ifdef USE_TRANSMISSION
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
#endif`,AP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LP=`uniform sampler2D t2D;
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
}`,IP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NP=`#ifdef ENVMAP_TYPE_CUBE
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
}`,OP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FP=`#include <common>
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
}`,BP=`#if DEPTH_PACKING == 3200
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
}`,kP=`#define DISTANCE
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
}`,zP=`#define DISTANCE
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
}`,HP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GP=`uniform float scale;
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
}`,WP=`uniform vec3 diffuse;
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
}`,XP=`#include <common>
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
}`,qP=`uniform vec3 diffuse;
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
}`,YP=`#define LAMBERT
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
}`,$P=`#define LAMBERT
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
}`,jP=`#define MATCAP
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
}`,KP=`#define MATCAP
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
}`,ZP=`#define NORMAL
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
}`,JP=`#define NORMAL
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
}`,QP=`#define PHONG
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
}`,eD=`#define PHONG
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
}`,tD=`#define STANDARD
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
}`,nD=`#define STANDARD
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
}`,iD=`#define TOON
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
}`,rD=`#define TOON
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
}`,sD=`uniform float size;
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
}`,oD=`uniform vec3 diffuse;
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
}`,aD=`#include <common>
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
}`,lD=`uniform vec3 color;
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
}`,cD=`uniform float rotation;
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
}`,uD=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:LC,alphahash_pars_fragment:IC,alphamap_fragment:NC,alphamap_pars_fragment:OC,alphatest_fragment:UC,alphatest_pars_fragment:FC,aomap_fragment:BC,aomap_pars_fragment:kC,batching_pars_vertex:zC,batching_vertex:HC,begin_vertex:VC,beginnormal_vertex:GC,bsdfs:WC,iridescence_fragment:XC,bumpmap_pars_fragment:qC,clipping_planes_fragment:YC,clipping_planes_pars_fragment:$C,clipping_planes_pars_vertex:jC,clipping_planes_vertex:KC,color_fragment:ZC,color_pars_fragment:JC,color_pars_vertex:QC,color_vertex:eR,common:tR,cube_uv_reflection_fragment:nR,defaultnormal_vertex:iR,displacementmap_pars_vertex:rR,displacementmap_vertex:sR,emissivemap_fragment:oR,emissivemap_pars_fragment:aR,colorspace_fragment:lR,colorspace_pars_fragment:cR,envmap_fragment:uR,envmap_common_pars_fragment:fR,envmap_pars_fragment:hR,envmap_pars_vertex:dR,envmap_physical_pars_fragment:ER,envmap_vertex:pR,fog_vertex:mR,fog_pars_vertex:gR,fog_fragment:_R,fog_pars_fragment:vR,gradientmap_pars_fragment:xR,lightmap_pars_fragment:yR,lights_lambert_fragment:SR,lights_lambert_pars_fragment:MR,lights_pars_begin:bR,lights_toon_fragment:TR,lights_toon_pars_fragment:wR,lights_phong_fragment:AR,lights_phong_pars_fragment:CR,lights_physical_fragment:RR,lights_physical_pars_fragment:PR,lights_fragment_begin:DR,lights_fragment_maps:LR,lights_fragment_end:IR,logdepthbuf_fragment:NR,logdepthbuf_pars_fragment:OR,logdepthbuf_pars_vertex:UR,logdepthbuf_vertex:FR,map_fragment:BR,map_pars_fragment:kR,map_particle_fragment:zR,map_particle_pars_fragment:HR,metalnessmap_fragment:VR,metalnessmap_pars_fragment:GR,morphinstance_vertex:WR,morphcolor_vertex:XR,morphnormal_vertex:qR,morphtarget_pars_vertex:YR,morphtarget_vertex:$R,normal_fragment_begin:jR,normal_fragment_maps:KR,normal_pars_fragment:ZR,normal_pars_vertex:JR,normal_vertex:QR,normalmap_pars_fragment:eP,clearcoat_normal_fragment_begin:tP,clearcoat_normal_fragment_maps:nP,clearcoat_pars_fragment:iP,iridescence_pars_fragment:rP,opaque_fragment:sP,packing:oP,premultiplied_alpha_fragment:aP,project_vertex:lP,dithering_fragment:cP,dithering_pars_fragment:uP,roughnessmap_fragment:fP,roughnessmap_pars_fragment:hP,shadowmap_pars_fragment:dP,shadowmap_pars_vertex:pP,shadowmap_vertex:mP,shadowmask_pars_fragment:gP,skinbase_vertex:_P,skinning_pars_vertex:vP,skinning_vertex:xP,skinnormal_vertex:yP,specularmap_fragment:SP,specularmap_pars_fragment:MP,tonemapping_fragment:bP,tonemapping_pars_fragment:EP,transmission_fragment:TP,transmission_pars_fragment:wP,uv_pars_fragment:AP,uv_pars_vertex:CP,uv_vertex:RP,worldpos_vertex:PP,background_vert:DP,background_frag:LP,backgroundCube_vert:IP,backgroundCube_frag:NP,cube_vert:OP,cube_frag:UP,depth_vert:FP,depth_frag:BP,distance_vert:kP,distance_frag:zP,equirect_vert:HP,equirect_frag:VP,linedashed_vert:GP,linedashed_frag:WP,meshbasic_vert:XP,meshbasic_frag:qP,meshlambert_vert:YP,meshlambert_frag:$P,meshmatcap_vert:jP,meshmatcap_frag:KP,meshnormal_vert:ZP,meshnormal_frag:JP,meshphong_vert:QP,meshphong_frag:eD,meshphysical_vert:tD,meshphysical_frag:nD,meshtoon_vert:iD,meshtoon_frag:rD,points_vert:sD,points_frag:oD,shadow_vert:aD,shadow_frag:lD,sprite_vert:cD,sprite_frag:uD},Ne={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Er={basic:{uniforms:Kn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Kn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Pt(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Kn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Kn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Kn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Pt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Kn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Kn([Ne.points,Ne.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Kn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Kn([Ne.common,Ne.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Kn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Kn([Ne.sprite,Ne.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:Kn([Ne.common,Ne.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:Kn([Ne.lights,Ne.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Er.physical={uniforms:Kn([Er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const pu={r:0,b:0,g:0},so=new fs,fD=new qt;function hD(n,e,t,i,r,s){const o=new Pt(0);let a=r===!0?0:1,l,c,u=null,d=0,f=null;function h(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){const x=v.backgroundBlurriness>0;y=e.get(y,x)}return y}function p(v){let y=!1;const x=h(v);x===null?_(o,a):x&&x.isColor&&(_(x,1),y=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,y){const x=h(y);x&&(x.isCubeTexture||x.mapping===Af)?(c===void 0&&(c=new qi(new wc(1,1,1),new hr({name:"BackgroundCubeMaterial",uniforms:qa(Er.backgroundCube.uniforms),vertexShader:Er.backgroundCube.vertexShader,fragmentShader:Er.backgroundCube.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),so.copy(y.backgroundRotation),so.x*=-1,so.y*=-1,so.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(so.y*=-1,so.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(fD.makeRotationFromEuler(so)),c.material.toneMapped=mt.getTransfer(x.colorSpace)!==Rt,(u!==x||d!==x.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new qi(new Ac(2,2),new hr({name:"BackgroundMaterial",uniforms:qa(Er.background.uniforms),vertexShader:Er.background.vertexShader,fragmentShader:Er.background.fragmentShader,side:Xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=mt.getTransfer(x.colorSpace)!==Rt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function _(v,y){v.getRGB(pu,CS(n)),t.buffers.color.setClear(pu.r,pu.g,pu.b,y,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),a=y,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,_(o,a)},render:p,addToRenderList:m,dispose:g}}function dD(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(L,R,O,V,X){let z=!1;const k=d(L,V,O,R);s!==k&&(s=k,c(s.object)),z=h(L,V,O,X),z&&p(L,V,O,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,x(L,R,O,V),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(L){return n.bindVertexArray(L)}function u(L){return n.deleteVertexArray(L)}function d(L,R,O,V){const X=V.wireframe===!0;let z=i[R.id];z===void 0&&(z={},i[R.id]=z);const k=L.isInstancedMesh===!0?L.id:0;let Y=z[k];Y===void 0&&(Y={},z[k]=Y);let oe=Y[O.id];oe===void 0&&(oe={},Y[O.id]=oe);let F=oe[X];return F===void 0&&(F=f(l()),oe[X]=F),F}function f(L){const R=[],O=[],V=[];for(let X=0;X<t;X++)R[X]=0,O[X]=0,V[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:O,attributeDivisors:V,object:L,attributes:{},index:null}}function h(L,R,O,V){const X=s.attributes,z=R.attributes;let k=0;const Y=O.getAttributes();for(const oe in Y)if(Y[oe].location>=0){const de=X[oe];let fe=z[oe];if(fe===void 0&&(oe==="instanceMatrix"&&L.instanceMatrix&&(fe=L.instanceMatrix),oe==="instanceColor"&&L.instanceColor&&(fe=L.instanceColor)),de===void 0||de.attribute!==fe||fe&&de.data!==fe.data)return!0;k++}return s.attributesNum!==k||s.index!==V}function p(L,R,O,V){const X={},z=R.attributes;let k=0;const Y=O.getAttributes();for(const oe in Y)if(Y[oe].location>=0){let de=z[oe];de===void 0&&(oe==="instanceMatrix"&&L.instanceMatrix&&(de=L.instanceMatrix),oe==="instanceColor"&&L.instanceColor&&(de=L.instanceColor));const fe={};fe.attribute=de,de&&de.data&&(fe.data=de.data),X[oe]=fe,k++}s.attributes=X,s.attributesNum=k,s.index=V}function m(){const L=s.newAttributes;for(let R=0,O=L.length;R<O;R++)L[R]=0}function _(L){g(L,0)}function g(L,R){const O=s.newAttributes,V=s.enabledAttributes,X=s.attributeDivisors;O[L]=1,V[L]===0&&(n.enableVertexAttribArray(L),V[L]=1),X[L]!==R&&(n.vertexAttribDivisor(L,R),X[L]=R)}function v(){const L=s.newAttributes,R=s.enabledAttributes;for(let O=0,V=R.length;O<V;O++)R[O]!==L[O]&&(n.disableVertexAttribArray(O),R[O]=0)}function y(L,R,O,V,X,z,k){k===!0?n.vertexAttribIPointer(L,R,O,X,z):n.vertexAttribPointer(L,R,O,V,X,z)}function x(L,R,O,V){m();const X=V.attributes,z=O.getAttributes(),k=R.defaultAttributeValues;for(const Y in z){const oe=z[Y];if(oe.location>=0){let F=X[Y];if(F===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(F=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(F=L.instanceColor)),F!==void 0){const de=F.normalized,fe=F.itemSize,Ie=e.get(F);if(Ie===void 0)continue;const He=Ie.buffer,We=Ie.type,re=Ie.bytesPerElement,W=We===n.INT||We===n.UNSIGNED_INT||F.gpuType===Am;if(F.isInterleavedBufferAttribute){const K=F.data,le=K.stride,he=F.offset;if(K.isInstancedInterleavedBuffer){for(let ye=0;ye<oe.locationSize;ye++)g(oe.location+ye,K.meshPerAttribute);L.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ye=0;ye<oe.locationSize;ye++)_(oe.location+ye);n.bindBuffer(n.ARRAY_BUFFER,He);for(let ye=0;ye<oe.locationSize;ye++)y(oe.location+ye,fe/oe.locationSize,We,de,le*re,(he+fe/oe.locationSize*ye)*re,W)}else{if(F.isInstancedBufferAttribute){for(let K=0;K<oe.locationSize;K++)g(oe.location+K,F.meshPerAttribute);L.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let K=0;K<oe.locationSize;K++)_(oe.location+K);n.bindBuffer(n.ARRAY_BUFFER,He);for(let K=0;K<oe.locationSize;K++)y(oe.location+K,fe/oe.locationSize,We,de,fe*re,fe/oe.locationSize*K*re,W)}}else if(k!==void 0){const de=k[Y];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(oe.location,de);break;case 3:n.vertexAttrib3fv(oe.location,de);break;case 4:n.vertexAttrib4fv(oe.location,de);break;default:n.vertexAttrib1fv(oe.location,de)}}}}v()}function E(){M();for(const L in i){const R=i[L];for(const O in R){const V=R[O];for(const X in V){const z=V[X];for(const k in z)u(z[k].object),delete z[k];delete V[X]}}delete i[L]}}function T(L){if(i[L.id]===void 0)return;const R=i[L.id];for(const O in R){const V=R[O];for(const X in V){const z=V[X];for(const k in z)u(z[k].object),delete z[k];delete V[X]}}delete i[L.id]}function w(L){for(const R in i){const O=i[R];for(const V in O){const X=O[V];if(X[L.id]===void 0)continue;const z=X[L.id];for(const k in z)u(z[k].object),delete z[k];delete X[L.id]}}}function S(L){for(const R in i){const O=i[R],V=L.isInstancedMesh===!0?L.id:0,X=O[V];if(X!==void 0){for(const z in X){const k=X[z];for(const Y in k)u(k[Y].object),delete k[Y];delete X[z]}delete O[V],Object.keys(O).length===0&&delete i[R]}}}function M(){P(),o=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:M,resetDefaultState:P,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:w,initAttributes:m,enableAttribute:_,disableUnusedAttributes:v}}function pD(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let p=0;p<d;p++)h+=u[p];t.update(h,i,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<c.length;p++)o(c[p],u[p],f[p]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let p=0;for(let m=0;m<d;m++)p+=u[m]*f[m];t.update(p,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function mD(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==ir&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const S=w===cs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ki&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==nr&&!S)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Je("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,maxSamples:E,samples:T}}function gD(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new fo,a=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const p=d.clippingPlanes,m=d.clipIntersection,_=d.clipShadows,g=n.get(d);if(!r||p===null||p.length===0||s&&!_)s?u(null):c();else{const v=s?0:i,y=v*4;let x=g.clippingState||null;l.value=x,x=u(p,f,y,h);for(let E=0;E!==y;++E)x[E]=t[E];g.clippingState=x,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,p){const m=d!==null?d.length:0;let _=null;if(m!==0){if(_=l.value,p!==!0||_===null){const g=h+m*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(_===null||_.length<g)&&(_=new Float32Array(g));for(let y=0,x=h;y!==m;++y,x+=4)o.copy(d[y]).applyMatrix4(v,a),o.normal.toArray(_,x),_[x+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,_}}const Os=4,m0=[.125,.215,.35,.446,.526,.582],_o=20,_D=256,hl=new Bm,g0=new Pt;let Uh=null,Fh=0,Bh=0,kh=!1;const vD=new J;class _0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=vD}=s;Uh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=y0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=x0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Uh,Fh,Bh),this._renderer.xr.enabled=kh,e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oo||e.mapping===Ga?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:cs,format:ir,colorSpace:Xa,depthBuffer:!1},r=v0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=v0(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=xD(s)),this._blurMaterial=SD(s,e,t),this._ggxMaterial=yD(s,e,t)}return r}_compileMaterial(e){const t=new qi(new Yi,e);this._renderer.compile(t,hl)}_sceneToCubeUV(e,t,i,r,s){const l=new er(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(g0),d.toneMapping=Dr,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qi(new wc,new yS({name:"PMREM.Background",side:hi,depthWrite:!1,depthTest:!1})));const m=this._backgroundBox,_=m.material;let g=!1;const v=e.background;v?v.isColor&&(_.color.copy(v),e.background=null,g=!0):(_.color.copy(g0),g=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const E=this._cubeSize;la(r,x*E,y>2?E:0,E,E),d.setRenderTarget(r),g&&d.render(m,l),d.render(e,l)}d.toneMapping=h,d.autoClear=f,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Oo||e.mapping===Ga;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=y0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=x0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;la(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,hl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,h=d*f,{_lodMax:p}=this,m=this._sizeLods[i],_=3*m*(i>p-Os?i-p+Os:0),g=4*(this._cubeSize-m);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=p-t,la(s,_,g,3*m,2*m),r.setRenderTarget(s),r.render(a,hl),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-i,la(e,_,g,3*m,2*m),r.setRenderTarget(e),r.render(a,hl)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&xt("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const f=c.uniforms,h=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*_o-1),m=s/p,_=isFinite(s)?1+Math.floor(u*m):_o;_>_o&&Je(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${_o}`);const g=[];let v=0;for(let w=0;w<_o;++w){const S=w/m,M=Math.exp(-S*S/2);g.push(M),w===0?v+=M:w<_&&(v+=2*M)}for(let w=0;w<g.length;w++)g[w]=g[w]/v;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=p,f.mipInt.value=y-i;const x=this._sizeLods[r],E=3*x*(r>y-Os?r-y+Os:0),T=4*(this._cubeSize-x);la(t,E,T,3*x,2*x),l.setRenderTarget(t),l.render(d,hl)}}function xD(n){const e=[],t=[],i=[];let r=n;const s=n-Os+1+m0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Os?l=m0[o-n+Os-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,p=6,m=3,_=2,g=1,v=new Float32Array(m*p*h),y=new Float32Array(_*p*h),x=new Float32Array(g*p*h);for(let T=0;T<h;T++){const w=T%3*2/3-1,S=T>2?0:-1,M=[w,S,0,w+2/3,S,0,w+2/3,S+1,0,w,S,0,w+2/3,S+1,0,w,S+1,0];v.set(M,m*p*T),y.set(f,_*p*T);const P=[T,T,T,T,T,T];x.set(P,g*p*T)}const E=new Yi;E.setAttribute("position",new ar(v,m)),E.setAttribute("uv",new ar(y,_)),E.setAttribute("faceIndex",new ar(x,g)),i.push(new qi(E,null)),r>Os&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function v0(n,e,t){const i=new Lr(n,e,t);return i.texture.mapping=Af,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function la(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function yD(n,e,t){return new hr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_D,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rf(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function SD(n,e,t){const i=new Float32Array(_o),r=new J(0,1,0);return new hr({name:"SphericalGaussianBlur",defines:{n:_o,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rf(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function x0(){return new hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rf(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function y0(){return new hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Rf(){return`

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
	`}class DS extends Lr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new bS(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wc(5,5,5),s=new hr({name:"CubemapFromEquirect",uniforms:qa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hi,blending:ns});s.uniforms.tEquirect.value=t;const o=new qi(r,s),a=t.minFilter;return t.minFilter===So&&(t.minFilter=Wn),new CC(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}function MD(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,h=!1){return f==null?null:h?o(f):s(f)}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===ch||h===uh)if(e.has(f)){const p=e.get(f).texture;return a(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new DS(p.height);return m.fromEquirectangularTexture(n,f),e.set(f,m),f.addEventListener("dispose",c),a(m.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const h=f.mapping,p=h===ch||h===uh,m=h===Oo||h===Ga;if(p||m){let _=t.get(f);const g=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return i===null&&(i=new _0(n)),_=p?i.fromEquirectangular(f,_):i.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),_.texture;if(_!==void 0)return _.texture;{const v=f.image;return p&&v&&v.height>0||m&&v&&l(v)?(i===null&&(i=new _0(n)),_=p?i.fromEquirectangular(f):i.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),f.addEventListener("dispose",u),_.texture):null}}}return f}function a(f,h){return h===ch?f.mapping=Oo:h===uh&&(f.mapping=Ga),f}function l(f){let h=0;const p=6;for(let m=0;m<p;m++)f[m]!==void 0&&h++;return h===p}function c(f){const h=f.target;h.removeEventListener("dispose",c);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function bD(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&cf("WebGLRenderer: "+i+" extension not supported."),r}}}function ED(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete r[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],n.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,p=d.attributes.position;let m=0;if(p===void 0)return;if(h!==null){const v=h.array;m=h.version;for(let y=0,x=v.length;y<x;y+=3){const E=v[y+0],T=v[y+1],w=v[y+2];f.push(E,T,T,w,w,E)}}else{const v=p.array;m=p.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const E=y+0,T=y+1,w=y+2;f.push(E,T,T,w,w,E)}}const _=new(p.count>=65535?xS:vS)(f,1);_.version=m;const g=s.get(d);g&&e.remove(g),s.set(d,_)}function u(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function TD(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function c(f,h,p){p!==0&&(n.drawElementsInstanced(i,h,s,f*o,p),t.update(h,i,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,p);let _=0;for(let g=0;g<p;g++)_+=h[g];t.update(_,i,1)}function d(f,h,p,m){if(p===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<f.length;g++)c(f[g]/o,h[g],m[g]);else{_.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,m,0,p);let g=0;for(let v=0;v<p;v++)g+=h[v]*m[v];t.update(g,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function wD(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:xt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function AD(n,e,t){const i=new WeakMap,r=new tn;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let M=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();const h=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;h===!0&&(y=1),p===!0&&(y=2),m===!0&&(y=3);let x=a.attributes.position.count*y,E=1;x>e.maxTextureSize&&(E=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const T=new Float32Array(x*E*4*d),w=new mS(T,x,E,d);w.type=nr,w.needsUpdate=!0;const S=y*4;for(let P=0;P<d;P++){const L=_[P],R=g[P],O=v[P],V=x*E*4*P;for(let X=0;X<L.count;X++){const z=X*S;h===!0&&(r.fromBufferAttribute(L,X),T[V+z+0]=r.x,T[V+z+1]=r.y,T[V+z+2]=r.z,T[V+z+3]=0),p===!0&&(r.fromBufferAttribute(R,X),T[V+z+4]=r.x,T[V+z+5]=r.y,T[V+z+6]=r.z,T[V+z+7]=0),m===!0&&(r.fromBufferAttribute(O,X),T[V+z+8]=r.x,T[V+z+9]=r.y,T[V+z+10]=r.z,T[V+z+11]=O.itemSize===4?r.w:1)}}f={count:d,texture:w,size:new gt(x,E)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let h=0;for(let m=0;m<c.length;m++)h+=c[m];const p=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function CD(n,e,t,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const RD={[eS]:"LINEAR_TONE_MAPPING",[tS]:"REINHARD_TONE_MAPPING",[nS]:"CINEON_TONE_MAPPING",[iS]:"ACES_FILMIC_TONE_MAPPING",[sS]:"AGX_TONE_MAPPING",[oS]:"NEUTRAL_TONE_MAPPING",[rS]:"CUSTOM_TONE_MAPPING"};function PD(n,e,t,i,r){const s=new Lr(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),o=new Lr(e,t,{type:cs,depthBuffer:!1,stencilBuffer:!1}),a=new Yi;a.setAttribute("position",new En([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new En([0,2,0,0,2,0],2));const l=new TC({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new qi(a,l),u=new Bm(-1,1,1,-1,0,1);let d=null,f=null,h=!1,p,m=null,_=[],g=!1;this.setSize=function(v,y){s.setSize(v,y),o.setSize(v,y);for(let x=0;x<_.length;x++){const E=_[x];E.setSize&&E.setSize(v,y)}},this.setEffects=function(v){_=v,g=_.length>0&&_[0].isRenderPass===!0;const y=s.width,x=s.height;for(let E=0;E<_.length;E++){const T=_[E];T.setSize&&T.setSize(y,x)}},this.begin=function(v,y){if(h||v.toneMapping===Dr&&_.length===0)return!1;if(m=y,y!==null){const x=y.width,E=y.height;(s.width!==x||s.height!==E)&&this.setSize(x,E)}return g===!1&&v.setRenderTarget(s),p=v.toneMapping,v.toneMapping=Dr,!0},this.hasRenderPass=function(){return g},this.end=function(v,y){v.toneMapping=p,h=!0;let x=s,E=o;for(let T=0;T<_.length;T++){const w=_[T];if(w.enabled!==!1&&(w.render(v,E,x,y),w.needsSwap!==!1)){const S=x;x=E,E=S}}if(d!==v.outputColorSpace||f!==v.toneMapping){d=v.outputColorSpace,f=v.toneMapping,l.defines={},mt.getTransfer(d)===Rt&&(l.defines.SRGB_TRANSFER="");const T=RD[f];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=x.texture,v.setRenderTarget(m),v.render(c,u),m=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const LS=new ri,Ap=new fc(1,1),IS=new mS,NS=new tC,OS=new bS,S0=[],M0=[],b0=new Float32Array(16),E0=new Float32Array(9),T0=new Float32Array(4);function ja(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=S0[r];if(s===void 0&&(s=new Float32Array(r),S0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function _n(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function vn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Pf(n,e){let t=M0[e];t===void 0&&(t=new Int32Array(e),M0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function DD(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function LD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;n.uniform2fv(this.addr,e),vn(t,e)}}function ID(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_n(t,e))return;n.uniform3fv(this.addr,e),vn(t,e)}}function ND(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;n.uniform4fv(this.addr,e),vn(t,e)}}function OD(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_n(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(_n(t,i))return;T0.set(i),n.uniformMatrix2fv(this.addr,!1,T0),vn(t,i)}}function UD(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_n(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(_n(t,i))return;E0.set(i),n.uniformMatrix3fv(this.addr,!1,E0),vn(t,i)}}function FD(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_n(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(_n(t,i))return;b0.set(i),n.uniformMatrix4fv(this.addr,!1,b0),vn(t,i)}}function BD(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function kD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;n.uniform2iv(this.addr,e),vn(t,e)}}function zD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;n.uniform3iv(this.addr,e),vn(t,e)}}function HD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;n.uniform4iv(this.addr,e),vn(t,e)}}function VD(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function GD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;n.uniform2uiv(this.addr,e),vn(t,e)}}function WD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;n.uniform3uiv(this.addr,e),vn(t,e)}}function XD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;n.uniform4uiv(this.addr,e),vn(t,e)}}function qD(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Ap.compareFunction=t.isReversedDepthBuffer()?Om:Nm,s=Ap):s=LS,t.setTexture2D(e||s,r)}function YD(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||NS,r)}function $D(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||OS,r)}function jD(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||IS,r)}function KD(n){switch(n){case 5126:return DD;case 35664:return LD;case 35665:return ID;case 35666:return ND;case 35674:return OD;case 35675:return UD;case 35676:return FD;case 5124:case 35670:return BD;case 35667:case 35671:return kD;case 35668:case 35672:return zD;case 35669:case 35673:return HD;case 5125:return VD;case 36294:return GD;case 36295:return WD;case 36296:return XD;case 35678:case 36198:case 36298:case 36306:case 35682:return qD;case 35679:case 36299:case 36307:return YD;case 35680:case 36300:case 36308:case 36293:return $D;case 36289:case 36303:case 36311:case 36292:return jD}}function ZD(n,e){n.uniform1fv(this.addr,e)}function JD(n,e){const t=ja(e,this.size,2);n.uniform2fv(this.addr,t)}function QD(n,e){const t=ja(e,this.size,3);n.uniform3fv(this.addr,t)}function eL(n,e){const t=ja(e,this.size,4);n.uniform4fv(this.addr,t)}function tL(n,e){const t=ja(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function nL(n,e){const t=ja(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function iL(n,e){const t=ja(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function rL(n,e){n.uniform1iv(this.addr,e)}function sL(n,e){n.uniform2iv(this.addr,e)}function oL(n,e){n.uniform3iv(this.addr,e)}function aL(n,e){n.uniform4iv(this.addr,e)}function lL(n,e){n.uniform1uiv(this.addr,e)}function cL(n,e){n.uniform2uiv(this.addr,e)}function uL(n,e){n.uniform3uiv(this.addr,e)}function fL(n,e){n.uniform4uiv(this.addr,e)}function hL(n,e,t){const i=this.cache,r=e.length,s=Pf(t,r);_n(i,s)||(n.uniform1iv(this.addr,s),vn(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=Ap:o=LS;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function dL(n,e,t){const i=this.cache,r=e.length,s=Pf(t,r);_n(i,s)||(n.uniform1iv(this.addr,s),vn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||NS,s[o])}function pL(n,e,t){const i=this.cache,r=e.length,s=Pf(t,r);_n(i,s)||(n.uniform1iv(this.addr,s),vn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||OS,s[o])}function mL(n,e,t){const i=this.cache,r=e.length,s=Pf(t,r);_n(i,s)||(n.uniform1iv(this.addr,s),vn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||IS,s[o])}function gL(n){switch(n){case 5126:return ZD;case 35664:return JD;case 35665:return QD;case 35666:return eL;case 35674:return tL;case 35675:return nL;case 35676:return iL;case 5124:case 35670:return rL;case 35667:case 35671:return sL;case 35668:case 35672:return oL;case 35669:case 35673:return aL;case 5125:return lL;case 36294:return cL;case 36295:return uL;case 36296:return fL;case 35678:case 36198:case 36298:case 36306:case 35682:return hL;case 35679:case 36299:case 36307:return dL;case 35680:case 36300:case 36308:case 36293:return pL;case 36289:case 36303:case 36311:case 36292:return mL}}class _L{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=KD(t.type)}}class vL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gL(t.type)}}class xL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const zh=/(\w+)(\])?(\[|\.)?/g;function w0(n,e){n.seq.push(e),n.map[e.id]=e}function yL(n,e,t){const i=n.name,r=i.length;for(zh.lastIndex=0;;){const s=zh.exec(i),o=zh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){w0(t,c===void 0?new _L(a,n,e):new vL(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new xL(a),w0(t,d)),t=d}}}class Ou{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);yL(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function A0(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const SL=37297;let ML=0;function bL(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const C0=new ot;function EL(n){mt._getMatrix(C0,mt.workingColorSpace,n);const e=`mat3( ${C0.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(n)){case of:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return Je("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function R0(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+bL(n.getShaderSource(e),a)}else return s}function TL(n,e){const t=EL(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const wL={[eS]:"Linear",[tS]:"Reinhard",[nS]:"Cineon",[iS]:"ACESFilmic",[sS]:"AgX",[oS]:"Neutral",[rS]:"Custom"};function AL(n,e){const t=wL[e];return t===void 0?(Je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const mu=new J;function CL(){mt.getLuminanceCoefficients(mu);const n=mu.x.toFixed(4),e=mu.y.toFixed(4),t=mu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RL(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bl).join(`
`)}function PL(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function DL(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function bl(n){return n!==""}function P0(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function D0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const LL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cp(n){return n.replace(LL,NL)}const IL=new Map;function NL(n,e){let t=at[e];if(t===void 0){const i=IL.get(e);if(i!==void 0)t=at[i],Je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Cp(t)}const OL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function L0(n){return n.replace(OL,UL)}function UL(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function I0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const FL={[Pu]:"SHADOWMAP_TYPE_PCF",[Ml]:"SHADOWMAP_TYPE_VSM"};function BL(n){return FL[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const kL={[Oo]:"ENVMAP_TYPE_CUBE",[Ga]:"ENVMAP_TYPE_CUBE",[Af]:"ENVMAP_TYPE_CUBE_UV"};function zL(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":kL[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const HL={[Ga]:"ENVMAP_MODE_REFRACTION"};function VL(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":HL[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const GL={[Qy]:"ENVMAP_BLENDING_MULTIPLY",[IA]:"ENVMAP_BLENDING_MIX",[NA]:"ENVMAP_BLENDING_ADD"};function WL(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":GL[n.combine]||"ENVMAP_BLENDING_NONE"}function XL(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function qL(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=BL(t),c=zL(t),u=VL(t),d=WL(t),f=XL(t),h=RL(t),p=PL(s),m=r.createProgram();let _,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(bl).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(bl).join(`
`),g.length>0&&(g+=`
`)):(_=[I0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bl).join(`
`),g=[I0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dr?"#define TONE_MAPPING":"",t.toneMapping!==Dr?at.tonemapping_pars_fragment:"",t.toneMapping!==Dr?AL("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,TL("linearToOutputTexel",t.outputColorSpace),CL(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bl).join(`
`)),o=Cp(o),o=P0(o,t),o=D0(o,t),a=Cp(a),a=P0(a,t),a=D0(a,t),o=L0(o),a=L0(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,_=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===q_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===q_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=v+_+o,x=v+g+a,E=A0(r,r.VERTEX_SHADER,y),T=A0(r,r.FRAGMENT_SHADER,x);r.attachShader(m,E),r.attachShader(m,T),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function w(L){if(n.debug.checkShaderErrors){const R=r.getProgramInfoLog(m)||"",O=r.getShaderInfoLog(E)||"",V=r.getShaderInfoLog(T)||"",X=R.trim(),z=O.trim(),k=V.trim();let Y=!0,oe=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,E,T);else{const F=R0(r,E,"vertex"),de=R0(r,T,"fragment");xt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+X+`
`+F+`
`+de)}else X!==""?Je("WebGLProgram: Program Info Log:",X):(z===""||k==="")&&(oe=!1);oe&&(L.diagnostics={runnable:Y,programLog:X,vertexShader:{log:z,prefix:_},fragmentShader:{log:k,prefix:g}})}r.deleteShader(E),r.deleteShader(T),S=new Ou(r,m),M=DL(r,m)}let S;this.getUniforms=function(){return S===void 0&&w(this),S};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(m,SL)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ML++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=T,this}let YL=0;class $L{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new jL(e),t.set(e,i)),i}}class jL{constructor(e){this.id=YL++,this.code=e,this.usedTimes=0}}function KL(n,e,t,i,r,s){const o=new gS,a=new $L,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,P,L,R){const O=L.fog,V=R.geometry,X=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?L.environment:null,z=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,k=e.get(S.envMap||X,z),Y=k&&k.mapping===Af?k.image.height:null,oe=h[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&Je("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const F=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,de=F!==void 0?F.length:0;let fe=0;V.morphAttributes.position!==void 0&&(fe=1),V.morphAttributes.normal!==void 0&&(fe=2),V.morphAttributes.color!==void 0&&(fe=3);let Ie,He,We,re;if(oe){const Oe=Er[oe];Ie=Oe.vertexShader,He=Oe.fragmentShader}else Ie=S.vertexShader,He=S.fragmentShader,a.update(S),We=a.getVertexShaderID(S),re=a.getFragmentShaderID(S);const W=n.getRenderTarget(),K=n.state.buffers.depth.getReversed(),le=R.isInstancedMesh===!0,he=R.isBatchedMesh===!0,ye=!!S.map,N=!!S.matcap,I=!!k,G=!!S.aoMap,Q=!!S.lightMap,Z=!!S.bumpMap,U=!!S.normalMap,D=!!S.displacementMap,pe=!!S.emissiveMap,ce=!!S.metalnessMap,se=!!S.roughnessMap,ue=S.anisotropy>0,C=S.clearcoat>0,b=S.dispersion>0,B=S.iridescence>0,j=S.sheen>0,ne=S.transmission>0,$=ue&&!!S.anisotropyMap,Me=C&&!!S.clearcoatMap,me=C&&!!S.clearcoatNormalMap,Ue=C&&!!S.clearcoatRoughnessMap,Te=B&&!!S.iridescenceMap,ge=B&&!!S.iridescenceThicknessMap,ve=j&&!!S.sheenColorMap,Ee=j&&!!S.sheenRoughnessMap,Re=!!S.specularMap,we=!!S.specularColorMap,je=!!S.specularIntensityMap,H=ne&&!!S.transmissionMap,be=ne&&!!S.thicknessMap,xe=!!S.gradientMap,Pe=!!S.alphaMap,_e=S.alphaTest>0,ae=!!S.alphaHash,Fe=!!S.extensions;let qe=Dr;S.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(qe=n.toneMapping);const _t={shaderID:oe,shaderType:S.type,shaderName:S.name,vertexShader:Ie,fragmentShader:He,defines:S.defines,customVertexShaderID:We,customFragmentShaderID:re,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:he,batchingColor:he&&R._colorsTexture!==null,instancing:le,instancingColor:le&&R.instanceColor!==null,instancingMorph:le&&R.morphTexture!==null,outputColorSpace:W===null?n.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Xa,alphaToCoverage:!!S.alphaToCoverage,map:ye,matcap:N,envMap:I,envMapMode:I&&k.mapping,envMapCubeUVHeight:Y,aoMap:G,lightMap:Q,bumpMap:Z,normalMap:U,displacementMap:D,emissiveMap:pe,normalMapObjectSpace:U&&S.normalMapType===BA,normalMapTangentSpace:U&&S.normalMapType===FA,metalnessMap:ce,roughnessMap:se,anisotropy:ue,anisotropyMap:$,clearcoat:C,clearcoatMap:Me,clearcoatNormalMap:me,clearcoatRoughnessMap:Ue,dispersion:b,iridescence:B,iridescenceMap:Te,iridescenceThicknessMap:ge,sheen:j,sheenColorMap:ve,sheenRoughnessMap:Ee,specularMap:Re,specularColorMap:we,specularIntensityMap:je,transmission:ne,transmissionMap:H,thicknessMap:be,gradientMap:xe,opaque:S.transparent===!1&&S.blending===Ra&&S.alphaToCoverage===!1,alphaMap:Pe,alphaTest:_e,alphaHash:ae,combine:S.combine,mapUv:ye&&p(S.map.channel),aoMapUv:G&&p(S.aoMap.channel),lightMapUv:Q&&p(S.lightMap.channel),bumpMapUv:Z&&p(S.bumpMap.channel),normalMapUv:U&&p(S.normalMap.channel),displacementMapUv:D&&p(S.displacementMap.channel),emissiveMapUv:pe&&p(S.emissiveMap.channel),metalnessMapUv:ce&&p(S.metalnessMap.channel),roughnessMapUv:se&&p(S.roughnessMap.channel),anisotropyMapUv:$&&p(S.anisotropyMap.channel),clearcoatMapUv:Me&&p(S.clearcoatMap.channel),clearcoatNormalMapUv:me&&p(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&p(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&p(S.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&p(S.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&p(S.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&p(S.sheenRoughnessMap.channel),specularMapUv:Re&&p(S.specularMap.channel),specularColorMapUv:we&&p(S.specularColorMap.channel),specularIntensityMapUv:je&&p(S.specularIntensityMap.channel),transmissionMapUv:H&&p(S.transmissionMap.channel),thicknessMapUv:be&&p(S.thicknessMap.channel),alphaMapUv:Pe&&p(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(U||ue),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!V.attributes.uv&&(ye||Pe),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||V.attributes.normal===void 0&&U===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:K,skinning:R.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:fe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:qe,decodeVideoTexture:ye&&S.map.isVideoTexture===!0&&mt.getTransfer(S.map.colorSpace)===Rt,decodeVideoTextureEmissive:pe&&S.emissiveMap.isVideoTexture===!0&&mt.getTransfer(S.emissiveMap.colorSpace)===Rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Jr,flipSided:S.side===hi,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Fe&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&S.extensions.multiDraw===!0||he)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return _t.vertexUv1s=l.has(1),_t.vertexUv2s=l.has(2),_t.vertexUv3s=l.has(3),l.clear(),_t}function _(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(g(M,S),v(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function g(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function v(S,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){const M=h[S.type];let P;if(M){const L=Er[M];P=MC.clone(L.uniforms)}else P=S.uniforms;return P}function x(S,M){let P=u.get(M);return P!==void 0?++P.usedTimes:(P=new qL(n,M,S,r),c.push(P),u.set(M,P)),P}function E(S){if(--S.usedTimes===0){const M=c.indexOf(S);c[M]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function T(S){a.remove(S)}function w(){a.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:y,acquireProgram:x,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:w}}function ZL(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function JL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function N0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function O0(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,p,m,_,g){let v=n[e];return v===void 0?(v={id:f.id,object:f,geometry:h,material:p,materialVariant:o(f),groupOrder:m,renderOrder:f.renderOrder,z:_,group:g},n[e]=v):(v.id=f.id,v.object=f,v.geometry=h,v.material=p,v.materialVariant=o(f),v.groupOrder=m,v.renderOrder=f.renderOrder,v.z=_,v.group=g),e++,v}function l(f,h,p,m,_,g){const v=a(f,h,p,m,_,g);p.transmission>0?i.push(v):p.transparent===!0?r.push(v):t.push(v)}function c(f,h,p,m,_,g){const v=a(f,h,p,m,_,g);p.transmission>0?i.unshift(v):p.transparent===!0?r.unshift(v):t.unshift(v)}function u(f,h){t.length>1&&t.sort(f||JL),i.length>1&&i.sort(h||N0),r.length>1&&r.sort(h||N0)}function d(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function QL(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new O0,n.set(i,[o])):r>=s.length?(o=new O0,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function e2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new Pt};break;case"SpotLight":t={position:new J,direction:new J,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":t={color:new Pt,position:new J,halfWidth:new J,halfHeight:new J};break}return n[e.id]=t,t}}}function t2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let n2=0;function i2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function r2(n){const e=new e2,t=t2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new J);const r=new J,s=new qt,o=new qt;function a(c){let u=0,d=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let h=0,p=0,m=0,_=0,g=0,v=0,y=0,x=0,E=0,T=0,w=0;c.sort(i2);for(let M=0,P=c.length;M<P;M++){const L=c[M],R=L.color,O=L.intensity,V=L.distance;let X=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Wa?X=L.shadow.map.texture:X=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=R.r*O,d+=R.g*O,f+=R.b*O;else if(L.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(L.sh.coefficients[z],O);w++}else if(L.isDirectionalLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const k=L.shadow,Y=t.get(L);Y.shadowIntensity=k.intensity,Y.shadowBias=k.bias,Y.shadowNormalBias=k.normalBias,Y.shadowRadius=k.radius,Y.shadowMapSize=k.mapSize,i.directionalShadow[h]=Y,i.directionalShadowMap[h]=X,i.directionalShadowMatrix[h]=L.shadow.matrix,v++}i.directional[h]=z,h++}else if(L.isSpotLight){const z=e.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(R).multiplyScalar(O),z.distance=V,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,i.spot[m]=z;const k=L.shadow;if(L.map&&(i.spotLightMap[E]=L.map,E++,k.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[m]=k.matrix,L.castShadow){const Y=t.get(L);Y.shadowIntensity=k.intensity,Y.shadowBias=k.bias,Y.shadowNormalBias=k.normalBias,Y.shadowRadius=k.radius,Y.shadowMapSize=k.mapSize,i.spotShadow[m]=Y,i.spotShadowMap[m]=X,x++}m++}else if(L.isRectAreaLight){const z=e.get(L);z.color.copy(R).multiplyScalar(O),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),i.rectArea[_]=z,_++}else if(L.isPointLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),z.distance=L.distance,z.decay=L.decay,L.castShadow){const k=L.shadow,Y=t.get(L);Y.shadowIntensity=k.intensity,Y.shadowBias=k.bias,Y.shadowNormalBias=k.normalBias,Y.shadowRadius=k.radius,Y.shadowMapSize=k.mapSize,Y.shadowCameraNear=k.camera.near,Y.shadowCameraFar=k.camera.far,i.pointShadow[p]=Y,i.pointShadowMap[p]=X,i.pointShadowMatrix[p]=L.shadow.matrix,y++}i.point[p]=z,p++}else if(L.isHemisphereLight){const z=e.get(L);z.skyColor.copy(L.color).multiplyScalar(O),z.groundColor.copy(L.groundColor).multiplyScalar(O),i.hemi[g]=z,g++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ne.LTC_FLOAT_1,i.rectAreaLTC2=Ne.LTC_FLOAT_2):(i.rectAreaLTC1=Ne.LTC_HALF_1,i.rectAreaLTC2=Ne.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const S=i.hash;(S.directionalLength!==h||S.pointLength!==p||S.spotLength!==m||S.rectAreaLength!==_||S.hemiLength!==g||S.numDirectionalShadows!==v||S.numPointShadows!==y||S.numSpotShadows!==x||S.numSpotMaps!==E||S.numLightProbes!==w)&&(i.directional.length=h,i.spot.length=m,i.rectArea.length=_,i.point.length=p,i.hemi.length=g,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+E-T,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=w,S.directionalLength=h,S.pointLength=p,S.spotLength=m,S.rectAreaLength=_,S.hemiLength=g,S.numDirectionalShadows=v,S.numPointShadows=y,S.numSpotShadows=x,S.numSpotMaps=E,S.numLightProbes=w,i.version=n2++)}function l(c,u){let d=0,f=0,h=0,p=0,m=0;const _=u.matrixWorldInverse;for(let g=0,v=c.length;g<v;g++){const y=c[g];if(y.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(_),d++}else if(y.isSpotLight){const x=i.spot[h];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(_),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(_),h++}else if(y.isRectAreaLight){const x=i.rectArea[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(_),o.identity(),s.copy(y.matrixWorld),s.premultiply(_),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(_),f++}else if(y.isHemisphereLight){const x=i.hemi[m];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(_),m++}}}return{setup:a,setupView:l,state:i}}function U0(n){const e=new r2(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function s2(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new U0(n),e.set(r,[a])):s>=o.length?(a=new U0(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const o2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a2=`uniform sampler2D shadow_pass;
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
}`,l2=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],c2=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],F0=new qt,dl=new J,Hh=new J;function u2(n,e,t){let i=new MS;const r=new gt,s=new gt,o=new tn,a=new wC,l=new AC,c={},u=t.maxTextureSize,d={[Xs]:hi,[hi]:Xs,[Jr]:Jr},f=new hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:o2,fragmentShader:a2}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const p=new Yi;p.setAttribute("position",new ar(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new qi(p,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pu;let g=this.type;this.render=function(T,w,S){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||T.length===0)return;this.type===pA&&(Je("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Pu);const M=n.getRenderTarget(),P=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),R=n.state;R.setBlending(ns),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const O=g!==this.type;O&&w.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(X=>X.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,X=T.length;V<X;V++){const z=T[V],k=z.shadow;if(k===void 0){Je("WebGLShadowMap:",z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const Y=k.getFrameExtents();r.multiply(Y),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,k.mapSize.y=s.y));const oe=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=oe,k.map===null||O===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Ml){if(z.isPointLight){Je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Lr(r.x,r.y,{format:Wa,type:cs,minFilter:Wn,magFilter:Wn,generateMipmaps:!1}),k.map.texture.name=z.name+".shadowMap",k.map.depthTexture=new fc(r.x,r.y,nr),k.map.depthTexture.name=z.name+".shadowMapDepth",k.map.depthTexture.format=us,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Pn,k.map.depthTexture.magFilter=Pn}else z.isPointLight?(k.map=new DS(r.x),k.map.depthTexture=new yC(r.x,Or)):(k.map=new Lr(r.x,r.y),k.map.depthTexture=new fc(r.x,r.y,Or)),k.map.depthTexture.name=z.name+".shadowMap",k.map.depthTexture.format=us,this.type===Pu?(k.map.depthTexture.compareFunction=oe?Om:Nm,k.map.depthTexture.minFilter=Wn,k.map.depthTexture.magFilter=Wn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Pn,k.map.depthTexture.magFilter=Pn);k.camera.updateProjectionMatrix()}const F=k.map.isWebGLCubeRenderTarget?6:1;for(let de=0;de<F;de++){if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,de),n.clear();else{de===0&&(n.setRenderTarget(k.map),n.clear());const fe=k.getViewport(de);o.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),R.viewport(o)}if(z.isPointLight){const fe=k.camera,Ie=k.matrix,He=z.distance||fe.far;He!==fe.far&&(fe.far=He,fe.updateProjectionMatrix()),dl.setFromMatrixPosition(z.matrixWorld),fe.position.copy(dl),Hh.copy(fe.position),Hh.add(l2[de]),fe.up.copy(c2[de]),fe.lookAt(Hh),fe.updateMatrixWorld(),Ie.makeTranslation(-dl.x,-dl.y,-dl.z),F0.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),k._frustum.setFromProjectionMatrix(F0,fe.coordinateSystem,fe.reversedDepth)}else k.updateMatrices(z);i=k.getFrustum(),x(w,S,k.camera,z,this.type)}k.isPointLightShadow!==!0&&this.type===Ml&&v(k,S),k.needsUpdate=!1}g=this.type,_.needsUpdate=!1,n.setRenderTarget(M,P,L)};function v(T,w){const S=e.update(m);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Lr(r.x,r.y,{format:Wa,type:cs})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(w,null,S,f,m,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(w,null,S,h,m,null)}function y(T,w,S,M){let P=null;const L=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)P=L;else if(P=S.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const R=P.uuid,O=w.uuid;let V=c[R];V===void 0&&(V={},c[R]=V);let X=V[O];X===void 0&&(X=P.clone(),V[O]=X,w.addEventListener("dispose",E)),P=X}if(P.visible=w.visible,P.wireframe=w.wireframe,M===Ml?P.side=w.shadowSide!==null?w.shadowSide:w.side:P.side=w.shadowSide!==null?w.shadowSide:d[w.side],P.alphaMap=w.alphaMap,P.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,P.map=w.map,P.clipShadows=w.clipShadows,P.clippingPlanes=w.clippingPlanes,P.clipIntersection=w.clipIntersection,P.displacementMap=w.displacementMap,P.displacementScale=w.displacementScale,P.displacementBias=w.displacementBias,P.wireframeLinewidth=w.wireframeLinewidth,P.linewidth=w.linewidth,S.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const R=n.properties.get(P);R.light=S}return P}function x(T,w,S,M,P){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Ml)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);const O=e.update(T),V=T.material;if(Array.isArray(V)){const X=O.groups;for(let z=0,k=X.length;z<k;z++){const Y=X[z],oe=V[Y.materialIndex];if(oe&&oe.visible){const F=y(T,oe,M,P);T.onBeforeShadow(n,T,w,S,O,F,Y),n.renderBufferDirect(S,null,O,F,T,Y),T.onAfterShadow(n,T,w,S,O,F,Y)}}}else if(V.visible){const X=y(T,V,M,P);T.onBeforeShadow(n,T,w,S,O,X,null),n.renderBufferDirect(S,null,O,X,T,null),T.onAfterShadow(n,T,w,S,O,X,null)}}const R=T.children;for(let O=0,V=R.length;O<V;O++)x(R[O],w,S,M,P)}function E(T){T.target.removeEventListener("dispose",E);for(const S in c){const M=c[S],P=T.target.uuid;P in M&&(M[P].dispose(),delete M[P])}}}function f2(n,e){function t(){let H=!1;const be=new tn;let xe=null;const Pe=new tn(0,0,0,0);return{setMask:function(_e){xe!==_e&&!H&&(n.colorMask(_e,_e,_e,_e),xe=_e)},setLocked:function(_e){H=_e},setClear:function(_e,ae,Fe,qe,_t){_t===!0&&(_e*=qe,ae*=qe,Fe*=qe),be.set(_e,ae,Fe,qe),Pe.equals(be)===!1&&(n.clearColor(_e,ae,Fe,qe),Pe.copy(be))},reset:function(){H=!1,xe=null,Pe.set(-1,0,0,0)}}}function i(){let H=!1,be=!1,xe=null,Pe=null,_e=null;return{setReversed:function(ae){if(be!==ae){const Fe=e.get("EXT_clip_control");ae?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),be=ae;const qe=_e;_e=null,this.setClear(qe)}},getReversed:function(){return be},setTest:function(ae){ae?W(n.DEPTH_TEST):K(n.DEPTH_TEST)},setMask:function(ae){xe!==ae&&!H&&(n.depthMask(ae),xe=ae)},setFunc:function(ae){if(be&&(ae=$A[ae]),Pe!==ae){switch(ae){case kd:n.depthFunc(n.NEVER);break;case zd:n.depthFunc(n.ALWAYS);break;case Hd:n.depthFunc(n.LESS);break;case Va:n.depthFunc(n.LEQUAL);break;case Vd:n.depthFunc(n.EQUAL);break;case Gd:n.depthFunc(n.GEQUAL);break;case Wd:n.depthFunc(n.GREATER);break;case Xd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=ae}},setLocked:function(ae){H=ae},setClear:function(ae){_e!==ae&&(_e=ae,be&&(ae=1-ae),n.clearDepth(ae))},reset:function(){H=!1,xe=null,Pe=null,_e=null,be=!1}}}function r(){let H=!1,be=null,xe=null,Pe=null,_e=null,ae=null,Fe=null,qe=null,_t=null;return{setTest:function(Oe){H||(Oe?W(n.STENCIL_TEST):K(n.STENCIL_TEST))},setMask:function(Oe){be!==Oe&&!H&&(n.stencilMask(Oe),be=Oe)},setFunc:function(Oe,Ve,st){(xe!==Oe||Pe!==Ve||_e!==st)&&(n.stencilFunc(Oe,Ve,st),xe=Oe,Pe=Ve,_e=st)},setOp:function(Oe,Ve,st){(ae!==Oe||Fe!==Ve||qe!==st)&&(n.stencilOp(Oe,Ve,st),ae=Oe,Fe=Ve,qe=st)},setLocked:function(Oe){H=Oe},setClear:function(Oe){_t!==Oe&&(n.clearStencil(Oe),_t=Oe)},reset:function(){H=!1,be=null,xe=null,Pe=null,_e=null,ae=null,Fe=null,qe=null,_t=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],p=null,m=!1,_=null,g=null,v=null,y=null,x=null,E=null,T=null,w=new Pt(0,0,0),S=0,M=!1,P=null,L=null,R=null,O=null,V=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,k=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=k>=1):Y.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=k>=2);let oe=null,F={};const de=n.getParameter(n.SCISSOR_BOX),fe=n.getParameter(n.VIEWPORT),Ie=new tn().fromArray(de),He=new tn().fromArray(fe);function We(H,be,xe,Pe){const _e=new Uint8Array(4),ae=n.createTexture();n.bindTexture(H,ae),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<xe;Fe++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(be+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return ae}const re={};re[n.TEXTURE_2D]=We(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=We(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=We(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=We(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),W(n.DEPTH_TEST),o.setFunc(Va),Z(!1),U(z_),W(n.CULL_FACE),G(ns);function W(H){u[H]!==!0&&(n.enable(H),u[H]=!0)}function K(H){u[H]!==!1&&(n.disable(H),u[H]=!1)}function le(H,be){return d[H]!==be?(n.bindFramebuffer(H,be),d[H]=be,H===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=be),H===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=be),!0):!1}function he(H,be){let xe=h,Pe=!1;if(H){xe=f.get(be),xe===void 0&&(xe=[],f.set(be,xe));const _e=H.textures;if(xe.length!==_e.length||xe[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,Fe=_e.length;ae<Fe;ae++)xe[ae]=n.COLOR_ATTACHMENT0+ae;xe.length=_e.length,Pe=!0}}else xe[0]!==n.BACK&&(xe[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(xe)}function ye(H){return p!==H?(n.useProgram(H),p=H,!0):!1}const N={[go]:n.FUNC_ADD,[gA]:n.FUNC_SUBTRACT,[_A]:n.FUNC_REVERSE_SUBTRACT};N[vA]=n.MIN,N[xA]=n.MAX;const I={[yA]:n.ZERO,[SA]:n.ONE,[MA]:n.SRC_COLOR,[Fd]:n.SRC_ALPHA,[CA]:n.SRC_ALPHA_SATURATE,[wA]:n.DST_COLOR,[EA]:n.DST_ALPHA,[bA]:n.ONE_MINUS_SRC_COLOR,[Bd]:n.ONE_MINUS_SRC_ALPHA,[AA]:n.ONE_MINUS_DST_COLOR,[TA]:n.ONE_MINUS_DST_ALPHA,[RA]:n.CONSTANT_COLOR,[PA]:n.ONE_MINUS_CONSTANT_COLOR,[DA]:n.CONSTANT_ALPHA,[LA]:n.ONE_MINUS_CONSTANT_ALPHA};function G(H,be,xe,Pe,_e,ae,Fe,qe,_t,Oe){if(H===ns){m===!0&&(K(n.BLEND),m=!1);return}if(m===!1&&(W(n.BLEND),m=!0),H!==mA){if(H!==_||Oe!==M){if((g!==go||x!==go)&&(n.blendEquation(n.FUNC_ADD),g=go,x=go),Oe)switch(H){case Ra:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case H_:n.blendFunc(n.ONE,n.ONE);break;case V_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case G_:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:xt("WebGLState: Invalid blending: ",H);break}else switch(H){case Ra:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case H_:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case V_:xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case G_:xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:xt("WebGLState: Invalid blending: ",H);break}v=null,y=null,E=null,T=null,w.set(0,0,0),S=0,_=H,M=Oe}return}_e=_e||be,ae=ae||xe,Fe=Fe||Pe,(be!==g||_e!==x)&&(n.blendEquationSeparate(N[be],N[_e]),g=be,x=_e),(xe!==v||Pe!==y||ae!==E||Fe!==T)&&(n.blendFuncSeparate(I[xe],I[Pe],I[ae],I[Fe]),v=xe,y=Pe,E=ae,T=Fe),(qe.equals(w)===!1||_t!==S)&&(n.blendColor(qe.r,qe.g,qe.b,_t),w.copy(qe),S=_t),_=H,M=!1}function Q(H,be){H.side===Jr?K(n.CULL_FACE):W(n.CULL_FACE);let xe=H.side===hi;be&&(xe=!xe),Z(xe),H.blending===Ra&&H.transparent===!1?G(ns):G(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),s.setMask(H.colorWrite);const Pe=H.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),pe(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?W(n.SAMPLE_ALPHA_TO_COVERAGE):K(n.SAMPLE_ALPHA_TO_COVERAGE)}function Z(H){P!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),P=H)}function U(H){H!==hA?(W(n.CULL_FACE),H!==L&&(H===z_?n.cullFace(n.BACK):H===dA?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):K(n.CULL_FACE),L=H}function D(H){H!==R&&(z&&n.lineWidth(H),R=H)}function pe(H,be,xe){H?(W(n.POLYGON_OFFSET_FILL),(O!==be||V!==xe)&&(O=be,V=xe,o.getReversed()&&(be=-be),n.polygonOffset(be,xe))):K(n.POLYGON_OFFSET_FILL)}function ce(H){H?W(n.SCISSOR_TEST):K(n.SCISSOR_TEST)}function se(H){H===void 0&&(H=n.TEXTURE0+X-1),oe!==H&&(n.activeTexture(H),oe=H)}function ue(H,be,xe){xe===void 0&&(oe===null?xe=n.TEXTURE0+X-1:xe=oe);let Pe=F[xe];Pe===void 0&&(Pe={type:void 0,texture:void 0},F[xe]=Pe),(Pe.type!==H||Pe.texture!==be)&&(oe!==xe&&(n.activeTexture(xe),oe=xe),n.bindTexture(H,be||re[H]),Pe.type=H,Pe.texture=be)}function C(){const H=F[oe];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function b(){try{n.compressedTexImage2D(...arguments)}catch(H){xt("WebGLState:",H)}}function B(){try{n.compressedTexImage3D(...arguments)}catch(H){xt("WebGLState:",H)}}function j(){try{n.texSubImage2D(...arguments)}catch(H){xt("WebGLState:",H)}}function ne(){try{n.texSubImage3D(...arguments)}catch(H){xt("WebGLState:",H)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(H){xt("WebGLState:",H)}}function Me(){try{n.compressedTexSubImage3D(...arguments)}catch(H){xt("WebGLState:",H)}}function me(){try{n.texStorage2D(...arguments)}catch(H){xt("WebGLState:",H)}}function Ue(){try{n.texStorage3D(...arguments)}catch(H){xt("WebGLState:",H)}}function Te(){try{n.texImage2D(...arguments)}catch(H){xt("WebGLState:",H)}}function ge(){try{n.texImage3D(...arguments)}catch(H){xt("WebGLState:",H)}}function ve(H){Ie.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Ie.copy(H))}function Ee(H){He.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),He.copy(H))}function Re(H,be){let xe=c.get(be);xe===void 0&&(xe=new WeakMap,c.set(be,xe));let Pe=xe.get(H);Pe===void 0&&(Pe=n.getUniformBlockIndex(be,H.name),xe.set(H,Pe))}function we(H,be){const Pe=c.get(be).get(H);l.get(be)!==Pe&&(n.uniformBlockBinding(be,Pe,H.__bindingPointIndex),l.set(be,Pe))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},oe=null,F={},d={},f=new WeakMap,h=[],p=null,m=!1,_=null,g=null,v=null,y=null,x=null,E=null,T=null,w=new Pt(0,0,0),S=0,M=!1,P=null,L=null,R=null,O=null,V=null,Ie.set(0,0,n.canvas.width,n.canvas.height),He.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:W,disable:K,bindFramebuffer:le,drawBuffers:he,useProgram:ye,setBlending:G,setMaterial:Q,setFlipSided:Z,setCullFace:U,setLineWidth:D,setPolygonOffset:pe,setScissorTest:ce,activeTexture:se,bindTexture:ue,unbindTexture:C,compressedTexImage2D:b,compressedTexImage3D:B,texImage2D:Te,texImage3D:ge,updateUBOMapping:Re,uniformBlockBinding:we,texStorage2D:me,texStorage3D:Ue,texSubImage2D:j,texSubImage3D:ne,compressedTexSubImage2D:$,compressedTexSubImage3D:Me,scissor:ve,viewport:Ee,reset:je}}function h2(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,b){return h?new OffscreenCanvas(C,b):lf("canvas")}function m(C,b,B){let j=1;const ne=ue(C);if((ne.width>B||ne.height>B)&&(j=B/Math.max(ne.width,ne.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const $=Math.floor(j*ne.width),Me=Math.floor(j*ne.height);d===void 0&&(d=p($,Me));const me=b?p($,Me):d;return me.width=$,me.height=Me,me.getContext("2d").drawImage(C,0,0,$,Me),Je("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+$+"x"+Me+")."),me}else return"data"in C&&Je("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),C;return C}function _(C){return C.generateMipmaps}function g(C){n.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(C,b,B,j,ne=!1){if(C!==null){if(n[C]!==void 0)return n[C];Je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=b;if(b===n.RED&&(B===n.FLOAT&&($=n.R32F),B===n.HALF_FLOAT&&($=n.R16F),B===n.UNSIGNED_BYTE&&($=n.R8)),b===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.R8UI),B===n.UNSIGNED_SHORT&&($=n.R16UI),B===n.UNSIGNED_INT&&($=n.R32UI),B===n.BYTE&&($=n.R8I),B===n.SHORT&&($=n.R16I),B===n.INT&&($=n.R32I)),b===n.RG&&(B===n.FLOAT&&($=n.RG32F),B===n.HALF_FLOAT&&($=n.RG16F),B===n.UNSIGNED_BYTE&&($=n.RG8)),b===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RG8UI),B===n.UNSIGNED_SHORT&&($=n.RG16UI),B===n.UNSIGNED_INT&&($=n.RG32UI),B===n.BYTE&&($=n.RG8I),B===n.SHORT&&($=n.RG16I),B===n.INT&&($=n.RG32I)),b===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RGB8UI),B===n.UNSIGNED_SHORT&&($=n.RGB16UI),B===n.UNSIGNED_INT&&($=n.RGB32UI),B===n.BYTE&&($=n.RGB8I),B===n.SHORT&&($=n.RGB16I),B===n.INT&&($=n.RGB32I)),b===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RGBA8UI),B===n.UNSIGNED_SHORT&&($=n.RGBA16UI),B===n.UNSIGNED_INT&&($=n.RGBA32UI),B===n.BYTE&&($=n.RGBA8I),B===n.SHORT&&($=n.RGBA16I),B===n.INT&&($=n.RGBA32I)),b===n.RGB&&(B===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),b===n.RGBA){const Me=ne?of:mt.getTransfer(j);B===n.FLOAT&&($=n.RGBA32F),B===n.HALF_FLOAT&&($=n.RGBA16F),B===n.UNSIGNED_BYTE&&($=Me===Rt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(C,b){let B;return C?b===null||b===Or||b===uc?B=n.DEPTH24_STENCIL8:b===nr?B=n.DEPTH32F_STENCIL8:b===cc&&(B=n.DEPTH24_STENCIL8,Je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Or||b===uc?B=n.DEPTH_COMPONENT24:b===nr?B=n.DEPTH_COMPONENT32F:b===cc&&(B=n.DEPTH_COMPONENT16),B}function E(C,b){return _(C)===!0||C.isFramebufferTexture&&C.minFilter!==Pn&&C.minFilter!==Wn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function T(C){const b=C.target;b.removeEventListener("dispose",T),S(b),b.isVideoTexture&&u.delete(b)}function w(C){const b=C.target;b.removeEventListener("dispose",w),P(b)}function S(C){const b=i.get(C);if(b.__webglInit===void 0)return;const B=C.source,j=f.get(B);if(j){const ne=j[b.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&M(C),Object.keys(j).length===0&&f.delete(B)}i.remove(C)}function M(C){const b=i.get(C);n.deleteTexture(b.__webglTexture);const B=C.source,j=f.get(B);delete j[b.__cacheKey],o.memory.textures--}function P(C){const b=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let ne=0;ne<b.__webglFramebuffer[j].length;ne++)n.deleteFramebuffer(b.__webglFramebuffer[j][ne]);else n.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)n.deleteFramebuffer(b.__webglFramebuffer[j]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const B=C.textures;for(let j=0,ne=B.length;j<ne;j++){const $=i.get(B[j]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(B[j])}i.remove(C)}let L=0;function R(){L=0}function O(){const C=L;return C>=r.maxTextures&&Je("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),L+=1,C}function V(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function X(C,b){const B=i.get(C);if(C.isVideoTexture&&ce(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){const j=C.image;if(j===null)Je("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Je("WebGLRenderer: Texture marked for update but image is incomplete");else{re(B,C,b);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+b)}function z(C,b){const B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){re(B,C,b);return}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+b)}function k(C,b){const B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){re(B,C,b);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+b)}function Y(C,b){const B=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&B.__version!==C.version){W(B,C,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+b)}const oe={[qd]:n.REPEAT,[es]:n.CLAMP_TO_EDGE,[Yd]:n.MIRRORED_REPEAT},F={[Pn]:n.NEAREST,[OA]:n.NEAREST_MIPMAP_NEAREST,[qc]:n.NEAREST_MIPMAP_LINEAR,[Wn]:n.LINEAR,[fh]:n.LINEAR_MIPMAP_NEAREST,[So]:n.LINEAR_MIPMAP_LINEAR},de={[kA]:n.NEVER,[WA]:n.ALWAYS,[zA]:n.LESS,[Nm]:n.LEQUAL,[HA]:n.EQUAL,[Om]:n.GEQUAL,[VA]:n.GREATER,[GA]:n.NOTEQUAL};function fe(C,b){if(b.type===nr&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Wn||b.magFilter===fh||b.magFilter===qc||b.magFilter===So||b.minFilter===Wn||b.minFilter===fh||b.minFilter===qc||b.minFilter===So)&&Je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,oe[b.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,oe[b.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,oe[b.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,F[b.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,F[b.minFilter]),b.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,de[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Pn||b.minFilter!==qc&&b.minFilter!==So||b.type===nr&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Ie(C,b){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",T));const j=b.source;let ne=f.get(j);ne===void 0&&(ne={},f.set(j,ne));const $=V(b);if($!==C.__cacheKey){ne[$]===void 0&&(ne[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ne[$].usedTimes++;const Me=ne[C.__cacheKey];Me!==void 0&&(ne[C.__cacheKey].usedTimes--,Me.usedTimes===0&&M(b)),C.__cacheKey=$,C.__webglTexture=ne[$].texture}return B}function He(C,b,B){return Math.floor(Math.floor(C/B)/b)}function We(C,b,B,j){const $=C.updateRanges;if($.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,B,j,b.data);else{$.sort((ge,ve)=>ge.start-ve.start);let Me=0;for(let ge=1;ge<$.length;ge++){const ve=$[Me],Ee=$[ge],Re=ve.start+ve.count,we=He(Ee.start,b.width,4),je=He(ve.start,b.width,4);Ee.start<=Re+1&&we===je&&He(Ee.start+Ee.count-1,b.width,4)===we?ve.count=Math.max(ve.count,Ee.start+Ee.count-ve.start):(++Me,$[Me]=Ee)}$.length=Me+1;const me=n.getParameter(n.UNPACK_ROW_LENGTH),Ue=n.getParameter(n.UNPACK_SKIP_PIXELS),Te=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let ge=0,ve=$.length;ge<ve;ge++){const Ee=$[ge],Re=Math.floor(Ee.start/4),we=Math.ceil(Ee.count/4),je=Re%b.width,H=Math.floor(Re/b.width),be=we,xe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,je),n.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,je,H,be,xe,B,j,b.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,me),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ue),n.pixelStorei(n.UNPACK_SKIP_ROWS,Te)}}function re(C,b,B){let j=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=n.TEXTURE_3D);const ne=Ie(C,b),$=b.source;t.bindTexture(j,C.__webglTexture,n.TEXTURE0+B);const Me=i.get($);if($.version!==Me.__version||ne===!0){t.activeTexture(n.TEXTURE0+B);const me=mt.getPrimaries(mt.workingColorSpace),Ue=b.colorSpace===Rs?null:mt.getPrimaries(b.colorSpace),Te=b.colorSpace===Rs||me===Ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let ge=m(b.image,!1,r.maxTextureSize);ge=se(b,ge);const ve=s.convert(b.format,b.colorSpace),Ee=s.convert(b.type);let Re=y(b.internalFormat,ve,Ee,b.colorSpace,b.isVideoTexture);fe(j,b);let we;const je=b.mipmaps,H=b.isVideoTexture!==!0,be=Me.__version===void 0||ne===!0,xe=$.dataReady,Pe=E(b,ge);if(b.isDepthTexture)Re=x(b.format===Mo,b.type),be&&(H?t.texStorage2D(n.TEXTURE_2D,1,Re,ge.width,ge.height):t.texImage2D(n.TEXTURE_2D,0,Re,ge.width,ge.height,0,ve,Ee,null));else if(b.isDataTexture)if(je.length>0){H&&be&&t.texStorage2D(n.TEXTURE_2D,Pe,Re,je[0].width,je[0].height);for(let _e=0,ae=je.length;_e<ae;_e++)we=je[_e],H?xe&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,we.width,we.height,ve,Ee,we.data):t.texImage2D(n.TEXTURE_2D,_e,Re,we.width,we.height,0,ve,Ee,we.data);b.generateMipmaps=!1}else H?(be&&t.texStorage2D(n.TEXTURE_2D,Pe,Re,ge.width,ge.height),xe&&We(b,ge,ve,Ee)):t.texImage2D(n.TEXTURE_2D,0,Re,ge.width,ge.height,0,ve,Ee,ge.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){H&&be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Re,je[0].width,je[0].height,ge.depth);for(let _e=0,ae=je.length;_e<ae;_e++)if(we=je[_e],b.format!==ir)if(ve!==null)if(H){if(xe)if(b.layerUpdates.size>0){const Fe=p0(we.width,we.height,b.format,b.type);for(const qe of b.layerUpdates){const _t=we.data.subarray(qe*Fe/we.data.BYTES_PER_ELEMENT,(qe+1)*Fe/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,qe,we.width,we.height,1,ve,_t)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,we.width,we.height,ge.depth,ve,we.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_e,Re,we.width,we.height,ge.depth,0,we.data,0,0);else Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?xe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,we.width,we.height,ge.depth,ve,Ee,we.data):t.texImage3D(n.TEXTURE_2D_ARRAY,_e,Re,we.width,we.height,ge.depth,0,ve,Ee,we.data)}else{H&&be&&t.texStorage2D(n.TEXTURE_2D,Pe,Re,je[0].width,je[0].height);for(let _e=0,ae=je.length;_e<ae;_e++)we=je[_e],b.format!==ir?ve!==null?H?xe&&t.compressedTexSubImage2D(n.TEXTURE_2D,_e,0,0,we.width,we.height,ve,we.data):t.compressedTexImage2D(n.TEXTURE_2D,_e,Re,we.width,we.height,0,we.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?xe&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,we.width,we.height,ve,Ee,we.data):t.texImage2D(n.TEXTURE_2D,_e,Re,we.width,we.height,0,ve,Ee,we.data)}else if(b.isDataArrayTexture)if(H){if(be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Re,ge.width,ge.height,ge.depth),xe)if(b.layerUpdates.size>0){const _e=p0(ge.width,ge.height,b.format,b.type);for(const ae of b.layerUpdates){const Fe=ge.data.subarray(ae*_e/ge.data.BYTES_PER_ELEMENT,(ae+1)*_e/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ae,ge.width,ge.height,1,ve,Ee,Fe)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,ve,Ee,ge.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,ge.width,ge.height,ge.depth,0,ve,Ee,ge.data);else if(b.isData3DTexture)H?(be&&t.texStorage3D(n.TEXTURE_3D,Pe,Re,ge.width,ge.height,ge.depth),xe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,ve,Ee,ge.data)):t.texImage3D(n.TEXTURE_3D,0,Re,ge.width,ge.height,ge.depth,0,ve,Ee,ge.data);else if(b.isFramebufferTexture){if(be)if(H)t.texStorage2D(n.TEXTURE_2D,Pe,Re,ge.width,ge.height);else{let _e=ge.width,ae=ge.height;for(let Fe=0;Fe<Pe;Fe++)t.texImage2D(n.TEXTURE_2D,Fe,Re,_e,ae,0,ve,Ee,null),_e>>=1,ae>>=1}}else if(je.length>0){if(H&&be){const _e=ue(je[0]);t.texStorage2D(n.TEXTURE_2D,Pe,Re,_e.width,_e.height)}for(let _e=0,ae=je.length;_e<ae;_e++)we=je[_e],H?xe&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,ve,Ee,we):t.texImage2D(n.TEXTURE_2D,_e,Re,ve,Ee,we);b.generateMipmaps=!1}else if(H){if(be){const _e=ue(ge);t.texStorage2D(n.TEXTURE_2D,Pe,Re,_e.width,_e.height)}xe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Ee,ge)}else t.texImage2D(n.TEXTURE_2D,0,Re,ve,Ee,ge);_(b)&&g(j),Me.__version=$.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function W(C,b,B){if(b.image.length!==6)return;const j=Ie(C,b),ne=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+B);const $=i.get(ne);if(ne.version!==$.__version||j===!0){t.activeTexture(n.TEXTURE0+B);const Me=mt.getPrimaries(mt.workingColorSpace),me=b.colorSpace===Rs?null:mt.getPrimaries(b.colorSpace),Ue=b.colorSpace===Rs||Me===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const Te=b.isCompressedTexture||b.image[0].isCompressedTexture,ge=b.image[0]&&b.image[0].isDataTexture,ve=[];for(let ae=0;ae<6;ae++)!Te&&!ge?ve[ae]=m(b.image[ae],!0,r.maxCubemapSize):ve[ae]=ge?b.image[ae].image:b.image[ae],ve[ae]=se(b,ve[ae]);const Ee=ve[0],Re=s.convert(b.format,b.colorSpace),we=s.convert(b.type),je=y(b.internalFormat,Re,we,b.colorSpace),H=b.isVideoTexture!==!0,be=$.__version===void 0||j===!0,xe=ne.dataReady;let Pe=E(b,Ee);fe(n.TEXTURE_CUBE_MAP,b);let _e;if(Te){H&&be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,je,Ee.width,Ee.height);for(let ae=0;ae<6;ae++){_e=ve[ae].mipmaps;for(let Fe=0;Fe<_e.length;Fe++){const qe=_e[Fe];b.format!==ir?Re!==null?H?xe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,0,0,qe.width,qe.height,Re,qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,je,qe.width,qe.height,0,qe.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,0,0,qe.width,qe.height,Re,we,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,je,qe.width,qe.height,0,Re,we,qe.data)}}}else{if(_e=b.mipmaps,H&&be){_e.length>0&&Pe++;const ae=ue(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,je,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(ge){H?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ve[ae].width,ve[ae].height,Re,we,ve[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,je,ve[ae].width,ve[ae].height,0,Re,we,ve[ae].data);for(let Fe=0;Fe<_e.length;Fe++){const _t=_e[Fe].image[ae].image;H?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,0,0,_t.width,_t.height,Re,we,_t.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,je,_t.width,_t.height,0,Re,we,_t.data)}}else{H?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Re,we,ve[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,je,Re,we,ve[ae]);for(let Fe=0;Fe<_e.length;Fe++){const qe=_e[Fe];H?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,0,0,Re,we,qe.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,je,Re,we,qe.image[ae])}}}_(b)&&g(n.TEXTURE_CUBE_MAP),$.__version=ne.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function K(C,b,B,j,ne,$){const Me=s.convert(B.format,B.colorSpace),me=s.convert(B.type),Ue=y(B.internalFormat,Me,me,B.colorSpace),Te=i.get(b),ge=i.get(B);if(ge.__renderTarget=b,!Te.__hasExternalTextures){const ve=Math.max(1,b.width>>$),Ee=Math.max(1,b.height>>$);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,$,Ue,ve,Ee,b.depth,0,Me,me,null):t.texImage2D(ne,$,Ue,ve,Ee,0,Me,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),pe(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,ne,ge.__webglTexture,0,D(b)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,ne,ge.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(C,b,B){if(n.bindRenderbuffer(n.RENDERBUFFER,C),b.depthBuffer){const j=b.depthTexture,ne=j&&j.isDepthTexture?j.type:null,$=x(b.stencilBuffer,ne),Me=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;pe(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,D(b),$,b.width,b.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,D(b),$,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,$,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,C)}else{const j=b.textures;for(let ne=0;ne<j.length;ne++){const $=j[ne],Me=s.convert($.format,$.colorSpace),me=s.convert($.type),Ue=y($.internalFormat,Me,me,$.colorSpace);pe(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,D(b),Ue,b.width,b.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,D(b),Ue,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Ue,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(C,b,B){const j=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(b.depthTexture);if(ne.__renderTarget=b,(!ne.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),j){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,b.depthTexture.addEventListener("dispose",T)),ne.__webglTexture===void 0){ne.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),fe(n.TEXTURE_CUBE_MAP,b.depthTexture);const Te=s.convert(b.depthTexture.format),ge=s.convert(b.depthTexture.type);let ve;b.depthTexture.format===us?ve=n.DEPTH_COMPONENT24:b.depthTexture.format===Mo&&(ve=n.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ve,b.width,b.height,0,Te,ge,null)}}else X(b.depthTexture,0);const $=ne.__webglTexture,Me=D(b),me=j?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,Ue=b.depthTexture.format===Mo?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===us)pe(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ue,me,$,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,Ue,me,$,0);else if(b.depthTexture.format===Mo)pe(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ue,me,$,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,Ue,me,$,0);else throw new Error("Unknown depthTexture format")}function ye(C){const b=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const j=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),j){const ne=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,j.removeEventListener("dispose",ne)};j.addEventListener("dispose",ne),b.__depthDisposeCallback=ne}b.__boundDepthTexture=j}if(C.depthTexture&&!b.__autoAllocateDepthBuffer)if(B)for(let j=0;j<6;j++)he(b.__webglFramebuffer[j],C,j);else{const j=C.texture.mipmaps;j&&j.length>0?he(b.__webglFramebuffer[0],C,0):he(b.__webglFramebuffer,C,0)}else if(B){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]===void 0)b.__webglDepthbuffer[j]=n.createRenderbuffer(),le(b.__webglDepthbuffer[j],C,!1);else{const ne=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,$)}}else{const j=C.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),le(b.__webglDepthbuffer,C,!1);else{const ne=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,$)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function N(C,b,B){const j=i.get(C);b!==void 0&&K(j.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&ye(C)}function I(C){const b=C.texture,B=i.get(C),j=i.get(b);C.addEventListener("dispose",w);const ne=C.textures,$=C.isWebGLCubeRenderTarget===!0,Me=ne.length>1;if(Me||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=b.version,o.memory.textures++),$){B.__webglFramebuffer=[];for(let me=0;me<6;me++)if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[me]=[];for(let Ue=0;Ue<b.mipmaps.length;Ue++)B.__webglFramebuffer[me][Ue]=n.createFramebuffer()}else B.__webglFramebuffer[me]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let me=0;me<b.mipmaps.length;me++)B.__webglFramebuffer[me]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Me)for(let me=0,Ue=ne.length;me<Ue;me++){const Te=i.get(ne[me]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&pe(C)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let me=0;me<ne.length;me++){const Ue=ne[me];B.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[me]);const Te=s.convert(Ue.format,Ue.colorSpace),ge=s.convert(Ue.type),ve=y(Ue.internalFormat,Te,ge,Ue.colorSpace,C.isXRRenderTarget===!0),Ee=D(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,ve,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,B.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),le(B.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),fe(n.TEXTURE_CUBE_MAP,b);for(let me=0;me<6;me++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ue=0;Ue<b.mipmaps.length;Ue++)K(B.__webglFramebuffer[me][Ue],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue);else K(B.__webglFramebuffer[me],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);_(b)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let me=0,Ue=ne.length;me<Ue;me++){const Te=ne[me],ge=i.get(Te);let ve=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ve=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,ge.__webglTexture),fe(ve,Te),K(B.__webglFramebuffer,C,Te,n.COLOR_ATTACHMENT0+me,ve,0),_(Te)&&g(ve)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(me=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,j.__webglTexture),fe(me,b),b.mipmaps&&b.mipmaps.length>0)for(let Ue=0;Ue<b.mipmaps.length;Ue++)K(B.__webglFramebuffer[Ue],C,b,n.COLOR_ATTACHMENT0,me,Ue);else K(B.__webglFramebuffer,C,b,n.COLOR_ATTACHMENT0,me,0);_(b)&&g(me),t.unbindTexture()}C.depthBuffer&&ye(C)}function G(C){const b=C.textures;for(let B=0,j=b.length;B<j;B++){const ne=b[B];if(_(ne)){const $=v(C),Me=i.get(ne).__webglTexture;t.bindTexture($,Me),g($),t.unbindTexture()}}}const Q=[],Z=[];function U(C){if(C.samples>0){if(pe(C)===!1){const b=C.textures,B=C.width,j=C.height;let ne=n.COLOR_BUFFER_BIT;const $=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(C),me=b.length>1;if(me)for(let Te=0;Te<b.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const Ue=C.texture.mipmaps;Ue&&Ue.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Te=0;Te<b.length;Te++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Te]);const ge=i.get(b[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ge,0)}n.blitFramebuffer(0,0,B,j,0,0,B,j,ne,n.NEAREST),l===!0&&(Q.length=0,Z.length=0,Q.push(n.COLOR_ATTACHMENT0+Te),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Q.push($),Z.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let Te=0;Te<b.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Te]);const ge=i.get(b[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const b=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function D(C){return Math.min(r.maxSamples,C.samples)}function pe(C){const b=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ce(C){const b=o.render.frame;u.get(C)!==b&&(u.set(C,b),C.update())}function se(C,b){const B=C.colorSpace,j=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Xa&&B!==Rs&&(mt.getTransfer(B)===Rt?(j!==ir||ne!==ki)&&Je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):xt("WebGLTextures: Unsupported texture color space:",B)),b}function ue(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=R,this.setTexture2D=X,this.setTexture2DArray=z,this.setTexture3D=k,this.setTextureCube=Y,this.rebindTextures=N,this.setupRenderTarget=I,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=K,this.useMultisampledRTT=pe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function d2(n,e){function t(i,r=Rs){let s;const o=mt.getTransfer(r);if(i===ki)return n.UNSIGNED_BYTE;if(i===Cm)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Rm)return n.UNSIGNED_SHORT_5_5_5_1;if(i===uS)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===fS)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===lS)return n.BYTE;if(i===cS)return n.SHORT;if(i===cc)return n.UNSIGNED_SHORT;if(i===Am)return n.INT;if(i===Or)return n.UNSIGNED_INT;if(i===nr)return n.FLOAT;if(i===cs)return n.HALF_FLOAT;if(i===hS)return n.ALPHA;if(i===dS)return n.RGB;if(i===ir)return n.RGBA;if(i===us)return n.DEPTH_COMPONENT;if(i===Mo)return n.DEPTH_STENCIL;if(i===Pm)return n.RED;if(i===Dm)return n.RED_INTEGER;if(i===Wa)return n.RG;if(i===Lm)return n.RG_INTEGER;if(i===Im)return n.RGBA_INTEGER;if(i===Du||i===Lu||i===Iu||i===Nu)if(o===Rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Du)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Lu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Iu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Nu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Du)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Lu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Iu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Nu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$d||i===jd||i===Kd||i===Zd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===$d)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jd||i===Qd||i===ep||i===tp||i===np||i===ip||i===rp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Jd||i===Qd)return o===Rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ep)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===tp)return s.COMPRESSED_R11_EAC;if(i===np)return s.COMPRESSED_SIGNED_R11_EAC;if(i===ip)return s.COMPRESSED_RG11_EAC;if(i===rp)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===sp||i===op||i===ap||i===lp||i===cp||i===up||i===fp||i===hp||i===dp||i===pp||i===mp||i===gp||i===_p||i===vp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===sp)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===op)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ap)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===lp)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===cp)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===up)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fp)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hp)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dp)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pp)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mp)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gp)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_p)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vp)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xp||i===yp||i===Sp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===xp)return o===Rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mp||i===bp||i===Ep||i===Tp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Mp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===bp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ep)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===uc?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const p2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m2=`
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

}`;class g2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new ES(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new hr({vertexShader:p2,fragmentShader:m2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qi(new Ac(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _2 extends Ya{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,p=null;const m=typeof XRWebGLBinding<"u",_=new g2,g={},v=t.getContextAttributes();let y=null,x=null;const E=[],T=[],w=new gt;let S=null;const M=new er;M.viewport=new tn;const P=new er;P.viewport=new tn;const L=[M,P],R=new RC;let O=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let W=E[re];return W===void 0&&(W=new xh,E[re]=W),W.getTargetRaySpace()},this.getControllerGrip=function(re){let W=E[re];return W===void 0&&(W=new xh,E[re]=W),W.getGripSpace()},this.getHand=function(re){let W=E[re];return W===void 0&&(W=new xh,E[re]=W),W.getHandSpace()};function X(re){const W=T.indexOf(re.inputSource);if(W===-1)return;const K=E[W];K!==void 0&&(K.update(re.inputSource,re.frame,c||o),K.dispatchEvent({type:re.type,data:re.inputSource}))}function z(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",k);for(let re=0;re<E.length;re++){const W=T[re];W!==null&&(T[re]=null,E[re].disconnect(W))}O=null,V=null,_.reset();for(const re in g)delete g[re];e.setRenderTarget(y),h=null,f=null,d=null,r=null,x=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&Je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&Je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&m&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",z),r.addEventListener("inputsourceschange",k),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(w),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let K=null,le=null,he=null;v.depth&&(he=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=v.stencil?Mo:us,le=v.stencil?uc:Or);const ye={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(ye),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Lr(f.textureWidth,f.textureHeight,{format:ir,type:ki,depthTexture:new fc(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const K={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new Lr(h.framebufferWidth,h.framebufferHeight,{format:ir,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),We.setContext(r),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(re){for(let W=0;W<re.removed.length;W++){const K=re.removed[W],le=T.indexOf(K);le>=0&&(T[le]=null,E[le].disconnect(K))}for(let W=0;W<re.added.length;W++){const K=re.added[W];let le=T.indexOf(K);if(le===-1){for(let ye=0;ye<E.length;ye++)if(ye>=T.length){T.push(K),le=ye;break}else if(T[ye]===null){T[ye]=K,le=ye;break}if(le===-1)break}const he=E[le];he&&he.connect(K)}}const Y=new J,oe=new J;function F(re,W,K){Y.setFromMatrixPosition(W.matrixWorld),oe.setFromMatrixPosition(K.matrixWorld);const le=Y.distanceTo(oe),he=W.projectionMatrix.elements,ye=K.projectionMatrix.elements,N=he[14]/(he[10]-1),I=he[14]/(he[10]+1),G=(he[9]+1)/he[5],Q=(he[9]-1)/he[5],Z=(he[8]-1)/he[0],U=(ye[8]+1)/ye[0],D=N*Z,pe=N*U,ce=le/(-Z+U),se=ce*-Z;if(W.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(se),re.translateZ(ce),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),he[10]===-1)re.projectionMatrix.copy(W.projectionMatrix),re.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{const ue=N+ce,C=I+ce,b=D-se,B=pe+(le-se),j=G*I/C*ue,ne=Q*I/C*ue;re.projectionMatrix.makePerspective(b,B,j,ne,ue,C),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function de(re,W){W===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(W.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let W=re.near,K=re.far;_.texture!==null&&(_.depthNear>0&&(W=_.depthNear),_.depthFar>0&&(K=_.depthFar)),R.near=P.near=M.near=W,R.far=P.far=M.far=K,(O!==R.near||V!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),O=R.near,V=R.far),R.layers.mask=re.layers.mask|6,M.layers.mask=R.layers.mask&-5,P.layers.mask=R.layers.mask&-3;const le=re.parent,he=R.cameras;de(R,le);for(let ye=0;ye<he.length;ye++)de(he[ye],le);he.length===2?F(R,M,P):R.projectionMatrix.copy(M.projectionMatrix),fe(re,R,le)};function fe(re,W,K){K===null?re.matrix.copy(W.matrixWorld):(re.matrix.copy(K.matrixWorld),re.matrix.invert(),re.matrix.multiply(W.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(W.projectionMatrix),re.projectionMatrixInverse.copy(W.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=wp*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(re){l=re,f!==null&&(f.fixedFoveation=re),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=re)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(R)},this.getCameraTexture=function(re){return g[re]};let Ie=null;function He(re,W){if(u=W.getViewerPose(c||o),p=W,u!==null){const K=u.views;h!==null&&(e.setRenderTargetFramebuffer(x,h.framebuffer),e.setRenderTarget(x));let le=!1;K.length!==R.cameras.length&&(R.cameras.length=0,le=!0);for(let I=0;I<K.length;I++){const G=K[I];let Q=null;if(h!==null)Q=h.getViewport(G);else{const U=d.getViewSubImage(f,G);Q=U.viewport,I===0&&(e.setRenderTargetTextures(x,U.colorTexture,U.depthStencilTexture),e.setRenderTarget(x))}let Z=L[I];Z===void 0&&(Z=new er,Z.layers.enable(I),Z.viewport=new tn,L[I]=Z),Z.matrix.fromArray(G.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(G.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(Q.x,Q.y,Q.width,Q.height),I===0&&(R.matrix.copy(Z.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),le===!0&&R.cameras.push(Z)}const he=r.enabledFeatures;if(he&&he.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&m){d=i.getBinding();const I=d.getDepthInformation(K[0]);I&&I.isValid&&I.texture&&_.init(I,r.renderState)}if(he&&he.includes("camera-access")&&m){e.state.unbindTexture(),d=i.getBinding();for(let I=0;I<K.length;I++){const G=K[I].camera;if(G){let Q=g[G];Q||(Q=new ES,g[G]=Q);const Z=d.getCameraImage(G);Q.sourceTexture=Z}}}}for(let K=0;K<E.length;K++){const le=T[K],he=E[K];le!==null&&he!==void 0&&he.update(le,W,c||o)}Ie&&Ie(re,W),W.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:W}),p=null}const We=new PS;We.setAnimationLoop(He),this.setAnimationLoop=function(re){Ie=re},this.dispose=function(){}}}const oo=new fs,v2=new qt;function x2(n,e){function t(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function i(_,g){g.color.getRGB(_.fogColor.value,CS(n)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function r(_,g,v,y,x){g.isMeshBasicMaterial?s(_,g):g.isMeshLambertMaterial?(s(_,g),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(_,g),d(_,g)):g.isMeshPhongMaterial?(s(_,g),u(_,g),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(_,g),f(_,g),g.isMeshPhysicalMaterial&&h(_,g,x)):g.isMeshMatcapMaterial?(s(_,g),p(_,g)):g.isMeshDepthMaterial?s(_,g):g.isMeshDistanceMaterial?(s(_,g),m(_,g)):g.isMeshNormalMaterial?s(_,g):g.isLineBasicMaterial?(o(_,g),g.isLineDashedMaterial&&a(_,g)):g.isPointsMaterial?l(_,g,v,y):g.isSpriteMaterial?c(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,t(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===hi&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,t(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===hi&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,t(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,t(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);const v=e.get(g),y=v.envMap,x=v.envMapRotation;y&&(_.envMap.value=y,oo.copy(x),oo.x*=-1,oo.y*=-1,oo.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(oo.y*=-1,oo.z*=-1),_.envMapRotation.value.setFromMatrix4(v2.makeRotationFromEuler(oo)),_.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,_.aoMapTransform))}function o(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform))}function a(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function l(_,g,v,y){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*v,_.scale.value=y*.5,g.map&&(_.map.value=g.map,t(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function c(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function u(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function d(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function f(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function h(_,g,v){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===hi&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=v.texture,_.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,_.specularIntensityMapTransform))}function p(_,g){g.matcap&&(_.matcap.value=g.matcap)}function m(_,g){const v=e.get(g).light;_.referencePosition.value.setFromMatrixPosition(v.matrixWorld),_.nearDistance.value=v.shadow.camera.near,_.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function y2(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const x=y.program;i.uniformBlockBinding(v,x)}function c(v,y){let x=r[v.id];x===void 0&&(p(v),x=u(v),r[v.id]=x,v.addEventListener("dispose",_));const E=y.program;i.updateUBOMapping(v,E);const T=e.render.frame;s[v.id]!==T&&(f(v),s[v.id]=T)}function u(v){const y=d();v.__bindingPointIndex=y;const x=n.createBuffer(),E=v.__size,T=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,E,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=r[v.id],x=v.uniforms,E=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let T=0,w=x.length;T<w;T++){const S=Array.isArray(x[T])?x[T]:[x[T]];for(let M=0,P=S.length;M<P;M++){const L=S[M];if(h(L,T,M,E)===!0){const R=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let V=0;for(let X=0;X<O.length;X++){const z=O[X],k=m(z);typeof z=="number"||typeof z=="boolean"?(L.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,R+V,L.__data)):z.isMatrix3?(L.__data[0]=z.elements[0],L.__data[1]=z.elements[1],L.__data[2]=z.elements[2],L.__data[3]=0,L.__data[4]=z.elements[3],L.__data[5]=z.elements[4],L.__data[6]=z.elements[5],L.__data[7]=0,L.__data[8]=z.elements[6],L.__data[9]=z.elements[7],L.__data[10]=z.elements[8],L.__data[11]=0):(z.toArray(L.__data,V),V+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,R,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(v,y,x,E){const T=v.value,w=y+"_"+x;if(E[w]===void 0)return typeof T=="number"||typeof T=="boolean"?E[w]=T:E[w]=T.clone(),!0;{const S=E[w];if(typeof T=="number"||typeof T=="boolean"){if(S!==T)return E[w]=T,!0}else if(S.equals(T)===!1)return S.copy(T),!0}return!1}function p(v){const y=v.uniforms;let x=0;const E=16;for(let w=0,S=y.length;w<S;w++){const M=Array.isArray(y[w])?y[w]:[y[w]];for(let P=0,L=M.length;P<L;P++){const R=M[P],O=Array.isArray(R.value)?R.value:[R.value];for(let V=0,X=O.length;V<X;V++){const z=O[V],k=m(z),Y=x%E,oe=Y%k.boundary,F=Y+oe;x+=oe,F!==0&&E-F<k.storage&&(x+=E-F),R.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=x,x+=k.storage}}}const T=x%E;return T>0&&(x+=E-T),v.__size=x,v.__cache={},this}function m(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?Je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Je("WebGLRenderer: Unsupported uniform value type.",v),y}function _(v){const y=v.target;y.removeEventListener("dispose",_);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function g(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:g}}const S2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _r=null;function M2(){return _r===null&&(_r=new SS(S2,16,16,Wa,cs),_r.name="DFG_LUT",_r.minFilter=Wn,_r.magFilter=Wn,_r.wrapS=es,_r.wrapT=es,_r.generateMipmaps=!1,_r.needsUpdate=!0),_r}class b2{constructor(e={}){const{canvas:t=qA(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=ki}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const m=h,_=new Set([Im,Lm,Dm]),g=new Set([ki,Or,cc,uc,Cm,Rm]),v=new Uint32Array(4),y=new Int32Array(4);let x=null,E=null;const T=[],w=[];let S=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let P=!1;this._outputColorSpace=Oi;let L=0,R=0,O=null,V=-1,X=null;const z=new tn,k=new tn;let Y=null;const oe=new Pt(0);let F=0,de=t.width,fe=t.height,Ie=1,He=null,We=null;const re=new tn(0,0,de,fe),W=new tn(0,0,de,fe);let K=!1;const le=new MS;let he=!1,ye=!1;const N=new qt,I=new J,G=new tn,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Z=!1;function U(){return O===null?Ie:1}let D=i;function pe(A,q){return t.getContext(A,q)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wm}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",_t,!1),D===null){const q="webgl2";if(D=pe(q,A),D===null)throw pe(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw xt("WebGLRenderer: "+A.message),A}let ce,se,ue,C,b,B,j,ne,$,Me,me,Ue,Te,ge,ve,Ee,Re,we,je,H,be,xe,Pe;function _e(){ce=new bD(D),ce.init(),be=new d2(D,ce),se=new mD(D,ce,e,be),ue=new f2(D,ce),se.reversedDepthBuffer&&f&&ue.buffers.depth.setReversed(!0),C=new wD(D),b=new ZL,B=new h2(D,ce,ue,b,se,be,C),j=new MD(M),ne=new DC(D),xe=new dD(D,ne),$=new ED(D,ne,C,xe),Me=new CD(D,$,ne,xe,C),we=new AD(D,se,B),ve=new gD(b),me=new KL(M,j,ce,se,xe,ve),Ue=new x2(M,b),Te=new QL,ge=new s2(ce),Re=new hD(M,j,ue,Me,p,l),Ee=new u2(M,Me,se),Pe=new y2(D,C,se,ue),je=new pD(D,ce,C),H=new TD(D,ce,C),C.programs=me.programs,M.capabilities=se,M.extensions=ce,M.properties=b,M.renderLists=Te,M.shadowMap=Ee,M.state=ue,M.info=C}_e(),m!==ki&&(S=new PD(m,t.width,t.height,r,s));const ae=new _2(M,D);this.xr=ae,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=ce.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ce.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ie},this.setPixelRatio=function(A){A!==void 0&&(Ie=A,this.setSize(de,fe,!1))},this.getSize=function(A){return A.set(de,fe)},this.setSize=function(A,q,ie=!0){if(ae.isPresenting){Je("WebGLRenderer: Can't change size while VR device is presenting.");return}de=A,fe=q,t.width=Math.floor(A*Ie),t.height=Math.floor(q*Ie),ie===!0&&(t.style.width=A+"px",t.style.height=q+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(de*Ie,fe*Ie).floor()},this.setDrawingBufferSize=function(A,q,ie){de=A,fe=q,Ie=ie,t.width=Math.floor(A*ie),t.height=Math.floor(q*ie),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(m===ki){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(re)},this.setViewport=function(A,q,ie,te){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,q,ie,te),ue.viewport(z.copy(re).multiplyScalar(Ie).round())},this.getScissor=function(A){return A.copy(W)},this.setScissor=function(A,q,ie,te){A.isVector4?W.set(A.x,A.y,A.z,A.w):W.set(A,q,ie,te),ue.scissor(k.copy(W).multiplyScalar(Ie).round())},this.getScissorTest=function(){return K},this.setScissorTest=function(A){ue.setScissorTest(K=A)},this.setOpaqueSort=function(A){He=A},this.setTransparentSort=function(A){We=A},this.getClearColor=function(A){return A.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,ie=!0){let te=0;if(A){let ee=!1;if(O!==null){const Ae=O.texture.format;ee=_.has(Ae)}if(ee){const Ae=O.texture.type,De=g.has(Ae),Ce=Re.getClearColor(),ke=Re.getClearAlpha(),Be=Ce.r,rt=Ce.g,lt=Ce.b;De?(v[0]=Be,v[1]=rt,v[2]=lt,v[3]=ke,D.clearBufferuiv(D.COLOR,0,v)):(y[0]=Be,y[1]=rt,y[2]=lt,y[3]=ke,D.clearBufferiv(D.COLOR,0,y))}else te|=D.COLOR_BUFFER_BIT}q&&(te|=D.DEPTH_BUFFER_BIT),ie&&(te|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&D.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",_t,!1),Re.dispose(),Te.dispose(),ge.dispose(),b.dispose(),j.dispose(),Me.dispose(),xe.dispose(),Pe.dispose(),me.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Ze),ae.removeEventListener("sessionend",Jt),et.stop()};function Fe(A){A.preventDefault(),$_("WebGLRenderer: Context Lost."),P=!0}function qe(){$_("WebGLRenderer: Context Restored."),P=!1;const A=C.autoReset,q=Ee.enabled,ie=Ee.autoUpdate,te=Ee.needsUpdate,ee=Ee.type;_e(),C.autoReset=A,Ee.enabled=q,Ee.autoUpdate=ie,Ee.needsUpdate=te,Ee.type=ee}function _t(A){xt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Oe(A){const q=A.target;q.removeEventListener("dispose",Oe),Ve(q)}function Ve(A){st(A),b.remove(A)}function st(A){const q=b.get(A).programs;q!==void 0&&(q.forEach(function(ie){me.releaseProgram(ie)}),A.isShaderMaterial&&me.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,ie,te,ee,Ae){q===null&&(q=Q);const De=ee.isMesh&&ee.matrixWorld.determinant()<0,Ce=Di(A,q,ie,te,ee);ue.setMaterial(te,De);let ke=ie.index,Be=1;if(te.wireframe===!0){if(ke=$.getWireframeAttribute(ie),ke===void 0)return;Be=2}const rt=ie.drawRange,lt=ie.attributes.position;let Xe=rt.start*Be,Dt=(rt.start+rt.count)*Be;Ae!==null&&(Xe=Math.max(Xe,Ae.start*Be),Dt=Math.min(Dt,(Ae.start+Ae.count)*Be)),ke!==null?(Xe=Math.max(Xe,0),Dt=Math.min(Dt,ke.count)):lt!=null&&(Xe=Math.max(Xe,0),Dt=Math.min(Dt,lt.count));const Qt=Dt-Xe;if(Qt<0||Qt===1/0)return;xe.setup(ee,te,Ce,ie,ke);let $t,Lt=je;if(ke!==null&&($t=ne.get(ke),Lt=H,Lt.setIndex($t)),ee.isMesh)te.wireframe===!0?(ue.setLineWidth(te.wireframeLinewidth*U()),Lt.setMode(D.LINES)):Lt.setMode(D.TRIANGLES);else if(ee.isLine){let Nn=te.linewidth;Nn===void 0&&(Nn=1),ue.setLineWidth(Nn*U()),ee.isLineSegments?Lt.setMode(D.LINES):ee.isLineLoop?Lt.setMode(D.LINE_LOOP):Lt.setMode(D.LINE_STRIP)}else ee.isPoints?Lt.setMode(D.POINTS):ee.isSprite&&Lt.setMode(D.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)cf("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Lt.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))Lt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const Nn=ee._multiDrawStarts,Ge=ee._multiDrawCounts,pi=ee._multiDrawCount,vt=ke?ne.get(ke).bytesPerElement:1,$i=b.get(te).currentProgram.getUniforms();for(let pr=0;pr<pi;pr++)$i.setValue(D,"_gl_DrawID",pr),Lt.render(Nn[pr]/vt,Ge[pr])}else if(ee.isInstancedMesh)Lt.renderInstances(Xe,Qt,ee.count);else if(ie.isInstancedBufferGeometry){const Nn=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Ge=Math.min(ie.instanceCount,Nn);Lt.renderInstances(Xe,Qt,Ge)}else Lt.render(Xe,Qt)};function Le(A,q,ie){A.transparent===!0&&A.side===Jr&&A.forceSinglePass===!1?(A.side=hi,A.needsUpdate=!0,Ln(A,q,ie),A.side=Xs,A.needsUpdate=!0,Ln(A,q,ie),A.side=Jr):Ln(A,q,ie)}this.compile=function(A,q,ie=null){ie===null&&(ie=A),E=ge.get(ie),E.init(q),w.push(E),ie.traverseVisible(function(ee){ee.isLight&&ee.layers.test(q.layers)&&(E.pushLight(ee),ee.castShadow&&E.pushShadow(ee))}),A!==ie&&A.traverseVisible(function(ee){ee.isLight&&ee.layers.test(q.layers)&&(E.pushLight(ee),ee.castShadow&&E.pushShadow(ee))}),E.setupLights();const te=new Set;return A.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Ae=ee.material;if(Ae)if(Array.isArray(Ae))for(let De=0;De<Ae.length;De++){const Ce=Ae[De];Le(Ce,ie,ee),te.add(Ce)}else Le(Ae,ie,ee),te.add(Ae)}),E=w.pop(),te},this.compileAsync=function(A,q,ie=null){const te=this.compile(A,q,ie);return new Promise(ee=>{function Ae(){if(te.forEach(function(De){b.get(De).currentProgram.isReady()&&te.delete(De)}),te.size===0){ee(A);return}setTimeout(Ae,10)}ce.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Ke=null;function Ye(A){Ke&&Ke(A)}function Ze(){et.stop()}function Jt(){et.start()}const et=new PS;et.setAnimationLoop(Ye),typeof self<"u"&&et.setContext(self),this.setAnimationLoop=function(A){Ke=A,ae.setAnimationLoop(A),A===null?et.stop():et.start()},ae.addEventListener("sessionstart",Ze),ae.addEventListener("sessionend",Jt),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;const ie=ae.enabled===!0&&ae.isPresenting===!0,te=S!==null&&(O===null||ie)&&S.begin(M,O);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(q),q=ae.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,q,O),E=ge.get(A,w.length),E.init(q),w.push(E),N.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),le.setFromProjectionMatrix(N,Rr,q.reversedDepth),ye=this.localClippingEnabled,he=ve.init(this.clippingPlanes,ye),x=Te.get(A,T.length),x.init(),T.push(x),ae.enabled===!0&&ae.isPresenting===!0){const De=M.xr.getDepthSensingMesh();De!==null&&zt(De,q,-1/0,M.sortObjects)}zt(A,q,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(He,We),Z=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Z&&Re.addToRenderList(x,A),this.info.render.frame++,he===!0&&ve.beginShadows();const ee=E.state.shadowsArray;if(Ee.render(ee,A,q),he===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&S.hasRenderPass())===!1){const De=x.opaque,Ce=x.transmissive;if(E.setupLights(),q.isArrayCamera){const ke=q.cameras;if(Ce.length>0)for(let Be=0,rt=ke.length;Be<rt;Be++){const lt=ke[Be];Ht(De,Ce,A,lt)}Z&&Re.render(A);for(let Be=0,rt=ke.length;Be<rt;Be++){const lt=ke[Be];ln(x,A,lt,lt.viewport)}}else Ce.length>0&&Ht(De,Ce,A,q),Z&&Re.render(A),ln(x,A,q)}O!==null&&R===0&&(B.updateMultisampleRenderTarget(O),B.updateRenderTargetMipmap(O)),te&&S.end(M),A.isScene===!0&&A.onAfterRender(M,A,q),xe.resetDefaultState(),V=-1,X=null,w.pop(),w.length>0?(E=w[w.length-1],he===!0&&ve.setGlobalState(M.clippingPlanes,E.state.camera)):E=null,T.pop(),T.length>0?x=T[T.length-1]:x=null};function zt(A,q,ie,te){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)E.pushLight(A),A.castShadow&&E.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||le.intersectsSprite(A)){te&&G.setFromMatrixPosition(A.matrixWorld).applyMatrix4(N);const De=Me.update(A),Ce=A.material;Ce.visible&&x.push(A,De,Ce,ie,G.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||le.intersectsObject(A))){const De=Me.update(A),Ce=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),G.copy(A.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),G.copy(De.boundingSphere.center)),G.applyMatrix4(A.matrixWorld).applyMatrix4(N)),Array.isArray(Ce)){const ke=De.groups;for(let Be=0,rt=ke.length;Be<rt;Be++){const lt=ke[Be],Xe=Ce[lt.materialIndex];Xe&&Xe.visible&&x.push(A,De,Xe,ie,G.z,lt)}}else Ce.visible&&x.push(A,De,Ce,ie,G.z,null)}}const Ae=A.children;for(let De=0,Ce=Ae.length;De<Ce;De++)zt(Ae[De],q,ie,te)}function ln(A,q,ie,te){const{opaque:ee,transmissive:Ae,transparent:De}=A;E.setupLightsView(ie),he===!0&&ve.setGlobalState(M.clippingPlanes,ie),te&&ue.viewport(z.copy(te)),ee.length>0&&Ct(ee,q,ie),Ae.length>0&&Ct(Ae,q,ie),De.length>0&&Ct(De,q,ie),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Ht(A,q,ie,te){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[te.id]===void 0){const Xe=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[te.id]=new Lr(1,1,{generateMipmaps:!0,type:Xe?cs:ki,minFilter:So,samples:Math.max(4,se.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace})}const Ae=E.state.transmissionRenderTarget[te.id],De=te.viewport||z;Ae.setSize(De.z*M.transmissionResolutionScale,De.w*M.transmissionResolutionScale);const Ce=M.getRenderTarget(),ke=M.getActiveCubeFace(),Be=M.getActiveMipmapLevel();M.setRenderTarget(Ae),M.getClearColor(oe),F=M.getClearAlpha(),F<1&&M.setClearColor(16777215,.5),M.clear(),Z&&Re.render(ie);const rt=M.toneMapping;M.toneMapping=Dr;const lt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),E.setupLightsView(te),he===!0&&ve.setGlobalState(M.clippingPlanes,te),Ct(A,ie,te),B.updateMultisampleRenderTarget(Ae),B.updateRenderTargetMipmap(Ae),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Dt=0,Qt=q.length;Dt<Qt;Dt++){const $t=q[Dt],{object:Lt,geometry:Nn,material:Ge,group:pi}=$t;if(Ge.side===Jr&&Lt.layers.test(te.layers)){const vt=Ge.side;Ge.side=hi,Ge.needsUpdate=!0,bt(Lt,ie,te,Nn,Ge,pi),Ge.side=vt,Ge.needsUpdate=!0,Xe=!0}}Xe===!0&&(B.updateMultisampleRenderTarget(Ae),B.updateRenderTargetMipmap(Ae))}M.setRenderTarget(Ce,ke,Be),M.setClearColor(oe,F),lt!==void 0&&(te.viewport=lt),M.toneMapping=rt}function Ct(A,q,ie){const te=q.isScene===!0?q.overrideMaterial:null;for(let ee=0,Ae=A.length;ee<Ae;ee++){const De=A[ee],{object:Ce,geometry:ke,group:Be}=De;let rt=De.material;rt.allowOverride===!0&&te!==null&&(rt=te),Ce.layers.test(ie.layers)&&bt(Ce,q,ie,ke,rt,Be)}}function bt(A,q,ie,te,ee,Ae){A.onBeforeRender(M,q,ie,te,ee,Ae),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ee.onBeforeRender(M,q,ie,te,A,Ae),ee.transparent===!0&&ee.side===Jr&&ee.forceSinglePass===!1?(ee.side=hi,ee.needsUpdate=!0,M.renderBufferDirect(ie,q,te,ee,A,Ae),ee.side=Xs,ee.needsUpdate=!0,M.renderBufferDirect(ie,q,te,ee,A,Ae),ee.side=Jr):M.renderBufferDirect(ie,q,te,ee,A,Ae),A.onAfterRender(M,q,ie,te,ee,Ae)}function Ln(A,q,ie){q.isScene!==!0&&(q=Q);const te=b.get(A),ee=E.state.lights,Ae=E.state.shadowsArray,De=ee.state.version,Ce=me.getParameters(A,ee.state,Ae,q,ie),ke=me.getProgramCacheKey(Ce);let Be=te.programs;te.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,te.fog=q.fog;const rt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;te.envMap=j.get(A.envMap||te.environment,rt),te.envMapRotation=te.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,Be===void 0&&(A.addEventListener("dispose",Oe),Be=new Map,te.programs=Be);let lt=Be.get(ke);if(lt!==void 0){if(te.currentProgram===lt&&te.lightsStateVersion===De)return In(A,Ce),lt}else Ce.uniforms=me.getUniforms(A),A.onBeforeCompile(Ce,M),lt=me.acquireProgram(Ce,ke),Be.set(ke,lt),te.uniforms=Ce.uniforms;const Xe=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=ve.uniform),In(A,Ce),te.needsLights=un(A),te.lightsStateVersion=De,te.needsLights&&(Xe.ambientLightColor.value=ee.state.ambient,Xe.lightProbe.value=ee.state.probe,Xe.directionalLights.value=ee.state.directional,Xe.directionalLightShadows.value=ee.state.directionalShadow,Xe.spotLights.value=ee.state.spot,Xe.spotLightShadows.value=ee.state.spotShadow,Xe.rectAreaLights.value=ee.state.rectArea,Xe.ltc_1.value=ee.state.rectAreaLTC1,Xe.ltc_2.value=ee.state.rectAreaLTC2,Xe.pointLights.value=ee.state.point,Xe.pointLightShadows.value=ee.state.pointShadow,Xe.hemisphereLights.value=ee.state.hemi,Xe.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Xe.spotLightMatrix.value=ee.state.spotLightMatrix,Xe.spotLightMap.value=ee.state.spotLightMap,Xe.pointShadowMatrix.value=ee.state.pointShadowMatrix),te.currentProgram=lt,te.uniformsList=null,lt}function Ft(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Ou.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function In(A,q){const ie=b.get(A);ie.outputColorSpace=q.outputColorSpace,ie.batching=q.batching,ie.batchingColor=q.batchingColor,ie.instancing=q.instancing,ie.instancingColor=q.instancingColor,ie.instancingMorph=q.instancingMorph,ie.skinning=q.skinning,ie.morphTargets=q.morphTargets,ie.morphNormals=q.morphNormals,ie.morphColors=q.morphColors,ie.morphTargetsCount=q.morphTargetsCount,ie.numClippingPlanes=q.numClippingPlanes,ie.numIntersection=q.numClipIntersection,ie.vertexAlphas=q.vertexAlphas,ie.vertexTangents=q.vertexTangents,ie.toneMapping=q.toneMapping}function Di(A,q,ie,te,ee){q.isScene!==!0&&(q=Q),B.resetTextureUnits();const Ae=q.fog,De=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?q.environment:null,Ce=O===null?M.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Xa,ke=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Be=j.get(te.envMap||De,ke),rt=te.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,lt=!!ie.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Xe=!!ie.morphAttributes.position,Dt=!!ie.morphAttributes.normal,Qt=!!ie.morphAttributes.color;let $t=Dr;te.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&($t=M.toneMapping);const Lt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Nn=Lt!==void 0?Lt.length:0,Ge=b.get(te),pi=E.state.lights;if(he===!0&&(ye===!0||A!==X)){const yn=A===X&&te.id===V;ve.setState(te,A,yn)}let vt=!1;te.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==pi.state.version||Ge.outputColorSpace!==Ce||ee.isBatchedMesh&&Ge.batching===!1||!ee.isBatchedMesh&&Ge.batching===!0||ee.isBatchedMesh&&Ge.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&Ge.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&Ge.instancing===!1||!ee.isInstancedMesh&&Ge.instancing===!0||ee.isSkinnedMesh&&Ge.skinning===!1||!ee.isSkinnedMesh&&Ge.skinning===!0||ee.isInstancedMesh&&Ge.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Ge.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Ge.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Ge.instancingMorph===!1&&ee.morphTexture!==null||Ge.envMap!==Be||te.fog===!0&&Ge.fog!==Ae||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==ve.numPlanes||Ge.numIntersection!==ve.numIntersection)||Ge.vertexAlphas!==rt||Ge.vertexTangents!==lt||Ge.morphTargets!==Xe||Ge.morphNormals!==Dt||Ge.morphColors!==Qt||Ge.toneMapping!==$t||Ge.morphTargetsCount!==Nn)&&(vt=!0):(vt=!0,Ge.__version=te.version);let $i=Ge.currentProgram;vt===!0&&($i=Ln(te,q,ee));let pr=!1,$s=!1,Vo=!1;const Nt=$i.getUniforms(),wn=Ge.uniforms;if(ue.useProgram($i.program)&&(pr=!0,$s=!0,Vo=!0),te.id!==V&&(V=te.id,$s=!0),pr||X!==A){ue.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Nt.setValue(D,"projectionMatrix",A.projectionMatrix),Nt.setValue(D,"viewMatrix",A.matrixWorldInverse);const ps=Nt.map.cameraPosition;ps!==void 0&&ps.setValue(D,I.setFromMatrixPosition(A.matrixWorld)),se.logarithmicDepthBuffer&&Nt.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Nt.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),X!==A&&(X=A,$s=!0,Vo=!0)}if(Ge.needsLights&&(pi.state.directionalShadowMap.length>0&&Nt.setValue(D,"directionalShadowMap",pi.state.directionalShadowMap,B),pi.state.spotShadowMap.length>0&&Nt.setValue(D,"spotShadowMap",pi.state.spotShadowMap,B),pi.state.pointShadowMap.length>0&&Nt.setValue(D,"pointShadowMap",pi.state.pointShadowMap,B)),ee.isSkinnedMesh){Nt.setOptional(D,ee,"bindMatrix"),Nt.setOptional(D,ee,"bindMatrixInverse");const yn=ee.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Nt.setValue(D,"boneTexture",yn.boneTexture,B))}ee.isBatchedMesh&&(Nt.setOptional(D,ee,"batchingTexture"),Nt.setValue(D,"batchingTexture",ee._matricesTexture,B),Nt.setOptional(D,ee,"batchingIdTexture"),Nt.setValue(D,"batchingIdTexture",ee._indirectTexture,B),Nt.setOptional(D,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Nt.setValue(D,"batchingColorTexture",ee._colorsTexture,B));const ds=ie.morphAttributes;if((ds.position!==void 0||ds.normal!==void 0||ds.color!==void 0)&&we.update(ee,ie,$i),($s||Ge.receiveShadow!==ee.receiveShadow)&&(Ge.receiveShadow=ee.receiveShadow,Nt.setValue(D,"receiveShadow",ee.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&q.environment!==null&&(wn.envMapIntensity.value=q.environmentIntensity),wn.dfgLUT!==void 0&&(wn.dfgLUT.value=M2()),$s&&(Nt.setValue(D,"toneMappingExposure",M.toneMappingExposure),Ge.needsLights&&cn(wn,Vo),Ae&&te.fog===!0&&Ue.refreshFogUniforms(wn,Ae),Ue.refreshMaterialUniforms(wn,te,Ie,fe,E.state.transmissionRenderTarget[A.id]),Ou.upload(D,Ft(Ge),wn,B)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Ou.upload(D,Ft(Ge),wn,B),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Nt.setValue(D,"center",ee.center),Nt.setValue(D,"modelViewMatrix",ee.modelViewMatrix),Nt.setValue(D,"normalMatrix",ee.normalMatrix),Nt.setValue(D,"modelMatrix",ee.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const yn=te.uniformsGroups;for(let ps=0,Go=yn.length;ps<Go;ps++){const km=yn[ps];Pe.update(km,$i),Pe.bind(km,$i)}}return $i}function cn(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function un(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(A,q,ie){const te=b.get(A);te.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),b.get(A.texture).__webglTexture=q,b.get(A.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ie,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const ie=b.get(A);ie.__webglFramebuffer=q,ie.__useDefaultFramebuffer=q===void 0};const xn=D.createFramebuffer();this.setRenderTarget=function(A,q=0,ie=0){O=A,L=q,R=ie;let te=null,ee=!1,Ae=!1;if(A){const Ce=b.get(A);if(Ce.__useDefaultFramebuffer!==void 0){ue.bindFramebuffer(D.FRAMEBUFFER,Ce.__webglFramebuffer),z.copy(A.viewport),k.copy(A.scissor),Y=A.scissorTest,ue.viewport(z),ue.scissor(k),ue.setScissorTest(Y),V=-1;return}else if(Ce.__webglFramebuffer===void 0)B.setupRenderTarget(A);else if(Ce.__hasExternalTextures)B.rebindTextures(A,b.get(A.texture).__webglTexture,b.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const rt=A.depthTexture;if(Ce.__boundDepthTexture!==rt){if(rt!==null&&b.has(rt)&&(A.width!==rt.image.width||A.height!==rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(A)}}const ke=A.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ae=!0);const Be=b.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Be[q])?te=Be[q][ie]:te=Be[q],ee=!0):A.samples>0&&B.useMultisampledRTT(A)===!1?te=b.get(A).__webglMultisampledFramebuffer:Array.isArray(Be)?te=Be[ie]:te=Be,z.copy(A.viewport),k.copy(A.scissor),Y=A.scissorTest}else z.copy(re).multiplyScalar(Ie).floor(),k.copy(W).multiplyScalar(Ie).floor(),Y=K;if(ie!==0&&(te=xn),ue.bindFramebuffer(D.FRAMEBUFFER,te)&&ue.drawBuffers(A,te),ue.viewport(z),ue.scissor(k),ue.setScissorTest(Y),ee){const Ce=b.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ce.__webglTexture,ie)}else if(Ae){const Ce=q;for(let ke=0;ke<A.textures.length;ke++){const Be=b.get(A.textures[ke]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ke,Be.__webglTexture,ie,Ce)}}else if(A!==null&&ie!==0){const Ce=b.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ce.__webglTexture,ie)}V=-1},this.readRenderTargetPixels=function(A,q,ie,te,ee,Ae,De,Ce=0){if(!(A&&A.isWebGLRenderTarget)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=b.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(ke=ke[De]),ke){ue.bindFramebuffer(D.FRAMEBUFFER,ke);try{const Be=A.textures[Ce],rt=Be.format,lt=Be.type;if(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ce),!se.textureFormatReadable(rt)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(lt)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-te&&ie>=0&&ie<=A.height-ee&&D.readPixels(q,ie,te,ee,be.convert(rt),be.convert(lt),Ae)}finally{const Be=O!==null?b.get(O).__webglFramebuffer:null;ue.bindFramebuffer(D.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,q,ie,te,ee,Ae,De,Ce=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=b.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(ke=ke[De]),ke)if(q>=0&&q<=A.width-te&&ie>=0&&ie<=A.height-ee){ue.bindFramebuffer(D.FRAMEBUFFER,ke);const Be=A.textures[Ce],rt=Be.format,lt=Be.type;if(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ce),!se.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Xe),D.bufferData(D.PIXEL_PACK_BUFFER,Ae.byteLength,D.STREAM_READ),D.readPixels(q,ie,te,ee,be.convert(rt),be.convert(lt),0);const Dt=O!==null?b.get(O).__webglFramebuffer:null;ue.bindFramebuffer(D.FRAMEBUFFER,Dt);const Qt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await YA(D,Qt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Xe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Ae),D.deleteBuffer(Xe),D.deleteSync(Qt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,ie=0){const te=Math.pow(2,-ie),ee=Math.floor(A.image.width*te),Ae=Math.floor(A.image.height*te),De=q!==null?q.x:0,Ce=q!==null?q.y:0;B.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,ie,0,0,De,Ce,ee,Ae),ue.unbindTexture()};const Ur=D.createFramebuffer(),Ho=D.createFramebuffer();this.copyTextureToTexture=function(A,q,ie=null,te=null,ee=0,Ae=0){let De,Ce,ke,Be,rt,lt,Xe,Dt,Qt;const $t=A.isCompressedTexture?A.mipmaps[Ae]:A.image;if(ie!==null)De=ie.max.x-ie.min.x,Ce=ie.max.y-ie.min.y,ke=ie.isBox3?ie.max.z-ie.min.z:1,Be=ie.min.x,rt=ie.min.y,lt=ie.isBox3?ie.min.z:0;else{const wn=Math.pow(2,-ee);De=Math.floor($t.width*wn),Ce=Math.floor($t.height*wn),A.isDataArrayTexture?ke=$t.depth:A.isData3DTexture?ke=Math.floor($t.depth*wn):ke=1,Be=0,rt=0,lt=0}te!==null?(Xe=te.x,Dt=te.y,Qt=te.z):(Xe=0,Dt=0,Qt=0);const Lt=be.convert(q.format),Nn=be.convert(q.type);let Ge;q.isData3DTexture?(B.setTexture3D(q,0),Ge=D.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(B.setTexture2DArray(q,0),Ge=D.TEXTURE_2D_ARRAY):(B.setTexture2D(q,0),Ge=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,q.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,q.unpackAlignment);const pi=D.getParameter(D.UNPACK_ROW_LENGTH),vt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),$i=D.getParameter(D.UNPACK_SKIP_PIXELS),pr=D.getParameter(D.UNPACK_SKIP_ROWS),$s=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,$t.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,$t.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Be),D.pixelStorei(D.UNPACK_SKIP_ROWS,rt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,lt);const Vo=A.isDataArrayTexture||A.isData3DTexture,Nt=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const wn=b.get(A),ds=b.get(q),yn=b.get(wn.__renderTarget),ps=b.get(ds.__renderTarget);ue.bindFramebuffer(D.READ_FRAMEBUFFER,yn.__webglFramebuffer),ue.bindFramebuffer(D.DRAW_FRAMEBUFFER,ps.__webglFramebuffer);for(let Go=0;Go<ke;Go++)Vo&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,b.get(A).__webglTexture,ee,lt+Go),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,b.get(q).__webglTexture,Ae,Qt+Go)),D.blitFramebuffer(Be,rt,De,Ce,Xe,Dt,De,Ce,D.DEPTH_BUFFER_BIT,D.NEAREST);ue.bindFramebuffer(D.READ_FRAMEBUFFER,null),ue.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(ee!==0||A.isRenderTargetTexture||b.has(A)){const wn=b.get(A),ds=b.get(q);ue.bindFramebuffer(D.READ_FRAMEBUFFER,Ur),ue.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ho);for(let yn=0;yn<ke;yn++)Vo?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,wn.__webglTexture,ee,lt+yn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,wn.__webglTexture,ee),Nt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ds.__webglTexture,Ae,Qt+yn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ds.__webglTexture,Ae),ee!==0?D.blitFramebuffer(Be,rt,De,Ce,Xe,Dt,De,Ce,D.COLOR_BUFFER_BIT,D.NEAREST):Nt?D.copyTexSubImage3D(Ge,Ae,Xe,Dt,Qt+yn,Be,rt,De,Ce):D.copyTexSubImage2D(Ge,Ae,Xe,Dt,Be,rt,De,Ce);ue.bindFramebuffer(D.READ_FRAMEBUFFER,null),ue.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Nt?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(Ge,Ae,Xe,Dt,Qt,De,Ce,ke,Lt,Nn,$t.data):q.isCompressedArrayTexture?D.compressedTexSubImage3D(Ge,Ae,Xe,Dt,Qt,De,Ce,ke,Lt,$t.data):D.texSubImage3D(Ge,Ae,Xe,Dt,Qt,De,Ce,ke,Lt,Nn,$t):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Ae,Xe,Dt,De,Ce,Lt,Nn,$t.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Ae,Xe,Dt,$t.width,$t.height,Lt,$t.data):D.texSubImage2D(D.TEXTURE_2D,Ae,Xe,Dt,De,Ce,Lt,Nn,$t);D.pixelStorei(D.UNPACK_ROW_LENGTH,pi),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,vt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,$i),D.pixelStorei(D.UNPACK_SKIP_ROWS,pr),D.pixelStorei(D.UNPACK_SKIP_IMAGES,$s),Ae===0&&q.generateMipmaps&&D.generateMipmap(Ge),ue.unbindTexture()},this.initRenderTarget=function(A){b.get(A).__webglFramebuffer===void 0&&B.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?B.setTextureCube(A,0):A.isData3DTexture?B.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?B.setTexture2DArray(A,0):B.setTexture2D(A,0),ue.unbindTexture()},this.resetState=function(){L=0,R=0,O=null,ue.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}const E2=_c({__name:"LightPillar",props:{topColor:{default:"#48FF28"},bottomColor:{default:"#9EF19E"},intensity:{default:1},rotationSpeed:{default:.3},interactive:{type:Boolean,default:!1},className:{default:""},glowAmount:{default:.005},pillarWidth:{default:3},pillarHeight:{default:.4},noiseIntensity:{default:.5},mixBlendMode:{default:"screen"},pillarRotation:{default:0},resolutionScale:{default:.5},targetFPS:{default:30}},setup(n){const e=n,t=rb("containerRef"),i=nt(null),r=ho(null),s=ho(null),o=ho(null),a=ho(null),l=ho(null),c=nt(new gt(0,0)),u=nt(0),d=nt(!0),f=nt(!0);Ov(()=>{const m=document.createElement("canvas");m.getContext("webgl2")||m.getContext("webgl")||m.getContext("experimental-webgl")||(d.value=!1,console.warn("WebGL is not supported in this browser")),m.remove()});let h=null;const p=()=>{if(!t.value||!d.value)return;const m=t.value,_=m.clientWidth,g=m.clientHeight;if(_===0||g===0)return;const v=new cC;o.value=v;const y=new Bm(-1,1,1,-1,0,1);a.value=y;let x;try{x=new b2({antialias:!1,alpha:!0,powerPreference:"low-power",precision:"lowp",stencil:!1,depth:!1})}catch(fe){console.error("Failed to create WebGL renderer:",fe),d.value=!1;return}const E=Math.max(.15,Math.min(1,e.resolutionScale)),T=Math.round(_*E),w=Math.round(g*E);x.setPixelRatio(1),x.setSize(T,w,!1);const S=x.domElement;S.style.width="100%",S.style.height="100%",S.style.display="block",m.appendChild(S),r.value=x;const M=fe=>{const Ie=new Pt(fe);return new J(Ie.r,Ie.g,Ie.b)},P=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,L=`
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
    `,R=new hr({vertexShader:P,fragmentShader:L,uniforms:{uTime:{value:0},uResolution:{value:new gt(T,w)},uMouse:{value:c.value},uTopColor:{value:M(e.topColor)},uBottomColor:{value:M(e.bottomColor)},uIntensity:{value:e.intensity},uInteractive:{value:e.interactive},uGlowAmount:{value:e.glowAmount},uPillarWidth:{value:e.pillarWidth},uPillarHeight:{value:e.pillarHeight},uNoiseIntensity:{value:e.noiseIntensity},uPillarRotation:{value:e.pillarRotation}},transparent:!0,depthWrite:!1,depthTest:!1});s.value=R;const O=new Ac(2,2);l.value=O;const V=new qi(O,R);v.add(V);let X=null;const z=fe=>{if(!e.interactive||X)return;X=window.setTimeout(()=>{X=null},32);const Ie=m.getBoundingClientRect(),He=(fe.clientX-Ie.left)/Ie.width*2-1,We=-((fe.clientY-Ie.top)/Ie.height)*2+1;c.value.set(He,We)};e.interactive&&m.addEventListener("mousemove",z,{passive:!0});const k=new IntersectionObserver(fe=>{f.value=fe[0]?.isIntersecting??!0},{threshold:.01});k.observe(m);let Y=performance.now();const oe=1e3/e.targetFPS,F=fe=>{if(i.value=requestAnimationFrame(F),!s.value||!r.value||!o.value||!a.value||!f.value)return;const Ie=fe-Y;Ie>=oe&&(u.value+=.016*e.rotationSpeed,s.value.uniforms.uTime.value=u.value,r.value.render(o.value,a.value),Y=fe-Ie%oe)};i.value=requestAnimationFrame(F);const de=new ResizeObserver(fe=>{if(!fe.length||!r.value||!s.value)return;const{width:Ie,height:He}=fe[0].contentRect;if(Ie===0||He===0)return;const We=Math.round(Ie*E),re=Math.round(He*E);r.value.setSize(We,re,!1),s.value.uniforms.uResolution.value.set(We,re)});de.observe(m),h=()=>{k.disconnect(),de.disconnect(),e.interactive&&m.removeEventListener("mousemove",z),i.value&&cancelAnimationFrame(i.value),r.value&&(r.value.dispose(),r.value.forceContextLoss(),m.contains(r.value.domElement)&&m.removeChild(r.value.domElement)),s.value&&s.value.dispose(),l.value&&l.value.dispose(),r.value=null,s.value=null,o.value=null,a.value=null,l.value=null,i.value=null}};return dr(()=>{p()}),xc(()=>{h?.()}),or(()=>[e.topColor,e.bottomColor,e.intensity,e.rotationSpeed,e.interactive,e.glowAmount,e.pillarWidth,e.pillarHeight,e.noiseIntensity,e.pillarRotation,e.resolutionScale,e.targetFPS,d.value],()=>{h?.(),p()},{deep:!0}),(m,_)=>d.value?(tt(),yt("div",{key:1,ref_key:"containerRef",ref:t,class:Ir(["light-pillar-container",n.className]),style:wr({mixBlendMode:n.mixBlendMode})},null,6)):(tt(),yt("div",{key:0,class:"light-pillar-fallback",style:wr({mixBlendMode:n.mixBlendMode})}," WebGL not supported ",4))}}),T2=ko(E2,[["__scopeId","data-v-af8fa38a"]]),w2={id:"footer"},A2={class:"container"},C2={class:"footer-cta-content"},R2={class:"availability-badge"},P2={class:"footer-bottom"},D2={class:"footer-nav"},L2={__name:"AppFooter",setup(n){const{t:e}=Mc();an.registerPlugin(it);const t=nt(null),i=nt(document.documentElement.getAttribute("data-theme")||"dark");let r=null;dr(()=>{an.from(t.value,{scrollTrigger:{trigger:t.value,start:"top 88%"},y:50,opacity:0,duration:.9,ease:"power3.out"}),r=new MutationObserver(()=>{i.value=document.documentElement.getAttribute("data-theme")||"dark"}),r.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})}),Uo(()=>{r?.disconnect()});const s=Kt(()=>i.value==="light"?"#c1c3cb":"#48FF28"),o=Kt(()=>i.value==="light"?"#c1c3cb":"#9EF19E"),a=Kt(()=>i.value==="light"?.8:.7);return(l,c)=>{const u=_f("router-link");return tt(),yt("footer",w2,[Se("div",A2,[Se("div",{class:"footer-cta",ref_key:"ctaEl",ref:t},[Mt(T2,{topColor:s.value,bottomColor:o.value,intensity:a.value,rotationSpeed:.8,glowAmount:.002,pillarWidth:3.3,pillarHeight:.4,noiseIntensity:0,pillarRotation:25,interactive:!0,resolutionScale:60,targetFPS:30,mixBlendMode:"screen"},null,8,["topColor","bottomColor","intensity"]),Se("div",C2,[Se("div",R2,[c[0]||(c[0]=Se("span",{class:"availability-dot"},null,-1)),xr(" "+dn(ht(e)("contact.letsWork"))+" "+dn(ht(e)("contact.together")),1)]),Se("h2",null,[xr(dn(ht(e)("contact.letsWork")),1),c[1]||(c[1]=Se("br",null,null,-1)),xr(dn(ht(e)("contact.together"))+".",1)]),Mt(u,{to:"/contact",class:"btn btn-outline"},{default:Bi(()=>[xr(dn(ht(e)("nav.contact")),1)]),_:1}),c[2]||(c[2]=rx('<div class="social-links" style="justify-content:center;margin-top:32px;" data-v-ad136a53><a href="https://github.com/tigcom" class="social-link" aria-label="GitHub" target="_blank" data-v-ad136a53><i class="fab fa-github" data-v-ad136a53></i></a><a href="https://www.linkedin.com/in/phuc-khang-5744b62a4/" class="social-link" aria-label="LinkedIn" target="_blank" data-v-ad136a53><i class="fab fa-linkedin" data-v-ad136a53></i></a></div>',1))])],512),Se("div",P2,[c[3]||(c[3]=Se("p",{class:"footer-copyright"},"© 2026 Phuc Khang. All rights reserved.",-1)),Se("nav",D2,[Mt(u,{to:"/"},{default:Bi(()=>[xr(dn(ht(e)("nav.home")),1)]),_:1}),Mt(u,{to:"/about"},{default:Bi(()=>[xr(dn(ht(e)("nav.about")),1)]),_:1}),Mt(u,{to:"/projects"},{default:Bi(()=>[xr(dn(ht(e)("nav.projects")),1)]),_:1}),Mt(u,{to:"/contact"},{default:Bi(()=>[xr(dn(ht(e)("nav.contact")),1)]),_:1})])])])])}}},I2=ko(L2,[["__scopeId","data-v-ad136a53"]]),N2={class:"mobile-bottom-nav"},O2={class:"nav-icon-container"},U2={key:0,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",viewBox:"0 0 24 24"},F2={key:1,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",viewBox:"0 0 24 24"},B2={key:2,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",viewBox:"0 0 24 24"},k2={key:3,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",viewBox:"0 0 24 24"},z2={key:0,class:"nav-label"},H2={__name:"MobileBottomNav",setup(n){const{t:e}=Mc(),t=Qp(),i=[{path:"/about",label:"nav.about"},{path:"/marketplace",label:"nav.marketplace"},{path:"/projects",label:"nav.projects"},{path:"/contact",label:"nav.contact"}];function r(s){return t.path.startsWith(s)}return(s,o)=>{const a=_f("router-link");return tt(),yt("nav",N2,[(tt(),yt(mn,null,Hu(i,l=>Mt(a,{key:l.path,to:l.path,class:Ir(["nav-item",{active:r(l.path)}])},{default:Bi(()=>[Se("div",O2,[l.path==="/about"?(tt(),yt("svg",U2,[...o[0]||(o[0]=[Se("circle",{cx:"12",cy:"12",r:"10"},null,-1),Se("path",{d:"M8 14s1.5 2 4 2 4-2 4-2"},null,-1),Se("line",{x1:"9",y1:"9",x2:"9.01",y2:"9"},null,-1),Se("line",{x1:"15",y1:"9",x2:"15.01",y2:"9"},null,-1)])])):l.path==="/projects"?(tt(),yt("svg",F2,[...o[1]||(o[1]=[Se("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"},null,-1),Se("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"},null,-1),Se("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"},null,-1),Se("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"},null,-1)])])):l.path==="/marketplace"?(tt(),yt("svg",B2,[...o[2]||(o[2]=[Se("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"},null,-1),Se("line",{x1:"3",y1:"6",x2:"21",y2:"6"},null,-1),Se("path",{d:"M16 10a4 4 0 0 1-8 0"},null,-1)])])):l.path==="/contact"?(tt(),yt("svg",k2,[...o[3]||(o[3]=[Se("line",{x1:"22",y1:"2",x2:"11",y2:"13"},null,-1),Se("polygon",{points:"22 2 15 22 11 13 2 9 22 2"},null,-1)])])):xi("",!0)]),r(l.path)?(tt(),yt("span",z2,dn(ht(e)(l.label)),1)):xi("",!0)]),_:2},1032,["to","class"])),64))])}}},V2=ko(H2,[["__scopeId","data-v-5c6b23c3"]]),G2=nt(!1);function US(){return{isChatOpen:G2}}const W2={class:"chatbot-root"},X2={class:"chatbot-header"},q2={class:"chatbot-header-info"},Y2={class:"chatbot-header-text"},$2={class:"chatbot-header-actions"},j2=["title"],K2=["title"],Z2=["innerHTML"],J2={key:0,class:"chatbot-typing"},Q2={key:1,class:"chatbot-error"},eI={key:0,class:"chatbot-quick-options"},tI=["onClick"],nI={class:"chatbot-input-area"},iI=["placeholder","onKeydown","disabled"],rI=["disabled","aria-label"],sI={__name:"ChatBot",setup(n){const{state:e,t}=Mc(),{isChatOpen:i}=US(),r=nt([]),s=nt([]),o=nt(""),a=nt(!1),l=nt(""),c=nt(null),u=nt(null),d=nt(null);let f="";or(i,R=>{R&&xa(()=>{c.value&&an.fromTo(c.value,{scale:.9,opacity:0},{scale:1,opacity:1,duration:.3,ease:"power3.out"}),r.value.length===0&&m(),L()})});function h(){c.value?an.to(c.value,{scale:.9,opacity:0,duration:.2,ease:"power2.in",onComplete:()=>{i.value=!1}}):i.value=!1}function p(){r.value=[],s.value=[],l.value="",a.value=!1,o.value="",m()}function m(){r.value.push({role:"model",content:t("chatbot.greeting")}),s.value=[{label:t("chatbot.optExplore"),message:t("chatbot.optExplore")},{label:t("chatbot.optFreelance"),message:t("chatbot.optFreelance")},{label:t("chatbot.optRecruiter"),message:t("chatbot.optRecruiter")}],P()}function _(R){s.value=[],v(R.message)}function g(){const R=o.value.trim();!R||a.value||(o.value="",s.value=[],v(R))}async function v(R){f=R,l.value="",r.value.push({role:"user",content:R}),P(),a.value=!0;try{const O=await fetch("/api/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lang:e.lang})});if(!O.ok)throw new Error("Cannot load config");const V=await O.json(),X=r.value.slice(-20).map(F=>({role:F.role==="model"?"model":"user",parts:[{text:F.content}]})),z=`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:streamGenerateContent?alt=sse&key=${V.key}`,k={contents:X,systemInstruction:{parts:[{text:V.systemInstruction}]},generationConfig:{maxOutputTokens:1024,temperature:.7}},Y=await fetch(z,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(k)});if(Y.status===429){l.value=t("chatbot.error")+" (Rate limited)",a.value=!1,P();return}if(!Y.ok)throw new Error(`HTTP ${Y.status}`);if((Y.headers.get("content-type")||"").includes("text/event-stream"))await y(Y);else{const F=await Y.json();if(F.error)throw new Error(F.error);const de=F.candidates?.[0]?.content?.parts?.[0]?.text||"";x(de)}}catch(O){console.error("Chatbot error:",O),l.value=t("chatbot.error")}finally{a.value=!1,P(),L()}}async function y(R){const O=R.body.getReader(),V=new TextDecoder;let X="",z="";const k=r.value.length;for(r.value.push({role:"model",content:""});;){const{done:Y,value:oe}=await O.read();if(Y)break;z+=V.decode(oe,{stream:!0});const F=z.split(`
`);z=F.pop()||"";for(const de of F){if(!de.startsWith("data: "))continue;const fe=de.slice(6).trim();if(!(!fe||fe==="[DONE]"))try{const He=JSON.parse(fe).candidates?.[0]?.content?.parts?.[0]?.text||"";He&&(X+=He,r.value[k].content=E(X),P())}catch{}}}a.value=!1,T(X),P()}function x(R){const O=E(R);r.value.push({role:"model",content:O}),T(R)}function E(R){const O=R.indexOf("[SUGGESTED_OPTIONS]");return O!==-1?R.substring(0,O).trim():R.trim()}function T(R){const O=R.match(/\[SUGGESTED_OPTIONS\]\s*([\s\S]*?)\s*\[\/SUGGESTED_OPTIONS\]/);if(!O){s.value=[];return}try{const V=JSON.parse(O[1]);Array.isArray(V)&&V.length>0&&(s.value=V.slice(0,3).map(X=>({label:X.label,message:X.msg})))}catch{s.value=[]}}function w(){if(!f)return;l.value="";const R=r.value.length-1;r.value[R]?.role==="user"&&r.value.pop(),v(f)}function S(R){if(!R)return"";let O=M(R);return O=O.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),O=O.replace(new RegExp("(?<!\\*)\\*(?!\\*)(.*?)(?<!\\*)\\*(?!\\*)","g"),"<em>$1</em>"),O=O.replace(/\[([^\]]+)\]\((#\/[^)]+)\)/g,'<a href="$2">$1</a>'),O=O.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>'),O=O.replace(/\n/g,"<br>"),O=O.replace(/^[-•]\s+(.+)/gm,'<span style="display:block;padding-left:12px">• $1</span>'),O}function M(R){const O={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"};return R.replace(/[&<>"']/g,V=>O[V])}function P(){xa(()=>{u.value&&(u.value.scrollTop=u.value.scrollHeight)})}function L(){xa(()=>{d.value&&d.value.focus()})}return or(()=>e.lang,()=>{r.value.length<=1&&p()}),(R,O)=>(tt(),yt("div",W2,[ht(i)?(tt(),yt("div",{key:0,class:"chatbot-window",ref_key:"chatWindow",ref:c},[Se("div",X2,[Se("div",q2,[O[2]||(O[2]=Se("div",{class:"chatbot-avatar"},"PK",-1)),Se("div",Y2,[Se("h3",null,dn(ht(t)("chatbot.title")),1),O[1]||(O[1]=Se("span",null,"Online",-1))])]),Se("div",$2,[Se("button",{class:"chatbot-header-btn",onClick:p,title:ht(t)("chatbot.newChat")},[...O[3]||(O[3]=[rx('<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 21h5v-5"></path></svg>',1)])],8,j2),Se("button",{class:"chatbot-header-btn",onClick:h,title:ht(t)("chatbot.close")},[...O[4]||(O[4]=[Se("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",fill:"none",stroke:"currentColor","stroke-width":"2.5",viewBox:"0 0 24 24"},[Se("path",{d:"M18 6 6 18"}),Se("path",{d:"m6 6 12 12"})],-1)])],8,K2)])]),Se("div",{class:"chatbot-messages",ref_key:"messagesEl",ref:u},[(tt(!0),yt(mn,null,Hu(r.value,(V,X)=>(tt(),yt("div",{key:X,class:Ir(["chatbot-msg",V.role==="model"?"chatbot-msg-ai":"chatbot-msg-user"]),innerHTML:V.role==="model"?S(V.content):M(V.content)},null,10,Z2))),128)),a.value?(tt(),yt("div",J2,[...O[5]||(O[5]=[Se("div",{class:"chatbot-typing-dot"},null,-1),Se("div",{class:"chatbot-typing-dot"},null,-1),Se("div",{class:"chatbot-typing-dot"},null,-1)])])):xi("",!0),l.value?(tt(),yt("div",Q2,[Se("span",null,dn(l.value),1),Se("button",{onClick:w},dn(ht(t)("chatbot.retry")),1)])):xi("",!0)],512),s.value.length?(tt(),yt("div",eI,[(tt(!0),yt(mn,null,Hu(s.value,(V,X)=>(tt(),yt("button",{key:X,class:"chatbot-quick-btn",style:wr({animationDelay:`${X*80}ms`}),onClick:z=>_(V)},dn(V.label),13,tI))),128))])):xi("",!0),Se("div",nI,[Kh(Se("input",{ref_key:"inputEl",ref:d,class:"chatbot-input",type:"text",placeholder:ht(t)("chatbot.placeholder"),"onUpdate:modelValue":O[0]||(O[0]=V=>o.value=V),onKeydown:CE(wE(g,["prevent"]),["enter"]),disabled:a.value},null,40,iI),[[ME,o.value]]),Se("button",{class:"chatbot-send-btn",onClick:g,disabled:!o.value.trim()||a.value,"aria-label":ht(t)("chatbot.send")},[...O[6]||(O[6]=[Se("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",stroke:"currentColor","stroke-width":"2.5",viewBox:"0 0 24 24"},[Se("path",{d:"m5 12 14-7-7 14-2-7z"})],-1)])],8,rI)])],512)):xi("",!0)]))}},oI=["aria-label"],aI=.03,lI=520,cI=.08,uI=3.6,fI=120,hI=560,dI=420,pI=4,mI=1600,gI=1100,_I={__name:"PageMascot",props:{directions:{type:String,required:!0},reactions:{type:String,required:!0},size:{type:Number,default:140},label:{type:String,default:"mascot"},ariaLabel:{type:String,default:""}},setup(n){const e=n,t=["up-left","up","up-right","left","center","right","down-left","down","down-right"],i=["blink","heart","sparkle","surprised","wink","bashful","sleepy","dizzy","delighted"],r=["right","down-right","down","down-left","left","up-left","up","up-right"],s=Math.PI*2/r.length;function o(z){return Math.atan2(Math.sin(z),Math.cos(z))}const a=["heart","sparkle","delighted"],l=[{transform:"scale(1, 1)",easing:"ease-in"},{transform:"scale(1.10, 0.86)",offset:.18,easing:"ease-out"},{transform:"scale(0.95, 1.08)",offset:.45,easing:"ease-in-out"},{transform:"scale(1.03, 0.97)",offset:.72,easing:"ease-in-out"},{transform:"scale(1, 1)"}];function c(z){return{backgroundSize:"300% 300%",backgroundPosition:`${z%3*50}% ${Math.floor(z/3)*50}%`}}const u=nt(null),d=nt(null),f=nt("center"),h=nt(null),p=nt({x:0,y:0});let m=-1,_=null,g=[],v=!1;const y={count:0,at:0},x=Kt(()=>e.ariaLabel||`Boop the ${e.label}`),E=Kt(()=>({width:`${e.size}px`,height:`${e.size}px`})),T=Kt(()=>Math.max(14,e.size*.3)),w=Kt(()=>T.value*1.18),S=Kt(()=>{const z=e.size*cI,k=p.value.x*z,Y=p.value.y*z,oe=p.value.x*uI;return{transform:`translate3d(${k.toFixed(2)}px, ${Y.toFixed(2)}px, 0) rotate(${oe.toFixed(2)}deg)`}}),M=Kt(()=>({backgroundImage:`url(${e.directions})`,...c(t.indexOf(f.value)),opacity:h.value?0:1})),P=Kt(()=>({backgroundImage:`url(${e.reactions})`,...c(i.indexOf(h.value??"blink")),opacity:h.value?1:0}));function L(z,k){const Y=Math.hypot(z,k);if(Y<1)return{x:0,y:0};const oe=Math.min(1,Y/lI);return{x:z/Y*oe,y:k/Y*oe}}function R(z,k){p.value=v?{x:0,y:0}:L(z,k)}function O(){const z=u.value;if(!z||!_)return;const k=z.getBoundingClientRect(),Y=_.x-(k.left+k.width/2),oe=_.y-(k.top+k.height/2),F=Math.hypot(Y,oe);if(R(Y,oe),F<(m===-1?w.value:T.value)){m=-1,f.value="center";return}const de=Math.atan2(oe,Y);m!==-1&&Math.abs(o(de-m*s))<s/2+aI||(m=(Math.round(de/s)+r.length)%r.length,f.value=r[m])}function V(z){_={x:z.clientX,y:z.clientY},O()}function X(){g.forEach(clearTimeout),g=[];const z=(Y,oe)=>{g.push(setTimeout(()=>{h.value=oe},Y))},k=Date.now();y.count=k-y.at<mI?y.count+1:1,y.at=k,y.count>=pI?(y.count=0,h.value="dizzy",z(gI,null)):(h.value="blink",z(fI,a[(y.count-1)%a.length]),z(hI,null)),!v&&d.value?.animate(l,{duration:dI,easing:"linear"})}return dr(()=>{v=window.matchMedia("(prefers-reduced-motion: reduce)").matches,window.matchMedia("(hover: hover) and (pointer: fine)").matches&&(window.addEventListener("pointermove",V,{passive:!0}),window.addEventListener("scroll",O,{passive:!0}))}),xc(()=>{window.removeEventListener("pointermove",V),window.removeEventListener("scroll",O),g.forEach(clearTimeout),g=[]}),(z,k)=>(tt(),yt("button",{ref_key:"buttonEl",ref:u,type:"button",class:"page-mascot",style:wr(E.value),"aria-label":x.value,onClick:X},[Se("span",{ref_key:"squashEl",ref:d,class:"page-mascot__squash"},[Se("span",{class:"page-mascot__lean",style:wr(S.value)},[Se("span",{class:"page-mascot__layer",style:wr(M.value)},null,4),Se("span",{class:"page-mascot__layer",style:wr(P.value)},null,4)],4)],512)],12,oI))}},vI=ko(_I,[["__scopeId","data-v-fb5e0128"]]),xI={class:"menu-items"},yI=["data-tooltip"],SI={key:0,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},MI={key:1,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},bI={class:"mascot-slot"},EI={class:"toast-content"},TI={key:0,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},wI={key:1,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},AI={__name:"FloatingMenu",setup(n){const e={directions:"/mascots/turtle-directions.webp?v=fixed_v4",reactions:"/mascots/turtle-reactions.webp?v=fixed_v4"},{t}=Mc(),{isChatOpen:i}=US(),{enabled:r,toggleEffects:s}=eA(),o=nt(!1),a=nt(!1),l=nt(!1),c=nt(""),u=nt(!1),d=nt(!1);let f=null,h=null;function p(){h&&clearTimeout(h),typeof window<"u"&&window.innerWidth<=600&&!o.value?h=setTimeout(()=>{o.value||(a.value=!0)},5e3):a.value=!1}or(o,E=>{E?(a.value=!1,h&&clearTimeout(h)):p()});function m(){if(window.innerWidth<=600&&a.value){a.value=!1,p();return}o.value=!o.value}function _(){l.value=window.scrollY>300}function g(E){o.value&&!E.target.closest(".floating-menu")&&(o.value=!1)}dr(()=>{window.addEventListener("scroll",_,{passive:!0}),document.addEventListener("click",g),window.addEventListener("resize",p,{passive:!0}),p()}),Uo(()=>{window.removeEventListener("scroll",_),document.removeEventListener("click",g),window.removeEventListener("resize",p),h&&clearTimeout(h),f&&clearTimeout(f)});function v(){s(),o.value=!1,u.value=r.value,c.value=r.value?t("nav.effectsEnabledMsg"):t("nav.effectsDisabledMsg"),d.value=!0,f&&clearTimeout(f),f=setTimeout(()=>{d.value=!1},2500)}function y(){window.dispatchEvent(new CustomEvent("request-scroll-to-top")),o.value=!1}function x(){i.value=!0,o.value=!1}return(E,T)=>(tt(),yt(mn,null,[Mt(ux,{name:"menu-fade"},{default:Bi(()=>[Kh(Se("div",{class:Ir(["floating-menu",{"is-open":o.value,"is-dimmed":a.value}])},[Se("div",xI,[Se("button",{class:"menu-item tooltip-left",onClick:v,"data-tooltip":ht(r)?ht(t)("nav.disableEffects"):ht(t)("nav.enableEffects")},[ht(r)?(tt(),yt("svg",SI,[...T[0]||(T[0]=[Se("path",{d:"m2 2 20 20"},null,-1),Se("path",{d:"M8.5 8.5 6 11l2.5 2.5"},null,-1),Se("path",{d:"M15.5 15.5 18 13l-2.5-2.5"},null,-1),Se("path",{d:"M11 6h2"},null,-1),Se("path",{d:"M11 18h2"},null,-1)])])):(tt(),yt("svg",MI,[...T[1]||(T[1]=[Se("polyline",{points:"16 18 22 12 16 6"},null,-1),Se("polyline",{points:"8 6 2 12 8 18"},null,-1)])]))],8,yI),Kh(Se("button",{class:"menu-item tooltip-left",onClick:y,"data-tooltip":"Lên đầu trang"},[...T[2]||(T[2]=[Se("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},[Se("path",{d:"m18 15-6-6-6 6"})],-1)])],512),[[bg,l.value]]),Se("button",{class:"menu-item tooltip-left",onClick:x,"data-tooltip":"Trò chuyện AI"},[...T[3]||(T[3]=[Se("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},[Se("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})],-1)])])]),Se("div",bI,[Mt(vI,{directions:e.directions,reactions:e.reactions,size:76,"aria-label":ht(t)("nav.openMenu"),onClick:m},null,8,["directions","reactions","aria-label"])])],2),[[bg,!ht(i)]])]),_:1}),(tt(),Qi(eb,{to:"body"},[Se("div",{class:Ir(["toast-notification",{"toast-visible":d.value}])},[Se("div",EI,[u.value?(tt(),yt("svg",TI,[...T[4]||(T[4]=[Se("polyline",{points:"20 6 9 17 4 12"},null,-1)])])):(tt(),yt("svg",wI,[...T[5]||(T[5]=[Se("path",{d:"m15 9-6 6"},null,-1),Se("path",{d:"m9 9 6 6"},null,-1),Se("circle",{cx:"12",cy:"12",r:"10"},null,-1)])])),Se("span",null,dn(c.value),1)])],2)]))],64))}},CI=ko(AI,[["__scopeId","data-v-9e820c2d"]]),RI={class:"app-wrapper"},PI={__name:"App",setup(n){QT({title:"Phuc Khang — Creative Developer",meta:[{name:"description",content:"Portfolio of Phuc Khang, a Full-Stack Developer & Creative Developer."},{property:"og:title",content:"Phuc Khang — Creative Developer"},{property:"og:description",content:"Portfolio of Phuc Khang, a Full-Stack Developer & Creative Developer."},{property:"og:type",content:"website"}]}),an.registerPlugin(it);const e=nt(!0),t=nt(!1),i=nt(null);(function(){if(typeof window<"u"){const x=localStorage.getItem("portfolio-theme")||"dark";document.documentElement.setAttribute("data-theme",x)}})();let r=null;function s(){e.value=!1}function o(){r&&r.scrollTo(0,{duration:1.2,easing:y=>Math.min(1,1.001-Math.pow(2,-10*y))})}function a(y){const x=y?.detail?.y;typeof x=="number"&&(r?r.scrollTo(x,{duration:1,easing:E=>Math.min(1,1.001-Math.pow(2,-10*E))}):window.scrollTo({top:x,behavior:"smooth"}))}let l=0,c=0,u=0,d=0,f=null;function h(y){l=y.clientX,c=y.clientY}function p(){i.value&&(u+=(l-u)*.07,d+=(c-d)*.07,i.value.style.transform=`translate(${u-200}px, ${d-200}px)`),f=requestAnimationFrame(p)}function m({scroll:y}){t.value=y>400}const _=GT(),g=Qp(),v=Kt(()=>g.meta.bare);return or(v,y=>{if(typeof document<"u"){const x=document.getElementById("app");x&&x.classList.toggle("is-bare",!!y)}},{immediate:!0}),_.afterEach(()=>{r?.scrollTo(0,{immediate:!0}),setTimeout(()=>it.refresh(),150)}),dr(()=>{r=new q1({duration:1.25,easing:x=>Math.min(1,1.001-Math.pow(2,-10*x)),smoothWheel:!0,touchMultiplier:1.8,infinite:!1,allowNestedScroll:!0}),an.ticker.add(x=>{r.raf(x*1e3)}),an.ticker.lagSmoothing(0),r.on("scroll",it.update),r.on("scroll",m),document.addEventListener("mousemove",h,{passive:!0}),p();const y=an.timeline({scrollTrigger:{trigger:"body",start:"top top",end:"bottom bottom",scrub:!0,invalidateOnRefresh:!0}});y.fromTo("#app",{"--f-top":"0px","--f-top-blur":"0px"},{"--f-top":"100px","--f-top-blur":"50px",duration:1}),y.to({},{duration:8}),y.to("#app",{"--f-bottom":"0px","--f-bottom-blur":"0px",duration:1},">"),window.addEventListener("request-scroll-to-top",o),window.addEventListener("request-scroll-to",a)}),Uo(()=>{r&&(r.destroy(),r=null),an.ticker.remove(y=>r?.raf(y*1e3)),document.removeEventListener("mousemove",h),cancelAnimationFrame(f),window.removeEventListener("request-scroll-to-top",o),window.removeEventListener("request-scroll-to",a)}),(y,x)=>{const E=_f("router-view");return tt(),yt("div",RI,[v.value?xi("",!0):(tt(),yt("div",{key:0,class:"cursor-glow",ref_key:"cursorGlow",ref:i},null,512)),e.value?(tt(),Qi(j1,{key:1,onLoaded:s})):xi("",!0),!e.value&&!v.value?(tt(),Qi(fA,{key:2})):xi("",!0),Mt(E,null,{default:Bi(({Component:T})=>[Mt(ux,{name:"page",mode:"out-in"},{default:Bi(()=>[(tt(),Qi(db(T)))]),_:2},1024)]),_:1}),!e.value&&!v.value?(tt(),Qi(I2,{key:3})):xi("",!0),!e.value&&!v.value?(tt(),Qi(V2,{key:4})):xi("",!0),!e.value&&!v.value?(tt(),Qi(sI,{key:5})):xi("",!0),!e.value&&!v.value?(tt(),Qi(CI,{key:6})):xi("",!0)])}}};an.registerPlugin(it);const DI=[{path:"/",name:"home",component:()=>ms(()=>import("./HomeView-BK-ROYEa.js"),__vite__mapDeps([0,1,2,3,4,5]))},{path:"/about",name:"about",component:()=>ms(()=>import("./AboutView-BvnJGWBV.js"),__vite__mapDeps([6,2,3,7]))},{path:"/projects",name:"projects",component:()=>ms(()=>import("./ProjectsView-BrPukOHm.js"),__vite__mapDeps([8,1,9]))},{path:"/projects/:slug",name:"project-detail",component:()=>ms(()=>import("./ProjectDetailView-CmLNQOm5.js"),__vite__mapDeps([10,1,2,11]))},{path:"/contact",name:"contact",component:()=>ms(()=>import("./ContactView-BQ4xpzwj.js"),__vite__mapDeps([12,2,3,4,13]))},{path:"/marketplace",name:"marketplace",component:()=>ms(()=>import("./MarketplaceView-CAkJdJMj.js"),__vite__mapDeps([14,15,16]))},{path:"/marketplace/:slug",name:"marketplace-detail",component:()=>ms(()=>import("./MarketplaceDetailView-CA3nRG1r.js"),__vite__mapDeps([17,15,2,18]))},{path:"/marketplace/:slug/demo/:page?",name:"marketplace-demo",component:()=>ms(()=>import("./MarketplaceDemoView-dU921_w_.js"),__vite__mapDeps([19,15,20])),meta:{bare:!0}}];YT(PI,{routes:DI,scrollBehavior(){return!1}},({app:n,router:e,routes:t,isClient:i,initialState:r})=>{n.directive("reveal",{getSSRProps(){return{}},mounted(s){if(!i)return;const o=parseFloat(s.dataset.delay||0);an.set(s,{opacity:0,y:30}),it.create({trigger:s,start:"top 88%",once:!0,onEnter:()=>an.to(s,{opacity:1,y:0,duration:.8,delay:o,ease:"power3.out"})})}}),e.afterEach(s=>{if(i){const o={home:"Phuc Khang — Creative Developer",about:"About | Phuc Khang",projects:"Projects | Phuc Khang","project-detail":"Project | Phuc Khang",contact:"Contact | Phuc Khang",marketplace:"Marketplace | Phuc Khang","marketplace-detail":"Template | Phuc Khang","marketplace-demo":"Demo | Phuc Khang"};document.title=o[s.name]||"Phuc Khang"}})});export{AS as $,wE as A,CE as B,eb as C,_c as D,FI as E,mn as F,UI as G,Fo as H,ZM as I,ms as J,xc as K,OI as L,db as M,ho as N,Zl as O,Hn as P,cC as Q,er as R,it as S,ux as T,yS as U,zI as V,b2 as W,Ci as X,HI as Y,TS as Z,ko as _,Uo as a,wc as a0,wS as a1,Qp as a2,ME as a3,pc as a4,kI as a5,LI as a6,rb as a7,BI as a8,Gb as a9,II as aa,tt as b,yt as c,_f as d,Se as e,ht as f,an as g,Mt as h,Bi as i,xr as j,Hu as k,Kh as l,Mc as m,wr as n,dr as o,Ir as p,Qi as q,nt as r,rx as s,dn as t,eA as u,xi as v,or as w,xa as x,Kt as y,NI as z};
