import React, { useState } from 'react';
import { List, Plus, FileSpreadsheet, FileText, Printer, RotateCcw, RefreshCw, Edit, Trash2, X, Users } from 'lucide-react';

const ClientGroup = () => {
  const [isModalOpen, setIsModalOpen] = useState(true); // Keep open initially to match screenshot
  
  const groups = [
    { id: 1, name: 'DUKAN', createdAt: '10 Jan 2025' },
    { id: 2, name: 'ROFIQ', createdAt: '29 Jun 2024' },
    { id: 3, name: 'NAMMBER OFF', createdAt: '10 Jun 2024' },
    { id: 4, name: 'LOON', createdAt: '30 Apr 2024' },
    { id: 5, name: 'JHENIDAH', createdAt: '23 Apr 2024' },
    { id: 6, name: 'BABRA', createdAt: '23 Apr 2024' },
    { id: 7, name: 'RAYGRAM', createdAt: '23 Apr 2024' },
    { id: 8, name: 'NISCINTO PUR', createdAt: '23 Apr 2024' },
    { id: 9, name: 'CAPALI', createdAt: '23 Apr 2024' },
    { id: 10, name: 'BESHAYKHALE', createdAt: '23 Apr 2024' },
    { id: 11, name: 'POUROSHOVA', createdAt: '23 Apr 2024' },
    { id: 12, name: 'NOLDANGA ROAD', createdAt: '23 Apr 2024' },
    { id: 13, name: 'KEYABAGAN', createdAt: '23 Apr 2024' },
    { id: 14, name: 'DHAKALE PARA', createdAt: '23 Apr 2024' },
    { id: 15, name: 'FOYLA', createdAt: '23 Apr 2024' },
    { id: 16, name: 'BIVINNO', createdAt: '23 Apr 2024' },
    { id: 17, name: 'AKTERPUR', createdAt: '23 Apr 2024' },
    { id: 18, name: 'DOKAN', createdAt: '23 Apr 2024' },
    { id: 19, name: 'ROGHUNATH PUR', createdAt: '23 Apr 2024' },
    { id: 20, name: 'SOT', createdAt: '23 Apr 2024' },
    { id: 21, name: 'KOLA BAZAR', createdAt: '23 Apr 2024' },
    { id: 22, name: 'BAROBAZAR', createdAt: '23 Apr 2024' },
  ];

  return (
    <div className="dashboard-content" style={{ position: 'relative' }}>
      <div className="chart-card">
        {/* Header */}
        <div className="card-header">
          <h2 className="card-title" style={{ textTransform: 'none', fontSize: '20px' }}>Client Group</h2>
          <div className="card-actions">
            <button className="btn btn-outline" style={{ padding: '6px 12px', background: '#718096', color: 'white' }}>
              <List size={14} /> Client List
            </button>
            <button className="btn btn-primary" style={{ padding: '6px 12px', background: 'var(--success)' }} onClick={() => setIsModalOpen(true)}>
              <Plus size={14} /> Group Add
            </button>
          </div>
        </div>

        {/* Table Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ fontSize: '14px', color: 'var(--text-main)' }}>
            Show 
            <select style={{ margin: '0 8px', padding: '4px', border: '1px solid var(--secondary)', borderRadius: '4px' }}>
              <option>50</option>
            </select>
            entries
          </div>
          <div style={{ display: 'flex', gap: '4px' }}>
            <button className="btn" style={{ background: '#3b82f6', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px' }}>Excel</button>
            <button className="btn" style={{ background: '#3b82f6', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px' }}>CSV</button>
            <button className="btn" style={{ background: '#3b82f6', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px' }}>PDF</button>
            <button className="btn" onClick={window.print} style={{ background: '#3b82f6', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px' }}><Printer size={14} style={{ marginRight: '4px' }} /> Print</button>
            <button className="btn" style={{ background: '#3b82f6', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px' }}><RotateCcw size={14} style={{ marginRight: '4px' }} /> Reset</button>
            <button className="btn" style={{ background: '#3b82f6', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px' }}>Reload</button>
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto', border: '1px solid var(--secondary)', borderRadius: '8px' }}>
          <table className="custom-table">
            <thead style={{ background: '#718096', color: 'white' }}>
              <tr>
                <th width="80" style={{ textAlign: 'center' }}>ID NO <span style={{ opacity: 0.5, fontSize: '8px', verticalAlign: 'middle' }}>▼</span></th>
                <th>NAME <span style={{ opacity: 0.5, fontSize: '8px', verticalAlign: 'middle' }}>▼</span></th>
                <th>CREATED AT <span style={{ opacity: 0.5, fontSize: '8px', verticalAlign: 'middle' }}>▼</span></th>
                <th width="100" style={{ textAlign: 'center' }}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {groups.map((group) => (
                <tr key={group.id} style={{ background: group.id % 2 === 0 ? '#f8fafc' : 'white' }}>
                  <td style={{ textAlign: 'center', padding: '8px' }}>{group.id}</td>
                  <td style={{ padding: '8px', textAlign: 'center' }}>{group.name}</td>
                  <td style={{ padding: '8px' }}>{group.createdAt}</td>
                  <td style={{ padding: '8px', textAlign: 'center' }}>
                    <button style={{ background: '#0ea5e9', color: 'white', border: 'none', padding: '6px', borderRadius: '4px', cursor: 'pointer', marginRight: '4px' }}>
                      <Edit size={14} />
                    </button>
                    <button style={{ background: '#ef4444', color: 'white', border: 'none', padding: '6px', borderRadius: '4px', cursor: 'pointer' }}>
                      <Trash2 size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Overlay */}
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
          zIndex: 1000
        }}>
          <div style={{
            background: 'white',
            borderRadius: '8px',
            width: '500px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            overflow: 'hidden'
          }}>
            {/* Modal Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', borderBottom: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-main)' }}>Add New Client Group</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#94a3b8' }}
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Modal Body */}
            <div style={{ padding: '24px' }}>
              <div className="form-group" style={{ position: 'relative' }}>
                {/* Custom Label overlay matching screenshot */}
                <div style={{ 
                  position: 'absolute', 
                  top: '-12px', 
                  left: '12px', 
                  background: '#0ea5e9', 
                  color: 'white', 
                  padding: '2px 8px', 
                  borderRadius: '4px', 
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  zIndex: 1
                }}>
                  <Users size={12} /> Group Name
                </div>
                <div className="form-input" style={{ height: '56px' }}>
                  <input type="text" style={{ paddingLeft: '8px' }} />
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', padding: '16px 24px', borderTop: '1px solid #e2e8f0' }}>
              <button className="btn" style={{ background: 'var(--success)', color: 'white', padding: '8px 16px', borderRadius: '4px', fontWeight: '500' }}>
                Add Group
              </button>
              <button className="btn" style={{ background: '#ef4444', color: 'white', padding: '8px 16px', borderRadius: '4px', fontWeight: '500' }} onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientGroup;
