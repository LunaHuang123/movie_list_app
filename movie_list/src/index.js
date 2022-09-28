import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
=======
>>>>>>> b6163e870a67a485689903a3b6f2b69f6a1cc2d2
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import configureStore from './store/store';

<<<<<<< HEAD

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore();
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


=======
const root = ReactDOM.createRoot(document.getElementById('root'));
// const store = configureStore();
root.render(
  <React.StrictMode>
    {/* <Provider> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>
);

>>>>>>> b6163e870a67a485689903a3b6f2b69f6a1cc2d2
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
<<<<<<< HEAD

=======
>>>>>>> b6163e870a67a485689903a3b6f2b69f6a1cc2d2
