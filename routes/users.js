var express = require('express');
var router = express.Router();
require('dotenv').load();

router.post('/', function(req, res, next) {
  const API_KEY = process.env.API_KEY;
  // var api_key = API_KEY;
  var domain = 'sandbox44954fc1a00747bb8aa3111be045af7a.mailgun.org';
  var mailgun = require('mailgun-js')({apiKey: API_KEY, domain: domain});

  var data = {
    from: `Excited User <${process.env.EXCITED_CLIENT}>`,
    to: process.env.EMAIL,
    subject: 'Testing',
    text: 'Just making sure this still works.'
  };

  mailgun.messages().send(data, function (error, body) {
    console.log(body);
  });

});


module.exports = router;
