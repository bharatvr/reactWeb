/**
 * Created by bsingh on 12/13/2016.
 */
import { connect } from 'react-redux'
import * as actions from './../actions/helloWorldAction'
import login from './../components/account/login/Login'


const mapStateToProps = ( state, ownProps ) => {
    return {
        message: state.loginUserReducer.loginUserName

    }
}


const LoginContainer = connect(
    mapStateToProps
)( login )

export default LoginContainer