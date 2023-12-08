const express = require('express');
const router = express.Router();

const BASE_PATH = 'design-ideas/wt-3566-abroad-questions/abroad-option-2/working-abroad';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/design-ideas/wt-3566-abroad-questions/abroad-option-2/armed-forces';//

router.get('/', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/working-abroad`);
});

router.post('/working-abroad', function (req, res) {
  res.redirect(`${NEXT_PATH}`);
});

module.exports = router;
