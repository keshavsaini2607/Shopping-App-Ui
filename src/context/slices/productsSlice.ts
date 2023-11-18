import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {getAllProducts} from '../../api/products';
import {Product} from '../../common/interface/Product.interface';

export interface ProductState {
  isLoading: boolean;
  products: Product[] | null;
  error: string | null;
}

const initialState: ProductState = {
  isLoading: false,
  products: null,
  error: null,
};

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
  const response = await getAllProducts();
  return response;
});

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.products = action.payload.products;
      },
    );
    builder.addCase(fetchProducts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.error = action.payload as string;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = productSlice.actions;

export default productSlice.reducer;
