import React from 'react'
import ReactDOM from 'react-dom'
import DocumentMeta from 'react-document-meta';

import './index.css'
import App from './App'
import GA4React from "ga-4-react";

const meta = {
  title: 'Bstark Blue | Bhaskar Nair',
  description: 'Bhaskar Nair, Frontend Architect, Full Stack Developer, Hyderabad, India',
  canonical: 'http://bstark.tech',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'bhaskar nair, developer, india, hyderabad, front end, full stack'
    }
  }
};

ReactDOM.render(
  <React.StrictMode>
    <DocumentMeta {...meta} />
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
