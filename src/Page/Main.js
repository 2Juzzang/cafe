import React, { useEffect, useState, useCallback } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Map from '../Components/Map';
import { firestore } from '../firebase';
const Main = ({ auth }) => {
  // console.log(auth.onAuthChange((user) => {}));
  const navigate = useNavigate();
  const [markerData, setMarkerData] = useState([]);
  const onLogout = useCallback(() => {
    auth.logout();
  }, [auth]);
  const bucket = firestore.collection('cafe');
  let arr = [];
  useEffect(() => {
    bucket.get().then((docs) => {
      docs.forEach((doc) => {
        // console.log(doc.data(), '데이터');
        // console.log(doc.id);
        // console.log(doc.exists);
        if (doc.exists) {
          arr.push({ id: doc.id, ...doc.data() });
        }
      });
      setMarkerData(arr);
    });
    auth.onAuthChange((user) => {
      !user && navigate('/');
      user && console.log('유저가 있어요');
      !user && console.log('유저가 없어요');
      // !user && navigate('/')
      user && navigate('/');
    });
  }, []);
  return (
    <div>
      <Header onLogout={onLogout} />
      <Map markerData={markerData} />
    </div>
  );
};

export default Main;
