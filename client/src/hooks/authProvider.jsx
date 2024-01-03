// AuthContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [signedInEmail, setSignedInEmail] = useState('');

  const signIn = (email) => {
    setSignedInEmail(email);
    // You can also perform other sign-in related logic here if needed
  };

  const signOut = () => {
    setSignedInEmail('');
    // You can perform other sign-out related logic here if needed
  };

  return (
    <AuthContext.Provider value={{ signedInEmail, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
