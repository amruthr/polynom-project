const express = require('express');
const router = express.Router();
const request =require('request');
var admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const config = require('../config');
const env = process.env.NODE_ENV || 'development';
var serviceAccount = config.service_account

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://travelcrest2020.firebaseio.com"
});

router.post('/addtopic', (req, res, next)=> {
    const { id } = req.body
    admin.messaging().subscribeToTopic(id  , "all")
    .then((res)=>console.log("Subscribed"))
    .catch((err)=>console.log("Error:"+err))
})

router.post('/notify', (req, res, next)=>{
    const {title , data, url} = req.body
    var topic = 'all';

var message = {
  notification: {
    title: title,
    body: data
  },
  topic: topic
};

admin.messaging().send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });
})


module.exports = router;