import React from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { Printer, RefreshCcw, Edit, Trash2 } from 'lucide-react';

const ExpenseCategory = () => {
  const { t } = useTranslation();

  const dummyData = [
    { sl: 1, name: 'FOYLA MARET', createdAt: '15 Aug 2026' },
    { sl: 2, name: 'MALL FEROT', createdAt: '02 Feb 2025' },
    { sl: 3, name: 'DOKAN KOROJ', createdAt: '01 May 2024' },
    { sl: 4, name: 'JAKAT FAND', createdAt: '22 Apr 2024' },
    { sl: 5, name: 'HAULAD', createdAt: '22 Apr 2024' },
    { sl: 6, name: 'KURAY PEMANT', createdAt: '22 Apr 2024' },
    { sl: 7, name: 'LOON PAID', createdAt: '22 Apr 2024' },
    { sl: 8, name: 'ROFIQ', createdAt: '22 Apr 2024' },
    { sl: 9, name: 'SELIM', createdAt: '22 Apr 2024' },
    { sl: 10, name: 'UPDETED DOKAN', createdAt: '22 Apr 2024' },
  ];

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px' }}>
      
      <div className="premium-card" style={{ background: 'white', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        <PrintHeader />
        <div style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0', color: 'var(--text-main)' }}>Expense Category List</h2>
          <button style={{ background: 'var(--success)', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold' }}>
            Expense Category
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
                  <th style={{ padding: '12px', textAlign: 'center' }}>NAME ⇅</th>
                  <th style={{ padding: '12px', textAlign: 'center' }}>CREATED AT ⇅</th>
                  <th style={{ width: '100px', padding: '12px', textAlign: 'center' }}>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {dummyData.map((row) => (
                  <tr key={row.sl}>
                    <td style={{ padding: '12px' }}>{row.sl}</td>
                    <td style={{ padding: '12px' }}>{row.name}</td>
                    <td style={{ padding: '12px' }}>{row.createdAt}</td>
                    <td style={{ padding: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '4px' }}>
                        <button style={{ background: '#06b6d4', color: 'white', border: 'none', padding: '6px', borderRadius: '4px', cursor: 'pointer' }}>
                          <Edit size={14} />
                        </button>
                        <button style={{ background: 'var(--danger)', color: 'white', border: 'none', padding: '6px', borderRadius: '4px', cursor: 'pointer' }}>
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', fontSize: '13px', color: 'var(--text-muted)' }}>
            <div>Showing 1 to 10 of 10 entries</div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <button style={{ padding: '6px 12px', border: '1px solid #e2e8f0', background: 'var(--card-header-bg)', borderRadius: '4px', cursor: 'pointer', color: 'var(--text-muted)' }}>Previous</button>
              <button style={{ padding: '6px 12px', border: 'none', background: 'var(--primary)', color: 'white', borderRadius: '4px', cursor: 'pointer' }}>1</button>
              <button style={{ padding: '6px 12px', border: '1px solid #e2e8f0', background: 'var(--card-header-bg)', borderRadius: '4px', cursor: 'pointer', color: 'var(--text-muted)' }}>Next</button>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  );
};

export default ExpenseCategory;
