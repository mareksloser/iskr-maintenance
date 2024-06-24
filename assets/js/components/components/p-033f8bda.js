import{p as s,H as o,h as e,d as r}from"./p-2dee9951.js";import{F as t,a}from"./p-6278531b.js";import{g as i}from"./p-c353678b.js";import{v as n}from"./p-dcb5fb35.js";import{c}from"./p-24636c53.js";const g=".gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-form-message{font-weight:var(--gov-text-s-font-weight);font-size:var(--gov-text-s-font-size);line-height:var(--gov-text-s-line-height);letter-spacing:var(--gov-text-s-letter-spacing);display:flex;gap:0.5rem;margin:0rem 0rem 1rem}.gov-form-message__icon{position:relative;top:calc(var(--gov-text-s-font-size) / 6);display:flex}.gov-form-message__icon>*{width:calc(var(--gov-text-s-font-size) * 1.167);height:calc(var(--gov-text-s-font-size) * 1.167)}.gov-form-message[variant=error]{color:var(--gov-form-message-error-color, var(--gov-color-error-400))}.gov-form-message[variant=secondary]{color:var(--gov-form-message-secondary-color, var(--gov-color-secondary-700))}.gov-form-message[variant=warning]{color:var(--gov-form-message-warning-color, var(--gov-color-warning-500))}.gov-form-message[variant=success]{color:var(--gov-form-message-success-color, var(--gov-color-success-500))}";const m=s(class s extends o{constructor(){super();this.__registerHost();this.variant="secondary";this.h=i(this.host);this.messageId=c("GovFormMessage")}validateVariant(s){n(a,s,t.root)}componentWillLoad(){this.validateVariant(this.variant)}render(){return e(r,{class:this.h.classes(t.root),variant:this.variant},this.h.hasSlot("icon")&&e("span",{class:t.icon},e("slot",{name:"icon"})),e("span",{id:this.messageId,class:t.content},e("slot",null)))}async identifier(){return this.messageId}get host(){return this}static get watchers(){return{variant:["validateVariant"]}}static get style(){return g}},[4,"gov-form-message",{variant:[1],identifier:[64]}]);function v(){if(typeof customElements==="undefined"){return}const s=["gov-form-message"];s.forEach((s=>{switch(s){case"gov-form-message":if(!customElements.get(s)){customElements.define(s,m)}break}}))}v();export{m as G,v as d};
//# sourceMappingURL=p-033f8bda.js.map