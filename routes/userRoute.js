const express = require('express');
const router = express.Router();
const controller = require('../controller/userController')

router.get('/', controller.Hello)
router.get('/users', controller.getUsers)
router.post('/create-user',controller.createUser)

module.exports = router;