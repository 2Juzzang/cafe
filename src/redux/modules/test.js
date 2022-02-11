import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

// 액션
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 생성함수
const increase = createAction(INCREASE);
const decrease = createAction(DECREASE);

// 초기값

const initialState = {
  number: 0,
};
// 리듀서
export default handleActions(
  {
    [INCREASE]: (state, action) =>
      produce(state, (draft) => {
        draft.number++;
      }),
    [DECREASE]: (state, aciton) =>
      produce(state, (draft) => {
        draft.number--;
      }),
  },
  initialState,
);

const applyActions = {
  increase,
  decrease,
};

export { applyActions };
