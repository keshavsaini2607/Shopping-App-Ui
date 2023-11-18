import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Define the state type
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        item => item.id === action.payload.id,
      );

      if (existingItem) {
        // If the item already exists in the cart, update the quantity
        existingItem.quantity += action.payload.quantity;
      } else {
        // If the item doesn't exist, add it to the cart
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      // Remove the item from the cart by its id
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{id: number; quantity: number}>,
    ) => {
      // Update the quantity of a specific item in the cart
      const itemToUpdate = state.items.find(
        item => item.id === action.payload.id,
      );

      if (itemToUpdate) {
        itemToUpdate.quantity = action.payload.quantity;
      }
    },
    clearCart: state => {
      // Clear all items from the cart
      state.items = [];
    },
  },
});

export const {addItem, removeItem, updateQuantity, clearCart} =
  cartSlice.actions;
export default cartSlice.reducer;
