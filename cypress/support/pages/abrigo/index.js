import elements from "./elements";

class abrigo {
    acessarInformacoes() {
        elements.informacoes.click({ force: true })
    }

    clicarBotaoEditar() {
        elements.botaoEditar.click()
    }

    digitarEmailInvalidoEDesfocar() {
        elements.inputEmail.clear().type('email-invalido@').blur();
    }

    verificaMostrouErroEmailInvalido() {
        elements.campoErroInputEmail.should('exist').and('be.visible');
    }

    checaConteudo() {
        cy.contains("Abrigos")
    }

    verificaTabelaMin3Abrigos() {
        elements.tabelaAbrigos.should('have.length.be.gte', 3)
    }

    
}

export default new abrigo()