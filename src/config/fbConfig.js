import firebase from "firebase/app ";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyBfmBOV0XuIogk1mtckAXt0EHw6jTBhaCQ",
  authDomain: "net-ninja-mario-plan-5518a.firebaseapp.com",
  databaseURL: "https://net-ninja-mario-plan-5518a.firebaseio.com",
  projectId: "net-ninja-mario-plan-5518a",
  storageBucket: "",
  messagingSenderId: "351688364753",
  appId: "1:351688364753:web:674a6b47901f2c79"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
