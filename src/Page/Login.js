import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Grid, Button } from '../elements/index';
import { userActions } from '../redux/modules/user';
import '../App.css';
import { firebaseApp } from '../firebase';
const Login = ({ auth }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onGoogleLogin = (e) => {
    auth.login(e.target.textContent).then((data) => {
      // console.log(firebaseApp.auth().currentUser.uid, 'μΏ ν€μλ');
      dispatch(
        userActions.googleLogin({
          uid: data.user.uid,
          name: data.user.displayName,
          email: data.user.email,
        }),
      );
      goToHome(data.user.uid, data.user.displayName, data.user.email);
    }); //πλ¦¬ν΄λλ κ° νμΈνκΈ° μν΄
  };
  const goToHome = (uid, name, email) => {
    navigate({ pathname: '/', id: uid, name: name, email: email });
  };
  useEffect(() => {
    auth.onAuthChange((user) => {
      if (user) {
        user && goToHome(user.uid);
        try {
          // λ‘μ»¬μ€ν λ¦¬μ§ μ μ₯, stringify λ©μλλ₯Ό ν΅ν΄ JSON λ¬Έμμ΄λ‘ λ³ν
          // localStorage.setItem('user', JSON.stringify(user));
          // μΈμμ€ν λ¦¬μ§
          sessionStorage.setItem('user', JSON.stringify(user));
        } catch (e) {
          console.log('local storage is not working');
        }
      }
    });
  }, [goToHome, auth]);
  return (
    <div className='Login'>
      <Grid bg='white'>
        <Grid position='relative' top='15%' height='auto'>
          <p
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '180px',
              margin: '20px auto',
              fontSize: '20px',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/')}
          >
            μλ¦¬ μμ΄μ
            <img
              src={process.env.PUBLIC_URL + '/logo.svg'}
              style={{
                position: 'relative',
                left: '-7px',
                width: '40px',
                cursor: 'pointer',
              }}
            />
          </p>
          <Grid height='60px'>
            <input
              style={{ width: '350px', height: '50px', padding: '0 6px' }}
              placeholder='μμ΄λλ₯Ό μλ ₯ν΄μ£ΌμΈμ'
            />
          </Grid>
          <Grid height='60px'>
            <input
              style={{ width: '350px', height: '50px', padding: '0 6px' }}
              placeholder='λΉλ°λ²νΈλ₯Ό μλ ₯ν΄μ£ΌμΈμ'
            />
          </Grid>
          <Grid
            height='60px'
            _onClick={() => {
              console.log('λ‘κ·ΈμΈ νκΈ°');
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
              λ‘κ·ΈμΈ νκΈ°
            </Button>
          </Grid>
          <Grid height='60px'>
            <Button
              width='366px'
              height='56px'
              padding='0 6px'
              borderWidth='0px'
            >
              <Grid
                display='flex'
                justifyContent='center'
                alignItems='center'
                cursor='pointer'
                _onClick={onGoogleLogin}
              >
                <img
                  src={process.env.PUBLIC_URL + '/google.svg'}
                  style={{ width: '20px', margin: '0 5px 0 -20px' }}
                />
                κ΅¬κΈ λ‘κ·ΈμΈ
              </Grid>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
