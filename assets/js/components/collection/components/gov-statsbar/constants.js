import { pick } from "../../utils/utils";
import { Variants } from "../../core/constants/variants";
export var StatsBarIconPosition;
(function (StatsBarIconPosition) {
  StatsBarIconPosition["LEFT"] = "left";
})(StatsBarIconPosition || (StatsBarIconPosition = {}));
export const StatsBarVariants = pick(Variants, ['PRIMARY', 'SECONDARY']);
export const StatsBarClass = {
  root: 'gov-statsbar',
  section: 'gov-statsbar__section',
};
export const StatsBarItemClass = {
  root: 'gov-statsbar-item',
  icon: 'gov-statsbar-item__icon',
  number: 'gov-statsbar-item__number',
  text: 'gov-statsbar-item__text',
};
//# sourceMappingURL=constants.js.map
