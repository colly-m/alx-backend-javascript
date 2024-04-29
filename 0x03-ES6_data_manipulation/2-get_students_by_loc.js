export default function getStudentsByLocation(stuList, city) {
  if (Array.isArray(stuList)) {
    return stuList.filter((student) => student.city === city);
  }
  return [];
}
