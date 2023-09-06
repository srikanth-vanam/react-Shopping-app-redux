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
    const updatedItems=newItems.map((item) => {
      if (item.id === Item.id) {
        flag = true;
        return{ ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    if (!flag) {
      updatedItems.push({ ...Item, quantity: 1 });
    }
    dispatch(cartActions.setCartItems(updatedItems));
  };

  return (
    <li className={classes.item} >
      <Card>
        <header>
          <h3>{item.title}</h3>
          <div className={classes.price}>${item.price.toFixed(2)}</div>
        </header>
        <p>{item.description}</p>
        <div className={classes.actions}>
          <button onClick={() => addToCartHandler({...item})}>
            Add to Cart
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
