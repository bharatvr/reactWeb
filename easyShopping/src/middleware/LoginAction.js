
import * as constants from './../constants/Constants'


/**
 * Logs an user in
 * @param  {string} username The username of the user to be logged in
 * @param  {string} password The password of the user to be logged in
 */
export function loginUser( userName, password ) {
    
    return {
        type: constants.LOGIN_USER,
        userName
    }
}

