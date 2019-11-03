import React, { useState } from 'react';
import MyForm from './components/form';
import Graphs from './components/graph4'
import './App.css';

const App = (props) => {

  return (
    <div className="App">
      <MyForm />
      <div>
        <Graphs />
      </div>
    </div>
  );
}

export default App;
