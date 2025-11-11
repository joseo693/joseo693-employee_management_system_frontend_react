import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const EmployeeComponent = () => {

    // initializing variables to empty strings”
    // firstName — the current value 
    // setFirstName — function we can call to update that value
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    // we can create arrow functions to be called onClick.
    // or we can pass the arrow function directly in  the onClick = {}
    const firstNameHandler = (e) => { setFirstName(e.target.value); }
    const lastNameHandler = (e) => { setLastName(e.target.value); }
    const emailHandler = (e) => { setEmail(e.target.value); }

    //
    const navigator = useNavigate();

    //
    function saveEmployee (e) {
        // prevents browser from doing its default action of page refresh or navigate away.
        e.preventDefault();

        const employee = {firstName, lastName, email}
        console.log(employee);

        // calling createEmployee() from EmployeeService.js
        createEmployee(employee).then( (response) => {
            console.log(response.data);

            // navigates back to the list of employees
            navigator('/employees')
        } )
    }

  return (
    <div className='container'>
        <br /><br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3' >
                <h2 className='text-center'>Add Employee</h2>
                <div className='card-body'>
                    <form>
                        {/* first name label and input */}
                        <div className='form-group mb-2' >
                            <label className='form-label'>First Name:</label>
                            <input 
                                type='text'
                                placeholder='Enter Employee First Name'
                                name='firstName'
                                value={firstName}
                                className='form-control'
                                // if the arrow function is only 1 line we can pass it directly.
                                onChange={ (e) => setFirstName(e.target.value) }
                            ></input>
                        </div>
                        {/* last name label and input */}
                        <div className='form-group mb-2' >
                            <label className='form-label'>Last Name:</label>
                            <input 
                                type='text'
                                placeholder='Enter Employee Last Name'
                                name='lastName'
                                value={lastName}
                                className='form-control'
                                onChange={ (e) => setLastName(e.target.value) }
                            ></input>
                        </div>
                        {/* email label and input */}
                        <div className='form-group mb-2' >
                            <label className='form-label'>Email:</label>
                            <input 
                                type='text'
                                placeholder='Enter Employee Email'
                                name='email'
                                value={email}
                                className='form-control'
                                onChange={ (e) => setEmail(e.target.value) }
                            ></input>
                        </div>
                        <button className='btn btn-success' onClick={saveEmployee}>Submit</button>

                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeComponent
