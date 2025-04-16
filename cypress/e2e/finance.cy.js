// const { create } = require("cypress/types/lodash");

describe("Transações", () => {
  beforeEach(() => {
    cy.visit("https://devfinance-agilizei.netlify.app/");
  });
  it("Cadastrar uma entrada", () => {
    createTransaction("Freelancer", 500, "2025-04-10");
  });

  it("Cadastrar uma saída", () => {
    createTransaction("Bolo", -50, "2025-03-23");
  });

  it.only("Excluir transação", () => {
    createTransaction("Freelancer", 200, "2025-04-16");
    cy.get("tr > .description").parent().find("img").click();
    // cy.get("tr>.description").siblings().children("img").click();
    // cy.get("tr>td:nth-child(4)>img").click();
  });
});

function createTransaction(description, value, date) {
  cy.visit("https://devfinance-agilizei.netlify.app/#");
  cy.get(".button").contains("+ Nova Transação").click();
  cy.get("#description").type(description);
  cy.get("#amount").type(value);
  cy.get("#date").type(date);
  cy.get(".actions > button:nth-child(2), Salvar").click();
}
