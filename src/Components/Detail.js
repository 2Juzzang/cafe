import React, { useState, useEffect } from 'react';
import Time from './Time';
import TableInput from './TableInput';
import { Grid } from '../elements';
const Detail = ({ name, empty, setEmpty, table }) => {
  const [update, setUpdate] = useState();
  useEffect(() => {
    setEmpty();
  }, []);
  return (
    <Grid width='400px' height='200px' margin='7px auto' bg='white'>
      <p>이곳은?</p>
      {name}
      <p>여유 좌석</p>
      <TableInput
        name={name}
        empty={empty}
        setEmpty={setEmpty}
        table={table}
        setUpdate={setUpdate}
      />
      <p>갱신 시간</p>
      <Time update={update} />
    </Grid>
  );
};

export default Detail;
