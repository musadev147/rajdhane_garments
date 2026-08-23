import React from 'react';
import { Plus, Play, Printer, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

const MoneyReturn = () => {
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
          <h2 style={{ fontSize: '24px', fontWeight: '400', color: '#4b5563', margin: 0 }}>Money Return List</h2>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Link to="/account/expense-create" style={{ textDecoration: 'none' }}>
              <button className="btn-green">
                <Plus size={16} /> Money Return
              </button>
            </Link>
            <button className="btn-youtube">
              <div style={{ display: 'flex', alignItems: 'center', background: '#ff0000', color: 'white', padding: '6px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold' }}>
                <Play size={16} fill="white" style={{ marginRight: '6px' }} /> YouTube
              </div>
            </button>
          </div>
        </div>

        {/* Filter Section */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '40px', alignItems: 'end' }}>
          <div style={{ flex: 1 }}>
            <label className="filter-label">Search By Client</label>
            <select className="input-outline">
              <option value="">Select Client</option>
              <option value="1">Client 1</option>
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label className="filter-label">Search By Date</label>
            <div style={{ display: 'flex' }}>
              <input type="date" className="input-outline" style={{ borderRadius: '8px 0 0 8px', borderRight: 'none' }} />
              <input type="date" className="input-outline" style={{ borderRadius: '0 8px 8px 0' }} />
            </div>
          </div>
          <div style={{ flex: 2 }}>
            <button className="btn-secondary" style={{ width: '100%', height: '44px' }}>Clear Filter</button>
          </div>
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

        <table className="custom-table" style={{ border: '1px solid #d1d5db' }}>
          <thead>
            <tr>
              <th>SL<span style={{ fontSize: '10px', verticalAlign: 'super' }}>↑↓</span></th>
              <th>DATE</th>
              <th>RECEIPT FOR</th>
              <th>ID NO</th>
              <th>CATEGORY</th>
              <th>ACCOUNT</th>
              <th>CHEQUE NO</th>
              <th>DESCRIPTION</th>
              <th>TRANSACTION TYPE</th>
              <th>BANK</th>
              <th>AMOUNT</th>
              <th>PRINTABLE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="13" style={{ padding: '24px', color: '#374151', background: 'white' }}>No data available in table</td>
            </tr>
          </tbody>
          <tfoot>
            <tr style={{ fontWeight: 'bold', background: '#f9fafb' }}>
              <td colSpan="10" style={{ textAlign: 'center' }}>Total</td>
              <td>undefined</td>
              <td colSpan="2"></td>
            </tr>
          </tfoot>
        </table>

        {/* Pagination Section */}
        <div className="table-footer-controls">
          <div>Showing 0 to 0 of 0 entries</div>
          <div className="pagination-controls">
            <button className="pagination-btn">Previous</button>
            <button className="pagination-btn">Next</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MoneyReturn;
