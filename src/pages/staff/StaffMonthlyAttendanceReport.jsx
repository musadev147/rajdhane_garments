import React from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { RefreshCcw, Printer, Download, FileText } from 'lucide-react';

const StaffMonthlyAttendanceReport = () => {
  const { t } = useTranslation();

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px' }}>
      
      {/* Top Filter Pill */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px', position: 'relative', zIndex: 1 }}>
        <div style={{ background: 'white', padding: '16px', borderRadius: '30px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', display: 'flex', gap: '16px', alignItems: 'center', width: '80%', maxWidth: '800px' }}>
          
          <select style={{ flex: 1, padding: '12px 16px', border: '1px solid #e2e8f0', borderRadius: '4px', outline: 'none', appearance: 'none', background: 'white', color: '#000' }}>
            <option value="" disabled selected hidden>Select Staffs</option>
            <option>Admin</option>
            <option>John Doe</option>
          </select>
          
          <select style={{ flex: 1, padding: '12px 16px', border: '1px solid #e2e8f0', borderRadius: '4px', outline: 'none', appearance: 'none', background: 'white', color: '#000' }}>
            <option>January</option>
            <option>February</option>
            <option>March</option>
          </select>
          
          <select style={{ flex: 1, padding: '12px 16px', border: '1px solid #e2e8f0', borderRadius: '4px', outline: 'none', appearance: 'none', background: 'white', color: '#000' }}>
            <option>2026</option>
            <option>2027</option>
          </select>
          
          <button style={{ background: 'var(--success)', color: 'white', padding: '12px 32px', borderRadius: '4px', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}>
            Search
          </button>
        </div>
      </div>

      {/* Main Content Area - Table (Hidden initially or empty as per screenshot) */}
      <div className="premium-card" style={{ background: '#f1f5f9', minHeight: '400px', border: 'none', boxShadow: 'none' }}>
        <PrintHeader />
        {/* Placeholder for the table that would appear after search */}
      </div>

    </div>
  );
};

export default StaffMonthlyAttendanceReport;
