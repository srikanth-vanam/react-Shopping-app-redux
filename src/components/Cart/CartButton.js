import { useSelector } from 'react-redux';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const cartItems=useSelector(state=>state.cart.cartItems);
  
  let quantityCount=0;
  cartItems.forEach(element => {
    quantityCount+=element.quantity;
  });

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantityCount}</span>
    </button>
  );
};

export default CartButton;
