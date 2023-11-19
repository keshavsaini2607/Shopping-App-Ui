import {configureStore} from '@reduxjs/toolkit';
import prodyctReducer from './slices/productsSlice';
import cartReducer from './slices/cartSlice';
import favouritesReducer from './slices/favouritesSlice';

export const store = configureStore({
  reducer: {
    product: prodyctReducer,
    cart: cartReducer,
    favourites: favouritesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
