import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
import configureStore from './store/store';
import { fetchSavePage } from './actionCreators/pageActionCreator';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore();
root.render(
  <React.StrictMode>
    {/* <Provider> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>
);

store.dispatch(fetchSavePage(1));
store.dispatch(fetchSavePage(1));
store.dispatch(fetchSavePage(2));
setTimeout(() => console.log(store.getState()), 3000);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

