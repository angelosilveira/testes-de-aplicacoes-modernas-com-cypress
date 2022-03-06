/// <reference types="cypress" />

describe("Sync", () => {
  before(() => {
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
  });

  beforeEach(() => {
    cy.reload();
  });

  it.only("Uso do timeout", () => {
    // cy.get("#buttonDelay").click();
    // cy.get("#novoCampo").should("exist");

    cy.get("#buttonDelay").click();
    cy.get("#novoCampo", { timeout: 3000 }).should("exist");

    // cy.get("#buttonDelay").click();
    //cy.wait(5000)
    // cy.get("#novoCampo").should("exist");
  });
});
