import React, { useState } from 'react';
import { ArrowLeft, Users, Plus, PlaySquare, Search, Calendar, FileSpreadsheet, Printer, RotateCcw, ChevronDown } from 'lucide-react';

const ClientList = () => {
  const [activeAction, setActiveAction] = useState(null);

  const toggleAction = (id) => {
    if (activeAction === id) {
      setActiveAction(null);
    } else {
      setActiveAction(id);
    }
  };

  const clients = [
    {
      id: 1,
      details: { name: 'C.CUSTOMER', phone: '01,', address: 'ALL', status: 'Activated', createdAt: '17 Feb 2024' },
      stats: { prevDue: '0.00', bill: '30434', totalBill: '30434', receive: '30434', salesReturn: '0', moneyReturn: '0', due: '0', date: '' }
    },
    {
      id: 2,
      details: { name: 'JAKIR MAMA', phone: '01912711587,', group: 'ARPARA', address: 'GRIL PAMP', status: 'Activated', createdAt: '22 Apr 2024' },
      stats: { prevDue: '3220.00', bill: '0', totalBill: '3220', receive: '0', salesReturn: '0', moneyReturn: '0', due: '3220', date: '15/03/2025' }
    },
    {
      id: 3,
      details: { name: 'JAKIR NANA', phone: '01712714388,', group: 'ARPARA', address: 'AYSHA PAMP', status: 'Activated', createdAt: '22 Apr 2024' },
      stats: { prevDue: '3350.00', bill: '0', totalBill: '3350', receive: '0', salesReturn: '0', moneyReturn: '0', due: '3350', date: '15/02/2025' }
    },
    {
      id: 4,
      details: { name: 'MASUD MASTER', phone: '01717287080, 01751197447', group: 'ARPARA', address: 'ARPARA', status: 'Activated', createdAt: '22 Apr 2024' },
      stats: { prevDue: '10732.00', bill: '0', totalBill: '10732', receive: '0', salesReturn: '0', moneyReturn: '0', due: '10732', date: '27/02/2025' }
    }
  ];

  return (
    <div className="dashboard-content">
      <div className="chart-card">
        {/* Header */}
        <div className="card-header">
          <h2 className="card-title">CUSTOMER LIST</h2>
          <div className="card-actions">
            <button className="btn btn-outline" style={{ padding: '6px 12px', background: '#718096', color: 'white' }}>
              <ArrowLeft size={14} /> Go Back
            </button>
            <button className="btn btn-outline" style={{ padding: '6px 12px', background: '#718096', color: 'white' }}>
              <Users size={14} /> Client Group
            </button>
            <button className="btn btn-primary" style={{ padding: '6px 12px', background: 'var(--success)' }}>
              <Plus size={14} /> Add New
            </button>
            <button className="btn btn-outline" style={{ padding: '6px 12px', background: 'white', color: 'red', border: '1px solid #e2e8f0' }}>
              <PlaySquare size={14} /> YouTube
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="form-grid" style={{ gridTemplateColumns: '1fr 1.5fr 1.5fr 1fr', marginBottom: '24px', alignItems: 'flex-end' }}>
          <div className="form-group">
            <label style={{ fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>Search All</label>
            <div className="form-input">
              <Search size={16} className="input-icon" />
              <input type="text" placeholder="Search All" />
            </div>
          </div>
          
          <div className="form-group">
            <label style={{ fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>Search By Client Group</label>
            <div className="form-input">
              <select>
                <option>Select client group</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label style={{ fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>Search By Date</label>
            <div style={{ display: 'flex', gap: '12px' }}>
              <div className="form-input" style={{ flex: 1 }}>
                <input type="text" placeholder="DD/MM/YYYY" />
              </div>
              <div className="form-input" style={{ flex: 1 }}>
                <input type="text" placeholder="DD/MM/YYYY" />
              </div>
            </div>
          </div>

          <div className="form-group">
            <button className="btn btn-outline" style={{ height: '48px', width: '100%', background: '#718096', color: 'white', justifyContent: 'center' }}>
              Clear Filter
            </button>
          </div>
        </div>

        {/* Table Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ fontSize: '14px', color: 'var(--text-main)' }}>
            Show 
            <select style={{ margin: '0 8px', padding: '4px', border: '1px solid var(--secondary)', borderRadius: '4px' }}>
              <option>25</option>
            </select>
            entries
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn" style={{ background: '#4318ff', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px' }}>
              <FileSpreadsheet size={14} style={{ marginRight: '6px' }} /> Excel
            </button>
            <button className="btn" onClick={() => window.print()} style={{ background: '#3b82f6', color: 'white', padding: '8px 16px', fontSize: '13px', borderRadius: '4px' }}>
              <Printer size={14} style={{ marginRight: '6px' }} /> Print
            </button>
            <button className="btn" style={{ background: '#4318ff', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px' }}>
              <RotateCcw size={14} style={{ marginRight: '6px' }} /> Reset
            </button>
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto', border: '1px solid var(--secondary)', borderRadius: '8px' }}>
          <table className="custom-table">
            <thead>
              <tr>
                <th width="50">ID NO</th>
                <th width="150">IMAGE</th>
                <th width="300">CLIENT DETAILS</th>
                <th>DETAILS</th>
                <th width="100">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id}>
                  <td style={{ verticalAlign: 'top', paddingTop: '16px' }}>{client.id}</td>
                  
                  <td style={{ verticalAlign: 'top', paddingTop: '16px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '80px', height: '80px', borderRadius: '50%', border: '1px dashed #cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                         <span style={{ color: '#cbd5e1', fontSize: '24px' }}>X</span>
                      </div>
                      <div style={{ display: 'flex' }}>
                        <button style={{ background: '#3b82f6', color: 'white', border: 'none', padding: '4px 8px', fontSize: '12px', borderTopLeftRadius: '4px', borderBottomLeftRadius: '4px', cursor: 'pointer' }}>Choose a file</button>
                        <button style={{ background: '#64748b', color: 'white', border: 'none', padding: '4px 8px', fontSize: '12px', borderTopRightRadius: '4px', borderBottomRightRadius: '4px', cursor: 'pointer' }}>Save</button>
                      </div>
                    </div>
                  </td>
                  
                  <td style={{ verticalAlign: 'top', paddingTop: '16px', fontSize: '13px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '80px 10px 1fr', gap: '4px', marginBottom: '4px' }}>
                      <div style={{ fontWeight: '600' }}>Name</div><div>:</div><div>{client.details.name}</div>
                      <div style={{ fontWeight: '600' }}>Phone</div><div>:</div><div>{client.details.phone}</div>
                      {client.details.group && <><div style={{ fontWeight: '600' }}>Client Group</div><div>:</div><div>{client.details.group}</div></>}
                      <div style={{ fontWeight: '600' }}>Address</div><div>:</div><div>{client.details.address}</div>
                      <div style={{ fontWeight: '600' }}>Status</div><div>:</div><div>{client.details.status}</div>
                      <div style={{ fontWeight: '600' }}>Created At</div><div>:</div><div>{client.details.createdAt}</div>
                    </div>
                  </td>
                  
                  <td style={{ verticalAlign: 'top', padding: '0' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
                      <tbody>
                        <tr><td style={{ borderBottom: '1px solid #e2e8f0', padding: '6px 12px' }}>Previous Due</td><td style={{ borderBottom: '1px solid #e2e8f0', padding: '6px 12px', borderLeft: '1px solid #e2e8f0' }}>{client.stats.prevDue}</td></tr>
                        <tr><td style={{ borderBottom: '1px solid #e2e8f0', padding: '6px 12px' }}>Bill</td><td style={{ borderBottom: '1px solid #e2e8f0', padding: '6px 12px', borderLeft: '1px solid #e2e8f0' }}>{client.stats.bill}</td></tr>
                        <tr><td style={{ borderBottom: '1px solid #e2e8f0', padding: '6px 12px' }}>Total Bill</td><td style={{ borderBottom: '1px solid #e2e8f0', padding: '6px 12px', borderLeft: '1px solid #e2e8f0' }}>{client.stats.totalBill}</td></tr>
                        <tr><td style={{ borderBottom: '1px solid #e2e8f0', padding: '6px 12px' }}>Receive</td><td style={{ borderBottom: '1px solid #e2e8f0', padding: '6px 12px', borderLeft: '1px solid #e2e8f0' }}>{client.stats.receive}</td></tr>
                        <tr><td style={{ borderBottom: '1px solid #e2e8f0', padding: '6px 12px' }}>Sales Return</td><td style={{ borderBottom: '1px solid #e2e8f0', padding: '6px 12px', borderLeft: '1px solid #e2e8f0' }}>{client.stats.salesReturn}</td></tr>
                        <tr><td style={{ borderBottom: '1px solid #e2e8f0', padding: '6px 12px' }}>Money Return</td><td style={{ borderBottom: '1px solid #e2e8f0', padding: '6px 12px', borderLeft: '1px solid #e2e8f0' }}>{client.stats.moneyReturn}</td></tr>
                        <tr><td style={{ borderBottom: '1px solid #e2e8f0', padding: '6px 12px' }}><span style={{ background: '#ef4444', color: 'white', padding: '2px 6px', borderRadius: '4px' }}>Due</span></td><td style={{ borderBottom: '1px solid #e2e8f0', padding: '6px 12px', borderLeft: '1px solid #e2e8f0', fontWeight: 'bold' }}>{client.stats.due}</td></tr>
                        <tr><td style={{ padding: '6px 12px' }}>বাকি সংগ্রহের তারিখ</td><td style={{ padding: '6px 12px', borderLeft: '1px solid #e2e8f0' }}><Calendar size={12} style={{ marginRight: '4px', display: 'inline-block', verticalAlign: 'middle' }}/> {client.stats.date}</td></tr>
                      </tbody>
                    </table>
                  </td>
                  
                  <td style={{ verticalAlign: 'top', paddingTop: '16px', position: 'relative' }}>
                    <button 
                      onClick={() => toggleAction(client.id)}
                      className="btn" 
                      style={{ background: '#05cd99', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px', width: '100%', justifyContent: 'space-between' }}
                    >
                      Action <ChevronDown size={14} />
                    </button>
                    
                    {activeAction === client.id && (
                      <div style={{ position: 'absolute', top: '50px', right: '16px', background: 'white', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', borderRadius: '8px', zIndex: 10, width: '160px', padding: '8px 0', border: '1px solid #e2e8f0' }}>
                        <div style={{ padding: '8px 16px', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }} className="action-item"><span style={{ width: '14px', textAlign: 'center' }}>🚫</span> Deactive</div>
                        <div style={{ padding: '8px 16px', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }} className="action-item"><span style={{ width: '14px', textAlign: 'center' }}>👁</span> View</div>
                        <div style={{ padding: '8px 16px', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }} className="action-item"><span style={{ width: '14px', textAlign: 'center' }}>⬇️</span> Receive</div>
                        <div style={{ padding: '8px 16px', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }} className="action-item"><span style={{ width: '14px', textAlign: 'center' }}>✏️</span> Edit</div>
                        <div style={{ padding: '8px 16px', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }} className="action-item"><span style={{ width: '14px', textAlign: 'center' }}>🗑</span> Delete</div>
                        <div style={{ padding: '8px 16px', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }} className="action-item"><span style={{ width: '14px', textAlign: 'center' }}>📄</span> View Statement</div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default ClientList;
