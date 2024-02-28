import inicio from "../../../support/pages/inicio"
import login from "../../../support/pages/login"
import url from "../../../support/util/url"

describe("DOC-02 Tentativa de logar com senha inválida", () => {
  it("Login inválido", () => {
    inicio.accessInicio()
    inicio.clicarBotaoEntrar()
    login.loginSenhaInvalida()
    url.naoEstaEmDashboard()
    login.contemAvisoSenhaInvalida()
  })
})