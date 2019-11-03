import React, { useState } from 'react';
import MyForm from './components/form';
import Graphs from './components/viewgraphs'
import './App.css';

const App = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

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
