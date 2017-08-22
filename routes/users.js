var express = require('express');
var router = express.Router();
require('dotenv').load();

router.post('/', function(req, res, next) {

  const API_KEY = process.env.API_KEY;

  let mailgun = require('mailgun-js')({
    apiKey: API_KEY,
    domain: process.env.DOMAIN
  });

  // to: `<hili@dentro.co.il>, <nadav@dentro.co.il>`,

  let data = {
    from: `${req.body.name} <${req.body.email}>`,
    to: `<budaminof@gmail.com>`,
    subject: 'דנטרו',
    text: `
      היי הילי ונדב,

      נשמח אם תצרו איתנו קשר

      ${req.body.name}
      ${req.body.phone || ''}
      ${req.body.email}

      תודה רבה.
    `
  };

  mailgun.messages().send(data, function (error, body) {
    console.log('BODY',body);
    if (error) {
      res.json({
        errors: ["נתקלנו בבעיה. בבקשה תנסו שוב מאוחר יותר."]
      })
    }
    res.json({
      msg: ["תודה רבה! ניצור קשר בקרוב"]
    })

  });

});


module.exports = router;
