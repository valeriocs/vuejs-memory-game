context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  it(".type() - Esse script valida todo o funcionamento da aplicação, até mesmo as requests de POST e GET.", () => {
    cy.get(":nth-child(2) > .v-tabs__item > .route-title")
      .should("have.text", "Home");
    cy.get(":nth-child(3) > .v-tabs__item > .route-title")
      .should("have.text", "Leaderboard");
    cy.get(":nth-child(4) > .v-tabs__item > .route-title")
      .should("have.text", "Game");
    cy.get("#route-title")
      .should("have.text", "Seja bem vindo ao Vuejs - Memory Game");
    cy.get("#route-icon")
      .should("have.text", "home");
    cy.get(".xs12 > .title")
      .should("have.text", "O que você gostaria de fazer ?");
    cy.get(":nth-child(2) > #home-buttons > .title").should("have.text", "Quero jogar!");
    cy.get(":nth-child(3) > #home-buttons > .title").should("have.text", "Só conferir o placar!");
    cy.get(":nth-child(2) > #home-buttons > .title").click();
    cy.get("input[name=playerName]")
      .type("Cypress E2E")
      .should("have.value", "Cypress E2E");
    cy.get(".v-card__actions > .v-btn").click();
    cy.get(".Cartman").click({ multiple: true });
    cy.wait(1100);
    cy.get(".Chef").click({ multiple: true });
    cy.wait(1100);
    cy.get(".Jimmy").click({ multiple: true });
    cy.wait(1100);
    cy.get(".Kenny").click({ multiple: true });
    cy.wait(1100);
    cy.get(".Kyle").click({ multiple: true });
    cy.wait(1100);
    cy.server({ method: "POST" })
    cy.route({ url: "http://localhost:8080/api/player" }).as("NewPlayer");
    cy.get(".Stan").click({ multiple: true });
    cy.wait("@NewPlayer");
    cy.server({ method: "GET" })
    cy.route({
      url: "http://localhost:8080/api/player"
    }).as("Leaderboard");
    cy.get(":nth-child(3) > .v-tabs__item > .route-title")
    .click({ force: true });
    cy.wait("@Leaderboard");
    cy.get("#route-title").should("have.text", "Confira se o seu nome está no ranking");
    cy.get("#route-icon").should("have.text", "sort");
    cy.get("th:first-child").should("have.text", "Nome");
    cy.get("th:nth-child(2)").should("have.text", "Tempo");
    cy.get("th:nth-child(3)").should("have.text", "arrow_upwardTurnos");
    cy.get("tbody > :nth-child(1) > :nth-child(1)").should("have.text", "Cypress E2E");
  });

});
