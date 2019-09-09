import '@vaadin/vaadin-lumo-styles/color';
import '@vaadin/vaadin-lumo-styles/spacing';

const theme = document.createElement('dom-module');
theme.id = 'vcf-password-strength-lumo';
theme.setAttribute('theme-for', 'vcf-password-strength');
theme.innerHTML = `
    <template>
      <style>
        [part="bar"] {
          border-radius: 2px;
          transition: background .1s ease-in-out;
        }
      </style>
    </template>
  `;
theme.register(theme.id);
