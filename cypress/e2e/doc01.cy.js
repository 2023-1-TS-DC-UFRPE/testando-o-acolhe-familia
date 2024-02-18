describe('DOC-01 Página inicial do sistema', () => {
  it("Página Inicial", () => {
    cy.visit('/')
    
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
  })

  it("Contatos úteis", () => {
    cy.visit('/')

    // Clica no link de contatos úteis
    cy.get('.fuse-vertical-navigation-content').within(() => {
      cy.contains("Contatos úteis").click()
    })
    cy.url().should('include', '/contatos-uteis')

    // Verifica se os contatos úteis estão presentes
    cy.contains("Defesa Civil de Pernambuco")
    cy.contains("Secretaria de Desenvolvimento Social e Direitos Humanos de Olinda/PE")
  })

  it("Abrigos", () => {
    cy.visit('/')

    // Clica no link de abrigos
    cy.get('.fuse-vertical-navigation-content').within(() => {
      cy.contains("Abrigos").click()
    })
    cy.url().should('include', '/abrigos')
    cy.contains("Abrigos")

    // Verifica se tem no mínimo 3 abrigos
    cy.get('.shelters').within(() => {
      cy.get('.card').should('have.length.be.gte', 3)
    })
  })

  it("Educação Ambiental", () => {
    cy.visit('/')

    // Clica no link de educação ambiental
    cy.get('.fuse-vertical-navigation-content').within(() => {
      cy.contains("Educação Ambiental").click()
    })
    cy.url().should('include', '/educacao-ambiental')
    cy.contains("Educação Ambiental")
  })

  it("Sobre", () => {
    cy.visit('/')

    // Clica no link de sobre
    cy.get('.fuse-vertical-navigation-content').within(() => {
      cy.contains("Sobre").click()
    })
    cy.url().should('include', '/sobre')
    cy.contains("Sobre")

    // Verifica se os parceiros são citados
    cy.contains('InnovaGovLab')
    cy.contains('UFRPE')
    cy.contains('FACEPE')
    cy.contains('SECTI-PE')
    cy.contains("Defesa Civil-PE")
    cy.contains('SEAS-Olinda')
    cy.contains('CUFA-PE')
  })

  it('Login', () => {
    cy.visit('/')

    // Auth Flow
    // Entrar button
    cy.contains("Entrar").click()
    // Email input
    cy.log("Realizando o login, por favor verifique se o usuário e senha estão configurados corretamente no arquivo cypress.env.json.")
    cy.get('#email').type(Cypress.env('viewer_user_email'))
    // Password input
    cy.get('#password').type(Cypress.env('viewer_user_password'), { log: false })
    // Login/Entrar button
    cy.contains("Entrar").click()

    cy.url().should('include', '/dashboard')

    cy.getAllLocalStorage()
      .its('https://acolhe-disciplina.innovagovlab.org')
      .should('have.keys', ['accessToken'])
  })
})