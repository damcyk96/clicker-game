/// <reference types="Cypress" />

const localhost = "http://localhost:3000/";
describe("Visit", () => {
  it("visit webpage", () => {
    cy.visit(localhost);
  });
});

context("Testy gry", () => {
  describe("check levels and correct form of bugs", () => {
    it("should be 1 level, 0 bug, 1 bug per click, total amount", () => {
      cy.get("[data-testid=amount] > span").should("contain", "0 bug");
      cy.get("[data-testid=level]").should("contain", "1");
      cy.get("[data-testid=amountPerClick]").should(
        "contain",
        "1 bug per click"
      );
      cy.get("[data-testid=totalAmount]").should("contain", "0 bug total");
    });
    it("should click 10x clicker", () => {
      for (let i = 0; i < 10; i++) cy.get("[data-testid=clicker]").click();
    });
    it("should be 2 level", () => {
      cy.get("[data-testid=amount] > span").should("contain", "10 bugs");
      cy.get("[data-testid=level]").should("contain", "2");
    });
  });
  describe("buy machine (more stress)", () => {
    it("should buy machine - more stress", () => {
      cy.get('[data-testid="More stress"]').click();
    });
    it("should be 2 level, 0 bug, 1 bug per click, 10 total amount", () => {
      cy.get("[data-testid=amount] > span").should("contain", "0 bug");
      cy.get("[data-testid=level]").should("contain", "2");
      cy.get("[data-testid=amountPerClick]").should(
        "contain",
        "2 bugs per click"
      );
      cy.get("[data-testid=totalAmount]").should("contain", "10 bugs total");
    });
  });
});
