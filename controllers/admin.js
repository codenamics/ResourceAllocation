const User = require("../models/User");
const AllocationModel = require("../models/Allocation");
const YearModel = require("../models/Year");

exports.getAllYears = async (req, res) => {
  try {
    let years = await YearModel.find();
    return res.json(years);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server error");
  }
};

exports.getAllUsersAndAllocations = async (req, res) => {
  try {
    let users = await AllocationModel.find({
      year: req.body.year
    }).populate({
      path: "user",
      model: User,
      select: "-password -allocations -admin"
    });
    return res.json(users);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server error");
  }
};

exports.updateUserAllocation = async (req, res) => {
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
    } = req.body;

    let allocation = await AllocationModel.findOne({
      user: req.params.user_id,
      _id: req.params.allo_id
    });

    let proejct = allocation.allocations.filter(
      allo => allo.id === req.params.id
    );
    name === undefined ? proejct[0].name : (proejct[0].name = name);
    jan === undefined ? proejct[0].jan : (proejct[0].jan = jan);
    feb === undefined ? proejct[0].feb : (proejct[0].feb = feb);
    mar === undefined ? proejct[0].mar : (proejct[0].mar = mar);
    apr === undefined ? proejct[0].apr : (proejct[0].apr = apr);
    may === undefined ? proejct[0].may : (proejct[0].may = may);
    jun === undefined ? proejct[0].jun : (proejct[0].jun = jun);
    jul === undefined ? proejct[0].jul : (proejct[0].jul = jul);
    aug === undefined ? proejct[0].aug : (proejct[0].aug = aug);
    sep === undefined ? proejct[0].sep : (proejct[0].sep = sep);
    oct === undefined ? proejct[0].oct : (proejct[0].oct = oct);
    nov === undefined ? proejct[0].nov : (proejct[0].nov = nov);
    dec === undefined ? proejct[0].dec : (proejct[0].dec = dec);

    allocation.save();
   
    return res.json(allocation);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server error");
  }
};
exports.deleteUserYear = async (req, res) => {
  try {
    let allocation = await AllocationModel.findOne({
      user: req.params.user_id,
      _id: req.params.allo_id
    });

    await allocation.remove();

    return res.json({
      msg: "success"
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server error");
  }
};

exports.deleteUserAllocation = async (req, res) => {
  try {
    let allocation = await AllocationModel.findOne({
      user: req.params.user_id,
      _id: req.params.allo_id
    });

    let removeIndex = await allocation.allocations
      .map(allo => allo.id.toString())
      .indexOf(req.params.id);
    if (removeIndex === -1) {
      return res.status(500).send("Server error");
    } else {
      allocation.allocations.splice(removeIndex, 1);

      let saved = await allocation.save();

      return res.json(saved);
    }
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server error");
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await AllocationModel.deleteMany({
      user: req.params.id
    });

    await User.findOneAndRemove({
      _id: req.params.id
    });

    res.json({
      msg: "User deleted"
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
