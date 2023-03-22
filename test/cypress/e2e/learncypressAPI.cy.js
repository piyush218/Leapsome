import Login from "../PageObjects/LoginPage"
import user from '../fixtures/userdetails.json'
import locators from '../fixtures/locators.json'
import env from '../fixtures/environmentdetails.json'
import expecteddata from '../fixtures/expecteddata.json'
import requestbody from '../fixtures/requestbody.json'



describe('Leapsome API Test Case ',() => {

    it ('API Feedback Test or Post Call',function(){
       
        cy.request ({
            method :'POST',
            url : "localhost:3022/feedback",
            headers :{
                'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3OTI4MzUyNCwiZXhwIjoxNjgxODc1NTI0LCJpc3MiOiJsZWFwc29tZSJ9.EN4XRMTYcS63gxo1jsYva3Zrftw-MlrUDZPXU_CK1zI'
            },
            body : 
            {
                "id": requestbody.id,
                "title": requestbody.title,
                "body": requestbody.body,
                "author":requestbody.author,
                "receiver":requestbody.receiver
            }
            
        }).then ((res)=>{
            expect (res.status).to.eq(200)
            expect (res.body).has.property('title',requestbody.title)
            expect (res.body).has.property('body',requestbody.body)


        })
       
    })  
    // Passing without bearer token//
    it ('API Feedback Test or Post Call Negative flow',function(){
       
        cy.request ({
            method :'POST',
            url : "localhost:3022/feedback",
            failOnStatusCode: false,
            headers :{
                'Authorization' : 'Bearer '
            },
            body : 
            {
                "id": requestbody.id,
                "title": requestbody.title,
                "body": requestbody.body,
                "author":requestbody.author,
                "receiver":requestbody.receiver
            }
            
        }).then ((res)=>{
            expect (res.status).to.eq(401)
        })
       
    })  


}
  
)

/*
API Post Call 
1. API Post Call or Create Feedback with positive flow (valid token)
2. API Post Call or Create Feedback with Negative flow (invalid token)
*/