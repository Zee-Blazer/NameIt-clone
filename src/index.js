import React from 'react';
import ReactDOM from 'react-dom/client';

// Styling
import "./style.css";

// Router
import RouterComp from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterComp />
  </React.StrictMode>
);

