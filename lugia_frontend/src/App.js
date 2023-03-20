// To install additional dependencies:
// npm install @sanity/client
// -||- @sanity/image-url
// -||- react-google-login
// -||- react-icons
// -||- react-loader-spinner
// -||- react-masonry-css
// -||- react-router-dom
// -||- uuid

import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Login from './components/Login';
import Home from './container/Home';

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  )
}

export default App;