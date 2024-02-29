import general from "../../support/general"
import voluntarios from "../../support/pages/voluntarios"
import navigation from "../../support/util/navigation"

describe('EXP-10 CPF Voluntario', () => {
  it('Teste de alteração de CPF voluntário', () => {
    general.loginProcedure()

    navigation.toVolunteers()
    voluntarios.clicarBotaoEditarPrimeiroVoluntario()

    voluntarios.limpaEDigitaCPFEXistente()

    voluntarios.clicaBotaoAtualizar()

    voluntarios.checaContemErroAtualizacao()
    
  })
 })
