'use strict';

import { initAll } from 'govuk-frontend';
import Utils from 'utils';
import BackButton from 'back-button';
import AutoStoreData from 'auto-store-data';
import CharacterCount from 'character-count';

if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
  _init();
} else {
  document.addEventListener('DOMContentLoaded', _init());
}

function _init () {
  // GOVUKFrontEnd init
  initAll();

  // Init utility methods
  Utils.init();

  // Init History back button
  BackButton.init();

  // Init Auto storing of form data
  AutoStoreData.init();

  // Init character count on <textarea>
  const characterCount = new CharacterCount();
  characterCount.init();
};
