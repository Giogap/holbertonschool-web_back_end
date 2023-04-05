import getListStudents from "./0-get_list_students.js";

function getStudentsByLocation(students, city) {
  const list = students.filter(student => student.location === city);
  return list;
}

const students = getListStudents();