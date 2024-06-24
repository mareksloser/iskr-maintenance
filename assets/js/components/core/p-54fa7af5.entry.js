import{r as o,c as t,h as i,a as s,g as r}from"./p-5bc604a3.js";import{g as n,a as e}from"./p-5de606f8.js";import{c as a}from"./p-24636c53.js";import{B as d}from"./p-4c55142b.js";import"./p-55500e5a.js";import"./p-ff7365ae.js";import"./p-03990da5.js";const c={triggerEvents:"click",exclude:""};function p(o,t,i,s=c){const r=g(s);h(s).forEach((s=>{window.addEventListener(s,(s=>{l(s,o,t,i,r)}),false)}))}function l(o,t,i,s,r){const n=o.target;if(!i.contains(n)&&!f(n,r)){s.call(t)}}function h(o){if(o.triggerEvents){return o.triggerEvents.split(",").map((o=>o.trim()))}return["click"]}function g(o){if(o.exclude){try{return Array.from(document.querySelectorAll(o.exclude))}catch(t){console.warn(`@ClickOutside: Exclude: '${o.exclude}' will not be evaluated. Check your exclude selector syntax.`,t)}}return}function f(o,t){if(o&&t){for(let i of t){if(i.contains(o)){return true}}}return false}var u;(function(o){o["LEFT"]="left";o["RIGHT"]="right"})(u||(u={}));const v={root:"gov-dropdown",list:"gov-dropdown__list"};const m=".gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-dropdown{position:relative}.gov-dropdown__list{position:absolute;left:0;z-index:100}.gov-dropdown ul{padding:0.25rem;border-radius:var(--gov-border-radius, 0.1875rem);background-color:var(--gov-dropdown-bg-color, var(--gov-color-neutral-white));box-shadow:var(--gov-dropdown-box-shadow, 0 0.25rem 1.25rem rgba(0, 0, 0, 0.1))}.gov-dropdown li{margin:0;white-space:nowrap}.gov-dropdown li::before{content:none}.gov-dropdown li>*{width:100%}.gov-dropdown li>* .element{justify-content:space-between;width:100%}.gov-dropdown[position=right] .gov-dropdown__list{right:0;left:initial}";const w=class{constructor(i){o(this,i);this.govChange=t(this,"gov-change",7);this.open=false;this.position=u.LEFT;this.h=n(this.host);this.listId=a("GovDropdownList");this.controlId=a("GovDropdownControl")}componentWillLoad(){if(this.trigger){this.trigger.setAttribute("wcag-controls",this.listId);this.trigger.setAttribute("wcag-has-popup",e(!!this.list));this.trigger.setAttribute("identifier",this.controlId);this.trigger.addEventListener("gov-click",(o=>{o.preventDefault();o.stopPropagation();this.open=!this.open;this.govChange.emit({component:v.root,originalEvent:o,open:this.open})}))}}get trigger(){return this.host.querySelector(`* > ${d.root}`)}get list(){return this.h.getSlot("list")}render(){return i(s,{class:this.h.classes([v.root]),open:this.open,position:this.position},i("slot",null),i("div",{ref:o=>p(this,o,(()=>this.open=false)),class:v.list,id:this.listId,"aria-labelledby":this.controlId,"aria-hidden":e(!this.open),hidden:!this.open},i("slot",{name:"list"})))}async getState(){return this.open}async setOpen(o){this.open=o}get host(){return r(this)}};w.style=m;export{w as gov_dropdown};
//# sourceMappingURL=p-54fa7af5.entry.js.map