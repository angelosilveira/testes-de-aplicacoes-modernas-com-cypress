/// <reference types="cypress" />

describe("Work with basic elements", () => {
  before(() => {
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
  });

  beforeEach(() => {
    cy.reload();
  });

  it("Text", () => {
    cy.get("body").should("contain", "Cuidado");
    // cy.get("body").should("have.text", "Cuidado");
    cy.get("span").should("contain", "Cuidado");
    cy.get(".facilAchar").should("contain", "Cuidado");
    cy.get(".facilAchar").should(
      "have.text",
      "Cuidado onde clica, muitas armadilhas..."
    );
  });

  it.only("Text Fields", () => {
    cy.get("#formNome").type("Cypress Test");
    cy.get("#formNome").should("have.value", "Cypress Test");

    cy.get("#elementosForm\\:sugestoes")
      .type("textarea")
      .should("have.value", "textarea");

    cy.get(":nth-child(3) > :nth-child(6) > input").type("???");

    cy.get("[data-cy=dataSobrenome]")
      .type("Teste12345{backspace}{backspace}")
      .should("have.value", "Teste123");

    cy.get("#elementosForm\\:sugestoes")
      .clear()
      .type("Erro{selectall}acerto", { delay: 100 })
      .should("have.value", "acerto");
  });

  it.only("Radio Button", () => {
    cy.get("#formSexoFem").click().should("be.checked");
    cy.get("#formSexoMasc").should("not.be.checked");
    cy.get("[name=formSexo").should("have.length", 2);
  });

  it.only("Checkbox", () => {
    cy.get("#formComidaPizza").click().should("be.checked");

    cy.get("[name=formComidaFavorita]").click({ multiple: true });
    cy.get("#formComidaPizza").should("not.be.checked");
    cy.get("#formComidaVegetariana").should("be.checked");
  });

  it.only("Combo", () => {
    cy.get("[data-test=dataEscolaridade]")
      .select("2o grau completo")
      .should("have.value", "2graucomp");

    cy.get("[data-test=dataEscolaridade]")
      .select("1graucomp")
      .should("have.value", "1graucomp");
  });

  it.only("Combo multiplo", () => {
    cy.get("[data-testid=dataEsportes").select(["natacao", "Corrida", "nada"]);
  });
});