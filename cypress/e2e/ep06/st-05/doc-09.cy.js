Cypress.Commands.add('clickItemNavigateAndVerifyFilter', (itemText) => {
    // Clicar no item
    cy.contains(itemText).click()

    // Verificar se o filtro foi aplicado
    cy.get('.text-blue-700').should('contain', itemText)
})
describe('DOC-09 Dashboard (Painel de visualização): Campos do painel clicáveis em situação habitantes ', () => {
    it('Login & Teste de filtro encontrados no dashboard sobre Situação Habitantes', () => {
        // Acessar a plataforma
        cy.visit('/')

        cy.contains('Entrar')

        cy.login(Cypress.env('email'), Cypress.env('password'))

        cy.url().should('include', '/dashboard')

        cy.getAllLocalStorage()
            .its('https://acolhe-disciplina.innovagovlab.org')
            .should('have.keys', ['accessToken'])

        // Clicar no item e verificar se o filtro foi aplicado
        cy.clickItemNavigateAndVerifyFilter('Óbitos')

        // Navegar para a página anterior
        cy.go('back')

        cy.clickItemNavigateAndVerifyFilter('Desaparecidos')

        cy.go('back')

        cy.clickItemNavigateAndVerifyFilter('Perdas de renda')

        cy.go('back')

        cy.clickItemNavigateAndVerifyFilter('Agravos de problema de saúde')
    })
})