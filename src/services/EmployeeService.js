import axios from "axios";

// constant value for the base URL that will be used for the API calls
const REST_API_BASE_URL = "http://localhost:8080/api/employees";

// arrow funtion 
// axios.get() - sends an HTTP GET request to the given URL
export const listEmployees = () => axios.get(REST_API_BASE_URL);

// axios.post() - sends an HTTP POST request to the given URL
export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee)