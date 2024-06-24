import{p as t,H as e,c as i,h as s,d as o}from"./p-2dee9951.js";import{a}from"./p-c353678b.js";import{v as n}from"./p-dcb5fb35.js";import{c as r}from"./p-24636c53.js";import{d as l,t as h,h as c}from"./p-03990da5.js";import{F as m,a as d,b as g}from"./p-53e02bee.js";import{d as u}from"./p-76b229e3.js";import{d as p}from"./p-8b7b916a.js";const v='.gov-form-autocomplete__list{margin:0;padding:0}.gov-form-autocomplete__list>.gov-form-autocomplete__item{margin:0;padding:0;background:none}.gov-form-autocomplete__list>.gov-form-autocomplete__item::before{display:none}.gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-form-autocomplete{position:relative;display:block;width:100%}.gov-form-autocomplete__list{font-weight:var(--gov-text-s-font-weight);font-size:var(--gov-text-s-font-size);line-height:var(--gov-text-s-line-height);letter-spacing:var(--gov-text-s-letter-spacing);position:absolute;top:100%;right:0;left:0;z-index:5;max-height:14.0625rem;margin-top:0.5rem;border:var(--gov-autocomplete-item-hover, 0.0625rem solid var(--gov-color-secondary-500));border-radius:var(--gov-border-radius, 0.1875rem);background:var(--gov-autocomplete-bg, var(--gov-color-neutral-white));overflow-x:hidden;overflow-y:auto;overscroll-behavior:none}.gov-form-autocomplete__list>.gov-form-autocomplete__item{padding:0.75rem 0.5rem;cursor:pointer}.gov-form-autocomplete__item--empty,.gov-form-autocomplete__item--loading{padding:0.75rem 0.5rem;color:var(--gov-autocomplete-item-disable-color, var(--gov-color-secondary-600))}.gov-form-autocomplete__item--empty .gov-icon,.gov-form-autocomplete__item--empty .gov-spin-animation,.gov-form-autocomplete__item--loading .gov-icon,.gov-form-autocomplete__item--loading .gov-spin-animation{width:12px;height:12px}.gov-form-autocomplete__list:empty{display:none}.gov-form-autocomplete__item[aria-selected=""],.gov-form-autocomplete__item[aria-selected=true i],.gov-form-autocomplete__item[aria-selected="1"]{background:var(--gov-autocomplete-item-select, var(--gov-color-secondary-400))}@media not all and (pointer: coarse){.gov-form-autocomplete__item:hover{background:var(--gov-autocomplete-item-hover, var(--gov-color-primary-100))}}';const f=t(class t extends e{constructor(){super();this.__registerHost();this.govFocus=i(this,"gov-focus",7);this.govBlur=i(this,"gov-blur",7);this.govInput=i(this,"gov-input",7);this.govSelect=i(this,"gov-select",7);this.templateResolver=t=>t[this.nameKey];this.value="";this.identifier=undefined;this.variant=undefined;this.success=undefined;this.size="m";this.nameKey="name";this.name=undefined;this.required=false;this.disabled=false;this.placeholder=undefined;this.readonly=undefined;this.invalid=undefined;this.minlength=3;this.maxlength=undefined;this.messageEmpty="Nebyly nalezeny žádné výsledky";this.messageLoading="Načítám...";this.wcagDescribedBy=undefined;this.wcagLabelledBy=undefined;this.wcagOwns=undefined;this.focused=undefined;this.processing=false;this.arrowCounter=-1;this.list=[];this.listBoxId=r("GovListBox")}validateVariant(t){n(d,t,m.root)}validateSize(t){n(g,t,m.root)}onArrowUp(){if(this.arrowCounter>0){this.arrowCounter=this.arrowCounter-1;this.moveToView().finally()}}onArrowDown(){if(this.arrowCounter<this.list.length-1){this.arrowCounter=this.arrowCounter+1;this.moveToView().finally()}}async moveToView(){await l(200);const t=this.listRef.offsetHeight;const e=this.listRef.querySelector('li[aria-selected="true"]');if(e&&t){const t=e.offsetTop;this.listRef.scrollTo({top:t,behavior:"smooth"})}}doSearch(){if(Number.isInteger(this.minlength)&&this.isValueAccepted===false&&this.minlength){this.list=[];this.arrowCounter=-1;this.processing=false;return}if(this.searchCallback){this.processing=true;this.searchCallback(this.value).then((t=>this.list=t)).catch((()=>this.list=[])).finally((()=>{this.arrowCounter=-1;this.processing=false}))}}get isValueAccepted(){if(typeof this.value==="string"){return this.value.length>=this.minlength}else{return false}}componentWillLoad(){this.validateVariant(this.variant);this.validateSize(this.size)}render(){return s(o,{class:m.root,size:this.size,variant:this.variant},s("gov-form-input",{placeholder:this.placeholder,name:this.name,disabled:this.disabled,readonly:this.readonly,autocomplete:false,size:this.size,variant:this.variant,required:this.required,invalid:this.invalid,success:this.success,role:"searchbox",value:this.value,minlength:this.minlength,maxlength:this.maxlength,"on-gov-input":h(this.onInputHandler.bind(this),200),"on-gov-keyup":this.onKeyUpHandler.bind(this),"on-gov-keydown":this.onKeyDownHandler.bind(this),"on-gov-focus":this.onFocusHandler.bind(this),"on-gov-blur":this.onBlurHandler.bind(this),wcagAutocomplete:"list",wcagDescribedBy:this.wcagDescribedBy,wcagLabelledBy:this.wcagLabelledBy,wcagOwns:[this.listBoxId,this.wcagOwns].join(" "),wcagExpanded:this.list.length&&this.focused,ref:t=>this.inputRef=t},s("slot",{slot:"right-icon",name:"right-icon"})),s("ul",{class:m.list,role:"listbox",id:this.listBoxId,ref:t=>this.listRef=t},this.focused&&this.list.length===0&&this.processing===false&&this.isValueAccepted&&this.messageEmpty?s("li",{class:m.empty},this.messageEmpty):null,this.focused&&this.processing===true&&this.isValueAccepted?s("li",{class:m.loading},s("gov-icon",{name:"loader",class:"gov-spin-animation"})," ",this.messageLoading):null,this.list.map(((t,e)=>{const i=this.arrowCounter===e;return s("li",{class:m.item,innerHTML:this.templateResolver(t,i),role:"option","aria-posinset":e,tabindex:i?0:-1,"aria-setsize":this.list.length,onTouchStart:t=>this.onSelectHandler(t,e),onMouseDown:t=>this.onSelectHandler(t,e),"aria-selected":a(i)})}))))}onFocusHandler(t){this.focused=true;this.arrowCounter=-1;if((this.value||this.minlength===0)&&this.searchCallback){this.doSearch()}t.stopPropagation();this.govFocus.emit({originalEvent:t,component:m.root,value:this.value,selected:null})}onBlurHandler(t){this.focused=false;this.list=[];this.arrowCounter=-1;t.stopPropagation();this.govBlur.emit({originalEvent:t,component:m.root,value:this.value,selected:null})}onInputHandler(t){this.value=t.target.value;t.stopPropagation();this.govInput.emit({originalEvent:t,component:m.root,value:this.value,selected:null});this.doSearch()}onSelectHandler(t,e=-1){let i=null;if(e>-1){i=this.list[e]}else if(c(this.arrowCounter,this.list)){i=this.list[this.arrowCounter]}if(i){this.govSelect.emit({component:m.root,value:this.value,selected:i,originalEvent:t});this.list=[];if(c(this.nameKey,i)&&typeof i[this.nameKey]==="string"){this.value=i[this.nameKey]}}}onKeyUpHandler(t){const e=t.detail.originalEvent;t.stopPropagation();e.stopPropagation();if(e.keyCode===38)this.onArrowUp();else if(e.keyCode===40)this.onArrowDown();else if(e.keyCode===13){t.preventDefault();e.preventDefault();this.onSelectHandler(t)}}onKeyDownHandler(t){const e=t.detail.originalEvent;t.stopPropagation();e.stopPropagation();if(e.keyCode===13){t.preventDefault();e.preventDefault()}}async setFocus(t){return this.inputRef.focus(t)}async setOptions(t){this.list=Array.isArray(t)?t:[];this.arrowCounter=-1}async clearValue(){this.value="";this.inputRef.value="";await this.inputRef.clearValue()}async setProcessing(t){this.processing=t}async setSearchCallback(t){this.searchCallback=t}async setTemplateResolver(t){this.templateResolver=t}get host(){return this}static get watchers(){return{variant:["validateVariant"],size:["validateSize"]}}static get style(){return v}},[4,"gov-form-autocomplete",{value:[1537],identifier:[1],variant:[1],success:[4],size:[1],nameKey:[1,"name-key"],name:[1],required:[4],disabled:[4],placeholder:[1],readonly:[4],invalid:[4],minlength:[2],maxlength:[2],messageEmpty:[1,"message-empty"],messageLoading:[1,"message-loading"],wcagDescribedBy:[1,"wcag-described-by"],wcagLabelledBy:[1,"wcag-labelled-by"],wcagOwns:[1,"wcag-owns"],focused:[32],processing:[32],arrowCounter:[32],list:[32],setFocus:[64],setOptions:[64],clearValue:[64],setProcessing:[64],setSearchCallback:[64],setTemplateResolver:[64]}]);function y(){if(typeof customElements==="undefined"){return}const t=["gov-form-autocomplete","gov-form-input","gov-icon"];t.forEach((t=>{switch(t){case"gov-form-autocomplete":if(!customElements.get(t)){customElements.define(t,f)}break;case"gov-form-input":if(!customElements.get(t)){u()}break;case"gov-icon":if(!customElements.get(t)){p()}break}}))}y();export{f as G,y as d};
//# sourceMappingURL=p-44762d17.js.map