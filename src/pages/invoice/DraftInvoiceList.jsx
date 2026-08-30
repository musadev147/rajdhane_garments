import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { useNavigate } from 'react-router-dom';
import { FileDown, FileText, Printer, RotateCcw, Edit, Trash2 } from 'lucide-react';

const DraftInvoiceList = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  // Empty data matching the screenshot
  const [invoices, setInvoices] = useState([]);

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px', background: 'white' }}>
        <PrintHeader />
      
      {/* Center Title */}
      <div style={{ textAlign: 'center', marginBottom: '20px', marginTop: '20px' }}>
        <h2 style={{ fontFamily: 'monospace', fontSize: '24px', fontWeight: 'bold' }}>Bill Invoice List</h2>
      </div>

      {/* Header Info */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', fontSize: '14px' }}>
        <div>
          <div><span style={{ fontWeight: 'bold' }}>Name :</span> C.CASTOMER</div>
          <div><span style={{ fontWeight: 'bold' }}>Address :</span> all</div>
          <div><span style={{ fontWeight: 'bold' }}>Contact No :</span> 01</div>
        </div>
        <div>
          <span style={{ fontWeight: 'bold' }}>Date :</span> 25 Aug 2026
        </div>
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
              <tr>
                <td colSpan="13" style={{ textAlign: 'center', padding: '8px', fontSize: '12px' }}>No data available in table</td>
              </tr>
              {/* Total Row */}
              <tr style={{ background: 'var(--card-header-bg)', fontWeight: 'bold', fontSize: '12px' }}>
                <td colSpan="6" style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{t('common.total')}</td>
                <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>0</td>
                <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}></td>
                <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>0</td>
                <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>0</td>
                <td colSpan="3"></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Pagination Info */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', fontSize: '12px' }}>
          <div>Showing 0 to 0 of 0 entries</div>
          <div style={{ display: 'flex' }}>
            <button style={{ padding: '6px 12px', border: '1px solid #e2e8f0', background: 'var(--card-header-bg)', color: 'var(--text-muted)', cursor: 'not-allowed', borderTopLeftRadius: '4px', borderBottomLeftRadius: '4px' }}>Previous</button>
            <button style={{ padding: '6px 12px', border: '1px solid #e2e8f0', borderLeft: 'none', background: 'var(--card-header-bg)', color: 'var(--text-muted)', cursor: 'not-allowed', borderTopRightRadius: '4px', borderBottomRightRadius: '4px' }}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DraftInvoiceList;
