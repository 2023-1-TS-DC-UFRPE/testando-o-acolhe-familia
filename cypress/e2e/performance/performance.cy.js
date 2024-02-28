import navigation from "../../support/util/navigation"
// const { default: navigation } = require("../../support/util/navigation");

describe("Teste de desempenho", () => {
    it("Executar teste de performance com Google Lighthouse", () => {
        navigation.toInicio();
        cy.lighthouse(
            {
                performance: 90,
                accessibility: 90,
                "best-practices": 90,
                seo: 90,
                pwa: 90,
            },
        );
    });
});