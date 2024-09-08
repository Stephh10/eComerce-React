import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "CartSlice",
  initialState: {
    cart: [],
  },
  reducers: {
    addCartItem: (state, action) => {
      const existingItem = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItem === -1) {
        const newItem = {
          ...action.payload,
          quantity: 1,
        };
        state.cart.push(newItem);
      } else {
        const newItem = {
          ...state.cart[existingItem],
          quantity: state.cart[existingItem].quantity + 1,
        };
        state.cart[existingItem] = newItem;
      }
      console.log(action.payload);
    },
    removeCartItem: (state, action) => {
      const existingItem = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cart[existingItem].quantity <= 1) {
        state.cart.splice(existingItem, 1);
      } else {
        const updatedItem = {
          ...state.cart[existingItem],
          quantity: state.cart[existingItem].quantity - 1,
        };
        state.cart[existingItem] = updatedItem;
      }
    },
    resetCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addCartItem, removeCartItem, resetCart } = CartSlice.actions;

export default CartSlice.reducer;
