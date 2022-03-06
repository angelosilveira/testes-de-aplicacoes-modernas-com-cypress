/// <reference types="cypress" />

describe("Helpers", () => {
  before(() => {
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
  });

  beforeEach(() => {
    cy.reload();
  });

  it.only("Wrap", () => {
    const obj = {
      nome: "User",
      idade: 20,
    };

    expect(obj).to.have.property("nome");
    cy.wrap(obj).should("have.property", "nome");
    // cy.get("#formNome").then(($el) => {
    //   cy.wrap($el).type("Ele funciona com wrap");
    // });
    const promisse = new Promisse((resolve, reject) => {
      setTimeout(() => {
        resolve(10);
      }, 500);
    });
    cy.get("#buttonSimple");
  });

  it.only("Its", () => {
    const obj = {
      nome: "User",
      idade: 20,
    };
    cy.wrap(obj).should("have.property", "nome", "User");
    cy.wrap(obj).its("nome").should("be.equal", "User");

    const obj2 = {
      nome: "User",
      idade: 20,
      endereco: {
        rua: "dos dois",
      },
    };

    cy.wrap(obj2).its("endereco").should("have.property", "rua");
    cy.wrap(obj2).its("endereco").its("rua").should("contain", "dos dois");
    cy.wrap(obj2).its("endereco.rua").should("contain", "dos dois");

    cy.title().its("length").should("be.equal", 20);
  });

  it.only("Invoke", () => {
    const getValue = () => 1;
    const soma = (a, b) => a + b;
    cy.wrap({ fn: getValue }).invoke("fn").should("be.equal", 1);
    cy.wrap({ fn: soma }).invoke("fn", 2, 5).should("be.equal", 7);
    cy.get("#formNome").invoke("val", "Texto via invoke");
    cy.get("#resultado").invoke("html", "<p>ola mundo</p>");
  });
});
