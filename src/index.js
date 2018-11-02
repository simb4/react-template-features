import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './configureStore';
import registerServiceWorker from './utils/registerServiceWorker';


const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

// create store
const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('root')
);
registerServiceWorker();