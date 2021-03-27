import React from 'react'
import firebase from "firebase/app";
import "firebase/auth";
import app from '../firebase';
import { useHistory } from "react-router-dom"
import { FacebookLoginButton } from "react-social-login-buttons";


function Facebook() {

 const history = useHistory()


    if (!firebase.apps.length) {
        firebase.initializeApp(app);
      }

     async function  handleLogin() {
     
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;
            console.log(user);
            history.push("/")

          })
          .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
 
          });
      }

    return (
        <div>
            <br/> 
            <FacebookLoginButton onClick={handleLogin}>
       <span>Se connecter avec Facebook</span>
</FacebookLoginButton>
            
        </div>
    )
}

export default Facebook




