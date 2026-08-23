import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  LayoutDashboard, Users, CreditCard, Banknote, 
  FileText, Package, MessageSquare, UserCircle,
  AlertCircle, TrendingUp, Download, Upload,
  Settings, HelpCircle, LogOut, ChevronDown, ChevronRight
} from 'lucide-react';

const Sidebar = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const [crmOpen, setCrmOpen] = useState(pathname.startsWith('/crm'));
  const [clientOpen, setClientOpen] = useState(pathname.startsWith('/crm/client') || pathname.startsWith('/crm/due-collection-date'));
  const [supplierOpen, setSupplierOpen] = useState(pathname.startsWith('/crm/supplier'));
  
  const [accountOpen, setAccountOpen] = useState(pathname.startsWith('/account'));
  const [receiveOpen, setReceiveOpen] = useState(pathname.startsWith('/account/receive'));
  const [expenseOpen, setExpenseOpen] = useState(pathname.startsWith('/account/expense') || pathname.startsWith('/account/supplier-payment') || pathname.startsWith('/account/money-return'));
  const [subAccountOpen, setSubAccountOpen] = useState(pathname.startsWith('/account/account') || pathname.startsWith('/account/statement'));
  const [transferOpen, setTransferOpen] = useState(pathname.startsWith('/account/transfer'));
  const [loanOpen, setLoanOpen] = useState(pathname.startsWith('/loan'));

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

        {/* Account Menu Group */}
        <div>
          <div className={`nav-item ${accountOpen ? 'active' : ''}`} onClick={() => setAccountOpen(!accountOpen)}>
            <div className="nav-item-content">
              <CreditCard size={20} />
              <span>{t('menu.account')}</span>
            </div>
            {accountOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </div>
          
          {accountOpen && (
            <div className="submenu">
              {/* Receive Submenu Group */}
              <div>
                <div 
                  className="nav-item" 
                  style={{ paddingLeft: '32px', marginBottom: '0', background: receiveOpen ? 'rgba(255,255,255,0.05)' : 'transparent', cursor: 'pointer' }}
                  onClick={() => setReceiveOpen(!receiveOpen)}
                >
                  <div className="nav-item-content" style={{ fontSize: '14px' }}>
                    <span style={{ marginRight: '8px' }}>»</span> Receive
                  </div>
                  {receiveOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                </div>
                
                {receiveOpen && (
                  <div>
                    <NavLink to="/account/receive-create" className={({isActive}) => `submenu-item ${isActive ? 'active' : ''}`} style={{ color: 'var(--primary)' }}>
                      <span style={{ marginRight: '8px' }}>»</span> Add New
                    </NavLink>
                    <NavLink to="/account/receive-list" className={({isActive}) => `submenu-item ${isActive ? 'active' : ''}`}>
                      <span style={{ marginRight: '8px' }}>»</span> Receive List
                    </NavLink>
                  </div>
                )}
              </div>

              {/* Expense Submenu Group */}
              <div>
                <div 
                  className="nav-item" 
                  style={{ paddingLeft: '32px', marginBottom: '0', background: expenseOpen ? 'rgba(255,255,255,0.05)' : 'transparent', cursor: 'pointer' }}
                  onClick={() => setExpenseOpen(!expenseOpen)}
                >
                  <div className="nav-item-content" style={{ fontSize: '14px' }}>
                    <span style={{ marginRight: '8px' }}>»</span> Expense
                  </div>
                  {expenseOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                </div>
                
                {expenseOpen && (
                  <div>
                    <NavLink to="/account/expense-create" className={({isActive}) => `submenu-item ${isActive ? 'active' : ''}`} style={{ color: 'var(--primary)' }}>
                      <span style={{ marginRight: '8px' }}>»</span> Add New
                    </NavLink>
                    <NavLink to="/account/expense-list" className={({isActive}) => `submenu-item ${isActive ? 'active' : ''}`}>
                      <span style={{ marginRight: '8px' }}>»</span> Expense
                    </NavLink>
                    <NavLink to="/account/supplier-payment" className={({isActive}) => `submenu-item ${isActive ? 'active' : ''}`}>
                      <span style={{ marginRight: '8px' }}>»</span> Supplier Payment
                    </NavLink>
                    <NavLink to="/account/money-return" className={({isActive}) => `submenu-item ${isActive ? 'active' : ''}`}>
                      <span style={{ marginRight: '8px' }}>»</span> Money Return
                    </NavLink>
                  </div>
                )}
              </div>
              {/* Sub-Account Submenu Group */}
              <div>
                <div 
                  className="nav-item" 
                  style={{ paddingLeft: '32px', marginBottom: '0', background: subAccountOpen ? 'rgba(255,255,255,0.05)' : 'transparent', cursor: 'pointer' }}
                  onClick={() => setSubAccountOpen(!subAccountOpen)}
                >
                  <div className="nav-item-content" style={{ fontSize: '14px' }}>
                    <span style={{ marginRight: '8px' }}>»</span> Account
                  </div>
                  {subAccountOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                </div>
                
                {subAccountOpen && (
                  <div>
                    <NavLink to="/account/account-create" className={({isActive}) => `submenu-item ${isActive ? 'active' : ''}`} style={{ color: 'var(--primary)' }}>
                      <span style={{ marginRight: '8px' }}>»</span> Account Create
                    </NavLink>
                    <NavLink to="/account/account-list" className={({isActive}) => `submenu-item ${isActive ? 'active' : ''}`}>
                      <span style={{ marginRight: '8px' }}>»</span> Account List
                    </NavLink>
                    <NavLink to="/account/account-balance" className={({isActive}) => `submenu-item ${isActive ? 'active' : ''}`}>
                      <span style={{ marginRight: '8px' }}>»</span> Account Balance
                    </NavLink>
                    <NavLink to="/account/statement" className={({isActive}) => `submenu-item ${isActive ? 'active' : ''}`}>
                      <span style={{ marginRight: '8px' }}>»</span> Statement
                    </NavLink>
                  </div>
                )}
              </div>
              {/* Transfer Submenu Group */}
              <div>
                <div 
                  className="nav-item" 
                  style={{ paddingLeft: '32px', marginBottom: '0', background: transferOpen ? 'rgba(255,255,255,0.05)' : 'transparent', cursor: 'pointer' }}
                  onClick={() => setTransferOpen(!transferOpen)}
                >
                  <div className="nav-item-content" style={{ fontSize: '14px' }}>
                    <span style={{ marginRight: '8px' }}>»</span> Transfer
                  </div>
                  {transferOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                </div>
                
                {transferOpen && (
                  <div>
                    <NavLink to="/account/transfer-create" className={({isActive}) => `submenu-item ${isActive ? 'active' : ''}`} style={{ color: 'var(--primary)' }}>
                      <span style={{ marginRight: '8px' }}>»</span> Transfer Create
                    </NavLink>
                    <NavLink to="/account/transfer-list" className={({isActive}) => `submenu-item ${isActive ? 'active' : ''}`}>
                      <span style={{ marginRight: '8px' }}>»</span> Transfer List
                    </NavLink>
                  </div>
                )}
              </div>
              <NavLink to="/account/profit" className={({isActive}) => `submenu-item ${isActive ? 'active' : ''}`} style={{ paddingLeft: '32px' }}>
                <span style={{ marginRight: '8px' }}>»</span> Profit
              </NavLink>
            </div>
          )}
        </div>

        {/* Loan Menu Group */}
        <div>
          <div className={`nav-item ${loanOpen ? 'active' : ''}`} onClick={() => setLoanOpen(!loanOpen)}>
            <div className="nav-item-content">
              <Banknote size={20} />
              <span>{t('menu.loan')}</span>
            </div>
            {loanOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </div>
          
          {loanOpen && (
            <div className="submenu">
              <NavLink to="/loan/client-create" className={({isActive}) => `submenu-item ${isActive ? 'active' : ''}`} style={{ color: 'var(--primary)' }}>
                <span style={{ marginRight: '8px' }}>»</span> Add New Client
              </NavLink>
              <NavLink to="/loan/client-list" className={({isActive}) => `submenu-item ${isActive ? 'active' : ''}`}>
                <span style={{ marginRight: '8px' }}>»</span> Client List
              </NavLink>
              <NavLink to="/loan/receive" className={({isActive}) => `submenu-item ${isActive ? 'active' : ''}`}>
                <span style={{ marginRight: '8px' }}>»</span> Loan Receive
              </NavLink>
              <NavLink to="/loan/payment" className={({isActive}) => `submenu-item ${isActive ? 'active' : ''}`}>
                <span style={{ marginRight: '8px' }}>»</span> Loan Payment
              </NavLink>
              <NavLink to="/loan/statement" className={({isActive}) => `submenu-item ${isActive ? 'active' : ''}`}>
                <span style={{ marginRight: '8px' }}>»</span> Loan Statement
              </NavLink>
            </div>
          )}
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
