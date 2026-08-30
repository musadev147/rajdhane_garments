import React from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { RefreshCcw, Printer } from 'lucide-react';

const ExpenseSupplierPurchase = () => {
  const { t } = useTranslation();

  const dummyData = [
    { id: 1, idNo: '1', date: '01 Sep 2026', voucherNo: '182396', category: 'DOKAN KOROJ', account: 'TOTAL BALANCE', chequeNo: '', desc: 'JOLIL SALARE AD', type: 'Staff Payment', amount: '4000.00' },
    { id: 2, idNo: '2', date: '25 Aug 2026', voucherNo: '182618', category: '--', account: 'TOTAL BALANCE', chequeNo: '', desc: '', type: '', amount: '0.00' },
    { id: 3, idNo: '3', date: '25 Aug 2026', voucherNo: '182577', category: '--', account: 'TOTAL BALANCE', chequeNo: '', desc: '', type: '', amount: '0.00' },
    { id: 4, idNo: '4', date: '24 Aug 2026', voucherNo: '182571', category: 'FOYLA MARET', account: 'TOTAL BALANCE', chequeNo: '', desc: 'JAKIR MAMA 2 SHUTTER BABOD', type: '', amount: '30000.00' },
    { id: 5, idNo: '5', date: '24 Aug 2026', voucherNo: '182572', category: 'JAKAT FAND', account: 'TOTAL BALANCE', chequeNo: '', desc: 'DAN', type: '', amount: '600.00' },
    { id: 6, idNo: '6', date: '24 Aug 2026', voucherNo: '182570', category: 'FOYLA MARET', account: 'TOTAL BALANCE', chequeNo: '', desc: 'BASH MISTIRE NIGITGARD', type: '', amount: '12800.00' },
    { id: 7, idNo: '7', date: '24 Aug 2026', voucherNo: '182567', category: 'MALL FEROT', account: 'TOTAL BALANCE', chequeNo: '', desc: '', type: '', amount: '5090.00' },
    { id: 8, idNo: '8', date: '24 Aug 2026', voucherNo: '182543', category: 'MALL FEROT', account: 'TOTAL BALANCE', chequeNo: '', desc: '', type: '', amount: '0.00' },
    { id: 9, idNo: '9', date: '24 Aug 2026', voucherNo: '182490', category: 'MALL FEROT', account: 'TOTAL BALANCE', chequeNo: '', desc: '', type: '', amount: '0.00' },
    { id: 10, idNo: '10', date: '24 Aug 2026', voucherNo: '182462', category: 'MALL FEROT', account: 'TOTAL BALANCE', chequeNo: '', desc: '', type: '', amount: '0.00' },
    { id: 11, idNo: '11', date: '24 Aug 2026', voucherNo: '182448', category: 'MALL FEROT', account: 'TOTAL BALANCE', chequeNo: '', desc: '', type: '', amount: '0.00' },
    { id: 12, idNo: '12', date: '24 Aug 2026', voucherNo: '182408', category: 'MALL FEROT', account: 'TOTAL BALANCE', chequeNo: '', desc: '', type: '', amount: '0.00' },
    { id: 13, idNo: '13', date: '24 Aug 2026', voucherNo: '182576', category: '--', account: 'TOTAL BALANCE', chequeNo: '', desc: '', type: 'Purchase', amount: '0.00' },
    { id: 14, idNo: '14', date: '24 Aug 2026', voucherNo: '182573', category: 'DOKAN KOROJ', account: 'TOTAL BALANCE', chequeNo: '', desc: 'BIVINNO', type: '', amount: '4700.00' },
    { id: 15, idNo: '15', date: '23 Aug 2026', voucherNo: '182395', category: 'FOYLA MARET', account: 'TOTAL BALANCE', chequeNo: '', desc: 'RAJ MISTIRE EIT SAF KORA + CMINT', type: '', amount: '5700.00' },
    { id: 31, idNo: '31', date: '21 Aug 2026', voucherNo: '182084', category: 'KURAY PEMANT', account: 'TOTAL BALANCE', chequeNo: '', desc: 'NASIMA TAGADA', type: 'Supplier Payment', amount: '10500.00' },
    { id: 32, idNo: '32', date: '21 Aug 2026', voucherNo: '182083', category: 'KURAY PEMANT', account: 'TOTAL BALANCE', chequeNo: '', desc: 'SABBIR VI TAGADA', type: 'Supplier Payment', amount: '20000.00' },
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
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', padding: '16px 0', margin: '0' }}>Supplier Payment Report</h2>
        </div>

        <div className="premium-body" style={{ background: 'white', padding: '24px' }}>
        <PrintHeader />
          
          {/* Filters Area */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: 'var(--label-color)', marginBottom: '8px' }}>Search</label>
              <input type="text" placeholder=" " style={{ width: '100%', padding: '10px', border: '1px solid #38bdf8', borderRadius: '8px', outline: 'none' }} />
                <label>Search</label>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: 'var(--label-color)', marginBottom: '8px' }}>Search By Supplier</label>
              <select style={{ width: '100%', padding: '10px', border: '1px solid #38bdf8', borderRadius: '8px', outline: 'none' }}>
                <option value="">Select Suppliers</option>
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
                  <th style={{ width: '40px', padding: '12px' }}>ID NO ⇅</th>
                  <th style={{ padding: '12px' }}>DATE ⇅</th>
                  <th style={{ padding: '12px' }}>VOUCHER NO ⇅</th>
                  <th style={{ padding: '12px' }}>CATEGORY ⇅</th>
                  <th style={{ padding: '12px' }}>ACCOUNT ⇅</th>
                  <th style={{ padding: '12px' }}>CHEQUE NO ⇅</th>
                  <th style={{ padding: '12px' }}>DESCRIPTION ⇅</th>
                  <th style={{ padding: '12px' }}>TYPE ⇅</th>
                  <th style={{ padding: '12px' }}>AMOUNT ⇅</th>
                </tr>
              </thead>
              <tbody>
                {dummyData.map((row) => (
                  <tr key={row.id}>
                    <td style={{ padding: '12px' }}>{row.idNo}</td>
                    <td style={{ padding: '12px' }}>{row.date}</td>
                    <td style={{ padding: '12px' }}>{row.voucherNo}</td>
                    <td style={{ padding: '12px' }}>{row.category}</td>
                    <td style={{ padding: '12px' }}>{row.account}</td>
                    <td style={{ padding: '12px' }}>{row.chequeNo}</td>
                    <td style={{ padding: '12px' }}>{row.desc}</td>
                    <td style={{ padding: '12px' }}>
                      {row.type === 'Staff Payment' && <span style={{ background: 'var(--success)', color: 'white', padding: '2px 8px', borderRadius: '12px', fontSize: '10px' }}>Staff Payment</span>}
                      {row.type === 'Purchase' && <span style={{ background: 'var(--primary)', color: 'white', padding: '2px 8px', borderRadius: '12px', fontSize: '10px' }}>Purchase</span>}
                      {row.type === 'Supplier Payment' && <span style={{ background: '#06b6d4', color: 'white', padding: '2px 8px', borderRadius: '12px', fontSize: '10px' }}>Supplier Payment</span>}
                      {row.type !== 'Staff Payment' && row.type !== 'Purchase' && row.type !== 'Supplier Payment' && row.type}
                    </td>
                    <td style={{ padding: '12px' }}>{row.amount}</td>
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

export default ExpenseSupplierPurchase;
