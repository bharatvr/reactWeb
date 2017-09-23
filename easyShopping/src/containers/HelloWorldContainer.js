/**
 * Created by bsingh on 09/20/2017.
 */
import { connect } from 'react-redux'
import * as actions from './../actions/helloWorldAction'
import home from './../components/home/Home'


const mapStateToProps = (state, ownProps) => {
    return {
        message: state.helloWorldReducer.firstName
      
    }
}

const mapDispatchToProps =  ({
    onClickHelloWorld: actions.addHelloWorld,
    onClickHelloReact: actions.addHelloReact
})

const HelloWorldContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(home)

export default HelloWorldContainer