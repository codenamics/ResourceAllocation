const {
    validationResult
} = require('express-validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const User = require('../models/User')


exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password -allocations")
        res.json(user)
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server error')
    }
}

exports.userLogin = async (req, res) => {
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
        if (!user) {
            return res.status(400).send({

                msg: "Invalid credentials"

            })
        }
        const isMatch = await bcryptjs.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).send({

                msg: "Invalid credentials"

            })
        }

        const payload = {
            user: {
                id: user.id,
                name: user.name,
                admin: user.admin

            }
        }
        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 3600
        }, (err, token) => {
            if (err) throw err;
            res.json({
                token,

            })
        })
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server error')
    }
}