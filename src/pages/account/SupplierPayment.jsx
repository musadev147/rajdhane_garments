import React from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { Plus, Play, Printer, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

const SupplierPayment = () => {
  const { t } = useTranslation();

  return (
    <div className="premium-card">
      <div className="premium-body" style={{ padding: '40px' }}>
        <PrintHeader />
        
        {/* Header Text Section */}
        

        {/* Title and Top Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '400', color: '#4b5563', margin: 0 }}>Supplier Payment List</h2>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Link to="/account/expense-create" style={{ textDecoration: 'none' }}>
              <button className="btn-green">
                <Plus size={16} /> Payment
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
            <label className="filter-label">Search By Supplier</label>
            <select className="input-outline">
              <option value="">Select Suppliers</option>
              <option value="1">Supplier 1</option>
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

        <table className="custom-table" style={{ border: '1px solid #d1d5db' }}>
          <thead>
            <tr>
              <th>{t('common.sl')}<span style={{ fontSize: '10px', verticalAlign: 'super' }}>↑↓</span></th>
              <th>{t('common.date')}</th>
              <th>RECEIPT FOR</th>
              <th>ID NO</th>
              <th>{t('common.category')}</th>
              <th>{t('common.account')}</th>
              <th>CHEQUE NO</th>
              <th>{t('common.description')}</th>
              <th>TRANSACTION TYPE</th>
              <th>BANK</th>
              <th>{t('common.amount')}</th>
              <th>PRINTABLE</th>
              <th>{t('common.action')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="13" style={{ padding: '24px', color: '#374151', background: 'white' }}>No data available in table</td>
            </tr>
          </tbody>
          <tfoot>
            <tr style={{ fontWeight: 'bold', background: '#f9fafb' }}>
              <td colSpan="10" style={{ textAlign: 'center' }}>{t('common.total')}</td>
              <td>undefined</td>
              <td colSpan="2"></td>
            </tr>
          </tfoot>
        </table>

        {/* Pagination Section */}
        <div className="table-footer-controls">
          <div>Showing 0 to 0 of 0 entries</div>
          <div className="pagination-controls">
            <button className="pagination-btn">Previous</button>
            <button className="pagination-btn">Next</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SupplierPayment;
