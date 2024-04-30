import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './scripts/ThemeContext';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const container = document.getElementById('root');
const root = createRoot(container); 

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <HelmetProvider>
      <App />
      </HelmetProvider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
