import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { Plus, Play, Printer, RotateCcw, Edit, Trash2, Lock, Settings, List, Users, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExpenseList = () => {
  const { t } = useTranslation();

  const [editingExpense, setEditingExpense] = useState(null);

  const mockData = [
    { sl: 1, date: '30 Aug 2026', receiptFor: '', idNo: '183648', category: 'DOKAN KOROJ', account: 'TOTAL BALENCE', chequeNo: '', desc: 'BVNNO', type: 'Cost', bank: '---', amount: '1300.00' },
    { sl: 2, date: '30 Aug 2026', receiptFor: 'C.CASTOMER', idNo: '183647', category: 'MALL FEROT', account: 'TOTAL BALENCE', chequeNo: '', desc: '', type: 'Money Return', bank: '---', amount: '8555.00' },
    { sl: 3, date: '30 Aug 2026', receiptFor: 'C.CASTOMER', idNo: '183646', category: 'MALL FEROT', account: 'TOTAL BALENCE', chequeNo: '', desc: '', type: 'Money Return', bank: '---', amount: '8555.00' },
    { sl: 4, date: '30 Aug 2026', receiptFor: 'RFL LAGINC', idNo: '183645', category: 'KURAY PEMANT', account: 'TOTAL BALENCE', chequeNo: '', desc: 'RFL TIGIDA', type: 'Supplier Payment', bank: '---', amount: '19000.00' },
    { sl: 5, date: '30 Aug 2026', receiptFor: '25 NASIMA APA', idNo: '183644', category: 'KURAY PEMANT', account: 'TOTAL BALENCE', chequeNo: '', desc: 'NASIMA TIGIDA', type: 'Supplier Payment', bank: '---', amount: '13000.00' },
    { sl: 6, date: '30 Aug 2026', receiptFor: 'ORBIT PRINT', idNo: '183643', category: 'KURAY PEMANT', account: 'TOTAL BALENCE', chequeNo: '', desc: 'ORBIT PRINT MTT PUB TO UCBB', type: 'Supplier Payment', bank: '---', amount: '50000.00' },
  ];

  const getTypeStyle = (type) => {
    switch(type) {
      case 'Cost': return { background: '#ef4444', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold' };
      case 'Money Return': return { background: '#eab308', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold' };
      case 'Supplier Payment': return { background: '#06b6d4', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold' };
      default: return {};
    }
  };

  return (
    <div className="premium-card">
      <div className="premium-body" style={{ padding: '20px 40px 40px' }}>
        <PrintHeader />
        
        {/* Centered Title */}
        <h1 style={{ textAlign: 'center', fontFamily: 'monospace, serif', fontSize: '28px', color: '#111827', margin: '20px 0 40px' }}>Expense List</h1>

        {/* Edit Expense UI Card */}
        {editingExpense && (
          <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '20px', marginBottom: '30px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
                Update Expense | ID No: {editingExpense.idNo}
              </h3>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button style={{ background: '#6b7280', color: 'white', border: 'none', padding: '6px', borderRadius: '4px', cursor: 'pointer' }}>
                  <Settings size={14} />
                </button>
                <button style={{ background: '#9ca3af', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', cursor: 'pointer' }}>
                  <List size={14} /> Client List
                </button>
                <button style={{ background: '#9ca3af', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', cursor: 'pointer' }}>
                  <Users size={14} /> Client Group
                </button>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
              {/* Left Column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="form-group" style={{ position: 'relative', marginBottom: 0 }}>
                  <div style={{ position: 'absolute', top: '-10px', left: '12px', background: '#0ea5e9', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '10px', zIndex: 1, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ fontSize: '12px' }}>📅</span> Date
                  </div>
                  <input type="text" defaultValue={editingExpense.date} style={{ width: '100%', padding: '10px 12px', border: '1px solid #93c5fd', borderRadius: '8px', fontSize: '14px' }} />
                </div>
                
                <div className="form-group" style={{ position: 'relative', marginBottom: 0 }}>
                  <div style={{ position: 'absolute', top: '-10px', left: '12px', background: '#0ea5e9', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '10px', zIndex: 1, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ fontSize: '12px' }}>👤</span> Amount
                  </div>
                  <input type="text" defaultValue={editingExpense.amount} style={{ width: '100%', padding: '10px 12px', border: '1px solid #93c5fd', borderRadius: '8px', fontSize: '14px' }} />
                </div>

                <div className="form-group" style={{ position: 'relative', marginBottom: 0 }}>
                  <div style={{ position: 'absolute', top: '-10px', left: '12px', background: '#0ea5e9', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '10px', zIndex: 1, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ fontSize: '12px' }}>✉️</span> Expense Description in a short note
                  </div>
                  <input type="text" defaultValue={editingExpense.desc} style={{ width: '100%', padding: '10px 12px', border: '1px solid #93c5fd', borderRadius: '8px', fontSize: '14px' }} />
                </div>
              </div>

              {/* Right Column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <div style={{ position: 'relative', flex: 1 }}>
                    <select style={{ width: '100%', padding: '10px 12px', border: '1px solid #93c5fd', borderRadius: '8px', fontSize: '14px', appearance: 'none' }}>
                      <option>{editingExpense.account}</option>
                    </select>
                    <X size={14} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: '#4b5563' }} />
                  </div>
                  <button style={{ background: '#10b981', color: 'white', border: 'none', padding: '10px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Plus size={16} />
                  </button>
                </div>

                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <div style={{ position: 'relative', flex: 1 }}>
                    <select style={{ width: '100%', padding: '10px 12px', border: '1px solid #93c5fd', borderRadius: '8px', fontSize: '14px', appearance: 'none', color: '#6b7280' }}>
                      <option>Select Categories</option>
                      <option value={editingExpense.category}>{editingExpense.category}</option>
                    </select>
                  </div>
                  <button style={{ background: '#10b981', color: 'white', border: 'none', padding: '10px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
              <button style={{ background: '#0ea5e9', color: 'white', border: 'none', padding: '8px 24px', borderRadius: '4px', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer' }}>
                Update Expense
              </button>
              <button onClick={() => setEditingExpense(null)} style={{ background: '#ef4444', color: 'white', border: 'none', padding: '8px 24px', borderRadius: '4px', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer' }}>
                Close
              </button>
            </div>
          </div>
        )}

        {/* Title and Top Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '400', color: '#4b5563', margin: 0 }}>Expense List</h2>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Link to="/account/expense-create" style={{ textDecoration: 'none' }}>
              <button style={{ background: '#10b981', color: 'white', padding: '8px 16px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '6px', border: 'none', fontWeight: '600', cursor: 'pointer' }}>
                <Plus size={16} /> Expense Create
              </button>
            </Link>
            <button style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '4px', padding: '0', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', background: '#ef4444', color: 'white', padding: '6px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold', gap: '6px' }}>
                <Play size={16} fill="white" /> YouTube
              </div>
            </button>
          </div>
        </div>

        {/* Filter Section */}
        <div className="form-grid" style={{ gridTemplateColumns: '1fr 1.5fr 1.5fr 1fr', gap: '16px', marginBottom: '24px', alignItems: 'flex-end' }}>
          
          <div className="form-group" style={{ position: 'relative', marginBottom: 0 }}>
            <div style={{ position: 'absolute', top: '-10px', left: '12px', background: '#3b82f6', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '10px', zIndex: 1 }}>ID Search By</div>
            <div className="form-input floating-label">
              <input type="text" placeholder="ID Search By" style={{ paddingLeft: '8px', width: '100%' }} />
            </div>
          </div>
          
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label style={{ fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>Search By Client</label>
            <div className="form-input floating-label">
              <select style={{ width: '100%' }}>
                <option value="">Select Client</option>
              </select>
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label style={{ fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>Search By Date</label>
            <div style={{ display: 'flex', gap: '12px' }}>
              <div className="form-input floating-label" style={{ flex: 1 }}>
                <input type="date" style={{ width: '100%', color: '#9ca3af' }} />
              </div>
              <div className="form-input floating-label" style={{ flex: 1 }}>
                <input type="date" style={{ width: '100%', color: '#9ca3af' }} />
              </div>
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <button style={{ width: '100%', height: '42px', background: '#6b7280', color: 'white', border: 'none', borderRadius: '4px', fontWeight: '600', cursor: 'pointer' }}>Clear Filter</button>
          </div>
        </div>

        {/* Table Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div className="show-entries" style={{ fontSize: '14px', color: '#4b5563' }}>
            Show 
            <select defaultValue="100" style={{ margin: '0 8px', padding: '4px', borderRadius: '4px', border: '1px solid #d1d5db' }}>
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select> 
            entries
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#3b82f6', color: 'white', padding: '6px 12px', borderRadius: '4px', border: 'none', fontSize: '13px', cursor: 'pointer' }}><Printer size={14} /> Print</button>
            <button style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#3b82f6', color: 'white', padding: '6px 12px', borderRadius: '4px', border: 'none', fontSize: '13px', cursor: 'pointer' }}><RotateCcw size={14} /> Reset</button>
          </div>
        </div>

        {/* Table Section */}
        <div style={{ overflowX: 'auto', border: '1px solid #e5e7eb', borderRadius: '4px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '1300px' }}>
            <thead>
              <tr style={{ background: '#9ca3af', color: 'white', fontSize: '11px' }}>
                <th style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #d1d5db' }}>SL ↕</th>
                <th style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #d1d5db' }}>DATE ↕</th>
                <th style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #d1d5db' }}>RECEIPT FOR ↕</th>
                <th style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #d1d5db' }}>ID NO ↕</th>
                <th style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #d1d5db' }}>CATEGORY ↕</th>
                <th style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #d1d5db' }}>ACCOUNT ↕</th>
                <th style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #d1d5db' }}>CHEQUE NO ↕</th>
                <th style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #d1d5db' }}>DESCRIPTION ↕</th>
                <th style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #d1d5db' }}>TRANSACTION TYPE ↕</th>
                <th style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #d1d5db' }}>BANK ↕</th>
                <th style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #d1d5db' }}>AMOUNT ↕</th>
                <th style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #d1d5db' }}>PRINTABLE ↕</th>
                <th style={{ padding: '12px 8px', textAlign: 'center' }}>ACTION ↕</th>
              </tr>
            </thead>
            <tbody>
              {mockData.map((row) => (
                <tr key={row.sl} style={{ borderBottom: '1px solid #e5e7eb', background: 'white' }}>
                  <td style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #e5e7eb', fontSize: '13px' }}>{row.sl}</td>
                  <td style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #e5e7eb', fontSize: '13px' }}>{row.date.split(' ').map(t => <div key={t}>{t}</div>)}</td>
                  <td style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #e5e7eb', fontSize: '13px' }}>{row.receiptFor}</td>
                  <td style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #e5e7eb', fontSize: '13px' }}>{row.idNo}</td>
                  <td style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #e5e7eb', fontSize: '13px' }}>{row.category}</td>
                  <td style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #e5e7eb', fontSize: '13px' }}>{row.account.split(' ').map(t => <div key={t}>{t}</div>)}</td>
                  <td style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #e5e7eb', fontSize: '13px' }}>{row.chequeNo}</td>
                  <td style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #e5e7eb', fontSize: '13px' }}>{row.desc}</td>
                  <td style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #e5e7eb' }}>
                    <span style={getTypeStyle(row.type)}>{row.type}</span>
                  </td>
                  <td style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #e5e7eb', fontSize: '13px' }}>{row.bank}</td>
                  <td style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #e5e7eb', fontSize: '13px' }}>{row.amount}</td>
                  <td style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid #e5e7eb' }}>
                    <button style={{ background: '#10b981', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }}>
                      <Lock size={14} style={{ fill: 'white' }} />
                    </button>
                  </td>
                  <td style={{ padding: '12px 8px', textAlign: 'center' }}>
                    <div style={{ display: 'flex', gap: '6px', justifyContent: 'center' }}>
                      <button 
                        onClick={() => setEditingExpense(row)}
                        style={{ background: '#0ea5e9', color: 'white', border: 'none', padding: '6px', borderRadius: '4px', cursor: 'pointer' }}
                      >
                        <Edit size={14} />
                      </button>
                      <button style={{ background: '#ef4444', color: 'white', border: 'none', padding: '6px', borderRadius: '4px', cursor: 'pointer' }}><Trash2 size={14} /></button>
                    </div>
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

export default ExpenseList;
