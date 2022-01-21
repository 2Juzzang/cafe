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
          <p>사장님 로그인</p>
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
