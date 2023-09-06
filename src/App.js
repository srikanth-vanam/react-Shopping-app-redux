import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { uiActions } from "./store/store";

let initial=true;
function App() {
  const isCartShown = useSelector((state) => state.cart.isCartShown);
  const productItems = [
    {
      id: "one_1",
      title: "product one",
      price: 6,
      description: "This is a first Product",
    },
    {
      id: "two_2",
      title: "product Two",
      price: 5,
      description: "This is second Product",
    },
  ];

  const cartItems = useSelector((state) => state.cart.cartItems);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
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
          dispatch(uiActions.setNotification({
            status: "success",
              title: "success",
              message: "succesfully sent cart data",
          }))
        } else {
          dispatch(uiActions.setNotification({
            status: "error",
              title: "Error",
              message: "error in sending cart data",
          })) 
        }
      } catch (error) {
        dispatch(uiActions.setNotification({
          status: "error",
            title: "Error",
            message: "error in sending cart data",
        }))
      }
    };
    if(initial){
      initial=false;
      return;
    }
    fetchData();
  }, [cartItems]);

  return (
    <Layout>
      {isCartShown && <Cart />}
      <Products items={productItems} />
    </Layout>
  );
}

export default App;
