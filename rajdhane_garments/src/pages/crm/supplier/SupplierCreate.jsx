import React from 'react';
import { Settings, List, Users, Plus } from 'lucide-react';

const SupplierCreate = () => {
  return (
    <div className="dashboard-content">
      <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 className="card-title">SUPPLIER CREATE</h2>
        <div className="card-actions">
          <button className="btn btn-outline" style={{ padding: '6px 12px', background: '#718096', color: 'white' }}>
            <Settings size={14} />
          </button>
          <button className="btn btn-outline" style={{ padding: '6px 12px', background: '#718096', color: 'white' }}>
            <List size={14} /> Supplier List
          </button>
          <button className="btn btn-outline" style={{ padding: '6px 12px', background: '#718096', color: 'white' }}>
            <Users size={14} /> Supplier Group
          </button>
          <button className="btn btn-primary" style={{ padding: '6px 12px', background: '#ef4444' }}>
            <span style={{ fontWeight: 'bold' }}>▶ YouTube</span>
          </button>
        </div>
      </div>

      <div className="card-body">
        <form>
          <div className="form-grid">
            <div className="form-group">
              <div className="form-input">
                <div className="input-icon">👤</div>
                <input type="text" placeholder="Supplier Name" />
              </div>
            </div>
            
            <div className="form-group">
              <div className="form-input">
                <div className="input-icon">🏢</div>
                <input type="text" placeholder="Company Name" />
              </div>
            </div>

            <div className="form-group">
              <div className="form-input">
                <div className="input-icon">📱</div>
                <input type="text" placeholder="Phone" />
              </div>
            </div>

            <div className="form-group">
              <div className="form-input">
                <div className="input-icon">💳</div>
                <input type="text" placeholder="Previous Due" />
              </div>
            </div>

            <div className="form-group">
              <div className="form-input">
                <div className="input-icon">🏢</div>
                <input type="text" placeholder="Address" />
              </div>
            </div>

            <div className="form-group">
              <div className="form-input">
                <div className="input-icon">🌐</div>
                <input type="text" placeholder="Domain" />
              </div>
            </div>

            <div className="form-group">
              <div className="input-group">
                <div className="form-input">
                  <select>
                    <option>Select a group</option>
                  </select>
                </div>
                <button type="button" className="btn-append">
                  <Plus size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', color: 'var(--text-main)', fontSize: '14px', fontWeight: '500' }}>
              <span style={{ marginRight: '8px' }}>🏦</span> Bank Account info
            </div>
            <textarea 
              className="form-input" 
              style={{ height: '120px', padding: '12px', resize: 'vertical' }}
              defaultValue="Bank Name:&#10;Account Number:&#10;Account Description:"
            ></textarea>
          </div>

          <button type="submit" className="btn-success">
            Add Supplier
          </button>
        </form>
      </div>
    </div>
  );
};

export default SupplierCreate;
