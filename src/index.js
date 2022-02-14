import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Auth from './auth';
import { BrowserRouter } from 'react-router-dom';
import { userActions } from './redux/modules/user';

const auth = new Auth();
// 새로고침시 로그인 유지
function loadUser() {
  try {
    const user = localStorage.getItem('user');
    if (!user) return;

    store.dispatch(userActions.loadUser(JSON.parse(user)));
  } catch (e) {
    console.log('실패');
  }
}
loadUser();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App auth={auth} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
