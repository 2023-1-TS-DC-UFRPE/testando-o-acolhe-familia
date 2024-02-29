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

    get botaoAcolhidos(){
    return cy.contains('div[role="tab"]', 'Acolhidos').click();
    }
    
    get interceptBotaoAcolhidos(){
    return cy.intercept('GET', 'https://acolhebe-disciplina.innovagovlab.org/api/v1/family?shelterId=3&staySituation=abrigadas&query=&page=0&size=25').as('getFamilies');
    }
    
    get botaoAdicionarFamilia() {
        return cy.contains('span', 'Família');
    }

    get botaoAdicionarManualmente() {
        return cy.contains('span', 'Adicionar Manualmente');
    }

    get botaoAdicionarManualmente() {
        return cy.contains('span', 'Adicionar Manualmente');
    }

    get campoCEP() {
        return cy.get('input[formcontrolname="zipCode"]');
    }
    
    get campoNumero() {
        return cy.get('input[formcontrolname="number"]');
    }
    
    get seletorMoradiaAtingida() {
        return cy.get('mat-select[formcontrolname="moradiaAtingida"]');
    }

     get botaoAdicionarMembroFamilia() {
        return cy.contains('span', 'Membro da Família');
    }

    get inputNome() {
        return cy.get('input[formcontrolname="name"]');
    }

    get inputCPF() {
        return cy.get('input[formcontrolname="cpf"]');
    }

    get selectGenero() {
        return cy.get('mat-select[formcontrolname="gender"]');
    }

    get inputNascimento() {
        return cy.get('input[formcontrolname="birthdate"]');
    }

    get selectCorRaca() {
        return cy.get('mat-select[formcontrolname="colorRace"]');
    }

    get checkboxResponsavel() {
        return cy.get('#mat-mdc-checkbox-5-input');
    }

    get botaoAdicionar() {
        return cy.contains('span', 'Adicionar').scrollIntoView();
    }

    get botaoCadastrar() {
        return cy.contains('button', 'Cadastrar').scrollIntoView();
    }

    get selecionarCalendario(){
         return cy.get('input[formcontrolname="birthdate"]');
    }
    get selecionarDia(){
        return cy.contains('button', '5');     
    }

    get selecionaMes(){
        return cy.contains('button', 'JAN');    
    }

    get selecionaAno(){
        return cy.contains('button', '2002');     
    }

    get textoFiltro() {
        return cy.get('.text-blue-700')
    }

}

export default new Elements()