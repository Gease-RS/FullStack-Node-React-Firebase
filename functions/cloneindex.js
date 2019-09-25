const functions = require('firebase-functions');
const admin = require('firebase-admin');

var serviceAccount = require('./util/serviceAccountKey.json');
var dbURL = require('./util/dbURL');
var firebaseConfig = require('./util/firebaseConfig');

const app = require('express')();
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: dbURL 
});

const firebase = require('firebase');
firebase.initializeApp({firebaseConfig})