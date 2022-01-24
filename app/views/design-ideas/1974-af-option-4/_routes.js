var express = require('express');
var router = express.Router();

const BASE_PATH = 'design-ideas/1974-af-option-4';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/design-ideas/1974-af-option-4';

router.post('/start-date', function (req, res) {
  var answer = req.session.data['claimstart'];

  if (answer === 'yes') {
    // Yes, I want my claim to start from today {current-date}
    res.redirect(`${NEXT_PATH}/nino`);
  } else {
    // No, I want my claim to start from an earlier date
    res.redirect(`${ABS_BASE_PATH}/nino`);
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

router.post('/address-af', function (req, res) {
var answer = req.session.data['address-af'];

  if (answer === 'yes') {
  res.redirect(`${ABS_BASE_PATH}/address-af-yes`);
} else {
  res.redirect(`${ABS_BASE_PATH}/address-is-it-postal`);
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

router.post('/address-af-yes', function (req, res) {
var answer = req.session.data['alternative-letter-format'];

console.log(answer, 'submitted answer')
  if (answer.includes('print')) {
  res.redirect(`${ABS_BASE_PATH}/large-print`);
} else {
  res.redirect(`${ABS_BASE_PATH}/address-is-it-postal`);
}
});

router.post('/alternate-format', function (req, res) {
  const answer = req.body.AlternateFormat;

  if (answer === 'alternateFormatYes') {
    res.redirect(`${ABS_BASE_PATH}/alternate-format-contact-preference`);
  } else {
    res.redirect(`${ABS_BASE_PATH}/address-postal-address`);
  }
});

// router.post('/alternate-format-contact-preference', function (req, res) {
//   const answer = req.body.contactPreference;
//
//   if (answer === 'letters') {
//     res.redirect(`${ABS_BASE_PATH}/letters-contact-preference`);
//   } else if (answer === 'phoneCall') {
//     res.redirect(`${ABS_BASE_PATH}/phone-contact-preference`);
//   } else if (answer === 'lettersPhoneCall') {
//     res.redirect(`${ABS_BASE_PATH}/letters-phone-contact-preference`);
//   } else {
//     res.redirect(`${ABS_BASE_PATH}/address-postal-address`);
//   }
// });

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
    res.redirect(`${ABS_BASE_PATH}/address-is-it-postal`);
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
    res.redirect(`${ABS_BASE_PATH}/letters-contact-preference-audio`);
  } else if (answer.includes('braille')) {
    res.redirect(`${ABS_BASE_PATH}/letters-contact-preference-braille`);
  } else if (answer.includes('colouredPaper')) {
    res.redirect(`${ABS_BASE_PATH}/letters-contact-preference-coloured-paper`);
    // add more here
  } else if (answer.includes('largePrint')) {
    res.redirect(`${ABS_BASE_PATH}/letters-contact-preference-large-print`);
  } else {
    res.redirect(`${ABS_BASE_PATH}/address-is-it-postal`);
  }

});

module.exports = router;
