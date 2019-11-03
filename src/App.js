import React, { useState } from 'react';
import MyForm from './components/form';
import Graphs from './components/graphs4'
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
