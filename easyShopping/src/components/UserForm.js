import React from 'react'
import { connect } from 'react-redux'
import {addName} from './../actions/helloWorldAction'

const UserForm = ({ dispatch }) => {
    let combineText
    let inputFirstName
    let inputLastName

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                combineText=inputFirstName.value+" "+inputLastName.value
               
                if (!combineText.trim()) {
                    combineText='Please Enter Name'
                }
                dispatch(addName(combineText))
              
            }}>
                <p>
                First Name: <input ref={node => {
                    inputFirstName = node
                }} />
                </p>
                <p>
                Last Name: <input ref={node => {
                    inputLastName = node
                }} />
                </p>
                <p>
                <button type="submit">
                    Hello User
                </button>
                </p>
            </form>
        </div>
    )
}
const HelloUser = connect()(UserForm)

export default HelloUser