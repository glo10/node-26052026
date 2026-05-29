describe("Testing Homepage exercise 5.2", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Should have h1", () => {
    cy.get("h1").should("exist").and("have.text", "Exercice 5.1 et 5.2");
  });
  it("Should have /users link", () => {
    cy.get('a[href="/users"]').should("exist");
  });

  it("Should have /users link", () => {
    cy.get('a[href="/users"]').click();
    cy.wait(1000)
    cy.get('article.card').should('have.length', 30)
  });
});
