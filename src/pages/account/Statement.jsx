import React from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { Printer, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

const Statement = () => {
  const { t } = useTranslation();

  return (
    <div className="premium-card">
      <div className="premium-body" style={{ padding: '40px' }}>
        <PrintHeader />
        
        {/* Top Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <Link to="/account/account-create" style={{ textDecoration: 'none' }}>
              <button className="btn-green" style={{ padding: '8px 16px', fontWeight: 'bold' }}>Add New</button>
            </Link>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Link to="/account/account-balance" style={{ textDecoration: 'none' }}>
              <button className="btn-green" style={{ padding: '8px 16px', fontWeight: 'bold' }}>Account Balance</button>
            </Link>
            <button style={{ background: '#1f2937', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>Go Back</button>
          </div>
        </div>

        {/* Header Text Section */}
        

        {/* Filter Section */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '40px', alignItems: 'end' }}>
          <div style={{ flex: 1 }}>
            <label className="filter-label">Client Search</label>
            <select className="input-outline">
              <option value="">{t('common.select_client')}</option>
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label className="filter-label">Search Account</label>
            <select className="input-outline">
              <option value="">Select Account</option>
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label className="filter-label">Search Type</label>
            <select className="input-outline">
              <option value="">Choose one</option>
            </select>
          </div>
          <div style={{ flex: 1.5 }}>
            <label className="filter-label">Search Date</label>
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

        <table className="custom-table" style={{ border: '1px solid #d1d5db', position: 'relative' }}>
          <thead>
            <tr>
              <th style={{ width: '60px' }}>SL</th>
              <th>{t('common.date')}</th>
              <th>CLIENT/SUPPLIER</th>
              <th>TYPE</th>
              <th>{t('common.account')}</th>
              <th>BANK</th>
              <th>{t('common.description')}</th>
              <th>CREDIT</th>
              <th>DEBIT</th>
              <th>{t('common.balance')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="10" style={{ padding: '24px', color: '#374151', background: 'white' }}>No data available in table</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default Statement;
