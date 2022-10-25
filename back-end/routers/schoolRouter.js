const express = require("express");
const router = express.Router();
const {
  getSchools,
  clearSchools,
  fillSchools,
  getSchoolByName,
  getCourses,
  getTeachers,
  newTeacher,
  deleteTeacher,
  updateTeacherName,
  addStudentToCourse,
  updateStudent,
  getStudents,
  getCourseDetails,
} = require("../controllers/schoolController");

router.post("/fill", express.json(), fillSchools);
router.delete("/clear", clearSchools);
router.get("/all", getSchools);
router.get("/:school_name", getSchoolByName);
router.get("/:school_name/courses", getCourses);
router.get("/:school_name/courses/:course_id", getCourseDetails)
router.get("/:school_name/teachers", getTeachers);
router.get("/:school_name/students", getStudents);
router.post("/:school_name/teachers/new", express.json(), newTeacher);
router.delete("/:school_name/teachers/:teacher_id", deleteTeacher);
router.patch("/:school_name/teachers/:teacher_id", express.json(), updateTeacherName);
router.post("/:school_name/courses/:course_id", express.json(), addStudentToCourse);
router.patch("/:school_name/students", express.json(), updateStudent);

module.exports = router;
