// cypress/e2e/integration/login/login.js
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I am on the login page', () => {
  cy.visit('http://localhost:3000/');
});

When('I enter valid credentials', () => {
  cy.get('#username').type('user');
  cy.get('#password').type('pass');
});

When('I enter invalid credentials', () => {
  cy.get('#username').type('invalidUser');
  cy.get('#password').type('invalidPass');
});

When('I submit the form', () => {
  cy.get('form').submit();
});

Then('I should see a success message', () => {
  cy.contains('Login successful!').should('be.visible');
});

Then('I should see an error message', () => {
  cy.get('#error-message').should('contain.text', 'Invalid username or password');
});
