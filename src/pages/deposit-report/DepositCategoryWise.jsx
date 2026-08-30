import React from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { RefreshCcw, Printer } from 'lucide-react';

const DepositCategoryWise = () => {
  const { t } = useTranslation();

  const dummyData = [
    { sl: 1, date: '25 Aug 2026', idNo: '182630', client: 'Name: C.CASTOMER | Number: 01', invoiceId: '160524', desc: '', amount: '880.00', type: 'Invoice', category: 'CASH SELL' },
    { sl: 2, date: '25 Aug 2026', idNo: '182629', client: 'Name: C.CASTOMER | Number: 01', invoiceId: '160523', desc: '', amount: '1150.00', type: 'Invoice', category: 'CASH SELL' },
    { sl: 3, date: '25 Aug 2026', idNo: '182628', client: 'Name: C.CASTOMER | Number: 01', invoiceId: '160522', desc: '', amount: '450.00', type: 'Invoice', category: 'CASH SELL' },
    { sl: 4, date: '25 Aug 2026', idNo: '182627', client: 'Name: C.CASTOMER | Number: 01', invoiceId: '160521', desc: '', amount: '6750.00', type: 'Invoice', category: 'CASH SELL' },
    { sl: 5, date: '25 Aug 2026', idNo: '182626', client: 'Name: C.CASTOMER | Number: 01', invoiceId: '160520', desc: '', amount: '5390.00', type: 'Invoice', category: 'CASH SELL' },
    { sl: 6, date: '25 Aug 2026', idNo: '182625', client: 'Name: C.CASTOMER | Number: 01', invoiceId: '160519', desc: '', amount: '800.00', type: 'Invoice', category: 'CASH SELL' },
    { sl: 7, date: '25 Aug 2026', idNo: '182624', client: 'Name: C.CASTOMER | Number: 01', invoiceId: '160518', desc: '', amount: '570.00', type: 'Invoice', category: 'CASH SELL' },
    { sl: 8, date: '25 Aug 2026', idNo: '182623', client: 'Name: C.CASTOMER | Number: 01', invoiceId: '160517', desc: '', amount: '1150.00', type: 'Invoice', category: 'CASH SELL' },
    { sl: 9, date: '25 Aug 2026', idNo: '182622', client: 'Name: C.CASTOMER | Number: 01', invoiceId: '160516', desc: '', amount: '230.00', type: 'Invoice', category: 'CASH SELL' },
    { sl: 10, date: '25 Aug 2026', idNo: '182621', client: 'Name: C.CASTOMER | Number: 01', invoiceId: '160515', desc: '', amount: '1960.00', type: 'Invoice', category: 'CASH SELL' },
  ];

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px' }}>
      
      <div className="premium-card">
        {/* Banner */}
        <div style={{ padding: '0', background: 'white', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}>
          <img 
            src="https://via.placeholder.com/1200x150?text=Rajdhani+Garments+Banner" 
            alt="Rajdhani Garments" 
            style={{ width: '100%', height: 'auto', maxHeight: '150px', objectFit: 'cover' }}
          />
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', padding: '16px 0', margin: '0' }}>Category Wise Deposit Report</h2>
        </div>

        <div className="premium-body" style={{ background: 'white', padding: '24px' }}>
        <PrintHeader />
          
          {/* Filters Area */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: 'var(--label-color)', marginBottom: '8px' }}>Search By Category</label>
              <select style={{ width: '100%', padding: '10px', border: '1px solid #38bdf8', borderRadius: '8px', outline: 'none' }}>
                <option value="">Choose one</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: 'var(--label-color)', marginBottom: '8px' }}>{t('common.search_by_date')}</label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input type="date" style={{ width: '50%', padding: '10px', border: '1px solid #38bdf8', borderRadius: '8px', outline: 'none' }} />
                <input type="date" style={{ width: '50%', padding: '10px', border: '1px solid #38bdf8', borderRadius: '8px', outline: 'none' }} />
              </div>
            </div>
          </div>

          {/* Clear Filter Button */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
            <button style={{ width: '100%', maxWidth: '800px', background: '#7e8a9f', color: 'white', padding: '12px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}>
              Clear Filter
            </button>
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              Show 
              <select style={{ margin: '0 8px', padding: '4px', border: '1px solid #e2e8f0', borderRadius: '4px', outline: 'none' }}>
                <option>100</option>
              </select> 
              entries
            </div>
            
            <div style={{ display: 'flex', gap: '4px' }}>
              <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', border: 'none', borderRadius: '4px 0 0 4px', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', fontSize: '12px' }}>
                <Printer size={14} /> Print
              </button>
              <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', border: 'none', borderRadius: '0 4px 4px 0', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', fontSize: '12px' }}>
                <RefreshCcw size={14} /> Reset
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <table className="custom-table" style={{ width: '100%', fontSize: '11px', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#94a3b8', color: 'white', textTransform: 'uppercase' }}>
                  <th style={{ width: '40px', padding: '12px' }}>SL ⇅</th>
                  <th style={{ padding: '12px' }}>DATE ⇅</th>
                  <th style={{ padding: '12px' }}>ID NO ⇅</th>
                  <th style={{ padding: '12px' }}>CLIENT ⇅</th>
                  <th style={{ padding: '12px' }}>INVOICE ID NO ⇅</th>
                  <th style={{ padding: '12px' }}>DESCRIPTION ⇅</th>
                  <th style={{ padding: '12px' }}>AMOUNT ⇅</th>
                  <th style={{ padding: '12px' }}>TYPE ⇅</th>
                  <th style={{ padding: '12px' }}>CATEGORY ⇅</th>
                </tr>
              </thead>
              <tbody>
                {dummyData.map((row) => (
                  <tr key={row.sl}>
                    <td style={{ padding: '12px' }}>{row.sl}</td>
                    <td style={{ padding: '12px' }}>{row.date}</td>
                    <td style={{ padding: '12px' }}>{row.idNo}</td>
                    <td style={{ padding: '12px' }}>{row.client}</td>
                    <td style={{ padding: '12px' }}>{row.invoiceId}</td>
                    <td style={{ padding: '12px' }}>{row.desc}</td>
                    <td style={{ padding: '12px' }}>{row.amount}</td>
                    <td style={{ padding: '12px' }}>{row.type}</td>
                    <td style={{ padding: '12px' }}>{row.category}</td>
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

export default DepositCategoryWise;
