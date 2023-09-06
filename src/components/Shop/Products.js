// import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  // const cartItems = useSelector(state=>state.cart.cartItems);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {props.items.map((cartItem) => (
          <ProductItem item={cartItem} key={cartItem.id} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
