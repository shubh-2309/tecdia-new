const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-backend-domain.com' 
  : 'http://localhost:5000';

class ApiService {
  static async makeRequest(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const defaultOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const config = {
      ...defaultOptions,
      ...options,
      headers: {
        ...defaultOptions.headers,
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Contact form submission
  static async submitContact(formData) {
    return this.makeRequest('/api/contact/submit', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }

  // Job application submission
  static async submitApplication(formData) {
    // For FormData, don't set Content-Type header (browser will set it with boundary)
    const url = `${API_BASE_URL}/api/application/submit`;
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error('API Service: Request failed:', error);
      throw error;
    }
  }

  // Health check
  static async healthCheck() {
    return this.makeRequest('/api/health');
  }

  // Application status
  static async getApplicationStatus(applicationId) {
    return this.makeRequest(`/api/application/status/${applicationId}`);
  }
}

export default ApiService; 