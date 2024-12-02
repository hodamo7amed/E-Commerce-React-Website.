import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [adminSecret, setAdminSecret] = useState('');
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const navigate = useNavigate();

  const defaultEmail = "hoda38623@gmail.com";
  const defaultPassword = "1234";
  const adminEmail = "admin@example.com";
  const adminPassword = "adminpass";
  const adminSecretKey = "adminsecret";

  const toggleForm = () => {
    setIsLogin(!isLogin);
    resetForm();
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setName('');
    setAdminSecret('');
    setAgree(false);
    setError('');
    setMessage('');
    setShowForgotPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!agree) {
      setError("You must agree to the terms & privacy policy.");
      return;
    }

    if (isLogin) {
      // Login logic
      if (isAdmin) {
        // Admin login logic
        if (email === adminEmail && password === adminPassword && adminSecret === adminSecretKey) {
          setMessage("Logged in successfully as Admin!");
          showSuccess();
          navigate('/dashboard');
        } else {
          setError("Incorrect admin credentials or secret key. Please try again.");
        }
      } else {
        // Regular user login logic
        if (email === defaultEmail && password === defaultPassword) {
          setMessage("Logged in successfully!");
          showSuccess();
          navigate('/');
        } else {
          setError("Incorrect username or password. Please try again.");
        }
      }
    } else {
      // Sign-up logic
      setMessage("Account created successfully!");
      showSuccess();
      navigate('/');
    }
  };

  const showSuccess = () => {
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const handleForgotPassword = () => {
    setShowForgotPassword(true);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    setMessage("Password reset link sent to your email.");
    setShowForgotPassword(false);
    showSuccess();
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        {message && <p className="loginsignup-message">{message}</p>}
        <form className="loginsignup-fields" onSubmit={isLogin ? handleSubmit : handleResetPassword}>
          {showForgotPassword ? (
            <>
              <input
                type="email"
                placeholder='Enter your email to reset password'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Reset Password</button>
            </>
          ) : (
            <>
              {!isLogin && (
                <input
                  type="text"
                  placeholder='Your Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              )}
              <select onChange={(e) => setIsAdmin(e.target.value === "admin")}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
              <input
                type="email"
                placeholder='Email Address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {isAdmin && isLogin && (
                <input
                  type="password"
                  placeholder='Enter Admin Secret'
                  value={adminSecret}
                  onChange={(e) => setAdminSecret(e.target.value)}
                  required
                />
              )}
              <button type="submit">{isLogin ? 'Login' : 'Continue'}</button>
            </>
          )}
        </form>

        {error && <p className="loginsignup-error">{error}</p>}
        {!showForgotPassword && (
          <p className="loginsignup-forgot">
            {isLogin ? (
              <span onClick={handleForgotPassword} style={{ cursor: 'pointer', color: 'blue' }}>Forgot Password?</span>
            ) : (
              <>
                Already have an account? <span onClick={toggleForm} style={{ cursor: 'pointer', color: 'blue' }}>Login here</span>.
              </>
            )}
          </p>
        )}

        <p className="loginsignup-login">
          {isLogin ? (
            <>
              Don't have an account? <span onClick={toggleForm} style={{ cursor: 'pointer', color: 'blue' }}>Click here</span> to sign up.
            </>
          ) : (
            <>
              Already have an account? <span onClick={toggleForm} style={{ cursor: 'pointer', color: 'blue' }}>Login here</span>.
            </>
          )}
        </p>

        <div className="loginsignup-agree">
          <input 
            type="checkbox" 
            id="agree" 
            checked={agree} 
            onChange={(e) => setAgree(e.target.checked)} 
          />
          <p>By continuing, I agree to the terms & privacy policy.</p>
        </div>
      </div>

      {showSuccessMessage && (
        <div className="success-message">
          {isLogin ? "Login Successful!" : "Sign-up Successful!"}
        </div>
      )}
    </div>
  );
};

export default LoginSignup;
