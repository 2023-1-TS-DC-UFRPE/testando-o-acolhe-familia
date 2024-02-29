import elements from "./elements";

class AcolhidosFiltros {
    clicarFiltroFamilia() {
        elements.botaoFiltroFamilia.click()
    }

    clicarFiltroAcolhidos() {
        elements.botaoFiltroAcolhidos.click()
    }

    clicarFiltroFamiliaOpcao() {
        elements.filtroFamiliaOpcao.click()
    }

    clicarFiltroAcolhidosOpcao() {
        elements.filtroAcolhidosOpcao.click()
    }

    pesquisarPessoa() {
        elements.caixaPesquisa.type("Eliomar")
    }

    clicarfiltroAcolhidosOpcaoX(x) {
        elements.filtroAcolhidosOpcaoX(x).click()
    }

    clicarBotaoAcolhidos(){
        elements.botaoAcolhidos.click()
    }

    interceptBotaoAcolhidos(){
        elements.interceptBotaoAcolhidos.as("getFamilies")
    }

    aguardarFamiliasCarregarem() {
        cy.wait('@getFamilies');
    }

    iniciarAdicaoFamilia() {
        elements.botaoAdicionarFamilia.click();
        elements.botaoAdicionarManualmente.click();
    }

    preencherCEP(cep) {
        elements.campoCEP.type(cep);
    }

    preencherNumero(numero) {
        elements.campoNumero.type(numero);
    }

    selecionarMoradiaAtingida() {
        elements.seletorMoradiaAtingida.click();
        cy.get('mat-option').first().click();
    }


    adicionarMembroFamilia() {
        elements.botaoAdicionarMembroFamilia.click();
    }

    preencherNome(nome) {
        elements.inputNome.should('be.visible').type(nome);
    }

    preencherCPF(cpf) {
        elements.inputCPF.type(cpf);
    }

    selecionarGenero(genero) {
        elements.selectGenero.click();
        cy.get('mat-option').contains(genero).click();
    }

    preencherNascimento(data) {
        elements.inputNascimento.type(data);
    }

    selecionarCorRaca(corRaca) {
        elements.selectCorRaca.click();
        cy.get('mat-option').contains(corRaca).click();
    }

    marcarResponsavel() {
        elements.checkboxResponsavel.click();
    }

    confirmarAdicaoMembro() {
        elements.botaoAdicionar.click();
    }

    finalizarCadastroFamilia() {
        elements.botaoCadastrar.click();
    }

    botaoSelecionarCaledario(){
        elements.selecionarCalendario.click();
    }

    botaoselecionarAno(){
        elements.selecionaAno.click();
    }

    botaoselecionarMes(){
        elements.selecionaMes.click();
    }

    botaoselecionarDia(){
        elements.selecionarDia.click();
    }

    verificaFiltroAplicado(itemText) {
        elements.textoFiltro.should('contain', itemText)
    }

}



export default new AcolhidosFiltros()