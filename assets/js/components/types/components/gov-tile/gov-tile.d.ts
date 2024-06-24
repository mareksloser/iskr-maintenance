import { ButtonTargetType } from "../gov-button/button/constants";
export declare class GovTile {
  host: HTMLGovTileElement;
  /**
   * Link on whole tile
   */
  readonly href: string;
  /**
   * Same as original parameter
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target
   */
  readonly target?: ButtonTargetType;
  private triggerRef?;
  private h;
  constructor();
  render(): any;
  /**
   * Returns a clickable element instance
   */
  getTriggerRef(): Promise<HTMLLinkElement | HTMLSpanElement>;
}
