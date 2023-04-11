import './App.css';
import React, {Component, useState} from 'react';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';

function App() {
  var [number, setNumber] = useState(10);
  return (
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot onClick={function(size){
        setNumber(number+size)
      }}></AddNumberRoot>
      <DisplayNumberRoot number = {number}></DisplayNumberRoot>
    </div>
  );
}

export default App;