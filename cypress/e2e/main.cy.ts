describe("template spec", () => {
  it("passes", () => {
    cy.visit("localhost:3000");
  });
});

it("tests invalid alphabet on binary", () => {
  cy.visit("localhost:3000");
  cy.get("#binary-input").type("11a");
  cy.get("#binary-input").should("have.value", "11");
});

it("tests invalid alphabet on decimal", () => {
  cy.visit("localhost:3000");
  cy.get("#decimal-input").type("2a");
  cy.get("#decimal-input").should("have.value", "2");
});

it("tests invalid number validation on binary", () => {
  cy.visit("localhost:3000");
  cy.get("#binary-input").type("112");
  cy.get("#error-binary-input")
    .should("be.visible")
    .and("contain", "invalid input:112");
});

it("tests calculations on decimal", () => {
  cy.visit("localhost:3000");
  cy.get("#decimal-input").type("12");
  cy.get("#submit-button").click();
  cy.get("#remainder").should("be.visible").and("contain", "0");
});

it("tests calculations on binary", () => {
  cy.visit("localhost:3000");
  cy.get("#binary-input").type("110111");
  cy.get("#submit-button").click();
  cy.get("#remainder").should("be.visible").and("contain", "1");
});
