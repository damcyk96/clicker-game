/// <reference types="Cypress" />

const localhost = "http://localhost:3000/";
describe("Testuje strone glowna", () => {
  context("uruchomienie strony", () => {
    it("visit webpage", () => {
      cy.visit(localhost);
    });
  });
});
beforeEach(() => {
  cy.viewport(1920, 1080);
});

context("testy", () => {
  describe("Check redirect", () => {
    it("should open page", () => {
      cy.visit(localhost);
      cy.url().should("eq", localhost + "shop");
    });
  });

  describe("Check if exist Description, Shop, Achivements and check url", () => {
    it("should check and click description ", () => {
      cy.get("[data-testid=header-description]")
        .should("contain", "DESCRIPTION")
        .click();
      cy.url().should("eq", localhost + "description");
    });
    it("should check and click achivements ", () => {
      cy.get("[data-testid=header-achivements]")
        .should("contain", "ACHIVEMENTS")
        .click();
      cy.url().should("eq", localhost + "achivements");
    });
    it("should check and click shop ", () => {
      cy.get("[data-testid=header-shop]").should("contain", "SHOP").click();
      cy.url().should("eq", localhost + "shop");
    });
  });
});
