const functions = require('firebase-functions');
const admin = require('firebase-admin');

var serviceAccount = require('./util/serviceAccountKey.json');
var dbURL = require('./util/dbURL');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: dbURL
});

const express = require('express');
const app = express()

app.get('/screams', (req, res) => {
    admin
        .firestore()
        .collection('screams')
        .orderBy('createdAt', 'desc')
        .get()
        .then((data) => {
            let screams = [];
            data.forEach((doc) => {
                screams.push({
                    screamId: doc.id,
                    body: doc.data().body,
                    userHandle: doc.data().userHandle,
                    createdAt: doc.data().createdAt,
                    commentCount: doc.data().commentCount,
                    likeCount: doc.data(),likeCount
                });
            });
            return res.json(screams);
        })
        .catch((err) => console.error(err));
})

app.post('/screams', (req, res) => {
    const newScream = {
        body: req.body.body,
        userHandle: req.body.userHandle,
        createdAt: new Date().toISOString()
    };

    admin
    .firestore()
    .collection('screams')
    .add(newScream)
    .then((doc) => {
        res.json({ message: `document ${doc.id} created successfully`});
    })
    .catch((err) => {
        res.status(500).json( { error: 'something went wrong'});
        console.error(err);
    });
});

//

// https://baseurl.com/api/

exports.api = functions.https.onRequest(app);