const Otform = require("../models/Otform");
const env = require("../config/DB")
const {
 verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newOtform = new Otform(req.body);
  
    try {
      const savedOtform = await newOtform.save();
      res.status(200).json(savedOtform);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //UPDATE
  router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      const updatedOtform = await Otform.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedOtform);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Otform.findByIdAndDelete(req.params.id);
    res.status(200).json("Otform has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Otform
router.get("/find/:id", async (req, res) => {
    try {
      const Otform = await Otform.findById(req.params.id);
      res.status(200).json(Otform);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//GET ALL OtformS
router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
      let Otforms;
  
      if (qNew) {
        Otforms = await Otform.find().sort({ createdAt: -1 }).limit(1);
      } else if (qCategory) {
        Otforms = await Otform.find({
          categories: {
            $in: [qCategory],
          },
        });
      } else {
        Otforms = await Otform.find();
      }
  
      res.status(200).json(Otforms);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  



module.exports = router;