import React, { useState, useEffect } from 'react';
import Time from './Time';
import TableInput from './TableInput';
import { Grid } from '../elements';
const Detail = ({ name, empty, setEmpty, table, time }) => {
  useEffect(() => {
    setEmpty();
  }, [setEmpty]);
  return (
    <Grid
      width='400px'
      height='232px'
      margin='7px auto'
      padding='7px 0'
      bg='white'
    >
      <p>이곳은?</p>
      {name}
      <p>여유 좌석</p>
      {empty === undefined ? (
        '위치를 선택해주세요'
      ) : (
        <TableInput
          name={name}
          empty={empty}
          setEmpty={setEmpty}
          table={table}
        />
      )}

      <p>갱신 시간</p>
      <Time name={name} time={time} />
    </Grid>
  );
};

export default Detail;
