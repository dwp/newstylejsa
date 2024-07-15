//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here



// Routing for ticket 1001
router.use(
  "/design-ideas/1001-no-fixed-address/v2/",
  require("./views/design-ideas/1001-no-fixed-address/v2/_routes")
);

// Routing for ticket 1634
router.use(
  "/design-ideas/1634-add-conditional-reveal/",
  require("./views/design-ideas/1634-add-conditional-reveal/_routes")
);

// This moves ticket 1401 routing to 1401 directory
router.use(
  "/design-ideas/1401-eligibility/v1/",
  require("./views/design-ideas/1401-eligibility/v1/_routes")
);
router.use(
  "/design-ideas/1401-eligibility/v2/",
  require("./views/design-ideas/1401-eligibility/v2/_routes")
);
router.use(
  "/design-ideas/1401-eligibility/v3/",
  require("./views/design-ideas/1401-eligibility/v3/_routes")
);
router.use(
  "/design-ideas/1401-eligibility/v4/",
  require("./views/design-ideas/1401-eligibility/v4/_routes")
);
router.use(
  "/design-ideas/1401-eligibility/v5/",
  require("./views/design-ideas/1401-eligibility/v5/_routes")
);
router.use(
  "/design-ideas/1401-eligibility/Oct-mvp/",
  require("./views/design-ideas/1401-eligibility/Oct-mvp/_routes")
);
router.use(
  "/design-ideas/1401-eligibility/Dec/",
  require("./views/design-ideas/1401-eligibility/Dec/_routes")
);
router.use(
  "/design-ideas/1401-eligibility/Jan/",
  require("./views/design-ideas/1401-eligibility/Jan/_routes")
);
router.use(
  "/design-ideas/1401-eligibility/v6/",
  require("./views/design-ideas/1401-eligibility/v6/_routes")
);
router.use(
  "/design-ideas/1401-eligibility/v7/",
  require("./views/design-ideas/1401-eligibility/v7/_routes")
);
router.use(
  "/design-ideas/1401-eligibility/v8/",
  require("./views/design-ideas/1401-eligibility/v8/_routes")
);

// This moves ticket 1557 routing to 1557 directory
router.use(
  "/design-ideas/1557-get-uc/v1/",
  require("./views/design-ideas/1557-get-uc/v1/_routes")
);
router.use(
  "/design-ideas/1557-get-uc/v2/",
  require("./views/design-ideas/1557-get-uc/v2/_routes")
);
router.use(
  "/design-ideas/1557-get-uc/v3/",
  require("./views/design-ideas/1557-get-uc/v3/_routes")
);
router.use(
  "/design-ideas/1557-get-uc/v4/",
  require("./views/design-ideas/1557-get-uc/v4/_routes")
);
router.use(
  "/design-ideas/1974-af-option-1/",
  require("./views/design-ideas/1974-af-option-1/_routes")
);
router.use(
  "/design-ideas/1974-af-option-2/",
  require("./views/design-ideas/1974-af-option-2/_routes")
);
router.use(
  "/design-ideas/1974-af-option-3/",
  require("./views/design-ideas/1974-af-option-3/_routes")
);
router.use(
  "/design-ideas/1974-af-option-4/",
  require("./views/design-ideas/1974-af-option-4/_routes")
);
router.use(
  "/design-ideas/1974-af-option-5/",
  require("./views/design-ideas/1974-af-option-5/_routes")
);
router.use(
  "/design-ideas/1974-af-option-6/",
  require("./views/design-ideas/1974-af-option-6/_routes")
);
router.use(
  "/design-ideas/1974-af-option-7/",
  require("./views/design-ideas/1974-af-option-7/_routes")
);

router.use(
  "/design-ideas/1974-af-option-8/",
  require("./views/design-ideas/1974-af-option-8/_routes")
);

router.use(
  "/design-ideas/574-af-option-9/",
  require("./views/design-ideas/574-af-option-9/_routes")
);

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//  ROUTING FOR ABROAD QUESTIONS                                               //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

////// ABROAD QUESTIONS ITERATION 1 //////
// This moves 'working abroad iteration 1' routing to working-abroad directory
router.use(
  "/design-ideas/wt-3759-abroad-questions/abroad-iteration-1/",
  require("./views/design-ideas/wt-3759-abroad-questions/abroad-iteration-1/_routes")
);

 
////// ABROAD QUESTIONS OPTIONS 1 //////
// This moves 'working abroad option 1' routing to working-abroad directory
router.use(
  "/design-ideas/wt-3566-abroad-questions/abroad-option-1/",
  require("./views/design-ideas/wt-3566-abroad-questions/abroad-option-1/_routes")
);

////// ABROAD QUESTIONS OPTIONS 2 //////
// This moves 'working abroad option 2' routing to working-abroad directory
router.use(
  "/design-ideas/wt-3566-abroad-questions/abroad-option-2/",
  require("./views/design-ideas/wt-3566-abroad-questions/abroad-option-2/_routes")
);
////// ABROAD QUESTIONS OPTIONS 3 //////
// This moves 'working abroad option 3' routing to working-abroad directory
router.use(
  "/design-ideas/wt-3566-abroad-questions/abroad-option-3/",
  require("./views/design-ideas/wt-3566-abroad-questions/abroad-option-3/_routes")
);
///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//  ROUTING FOR SIGNPOSTING                                                //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

////// SIGNPOSTING VERSION 1 //////
// This moves eligibility routing to eligibility directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-version-1/1-eligibility/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-version-1/1-eligibility/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-version-1/2-claim-start/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-version-1/2-claim-start/_routes")
);

// This moves details routing to details directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-version-1/3-details/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-version-1/3-details/_routes")
);

// Redirect to first question in details sequence
router.get("/design-ideas/wt-3073-signposting/wt-3073-signposting-version-1/3-details/", function (req, res) {
  res.redirect("/design-ideas/wt-3073-signposting/wt-3073-signposting-version-1/3-details/nino");
});

// This moves `other-benefits` routing to `other-benefits` directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-version-1/4-other-benefits/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-version-1/4-other-benefits/_routes")
);

// This moves jury-service routing to jury-service directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-version-1/5-jury-service/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-version-1/5-jury-service/_routes")
);

// This moves current-employment routing to current-employment directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-version-1/6-current-employment/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-version-1/6-current-employment/_routes")
);

// This moves previous-employment routing to previous-employment directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-version-1/7-previous-employment/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-version-1/7-previous-employment/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-version-1/8-abroad/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-version-1/8-abroad/_routes")
);

// This moves `pensions` routing to `pensions` directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-version-1/9-pensions/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-version-1/9-pensions/_routes")
);

// This moves `education` routing to `education` directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-version-1/10-education/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-version-1/10-education/_routes")
);

// This moves `availability` routing to `availability` directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-version-1/11-availability/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-version-1/11-availability/_routes")
);

// This moves `error` routing to `error` directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-version-1/error/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-version-1/error/_routes")
);


