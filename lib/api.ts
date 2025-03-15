const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// Helper function to handle API errors
const handleApiError = (error: any) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    throw new Error(error.response.data.detail || 'An error occurred');
  } else if (error.request) {
    // The request was made but no response was received
    throw new Error('No response from server');
  } else {
    // Something happened in setting up the request that triggered an Error
    throw new Error('Error setting up request');
  }
};

export async function fetchApi(endpoint: string, options: RequestInit = {}) {
  const token = localStorage.getItem('token');
  
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers,
      credentials: 'include',
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.detail || `API request failed: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    handleApiError(error);
    throw error;
  }
}

export const api = {
  // Auth endpoints
  login: (username: string, password: string) =>
    fetchApi('/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
    }),

  signup: (data: { email: string; username: string; password: string }) =>
    fetchApi('/users/', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  getProfile: () => fetchApi('/users/me'),

  // Products endpoints
  getProducts: (params?: { skip?: number; limit?: number; category?: string }) => {
    const searchParams = new URLSearchParams();
    if (params?.skip) searchParams.append('skip', params.skip.toString());
    if (params?.limit) searchParams.append('limit', params.limit.toString());
    if (params?.category) searchParams.append('category', params.category);
    
    return fetchApi(`/products/?${searchParams.toString()}`);
  },

  getProduct: (id: string) => fetchApi(`/products/${id}`),

  // Orders endpoints
  createOrder: (data: any) =>
    fetchApi('/orders/', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  getOrders: () => fetchApi('/orders/'),

  // Favorites endpoints
  getFavorites: () => fetchApi('/favorites/'),

  addFavorite: (productId: string) =>
    fetchApi('/favorites/', {
      method: 'POST',
      body: JSON.stringify({ product_id: productId }),
    }),

  removeFavorite: (favoriteId: string) =>
    fetchApi(`/favorites/${favoriteId}`, {
      method: 'DELETE',
    }),
}; 