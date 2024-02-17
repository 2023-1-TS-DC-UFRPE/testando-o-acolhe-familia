describe('Página inicial do sistema', () => {
  it('Login', () => {
    cy.visit('/')

    // Auth Flow
    // Entrar button
    cy.contains("Entrar").click()
    // Email input
    cy.log("Realizando o login, por favor verifique se o usuário e senha estão configurados corretamente no arquivo cypress.env.json.")
    cy.get('#email').type(Cypress.env('viewer_user_email'))
    // Password input
    cy.get('#password').type(Cypress.env('viewer_user_password'), { log: false })
    // Login/Entrar button
    cy.contains("Entrar").click()

    cy.url().should('include', '/dashboard')

    cy.getAllLocalStorage()
      .its('https://acolhe-disciplina.innovagovlab.org')
      .should('have.keys', ['accessToken'])
  })
})