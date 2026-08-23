import React from 'react';
import { Settings, List, Layers, Play, X, Plus, Calendar, BookOpen, User } from 'lucide-react';

const ExpenseCreate = () => {
  return (
    <div className="premium-card">
      <div className="premium-header">
        <h2 className="premium-title">Expense Create</h2>
        <div className="header-actions">
          <button className="btn-icon"><Settings size={18} /></button>
          <button className="btn-gray-outline"><List size={16} /> Client List</button>
          <button className="btn-gray-outline"><Layers size={16} /> Client Group</button>
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
            <div className="badge-date"><Calendar size={12} /> Date</div>
            <input type="date" className="input-date" defaultValue="2026-08-23" />
          </div>
          <div className="form-col">
            <div className="input-with-append">
              <input type="text" defaultValue="TOTAL BALANCE" readOnly style={{ color: '#64748b' }} />
              <button className="clear-btn"><X size={16} /></button>
              <button className="append-btn"><Plus size={20} /></button>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="form-row">
          <div className="form-col">
            <User size={18} className="input-icon-left" />
            <input type="text" className="input-with-icon" placeholder="Amount" />
          </div>
          <div className="form-col">
            <div className="input-with-append">
              <select defaultValue="">
                <option value="" disabled hidden>Select Categories</option>
                <option value="cat1">Category 1</option>
                <option value="cat2">Category 2</option>
              </select>
              <button className="append-btn"><Plus size={20} /></button>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="form-row">
          <div className="form-col" style={{ flex: '0 0 calc(50% - 12px)' }}>
            <BookOpen size={18} className="input-icon-left" />
            <input type="text" className="input-with-icon" placeholder="Expense Description in a short note" />
          </div>
        </div>

        <div className="premium-footer">
          <button className="btn-primary">Add New</button>
          <button className="btn-danger">Close</button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseCreate;
