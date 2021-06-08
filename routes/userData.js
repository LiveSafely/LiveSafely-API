var express = require('express');
var router = express.Router();
var userDataController = require("../controllers/userDataController");

router.post('/', userDataController.insert);

router.get('/:id', userDataController.getDataByCode);

router.delete('/:id', userDataController.deleteDataByCode);

router.put('/:id', userDataController.updateDataByCode);

module.exports = router;
