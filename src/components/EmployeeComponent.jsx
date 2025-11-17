import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployeeById, updateEmployeeById } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'

const EmployeeComponent = () => {

    // initializing variables to empty strings”
    // firstName — the current value 
    // setFirstName — function we can call to update that value
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const navigator = useNavigate();
    const {id} = useParams();

    const [errors, setErrors] = useState( { 
        firstName: '',
        lastName: '',
        email: ''
    } )

    // useEffect runs when the component loads
    useEffect( () => {
        // If there is an ID present, retrieve the employee with that ID
        // If id exists ( /edit-employee/3) - editing an employee
        // If id is undefined ( /add-employee) - adding a new employee
        if(id) {
            // calling getEmployee() from EmployeeService.js
            getEmployeeById(id).then( (response) => {
                // automatically updates the form so user sees the existing values
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch( error => {
                // catching any errors produced
                console.error(error)
            })
        }
    }, [id])

    // we can create arrow functions to be called onClick.
    // or we can pass the arrow function directly in  the onClick = {}
    const firstNameHandler = (e) => { setFirstName(e.target.value); }
    const lastNameHandler = (e) => { setLastName(e.target.value); }
    const emailHandler = (e) => { setEmail(e.target.value); }


    // gets called when the submit button is clicked to either create a new employee or update an existing employee
    function saveEmployeeHandler (e) {
        // prevents browser from doing its default action of page refresh or navigate away
        e.preventDefault();

        // if validateForm() = true, continue with logic
        if( validateForm() ){
            const employee = {firstName, lastName, email}
            console.log(employee);

            // checking if there is an ID
            if(id) {
                // calling updateEmployeeHandler()
                updateEmployeeHandler(id, employee)
            } else {
                // CREATE a brand new Employee
                // calling createEmployee() from EmployeeService.js
                createEmployee(employee).then( (response) => {
                    console.log(response.data);

                    // navigates back to the list of employees
                    navigator('/employees')
                } ).catch(error => {
                    console.log(error);
                })
            }
        }
    }

    // UPDATE the employee with the given ID
    function updateEmployeeHandler (id, employee) {
        // calling updateEmployeeById() from EmployeeService.js
        updateEmployeeById(id, employee).then( (response) => {
            console.log(response.data);
            // navigates back to the list of employees
            navigator('/employees');
        }).catch(error => {
            console.log(error);
        })
    }

    
    // Validating form data
    function validateForm () {
        let valid = true;

        // create a copy of current errors object
        // spread operator clones object so it can safely be modified  without changing the original directly
        const errorsCopy = {... errors}

        // Check if the field isn’t empty
        if(firstName.trim()) {
            errorsCopy.firstName = '';
        } else {
            errorsCopy.firstName = 'First name is required';
            valid = false;
        }

        if(lastName.trim()) {
            errorsCopy.lastName = '';
        } else {
            errorsCopy.lastName = 'Last name is required';
            valid = false;
        }

        if(email.trim()) {
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Email is required';
            valid = false;
        }

        // updates state of errors object with the new error messages
        setErrors(errorsCopy);

        // returns a simple true/false flag to tell submit function whether the form passed validation
        return valid;
    }


    // Dynamically changes the title header based on if there's an id
    function pageTitle() {
        if(id) {
            return <h2 className='text-center'>Update Employee</h2>
        } else {
            return <h2 className='text-center'>Add Employee</h2>
        }
    }

  return (
    <div className='container'>
        <br /><br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3' >
                { pageTitle() }
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
                                // controls the CSS styling dynamically based on whether there’s an error
                                className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                // if the arrow function is only 1 line we can pass it directly.
                                onChange={ (e) => setFirstName(e.target.value) }
                            ></input>
                            {/* conditional rendering — only shows <div> if there’s an error message */}
                            { errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div> }
                        </div>
                        {/* last name label and input */}
                        <div className='form-group mb-2' >
                            <label className='form-label'>Last Name:</label>
                            <input 
                                type='text'
                                placeholder='Enter Employee Last Name'
                                name='lastName'
                                value={lastName}
                                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                onChange={ (e) => setLastName(e.target.value) }
                            ></input>
                            { errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div> }
                        </div>
                        {/* email label and input */}
                        <div className='form-group mb-2' >
                            <label className='form-label'>Email:</label>
                            <input 
                                type='text'
                                placeholder='Enter Employee Email'
                                name='email'
                                value={email}
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                onChange={ (e) => setEmail(e.target.value) }
                            ></input>
                            { errors.email && <div className='invalid-feedback'>{errors.email}</div> }
                        </div>
                        <button className='btn btn-success' onClick={saveEmployeeHandler}>Submit</button>

                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeComponent
