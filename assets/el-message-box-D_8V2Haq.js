import{n as Ce,P as ve,af as we,Q as pe,H as se,Z as H,R as Be,_ as Me,v as Te,C as Se,b0 as ke,aX as Ie,y as T,r as O,a9 as Le,b1 as ae,w as le,ax as Ae,W as $,o as f,c as E,b as g,ab as J,d as S,g as b,F as u,A as re,a4 as q,z as x,B as j,a2 as V,al as D,aI as W,D as Oe,f as _,ac as ee,T as $e,aB as Ve,G as ge,b2 as be,b3 as ye,b4 as ie,ai as ze,aC as Re,ay as ue,b5 as de}from"./index-BMndYN70.js";import{E as Pe}from"./_plugin-vue_export-helper-We4xikRx.js";import{E as De}from"./el-input-B1N2vgKc.js";import{g as He,e as Fe,i as Ne,h as Ue}from"./el-overlay-C0CY_SGm.js";import{u as ce}from"./use-form-item-C5t_Pfx2.js";const Xe='a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])',Ke=e=>getComputedStyle(e).position==="fixed"?!1:e.offsetParent!==null,fe=e=>Array.from(e.querySelectorAll(Xe)).filter(n=>Ye(n)&&Ke(n)),Ye=e=>{if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return!(e.type==="hidden"||e.type==="file");case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},mn=function(e,n,...l){let o;n.includes("mouse")||n.includes("click")?o="MouseEvents":n.includes("key")?o="KeyboardEvent":o="HTMLEvents";const s=document.createEvent(o);return s.initEvent(n,...l),e.dispatchEvent(s),e},qe=e=>["",...Ce].includes(e),je=(e,n,l,o)=>{let s={offsetX:0,offsetY:0};const a=m=>{const t=m.clientX,R=m.clientY,{offsetX:C,offsetY:r}=s,I=e.value.getBoundingClientRect(),N=I.left,v=I.top,U=I.width,w=I.height,L=document.documentElement.clientWidth,X=document.documentElement.clientHeight,G=-N+C,Z=-v+r,Q=L-N-U+C,B=X-v-w+r,P=Y=>{let p=C+Y.clientX-t,M=r+Y.clientY-R;o!=null&&o.value||(p=Math.min(Math.max(p,G),Q),M=Math.min(Math.max(M,Z),B)),s={offsetX:p,offsetY:M},e.value&&(e.value.style.transform=`translate(${se(p)}, ${se(M)})`)},K=()=>{document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",K)};document.addEventListener("mousemove",P),document.addEventListener("mouseup",K)},d=()=>{n.value&&e.value&&n.value.addEventListener("mousedown",a)},c=()=>{n.value&&e.value&&n.value.removeEventListener("mousedown",a)};ve(()=>{we(()=>{l.value?d():c()})}),pe(()=>{c()})},ne="_trap-focus-children",k=[],me=e=>{if(k.length===0)return;const n=k[k.length-1][ne];if(n.length>0&&e.code===Be.tab){if(n.length===1){e.preventDefault(),document.activeElement!==n[0]&&n[0].focus();return}const l=e.shiftKey,o=e.target===n[0],s=e.target===n[n.length-1];o&&l&&(e.preventDefault(),n[n.length-1].focus()),s&&!l&&(e.preventDefault(),n[0].focus())}},We={beforeMount(e){e[ne]=fe(e),k.push(e),k.length<=1&&document.addEventListener("keydown",me)},updated(e){H(()=>{e[ne]=fe(e)})},unmounted(){k.shift(),k.length===0&&document.removeEventListener("keydown",me)}},Ge=Te({name:"ElMessageBox",directives:{TrapFocus:We},components:{ElButton:Pe,ElFocusTrap:He,ElInput:De,ElOverlay:Fe,ElIcon:Se,...ke},inheritAttrs:!1,props:{buttonSize:{type:String,validator:qe},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,overflow:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:n}){const{locale:l,zIndex:o,ns:s,size:a}=Ie("message-box",T(()=>e.buttonSize)),{t:d}=l,{nextZIndex:c}=o,m=O(!1),t=Le({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:c()}),R=T(()=>{const i=t.type;return{[s.bm("icon",i)]:i&&ae[i]}}),C=ce(),r=ce(),I=T(()=>t.icon||ae[t.type]||""),N=T(()=>!!t.message),v=O(),U=O(),w=O(),L=O(),X=O(),G=T(()=>t.confirmButtonClass);le(()=>t.inputValue,async i=>{await H(),e.boxType==="prompt"&&i!==null&&M()},{immediate:!0}),le(()=>m.value,i=>{var y,A;i&&(e.boxType!=="prompt"&&(t.autofocus?w.value=(A=(y=X.value)==null?void 0:y.$el)!=null?A:v.value:w.value=v.value),t.zIndex=c()),e.boxType==="prompt"&&(i?H().then(()=>{var oe;L.value&&L.value.$el&&(t.autofocus?w.value=(oe=Ee())!=null?oe:v.value:w.value=v.value)}):(t.editorErrorMessage="",t.validateError=!1))});const Z=T(()=>e.draggable),Q=T(()=>e.overflow);je(v,U,Z,Q),ve(async()=>{await H(),e.closeOnHashChange&&window.addEventListener("hashchange",B)}),pe(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",B)});function B(){m.value&&(m.value=!1,H(()=>{t.action&&n("action",t.action)}))}const P=()=>{e.closeOnClickModal&&p(t.distinguishCancelAndClose?"close":"cancel")},K=Ue(P),Y=i=>{if(t.inputType!=="textarea")return i.preventDefault(),p("confirm")},p=i=>{var y;e.boxType==="prompt"&&i==="confirm"&&!M()||(t.action=i,t.beforeClose?(y=t.beforeClose)==null||y.call(t,i,t,B):B())},M=()=>{if(e.boxType==="prompt"){const i=t.inputPattern;if(i&&!i.test(t.inputValue||""))return t.editorErrorMessage=t.inputErrorMessage||d("el.messagebox.error"),t.validateError=!0,!1;const y=t.inputValidator;if(typeof y=="function"){const A=y(t.inputValue);if(A===!1)return t.editorErrorMessage=t.inputErrorMessage||d("el.messagebox.error"),t.validateError=!0,!1;if(typeof A=="string")return t.editorErrorMessage=A,t.validateError=!0,!1}}return t.editorErrorMessage="",t.validateError=!1,!0},Ee=()=>{const i=L.value.$refs;return i.input||i.textarea},te=()=>{p("close")},he=()=>{e.closeOnPressEscape&&te()};return e.lockScroll&&Ne(m),{...Ae(t),ns:s,overlayEvent:K,visible:m,hasMessage:N,typeClass:R,contentId:C,inputId:r,btnSize:a,iconComponent:I,confirmButtonClasses:G,rootRef:v,focusStartRef:w,headerRef:U,inputRef:L,confirmRef:X,doClose:B,handleClose:te,onCloseRequested:he,handleWrapperClick:P,handleInputEnter:Y,handleAction:p,t:d}}}),Ze=["aria-label","aria-describedby"],Qe=["aria-label"],Je=["id"];function xe(e,n,l,o,s,a){const d=$("el-icon"),c=$("close"),m=$("el-input"),t=$("el-button"),R=$("el-focus-trap"),C=$("el-overlay");return f(),E($e,{name:"fade-in-linear",onAfterLeave:n[11]||(n[11]=r=>e.$emit("vanish")),persisted:""},{default:g(()=>[J(S(C,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:g(()=>[b("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:u(`${e.ns.namespace.value}-overlay-message-box`),onClick:n[8]||(n[8]=(...r)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...r)),onMousedown:n[9]||(n[9]=(...r)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...r)),onMouseup:n[10]||(n[10]=(...r)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...r))},[S(R,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:g(()=>[b("div",{ref:"rootRef",class:u([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:re(e.customStyle),tabindex:"-1",onClick:n[7]||(n[7]=q(()=>{},["stop"]))},[e.title!==null&&e.title!==void 0?(f(),x("div",{key:0,ref:"headerRef",class:u([e.ns.e("header"),{"show-close":e.showClose}])},[b("div",{class:u(e.ns.e("title"))},[e.iconComponent&&e.center?(f(),E(d,{key:0,class:u([e.ns.e("status"),e.typeClass])},{default:g(()=>[(f(),E(j(e.iconComponent)))]),_:1},8,["class"])):V("v-if",!0),b("span",null,D(e.title),1)],2),e.showClose?(f(),x("button",{key:0,type:"button",class:u(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:n[0]||(n[0]=r=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:n[1]||(n[1]=W(q(r=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"]))},[S(d,{class:u(e.ns.e("close"))},{default:g(()=>[S(c)]),_:1},8,["class"])],42,Qe)):V("v-if",!0)],2)):V("v-if",!0),b("div",{id:e.contentId,class:u(e.ns.e("content"))},[b("div",{class:u(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(f(),E(d,{key:0,class:u([e.ns.e("status"),e.typeClass])},{default:g(()=>[(f(),E(j(e.iconComponent)))]),_:1},8,["class"])):V("v-if",!0),e.hasMessage?(f(),x("div",{key:1,class:u(e.ns.e("message"))},[Oe(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(f(),E(j(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(f(),E(j(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:g(()=>[_(D(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):V("v-if",!0)],2),J(b("div",{class:u(e.ns.e("input"))},[S(m,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":n[2]||(n[2]=r=>e.inputValue=r),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:u({invalid:e.validateError}),onKeydown:W(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),b("div",{class:u(e.ns.e("errormsg")),style:re({visibility:e.editorErrorMessage?"visible":"hidden"})},D(e.editorErrorMessage),7)],2),[[ee,e.showInput]])],10,Je),b("div",{class:u(e.ns.e("btns"))},[e.showCancelButton?(f(),E(t,{key:0,loading:e.cancelButtonLoading,class:u([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:n[3]||(n[3]=r=>e.handleAction("cancel")),onKeydown:n[4]||(n[4]=W(q(r=>e.handleAction("cancel"),["prevent"]),["enter"]))},{default:g(()=>[_(D(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","class","round","size"])):V("v-if",!0),J(S(t,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:u([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:n[5]||(n[5]=r=>e.handleAction("confirm")),onKeydown:n[6]||(n[6]=W(q(r=>e.handleAction("confirm"),["prevent"]),["enter"]))},{default:g(()=>[_(D(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","class","round","disabled","size"]),[[ee,e.showConfirmButton]])],2)],6)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,Ze)]),_:3},8,["z-index","overlay-class","mask"]),[[ee,e.visible]])]),_:3})}var _e=Me(Ge,[["render",xe],["__file","index.vue"]]);const F=new Map,en=e=>{let n=document.body;return e.appendTo&&(ge(e.appendTo)&&(n=document.querySelector(e.appendTo)),de(e.appendTo)&&(n=e.appendTo),de(n)||(n=document.body)),n},nn=(e,n,l=null)=>{const o=S(_e,e,ue(e.message)||be(e.message)?{default:ue(e.message)?e.message:()=>e.message}:null);return o.appContext=l,ye(o,n),en(e).appendChild(n.firstElementChild),o.component},tn=()=>document.createElement("div"),on=(e,n)=>{const l=tn();e.onVanish=()=>{ye(null,l),F.delete(s)},e.onAction=a=>{const d=F.get(s);let c;e.showInput?c={value:s.inputValue,action:a}:c=a,e.callback?e.callback(c,o.proxy):a==="cancel"||a==="close"?e.distinguishCancelAndClose&&a!=="cancel"?d.reject("close"):d.reject("cancel"):d.resolve(c)};const o=nn(e,l,n),s=o.proxy;for(const a in e)ie(e,a)&&!ie(s.$props,a)&&(s[a]=e[a]);return s.visible=!0,s};function z(e,n=null){if(!Ve)return Promise.reject();let l;return ge(e)||be(e)?e={message:e}:l=e.callback,new Promise((o,s)=>{const a=on(e,n??z._context);F.set(a,{options:e,callback:l,resolve:o,reject:s})})}const sn=["alert","confirm","prompt"],an={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};sn.forEach(e=>{z[e]=ln(e)});function ln(e){return(n,l,o,s)=>{let a="";return ze(l)?(o=l,a=""):Re(l)?a="":a=l,z(Object.assign({title:a,message:n,type:"",...an[e]},o,{boxType:e}),s)}}z.close=()=>{F.forEach((e,n)=>{n.doClose()}),F.clear()};z._context=null;const h=z;h.install=e=>{h._context=e._context,e.config.globalProperties.$msgbox=h,e.config.globalProperties.$messageBox=h,e.config.globalProperties.$alert=h.alert,e.config.globalProperties.$confirm=h.confirm,e.config.globalProperties.$prompt=h.prompt};const vn=h;export{vn as E,mn as t,je as u};
