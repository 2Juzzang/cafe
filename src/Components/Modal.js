import React from 'react';
import TableInput from './TableInput';
import { Grid } from '../elements';
const Modal = () => {
  return (
    <Grid
      // display='flex'
      width='400px'
      height='200px'
      margin='7px auto'
      bg='white'
    >
      <p>가게이름</p>
      <p>여유 좌석</p>
      <TableInput />
      <p>갱신 시간</p>
    </Grid>
  );
};

export default Modal;
