import React from 'react';
import Header from './components/Header';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Table from './pages/Table';


const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/table" element={<Table />} />
    </Routes>
    </>
  )
}

export default App

