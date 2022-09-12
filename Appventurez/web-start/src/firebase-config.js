/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
 const config = {
  apiKey: "AIzaSyAMwXrjnRcgnwnExjh08xtNDN3WyS0FV0A",
  authDomain: "friendlychat-f892e.firebaseapp.com",
  projectId: "friendlychat-f892e",
  storageBucket: "friendlychat-f892e.appspot.com",
  messagingSenderId: "611921922221",
  appId: "1:611921922221:web:23abf17b9b6acf23779e24",
  measurementId: "G-DEMLFZ76G8"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}