/**
 * Created by bsingh on 12/13/2016.
 */
import * as constants from './../constants/Constants'

const helloWorldReducer = (state = { firstName: 'Bharat',lastName: 'Test',formData: '' }, action) => {
    
    switch (action.type) {
        case constants.HELLO_WORLD:
            //console.log('Reducer: helloWorld')
            return  { firstName: 'Hello , World!' }
        case constants.HELLO_REACT:
            //console.log('Reducer: hello React ')
              return  { firstName: 'Hello sadcsd, React!' }
        case constants.ADD_NAME:
            //console.log('Reducer: hello user ')
            return  { firstName: 'Hello, '+action.text +'!',lastName: 'Last Name' }
        case constants.SUBMIT_FORM:
            //console.log('Reducer: Submit Form '+action.values)
            return  { formData: action.values}
        case constants.CONTACT_PAGE:
            //console.log('Reducer: Contact Page Form '+action.contactDetails)
            return  { firstName: 'Hello , '+JSON.stringify(action.contactDetails) }
        default:
            return state
    }
}



export default helloWorldReducer