describe('Dashboard (Painela de visualização): Campos do painel clicáveis em situação moradia ', ()=>{
    it("Página Inicial", () => {
        cy.visit('/')

        cy.contains('Entrar')
    })
    it('Login & Teste de desabilitação/habilitação do botão Moradia foi Atingida? para caso de pessoa em situação de rua', () => {
        // Acessar a plataforma
        cy.visit('/')

        cy.login(Cypress.env('viewer_user_email'), Cypress.env('viewer_user_password'))

        cy.url().should('include', '/dashboard')

        cy.getAllLocalStorage()
            .its('https://acolhe-disciplina.innovagovlab.org')
            .should('have.keys', ['accessToken'])
        
        // clicar em um filtro no painel de moradia
        cy.contains('Parcialmente inábitavel').click({force:true})    
        
        cy.contains('Abrigadas, Parcialmente inábitavel')
    })
})