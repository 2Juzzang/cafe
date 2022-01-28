import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Button } from '../elements/index';
const Login = () => {
  const navigate = useNavigate();
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
        <Grid height='60px'>
          <Button
            width='366px'
            height='56px'
            padding='0 6px'
            bg='black'
            color='white'
          >
            로그인 하기
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
