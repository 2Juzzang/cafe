import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Grid } from '../elements/index';
const Header = ({ onLogout }) => {
  const owner = useSelector((state) => state.user.owner);
  console.log(owner.userName);
  const navigate = useNavigate();
  return (
    <Container>
      <Grid
        display='flex'
        height='50px'
        justifyContent='space-between'
        alignItems='center'
        bg='white'
      >
        <Grid
          display='flex'
          width='180px'
          cursor='pointer'
          // justifyContent='flex-end'
          alignItems='center'
          _onClick={() => {
            navigate('/');
          }}
        >
          <p
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            자리 있어요
          </p>
          <img
            src={process.env.PUBLIC_URL + '/logo.svg'}
            style={{
              position: 'relative',
              left: '-7px',
              width: '40px',
              cursor: 'pointer',
            }}
          />
        </Grid>
        <Grid display='flex' justifyContent='flex-end' alignItems='center'>
          {owner.userEmail !== null ? (
            <p style={{ display: 'flex' }}>
              <p>{owner.userName}님, 환영합니다! </p>

              <p
                onClick={() => {
                  onLogout();
                }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  marginLeft: '15px',
                  cursor: 'pointer',
                }}
              >
                {' '}
                로그아웃
              </p>
            </p>
          ) : (
            <p
              onClick={() => {
                navigate('/login');
              }}
              style={{ cursor: 'pointer' }}
            >
              사장님 로그인
            </p>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
`;

export default Header;
