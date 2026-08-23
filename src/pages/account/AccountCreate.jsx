import React from 'react';
import { User, List, ArrowLeft, Play } from 'lucide-react';

const AccountCreate = () => {
  return (
    <div className="premium-card">
      <div className="premium-header">
        <h2 className="premium-title" style={{ textTransform: 'uppercase' }}>Add New Account</h2>
        <div className="header-actions">
          <button className="btn-gray-outline"><List size={16} /> Account List</button>
          <button className="btn-gray-outline"><ArrowLeft size={16} /> Go Back</button>
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
            <User size={18} className="input-icon-left" />
            <input type="text" className="input-with-icon" placeholder="Account Title" />
          </div>
          <div className="form-col">
            <User size={18} className="input-icon-left" />
            <input type="text" className="input-with-icon" placeholder="Initial Balance" />
          </div>
        </div>

        {/* Row 2 */}
        <div className="form-row">
          <div className="form-col">
            <User size={18} className="input-icon-left" />
            <input type="text" className="input-with-icon" placeholder="Account Number" />
          </div>
          <div className="form-col">
            <User size={18} className="input-icon-left" />
            <input type="text" className="input-with-icon" placeholder="Contact Person" />
          </div>
        </div>

        {/* Row 3 */}
        <div className="form-row">
          <div className="form-col" style={{ flex: '0 0 calc(50% - 12px)' }}>
            <User size={18} className="input-icon-left" />
            <input type="text" className="input-with-icon" placeholder="Phone Number" />
          </div>
        </div>

        {/* Row 4 (Description Textarea) */}
        <div style={{ marginTop: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#374151' }}>Description</label>
          <textarea 
            className="input-outline" 
            placeholder="Account Description" 
            style={{ width: '100%', height: '120px', padding: '12px', resize: 'vertical' }}
          ></textarea>
        </div>

        {/* Footer */}
        <div style={{ marginTop: '24px' }}>
          <button className="btn-primary" style={{ width: '100%', padding: '12px', fontSize: '16px', background: '#34d399', borderColor: '#34d399' }}>
            Add Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountCreate;
