class elements {
    get botaoEditarPrimeiroVoluntario() {
        return cy.get('.mdc-data-table__content')
        .find('.mat-mdc-button-persistent-ripple.mdc-icon-button__ripple')
        .first()
    }

    get inputCPF() {
        return cy.get('#cpf')
    }

    get botaoAtualizar() {
        return cy.contains("Atualizar")
    }
}

export default new elements()