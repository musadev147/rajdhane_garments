import React from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { Printer, RefreshCcw } from 'lucide-react';

const ExpenseSubcategory = () => {
  const { t } = useTranslation();

  const dummyData = []; // No data as per mockup

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px' }}>
      
      <div className="premium-card" style={{ background: 'white', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        <PrintHeader />
        <div style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0', color: 'var(--text-main)' }}>Expense Subcategory List</h2>
          <button style={{ background: 'var(--success)', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold' }}>
            Expense Subcategory
          </button>
        </div>

        <div style={{ padding: '24px' }}>
          
          {/* Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              Show 
              <select style={{ margin: '0 8px', padding: '4px', border: '1px solid #e2e8f0', borderRadius: '4px', outline: 'none' }}>
                <option>50</option>
              </select> 
              entries
            </div>
            
            <div style={{ display: 'flex', gap: '4px' }}>
              <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', border: 'none', borderRadius: '4px 0 0 0', display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>Excel</button>
              <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', border: 'none', display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>CSV</button>
              <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', border: 'none', display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>PDF</button>
              <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', border: 'none', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>
                <Printer size={14} /> Print
              </button>
              <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', border: 'none', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>
                <RefreshCcw size={14} /> Reset
              </button>
              <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', border: 'none', borderRadius: '0 4px 4px 0', display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>Reload</button>
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <table className="custom-table" style={{ width: '100%', fontSize: '13px', textAlign: 'center' }}>
              <thead>
                <tr style={{ background: '#94a3b8', color: 'white', textTransform: 'uppercase' }}>
                  <th style={{ width: '60px', padding: '12px', textAlign: 'center' }}>SL ⇅</th>
                  <th style={{ padding: '12px', textAlign: 'center' }}>SUBCATEGORY ⇅</th>
                  <th style={{ padding: '12px', textAlign: 'center' }}>CATEGORY ⇅</th>
                  <th style={{ padding: '12px', textAlign: 'center' }}>CREATED AT ⇅</th>
                  <th style={{ width: '100px', padding: '12px', textAlign: 'center' }}>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {dummyData.length > 0 ? (
                  dummyData.map((row) => (
                    <tr key={row.sl}>
                      <td style={{ padding: '12px' }}>{row.sl}</td>
                      <td style={{ padding: '12px' }}>{row.subcategory}</td>
                      <td style={{ padding: '12px' }}>{row.category}</td>
                      <td style={{ padding: '12px' }}>{row.createdAt}</td>
                      <td style={{ padding: '12px' }}></td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" style={{ padding: '12px', textAlign: 'center', color: 'var(--text-muted)' }}>
                      No data available in table
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', fontSize: '13px', color: 'var(--text-muted)' }}>
            <div>Showing 0 to 0 of 0 entries</div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <button style={{ padding: '6px 12px', border: '1px solid #e2e8f0', background: 'var(--card-header-bg)', borderRadius: '4px', cursor: 'pointer', color: 'var(--text-muted)' }}>Previous</button>
              <button style={{ padding: '6px 12px', border: '1px solid #e2e8f0', background: 'var(--card-header-bg)', borderRadius: '4px', cursor: 'pointer', color: 'var(--text-muted)' }}>Next</button>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  );
};

export default ExpenseSubcategory;
