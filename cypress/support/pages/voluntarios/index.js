import elements from "./elements"

class voluntarios {
    clicarBotaoEditarPrimeiroVoluntario() {
        elements.botaoEditarPrimeiroVoluntario.click({ force: true })
    }

    limpaEDigitaCPFEXistente() {
        elements.inputCPF.clear().type("698.195.864-37")
    }

    clicaBotaoAtualizar() {
        elements.botaoAtualizar.click()
    }

    checaContemErroAtualizacao() {
        cy.contains("Erro ao atualizar.")
    }
}

export default new voluntarios()