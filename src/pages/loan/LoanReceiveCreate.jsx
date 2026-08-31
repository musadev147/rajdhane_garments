import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { List, Play, Plus, Calendar, DollarSign, FileText, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PrintHeader from '../../components/PrintHeader';
import AddOptionModal from '../../components/AddOptionModal';


const LoanReceiveCreate = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    clientId: '',
    accountId: '',
    date: new Date().toISOString().split('T')[0], // YYYY-MM-DD
    amount: '',
    note: '',
    categoryId: '',
    sms: false
  });
  
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Loan Receive added successfully!");
    navigate('/loan/receive');
  };

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px' }}>
        <PrintHeader />
      <div className="premium-card">
        <div className="premium-header">
          <h2 className="premium-title">Create Loan Receive</h2>
          <div className="header-actions">
            <button className="btn-gray-outline" onClick={() => navigate('/loan/receive')}>
              <List size={16} /> List
            </button>
            <button className="btn-youtube" style={{ border: '1px solid #e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', background: 'white', color: 'black', padding: '6px 12px', fontSize: '14px', fontWeight: 'bold' }}>
                <span style={{ backgroundColor: 'red', color: 'white', borderRadius: '4px', padding: '0 4px', fontSize: '10px', marginRight: '6px' }}>▶</span> YouTube
              </div>
            </button>
          </div>
        </div>

        <div className="premium-body" style={{ background: 'white' }}>
          <form onSubmit={handleSubmit}>
            {/* Row 1 */}
            <div className="form-row">
              <div className="form-col">
                <div className="input-with-append">
                  <select name="clientId" value={formData.clientId} onChange={handleChange} required>
                    <option value="" disabled hidden>{t('common.select_client')}</option>
                    <option value="1">CASH BASHI</option>
                    <option value="2">LAL MIYA //LATA GARAJ</option>
                  </select>
                  <button type="button" className="append-btn" onClick={() => setIsClientModalOpen(true)}><Plus size={20} /></button>
                </div>
              </div>
              <div className="form-col" style={{ position: 'relative' }}>
                <div className="badge-date"><Calendar size={12} /> Date</div>
                <input type="date" name="date" className="input-date" value={formData.date} onChange={handleChange} />
              </div>
            </div>

            {/* Row 2 */}
            <div className="form-row">
              <div className="form-col">
                <div className="input-with-append">
                  <select name="accountId" value={formData.accountId} onChange={handleChange} required>
                    <option value="" disabled hidden>Select Account</option>
                    <option value="1">Cash</option>
                    <option value="2">Bank</option>
                  </select>
                  <button type="button" className="append-btn" onClick={() => setIsAccountModalOpen(true)}><Plus size={20} /></button>
                </div>
              </div>
              <div className="form-col">
                <FileText size={18} className="input-icon-left" />
                <input type="text" name="note" className="input-with-icon" placeholder=" " value={formData.note} onChange={handleChange} />
                <label>Receive Description in a short note</label>
              </div>
            </div>

            {/* Row 3 */}
            <div className="form-row">
              <div className="form-col">
                <DollarSign size={18} className="input-icon-left" />
                <input type="number" name="amount" className="input-with-icon" placeholder=" " value={formData.amount} onChange={handleChange} required />
                <label>Amount</label>
              </div>
              <div className="form-col">
                <div className="input-with-append">
                  <select name="categoryId" value={formData.categoryId} onChange={handleChange} required>
                    <option value="" disabled hidden>Select Categories</option>
                    <option value="1">Advance</option>
                    <option value="2">Return</option>
                  </select>
                  <button type="button" className="append-btn" onClick={() => setIsCategoryModalOpen(true)}><Plus size={20} /></button>
                </div>
              </div>
            </div>

            {/* Row 4 */}
            <div className="form-row">
              <div className="form-col" style={{ flex: 'none', width: '50%' }}>
                <div className="toggle-switch">
                  <MessageSquare size={18} className="input-icon" style={{ color: '#111827' }} />
                  <div className="toggle-label">SMS</div>
                  <label className="switch">
                    <input type="checkbox" name="sms" checked={formData.sms} onChange={handleChange} />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
              <button type="submit" className="btn-primary" style={{ background: 'var(--primary)', padding: '10px 24px', fontSize: '14px', borderRadius: '4px' }}>
                Add New Receive
              </button>
              <button type="button" className="btn-danger" onClick={() => navigate('/loan/receive')} style={{ background: 'var(--danger)', padding: '10px 24px', fontSize: '14px', borderRadius: '4px' }}>
                Close
              </button>
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
        isOpen={isAccountModalOpen}
        onClose={() => setIsAccountModalOpen(false)}
        onSave={(val) => { console.log('Add Account', val); setIsAccountModalOpen(false); }}
        title="Add Account"
        label="Account Name"
      />
      <AddOptionModal 
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        onSave={(val) => { console.log('Add Category', val); setIsCategoryModalOpen(false); }}
        title="Add Category"
        label="Category Name"
      />
    </div>
  );
};

export default LoanReceiveCreate;
