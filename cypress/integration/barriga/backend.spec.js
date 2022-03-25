/// <references types="cypress" />

describe("Should test at a functional level", () => {
  let token;

  before(() => {
    cy.getToken("angelo@gmail.com", "123456").then((tkn) => {
      token = tkn;
    });
  });

  beforeEach(() => {
    cy.resetRest();
  });

  it("Should create an account", () => {
    cy.request({
      method: "POST",
      url: "/contas",
      headers: {
        Authorization: `JWT ${token}`,
      },
      body: {
        nome: "Conta via rest 4",
      },
    }).as("response");

    cy.get("@response").then((res) => {
      expect(res.status).to.be.equal(201);
      expect(res.body).to.have.property("id");
      expect(res.body).to.have.property("nome", "Conta via rest 4");
    });
  });

  it(`Should update an account`, () => {});

  it(`Should not have create account with same name`, () => {});

  it("Should create and transaction", () => {});

  it("Should get balance", () => {});

  it(`Should remove a transaction`, () => {});
});
