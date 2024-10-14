const express = require('express');
const { signup, login } = require('../controllers/userController');

const router = express.Router();

//POST /api/v1/user/signup

router.post('/signup', signup);

//POST /api/v1/user/login

router.post('/login', login)

module.exports = router;