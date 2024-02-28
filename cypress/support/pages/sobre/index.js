class sobre {
    checaConteudo() {
        cy.contains("Sobre")

        // Verifica se os parceiros são citados
        cy.contains('InnovaGovLab')
        cy.contains('UFRPE')
        cy.contains('FACEPE')
        cy.contains('SECTI-PE')
        cy.contains("Defesa Civil-PE")
        cy.contains('SEAS-Olinda')
        cy.contains('CUFA-PE')
    }
}

export default new sobre()