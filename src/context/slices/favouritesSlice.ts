// favouritesSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {Product} from '../../common/interface/Product.interface';

interface FavouritesState {
  products: Product[];
}

const initialState: FavouritesState = {
  products: [],
};

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addToFavourites: (state, action: PayloadAction<{product: Product}>) => {
      const {product} = action.payload;
      let alreadyExists = state.products.find(
        (item: Product) => item.id === product.id,
      );
      if (!alreadyExists) {
        state.products.push(product);
      } else {
        console.log(product.id);
        state.products = state.products.filter(item => item.id !== product.id);
      }
    },
    removeFromFavourites: (
      state,
      action: PayloadAction<{productId: number}>,
    ) => {
      const {productId} = action.payload;
      state.products = state.products.filter(
        product => product.id !== productId,
      );
    },
  },
});

export const {addToFavourites, removeFromFavourites} = favouritesSlice.actions;
export const selectFavourites = (state: RootState) => state.favourites.products;
export default favouritesSlice.reducer;
