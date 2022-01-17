/* global kakao */
import React, { useEffect } from 'react';
import { markerData } from '../Data/MarkerData';
import { Grid } from '../elements/index';
const Map = () => {
  useEffect(() => {
    let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(35.828557, 127.128853), //지도의 중심좌표.
      level: 8, //지도의 레벨(확대, 축소 정도)
    };

    let map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    markerData.forEach((el) => {
      new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(el.lat, el.long),
        title: el.title,
      });
    });
  }, []);

  return (
    <Grid
      width='400px'
      height='400px'
      margin='7px auto'
      bg='yellow'
      id='map'
    ></Grid>
  );
};

export default Map;
