const express = require('express');
const router = express.Router();

const BASE_PATH = 'design-ideas/wt-1451-backdating-improving-user-journey/radios/8-abroad';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/design-ideas/wt-1451-backdating-improving-user-journey/radios/9-pensions';

router.get('/', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/guard`);
});

router.post('/guard', function (req, res) {
  res.redirect(`${NEXT_PATH}`);
});

module.exports = router;
