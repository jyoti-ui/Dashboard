import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getEmployeeListApi,
  postEmployeeListApi,
  deleteEmployeeListApi,
  updateEmployeeListApi
} from "./EmployeeService";

const initialState = {
  value: [],
  loadStatus: "",
  createEmployeeStatus: "",
  deleteEmployeeStatus: "",
  updateEmployeeStatus:""
};

export const getEmployeeListAction = createAsyncThunk(
  "users/getEmployeeListAction",
  async () => {
    const response = await getEmployeeListApi();
    return response.data;
  }
);

export const postEmployeeListAction = createAsyncThunk(
  "users/postEmployeeListAction",
  async (data) => {
    const response = await postEmployeeListApi(data);
    return response.data;
  }
);

export const deleteEmployeeListAction = createAsyncThunk(
  "users/deleteEmployeeListAction",
  async (data) => {
    await deleteEmployeeListApi(data.id);
    return data.id;
  }
);

export const updateEmployeeListAction = createAsyncThunk(
  "users/updateEmployeeListAction",
  async (updateData) => {
    const response = await updateEmployeeListApi(updateData.id, updateData);
    return response.data;
  }
);

export const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    updateEmployee: (state, action) => {
      state.value = action.payload;
    },
    addEmployee: (state, action) => {
      state.value.push(action.payload);
    },
    removeEmployee: (state, action) => {
      state.value = state.value.filter((employee) => {
        return employee.id !== action.payload.id;
      });
    },
    editEmployee: (state, action) => {
      state.value.map((employee) => {
        if (employee.id === action.payload.id) {
          employee.email = action.payload.email;
        }
        return state.value;
      });
    },
    filterEmployee: (state, action) => {
      state.value = state.value.filter((employee) => {
        return employee.date > action.payload.date;
      });
    },
    // resetCreateEmployeeStatus : (state) => {
    //   state.createEmployeeStatus = "Success"
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(getEmployeeListAction.pending, (state) => {
      state.loadStatus = "loading";
    });
    builder.addCase(getEmployeeListAction.fulfilled, (state, action) => {
      state.loadStatus = "Ideal";
      state.value = action.payload;
    });
    builder.addCase(getEmployeeListAction.rejected, (state) => {
      state.loadStatus = "Error";
    });
    builder.addCase(postEmployeeListAction.pending, (state) => {
      state.createEmployeeStatus = "loading";
    });
    builder.addCase(postEmployeeListAction.fulfilled, (state) => {
      state.createEmployeeStatus = "Success";
    });
    builder.addCase(postEmployeeListAction.rejected, (state) => {
      state.createEmployeeStatus = "Error";
    });
    builder.addCase(deleteEmployeeListAction.fulfilled, (state, action) => {
      const newValue = state.value.filter((employee) => {
        return employee.id !== action.payload;
      });
      state.value = newValue;
    });
    builder.addCase(updateEmployeeListAction.pending, (state) => {
      state.updateEmployeeStatus = "loading";
    });
    builder.addCase(updateEmployeeListAction.fulfilled, (state, action) => {
      state.updateEmployeeStatus = "Success";
      state.value.map((employee) => {
        if (employee.id === action.payload.id) {
          employee.email = action.payload.email;
        }
      return state.value;
    })
  });
    builder.addCase(updateEmployeeListAction.rejected, (state) => {
      state.updateEmployeeStatus = "Error";
    });
  },
});

export const {
  addEmployee,
  editEmployee,
  removeEmployee,
  updateEmployee,
  filterEmployee,
} = employeeSlice.actions;
export default employeeSlice.reducer;
