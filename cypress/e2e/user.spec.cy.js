import userData from '../fixtures/users/userData.json'

describe('Orange HRM tests', () => {

  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredencialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    gerenicField: ".oxd-input--active",
    gerenicDate: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    selectField: "[tabindex='0']",
    firstComboBox: ".oxd-select-dropdown > :nth-child(9)",
    secondComboBox: ".oxd-select-dropdown > :nth-child(4)",
    thirdComboBox: ".oxd-select-dropdown > :nth-child(7)",
    selectBox: ".oxd-radio-input"
  }


  it.only('User Info Update - Success', () => {
    cy.visit('auth/login')
    cy.get(selectorList.usernameField).type(userData.userSucess.username)
    cy.get(selectorList.passwordField).type(userData.userSucess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type("FirstNameTest")
    cy.get(selectorList.lastNameField).clear().type("LastNameTest")
    //cy.get(selectorList.gerenicField).eq(3).clear().type("Nickname")
    cy.get(selectorList.gerenicField).eq(4).clear().type("9070")
    cy.get(selectorList.gerenicField).eq(5).clear().type("2437")
    cy.get(selectorList.gerenicField).eq(6).clear().type("17009118")

    cy.get(selectorList.gerenicDate).eq(0).clear().type('2020-07-13')
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.gerenicDate).eq(1).clear().type("2005-06-14")
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.selectBox).eq(1).click()

    cy.get(selectorList.selectField).eq(0).click()
    cy.get(selectorList.firstComboBox).click()
    cy.get(selectorList.selectField).eq(1).click()
    cy.get(selectorList.secondComboBox).click()
    cy.get(selectorList.selectField).eq(2).click()
    cy.get(selectorList.thirdComboBox).click()

    cy.get(selectorList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated') //- Funcionara de ambas as formas, essa e a de baixo!
    cy.get('.oxd-toast-close')
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredencialAlert)
  })
})