import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';


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
        color="secondary"
        sx={{
          position: 'fixed',
          bottom: 20,
          left: 20,
          zIndex: 1000,
          color: 'white',
          '&:hover': {
            backgroundColor: 'white', // Set background color to white on hover
            color: '#d32f2f',         // Set icon color to primary (red) on hover
          },
        }}
        onClick={() => openLink('https://www.instagram.com/sunleaf_international?igsh=djFyaHFsaWZoMTk1')}
      >
        <InstagramIcon />
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

