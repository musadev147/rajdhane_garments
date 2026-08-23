import React from 'react';
import { ArrowLeft, Play, Printer, RotateCcw, Edit, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const AccountList = () => {
  return (
    <div className="premium-card">
      <div className="premium-header">
        <h2 className="premium-title" style={{ textTransform: 'uppercase' }}>Account List</h2>
        <div className="header-actions">
          <button className="btn-gray-outline"><ArrowLeft size={16} /> Go Back</button>
          <Link to="/account/account-create" style={{ textDecoration: 'none' }}>
            <button className="btn-green">Add New</button>
          </Link>
          <button className="btn-youtube">
            <div style={{ display: 'flex', alignItems: 'center', background: '#ff0000', color: 'white', padding: '6px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold' }}>
              <Play size={16} fill="white" style={{ marginRight: '6px' }} /> YouTube
            </div>
          </button>
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
              <th style={{ width: '80px' }}>ID NO<span style={{ fontSize: '10px', verticalAlign: 'super', marginLeft: '4px' }}>↑↓</span></th>
              <th>TITLE<span style={{ fontSize: '10px', verticalAlign: 'super', marginLeft: '4px' }}>↑↓</span></th>
              <th>ACCOUNT</th>
              <th>DESCRIPTION</th>
              <th>CONTACT PERSON</th>
              <th>PHONE NUMBER</th>
              <th style={{ width: '120px' }}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>TOTAL BALENCE</td>
              <td></td>
              <td>APRIL SOTOWER SAS BALANCE 4664784 TAKA</td>
              <td></td>
              <td></td>
              <td>
                <div style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
                  <button style={{ background: '#0ea5e9', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}><Edit size={14} /></button>
                  <button style={{ background: '#ef4444', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}><Trash2 size={14} /></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>RAJDHANI CC ACCOUNT</td>
              <td>13137</td>
              <td></td>
              <td>Na</td>
              <td></td>
              <td>
                <div style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
                  <button style={{ background: '#0ea5e9', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}><Edit size={14} /></button>
                  <button style={{ background: '#ef4444', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}><Trash2 size={14} /></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>JENTS CC ACCOUNT</td>
              <td>134</td>
              <td></td>
              <td></td>
              <td>01</td>
              <td>
                <div style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
                  <button style={{ background: '#0ea5e9', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}><Edit size={14} /></button>
                  <button style={{ background: '#ef4444', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}><Trash2 size={14} /></button>
                </div>
              </td>
            </tr>
          </tbody>
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

export default AccountList;
