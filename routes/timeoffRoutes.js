const TimeOff = require("../models/TimeOff");
const env = require("../config/DB")
const {
 verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newTimeOff = new TimeOff(req.body);
  
    try {
      const savedTimeOff = await newTimeOff.save();
      res.status(200).json(savedTimeOff);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //UPDATE
  router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      const updatedTimeOff = await TimeOff.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedTimeOff);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await TimeOff.findByIdAndDelete(req.params.id);
    res.status(200).json("TimeOff has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET TimeOff
router.get("/find/:id", async (req, res) => {
    try {
      const TimeOff = await TimeOff.findById(req.params.id);
      res.status(200).json(TimeOff);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//GET ALL TimeOffS
router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
      let TimeOffs;
  
      if (qNew) {
        TimeOffs = await TimeOff.find().sort({ createdAt: -1 }).limit(1);
      } else if (qCategory) {
        TimeOffs = await TimeOff.find({
          categories: {
            $in: [qCategory],
          },
        });
      } else {
        TimeOffs = await TimeOff.find();
      }
  
      res.status(200).json(TimeOffs);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  



module.exports = router;