import React, { useState } from 'react';
import { List, Plus, FileSpreadsheet, Printer, RotateCcw, RefreshCw, Edit, Trash2, X } from 'lucide-react';

const SupplierGroup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const groups = [
    { id: 1, name: 'SIT KAPUR', date: '10 May 2024' },
    { id: 2, name: 'ORNA', date: '10 May 2024' },
    { id: 3, name: 'GENTS', date: '09 May 2024' },
    { id: 4, name: 'THREE PEACE', date: '02 May 2024' },
    { id: 5, name: 'LADIES GARMENTS', date: '23 Apr 2024' },
    { id: 6, name: 'SHARI', date: '23 Apr 2024' },
  ];

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px' }}>
      <div className="chart-card">
        <div className="card-header">
          <h2 className="card-title" style={{ textTransform: 'none', fontSize: '20px' }}>Supplier Group</h2>
          <div className="card-actions">
            <button className="btn btn-outline" style={{ padding: '6px 12px', background: '#718096', color: 'white' }}>
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
              <button className="btn" style={{ background: '#3b82f6', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px' }}>
                <FileSpreadsheet size={14} style={{ marginRight: '6px' }} /> Excel
              </button>
              <button className="btn" onClick={() => window.print()} style={{ background: '#3b82f6', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px' }}>
                <Printer size={14} style={{ marginRight: '6px' }} /> Print
              </button>
              <button className="btn" style={{ background: '#3b82f6', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px' }}>
                <RotateCcw size={14} style={{ marginRight: '6px' }} /> Reset
              </button>
              <button className="btn" style={{ background: '#3b82f6', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px' }}>
                <RefreshCw size={14} style={{ marginRight: '6px' }} /> Reload
              </button>
            </div>
          </div>

          {/* Table */}
          <div style={{ overflowX: 'auto', border: '1px solid var(--secondary)', borderRadius: '8px' }}>
            <table className="custom-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ background: '#718096', color: 'white' }}>
                <tr>
                  <th width="80" style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid rgba(255,255,255,0.2)' }}>ID NO ↕</th>
                  <th style={{ padding: '12px', borderRight: '1px solid rgba(255,255,255,0.2)' }}>NAME ↕</th>
                  <th style={{ padding: '12px', borderRight: '1px solid rgba(255,255,255,0.2)' }}>CREATED AT ↕</th>
                  <th width="120" style={{ textAlign: 'center', padding: '12px' }}>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {groups.map((group, index) => (
                  <tr key={group.id} style={{ background: index % 2 === 0 ? 'white' : '#f8fafc' }}>
                    <td style={{ textAlign: 'center', padding: '12px', borderBottom: '1px solid #e2e8f0', borderRight: '1px solid #e2e8f0' }}>{group.id}</td>
                    <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0', borderRight: '1px solid #e2e8f0', fontWeight: '500' }}>{group.name}</td>
                    <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0', borderRight: '1px solid #e2e8f0' }}>{group.date}</td>
                    <td style={{ textAlign: 'center', padding: '12px', borderBottom: '1px solid #e2e8f0' }}>
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                        <button style={{ background: '#0ea5e9', color: 'white', border: 'none', padding: '6px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Edit size={14} />
                        </button>
                        <button style={{ background: '#ef4444', color: 'white', border: 'none', padding: '6px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', fontSize: '14px', color: 'var(--text-muted)' }}>
            <div>Showing 1 to 6 of 6 entries</div>
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
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          backdropFilter: 'blur(4px)'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '12px',
            width: '100%',
            maxWidth: '500px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            overflow: 'hidden'
          }}>
            {/* Modal Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '20px 24px',
              borderBottom: '1px solid #e2e8f0',
              background: '#f8fafc'
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'var(--text-main)', margin: 0 }}>Add New Supplier Group</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#64748b' }}
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
                  onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div style={{
              padding: '16px 24px',
              borderTop: '1px solid #e2e8f0',
              background: '#f8fafc',
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
