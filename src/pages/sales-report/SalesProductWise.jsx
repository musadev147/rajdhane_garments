import React from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { RefreshCcw, Printer, ArrowLeft } from 'lucide-react';

const SalesProductWise = () => {
  const { t } = useTranslation();

  const dummyData = [
    { sl: 1, date: '25 Apr 2024', voucher: '25', client: 'RANIG CUSTOMER 2024 | 01 | ALL', product: 'S VOIL 70', unit: 'GOZ', qty: 5, price: '68.00', total: '340', dis: '0', transport: '0', returnQty: '', grandTotal: '', receive: '', due: '' },
    { sl: 2, date: '25 Apr 2024', voucher: '26', client: 'RANIG CUSTOMER 2024 | 01 | ALL', product: 'THREE PIECE', unit: 'PEACE', qty: 1, price: '1590.00', total: '1590', dis: '0', transport: '0', returnQty: '', grandTotal: '', receive: '', due: '' },
    { sl: 3, date: '25 Apr 2024', voucher: '27', client: 'RANIG CUSTOMER 2024 | 01 | ALL', product: 'BORKA', unit: 'PEACE', qty: 1, price: '1250.00', total: '1250', dis: '0', transport: '0', returnQty: '', grandTotal: '', receive: '', due: '' },
    { sl: 4, date: '25 Apr 2024', voucher: '28', client: 'RANIG CUSTOMER 2024 | 01 | ALL', product: 'DIGITAL CHUMKI 250', unit: 'GOZ', qty: 2, price: '250.00', total: '500', dis: '0', transport: '0', returnQty: '', grandTotal: '', receive: '', due: '' },
    { sl: 5, date: '25 Apr 2024', voucher: '29', client: 'RANIG CUSTOMER 2024 | 01 | ALL', product: 'JTLC N S R BORKHA', unit: 'PEACE', qty: 1, price: '1300.00', total: '1300', dis: '0', transport: '0', returnQty: '', grandTotal: '', receive: '', due: '' },
    { sl: 6, date: '25 Apr 2024', voucher: '30', client: 'RANIG CUSTOMER 2024 | 01 | ALL', product: 'ORBIT PRINT 90', unit: 'GOZ', qty: 2, price: '90.00', total: '180', dis: '0', transport: '0', returnQty: '', grandTotal: '', receive: '', due: '' },
    { sl: 7, date: '25 Apr 2024', voucher: '31', client: 'RANIG CUSTOMER 2024 | 01 | ALL', product: 'CHARI JORJET 180', unit: 'GOZ', qty: 6, price: '200.00', total: '1200', dis: '0', transport: '0', returnQty: '', grandTotal: '', receive: '', due: '' },
    { sl: 8, date: '25 Apr 2024', voucher: '32', client: 'RANIG CUSTOMER 2024 | 01 | ALL', product: 'DP INDIA SHIRT', unit: 'PEACE', qty: 1, price: '1700.00', total: '1700', dis: '0', transport: '0', returnQty: '', grandTotal: '', receive: '', due: '' },
    { sl: 9, date: '25 Apr 2024', voucher: '32', client: 'RANIG CUSTOMER 2024 | 01 | ALL', product: 'PANJABI', unit: 'PEACE', qty: 1, price: '2000.00', total: '2000', dis: '0', transport: '0', returnQty: '', grandTotal: '', receive: '', due: '' },
    { sl: 10, date: '25 Apr 2024', voucher: '33', client: 'RANIG CUSTOMER 2024 | 01 | ALL', product: 'DP INDIA SHIRT', unit: 'PEACE', qty: 1, price: '1700.00', total: '1700', dis: '0', transport: '0', returnQty: '', grandTotal: '', receive: '', due: '' },
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
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', padding: '16px 0', margin: '0' }}>Product Wise Sales Reports</h2>
        </div>

        <div className="premium-body" style={{ background: 'white', padding: '24px' }}>
        <PrintHeader />
          
          {/* Header row with Title and Go Back */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 'bold', margin: '0', textTransform: 'uppercase' }}>PRODUCT WISE SALES REPORTS</h3>
            <button style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'var(--text-muted)', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontSize: '13px' }}>
              <ArrowLeft size={14} /> Go Back
            </button>
          </div>

          {/* Filters Area */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: 'var(--label-color)', marginBottom: '8px', textAlign: 'center' }}>Group</label>
              <select style={{ width: '100%', padding: '10px', border: '1px solid #38bdf8', borderRadius: '8px', outline: 'none' }}>
                <option value="">Select Product Group</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: 'var(--label-color)', marginBottom: '8px', textAlign: 'center' }}>Search By Product</label>
              <select style={{ width: '100%', padding: '10px', border: '1px solid #38bdf8', borderRadius: '8px', outline: 'none' }}>
                <option value="">Select Product</option>
              </select>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
                <span style={{ background: '#38bdf8', color: 'white', fontSize: '11px', padding: '2px 8px', borderRadius: '12px' }}>Barcode</span>
              </div>
              <input type="text" placeholder=" " style={{ width: '100%', padding: '10px', border: '1px solid #38bdf8', borderRadius: '8px', outline: 'none' }} />
                <label>Barcode</label>
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
                  <th style={{ padding: '12px' }}>UNIT ⇅</th>
                  <th style={{ padding: '12px' }}>QTY ⇅</th>
                  <th style={{ padding: '12px' }}>PRICE ⇅</th>
                  <th style={{ padding: '12px' }}>TOTAL ⇅</th>
                  <th style={{ padding: '12px' }}>DIS ⇅</th>
                  <th style={{ padding: '12px' }}>TRANSPORT FARE ⇅</th>
                  <th style={{ padding: '12px' }}>RETURN QTY ⇅</th>
                  <th style={{ padding: '12px' }}>GRAND TOTAL ⇅</th>
                  <th style={{ padding: '12px' }}>RECEIVE ⇅</th>
                  <th style={{ padding: '12px' }}>DUE ⇅</th>
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
                    <td style={{ padding: '12px' }}>{row.unit}</td>
                    <td style={{ padding: '12px' }}>{row.qty}</td>
                    <td style={{ padding: '12px' }}>{row.price}</td>
                    <td style={{ padding: '12px' }}>{row.total}</td>
                    <td style={{ padding: '12px' }}>{row.dis}</td>
                    <td style={{ padding: '12px' }}>{row.transport}</td>
                    <td style={{ padding: '12px' }}>{row.returnQty}</td>
                    <td style={{ padding: '12px' }}>{row.grandTotal}</td>
                    <td style={{ padding: '12px' }}>{row.receive}</td>
                    <td style={{ padding: '12px' }}>{row.due}</td>
                  </tr>
                ))}
                {/* Total Row */}
                <tr style={{ fontWeight: 'bold' }}>
                  <td colSpan="6" style={{ padding: '12px', textAlign: 'center' }}>{t('common.total')}</td>
                  <td style={{ padding: '12px' }}>21</td>
                  <td style={{ padding: '12px' }}></td>
                  <td style={{ padding: '12px' }}>11650</td>
                  <td style={{ padding: '12px' }}>0</td>
                  <td style={{ padding: '12px' }}>0</td>
                  <td style={{ padding: '12px' }}>0</td>
                  <td style={{ padding: '12px' }}>0</td>
                  <td style={{ padding: '12px' }}>0</td>
                  <td style={{ padding: '12px' }}>0</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              Showing 1 to 10 of 323,992 entries
            </div>
            <div style={{ display: 'flex' }}>
              <button style={{ padding: '6px 12px', border: '1px solid #e2e8f0', background: 'var(--card-header-bg)', color: 'var(--text-muted)', borderRadius: '4px 0 0 4px', cursor: 'pointer' }}>Previous</button>
              <button style={{ padding: '6px 12px', border: '1px solid #e2e8f0', borderLeft: 'none', background: 'var(--primary)', color: 'white', cursor: 'pointer' }}>1</button>
              <button style={{ padding: '6px 12px', border: '1px solid #e2e8f0', borderLeft: 'none', background: 'var(--card-header-bg)', color: 'var(--label-color)', cursor: 'pointer' }}>2</button>
              <button style={{ padding: '6px 12px', border: '1px solid #e2e8f0', borderLeft: 'none', background: 'var(--card-header-bg)', color: 'var(--label-color)', cursor: 'pointer' }}>3</button>
              <button style={{ padding: '6px 12px', border: '1px solid #e2e8f0', borderLeft: 'none', background: 'var(--card-header-bg)', color: 'var(--label-color)', cursor: 'pointer' }}>4</button>
              <button style={{ padding: '6px 12px', border: '1px solid #e2e8f0', borderLeft: 'none', background: 'var(--card-header-bg)', color: 'var(--label-color)', cursor: 'pointer' }}>5</button>
              <button style={{ padding: '6px 12px', border: '1px solid #e2e8f0', borderLeft: 'none', background: 'var(--card-header-bg)', color: 'var(--text-muted)', cursor: 'pointer' }}>...</button>
              <button style={{ padding: '6px 12px', border: '1px solid #e2e8f0', borderLeft: 'none', background: 'var(--card-header-bg)', color: 'var(--label-color)', cursor: 'pointer' }}>32400</button>
              <button style={{ padding: '6px 12px', border: '1px solid #e2e8f0', borderLeft: 'none', background: 'var(--card-header-bg)', color: 'var(--label-color)', borderRadius: '0 4px 4px 0', cursor: 'pointer' }}>Next</button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default SalesProductWise;
