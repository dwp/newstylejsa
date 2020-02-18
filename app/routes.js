const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
    res.render('index')
    //pensionTracker.reset()
    req.session.destroy()
})

// Add your routes here - above the module.exports line

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//  ROUTING FOR VERSION 1.2                                                  //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

// This moves eligibility routing to eligibility directory
router.use('/v1_2-citizen/1-eligibility/', require('./views/v1_2-citizen/1-eligibility/_routes'))

// This moves `abroad` routing to `abroad` directory
router.use('/v1_2-citizen/2-claim-start/', require('./views/v1_2-citizen/2-claim-start/_routes'))

// This moves details routing to details directory
router.use('/v1_2-citizen/3-details/', require('./views/v1_2-citizen/3-details/_routes'))

// Redirect to first question in details sequence
router.get('/v1_2-citizen/3-details/', function (req, res) {
    res.redirect('/v1_2-citizen/3-details/nino')
})

// This moves `other-benefits` routing to `other-benefits` directory
router.use('/v1_2-citizen/4-other-benefits/', require('./views/v1_2-citizen/4-other-benefits/_routes'))

// This moves jury-service routing to jury-service directory
router.use('/v1_2-citizen/5-jury-service/', require('./views/v1_2-citizen/5-jury-service/_routes'))

// This moves current-employment routing to current-employment directory
router.use('/v1_2-citizen/6-current-employment/', require('./views/v1_2-citizen/6-current-employment/_routes'))

// This moves previous-employment routing to previous-employment directory
router.use('/v1_2-citizen/7-previous-employment/', require('./views/v1_2-citizen/7-previous-employment/_routes'))

// This moves `abroad` routing to `abroad` directory
router.use('/v1_2-citizen/8-abroad/', require('./views/v1_2-citizen/8-abroad/_routes'))

// This moves `pensions` routing to `pensions` directory
router.use('/v1_2-citizen/9-pensions/', require('./views/v1_2-citizen/9-pensions/_routes'))

// This moves `education` routing to `education` directory
router.use('/v1_2-citizen/10-education/', require('./views/v1_2-citizen/10-education/_routes'))

// This moves `availability` routing to `availability` directory
router.use('/v1_2-citizen/11-availability/', require('./views/v1_2-citizen/11-availability/_routes'))

// This moves `error` routing to `error` directory
router.use('/v1_2-citizen/error/', require('./views/v1_2-citizen/error/_routes'))

// {END OF ROUTING FOR VERSION 1.2} ///////////////////////////////////////////

/*    */

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//  ROUTING FOR VERSION 1.1                                                  //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

// This moves eligibility routing to eligibility directory
router.use('/v1_1-citizen/1-eligibility/', require('./views/v1_1-citizen/1-eligibility/_routes'))

// This moves `abroad` routing to `abroad` directory
router.use('/v1_1-citizen/2-claim-start/', require('./views/v1_1-citizen/2-claim-start/_routes'))

// This moves details routing to details directory
router.use('/v1_1-citizen/3-details/', require('./views/v1_1-citizen/3-details/_routes'))

// Redirect to first question in details sequence
router.get('/v1_1-citizen/3-details/', function (req, res) {
    res.redirect('/v1_1-citizen/3-details/nino')
})

// This moves `other-benefits` routing to `other-benefits` directory
router.use('/v1_1-citizen/4-other-benefits/', require('./views/v1_1-citizen/4-other-benefits/_routes'))

// This moves jury-service routing to jury-service directory
router.use('/v1_1-citizen/5-jury-service/', require('./views/v1_1-citizen/5-jury-service/_routes'))

// This moves current-employment routing to current-employment directory
router.use('/v1_1-citizen/6-current-employment/', require('./views/v1_1-citizen/6-current-employment/_routes'))

// This moves previous-employment routing to previous-employment directory
router.use('/v1_1-citizen/7-previous-employment/', require('./views/v1_1-citizen/7-previous-employment/_routes'))

// This moves `abroad` routing to `abroad` directory
router.use('/v1_1-citizen/8-abroad/', require('./views/v1_1-citizen/8-abroad/_routes'))

// This moves `pensions` routing to `pensions` directory
router.use('/v1_1-citizen/9-pensions/', require('./views/v1_1-citizen/9-pensions/_routes'))

// This moves `education` routing to `education` directory
router.use('/v1_1-citizen/10-education/', require('./views/v1_1-citizen/10-education/_routes'))

// This moves `availability` routing to `availability` directory
router.use('/v1_1-citizen/11-availability/', require('./views/v1_1-citizen/11-availability/_routes'))

// This moves `error` routing to `error` directory
router.use('/v1_1-citizen/error/', require('./views/v1_1-citizen/error/_routes'))

// {END OF ROUTING FOR VERSION 1.1} ///////////////////////////////////////////

/*    */

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//  ROUTING FOR VERSION 1.0                                                  //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

// This moves eligibility routing to eligibility directory
router.use('/v1_0-citizen/1-eligibility/', require('./views/v1_0-citizen/1-eligibility/_routes'))

// This moves `abroad` routing to `abroad` directory
router.use('/v1_0-citizen/2-claim-start/', require('./views/v1_0-citizen/2-claim-start/_routes'))

// This moves details routing to details directory
router.use('/v1_0-citizen/3-details/', require('./views/v1_0-citizen/3-details/_routes'))

// Redirect to first question in details sequence
router.get('/v1_0-citizen/3-details/', function (req, res) {
    res.redirect('/v1_0-citizen/3-details/nino')
})

// This moves `other-benefits` routing to `other-benefits` directory
router.use('/v1_0-citizen/4-other-benefits/', require('./views/v1_0-citizen/4-other-benefits/_routes'))

// This moves jury-service routing to jury-service directory
router.use('/v1_0-citizen/5-jury-service/', require('./views/v1_0-citizen/5-jury-service/_routes'))

// This moves current-employment routing to current-employment directory
router.use('/v1_0-citizen/6-current-employment/', require('./views/v1_0-citizen/6-current-employment/_routes'))

// This moves previous-employment routing to previous-employment directory
router.use('/v1_0-citizen/7-previous-employment/', require('./views/v1_0-citizen/7-previous-employment/_routes'))

// This moves `abroad` routing to `abroad` directory
router.use('/v1_0-citizen/8-abroad/', require('./views/v1_0-citizen/8-abroad/_routes'))

// This moves `pensions` routing to `pensions` directory
router.use('/v1_0-citizen/9-pensions/', require('./views/v1_0-citizen/9-pensions/_routes'))

// This moves `education` routing to `education` directory
router.use('/v1_0-citizen/10-education/', require('./views/v1_0-citizen/10-education/_routes'))

// This moves `availability` routing to `availability` directory
router.use('/v1_0-citizen/11-availability/', require('./views/v1_0-citizen/11-availability/_routes'))

// This moves `error` routing to `error` directory
router.use('/v1_0-citizen/error/', require('./views/v1_0-citizen/error/_routes'))

// {END OF ROUTING FOR VERSION 1.0} ///////////////////////////////////////////

/*    */

// Add your routes here - above the module.exports line

module.exports = router
