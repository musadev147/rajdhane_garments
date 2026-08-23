import React from 'react';
import { User, Briefcase, MapPin, Phone, Mail, Hash, Users, Plus, Settings, List, PlaySquare } from 'lucide-react';

const ClientCreate = () => {
  return (
    <div className="dashboard-content">
      <div className="chart-card">
        <div className="card-header">
          <h2 className="card-title">CLIENT CREATE</h2>
          <div className="card-actions">
            <button className="btn btn-outline" style={{ padding: '6px 12px', background: '#64748b', color: 'white' }}>
              <Settings size={14} />
            </button>
            <button className="btn btn-outline" style={{ padding: '6px 12px', background: '#64748b', color: 'white' }}>
              <List size={14} /> Client List
            </button>
            <button className="btn btn-outline" style={{ padding: '6px 12px', background: '#64748b', color: 'white' }}>
              <Users size={14} /> Client Group
            </button>
            <button className="btn btn-outline" style={{ padding: '6px 12px', background: 'white', color: 'red', border: '1px solid #e2e8f0' }}>
              <PlaySquare size={14} /> YouTube
            </button>
          </div>
        </div>

        <form>
          <div className="form-grid">
            <div className="form-group">
              <div className="form-input">
                <User size={18} className="input-icon" />
                <input type="text" placeholder="Client Name" />
              </div>
            </div>
            
            <div className="form-group">
              <div className="form-input">
                <User size={18} className="input-icon" />
                <input type="text" placeholder="Father's Name" />
              </div>
            </div>

            <div className="form-group">
              <div className="form-input">
                <Briefcase size={18} className="input-icon" />
                <input type="text" placeholder="Company Name" />
              </div>
            </div>

            <div className="form-group">
              <div className="form-input">
                <MapPin size={18} className="input-icon" />
                <input type="text" placeholder="Address" />
              </div>
            </div>

            <div className="form-group">
              <div className="form-input">
                <Phone size={18} className="input-icon" />
                <input type="text" placeholder="Phone Number" />
              </div>
            </div>

            <div className="form-group">
              <div className="form-input">
                <Phone size={18} className="input-icon" />
                <input type="text" placeholder="Phone Optional" />
              </div>
            </div>

            <div className="form-group">
              <div className="form-input">
                <Hash size={18} className="input-icon" />
                <input type="text" placeholder="Previous Due" />
              </div>
            </div>

            <div className="form-group">
              <div className="form-input">
                <Mail size={18} className="input-icon" />
                <input type="email" placeholder="E-mail" />
              </div>
            </div>

            <div className="form-group">
              <div className="form-input">
                <Users size={18} className="input-icon" />
                <input type="text" placeholder="Reference" />
              </div>
            </div>

            <div className="form-group" style={{ gridColumn: 'span 3' }}>
              <div className="input-group" style={{ width: '33.33%' }}>
                <div className="form-input">
                  <select>
                    <option value="">Select client group</option>
                  </select>
                </div>
                <button type="button" className="btn-append">
                  <Plus size={20} />
                </button>
              </div>
            </div>
          </div>

          <button type="button" className="btn btn-success">
            Client Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClientCreate;
