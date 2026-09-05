import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShoppingBag, CreditCard, Receipt, CalendarClock, Scale } from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

const StatCard = ({ title, amount, type, icon }) => {
  return (
    <div className="stat-card">
      <div className={`icon-box ${type}`}>
        {icon}
      </div>
      <div className="stat-info">
        <div className="stat-label">{title}</div>
        <div className="stat-value">
          {amount} <span className="stat-currency">৳</span>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const { t } = useTranslation();

  const lineData = [
    { name: '9 August', sales: 15000, receive: 0, due: 0 },
    { name: '10 August', sales: 10000, receive: 0, due: 0 },
    { name: '11 August', sales: 12000, receive: 0, due: 0 },
    { name: '12 August', sales: 0, receive: 0, due: 0 },
    { name: '13 August', sales: 12500, receive: 0, due: 0 },
    { name: '14 August', sales: 0, receive: 0, due: 0 },
    { name: '15 August', sales: 14000, receive: 0, due: 0 },
    { name: '16 August', sales: 11000, receive: 0, due: 0 },
    { name: '17 August', sales: 10000, receive: 0, due: 0 },
    { name: '18 August', sales: 22000, receive: 0, due: 0 },
    { name: '19 August', sales: 0, receive: 0, due: 0 },
    { name: '20 August', sales: 16000, receive: 0, due: 0 },
    { name: '21 August', sales: 13000, receive: 0, due: 0 },
    { name: '22 August', sales: 10505, receive: 0, due: 0 },
  ];

  const pieData = [
    { name: t('dashboard.due'), value: 7917240 },
    { name: t('dashboard.sales'), value: 3000000 },
    { name: t('dashboard.receive'), value: 1000000 }
  ];
  
  const COLORS = ['#00e396', '#4318ff', '#ff4560'];

  return (
    <div className="dashboard-content">
      {/* Today Stats */}
      <div className="stats-grid">
        <StatCard 
          title={t('dashboard.today_sales')} 
          amount="10,505.00" 
          type="sales" 
          icon={<ShoppingBag />} 
        />
        <StatCard 
          title={t('dashboard.today_receive')} 
          amount="10,505.00" 
          type="receive" 
          icon={<CreditCard />} 
        />
        <StatCard 
          title={t('dashboard.today_expense')} 
          amount="0.00" 
          type="expense" 
          icon={<Receipt />} 
        />
      </div>

      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
        <StatCard 
          title={t('dashboard.today_due')} 
          amount="0.00" 
          type="expense" 
          icon={<CalendarClock />} 
        />
        <StatCard 
          title={t('dashboard.today_balance')} 
          amount="10,505.00" 
          type="sales" 
          icon={<Scale />} 
        />
      </div>

      {/* August Stats */}
      <div className="stats-grid">
        <StatCard 
          title={t('dashboard.august_sales')} 
          amount="216,432.00" 
          type="sales" 
          icon={<ShoppingBag />} 
        />
        <StatCard 
          title={t('dashboard.august_receive')} 
          amount="216,432.00" 
          type="receive" 
          icon={<CreditCard />} 
        />
        <StatCard 
          title={t('dashboard.august_expense')} 
          amount="0.00" 
          type="expense" 
          icon={<Receipt />} 
        />
      </div>

      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
        <StatCard 
          title={t('dashboard.august_due')} 
          amount="0.00" 
          type="expense" 
          icon={<CalendarClock />} 
        />
        <StatCard 
          title={t('dashboard.august_balance')} 
          amount="216,432.00" 
          type="sales" 
          icon={<Scale />} 
        />
      </div>

      {/* Charts */}
      <div className="charts-grid">
        <div className="chart-card">
          <div className="chart-header">
            <h3 className="chart-title">{t('dashboard.sales')} | {t('dashboard.receive')} | {t('dashboard.due')}</h3>
            <p className="chart-subtitle">{t('dashboard.weekly_analysis')}</p>
          </div>
          <div style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e5f2" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#a3aed1', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#a3aed1', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
                />
                <Line type="monotone" dataKey="sales" stroke="#00e396" strokeWidth={3} dot={{r: 4, fill: '#00e396', strokeWidth: 2, stroke: '#fff'}} />
                <Line type="monotone" dataKey="receive" stroke="#4318ff" strokeWidth={3} dot={{r: 4, fill: '#4318ff', strokeWidth: 2, stroke: '#fff'}} />
                <Line type="monotone" dataKey="due" stroke="#ff4560" strokeWidth={3} dot={{r: 4, fill: '#ff4560', strokeWidth: 2, stroke: '#fff'}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-card" style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="chart-header">
            <h3 className="chart-title">{t('dashboard.sales')} | {t('dashboard.receive')} | {t('dashboard.due')}</h3>
            <p className="chart-subtitle">{t('dashboard.total')}</p>
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div style={{ position: 'absolute', textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#00e396' }}>{t('dashboard.due')}</div>
              <div style={{ fontSize: '14px', color: '#a3aed1' }}>7,917,240</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fab">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </div>
    </div>
  );
};

export default Dashboard;
