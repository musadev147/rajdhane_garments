import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { Settings, Barcode, Calendar } from 'lucide-react';

const PurchaseReturnCreate = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    supplier: '',
    date: '25/08/2026',
    barcode: '',
    product: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px' }}>
      <div className="premium-card">
        <div className="premium-header" style={{ padding: '16px 24px', background: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 className="premium-title" style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase' }}>
            Purchase Return Create
          </h2>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn" style={{ background: 'var(--text-muted)', color: 'white', padding: '8px', borderRadius: '4px' }}>
              <Settings size={16} />
            </button>
          </div>
        </div>

        <div className="premium-body" style={{ background: 'white', padding: '24px' }}>
        <PrintHeader />
          <form>
            <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
              
              {/* Select Suppliers */}
              <div className="form-group" style={{ marginBottom: '0' }}>
                <select name="supplier" value={formData.supplier} onChange={handleChange} style={{ padding: '14px', width: '100%', border: '1px solid #0ea5e9', borderRadius: '4px', outline: 'none', appearance: 'none', background: 'white', color: 'var(--text-muted)' }}>
                  <option value="" disabled hidden>Select Suppliers</option>
                </select>
              </div>

              {/* Date */}
              <div className="form-group" style={{ marginBottom: '0' }}>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-10px', left: '16px', background: 'var(--info)', color: 'white', fontSize: '11px', padding: '2px 8px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={12} /> Date
                  </div>
                  <input type="text" name="date" value={formData.date} onChange={handleChange} style={{ width: '100%', padding: '14px', border: '1px solid #0ea5e9', borderRadius: '4px', outline: 'none' }} />
                </div>
              </div>

              {/* Barcode Number */}
              <div className="form-group" style={{ marginBottom: '0' }}>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center', border: '1px solid #0ea5e9', borderRadius: '4px' }}>
                  <div style={{ padding: '12px', color: 'var(--text-muted)' }}>
                    <Barcode size={24} />
                  </div>
                  <input type="text" name="barcode" value={formData.barcode} onChange={handleChange} placeholder=" " style={{ flex: 1, padding: '12px', border: 'none', outline: 'none', color: '#94a3b8' }} />
                <label>Barcode Number</label>
                </div>
              </div>

              {/* Select Product */}
              <div className="form-group" style={{ marginBottom: '0' }}>
                <select name="product" value={formData.product} onChange={handleChange} style={{ padding: '14px', width: '100%', border: '1px solid #0ea5e9', borderRadius: '4px', outline: 'none', appearance: 'none', background: 'white', color: 'var(--text-muted)' }}>
                  <option value="" disabled hidden>Select Product</option>
                </select>
              </div>

            </div>

            {/* Table */}
            <div style={{ overflowX: 'auto', border: '1px solid #e2e8f0', marginBottom: '24px' }}>
              <table className="custom-table" style={{ width: '100%', minWidth: '1000px', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'var(--secondary)', color: 'white' }}>
                    <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px', width: '50px' }}>SL</th>
                    <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>PRODUCT</th>
                    <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>QUANTITY</th>
                    <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>BUYING PRICE</th>
                    <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>TOTAL BUYING PRICE</th>
                    <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>SALE PRICE</th>
                    <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>TOTAL SALE PRICE</th>
                    <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>BARCODE</th>
                    <th style={{ textAlign: 'center', padding: '12px', fontSize: '11px' }}>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Empty state */}
                </tbody>
                <tfoot>
                  <tr style={{ background: 'var(--card-border)', fontWeight: 'bold' }}>
                    <td colSpan="2" style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #cbd5e1', borderTop: '1px solid #cbd5e1' }}>Line Total</td>
                    <td style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #cbd5e1', borderTop: '1px solid #cbd5e1' }}>0</td>
                    <td style={{ borderRight: '1px solid #cbd5e1', borderTop: '1px solid #cbd5e1' }}></td>
                    <td style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #cbd5e1', borderTop: '1px solid #cbd5e1' }}>0</td>
                    <td style={{ borderRight: '1px solid #cbd5e1', borderTop: '1px solid #cbd5e1' }}></td>
                    <td style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #cbd5e1', borderTop: '1px solid #cbd5e1' }}>0</td>
                    <td colSpan="2" style={{ borderTop: '1px solid #cbd5e1' }}></td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div style={{ textAlign: 'center' }}>
              <button type="button" className="btn-primary" style={{ padding: '12px 32px', background: 'var(--success)', border: 'none', borderRadius: '4px', fontSize: '14px' }}>
                Purchase Return
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchaseReturnCreate;
