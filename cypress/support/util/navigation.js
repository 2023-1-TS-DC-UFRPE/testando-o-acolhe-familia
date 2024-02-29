class navigation {
    toShelter(shelter) {
        cy.visit('/shelters/3')
    }

    toVolunteers() {
        cy.visit('/volunteers')
    }

    toAcolhidos() {
        cy.visit('/people-sheltered')
    }

    toInicio() {
        cy.visit('/')
    }
    toDashboard() {
        cy.visit('/dashboard')
    }
}

export default new navigation()