const express = require('express');
const router = express.Router();
const main = require('../controllers/main');

router.get('/', main.index);
router.get('/create', main.create);
router.get('/:id', main.show);
router.get('/edit/:id', main.edit);

router.post('/save', main.save);
router.put('/update/:id', main.update);
router.delete('/', main.delete);

module.exports = router;