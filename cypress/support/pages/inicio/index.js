import elements from "./elements"
import Elements from "./elements"


class Inicio { 

    accessInicio() {
        cy.visit('/')
    }
    
    clicarBotaoEntrar() {
        Elements.botaoEntrar.click()
    }

    checaConteudo() {
        // Verifica se o título da página é o esperado
        cy.title().should('eq', 'Acolhe')
        // Verifica se o texto "Acolhe" está presente na página
        cy.contains('ACOLHE')
        // Verifica se o texto "Entrar" está presente na página
        cy.contains('Entrar')
        // Verifica se o texto "Saiba mais" está presente na página
        cy.contains("Saiba mais")

        // Verifica se contém a definição do Acolhe
        cy.contains("sistema de apoio ao acolhimento do cidadão em áreas de risco em situações de emergências")

        // Verifica se os parceiros são citados
        cy.contains('InnovaGovLab')
        cy.contains('UFRPE')
        cy.contains('FACEPE')
        cy.contains('SECTI-PE')
        cy.contains("Defesa Civil-PE")
        cy.contains('SEAS-Olinda')
        cy.contains('CUFA-PE')
    }

    clicaContatosUteis() {
        elements.botaoContatosUteis.click()
    }

    clicaAbrigos() {
        elements.botaoAbrigos.click()
    }

    clicaEducacaoAmbiental() {
        elements.botaoEducacaoAmbiental.click()
    }

    clicaSobre() {
        elements.botaoSobre.click()
    }
}

export default new Inicio()