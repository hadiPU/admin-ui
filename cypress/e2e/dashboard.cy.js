describe("Dashboard Overview", () => {

  beforeEach(() => {
    cy.visit("/login");

    cy.get("#email").type("111202315041@mhs.dinus.ac.id");
    cy.get("#password").type("123456");

    cy.contains("Login").click();

    cy.url().should("include", "/");
  });

  it("Dashboard berhasil ditampilkan", () => {

    cy.contains("Total Balance").should("be.visible");
    cy.contains("Goals").should("be.visible");
    cy.contains("Upcoming Bill").should("be.visible");
    cy.contains("Recent Transactions").should("be.visible");
    cy.contains("Statistics").should("be.visible");
    cy.contains("Expenses Breakdown").should("be.visible");

    cy.get("aside").should("be.visible");

    cy.contains("Overview").should("be.visible");
    cy.contains("Balances").should("be.visible");
    cy.contains("Transaction").should("be.visible");
    cy.contains("Bills").should("be.visible");
    cy.contains("Expenses").should("be.visible");
    cy.contains("Goals").should("be.visible");
    cy.contains("Settings").should("be.visible");

    cy.get('input[placeholder="Search..."]')
      .should("be.visible");

    cy.get("svg").should("be.visible");
  });

});