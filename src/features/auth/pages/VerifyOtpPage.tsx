import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyOtp } from "../services/authService";

const VerifyOtpPage = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const email = (location.state as any)?.email;

  const handleVerify = async () => {
    try {
      await verifyOtp({ email, otp });
      alert("OTP Verified!");
      navigate("/login");
    } catch {
      alert("Invalid OTP");
    }
  };

  return (
    <div>
      <h2>Verify OTP</h2>
      <p>OTP sent to: {email}</p>

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <button onClick={handleVerify}>Verify</button>
    </div>
  );
};

export default VerifyOtpPage;
