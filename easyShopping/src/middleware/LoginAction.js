
import * as constants from './../constants/Constants'
import fetch from 'isomorphic-fetch'
import { browserHistory } from 'react-router';
//import axios from 'axios'


/**
 * Logs an user in
 * @param  {string} username The username of the user to be logged in
 * @param  {string} password The password of the user to be logged in
 */
export function loginUser( userName, password ) {

    return function( dispatch ) {
        dispatch( requestPosts( userName ) )

           let options = {
            'method': 'GET',
            'contentType': "application/json; charset=utf-8",                
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'content-type': 'application/json;charset=UTF-8'
                //'Accept': 'application/json, application/xml, text/plain, text/html, *.*'
                }
        }

        let targetUrl = 'http://127.0.0.1:8090/SurveyRestAPI/question'
         let testUrl='http://ip.jsontest.com'
       
             return fetch( targetUrl,options)
            .then( response => response.json() )
            .then( json => dispatch( receivePosts( userName, json ) ) )


    }

}

export function requestPosts( userName ) {
   
    return {
        type: constants.REQUEST_POSTS,
        userName
    }
}

export function receivePosts( userName, json ) {
    
    console.log('inside response '+json)
    return {
        type: constants.RECEIVE_POSTS,
        userName,
        responseData: json
    }
}



