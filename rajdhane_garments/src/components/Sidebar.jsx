import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  LayoutDashboard, Users, CreditCard, Banknote, 
  FileText, Package, MessageSquare, UserCircle,
  AlertCircle, TrendingUp, Download, Upload,
  Settings, HelpCircle, LogOut, ChevronDown, ChevronRight
} from 'lucide-react';

const Sidebar = () => {
  const { t } = useTranslation();
  const [crmOpen, setCrmOpen] = useState(true);
  const [clientOpen, setClientOpen] = useState(true);
  const [supplierOpen, setSupplierOpen] = useState(true);

  return (
    <aside className="sidebar" style={{ overflowY: 'auto' }}>
      <div className="sidebar-brand">
        <div className="brand-icon">R</div>
        <h2 style={{ fontSize: '18px', fontWeight: '700' }}>{t('app_name')}</h2>
      </div>

      <div className="sidebar-profile">
        <img 
          src="https://ui-avatars.com/api/?name=Admin+User&background=4318ff&color=fff" 
          alt="Admin" 
          className="profile-img"
        />
        <div className="profile-name">Admin</div>
        <div className="profile-role">admin</div>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/dashboard" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
          <div className="nav-item-content">
            <LayoutDashboard size={20} />
            <span>{t('menu.dashboard')}</span>
          </div>
        </NavLink>

        {/* CRM Menu Group */}
        <div>
          <div className={`nav-item ${crmOpen ? 'active' : ''}`} onClick={() => setCrmOpen(!crmOpen)}>
            <div className="nav-item-content">
              <Users size={20} />
              <span>{t('menu.crm')}</span>
            </div>
            {crmOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </div>
          
          {crmOpen && (
            <div className="submenu">
              {/* Client Submenu Group */}
              <div>
                <div 
                  className="nav-item" 
                  style={{ paddingLeft: '32px', marginBottom: '0', background: clientOpen ? 'rgba(255,255,255,0.05)' : 'transparent' }}
                  onClick={() => setClientOpen(!clientOpen)}
                >
                  <div className="nav-item-content" style={{ fontSize: '14px' }}>
                    <span style={{ marginRight: '8px' }}>»</span> Client
                  </div>
                  {clientOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                </div>
                
                {clientOpen && (
                  <div>
                    <NavLink to="/crm/client-create" className={({isActive}) => `submenu-item ${isActive ? 'active' : ''}`} style={{ color: 'var(--primary)' }}>
                      <span style={{ marginRight: '8px' }}>»</span> Add New Client
                    </NavLink>
                    <NavLink to="/crm/client-list" className="submenu-item">
                      <span style={{ marginRight: '8px' }}>»</span> Client List
                    </NavLink>
                    <NavLink to="/crm/client-group" className="submenu-item">
                      <span style={{ marginRight: '8px' }}>»</span> Client Group
                    </NavLink>
                    <NavLink to="/crm/client-statement" className={({isActive}) => `submenu-item ${isActive ? 'active' : ''}`}>
                      <span style={{ marginRight: '8px' }}>»</span> Client Statement
                    </NavLink>
                    <NavLink to="/crm/due-collection-date" className={({isActive}) => `submenu-item ${isActive ? 'active' : ''}`}>
                      <span style={{ marginRight: '8px' }}>»</span> বাকি সংগ্রহের তারিখ
                    </NavLink>
                  </div>
                )}
              </div>

              {/* Supplier Submenu Group */}
              <div>
                <div className="nav-item" onClick={() => setSupplierOpen(!supplierOpen)} style={{ paddingLeft: '32px', marginBottom: '0', cursor: 'pointer' }}>
                  <div className="nav-item-content" style={{ fontSize: '14px' }}>
                    <span style={{ marginRight: '8px' }}>»</span> Supplier
                  </div>
                  {supplierOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                </div>
                {supplierOpen && (
                  <div className="submenu" style={{ marginLeft: '16px', background: 'transparent' }}>
                    <NavLink to="/crm/supplier-create" className={({isActive}) => `submenu-item ${isActive ? 'active' : ''}`}>
                      <span style={{ marginRight: '8px' }}>»</span> Add New Supplier
                    </NavLink>
                    <NavLink to="/crm/supplier-list" className={({isActive}) => `submenu-item ${isActive ? 'active' : ''}`}>
                      <span style={{ marginRight: '8px' }}>»</span> Supplier List
                    </NavLink>
                    <NavLink to="/crm/supplier-group" className={({isActive}) => `submenu-item ${isActive ? 'active' : ''}`}>
                      <span style={{ marginRight: '8px' }}>»</span> Supplier Group
                    </NavLink>
                    <NavLink to="/crm/supplier-statement" className={({isActive}) => `submenu-item ${isActive ? 'active' : ''}`}>
                      <span style={{ marginRight: '8px' }}>»</span> Supplier Statement
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <NavLink to="/account" className="nav-item">
          <div className="nav-item-content">
            <CreditCard size={20} />
            <span>{t('menu.account')}</span>
          </div>
        </NavLink>
        
        {/* Keeping the rest simple for brevity */}
        <div className="nav-item">
          <div className="nav-item-content"><Banknote size={20} /><span>{t('menu.loan')}</span></div>
        </div>
        <div className="nav-item">
          <div className="nav-item-content"><FileText size={20} /><span>{t('menu.bill_invoice')}</span></div>
        </div>
        <div className="nav-item">
          <div className="nav-item-content"><Package size={20} /><span>{t('menu.product')}</span></div>
        </div>
        <div className="nav-item">
          <div className="nav-item-content"><MessageSquare size={20} /><span>{t('menu.sms')}</span></div>
        </div>
        <div className="nav-item">
          <div className="nav-item-content"><UserCircle size={20} /><span>{t('menu.staff')}</span></div>
        </div>
        
      </nav>
    </aside>
  );
};

export default Sidebar;