////// SIGNPOSTING VERSION 2 //////
// This moves eligibility routing to eligibility directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-version-2/1-eligibility/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-version-2/1-eligibility/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-version-2/2-claim-start/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-version-2/2-claim-start/_routes")
);

// This moves details routing to details directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-version-2/3-details/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-version-2/3-details/_routes")
);

// Redirect to first question in details sequence
router.get("/design-ideas/wt-3073-signposting/wt-3073-signposting-version-2/3-details/", function (req, res) {
  res.redirect("/design-ideas/wt-3073-signposting/wt-3073-signposting-version-2/3-details/nino");
});

// This moves `other-benefits` routing to `other-benefits` directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-version-2/4-other-benefits/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-version-2/4-other-benefits/_routes")
);

// This moves jury-service routing to jury-service directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-version-2/5-jury-service/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-version-2/5-jury-service/_routes")
);

// This moves current-employment routing to current-employment directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-version-2/6-current-employment/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-version-2/6-current-employment/_routes")
);

// This moves previous-employment routing to previous-employment directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-version-2/7-previous-employment/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-version-2/7-previous-employment/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-version-2/8-abroad/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-version-2/8-abroad/_routes")
);

// This moves `pensions` routing to `pensions` directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-version-2/9-pensions/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-version-2/9-pensions/_routes")
);

// This moves `education` routing to `education` directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-version-2/10-education/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-version-2/10-education/_routes")
);

// This moves `availability` routing to `availability` directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-version-2/11-availability/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-version-2/11-availability/_routes")
);

// This moves `error` routing to `error` directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-version-2/error/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-version-2/error/_routes")
);

////// SIGNPOSTING CURRRENT JOURNEY //////
// This moves eligibility routing to eligibility directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-current-journey/1-eligibility/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-current-journey/1-eligibility/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-current-journey/2-claim-start/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-current-journey/2-claim-start/_routes")
);

// This moves details routing to details directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-current-journey/3-details/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-current-journey/3-details/_routes")
);

// Redirect to first question in details sequence
router.get("/design-ideas/wt-3073-signposting/wt-3073-signposting-current-journey/3-details/", function (req, res) {
  res.redirect("/design-ideas/wt-3073-signposting/wt-3073-signposting-current-journey/3-details/nino");
});

// This moves `other-benefits` routing to `other-benefits` directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-current-journey/4-other-benefits/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-current-journey/4-other-benefits/_routes")
);

// This moves jury-service routing to jury-service directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-current-journey/5-jury-service/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-current-journey/5-jury-service/_routes")
);

// This moves current-employment routing to current-employment directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-current-journey/6-current-employment/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-current-journey/6-current-employment/_routes")
);

// This moves previous-employment routing to previous-employment directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-current-journey/7-previous-employment/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-current-journey/7-previous-employment/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-current-journey/8-abroad/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-current-journey/8-abroad/_routes")
);

// This moves `pensions` routing to `pensions` directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-current-journey/9-pensions/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-current-journey/9-pensions/_routes")
);

// This moves `education` routing to `education` directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-current-journey/10-education/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-current-journey/10-education/_routes")
);

// This moves `availability` routing to `availability` directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-current-journey/11-availability/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-current-journey/11-availability/_routes")
);

// This moves `error` routing to `error` directory
router.use(
  "/design-ideas/wt-3073-signposting/wt-3073-signposting-current-journey/error/",
  require("./views/design-ideas/wt-3073-signposting/wt-3073-signposting-current-journey/error/_routes")
);

// {END OF ROUTING FOR SIGNPOSTING} ///////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//  ROUTING FOR BACKDATING                                                //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

// This moves eligibility routing to eligibility directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/checkboxes/1-eligibility/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/checkboxes/1-eligibility/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/checkboxes/2-claim-start/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/checkboxes/2-claim-start/_routes")
);

// This moves details routing to details directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/checkboxes/3-details/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/checkboxes/3-details/_routes")
);

// Redirect to first question in details sequence
router.get("/design-ideas/wt-1451-backdating-improving-user-journey/checkboxes/3-details/", function (req, res) {
  res.redirect("/design-ideas/wt-1451-backdating-improving-user-journey/checkboxes/3-details/nino");
});

// This moves `other-benefits` routing to `other-benefits` directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/checkboxes/4-other-benefits/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/checkboxes/4-other-benefits/_routes")
);

// This moves jury-service routing to jury-service directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/checkboxes/5-jury-service/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/checkboxes/5-jury-service/_routes")
);

// This moves current-employment routing to current-employment directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/checkboxes/6-current-employment/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/checkboxes/6-current-employment/_routes")
);

// This moves previous-employment routing to previous-employment directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/checkboxes/7-previous-employment/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/checkboxes/7-previous-employment/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/checkboxes/8-abroad/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/checkboxes/8-abroad/_routes")
);

// This moves `pensions` routing to `pensions` directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/checkboxes/9-pensions/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/checkboxes/9-pensions/_routes")
);

// This moves `education` routing to `education` directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/checkboxes/10-education/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/checkboxes/10-education/_routes")
);

// This moves `availability` routing to `availability` directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/checkboxes/11-availability/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/checkboxes/11-availability/_routes")
);

// This moves `error` routing to `error` directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/checkboxes/error/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/checkboxes/error/_routes")
);

// Radio buttons

// This moves eligibility routing to eligibility directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/radios/1-eligibility/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/radios/1-eligibility/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/radios/2-claim-start/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/radios/2-claim-start/_routes")
);

// This moves details routing to details directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/radios/3-details/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/radios/3-details/_routes")
);

// Redirect to first question in details sequence
router.get("/design-ideas/wt-1451-backdating-improving-user-journey/radios/3-details/", function (req, res) {
  res.redirect("/design-ideas/wt-1451-backdating-improving-user-journey/radios/3-details/nino");
});

// This moves `other-benefits` routing to `other-benefits` directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/radios/4-other-benefits/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/radios/4-other-benefits/_routes")
);

// This moves jury-service routing to jury-service directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/radios/5-jury-service/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/radios/5-jury-service/_routes")
);

// This moves current-employment routing to current-employment directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/radios/6-current-employment/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/radios/6-current-employment/_routes")
);

// This moves previous-employment routing to previous-employment directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/radios/7-previous-employment/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/radios/7-previous-employment/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/radios/8-abroad/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/radios/8-abroad/_routes")
);

// This moves `pensions` routing to `pensions` directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/radios/9-pensions/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/radios/9-pensions/_routes")
);

// This moves `education` routing to `education` directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/radios/10-education/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/radios/10-education/_routes")
);

// This moves `availability` routing to `availability` directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/radios/11-availability/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/radios/11-availability/_routes")
);

// This moves `error` routing to `error` directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/radios/error/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/radios/error/_routes")
);

// Merged VERSION

router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/merged/1-eligibility/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/merged/1-eligibility/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/merged/2-claim-start/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/merged/2-claim-start/_routes")
);

