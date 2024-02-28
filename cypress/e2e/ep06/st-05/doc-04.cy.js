import general from "../../../support/general";
import acolhidos from "../../../support/pages/acolhidos";
import navigation from "../../../support/util/navigation";

describe('doc-04 Filtros acolhidos', () => {
    it('Teste de alteração filtro acolhidos', () => {
        
        general.loginProcedure()
        
        navigation.toAcolhidos()

        const filtros = ['obitos', 'desaparecidos', 'perdaDeRenda', 'agravoDeSaude', 'pcd'];

        // Loop para iterar sobre os filtros
        filtros.forEach((filtro, indice) => {

            // Clique no botão de filtro
            acolhidos.clicarFiltroAcolhidos()

            // Interceptação da requisição com o filtro atual
            cy.intercept('GET', `https://acolhebe-disciplina.innovagovlab.org/api/v1/family?personSituation=${filtro}&query=&page=0&size=25`).as('getFilters');

            // Seleciona o mat-radio-button correspondente ao índice do filtro
            acolhidos.clicarfiltroAcolhidosOpcaoX(indice)

            // Aguarda a interceptação da requisição
            cy.wait('@getFilters');
        });


    })
})
