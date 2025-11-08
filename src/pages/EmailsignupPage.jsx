import React, { useState } from "react";
import axios from "axios";
import "../css/EmailsignupPage.css";
import { useOutletContext, useNavigate } from "react-router-dom";

const EmailsignupPage = () => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const { setUser } = useOutletContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);

  const sendOtp = async () => {
    const url = import.meta.env.VITE_BACKEND_URL;
    if (!email) return alert("Enter email");

    try {
      const { data } = await axios.post(`${url}/api/auth/send-otp`, { email });


      if (data.userExists) {
        if (data.passwordExists) {
          alert("Account exists. Enter your password to login.");
          setStep(4);
        } else {
          alert("This email is registered via Google. Please login with Google.");
        }
      } else {
        setStep(2);
      }
    } catch (err) {
      alert(err.response?.data?.error || "Something went wrong. Try again.");
    }
  };

  const verifyOtp = async () => {
    if (!otp) return alert("Enter OTP");
    try {
      await axios.post(`${url}/api/auth/verify-otp`, { email, otp });
      setStep(3);
    } catch {
      alert("Invalid OTP");
    }
  };

  const submitPassword = async () => {
    if (!password) return alert("Enter password");

    try {
      const { data: user } = await axios.post(
        `${url}/api/auth/set-password`,
        { email, password }
      );

      // ✅ Save user session
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/feed");
    } catch {
      alert("Error creating account");
    }
  };

  const loginWithPassword = async () => {
    if (!password) return alert("Enter password");

    try {
      const { data: user } = await axios.post(
        `${url}/api/auth/login`,
        { email, password }
      );

      // ✅ Save user session
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user.user.user));

      navigate("/feed");
    } catch {
      alert("Wrong password");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Email Signup</h2>

        {step === 1 && (
          <>
            <input
              type="email"
              className="signup-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="signup-btn" onClick={sendOtp}>Send OTP</button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              type="text"
              className="signup-input"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button className="signup-btn verify" onClick={verifyOtp}>Verify OTP</button>
          </>
        )}

        {step === 3 && (
          <>
            <input
              type="password"
              className="signup-input"
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="signup-btn complete" onClick={submitPassword}>Complete Signup</button>
          </>
        )}

        {step === 4 && (
          <>
            <input
              type="password"
              className="signup-input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="signup-btn login" onClick={loginWithPassword}>Login</button>
          </>
        )}
      </div>
    </div>
  );
};

export default EmailsignupPage;
