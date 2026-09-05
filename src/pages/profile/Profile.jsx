import React, { useState, useEffect } from 'react';
import { Camera, Home, Settings, Edit, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const Profile = () => {
  const { t } = useTranslation();
  const location = useLocation();
  
  // Dummy state
  const [activeTab, setActiveTab] = useState('profile');

  useEffect(() => {
    if (location.state && location.state.tab) {
      setActiveTab(location.state.tab);
    }
  }, [location.state]);

  return (
    <div className="page-content" style={{ padding: '24px', background: '#f8f9fa', minHeight: 'calc(100vh - 60px)' }}>
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        
        {/* Left Column - Profile Card */}
        <div style={{ 
          width: '320px', 
          background: 'white', 
          borderRadius: '12px', 
          padding: '24px', 
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
          borderTop: '4px solid #16a34a',
          height: 'fit-content'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '24px' }}>
            <div style={{ position: 'relative', marginBottom: '16px' }}>
              <div style={{ 
                width: '100px', 
                height: '100px', 
                borderRadius: '50%', 
                background: '#e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <img src="https://i.pravatar.cc/150?img=11" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ 
                position: 'absolute', 
                top: '0', 
                right: '0', 
                background: '#0ea5e9', 
                color: 'white', 
                width: '24px', 
                height: '24px', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                cursor: 'pointer',
                border: '2px solid white'
              }}>
                <Camera size={12} />
              </div>
            </div>
            
            <button style={{ 
              background: '#22c55e', 
              color: 'white', 
              border: 'none', 
              padding: '6px 16px', 
              borderRadius: '20px', 
              fontSize: '11px', 
              fontWeight: '600',
              cursor: 'pointer',
              marginBottom: '16px'
            }}>
              Update Image
            </button>
            
            <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              admin 2 <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 'normal' }}>(ADMIN 2)</span>
            </h3>
            
            <div style={{ alignSelf: 'flex-start', width: '100%', marginTop: '16px' }}>
              <p style={{ margin: '0 0 16px 0', fontSize: '13px', fontWeight: '500' }}>Bio</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <button 
                  onClick={() => setActiveTab('profile')}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px', 
                    width: '100%', 
                    padding: '8px 16px', 
                    background: activeTab === 'profile' ? '#1e293b' : 'transparent',
                    color: activeTab === 'profile' ? 'white' : '#334155',
                    border: '1px solid',
                    borderColor: activeTab === 'profile' ? '#1e293b' : '#cbd5e1',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: '500',
                    fontSize: '13px',
                    justifyContent: 'flex-start'
                  }}
                >
                  <div style={{ background: activeTab === 'profile' ? 'rgba(255,255,255,0.2)' : '#e2e8f0', padding: '4px', borderRadius: '50%', display: 'flex' }}>
                    <Home size={16} />
                  </div>
                  Profile
                </button>
                
                <button 
                  onClick={() => setActiveTab('password')}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px', 
                    width: '100%', 
                    padding: '8px 16px', 
                    background: activeTab === 'password' ? '#1e293b' : 'transparent',
                    color: activeTab === 'password' ? 'white' : '#334155',
                    border: '1px solid',
                    borderColor: activeTab === 'password' ? '#1e293b' : '#cbd5e1',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: '500',
                    fontSize: '13px',
                    justifyContent: 'flex-start'
                  }}
                >
                  <div style={{ background: activeTab === 'password' ? 'rgba(255,255,255,0.2)' : '#e2e8f0', padding: '4px', borderRadius: '50%', display: 'flex' }}>
                    <Settings size={16} />
                  </div>
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Profile Info */}
        <div style={{ 
          flex: 1, 
          minWidth: '400px',
          background: 'white', 
          borderRadius: '12px', 
          padding: '24px', 
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
          borderTop: '4px solid #16a34a'
        }}>
          {activeTab === 'profile' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>PERSONAL INFORMATION</h4>
                <button style={{ 
                  background: '#1e293b', 
                  color: 'white', 
                  border: 'none', 
                  width: '32px', 
                  height: '32px', 
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}>
                  <Edit size={16} />
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <InfoRow label="User Name" value="ADMIN 2" />
                <InfoRow label="Full Name" value="admin 2" />
                <InfoRow label="E-mail" value="" type="email" />
                <InfoRow label="Present Address" value="Present Address" isPlaceholder />
                <InfoRow label="Permanent Address" value="Permanent Address" isPlaceholder />
                <InfoRow label="Phone Number" value="Phone" isPlaceholder />
                <InfoRow label="Nationality" value="Nationality" isPlaceholder />
                <InfoRow label="Nid" value="Nid" isPlaceholder />
                <InfoRow label="Blood Group" value="A +(ve)" />
                <InfoRow label="Date Of Birth" value="05/09/2026" />
              </div>
            </div>
          )}
          
          {activeTab === 'password' && (
            <div>
              <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', marginBottom: '32px' }}>CHANGE PASSWORD</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '600px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '13px', fontWeight: '600' }}>Current Password</label>
                  <input type="password" placeholder="Current Password" style={{ padding: '12px 16px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '13px', color: '#64748b', outline: 'none' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '13px', fontWeight: '600' }}>New Password</label>
                  <input type="password" placeholder="Type New Password" style={{ padding: '12px 16px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '13px', color: '#64748b', outline: 'none' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '13px', fontWeight: '600' }}>Current Password</label>
                  <input type="password" placeholder="Re-type Password" style={{ padding: '12px 16px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '13px', color: '#64748b', outline: 'none' }} />
                </div>
                <button style={{ 
                  background: '#16a34a', 
                  color: 'white', 
                  border: 'none', 
                  padding: '12px 16px', 
                  borderRadius: '4px', 
                  fontWeight: '600',
                  cursor: 'pointer',
                  marginTop: '8px',
                  width: '100%',
                  fontSize: '14px'
                }}>
                  Change
                </button>
              </div>
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
};

const InfoRow = ({ label, value, isPlaceholder, type }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ width: '180px', fontSize: '13px', color: '#334155', fontWeight: '500' }}>
        {label}
      </div>
      <div style={{ padding: '0 16px', color: '#64748b' }}>:</div>
      <div style={{ flex: 1 }}>
        {type === 'email' ? (
           <div style={{ 
             display: 'flex', 
             alignItems: 'center', 
             gap: '8px', 
             padding: '8px 12px', 
             background: 'transparent',
             border: '1px solid #cbd5e1', 
             borderRadius: '6px',
             minHeight: '38px',
             overflow: 'hidden'
           }}>
             <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: '#dcfce7', color: '#16a34a', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: '600' }}>
               <Mail size={12} />
               TEMP MAIL
             </div>
           </div>
        ) : (
          <div style={{ 
            padding: '8px 12px', 
            background: 'transparent',
            border: '1px solid #cbd5e1', 
            borderRadius: '6px',
            fontSize: '13px',
            color: isPlaceholder ? '#94a3b8' : '#334155',
            minHeight: '20px'
          }}>
            {value}
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
