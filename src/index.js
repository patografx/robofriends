import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tachyons';
import App from './containers/App';



const card = ReactDOM.createRoot(document.getElementById('card'));
card.render(
    <App/>
);