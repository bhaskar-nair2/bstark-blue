import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import GA4React from "ga-4-react";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

try {
  setTimeout(_ => {
    const ga4react = new GA4React("G-VLHQC0W4R5");
    ga4react.initialize();
  }, 4000);
} catch (err) { }
