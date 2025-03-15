// Use the deployed backend URL directly to ensure it works
const API_URL = 'https://rose-and-relax-api.onrender.com';

// Helper function to handle API errors
const handleApiError = (error: any) => {
  console.error("API Error:", error);
  
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.error("Response error data:", error.response.data);
    throw new Error(error.response.data.detail || 'An error occurred');
  } else if (error.request) {
    // The request was made but no response was received
    console.error("No response received for request:", error.request);
    throw new Error('No response from server');
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error("Request setup error:", error.message);
    throw new Error('Error setting up request');
  }
};

export async function fetchApi(endpoint: string, options: RequestInit = {}) {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  
  const headers = {
    'Content-Type': 'application/json',
    'Origin': 'https://rose-and-relax-frontend.vercel.app',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  console.log(`Making API request to: ${API_URL}${endpoint}`);
  console.log("Request options:", { ...options, headers });

  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers,
      mode: 'cors',
    });

    console.log(`Response status: ${response.status}`);

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      console.error("API error response:", error);
      throw new Error(error.detail || `API request failed: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("API response data:", data);
    return data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
}

export const api = {
  // Auth endpoints
  login: async (username: string, password: string) => {
    console.log(`Attempting to login with username: ${username}`);
    
    try {
      // Use a simpler approach for login
      const formData = new URLSearchParams();
      formData.append('username', username);
      formData.append('password', password);
      
      console.log("Login request body:", formData.toString());
      
      const response = await fetch(`${API_URL}/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Origin': 'https://rose-and-relax-frontend.vercel.app',
        },
        body: formData.toString(),
        mode: 'cors',
      });
      
      console.log(`Login response status: ${response.status}`);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Login error response:", errorText);
        try {
          const errorJson = JSON.parse(errorText);
          throw new Error(errorJson.detail || 'Login failed');
        } catch (e) {
          throw new Error(`Login failed: ${response.statusText}`);
        }
      }
      
      const data = await response.json();
      console.log("Login response data:", data);
      return data;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  },

  signup: (data: { email: string; username: string; password: string }) => {
    console.log(`Attempting to signup with username: ${data.username}, email: ${data.email}`);
    return fetchApi('/users/', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  getProfile: () => {
    console.log("Fetching user profile");
    return fetchApi('/users/me');
  },

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