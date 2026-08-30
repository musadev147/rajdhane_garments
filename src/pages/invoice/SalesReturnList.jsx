import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { useNavigate } from 'react-router-dom';
import { FileDown, FileText, Printer, RotateCcw, Edit, Trash2 } from 'lucide-react';

const SalesReturnList = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  // Mock data matching the screenshot
  const [returns, setReturns] = useState([
    { id: 1, date: '2026-08-24 21:03:37', clientName: 'C.CASTOMER', clientNumber: '01', invoiceNo: '160469', category: 'MALL FEROT', returnQty: 0, billAmount: 5090.00, discount: 0.00, receiveAmount: 5090.00, dueAmount: 0.00, type: 'Return' },
    { id: 2, date: '2026-08-24 19:18:26', clientName: 'SUKDEB DADA/NACHA MARKET', clientNumber: '01725537242', invoiceNo: '160447', category: 'MALL FEROT', returnQty: 0, billAmount: 1100.00, discount: 0.00, receiveAmount: 0.00, dueAmount: 1100.00, type: 'Return' },
    { id: 3, date: '2026-08-24 17:30:59', clientName: 'TUHIN VI', clientNumber: '01716228076', invoiceNo: '160397', category: 'MALL FEROT', returnQty: 0, billAmount: 1880.00, discount: 0.00, receiveAmount: 0.00, dueAmount: 1880.00, type: 'Return' },
    { id: 4, date: '2026-08-24 14:49:53', clientName: 'LAVLI VABI // VVV [R]', clientNumber: '01767977096', invoiceNo: '160370', category: 'MALL FEROT', returnQty: 0, billAmount: 2650.00, discount: 0.00, receiveAmount: 0.00, dueAmount: 2650.00, type: 'Return' },
    { id: 5, date: '2026-08-24 13:36:01', clientName: 'SOZOL VABI // SOJOL VATA', clientNumber: '01711327863', invoiceNo: '160358', category: 'MALL FEROT', returnQty: 0, billAmount: 1100.00, discount: 0.00, receiveAmount: 0.00, dueAmount: 1100.00, type: 'Return' },
    { id: 6, date: '2026-08-24 11:32:00', clientName: 'JUAL VI NIJ // VVV[S]', clientNumber: '01724213894', invoiceNo: '160322', category: 'MALL FEROT', returnQty: 0, billAmount: 1500.00, discount: 0.00, receiveAmount: 0.00, dueAmount: 1500.00, type: 'Return' }
  ]);

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px', background: 'white' }}>
        <PrintHeader />
      
      {/* Center Title */}
      <div style={{ textAlign: 'center', marginBottom: '40px', marginTop: '20px' }}>
        <h2 style={{ fontFamily: 'monospace', fontSize: '24px', fontWeight: 'bold' }}>Sales Return List</h2>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'normal', color: '#333' }}>Sales Return List</h2>
        <button className="btn btn-primary" onClick={() => navigate('/invoice/sales-return/add-new')} style={{ background: 'var(--success)', padding: '8px 16px', fontSize: '14px', borderRadius: '4px' }}>
          Invoice Create
        </button>
      </div>

      <div className="card-body">
        {/* Filters */}
        <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
          <div className="form-input floating-label" style={{ borderRadius: '4px' }}>
            <select style={{ padding: '10px' }}>
              <option value="" disabled selected hidden>{t('common.select_client')}</option>
            </select>
          </div>
          <div className="form-input floating-label" style={{ borderRadius: '4px' }}>
            <select style={{ padding: '10px' }}>
              <option value="" disabled selected hidden>Select Account</option>
            </select>
          </div>
        </div>

        <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '16px', marginBottom: '24px' }}>
          <div className="form-input floating-label" style={{ borderRadius: '4px' }}>
            <input type="date" style={{ color: '#94a3b8', padding: '10px' }} />
          </div>
          <div className="form-input floating-label" style={{ borderRadius: '4px' }}>
            <input type="date" style={{ color: '#94a3b8', padding: '10px' }} />
          </div>
          <div className="form-input floating-label" style={{ borderRadius: '4px' }}>
            <input type="text" placeholder=" " style={{ padding: '10px' }} />
                <label>Invoice No</label>
          </div>
          <div>
            <button className="btn btn-primary" style={{ width: '100%', height: '100%', background: 'var(--success)', border: 'none', borderRadius: '4px', fontSize: '15px' }}>
              Clear Filter
            </button>
          </div>
        </div>

        {/* Table Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ fontSize: '14px', color: 'var(--text-main)' }}>
            Show 
            <select style={{ margin: '0 8px', padding: '4px', border: '1px solid #e2e8f0', borderRadius: '4px' }}>
              <option>100</option>
            </select>
            entries
          </div>
          <div style={{ display: 'flex', gap: '4px' }}>
            <button className="btn" style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              Excel
            </button>
            <button className="btn" style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              PDF
            </button>
            <button className="btn" onClick={() => window.print()} style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              Print
            </button>
            <button className="btn" style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <RotateCcw size={14} /> Reset
            </button>
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto', border: '1px solid #e2e8f0' }}>
          <table className="custom-table" style={{ width: '100%', minWidth: '1200px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'var(--secondary)', color: 'white' }}>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>SL ↕</th>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>ISSUED DATE</th>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>CLIENT</th>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>INVOICE ID NO</th>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>CATEGORY</th>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>RETURN QUANTITY</th>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>BILL AMOUNT</th>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>DISCOUNT</th>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>RECEIVE AMOUNT</th>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>DUE AMOUNT</th>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>TYPE</th>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>PRINTABLE</th>
                <th style={{ textAlign: 'center', padding: '12px', fontSize: '11px' }}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {returns.map((ret, index) => (
                <tr key={ret.id} style={{ background: 'white', borderBottom: '1px solid #e2e8f0', fontSize: '12px' }}>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{index + 1}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>
                    {ret.date.split(' ').map((line, i) => <div key={i}>{line}</div>)}
                  </td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>
                    <div>Name: {ret.clientName}</div>
                    <div>Number: {ret.clientNumber}</div>
                  </td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>Invoice ID:<br/>{ret.invoiceNo}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{ret.category}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{ret.returnQty}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{ret.billAmount.toFixed(2)}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{ret.discount.toFixed(2)}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{ret.receiveAmount.toFixed(2)}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{ret.dueAmount.toFixed(2)}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>
                    <span style={{ background: '#eab308', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '11px' }}>{ret.type}</span>
                  </td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
                      <button style={{ background: 'var(--success)', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', fontSize: '10px', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', width: '100px', justifyContent: 'center' }}>
                        Pos View
                      </button>
                      <button style={{ background: 'var(--success)', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', fontSize: '10px', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', width: '100px', justifyContent: 'center' }}>
                        Invoice View
                      </button>
                    </div>
                  </td>
                  <td style={{ textAlign: 'center', padding: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '4px' }}>
                      <button className="action-btn-sm edit" style={{ background: 'var(--info)', border: 'none', borderRadius: '4px', padding: '4px 8px', color: 'white', cursor: 'pointer', fontSize: '10px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Edit size={10} /> Edit Return
                      </button>
                      <button className="action-btn-sm delete" style={{ background: 'var(--danger)', border: 'none', borderRadius: '4px', padding: '4px', color: 'white', cursor: 'pointer' }}>
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {returns.length === 0 && (
                <tr>
                  <td colSpan="13" style={{ textAlign: 'center', padding: '20px' }}>No data available in table</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalesReturnList;