// This moves details routing to details directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/merged/3-details/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/merged/3-details/_routes")
);

// Redirect to first question in details sequence
router.get("/design-ideas/wt-1451-backdating-improving-user-journey/merged/3-details/", function (req, res) {
  res.redirect("/design-ideas/wt-1451-backdating-improving-user-journey/merged/3-details/nino");
});

// This moves `other-benefits` routing to `other-benefits` directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/merged/4-other-benefits/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/merged/4-other-benefits/_routes")
);

// This moves jury-service routing to jury-service directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/merged/5-jury-service/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/merged/5-jury-service/_routes")
);

// This moves current-employment routing to current-employment directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/merged/6-current-employment/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/merged/6-current-employment/_routes")
);

// This moves previous-employment routing to previous-employment directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/merged/7-previous-employment/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/merged/7-previous-employment/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/merged/8-abroad/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/merged/8-abroad/_routes")
);

// This moves `pensions` routing to `pensions` directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/merged/9-pensions/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/merged/9-pensions/_routes")
);

// This moves `education` routing to `education` directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/merged/10-education/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/merged/10-education/_routes")
);

// This moves `availability` routing to `availability` directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/merged/11-availability/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/merged/11-availability/_routes")
);

// This moves `error` routing to `error` directory
router.use(
  "/design-ideas/wt-1451-backdating-improving-user-journey/merged/error/",
  require("./views/design-ideas/wt-1451-backdating-improving-user-journey/merged/error/_routes")
);

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//  ROUTING FOR DFC CONTENT                                                  //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

// DfC CONTENT CHANGES WT-3070  ///////////////////////////////////////////

