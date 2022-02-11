import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

// 액션
const LOGIN = 'LOGIN';

// 액션 생성함수
const googleLogin = createAction(LOGIN, (user) => user);

// 초기값

const initialState = {
  owner: {
    userUid: null,
    userName: null,
    userEmail: null,
  },
};
// 리듀서
export default handleActions(
  {
    [LOGIN]: (state, action) =>
      produce(state, (draft) => {
        draft.owner.userUid = action.payload.uid;
        draft.owner.userName = action.payload.name;
        draft.owner.userEmail = action.payload.email;
      }),
  },
  initialState,
);

const userActions = {
  googleLogin,
};

export { userActions };
