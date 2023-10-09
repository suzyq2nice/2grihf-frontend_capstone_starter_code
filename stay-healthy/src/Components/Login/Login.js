import React, { useState } from 'react';
import './Login.css';

function LoginForm() {
  // State variables for form data and errors
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  // Change handler to update form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Submit handler with email and password validation
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation (you can add more robust validation)
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setErrors({
        ...errors,
        email: 'Please enter a valid email address',
      });
      return;
    }

    // Basic password validation (you can add more requirements)
    if (!formData.password || formData.password.length < 6) {
      setErrors({
        ...errors,
        password: 'Password must be at least 6 characters long',
      });
      return;
    }


    // Reset form data and errors after submission
    setFormData({ email: '', password: '' });
    setErrors({ email: '', password: '' });
  };

  return (
    <div className="container">
      <div className="login-grid">
        <div className="login-text">
          <h2>Login</h2>
        </div>
        <div className="login-text">
          Are you a new member?{' '}
          <span>
            <a href="../Sign_Up/Sign_Up.html" style={{ color: '#2190FF' }}>
              Sign Up Here
            </a>
          </span>
        </div>
        <br />
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                aria-describedby="helpId"
                value={formData.email}
                onChange={handleChange}
              />
              <span className="error">{errors.email}</span> {/* Display email error message */}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                aria-describedby="helpId"
                value={formData.password}
                onChange={handleChange}
              />
              <span className="error">{errors.password}</span> {/* Display password error message */}
            </div>
            <div className="btn-group">
              <button
                type="submit"
                className="btn btn-primary mb-2 mr-1 waves-effect waves-light"
              >
                Login
              </button>
              <button
                type="reset"
                className="btn btn-danger mb-2 waves-effect waves-light"
              >
                Reset
              </button>
            </div>
            <br />
            <div className="login-text">Forgot Password?</div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
