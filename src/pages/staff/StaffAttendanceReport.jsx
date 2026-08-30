import React from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { RefreshCcw, Printer } from 'lucide-react';

const StaffAttendanceReport = () => {
  const { t } = useTranslation();

  const dummyData = [
    { sl: 1, name: 'Admin', phone: '0171691235001727902498', date: '04 Feb 2025', inTime: '10:34 AM', outTime: '10:34 AM', attendance: 'Absence' },
    { sl: 2, name: 'RAJDHANI 2', phone: '--', date: '04 Feb 2025', inTime: '10:34 AM', outTime: '10:34 AM', attendance: 'Absence' },
    { sl: 3, name: 'RAJDHANI 3', phone: '--', date: '04 Feb 2025', inTime: '10:34 AM', outTime: '10:34 AM', attendance: 'Absence' },
    { sl: 4, name: 'RAJDHANI 4', phone: '--', date: '04 Feb 2025', inTime: '10:34 AM', outTime: '10:34 AM', attendance: 'Absence' },
    { sl: 5, name: 'RAJDHANI 1', phone: '--', date: '04 Feb 2025', inTime: '10:34 AM', outTime: '10:34 AM', attendance: 'Absence' },
    { sl: 6, name: 'ROFCY // NORANDO PUR', phone: '01608474079', date: '04 Feb 2025', inTime: '10:34 AM', outTime: '10:34 AM', attendance: 'Absence' },
    { sl: 7, name: '0', phone: '01912897719', date: '04 Feb 2025', inTime: '10:34 AM', outTime: '10:34 AM', attendance: 'Absence' },
    { sl: 8, name: 'FAIJUR', phone: '01763773919', date: '04 Feb 2025', inTime: '09:00 AM', outTime: '12:00 AM', attendance: 'Present' },
    { sl: 9, name: 'HUCAYEN FOYLA', phone: '01920902351', date: '04 Feb 2025', inTime: '10:00 AM', outTime: '10:34 AM', attendance: 'Late' },
    { sl: 10, name: 'NOYON // BOLIDAPARA', phone: '--', date: '04 Feb 2025', inTime: '09:20 AM', outTime: '10:34 AM', attendance: 'Late' },
    { sl: 11, name: 'SHOHAG // BOLIDAPARA', phone: '--', date: '04 Feb 2025', inTime: '11:00 AM', outTime: '10:34 AM', attendance: 'Late' },
    { sl: 12, name: '0', phone: '--', date: '04 Feb 2025', inTime: '10:34 AM', outTime: '10:34 AM', attendance: 'Absence' },
    { sl: 13, name: 'SHAIB // KEYABAGAN', phone: '--', date: '04 Feb 2025', inTime: '09:40 AM', outTime: '10:34 AM', attendance: 'Late' },
  ];

  const getBadgeStyle = (status) => {
    switch (status) {
      case 'Absence':
        return { background: 'var(--danger)', color: 'white' };
      case 'Present':
        return { background: 'var(--success)', color: 'white' };
      case 'Late':
        return { background: 'var(--warning)', color: 'white' };
      default:
        return { background: 'var(--text-muted)', color: 'white' };
    }
  };

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px' }}>
      
      <div className="premium-card">
        {/* Header */}
        <div className="premium-header" style={{ padding: '24px', background: 'white', borderBottom: '1px solid #e2e8f0', textAlign: 'center' }}>
          <h2 className="premium-title" style={{ fontSize: '18px', fontWeight: 'bold' }}>Staff Attendance</h2>
        </div>

        {/* Body */}
        <div className="premium-body" style={{ background: 'white', padding: '24px' }}>
        <PrintHeader />
          
          {/* Top Filters */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
            
            {/* Filter Row 1 */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', background: 'white', padding: '16px', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <select style={{ width: '200px', padding: '10px 12px', borderRadius: '4px', border: '1px solid #0ea5e9', outline: 'none', appearance: 'none', background: 'white' }}>
                <option>August</option>
              </select>
              <select style={{ width: '200px', padding: '10px 12px', borderRadius: '4px', border: '1px solid #0ea5e9', outline: 'none', appearance: 'none', background: 'white' }}>
                <option>2026</option>
              </select>
              <button style={{ background: 'var(--success)', color: 'white', padding: '10px 32px', borderRadius: '4px', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}>
                Search
              </button>
            </div>

            {/* Filter Row 2 */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', background: 'white', padding: '16px', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <input 
                type="text" 
                defaultValue="25/08/2026"
                style={{ width: '416px', padding: '10px 12px', borderRadius: '4px', border: '1px solid #0ea5e9', outline: 'none', textAlign: 'center' }} 
              />
              <button style={{ background: 'var(--success)', color: 'white', padding: '10px 32px', borderRadius: '4px', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}>
                Search
              </button>
            </div>

          </div>

          {/* Table Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              Show 
              <select style={{ margin: '0 8px', padding: '4px', border: '1px solid #e2e8f0', borderRadius: '4px', outline: 'none' }}>
                <option>100</option>
              </select> 
              entries
            </div>
            
            <div style={{ display: 'flex', gap: '4px' }}>
              <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', border: 'none', borderRadius: '4px 0 0 4px', cursor: 'pointer', fontSize: '12px' }}>
                Excel
              </button>
              <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', border: 'none', cursor: 'pointer', fontSize: '12px' }}>
                PDF
              </button>
              <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', border: 'none', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', fontSize: '12px' }}>
                <Printer size={12} /> Print
              </button>
              <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', border: 'none', borderRadius: '0 4px 4px 0', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', fontSize: '12px' }}>
                <RefreshCcw size={12} /> Reset
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <table className="custom-table" style={{ width: '100%', fontSize: '12px', textAlign: 'center' }}>
              <thead>
                <tr style={{ background: '#94a3b8', color: 'white' }}>
                  <th style={{ width: '50px' }}>SL</th>
                  <th>IMAGE</th>
                  <th>{t('common.name')}</th>
                  <th>PHONE NUMBER</th>
                  <th>{t('common.date')}</th>
                  <th>IN TIME</th>
                  <th>OUT TIME</th>
                  <th>ATTENDANCE</th>
                </tr>
              </thead>
              <tbody>
                {dummyData.map((row) => (
                  <tr key={row.sl}>
                    <td style={{ textAlign: 'center', padding: '12px' }}>{row.sl}</td>
                    <td style={{ textAlign: 'center', padding: '12px' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--card-border)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#94a3b8' }}></div>
                      </div>
                    </td>
                    <td style={{ padding: '12px' }}>{row.name}</td>
                    <td style={{ padding: '12px' }}>{row.phone}</td>
                    <td style={{ padding: '12px' }}>{row.date}</td>
                    <td style={{ padding: '12px' }}>{row.inTime}</td>
                    <td style={{ padding: '12px' }}>{row.outTime}</td>
                    <td style={{ textAlign: 'center', padding: '12px' }}>
                      <span style={{ padding: '4px 12px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold', ...getBadgeStyle(row.attendance) }}>
                        {row.attendance}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StaffAttendanceReport;
