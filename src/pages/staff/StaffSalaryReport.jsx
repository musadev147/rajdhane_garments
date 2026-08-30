import React from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { RefreshCcw, Download, FileText, Printer } from 'lucide-react';

const StaffSalaryReport = () => {
  const { t } = useTranslation();

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px' }}>
      
      {/* Top Filters (Outside of the main card, or part of it but styled differently) */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '24px', alignItems: 'end' }}>
        <div>
          <label style={{ display: 'block', fontSize: '13px', color: 'white', marginBottom: '8px' }}>Month</label>
          <select style={{ width: '200px', padding: '10px 12px', borderRadius: '4px', border: 'none', outline: 'none' }}>
            <option>January</option>
          </select>
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '13px', color: 'white', marginBottom: '8px' }}>Year</label>
          <select style={{ width: '200px', padding: '10px 12px', borderRadius: '4px', border: 'none', outline: 'none' }}>
            <option>2026</option>
          </select>
        </div>
        <div>
          <button style={{ background: 'var(--success)', color: 'white', padding: '10px 32px', borderRadius: '4px', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}>
            Search
          </button>
        </div>
      </div>

      <div className="premium-card" style={{ background: 'white', borderRadius: '8px', padding: '24px' }}>
        <PrintHeader />
        
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
              CSV
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
                <th style={{ width: '60px' }}>ID NO</th>
                <th>IMAGE</th>
                <th>{t('common.name')}</th>
                <th>SALLARY</th>
                <th>PAYMENT</th>
                <th>WILL GET</th>
                <th>{t('common.status')}</th>
                <th>SIGNATURE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="8" style={{ padding: '24px', color: 'var(--text-muted)' }}>
                  No data available in table
                </td>
              </tr>
              {/* Total Row */}
              <tr style={{ fontWeight: 'bold' }}>
                <td colSpan="3" style={{ textAlign: 'center', padding: '12px' }}>{t('common.total')}</td>
                <td style={{ padding: '12px' }}>0.00</td>
                <td style={{ padding: '12px' }}>0.00</td>
                <td style={{ padding: '12px' }}>0.00</td>
                <td colSpan="2"></td>
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
  );
};

export default StaffSalaryReport;
