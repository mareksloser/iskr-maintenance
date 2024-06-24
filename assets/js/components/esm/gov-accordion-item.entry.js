import { r as registerInstance, c as createEvent, h, a as Host, g as getElement } from './index-eb59f132.js';
import { v as validateProp } from './props-a85d9c89.js';
import { A as AccordionItemClass, a as AccordionClass, b as AccordionSizes, c as AccordionVariants } from './constants-09bda759.js';
import { c as createID } from './string.utils-f268fc6b.js';
import { g as govHost, b as booleanString, t as toBoolAttrIfDefined } from './template-a0067bb6.js';
import './gov.log-49da0221.js';
import './win-1dbd3f5c.js';
import './utils-c057a3fa.js';
import './sizes-6c5943b4.js';
import './variants-2b936d58.js';

const govAccordionItemCss = ".gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-accordion-item{position:relative;display:block;width:100%}.gov-accordion-item::before{content:\"\";position:absolute;display:block;right:0;bottom:-1px;left:0;height:1px;background-color:var(--gov-color-secondary-500)}.gov-accordion-item__header{display:inline-flex;vertical-align:middle;justify-content:center;align-items:center;border:0;background-color:transparent;text-align:center;text-decoration:none;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0;padding:0;font-family:var(--gov-font-family, \"Roboto\", sans-serif);font-weight:400;box-sizing:border-box;position:relative;display:flex;justify-content:space-between;align-items:flex-start;width:100%;border-radius:0;text-align:left;text-transform:none;transition:background-color 150ms ease-in-out}.gov-accordion-item__header:focus{outline:none}.gov-accordion-item__header:focus{outline:none}.gov-accordion-item__header:focus-visible{border-radius:var(--gov-border-radius, 0.1875rem);outline:var(--gov-outline-width, 0.125rem) solid var(--gov-color-focus-base);outline-offset:0}.gov-accordion-item__header:focus-visible::before{display:none}.gov-accordion-item__header[aria-expanded=\"\"] .gov-accordion-item__arrow .gov-icon:not([slot=toggle-icon]),.gov-accordion-item__header[aria-expanded=true i] .gov-accordion-item__arrow .gov-icon:not([slot=toggle-icon]),.gov-accordion-item__header[aria-expanded=\"1\"] .gov-accordion-item__arrow .gov-icon:not([slot=toggle-icon]){transform:scale(-1)}.gov-accordion-item__icon{display:inline-flex;vertical-align:middle;flex:0 0 auto}.gov-accordion-item__title{display:flex;flex-direction:column;margin-right:auto}.gov-accordion-item__label *{margin-bottom:0;display:inline-block;transform:translateY(1px)}.gov-accordion-item__annotation *{color:var(--gov-color-secondary);margin-bottom:0}.gov-accordion-item__right{display:flex;flex-shrink:0;align-items:center;margin-left:auto}.gov-accordion-item__suffix{display:inline-flex;vertical-align:middle;flex:0 0 auto;align-self:start;line-height:initial}.gov-accordion-item__arrow{flex:0 0 auto}.gov-accordion-item__content>*:last-child{margin-bottom:0}.gov-accordion-item[size=xs] .gov-accordion-item__header,.gov-accordion-item .gov-accordion-item[size=xs] .gov-accordion-item__header{gap:var(--gov-accordion-xs-headline-gap, 0.5rem);min-height:var(--gov-accordion-xs-min-height, 3rem);padding:var(--gov-accordion-xs-padding-y, 0.75rem) var(--gov-accordion-xs-padding-x, 0.5rem)}.gov-accordion-item[size=xs] .gov-accordion-item__icon,.gov-accordion-item .gov-accordion-item[size=xs] .gov-accordion-item__icon{width:calc(var(--gov-text-m-font-size) * 1.2);height:calc(var(--gov-text-m-font-size) * 1.2);transform:translateY(var(--gov-accordion-xs-icon-position, 0.1875rem))}.gov-accordion-item[size=xs] .gov-accordion-item__label *,.gov-accordion-item .gov-accordion-item[size=xs] .gov-accordion-item__label *{font-weight:var(--gov-text-m-font-weight);font-size:var(--gov-text-m-font-size);line-height:var(--gov-text-m-line-height);letter-spacing:var(--gov-text-m-letter-spacing)}.gov-accordion-item[size=xs] .gov-accordion-item__annotation,.gov-accordion-item .gov-accordion-item[size=xs] .gov-accordion-item__annotation{font-weight:var(--gov-text-s-font-weight);font-size:var(--gov-text-s-font-size);line-height:var(--gov-text-s-line-height);letter-spacing:var(--gov-text-s-letter-spacing)}.gov-accordion-item[size=xs] .gov-accordion-item__right,.gov-accordion-item .gov-accordion-item[size=xs] .gov-accordion-item__right{gap:var(--gov-accordion-xs-headline-gap, 0.5rem);transform:translateY(var(--gov-accordion-xs-arrow-position, 0.1875rem))}.gov-accordion-item[size=xs] .gov-accordion-item__right:has(.gov-accordion-item__suffix),.gov-accordion-item .gov-accordion-item[size=xs] .gov-accordion-item__right:has(.gov-accordion-item__suffix){transform:translateY(var(--gov-accordion-xs-icon-position, 0.1875rem))}.gov-accordion-item[size=xs] .gov-accordion-item__arrow,.gov-accordion-item .gov-accordion-item[size=xs] .gov-accordion-item__arrow{width:var(--gov-accordion-xs-icon-size, 1rem);height:var(--gov-accordion-xs-icon-size, 1rem)}.gov-accordion-item[size=xs] .gov-accordion-item__content,.gov-accordion-item .gov-accordion-item[size=xs] .gov-accordion-item__content{padding:var(--gov-accordion-xs-padding-inner, 1rem 0.5rem)}.gov-accordion-item[size=s] .gov-accordion-item__header,.gov-accordion-item .gov-accordion-item[size=s] .gov-accordion-item__header{gap:var(--gov-accordion-s-headline-gap, 0.5rem);min-height:var(--gov-accordion-s-min-height, 3rem);padding:var(--gov-accordion-s-padding-y, 1.125rem) var(--gov-accordion-s-padding-x, 0.5rem)}.gov-accordion-item[size=s] .gov-accordion-item__icon,.gov-accordion-item .gov-accordion-item[size=s] .gov-accordion-item__icon{width:calc(var(--gov-text-xl-font-size) * 1.2);height:calc(var(--gov-text-xl-font-size) * 1.2);transform:translateY(var(--gov-accordion-s-icon-position, 0.1875rem))}.gov-accordion-item[size=s] .gov-accordion-item__label *,.gov-accordion-item .gov-accordion-item[size=s] .gov-accordion-item__label *{font-weight:var(--gov-text-xl-font-weight);font-size:var(--gov-text-xl-font-size);line-height:var(--gov-text-xl-line-height);letter-spacing:var(--gov-text-xl-letter-spacing)}.gov-accordion-item[size=s] .gov-accordion-item__annotation,.gov-accordion-item .gov-accordion-item[size=s] .gov-accordion-item__annotation{font-weight:var(--gov-text-m-font-weight);font-size:var(--gov-text-m-font-size);line-height:var(--gov-text-m-line-height);letter-spacing:var(--gov-text-m-letter-spacing)}.gov-accordion-item[size=s] .gov-accordion-item__right,.gov-accordion-item .gov-accordion-item[size=s] .gov-accordion-item__right{gap:var(--gov-accordion-s-headline-gap, 0.5rem);transform:translateY(var(--gov-accordion-s-arrow-position, 0.4375rem))}.gov-accordion-item[size=s] .gov-accordion-item__right:has(.gov-accordion-item__suffix),.gov-accordion-item .gov-accordion-item[size=s] .gov-accordion-item__right:has(.gov-accordion-item__suffix){transform:translateY(var(--gov-accordion-s-icon-position, 0.1875rem))}.gov-accordion-item[size=s] .gov-accordion-item__arrow,.gov-accordion-item .gov-accordion-item[size=s] .gov-accordion-item__arrow{width:var(--gov-accordion-s-icon-size, 1rem);height:var(--gov-accordion-s-icon-size, 1rem)}.gov-accordion-item[size=s] .gov-accordion-item__content,.gov-accordion-item .gov-accordion-item[size=s] .gov-accordion-item__content{padding:var(--gov-accordion-s-padding-inner, 1rem 0.5rem)}.gov-accordion-item[size=m] .gov-accordion-item__header,.gov-accordion-item .gov-accordion-item[size=m] .gov-accordion-item__header{gap:var(--gov-accordion-m-headline-gap, 1rem);min-height:var(--gov-accordion-m-min-height, 4.5rem);padding:var(--gov-accordion-m-padding-y, 1.25rem) var(--gov-accordion-m-padding-x, 0.5rem)}.gov-accordion-item[size=m] .gov-accordion-item__icon,.gov-accordion-item .gov-accordion-item[size=m] .gov-accordion-item__icon{width:calc(var(--gov-text-2xl-font-size) * 1.2);height:calc(var(--gov-text-2xl-font-size) * 1.2);transform:translateY(var(--gov-accordion-m-icon-position, 0.25rem))}.gov-accordion-item[size=m] .gov-accordion-item__label *,.gov-accordion-item .gov-accordion-item[size=m] .gov-accordion-item__label *{font-weight:var(--gov-text-2xl-font-weight);font-size:var(--gov-text-2xl-font-size);line-height:var(--gov-text-2xl-line-height);letter-spacing:var(--gov-text-2xl-letter-spacing)}.gov-accordion-item[size=m] .gov-accordion-item__annotation,.gov-accordion-item .gov-accordion-item[size=m] .gov-accordion-item__annotation{font-weight:var(--gov-text-m-font-weight);font-size:var(--gov-text-m-font-size);line-height:var(--gov-text-m-line-height);letter-spacing:var(--gov-text-m-letter-spacing)}.gov-accordion-item[size=m] .gov-accordion-item__right,.gov-accordion-item .gov-accordion-item[size=m] .gov-accordion-item__right{gap:var(--gov-accordion-m-headline-gap, 1rem);transform:translateY(var(--gov-accordion-m-arrow-position, 0.25rem))}.gov-accordion-item[size=m] .gov-accordion-item__right:has(.gov-accordion-item__suffix),.gov-accordion-item .gov-accordion-item[size=m] .gov-accordion-item__right:has(.gov-accordion-item__suffix){transform:translateY(var(--gov-accordion-m-icon-position, 0.25rem))}.gov-accordion-item[size=m] .gov-accordion-item__arrow,.gov-accordion-item .gov-accordion-item[size=m] .gov-accordion-item__arrow{width:var(--gov-accordion-m-icon-size, 1.5rem);height:var(--gov-accordion-m-icon-size, 1.5rem)}.gov-accordion-item[size=m] .gov-accordion-item__content,.gov-accordion-item .gov-accordion-item[size=m] .gov-accordion-item__content{padding:var(--gov-accordion-m-padding-inner, 1.25rem 0.5rem)}.gov-accordion-item[size=l] .gov-accordion-item__header,.gov-accordion-item .gov-accordion-item[size=l] .gov-accordion-item__header{gap:var(--gov-accordion-l-headline-gap, 1rem);min-height:var(--gov-accordion-l-min-height, 5.5rem);padding:var(--gov-accordion-l-padding-y, 1.375rem) var(--gov-accordion-l-padding-x, 0.5rem)}.gov-accordion-item[size=l] .gov-accordion-item__icon,.gov-accordion-item .gov-accordion-item[size=l] .gov-accordion-item__icon{width:calc(var(--gov-text-3xl-font-size) * 1.2);height:calc(var(--gov-text-3xl-font-size) * 1.2);transform:translateY(var(--gov-accordion-l-icon-position, 0.3125rem))}.gov-accordion-item[size=l] .gov-accordion-item__label *,.gov-accordion-item .gov-accordion-item[size=l] .gov-accordion-item__label *{font-weight:var(--gov-text-3xl-font-weight);font-size:var(--gov-text-3xl-font-size);line-height:var(--gov-text-3xl-line-height);letter-spacing:var(--gov-text-3xl-letter-spacing)}.gov-accordion-item[size=l] .gov-accordion-item__annotation,.gov-accordion-item .gov-accordion-item[size=l] .gov-accordion-item__annotation{font-weight:var(--gov-text-m-font-weight);font-size:var(--gov-text-m-font-size);line-height:var(--gov-text-m-line-height);letter-spacing:var(--gov-text-m-letter-spacing)}.gov-accordion-item[size=l] .gov-accordion-item__right,.gov-accordion-item .gov-accordion-item[size=l] .gov-accordion-item__right{gap:var(--gov-accordion-l-headline-gap, 1rem);transform:translateY(var(--gov-accordion-l-arrow-position, 0.625rem))}.gov-accordion-item[size=l] .gov-accordion-item__right:has(.gov-accordion-item__suffix),.gov-accordion-item .gov-accordion-item[size=l] .gov-accordion-item__right:has(.gov-accordion-item__suffix){transform:translateY(var(--gov-accordion-l-icon-position, 0.3125rem))}.gov-accordion-item[size=l] .gov-accordion-item__arrow,.gov-accordion-item .gov-accordion-item[size=l] .gov-accordion-item__arrow{width:var(--gov-accordion-l-icon-size, 1.5rem);height:var(--gov-accordion-l-icon-size, 1.5rem)}.gov-accordion-item[size=l] .gov-accordion-item__content,.gov-accordion-item .gov-accordion-item[size=l] .gov-accordion-item__content{padding:var(--gov-accordion-l-padding-inner, 1.25rem 0.5rem)}.gov-accordion-item[variant=primary] .gov-accordion-item::before{background-color:var(--gov-accordion-primary-separator, var(--gov-color-secondary-500))}.gov-accordion-item[variant=primary] .gov-accordion-item__header{background-color:var(--gov-accordion-primary-background, transparent);color:var(--gov-accordion-primary-color, var(--gov-color-primary))}@media not all and (pointer: coarse){.gov-accordion-item[variant=primary] .gov-accordion-item__header:hover{background-color:var(--gov-accordion-primary-background-hover, var(--gov-color-primary-200))}}.gov-accordion-item[variant=primary][disabled=\"\"] .gov-accordion-item__header,.gov-accordion-item[variant=primary][disabled=true i] .gov-accordion-item__header,.gov-accordion-item[variant=primary][disabled=\"1\"] .gov-accordion-item__header{color:var(--gov-accordion-primary-disabled-color, var(--gov-color-primary-400))}@media not all and (pointer: coarse){.gov-accordion-item[variant=primary][disabled=\"\"] .gov-accordion-item__header:hover,.gov-accordion-item[variant=primary][disabled=true i] .gov-accordion-item__header:hover,.gov-accordion-item[variant=primary][disabled=\"1\"] .gov-accordion-item__header:hover{background:transparent;cursor:not-allowed}}.gov-accordion-item[variant=secondary] .gov-accordion-item::before{background-color:var(--gov-accordion-secondary-separator, var(--gov-color-secondary-500))}.gov-accordion-item[variant=secondary] .gov-accordion-item__header{background-color:var(--gov-accordion-secondary-background, transparent);color:var(--gov-accordion-secondary-color, var(--gov-color-secondary))}@media not all and (pointer: coarse){.gov-accordion-item[variant=secondary] .gov-accordion-item__header:hover{background-color:var(--gov-accordion-secondary-background-hover, var(--gov-color-secondary-200))}}.gov-accordion-item[variant=secondary][disabled=\"\"] .gov-accordion-item__header,.gov-accordion-item[variant=secondary][disabled=true i] .gov-accordion-item__header,.gov-accordion-item[variant=secondary][disabled=\"1\"] .gov-accordion-item__header{color:var(--gov-accordion-secondary-disabled-color, var(--gov-color-secondary-600))}@media not all and (pointer: coarse){.gov-accordion-item[variant=secondary][disabled=\"\"] .gov-accordion-item__header:hover,.gov-accordion-item[variant=secondary][disabled=true i] .gov-accordion-item__header:hover,.gov-accordion-item[variant=secondary][disabled=\"1\"] .gov-accordion-item__header:hover{background:transparent;cursor:not-allowed}}@media (max-width: 47.99em){.gov-accordion-item__title{flex-wrap:wrap}.gov-accordion-item__label{flex:0 0 auto}}";

const GovAccordionItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.govChange = createEvent(this, "gov-change", 7);
    this.isExpandedState = undefined;
    this.variant = undefined;
    this.identifier = undefined;
    this.size = undefined;
    this.disabled = false;
    this.isExpanded = false;
    this.h = govHost(this.host);
    this.triggerId = createID("GovAccordionItem");
    this.contentId = createID("GovAccordionContent");
  }
  validateSize(newValue) {
    validateProp(AccordionSizes, newValue, AccordionItemClass.root);
  }
  validateVariant(newValue) {
    validateProp(AccordionVariants, newValue, AccordionItemClass.root);
  }
  emmitChange() {
    this.govChange.emit({
      open: this.isExpanded,
      component: AccordionItemClass.root,
      ref: this.host,
    });
  }
  componentWillLoad() {
    this.getPropsFromParents();
    this.validateSize(this.size);
    this.validateVariant(this.variant);
  }
  getPropsFromParents() {
    const accordion = this.h.getParent(AccordionClass.root);
    if (accordion) {
      this.size = accordion.getAttribute("size");
      this.variant = accordion.getAttribute("variant");
    }
  }
  render() {
    const triggerId = this.identifier || this.triggerId;
    const contentId = this.contentId;
    return (h(Host, { class: this.h.classes(AccordionItemClass.root), size: this.size, variant: this.variant, role: "listitem" }, h("button", { id: triggerId, class: AccordionItemClass.header, "aria-expanded": booleanString(this.isExpanded), "aria-controls": contentId, disabled: this.disabled, type: "button", "aria-disabled": toBoolAttrIfDefined(this.disabled), onClick: (e) => {
        e.stopPropagation();
        this.toggle().finally();
      } }, this.h.hasSlot("icon") && (h("span", { class: AccordionItemClass.icon }, h("slot", { name: "icon" }))), h("span", { class: AccordionItemClass.title }, h("span", { class: AccordionItemClass.label }, h("slot", { name: "label" })), this.h.hasSlot("annotation") && (h("span", { class: AccordionItemClass.annotation }, h("slot", { name: "annotation" })))), h("span", { class: AccordionItemClass.right }, this.h.hasSlot("suffix") && (h("span", { class: AccordionItemClass.suffix }, h("slot", { name: "suffix" }))), h("span", { class: AccordionItemClass.arrow }, this.h.hasSlot("toggle-icon") ? (h("slot", { name: "toggle-icon" })) : (h("gov-icon", { name: "chevron-down" }))))), h("div", { class: AccordionItemClass.content, id: contentId, "aria-hidden": booleanString(!this.isExpanded), hidden: !this.isExpanded, "aria-labelledby": triggerId }, h("slot", null))));
  }
  /**
   * Opening the accordion
   */
  async open() {
    this.isExpanded = true;
    this.emmitChange();
  }
  /**
   * Closing the accordion
   */
  async close() {
    this.isExpanded = false;
    this.emmitChange();
  }
  /**
   * Accordion switch
   */
  async toggle() {
    this.isExpanded = !this.isExpanded;
    this.emmitChange();
  }
  /**
   * Returns the current state of the component
   */
  async currentState() {
    return this.isExpanded;
  }
  get host() { return getElement(this); }
  static get watchers() { return {
    "size": ["validateSize"],
    "variant": ["validateVariant"]
  }; }
};
GovAccordionItem.style = govAccordionItemCss;

export { GovAccordionItem as gov_accordion_item };

//# sourceMappingURL=gov-accordion-item.entry.js.map