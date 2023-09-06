import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../store/store";

const ProductItem = (props) => {
  const { item } = props;
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const addToCartHandler = (Item) => {
    const newItems = [...cartItems];
    let flag = false;
    newItems.forEach((item, index) => {
      if (item.id === Item.id) {
        flag = true;
        newItems[index] = { ...item, quantity: item.quantity + 1 };
      }
    });
    if (!flag) {
      newItems.push({ ...Item, quantity: 1 });
    }
    dispatch(cartActions.setCartItems(newItems));
  };

  return (
    <li className={classes.item} key={item.id}>
      <Card>
        <header>
          <h3>{item.title}</h3>
          <div className={classes.price}>${item.price.toFixed(2)}</div>
        </header>
        <p>{item.description}</p>
        <div className={classes.actions}>
          <button onClick={() => addToCartHandler(item)}>
            Add to Cart
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
