/**
 * Created by bsingh on 12/13/2016.
 */
import * as constants from './../constants/Constants'

const loginUserReducer = (state = { loginUserName: 'Default',formData: '' }, action) => {
    
    switch (action.type) {
      
       case constants.LOGIN_USER:          
        return  { loginUserName: 'Login User '+action.userName +'!'}
       
       case constants.SUBMIT_FORM:
       return  { formData: action.values}
       
        default:
            return state
    }
}



export default loginUserReducer