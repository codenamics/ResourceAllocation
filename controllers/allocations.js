const AllocationModel = require('../models/Allocation')
const User = require('../models/User')
const {
    validationResult
} = require('express-validator')
const helpers = require('../middleware/helpers')

exports.createYearAndAllocation = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }
    try {
        let user = await User.findById(req.user.id)
        const {
            year,
            jan,
            feb,
            mar,
            apr,
            may,
            jun,
            jul,
            aug,
            sep,
            nov,
            oct,
            dec
        } = req.body
        let allocationObj = helpers.setAllocationObject(jan, feb,
            mar,
            apr,
            may,
            jun,
            jul,
            aug,
            sep,
            nov,
            oct,
            dec)

        const newAllocation = {
            user: req.user.id,
            year,
            allocations: [allocationObj]
        }

        const allocation = await new AllocationModel(
            newAllocation
        ).save()
        await user.allocations.push(allocation._id)
        await user.save()
        return res.json({
            allocation,
        });

    } catch (error) {
        console.error(error.message)
        return res.status(500).send('Server error')
    }
}


exports.createAllocation = async (req, res) => {
    try {
        let allocation = await AllocationModel.findOne({
            user: req.user.id,
            _id: req.params.id
        })
        const {
            jan,
            feb,
            mar,
            apr,
            may,
            jun,
            jul,
            aug,
            sep,
            nov,
            oct,
            dec
        } = req.body

        let allocationObj = helpers.setAllocationObject(
            jan,
            feb,
            mar,
            apr,
            may,
            jun,
            jul,
            aug,
            sep,
            nov,
            oct,
            dec)

        allocation.allocations.unshift(allocationObj);
        let newAllo = await allocation.save();

        return res.json(
            newAllo,
        );

    } catch (error) {
        console.error(error.message)
        return res.status(500).send('Server error')
    }
}

exports.deleteYear = async (req, res) => {
    try {
        let allocation = await AllocationModel.findOne({
            user: req.user.id,
            _id: req.params.id
        });

        await allocation.remove();

        return res.json(

            req.params.id
        )

    } catch (error) {
        console.error(error.message)
        return res.status(500).send('Server error')
    }
}

exports.getAllLocationByUser = async (req, res) => {
    try {
        let allocation = await AllocationModel.find({
            user: req.user.id
        }).sort({
            date: -1
        })
        return res.json(allocation)
    } catch (error) {
        console.error(error.message)
        return res.status(500).send('Server error')
    }
}

exports.deleteAllocation = async (req, res) => {
    try {
        let allocation = await AllocationModel.findOne({
            user: req.user.id,
            _id: req.params.id
        })

        let removeIndex = await allocation.allocations.map(allo => allo.id.toString()).indexOf(req.params.allo_id)

        if (removeIndex === -1) {
            return res.status(500).send('Server error')
        } else {
            allocation.allocations.splice(removeIndex, 1);

            let saved = await allocation.save()

            return res.json(saved)
        }

    } catch (error) {
        console.error(error.message)
        return res.status(500).send('Server error')
    }
}

//TO DO needs to be updated
exports.updateAllocation = async (req, res) => {
    try {
        const {
            name,
            jan,
            feb,
            mar,
            apr,
            may,
            jun,
            jul,
            aug,
            sep,
            nov,
            oct,
            dec
        } = req.body

        let allocation = await AllocationModel.findOne({
            user: req.user.id,
            _id: req.params.id
        })

        let proejct = allocation.allocations.filter(allo => allo.id === req.params.proj_id)

        name === undefined ? proejct[0].name : proejct[0].name = name
        jan === undefined ? proejct[0].jan : proejct[0].jan = jan
        feb === undefined ? proejct[0].feb : proejct[0].feb = feb
        mar === undefined ? proejct[0].mar : proejct[0].mar = mar
        apr === undefined ? proejct[0].apr : proejct[0].apr = apr
        may === undefined ? proejct[0].may : proejct[0].may = may
        jun === undefined ? proejct[0].jun : proejct[0].jun = jun
        jul === undefined ? proejct[0].jul : proejct[0].jul = jul
        aug === undefined ? proejct[0].aug : proejct[0].aug = aug
        sep === undefined ? proejct[0].sep : proejct[0].sep = sep
        oct === undefined ? proejct[0].oct : proejct[0].oct = oct
        nov === undefined ? proejct[0].nov : proejct[0].nov = nov
        dec === undefined ? proejct[0].dec : proejct[0].dec = dec

        allocation.save()
        return res.json(allocation)

    } catch (error) {
        console.error(error.message)
        return res.status(500).send('Server error')
    }
}