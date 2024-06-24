import{p as e,H as o,h as t,d as i}from"./p-2dee9951.js";import{a as n}from"./p-7f2c9830.js";import{a as r}from"./p-a6d14a47.js";const a='.gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-nav-item{display:block}.gov-nav-item__link{position:relative;display:block;padding:0.9375rem 3rem 0.9375rem 2.25rem;color:var(--gov-nav-color, var(--gov-color-neutral-white));text-decoration:none}.gov-nav-item__link:focus{outline:none}.gov-nav-item__link:focus-visible{border-radius:var(--gov-border-radius, 0.1875rem);outline:var(--gov-outline-width, 0.125rem) solid var(--gov-color-focus-base);outline-offset:0}.gov-nav-item__link:focus{outline-color:var(--gov-nav-color, var(--gov-color-neutral-white))}@media not all and (pointer: coarse){.gov-nav-item__link:hover{color:var(--gov-nav-color, var(--gov-color-neutral-white));text-decoration:underline}}@media (min-width: 48em){.gov-nav-item__link{display:inline-flex;justify-content:center;align-items:center;height:100%;padding:1.375rem 1.25rem 1.3125rem}.gov-nav-item__link::before{content:"";position:absolute;display:block;top:0;left:50%;width:0;height:0.125rem;background:var(--gov-nav-color, var(--gov-color-neutral-white));transform:translate(-50%);transition:width 150ms}@media not all and (pointer: coarse){.gov-nav-item__link:hover{text-decoration:none}.gov-nav-item__link:hover::before{width:100%}}}';const s=e(class e extends o{constructor(){super();this.__registerHost();this.isExpandedState=undefined;this.href=undefined}validateHref(e){if(!e){n(`[${r.root}]: Parameter href is required.`)}}componentWillLoad(){this.validateHref(this.href)}render(){return t(i,{class:r.root,role:"listitem"},t("a",{href:this.href,class:r.link},t("slot",null)))}get host(){return this}static get watchers(){return{href:["validateHref"]}}static get style(){return a}},[4,"gov-nav-item",{href:[1],isExpandedState:[32]}]);function l(){if(typeof customElements==="undefined"){return}const e=["gov-nav-item"];e.forEach((e=>{switch(e){case"gov-nav-item":if(!customElements.get(e)){customElements.define(e,s)}break}}))}l();const v=s;const c=l;export{v as GovNavItem,c as defineCustomElement};
//# sourceMappingURL=gov-nav-item.js.map