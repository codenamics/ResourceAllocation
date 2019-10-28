const adminController = require('../../controllers/admin')
const isAdmin = require('../../middleware/isAdmin')
const express = require('express')
const router = express.Router();
const auth = require('../../middleware/auth')


router.get('/years', isAdmin, auth, adminController.getAllYears)
router.post('/all', isAdmin, auth, adminController.getAllUsersAndAllocations)

router.put('/:user_id/:allo_id/:id', isAdmin, auth, adminController.updateUserAllocation)

router.delete('/year/:user_id/:allo_id', isAdmin, auth, adminController.deleteUserYear)
router.delete('/allocation/:user_id/:allo_id/:id', isAdmin, auth, adminController.deleteUserAllocation)
router.delete('/user/:id', isAdmin, auth, adminController.deleteUser)


module.exports = router;