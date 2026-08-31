import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { User, Building, MapPin, Phone, Mail, Users, Settings, Play, Plus, List, Layers, Wallet } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import PrintHeader from '../../components/PrintHeader';
import AddOptionModal from '../../components/AddOptionModal';


const LoanClientCreate = () => {
  const { t } = useTranslation();

  const { addLoanClient } = useAppContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    company: '',
    address: '',
    phone: '',
    phoneOptional: '',
    previousDue: '',
    email: '',
    reference: '',
    group: ''
  });
  
  const [isGroupModalOpen, setIsGroupModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Name and Phone are required.");
      return;
    }

    addLoanClient({
      name: formData.name,
      fatherName: formData.fatherName,
      company: formData.company,
      address: formData.address,
      phone: formData.phone,
      phoneOptional: formData.phoneOptional,
      previousDue: Number(formData.previousDue) || 0,
      email: formData.email,
      reference: formData.reference,
      group: formData.group,
      due: Number(formData.previousDue) || 0
    });

    alert("Loan Client added successfully!");
    navigate('/loan/loan-client-list');
  };

  return (
    <div className="premium-card">
        <PrintHeader />
      <div className="premium-header">
        <h2 className="premium-title" style={{ textTransform: 'uppercase' }}>Client Create</h2>
        <div className="header-actions">
          <button className="btn-icon">
            <Settings size={18} />
          </button>
          <button className="btn-gray-outline" onClick={() => navigate('/loan/loan-client-list')}>
            <List size={16} /> Client List
          </button>
          <button className="btn-gray-outline">
            <Layers size={16} /> Client Group
          </button>
          <button className="btn-youtube">
            <div style={{ display: 'flex', alignItems: 'center', background: '#ff0000', color: 'white', padding: '6px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold' }}>
              <Play size={16} fill="white" style={{ marginRight: '6px' }} /> YouTube
            </div>
          </button>
        </div>
      </div>

      <div className="premium-body">
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            
            <div className="form-group">
              <div className="form-input floating-label">
                <User size={18} className="input-icon" />
                <input type="text" name="name" placeholder=" " value={formData.name} onChange={handleChange} required />
                <label>Client Name</label>
              </div>
            </div>

            <div className="form-group">
              <div className="form-input floating-label">
                <User size={18} className="input-icon" />
                <input type="text" name="fatherName" placeholder=" " value={formData.fatherName} onChange={handleChange} />
                <label>Father's Name</label>
              </div>
            </div>

            <div className="form-group">
              <div className="form-input floating-label">
                <Building size={18} className="input-icon" />
                <input type="text" name="company" placeholder=" " value={formData.company} onChange={handleChange} />
                <label>Company Name</label>
              </div>
            </div>

            <div className="form-group">
              <div className="form-input floating-label">
                <MapPin size={18} className="input-icon" />
                <input type="text" name="address" placeholder=" " value={formData.address} onChange={handleChange} />
                <label>Address</label>
              </div>
            </div>

            <div className="form-group">
              <div className="form-input floating-label">
                <Phone size={18} className="input-icon" />
                <input type="text" name="phone" placeholder=" " value={formData.phone} onChange={handleChange} required />
                <label>Phone Number</label>
              </div>
            </div>

            <div className="form-group">
              <div className="form-input floating-label">
                <Phone size={18} className="input-icon" />
                <input type="text" name="phoneOptional" placeholder=" " value={formData.phoneOptional} onChange={handleChange} />
                <label>Phone Optional</label>
              </div>
            </div>

            <div className="form-group">
              <div className="form-input floating-label">
                <Wallet size={18} className="input-icon" />
                <input type="number" name="previousDue" placeholder=" " value={formData.previousDue} onChange={handleChange} />
                <label>Previous Due</label>
              </div>
            </div>

            <div className="form-group">
              <div className="form-input floating-label">
                <Mail size={18} className="input-icon" />
                <input type="email" name="email" placeholder=" " value={formData.email} onChange={handleChange} />
                <label>E-mail</label>
              </div>
            </div>

            <div className="form-group">
              <div className="form-input floating-label">
                <Users size={18} className="input-icon" />
                <input type="text" name="reference" placeholder=" " value={formData.reference} onChange={handleChange} />
                <label>Reference</label>
              </div>
            </div>

            <div className="form-group">
              <div className="input-group">
                <div className="form-input floating-label no-icon">
                  <select name="group" value={formData.group} onChange={handleChange}>
                    <option value="" disabled hidden></option>
                    <option value="Group 1">Group 1</option>
                  </select>
                  <label>Select client group</label>
                </div>
                <button type="button" className="btn-append" onClick={() => setIsGroupModalOpen(true)}>
                  <Plus size={20} />
                </button>
              </div>
            </div>

          </div>

          <button type="submit" className="btn-green" style={{ width: '100%', padding: '14px', fontSize: '16px', marginTop: '16px' }}>
            Client Add
          </button>
        </form>
      </div>
      
      <AddOptionModal 
        isOpen={isGroupModalOpen}
        onClose={() => setIsGroupModalOpen(false)}
        onSave={(val) => { console.log('Add Group', val); setIsGroupModalOpen(false); }}
        title="Add Client Group"
        label="Group Name"
      />
    </div>
  );
};

export default LoanClientCreate;
