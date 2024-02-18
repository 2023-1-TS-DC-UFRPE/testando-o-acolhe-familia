describe("DOC-18 Swagger não deve estar acessível", () => {
    it("Swagger inacessível para usuários não logados", () => {
        cy.visit(':8080/swagger-ui/')
        cy.url().should('not.include', '/swagger-ui/')
    })
    it("Swagger inacessível para usuário viewer", () => {
        cy.login(Cypress.env('viewer_user_email'), Cypress.env('viewer_user_password'))
        cy.visit(':8080/swagger-ui/')
        cy.url().should('not.include', '/swagger-ui/')
    })
})