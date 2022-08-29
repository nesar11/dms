const mongoose = require("mongoose");

const TimeOffschema = new mongoose.Schema(
  {
    empName: { type: String, required: true },
    jobTitle: { type: String, required: true },
    department: { type: String, required: true },
    employeeSign:{ type: String, required: true },
    apdbyHOD: { type: String, required: false },
    apdbyHD: { type: String, required: false },
    apdbyCEO: { type: String, required: false },
    dateJoin: {type: Date},
    confirmatinDate: {type: Date},
    reason: { type: String, required: false },
    startDate:   {type: Date},
    endDate:    {type: Date}
  
  },
  { timestamps: true }
);

module.exports = mongoose.model("TimeOff", TimeOffschema);