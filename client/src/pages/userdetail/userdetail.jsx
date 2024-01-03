import React, { useEffect } from 'react';
import './userdetail.css';
import Button from '../../components/common/button/button';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import momo from '../../assets/img/user-detail/momo.png'
import vietcom from '../../assets/img/user-detail/vietcom.png';
import vietin from '../../assets/img/user-detail/vietin.png';

const UserDetail = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [user, setUser] = useState({});
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedFunction, setSelectedFunction] = useState('accountInformation');
  const [updating, setUpdating] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [retypeNewPassword, setRetypeNewPassword] = useState('');
  useEffect(() => {
    const authToken = localStorage.getItem('token');
    axios.get('http://localhost:3000/users', {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((response) => {
        console.log('User data:', response.data);
        const userData = response.data || {};
        setUser(userData);
        setEmail(userData.email || '');
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);


  const years = Array.from({ length: new Date().getFullYear() - 1959 }, (_, index) => 1960 + index);
  const handleDayChange = (e) => setSelectedDay(e.target.value);
  const handleMonthChange = (e) => setSelectedMonth(e.target.value);
  const handleYearChange = (e) => setSelectedYear(e.target.value);

  const handleFunctionChange = (functionName) => {
    setSelectedFunction(functionName);
  };
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'name-input':
        setFullName(value);
        break;
      case 'email-input':
        setEmail(value);
        break;
      case 'phone-input':
        setPhoneNumber(value);
        break;
      case 'gender-input':
        setGender(value);
        break;
      case 'day-input':
        setSelectedDay(value);
        break;
      case 'month-input':
        setSelectedMonth(value);
        break;
      case 'year-input':
        setSelectedYear(value);
        break;
      case 'cp-email-input':
        setEmail(value);
        break;
      case 'current-password-input':
        setCurrentPassword(value);
        break;
      case 'new-password-input':
        setNewPassword(value);
        break;
      case 'retype-new-password-input':
        setRetypeNewPassword(value);
        break;
      default:
        break;

    }
  };



  const handleUpdate = () => {
    setUpdating(true);

    const updatedData = {
      fullName,
      email,
      phoneNumber,
      gender,
      dateOfBirth: `${selectedYear}-${selectedMonth}-${selectedDay}`,
      // Add other fields as needed
    };

    const authToken = localStorage.getItem('token');
    const userId = user.userId;
    axios.put('http://localhost:3000/users', updatedData, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((response) => {
        console.log('User updated successfully:', response.data);
        toast.success('User updated successfully', {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((error) => {
        console.error('Error updating user:', error);
        toast.error('Error updating user', {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .finally(() => {
        setUpdating(false);
      });
  };
  const handleDeleteAccount = async () => {
    try {
      const authToken = localStorage.getItem('token');
      const response = await axios.delete('http://localhost:3000/users', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      console.log(response.data);
      toast.success('Account deleted successfully', {
        position: toast.POSITION.TOP_RIGHT,
      });

    } catch (error) {
      console.error('Error deleting account:', error);
      toast.error('Error deleting account', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };


  const handleUpdatePassword = () => {
    // Add validation logic here (e.g., check if passwords match)

    // Make an API request to update the password
    const updatedPass = {
      email,
      currentPassword,
      newPassword,
    };

    const authToken = localStorage.getItem('token');
    const userId = user.userId;
    axios.put('http://localhost:3000/users', updatedPass, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((response) => {
        console.log('Password updated successfully:', response.data);
        toast.success('Password updated successfully', {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((error) => {
        console.error('Error updating password:', error);
        toast.error('Error updating password', {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  return (

    <div className="userdetailpage-first">
      <div className="userdetail-container">
        <div className="top-container flex-col">
          <div className="avatar">
            <img src="" alt="" />
          </div>
          <Button icon='bi bi-camera' frameStyle='btt-ava'></Button>
          <h3 className='h3'>Hello {user.email && user.email.includes('@') ? user.email.split('@')[0] : ''}</h3>
        </div>
        <div className="bot-container">
          <div className="bot-left-container">
            <h4 className='h4 gap-3xl'>Setting</h4>
            <div className='list-button'>
              <div className="acc-option" onClick={() => handleFunctionChange('accountInformation')}>
                <Button text='ACCOUNT INFORMATION' textStyle='btn-text-lgt' btnStyle='underline-btn' iconL='bi bi-person setting-icon' />
              </div>
              <div className="pay-option" onClick={() => handleFunctionChange('paymentInformation')}>
                <Button text='PAYMENT INFORMATION' textStyle='btn-text-lgt' btnStyle='underline-btn' iconL='bi bi-credit-card setting-icon' />
              </div>
              <div className="add-option">
                <Button text='ADDRESSES' textStyle='btn-text-lgt ' btnStyle='underline-btn' iconL='bi bi-pin-map setting-icon' />
              </div>
              <div className="changepass-option" onClick={() => handleFunctionChange('changePassword')}>
                <Button text='CHANGE PASSWORD' textStyle='btn-text-lgt ' btnStyle='underline-btn' iconL='bi bi-key setting-icon' />
              </div>
              <div className="noti-option">
                <Button text='NOTIFICATION SETTINGS' textStyle='btn-text-lgt ' btnStyle='underline-btn' iconL='bi bi-bell setting-icon' />
              </div>
              <div className="logout-option">
                <Button text='LOG OUT' textStyle='btn-text-lgt ' btnStyle='underline-btn' iconL='bi bi-arrow-bar-left setting-icon' />
              </div>
            </div>
          </div>
          {selectedFunction === 'accountInformation' && (
            <div className='info-container'>
              <div className='bot-right-title'>
                <h4 className="h4 ">Account informations</h4>
                <p className='body'>Please update the informations you want to change</p>
              </div>
              <form className="bot-right-body">
                <div className="bot-right-body1">
                  <label htmlFor="name-input" className="body-bld">Full name</label>
                  <label htmlFor="email-input" className="body-bld">Email Address</label>
                  <label htmlFor="phone-input" className="body-bld">Phone Number</label>
                  <label htmlFor="gender-input" className="body-bld">Gender</label>
                  <label htmlFor="date-input" className="body-bld">Date of Birth</label>
                </div>
                <div className="bot-right-body2">
                  <input type="text" id="name-input" value={fullName} onChange={handleInputChange} />
                  <input type="text" id="email-input" value={email} onChange={handleInputChange} />
                  <input type="number" id="phone-input" value={phoneNumber} onChange={handleInputChange} />
                  <div className="gender-choose body">
                    <input type="radio" name="gender" id="male" checked={gender === 'male'} onChange={() => setGender('male')} />
                    <label htmlFor="male" id="male-label">Male</label>

                    <input type="radio" name="gender" id="female" checked={gender === 'female'} onChange={() => setGender('female')} />
                    <label htmlFor="female" id="female-label">Female</label>

                    <input type="radio" name="gender" id="other" checked={gender === 'other'} onChange={() => setGender('other')} />
                    <label htmlFor="other" id="other-label">Other</label>
                  </div>

                  <div className="date-choose body">
                    <select className='body-sml' id="day-input" value={selectedDay} onChange={handleDayChange}>
                      <option value=""></option>
                      {[...Array(31).keys()].map((day) => (
                        <option key={day + 1} value={day + 1}>{day + 1}</option>
                      ))}
                    </select>
                    <select className='body-sml' id="month-input" value={selectedMonth} onChange={handleMonthChange}>
                      <option value=""></option>
                      {[...Array(12).keys()].map((month) => (
                        <option key={month + 1} value={month + 1}>{month + 1}</option>
                      ))}
                    </select>
                    <select className='body-sml' id="year-input" value={selectedYear} onChange={handleYearChange}>
                      <option value=""></option>
                      {years.map((year) => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </form>
              <div className="bot-right-btt">
                <Button text='UPDATE' btnStyle='auth-btn' textStyle='btn-text-sml' frameStyle='bot-right-btt-width' onClick={handleUpdate} />
                <Button text='DELETE ACCOUNT' btnStyle='auth-btn' frameStyle='bot-right-btt-width' textStyle='btn-text-sml' onClick={handleDeleteAccount} />
              </div>
            </div>
          )}
          {selectedFunction === 'paymentInformation' && (
            <div className='info-container'>
              <div className="pay-title">
                <h4 className="h4">Payment informations</h4>
                <p className="body">Account Card</p>
              </div>
              <div className="pay-body">

                <div className="pay-item-1">
                  <div className="card-type">
                    <img className='momo' src={momo} alt="" />
                    <p className="btn-text">VÍ MOMO</p>
                  </div>
                  <div className="card-info">
                    <p className="btn-text-lgt">Account/Card Number</p>
                    <p className="body-lgt">**** **** **** 2222</p>
                  </div>
                </div>
                <div className="pay-item-2">
                  <div className="card-type">
                    <img src={vietcom} alt="" />
                    <p className="btn-text">VIETCOMBANK</p>
                  </div>
                  <div className="card-info">
                    <p className="btn-text-lgt">Account/Card Number</p>
                    <p className="body-lgt">**** **** **** 2222</p>
                  </div>
                </div>
                <div className="pay-item-3">
                  <div className="card-type">
                    <img src={vietin} alt="" />
                    <p className="btn-text">VIETINBANK</p>
                  </div>
                  <div className="card-info">
                    <p className="btn-text-lgt">Account/Card Number</p>
                    <p className="body-lgt">**** **** **** 2222</p>
                  </div>
                </div>
                <div className="pay-item-4">
                  <Button text='ADD NEW CARD' btnStyle='auth-btn'></Button>

                  <p className='body-lgt'>Link with an existing bank or create a new account</p>
                </div>
              </div>
            </div>
          )}
          {selectedFunction === 'changePassword' && (
            <div className="info-container">
              <div className="bot-right-title">
                <h4 className='h4'>Change Password</h4>
                <p className="body">Change your password account</p>
              </div>
              <div className="cp-body">
                <div className="cp-label">
                  <label htmlFor="cp-email-input" className="body">Email Address</label>
                  <label htmlFor="current-password-input" className="body">Current Password</label>
                  <label htmlFor="new-password-input" className="body">New Password</label>
                  <label htmlFor="retype-new-password-input" className="body">Re-type New Password</label>
                </div>
                <div className="cp-input">
                  <input type="text" id='cp-email-input' value={email} onChange={handleInputChange} placeholder='Your Email' />
                  <input type="password" id='current-password-input' value={currentPassword} onChange={handleInputChange} placeholder='**************' />
                  <input type="password" id='new-password-input' value={newPassword} onChange={handleInputChange} placeholder='**************' />
                  <input type="password" id='retype-new-password-input' value={retypeNewPassword} onChange={handleInputChange} placeholder='**************' />
                </div>
              </div>
              <div className="bot-right-btt">
                <Button text='UPDATE' btnStyle='auth-btn' textStyle='btn-text-lgt' frameStyle='bot-right-btt-width' onClick={handleUpdatePassword} />
                <Button text='DELETE ACCOUNT' btnStyle='auth-btn' frameStyle='bot-right-btt-width' textStyle='btn-text-lgt'></Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDetail;