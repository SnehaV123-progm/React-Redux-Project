// redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Helper to convert "Rs. 750" to 750
const extractNumericPrice = (priceStr) => {
  const numeric = priceStr.replace(/[^\d.]/g, ''); // Remove non-numeric characters
  return Number(numeric);
};

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      const price = extractNumericPrice(action.payload.price);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ 
          ...action.payload, 
          price: price, // store as number
          quantity: 1 
        });
      }

      cartSlice.caseReducers.calculateTotal(state);
    },

    removeFromCart(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
      cartSlice.caseReducers.calculateTotal(state);
    },

    incrementQuantity(state, action) {
      const item = state.items.find(item => item.id === action.payload);
      if (item) item.quantity += 1;
      cartSlice.caseReducers.calculateTotal(state);
    },

    decrementQuantity(state, action) {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
      cartSlice.caseReducers.calculateTotal(state);
    },

    calculateTotal(state) {
      state.totalAmount = state.items.reduce((sum, item) => {
        return sum + item.price * item.quantity;
      }, 0);
    },
  }
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  calculateTotal
} = cartSlice.actions;

export default cartSlice.reducer;
