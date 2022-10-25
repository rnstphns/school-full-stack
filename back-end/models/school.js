const mongoose = require("mongoose");

const school = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  teachers: [
    {
      teacher: {
        name: { type: String, unique: true, required: true },
        department: String,
      },
    },
  ],
  courses: [
    {
      title: { type: String, unique: true, required: true },
      students: [
        {
          name: { type: String, unique: true, required: true },
          degree: String,
          grade: Number
        },
      ],
    },
  ],
});

module.exports = mongoose.model("School", school);
