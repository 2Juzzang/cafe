import React from 'react';
import { markerData } from '../Data/MarkerData';
import { Grid, Button } from '../elements';
const TableInput = () => {
  return (
    <Grid
      display='flex'
      justifyContent='center'
      width='250px'
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
      / {markerData[0].maximum}명
      <Button display='flex' width='50px' margin='0 5px'>
        확인
      </Button>
    </Grid>
  );
};

export default TableInput;
