var express = require('express');
var router = express.Router();

const BASE_PATH = 'v3_0-citizen';
const ABS_BASE_PATH = `/${BASE_PATH}`;

// this routes claims with BT postcodes to confirmation-dfc page
router.post('/declaration', function (req, res) {
  var answer = req.session.data['address-postcode'].toUpperCase();
  if (answer) {
    if (answer.startsWith("BT")) {
      res.redirect(`${ABS_BASE_PATH}/confirmation-dfc`);
    } 
  } else {
    res.redirect(`${ABS_BASE_PATH}/confirmation`);
  }
});

module.exports = router;
