import React, { useState } from 'react';
import MyForm from './components/form';
import './App.css';

const App = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <div className="App">
      <MyForm />
    </div>
  );
}

export default App;
