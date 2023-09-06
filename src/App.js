import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { getData, sendData } from "./store/store";

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
  const dispatch = useDispatch();
  useEffect(() => {
    if(initial){
      initial=false;
      return;
    }
    dispatch(sendData(cartItems));
  }, [cartItems,dispatch]);

  useEffect(()=>{
    dispatch(getData());
  },[dispatch])
  return (
    <Layout>
      {isCartShown && <Cart />}
      <Products items={productItems} />
    </Layout>
  );
}

export default App;
