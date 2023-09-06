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
    setNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export const sendData = (cartItems) => {
  return async (dispatch) => {
    try {
      dispatch(
        uiActions.setNotification({
          status: "pending",
          title: "sending",
          message: "sending cart data",
        })
      );
      const resp = await fetch(
        "https://expense-tracker-fea86-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cartItems),
        }
      );

      if (resp.ok) {
        dispatch(
          uiActions.setNotification({
            status: "success",
            title: "success",
            message: "succesfully sent cart data",
          })
        );
      } else {
        dispatch(
          uiActions.setNotification({
            status: "error",
            title: "Error",
            message: "error in sending cart data",
          })
        );
      }
    } catch (error) {
      dispatch(
        uiActions.setNotification({
          status: "error",
          title: "Error",
          message: "error in sending cart data",
        })
      );
    }
  };
};

export const getData = () => {
  return async (dispatch) => {
    try {
      dispatch(
        uiActions.setNotification({
          status: "pending",
          title: "Getting",
          message: "getting cart data",
        })
      );
      const resp = await fetch(
        "https://expense-tracker-fea86-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "GET",
        }
      );

      if (resp.ok) {
        const result = await resp.json();
        console.log("data from get is", result);
        let items = [];
        if (result) {
          for (const item of result) {
            items.push(item);
          }
          dispatch(cartActions.setCartItems(items));
        }

        dispatch(
          uiActions.setNotification({
            status: "success",
            title: "success",
            message: "succesfully retrieved data",
          })
        );
      } else {
        dispatch(
          uiActions.setNotification({
            status: "error",
            title: "Error",
            message: "error in getting cart data",
          })
        );
      }
    } catch (error) {
      dispatch(
        uiActions.setNotification({
          status: "error",
          title: "Error",
          message: "error in getting cart data",
        })
      );
    }
  };
};

export const uiActions = uiSlice.actions;
export const cartActions = cartSlice.actions;
export default store;
