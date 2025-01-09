import type { InputRowData } from "./../../utils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  databases,
  ID,
  taskManagerDatabaseId,
  tasksDataCollectionId,
} from "../../appwrite";
import { Query } from "appwrite";

const initialState: { isLoading: boolean; allTasks: any[] | null } = {
  isLoading: false,
  allTasks: [],
};

// function to add the task to the appwrite database
export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (data: InputRowData, thunkAPI) => {
    console.log(data);
    try {
      const resp = await databases.createDocument(
        taskManagerDatabaseId,
        tasksDataCollectionId,
        ID.unique(),
        data
      );
      return resp;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// function to show all the tasks from the user
export const getTasks = createAsyncThunk(
  "tasks/getTasks",
  async (userId: string, thunkAPI) => {
    console.log("running getTasks");
    try {
      const result = await databases.listDocuments(
        taskManagerDatabaseId, // databaseId
        tasksDataCollectionId, // collectionId
        [Query.equal("userId", userId)] // queries (optional)
      );
      return result.documents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        console.log("added the task");
        console.log(payload);
      })
      .addCase(addTask.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log("error from addTask", payload);
      })
      .addCase(getTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTasks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
        state.allTasks = payload;
      })
      .addCase(getTasks.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
        console.log("error in getTasks", payload);
      });
  },
});

export default taskSlice.reducer;
