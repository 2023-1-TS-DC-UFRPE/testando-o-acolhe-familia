import general from "../../../support/general"
import dashboard from "../../../support/pages/dashboard"
import navigation from "../../../support/util/navigation"
import url from "../../../support/util/url"

Cypress.Commands.add('clickItemNavigateAndVerifyFilter', (itemText) => {
    dashboard.clicaItemFiltro(itemText)
    url.estaEmAbrigados()
    navigation.toDashboard()
})
describe('DOC-10 Dashboard (Painela de visualização): Campos do painel clicáveis em situação moradia ', ()=>{
    it('Login & Teste de filtro encontrados no dashboard sobre Moradias', () => {
        // Acessar a plataforma
        general.loginProcedure()

        // Clicar no item e verificar se o filtro foi aplicado

        cy.clickItemNavigateAndVerifyFilter('Parcialmente inábitavel')
        cy.clickItemNavigateAndVerifyFilter('Completamente inábitavel')
        cy.clickItemNavigateAndVerifyFilter('Habitável, mas precisa de reparos')



    })
})