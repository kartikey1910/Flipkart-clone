import { Link } from "react-router-dom";

import Header from "../components/Header";

const LoginPage = () => {
  return (
    <>
      <Header />
      <div className="loginPage">
        <div className="login-info">
          <h4 className="loginLeft">Login</h4>
          <p className="loginLeft">
            Get access to your Orders, Wishlist and Recommendations
          </p>
          <img
            src={"../images/fl.png"}
            alt="flipkart-login"
            className="img-login"
          />
        </div>
        <div className="login-cred">
          <label htmlFor="loginInput" className="loginHead">
            Enter Login Credentials
          </label>
          <br />
          <input
            type="text"
            id="loginInput"
            placeholder="Enter Email/Mobile Number"
          />
          <p id="statement">
            By continuing, you agree to Flipkart's <a href="#">Terms of Use</a>{" "}
            and <a href="#">Privacy Policy</a>.
          </p>
          <button
            className="otp"
            onClick={() => {
              alert(
                "Attention user !! Due to Technical Errors OTP Generation might get delayed"
              );
            }}
          >
            Request OTP
          </button>
          <div id="accreate">
            New to Flipkart?
            <Link to="/create-account"> Create an Account </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
