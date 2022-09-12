import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="https://mateuszbachor.github.io/react-homework-5/">
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
