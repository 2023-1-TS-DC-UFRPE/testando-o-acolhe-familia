describe('DOC-13 Falha no cadastro do membro da família por ausência, ou formatação incorreta, de campo obrigatório', () => {
    it("Página Inicial", () => {
        cy.visit('/')

        cy.contains('Entrar')
    })
    it('Login & Teste de desabilitação/habilitação do botão Moradia foi Atingida? para caso de pessoa em situação de rua', () => {
        // Acessar a plataforma
        cy.visit('/')

        cy.login(Cypress.env('email'), Cypress.env('password'))

        cy.url().should('include', '/dashboard')

        cy.getAllLocalStorage()
            .its('https://acolhe-disciplina.innovagovlab.org')
            .should('have.keys', ['accessToken'])
        
        // Vistar a página Abrigos --> Abrigo X - Nome_Representante
        cy.visit('/shelters/3')

        // Acessar a página de Acolhidos
        cy.get('.mat-mdc-tab-list').within(() => {
            cy.contains("Acolhidos").click({ force: true })
        })

        // Acessar a página de Cadastro de Família
        cy.get('.mdc-button__label').within(() => {
            cy.contains("Família").click()
            cy.contains("Adicionar Manualmente").click()
        })

        // Cadastrar uma família em situação de rua. Verificação inicial
        // dos campos obrigatórios se estão habilitados
        cy.get('.family-form__suas-form-field').should('not.be.disabled');

        // Seleção da checkbox sobre "situação de rua"
        cy.get('[type="checkbox"]').check()

        // Verificação se os campos obrigatórios ficaram todos desabilitados
        cy.get('.family-form__suas-form-field').should('be.disabled');        
    })

})