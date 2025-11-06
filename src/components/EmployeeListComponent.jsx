import React, {useEffect, useState} from "react";
import { listEmployees } from "../services/EmployeeService";

// Using a React arrow function export component
const EmployeeListComponent = () => {

    // useState - hook, lets the component remember values between renders
    // employees - state variable, where the data will stored (the list of employees)
    // setEmployees - function that updates the state
    // useState([]) - initializes the state as an empty array
    const [employees, setEmployees] = useState([])

    // useEffect - hook that allows some code to run when the component is first loaded
    useEffect( () => {
        // listEmployees() - calls function that uses Axios to get employee data from Spring Boot backend
        // .then((response) => { ... }) - runs when the request succeeds
        listEmployees().then( (response) => {
            // response.data - list of employees
            // updates the state variable employees with that data.
            setEmployees(response.data);
        }).catch( error => {
            console.error(error);
        })
        // [] - empty array makes it so the code is only run once
    }, [])


    return (
        <div className="container">
            <h2 className="text-center">List of Employees</h2>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Javascript code mapping through  duummyData array and displaying each field as a row*/}
                    {
                        employees.map(employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeListComponent