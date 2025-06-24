import React from 'react';
import { Routes, Route, createBrowserRouter } from 'react-router-dom';
import App from '../components/App';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import NotFoundPage from '../components/NotFoundPage';

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App />,
//         errorElement: <NotFoundPage />,
//         children: [
//             {
//                 path: "/",
//                 element: <HomePage />,
//             },
//             {
//                 path: "about",
//                 element: <AboutPage />,
//             },
//         ],
//     },
// ]);

const Index = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </div>
    )
}

export default router;