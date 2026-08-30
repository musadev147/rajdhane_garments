import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { User, List, ArrowLeft, Play } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import PrintHeader from '../../components/PrintHeader';


const AccountCreate = () => {
  const { t } = useTranslation();

  const { addAccount } = useAppContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    balance: '',
    accountNumber: '',
    contactPerson: '',
    phone: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.balance) {
      alert("Account Title and Initial Balance are required!");
      return;
    }
    
    addAccount({
      name: formData.name,
      balance: Number(formData.balance) || 0,
      accountNumber: formData.accountNumber,
      contactPerson: formData.contactPerson,
      phone: formData.phone,
      description: formData.description,
      type: 'Bank'
    });
    
    alert("Account added successfully!");
    navigate('/account/account-balance');
  };

  return (
    <div className="premium-card">
        <PrintHeader />
      <div className="premium-header">
        <h2 className="premium-title" style={{ textTransform: 'uppercase' }}>Add New Account</h2>
        <div className="header-actions">
          <button className="btn-gray-outline" onClick={() => navigate('/account/account-balance')}><List size={16} /> Account List</button>
          <button className="btn-gray-outline" onClick={() => navigate(-1)}><ArrowLeft size={16} /> Go Back</button>
          <button className="btn-youtube">
            <div style={{ display: 'flex', alignItems: 'center', background: '#ff0000', color: 'white', padding: '6px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold' }}>
              <Play size={16} fill="white" style={{ marginRight: '6px' }} /> YouTube
            </div>
          </button>
        </div>
      </div>

      <div className="premium-body">
        <form onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div className="form-row" style={{ marginTop: '24px' }}>
            <div className="form-col">
              <User size={18} className="input-icon-left" />
              <input type="text" name="name" className="input-with-icon" placeholder=" " value={formData.name} onChange={handleChange} required />
                <label>Account Title</label>
            </div>
            <div className="form-col">
              <User size={18} className="input-icon-left" />
              <input type="number" name="balance" className="input-with-icon" placeholder=" " value={formData.balance} onChange={handleChange} required />
                <label>Initial Balance</label>
            </div>
          </div>

          {/* Row 2 */}
          <div className="form-row">
            <div className="form-col">
              <User size={18} className="input-icon-left" />
              <input type="text" name="accountNumber" className="input-with-icon" placeholder=" " value={formData.accountNumber} onChange={handleChange} />
                <label>Account Number</label>
            </div>
            <div className="form-col">
              <User size={18} className="input-icon-left" />
              <input type="text" name="contactPerson" className="input-with-icon" placeholder=" " value={formData.contactPerson} onChange={handleChange} />
                <label>Contact Person</label>
            </div>
          </div>

          {/* Row 3 */}
          <div className="form-row">
            <div className="form-col" style={{ flex: '0 0 calc(50% - 12px)' }}>
              <User size={18} className="input-icon-left" />
              <input type="text" name="phone" className="input-with-icon" placeholder=" " value={formData.phone} onChange={handleChange} />
                <label>Phone Number</label>
            </div>
          </div>

          {/* Row 4 (Description Textarea) */}
          <div style={{ marginTop: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#374151' }}>Description</label>
            <textarea 
              name="description"
              className="input-outline" 
              placeholder="Account Description" 
              style={{ width: '100%', height: '120px', padding: '12px', resize: 'vertical' }}
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Footer */}
          <div style={{ marginTop: '24px' }}>
            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '12px', fontSize: '16px', background: '#34d399', borderColor: '#34d399' }}>
              Add Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountCreate;
