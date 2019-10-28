const User = require('../models/User')
const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = async (req, res, next) => {
    try {
        const token = req.header('x-auth-token');
        if (!token) {
            return res.status(401).json({
                msg: 'No token, authorization denied'
            });
        }
        const decoded = jwt.verify(token, config.get('jwtSecret'));



        let isAdmin = await User.findOne({
            _id: decoded.user.id
        }).select("-password")

        if (!isAdmin) {
            return res.status(401).json({
                msg: 'No user found'
            });
        }
        if (!isAdmin.admin) {
            return res.status(401).json({
                msg: 'In sufficent access'
            });
        }
        next();
    } catch (error) {
        console.error(error.message)
    }











}