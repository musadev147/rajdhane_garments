import React from 'react';
import { RotateCcw, Printer, Play, Plus, ArrowLeft, Layers } from 'lucide-react';

const LoanClientList = () => {
  // Mock data to match the screenshot
  const clients = [
    {
      id: 1,
      name: 'MONTU VI / VABI',
      phone: '01,',
      group: 'LOON',
      address: 'DULAL MUNDIYA',
      status: 'Activated',
      createdAt: '13 Apr 2025'
    },
    {
      id: 2,
      name: 'BRAC DPS',
      phone: '01,',
      group: '',
      address: '',
      status: 'Activated',
      createdAt: '15 Mar 2025'
    },
    {
      id: 3,
      name: 'CASH SOT',
      phone: ', ',
      group: '',
      address: '',
      status: 'Activated',
      createdAt: '23 Jan 2025'
    },
    {
      id: 4,
      name: 'KANIZ VABI // JOYNAL',
      phone: '01986458895,',
      group: 'LOON',
      address: '',
      status: 'Activated',
      createdAt: '10 Jan 2025'
    }
  ];

  return (
    <div className="premium-card">
      <div className="premium-header">
        <h2 className="premium-title" style={{ textTransform: 'uppercase' }}>Customer List</h2>
        <div className="header-actions">
          <button className="btn-gray-outline">
            <RotateCcw size={16} /> Go Back
          </button>
          <button className="btn-gray-outline">
            <Layers size={16} /> Client Group
          </button>
          <button className="btn-green">
            <Plus size={16} /> Add New
          </button>
          <button className="btn-youtube">
            <div style={{ display: 'flex', alignItems: 'center', background: '#ff0000', color: 'white', padding: '6px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold' }}>
              <Play size={16} fill="white" style={{ marginRight: '6px' }} /> YouTube
            </div>
          </button>
        </div>
      </div>

      <div className="premium-body">
        
        {/* Filters */}
        <div className="filter-section" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.5fr 1fr', gap: '16px', marginBottom: '24px' }}>
          <div>
            <label className="filter-label" style={{ display: 'block', marginBottom: '8px' }}>Search All</label>
            <input type="text" className="input-outline" placeholder="Search All" style={{ width: '100%', height: '40px', padding: '0 12px', border: '1px solid #0ea5e9', borderRadius: '4px' }} />
          </div>
          <div>
            <label className="filter-label" style={{ display: 'block', marginBottom: '8px' }}>Search By Client Group</label>
            <select className="input-outline" style={{ width: '100%', height: '40px', padding: '0 12px', border: '1px solid #0ea5e9', borderRadius: '4px', backgroundColor: 'transparent', color: '#000' }}>
              <option value="">Select client group</option>
            </select>
          </div>
          <div>
            <label className="filter-label" style={{ display: 'block', marginBottom: '8px' }}>Search By Date</label>
            <div style={{ display: 'flex' }}>
              <input type="date" className="input-outline" style={{ borderRight: 'none', borderRadius: '4px 0 0 4px', width: '50%', height: '40px', padding: '0 12px', border: '1px solid #d1d5db' }} />
              <input type="date" className="input-outline" style={{ borderRadius: '0 4px 4px 0', width: '50%', height: '40px', padding: '0 12px', border: '1px solid #d1d5db' }} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <button className="btn-gray-outline" style={{ height: '40px', width: '100%', justifyContent: 'center', background: '#64748b', fontSize: '16px' }}>
              Clear Filter
            </button>
          </div>
        </div>

        {/* Table Controls */}
        <div className="table-controls" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div className="table-controls-left" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#000' }}>
            Show 
            <select className="input-outline" style={{ padding: '4px 8px', borderRadius: '4px', border: '1px solid #d1d5db' }}>
              <option value="25">25</option>
            </select> 
            entries
          </div>
          <div className="table-controls-right" style={{ display: 'flex', gap: '4px' }}>
            <button className="btn-blue" style={{ padding: '6px 12px', fontSize: '12px', fontWeight: 'bold' }}>Excel</button>
            <button className="btn-blue" style={{ padding: '6px 12px', fontSize: '12px', fontWeight: 'bold' }} onClick={() => window.print()}><Printer size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }}/> Print</button>
            <button className="btn-blue" style={{ padding: '6px 12px', fontSize: '12px', fontWeight: 'bold' }}><RotateCcw size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }}/> Reset</button>
          </div>
        </div>

        {/* Main Data Table */}
        <div style={{ overflowX: 'auto' }}>
          <table className="custom-table" style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #d1d5db' }}>
            <thead>
              <tr>
                <th style={{ background: '#9ca3af', color: 'white', padding: '12px', textAlign: 'center', width: '60px', borderRight: '1px solid #d1d5db' }}>ID NO</th>
                <th style={{ background: '#9ca3af', color: 'white', padding: '12px', textAlign: 'center', width: '180px', borderRight: '1px solid #d1d5db' }}>IMAGE</th>
                <th style={{ background: '#9ca3af', color: 'white', padding: '12px', textAlign: 'left', borderRight: '1px solid #d1d5db' }}>CLIENT DETAILS</th>
                <th style={{ background: '#9ca3af', color: 'white', padding: '12px', textAlign: 'left', width: '280px', borderRight: '1px solid #d1d5db' }}>DETAILS</th>
                <th style={{ background: '#9ca3af', color: 'white', padding: '12px', textAlign: 'center', width: '100px' }}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id} style={{ borderBottom: '1px solid #d1d5db' }}>
                  
                  {/* ID Column */}
                  <td style={{ padding: '16px', textAlign: 'center', borderRight: '1px solid #d1d5db', verticalAlign: 'top' }}>
                    {client.id}
                  </td>
                  
                  {/* Image Column */}
                  <td style={{ padding: '16px', textAlign: 'center', borderRight: '1px solid #d1d5db', verticalAlign: 'top' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ width: '90px', height: '90px', borderRadius: '50%', border: '1px solid #d1d5db', marginBottom: '8px', background: '#f8fafc', position: 'relative' }}>
                        {/* Placeholder inner circle */}
                        <div style={{ position: 'absolute', top: '10%', left: '10%', width: '80%', height: '80%', borderRadius: '50%', border: '1px solid #e2e8f0' }}></div>
                        <div style={{ position: 'absolute', top: '20%', left: '20%', width: '60%', height: '60%', borderRadius: '50%', border: '1px solid #e2e8f0' }}></div>
                      </div>
                      <div style={{ display: 'flex' }}>
                        <button style={{ background: '#3b82f6', color: 'white', border: 'none', padding: '4px 8px', fontSize: '11px', borderRadius: '4px 0 0 4px', cursor: 'pointer' }}>Choose a</button>
                        <button style={{ background: '#64748b', color: 'white', border: 'none', padding: '4px 8px', fontSize: '11px', borderRadius: '0 4px 4px 0', cursor: 'pointer' }}>Save</button>
                      </div>
                    </div>
                  </td>
                  
                  {/* Client Details Column */}
                  <td style={{ padding: '16px', borderRight: '1px solid #d1d5db', verticalAlign: 'top' }}>
                    <div style={{ fontSize: '13px', lineHeight: '1.6', color: '#000', fontWeight: '600' }}>
                      <div style={{ display: 'flex' }}><span style={{ width: '90px' }}>Name</span><span>: {client.name}</span></div>
                      <div style={{ display: 'flex' }}><span style={{ width: '90px' }}>Phone</span><span>: {client.phone}</span></div>
                      {client.group !== undefined && <div style={{ display: 'flex' }}><span style={{ width: '90px' }}>Client Group</span><span>: {client.group}</span></div>}
                      {client.address !== undefined && <div style={{ display: 'flex' }}><span style={{ width: '90px' }}>Address</span><span>: {client.address}</span></div>}
                      <div style={{ display: 'flex' }}><span style={{ width: '90px' }}>Status</span><span>: {client.status}</span></div>
                      <div style={{ display: 'flex' }}><span style={{ width: '90px' }}>Created At</span><span>: {client.createdAt}</span></div>
                    </div>
                  </td>

                  {/* Details Column (Nested Table) */}
                  <td style={{ padding: '16px', borderRight: '1px solid #d1d5db', verticalAlign: 'top' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #6b7280', fontSize: '13px', color: '#000', fontWeight: '500' }}>
                      <tbody>
                        <tr>
                          <td style={{ border: '1px solid #6b7280', padding: '4px 8px', width: '65%' }}>Previous Due</td>
                          <td style={{ border: '1px solid #6b7280', padding: '4px 8px' }}>0.00 ৳</td>
                        </tr>
                        <tr>
                          <td style={{ border: '1px solid #6b7280', padding: '4px 8px' }}>Loan Payment</td>
                          <td style={{ border: '1px solid #6b7280', padding: '4px 8px' }}>0 ৳</td>
                        </tr>
                        <tr>
                          <td style={{ border: '1px solid #6b7280', padding: '4px 8px' }}>Loan Receive</td>
                          <td style={{ border: '1px solid #6b7280', padding: '4px 8px' }}>0 ৳</td>
                        </tr>
                        <tr>
                          <td style={{ border: '1px solid #6b7280', padding: '4px 8px', fontWeight: '700' }}>Balance</td>
                          <td style={{ border: '1px solid #6b7280', padding: '4px 8px', fontWeight: '700' }}>0.00 ৳</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>

                  {/* Action Column */}
                  <td style={{ padding: '16px', textAlign: 'center', verticalAlign: 'middle' }}>
                    <button className="btn-green" style={{ padding: '6px 12px', fontSize: '13px', margin: '0 auto', display: 'flex', alignItems: 'center' }}>
                      Action <span style={{ fontSize: '10px', marginLeft: '4px' }}>▼</span>
                    </button>
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

export default LoanClientList;
