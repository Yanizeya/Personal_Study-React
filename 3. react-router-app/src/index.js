import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, BrowserRouter, Route, Routes, Link, NavLink, useParams } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';



function Home(){
    return(
        <div>
            <h2>Home</h2>
            Home...
        </div>
    )
}

var contents = [
    {id : 1, title:'HTML', description : 'HTML is...'},
    {id : 2, title:'JS', description : 'JS is...'},
    {id : 3, title:'React', description : 'React is...'},
];

function Topic(){
    return(
        <div>
            <h3>Topic</h3>
            Topic...
        </div>
    )
}

function Topics(){
    var params = useParams();
    console.log(params);
    var lis = [];
    for(var i=0; i<contents.length; i++){
        lis.push(
            <li key={contents[i].id}><NavLink to={"/topics/1"}>{contents[i].title}</NavLink></li>
        );
    }
    return(
        <div>
            <h2>Topics</h2>
            <ul>
                {lis}
            </ul>
            <Routes>
                <Route path="/topics/1" element={<Topic/>}/>
                <Route path="/topics/2" element={<Topic/>}/>
                <Route path="/topics/3" element={<Topic/>}/>
            </Routes>
        </div>
    )
}

function Contact(){
    return (
        <div>
            <h2>Contact</h2>
            Contact...
        </div>
    )
}



function App(){
    return(
        <div>
            <h1>Hello Router</h1>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/topics">Topics</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/notFound">notFound</NavLink></li>
            </ul>
            <Routes>    
                <Route path="/" element={<Home/>}/>
                <Route path="/topics" element={<Topics/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </div>
    )
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <App />
    </HashRouter>
);

reportWebVitals();

