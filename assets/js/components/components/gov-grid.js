import{p as t,H as e,h as i,d as n}from"./p-2dee9951.js";import{G as s}from"./p-ffb7495c.js";import{g as o}from"./p-c353678b.js";const r=".gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-grid{position:relative;display:flex;width:100%;flex-wrap:wrap}.gov-grid[align-x=middle]{align-items:center}.gov-grid[align-x=bottom]{align-items:flex-end}.gov-grid[align-y=center]{justify-content:center}.gov-grid[align-y=right]{justify-content:flex-end}.gov-grid[align-y=space-between]{justify-content:space-between}.gov-grid[align-y=space-around]{justify-content:space-around}";const a=t(class t extends e{constructor(){super();this.__registerHost();this.alignX=undefined;this.alignY=undefined;this.h=o(this.host)}render(){return i(n,{class:this.h.classes(s.root),"align-x":this.alignX,"align-y":this.alignY,role:"list"},i("slot",null))}get host(){return this}static get style(){return r}},[4,"gov-grid",{alignX:[1,"align-x"],alignY:[1,"align-y"]}]);function g(){if(typeof customElements==="undefined"){return}const t=["gov-grid"];t.forEach((t=>{switch(t){case"gov-grid":if(!customElements.get(t)){customElements.define(t,a)}break}}))}g();const c=a;const l=g;export{c as GovGrid,l as defineCustomElement};
//# sourceMappingURL=gov-grid.js.map