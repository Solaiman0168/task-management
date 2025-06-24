import react from 'react';
import Router from './router/index';
import { NavLink } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <h1>Hello World!</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </div>
    )
};

export default App;