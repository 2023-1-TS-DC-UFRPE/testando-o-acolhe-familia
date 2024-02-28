class contatosUteis {
    checaContatosUteisPresentes() {
        cy.contains("Defesa Civil de Pernambuco")
        cy.contains("Secretaria de Desenvolvimento Social e Direitos Humanos de Olinda/PE")
    }
}

export default new contatosUteis()