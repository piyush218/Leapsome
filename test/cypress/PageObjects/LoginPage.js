class Login {


        varEmailId ="#username";
        varPassword="#password";
        varLoginButton= ':nth-child(4) > .flex';
        


    setUsername(username){
        cy.get(this.varEmailId).type(username)
    }

    setPassword(password){
        cy.get(this.varPassword).type(password)
    }

    clickSubmit(){
        cy.get(this.varLoginButton).click()
    }
   

}
export default Login;

