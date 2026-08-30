import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Settings, List, Layers, Play, X, Plus, Calendar, BookOpen, DollarSign, MessageSquare } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import PrintHeader from '../../components/PrintHeader';


const ReceiveCreate = () => {
  const { t } = useTranslation();

  const { state, recordReceive } = useAppContext();
  const { clients, accounts } = state;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    clientId: '',
    category: '',
    date: new Date().toISOString().split('T')[0],
    description: '',
    amount: '',
    accountId: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectedClient = clients.find(c => c.id === Number(formData.clientId));
  const dueAmount = selectedClient ? selectedClient.due : 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.accountId || !formData.amount) {
      alert("Please enter amount and select an account.");
      return;
    }
    
    recordReceive({
      clientId: formData.clientId,
      accountId: formData.accountId,
      amount: formData.amount,
      description: formData.description,
      date: formData.date
    });
    
    alert("Receive added successfully!");
    navigate('/account/receive-list');
  };

  return (
    <div className="premium-card">
        <PrintHeader />
      <div className="premium-header">
        <h2 className="premium-title">Add New Receive</h2>
        <div className="header-actions">
          <button className="btn-icon"><Settings size={18} /></button>
          <button className="btn-gray-outline" onClick={() => navigate('/account/receive-list')}><List size={16} /> Receive List</button>
          <button className="btn-gray-outline"><Layers size={16} /> Receive Category</button>
          <button className="btn-youtube">
            <div style={{ display: 'flex', alignItems: 'center', background: '#ff0000', color: 'white', padding: '6px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold' }}>
              <Play size={16} fill="white" style={{ marginRight: '6px' }} /> YouTube
            </div>
            <div style={{ background: 'var(--success)', color: 'white', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '-10px', border: '2px solid white' }}>M</div>
          </button>
        </div>
      </div>

      <div className="premium-body">
        <form onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div className="form-row">
            <div className="form-col">
              <div className="input-with-append">
                <select name="clientId" value={formData.clientId} onChange={handleChange} required>
                  <option value="" disabled hidden>{t('common.select_client')}</option>
                  {clients.map(client => (
                    <option key={client.id} value={client.id}>{client.name}</option>
                  ))}
                </select>
                <button type="button" className="append-btn"><Plus size={20} /></button>
              </div>
            </div>
            <div className="form-col">
              <div className="input-with-append">
                <select name="category" value={formData.category} onChange={handleChange}>
                  <option value="" disabled hidden>Choose category</option>
                  <option value="sales">Sales Revenue</option>
                  <option value="service">Service Fee</option>
                </select>
                <button type="button" className="append-btn"><Plus size={20} /></button>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="form-row" style={{ marginTop: '36px' }}>
            <div className="form-col">
              <div className="badge-due">Due: {dueAmount}</div>
              <div className="badge-date"><Calendar size={12} /> Date</div>
              <input type="date" name="date" className="input-date" value={formData.date} onChange={handleChange} />
            </div>
            <div className="form-col">
              <div className="input-with-append">
                <input type="text" value={accounts.find(a => a.id === Number(formData.accountId))?.balance || "SELECT ACCOUNT"} readOnly style={{ color: 'var(--text-muted)' }} placeholder="ACCOUNT BALANCE" />
                <button type="button" className="clear-btn" onClick={() => setFormData({...formData, accountId: ''})}><X size={16} /></button>
                <button type="button" className="append-btn"><Plus size={20} /></button>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="form-row">
            <div className="form-col">
              <BookOpen size={18} className="input-icon-left" />
              <input type="text" name="description" className="input-with-icon" placeholder=" " value={formData.description} onChange={handleChange} />
                <label>Receive Description in a short note</label>
            </div>
            <div className="form-col">
              <DollarSign size={18} className="input-icon-left" />
              <input type="number" name="amount" className="input-with-icon" placeholder=" " value={formData.amount} onChange={handleChange} required />
                <label>Amount</label>
            </div>
          </div>

          {/* Row 4 */}
          <div className="form-row">
            <div className="form-col">
              <div className="input-with-append">
                <select name="accountId" value={formData.accountId} onChange={handleChange} required>
                  <option value="" disabled hidden>Select Account</option>
                  {accounts.map(acc => (
                    <option key={acc.id} value={acc.id}>{acc.name} - Balance: {acc.balance}</option>
                  ))}
                </select>
                <button type="button" className="clear-btn" onClick={() => setFormData({...formData, accountId: ''})}><X size={16} /></button>
                <button type="button" className="append-btn"><Plus size={20} /></button>
              </div>
            </div>
            <div className="form-col">
              <div className="toggle-switch">
                <div className="toggle-label">
                  <MessageSquare size={18} /> SMS
                </div>
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          </div>

          <div className="premium-footer">
            <button type="submit" className="btn-primary">Add New Receive</button>
            <button type="button" className="btn-danger" onClick={() => navigate('/dashboard')}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReceiveCreate;
