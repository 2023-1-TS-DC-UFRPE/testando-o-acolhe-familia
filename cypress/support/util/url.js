class url {
    naoEstaEmDashboard() {
        cy.url().should('not.include', '/dashboard')
    }

    estaEmDashboard() {
        cy.url().should('include', '/dashboard')
    }

    estaEmContatosUteis() {
        cy.url().should('include', '/contatos-uteis')
    }

    estaEmAbrigos() {
        cy.url().should('include', '/shelters')
    }

    estaEducacaoAmbiental() {
        cy.url().should('include', '/educacao-ambiental')
    }

    estaEmSobre() {
        cy.url().should('include', '/sobre')
    }

    estaEmAbrigados() {
        cy.url().should('include', '/people-sheltered')
    }
}

export default new url()