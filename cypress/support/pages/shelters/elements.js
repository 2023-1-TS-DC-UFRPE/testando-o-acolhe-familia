class ShelterPageElements {

    get botaoAcolhidos() {
        return cy.contains("Acolhidos")
    }

    get botaoFamilia() {
        return cy.contains("Família")
    }



}

export default new ShelterPageElements()