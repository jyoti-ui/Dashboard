import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
    name : "employees",
    initialState : { value : []},
    reducers : {
        updateEmployee : (state, action) => {
            state.value = action.payload
        },
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
        },
        filterEmployee : (state, action) => {
            state.value = state.value.filter(employee => {
                return employee.date > action.payload.date   
            }
            )
        }
    }
})

export const { addEmployee, editEmployee, removeEmployee, updateEmployee, filterEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;