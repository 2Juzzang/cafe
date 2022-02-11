import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import test from './modules/test';
const logger = createLogger();
const rootReducer = combineReducers({
  test,
  // 여기에 리덕스 모듈 넣기
});
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
