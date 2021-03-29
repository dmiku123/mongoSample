const passport = require('passport');
const express = require('express');

const {detailsService,vacationsService} = require('../../services/employee/index');

let router = express.Router();

router.get('/details', passport.authenticate('jwt', { session: false }), detailsService.fetchDetails);
router.put('/details', passport.authenticate('jwt', { session: false }), detailsService.updateDetails);

router.get('/vacation', passport.authenticate('jwt', { session: false }), vacationsService.fetchVacations);
router.post('/vacation', passport.authenticate('jwt', { session: false }), vacationsService.setVacations);
router.delete('/vacation', passport.authenticate('jwt', { session: false }), vacationsService.deleteVacation);

module.exports = router;