import { h, Host } from "@stencil/core";
import { BreadcrumbsClass } from "./constants";
import { validateWcagLabel } from "../../helpers/Validate/wcag";
import { canValidateWcagOnRender } from "../../helpers/Dom/win";
import { delay } from "../../utils/utils";
import { govHost } from "../../helpers/Dom/template";
export class GovBreadcrumbs {
  constructor() {
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
  static get is() { return "gov-breadcrumbs"; }
  static get originalStyleUrls() {
    return {
      "$": ["gov-breadcrumbs.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["gov-breadcrumbs.css"]
    };
  }
  static get properties() {
    return {
      "collapsible": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Defines whether the components can be collapsible when element doesn't fit in one row."
        },
        "attribute": "collapsible",
        "reflect": false,
        "defaultValue": "false"
      },
      "isExpanded": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Defines whether the breadcrumbs are open or closed by button"
        },
        "attribute": "is-expanded",
        "reflect": false,
        "defaultValue": "false"
      },
      "wcagLabel": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Adds accessible label for the pagination that is only shown for screen readers."
        },
        "attribute": "wcag-label",
        "reflect": false
      },
      "wcagLabelledBy": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Indicates the id of a component that labels the pagination."
        },
        "attribute": "wcag-labeled-by",
        "reflect": false
      },
      "wcagToggleLabel": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Adds an accessible label to display the full breadcrumb navigation that only screen readers can see."
        },
        "attribute": "wcag-toggle-label",
        "reflect": false,
        "defaultValue": "'Zobrazit \u010Di skr\u00FDt navigaci'"
      }
    };
  }
  static get states() {
    return {
      "collapsed": {},
      "toggleOption": {}
    };
  }
  static get events() {
    return [{
        "method": "govChange",
        "name": "gov-change",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Called when the Breadcrumbs state changes"
        },
        "complexType": {
          "original": "GovBreadcrumbsChangeEvent",
          "resolved": "GovBreadcrumbsChangeEvent",
          "references": {
            "GovBreadcrumbsChangeEvent": {
              "location": "import",
              "path": "./gov-breadcrumbs.d",
              "id": "../../../packages/core/src/components/gov-breadcrumbs/gov-breadcrumbs.d.tsx::GovBreadcrumbsChangeEvent"
            }
          }
        }
      }];
  }
  static get methods() {
    return {
      "validateWcag": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global",
              "id": "global::Promise"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Validate the WCAG attributes of the component",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "host"; }
}
//# sourceMappingURL=gov-breadcrumbs.js.map
