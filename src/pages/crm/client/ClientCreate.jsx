import React, { useState } from 'react';
import { User, Briefcase, MapPin, Phone, Mail, Hash, Users, Plus, Settings, List, PlaySquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../context/AppContext';

const ClientCreate = () => {
  const navigate = useNavigate();
  const [isGroupModalOpen, setIsGroupModalOpen] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');
  const { state, addClientGroup } = useAppContext();
  const groups = state?.clientGroups || [];

  const handleAddGroup = () => {
    if (!newGroupName.trim()) {
      alert('Please enter a group name');
      return;
    }
    const now = new Date();
    const createdAt = `${now.getDate()} ${now.toLocaleString('default', { month: 'short' })} ${now.getFullYear()}`;
    
    addClientGroup({ name: newGroupName.toUpperCase(), createdAt });
    setNewGroupName('');
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
                <div className="input-group" style={{ display: 'flex', width: '100%' }}>
                  <div className="form-input floating-label" style={{ flex: 1, borderTopRightRadius: 0, borderBottomRightRadius: 0, background: 'white' }}>
                    <select style={{ border: 'none', background: 'transparent' }}>
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
                    style={{ background: '#10b981', color: 'white', border: 'none', padding: '0 16px', borderTopRightRadius: '4px', borderBottomRightRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
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

      {/* Group Create Modal */}
      {isGroupModalOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
        }}>
          <div style={{ background: 'white', borderRadius: '8px', width: '400px', overflow: 'hidden' }}>
            <div style={{ padding: '16px 24px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0, fontSize: '16px' }}>Add Client Group</h3>
              <button onClick={() => setIsGroupModalOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px' }}>&times;</button>
            </div>
            <div style={{ padding: '24px' }}>
              <div className="form-group" style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>Group Name</label>
                <div className="form-input">
                  <input 
                    type="text" 
                    value={newGroupName} 
                    onChange={(e) => setNewGroupName(e.target.value)} 
                    placeholder="Enter group name"
                    style={{ width: '100%', padding: '8px', border: '1px solid #e2e8f0', borderRadius: '4px' }}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                <button onClick={() => setIsGroupModalOpen(false)} style={{ padding: '8px 16px', border: '1px solid #e2e8f0', background: 'white', borderRadius: '4px', cursor: 'pointer' }}>Cancel</button>
                <button onClick={handleAddGroup} style={{ padding: '8px 16px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Save Group</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientCreate;
