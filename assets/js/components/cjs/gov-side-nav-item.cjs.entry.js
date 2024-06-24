'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7b6bba34.js');
const gov_log = require('./gov.log-b842920d.js');
const constants = require('./constants-25f7a6be.js');
const template = require('./template-9534c584.js');
require('./win-5521073d.js');
require('./utils-c9b1bba3.js');

const govSideNavItemCss = ".gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-side-nav-item{position:relative;display:block;width:100%}.gov-side-nav-item__header{display:flex;align-items:center;border-bottom:var(--gov-side-nav-border, 0.0625rem solid var(--gov-color-secondary-500))}.gov-side-nav-item__name{display:inline-flex;vertical-align:middle;justify-content:center;align-items:center;border:0;background-color:transparent;text-align:center;text-decoration:none;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:var(--gov-text-m-font-weight);font-size:var(--gov-text-m-font-size);line-height:var(--gov-text-m-line-height);letter-spacing:var(--gov-text-m-letter-spacing);display:flex;gap:1rem;flex:1 1 auto;justify-content:flex-start;padding:0.75rem 1rem 0.75rem 0.5rem;color:var(--gov-side-nav-color, var(--gov-color-secondary));text-align:left;transition:background-color 150ms}.gov-side-nav-item__name:focus{outline:none}.gov-side-nav-item__name:focus{outline:none}.gov-side-nav-item__name:focus-visible{border-radius:var(--gov-border-radius, 0.1875rem);outline:var(--gov-outline-width, 0.125rem) solid var(--gov-color-focus-base);outline-offset:0}button.gov-side-nav-item__name{padding-right:0 !important}@media not all and (pointer: coarse){.gov-side-nav-item__name:hover{background:var(--gov-side-nav-hover-bg, var(--gov-color-primary-200))}}.gov-side-nav-item__icon{display:flex;flex:0 0 auto;width:1rem;height:1rem}.gov-side-nav-item__icon .gov-icon{margin:0;color:var(--gov-side-nav-color, var(--gov-color-secondary))}.gov-side-nav-item__label{color:inherit}.gov-side-nav-item__chip{display:flex;flex:0 0 auto}.gov-side-nav-item__arrow{display:inline-flex;vertical-align:middle;justify-content:center;align-items:center;border:0;background-color:transparent;text-align:center;text-decoration:none;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;flex:0 0 auto;align-self:stretch;width:3rem;margin-left:auto;color:var(--gov-side-nav-arrow-color, var(--gov-color-primary));transition:background-color 150ms}.gov-side-nav-item__arrow:focus{outline:none}.gov-side-nav-item__arrow:focus{outline:none}.gov-side-nav-item__arrow:focus-visible{border-radius:var(--gov-border-radius, 0.1875rem);outline:var(--gov-outline-width, 0.125rem) solid var(--gov-color-focus-base);outline-offset:0}.gov-side-nav-item__arrow .gov-icon{width:0.75rem;height:0.75rem}@media not all and (pointer: coarse){.gov-side-nav-item__arrow:hover{background:var(--gov-side-nav-hover-bg, var(--gov-color-primary-200))}}.gov-side-nav-item__content{display:none}.gov-side-nav-item--w-icon .gov-side-nav-item__label{margin-left:2rem}.gov-side-nav-item--w-icon .gov-side-nav-item__icon+.gov-side-nav-item__label{margin-left:0}.gov-side-nav-item .gov-side-nav-item .gov-side-nav-item__header{border:none !important}.gov-side-nav-item .gov-side-nav-item .gov-side-nav-item__name{font-weight:var(--gov-text-s-font-weight);font-size:var(--gov-text-s-font-size);line-height:var(--gov-text-s-line-height);letter-spacing:var(--gov-text-s-letter-spacing);padding:0.625rem 0.5rem;font-weight:bold}.gov-side-nav-item .gov-side-nav-item[aria-expanded=\"\"],.gov-side-nav-item .gov-side-nav-item[aria-expanded=true i],.gov-side-nav-item .gov-side-nav-item[aria-expanded=\"1\"]{background:var(--gov-side-nav-bg-level-2, var(--gov-color-secondary-300))}.gov-side-nav-item .gov-side-nav-item[aria-expanded=\"\"][inverse=\"\"],.gov-side-nav-item .gov-side-nav-item[aria-expanded=\"\"][inverse=true i],.gov-side-nav-item .gov-side-nav-item[aria-expanded=\"\"][inverse=\"1\"],.gov-side-nav-item .gov-side-nav-item[aria-expanded=true i][inverse=\"\"],.gov-side-nav-item .gov-side-nav-item[aria-expanded=true i][inverse=true i],.gov-side-nav-item .gov-side-nav-item[aria-expanded=true i][inverse=\"1\"],.gov-side-nav-item .gov-side-nav-item[aria-expanded=\"1\"][inverse=\"\"],.gov-side-nav-item .gov-side-nav-item[aria-expanded=\"1\"][inverse=true i],.gov-side-nav-item .gov-side-nav-item[aria-expanded=\"1\"][inverse=\"1\"]{background:var(--gov-side-nav-bg-level-2, var(--gov-color-neutral-white))}.gov-side-nav-item .gov-side-nav-item .gov-side-nav-item .gov-side-nav-item__name{gap:0.75rem;font-weight:inherit}.gov-side-nav-item[compact=\"\"] .gov-side-nav-item__header,.gov-side-nav-item[compact=true i] .gov-side-nav-item__header,.gov-side-nav-item[compact=\"1\"] .gov-side-nav-item__header{border-bottom:none}.gov-side-nav-item[aria-expanded=\"\"]>.gov-side-nav-item__header .gov-side-nav-item__arrow .gov-icon,.gov-side-nav-item[aria-expanded=true i]>.gov-side-nav-item__header .gov-side-nav-item__arrow .gov-icon,.gov-side-nav-item[aria-expanded=\"1\"]>.gov-side-nav-item__header .gov-side-nav-item__arrow .gov-icon{transform:scale(-1)}.gov-side-nav-item[aria-expanded=\"\"]>.gov-side-nav-item__content,.gov-side-nav-item[aria-expanded=true i]>.gov-side-nav-item__content,.gov-side-nav-item[aria-expanded=\"1\"]>.gov-side-nav-item__content{display:block}";

const GovSideNavItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.govChange = index.createEvent(this, "gov-change", 7);
    this.isExpandedState = undefined;
    this.inverse = false;
    this.compact = false;
    this.identifier = undefined;
    this.count = false;
    this.label = undefined;
    this.disabled = false;
    this.href = undefined;
    this.isExpanded = false;
    this.h = template.govHost(this.host);
  }
  validateLabel(newValue) {
    if (!newValue) {
      gov_log.govErrorLog(`[${constants.SideNavItemClass.root}]: Parameter label is required.`);
    }
  }
  emmitChange() {
    this.govChange.emit({ open: this.isExpandedState, element: this.host });
  }
  componentWillLoad() {
    this.isExpandedState = this.isExpanded;
    this.validateLabel(this.label);
  }
  get classNames() {
    const { h } = this;
    return template.prepareClasses([constants.SideNavItemClass.root, h.hasSlot('icon') && constants.SideNavItemClass.rootWithIcon]);
  }
  render() {
    const { isExpandedState, label } = this;
    // TODO: správný počet zanořených childů
    const hasChilds = this.host.children.length > 1;
    return (index.h(index.Host, { class: this.classNames, role: "listitem", inverse: this.inverse, "aria-expanded": template.booleanString(isExpandedState) }, this.href ? (index.h("div", { class: constants.SideNavItemClass.header }, index.h("a", { class: constants.SideNavItemClass.name, href: this.href }, this.h.hasSlot('icon') && (index.h("span", { class: constants.SideNavItemClass.icon }, index.h("slot", { name: "icon" }))), index.h("span", { class: constants.SideNavItemClass.label }, label), this.count && (index.h("span", { class: constants.SideNavItemClass.chip }, index.h("gov-chip", { variant: "secondary", size: "s", inverse: this.inverse }, "3")))), hasChilds && (index.h("button", { type: "button", class: constants.SideNavItemClass.arrow, onClick: () => this.toggle() }, index.h("gov-icon", { name: "chevron-down" }))))) : (index.h("div", { class: constants.SideNavItemClass.header }, index.h("button", { class: constants.SideNavItemClass.name, type: "button", onClick: () => this.toggle() }, this.h.hasSlot('icon') && (index.h("span", { class: constants.SideNavItemClass.icon }, index.h("slot", { name: "icon" }))), index.h("span", { class: constants.SideNavItemClass.label }, label), hasChilds && (index.h("span", { class: constants.SideNavItemClass.arrow }, index.h("gov-icon", { name: "chevron-down" })))))), hasChilds && (index.h("div", { class: constants.SideNavItemClass.content }, index.h("slot", null)))));
  }
  /**
   * Opening the sidenav
   */
  async open() {
    this.isExpandedState = true;
    this.emmitChange();
  }
  /**
   * Closing the sidenav
   */
  async close() {
    this.isExpandedState = false;
    this.emmitChange();
  }
  /**
   * sidenav switch
   */
  async toggle() {
    this.isExpandedState = !this.isExpandedState;
    this.emmitChange();
  }
  /**
   * Returns the current state of the component
   */
  async currentState() {
    return this.isExpandedState;
  }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "label": ["validateLabel"]
  }; }
};
GovSideNavItem.style = govSideNavItemCss;

exports.gov_side_nav_item = GovSideNavItem;

//# sourceMappingURL=gov-side-nav-item.cjs.entry.js.map