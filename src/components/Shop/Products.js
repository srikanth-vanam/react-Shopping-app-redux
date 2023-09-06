import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const cartItems = useSelector(state=>state.cart.cartItems);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {cartItems.map((item) => (
          <ProductItem 
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
