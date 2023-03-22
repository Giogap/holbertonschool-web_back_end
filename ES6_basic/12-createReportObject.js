export default function createReportObject(employeesList) {
  return {
    employees: { ...employeesList },
  }

}