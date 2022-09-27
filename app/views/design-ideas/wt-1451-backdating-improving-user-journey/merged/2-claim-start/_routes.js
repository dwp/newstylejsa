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

  if (req.session.data['reason'].includes('None of these circumstances apply to me'))  {
    res.redirect(`${ABS_BASE_PATH}/ineligible`)
  } else if (req.session.data['reason'].includes('You did not know you could claim New Style JSA'))  {
    res.redirect(`${ABS_BASE_PATH}/ineligible`)
  } else if (req.session.data['reason'].includes('You thought you would get a job'))  {
    res.redirect(`${ABS_BASE_PATH}/ineligible`)
  } else {
    res.redirect(`${ABS_BASE_PATH}/why-have-you-not-claimed`);
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
