import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.scss';
import Logo from '../../assets/img/logo-black.png';
import Button from '../../components/common/button/button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    setError('');

    if (!acceptTerms) {
      setError('Please accept the terms and conditions.');
      return;
    }

    axios.post('http://localhost:3000/signup', { email, password, confirmPassword })
      .then((res) => {
        const { token } = res.data;
        localStorage.setItem('token', token);

        console.log('Signup successful. Token:', token);
        navigate('/signin');
      })
      .catch((err) => {
        console.log(err);
        if (err.response && err.response.data && err.response.data.message) {
          setError(err.response.data.message);
        } else {
          setError('An error occurred during signup.');
        }
      });
  };

  return (
    <div className="signup-page flex-col section-container">
      <div className="flex-row section gap-xl flex-wrap">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="signup-form-container max-wdth flex-col align-left gap-sm">
          <div className="title flex-col align-left gap-xs uppercase">
            <h3 className="h3">signup</h3>
          </div>
          <form onSubmit={handleSignup} className="flex-col max-wdth align-left gap-sm">
            <input className="body max-wdth auth-input" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="body max-wdth auth-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input className="body max-wdth auth-input" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <div className="commitment flex-row gap-xs body">
              <input
                className="body"
                type="checkbox"
                checked={acceptTerms}
                onChange={() => setAcceptTerms(!acceptTerms)}
              />
              <p>“I accept the terms and conditions.”</p>
            </div>
            <Button text="SIGN UP" btnStyle="auth-btn" customBtnStyle="max-wdth" frameStyle='max-wdth' type="submit"></Button>
            {error && <div className="error-message body-err">{error}</div>}
            <div className="signin-opts flex-col body max-wdth gap-2xs">
              <p>You have an account? <Link to="/signin">Sign in</Link></p>
              <hr className='hr-divider'/>
              <p>or</p>
            </div>
            <div className="flex-row gap-sm max-wdth">
              <Button text="GOOGLE" btnStyle="auth-btn" customBtnStyle="max-wdth" frameStyle='max-wdth' icon="bi bi-google" ></Button>
              <Button text="FACEBOOK" btnStyle="auth-btn" customBtnStyle="max-wdth" frameStyle='max-wdth' icon="bi bi-facebook" ></Button>
            </div>
            <div className="body-sml">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita quo ut incidunt facilis laboriosam delectus, veritatis
                provident sint iusto, mollitia obcaecati impedit eaque. Facilis
                voluptatibus at sed! Tempore, maxime inventore.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
