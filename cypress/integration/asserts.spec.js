/// <reference types="cypress" />

describe("Asserts Test", () => {
  it("Equality", () => {
    const a = 1;

    expect(a).equal(1);
    expect(a, "Deveria ser 1").equal(1);
    expect(a, "Espero que seja igual a 1").to.be.equal(1);
    expect(a, "Espero que seja igual a 1").not.to.be.equal(2);
  });

  it("Truthy", () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(a).not.to.be.false;
    expect(b).to.be.null;
    expect(c).to.be.undefined;
  });

  it("Objects", () => {
    const obj = {
      a: 1,
      b: 2,
    };

    expect(obj).equal(obj);
    expect(obj).equals(obj);
    expect(obj).eq(obj);
    expect(
      obj,
      "Verifica se o objeto esta igual com os mesmas chaves e valor"
    ).to.be.deep.equal({ a: 1, b: 2 });
    expect(
      obj,
      "Verifica se o objeto esta igual com os mesmas chaves e valor"
    ).eql({ a: 1, b: 2 });
    expect(
      obj,
      "Verifica se o objeto existe a propriedade a com o valor 1"
    ).include({ a: 1 });
    expect(
      obj,
      "Verifica se o objeto tem a propriedade b e se o valor é 2"
    ).to.have.property("b", 2);
    expect(obj, "Verifica se o objeto não é vázio").to.not.be.empty;
    expect({}, "Verifica se o objeto é vázio").to.be.empty;
  });

  it("Arrays", () => {
    const arr = [1, 2, 3];

    expect(arr, "Verifica se existe os valores 1,2,3 no array").to.have.members(
      [1, 2, 3]
    );
    expect(arr, "Verifica se existe 1 e 3 dentro do array").to.include.members([
      1, 3,
    ]);
    expect(arr, "Verifica se o array não está vázio").to.not.be.empty;
    expect([], "Verifica se o array está vázio").to.be.empty;
  });

  it("Types", () => {
    const num = 1;
    const str = "string";

    expect(num, "Verifica se é número").to.be.a("number");
    expect(str, "Verifica se é string").to.be.a("string");
    expect({}, "Verifica se é object").to.be.a("object");
    expect({}, "Verifica se é object").to.be.an("object");
    expect([], "Verifica se é array").to.be.an("array");
  });

  it("String", () => {
    const str = "String de teste";

    expect(str, "Verifica se a string é igual").to.be.equal("String de teste");
    expect(str, "Verifica se a string tem 15 caracteres").to.have.length(15);
    expect(str, "Verifica se a string contem de").to.contains("de");
    expect(str).to.match(/^String/);
    expect(str).to.match(/teste$/);
    expect(str).to.match(/.{15}/);
    expect(str).to.match(/\w+/);
    expect(str).to.match(/\D+/);
  });

  it("Numbers", () => {
    const number = 4;
    const floatNumber = 5.2123;

    expect(number).to.be.equal(4);
    expect(number).to.be.above(3);
    expect(number).to.be.below(7);
    expect(floatNumber).to.be.equal(5.2123);
    expect(floatNumber).to.be.closeTo(5.2, 0.1);
    expect(floatNumber).to.be.above(5);
  });
});
