import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './index.css'; // Import Tailwind CSS styles

// Import your pages or components here
import LoginPage from './components/login/LoginPage';
 import RegisterPage from './components/register/RegisterPage';
 import ForgotPasswordPage from './components/forgotPassword/forgetpasswordPage';
 import ResetPasswordPage from './components/ResetpasswordPage';
import DashboardPage from './components/dashboard/DashboardPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> 
        <Route path='/forgotpassword' element={<ForgotPasswordPage />} /> 
        <Route path='/resetpassword' element={<ResetPasswordPage />} /> 
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route path='/Dashboard' element={<DashboardPage />} />
      </Routes>
    </Router>
  );
};

export default App;