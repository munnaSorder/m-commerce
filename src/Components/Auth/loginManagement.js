import { firebase } from '@firebase/app'
import "firebase/auth";
import { firebaseConfig } from '../../firebase.config';


export const initialLoginMethod = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}

export const googleLoginWithPopup = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {

    const {displayName, email, photoURL} = result.user
    const userInfo = { displayName, email, photoURL };
    localStorage.setItem("userInfo", JSON.stringify(userInfo))
    return userInfo;
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
    return firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    const {displayName, email, photoURL} = result.user
    const userInfo = { displayName, email, photoURL };
    localStorage.setItem("userInfo", JSON.stringify(userInfo))
    return userInfo;
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
    return false;
  });
}

export const createAccount = (name, email, password) => {
   return firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    updateUserInfo(name)
  })
  .catch((error) => {
    console.log(error);
    const errorMessage = error.message
    return errorMessage;
  });
}

export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    const {displayName, email, photoURL} = result.user
    const userInfo = { displayName, email, photoURL };
    localStorage.setItem("userInfo", JSON.stringify(userInfo))
    return userInfo;
  })
  .catch((error) => {
    const errorMessage = error.message
    console.log(errorMessage);
    return errorMessage;
  });
}

export const signOut = () => {
  initialLoginMethod();
  firebase.auth().signOut().then(() => {
    localStorage.removeItem('userInfo')
    window.location.reload();
  }).catch((error) => {
    // An error happened.
  });
}

const updateUserInfo = (name) => {
  const user = firebase.auth().currentUser;

  user.updateProfile({
    displayName: name,
  }).then(function() {
    console.log('name addedd');
  }).catch(function(error) {
    // An error happened.
  })
}


export const getJwtToken = () => {
  firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
    sessionStorage.setItem('jwt_token', idToken)
  }).catch(function(error) {
    console.log(error);
  });
}