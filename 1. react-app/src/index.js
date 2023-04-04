import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; //css파일 import
import App from './App'; //App.js 파일 import 
//import 별명 from '로로'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App /> {/*사용자 정의 태그, .js 확장자가 생략된 모습*/}
  </React.StrictMode>
);

reportWebVitals();
