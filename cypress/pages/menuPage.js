class MenuPage {
    selectorList () {   
        const selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            adminButton: "[href='/web/index.php/admin/viewAdminModule']",
        }
        return selectors
    }
        acessMenu() {
            //cy.get(this.selectorList().adminButton).click()
            cy.get(this.selectorList().myInfoButton).click()
            
        }
}

export default MenuPage