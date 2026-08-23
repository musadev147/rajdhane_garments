import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import CrmRoutes from './routes/CrmRoutes';

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar />
        <main className="main-wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* All CRM related routes are handled inside CrmRoutes */}
            <Route path="/crm/*" element={<CrmRoutes />} />
            
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
