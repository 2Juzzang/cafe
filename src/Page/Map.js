/* global kakao */
import React, { useEffect, useState } from 'react';
import { markerData } from '../Data/MarkerData';
import Detail from '../Components/Detail';
import { Grid } from '../elements/index';

const Map = () => {
  const [name, setName] = useState('위치를 선택해주세요');
  const [table, setTable] = useState('');
  const mapScript = () => {
    let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(35.828557, 127.128853), //지도의 중심좌표.
      level: 7, //지도의 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    for (let i = 0; i < markerData.length; i++) {
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(markerData[i].lat, markerData[i].long),
        title: markerData[i].title,
        maximum: markerData[i].maximum,
      });
      kakao.maps.event.addListener(marker, 'click', function () {
        setName(markerData[i].title);
        setTable(markerData[i].maximum);
      });
    }
  };
  console.log(table);
  useEffect(() => {
    mapScript();
  }, []);

  return (
    <>
      <Grid
        width='400px'
        height='600px'
        margin='7px auto'
        bg='yellow'
        id='map'
      ></Grid>
      <Detail name={name} table={table} />
    </>
  );
};

export default Map;
