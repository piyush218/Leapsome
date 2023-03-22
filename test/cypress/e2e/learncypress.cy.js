import Login from "../PageObjects/LoginPage"
import user from '../fixtures/userdetails.json'
import locators from '../fixtures/locators.json'
import env from '../fixtures/environmentdetails.json'
import expecteddata from '../fixtures/expecteddata.json'

describe('Leapsome Test Case ',() => {

    beforeEach(function(){
        cy.visit(env.LocalHost)
    })

    it ('Login Test ',function(){
       
        const loginpage = new Login
        loginpage.setUsername(user.username);
        loginpage.setPassword(user.password);
        loginpage.clickSubmit();  
        cy.url().should('contain',expecteddata.EXPECTED_SIGNEDIN_URL);
        cy.get(locators.SIGNOUT).should('have.text',expecteddata.EXPECTED_SIGNED_OUT_TEXT);
    })  


    it ('Feedback Wall Test ',function(){
       
        const loginpage = new Login
        loginpage.setUsername(user.username);
        loginpage.setPassword(user.password);
        loginpage.clickSubmit();    
        cy.get(locators.BADGE).should('have.text',expecteddata.BADGE_TEXT);
        cy.get(locators.FEEDBACK_WALL).should('have.text',expecteddata.FEEDBACK_WALL);
        // cy.get('a >.w-6').click(); 
    }) 

    it ('Create new Feedback',function(){
        const loginpage = new Login
        loginpage.setUsername(user.username);
        loginpage.setPassword(user.password);
        loginpage.clickSubmit();    
        cy.get(locators.CREATE_FEEDBACK).click(); 
        cy.get(locators.TITLE).type('Test Title');
        cy.get(locators.FEEDBACK_FIELD).type('Piyush Jha is trying to give feedback')
        cy.get(locators.USER_DROPDOWN).select('jane')
        cy.get(locators.SUBMIT_FEEDBACK).click();
        cy.get(locators.WALL_FEEDBACKS).contains(expecteddata.EXPECTED_WALL_FEEDBACK)
    
    }) 
    it ('Logout Test ',function(){
       
        const loginpage = new Login
        loginpage.setUsername(user.username);
        loginpage.setPassword(user.password);
        loginpage.clickSubmit();    
        cy.get(locators.SIGNOUT).click(); 
        
    })  
    }
)

/*
E2E Test 

1. Login Test
2. Feedback Wall Test
3. Create Feedback Test
4. Logout Test


*/