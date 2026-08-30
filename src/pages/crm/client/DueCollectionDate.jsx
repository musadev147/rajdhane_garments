import React from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../../components/PrintHeader';
import { ArrowLeft, Users, Plus, PlaySquare, Search, FileSpreadsheet, Printer, RotateCcw } from 'lucide-react';

const DueCollectionDate = () => {
  const { t } = useTranslation();

  return (
    <div className="dashboard-content">
        <PrintHeader />
      <div className="chart-card">
        {/* Header */}
        <div className="card-header">
          <h2 className="card-title" style={{ fontSize: '18px' }}>বাকি সংগ্রহের তারিখ</h2>
          <div className="card-actions">
            <button className="btn btn-outline" style={{ padding: '6px 12px', background: 'var(--table-header-bg)', color: 'white' }}>
              <ArrowLeft size={14} /> Go Back
            </button>
            <button className="btn btn-outline" style={{ padding: '6px 12px', background: 'var(--table-header-bg)', color: 'white' }}>
              <Users size={14} /> Client Group
            </button>
            <button className="btn btn-primary" style={{ padding: '6px 12px', background: 'var(--success)' }}>
              <Plus size={14} /> Add New
            </button>
            <button className="btn btn-outline" style={{ padding: '6px 12px', background: 'white', color: 'red', border: '1px solid #e2e8f0' }}>
              <PlaySquare size={14} /> YouTube
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="form-grid" style={{ gridTemplateColumns: '1fr 1.5fr 1.5fr 1fr', marginBottom: '24px', alignItems: 'flex-end' }}>
          <div className="form-group" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-10px', left: '12px', background: 'var(--info)', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '10px', zIndex: 1 }}>Search All</div>
            <div className="form-input floating-label">
              <input type="text" placeholder=" " style={{ paddingLeft: '8px' }} />
                <label>Search All</label>
            </div>
          </div>
          
          <div className="form-group">
            <label style={{ fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>Search By Client Group</label>
            <div className="form-input floating-label">
              <select>
                <option>Select client group</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label style={{ fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>{t('common.search_by_date')}</label>
            <div style={{ display: 'flex', gap: '12px' }}>
              <div className="form-input floating-label" style={{ flex: 1 }}>
                <input type="text" defaultValue="22/08/2026" />
              </div>
              <div className="form-input floating-label" style={{ flex: 1 }}>
                <input type="text" defaultValue="22/08/2026" />
              </div>
            </div>
          </div>

          <div className="form-group">
            <button className="btn btn-outline" style={{ height: '48px', width: '100%', background: 'var(--table-header-bg)', color: 'white', justifyContent: 'center' }}>
              Clear Filter
            </button>
          </div>
        </div>

        {/* Table Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ fontSize: '14px', color: 'var(--text-main)' }}>
            Show 
            <select style={{ margin: '0 8px', padding: '4px', border: '1px solid var(--secondary)', borderRadius: '4px' }}>
              <option>25</option>
            </select>
            entries
          </div>
          <div style={{ display: 'flex', gap: '4px' }}>
            <button className="btn" style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px' }}><FileSpreadsheet size={14} style={{ marginRight: '4px' }}/> Excel</button>
            <button className="btn" onClick={() => window.print()} style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px' }}><Printer size={14} style={{ marginRight: '4px' }}/> {t('common.print')}</button>
            <button className="btn" style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px' }}><RotateCcw size={14} style={{ marginRight: '4px' }}/> {t('common.reset')}</button>
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto', border: '1px solid var(--secondary)', borderRadius: '4px', marginBottom: '16px' }}>
          <table className="custom-table" style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr style={{ background: 'var(--table-header-bg)', color: 'white' }}>
                <th style={{ padding: '12px', fontSize: '11px', textAlign: 'left', borderRight: '1px solid rgba(255,255,255,0.2)' }}>ID NO ↕</th>
                <th style={{ padding: '12px', fontSize: '11px', textAlign: 'left', borderRight: '1px solid rgba(255,255,255,0.2)' }}>NAME ↕</th>
                <th style={{ padding: '12px', fontSize: '11px', textAlign: 'left', borderRight: '1px solid rgba(255,255,255,0.2)' }}>ADDRESS ↕</th>
                <th style={{ padding: '12px', fontSize: '11px', textAlign: 'left', borderRight: '1px solid rgba(255,255,255,0.2)' }}>PREVIOUS DUE ↕</th>
                <th style={{ padding: '12px', fontSize: '11px', textAlign: 'left', borderRight: '1px solid rgba(255,255,255,0.2)' }}>SALES ↕</th>
                <th style={{ padding: '12px', fontSize: '11px', textAlign: 'left', borderRight: '1px solid rgba(255,255,255,0.2)' }}>RECEIVE ↕</th>
                <th style={{ padding: '12px', fontSize: '11px', textAlign: 'left', borderRight: '1px solid rgba(255,255,255,0.2)' }}>RETURN ↕</th>
                <th style={{ padding: '12px', fontSize: '11px', textAlign: 'left', borderRight: '1px solid rgba(255,255,255,0.2)' }}>বাকি সংগ্রহের তারিখ ↕</th>
                <th style={{ padding: '12px', fontSize: '11px', textAlign: 'left' }}>DUE ↕</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="9" style={{ textAlign: 'center', padding: '16px', color: 'var(--text-muted)' }}>
                  No data available in table
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer / Pagination */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '14px', color: 'var(--text-main)' }}>
            Showing 0 to 0 of 0 entries
          </div>
          <div style={{ display: 'flex', border: '1px solid #e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
            <button style={{ padding: '6px 12px', background: 'var(--card-header-bg)', border: 'none', borderRight: '1px solid #e2e8f0', color: 'var(--text-muted)', cursor: 'not-allowed', fontSize: '14px' }}>Previous</button>
            <button style={{ padding: '6px 12px', background: 'var(--card-header-bg)', border: 'none', color: 'var(--text-muted)', cursor: 'not-allowed', fontSize: '14px' }}>Next</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DueCollectionDate;
