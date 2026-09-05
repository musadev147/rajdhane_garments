import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Edit, FileSpreadsheet, Printer, RotateCcw } from 'lucide-react';

const SupplierChequeSchedule = () => {
  const { t } = useTranslation();
  const [editingId, setEditingId] = useState(null);

  const cheques = [
    { id: 1, chequeNo: '', date: '31 Aug 2026', supplier: 'AMIRUL VI PABNA //RASEL MAMAR BANDU', bank: '', amount: '27600.00' },
    { id: 2, chequeNo: '8572056', date: '05 Sep 2026', supplier: 'FUTURE SPS 40', bank: 'JENTS IFIC', amount: '148000.00' },
    { id: 3, chequeNo: '0', date: '05 Sep 2026', supplier: 'VAT JOMA', bank: 'NA', amount: '8000.00' },
    { id: 4, chequeNo: '', date: '06 Sep 2026', supplier: 'PAKIZA SHARI', bank: '', amount: '100000.00' },
    { id: 5, chequeNo: '', date: '06 Sep 2026', supplier: 'BRAC BANK CARD', bank: 'BRAC AGENT', amount: '245000.00' },
    { id: 6, chequeNo: '', date: '08 Sep 2026', supplier: 'ROYAL FLASH KNITWEAR', bank: 'IFIC', amount: '20000.00' },
    { id: 7, chequeNo: '', date: '10 Sep 2026', supplier: 'MOLLA GERMENTS KERANIGAJ', bank: 'IFIC RAJ CK', amount: '200000.00' },
    { id: 8, chequeNo: '', date: '19 Sep 2026', supplier: 'UNIUTED FINCE', bank: 'IFIC RAJDHANI SUPAR SOP', amount: '214140.00' },
    { id: 9, chequeNo: '', date: '20 Sep 2026', supplier: 'SHOUKIN TEXTAILS JOHIR VY', bank: '', amount: '50000.00' },
    { id: 10, chequeNo: '', date: '30 Sep 2026', supplier: 'BEXI // SHOEB CORPORATION', bank: 'TTT', amount: '100200.00' },
    { id: 11, chequeNo: '', date: '01 Oct 2026', supplier: 'IDLC FINANCE', bank: 'UTTRA CC ACONT', amount: '434245.00' },
    { id: 12, chequeNo: '', date: '04 Oct 2026', supplier: 'UTTARA BANK CARD', bank: '', amount: '0.00' },
    { id: 13, chequeNo: '', date: '05 Oct 2026', supplier: 'MOLLA GERMENTS KERANIGAJ', bank: 'IFIC CK RAJDH', amount: '240000.00' },
    { id: 14, chequeNo: '', date: '05 Oct 2026', supplier: 'EASTERN BANK PLC', bank: 'EASTERN BANK PLC', amount: '692100.00' },
    { id: 15, chequeNo: 'BLANK', date: '20 Oct 2026', supplier: 'FIVE STER 30', bank: 'IFIC RAJDHANI', amount: '0.00' },
  ];

  return (
    <div className="dashboard-content" style={{ paddingBottom: '50px' }}>
      <div className="card" style={{ border: 'none', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
        <div className="card-header" style={{ background: '#22c55e', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 20px' }}>
          <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>Supplier messages.cheque_schedule</h2>
          <button className="btn" style={{ background: '#10b981', color: 'white', border: '1px solid rgba(255,255,255,0.3)', padding: '6px 16px', borderRadius: '4px', fontSize: '13px' }}>
            Add
          </button>
        </div>

        <div className="card-body" style={{ padding: '24px', background: 'white' }}>
          {/* Filters */}
          <div style={{ display: 'flex', gap: '24px', marginBottom: '32px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '12px', fontWeight: '500' }}>Supplier Search By</label>
              <select style={{ width: '100%', padding: '10px', border: '1px solid #e2e8f0', borderRadius: '4px', color: '#64748b' }}>
                <option>Select Suppliers</option>
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '12px', fontWeight: '500' }}>Search By Date</label>
              <div style={{ display: 'flex', gap: '12px' }}>
                <input type="date" placeholder="DD/MM/YYYY" style={{ flex: 1, padding: '10px', border: '1px solid #e2e8f0', borderRadius: '4px', color: '#64748b' }} />
                <input type="date" placeholder="DD/MM/YYYY" style={{ flex: 1, padding: '10px', border: '1px solid #e2e8f0', borderRadius: '4px', color: '#64748b' }} />
              </div>
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end' }}>
              <button className="btn" style={{ width: '100%', padding: '10px', background: '#94a3b8', color: 'white', border: 'none', borderRadius: '4px', fontWeight: '500' }}>
                Clear Filter
              </button>
            </div>
          </div>

          {/* Table Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ fontSize: '13px', color: '#1e293b' }}>
              Show 
              <select style={{ margin: '0 8px', padding: '4px 8px', border: '1px solid #e2e8f0', borderRadius: '4px' }}>
                <option>25</option>
              </select>
              entries
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button className="btn" style={{ background: '#3b82f6', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FileSpreadsheet size={14} /> Excel
              </button>
              <button className="btn" style={{ background: '#3b82f6', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Printer size={14} /> Print
              </button>
              <button className="btn" style={{ background: '#3b82f6', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <RotateCcw size={14} /> Reset
              </button>
            </div>
          </div>

          {/* Table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', minWidth: '800px' }}>
              <thead>
                <tr style={{ background: '#cbd5e1', color: '#334155' }}>
                  <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #e2e8f0' }}>ID NO ↕</th>
                  <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #e2e8f0' }}>CHEQUE NO ↕</th>
                  <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #e2e8f0' }}>DATE ↕</th>
                  <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #e2e8f0' }}>SUPPLIER ↕</th>
                  <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #e2e8f0' }}>BANK ↕</th>
                  <th style={{ padding: '12px', textAlign: 'right', border: '1px solid #e2e8f0' }}>AMOUNT ↕</th>
                  <th style={{ padding: '12px', textAlign: 'center', border: '1px solid #e2e8f0' }}>ACTION ↕</th>
                </tr>
              </thead>
              <tbody>
                {cheques.map((cheque) => (
                  <React.Fragment key={cheque.id}>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '8px 12px', border: '1px solid #e2e8f0' }}>{cheque.id}</td>
                      <td style={{ padding: '8px 12px', border: '1px solid #e2e8f0' }}>{cheque.chequeNo}</td>
                      <td style={{ padding: '8px 12px', border: '1px solid #e2e8f0' }}>{cheque.date}</td>
                      <td style={{ padding: '8px 12px', border: '1px solid #e2e8f0' }}>{cheque.supplier}</td>
                      <td style={{ padding: '8px 12px', border: '1px solid #e2e8f0' }}>{cheque.bank}</td>
                      <td style={{ padding: '8px 12px', textAlign: 'right', border: '1px solid #e2e8f0' }}>{cheque.amount}</td>
                      <td style={{ padding: '8px 12px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                        <button 
                          onClick={() => setEditingId(editingId === cheque.id ? null : cheque.id)}
                          style={{ background: '#1e293b', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}
                        >
                          <Edit size={14} />
                        </button>
                      </td>
                    </tr>
                    
                    {/* Inline Edit Form */}
                    {editingId === cheque.id && (
                      <tr>
                        <td colSpan="7" style={{ padding: '20px', background: 'white', border: '1px solid #22c55e', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1.5fr', gap: '20px', marginBottom: '20px' }}>
                            {/* Date Field */}
                            <div style={{ position: 'relative' }}>
                              <div style={{ position: 'absolute', top: '-10px', left: '10px', background: '#3b82f6', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <i className="lucide-calendar" style={{ fontSize: '10px' }}></i> Date
                              </div>
                              <input 
                                type="text" 
                                defaultValue="06/09/2026" 
                                style={{ width: '100%', padding: '12px 16px', border: '1px solid #93c5fd', borderRadius: '6px', fontSize: '13px', color: '#1e293b' }} 
                              />
                            </div>
                            
                            {/* Supplier Name (Non-editable Display) */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <div style={{ flex: 1, padding: '12px 16px', border: '1px solid #93c5fd', borderRadius: '6px', fontSize: '13px', color: '#1e293b', background: '#f8fafc' }}>
                                PAKIZA SHARI <span style={{ color: '#ef4444' }}>(null)</span>
                              </div>
                              <button style={{ background: '#10b981', color: 'white', border: 'none', width: '36px', height: '36px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                +
                              </button>
                            </div>

                            {/* Bank Name Field */}
                            <div style={{ position: 'relative' }}>
                              <div style={{ position: 'absolute', top: '-10px', left: '10px', background: '#3b82f6', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <i className="lucide-building" style={{ fontSize: '10px' }}></i> Bank Name
                              </div>
                              <input 
                                type="text" 
                                style={{ width: '100%', padding: '12px 16px', border: '1px solid #93c5fd', borderRadius: '6px', fontSize: '13px', color: '#1e293b' }} 
                              />
                            </div>
                          </div>

                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1.5fr', gap: '20px', marginBottom: '20px' }}>
                            {/* Cheque Number Field */}
                            <div style={{ position: 'relative' }}>
                              <div style={{ position: 'absolute', top: '-10px', left: '10px', background: '#3b82f6', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <i className="lucide-credit-card" style={{ fontSize: '10px' }}></i> Cheque Number
                              </div>
                              <input 
                                type="text" 
                                style={{ width: '100%', padding: '12px 16px', border: '1px solid #93c5fd', borderRadius: '6px', fontSize: '13px', color: '#1e293b' }} 
                              />
                            </div>

                            {/* Amount Field */}
                            <div style={{ position: 'relative' }}>
                              <div style={{ position: 'absolute', top: '-10px', left: '10px', background: '#3b82f6', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <i className="lucide-dollar-sign" style={{ fontSize: '10px' }}></i> Amount
                              </div>
                              <input 
                                type="text" 
                                defaultValue="100000.00" 
                                style={{ width: '100%', padding: '12px 16px', border: '1px solid #93c5fd', borderRadius: '6px', fontSize: '13px', color: '#1e293b' }} 
                              />
                            </div>
                            
                            <div></div> {/* Empty column for alignment */}
                          </div>

                          {/* Update Button */}
                          <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button 
                              onClick={() => setEditingId(null)}
                              style={{ width: '80%', background: '#10b981', color: 'white', border: 'none', padding: '12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer' }}>
                              Update
                            </button>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
            <div style={{ fontSize: '13px', color: '#64748b' }}>
              Showing 1 to 15 of 15 entries
            </div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <button style={{ padding: '6px 12px', border: '1px solid #e2e8f0', background: 'white', color: '#64748b', borderRadius: '4px', fontSize: '13px' }}>Previous</button>
              <button style={{ padding: '6px 12px', border: '1px solid #3b82f6', background: '#3b82f6', color: 'white', borderRadius: '4px', fontSize: '13px' }}>1</button>
              <button style={{ padding: '6px 12px', border: '1px solid #e2e8f0', background: 'white', color: '#64748b', borderRadius: '4px', fontSize: '13px' }}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierChequeSchedule;
