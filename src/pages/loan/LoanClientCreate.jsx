import React from 'react';
import { User, Building, MapPin, Phone, Mail, Users, Settings, Play, Plus, List, Layers, Wallet } from 'lucide-react';

const LoanClientCreate = () => {
  return (
    <div className="premium-card">
      <div className="premium-header">
        <h2 className="premium-title" style={{ textTransform: 'uppercase' }}>Client Create</h2>
        <div className="header-actions">
          <button className="btn-icon">
            <Settings size={18} />
          </button>
          <button className="btn-gray-outline">
            <List size={16} /> Client List
          </button>
          <button className="btn-gray-outline">
            <Layers size={16} /> Client Group
          </button>
          <button className="btn-youtube">
            <div style={{ display: 'flex', alignItems: 'center', background: '#ff0000', color: 'white', padding: '6px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold' }}>
              <Play size={16} fill="white" style={{ marginRight: '6px' }} /> YouTube
            </div>
          </button>
        </div>
      </div>

      <div className="premium-body">
        <div className="form-grid">
          
          <div className="form-group">
            <div className="input-with-icon">
              <span className="input-icon"><User size={18} /></span>
              <input type="text" className="form-input" placeholder="Client Name" />
            </div>
          </div>

          <div className="form-group">
            <div className="input-with-icon">
              <span className="input-icon"><User size={18} /></span>
              <input type="text" className="form-input" placeholder="Father's Name" />
            </div>
          </div>

          <div className="form-group">
            <div className="input-with-icon">
              <span className="input-icon"><Building size={18} /></span>
              <input type="text" className="form-input" placeholder="Company Name" />
            </div>
          </div>

          <div className="form-group">
            <div className="input-with-icon">
              <span className="input-icon"><MapPin size={18} /></span>
              <input type="text" className="form-input" placeholder="Address" />
            </div>
          </div>

          <div className="form-group">
            <div className="input-with-icon">
              <span className="input-icon"><Phone size={18} /></span>
              <input type="text" className="form-input" placeholder="Phone Number" />
            </div>
          </div>

          <div className="form-group">
            <div className="input-with-icon">
              <span className="input-icon"><Phone size={18} /></span>
              <input type="text" className="form-input" placeholder="Phone Optional" />
            </div>
          </div>

          <div className="form-group">
            <div className="input-with-icon">
              <span className="input-icon"><Wallet size={18} /></span>
              <input type="text" className="form-input" placeholder="Previous Due" />
            </div>
          </div>

          <div className="form-group">
            <div className="input-with-icon">
              <span className="input-icon"><Mail size={18} /></span>
              <input type="email" className="form-input" placeholder="E-mail" />
            </div>
          </div>

          <div className="form-group">
            <div className="input-with-icon">
              <span className="input-icon"><Users size={18} /></span>
              <input type="text" className="form-input" placeholder="Reference" />
            </div>
          </div>

          <div className="form-group">
            <div style={{ display: 'flex' }}>
              <select className="form-input" style={{ flex: 1, borderTopRightRadius: 0, borderBottomRightRadius: 0, borderRight: 'none', appearance: 'none', backgroundColor: 'transparent' }}>
                <option value="">Select client group</option>
              </select>
              <button 
                className="btn-green"
                style={{ 
                  borderRadius: '0 8px 8px 0', 
                  padding: '0 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 0
                }}
              >
                <Plus size={20} />
              </button>
            </div>
          </div>

        </div>

        <button className="btn-green" style={{ width: '100%', padding: '14px', fontSize: '16px', marginTop: '16px' }}>
          Client Add
        </button>
      </div>
    </div>
  );
};

export default LoanClientCreate;
