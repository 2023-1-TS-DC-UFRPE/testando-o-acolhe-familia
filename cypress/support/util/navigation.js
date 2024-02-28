class navigation {
    toShelter(shelter) {
        cy.visit('/shelters/3')
    }

    toVolunteers() {
        cy.visit('/volunteers')
    }

    toInicio() {
        cy.visit('/')
    }
}

export default new navigation()