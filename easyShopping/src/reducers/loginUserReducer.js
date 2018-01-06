
/**
 * Created by bsingh on 12/13/2016.
 */
import * as constants from './../constants/Constants'

const loginUserReducer = (state = { message: 'Please enter login Id and password!',lastName: 'Test',formData: '' }, action) => {
    
    console.log('Login action'+action.type)
    
    switch (action.type) {
         case constants.LOGIN_USER:
            console.log('Reducer: hello user ')
            return  { message: 'Welcome! , '+action.userName +'!',lastName: 'Last Name' }
            
         case constants.REQUEST_POSTS:
            
             return  { message: 'Welcome! , '+action.userName +'!',lastName: 'Last Name' }
             
         case constants.RECEIVE_POSTS:
             console.log('Reducer: hello user ')
             return  { message: 'Welcome! , '+action.userName +'!',lastName: 'Last Name' }
             
      
        default:
            return state
    }
}



export default loginUserReducer