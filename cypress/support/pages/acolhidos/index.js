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
}

export default new AcolhidosFiltros()