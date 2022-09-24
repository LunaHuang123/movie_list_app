import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import configureStore from './store/store';
// import { fetchSaveMovie } from './actionCreators/movieDetailsActionCreator';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore();
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
// store.dispatch(fetchSaveMovie(1));
// store.dispatch(fetchSaveMovie(2));
// store.dispatch(fetchSaveMovie(2));
// setTimeout(() => console.log(store.getState()), 3000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
