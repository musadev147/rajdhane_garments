import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { Printer, RotateCcw } from 'lucide-react';

const LoanStatement = () => {
  const { t } = useTranslation();

  // Mock data matching the screenshot
  const [statements, setStatements] = useState([
    { id: 1, date: '23 May 2024', receiptNo: '4333', clientName: 'JHENIDA TDMC BANK DPS LOON RAJDHANI + JENTS', clientNumber: '01', description: 'JHENDA FDR LOON PAID', type: 'Loan Payment', loanReceive: 0, loanPayment: 400000.00, balance: 400000 },
    { id: 2, date: '26 May 2024', receiptNo: '4720', clientName: 'BRAC AGANT BANK', clientNumber: '01', description: 'BRAC LOON 3 KISTI', type: 'Loan Payment', loanReceive: 0, loanPayment: 436500.00, balance: -836500 },
    { id: 3, date: '30 May 2024', receiptNo: '5119', clientName: 'UNITED FINANAS', clientNumber: '01', description: 'UNITED KISSTI', type: 'Loan Payment', loanReceive: 0, loanPayment: 83500.00, balance: -920000 },
    { id: 4, date: '25 Jun 2024', receiptNo: '12333', clientName: 'BRAC AGANT BANK', clientNumber: '01', description: 'BRAC KISSTI', type: 'Loan Payment', loanReceive: 0, loanPayment: 436500.00, balance: -1356500 },
    { id: 5, date: '27 Jun 2024', receiptNo: '12503', clientName: 'SHAMULI APU // NIPA', clientNumber: '01916002218', description: 'SHAMOLI APU TAKA FAROT', type: 'Loan Payment', loanReceive: 0, loanPayment: 30000.00, balance: -1386500 },
    { id: 6, date: '29 Jun 2024', receiptNo: '12846', clientName: 'SHAMULI APU // NIPA', clientNumber: '01916002218', description: 'SHAMOLI APU TAKA FAROT', type: 'Loan Payment', loanReceive: 0, loanPayment: 90000.00, balance: -1476500 }
  ]);

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px', background: 'white' }}>
        <PrintHeader />
      
      {/* Center Title - stylized */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontFamily: 'monospace', fontSize: '24px', fontWeight: 'bold' }}>Loan Statement</h2>
      </div>

      {/* Header Info */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', fontSize: '14px' }}>
        <div>
          <div><span style={{ fontWeight: 'bold' }}>Name :</span> BIPUL LATA INGIN MISTREE</div>
          <div><span style={{ fontWeight: 'bold' }}>Address :</span> MONOHAR PUR //FOYLA</div>
          <div><span style={{ fontWeight: 'bold' }}>Contact No :</span> 0</div>
        </div>
        <div>
          <span style={{ fontWeight: 'bold' }}>Date :</span> 25 Aug 2026
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 'normal', color: '#333' }}>Loan Statement</h2>
        <div className="card-actions" style={{ display: 'flex', gap: '8px' }}>
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
                <th width="40" style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '12px' }}>SL ↕</th>
                <th width="100" style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '12px' }}>DATE</th>
                <th width="100" style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '12px' }}>RECEIPT NO</th>
                <th width="200" style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '12px' }}>CLIENT</th>
                <th width="200" style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '12px' }}>DESCRIPTION</th>
                <th width="100" style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '12px' }}>TYPE</th>
                <th width="100" style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '12px' }}>LOAN RECEIVE</th>
                <th width="100" style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '12px' }}>LOAN PAYMENT</th>
                <th width="100" style={{ textAlign: 'center', padding: '12px', fontSize: '12px' }}>BALANCE</th>
              </tr>
            </thead>
            <tbody>
              {statements.map((statement, index) => (
                <tr key={statement.id} style={{ background: 'white', borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #e2e8f0' }}>{index + 1}</td>
                  <td style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #e2e8f0' }}>{statement.date}</td>
                  <td style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #e2e8f0' }}>{statement.receiptNo}</td>
                  <td style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #e2e8f0', fontSize: '13px' }}>
                    <div>Name: {statement.clientName} | </div>
                    <div>Number: {statement.clientNumber}</div>
                  </td>
                  <td style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #e2e8f0', fontSize: '13px' }}>{statement.description}</td>
                  <td style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #e2e8f0' }}>{statement.type}</td>
                  <td style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #e2e8f0' }}>{statement.loanReceive}</td>
                  <td style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #e2e8f0' }}>{statement.loanPayment.toFixed(2)}</td>
                  <td style={{ textAlign: 'center', padding: '12px' }}>{statement.balance}</td>
                </tr>
              ))}
              {statements.length === 0 && (
                <tr>
                  <td colSpan="9" style={{ textAlign: 'center', padding: '20px' }}>No statements found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LoanStatement;
