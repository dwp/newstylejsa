const express = require('express');
const router = express.Router();

const BASE_PATH = 'design-ideas/wt-1451-backdating-improving-user-journey/merged/2-claim-start';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/design-ideas/wt-1451-backdating-improving-user-journey/merged/3-details';

// Do you want to change the start date?
router.post('/start-date', function (req, res) {
  const answer = req.body.claimstart;

  if (answer === 'yes') {
    // Yes, I want my claim to start from today {current-date}
    res.redirect(`${NEXT_PATH}/nino`);
  } else {
    // No, I want my claim to start from an earlier date
    res.redirect(`${ABS_BASE_PATH}/reason`);
  };
});

// Why did you not apply for New Style JSA before today?
router.post('/reason', function (req, res) {

  if (req.session.data['reason'].includes('Your partner, parent, child, brother or sister died'))  {
    res.redirect(`${ABS_BASE_PATH}/why-have-you-not-claimed`)
  } else if (req.session.data['reason'].includes('You were caring for someone with an illness or disability'))  {
    res.redirect(`${ABS_BASE_PATH}/why-have-you-not-claimed`)
  } else if (req.session.data['reason'].includes('You had a domestic emergency, for example, flood, fire, burglary or other unexpected serious domestic incidents'))  {
    res.redirect(`${ABS_BASE_PATH}/why-have-you-not-claimed`)
  } else if (req.session.data['reason'].includes('The relationship with your partner ended'))  {
    res.redirect(`${ABS_BASE_PATH}/why-have-you-not-claimed`)
  } else if (req.session.data['reason'].includes('You have problems communicating because you are blind or deaf'))  {
    res.redirect(`${ABS_BASE_PATH}/why-have-you-not-claimed`)
  } else if (req.session.data['reason'].includes('You have problems communicating because of a learning, language or literacy difficulty'))  {
    res.redirect(`${ABS_BASE_PATH}/why-have-you-not-claimed`)
  } else if (req.session.data['reason'].includes('You were told that you could not get New Style JSA by the Department for Work and Pensions'))  {
    res.redirect(`${ABS_BASE_PATH}/why-have-you-not-claimed`)
  } else if (req.session.data['reason'].includes('You received written advice that you could not get New Style JSA by a legal advisor or an advice agency like Citizens Advice'))  {
    res.redirect(`${ABS_BASE_PATH}/why-have-you-not-claimed`)
  } else if (req.session.data['reason'].includes('Your attempt to claim was unsuccessful because of a problem with DWP telephone lines or online systems'))  {
    res.redirect(`${ABS_BASE_PATH}/why-have-you-not-claimed`)
  } else if (req.session.data['reason'].includes('Your attempt to claim was unsuccessful because of a problem with your local Jobcentre Plus office'))  {
    res.redirect(`${ABS_BASE_PATH}/why-have-you-not-claimed`)
  } else if (req.session.data['reason'].includes('You could not get to your local Jobcentre Plus office because of transport difficulties and alternatives were not available'))  {
    res.redirect(`${ABS_BASE_PATH}/why-have-you-not-claimed`)
  } else if (req.session.data['reason'].includes('You were receiving Employment Support Allowance and were not told by DWP your claim had expired'))  {
    res.redirect(`${ABS_BASE_PATH}/why-have-you-not-claimed`)
  } else {
    res.redirect(`${ABS_BASE_PATH}/ineligible`);
  };
});

// When do you want your claim to start?
// router.post('/change-date', function (req, res) {
//   res.redirect(`${NEXT_PATH}`);
// });

// Did you ask for advice?
// router.post('/asked-for-advice', function (req, res) {
//   res.redirect(`${NEXT_PATH}`);
// });

module.exports = router;
