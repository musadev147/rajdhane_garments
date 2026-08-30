import React from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { RefreshCcw, Printer, Download } from 'lucide-react';

const DueClientWise = () => {
  const { t } = useTranslation();

  const dummyData = [
    { sl: 1, name: 'MOSHER CACA', address: 'ARPARA', phone: '01720142321', prevDue: '0.00', sales: '1750.00', totalBill: '1750', salesReturn: '0.00', collection: '1500.00', returnAmt: '0.00', due: '250.00' },
    { sl: 2, name: 'HIRA APA // CHONCOL VI KALATOBON', address: 'FOYLA MASTAR PARA', phone: '01621803265', prevDue: '0.00', sales: '500.00', totalBill: '500', salesReturn: '0.00', collection: '380.00', returnAmt: '0.00', due: '120.00' },
    { sl: 3, name: 'JONY SOTO VI', address: 'KULLOP PARA', phone: '01785871213', prevDue: '0.00', sales: '1950.00', totalBill: '1950', salesReturn: '0.00', collection: '0.00', returnAmt: '0.00', due: '1950.00' },
    { sl: 4, name: 'LALON MAMA [S]', address: 'KAMARMUNDIA', phone: '01912886663', prevDue: '0.00', sales: '11020.00', totalBill: '11020', salesReturn: '0.00', collection: '8000.00', returnAmt: '0.00', due: '3020.00' },
    { sl: 5, name: 'JONY VI // DALTA LAB', address: 'KATALBAGAN', phone: '01750626970', prevDue: '0.00', sales: '8870.00', totalBill: '8870', salesReturn: '680.00', collection: '8190.00', returnAmt: '0.00', due: '0.00' },
    { sl: 6, name: 'TIPU THIAY [V] R', address: 'NOTUN BAZAR', phone: '01729826190', prevDue: '0.00', sales: '150.00', totalBill: '150', salesReturn: '0.00', collection: '150.00', returnAmt: '0.00', due: '0.00' },
  ];

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px' }}>
      
      <div className="premium-card">
        {/* Banner */}
        <div style={{ padding: '0', background: 'white', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}>
          <img 
            src="https://via.placeholder.com/1200x150?text=Rajdhani+Garments+Banner" 
            alt="Rajdhani Garments" 
            style={{ width: '100%', height: 'auto', maxHeight: '150px', objectFit: 'cover' }}
          />
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', padding: '16px 0', margin: '0' }}>Client Due Report</h2>
        </div>

        <div className="premium-body" style={{ background: 'white', padding: '24px' }}>
        <PrintHeader />
          
          {/* Filters Area */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', alignItems: 'flex-end', marginBottom: '24px' }}>
            <div style={{ width: '300px' }}>
              <label style={{ display: 'block', fontSize: '13px', color: 'var(--label-color)', marginBottom: '8px', textAlign: 'center' }}>{t('common.search_by_client')}</label>
              <select style={{ width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: '4px', outline: 'none' }}>
                <option value="">{t('common.select_client')}</option>
                <option>MOSHER CACA</option>
                <option>HIRA APA</option>
              </select>
            </div>
            
            <button style={{ background: '#7e8a9f', color: 'white', padding: '10px 32px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px', height: '42px', minWidth: '150px' }}>
              Clear Filter
            </button>
          </div>

          {/* Total Due Bar */}
          <div style={{ textAlign: 'center', marginBottom: '24px', border: '1px solid #94a3b8' }}>
            <div style={{ background: '#94a3b8', color: 'white', padding: '8px', fontSize: '11px', fontWeight: 'bold' }}>TOTAL DUE</div>
            <div style={{ padding: '12px', fontSize: '18px', fontWeight: 'bold' }}>10624776.04</div>
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              Show 
              <select style={{ margin: '0 8px', padding: '4px', border: '1px solid #e2e8f0', borderRadius: '4px', outline: 'none' }}>
                <option>10</option>
              </select> 
              entries
            </div>
            
            <div style={{ display: 'flex', gap: '4px' }}>
              <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', border: 'none', borderRadius: '4px 0 0 4px', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', fontSize: '12px' }}>
                <Download size={14} /> Download
              </button>
              <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', border: 'none', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', fontSize: '12px' }}>
                <Printer size={14} /> Print
              </button>
              <button style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', border: 'none', borderRadius: '0 4px 4px 0', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', fontSize: '12px' }}>
                <RefreshCcw size={14} /> Reset
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <table className="custom-table" style={{ width: '100%', fontSize: '11px', textAlign: 'center' }}>
              <thead>
                <tr style={{ background: '#94a3b8', color: 'white', textTransform: 'uppercase' }}>
                  <th style={{ width: '40px', padding: '12px' }}>SL ⇅</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>CLIENT INFO</th>
                  <th style={{ padding: '12px' }}>PREVIOUS DUE</th>
                  <th style={{ padding: '12px' }}>SALES</th>
                  <th style={{ padding: '12px' }}>TOTAL BILL</th>
                  <th style={{ padding: '12px' }}>SALES RETURN</th>
                  <th style={{ padding: '12px' }}>COLLECTION</th>
                  <th style={{ padding: '12px' }}>RETURN</th>
                  <th style={{ padding: '12px' }}>DUE</th>
                </tr>
              </thead>
              <tbody>
                {dummyData.map((row) => (
                  <tr key={row.sl}>
                    <td style={{ padding: '12px' }}>{row.sl}</td>
                    <td style={{ padding: '12px', textAlign: 'left' }}>
                      <div style={{ fontWeight: 'bold' }}>Name : <span style={{ fontWeight: 'normal' }}>{row.name}</span></div>
                      <div><b>Address :</b> {row.address}</div>
                      <div><b>Phone :</b> {row.phone}</div>
                    </td>
                    <td style={{ padding: '12px' }}>{row.prevDue}</td>
                    <td style={{ padding: '12px' }}>{row.sales}</td>
                    <td style={{ padding: '12px' }}>{row.totalBill}</td>
                    <td style={{ padding: '12px' }}>{row.salesReturn}</td>
                    <td style={{ padding: '12px' }}>{row.collection}</td>
                    <td style={{ padding: '12px' }}>{row.returnAmt}</td>
                    <td style={{ padding: '12px' }}>{row.due}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
        </div>
      </div>

    </div>
  );
};

export default DueClientWise;
