import { Link } from "react-router-dom";
import "../CreA.css";
import Header from "../components/Header";
const CreateAccount = () => {
  return (
    <>
      <Header />
      <div className="form-container">
        <div className="form-content">
          <div className="form-left">
            <h2>Looks like you're new here!</h2>
            <p>Sign up with your mobile number to get started</p>
          </div>
          <div className="form-right">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="Enter Full Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  placeholder="Enter Mobile Number"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <div className="form-group">
                <button
                  onClick={() => {
                    alert("Try entering a Strong Password");
                  }}
                >
                  Sign Up
                </button>
              </div>
              <div className="form-footer">
                Already have an account ? <Link to="/login-page"> Login </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateAccount;
