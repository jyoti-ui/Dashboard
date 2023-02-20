import React, { useState } from "react";
import "./developer.css";
import Input from "../../components/input/input";
import { useSelector, useDispatch } from "react-redux";
import { updateDeveloperListAction } from "../../features/Employees/Employees";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const defaultFormInput = {
  id: "",
  date: "",
  sod: "",
  eod: "",
};

const Developer = () => {
  const [formField, setFormField] = useState(defaultFormInput);
  const { id, sod, eod, date } = formField;

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
      updateDeveloperListAction({
        id,
        sod,
        eod,
      })
    );
    resetFormFields();
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <Input
          label="Employee ID"
          type="text"
          name="id"
          value={id}
          onChange={handleChange}
        />
        <Input
          label="SOD"
          type="date"
          name="date"
          value={date}
          onChange={handleChange}
        />
        <Input
          label="SOD"
          type="textarea"
          name="sod"
          value={sod}
          onChange={handleChange}
        />
        <Input
          label="EOD"
          type="textarea"
          name="eod"
          value={eod}
          onChange={handleChange}
        />
        <div className="btn-wrapper">
          <Button type="submit" variant="contained" color="success">
            <AddCircleOutlineIcon /> Add SOD and EOD
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Developer;
