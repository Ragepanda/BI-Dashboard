import React from 'react';
import logo from './logo.svg';
import './App.css';
import SamplesView from './screens/SamplePage/SamplesView';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="*" element={<SamplesView></SamplesView>}></Route>
    </Routes>
  );
}

export default App;
