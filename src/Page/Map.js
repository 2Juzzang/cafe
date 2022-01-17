/* global kakao */
import React, { useEffect, useState } from 'react';
import { markerData } from '../Data/MarkerData';
import Modal from '../Components/Modal';
import { Grid } from '../elements/index';
const Map = () => {
  const [isModal, setIsModal] = useState(true);
  const onModal = () => {
    setIsModal(!isModal);
  };
  const mapScript = () => {
    let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(35.828557, 127.128853), //지도의 중심좌표.
      level: 7, //지도의 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  };
  useEffect(() => {
    mapScript();
  }, [isModal]);

  return (
    <>
      <Grid
        width='400px'
        height='600px'
        margin='7px auto'
        bg='yellow'
        id='map'
      ></Grid>
      {isModal ? <Modal /> : null}
    </>
  );
};

export default Map;
