var express = require('express');
var router = express.Router();

const BASE_PATH = 'design-ideas/wt-5868-af';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/design-ideas/wt-5868-af';




// Do you need an alternative format?
router.post('/guard', function (req, res) {
  const answer = req.body.altFormatNeeds;

  if (answer === 'yes') {
    res.redirect(`${ABS_BASE_PATH}/phone-contact-preference`);
  } else {
    res.redirect(`${ABS_BASE_PATH}/reasonable-adjustment`);
  }
});


// What do you need instead of a phone call?
router.post('/phone-contact-preference', function (req, res) {
  const answer = req.body.phoneContactPreference;

  if (answer === 'Relay-UK') {
    res.redirect(`${ABS_BASE_PATH}/contact-phone-af-relay`);
  } else if (answer === 'Textphone') {
    res.redirect(`${ABS_BASE_PATH}/contact-phone-af-textphone`);
  } else if (answer === 'Email,-DWP-will-contact-you-to-find-the-best-format-for-you') {
    res.redirect(`${ABS_BASE_PATH}/letters-contact-preference`);
  }else {
    res.redirect(`${ABS_BASE_PATH}/letters-contact-preference`);
  }
});


// What do you need instead of a standard letter?
router.post('/letters-contact-preference', function (req, res) {
  let data = req.session.data;
  let answer;

  if (data['lettersContactPreference']) {
    answer = data['lettersContactPreference'];
  } else {
    answer = [];
  };

  answer = [].concat(answer);
  console.log(answer, typeof answer);

  if (answer.includes('Audio')) {
    res.redirect(`${ABS_BASE_PATH}/audio`);
  } else if (answer.includes('Braille')) {
    res.redirect(`${ABS_BASE_PATH}/braille`);
  } else if (answer.includes('Coloured-paper')) {
    res.redirect(`${ABS_BASE_PATH}/coloured-paper`);
  } else if (answer.includes('Coloured-paper-and-large-print')) {
    res.redirect(`${ABS_BASE_PATH}/coloured-paper`);
  } else if (answer.includes('Email,-DWP-will-contact-you-to-find-the-best-format-for-you')) {
    res.redirect(`${ABS_BASE_PATH}/reasonable-adjustment?checkanswers`);
  } else if (answer.includes('Large-print')) {
    res.redirect(`${ABS_BASE_PATH}/large-print`);
  } else {
    res.redirect(`${ABS_BASE_PATH}/reasonable-adjustment?checkanswers`);
  }

});



module.exports = router;
