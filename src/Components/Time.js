import React, { useEffect } from 'react';
import { Grid } from '../elements';
const Time = ({ time, setTime }) => {
  const updateTime = (time) => {
    if (typeof time == 'string') {
      return '위치를 선택해주세요';
    }
    const milliSeconds = new Date() - time;
    const seconds = milliSeconds / 1000;
    if (seconds < 60) return setTime(`방금 전`);
    const minutes = seconds / 60;
    if (minutes < 60) return setTime(`${Math.floor(minutes)}분 전`);
    const hours = minutes / 60;
    if (hours < 24) return setTime(`${Math.floor(hours)}시간 전`);
    const days = hours / 24;
    if (days < 7) return setTime(`${Math.floor(days)}일 전`);
    const weeks = days / 7;
    if (weeks < 5) return setTime(`${Math.floor(weeks)}주 전`);
    const months = days / 30;
    if (months < 12) return setTime(`${Math.floor(months)}개월 전`);
    const years = days / 365;
    return setTime(`${Math.floor(years)}년 전`);
  };
  useEffect(() => {
    updateTime(time);
  }, [time]);
  console.log(time, '타타타탙임');
  return (
    <>
      <Grid height='auto'>{time}</Grid>
    </>
  );
};

export default Time;
