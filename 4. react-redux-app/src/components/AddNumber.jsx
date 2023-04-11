import React, {Component, useState} from 'react';
import store from '../store';

function AddNumber(props){
    var [size, setSize] = useState(1);
    return(
      <div>
        <h1>Add Number</h1>
        <input type="button" value="+" onClick={function(){
            store.dispatch({type:'INCREMENT', size : size});
        }}></input>
        <input type="text" value={size} onChange={function(e){
            setSize(Number(e.target.value))
        }}></input>
      </div>
    );
  }

export default AddNumber;