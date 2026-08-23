// This file holds all your API route endpoints.
// Keeping them here makes it easy to update endpoints in one place.

export const ENDPOINTS = {
  // Authentication
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  LOGOUT: '/auth/logout',
  
  // Users
  GET_USER_PROFILE: '/users/profile',
  UPDATE_USER: (id) => `/users/${id}`, // Example of dynamic route
  
  // Products (Example)
  GET_PRODUCTS: '/products',
  GET_PRODUCT_DETAILS: (id) => `/products/${id}`,
  CREATE_PRODUCT: '/products',
};
