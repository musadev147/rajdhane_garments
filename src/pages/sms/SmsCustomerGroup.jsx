import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PrintHeader from '../../components/PrintHeader';


const SmsCustomerGroup = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [clientGroup, setClientGroup] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modal State
  const [groupName, setGroupName] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px' }}>
        <PrintHeader />
      
      <div className="premium-card">
        {/* Header */}
        <div className="premium-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', background: 'white' }}>
          <h2 className="premium-title" style={{ fontSize: '14px', fontWeight: 'bold' }}>SEND SMS TO CLIENT GROUP</h2>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn" style={{ background: 'var(--text-muted)', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px' }}>
              Go Back
            </button>
            <button className="btn" style={{ background: 'var(--danger)', color: 'white', padding: '6px 12px', fontSize: '12px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontWeight: 'bold' }}>▶</span> YouTube
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="premium-body" style={{ background: 'white', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <div style={{ width: '60%' }}>
            {/* Message Body */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '12px', marginBottom: '8px', color: 'var(--text-muted)' }}>messages.message_body</label>
              <textarea 
                placeholder="Type your message here ..."
                value={message}
                onChange={handleMessageChange}
                style={{ width: '100%', height: '150px', padding: '16px', border: '1px solid #e2e8f0', borderRadius: '4px', outline: 'none', resize: 'none', color: '#94a3b8' }}
              />
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '8px' }}>
                Remaining Characters: {160 - message.length}
              </div>
            </div>

            {/* Client Group Selection */}
            <div style={{ marginBottom: '40px' }}>
              <label style={{ display: 'block', fontSize: '12px', marginBottom: '8px', color: 'var(--text-muted)' }}>Client Group</label>
              <div style={{ display: 'flex' }}>
                <select 
                  value={clientGroup}
                  onChange={(e) => setClientGroup(e.target.value)}
                  style={{ flex: 1, padding: '12px', border: '1px solid #0ea5e9', borderRight: 'none', borderRadius: '4px 0 0 4px', outline: 'none', appearance: 'none', background: 'var(--card-header-bg)', color: 'var(--text-muted)' }}
                >
                  <option value="" disabled hidden>Select client group</option>
                </select>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  style={{ background: 'var(--success)', color: 'white', border: 'none', padding: '0 16px', borderRadius: '0 4px 4px 0', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div style={{ textAlign: 'center' }}>
              <button className="btn-primary" style={{ background: 'var(--success)', color: 'white', padding: '12px 32px', border: 'none', borderRadius: '4px', fontSize: '14px', cursor: 'pointer' }}>
                Send SMS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add New Client Group Modal */}
      {isModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: 'white', width: '500px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}>
            
            {/* Modal Header */}
            <div style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Add New Client Group</h3>
              <button onClick={closeModal} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#94a3b8' }}>
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '24px' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-10px', left: '16px', background: 'var(--info)', color: 'white', fontSize: '11px', padding: '2px 8px', borderRadius: '4px', zIndex: 1 }}>
                  Group Name
                </div>
                <input 
                  type="text" 
                  value={groupName} 
                  onChange={(e) => setGroupName(e.target.value)} 
                  style={{ width: '100%', padding: '14px', border: '1px solid #e2e8f0', borderRadius: '4px', outline: 'none', background: 'var(--card-border)' }} 
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div style={{ padding: '16px 24px', display: 'flex', justifyContent: 'center', gap: '8px', borderTop: '1px solid #e2e8f0' }}>
              <button style={{ background: 'var(--success)', color: 'white', padding: '8px 16px', borderRadius: '4px', border: 'none', cursor: 'pointer', fontSize: '13px' }}>
                Add Group
              </button>
              <button onClick={closeModal} style={{ background: 'var(--danger)', color: 'white', padding: '8px 16px', borderRadius: '4px', border: 'none', cursor: 'pointer', fontSize: '13px' }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmsCustomerGroup;
