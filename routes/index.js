var express = require('express');
var router = express.Router();

var ctrlSpaces = require('../controllers/spaces');

//spaces
router.get('/spaces', ctrlSpaces.getAllSpaces);
router.get('/spaces/:spaceid', ctrlSpaces.getOneSpace);
router.put('/spaces/:spaceid', ctrlSpaces.updateOneSpace);

module.exports = router;
