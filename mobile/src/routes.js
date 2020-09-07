import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './containers/Login';
import List from './containers/List';
import Book from './containers/Book';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    List,
    Book,
  }),
);

export default Routes;
