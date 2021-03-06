import firebase from "firebase/app";
import "firebase/auth";

import firebaseConfig from "../../utils/firebase/firebase"; // this doest exist create one and paste your firebase config

firebase.initializeApp(firebaseConfig);

var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().useDeviceLanguage();

const login = () => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((data) => {
        let user = {
          name: data.additionalUserInfo.profile.name,
          email: data.additionalUserInfo.profile.email,
          profile: data.additionalUserInfo.profile.picture,
          uid: data.additionalUserInfo.profile.email,
        };
        resolve(user);
      })
      .catch(() => {
        reject();
      });
  });
};

export default login;
