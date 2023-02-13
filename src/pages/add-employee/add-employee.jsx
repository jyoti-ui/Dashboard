import React from "react";
import "./add-employee.css";
import Input from "../../components/input/input";

const AddEmployee = () => {
  return (
    <div className="container">
      <form className="form">
        <Input label="Name" type="text" value="" />
        <Input label="Email" type="text" value="" />
        
        <div className="btn-wrapper">
          <input type="submit" value="Add employee" />
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
