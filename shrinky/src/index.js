import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyBzjAFP6HqBNKDQDJ3UAjchqtSRAAMZ0HI",
  authDomain: "shrinky-01.firebaseapp.com",
  projectId: "shrinky-01",
  storageBucket: "shrinky-01.appspot.com",
  messagingSenderId: "788198577733",
  appId: "1:788198577733:web:3e2d51288dde6df635f52c",
  measurementId: "G-8LVS3F6ZH3"
};

initializeApp(firebaseConfig)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



