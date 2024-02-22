describe('Visualizar dados completos de uma família', ()=>{
    it("Página inicial", ()=>{
        cy.visit('/')
        cy.contains('Entrar')
    })
    it('Login e teste de visualizar dados de uma familia', ()=>{
        cy.visit('/')

        cy.login(Cypress.env('viewer_user_email'), Cypress.env('viewer_user_password'))

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

        // Verifica se há família cadastrada
        cy.contains('Nenhum registro encontrado').should('not.exist')

        //clica no botão de opções
        cy.get('family-actions-inline').first().within(()=>{cy.get('.mat-mdc-menu-trigger').click({force:true})})

        // clica no botão visualizar a família
        cy.get('#mat-menu-panel-4').within(()=>{
            cy.get('.mat-mdc-menu-item').first().click({force:true})
        })

        cy.contains('A Moradia foi Atingida?')

        cy.get('.family-form__zip-code').within(()=>{
            cy.get('.field-read-only__value').invoke('text').should('have.length.gt', 1)
        })

        cy.get('.family-form__state').within(()=>{
            cy.get('.field-read-only__value').invoke('text').should('have.length.gt', 1)
        })

        cy.get('.family-form__city').within(()=>{
            cy.get('.field-read-only__value').invoke('text').should('have.length.gt', 1)
        })

        cy.get('.family-form__street').within(()=>{
            cy.get('.field-read-only__value').invoke('text').should('have.length.gt', 1)
        })

        cy.get('.family-form__no-address').within(()=>{
            cy.get('.field-read-only__value').invoke('text').should('have.length.gt', 1)
        })

        cy.get('.family-form__suas-form-field').within(()=>{
            cy.get('.field-read-only__value').invoke('text').should('have.length.gt', 1)
        })

        cy.get('.family-form__suas-form-field-2').within(()=>{
            cy.get('.field-read-only__value').invoke('text').should('have.length.gt', 1)
        })

        cy.get('.family-form__number').within(()=>{
            cy.get('.field-read-only__value').should('not.have.text', '-')
        })

        cy.contains('(Responsável pela unidade familiar)')
    
    })
})