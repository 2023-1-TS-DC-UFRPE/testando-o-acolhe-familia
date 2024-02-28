class LoginPageElements {

    get inputEmail() {
        return cy.get('#email')
    }

    get inputPassword() {
        return cy.get('#password')
    }

    get botaoEntrar() {
        return cy.contains("Entrar")
    }
}

export default new LoginPageElements()