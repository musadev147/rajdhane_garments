import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ExpenseAll from '../pages/expense-report/ExpenseAll';
import ExpenseCategoryWise from '../pages/expense-report/ExpenseCategoryWise';
import ExpenseSupplierPurchase from '../pages/expense-report/ExpenseSupplierPurchase';

const ExpenseReportRoutes = () => {
  return (
    <Routes>
      <Route path="all" element={<ExpenseAll />} />
      <Route path="category-wise" element={<ExpenseCategoryWise />} />
      <Route path="supplier-purchase" element={<ExpenseSupplierPurchase />} />
    </Routes>
  );
};

export default ExpenseReportRoutes;
