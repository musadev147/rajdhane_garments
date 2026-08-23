import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import CrmRoutes from './routes/CrmRoutes';
import AccountRoutes from './routes/AccountRoutes';
import LoanRoutes from './routes/LoanRoutes';

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar />
        <main className="main-wrapper">
          <Header />
          <div style={{ flex: '1 0 auto', paddingBottom: '20px' }}>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              
              {/* All CRM related routes are handled inside CrmRoutes */}
              <Route path="/crm/*" element={<CrmRoutes />} />
              
              {/* Account Routes */}
              <Route path="/account/*" element={<AccountRoutes />} />
              
              {/* Loan Routes */}
              <Route path="/loan/*" element={<LoanRoutes />} />
            </Routes>
          </div>
          <footer style={{ textAlign: 'center', padding: '20px', color: '#6b7280', fontSize: '13px', flexShrink: 0 }}>
            Copyright © 2026 Softzen IT. All rights reserved.
          </footer>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
