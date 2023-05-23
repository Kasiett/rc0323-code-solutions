import React from 'react';
import './App.css';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <div className="App">
      <ToggleButton text="Btn1" color="red" />
      <ToggleButton text="Btn2" color="green" />
      <ToggleButton text="Btn3" color="blue" />
    </div>
  );
}

export default App;
