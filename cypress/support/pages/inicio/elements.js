class Elements {
  
    get botaoEntrar() {
        return cy.contains("Entrar");
    }
    
    get menuLateral() {
        return cy.get('.fuse-vertical-navigation-content')
    }

    get botaoContatosUteis() {
        return cy.get('.fuse-vertical-navigation-content').contains("Contatos úteis")
    }

    get botaoAbrigos() {
        return cy.get('.fuse-vertical-navigation-content').contains("Abrigos")
    }

    get botaoEducacaoAmbiental() {
        return cy.get('.fuse-vertical-navigation-content').contains("Educação Ambiental")
    }

    get botaoSobre() {
        return cy.get('.fuse-vertical-navigation-content').contains("Sobre")
    }
}

export default new Elements()