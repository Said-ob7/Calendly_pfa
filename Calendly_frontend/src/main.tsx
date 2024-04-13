import React from 'react';
import { createRoot } from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';

// Create a root and render the App component
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
