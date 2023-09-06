const { configureStore, createSlice } = require("@reduxjs/toolkit");

const initialCartState = { isCartShown: false, cartItems: [] };
const cartSlice = createSlice({
  name: "Cart",
  initialState: initialCartState,
  reducers: {
    cartToggler(state) {
      state.isCartShown = !state.isCartShown;
    },
    setCartItems(state, action) {
      state.cartItems = action.payload;
    },
  },
});

const initialUiState = {
  notification: null,
};
const uiSlice = createSlice({
  name: "UI",
  initialState: initialUiState,
  reducers: {
    setNotification(state,action){
        state.notification={
            status:action.payload.status,
            title:action.payload.title,
            message:action.payload.message,
        }
    }
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export const uiActions = uiSlice.actions;
export const cartActions = cartSlice.actions;
export default store;
