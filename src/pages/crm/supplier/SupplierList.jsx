import React, { useState } from 'react';
import { ArrowLeft, Users, Plus, PlaySquare, Search, FileSpreadsheet, Printer, RotateCcw, ChevronDown, Eye, Edit, Trash2, DollarSign, FileText, FileBarChart } from 'lucide-react';

const SupplierList = () => {
  const [activeAction, setActiveAction] = useState(null);

  const toggleAction = (id) => {
    if (activeAction === id) {
      setActiveAction(null);
    } else {
      setActiveAction(id);
    }
  };

  const suppliers = [
    {
      id: 1,
      name: 'KSB PANT',
      phone: '0,',
      group: 'GENTS',
      address: 'AZAHAR MARKET BONGO',
      bankName: '',
      accountNumber: '',
      accountDesc: '',
      account: {
        previousDue: '0.00',
        bill: '0',
        totalBill: '0',
        salesReturn: '0',
        paid: '0',
        due: '0'
      }
    },
    {
      id: 2,
      name: 'TOP CITY 3PCS',
      phone: '01,',
      group: 'THREE PEACE',
      address: 'LAWON TOWER',
      bankName: '',
      accountNumber: '',
      accountDesc: '',
      account: {
        previousDue: '0.00',
        bill: '0',
        totalBill: '0',
        salesReturn: '0',
        paid: '0',
        due: '0'
      }
    },
    {
      id: 3,
      name: 'ALLAR DAN PLAZU',
      phone: '01954938926,',
      group: '',
      address: 'BONGO ISLAMIYA //ROBI 01954938926',
      bankName: '',
      accountNumber: '',
      accountDesc: '',
      account: {
        previousDue: '0',
        bill: '0',
        totalBill: '0',
        salesReturn: '0',
        paid: '0',
        due: '0'
      }
    }
  ];

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px' }}>
      <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 className="card-title">SUPPLIER LIST</h2>
        <div className="card-actions">
          <button className="btn btn-outline" style={{ padding: '6px 12px', background: '#718096', color: 'white' }}>
            <ArrowLeft size={14} /> Go Back
          </button>
          <button className="btn btn-outline" style={{ padding: '6px 12px', background: '#718096', color: 'white' }}>
            <Users size={14} /> Supplier Group
          </button>
          <button className="btn btn-primary" style={{ padding: '6px 12px', background: 'var(--success)' }}>
            <Plus size={14} /> Add
          </button>
          <button className="btn btn-primary" style={{ padding: '6px 12px', background: '#ef4444' }}>
            <span style={{ fontWeight: 'bold' }}>▶ YouTube</span>
          </button>
        </div>
      </div>

      <div className="card-body">
        {/* Filters */}
        <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr 1fr', marginBottom: '24px', alignItems: 'flex-end', gap: '16px' }}>
          <div className="form-group">
            <label style={{ fontSize: '12px', fontWeight: '600', marginBottom: '8px', color: 'var(--primary)' }}>Search All</label>
            <div className="form-input">
              <input type="text" placeholder="Search All" />
            </div>
          </div>

          <div className="form-group">
            <label style={{ fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>Search By Supplier Group</label>
            <div className="form-input">
              <select>
                <option>Select a group</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label style={{ fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>Search By Date</label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div className="form-input" style={{ flex: 1, padding: '0 8px' }}>
                <input type="text" placeholder="DD/MM/YYYY" style={{ color: '#94a3b8' }} />
              </div>
              <div className="form-input" style={{ flex: 1, padding: '0 8px' }}>
                <input type="text" placeholder="DD/MM/YYYY" style={{ color: '#94a3b8' }} />
              </div>
            </div>
          </div>

          <div className="form-group">
            <button className="btn btn-outline" style={{ height: '48px', width: '100%', background: '#718096', color: 'white', justifyContent: 'center' }}>
              Clear Filter
            </button>
          </div>
        </div>

        {/* Total Due Label */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#000' }}>Total Supplier Due: 6957663</h3>
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
            <button className="btn" style={{ background: '#3b82f6', color: 'white', padding: '8px 16px', fontSize: '13px', borderRadius: '4px' }}>
              <FileSpreadsheet size={16} style={{ marginRight: '6px' }} /> Excel
            </button>
            <button className="btn" onClick={() => window.print()} style={{ background: '#3b82f6', color: 'white', padding: '8px 16px', fontSize: '13px', borderRadius: '4px' }}>
              <Printer size={16} style={{ marginRight: '6px' }} /> Print
            </button>
            <button className="btn" style={{ background: '#3b82f6', color: 'white', padding: '8px 16px', fontSize: '13px', borderRadius: '4px' }}>
              <RotateCcw size={16} style={{ marginRight: '6px' }} /> Reset
            </button>
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto', border: '1px solid var(--secondary)', borderRadius: '8px' }}>
          <table className="custom-table" style={{ width: '100%', minWidth: '1000px' }}>
            <thead>
              <tr style={{ background: '#718096', color: 'white' }}>
                <th width="50" style={{ textAlign: 'center' }}>ID NO ↕</th>
                <th width="400">SUPPLIER DETAILS</th>
                <th width="250">ACCOUNT ↕</th>
                <th width="100" style={{ textAlign: 'center' }}>ACTION ↕</th>
              </tr>
            </thead>
            <tbody>
              {suppliers.map((supplier) => (
                <tr key={supplier.id} style={{ background: 'white' }}>
                  <td style={{ verticalAlign: 'top', paddingTop: '16px', textAlign: 'center' }}>{supplier.id}</td>
                  <td style={{ verticalAlign: 'top', paddingTop: '16px', fontSize: '13px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <tbody>
                        <tr>
                          <td style={{ width: '120px', fontWeight: '700', padding: '2px 0', border: 'none' }}>Name</td>
                          <td style={{ padding: '2px 0', border: 'none' }}>: {supplier.name}</td>
                        </tr>
                        <tr>
                          <td style={{ fontWeight: '700', padding: '2px 0', border: 'none' }}>Phone</td>
                          <td style={{ padding: '2px 0', border: 'none' }}>: {supplier.phone}</td>
                        </tr>
                        <tr>
                          <td style={{ fontWeight: '700', padding: '2px 0', border: 'none' }}>Supplier Group</td>
                          <td style={{ padding: '2px 0', border: 'none' }}>: {supplier.group}</td>
                        </tr>
                        <tr>
                          <td style={{ fontWeight: '700', padding: '2px 0', border: 'none' }}>Address</td>
                          <td style={{ padding: '2px 0', border: 'none' }}>: {supplier.address}</td>
                        </tr>
                        <tr>
                          <td style={{ padding: '8px 0 2px', border: 'none', color: '#475569' }}>Bank Name: {supplier.bankName}</td>
                          <td style={{ border: 'none' }}></td>
                        </tr>
                        <tr>
                          <td style={{ padding: '2px 0', border: 'none', color: '#475569' }}>Account Number: {supplier.accountNumber}</td>
                          <td style={{ border: 'none' }}></td>
                        </tr>
                        <tr>
                          <td style={{ padding: '2px 0', border: 'none', color: '#475569' }}>Account Description: {supplier.accountDesc}</td>
                          <td style={{ border: 'none' }}></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td style={{ verticalAlign: 'top', paddingTop: '16px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e2e8f0', fontSize: '12px' }}>
                      <tbody>
                        <tr>
                          <td style={{ padding: '4px 8px', border: '1px solid #e2e8f0' }}>Previous Due</td>
                          <td style={{ padding: '4px 8px', border: '1px solid #e2e8f0' }}>{supplier.account.previousDue}</td>
                        </tr>
                        <tr>
                          <td style={{ padding: '4px 8px', border: '1px solid #e2e8f0' }}>Bill</td>
                          <td style={{ padding: '4px 8px', border: '1px solid #e2e8f0' }}>{supplier.account.bill}</td>
                        </tr>
                        <tr>
                          <td style={{ padding: '4px 8px', border: '1px solid #e2e8f0' }}>Total Bill</td>
                          <td style={{ padding: '4px 8px', border: '1px solid #e2e8f0' }}>{supplier.account.totalBill}</td>
                        </tr>
                        <tr>
                          <td style={{ padding: '4px 8px', border: '1px solid #e2e8f0' }}>SalesReturn</td>
                          <td style={{ padding: '4px 8px', border: '1px solid #e2e8f0' }}>{supplier.account.salesReturn}</td>
                        </tr>
                        <tr>
                          <td style={{ padding: '4px 8px', border: '1px solid #e2e8f0' }}>Paid</td>
                          <td style={{ padding: '4px 8px', border: '1px solid #e2e8f0' }}>{supplier.account.paid}</td>
                        </tr>
                        <tr>
                          <td style={{ padding: '4px 8px', border: '1px solid #e2e8f0', background: '#718096', color: 'white' }}>Due</td>
                          <td style={{ padding: '4px 8px', border: '1px solid #e2e8f0' }}>{supplier.account.due}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td style={{ verticalAlign: 'top', paddingTop: '32px', position: 'relative', textAlign: 'center' }}>
                    <button 
                      onClick={() => toggleAction(supplier.id)}
                      className="btn" 
                      style={{ background: 'var(--success)', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                    >
                      Action <ChevronDown size={14} />
                    </button>

                    {activeAction === supplier.id && (
                      <div style={{ 
                        position: 'absolute', 
                        top: '64px', 
                        right: '50%',
                        transform: 'translateX(50%)',
                        background: 'white', 
                        border: '1px solid var(--secondary)', 
                        borderRadius: '8px', 
                        boxShadow: 'var(--shadow-md)', 
                        width: '160px',
                        zIndex: 100,
                        textAlign: 'left'
                      }}>
                        <div className="action-item" style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '13px' }}><Eye size={14} /> View</div>
                        <div className="action-item" style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '13px' }}><Edit size={14} /> Edit</div>
                        <div className="action-item" style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '13px' }}><Trash2 size={14} /> Delete</div>
                        <div className="action-item" style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '13px' }}><DollarSign size={14} /> Payment</div>
                        <div className="action-item" style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '13px' }}><FileText size={14} /> Payment Report</div>
                        <div className="action-item" style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '13px' }}><FileBarChart size={14} /> Purchase Report</div>
                        <div className="action-item" style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '13px' }}><FileText size={14} /> Statement</div>
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

export default SupplierList;
