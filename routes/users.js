var express = require('express');
var router = express.Router();
require('dotenv').load();

router.post('/', function(req, res, next) {
  const API_KEY = process.env.API_KEY;

  let mailgun = require('mailgun-js')({
    apiKey: API_KEY,
    domain: process.env.DOMAIN
  });

  let data = {
    from: `Excited User <${req.body.email}>`,
    to: process.env.EMAIL,
    subject: 'דנטרו',
    text: `
      היי הילי ונדבר,

      נשמח אם תצרו איתנו קשר

      ${req.body.name}
      ${req.body.phone}
      ${req.body.email}
      
      תודה רבה.
    `
  };
  console.log('DATA',data);

  mailgun.messages().send(data, function (error, body) {
    console.log('BODY',body);
    if (error) {
      res.status(422).json({
        errors: ["נתקלנו בבעיה. בבקשה תנסו שוב מאוחר יותר."]
      })
    }
    res.status(200).json({
      msg: ["תודה רבה! ניצור קשר בקרוב"]
    })

  });

});


module.exports = router;