// This moves eligibility routing to eligibility directory
router.use(
  "/design-ideas/wt-3070-dfc-content/1-eligibility/",
  require("./views/design-ideas/wt-3070-dfc-content/1-eligibility/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/design-ideas/wt-3070-dfc-content/2-claim-start/",
  require("./views/design-ideas/wt-3070-dfc-content/2-claim-start/_routes")
);

// This moves details routing to details directory
router.use(
  "/design-ideas/wt-3070-dfc-content/3-details/",
  require("./views/design-ideas/wt-3070-dfc-content/3-details/_routes")
);

// Redirect to first question in details sequence
router.get("/design-ideas/wt-3070-dfc-content/3-details/", function (req, res) {
  res.redirect("/design-ideas/wt-3070-dfc-content/3-details/nino");
});

// This moves `other-benefits` routing to `other-benefits` directory
router.use(
  "/design-ideas/wt-3070-dfc-content/4-other-benefits/",
  require("./views/design-ideas/wt-3070-dfc-content/4-other-benefits/_routes")
);

// This moves jury-service routing to jury-service directory
router.use(
  "/design-ideas/wt-3070-dfc-content/5-jury-service/",
  require("./views/design-ideas/wt-3070-dfc-content/5-jury-service/_routes")
);

// This moves current-employment routing to current-employment directory
router.use(
  "/design-ideas/wt-3070-dfc-content/6-current-employment/",
  require("./views/design-ideas/wt-3070-dfc-content/6-current-employment/_routes")
);

// This moves previous-employment routing to previous-employment directory
router.use(
  "/design-ideas/wt-3070-dfc-content/7-previous-employment/",
  require("./views/design-ideas/wt-3070-dfc-content/7-previous-employment/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/design-ideas/wt-3070-dfc-content/8-abroad/",
  require("./views/design-ideas/wt-3070-dfc-content/8-abroad/_routes")
);

// This moves `pensions` routing to `pensions` directory
router.use(
  "/design-ideas/wt-3070-dfc-content/9-pensions/",
  require("./views/design-ideas/wt-3070-dfc-content/9-pensions/_routes")
);

// This moves `education` routing to `education` directory
router.use(
  "/design-ideas/wt-3070-dfc-content/10-education/",
  require("./views/design-ideas/wt-3070-dfc-content/10-education/_routes")
);

// This moves `availability` routing to `availability` directory
router.use(
  "/design-ideas/wt-3070-dfc-content/11-availability/",
  require("./views/design-ideas/wt-3070-dfc-content/11-availability/_routes")
);

// This moves `error` routing to `error` directory
router.use(
  "/design-ideas/wt-3070-dfc-content/error/",
  require("./views/design-ideas/wt-3070-dfc-content/error/_routes")
);

// DfC CONTENT CHANGES WT-1661  ///////////////////////////////////////////

// This moves eligibility routing to eligibility directory
router.use(
  "/design-ideas/wt-1661-dfc-content/1-eligibility/",
  require("./views/design-ideas/wt-1661-dfc-content/1-eligibility/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/design-ideas/wt-1661-dfc-content/2-claim-start/",
  require("./views/design-ideas/wt-1661-dfc-content/2-claim-start/_routes")
);

// This moves details routing to details directory
router.use(
  "/design-ideas/wt-1661-dfc-content/3-details/",
  require("./views/design-ideas/wt-1661-dfc-content/3-details/_routes")
);

// Redirect to first question in details sequence
router.get("/design-ideas/wt-1661-dfc-content/3-details/", function (req, res) {
  res.redirect("/design-ideas/wt-1661-dfc-content/3-details/nino");
});

// This moves `other-benefits` routing to `other-benefits` directory
router.use(
  "/design-ideas/wt-1661-dfc-content/4-other-benefits/",
  require("./views/design-ideas/wt-1661-dfc-content/4-other-benefits/_routes")
);

// This moves jury-service routing to jury-service directory
router.use(
  "/design-ideas/wt-1661-dfc-content/5-jury-service/",
  require("./views/design-ideas/wt-1661-dfc-content/5-jury-service/_routes")
);

// This moves current-employment routing to current-employment directory
router.use(
  "/design-ideas/wt-1661-dfc-content/6-current-employment/",
  require("./views/design-ideas/wt-1661-dfc-content/6-current-employment/_routes")
);

// This moves previous-employment routing to previous-employment directory
router.use(
  "/design-ideas/wt-1661-dfc-content/7-previous-employment/",
  require("./views/design-ideas/wt-1661-dfc-content/7-previous-employment/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/design-ideas/wt-1661-dfc-content/8-abroad/",
  require("./views/design-ideas/wt-1661-dfc-content/8-abroad/_routes")
);

// This moves `pensions` routing to `pensions` directory
router.use(
  "/design-ideas/wt-1661-dfc-content/9-pensions/",
  require("./views/design-ideas/wt-1661-dfc-content/9-pensions/_routes")
);

// This moves `education` routing to `education` directory
router.use(
  "/design-ideas/wt-1661-dfc-content/10-education/",
  require("./views/design-ideas/wt-1661-dfc-content/10-education/_routes")
);

// This moves `availability` routing to `availability` directory
router.use(
  "/design-ideas/wt-1661-dfc-content/11-availability/",
  require("./views/design-ideas/wt-1661-dfc-content/11-availability/_routes")
);

// This moves `error` routing to `error` directory
router.use(
  "/design-ideas/wt-1661-dfc-content/error/",
  require("./views/design-ideas/wt-1661-dfc-content/error/_routes")
);
///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//  ROUTING FOR VERSION 3.0                                                 //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

// This moves V3 routing routing to v3 directory
router.use(
  "/v3_0-citizen/",
  require("./views/v3_0-citizen/_routes")
);
// This moves eligibility routing to eligibility directory
router.use(
  "/v3_0-citizen/1-eligibility/",
  require("./views/v3_0-citizen/1-eligibility/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/v3_0-citizen/2-claim-start/",
  require("./views/v3_0-citizen/2-claim-start/_routes")
);

// This moves details routing to details directory
router.use(
  "/v3_0-citizen/3-details/",
  require("./views/v3_0-citizen/3-details/_routes")
);

// Redirect to first question in details sequence
router.get("/v3_0-citizen/3-details/", function (req, res) {
  res.redirect("/v3_0-citizen/3-details/nino");
});

// This moves `other-benefits` routing to `other-benefits` directory
router.use(
  "/v3_0-citizen/4-other-benefits/",
  require("./views/v3_0-citizen/4-other-benefits/_routes")
);

// This moves jury-service routing to jury-service directory
router.use(
  "/v3_0-citizen/5-jury-service/",
  require("./views/v3_0-citizen/5-jury-service/_routes")
);

// This moves current-employment routing to current-employment directory
router.use(
  "/v3_0-citizen/6-current-employment/",
  require("./views/v3_0-citizen/6-current-employment/_routes")
);

// This moves previous-employment routing to previous-employment directory
router.use(
  "/v3_0-citizen/7-previous-employment/",
  require("./views/v3_0-citizen/7-previous-employment/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/v3_0-citizen/8-abroad/",
  require("./views/v3_0-citizen/8-abroad/_routes")
);

// This moves `pensions` routing to `pensions` directory
router.use(
  "/v3_0-citizen/9-pensions/",
  require("./views/v3_0-citizen/9-pensions/_routes")
);

// This moves `education` routing to `education` directory
router.use(
  "/v3_0-citizen/10-education/",
  require("./views/v3_0-citizen/10-education/_routes")
);

// This moves `availability` routing to `availability` directory
router.use(
  "/v3_0-citizen/11-availability/",
  require("./views/v3_0-citizen/11-availability/_routes")
);

// This moves `error` routing to `error` directory
router.use(
  "/v3_0-citizen/error/",
  require("./views/v3_0-citizen/error/_routes")
);

// {END OF ROUTING FOR VERSION 3.0} ///////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//  ROUTING FOR VERSION 2.2                                                 //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

// This moves eligibility routing to eligibility directory
router.use(
  "/v2_2-citizen/1-eligibility/",
  require("./views/v2_2-citizen/1-eligibility/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/v2_2-citizen/2-claim-start/",
  require("./views/v2_2-citizen/2-claim-start/_routes")
);

// This moves details routing to details directory
router.use(
  "/v2_2-citizen/3-details/",
  require("./views/v2_2-citizen/3-details/_routes")
);

// Redirect to first question in details sequence
router.get("/v2_2-citizen/3-details/", function (req, res) {
  res.redirect("/v2_2-citizen/3-details/nino");
});

// This moves `other-benefits` routing to `other-benefits` directory
router.use(
  "/v2_2-citizen/4-other-benefits/",
  require("./views/v2_2-citizen/4-other-benefits/_routes")
);

// This moves jury-service routing to jury-service directory
router.use(
  "/v2_2-citizen/5-jury-service/",
  require("./views/v2_2-citizen/5-jury-service/_routes")
);

// This moves current-employment routing to current-employment directory
router.use(
  "/v2_2-citizen/6-current-employment/",
  require("./views/v2_2-citizen/6-current-employment/_routes")
);

// This moves previous-employment routing to previous-employment directory
router.use(
  "/v2_2-citizen/7-previous-employment/",
  require("./views/v2_2-citizen/7-previous-employment/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/v2_2-citizen/8-abroad/",
  require("./views/v2_2-citizen/8-abroad/_routes")
);

// This moves `pensions` routing to `pensions` directory
router.use(
  "/v2_2-citizen/9-pensions/",
  require("./views/v2_2-citizen/9-pensions/_routes")
);

// This moves `education` routing to `education` directory
router.use(
  "/v2_2-citizen/10-education/",
  require("./views/v2_2-citizen/10-education/_routes")
);

// This moves `availability` routing to `availability` directory
router.use(
  "/v2_2-citizen/11-availability/",
  require("./views/v2_2-citizen/11-availability/_routes")
);

// This moves `error` routing to `error` directory
router.use(
  "/v2_2-citizen/error/",
  require("./views/v2_2-citizen/error/_routes")
);

// {END OF ROUTING FOR VERSION 2.2} ///////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//  ROUTING FOR VERSION 2.1                                                 //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

// This moves eligibility routing to eligibility directory
router.use(
  "/v2_1-citizen/1-eligibility/",
  require("./views/v2_1-citizen/1-eligibility/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/v2_1-citizen/2-claim-start/",
  require("./views/v2_1-citizen/2-claim-start/_routes")
);

// This moves details routing to details directory
router.use(
  "/v2_1-citizen/3-details/",
  require("./views/v2_1-citizen/3-details/_routes")
);

// Redirect to first question in details sequence
router.get("/v2_1-citizen/3-details/", function (req, res) {
  res.redirect("/v2_1-citizen/3-details/nino");
});

// This moves `other-benefits` routing to `other-benefits` directory
router.use(
  "/v2_1-citizen/4-other-benefits/",
  require("./views/v2_1-citizen/4-other-benefits/_routes")
);

// This moves jury-service routing to jury-service directory
router.use(
  "/v2_1-citizen/5-jury-service/",
  require("./views/v2_1-citizen/5-jury-service/_routes")
);

// This moves current-employment routing to current-employment directory
router.use(
  "/v2_1-citizen/6-current-employment/",
  require("./views/v2_1-citizen/6-current-employment/_routes")
);

// This moves previous-employment routing to previous-employment directory
router.use(
  "/v2_1-citizen/7-previous-employment/",
  require("./views/v2_1-citizen/7-previous-employment/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/v2_1-citizen/8-abroad/",
  require("./views/v2_1-citizen/8-abroad/_routes")
);

// This moves `pensions` routing to `pensions` directory
router.use(
  "/v2_1-citizen/9-pensions/",
  require("./views/v2_1-citizen/9-pensions/_routes")
);

// This moves `education` routing to `education` directory
router.use(
  "/v2_1-citizen/10-education/",
  require("./views/v2_1-citizen/10-education/_routes")
);

// This moves `availability` routing to `availability` directory
router.use(
  "/v2_1-citizen/11-availability/",
  require("./views/v2_1-citizen/11-availability/_routes")
);

// This moves `error` routing to `error` directory
router.use(
  "/v2_1-citizen/error/",
  require("./views/v2_1-citizen/error/_routes")
);

// {END OF ROUTING FOR VERSION 2.1} ///////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//  ROUTING FOR VERSION 2.0                                                 //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

// This moves eligibility routing to eligibility directory
router.use(
  "/v2_0-citizen/1-eligibility/",
  require("./views/v2_0-citizen/1-eligibility/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/v2_0-citizen/2-claim-start/",
  require("./views/v2_0-citizen/2-claim-start/_routes")
);

// This moves details routing to details directory
router.use(
  "/v2_0-citizen/3-details/",
  require("./views/v2_0-citizen/3-details/_routes")
);

// Redirect to first question in details sequence
router.get("/v2_0-citizen/3-details/", function (req, res) {
  res.redirect("/v2_0-citizen/3-details/nino");
});

// This moves `other-benefits` routing to `other-benefits` directory
router.use(
  "/v2_0-citizen/4-other-benefits/",
  require("./views/v2_0-citizen/4-other-benefits/_routes")
);

// This moves jury-service routing to jury-service directory
router.use(
  "/v2_0-citizen/5-jury-service/",
  require("./views/v2_0-citizen/5-jury-service/_routes")
);

// This moves current-employment routing to current-employment directory
router.use(
  "/v2_0-citizen/6-current-employment/",
  require("./views/v2_0-citizen/6-current-employment/_routes")
);

// This moves previous-employment routing to previous-employment directory
router.use(
  "/v2_0-citizen/7-previous-employment/",
  require("./views/v2_0-citizen/7-previous-employment/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/v2_0-citizen/8-abroad/",
  require("./views/v2_0-citizen/8-abroad/_routes")
);

// This moves `pensions` routing to `pensions` directory
router.use(
  "/v2_0-citizen/9-pensions/",
  require("./views/v2_0-citizen/9-pensions/_routes")
);

// This moves `education` routing to `education` directory
router.use(
  "/v2_0-citizen/10-education/",
  require("./views/v2_0-citizen/10-education/_routes")
);

// This moves `availability` routing to `availability` directory
router.use(
  "/v2_0-citizen/11-availability/",
  require("./views/v2_0-citizen/11-availability/_routes")
);

// This moves `error` routing to `error` directory
router.use(
  "/v2_0-citizen/error/",
  require("./views/v2_0-citizen/error/_routes")
);

// {END OF ROUTING FOR VERSION 2.0} ///////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//  ROUTING FOR VERSION 1.5                                                 //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

// This moves eligibility routing to eligibility directory
router.use(
  "/v1_5-citizen/1-eligibility/",
  require("./views/v1_5-citizen/1-eligibility/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/v1_5-citizen/2-claim-start/",
  require("./views/v1_5-citizen/2-claim-start/_routes")
);

// This moves details routing to details directory
router.use(
  "/v1_5-citizen/3-details/",
  require("./views/v1_5-citizen/3-details/_routes")
);

// Redirect to first question in details sequence
router.get("/v1_5-citizen/3-details/", function (req, res) {
  res.redirect("/v1_5-citizen/3-details/nino");
});

// This moves `other-benefits` routing to `other-benefits` directory
router.use(
  "/v1_5-citizen/4-other-benefits/",
  require("./views/v1_5-citizen/4-other-benefits/_routes")
);

// This moves jury-service routing to jury-service directory
router.use(
  "/v1_5-citizen/5-jury-service/",
  require("./views/v1_5-citizen/5-jury-service/_routes")
);

// This moves current-employment routing to current-employment directory
router.use(
  "/v1_5-citizen/6-current-employment/",
  require("./views/v1_5-citizen/6-current-employment/_routes")
);

// This moves previous-employment routing to previous-employment directory
router.use(
  "/v1_5-citizen/7-previous-employment/",
  require("./views/v1_5-citizen/7-previous-employment/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/v1_5-citizen/8-abroad/",
  require("./views/v1_5-citizen/8-abroad/_routes")
);

// This moves `pensions` routing to `pensions` directory
router.use(
  "/v1_5-citizen/9-pensions/",
  require("./views/v1_5-citizen/9-pensions/_routes")
);

// This moves `education` routing to `education` directory
router.use(
  "/v1_5-citizen/10-education/",
  require("./views/v1_5-citizen/10-education/_routes")
);

// This moves `availability` routing to `availability` directory
router.use(
  "/v1_5-citizen/11-availability/",
  require("./views/v1_5-citizen/11-availability/_routes")
);

// This moves `error` routing to `error` directory
router.use(
  "/v1_5-citizen/error/",
  require("./views/v1_5-citizen/error/_routes")
);

// {END OF ROUTING FOR VERSION 1.5} ///////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//  ROUTING FOR VERSION 1.4                                                  //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

// This moves eligibility routing to eligibility directory
router.use(
  "/v1_4-citizen/1-eligibility/",
  require("./views/v1_4-citizen/1-eligibility/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/v1_4-citizen/2-claim-start/",
  require("./views/v1_4-citizen/2-claim-start/_routes")
);

// This moves details routing to details directory
router.use(
  "/v1_4-citizen/3-details/",
  require("./views/v1_4-citizen/3-details/_routes")
);

// Redirect to first question in details sequence
router.get("/v1_4-citizen/3-details/", function (req, res) {
  res.redirect("/v1_4-citizen/3-details/nino");
});

// This moves `other-benefits` routing to `other-benefits` directory
router.use(
  "/v1_4-citizen/4-other-benefits/",
  require("./views/v1_4-citizen/4-other-benefits/_routes")
);

// This moves jury-service routing to jury-service directory
router.use(
  "/v1_4-citizen/5-jury-service/",
  require("./views/v1_4-citizen/5-jury-service/_routes")
);

// This moves current-employment routing to current-employment directory
router.use(
  "/v1_4-citizen/6-current-employment/",
  require("./views/v1_4-citizen/6-current-employment/_routes")
);

// This moves previous-employment routing to previous-employment directory
router.use(
  "/v1_4-citizen/7-previous-employment/",
  require("./views/v1_4-citizen/7-previous-employment/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/v1_4-citizen/8-abroad/",
  require("./views/v1_4-citizen/8-abroad/_routes")
);

// This moves `pensions` routing to `pensions` directory
router.use(
  "/v1_4-citizen/9-pensions/",
  require("./views/v1_4-citizen/9-pensions/_routes")
);

// This moves `education` routing to `education` directory
router.use(
  "/v1_4-citizen/10-education/",
  require("./views/v1_4-citizen/10-education/_routes")
);

// This moves `availability` routing to `availability` directory
router.use(
  "/v1_4-citizen/11-availability/",
  require("./views/v1_4-citizen/11-availability/_routes")
);

// This moves `error` routing to `error` directory
router.use(
  "/v1_4-citizen/error/",
  require("./views/v1_4-citizen/error/_routes")
);

// {END OF ROUTING FOR VERSION 1.4} ///////////////////////////////////////////

/*    */

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//  ROUTING FOR GDS ASSESSMENT VARIATION -- REMOVE POST ASSESSMENT           //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

// This moves eligibility routing to eligibility directory
router.use(
  "/gds-citizen/1-eligibility/",
  require("./views/gds-citizen/1-eligibility/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/gds-citizen/2-claim-start/",
  require("./views/gds-citizen/2-claim-start/_routes")
);

// This moves details routing to details directory
router.use(
  "/gds-citizen/3-details/",
  require("./views/gds-citizen/3-details/_routes")
);

// Redirect to first question in details sequence
router.get("/gds-citizen/3-details/", function (req, res) {
  res.redirect("/gds-citizen/3-details/nino");
});

// This moves `other-benefits` routing to `other-benefits` directory
router.use(
  "/gds-citizen/4-other-benefits/",
  require("./views/gds-citizen/4-other-benefits/_routes")
);

// This moves jury-service routing to jury-service directory
router.use(
  "/gds-citizen/5-jury-service/",
  require("./views/gds-citizen/5-jury-service/_routes")
);

// This moves current-employment routing to current-employment directory
router.use(
  "/gds-citizen/6-current-employment/",
  require("./views/gds-citizen/6-current-employment/_routes")
);

// This moves previous-employment routing to previous-employment directory
router.use(
  "/gds-citizen/7-previous-employment/",
  require("./views/gds-citizen/7-previous-employment/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/gds-citizen/8-abroad/",
  require("./views/gds-citizen/8-abroad/_routes")
);

// This moves `pensions` routing to `pensions` directory
router.use(
  "/gds-citizen/9-pensions/",
  require("./views/gds-citizen/9-pensions/_routes")
);

// This moves `education` routing to `education` directory
router.use(
  "/gds-citizen/10-education/",
  require("./views/gds-citizen/10-education/_routes")
);

// This moves `error` routing to `error` directory
router.use("/gds-citizen/error/", require("./views/gds-citizen/error/_routes"));

// {END OF ROUTING FOR GDS ASSESSMENT VARIATION} ///////////////////////////////////////////

/*    */

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//  ROUTING FOR VERSION 1.3                                                  //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

// This moves eligibility routing to eligibility directory
router.use(
  "/v1_3-citizen/1-eligibility/",
  require("./views/v1_3-citizen/1-eligibility/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/v1_3-citizen/2-claim-start/",
  require("./views/v1_3-citizen/2-claim-start/_routes")
);

// This moves details routing to details directory
router.use(
  "/v1_3-citizen/3-details/",
  require("./views/v1_3-citizen/3-details/_routes")
);

// Redirect to first question in details sequence
router.get("/v1_3-citizen/3-details/", function (req, res) {
  res.redirect("/v1_3-citizen/3-details/nino");
});

// This moves `other-benefits` routing to `other-benefits` directory
router.use(
  "/v1_3-citizen/4-other-benefits/",
  require("./views/v1_3-citizen/4-other-benefits/_routes")
);

// This moves jury-service routing to jury-service directory
router.use(
  "/v1_3-citizen/5-jury-service/",
  require("./views/v1_3-citizen/5-jury-service/_routes")
);

// This moves current-employment routing to current-employment directory
router.use(
  "/v1_3-citizen/6-current-employment/",
  require("./views/v1_3-citizen/6-current-employment/_routes")
);

// This moves previous-employment routing to previous-employment directory
router.use(
  "/v1_3-citizen/7-previous-employment/",
  require("./views/v1_3-citizen/7-previous-employment/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/v1_3-citizen/8-abroad/",
  require("./views/v1_3-citizen/8-abroad/_routes")
);

// This moves `pensions` routing to `pensions` directory
router.use(
  "/v1_3-citizen/9-pensions/",
  require("./views/v1_3-citizen/9-pensions/_routes")
);

// This moves `education` routing to `education` directory
router.use(
  "/v1_3-citizen/10-education/",
  require("./views/v1_3-citizen/10-education/_routes")
);

// This moves `availability` routing to `availability` directory
router.use(
  "/v1_3-citizen/11-availability/",
  require("./views/v1_3-citizen/11-availability/_routes")
);

// This moves `error` routing to `error` directory
router.use(
  "/v1_3-citizen/error/",
  require("./views/v1_3-citizen/error/_routes")
);

// {END OF ROUTING FOR VERSION 1.3} ///////////////////////////////////////////

/*    */

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//  ROUTING FOR VERSION 1.2                                                  //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

// This moves eligibility routing to eligibility directory
router.use(
  "/v1_2-citizen/1-eligibility/",
  require("./views/v1_2-citizen/1-eligibility/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/v1_2-citizen/2-claim-start/",
  require("./views/v1_2-citizen/2-claim-start/_routes")
);

// This moves details routing to details directory
router.use(
  "/v1_2-citizen/3-details/",
  require("./views/v1_2-citizen/3-details/_routes")
);

// Redirect to first question in details sequence
router.get("/v1_2-citizen/3-details/", function (req, res) {
  res.redirect("/v1_2-citizen/3-details/nino");
});

// This moves `other-benefits` routing to `other-benefits` directory
router.use(
  "/v1_2-citizen/4-other-benefits/",
  require("./views/v1_2-citizen/4-other-benefits/_routes")
);

// This moves jury-service routing to jury-service directory
router.use(
  "/v1_2-citizen/5-jury-service/",
  require("./views/v1_2-citizen/5-jury-service/_routes")
);

// This moves current-employment routing to current-employment directory
router.use(
  "/v1_2-citizen/6-current-employment/",
  require("./views/v1_2-citizen/6-current-employment/_routes")
);

// This moves previous-employment routing to previous-employment directory
router.use(
  "/v1_2-citizen/7-previous-employment/",
  require("./views/v1_2-citizen/7-previous-employment/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/v1_2-citizen/8-abroad/",
  require("./views/v1_2-citizen/8-abroad/_routes")
);

// This moves `pensions` routing to `pensions` directory
router.use(
  "/v1_2-citizen/9-pensions/",
  require("./views/v1_2-citizen/9-pensions/_routes")
);

// This moves `education` routing to `education` directory
router.use(
  "/v1_2-citizen/10-education/",
  require("./views/v1_2-citizen/10-education/_routes")
);

// This moves `availability` routing to `availability` directory
router.use(
  "/v1_2-citizen/11-availability/",
  require("./views/v1_2-citizen/11-availability/_routes")
);

// This moves `error` routing to `error` directory
router.use(
  "/v1_2-citizen/error/",
  require("./views/v1_2-citizen/error/_routes")
);

// {END OF ROUTING FOR VERSION 1.2} ///////////////////////////////////////////

/*    */

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//  ROUTING FOR VERSION 1.1                                                  //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

// This moves eligibility routing to eligibility directory
router.use(
  "/v1_1-citizen/1-eligibility/",
  require("./views/v1_1-citizen/1-eligibility/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/v1_1-citizen/2-claim-start/",
  require("./views/v1_1-citizen/2-claim-start/_routes")
);

// This moves details routing to details directory
router.use(
  "/v1_1-citizen/3-details/",
  require("./views/v1_1-citizen/3-details/_routes")
);

// Redirect to first question in details sequence
router.get("/v1_1-citizen/3-details/", function (req, res) {
  res.redirect("/v1_1-citizen/3-details/nino");
});

// This moves `other-benefits` routing to `other-benefits` directory
router.use(
  "/v1_1-citizen/4-other-benefits/",
  require("./views/v1_1-citizen/4-other-benefits/_routes")
);

// This moves jury-service routing to jury-service directory
router.use(
  "/v1_1-citizen/5-jury-service/",
  require("./views/v1_1-citizen/5-jury-service/_routes")
);

// This moves current-employment routing to current-employment directory
router.use(
  "/v1_1-citizen/6-current-employment/",
  require("./views/v1_1-citizen/6-current-employment/_routes")
);

// This moves previous-employment routing to previous-employment directory
router.use(
  "/v1_1-citizen/7-previous-employment/",
  require("./views/v1_1-citizen/7-previous-employment/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/v1_1-citizen/8-abroad/",
  require("./views/v1_1-citizen/8-abroad/_routes")
);

// This moves `pensions` routing to `pensions` directory
router.use(
  "/v1_1-citizen/9-pensions/",
  require("./views/v1_1-citizen/9-pensions/_routes")
);

// This moves `education` routing to `education` directory
router.use(
  "/v1_1-citizen/10-education/",
  require("./views/v1_1-citizen/10-education/_routes")
);

// This moves `availability` routing to `availability` directory
router.use(
  "/v1_1-citizen/11-availability/",
  require("./views/v1_1-citizen/11-availability/_routes")
);

// This moves `error` routing to `error` directory
router.use(
  "/v1_1-citizen/error/",
  require("./views/v1_1-citizen/error/_routes")
);

// {END OF ROUTING FOR VERSION 1.1} ///////////////////////////////////////////

/*    */

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//  ROUTING FOR VERSION 1.0                                                  //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

// This moves eligibility routing to eligibility directory
router.use(
  "/v1_0-citizen/1-eligibility/",
  require("./views/v1_0-citizen/1-eligibility/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/v1_0-citizen/2-claim-start/",
  require("./views/v1_0-citizen/2-claim-start/_routes")
);

// This moves details routing to details directory
router.use(
  "/v1_0-citizen/3-details/",
  require("./views/v1_0-citizen/3-details/_routes")
);

// Redirect to first question in details sequence
router.get("/v1_0-citizen/3-details/", function (req, res) {
  res.redirect("/v1_0-citizen/3-details/nino");
});

// This moves `other-benefits` routing to `other-benefits` directory
router.use(
  "/v1_0-citizen/4-other-benefits/",
  require("./views/v1_0-citizen/4-other-benefits/_routes")
);

// This moves jury-service routing to jury-service directory
router.use(
  "/v1_0-citizen/5-jury-service/",
  require("./views/v1_0-citizen/5-jury-service/_routes")
);

// This moves current-employment routing to current-employment directory
router.use(
  "/v1_0-citizen/6-current-employment/",
  require("./views/v1_0-citizen/6-current-employment/_routes")
);

// This moves previous-employment routing to previous-employment directory
router.use(
  "/v1_0-citizen/7-previous-employment/",
  require("./views/v1_0-citizen/7-previous-employment/_routes")
);

// This moves `abroad` routing to `abroad` directory
router.use(
  "/v1_0-citizen/8-abroad/",
  require("./views/v1_0-citizen/8-abroad/_routes")
);

// This moves `pensions` routing to `pensions` directory
router.use(
  "/v1_0-citizen/9-pensions/",
  require("./views/v1_0-citizen/9-pensions/_routes")
);

// This moves `education` routing to `education` directory
router.use(
  "/v1_0-citizen/10-education/",
  require("./views/v1_0-citizen/10-education/_routes")
);

// This moves `availability` routing to `availability` directory
router.use(
  "/v1_0-citizen/11-availability/",
  require("./views/v1_0-citizen/11-availability/_routes")
);

// This moves `error` routing to `error` directory
router.use(
  "/v1_0-citizen/error/",
  require("./views/v1_0-citizen/error/_routes")
);

// {END OF ROUTING FOR VERSION 1.0} ///////////////////////////////////////////

/*    */

// Add your routes here - above the module.exports line

// Email verification ROUTING

router.post('/design-ideas/wt-800-email-verification/contact-email-verification', function (req, res) {

  let email = req.session.data['email']

  if (email === 'No') {
    res.redirect('/design-ideas/wt-800-email-verification/bank-account')
  } else {
    res.redirect('/design-ideas/wt-800-email-verification/contact-email-verification')
  }
})

router.post('/design-ideas/wt-800-email-verification/bank-account', function (req, res) {

  let email = req.session.data['emailverification']

  if (email === 'No') {
    res.redirect('/design-ideas/wt-800-email-verification/contact-email')
  } else {
    res.redirect('/design-ideas/wt-800-email-verification/bank-account')
  }
})

// Pensions changes routing
router.post('/design-ideas/wt-720-pensions-changes/9a-current-pension/provider-name', function (req, res) {

  let guard = req.session.data['guard']

  if (guard === 'Yes') {
    res.redirect('/design-ideas/wt-720-pensions-changes/9a-current-pension/inherited')
  } else {
    res.redirect('/design-ideas/wt-720-pensions-changes/9a-current-pension/blank')
  }
})

router.post('/design-ideas/wt-720-pensions-changes/9a-current-pension/inherited', function (req, res) {

  let inherited = req.session.data['inherited']

  if (inherited === 'Yes') {
    res.redirect('/design-ideas/wt-720-pensions-changes/9a-current-pension/another-one')
  } else if (inherited === 'No') {
    res.redirect('/design-ideas/wt-720-pensions-changes/9a-current-pension/provider-name')
  } else {
    res.redirect('/design-ideas/wt-720-pensions-changes/9a-current-pension/provider-name')
  }
})

router.post('/design-ideas/wt-720-pensions-changes/9a-current-pension/another-one', function (req, res) {

  let another = req.session.data['another']

  if (another === 'Yes') {
    res.redirect('/design-ideas/wt-720-pensions-changes/9a-current-pension/inherited')
  } else {
    res.redirect('/design-ideas/wt-720-pensions-changes/9a-current-pension/another-one')
  }
})

router.post('/design-ideas/wt-720-pensions-changes/9a-current-pension/increase-does-it', function (req, res) {

  let increase = req.session.data['increase']

  if (increase === 'Yes') {
    res.redirect('/design-ideas/wt-720-pensions-changes/9a-current-pension/increase-when')
  } else {
    res.redirect('/design-ideas/wt-720-pensions-changes/9a-current-pension/another-one')
  }
})

router.post('/design-ideas/wt-720-pensions-changes/9a-current-pension/increase-when', function (req, res) {

  let increase = req.session.data['increase']

  if (increase === 'Yes') {
    res.redirect('/design-ideas/wt-720-pensions-changes/9a-current-pension/another-one')
  } else {
    res.redirect('/design-ideas/wt-720-pensions-changes/9a-current-pension/another-one')
  }
})

// Pensions version 2

router.post('/design-ideas/wt-720-pensions-changes/9b-current-pension/provider-name', function (req, res) {

  let guard = req.session.data['guard']

  if (guard === 'Yes') {
    res.redirect('/design-ideas/wt-720-pensions-changes/9b-current-pension/inherited')
  } else {
    res.redirect('/design-ideas/wt-720-pensions-changes/9b-current-pension/blank')
  }
})

router.post('/design-ideas/wt-720-pensions-changes/9b-current-pension/inherited', function (req, res) {

  let inherited = req.session.data['inherited']

  if (inherited === 'Yes') {
    res.redirect('/design-ideas/wt-720-pensions-changes/9b-current-pension/another-one-inherited')
  } else if (inherited === 'No') {
    res.redirect('/design-ideas/wt-720-pensions-changes/9b-current-pension/provider-name')
  } else {
    res.redirect('/design-ideas/wt-720-pensions-changes/9b-current-pension/provider-name')
  }
})

router.post('/design-ideas/wt-720-pensions-changes/9b-current-pension/another-one', function (req, res) {

  let another = req.session.data['another']

  if (another === 'Yes') {
    res.redirect('/design-ideas/wt-720-pensions-changes/9b-current-pension/inherited')
  } else {
    res.redirect('/design-ideas/wt-720-pensions-changes/9b-current-pension/another-one')
  }
})

router.post('/design-ideas/wt-720-pensions-changes/9b-current-pension/increase-does-it', function (req, res) {

  let increase = req.session.data['increase']

  if (increase === 'Yes') {
    res.redirect('/design-ideas/wt-720-pensions-changes/9b-current-pension/increase-when')
  } else {
    res.redirect('/design-ideas/wt-720-pensions-changes/9b-current-pension/another-one-inherited')
  }
})

router.post('/design-ideas/wt-720-pensions-changes/9b-current-pension/another-one-inherited', function (req, res) {

  let another = req.session.data['another']

  if (another === 'Yes') {
    res.redirect('/design-ideas/wt-720-pensions-changes/9b-current-pension/provider-name')
  } else {
    res.redirect('/design-ideas/wt-720-pensions-changes/9b-current-pension/another-one-inherited')
  }
})

router.post('/design-ideas/wt-720-pensions-changes/9b-current-pension/increase-when', function (req, res) {

  let increase = req.session.data['increase']

  if (increase === 'Yes') {
    res.redirect('/design-ideas/wt-720-pensions-changes/9b-current-pension/another-one-inherited')
  } else {
    res.redirect('/design-ideas/wt-720-pensions-changes/9b-current-pension/another-one-inherited')
  }
})

// Pensions version 3

router.post('/design-ideas/wt-720-pensions-changes/9c-current-pension/provider-name', function (req, res) {

  let guard = req.session.data['guard']

  if (guard === 'Yes') {
    res.redirect('/design-ideas/wt-720-pensions-changes/9c-current-pension/inherited')
  } else {
    res.redirect('/design-ideas/wt-720-pensions-changes/9c-current-pension/blank')
  }
})

router.post('/design-ideas/wt-720-pensions-changes/9c-current-pension/inherited', function (req, res) {

  let inherited = req.session.data['inherited']

  if (inherited === 'Yes') {
    res.redirect('/design-ideas/wt-720-pensions-changes/9c-current-pension/another-one')
  } else if (inherited === 'No') {
    res.redirect('/design-ideas/wt-720-pensions-changes/9c-current-pension/provider-name')
  } else {
    res.redirect('/design-ideas/wt-720-pensions-changes/9c-current-pension/provider-name')
  }
})

router.post('/design-ideas/wt-720-pensions-changes/9c-current-pension/another-one', function (req, res) {

  let another = req.session.data['another']

  if (another === 'Yes') {
    res.redirect('/design-ideas/wt-720-pensions-changes/9c-current-pension/inherited')
  } else {
    res.redirect('/design-ideas/wt-720-pensions-changes/9c-current-pension/another-one')
  }
})

router.post('/design-ideas/wt-720-pensions-changes/9c-current-pension/increase-does-it', function (req, res) {

  let increase = req.session.data['increase']

  if (increase === 'Yes') {
    res.redirect('/design-ideas/wt-720-pensions-changes/9c-current-pension/increase-when')
  } else {
    res.redirect('/design-ideas/wt-720-pensions-changes/9c-current-pension/another-one')
  }
})

router.post('/design-ideas/wt-720-pensions-changes/9c-current-pension/another-one-inherited', function (req, res) {

  let another = req.session.data['another']

  if (another === 'Yes') {
    res.redirect('/design-ideas/wt-720-pensions-changes/9c-current-pension/provider-name')
  } else {
    res.redirect('/design-ideas/wt-720-pensions-changes/9c-current-pension/another-one')
  }
})

router.post('/design-ideas/wt-720-pensions-changes/9c-current-pension/increase-when', function (req, res) {

  let increase = req.session.data['increase']

  if (increase === 'Yes') {
    res.redirect('/design-ideas/wt-720-pensions-changes/9c-current-pension/another-one')
  } else {
    res.redirect('/design-ideas/wt-720-pensions-changes/9c-current-pension/another-one')
  }
})

// Pensions changes routing WT-3046

router.post('/design-ideas/wt-3046-pension-changes/provider-name', function (req, res) {

  let guard = req.session.data['guard']

  if (guard === 'Yes') {
    res.redirect('/design-ideas/wt-3046-pension-changes/provider-name')
  } else {
    res.redirect('/#in-dev')
  }
})


router.post('/design-ideas/wt-3046-pension-changes/another-one', function (req, res) {

  let another = req.session.data['another']

  if (another === 'Yes') {
    res.redirect('/design-ideas/wt-3046-pension-changes/provider-name')
  } else {
    res.redirect('/design-ideas/wt-3046-pension-changes/another-one')
  }
})

router.post('/design-ideas/wt-3046-pension-changes/increase-does-it', function (req, res) {

  let increase = req.session.data['increase']

  if (increase === 'Yes') {
    res.redirect('/design-ideas/wt-3046-pension-changes/increase-when')
  } else {
    res.redirect('/design-ideas/wt-3046-pension-changes/another-one')
  }
})

router.post('/design-ideas/wt-3046-pension-changes/another-one-inherited', function (req, res) {

  let another = req.session.data['another']

  if (another === 'Yes') {
    res.redirect('/design-ideas/wt-3046-pension-changes/provider-name')
  } else {
    res.redirect('/design-ideas/wt-3046-pension-changes/another-one')
  }
})

router.post('/design-ideas/wt-3046-pension-changes/increase-when', function (req, res) {

  let increase = req.session.data['increase']

  if (increase === 'Yes') {
    res.redirect('/design-ideas/wt-3046-pension-changes/another-one')
  } else {
    res.redirect('/design-ideas/wt-3046-pension-changes/another-one')
  }
})

