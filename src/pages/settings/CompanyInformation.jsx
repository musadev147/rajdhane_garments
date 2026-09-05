import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Building, MapPin, Mail, DollarSign, FileText, 
  MessageSquare, User, Phone, Map, ShoppingCart
} from 'lucide-react';
import PrintHeader from '../../components/PrintHeader';

const CompanyInformation = () => {
  const { t } = useTranslation();

  const [rightLogoPreview, setRightLogoPreview] = useState(null);
  const [logo1Preview, setLogo1Preview] = useState(null);
  const [logo2Preview, setLogo2Preview] = useState(null);
  const [logo3Preview, setLogo3Preview] = useState(null);

  const handleFileChange = (e, setPreview) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview({ url, name: file.name });
    }
  };

  const InputField = ({ icon: Icon, label, defaultValue, type = "text", placeholder = "" }) => (
    <div style={{ position: 'relative', marginTop: '12px' }}>
      <label style={{ 
        position: 'absolute', 
        top: '-12px', 
        left: '12px', 
        background: '#0ea5e9', 
        color: 'white', 
        padding: '3px 8px', 
        borderRadius: '4px', 
        fontSize: '10px', 
        fontWeight: 'bold', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '4px',
        zIndex: 1
      }}>
        <Icon size={10} color="white" /> {label}
      </label>
      {type === 'email' ? (
        <div style={{ 
          padding: '16px 16px 12px 16px', 
          border: '1px solid #cbd5e1', 
          borderRadius: '4px', 
          width: '100%',
          background: 'white',
          display: 'flex',
          gap: '4px',
          overflow: 'hidden'
        }}>
          {Array(10).fill(0).map((_, i) => (
            <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '2px', background: '#dcfce7', color: '#16a34a', padding: '2px 6px', borderRadius: '4px', fontSize: '9px', fontWeight: 'bold' }}>
              <Mail size={10} /> TEMP MAIL
            </div>
          ))}
        </div>
      ) : (
        <input 
          type={type} 
          defaultValue={defaultValue} 
          placeholder={placeholder}
          style={{ 
            padding: '16px 16px 12px 16px', 
            border: '1px solid #cbd5e1', 
            borderRadius: '4px', 
            outline: 'none', 
            width: '100%',
            fontSize: '13px',
            color: 'var(--text-main)',
            background: 'white'
          }} 
        />
      )}
    </div>
  );

  return (
    <div className="dashboard-content" style={{ paddingBottom: '100px', background: '#ede9fe' }}>
      <PrintHeader />
      
      <div style={{ background: 'white', borderRadius: '4px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', overflow: 'hidden', border: '2px solid #22c55e' }}>
        <div style={{ padding: '8px 24px', background: 'rgba(34, 197, 94, 0.2)', borderBottom: '1px solid #22c55e' }}>
          <h2 style={{ fontSize: '15px', fontWeight: 'bold', margin: '0', color: '#1f2937' }}>Company Information</h2>
        </div>

        <div style={{ padding: '24px' }}>
          <form style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <InputField icon={Building} label="Company Name" defaultValue="রাজধানী গার্মেন্টস" />
              <InputField icon={Building} label="Company Type" defaultValue="Cloth Store" />
              <InputField icon={MapPin} label="Present Address" defaultValue="নেহা শপিংমল এর দ্বিতীয় তলা, কালিগঞ্জ, ঝিনাইদহ" />
              <InputField icon={Mail} label="Email" type="email" />
              <InputField icon={Building} label="City" defaultValue="Jhenaidah" />
              <InputField icon={MapPin} label="Zip Code" defaultValue="9000" />
              <InputField icon={DollarSign} label="Currency Symbol" defaultValue="৳" />
              <InputField icon={FileText} label="Invoice Footer" defaultValue="Invoice Footer" />
              <InputField icon={MessageSquare} label="SMS Api Sender" defaultValue="SMS Sender id : smsapibd.com" />
              
              <div style={{ position: 'relative', marginTop: '12px' }}>
                <input 
                  type="text" 
                  defaultValue="Active" 
                  style={{ 
                    padding: '16px 16px 12px 16px', 
                    border: '1px solid #cbd5e1', 
                    borderRadius: '4px', 
                    outline: 'none', 
                    width: '100%',
                    fontSize: '13px',
                    color: 'var(--text-main)',
                    background: 'white'
                  }} 
                />
              </div>
            </div>

            {/* Right Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <InputField icon={User} label="Shortname" defaultValue="RAJDHANI" />
              
              <div style={{ position: 'relative', marginTop: '12px' }}>
                <label style={{ position: 'absolute', top: '-12px', left: '12px', background: '#0284c7', color: 'white', padding: '3px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px', zIndex: 1 }}>
                  <MapPin size={10} color="white" /> Bangladesh
                </label>
                <input type="text" defaultValue="Bangladesh" style={{ padding: '16px 16px 12px 16px', border: '1px solid #cbd5e1', borderRadius: '4px', outline: 'none', width: '100%', fontSize: '13px', background: 'white' }} />
              </div>

              <InputField icon={MapPin} label="Address" defaultValue="নেহা শপিংমল এর দ্বিতীয় তলা, কালিগঞ্জ, ঝিনাইদহ" />
              <InputField icon={Phone} label="Phone Number" defaultValue="01716912350, 01727902498" />
              <InputField icon={Map} label="State" defaultValue="Bangladesh" />
              <InputField icon={ShoppingCart} label="Task Waring" defaultValue="10" />
              <InputField icon={FileText} label="Invoice Greetings" defaultValue="বিসমিল্লাহির রাহমানির রাহিম" />
              <InputField icon={MessageSquare} label="SMS Api Code" defaultValue="SMS Api Code: smsapibd.com" />
              
              <div style={{ position: 'relative', marginTop: '12px' }}>
                <input type="text" defaultValue="smsapibd.com" style={{ padding: '16px 16px 12px 16px', border: '1px solid #cbd5e1', borderRadius: '4px', outline: 'none', width: '100%', fontSize: '13px', background: 'white' }} />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #0ea5e9', borderRadius: '4px', overflow: 'hidden', marginTop: '12px', maxWidth: '300px' }}>
                <label style={{ background: '#0ea5e9', color: 'white', padding: '8px 16px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer', margin: 0, whiteSpace: 'nowrap' }}>
                  Choose a file
                  <input type="file" style={{ display: 'none' }} accept="image/*" onChange={(e) => handleFileChange(e, setRightLogoPreview)} />
                </label>
                <span style={{ padding: '8px 16px', fontSize: '12px', color: '#64748b', flex: 1, background: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {rightLogoPreview ? rightLogoPreview.name : 'No file chosen'}
                </span>
              </div>
            </div>
          </form>

          {/* Bottom Logos Section */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '40px' }}>
            {/* Logo 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #0ea5e9', borderRadius: '4px', overflow: 'hidden' }}>
                <label style={{ background: '#0ea5e9', color: 'white', padding: '6px 12px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', margin: 0, whiteSpace: 'nowrap' }}>
                  Choose a file
                  <input type="file" style={{ display: 'none' }} accept="image/*" onChange={(e) => handleFileChange(e, setLogo1Preview)} />
                </label>
                <span style={{ padding: '6px 12px', fontSize: '11px', color: '#64748b', flex: 1, background: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {logo1Preview ? logo1Preview.name : 'No file chosen'}
                </span>
              </div>
              <div style={{ height: '140px', border: '1px solid #e2e8f0', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white', overflow: 'hidden' }}>
                {logo1Preview ? (
                  <img src={logo1Preview.url} alt="Logo 1 Preview" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', padding: '8px' }} />
                ) : (
                  <div style={{ textAlign: 'center' }}>
                    <h2 style={{ fontFamily: 'cursive', margin: 0, fontSize: '32px', color: 'black' }}>Rajdhani</h2>
                    <h3 style={{ fontFamily: 'cursive', margin: '-8px 0 0 40px', fontSize: '20px', color: 'black' }}>Garments</h3>
                  </div>
                )}
              </div>
              <button style={{ background: 'black', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', fontSize: '10px', alignSelf: 'flex-start', cursor: 'pointer' }}>Update Company</button>
            </div>
            
            {/* Logo 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #0ea5e9', borderRadius: '4px', overflow: 'hidden' }}>
                <label style={{ background: '#0ea5e9', color: 'white', padding: '6px 12px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', margin: 0, whiteSpace: 'nowrap' }}>
                  Choose a file
                  <input type="file" style={{ display: 'none' }} accept="image/*" onChange={(e) => handleFileChange(e, setLogo2Preview)} />
                </label>
                <span style={{ padding: '6px 12px', fontSize: '11px', color: '#64748b', flex: 1, background: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {logo2Preview ? logo2Preview.name : 'No file chosen'}
                </span>
              </div>
              <div style={{ height: '140px', border: '1px solid #e2e8f0', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white', overflow: 'hidden' }}>
                {logo2Preview ? (
                  <img src={logo2Preview.url} alt="Logo 2 Preview" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', padding: '8px' }} />
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px dashed black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <ShoppingCart size={20} />
                    </div>
                    <div>
                      <h2 style={{ margin: 0, fontSize: '24px', fontWeight: '900', color: 'black' }}>রাজধানী <span style={{ fontWeight: 'normal' }}>সুপার শপ</span></h2>
                      <p style={{ margin: 0, fontSize: '9px', fontWeight: 'bold', color: 'black' }}>নেহা শপিং মল (২য় তলা), আঙ্গার মোড়, কালীগঞ্জ, ঝিনাইদহ।</p>
                      <p style={{ margin: 0, fontSize: '9px', fontWeight: 'bold', color: 'black' }}>০১৯৭১-৬৯২১৫০, ০১৭২৭-৯০২৪৯৮</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Logo 3 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #0ea5e9', borderRadius: '4px', overflow: 'hidden' }}>
                <label style={{ background: '#0ea5e9', color: 'white', padding: '6px 12px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', margin: 0, whiteSpace: 'nowrap' }}>
                  Choose a file
                  <input type="file" style={{ display: 'none' }} accept="image/*" onChange={(e) => handleFileChange(e, setLogo3Preview)} />
                </label>
                <span style={{ padding: '6px 12px', fontSize: '11px', color: '#64748b', flex: 1, background: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {logo3Preview ? logo3Preview.name : 'No file chosen'}
                </span>
              </div>
              <div style={{ height: '140px', border: '1px solid #e2e8f0', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white', overflow: 'hidden' }}>
                {logo3Preview ? (
                  <img src={logo3Preview.url} alt="Logo 3 Preview" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', padding: '8px' }} />
                ) : (
                  <div style={{ textAlign: 'center' }}>
                    <h2 style={{ fontFamily: 'cursive', margin: 0, fontSize: '32px', color: 'black' }}>Rajdhani</h2>
                    <h3 style={{ fontFamily: 'cursive', margin: '-8px 0 0 40px', fontSize: '20px', color: 'black' }}>Super Shop</h3>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CompanyInformation;
