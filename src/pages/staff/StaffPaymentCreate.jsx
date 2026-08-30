import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Settings, List, Users, Calendar, User, X, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PrintHeader from '../../components/PrintHeader';


const StaffPaymentCreate = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isExpenseCategoryModalOpen, setIsExpenseCategoryModalOpen] = useState(false);

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px' }}>
        <PrintHeader />
      
      <div className="premium-card">
        {/* Header */}
        <div className="premium-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', background: 'white' }}>
          <h2 className="premium-title" style={{ fontSize: '14px', fontWeight: 'bold' }}>Add Staff Payment</h2>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn" style={{ background: 'var(--text-muted)', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Settings size={14} />
            </button>
            <button className="btn" style={{ background: 'var(--text-muted)', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <List size={14} /> Client List
            </button>
            <button className="btn" style={{ background: 'var(--text-muted)', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Users size={14} /> Client Group
            </button>
            <button className="btn" style={{ background: 'var(--danger)', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontWeight: 'bold' }}>▶</span> YouTube
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="premium-body" style={{ background: 'f8fafc', padding: '24px', borderRadius: '0 0 8px 8px', borderTop: '1px solid #e2e8f0' }}>
          
          <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
            
            {/* Row 1 */}
            {/* Date */}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-10px', left: '16px', background: 'var(--info)', color: 'white', fontSize: '11px', padding: '2px 8px', borderRadius: '4px', zIndex: 1, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Calendar size={12} /> Date
              </div>
              <input 
                type="text" 
                defaultValue="25/08/2026"
                style={{ width: '100%', padding: '12px', border: '1px solid #0ea5e9', borderRadius: '4px', outline: 'none', color: '#000' }} 
              />
            </div>

            {/* Month & Year */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <input 
                type="text" 
                defaultValue="August"
                style={{ width: '100%', padding: '12px', border: '1px solid #0ea5e9', borderRadius: '4px', outline: 'none', color: '#000' }} 
              />
              <input 
                type="text" 
                defaultValue="2026"
                style={{ width: '100%', padding: '12px', border: '1px solid #0ea5e9', borderRadius: '4px', outline: 'none', color: '#000' }} 
              />
            </div>

            {/* Row 2 */}
            {/* Select Staffs */}
            <div style={{ display: 'flex' }}>
              <select style={{ flex: 1, padding: '12px', border: '1px solid #0ea5e9', borderRight: 'none', borderRadius: '4px 0 0 4px', outline: 'none', appearance: 'none', background: 'white' }}>
                <option>Select Staffs</option>
              </select>
              <button style={{ background: 'var(--success)', color: 'white', border: 'none', padding: '0 16px', borderRadius: '0 4px 4px 0', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Plus size={18} />
              </button>
            </div>

            {/* Account (TOTAL BALANCE) */}
            <div style={{ display: 'flex' }}>
              <select style={{ flex: 1, padding: '12px', border: '1px solid #0ea5e9', borderRight: 'none', borderRadius: '4px 0 0 4px', outline: 'none', appearance: 'none', background: 'white' }}>
                <option>TOTAL BALENCE</option>
              </select>
              <button style={{ background: 'white', border: '1px solid #0ea5e9', borderLeft: 'none', borderRight: 'none', padding: '0 12px', cursor: 'pointer' }}>
                <X size={14} />
              </button>
              <button 
                onClick={() => setIsAccountModalOpen(true)}
                style={{ background: 'var(--success)', color: 'white', border: 'none', padding: '0 16px', borderRadius: '0 4px 4px 0', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <Plus size={18} />
              </button>
            </div>

            {/* Row 3 */}
            {/* Amount */}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '50%', left: '16px', transform: 'translateY(-50%)', color: '#000' }}>
                <User size={16} />
              </div>
              <input 
                type="text" 
                placeholder=" "
                style={{ width: '100%', padding: '12px 12px 12px 40px', border: '1px solid #0ea5e9', borderRadius: '4px', outline: 'none' }} 
              />
                <label>Amount</label>
            </div>

            {/* Expense Category (DOKAN KOROJ) */}
            <div style={{ display: 'flex' }}>
              <select style={{ flex: 1, padding: '12px', border: '1px solid #0ea5e9', borderRight: 'none', borderRadius: '4px 0 0 4px', outline: 'none', appearance: 'none', background: 'white' }}>
                <option>DOKAN KOROJ</option>
              </select>
              <button style={{ background: 'white', border: '1px solid #0ea5e9', borderLeft: 'none', borderRight: 'none', padding: '0 12px', cursor: 'pointer' }}>
                <X size={14} />
              </button>
              <button 
                onClick={() => setIsExpenseCategoryModalOpen(true)}
                style={{ background: 'var(--success)', color: 'white', border: 'none', padding: '0 16px', borderRadius: '0 4px 4px 0', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <Plus size={18} />
              </button>
            </div>

            {/* Row 4 */}
            {/* Expense Description */}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '50%', left: '16px', transform: 'translateY(-50%)', color: '#000' }}>
                <span style={{ fontSize: '14px', background: '#000', color: 'white', padding: '2px 4px', borderRadius: '2px' }}>TAX</span>
              </div>
              <input 
                type="text" 
                placeholder=" "
                style={{ width: '100%', padding: '12px 12px 12px 50px', border: '1px solid #0ea5e9', borderRadius: '4px', outline: 'none' }} 
              />
                <label>Expense Description in a short note</label>
            </div>

          </div>

          {/* Submit Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
            <button className="btn-primary" style={{ background: 'var(--primary)', color: 'white', padding: '8px 24px', border: 'none', borderRadius: '4px', fontSize: '14px', cursor: 'pointer' }}>
              Add New
            </button>
            <button className="btn-primary" style={{ background: 'var(--danger)', color: 'white', padding: '8px 24px', border: 'none', borderRadius: '4px', fontSize: '14px', cursor: 'pointer' }}>
              Close
            </button>
          </div>
        </div>
      </div>

      {/* Add New Account Modal */}
      {isAccountModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: 'white', width: '800px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}>
            
            {/* Modal Header */}
            <div style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Add New Account</h3>
              <button onClick={() => setIsAccountModalOpen(false)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#94a3b8' }}>
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '24px' }}>
              <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '50%', left: '16px', transform: 'translateY(-50%)', color: '#000' }}><User size={16} /></div>
                  <input type="text" placeholder=" " style={{ width: '100%', padding: '12px 12px 12px 40px', border: '1px solid #0ea5e9', borderRadius: '4px', outline: 'none' }} />
                <label>Account Title</label>
                </div>

                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '50%', left: '16px', transform: 'translateY(-50%)', color: '#000' }}><User size={16} /></div>
                  <input type="text" placeholder=" " style={{ width: '100%', padding: '12px 12px 12px 40px', border: '1px solid #0ea5e9', borderRadius: '4px', outline: 'none' }} />
                <label>Initial Balance</label>
                </div>

                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '50%', left: '16px', transform: 'translateY(-50%)', color: '#000' }}><User size={16} /></div>
                  <input type="text" placeholder=" " style={{ width: '100%', padding: '12px 12px 12px 40px', border: '1px solid #0ea5e9', borderRadius: '4px', outline: 'none' }} />
                <label>Account Number</label>
                </div>

                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '50%', left: '16px', transform: 'translateY(-50%)', color: '#000' }}><User size={16} /></div>
                  <input type="text" placeholder=" " style={{ width: '100%', padding: '12px 12px 12px 40px', border: '1px solid #0ea5e9', borderRadius: '4px', outline: 'none' }} />
                <label>Contact Person</label>
                </div>

                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '50%', left: '16px', transform: 'translateY(-50%)', color: '#000' }}><User size={16} /></div>
                  <input type="text" placeholder=" " style={{ width: '100%', padding: '12px 12px 12px 40px', border: '1px solid #0ea5e9', borderRadius: '4px', outline: 'none' }} />
                <label>Phone Number</label>
                </div>

                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '50%', left: '16px', transform: 'translateY(-50%)', color: '#000' }}><User size={16} /></div>
                  <input type="text" placeholder=" " style={{ width: '100%', padding: '12px 12px 12px 40px', border: '1px solid #0ea5e9', borderRadius: '4px', outline: 'none' }} />
                <label>Account Description</label>
                </div>

              </div>
            </div>

            {/* Modal Footer */}
            <div style={{ padding: '16px 24px', display: 'flex', justifyContent: 'flex-end', gap: '8px', borderTop: '1px solid #e2e8f0' }}>
              <button style={{ background: 'var(--success)', color: 'white', padding: '8px 16px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>
                Add New Project
              </button>
              <button onClick={() => setIsAccountModalOpen(false)} style={{ background: 'var(--danger)', color: 'white', padding: '8px 16px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add New Expense Category Modal */}
      {isExpenseCategoryModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: 'white', width: '500px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}>
            
            {/* Modal Header */}
            <div style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Add New Expense Category</h3>
              <button onClick={() => setIsExpenseCategoryModalOpen(false)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#94a3b8' }}>
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '24px' }}>
              <div style={{ position: 'relative', marginBottom: '8px' }}>
                <div style={{ position: 'absolute', top: '-10px', left: '16px', background: 'var(--info)', color: 'white', fontSize: '11px', padding: '2px 8px', borderRadius: '4px', zIndex: 1, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <List size={12} /> Expense Category
                </div>
                <input 
                  type="text" 
                  placeholder=" " 
                  style={{ width: '100%', padding: '14px', border: '1px solid #cbd5e1', borderRadius: '4px', outline: 'none', background: 'var(--card-border)' }} 
                />
                <label>Expense Category Name</label>
              </div>
              <div style={{ color: 'var(--danger)', fontSize: '12px', fontWeight: '500' }}>
                Fill the input
              </div>
            </div>

            {/* Modal Footer */}
            <div style={{ padding: '16px 24px', display: 'flex', justifyContent: 'center', gap: '8px', borderTop: '1px solid #e2e8f0' }}>
              <button style={{ background: 'var(--success)', color: 'white', padding: '8px 24px', borderRadius: '4px', border: 'none', cursor: 'pointer', fontSize: '14px' }}>
                Add
              </button>
              <button onClick={() => setIsExpenseCategoryModalOpen(false)} style={{ background: 'var(--danger)', color: 'white', padding: '8px 24px', borderRadius: '4px', border: 'none', cursor: 'pointer', fontSize: '14px' }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffPaymentCreate;
