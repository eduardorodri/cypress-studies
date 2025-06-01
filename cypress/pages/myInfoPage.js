class MyInfoPage {

    selectorList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            gerenicField: ".oxd-input--active",
            gerenicDate: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            selectBox: ".oxd-radio-input",
            selectField: "[tabindex='0']",
            firstComboBox: ".oxd-select-dropdown > :nth-child(9)",
            secondComboBox: ".oxd-select-dropdown > :nth-child(4)",
            thirdComboBox: ".oxd-select-dropdown > :nth-child(3)",
            submitButton: "[type='submit']",
        } 
        return selectors
    }
    personalDetails(firstName, lastName, nickName, employeeId, otherId, licenseId) {
        cy.get(this.selectorList().firstNameField).clear().type(firstName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)
        cy.get(this.selectorList().gerenicField).eq(3).clear().type(nickName) //nickname é um campo que só aparece as vezes nos testes
        cy.get(this.selectorList().gerenicField).eq(4).clear().type(employeeId)
        cy.get(this.selectorList().gerenicField).eq(5).clear().type(otherId)
        cy.get(this.selectorList().gerenicField).eq(6).clear().type(licenseId)
        //cy.get(this.selectorList().gerenicField).eq(8).clear().type("NOT") somente um teste de campo generico
    }
    dataDetails(driveLicenseDate, birthDate) {
        cy.get(this.selectorList().gerenicDate).eq(0).clear().type(driveLicenseDate)
        cy.get(this.selectorList().dateCloseButton).click()
        cy.get(this.selectorList().gerenicDate).eq(1).clear().type(birthDate)
        cy.get(this.selectorList().dateCloseButton).click()
    }
    selectComboBox() {
        cy.get(this.selectorList().selectField).eq(0).click()
        cy.get(this.selectorList().firstComboBox).click()
        cy.get(this.selectorList().selectField).eq(1).click()
        cy.get(this.selectorList().secondComboBox).click()
        cy.get(this.selectorList().selectField).eq(2).click()
        cy.get(this.selectorList().thirdComboBox).click()
    }
    genderCheck() {
        cy.get(this.selectorList().selectBox).eq(0).click() //mudar genero, escolha entre 0 e 1 no eq
    }
    saveButton() {
        cy.get(this.selectorList().submitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated') // Funcionara de ambas as formas, essa e a de baixo!
        cy.get('.oxd-toast-close')
        cy.get(this.selectorList().submitButton).eq(1).click()
    }
}

export default MyInfoPage