
/**
 * Created by bsingh on 12/13/2016.
 */
import * as constants from './../constants/Constants'

const loginUserReducer = (state = { firstName: 'Welcome!',lastName: 'Test',formData: '' }, action) => {
    
    switch (action.type) {
         case constants.LOGIN_USER:
            //console.log('Reducer: hello user ')
            return  { firstName: 'Welcome! , '+action.userName +'!',lastName: 'Last Name' }
      
        default:
            return state
    }
}



export default loginUserReducer