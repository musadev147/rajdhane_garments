const fs = require('fs');
let buffer = fs.readFileSync('src/index.css');
let str = buffer.toString('utf8');
let badIndex = str.indexOf('\0'); 
if (badIndex === -1) badIndex = str.indexOf('/* Drawer Modals');
if (badIndex !== -1) {
  str = str.substring(0, badIndex);
}
str = str.trimEnd() + '\n\n';

const addedCSS = `/* Drawer Modals */
.drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  z-index: 10000;
  backdrop-filter: blur(2px);
}

.drawer-content {
  background: white;
  width: 600px;
  max-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-shadow: -5px 0 25px rgba(0,0,0,0.1);
  animation: slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 2px solid var(--primary);
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

/* Premium Global Loader */
.global-loader-overlay {
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
}

.loader-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background: white;
  padding: 32px 48px;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255,255,255,0.4);
}

.premium-spinner {
  position: relative;
  width: 60px;
  height: 60px;
}

.spinner-circle {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top-color: var(--primary);
  border-bottom-color: var(--secondary);
  animation: spin 1.5s linear infinite;
}

.spinner-circle-inner {
  position: absolute;
  inset: 8px;
  border-radius: 50%;
  border: 4px solid transparent;
  border-left-color: #f59e0b;
  border-right-color: #ef4444;
  animation: spin 1s linear infinite reverse;
}

.loader-text {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-main);
  letter-spacing: 1px;
  text-transform: uppercase;
  animation: pulse 2s infinite;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}`;

fs.writeFileSync('src/index.css', str + addedCSS, 'utf8');
console.log('Fixed index.css');
