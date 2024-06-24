'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7b6bba34.js');

const FormPasswordPowerClass = {
  root: 'gov-form-password-power',
  bar: 'gov-form-password-power__bar',
  text: 'gov-form-password-power__text',
};

const govFormPasswordPowerCss = ".gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-form-password-power{display:flex;align-items:center;width:100%;gap:1.5rem;height:1.5rem}.gov-form-password-power__bar{display:flex;gap:0.25rem;width:100%}.gov-form-password-power__bar span{display:inline-block;width:100%;height:var(--gov-form-password-power-height, 0.25rem);border-radius:var(--gov-form-password-power-radius, 0.125rem);background-color:var(--gov-form-password-power-color, var(--gov-color-secondary-600))}.gov-form-password-power__text{font-weight:var(--gov-text-s-font-weight);font-size:var(--gov-text-s-font-size);line-height:var(--gov-text-s-line-height);letter-spacing:var(--gov-text-s-letter-spacing);text-align:right;flex-basis:3.5rem}.gov-form-password-power[power=\"1\"]{color:var(--gov-form-password-power-color-weak, var(--gov-color-error))}.gov-form-password-power[power=\"1\"] .gov-form-password-power__bar span:nth-child(1){background-color:var(--gov-form-password-power-color-weak, var(--gov-color-error))}.gov-form-password-power[power=\"2\"]{color:var(--gov-form-password-power-color-medium, var(--gov-color-warning-500))}.gov-form-password-power[power=\"2\"] .gov-form-password-power__bar span:nth-child(1),.gov-form-password-power[power=\"2\"] .gov-form-password-power__bar span:nth-child(2){background-color:var(--gov-form-password-power-color-medium, var(--gov-color-warning-500))}.gov-form-password-power[power=\"3\"]{color:var(--gov-form-password-power-color-strong, var(--gov-color-success-500))}.gov-form-password-power[power=\"3\"] .gov-form-password-power__bar span{background-color:var(--gov-form-password-power-color-strong, var(--gov-color-success-500))}";

const GovFormPasswordPower = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.power = undefined;
  }
  render() {
    return (index.h(index.Host, { class: FormPasswordPowerClass.root }, index.h("span", { class: FormPasswordPowerClass.bar }, index.h("span", null), index.h("span", null), index.h("span", null)), index.h("span", { class: FormPasswordPowerClass.text }, index.h("slot", null))));
  }
};
GovFormPasswordPower.style = govFormPasswordPowerCss;

exports.gov_form_password_power = GovFormPasswordPower;

//# sourceMappingURL=gov-form-password-power.cjs.entry.js.map