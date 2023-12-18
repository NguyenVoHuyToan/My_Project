import React, { useState } from 'react';
import styled from 'styled-components';
import './Product.css';

export const Background = styled.div`
  background-image: url('https://png.pngtree.com/background/20230520/original/pngtree-modern-living-room-with-black-walls-and-furniture-picture-image_2678794.jpg');
  height: 100vh;
  width:100%;
  
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const CoverBox = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Login = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Tab = styled.div`
  margin-bottom: 20px;
`;

export const ButtonTab = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 15px;
`;
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === '123456') {
      window.location = '/';
    } else {
      setError('Sai tên đăng nhập hoặc mật khẩu');
    }
  };

  const handleReset = () => {
    window.location = '/login';
  };

  return (
    <div style={{width:"100%",height:"100%",margin:"0px"}}>
      <Background>
      <CoverBox>
        <Login>
          <h1>Online Login From</h1>

          <Title>
            <h2>Login Quick</h2>
            <p>{error}</p>
          </Title>
          <Tab>
            <input
              className="input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              style={{width:"100%"}}
            />
          </Tab>
          <Tab>
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              style={{width:"100%"}}
            />
          </Tab>
          <ButtonTab>
            <button className="button-login" onClick={handleLogin}>
              Login
            </button>
          </ButtonTab>
          <ButtonTab>
            <button className="button-login" onClick={handleReset}>
              Reset
            </button>
          </ButtonTab>
        </Login>
      </CoverBox>
    </Background>
    </div>
  );
};

export default LoginPage;
