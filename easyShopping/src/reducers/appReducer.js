import { combineReducers } from 'redux'
import helloWorldReducer from './helloWorldReducer'
import loginUserReducer from './loginUserReducer'

import { reducer as formReducer } from 'redux-form'

const appReducer = combineReducers({
    helloWorldReducer,
    loginUserReducer,
    form: formReducer
    
})

export default appReducer
