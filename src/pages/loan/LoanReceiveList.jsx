import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { Plus, Printer, RotateCcw, Edit, Trash2 } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';

const LoanReceiveList = () => {
  const { t } = useTranslation();

  const { state } = useAppContext();
  const navigate = useNavigate();

  // Mock data matching the screenshot
  const [loans, setLoans] = useState([
    { id: 1, date: '23 Aug 2026', receiptNo: '182403', clientName: 'CASH BASHI', clientNumber: '01', type: 'Loan Receive', description: 'CASH BASHI', amount: 1296.00 },
    { id: 2, date: '21 Aug 2026', receiptNo: '182091', clientName: 'LAL MIYA //LATA GARAJ', clientNumber: '01', type: 'Loan Receive', description: 'LAL MEYA DOKAN ADVANCE JOMA', amount: 50000.00 },
    { id: 3, date: '21 Aug 2026', receiptNo: '182089', clientName: 'BIPUL LATA INGIN MISTREE', clientNumber: '0', type: 'Loan Receive', description: 'BIPUL LATA MISTIRY DOKAN ADVANCE', amount: 50000.00 },
    { id: 4, date: '20 Aug 2026', receiptNo: '182147', clientName: 'CASH BASHI', clientNumber: '01', type: 'Loan Receive', description: 'CASH BASHI', amount: 22900.00 },
    { id: 5, date: '18 Aug 2026', receiptNo: '182330', clientName: 'CASH BASHI', clientNumber: '01', type: 'Loan Receive', description: 'FIVE STAR BABOD BASHE JOMA', amount: 10100.00 },
    { id: 6, date: '09 Aug 2026', receiptNo: '179943', clientName: 'EASTERN BANK PLC', clientNumber: '01', type: 'Loan Receive', description: 'ESTAN BANK LOON NEWA', amount: 8000000.00 },
    { id: 7, date: '07 Aug 2026', receiptNo: '179548', clientName: 'BIPUL LATA INGIN MISTREE', clientNumber: '0', type: 'Loan Receive', description: 'BIPUL LATA INGIN MISTREE GOR ADVANCE BABOD', amount: 100000.00 },
    { id: 8, date: '04 Aug 2026', receiptNo: '178983', clientName: 'LAL MIYA //LATA GARAJ', clientNumber: '01', type: 'Loan Receive', description: 'LAL MIYA GARAJ ADVAVCE JOMA BIPUL VI', amount: 50000.00 },
    { id: 9, date: '21 Jul 2026', receiptNo: '176490', clientName: 'SELIM NIJ INVAST', clientNumber: '01', type: 'Loan Receive', description: 'ARIF IFIC BANK THAKA TAKA FEROT', amount: 90000.00 }
  ]);

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px', background: 'white' }}>
        <PrintHeader />
      
      {/* Center Title - stylized */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontFamily: 'monospace', fontSize: '24px', fontWeight: 'bold' }}>Loan List</h2>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 'normal', color: '#333' }}>Loan List</h2>
        <div className="card-actions" style={{ display: 'flex', gap: '8px' }}>
          <button className="btn btn-primary" onClick={() => navigate('/loan/receive-create')} style={{ background: 'var(--success)', padding: '6px 12px', fontSize: '14px', borderRadius: '4px' }}>
            <Plus size={14} /> Add Loan Receive
          </button>
          <button className="btn btn-outline" style={{ background: 'white', border: '1px solid #e2e8f0', color: 'red', display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '4px' }}>
            <span style={{ backgroundColor: 'red', color: 'white', borderRadius: '4px', padding: '0 4px', fontSize: '10px' }}>▶</span> <span style={{ color: 'black', fontWeight: 'bold' }}>YouTube</span>
          </button>
        </div>
      </div>

      <div className="card-body">
        {/* Filters */}
        <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr', marginBottom: '24px', alignItems: 'flex-end', gap: '16px', maxWidth: '800px', margin: '0 auto 24px auto' }}>
          <div className="form-group">
            <label style={{ fontSize: '12px', fontWeight: '600', marginBottom: '8px', textAlign: 'center', display: 'block' }}>{t('common.search_by_client')}</label>
            <div className="form-input floating-label" style={{ borderRadius: '24px' }}>
              <select style={{ textAlign: 'center' }}>
                <option>{t('common.select_client')}</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label style={{ fontSize: '12px', fontWeight: '600', marginBottom: '8px', textAlign: 'center', display: 'block' }}>{t('common.search_by_date')}</label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div className="form-input floating-label" style={{ flex: 1, padding: '0 8px', borderRadius: '24px' }}>
                <input type="date" style={{ color: '#94a3b8', textAlign: 'center' }} />
              </div>
              <div className="form-input floating-label" style={{ flex: 1, padding: '0 8px', borderRadius: '24px' }}>
                <input type="date" style={{ color: '#94a3b8', textAlign: 'center' }} />
              </div>
            </div>
          </div>

          <div className="form-group">
            <button className="btn btn-outline" style={{ height: '48px', width: '100%', background: 'var(--table-header-bg)', color: 'white', justifyContent: 'center', borderRadius: '4px', border: 'none' }}>
              Clear Filter
            </button>
          </div>
        </div>

        {/* Table Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ fontSize: '14px', color: 'var(--text-main)' }}>
            Show 
            <select style={{ margin: '0 8px', padding: '4px', border: '1px solid #e2e8f0', borderRadius: '4px' }}>
              <option>100</option>
            </select>
            entries
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn" onClick={() => window.print()} style={{ background: '#4F46E5', color: 'white', padding: '8px 16px', fontSize: '13px', borderRadius: '4px' }}>
              <Printer size={16} style={{ marginRight: '6px' }} /> Print
            </button>
            <button className="btn" style={{ background: '#4F46E5', color: 'white', padding: '8px 16px', fontSize: '13px', borderRadius: '4px' }}>
              <RotateCcw size={16} style={{ marginRight: '6px' }} /> Reset
            </button>
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto', border: '1px solid #e2e8f0' }}>
          <table className="custom-table" style={{ width: '100%', minWidth: '1000px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#a0aebf', color: 'white' }}>
                <th width="50" style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px' }}>SL ↕</th>
                <th width="120" style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px' }}>DATE</th>
                <th width="120" style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px' }}>RECEIPT NO</th>
                <th width="200" style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px' }}>CLIENT</th>
                <th width="150" style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px' }}>TYPE</th>
                <th width="250" style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px' }}>DESCRIPTION</th>
                <th width="120" style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px' }}>AMOUNT</th>
                <th width="100" style={{ textAlign: 'center', padding: '12px' }}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {loans.map((loan, index) => (
                <tr key={loan.id} style={{ background: 'white', borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #e2e8f0' }}>{index + 1}</td>
                  <td style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #e2e8f0' }}>{loan.date}</td>
                  <td style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #e2e8f0' }}>{loan.receiptNo}</td>
                  <td style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #e2e8f0', fontSize: '13px' }}>
                    <div>Name: {loan.clientName}</div>
                    <div>Number: {loan.clientNumber}</div>
                  </td>
                  <td style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #e2e8f0' }}>{loan.type}</td>
                  <td style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #e2e8f0' }}>{loan.description}</td>
                  <td style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #e2e8f0' }}>{loan.amount.toFixed(2)}</td>
                  <td style={{ textAlign: 'center', padding: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '4px' }}>
                      <button className="action-btn-sm edit" style={{ background: 'var(--info)', border: 'none', borderRadius: '4px', padding: '4px', color: 'white', cursor: 'pointer' }}>
                        <Edit size={14} />
                      </button>
                      <button className="action-btn-sm delete" style={{ background: 'var(--danger)', border: 'none', borderRadius: '4px', padding: '4px', color: 'white', cursor: 'pointer' }}>
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {loans.length === 0 && (
                <tr>
                  <td colSpan="8" style={{ textAlign: 'center', padding: '20px' }}>No loans found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LoanReceiveList;
