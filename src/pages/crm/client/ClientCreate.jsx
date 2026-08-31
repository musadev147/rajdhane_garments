import React, { useState } from 'react';
import { User, Briefcase, MapPin, Phone, Mail, Hash, Users, Plus, Settings, List, PlaySquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../context/AppContext';
import AddOptionModal from '../../../components/AddOptionModal';

const ClientCreate = () => {
  const navigate = useNavigate();
  const [isGroupModalOpen, setIsGroupModalOpen] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');
  const { state, addClientGroup } = useAppContext();
  const groups = state?.clientGroups || [];

  const handleAddGroup = (groupName) => {
    const now = new Date();
    const createdAt = `${now.getDate()} ${now.toLocaleString('default', { month: 'short' })} ${now.getFullYear()}`;
    
    addClientGroup({ name: groupName.toUpperCase(), createdAt });
    setIsGroupModalOpen(false);
  };

  return (
    <div className="dashboard-content" style={{ padding: '24px' }}>
      <div className="chart-card" style={{ background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        {/* Header */}
        <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', borderBottom: '1px solid #e2e8f0' }}>
          <h2 style={{ fontSize: '14px', fontWeight: '800', color: '#1e293b', margin: 0, textTransform: 'uppercase' }}>CLIENT CREATE</h2>
          <div className="card-actions" style={{ display: 'flex', gap: '8px' }}>
            <button className="btn btn-outline" style={{ padding: '6px 12px', background: '#64748b', color: 'white', border: 'none', borderRadius: '4px' }}>
              <Settings size={14} />
            </button>
            <button className="btn btn-outline" onClick={() => navigate('/crm/client-list')} style={{ padding: '6px 12px', background: '#64748b', color: 'white', border: 'none', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <List size={14} /> Client List
            </button>
            <button className="btn btn-outline" style={{ padding: '6px 12px', background: '#64748b', color: 'white', border: 'none', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '6px' }} onClick={() => setIsGroupModalOpen(true)}>
              <Users size={14} /> Client Group
            </button>
            <button className="btn btn-outline" style={{ padding: '6px 12px', background: 'white', color: '#ef4444', border: '1px solid #e2e8f0', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
              <PlaySquare size={14} style={{ fill: '#ef4444', color: 'white' }} /> YouTube
            </button>
          </div>
        </div>

        {/* Form Body */}
        <div style={{ padding: '24px' }}>
          <form>
            <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              
              {/* Row 1 */}
              <div className="form-group">
                <div className="form-input floating-label" style={{ background: 'white' }}>
                  <User size={18} className="input-icon" />
                  <input type="text" placeholder=" " />
                  <label>Client Name</label>
                </div>
              </div>
              
              <div className="form-group">
                <div className="form-input floating-label" style={{ background: 'white' }}>
                  <MapPin size={18} className="input-icon" />
                  <input type="text" placeholder=" " />
                  <label>Address</label>
                </div>
              </div>

              <div className="form-group">
                <div className="form-input floating-label" style={{ background: 'white' }}>
                  <Phone size={18} className="input-icon" />
                  <input type="text" placeholder=" " />
                  <label>Phone Number</label>
                </div>
              </div>

              {/* Row 2 */}
              <div className="form-group">
                <div className="form-input floating-label" style={{ background: 'white' }}>
                  <Phone size={18} className="input-icon" />
                  <input type="text" placeholder=" " />
                  <label>Phone Optional</label>
                </div>
              </div>

              <div className="form-group">
                <div className="form-input floating-label" style={{ background: 'white' }}>
                  <Hash size={18} className="input-icon" />
                  <input type="text" placeholder=" " />
                  <label>Previous Due</label>
                </div>
              </div>

              <div className="form-group">
                <div className="form-input floating-label" style={{ background: 'white' }}>
                  <Users size={18} className="input-icon" />
                  <input type="text" placeholder=" " />
                  <label>Reference</label>
                </div>
              </div>

            {/* Row 3 */}
            <div className="form-group" style={{ gridColumn: 'span 1' }}>
              <div className="input-group">
                <div className="form-input floating-label">
                  <select name="group">
                    <option value="" disabled hidden></option>
                    <option value="test">Select client group</option>
                    {groups.map(group => (
                      <option key={group.id} value={group.name}>{group.name}</option>
                    ))}
                  </select>
                  <label>Select client group</label>
                </div>
                <button 
                  type="button" 
                  className="btn-append"
                  onClick={() => setIsGroupModalOpen(true)}
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>

            </div>

            {/* Submit Button */}
            <div style={{ marginTop: '24px' }}>
              <button 
                type="button" 
                style={{ 
                  background: '#10b981', 
                  color: 'white', 
                  width: '100%', 
                  padding: '12px', 
                  border: 'none', 
                  borderRadius: '4px', 
                  fontWeight: '600',
                  fontSize: '14px',
                  cursor: 'pointer'
                }}
              >
                Client Add
              </button>
            </div>
          </form>
        </div>
      </div>

      <AddOptionModal 
        isOpen={isGroupModalOpen}
        onClose={() => setIsGroupModalOpen(false)}
        onSave={handleAddGroup}
        title="Add Client Group"
        label="Group Name"
      />
    </div>
  );
};

export default ClientCreate;
