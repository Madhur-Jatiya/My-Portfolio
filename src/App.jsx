import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header/Header';
import React from 'react';
import Home from './home/Home';

function App() {

  return <>
  <Router>
      <Routes>
        <Route path='/header' element={<Header/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </Router>
  </>;
}

export default App;
