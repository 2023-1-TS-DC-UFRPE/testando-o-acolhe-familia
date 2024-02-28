import environment from "../../../../environment";
import LoginPageElements from "./elements";

class login { 
    
    loginIntoTheSystem() {
        // Email input
        LoginPageElements.inputEmail.type(environment.username)
        // Password input
        LoginPageElements.inputPassword.type(environment.password, { log: false })
        // Login/Entrar button
        LoginPageElements.botaoEntrar.click()
    }

    loginSenhaInvalida() {
        // Email input
        LoginPageElements.inputEmail.type(environment.username)
        // Password input
        LoginPageElements.inputPassword.type("Anything that is not a correct password", { log: false })
        // Login/Entrar button
        LoginPageElements.botaoEntrar.click()
    }

    contemAvisoSenhaInvalida() {
        cy.contains("E-mail ou senha inválidos")
    }
}

export default new login()