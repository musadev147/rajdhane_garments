import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Building, MapPin, Mail, DollarSign, FileText, 
  MessageSquare, User, Phone, Map, ShoppingCart, 
  Image as ImageIcon
} from 'lucide-react';
import PrintHeader from '../../components/PrintHeader';

const CompanyInformation = () => {
  const { t } = useTranslation();

  
  const InputField = ({ icon: Icon, label, defaultValue, type = "text", placeholder = "" }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#374151', fontWeight: '500' }}>
        <Icon size={16} color="var(--text-muted)" /> {label}
      </label>
      <input 
        type={type} 
        defaultValue={defaultValue} 
        placeholder={placeholder}
        style={{ 
          padding: '12px 16px', 
          border: '1px solid #cbd5e1', 
          borderRadius: '6px', 
          outline: 'none', 
          width: '100%',
          fontSize: '14px',
          color: 'var(--text-main)',
          transition: 'border-color 0.2s'
        }} 
        onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
        onBlur={(e) => e.target.style.borderColor = 'var(--card-border)'}
      />
    </div>
  );

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px' }}>
        <PrintHeader />
      
      <div className="premium-card" style={{ background: 'white', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        <div style={{ padding: '24px', borderBottom: '1px solid #e2e8f0', background: 'var(--card-header-bg)' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0', color: 'var(--text-main)' }}>Company Information</h2>
        </div>

        <div style={{ padding: '32px' }}>
          
          <form style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
            
            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <InputField icon={Building} label="Company Name" defaultValue="রাজধানী গার্মেন্টস" />
              <InputField icon={Building} label="Company Type" defaultValue="Cloth Store" />
              <InputField icon={MapPin} label="Present Address" defaultValue="নেহা শপিংমল এর দ্বিতীয় তলা, কালিগঞ্জ, ঝিনাইদহ" />
              <InputField icon={Mail} label="Email" type="email" defaultValue="admin@gmail.com" />
              <InputField icon={Building} label="City" defaultValue="Jhenaidah" />
              <InputField icon={MapPin} label="Zip Code" defaultValue="9000" />
              <InputField icon={DollarSign} label="Currency Symbol" defaultValue="৳" />
              <InputField icon={FileText} label="Invoice Footer" placeholder="Invoice Footer" defaultValue="" />
              <InputField icon={MessageSquare} label="SMS Api Sender" defaultValue="smsapibd.com" />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', color: '#374151', fontWeight: '500' }}>Status</label>
                <select style={{ width: '100%', padding: '12px 16px', border: '1px solid #cbd5e1', borderRadius: '6px', outline: 'none', fontSize: '14px', color: 'var(--text-main)', background: 'white', cursor: 'pointer' }}>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>

            </div>

            {/* Right Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <InputField icon={User} label="Proprietor" defaultValue="RAJDHANI" />
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#374151', fontWeight: '500' }}>
                  <MapPin size={16} color="var(--text-muted)" /> Country
                </label>
                <select style={{ width: '100%', padding: '12px 16px', border: '1px solid #cbd5e1', borderRadius: '6px', outline: 'none', fontSize: '14px', color: 'var(--text-main)', background: 'white', cursor: 'pointer' }}>
                  <option>Bangladesh</option>
                </select>
              </div>

              <InputField icon={MapPin} label="Address" defaultValue="নেহা শপিংমল এর দ্বিতীয় তলা, কালিগঞ্জ, ঝিনাইদহ" />
              <InputField icon={Phone} label="Phone Number" defaultValue="01716912350, 01727902498" />
              <InputField icon={Map} label="State" defaultValue="Bangladesh" />
              <InputField icon={ShoppingCart} label="Stock Warning" defaultValue="10" />
              <InputField icon={FileText} label="Invoice Greetings" defaultValue="বিসমিল্লাহির রাহমানির রাহিম" />
              <InputField icon={MessageSquare} label="SMS Api Code" defaultValue="smsapibd.com" />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', color: '#374151', fontWeight: '500' }}>Company Logo</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <label style={{ background: 'var(--primary)', color: 'white', padding: '10px 24px', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: '500', transition: 'background 0.2s', display: 'inline-block' }}>
                    Choose a file
                    <input type="file" style={{ display: 'none' }} />
                  </label>
                  <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>No file chosen</span>
                </div>
              </div>
              
              <div style={{ marginTop: '8px', border: '2px dashed #cbd5e1', padding: '32px', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'var(--card-header-bg)', minHeight: '120px' }}>
                <ImageIcon size={32} color="#94a3b8" style={{ marginBottom: '8px' }} />
                <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Logo Preview</span>
                <h1 style={{ fontFamily: 'cursive', margin: '16px 0 0 0', color: '#000', fontSize: '28px' }}>Rajdhani</h1>
                <h3 style={{ fontFamily: 'cursive', margin: '-5px 0 0 30px', color: '#000', fontSize: '18px' }}>Garments</h3>
              </div>

            </div>

          </form>

        </div>
      </div>

    </div>
  );
};

export default CompanyInformation;
