// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import { locators } from "./locators";

Cypress.Commands.add(`login`, (email, password) => {
  cy.visit(`http://barrigareact.wcaquino.me/`);
  cy.get(locators.LOGIN.USER).type(email);
  cy.get(locators.LOGIN.PASSWORD).type(password);
  cy.get(locators.LOGIN.BTN_LOGIN).click();
  cy.get(locators.MESSAGE).should(`contain`, `Bem vindo`);
});

Cypress.Commands.add("resetApp", () => {
  cy.get(locators.MENU.SETTINGS).click();
  cy.get(locators.MENU.RESET).click();
});

Cypress.Commands.add("getToken", (email, senha) => {
  cy.request({
    method: "POST",
    url: "/signin",
    body: {
      email,
      senha,
      redirecionar: false,
    },
  })
    .its("body.token")
    .should("not.be.empty")
    .then((token) => {
      return token;
    });
});

Cypress.Commands.add("resetRest", () => {
  cy.getToken("angelo@gmail.com", "123456").then((token) => {
    cy.request({
      method: "GET",
      url: "/reset",
      headers: {
        Authorization: `JWT ${token}`,
      },
    })
      .its("status")
      .should("be.equal", 200);
  });
});
