
# &lt;vcf-password-strength&gt;
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/vaadin/web-components?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Published on Vaadin  Directory](https://img.shields.io/badge/Vaadin%20Directory-published-00b4f0.svg)](https://vaadin.com/directory/component/vaadin-component-factoryvcf-password-strength)

&lt;vcf-password-strength&gt; is a Web Component providing a strength indicator for a password field.

[Live Demo ↗](https://incubator.app.fi/password-strength-demo/password-strength)

<img src="https://raw.githubusercontent.com/vaadin/incubator-password-strength/master/screenshot.gif" width="200" alt="Screenshot of vcf-password-strength">

## Usage
Add `<vcf-password-strength>` component to the page. Set attribute `strength` accordingly to calculated strength of password. 

```html
  <vcf-password-strength strength="3"></vcf-password-strength>
```

## Installation

This components is distributed as Bower packages.

### Polymer 2 and HTML Imports compatible version

Install `vcf-password-strength`:

```sh
bower i vaadin/vcf-password-strength --save
```

Once installed, import it in your application:

```html
<link rel="import" href="bower_components/vcf-password-strength/vcf-password-strength.html">
```

## Getting Started

Vaadin components use the Lumo theme by default.

## The file structure for Vaadin components

- `src/vcf-password-strength.html`

  Unstyled component.

- `theme/lumo/vcf-password-strength.html`

  Component with Lumo theme.

- `vcf-password-strength.html`

  Alias for theme/lumo/vcf-password-strength.html


## Running demos and tests in browser

1. Fork the `vcf-password-strength` repository and clone it locally.

1. Make sure you have [npm](https://www.npmjs.com/) installed.

1. When in the `vcf-password-strength` directory, run `npm install` and then `bower install` to install dependencies.

1. Run `polymer serve --open`, browser will automatically open the component API documentation.

1. You can also open demo or in-browser tests by adding **demo** or **test** to the URL, for example:

  - http://127.0.0.1:8080/components/vcf-password-strength/demo
  - http://127.0.0.1:8080/components/vcf-password-strength/test


## Running tests from the command line

1. When in the `vcf-password-strength` directory, run `polymer test`


## Following the coding style

We are using [ESLint](http://eslint.org/) for linting JavaScript code. You can check if your code is following our standards by running `gulp lint`, which will automatically lint all `.js` files as well as JavaScript snippets inside `.html` files.


## Contributing

  - Make sure your code is compliant with our code linters: `gulp lint`
  - Check that tests are passing: `polymer test`
  - [Submit a pull request](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github) with detailed title and description
  - Wait for response from one of Vaadin components team members


# Vaadin Prime
This component is available in Vaadin Prime subscription. It is still open source, but you need to have a valid CVAL license in order to use it. Read more at: https://vaadin.com/pricing

# License

Apache License 2.0