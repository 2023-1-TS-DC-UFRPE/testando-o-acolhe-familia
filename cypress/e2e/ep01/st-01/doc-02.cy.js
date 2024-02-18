describe("DOC-02 Tentativa de logar com senha inválida", () => {
  it("Login inválido", () => {
    cy.visit('/')

    // Auth Flow
    cy.login(Cypress.env('viewer_user_email'), "Anything that is not a correct password")

    cy.url().should('not.include', '/dashboard')
    cy.contains("E-mail ou senha inválidos")
  })
})