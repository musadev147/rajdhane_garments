import React from 'react';
import { ArrowLeft, Printer, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

const AccountBalance = () => {
  return (
    <div className="premium-card">
      <div className="premium-header">
        <h2 className="premium-title" style={{ textTransform: 'uppercase' }}>Account Balance List</h2>
        <div className="header-actions">
          <button className="btn-gray-outline"><ArrowLeft size={16} /> Go Back</button>
          <Link to="/account/account-create" style={{ textDecoration: 'none' }}>
            <button className="btn-green">Add New</button>
          </Link>
        </div>
      </div>

      <div className="premium-body" style={{ padding: '24px' }}>
        
        {/* Table Section */}
        <div className="table-header-controls" style={{ marginBottom: '16px' }}>
          <div className="show-entries">
            Show 
            <select defaultValue="100">
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select> 
            entries
          </div>
          <div className="table-controls-right" style={{ gap: '4px' }}>
            <button className="btn-blue" style={{ padding: '6px 12px', fontSize: '12px', fontWeight: 'bold' }}>Excel</button>
            <button className="btn-blue" style={{ padding: '6px 12px', fontSize: '12px', fontWeight: 'bold' }}>CSV</button>
            <button className="btn-blue" style={{ padding: '6px 12px', fontSize: '12px', fontWeight: 'bold' }}>PDF</button>
            <button className="btn-blue" style={{ padding: '6px 12px', fontSize: '12px', fontWeight: 'bold' }} onClick={() => window.print()}><Printer size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }}/> Print</button>
            <button className="btn-blue" style={{ padding: '6px 12px', fontSize: '12px', fontWeight: 'bold' }}><RotateCcw size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }}/> Reset</button>
          </div>
        </div>

        <table className="custom-table" style={{ border: '1px solid #d1d5db' }}>
          <thead>
            <tr>
              <th style={{ width: '80px', textAlign: 'left', paddingLeft: '12px' }}>ID NO<span style={{ fontSize: '10px', verticalAlign: 'super', marginLeft: '4px' }}>↑↓</span></th>
              <th style={{ textAlign: 'left' }}>TITLE<span style={{ fontSize: '10px', verticalAlign: 'super', marginLeft: '4px' }}>↑↓</span></th>
              <th style={{ textAlign: 'left' }}>ACCOUNT<span style={{ fontSize: '10px', verticalAlign: 'super', marginLeft: '4px' }}>↑↓</span></th>
              <th style={{ textAlign: 'left' }}>BALANCE<span style={{ fontSize: '10px', verticalAlign: 'super', marginLeft: '4px' }}>↑↓</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ textAlign: 'left', paddingLeft: '12px' }}>1</td>
              <td style={{ textAlign: 'left' }}>TOTAL BALENCE</td>
              <td style={{ textAlign: 'left' }}></td>
              <td style={{ textAlign: 'left' }}>6,918,623.53</td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left', paddingLeft: '12px' }}>2</td>
              <td style={{ textAlign: 'left' }}>RAJDHANI CC ACCOUNT</td>
              <td style={{ textAlign: 'left' }}>13137</td>
              <td style={{ textAlign: 'left' }}>590.00</td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left', paddingLeft: '12px' }}>3</td>
              <td style={{ textAlign: 'left' }}>JENTS CC ACCOUNT</td>
              <td style={{ textAlign: 'left' }}>134</td>
              <td style={{ textAlign: 'left' }}>0.00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr style={{ fontWeight: 'bold', background: '#f9fafb' }}>
              <td colSpan="3" style={{ textAlign: 'center', padding: '12px' }}>Total</td>
              <td style={{ textAlign: 'left', padding: '12px' }}>6,919,213.53</td>
            </tr>
          </tfoot>
        </table>

        {/* Pagination Section */}
        <div className="table-footer-controls">
          <div>Showing 1 to 3 of 3 entries</div>
          <div className="pagination-controls">
            <button className="pagination-btn">Previous</button>
            <button className="pagination-btn" style={{ background: '#3b82f6', color: 'white', borderColor: '#3b82f6' }}>1</button>
            <button className="pagination-btn">Next</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AccountBalance;
