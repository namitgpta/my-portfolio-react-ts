import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Load Font Awesome dynamically from env
const fontAwesomeUrl = import.meta.env.VITE_FONT_AWESOME_URL;
if (fontAwesomeUrl) {
  const script = document.createElement('script');
  script.src = fontAwesomeUrl;
  script.crossOrigin = 'anonymous';
  document.head.appendChild(script);
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
