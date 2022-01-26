import React from 'react';
import './App.css';
import Map from './Components/Map';
import Header from './Components/Header';

import { firestore } from './firebase';

const App = () => {
  const bucket = firestore.collection('cafe');
  bucket.get().then((docs) => {
    let bucket_data = [];
    docs.forEach((doc) => {
      console.log(doc.data());
      console.log(doc.id);
    });
  });

  return (
    <div className='App'>
      <Header />
      <Map />
    </div>
  );
};

export default App;
