import axios from 'axios';
import { TokenService } from './TokenService'; // ✅ NEW: import token handler

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const AuthService = {
  async login(email: string, password: string) {
    const res = await axios.post(`${BASE_URL}/login`, { email, password });

    const data = res.data;

    // ✅ DEBUG (optional but useful)
    console.log("LOGIN RESPONSE:", data);

    // ✅ HANDLE BOTH POSSIBLE BACKEND RESPONSES

    // Case 1: Object response
    if (data.access_token) {
      TokenService.setAccessToken(data.access_token);
    }

    // Case 2: Array response (your backend might return tuple)
    else if (Array.isArray(data)) {
      TokenService.setAccessToken(data[0]); // access_token at index 0
    }

    else {
      console.warn("Unexpected login response format");
    }

    return data;
  },

  async register(userData: { email: string; password: string; name: string }) {
    const res = await axios.post(`${BASE_URL}/register`, userData);
    return res.data;
  },

  async verifyOtp(email: string, otp: string) {
    const res = await axios.post(`${BASE_URL}/verify-otp`, null, {
      params: { email, otp }
    });
    return res.data;
  },

  async resendOtp(email: string) {
    const res = await axios.post(`${BASE_URL}/resend-otp`, null, {
      params: { email }
    });
    return res.data;
  }
};
