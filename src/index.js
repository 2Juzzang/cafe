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
const loadUser = () => {
  try {
    // localStorage 조회
    const user = localStorage.getItem('user');
    if (!user) return;

    // JSON.parse 메서드를 통해 JSON 문자열을 분석해 객체를 생성
    store.dispatch(userActions.loadUser(JSON.parse(user)));
  } catch (e) {
    console.log('로그인 정보 불러오기 실패');
  }
};

// window.onbeforeunload = function () {
//   localStorage.removeItem('user');
//   return '';
// };
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
