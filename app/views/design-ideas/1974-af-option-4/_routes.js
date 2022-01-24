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

router.post('/alternate-format-contact-preference', function (req, res) {
  const answer = req.body.contactPreference;

  if (answer === 'letters') {
    res.redirect(`${ABS_BASE_PATH}/letters-contact-preference`);
  } else if (answer === 'phoneCall') {
    res.redirect(`${ABS_BASE_PATH}/phone-contact-preference`);
  } else if (answer === 'lettersPhoneCall') {
    res.redirect(`${ABS_BASE_PATH}/letters-phone-contact-preference`);
  } else {
    res.redirect(`${ABS_BASE_PATH}/address-postal-address`);
  }
});


router.post('/letters-phone-contact-preference', function (req, res) {
var answer = req.session.data['letters-phone-contact-preference'];

console.log(answer, 'submitted answer')
  if (answer.includes('audio')) {
  res.redirect(`${ABS_BASE_PATH}/letters-phone-contact-preference-audio`);
} else if (answer.includes('braille')){
  res.redirect(`${ABS_BASE_PATH}/letters-phone-contact-preference-braille`);
} else if (answer.includes('colouredPaper')){
  res.redirect(`${ABS_BASE_PATH}/letters-phone-contact-preference-coloured-paper`);
} else if (answer.includes('largePrint')){
  res.redirect(`${ABS_BASE_PATH}/letters-phone-contact-preference-large-print`);
} else {
  res.redirect(`${ABS_BASE_PATH}/phone-contact-preference`);
}
});


// router.post('/letters-contact-preference', function (req, res) {
// var answer = req.session.data['lettersContactPreference'];
//
// console.log(answer, 'submitted answer')
//   if (answer.includes('audio')) {
//   res.redirect(`${ABS_BASE_PATH}/letters-contact-preference-audio`);
// } else if (answer.includes('braille')){
//   res.redirect(`${ABS_BASE_PATH}/letters-contact-preference-braille`);
// } else if (answer.includes('colouredPaper')){
//   res.redirect(`${ABS_BASE_PATH}/letters-contact-preference-coloured-paper`);
// } else if (answer.includes('largePrint')){
//   res.redirect(`${ABS_BASE_PATH}/letters-contact-preference-large-print`);
// } else {
//   res.redirect(`${ABS_BASE_PATH}/address-is-it-postal`);
// }
// });


router.post('/letters-contact-preference', function (request, response){

  let preferences = request.session.data['lettersContactPreference'];

  if (preferences.length && preferences.includes('audio')) {
    response.redirect(`${ABS_BASE_PATH}/letters-contact-preference-audio`);
  } else {
    response.redirect("/letters-contact-preference-braille");
  }

});

// router.get('/letters-contact-preference-braille', function(request, response){
//
//   let preferences = request.session.data['lettersContactPreference'];
//
//   if (preferences.length && preferences.includes('braille')) {
//     response.render(`${ABS_BASE_PATH}/letters-contact-preference-braille`)
//   } else {
//     response.redirect("/letters-contact-preference-coloured-paper")
//   }
//
// });

module.exports = router;
