import React from 'react';
import { Printer, RotateCcw, Plus } from 'lucide-react';

const SupplierStatement = () => {
  const statementData = [
    { sl: 1, date: '22 Apr 2024', product: 'Previous Due', unit: '', qty: '', price: '', buyPrice: '', discount: '', grandTotal: '42300.00', return: '0', receive: '0', due: '42300.00' },
    { sl: 2, date: '22 Apr 2024', product: 'Previous Due', unit: '', qty: '', price: '', buyPrice: '', discount: '', grandTotal: '0.00', return: '0', receive: '0', due: '0.00' },
    { sl: 3, date: '22 Apr 2024', product: 'Previous Due', unit: '', qty: '', price: '', buyPrice: '', discount: '', grandTotal: '0.00', return: '0', receive: '0', due: '0.00' },
    { sl: 4, date: '22 Apr 2024', product: 'Previous Due', unit: '', qty: '', price: '', buyPrice: '', discount: '', grandTotal: '194410.00', return: '0', receive: '0', due: '194410.00' },
    { sl: 5, date: '22 Apr 2024', product: 'Previous Due', unit: '', qty: '', price: '', buyPrice: '', discount: '', grandTotal: '562325.00', return: '0', receive: '0', due: '562325.00' },
    { sl: 6, date: '22 Apr 2024', product: 'Previous Due', unit: '', qty: '', price: '', buyPrice: '', discount: '', grandTotal: '-56311.00', return: '0', receive: '0', due: '-56311.00' },
    { sl: 7, date: '22 Apr 2024', product: 'Previous Due', unit: '', qty: '', price: '', buyPrice: '', discount: '', grandTotal: '0.00', return: '0', receive: '0', due: '0.00' },
    { sl: 8, date: '22 Apr 2024', product: 'Previous Due', unit: '', qty: '', price: '', buyPrice: '', discount: '', grandTotal: '84820.00', return: '0', receive: '0', due: '84820.00' },
    { sl: 9, date: '22 Apr 2024', product: 'Previous Due', unit: '', qty: '', price: '', buyPrice: '', discount: '', grandTotal: '2800.00', return: '0', receive: '0', due: '2800.00' },
    { sl: 10, date: '22 Apr 2024', product: 'Previous Due', unit: '', qty: '', price: '', buyPrice: '', discount: '', grandTotal: '14034.00', return: '0', receive: '0', due: '14034.00' },
    { sl: 11, date: '22 Apr 2024', product: 'Previous Due', unit: '', qty: '', price: '', buyPrice: '', discount: '', grandTotal: '254960.00', return: '0', receive: '0', due: '254960.00' },
    { sl: 12, date: '22 Apr 2024', product: 'Previous Due', unit: '', qty: '', price: '', buyPrice: '', discount: '', grandTotal: '139490.00', return: '0', receive: '0', due: '139490.00' },
    { sl: 13, date: '22 Apr 2024', product: 'Previous Due', unit: '', qty: '', price: '', buyPrice: '', discount: '', grandTotal: '0.00', return: '0', receive: '0', due: '0.00' },
  ];

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px' }}>
      <div className="chart-card">
        {/* Company Header Info */}
        <div style={{ textAlign: 'center', marginBottom: '32px', color: 'var(--text-main)' }}>
          <h4 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '8px' }}>বিসমিল্লাহির রাহমানির রাহিম</h4>
          <h1 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '8px', color: '#000' }}>রাজধানী গার্মেন্টস</h1>
          <p style={{ fontSize: '15px', marginBottom: '4px' }}>নেহা শপিংমল এর দ্বিতীয় তলা, কালিগঞ্জ, ঝিনাইদহ</p>
          <p style={{ fontSize: '15px', marginBottom: '4px' }}>Contact No - 01716912350, 01727902498</p>
          <p style={{ fontSize: '15px', marginBottom: '4px' }}>E-mail - demo@gmail.com</p>
          <p style={{ fontSize: '15px' }}>Website - https://rajdhanigarmentsbd.com/</p>
        </div>

        {/* Title and Action */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '500', color: 'var(--text-main)' }}>Supplier Statement</h2>
          <button className="btn btn-primary" style={{ background: 'var(--success)', padding: '8px 16px', borderRadius: '4px' }}>
            <Plus size={16} /> Purchase
          </button>
        </div>

        {/* Filters */}
        <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr auto', marginBottom: '24px', alignItems: 'flex-end', gap: '16px' }}>
          <div className="form-group">
            <label style={{ fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>Search By Supplier</label>
            <div className="form-input">
              <select>
                <option>Select Suppliers</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label style={{ fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>Search By Date</label>
            <div style={{ display: 'flex', gap: '12px' }}>
              <div className="form-input" style={{ flex: 1 }}>
                <input type="text" placeholder="DD/MM/YYYY" style={{ color: 'var(--primary)' }} />
              </div>
              <div className="form-input" style={{ flex: 1 }}>
                <input type="text" placeholder="DD/MM/YYYY" style={{ color: 'var(--primary)' }} />
              </div>
            </div>
          </div>

          <div className="form-group">
            <button className="btn btn-outline" style={{ height: '48px', padding: '0 32px', background: '#718096', color: 'white', border: 'none' }}>
              Clear Filter
            </button>
          </div>
        </div>

        {/* Table Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ fontSize: '14px', color: 'var(--text-main)' }}>
            Show 
            <select style={{ margin: '0 8px', padding: '4px', border: '1px solid var(--secondary)', borderRadius: '4px' }}>
              <option>100</option>
            </select>
            entries
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn" onClick={() => window.print()} style={{ background: '#3b82f6', color: 'white', padding: '8px 16px', fontSize: '13px', borderRadius: '4px' }}><Printer size={16} style={{ marginRight: '6px' }}/> Print</button>
            <button className="btn" style={{ background: '#3b82f6', color: 'white', padding: '8px 16px', fontSize: '13px', borderRadius: '4px' }}><RotateCcw size={16} style={{ marginRight: '6px' }}/> Reset</button>
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto', border: '1px solid var(--secondary)', borderRadius: '4px', marginBottom: '16px' }}>
          <table className="custom-table" style={{ borderCollapse: 'collapse', width: '100%', minWidth: '1200px' }}>
            <thead>
              <tr style={{ background: '#718096', color: 'white' }}>
                <th style={{ padding: '12px 8px', fontSize: '11px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.2)' }}>SL ↕</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.2)' }}>DATE ↕</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.2)' }}>PRODUCT ↕</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.2)' }}>UNIT ↕</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.2)' }}>QUANTITY ↕</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.2)' }}>PRICE ↕</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.2)' }}>BUY PRICE ↕</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.2)' }}>DISCOUNT ↕</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.2)' }}>GRAND TOTAL ↕</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.2)' }}>PURCHASE RETURN ↕</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.2)' }}>RECEIVE ↕</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', textAlign: 'center' }}>DUE ↕</th>
              </tr>
            </thead>
            <tbody>
              {statementData.map((row) => (
                <tr key={row.sl} style={{ background: 'white' }}>
                  <td style={{ textAlign: 'center', borderRight: '1px solid #e2e8f0', padding: '8px' }}>{row.sl}</td>
                  <td style={{ textAlign: 'center', borderRight: '1px solid #e2e8f0', padding: '8px' }}>{row.date}</td>
                  <td style={{ borderRight: '1px solid #e2e8f0', padding: '8px' }}>{row.product}</td>
                  <td style={{ borderRight: '1px solid #e2e8f0', padding: '8px' }}>{row.unit}</td>
                  <td style={{ borderRight: '1px solid #e2e8f0', padding: '8px' }}>{row.qty}</td>
                  <td style={{ borderRight: '1px solid #e2e8f0', padding: '8px' }}>{row.price}</td>
                  <td style={{ borderRight: '1px solid #e2e8f0', padding: '8px' }}>{row.buyPrice}</td>
                  <td style={{ borderRight: '1px solid #e2e8f0', padding: '8px' }}>{row.discount}</td>
                  <td style={{ textAlign: 'center', borderRight: '1px solid #e2e8f0', padding: '8px', fontWeight: '500' }}>{row.grandTotal}</td>
                  <td style={{ textAlign: 'center', borderRight: '1px solid #e2e8f0', padding: '8px' }}>{row.return}</td>
                  <td style={{ textAlign: 'center', borderRight: '1px solid #e2e8f0', padding: '8px' }}>{row.receive}</td>
                  <td style={{ textAlign: 'center', padding: '8px', fontWeight: '600' }}>{row.due}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SupplierStatement;
