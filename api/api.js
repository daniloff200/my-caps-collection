const express = require('express');

const capController = require('../controllers/caps');
const router = express.Router();

router.post('/cap', capController.addNew);
router.get('/caps', capController.getCaps);
router.delete('/cap/:capid', capController.deleteCap);
router.get('/cap/:capid', capController.getCapById);

module.exports = router;
