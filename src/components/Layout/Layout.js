import { Fragment } from 'react';
import MainHeader from './MainHeader';
import Notification from '../UI/Notification';
import { useSelector } from 'react-redux';

const Layout = (props) => {
  const notification=useSelector(state=>state.ui.notification);
  return (
    <Fragment>
      {notification && <Notification title={notification.title} message={notification.message} status={notification.status}/>}
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
