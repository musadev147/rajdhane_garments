import React from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { ArrowLeft, Play, Printer, RotateCcw, Edit, Trash2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

const AccountList = () => {
  const { t } = useTranslation();

  const { state } = useAppContext();
  const { accounts } = state;
  const navigate = useNavigate();

  return (
    <div className="premium-card">
      <div className="premium-header">
        <h2 className="premium-title" style={{ textTransform: 'uppercase' }}>Account List</h2>
        <div className="header-actions">
          <button className="btn-gray-outline" onClick={() => navigate(-1)}><ArrowLeft size={16} /> Go Back</button>
          <Link to="/account/account-create" style={{ textDecoration: 'none' }}>
            <button className="btn-green">Add New</button>
          </Link>
          <button className="btn-youtube">
            <div style={{ display: 'flex', alignItems: 'center', background: '#ff0000', color: 'white', padding: '6px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold' }}>
              <Play size={16} fill="white" style={{ marginRight: '6px' }} /> YouTube
            </div>
          </button>
        </div>
      </div>

      <div className="premium-body" style={{ padding: '24px' }}>
        <PrintHeader />
        
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
            <button className="btn-blue" style={{ padding: '6px 12px', fontSize: '12px', fontWeight: 'bold' }}>Excel</button>
            <button className="btn-blue" style={{ padding: '6px 12px', fontSize: '12px', fontWeight: 'bold' }}>CSV</button>
            <button className="btn-blue" style={{ padding: '6px 12px', fontSize: '12px', fontWeight: 'bold' }}>PDF</button>
            <button className="btn-blue" style={{ padding: '6px 12px', fontSize: '12px', fontWeight: 'bold' }} onClick={() => window.print()}><Printer size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }}/> {t('common.print')}</button>
            <button className="btn-blue" style={{ padding: '6px 12px', fontSize: '12px', fontWeight: 'bold' }}><RotateCcw size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }}/> {t('common.reset')}</button>
          </div>
        </div>

        <table className="custom-table" style={{ border: '1px solid #d1d5db' }}>
          <thead>
            <tr>
              <th style={{ width: '80px' }}>ID NO<span style={{ fontSize: '10px', verticalAlign: 'super', marginLeft: '4px' }}>↑↓</span></th>
              <th>TITLE<span style={{ fontSize: '10px', verticalAlign: 'super', marginLeft: '4px' }}>↑↓</span></th>
              <th>{t('common.account')}</th>
              <th>{t('common.description')}</th>
              <th>CONTACT PERSON</th>
              <th>PHONE NUMBER</th>
              <th style={{ width: '120px' }}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((acc, idx) => (
              <tr key={acc.id}>
                <td>{idx + 1}</td>
                <td>{acc.name}</td>
                <td>{acc.accountNumber || 'N/A'}</td>
                <td>{acc.description || 'N/A'}</td>
                <td>{acc.contactPerson || 'N/A'}</td>
                <td>{acc.phone || 'N/A'}</td>
                <td>
                  <div style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
                    <button style={{ background: 'var(--info)', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}><Edit size={14} /></button>
                    <button style={{ background: 'var(--danger)', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}><Trash2 size={14} /></button>
                  </div>
                </td>
              </tr>
            ))}
            {accounts.length === 0 && (
              <tr>
                <td colSpan="7" style={{ textAlign: 'center', padding: '20px' }}>No accounts found.</td>
              </tr>
            )}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default AccountList;
