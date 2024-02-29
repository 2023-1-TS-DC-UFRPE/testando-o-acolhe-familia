class elements {
    itemFilterDashboard(itemText) {
        return cy.contains(itemText)
    }
}

export default new elements()