import React, { useState } from 'react';
import { Settings, List, Users, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../context/AppContext';
import AddOptionModal from '../../../components/AddOptionModal';

const SupplierCreate = () => {
  const navigate = useNavigate();
  const [isGroupModalOpen, setIsGroupModalOpen] = useState(false);
  const { state, addSupplierGroup } = useAppContext();
  const groups = state?.supplierGroups || [];

  const handleAddGroup = (groupName) => {
    const now = new Date();
    const date = `${now.getDate()} ${now.toLocaleString('default', { month: 'short' })} ${now.getFullYear()}`;
    addSupplierGroup({ name: groupName.toUpperCase(), date });
  };

  return (
    <div className="dashboard-content">
      <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 className="card-title">SUPPLIER CREATE</h2>
        <div className="card-actions">
          <button className="btn btn-outline" style={{ padding: '6px 12px', background: '#718096', color: 'white' }}>
            <Settings size={14} />
          </button>
          <button className="btn btn-outline" style={{ padding: '6px 12px', background: 'var(--table-header-bg)', color: 'white' }} onClick={() => navigate('/crm/supplier-list')}>
            <List size={14} /> Supplier List
          </button>
          <button className="btn btn-outline" style={{ padding: '6px 12px', background: 'var(--table-header-bg)', color: 'white' }} onClick={() => navigate('/crm/supplier-group')}>
            <Users size={14} /> Supplier Group
          </button>
          <button className="btn btn-primary" style={{ padding: '6px 12px', background: 'var(--danger)' }}>
            <span style={{ fontWeight: 'bold' }}>▶ YouTube</span>
          </button>
        </div>
      </div>

      <div className="card-body">
        <form>
          <div className="form-grid">
            <div className="form-group">
              <div className="form-input floating-label">
                <div className="input-icon">👤</div>
                <input type="text" placeholder=" " />
                <label>Supplier Name</label>
              </div>
            </div>
            
            <div className="form-group">
              <div className="form-input floating-label">
                <div className="input-icon">🏢</div>
                <input type="text" placeholder=" " />
                <label>Company Name</label>
              </div>
            </div>

            <div className="form-group">
              <div className="form-input floating-label">
                <div className="input-icon">📱</div>
                <input type="text" placeholder=" " />
                <label>Phone</label>
              </div>
            </div>

            <div className="form-group">
              <div className="form-input floating-label">
                <div className="input-icon">💳</div>
                <input type="text" placeholder=" " />
                <label>Previous Due</label>
              </div>
            </div>

            <div className="form-group">
              <div className="form-input floating-label">
                <div className="input-icon">🏢</div>
                <input type="text" placeholder=" " />
                <label>Address</label>
              </div>
            </div>

            <div className="form-group">
              <div className="form-input floating-label">
                <div className="input-icon">🌐</div>
                <input type="text" placeholder=" " />
                <label>Domain</label>
              </div>
            </div>

            <div className="form-group">
              <div className="input-group">
                <div className="form-input floating-label">
                  <select>
                    <option value="" disabled hidden></option>
                    <option value="test">Select a group</option>
                    {groups.map(group => (
                      <option key={group.id} value={group.name}>{group.name}</option>
                    ))}
                  </select>
                  <label>Select a group</label>
                </div>
                <button type="button" className="btn-append" onClick={() => setIsGroupModalOpen(true)}>
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
              className="form-input floating-label" 
              style={{ height: '120px', padding: '12px', resize: 'vertical' }}
              defaultValue="Bank Name:&#10;Account Number:&#10;Account Description:"
            ></textarea>
          </div>

          <button type="submit" className="btn-success">
            Add Supplier
          </button>
        </form>
      </div>

      <AddOptionModal 
        isOpen={isGroupModalOpen}
        onClose={() => setIsGroupModalOpen(false)}
        onSave={handleAddGroup}
        title="Add Supplier Group"
        label="Group Name"
      />
    </div>
  );
};

export default SupplierCreate;
