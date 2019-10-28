const express = require('express')
const router = express.Router();
const {
    check,
    validationResult
} = require('express-validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const User = require('../../models/User')

router.post('/', [check('name', 'Name is required').not().isEmpty(),

    check('password', "Password needs to be at least 6 characters").isLength({
        min: 6
    })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {

        let errorsArr = errors.array()
        let msg = errorsArr[0].msg
        return res.status(400).send({
            msg
        })
    }
    const {
        name,
        password
    } = req.body;

    try {
        let user = await User.findOne({
            name
        })
        if (user) {
            return res.status(400).send({
                msg: "User already exist"
            })
        }
        user = new User({
            name,
            password
        })

        const salt = await bcryptjs.genSalt(10);

        user.password = await bcryptjs.hash(password, salt)

        await user.save()
        const payload = {
            user: {
                id: user.id,
                name: user.name
            }
        }

        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 360000
        }, (err, token) => {
            if (err) throw err;
            res.json({
                token
            })
        })
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server error')
    }


})

module.exports = router;