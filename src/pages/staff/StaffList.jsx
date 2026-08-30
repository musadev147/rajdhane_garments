import React from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { Plus, RefreshCcw, Download, RotateCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StaffList = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const dummyData = [
    { id: 1, name: 'JEYA VI // BOLIDAPARA (jeya010733)', phone: '', email: '', image: '', password: 'jeya010733', roles: '', createdAt: '30 Dec 2025' },
    { id: 2, name: 'ALOM VI // BOLIDAPARA (alom010044)', phone: '', email: '', image: '', password: 'alom010044', roles: '', createdAt: '30 Dec 2025' },
    { id: 3, name: 'IKBAL VI // SUNDORPUR (ikbal104720)', phone: '', email: '', image: '', password: 'ikbal104720', roles: '', createdAt: '23 Dec 2025' },
    { id: 4, name: 'JOLIL // BOLIDAPARA (jolil085042)', phone: '', email: '', image: '', password: 'jolil085042', roles: '', createdAt: '21 Dec 2025' },
    { id: 5, name: 'BAPPY // BOLIDAPARA (jabir042754)', phone: '', email: '', image: '', password: 'jabir042754', roles: '', createdAt: '14 Aug 2025' },
    { id: 6, name: 'JIHAD // DULALMUNDIYA (milon095117)', phone: '', email: '', image: '', password: 'milon095117', roles: '', createdAt: '03 Sep 2024' },
    { id: 7, name: 'SHAHIN VI (shahin094001)', phone: '', email: '', image: '', password: 'shahin094001', roles: '', createdAt: '03 Sep 2024' },
    { id: 8, name: 'SHIAB BOLIDAPARA (maruf093705)', phone: '', email: '', image: '', password: 'maruf093705', roles: '', createdAt: '03 Sep 2024' },
    { id: 9, name: 'RAZU 2 SUNDORPUR (0000)', phone: '', email: '', image: '', password: '0000', roles: '', createdAt: '03 Sep 2024' },
    { id: 10, name: 'SUMON ARPARA (raki094654)', phone: '', email: '', image: '', password: 'raki094654', roles: '', createdAt: '03 May 2024' },
    { id: 11, name: 'TAMIM VIPO (roki024051)', phone: '', email: '', image: '', password: 'roki024051', roles: '', createdAt: '27 Apr 2024' },
  ];

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px' }}>
      
      <div className="premium-card">
        {/* Header */}
        <div className="premium-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', background: 'white' }}>
          <h2 className="premium-title" style={{ fontSize: '18px', fontWeight: 'bold' }}>Staff List</h2>
          <button 
            className="btn-primary" 
            onClick={() => navigate('/staff/create')}
            style={{ background: 'var(--success)', color: 'white', padding: '8px 16px', fontSize: '13px', borderRadius: '4px', border: 'none', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}
          >
            <Plus size={16} /> Add Staff
          </button>
        </div>

        {/* Body */}
        <div className="premium-body" style={{ background: 'white', padding: '24px' }}>
        <PrintHeader />
          
          {/* Table Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              Show 
              <select style={{ margin: '0 8px', padding: '4px', border: '1px solid #e2e8f0', borderRadius: '4px', outline: 'none' }}>
                <option>50</option>
              </select> 
              entries
            </div>
            
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', border: 'none', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', fontSize: '12px' }}>
                Excel
              </button>
              <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', border: 'none', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', fontSize: '12px' }}>
                <RotateCcw size={14} /> Reset
              </button>
              <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>
                Reload
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <table className="custom-table" style={{ width: '100%', fontSize: '12px' }}>
              <thead>
                <tr>
                  <th style={{ width: '50px', textAlign: 'center' }}>ID NO</th>
                  <th>{t('common.name')}</th>
                  <th>PHONE NUMBER</th>
                  <th>E-MAIL</th>
                  <th style={{ textAlign: 'center' }}>IMAGE</th>
                  <th>PASSWORD</th>
                  <th>ROLES</th>
                  <th style={{ textAlign: 'center' }}>PERMISSIONS</th>
                  <th>CREATED AT</th>
                  <th style={{ textAlign: 'center' }}>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {dummyData.map((row) => (
                  <tr key={row.id}>
                    <td style={{ textAlign: 'center', padding: '12px' }}>{row.id}</td>
                    <td style={{ padding: '12px' }}>{row.name}</td>
                    <td style={{ padding: '12px' }}>{row.phone}</td>
                    <td style={{ padding: '12px' }}>{row.email}</td>
                    <td style={{ textAlign: 'center', padding: '12px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f1f5f9', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--card-border)' }}>
                         {/* Placeholder for image */}
                         <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #cbd5e1' }}></div>
                      </div>
                    </td>
                    <td style={{ padding: '12px' }}>{row.password}</td>
                    <td style={{ padding: '12px' }}>{row.roles}</td>
                    <td style={{ textAlign: 'center', padding: '12px' }}>
                      <button style={{ background: 'var(--success)', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', cursor: 'pointer' }}>
                        Permissions
                      </button>
                    </td>
                    <td style={{ padding: '12px' }}>{row.createdAt}</td>
                    <td style={{ textAlign: 'center', padding: '12px' }}>
                      <button style={{ background: 'var(--success)', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', cursor: 'pointer', display: 'flex', alignItems: 'center', margin: '0 auto', gap: '4px' }}>
                        Action <span style={{ fontSize: '8px' }}>▼</span>
                      </button>
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

export default StaffList;
