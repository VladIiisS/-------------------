import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Header } from './App';

//const elem = <h2>Hello world!!!</h2>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // elem,
  <React.StrictMode>
    <App />
  </React.StrictMode>
   
);


//eportWebVitals();
