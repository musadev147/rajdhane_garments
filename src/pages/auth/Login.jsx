import React, { useState } from 'react';
import { Mail, Lock, LogIn, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [focusedInput, setFocusedInput] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy login logic, navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #4f46e5 100%)',
      fontFamily: "'Inter', sans-serif",
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Abstract Background Shapes */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '-10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        zIndex: 0,
        animation: 'float 6s ease-in-out infinite'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        right: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(14,165,233,0.4) 0%, rgba(255,255,255,0) 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        zIndex: 0,
        animation: 'float 8s ease-in-out infinite reverse'
      }}></div>

      {/* Login Card */}
      <div style={{
        width: '100%',
        maxWidth: '440px',
        padding: '40px',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderRadius: '24px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255,255,255,0.3) inset',
        zIndex: 1,
        transform: 'translateY(0)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ 
            width: '64px', 
            height: '64px', 
            background: 'linear-gradient(135deg, #0ea5e9, #4f46e5)', 
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px auto',
            boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.5)',
            transform: 'rotate(-5deg)',
          }}>
            <LogIn size={32} color="white" style={{ transform: 'rotate(5deg)' }} />
          </div>
          <h1 style={{ 
            fontSize: '32px', 
            fontWeight: '800', 
            color: '#1e293b', 
            margin: '0 0 8px 0',
            letterSpacing: '-0.5px'
          }}>
            Welcome Back
          </h1>
          <p style={{ color: '#64748b', fontSize: '15px', margin: 0 }}>
            Enter your credentials to access your account.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Email Input */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: focusedInput === 'email' ? '#4f46e5' : '#94a3b8',
              transition: 'color 0.3s ease'
            }}>
              <Mail size={20} />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocusedInput('email')}
              onBlur={() => setFocusedInput(null)}
              placeholder="Email Address"
              required
              style={{
                width: '100%',
                padding: '16px 16px 16px 48px',
                fontSize: '15px',
                color: '#1e293b',
                background: focusedInput === 'email' ? '#ffffff' : '#f8fafc',
                border: `2px solid ${focusedInput === 'email' ? '#4f46e5' : '#e2e8f0'}`,
                borderRadius: '12px',
                outline: 'none',
                transition: 'all 0.3s ease',
                boxShadow: focusedInput === 'email' ? '0 0 0 4px rgba(79, 70, 229, 0.1)' : 'none'
              }}
            />
          </div>

          {/* Password Input */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: focusedInput === 'password' ? '#4f46e5' : '#94a3b8',
              transition: 'color 0.3s ease'
            }}>
              <Lock size={20} />
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setFocusedInput('password')}
              onBlur={() => setFocusedInput(null)}
              placeholder="Password"
              required
              style={{
                width: '100%',
                padding: '16px 16px 16px 48px',
                fontSize: '15px',
                color: '#1e293b',
                background: focusedInput === 'password' ? '#ffffff' : '#f8fafc',
                border: `2px solid ${focusedInput === 'password' ? '#4f46e5' : '#e2e8f0'}`,
                borderRadius: '12px',
                outline: 'none',
                transition: 'all 0.3s ease',
                boxShadow: focusedInput === 'password' ? '0 0 0 4px rgba(79, 70, 229, 0.1)' : 'none'
              }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: '#475569' }}>
              <input type="checkbox" style={{ accentColor: '#4f46e5', width: '16px', height: '16px', cursor: 'pointer' }} />
              Remember me
            </label>
            <a href="#" style={{ color: '#4f46e5', textDecoration: 'none', fontWeight: '600', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#3730a3'} onMouseOut={(e) => e.target.style.color = '#4f46e5'}>
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '16px',
              marginTop: '8px',
              background: 'linear-gradient(135deg, #4f46e5, #3b82f6)',
              color: 'white',
              fontSize: '16px',
              fontWeight: '600',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 20px -5px rgba(79, 70, 229, 0.4)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 15px 25px -5px rgba(79, 70, 229, 0.5)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 20px -5px rgba(79, 70, 229, 0.4)';
            }}
          >
            Sign In <ArrowRight size={20} />
          </button>
        </form>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
      `}</style>
    </div>
  );
};

export default Login;
