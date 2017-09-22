/**
 * Created by bsingh on 08/21/2017.
 */
import React from 'react'
import { Field } from 'redux-form'
import { connect } from 'react-redux'
import {loginUser}  from './../../../middleware/LoginAction'
import {addName} from './../../../actions/helloWorldAction'



const LoginForm = ({ dispatch }) => {
     let loginId
     let password

    return (

               <form onSubmit={e => {                              
                dispatch(addName(loginId.value))
              
            }}>
                
                <table className="_loginFormTable">
                    <tr>
                        <td><label>Login Id</label></td>


                        <td>
                           <input type ='text' ref={node => {
                               loginId = node
                     }} />
                        </td>
                    </tr>
                    <tr>
                        <td><label>Password</label></td>


                        <td>
                            <input type='password' ref={node => {
                                password = node
                     }} />
                        </td>
                    </tr>

                    <tr>
                        <td>&nbsp;</td>
                        <td>
                            <button type="submit" className="_myButton">
                                Sign&nbsp;in
                            </button>
                        </td>
                    </tr>
                    <tr>

                        <td colSpan={2}>
                            <br /> <a className="_aHref" href="#">Click Here</a><span className="_spanFormatter"> here for forget password</span>
                        </td>
                    </tr>

                    <tr>
                        <td colSpan="2">
                            <h4 className="divider">
                                <span>Are You New User?</span>
                            </h4>
                        </td>
                    </tr>

                    <tr>
                        <td>&nbsp;</td>
                        <td>
                            <button type="submit" className="_myButton">&nbsp;Create&nbsp;Your&nbsp;Account</button>
                        </td>
                    </tr>
                </table>

            </form>
        )
    }



const LoginComponent = connect()(LoginForm)


export default LoginComponent