import React from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { RefreshCcw, Printer, FileDown, ArrowLeft } from 'lucide-react';

const SalesAll = () => {
  const { t } = useTranslation();

  const dummyData = [
    { sl: 1, date: '25 Apr 2024', voucher: '25', client: 'RANIG CUSTOMER 2024 | 01 | ALL', product: 'S VOIL 70', barcode: '12', unit: 'GOZ', qty: 5, price: '68.00', total: '340', receive: '314.50', due: '0', profit: '60.00' },
    { sl: 2, date: '25 Apr 2024', voucher: '26', client: 'RANIG CUSTOMER 2024 | 01 | ALL', product: 'THREE PIECE', barcode: '355', unit: 'PEACE', qty: 1, price: '1590.00', total: '1590', receive: '1590.00', due: '0', profit: '340.00' },
    { sl: 3, date: '25 Apr 2024', voucher: '27', client: 'RANIG CUSTOMER 2024 | 01 | ALL', product: 'BORKA', barcode: '254', unit: 'PEACE', qty: 1, price: '1250.00', total: '1250', receive: '1250.00', due: '0', profit: '250.00' },
    { sl: 4, date: '25 Apr 2024', voucher: '28', client: 'RANIG CUSTOMER 2024 | 01 | ALL', product: 'DIGITAL CHUMKI 250', barcode: '104', unit: 'GOZ', qty: 2, price: '250.00', total: '500', receive: '500.00', due: '0', profit: '180.00' },
    { sl: 5, date: '25 Apr 2024', voucher: '29', client: 'RANIG CUSTOMER 2024 | 01 | ALL', product: 'JTLC N S R BORKHA', barcode: '249', unit: 'PEACE', qty: 1, price: '1300.00', total: '1300', receive: '1300.00', due: '0', profit: '300.00' },
    { sl: 6, date: '25 Apr 2024', voucher: '30', client: 'RANIG CUSTOMER 2024 | 01 | ALL', product: 'ORBIT PRINT 90', barcode: '17', unit: 'GOZ', qty: 2, price: '90.00', total: '180', receive: '180.00', due: '0', profit: '30.00' },
    { sl: 7, date: '25 Apr 2024', voucher: '31', client: 'RANIG CUSTOMER 2024 | 01 | ALL', product: 'CHARI JORJET 180', barcode: '33', unit: 'GOZ', qty: 6, price: '200.00', total: '1200', receive: '1100.00', due: '0', profit: '390.00' },
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
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', padding: '16px 0', margin: '0' }}>Sales Report</h2>
        </div>

        <div className="premium-body" style={{ background: 'white', padding: '24px' }}>
        <PrintHeader />
          
          {/* Header row with Title and Go Back */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 'bold', margin: '0' }}>SALES REPORT</h3>
            <button style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'var(--text-muted)', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontSize: '13px' }}>
              <ArrowLeft size={14} /> Go Back
            </button>
          </div>

          {/* Filters Area */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: 'var(--label-color)', marginBottom: '8px', textAlign: 'center' }}>{t('common.search_by_client')}</label>
              <select style={{ width: '100%', padding: '10px', border: '1px solid #38bdf8', borderRadius: '8px', outline: 'none' }}>
                <option value="">{t('common.select_client')}</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: 'var(--label-color)', marginBottom: '8px', textAlign: 'center' }}>Search By Invoice</label>
              <select style={{ width: '100%', padding: '10px', border: '1px solid #38bdf8', borderRadius: '8px', outline: 'none' }}>
                <option value="">Select Invoice</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: 'var(--label-color)', marginBottom: '8px', textAlign: 'center' }}>Search By User</label>
              <select style={{ width: '100%', padding: '10px', border: '1px solid #38bdf8', borderRadius: '8px', outline: 'none' }}>
                <option value="">Select Staffs</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: 'var(--label-color)', marginBottom: '8px', textAlign: 'center' }}>{t('common.search_by_date')}</label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input type="date" style={{ width: '50%', padding: '10px', border: '1px solid #38bdf8', borderRadius: '8px', outline: 'none' }} />
                <input type="date" style={{ width: '50%', padding: '10px', border: '1px solid #38bdf8', borderRadius: '8px', outline: 'none' }} />
              </div>
            </div>
          </div>

          {/* Clear Filter Button */}
          <button style={{ width: '100%', background: '#7e8a9f', color: 'white', padding: '12px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px', marginBottom: '24px' }}>
            Clear Filter
          </button>

          {/* Total Sales Bar */}
          <div style={{ background: '#94a3b8', color: 'white', padding: '12px', display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', marginBottom: '24px' }}>
            <span>TOTAL SALES</span>
            <span>258624270.38</span>
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              Show 
              <select style={{ margin: '0 8px', padding: '4px', border: '1px solid #e2e8f0', borderRadius: '4px', outline: 'none' }}>
                <option>10</option>
              </select> 
              entries
            </div>
            
            <div style={{ display: 'flex', gap: '4px' }}>
              <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', border: 'none', borderRadius: '4px 0 0 4px', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', fontSize: '12px' }}>
                <Printer size={14} /> Print
              </button>
              <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', border: 'none', cursor: 'pointer', fontSize: '12px' }}>Excel</button>
              <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', border: 'none', cursor: 'pointer', fontSize: '12px' }}>CSV</button>
              <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', border: 'none', cursor: 'pointer', fontSize: '12px' }}>PDF</button>
              <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', border: 'none', borderRadius: '0 4px 4px 0', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', fontSize: '12px' }}>
                <RefreshCcw size={14} /> Reset
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <table className="custom-table" style={{ width: '100%', fontSize: '11px', textAlign: 'center' }}>
              <thead>
                <tr style={{ background: '#94a3b8', color: 'white', textTransform: 'uppercase' }}>
                  <th style={{ width: '40px', padding: '12px' }}>SL ⇅</th>
                  <th style={{ padding: '12px' }}>ISSUED DATE ⇅</th>
                  <th style={{ padding: '12px' }}>VOUCHER NO ⇅</th>
                  <th style={{ padding: '12px' }}>CLIENT ⇅</th>
                  <th style={{ padding: '12px' }}>PRODUCT ⇅</th>
                  <th style={{ padding: '12px' }}>BARCODE ⇅</th>
                  <th style={{ padding: '12px' }}>UNIT ⇅</th>
                  <th style={{ padding: '12px' }}>QTY ⇅</th>
                  <th style={{ padding: '12px' }}>PRICE ⇅</th>
                  <th style={{ padding: '12px' }}>TOTAL ⇅</th>
                  <th style={{ padding: '12px' }}>RECEIVE ⇅</th>
                  <th style={{ padding: '12px' }}>DUE ⇅</th>
                  <th style={{ padding: '12px' }}>PROFIT ⇅</th>
                </tr>
              </thead>
              <tbody>
                {dummyData.map((row) => (
                  <tr key={row.sl}>
                    <td style={{ padding: '12px' }}>{row.sl}</td>
                    <td style={{ padding: '12px' }}>{row.date}</td>
                    <td style={{ padding: '12px' }}>{row.voucher}</td>
                    <td style={{ padding: '12px' }}>{row.client}</td>
                    <td style={{ padding: '12px' }}>{row.product}</td>
                    <td style={{ padding: '12px' }}>{row.barcode}</td>
                    <td style={{ padding: '12px' }}>{row.unit}</td>
                    <td style={{ padding: '12px' }}>{row.qty}</td>
                    <td style={{ padding: '12px' }}>{row.price}</td>
                    <td style={{ padding: '12px' }}>{row.total}</td>
                    <td style={{ padding: '12px' }}>{row.receive}</td>
                    <td style={{ padding: '12px' }}>{row.due}</td>
                    <td style={{ padding: '12px' }}>{row.profit}</td>
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

export default SalesAll;
