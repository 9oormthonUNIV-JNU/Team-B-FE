import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../apis/auth";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (code, { rejectWithValue }) => {
    try {
      const response = await login(code);
      return response.data;
    } catch (error) {
      return rejectWithValue(error).response.data;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    isLoading: false,
    userId: null,
    userName: "",
    userImage: "",
    userEmail: "",
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      const payloadUserDTO = action.payload.data.userInfo;

      state.isLoggedIn = true;
      state.isLoading = false;

      state.userId = payloadUserDTO.userId;
      state.userName = payloadUserDTO.nickname;
      state.userImage = payloadUserDTO.profileImage;
      state.userEmail = payloadUserDTO.email;
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;

      state.userId = null;
      state.userName = "";
      state.userImage = "";
      state.userEmail = "";
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
