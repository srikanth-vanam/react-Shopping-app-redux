const { configureStore, createSlice } = require("@reduxjs/toolkit");

const initialCartState={isCartShown:false,cartItems:[]}
const cartSlice=createSlice({
    name:'Cart',
    initialState:initialCartState,
    reducers:{
        cartToggler(state){
            state.isCartShown=!state.isCartShown;
        },
        setCartItems(state,action){
            state.cartItems=action.payload;
        }
    }

})
const store=configureStore({
    reducer:{
        cart:cartSlice.reducer,
    }
})

export const cartActions=cartSlice.actions;
export default store;