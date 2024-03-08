import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../apis/instance";

export const productThunk = createAsyncThunk(
  "product/fetch",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/products/${productId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error).response.data;
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    productId: 0,
    productName: "",
    productImage: "",
    productPrice: 0,
    isLoading: false,
    error: null,
  },
  reducers: {
    clear: (state) => {
      state.productId = 0;
      state.productName = "";
      state.productImage = "";
      state.productPrice = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(productThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(productThunk.fulfilled, (state, action) => {
      state.isLoading = false;

      state.productId = action.payload.data.productId;
      state.productName = action.payload.data.productName;
      state.productImage = action.payload.data.productImage;
      state.productPrice = action.payload.data.productPrice;
    });
    builder.addCase(productThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    });
  },
});

export default productSlice.reducer;
