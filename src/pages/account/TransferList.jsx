import React from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { Printer, RotateCcw } from 'lucide-react';

const TransferList = () => {
  const { t } = useTranslation();

  return (
    <div className="premium-card">
      <div className="premium-body" style={{ padding: '20px 40px 40px' }}>
        <PrintHeader />
        
        {/* Centered Title */}
        <h1 style={{ textAlign: 'center', fontFamily: 'monospace, serif', fontSize: '28px', color: '#111827', margin: '20px 0 40px' }}>Transfer List</h1>

        {/* Filter Section */}
        <div className="form-grid" style={{ gridTemplateColumns: '1.5fr 1.5fr 1.5fr 1fr', gap: '16px', marginBottom: '24px', alignItems: 'flex-end' }}>
          
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label style={{ fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>Search By Account</label>
            <div className="form-input floating-label">
              <select style={{ width: '100%' }}>
                <option value="">Select Account</option>
              </select>
            </div>
          </div>
          
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label style={{ fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>Search By Type</label>
            <div className="form-input floating-label">
              <select style={{ width: '100%' }}>
                <option value="">Choose one</option>
              </select>
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label style={{ fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>Search By Date</label>
            <div style={{ display: 'flex', gap: '12px' }}>
              <div className="form-input floating-label" style={{ flex: 1 }}>
                <input type="date" style={{ width: '100%', color: '#9ca3af' }} />
              </div>
              <div className="form-input floating-label" style={{ flex: 1 }}>
                <input type="date" style={{ width: '100%', color: '#9ca3af' }} />
              </div>
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <button style={{ width: '100%', height: '42px', background: '#6b7280', color: 'white', border: 'none', borderRadius: '4px', fontWeight: '600', cursor: 'pointer' }}>Clear Filter</button>
          </div>
        </div>

        {/* Table Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div className="show-entries" style={{ fontSize: '14px', color: '#4b5563' }}>
            Show 
            <select defaultValue="100" style={{ margin: '0 8px', padding: '4px', borderRadius: '4px', border: '1px solid #d1d5db' }}>
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select> 
            entries
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#3b82f6', color: 'white', padding: '6px 12px', borderRadius: '4px', border: 'none', fontSize: '13px', cursor: 'pointer' }} onClick={() => window.print()}><Printer size={14} /> Print</button>
            <button style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#3b82f6', color: 'white', padding: '6px 12px', borderRadius: '4px', border: 'none', fontSize: '13px', cursor: 'pointer' }}>Excel</button>
            <button style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#3b82f6', color: 'white', padding: '6px 12px', borderRadius: '4px', border: 'none', fontSize: '13px', cursor: 'pointer' }}>CSV</button>
            <button style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#3b82f6', color: 'white', padding: '6px 12px', borderRadius: '4px', border: 'none', fontSize: '13px', cursor: 'pointer' }}>PDF</button>
            <button style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#3b82f6', color: 'white', padding: '6px 12px', borderRadius: '4px', border: 'none', fontSize: '13px', cursor: 'pointer' }}><RotateCcw size={14} /> Reset</button>
          </div>
        </div>

        {/* Table Section */}
        <div style={{ overflowX: 'auto', border: '1px solid #e5e7eb', borderRadius: '4px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '1000px' }}>
            <thead>
              <tr style={{ background: '#9ca3af', color: 'white', fontSize: '11px' }}>
                <th style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #d1d5db' }}>SL ↕</th>
                <th style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #d1d5db' }}>DATE ↕</th>
                <th style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #d1d5db' }}>MESSAGES.SENDER_OR_RECEIVER ↕</th>
                <th style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #d1d5db' }}>TYPE ↕</th>
                <th style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #d1d5db' }}>ACCOUNT ↕</th>
                <th style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #d1d5db' }}>DESCRIPTION ↕</th>
                <th style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #d1d5db' }}>CREDIT ↕</th>
                <th style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #d1d5db' }}>DEBIT ↕</th>
                <th style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #d1d5db' }}>BALANCE ↕</th>
                <th style={{ padding: '12px 8px', textAlign: 'center' }}>ACTION ↕</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="10" style={{ padding: '16px', color: '#374151', background: 'white', textAlign: 'center', borderBottom: '1px solid #e5e7eb', fontSize: '13px' }}>
                  No data available in table
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr style={{ fontWeight: 'bold', background: '#f9fafb', borderTop: '1px solid #d1d5db' }}>
                <td colSpan="6" style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #d1d5db', fontSize: '13px' }}>Total</td>
                <td style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #d1d5db', fontSize: '13px' }}>0</td>
                <td style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #d1d5db', fontSize: '13px' }}>0</td>
                <td style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #d1d5db', fontSize: '13px' }}>0</td>
                <td style={{ padding: '12px 8px', textAlign: 'center' }}></td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Pagination Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
          <div style={{ fontSize: '13px', color: '#4b5563' }}>
            Showing 0 to 0 of 0 entries
          </div>
          <div style={{ display: 'flex', gap: '4px' }}>
            <button style={{ background: '#f3f4f6', color: '#4b5563', border: '1px solid #d1d5db', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', cursor: 'not-allowed' }} disabled>
              Previous
            </button>
            <button style={{ background: '#f3f4f6', color: '#4b5563', border: '1px solid #d1d5db', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', cursor: 'not-allowed' }} disabled>
              Next
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TransferList;
