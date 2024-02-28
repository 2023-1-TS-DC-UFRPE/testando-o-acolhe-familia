import general from "../../../support/general"
import abrigo from "../../../support/pages/abrigo"
import inicio from "../../../support/pages/inicio"
import login from "../../../support/pages/login"
import navigation from "../../../support/util/navigation"
import url from "../../../support/util/url"

describe('DOC-12 Falha na edição por campo obrigatório incorreto.', () => {
    it("Abrigos - Verificar mensagem de erro ao digitar um email inválido", () => {

        general.loginProcedure()
        
        navigation.toShelter()

        abrigo.acessarInformacoes()

        abrigo.clicarBotaoEditar()

        abrigo.digitarEmailInvalidoEDesfocar()

        abrigo.verificaMostrouErroEmailInvalido()
        
    })
})