import React from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { Printer, RotateCcw, Play, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

const TransferList = () => {
  const { t } = useTranslation();

  const { state } = useAppContext();
  const { transfers, accounts } = state;
  const navigate = useNavigate();

  const getAccountName = (id) => {
    const acc = accounts.find(a => a.id === Number(id));
    return acc ? acc.name : 'Unknown';
  };

  const totalAmount = transfers.reduce((sum, t) => sum + (Number(t.amount) || 0), 0);

  return (
    <div className="premium-card">
      <div className="premium-body" style={{ padding: '40px' }}>
        <PrintHeader />
        
        {/* Top Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{ background: '#06b6d4', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => window.print()}>{t('common.print')}</button>
            <Link to="/account/transfer-create" style={{ textDecoration: 'none' }}>
              <button className="btn-green" style={{ padding: '8px 16px', fontWeight: 'bold' }}>Add New</button>
            </Link>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{ background: '#1f2937', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => navigate(-1)}><ArrowLeft size={16} style={{ display: 'inline', verticalAlign: 'middle' }} /> Go Back</button>
            <button className="btn-youtube">
              <div style={{ display: 'flex', alignItems: 'center', background: '#ff0000', color: 'white', padding: '6px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold' }}>
                <Play size={16} fill="white" style={{ marginRight: '6px' }} /> YouTube
              </div>
            </button>
          </div>
        </div>

        {/* Header Text Section */}
        

        {/* Filter Section */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '40px', alignItems: 'end' }}>
          <div style={{ flex: 1.5 }}>
            <label className="filter-label">Search By Account</label>
            <select className="input-outline">
              <option value="">Select Account</option>
              {accounts.map(acc => <option key={acc.id} value={acc.id}>{acc.name}</option>)}
            </select>
          </div>
          <div style={{ flex: 1.5 }}>
            <label className="filter-label">Search By Type</label>
            <select className="input-outline">
              <option value="">Choose one</option>
            </select>
          </div>
          <div style={{ flex: 2 }}>
            <label className="filter-label">{t('common.search_by_date')}</label>
            <div style={{ display: 'flex' }}>
              <input type="date" className="input-outline" style={{ borderRadius: '8px 0 0 8px', borderRight: 'none' }} />
              <input type="date" className="input-outline" style={{ borderRadius: '0 8px 8px 0' }} />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <button className="btn-secondary" style={{ width: '100%', height: '44px' }}>{t('common.clear_filter')}</button>
          </div>
        </div>

        {/* Table Section */}
        <div className="table-header-controls" style={{ marginBottom: '16px' }}>
          <div className="show-entries">
            Show 
            <select defaultValue="100">
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select> 
            entries
          </div>
          <div className="table-controls-right" style={{ gap: '4px' }}>
            <button className="btn-blue" style={{ padding: '6px 12px', fontSize: '12px', fontWeight: 'bold' }} onClick={() => window.print()}><Printer size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }}/> {t('common.print')}</button>
            <button className="btn-blue" style={{ padding: '6px 12px', fontSize: '12px', fontWeight: 'bold' }}>Excel</button>
            <button className="btn-blue" style={{ padding: '6px 12px', fontSize: '12px', fontWeight: 'bold' }}>CSV</button>
            <button className="btn-blue" style={{ padding: '6px 12px', fontSize: '12px', fontWeight: 'bold' }}>PDF</button>
            <button className="btn-blue" style={{ padding: '6px 12px', fontSize: '12px', fontWeight: 'bold' }}><RotateCcw size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }}/> {t('common.reset')}</button>
          </div>
        </div>

        <table className="custom-table" style={{ border: '1px solid #d1d5db' }}>
          <thead>
            <tr>
              <th style={{ width: '60px' }}>SL<span style={{ fontSize: '10px', verticalAlign: 'super', marginLeft: '4px' }}>↑↓</span></th>
              <th>{t('common.date')}</th>
              <th>TYPE</th>
              <th>FROM ACCOUNT</th>
              <th>TO ACCOUNT</th>
              <th>{t('common.description')}</th>
              <th>{t('common.amount')}</th>
              <th>{t('common.action')}</th>
            </tr>
          </thead>
          <tbody>
            {transfers.map((t, idx) => (
              <tr key={t.id}>
                <td style={{ textAlign: 'center' }}>{idx + 1}</td>
                <td style={{ textAlign: 'center' }}>{t.date.split('T')[0]}</td>
                <td style={{ textAlign: 'center' }}>Transfer</td>
                <td style={{ textAlign: 'center' }}>{getAccountName(t.fromAccountId)}</td>
                <td style={{ textAlign: 'center' }}>{getAccountName(t.toAccountId)}</td>
                <td style={{ textAlign: 'center' }}>{t.description || 'N/A'}</td>
                <td style={{ textAlign: 'center' }}>{t.amount}</td>
                <td style={{ textAlign: 'center' }}>
                  <button style={{ background: '#06b6d4', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}>{t('common.print')}</button>
                </td>
              </tr>
            ))}
            {transfers.length === 0 && (
              <tr>
                <td colSpan="8" style={{ padding: '24px', color: '#374151', background: 'white', textAlign: 'center' }}>No data available in table</td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr style={{ fontWeight: 'bold', background: '#f9fafb' }}>
              <td colSpan="6" style={{ textAlign: 'center' }}>{t('common.total')}</td>
              <td style={{ textAlign: 'center' }}>{totalAmount}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>

      </div>
    </div>
  );
};

export default TransferList;
