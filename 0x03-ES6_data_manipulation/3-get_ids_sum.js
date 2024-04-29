export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    return students.reduce((acc, stu) => acc + stu.id, 0);
  }
  return [];
}
