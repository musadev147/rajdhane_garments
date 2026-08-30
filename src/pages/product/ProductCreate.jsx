import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Settings, List, Layers, Plus, Package, DollarSign, Scale, Video } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PrintHeader from '../../components/PrintHeader';


const ProductCreate = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    productName: '',
    buyingPrice: '',
    sellingPrice: '',
    unit: '',
    openingStock: '',
    productGroup: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px' }}>
        <PrintHeader />
      <div className="premium-card">
        <div className="premium-header" style={{ padding: '16px 24px', background: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 className="premium-title" style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase' }}>
            Product Create
          </h2>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn" style={{ background: 'var(--text-muted)', color: 'white', padding: '8px', borderRadius: '4px' }}>
              <Settings size={16} />
            </button>
            <button className="btn" onClick={() => navigate('/product/list')} style={{ background: 'var(--text-muted)', color: 'white', padding: '8px 16px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
              <List size={16} /> Product List
            </button>
            <button className="btn" onClick={() => navigate('/product/group')} style={{ background: 'var(--text-muted)', color: 'white', padding: '8px 16px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
              <Layers size={16} /> Product Group
            </button>
            <button className="btn" style={{ background: 'var(--danger)', color: 'white', padding: '8px 16px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
              <Video size={16} /> YouTube
            </button>
          </div>
        </div>

        <div className="premium-body" style={{ background: 'white', padding: '24px' }}>
          <form>
            <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
              
              {/* Product Name */}
              <div className="form-group" style={{ marginBottom: '0' }}>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center', border: '1px solid #e2e8f0', borderRadius: '4px' }}>
                  <div style={{ padding: '12px', color: 'var(--text-muted)' }}>
                    <Package size={18} />
                  </div>
                  <input type="text" name="productName" value={formData.productName} onChange={handleChange} placeholder=" " style={{ flex: 1, padding: '12px', border: 'none', outline: 'none' }} />
                <label>Product Name</label>
                </div>
              </div>

              {/* Buying Price */}
              <div className="form-group" style={{ marginBottom: '0' }}>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center', border: '1px solid #e2e8f0', borderRadius: '4px' }}>
                  <div style={{ padding: '12px', color: 'var(--text-muted)', fontWeight: 'bold' }}>
                    $
                  </div>
                  <input type="text" name="buyingPrice" value={formData.buyingPrice} onChange={handleChange} placeholder=" " style={{ flex: 1, padding: '12px', border: 'none', outline: 'none' }} />
                <label>Buying Price</label>
                </div>
              </div>

              {/* Selling Price */}
              <div className="form-group" style={{ marginBottom: '0' }}>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center', border: '1px solid #e2e8f0', borderRadius: '4px' }}>
                  <div style={{ padding: '12px', color: 'var(--text-muted)', fontWeight: 'bold' }}>
                    $
                  </div>
                  <input type="text" name="sellingPrice" value={formData.sellingPrice} onChange={handleChange} placeholder=" " style={{ flex: 1, padding: '12px', border: 'none', outline: 'none' }} />
                <label>Selling Price</label>
                </div>
              </div>

              {/* Select a Unit */}
              <div className="form-group" style={{ marginBottom: '0' }}>
                <div className="input-with-append">
                  <select name="unit" value={formData.unit} onChange={handleChange} style={{ padding: '14px', flex: 1, border: '1px solid #e2e8f0', borderRadius: '4px 0 0 4px', outline: 'none', appearance: 'none', background: 'white' }}>
                    <option value="" disabled hidden>Select a Unit</option>
                  </select>
                  <button type="button" className="append-btn" style={{ background: 'var(--success)', color: 'white', border: 'none', padding: '0 16px', borderRadius: '0 4px 4px 0' }}><Plus size={20} /></button>
                </div>
              </div>

              {/* Opening Stock */}
              <div className="form-group" style={{ marginBottom: '0' }}>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center', border: '1px solid #e2e8f0', borderRadius: '4px' }}>
                  <div style={{ padding: '12px', color: 'var(--text-muted)' }}>
                    <Scale size={18} />
                  </div>
                  <input type="text" name="openingStock" value={formData.openingStock} onChange={handleChange} placeholder=" " style={{ flex: 1, padding: '12px', border: 'none', outline: 'none' }} />
                <label>Opening Stock</label>
                </div>
              </div>

              {/* Select Product Group */}
              <div className="form-group" style={{ marginBottom: '0' }}>
                <div className="input-with-append">
                  <select name="productGroup" value={formData.productGroup} onChange={handleChange} style={{ padding: '14px', flex: 1, border: '1px solid #e2e8f0', borderRadius: '4px 0 0 4px', outline: 'none', appearance: 'none', background: 'white' }}>
                    <option value="" disabled hidden>Select Product Group</option>
                  </select>
                  <button type="button" className="append-btn" style={{ background: 'var(--success)', color: 'white', border: 'none', padding: '0 16px', borderRadius: '0 4px 4px 0' }}><Plus size={20} /></button>
                </div>
              </div>
            </div>

            <button type="button" className="btn-primary" style={{ width: '100%', padding: '16px', background: 'var(--success)', border: 'none', borderRadius: '4px', fontSize: '16px' }}>
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
