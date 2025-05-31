class LoginPage {
    selectorList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredencialAlert: "[role='alert']",
        }
        return selectors
    }
    acessLoginPage() {
        cy.visit('auth/login')
    }
    loginWithUser(username, password) {
        cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().loginButton).click()
    
    }
    checkLoginFail() {
        cy.get(this.selectorList().wrongCredencialAlert).should('contain', 'Invalid credentials')
    }
}

export default LoginPage