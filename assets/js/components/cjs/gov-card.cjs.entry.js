'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7b6bba34.js');
const template = require('./template-9534c584.js');
const string_utils = require('./string.utils-0f08c48c.js');
const gov_log = require('./gov.log-b842920d.js');
const wcag = require('./wcag-e6257f27.js');
const win = require('./win-5521073d.js');
const utils = require('./utils-c9b1bba3.js');

const CardClass = {
  root: 'gov-card',
  header: 'gov-card__header',
  title: 'gov-card__title',
  inner: 'gov-card__inner',
  img: 'gov-card__img',
  main: 'gov-card__main',
  content: 'gov-card__content',
  icon: 'gov-card__icon',
  btns: 'gov-card__btns',
  footer: 'gov-card__footer',
  arrow: 'gov-card__arrow',
};

const govCardCss = ".gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-card{position:relative;display:flex;width:100%;flex-direction:column;border:var(--gov-card-border-width, 0.0625rem solid var(--gov-color-secondary-500));border-radius:var(--gov-border-radius, 0.1875rem);background:var(--gov-card-bg, var(--gov-color-neutral-white));overflow:hidden}.gov-card__header{gap:1.75rem;width:100%;padding:1.5rem;border-bottom:var(--gov-card-border-width, 0.0625rem solid var(--gov-color-secondary-500));border-radius:0;text-align:left;text-transform:none;transition:background-color 150ms ease-in-out}.gov-card__arrow{flex:0 0 auto;width:1rem;height:1rem;color:var(--gov-card-arrow-color, var(--gov-color-primary))}.gov-card__title{margin:0;padding:0;font-family:var(--gov-font-family, \"Roboto\", sans-serif);font-weight:400;box-sizing:border-box;font-weight:var(--gov-text-xl-font-weight);font-size:var(--gov-text-xl-font-size);line-height:var(--gov-text-xl-line-height);letter-spacing:var(--gov-text-xl-letter-spacing);color:var(--gov-card-title-color, var(--gov-color-secondary-800));font-weight:700}.gov-card__img{width:100%;margin:0;line-height:1}.gov-card__img img{width:100%;height:auto}.gov-card__inner{display:flex;flex:1 1 auto;flex-direction:column}.gov-card__inner[aria-hidden=\"\"],.gov-card__inner[aria-hidden=true i],.gov-card__inner[aria-hidden=\"1\"]{display:none}.gov-card__main{display:flex;gap:16px 24px;flex:1 1 auto;flex-direction:column;padding:1.5rem}.gov-card__icon{flex:0 0 auto;width:2.5rem;height:2.5rem;color:var(--gov-card-icon-color, var(--gov-color-primary))}.gov-card__btns{display:flex;gap:1rem;flex:0 0 auto;flex-wrap:wrap}.gov-card__content>*:last-child{margin-bottom:0}.gov-card__footer{padding:1rem 1.5rem;background:var(--gov-card-footer-bg, var(--gov-color-primary-100))}.gov-card__footer>*:last-child{margin-bottom:0}.gov-card__footer p{font-weight:var(--gov-text-s-font-weight);font-size:var(--gov-text-s-font-size);line-height:var(--gov-text-s-line-height);letter-spacing:var(--gov-text-s-letter-spacing)}.gov-card[is-expanded=\"\"],.gov-card[is-expanded=true i],.gov-card[is-expanded=\"1\"]{height:100%}.gov-card[collapsible=\"\"] .gov-card__header,.gov-card[collapsible=true i] .gov-card__header,.gov-card[collapsible=\"1\"] .gov-card__header{display:inline-flex;vertical-align:middle;justify-content:center;align-items:center;border:0;background-color:transparent;text-align:center;text-decoration:none;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;justify-content:space-between;text-align:left}.gov-card[collapsible=\"\"] .gov-card__header:focus,.gov-card[collapsible=true i] .gov-card__header:focus,.gov-card[collapsible=\"1\"] .gov-card__header:focus{outline:none}.gov-card[collapsible=\"\"] .gov-card__header:focus,.gov-card[collapsible=true i] .gov-card__header:focus,.gov-card[collapsible=\"1\"] .gov-card__header:focus{outline:none}.gov-card[collapsible=\"\"] .gov-card__header:focus-visible,.gov-card[collapsible=true i] .gov-card__header:focus-visible,.gov-card[collapsible=\"1\"] .gov-card__header:focus-visible{border-radius:var(--gov-border-radius, 0.1875rem);outline:var(--gov-outline-width, 0.125rem) solid var(--gov-color-focus-base);outline-offset:-0.125rem}@media not all and (pointer: coarse){.gov-card[collapsible=\"\"] .gov-card__header:hover,.gov-card[collapsible=true i] .gov-card__header:hover,.gov-card[collapsible=\"1\"] .gov-card__header:hover{background:var(--gov-card-header-hover-bg, var(--gov-color-primary-100))}}.gov-card[collapsible=\"\"][is-expanded=\"\"] .gov-card__header,.gov-card[collapsible=\"\"][is-expanded=true i] .gov-card__header,.gov-card[collapsible=\"\"][is-expanded=\"1\"] .gov-card__header,.gov-card[collapsible=true i][is-expanded=\"\"] .gov-card__header,.gov-card[collapsible=true i][is-expanded=true i] .gov-card__header,.gov-card[collapsible=true i][is-expanded=\"1\"] .gov-card__header,.gov-card[collapsible=\"1\"][is-expanded=\"\"] .gov-card__header,.gov-card[collapsible=\"1\"][is-expanded=true i] .gov-card__header,.gov-card[collapsible=\"1\"][is-expanded=\"1\"] .gov-card__header{border-bottom:var(--gov-card-border-width, 0.0625rem solid var(--gov-color-secondary-500))}.gov-card[collapsible=\"\"][is-expanded=\"\"] .gov-card__arrow,.gov-card[collapsible=\"\"][is-expanded=true i] .gov-card__arrow,.gov-card[collapsible=\"\"][is-expanded=\"1\"] .gov-card__arrow,.gov-card[collapsible=true i][is-expanded=\"\"] .gov-card__arrow,.gov-card[collapsible=true i][is-expanded=true i] .gov-card__arrow,.gov-card[collapsible=true i][is-expanded=\"1\"] .gov-card__arrow,.gov-card[collapsible=\"1\"][is-expanded=\"\"] .gov-card__arrow,.gov-card[collapsible=\"1\"][is-expanded=true i] .gov-card__arrow,.gov-card[collapsible=\"1\"][is-expanded=\"1\"] .gov-card__arrow{transform:scale(-1)}@media (min-width: 30em){.gov-card[promotion=\"\"] .gov-card__main,.gov-card[promotion=true i] .gov-card__main,.gov-card[promotion=\"1\"] .gov-card__main{flex-direction:row;padding:2rem}.gov-card[promotion=\"\"] .gov-card__icon,.gov-card[promotion=true i] .gov-card__icon,.gov-card[promotion=\"1\"] .gov-card__icon{width:3rem;height:3rem}.gov-card[promotion=\"\"] .gov-card__btns,.gov-card[promotion=true i] .gov-card__btns,.gov-card[promotion=\"1\"] .gov-card__btns{flex-direction:column}}";

const GovCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.govToggle = index.createEvent(this, "gov-toggle", 7);
    this.promotion = false;
    this.label = undefined;
    this.collapsible = false;
    this.expanded = false;
    this.headlineTag = 'h3';
    this.wcagTriggerLabel = undefined;
    this.wcagTriggerLabelledBy = undefined;
    this.isExpanded = undefined;
    this.h = template.govHost(this.host);
    this.headlineId = string_utils.createID('GovCardHeadline');
    this.contentId = string_utils.createID('GovCardContent');
  }
  validateHeadlineTag(newValue) {
    const validTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span'];
    if (newValue) {
      if (!validTags.includes(newValue)) {
        gov_log.govErrorLog(`[${CardClass.root}]: Tag ${newValue} is not allowed.`);
      }
    }
  }
  componentWillLoad() {
    this.isExpanded = this.label ? this.expanded : true;
    this.validateHeadlineTag(this.headlineTag);
  }
  async componentDidRender() {
    if (win.canValidateWcagOnRender()) {
      await utils.delay(500);
      await this.validateWcag();
    }
  }
  emmitChange() {
    this.govToggle.emit({ open: this.isExpanded, element: this.host });
  }
  render() {
    const HeadlineTag = this.headlineTag;
    return (index.h(index.Host, { class: this.h.classes(CardClass.root), "is-expanded": this.isExpanded, collapsible: template.booleanString(this.collapsible), promotion: this.promotion }, this.label && this.collapsible ? (index.h("button", { id: this.headlineId, class: CardClass.header, "aria-label": this.wcagTriggerLabel, "aria-labelledby": this.wcagTriggerLabelledBy, "aria-expanded": template.booleanString(this.isExpanded), "aria-controls": this.contentId, onClick: this.onClickHandler.bind(this) }, index.h(HeadlineTag, { class: CardClass.title }, this.label), index.h("gov-icon", { class: CardClass.arrow, name: "chevron-down" }))) : null, this.label && !this.collapsible ? (index.h("div", { class: CardClass.header }, index.h(HeadlineTag, { class: CardClass.title }, this.label))) : null, index.h("div", { class: CardClass.inner, id: this.contentId, "aria-hidden": this.collapsible ? template.booleanString(!this.isExpanded) : undefined, hidden: this.collapsible ? !this.isExpanded : undefined, "aria-labelledby": this.collapsible ? this.headlineId : undefined }, this.h.hasSlot('img') && (index.h("p", { class: CardClass.img }, index.h("slot", { name: "img" }))), index.h("div", { class: CardClass.main }, this.h.hasSlot('icon') && this.promotion && (index.h("div", { class: CardClass.icon }, index.h("slot", { name: "icon" }))), index.h("div", { class: CardClass.content }, index.h("slot", null)), this.h.hasSlot('btn') && this.promotion && (index.h("div", { class: CardClass.btns }, index.h("slot", { name: "btn" })))), this.h.hasSlot('footer') && (index.h("div", { class: CardClass.footer }, index.h("slot", { name: "footer" }))))));
  }
  onClickHandler(e) {
    e.stopPropagation();
    if (this.collapsible) {
      this.isExpanded = !this.isExpanded;
      this.emmitChange();
    }
  }
  /**
   * Open the card if it is collapsible
   */
  async open() {
    if (this.collapsible) {
      this.isExpanded = true;
      this.emmitChange();
    }
  }
  /**
   * Close the card if it is collapsible
   */
  async close() {
    if (this.collapsible) {
      this.isExpanded = false;
      this.emmitChange();
    }
  }
  /**
   * Validate the WCAG attributes of the component
   */
  async validateWcag() {
    if (this.collapsible) {
      wcag.validateWcagLabel(this.wcagTriggerLabel, this.wcagTriggerLabelledBy, CardClass.root);
    }
  }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "headlineTag": ["validateHeadlineTag"]
  }; }
};
GovCard.style = govCardCss;

exports.gov_card = GovCard;

//# sourceMappingURL=gov-card.cjs.entry.js.map