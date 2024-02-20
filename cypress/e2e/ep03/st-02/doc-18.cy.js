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

        // clica no botão visualizar
        cy.get('#mat-menu-panel-4').within(()=>{
            cy.get('.mat-mdc-menu-item').first().click({force:true})
        })

        const fields = ['zip-code', 'state', 'city', 'street', 'no-address', 'suas-form-field', 'suas-form-field-2']
        
        fields.forEach((f)=>{

            cy.get('.family-form__'+f).within(()=>{
                cy.get('.field-read-only__value').invoke('text').should('have.length.gt', 1)
            })
        })
    })
})