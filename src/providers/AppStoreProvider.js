import {store} from '../libs';
import {Provider} from 'react-redux';

export const AppStoreProvider = ({children}) => {
  return <Provider store={store}>{children}</Provider>;
};
