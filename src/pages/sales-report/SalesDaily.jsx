import React from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { RefreshCcw, Printer, ArrowLeft } from 'lucide-react';

const SalesDaily = () => {
  const { t } = useTranslation();

  const dummyData = [
    { sl: 1, date: '25 Aug 2026', voucher: '160472', client: 'C.CASTOMER | 01 | all', product: 'REY GAR', barcode: '17916', unit: 'PEACE', qty: 1, price: '1350.00', total: '1350', receive: '1350.00', due: '0', profit: '350.00' },
    { sl: 2, date: '25 Aug 2026', voucher: '160473', client: 'C.CASTOMER | 01 | all', product: 'CHARI JORJET 180', barcode: '33', unit: 'GOZ', qty: 1.5, price: '180.00', total: '270', receive: '270.00', due: '0', profit: '67.50' },
    { sl: 3, date: '25 Aug 2026', voucher: '160474', client: 'C.CASTOMER | 01 | all', product: 'FOC T- SHIRT 2/6', barcode: '18368', unit: 'PEACE', qty: 1, price: '430.00', total: '800', receive: '800.00', due: '0', profit: '220.00' },
    { sl: 4, date: '25 Aug 2026', voucher: '160475', client: 'C.CASTOMER | 01 | all', product: 'DP TUPI 30', barcode: '16829', unit: 'PEACE', qty: 1, price: '30.00', total: '130', receive: '130.00', due: '0', profit: '48.00' },
    { sl: 5, date: '25 Aug 2026', voucher: '160476', client: 'C.CASTOMER | 01 | all', product: 'POD SLEEPER DGN -', barcode: '18302', unit: 'PEACE', qty: 1, price: '930.00', total: '930', receive: '930.00', due: '0', profit: '280.00' },
    { sl: 6, date: '25 Aug 2026', voucher: '160477', client: 'C.CASTOMER | 01 | all', product: 'V 3 T SHIRT', barcode: '8676', unit: 'PEACE', qty: 1, price: '1750.00', total: '3420', receive: '3420.00', due: '0', profit: '713.00' },
    { sl: 7, date: '25 Aug 2026', voucher: '160478', client: 'C.CASTOMER | 01 | all', product: 'M SANDO', barcode: '17057', unit: 'PEACE', qty: 1, price: '120.00', total: '120', receive: '120.00', due: '0', profit: '18.00' },
    { sl: 8, date: '25 Aug 2026', voucher: '160479', client: 'C.CASTOMER | 01 | all', product: 'BABY FURAK', barcode: '18505', unit: 'PEACE', qty: 1, price: '170.00', total: '340', receive: '340.00', due: '0', profit: '80.00' },
    { sl: 9, date: '25 Aug 2026', voucher: '160480', client: 'C.CASTOMER | 01 | all', product: 'FOC T- SHIRT', barcode: '18377', unit: 'PEACE', qty: 1, price: '600.00', total: '600', receive: '600.00', due: '0', profit: '150.00' },
    { sl: 10, date: '25 Aug 2026', voucher: '160481', client: 'C.CASTOMER | 01 | all', product: 'BR ORNA 450', barcode: '18240', unit: 'PEACE', qty: 1, price: '450.00', total: '450', receive: '450.00', due: '0', profit: '162.00' },
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
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', padding: '16px 0', margin: '0' }}>Daily Sales Report</h2>
        </div>

        <div className="premium-body" style={{ background: 'white', padding: '24px' }}>
        <PrintHeader />
          
          {/* Header row with Title and Go Back */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 'bold', margin: '0' }}>DAILY SALES REPORT</h3>
            <button style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'var(--text-muted)', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontSize: '13px' }}>
              <ArrowLeft size={14} /> Go Back
            </button>
          </div>

          {/* Filters Area */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '16px' }}>
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
          </div>

          {/* Clear Filter Button */}
          <button style={{ width: '100%', background: '#7e8a9f', color: 'white', padding: '12px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px', marginBottom: '24px' }}>
            Clear Filter
          </button>

          {/* Total Sales Bar */}
          <div style={{ background: '#94a3b8', color: 'white', padding: '12px', display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', marginBottom: '24px' }}>
            <span>TOTAL SALES</span>
            <span>258640630.38</span>
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
                {/* Total Row */}
                <tr style={{ fontWeight: 'bold' }}>
                  <td colSpan="7" style={{ padding: '12px', textAlign: 'center' }}>{t('common.total')}</td>
                  <td style={{ padding: '12px' }}>10.50</td>
                  <td style={{ padding: '12px' }}>6010.00</td>
                  <td style={{ padding: '12px' }}>8410.00</td>
                  <td style={{ padding: '12px' }}>8410.00</td>
                  <td style={{ padding: '12px' }}>0.00</td>
                  <td style={{ padding: '12px' }}>2088.50</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              Showing 1 to 10 of 50 entries
            </div>
            <div style={{ display: 'flex' }}>
              <button style={{ padding: '6px 12px', border: '1px solid #e2e8f0', background: 'var(--card-header-bg)', color: 'var(--text-muted)', borderRadius: '4px 0 0 4px', cursor: 'pointer' }}>Previous</button>
              <button style={{ padding: '6px 12px', border: '1px solid #e2e8f0', borderLeft: 'none', background: 'var(--primary)', color: 'white', cursor: 'pointer' }}>1</button>
              <button style={{ padding: '6px 12px', border: '1px solid #e2e8f0', borderLeft: 'none', background: 'var(--card-header-bg)', color: 'var(--label-color)', cursor: 'pointer' }}>2</button>
              <button style={{ padding: '6px 12px', border: '1px solid #e2e8f0', borderLeft: 'none', background: 'var(--card-header-bg)', color: 'var(--label-color)', cursor: 'pointer' }}>3</button>
              <button style={{ padding: '6px 12px', border: '1px solid #e2e8f0', borderLeft: 'none', background: 'var(--card-header-bg)', color: 'var(--label-color)', cursor: 'pointer' }}>4</button>
              <button style={{ padding: '6px 12px', border: '1px solid #e2e8f0', borderLeft: 'none', background: 'var(--card-header-bg)', color: 'var(--label-color)', cursor: 'pointer' }}>5</button>
              <button style={{ padding: '6px 12px', border: '1px solid #e2e8f0', borderLeft: 'none', background: 'var(--card-header-bg)', color: 'var(--label-color)', borderRadius: '0 4px 4px 0', cursor: 'pointer' }}>Next</button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default SalesDaily;
