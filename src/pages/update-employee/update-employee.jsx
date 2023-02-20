import React, { useState, useEffect } from "react";
import "./update-employee.css";
import Input from "../../components/input/input";
import { useDispatch, useSelector } from "react-redux";
import { updateEmployeeListAction } from "../../features/Employees/Employees";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useParams } from "react-router-dom";

const defaultUpdateFormInput = {
  name: "",
  email: "",
  tech: "",
  password: "",
  project: "",
};

const UpdateEmployee = () => {
  const [formField, setFormField] = useState(defaultUpdateFormInput);
  const { name, email, tech, password, project } = formField;

  const { id } = useParams();

  const dispatch = useDispatch();

  const myEmployees = useSelector((state) => state.employees.value);

  useEffect(() => {
    const employeeToUpdate = myEmployees.filter((employee) => {
      return employee.id === id;
    });
    console.log(employeeToUpdate)
    setFormField(employeeToUpdate);
  }, []);

  const resetFormFields = () => {
    setFormField(defaultUpdateFormInput);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateEmployeeListAction({
        id: id,
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
    <>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <Input
            label="Name"
            type="text"
            value={name}
            name="name"
            onChange={handleChange}
          />
          <Input
            label="Email"
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <Input
            label="Technology"
            type="text"
            name="tech"
            value={tech}
            onChange={handleChange}
          />
          <Input
            label="Password"
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <Input
            label="Project"
            type="text"
            name="project"
            value={project}
            onChange={handleChange}
          />

          <div className="btn-wrapper">
            <Button type="submit" variant="contained" color="success">
              <AddCircleOutlineIcon /> Update Employee
            </Button>
          </div>
        </form>
      </div>
      );
    </>
  );
};

export default UpdateEmployee;
