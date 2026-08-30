import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { List, Play, Plus, Calendar, Type, DollarSign } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import PrintHeader from '../../components/PrintHeader';


const TransferCreate = () => {
  const { t } = useTranslation();

  const { state, addTransfer } = useAppContext();
  const { accounts } = state;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fromAccountId: '',
    toAccountId: '',
    date: new Date().toISOString().split('T')[0],
    description: '',
    amount: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fromAccountId || !formData.toAccountId || !formData.amount) {
      alert("Please select both accounts and enter an amount.");
      return;
    }
    if (formData.fromAccountId === formData.toAccountId) {
      alert("Cannot transfer to the same account.");
      return;
    }

    const fromAcc = accounts.find(a => a.id === Number(formData.fromAccountId));
    if (fromAcc && fromAcc.balance < Number(formData.amount)) {
      alert("Insufficient balance in the source account!");
      return;
    }

    addTransfer({
      fromAccountId: formData.fromAccountId,
      toAccountId: formData.toAccountId,
      amount: formData.amount,
      description: formData.description,
      date: formData.date
    });

    alert("Transfer successful!");
    navigate('/account/transfer-list');
  };

  return (
    <div className="premium-card">
        <PrintHeader />
      <div className="premium-header">
        <h2 className="premium-title" style={{ textTransform: 'uppercase' }}>New Transfer</h2>
        <div className="header-actions">
          <button className="btn-gray-outline" onClick={() => navigate('/account/transfer-list')}><List size={16} /> Transfer List</button>
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
              <div className="input-with-append">
                <select name="fromAccountId" value={formData.fromAccountId} onChange={handleChange} required>
                  <option value="" disabled hidden>From Account</option>
                  {accounts.map(acc => (
                    <option key={acc.id} value={acc.id}>{acc.name} ({acc.balance})</option>
                  ))}
                </select>
                <button type="button" className="append-btn"><Plus size={20} /></button>
              </div>
            </div>
            <div className="form-col">
              <div className="input-with-append">
                <select name="toAccountId" value={formData.toAccountId} onChange={handleChange} required>
                  <option value="" disabled hidden>To Account</option>
                  {accounts.map(acc => (
                    <option key={acc.id} value={acc.id}>{acc.name} ({acc.balance})</option>
                  ))}
                </select>
                <button type="button" className="append-btn"><Plus size={20} /></button>
              </div>
            </div>
            <div className="form-col" style={{ position: 'relative' }}>
              <div className="badge-date"><Calendar size={12} /> Date</div>
              <input type="date" name="date" className="input-date" value={formData.date} onChange={handleChange} />
            </div>
          </div>

          {/* Row 2 */}
          <div className="form-row" style={{ marginTop: '20px' }}>
            <div className="form-col">
              <Type size={18} className="input-icon-left" />
              <input type="text" name="description" className="input-with-icon" placeholder=" " value={formData.description} onChange={handleChange} />
                <label>Description</label>
            </div>
            <div className="form-col">
              <DollarSign size={18} className="input-icon-left" />
              <input type="number" name="amount" className="input-with-icon" placeholder=" " value={formData.amount} onChange={handleChange} required />
                <label>Amount</label>
            </div>
          </div>

          {/* Footer */}
          <div style={{ marginTop: '24px' }}>
            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '12px', fontSize: '16px', background: 'var(--success)', borderColor: 'var(--success)' }}>
              Add Transfer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransferCreate;
