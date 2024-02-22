describe('EXP-10 CPF Voluntario', () => {
  it('Teste de alteração de CPF voluntário', () => {
    cy.visit('https://acolhe-disciplina.innovagovlab.org')
    cy.login(Cypress.env('email'), Cypress.env('password'))

    cy.url().should('include', '/dashboard')

    cy.getAllLocalStorage()
        .its('https://acolhe-disciplina.innovagovlab.org')
        .should('have.keys', ['accessToken'])

    cy.visit('/volunteers')
    cy.get('.mdc-data-table__content').within(() => {
      cy.get('.mat-mdc-button-persistent-ripple.mdc-icon-button__ripple').first().click({ force: true })})

    cy.get('#cpf').clear().type("698.195.864-37")

    cy.contains("Atualizar").click()

    cy.contains("Erro ao atualizar.")

  })
 })
