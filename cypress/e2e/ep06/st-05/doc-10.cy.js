Cypress.Commands.add('clickItemNavigateAndVerifyFilter', (itemText) => {
    // Clicar no item
    cy.contains(itemText).click()

    // Verificar se o filtro foi aplicado
    cy.get('.text-blue-700').should('contain', itemText)
})
describe('DOC-10 Dashboard (Painela de visualização): Campos do painel clicáveis em situação moradia ', ()=>{
    it('Login & Teste de filtro encontrados no dashboard sobre Moradias', () => {
        // Acessar a plataforma
        cy.visit('/')

        cy.contains('Entrar')

        cy.login(Cypress.env('viewer_user_email'), Cypress.env('viewer_user_password'))

        cy.url().should('include', '/dashboard')

        cy.getAllLocalStorage()
            .its('https://acolhe-disciplina.innovagovlab.org')
            .should('have.keys', ['accessToken'])

        // Clicar no item e verificar se o filtro foi aplicado
        cy.clickItemNavigateAndVerifyFilter('Parcialmente inábitavel')

        // Navegar para a página anterior
        cy.go('back')

        cy.clickItemNavigateAndVerifyFilter('Completamente inábitavel')

        cy.go('back')

        cy.clickItemNavigateAndVerifyFilter('Habitável, mas precisa de reparos')

        cy.go('back')

        cy.clickItemNavigateAndVerifyFilter('Habitável e não precisa de reparos')
    })
})