import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { RotateCcw, Edit, Trash2, Eye, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PurchaseList = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  // Mock data matching the screenshot
  const [purchases, setPurchases] = useState([
    { id: 1, date: '24 Aug 2026', invoice: '0', supplier: 'ROKSANA TOPS BONGO', total: '12500.00' },
    { id: 2, date: '23 Aug 2026', invoice: '0', supplier: 'SABBIR VI INDIA HELAI', total: '18250.00' },
    { id: 3, date: '23 Aug 2026', invoice: '0', supplier: '25 NASIMA APA', total: '10800.00' },
    { id: 4, date: '20 Aug 2026', invoice: '0', supplier: 'ACHAL BORKHA BAZAR', total: '23750.00' },
    { id: 5, date: '20 Aug 2026', invoice: '0', supplier: 'MA ENTERPRISE// JOM JOM PCES', total: '54600.00' },
    { id: 6, date: '19 Aug 2026', invoice: '0', supplier: 'RIMON DIPA ORANA', total: '27150.00' },
    { id: 7, date: '19 Aug 2026', invoice: '0', supplier: 'DIPA ORANA', total: '66630.00' },
    { id: 8, date: '17 Aug 2026', invoice: '0', supplier: 'CASH MARKATING ALL', total: '60025.00' },
    { id: 9, date: '17 Aug 2026', invoice: '0', supplier: 'CLASSIC FABRICS 3PCES', total: '93000.00' },
    { id: 10, date: '17 Aug 2026', invoice: '0', supplier: 'SHADAT BROKHA POINT', total: '101850.00' },
    { id: 11, date: '16 Aug 2026', invoice: '0', supplier: 'SABBIR VI INDIA HELAI', total: '66000.00' },
    { id: 12, date: '13 Aug 2026', invoice: '0', supplier: 'BETTER ONE COLLECTION', total: '136480.00' },
    { id: 13, date: '13 Aug 2026', invoice: '0', supplier: 'MOLLA GERMENTS KERANIGAJ', total: '86400.00' },
    { id: 14, date: '13 Aug 2026', invoice: '0', supplier: 'MOLLA GERMENTS KERANIGAJ', total: '53000.00' },
    { id: 15, date: '13 Aug 2026', invoice: '0', supplier: 'MOLLA GERMENTS KERANIGAJ', total: '91850.00' },
    { id: 16, date: '13 Aug 2026', invoice: '0', supplier: 'MOLLA GERMENTS KERANIGAJ', total: '81660.00' },
    { id: 17, date: '12 Aug 2026', invoice: '0', supplier: 'CASH MARKATING ALL', total: '61950.00' }
  ]);

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px', background: 'white' }}>
        <PrintHeader />
      
      {/* Center Title */}
      <div style={{ textAlign: 'center', marginBottom: '40px', marginTop: '20px', position: 'relative' }}>
        <h2 style={{ fontFamily: 'monospace', fontSize: '24px', fontWeight: 'bold' }}>Purchase List</h2>
        <button 
          onClick={() => navigate('/product/purchase/add-new')}
          className="btn" 
          style={{ position: 'absolute', right: '20px', top: '0', background: 'var(--success)', color: 'white', padding: '8px 16px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <Plus size={16} /> Purchase
        </button>
      </div>

      <div className="card-body">
        {/* Filters */}
        <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr 2fr 1fr', gap: '16px', marginBottom: '24px', alignItems: 'end' }}>
          <div>
            <div style={{ fontSize: '12px', marginBottom: '4px' }}>Supplier</div>
            <div className="form-input floating-label" style={{ borderRadius: '4px' }}>
              <select style={{ padding: '10px', width: '100%', color: 'var(--info)' }}>
                <option value="" disabled selected hidden>Select Suppliers</option>
              </select>
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

          <div>
            <button className="btn" style={{ background: 'var(--text-muted)', color: 'white', padding: '12px', borderRadius: '4px', fontSize: '14px', width: '100%' }}>
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
              <RotateCcw size={14} /> Reset
            </button>
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto', border: '1px solid #e2e8f0' }}>
          <table className="custom-table" style={{ width: '100%', minWidth: '1000px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'var(--secondary)', color: 'white' }}>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px', width: '60px' }}>ID<br/>NO ↕</th>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>DATE</th>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>INVOICE</th>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>SUPPLIER</th>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>TOTAL</th>
                <th style={{ textAlign: 'center', padding: '12px', fontSize: '11px', width: '120px' }}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {purchases.map((purchase) => (
                <tr key={purchase.id} style={{ background: 'white', borderBottom: '1px solid #e2e8f0', fontSize: '13px' }}>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{purchase.id}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{purchase.date}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{purchase.invoice}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{purchase.supplier}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{purchase.total}</td>
                  <td style={{ textAlign: 'center', padding: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '4px' }}>
                      <button className="action-btn-sm" style={{ background: 'var(--success)', border: 'none', borderRadius: '4px', padding: '6px', color: 'white', cursor: 'pointer' }}>
                        <Eye size={14} />
                      </button>
                      <button className="action-btn-sm" style={{ background: 'var(--danger)', border: 'none', borderRadius: '4px', padding: '6px', color: 'white', cursor: 'pointer' }}>
                        <Trash2 size={14} />
                      </button>
                      <button className="action-btn-sm" style={{ background: 'var(--success)', border: 'none', borderRadius: '4px', padding: '6px', color: 'white', cursor: 'pointer' }}>
                        <Edit size={14} />
                      </button>
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

export default PurchaseList;
