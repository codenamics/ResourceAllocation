const express = require('express')
const router = express.Router();
const auth = require('../../middleware/auth')
const {
    check
} = require('express-validator')
const userController = require('../../controllers/auth')

router.get('/', auth, userController.getUser)

router.post('/login', [

        check('password', "Password is required").exists()
    ],
    userController.userLogin
)



module.exports = router;