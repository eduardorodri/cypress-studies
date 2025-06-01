import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

import dayjs from 'dayjs'
const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()



describe('Orange HRM tests', () => {

  it('User Info Update - Success', () => {
    const dataDeInicio = dayjs(chance.date({ year: 2024 })).format('YYYY-DD-MM')
    const dataDeNascimento = dayjs(chance.birthday({ type: 'adult' })).format('YYYY-DD-MM')

    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.acessMenu()
    myInfoPage.personalDetails(chance.first(), chance.last(), chance.bb_pin(), chance.fbid(), chance.ssn())
    myInfoPage.dataDetails(dataDeInicio, dataDeNascimento)
    myInfoPage.selectComboBox()
    myInfoPage.genderCheck()
    myInfoPage.saveButton()
  })

})