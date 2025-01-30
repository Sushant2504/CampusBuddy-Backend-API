
const router = require('express').Router();
const UserController = require('../controllers/user.controller');

router.post('/registration', UserController.register);


module.exports = router;


