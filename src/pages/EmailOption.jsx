import { GoogleLogin } from "@react-oauth/google";
import { useNavigate, useOutletContext } from "react-router-dom";
import "../css/EmailSignup.css";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const EmailSignup = () => {
  const url = import.meta.env.REACT_APP_BACKEND_URL;
  const navigate = useNavigate();

  const {setUser} = useOutletContext();

   const handleGoogleSuccess = async (response) => {
    const decoded = jwtDecode(response.credential);
    try {
      const {data} = await axios.post(`${url}/api/users/signup`, {
        name: decoded.name,
        email: decoded.email,
        picture: decoded.picture,
        provider: "google",
      });
      setUser(data.user)
      localStorage.setItem('user',JSON.stringify(data.user));
      navigate("/feed");
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleError = () => console.error("Google sign-in failed");

  return (
    <div className="email-signup-container">
      <div className="signup-header">
        <button className="back-btn" onClick={()=>{navigate('/')}}>←</button>
        <h2>Login/Register</h2>
        <span className="help-icon">?</span>
      </div>

      <p className="subtitle">Ready to play and earn?</p>

      <div className="signup-box">
        {/* Styled Google Login */}
        <div className="google-btn-wrapper">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            width="100%"
          />
        </div>

        <div className="divider">
          <span>Or</span>
        </div>

        <button className="email-btn" onClick={() => navigate("/email-signup-form")}>
          <i className="fa fa-envelope"></i> EMAIL
        </button>

        <div className="terms">
          <input type="checkbox" id="agree" defaultChecked />
          <label htmlFor="agree">
            By registering, you agree to the{" "}
            <a href="#">Terms & Conditions</a> and{" "}
            <a href="#">Privacy Policy</a> of Task Planet. Please take a moment
            to review them.
          </label>
        </div>
      </div>
    </div>
  );
};

export default EmailSignup;
