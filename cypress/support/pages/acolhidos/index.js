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

}

export default new AcolhidosFiltros()