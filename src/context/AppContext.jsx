import React, { createContext, useReducer, useEffect, useContext } from 'react';

const defaultTheme = {
  '--bg-app': '#f4f7fe',
  '--bg-sidebar': '#ffffff',
  '--sidebar-hover': '#f1f5f9',
  '--text-sidebar': '#64748b',
  '--card-border': '#e2e8f0',
  '--card-header-bg': '#f8fafc',
  '--bg-surface': '#ffffff',
  '--text-main': '#2b3674',
  '--input-bg': '#ffffff',
  '--label-color': '#334155',
  '--input-text': '#1e293b',
  '--table-header-bg': '#718096',
  '--table-header-text': '#ffffff',
  '--table-text': '#334155',
  '--table-border': '#e2e8f0',
  '--success': '#10b981',
  '--danger': '#ef4444',
  '--info': '#0ea5e9',
  '--warning': '#f59e0b',
  '--primary': '#3b82f6',
  '--secondary': '#64748b',
  '--dark': '#1e293b'
};

// Initial state loaded from localStorage or fallback to defaults
const loadInitialState = () => {
  const savedState = localStorage.getItem('rajdhane_app_state');
  if (savedState) {
    try {
      const parsed = JSON.parse(savedState);
      let theme = parsed.theme || defaultTheme;
      // Sanitize if polluted with circular references
      if (theme['--primary'] === 'var(--primary)' || String(theme['--primary']).includes('var(')) {
        theme = defaultTheme;
      }
      return { ...parsed, theme };
    } catch (e) {
      console.error("Failed to parse saved state", e);
    }
  }
  
  // Default demo data
  return {
    theme: defaultTheme,
    clients: [
      { id: 1, name: 'Sujon Mia', phone: '01711223344', address: 'Dhaka', company: 'Sujon Traders', group: 'Wholesale', due: 5000 },
      { id: 2, name: 'Rahim Ali', phone: '01822334455', address: 'Gazipur', company: 'Rahim Garments', group: 'Retail', due: 12000 },
      { id: 3, name: 'Tarek Rahman', phone: '01911223344', address: 'Jhenaidah', company: 'Tarek Fashion', group: 'Wholesale', due: 0 },
      { id: 4, name: 'Jamal Uddin', phone: '01655667788', address: 'Khulna', company: 'Jamal Fabrics', group: 'Retail', due: 8500 },
      { id: 5, name: 'Kamrul Islam', phone: '01511223344', address: 'Rajshahi', company: 'Kamrul Styles', group: 'Wholesale', due: 15000 },
      { id: 6, name: 'Anisur Rahman', phone: '01799887766', address: 'Bogra', company: 'Anisur Apparels', group: 'Retail', due: 2500 }
    ],
    clientGroups: [
      { id: 1, name: 'WHOLESALE', createdAt: '10 Jan 2025' },
      { id: 2, name: 'RETAIL', createdAt: '15 Feb 2025' },
      { id: 3, name: 'REGULAR', createdAt: '20 Mar 2025' }
    ],
    suppliers: [
      { id: 1, name: 'ABC Textiles', phone: '01933445566', address: 'Narayanganj', company: 'ABC Textiles Ltd.', group: 'Local', due: 50000, bankInfo: 'Bank: DBBL\nAc: 123456789' },
      { id: 2, name: 'XYZ Fabrics', phone: '01711223355', address: 'Dhaka', company: 'XYZ Fabrics Inc.', group: 'International', due: 120000, bankInfo: 'Bank: Islami Bank\nAc: 987654321' },
      { id: 3, name: 'Mega Garments', phone: '01811223366', address: 'Gazipur', company: 'Mega Garments Ltd.', group: 'Local', due: 0, bankInfo: 'Bank: Brac Bank\nAc: 1122334455' },
      { id: 4, name: 'Star Threads', phone: '01611223377', address: 'Savar', company: 'Star Threads Co.', group: 'Local', due: 45000, bankInfo: 'Bank: City Bank\nAc: 5566778899' },
      { id: 5, name: 'Global Zippers', phone: '01511223388', address: 'Chittagong', company: 'Global Zippers', group: 'International', due: 75000, bankInfo: 'Bank: EBL\nAc: 9988776655' }
    ],
    supplierGroups: [
      { id: 1, name: 'LOCAL FABRIC', date: '10 May 2024' },
      { id: 2, name: 'INTERNATIONAL', date: '12 Jun 2024' },
      { id: 3, name: 'ACCESSORIES', date: '15 Jul 2024' }
    ],
    loanClients: [
      { id: 1, name: 'Karim', phone: '01655667788', address: 'Mirpur', due: 0 },
    ],
    accounts: [
      { id: 1, name: 'Cash', type: 'Cash', balance: 150000 },
      { id: 2, name: 'DBBL', type: 'Bank', balance: 500000 },
    ],
    transactions: [],
    expenses: [],
    transfers: [],
  };
};

const initialState = loadInitialState();

export const AppContext = createContext();

const appReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CLIENT':
      return {
        ...state,
        clients: [...state.clients, { id: Date.now(), ...action.payload }]
      };
    case 'ADD_CLIENT_GROUP':
      return {
        ...state,
        clientGroups: [{ id: Date.now(), ...action.payload }, ...state.clientGroups]
      };
    case 'ADD_SUPPLIER_GROUP':
      return {
        ...state,
        supplierGroups: [{ id: Date.now(), ...action.payload }, ...state.supplierGroups]
      };
    case 'ADD_SUPPLIER':
      return {
        ...state,
        suppliers: [...state.suppliers, { id: Date.now(), ...action.payload }]
      };
    case 'ADD_LOAN_CLIENT':
      return {
        ...state,
        loanClients: [...state.loanClients, { id: Date.now(), ...action.payload }]
      };
    case 'ADD_ACCOUNT':
      return {
        ...state,
        accounts: [...state.accounts, { id: Date.now(), ...action.payload }]
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [...state.transactions, { id: Date.now(), ...action.payload }]
      };
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, { id: Date.now(), ...action.payload }]
      };
    case 'ADD_TRANSFER':
      return {
        ...state,
        transfers: [...state.transfers, { id: Date.now(), ...action.payload }]
      };
    case 'UPDATE_CLIENT_DUE':
      return {
        ...state,
        clients: state.clients.map(client => 
          client.id === action.payload.clientId 
            ? { ...client, due: client.due + action.payload.amount }
            : client
        )
      };
    case 'UPDATE_SUPPLIER_DUE':
      return {
        ...state,
        suppliers: state.suppliers.map(sup => 
          sup.id === action.payload.supplierId 
            ? { ...sup, due: sup.due + action.payload.amount }
            : sup
        )
      };
    case 'UPDATE_ACCOUNT_BALANCE':
      return {
        ...state,
        accounts: state.accounts.map(acc => 
          acc.id === action.payload.accountId 
            ? { ...acc, balance: acc.balance + action.payload.amount }
            : acc
        )
      };
    case 'UPDATE_THEME':
      return {
        ...state,
        theme: { ...state.theme, ...action.payload }
      };
    case 'RESET_THEME':
      return {
        ...state,
        theme: defaultTheme
      };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('rajdhane_app_state', JSON.stringify(state));
  }, [state]);

  // Inject CSS variables into :root
  useEffect(() => {
    const root = document.documentElement;
    if (state.theme) {
      Object.keys(state.theme).forEach(key => {
        root.style.setProperty(key, state.theme[key]);
      });
    }
  }, [state.theme]);

  // Helper actions
  const updateTheme = (themeUpdates) => dispatch({ type: 'UPDATE_THEME', payload: themeUpdates });
  const resetTheme = () => dispatch({ type: 'RESET_THEME' });
  const addClient = (client) => dispatch({ type: 'ADD_CLIENT', payload: client });
  const addClientGroup = (group) => dispatch({ type: 'ADD_CLIENT_GROUP', payload: group });
  const addSupplier = (supplier) => dispatch({ type: 'ADD_SUPPLIER', payload: supplier });
  const addSupplierGroup = (group) => dispatch({ type: 'ADD_SUPPLIER_GROUP', payload: group });
  const addLoanClient = (client) => dispatch({ type: 'ADD_LOAN_CLIENT', payload: client });
  const addAccount = (account) => dispatch({ type: 'ADD_ACCOUNT', payload: account });

  const recordReceive = (transaction) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: { ...transaction, type: 'Receive', date: new Date().toISOString() } });
    dispatch({ type: 'UPDATE_ACCOUNT_BALANCE', payload: { accountId: Number(transaction.accountId), amount: Number(transaction.amount) } });
    if (transaction.clientId) {
      dispatch({ type: 'UPDATE_CLIENT_DUE', payload: { clientId: Number(transaction.clientId), amount: -Number(transaction.amount) } });
    }
  };

  const recordSupplierPayment = (transaction) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: { ...transaction, type: 'Payment', date: new Date().toISOString() } });
    dispatch({ type: 'UPDATE_ACCOUNT_BALANCE', payload: { accountId: Number(transaction.accountId), amount: -Number(transaction.amount) } });
    if (transaction.supplierId) {
      dispatch({ type: 'UPDATE_SUPPLIER_DUE', payload: { supplierId: Number(transaction.supplierId), amount: -Number(transaction.amount) } });
    }
  };

  const addExpense = (expense) => {
    dispatch({ type: 'ADD_EXPENSE', payload: { ...expense, date: new Date().toISOString() } });
    dispatch({ type: 'UPDATE_ACCOUNT_BALANCE', payload: { accountId: Number(expense.accountId), amount: -Number(expense.amount) } });
  };

  const addTransfer = (transfer) => {
    dispatch({ type: 'ADD_TRANSFER', payload: { ...transfer, date: new Date().toISOString() } });
    dispatch({ type: 'UPDATE_ACCOUNT_BALANCE', payload: { accountId: Number(transfer.fromAccountId), amount: -Number(transfer.amount) } });
    dispatch({ type: 'UPDATE_ACCOUNT_BALANCE', payload: { accountId: Number(transfer.toAccountId), amount: Number(transfer.amount) } });
  };

  return (
    <AppContext.Provider value={{ 
      state, dispatch, 
      addClient, addClientGroup, addSupplier, addSupplierGroup, addLoanClient, addAccount, 
      recordReceive, recordSupplierPayment, addExpense, addTransfer,
      updateTheme, resetTheme
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
