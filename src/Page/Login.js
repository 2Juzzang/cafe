import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Grid, Button } from '../elements/index';
import { userActions } from '../redux/modules/user';
const Login = ({ auth }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onGoogleLogin = (e) => {
    auth.login(e.target.textContent).then((data) => {
      console.log(data.user.displayName);
      // 메일주소가 일치하면 권한 주기
      console.log(data.user.email);
      dispatch(
        userActions.googleLogin({
          uid: data.user.uid,
          name: data.user.displayName,
          email: data.user.email,
        }),
      );
      goToHome(data.user.uid, data.user.displayName, data.user.email);
    }); //🌟리턴되는 값 확인하기 위해
  };
  const goToHome = (uid, name, email) => {
    console.log(uid, name, email);
    navigate({ pathname: '/', id: uid, name: name, email: email });
  };
  useEffect(() => {
    auth.onAuthChange((user) => {
      user && goToHome(user.uid);
    });
  });
  return (
    <Grid bg='white'>
      <Grid position='relative' top='15%' height='auto'>
        <p
          style={{ margin: '20px 0', fontSize: '20px', cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          자리 있어요?
        </p>
        <Grid height='60px'>
          <input
            style={{ width: '350px', height: '50px', padding: '0 6px' }}
            placeholder='아이디를 입력해주세요'
          />
        </Grid>
        <Grid height='60px'>
          <input
            style={{ width: '350px', height: '50px', padding: '0 6px' }}
            placeholder='비밀번호를 입력해주세요'
          />
        </Grid>
        <Grid
          height='60px'
          _onClick={() => {
            console.log('로그인 하기');
          }}
        >
          <Button
            width='366px'
            height='56px'
            padding='0 6px'
            bg='black'
            color='white'
            borderWidth='0px'
          >
            로그인 하기
          </Button>
        </Grid>
        <Grid height='60px'>
          <Button width='366px' height='56px' padding='0 6px' borderWidth='0px'>
            <Grid
              display='flex'
              justifyContent='center'
              alignItems='center'
              _onClick={onGoogleLogin}
            >
              <img
                src={process.env.PUBLIC_URL + '/google.svg'}
                style={{ width: '20px', margin: '0 5px 0 -20px' }}
              />
              구글 로그인
            </Grid>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
