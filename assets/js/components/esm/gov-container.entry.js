import { r as registerInstance, h, a as Host, g as getElement } from './index-eb59f132.js';
import { g as govHost, s as slottedChildren } from './template-a0067bb6.js';

const ContainerClass = {
  root: 'gov-container',
};

const govContainerCss = ".gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-container{display:block;width:100%;max-width:calc(var(--gov-container-width, 73.75rem) + 2 * var(--gov-container-padding, 2.5rem));margin-right:auto;margin-left:auto;padding-right:var(--gov-container-padding-mobile, 1.25rem);padding-left:var(--gov-container-padding-mobile, 1.25rem)}@media (min-width: 48em){.gov-container{padding-right:var(--gov-container-padding, 2.5rem);padding-left:var(--gov-container-padding, 2.5rem)}}";

const GovContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.h = govHost(this.host);
  }
  render() {
    return (h(Host, { class: this.h.classes(ContainerClass.root) }, h("slot", null)));
  }
  /**
   * Returns slotted children
   *
   * @return {Promise<Node[]>}
   */
  async slottedChildren() {
    return Promise.resolve(slottedChildren(this.host));
  }
  get host() { return getElement(this); }
};
GovContainer.style = govContainerCss;

export { GovContainer as gov_container };

//# sourceMappingURL=gov-container.entry.js.map