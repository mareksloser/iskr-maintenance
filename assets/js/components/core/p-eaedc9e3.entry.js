import{r as t,h as o,a as i,g as a}from"./p-5bc604a3.js";import{L as e}from"./p-5defdc5e.js";import{g as s}from"./p-5de606f8.js";const l=".gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-layout{position:relative;display:block;width:100%}.gov-layout__section{display:flex;gap:var(--gov-layout-gap, 1.375rem);flex-direction:column}@media (min-width: 64em){.gov-layout__section{flex-direction:row}.gov-layout__section-aside-right .gov-layout-column:first-child,.gov-layout__section-aside .gov-layout-column:first-child{flex:1 1 auto;width:auto}.gov-layout__section-aside-right .gov-layout-column:last-child,.gov-layout__section-aside .gov-layout-column:last-child{flex:0 0 auto;width:calc(var(--gov-container-width, 73.75rem) / 3 - var(--gov-layout-gap, 1.375rem))}.gov-layout__section-aside-left .gov-layout-column:first-child{flex:0 0 auto;width:calc(var(--gov-container-width, 73.75rem) / 3 - var(--gov-layout-gap, 1.375rem))}.gov-layout__section-aside-left .gov-layout-column:last-child{flex:1 1 auto;width:auto}.gov-layout__section-aside-right-inverse .gov-layout-column:first-child{order:1}.gov-layout__section-aside-left-inverse .gov-layout-column:first-child{order:2}.gov-layout__section-text{width:var(--gov-layout-content-width, 48.75rem);margin-right:auto;margin-left:auto}.gov-layout__section-text-left{width:var(--gov-layout-content-width, 48.75rem);margin-right:auto}.gov-layout__section-text-right{width:var(--gov-layout-content-width, 48.75rem);margin-left:auto}}";const n=class{constructor(o){t(this,o);this.type="stretch";this.variant=undefined;this.inverse=false;this.h=s(this.host)}typeClass(t,o,i,a){const e=o?"-"+o:"";const s=i?"-"+i:"";const l=a?"-inverse":"";return t+" "+t+e+s+l}render(){return o(i,{type:this.type,class:this.h.classes(e.root)},o("section",{class:this.typeClass(e.section,this.type,this.variant,this.inverse)},o("slot",null)))}get host(){return a(this)}};n.style=l;export{n as gov_layout};
//# sourceMappingURL=p-eaedc9e3.entry.js.map