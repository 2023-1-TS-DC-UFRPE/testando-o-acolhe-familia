import general from '../../../support/general.js'
import navigation from '../../../support/util/navigation.js'
import acolhidos from '../../../support/pages/acolhidos/index.js'

describe('DOC-06 Verificar filtros combinados no menu de Acolhidos', () => {
    it('Login & Teste de filtro combinados na página de Acolhidos', () => {
        // Acessar a plataforma
        general.loginProcedure()

        // Interceptar a requisição para a página de Acolhidos
        cy.intercept('GET', 'https://acolhebe-disciplina.innovagovlab.org/api/v1/family?familySituation=habitavelComReparos&personSituation=agravoDeSaude&query=&page=0&size=25')
        .as('getFilters')

        // Acessar a página de Acolhidos
        navigation.toAcolhidos()

        // Clicar no filtro Família para abrir as opções
        acolhidos.clicarFiltroFamilia()

        // Selecionar uma opção no .eq() para criar o filtro e visualiar a atualização do filtro
        acolhidos.clicarFiltroFamiliaOpcao()

        // Clicar no filtro Acolhidos para abrir as opções
        acolhidos.clicarFiltroAcolhidos()

        acolhidos.clicarFiltroAcolhidosOpcao()

        // Espera pela requisição ser feita completamente
        cy.wait('@getFilters')

        // Clicar na caixa de texto e pesquisar por nome de pessoa
        acolhidos.pesquisarPessoa()
    })
})