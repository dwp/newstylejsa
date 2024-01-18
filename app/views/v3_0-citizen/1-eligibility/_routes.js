var express = require('express');
var router = express.Router();

const BASE_PATH = 'v3_0-citizen/1-eligibility';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = 'v3_0-citizen/2-claim-start';

/*
 * BRANCHING FOR ELIGIBILITY
 *
 * Current sequence is
 *  1. Residence
 *  2. Working
 *    2.1 Working over 16 hours
 *  3. Contributions
 *  4. Eligible
 * */

/*
 * THE INELIGIBILITY PAGES
 *
 * 1. ineligible-more-than-16-hours =
 * The citizen is working over 16 hours per week
 *
 * 2. ineligibile-residency =
 * The citizen doesn't live in England, Scotland or Wales
 *
 * 3. ineligible ==
 * The citizen hasn't contributed enough NI
 *
 * Please note: the content of page number 3 should be copied to the other two
 * */

router.post('/residence', function (req, res) {
  var answer = req.session.data['eligibilityResidence'];
  if (answer === 'eligibility-residence-no') {
    res.redirect(`${ABS_BASE_PATH}/ineligible-residency`);
  } else {
    res.redirect(`${ABS_BASE_PATH}/working`);
  }
});

// after residence we do working
router.post('/working', function (req, res) {
  var answer = req.session.data['eligibilityWorking'];
  if (answer === 'eligibility-working-no') {
    res.redirect(`${ABS_BASE_PATH}/eligible`);
  } else {
    res.redirect(`${ABS_BASE_PATH}/working-over`);
  }
});

// after working we do working over
router.post('/working-over', function (req, res) {
  var answer = req.session.data['eligibilityWorkingOver'];
  if (answer === 'eligibility-working-over-no') {
    res.redirect(`${ABS_BASE_PATH}/eligible`);
  } else {
    res.redirect(`${ABS_BASE_PATH}/ineligible-more-than-16-hours`);
  }
});

// after working over we do employed
router.post('/employed', function (req, res) {
  var answer = req.session.data['eligibilityEmployed'];
  if (answer === 'eligibility-employed-yes') {
    res.redirect(`${ABS_BASE_PATH}/eligible`);
  } else if (answer === 'eligibility-employed-no') {
    res.redirect(`${ABS_BASE_PATH}/ineligible`);
  } else {
    res.redirect(`${ABS_BASE_PATH}/eligible`);
  }
});

// after working over we do contributions
router.post('/contributions', function (req, res) {
  var answer = req.session.data['eligibilityContributions'];
  if (answer === 'eligibility-contributions-yes') {
    res.redirect(`${ABS_BASE_PATH}/eligible`);
  } else if (answer === 'eligibility-contributions-no') {
    res.redirect(`${ABS_BASE_PATH}/ineligible`);
  } else {
    res.redirect(`${ABS_BASE_PATH}/eligible`);
  }
});

// after ineligible-residency -> continue to apply we do working-not-resident

router.post('/working-not-resident', function (req, res) {
  var answer = req.session.data['eligibilityWorkingNotResident'];
  if (answer === 'eligibility-working-no') {
  res.redirect(`${ABS_BASE_PATH}/ineligible-residency-still-apply`);
  } else {
  res.redirect(`${ABS_BASE_PATH}/working-over-not-resident`);
  }
  });

// after ineligible-residency -> continue to apply --> working-not-resident we do working-over-not-resident
router.post('/working-over-not-resident', function (req, res) {
  var answer = req.session.data['eligibilityWorkingOverNotResident'];
  if (answer === 'eligibility-working-over-no') {
  res.redirect(`${ABS_BASE_PATH}/ineligible-residency-still-apply`);
  } else {
  res.redirect(`${ABS_BASE_PATH}/ineligible-residency-more-than-16-hours`);
  }
  });
module.exports = router;
