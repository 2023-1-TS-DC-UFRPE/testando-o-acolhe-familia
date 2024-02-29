import general from "../../../support/general";
import acolhidos from "../../../support/pages/acolhidos";
import abrigo from "../../../support/pages/abrigo";
import navigation from "../../../support/util/navigation";

describe('Cadastro da família em abrigo ativo', () => {
    it('Navegar para Acolhidos e adicionar uma nova família', () => {
        // Realiza o procedimento de login no sistema
        general.loginProcedure();

        // Navega para a página do abrigo
        navigation.toShelter();

        // Intercepta a requisição de carregamento das famílias e aguarda sua conclusão
        acolhidos.interceptBotaoAcolhidos();

        // Clica na aba "Acolhidos" para visualizar os acolhidos
        acolhidos.clicarBotaoAcolhidos();

        // Aguarda a requisição das famílias ser completada
        acolhidos.aguardarFamiliasCarregarem();

        // Inicia o processo de adição de uma nova família
        acolhidos.iniciarAdicaoFamilia();

        // Preenche o campo de CEP
        acolhidos.preencherCEP('01001000');

        // Preenche o campo de número da residência
        acolhidos.preencherNumero('1234');

        // Seleciona a opção "A Moradia foi Atingida?" e escolhe a primeira opção disponível
        acolhidos.selecionarMoradiaAtingida();

        // Adiciona um membro à família
        acolhidos.adicionarMembroFamilia();

        // Preenche o nome do membro da família
        acolhidos.preencherNome('Vicente');
        acolhidos.preencherCPF('75054261095');
        acolhidos.selecionarGenero('Masculino');
        acolhidos.botaoSelecionarCaledario();
        acolhidos.botaoselecionarAno();
        acolhidos.botaoselecionarMes();
        acolhidos.botaoselecionarDia();
        acolhidos.selecionarCorRaca('Branca');
        acolhidos.marcarResponsavel();
        acolhidos.confirmarAdicaoMembro();
        acolhidos.finalizarCadastroFamilia();
    
    });
});
