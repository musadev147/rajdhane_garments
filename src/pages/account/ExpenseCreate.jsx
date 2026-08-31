import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { List, Play, Plus, X, Calendar, DollarSign, Type } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import PrintHeader from '../../components/PrintHeader';
import AddOptionModal from '../../components/AddOptionModal';


const ExpenseCreate = () => {
  const { t } = useTranslation();

  const { state, addExpense } = useAppContext();
  const { accounts } = state;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    accountId: '',
    category: '',
    date: new Date().toISOString().split('T')[0],
    amount: '',
    note: ''
  });
  
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.accountId || !formData.amount || !formData.category) {
      alert("Please select account, category, and enter amount.");
      return;
    }

    const account = accounts.find(a => a.id === Number(formData.accountId));
    if (account && account.balance < Number(formData.amount)) {
      alert("Insufficient balance in the selected account.");
      return;
    }

    addExpense({
      accountId: formData.accountId,
      category: formData.category,
      amount: formData.amount,
      note: formData.note,
      date: formData.date
    });

    alert("Expense added successfully!");
    navigate('/account/expense-list');
  };

  return (
    <div className="premium-card">
        <PrintHeader />
      <div className="premium-header">
        <h2 className="premium-title" style={{ textTransform: 'uppercase' }}>Add New Expense</h2>
        <div className="header-actions">
          <button className="btn-gray-outline" onClick={() => navigate('/account/expense-list')}><List size={16} /> Expense List</button>
          <button className="btn-gray-outline"><List size={16} /> Expense Category</button>
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
                <select name="accountId" value={formData.accountId} onChange={handleChange} required>
                  <option value="" disabled hidden>Select Account</option>
                  {accounts.map(acc => (
                    <option key={acc.id} value={acc.id}>{acc.name} ({acc.balance})</option>
                  ))}
                </select>
                <button type="button" className="clear-btn" onClick={() => setFormData({...formData, accountId: ''})}><X size={16} /></button>
                <button type="button" className="append-btn" onClick={() => setIsAccountModalOpen(true)}><Plus size={20} /></button>
              </div>
            </div>
            <div className="form-col">
              <div className="input-with-append">
                <select name="category" value={formData.category} onChange={handleChange} required>
                  <option value="" disabled hidden>Choose Category</option>
                  <option value="Staff Salary">Staff Salary</option>
                  <option value="Electricity Bill">Electricity Bill</option>
                  <option value="Office Rent">Office Rent</option>
                  <option value="Internet Bill">Internet Bill</option>
                  <option value="Marketing">Marketing</option>
                </select>
                <button type="button" className="clear-btn" onClick={() => setFormData({...formData, category: ''})}><X size={16} /></button>
                <button type="button" className="append-btn" onClick={() => setIsCategoryModalOpen(true)}><Plus size={20} /></button>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="form-row" style={{ marginTop: '36px' }}>
            <div className="form-col" style={{ position: 'relative' }}>
              <div className="badge-date"><Calendar size={12} /> Date</div>
              <input type="date" name="date" className="input-date" value={formData.date} onChange={handleChange} />
            </div>
            <div className="form-col">
              <DollarSign size={18} className="input-icon-left" />
              <input type="number" name="amount" className="input-with-icon" placeholder=" " value={formData.amount} onChange={handleChange} required />
                <label>Amount</label>
            </div>
          </div>

          {/* Row 3 */}
          <div className="form-row" style={{ marginTop: '20px' }}>
            <div className="form-col" style={{ flex: '1' }}>
              <Type size={18} className="input-icon-left" />
              <input type="text" name="note" className="input-with-icon" placeholder=" " value={formData.note} onChange={handleChange} />
                <label>Expense short Note</label>
            </div>
          </div>

          {/* Footer */}
          <div style={{ marginTop: '24px' }}>
            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '12px', fontSize: '16px', background: 'var(--warning)', borderColor: 'var(--warning)' }}>
              Add Expense
            </button>
          </div>
        </form>
      </div>

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

export default ExpenseCreate;
