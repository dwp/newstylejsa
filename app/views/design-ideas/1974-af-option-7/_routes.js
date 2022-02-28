var express = require('express');
var router = express.Router();

const BASE_PATH = 'design-ideas/1974-af-option-7';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/design-ideas/1974-af-option-7';

router.post('/start-date', function (req, res) {
  var answer = req.session.data['claimstart'];

  if (answer === 'yes') {
    // Yes, I want my claim to start from today {current-date}
    res.redirect(`${NEXT_PATH}/alternate-format`);
  } else {
    // No, I want my claim to start from an earlier date
    res.redirect(`${ABS_BASE_PATH}/alternate-format`);
  };
});


router.post('/add-different-postal-address', function (req, res) {
  const answer = req.body.detailsAddDifferentPostalAddress;

  if (answer === 'add-different-postal-address-no') {
    res.redirect(`${ABS_BASE_PATH}/contact-phone-af`);
  } else {
    res.redirect(`${ABS_BASE_PATH}/address-postal-address`);
  }
});

router.post('/contact-phone', function (req, res) {
var answer = req.session.data['contact-telephone-number-af'];

  if (answer === 'yes') {
  res.redirect(`${ABS_BASE_PATH}/contact-phone-af-yes`);
} else {
  res.redirect(`${ABS_BASE_PATH}/contact-do-you-have-an-email`);
}
});

router.post('/contact-do-you-have-an-email', function (req, res) {
  const answer = req.body.contactDoYouHaveAnEmail;

  if (typeof answer !== 'undefined') {
    if (answer === 'Yes') {
      res.redirect(`${ABS_BASE_PATH}/contact-email`);
    } else {
      res.redirect(`${ABS_BASE_PATH}/bank-account`);
    }
  } else {
    res.redirect(`${ABS_BASE_PATH}/contact-do-you-have-an-email`);
  }
});


router.post('/alternate-format', function (req, res) {
  const answer = req.body.AlternateFormat;

  if (answer === 'alternateFormatYes') {
    res.redirect(`${ABS_BASE_PATH}/letters-contact-preference`);
  } else {
    res.redirect(`${ABS_BASE_PATH}/nino`);
  }
});

router.post('/alternate-format-contact-preference', function (req, res) {
  let data = req.session.data;
  let answer;

  if (data['alternateFormatPreference']) {
    answer = data['alternateFormatPreference'];
  } else {
    answer = [];
  };

  answer = [].concat(answer);
  console.log(answer, typeof answer);

  if (answer.includes('letters')) {
    res.redirect(`${ABS_BASE_PATH}/letters-contact-preference`);
  } else if (answer.includes('phoneCalls')) {
    res.redirect(`${ABS_BASE_PATH}/phone-contact-preference`);
  } else {
    res.redirect(`${ABS_BASE_PATH}/nino`);
  }

});



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

  if (answer.includes('audio')) {
    res.redirect(`${ABS_BASE_PATH}/audio`);
  } else if (answer.includes('braille')) {
    res.redirect(`${ABS_BASE_PATH}/braille`);
  } else if (answer.includes('colouredPaper')) {
    res.redirect(`${ABS_BASE_PATH}/coloured-paper`);
  } else if (answer.includes('colouredPaperLargePrint')) {
    res.redirect(`${ABS_BASE_PATH}/coloured-paper`);
  } else if (answer.includes('email')) {
    res.redirect(`${ABS_BASE_PATH}/email`);
    // add more here
  } else if (answer.includes('largePrint')) {
    res.redirect(`${ABS_BASE_PATH}/large-print`);
  } else {
    res.redirect(`${ABS_BASE_PATH}/phone-contact-preference`);
  }

});

module.exports = router;
