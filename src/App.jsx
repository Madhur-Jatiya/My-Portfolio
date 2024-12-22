import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header/Header';
import React from 'react';
import Home from './home/Home';

function App() {

  return <>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  </>;
}

export default App;
