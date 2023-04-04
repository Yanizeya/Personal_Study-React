import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  var [funcShow, setFuncShow] = useState(true);
  var [classShow, setClassShow] = useState(true);
  return (
    <div className="container">
        <h1>hello world</h1>
        <input type="button" value="remove func" onClick={
          function(){
            setFuncShow(false)
          }
        }></input>
        <input type="button" value="remove class" onClick={
          function(){
            setClassShow(false)
          }
        }></input>
        {funcShow ? <FuncComp initNumber={2}></FuncComp> : null}
        {classShow ? <ClassComp initNumber={2}></ClassComp> : null}
    </div>
  );
}

var funcStyle = 'color:blue';
var funcId = 0;
function FuncComp(props){
  var [number, setNumber] = useState(props.initNumber);
  var [date, setDate] = useState(new Date().toString());

  useEffect(function(){
    console.log('%cfunc => useEffect A (componentDidMount & componentDidUpdate)'+(++funcId), funcStyle);
    document.title = number;
    return function(){
      console.log('%cfunc => useEffect number return (componentDidMount & componentDidUpdate)' +(++funcId), funcStyle);
    }
  }, []);

  useEffect(function(){
    console.log('%cfunc => useEffect B (componentDidMount & componentDidUpdate)'+(++funcId), funcStyle);
    document.title = date;
    return function(){
      console.log('%cfunc => useEffect date return (componentDidMount & componentDidUpdate)' +(++funcId), funcStyle);
    }
  }, []);
  console.log('%cfunc => render ' +(++funcId), funcStyle);
  return(
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <p>Date : {date}</p>
      <input type="button" value="random" onClick={
        function(){
          setNumber(Math.random());
        }
      }></input>
      <input type="button" value="date" onClick={
        function(){
          setDate(new Date().toString());
        }
      }></input>
    </div>
  )
}

var classStyle = 'color:red';
class ClassComp extends React.Component{
  state = {
    number:this.props.initNumber,
    date:(new Date()).toString()
  }

  componentWillMount(){
    console.log('%cclass => componentWillMount', classStyle);
  }
  componentDidMount(){
    console.log('%cclass => componentDidMount', classStyle);
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('%cclass => shouldComponentUpdate', classStyle);
    return true;
  }
  componentWillUpdate(nextProps, nextState){
    console.log('%cclass => componentWillUpdate', classStyle);
  }
  componentDidUpdate(nextProps, nextState){
    console.log('%cclass => componentDidUpdate', classStyle);
  }

  render(){
    console.log('%cclass => render', classStyle);
    return(
      <div className='container'>
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input type="button" value="random" onClick={
          function(){
            this.setState({number:Math.random()});
          }.bind(this)
        }></input>
        <input type="button" value="date" onClick={
          function(){
            this.setState({date:(new Date()).toString()})
          }.bind(this)
        }></input>
      </div>
      
    )
  }
}

export default App;
