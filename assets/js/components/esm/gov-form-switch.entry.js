import { r as registerInstance, c as createEvent, h, a as Host, g as getElement } from './index-eb59f132.js';
import { c as createID } from './string.utils-f268fc6b.js';
import { v as validateProp } from './props-a85d9c89.js';
import { g as govForm, i as FormSwitchClass, j as FormSwitchSizes } from './form-39dc6896.js';
import { g as govHost, a as toBoolAttr, t as toBoolAttrIfDefined } from './template-a0067bb6.js';
import { a as validateWcagRef, b as validateWcagLabelFor } from './wcag-7d25e12b.js';
import { c as canValidateWcagOnRender } from './win-1dbd3f5c.js';
import { d as delay } from './utils-c057a3fa.js';
import { F as Fragment } from './Fragment-8d8d54fb.js';
import './gov.log-49da0221.js';
import './sizes-6c5943b4.js';
import './variants-2b936d58.js';
import './constants-3df712e2.js';
import './constants-47d7a8bc.js';
import './constants-ebec7de8.js';

const govFormSwitchCss = ".gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-form-switch{position:relative;display:flex}.gov-form-switch__holder{display:inline-flex}.gov-form-switch__input{position:relative;z-index:1;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;flex-shrink:0}.gov-form-switch .gov-form-label__label{position:relative;z-index:1;margin-bottom:0;color:var(--gov-form-switch-color, var(--gov-color-secondary-800))}.gov-form-switch__indicator{position:absolute;top:0;left:0;border:var(--gov-form-switch-indicator-border, 0.0625rem solid var(--gov-color-secondary-500));background-color:var(--gov-form-switch-indicator-bg, var(--gov-color-secondary-300));transition:150ms linear background-color}.gov-form-switch__indicator::before{content:\"\";position:absolute;display:block;border-radius:50%;background-color:var(--gov-form-switch-indicator-circle-bg, var(--gov-color-neutral-white));transition:150ms linear left;box-shadow:var(--gov-form-switch-indicator-circle-box-shadow, 0 0.125rem 0.25rem rgba(0, 0, 0, 0.35))}.gov-form-switch__input:focus-visible~.gov-form-switch__indicator{outline:var(--gov-outline-width, 0.125rem) solid var(--gov-color-focus-base)}.gov-form-switch__input:checked+.gov-form-switch__indicator{border-color:var(--gov-form-switch-indicator-bg-checked, var(--gov-color-primary));background-color:var(--gov-form-switch-indicator-bg-checked, var(--gov-color-primary))}.gov-form-switch[disabled=\"\"],.gov-form-switch[disabled=true i],.gov-form-switch[disabled=\"1\"]{pointer-events:none}.gov-form-switch[disabled=\"\"] .gov-form-label__label,.gov-form-switch[disabled=true i] .gov-form-label__label,.gov-form-switch[disabled=\"1\"] .gov-form-label__label{color:var(--gov-form-state-color-disabled, var(--gov-color-secondary-600))}.gov-form-switch[disabled=\"\"] .gov-form-switch__indicator::before,.gov-form-switch[disabled=true i] .gov-form-switch__indicator::before,.gov-form-switch[disabled=\"1\"] .gov-form-switch__indicator::before{background:var(--gov-form-input-disabled-bg, var(--gov-color-secondary-300))}.gov-form-switch[disabled=\"\"] .gov-form-switch__input:checked+.gov-form-switch__indicator,.gov-form-switch[disabled=true i] .gov-form-switch__input:checked+.gov-form-switch__indicator,.gov-form-switch[disabled=\"1\"] .gov-form-switch__input:checked+.gov-form-switch__indicator{border-color:var(--gov-form-input-disabled-bg, var(--gov-color-primary-400));background-color:var(--gov-form-input-disabled-bg, var(--gov-color-primary-400))}.gov-form-switch[invalid=\"\"] .gov-form-label__label,.gov-form-switch[invalid=true i] .gov-form-label__label,.gov-form-switch[invalid=\"1\"] .gov-form-label__label{color:var(--gov-form-state-color-error, var(--gov-color-error))}.gov-form-switch[invalid=\"\"] .gov-form-switch__indicator,.gov-form-switch[invalid=true i] .gov-form-switch__indicator,.gov-form-switch[invalid=\"1\"] .gov-form-switch__indicator{border-color:var(--gov-form-state-color-error, var(--gov-color-error))}.gov-form-switch[invalid=\"\"] .gov-form-switch__input:checked+.gov-form-switch__indicator,.gov-form-switch[invalid=true i] .gov-form-switch__input:checked+.gov-form-switch__indicator,.gov-form-switch[invalid=\"1\"] .gov-form-switch__input:checked+.gov-form-switch__indicator{background-color:var(--gov-form-state-color-error, var(--gov-color-error))}.gov-form-switch[size=xs] .gov-form-label__label{font-weight:var(--gov-text-xs-font-weight);font-size:var(--gov-text-xs-font-size);line-height:var(--gov-text-xs-line-height);letter-spacing:var(--gov-text-xs-letter-spacing);margin-bottom:0}.gov-form-switch[size=xs] .gov-form-switch__holder{gap:var(--gov-form-switch-xs-gap, 0.75rem)}.gov-form-switch[size=xs] .gov-form-switch__input{width:calc(var(--gov-form-switch-xs-indicator-height, 1.25rem) * 1.6666666667);height:var(--gov-form-switch-xs-indicator-height, 1.25rem)}.gov-form-switch[size=xs] .gov-form-switch__indicator{display:block;width:calc(var(--gov-form-switch-xs-indicator-height, 1.25rem) * 1.6666666667);height:var(--gov-form-switch-xs-indicator-height, 1.25rem);border-radius:calc(var(--gov-form-switch-xs-indicator-height, 1.25rem) * 0.5)}.gov-form-switch[size=xs] .gov-form-switch__indicator::before{top:calc(var(--gov-form-switch-xs-toggle-offset, 0.051875rem) - 0.0625rem);left:calc(var(--gov-form-switch-xs-toggle-offset, 0.051875rem) - 0.0625rem);width:calc(var(--gov-form-switch-xs-indicator-height, 1.25rem) - 2 * var(--gov-form-switch-xs-toggle-offset, 0.051875rem));height:calc(var(--gov-form-switch-xs-indicator-height, 1.25rem) - 2 * var(--gov-form-switch-xs-toggle-offset, 0.051875rem))}.gov-form-switch[size=xs] .gov-form-switch__input[aria-checked]+.gov-form-switch__indicator::before{left:calc(var(--gov-form-switch-xs-indicator-height, 1.25rem) * 1.6666666667 - var(--gov-form-switch-xs-indicator-height, 1.25rem) + var(--gov-form-switch-xs-toggle-offset, 0.051875rem) - 0.0625rem)}.gov-form-switch[size=xs] label{display:inline-flex}.gov-form-switch[size=xs] label .gov-form-switch__input{width:calc(var(--gov-form-switch-xs-indicator-height, 1.25rem) * 1.6666666667)}.gov-form-switch[size=s] .gov-form-label__label{font-weight:var(--gov-text-s-font-weight);font-size:var(--gov-text-s-font-size);line-height:var(--gov-text-s-line-height);letter-spacing:var(--gov-text-s-letter-spacing);margin-bottom:0}.gov-form-switch[size=s] .gov-form-switch__holder{gap:var(--gov-form-switch-s-gap, 0.75rem)}.gov-form-switch[size=s] .gov-form-switch__input{width:calc(var(--gov-form-switch-s-indicator-height, 1.375rem) * 1.6666666667);height:var(--gov-form-switch-s-indicator-height, 1.375rem)}.gov-form-switch[size=s] .gov-form-switch__indicator{display:block;width:calc(var(--gov-form-switch-s-indicator-height, 1.375rem) * 1.6666666667);height:var(--gov-form-switch-s-indicator-height, 1.375rem);border-radius:calc(var(--gov-form-switch-s-indicator-height, 1.375rem) * 0.5)}.gov-form-switch[size=s] .gov-form-switch__indicator::before{top:calc(var(--gov-form-switch-s-toggle-offset, 0.0575rem) - 0.0625rem);left:calc(var(--gov-form-switch-s-toggle-offset, 0.0575rem) - 0.0625rem);width:calc(var(--gov-form-switch-s-indicator-height, 1.375rem) - 2 * var(--gov-form-switch-s-toggle-offset, 0.0575rem));height:calc(var(--gov-form-switch-s-indicator-height, 1.375rem) - 2 * var(--gov-form-switch-s-toggle-offset, 0.0575rem))}.gov-form-switch[size=s] .gov-form-switch__input[aria-checked]+.gov-form-switch__indicator::before{left:calc(var(--gov-form-switch-s-indicator-height, 1.375rem) * 1.6666666667 - var(--gov-form-switch-s-indicator-height, 1.375rem) + var(--gov-form-switch-s-toggle-offset, 0.0575rem) - 0.0625rem)}.gov-form-switch[size=s] label{display:inline-flex}.gov-form-switch[size=s] label .gov-form-switch__input{width:calc(var(--gov-form-switch-s-indicator-height, 1.375rem) * 1.6666666667)}.gov-form-switch[size=m] .gov-form-label__label{font-weight:var(--gov-text-m-font-weight);font-size:var(--gov-text-m-font-size);line-height:var(--gov-text-m-line-height);letter-spacing:var(--gov-text-m-letter-spacing);margin-bottom:0}.gov-form-switch[size=m] .gov-form-switch__holder{gap:var(--gov-form-switch-m-gap, 1rem)}.gov-form-switch[size=m] .gov-form-switch__input{width:calc(var(--gov-form-switch-m-indicator-height, 1.5rem) * 1.6666666667);height:var(--gov-form-switch-m-indicator-height, 1.5rem)}.gov-form-switch[size=m] .gov-form-switch__indicator{display:block;width:calc(var(--gov-form-switch-m-indicator-height, 1.5rem) * 1.6666666667);height:var(--gov-form-switch-m-indicator-height, 1.5rem);border-radius:calc(var(--gov-form-switch-m-indicator-height, 1.5rem) * 0.5)}.gov-form-switch[size=m] .gov-form-switch__indicator::before{top:calc(var(--gov-form-switch-m-toggle-offset, 0.0625rem) - 0.0625rem);left:calc(var(--gov-form-switch-m-toggle-offset, 0.0625rem) - 0.0625rem);width:calc(var(--gov-form-switch-m-indicator-height, 1.5rem) - 2 * var(--gov-form-switch-m-toggle-offset, 0.0625rem));height:calc(var(--gov-form-switch-m-indicator-height, 1.5rem) - 2 * var(--gov-form-switch-m-toggle-offset, 0.0625rem))}.gov-form-switch[size=m] .gov-form-switch__input[aria-checked]+.gov-form-switch__indicator::before{left:calc(var(--gov-form-switch-m-indicator-height, 1.5rem) * 1.6666666667 - var(--gov-form-switch-m-indicator-height, 1.5rem) + var(--gov-form-switch-m-toggle-offset, 0.0625rem) - 0.0625rem)}.gov-form-switch[size=m] label{display:inline-flex}.gov-form-switch[size=m] label .gov-form-switch__input{width:calc(var(--gov-form-switch-m-indicator-height, 1.5rem) * 1.6666666667)}.gov-form-switch[size=l] .gov-form-label__label{font-weight:var(--gov-text-l-font-weight);font-size:var(--gov-text-l-font-size);line-height:var(--gov-text-l-line-height);letter-spacing:var(--gov-text-l-letter-spacing);margin-bottom:0}.gov-form-switch[size=l] .gov-form-switch__holder{gap:var(--gov-form-switch-l-gap, 1rem)}.gov-form-switch[size=l] .gov-form-switch__input{width:calc(var(--gov-form-switch-l-indicator-height, 2rem) * 1.6666666667);height:var(--gov-form-switch-l-indicator-height, 2rem)}.gov-form-switch[size=l] .gov-form-switch__indicator{display:block;width:calc(var(--gov-form-switch-l-indicator-height, 2rem) * 1.6666666667);height:var(--gov-form-switch-l-indicator-height, 2rem);border-radius:calc(var(--gov-form-switch-l-indicator-height, 2rem) * 0.5)}.gov-form-switch[size=l] .gov-form-switch__indicator::before{top:calc(var(--gov-form-switch-l-toggle-offset, 0.083125rem) - 0.0625rem);left:calc(var(--gov-form-switch-l-toggle-offset, 0.083125rem) - 0.0625rem);width:calc(var(--gov-form-switch-l-indicator-height, 2rem) - 2 * var(--gov-form-switch-l-toggle-offset, 0.083125rem));height:calc(var(--gov-form-switch-l-indicator-height, 2rem) - 2 * var(--gov-form-switch-l-toggle-offset, 0.083125rem))}.gov-form-switch[size=l] .gov-form-switch__input[aria-checked]+.gov-form-switch__indicator::before{left:calc(var(--gov-form-switch-l-indicator-height, 2rem) * 1.6666666667 - var(--gov-form-switch-l-indicator-height, 2rem) + var(--gov-form-switch-l-toggle-offset, 0.083125rem) - 0.0625rem)}.gov-form-switch[size=l] label{display:inline-flex}.gov-form-switch[size=l] label .gov-form-switch__input{width:calc(var(--gov-form-switch-l-indicator-height, 2rem) * 1.6666666667)}";

