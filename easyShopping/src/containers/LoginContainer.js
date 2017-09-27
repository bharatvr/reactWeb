/**
 * Created by bsingh on 09/20/2017.
 */
import { connect } from 'react-redux'
import * as actions from './../actions/helloWorldAction'
import login from './../components/account/login/Login'


const mapStateToProps = (state, ownProps) => {
    return {
        message: state.loginUserReducer.firstName
      
    }
}

const mapDispatchToProps =  ({
    onClickHelloWorld: actions.addHelloWorld,
    onClickHelloReact: actions.addHelloReact
})

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)

(login)

export default LoginContainer