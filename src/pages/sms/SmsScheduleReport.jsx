import React from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { RefreshCcw } from 'lucide-react';

const SmsScheduleReport = () => {
  const { t } = useTranslation();

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px' }}>
      
      <div className="premium-card">
        {/* Large Header Banner */}
        <div style={{ padding: '0', background: 'white', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}>
          <img 
            src="https://via.placeholder.com/1200x200?text=Rajdhani+Garments+Banner" 
            alt="Rajdhani Garments" 
            style={{ width: '100%', height: 'auto', maxHeight: '250px', objectFit: 'cover' }}
          />
        </div>
        
        {/* Report Title */}
        <div style={{ padding: '24px 24px 0', textAlign: 'center', background: 'white' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>Schedule SMS Report</h2>
        </div>

        {/* Filters */}
        <div className="premium-body" style={{ background: 'white', padding: '24px' }}>
        <PrintHeader />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 2fr 1fr', gap: '16px', alignItems: 'end', marginBottom: '24px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', marginBottom: '8px', color: 'var(--text-muted)' }}>{t('common.search_by_client')}</label>
              <select style={{ width: '100%', padding: '10px', border: '1px solid #0ea5e9', borderRadius: '4px', outline: 'none', appearance: 'none', background: 'white', color: 'var(--text-muted)' }}>
                <option value="" disabled selected hidden>{t('common.select_client')}</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '12px', marginBottom: '8px', color: 'var(--text-muted)' }}>Search By Supplier</label>
              <select style={{ width: '100%', padding: '10px', border: '1px solid #0ea5e9', borderRadius: '4px', outline: 'none', appearance: 'none', background: 'white', color: 'var(--text-muted)' }}>
                <option value="" disabled selected hidden>Select Suppliers</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '12px', marginBottom: '8px', color: 'var(--text-muted)' }}>{t('common.search_by_date')}</label>
              <div style={{ display: 'flex' }}>
                <input type="date" style={{ flex: 1, padding: '10px', border: '1px solid #0ea5e9', borderRight: 'none', borderRadius: '4px 0 0 4px', outline: 'none', color: 'var(--text-muted)' }} />
                <input type="date" style={{ flex: 1, padding: '10px', border: '1px solid #0ea5e9', borderRadius: '0 4px 4px 0', outline: 'none', color: 'var(--text-muted)' }} />
              </div>
            </div>
            <div>
              <button style={{ width: '100%', background: 'var(--text-muted)', color: 'white', padding: '11px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}>
                Clear Filter
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
            <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 16px', border: 'none', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '13px' }}>
              <RefreshCcw size={14} /> Reset
            </button>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <table className="custom-table">
              <thead>
                <tr>
                  <th style={{ width: '60px' }}>ID NO</th>
                  <th>SENT TO</th>
                  <th style={{ width: '35%' }}>MESSAGES.MESSAGE_BODY</th>
                  <th>SCHEDULE AT</th>
                  <th>{t('common.status')}</th>
                  <th style={{ textAlign: 'right' }}>ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="6" style={{ textAlign: 'center', padding: '24px', color: 'var(--text-muted)' }}>
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
      </div>
    </div>
  );
};

export default SmsScheduleReport;
