import { GoogleLogin } from "@react-oauth/google";
import { useNavigate, useOutletContext } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import Carousel from "../components/carousel";
import "../css/signup.css";

const Signup = () => {
    const url = import.meta.env.REACT_APP_BACKEND_URL;
  const {setUser} = useOutletContext();
  const navigate = useNavigate();

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
    <div className="signup-page">
      {/* Top carousel */}
      <div className="carousel-section">
        <Carousel />
      </div>

      {/* Login Section */}
      <div className="login-box">
        <h3>Login with Task Planet</h3>
        <p>
          Login to earn points using various amazing and easy tools provided in
          the app and then use earned points for reward!!
        </p>

        <div className="google-btn">
          <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />
        </div>

        <p
          className="other-login"
          onClick={() => navigate("/email-signup")}
        >
          Other Login Method
        </p>

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

export default Signup;
