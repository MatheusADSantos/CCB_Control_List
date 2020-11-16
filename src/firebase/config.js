import * as  firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD3B24bPhWClEcQ5-OYgwVNQYKsljzSNos",
//   authDomain: "control-covid-ccb.firebaseapp.com",
//   databaseURL: "https://control-covid-ccb.firebaseio.com",
//   projectId: "control-covid-ccb",
//   storageBucket: "control-covid-ccb.appspot.com",
//   messagingSenderId: "720193658421",
//   appId: "1:720193658421:web:5aef359691cb672fd81b7c",
//   measurementId: "G-VZMWVEJHR5"
// };


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB63ry7Lp9JcFVn7PSqch5f_x7v4C3V_JM",
  authDomain: "ccbcontrol-7ee48.firebaseapp.com",
  databaseURL: "https://ccbcontrol-7ee48.firebaseio.com",
  projectId: "ccbcontrol-7ee48",
  storageBucket: "ccbcontrol-7ee48.appspot.com",
  messagingSenderId: "958473271620",
  appId: "1:958473271620:web:740ad34e3564ba43927f11",
  measurementId: "G-XSWN8T94JJ"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);

  // firebase.firestore().enablePersistence()
  //   .catch(function (err) {
  //     if (err.code == 'failed-precondition') {
  //       // Multiple tabs open, persistence can only be enabled
  //       // in one tab at a a time.
  //       // ...
  //     } else if (err.code == 'unimplemented') {
  //       // The current browser does not support all of the
  //       // features required to enable persistence
  //       // ...
  //     }
  //   });
  // // Subsequent queries will use persistence, if it was enabled successfully


}

export { firebase };