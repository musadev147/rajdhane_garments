import React from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { Plus, Printer, RefreshCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StaffPaymentReport = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const dummyData = [
    { sl: 1, date: '01 Sep 2026', receiptFor: 'JOLIL // BOLIDAPARA', idNo: '182396', category: 'DOKAN KOROJ', account: 'TOTAL BALENCE', chequeNo: '', description: 'JOLIL SALARE AD', transactionType: 'Staff Payment', bank: '---', amount: '4000.00' },
    { sl: 2, date: '21 Aug 2026', receiptFor: 'SUZON // SUNDORPUR', idNo: '182082', category: 'DOKAN KOROJ', account: 'TOTAL BALENCE', chequeNo: '', description: 'SUZON SALARI', transactionType: 'Staff Payment', bank: '---', amount: '4200.00' },
    { sl: 3, date: '21 Aug 2026', receiptFor: 'PINTU // MANEJAR', idNo: '182081', category: 'DOKAN KOROJ', account: 'TOTAL BALENCE', chequeNo: '', description: 'PINTU SALARI', transactionType: 'Staff Payment', bank: '---', amount: '5000.00' },
    { sl: 4, date: '21 Aug 2026', receiptFor: 'SHIAB BOLIDAPARA', idNo: '182080', category: 'DOKAN KOROJ', account: 'TOTAL BALENCE', chequeNo: '', description: 'SHIAB SALARI', transactionType: 'Staff Payment', bank: '---', amount: '1200.00' },
    { sl: 5, date: '20 Aug 2026', receiptFor: 'PINTU // MANEJAR', idNo: '181858', category: 'DOKAN KOROJ', account: 'TOTAL BALENCE', chequeNo: '', description: 'PINTU SALAEI', transactionType: 'Staff Payment', bank: '---', amount: '2000.00' },
    { sl: 6, date: '18 Aug 2026', receiptFor: 'RAZU 2 SUNDORPUR', idNo: '181597', category: 'DOKAN KOROJ', account: 'TOTAL BALENCE', chequeNo: '', description: 'RAZU 2 SALARI', transactionType: 'Staff Payment', bank: '---', amount: '3000.00' },
    { sl: 7, date: '18 Aug 2026', receiptFor: 'TOSLIM VIPO', idNo: '181595', category: 'DOKAN KOROJ', account: 'TOTAL BALENCE', chequeNo: '', description: 'TOSLIM SALARI', transactionType: 'Staff Payment', bank: '---', amount: '500.00' },
  ];

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px' }}>
      
      <div className="premium-card">
        {/* Large Header Banner */}
        <div style={{ padding: '0', background: 'white', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}>
          <img 
            src="https://via.placeholder.com/1200x200?text=Rajdhani+Garments+Banner" 
            alt="Rajdhani Garments" 
            style={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'cover' }}
          />
        </div>
        
        {/* Report Title & Buttons */}
        <div style={{ padding: '24px 24px 0', background: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>Expense List</h2>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button 
              className="btn-primary" 
              onClick={() => navigate('/staff/payment/create')}
              style={{ background: 'var(--success)', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px', border: 'none', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}
            >
              <Plus size={14} /> Payment
            </button>
            <button className="btn" style={{ background: 'var(--danger)', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px', border: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontWeight: 'bold' }}>▶</span> YouTube
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="premium-body" style={{ background: 'white', padding: '24px' }}>
        <PrintHeader />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 2fr 1fr', gap: '16px', alignItems: 'end', marginBottom: '24px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', marginBottom: '8px', color: 'var(--text-muted)' }}>
                <span style={{ background: 'var(--info)', color: 'white', padding: '2px 8px', borderRadius: '12px', fontSize: '10px' }}>ID Search By</span>
              </label>
              <input type="text" placeholder=" " style={{ width: '100%', padding: '10px', border: '1px solid #0ea5e9', borderRadius: '4px', outline: 'none', color: 'var(--text-muted)' }} />
                <label>ID Search By</label>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '12px', marginBottom: '8px', color: 'var(--text-muted)' }}>Search By Staff</label>
              <select style={{ width: '100%', padding: '10px', border: '1px solid #0ea5e9', borderRadius: '4px', outline: 'none', appearance: 'none', background: 'white', color: 'var(--text-muted)' }}>
                <option value="" disabled selected hidden>Select Staffs</option>
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
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', border: 'none', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', fontSize: '13px' }}>
                <Printer size={14} /> Print
              </button>
              <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', border: 'none', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', fontSize: '13px' }}>
                <RefreshCcw size={14} /> Reset
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <table className="custom-table" style={{ fontSize: '11px', width: '100%' }}>
              <thead>
                <tr>
                  <th style={{ width: '30px', textAlign: 'center' }}>SL</th>
                  <th style={{ textAlign: 'center' }}>DATE</th>
                  <th>RECEIPT FOR</th>
                  <th style={{ textAlign: 'center' }}>ID NO</th>
                  <th style={{ textAlign: 'center' }}>CATEGORY</th>
                  <th style={{ textAlign: 'center' }}>ACCOUNT</th>
                  <th style={{ textAlign: 'center' }}>CHEQUE NO</th>
                  <th>{t('common.description')}</th>
                  <th style={{ textAlign: 'center' }}>TRANSACTION TYPE</th>
                  <th style={{ textAlign: 'center' }}>BANK</th>
                  <th style={{ textAlign: 'right' }}>AMOUNT</th>
                  <th style={{ textAlign: 'center' }}>PRINTABLE</th>
                  <th style={{ textAlign: 'center' }}>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {dummyData.map((row) => (
                  <tr key={row.sl}>
                    <td style={{ textAlign: 'center', padding: '12px' }}>{row.sl}</td>
                    <td style={{ textAlign: 'center', padding: '12px' }}>
                      <div dangerouslySetInnerHTML={{ __html: row.date.replace(' ', '<br/>') }} />
                    </td>
                    <td style={{ padding: '12px' }}>{row.receiptFor}</td>
                    <td style={{ textAlign: 'center', padding: '12px' }}>{row.idNo}</td>
                    <td style={{ textAlign: 'center', padding: '12px' }}>
                      <div dangerouslySetInnerHTML={{ __html: row.category.replace(' ', '<br/>') }} />
                    </td>
                    <td style={{ textAlign: 'center', padding: '12px' }}>
                      <div dangerouslySetInnerHTML={{ __html: row.account.replace(' ', '<br/>') }} />
                    </td>
                    <td style={{ textAlign: 'center', padding: '12px' }}>{row.chequeNo}</td>
                    <td style={{ padding: '12px' }}>{row.description}</td>
                    <td style={{ textAlign: 'center', padding: '12px' }}>
                      <span style={{ background: 'var(--success)', color: 'white', padding: '2px 6px', borderRadius: '4px', fontSize: '10px' }}>
                        {row.transactionType}
                      </span>
                    </td>
                    <td style={{ textAlign: 'center', padding: '12px' }}>{row.bank}</td>
                    <td style={{ textAlign: 'right', padding: '12px' }}>{row.amount}</td>
                    <td style={{ textAlign: 'center', padding: '12px' }}>
                      <button style={{ background: 'var(--success)', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}>
                        <Printer size={12} />
                      </button>
                    </td>
                    <td style={{ textAlign: 'center', padding: '12px' }}>
                      <div style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
                        <button style={{ background: 'var(--info)', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}>✎</button>
                        <button style={{ background: 'var(--danger)', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}>🗑</button>
                      </div>
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

export default StaffPaymentReport;
