const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/',(req, res)=>{
   var transport = nodemailer.createTransport({
        service:'gmail',
         auth: {
                     user: "registeratmio@gmail.com",
                     pass: "sjlvafegzbccsskc"
                }
            });
        var mailOptions = {
                from: "registeratmio@gmail.com",
                to: "Register.mio@gmail.com", 
                subject: req.body.name +" from "+req.body.store+ " just registered",
                body: "name:"+req.body.name +
                "name: "+req.body.name +
                "name: "+req.body.name +
                "name: "+req.body.name +
                "name: "+req.body.name +
                "name: "+req.body.name +".",
                html: `
                    <body style="background:aliceblue;font-Size:larger">
                <div style="background-color: coral;color:#fff; text-align:center;padding:20px">A new user has registered.</div>
                <table style="margin: 20px;
                width: 80%;
                height: 50vh;">
                    <tr><td>name</td><td>${req.body.name}</td></tr>
                    <tr style=" background-color: #0000000d;"><td>store name</td><td>${req.body.store}</td></tr>
                    <tr><td>Phone no.</td><td><a href="tel:${req.body.phone}">${req.body.phone}</a></td></tr>
                    <tr style=" background-color: #0000000d;"><td>State</td><td>${req.body.state}</td></tr>
                    <tr><td>Place</td><td>${req.body.district}</td></tr>
                    <tr style=" background-color: #0000000d;"><td>No.of stores</td><td>${req.body.noofstores}</td></tr>
                    <tr><td>Registered at</td><td>${req.body.datetime}</td></tr>
                    </table>
            </body>`,  
            }
            
    transport.sendMail(mailOptions, function(error, resp){
        if(error){
             res.send("Error : "+error);
            
        }else{
             res.send("Email has been sent successfully to "+ req.query.user);
           
        }         
    }); 
})

module.exports = router;