import{p as o,H as e,c as r,h as i,d as a}from"./p-2dee9951.js";import{c as t}from"./p-24636c53.js";import{v as s}from"./p-dcb5fb35.js";import{g as c,m as n,n as v}from"./p-53e02bee.js";import{g as d,a as l,t as m}from"./p-c353678b.js";import{b as g,c as f}from"./p-4ff831e3.js";import{c as h}from"./p-003e6cca.js";import{d as b}from"./p-03990da5.js";import{F as p}from"./p-1c1d0bbe.js";const x='.gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-form-radio{cursor:pointer}.gov-form-radio input{position:absolute;top:0;left:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.gov-form-radio input+span{position:relative;display:block;cursor:pointer}.gov-form-radio input+span::before{content:"";position:absolute;display:block;top:0;left:0;border:var(--gov-form-checkbox-border-size, 0.125rem solid var(--gov-color-primary));background-color:var(--gov-form-checkbox-background-color, var(--gov-color-neutral-white));transition:150ms linear border-color, 150ms linear background-color, 150ms linear outline-color}.gov-form-radio .gov-form-label__label{position:relative;z-index:1;width:100%}.gov-form-radio input:focus-visible+span::before{outline:var(--gov-outline-width, 0.125rem) solid var(--gov-color-focus-base)}[invalid=""].gov-form-radio .gov-form-label__label,[invalid=true i].gov-form-radio .gov-form-label__label,[invalid="1"].gov-form-radio .gov-form-label__label{color:var(--gov-form-state-color-error, var(--gov-color-error))}[invalid=""].gov-form-radio input+span::before,[invalid=true i].gov-form-radio input+span::before,[invalid="1"].gov-form-radio input+span::before{border-color:var(--gov-form-state-color-error, var(--gov-color-error))}[disabled=""].gov-form-radio,[disabled=true i].gov-form-radio,[disabled="1"].gov-form-radio{pointer-events:none}[disabled=""].gov-form-radio .gov-form-label__label,[disabled=true i].gov-form-radio .gov-form-label__label,[disabled="1"].gov-form-radio .gov-form-label__label{color:var(--gov-form-state-color-disabled, var(--gov-color-secondary-600))}[disabled=""].gov-form-radio input+span::before,[disabled=true i].gov-form-radio input+span::before,[disabled="1"].gov-form-radio input+span::before{border-color:var(--gov-form-input-disabled-bg, var(--gov-color-primary-400))}[size=xs].gov-form-radio{font-weight:var(--gov-text-xs-font-weight);font-size:var(--gov-text-xs-font-size);line-height:var(--gov-text-xs-line-height);letter-spacing:var(--gov-text-xs-letter-spacing);display:block;min-width:var(--gov-form-checkbox-core-xs-indicator-size, 1.25rem);min-height:var(--gov-form-checkbox-core-xs-indicator-size, 1.25rem)}[size=xs].gov-form-radio .gov-form-label__label{padding-top:calc((var(--gov-form-checkbox-core-xs-indicator-size, 1.25rem) - var(--gov-text-xs-font-size) * 1.5) / 2);padding-left:calc(var(--gov-form-checkbox-core-xs-indicator-size, 1.25rem) + var(--gov-form-checkbox-core-xs-gap, 0.75rem))}[size=xs].gov-form-radio input+span::before{width:var(--gov-form-checkbox-core-xs-indicator-size, 1.25rem);height:var(--gov-form-checkbox-core-xs-indicator-size, 1.25rem)}[size=s].gov-form-radio{font-weight:var(--gov-text-s-font-weight);font-size:var(--gov-text-s-font-size);line-height:var(--gov-text-s-line-height);letter-spacing:var(--gov-text-s-letter-spacing);display:block;min-width:var(--gov-form-checkbox-core-s-indicator-size, 1.375rem);min-height:var(--gov-form-checkbox-core-s-indicator-size, 1.375rem)}[size=s].gov-form-radio .gov-form-label__label{padding-top:calc((var(--gov-form-checkbox-core-s-indicator-size, 1.375rem) - var(--gov-text-s-font-size) * 1.5) / 2);padding-left:calc(var(--gov-form-checkbox-core-s-indicator-size, 1.375rem) + var(--gov-form-checkbox-core-s-gap, 0.75rem))}[size=s].gov-form-radio input+span::before{width:var(--gov-form-checkbox-core-s-indicator-size, 1.375rem);height:var(--gov-form-checkbox-core-s-indicator-size, 1.375rem)}[size=m].gov-form-radio{font-weight:var(--gov-text-m-font-weight);font-size:var(--gov-text-m-font-size);line-height:var(--gov-text-m-line-height);letter-spacing:var(--gov-text-m-letter-spacing);display:block;min-width:var(--gov-form-checkbox-core-m-indicator-size, 1.5rem);min-height:var(--gov-form-checkbox-core-m-indicator-size, 1.5rem)}[size=m].gov-form-radio .gov-form-label__label{padding-top:calc((var(--gov-form-checkbox-core-m-indicator-size, 1.5rem) - var(--gov-text-m-font-size) * 1.5) / 2);padding-left:calc(var(--gov-form-checkbox-core-m-indicator-size, 1.5rem) + var(--gov-form-checkbox-core-m-gap, 1rem))}[size=m].gov-form-radio input+span::before{width:var(--gov-form-checkbox-core-m-indicator-size, 1.5rem);height:var(--gov-form-checkbox-core-m-indicator-size, 1.5rem)}[size=l].gov-form-radio{font-weight:var(--gov-text-l-font-weight);font-size:var(--gov-text-l-font-size);line-height:var(--gov-text-l-line-height);letter-spacing:var(--gov-text-l-letter-spacing);display:block;min-width:var(--gov-form-checkbox-core-l-indicator-size, 2rem);min-height:var(--gov-form-checkbox-core-l-indicator-size, 2rem)}[size=l].gov-form-radio .gov-form-label__label{padding-top:calc((var(--gov-form-checkbox-core-l-indicator-size, 2rem) - var(--gov-text-l-font-size) * 1.5) / 2);padding-left:calc(var(--gov-form-checkbox-core-l-indicator-size, 2rem) + var(--gov-form-checkbox-core-l-gap, 1rem))}[size=l].gov-form-radio input+span::before{width:var(--gov-form-checkbox-core-l-indicator-size, 2rem);height:var(--gov-form-checkbox-core-l-indicator-size, 2rem)}.gov-form-radio input+span::before{border-radius:50%}.gov-form-radio input+span::after{content:"";position:absolute;display:block;border-radius:50%;background:var(--gov-form-radio-indicator-bg, var(--gov-color-primary));opacity:0;transition:150ms linear opacity}.gov-form-radio__label{position:relative}.gov-form-radio input:checked+span::after{opacity:1}.gov-form-radio[invalid=""] input+span::after,.gov-form-radio[invalid=true i] input+span::after,.gov-form-radio[invalid="1"] input+span::after{background:var(--gov-form-state-color-error, var(--gov-color-error))}.gov-form-radio[disabled=""] input:checked+span::after,.gov-form-radio[disabled=true i] input:checked+span::after,.gov-form-radio[disabled="1"] input:checked+span::after{background-color:var(--gov-form-input-disabled-bg, var(--gov-color-primary-400))}.gov-form-radio[size=xs] input+span::after{top:calc((var(--gov-form-checkbox-core-xs-indicator-size, 1.25rem) - var(--gov-form-checkbox-core-xs-dot-size, 0.625rem)) / 2);left:calc((var(--gov-form-checkbox-core-xs-indicator-size, 1.25rem) - var(--gov-form-checkbox-core-xs-dot-size, 0.625rem)) / 2);width:var(--gov-form-checkbox-core-xs-dot-size, 0.625rem);height:var(--gov-form-checkbox-core-xs-dot-size, 0.625rem)}.gov-form-radio[size=s] input+span::after{top:calc((var(--gov-form-checkbox-core-s-indicator-size, 1.375rem) - var(--gov-form-checkbox-core-s-dot-size, 0.6875rem)) / 2);left:calc((var(--gov-form-checkbox-core-s-indicator-size, 1.375rem) - var(--gov-form-checkbox-core-s-dot-size, 0.6875rem)) / 2);width:var(--gov-form-checkbox-core-s-dot-size, 0.6875rem);height:var(--gov-form-checkbox-core-s-dot-size, 0.6875rem)}.gov-form-radio[size=m] input+span::after{top:calc((var(--gov-form-checkbox-core-m-indicator-size, 1.5rem) - var(--gov-form-checkbox-core-m-dot-size, 0.75rem)) / 2);left:calc((var(--gov-form-checkbox-core-m-indicator-size, 1.5rem) - var(--gov-form-checkbox-core-m-dot-size, 0.75rem)) / 2);width:var(--gov-form-checkbox-core-m-dot-size, 0.75rem);height:var(--gov-form-checkbox-core-m-dot-size, 0.75rem)}.gov-form-radio[size=l] input+span::after{top:calc((var(--gov-form-checkbox-core-l-indicator-size, 2rem) - var(--gov-form-checkbox-core-l-dot-size, 1rem)) / 2);left:calc((var(--gov-form-checkbox-core-l-indicator-size, 2rem) - var(--gov-form-checkbox-core-l-dot-size, 1rem)) / 2);width:var(--gov-form-checkbox-core-l-dot-size, 1rem);height:var(--gov-form-checkbox-core-l-dot-size, 1rem)}';const u=o(class o extends e{constructor(){super();this.__registerHost();this.govFocus=r(this,"gov-focus",7);this.govBlur=r(this,"gov-blur",7);this.govChange=r(this,"gov-change",7);this.value=undefined;this.noLabel=false;this.checked=false;this.required=false;this.disabled=false;this.name=undefined;this.size="m";this.identifier=undefined;this.invalid=undefined;this.wcagDescribedBy=undefined;this.wcagLabelledBy=undefined;this.radioId=t("GovRadio");this.h=d(this.host);this.f=c(this.h)}validateSize(o){s(v,o,n.root)}watchDisabled(){this.passControlAttrs()}passControlAttrs(){this.f.passAttrToControl("size",this.size);this.f.passAttrToControl("invalid",l(this.invalid));this.f.passAttrToControl("type","radio")}componentWillLoad(){this.passControlAttrs()}async componentDidRender(){this.f.passAttrToLabel("identifier",this.identifier||this.radioId);this.f.passAttrToLabel("required",String(this.required));if(h()){await b(500);await this.validateWcag()}}render(){const o=o=>{if(this.noLabel){return i("label",{class:n.label},o)}return o};return i(a,{class:n.root,checked:this.checked,size:this.size,invalid:m(this.invalid)},i("div",{class:n.holder},o(i(p,null,i("input",{class:n.input,id:this.identifier||this.radioId,type:"radio",value:this.value,name:this.name,checked:this.checked,disabled:this.disabled,onClick:this.onClickHandler.bind(this),onChange:this.onChangeHandler.bind(this),onFocus:this.onFocusHandler.bind(this),onBlur:this.onBlurHandler.bind(this),ref:o=>this.inputRef=o,required:this.required,"aria-checked":this.checked,"aria-required":m(this.required),"aria-invalid":m(this.invalid),"aria-describedby":this.wcagDescribedBy,"aria-labelledby":this.wcagLabelledBy,"aria-disabled":m(this.disabled)}),i("span",null,i("slot",{name:"label"}))))))}onClickHandler(o){o.stopPropagation()}onFocusHandler(o){o.stopPropagation();this.govFocus.emit({component:n.root,value:this.value,checked:this.checked,originalEvent:o})}onBlurHandler(o){o.stopPropagation();this.govBlur.emit({component:n.root,value:this.value,checked:this.checked,originalEvent:o})}onChangeHandler(o){this.checked=o.target.checked;o.stopPropagation();this.govChange.emit({component:n.root,value:this.value,checked:this.checked,originalEvent:o})}async getRef(){return this.inputRef}async validateWcag(){g(this.wcagDescribedBy,"wcag-described-by",n.root);g(this.wcagLabelledBy,"wcag-labelled-by",n.root);f(this.identifier||this.radioId,this.wcagLabelledBy,n.root)}get host(){return this}static get watchers(){return{size:["validateSize","watchDisabled"],disabled:["watchDisabled"],invalid:["watchDisabled"]}}static get style(){return x}},[4,"gov-form-radio",{value:[1],noLabel:[4,"no-label"],checked:[1540],required:[4],disabled:[4],name:[1],size:[1],identifier:[1],invalid:[4],wcagDescribedBy:[1,"wcag-described-by"],wcagLabelledBy:[1,"wcag-labelled-by"],getRef:[64],validateWcag:[64]}]);function k(){if(typeof customElements==="undefined"){return}const o=["gov-form-radio"];o.forEach((o=>{switch(o){case"gov-form-radio":if(!customElements.get(o)){customElements.define(o,u)}break}}))}k();const z=u;const w=k;export{z as GovFormRadio,w as defineCustomElement};
//# sourceMappingURL=gov-form-radio.js.map