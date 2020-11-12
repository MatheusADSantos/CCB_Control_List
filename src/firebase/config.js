import * as  firebase  from  'firebase' ;
import  '@ firebase / auth' ;
import  '@ firebase / firestore' ;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3B24bPhWClEcQ5-OYgwVNQYKsljzSNos",
  authDomain: "control-covid-ccb.firebaseapp.com",
  databaseURL: "https://control-covid-ccb.firebaseio.com",
  projectId: "control-covid-ccb",
  storageBucket: "control-covid-ccb.appspot.com",
  messagingSenderId: "720193658421",
  appId: "1:720193658421:web:5aef359691cb672fd81b7c",
  measurementId: "G-VZMWVEJHR5"
};

if  ( ! firebase . apps . length )  {
    firebase . initializeApp ( firebaseConfig ) ;
}

export  {  firebase  } ;