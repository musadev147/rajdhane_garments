import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, Calculator, PlusCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'bn' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navButtons = [
    { label: 'নতুন ইনভয়েস', icon: <PlusCircle size={14} />, path: '/invoice/add-new' },
    { label: 'জমা', icon: <PlusCircle size={14} />, path: '/account/receive-create' },
    { label: 'খরচ', icon: <PlusCircle size={14} />, path: '/account/expense-create' },
    { label: 'স্টাফ পেমেন্ট', icon: <PlusCircle size={14} />, path: '/staff/payment/create' },
    { label: 'বিক্রয় ফেরত', icon: <PlusCircle size={14} />, path: '/invoice/sales-return/add-new' },
    { label: 'MAL FAROT', icon: <PlusCircle size={14} />, path: '/product/purchase-return/add-new' },
    { label: 'সাপ্লায়ার পেমেন্ট', icon: <PlusCircle size={14} />, path: '/account/supplier-payment' },
  ];

  return (
    <header 
      className="header" 
      style={{ 
        background: 'linear-gradient(90deg, #c026d3 0%, #a855f7 40%, #6366f1 100%)',
        color: 'white',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
        minHeight: '60px',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        gap: '12px'
      }}
    >
      <div className="header-title" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
        <Menu className="mobile-menu-btn" size={24} style={{ cursor: 'pointer' }} onClick={toggleSidebar} />
        <span style={{ fontSize: '18px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>রাজধানী গার্মেন্টস</span>
      </div>
      
      <div className="header-nav-scroll" style={{ 
        display: 'flex', 
        justifyContent: 'center',
        gap: '6px', 
        alignItems: 'center',
        flex: 1, 
        overflowX: 'auto',
        padding: '8px 0',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none'
      }}>
        {navButtons.map((btn, idx) => (
          <button 
            key={idx}
            onClick={() => navigate(btn.path)}
            style={{ 
              background: '#14b8a6', // teal
              color: 'white', 
              border: 'none', 
              padding: '6px 12px', 
              borderRadius: '4px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px',
              fontSize: '12px',
              fontWeight: '500',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}
          >
            {btn.icon} {btn.label}
          </button>
        ))}
      </div>

      <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
        <button 
          onClick={toggleLanguage}
          style={{ 
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.5)',
            color: 'white',
            padding: '4px 12px',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '13px',
            cursor: 'pointer'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '2px', fontWeight: 'bold' }}>
            <span>A</span>
            <span style={{ fontSize: '10px' }}>文</span>
          </div>
          Language
        </button>
        
        <button 
          style={{ 
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.5)',
            color: 'white',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <Calculator size={16} />
        </button>
        
        <div style={{ 
          width: '36px', 
          height: '36px', 
          borderRadius: '50%', 
          background: 'white', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          overflow: 'hidden',
          border: '2px solid rgba(255,255,255,0.3)',
          cursor: 'pointer'
        }}>
          <img src="https://i.pravatar.cc/100?img=11" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </header>
  );
};

export default Header;
