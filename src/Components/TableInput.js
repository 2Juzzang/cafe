import React from 'react';
// import { markerData } from '../Data/MarkerData';
import { Grid, Button } from '../elements';
const TableInput = ({ markerData, name, empty, setEmpty, table }) => {
  const store = markerData.filter((store) => store.title === name)[0];
  const timeUpdate = () => {
    return (store.time = new Date().getTime());
  };
  const overInput = () => {
    if (empty > store.maximum) {
      alert('총 테이블 갯수를 초과했습니다');
      return setEmpty(store.empty);
    }
    timeUpdate();
    return (store.empty = empty);
  };

  return (
    <Grid
      display='flex'
      justifyContent='center'
      width='400px'
      height='20px'
      margin='0 auto'
    >
      <input
        value={empty || ''}
        onChange={(e) => {
          setEmpty(e.target.value);
        }}
        style={{
          width: '100px',
          margin: '0 5px',
          padding: '0 5px',
          textAlign: 'right',
        }}
      />
      / {table} 테이블
      <Button
        display='flex'
        width='50px'
        margin='0 5px'
        _onClick={() => {
          overInput();
        }}
      >
        확인
      </Button>
    </Grid>
  );
};

export default TableInput;
