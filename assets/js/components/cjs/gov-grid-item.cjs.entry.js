'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7b6bba34.js');
const constants = require('./constants-ded92f8a.js');
const template = require('./template-9534c584.js');

const govGridItemCss = ".gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-grid-item{border:0 solid transparent;-o-border-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E\");border-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E\")}.gov-grid-item[size=\"1/12\"]{width:8.3333333333%}.gov-grid-item[size=\"2/12\"]{width:16.6666666667%}.gov-grid-item[size=\"3/12\"]{width:25%}.gov-grid-item[size=\"4/12\"]{width:33.3333333333%}.gov-grid-item[size=\"5/12\"]{width:41.6666666667%}.gov-grid-item[size=\"6/12\"]{width:50%}.gov-grid-item[size=\"7/12\"]{width:58.3333333333%}.gov-grid-item[size=\"8/12\"]{width:66.6666666667%}.gov-grid-item[size=\"9/12\"]{width:75%}.gov-grid-item[size=\"10/12\"]{width:83.3333333333%}.gov-grid-item[size=\"11/12\"]{width:91.6666666667%}.gov-grid-item[size=\"12/12\"]{width:100%}@media (min-width: 30em){.gov-grid-item[size-sm=\"1/12\"]{width:8.3333333333%}.gov-grid-item[size-sm=\"2/12\"]{width:16.6666666667%}.gov-grid-item[size-sm=\"3/12\"]{width:25%}.gov-grid-item[size-sm=\"4/12\"]{width:33.3333333333%}.gov-grid-item[size-sm=\"5/12\"]{width:41.6666666667%}.gov-grid-item[size-sm=\"6/12\"]{width:50%}.gov-grid-item[size-sm=\"7/12\"]{width:58.3333333333%}.gov-grid-item[size-sm=\"8/12\"]{width:66.6666666667%}.gov-grid-item[size-sm=\"9/12\"]{width:75%}.gov-grid-item[size-sm=\"10/12\"]{width:83.3333333333%}.gov-grid-item[size-sm=\"11/12\"]{width:91.6666666667%}.gov-grid-item[size-sm=\"12/12\"]{width:100%}}@media (min-width: 48em){.gov-grid-item[size-md=\"1/12\"]{width:8.3333333333%}.gov-grid-item[size-md=\"2/12\"]{width:16.6666666667%}.gov-grid-item[size-md=\"3/12\"]{width:25%}.gov-grid-item[size-md=\"4/12\"]{width:33.3333333333%}.gov-grid-item[size-md=\"5/12\"]{width:41.6666666667%}.gov-grid-item[size-md=\"6/12\"]{width:50%}.gov-grid-item[size-md=\"7/12\"]{width:58.3333333333%}.gov-grid-item[size-md=\"8/12\"]{width:66.6666666667%}.gov-grid-item[size-md=\"9/12\"]{width:75%}.gov-grid-item[size-md=\"10/12\"]{width:83.3333333333%}.gov-grid-item[size-md=\"11/12\"]{width:91.6666666667%}.gov-grid-item[size-md=\"12/12\"]{width:100%}}@media (min-width: 64em){.gov-grid-item[size-lg=\"1/12\"]{width:8.3333333333%}.gov-grid-item[size-lg=\"2/12\"]{width:16.6666666667%}.gov-grid-item[size-lg=\"3/12\"]{width:25%}.gov-grid-item[size-lg=\"4/12\"]{width:33.3333333333%}.gov-grid-item[size-lg=\"5/12\"]{width:41.6666666667%}.gov-grid-item[size-lg=\"6/12\"]{width:50%}.gov-grid-item[size-lg=\"7/12\"]{width:58.3333333333%}.gov-grid-item[size-lg=\"8/12\"]{width:66.6666666667%}.gov-grid-item[size-lg=\"9/12\"]{width:75%}.gov-grid-item[size-lg=\"10/12\"]{width:83.3333333333%}.gov-grid-item[size-lg=\"11/12\"]{width:91.6666666667%}.gov-grid-item[size-lg=\"12/12\"]{width:100%}}@media (min-width: 75em){.gov-grid-item[size-xl=\"1/12\"]{width:8.3333333333%}.gov-grid-item[size-xl=\"2/12\"]{width:16.6666666667%}.gov-grid-item[size-xl=\"3/12\"]{width:25%}.gov-grid-item[size-xl=\"4/12\"]{width:33.3333333333%}.gov-grid-item[size-xl=\"5/12\"]{width:41.6666666667%}.gov-grid-item[size-xl=\"6/12\"]{width:50%}.gov-grid-item[size-xl=\"7/12\"]{width:58.3333333333%}.gov-grid-item[size-xl=\"8/12\"]{width:66.6666666667%}.gov-grid-item[size-xl=\"9/12\"]{width:75%}.gov-grid-item[size-xl=\"10/12\"]{width:83.3333333333%}.gov-grid-item[size-xl=\"11/12\"]{width:91.6666666667%}.gov-grid-item[size-xl=\"12/12\"]{width:100%}}";

const GovGridItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.size = '12/12';
    this.sizeSm = undefined;
    this.sizeMd = undefined;
    this.sizeLg = undefined;
    this.sizeXl = undefined;
    this.h = template.govHost(this.host);
  }
  render() {
    return (index.h(index.Host, { class: this.h.classes(constants.GridItemClass.root), role: "listitem", size: this.size, "size-sm": this.sizeSm, "size-md": this.sizeMd, "size-lg": this.sizeLg, "size-xl": this.sizeXl }, index.h("slot", null)));
  }
  get host() { return index.getElement(this); }
};
GovGridItem.style = govGridItemCss;

exports.gov_grid_item = GovGridItem;

//# sourceMappingURL=gov-grid-item.cjs.entry.js.map