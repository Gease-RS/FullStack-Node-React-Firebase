const functions = require('firebase-functions');
const app = require('express')();
const FBAuth = require('./util/fbAuth');

const cors = require('cors');
app.use(cors());

const { 
    getAllScreams, 
    postOneScream,
    getScream
 } = require('./handlers/screams');
 
const { 
    signup, 
    login, 
    uploadImage, 
    addUserDetails,
    getAuthenticatedUser
} = require('./handlers/users');

// Screams routes
app.get('/screams', getAllScreams);
app.post('/scream', FBAuth, postOneScream);
app.get('/scream/:screamId', getScream);
//Todo delete scream
//Todo like a scream
//Todo unlike a scream
//Todo comment on scream

// Users route
app.post('/signup', signup);
app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage);
app.post('/user', FBAuth, addUserDetails);
app.get('/user' , FBAuth, getAuthenticatedUser);

exports.api = functions.region('europe-west1').https.onRequest(app);