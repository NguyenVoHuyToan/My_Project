import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./signin.scss";
import Logo from "../../assets/img/logo-black.png";
import Button from "../../components/common/button/button";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/authProvider";





const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = useAuth();

  // useEffect(() => {
  //   const savedEmail = localStorage.getItem("rememberedEmail");
  //   if (savedEmail) {
  //     setEmail(savedEmail);
  //     setRememberMe(true);
  //   }
  // }, []);
  // const googleApi=oauthUrl();
  // console.log(googleApi);
  function oauthUrl() {
    const url = "https://accounts.google.com/o/oauth2/v2/auth";
    const query = {
      client_id:
        "145235191844-f43anvogvcut7gab7p1etehf0idjcqs5.apps.googleusercontent.com",
      redirect_uri: "http://localhost:3000/user/oauth",
      response_type: "code",
      scope: [
        "https://www.googleapis.com/auth/userinfo.email",
       "https://www.googleapis.com/auth/userinfo.profile",
      ].join(" "),
      prompt: "consent",
    };
    const queryString = new URLSearchParams(query).toString();
    return `${url}?${queryString}`;
  }
  const googleApi=oauthUrl();
 const authGoogle=()=>{

    window.location.href=googleApi;
 }
 const [access_token]=useSearchParams();
 const data=access_token.get("accessToken");
 
  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // const response = await axios.post("http://localhost:3000/user/login", {
      //   email,
      //   password,
      // });
      
      
      if (data) {
        localStorage.setItem("token", data);
        signIn(email);

        if (rememberMe) {
          localStorage.setItem("rememberedEmail", email);
        } else {
          localStorage.removeItem("rememberedEmail");
        }

        navigate("/");
      }
    
    } catch (err) {
      console.log(err);
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("An error occurred during signin.");
      }
    } finally {
      setLoading(false);
    }
  };
 
  return (
    <div className="section-container flex-col signin-page">
      <div className="flex-row section gap-xl flex-wrap">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="signin-form-container max-wdth flex-col align-left gap-sm">
          <div className="title flex-col align-left gap-xs uppercase">
            <h3 className="h3">sign in</h3>
          </div>
          <form
            onSubmit={handleSignIn}
            className="flex-col max-wdth align-left gap-sm"
          >
            <input
              className="body auth-input max-wdth"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="body auth-input max-wdth"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="additional-function flex-row body-sml flex-center-align max-wdth">
              <div className="remember-user flex-row gap-xs body">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <p>Remember me</p>
              </div>
              <div className="forgot-pw body">
                <Link to="/forgot-password">Forgot passwords?</Link>
              </div>
            </div>
            <Button
              type="submit"
              text={loading ? "Signing In..." : "SIGN IN"}
              btnStyle="auth-btn"
              frameStyle="max-wdth"
              customBtnStyle="max-wdth"
              disabled={loading}
            ></Button>
            {error && <div className="error-message body-err">{error}</div>}
            <div className="signup-opts flex-col max-wdth body">
              <signup-sub-text>
                You have an account?
                <Link to="/signup"> Sign up</Link>
              </signup-sub-text>
              <hr className="margin-hr-5-per" />
              <signup-sub-text>or</signup-sub-text>
            </div>
            <div className="flex-row gap-sm max-wdth">
              <Button
                text="GOOGLE"
                btnStyle="auth-btn"
                icon="bi bi-google"
                frameStyle="max-wdth"
                customBtnStyle="max-wdth"
                onClick={()=>authGoogle()}
              ></Button>
              
              <Button
                text="FACEBOOK"
                btnStyle="auth-btn"
                icon="bi bi-facebook"
                frameStyle="max-wdth"
                customBtnStyle="max-wdth"
              ></Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
