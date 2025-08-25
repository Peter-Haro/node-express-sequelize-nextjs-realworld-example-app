/// <reference types="cypress" />

describe("Login page test cases", function () {
  it("Login to application with correct credentials", () => {
    cy.visit('/');
    cy.contains("a","Sign in").click();
    cy.get('input[type="email"]').type('rangi@fake.com');
    cy.get('input[type="password"]').type('Rangi@fake');
    cy.get('button[type="submit"]').click();
    cy.get("a[class = 'nav-link'][href *= '/profile']").should('have.text', 'rangi');
    cy.screenshot({blackout: ['input[type="password"]']});
  });

});
