import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';

import user from './modules/user';
const logger = createLogger();
const rootReducer = combineReducers({
  user,
  // 여기에 리덕스 모듈 넣기
});
const store = createStore(rootReducer, applyMiddleware(logger));
export default store;
