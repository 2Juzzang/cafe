import React, { useEffect } from 'react';
import Time from './Time';
import TableInput from './TableInput';
import { Grid } from '../elements';
import { useSelector } from 'react-redux';
const Detail = ({
  markerData,
  name,
  empty,
  setEmpty,
  table,
  email,
  time,
  setTime,
}) => {
  const owner = useSelector((state) => state.user.owner);
  useEffect(() => {
    setEmpty();
  }, [setEmpty]);
  return (
    <Grid
      width='400px'
      height='250px'
      margin='7px auto'
      padding='7px 0'
      bg='white'
    >
      <p>이곳은?</p>
      {name === '위치를 선택해주세요' ? (
        <>{name}</>
      ) : (
        <Grid height='auto' fontSize='20px'>
          {name}
        </Grid>
      )}

      <p>여유 좌석</p>
      {empty === undefined ? (
        '위치를 선택해주세요'
      ) : owner && owner.userEmail === email ? (
        <TableInput
          markerData={markerData}
          name={name}
          empty={empty}
          setEmpty={setEmpty}
          table={table}
          time={time}
          setTime={setTime}
        />
      ) : empty === '0' ? (
        <Grid height='auto' color='red'>
          현재 빈자리가 없습니다
        </Grid>
      ) : (
        <Grid
          display='flex'
          justifyContent='center'
          alignItems='center'
          height='auto'
          color='blue'
        >
          <Grid width='auto' fontSize='20px'>
            {empty}
          </Grid>
          <Grid width='auto' margin='0 5px'>
            {' '}
            자리 남아있습니다
          </Grid>
        </Grid>
      )}

      <p>최근 갱신 시간</p>
      <Time name={name} time={time} setTime={setTime} />
    </Grid>
  );
};

export default Detail;
