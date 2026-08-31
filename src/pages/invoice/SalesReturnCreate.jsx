import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { Plus, X, Calendar, Clock, Barcode, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AddOptionModal from '../../components/AddOptionModal';

const SalesReturnCreate = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    clientId: 'C.CASTOMER',
    date: '2026-08-25',
    time: '10:54 AM',
    barcode: '',
    productId: '',
    totalBalanceAcc: 'TOTAL BALENCE',
    mallFerotAcc: 'MALL FEROT',
    receiveAmount: '0',
    sms: false
  });
  
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isTotalBalanceAccModalOpen, setIsTotalBalanceAccModalOpen] = useState(false);
  const [isMallFerotAccModalOpen, setIsMallFerotAccModalOpen] = useState(false);

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px' }}>
      <div className="premium-card">
        <div className="premium-header" style={{ padding: '12px 24px', background: 'white' }}>
          <h2 className="premium-title" style={{ fontSize: '14px', fontWeight: 'bold' }}>
            SALES RETURN | CTRL + S = SAVE | ALT + S = SAVE & PRINT | CTRL + D = ড্রাফ্ট হিসেবে সংরক্ষণ
          </h2>
        </div>

        <div className="premium-body" style={{ background: 'white', paddingTop: '16px' }}>
        <PrintHeader />
          <form>
            {/* Top Row */}
            <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '8px' }}>
              <div className="form-group" style={{ marginBottom: '0' }}>
                <div className="input-with-append">
                  <select name="clientId" value={formData.clientId} onChange={handleChange}>
                    <option value="C.CASTOMER">C.CASTOMER</option>
                  </select>
                  <button type="button" className="clear-btn"><X size={16} /></button>
                  <button type="button" className="append-btn" onClick={() => setIsClientModalOpen(true)}><Plus size={20} /></button>
                </div>
                <div style={{ fontSize: '12px', fontWeight: 'bold', marginTop: '4px' }}>Due: 0</div>
              </div>

              <div className="form-group" style={{ position: 'relative', marginBottom: '0' }}>
                <div className="badge-date" style={{ background: 'var(--info)' }}><Calendar size={12} /> Issued Date</div>
                <input type="date" name="date" className="input-date" value={formData.date} onChange={handleChange} />
              </div>

              <div className="form-group" style={{ marginBottom: '0' }}>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <input type="text" name="time" value={formData.time} onChange={handleChange} style={{ width: '100%', padding: '12px', paddingRight: '40px', border: '1px solid #e2e8f0', borderRadius: '4px', outline: 'none' }} />
                  <Clock size={16} style={{ position: 'absolute', right: '12px', color: '#94a3b8' }} />
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px', position: 'relative' }}>
              <div className="form-group" style={{ marginBottom: '0', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-10px', left: '20px', background: 'var(--primary)', color: 'white', padding: '2px 8px', fontSize: '10px', borderRadius: '4px' }}>Barcode Number</div>
                <div style={{ display: 'flex', border: '1px solid #e2e8f0', borderRadius: '4px', overflow: 'hidden', background: 'var(--card-border)' }}>
                  <div style={{ padding: '12px', borderRight: '1px solid #cbd5e1', display: 'flex', alignItems: 'center' }}>
                    <Barcode size={24} style={{ color: 'var(--text-muted)' }} />
                  </div>
                  <input type="text" placeholder=" " disabled style={{ flex: 1, padding: '12px', border: 'none', outline: 'none', background: 'transparent' }} />
                <label>Barcode Number</label>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '0' }}>
                <div className="input-with-append">
                  <select name="productId" value={formData.productId} onChange={handleChange}>
                    <option value="" disabled hidden>Select Product</option>
                  </select>
                  <button type="button" className="append-btn" onClick={() => setIsProductModalOpen(true)}><Plus size={20} /></button>
                </div>
              </div>
            </div>

            {/* Product Table */}
            <div style={{ border: '1px solid #e2e8f0', marginBottom: '16px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
                <thead>
                  <tr style={{ background: 'var(--secondary)', color: 'white' }}>
                    <th style={{ padding: '8px', textAlign: 'center' }}>SL</th>
                    <th style={{ padding: '8px', textAlign: 'center' }}>PRODUCT</th>
                    <th style={{ padding: '8px', textAlign: 'center' }}>STOCK</th>
                    <th style={{ padding: '8px', textAlign: 'center' }}>PRICE</th>
                    <th style={{ padding: '8px', textAlign: 'center' }}>QUANTITY</th>
                    <th style={{ padding: '8px', textAlign: 'center' }}>UNIT</th>
                    <th style={{ padding: '8px', textAlign: 'center' }}>TOTAL</th>
                    <th style={{ padding: '8px', textAlign: 'center' }}>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Empty state */}
                </tbody>
              </table>
            </div>

            <div style={{ textAlign: 'center', fontSize: '13px', marginBottom: '24px' }}>
              Total Quantity: 0
            </div>

            {/* Bottom Section */}
            <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '40px' }}>
              {/* Left Column - Accounts */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="form-group" style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-10px', left: '20px', background: 'var(--primary)', color: 'white', padding: '2px 8px', fontSize: '10px', borderRadius: '4px', zIndex: 1 }}>Account</div>
                  <div className="input-with-append">
                    <select name="totalBalanceAcc" value={formData.totalBalanceAcc} onChange={handleChange}>
                      <option value="TOTAL BALENCE">TOTAL BALENCE</option>
                    </select>
                    <button type="button" className="clear-btn"><X size={16} /></button>
                    <button type="button" className="append-btn" onClick={() => setIsTotalBalanceAccModalOpen(true)}><Plus size={20} /></button>
                  </div>
                </div>
                
                <div className="input-with-append">
                  <select name="mallFerotAcc" value={formData.mallFerotAcc} onChange={handleChange}>
                    <option value="MALL FEROT">MALL FEROT</option>
                  </select>
                  <button type="button" className="clear-btn"><X size={16} /></button>
                  <button type="button" className="append-btn" onClick={() => setIsMallFerotAccModalOpen(true)}><Plus size={20} /></button>
                </div>

                <div style={{ position: 'relative' }}>
                  <div className="badge-date" style={{ background: 'var(--info)' }}> Receive Amount</div>
                  <input type="text" name="receiveAmount" className="input-date" value={formData.receiveAmount} onChange={handleChange} />
                </div>
              </div>

              {/* Right Column - Summary */}
              <div>
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '4px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', borderBottom: '1px solid #e2e8f0', fontSize: '14px' }}>
                    <span>Invoice Return</span>
                    <span>: 0</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', borderBottom: '1px solid #e2e8f0', fontSize: '14px' }}>
                    <span>Previous Due</span>
                    <span>: 0</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', borderBottom: '1px solid #e2e8f0', fontSize: '14px', fontWeight: 'bold' }}>
                    <span>Upcoming Due</span>
                    <span>: 0</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', borderBottom: '1px solid #e2e8f0', fontSize: '14px' }}>
                    <span>Payment</span>
                    <span>: 0</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', fontSize: '14px', fontWeight: 'bold' }}>
                    <span>সর্বশেষ বাকি</span>
                    <span>: 0.00</span>
                  </div>
                </div>

                <div className="toggle-switch" style={{ border: '1px solid #e2e8f0', borderRadius: '4px', padding: '8px 16px', display: 'flex', alignItems: 'center' }}>
                  <MessageSquare size={18} style={{ color: '#111827', marginRight: '8px' }} />
                  <div className="toggle-label" style={{ flex: 1, fontWeight: 'bold' }}>SMS</div>
                  <label className="switch">
                    <input type="checkbox" name="sms" checked={formData.sms} onChange={handleChange} />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button type="button" className="btn-danger" onClick={() => navigate('/invoice/sales-return/list')} style={{ background: 'var(--danger)', padding: '10px 24px', fontSize: '14px', borderRadius: '4px' }}>
                Cancel
              </button>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button type="button" className="btn-primary" style={{ background: 'var(--success)', padding: '10px 24px', fontSize: '14px', borderRadius: '4px' }}>
                  Save As Draft
                </button>
                <button type="button" className="btn-primary" style={{ background: 'var(--success)', padding: '10px 24px', fontSize: '14px', borderRadius: '4px' }}>
                  Save & Print
                </button>
                <button type="button" className="btn-primary" style={{ background: 'var(--success)', padding: '10px 24px', fontSize: '14px', borderRadius: '4px' }}>
                  Return Invoice
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <AddOptionModal 
        isOpen={isClientModalOpen}
        onClose={() => setIsClientModalOpen(false)}
        onSave={(val) => { console.log('Add Client', val); setIsClientModalOpen(false); }}
        title="Add Client"
        label="Client Name"
      />
      <AddOptionModal 
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        onSave={(val) => { console.log('Add Product', val); setIsProductModalOpen(false); }}
        title="Add Product"
        label="Product Name"
      />
      <AddOptionModal 
        isOpen={isTotalBalanceAccModalOpen}
        onClose={() => setIsTotalBalanceAccModalOpen(false)}
        onSave={(val) => { console.log('Add Total Balance Account', val); setIsTotalBalanceAccModalOpen(false); }}
        title="Add Account"
        label="Account Name"
      />
      <AddOptionModal 
        isOpen={isMallFerotAccModalOpen}
        onClose={() => setIsMallFerotAccModalOpen(false)}
        onSave={(val) => { console.log('Add Mall Ferot Account', val); setIsMallFerotAccModalOpen(false); }}
        title="Add Account"
        label="Account Name"
      />
    </div>
  );
};

export default SalesReturnCreate;
