import { useDispatch, useSelector } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../../store/store";

const CartItem = (props) => {
  const { title, quantity, price, id } = props.item;
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const decreaseQuantityHandler = (id) => {
    const itemsArray = [...cartItems];
    const newItems = itemsArray
      .map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter((item) => item.quantity !== 0);
    dispatch(cartActions.setCartItems(newItems));
  };

  const increaseQuantityHandler = (id) => {
    const itemsArray = [...cartItems];
    const newItems = itemsArray.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    dispatch(cartActions.setCartItems(newItems));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${(quantity * price).toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => decreaseQuantityHandler(id)}>-</button>
          <button onClick={() => increaseQuantityHandler(id)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
