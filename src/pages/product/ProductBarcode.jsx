import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Printer } from 'lucide-react';
import PrintHeader from '../../components/PrintHeader';


const ProductBarcode = () => {
  const { t } = useTranslation();

  const [selectedProduct, setSelectedProduct] = useState('');

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px' }}>
        <PrintHeader />
      <div className="premium-card">
        <div className="premium-header" style={{ padding: '16px 24px', background: 'white', borderBottom: 'none' }}>
          <h2 className="premium-title" style={{ fontSize: '14px', fontWeight: 'normal', color: 'var(--text-muted)' }}>
            Product Barcode
          </h2>
        </div>

        <div className="premium-body" style={{ background: 'white', padding: '24px', minHeight: '300px', display: 'flex', flexDirection: 'column' }}>
          
          {/* Centered Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, marginBottom: '40px' }}>
            <div style={{ display: 'flex', width: '50%', maxWidth: '600px' }}>
              <select 
                value={selectedProduct} 
                onChange={(e) => setSelectedProduct(e.target.value)}
                style={{ flex: 1, padding: '12px', border: '1px solid #e2e8f0', borderRadius: '4px 0 0 4px', outline: 'none', appearance: 'none', background: 'white' }}
              >
                <option value="" disabled hidden>Select Product</option>
              </select>
              <button className="btn" style={{ background: 'var(--success)', color: 'white', padding: '0 24px', border: 'none', borderRadius: '0 4px 4px 0', fontSize: '14px' }}>
                Create
              </button>
            </div>
          </div>

          {/* Bottom Controls */}
          <div>
            <button className="btn" onClick={() => window.print()} style={{ background: 'var(--info)', color: 'white', padding: '8px 16px', borderRadius: '4px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Printer size={16} /> Print
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBarcode;
