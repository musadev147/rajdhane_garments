import apiClient from '../api/apiClient';
import { ENDPOINTS } from '../api/endpoints';

// This is an example service. 
// You can create similar services for Users, Products, Orders, etc.

export const exampleService = {
  // Example GET request
  getProducts: async () => {
    try {
      const response = await apiClient.get(ENDPOINTS.GET_PRODUCTS);
      return response; // Note: apiClient interceptor already returns response.data
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  // Example POST request
  createProduct: async (productData) => {
    try {
      const response = await apiClient.post(ENDPOINTS.CREATE_PRODUCT, productData);
      return response;
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  },

  // Example with dynamic URL parameter
  getProductDetails: async (id) => {
    try {
      const response = await apiClient.get(ENDPOINTS.GET_PRODUCT_DETAILS(id));
      return response;
    } catch (error) {
      console.error('Error fetching product details:', error);
      throw error;
    }
  }
};
