/// <references types="cypress" />

import { locators } from "../../support/locators";
import "../../support/commandsContas";

describe("Should test at a functional level", () => {
  before(() => {
    cy.login("angelo@gmail.com", "veizinho");
    cy.resetApp();
  });

  it("Should create an account", () => {
    cy.acessarMenuConta();
    cy.inserirConta(`Conta de teste`);
    cy.get(locators.MESSAGE).should(`contain`, `Conta inserida com sucesso`);
  });

  it(`Should update an account`, () => {
    cy.acessarMenuConta();
    cy.xpath(locators.CONTAS.XP_BTN_ALTERAR).click();
    cy.get(locators.CONTAS.NOME).clear().type("Conta alterada");
    cy.get(locators.CONTAS.BTN_SALVAR).click();
    cy.get(locators.MESSAGE).should(`contain`, `Conta atualizada com sucesso`);
  });

  it(`Should not have create account with same name`, () => {
    cy.acessarMenuConta();
    cy.get(locators.CONTAS.NOME).type("Conta alterada");
    cy.get(locators.CONTAS.BTN_SALVAR).click();
    cy.get(locators.MESSAGE).should(`contain`, `code 400`);
  });

  it("Should create and transaction", () => {
    cy.get(locators.MENU.MOVIMENTACAO).click();
    cy.get(locators.MOVIMENTACAO.DESCRICAO).type("Desc");
    cy.get(locators.MOVIMENTACAO.VALOR).type("123");
    cy.get(locators.MOVIMENTACAO.INTERESSADO).type("Inter");
    cy.get(locators.MOVIMENTACAO.STATUS).click();
    cy.get(locators.MOVIMENTACAO.BTN_SALVAR).click();

    cy.get(locators.MESSAGE).should(`contain`, `sucesso`);
    cy.get(locators.EXTRATO.LINHAS).should("have.length", 7);
    cy.xpath(locators.EXTRATO.XP_BUSCA_ELEMENTO).should(`exist`);
  });

  it("Should get balance", () => {
    cy.get(locators.MENU.HOME).click();
    cy.xpath(locators.SALDO.FN_XP_SALDO_CONTA("Conta alterada")).should(
      "contains",
      "123,00"
    );
  });

  it(`Should remove a transaction`, () => {
    cy.get(locators.MENU.EXTRATO).click();
    cy.xpath(locators.EXTRATO.FN_XP_REMOVER_ELEMENTO(`Conta alterada`)).click();
    cy.get(locators.MESSAGE).should(`contain`, `sucesso`);
  });
});
