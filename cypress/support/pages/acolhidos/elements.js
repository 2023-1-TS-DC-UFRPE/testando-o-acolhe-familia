class Elements {

    get botaoFiltroFamilia() {
        return cy.get('.button-filter').contains('Filtros Família')
    }

    get botaoFiltroAcolhidos() {
        return cy.get('.button-filter').contains('Filtros Acolhidos')
    }

    get filtroFamiliaOpcao() {
        return cy.get("mat-radio-group").children().eq(4).find("mat-radio-button").should("be.visible")
    }

    get filtroAcolhidosOpcao() {
        return cy.get("mat-radio-group").children().eq(3).find("mat-radio-button").should("be.visible")
    }

    filtroAcolhidosOpcaoX(opcao) {
        return cy.get("mat-radio-group").children().eq(opcao).find("mat-radio-button").should("be.visible")
    }

    get caixaPesquisa() {
        return cy.get("input[placeholder='Buscar pessoa']")
    }

}

export default new Elements()