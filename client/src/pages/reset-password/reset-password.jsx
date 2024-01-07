import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Logo from '../../assets/img/logo-black.png';
import Button from '../../components/common/button/button';
import './reset-password.scss';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setUserEmail(location.state.email);
    }
  }, [location.state]);

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      console.error('Passwords do not match');
      toast.error('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/resetpassword', {
        userEmail,
        newPassword,
        confirmPassword,
      });

      if (response.data && response.data.message === 'Password updated successfully') {
        toast.success('Password updated successfully');
        navigate('/signin');
      } else {
        console.error('Password update failed');
        toast.error('Error updating password');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error updating password');
    }
  };

  return (
    <div className="reset-password flex-col section-container">
      <div className="flex-row section gap-xl flex-wrap">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="reset-password-container max-wdth flex-col align-left gap-sm">
          <div className="title flex-col align-left gap-xs">
            <h3 className="h4">PASSWORD RESET</h3>
            <p className="body">Enter your new password for your Shine-Aura account</p>
          </div>
          <form onSubmit={handlePasswordChange} className="flex-col max-wdth align-left gap-sm">
        <input
          className="body max-wdth auth-input"
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          className="body max-wdth auth-input"
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          text="Change my password"
          btnStyle="auth-btn"
          customBtnStyle="max-wdth"
          frameStyle="max-wdth"
          type="submit"
        ></Button>
      </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
