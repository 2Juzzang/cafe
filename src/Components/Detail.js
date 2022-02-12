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
  // console.log(owner.userEmail === email);
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
      ) : empty === 0 ? (
        '현재 빈자리가 없습니다'
      ) : (
        <>{empty} 자리 남아있습니다</>
      )}

      <p>최근 갱신 시간</p>
      <Time name={name} time={time} setTime={setTime} />
    </Grid>
  );
};

export default Detail;
