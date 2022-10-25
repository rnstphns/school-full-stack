const mongoose = require("mongoose");

const school = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  teachers: [
    {
      id: { type: Number, unique: true, required: true },
      name: { type: String, unique: true, required: true },
      department: String,
    },
  ],
  courses: [
    {
      id: { type: String, unique: true, required: true },
      title: { type: String, unique: true, required: true },
      students: [
        {
          id: { type: Number, unique: true, required: true },
          name: { type: String, unique: true, required: true },
          degree: String,
          grade: Number,
        },
      ],
    },
  ],
});

module.exports = mongoose.model("School", school);
