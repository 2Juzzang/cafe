import React from 'react';
import { markerData } from '../Data/MarkerData';
import { Grid, Button } from '../elements';
const TableInput = ({ table }) => {
  return (
    <Grid
      display='flex'
      justifyContent='center'
      width='400px'
      height='20px'
      margin='0 auto'
    >
      <input
        style={{
          width: '100px',
          margin: '0 5px',
          padding: '0 5px',
          textAlign: 'right',
        }}
      />
      / {table} 테이블
      <Button display='flex' width='50px' margin='0 5px'>
        확인
      </Button>
    </Grid>
  );
};

export default TableInput;
