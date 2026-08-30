import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { RefreshCcw, Printer, X } from 'lucide-react';

const StaffDepartment = () => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px' }}>
      
      <div className="premium-card" style={{ background: 'white', borderRadius: '8px', padding: '24px' }}>
        <PrintHeader />
        
        {/* Header Area */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '16px', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '18px', color: 'var(--text-main)' }}>Staff Department List</h2>
          <button 
            onClick={() => setIsModalOpen(true)}
            style={{ background: 'var(--success)', color: 'white', padding: '8px 16px', borderRadius: '4px', border: 'none', cursor: 'pointer', fontSize: '14px' }}
          >
            Department
          </button>
        </div>

        {/* Table Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            Show 
            <select style={{ margin: '0 8px', padding: '4px', border: '1px solid #e2e8f0', borderRadius: '4px', outline: 'none' }}>
              <option>50</option>
            </select> 
            entries
          </div>
          
          <div style={{ display: 'flex', gap: '4px' }}>
            <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', border: 'none', borderRadius: '4px 0 0 4px', cursor: 'pointer', fontSize: '12px' }}>Excel</button>
            <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', border: 'none', cursor: 'pointer', fontSize: '12px' }}>CSV</button>
            <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', border: 'none', cursor: 'pointer', fontSize: '12px' }}>PDF</button>
            <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', border: 'none', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', fontSize: '12px' }}>
              <Printer size={12} /> Print
            </button>
            <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', border: 'none', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', fontSize: '12px' }}>
              <RefreshCcw size={12} /> Reset
            </button>
            <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', border: 'none', borderRadius: '0 4px 4px 0', cursor: 'pointer', fontSize: '12px' }}>Reload</button>
          </div>
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="custom-table" style={{ width: '100%', fontSize: '12px', textAlign: 'center' }}>
            <thead>
              <tr style={{ background: '#94a3b8', color: 'white', textTransform: 'uppercase' }}>
                <th style={{ width: '80px', padding: '12px' }}>ID NO ⇅</th>
                <th style={{ padding: '12px' }}>NAME</th>
                <th style={{ padding: '12px' }}>CREATED AT ⇅</th>
                <th style={{ padding: '12px' }}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="4" style={{ padding: '24px', color: 'var(--text-muted)' }}>
                  No data available in table
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
          <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            Showing 0 to 0 of 0 entries
          </div>
          <div style={{ display: 'flex' }}>
            <button style={{ padding: '6px 12px', border: '1px solid #e2e8f0', background: 'var(--card-header-bg)', color: 'var(--text-muted)', borderRadius: '4px 0 0 4px', cursor: 'not-allowed' }}>Previous</button>
            <button style={{ padding: '6px 12px', border: '1px solid #e2e8f0', borderLeft: 'none', background: 'var(--card-header-bg)', color: 'var(--text-muted)', borderRadius: '0 4px 4px 0', cursor: 'not-allowed' }}>Next</button>
          </div>
        </div>
      </div>

      {/* Add Department Modal */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{ background: 'white', borderRadius: '8px', width: '400px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
            <div style={{ padding: '16px 24px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0, fontSize: '16px', color: 'var(--text-main)' }}>Add Department</h3>
              <button onClick={() => setIsModalOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                <X size={20} />
              </button>
            </div>
            <div style={{ padding: '24px' }}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: 'var(--label-color)' }}>Department Name <span style={{ color: 'var(--danger)' }}>*</span></label>
                <input type="text" placeholder=" " style={{ width: '100%', padding: '10px', border: '1px solid #e2e8f0', borderRadius: '4px', outline: 'none' }} />
                <label>Enter department name</label>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' }}>
                <button onClick={() => setIsModalOpen(false)} style={{ padding: '8px 16px', background: '#f1f5f9', color: 'var(--text-muted)', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Cancel</button>
                <button style={{ padding: '8px 16px', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>{t('common.save')}</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default StaffDepartment;
