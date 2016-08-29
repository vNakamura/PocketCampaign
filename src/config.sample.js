import firebase from 'firebase';

const config = {
  firebase: {
    apiKey: 'apiKey',
    authDomain: 'projectId.firebaseapp.com',
    databaseURL: 'https://databaseName.firebaseio.com',
    storageBucket: 'bucket.appspot.com',
  },
};

if (firebase.apps.length === 0) firebase.initializeApp(config.firebase);
export const database = firebase.database;

export default config;
