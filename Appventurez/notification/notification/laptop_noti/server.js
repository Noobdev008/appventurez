const express = require('express');

//web-push
const webpush = require('web-push');

//body-parser
const bodyParser = require('body-parser');

//path
const path = require('path');

//using express 
const app = express();

const publicVapidKey = 'BFX8v0JXRYGV23HNYr1FRm5TuEL8ciTHS9BZ6Ce2d73XnTrStXgJdz3Kx458M_y8BazawiAkKkHuZDaHrkmgecY';
const privateVapidKey = 'f4qtq7ZBy8hJp6Ar5k6NuozDVdaOh2T40e_Hu1tFtOQ';

//using bodyparser
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "client")));



//setting vapid keys details
webpush.setVapidDetails('mailto:shubhamsri0807@gmail.com', publicVapidKey, privateVapidKey);

app.post('/subscribe', (req, res) => {
    //get push subscription object from the request
    const subscription = req.body;

    //send status 201 for the request
    res.status(201).json({})

    //create paylod: specified the detals of the push notification
    const payload = JSON.stringify({ title: 'Section.io Push Notification' });

    //pass the object into sendNotification fucntion and catch any error
    webpush.sendNotification(subscription, payload).catch(err => console.error(err));
})

const port = 3000;
app.listen(port, () => {
    console.log(`server started on ${port}`)
})