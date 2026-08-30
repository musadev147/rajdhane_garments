import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PrintHeader from '../../components/PrintHeader';
import { RotateCcw, Printer, FileText } from 'lucide-react';

const ProductStockList = () => {
  const { t } = useTranslation();

  // Mock data matching the screenshot
  const [stocks, setStocks] = useState([
    { id: 1, date: '24 Aug 2026', product: 'BATIK PRINT ORNA 380 | 18647', buyPrice: '287.00', sellPrice: '380.00', group: 'SIT KAPOR', opening: '0.00', buyQty: '2.00', saleQty: '0.00', stock: '2.00', totalBuy: '575', totalSell: '760' },
    { id: 2, date: '24 Aug 2026', product: 'BR ORNA 380 | 18646', buyPrice: '240.00', sellPrice: '380.00', group: 'SIT KAPOR', opening: '0.00', buyQty: '4.00', saleQty: '0.00', stock: '4.00', totalBuy: '960', totalSell: '1520' },
    { id: 3, date: '24 Aug 2026', product: 'BR ORNA 500 | 18645', buyPrice: '362.00', sellPrice: '500.00', group: 'SIT KAPOR', opening: '0.00', buyQty: '9.00', saleQty: '0.00', stock: '9.00', totalBuy: '3262.5', totalSell: '4500' },
    { id: 4, date: '23 Aug 2026', product: 'SAB INDIA KANI SOFT | 18644', buyPrice: '1900.00', sellPrice: '2580.00', group: 'SAREE', opening: '0.00', buyQty: '5.00', saleQty: '0.00', stock: '5.00', totalBuy: '9500', totalSell: '12900' },
    { id: 5, date: '23 Aug 2026', product: 'SAB INDIA KANI SHAREE | 18643', buyPrice: '1750.00', sellPrice: '2380.00', group: 'SAREE', opening: '0.00', buyQty: '5.00', saleQty: '0.00', stock: '5.00', totalBuy: '8750', totalSell: '11900' },
    { id: 6, date: '23 Aug 2026', product: 'NS INDIA KANI SHAREE | 18642', buyPrice: '1800.00', sellPrice: '2450.00', group: 'SAREE', opening: '0.00', buyQty: '6.00', saleQty: '0.00', stock: '6.00', totalBuy: '10800', totalSell: '14700' },
    { id: 7, date: '22 Aug 2026', product: 'DP HEZAB RIMON || 18641', buyPrice: '410.00', sellPrice: '550.00', group: 'ORNA', opening: '0.00', buyQty: '35.00', saleQty: '0.00', stock: '35.00', totalBuy: '14350', totalSell: '19250' }
  ]);

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px', background: 'white' }}>
        <PrintHeader />
      
      {/* Center Title */}
      <div style={{ textAlign: 'center', marginBottom: '40px', marginTop: '40px', position: 'relative' }}>
        <h2 style={{ fontFamily: 'monospace', fontSize: '24px', fontWeight: 'bold' }}>Stock List</h2>
      </div>

      <div className="card-body">
        {/* Filters */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '20px', marginBottom: '24px' }}>
          {/* Row 1 */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-10px', left: '12px', background: 'var(--info)', color: 'white', fontSize: '11px', padding: '2px 8px', borderRadius: '4px' }}>Search All</div>
            <input type="text" placeholder=" " style={{ width: '100%', padding: '14px', border: '1px solid #0ea5e9', borderRadius: '8px', outline: 'none', color: '#94a3b8' }} />
                <label>Search All</label>
          </div>
          <div>
            <div style={{ fontSize: '12px', marginBottom: '4px', textAlign: 'center' }}>Search By Client Group</div>
            <select style={{ width: '100%', padding: '14px', border: '1px solid #e2e8f0', borderRadius: '8px', outline: 'none', color: 'var(--text-muted)', appearance: 'none' }}>
              <option>Select Product Group</option>
            </select>
          </div>
          <div>
            <div style={{ fontSize: '12px', marginBottom: '4px', textAlign: 'center' }}>Search By Product</div>
            <select style={{ width: '100%', padding: '14px', border: '1px solid #e2e8f0', borderRadius: '8px', outline: 'none', color: 'var(--text-muted)', appearance: 'none' }}>
              <option>Select Product</option>
            </select>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-10px', left: '12px', background: 'var(--info)', color: 'white', fontSize: '11px', padding: '2px 8px', borderRadius: '4px' }}>Barcode</div>
            <input type="text" placeholder=" " style={{ width: '100%', padding: '14px', border: '1px solid #0ea5e9', borderRadius: '8px', outline: 'none', color: '#94a3b8' }} />
                <label>Barcode</label>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 2fr', gap: '20px', marginBottom: '32px', alignItems: 'end' }}>
          {/* Row 2 */}
          <div style={{ gridColumn: '1 / 3' }}>
            <div style={{ fontSize: '12px', marginBottom: '4px', textAlign: 'center' }}>{t('common.search_by_date')}</div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input type="date" style={{ flex: 1, padding: '14px', border: '1px solid #e2e8f0', borderRadius: '8px', outline: 'none', color: '#94a3b8' }} />
              <input type="date" style={{ flex: 1, padding: '14px', border: '1px solid #e2e8f0', borderRadius: '8px', outline: 'none', color: '#94a3b8' }} />
            </div>
          </div>
          <div>
            <button className="btn" style={{ width: '100%', padding: '14px', background: 'var(--text-muted)', color: 'white', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold' }}>
              Clear Filter
            </button>
          </div>
        </div>

        {/* Table Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ fontSize: '14px', color: 'var(--text-main)' }}>
            Show 
            <select style={{ margin: '0 8px', padding: '4px', border: '1px solid #e2e8f0', borderRadius: '4px' }}>
              <option>10</option>
            </select>
            entries
          </div>
          <div style={{ display: 'flex', gap: '4px' }}>
            <button className="btn" style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              Excel
            </button>
            <button className="btn" style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              PDF
            </button>
            <button className="btn" onClick={() => window.print()} style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              Print
            </button>
            <button className="btn" style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <RotateCcw size={14} /> Reset
            </button>
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto', border: '1px solid #e2e8f0' }}>
          <table className="custom-table" style={{ width: '100%', minWidth: '1300px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'var(--secondary)', color: 'white' }}>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px', width: '60px' }}>ID NO ↕</th>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>DATE</th>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>PRODUCT</th>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>GROUP</th>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>OPENING STOCK</th>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>BUY QUANTITY</th>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>SALE QUANTITY</th>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>STOCK</th>
                <th style={{ textAlign: 'center', borderRight: '1px solid white', padding: '12px', fontSize: '11px' }}>TOTAL BUYING PRICE</th>
                <th style={{ textAlign: 'center', padding: '12px', fontSize: '11px' }}>TOTAL SELLING PRICE</th>
              </tr>
            </thead>
            <tbody>
              {stocks.map((stock) => (
                <tr key={stock.id} style={{ background: 'white', borderBottom: '1px solid #e2e8f0', fontSize: '13px' }}>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{stock.id}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{stock.date}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>
                    <div style={{ fontWeight: '500' }}>{stock.product}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>Buy Price: {stock.buyPrice} | Sell Price: {stock.sellPrice}</div>
                  </td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{stock.group}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{stock.opening}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{stock.buyQty}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{stock.saleQty}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{stock.stock}</td>
                  <td style={{ textAlign: 'center', padding: '8px', borderRight: '1px solid #e2e8f0' }}>{stock.totalBuy}</td>
                  <td style={{ textAlign: 'center', padding: '8px' }}>{stock.totalSell}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductStockList;