const GovFormSwitch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.govFocus = createEvent(this, "gov-focus", 7);
    this.govBlur = createEvent(this, "gov-blur", 7);
    this.govChange = createEvent(this, "gov-change", 7);
    this.value = undefined;
    this.noLabel = false;
    this.checked = false;
    this.required = false;
    this.disabled = false;
    this.name = undefined;
    this.size = "m";
    this.identifier = undefined;
    this.invalid = undefined;
    this.wcagDescribedBy = undefined;
    this.wcagLabelledBy = undefined;
    this.checkboxId = createID("GovCheckbox");
    this.h = govHost(this.host);
    this.f = govForm(this.h);
  }
  validateSize(newValue) {
    validateProp(FormSwitchSizes, newValue, FormSwitchClass.root);
  }
  watchDisabled() {
    this.passControlAttrs();
  }
  passControlAttrs() {
    this.f.passAttrToControl("size", this.size);
    this.f.passAttrToControl("invalid", toBoolAttr(this.invalid));
    this.f.passAttrToControl("type", "switch");
  }
  componentWillLoad() {
    this.passControlAttrs();
  }
  async componentDidRender() {
    this.f.passAttrToLabel("identifier", this.identifier || this.checkboxId);
    this.f.passAttrToLabel("required", String(this.required));
    if (canValidateWcagOnRender()) {
      await delay(500);
      await this.validateWcag();
    }
  }
  render() {
    const wrapCheckbox = (children) => {
      if (this.noLabel) {
        return (h("label", null, children));
      }
      return children;
    };
    return (h(Host, { class: this.h.classes(FormSwitchClass.root), checked: this.checked, size: this.size, invalid: toBoolAttrIfDefined(this.invalid) }, h("div", { class: FormSwitchClass.holder }, wrapCheckbox(h(Fragment, null, h("input", { class: FormSwitchClass.input, id: this.identifier || this.checkboxId, type: "checkbox", value: this.value, name: this.name, disabled: this.disabled, checked: this.checked, onClick: this.onClickHandler.bind(this), onChange: this.onChangeHandler.bind(this), onFocus: this.onFocusHandler.bind(this), onBlur: this.onBlurHandler.bind(this), ref: el => (this.inputRef = el), required: this.required, "aria-checked": this.checked, "aria-required": toBoolAttrIfDefined(this.required), "aria-invalid": toBoolAttrIfDefined(this.invalid), "aria-describedby": this.wcagDescribedBy, "aria-labelledby": this.wcagLabelledBy, "aria-disabled": toBoolAttrIfDefined(this.disabled) }), h("span", { class: FormSwitchClass.indicator }), h("slot", { name: "label" }))))));
  }
  onClickHandler(e) {
    e.stopPropagation();
  }
  onFocusHandler(e) {
    e.stopPropagation();
    this.govFocus.emit({
      component: FormSwitchClass.root,
      checked: this.checked,
      value: this.value,
      originalEvent: e,
    });
  }
  onBlurHandler(e) {
    e.stopPropagation();
    this.govBlur.emit({
      component: FormSwitchClass.root,
      checked: this.checked,
      value: this.value,
      originalEvent: e,
    });
  }
  onChangeHandler(e) {
    this.checked = e.target.checked;
    e.stopPropagation();
    this.govChange.emit({
      component: FormSwitchClass.root,
      checked: this.checked,
      value: this.value,
      originalEvent: e,
    });
  }
  /**
   * Returns the reference of the native element
   */
  async getRef() {
    return this.inputRef;
  }
  /**
   * Validate the WCAG attributes of the component
   */
  async validateWcag() {
    validateWcagRef(this.wcagDescribedBy, "wcag-described-by", FormSwitchClass.root);
    validateWcagRef(this.wcagLabelledBy, "wcag-labelled-by", FormSwitchClass.root);
    validateWcagLabelFor(this.identifier || this.checkboxId, this.wcagLabelledBy, FormSwitchClass.root);
  }
  get host() { return getElement(this); }
  static get watchers() { return {
    "size": ["validateSize", "watchDisabled"],
    "disabled": ["watchDisabled"],
    "invalid": ["watchDisabled"]
  }; }
};
GovFormSwitch.style = govFormSwitchCss;

export { GovFormSwitch as gov_form_switch };

//# sourceMappingURL=gov-form-switch.entry.js.map