/*
  The command : 
        <BrowserRouter>
        <App />
        </BrowserRouter>
  indicates the use of the BrowserRouter component from the react-router-dom library in a React application. 
  This component is essential for enabling client-side routing, which allows the application to manage navigation 
  and URL changes without reloading the entire page.
*/


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();