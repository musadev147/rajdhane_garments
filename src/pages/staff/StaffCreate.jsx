import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Settings, List, User, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PrintHeader from '../../components/PrintHeader';


const StaffCreate = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    joiningDate: 'MM/DD/YYYY',
    activeStatus: 'Active'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px' }}>
        <PrintHeader />
      
      <div className="premium-card">
        {/* Header */}
        <div className="premium-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', background: 'white' }}>
          <h2 className="premium-title" style={{ fontSize: '14px', fontWeight: 'bold' }}>STAFF CREATE</h2>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn" style={{ background: 'var(--text-muted)', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Settings size={14} />
            </button>
            <button className="btn" onClick={() => navigate('/staff/list')} style={{ background: 'var(--text-muted)', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <List size={14} /> Staff List
            </button>
            <button className="btn" style={{ background: 'var(--danger)', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontWeight: 'bold' }}>▶</span> YouTube
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="premium-body" style={{ background: 'white', padding: '24px' }}>
          
          <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', marginBottom: '24px' }}>
            
            {/* Name */}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '50%', left: '16px', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
                <User size={16} />
              </div>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder=" " 
                style={{ width: '100%', padding: '12px 12px 12px 40px', border: '1px solid #0ea5e9', borderRadius: '4px', outline: 'none' }} 
              />
                <label>Name</label>
            </div>

            {/* Username */}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '50%', left: '16px', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
                <User size={16} />
              </div>
              <input 
                type="text" 
                name="username" 
                value={formData.username} 
                onChange={handleChange} 
                placeholder=" " 
                style={{ width: '100%', padding: '12px 12px 12px 40px', border: '1px solid #0ea5e9', borderRadius: '4px', outline: 'none' }} 
              />
                <label>Username</label>
            </div>

            {/* File Upload */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', border: '1px solid #0ea5e9', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ background: 'var(--info)', color: 'white', padding: '12px 16px', fontSize: '12px', cursor: 'pointer' }}>
                Choose a file
              </div>
              <div style={{ padding: '12px 16px', fontSize: '13px', color: 'var(--text-muted)', flex: 1, background: 'white' }}>
                No file chosen
              </div>
            </div>

            {/* Joining Date */}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-10px', left: '16px', background: 'var(--info)', color: 'white', fontSize: '11px', padding: '2px 8px', borderRadius: '4px', zIndex: 1, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Calendar size={12} /> Joining Date
              </div>
              <input 
                type="text" 
                name="joiningDate" 
                value={formData.joiningDate} 
                onChange={handleChange} 
                style={{ width: '100%', padding: '12px', border: '1px solid #0ea5e9', borderRadius: '4px', outline: 'none', color: '#94a3b8' }} 
              />
            </div>

            {/* Active */}
            <div style={{ position: 'relative' }}>
              <input 
                type="text" 
                name="activeStatus" 
                value={formData.activeStatus} 
                onChange={handleChange} 
                style={{ width: '100%', padding: '12px', border: '1px solid #0ea5e9', borderRadius: '4px', outline: 'none', color: '#000' }} 
              />
            </div>

          </div>

          {/* Submit Button */}
          <div>
            <button className="btn-primary" style={{ width: '100%', background: 'var(--success)', color: 'white', padding: '14px', border: 'none', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer' }}>
              Add Staff
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffCreate;
