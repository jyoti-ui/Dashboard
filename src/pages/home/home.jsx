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
import Modal from "../../components/modal/modal";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Input from "../../components/input/input";
import SearchBox from "../../components/search-box/search-box";

const Home = () => {
  const [newEmail, setNewEmail] = useState("");
  const [id, setId] = useState();
  const [inputDate, setInputDate] = useState("");
  const [SOD, setSOD] = useState("");
  const [EOD, setEOD] = useState("");
  const [project, setProject] = useState("");
  const [employeeToView, setEmployeeToView] = useState(null);

  const myEmployees = useSelector((state) => state.employees.value);
  // const {createEmployeeStatus} = useSelector((state) => state.employees);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(employeeToView);

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

  const handleFilterEmployees = () => {};

  const handleEmailChange = () => {};

  return (
    <>
      <div className="search-box">
        <input
          value="Filter by email"
          onChange={handleEmailChange}
        />
        <button variant="outlined" onClick={handleFilterEmployees}>Filter</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Technology</th>
            <th>Password</th>
            <th>Project</th>
            <th>Action</th>
          </tr>
        </thead>
        {myEmployees.map((employee) => {
          return (
            <tbody key={employee.id}>
              <tr>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.tech}</td>
                <td>{employee.password}</td>
                <td>{employee.project}</td>
                <td className="action-buttons">
                  <Button
                    type="button"
                    className="action-btn"
                    variant="contained"
                    color="success"
                    onClick={() => setEmployeeToView(employee)}
                  >
                    {" "}
                    View{" "}
                  </Button>
                  <Button
                    type="button"
                    variant="outlined"
                    className="action-btn"
                    onClick={() => {
                      navigate(`/update/${employee.id}`);
                    }}
                  >
                    Update
                  </Button>
                  <Button
                    type="button"
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() =>
                      dispatch(deleteEmployeeListAction(employee.id))
                    }
                  >
                    {" "}
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      {employeeToView && (
        <Modal
          title="Employee details"
          className="modal"
          onClose={() => {
            setEmployeeToView(null);
          }}
        >
          <div className="modal-container">
            <div>
              <label>Name : {employeeToView.name}</label>
            </div>
            <div>
              <label>Email : {employeeToView.email}</label>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Home;
