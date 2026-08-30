import React from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { Plus, Play, Printer, RotateCcw, Edit, Trash2 } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';

const ReceiveList = () => {
  const { t } = useTranslation();

  const { state } = useAppContext();
  const { transactions, clients } = state;
  const navigate = useNavigate();

  // Filter only Receive transactions
  const receives = transactions.filter(t => t.type === 'Receive');

  const getClientDetails = (clientId) => {
    const client = clients.find(c => c.id === Number(clientId));
    if (!client) return 'Unknown Client';
    return `Name: ${client.name}\nNumber: ${client.phone}`;
  };

  return (
    <div className="premium-card">
      <div className="premium-body" style={{ padding: '40px' }}>
        <PrintHeader />
        
        {/* Header Text Section */}
        

        {/* Title and Top Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '400', color: '#4b5563', margin: 0 }}>Receive List</h2>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="btn-green" onClick={() => navigate('/account/receive-create')}>
              <Plus size={16} /> Add New Receive
            </button>
            <button className="btn-youtube">
              <div style={{ display: 'flex', alignItems: 'center', background: '#ff0000', color: 'white', padding: '6px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold' }}>
                <Play size={16} fill="white" style={{ marginRight: '6px' }} /> YouTube
              </div>
            </button>
          </div>
        </div>

        {/* Filter Section */}
        <div className="filter-grid">
          <div>
            <label className="filter-label">{t('common.search_by_client')}</label>
            <select className="input-outline">
              <option value="">{t('common.select_client')}</option>
              {clients.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>
          <div className="input-badge-top">
            <span className="badge-top-label">Invoice No</span>
            <input type="text" className="input-outline" placeholder=" " />
                <label>Invoice No</label>
          </div>
          <div className="input-badge-top">
            <span className="badge-top-label">Receipt No</span>
            <input type="text" className="input-outline" placeholder=" " />
                <label>Receipt No</label>
          </div>
          <div>
            <label className="filter-label">{t('common.search_by_date')}</label>
            <div style={{ display: 'flex' }}>
              <input type="date" className="input-outline" style={{ borderRadius: '8px 0 0 8px', borderRight: 'none' }} />
              <input type="date" className="input-outline" style={{ borderRadius: '0 8px 8px 0' }} />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
          <button className="btn-secondary">{t('common.clear_filter')}</button>
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

        <table className="custom-table">
          <thead>
            <tr>
              <th>{t('common.sl')}<span style={{ fontSize: '10px', verticalAlign: 'super' }}>↑↓</span></th>
              <th>{t('common.date')}</th>
              <th>RECEIPT NO</th>
              <th>INVOICE NO</th>
              <th>CLIENT</th>
              <th>TYPE</th>
              <th>{t('common.description')}</th>
              <th>{t('common.amount')}</th>
              <th>MONEY RECEIPT</th>
              <th>{t('common.action')}</th>
            </tr>
          </thead>
          <tbody>
            {receives.map((row, idx) => (
              <tr key={row.id}>
                <td>{idx + 1}</td>
                <td>{row.date.split('T')[0]}</td>
                <td>{row.id.toString().slice(-5)}</td>
                <td>N/A</td>
                <td style={{ whiteSpace: 'pre-line', textAlign: 'center' }}>{getClientDetails(row.clientId)}</td>
                <td>{row.type}</td>
                <td>{row.description}</td>
                <td>{row.amount}</td>
                <td>
                  <button className="action-btn-sm print"><Printer size={16} /></button>
                </td>
                <td>
                  <button className="action-btn-sm edit"><Edit size={16} /></button>
                  <button className="action-btn-sm delete"><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
            {receives.length === 0 && (
              <tr>
                <td colSpan="10" style={{ textAlign: 'center', padding: '20px' }}>No receives found. Add one above!</td>
              </tr>
            )}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default ReceiveList;
