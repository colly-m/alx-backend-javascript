export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter((stu) => stu.location === city)
    .map((student) => {
      const grades = newGrades.filter((stu) => stu.studentId === student.id);
      const grade = grades.length ? grades[0].grade : 'N/A';
      return {
        ...student,
        grade,
      };
    });
}
