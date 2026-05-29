import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:8052',
    specPattern: 'cypress/e2e/5.2/*.cy.{js,mjs,jsx,ts,tsx}',
    supportFile: false
  },
});
