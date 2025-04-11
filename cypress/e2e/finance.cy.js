describe("Transações", () => {
  it("Cadastrar uma entrada", () => {
    cy.visit("https://devfinance-agilizei.netlify.app/#");
    cy.get(".button").contains("+ Nova Transação").click();
    cy.get("#description").type("Freelancer");
    cy.get("#amount").type(500.0);
    cy.get("#date").type("2025-03-23");
    cy.get(".actions > button:nth-child(2), Salvar").click();
    cy.get("tbody  tr  td.description").should("have.text", "Freelancer");
  });

  it("Cadastrar uma saída", () => {
    cy.visit("https://devfinance-agilizei.netlify.app/#");
    cy.get(".button").contains("+ Nova Transação").click();
    cy.get("#description").type("Cinema");
    cy.get("#amount").type(-50);
    cy.get("#date").type("2025-03-25");
    cy.get(".actions > button:nth-child(2), Salvar").click();
  });
});
