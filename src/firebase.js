import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBo7BNt5LNTuMhZMoUZiJEN-w-eyjvFxqA",
    authDomain: "twitter-clone-41df2.firebaseapp.com",
    databaseURL: "https://twitter-clone-41df2.firebaseio.com",
    projectId: "twitter-clone-41df2",
    storageBucket: "twitter-clone-41df2.appspot.com",
    messagingSenderId: "655079539999",
    appId: "1:655079539999:web:28b9073e80905701449c2a",
    measurementId: "G-7132Z7TVE8"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  export default db;