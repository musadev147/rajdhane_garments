import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoanClientCreate from '../pages/loan/LoanClientCreate';
import LoanClientList from '../pages/loan/LoanClientList';

const LoanRoutes = () => {
  return (
    <div className="dashboard-content">
      <Routes>
        <Route path="/" element={<Navigate to="client-create" replace />} />
        <Route path="client-create" element={<LoanClientCreate />} />
        <Route path="client-list" element={<LoanClientList />} />
        
        {/* Placeholders for future pages */}
        <Route path="receive" element={<div style={{ padding: '20px' }}>Loan Receive Component (Coming Soon)</div>} />
        <Route path="payment" element={<div style={{ padding: '20px' }}>Loan Payment Component (Coming Soon)</div>} />
        <Route path="statement" element={<div style={{ padding: '20px' }}>Loan Statement Component (Coming Soon)</div>} />
      </Routes>
    </div>
  );
};

export default LoanRoutes;
