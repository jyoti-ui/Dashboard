// import './App.css';
// import Dashboard from './pages/dashboard/dashboard';
// import Login from './pages/login/login';

// const App = () => {
//   return (
//     <div>
//       <Login/>
//       <Dashboard/>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addEmployee, editEmployee, removeEmployee, updateEmployee, filterEmployee } from "./features/Employees";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate ] = useState();
  const [newEmail, setNewEmail] = useState("");

  const myEmployees = useSelector((state) => state.employees.value);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(users => dispatch(updateEmployee(users)))
  },[dispatch])

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value)
  }

  return (
    <div className="employee-dashboard">
      <div className="add-employee">
        <input
          value={name}
          type="input"
          placeholder="Enter name"
          onChange={handleNameChange}
        />
        <input
          value={email}
          type="input"
          placeholder="Enter email"
          onChange={handleEmailChange}
        />
        <button onClick={() => dispatch(addEmployee({ id: myEmployees.length + 1, name, email }))}>
          Add Employee
        </button>
      </div>
      <div className="filter-employee">
      <input
        value={date}
        type="input"
        placeholder="Enter date"
        onChange={handleDateChange}
      />

      <button onClick={() => dispatch(filterEmployee({date}))}>
        Filter Employee
      </button>
    </div>
      <div className="display-employee-container">
        {myEmployees.map((employee) => {
          return (
            <div key={employee.id} className="display-employee">
              <h1>{employee.name}</h1>
              <h2>{employee.email}</h2>
              <input type="input" onChange={(e) => setNewEmail(e.target.value)} placeholder="Update Email"/>
              <button onClick={() => dispatch(editEmployee({id : employee.id , email: newEmail}))}>Update employee email</button>
              <button onClick={() => dispatch(removeEmployee({id: employee.id}))}>Delete employee details</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;