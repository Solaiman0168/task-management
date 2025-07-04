import './bootstrap';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

// const root = ReactDOM.createRoot(document.getElementById('app'));
// root.render(<App />);

ReactDOM.createRoot(document.getElementById('app')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
