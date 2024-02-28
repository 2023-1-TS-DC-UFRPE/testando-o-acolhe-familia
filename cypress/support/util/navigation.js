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
}

export default new navigation()