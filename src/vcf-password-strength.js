/*
 * @license
 * Copyright (c) 2018 Vaadin Ltd.
 * This program is available under Commercial Vaadin Add-On License 3.0 (CVALv3).
 *
 * See <a href="https://vaadin.com/license/cval-3">the website</a> for the complete license.
 */

import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import { ThemableMixin } from '@vaadin/vaadin-themable-mixin';
import { ElementMixin } from '@vaadin/vaadin-element-mixin';
import '@vaadin/vaadin-license-checker/vaadin-license-checker';

/**
 * `<vcf-password-strength>` is a template for vcf components.
 *
 * ```
 * <vcf-password-strength>
 * </vcf-password-strength>
 * ```
 *
 * @memberof Vaadin
 * @demo demo/index.html
 */
class VcfPasswordStrength extends ElementMixin(ThemableMixin(PolymerElement)) {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          --vcf-password-strength-1-color: red;
          --vcf-password-strength-2-color: orange;
          --vcf-password-strength-3-color: yellow;
          --vcf-password-strength-4-color: greenyellow;
          --vcf-password-strength-5-color: green;
          --vcf-password-strength-empty-color: grey;
        }
        [part='bars'] {
          height: 10px;
          display: flex;
          justify-content: space-between;
        }
        [part='bar'] {
          height: 100%;
          background: var(--vcf-password-strength-empty-color);
          width: calc(20% - 5px);
        }
        [part='bar'][colored] {
          background: var(--vcf-password-strength-bars-color);
        }
        :host([strength]) {
          --vcf-password-strength-bars-color: var(--vcf-password-strength-5-color);
        }
        :host([strength='1']) {
          --vcf-password-strength-bars-color: var(--vcf-password-strength-1-color);
        }
        :host([strength='2']) {
          --vcf-password-strength-bars-color: var(--vcf-password-strength-2-color);
        }
        :host([strength='3']) {
          --vcf-password-strength-bars-color: var(--vcf-password-strength-3-color);
        }
        :host([strength='4']) {
          --vcf-password-strength-bars-color: var(--vcf-password-strength-4-color);
        }
        :host([strength='5']) {
          --vcf-password-strength-bars-color: var(--vcf-password-strength-5-color);
        }
      </style>

      <div id="bars" part="bars"></div>
    `;
  }

  static get is() {
    return 'vcf-password-strength';
  }

  static get properties() {
    return {
      barsCount: {
        type: Number,
        value: 5
      },
      strength: {
        type: Number,
        reflectToAttribute: true,
        value: 0
      },
      _bars: {
        type: Array,
        value: () => []
      }
    };
  }

  /**
   * @protected
   */
  static _finalizeClass() {
    super._finalizeClass();

    const devModeCallback = window.Vaadin.developmentModeCallback;
    const licenseChecker = devModeCallback && devModeCallback['vaadin-license-checker'];
    if (typeof licenseChecker === 'function') {
      licenseChecker(VcfPasswordStrength);
    }
  }

  static get observers() {
    return ['_strengthChanged(strength, _bars.splices)'];
  }
  connectedCallback() {
    super.connectedCallback();
    for (let i = 0; i < this.barsCount; i++) {
      const barElement = document.createElement('div');
      barElement.setAttribute('part', 'bar');
      this.$.bars.appendChild(barElement);
      this.push('_bars', barElement);
    }
  }
  _strengthChanged(strength) {
    if (!this._bars) {
      return;
    }
    for (let i = 0; i < this._bars.length; i++) {
      if (i < strength) {
        this._bars[i].setAttribute('colored', true);
      } else {
        this._bars[i].removeAttribute('colored');
      }
    }
  }
}

customElements.define(VcfPasswordStrength.is, VcfPasswordStrength);

/**
 * @namespace Vaadin
 */
window.Vaadin.VcfPasswordStrength = VcfPasswordStrength;
