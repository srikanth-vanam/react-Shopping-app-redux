import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const isCartShown = useSelector((state) => state.cart.isCartShown);
  const productItems = [
    {
      id: Math.random().toString(),
      title: "product one",
      price: 6,
      description: "This is a first Product",
    },
    {
      id: Math.random().toString(),
      title: "product Two",
      price: 5,
      description: "This is second Product",
    },
  ];

  return (
    <Layout>
      {isCartShown && <Cart />}
      <Products items={productItems} />
    </Layout>
  );
}

export default App;
