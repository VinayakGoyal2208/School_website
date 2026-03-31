const { registerUser, loginUser } = require('../Controllers/AuthController');
const { registerValidation, loginValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router();

router.post("/Register", registerValidation, registerUser);
router.post("/loginPage", loginValidation, loginUser);

module.exports = router;