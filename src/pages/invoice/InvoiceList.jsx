import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { useNavigate } from 'react-router-dom';
import { FileDown, FileText, Printer, RotateCcw, Edit, Trash2 } from 'lucide-react';

const InvoiceList = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  // Mock data matching the screenshot
  const [invoices, setInvoices] = useState([
    { id: 1, date: '25 Aug 2026', clientName: 'C.CASTOMER', clientNumber: '01', invoiceNo: '160477', category: 'CASH SELL', returnQty: 0, billAmount: 3420.00, discount: 0.00, receiveAmount: 3420.00, dueAmount: 0.00, type: 'General' },
    { id: 2, date: '25 Aug 2026', clientName: 'C.CASTOMER', clientNumber: '01', invoiceNo: '160476', category: 'CASH SELL', returnQty: 0, billAmount: 930.00, discount: 0.00, receiveAmount: 930.00, dueAmount: 0.00, type: 'General' },
    { id: 3, date: '25 Aug 2026', clientName: 'C.CASTOMER', clientNumber: '01', invoiceNo: '160475', category: 'CASH SELL', returnQty: 0, billAmount: 130.00, discount: 0.00, receiveAmount: 130.00, dueAmount: 0.00, type: 'General' },
    { id: 4, date: '25 Aug 2026', clientName: 'C.CASTOMER', clientNumber: '01', invoiceNo: '160474', category: 'CASH SELL', returnQty: 0, billAmount: 800.00, discount: 0.00, receiveAmount: 800.00, dueAmount: 0.00, type: 'General' },
    { id: 5, date: '25 Aug 2026', clientName: 'C.CASTOMER', clientNumber: '01', invoiceNo: '160473', category: 'CASH SELL', returnQty: 0, billAmount: 270.00, discount: 0.00, receiveAmount: 270.00, dueAmount: 0.00, type: 'General' },
    { id: 6, date: '25 Aug 2026', clientName: 'C.CASTOMER', clientNumber: '01', invoiceNo: '160472', category: 'CASH SELL', returnQty: 0, billAmount: 1350.00, discount: 0.00, receiveAmount: 1350.00, dueAmount: 0.00, type: 'General' }
  ]);

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px', background: 'white' }}>
        <PrintHeader />
      
      {/* Center Title */}
      <div style={{ textAlign: 'center', marginBottom: '20px', marginTop: '20px' }}>
        <h2 style={{ fontFamily: 'monospace', fontSize: '24px', fontWeight: 'bold' }}>Bill Invoice List</h2>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'normal', color: '#333' }}>Bill Invoice List</h2>
        <button className="btn btn-primary" onClick={() => navigate('/invoice/add-new')} style={{ background: 'var(--success)', padding: '8px 16px', fontSize: '14px', borderRadius: '4px' }}>
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
              {invoices.map((inv, index) => (
                <tr key={inv.id} style={{ background: 'white', borderBottom: '1px solid #e2e8f0', fontSize: '12px' }}>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{index + 1}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{inv.date}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>
                    <div>Name: {inv.clientName}</div>
                    <div>Number: {inv.clientNumber}</div>
                  </td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>Invoice ID: {inv.invoiceNo}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{inv.category}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{inv.returnQty}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{inv.billAmount.toFixed(2)}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{inv.discount.toFixed(2)}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{inv.receiveAmount.toFixed(2)}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{inv.dueAmount.toFixed(2)}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>
                    <span style={{ background: 'var(--success)', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '11px' }}>{inv.type}</span>
                  </td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>
                    <button style={{ background: 'var(--success)', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px', margin: '0 auto', cursor: 'pointer' }}>
                       Pos View
                    </button>
                  </td>
                  <td style={{ textAlign: 'center', padding: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '4px' }}>
                      <button className="action-btn-sm edit" style={{ background: 'var(--info)', border: 'none', borderRadius: '4px', padding: '4px', color: 'white', cursor: 'pointer' }}>
                        <Edit size={14} />
                      </button>
                      <button className="action-btn-sm delete" style={{ background: 'var(--danger)', border: 'none', borderRadius: '4px', padding: '4px', color: 'white', cursor: 'pointer' }}>
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {invoices.length === 0 && (
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

export default InvoiceList;
