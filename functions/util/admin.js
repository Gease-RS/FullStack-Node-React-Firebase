const admin = require('firebase-admin');

var serviceAccount = require('./serviceAccountKey.json');
var dbURL = require('./dbURL');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: dbURL 
  });

const db = admin.firestore();

module.exports = { admin, db };