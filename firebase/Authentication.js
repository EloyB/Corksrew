import firebase from 'firebase/app';
import { Alert } from 'react-native';
require('firebase/auth');
require('firebase/firestore');

export const loginWithEmail = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => console.log('logged in'))
    .catch(error => console.log(error));
};

export const signUpWithEmail = (email, password, confirmPassword, username) => {
  if (password != confirmPassword) {
    console.log('Passwords do not match');
  } else {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(cred => {
        const newUser = {
          userId: cred.user.uid,
          email: cred.user.email,
          username: username,
          photoUrl: cred.user.photoURL
        };

        cred.user.updateProfile({
          displayName: username
        });

        firebase
          .firestore()
          .collection('users')
          .add(newUser);
      })
      .catch(error => console.log(error));
  }
};

export const logOutUser = () => {
  firebase.auth().signOut();
};

export const getCurrentUser = () => {
  return firebase.auth().currentUser;
};
