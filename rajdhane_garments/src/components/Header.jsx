import React from 'react';
import { useTranslation } from 'react-i18next';
import { PlusCircle, Download, Upload, Languages, Trash2, Menu } from 'lucide-react';

const Header = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'bn' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="header">
      <div className="header-title">
        <Menu size={24} style={{ marginRight: '16px', display: 'inline-block', verticalAlign: 'middle', cursor: 'pointer' }}/>
        {t('header.title')}
      </div>
      
      <div style={{ display: 'flex', gap: '16px' }}>
        <button className="btn btn-primary">
          <PlusCircle size={16} /> {t('header.new_invoice')}
        </button>
        <button className="btn btn-primary" style={{ background: 'var(--success)' }}>
          <Download size={16} /> {t('header.receive')}
        </button>
        <button className="btn btn-primary" style={{ background: 'var(--danger)' }}>
          <Upload size={16} /> {t('header.expense')}
        </button>
      </div>

      <div className="header-actions">
        <button className="btn btn-outline" style={{ padding: '6px 12px' }}>
          <Trash2 size={14} /> {t('header.clear_cache')}
        </button>
        <button className="btn btn-outline" style={{ padding: '6px 12px' }} onClick={toggleLanguage}>
          <Languages size={14} /> {t('header.switch_lang')}
        </button>
        <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
          A
        </div>
      </div>
    </header>
  );
};

export default Header;
