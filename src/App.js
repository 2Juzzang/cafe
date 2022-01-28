import React from 'react';
import './App.css';
import Login from './Page/Login';
import Main from './Page/Main';

import { Route, Routes } from 'react-router-dom';

const App = ({ auth }) => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/login' exact element={<Login auth={auth} />} />
        <Route path='/' exact element={<Main />} />
      </Routes>
    </div>
  );
};

export default App;
