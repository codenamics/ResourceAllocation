const express = require('express')
const router = express.Router();
const auth = require('../../middleware/auth')
const allocationController = require('../../controllers/allocations')


//User
router.post('/', auth, allocationController.createYearAndAllocation)
router.post('/addProject/:id', auth, allocationController.createAllocation)

router.get('/', auth, allocationController.getAllLocationByUser)

router.put('/:id/:proj_id', auth, allocationController.updateAllocation)

router.delete('/:id', auth, allocationController.deleteYear)
router.delete('/:id/:allo_id', auth, allocationController.deleteAllocation)

//Admin


module.exports = router;