import React from 'react';
import { List, Play, Plus, Calendar, Type, DollarSign } from 'lucide-react';

const TransferCreate = () => {
  return (
    <div className="premium-card">
      <div className="premium-header">
        <h2 className="premium-title" style={{ textTransform: 'uppercase' }}>New Transfer</h2>
        <div className="header-actions">
          <button className="btn-gray-outline"><List size={16} /> Transfer List</button>
          <button className="btn-youtube">
            <div style={{ display: 'flex', alignItems: 'center', background: '#ff0000', color: 'white', padding: '6px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold' }}>
              <Play size={16} fill="white" style={{ marginRight: '6px' }} /> YouTube
            </div>
          </button>
        </div>
      </div>

      <div className="premium-body">
        {/* Row 1 */}
        <div className="form-row" style={{ marginTop: '24px' }}>
          <div className="form-col">
            <div className="input-with-append">
              <select defaultValue="">
                <option value="" disabled hidden>Select Account</option>
                <option value="acct1">Account 1</option>
              </select>
              <button className="append-btn"><Plus size={20} /></button>
            </div>
          </div>
          <div className="form-col">
            <div className="input-with-append">
              <select defaultValue="">
                <option value="" disabled hidden>Select Account</option>
                <option value="acct2">Account 2</option>
              </select>
              <button className="append-btn"><Plus size={20} /></button>
            </div>
          </div>
          <div className="form-col" style={{ position: 'relative' }}>
            <div className="badge-date"><Calendar size={12} /> Date</div>
            <input type="date" className="input-date" defaultValue="2026-08-23" />
          </div>
        </div>

        {/* Row 2 */}
        <div className="form-row" style={{ marginTop: '20px' }}>
          <div className="form-col">
            <Type size={18} className="input-icon-left" />
            <input type="text" className="input-with-icon" placeholder="Description" />
          </div>
          <div className="form-col">
            <DollarSign size={18} className="input-icon-left" />
            <input type="text" className="input-with-icon" placeholder="Amount" />
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: '24px' }}>
          <button className="btn-primary" style={{ width: '100%', padding: '12px', fontSize: '16px', background: '#10b981', borderColor: '#10b981' }}>
            Add Transfer
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransferCreate;
