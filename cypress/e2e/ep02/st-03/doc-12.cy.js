describe('DOC-12 Falha na edição por campo obrigatório incorreto.', () => {
    it("Abrigos - Verificar mensagem de erro ao digitar um email inválido", () => {
        // Acessar a plataforma
        cy.visit('/')

        cy.login(Cypress.env('email'), Cypress.env('password'))

        cy.url().should('include', '/dashboard')
        
        // Acessar a página de Abrigos --> Abrigo X - Nome_Representante
        cy.visit('/shelters/3')

        // Acessar a página de Informações
        cy.get('.mdc-tab__text-label').contains("Informações").click({ force: true })

        // Clicar no botão de "Editar"
        cy.get('.mdc-button__label').first().within(() => {
            cy.contains("Editar").click()
        })

        // Digitar um email inválido
        cy.get('#email').clear().type('email-invalido@').blur();

        // Verificar se uma mensagem de erro é exibida para o e-mail inválido
        cy.get('.mat-mdc-form-field-error').should('exist').and('be.visible');
        
    })
})