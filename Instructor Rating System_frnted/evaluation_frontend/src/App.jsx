import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import InstructorSelectionPage from './pages/InstructorSelectionPage';
import EvaluatingPage from './pages/EvaluatingPage'; // Make sure the filename matches

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
                <Route
                    path="/instructors"
                    element={isLoggedIn ? <InstructorSelectionPage /> : <Navigate to="/" />}
                />
                <Route
                    path="/rating"
                    element={isLoggedIn ? <EvaluatingPage /> : <Navigate to="/" />}
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;