import React from 'react';
import { Grid, Button } from '../elements';
import { firestore } from '../firebase';
const TableInput = ({ markerData, name, empty, setEmpty, table }) => {
  const bucket = firestore.collection('cafe');
  const store = markerData.filter((store) => store.title === name)[0];
  const timeUpdate = () => {
    bucket.doc(store.title).update({ time: new Date().getTime() });
    return (store.time = new Date().getTime());
  };
  const overInput = () => {
    if (empty > store.maximum) {
      alert('총 테이블 갯수를 초과했습니다');
      return setEmpty(store.empty);
    }
    timeUpdate();
    bucket.doc(store.title).update({ empty: empty });
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
