import{r as t,h as a,a as e,g as s}from"./p-5bc604a3.js";import{N as i}from"./p-a6d14a47.js";import{v as o}from"./p-7724b535.js";import{c as n}from"./p-003e6cca.js";import{d as r}from"./p-03990da5.js";import"./p-7f2c9830.js";import"./p-24636c53.js";const p=".gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-nav{position:relative;display:block;width:100%;font-weight:var(--gov-text-s-font-weight);font-size:var(--gov-text-s-font-size);line-height:var(--gov-text-s-line-height);letter-spacing:var(--gov-text-s-letter-spacing);background:var(--gov-nav-bg, var(--gov-color-primary));font-weight:bold;letter-spacing:0.0125em;text-transform:uppercase}@media (min-width: 48em){.gov-nav{text-align:center}.gov-nav__nav{display:flex;justify-content:space-between}}";const c=class{constructor(a){t(this,a);this.wcagLabel=undefined;this.wcagLabelledBy=undefined}async componentDidRender(){if(n()){await r(500);await this.validateWcag()}}render(){return a(e,{class:i.root},a("nav",{class:i.nav,role:"list","arial-label":this.wcagLabel,"arial-labelledby":this.wcagLabelledBy},a("slot",null)))}async validateWcag(){o(this.wcagLabel,this.wcagLabelledBy,i.root)}get host(){return s(this)}};c.style=p;export{c as gov_nav};
//# sourceMappingURL=p-1fee1753.entry.js.map