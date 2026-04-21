import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Exercise from './Exercise.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Exercise />
  </React.StrictMode>
);
