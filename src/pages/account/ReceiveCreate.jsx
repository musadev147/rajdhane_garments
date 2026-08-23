import React from 'react';
import { Settings, List, Layers, Play, X, Plus, Calendar, BookOpen, DollarSign, MessageSquare } from 'lucide-react';

const ReceiveCreate = () => {
  return (
    <div className="premium-card">
      <div className="premium-header">
        <h2 className="premium-title">Add New Receive</h2>
        <div className="header-actions">
          <button className="btn-icon"><Settings size={18} /></button>
          <button className="btn-gray-outline"><List size={16} /> Receive List</button>
          <button className="btn-gray-outline"><Layers size={16} /> Receive Category</button>
          <button className="btn-youtube">
            <div style={{ display: 'flex', alignItems: 'center', background: '#ff0000', color: 'white', padding: '6px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold' }}>
              <Play size={16} fill="white" style={{ marginRight: '6px' }} /> YouTube
            </div>
            <div style={{ background: '#10b981', color: 'white', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '-10px', border: '2px solid white' }}>M</div>
          </button>
        </div>
      </div>

      <div className="premium-body">
        {/* Row 1 */}
        <div className="form-row">
          <div className="form-col">
            <div className="input-with-append">
              <select defaultValue="">
                <option value="" disabled hidden>Select Client</option>
                <option value="client1">Client 1</option>
                <option value="client2">Client 2</option>
              </select>
              <button className="append-btn"><Plus size={20} /></button>
            </div>
          </div>
          <div className="form-col">
            <div className="input-with-append">
              <select defaultValue="">
                <option value="" disabled hidden>Choose one</option>
                <option value="opt1">Option 1</option>
                <option value="opt2">Option 2</option>
              </select>
              <button className="append-btn"><Plus size={20} /></button>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="form-row" style={{ marginTop: '36px' }}>
          <div className="form-col">
            <div className="badge-due">Due: 0</div>
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

        {/* Row 3 */}
        <div className="form-row">
          <div className="form-col">
            <BookOpen size={18} className="input-icon-left" />
            <input type="text" className="input-with-icon" placeholder="Receive Description in a short note" />
          </div>
          <div className="form-col">
            <DollarSign size={18} className="input-icon-left" />
            <input type="text" className="input-with-icon" placeholder="Amount" />
          </div>
        </div>

        {/* Row 4 */}
        <div className="form-row">
          <div className="form-col">
            <div className="input-with-append">
              <select defaultValue="cash">
                <option value="cash">CASH SELL</option>
                <option value="card">CARD SELL</option>
              </select>
              <button className="clear-btn"><X size={16} /></button>
              <button className="append-btn"><Plus size={20} /></button>
            </div>
          </div>
          <div className="form-col">
            <div className="toggle-switch">
              <div className="toggle-label">
                <MessageSquare size={18} /> SMS
              </div>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="premium-footer">
          <button className="btn-primary">Add New Receive</button>
          <button className="btn-danger">Close</button>
        </div>
      </div>
    </div>
  );
};

export default ReceiveCreate;
