import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Login Orange HRM tests', () => {

  it('Login - Fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkLoginFail()
  })

  it('Login - Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
  })
})