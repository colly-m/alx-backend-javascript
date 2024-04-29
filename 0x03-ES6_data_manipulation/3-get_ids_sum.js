export default function getStudentIdsSum(students) {
  return students.reduce((acc, stu) => acc + stu.id, 0);
}
