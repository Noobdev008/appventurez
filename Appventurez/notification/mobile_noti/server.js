var admin = require("firebase-admin");

var serviceAccount = require('./notification-4d8cd-firebase-adminsdk-rzmns-97f56a2b5b.json');

admin.initializeApp({
  	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://prismappfcm.firebaseio.com"
});
var topic = 'general';

var message = {
  notification: {
    title: '',
    body: ``
  },
  topic: topic
};

// Send a message to devices subscribed to the provided topic.
admin.messaging().send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
});