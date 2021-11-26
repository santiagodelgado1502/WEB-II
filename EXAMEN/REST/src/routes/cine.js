const {Router} = require('express');
const CineController = require('../controller/cine.js');

const router = Router();

router.get('/',CineController.getAll);

router.get('/errores',CineController.errores);

router.post('/',CineController.create);

module.exports = router;