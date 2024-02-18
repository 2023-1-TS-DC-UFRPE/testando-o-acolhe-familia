describe("DOC-02 Tentativa de logar com senha inválida", () => {
  it("Login inválido", () => {
    cy.visit('/')

    // Auth Flow
    // Entrar button
    cy.contains("Entrar").click()
    // Email input
    cy.log("Realizando o login, por favor verifique se o usuário está configurado corretamente no arquivo cypress.env.json.")
    cy.get('#email').type(Cypress.env('viewer_user_email'))
    // Password input
    cy.get('#password').type("Anything that is not a correct password", { log: false })
    // Login/Entrar button
    cy.contains("Entrar").click()

    cy.url().should('not.include', '/dashboard')
    cy.contains("E-mail ou senha inválidos")
  })
})