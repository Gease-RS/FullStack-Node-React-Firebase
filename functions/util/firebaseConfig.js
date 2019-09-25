const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyDNSPSFXexkHCJSKG3nMQ46AnfPCGP5XQE",
    authDomain: "fullstack-node-react-firebase.firebaseapp.com",
    databaseURL: "https://fullstack-node-react-firebase.firebaseio.com",
    projectId: "fullstack-node-react-firebase",
    storageBucket: "fullstack-node-react-firebase.appspot.com",
    messagingSenderId: "986472472459",
    appId: "1:986472472459:web:5434b4b89fc4bfc6"
  };

firebase.initializeApp(firebaseConfig)
export { firebase };