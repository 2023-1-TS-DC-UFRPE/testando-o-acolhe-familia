import general from "../../../support/general"
import abrigo from "../../../support/pages/abrigo"
import contatosUteis from "../../../support/pages/contatos-uteis"
import educacaoAmbiental from "../../../support/pages/educacao-ambiental"
import inicio from "../../../support/pages/inicio"
import login from "../../../support/pages/login"
import sobre from "../../../support/pages/sobre"
import navigation from "../../../support/util/navigation"
import url from "../../../support/util/url"

describe('DOC-01 Página inicial do sistema', () => {
  it("Página Inicial", () => {
    navigation.toInicio()
    inicio.checaConteudo()
  })

  it("Contatos úteis", () => {
    navigation.toInicio()

    inicio.clicaContatosUteis()

    url.estaEmContatosUteis()

    contatosUteis.checaContatosUteisPresentes()
  })

  it("Abrigos", () => {
    navigation.toInicio()

    inicio.clicaAbrigos()
    url.estaEmAbrigos()
    abrigo.checaConteudo()

    abrigo.verificaTabelaMin3Abrigos()
  })

  it("Educação Ambiental", () => {
    navigation.toInicio()

    inicio.clicaEducacaoAmbiental()
    url.estaEducacaoAmbiental()
    educacaoAmbiental.checaConteudo()
  })

  it("Sobre", () => {
    navigation.toInicio()
    inicio.clicaSobre()
    url.estaEmSobre()
    sobre.checaConteudo()
  })

  it('Login', () => {
    general.loginProcedure()
  })
})