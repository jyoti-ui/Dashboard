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
import {
  editEmployee,
  removeEmployee,
  filterEmployee,
  getEmployeeListAction,
  postEmployeeListAction,
  resetCreateEmployeeStatus
} from "./features/Employee/Employees";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState();
  const [tech, setTech] = useState("");
  const [password, setPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const myEmployees = useSelector((state) => state.employees.value);
  const {createEmployeeStatus} = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployeeListAction());
  }, [dispatch]);

  useEffect(() => {
      if(createEmployeeStatus === "success") {
        setName('')
        setEmail('')
        setTech('')
        setPassword('')
        dispatch(resetCreateEmployeeStatus())
      }
    }, [dispatch, createEmployeeStatus])

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTechChange = (e) => {
    setTech(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

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
        <input
          value={tech}
          type="input"
          placeholder="Enter technology"
          onChange={handleTechChange}
        />
        <input
          value={password}
          type="input"
          placeholder="Enter password"
          onChange={handlePasswordChange}
        />
        <button
          onClick={() =>
            dispatch(postEmployeeListAction({ id: myEmployees.length + 1, name, email, tech, password }))
          }
        >
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

        <button onClick={() => dispatch(filterEmployee({ date }))}>
          Filter Employee
        </button>
      </div>
      <div className="display-employee-container">
        {myEmployees.map((employee) => {
          return (
            <div key={employee.id} className="display-employee">
              <h1>{employee.name}</h1>
              <h2>{employee.email}</h2>
              <input
                type="input"
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="Update Email"
              />
              <button
                onClick={() =>
                  dispatch(editEmployee({ id: employee.id, email: newEmail }))
                }
              >
                Update employee email
              </button>
              <button
                onClick={() => dispatch(removeEmployee({ id: employee.id }))}
              >
                Delete employee details
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;

 
