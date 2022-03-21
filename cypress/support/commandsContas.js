import { locators } from "./locators";

Commands.Cypress.add(`acessarMenuConta`, () => {
  cy.get(locators.MENU.SETTINGS).click();
  cy.get(locators.MENU.CONTAS).click();
});

Commands.Cypress.add(`inserirConta`, (conta) => {
  cy.get(locators.CONTAS.NOME).type(conta);
  cy.get(locators.CONTAS.BTN_SALVAR).click();
});
