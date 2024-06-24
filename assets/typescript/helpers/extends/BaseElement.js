'use strict';

import BaseError from '../error/error';

export default class BaseElement {

  constructor() {
    this._domElementInstance = null;
  }

  /**
   * @param {Element|HTMLElement} el
   * @throws GovError
   */
  _prepareDomElement(el) {
    if (!el instanceof Element) {
      throw new BaseError('Element must be a instance of HTML or HTMLElement');
    }
    this._domElementInstance = el;
  }

  /**
   * @return {Element|HTMLElement}
   * @private
   */
  _domElement() {
    return this._domElementInstance;
  }

  /**
   * @return {HTMLBodyElement}
   * @private
   */
  _body() {
    return document.querySelector('body')
  }
};

