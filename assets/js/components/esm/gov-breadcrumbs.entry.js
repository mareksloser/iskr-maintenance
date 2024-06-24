import { r as registerInstance, c as createEvent, h, a as Host, g as getElement } from './index-eb59f132.js';
import { v as validateWcagLabel } from './wcag-7d25e12b.js';
import { c as canValidateWcagOnRender } from './win-1dbd3f5c.js';
import { d as delay } from './utils-c057a3fa.js';
import { g as govHost } from './template-a0067bb6.js';
import './gov.log-49da0221.js';
import './string.utils-f268fc6b.js';

const BreadcrumbsClass = {
  root: 'gov-breadcrumbs',
};

const govBreadcrumbsCss = ".gov-breadcrumbs ul{margin:0;padding:0}.gov-breadcrumbs li{margin:0;padding:0;background:none}.gov-breadcrumbs li::before{display:none}.gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-breadcrumbs{position:relative;display:flex;width:100%;justify-content:space-between;align-items:flex-start;gap:var(--gov-breadcrumbs-gap, 1rem)}.gov-breadcrumbs nav{overflow:hidden;width:100%}.gov-breadcrumbs ul{position:relative;display:flex;width:100%;flex-direction:column;gap:8px;margin-bottom:0}.gov-breadcrumbs li{display:flex;justify-content:flex-start;align-items:flex-start;margin-bottom:0 !important}.gov-breadcrumbs li .gov-icon{flex:0 0 auto;width:var(--gov-breadcrumbs-icon-size, 0.625rem);height:var(--gov-breadcrumbs-icon-size, 0.625rem);margin:calc((24px - var(--gov-breadcrumbs-icon-size, 0.625rem)) / 2) var(--gov-breadcrumbs-gap, 1rem) 0;color:var(--gov-breadcrumbs-arrow-color, var(--gov-color-secondary-600))}.gov-breadcrumbs li>a:first-child,.gov-breadcrumbs li>button:first-child{margin-left:calc(var(--gov-breadcrumbs-icon-size, 0.625rem) + 2 * var(--gov-breadcrumbs-gap, 1rem))}.gov-breadcrumbs a{font-weight:var(--text-font-weight, var(--gov-text-m-font-weight));font-size:var(--text-font-size, var(--gov-text-m-font-size));line-height:var(--text-line-height, var(--gov-text-m-line-height));letter-spacing:var(--text-letter-spacing, var(--gov-text-m-letter-spacing));color:var(--gov-breadcrumbs-link-color, var(--gov-color-primary))}.gov-breadcrumbs button{font-weight:var(--text-font-weight, var(--gov-text-m-font-weight));font-size:var(--text-font-size, var(--gov-text-m-font-size));line-height:var(--text-line-height, var(--gov-text-m-line-height));letter-spacing:var(--text-letter-spacing, var(--gov-text-m-letter-spacing));color:var(--gov-breadcrumbs-link-color, var(--gov-color-primary));padding:0;border:none;background:none;text-decoration:underline}.gov-breadcrumbs[collapsed=\"\"],.gov-breadcrumbs[collapsed=true i],.gov-breadcrumbs[collapsed=\"1\"]{align-items:center}.gov-breadcrumbs[collapsed=\"\"] ul,.gov-breadcrumbs[collapsed=true i] ul,.gov-breadcrumbs[collapsed=\"1\"] ul{overflow-x:hidden;flex-direction:row}.gov-breadcrumbs[collapsed=\"\"] li,.gov-breadcrumbs[collapsed=true i] li,.gov-breadcrumbs[collapsed=\"1\"] li{align-items:center;white-space:nowrap}.gov-breadcrumbs[collapsed=\"\"] li .gov-icon,.gov-breadcrumbs[collapsed=true i] li .gov-icon,.gov-breadcrumbs[collapsed=\"1\"] li .gov-icon{margin-top:0}.gov-breadcrumbs[collapsed=\"\"] li>a:first-child,.gov-breadcrumbs[collapsed=\"\"] li>button:first-child,.gov-breadcrumbs[collapsed=true i] li>a:first-child,.gov-breadcrumbs[collapsed=true i] li>button:first-child,.gov-breadcrumbs[collapsed=\"1\"] li>a:first-child,.gov-breadcrumbs[collapsed=\"1\"] li>button:first-child{margin-left:0}";

const GovBreadcrumbs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.govChange = createEvent(this, "gov-change", 7);
    this.inited = false;
    this.collapsible = false;
    this.isExpanded = false;
    this.wcagLabel = undefined;
    this.wcagLabelledBy = undefined;
    this.wcagToggleLabel = 'Zobrazit či skrýt navigaci';
    this.collapsed = true;
    this.toggleOption = false;
    this.h = govHost(this.host);
  }
  async componentDidRender() {
    this.scheduleContentVerification();
    if (canValidateWcagOnRender()) {
      await delay(500);
      await this.validateWcag();
    }
  }
  scheduleContentVerification() {
    if (this.inited)
      return;
    this.inited = true;
    requestAnimationFrame(() => {
      this.calculateWidthOfItems();
      this.inited = false;
    });
  }
  calculateWidthOfItems() {
    const hostWidth = this.host.getBoundingClientRect().width;
    let sumOfWidths = 0;
    this.host.querySelectorAll('li').forEach((li) => {
      sumOfWidths += li.getBoundingClientRect().width;
    });
    this.toggleOption = sumOfWidths > hostWidth;
  }
  render() {
    return (h(Host, { class: this.h.classes(BreadcrumbsClass.root), collapsed: this.collapsed }, h("nav", { "aria-label": this.wcagLabel, "aria-labelledby": this.wcagLabelledBy }, h("slot", null)), this.toggleOption ? (h("gov-button", { size: 'xs', variant: 'primary', type: 'base', wcagLabel: this.wcagToggleLabel, wcagPressed: !this.collapsed, wcagExpanded: !this.collapsed, "on-gov-click": () => this.collapsed = !this.collapsed }, h("gov-icon", { name: this.collapsed ? 'chevron-down' : 'chevron-up' }))) : null));
  }
  /**
   * Validate the WCAG attributes of the component
   */
  async validateWcag() {
    validateWcagLabel(this.wcagLabel, this.wcagLabelledBy, BreadcrumbsClass.root);
    validateWcagLabel(this.wcagToggleLabel, undefined, BreadcrumbsClass.root);
  }
  get host() { return getElement(this); }
};
GovBreadcrumbs.style = govBreadcrumbsCss;

export { GovBreadcrumbs as gov_breadcrumbs };

//# sourceMappingURL=gov-breadcrumbs.entry.js.map