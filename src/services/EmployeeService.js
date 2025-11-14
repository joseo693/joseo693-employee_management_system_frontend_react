import axios from "axios";

// constant value for the base URL that will be used for the API calls
const REST_API_BASE_URL = "http://localhost:8080/api/employees";

// arrow funtions call the dunctions in spring boot app
// axios.get() - sends an HTTP GET request to the given URL
export const listEmployees = () => axios.get(REST_API_BASE_URL);

// axios.post() - sends an HTTP POST request to the given URL
export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);

// axios.get() - sends an HTTP GET request using the provided employee ID
export const getEmployeeById = (employeeId) => axios.get(REST_API_BASE_URL + '/' + employeeId); 

// axios.put() - sends an HTTP PUT request using the provided employee ID
export const updateEmployeeById = (employeeId, employee) => axios.put(REST_API_BASE_URL + '/' + employeeId, employee);