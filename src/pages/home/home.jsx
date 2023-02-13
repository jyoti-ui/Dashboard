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

import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterEmployee,
  getEmployeeListAction,
  postEmployeeListAction,
  deleteEmployeeListAction,
  updateEmployeeListAction,
  updateDeveloperListAction,
} from "../../features/Employees/Employees";
import "./home.css";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState();
  const [tech, setTech] = useState("");
  const [password, setPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [id, setId] = useState();
  const [inputDate, setInputDate] = useState("");
  const [SOD, setSOD] = useState("");
  const [EOD, setEOD] = useState("");
  const [project, setProject] = useState("");

  const myEmployees = useSelector((state) => state.employees.value);
  // const {createEmployeeStatus} = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployeeListAction());
  }, [dispatch]);

  // useEffect(() => {
  //     if(createEmployeeStatus === "success") {
  //       setName('')
  //       setEmail('')
  //       setTech('')
  //       setPassword('')
  //       dispatch(resetCreateEmployeeStatus())
  //     }
  //   }, [dispatch, createEmployeeStatus])

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

  const handleProject = (e) => {
    setProject(e.target.value);
  };

  const handleUpdateEmail = (e) => {
    setNewEmail(e.target.value);
  };

  const handleEmployeeId = (e) => {
    setId(e.target.value);
  };

  const handleInputDate = (e) => {
    setInputDate(e.target.value);
  };

  const handleSOD = (e) => {
    setSOD(e.target.value);
  };

  const handleEOD = (e) => {
    setEOD(e.target.value);
  };

  const handleOnSave = () => {
    dispatch(updateDeveloperListAction({ id, inputDate, SOD, EOD }));
  };

  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Technology</th>
        <th>Password</th>
        <th>Project</th>
      </tr>
      {myEmployees.map(({ id, name, email, tech, password, project }) => {
        return (
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{tech}</td>
            <td>{password}</td>
            <td>{project}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default Home;
