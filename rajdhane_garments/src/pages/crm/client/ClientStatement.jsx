import React from 'react';
import { Printer, RotateCcw } from 'lucide-react';

const ClientStatement = () => {
  return (
    <div className="dashboard-content">
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

        {/* Filters */}
        <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr auto', marginBottom: '24px', alignItems: 'flex-end', gap: '16px' }}>
          <div className="form-group">
            <label style={{ fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>Search By Client</label>
            <div className="form-input">
              <select>
                <option>Select Client</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label style={{ fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>Search By Date</label>
            <div style={{ display: 'flex', gap: '12px' }}>
              <div className="form-input" style={{ flex: 1 }}>
                <input type="text" placeholder="DD/MM/YYYY" />
              </div>
              <div className="form-input" style={{ flex: 1 }}>
                <input type="text" placeholder="DD/MM/YYYY" />
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
              <tr>
                <th style={{ padding: '12px 8px', fontSize: '11px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.2)' }}>SL ↕</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.2)' }}>DATE ↕</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.2)' }}>PRODUCT ↕</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.2)' }}>QTY ↕</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.2)' }}>UNIT ↕</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.2)' }}>PRICE ↕</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.2)' }}>DESCRIPTION ↕</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.2)' }}>LABOUR COST ↕</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.2)' }}>BILL ↕</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.2)' }}>SALES RETURN ↕</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.2)' }}>RECEIVE ↕</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.2)' }}>MONEY RETURN ↕</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', textAlign: 'center' }}>BALANCE ↕</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="13" style={{ textAlign: 'center', padding: '24px', color: 'var(--text-muted)' }}>
                  Processing...
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClientStatement;
