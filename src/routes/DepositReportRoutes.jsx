import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DepositAll from '../pages/deposit-report/DepositAll';
import DepositCategoryWise from '../pages/deposit-report/DepositCategoryWise';
import DepositCustomerWise from '../pages/deposit-report/DepositCustomerWise';

const DepositReportRoutes = () => {
  return (
    <Routes>
      <Route path="all" element={<DepositAll />} />
      <Route path="category-wise" element={<DepositCategoryWise />} />
      <Route path="customer-wise" element={<DepositCustomerWise />} />
    </Routes>
  );
};

export default DepositReportRoutes;
