import React from 'react';
import styled from 'styled-components';
import { Grid } from '../elements/index';
const Header = () => {
  return (
    <Container>
      <Grid display='flex' justifyContent='space-between' bg='white'>
        <Grid display='flex'>
          <p>자리 있어요?</p>
        </Grid>
        <Grid display='flex' justifyContent='flex-end'>
          <p style={{ margin: 'auto 10px' }}>로그인</p>
          <p>회원가입</p>
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
