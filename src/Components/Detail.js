import React from 'react';
import TableInput from './TableInput';
import { Grid } from '../elements';
const Detail = ({ name, table }) => {
  console.log(name, table);
  return (
    <Grid
      // display='flex'
      width='400px'
      height='200px'
      margin='7px auto'
      bg='white'
    >
      <p>이곳은?</p>
      {name}
      <p>여유 좌석</p>
      <TableInput table={table} />
      <p>갱신 시간</p>
    </Grid>
  );
};

export default Detail;
