/// <reference types="Cypress" />

const localhost = "http://localhost:3000/";

context("testy", () => {
  describe("Check redirect", () => {
    it("should open page", () => {
      cy.visit(localhost);
    });
    it("should add one bug and delete storage and check title", () => {
      cy.clearLocalStorage("savedGame");
      cy.title().should("eq", "Bug Clicker");
      cy.get("[data-testid=amount] > span").should("contain", "0 bug");
      cy.get("[data-testid=clicker]").click();
      cy.title().should("eq", "Bug Clicker");
      cy.wait(4900); //useInteval time :)
      cy.title().should("eq", "1 Bugs - Bug Clicker");
      cy.get("[data-testid=amount] > span").should("contain", "1 bug");
      cy.get("[data-testid=resetButton]").click();
      cy.get("[data-testid=amount] > span").should("contain", "0 bug");
      cy.title().should("eq", "Bug Clicker");
    });
  });
});
