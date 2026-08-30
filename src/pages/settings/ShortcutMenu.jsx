import React from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { Printer, Edit, Trash2 } from 'lucide-react';

const ShortcutMenu = () => {
  const { t } = useTranslation();

  const dummyData = [
    { id: 1, idNo: '1', title: 'সাপ্লায়ার পেমেন্ট', address: 'https://newrajdhani.com/user/expense?create-supplier-payment', icon: 'fas fa-plus-circle', createdAt: '15 Jul 2024' },
    { id: 2, idNo: '2', title: 'MAL FEROT', address: 'https://newrajdhani.com/user/purchase/create?purchase-return', icon: 'fas fa-plus-circle', createdAt: '06 Apr 2025' },
    { id: 3, idNo: '3', title: 'বিক্রয় ফেরত', address: 'https://newrajdhani.com/user/invoice?sales-return', icon: 'fas fa-plus-circle', createdAt: '25 Oct 2024' },
    { id: 4, idNo: '4', title: 'স্টাফ পেমেন্ট', address: 'https://newrajdhani.com/user/expense?create-staff-payment', icon: 'fas fa-plus-circle', createdAt: '21 Sep 2024' },
    { id: 5, idNo: '5', title: 'খরচ', address: 'https://newrajdhani.com/user/expense?create-expense', icon: 'fas fa-plus-circle', createdAt: '21 Sep 2024' },
    { id: 6, idNo: '6', title: 'জমা', address: 'https://newrajdhani.com/user/receive?create', icon: 'fas fa-plus-circle', createdAt: '21 Sep 2024' },
    { id: 7, idNo: '7', title: 'নতুন ইনভয়েস', address: 'https://newrajdhani.com/user/invoice?create', icon: 'fas fa-plus-circle', createdAt: '23 Apr 2024' },
  ];

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px' }}>
      
      <div className="premium-card" style={{ background: 'white', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        <PrintHeader />
        <div style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0', color: 'var(--text-main)' }}>Shortcut Menu List</h2>
          <button style={{ background: 'var(--success)', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold' }}>
            Shortcut Menu
          </button>
        </div>

        <div style={{ padding: '24px' }}>
          
          {/* Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              Show 
              <select style={{ margin: '0 8px', padding: '4px', border: '1px solid #e2e8f0', borderRadius: '4px', outline: 'none' }}>
                <option>50</option>
              </select> 
              entries
            </div>
            
            <div style={{ display: 'flex', gap: '4px' }}>
              <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', border: 'none', borderRadius: '4px 0 0 0', display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>PDF</button>
              <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', border: 'none', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>
                <Printer size={14} /> Print
              </button>
              <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', border: 'none', borderRadius: '0 4px 4px 0', display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>Excel</button>
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <table className="custom-table" style={{ width: '100%', fontSize: '13px', textAlign: 'center' }}>
              <thead>
                <tr style={{ background: '#94a3b8', color: 'white', textTransform: 'uppercase' }}>
                  <th style={{ width: '60px', padding: '12px', textAlign: 'center' }}>ID NO ⇅</th>
                  <th style={{ padding: '12px', textAlign: 'center' }}>TITLE ⇅</th>
                  <th style={{ padding: '12px', textAlign: 'center' }}>ADDRESS ⇅</th>
                  <th style={{ padding: '12px', textAlign: 'center' }}>MESSAGES.ICON</th>
                  <th style={{ padding: '12px', textAlign: 'center' }}>CREATED AT ⇅</th>
                  <th style={{ width: '100px', padding: '12px', textAlign: 'center' }}>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {dummyData.map((row) => (
                  <tr key={row.id}>
                    <td style={{ padding: '12px' }}>{row.idNo}</td>
                    <td style={{ padding: '12px' }}>{row.title}</td>
                    <td style={{ padding: '12px' }}>{row.address}</td>
                    <td style={{ padding: '12px' }}>{row.icon}</td>
                    <td style={{ padding: '12px' }}>{row.createdAt}</td>
                    <td style={{ padding: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '4px' }}>
                        <button style={{ background: '#06b6d4', color: 'white', border: 'none', padding: '6px', borderRadius: '4px', cursor: 'pointer' }}>
                          <Edit size={14} />
                        </button>
                        <button style={{ background: 'var(--danger)', color: 'white', border: 'none', padding: '6px', borderRadius: '4px', cursor: 'pointer' }}>
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', fontSize: '13px', color: 'var(--text-muted)' }}>
            <div>Showing 1 to 7 of 7 entries</div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <button style={{ padding: '6px 12px', border: '1px solid #e2e8f0', background: 'var(--card-header-bg)', borderRadius: '4px', cursor: 'pointer', color: 'var(--text-muted)' }}>Previous</button>
              <button style={{ padding: '6px 12px', border: 'none', background: 'var(--primary)', color: 'white', borderRadius: '4px', cursor: 'pointer' }}>1</button>
              <button style={{ padding: '6px 12px', border: '1px solid #e2e8f0', background: 'var(--card-header-bg)', borderRadius: '4px', cursor: 'pointer', color: 'var(--text-muted)' }}>Next</button>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  );
};

export default ShortcutMenu;
