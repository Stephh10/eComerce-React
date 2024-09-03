import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (userData, { rejectWithValue }) => {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    try {
      const response = await fetch("http://localhost:3000/login", options);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (err) {
      return rejectWithValue(err.message || "An error occurred");
    }
  }
);

const UserSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default UserSlice.reducer;

// setUser: (state, action) => {
//     state.user.isLoading = false;
//     state.user = action.payload;
//   },
//   settingUser: (state) => {
//     state.user.isLoading = true;
//   },
//   errorLoading: (state) => {
//     state.user.isLoading = false;
//   },

// reducers: {
//     setUser: (state, action) => {
//       state.user.isLoading = false;
//       state.user = action.payload;
//     },
//     settingUser: (state) => {
//       state.user.isLoading = true;
//     },
//     errorLoading: (state) => {
//       state.user.isLoading = false;
//     },
// }
