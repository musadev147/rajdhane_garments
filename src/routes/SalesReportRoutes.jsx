import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SalesAll from '../pages/sales-report/SalesAll';
import SalesBarcodeSearch from '../pages/sales-report/SalesBarcodeSearch';
import SalesDaily from '../pages/sales-report/SalesDaily';
import SalesCustomerWise from '../pages/sales-report/SalesCustomerWise';
import SalesGroupWise from '../pages/sales-report/SalesGroupWise';
import SalesProductWise from '../pages/sales-report/SalesProductWise';
import SalesProductGroupWise from '../pages/sales-report/SalesProductGroupWise';

const SalesReportRoutes = () => {
  return (
    <div style={{ flex: 1, overflowY: 'auto' }}>
      <Routes>
        <Route path="all" element={<SalesAll />} />
        <Route path="barcode-search" element={<SalesBarcodeSearch />} />
        <Route path="daily" element={<SalesDaily />} />
        <Route path="customer-wise" element={<SalesCustomerWise />} />
        <Route path="group-wise" element={<SalesGroupWise />} />
        <Route path="product-wise" element={<SalesProductWise />} />
        <Route path="product-group-wise" element={<SalesProductGroupWise />} />
      </Routes>
    </div>
  );
};

export default SalesReportRoutes;
