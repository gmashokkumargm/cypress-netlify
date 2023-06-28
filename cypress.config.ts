import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://ts-e2e-challenge.netlify.app/',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    defaultCommandTimeout: 10 * 1000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task',{
        randomGenerator: async (data) => {
        const chars = 'abcdefghijklmnopqrstuvwxyz';
        let string = '';
        for(let i=0; i<15; i++){
          string += chars[Math.floor(Math.random() * chars.length)];
        }
        return data === 'email' ? string + '@test.com' : string;
      },
      })
    },
  },
});
