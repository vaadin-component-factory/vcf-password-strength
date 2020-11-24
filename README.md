# &lt;vcf-password-strength&gt;

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/vaadin/web-components?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![npm version](https://badgen.net/npm/v/@vaadin-component-factory/vcf-password-strength)](https://www.npmjs.com/package/@vaadin-component-factory/vcf-password-strength)
[![Published on Vaadin Directory](https://img.shields.io/badge/Vaadin%20Directory-published-00b4f0.svg)](https://vaadin.com/directory/component/vaadin-component-factoryvcf-password-strength)

`<vcf-password-strength>` is a Web Component providing a strength indicator for a password field.

![GIF of Vaadin Component Factory password strength](https://raw.githubusercontent.com/vaadin/incubator-password-strength/master/screenshot.gif)

[Live demo ↗](https://vcf-password-strength.netlify.app)

## Installation

Install `vcf-password-strength`:

```sh
npm i @vaadin-component-factory/vcf-password-strength --save
```

## Usage

Once installed, import it in your application:

```js
import '@vaadin-component-factory/vcf-password-strength';
```

Add `<vcf-password-strength>` element to the page.

```html
<vcf-password-strength strength="3"></vcf-password-strength>
```

## Running demo

1. Fork the `vcf-password-strength` repository and clone it locally.

1. Make sure you have [npm](https://www.npmjs.com/) installed.

1. When in the `vcf-password-strength` directory, run `npm install` to install dependencies.

1. Run `npm start` to open the demo.

## Server-side API

This is the client-side (Polymer 3) web component. If you are looking for the server-side (Java) API for the Vaadin Platform, it can be found here: [Password Strength](https://vaadin.com/directory/component/password-strength)

## Vaadin Prime

This component is available in the Vaadin Prime subscription. It is still open source, but you need to have a valid CVAL license in order to use it. Read more at: [Pricing](https://vaadin.com/pricing)

## License

Apache License 2.0