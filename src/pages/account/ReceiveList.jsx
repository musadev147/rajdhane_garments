import React from 'react';
import { Plus, Play, Printer, RotateCcw, Edit, Trash2 } from 'lucide-react';

const ReceiveList = () => {
  const tableData = [
    { sl: 1, date: '23 Aug 2026', receiptNo: '82898', invoiceNo: '12138', client: 'Name: C.CASTOMER\nNumber: 01', type: 'Invoice', desc: '', amount: '500.00' },
    { sl: 2, date: '23 Aug 2026', receiptNo: '82897', invoiceNo: '12137', client: 'Name: C.CASTOMER\nNumber: 01', type: 'Invoice', desc: '', amount: '500.00' },
    { sl: 3, date: '23 Aug 2026', receiptNo: '82896', invoiceNo: '12136', client: 'Name: C.CASTOMER\nNumber: 01', type: 'Invoice', desc: '', amount: '300.00' },
    { sl: 4, date: '23 Aug 2026', receiptNo: '82895', invoiceNo: '12135', client: 'Name: C.CASTOMER\nNumber: 01', type: 'Invoice', desc: '', amount: '1300.00' },
    { sl: 5, date: '23 Aug 2026', receiptNo: '82894', invoiceNo: '12134', client: 'Name: C.CASTOMER\nNumber: 01', type: 'Invoice', desc: '', amount: '430.00' },
    { sl: 6, date: '23 Aug 2026', receiptNo: '82893', invoiceNo: '12133', client: 'Name: C.CASTOMER\nNumber: 01', type: 'Invoice', desc: '', amount: '170.00' },
  ];

  return (
    <div className="premium-card">
      <div className="premium-body" style={{ padding: '40px' }}>
        
        {/* Header Text Section */}
        <div className="receipt-header-text">
          <h3>বিসমিল্লাহির রাহমানির রাহিম</h3>
          <h1>রাজধানী গার্মেন্টস</h1>
          <p>নেছা শপিংমল এর দ্বিতীয় তলা, কালিগঞ্জ, ঝিনাইদহ</p>
          <p>Contact No - 01716912350, 01727902498</p>
          <p>E-mail - demo@gmail.com</p>
          <p>Website - https://rajdhanigarmentsbd.com/</p>
        </div>

        {/* Title and Top Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '400', color: '#4b5563', margin: 0 }}>Receive List</h2>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="btn-green">
              <Plus size={16} /> Add New Receive
            </button>
            <button className="btn-youtube">
              <div style={{ display: 'flex', alignItems: 'center', background: '#ff0000', color: 'white', padding: '6px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold' }}>
                <Play size={16} fill="white" style={{ marginRight: '6px' }} /> YouTube
              </div>
            </button>
          </div>
        </div>

        {/* Filter Section */}
        <div className="filter-grid">
          <div>
            <label className="filter-label">Search By Client</label>
            <select className="input-outline">
              <option value="">Select Client</option>
              <option value="1">Client 1</option>
            </select>
          </div>
          <div className="input-badge-top">
            <span className="badge-top-label">Invoice No</span>
            <input type="text" className="input-outline" placeholder="Invoice No" />
          </div>
          <div className="input-badge-top">
            <span className="badge-top-label">Receipt No</span>
            <input type="text" className="input-outline" placeholder="Receipt No" />
          </div>
          <div>
            <label className="filter-label">Search By Date</label>
            <div style={{ display: 'flex' }}>
              <input type="date" className="input-outline" style={{ borderRadius: '8px 0 0 8px', borderRight: 'none' }} />
              <input type="date" className="input-outline" style={{ borderRadius: '0 8px 8px 0' }} />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
          <button className="btn-secondary">Clear Filter</button>
        </div>

        {/* Table Section */}
        <div className="table-header-controls">
          <div className="show-entries">
            Show 
            <select defaultValue="100">
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select> 
            entries
          </div>
          <div className="table-controls-right">
            <button className="btn-blue" onClick={() => window.print()}><Printer size={16} /> Print</button>
            <button className="btn-blue"><RotateCcw size={16} /> Reset</button>
          </div>
        </div>

        <table className="custom-table">
          <thead>
            <tr>
              <th>SL<span style={{ fontSize: '10px', verticalAlign: 'super' }}>↑↓</span></th>
              <th>DATE</th>
              <th>RECEIPT NO</th>
              <th>INVOICE NO</th>
              <th>CLIENT</th>
              <th>TYPE</th>
              <th>DESCRIPTION</th>
              <th>AMOUNT</th>
              <th>MONEY RECEIPT</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, idx) => (
              <tr key={idx}>
                <td>{row.sl}</td>
                <td>{row.date}</td>
                <td>{row.receiptNo}</td>
                <td>{row.invoiceNo}</td>
                <td style={{ whiteSpace: 'pre-line', textAlign: 'center' }}>{row.client}</td>
                <td>{row.type}</td>
                <td>{row.desc}</td>
                <td>{row.amount}</td>
                <td>
                  <button className="action-btn-sm print"><Printer size={16} /></button>
                </td>
                <td>
                  <button className="action-btn-sm edit"><Edit size={16} /></button>
                  <button className="action-btn-sm delete"><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default ReceiveList;
