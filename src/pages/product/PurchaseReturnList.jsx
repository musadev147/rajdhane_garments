import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { RotateCcw, Edit, Trash2, Eye, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PurchaseReturnList = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  // Mock data matching the screenshot
  const [returns, setReturns] = useState([
    { id: 1, date: '25 Aug 2026', invoice: '0', supplier: 'SHAJATPUR HAT', total: '1370.00' },
    { id: 2, date: '18 Aug 2026', invoice: '0', supplier: 'MOKKA TOLY', total: '35490.00' },
    { id: 3, date: '09 Aug 2026', invoice: '0', supplier: 'LEG FASHION', total: '1650.00' },
    { id: 4, date: '09 Aug 2026', invoice: '0', supplier: 'POD SHATI SHOES', total: '550.00' },
    { id: 5, date: '09 Aug 2026', invoice: '0', supplier: 'JUBILEE GALLERY SHOES', total: '950.00' },
    { id: 6, date: '27 Jul 2026', invoice: '0', supplier: 'NEW DUBAI BORKA HOUSE 25', total: '4800.00' },
    { id: 7, date: '27 Jul 2026', invoice: '0', supplier: 'POLLAMA FASHION 3PCES', total: '13700.00' },
    { id: 8, date: '27 Jul 2026', invoice: '0', supplier: 'MASUD THREE PEACE', total: '27650.00' },
    { id: 9, date: '27 Jul 2026', invoice: '0', supplier: 'DIPA ORANA', total: '780.00' },
    { id: 10, date: '25 Jul 2026', invoice: '0', supplier: 'FASHION PLUS/FOYSAL', total: '1630.00' },
    { id: 11, date: '25 Jul 2026', invoice: '0', supplier: 'DIPA ORANA', total: '41825.00' },
    { id: 12, date: '25 Jul 2026', invoice: '0', supplier: 'ACHAL BORKHA BAZAR', total: '13950.00' },
    { id: 13, date: '25 Jul 2026', invoice: '0', supplier: 'DUBAY MART RUBAL', total: '14150.00' },
    { id: 14, date: '25 Jul 2026', invoice: '0', supplier: 'SHADAT BROKHA POINT', total: '25500.00' }
  ]);

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px', background: 'white' }}>
        <PrintHeader />
      
      {/* Center Title */}
      <div style={{ textAlign: 'center', marginBottom: '40px', marginTop: '20px', position: 'relative' }}>
        <h2 style={{ fontFamily: 'monospace', fontSize: '24px', fontWeight: 'bold' }}>Purchase Return List</h2>
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
              {returns.map((ret) => (
                <tr key={ret.id} style={{ background: 'white', borderBottom: '1px solid #e2e8f0', fontSize: '13px' }}>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{ret.id}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{ret.date}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{ret.invoice}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{ret.supplier}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{ret.total}</td>
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

export default PurchaseReturnList;
