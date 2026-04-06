import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

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
