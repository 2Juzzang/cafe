import React from 'react';
import './App.css';
import Map from './Components/Map';
import Header from './Components/Header';

import { firestore } from './firebase';
// import { markerData } from './Data/MarkerData';

const App = () => {
  const bucket = firestore.collection('cafe');
  let markerData = [];
  bucket.get().then((docs) => {
    docs.forEach((doc) => {
      // console.log(doc.data(), '데이터');
      // console.log(doc.id, '아이디');
      if (doc.exists) {
        markerData.push({ id: doc.id, ...doc.data() });
      }
    });
  });
  return (
    <div className='App'>
      <Header />
      <Map markerData={markerData} />
    </div>
  );
};

export default App;
