import React from 'react';
import { Provider } from 'react-redux';
import store from 'src/redux/store';
import AppRouter from './router/AppRouter';
import { Confirm, Loader, ScrollTop, Toast } from 'src/view/hoc';

import 'src/assets/styles/index.scss';

const App: React.FC = () => {
  return (
    <ScrollTop>
      <Confirm>
        <Provider store={store}>
          <Toast>
            <Loader>
              <AppRouter />
            </Loader>
          </Toast>
        </Provider>
      </Confirm>
    </ScrollTop>
  );
};

export default App;
