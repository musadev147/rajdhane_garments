import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SmsCustomer from '../pages/sms/SmsCustomer';
import SmsCustomerGroup from '../pages/sms/SmsCustomerGroup';
import SmsSupplier from '../pages/sms/SmsSupplier';
import SmsSupplierGroup from '../pages/sms/SmsSupplierGroup';
import SmsSchedule from '../pages/sms/SmsSchedule';
import SmsScheduleReport from '../pages/sms/SmsScheduleReport';

const SmsRoutes = () => {
  return (
    <div style={{ flex: 1, overflowY: 'auto' }}>
      <Routes>
        <Route path="customer" element={<SmsCustomer />} />
        <Route path="customer-group" element={<SmsCustomerGroup />} />
        <Route path="supplier" element={<SmsSupplier />} />
        <Route path="supplier-group" element={<SmsSupplierGroup />} />
        <Route path="schedule" element={<SmsSchedule />} />
        <Route path="schedule-report" element={<SmsScheduleReport />} />
      </Routes>
    </div>
  );
};

export default SmsRoutes;
