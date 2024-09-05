import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  "user",
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
        throw new Error("Wrong username or password");
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message || "Somethin went wrong");
    }
  }
);

const UserSlice = createSlice({
  name: "User",
  initialState: {
    currentUser: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    removeUser: (state) => {
      state.currentUser = null;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        if (action.payload.userData.isAdmin) {
          state.isLoading = false;
          state.currentUser = action.payload;
        } else {
          state.isLoading = false;
          state.error = "Unauthorized";
        }
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { removeUser } = UserSlice.actions;

export default UserSlice.reducer;
