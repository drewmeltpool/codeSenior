import React from 'react';
import ReactDOM from 'react-dom';
import App from './view/App';
import { BrowserRouter } from 'react-router-dom';

import 'src/assets/styles/index.scss';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
