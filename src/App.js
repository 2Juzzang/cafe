import React from 'react';
import './App.css';
import Main from './Page/Main';
import Login from './Page/Login';

import { Route, Routes } from 'react-router-dom';

const App = ({ auth }) => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/login' exact element={<Login auth={auth} />} />
        <Route path='/' exact element={<Main auth={auth} />} />
      </Routes>
    </div>
  );
};

export default App;
