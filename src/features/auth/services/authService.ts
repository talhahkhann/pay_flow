import {
  RegisterRequest,
  VerifyOtpRequest,
  LoginRequest,
} from "../types/auth.type";

const API_BASE =
  "https://pay-flow-backend-nlwx.onrender.com/api/Auth";

export const registerUser = async (data: RegisterRequest) => {
  const response = await fetch(`${API_BASE}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Registration failed");
  }

  return response.json();
};

export const verifyOtp = async (data: VerifyOtpRequest) => {
  const response = await fetch(`https://pay-flow-backend-nlwx.onrender.com/api/verify/email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("OTP verification failed");
  }

  return response.json();
};

export const loginUser = async (data: LoginRequest) => {
  const response = await fetch(`${API_BASE}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json();
};
