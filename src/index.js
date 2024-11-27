import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"


const root = ReactDOM.createRoot(document.getElementById('root'));
const openLink = (url) => {
  window.open(url, '_blank');
};
root.render(
  <React.StrictMode>
    <Router>
      <div>
        {/* Instagram Button (Left) */}
      <Fab
        color="primary"
        sx={{
          position: 'fixed',
          bottom: 20,
          left: 20,
          zIndex: 1000,
          color: 'white',
          '&:hover': {
            backgroundColor: 'white', // Set background color to white on hover
            color: 'blue',         // Set icon color to primary (red) on hover
          },
        }}
        onClick={() => (window.location.href = 'tel:+919106513214')}
      >
        <PhoneIcon />
      </Fab>

      {/* WhatsApp Button (Right) */}
      <Fab
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 1000,
          backgroundColor: '#25D366', // Initial WhatsApp green color
          color: 'white',             // Initial text/icon color
          '&:hover': {
            backgroundColor: 'white', // Set background color to white on hover
            color: '#25D366',         // Set icon color to green on hover
          },
        }}
        onClick={() => openLink('https://wa.me/message/2LBZPWLP2JTQI1')}
      >
        <WhatsAppIcon />
      </Fab>
        <App />
      </div>
    </Router>
  </React.StrictMode>
);

