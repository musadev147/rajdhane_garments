import React from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { Plus, Play, Printer, RotateCcw, Edit, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

const ExpenseList = () => {
  const { t } = useTranslation();

  const { state } = useAppContext();
  const { expenses, accounts } = state;

  const getAccountName = (id) => {
    const acc = accounts.find(a => a.id === Number(id));
    return acc ? acc.name : 'Unknown';
  };

  const totalAmount = expenses.reduce((sum, e) => sum + (Number(e.amount) || 0), 0);

  return (
    <div className="premium-card">
      <div className="premium-body" style={{ padding: '40px' }}>
        <PrintHeader />
        
        {/* Header Text Section */}
        

        {/* Title and Top Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '400', color: '#4b5563', margin: 0 }}>Expense List</h2>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Link to="/account/expense-create" style={{ textDecoration: 'none' }}>
              <button className="btn-green">
                <Plus size={16} /> Expense Create
              </button>
            </Link>
            <button className="btn-youtube">
              <div style={{ display: 'flex', alignItems: 'center', background: '#ff0000', color: 'white', padding: '6px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold' }}>
                <Play size={16} fill="white" style={{ marginRight: '6px' }} /> YouTube
              </div>
            </button>
          </div>
        </div>

        {/* Filter Section */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '40px', alignItems: 'end' }}>
          <div style={{ flex: 1 }}>
            <label className="filter-label">{t('common.search_by_client')}</label>
            <select className="input-outline">
              <option value="">{t('common.select_client')}</option>
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label className="filter-label">{t('common.search_by_date')}</label>
            <div style={{ display: 'flex' }}>
              <input type="date" className="input-outline" style={{ borderRadius: '8px 0 0 8px', borderRight: 'none' }} />
              <input type="date" className="input-outline" style={{ borderRadius: '0 8px 8px 0' }} />
            </div>
          </div>
          <div style={{ flex: 2 }}>
            <button className="btn-secondary" style={{ width: '100%', height: '44px' }}>{t('common.clear_filter')}</button>
          </div>
        </div>

        {/* Table Section */}
        <div className="table-header-controls">
          <div className="show-entries">
            Show 
            <select defaultValue="100">
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select> 
            entries
          </div>
          <div className="table-controls-right">
            <button className="btn-blue" onClick={() => window.print()}><Printer size={16} /> {t('common.print')}</button>
            <button className="btn-blue"><RotateCcw size={16} /> {t('common.reset')}</button>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table className="custom-table" style={{ border: '1px solid #d1d5db', minWidth: '1200px' }}>
            <thead>
              <tr>
                <th>{t('common.sl')}<span style={{ fontSize: '10px', verticalAlign: 'super' }}>↑↓</span></th>
                <th>{t('common.date')}</th>
                <th>{t('common.category')}</th>
                <th>{t('common.account')}</th>
                <th>{t('common.description')}</th>
                <th>{t('common.amount')}</th>
                <th>{t('common.action')}</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((exp, idx) => (
                <tr key={exp.id}>
                  <td style={{ textAlign: 'center' }}>{idx + 1}</td>
                  <td style={{ textAlign: 'center' }}>{exp.date.split('T')[0]}</td>
                  <td style={{ textAlign: 'center' }}>{exp.category}</td>
                  <td style={{ textAlign: 'center' }}>{getAccountName(exp.accountId)}</td>
                  <td style={{ textAlign: 'center' }}>{exp.note || 'N/A'}</td>
                  <td style={{ textAlign: 'center' }}>{exp.amount}</td>
                  <td style={{ textAlign: 'center' }}>
                    <div style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
                      <button style={{ background: 'var(--info)', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}><Edit size={14} /></button>
                      <button style={{ background: 'var(--danger)', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}><Trash2 size={14} /></button>
                    </div>
                  </td>
                </tr>
              ))}
              {expenses.length === 0 && (
                <tr>
                  <td colSpan="7" style={{ padding: '24px', color: '#374151', background: 'white', textAlign: 'center' }}>{t('common.no_records')}</td>
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr style={{ fontWeight: 'bold', background: '#f9fafb' }}>
                <td colSpan="5" style={{ textAlign: 'center' }}>{t('common.total')}</td>
                <td style={{ textAlign: 'center' }}>{totalAmount}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>

      </div>
    </div>
  );
};

export default ExpenseList;
