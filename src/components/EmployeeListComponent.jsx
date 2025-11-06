import React from "react";

// Using a React arrow function export component
const EmployeeListComponent = () => {

    // creating dummy data to display for now
    const dummyData= [
        {
            "id" : 1,
            "firstName" : "Jose",
            "lastName" : "Ochoa",
            "email" : "jose.ochoa@email.com"
        },
        {
            "id" : 2,
            "firstName" : "German",
            "lastName" : "Rios",
            "email" : "german.rios@email.com"
        },
        {
            "id" : 3,
            "firstName" : "Ale",
            "lastName" : "Pina",
            "email" : "ale.pina@email.com"
        },
    ]

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
                        dummyData.map(employee =>
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