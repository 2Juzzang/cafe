import React, { useEffect, useState, useCallback } from 'react';
import '../App.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Map from '../Components/Map';
import { firestore } from '../firebase';
import { userActions } from '../redux/modules/user';
const Main = ({ auth }) => {
  const dispatch = useDispatch();
  // console.log(auth.onAuthChange((user) => {}));
  const navigate = useNavigate();
  const [markerData, setMarkerData] = useState([]);
  const onLogout = useCallback(() => {
    auth.logout();
    dispatch(userActions.googleLogout());
  }, [auth]);
  const bucket = firestore.collection('cafe');
  let arr = [];
  useEffect(() => {
    bucket.get().then((docs) => {
      docs.forEach((doc) => {
        if (doc.exists) {
          arr.push({ id: doc.id, ...doc.data() });
        }
      });
      setMarkerData(arr);
    });

    auth.onAuthChange((user) => {
      !user && navigate('/');
      // user && console.log('로그인 되어있어요');
      // !user && console.log('로그아웃 상태에요');
      // !user && navigate('/')
      user && navigate('/');
    });
  }, []);
  return (
    <div style={{ paddingBottom: '1px' }}>
      <Header onLogout={onLogout} />
      <Map markerData={markerData} />
    </div>
  );
};

export default Main;
