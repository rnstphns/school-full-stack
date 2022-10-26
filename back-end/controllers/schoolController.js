const School = require("../models/school");

module.exports.clearSchools = async (req, res, next) => {
  try {
    const result = await School.deleteMany({});
    res.json(result);
  } catch (error) {
    next(error);
  }
};
module.exports.fillSchools = async (req, res, next) => {
  try {
    const result = await School.insertMany(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
module.exports.getSchools = async (req, res, next) => {
  try {
    console.log(`recieved request for all schools`);
    const result = await School.find({});
    res.json(result);
  } catch (error) {
    next(error);
  }
};
module.exports.getSchoolByName = async (req, res, next) => {
  try {
    const { school_name } = req.params; //TODO case handling needed in client (or middleware)
    console.log(`recieved request for ${school_name}`);
    const result = await School.find({ name: school_name });
    res.json(result);
  } catch (error) {
    next(error);
  }
};
module.exports.getCourses = async (req, res, next) => {
  try {
    const { school_name } = req.params;
    const result = await School.find(
      { name: school_name },
      { "courses.id": true, "courses.title": true, _id: false }
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};
module.exports.getTeachers = async (req, res, next) => {
  try {
    const { school_name } = req.params;
    const result = await School.find(
      { name: school_name },
      {
        "teachers.id": true,
        "teachers.name": true,
        "teachers.department": true,
        _id: false,
      }
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};
module.exports.newTeacher = async (req, res, next) => {
  try {
    const { school_name } = req.params;
    const new_teacher = req.body;
    const result = await School.updateOne(
      { name: school_name },
      { $push: { teachers: new_teacher } }
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};
module.exports.deleteTeacher = async (req, res, next) => {
  try {
    const { school_name, teacher_id } = req.params;
    const result = await School.updateOne(
      { name: school_name },
      { $pull: { teachers: { id: teacher_id } } }
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};
module.exports.updateTeacherName = async (req, res, next) => {
  try {
    const { school_name, teacher_id } = req.params;
    const new_name = req.body.name;
    const result = await School.updateOne(
      { name: school_name, "teachers.id": teacher_id },
      { $set: { "teachers.$.name": new_name } }
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};
module.exports.getCourseDetails = async (req, res, next) => {
  try {
    const { school_name, course_id } = req.params;
    const result = await School.findOne(
      { name: school_name },
      { courses: { $elemMatch: { id: course_id } } }
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};
module.exports.getStudents = async (req, res, next) => {
  try {
    const { school_name } = req.params;
    const result = await School.find(
      { name: school_name }
      //possible with aggregation: spread courses, projection: couses.students
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};
module.exports.updateStudent = async (req, res, next) => { //TODO, fix these filters
  try {
    const { school_name, student_id } = req.params;
    const { name, degree } = req.body;
    const result = await School.updateOne(
      { name: school_name },
      {
        $set: {
          "courses.$.[filterCourse].students.$.[filterStudent].name": name,
        },
      },
      {
        arrayFilters: [
          { "filterCourse.courses": { "students.id": student_id } },
          { "filterStudent.id": student_id },
        ],
      }
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};
module.exports.addStudentToCourse = async (req, res, next) => {
  try {
    const { school_name, course_id } = req.params;
    const new_student = req.body;
    const result = await School.updateOne(
      { name: school_name, "courses.id": course_id },
      { $addToSet: { "courses.$.students": new_student } }
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};
module.exports.updateGrade = async (req, res, next) => {
  try {
    const { school_name, course_id, student_id } = req.params;
    const grade = req.body.grade;
    const result = await School.updateOne(
      { name: school_name },
      { $set: { "courses.$[c].students.$[s].grade": grade } },
      { arrayFilters: [{ "c.id": course_id }, { "s.id": student_id }] }
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};
module.exports.dropStudentFromCourse = async (req, res, next) => {
  try {
    const { school_name, course_id, student_id } = req.params;
    const result = await School.updateOne(
      { name: school_name, "courses.id": course_id },
      { $pull: { "courses.$.students": { id: student_id } } }
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};
