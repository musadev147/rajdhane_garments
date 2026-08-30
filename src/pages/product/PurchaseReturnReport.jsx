import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { RotateCcw, Plus, Printer } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PurchaseReturnReport = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  // Mock data matching the screenshot structure
  const [reports, setReports] = useState([
    { id: 1, date: '24 Aug 2026', supplier: 'ROKSANA TOPS BONGO', product: 'ROK XL HAF 150 | 7511', group: 'LADIS GERMENTS', buy: '90.00', sell: '150.00', qty: '25', total: '2250.00', desc: 'null' },
    { id: 2, date: '24 Aug 2026', supplier: 'ROKSANA TOPS BONGO', product: 'ROK XXL HAF 170 | 7512', group: 'LADIS GERMENTS', buy: '110.00', sell: '170.00', qty: '25', total: '2750.00', desc: 'null' },
    { id: 3, date: '24 Aug 2026', supplier: 'ROKSANA TOPS BONGO', product: 'ROK HAF 3XL | 16546', group: 'LADIS GERMENTS', buy: '140.00', sell: '220.00', qty: '25', total: '3500.00', desc: 'null' },
    { id: 4, date: '22 Apr 2026', supplier: 'BROTHERS TRADERS 23', product: 'PRINT 130 | 14', group: 'SIT KAPOR', buy: '103.00', sell: '130.00', qty: '1343', total: '138329.00', desc: 'null' },
    { id: 5, date: '22 Apr 2026', supplier: 'BROTHERS TRADERS 23', product: 'PRINT 130 | 14', group: 'SIT KAPOR', buy: '101.00', sell: '130.00', qty: '287', total: '28987.00', desc: 'null' }
  ]);

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px', background: 'white' }}>
        <PrintHeader />
      
      {/* Center Title */}
      <div style={{ textAlign: 'center', marginBottom: '40px', marginTop: '20px', position: 'relative' }}>
        <h2 style={{ fontFamily: 'monospace', fontSize: '24px', fontWeight: 'bold' }}>Purchase Return Report</h2>
        <button 
          onClick={() => navigate('/product/purchase-return/add-new')}
          className="btn" 
          style={{ position: 'absolute', right: '20px', top: '0', background: 'var(--success)', color: 'white', padding: '8px 16px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <Plus size={16} /> Purchase Return
        </button>
      </div>

      <div className="card-body">
        {/* Filters */}
        <div className="form-grid" style={{ gridTemplateColumns: '1.5fr 1fr 1fr 1fr 2fr', gap: '16px', marginBottom: '24px', alignItems: 'end' }}>
          <div>
            <div style={{ fontSize: '12px', marginBottom: '4px' }}>Supplier</div>
            <div className="form-input floating-label" style={{ borderRadius: '4px' }}>
              <select style={{ padding: '10px', width: '100%', color: 'var(--info)' }}>
                <option value="" disabled selected hidden>Select Suppliers</option>
              </select>
            </div>
          </div>
          
          <div>
            <div style={{ fontSize: '12px', marginBottom: '4px' }}>Product Name</div>
            <div className="form-input floating-label" style={{ borderRadius: '4px' }}>
              <input type="text" placeholder=" " style={{ padding: '10px', width: '100%', color: '#94a3b8' }} />
                <label>Product Name</label>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '12px', marginBottom: '4px' }}>Invoice No</div>
            <div className="form-input floating-label" style={{ borderRadius: '4px' }}>
              <input type="text" placeholder=" " style={{ padding: '10px', width: '100%', color: '#94a3b8' }} />
                <label>Invoice No</label>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '12px', marginBottom: '4px' }}>Barcode</div>
            <div className="form-input floating-label" style={{ borderRadius: '4px' }}>
              <input type="text" placeholder=" " style={{ padding: '10px', width: '100%', color: '#94a3b8' }} />
                <label>Barcode</label>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '12px', marginBottom: '4px' }}>{t('common.search_by_date')}</div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div className="form-input floating-label" style={{ borderRadius: '4px', flex: 1 }}>
                <input type="date" style={{ color: '#94a3b8', padding: '10px', width: '100%' }} />
              </div>
              <div className="form-input floating-label" style={{ borderRadius: '4px', flex: 1 }}>
                <input type="date" style={{ color: '#94a3b8', padding: '10px', width: '100%' }} />
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <button className="btn" style={{ background: 'var(--text-muted)', color: 'white', padding: '12px 48px', borderRadius: '4px', fontSize: '16px', width: '40%' }}>
            Clear Filter
          </button>
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
            <button className="btn" onClick={() => window.print()} style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Printer size={14} /> Print
            </button>
            <button className="btn" style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <RotateCcw size={14} /> Reset
            </button>
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto', border: '1px solid #e2e8f0' }}>
          <table className="custom-table" style={{ width: '100%', minWidth: '1300px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'var(--secondary)', color: 'white' }}>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px', width: '60px' }}>ID<br/>NO ↕</th>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>DATE</th>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>SUPPLIER</th>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>PRODUCT</th>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>GROUP</th>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>BUYING PRICE ↕</th>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>SELLING PRICE ↕</th>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>QUANTITY ↕</th>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>TOTAL BUYING PRICE ↕</th>
                <th style={{ textAlign: 'center', padding: '12px', fontSize: '11px' }}>DESCRIPTION ↕</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id} style={{ background: 'white', borderBottom: '1px solid #e2e8f0', fontSize: '13px' }}>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{report.id}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{report.date}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{report.supplier}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{report.product}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{report.group}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{report.buy}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{report.sell}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{report.qty}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{report.total}</td>
                  <td style={{ textAlign: 'center', padding: '8px' }}>{report.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PurchaseReturnReport;
