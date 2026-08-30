import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../../components/PrintHeader';
import { List, Plus, FileSpreadsheet, Printer, RotateCcw, RefreshCw, Edit, Trash2, X } from 'lucide-react';
import { useAppContext } from '../../../context/AppContext';
import { useNavigate } from 'react-router-dom';

const SupplierGroup = () => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');

  const { state, addSupplierGroup } = useAppContext();
  const navigate = useNavigate();
  const groups = state.supplierGroups || [];

  const handleAddGroup = () => {
    if (!newGroupName.trim()) {
      alert('Please enter a group name');
      return;
    }
    const now = new Date();
    const date = `${now.getDate()} ${now.toLocaleString('default', { month: 'short' })} ${now.getFullYear()}`;
    
    addSupplierGroup({ name: newGroupName.toUpperCase(), date });
    setNewGroupName('');
    setIsModalOpen(false);
  };

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px' }}>
        <PrintHeader />
      <div className="chart-card">
        <div className="card-header">
          <h2 className="card-title" style={{ textTransform: 'none', fontSize: '20px' }}>Supplier Group</h2>
          <div className="card-actions">
            <button className="btn btn-outline" style={{ padding: '6px 12px', background: 'var(--table-header-bg)', color: 'white' }} onClick={() => navigate('/crm/supplier-list')}>
              <List size={14} /> Supplier List
            </button>
            <button className="btn btn-primary" style={{ padding: '6px 12px', background: 'var(--success)' }} onClick={() => setIsModalOpen(true)}>
              <Plus size={14} /> Group Add
            </button>
          </div>
        </div>

        <div className="card-body">
          {/* Table Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ fontSize: '14px', color: 'var(--text-main)' }}>
              Show 
              <select style={{ margin: '0 8px', padding: '4px', border: '1px solid var(--secondary)', borderRadius: '4px' }}>
                <option>50</option>
              </select>
              entries
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button className="btn" style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px' }}>
                <FileSpreadsheet size={14} style={{ marginRight: '6px' }} /> Excel
              </button>
              <button className="btn" onClick={() => window.print()} style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px' }}>
                <Printer size={14} style={{ marginRight: '6px' }} /> Print
              </button>
              <button className="btn" style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px' }}>
                <RotateCcw size={14} style={{ marginRight: '6px' }} /> Reset
              </button>
              <button className="btn" style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px' }}>
                <RefreshCw size={14} style={{ marginRight: '6px' }} /> Reload
              </button>
            </div>
          </div>

          {/* Table */}
          <div style={{ overflowX: 'auto', border: '1px solid var(--secondary)', borderRadius: '8px' }}>
            <table className="custom-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ background: 'var(--table-header-bg)', color: 'white' }}>
                <tr>
                  <th width="80" style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid rgba(255,255,255,0.2)' }}>ID NO ↕</th>
                  <th style={{ padding: '12px', borderRight: '1px solid rgba(255,255,255,0.2)' }}>NAME ↕</th>
                  <th style={{ padding: '12px', borderRight: '1px solid rgba(255,255,255,0.2)' }}>CREATED AT ↕</th>
                  <th width="120" style={{ textAlign: 'center', padding: '12px' }}>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {groups.map((group, index) => (
                  <tr key={group.id} style={{ background: index % 2 === 0 ? 'white' : 'var(--card-header-bg)' }}>
                    <td style={{ textAlign: 'center', padding: '12px', borderBottom: '1px solid #e2e8f0', borderRight: '1px solid #e2e8f0' }}>{group.id}</td>
                    <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0', borderRight: '1px solid #e2e8f0', fontWeight: '500' }}>{group.name}</td>
                    <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0', borderRight: '1px solid #e2e8f0' }}>{group.date}</td>
                    <td style={{ textAlign: 'center', padding: '12px', borderBottom: '1px solid #e2e8f0' }}>
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                        <button style={{ background: 'var(--info)', color: 'white', border: 'none', padding: '6px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => alert("Edit group feature coming soon!")}>
                          <Edit size={14} />
                        </button>
                        <button style={{ background: 'var(--danger)', color: 'white', border: 'none', padding: '6px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => alert("Delete group feature coming soon!")}>
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {groups.length === 0 && (
                  <tr>
                    <td colSpan="4" style={{ textAlign: 'center', padding: '20px' }}>No supplier groups found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', fontSize: '14px', color: 'var(--text-muted)' }}>
            <div>Showing 1 to {groups.length} of {groups.length} entries</div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <button style={{ padding: '6px 12px', background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '4px', cursor: 'pointer' }}>Previous</button>
              <button style={{ padding: '6px 12px', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>1</button>
              <button style={{ padding: '6px 12px', background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '4px', cursor: 'pointer' }}>Next</button>
            </div>
          </div>
        </div>
      </div>

      {/* Add New Group Modal */}
      {isModalOpen && (
        <div className="drawer-overlay">
          <div className="drawer-content">
            {/* Modal Header */}
            <div className="drawer-header" style={{ background: 'var(--card-header-bg)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'var(--text-main)', margin: 0 }}>Add New Supplier Group</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '24px' }}>
              <div className="form-group" style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: 'var(--text-main)', marginBottom: '8px' }}>
                  Group Name
                </label>
                <input 
                  type="text" 
                  value={newGroupName}
                  onChange={(e) => setNewGroupName(e.target.value)}
                  placeholder="Enter supplier group name..." 
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '14px',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--card-border)'}
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div style={{
              padding: '16px 24px',
              borderTop: '1px solid #e2e8f0',
              background: 'var(--card-header-bg)',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '12px'
            }}>
              <button 
                onClick={() => setIsModalOpen(false)}
                style={{ padding: '10px 20px', borderRadius: '6px', border: '1px solid #cbd5e1', background: 'white', color: '#475569', fontWeight: '500', cursor: 'pointer' }}
              >
                Close
              </button>
              <button 
                onClick={handleAddGroup}
                style={{ padding: '10px 20px', borderRadius: '6px', border: 'none', background: 'var(--primary)', color: 'white', fontWeight: '500', cursor: 'pointer' }}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupplierGroup;
