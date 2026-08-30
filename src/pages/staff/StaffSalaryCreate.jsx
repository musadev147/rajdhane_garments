import React from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';

const StaffSalaryCreate = () => {
  const { t } = useTranslation();

  const staffList = [
    { id: 1, name: 'Admin', salary: '0.00' },
    { id: 2, name: 'RAJDHANI 2', salary: '0.00' },
    { id: 3, name: 'RAJDHANI 3', salary: '0.00' },
    { id: 4, name: 'RAJDHANI 4', salary: '0.00' },
    { id: 5, name: 'RAJDHANI 1', salary: '0.00' },
    { id: 6, name: 'ROFCY // NORANDO PUR', salary: '11000.00' },
    { id: 7, name: '0', salary: '0.00' },
    { id: 8, name: 'FAIJUR', salary: '8000.00' },
    { id: 9, name: 'HUCAYEN FOYLA', salary: '8000.00' },
    { id: 10, name: 'NOYON // BOLIDAPARA', salary: '13000.00' },
    { id: 11, name: 'SHOHAG // BOLIDAPARA', salary: '15000.00' },
    { id: 12, name: '0', salary: '0.00' },
    { id: 13, name: 'SHAIB // KEYABAGAN', salary: '14000.00' },
    { id: 14, name: 'TOSLIM VIPO', salary: '6000.00' }
  ];

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px' }}>
      
      <div className="premium-card">
        {/* Header */}
        <div className="premium-header" style={{ padding: '16px 24px', background: 'white', borderBottom: '1px solid #e2e8f0' }}>
          <h2 className="premium-title" style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase' }}>Add Salary</h2>
        </div>

        {/* Body */}
        <div className="premium-body" style={{ background: 'white', padding: '24px' }}>
        <PrintHeader />
          
          {/* Top Filters */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px', maxWidth: '800px', margin: '0 auto 24px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', marginBottom: '8px', color: '#000' }}>Month</label>
              <select style={{ width: '100%', padding: '12px', border: '1px solid #0ea5e9', borderRadius: '4px', outline: 'none', appearance: 'none', background: 'white' }}>
                <option>August</option>
                <option>September</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '12px', marginBottom: '8px', color: '#000' }}>Year</label>
              <select style={{ width: '100%', padding: '12px', border: '1px solid #0ea5e9', borderRadius: '4px', outline: 'none', appearance: 'none', background: 'white' }}>
                <option>2026</option>
                <option>2027</option>
              </select>
            </div>
          </div>

          {/* Salary Table */}
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e2e8f0' }}>
            <thead>
              <tr style={{ background: '#94a3b8', color: 'white', textAlign: 'left', textTransform: 'uppercase', fontSize: '12px' }}>
                <th style={{ padding: '12px 16px', borderRight: '1px solid #e2e8f0', width: '50%' }}>STAFF NAME</th>
                <th style={{ padding: '12px 16px', width: '50%' }}>SALLARY</th>
              </tr>
            </thead>
            <tbody>
              {staffList.map((staff, index) => (
                <tr key={staff.id} style={{ borderBottom: '1px solid #e2e8f0', background: index % 2 === 0 ? 'var(--card-header-bg)' : 'white' }}>
                  <td style={{ padding: '12px 16px', borderRight: '1px solid #e2e8f0', fontSize: '13px', color: 'var(--label-color)' }}>
                    {staff.name}
                  </td>
                  <td style={{ padding: '0', margin: '0' }}>
                    <input 
                      type="text" 
                      defaultValue={staff.salary} 
                      style={{ width: '100%', height: '100%', padding: '12px 16px', border: 'none', outline: 'none', background: 'transparent', fontSize: '13px', color: 'var(--label-color)' }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Save Button (Assumed needed) */}
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <button className="btn-primary" style={{ background: 'var(--success)', color: 'white', padding: '12px 32px', border: 'none', borderRadius: '4px', fontSize: '14px', cursor: 'pointer' }}>
              Save Salaries
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StaffSalaryCreate;
