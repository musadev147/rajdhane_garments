import React from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { Calendar, Clock, AlertCircle } from 'lucide-react';

const StaffAttendanceCreate = () => {
  const { t } = useTranslation();

  const staffList = [
    { id: 1, name: 'Admin', phone: '0171691235001727902498' },
    { id: 2, name: 'RAJDHANI 2', phone: '' },
    { id: 3, name: 'RAJDHANI 3', phone: '' },
    { id: 4, name: 'RAJDHANI 4', phone: '' },
    { id: 5, name: 'RAJDHANI 1', phone: '' },
    { id: 6, name: 'ROFCY // NORANDO PUR', phone: '01608474079' },
    { id: 7, name: '0', phone: '01912897719' },
    { id: 8, name: 'FAIJUR', phone: '01763773919' },
    { id: 9, name: 'HUCAYEN FOYLA', phone: '01920902351' },
    { id: 10, name: 'NOYON // BOLIDAPARA', phone: '' },
    { id: 11, name: 'SHOHAG // BOLIDAPARA', phone: '' },
    { id: 12, name: '0', phone: '' },
    { id: 13, name: 'SHAIB // KEYABAGAN', phone: '' },
    { id: 14, name: 'TOSLIM VIPO', phone: '' },
    { id: 15, name: 'RAJOYAN', phone: '' },
    { id: 16, name: 'SUZON // SUNDORPUR', phone: '' },
    { id: 17, name: '0', phone: '' },
    { id: 18, name: '0', phone: '' },
    { id: 19, name: 'SABBIR // HELAI', phone: '' }
  ];

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px' }}>
      
      <div className="premium-card">
        {/* Header */}
        <div className="premium-header" style={{ padding: '16px 24px', background: 'white', borderBottom: '1px solid #e2e8f0' }}>
          <h2 className="premium-title" style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase' }}>Add Attendance</h2>
        </div>

        {/* Body */}
        <div className="premium-body" style={{ background: 'white', padding: '24px' }}>
        <PrintHeader />
          
          {/* Top Filter */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
            <div style={{ position: 'relative', width: '300px' }}>
              <div style={{ position: 'absolute', top: '-10px', left: '16px', background: 'var(--info)', color: 'white', fontSize: '11px', padding: '2px 8px', borderRadius: '4px', zIndex: 1, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Calendar size={12} /> Date
              </div>
              <input 
                type="text" 
                defaultValue="25/08/2026"
                style={{ width: '100%', padding: '12px', border: '1px solid #0ea5e9', borderRadius: '4px', outline: 'none', color: '#000', textAlign: 'center' }} 
              />
            </div>
          </div>

          {/* Attendance Table */}
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e2e8f0' }}>
            <thead>
              <tr style={{ background: '#94a3b8', color: 'white', textAlign: 'left', textTransform: 'uppercase', fontSize: '12px' }}>
                <th style={{ padding: '12px 16px', borderRight: '1px solid #e2e8f0' }}>STAFF NAME</th>
                <th style={{ padding: '12px 16px', borderRight: '1px solid #e2e8f0' }}>PHONE NUMBER</th>
                <th style={{ padding: '12px 16px', borderRight: '1px solid #e2e8f0' }}>IN TIME</th>
                <th style={{ padding: '12px 16px', borderRight: '1px solid #e2e8f0' }}>OUT TIME</th>
                <th style={{ padding: '12px 16px' }}>ATTENDANCE</th>
              </tr>
            </thead>
            <tbody>
              {staffList.map((staff, index) => (
                <tr key={staff.id} style={{ borderBottom: '1px solid #e2e8f0', background: index % 2 === 0 ? 'var(--card-header-bg)' : 'white' }}>
                  <td style={{ padding: '12px 16px', borderRight: '1px solid #e2e8f0', fontSize: '13px', color: 'var(--label-color)' }}>
                    {staff.name}
                  </td>
                  <td style={{ padding: '12px 16px', borderRight: '1px solid #e2e8f0', fontSize: '13px', color: 'var(--label-color)' }}>
                    {staff.phone}
                  </td>
                  <td style={{ padding: '12px 16px', borderRight: '1px solid #e2e8f0', fontSize: '13px', color: 'var(--label-color)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span>12:25:29 PM</span>
                      <Clock size={14} color="#94a3b8" />
                    </div>
                  </td>
                  <td style={{ padding: '12px 16px', borderRight: '1px solid #e2e8f0', fontSize: '13px', color: 'var(--label-color)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span>12:25:29 PM</span>
                      <Clock size={14} color="#94a3b8" />
                    </div>
                  </td>
                  <td style={{ padding: '12px 16px', fontSize: '13px', color: 'var(--label-color)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <AlertCircle size={14} color="#94a3b8" />
                      <select style={{ border: 'none', background: 'transparent', outline: 'none', color: 'var(--label-color)', cursor: 'pointer', appearance: 'none', width: '100%' }}>
                        <option>Absence</option>
                        <option>Present</option>
                        <option>Late</option>
                      </select>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Save Button */}
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <button className="btn-primary" style={{ background: 'var(--success)', color: 'white', padding: '12px 32px', border: 'none', borderRadius: '4px', fontSize: '14px', cursor: 'pointer' }}>
              Save Attendance
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StaffAttendanceCreate;
