import "@cypress-audit/lighthouse/commands";
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => { 
    cy.visit('/')
    
    // Auth Flow
    // Entrar button
    cy.contains("Entrar").click()
    // Email input
    cy.get('#email').type(email)
    // Password input
    cy.get('#password').type(password, { log: false })
    // Login/Entrar button
    cy.contains("Entrar").click()
})