import { r as registerInstance, h, a as Host, g as getElement } from './index-eb59f132.js';
import { T as TooltipVariant, a as TooltipSize, b as TooltipContentClass } from './constants-887c5391.js';
import { a as toBoolAttr } from './template-a0067bb6.js';
import './variants-2b936d58.js';
import './sizes-6c5943b4.js';
import './utils-c057a3fa.js';

const govTooltipContentCss = ".gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-tooltip-content{z-index:51;font-weight:var(--gov-text-m-font-weight);font-size:var(--gov-text-m-font-size);line-height:var(--gov-text-m-line-height);letter-spacing:var(--gov-text-m-letter-spacing);position:absolute;display:none;width:-moz-max-content;width:max-content;max-width:var(--gov-tooltip-content-max-width, 21rem);padding:1rem;border-radius:0.1875rem;background-color:var(--gov-tooltip-content-bg-color, var(--gov-color-primary-300));color:var(--gov-tooltip-content-text-color, var(--gov-color-secondary));letter-spacing:0.0125rem;visibility:hidden;opacity:0;transition:opacity 0.2s ease-in}.gov-tooltip-content::before{content:\"\";position:absolute;display:block;width:0;height:0;border:0.625rem solid transparent}.gov-tooltip-content gov-button{position:absolute;right:0;top:0}.gov-tooltip-content[persist=\"\"],.gov-tooltip-content[persist=true i],.gov-tooltip-content[persist=\"1\"]{padding-right:3.25rem}.gov-tooltip-content[is-visible=\"\"],.gov-tooltip-content[is-visible=true i],.gov-tooltip-content[is-visible=\"1\"]{display:block;opacity:1}.gov-tooltip-content[variant=secondary]{--gov-tooltip-content-bg-color:var(--gov-tooltip-secondary-bg-color, var(--gov-color-secondary));--gov-tooltip-content-text-color:var(--gov-tooltip-secondary-text-color, var(--gov-color-neutral-white))}.gov-tooltip-content[variant=secondary][inverse=\"\"],.gov-tooltip-content[variant=secondary][inverse=true i],.gov-tooltip-content[variant=secondary][inverse=\"1\"]{--gov-tooltip-content-bg-color:var(--gov-color-neutral-white);--gov-tooltip-content-text-color:var(--gov-tooltip-secondary-text-color-inverse, var(--gov-color-secondary))}.gov-tooltip-content[variant=primary]{--gov-tooltip-content-bg-color:var(--gov-tooltip-primary-bg-color, var(--gov-color-primary-300));--gov-tooltip-content-text-color:var(--gov-tooltip-primary-text-color, var(--gov-color-secondary))}.gov-tooltip-content[variant=primary][inverse=\"\"],.gov-tooltip-content[variant=primary][inverse=true i],.gov-tooltip-content[variant=primary][inverse=\"1\"]{--gov-tooltip-content-bg-color:var(--gov-color-neutral-white);--gov-tooltip-content-text-color:var(--gov-tooltip-primary-text-color-inverse, var(--gov-color-primary))}.gov-tooltip-content[size=s]{--gov-tooltip-content-padding:var(--gov-tooltip-s-padding, 0.5rem);--gov-tooltip-content-arrow-size:var(--gov-tooltip-s-arrow-size, 0.4375rem);--gov-tooltip-content-letter-spacing:var(--gov-tooltip-s-letter-spacing, 0.0125rem);font-weight:var(--gov-text-s-font-weight);font-size:var(--gov-text-s-font-size);line-height:var(--gov-text-s-line-height);letter-spacing:var(--gov-text-s-letter-spacing)}.gov-tooltip-content[size=s][persist=true i]{padding-right:var(--gov-tooltip-s-persist-space, 3rem)}.gov-tooltip-content[size=l]{--gov-tooltip-content-padding:var(--gov-tooltip-l-padding, 1rem);--gov-tooltip-content-arrow-size:var(--gov-tooltip-l-arrow-size, 0.875rem);--gov-tooltip-content-letter-spacing:var(--gov-tooltip-l-letter-spacing, 0.002rem);font-weight:var(--gov-text-xl-font-weight);font-size:var(--gov-text-xl-font-size);line-height:var(--gov-text-xl-line-height);letter-spacing:var(--gov-text-xl-letter-spacing)}.gov-tooltip-content[size=l][persist=true i]{padding-right:var(--gov-tooltip-s-persist-space, 4rem)}.gov-tooltip-content[position=top]::before{left:50%;transform:translateX(-50%)}.gov-tooltip-content[position=top]::before{top:100%;border-bottom-width:0;border-top-color:var(--gov-tooltip-content-bg-color, var(--gov-color-primary-300))}.gov-tooltip-content[position=bottom]::before{left:50%;transform:translateX(-50%)}.gov-tooltip-content[position=bottom]::before{bottom:100%;border-top-width:0;border-bottom-color:var(--gov-tooltip-content-bg-color, var(--gov-color-primary-300))}.gov-tooltip-content[position=left]::before{top:50%;transform:translateY(-50%)}.gov-tooltip-content[position=left]::before{left:100%;border-right-width:0;border-left-color:var(--gov-tooltip-content-bg-color, var(--gov-color-primary-300))}.gov-tooltip-content[position=right]::before{top:50%;transform:translateY(-50%)}.gov-tooltip-content[position=right]::before{right:100%;border-left-width:0;border-right-color:var(--gov-tooltip-content-bg-color, var(--gov-color-primary-300))}";

const GovTooltipContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = TooltipVariant.PRIMARY;
    this.size = TooltipSize._M;
    this.persist = false;
    this.isVisible = false;
    this.parentId = null;
  }
  visibleContent(newValue) {
    clearTimeout(this.timeout);
    if (newValue === false) {
      this.timeout = setTimeout(() => {
        this.host.style.visibility = "hidden";
      }, 250);
    }
    else {
      this.host.style.visibility = "visible";
    }
  }
  hideContent() {
    this.isVisible = false;
    this.persist = false;
    const parentEl = document.getElementById(this.parentId);
    if (parentEl) {
      parentEl.hide().catch();
    }
  }
  render() {
    return (h(Host, { class: TooltipContentClass.root, role: "tooltip", hidden: !this.isVisible, "aria-hidden": !toBoolAttr(this.isVisible), "is-visible": this.isVisible }, h("slot", null), this.persist ? (h("gov-button", { "on-gov-click": this.hideContent.bind(this), variant: this.variant, size: this.size, type: "base", inverse: this.variant === TooltipVariant.SECONDARY }, h("gov-icon", { slot: "left-icon", name: "x-lg", type: "basic" }))) : null));
  }
  get host() { return getElement(this); }
  static get watchers() { return {
    "isVisible": ["visibleContent"]
  }; }
};
GovTooltipContent.style = govTooltipContentCss;

export { GovTooltipContent as gov_tooltip_content };

//# sourceMappingURL=gov-tooltip-content.entry.js.map