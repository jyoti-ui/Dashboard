import { createSlice } from "@reduxjs/toolkit";
import { EmployeeDetails } from "../fakedata";

export const employeeSlice = createSlice({
    name : "employees",
    initialState : { value : EmployeeDetails},
    reducers : {
        addEmployee : (state, action ) => {
            state.value.push(action.payload)
        },

        removeEmployee : (state, action) => {
            state.value = state.value.filter(employee => {
                return employee.id !== action.payload.id;
            })
        },
        editEmployee: (state, action) => {
            state.value.map(employee => {
                if(employee.id === action.payload.id) {
                     employee.email = action.payload.email
                }
            return state.value;
            })
        }
    }
})

export const { addEmployee, editEmployee, removeEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;