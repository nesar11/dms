const mongoose = require("mongoose");

const Otformschema = new mongoose.Schema(
  {
    empName: { type: String, required: true },
    department: { type: String, required: true },
    position: { type: String, required: true },
    fulltime:{type: Boolean},
    partTime:{type: Boolean},
    payroleNo:{ type: String, required: true },
    Duration:{type:Date},
    startDate:   {type: Date},
    endDate:    {type: Date},
    totalHours: {type:Date},
    descOfDuty:{ type: String, required: true },
    additionalHrsWrk:{ type: Array, required: true },
    apdbyHOD: { type: String, required: false },
    sign:{type:String},
    applicantName:{type:String},
    apdbyHD: { type: String, required: false },
    apdbyCEO: { type: String, required: false },
    verifiedBy: { type: String, required: false },
    date: {type: Date},
    dtatus:{type:String}

  
  },
  { timestamps: true }
);

module.exports = mongoose.model("OtForms", Otformschema);