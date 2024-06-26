import { Variants } from "../../core/constants/variants";
import { Sizes } from "../../core/constants/sizes";
import { pick } from "../../utils/utils";
export const WizardVariants = pick(Variants, ['PRIMARY', 'SECONDARY', 'WARNING', 'ERROR', 'SUCCESS']);
export const WizardSizes = pick(Sizes, ['_XS', '_S', '_M']);
export const WizardClass = {
  root: 'gov-wizard',
};
export const WizardItemClass = {
  root: 'gov-wizard-item',
  header: 'gov-wizard-item__header',
  arrow: 'gov-wizard-item__arrow',
  title: 'gov-wizard-item__title',
  name: 'gov-wizard-item__name',
  label: 'gov-wizard-item__label',
  annot: 'gov-wizard-item__annot',
  prefix: 'gov-wizard-item__prefix',
  content: 'gov-wizard-item__content',
};
//# sourceMappingURL=constants.js.map
