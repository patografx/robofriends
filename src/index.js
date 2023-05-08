import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';
import './index.css';
import 'tachyons';


const card = ReactDOM.createRoot(document.getElementById('card'));
card.render(
        <App />
);