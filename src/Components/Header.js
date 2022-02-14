import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Grid } from '../elements/index';
const Header = ({ onLogout }) => {
  const owner = useSelector((state) => state.user.owner);
  const navigate = useNavigate();
  return (
    <Container>
      <Grid
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        bg='white'
      >
        <Grid
          display='flex'
          width='180px'
          cursor='pointer'
          _onClick={() => {
            navigate('/');
          }}
        >
          <p style={{ display: 'flex', alignItems: 'center' }}>자리 있어요</p>
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
        {/* <p
          onClick={() => {
            onLogout();
            console.log(owner);
          }}
          style={{ cursor: 'pointer' }}
        >
          로그아웃
        </p> */}
        <Grid display='flex' justifyContent='flex-end'>
          {owner.userEmail !== null ? (
            <p
              onClick={() => {
                onLogout();
              }}
              style={{ cursor: 'pointer' }}
            >
              로그아웃
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
  background-color: black;
`;

export default Header;
