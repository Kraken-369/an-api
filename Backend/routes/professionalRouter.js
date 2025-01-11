const router = require('express').Router();
const professional = require('../controllers/professionalController');

router.get('/', professional.getProfessional);

module.exports = router;