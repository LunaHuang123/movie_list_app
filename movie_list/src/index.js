import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import { fetchSaveTopRatedPage } from './actionCreators/topRatedPageActionCreator';
import fetchNewPopularPage from './actionCreators/popular_pages_action_creator';
import axios from 'axios';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore();
window.axios = axios;
window.getState = store.getState;
window.dispatch = store.dispatch;
window.fetchPopularPage = fetchNewPopularPage;
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

