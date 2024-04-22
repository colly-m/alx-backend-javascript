export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employeesList) {
      // Calculate the number of departments
      return Object.keys(employeesList).length;
    },
  };
}
