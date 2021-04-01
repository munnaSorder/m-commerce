import { firebase } from '@firebase/app'
import "firebase/auth";
import { firebaseConfig } from '../../firebase.config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

export const googleLoginWithPopup = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    // /** @type {firebase.auth.OAuthCredential} */
    // var credential = result.credential;

    // // This gives you a Google Access Token. You can use it to access the Google API.
    // var token = credential.accessToken;
    // // The signed-in user info.
    // var user = result.user;
    // ...
    console.log(result);
  }).catch((error) => {
    // Handle Errors here.
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // // The email of the user's account used.
    // var email = error.email;
    // // The firebase.auth.AuthCredential type that was used.
    // var credential = error.credential;
    // ...
    console.log(error);
  });

}

export const logInWithFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    // /** @type {firebase.auth.OAuthCredential} */
    // var credential = result.credential;

    // // The signed-in user info.
    // var user = result.user;

    // // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    // var accessToken = credential.accessToken;

    // ...
    console.log(result);
  })
  .catch((error) => {
    // Handle Errors here.
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // // The email of the user's account used.
    // var email = error.email;
    // // The firebase.auth.AuthCredential type that was used.
    // var credential = error.credential;

    // ...
    console.log(error);
  });
}

export const createAccount = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    // var user = userCredential.user;
    // ...
    console.log('account create successful');
  })
  .catch((error) => {
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // ..
    console.log(error);
  });
}

export const signInWithEmailAndPassword = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    // var user = userCredential.user;
    // ...
    console.log(userCredential, 'success sign in with email and password');
  })
  .catch((error) => {
    // var errorCode = error.code;
    // var errorMessage = error.message;
    console.log(error.message);
  });
}