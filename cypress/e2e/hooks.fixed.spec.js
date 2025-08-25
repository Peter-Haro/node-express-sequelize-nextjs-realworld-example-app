/// <reference types="cypress" />

describe("Hooks in Cypress", function () {
  before(() => {
    cy.log("First method to execute");
  });

  it("TC#1", () => {
    cy.log("TC#1");
  });

  it("TC#2", () => {
    cy.log("TC#2");
  });

  it("TC#3", () => {
    cy.log("TC#3");
  });
});
