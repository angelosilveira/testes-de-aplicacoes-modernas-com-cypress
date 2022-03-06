/// <reference types="cypress" />

describe("Should group tests...", () => {
  it("A external test...", () => {});
  it.skip("Skip A external test...", () => {});
  // it.only("Only A external test...", () => {});

  describe("Should Sub group tests...", () => {
    it("A external test...", () => {});
  });
});

describe.skip("Skip Should Sub group tests...", () => {
  it("Skip A external test...", () => {});
});
