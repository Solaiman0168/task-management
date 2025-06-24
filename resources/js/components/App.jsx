import React from 'react';
import Router from '../router/index';
import { NavLink } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <h1>Hello World!</h1>
            <nav>
                <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                    Home
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                    About
                </NavLink>
            </nav>
            <Router />
        </div>
    )
};

export default App;