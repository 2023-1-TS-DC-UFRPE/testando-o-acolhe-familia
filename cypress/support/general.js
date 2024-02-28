import inicio from "./pages/inicio"
import login from "./pages/login"
import navigation from "./util/navigation"
import url from "./util/url"

class general {
    loginProcedure() {
        navigation.toInicio()
        inicio.clicarBotaoEntrar()
        login.loginIntoTheSystem()
        url.estaEmDashboard()
    }
}

export default new general()