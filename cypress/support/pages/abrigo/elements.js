class elements {
    get informacoes() {
        return cy.get('.mdc-tab__text-label').contains("Informações")
    }

    get botaoEditar() {
        return cy.get('.mdc-button__label').first().contains("Editar")
    }

    get inputEmail() {
        return cy.get('#email')
    }

    get campoErroInputEmail() {
        return cy.get('.mat-mdc-form-field-error')
    }

    get tabelaAbrigos() {
        return cy.get('.shelters').find('.card')
    }
}

export default new elements()