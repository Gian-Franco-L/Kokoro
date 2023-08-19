import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import App from './Routes/App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App className="body"/>
);
