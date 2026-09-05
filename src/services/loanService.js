import apiClient from '../api/apiClient';
import { ENDPOINTS } from '../api/endpoints';

export const loanService = {
  // Loan Accounts
  getLoanAccounts: async (search = '') => {
    const params = search ? { search } : {};
    const response = await apiClient.get(ENDPOINTS.LOAN_ACCOUNTS, { params });
    return response;
  },
  
  createLoanAccount: async (data) => {
    const response = await apiClient.post(ENDPOINTS.LOAN_ACCOUNTS, data);
    return response;
  },

  updateLoanAccount: async (id, data) => {
    const response = await apiClient.patch(`${ENDPOINTS.LOAN_ACCOUNTS}${id}/`, data);
    return response;
  },
  
  deleteLoanAccount: async (id) => {
    const response = await apiClient.delete(`${ENDPOINTS.LOAN_ACCOUNTS}${id}/`);
    return response;
  },

  // Loan Receives
  getLoanReceives: async () => {
    const response = await apiClient.get(ENDPOINTS.LOAN_RECEIVES);
    return response;
  },
  
  createLoanReceive: async (data) => {
    const response = await apiClient.post(ENDPOINTS.LOAN_RECEIVES, data);
    return response;
  },

  updateLoanReceive: async (id, data) => {
    const response = await apiClient.patch(`${ENDPOINTS.LOAN_RECEIVES}${id}/`, data);
    return response;
  },

  // Loan Payments
  getLoanPayments: async () => {
    const response = await apiClient.get(ENDPOINTS.LOAN_PAYMENTS);
    return response;
  },

  createLoanPayment: async (data) => {
    const response = await apiClient.post(ENDPOINTS.LOAN_PAYMENTS, data);
    return response;
  },

  updateLoanPayment: async (id, data) => {
    const response = await apiClient.patch(`${ENDPOINTS.LOAN_PAYMENTS}${id}/`, data);
    return response;
  },

  // Loan Statement
  getLoanStatement: async (filters = {}) => {
    const params = {};
    if (filters.loan_account) params.loan_account = filters.loan_account;
    if (filters.from_date) params.from_date = filters.from_date;
    if (filters.to_date) params.to_date = filters.to_date;
    
    const response = await apiClient.get(ENDPOINTS.LOAN_STATEMENT, { params });
    return response;
  }
};
