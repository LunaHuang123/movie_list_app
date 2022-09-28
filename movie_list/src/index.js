import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
<<<<<<< HEAD
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
=======
>>>>>>> b6163e870a67a485689903a3b6f2b69f6a1cc2d2
=======
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> 80d9ea37f5819e146c314e7d0baebfb3dd1fc48b
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import configureStore from './store/store';

<<<<<<< HEAD
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
=======

>>>>>>> 80d9ea37f5819e146c314e7d0baebfb3dd1fc48b
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore();
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

<<<<<<< HEAD
>>>>>>> b6163e870a67a485689903a3b6f2b69f6a1cc2d2
=======

>>>>>>> 80d9ea37f5819e146c314e7d0baebfb3dd1fc48b
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> b6163e870a67a485689903a3b6f2b69f6a1cc2d2
=======

>>>>>>> 80d9ea37f5819e146c314e7d0baebfb3dd1fc48b
