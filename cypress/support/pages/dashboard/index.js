import elements from "./elements"

class dashboard {
    clicaItemFiltro(itemText) {
        elements.itemFilterDashboard(itemText).click()
    }
}

export default new dashboard()