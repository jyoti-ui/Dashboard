import React, { useState } from "react";
import "./add-employee.css";
import Input from "../../components/input/input";
import { useSelector, useDispatch } from "react-redux";
import { postEmployeeListAction } from "../../features/Employees/Employees";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const defaultFormInput = {
  id: "",
  name: "",
  email: "",
  tech: "",
  password: "",
  project: "",
};

const AddEmployee = () => {
  const [formField, setFormField] = useState(defaultFormInput);
  const { id, name, email, tech, password, project } = formField;

  const dispatch = useDispatch();
  const myEmployees = useSelector((state) => state.employees.value);

  const resetFormFields = () => {
    setFormField(defaultFormInput);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postEmployeeListAction({
        id: myEmployees[myEmployees.length - 1].id + 1,
        name,
        email,
        tech,
        password,
        project,
      })
    );
    resetFormFields();
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <Input
          label="Name"
          type="text"
          value={name}
          name="name"
          onChange={handleChange}
          required
        />
        <Input
          label="Email"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <Input
          label="Technology"
          type="text"
          name="tech"
          value={tech}
          onChange={handleChange}
          required
        />
        <Input
          label="Password"
          type="text"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <Input
          label="Project"
          type="text"
          name="project"
          value={project}
          onChange={handleChange}
          required
        />

        <div className="btn-wrapper">
          <Button type="submit" variant="contained" color="success">
            <AddCircleOutlineIcon /> Add Employee
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;

// <div className="add-employee">
// <input
//   value={name}
//   type="input"
//   placeholder="Enter name"
//   onChange={handleNameChange}
// />
// <input
//   value={email}
//   type="input"
//   placeholder="Enter email"
//   onChange={handleEmailChange}
// />
// <input
//   value={tech}
//   type="input"
//   placeholder="Enter technology"
//   onChange={handleTechChange}
// />
// <input
//   value={password}
//   type="input"
//   placeholder="Enter password"
//   onChange={handlePasswordChange}
// />
// <input
//   value={project}
//   type="input"
//   placeholder="Enter project name"
//   onChange={handleProject}
// />
// <button
//   onClick={() =>
//     dispatch(
//       postEmployeeListAction({
//         id: myEmployees[myEmployees.length - 1].id + 1,
//         name,
//         email,
//         tech,
//         password,
//         project,
//       })
//     )
//   }
// >
//   Add Employee
// </button>
// </div>
