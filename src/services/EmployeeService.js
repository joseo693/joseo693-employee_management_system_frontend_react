import axios from "axios";

// constant value for the base URL that will be used for the API calls
const REST_API_BASE_URL = "http://localhost:8080/api/employees";

// arrow funtion 
export const listEmployees = () => {
    // axios.get() - sends an HTTP GET request to the given URL
    return axios.get(REST_API_BASE_URL);
}