import { useDispatch } from 'react-redux';
import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import { cartActions } from '../../store/store';

const MainHeader = (props) => {
  const dispatch=useDispatch();
  const cartShowHandler=()=>{
    dispatch(cartActions.cartToggler());
  }
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick={cartShowHandler}/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
