import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, Calculator, PlusCircle, User, Lock, Shield, UserPlus, Settings, Pin, Building, Server, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'bn' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navButtons = [
    { label: t('header.new_invoice'), icon: <PlusCircle size={14} />, path: '/invoice/add-new' },
    { label: t('header.receive'), icon: <PlusCircle size={14} />, path: '/account/receive-create' },
    { label: t('header.expense'), icon: <PlusCircle size={14} />, path: '/account/expense-create' },
    { label: t('header.staff_payment'), icon: <PlusCircle size={14} />, path: '/staff/payment/create' },
    { label: t('header.sales_return'), icon: <PlusCircle size={14} />, path: '/invoice/sales-return/add-new' },
    { label: t('header.purchase_return'), icon: <PlusCircle size={14} />, path: '/product/purchase-return/add-new' },
    { label: t('header.supplier_payment'), icon: <PlusCircle size={14} />, path: '/account/supplier-payment' },
  ];

  const profileMenu = [
    { label: t('header.my_profile'), icon: <User size={16} />, path: '/profile' },
    { label: t('header.change_password'), icon: <Lock size={16} />, path: '/profile', state: { tab: 'password' } },
    { label: t('header.role'), icon: <Shield size={16} /> },
    { label: t('header.add_user'), icon: <UserPlus size={16} /> },
    { label: t('header.settings'), icon: <Settings size={16} /> },
    { label: t('header.shortcut_menu'), icon: <Pin size={16} /> },
    { label: t('header.company_info'), icon: <Building size={16} />, path: '/settings/company-information' },
    { label: t('header.server_info'), icon: <Server size={16} /> },
    { label: t('menu.sign_out'), icon: <LogOut size={16} />, path: '/login' }
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
        <span style={{ fontSize: '18px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>{t('app_name')}</span>
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
          {t('header.switch_lang')}
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
        
        <div style={{ position: 'relative' }} ref={profileRef}>
          <div 
            onClick={() => setProfileOpen(!profileOpen)}
            style={{ 
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

          {profileOpen && (
            <div style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              marginTop: '15px',
              width: '240px',
              background: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              overflow: 'hidden',
              zIndex: 100
            }}>
              {/* Dropdown Header Arrow */}
              <div style={{
                position: 'absolute',
                top: '-8px',
                right: '12px',
                width: '16px',
                height: '16px',
                background: '#6b46c1',
                transform: 'rotate(45deg)'
              }} />

              {/* Dropdown Header */}
              <div style={{
                background: 'linear-gradient(135deg, #6b46c1 0%, #4c1d95 100%)',
                color: 'white',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1
              }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: 'white',
                  overflow: 'hidden',
                  border: '3px solid rgba(255,255,255,0.8)',
                  marginBottom: '10px'
                }}>
                  <img src="https://i.pravatar.cc/100?img=11" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>admin 2</h3>
                <p style={{ margin: 0, fontSize: '12px', opacity: 0.8 }}>ADMIN 2</p>
                
                {/* Status Dot */}
                <div style={{
                  position: 'absolute',
                  bottom: '65px',
                  right: '85px',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: '#22c55e',
                  border: '2px solid white'
                }} />
              </div>

              {/* Dropdown Menu */}
              <div style={{ padding: '8px 0', color: '#333', maxHeight: '350px', overflowY: 'auto' }}>
                {profileMenu.map((item, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 20px',
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                    borderBottom: idx < profileMenu.length - 1 ? '1px dashed #eaeaea' : 'none',
                    fontSize: '14px',
                    fontWeight: 500
                  }}
                  onClick={() => {
                    if (item.path) {
                      navigate(item.path, { state: item.state });
                      setProfileOpen(false);
                    }
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#f8fafc';
                    e.currentTarget.style.color = '#4f46e5';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#333';
                  }}
                  >
                    <div style={{ color: '#475569', display: 'flex', alignItems: 'center' }}>
                      {item.icon}
                    </div>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

