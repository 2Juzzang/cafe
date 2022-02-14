import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

// 액션
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const LOADUSER = 'LOADUSER';
// 액션 생성함수
const googleLogin = createAction(LOGIN, (user) => user);
const googleLogout = createAction(LOGOUT);
const loadUser = createAction(LOADUSER);
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
    [LOGOUT]: (state, action) =>
      produce(state, (draft) => {
        draft.owner.userUid = null;
        draft.owner.userName = null;
        draft.owner.userEmail = null;
      }),
    [LOADUSER]: (state, action) =>
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
  googleLogout,
  loadUser,
};

export { userActions };
