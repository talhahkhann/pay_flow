export interface RegisterRequest {
  userName: string;
  email: string;
  FullName:string;
  password: string;
}

export interface VerifyOtpRequest {
  email: string;
  otp: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}
