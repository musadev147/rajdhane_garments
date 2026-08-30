import React from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { Play, Printer } from 'lucide-react';

const Profit = () => {
  const { t } = useTranslation();

  return (
    <div className="premium-card">
      <div className="premium-header">
        <h2 className="premium-title" style={{ textTransform: 'uppercase' }}>Profit</h2>
        <div className="header-actions">
          <button style={{ background: '#6b7280', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>Go Back</button>
          <button className="btn-green">Add New</button>
          <button className="btn-youtube">
            <div style={{ display: 'flex', alignItems: 'center', background: '#ff0000', color: 'white', padding: '6px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold' }}>
              <Play size={16} fill="white" style={{ marginRight: '6px' }} /> YouTube
            </div>
          </button>
        </div>
      </div>

      <div className="premium-body" style={{ padding: '40px' }}>
        <PrintHeader />
        
        {/* Centered Date Search */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px' }}>
          <div style={{ width: '600px' }}>
            <label className="filter-label" style={{ display: 'block', marginBottom: '8px' }}>{t('common.search_by_date')}</label>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ display: 'flex', flex: 1 }}>
                <input type="date" className="input-outline" style={{ borderRadius: '8px 0 0 8px', borderRight: 'none', width: '50%' }} />
                <input type="date" className="input-outline" style={{ borderRadius: '0 8px 8px 0', width: '50%' }} />
              </div>
              <button className="btn-secondary" style={{ padding: '0 32px', fontSize: '16px' }}>Search</button>
            </div>
          </div>
        </div>

        {/* Header Text Section */}
        

        {/* Center the table and print button */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: '600px' }}>
            {/* Table Controls (Just Print) */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
              <button className="btn-blue" style={{ background: '#06b6d4', padding: '6px 12px', fontSize: '12px', fontWeight: 'bold', borderColor: '#06b6d4' }} onClick={() => window.print()}>
                <Printer size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }}/> Print
              </button>
            </div>

            <table className="custom-table" style={{ border: '1px solid #d1d5db', width: '100%' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', paddingLeft: '16px', background: 'var(--secondary)', color: 'white', borderRight: '1px solid #d1d5db', width: '50%' }}>TITLE</th>
                  <th style={{ textAlign: 'right', paddingRight: '16px', background: 'var(--secondary)', color: 'white', width: '50%' }}>AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ textAlign: 'left', paddingLeft: '16px', borderRight: '1px solid #d1d5db' }}>Total Sales</td>
                  <td style={{ textAlign: 'right', paddingRight: '16px' }}>৳ 6920663.53</td>
                </tr>
                <tr>
                  <td style={{ textAlign: 'left', paddingLeft: '16px', borderRight: '1px solid #d1d5db' }}>Total Buy Price</td>
                  <td style={{ textAlign: 'right', paddingRight: '16px' }}>৳ 6883307.93</td>
                </tr>
                <tr>
                  <td style={{ textAlign: 'left', paddingLeft: '16px', borderRight: '1px solid #d1d5db' }}>Previous Due</td>
                  <td style={{ textAlign: 'right', paddingRight: '16px' }}>৳ 7915790.00</td>
                </tr>
                <tr>
                  <td style={{ textAlign: 'left', paddingLeft: '16px', borderRight: '1px solid #d1d5db' }}>Total Due</td>
                  <td style={{ textAlign: 'right', paddingRight: '16px' }}>৳ -10506930.00</td>
                </tr>
                <tr>
                  <td style={{ textAlign: 'left', paddingLeft: '16px', borderRight: '1px solid #d1d5db' }}>Total Receive</td>
                  <td style={{ textAlign: 'right', paddingRight: '16px' }}>৳ 6919213.53</td>
                </tr>
                <tr>
                  <td style={{ textAlign: 'left', paddingLeft: '16px', borderRight: '1px solid #d1d5db' }}>Total Expense</td>
                  <td style={{ textAlign: 'right', paddingRight: '16px' }}>৳ 0.00</td>
                </tr>
                <tr>
                  <td style={{ textAlign: 'left', paddingLeft: '16px', borderRight: '1px solid #d1d5db' }}>Opening Balance</td>
                  <td style={{ textAlign: 'right', paddingRight: '16px' }}>৳ 0.00</td>
                </tr>
                <tr>
                  <td style={{ textAlign: 'left', paddingLeft: '16px', borderRight: '1px solid #d1d5db' }}>Total Balance</td>
                  <td style={{ textAlign: 'right', paddingRight: '16px' }}>৳ 6919213.53</td>
                </tr>
                <tr>
                  <td style={{ textAlign: 'left', paddingLeft: '16px', borderRight: '1px solid #d1d5db' }}>Gross Profit</td>
                  <td style={{ textAlign: 'right', paddingRight: '16px' }}>৳ 6919213.53</td>
                </tr>
                <tr>
                  <td style={{ textAlign: 'left', paddingLeft: '16px', borderRight: '1px solid #d1d5db' }}>Discount</td>
                  <td style={{ textAlign: 'right', paddingRight: '16px' }}>৳ 0.00</td>
                </tr>
                <tr>
                  <td style={{ textAlign: 'left', paddingLeft: '16px', borderRight: '1px solid #d1d5db' }}>Product Profit</td>
                  <td style={{ textAlign: 'right', paddingRight: '16px' }}>৳ 37355.60</td>
                </tr>
                <tr>
                  <td style={{ textAlign: 'left', paddingLeft: '16px', borderRight: '1px solid #d1d5db' }}>Net Profit</td>
                  <td style={{ textAlign: 'right', paddingRight: '16px' }}>৳ 6919213.53</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profit;
