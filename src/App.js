import React, { useEffect, useState } from 'react';
import './App.css';
import Map from './Components/Map';
import Header from './Components/Header';

import { firestore } from './firebase';

const App = () => {
  const [markerData, setMarkerData] = useState([]);
  const bucket = firestore.collection('cafe');
  let arr = [];
  useEffect(() => {
    bucket.get().then((docs) => {
      docs.forEach((doc) => {
        // console.log(doc.data(), '데이터');
        // console.log(doc.id, '아이디');
        if (doc.exists) {
          arr.push({ id: doc.id, ...doc.data() });
          setMarkerData(arr);
        }
      });
    });
  }, []);
  return (
    <div className='App'>
      <Header />
      <Map markerData={markerData} />
    </div>
  );
};

export default App;
